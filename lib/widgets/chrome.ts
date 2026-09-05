/**
 * Shared board chrome — the constants and helpers every widget draws with.
 *
 * WHY THIS FILE EXISTS. Six more widgets are being built against this
 * contract. Six independently chosen type scales is how a board stops looking
 * like one system, and three widgets had already drifted before this was
 * extracted (see DRIFT FOUND below). A new widget should import from here and
 * only define a constant of its own when it is genuinely about that widget's
 * subject matter.
 *
 * THE ONE RULE, from docs/small-screen-rendering-rules.md:
 *
 *   World constants scale with the board. Chrome constants never do.
 *
 * Everything in this file is CHROME, expressed in device points, and must not
 * be multiplied by a board dimension. A 12pt label is 12pt on a 343-wide board
 * and 12pt on a 900-wide one — that is the whole point. What legitimately
 * varies with the box is how much chrome FITS, which is what `maxChars` and
 * `fitToWidth` are for.
 *
 * DRIFT FOUND when this was extracted from field_lines, xy_plot and
 * data_table_trend. Each of these changed a rendered tree, and each was a
 * genuine inconsistency rather than a deliberate choice:
 *
 *   1. Emphasis stroke was 2.4 in field_lines (capacitor plates) and 2.6 in
 *      xy_plot (the curve). Same role — the primary drawn object. Unified to
 *      2.6, the more legible of the two at 343pt.
 *   2. field_lines drew its two annotation markers at a bare `strokeWidth={1.4}`
 *      — an unnamed literal, and BELOW the 1.5 hairline everything else treats
 *      as the thinnest safe line. Raised to HAIRLINE_STROKE.
 *   3. Arrowhead half-width was 3 in field_lines and 4 in data_table_trend,
 *      with the same 7pt length. Unified to 3.
 *   4. `PAD_SIDE` meant a FRACTION (0.06) in field_lines and DEVICE POINTS (12)
 *      in data_table_trend. Same name, different units, one import away from a
 *      silent 50x error. The fraction is a world quantity and stays local to
 *      field_lines under a name that says so; PAD_SIDE here is points.
 *   5. The readout band `READOUT_SIZE * 1.6 + 6` appeared three times under two
 *      names (`PAD_TOP`, `TOP_MARGIN_PX`). Now `READOUT_BAND`.
 */

/* ------------------------------------------------------------------ type */

/** Tick labels, axis titles, table cells, charge labels, annotations. */
export const LABEL_SIZE = 12;
/** The single derived-value line along the top of the board. */
export const READOUT_SIZE = 14;

/** Below this, text is not reliably legible at arm's length on a phone. */
export const MIN_FONT_SIZE = 11;

/* ---------------------------------------------------------------- stroke */

/** Gridlines, table rules, construction lines — the thinnest safe line. */
export const HAIRLINE_STROKE = 1.5;
/** Axes, field lines, arrows, markers — the default drawn line. */
export const LINE_STROKE = 1.6;
/** The primary object the diagram is ABOUT. One per board, usually. */
export const EMPHASIS_STROKE = 2.6;

/* ---------------------------------------------------------------- glyphs */

/** A charge, a body, a labelled entity the student reads as an object. */
export const GLYPH_R = 10;
/** An annotation ring calling out a location. */
export const MARKER_R = 5;
/** One observation in a dataset. */
export const DOT_R = 4;
/** A minor indicator — an anomaly flag, a tick dot. */
export const TICK_R = 3;

export const ARROW_LEN = 7;
export const ARROW_HALF_W = 3;

/**
 * Arrowheads as closed paths, from the one ARROW_LEN/ARROW_HALF_W pair.
 *
 * `dirArrowHead` points along an arbitrary angle and is CENTRED on (x,y) —
 * it was field_lines' file-local `arrowPath`, promoted here the moment a
 * third widget needed the same triangle. That is the condition this file was
 * extracted to satisfy, and a duplicated arrowhead is literally drift item 3
 * in the header above.
 *
 * `vArrowHead` is the axis-vertical case, TIP-anchored at (x, tipY) because
 * a vertical arrow is nearly always drawn to a known endpoint.
 */
export function dirArrowHead(x: number, y: number, angleRad: number): string {
  const hx = Math.cos(angleRad) * ARROW_LEN * 0.5;
  const hy = Math.sin(angleRad) * ARROW_LEN * 0.5;
  const nx = -Math.sin(angleRad) * ARROW_HALF_W;
  const ny = Math.cos(angleRad) * ARROW_HALF_W;
  return (
    `M${(x + hx).toFixed(2)} ${(y + hy).toFixed(2)}` +
    `L${(x - hx + nx).toFixed(2)} ${(y - hy + ny).toFixed(2)}` +
    `L${(x - hx - nx).toFixed(2)} ${(y - hy - ny).toFixed(2)}Z`
  );
}

export function vArrowHead(x: number, tipY: number, dir: 1 | -1): string {
  return (
    `M${x} ${tipY}` +
    `L${x - ARROW_HALF_W} ${tipY + ARROW_LEN * dir}` +
    `L${x + ARROW_HALF_W} ${tipY + ARROW_LEN * dir}Z`
  );
}

/* --------------------------------------------------------------- spacing */

/** Default breathing room between a container and the chrome inside it. */
export const PAD_SIDE = 12;
export const PAD_EDGE = 10;

/**
 * A horizontal band tall enough to hold one line of text at `fontSize`.
 *
 * This is the "container sized from the chrome it holds" rule as a function.
 * A band computed as a FRACTION of board height is the bug this replaces: it
 * over-reserves at 900pt and clips the text at 236pt.
 */
