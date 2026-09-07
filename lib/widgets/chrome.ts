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
 * How wide a string will be, before anything is laid out.
 *
 * THE NUMBERS ARE MEASURED. THE MARGIN IS NOT PART OF THEM.
 *
 * This used to be two hand-picked constants:
 *
 *     CHAR_W      = 0.58     "fitted to Latin, family-agnostic"
 *     CHAR_W_DEVA = 0.75     labelled, in capitals, UNMEASURED
 *
 * Both are gone. `lib/widgets/advance-widths.json` is generated by
 * `python3 scripts/measure-advance-widths.py` straight from the .ttf files in
 * node_modules, per family and per weight, and this file does arithmetic on
 * it and nothing else.
 *
 * WHY THE OLD NUMBER STOPPED BEING SAFE. 0.58 was picked against Anek Latin,
 * which measures 0.4955 at 400 and 0.5261 at 700 — so it over-estimated by
 * 17%, and that 17% was the entire safety cushion the board's layout had. The
 * app is moving to Onest, which measures 0.5697 at 400. The same 0.58
 * over-estimates Onest by 1.8%. Nothing about the layout changed; the cushion
 * simply evaporated under the family swap, silently, which is the argument
 * for measuring rather than fitting.
 *
 * WHAT THE MARGIN IS AND IS NOT. `SAFETY_MARGIN` is 5% on top of the measured
 * mean, and it is deliberately a separate named factor rather than folded
 * into the numbers, so the next reader can see which half is measurement and
 * which half is insurance. It is NOT enough to make this an upper bound for
 * an arbitrary string: the Latin figure is a MEAN over 67 glyphs, and 'W' in
 * Onest 400 is 0.983 em — 73% above that mean. A caption of nothing but
 * capitals will be wider than this model says. What the margin covers is the
 * ordinary case: mixed-case prose, digits, units. `scripts/check-advance-model.py`
 * measures the actual error over every label in `build/trees` rather than
 * asserting the margin is enough.
 *
 * PER SCRIPT, WITHIN ONE STRING. A label may mix scripts, and the old model
 * chose ONE width for the whole string on `hasDevanagari(s)` — so a single
 * Devanagari code unit re-priced every Latin character in the caption. Here
 * each code unit is priced by the face that will actually draw it:
 * Devanagari from Anek Devanagari's own table (it is the only Devanagari face
 * the app loads, so the declared family is irrelevant for those code units —
 * Onest has no Devanagari coverage at all), everything else from the declared
 * family's Latin mean.
 *
 * IDENTICAL TO scripts/verify-render.mjs, BY CONSTRUCTION AND NOT BY COMMENT.
 * The two used to hold duplicate literals with a comment in each asking the
 * next person to keep them in step. They now read the same generated JSON. If
 * the widget lays text out to one width and the checker measures another, a
 * widget can pass CI while overlapping on a device — that is the failure this
 * arrangement makes structurally impossible rather than merely discouraged.
 */
import ADVANCE from './advance-widths.json';

const LATIN_ADVANCE: Readonly<Record<string, number>> = ADVANCE.latin;
const DEVA_ADVANCE: Readonly<Record<string, number>> = ADVANCE.devanagari;

/**
 * 5% headroom over the measured mean. NOT a measurement — see above.
 *
 * Lives in the generated JSON so chrome.ts and verify-render.mjs cannot
 * disagree about it either, but it is its own field there, never multiplied
 * into a width.
 */
export const SAFETY_MARGIN = ADVANCE.safetyMargin;

/**
 * The family assumed when a caller does not say which one it draws in.
 *
 * It is the WIDEST family in the table (Menlo, 0.6021 — and also, as it
 * happens, the family most widget text is actually drawn in, since
 * `theme.monoFontFamily` carries every readout and tick label). An unspecified
 * or unrecognised family therefore OVER-estimates, which fails loudly in CI,
 * rather than under-estimating, which passes CI and overlaps on a device.
 *
 * This is the reason the parameter is allowed to have a default at all.
 * chrome.ts's previous fix in this area made `maxChars`'s `text` argument
 * REQUIRED precisely because an optional parameter defaulting to the NARROW
 * case keeps every stale call site compiling and silently wrong. Defaulting
 * to the widest inverts that: a stale call site is conservative, not wrong.
 */
