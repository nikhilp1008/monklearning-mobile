import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { MarigoldDisc } from '@/components/dock-face';

/**
 * THE LIVE CLASSROOM DOCK'S FACE.
 *
 * The mic is the same one the Ask follow-up bar wears (components/dock-face's
 * MarigoldDisc and DockBars), so the button a student holds to speak looks
 * alike everywhere in the app. What the classroom adds is around it.
 *
 * The dock used to wear a drifting four-colour light inside its pill (a Skia
 * shader). On Android the shader had to be rebuilt whenever the pill changed
 * size: on every turn between portrait and landscape the dock showed white for
 * a second or two before its colour came. The pill is now plain white; the
 * mic's gradient is SVG, drawn the instant the dock is.
 *
 * - At rest: a white pill and the cream mic lit marigold from below.
 * - Holding the mic (the student speaking): the deeper marigold fills the mic,
 *   the voice bars rise on it, and the pill's edge goes marigold.
 * - The teacher working out the reply: a marigold arc turns round the mic and
 *   the edge stays marigold.
 */

const MARIGOLD = '#EEA31F';

export type DockMood = 'rest' | 'student' | 'thinking';

/** The mic's disc: the Ask follow-up's, with the held marigold fading in. */
export function MicDisc({ hot, size = 40 }: { hot: boolean; size?: number }) {
  const t = useSharedValue(hot ? 1 : 0);
  useEffect(() => {
    t.value = withTiming(hot ? 1 : 0, { duration: 160 });
  }, [hot, t]);
  const held = useAnimatedStyle(() => ({ opacity: t.value }));
  const round = { width: size, height: size, borderRadius: size / 2 };
  return (
    <View style={[StyleSheet.absoluteFill, round]} pointerEvents="none">
      <MarigoldDisc hot={false} size={size} />
      <Animated.View style={[StyleSheet.absoluteFill, round, held]}>
        <MarigoldDisc hot size={size} />
      </Animated.View>
    </View>
  );
}

/**
 * The pill's edge: the hairline at rest, a solid marigold line while the
 * student speaks or the teacher thinks. One layer that fades, not a colour
 * that animates, so it reads the same on every platform.
 */
export function DockEdge({ mood, radius }: { mood: DockMood; radius: number }) {
  const lit = useSharedValue(mood === 'rest' ? 0 : 1);
  useEffect(() => {
    lit.value = withTiming(mood === 'rest' ? 0 : 1, { duration: 200 });
  }, [mood, lit]);
  const style = useAnimatedStyle(() => ({ opacity: lit.value }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          borderRadius: radius,
          borderWidth: 2,
          borderColor: MARIGOLD,
        },
        style,
      ]}
    />
  );
}

/**
 * THE THINKING ARC: a quarter of a solid marigold ring, turning round the
 * disc while the question is with the teacher. A fixed-length dash with flat
 * ends, so it never collapses to a dot (see the Android round-cap note in
 * components/monk-mark-build.tsx).
 */
export function ThinkingRing({ on, size = 40 }: { on: boolean; size?: number }) {
  const box = size + 8;
  const r = size / 2 + 2.7;
  const c = box / 2;
  const turn = useSharedValue(0);
  const shown = useSharedValue(0);
  useEffect(() => {
    shown.value = withTiming(on ? 1 : 0, { duration: 250 });
    if (on) {
      turn.value = 0;
      turn.value = withRepeat(
        withTiming(360, { duration: 1100, easing: Easing.linear }),
        -1,
        false
      );
    } else {
      cancelAnimation(turn);
    }
  }, [on, turn, shown]);
  const style = useAnimatedStyle(() => ({
    opacity: shown.value,
    transform: [{ rotate: `${turn.value}deg` }],
  }));
  const length = 2 * Math.PI * r;
  return (
    <Animated.View pointerEvents="none" style={[styles.arc, { width: box, height: box }, style]}>
      <Svg width={box} height={box}>
        <Circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke={MARIGOLD}
          strokeWidth={2.6}
          strokeDasharray={`${length / 4} ${length}`}
        />
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /** 4pt outside the disc on every side. */
  arc: { position: 'absolute', left: -4, top: -4 },
});
