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
 *     THAT IS NO LONGER TRUE AT v3 — `pieces` expresses |x| directly, and the
 *     one-payload answer is asserted at 1/3 in __tests__/piecewise.test.ts.
 *
 * v3 ADDS FOUR THINGS TO THIS MODULE, and one to a sibling.
 *
 *   1  INTEGRATION ALONG EITHER AXIS. Every geometry function below now works
 *      in (u, v) rather than (x, y): `u` is the integration variable and `v`
 *      is the value, and a single `swap` flag decides which PIXEL axis carries
 *      which. Nothing about the arithmetic changes — ∫f du is the same number
 *      whichever way the picture is drawn — so this is entirely a projection
 *      change, which is why it costs one boolean and no new integrals.
 *      v2 drew "the area bounded by y² = 4ax and its latus rectum" transposed
 *      and let the axis labels lie about which variable was which (see the
 *      note on `areaBetween`, which is now historical). At v3 the labels tell
 *      the truth: `integrate_along: 'y'` puts u on the vertical axis, the
 *      strips run horizontally, and `x_label`/`y_label` still name the
 *      horizontal and vertical axes respectively.
 *
 *   2  PIECEWISE f. `CurvePiece[]` — (from, to, kind, coefficients) — with
 *      the crossing search run PER PIECE and the readout summing pieces.
 *      Modulus is the two-piece case and is exactly why it exists.
 *
 *   3  THE EXACT DERIVATIVE, and a tangent or normal built from it.
 *
 *   4  A FAMILY of one curve at several values of one coefficient. No new
 *      maths at all — it is `curvePath` called N times — but it is listed
 *      because the CAP on N is a maths-adjacent decision (see index.tsx).
 *
 * The fifth v3 capability, NAMED CURVES, is deliberately NOT here: see
 * ./named-curves.ts and its header for why a shape the book prints without a
 * formula is a different kind of object from everything in this file.
 *
 * v3 REFERENCE RESULTS, each derived from NCERT before being compared to any
 * output of this module:
 *
 *   |x| against x² on [−1,1]   ONE payload now: pieces [(−1,0) line a=−1],
 *     [(0,1) line a=1] against parabola a=1. 1/6 + 1/6 = 1/3.
 *   ∫₀² |x − 1| dx             pieces [(0,1) line a=−1 c=1], [(1,2) line a=1
 *     c=−1]. Each triangle is 1/2, so the total is 1 — and the SIGNED
 *     integral of the same two pieces is also 1, because both pieces are
 *     above the axis. The case that separates them is below.
 *   ∫₀² (x − 1) dx             = 0 signed, 1 unsigned. Same breakpoint, and
 *     the two numbers differ, which is what makes `area` and `area_between`
 *     genuinely different questions on a piecewise payload.
 *   d/dx (x²) at x = 3         = 6. The tangent there is y = 6x − 9, and the
 *     area between x² and that tangent on [3−h, 3+h] is 2h³/3 exactly — an
 *     identity that does NOT go through the derivative formula, so it is a
 *     real check on it rather than a restatement.
 *   y² = 4ax and x = a         8a²/3, now drawn the way the book draws it,
 *     with y vertical: `integrate_along: 'y'`, u ∈ [−2a, 2a], f(u) = a (the
 *     latus rectum) against g(u) = u²/4a (the parabola).
 */

export type CurveKind = 'line' | 'parabola' | 'sine' | 'exponential' | 'reciprocal';
export type PlotMode =
  | 'curve'
  | 'area'
  | 'area_between'
  | 'data'
  | 'family'
  | 'named';

/** Which variable is integrated along — and therefore which PIXEL axis it
 *  gets. `'x'` is the v1/v2 picture: u horizontal, vertical strips. `'y'`
 *  puts u on the vertical axis and the strips run horizontally. */
export type IntegrationAxis = 'x' | 'y';