export const FALLBACK_FAMILY = ADVANCE.latinFallbackFamily;

/** The one Devanagari face the app loads. Named for the doc comments below. */
export const DEVANAGARI_FAMILY = ADVANCE.devanagariFamily;

/**
 * The widest single Devanagari advance in the table, with the margin.
 *
 * Two jobs. It prices a codepoint in the block that the face does not map (so
 * an unknown glyph is charged the most it could possibly cost, not the least),
 * and it is the honest answer to "what is the worst a Devanagari code unit can
 * be" for a caller that needs one number instead of a string — which is what
 * `labelled-figure`'s `MAX_TERM_DEVA` reference point wants.
 *
 * It is NOT a replacement for `CHAR_W_DEVA`. That constant was applied to
 * whole strings and was a guess; this is a measured maximum, and every real
 * string is measured per code unit rather than at this rate.
 */
export const DEVA_MAX_CHAR_W = Math.max(...Object.values(DEVA_ADVANCE)) * ADVANCE.safetyMargin;

/** Unmargined maximum, for pricing an unmapped codepoint inside `advanceEm`. */
const DEVA_MAX = Math.max(...Object.values(DEVA_ADVANCE));

/** Devanagari block, U+0900–U+097F. */
const DEVANAGARI_RE = /[ऀ-ॿ]/;

/** True if `text` contains any Devanagari. */
export function hasDevanagari(text: string): boolean {
  return DEVANAGARI_RE.test(text);
}

/**
 * The measured Latin mean for `family`, with the margin applied.
 *
 * An unknown family falls back to the widest in the table rather than
 * throwing: a widget rendering in a face nobody measured should lay out
 * conservatively, not crash a live class.
 */
export function latinCharWidth(family: string = FALLBACK_FAMILY): number {
  const measured = LATIN_ADVANCE[family] ?? LATIN_ADVANCE[FALLBACK_FAMILY];
  return measured * SAFETY_MARGIN;
}

/**
 * The board's default Latin width, kept under its historical name.
 *
 * It is no longer a fitted guess: it is Menlo's measured advance times the
 * margin. Menlo because `FALLBACK_FAMILY` is Menlo, and this constant has to
 * agree with `charWidthFor()`'s default or a caller that mixes the two gets
 * two different answers for one string — which is the exact class of bug this
 * whole file exists to prevent.
 */
export const CHAR_W = latinCharWidth();

/**
 * Total advance, in em, of `text` drawn in `family`.
 *
 * Devanagari code units are priced from Anek Devanagari's per-codepoint hmtx
 * table regardless of `family`, because that is the face that will draw them.
 * The table is an UPPER BOUND on the shaped result: a virama has zero advance
 * and fuses the consonants either side into one conjunct narrower than the sum
 * of its parts, and matras have zero advance already, so summing nominal
 * advances over-charges conjuncts and is exact for everything else.
 *
 * That replaces the old flat 0.75, which was an over-estimate of a different
 * and much cruder kind — it charged `कोशिकाद्रव्य` 9.00 em where the nominal
 * advances sum to 5.36 em and the shaped string is nearer 3.3 em. See the note
 * on `test/fixtures/deva-labels-collide.json` in scripts/verify-fixtures.mjs
 * for what that 68% over-charge was concealing.
 */
function advanceEm(text: string, family: string): number {
  const latin = latinCharWidth(family);
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    const cp = text.charCodeAt(i);
    total += cp >= 0x0900 && cp <= 0x097f
      ? (DEVA_ADVANCE[String(cp)] ?? DEVA_MAX) * SAFETY_MARGIN
      : latin;
  }
  return total;
}

