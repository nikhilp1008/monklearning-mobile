import { Canvas, Circle, Group, Line, Path, Skia, vec } from '@shopify/react-native-skia';
import { useEffect, useMemo } from 'react';
import { Easing, useDerivedValue, useSharedValue, withRepeat, withTiming, type SharedValue } from 'react-native-reanimated';

/**
 * THE MONK MARK, DRAWN THE WAY IT WAS DESIGNED, from `loading_handoff/Loading 9A`.
 *
 * A compass arm sweeps a guide circle, then a smaller one; the mark's six arcs
 * land one at a time into the circles that were just measured; the amber dot
 * pops; the guides fade and the finished mark holds, then it draws itself
 * again. Held for HOLD_MS so it reads as done, never still for long enough to
 * look frozen on a slow connection.
 *
 * ONE CLOCK: a single 0→1 value runs the whole cycle and every element reads
 * its own window out of it (`seg`), so the parts cannot drift.
 *
 * SKIA, NOT SVG (2026-10-17). It was react-native-svg with animated props, and
 * on Android every animated prop goes through a shadow-tree commit: fourteen
 * moving pieces were a layout pass every frame, on the screen that waits for a
 * class to load. Skia redraws its canvas from the shared value on the UI
 * thread, with no React and no layout, so it costs the same on a budget phone
 * as on any other.
 *
 * ON WHITE, AS THE LOGO KIT DRAWS IT: the arcs are solid ink, the amber dot
 * fully opaque; the guides and the compass arm are hairlines that measure and
 * then get out of the way.
 */

/**
 * SLOWER THAN THE REFERENCE'S 8s, ON PURPOSE. At 8s the arcs landed a third of
 * a second apart and the whole build read as busy on a screen whose job is to
 * settle a student before class. 12s gives each arc half a second and each
 * compass sweep three.
 */
export const MARK_BUILD_MS = 12000;
/** How long the finished mark is held before it is drawn again. */
const HOLD_MS = 6000;
/** At the end of the hold the mark fades away, so the next build never starts with a snap. */
const FADE_MS = 900;
const CYCLE_MS = MARK_BUILD_MS + HOLD_MS + FADE_MS;

const GUIDE = 'rgba(28,26,22,0.22)';
const ARC = '#1C1A16';
/** How much ink the finished arcs carry: 70%, so the mark sits softly on white
 *  rather than as a solid black shape (chosen 2026-10-17 over 100, 55 and 40). */
const ARC_ALPHA = 0.7;
const COMPASS_TIP = '#DD4433';
const DOT = '#EEA31F';

/** The two radii the mark is built on, and how much of each circle one arc covers. */
const OUTER = { r: 36, w: 11, sweep: (52 / 226.2) * 360 };
const INNER = { r: 19, w: 9, sweep: (21.8 / 119.4) * 360 };

const easeArc = Easing.bezier(0.3, 0.6, 0.3, 1).factory();
const easeDot = Easing.bezier(0.2, 0.7, 0.2, 1).factory();

/** Local 0→1 for the window [a, b] of the shared timeline, clamped outside it. */
function seg(t: number, a: number, b: number) {
  'worklet';
  if (t <= a) return 0;
  if (t >= b) return 1;
  return (t - a) / (b - a);
}

/** An arc of the circle of radius r round (60, 60), from `from` degrees (0 = three o'clock), clockwise. */
function arc(r: number, from: number, sweep: number) {
  const p = Skia.Path.Make();
  p.addArc({ x: 60 - r, y: 60 - r, width: r * 2, height: r * 2 }, from, sweep);
  return p;
}

/** A guide circle: drawn from three o'clock as its compass turns, held, then faded. */
function Guide({ t, r, draw }: { t: SharedValue<number>; r: number; draw: [number, number] }) {
  const path = useMemo(() => arc(r, 0, 359.99), [r]);
  const end = useDerivedValue(() => seg(t.value, draw[0], draw[1]));
  const opacity = useDerivedValue(() => (end.value > 0 ? 1 - seg(t.value, 0.8, 0.9) : 0));
  return <Path path={path} color={GUIDE} style="stroke" strokeWidth={1} start={0} end={end} opacity={opacity} />;
}

