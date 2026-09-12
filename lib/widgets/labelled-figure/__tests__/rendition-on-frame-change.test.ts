/**
 * B3 — the rendition follows the frame, and is fetched once.
 *
 * `pickRendition` compares DEVICE PIXELS against the master's pixel width, and
 * the loader baked the frame in at construction (900pt). That was safe while
 * the classroom was landscape-locked and every figure was fetched for one box.
 * It stopped being safe at db00ac4, where the student chooses the orientation:
 * portrait hands the board 340pt and landscape 702pt, which at 3x is 1020px
 * against 2106px — either side of an 1800px master. A figure resolved in
 * portrait and then rotated into landscape was being drawn upscaled past 1.0
 * with a perfectly good @2x sitting in the bucket.
 *
 * The rule asserted here: upgrade master -> @2x when the frame demands it,
 * exactly once, and never re-download to go back DOWN.
 */
import {
  RENDITION_SUFFIX, pickRendition, setBoardFrame, _resetBoardFrame, _recordVariant,
  setChapterAssets, _clearChapterAssets,
} from '../r2-figure-resolver';

const SLUG = 'bio11-ch7-frog--circulatory-and-respiratory-systems--a';

function row(over: Record<string, unknown> = {}) {
  return {
    asset_slug: SLUG,
    concept_slug: SLUG.replace(/--a$/, ''),
    sub_index: 0,
    r2_key: `concept-assets/${SLUG}.png`,
    content_type: 'image/png',
    width: 1800,
    height: 1240,
    bytes: 112956,
    master_sha256: 'a'.repeat(64),
    rendition_2x_sha256: 'b'.repeat(64),
    ...over,
  } as never;
}

beforeEach(() => {
  _clearChapterAssets();
  _resetBoardFrame();
});

describe('pickRendition is about device pixels, not points', () => {
  test('340pt portrait at 3x stays on an 1800px master', () => {
    // 1020px < 1800px: the master already out-resolves the box.
    expect(pickRendition(1800, 340, 3)).toBe('master');
  });

  test('702pt landscape at 3x wants the @2x', () => {
    // 2106px > 1800px: the master would be upscaled past 1.0.
    expect(pickRendition(1800, 702, 3)).toBe(RENDITION_SUFFIX);
  });

  test('a tie goes to the master', () => {
    // Equal resolution means the upscale adds bytes and no detail, and the
    // master is the file whose sha256 is recorded.
    expect(pickRendition(1800, 600, 3)).toBe('master');
  });
});

describe('setBoardFrame', () => {
  test('no asset row means nothing to upgrade to', () => {
    // The row is what says a rendition EXISTS. Without one this must not
    // invalidate a record on a guess and send the board to a 404.
    expect(setBoardFrame(702, 3)).toEqual([]);
  });

  test('a master with no @2x is left alone however big the frame gets', () => {
    // The frog heart is exactly this case: 1800px wide, so the ingest
    // deliberately produced no rendition. Asking for one would 404.
    setChapterAssets([row({ rendition_2x_sha256: null })]);
    _recordVariant(SLUG, 'master');
    expect(setBoardFrame(900, 3)).toEqual([]);
  });

  test('340x340@3x -> 702x289: the @2x is requested EXACTLY once', () => {
    setChapterAssets([row()]);
    // The figure was resolved in portrait, so the master was the right file.
    setBoardFrame(340, 3);
    _recordVariant(SLUG, 'master');

    // Rotate into landscape: 702 * 3 = 2106px > 1800px master.
    expect(setBoardFrame(702, 3)).toEqual([SLUG]);

    // ONCE. Staying in landscape must not ask again — the variant was cleared
    // when the upgrade was decided, so a second call has nothing to upgrade.
    expect(setBoardFrame(702, 3)).toEqual([]);
    expect(setBoardFrame(702, 3)).toEqual([]);
  });

  test('going back down does not re-download', () => {
    // The @2x already on disk is not WRONG at 340pt, merely generous.
    // Spending a download to lose detail is the wrong trade, so the
    // downgrade direction is deliberately not implemented.
    setChapterAssets([row()]);
    _recordVariant(SLUG, RENDITION_SUFFIX);
    expect(setBoardFrame(340, 3)).toEqual([]);
  });
});
