import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import {
  EMPHASIS_STROKE, GLYPH_R, HAIRLINE_STROKE, LABEL_SIZE,
  LINE_STROKE, MARKER_R, READOUT_BAND, READOUT_ELLIPSIS, READOUT_SEP,
  READOUT_SIZE, dirArrowHead, fitReadout, maxChars,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  chargesFor,
  deriveFieldLines,
  ellipsePolyline,
  equipotentialPlaneXsM,
  equipotentialRadiiM,
  gaussianSurfacePolylines,
  isGaussian,
  linesPerSource,
  neutralPointWorld,
  pathFromWorldPoints,
  sourceUnit,
  surfaceArrows,
  terminationPointWorld,
  traceFieldLine,
  CHARGE_UC_MAX,
  CHARGE_UC_MIN,
  PLATE_GAP_M,
  SURFACE_SCALE_MAX,
  SURFACE_SCALE_MIN,
  WIRE_OUTSIDE_Y_M,
  WORLD_HALF_H,
  WORLD_HALF_W,
  type FieldLinesConfiguration,
  type FieldLinesParams,
} from './physics';

/**
 * Chrome constants — device points, never a function of width/height. See
 * docs/small-screen-rendering-rules.md.
 */
const CHARGE_GLYPH_R = GLYPH_R;
const CHARGE_LABEL_SIZE = LABEL_SIZE;
const ANNOTATION_LABEL_SIZE = LABEL_SIZE;
const ANNOTATION_MARKER_R = MARKER_R;
const FIELD_LINE_STROKE = LINE_STROKE;
// Was 2.4 while xy_plot's curve — the same role — was 2.6. Unified in chrome.ts.
const PLATE_STROKE = EMPHASIS_STROKE;
/** Gap, in device points, between a charge's glyph edge and where its field
 *  lines are seeded. Converted to world metres via `/ pxPerM` at render time —
 *  NOT authored as a world constant. This is the exact bug
 *  docs/small-screen-rendering-rules.md documents against this widget: a
 *  fixed-metre seed ring collapses to nothing on a small board because a
 *  world constant was standing in for what should have been a chrome offset. */
const SEED_GAP = 4;

/**
 * The dash pattern every CONSTRUCTION surface is drawn with — Gaussian
 * surfaces and equipotential contours alike. Device points, so it does not
 * scale with the board: a dash that shrank with the frame would close up into
 * a solid line at 343x236 and the surface would stop reading as imaginary.
 *
 * Dashed is not decoration. NCERT draws Gaussian surfaces and equipotentials
 * dashed precisely because they are surfaces the student CHOOSES, not objects
 * that exist; a solid ring round a charge reads as a shell of charge, which is
 * a different figure with a different answer (P12Ch01Sec57).
 */
const SURFACE_DASH: readonly number[] = [5, 4];

/** FRACTION of board width — a world quantity, not chrome. */
const PAD_SIDE_FRAC = 0.06;
/** FRACTION of board height — a world quantity, not chrome. */
const PAD_BOTTOM_FRAC = 0.06;
/**
 * The top margin holds ONLY the fixed-size readout text — nothing in it
 * scales with the board — so it is sized from that chrome, not from a
 * fraction of the frame. See docs/small-screen-rendering-rules.md's
 * container-sizing rule (added after `projectile-motion`'s PAD.bottom shipped
 * the opposite mistake: a fraction holding fixed content).
 */
const TOP_MARGIN_PX = READOUT_BAND;

const CONFIGURATIONS = [
  'point', 'dipole', 'like_charges', 'parallel_plates',
  'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
  'equipotential_point', 'equipotential_uniform',
] as const;
const ANNOTATIONS = ['neutral_point', 'termination'] as const;

/** A caption longer than this cannot fit any board we render, and a payload
 *  carrying one is a content bug rather than a rendering one. Clamped rather
 *  than rejected — the same call circuit_network makes. */
