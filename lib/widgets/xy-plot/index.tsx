/**
 * xy_plot — WHAT IT COVERS OF NCERT Class 12 Ch8, "Application of Integrals",
 * after v3. Ten concepts; this is which of them the widget can draw and which
 * still fall through to a tier-3 SVG.
 *
 * THE v2 HEADER CLAIMED FIVE OF THESE AND THE TRUE NUMBER WAS TWO. It was
 * written from the concept NAMES: "area bounded by a curve and its tangent"
 * was marked YES because a tangent is a line and the widget draws lines,
 * without asking who computes the tangent — nobody did, so the payload author
 * had to derive `y = 2x − 1` by hand and type it in, which is precisely the
 * hand-derived number this whole runtime exists to abolish. Below, YES means
 * the widget itself produces the geometry from the parameters a student is
 * given.
 *
 *   1  Area under a simple curve bounded by the axes   YES  (v1, `area`)
 *   2  Area bounded by a parabola and a line           YES  (`area_between`)
 *   3  Area between two intersecting curves            YES  for line/parabola
 *                                                      pairs; refused for the
 *                                                      rest, see validate()
 *   4  Area bounded by a curve and its tangent/normal  YES at v3 — the widget
 *                                                      differentiates the
 *                                                      curve itself, so the
 *                                                      payload names the POINT
 *                                                      and not the line. At v2
 *                                                      this said YES and meant
 *                                                      "you may type the line
 *                                                      in yourself"
 *   5  Area of regions described by inequalities       PART two bounds only.
 *                                                      A linear-programming
 *                                                      feasible region is the
 *                                                      intersection of three
 *                                                      or more half-planes and
 *                                                      is NOT this widget —
 *                                                      see THE BIGGEST THING
 *                                                      STILL MISSING below
 *   6  Area between a function and its inverse         PART, unchanged from v2:
 *                                                      line/line pairs only.
 *                                                      This was drafted as a
 *                                                      YES on the reasoning
 *                                                      that integrating along
 *                                                      y turns y = √x into
 *                                                      something drawable. It
 *                                                      does not: the textbook
 *                                                      case y = x² against
 *                                                      y = √x has boundaries
 *                                                      x = √y and x = y² when
 *                                                      transposed, so one
 *                                                      missing sqrt kind
 *                                                      becomes another. A
 *                                                      fixture asserting 1/3
 *                                                      is what said so — the
 *                                                      widget answered 1/6,
 *                                                      correctly, for the
 *                                                      region the payload
 *                                                      described. This entry
 *                                                      was wrong in exactly
 *                                                      the way the paragraph
 *                                                      above accuses v2 of
 *                                                      being wrong
 *   7  Regions bounded by circles and ellipses         NO — not functions of x
 *   8  Regions involving modulus / piecewise           YES at v3 (`pieces`).
 *                                                      y = x² against y = |x|
 *                                                      is ONE payload now, and
 *                                                      reports 1/3
 *   9  Greatest integer / fractional part              PART up to the piece
 *                                                      cap of 6, which is 6
 *                                                      steps of a step
 *                                                      function and not the
 *                                                      unbounded case
 *  10  Area by integration along the y-axis            YES at v3
 *                                                      (`integrate_along`),
 *                                                      with the axis labels
 *                                                      telling the truth
 *
 * So the honest count on this chapter is 2 -> 6 of 10, with 5, 6 and 9
 * partial. It was 7 until the concept-6 fixture was run.
 *
 * WHAT v3 ADDS, AND WHAT EACH ONE IS FOR. This widget was extended against a
 * corpus-wide reclassification, not against one chapter, so most of the value
 * is outside Ch8:
 *
 *   integrate_along   horizontal strips. Ch8 concept 10, and the honest fix
 *                     for v2's transposed latus-rectum picture whose axis
 *                     labels had to lie.
 *   pieces            piecewise and modulus. Ch8 concept 8, and every
 *                     `gap_piecewise_plot` / `gap_piecewise_region`.
 *   tangent_kind      a tangent or a normal at a named point, differentiated
 *                     here. `gap_curve_with_tangent`, `gap_extrema_curve`.
 *   family            one curve at several values of one coefficient.
 *                     `gap_curve_family`.
 *   named             the shapes the book PRINTS rather than defines —
 *                     stress-strain, heating, titration, diode I-V and SIX
 *                     more: TEN in total. (This said "five more" and the
 *                     commit message said nine shapes; `NAMED_SHAPE_IDS`
 *                     has ten entries, counted rather than reasoned from
 *                     the sentence.) See ./named-curves.ts, which explains
 *                     at length why this is NOT built on `data` mode.
 *
 * ONE THING `integrate_along` TURNED OUT TO COVER THAT IT WAS NOT BUILT FOR:
 * A SQUARE ROOT AGAINST A LINE. Along y, y = √x is x = y² — a parabola — and
 * y = mx + c is x = (y − c)/m, a line. So the board shows a square root
 * against a line with no sqrt curve kind involved, and the area is exact.
 * Found by counting the coverage afterwards rather than by design, and
 * asserted in __tests__/v3-math.test.ts against a quadrature of √x − x so
 * that the claim rests on the un-transposed integrand. It does NOT extend to
 * y = x² against y = √x — see concept 6 above.
 *
 * THE BIGGEST THING STILL MISSING, named so it is not rediscovered as a
 * surprise: `gap_feasible_region`, the largest single gap name in THIS
 * WIDGET'S CLUSTER at 7 concepts, plus `gap_inequality_region` at 2.
 *
 * (This said "the largest single gap name in the corpus", and counting the
 * corpus refutes it: `gap_3d_lines_planes` has 17, and `gap_energy_level`
 * and `gap_argand_diagram` are also on 7. The corpus totals this file's
 * commit message quotes DO hold exactly — 278 gap_* rows across 146 names
 * over the merged `content/concept-archetypes.csv` + `content/reclass/*.csv`
 * — so this was a superlative reached for rather than counted, in the
 * paragraph about not being surprised later.)
 *
 * A linear-programming
 * feasible region is the intersection of three or more half-planes with the
 * first quadrant — a convex POLYGON whose vertices are pairwise line
 * intersections filtered for feasibility, whose area is a shoelace sum, and
 * whose teaching payload is the CORNER POINTS rather than the area. None of
 * that is "a curve against another curve on a shaded interval": there is no
 * integration variable and no f(u). It wants an `n`-constraint region widget
 * and it should be built as one. Two constraints can be faked here with
 * `area_between` on a line pair, and three cannot, so the fake is a trap.
 *
 * The remaining NOs are still separate pieces of geometry, not one missing
 * feature:
 *
 *   circles/ellipses  a second CURVE KIND that is not y = f(x). x² + y² = r²
 *                     needs the region to be bounded above and below by ±√(…),
 *                     which changes the shading path from "sample f, come back
 *                     along g" to "sample an upper branch, come back along a
 *                     lower branch", and changes the area from a difference of
 *                     antiderivatives to (r²/2)(θ − sinθ) segment arithmetic.
 *                     Crossings with a line or a parabola become a quartic.
 *                     `integrate_along` does NOT help: a circle is not a
 *                     function of y either.
 *   greatest integer  `pieces` covers it up to 6 steps. The unbounded case
 *                     needs a piece cap tied to what the board can show,
 *                     which is what the 6 is, so this is a scope line and not
 *                     a missing mechanism.
 *   piecewise vs      only f may be piecewise. ∫|f−g| is symmetric, so every
 *   piecewise         question in reach can put the piecewise side first;
 *                     two piecewise sides would multiply the crossing search
 *                     by the product of the partitions for no syllabus gain.
 */
import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  CHAR_W, DOT_R, EMPHASIS_STROKE, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE,
  MARKER_R, READOUT_BAND, READOUT_SEP, READOUT_SIZE, fitReadout, maxChars, textWidth,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  AREA_BETWEEN_KINDS,
  areaBetweenPath,
  areaBetweenPiecesPath,
  areaPath,
  areaPiecesPath,
  curvePairRange,
  curvePath,
  curveRange,
  derive,
  evalCurve,
  familyMember,
  familyRange,
  lineSlopeAt,
  pieceAt,
  piecesPath,
  piecesRange,
  pointPx,
  pointPy,
  statistics,
  straightLinePath,
  supportsAreaBetween,
  tickStep,
  type CurveKind,
  type CurvePiece,
  type FamilyParam,
  type IntegrationAxis,
  type PlotMode,
  type TangentKind,
  type XyPlotDerived,
  type XyPlotParams,
} from './plot-math';
import { NAMED_CURVES, NAMED_SHAPE_IDS, namedRange, type NamedCurveDef } from './named-curves';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
/**
 * The same rule on the right: this container holds HALF of the last x-tick's
 * label, because that label is centred on a tick sitting at `right`.
 *
 * It was a bare 14, and 14 was wrong — not by a rounding error, by a real
 * overhang that the old width model could not see. `1.20` is four code units
 * of Menlo (`theme.monoFontFamily`, which is what tick labels are drawn in),
 * and Menlo's advance is exactly 0.60205 em, so half that label is 14.45pt at
 * TICK_LABEL_SIZE 12. The rightmost tick label really did hang 0.45pt off the
 * board on every 343-wide render, and nothing caught it: chrome's flat 0.58
 * measured the same label at 13.92pt — just inside 14 — and verify-render.mjs
 * shared the same 0.58, so both halves of the contract agreed on a number the
 * font disagrees with. Measuring the family exposed it.
 *
 * Written as the arithmetic rather than as its result, so it follows the
 * measured advance in lib/widgets/advance-widths.json instead of needing a
 * human to notice at the next family change. Four code units because that is
 * what `fmt` produces for the two-decimal ticks this widget's NCERT payloads
 * generate; a longer label is refused by `labelFitProblems`, which is the
 * schema-side half of the same bound.
 */