/**
 * The AVERAGE per-code-unit width fraction this string is measured with.
 *
 * Kept because callers outside this file treat "a width per code unit" as the
 * contract (`lines-planes-3d`'s `FrameChrome.charW` is exactly this shape).
 * It is now a per-string average rather than a per-script constant, so
 * `text.length * fontSize * charWidthFor(text)` still equals
 * `textWidth(text, fontSize)` exactly — including for a string that mixes
 * scripts, which the old two-constant version could not represent at all.
 */
export function charWidthFor(text: string, family: string = FALLBACK_FAMILY): number {
  if (text.length === 0) return latinCharWidth(family);
  return advanceEm(text, family) / text.length;
}

export function textWidth(text: string, fontSize: number, family: string = FALLBACK_FAMILY): number {
  return advanceEm(text, family) * fontSize;
}

/**
 * The width of the WIDEST single code unit in `text`.
 *
 * Not interesting on its own; it is what `maxChars` has to budget with, for
 * the reason under that function.
 */
function widestCharWidth(text: string, family: string): number {
  const latin = latinCharWidth(family);
  let widest = 0;
  for (let i = 0; i < text.length; i++) {
    const cp = text.charCodeAt(i);
    const w = cp >= 0x0900 && cp <= 0x097f
      ? (DEVA_ADVANCE[String(cp)] ?? DEVA_MAX) * SAFETY_MARGIN
      : latin;
    if (w > widest) widest = w;
  }
  return widest === 0 ? latin : widest;
}

/**
 * How many code units of `text` fit in `width`.
 *
 * `text` IS REQUIRED, and that is the fix for a defect two independent
 * verifiers found in the same week from opposite directions (molecule_struct's
 * Hindi label, circuit_network's Hindi caption). This function used to take
 * only a width and a font size, so it could not see the script and hardcoded
 * the Latin width while `textWidth` measured the same string at the Devanagari
 * one — a readout was therefore budgeted more characters than it could hold,
 * sliced to that budget, and ran off the board.
 *
 * `family` is optional and defaults to the WIDEST measured family, so a call
 * site that has not been told which face it draws in is conservative rather
 * than wrong. Pass it wherever the face is known.
 *
 * THIS IS PRICED AT THE STRING'S WIDEST CODE UNIT, NOT ITS AVERAGE, AND THAT
 * IS THE WHOLE POINT OF THE FUNCTION.
 *
 * Every caller uses the answer to CUT — `text.slice(0, maxChars(...))`, or
 * `fitReadout` taking a prefix of a caption. Cutting changes the string, and
 * for a mixed-script string it changes the MIXTURE, so an average measured
 * over the whole string does not describe the piece that survives.
 *
 * That is not hypothetical. It shipped: `circuit_network@1.hindi_caption` at
 * 343x236 budgeted its caption at the average of
 * "दो बैंक श्रेणी में जुड़े हैं और यही   Req 6 Ω   I 2.29 A   V 13.7 V", which
 * is cheap per code unit because a third of it is Devanagari and four of those
 * code units are matras with no advance at all. The line that survived the cut
 * kept eleven Devanagari code units and all forty of the Latin ones, so its
 * real average was far higher than the budget assumed, and the readout ran off
 * the board — caught by verify-render.mjs, which measures the string that was
 * actually drawn.
 *
 * Pricing at the widest code unit fixes it by construction: the widest code
 * unit of any PREFIX is at most the widest of the whole, so a budget computed
 * here is safe for every string a caller can cut down to. For a single-script
 * string the widest and the average are the same number, so nothing about
 * Latin-only text changes — this is exactly and only the mixed-script case.
 *
 * `textWidth` stays an average, because it measures a string that is already
 * final and nobody is going to cut it afterwards.
 */