const MAX_CAPTION_CHARS = 120;

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function validate(raw: unknown): ValidationResult<FieldLinesParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const configuration = r.configuration;
  const chargeUc = r.charge_uc;
  // Every v2 key defaults to the value that makes a v1 payload — which has
  // none of them — render exactly what v1 rendered. That is asserted in
  // __golden__/golden.test.tsx against bytes frozen before this change, not
  // trusted from this comment.
  const surfaceScale = r.surface_scale ?? 1;
  const enclosed = r.enclosed ?? true;
  const showArrows = r.show_arrows ?? true;
  const annotate = r.annotate ?? null;
  const caption = r.caption ?? '';

  if (
    typeof configuration !== 'string' ||
    !(CONFIGURATIONS as readonly string[]).includes(configuration)
  ) {
    errors.push(`configuration must be one of ${CONFIGURATIONS.join(', ')}`);
  }
  if (typeof chargeUc !== 'number' || !Number.isFinite(chargeUc)) {
    errors.push('charge_uc must be a finite number');
  } else if (chargeUc <= 0) {
    /*
     * REJECTED, NOT CLAMPED — the one place this validator refuses a number
     * instead of pulling it into range.
     *
     * The clamp below may change a source's MAGNITUDE (2 becomes 4: a denser
     * fan of the same picture). It may not change its SIGN or its EXISTENCE.
     * `clamp(-10, 4, 20)` returned +4, so a payload meaning "a −10 µC charge"
     * drew a +4 µC one with every field line pointing OUT instead of in, and
     * the readout, the arrowheads and `derivedAliases.fieldMagnitude` all
     * agreed with each other about the wrong figure. Nothing downstream could
     * see it: the diagram renders perfectly legibly and passes every
     * assertion scripts/verify-render.mjs makes.
     *
     * A negative charge is not a smaller positive one, and it is not this
     * widget's to draw either way: `chargesFor` seeds lines on positive
     * sources only, and the negative charge in the figures that have one
     * comes from `configuration: 'dipole'`, never from a negative charge_uc.
     * Zero is refused for the neighbouring reason — it is not a weak source,
     * it is no source, and clamping it to 4 invents one.
     */
    errors.push(
      chargeUc < 0
        ? `charge_uc must be a positive magnitude, got ${chargeUc}. A negative charge is ` +
          `not a smaller positive one: clamping it into [${CHARGE_UC_MIN}, ${CHARGE_UC_MAX}] ` +
          `would flip the sign of the source and reverse the field direction the figure ` +
          `teaches. field_lines draws positive sources only — for a negative charge use ` +
          `configuration 'dipole', which draws one, and pass its magnitude here.`
        : `charge_uc must be a positive magnitude, got ${chargeUc}. A zero source has no ` +
          `field at all, and clamping it to ${CHARGE_UC_MIN} would invent one.`
    );
  }
  if (typeof surfaceScale !== 'number' || !Number.isFinite(surfaceScale)) {
    errors.push('surface_scale must be a finite number');
  }
  if (typeof enclosed !== 'boolean') {
    errors.push('enclosed must be a boolean');
  }
  if (typeof showArrows !== 'boolean') {
    errors.push('show_arrows must be a boolean');
  }
  if (typeof caption !== 'string') {
    errors.push('caption must be a string');
  }
  if (annotate !== null && (typeof annotate !== 'string' || !(ANNOTATIONS as readonly string[]).includes(annotate))) {
    errors.push(`annotate must be null or one of ${ANNOTATIONS.join(', ')}`);
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      configuration: configuration as FieldLinesParams['configuration'],
      // The cap that keeps line density teachable rather than thinned
      // adaptively for a small board — docs/small-screen-rendering-rules.md
      // "what does not survive a small screen". 20 is the ceiling regardless
      // of board size; it is enforced here, not at render time. Both bounds
      // live in physics.ts so the schema has one spelling — the dev harness
      // reads the same two numbers rather than a copy of them.
      //
      // MAGNITUDE ONLY. Zero and negatives never reach this clamp; they are
      // refused above.
      charge_uc: clamp(chargeUc as number, CHARGE_UC_MIN, CHARGE_UC_MAX),
      /*
       * The schema's legal range is a SUBSET of what renders. Both bounds
       * measured at 343x236, where pxPerM = 503.07.
       *
       * UPPER, 1.4 -> r = 0.105 m. Two constraints, the tighter one binding:
       *   - r <= WORLD_HALF_H = 0.16, so the surface can never leave the
       *     frame — pxPerM is min(plotW/0.6, plotH/0.32), so |y| <= 0.16 is
       *     in-frame by construction at every board size;
       *   - the NOT-ENCLOSED cylinder puts its wire at WIRE_OUTSIDE_Y_M =
       *     0.15, leaving 0.045 m of clearance = 22.6px here and 52.8px at
       *     900x430. Below that the wire reads as lying ON the surface it
       *     does not pass through, which is the one thing that figure must
       *     not say.
       *
       * LOWER, 0.6 -> r = 0.045 m. The sphere and cylinder are comfortable
       * there (22.6px of radius, a 142px circumference against a 9px dash
       * period — 15.8 dashes, still legibly dashed). THE PILLBOX IS WHAT
       * BINDS, and this comment used to justify the bound from the sphere
       * and never mention it:
       *
       *   at 0.6 the pillbox's own dashed geometry is 0.1652 x 0.09 m
       *   = 83.1 x 45.3 px = 4.65% of a 343x236 board, BELOW the gate's 5%
       *   degeneracy floor. The tree passes only because the charged sheet
       *   is drawn as a full-height Line beside it, taking the frame to
       *   19.9%. That is legitimate — the sheet is a real, correctly placed
       *   part of Fig 1.11, not a parked element stretching the bbox — but
       *   it means the pillbox is carried by its source, and its cap
       *   ellipse's minor axis is r * CAP_RX_RATIO = 6.3px at this corner.
       *
       * So 0.6 is the floor because of the pillbox, not the sphere. Anyone
       * lowering it must re-run __generate__/corner-sweep.gen.ts, and must
       * look at the pillbox rows first.
       */
      surface_scale: clamp(surfaceScale as number, SURFACE_SCALE_MIN, SURFACE_SCALE_MAX),
      enclosed: enclosed as boolean,
      show_arrows: showArrows as boolean,
      annotate: annotate as FieldLinesParams['annotate'],
      caption: (caption as string).slice(0, MAX_CAPTION_CHARS),
    },
  };
}

