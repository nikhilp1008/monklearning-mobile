/**
 * The real figure loader, exercised without a bucket.
 *
 * The illustrations bucket is provisioned separately, so the choice was between
 * a module nothing runs until infrastructure lands and a module whose network
 * edge is injectable. `createR2FigureLoader` takes its `fetchJson`, so
 * everything except the socket is checked here — including the refusals, which
 * are the whole reason this is not just a fetch.
 */
import { createR2FigureLoader, assetObjectUrl, labelSetUrl } from '../r2-figure-resolver';
import { createFigureResolver } from '../figure-resolver';
import { LABEL_SET_SCHEMA_VERSION } from '../label-set';

const BASE = 'https://assets.example.test';
const SLUG = 'bio11-ch16-nephron-structure-and-types';

/** A valid label set in the WIRE format an author writes. */
const GOOD = {
  asset_slug: SLUG,
  image_w: 1600,
  image_h: 1200,
  schema_version: LABEL_SET_SCHEMA_VERSION,
  reviewed_by: 'raasikh',
  labels: [
    { id: 'l1', text: { en: "Bowman's capsule", hi: 'बोमन संपुट' }, anchor: [0.31, 0.42], side: 'l' },
    { id: 'l2', text: { en: 'glomerulus', hi: 'केशिकागुच्छ' }, anchor: [0.72, 0.47], side: 'r' },
  ],
  // The §4 provenance block the stored JSON also carries. Nothing here reads
  // it; present so a change that starts reading it in the render path is a
  // visible diff rather than a quiet one.
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

test('a good set resolves to what the renderer needs', async () => {
  const rec = await load(GOOD)(SLUG);
  expect(rec.asset_slug).toBe(SLUG);
  expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
  expect(rec.art.intrinsic_w).toBe(1600);
  expect(rec.labels).toHaveLength(2);
  // Wire `text.{en,hi}` became renderer `term.{english,hinglish}`, and
  // `anchor: [x, y]` became `{u, v}`. If that mapping ever silently inverts,
  // every label lands transposed and still renders.
  expect(rec.labels[0].term.english).toBe("Bowman's capsule");
  expect(rec.labels[0].anchor).toEqual({ u: 0.31, v: 0.42 });
  // `l`/`r` resolved to the renderer's own Side.
  expect(rec.labels.map((l) => l.side)).toEqual(['left', 'right']);
});

describe('a draft never ships', () => {
  test('no reviewed_by does not resolve at all', async () => {
    const { reviewed_by, ...draft } = GOOD;
    await expect(load(draft)(SLUG)).rejects.toThrow(/no reviewed_by/);
  });

  test('a placeholder reviewer is the same as none', async () => {
    // NOT NULL does not stop 'unknown', and 'unknown' is what gets typed.
    await expect(load({ ...GOOD, reviewed_by: 'TBD' })(SLUG)).rejects.toThrow(/no reviewed_by/);
  });
});

describe('sets that would render plausibly and wrongly are REFUSED', () => {
  test('an unversioned file is not "version 1 by default"', async () => {
    const { schema_version, ...nover } = GOOD;
    await expect(load(nover)(SLUG)).rejects.toThrow(/schema_version must be 1/);
  });

  test('anchors in pixels rather than 0..1', async () => {
    const px = { ...GOOD, labels: [{ ...GOOD.labels[0], anchor: [496, 504] }] };
    await expect(load(px)(SLUG)).rejects.toThrow(/normalised 0\.\.1/);
  });

  test('a half-translated set', async () => {
    const half = { ...GOOD, labels: [{ ...GOOD.labels[0], text: { en: 'glomerulus', hi: '' } }] };
    await expect(load(half)(SLUG)).rejects.toThrow(/text\.hi is missing/);
  });

  test('duplicate ids — a Cue.patch names labels by id', async () => {
    const dup = { ...GOOD, labels: [GOOD.labels[0], { ...GOOD.labels[1], id: 'l1' }] };
    await expect(load(dup)(SLUG)).rejects.toThrow(/duplicate/);
  });

  test('half the labels grouped is a set that was half-organised', async () => {
    const mixed = {
      ...GOOD,
      labels: [{ ...GOOD.labels[0], group: 'vascular' }, GOOD.labels[1]],
    };
    await expect(load(mixed)(SLUG)).rejects.toThrow(/Either all do or none do/);
  });

  test('a set for a DIFFERENT figure', async () => {
    // The file that answered is not the file that was asked for. Serving it
    // puts one figure's labels on another figure's art — the single worst
    // outcome this whole pipeline can produce, and the easiest to cause with a
    // mistyped filename.
    await expect(load({ ...GOOD, asset_slug: 'bio11-ch18-neuron' })(SLUG)).rejects.toThrow(
      /asked for .* and got a set for/
    );
  });

  test('no labels at all', async () => {
    await expect(load({ ...GOOD, labels: [] })(SLUG)).rejects.toThrow(/labels is empty/);
  });

  test('no intrinsic size — every label position divides by zero', async () => {
    await expect(load({ ...GOOD, image_w: 0 })(SLUG)).rejects.toThrow(/image_w must be a positive/);
  });

  test('an unset base URL says so instead of fetching nowhere', async () => {
    await expect(load(GOOD, '')(SLUG)).rejects.toThrow(/EXPO_PUBLIC_ASSETS_BASE_URL is not set/);
  });

  test('every problem is reported at once, not the first', async () => {
    const bad = { ...GOOD, image_w: 0, schema_version: 99 };
    await expect(load(bad)(SLUG)).rejects.toThrow(/schema_version[\s\S]*image_w|image_w[\s\S]*schema_version/);
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
    expect(r.get(SLUG)).toBeNull();
  });
});