export type TangentKind = 'none' | 'tangent' | 'normal';

/** Which coefficient a `family` payload varies. */
export type FamilyParam = 'a' | 'b' | 'c';

/**
 * One piece of a piecewise f: the kind and coefficients that apply on
 * [from, to].
 *
 * Both ends are explicit rather than only `to`. Deriving `from` from the
 * previous piece's `to` would make non-contiguity UNREPRESENTABLE and
 * therefore silently impossible to reject — and `validate()` is required to
 * reject overlapping and non-contiguous pieces, which it cannot do if the
 * payload has no way to express them. A schema that cannot say the wrong
 * thing is not the same as a validator that catches it; the model will send
 * `from` and `to` because it is thinking in intervals, and the two disagreeing
 * is exactly the mistake worth naming back to it.
 */
export interface CurvePiece {
  from: number;
  to: number;
  curve: CurveKind;
  a: number;
  b: number;
  c: number;
}

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
   *  observations is the subject of the diagram, not drawing coordinates.
   *
   *  IT IS A 1-D STATISTICS SAMPLE, NOT (x, y) POINTS. `derive` runs
   *  mean/median/variance over it and the component draws one bar per
   *  observation at integer positions. v3's named curves were NOT built on
   *  top of this key for that reason — see ./named-curves.ts. */
  values: readonly number[];
  x_label: string;
  y_label: string;

  /* ------------------------------------------------------------- v3 keys */

  /** Which variable is integrated along, and therefore which pixel axis
   *  carries it. `x_min`/`x_max` always bound the INTEGRATION variable,
   *  whichever axis it is drawn on. */
  integrate_along: IntegrationAxis;

  /**
   * A piecewise f. Empty means "f is the single `curve`/`a`/`b`/`c` above",
   * which is every v1 and v2 payload.
   *
   * ONLY f IS EVER PIECEWISE. `curve2` stays a single kind, and `validate()`
   * says so. ∫|f − g| is symmetric in f and g, so every NCERT question in
   * reach — |x| against x², a modulus against a line, a piecewise cost
   * function against the axis — can be written with the piecewise side as f.
   * Piecewise-against-piecewise would multiply the crossing search by the
   * product of the two partitions for no syllabus gain, and an untested
   * closed form is a wrong number waiting for a payload.
   */
  pieces: readonly CurvePiece[];

  /** Where the tangent or normal touches. Animatable — sliding it along the
   *  curve is the whole point of drawing one. Ignored when
   *  `tangent_kind` is `'none'`. */
  tangent_at: number;
  tangent_kind: TangentKind;

  /** `family` mode: the coefficient that varies, and the values it takes. */
  family_param: FamilyParam;
  family_values: readonly number[];

  /** `named` mode: which printed shape. '' outside that mode. */
  named_shape: string;
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
  /**
   * The slope of the drawn tangent or normal, 0 when `tangent_kind` is
   * `'none'`. NOT f′ — for a normal it is −1/f′, which is what the line on
   * the board actually has, and a caption saying "the slope" must mean the
   * slope of the line the student is looking at.
   */
  slope: number;
  /** Where that line touches the curve. `tangentY` is f(tangent_at), so a
   *  caption can say "at (2, 4)" without the author typing either number. */
  tangentX: number;
  tangentY: number;
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

/**
 * f′ at u, exactly. Worklet: the tangent is animatable, so this runs per
 * frame on the UI thread as `tangent_at` slides.
 *
 * Symbolic, not a difference quotient — a numerical derivative at a slid
 * `tangent_at` would wobble the drawn tangent by the step size, and the
 * readout would print a slope that is nearly but not exactly 6 for y = x² at
 * x = 3. `__tests__/tangent.test.ts` checks these against a central
 * difference, which is a genuinely different derivation and is allowed to be
 * approximate BECAUSE it is only the check.
 */