/* ----------------------------------------------------------------- component */


function formatField(v: number): string {
  if (v === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(v)));
  const mant = v / Math.pow(10, exp);
  return `${mant.toFixed(2)}e${exp}`;
}

/**
 * A charge in microcoulombs, at three significant figures, with no exponent.
 *
 * The enclosed charge spans 0.025 uC (the smallest pillbox at sigma = 4) to
 * 20 uC (the largest sphere), and `formatField` would print the small end as
 * "2.54e-2" — an exponent on a number a student is meant to read as a
 * quantity of charge, next to a flux that legitimately needs one. Trailing
 * zeros are dropped so "20.0" is "20": a fixed decimal count would print
 * "3.00 uC" for a cylinder and invite it to be read as a precision claim.
 */
function formatCharge(v: number): string {
  if (v === 0) return '0';
  const s = v.toPrecision(3);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
}

const UNIT_LABEL: Record<ReturnType<typeof sourceUnit>, string> = {
  'uC': 'µC',
  'uC/m': 'µC/m',
  'uC/m2': 'µC/m²',
};

/**
 * The symbol the book uses for this configuration's source, so the readout's
 * last term can state what was set rather than only what was derived.
 *
 * It matters that this is not always "q": `charge_uc` is a line density for
 * the cylinder and a surface density for the pillbox, and a readout that
 * printed "q 10 µC" beside "Qenc 3 µC" would be stating two different charges
 * for one wire. `sourceUnit` and this function are the same switch read two
 * ways, which is why they live next to each other.
 */
function sourceSymbol(c: FieldLinesConfiguration): string {
  if (c === 'gaussian_cylinder') return '\u03bb';
  if (c === 'parallel_plates' || c === 'gaussian_pillbox' || c === 'equipotential_uniform') {
    return '\u03c3';
  }
  return 'q';
}

/** The `<symbol> <value> <unit>` term naming what the payload actually set. */
function sourceTerm(p: FieldLinesParams): string {
  return `${sourceSymbol(p.configuration)} ${formatCharge(p.charge_uc)} ${UNIT_LABEL[sourceUnit(p.configuration)]}`;
}

/**
 * The bottom-left label naming what the construction surface IS.
 *
 * Corner-pinned, exactly like the v1 annotations above it and for the same
 * reason (chrome.ts's `cornerAnchor` note): a label pinned to the surface
 * itself would sit on the charge glyph's own "+" in the enclosed cases, and
 * verify-render treats overlapping text as a hard error. There is never more
 * than one of these — `neutralPointWorld` and `terminationPointWorld` both
 * return null for every v2 configuration, so the v1 annotations and this
 * label are mutually exclusive by construction, not by luck.
 */
function surfaceLabel(p: FieldLinesParams): string | null {
  switch (p.configuration) {
    case 'gaussian_sphere':
      return p.enclosed
        ? 'GAUSSIAN SPHERE — CHARGE INSIDE'
        : 'GAUSSIAN SPHERE — CHARGE OUTSIDE, Φ = 0';
    case 'gaussian_cylinder':
      return p.enclosed
        // 38 units. Was "COAXIAL GAUSSIAN CYLINDER — CAPS CARRY NO FLUX" (46)
        // and rendered as "…CAPS CARRY NO F" at 343x236 — see fitLabel below.
        // Then 42, which fitted the budget chrome.ts APPEARED to give
        // (floor(303 / (12 x 0.58)) = 43) and not the one Menlo actually
        // gives (floor(303 / (12 x 0.6021 x 1.05)) = 39). "END" goes.
        ? 'GAUSSIAN CYLINDER — CAPS CARRY NO FLUX'
        : 'GAUSSIAN CYLINDER — WIRE OUTSIDE, Φ = 0';
    case 'gaussian_pillbox':
      return p.enclosed
        ? 'GAUSSIAN PILLBOX ACROSS THE SHEET'
        // 38 units. Was "PILLBOX OFF THE SHEET — IN ONE CAP, OUT THE OTHER,
        // Φ = 0" (56), which lost "OTHER, Φ = 0" at 343x236 — the entire
        // claim the figure exists to make. Then 42, against the apparent
        // 43-unit budget; the real one is 39, so "THE" goes.
        : 'PILLBOX OFF SHEET — FLUX IN = FLUX OUT';
    case 'equipotential_point':
      // 38 units, reordered rather than cut: was 40, one over the real
      // 39-unit budget at 343x236, and the ⊥ claim is the one that must
      // survive so it moves ahead of the equal-ΔV one.
      return 'EQUIPOTENTIALS — E ⊥ SURFACE, EQUAL ΔV';
    case 'equipotential_uniform':
      return 'EQUIPOTENTIAL PLANES — E = −ΔV/Δr';
    default:
      return null;
  }
}

