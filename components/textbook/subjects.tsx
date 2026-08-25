import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * The four subject tiles.
 *
 * **The palette is this app's, not the handoff's.** The handoff paints Physics
 * amber, Chemistry red and Mathematics green. This app has always painted
 * Physics red, Chemistry green and Mathematics amber, in `SUBJECT_ACCENT` on
 * every note and doubt card. Textbooks sits one swipe from those cards in the
 * Library, so the handoff's palette would have made Physics red on a note and
 * amber on a tile, on the same screen. The hues below follow the app.
 *
 * Biology is the one genuinely new colour. The app maps it to the same green
 * as Chemistry, which was fine while only one subject label showed at a time
 * and is not fine on a grid where both are visible at once. It takes the
 * handoff's olive, which reads as its own subject beside Chemistry's brighter
 * green.
 *
 * The icons are the handoff's, redrawn as react-native-svg and recoloured to
 * match. Each keeps its own subject: atom, flask, sigma, leaf.
 */

export interface SubjectTile {
  /** The catalogue's own lowercase name, so this joins to chapters. */
  key: string;
  label: string;
  background: string;
  border: string;
  ink: string;
  accent?: string;
}

export const SUBJECT_TILES: Record<string, SubjectTile> = {
  physics: {
    key: 'physics',
    label: 'Physics',
    background: '#FBEBE4',
    border: 'rgba(221,68,51,.4)',
    ink: '#A93425',
    accent: colors.red,
  },
  chemistry: {
    key: 'chemistry',
    label: 'Chemistry',
    background: '#EAF0EA',
    border: 'rgba(28,155,87,.32)',
    ink: '#157A45',
    accent: '#1C9B57',
  },
  mathematics: {
    key: 'mathematics',
    label: 'Mathematics',
    background: '#FCF4E0',
    border: 'rgba(238,163,31,.45)',
    ink: colors.amberText,
    accent: colors.marigold,
  },
  biology: {
    key: 'biology',
    label: 'Biology',
    background: '#EBF0E4',
    border: 'rgba(74,112,48,.35)',
    ink: '#4A7030',
  },
};

export function SubjectIcon({ subject, size, tile }: { subject: string; size: number; tile: SubjectTile }) {
  const stroke = tile.ink;
  switch (subject) {
    case 'physics':
      return (
        <Svg viewBox="0 0 40 40" width={size} height={size} fill="none">
          <Ellipse cx={20} cy={20} rx={15} ry={6.5} stroke={stroke} strokeWidth={1.8} />
          <Ellipse cx={20} cy={20} rx={15} ry={6.5} stroke={stroke} strokeWidth={1.8} rotation={60} origin="20, 20" />
          <Ellipse cx={20} cy={20} rx={15} ry={6.5} stroke={stroke} strokeWidth={1.8} rotation={120} origin="20, 20" />
          <Circle cx={20} cy={20} r={2.6} fill={tile.accent ?? stroke} />
        </Svg>
      );
    case 'chemistry':
      return (
        <Svg viewBox="0 0 40 40" width={size} height={size} fill="none">
          <Path
            d="M16 6h8M17.5 6v9.5L27 30a4 4 0 0 1-3.5 6h-7A4 4 0 0 1 13 30l9.5-14.5V6"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle cx={19} cy={29} r={1.6} fill={tile.accent ?? stroke} />
          <Circle cx={23.5} cy={32} r={1.1} fill={tile.accent ?? stroke} />
        </Svg>
      );
    case 'mathematics':
      return (
        <Svg viewBox="0 0 40 40" width={size} height={size} fill="none">
          <Path
            d="M12 8h16M12 8l10 12-10 12M12 32h16"
            stroke={stroke}
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    default:
      return (
        <Svg viewBox="0 0 40 40" width={size} height={size} fill="none">
          <Path
            d="M20 34C20 22 24 10 34 6c0 12-4 22-14 28ZM20 34C20 26 17 16 6 12c0 10 4 18 14 22Z"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
        </Svg>
      );
  }
}