export function derivCurve(kind: CurveKind, a: number, b: number, c: number, x: number): number {
  'worklet';
  switch (kind) {
    case 'line':
      return a;
    case 'parabola':
      return 2 * a * x + b;
    case 'sine':
      return a * b * Math.cos(b * x);
    case 'exponential':
      return a * b * Math.exp(b * x);
    case 'reciprocal':
      return Math.abs(x) < 1e-9 ? 0 : -a / (x * x);
  }
}

/**
 * The slope of the tangent or the normal at u — the slope of the LINE DRAWN,
 * not f′.
 *
 * A normal at a stationary point is vertical and has no slope. This returns
 * Infinity there rather than a large finite number; `validate()` refuses that
 * payload (see index.tsx) so it cannot reach a board, and `fmt` renders it as
 * an em dash if it ever does.
 */
export function lineSlopeAt(
  kind: CurveKind, a: number, b: number, c: number, x: number, mode: TangentKind
): number {
  'worklet';
  if (mode === 'none') return 0;
  const m = derivCurve(kind, a, b, c, x);
  if (mode === 'tangent') return m;
  return Math.abs(m) < 1e-12 ? Infinity : -1 / m;
}

/* --------------------------------------------------------------- piecewise */

/**
 * The piece whose [from, to] contains u, or −1.
 *
 * Half-open on the left of every piece after the first, so a breakpoint
 * belongs to exactly ONE piece and `evalPieces` at a breakpoint is
 * single-valued. Which side it belongs to is arbitrary and invisible for a
 * CONTINUOUS piecewise function, which is the only kind `validate()` admits —
 * it refuses a payload whose pieces disagree at a breakpoint, so this choice
 * can never change a drawn value.
 */
export function pieceAt(pieces: readonly CurvePiece[], u: number): number {
  'worklet';
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    const lo = Math.min(p.from, p.to);
    const hi = Math.max(p.from, p.to);
    const span = Math.max(hi - lo, 1);
    const eps = span * 1e-12;
    if (u >= lo - eps && u <= hi + eps) return i;
  }
  return -1;
}

/** f(u) for a piecewise f. NaN outside every piece — the curve simply stops,
 *  and `curvePath` breaks the path there rather than inventing a value. */
export function evalPieces(pieces: readonly CurvePiece[], u: number): number {
  'worklet';
  const i = pieceAt(pieces, u);
  if (i < 0) return NaN;
  const p = pieces[i];
  return evalCurve(p.curve, p.a, p.b, p.c, u);
}

/**
 * The breakpoints of `pieces` that fall strictly inside (lo, hi), plus lo and
 * hi themselves — the cell boundaries every piecewise integral and every
 * piecewise path is built from.
 *
 * ONE function so the arithmetic and the drawing partition the interval
 * identically. Two spellings of "where do the pieces start" is the same drift
 * `planFrame` was extracted to avoid, one level down.
 */
export function pieceCells(
  pieces: readonly CurvePiece[], lo: number, hi: number
): number[] {
  'worklet';
  const out: number[] = [lo];
  const edge = Math.max(Math.abs(hi - lo), 1) * 1e-9;
  const cuts: number[] = [];
  for (let i = 0; i < pieces.length; i++) {
    cuts.push(pieces[i].from);
    cuts.push(pieces[i].to);
  }
  cuts.sort((p, q) => p - q);
  for (let i = 0; i < cuts.length; i++) {
    const t = cuts[i];
    if (t <= lo + edge || t >= hi - edge) continue;
    if (Math.abs(t - out[out.length - 1]) <= edge) continue;
    out.push(t);
  }
  out.push(hi);
  return out;
}

/**
 * ∫ f du over [from, to] for a piecewise f — SIGNED, exactly.
 *
 * The same antiderivatives `definiteIntegral` uses, one cell at a time. A
 * region of the interval covered by no piece contributes nothing, which is
 * the honest answer for a function that is not defined there; `validate()`
 * requires the pieces to tile [x_min, x_max], so that case cannot arise from
 * an accepted payload.
 */
