import type { TextStyle } from 'react-native';

import { colors } from '@/constants/brand';

/**
 * ONE PAGE TITLE, FOR EVERY PAGE.
 *
 * There were fifteen. Counted across the app in September 2026: four weights
 * and fifteen distinct weight/size pairs for the one piece of text that names
 * the screen you are on. Three families did most of it — 28/700 on the tab
 * screens, 24/500 on the settings pages, 22.5/500 in onboarding and the
 * paywall — with Profile at 22/700 and "Solution" at a raw, unscaled 21.
 *
 * It is 24/700 now, everywhere in the app. Bold rather than medium, and 24
 * rather than 28, because:
 *
 *   * a title has to outrank the headings under it, and several screens carry
 *     body headings at 24-28 bold (the plan name, the rate block). Weight wins
 *     that argument at any size; size alone does not.
 *   * every one of these titles shares its row with something — a back
 *     chevron, Erase, a subject dropdown, a flag. At 28, "Personal
 *     information" and "Terms & conditions" crowd it. At 24 they do not.
 *   * weight survives a cheap panel better than size does, and size is the
 *     thing that costs vertical space above the fold.
 *
 * USE THE FUNCTION, NOT THE NUMBERS. Four screens had copy-pasted the old
 * settings spec by hand and two of the four had added a `lineHeight` the
 * others lacked, so the same tier shipped with two different leadings. Import
 * `pageTitle(scale)` and spread it; overrides like `flex: 1` go after.
 *
 * ONBOARDING IS NOT IN HERE. Those nine screens run once, are built to their
 * own handoff on a 30pt gutter, and never sit beside an in-app screen; they
 * keep `ObHeader` at 22.5/500. The paywall does use this tier (`obPageTitle`)
 * because a student meets it in the middle of using the app.
 */

export const PAGE_TITLE = {
  family: 'Onest_700Bold',
  /** Against the 390pt reference canvas, so `scale()` it before use. */
  size: 24,
  lineHeight: 29,
  /** ≈ -0.025em. */
  tracking: -0.6,
} as const;

/** For screens on `useScale()` — which is every in-app screen. */
export function pageTitle(scale: (size: number) => number): TextStyle {
  return {
    fontFamily: PAGE_TITLE.family,
    fontSize: scale(PAGE_TITLE.size),
    lineHeight: scale(PAGE_TITLE.lineHeight),
    letterSpacing: scale(PAGE_TITLE.tracking),
    color: colors.ink,
  };
}

/**
 * The same rendered size, for the paywall, which is drawn on `useDesignScale`.
 *
 * `fs` carries the 0.93 Onest correction (see constants/onboarding.ts), so a
 * number handed to it comes out 7% smaller than the same number handed to
 * `scale`. Dividing it back out is what makes the two worlds agree on screen
 * rather than on paper; `ds` is linear, so tracking passes through it as is.
 */
const ONEST_SIZE = 0.93;

export function obPageTitle(
  fs: (size: number) => number,
  ds: (size: number) => number,
  ink: string
): TextStyle {
  return {
    fontFamily: PAGE_TITLE.family,
    fontSize: fs(PAGE_TITLE.size / ONEST_SIZE),
    lineHeight: fs(PAGE_TITLE.lineHeight / ONEST_SIZE),
    letterSpacing: ds(PAGE_TITLE.tracking),
    color: ink,
  };
}
