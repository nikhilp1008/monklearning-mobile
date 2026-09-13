/**
 * A PUBLISHED LABEL SET reaches a running app, without a restart.
 *
 * The art half of this was fixed on 2026-09-12 (`resolver-staleness`): a
 * replaced master moves `master_sha256`, `setChapterAssets` sees it move, and
 * the cached record is dropped. Publishing a label set does none of that. It
 * rewrites concept-assets/<slug>.json and never touches the master, so when
 * the frog heart's labels went live the same afternoon, every already-running
 * client kept drawing the plate unlabelled. The bytes were right, the board
 * was right, and nothing told the client to look again.
 *
 * Migration 0045 puts `label_set_version` and `label_set_sha256` on the asset
 * row so the class-start prefetch carries the signal. The SHA is what decides:
 * a reviewer who corrects one anchor and republishes at the same version still
 * changes the bytes.
 *
 * The fields are OPTIONAL because the migration is applied separately, and
 * absent must never read as "moved" — otherwise every class start would drop
 * every cached figure.
 */
import { setChapterAssets, _clearChapterAssets, r2FigureResolver }
  from '../r2-figure-resolver';
import type { AssetRow } from '../figure-file-cache';
import { createFigureResolver, type FigureRecord } from '../figure-resolver';

const SLUG = 'bio11-ch7-frog--circulatory-and-respiratory-systems--a';
const MASTER = '21bc285f3fc51cf15933dc21bf23dc43b0fd4f2778595d00f4514d7ba660b7fa';
const SET_V1 = 'f107e9fe000b298204b096403b58db7cc44d3112570cf6bcd519f3105e1d4636';
const SET_V2 = '9a3c1d55e0b74412aa0e6f2c8d19b3775e41cc0aa2f6b8d3e5170c94ab2d6e81';

const row = (over: Partial<AssetRow> = {}): AssetRow => ({
  asset_slug: SLUG, r2_key: `concept-assets/${SLUG}.png`, bytes: 120_000,
  master_sha256: MASTER, rendition_2x_sha256: null, width: 1800, height: 1240,
  ...over,
});

beforeEach(() => {
  _clearChapterAssets();
  r2FigureResolver.invalidate(SLUG, 'test reset');
});

describe('setChapterAssets and the label set', () => {
  test('first sight of a chapter drops nothing — there is nothing to compare', () => {
    expect(setChapterAssets([row({ label_set_version: 0, label_set_sha256: null })]))
      .toEqual([]);
  });

  test('publishing a set where there was none invalidates that slug, once', () => {
    setChapterAssets([row({ label_set_version: 0, label_set_sha256: null })]);
    const dropped = setChapterAssets([
      row({ label_set_version: 1, label_set_sha256: SET_V1 }),
    ]);
    expect(dropped).toEqual([SLUG]);
  });

  test('a corrected anchor republished at the SAME version still invalidates', () => {
    // The case a version-only check would miss, and the one this exists for.
    setChapterAssets([row({ label_set_version: 2, label_set_sha256: SET_V1 })]);
    expect(setChapterAssets([row({ label_set_version: 2, label_set_sha256: SET_V2 })]))
      .toEqual([SLUG]);
  });

  test('an unchanged set drops nothing, however many times a class starts', () => {
    const r = row({ label_set_version: 2, label_set_sha256: SET_V1 });
    setChapterAssets([r]);
    expect(setChapterAssets([r])).toEqual([]);
    expect(setChapterAssets([r])).toEqual([]);
  });

  test('ABSENT fields are not a change — the migration is applied separately', () => {
    // Reading `undefined` as "moved to nothing" would drop every cached
    // figure on every class start, on every build older than migration 0045.
    setChapterAssets([row()]);
    expect(setChapterAssets([row()])).toEqual([]);
    // And a server that gains the columns mid-session does not retro-drop.
    expect(setChapterAssets([row({ label_set_version: 0, label_set_sha256: null })]))
      .toEqual([]);
  });

  test('the master still wins — art and labels are independent signals', () => {
    setChapterAssets([row({ label_set_version: 1, label_set_sha256: SET_V1 })]);
    const dropped = setChapterAssets([
      row({ master_sha256: 'aa'.repeat(32), label_set_version: 1, label_set_sha256: SET_V1 }),
    ]);
    expect(dropped).toEqual([SLUG]);
  });

  test('nothing cached, nothing announced', () => {
    // `invalidate` notifies whoever is DRAWING a slug. With no cached record
    // there is no stale board to correct, so a notification would wake every
    // subscriber to tell them nothing changed.
    let hits = 0;
    const off = r2FigureResolver.subscribe(SLUG, () => { hits++; });
    setChapterAssets([row({ label_set_version: 0, label_set_sha256: null })]);
    setChapterAssets([row({ label_set_version: 1, label_set_sha256: SET_V1 })]);
    expect(hits).toBe(0);
    off();
  });
});

/*
 * The other half of the chain, on a resolver that actually holds a record.
 * `setChapterAssets` DECIDES (above); `invalidate` is what makes the decision
 * take effect, and this is the part a student would see: a board showing an
 * unlabelled plate, a set published mid-class, and labels appearing without
 * the app being touched.
 */
describe('publish -> prefetch -> one notification -> labels drawn', () => {
  const plate = (labels: number): FigureRecord => ({
    asset_slug: SLUG,
    art: { source: { uri: `file:///figures/${SLUG}.png` },
           intrinsic_w: 1800, intrinsic_h: 1240 },
    groups: [{ id: 'all', label: { english: 'All', hinglish: 'All' } }],
    labels: Array.from({ length: labels }, (_, i) => ({
      id: `l${i}`, term: { english: `term ${i}`, hinglish: `term ${i}` },
      anchor: { u: 0.3 + i * 0.02, v: 0.4 }, side: 'left' as const, group: 'all',
    })),
  });

  test('the full cycle, no restart', async () => {
    // Before the publish the loader yields the plate ALONE — which is what
    // `createR2FigureLoader` does for a slug with no reviewed set, and what
    // the frog heart drew for the whole afternoon of 2026-09-12.
    let published = false;
    let loads = 0;
    const resolver = createFigureResolver(async () => {
      loads++;
      return plate(published ? 12 : 0);
    });

    const seen: string[] = [];
    resolver.subscribe(SLUG, () => seen.push('x'));

    await resolver.prefetch([SLUG]);
    expect(resolver.get(SLUG)!.labels).toHaveLength(0);
    expect(loads).toBe(1);
    const before = seen.length;

    // apply_review publishes; the next class-start prefetch carries the new
    // label_set_sha256 and setChapterAssets asks for this slug to be dropped.
    published = true;
    expect(resolver.invalidate(SLUG, 'label_set_sha256 moved')).toBe(true);

    // EXACTLY ONCE. Twice re-renders a board mid-class for no reason; zero
    // times is the bug this whole migration exists to fix.
    expect(seen.length - before).toBe(1);

    expect(resolver.get(SLUG)).toBeNull();
    await resolver.prefetch([SLUG]);
    expect(resolver.get(SLUG)!.labels).toHaveLength(12);
    expect(loads).toBe(2);
  });
});
