import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, Line } from 'react-native-svg';

/**
 * THE MONK MARK, DRAWN THE WAY IT WAS DESIGNED, from `loading_handoff/Loading 9A`.
 *
 * A compass arm sweeps a guide circle, then a smaller one; the mark's six arcs
 * land one at a time into the circles that were just measured; the amber dot
 * pops; the guides fade and the finished mark holds.
 *
 * THEN IT WAITS, AND DRAWS ITSELF AGAIN. The reference says `forwards` on every
 * keyframe, so it builds once and stops — right for a mock, wrong for a wait
 * that can run a minute. A finished mark sitting perfectly still for the rest
 * of a slow connection is indistinguishable from a frozen screen. But a logo
 * that restarts the instant it finishes is a fidget, so the finished mark is
 * held for HOLD_MS first: long enough to read as done, short enough that the
 * screen is never still for long.
 *
 * ONE CLOCK, NOT FOURTEEN. The reference is fourteen keyframe animations that
 * happen to share an 8s duration, which is how CSS has to express a timeline.
 * Here a single 0→1 value runs for 8s and every element reads its own window
 * out of it, so the parts cannot drift against each other and there is one
 * animation running rather than fourteen. `seg` is the whole trick: it turns
 * the timeline into the local 0→1 each element needs.
 *
 * The arcs are drawn by `strokeDashoffset`, exactly as the reference does it:
 * each arc's gap is a full circumference, so an arc pushed off by its own
 * length is completely invisible rather than merely somewhere else.
 */

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedLine = Animated.createAnimatedComponent(Line);

/** The reference's own 8s. */
export const MARK_BUILD_MS = 8000;
/** How long the finished mark is held before it is drawn again. */
const HOLD_MS = 5500;
const CYCLE_MS = MARK_BUILD_MS + HOLD_MS;

const GUIDE = '#4A463F';
const ARC = '#8F8979';
const COMPASS_TIP = '#DD4433';
const DOT = '#EEA31F';

/** 2πr for the two radii the mark is built on. */
const OUTER_C = 226.2;
const INNER_C = 119.4;
/** How much of each circle one arc covers. */
const OUTER_ARC = 52;
const INNER_ARC = 21.8;

/** The arcs ease; the compass arms and guides run linear, as in the reference. */
const easeArc = Easing.bezier(0.3, 0.6, 0.3, 1).factory();
const easeDot = Easing.bezier(0.2, 0.7, 0.2, 1).factory();

/** Local 0→1 for the window [a, b] of the shared timeline, clamped outside it. */
function seg(t: number, a: number, b: number) {
  'worklet';
  if (t <= a) return 0;
  if (t >= b) return 1;
  return (t - a) / (b - a);
}

/** The guides are drawn, held, then faded — one circle, three phases. */
function Guide({
  t,
  r,
  circumference,
  draw,
}: {
  t: SharedValue<number>;
  r: number;
  circumference: number;
  /** [start, end] of the draw, as fractions of the timeline. */
  draw: [number, number];
}) {
  const props = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - seg(t.value, draw[0], draw[1])),
    opacity: 1 - seg(t.value, 0.8, 0.9),
  }));
  return (
    <AnimatedCircle
      cx={60}
      cy={60}
      r={r}
      stroke={GUIDE}
      strokeWidth={1}
      strokeDasharray={`${circumference}`}
      animatedProps={props}
    />
  );
}

/**
 * The compass arm that draws a guide: a spoke with a red tip, one full turn.
 *
 * THE TIP IS MOVED, NOT THE GROUP, and that is the whole of the fix. This
 * rotated an `<G>` through `useAnimatedProps({ rotation })`, which
 * react-native-svg quietly does not apply — measured on device, the red tip sat
 * at identical pixel coordinates frame after frame while the circle drew itself
 * beside it. The compass appeared to be holding still and watching, which is
 * the opposite of the idea: the line is supposed to come OUT of the tip.
 *
 * So the endpoint is computed and written straight onto `x2`/`y2` and
 * `cx`/`cy`, which are plain numbers and animate reliably. The angle runs
 * clockwise from three o'clock because that is where an SVG circle's path
 * starts and which way it goes, so the tip and the growing stroke are the same
 * point by construction rather than by agreement.
 */
