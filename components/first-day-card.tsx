import { StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect as SvgRect, Stop } from 'react-native-svg';

import { Grain } from '@/components/grain';
import { ObButton } from '@/components/onboarding-kit';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * THE FIRST DAY, DRAWN AS AN OBJECT.
 *
 * Four places in the app show a student nothing on the day they arrive: the
 * Doubts tab, the Notes tab, Progress before a single question, and today's
 * plan before anything is planned. All four used to be a sentence in grey on
 * an otherwise white page, which reads as a screen that failed to load rather
 * than a page waiting for its first entry.
 *
 * One card, so they cannot drift: the tab's own glyph on Home's plate, one
 * line of what lands here, and the onboarding key. Nothing fake — no sample
 * rows, no ghost cards, no placeholder text pretending to be content.
 */

type S = (n: number) => number;

/** Home's plate ground. */
const PLATE_GROUND = '#2E2A24';

/**
 * THE PLATE, borrowed from Home.
 *
 * Home draws Snap and Solve and Practice on a dark plate with a warm glow in
 * the lower-right and grain over it — the app's one premium object. A flat
 * white square holding a line-art glyph was the generic version of exactly
 * that, on a screen a student meets before anything else they own.
 */
export function Plate({
  size,
  radius,
  children,
}: {
  size: number;
  radius: number;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        overflow: 'hidden',
        backgroundColor: PLATE_GROUND,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <RadialGradient id="firstDayPlateGlow" cx="0.85" cy="1.05" r="1.35">
            <Stop offset="0" stopColor="#F0AE39" stopOpacity={0.95} />
            <Stop offset="0.5" stopColor="#C4821F" stopOpacity={0.43} />
            <Stop offset="1" stopColor="#8A5A14" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <SvgRect x="0" y="0" width="100%" height="100%" fill="url(#firstDayPlateGlow)" />
      </Svg>
      <Grain freq={1} strength={0.16} />
      {children}
    </View>
  );
}

export function FirstDayCard({
  glyph,
  head,
  line,
  cta,
  onPress,
  style,
}: {
  /** Drawn at the size the caller is given — 30 on the plate. */
  glyph: (size: number, color: string) => React.ReactNode;
  head: string;
  line: string;
  /** Omit both to state a fact rather than ask for a tap — Progress does,
   *  because the thing that fills it in is the whole app, not one screen. */
  cta?: string;
  onPress?: () => void;
  style?: object;
}) {
  const { scale, verticalScale } = useScale();
  const s = useStyles(scale, verticalScale);
  return (
    <View style={[s.card, style]}>
      <Plate size={scale(62)} radius={scale(19)}>
        {glyph(scale(30), colors.paper)}
      </Plate>
      <Text style={s.head}>{head}</Text>
      <Text style={s.line}>{line}</Text>
      {!!cta && !!onPress && (
        <View style={s.buttonWrap}>
          <ObButton compact label={cta} withArrow onPress={onPress} />
        </View>
      )}
    </View>
  );
}

function useStyles(scale: S, verticalScale: S) {
  return StyleSheet.create({
    /**
     * White, because the plate is the colour.
     *
     * It was a warm amber gradient, which put a second warm surface behind the
     * warmest object on the screen and the plate lost its glow to the field
     * around it. On paper the plate reads as lit and the card reads as a card:
     * a hairline, a soft shadow, nothing else.
     */
    card: {
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: verticalScale(28),
      paddingBottom: verticalScale(26),
      paddingHorizontal: scale(22),
      borderRadius: scale(24),
      backgroundColor: colors.paper,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.10)',
      boxShadow: [
        { offsetX: 0, offsetY: scale(8), blurRadius: scale(22), color: 'rgba(28,26,22,.06)' },
      ],
    },
    head: {
      marginTop: verticalScale(16),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(18),
      lineHeight: scale(24),
      letterSpacing: scale(-0.3),
      color: colors.ink,
      textAlign: 'center',
    },
    line: {
      marginTop: verticalScale(6),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19),
      color: colors.slate,
      textAlign: 'center',
    },
    buttonWrap: { marginTop: verticalScale(22) },
  });
}
