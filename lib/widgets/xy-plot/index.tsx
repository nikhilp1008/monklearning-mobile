/**
 * xy_plot — WHAT IT COVERS OF NCERT Class 12 Ch8, "Application of Integrals",
 * after v2 added the second curve. Ten concepts; this is which of them the
 * widget can draw and which still fall through to a tier-3 SVG.
 *
 *   1  Area under a simple curve bounded by the axes   YES  (v1, `area`)
 *   2  Area bounded by a parabola and a line           YES  (`area_between`)
 *   3  Area between two intersecting curves            YES  for line/parabola
 *                                                      pairs; refused for the
 *                                                      rest, see validate()
 *   4  Area bounded by a curve and its tangent/normal  YES  for a parabola —
 *                                                      both a tangent and a
 *                                                      normal are lines
 *   5  Area of regions described by inequalities       YES  when every bound
 *                                                      is a line or parabola;
 *                                                      a circular bound is not
 *   6  Area between a function and its inverse         PART line/line pairs
 *                                                      only. The textbook case
 *                                                      is y = x² against
 *                                                      y = √x, and there is no
 *                                                      sqrt curve kind
 *   7  Regions bounded by circles and ellipses         NO — not functions of x
 *   8  Regions involving modulus / piecewise           NO — takes two payloads
 *   9  Greatest integer / fractional part              NO — piecewise, infinite
 *  10  Area by integration along the y-axis            NO, except by drawing
 *                                                      the picture transposed
 *                                                      and letting the labels
 *                                                      say so (see the note on
 *                                                      `areaBetween`)
 *
 * The four NOs are four separate pieces of geometry, not one missing feature:
 *
 *   circles/ellipses  a second CURVE KIND that is not y = f(x). x² + y² = r²
 *                     needs the region to be bounded above and below by ±√(…),
 *                     which changes the shading path from "sample f, come back
 *                     along g" to "sample an upper branch, come back along a
 *                     lower branch", and changes the area from a difference of
 *                     antiderivatives to (r²/2)(θ − sinθ) segment arithmetic.
 *                     Crossings with a line or a parabola become a quartic.
 *   piecewise/modulus a params shape this widget does not have: an ARRAY of
 *                     (breakpoint, curve, coefficients), with the crossing
 *                     search running per piece and the readout summing pieces.
 *                     `validate()` would have to reject overlapping or
 *                     non-contiguous pieces.
 *   greatest integer  piecewise with an unbounded number of pieces over a
 *                     domain, so it also needs a piece CAP tied to what the
 *                     board can show.
 *   y-axis integration  a transpose flag on the frame — swap which variable
 *                     the pixel axes carry, and swap the tick/label roles with
 *                     it. The maths is unchanged; the layout, the padding
 *                     rules and every label anchor are not.
 */
import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  DOT_R, EMPHASIS_STROKE, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE,
  READOUT_BAND, READOUT_SIZE, maxChars, textWidth,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  AREA_BETWEEN_KINDS,
  areaBetweenPath,
  areaPath,
  curvePairRange,
  curvePath,
  curveRange,
  derive,
  statistics,
  supportsAreaBetween,
  tickStep,
  type CurveKind,
  type PlotMode,
  type XyPlotDerived,
  type XyPlotParams,
} from './plot-math';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * Chrome constants — device points, NEVER a function of width/height.
 * docs/small-screen-rendering-rules.md. Chosen to sit clear of the render
 * harness's 11px / 1.2 floors rather than on them.
 */
const TICK_LABEL_SIZE = LABEL_SIZE;
const AXIS_TITLE_SIZE = LABEL_SIZE;
const GRIDLINE_STROKE = HAIRLINE_STROKE;
const AXIS_STROKE = LINE_STROKE;
const CURVE_STROKE = EMPHASIS_STROKE;
const MARKER_STROKE = LINE_STROKE;
const SAMPLES = 96;

/**
 * Left padding is a CONTAINER SIZED FROM THE CHROME IT HOLDS, not a fraction
 * of the frame — the rule docs/small-screen-rendering-rules.md added after
 * projectile-motion's PAD.bottom shipped the opposite mistake. What sits in
 * it is a y-tick label (fixed TICK_LABEL_SIZE, right-anchored) plus its gap,
 * so it is measured in the same units the label is.
 */
