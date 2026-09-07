import { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';

import type { DiagramFrame, PlotCurve } from '@/lib/textbooks';

/**
 * The parameterised figures: `plot`, `numberline` and `unitcircle`.
 *
 * The six original figures are one bespoke component each, with their captions
 * written into the reader. That works for six and not for a syllabus: every
 * chapter after Sets needs curves, axes and points, and hardcoding one
 * component per picture would put thirteen chapters of editorial content into
 * a shared file.
 *
 * So these three read their drawing from the content block instead. A chapter
 * declares what to draw as data (see `DiagramFrame`), and nothing here knows
 * which chapter is asking. Curves are a closed vocabulary rather than
 * expression strings: content stays compact, and the reader never evaluates
 * anything a chapter wrote.
 */

const INK = '#1C1A16';
const AMBER = '#EEA31F';
const SOFT = '#B5B0A4';
const RULE = 'rgba(28,26,22,.18)';
const BAND = 'rgba(238,163,31,.16)';
const FILL = 'rgba(238,163,31,.22)';
const FILL_SOFT = 'rgba(28,26,22,.08)';
/** Region fills, one per tone role. Same hues as the strokes, at wash weight. */
const WASH: Record<string, string> = {
  ink: 'rgba(28,26,22,.10)',
  amber: 'rgba(238,163,31,.22)',
  soft: 'rgba(181,176,164,.18)',
  green: 'rgba(28,155,87,.16)',
  red: 'rgba(221,68,51,.14)',
};
const SERIF = 'Georgia';
const PAPER = '#FFFFFF';

/**
 * A label with the page colour knocked out behind it.
 *
 * A physics figure is dense: a force arrow crosses the body it acts on, an
 * incline crosses the ground, and a weight arrow ends on the surface it
 * presses into. Wherever a label lands, something is already drawn there. The
 * first draft put "mg" on the ground line and hid the block's own "m" under
 * two arrows.
 *
 * Drawing the glyphs twice, once as a fat paper-coloured stroke and once
 * normally, punches a small hole in whatever is behind them. It is the
 * standard cartographic fix and it costs one extra text node.
 */
function HaloText({
  x,
  y,
  size,
  fill,
  anchor = 'middle',
  italic,
  children,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  anchor?: 'start' | 'middle' | 'end';
  italic?: boolean;
  children: string;
}) {
  const shared = {
    x,
    y,
    fontSize: size,
    fontFamily: SERIF,
    textAnchor: anchor,
    fontStyle: italic ? ('italic' as const) : undefined,
  };
  return (
    <G>
      <SvgText {...shared} fill="none" stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        {children}
      </SvgText>
      <SvgText {...shared} fill={fill}>
        {children}
      </SvgText>
    </G>
  );
}

/** Samples per figure width. Enough that a sine reads as smooth at 300pt. */
const SAMPLES = 240;

function evalCurve(c: PlotCurve, x: number): number | null {
  switch (c.c) {
    case 'sin':
      return (c.a ?? 1) * Math.sin((c.b ?? 1) * (x - (c.shift ?? 0))) + (c.d ?? 0);
    case 'cos':
      return (c.a ?? 1) * Math.cos((c.b ?? 1) * (x - (c.shift ?? 0))) + (c.d ?? 0);
    case 'tan': {
      const v = (c.a ?? 1) * Math.tan((c.b ?? 1) * (x - (c.shift ?? 0))) + (c.d ?? 0);
      // Break the path at the asymptotes instead of drawing a vertical streak.
      return Math.abs(v) > 40 ? null : v;
    }
    case 'line':
      return c.m * x + c.k;
    case 'poly':
      return c.coeffs.reduce((sum, k, i) => sum + k * Math.pow(x, i), 0);
    case 'parabola':
      // The horizontal one is not a function of x; parametricPath draws it.
      return c.horizontal ? null : (c.cy ?? 0) + Math.pow(x - (c.cx ?? 0), 2) / (4 * c.a);
    // d + a·f(k(x − x0)). k/x0/d default to 1/0/0, which is the old behaviour.
    case 'abs':
    case 'exp':
    case 'log':
    case 'sqrt':
    case 'recip': {
      const u = (c.k ?? 1) * (x - (c.x0 ?? 0));
      const a = c.a ?? 1;
      const d = c.d ?? 0;
      if (c.c === 'abs') return d + a * Math.abs(u);
      if (c.c === 'exp') return d + a * Math.exp(u);
      if (c.c === 'log') return u > 0 ? d + a * Math.log(u) : null;
      if (c.c === 'sqrt') return u >= 0 ? d + a * Math.sqrt(u) : null;
      return Math.abs(u) < 1e-6 ? null : d + a / u;
    }
    case 'power': {
      // Adiabats are PV^γ with γ fractional, so a negative base has no real
      // value rather than a wrong one.
      if (x < 0 && !Number.isInteger(c.p)) return null;
      const v = (c.a ?? 1) * Math.pow(x, c.p);
      return Number.isFinite(v) ? v : null;
    }
    default:
      return null;
  }
}

/** Role to brand token. Content names a meaning; the reader picks the paint. */
const TONE: Record<string, string> = {
  ink: INK,
  amber: AMBER,
  soft: SOFT,
  green: '#1C9B57',
  red: '#DD4433',
};
const paint = (t: string | undefined, fallback: string) => (t && TONE[t]) || fallback;

/**
 * An arrowhead, in pixels.
 *
 * Ported from `arrowD` in components/scenes/kit.tsx, where it is proven across
 * 2,647 scene components. The head length is a parameter here: the scene kit's
 * 11 is about 1% of a 1080-wide board, and 1% of a 316pt card is invisible.
 */
function headD(x1: number, y1: number, x2: number, y2: number, h: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return (
    `M ${x2 - h * Math.cos(a - 0.46)} ${y2 - h * Math.sin(a - 0.46)} ` +
    `L ${x2} ${y2} L ${x2 - h * Math.cos(a + 0.46)} ${y2 - h * Math.sin(a + 0.46)}`
  );
}

/**
 * A circular arc, in pixels, angles in radians anticlockwise from +x.
 *
 * Ported from `angleArcD` in components/scenes/math-kit.tsx. The sweep flag is
 * inverted because screen y grows downward: getting that wrong draws the
 * reflex angle instead of the one that was asked for.
 */
function arcD(cx: number, cy: number, r: number, t1: number, t2: number): string {
  const p1 = [cx + r * Math.cos(t1), cy - r * Math.sin(t1)];
  const p2 = [cx + r * Math.cos(t2), cy - r * Math.sin(t2)];
  const large = Math.abs(t2 - t1) > Math.PI ? 1 : 0;
  const sweep = t2 > t1 ? 0 : 1;
  return `M ${p1[0]} ${p1[1]} A ${r} ${r} 0 ${large} ${sweep} ${p2[0]} ${p2[1]}`;
}

/**
 * A path through points, optionally smoothed.
 *
 * Catmull-Rom, ported from `curveD` in components/scenes/math-kit.tsx. It
 * overshoots at a sharp corner, so a stress-strain yield point wants extra
 * points either side rather than smoothing.
 */
function throughD(pts: [number, number][], smooth?: boolean): string {
  if (pts.length < 2) return '';
  if (!smooth || pts.length === 2) {
    return pts.map((q, i) => `${i ? 'L' : 'M'} ${q[0]} ${q[1]}`).join(' ');
  }
  let d = `M ${pts[0][0]} ${pts[0][1]} `;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d +=
      `C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6}, ` +
      `${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6}, ${p2[0]} ${p2[1]} `;
  }
  return d;
}

