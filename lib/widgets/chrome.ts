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
 *
 * NO DEVANAGARI SHIPS TODAY, AND THIS STAYS ANYWAY.
 *
 * The app has exactly two language modes, from lib/preferences.ts:
 *
 *     LanguageId = 'hinglish' | 'english'      // default hinglish
 *
 * and hinglish is romanised LATIN — "Chalo shuru karte hain", from the API's
 * persona.py. There is no Devanagari string in either repo outside test
 * fixtures. (The app does load AnekDevanagari_500Medium for the classroom
 * caption strip, but that family renders Latin too; a Devanagari FACE being
 * loaded is not evidence Devanagari TEXT is ever shown.) So this constant
 * guards a path nothing in the product can currently reach.
 *
 * It stays because it costs nothing while nothing reaches it, and because the
 * error class it catches is real and recurring: two independent verifiers hit
 * the same width bug in one week, from opposite directions (molecule_struct's
 * label, circuit_network's caption). Hindi-medium students read Devanagari
 * textbooks, so the day a subject author turns figure labels Devanagari, this
 * is the only thing between them and a label off the board.
 *
 * ONE fixture keeps it honest: test/fixtures/deva-labels-collide.json, which
 * exits 0 under the flat Latin model and 1 under this one. That fixture is
 * load-bearing — it is what proves this branch is still LIVE rather than dead
 * code that happens to compile. Do not add per-widget Devanagari fixtures on
 * top of it; they would assert a script the product does not ship, and the
 * realistic untested case is the opposite one — a HINGLISH caption, which is
 * Latin and systematically LONGER than its English equivalent.
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

/**
 * How many code units of `text` fit in `width`.
 *
 * `text` IS REQUIRED, and that is the fix for a defect two independent
 * verifiers found in the same week from opposite directions (molecule_struct's
 * Hindi label, circuit_network's Hindi caption). This function used to take
 * only a width and a font size, so it could not see the script and hardcoded
 * the Latin `CHAR_W`. `textWidth` right above measures the SAME string at
 * `CHAR_W_DEVA`, and so does scripts/verify-render.mjs. A Devanagari readout
 * was therefore budgeted 29% more characters than it could hold, sliced to
 * that budget, and ran off the board -- a hard gate error that `validate()`
 * cheerfully admitted, on every widget that renders a readout.
 *
 * An optional parameter defaulting to Latin would have kept every existing
 * call site compiling and silently wrong: a check that passes because it was
 * never told. There are three call sites. They are all updated.
 */
export function maxChars(width: number, fontSize: number, text: string): number {
  return Math.max(0, Math.floor(width / (fontSize * charWidthFor(text))));
}

/** The gap between a readout's caption and the value it introduces. */
export const READOUT_SEP = '   ';

/**
 * Marks a caption that was cut. U+2026, ONE UTF-16 code unit — so both
 * `textWidth` here and scripts/verify-render.mjs charge it exactly one
 * character width, the same as the character it replaces.
 */
export const READOUT_ELLIPSIS = '\u2026';

/**
 * Fit a readout into `width`, keeping the part that carries the number.
 *
 * The font stays fixed — it is chrome. What varies with the box is how many
 * characters fit, and treating a readout string as width-independent is what
 * ran data_table_trend's caption off the board at 495x270 and 343x236 while it
 * looked fine at 900x430. Shrinking the font instead would be the other bug.
 *
 * `value` is never dropped; `caption` gives up its characters first.
 *
 * THE CAPTION TAPERS. IT DOES NOT FALL OFF A CLIFF.
 *
 * This used to read
 *
 *     const room = cap - v.length - 3;
 *     const prefix = room > 4 ? `${caption.slice(0, room)}   ` : '';
 *
 * and `room > 4` is a threshold, not a taper: at `room` 5 the caption showed
 * five characters and at `room` 4 it showed none. One extra character in the
 * VALUE deleted five characters of caption. Observed live on circuit_network's
 * metre bridge at 343x236 the day r_eq was corrected for the unbalanced case:
 * the value went from 31 code units to 32, `room` went 5 -> 4, and
 *
 *     - "Metre   Req 4.5 Ω   I 444 mA   X 5.21 Ω"      39 of 39 used
 *     + "Req 4.48 Ω   I 446 mA   X 5.21 Ω"             32 of 39 used
 *
 * The caption did not shrink to fit. It vanished, and left seven character
 * widths of the board blank while doing it — which is the tell that the
 * threshold was never about space.
 *
 * WHY A TAPER WITH AN ELLIPSIS, AND WHY NO FLOOR AT ALL.
 *
 * The four candidate behaviours are a lower floor, a taper, an ellipsis, and
 * an explicit "below N characters a caption is worse than none" rule. Any
 * floor N keeps the discontinuity and merely moves it: at `room` = N the
 * caption still disappears N characters at a time. So the question is whether
 * a very short caption is worth its space, and the answer turns on a fact
 * about WHERE that space comes from:
 *
 *   the caption is only ever allocated width the VALUE DID NOT NEED.
 *
 * `room` is what is left after the whole value and the separator are paid for.
 * Spending it costs the numbers nothing — the alternative is not a longer
 * number, it is blank board. So there is no width argument for a floor, only
 * a legibility one: a bare two-character stub reads as a unit or a variable
 * ("Me   Req 4.48 Ω" looks like a quantity called Me). That objection is
 * about AMBIGUITY, not length, and an ellipsis answers it exactly — "Me…"
 * cannot be read as a symbol, it reads as prose that was cut, which is what
 * it is. The reader learns the caption was elided instead of being shown a
 * complete-looking line that is silently missing one.
 *
 * So the caption degrades one character at a time, ending at a bare "…", and
 * only then at "". Every step is a single character, in both directions, and
 * the value is byte-for-byte unaffected at every step. That is the whole
 * property the old threshold lacked.
 *
 * THE VALUE NEVER LOSES A DIGIT, AND THAT USED TO BE FALSE.
 *
 * "the caption gives up its characters first" was only half a contract: it
 * said what happens while there IS a caption to give up, and said nothing
 * about the case where the value alone overruns the board. That case did a
 * bare `value.slice(0, cap)`, mid-term, and it is live in the checked-in
 * trees. circuit_network's RC and LCR payloads at 343x236:
 *
 *     900x430   "RC charging   Req 20 kΩ   Ceq 5 µF   I 600 µA   τ 100 ms"
 *     343x236   "Req 20 kΩ   Ceq 5 µF   I 600 µA   τ 100"
 *
 * The cut landed inside the last term and took the UNIT with it. `τ 100` is
 * not a shortened `τ 100 ms`; it is 100 seconds, wrong by a factor of 1000,
 * and it reads as a complete number. Same for LCR's `τ 3.2` (3.2 ms). Nothing
 * caught it: the string fits the board, so scripts/verify-render.mjs is right
 * to pass it — the defect is semantic and lives above the gate.
 *
 * So the value is cut at TERM boundaries only. A term that will not fit is
 * dropped whole, and a missing term is visibly missing where a unit-stripped
 * number is silently wrong. The one remaining `slice` is a single term wider
 * than the entire board, which no policy can render honestly and which
 * xy_plot's `labelFitProblems` refuses in validate() rather than truncating.
 *
 * NOTE this is deliberately NOT fixed by narrowing the schema, which is
 * CLAUDE.md's usual instruction. Nothing here disagrees with the gate. The
 * payload is a real NCERT RC circuit and refusing it would be worse than
 * drawing it; what was wrong was the renderer's cut, not the schema's range.
 */
/**
 * The longest run of whole `READOUT_SEP`-separated terms of `value` that fits
 * in `cap` code units.
 *
 * Falls back to a hard slice ONLY when the first term alone is over budget —
 * there is no honest rendering of that, and it is the state xy_plot refuses in
 * validate(). Everywhere else the cut lands on a separator, so no term is ever
 * shown with part of itself missing.
 */
function trimToTerms(value: string, cap: number): string {
  const parts = value.split(READOUT_SEP);
  let out = '';
  for (const part of parts) {
    const next = out === '' ? part : `${out}${READOUT_SEP}${part}`;
    if (next.length > cap) break;
    out = next;
  }
  return out === '' ? value.slice(0, cap) : out;
}

export function fitReadout(
  caption: string,
  value: string,
  width: number,
  fontSize: number = READOUT_SIZE
): string {
  // Budget against the WIDER of the two scripts present. The caption and the
  // value are concatenated into one line, so one Devanagari code unit
  // anywhere makes the gate measure the whole string at CHAR_W_DEVA.
  const cap = maxChars(width, fontSize, caption + value);
  if (cap <= 0) return '';
  const v = value.length > cap ? trimToTerms(value, cap) : value;

  // Trimmed because a caption's own surrounding whitespace is not information,
  // and leading whitespace in particular shifts a start-anchored readout right
  // by however many spaces it happens to carry. An all-whitespace or empty
  // caption yields no prefix and no separator — the old code emitted three
  // leading spaces for `caption: ''`, which every widget defaults to.
  const head = caption.trim();
  const room = cap - v.length - READOUT_SEP.length;
  if (head.length === 0 || room <= 0) return v;

  const shown = room >= head.length
    ? head
    // `trimEnd` so a cut landing on a space gives "Metre…", not "Metre …".
    // It can only shorten `shown`, never lengthen it.
    : head.slice(0, room - 1).trimEnd() + READOUT_ELLIPSIS;

  // `shown.length <= room` by construction in both branches, so this slice is
  // provably a no-op. Kept as a backstop, not as the mechanism.
  return `${shown}${READOUT_SEP}${v}`.slice(0, cap);
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