export function maxChars(
  width: number,
  fontSize: number,
  text: string,
  family: string = FALLBACK_FAMILY
): number {
  return Math.max(0, Math.floor(width / (fontSize * widestCharWidth(text, family))));
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
 * The longest run of whole `READOUT_SEP`-separated terms of `value` that FITS.
 *
 * `fits` measures a candidate string, rather than counting it against a
 * character budget. See `fitReadout` for why that distinction is load-bearing.
 * Returns '' when not even the first term fits; the caller decides what to do
 * about a term wider than the entire board, which is the state xy_plot refuses
 * in validate() rather than truncating. Everywhere else the cut lands on a
 * separator, so no term is ever shown with part of itself missing.
 */
function trimToTerms(value: string, fits: (s: string) => boolean): string {
  const parts = value.split(READOUT_SEP);
  let out = '';
  for (const part of parts) {
    const next = out === '' ? part : `${out}${READOUT_SEP}${part}`;
    if (!fits(next)) break;
    out = next;
  }
  return out;
}

/**
 * IT MEASURES WHAT IT IS ABOUT TO DRAW. IT DOES NOT BUDGET CHARACTERS.
 *
 * This used to compute one character budget from `caption + value` and then
 * build a DIFFERENT string — a prefix of the caption, an ellipsis, some of the
 * terms — and check that against the same budget. For a single-script line
 * that is harmless, because every code unit costs the same and a count is a
 * width. For a line that mixes scripts it is wrong, and it shipped:
 * `circuit_network@1.hindi_caption` at 343x236 budgeted against the average of
 * a caption that is a third Devanagari (cheap per code unit — four of those
 * units are matras with no advance at all) and then drew a line that had lost
 * most of the Devanagari and kept all forty Latin characters, at a real
 * average far above the budget. It ran off the board, and verify-render.mjs
 * caught it, because verify-render.mjs measures the string that was drawn.
 *
 * So every candidate here is measured with `textWidth`, the same function the
 * checker uses, on the exact bytes that will reach the tree. `maxChars` still
 * exists and is still priced at the widest code unit — it is what the callers
 * that SLICE need — but this function no longer goes through it, and no longer
 * has to be conservative to be safe. On that Hindi fixture the difference is a
 * whole term: the widest-code-unit budget is 21 code units (set by 'औ' at
 * 1.0245 em) where the line that actually fits is 33.
 */
export function fitReadout(
  caption: string,
  value: string,
  width: number,
  fontSize: number = READOUT_SIZE,
  family: string = FALLBACK_FAMILY
): string {
  if (!(width > 0)) return '';
  const fits = (s: string): boolean => textWidth(s, fontSize, family) <= width;

  let v = fits(value) ? value : trimToTerms(value, fits);
  if (v === '') {
    // A single term wider than the whole board. No policy renders this
    // honestly; xy_plot's `labelFitProblems` refuses the payload instead of
    // reaching here. Cut it rather than drawing nothing.
    v = value.slice(0, maxChars(width, fontSize, value, family));
    if (v === '') return '';
  }

  // Trimmed because a caption's own surrounding whitespace is not information,
  // and leading whitespace in particular shifts a start-anchored readout right
  // by however many spaces it happens to carry. An all-whitespace or empty
  // caption yields no prefix and no separator — the old code emitted three
  // leading spaces for `caption: ''`, which every widget defaults to.
  const head = caption.trim();
  if (head.length === 0) return v;
  if (fits(`${head}${READOUT_SEP}${v}`)) return `${head}${READOUT_SEP}${v}`;

  // The caption tapers one code unit at a time, longest first, and every step
  // is measured. `trimEnd` so a cut landing on a space gives "Metre…", not
  // "Metre …"; it can only shorten the candidate, never lengthen it.
  for (let k = head.length - 1; k >= 0; k--) {
    const shown = head.slice(0, k).trimEnd() + READOUT_ELLIPSIS;
    if (fits(`${shown}${READOUT_SEP}${v}`)) return `${shown}${READOUT_SEP}${v}`;
  }
  return v;
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
