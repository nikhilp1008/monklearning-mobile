import Svg, { Circle, Defs, Path, Pattern, Rect, Text as SvgText } from 'react-native-svg';
import { StyleSheet } from 'react-native';

import { colors } from '@/constants/brand';

/**
 * The four subject tiles, drawn as books.
 *
 * From the `textbooks-subjects` handoff: an asymmetric radius and a coloured
 * bar down the left edge read as a spine, the inner panel is ruled with a dot
 * grid like squared paper, and each subject carries a drawing of its own
 * rather than a glyph.
 *
 * **The palette is this app's, not the handoff's.** The handoff paints Physics
 * amber, Chemistry red and Mathematics green. This app has always painted
 * Physics red, Chemistry green and Mathematics amber, in `SUBJECT_ACCENT` on
 * every note and doubt card in the Library. Adopting the handoff's mapping
 * would make Physics red on a note and amber on a tile. The handoff's colour
 * VALUES are used exactly; only which subject gets which is the app's.
 *
 * Biology is the one genuinely new colour. The app maps it to the same green
 * as Chemistry, which was fine while only one subject label showed at a time
 * and is not fine on a grid where both are visible at once. It takes the
 * handoff's olive, which reads as its own subject beside Chemistry's green.
 *
 * `red` and `marigold` appear inside the drawings whatever the subject — the
 * magnet's north pole, the cube's dimension marks, the seedling's sun. They
 * are the app's two accents doing the job they do everywhere else, and they
 * keep a one-colour drawing from going flat.
 */

export interface SubjectTile {
  /** The catalogue's own lowercase name, so this joins to chapters. */
  key: string;
  label: string;
  background: string;
  border: string;
  ink: string;
  /** The spine down the left edge, and the dot grid on the panel. */
  spine: string;
  dot: string;
  accent?: string;
}

export const SUBJECT_TILES: Record<string, SubjectTile> = {
  physics: {
    key: 'physics',
    label: 'Physics',
    background: '#FBEBE4',
    border: 'rgba(221,68,51,.45)',
    ink: '#A93425',
    spine: 'rgba(221,68,51,.22)',
    dot: 'rgba(169,52,37,.16)',
    accent: colors.red,
  },
  chemistry: {
    key: 'chemistry',
    label: 'Chemistry',
    background: '#EAF0EA',
    border: 'rgba(28,155,87,.35)',
    ink: '#157A45',
    spine: 'rgba(28,155,87,.22)',
    dot: 'rgba(21,122,69,.16)',
    accent: '#1C9B57',
  },
  mathematics: {
    key: 'mathematics',
    // "Maths", as the handoff draws it and as every other surface in the app
    // says it. "Mathematics" measures 131pt into 135pt of tile, which scaling
    // tips into a truncated "Mathemati...".
    label: 'Maths',
    background: '#FCF4E0',
    border: 'rgba(238,163,31,.5)',
    ink: colors.amberText,
    spine: 'rgba(238,163,31,.25)',
    dot: 'rgba(154,106,18,.18)',
    accent: colors.marigold,
  },
  biology: {
    key: 'biology',
    label: 'Biology',
    background: '#EBF0E4',
    border: 'rgba(74,112,48,.4)',
    ink: '#4A7030',
    spine: 'rgba(74,112,48,.22)',
    dot: 'rgba(74,112,48,.16)',
    accent: '#4A7030',
  },
};

/**
 * The squared-paper ground under each drawing.
 *
 * The handoff does this with a CSS radial-gradient on a 10px repeat, which
 * has no React Native equivalent, so it is an SVG pattern instead. The id
 * carries the subject because two patterns sharing one id on the same screen
 * would resolve to whichever mounted last, and the grid would take the wrong
 * subject's colour.
 */
export function DotGrid({ subject, tile }: { subject: string; tile: SubjectTile }) {
  const id = `dots-${subject}`;
  return (
    <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
      <Defs>
        <Pattern id={id} width={10} height={10} patternUnits="userSpaceOnUse">
          <Circle cx={1} cy={1} r={1} fill={tile.dot} />
        </Pattern>
      </Defs>
      <Rect x={0} y={0} width="100%" height="100%" fill={`url(#${id})`} />
    </Svg>
  );
}

