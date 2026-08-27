import React, { useEffect, useRef, useState } from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { G, Path, Rect, Text as SvgText } from 'react-native-svg';

/**
 * Scene kit — the native port of the webpage's `src/components/scenes/kit.tsx`.
 *
 * A scene is a pure function of (currentTime, reveals): every element states
 * which narration beat it belongs to and animates in when the audio crosses
 * that beat's timestamp. Seeking, pausing and language switches all work for
 * free, because nothing here keeps a clock of its own.
 *
 * The authored scenes are almost entirely built from these four primitives —
 * `Fade`, `Draw`, `T`, `Chip` — over a 1080×620 canvas, so porting this file
 * is what makes the scenes themselves portable. The behaviour is matched
 * deliberately, including the remount-on-settle trick, so a scene reads the
 * same here as on the web.
 *
 * Two things could not be carried across literally:
 *   1. CSS transitions become Reanimated timings.
 *   2. `pathLength={100}` — SVG's own stroke normalisation — is not honoured
 *      by react-native-svg, so `Draw` measures the path itself. See
 *      `approximatePathLength`.
 */

export interface SceneProps {
  currentTime: number;
  reveals: number[];
  language: 'english' | 'hinglish';
}

/**
 * Index of the latest beat whose reveal time has STRICTLY passed (-1 = none).
 *
 * Strictly-greater, not >=, is deliberate and load-bearing: every section's
 * first reveal is 0.0, so before playback starts this returns -1 and the board
 * is empty rather than pre-drawn. An element that mounts already `on` skips its
 * transition, so gating off→on is what makes it actually animate.
 */
export function useBeat(currentTime: number, reveals: number[]): number {
  let beat = -1;
  for (let i = 0; i < reveals.length; i++) {
    if (currentTime > (reveals[i] ?? 0)) beat = i;
    else break;
  }
  return beat;
}

/**
 * Stagger helper: an element belonging to beat `k` keeps its choreographed
 * delay only while `k` is the current beat. Once the narration has moved on —
 * or the student seeks past it — it settles instantly, with no ghost replay.
 */
export function delayFor(beat: number, k: number, d: number): number {
  return beat > k ? 0 : d;
}

const FADE_MS = 420;
const RISE = 8;

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export function Fade({
  on,
  delay = 0,
  dim = false,
  children,
}: {
  on: boolean;
  /** seconds after the beat fires */
  delay?: number;
  /** render at low opacity instead of full (for de-emphasised elements) */
  dim?: boolean;
  children: React.ReactNode;
}) {
  const target = on ? (dim ? 0.14 : 1) : 0;
  const opacity = useSharedValue(target);
  const offset = useSharedValue(on ? 0 : RISE);

  useEffect(() => {
    const ms = delay * 1000;
    opacity.value = withDelay(ms, withTiming(target, { duration: FADE_MS }));
    offset.value = withDelay(ms, withTiming(on ? 0 : RISE, { duration: FADE_MS }));
  }, [on, dim, delay, target, opacity, offset]);

  // `y` on a group is react-native-svg's translate shorthand, which is how the
  // web kit's `translateY(8px)` rise is expressed here.
  const animatedProps = useAnimatedProps(() => ({
    opacity: opacity.value,
    y: offset.value,
  }));

  return <AnimatedG animatedProps={animatedProps}>{children}</AnimatedG>;
}

/**
 * Length of a path, close enough to dash it.
 *
 * The web kit sets `pathLength={100}` and lets SVG normalise the dash array to
 * it. react-native-svg does not implement `pathLength`, so a dash array of 100
 * against a 700-unit path would draw seven dashes instead of one wipe. The
 * length is therefore measured here: straight segments exactly, curves by
 * sampling. It only has to be good enough that the stroke finishes exactly as
 * it is fully drawn, and sampling at 16 steps is well inside that.
 */