const PAD_RIGHT = (4 * TICK_LABEL_SIZE * CHAR_W) / 2;
/** Holds the readout line, which is fixed-size text. */
const PAD_TOP = READOUT_BAND;
/** Holds an x-tick label, then the axis title, both fixed-size, plus descender. */
const PAD_BOTTOM = TICK_LABEL_SIZE * 3.1 + 6;

const CURVES: CurveKind[] = ['line', 'parabola', 'sine', 'exponential', 'reciprocal'];
const MODES: PlotMode[] = ['curve', 'area', 'area_between', 'data', 'family', 'named'];
const AXES: IntegrationAxis[] = ['x', 'y'];
const TANGENT_KINDS: TangentKind[] = ['none', 'tangent', 'normal'];
const FAMILY_PARAMS: FamilyParam[] = ['a', 'b', 'c'];

/**
 * CAPS, WITH THE ARITHMETIC THAT SETS THEM. All measured at 343x236, the
 * binding board, where the plot box is
 *
 *   plotW = 343 − PAD_LEFT(46.4) − PAD_RIGHT(15.2) = 281.4 pt
 *   plotH = 236 − PAD_TOP(28.4) − PAD_BOTTOM(43.2) = 164.4 pt
 *
 * MAX_PIECES = 6. Six equal pieces are 47.1 pt of plotW each — comfortably
 * wider than the 12 pt a feature needs to read as a feature, and wider than
 * the 8 pt floor `labelFitProblems` enforces on the NARROWEST piece (which is
 * the binding rule when the pieces are unequal; the count cap is what stops
 * an unbounded step function). A seventh piece is still 40.4 pt and would
 * also read, so this cap is a scope line rather than a legibility cliff, and
 * it is stated as one: the greatest-integer function wants arbitrarily many
 * steps and there has to be a number.
 *
 * MAX_FAMILY = 5. The binding constraint is NOT ink — five curves at
 * EMPHASIS_STROKE 2.6 are 13 pt of a 164.4 pt box — it is the READOUT, which
 * must list every value or the picture cannot be read.
 *
 * THE WORKED EXAMPLE HERE USED TO BE THE ±100 CLAMP, AND IT WAS THE WRONG
 * ONE — measured, not argued: `a = -100, -100, -100, -100, -100` is 32 code
 * units, 32 × 14 × 0.58 = 259.8 pt against 282.6 pt of board, so it FITS and
 * `validate()` admits it. (The old note called that string 43 units and
 * 349.2 pt by measuring the caption with it; `labelFitProblems` deliberately
 * measures the VALUE ALONE — see its own comment, and `readoutValue` — so
 * the caption's width was never part of this bound.)
 *
 * The width check does bind, just not at the clamp: the widest legal VALUE is
 * five two-decimal numbers, `a = -99.99, -99.99, -99.99, -99.99, -99.99`, 42
 * units = 341.0 pt, which is refused. Five short values (`a = 0.5, 1, 2, 4,
 * 8`) are 21 units = 170.5 pt and fit. So the count cap and the width check
 * do bind in different places and both are needed — the count cap is what
 * stops a sixth value, and the width check is what stops five long ones.
 */
const MAX_PIECES = 6;
const MAX_FAMILY = 5;
/** Below this a piece is thinner than the corner it is supposed to show. */
const MIN_PIECE_PX = 8;

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
 *
 * v3 adds one class of label this reasoning does NOT cover for free: a named
 * shape's landmarks are placed at a WORLD point with a CHROME-sized offset,
 * so their spacing shrinks with the board while the glyphs do not. That is
 * also tightest at the smallest board, so the same single check still
 * suffices — but it suffices for a different reason and the two should not be
 * confused.
 */
const GATE_BOARD = { width: 343, height: 236 };