export function definiteIntegralPieces(
  pieces: readonly CurvePiece[], from: number, to: number
): number {
  const sign = to < from ? -1 : 1;
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (!(hi - lo > 0)) return 0;
  const cells = pieceCells(pieces, lo, hi);
  let total = 0;
  for (let k = 0; k + 1 < cells.length; k++) {
    const s = cells[k];
    const e = cells[k + 1];
    const i = pieceAt(pieces, (s + e) / 2);
    if (i < 0) continue;
    const p = pieces[i];
    total += definiteIntegral(p.curve, p.a, p.b, p.c, s, e);
  }
  return sign * total;
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

/**
 * ∫|f − g| over [from, to] where f is PIECEWISE and g is a single curve —
 * exactly, and by the same rule as `areaBetween`: split, integrate, sum the
 * magnitudes.
 *
 * TWO LEVELS OF SPLIT, and both are load-bearing:
 *
 *   the PIECE boundaries, because f is a different function either side of
 *     one and the antiderivative changes;
 *   the CROSSINGS INSIDE each piece, because the sign of f − g changes there
 *     and the positive and negative parts would cancel — the v2 lesson,
 *     which does not stop being true because f gained a breakpoint. A
 *     modulus against a line crosses inside a piece routinely: |x| against
 *     y = 0.5 crosses at −0.5 and 0.5, one in each piece.
 *
 * Returns NaN for a pair whose crossings have no closed form, exactly as
 * `areaBetween` does. `validate()` refuses those payloads.
 */
export function areaBetweenPieces(
  pieces: readonly CurvePiece[],
  kindG: CurveKind, a2: number, b2: number, c2: number,
  from: number, to: number
): number {
  for (let i = 0; i < pieces.length; i++) {
    if (!supportsAreaBetween(pieces[i].curve, kindG)) return NaN;
  }
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (!(hi - lo > 0)) return 0;

  const cells = pieceCells(pieces, lo, hi);
  let total = 0;
  for (let k = 0; k + 1 < cells.length; k++) {
    const s = cells[k];
    const e = cells[k + 1];
    const i = pieceAt(pieces, (s + e) / 2);
    if (i < 0) continue;
    const p = pieces[i];
    total += areaBetween(p.curve, p.a, p.b, p.c, kindG, a2, b2, c2, s, e);
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
  const piecewise = p.pieces.length > 0;
  const area =
    p.mode === 'area'
      ? piecewise
        ? definiteIntegralPieces(p.pieces, p.shade_from, p.shade_to)
        : definiteIntegral(p.curve, p.a, p.b, p.c, p.shade_from, p.shade_to)
      : p.mode === 'area_between'
        ? piecewise
          ? areaBetweenPieces(
              p.pieces, p.curve2, p.a2, p.b2, p.c2, p.shade_from, p.shade_to
            )
          : areaBetween(
              p.curve, p.a, p.b, p.c,
              p.curve2, p.a2, p.b2, p.c2,
              p.shade_from, p.shade_to
            )
        : 0;

  /*
   * The tangent reads its coefficients from the PIECE it touches, not from
   * the top-level curve, because on a piecewise payload the top-level curve
   * is not what is drawn there. validate() refuses a tangent_at sitting on a
   * breakpoint, where the derivative is two-valued.
   */
  let slope = 0;
  let tangentY = 0;
  if (p.tangent_kind !== 'none' && p.mode !== 'data' && p.mode !== 'named') {
    const i = piecewise ? pieceAt(p.pieces, p.tangent_at) : -1;
    const k = piecewise ? (i < 0 ? null : p.pieces[i]) : { curve: p.curve, a: p.a, b: p.b, c: p.c };
    if (k) {
      slope = lineSlopeAt(k.curve, k.a, k.b, k.c, p.tangent_at, p.tangent_kind);
      tangentY = evalCurve(k.curve, k.a, k.b, k.c, p.tangent_at);
    }
  }
  return { area, ...stats, slope, tangentX: p.tangent_at, tangentY };
}

/**
 * The y-range of a piecewise f over its own pieces, sampled the same way
 * `curveRange` samples one curve — and, like it, deliberately not a function
 * of `shade_to` or `tangent_at`.
 */
export function piecesRange(
  pieces: readonly CurvePiece[], uMin: number, uMax: number, samples: number
): { yMin: number; yMax: number } {
  let yMin = Infinity;
  let yMax = -Infinity;
  for (let i = 0; i <= samples; i++) {
    const u = uMin + ((uMax - uMin) * i) / samples;
    const y = evalPieces(pieces, u);
    if (!isFinite(y)) continue;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  }
  // The breakpoints themselves, which a uniform sample can step straight over
  // and which are exactly where a piecewise extremum usually is.
  for (let i = 0; i < pieces.length; i++) {
    for (const u of [pieces[i].from, pieces[i].to]) {
      if (u < Math.min(uMin, uMax) || u > Math.max(uMin, uMax)) continue;
      const y = evalCurve(pieces[i].curve, pieces[i].a, pieces[i].b, pieces[i].c, u);
      if (!isFinite(y)) continue;
      if (y < yMin) yMin = y;
      if (y > yMax) yMax = y;
    }
  }
  if (!isFinite(yMin) || !isFinite(yMax)) return { yMin: 0, yMax: 1 };
  if (Math.abs(yMax - yMin) < 1e-9) return { yMin: yMin - 1, yMax: yMax + 1 };
  return { yMin, yMax };
}

/** One member of a `family` payload: the base coefficients with `param`
 *  replaced by `value`. Exported so the renderer and `validate()`'s frame
 *  planner build the same curves. */
export function familyMember(
  p: XyPlotParams, value: number
): { a: number; b: number; c: number } {
  const out = { a: p.a, b: p.b, c: p.c };
  out[p.family_param] = value;
  return out;
}

/** The union of every family member's range — what the axis has to hold when
 *  N curves share it. Not a function of any animatable value; `family` has
 *  none. */
export function familyRange(
  p: XyPlotParams, uMin: number, uMax: number, samples: number
): { yMin: number; yMax: number } {
  let yMin = Infinity;
  let yMax = -Infinity;
  for (const v of p.family_values) {
    const m = familyMember(p, v);
    const r = curveRange(p.curve, m.a, m.b, m.c, uMin, uMax, samples);
    if (r.yMin < yMin) yMin = r.yMin;
    if (r.yMax > yMax) yMax = r.yMax;
  }
  if (!isFinite(yMin) || !isFinite(yMax)) return { yMin: 0, yMax: 1 };
  if (Math.abs(yMax - yMin) < 1e-9) return { yMin: yMin - 1, yMax: yMax + 1 };
  return { yMin, yMax };
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


/* ------------------------------------------------------------ projection */

/**
 * ONE POINT, IN THE ONE PROJECTION EVERY PATH BELOW USES.
 *
 * Everything in this module works in (u, v): `u` is the integration variable
 * and `v` is the value. Which PIXEL axis carries which is the only thing
 * `swap` decides.
 *
 *   swap = false   u horizontal, v vertical.   The v1/v2 picture, unchanged.
 *   swap = true    u VERTICAL, v horizontal.   Strips run horizontally, so
 *                  "area by integration along the y-axis" is the same
 *                  integral drawn the way the book draws it.
 *
 * Each axis is (origin at its own MINIMUM) + (offset) x (signed scale), and
 * the sign is what lets one formula serve both orientations. When u is
 * horizontal `uOrigin` is the left edge and `uScale` is +plotW/span; when u is
 * vertical `uOrigin` is the BOTTOM edge and `uScale` is −plotH/span, because a
 * vertical u must increase upward while pixel y increases downward. `vScale`
 * is the mirror. index.tsx's `planFrame` is the one place those six numbers
 * are computed.
 *
 * WHY "origin at the minimum" AND NOT "origin at v = 0", which is the shorter
 * spelling and is what this was written as first. The two are algebraically
 * identical — `vZero − v·s` versus `vBottom + (v − vMin)·(−s)` — and they
 * differ in the last bit or two of IEEE double. Path coordinates go through
 * `toFixed(2)` and never notice; a TICK position does not, and the frozen v2
 * trees carry `y1: 30.969175627240077` where the other spelling produces
 * `...134`. Nine golden trees failed on that difference alone. So there is
 * ONE spelling, it is this one, and it is the one the ticks were frozen at.
 * The lesson generalises: a rearrangement that is exact in algebra is not
 * exact in floating point, and a byte-frozen tree is the only thing that
 * notices.
 */
function ptStr(
  u: number, v: number,
  uMin: number, uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number,
  swap: boolean
): string {
  'worklet';
  const pa = uOrigin + (u - uMin) * uScale;
  const pb = vOrigin + (v - vMin) * vScale;
  return (swap ? pb : pa).toFixed(2) + ' ' + (swap ? pa : pb).toFixed(2);
}

/** SVG `d` for the curve itself, in board pixels. Worklet-safe: string
 *  concatenation and Math only. */
export function curvePath(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  uMin: number,
  uMax: number,
  uOrigin: number,
  uScale: number,
  vMin: number,
  vOrigin: number,
  vScale: number,
  samples: number,
  swap: boolean
): string {
  'worklet';
  let d = '';
  let started = false;
  for (let i = 0; i <= samples; i++) {
    const u = uMin + ((uMax - uMin) * i) / samples;
    const v = evalCurve(kind, a, b, c, u);
    if (!isFinite(v)) {
      started = false;
      continue;
    }
    d += (started ? 'L' : 'M') + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
    started = true;
  }
  return d;
}

/**
 * SVG `d` for a PIECEWISE curve.
 *
 * Sampled per piece rather than uniformly over the whole domain, so a
 * breakpoint is always a vertex. A uniform sample steps over breakpoints and
 * rounds the corner of a modulus into a short diagonal — which is not a
 * cosmetic loss: the corner IS the thing |x| is drawn to show.
 *
 * Still ONE `d`, with a fresh `M` at each piece, so element count never
 * depends on the piece count in a way `scaffoldingDiffs` could see.
 */
export function piecesPath(
  pieces: readonly CurvePiece[],
  uMin: number,
  uOrigin: number,
  uScale: number,
  vMin: number,
  vOrigin: number,
  vScale: number,
  samples: number,
  swap: boolean
): string {
  'worklet';
  if (pieces.length === 0) return '';
  let total = 0;
  for (let i = 0; i < pieces.length; i++) total += Math.abs(pieces[i].to - pieces[i].from);
  if (!(total > 0)) return '';

  let d = '';
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    const lo = Math.min(p.from, p.to);
    const hi = Math.max(p.from, p.to);
    const width = hi - lo;
    if (!(width > 0)) continue;
    // Sample density follows piece width, so a narrow piece still gets a
    // curve rather than a chord and the total stays near `samples`.
    const n = Math.max(2, Math.round((samples * width) / total));
    let started = false;
    for (let k = 0; k <= n; k++) {
      const u = lo + (width * k) / n;
      const v = evalCurve(p.curve, p.a, p.b, p.c, u);
      if (!isFinite(v)) {
        started = false;
        continue;
      }
      d += (started ? 'L' : 'M') + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
      started = true;
    }
  }
  return d;
}

/** SVG `d` for the shaded region between the curve and v = 0, from `from` to
 *  `to`. Rebuilt on the UI thread as `shade_to` sweeps. */
export function areaPath(
  kind: CurveKind,
  a: number,
  b: number,
  c: number,
  from: number,
  to: number,
  uMin: number,
  uOrigin: number,
  uScale: number,
  vMin: number,
  vOrigin: number,
  vScale: number,
  samples: number,
  swap: boolean
): string {
  'worklet';
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (hi - lo < 1e-9) return '';
  let d = 'M' + ptStr(lo, 0, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
  for (let i = 0; i <= samples; i++) {
    const u = lo + ((hi - lo) * i) / samples;
    const v = evalCurve(kind, a, b, c, u);
    if (!isFinite(v)) continue;
    d += 'L' + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
  }
  d += 'L' + ptStr(hi, 0, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap) + 'Z';
  return d;
}

/**
 * SVG `d` for the shaded region under a PIECEWISE f, down to v = 0.
 *
 * One closed lobe per PIECE, for the same reason `areaBetweenPath` uses one
 * per sub-interval: a single polygon that runs along f through a breakpoint
 * where f crosses the axis is a figure-eight whose fill depends on the fill
 * rule. It also keeps the drawn lobes in one-to-one correspondence with the
 * cells `definiteIntegralPieces` sums, which is what makes the shape and the
 * number describe the same region at every value a tween passes through.
 */
export function areaPiecesPath(
  pieces: readonly CurvePiece[],
  from: number,
  to: number,
  uMin: number,
  uOrigin: number,
  uScale: number,
  vMin: number,
  vOrigin: number,
  vScale: number,
  samples: number,
  swap: boolean
): string {
  'worklet';
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (hi - lo < 1e-9) return '';
  const cells = pieceCells(pieces, lo, hi);
  let d = '';
  for (let k = 0; k + 1 < cells.length; k++) {
    const s = cells[k];
    const e = cells[k + 1];
    const width = e - s;
    if (!(width > 1e-12)) continue;
    const i = pieceAt(pieces, (s + e) / 2);
    if (i < 0) continue;
    const p = pieces[i];
    const n = Math.max(6, Math.round((samples * width) / (hi - lo)));
    d += 'M' + ptStr(s, 0, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
    for (let j = 0; j <= n; j++) {
      const u = s + (width * j) / n;
      const v = evalCurve(p.curve, p.a, p.b, p.c, u);
      if (!isFinite(v)) continue;
      d += 'L' + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
    }
    d += 'L' + ptStr(e, 0, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap) + 'Z';
  }
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
  uMin: number,
  uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number,
  samples: number,
  swap: boolean
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
        const u = s + (width * i) / n;
        const v = evalCurve(kindF, a, b, c, u);
        if (!isFinite(v)) continue;
        d += (started ? 'L' : 'M') + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
        started = true;
      }
      for (let i = n; i >= 0; i--) {
        const u = s + (width * i) / n;
        const v = evalCurve(kindG, a2, b2, c2, u);
        if (!isFinite(v)) continue;
        d += (started ? 'L' : 'M') + ptStr(u, v, uMin, uOrigin, uScale, vMin, vOrigin, vScale, swap);
        started = true;
      }
      if (started) d += 'Z';
    }
    s = e;
  }
  return d;
}

/**
 * SVG `d` for the region between a PIECEWISE f and a single g.
 *
 * Split twice — at the piece boundaries and at the crossings inside each
 * piece — by the same `pieceCells` + `crossingsIn` pair `areaBetweenPieces`
 * sums over, so the lobes drawn are exactly the terms added up.
 */
export function areaBetweenPiecesPath(
  pieces: readonly CurvePiece[],
  kindG: CurveKind, a2: number, b2: number, c2: number,
  from: number, to: number,
  uMin: number,
  uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number,
  samples: number,
  swap: boolean
): string {
  'worklet';
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  if (hi - lo < 1e-9) return '';
  const cells = pieceCells(pieces, lo, hi);
  let d = '';
  for (let k = 0; k + 1 < cells.length; k++) {
    const s = cells[k];
    const e = cells[k + 1];
    if (!(e - s > 1e-12)) continue;
    const i = pieceAt(pieces, (s + e) / 2);
    if (i < 0) continue;
    const p = pieces[i];
    d += areaBetweenPath(
      p.curve, p.a, p.b, p.c,
      kindG, a2, b2, c2,
      s, e,
      uMin, uOrigin, uScale, vMin, vOrigin, vScale,
      // Sample budget shared across the cells by width, so the total stays
      // near `samples` however many pieces there are.
      Math.max(6, Math.round((samples * (e - s)) / (hi - lo))),
      swap
    );
  }
  return d;
}

/**
 * SVG `d` for a straight line through (u0, v0) with slope dv/du, CLIPPED to
 * the plot box — the tangent or the normal.
 *
 * Liang–Barsky in pixel space, because the box is a pixel rectangle and the
 * two axes may be swapped. A vertical line (slope Infinity, which is what a
 * normal at a stationary point has) is handled by the same code: its pixel
 * direction is simply (0, ±1), so there is no special case and no division by
 * a slope anywhere below. That matters because the failure mode of a slope
 * formula is a line drawn nearly-but-not-quite vertical, which reads as a
 * wrong diagram rather than as an error.
 */
export function straightLinePath(
  u0: number, v0: number, slope: number,
  uMin: number,
  uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number,
  swap: boolean,
  left: number, right: number, top: number, bottom: number
): string {
  'worklet';
  const pa = uOrigin + (u0 - uMin) * uScale;
  const pb = vOrigin + (v0 - vMin) * vScale;
  const x0 = swap ? pb : pa;
  const y0 = swap ? pa : pb;

  // Direction in WORLD units, then projected. A unit step in u moves `slope`
  // in v; a vertical line is a unit step in v and none in u.
  const vertical = !isFinite(slope);
  const du = vertical ? 0 : 1;
  const dv = vertical ? 1 : slope;
  const da = du * uScale;
  const db = dv * vScale;
  const dx = swap ? db : da;
  const dy = swap ? da : db;
  if (Math.abs(dx) < 1e-12 && Math.abs(dy) < 1e-12) return '';

  let t0 = -1e9;
  let t1 = 1e9;
  const clip = (p: number, q: number): boolean => {
    if (Math.abs(p) < 1e-12) return q >= 0;
    const r = q / p;
    if (p < 0) {
      if (r > t1) return false;
      if (r > t0) t0 = r;
    } else {
      if (r < t0) return false;
      if (r < t1) t1 = r;
    }
    return true;
  };
  if (!clip(-dx, x0 - left)) return '';
  if (!clip(dx, right - x0)) return '';
  if (!clip(-dy, y0 - top)) return '';
  if (!clip(dy, bottom - y0)) return '';
  if (!(t1 > t0)) return '';

  return (
    'M' + (x0 + t0 * dx).toFixed(2) + ' ' + (y0 + t0 * dy).toFixed(2) +
    'L' + (x0 + t1 * dx).toFixed(2) + ' ' + (y0 + t1 * dy).toFixed(2)
  );
}

/** Pixel x of a (u, v) point, in the current projection. Used by the marker
 *  on the tangent point, which is a Circle and needs numbers, not a path. */
export function pointPx(
  u: number, v: number,
  uMin: number, uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number, swap: boolean
): number {
  'worklet';
  return swap ? vOrigin + (v - vMin) * vScale : uOrigin + (u - uMin) * uScale;
}

/** Pixel y of a (u, v) point, in the current projection. */
export function pointPy(
  u: number, v: number,
  uMin: number, uOrigin: number, uScale: number,
  vMin: number, vOrigin: number, vScale: number, swap: boolean
): number {
  'worklet';
  return swap ? uOrigin + (u - uMin) * uScale : vOrigin + (v - vMin) * vScale;
}