function approximatePathLength(d: string): number {
  const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
  if (!tokens) return 0;

  let i = 0;
  let command = '';
  let total = 0;
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  const num = () => Number(tokens[i++]);
  const dist = (ax: number, ay: number, bx: number, by: number) =>
    Math.hypot(bx - ax, by - ay);

  while (i < tokens.length) {
    const token = tokens[i];
    if (/[a-zA-Z]/.test(token)) {
      command = token;
      i++;
    }
    switch (command) {
      case 'M':
        x = num();
        y = num();
        startX = x;
        startY = y;
        break;
      case 'L':
        {
          const nx = num();
          const ny = num();
          total += dist(x, y, nx, ny);
          x = nx;
          y = ny;
        }
        break;
      case 'H':
        {
          const nx = num();
          total += Math.abs(nx - x);
          x = nx;
        }
        break;
      case 'V':
        {
          const ny = num();
          total += Math.abs(ny - y);
          y = ny;
        }
        break;
      case 'C':
        {
          const c1x = num();
          const c1y = num();
          const c2x = num();
          const c2y = num();
          const nx = num();
          const ny = num();
          let px = x;
          let py = y;
          for (let s = 1; s <= 16; s++) {
            const t = s / 16;
            const mt = 1 - t;
            const bx =
              mt * mt * mt * x + 3 * mt * mt * t * c1x + 3 * mt * t * t * c2x + t * t * t * nx;
            const by =
              mt * mt * mt * y + 3 * mt * mt * t * c1y + 3 * mt * t * t * c2y + t * t * t * ny;
            total += dist(px, py, bx, by);
            px = bx;
            py = by;
          }
          x = nx;
          y = ny;
        }
        break;
      case 'Q':
        {
          const cx = num();
          const cy = num();
          const nx = num();
          const ny = num();
          let px = x;
          let py = y;
          for (let s = 1; s <= 16; s++) {
            const t = s / 16;
            const mt = 1 - t;
            const bx = mt * mt * x + 2 * mt * t * cx + t * t * nx;
            const by = mt * mt * y + 2 * mt * t * cy + t * t * ny;
            total += dist(px, py, bx, by);
            px = bx;
            py = by;
          }
          x = nx;
          y = ny;
        }
        break;
      case 'Z':
      case 'z':
        total += dist(x, y, startX, startY);
        x = startX;
        y = startY;
        break;
      default:
        // An unsupported command (arcs, relative forms) — skip its number so
        // the parser cannot spin, and accept a slightly short measurement
        // rather than refusing to draw the path at all.
        i++;
        break;
    }
  }
  return total;
}

export function Draw({
  on,
  d,
  stroke,
  sw = 2.4,
  delay = 0,
  dur = 1,
  fill = 'none',
}: {
  on: boolean;
  d: string;
  stroke: string;
  sw?: number;
  delay?: number;
  dur?: number;
  fill?: string;
}) {
  const length = React.useMemo(() => Math.max(1, approximatePathLength(d)), [d]);
  const offset = useSharedValue(on ? 0 : length);

  useEffect(() => {
    offset.value = withDelay(
      delay * 1000,
      withTiming(on ? 0 : length, {
        duration: dur * 1000,
        easing: Easing.bezier(0.25, 0.1, 0.35, 1),
      })
    );
  }, [on, delay, dur, length, offset]);

  const animatedProps = useAnimatedProps(() => ({ strokeDashoffset: offset.value }));

  return (
    <AnimatedPath
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={[length, length]}
      animatedProps={animatedProps}
    />
  );
}

/** Straight arrow with a drawn head, as a single Draw path. */
export function arrowD(x1: number, y1: number, x2: number, y2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 11;
  return `M ${x1} ${y1} L ${x2} ${y2} M ${x2 - h * Math.cos(a - 0.46)} ${
    y2 - h * Math.sin(a - 0.46)
  } L ${x2} ${y2} L ${x2 - h * Math.cos(a + 0.46)} ${y2 - h * Math.sin(a + 0.46)}`;
}

