import { Image } from 'expo-image';
import { useEffect, type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming, type SharedValue } from 'react-native-reanimated';

/**
 * WHAT IS PICKED ON A PAYMENT SCREEN: ONBOARDING'S SKY, POURED FROM THE TOP.
 *
 * The same picture a picked answer has on every onboarding question (Nikhil, 3 Nov
 * 2026), so a pass, Pro and Max read as answers to one more question. It runs down
 * from the top edge and the words turn as it reaches them.
 *
 * Drawn ready behind a closed clip, so the words never turn cream before the sky is
 * there. It is clipped, not stretched as it moves, so the pour costs no redraw.
 */

const SKY = {
  row: require('@/assets/images/onboarding/sky-row.png'),
  column: require('@/assets/images/onboarding/sky-tile3.png'),
};

const EASE = Easing.bezier(0.45, 0.05, 0.25, 1);

export const POUR_ROW_MS = 420;
export const POUR_COLUMN_MS = 620;
/** The cream onboarding's picked answers use. */
export const POUR_CREAM = '#FBF9F2';
export const POUR_CREAM_QUIET = 'rgba(251,249,242,0.8)';

export type Pour = { open: SharedValue<number> };

export function usePour(on: boolean, ms: number): Pour {
  const open = useSharedValue(on ? 1 : 0);
  useEffect(() => {
    // It drains faster than it pours, so the new pick is the thing being watched.
    open.value = withTiming(on ? 1 : 0, { duration: on ? ms : ms * 0.6, easing: EASE });
  }, [on, open, ms]);
  return { open };
}

export function PourFill({ pour, shape, height, radius }: { pour: Pour; shape: keyof typeof SKY; height: number; radius: number }) {
  const { open } = pour;
  const level = useAnimatedStyle(() => ({ height: open.value * height }));
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, { borderRadius: radius, overflow: 'hidden' }]}>
      <Animated.View style={[styles.level, level]}>
        {height > 0 ? <Image source={SKY[shape]} contentFit="fill" style={{ width: '100%', height }} /> : null}
      </Animated.View>
    </View>
  );
}

/** Words that change colour as the pour passes them. `start` and `end` are how far down they sit, 0 to 1. */
export function PourText({
  pour,
  from,
  to,
  start = 0,
  end = 1,
  style,
  children,
}: {
  pour: Pour;
  from: string;
  to: string;
  start?: number;
  end?: number;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}) {
  const { open } = pour;
  const color = useAnimatedStyle(() => ({ color: interpolateColor(open.value, [start, end], [from, to]) }));
  return <Animated.Text style={[style, color]}>{children}</Animated.Text>;
}

/** The unpicked edge. It stays visible until the pour has covered it. */
export function PourEdge({ pour, radius, color, width }: { pour: Pour; radius: number; color: string; width: number }) {
  const { open } = pour;
  const fade = useAnimatedStyle(() => ({ opacity: 1 - open.value }));
  return <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { borderRadius: radius, borderWidth: width, borderColor: color }, fade]} />;
}

const styles = StyleSheet.create({
  level: { position: 'absolute', top: 0, left: 0, right: 0, overflow: 'hidden' },
});
