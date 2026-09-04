/**
 * xy_plot — closed-form curve evaluation, exact definite integrals, and
 * single-variable statistics. Every geometry function is a worklet: `shade_to`
 * is animatable, so the shaded region's path is rebuilt on the UI thread while
 * it sweeps.
 *
 * WHY A CLOSED SET OF CURVES rather than a list of points. CLAUDE.md §3's rule
 * is that the model never emits coordinates — it names a thing and fills its
 * parameters. So the payload says `parabola, a=1, b=0, c=0` and this module
 * computes both the curve AND the area under it analytically. A model that
 * sent 40 sampled points would be sending an approximation of an integral it
 * cannot do; this way the number on the board is exact by construction, and
 * the same function produces the readout and the drawing.
 *
 * Reference results (exact, verified against standard integrals):
 *   parabola  a=1,b=0,c=0   ∫₀² x² dx        = 8/3 = 2.666667
 *   line      a=1,c=0       ∫₀⁴ x dx         = 8
 *   sine      a=1,b=1,c=0   ∫₀^π sin x dx    = 2
 *   reciprocal a=1,c=0      ∫₁^e (1/x) dx    = 1
 *   exponential a=1,b=1,c=0 ∫₀¹ eˣ dx        = e − 1 = 1.718282
 *
 *   dataset [2,4,4,4,5,5,7,9] (the standard textbook set)
 *     mean = 5, median = 4.5, population variance = 4, σ = 2
 */

export type CurveKind = 'line' | 'parabola' | 'sine' | 'exponential' | 'reciprocal';
export type PlotMode = 'curve' | 'area' | 'data';

export interface XyPlotParams {
  mode: PlotMode;
  /** Which closed-form curve. Ignored in `data` mode. */
  curve: CurveKind;
  /** Coefficients. Meaning depends on `curve` — see `evalCurve`. */
  a: number;
  b: number;
  c: number;
  x_min: number;
  x_max: number;
  /** Bounds of the shaded region, `area` mode only. `shade_to` is animatable. */
  shade_from: number;
  shade_to: number;
  /** The dataset, `data` mode only. This IS the parameter — a list of
   *  observations is the subject of the diagram, not drawing coordinates. */
  values: readonly number[];
  x_label: string;
  y_label: string;
}

export interface XyPlotDerived {
  /** Definite integral over the shaded interval. 0 outside `area` mode. */
  area: number;
  mean: number;
  median: number;
  variance: number;
  stdDev: number;
  /** Structurally a Record<string, number>, so `derive` can serve directly as
   *  computeDerived with no wrapper — one function, not two that can drift. */
  [key: string]: number;
}

/** y at x for the named curve. Worklet: drives the animated area path. */
export function evalCurve(kind: CurveKind, a: number, b: number, c: number, x: number): number {
  'worklet';
  switch (kind) {
    case 'line':
      return a * x + c;
    case 'parabola':
      return a * x * x + b * x + c;
    case 'sine':
      return a * Math.sin(b * x) + c;
    case 'exponential':
      return a * Math.exp(b * x) + c;
    case 'reciprocal':
      // Guarded rather than allowed to diverge: validate() keeps the domain off
      // zero, and this stops a NaN reaching the render tree if it ever slips.
      return Math.abs(x) < 1e-9 ? 0 : a / x + c;
  }
}

/** The antiderivative, evaluated at x. Exact — no numerical quadrature. */
function antiderivative(kind: CurveKind, a: number, b: number, c: number, x: number): number {
  switch (kind) {
    case 'line':
      return (a * x * x) / 2 + c * x;
    case 'parabola':
      return (a * x * x * x) / 3 + (b * x * x) / 2 + c * x;
    case 'sine':
      return Math.abs(b) < 1e-9 ? c * x : (-a * Math.cos(b * x)) / b + c * x;
    case 'exponential':
      return Math.abs(b) < 1e-9 ? (a + c) * x : (a * Math.exp(b * x)) / b + c * x;
    case 'reciprocal':
      return Math.abs(x) < 1e-9 ? c * x : a * Math.log(Math.abs(x)) + c * x;
  }
}

/** ∫ from `from` to `to`, exactly. */
export function definiteIntegral(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  from: number,
  to: number
): number {
  return antiderivative(kind, a, b, c, to) - antiderivative(kind, a, b, c, from);
}

