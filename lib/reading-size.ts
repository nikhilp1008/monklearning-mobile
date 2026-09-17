/**
 * HOW BIG THE TEXTBOOK IS SET, as a reader's own choice.
 *
 * Three presets and no slider. A slider invites fiddling with a thing that
 * should be decided once and forgotten, and it makes every value between the
 * good ones reachable — 1.03 of the body size is not a reading preference, it
 * is a fidget. Three named steps are a decision.
 *
 * THE MULTIPLIER TOUCHES TYPE ONLY, never geometry. Card widths, diagram
 * boxes and figure viewports are all sized off the same device scale, and
 * multiplying those with the text pushed a 306pt card to 352 inside a column
 * 342 wide — the content would have grown its way off the screen. So this
 * scales font sizes and line heights, and leaves every box exactly where the
 * layout put it.
 *
 * WHY THESE THREE NUMBERS. The body is 16.5pt, which at the reader's own
 * column width measures about 41 characters a line — inside the 30-to-40 band
 * that is the accepted comfortable measure on a phone, and at the top of it.
 * So:
 *
 *   Small  0.88 → 14.5pt, ~47 characters. Denser, for a student who wants
 *          more of the page at once and can read it.
 *   Medium 1.00 → 16.5pt, ~41 characters. Unchanged, and the default.
 *   Large  1.15 → 19pt, ~36 characters. For reading at arm's length, or
 *          on a phone held further away than it should be.
 *
 * Going beyond 1.15 is where a phone column stops working: the measure falls
 * under about 32 characters and the eye starts returning more often than it
 * reads, which is the same problem as a line that is too long, arrived at
 * from the other side.
 */

export type ReadingSize = 'small' | 'medium' | 'large';

export const READING_SIZES: ReadingSize[] = ['small', 'medium', 'large'];

export const READING_SIZE_DEFAULT: ReadingSize = 'medium';

const MULTIPLIER: Record<ReadingSize, number> = {
  small: 0.88,
  medium: 1,
  large: 1.15,
};

export function readingMultiplier(size: ReadingSize): number {
  return MULTIPLIER[size] ?? 1;
}

/** Stored, because a reading size is set once and expected to hold. */
export const READING_SIZE_KEY = 'monk.reading-size.v1';

/** Anything unrecognised — an older key, a corrupt write — reads as default. */
export function parseReadingSize(raw: string | null | undefined): ReadingSize {
  return READING_SIZES.includes(raw as ReadingSize)
    ? (raw as ReadingSize)
    : READING_SIZE_DEFAULT;
}

/**
 * The label on each step. One letter, at three sizes, is the control — so
 * these are for the screen reader rather than for the eye.
 */
export const READING_SIZE_LABEL: Record<ReadingSize, string> = {
  small: 'Small text',
  medium: 'Medium text',
  large: 'Large text',
};
