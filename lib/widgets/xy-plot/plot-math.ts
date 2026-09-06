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
 *
 * AREA BETWEEN TWO CURVES (v2). Derived from NCERT Class 12 Ch8 directly, not
 * read off any existing test:
 *   y = x and y = x² on [0,1]      ∫₀¹(x − x²)dx = 1/2 − 1/3   = 1/6
 *   y = a and y = u²/4a on [−2a,2a]  (the parabola y² = 4ax against its own
 *     latus rectum, drawn with the axes transposed — see the note on
 *     `areaBetween`)                                            = 8a²/3
 *   y = x and y = x² on [−1,2]     two INTERIOR crossings, 0 and 1:
 *     5/6 + 1/6 + 5/6                                           = 11/6
 *     — while |∫(x − x²)dx| over the same span is 3/2. The two differ, which
 *     is the whole reason the crossings are solved rather than ignored.
 *   y = x² and y = |x|             = 1/3, and NOT expressible as one payload:
 *     |x| is piecewise, so it takes two (each 1/6). See index.tsx's scope note.
 */

export type CurveKind = 'line' | 'parabola' | 'sine' | 'exponential' | 'reciprocal';
export type PlotMode = 'curve' | 'area' | 'area_between' | 'data';

/**
 * The curve kinds whose pairwise difference is a polynomial of degree ≤ 2,
 * i.e. the pairs whose crossings have a closed form (linear root, or the
 * quadratic formula). `area_between` accepts NOTHING ELSE — see
 * `supportsAreaBetween`, and index.tsx's `validate` which refuses the rest.
 */
export const AREA_BETWEEN_KINDS = ['line', 'parabola'] as const;

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
  /** The second curve, `area_between` mode only. Same closed set of kinds,
   *  but restricted further by `supportsAreaBetween` — the region between two
   *  curves is only exact if their crossings are. Defaults to the x-axis
   *  (`line`, a2 = c2 = 0), which makes `area_between` against it ∫|f| — the
   *  unsigned area a signed `definiteIntegral` deliberately does not give. */
  curve2: CurveKind;
  a2: number;
  b2: number;
  c2: number;
  /** Bounds of the shaded region, `area` and `area_between` modes.
   *  `shade_to` is animatable. */
  shade_from: number;
  shade_to: number;
  /** The dataset, `data` mode only. This IS the parameter — a list of
   *  observations is the subject of the diagram, not drawing coordinates. */
  values: readonly number[];
  x_label: string;
  y_label: string;
}

