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
import { LABEL_SET_SCHEMA_VERSION, validateLabelSet } from '../label-set';

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
    { id: 'l1', text: { en: "Bowman's capsule", hi: 'Bowman samput' }, anchor: [0.31, 0.42], side: 'l' },
    { id: 'l2', text: { en: 'glomerulus', hi: 'Keshikaguchchh' }, anchor: [0.72, 0.47], side: 'r' },
  ],
  // The §4 provenance block the stored JSON also carries. Nothing here reads
  // it; present so a change that starts reading it in the render path is a
  // visible diff rather than a quiet one.
  licence: 'PD-old-70',
  source_url: 'https://commons.wikimedia.org/wiki/File:Gray1128.png',
  author: 'Henry Vandyke Carter',
};

/** `measureArt` is stubbed everywhere: no test may reach a network or a bucket. */
const MEASURED = { w: 1800, h: 1240 };
const load = (payload: unknown, base = BASE) =>
  createR2FigureLoader(base, async () => payload, async () => MEASURED);

/** No label set published at all — `fetchJson` rejects, as a 404 does. */
const loadWithNoSet = (base = BASE) =>
  createR2FigureLoader(
    base,
    async () => { throw new Error('404 Not Found'); },
    async () => MEASURED
  );

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
  /*
   * These asserted the loader REJECTED. It no longer does, and the guarantee
   * they exist for is unchanged: a draft's labels never reach a student. What
   * changed is the blast radius — withholding the labels used to take the
   * plate with them, and the plate is the same licensed file either way.
   *
   * So each case now asserts the two halves separately: zero labels, and a
   * drawn plate. A test that only checked "it threw" could not tell the two
   * apart, which is how 113 uploaded plates rendered as blank boards.
   */
  const withheld = async (payload: unknown) => {
    const rec = await load(payload)(SLUG);
    expect(rec.labels).toHaveLength(0);
    expect(rec.groups).toHaveLength(0);
    expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
    return rec;
  };

  test('no reviewed_by withholds the labels', async () => {
    const { reviewed_by, ...draft } = GOOD;
    await withheld(draft);
  });

  test('a placeholder reviewer is the same as none', async () => {
    // NOT NULL does not stop 'unknown', and 'unknown' is what gets typed.
    await withheld({ ...GOOD, reviewed_by: 'TBD' });
  });
});