/** The named shape this payload draws, or null. */
function namedDef(params: XyPlotParams): NamedCurveDef | null {
  if (params.mode !== 'named') return null;
  return NAMED_CURVES[params.named_shape] ?? null;
}

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
 * Reads no animatable value. NEITHER `shade_to` NOR `tangent_at` may appear
 * anywhere below — `tangent_at` is animatable at v3, and an axis that
 * rescaled as the tangent slid would make the before and after incomparable,
 * which is the one thing sliding a tangent exists to show. The tangent is
 * CLIPPED to the plot box instead of being allowed to grow it, which is why
 * that costs nothing.
 *
 * (u, v) NOT (x, y). `u` is the integration variable and `v` the value;
 * `swap` decides which pixel axis carries which. The four numbers
 * `uOrigin`/`uScale`/`vOrigin`/`vScale` carry their own signs so that
 * plot-math's single projection formula serves both orientations — see
 * `ptStr` there, including why the origin sits at each axis's MINIMUM rather
 * than at v = 0. For `integrate_along: 'x'` this reproduces v2's
 * `bottom − (y − yMin)·pxPerY` bit for bit, which is what the frozen trees
 * are frozen at.
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
  const named = namedDef(params);
  const piecewise = params.pieces.length > 0;
  // A named shape is drawn as printed; it never integrates, so it is never
  // transposed either — swapping the axes of a stress-strain curve would be
  // a different and wrong figure.
  const swap = params.integrate_along === 'y' && !isData && named === null;

  let uMin: number, uMax: number, vMin: number, vMax: number;
  if (isData) {
    uMin = 0;
    uMax = Math.max(1, params.values.length + 1);
    const lo = Math.min(...params.values, 0);
    const hi = Math.max(...params.values, 1);
    const padY = (hi - lo) * 0.15 || 1;
    vMin = lo - padY;
    vMax = hi + padY;
  } else {
    let r: { yMin: number; yMax: number };
    if (named) {
      // The shape owns its own domain. A payload cannot crop a printed
      // figure — half a titration curve is not a titration curve.
      uMin = named.uMin;
      uMax = named.uMax;
      r = namedRange(named);
    } else {
      uMin = params.x_min;
      uMax = params.x_max;
      if (params.mode === 'family') {
        r = familyRange(params, uMin, uMax, SAMPLES);
      } else if (params.mode === 'area_between') {
        // Both curves are drawn and the region between them is the subject,
        // so the vertical extent is their UNION — f's range alone would push
        // g off the board whenever g is the taller of the two.
        if (piecewise) {
          const f = piecesRange(params.pieces, uMin, uMax, SAMPLES);
          const g = curveRange(params.curve2, params.a2, params.b2, params.c2, uMin, uMax, SAMPLES);
          r = { yMin: Math.min(f.yMin, g.yMin), yMax: Math.max(f.yMax, g.yMax) };
        } else {
          r = curvePairRange(
            params.curve, params.a, params.b, params.c,
            params.curve2, params.a2, params.b2, params.c2,
            uMin, uMax, SAMPLES
          );
        }
      } else if (piecewise) {
        r = piecesRange(params.pieces, uMin, uMax, SAMPLES);
      } else {
        r = curveRange(params.curve, params.a, params.b, params.c, uMin, uMax, SAMPLES);
      }
    }
    const padY = (r.yMax - r.yMin) * 0.12;
    vMin = r.yMin - padY;
    vMax = r.yMax + padY;
  }
  // Always show the v = 0 axis when it is nearly in range, so "area under the
  // curve" has a visible floor to sit on.
  if (vMin > 0 && vMin < (vMax - vMin) * 0.5) vMin = 0;
  if (vMax < 0 && -vMax < (vMax - vMin) * 0.5) vMax = 0;

  /*
   * IN `area` MODE v = 0 IS A BOUNDARY OF THE DRAWN REGION, NOT A NICETY.
   *
   * `areaPath` (and `areaPiecesPath`) close their polygon ON v = 0 — that is
   * what "the area under the curve" means — so the shaded shape reaches v = 0
   * whether or not v = 0 is inside the plotted range. The rule above only
   * pulls the axis in when it is ALREADY nearly in range, which leaves an
   * ordinary payload drawing its region off the bottom of the board:
   *
   *   { mode: 'area', curve: 'parabola', a: 1, b: 0, c: 20,
   *     x_min: 0, x_max: 3, shade_from: 0, shade_to: 3 }     area 69
   *
   * y runs 20..29, so the range never reaches zero, and the shaded path ran
   * to y = 994 on a 430pt board — `RNSVGPath out of bounds` at all three
   * boards, on a payload `validate()` admitted. The readout said `area 69`
   * over a picture showing a band running off the bottom edge: a number right
   * for a region the student cannot see, which is the failure the v3 header
   * calls out for `shade_from` and which was still live one mode away.
   * `∫₀⁶(5 + sin x)dx` and `∫₀⁴(x + 10)dx` are the same case.
   *
   * `area_between` does not need this: BOTH curves are in `curvePairRange`,
   * and the default `curve2` IS the axis, so a region bounded by v = 0 always
   * has v = 0 in range already. Only `area`, whose second boundary is
   * implicit, could lose it.
   */
  if (params.mode === 'area' && !isData && named === null) {
    if (vMin > 0) vMin = 0;
    if (vMax < 0) vMax = 0;
  }

  /*
   * A SPAN THAT IS STILL ZERO HERE MAKES EVERY COORDINATE NaN.
   *
   * `curveRange` and its siblings widen a flat range by ±1 — which is a no-op
   * in double precision once |v| exceeds 2^53, so a curve whose sampled
   * values are all one huge number comes back with yMin === yMax:
   *
   *   { mode: 'curve', curve: 'exponential', a: -100, b: -100, c: -1,
   *     x_min: -1000, x_max: -0.5, integrate_along: 'y' }
   *
   * overflows to −Infinity at every sample but the last, so ONE finite value
   * (−5.18e23) sets both ends. vSpan 0 makes vScale ±Infinity and every
   * projected coordinate 0 × Infinity = NaN — `RNSVGLine.x1 is NaN` at all
   * three boards, again on a payload `validate()` admitted. Widening
   * RELATIVE to the magnitude is what ±1 was meant to do; the tick labels are
   * then twenty digits wide and `labelFitProblems` refuses the payload, which
   * is the answer this always should have given.
   */
  if (!(vMax - vMin > 0)) {
    const w = Math.max(1, Math.abs(vMax) * 1e-9);
    vMin -= w;
    vMax += w;
  }

  // The signed scales. Non-swap reproduces v2's originX/pxPerX/originY/pxPerY
  // exactly; swap puts u on the vertical axis increasing UPWARD (hence the
  // negative uScale against a pixel y that increases downward) and v on the
  // horizontal axis increasing rightward.
  const uSpan = uMax - uMin;
  const vSpan = vMax - vMin;
  const uScale = swap ? -plotH / uSpan : plotW / uSpan;
  const uOrigin = swap ? bottom : left;
  const vScale = swap ? plotW / vSpan : -plotH / vSpan;
  const vOrigin = swap ? left : bottom;
  const vAtZero = vOrigin + (0 - vMin) * vScale;

  // Where the v = 0 line is drawn, clamped into the box so a curve entirely
  // above or below zero still gets a baseline. Vertical in swap mode.
  const zeroPx = swap
    ? Math.min(right, Math.max(left, vAtZero))
    : Math.min(bottom, Math.max(top, vAtZero));

  const uStep = tickStep(uSpan);
  const vStep = tickStep(vSpan);
  /*
   * COUNT-BOUNDED, and the bound is load-bearing rather than defensive.
   *
   * `tickStep` tops out at a hard-coded 2000 (plot-math.ts, the same table
   * and the same fallback CLAUDE.md records as a found defect in
   * projectile_motion), so a span it cannot cover in seven intervals asks
   * these loops for as many entries as the span divided by 2000. An
   * EXPONENTIAL over a wide domain reaches that immediately and with every
   * coefficient at an ordinary value:
   *
   *   { mode: 'curve', curve: 'exponential', a: 1, b: 1, c: 0,
   *     x_min: 0, x_max: 26 }        v-span 2.6e11 -> 1.3e8 ticks
   *   ... x_max: 30                  v-span 1.3e13 -> more slots than an
   *                                  Array may hold
   *
   * so `validate()` spent a second allocating and then THREW
   * `RangeError: Invalid array length` out of planFrame, breaking CLAUDE.md
   * §6's "validate() is total and never throws" — and it throws on the path
   * `use-cue-track` runs for every cue patch, not only on an authored
   * payload.
   *
   * Capping the COUNT rather than widening the step is what keeps the schema
   * narrow. A v-span this loop would overrun has a twelve-digit first tick in
   * a 40.4pt gutter, so `labelFitProblems` refuses the payload on exactly the
   * message it always would — it can now reach that check instead of dying
   * before it. Nothing the gate admits is affected: `tickStep` promises seven
   * intervals for every span whose labels fit the gutter at all, so an
   * admitted payload has at most eight ticks per axis.
   */
  const MAX_TICKS = 64;
  const uTicks: number[] = [];
  for (
    let t = Math.ceil(uMin / uStep) * uStep;
    t <= uMax + 1e-9 && uTicks.length < MAX_TICKS;
    t += uStep
  ) uTicks.push(t);
  const vTicks: number[] = [];
  for (
    let t = Math.ceil(vMin / vStep) * vStep;
    t <= vMax + 1e-9 && vTicks.length < MAX_TICKS;
    t += vStep
  ) vTicks.push(t);

  return {
    left, right, top, bottom, plotW, plotH,
    // The v1/v2 names, kept because the whole file and every reader knows
    // them, and identical to the new ones whenever swap is false.
    xMin: uMin, xMax: uMax, yMin: vMin, yMax: vMax,
    uMin, uMax, vMin, vMax,
    swap, uOrigin, uScale, vOrigin, vScale, zeroPx,
    // Ticks by ROLE, not by pixel axis. `hTicks` are the ones drawn as
    // vertical gridlines with labels underneath; `sideTicks` are the
    // horizontal gridlines with labels in the left gutter. For swap = false
    // that is uTicks then vTicks, i.e. exactly v2's xTicks then yTicks, in
    // that order — which is what keeps the frozen trees byte-identical.
    uTicks, vTicks,
    hTicks: swap ? vTicks : uTicks,
    sideTicks: swap ? uTicks : vTicks,
    isData, stats, named, piecewise,
  };
}

type Frame = ReturnType<typeof planFrame>;

/** Pixel x of a (u, v) point in this frame. */
function fx(f: Frame, u: number, v: number): number {
  return pointPx(u, v, f.uMin, f.uOrigin, f.uScale, f.vMin, f.vOrigin, f.vScale, f.swap);
}
/** Pixel y of a (u, v) point in this frame. */
function fy(f: Frame, u: number, v: number): number {
  return pointPy(u, v, f.uMin, f.uOrigin, f.uScale, f.vMin, f.vOrigin, f.vScale, f.swap);
}
/**
 * Pixel position of a TICK VALUE, whichever axis it belongs to.
 *
 * `pointPx` ignores `v` when swap is false and ignores `u` when it is true,
 * so passing the tick value as BOTH coordinates gives the right answer in
 * both orientations without a branch here. That is not a trick to be clever;
 * it is the same argument that lets one projection formula serve both, and a
 * branch here would be a second place for the two to disagree.
 */
const hTickPx = (f: Frame, t: number) => fx(f, t, t);
const sideTickPy = (f: Frame, t: number) => fy(f, t, t);

/**
 * BASELINE of a side-tick's label — its gridline, plus the 0.35em that centres
 * a cap-height glyph on that line, CLAMPED clear of the x-tick row.
 *
 * The clamp is the fix for a collision `labelFitProblems` could not see
 * because it never measured the two tick families against each other: it
 * checks side labels against the LEFT EDGE and h labels against the RIGHT
 * EDGE and against each other, and the two rows meet in the bottom-left
 * CORNER. The first h-tick is centred on `left`, so a label four characters
 * wide reaches 17pt back into the 40.4pt y-tick gutter; when the bottom-most
 * side tick lands on the plot's bottom edge the two boxes overlap by 1.8pt
 * and the gate reports `labels collide`. Reachable from the syllabus, not
 * only from a corner:
 *
 *   { mode: 'area', curve: 'reciprocal', a: 1, c: 0,
 *     x_min: 0.5, x_max: 2 }        ∫₀.₅² dx/x — `labels collide: "0.50" and
 *                                   "0"` at ALL THREE boards
 *
 * (`x_min` 0.5 makes the first h label `0.50`; y runs 0.5..2, so the v-range
 * snaps to 0 and the `0` side tick sits exactly on the bottom edge.)
 *
 * Refusing that payload is not an option — it is a Class 12 integral — and
 * moving the h row down would move every frozen golden's x labels. Clamping
 * the SIDE label instead is provably inert everywhere the boxes already
 * clear: it only bites within 0.20em of the bottom edge, i.e. only on the
 * tick that is drawn on the plot's own baseline, where 1.8pt of travel is
 * invisible against a gridline that is the axis.
 *
 * The bound in the box model verify-render.mjs uses (baseline at 0.82em,
 * height 1.15em, so a box runs baseline − 0.82em .. baseline + 0.33em): the
 * h row's baseline is `bottom + 1.35em`, so its box starts at `bottom +
 * 0.53em`, and a side label clears it when its baseline is at most
 * `bottom + 0.20em`. 0.15em is that bound with a 0.05em margin, so the two
 * never merely touch.
 */