export interface XyPlotDerived {
  /**
   * The number on the board for the shaded region. 0 outside the two area
   * modes, and deliberately NOT the same quantity in each:
   *
   *   `area`          the SIGNED definite integral ∫f, which is negative below
   *                   the axis. That is what a Class 12 student is asked for
   *                   when the question says "evaluate the integral", and the
   *                   existing behaviour every v1 payload was authored against.
   *   `area_between`  the UNSIGNED ∫|f − g|, because "the area of the region
   *                   bounded by two curves" is an area, never negative, and
   *                   is the sum over the sub-intervals between crossings.
   *
   * One key rather than two so a caption's {{area}} means "the number the
   * readout shows" in both modes, and `derived` does not change shape at v2.
   */
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

/* ------------------------------------------- the region between two curves */

/**
 * Whether the crossings of these two kinds can be solved in CLOSED FORM.
 *
 * `line` and `parabola` only. f − g is then A x² + B x + C, whose roots are a
 * linear root or the quadratic formula. Everything else is refused rather than
 * approximated:
 *
 *   sine × anything        transcendental; the roots of a sin(bx) + c = mx + k
 *                          are not expressible, and there can be arbitrarily
 *                          many of them inside one interval.
 *   exponential × anything Lambert-W at best, and not at all in general.
 *   reciprocal × line      IS a quadratic after multiplying by x, and
 *                          reciprocal × reciprocal is linear — both are
 *                          genuinely closed-form and both are still refused
 *                          here, because neither appears in the chapter this
 *                          widget was extended for and an untested closed form
 *                          is a wrong number waiting for a payload.
 *   reciprocal × parabola  a cubic. Cardano is closed-form and is still not
 *                          worth the branch analysis for zero syllabus gain.
 *
 * Written as explicit comparisons rather than `AREA_BETWEEN_KINDS.includes` so
 * it is trivially worklet-safe (no captured array, no method call).
 */
export function supportsAreaBetween(f: CurveKind, g: CurveKind): boolean {
  'worklet';
  const okF = f === 'line' || f === 'parabola';
  const okG = g === 'line' || g === 'parabola';
  return okF && okG;
}

/** x² coefficient of a polynomial kind. NaN for the kinds that are not one. */
function polyA(kind: CurveKind, a: number, _b: number, _c: number): number {
  'worklet';
  return kind === 'parabola' ? a : kind === 'line' ? 0 : NaN;
}
function polyB(kind: CurveKind, a: number, b: number, _c: number): number {
  'worklet';
  return kind === 'parabola' ? b : kind === 'line' ? a : NaN;
}
function polyC(kind: CurveKind, _a: number, _b: number, c: number): number {
  'worklet';
  return kind === 'parabola' || kind === 'line' ? c : NaN;
}

/**
 * Where f and g cross STRICTLY INSIDE (lo, hi), sorted ascending.
 *
 * THIS IS THE WHOLE DIFFICULTY OF `area_between`. The area of the region
 * between two curves is ∫|f − g|, which equals |∫(f − g)| only when the sign
 * of f − g never changes. If they cross at an interior point the positive and
 * negative parts CANCEL inside a single integral and the widget under-reports
 * — silently, with a confident number. Example, y = x against y = x² on
 * [−1, 2]: |∫(f−g)| = 3/2, while ∫|f−g| = 11/6.
 *
 * A tangency (disc == 0) is deliberately NOT returned: f − g touches zero
 * without changing sign there, so splitting the interval at it would be
 * correct but pointless, and returning a doubled root would emit a
 * zero-width sub-region into the path.
 *
 * Endpoints are excluded (an interval boundary is already a split point) with
 * a tolerance scaled to the span, so a root at lo + 1e-16 does not produce a
 * degenerate first sub-interval.
 */
export function crossingsIn(
  kindF: CurveKind, a: number, b: number, c: number,
  kindG: CurveKind, a2: number, b2: number, c2: number,
  lo: number, hi: number
): number[] {
  'worklet';
  const roots: number[] = [];
  if (!supportsAreaBetween(kindF, kindG)) return roots;

  const A = polyA(kindF, a, b, c) - polyA(kindG, a2, b2, c2);
  const B = polyB(kindF, a, b, c) - polyB(kindG, a2, b2, c2);
  const C = polyC(kindF, a, b, c) - polyC(kindG, a2, b2, c2);
  if (!isFinite(A) || !isFinite(B) || !isFinite(C)) return roots;

  // Smallness is relative to the coefficients themselves — an absolute 1e-9 on
  // A would call a genuine parabola flat once its coefficient is small, and
  // would call a huge one curved when it is numerically indistinguishable.
  const scale = Math.max(Math.abs(A), Math.abs(B), Math.abs(C));
  const tiny = scale === 0 ? 0 : scale * 1e-14;
  const found: number[] = [];

  if (Math.abs(A) <= tiny) {
    // Degenerate to a line. Parallel (B == 0) means no crossing at all — or
    // the two curves are identical, which validate() refuses as a payload.
    if (Math.abs(B) > tiny) found.push(-C / B);
  } else {
    const disc = B * B - 4 * A * C;
    if (disc > 0) {
      // Stable form: the naive (-B ± √disc)/2A cancels catastrophically when
      // 4AC << B², exactly the near-tangent case a shaded region cares about.
      const s = Math.sqrt(disc);
      const q = -0.5 * (B + (B >= 0 ? s : -s));
      found.push(q / A);
      found.push(C / q);
    }
  }

  const span = Math.abs(hi - lo);
  const edge = Math.max(span, 1) * 1e-9;
  found.sort((p, q) => p - q);
  for (let i = 0; i < found.length; i++) {
    const r = found[i];
    if (!isFinite(r)) continue;
    if (r <= lo + edge || r >= hi - edge) continue;
    if (roots.length > 0 && Math.abs(r - roots[roots.length - 1]) <= edge) continue;
    roots.push(r);
  }
  return roots;
}

/**
 * The area of the region between f and g over [from, to] — ∫|f − g|, exactly.
 *
 * Split at every interior crossing, integrate each piece with the SAME exact
 * antiderivatives `definiteIntegral` uses, and sum the magnitudes. No
 * quadrature anywhere.
 *
 * Returns NaN, never a plausible wrong number, for a pair whose crossings have
 * no closed form. `validate()` refuses those payloads, so this is a second
 * line rather than the only one; `fmt` renders NaN as an em dash, which is the
 * correct thing for a student to see if it ever gets here.
 *
 * ON THE LATUS RECTUM. NCERT's "area bounded by y² = 4ax and its latus
 * rectum" is 8a²/3, and this widget draws it as the region between the LINE
 * y = a and the PARABOLA y = u²/4a over u ∈ [−2a, 2a] — i.e. with the picture
 * transposed, the plotted horizontal variable standing for the textbook's y.
 * That is the same integral, and it is honest, but it is a workaround for the
 * missing y-axis integration rather than a feature: the axis labels have to
 * lie about which variable is which. See index.tsx's scope note.
 */
export function areaBetween(
  kindF: CurveKind, a: number, b: number, c: number,
  kindG: CurveKind, a2: number, b2: number, c2: number,
  from: number, to: number
): number {
  if (!supportsAreaBetween(kindF, kindG)) return NaN;
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (!(hi - lo > 0)) return 0;

  const cuts = crossingsIn(kindF, a, b, c, kindG, a2, b2, c2, lo, hi);
  let total = 0;
  let s = lo;
  for (let i = 0; i <= cuts.length; i++) {
    const e = i < cuts.length ? cuts[i] : hi;
    total +=
      Math.abs(
        definiteIntegral(kindF, a, b, c, s, e) - definiteIntegral(kindG, a2, b2, c2, s, e)
      );
    s = e;
  }
  return total;
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
      : p.mode === 'area_between'
        ? areaBetween(
            p.curve, p.a, p.b, p.c,
            p.curve2, p.a2, p.b2, p.c2,
            p.shade_from, p.shade_to
          )
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

/**
 * The union of two curves' y-ranges — the vertical extent `area_between` has
 * to fit, since BOTH curves are drawn and the region between them is the
 * subject. Same contract as `curveRange`: a function of the curves and the
 * domain, and deliberately not of `shade_to`, so the axis holds still while
 * the region sweeps.
 */
export function curvePairRange(
  kindF: CurveKind, a: number, b: number, c: number,
  kindG: CurveKind, a2: number, b2: number, c2: number,
  xMin: number, xMax: number, samples: number
): { yMin: number; yMax: number } {
  const f = curveRange(kindF, a, b, c, xMin, xMax, samples);
  const g = curveRange(kindG, a2, b2, c2, xMin, xMax, samples);
  const yMin = Math.min(f.yMin, g.yMin);
  const yMax = Math.max(f.yMax, g.yMax);
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

/**
 * SVG `d` for the region between f and g, from `from` to `to`. Rebuilt on the
 * UI thread as `shade_to` sweeps.
 *
 * ONE SUB-PATH PER SUB-INTERVAL, split at the same interior crossings
 * `areaBetween` splits at — from the same call to the same function, at the
 * live value of `to`, not at the payload's final one. That is what keeps the
 * readout and the shape describing the same region at every fractional value
 * a tween passes through: if the drawing and the arithmetic disagreed about
 * where the curves cross, the number would stop being the area of the thing on
 * the board partway through the sweep.
 *
 * It also draws better. A single polygon that runs along f and back along g
 * through a crossing is a figure-eight, and which lobe fills depends on the
 * fill rule; two closed lobes cannot be ambiguous.
 *
 * Still ONE element, whatever the crossing count — the sub-paths are
 * concatenated into one `d`. An element count that changed with an animated
 * value would trip scaffoldingDiffs (test-utils.ts), correctly.
 */
export function areaBetweenPath(
  kindF: CurveKind, a: number, b: number, c: number,
  kindG: CurveKind, a2: number, b2: number, c2: number,
  from: number, to: number,
  xMin: number,
  originX: number, originY: number,
  pxPerX: number, pxPerY: number,
  samples: number
): string {
  'worklet';
  if (!supportsAreaBetween(kindF, kindG)) return '';
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (hi - lo < 1e-9) return '';

  const cuts = crossingsIn(kindF, a, b, c, kindG, a2, b2, c2, lo, hi);
  let d = '';
  let s = lo;
  for (let k = 0; k <= cuts.length; k++) {
    const e = k < cuts.length ? cuts[k] : hi;
    const width = e - s;
    if (width > 1e-12) {
      // Sample density follows sub-interval width so a sliver next to a wide
      // lobe still gets a curve rather than a chord, and the total stays ~
      // `samples` however many crossings there are.
      const n = Math.max(6, Math.round((samples * width) / (hi - lo)));
      let started = false;
      for (let i = 0; i <= n; i++) {
        const x = s + (width * i) / n;
        const y = evalCurve(kindF, a, b, c, x);
        if (!isFinite(y)) continue;
        d +=
          (started ? 'L' : 'M') +
          (originX + (x - xMin) * pxPerX).toFixed(2) + ' ' +
          (originY - y * pxPerY).toFixed(2);
        started = true;
      }
      for (let i = n; i >= 0; i--) {
        const x = s + (width * i) / n;
        const y = evalCurve(kindG, a2, b2, c2, x);
        if (!isFinite(y)) continue;
        d +=
          (started ? 'L' : 'M') +
          (originX + (x - xMin) * pxPerX).toFixed(2) + ' ' +
          (originY - y * pxPerY).toFixed(2);
        started = true;
      }
      if (started) d += 'Z';
    }
    s = e;
  }
  return d;
}
