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
const SERIF = 'Georgia';

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
    case 'abs':
      return (c.a ?? 1) * Math.abs(x);
    case 'exp':
      return Math.exp((c.a ?? 1) * x);
    case 'log':
      return x > 0 ? Math.log(x) * (c.a ?? 1) : null;
    case 'sqrt':
      return x >= 0 ? Math.sqrt(x) * (c.a ?? 1) : null;
    case 'recip':
      return Math.abs(x) < 1e-6 ? null : (c.a ?? 1) / x;
    default:
      return null;
  }
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
  const height = isLine ? Math.round(width * 0.34) : Math.round(width * 0.72);

  const geom = useMemo(() => {
    const [x0, x1] = frame.x ?? (isLine ? [-5, 5] : [-Math.PI, Math.PI]);
    const [y0, y1] = frame.y ?? [-1.6, 1.6];
    const padL = 10;
    const padR = 10;
    const padT = 8;
    // A trig plot reserves a strip at the bottom for its π labels. They used
    // to sit on the x-axis at Y(0), which is exactly where the curves cross,
    // so every label landed under a line and the negative ones collided with
    // each other.
    const padB = isLine ? 20 : frame.piTicks ? 22 : 8;
    const X = (n: number) => padL + ((n - x0) / (x1 - x0)) * (width - padL - padR);
    const Y = (n: number) =>
      isLine
        ? height / 2
        : padT + (1 - (n - y0) / (y1 - y0)) * (height - padT - padB);
    return { x0, x1, y0, y1, X, Y };
  }, [frame.x, frame.y, frame.piTicks, width, height, isLine]);

  const { x0, x1, y0, y1, X, Y } = geom;

  const curvePath = (c: PlotCurve): string => {
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

      {/* Axes */}
      {!isLine && y0 <= 0 && y1 >= 0 && (
        <Line x1={X(x0)} y1={Y(0)} x2={X(x1)} y2={Y(0)} stroke={RULE} strokeWidth={1} />
      )}
      {!isLine && x0 <= 0 && x1 >= 0 && (
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
            <Circle cx={X(sg.to[0])} cy={Y(sg.to[1])} r={3.2} fill={sg.soft ? SOFT : AMBER} />
          )}
          {sg.label ? (
            <SvgText
              x={(X(sg.from[0]) + X(sg.to[0])) / 2 + 6}
              y={(Y(sg.from[1]) + Y(sg.to[1])) / 2 - 4}
              fontSize={10.5}
              fill={INK}
              fontFamily={SERIF}>
              {sg.label}
            </SvgText>
          ) : null}
        </G>
      ))}

      {/* Points */}
      {frame.points?.map((p, i) => (
        <G key={`pt${i}`}>
          <Circle
            cx={X(p.x)}
            cy={Y(p.y)}
            r={4.2}
            fill={p.open ? '#FFFFFF' : p.soft ? SOFT : INK}
            stroke={p.soft ? SOFT : INK}
            strokeWidth={1.8}
          />
          {p.label ? (
            <SvgText
              x={X(p.x) + 7}
              y={Y(p.y) - 6}
              fontSize={11}
              fill={INK}
              fontFamily={SERIF}>
              {p.label}
            </SvgText>
          ) : null}
        </G>
      ))}

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