describe('sets that would render plausibly and wrongly are REFUSED', () => {
  /* Refused means their LABELS are refused. The plate is drawn regardless —
   * it is correct, licensed and already uploaded, and none of these faults are
   * faults of the art. */
  const withheld = async (payload: unknown) => {
    const rec = await load(payload)(SLUG);
    expect(rec.labels).toHaveLength(0);
    expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
  };

  test('an unversioned file is not "version 1 by default"', async () => {
    const { schema_version, ...nover } = GOOD;
    await withheld(nover);
  });

  test('anchors in pixels rather than 0..1', async () => {
    const px = { ...GOOD, labels: [{ ...GOOD.labels[0], anchor: [496, 504] }] };
    await withheld(px);
  });

  test('a half-translated set', async () => {
    const half = { ...GOOD, labels: [{ ...GOOD.labels[0], text: { en: 'glomerulus', hi: '' } }] };
    await withheld(half);
  });

  test('duplicate ids — a Cue.patch names labels by id', async () => {
    const dup = { ...GOOD, labels: [GOOD.labels[0], { ...GOOD.labels[1], id: 'l1' }] };
    await withheld(dup);
  });

  test('half the labels grouped is a set that was half-organised', async () => {
    const mixed = {
      ...GOOD,
      labels: [{ ...GOOD.labels[0], group: 'vascular' }, GOOD.labels[1]],
    };
    await withheld(mixed);
  });

  test('a set for a DIFFERENT figure', async () => {
    // The file that answered is not the file that was asked for. Serving it
    // puts one figure's labels on another figure's art — the single worst
    // outcome this whole pipeline can produce, and the easiest to cause with a
    // mistyped filename.
    await withheld({ ...GOOD, asset_slug: 'bio11-ch18-neuron' });
  });

  test('no labels at all', async () => {
    await withheld({ ...GOOD, labels: [] });
  });

  test('no intrinsic size — every label position divides by zero', async () => {
    await withheld({ ...GOOD, image_w: 0 });
  });

  test('an unset base URL says so instead of fetching nowhere', async () => {
    await expect(load(GOOD, '')(SLUG)).rejects.toThrow(/EXPO_PUBLIC_ASSETS_BASE_URL is not set/);
  });

  test('every problem is reported at once, not the first', () => {
    // Asserted against the validator rather than the loader's throw, because
    // the loader no longer throws — it withholds the labels and warns. The
    // guarantee is unchanged and belongs to the layer that owns it: an author
    // fixing one field per round trip is how a 65-file batch becomes a week.
    const bad = { ...GOOD, image_w: 0, schema_version: 99 };
    const checked = validateLabelSet(bad);
    expect(checked.ok).toBe(false);
    const joined = checked.ok ? '' : checked.errors.join('; ');
    expect(joined).toMatch(/schema_version/);
    expect(joined).toMatch(/image_w/);
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


// ---------------------------------------------------------------------------
// THE PLATE AND THE LABELS ARE TWO DECISIONS.
//
// This loader used to throw on a missing or unreviewed label set, so the whole
// figure failed to resolve and the board fell to the next tier — a blank where
// a correct, licensed, already-uploaded plate existed. Measured on the
// simulator: 113 plates ingested, 0 label sets published, 0 figures on any
// board.
//
// The review gate is about LABELS. An unreviewed anchor may put a correct word
// on the wrong organ and a student cannot tell. None of that is true of the
// art, which is the same file either way.
// ---------------------------------------------------------------------------

describe('an unreviewed or absent label set costs the labels, never the plate', () => {
  test('no label set published -> plate drawn, zero labels', async () => {
    const rec = await loadWithNoSet()(SLUG);
    expect(rec.asset_slug).toBe(SLUG);
    expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
    // Size comes from the image itself, because image_w/image_h live in the
    // set that is not there.
    expect(rec.art.intrinsic_w).toBe(MEASURED.w);
    expect(rec.art.intrinsic_h).toBe(MEASURED.h);
    expect(rec.labels).toHaveLength(0);
    expect(rec.groups).toHaveLength(0);
  });

  test('set published with reviewed_by null -> plate drawn, zero labels', async () => {
    const rec = await load({ ...GOOD, reviewed_by: null })(SLUG);
    expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
    expect(rec.labels).toHaveLength(0);
    // The set carried two perfectly well-formed labels. They are withheld
    // because nobody has signed them, not because they are malformed.
    expect(GOOD.labels).toHaveLength(2);
  });

  test('reviewed -> plate AND labels', async () => {
    const rec = await load(GOOD)(SLUG);
    expect(rec.labels).toHaveLength(2);
    expect(rec.groups.length).toBeGreaterThan(0);
    expect(rec.art.intrinsic_w).toBe(1600);   // from the set, not measured
  });

  test('a set addressed to another slug is withheld, and the plate still draws', async () => {
    // The one label failure worse than having none: another figure's words on
    // this figure's art.
    const rec = await load({ ...GOOD, asset_slug: 'some-other-figure' })(SLUG);
    expect(rec.asset_slug).toBe(SLUG);
    expect(rec.labels).toHaveLength(0);
    expect(rec.art.intrinsic_w).toBe(MEASURED.w);
  });

  test('an invalid set is withheld, and the plate still draws', async () => {
    const rec = await load({ asset_slug: SLUG, labels: 'not an array' })(SLUG);
    expect(rec.labels).toHaveLength(0);
    expect(rec.art.source).toEqual({ uri: `${BASE}/concept-assets/${SLUG}.png` });
  });

  test('art with no measurable size still throws', async () => {
    // The one thing that is not a rougher figure but a wrong one: a letterbox
    // fit computed against zero puts the plate nowhere.
    const loader = createR2FigureLoader(
      BASE,
      async () => { throw new Error('404'); },
      async () => ({ w: 0, h: 0 })
    );
    await expect(loader(SLUG)).rejects.toThrow(/no intrinsic size/);
  });
});

describe('the bucket cannot be unconfigured silently', () => {
  /*
   * The variable was absent from every env file in the repo for the entire
   * life of the illustration tier. 113 plates ingested, publicly readable,
   * reconciled 0/0, and not one could reach a board — because ASSETS_BASE_URL
   * fell back to '' and the classroom selected the bundled placeholder, which
   * always resolves and therefore looks exactly like success.
   */
  const realDev = (global as { __DEV__?: boolean }).__DEV__;
  afterEach(() => { (global as { __DEV__?: boolean }).__DEV__ = realDev; });

  test('dev throws when it resolves empty', () => {
    jest.isolateModules(() => {
      (global as { __DEV__?: boolean }).__DEV__ = true;
      delete process.env.EXPO_PUBLIC_ASSETS_BASE_URL;
      const mod = require('../r2-figure-resolver');
      expect(() => mod.assertAssetsConfigured()).toThrow(/EXPO_PUBLIC_ASSETS_BASE_URL is not set/);
    });
  });

  test('production does not throw — a student mid-class is not helped by a crash', () => {
    jest.isolateModules(() => {
      (global as { __DEV__?: boolean }).__DEV__ = false;
      delete process.env.EXPO_PUBLIC_ASSETS_BASE_URL;
      const mod = require('../r2-figure-resolver');
      expect(() => mod.assertAssetsConfigured()).not.toThrow();
    });
  });

  test('configured is silent in both', () => {
    jest.isolateModules(() => {
      (global as { __DEV__?: boolean }).__DEV__ = true;
      process.env.EXPO_PUBLIC_ASSETS_BASE_URL = 'https://assets.example.test';
      const mod = require('../r2-figure-resolver');
      expect(() => mod.assertAssetsConfigured()).not.toThrow();
    });
  });
});