/** Hand-drawn ellipse for circling something on the board. */
export function ringD(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} C ${cx - rx} ${cy - ry * 1.25}, ${cx + rx * 0.9} ${
    cy - ry * 1.3
  }, ${cx + rx} ${cy - ry * 0.1} C ${cx + rx * 1.05} ${cy + ry * 1.2}, ${
    cx - rx * 0.8
  } ${cy + ry * 1.35}, ${cx - rx * 1.02} ${cy + ry * 0.15}`;
}

/** Cross-out (two drawn strokes) over a bounding box. */
export function crossD(x: number, y: number, w: number, h: number): string {
  return `M ${x - 4} ${y - 3} L ${x + w + 4} ${y + h + 3} M ${x + w + 4} ${
    y - 3
  } L ${x - 4} ${y + h + 3}`;
}

type Anchor = 'start' | 'middle' | 'end';

/**
 * The web sets a family and a numeric weight and lets the browser pick the
 * face. React Native has no such synthesis — each weight is its own bundled
 * family — so the weight is resolved to a face here.
 */
function fontFor(script: boolean, weight?: number): string {
  if (script) return weight != null && weight < 700 ? 'Kalam_400Regular' : 'Kalam_700Bold';
  if (weight == null) return 'AnekLatin_600SemiBold';
  if (weight >= 800) return 'AnekLatin_800ExtraBold';
  if (weight >= 700) return 'AnekLatin_700Bold';
  if (weight >= 600) return 'AnekLatin_600SemiBold';
  if (weight >= 500) return 'AnekLatin_500Medium';
  return 'AnekLatin_400Regular';
}

export function T({
  x,
  y,
  size,
  fill,
  anchor = 'middle',
  script = false,
  weight,
  children,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  anchor?: Anchor;
  script?: boolean;
  weight?: number;
  children: React.ReactNode;
}) {
  return (
    <SvgText
      x={x}
      y={y}
      fontSize={size}
      fill={fill}
      textAnchor={anchor}
      fontFamily={fontFor(script, weight)}>
      {children}
    </SvgText>
  );
}

export function Chip({
  x,
  y,
  w,
  h,
  fill,
  stroke,
  textFill,
  size = 19,
  script = true,
  dashed = false,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke?: string;
  textFill: string;
  size?: number;
  script?: boolean;
  dashed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <G>
      <Rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={Math.min(14, h / 2)}
        fill={fill}
        stroke={stroke || 'none'}
        strokeWidth={1.8}
        strokeDasharray={dashed ? [7, 6] : undefined}
      />
      <T x={x + w / 2} y={y + h / 2 + size * 0.34} size={size} fill={textFill} script={script}>
        {children}
      </T>
    </G>
  );
}

/**
 * The scene canvas.
 *
 * On the web each scene opens its own `<svg viewBox="0 0 1080 620">`; here that
 * root is this component, so the codemod that ports a scene only has to swap
 * the tag rather than rewrite attributes into react-native-svg's spelling.
 */
export function Scene({
  children,
  viewBox = '0 0 1080 620',
}: {
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <Svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="xMidYMin meet">
      {children}
    </Svg>
  );
}

/**
 * `performance.now()` is not guaranteed in the Hermes runtime the app ships
 * with, so these two clocks use `Date.now()`. Both are relative measurements,
 * so the lower resolution costs nothing.
 */
export function useCountUp(active: boolean, to: number, durS: number, delayS = 0): number {
  const [val, setVal] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    if (!active) {
      setVal(0);
      return;
    }
    const t0 = Date.now() + delayS * 1000;
    const tick = () => {
      const p = Math.min(1, Math.max(0, (Date.now() - t0) / (durS * 1000)));
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setVal(Math.round(to * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, to, durS, delayS]);
  return active ? val : 0;
}

/**
 * Timeline label — returns the label whose time has passed, driven by elapsed
 * time since the beat activated (for e.g. a stepping counter).
 */
export function useTimelineLabel(active: boolean, steps: [number, string][]): string {
  const [label, setLabel] = useState('');
  const raf = useRef<number>(0);
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    if (!active) {
      setLabel('');
      return;
    }
    const t0 = Date.now();
    const tick = () => {
      const el = (Date.now() - t0) / 1000;
      let cur = '';
      for (const [t, l] of steps) if (el >= t) cur = l;
      setLabel(cur);
      if (el < steps[steps.length - 1][0] + 0.2) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return active ? label : '';
}

export const INK = '#1C1A16';
export const INK_LIGHT = '#57534B';
export const MUTED = '#9C988C';
export const AMBER = '#EEA31F';
export const AMBER_DARK = '#9A6A12';
export const GREEN = '#1C9B57';
export const GREEN_DARK = '#157A45';
export const RED = '#DD4433';
export const CREAM = '#FCF4E0';
export const PAPER = '#FFFEFB';