const sideTickLabelY = (f: Frame, t: number) =>
  Math.min(sideTickPy(f, t) + TICK_LABEL_SIZE * 0.35, f.bottom + TICK_LABEL_SIZE * 0.15);

/**
 * Where a named shape's landmark marker and its label go, in pixels.
 *
 * ONE function, used by the renderer AND by `labelFitProblems`, so the boxes
 * validate() measures are the boxes the widget draws. Same reasoning as
 * `readoutFor` and `planFrame`: a second spelling of a position is a second
 * thing that can drift.
 *
 * THE LABEL'S BOX IS CLAMPED INTO THE PLOT, NOT ITS ANCHOR POINT — and the
 * difference is a real defect, not a nicety. Clamping the anchor was the
 * first version, and for a `middle`-anchored callout the box extends half its
 * width either side of the anchor, so a landmark near the left edge still
 * reached into the y-tick gutter: `heating`'s "melting, 0 C" sits at u = 209
 * of 3094.8, i.e. 19pt into a 282.6pt plot, and its 83.5pt box ran from
 * x = 23.7 straight through the right-aligned tick labels ending at x = 40.4.
 * The gate reported `labels collide: "0" and "melting, 0 C"` at BOTH small
 * boards and passed at 900x430, which is the signature of a chrome-sized
 * offset against a board-sized spacing.
 *
 * So the anchor is shifted by however much the BOX overhangs, measured with
 * chrome.ts's `textWidth` — the same width model the gate uses.
 */
function landmarkAnchors(f: Frame, def: NamedCurveDef) {
  return def.landmarks.map((m) => {
    const px = fx(f, m.u, m.v);
    const py = fy(f, m.u, m.v);
    const w = textWidth(m.label, LABEL_SIZE);
    // How far the box reaches either side of the anchor, per anchor mode.
    const leftReach = m.anchor === 'middle' ? w / 2 : m.anchor === 'end' ? w : 0;
    const rightReach = m.anchor === 'middle' ? w / 2 : m.anchor === 'end' ? 0 : w;
    const lx = Math.min(
      f.right - rightReach,
      Math.max(f.left + leftReach, px + m.dx)
    );
    const ly = Math.min(f.bottom - 2, Math.max(f.top + LABEL_SIZE, py + m.dy));
    return { px, py, lx, ly, anchor: m.anchor, label: m.label, marker: m.marker };
  });
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
  if (f.uTicks.length < 2) {
    out.push(`x ${p.x_min}..${p.x_max} spans fewer than two gridlines — the plot would have no readable x scale`);
  }
  if (f.vTicks.length < 2) {
    out.push('the curve is too flat for two gridlines — its y-range would have no readable scale');
  }

  // The gutter holds whichever ticks are drawn down the SIDE — the value
  // ticks normally, the integration-variable ticks when the axes are swapped.
  // Checking `vTicks` unconditionally would measure the wrong numbers on
  // exactly the payloads the transpose was added for.
  for (const t of f.sideTicks) {
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
   * truncated number that reads as a real one.
   *
   * WHAT IS MEASURED IS THE VALUE, NOT THE WHOLE LINE. The caption is
   * allowed to taper — `chrome.fitReadout` gives up caption characters one at
   * a time, ending in an ellipsis, and never touches a term of the value. So
   * a payload is refused only when its NUMBERS alone overrun the board, which
   * is the case where a cut produces a wrong number instead of a shorter
   * sentence. Measuring caption + value instead refused every `family`
   * payload with a realistic axis label, in English as well as Hinglish; see
   * the note on `readoutValue`.
   *
   * A mode with no value at all — `curve` and `named` — is exempt, because
   * there is nothing there a cut could falsify.
   */
  const value = readoutValue(p, derive(p));
  if (value !== '') {
    const room = GATE_BOARD.width - PAD_LEFT - PAD_RIGHT;
    const need = textWidth(value, READOUT_SIZE);
    if (need > room) {
      out.push(
        `the readout's numbers "${value}" need ${need.toFixed(1)}pt and the board has ${room.toFixed(1)}pt at ${board} — they are too wide to show without truncating one`
      );
    }
  }

  let prevRight = -Infinity;
  for (const t of f.hTicks) {
    const label = fmt(t);
    const w = textWidth(label, TICK_LABEL_SIZE);
    const px = hTickPx(f, t);
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

  /*
   * A NAMED SHAPE'S LANDMARKS, measured the same way the gate measures them.
   *
   * The shapes are fixed data, so this can only ever fail at build time — a
   * payload cannot move a landmark. That is exactly why it is worth checking
   * here rather than only in a test: it makes "validate() accepted it" imply
   * "the gate will pass it" for named shapes too, and it fails on the day
   * someone adds a tenth shape with two callouts on top of each other rather
   * than on the day a lesson selects it.
   *
   * The box model is verify-render.mjs's, reproduced through chrome.ts's
   * shared `textWidth`: width from the string, height 1.15em, baseline at
   * 0.82em from the top.
   */
  if (f.named) {
    const boxes = landmarkAnchors(f, f.named).map((m) => {
      const w = textWidth(m.label, LABEL_SIZE);
      const x0 = m.anchor === 'middle' ? m.lx - w / 2 : m.anchor === 'end' ? m.lx - w : m.lx;
      return {
        label: m.label,
        x0, x1: x0 + w,
        y0: m.ly - LABEL_SIZE * 0.82,
        y1: m.ly - LABEL_SIZE * 0.82 + LABEL_SIZE * 1.15,
      };
    });
    for (const b of boxes) {
      if (b.x0 < -1 || b.x1 > GATE_BOARD.width + 1) {
        out.push(`named shape "${p.named_shape}" puts the callout "${b.label}" off the board at ${board}`);
        break;
      }
    }
    outer: for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        if (a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1) {
          out.push(
            `named shape "${p.named_shape}" draws "${a.label}" on top of "${b.label}" at ${board}`
          );
          break outer;
        }
      }
    }
  }

  /*
   * A PIECE THINNER THAN THE CORNER IT EXISTS TO SHOW. Measured in pixels at
   * the smallest board, not in world units, because a world width means
   * nothing without the domain: 0.1 is generous on [0, 1] and invisible on
   * [0, 1000]. This is the rule the count cap does not express.
   */
  if (p.pieces.length > 0) {
    const span = Math.abs(f.uMax - f.uMin);
    const pxPer = (f.swap ? f.plotH : f.plotW) / (span || 1);
    for (const piece of p.pieces) {
      const w = Math.abs(piece.to - piece.from) * pxPer;
      if (w < MIN_PIECE_PX) {
        out.push(
          `the piece from ${piece.from} to ${piece.to} is ${w.toFixed(1)}pt wide at ${board}, under the ${MIN_PIECE_PX}pt floor — it would read as a kink in the curve rather than as a piece`
        );
        break;
      }
    }
  }

  return out;
}

/**
 * Reads and checks the `pieces` array.
 *
 * Returns the parsed pieces plus every reason it is not a legal piecewise
 * definition. Three DIFFERENT failures, all of which a model will produce and
 * all of which have to be named back to it distinctly:
 *
 *   OVERLAP        two pieces claim the same u. f would be two-valued there,
 *                  and which one is drawn would depend on array order.
 *   GAP            no piece claims some u inside the domain. The curve simply
 *                  stops, and the area silently omits that stretch — the
 *                  worst of the three, because it draws cleanly.
 *   NOT TILING     the pieces are contiguous but do not span [x_min, x_max].
 *                  Same consequence as a gap, at the ends.
 *
 * DISCONTINUITY AT A BREAKPOINT is deliberately NOT an error. A step function
 * and a piecewise cost schedule are discontinuous on purpose, and NCERT draws
 * both. What would be wrong is a piecewise definition that is AMBIGUOUS at a
 * breakpoint, which is the overlap case above, and that is refused.
 */