const PAD_LEFT = TICK_LABEL_SIZE * 3.2 + 8;
const PAD_RIGHT = 14;
/** Holds the readout line, which is fixed-size text. */
const PAD_TOP = READOUT_BAND;
/** Holds an x-tick label, then the axis title, both fixed-size, plus descender. */
const PAD_BOTTOM = TICK_LABEL_SIZE * 3.1 + 6;

const CURVES: CurveKind[] = ['line', 'parabola', 'sine', 'exponential', 'reciprocal'];
const MODES: PlotMode[] = ['curve', 'area', 'area_between', 'data'];

/** Gap between a y-tick label's right edge and the y axis. */
const Y_TICK_GAP = 6;

/**
 * The board `validate()` measures label fit against: the SMALLEST box this
 * runtime renders at (docs/small-screen-rendering-rules.md's own reference
 * number, and the smaller of the two boards verify-tree-dir.mjs checks).
 *
 * It is the binding case for every text constraint here and that is provable
 * rather than assumed: the y-tick gutter is PAD_LEFT, a chrome constant, so
 * that bound is identical at every board size; x-tick spacing and the
 * right-edge overhang are both proportional to plotW, so they are tightest
 * where plotW is smallest. Checking one board is therefore checking all three.
 */
const GATE_BOARD = { width: 343, height: 236 };

/**
 * Everything the diagram's SCAFFOLDING is made of — the plot box, the two
 * scales, the tick values — as a pure function of `params` and the board box.
 *
 * Lifted out of the component's `useMemo` verbatim at v2 so that `validate()`
 * can plan the SAME frame the renderer will draw and measure the resulting
 * labels against the smallest board. Two implementations of "where do the
 * ticks go" is exactly the drift that lets validate() admit a payload the gate
 * rejects (CLAUDE.md §3, the schema-subset rule); there is one.
 *
 * Reads no animatable value. `shade_to` must not appear anywhere below.
 */
function planFrame(params: XyPlotParams, width: number, height: number) {

  const left = PAD_LEFT;
  const right = width - PAD_RIGHT;
  const top = PAD_TOP;
  const bottom = height - PAD_BOTTOM;
  const plotW = Math.max(1, right - left);
  const plotH = Math.max(1, bottom - top);

  const isData = params.mode === 'data';
  const stats = statistics(params.values);

  let xMin: number, xMax: number, yMin: number, yMax: number;
  if (isData) {
    xMin = 0;
    xMax = Math.max(1, params.values.length + 1);
    const lo = Math.min(...params.values, 0);
    const hi = Math.max(...params.values, 1);
    const padY = (hi - lo) * 0.15 || 1;
    yMin = lo - padY;
    yMax = hi + padY;
  } else {
    xMin = params.x_min;
    xMax = params.x_max;
    // Both curves are drawn in `area_between` and the region between them is
    // the subject, so the vertical extent is their UNION — f's range alone
    // would push g off the board whenever g is the taller of the two.
    const r =
      params.mode === 'area_between'
        ? curvePairRange(
            params.curve, params.a, params.b, params.c,
            params.curve2, params.a2, params.b2, params.c2,
            xMin, xMax, SAMPLES
          )
        : curveRange(params.curve, params.a, params.b, params.c, xMin, xMax, SAMPLES);
    const padY = (r.yMax - r.yMin) * 0.12;
    yMin = r.yMin - padY;
    yMax = r.yMax + padY;
  }
  // Always show the x-axis when it is nearly in range, so "area under the
  // curve" has a visible floor to sit on.
  if (yMin > 0 && yMin < (yMax - yMin) * 0.5) yMin = 0;
  if (yMax < 0 && -yMax < (yMax - yMin) * 0.5) yMax = 0;

  const pxPerX = plotW / (xMax - xMin);
  const pxPerY = plotH / (yMax - yMin);
  const originX = left;
  // Pixel y of the value 0 — where the x-axis is drawn, clamped into the box
  // so a curve entirely above or below zero still gets a baseline.
  const zeroY = Math.min(bottom, Math.max(top, bottom - (0 - yMin) * pxPerY));

  const xStep = tickStep(xMax - xMin);
  const yStep = tickStep(yMax - yMin);
  const xTicks: number[] = [];
  for (let t = Math.ceil(xMin / xStep) * xStep; t <= xMax + 1e-9; t += xStep) xTicks.push(t);
  const yTicks: number[] = [];
  for (let t = Math.ceil(yMin / yStep) * yStep; t <= yMax + 1e-9; t += yStep) yTicks.push(t);

  return {
    left, right, top, bottom, plotW, plotH,
    xMin, xMax, yMin, yMax, pxPerX, pxPerY, originX, zeroY,
    xTicks, yTicks, isData, stats,
  };
}

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