function Arm({
  t,
  length,
  tip,
  turn,
  gone,
}: {
  t: SharedValue<number>;
  length: number;
  tip: number;
  turn: [number, number];
  gone: number;
}) {
  const line = useAnimatedProps(() => {
    const a = 2 * Math.PI * seg(t.value, turn[0], turn[1]);
    return {
      x2: 60 + length * Math.cos(a),
      y2: 60 + length * Math.sin(a),
      opacity: t.value < turn[0] || t.value >= gone ? 0 : 1,
    };
  });
  const head = useAnimatedProps(() => {
    const a = 2 * Math.PI * seg(t.value, turn[0], turn[1]);
    return {
      cx: 60 + length * Math.cos(a),
      cy: 60 + length * Math.sin(a),
      opacity: t.value < turn[0] || t.value >= gone ? 0 : 1,
    };
  });
  return (
    <>
      <AnimatedLine x1={60} y1={60} stroke={GUIDE} strokeWidth={1} animatedProps={line} />
      <AnimatedCircle r={tip} fill={COMPASS_TIP} animatedProps={head} />
    </>
  );
}

/** One of the mark's six arcs, landing into a guide already drawn. */
function Arc({
  t,
  r,
  width,
  arc,
  circumference,
  rotate,
  at,
}: {
  t: SharedValue<number>;
  r: number;
  width: number;
  arc: number;
  circumference: number;
  rotate: number;
  at: [number, number];
}) {
  const props = useAnimatedProps(() => ({
    strokeDashoffset: arc * (1 - easeArc(seg(t.value, at[0], at[1]))),
  }));
  return (
    <AnimatedCircle
      cx={60}
      cy={60}
      r={r}
      stroke={ARC}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={`${arc} ${circumference}`}
      transform={`rotate(${rotate} 60 60)`}
      animatedProps={props}
    />
  );
}

export function MonkMarkBuild({ size = 96 }: { size?: number }) {
  /**
   * One linear clock over the whole cycle — build plus hold — and the build's
   * own 0→1 derived from it. Linear because the timeline IS the easing: every
   * window below carries its own curve, exactly as each keyframe does in the
   * reference.
   *
   * `t` reaches 1 when the build ends and then sits there for the hold, so
   * every element below holds its finished state without knowing the hold
   * exists. When the clock wraps, `t` returns to 0 and the mark is drawn from
   * nothing again.
   */
  const clock = useSharedValue(0);
  useEffect(() => {
    clock.value = 0;
    clock.value = withRepeat(
      withTiming(1, { duration: CYCLE_MS, easing: Easing.linear }),
      -1,
      false
    );
  }, [clock]);
  const t = useDerivedValue(() => Math.min(1, (clock.value * CYCLE_MS) / MARK_BUILD_MS));

  /** The pin-prick at the centre the compass turns on. Goes with the guides. */
  const centre = useAnimatedProps(() => ({
    opacity: seg(t.value, 0, 0.03) * (1 - seg(t.value, 0.8, 0.9)),
  }));

  /** 0 to 1.45 and back to 1 — a pop, not a fade, and it holds at .72 because
   *  the mark's own amber is a highlight and not a third ring. */
  const dot = useAnimatedProps(() => {
    const p = easeDot(seg(t.value, 0.75, 0.78));
    const settle = seg(t.value, 0.78, 0.8);
    return { opacity: 0.72 * p, r: 6 * (1.45 * p - 0.45 * settle * p) };
  });

  return (
    <Svg viewBox="0 0 120 120" width={size} height={size} fill="none">
      <AnimatedCircle cx={60} cy={60} r={1.6} fill={GUIDE} animatedProps={centre} />

      <Guide t={t} r={36} circumference={OUTER_C} draw={[0.03, 0.28]} />
      <Guide t={t} r={19} circumference={INNER_C} draw={[0.31, 0.5]} />

      <Arm t={t} length={36} tip={2} turn={[0.03, 0.28]} gone={0.3} />
      <Arm t={t} length={19} tip={1.8} turn={[0.31, 0.5]} gone={0.52} />

      {/* Three outer, clockwise from the top, then three inner. The rotations
          are the reference's: 120 degrees apart on each ring, the inner set
          offset so the gaps do not line up with the outer ones. */}
      <Arc t={t} r={36} width={11} arc={OUTER_ARC} circumference={OUTER_C} rotate={-90} at={[0.53, 0.57]} />
      <Arc t={t} r={36} width={11} arc={OUTER_ARC} circumference={OUTER_C} rotate={30} at={[0.57, 0.61]} />
      <Arc t={t} r={36} width={11} arc={OUTER_ARC} circumference={OUTER_C} rotate={150} at={[0.61, 0.65]} />
      <Arc t={t} r={19} width={9} arc={INNER_ARC} circumference={INNER_C} rotate={-30} at={[0.65, 0.68]} />
      <Arc t={t} r={19} width={9} arc={INNER_ARC} circumference={INNER_C} rotate={90} at={[0.68, 0.71]} />
      <Arc t={t} r={19} width={9} arc={INNER_ARC} circumference={INNER_C} rotate={210} at={[0.71, 0.74]} />

      <AnimatedCircle cx={60} cy={60} r={6} fill={DOT} animatedProps={dot} />
    </Svg>
  );
}
