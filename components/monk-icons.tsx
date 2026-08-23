import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * The home launcher icons, from `handoff_icons_v1`.
 *
 * Transcribed from the handoff's own `react-native/MonkIcons.tsx` rather than
 * redrawn, so the geometry is the designer's to the decimal. Only the ink
 * default is changed, to read from `colors.ink` — it is the same `#1C1A16`,
 * but sourced once so a palette change can never leave these three behind.
 *
 * Three rules from the spec that are easy to break later:
 *
 *  - **One amber accent per icon**, always on the meaningful part: the flash
 *    lamp, the mark on the current sheet, the medal face. Never add a second,
 *    and never recolour it to signal state — use the chip, not the icon.
 *  - **Stroke stays 1.9 at every size.** It is not scaled with the icon.
 *  - **Never render below 20pt.** Under that the accent loses its clearance
 *    and fuses into the stroke beside it.
 *
 * The accent also constrains what may sit behind them: on anything in the
 * amber family the accent disappears, which is why the tiles' chip is a pale
 * tint rather than the gold gradient it replaced. See `TILE_CHIP` below.
 */

const AMBER_ACCENT = '#EEA31F';

/**
 * 2.1, where the handoff specifies 1.9.
 *
 * A deliberate, recorded deviation. The ink is already `#1C1A16` — the darkest
 * in the product, and the spec forbids substituting pure black — so "make it
 * darker" cannot be answered with colour. What reads as light at chip size is
 * the stroke: 1.9 on the 24 grid rendered at 22pt is a 1.74pt line, which goes
 * thin against a white chip.
 *
 * The spec's actual rule is that the stroke must not *scale with the icon*, so
 * that it can't go hairline at 20pt and chunky at 56pt. That still holds: this
 * is one constant at every size. Revert to 1.9 here if the designer wants the
 * original optical weight back.
 */
const STROKE = 2.1;

/**
 * The chip these icons sit in — white, with an ink hairline.
 *
 * Exported as values, not baked into a component, because the two places that
 * use it need different wrappers: Home's is decoration inside a tappable card,
 * Library's *is* the button. Sharing the numbers is what stops them drifting
 * apart again — they had, into a white rounded-square on Home and an
 * ink-filled circle in Library, the same glyph reading as two different
 * objects.
 *
 * White rather than the spec's `#FDF3DE` tint: it is the best contrast
 * available for both the ink strokes and the amber accent, and it keeps a
 * third warm surface off a page that already has the amber hero. The hairline
 * gives the chip the edge the tint could not hold against a white card.
 */
export const ICON_CHIP = {
  size: 44,
  radius: 12,
  background: '#FFFFFF',
  border: 'rgba(28,26,22,.10)',
  /** Artwork size inside the chip. The set's floor is 20. */
  icon: 22,
} as const;

export interface MonkIconProps {
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
}

export function SnapADoubtIcon({
  size = 22,
  color = colors.ink,
  accent = AMBER_ACCENT,
  strokeWidth = STROKE,
}: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3" />
        <Rect x={2.8} y={6.4} width={18.4} height={13.5} rx={3.2} />
        <Circle cx={12} cy={13.2} r={3.6} />
      </G>
      <Circle cx={17.8} cy={9.9} r={1.4} fill={accent} />
    </Svg>
  );
}

export function PracticeIcon({
  size = 22,
  color = colors.ink,
  accent = AMBER_ACCENT,
  strokeWidth = STROKE,
}: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M7 5.6h11.4a2 2 0 0 1 2 2v9.2" />
        <Rect x={3.4} y={8.2} width={13.2} height={11.8} rx={2} />
        <Path d="M6.4 12.4h7.2" />
      </G>
      <Circle cx={7.2} cy={16.2} r={1.6} fill={accent} />
    </Svg>
  );
}

export function MilestonesIcon({
  size = 22,
  color = colors.ink,
  accent = AMBER_ACCENT,
  strokeWidth = STROKE,
}: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M8.4 3.2 11 9.6" />
        <Path d="M15.6 3.2 13 9.6" />
        <Circle cx={12} cy={15.4} r={5.8} />
      </G>
      <Circle cx={12} cy={15.4} r={2.2} fill={accent} />
    </Svg>
  );
}