/**
 * Label-fit problems this payload would have on the SMALLEST board.
 *
 * The schema's legal range must be a SUBSET of what renders correctly
 * (CLAUDE.md §3), and for a plot the thing that leaves the board first is not
 * the curve — the curve is fitted to the box by construction — it is a TICK
 * LABEL. A y label is right-anchored into a fixed 46.4pt gutter, so a wide
 * enough number hangs off the left edge; x labels are centred on their ticks,
 * so wide ones overrun the right edge and collide with each other.
 *
 * Measured with `textWidth`, which is deliberately the same width model
 * scripts/verify-render.mjs uses (chrome.ts says why). This function exists so
 * that "validate() accepted it" implies "the gate will pass it", instead of
 * the two disagreeing until some lesson generates the payload that separates
 * them.
 *
 * WHAT THIS CLOSES, and it is not hypothetical: v1 accepted a = 100 with
 * x ∈ [0, 1000], i.e. y up to 1e8, whose y-tick labels are nine characters
 * (62.6pt) in a 40.4pt gutter — an out-of-bounds hard error at every board
 * size. No sweep had ever put xy_plot's corners through the gate.
 */
function labelFitProblems(p: XyPlotParams): string[] {
  const f = planFrame(p, GATE_BOARD.width, GATE_BOARD.height);
  const out: string[] = [];
  const board = `${GATE_BOARD.width}x${GATE_BOARD.height}`;

  // Fewer than two gridlines on an axis is projectile_motion's tickStep defect
  // in another widget: the payload draws, and reads as a blank box.
  if (f.xTicks.length < 2) {
    out.push(`x ${p.x_min}..${p.x_max} spans fewer than two gridlines — the plot would have no readable x scale`);
  }
  if (f.yTicks.length < 2) {
    out.push('the curve is too flat for two gridlines — its y-range would have no readable scale');
  }

  for (const t of f.yTicks) {
    const label = fmt(t);
    const x0 = f.left - Y_TICK_GAP - textWidth(label, TICK_LABEL_SIZE);
    if (x0 < -1) {
      out.push(
        `y-axis label "${label}" needs ${(f.left - Y_TICK_GAP - x0).toFixed(1)}pt but the gutter holds ${(f.left - Y_TICK_GAP).toFixed(1)}pt — it would hang off the left edge at ${board}`
      );
      break;
    }
  }

  /**
   * A readout that carries a number must FIT, not be trimmed to fit. Trimming
   * "mean 5   median -99999.99   sd 12345.6" to the board would leave a
   * truncated number that reads as a real one. `curve` mode is exempt on
   * purpose: its readout is two axis labels and nothing else, so shortening it
   * loses words, not digits.
   */
  if (p.mode !== 'curve') {
    const readout = readoutFor(p, derive(p));
    const room = GATE_BOARD.width - PAD_LEFT - PAD_RIGHT;
    const need = textWidth(readout, READOUT_SIZE);
    if (need > room) {
      out.push(
        `the readout "${readout}" needs ${need.toFixed(1)}pt and the board has ${room.toFixed(1)}pt at ${board} — its numbers are too wide to show without truncating one`
      );
    }
  }

  let prevRight = -Infinity;
  for (const t of f.xTicks) {
    const label = fmt(t);
    const w = textWidth(label, TICK_LABEL_SIZE);
    const px = f.originX + (t - f.xMin) * f.pxPerX;
    if (px + w / 2 > GATE_BOARD.width + 1) {
      out.push(`x-axis label "${label}" would run off the right edge at ${board}`);
      break;
    }
    if (px - w / 2 < prevRight) {
      out.push(`x-axis labels are too wide for their spacing at ${board} — "${label}" collides with the tick before it`);
      break;
    }
    prevRight = px + w / 2;
  }

  return out;
}

