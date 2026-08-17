import { useEffect } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

/**
 * The placeholder every loading screen is built from.
 *
 * One rule holds the whole system together: a skeleton has to occupy the space
 * its real content will, top to bottom. A half-drawn page reads worse than a
 * spinner, because the reader sees a layout and then watches it jump. So each
 * screen composes its skeleton out of its own row and card styles rather than
 * importing a generic "list placeholder" that happens to be the wrong height.
 *
 * Opacity only — never width, height, or layout. This codebase has been bitten
 * before by Reanimated width and layout animations on real devices, and a
 * pulse needs none of it.
 *
 * Bars cascade on `delay` instead of blinking in lockstep, which is what makes
 * a wait read as "content arriving" rather than "screen broken".
 */

export const SKELETON_FILL = 'rgba(28,26,22,.08)';
/** Ink-on-dark, for the few screens that load on a dark ground. */
export const SKELETON_FILL_DARK = 'rgba(255,255,255,.10)';

const PULSE_MS = 650;
const DIM = 0.35;

/** One pulsing block. Give it a size through `style`. */
export function Skeleton({
  delay = 0,
  style,
}: {
  delay?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(DIM, { duration: PULSE_MS, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: PULSE_MS, easing: Easing.inOut(Easing.ease) })
        ),
        -1
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animated = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return <Animated.View style={[styles.bar, style, animated]} pointerEvents="none" />;
}

/**
 * A paragraph of placeholder lines. The last one is short, the way a real last
 * line is — that single detail is most of what makes a block of bars read as
 * text rather than as a table.
 */
export function SkeletonParagraph({
  lines = 3,
  lineHeight,
  gap,
  delay = 0,
  widths = ['100%', '94%', '62%'],
}: {
  lines?: number;
  lineHeight: number;
  gap: number;
  delay?: number;
  widths?: (number | `${number}%`)[];
}) {
  return (
    <View style={{ gap }}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          delay={delay + i * 60}
          style={{
            height: lineHeight,
            width: widths[i] ?? widths[widths.length - 1],
          }}
        />
      ))}
    </View>
  );
}

/** `delay` for the nth placeholder in a list, so the cascade stays consistent. */
export function stagger(index: number, step = 60) {
  return index * step;
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 6,
    backgroundColor: SKELETON_FILL,
  },
});
