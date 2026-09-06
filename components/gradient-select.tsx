import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/**
 * The app's "you chose this one" mark: a slow amber sweep around the edge and
 * a warm bloom inside the face.
 *
 * Lived in app/profile.tsx, where it marks the chosen teacher and the chosen
 * language. The topic selector wants the same gesture for the same reason —
 * one thing picked out of several — so it moved here rather than being drawn
 * a second time and drifting.
 */

const SPIN_MS = 3600;
const RING_COLORS = [
  'rgba(238,163,31,0)',
  'rgba(247,215,121,0.35)',
  '#EEA31F',
  'rgba(247,215,121,0.5)',
  'rgba(238,163,31,0)',
  'rgba(238,163,31,0)',
] as const;
const RING_LOCATIONS = [0, 0.194, 0.361, 0.5, 0.778, 1] as const;

// `bloom` — inner face, opacity 0→1 + scale .985→1, .55s.
const BLOOM_MS = 550;
const BLOOM_EASING = Easing.bezier(0.2, 0.75, 0.2, 1);
const BLOOM_COLORS = [
  'rgba(238,163,31,0.26)',
  'rgba(238,163,31,0.06)',
  'rgba(255,255,255,0)',
] as const;

/**
 * The rotating edge. Sized from its own layout to the diagonal, so the square
 * gradient still covers the corners once it turns.
 */
export function RingSweep({ radius }: { radius: number }) {
  const rotation = useSharedValue(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: SPIN_MS, easing: Easing.linear }),
      -1,
      false
    );
  }, [rotation]);

  const spin = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotation.value}deg` }] }));

  return (
    <View
      pointerEvents="none"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setSize(Math.ceil(Math.sqrt(width * width + height * height)));
      }}
      style={[
        StyleSheet.absoluteFill,
        { borderRadius: radius, overflow: 'hidden' },
        ringStyles.centre,
      ]}>
      {size > 0 && (
        <Animated.View style={[{ width: size, height: size }, spin]}>
          <LinearGradient
            colors={[...RING_COLORS]}
            locations={[...RING_LOCATIONS]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={ringStyles.fill}
          />
        </Animated.View>
      )}
    </View>
  );
}

/** The inner face carrying the amber bloom, entering with `bloom`. */
export function BloomFace({
  style,
  direction,
  children,
}: {
  style: object;
  direction: 'left' | 'bottom';
  children: React.ReactNode;
}) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, { duration: BLOOM_MS, easing: BLOOM_EASING });
  }, [progress]);

  const animated = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: 0.985 + progress.value * 0.015 }],
  }));

  const isLeft = direction === 'left';

  return (
    <Animated.View style={[style, animated]}>
      <LinearGradient
        colors={[...BLOOM_COLORS]}
        locations={isLeft ? [0, 0.48, 0.78] : [0, 0.55, 0.82]}
        start={isLeft ? { x: 0, y: 0.5 } : { x: 0.5, y: 1 }}
        end={isLeft ? { x: 1, y: 0.5 } : { x: 0.5, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </Animated.View>
  );
}

const ringStyles = StyleSheet.create({
  centre: { alignItems: 'center', justifyContent: 'center' },
  fill: { flex: 1 },
});