function validate(raw: unknown): ValidationResult<XyPlotParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const mode = r.mode;
  const curve = r.curve ?? 'parabola';
  /**
   * The second curve defaults to y = 0, the x axis. That makes a payload that
   * names `area_between` and forgets `curve2` mean ∫|f| — the UNSIGNED area
   * under f — which is a real and useful diagram rather than an error, and is
   * the one thing `mode: 'area'` cannot express.
   */
  const curve2 = r.curve2 ?? 'line';
  if (typeof mode !== 'string' || !(MODES as string[]).includes(mode)) {
    errors.push(`mode must be one of ${MODES.join(', ')}`);
  }
  if (typeof curve !== 'string' || !(CURVES as string[]).includes(curve)) {
    errors.push(`curve must be one of ${CURVES.join(', ')}`);
  }
  if (typeof curve2 !== 'string' || !(CURVES as string[]).includes(curve2)) {
    errors.push(`curve2 must be one of ${CURVES.join(', ')}`);
  }
  for (const k of ['a', 'b', 'c', 'a2', 'b2', 'c2'] as const) {
    if (r[k] !== undefined && !finite(r[k])) errors.push(`${k} must be a finite number`);
  }
  const a = finite(r.a) ? r.a : 1;
  const b = finite(r.b) ? r.b : 0;
  const c = finite(r.c) ? r.c : 0;
  const a2 = finite(r.a2) ? r.a2 : 0;
  const b2 = finite(r.b2) ? r.b2 : 0;
  const c2 = finite(r.c2) ? r.c2 : 0;

  const values = r.values ?? [];
  if (!Array.isArray(values) || values.some((v) => !finite(v))) {
    errors.push('values must be an array of finite numbers');
  }
  if (mode === 'data' && Array.isArray(values) && values.length < 2) {
    errors.push('data mode needs at least 2 values');
  }

  let xMin = finite(r.x_min) ? r.x_min : 0;
  let xMax = finite(r.x_max) ? r.x_max : 5;
  if (!(xMax > xMin)) errors.push('x_max must be greater than x_min');

  // A reciprocal through zero is not a rendering problem to clamp away, it is
  // a different diagram. Rejected rather than silently shifted.
  for (const [k, kind] of [['curve', curve], ['curve2', mode === 'area_between' ? curve2 : 'line']] as const) {
    if (kind === 'reciprocal' && xMin <= 0 && xMax >= 0) {
      errors.push(`${k} is a reciprocal and cannot span x = 0; keep the domain on one side of it`);
    }
  }

  /**
   * THE REFUSAL THAT MATTERS. `area_between` reports ∫|f − g|, which is the
   * sum of |∫(f − g)| over the sub-intervals between the curves' CROSSINGS —
   * so the widget can only be exact for pairs whose crossings it can solve in
   * closed form, i.e. line/parabola pairs (plot-math's `supportsAreaBetween`
   * has the full reasoning). For a sine or an exponential there is no such
   * solution, and the honest options are to refuse or to quietly report
   * |∫(f − g)|, which under-reports whenever the curves cross inside the
   * interval. A confidently wrong area on a student's board is worse than a
   * diagram that declines, so: refuse. Narrowing the schema, never widening
   * the gate.
   */
  if (mode === 'area_between' && !supportsAreaBetween(curve as CurveKind, curve2 as CurveKind)) {
    errors.push(
      `area_between needs both curves to be one of ${AREA_BETWEEN_KINDS.join(', ')}; the crossings of ${String(curve)} and ${String(curve2)} have no closed form, and the area between them cannot be computed exactly`
    );
  }
  if (errors.length > 0) return { ok: false, errors };

  xMin = clamp(xMin, -1000, 1000);
  xMax = clamp(xMax, -1000, 1000);
  const sFrom = clamp(finite(r.shade_from) ? r.shade_from : xMin, xMin, xMax);
  const sTo = clamp(finite(r.shade_to) ? r.shade_to : xMax, xMin, xMax);

  const params: XyPlotParams = {
    mode: mode as PlotMode,
    curve: curve as CurveKind,
    // Bounded so a runaway coefficient cannot produce a curve that is a
    // vertical line on every board — the readable range, not the safe one.
    // The BINDING bound is not this one, though: it is labelFitProblems below,
    // which rejects the (coefficient, domain) combinations whose tick labels
    // do not fit. A cap on a single coefficient cannot express that, because
    // the y-range that overflows the gutter needs a coefficient AND a domain
    // together — the corner, not the endpoint.
    a: clamp(a, -100, 100),
    b: clamp(b, -100, 100),
    c: clamp(c, -100, 100),
    curve2: curve2 as CurveKind,
    a2: clamp(a2, -100, 100),
    b2: clamp(b2, -100, 100),
    c2: clamp(c2, -100, 100),
    x_min: xMin,
    x_max: xMax,
    shade_from: sFrom,
    shade_to: sTo,
    // Capped so the dot plot stays a plot rather than a smear; a dataset
    // longer than this is a data_table_trend, not an xy_plot.
    values: (values as number[]).slice(0, 60),
    x_label: typeof r.x_label === 'string' ? r.x_label.slice(0, 40) : 'x',
    y_label: typeof r.y_label === 'string' ? r.y_label.slice(0, 40) : 'y',
  };

  if (params.mode === 'area_between') {
    /*
     * A ZERO-WIDTH SHADED INTERVAL IS NOT AN ERROR, and it took reading
     * use-cue-track.ts to see why. Cue patches are validated too — the hook
     * merges the patch into the params and runs THIS FUNCTION over the result,
     * dropping the whole cue if it fails. So every rule added here constrains
     * the ANIMATION STATES a narration can pass through, not just the payloads
     * an author writes. "shade_from == shade_to" is exactly the state a
     * sweep-from-nothing cue starts at, and rejecting it would have made the
     * most natural cue for this widget impossible while looking like a
     * tightened schema. It renders as the two curves with no region between
     * them, which is a correct picture of an empty interval.
     *
     * Two IDENTICAL CURVES are a different matter and are refused: the board
     * would show a single line under a readout of 0, no tween passes through
     * that state, and no question in the chapter asks for it.
     */
    const sameKind =
      (params.curve === 'line' ? 0 : params.a) === (params.curve2 === 'line' ? 0 : params.a2) &&
      (params.curve === 'line' ? params.a : params.b) === (params.curve2 === 'line' ? params.a2 : params.b2) &&
      params.c === params.c2;
    if (sameKind) {
      errors.push('area_between needs two different curves — these two are the same curve, so the region between them is empty');
    }
  }

  errors.push(...labelFitProblems(params));
  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, params };
}

