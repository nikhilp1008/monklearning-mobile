/**
 * The real figure loader, exercised without a bucket.
 *
 * The illustrations bucket is provisioned separately and does not exist yet, so
 * the choice was between a module nothing runs until infrastructure lands and a
 * module whose network edge is injectable. `createR2FigureLoader` takes its
 * `fetchJson`, so everything except the socket is checked here — including the
 * two refusals, which are the whole reason this file is not just a fetch.
 */
import { createR2FigureLoader, assetObjectUrl, labelSetUrl } from '../r2-figure-resolver';
import { createFigureResolver } from '../figure-resolver';

const BASE = 'https://assets.example.test';
const SLUG = 'bio11-ch16-nephron-structure-and-types';

const GOOD = {
  art: { intrinsic_w: 1600, intrinsic_h: 1200 },
  groups: [{ id: 'g1', label: 'Renal corpuscle' }],
  labels: [
    { id: 'l1', group: 'g1', text: "Bowman's capsule", x: 0.31, y: 0.42 },
    { id: 'l2', group: 'g1', text: 'glomerulus', x: 0.38, y: 0.47 },
  ],
  // The §4 provenance block the stored JSON also carries. Nothing here reads
  // it; asserted present so a future change that starts reading it in the
  // render path is a visible diff rather than a quiet one.
  licence: 'PD-old-70',
  source_url: 'https://commons.wikimedia.org/wiki/File:Gray1128.png',
  author: 'Henry Vandyke Carter',
};

const load = (payload: unknown, base = BASE) =>
  createR2FigureLoader(base, async () => payload);

describe('keys mirror the API, so a bucket listing matches the work order', () => {
  test('art key is concept-assets/{slug}.{ext}', () => {
    expect(assetObjectUrl(BASE, SLUG)).toBe(`${BASE}/concept-assets/${SLUG}.png`);
    expect(assetObjectUrl(BASE, SLUG, 'jpg')).toBe(`${BASE}/concept-assets/${SLUG}.jpg`);
  });
  test('label set sits beside it', () => {
    expect(labelSetUrl(BASE, SLUG)).toBe(`${BASE}/concept-assets/${SLUG}.json`);
  });
});

test('a good record resolves to what the renderer needs', async () => {
  const rec = await load(GOOD)(SLUG);
  expect(rec.asset_slug).toBe(SLUG);
  expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
  expect(rec.art.intrinsic_w).toBe(1600);
  expect(rec.labels).toHaveLength(2);
});

describe('records that would render plausibly and wrongly are REFUSED', () => {
  test('no intrinsic size — every label position divides by zero', async () => {
    await expect(load({ ...GOOD, art: {} })(SLUG)).rejects.toThrow(/no intrinsic size/);
  });

  test('no labels — that is art, not a figure', async () => {
    await expect(load({ ...GOOD, labels: [] })(SLUG)).rejects.toThrow(/carries no labels/);
  });

  test('an unset base URL says so instead of fetching nowhere', async () => {
    await expect(load(GOOD, '')(SLUG)).rejects.toThrow(/EXPO_PUBLIC_ASSETS_BASE_URL is not set/);
  });
});

describe('the resolver contract survives the real loader', () => {
  test('get() is cache-only: null before prefetch, record after', async () => {
    const r = createFigureResolver(load(GOOD));
    // THE RULE THIS FILE EXISTS FOR. `get()` cannot await, so a board renders
    // with the radio off by construction. A resolver that resolved on `get()`
    // would pass every other test here and block a frame on a live class.
    expect(r.get(SLUG)).toBeNull();
    await r.prefetch([SLUG]);
    expect(r.get(SLUG)?.asset_slug).toBe(SLUG);
  });

  test('prefetch reports a miss instead of throwing it', async () => {
    const r = createFigureResolver(async () => {
      throw new Error('404');
    });
    const report = await r.prefetch([SLUG]);
    expect(report.missing).toEqual([SLUG]);
    expect(report.resolved).toEqual([]);
    // Still null, still no exception reaching the class.
    expect(r.get(SLUG)).toBeNull();
  });
});
