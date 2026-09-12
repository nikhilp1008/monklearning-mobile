/**
 * A replaced master reaches a RUNNING app, without a restart.
 *
 * Found on 2026-09-12 while replacing the frog heart plate: the master was
 * re-rendered, re-ingested and served at an unchanged R2 key, the on-disk
 * cache keys on sha and would happily have fetched the new bytes — and the
 * board kept drawing the old plate anyway. The record cache is keyed by SLUG
 * and lives for the life of the app, so `get(slug)` kept answering and nothing
 * ever asked for the new sha. Only a cold restart changed the picture.
 *
 * That is the whole failure: a cache keyed by identity holding a value
 * identified by content. The fix is not a shorter TTL or a clear-on-class —
 * it is to compare the sha the server just reported against the one the
 * cached record was built from, and drop exactly the slugs that moved.
 */
import { createFigureResolver, type FigureRecord } from '../figure-resolver';

function record(slug: string, sha: string): FigureRecord {
  return {
    asset_slug: slug,
    // The sha rides the FILE NAME, which is the on-disk cache's own key — so
    // "which bytes is this record built from" is readable off the record.
    art: { source: { uri: `file:///figures/${slug}.${sha.slice(0, 12)}.png` },
           intrinsic_w: 1800, intrinsic_h: 1240 },
    groups: [{ id: 'all', label: { english: 'All', hinglish: 'Sabhi' } }],
    labels: [],
  };
}

const OLD = '1b1ef36faa69198bfea2f864529f950d8f3be4fb7c0834d50ebf3c6aa8fe285c';
const NEW = '21bc285f3fc51cf15933dc21bf23dc43b0fd4f2778595d00f4514d7ba660b7fa';
const SLUG = 'bio11-ch7-frog--circulatory-and-respiratory-systems--a';

describe('invalidate', () => {
  test('the full cycle: resolve, sha changes, one notification, new file drawn', async () => {
    let serving = OLD;
    let loads = 0;
    const resolver = createFigureResolver(async (slug) => {
      loads++;
      return record(slug, serving);
    });

    const seen: string[] = [];
    resolver.subscribe(SLUG, () => seen.push('notified'));

    await resolver.prefetch([SLUG]);
    expect(resolver.get(SLUG)!.art.source).toEqual({
      uri: `file:///figures/${SLUG}.${OLD.slice(0, 12)}.png`,
    });
    expect(loads).toBe(1);
    const afterFirstResolve = seen.length;

    // The chapter prefetch comes back with different bytes at the same key.
    serving = NEW;
    expect(resolver.invalidate(SLUG, 'master_sha256 changed')).toBe(true);

    // EXACTLY ONCE. A subscriber that fires twice re-renders a board mid-class
    // for no reason; one that fires zero times is the bug being fixed.
    expect(seen.length - afterFirstResolve).toBe(1);

    // The next draw asks again and gets the NEW file.
    expect(resolver.get(SLUG)).toBeNull();
    await resolver.prefetch([SLUG]);
    expect(resolver.get(SLUG)!.art.source).toEqual({
      uri: `file:///figures/${SLUG}.${NEW.slice(0, 12)}.png`,
    });
    expect(loads).toBe(2);
  });

  test('it drops ONE slug, not the map', async () => {
    const resolver = createFigureResolver(async (slug) => record(slug, OLD));
    await resolver.prefetch(['a', 'b', 'c']);
    expect(resolver.cached()).toEqual(['a', 'b', 'c']);

    resolver.invalidate('b');

    // The other two figures in the class did not change and must not pay for
    // this. A clear-the-map fix would re-download every plate on any change.
    expect(resolver.cached()).toEqual(['a', 'c']);
  });

  test('invalidating something absent is a no-op, and says so', async () => {
    const resolver = createFigureResolver(async (slug) => record(slug, OLD));
    const seen: string[] = [];
    resolver.subscribe('ghost', () => seen.push('x'));

    expect(resolver.invalidate('ghost')).toBe(false);
    // No record was dropped, so nothing is stale, so nobody is told. A
    // notification here would redraw a board for no reason.
    expect(seen).toEqual([]);
  });

  test('an in-flight load for the OLD sha cannot resurrect the record', async () => {
    let release!: (r: FigureRecord) => void;
    const pending = new Promise<FigureRecord>((res) => { release = res; });
    let call = 0;
    const resolver = createFigureResolver(async (slug) => {
      call++;
      return call === 1 ? pending : record(slug, NEW);
    });

    const first = resolver.prefetch([SLUG]);
    // Invalidate WHILE the first load is still in the air.
    resolver.invalidate(SLUG, 'replaced mid-flight');
    release(record(SLUG, OLD));
    await first;

    // The stale load may complete, but it must not be the record that stands:
    // a second prefetch re-loads rather than finding the old promise cached.
    await resolver.prefetch([SLUG]);
    expect(resolver.get(SLUG)!.art.source).toEqual({
      uri: `file:///figures/${SLUG}.${NEW.slice(0, 12)}.png`,
    });
  });
});