/**
 * The label budget is 43 code units at 343x236 — `floor(0.88 * 343 / (12 *
 * 0.58))` — and every label above is written to fit it. This is the backstop
 * for when one is not, and it exists because the first version of this
 * function did a bare `slice` and two labels were over budget:
 *
 *   "COAXIAL GAUSSIAN CYLINDER — CAPS CARRY NO FLUX"      46  ->  "…NO F"
 *   "PILLBOX OFF THE SHEET — IN ONE CAP, OUT THE OTHER, Φ = 0"
 *                                                        56  ->  "…OUT THE"
 *
 * Both were live in the checked-in trees and the gate passed them, because a
 * slice makes the text FIT — assertion 3 has nothing to complain about. The
 * second one had dropped "Φ = 0", which is the whole assertion of the figure.
 * Found by a verifier that measured the labels rather than looking at them.
 *
 * So: taper with `READOUT_ELLIPSIS`, the same mark `chrome.fitReadout` uses,
 * so a cut announces itself instead of reading as a complete phrase that
 * happens to end oddly. Trailing space is trimmed so a cut landing on one
 * gives "PILLBOX…" rather than "PILLBOX …".
 */
function fitLabel(label: string, width: number): string {
  const cap = maxChars(width, ANNOTATION_LABEL_SIZE, label);
  if (label.length <= cap) return label;
  if (cap <= 1) return cap === 1 ? READOUT_ELLIPSIS : '';
  return label.slice(0, cap - 1).trimEnd() + READOUT_ELLIPSIS;
}

/**
 * The readout's VALUE half, per configuration. Terms are joined with
 * `READOUT_SEP` so `chrome.fitReadout` can drop a whole term at a narrow
 * board rather than cutting a number away from its unit — the defect
 * chrome.ts documents as `τ 100` for `τ 100 ms`. The order is the priority
 * order: what survives at 343x236 is what the figure is FOR.
 */
function readoutValue(p: FieldLinesParams, d: ReturnType<typeof deriveFieldLines>): string {
  if (isGaussian(p.configuration)) {
    return [
      `Qenc ${formatCharge(d.enclosedChargeUc)} µC`,
      `Φ ${formatField(d.flux)} V·m`,
      `E ${formatField(d.fieldMagnitude)} N/C`,
      sourceTerm(p),
    ].join(READOUT_SEP);
  }
  if (p.configuration === 'equipotential_point' || p.configuration === 'equipotential_uniform') {
    return [
      `ΔV ${formatField(d.potentialStepV)} V`,
      `E ${formatField(d.fieldMagnitude)} N/C`,
      `${p.configuration === 'equipotential_point' ? equipotentialRadiiM().length : equipotentialPlaneXsM().length} surfaces`,
      sourceTerm(p),
    ].join(READOUT_SEP);
  }
  /*
   * v1's exact string, four-space separator and all — `fitReadout` returns a
   * value unchanged when it fits and a caption of '' adds nothing, so routing
   * v1 through it is a no-op that buys v1 configurations the caption they
   * never had.
   *
   * ONE THING IN IT CHANGED, 2026-09-06, and the goldens moved with it:
   * `lines N` now prints the lines in the FIGURE, where it used to print the
   * lines per seeding source. Only `like_charges` renders differently — it is
   * the only configuration with two sources — and it went from `lines 10`,
   * beside twenty curves, to `lines 20`.
   *
   * `lines 20` rather than `10 per charge`, deliberately: `lines` means the
   * same thing in all four v1 configurations this way, and the total is the
   * one number a student can check by counting the board. A second grammar
   * for one configuration would put the readouts of `point` and
   * `like_charges` in different units of meaning under the same word, which
   * is the mismatch class CLAUDE.md's `{{derived}}`-token rule exists to make
   * impossible. `derivedAliases.lineCount` carries the same total to
   * narration, so Drona cannot say ten over a board showing twenty.
   *
   * IT FITS THE SMALLEST BOARD, which is the only board that could refuse it:
   * `like_charges` has E = 0 exactly, so its whole value half is
   * "E 0 N/C    lines 20" — 19 code units against a 37-unit budget at 343x236
   * (`floor(0.88 * 343 / (14 * 0.58))`) — and "lines 40", the widest this
   * string ever gets at the top of the legal range, is the same 19. The count
   * therefore never reaches `fitReadout`'s taper, which matters more than the
   * slack suggests: a count that had to be elided to be printed would be a
   * worse defect than the one this fixed. Asserted in
   * __tests__/render-v2.test.tsx off the rendered tree, not left as
   * arithmetic in a comment.
   */
  return `E ${formatField(d.fieldMagnitude)} N/C    lines ${d.lineCount}`;
}