/** Population statistics (÷N, not ÷N−1) — NCERT's convention for a full
 *  dataset, which is what these lessons always present. */
export function statistics(values: readonly number[]): {
  mean: number;
  median: number;
  variance: number;
  stdDev: number;
} {
  const n = values.length;
  if (n === 0) return { mean: 0, median: 0, variance: 0, stdDev: 0 };
  const mean = values.reduce((s, v) => s + v, 0) / n;
  const sorted = [...values].sort((p, q) => p - q);
  const mid = Math.floor(n / 2);
  const median = n % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  const variance = values.reduce((s, v) => s + (v - mean) * (v - mean), 0) / n;
  return { mean, median, variance, stdDev: Math.sqrt(variance) };
}

export function derive(p: XyPlotParams): XyPlotDerived {
  const stats = statistics(p.mode === 'data' ? p.values : []);
  const area =
    p.mode === 'area'
      ? definiteIntegral(p.curve, p.a, p.b, p.c, p.shade_from, p.shade_to)
      : 0;
  return { area, ...stats };
}

/**
 * The curve's y-range over its whole domain, sampled.
 *
 * Deliberately NOT a function of `shade_to`: that is the animatable param, and
 * an axis that rescaled while the shading swept would make the before and
 * after incomparable — which is the one thing the animation exists to show.
 * Same rule as `metresToPx` taking speed and gravity but never angle in
 * projectile-motion (CLAUDE.md §3).
 */
export function curveRange(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  xMin: number,
  xMax: number,
  samples: number
): { yMin: number; yMax: number } {
  let yMin = Infinity;
  let yMax = -Infinity;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + ((xMax - xMin) * i) / samples;
    const y = evalCurve(kind, a, b, c, x);
    if (!isFinite(y)) continue;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  }
  if (!isFinite(yMin) || !isFinite(yMax)) return { yMin: 0, yMax: 1 };
  if (Math.abs(yMax - yMin) < 1e-9) return { yMin: yMin - 1, yMax: yMax + 1 };
  return { yMin, yMax };
}

/** Nice axis step so tick labels stay round. Same table as projectile-motion. */
export function tickStep(span: number): number {
  'worklet';
  const steps = [0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 500, 1000];
  for (let i = 0; i < steps.length; i++) {
    if (span / steps[i] <= 7) return steps[i];
  }
  return 2000;
}

/** SVG `d` for the curve itself, in board pixels. Worklet-safe: string
 *  concatenation and Math only. */
export function curvePath(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  xMin: number,
  xMax: number,
  originX: number,
  originY: number,
  pxPerX: number,
  pxPerY: number,
  samples: number
): string {
  'worklet';
  let d = '';
  let started = false;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + ((xMax - xMin) * i) / samples;
    const y = evalCurve(kind, a, b, c, x);
    if (!isFinite(y)) {
      started = false;
      continue;
    }
    const px = originX + (x - xMin) * pxPerX;
    const py = originY - y * pxPerY;
    d += (started ? 'L' : 'M') + px.toFixed(2) + ' ' + py.toFixed(2);
    started = true;
  }
  return d;
}

/** SVG `d` for the shaded region between the curve and y=0, from `from` to
 *  `to`. Rebuilt on the UI thread as `shade_to` sweeps. */
export function areaPath(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  from: number,
  to: number,
  xMin: number,
  originX: number,
  originY: number,
  pxPerX: number,
  pxPerY: number,
  samples: number
): string {
  'worklet';
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (hi - lo < 1e-9) return '';
  let d = 'M' + (originX + (lo - xMin) * pxPerX).toFixed(2) + ' ' + originY.toFixed(2);
  for (let i = 0; i <= samples; i++) {
    const x = lo + ((hi - lo) * i) / samples;
    const y = evalCurve(kind, a, b, c, x);
    if (!isFinite(y)) continue;
    d += 'L' + (originX + (x - xMin) * pxPerX).toFixed(2) + ' ' + (originY - y * pxPerY).toFixed(2);
  }
  d += 'L' + (originX + (hi - xMin) * pxPerX).toFixed(2) + ' ' + originY.toFixed(2) + 'Z';
  return d;
}