/** Curves that are not functions of x get their own parametric path. */
function parametricPath(
  c: PlotCurve,
  X: (n: number) => number,
  Y: (n: number) => number
): string | null {
  const pt = (px: number, py: number) => `${X(px).toFixed(2)},${Y(py).toFixed(2)}`;
  if (c.c === 'circle') {
    const cx = c.cx ?? 0;
    const cy = c.cy ?? 0;
    let d = '';
    for (let i = 0; i <= 180; i++) {
      const t = (i / 180) * Math.PI * 2;
      d += `${i ? 'L' : 'M'}${pt(cx + c.r * Math.cos(t), cy + c.r * Math.sin(t))}`;
    }
    return `${d}Z`;
  }
  if (c.c === 'ellipse') {
    const cx = c.cx ?? 0;
    const cy = c.cy ?? 0;
    let d = '';
    for (let i = 0; i <= 180; i++) {
      const t = (i / 180) * Math.PI * 2;
      d += `${i ? 'L' : 'M'}${pt(cx + c.a * Math.cos(t), cy + c.b * Math.sin(t))}`;
    }
    return `${d}Z`;
  }
  if (c.c === 'hyperbola') {
    const cx = c.cx ?? 0;
    const cy = c.cy ?? 0;
    const arm = (sign: number) => {
      let d = '';
      for (let i = 0; i <= 60; i++) {
        const t = -2.2 + (i / 60) * 4.4;
        // `vertical` swaps which axis the branches straddle, giving the
        // conjugate hyperbola that opens up and down.
        const [px, py] = c.vertical
          ? [cx + c.b * Math.sinh(t), cy + sign * c.a * Math.cosh(t)]
          : [cx + sign * c.a * Math.cosh(t), cy + c.b * Math.sinh(t)];
        d += `${i ? 'L' : 'M'}${pt(px, py)}`;
      }
      return d;
    };
    return `${arm(1)} ${arm(-1)}`;
  }
  if (c.c === 'vline') {
    // Declared in the vocabulary but never implemented, so it drew an empty
    // path: a boundary line that silently was not there. Drawn full-height
    // here, clipped by the SVG viewport like every other curve.
    return `M${X(c.x).toFixed(2)},0 L${X(c.x).toFixed(2)},9999`;
  }
  if (c.c === 'parabola' && c.horizontal) {
    const cx = c.cx ?? 0;
    const cy = c.cy ?? 0;
    let d = '';
    for (let i = 0; i <= 120; i++) {
      const t = -3 + (i / 120) * 6;
      d += `${i ? 'L' : 'M'}${pt(cx + c.a * t * t, cy + 2 * c.a * t)}`;
    }
    return d;
  }
  return null;
}

