/**
 * Which file a frame fetches, at the three boards this app actually renders.
 *
 * Every master in drona-illustrations-v1 is under 1600 px — 104 of the 112 are
 * 896x500. The @2x rendition exists because a 896 px plate letterboxed into a
 * 900pt board on a 2x screen is 896 pixels of art in 1800 pixels of frame.
 *
 * THE COMPARISON IS DEVICE PIXELS, and that is the whole reason this file
 * exists. `896 > 343` reads comfortable and is the wrong comparison: a 343pt
 * board on a 3x phone is 1029 real pixels. Comparing points to pixels would
 * pick the master on every phone in the catalogue and the renditions would be
 * dead weight in the bucket — uploaded, paid for, never served, and nothing
 * would say so.
 */
import {
  RENDITION_SUFFIX, RENDITION_THRESHOLD_PX, pickRendition, renditionUrl,
} from '../r2-figure-resolver';

/** The 896x500 plate 104 of the 112 masters are. */
const MASTER_W = 896;
const BASE = 'https://assets.example.test';
const SLUG = 'bio11-ch7-cockroach--external-morphology--a';

describe('the three frames this app renders', () => {
  test.each([
    // frame, dpr, expected, why
    ['spec-small 343x236 @3x', 343, 3, RENDITION_SUFFIX, '1029 device px > 896'],
    ['real-small 495x270 @3x', 495, 3, RENDITION_SUFFIX, '1485 device px > 896'],
    ['wide 900x430 @2x tablet', 900, 2, RENDITION_SUFFIX, '1800 device px > 896'],
  ])('%s picks %s', (_label, frame, dpr, expected) => {
    expect(pickRendition(MASTER_W, frame, dpr)).toBe(expected);
  });

  test('all three frames want @2x — which is why the ingest makes one for every master', () => {
    // Stated as its own assertion because it is the fact that justifies
    // uploading 112 extra objects. If a frame ever picks the master, that is a
    // real change and this test should be the thing that notices.
    const frames: [number, number][] = [[343, 3], [495, 3], [900, 2]];
    expect(frames.map(([f, d]) => pickRendition(MASTER_W, f, d))).toEqual([
      RENDITION_SUFFIX, RENDITION_SUFFIX, RENDITION_SUFFIX,
    ]);
  });
});

describe('the master is picked when it is genuinely enough', () => {
  test('a 1x screen at the smallest board', () => {
    // 343 device px against a 896 px master: upscaling would add bytes and no
    // detail.
    expect(pickRendition(MASTER_W, 343, 1)).toBe('master');
  });

  test('a large master on a phone frame', () => {
    // The 5 masters that are 1376 wide, at 343pt @3x = 1029 px.
    expect(pickRendition(1376, 343, 3)).toBe('master');
  });

  test('an exact tie goes to the master', () => {
    // Equal resolution means the upscale adds nothing, and the master is the
    // file whose sha256 is recorded in concept_assets.
    expect(pickRendition(1029, 343, 3)).toBe('master');
    expect(pickRendition(1028, 343, 3)).toBe(RENDITION_SUFFIX);
  });
});

describe('the URL names the file that was picked', () => {
  test('@2x is a suffix on the slug, not a directory', () => {
    // Keys stay flat under concept-assets/, so a bucket listing sorts a master
    // and its rendition next to each other.
    expect(renditionUrl(BASE, SLUG, 'png', MASTER_W, 343, 3)).toBe(
      `${BASE}/concept-assets/${SLUG}@2x.png`
    );
  });

  test('the master URL is unchanged from the pre-rendition one', () => {
    expect(renditionUrl(BASE, SLUG, 'png', MASTER_W, 343, 1)).toBe(
      `${BASE}/concept-assets/${SLUG}.png`
    );
  });
});

test('the threshold matches what the ingest upscales', () => {
  // The client must not ask for a rendition the ingest never produced. 1600 is
  // the ingest's own bound; every one of the 112 masters is under it.
  expect(RENDITION_THRESHOLD_PX).toBe(1600);
  expect(MASTER_W).toBeLessThan(RENDITION_THRESHOLD_PX);
});