/** The compass arm: a spoke with a red tip, one full turn, its tip the guide's growing end. */
function Arm({ t, length, tip, turn, gone }: { t: SharedValue<number>; length: number; tip: number; turn: [number, number]; gone: number }) {
  const at = useDerivedValue(() => {
    const a = 2 * Math.PI * seg(t.value, turn[0], turn[1]);
    return vec(60 + length * Math.cos(a), 60 + length * Math.sin(a));
  });
  const cx = useDerivedValue(() => at.value.x);
  const cy = useDerivedValue(() => at.value.y);
  const opacity = useDerivedValue(() => (t.value < turn[0] || t.value >= gone ? 0 : 1));
  return (
    <Group opacity={opacity}>
      <Line p1={vec(60, 60)} p2={at} color={GUIDE} strokeWidth={1} />
      <Circle cx={cx} cy={cy} r={tip} color={COMPASS_TIP} />
    </Group>
  );
}

/** One of the mark's six arcs, landing into a guide already drawn. Invisible until it starts. */
function Arc({ t, ring, from, at, ink }: { t: SharedValue<number>; ring: typeof OUTER; from: number; at: [number, number]; ink: number }) {
  const path = useMemo(() => arc(ring.r, from, ring.sweep), [ring, from]);
  const end = useDerivedValue(() => easeArc(seg(t.value, at[0], at[1])));
  const opacity = useDerivedValue(() => (t.value > at[0] ? ink : 0));
  return <Path path={path} color={ARC} style="stroke" strokeWidth={ring.w} strokeCap="round" start={0} end={end} opacity={opacity} />;
}

export function MonkMarkBuild({ size = 96, ink = ARC_ALPHA }: { size?: number; ink?: number }) {
  const clock = useSharedValue(0);
  useEffect(() => {
    clock.value = 0;
    clock.value = withRepeat(withTiming(1, { duration: CYCLE_MS, easing: Easing.linear }), -1, false);
  }, [clock]);
  /** The build's own 0→1: reaches 1 when the build ends and sits there for the hold. */
  const t = useDerivedValue(() => Math.min(1, (clock.value * CYCLE_MS) / MARK_BUILD_MS));
  /** The whole mark, fading out over the last FADE_MS of the cycle. */
  const whole = useDerivedValue(() => {
    const ms = clock.value * CYCLE_MS;
    return ms < CYCLE_MS - FADE_MS ? 1 : 1 - (ms - (CYCLE_MS - FADE_MS)) / FADE_MS;
  });

  /** The pin-prick at the centre the compass turns on. Goes with the guides. */
  const pin = useDerivedValue(() => seg(t.value, 0, 0.03) * (1 - seg(t.value, 0.8, 0.9)));
  /** Grows a little past its size and settles: a soft arrival, not a jump. */
  const dotR = useDerivedValue(() => {
    const p = easeDot(seg(t.value, 0.75, 0.79));
    const settle = seg(t.value, 0.79, 0.83);
    return 6 * (1.18 * p - 0.18 * settle * p);
  });
  const dotOpacity = useDerivedValue(() => easeDot(seg(t.value, 0.75, 0.79)));

  return (
    <Canvas style={{ width: size, height: size }} pointerEvents="none">
      <Group transform={[{ scale: size / 120 }]} opacity={whole}>
        <Circle cx={60} cy={60} r={1.6} color={GUIDE} opacity={pin} />

        <Guide t={t} r={36} draw={[0.03, 0.28]} />
        <Guide t={t} r={19} draw={[0.31, 0.5]} />

        <Arm t={t} length={36} tip={2} turn={[0.03, 0.28]} gone={0.3} />
        <Arm t={t} length={19} tip={1.8} turn={[0.31, 0.5]} gone={0.52} />

        {/* Three outer, clockwise from the top, then three inner, offset so the
            gaps do not line up: the logo kit's own rotations. */}
        <Arc t={t} ring={OUTER} from={-90} at={[0.53, 0.57]} ink={ink} />
        <Arc t={t} ring={OUTER} from={30} at={[0.57, 0.61]} ink={ink} />
        <Arc t={t} ring={OUTER} from={150} at={[0.61, 0.65]} ink={ink} />
        <Arc t={t} ring={INNER} from={-30} at={[0.65, 0.68]} ink={ink} />
        <Arc t={t} ring={INNER} from={90} at={[0.68, 0.71]} ink={ink} />
        <Arc t={t} ring={INNER} from={210} at={[0.71, 0.74]} ink={ink} />

        <Circle cx={60} cy={60} r={dotR} color={DOT} opacity={dotOpacity} />
      </Group>
    </Canvas>
  );
}
