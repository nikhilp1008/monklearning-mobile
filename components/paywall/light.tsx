import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, type ReactNode } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';

/**
 * THE LIGHT PAGES: everything a student sees before a teacher is chosen
 * (Nikhil, 19 Nov 2026).
 *
 * The sky belongs to Drona or Vedha, so it does not appear until the student has
 * picked one, which is after paying. Until then a page is white, its cards are
 * white with a soft shadow, and the one colour is the marigold of the logo's
 * centre: on the edge of what is picked, and on its tick.
 *
 * Rejected on the way here, so not to be brought back: the sky as a fill for a
 * picked answer, a teacher's orange on a price page, a tinted band behind a
 * heading, icon chips beside the points.
 */
export const LIGHT = {
  accent: '#EEA31F',
  /** The accent where it is a thin stroke or small words: marigold itself is too pale on white. */
  accentInk: '#B97A0F',
  edge: 'rgba(28,26,22,.08)',
  rule: 'rgba(28,26,22,.09)',
  /** The track of a switch. */
  track: 'rgba(28,26,22,.055)',
} as const;

/**
 * The lift under a white card. One fifth lighter than first drawn (.16 → .13):
 * a shadow reads darker on some Android screens than on the one it was tuned on.
 */
export function softShadow(scale: (n: number) => number) {
  return [{ offsetX: 0, offsetY: scale(10), blurRadius: scale(30), spreadDistance: scale(-14), color: 'rgba(28,26,22,.13)' }];
}

/**
 * The warm glow at the top of the plan pages. THE PLAN PAGES ONLY: on the
 * onboarding steps it read as cheap and was taken off; here Nikhil kept it, so
 * choosing a plan looks unlike the steps before it.
 */
export function PlanGlow({ height }: { height: number }) {
  return (
    <LinearGradient
      pointerEvents="none"
      colors={['rgba(238,163,31,.20)', 'rgba(238,163,31,.07)', 'rgba(238,163,31,0)']}
      locations={[0, 0.5, 1]}
      style={{ position: 'absolute', left: 0, right: 0, top: 0, height }}
    />
  );
}

/** A white card. Picked, its edge is marigold; that edge is the only change. */
export function LightCard({ on = false, radius, scale, style, children }: { on?: boolean; radius: number; scale: (n: number) => number; style?: StyleProp<ViewStyle>; children: ReactNode }) {
  return (
    <View
      style={[
        // The unpicked card is 1pt of edge and 1pt of margin, so picking it (2pt of edge) moves nothing.
        { borderRadius: radius, backgroundColor: '#fff', borderWidth: on ? 2 : 1, borderColor: on ? LIGHT.accent : LIGHT.edge, margin: on ? 0 : 1, boxShadow: softShadow(scale) },
        style,
      ]}>
      {children}
    </View>
  );
}

/** The tick that opens a point in a plan. */
export function PointTick({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path d="M2.8 8.6l3.3 3.3L13.2 4.6" stroke={LIGHT.accentInk} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Paid and confirmed: a marigold disc with an ink tick. */
export function DoneMark({ size }: { size: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: LIGHT.accent, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size * 0.46} height={size * 0.46} viewBox="0 0 16 16" fill="none">
        <Path d="M3 8.5l3.2 3.2L13 4.8" stroke={colors.ink} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

/** Waiting: a ring that turns, exactly where `DoneMark` will land. */
export function TurningRing({ size }: { size: number }) {
  const turn = useSharedValue(0);
  useEffect(() => {
    turn.value = withRepeat(withTiming(1, { duration: 900, easing: Easing.linear }), -1, false);
    return () => cancelAnimation(turn);
  }, [turn]);
  const spin = useAnimatedStyle(() => ({ transform: [{ rotate: `${turn.value * 360}deg` }] }));
  const r = size / 2 - 3;
  const c = 2 * Math.PI * r;
  return (
    <Animated.View style={[{ width: size, height: size }, spin]}>
      <Svg width={size} height={size}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(28,26,22,.08)" strokeWidth={3} fill="none" />
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={LIGHT.accent} strokeWidth={3} strokeLinecap="round" fill="none" strokeDasharray={`${c * 0.3} ${c}`} />
      </Svg>
    </Animated.View>
  );
}
