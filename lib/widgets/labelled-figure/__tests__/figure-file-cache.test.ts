/**
 * The download cache. Every filesystem call is faked — these tests describe
 * what the cache PROMISES, and a test that needed a real disk to say so would
 * only run on a machine that already had the feature working.
 */
import {
  CACHE_CAP_BYTES, chooseKey, fileNameFor, _resetFigureCacheState,
} from '../figure-file-cache';

const SLUG = 'bio11-ch7-cockroach--morphology-and-digestive-system--a';
const SHA = 'c28a11b45954cd74' + 'f'.repeat(48);

const row = (over: Partial<Parameters<typeof chooseKey>[0]> = {}) => ({
  asset_slug: SLUG,
  r2_key: `concept-assets/${SLUG}.png`,
  bytes: 101155,
  master_sha256: SHA,
  rendition_2x_sha256: null,
  width: 896,
  height: 560,
  ...over,
});

beforeEach(_resetFigureCacheState);

describe('the file name IS the invalidation', () => {
  test('the hash is in the name, so new art is a different file', () => {
    const a = fileNameFor(SLUG, SHA);
    const b = fileNameFor(SLUG, 'd'.repeat(64));
    expect(a).toBe(`${SLUG}.c28a11b45954.png`);
    expect(a).not.toBe(b);
    // Nothing has to REMEMBER to invalidate: the old file becomes unreachable
    // rather than stale, which is the difference between a cache that heals
    // and one that has to be cleared by hand.
  });

  test('the extension follows the object, not the assumption', () => {
    expect(fileNameFor(SLUG, SHA, 'jpg').endsWith('.jpg')).toBe(true);
  });
});

describe('the rendition is chosen once, at download time', () => {
  test('a phone frame on an 896px master takes the @2x', () => {
    // 343pt at 3x is 1029 device px against an 896px master.
    expect(chooseKey(row(), 343, 3)).toEqual({
      key: `concept-assets/${SLUG}@2x.png`, isMaster: false,
    });
  });

  test('a master wide enough is taken as-is', () => {
    // The frog heart: 1800px, above every frame this app renders.
    expect(chooseKey(row({ width: 1800 }), 900, 2)).toEqual({
      key: `concept-assets/${SLUG}.png`, isMaster: true,
    });
  });

  test('downloading the wrong one is a second fetch nobody sees', () => {
    // Stated as its own case because the failure is invisible: fetching the
    // master and then letting the renderer ask for @2x costs two downloads
    // and the student waits for both.
    const phone = chooseKey(row(), 343, 3);
    const tablet = chooseKey(row(), 900, 2);
    expect(phone.key).toBe(tablet.key);   // both want @2x on an 896px master
  });
});

test('the cap is 200 MB and is stated in bytes, not in a comment', () => {
  expect(CACHE_CAP_BYTES).toBe(200 * 1024 * 1024);
});