function readPieces(
  raw: unknown, xMin: number, xMax: number
): { pieces: CurvePiece[]; errors: string[] } {
  const errors: string[] = [];
  if (raw === undefined) return { pieces: [], errors };
  if (!Array.isArray(raw)) {
    return { pieces: [], errors: ['pieces must be an array of {from, to, curve, a, b, c}'] };
  }
  if (raw.length === 0) return { pieces: [], errors };
  if (raw.length > MAX_PIECES) {
    errors.push(
      `pieces has ${raw.length} entries and the cap is ${MAX_PIECES} — more steps than the board can show as distinct pieces`
    );
    return { pieces: [], errors };
  }

  const pieces: CurvePiece[] = [];
  for (let i = 0; i < raw.length; i++) {
    const e = raw[i];
    if (typeof e !== 'object' || e === null) {
      errors.push(`pieces[${i}] must be an object with from, to, curve, a, b, c`);
      continue;
    }
    const o = e as Record<string, unknown>;
    const kind = o.curve ?? 'line';
    if (typeof kind !== 'string' || !(CURVES as string[]).includes(kind)) {
      errors.push(`pieces[${i}].curve must be one of ${CURVES.join(', ')}`);
      continue;
    }
    if (!finite(o.from) || !finite(o.to)) {
      errors.push(`pieces[${i}] needs finite from and to`);
      continue;
    }
    if (!(o.to > o.from)) {
      errors.push(`pieces[${i}] has to (${o.to}) not greater than from (${o.from}) — a piece with no width is not a piece`);
      continue;
    }
    for (const k of ['a', 'b', 'c'] as const) {
      if (o[k] !== undefined && !finite(o[k])) errors.push(`pieces[${i}].${k} must be a finite number`);
    }
    pieces.push({
      from: o.from,
      to: o.to,
      curve: kind as CurveKind,
      a: clamp(finite(o.a) ? o.a : 1, -100, 100),
      b: clamp(finite(o.b) ? o.b : 0, -100, 100),
      c: clamp(finite(o.c) ? o.c : 0, -100, 100),
    });
  }
  if (errors.length > 0) return { pieces: [], errors };

  pieces.sort((x, y) => x.from - y.from);
  const tol = Math.max(Math.abs(xMax - xMin), 1) * 1e-9;
  for (let i = 1; i < pieces.length; i++) {
    const gap = pieces[i].from - pieces[i - 1].to;
    if (gap < -tol) {
      errors.push(
        `pieces overlap: [${pieces[i - 1].from}, ${pieces[i - 1].to}] and [${pieces[i].from}, ${pieces[i].to}] both cover u = ${pieces[i].from}, so f would be two-valued there`
      );
    } else if (gap > tol) {
      errors.push(
        `pieces are not contiguous: nothing covers ${pieces[i - 1].to} to ${pieces[i].from}, so the curve would stop and the area would silently skip that stretch`
      );
    }
  }
  if (Math.abs(pieces[0].from - xMin) > tol || Math.abs(pieces[pieces.length - 1].to - xMax) > tol) {
    errors.push(
      `pieces cover ${pieces[0].from} to ${pieces[pieces.length - 1].to} but the domain is ${xMin} to ${xMax} — they must tile it exactly`
    );
  }
  return { pieces, errors };
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

  /* ------------------------------------------------------------ v3 keys */

  const axis = r.integrate_along ?? 'x';
  if (typeof axis !== 'string' || !(AXES as string[]).includes(axis)) {
    errors.push(`integrate_along must be one of ${AXES.join(', ')}`);
  }
  const tangentKind = r.tangent_kind ?? 'none';
  if (typeof tangentKind !== 'string' || !(TANGENT_KINDS as string[]).includes(tangentKind)) {
    errors.push(`tangent_kind must be one of ${TANGENT_KINDS.join(', ')}`);
  }
  if (r.tangent_at !== undefined && !finite(r.tangent_at)) {
    errors.push('tangent_at must be a finite number');
  }
  const familyParam = r.family_param ?? 'a';
  if (typeof familyParam !== 'string' || !(FAMILY_PARAMS as string[]).includes(familyParam)) {
    errors.push(`family_param must be one of ${FAMILY_PARAMS.join(', ')}`);
  }
  const familyRaw = r.family_values ?? [];
  if (!Array.isArray(familyRaw) || familyRaw.some((v) => !finite(v))) {
    errors.push('family_values must be an array of finite numbers');
  }
  const namedShape = r.named_shape ?? '';
  if (typeof namedShape !== 'string') {
    errors.push('named_shape must be a string');
  } else if (mode === 'named' && !NAMED_SHAPE_IDS.includes(namedShape)) {
    errors.push(
      `named_shape must be one of ${NAMED_SHAPE_IDS.join(', ')} — a printed shape is selected by name, never sent as points`
    );
  }

  /*
   * A NAMED SHAPE OWNS ITS DOMAIN, AND IT HAS TO OWN IT FROM HERE RATHER THAN
   * AT THE END.
   *
   * This override was first written after the shading bounds had already been
   * checked, which meant a `named` payload carrying leftover `x_min`/`x_max`
   * or `shade_to` from whatever the model wrote last was refused for a domain
   * it does not use — `shade_to is 2, outside the plotted domain 0..50` on a
   * perfectly good titration curve. The payload's domain is not wrong; it is
   * IRRELEVANT, and a validator that refuses an irrelevant key is refusing a
   * diagram for no reason. So the shape's own domain replaces it before
   * anything downstream can measure it.
   */
  const shapeDef =
    mode === 'named' && typeof namedShape === 'string' ? NAMED_CURVES[namedShape] : undefined;

  let xMin = shapeDef ? shapeDef.uMin : finite(r.x_min) ? r.x_min : 0;
  let xMax = shapeDef ? shapeDef.uMax : finite(r.x_max) ? r.x_max : 5;
  if (!(xMax > xMin)) errors.push('x_max must be greater than x_min');

  // A reciprocal through zero is not a rendering problem to clamp away, it is
  // a different diagram. Rejected rather than silently shifted.
  for (const [k, kind] of [['curve', curve], ['curve2', mode === 'area_between' ? curve2 : 'line']] as const) {
    if (kind === 'reciprocal' && xMin <= 0 && xMax >= 0) {
      errors.push(`${k} is a reciprocal and cannot span x = 0; keep the domain on one side of it`);
    }
  }

  const parsedPieces = readPieces(r.pieces, xMin, xMax);
  errors.push(...parsedPieces.errors);
  const pieces = parsedPieces.pieces;

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
   *
   * A PIECEWISE f is held to the same line, PIECE BY PIECE — the crossings
   * are solved inside each piece, so each piece's kind has to be one of the
   * two. A payload with four polynomial pieces and one sine piece is refused
   * on the sine piece and the message says which.
   */
  if (mode === 'area_between') {
    if (pieces.length > 0) {
      for (let i = 0; i < pieces.length; i++) {
        if (!supportsAreaBetween(pieces[i].curve, curve2 as CurveKind)) {
          errors.push(
            `area_between needs every piece and curve2 to be one of ${AREA_BETWEEN_KINDS.join(', ')}; pieces[${i}] is a ${pieces[i].curve}, and its crossings with ${String(curve2)} have no closed form`
          );
          break;
        }
      }
    } else if (!supportsAreaBetween(curve as CurveKind, curve2 as CurveKind)) {
      errors.push(
        `area_between needs both curves to be one of ${AREA_BETWEEN_KINDS.join(', ')}; the crossings of ${String(curve)} and ${String(curve2)} have no closed form, and the area between them cannot be computed exactly`
      );
    }
  }

  /*
   * MODE / MODIFIER COMBINATIONS THAT ARE NOT PICTURES.
   *
   * Each of these is a payload a model will plausibly assemble by combining
   * two keys it has seen separately, and each would draw SOMETHING — which is
   * why they are refused here rather than left to render whatever falls out.
   */
  if (mode === 'family') {
    if (Array.isArray(familyRaw) && familyRaw.length < 2) {
      errors.push('family mode needs at least 2 family_values — one value is not a family, it is a curve');
    }
    if (Array.isArray(familyRaw) && familyRaw.length > MAX_FAMILY) {
      errors.push(
        `family_values has ${familyRaw.length} entries and the cap is ${MAX_FAMILY} — beyond that the curves stop being separable and the readout cannot list them`
      );
    }
    if (pieces.length > 0) {
      errors.push('family and pieces cannot be combined — a family of piecewise curves is more lines than the board can separate');
    }
  } else if (Array.isArray(familyRaw) && familyRaw.length > 0) {
    errors.push('family_values is only meaningful in family mode; the other modes draw one f');
  }
  if (mode === 'named') {
    if (pieces.length > 0) errors.push('a named shape is drawn as printed and cannot be overridden with pieces');
    if (tangentKind !== 'none') {
      errors.push(
        'a named shape carries no formula to differentiate, so it cannot take a tangent — several of these curves are qualitative and a slope read off one would be a number with no referent'
      );
    }
  }
  if (mode === 'data') {
    if (pieces.length > 0) errors.push('data mode plots a sample, not a function; pieces has no meaning there');
    if (tangentKind !== 'none') errors.push('data mode plots a sample, not a function; there is nothing to take a tangent to');
  }

  if (errors.length > 0) return { ok: false, errors };

  xMin = clamp(xMin, -1000, 1000);
  xMax = clamp(xMax, -1000, 1000);

  /*
   * THE SHADED INTERVAL MUST LIE INSIDE THE PLOTTED DOMAIN.
   *
   * v2 CLAMPED instead, which accepted `shade_from: -2` on `x_min: -1` and
   * quietly shaded from −1. The number was then right for the region drawn
   * and wrong for the region asked about, with nothing on the board saying
   * so: a student reads "area 2.67" under a picture that is not the question.
   * A silent correction of a payload is worse than a refusal, because the
   * refusal is visible to the author and the correction is visible to nobody.
   *
   * The DEFAULTS still fill in from the domain, so a payload that omits the
   * bounds means "all of it"; only an explicit out-of-range bound is refused.
   */
  const tol = Math.max(Math.abs(xMax - xMin), 1) * 1e-9;
  // A named shape shades nothing, so its bounds are collapsed to the domain
  // start and the payload's own are not consulted at all.
  let sFrom = shapeDef ? xMin : finite(r.shade_from) ? r.shade_from : xMin;
  let sTo = shapeDef ? xMin : finite(r.shade_to) ? r.shade_to : xMax;
  for (const [k, v] of (shapeDef ? [] : [['shade_from', sFrom], ['shade_to', sTo]]) as [string, number][]) {
    if (v < xMin - tol || v > xMax + tol) {
      errors.push(
        `${k} is ${v}, outside the plotted domain ${xMin}..${xMax} — a region cannot be shaded where the curve is not drawn`
      );
    }
  }
  // Clamped after the check, so a value inside the tolerance band lands
  // exactly on the boundary instead of a hair outside it.
  sFrom = clamp(sFrom, xMin, xMax);
  sTo = clamp(sTo, xMin, xMax);

  const tangentAt = finite(r.tangent_at) ? clamp(r.tangent_at, xMin, xMax) : xMin;

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
    integrate_along: axis as IntegrationAxis,
    pieces,
    tangent_at: tangentAt,
    tangent_kind: tangentKind as TangentKind,
    family_param: familyParam as FamilyParam,
    family_values: (familyRaw as number[]).map((v) => clamp(v, -100, 100)),
    named_shape: mode === 'named' ? (namedShape as string) : '',
  };

  /*
   * The shape's own axis names, unless the payload supplied its own.
   *
   * The DOMAIN is taken above and is not negotiable; the LABELS are, because
   * the default language is Hinglish and a shape whose axes could only ever
   * be named in English would be untranslatable by construction. A payload
   * may rename the axes of a printed figure; it may not crop or redraw it.
   */
  if (shapeDef) {
    if (params.x_label === 'x') params.x_label = shapeDef.xLabel;
    if (params.y_label === 'y') params.y_label = shapeDef.yLabel;
  }

  if (params.mode === 'area_between' && params.pieces.length === 0) {
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

  /*
   * A TANGENT NEEDS A DERIVATIVE THAT EXISTS AND A SLOPE THAT IS A NUMBER.
   *
   * Two refusals, and they are different failures:
   *
   *   AT A BREAKPOINT of a piecewise f the two pieces have different slopes,
   *     so there is no tangent — drawing either one asserts a derivative the
   *     function does not have. This is the corner of |x| at 0, which is the
   *     single most likely place for a model to ask for one.
   *   A NORMAL AT A STATIONARY POINT is vertical. `straightLinePath` draws a
   *     vertical line correctly, so the picture would be fine; the READOUT
   *     would not, because the slope is infinite and "slope —" under a drawn
   *     line reads as a rendering failure. Refused so the two never disagree.
   *     The TANGENT there is horizontal, slope 0, and is perfectly legal —
   *     which is the extremum case this was extended for.
   */
  if (params.tangent_kind !== 'none' && errors.length === 0) {
    if (params.pieces.length > 0) {
      const tolP = Math.max(Math.abs(params.x_max - params.x_min), 1) * 1e-7;
      for (const piece of params.pieces) {
        for (const edge of [piece.from, piece.to]) {
          if (edge <= params.x_min + tolP || edge >= params.x_max - tolP) continue;
          if (Math.abs(params.tangent_at - edge) < tolP) {
            errors.push(
              `tangent_at ${params.tangent_at} sits on the breakpoint at ${edge}, where the two pieces have different slopes — there is no tangent there`
            );
          }
        }
      }
    }
    const i = params.pieces.length > 0 ? pieceAt(params.pieces, params.tangent_at) : -1;
    const k = params.pieces.length > 0
      ? (i < 0 ? null : params.pieces[i])
      : { curve: params.curve, a: params.a, b: params.b, c: params.c };
    if (k) {
      const m = lineSlopeAt(k.curve, k.a, k.b, k.c, params.tangent_at, params.tangent_kind);
      if (!Number.isFinite(m)) {
        errors.push(
          `the normal at ${params.tangent_at} is vertical — the curve is stationary there, so the normal has no slope to report. A tangent there is horizontal and is legal`
        );
      }
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
/**
 * THE READOUT, SPLIT INTO A CAPTION AND A VALUE — new at v3, and the reason
 * this widget now uses `chrome.fitReadout` after two versions of not doing so.
 *
 * v1 and v2 had no mode whose readout carried BOTH prose and a number:
 * `curve` was two axis labels, `area` was one number, `data` was three. So a
 * `maxChars` + `slice` was enough, and the comment saying "xy_plot does not
 * use fitReadout" was a true description of a widget that had nothing for it
 * to do.
 *
 * `family` broke that, and it broke it on the language the product actually
 * ships. Its readout must name the axes AND list the parameter values,
 * because the value list is the only thing on the board saying which curve is
 * which. At 343x236 the readout holds 34 code units, and a realistic Hinglish
 * pair spends 30 of them before a single value:
 *
 *   "urja U vs sthiti x, metre mein   a = 0.50, 1, 2"    47 units, 381.6pt
 *   "energy U vs position x, in metres   a = 0.50, 1, 2" 50 units, 406.0pt
 *
 * against 282.6pt of board. BOTH were refused outright by the first version
 * of `labelFitProblems`, English included — which would have made `family`
 * unusable with any honest axis label and pushed those diagrams to a tier-3
 * SVG on the default language. That is the wrong answer, and it is the exact
 * failure `chrome.fitReadout` was written for: the caption tapers one
 * character at a time to an ellipsis, and the VALUE never loses a term.
 *
 * So `validate()` now measures the VALUE against the board and lets the
 * caption give up its characters — the refusal still stands for a payload
 * whose NUMBERS do not fit, which is the case where truncation would produce
 * a wrong number rather than a shorter sentence.
 *
 * A mode with no value at all — `curve` and `named` — keeps the v1/v2 slice
 * path exactly, because `fitReadout` with an empty value emits a trailing
 * separator, and because those trees are frozen.
 */
function readoutCaption(p: XyPlotParams): string {
  return p.mode === 'curve' || p.mode === 'family' || p.mode === 'named'
    ? `${p.y_label} vs ${p.x_label}`
    : '';
}

/** The part that carries numbers, as `READOUT_SEP`-separated TERMS — which is
 *  what lets `fitReadout` drop a whole term rather than half of one. */
function readoutValue(p: XyPlotParams, d: XyPlotDerived): string {
  const parts: string[] = [];
  if (p.mode === 'area' || p.mode === 'area_between') {
    parts.push(`area ${fmt(d.area)}`);
  } else if (p.mode === 'data') {
    parts.push(`mean ${fmt(d.mean)}`, `median ${fmt(d.median)}`, `sd ${fmt(d.stdDev)}`);
  }
  /*
   * The family's values, in the order they are drawn. This is the ONLY thing
   * on the board that says which curve is which — see the component's note on
   * why there is no legend — so it is part of the value rather than the
   * caption, and `fitReadout` will therefore never cut it.
   */
  if (p.mode === 'family' && p.family_values.length > 0) {
    parts.push(`${p.family_param} = ${p.family_values.map(fmt).join(', ')}`);
  }
  /*
   * The slope of the line that is drawn, not f′ — for a normal those differ,
   * and the student is looking at the normal. `derive` computes it; this only
   * spells it. `named` is excluded here and in validate() for the same
   * reason: several named shapes are qualitative and a slope read off one
   * would be a number with no referent.
   */
  if (p.tangent_kind !== 'none' && p.mode !== 'named' && p.mode !== 'data') {
    parts.push(`${p.tangent_kind} slope ${fmt(d.slope)}`);
  }
  return parts.join(READOUT_SEP);
}

/**
 * The whole readout, untrimmed — what the widget would say with unlimited
 * board. Used by `validate()`'s error messages so a refusal quotes the line
 * the author wrote, and by nothing that draws.
 */
function readoutFor(p: XyPlotParams, d: XyPlotDerived): string {
  const caption = readoutCaption(p);
  const value = readoutValue(p, d);
  if (value === '') return caption;
  return caption === '' ? value : `${caption}${READOUT_SEP}${value}`;
}

function XyPlot({ params, motion, width, height, theme }: WidgetRenderProps<XyPlotParams>) {
  const shadeSv = motion.shade_to;
  const tangentSv = motion.tangent_at;

  /*
   * Static scaffolding: axes, gridlines, ticks. Computed from `params` only,
   * and specifically NOT from `shade_to` or `tangent_at` — the axis must hold
   * still while the shaded region sweeps and while the tangent slides, or the
   * two states cannot be compared.
   */
  const frame = useMemo(() => planFrame(params, width, height), [params, width, height]);

  const d = useMemo(() => derive(params), [params]);

  const px = (u: number, v: number) => fx(frame, u, v);
  const py = (u: number, v: number) => fy(frame, u, v);

  /** The six projection numbers every path builder needs, in one place and
   *  in the order every builder takes them. Read inside worklets, so it is a
   *  plain tuple of numbers rather than the frame object. */
  const proj = [
    frame.uMin, frame.uOrigin, frame.uScale, frame.vMin, frame.vOrigin, frame.vScale,
  ] as const;

  const staticCurve = useMemo(
    () =>
      frame.isData || frame.named || params.mode === 'family'
        ? ''
        : frame.piecewise
          ? piecesPath(
              params.pieces,
              frame.uMin, frame.uOrigin, frame.uScale,
              frame.vMin, frame.vOrigin, frame.vScale,
              SAMPLES, frame.swap
            )
          : curvePath(
              params.curve, params.a, params.b, params.c,
              frame.uMin, frame.uMax,
              frame.uOrigin, frame.uScale,
              frame.vMin, frame.vOrigin, frame.vScale,
              SAMPLES, frame.swap
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
            frame.uMin, frame.uMax,
            frame.uOrigin, frame.uScale,
            frame.vMin, frame.vOrigin, frame.vScale,
            SAMPLES, frame.swap
          )
        : '',
    [params, frame]
  );

  /**
   * The family: one path per value, all params-only.
   *
   * Distinguished by stroke OPACITY rather than by colour or by a legend.
   * Colour would need a second accent the theme does not have; a legend is
   * more text on a board whose text budget is already the binding constraint
   * (the gate treats any label overlap as a hard error). Opacity orders the
   * curves the way the values are ordered, and the readout lists the values
   * in the same order, so the picture and the strip are read together.
   */
  const familyPaths = useMemo(
    () =>
      params.mode === 'family'
        ? params.family_values.map((value) => {
            const m = familyMember(params, value);
            return {
              value,
              d: curvePath(
                params.curve, m.a, m.b, m.c,
                frame.uMin, frame.uMax,
                frame.uOrigin, frame.uScale,
                frame.vMin, frame.vOrigin, frame.vScale,
                SAMPLES, frame.swap
              ),
            };
          })
        : [],
    [params, frame]
  );

  /** A named shape's traces, projected. Plain polylines — no worklet, because
   *  nothing about a printed shape animates. */
  const namedPaths = useMemo(() => {
    if (!frame.named) return [];
    return frame.named.curves.map((trace) => {
      let dd = '';
      let started = false;
      for (const [u, v] of trace.points) {
        if (!Number.isFinite(v)) {
          started = false;
          continue;
        }
        dd += (started ? 'L' : 'M') + px(u, v).toFixed(2) + ' ' + py(u, v).toFixed(2);
        started = true;
      }
      return { d: dd, dash: trace.dash };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame]);

  const namedMarks = useMemo(
    () => (frame.named ? landmarkAnchors(frame, frame.named) : []),
    [frame]
  );

  const shadeProps = useAnimatedProps(() => ({
    d:
      params.mode === 'area'
        ? params.pieces.length > 0
          ? areaPiecesPath(
              params.pieces, params.shade_from, shadeSv.value,
              proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], SAMPLES, frame.swap
            )
          : areaPath(
              params.curve, params.a, params.b, params.c,
              params.shade_from, shadeSv.value,
              proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], SAMPLES, frame.swap
            )
        : params.mode === 'area_between'
          ? // The live `shadeSv.value`, not `params.shade_to` — and the
            // crossings are re-solved for THIS interval on every frame, which
            // is what makes the drawn region and the readout's arithmetic the
            // same region at every fractional value the tween passes through.
            params.pieces.length > 0
            ? areaBetweenPiecesPath(
                params.pieces,
                params.curve2, params.a2, params.b2, params.c2,
                params.shade_from, shadeSv.value,
                proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], SAMPLES, frame.swap
              )
            : areaBetweenPath(
                params.curve, params.a, params.b, params.c,
                params.curve2, params.a2, params.b2, params.c2,
                params.shade_from, shadeSv.value,
                proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], SAMPLES, frame.swap
              )
          : '',
  }));

  const hasTangent = params.tangent_kind !== 'none' && !frame.isData && frame.named === null;

  /**
   * The tangent or normal, rebuilt on the UI thread as `tangent_at` slides.
   *
   * A Path and not a Line, deliberately: `Line` is in `SCAFFOLDING_TYPES`
   * (test-utils.ts), which is the set of elements that must NOT move between
   * two renders that differ only in `motion`. Drawing an animated tangent as a
   * `Line` would be reported as a params/motion violation, and the check would
   * be right — the rule exists because a moving axis is a wrong diagram, and
   * the way to have a moving straight line is to make it geometry rather than
   * scaffolding.
   */
  const tangentProps = useAnimatedProps(() => {
    if (!hasTangent) return { d: '' };
    const i = params.pieces.length > 0 ? pieceAt(params.pieces, tangentSv.value) : -1;
    const kind = params.pieces.length > 0 ? (i < 0 ? null : params.pieces[i]) : {
      curve: params.curve, a: params.a, b: params.b, c: params.c,
    };
    if (!kind) return { d: '' };
    const v0 = evalCurve(kind.curve, kind.a, kind.b, kind.c, tangentSv.value);
    const m = lineSlopeAt(kind.curve, kind.a, kind.b, kind.c, tangentSv.value, params.tangent_kind);
    return {
      d: straightLinePath(
        tangentSv.value, v0, m,
        proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], frame.swap,
        frame.left, frame.right, frame.top, frame.bottom
      ),
    };
  });

  /**
   * The point of tangency. A Circle, so it is geometry and may move.
   *
   * THE "DRAW NOTHING" SENTINEL IS INSIDE THE BOARD, NOT AT (-100, -100).
   *
   * `r: 0` already draws nothing, but verify-render.mjs's `boundsOf` reads a
   * Circle's bounds from cx/cy/r WITHOUT caring that r is zero, so a dot
   * parked off-board is a hard `RNSVGCircle out of bounds` error at every
   * board size — the always-mounted-element-parked-off-canvas pattern
   * CLAUDE.md lists among the four wrong-reason passes found on 2026-09-05,
   * here failing loudly rather than passing quietly.
   *
   * Reachable on a PIECEWISE payload with a tangent, whenever `pieceAt`
   * misses: `tangent_at` a hair past `x_max` returns −1 and this branch
   * fires. `validate()` clamps `tangent_at` into the domain and the cue
   * easing (`Easing.inOut(Easing.quad)` in use-cue-track.ts) does not
   * overshoot, so nothing in the product reaches it today — which is exactly
   * why it must not be the thing standing between a rounding hair and a
   * gate failure. Parked at the plot's top-left corner it is invisible,
   * in-bounds, and filtered out of the glyph-spacing check by `r > 0`.
   */
  const tangentDotProps = useAnimatedProps(() => {
    if (!hasTangent) return { cx: frame.left, cy: frame.top, r: 0 };
    const i = params.pieces.length > 0 ? pieceAt(params.pieces, tangentSv.value) : -1;
    const kind = params.pieces.length > 0 ? (i < 0 ? null : params.pieces[i]) : {
      curve: params.curve, a: params.a, b: params.b, c: params.c,
    };
    if (!kind) return { cx: frame.left, cy: frame.top, r: 0 };
    const v0 = evalCurve(kind.curve, kind.a, kind.b, kind.c, tangentSv.value);
    return {
      cx: pointPx(tangentSv.value, v0, proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], frame.swap),
      cy: pointPy(tangentSv.value, v0, proj[0], proj[1], proj[2], proj[3], proj[4], proj[5], frame.swap),
      r: DOT_R,
    };
  });

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
   * NUMBER — every mode except `curve` and `named`, plus anything with a
   * tangent — is refused by validate() when it does not fit, because
   * "median -99999.9" is not a shorter answer, it is a wrong one. This slice
   * is the backstop under that rule, not the rule.
   */
  const rawTitle = params.x_label.toUpperCase();
  const axisTitle = rawTitle.slice(
    0, maxChars(frame.right - frame.left, AXIS_TITLE_SIZE, rawTitle)
  );
  const readoutRoom = width - PAD_LEFT - PAD_RIGHT;
  const caption = readoutCaption(params);
  const value = readoutValue(params, d);
  const readout =
    value === ''
      ? // No number to protect, so the v1/v2 path: slice the caption to the
        // box. Kept byte-identical deliberately — `curve` mode's trees are
        // frozen in __golden__ and this is the code that produced them.
        caption.slice(0, maxChars(readoutRoom, READOUT_SIZE, caption))
      : fitReadout(caption, value, readoutRoom, READOUT_SIZE);

  return (
    <Svg width={width} height={height}>
      {/* Gridlines and ticks — scaffolding, params-only. `hTicks` are drawn
          as vertical gridlines with their labels below; `sideTicks` as
          horizontal gridlines with their labels in the left gutter. For
          `integrate_along: 'x'` those are the integration variable and the
          value respectively, i.e. exactly what v2 drew, in the same order. */}
      <G>
        {frame.hTicks.map((t) => (
          <G key={`x${t}`}>
            <Line
              x1={hTickPx(frame, t)} y1={frame.top} x2={hTickPx(frame, t)} y2={frame.bottom}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={hTickPx(frame, t)} y={frame.bottom + TICK_LABEL_SIZE * 1.35}
              fill={theme.inkMuted} fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor="middle"
            >
              {fmt(t)}
            </SvgText>
          </G>
        ))}
        {frame.sideTicks.map((t) => (
          <G key={`y${t}`}>
            <Line
              x1={frame.left} y1={sideTickPy(frame, t)} x2={frame.right} y2={sideTickPy(frame, t)}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={frame.left - 6} y={sideTickLabelY(frame, t)}
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

      {/* A named shape's traces. Ordered so the solid one is drawn last and
          reads as the primary curve. */}
      {namedPaths.map((n, i) => (
        <Path
          key={`n${i}`}
          d={n.d} fill="none" stroke={i === 0 ? theme.accent : theme.ink}
          strokeWidth={i === 0 ? CURVE_STROKE : MARKER_STROKE}
          strokeDasharray={n.dash ?? undefined}
          strokeLinecap="round" strokeLinejoin="round"
        />
      ))}

      {/* A family: same curve, one path per value, ordered by the readout. */}
      {familyPaths.map((m, i) => (
        <Path
          key={`f${i}`}
          d={m.d} fill="none" stroke={theme.accent}
          strokeWidth={CURVE_STROKE}
          strokeOpacity={0.4 + (0.6 * (i + 1)) / Math.max(1, familyPaths.length)}
          strokeLinecap="round" strokeLinejoin="round"
        />
      ))}

      {!frame.isData && staticCurve !== '' && (
        <Path
          d={staticCurve} fill="none" stroke={theme.accent}
          strokeWidth={CURVE_STROKE} strokeLinecap="round" strokeLinejoin="round"
        />
      )}

      {/* The tangent or normal, and the point it touches. Both are geometry,
          so both may move with `tangent_at`. */}
      {hasTangent && (
        <AnimatedPath
          animatedProps={tangentProps} fill="none" stroke={theme.ink}
          strokeWidth={MARKER_STROKE} strokeDasharray="5 4" strokeLinecap="round"
        />
      )}
      {hasTangent && <AnimatedCircle animatedProps={tangentDotProps} fill={theme.ink} />}

      {/* Data mode: one bar + dot per observation, with mean and median rules. */}
      {frame.isData &&
        params.values.map((v, i) => (
          <G key={`v${i}`}>
            <Line
              x1={px(i + 1, 0)} y1={py(i + 1, 0)} x2={px(i + 1, v)} y2={py(i + 1, v)}
              stroke={theme.accent} strokeWidth={MARKER_STROKE}
            />
            <Circle cx={px(i + 1, v)} cy={py(i + 1, v)} r={DOT_R} fill={theme.accent} />
          </G>
        ))}
      {frame.isData && (
        <G>
          <Line
            x1={frame.left} y1={py(0, frame.stats.mean)} x2={frame.right} y2={py(0, frame.stats.mean)}
            stroke={theme.ink} strokeWidth={MARKER_STROKE} strokeDasharray="6 4"
          />
          <SvgText
            x={frame.right - 4} y={py(0, frame.stats.mean) - 5}
            fill={theme.ink} fontSize={TICK_LABEL_SIZE}
            fontFamily={theme.monoFontFamily} textAnchor="end"
          >
            {`mean ${fmt(frame.stats.mean)}`}
          </SvgText>
        </G>
      )}

      {/* Named-shape callouts. A marker only where the callout names a POINT;
          a curve's name is text alone. */}
      {namedMarks.map((m, i) =>
        m.marker ? <Circle key={`m${i}`} cx={m.px} cy={m.py} r={MARKER_R} fill={theme.ink} /> : null
      )}

      {/* Axes last, over the fill, so the baseline reads as the boundary.
          The v = 0 line is horizontal normally and VERTICAL when the axes are
          swapped; the other line is the box edge the integration variable
          runs along. */}
      {frame.swap ? (
        <>
          <Line
            x1={frame.zeroPx} y1={frame.top} x2={frame.zeroPx} y2={frame.bottom}
            stroke={theme.ink} strokeWidth={AXIS_STROKE}
          />
          <Line
            x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom}
            stroke={theme.ink} strokeWidth={AXIS_STROKE}
          />
        </>
      ) : (
        <>
          <Line
            x1={frame.left} y1={frame.zeroPx} x2={frame.right} y2={frame.zeroPx}
            stroke={theme.ink} strokeWidth={AXIS_STROKE}
          />
          <Line
            x1={frame.left} y1={frame.top} x2={frame.left} y2={frame.bottom}
            stroke={theme.ink} strokeWidth={AXIS_STROKE}
          />
        </>
      )}

      <SvgText
        x={frame.right} y={frame.bottom + TICK_LABEL_SIZE * 3.0}
        fill={theme.inkMuted} fontSize={AXIS_TITLE_SIZE}
        fontFamily={theme.monoFontFamily} textAnchor="end"
      >
        {axisTitle}
      </SvgText>

      {namedMarks.map((m, i) => (
        <SvgText
          key={`l${i}`}
          x={m.lx} y={m.ly}
          fill={theme.ink} fontSize={LABEL_SIZE}
          fontFamily={theme.monoFontFamily} textAnchor={m.anchor}
        >
          {m.label}
        </SvgText>
      ))}

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
   * v3 — either axis, piecewise f, a tangent, a family, and named shapes.
   *
   * The params SHAPE changed again (seven new keys), so the version moves.
   * `lookup(id, version)` only refuses a payload whose version is GREATER
   * than the module's, so every v1 AND v2 payload still resolves against this
   * module and renders IDENTICALLY — asserted, not assumed:
   * `__golden__/golden.test.tsx` renders three frozen v1 trees and six frozen
   * v2 trees, at 900x430 and at 343x236, and compares them byte for byte
   * against bytes produced BEFORE this change. Those bytes cannot be wrong in
   * the same direction as this code, because they predate it.
   *
   * What the bump buys is the other direction: a v3 payload sent to a client
   * still on v2 is refused rather than rendered with `pieces` silently
   * dropped, which would draw a single-piece curve under a piecewise area.
   *
   * `defaults` gains the seven keys at their inert values — x-axis
   * integration, no pieces, no tangent, no family, no shape — so
   * `mod.defaults` is still the v1 "area under y = x²" payload it has always
   * been, and every existing harness that renders it keeps rendering the same
   * picture.
   */
  version: 3,
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
    integrate_along: 'x',
    pieces: [],
    tangent_at: 0,
    tangent_kind: 'none',
    family_param: 'a',
    family_values: [],
    named_shape: '',
  },
  /**
   * TWO of the four the pool allows.
   *
   * `shade_to` sweeps a region continuously — the area readout and the shaded
   * width move together, which is a real animation of a real quantity.
   *
   * `tangent_at` slides the point of tangency along the curve, which is the
   * only way to show that the slope CHANGES rather than that it has a value.
   * It is admissible for the same reason `shade_to` is and no other: neither
   * one moves the axes. The tangent is CLIPPED to the plot box rather than
   * allowed to extend it, and `planFrame` reads neither key — so the frame is
   * provably still while both move, which `render-trees`' scaffoldingDiffs
   * check asserts at two values of each.
   *
   * The coefficients are still deliberately NOT animatable: changing `a`
   * rescales the curve's own y-range, so the axis would have to move
   * mid-tween and the before/after would stop being comparable (CLAUDE.md §3,
   * the same reason projectile_motion's pxPerM ignores angle). Neither is
   * `family_values` or `pieces` — an array is not a SharedValue<number>, and
   * a family that grew a member mid-tween would change the element count,
   * which scaffoldingDiffs reports and should.
   */
  animatable: ['shade_to', 'tangent_at'],
  derived: ['area', 'mean', 'median', 'variance', 'stdDev', 'slope', 'tangentX', 'tangentY'],
  computeDerived: derive,
  derivedAliases: {
    area: ['area', 'the area', 'region', 'bigger', 'smaller', 'grows', 'shrinks'],
    mean: ['mean', 'average'],
    median: ['median', 'middle value'],
    variance: ['variance', 'spread'],
    stdDev: ['standard deviation', 'sd', 'sigma', 'scatter'],
    slope: ['slope', 'gradient', 'steeper', 'flatter', 'the derivative', 'rate of change'],
    tangentX: ['point of tangency', 'the point', 'x of the point'],
    tangentY: ['height at the point', 'y of the point'],
  },
  validate,
  Component: XyPlot,
};

export type { XyPlotParams };
