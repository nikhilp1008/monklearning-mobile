import { StyleSheet, TextStyle } from 'react-native';

import { colors } from '@/constants/brand';
import { SERIF } from '@/components/textbook/markup';

/**
 * Shared type and surface values for the reader's content blocks.
 *
 * Three deliberate departures from design_handoff_textbooks, all made so the
 * feature reads as part of this app rather than a guest inside it. Textbooks
 * sits one swipe from Notes and Doubts in the Library, so a foreign detail is
 * visible side by side with the thing it disagrees with.
 *
 *  1. **Kickers are Anek, not monospace.** The handoff sets every small
 *     uppercase label in `ui-monospace`. This app's kicker has always been
 *     AnekLatin_800ExtraBold with wide tracking, which is what `SESSIONS` and
 *     the subject label on a note card already use. Monospace beside those
 *     reads as a different product.
 *  2. **Borders are `rgba(28,26,22,…)`, not `rgba(28,25,20,…)`.** The app uses
 *     the former in roughly ninety places, and it is the correct derivation of
 *     the shared ink `#1C1A16`. The handoff's own borders do not match the
 *     handoff's own ink; this is a bug in the reference, not a decision.
 *  3. **One warm tint, not two.** The handoff introduces `#F6F1E4` for pressed
 *     and revealed surfaces while the app already ships `#FCF4E0` for exactly
 *     that job in the icon chip and filter pills. Carrying two near-identical
 *     warm tints is how palettes rot, so selected and revealed states use
 *     `colors.tint`.
 *
 * Kept from the handoff: serif italic for every formula, set symbol and
 * variable. The app has no serif anywhere else, but maths genuinely reads
 * better in one and the content is authored assuming it. The Solutions screen
 * still renders maths in Anek, which is an inconsistency worth closing later.
 */

export const BORDER = 'rgba(28,26,22,.12)';
export const BORDER_SOFT = 'rgba(28,26,22,.06)';
export const BORDER_STRONG = 'rgba(28,26,22,.16)';
export const CARD_BORDER = 'rgba(28,26,22,.14)';
export const DASH = 'rgba(28,26,22,.25)';

/** Card width and the distance between two cards' left edges. */
export const CARD_W = 306;
export const CARD_GAP = 12;

export function kicker(scale: (n: number) => number, size = 10): TextStyle {
  return {
    fontFamily: 'AnekLatin_800ExtraBold',
    fontSize: scale(size),
    letterSpacing: scale(size * 0.11),
    textTransform: 'uppercase',
    color: colors.faint,
  };
}

export function mathText(scale: (n: number) => number, size: number): TextStyle {
  return {
    fontFamily: SERIF,
    fontStyle: 'italic',
    fontSize: scale(size),
    color: colors.ink,
  };
}

export function makeBlockStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      padding: scale(14),
      paddingHorizontal: scale(16),
    },
    cardFlush: {
      backgroundColor: colors.readingCard,
      borderWidth: 1,
      borderColor: BORDER,
      borderRadius: scale(12),
      overflow: 'hidden',
    },
    body: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(16.5),
      lineHeight: scale(16.5 * 1.66),
      color: colors.ink,
    },
    blockBody: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(14.5),
      lineHeight: scale(14.5 * 1.55),
      color: colors.slate,
    },
    hand: {
      fontFamily: 'Kalam_400Regular',
      color: colors.slate,
    },
    tintPanel: {
      backgroundColor: colors.tint,
      borderRadius: scale(10),
      paddingVertical: scale(10),
      paddingHorizontal: scale(12),
    },
  });
}
