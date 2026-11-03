import { Canvas as SkCanvas, Circle as SkCircle, Group as SkGroup, SweepGradient, vec } from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, type SharedValue } from 'react-native-reanimated';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

import { INK } from '@/components/classroom-chrome';
import type { DockMotion } from '@/components/dock-motion';

/**
 * THE DOCK'S FACE — the marigold mic, the arc that turns round it while the
 * teacher thinks, and the bars that rise with the student's voice.
 *
 * Shared by the two places a student holds to speak: the Ask follow-up bar on
 * Doubts and Practice (components/ask-follow-up.tsx) and the command dock in
 * the live classroom (app/live-classroom.tsx). One file, so the two can never
 * become two different products.
 */

/**
 * THE MARIGOLD DISC — the mic's face on the doubts dock, from the 20a handoff.
 *
 * Pale cream, lit three ways: a warm pool rising from under the bottom edge
 * and two softer lights catching the upper corners. It is the same light the
 * footer throws, gathered into 40 points, so the mic reads as the source of
 * the glow rather than a button sitting in front of it. Held, a deeper
 * marigold fills it from the top.
 *
 * ALL NUMBERS, NO PERCENTAGES. The disc never changes size, so every centre
 * and radius is stated in points against its 40pt box — the CSS converted,
 * not approximated. A percentage inside an `Svg` resolves against whatever
 * viewport it had first, which is the bug that drew a seam across the profile
 * card; a fixed box cannot have it, but stating the numbers removes the
 * question entirely.
 */
export function MarigoldDisc({ hot, size = 40 }: { hot: boolean; size?: number }) {
  // Drawn in its own 40pt units and scaled, so every number below stays the
  // handoff's whatever size the disc is shown at.
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" style={StyleSheet.absoluteFill} pointerEvents="none">
      <Defs>
        {/* radial-gradient(95% 80% at 50% 118%, #EEA31F, transparent 74%) */}
        <RadialGradient id="mdFoot" cx={20} cy={47.2} rx={38} ry={32} gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#EEA31F" stopOpacity={1} />
          <Stop offset={0.74} stopColor="#EEA31F" stopOpacity={0} />
        </RadialGradient>
        {/* radial-gradient(60% 60% at 0% 0%, rgba(242,178,58,.85), transparent 70%) */}
        <RadialGradient id="mdTL" cx={0} cy={0} rx={24} ry={24} gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#F2B23A" stopOpacity={0.85} />
          <Stop offset={0.7} stopColor="#F2B23A" stopOpacity={0} />
        </RadialGradient>
        {/* radial-gradient(60% 60% at 100% 0%, rgba(242,178,58,.65), transparent 70%) */}
        <RadialGradient id="mdTR" cx={40} cy={0} rx={24} ry={24} gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#F2B23A" stopOpacity={0.65} />
          <Stop offset={0.7} stopColor="#F2B23A" stopOpacity={0} />
        </RadialGradient>
        {/* Held: radial-gradient(80% 80% at 50% 28%, #F6C766, #EEA31F 58%, #E8922A) */}
        <RadialGradient id="mdHot" cx={20} cy={11.2} rx={32} ry={32} gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#F6C766" />
          <Stop offset={0.58} stopColor="#EEA31F" />
          <Stop offset={1} stopColor="#E8922A" />
        </RadialGradient>
      </Defs>
      <Circle cx={20} cy={20} r={20} fill="#FCF4E0" />
      <Circle cx={20} cy={20} r={20} fill="url(#mdFoot)" />
      <Circle cx={20} cy={20} r={20} fill="url(#mdTL)" />
      <Circle cx={20} cy={20} r={20} fill="url(#mdTR)" />
      {hot ? <Circle cx={20} cy={20} r={20} fill="url(#mdHot)" /> : null}
    </Svg>
  );
}

/**
 * THE THINKING ARC — a marigold sweep turning round the disc while the
 * question is with the teacher. The handoff's conic gradient, transparent for
 * its first 170 degrees and running to marigold by 360, masked to a 2.6pt ring
 * just outside the disc and spun at 330 degrees a second.
 *
 * SKIA, NOT SVG: react-native-svg has no conic gradient, and an arc faked from
 * a linear one bends the wrong way round the circle. Skia's sweep gradient is
 * the same function CSS's conic is.
 */
export function ThinkingArc({
  motion,
  on,
  size = 40,
}: {
  motion: SharedValue<DockMotion>;
  on: boolean;
  /** The disc it turns round. The ring sits 2.7pt outside its edge. */
  size?: number;
}) {
  const box = size + 8;
  const c = box / 2;
  const shown = useSharedValue(0);
  useEffect(() => {
    shown.value = withTiming(on ? 1 : 0, { duration: 350 });
  }, [on, shown]);
  const style = useAnimatedStyle(() => ({
    opacity: shown.value,
    transform: [{ rotate: `${motion.value.rot}deg` }],
  }));
  return (
    <Animated.View pointerEvents="none" style={[styles.arc, { width: box, height: box }, style]}>
      <SkCanvas style={{ width: box, height: box }}>
        {/* CSS conic starts at 12 o'clock; Skia's sweep starts at 3. */}
        <SkGroup transform={[{ rotate: -Math.PI / 2 }]} origin={vec(c, c)}>
          <SkCircle cx={c} cy={c} r={size / 2 + 2.7} style="stroke" strokeWidth={2.6}>
            <SweepGradient
              c={vec(c, c)}
              colors={['rgba(238,163,31,0)', 'rgba(238,163,31,0)', '#F2B23A', '#EEA31F']}
              positions={[0, 170 / 360, 300 / 360, 1]}
            />
          </SkCircle>
        </SkGroup>
      </SkCanvas>
    </Animated.View>
  );
}

/** Four 3x18 bars that rise with the voice — the handoff's, not the three
 *  static heights the classroom's `LevelBars` draws. */
export function DockBars({ motion }: { motion: SharedValue<DockMotion> }) {
  return (
    <View style={styles.bars} pointerEvents="none">
      {[0, 1, 2, 3].map((i) => (
        <DockBar key={i} i={i} motion={motion} />
      ))}
    </View>
  );
}
function DockBar({ i, motion }: { i: number; motion: SharedValue<DockMotion> }) {
  const style = useAnimatedStyle(() => {
    const m = motion.value;
    const k = Math.max(0.18, Math.min(1, 0.18 + m.lvl * (0.55 + 0.45 * Math.sin(m.t * 13 + i * 1.9))));
    return { transform: [{ scaleY: k }] };
  });
  return <Animated.View style={[styles.bar, style]} />;
}

const styles = StyleSheet.create({
  /** 4pt outside the disc on every side; sized per disc where it is drawn. */
  arc: { position: 'absolute', left: -4, top: -4 },
  bars: { flexDirection: 'row', alignItems: 'center', gap: 3, height: 18 },
  bar: { width: 3, height: 18, borderRadius: 99, backgroundColor: INK },
});
