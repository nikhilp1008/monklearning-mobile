import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';
import type { MonkIconProps } from '@/components/monk-icons';

/**
 * THE CHAPTER'S THREE REVISE MARKS: Formula sheet, Diagrams, Key points.
 *
 * Drawn to the rules of the app's own icons (components/monk-icons.tsx): a
 * 24 grid, one 1.8 line with round ends and joins, and one marigold dot on the
 * part that means something. They sit on the chapter home in ink with no plate
 * and no border. Never below 20pt, or the dot fuses into the line beside it.
 */

/** The summation sign, the dot after it: everything worth adding up, on one sheet. */
export function FormulaSheetIcon({ size = 24, color = colors.ink, accent = colors.marigold, strokeWidth = 1.8 }: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M17 5H6.8l5.6 7-5.6 7H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx={18.6} cy={12} r={1.4} fill={accent} />
    </Svg>
  );
}

/** Axes and a curve, the dot a point on it. */
export function DiagramsIcon({ size = 24, color = colors.ink, accent = colors.marigold, strokeWidth = 1.8 }: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M4.6 3.6V19.4h15.8" />
        <Path d="M7.4 16.6c2.8-.3 4.7-2.6 6.1-6s2.9-5.2 5.4-5.4" />
      </G>
      <Circle cx={13.5} cy={10.6} r={1.5} fill={accent} />
    </Svg>
  );
}

/** A card asking, the dot ending its question mark: key points always test you. */
export function KeyPointsIcon({ size = 24, color = colors.ink, accent = colors.marigold, strokeWidth = 1.8 }: MonkIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Rect x={4} y={3.4} width={16} height={17.2} rx={3.2} />
        <Path d="M9.5 9.6a2.6 2.6 0 1 1 3.7 2.3c-.8.4-1.2 1-1.2 1.8v.5" />
      </G>
      <Circle cx={12} cy={17} r={1.3} fill={accent} />
    </Svg>
  );
}
