import { Canvas, Circle, DashPathEffect, Group, Line, Path, Skia, vec, type SkPath } from '@shopify/react-native-skia';
import { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

/**
 * THE VIDEOS REEL'S MOVING DIAGRAM (Nikhil, 10 Nov 2026).
 *
 * The coming-soon reel was a gradient with words at the bottom and an empty
 * middle. This fills the middle with what a reel will actually be: a teacher's
 * diagram drawing itself in chalk-cream lines, then coming alive, one subject
 * after another.
 *
 *   Physics    a projectile: the path draws, the ball flies it
 *   Chemistry  an atom: three orbits draw, electrons run them
 *   Maths      a curve on axes, a tangent sliding along it (its slope)
 *   Biology    a DNA helix, turning
 *
 * Each scene is SCENE_MS: drawn over the first third, alive through the
 * middle, faded at the end. One clock runs all four; nothing is tappable.
 * With reduced motion the physics scene stands still, fully drawn.
 *
 * Drawn in a 300 × 300 box and scaled to fit.
 */

const SCENES = [
  { subject: 'Physics', topic: 'Projectile motion' },
  { subject: 'Chemistry', topic: 'Inside the atom' },
  { subject: 'Maths', topic: 'The slope of a curve' },
  { subject: 'Biology', topic: 'The double helix' },
] as const;
const SCENE_MS = 5200;
const N = SCENES.length;

const INK = '#FFFDF8';
const GUIDE = 'rgba(255,253,248,0.32)';
const ACCENT = '#FBDDA0';
const BOX = 300;

/** Local 0→1 for the window [a, b], clamped outside it. */
function seg(t: number, a: number, b: number) {
  'worklet';
  if (t <= a) return 0;
  if (t >= b) return 1;
  return (t - a) / (b - a);
}
function ease(x: number) {
  'worklet';
  return 1 - Math.pow(1 - x, 3);
}
/** A scene is fully visible except for a quick fade in and a slower fade out. */
function sceneOpacity(p: number) {
  'worklet';
  if (p <= 0 || p >= 1) return 0;
  return seg(p, 0, 0.05) * (1 - seg(p, 0.9, 0.99));
}

function pathFrom(points: [number, number][]) {
  const path = Skia.Path.Make();
  points.forEach(([x, y], i) => (i === 0 ? path.moveTo(x, y) : path.lineTo(x, y)));
  return path;
}

/* ─────────────── Physics: a projectile ─────────────── */

const GROUND = 238;
const X0 = 40;
const X1 = 262;
const PEAK = 92;
const K = (GROUND - PEAK) / (((X1 - X0) / 2) * ((X1 - X0) / 2));
const flightY = (x: number) => {
  'worklet';
  return GROUND - K * (x - X0) * (X1 - x);
};

function Projectile({ p }: { p: SharedValue<number> }) {
  const arcPath = useMemo(() => {
    const pts: [number, number][] = [];
    for (let x = X0; x <= X1; x += 2) pts.push([x, flightY(x)]);
    return pathFrom(pts);
  }, []);
  /** The launch velocity, along the path's first slope. */
  const launch = useMemo(() => {
    const slope = K * (X1 - X0);
    const len = Math.hypot(1, slope);
    return vec(X0 + (62 * 1) / len, GROUND - (62 * slope) / len);
  }, []);
  const angle = useMemo(() => {
    const path = Skia.Path.Make();
    const deg = (Math.atan(K * (X1 - X0)) * 180) / Math.PI;
    path.addArc({ x: X0 - 26, y: GROUND - 26, width: 52, height: 52 }, -deg, deg);
    return path;
  }, []);
  const peakX = (X0 + X1) / 2;

  const ground = useDerivedValue(() => ease(seg(p.value, 0.02, 0.16)));
  const draw = useDerivedValue(() => ease(seg(p.value, 0.1, 0.36)));
  const vector = useDerivedValue(() => seg(p.value, 0.08, 0.16));
  const peakLine = useDerivedValue(() => seg(p.value, 0.3, 0.4) * 0.9);

  /** The ball flies once the path is drawn, then rests on landing. */
  const fly = useDerivedValue(() => Easing.inOut(Easing.quad)(seg(p.value, 0.38, 0.86)));
  const bx = useDerivedValue(() => X0 + (X1 - X0) * fly.value);
  const by = useDerivedValue(() => flightY(bx.value));
  const drop1 = useDerivedValue(() => vec(bx.value, by.value + 9));
  const drop2 = useDerivedValue(() => vec(bx.value, GROUND));
  const groundEnd = useDerivedValue(() => vec(30 + 240 * ground.value, GROUND));
  const ball = useDerivedValue(() => seg(p.value, 0.34, 0.4));

  return (
    <Group>
      <Line p1={vec(30, GROUND)} p2={groundEnd} color={GUIDE} strokeWidth={1.5} />
      <Path path={arcPath} color={INK} style="stroke" strokeWidth={2} strokeCap="round" start={0} end={draw}>
        <DashPathEffect intervals={[7, 7]} />
      </Path>
      <Group opacity={vector}>
        <Line p1={vec(X0, GROUND)} p2={launch} color={ACCENT} strokeWidth={2.5} strokeCap="round" />
        <Circle cx={launch.x} cy={launch.y} r={3.5} color={ACCENT} />
        <Path path={angle} color={GUIDE} style="stroke" strokeWidth={1.5} />
      </Group>
      <Group opacity={peakLine}>
        <Line p1={vec(peakX, PEAK + 12)} p2={vec(peakX, GROUND)} color={GUIDE} strokeWidth={1}>
          <DashPathEffect intervals={[3, 5]} />
        </Line>
        <Line p1={vec(peakX - 9, PEAK + 12)} p2={vec(peakX + 9, PEAK + 12)} color={GUIDE} strokeWidth={1.5} />
      </Group>
      <Group opacity={ball}>
        <Line p1={drop1} p2={drop2} color={GUIDE} strokeWidth={1}>
          <DashPathEffect intervals={[3, 4]} />
        </Line>
        <Circle cx={bx} cy={by} r={9} color={ACCENT} />
      </Group>
    </Group>
  );
}

/* ─────────────── Chemistry: an atom ─────────────── */

const C = 150;
const RX = 118;
const RY = 40;

function Orbit({ p, tilt, speed, phase, at }: { p: SharedValue<number>; tilt: number; speed: number; phase: number; at: number }) {
  const ring = useMemo(() => {
    const path = Skia.Path.Make();
    path.addOval({ x: C - RX, y: C - RY, width: RX * 2, height: RY * 2 });
    return path;
  }, []);
  const draw = useDerivedValue(() => ease(seg(p.value, at, at + 0.2)));
  const a = useDerivedValue(() => phase + p.value * speed * Math.PI * 2);
  const ex = useDerivedValue(() => C + RX * Math.cos(a.value));
  const ey = useDerivedValue(() => C + RY * Math.sin(a.value));
  const electron = useDerivedValue(() => seg(p.value, at + 0.16, at + 0.24));
  return (
    <Group transform={[{ rotate: (tilt * Math.PI) / 180 }]} origin={vec(C, C)}>
      <Path path={ring} color={INK} style="stroke" strokeWidth={1.75} start={0} end={draw} opacity={0.85} />
      <Circle cx={ex} cy={ey} r={6} color={ACCENT} opacity={electron} />
    </Group>
  );
}

function Atom({ p }: { p: SharedValue<number> }) {
  const nucleus = useDerivedValue(() => ease(seg(p.value, 0.02, 0.12)));
  const r = useDerivedValue(() => 15 * nucleus.value);
  const glow = useDerivedValue(() => 30 * nucleus.value * (0.9 + 0.1 * Math.sin(p.value * 40)));
  return (
    <Group>
      <Circle cx={C} cy={C} r={glow} color="rgba(251,221,160,0.14)" />
      <Circle cx={C} cy={C} r={r} color={ACCENT} />
      <Orbit p={p} tilt={0} speed={2.2} phase={0} at={0.08} />
      <Orbit p={p} tilt={60} speed={1.8} phase={2.1} at={0.14} />
      <Orbit p={p} tilt={120} speed={2.5} phase={4.2} at={0.2} />
    </Group>
  );
}

/* ─────────────── Maths: a tangent on a curve ─────────────── */

const AX = 46;
const AY = 246;
const fx = (x: number) => {
  'worklet';
  return 150 - 62 * Math.sin(((x - 64) / 200) * Math.PI * 1.6) - 0.12 * (x - 64);
};
const dfx = (x: number) => {
  'worklet';
  return -62 * Math.cos(((x - 64) / 200) * Math.PI * 1.6) * ((Math.PI * 1.6) / 200) - 0.12;
};

function Tangent({ p }: { p: SharedValue<number> }) {
  const axes = useMemo(() => pathFrom([[AX, 40], [AX, AY], [272, AY]]), []);
  const curve = useMemo(() => {
    const pts: [number, number][] = [];
    for (let x = 64; x <= 264; x += 2) pts.push([x, fx(x)]);
    return pathFrom(pts);
  }, []);
  const axesDraw = useDerivedValue(() => ease(seg(p.value, 0.02, 0.16)));
  const curveDraw = useDerivedValue(() => ease(seg(p.value, 0.12, 0.36)));
  const live = useDerivedValue(() => seg(p.value, 0.34, 0.42));

  /** The point slides along the curve and back; the tangent turns with it. */
  const tx = useDerivedValue(() => {
    const s = seg(p.value, 0.36, 0.9);
    return 84 + 160 * (0.5 - 0.5 * Math.cos(s * Math.PI * 2));
  });
  const ty = useDerivedValue(() => fx(tx.value));
  const half = 58;
  const t1 = useDerivedValue(() => {
    const m = dfx(tx.value);
    const d = half / Math.hypot(1, m);
    return vec(tx.value - d, ty.value - m * d);
  });
  const t2 = useDerivedValue(() => {
    const m = dfx(tx.value);
    const d = half / Math.hypot(1, m);
    return vec(tx.value + d, ty.value + m * d);
  });
  const foot1 = useDerivedValue(() => vec(tx.value, ty.value + 10));
  const foot2 = useDerivedValue(() => vec(tx.value, AY));

  return (
    <Group>
      <Path path={axes} color={GUIDE} style="stroke" strokeWidth={1.5} start={0} end={axesDraw} />
      <Path path={curve} color={INK} style="stroke" strokeWidth={2.25} strokeCap="round" start={0} end={curveDraw} />
      <Group opacity={live}>
        <Line p1={foot1} p2={foot2} color={GUIDE} strokeWidth={1}>
          <DashPathEffect intervals={[3, 4]} />
        </Line>
        <Line p1={t1} p2={t2} color={ACCENT} strokeWidth={2.5} strokeCap="round" />
        <Circle cx={tx} cy={ty} r={7} color={ACCENT} />
      </Group>
    </Group>
  );
}

/* ─────────────── Biology: a turning helix ─────────────── */

const H_TOP = 36;
const H_BOTTOM = 264;
const H_AMP = 58;
const H_K = (Math.PI * 2) / 150;
const RUNGS = 13;

function strand(phase: number, shift: number, upTo: number): SkPath {
  'worklet';
  const path = Skia.Path.Make();
  const end = H_TOP + (H_BOTTOM - H_TOP) * upTo;
  for (let y = H_TOP; y <= end; y += 3) {
    const x = C + H_AMP * Math.sin(y * H_K + phase + shift);
    if (y === H_TOP) path.moveTo(x, y);
    else path.lineTo(x, y);
  }
  return path;
}

function Rung({ p, i, phase }: { p: SharedValue<number>; i: number; phase: SharedValue<number> }) {
  const y = H_TOP + 9 + (i * (H_BOTTOM - H_TOP - 18)) / (RUNGS - 1);
  const a = useDerivedValue(() => vec(C + H_AMP * Math.sin(y * H_K + phase.value), y));
  const b = useDerivedValue(() => vec(C + H_AMP * Math.sin(y * H_K + phase.value + Math.PI), y));
  /** Rungs facing the student read brighter than the ones turned away. */
  const opacity = useDerivedValue(() => {
    const shown = seg(p.value, 0.2 + i * 0.012, 0.26 + i * 0.012);
    const facing = 0.45 + 0.4 * Math.abs(Math.cos(y * H_K + phase.value));
    return shown * facing;
  });
  return <Line p1={a} p2={b} color={ACCENT} strokeWidth={2.5} strokeCap="round" opacity={opacity} />;
}

function Helix({ p }: { p: SharedValue<number> }) {
  const phase = useDerivedValue(() => p.value * Math.PI * 3);
  const draw = useDerivedValue(() => ease(seg(p.value, 0.04, 0.3)));
  const left = useDerivedValue(() => strand(phase.value, 0, draw.value));
  const right = useDerivedValue(() => strand(phase.value, Math.PI, draw.value));
  return (
    <Group>
      {Array.from({ length: RUNGS }, (_, i) => (
        <Rung key={i} p={p} i={i} phase={phase} />
      ))}
      <Path path={left} color={INK} style="stroke" strokeWidth={2.25} strokeCap="round" />
      <Path path={right} color={INK} style="stroke" strokeWidth={2.25} strokeCap="round" opacity={0.75} />
    </Group>
  );
}

/* ─────────────── The reel's middle ─────────────── */

const SCENE_ART = [Projectile, Atom, Tangent, Helix];

function Scene({ clock, index, scale }: { clock: SharedValue<number>; index: number; scale: number }) {
  const Art = SCENE_ART[index];
  const p = useDerivedValue(() => clock.value * N - index);
  const opacity = useDerivedValue(() => sceneOpacity(p.value));
  return (
    <Group opacity={opacity} transform={[{ scale }]}>
      <Art p={p} />
    </Group>
  );
}

function Caption({ clock, index, style }: { clock: SharedValue<number>; index: number; style: object }) {
  const s = SCENES[index];
  const fade = useAnimatedStyle(() => ({ opacity: sceneOpacity(clock.value * N - index) }));
  return (
    <Animated.View style={[StyleSheet.absoluteFill, { alignItems: 'center' }, fade]}>
      <Text style={style}>
        {s.subject.toUpperCase()}
        <Text style={{ color: 'rgba(255,253,248,.7)', fontFamily: 'Onest_400Regular', letterSpacing: 0 }}>{`  ·  ${s.topic}`}</Text>
      </Text>
    </Animated.View>
  );
}

/**
 * The moving diagram, `size` points square, with the subject and topic under it.
 */
export function VideosReelArt({ size, captionStyle }: { size: number; captionStyle: object }) {
  const reduce = useReducedMotion();
  const clock = useSharedValue(reduce ? 0.6 / N : 0);
  useEffect(() => {
    if (reduce) {
      clock.value = 0.6 / N;
      return;
    }
    clock.value = 0;
    clock.value = withRepeat(withTiming(1, { duration: SCENE_MS * N, easing: Easing.linear }), -1, false);
  }, [reduce, clock]);

  if (size <= 0) return null;
  const k = size / BOX;
  return (
    <View style={{ alignItems: 'center' }} pointerEvents="none">
      <Canvas style={{ width: size, height: size }}>
        {SCENES.map((_, i) => (
          <Scene key={i} clock={clock} index={i} scale={k} />
        ))}
      </Canvas>
      <View style={{ height: 22, alignSelf: 'stretch', marginTop: 6 }}>
        {SCENES.map((_, i) => (
          <Caption key={i} clock={clock} index={i} style={captionStyle} />
        ))}
      </View>
    </View>
  );
}