/* ----------------------------------------------------------------- component */

function fmt(v: number): string {
  if (!isFinite(v)) return '—';
  const r = Math.round(v * 100) / 100;
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
}

/**
 * The single line along the top of the board.
 *
 * One function, called by the component AND by `labelFitProblems`, so the
 * string validate() measures is the string the widget draws. Two spellings of
 * a readout is the same drift the frame extraction exists to avoid.
 */
function readoutFor(p: XyPlotParams, d: XyPlotDerived): string {
  if (p.mode === 'area' || p.mode === 'area_between') return `area ${fmt(d.area)}`;
  if (p.mode === 'data') {
    return `mean ${fmt(d.mean)}   median ${fmt(d.median)}   sd ${fmt(d.stdDev)}`;
  }
  return `${p.y_label} vs ${p.x_label}`;
}

function XyPlot({ params, motion, width, height, theme }: WidgetRenderProps<XyPlotParams>) {
  const shadeSv = motion.shade_to;

  /*
   * Static scaffolding: axes, gridlines, ticks. Computed from `params` only,
   * and specifically NOT from `shade_to` — the axis must hold still while the
   * shaded region sweeps, or the two states cannot be compared.
   */
  const frame = useMemo(() => planFrame(params, width, height), [params, width, height]);

  const d = useMemo(() => derive(params), [params]);

  const toPx = (x: number) => frame.originX + (x - frame.xMin) * frame.pxPerX;
  const toPy = (y: number) => frame.bottom - (y - frame.yMin) * frame.pxPerY;

  const staticCurve = useMemo(
    () =>
      frame.isData
        ? ''
        : curvePath(
            params.curve, params.a, params.b, params.c,
            frame.xMin, frame.xMax,
            frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
            frame.pxPerX, frame.pxPerY, SAMPLES
          ),
    [params, frame]
  );

  /** The second curve. Static, params-only, drawn dashed in ink so it cannot
   *  be mistaken for the accent-coloured f or for an axis. */
  const staticCurve2 = useMemo(
    () =>
      params.mode === 'area_between'
        ? curvePath(
            params.curve2, params.a2, params.b2, params.c2,
            frame.xMin, frame.xMax,
            frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
            frame.pxPerX, frame.pxPerY, SAMPLES
          )
        : '',
    [params, frame]
  );

  const shadeProps = useAnimatedProps(() => ({
    d:
      params.mode === 'area'
        ? areaPath(
            params.curve, params.a, params.b, params.c,
            params.shade_from, shadeSv.value,
            frame.xMin,
            frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
            frame.pxPerX, frame.pxPerY, SAMPLES
          )
        : params.mode === 'area_between'
          ? // The live `shadeSv.value`, not `params.shade_to` — and the
            // crossings are re-solved for THIS interval on every frame, which
            // is what makes the drawn region and the readout's arithmetic the
            // same region at every fractional value the tween passes through.
            areaBetweenPath(
              params.curve, params.a, params.b, params.c,
              params.curve2, params.a2, params.b2, params.c2,
              params.shade_from, shadeSv.value,
              frame.xMin,
              frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
              frame.pxPerX, frame.pxPerY, SAMPLES
            )
          : '',
  }));

  const isArea = params.mode === 'area' || params.mode === 'area_between';

  /*
   * Two strings that are laid out to the BOX, not written blind.
   *
   * `maxChars` takes the real string because the width model is script-aware
   * (chrome.ts: Devanagari is measured at 0.75, Latin at 0.58) — the defect
   * two verifiers found from opposite directions. Both of these are no-ops for
   * a short label; what they stop is the long one. `x_label` and `y_label` are
   * each 40 characters of legal payload, so a `curve`-mode readout can be 84
   * characters: 682pt of Latin at 14pt, or 882pt of "क्षेत्रफल", on a 343pt
   * board. The v1 schema admitted that and nobody had swept for it.
   *
   * TRUNCATION IS ONLY EVER ALLOWED TO EAT A LABEL. A readout carrying a
   * NUMBER — every mode except `curve` — is refused by validate() when it does
   * not fit, because "median -99999.9" is not a shorter answer, it is a wrong
   * one. This slice is the backstop under that rule, not the rule.
   */
  const rawTitle = params.x_label.toUpperCase();
  const axisTitle = rawTitle.slice(
    0, maxChars(frame.right - frame.left, AXIS_TITLE_SIZE, rawTitle)
  );
  const rawReadout = readoutFor(params, d);
  const readout = rawReadout.slice(
    0, maxChars(width - PAD_LEFT - PAD_RIGHT, READOUT_SIZE, rawReadout)
  );

  return (
    <Svg width={width} height={height}>
      {/* Gridlines and ticks — scaffolding, params-only. */}
      <G>
        {frame.xTicks.map((t) => (
          <G key={`x${t}`}>
            <Line
              x1={toPx(t)} y1={frame.top} x2={toPx(t)} y2={frame.bottom}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={toPx(t)} y={frame.bottom + TICK_LABEL_SIZE * 1.35}
              fill={theme.inkMuted} fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor="middle"
            >
              {fmt(t)}
            </SvgText>
          </G>
        ))}
        {frame.yTicks.map((t) => (
          <G key={`y${t}`}>
            <Line
              x1={frame.left} y1={toPy(t)} x2={frame.right} y2={toPy(t)}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={frame.left - 6} y={toPy(t) + TICK_LABEL_SIZE * 0.35}
              fill={theme.inkMuted} fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor="end"
            >
              {fmt(t)}
            </SvgText>
          </G>
        ))}
      </G>

      {/* The shaded region sweeps; everything above holds still. */}
      {isArea && (
        <AnimatedPath animatedProps={shadeProps} fill={theme.accent} fillOpacity={0.16} />
      )}

      {params.mode === 'area_between' && (
        <Path
          d={staticCurve2} fill="none" stroke={theme.ink}
          strokeWidth={CURVE_STROKE} strokeDasharray="7 5"
          strokeLinecap="round" strokeLinejoin="round"
        />
      )}

      {!frame.isData && (
        <Path
          d={staticCurve} fill="none" stroke={theme.accent}
          strokeWidth={CURVE_STROKE} strokeLinecap="round" strokeLinejoin="round"
        />
      )}

      {/* Data mode: one bar + dot per observation, with mean and median rules. */}
      {frame.isData &&
        params.values.map((v, i) => (
          <G key={`v${i}`}>
            <Line
              x1={toPx(i + 1)} y1={toPy(0)} x2={toPx(i + 1)} y2={toPy(v)}
              stroke={theme.accent} strokeWidth={MARKER_STROKE}
            />
            <Circle cx={toPx(i + 1)} cy={toPy(v)} r={DOT_R} fill={theme.accent} />
          </G>
        ))}
      {frame.isData && (
        <G>
          <Line
            x1={frame.left} y1={toPy(frame.stats.mean)} x2={frame.right} y2={toPy(frame.stats.mean)}
            stroke={theme.ink} strokeWidth={MARKER_STROKE} strokeDasharray="6 4"
          />
          <SvgText
            x={frame.right - 4} y={toPy(frame.stats.mean) - 5}
            fill={theme.ink} fontSize={TICK_LABEL_SIZE}
            fontFamily={theme.monoFontFamily} textAnchor="end"
          >
            {`mean ${fmt(frame.stats.mean)}`}
          </SvgText>
        </G>
      )}

      {/* Axes last, over the fill, so the baseline reads as the boundary. */}
      <Line
        x1={frame.left} y1={frame.zeroY} x2={frame.right} y2={frame.zeroY}
        stroke={theme.ink} strokeWidth={AXIS_STROKE}
      />
      <Line
        x1={frame.left} y1={frame.top} x2={frame.left} y2={frame.bottom}
        stroke={theme.ink} strokeWidth={AXIS_STROKE}
      />

      <SvgText
        x={frame.right} y={frame.bottom + TICK_LABEL_SIZE * 3.0}
        fill={theme.inkMuted} fontSize={AXIS_TITLE_SIZE}
        fontFamily={theme.monoFontFamily} textAnchor="end"
      >
        {axisTitle}
      </SvgText>

      <SvgText
        x={frame.left} y={PAD_TOP - READOUT_SIZE * 0.5}
        fill={theme.ink} fontSize={READOUT_SIZE} fontFamily={theme.monoFontFamily}
      >
        {readout}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const xyPlot: WidgetModule<XyPlotParams> = {
  id: 'xy_plot',
  /**
   * v2 — the second curve and `area_between`.
   *
   * The params SHAPE changed (four new keys, `curve2`/`a2`/`b2`/`c2`, and a
   * fourth `mode`), so the version moves. `lookup(id, version)` only refuses a
   * payload whose version is GREATER than the module's, so every v1 payload
   * still resolves against this module and renders identically — the four new
   * keys default to the x axis and are read by nothing outside
   * `area_between`. What the bump actually buys is the other direction: a v2
   * payload sent to a client still on v1 is refused rather than rendered with
   * `curve2` silently dropped, which would draw the wrong region under a
   * confident number.
   *
   * `defaults` is unchanged apart from those four keys; the frozen v1 trees in
   * __golden__/ are asserted against a fresh render at every run.
   */
  version: 2,
  defaults: {
    mode: 'area',
    curve: 'parabola',
    a: 1, b: 0, c: 0,
    // y = 0, the x axis — see validate()'s note on why that is the default
    // second curve rather than an error.
    curve2: 'line',
    a2: 0, b2: 0, c2: 0,
    x_min: 0, x_max: 3,
    shade_from: 0, shade_to: 2,
    values: [],
    x_label: 'x',
    y_label: 'y',
  },
  // Only `shade_to`, still — one animatable param covers both area modes,
  // because a region between two curves sweeps by the same right-hand edge a
  // region under one curve does. The second curve's coefficients are no more
  // animatable than the first's, for the same reason: they change the y-range,
  // and an axis that rescales mid-tween makes the before and after
  // incomparable.
  //
  // Only `shade_to`. It sweeps a region continuously, which is a real
  // animation of a real quantity — the area readout and the shaded width move
  // together. The coefficients are deliberately NOT animatable: changing `a`
  // rescales the curve's own y-range, so the axis would have to move
  // mid-tween and the before/after would stop being comparable (CLAUDE.md §3,
  // the same reason projectile_motion's pxPerM ignores angle).
  animatable: ['shade_to'],
  derived: ['area', 'mean', 'median', 'variance', 'stdDev'],
  computeDerived: derive,
  derivedAliases: {
    area: ['area', 'the area', 'region', 'bigger', 'smaller', 'grows', 'shrinks'],
    mean: ['mean', 'average'],
    median: ['median', 'middle value'],
    variance: ['variance', 'spread'],
    stdDev: ['standard deviation', 'sd', 'sigma', 'scatter'],
  },
  validate,
  Component: XyPlot,
};

export type { XyPlotParams };