export function bandFor(fontSize: number, pad = 6): number {
  return fontSize * 1.6 + pad;
}

/** The reserved strip at the top of every board for its readout line. */
export const READOUT_BAND = bandFor(READOUT_SIZE);

/* ------------------------------------------------------------- text fit */

/**
 * Average glyph width as a fraction of font size.
 *
 * This is deliberately the SAME model scripts/verify-render.mjs uses for its
 * label-overlap assertion. If the two ever diverge, a widget can lay text out
 * to a width the checker disagrees with and either fail spuriously or, worse,
 * pass while overlapping on a device.
 */
export const CHAR_W = 0.58;

/**
 * Devanagari width guardrail. **UNMEASURED — this is not a measurement.**
 *
 * Nobody has measured Anek Devanagari's advance widths at 12pt. `CHAR_W`
 * (0.58) was fitted to Latin, and against Devanagari it is wrong in BOTH
 * directions at once on JavaScript `String.length` (UTF-16 code units):
 *
 *   OVER-counts  below/above-base matras have zero advance width. `मूल` is
 *                three code units and about two advance widths; `क्ष` is
 *                three code units and renders as one conjunct ligature.
 *   UNDER-counts Devanagari base glyphs at 12pt are wider than the Latin
 *                average 0.58 was fitted to, and the shirorekha runs the
 *                full advance.
 *
 * The errors partly cancel, unpredictably, per string — so the fix is NOT a
 * retuned constant, and 0.75 is not one. It is a deliberate OVER-estimate,
 * chosen because the two failure directions are not symmetric: under-estimating
 * width makes scripts/verify-render.mjs UNDER-report collisions, so it passes
 * CI and overlaps on a device; over-estimating fails loudly in CI and costs
 * only a shorter term. Over-estimating is the safe way to be wrong.
 *
 * The real fix is a measured per-glyph advance table, checked in with a
 * fixture that fails against the Latin model. Until someone measures it, do
 * not describe this number as measured anywhere, and do not "tune" it —
 * a tuned guardrail is a measurement nobody took.
 *
 * Like `CHAR_W`, this is deliberately the SAME constant scripts/verify-render.mjs
 * uses. If the two diverge, a widget can lay text out to a width the checker
 * disagrees with and either fail spuriously or, worse, pass while overlapping.
 */
export const CHAR_W_DEVA = 0.75;

/** Devanagari block, U+0900–U+097F. */
const DEVANAGARI_RE = /[\u0900-\u097F]/;

/** True if `text` contains any Devanagari — the trigger for the guardrail above. */
export function hasDevanagari(text: string): boolean {
  return DEVANAGARI_RE.test(text);
}

/** The per-code-unit width fraction this string is measured with. */
export function charWidthFor(text: string): number {
  return hasDevanagari(text) ? CHAR_W_DEVA : CHAR_W;
}

export function textWidth(text: string, fontSize: number): number {
  return text.length * fontSize * charWidthFor(text);
}

export function maxChars(width: number, fontSize: number): number {
  return Math.max(0, Math.floor(width / (fontSize * CHAR_W)));
}

/**
 * Fit a readout into `width`, keeping the part that carries the number.
 *
 * The font stays fixed — it is chrome. What varies with the box is how many
 * characters fit, and treating a readout string as width-independent is what
 * ran data_table_trend's caption off the board at 495x270 and 343x236 while it
 * looked fine at 900x430. Shrinking the font instead would be the other bug.
 *
 * `value` is never dropped; `caption` gives up its characters first.
 */
export function fitReadout(
  caption: string,
  value: string,
  width: number,
  fontSize: number = READOUT_SIZE
): string {
  const cap = maxChars(width, fontSize);
  if (cap <= 0) return '';
  const v = value.length > cap ? value.slice(0, cap) : value;
  const room = cap - v.length - 3;
  const prefix = room > 4 ? `${caption.slice(0, room)}   ` : '';
  return `${prefix}${v}`.slice(0, cap);
}

/* -------------------------------------------------------------- labels */

/**
 * Where an annotation label goes.
 *
 * NOT at the point it describes. field_lines learned this the expensive way:
 * a label pinned to a neutral point sits exactly where a charge glyph's own
 * "+" already is, and verify-render treats overlapping text as a hard error.
 * Corner-pinning is collision-proof by construction, needs no halo, and no
 * paint-order trickery — which is why there is no halo helper in this file.
 *
 * DO NOT HALO BY DRAWING THE TEXT TWICE. That advice was here and it was
 * wrong: verify-render's overlap test is
 *     a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1
 * and for two IDENTICAL boxes every term is true, so a halo drawn as the same
 * string at the same x/y fails assertion 4 against itself —
 * `labels collide: "Labrum" and "Labrum"`. Verified empirically 2026-09-05.
 *
 * When a label MUST sit on dense ink, draw a filled `Rect` plate behind it
 * instead: fill only, no stroke, so it stays clear of the 1.2 stroke floor,
 * and it is ONE element rather than a second copy of the text.
 */
export type LabelCorner = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export function cornerAnchor(
  corner: LabelCorner,
  box: { left: number; right: number; top: number; bottom: number },
  fontSize: number = LABEL_SIZE
): { x: number; y: number; textAnchor: 'start' | 'end' } {
  const bottom = corner.startsWith('bottom');
  return {
    x: corner.endsWith('left') ? box.left : box.right,
    y: bottom ? box.bottom - 4 : box.top + fontSize,
    textAnchor: corner.endsWith('left') ? 'start' : 'end',
  };
}