export function Plot({
  frame,
  width,
  kind,
}: {
  frame: DiagramFrame;
  width: number;
  kind: string;
}) {
  const isLine = kind === 'numberline';
  const height = Math.round(width * (frame.aspect ?? (isLine ? 0.34 : 0.72)));

  const geom = useMemo(() => {
    const [x0, x1] = frame.x ?? (isLine ? [-5, 5] : [-Math.PI, Math.PI]);
    const [y0, y1] = frame.y ?? [-1.6, 1.6];
    // Padding has to know what will be printed in it. Numeric ticks are drawn
    // outside the axis, so a y label anchored at the axis runs off the left
    // edge and an x label runs off the bottom -- which is exactly how the
    // z-axis label went missing from every axes3d figure ever authored.
    const padL = frame.ticksY ? 26 : 10;
    const padR = 10;
    const padT = frame.axisY ? 15 : 8;
    // A trig plot reserves a strip at the bottom for its π labels. They used
    // to sit on the x-axis at Y(0), which is exactly where the curves cross,
    // so every label landed under a line and the negative ones collided with
    // each other.
    const padB = isLine
      ? 20
      : frame.piTicks
        ? 22
        : frame.axisX
          ? 34
          : frame.ticksX
            ? 21
            : 8;
    const X = (n: number) => padL + ((n - x0) / (x1 - x0)) * (width - padL - padR);
    const Y = (n: number) =>
      isLine
        ? height / 2
        : padT + (1 - (n - y0) / (y1 - y0)) * (height - padT - padB);
    return { x0, x1, y0, y1, X, Y };
  }, [frame.x, frame.y, frame.piTicks, frame.ticksX, frame.ticksY, frame.axisX, frame.axisY, width, height, isLine]);

  const { x0, x1, y0, y1, X, Y } = geom;

  const curvePath = (c: PlotCurve): string => {
    if (c.c === 'pts') {
      return throughD(
        c.pts.map((q) => [X(q[0]), Y(q[1])] as [number, number]),
        c.smooth
      );
    }
    const para = parametricPath(c, X, Y);
    if (para) return para;
    let d = '';
    let pen = false;
    for (let i = 0; i <= SAMPLES; i++) {
      const x = x0 + ((x1 - x0) * i) / SAMPLES;
      const v = evalCurve(c, x);
      if (v == null || v < y0 - 4 || v > y1 + 4) {
        pen = false;
        continue;
      }
      d += `${pen ? 'L' : 'M'}${X(x).toFixed(2)},${Y(v).toFixed(2)}`;
      pen = true;
    }
    return d;
  };

  /** n as a multiple of π: 3π/2, −π, π/2. Real minus, never a hyphen. */
  const piLabel = (n: number) => {
    const r = Math.round((n / Math.PI) * 2) / 2;
    if (r === 0) return '0';
    const sign = r < 0 ? '−' : '';
    const a = Math.abs(r);
    const half = a % 1 !== 0;
    const num = half ? a * 2 : a;
    const head = num === 1 ? 'π' : `${num}π`;
    return `${sign}${half ? `${head}/2` : head}`;
  };

  return (
    <Svg width={width} height={height}>
      {/* Shaded bands sit under everything: they are ground, not ink. */}
      {frame.bands?.map((b, i) => {
        const bx0 = X(b.x0 ?? x0);
        const bx1 = X(b.x1 ?? x1);
        const by0 = Y(b.y1 ?? y1);
        const by1 = Y(b.y0 ?? y0);
        return (
          <Rect
            key={`b${i}`}
            x={Math.min(bx0, bx1)}
            y={isLine ? height / 2 - 9 : Math.min(by0, by1)}
            width={Math.abs(bx1 - bx0)}
            height={isLine ? 18 : Math.abs(by1 - by0)}
            fill={BAND}
            rx={isLine ? 9 : 2}
          />
        );
      })}

      {/* A region under a curve, or between two. Sampled at the plot's own
          resolution so the boundary is the curve itself, not a chord. */}
      {frame.areas?.map((a, i) => {
        const step = (a.to - a.from) / SAMPLES;
        const top: string[] = [];
        const bottom: string[] = [];
        for (let k = 0; k <= SAMPLES; k++) {
          const x = a.from + step * k;
          const yTop = evalCurve(a.under, x);
          const yBot = a.and ? evalCurve(a.and, x) : 0;
          if (yTop == null || yBot == null) continue;
          top.push(`${X(x).toFixed(2)},${Y(yTop).toFixed(2)}`);
          bottom.push(`${X(x).toFixed(2)},${Y(yBot).toFixed(2)}`);
        }
        if (top.length < 2) return null;
        const d = `M${top.join('L')}L${bottom.reverse().join('L')}Z`;
        return <Path key={`a${i}`} d={d} fill={a.soft ? FILL_SOFT : FILL} />;
      })}

      {/* A feasible region and its corners. */}
      {frame.polygons?.map((poly, i) => {
        if (poly.points.length < 3) return null;
        const d = `M${poly.points.map(([px, py]) => `${X(px).toFixed(2)},${Y(py).toFixed(2)}`).join('L')}Z`;
        return (
          <G key={`g${i}`}>
            <Path
              d={d}
              fill={poly.soft ? FILL_SOFT : FILL}
              stroke={poly.soft ? SOFT : AMBER}
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
            {poly.corners !== false &&
              poly.points.map(([px, py], k) => (
                <Circle key={`c${k}`} cx={X(px)} cy={Y(py)} r={3.4} fill={INK} />
              ))}
          </G>
        );
      })}

      {/* Axes. 'none' is for a scene: a block on an incline has coordinates
          but no meaningful axes, and a cross through it is noise. */}
      {!isLine && (frame.axes ?? 'auto') !== 'none' && y0 <= 0 && y1 >= 0 && (
        <Line x1={X(x0)} y1={Y(0)} x2={X(x1)} y2={Y(0)} stroke={RULE} strokeWidth={1} />
      )}
      {!isLine && (frame.axes ?? 'auto') !== 'none' && x0 <= 0 && x1 >= 0 && (
        <Line x1={X(0)} y1={Y(y0)} x2={X(0)} y2={Y(y1)} stroke={RULE} strokeWidth={1} />
      )}
      {isLine && (
        <Line
          x1={X(x0)}
          y1={height / 2}
          x2={X(x1)}
          y2={height / 2}
          stroke={RULE}
          strokeWidth={1.4}
        />
      )}

      {/* Integer ticks on a number line, π ticks on a trig plot. */}
      {isLine &&
        Array.from({ length: Math.floor(x1 - x0) + 1 }, (_, i) => Math.ceil(x0) + i).map((n) => (
          <G key={`t${n}`}>
            <Line
              x1={X(n)}
              y1={height / 2 - 4}
              x2={X(n)}
              y2={height / 2 + 4}
              stroke={RULE}
              strokeWidth={1}
            />
            <SvgText
              x={X(n)}
              y={height / 2 + 17}
              fontSize={10}
              fill={SOFT}
              fontFamily={SERIF}
              textAnchor="middle">
              {n === 0 ? '0' : n < 0 ? `−${Math.abs(n)}` : `${n}`}
            </SvgText>
          </G>
        ))}
      {!isLine &&
        frame.piTicks &&
        [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2]
          .map((k) => k * Math.PI)
          .filter((n) => n > x0 && n < x1)
          .map((n) => (
            <G key={`p${n.toFixed(2)}`}>
              <Line x1={X(n)} y1={Y(0) - 3} x2={X(n)} y2={Y(0) + 3} stroke={RULE} strokeWidth={1} />
              <SvgText
                x={X(n)}
                y={height - 6}
                fontSize={9.5}
                fill={SOFT}
                fontFamily={SERIF}
                textAnchor="middle">
                {piLabel(n)}
              </SvgText>
            </G>
          ))}

      {/* Intervals, for the number line. */}
      {frame.intervals?.map((iv, i) => {
        const a = X(iv.from);
        const b = X(iv.to);
        const c = iv.soft ? SOFT : AMBER;
        return (
          <G key={`i${i}`}>
            <Line
              x1={a}
              y1={height / 2}
              x2={b}
              y2={height / 2}
              stroke={c}
              strokeWidth={3.4}
              strokeLinecap="round"
            />
            <Circle
              cx={a}
              cy={height / 2}
              r={4.2}
              fill={iv.openLeft ? '#FFFFFF' : c}
              stroke={c}
              strokeWidth={1.8}
            />
            <Circle
              cx={b}
              cy={height / 2}
              r={4.2}
              fill={iv.openRight ? '#FFFFFF' : c}
              stroke={c}
              strokeWidth={1.8}
            />
            {iv.label ? (
              <SvgText
                x={(a + b) / 2}
                y={height / 2 - 12}
                fontSize={11}
                fill={INK}
                fontFamily={SERIF}
                textAnchor="middle">
                {iv.label}
              </SvgText>
            ) : null}
          </G>
        );
      })}

      {/* Curves */}
      {frame.curves?.map((c, i) => (
        <Path
          key={`c${i}`}
          d={curvePath(c)}
          fill="none"
          stroke={c.soft ? SOFT : i === 0 ? INK : AMBER}
          strokeWidth={c.soft ? 1.4 : 2}
          strokeDasharray={c.dash ? '4 4' : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* Segments */}
      {frame.segments?.map((sg, i) => (
        <G key={`s${i}`}>
          <Line
            x1={X(sg.from[0])}
            y1={Y(sg.from[1])}
            x2={X(sg.to[0])}
            y2={Y(sg.to[1])}
            stroke={sg.soft ? SOFT : AMBER}
            strokeWidth={sg.soft ? 1.3 : 2}
            strokeDasharray={sg.dash ? '3 3' : undefined}
            strokeLinecap="round"
          />
          {sg.arrow && (
            // A real head, same as `arrows`. This path was left drawing a dot
            // when the arrowhead landed, so 46 authored maths arrows and every
            // segment arrow in the corpus were still tipped with a circle.
            <Path
              d={headD(X(sg.from[0]), Y(sg.from[1]), X(sg.to[0]), Y(sg.to[1]), 7)}
              fill="none"
              stroke={sg.soft ? SOFT : AMBER}
              strokeWidth={2}
            />
          )}
          {sg.label
            ? (() => {
                // Beside the line, not on it. The old placement was the
                // midpoint nudged six pixels right, which for any line that
                // is not horizontal is still the line.
                const ax = X(sg.from[0]);
                const ay = Y(sg.from[1]);
                const bx = X(sg.to[0]);
                const by = Y(sg.to[1]);
                const len = Math.hypot(bx - ax, by - ay) || 1;
                const at = sg.at ?? 'above';
                const off = at === 'below' ? 12 : -12;
                const k = at === 'start' ? 0.18 : at === 'end' ? 0.82 : 0.5;
                return (
                  <HaloText
                    x={ax + (bx - ax) * k - ((by - ay) / len) * off}
                    y={ay + (by - ay) * k + ((bx - ax) / len) * off + 3.5}
                    size={10.5}
                    fill={INK}>
                    {sg.label}
                  </HaloText>
                );
              })()
            : null}
        </G>
      ))}

      {/* Points */}
      {frame.points?.map((p, i) => {
        const at = p.at ?? 'ne';
        const dx = at === 'nw' || at === 'sw' ? -7 : 7;
        const dy = at === 'se' || at === 'sw' ? 14 : -6;
        return (
          <G key={`p${i}`}>
            <Circle
              cx={X(p.x)}
              cy={Y(p.y)}
              r={4.2}
              fill={p.open ? '#FFFFFF' : p.soft ? SOFT : INK}
              stroke={p.open ? (p.soft ? SOFT : INK) : 'none'}
              strokeWidth={1.6}
            />
            {!!p.label && (
              <HaloText
                x={X(p.x) + dx}
                y={Y(p.y) + dy}
                size={11}
                fill={INK}
                anchor={dx < 0 ? 'end' : 'start'}>
                {p.label}
              </HaloText>
            )}
          </G>
        );
      })}

      {/* Free labels */}
      {frame.labels?.map((l, i) => (
        <SvgText
          key={`l${i}`}
          x={X(l.x)}
          y={Y(l.y)}
          fontSize={11}
          fill={l.soft ? SOFT : INK}
          fontFamily={SERIF}
          textAnchor="middle">
          {l.text}
        </SvgText>
      ))}

      {/* ---- Scene primitives. Everything below is new for physics. ---- */}

      {/* Numeric ticks. Until now a v-t graph in seconds got a bare rule with
          no numbers on it: the only tick systems were integers on a
          numberline and multiples of pi on a trig plot. */}
      {!isLine &&
        (['x', 'y'] as const).map((ax) => {
          const spec = ax === 'x' ? frame.ticksX : frame.ticksY;
          if (!spec) return null;
          const [lo, hi] = ax === 'x' ? [x0, x1] : [y0, y1];
          const at =
            spec.at ??
            (spec.every
              ? Array.from(
                  { length: Math.floor((hi - lo) / spec.every) + 1 },
                  (_, i) => Math.ceil(lo / spec.every!) * spec.every! + i * spec.every!
                ).filter((n) => n >= lo && n <= hi)
              : []);
          return (
            <G key={`tk${ax}`}>
              {at.map((n, i) => {
                const px = ax === 'x' ? X(n) : X(Math.max(x0, Math.min(0, x1)));
                const py = ax === 'x' ? Y(Math.max(y0, Math.min(0, y1))) : Y(n);
                const text = spec.labels?.[i] ?? (n < 0 ? `\u2212${Math.abs(n)}` : `${n}`);
                return (
                  <G key={`${ax}${i}`}>
                    <Line
                      x1={ax === 'x' ? px : px - 3.5}
                      y1={ax === 'x' ? py - 3.5 : py}
                      x2={ax === 'x' ? px : px + 3.5}
                      y2={ax === 'x' ? py + 3.5 : py}
                      stroke={RULE}
                      strokeWidth={1}
                    />
                    <SvgText
                      x={ax === 'x' ? px : px - 6}
                      y={ax === 'x' ? py + 13 : py + 3.5}
                      fontSize={9.5}
                      fill={SOFT}
                      fontFamily={SERIF}
                      textAnchor={ax === 'x' ? 'middle' : 'end'}>
                      {text}
                    </SvgText>
                  </G>
                );
              })}
            </G>
          );
        })}

      {/* Axis titles. A physics plot without units on the axes is a shape. */}
      {!!frame.axisX && (
        <SvgText
          x={X(x1)}
          y={Y(Math.max(y0, Math.min(0, y1))) + (frame.ticksX ? 30 : 15)}
          fontSize={9.5}
          fill={SOFT}
          fontFamily={SERIF}
          textAnchor="end">
          {frame.axisX}
        </SvgText>
      )}
      {!!frame.axisY && (
        <SvgText
          x={X(Math.max(x0, Math.min(0, x1))) + 4}
          y={Y(y1) + 9}
          fontSize={9.5}
          fill={SOFT}
          fontFamily={SERIF}
          textAnchor="start">
          {frame.axisY}
        </SvgText>
      )}

      {/* Polylines and filled regions. `hatch` is the ground/fixed fill: the
          brand has no grey wash, so a solid support is drawn, not shaded. */}
      {frame.polys?.map((pl, i) => {
        const px = pl.pts.map((q) => [X(q[0]), Y(q[1])] as [number, number]);
        const d = throughD(px, pl.smooth) + (pl.close ? ' Z' : '');
        const stroke = paint(pl.tone, INK);
        return (
          <G key={`py${i}`}>
            {pl.fill === 'wash' && (
              // Honour `tone` on the fill, not just the stroke. The first
              // physics chapter shaded a v-t graph's positive area green and
              // its negative area red, and both came out amber: a figure whose
              // whole point was the sign was drawn with the sign invisible.
              <Path d={d} fill={WASH[pl.tone ?? 'amber'] ?? FILL} stroke="none" />
            )}
            {pl.fill === 'hatch' &&
              px.length > 1 &&
              (() => {
                const xs = px.map((q) => q[0]);
                const ys = px.map((q) => q[1]);
                const lo = Math.min(...xs);
                const hi = Math.max(...xs);
                const t = Math.min(...ys);
                const b = Math.max(...ys);
                const step = 7;
                const n = Math.ceil((hi - lo + (b - t)) / step);
                return Array.from({ length: n }, (_, k) => {
                  const off = lo - (b - t) + k * step;
                  return (
                    <Line
                      key={`h${k}`}
                      x1={off}
                      y1={b}
                      x2={off + (b - t)}
                      y2={t}
                      stroke={RULE}
                      strokeWidth={0.8}
                    />
                  );
                });
              })()}
            <Path
              d={d}
              fill="none"
              stroke={stroke}
              strokeWidth={1.4}
              strokeDasharray={pl.dash ? '5 4' : undefined}
            />
          </G>
        );
      })}

      {/* Mechanics furniture. An author places a block, not its corners. */}
      {frame.bodies?.map((b, i) => {
        const cx = X(b.at[0]);
        const cy = Y(b.at[1]);
        const w = Math.abs(X(b.at[0] + (b.w ?? 1)) - cx);
        const h = Math.abs(Y(b.at[1] + (b.h ?? 0.6)) - cy);
        const tone = paint(b.tone, INK);
        if (b.kind === 'spring' || b.kind === 'rope') {
          const to = b.to ?? [b.at[0] + 1, b.at[1]];
          const [tx, ty] = [X(to[0]), Y(to[1])];
          if (b.kind === 'rope') {
            return (
              <Line key={`bd${i}`} x1={cx} y1={cy} x2={tx} y2={ty} stroke={tone} strokeWidth={1.3} />
            );
          }
          // A zig-zag along the axis, offset perpendicular.
          const dx = tx - cx;
          const dy = ty - cy;
          const len = Math.hypot(dx, dy) || 1;
          const ux = dx / len;
          const uy = dy / len;
          const teeth = 8;
          const amp = 5;
          const pts: string[] = [`M ${cx} ${cy}`];
          for (let k = 1; k <= teeth; k++) {
            const t = k / (teeth + 1);
            const sgn = k % 2 ? 1 : -1;
            pts.push(`L ${cx + dx * t - uy * amp * sgn} ${cy + dy * t + ux * amp * sgn}`);
          }
          pts.push(`L ${tx} ${ty}`);
          return (
            <Path key={`bd${i}`} d={pts.join(' ')} fill="none" stroke={tone} strokeWidth={1.3} />
          );
        }
        if (b.kind === 'pulley') {
          const r = w / 2;
          return (
            <G key={`bd${i}`}>
              <Circle cx={cx} cy={cy} r={r} fill="none" stroke={tone} strokeWidth={1.4} />
              <Circle cx={cx} cy={cy} r={1.8} fill={tone} />
            </G>
          );
        }
        // block, ground, wall, incline: a rectangle or a right triangle,
        // rotated about `at`, with hatching on the fixed side.
        const rot = b.rot ?? 0;
        const isTri = b.kind === 'incline';
        const d = isTri
          ? `M ${cx} ${cy} L ${cx + w} ${cy} L ${cx + w} ${cy - h} Z`
          : `M ${cx - w / 2} ${cy - h / 2} L ${cx + w / 2} ${cy - h / 2} ` +
            `L ${cx + w / 2} ${cy + h / 2} L ${cx - w / 2} ${cy + h / 2} Z`;
        const fixed = b.kind === 'ground' || b.kind === 'wall' || b.kind === 'incline';
        return (
          <G key={`bd${i}`} transform={rot ? `rotate(${-rot} ${cx} ${cy})` : undefined}>
            <Path d={d} fill={fixed ? 'none' : FILL} stroke={tone} strokeWidth={1.5} />
            {fixed &&
              Array.from({ length: 9 }, (_, k) => {
                const bx = (isTri ? cx : cx - w / 2) + (k * w) / 8;
                const by = isTri ? cy : cy + h / 2;
                return (
                  <Line
                    key={`hh${k}`}
                    x1={bx}
                    y1={by}
                    x2={bx - 6}
                    y2={by + 6}
                    stroke={RULE}
                    strokeWidth={0.9}
                  />
                );
              })}
          </G>
        );
      })}

      {/* Angle marks. */}
      {frame.arcs?.map((a, i) => {
        const cx = X(a.at[0]);
        const cy = Y(a.at[1]);
        const r = Math.abs(X(a.at[0] + a.r) - cx);
        const t1 = (a.from * Math.PI) / 180;
        const t2 = (a.to * Math.PI) / 180;
        const tone = paint(a.tone, AMBER);
        const mid = (t1 + t2) / 2;
        return (
          <G key={`ar${i}`}>
            {a.right ? (
              <Path
                d={
                  `M ${cx + r * Math.cos(t1)} ${cy - r * Math.sin(t1)} ` +
                  `L ${cx + r * (Math.cos(t1) + Math.cos(t2))} ${cy - r * (Math.sin(t1) + Math.sin(t2))} ` +
                  `L ${cx + r * Math.cos(t2)} ${cy - r * Math.sin(t2)}`
                }
                fill="none"
                stroke={tone}
                strokeWidth={1.2}
              />
            ) : (
              <Path
                d={arcD(cx, cy, r, t1, t2)}
                fill="none"
                stroke={tone}
                strokeWidth={1.2}
                strokeDasharray={a.dash ? '4 3' : undefined}
              />
            )}
            {!!a.label && (
              <HaloText
                x={cx + (r + 12) * Math.cos(mid)}
                y={cy - (r + 12) * Math.sin(mid) + 3.5}
                size={11}
                fill={tone}>
                {a.label}
              </HaloText>
            )}
          </G>
        );
      })}

      {/* Arrows with real heads. `segments` draws a dot at the tip; a force,
          a field and a current all need a head to mean anything. */}
      {frame.arrows?.map((a, i) => {
        const x1 = X(a.from[0]);
        const y1 = Y(a.from[1]);
        const x2 = X(a.to[0]);
        const y2 = Y(a.to[1]);
        const tone = paint(a.tone, AMBER);
        const head = a.head ?? 'end';
        const H = 7;
        // Label placement runs along and across the shaft, never straight up.
        // A vertical mg arrow with a naive "11px higher" label puts the text
        // on top of its own line, which is where the first draft put it.
        // Always beside the shaft, never along it. Placing a label beyond the
        // tip puts it on whatever the arrow points AT -- a weight arrow ends
        // on the ground, so "mg" landed on the ground line. `at` chooses how
        // far along the shaft to sit; the offset is always perpendicular.
        const at = a.at ?? 'above';
        const len = Math.hypot(x2 - x1, y2 - y1) || 1;
        const ux = (x2 - x1) / len;
        const uy = (y2 - y1) / len;
        // Screen y grows downward, so 'above' is a NEGATIVE offset.
        const off = at === 'below' ? 12 : -12;
        const t = at === 'start' ? 0.14 : at === 'end' ? 0.86 : 0.5;
        const mx = x1 + (x2 - x1) * t - uy * off;
        const my = y1 + (y2 - y1) * t + ux * off;
        return (
          <G key={`aw${i}`}>
            <Line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={tone}
              strokeWidth={1.5}
              strokeDasharray={a.dash ? '5 4' : undefined}
            />
            {(head === 'end' || head === 'both') && (
              <Path d={headD(x1, y1, x2, y2, H)} fill="none" stroke={tone} strokeWidth={1.5} />
            )}
            {(head === 'start' || head === 'both') && (
              <Path d={headD(x2, y2, x1, y1, H)} fill="none" stroke={tone} strokeWidth={1.5} />
            )}
            {!!a.label && (
              <HaloText x={mx} y={my + 3.5} size={11} fill={tone} italic={a.math}>
                {a.label}
              </HaloText>
            )}
          </G>
        );
      })}

      {/* Glyphs. Charge sign and field direction are carried by SHAPE, so a
          figure still reads correctly with colour removed. */}
      {frame.marks?.map((m, i) => {
        const cx = X(m.x);
        const cy = Y(m.y);
        const tone = paint(m.tone, INK);
        const r = 5.5;
        return (
          <G key={`mk${i}`}>
            {(m.glyph === 'into' || m.glyph === 'outof' || m.glyph === 'plus' || m.glyph === 'minus') && (
              <Circle cx={cx} cy={cy} r={r} fill="none" stroke={tone} strokeWidth={1.2} />
            )}
            {m.glyph === 'outof' && <Circle cx={cx} cy={cy} r={1.7} fill={tone} />}
            {(m.glyph === 'into' || m.glyph === 'cross') && (
              <Path
                d={`M ${cx - 3.6} ${cy - 3.6} L ${cx + 3.6} ${cy + 3.6} M ${cx + 3.6} ${cy - 3.6} L ${cx - 3.6} ${cy + 3.6}`}
                stroke={tone}
                strokeWidth={1.2}
              />
            )}
            {(m.glyph === 'plus' || m.glyph === 'minus') && (
              <Path
                d={
                  m.glyph === 'plus'
                    ? `M ${cx - 3} ${cy} L ${cx + 3} ${cy} M ${cx} ${cy - 3} L ${cx} ${cy + 3}`
                    : `M ${cx - 3} ${cy} L ${cx + 3} ${cy}`
                }
                stroke={tone}
                strokeWidth={1.4}
              />
            )}
            {m.glyph === 'dot' && <Circle cx={cx} cy={cy} r={3.2} fill={tone} />}
            {m.glyph === 'open' && (
              <Circle cx={cx} cy={cy} r={3.2} fill="#FFFFFF" stroke={tone} strokeWidth={1.3} />
            )}
            {m.glyph === 'square' && (
              <Rect x={cx - 3.2} y={cy - 3.2} width={6.4} height={6.4} fill={tone} />
            )}
            {m.glyph === 'tick' && (
              <Line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke={tone} strokeWidth={1.3} />
            )}
            {!!m.label && (
              <HaloText x={cx + 9} y={cy - 6} size={11} fill={INK} anchor="start">
                {m.label}
              </HaloText>
            )}
          </G>
        );
      })}

      {/* Body and region labels go LAST.
          A block's mass label is inside the block, and the forces acting on it
          are drawn from its centre, so the arrows crossed the label and won.
          Painting these after everything else, with a halo, means the name of
          a thing is never buried under the forces on it. */}
      {frame.bodies?.map((b, i) =>
        b.label ? (
          <HaloText key={`bl${i}`} x={X(b.at[0])} y={Y(b.at[1]) + 4} size={11} fill={INK}>
            {b.label}
          </HaloText>
        ) : null
      )}
      {frame.polys?.map((pl, i) => {
        if (!pl.label) return null;
        const cx = pl.pts.reduce((a, q) => a + X(q[0]), 0) / pl.pts.length;
        const cy = pl.pts.reduce((a, q) => a + Y(q[1]), 0) / pl.pts.length;
        return (
          <HaloText key={`pl${i}`} x={cx} y={cy + 4} size={11} fill={paint(pl.tone, INK)}>
            {pl.label}
          </HaloText>
        );
      })}
    </Svg>
  );
}

/**
 * The unit circle, which earns a component of its own.
 *
 * It is the one figure the whole of trigonometry leans on, and expressing it
 * as a generic plot would need an arc primitive, an angle sweep and three
 * labelled projections that no other figure wants.
 */
export function UnitCircle({ frame, width }: { frame: DiagramFrame; width: number }) {
  const size = Math.min(width, 260);
  const cx = width / 2;
  const cy = size / 2 + 6;
  const r = size / 2 - 26;
  const deg = frame.angle ?? 45;
  const rad = (deg * Math.PI) / 180;
  const px = cx + r * Math.cos(rad);
  const py = cy - r * Math.sin(rad);
  const show = frame.show ?? ['sin', 'cos'];

  const sweep = (() => {
    const end = 18;
    const ex = cx + end * Math.cos(rad);
    const ey = cy - end * Math.sin(rad);
    const large = Math.abs(deg) > 180 ? 1 : 0;
    return `M${cx + end},${cy} A${end},${end} 0 ${large} ${deg < 0 ? 1 : 0} ${ex},${ey}`;
  })();

  return (
    <Svg width={width} height={size + 12}>
      <Line x1={cx - r - 14} y1={cy} x2={cx + r + 14} y2={cy} stroke={RULE} strokeWidth={1} />
      <Line x1={cx} y1={cy - r - 14} x2={cx} y2={cy + r + 14} stroke={RULE} strokeWidth={1} />
      <Circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={1.6} />

      {show.includes('cos') && (
        <Line x1={cx} y1={cy} x2={px} y2={cy} stroke={AMBER} strokeWidth={2.4} />
      )}
      {show.includes('sin') && (
        <Line x1={px} y1={cy} x2={px} y2={py} stroke={AMBER} strokeWidth={2.4} />
      )}
      {show.includes('tan') && (
        <Line
          x1={cx + r}
          y1={cy}
          x2={cx + r}
          y2={cy - r * Math.tan(rad)}
          stroke={AMBER}
          strokeWidth={2.4}
        />
      )}

      <Line x1={cx} y1={cy} x2={px} y2={py} stroke={INK} strokeWidth={1.8} />
      <Path d={sweep} fill="none" stroke={SOFT} strokeWidth={1.3} />
      <Circle cx={px} cy={py} r={4.4} fill={INK} />

      <SvgText x={cx + 24} y={cy - 8} fontSize={11} fill={SOFT} fontFamily={SERIF}>
        {`${deg}°`}
      </SvgText>
      {/* Clamped inside the frame: at 30° the label ran off the right edge
          and lost its closing bracket. */}
      <SvgText
        x={Math.min(Math.max(px + (Math.cos(rad) >= 0 ? 8 : -8), 52), width - 6)}
        y={Math.max(py - 8, 12)}
        fontSize={11}
        fill={INK}
        fontFamily={SERIF}
        textAnchor={Math.cos(rad) >= 0 ? 'end' : 'start'}>
        (cos θ, sin θ)
      </SvgText>
    </Svg>
  );
}