interface SceneLine {
  d: string;
  arrow?: { x: number; y: number; angle: number };
}

function FieldLines({ params, width, height, theme }: WidgetRenderProps<FieldLinesParams>) {
  /*
   * Static scaffolding. Computed from `width`/`height` only — never from
   * `params.charge_uc` and never from `params.surface_scale` — so the scale
   * holds still regardless of how many lines a cue asks for or how big it
   * grows the Gaussian surface. Growing the surface while the world scale
   * silently rescaled to fit it would show the surface NOT growing, which is
   * the one thing P12Ch01Sec53's "flux is independent of radius" cannot
   * afford. `WORLD_HALF_*` is fixed and already holds the largest legal
   * surface, so no rescale is needed or wanted.
   */
  const frame = useMemo(() => {
    const left = width * PAD_SIDE_FRAC;
    const right = width * (1 - PAD_SIDE_FRAC);
    const top = TOP_MARGIN_PX;
    const bottom = height * (1 - PAD_BOTTOM_FRAC);
    const plotW = right - left;
    const plotH = bottom - top;
    const cx = (left + right) / 2;
    const cy = (top + bottom) / 2;
    const pxPerM = Math.min(plotW / (2 * WORLD_HALF_W), plotH / (2 * WORLD_HALF_H));
    return { left, right, top, bottom, cx, cy, pxPerM };
  }, [width, height]);

  const toPx = React.useCallback(
    (wx: number, wy: number): [number, number] => [
      frame.cx + wx * frame.pxPerM,
      frame.cy + wy * frame.pxPerM,
    ],
    [frame]
  );

  const d = useMemo(() => deriveFieldLines(params), [params]);

  const scene = useMemo(() => {
    const charges = chargesFor(params);
    // Chrome distance, converted to world metres at render time — never the
    // reverse. See the SEED_GAP comment above.
    const seedGapWorld = (CHARGE_GLYPH_R + SEED_GAP) / frame.pxPerM;
    const absorbR = seedGapWorld;
    // ONE spelling of the per-source count, shared with `deriveFieldLines`.
    // The readout's `lines N` is `linesPerSource * seedingSourceCount`, so a
    // change here cannot leave the number that describes the figure behind.
    const numLines = linesPerSource(params);
    const lines: SceneLine[] = [];

    const toArrow = (mid: readonly [number, number], next: readonly [number, number]) => ({
      x: frame.cx + mid[0] * frame.pxPerM,
      y: frame.cy + mid[1] * frame.pxPerM,
      angle: Math.atan2(next[1] - mid[1], next[0] - mid[0]),
    });

    if (params.configuration === 'parallel_plates') {
      const rowSpan = WORLD_HALF_H * 1.2;
      for (let i = 0; i < numLines; i++) {
        const t = numLines === 1 ? 0.5 : i / (numLines - 1);
        const y = -rowSpan / 2 + t * rowSpan;
        const pts: Array<[number, number]> = [
          [-PLATE_GAP_M / 2, y],
          [PLATE_GAP_M / 2, y],
        ];
        lines.push({
          d: pathFromWorldPoints(pts, frame.cx, frame.cy, frame.pxPerM),
          arrow: { x: frame.cx, y: frame.cy + y * frame.pxPerM, angle: 0 },
        });
      }
    } else if (
      params.configuration === 'gaussian_cylinder' ||
      params.configuration === 'gaussian_pillbox' ||
      params.configuration === 'equipotential_point' ||
      params.configuration === 'equipotential_uniform'
    ) {
      // These four draw no TRACED field lines at all, and `lineCount` says so
      // — derive returns 0 for every one of them. The E vectors they do draw
      // are surface arrows, counted and positioned by physics.ts, never by
      // this loop. A configuration that reported a line count it did not draw
      // would be the "reporting 0 while drawing it" defect in reverse.
    } else {
      for (const charge of charges) {
        if (charge.q <= 0) continue; // field lines originate on positive sources only
        const isDipole = params.configuration === 'dipole';
        const other = charges.find((c) => c !== charge);
        const baseAngle =
          isDipole && other ? Math.atan2(other.y - charge.y, other.x - charge.x) : 0;
        // Dipole lines are seeded across an arc facing the other charge, so
        // every traced line curves to its termination inside this widget's
        // fixed world box. All flux from a positive charge does reach the
        // equal-and-opposite negative charge physically, but a line seeded
        // facing away would have to loop far outside a diagram this size —
        // representative, not exhaustive. Point, like_charges and
        // gaussian_sphere seed the full circle; those lines never double back.
        const spreadRad = isDipole ? (165 * Math.PI) / 180 : 2 * Math.PI;
        for (let i = 0; i < numLines; i++) {
          const angle = isDipole
            ? baseAngle + (numLines === 1 ? 0 : (i / (numLines - 1) - 0.5) * spreadRad)
            : (i / numLines) * spreadRad;
          const start = {
            x: charge.x + Math.cos(angle) * seedGapWorld,
            y: charge.y + Math.sin(angle) * seedGapWorld,
          };
          const pts = traceFieldLine(charges, start, WORLD_HALF_W, WORLD_HALF_H, absorbR);
          let arrow: SceneLine['arrow'];
          if (pts.length > 3) {
            const mIdx = Math.floor(pts.length * 0.45);
            arrow = toArrow(pts[mIdx], pts[Math.min(pts.length - 1, mIdx + 1)]);
          }
          lines.push({ d: pathFromWorldPoints(pts, frame.cx, frame.cy, frame.pxPerM), arrow });
        }
      }
    }

    return { charges, lines };
  }, [params, frame]);

  /** Dashed construction geometry: the Gaussian surface, or the point-charge
   *  equipotential contours. Both are closed polylines in world metres. */
  const surfacePaths = useMemo(() => {
    if (isGaussian(params.configuration)) {
      return gaussianSurfacePolylines(params).map((pts) =>
        pathFromWorldPoints(pts, frame.cx, frame.cy, frame.pxPerM)
      );
    }
    if (params.configuration === 'equipotential_point') {
      // The SAME polyline builder the Gaussian sphere uses, not a second copy
      // of the circle. A contour and a Gaussian sphere are the same shape
      // drawn for different reasons, and two spellings of one circle is how
      // chrome.ts's drift list started.
      return equipotentialRadiiM().map((r) =>
        pathFromWorldPoints(ellipsePolyline(0, 0, r, r), frame.cx, frame.cy, frame.pxPerM)
      );
    }
    return [];
  }, [params, frame]);

  /** E vectors drawn ON a Gaussian surface, or crossing the equipotentials. */
  const vectors = useMemo(() => {
    if (!params.show_arrows) return [];
    if (isGaussian(params.configuration)) {
      return surfaceArrows(params).map((a) => {
        const [x, y] = toPx(a.x, a.y);
        return { x, y, angle: a.angle };
      });
    }
    if (params.configuration === 'equipotential_point') {
      // Radial, halfway between the two outermost contours, so each arrow
      // crosses a contour at a right angle — the claim the figure makes.
      const radii = equipotentialRadiiM();
      const r = (radii[0] + radii[1]) / 2;
      return Array.from({ length: 8 }, (_, i) => {
        const t = (i / 8) * 2 * Math.PI;
        const [x, y] = toPx(r * Math.cos(t), r * Math.sin(t));
        return { x, y, angle: t };
      });
    }
    if (params.configuration === 'equipotential_uniform') {
      // A uniform field: identical arrows everywhere, perpendicular to every
      // plane. Two rows so the eye reads "the same at every height", and one
      // arrow per GAP rather than per plane — an arrow ON a plane would sit
      // where the dl of Fig 2.1 goes and read as the displacement, not the
      // field. The gaps are derived from the plane positions rather than
      // written out, so a change to PLANE_GAP_M cannot leave them behind.
      const xs = equipotentialPlaneXsM();
      const out: { x: number; y: number; angle: number }[] = [];
      for (const wy of [-WORLD_HALF_H * 0.45, WORLD_HALF_H * 0.45]) {
        for (let i = 0; i + 1 < xs.length; i++) {
          const [x, y] = toPx((xs[i] + xs[i + 1]) / 2, wy);
          out.push({ x, y, angle: 0 });
        }
      }
      return out;
    }
    return [];
  }, [params, toPx]);

  const neutral = neutralPointWorld(params);
  const termination = terminationPointWorld(params);
  const showNeutral = neutral && params.annotate === 'neutral_point';
  const showTermination = termination && params.annotate === 'termination';
  const label = surfaceLabel(params);

  const wireY = params.enclosed ? 0 : -WIRE_OUTSIDE_Y_M;
  const readoutWidth = frame.right - frame.left;

  return (
    <Svg width={width} height={height}>
      {scene.lines.map((line, i) => (
        <G key={`line${i}`}>
          <Path
            d={line.d}
            fill="none"
            stroke={theme.accent}
            strokeWidth={FIELD_LINE_STROKE}
            strokeLinecap="round"
          />
          {params.show_arrows && line.arrow && (
            <Path d={dirArrowHead(line.arrow.x, line.arrow.y, line.arrow.angle)} fill={theme.accent} />
          )}
        </G>
      ))}

      {params.configuration === 'parallel_plates' ? (
        <G>
          <Line
            x1={frame.cx - (PLATE_GAP_M / 2) * frame.pxPerM}
            y1={frame.top}
            x2={frame.cx - (PLATE_GAP_M / 2) * frame.pxPerM}
            y2={frame.bottom}
            stroke={theme.ink}
            strokeWidth={PLATE_STROKE}
          />
          <Line
            x1={frame.cx + (PLATE_GAP_M / 2) * frame.pxPerM}
            y1={frame.top}
            x2={frame.cx + (PLATE_GAP_M / 2) * frame.pxPerM}
            y2={frame.bottom}
            stroke={theme.ink}
            strokeWidth={PLATE_STROKE}
          />
        </G>
      ) : (
        scene.charges.map((c, i) => {
          const cx = frame.cx + c.x * frame.pxPerM;
          const cy = frame.cy + c.y * frame.pxPerM;
          return (
            <G key={`charge${i}`}>
              <Circle cx={cx} cy={cy} r={CHARGE_GLYPH_R} fill={c.q >= 0 ? theme.accent : theme.ink} />
              <SvgText
                x={cx}
                y={cy + CHARGE_LABEL_SIZE * 0.35}
                fontSize={CHARGE_LABEL_SIZE}
                fill={theme.surface}
                fontFamily={theme.monoFontFamily}
                textAnchor="middle"
              >
                {c.q >= 0 ? '+' : '−'}
              </SvgText>
            </G>
          );
        })
      )}

      {/* The SOURCE a Gaussian surface is drawn around, when the source is not
          a point charge: an infinite wire (P12Ch01Sec55) or an infinite sheet
          (P12Ch01Sec56). Both are drawn running off the plot edge, because
          both are infinite and a wire that stops inside the frame is a
          different problem with a different answer. */}
      {params.configuration === 'gaussian_cylinder' && (
        <Line
          x1={frame.left}
          y1={frame.cy + wireY * frame.pxPerM}
          x2={frame.right}
          y2={frame.cy + wireY * frame.pxPerM}
          stroke={theme.ink}
          strokeWidth={PLATE_STROKE}
        />
      )}
      {params.configuration === 'gaussian_pillbox' && (
        <Line
          x1={frame.cx}
          y1={frame.top}
          x2={frame.cx}
          y2={frame.bottom}
          stroke={theme.ink}
          strokeWidth={PLATE_STROKE}
        />
      )}

      {/* The equipotential PLANES of Fig 2.1. Equally spaced, because E is
          uniform — the visual contrast with `equipotential_point`, whose
          contours crowd, is the entire lesson of the pair. */}
      {params.configuration === 'equipotential_uniform' &&
        equipotentialPlaneXsM().map((wx, i) => (
          <Line
            key={`plane${i}`}
            x1={frame.cx + wx * frame.pxPerM}
            y1={frame.top}
            x2={frame.cx + wx * frame.pxPerM}
            y2={frame.bottom}
            stroke={theme.inkMuted}
            strokeWidth={HAIRLINE_STROKE}
            strokeDasharray={SURFACE_DASH}
          />
        ))}

      {surfacePaths.map((sd, i) => (
        <Path
          key={`surface${i}`}
          d={sd}
          fill="none"
          stroke={theme.inkMuted}
          strokeWidth={HAIRLINE_STROKE}
          strokeDasharray={SURFACE_DASH}
        />
      ))}

      {vectors.map((v, i) => (
        <Path key={`vec${i}`} d={dirArrowHead(v.x, v.y, v.angle)} fill={theme.ink} />
      ))}

      {showNeutral && neutral && (
        <Circle
          cx={frame.cx + neutral.x * frame.pxPerM}
          cy={frame.cy + neutral.y * frame.pxPerM}
          r={ANNOTATION_MARKER_R}
          fill="none"
          stroke={theme.ink}
          strokeWidth={HAIRLINE_STROKE}
        />
      )}
      {showTermination && termination && (
        <Circle
          cx={frame.cx + termination.x * frame.pxPerM}
          cy={frame.cy + termination.y * frame.pxPerM}
          r={ANNOTATION_MARKER_R}
          fill="none"
          stroke={theme.ink}
          strokeWidth={HAIRLINE_STROKE}
        />
      )}
      {/* Annotation labels sit at a fixed corner, independent of the marker's
          geometry — pinning label text to a moving physical point risks it
          colliding with a charge glyph's own "+"/"-" label at that exact
          spot (this IS that spot, for `termination`). */}
      {showNeutral && (
        <SvgText
          x={frame.left}
          y={frame.bottom - 4}
          fontSize={ANNOTATION_LABEL_SIZE}
          fill={theme.inkMuted}
          fontFamily={theme.monoFontFamily}
        >
          NEUTRAL POINT — E = 0
        </SvgText>
      )}
      {showTermination && (
        <SvgText
          x={frame.left}
          y={frame.bottom - 4}
          fontSize={ANNOTATION_LABEL_SIZE}
          fill={theme.inkMuted}
          fontFamily={theme.monoFontFamily}
        >
          LINES TERMINATE HERE
        </SvgText>
      )}
      {label && (
        <SvgText
          x={frame.left}
          y={frame.bottom - 4}
          fontSize={ANNOTATION_LABEL_SIZE}
          fill={theme.inkMuted}
          fontFamily={theme.monoFontFamily}
        >
          {/* Fitted, not trusted to fit. `maxChars` needs the text because the
              width model is script-dependent — the defect two verifiers found
              in the same week. These labels are Latin today; measuring them
              through the same function the gate measures them with is what
              keeps that true rather than assumed. */}
          {fitLabel(label, readoutWidth)}
        </SvgText>
      )}

      <SvgText
        x={frame.left}
        y={TOP_MARGIN_PX - READOUT_SIZE * 0.5}
        fontSize={READOUT_SIZE}
        fill={theme.ink}
        fontFamily={theme.monoFontFamily}
      >
        {fitReadout(params.caption, readoutValue(params, d), readoutWidth)}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const fieldLines: WidgetModule<FieldLinesParams> = {
  id: 'field_lines',
  /**
   * v2 — GAUSSIAN SURFACES AND EQUIPOTENTIAL CONTOURS.
   *
   * WHY, MEASURED. A reclassification read from the book's own chunks gave
   * v1 ZERO verdicts across all 139 physics-12 concepts while the old
   * name-based column claimed it 41 times: v1 drew four static field-line
   * pictures and Chapters 1 and 2 draw Gaussian surfaces and equipotentials.
   * v2 adds the five configurations those rows name, and the readout the
   * figures exist for — Q_enc and Φ = Q_enc/ε₀. See physics.ts's header for
   * the gap rows and their evidence.
   *
   * v1 PAYLOADS STILL RESOLVE AND RENDER IDENTICALLY. `lookup()` refuses only
   * `version > mod.version`, so every field_lines@1 payload in the corpus
   * still reaches this module; each new key defaults to the v1 behaviour and
   * `__golden__/golden.test.tsx` feeds four raw v1 payloads through v2's
   * validate() and asserts the tree against bytes frozen before this change.
   */
  version: 2,
  defaults: {
    configuration: 'point',
    charge_uc: 10,
    surface_scale: 1,
    enclosed: true,
    show_arrows: true,
    annotate: null,
    caption: '',
  },
  /**
   * Still empty, and the v1 reason has been JOINED by a second one rather
   * than replaced.
   *
   * v1's reason: `charge_uc` drives line COUNT, and tweening a count means
   * Path elements appearing and disappearing mid-tween — a snap wearing an
   * animation's clothes.
   *
   * v2's reason: `surface_scale` genuinely could tween — the dashed surface
   * is a Path and Paths are where animated geometry belongs. What stops it is
   * that the E vectors sit ON that surface, so they must move with it, and
   * building an arrowhead inside a worklet means either marking
   * `chrome.dirArrowHead` a worklet (a change to shared chrome, out of scope
   * for the commit that added this) or writing a second arrowhead here — the
   * exact duplication chrome.ts's own header records as drift item 3, which
   * is what that file was extracted to end. An animation whose arrows stayed
   * behind while the surface grew would be a wrong diagram, not a slightly-off
   * one, which is the same test CLAUDE.md applies to a label on a swinging
   * bond.
   *
   * So a cue changes `surface_scale` by SNAP, and P12Ch01Sec53's "double the
   * radius, the flux does not move" is delivered as two board events with the
   * same Φ rather than one tween. That is the sanctioned pattern, not a
   * workaround: CLAUDE.md's params/motion section names whole widget families
   * that ship this way.
   */
  animatable: [],
  derived: ['fieldMagnitude', 'lineCount', 'enclosedChargeUc', 'flux', 'potentialStepV'],
  computeDerived: deriveFieldLines,
  derivedAliases: {
    fieldMagnitude: ['field', 'field strength', 'field magnitude', 'how strong', 'stronger', 'weaker'],
    lineCount: ['lines', 'line count', 'more lines', 'fewer lines', 'density', 'how many lines'],
    enclosedChargeUc: [
      'enclosed charge', 'charge enclosed', 'charge inside', 'q enclosed',
      'how much charge', 'more charge', 'less charge',
    ],
    flux: ['flux', 'net flux', 'total flux', 'electric flux', 'more flux', 'less flux', 'unchanged'],
    potentialStepV: [
      'potential step', 'potential difference', 'voltage step', 'delta v',
      'higher potential', 'lower potential',
    ],
  },
  validate,
  Component: FieldLines,
};

export type { FieldLinesConfiguration, FieldLinesParams };
/** The schema's own bounds, re-exported so a caller outside `lib/widgets/`
 *  (app/dev-widget-preview.tsx) can stay inside the schema by construction
 *  instead of by a copied literal that `validate()` now refuses to fix. */
export { CHARGE_UC_MAX, CHARGE_UC_MIN } from './physics';