/** Each subject's drawing, at the handoff's 120-unit canvas. */
export function SubjectArt({
  subject,
  size,
  tile,
}: {
  subject: string;
  size: number;
  tile: SubjectTile;
}) {
  const s = tile.ink;
  const common = {
    stroke: s,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (subject) {
    case 'physics':
      // A bar magnet and its field. The north pole is filled, so the drawing
      // reads even at a glance.
      return (
        <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
          <Rect x={24} y={50} width={72} height={20} rx={3} {...common} />
          <Path d="M60 50v20" {...common} />
          <Path d="M24 50h36v20H24Z" fill={colors.red} fillOpacity={0.85} />
          <SvgText x={36} y={65} fontFamily="Onest_800ExtraBold" fontSize={12} fill="#fff">
            N
          </SvgText>
          <SvgText x={74} y={65} fontFamily="Onest_800ExtraBold" fontSize={12} fill={s}>
            S
          </SvgText>
          <Path d="M24 50Q10 22 60 22q50 0 36 28" {...common} strokeDasharray="3 4" />
          <Path d="M24 70Q10 98 60 98q50 0 36-28" {...common} strokeDasharray="3 4" />
          <Path d="M30 50Q30 34 60 34q30 0 30 16" {...common} strokeDasharray="2 3" />
          <Path d="M30 70Q30 86 60 86q30 0 30-16" {...common} strokeDasharray="2 3" />
          <Path
            d="M60 22l-4-4M60 22l-4 4M60 98l4-4M60 98l4 4"
            {...common}
            stroke={colors.marigold}
          />
        </Svg>
      );
    case 'chemistry':
      return (
        <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
          <Path d="M44 14h32M50 14v26L26 86a9 9 0 0 0 8 14h52a9 9 0 0 0 8-14L70 40V14" {...common} />
          <Path d="M36 74h48" {...common} strokeDasharray="3 3" />
          <Circle cx={50} cy={86} r={3.5} {...common} />
          <Circle cx={63} cy={92} r={2.5} {...common} />
          <Circle cx={58} cy={80} r={1.8} fill={colors.red} />
          <Path d="M84 30q10-8 20-2" {...common} strokeDasharray="2 3" />
          <Circle cx={104} cy={22} r={3} {...common} />
          <Circle cx={96} cy={44} r={2} {...common} />
        </Svg>
      );
    case 'mathematics':
      // A cube with its edge measured twice, and the volume it gives.
      return (
        <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
          <Path d="M28 44h48v48H28Z" {...common} />
          <Path d="M28 44l18-16h48v48L76 92" {...common} />
          <Path d="M76 44l18-16" {...common} />
          <Path d="M46 28v48h48" {...common} strokeDasharray="2 3" />
          <Path d="M28 100h48" {...common} stroke={colors.red} />
          <Path d="M28 97v6M76 97v6" {...common} stroke={colors.red} />
          <SvgText x={46} y={112} fontFamily="Kalam_700Bold" fontSize={12} fill={colors.red}>
            a
          </SvgText>
          <Path d="M16 44v48" {...common} stroke={colors.marigold} />
          <Path d="M13 44h6M13 92h6" {...common} stroke={colors.marigold} />
          <SvgText x={4} y={72} fontFamily="Kalam_700Bold" fontSize={12} fill={colors.marigold}>
            a
          </SvgText>
          <SvgText x={84} y={20} fontFamily="Kalam_700Bold" fontSize={12} fill={s}>
            V=a³
          </SvgText>
        </Svg>
      );
    default:
      // A seedling under its sun.
      return (
        <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
          <Path d="M60 104V56" {...common} />
          <Path
            d="M60 72c-20 4-30-8-32-24 18 0 30 8 32 24ZM60 60c2-18 14-28 32-28-2 18-12 28-32 28Z"
            {...common}
          />
          <Path d="M44 62l16 10M76 44 60 58" {...common} strokeDasharray="2 3" />
          <Circle cx={60} cy={24} r={6} {...common} stroke={colors.red} />
          <Path d="M60 14v-4M68 18l3-3M52 18l-3-3" {...common} stroke={colors.marigold} />
          <Path d="M30 104h60" {...common} />
        </Svg>
      );
  }
}
