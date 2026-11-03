import { useEffect, type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming, type SharedValue } from 'react-native-reanimated';

import { NightSky } from '@/components/night-sky';
import type { SKY_THEMES } from '@/constants/teachers';
import type { TeacherId } from '@/lib/preferences';

/**
 * WHAT IS PICKED ON A PAYMENT SCREEN: ONE GRADIENT, POURED FROM THE TOP.
 *
 * A pass, Pro or Max: the same drawing at each thing's own size, so a short row
 * and a tall column carry the same dark-to-ember sky (Nikhil, 3 Nov 2026). It runs
 * down from the top edge and the words turn as it reaches them.
 *
 * The sky is drawn ready behind a closed clip: a canvas mounted on the tap takes a
 * moment to paint, and the words had turned white on white by then. It is clipped,
 * not stretched, so the pour costs no redraw.
 */

export type SkyTheme = (typeof SKY_THEMES)[TeacherId];

/** A little taller than the thing it fills: the ember stays low, and the words on it readable. */
const SKY_RATIO = 1.28;
const EASE = Easing.bezier(0.45, 0.05, 0.25, 1);

export const POUR_ROW_MS = 420;
export const POUR_COLUMN_MS = 620;

export type Pour = { open: SharedValue<number> };

export function usePour(on: boolean, ms: number): Pour {
  const open = useSharedValue(on ? 1 : 0);
  useEffect(() => {
    // It drains faster than it pours, so the new pick is the thing being watched.
    open.value = withTiming(on ? 1 : 0, { duration: on ? ms : ms * 0.6, easing: EASE });
  }, [on, open, ms]);
  return { open };
}

export function PourFill({ pour, width, height, radius, theme }: { pour: Pour; width: number; height: number; radius: number; theme: SkyTheme }) {
  const { open } = pour;
  const level = useAnimatedStyle(() => ({ height: open.value * height }));
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, { borderRadius: radius, overflow: 'hidden' }]}>
      <Animated.View style={[styles.level, level]}>
        {width > 0 && height > 0 ? <NightSky width={width} height={Math.round(height * SKY_RATIO)} lift={0} grain={0.35} theme={theme} /> : null}
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
