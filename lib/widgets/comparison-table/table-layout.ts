/**
 * `comparison_table@1` — geometry and the caps, derived not chosen.
 *
 * A comparison table has NO trend and NO ordering: swapping two columns
 * changes nothing about what it says. That is why it is not
 * `data_table_trend` with strings switched on — that widget right-aligns and
 * uses tabular figures precisely because its column IS a trend, and one
 * widget whose layout rules contradict themselves depending on a flag picks
 * the wrong one the first time they disagree.
 *
 * THE CAPS ARE A PRE-FILTER, NOT THE GATE. `reaction_scheme` taught that: its
 * character caps were raised 10 -> 20 and only 2 of 38 stored payloads moved,
 * because the real limit was the measured width check. So `fits()` below
 * measures the laid-out table and refuses with the measurement in the string,
 * and the character caps only stop the obviously-too-long before it gets that
 * far.
 */
import { CHAR_W, HAIRLINE_STROKE, LABEL_SIZE, PAD_EDGE, textWidth } from '../chrome';

export const MAX_COLUMNS = 3;
export const MIN_COLUMNS = 2;
export const MAX_ROWS = 4;
export const MIN_ROWS = 2;

/** The smallest board this must hold, and where every cap below comes from. */
export const REF_W = 343;
export const REF_H = 236;

/** Usable width after the board's own padding: 343 - 2*12 = 319pt. */
export const USABLE_W = REF_W - 2 * PAD_EDGE;

/** Each cell's own breathing room, taken out of the column before anything
 *  is priced. `fits()` charges the same 8pt, so the two agree. */
export const CELL_PAD = 8;

export const CELL_SIZE = LABEL_SIZE;
export const HEADER_SIZE = LABEL_SIZE;
/** One text band: the glyph plus the gutter under it. */
export const BAND_H = 18;
export const GUTTER = 6;
export const CAPTION_SIZE = 11;

/**
 * Characters that fit a column of `widthPt`, at the body face.
 *
 * THE CAPS DEPEND ON THE COLUMN COUNT, and at first they did not. A single
 * cap was derived at three columns — the worst case — and then applied to
 * every table, so a TWO-column table with 107.7pt per column was held to the
 * 80.75pt cap. All fifteen of the first authored tables were refused, several
 * on labels like "Grazing (GFC)" that fit their own board comfortably.
 *
 * The padding is subtracted here because `fits()` charges it too. A cap
 * looser than the gate it precedes is not a pre-filter; it is a second
 * opinion the author hears first.
 */
export function capFor(widthPt: number): number {
  return Math.max(1, Math.floor((widthPt - CELL_PAD) / (CELL_SIZE * CHAR_W)));
}

/** The column-label and cell cap at `cols` columns: 13 at two, 10 at three. */
export function colLabelCap(cols: number): number {
  return capFor(colWidthAt(cols));
}

/** The row-label gutter is a whole column wide at two columns, less at three. */
export function rowLabelCap(cols: number): number {
  return capFor(USABLE_W / (cols + 1));
}

/** A cell or label may take TWO lines, so the string it may carry is twice
 *  the per-line cap plus the space it breaks at.
 *
 *  This is the same answer `data_table_trend` needed and for the same reason:
 *  at 343pt a one-line cap is 13 characters at two columns, and "Stratification"
 *  is 14. Refusing every natural term by one or two characters is not a budget,
 *  it is a widget nobody can author for. Wrapping is not truncating — nothing
 *  is lost, the row simply gets taller, and `fits()` already checks the height. */
export const LINES_PER_CELL = 2;

export function colLabelTotal(cols: number): number {
  return colLabelCap(cols) * LINES_PER_CELL + 1;
}

export function rowLabelTotal(cols: number): number {
  return rowLabelCap(cols) * LINES_PER_CELL + 1;
}

/**
 * One cell, wrapped to at most two lines. Splits at the LAST space that keeps
 * the first line inside `max` — labelled_figure's rule, for its reason: the
 * final word carries the meaning and should stand alone rather than be the
 * half that gets cut.
 */
export function wrapCell(text: string, max: number): string[] {
  const t = (text ?? '').trim();
  if (t.length <= max) return [t];
  const head = t.slice(0, max + 1);
  const cut = head.lastIndexOf(' ');
  // LOSSLESS. The second line carries EVERYTHING that is left, even when that
  // overflows — because this widget's contract is that nothing is truncated,
  // and `slice(max, max * 2)` quietly dropped the 19th character of a
  // 19-character word while reporting a clean two-line wrap. Whether the
  // remainder fits is a measurement, and it belongs to `fits()`, which prices
  // the longest line and refuses with the number.
  if (cut <= 0) return [t.slice(0, max), t.slice(max)];
  return [t.slice(0, cut), t.slice(cut + 1)];
}

/** Kept for the corpus sweep and for callers that want the tightest case. */
export const MAX_COL_LABEL = colLabelCap(MAX_COLUMNS);
export const MAX_ROW_LABEL = rowLabelCap(MAX_COLUMNS);
/** A cell sits in a value column, so it is bounded by exactly the same width
 *  as a column label. The spec's separate 24 was never reachable: 24
 *  characters need 181pt and the widest column here is 107.7. */
export const MAX_CELL = MAX_COL_LABEL;
export const MAX_CAPTION = 40;

/** The width one value column gets, at `cols` columns, on the reference board.
 *  `layoutTable` divides the same way — one formula, so the cap and the
 *  layout cannot disagree about how wide a column is. */
export function colWidthAt(cols: number, usable: number = USABLE_W): number {
  const labelW = usable / (cols + 1);
  return (usable - labelW) / cols;
}

export interface TableFrame {
  rows: number;
  cols: number;
  labelW: number;
  colW: number;
  left: number;
  top: number;
  headerY: number;
  rowH: number;
  /** Total height the table needs, caption included. */
  needH: number;
}

export function layoutTable(rows: number, cols: number,
                            width: number, height: number): TableFrame {
  const left = PAD_EDGE;
  const usable = width - 2 * PAD_EDGE;
  // The row-label gutter takes a third at two columns and a quarter at three,
  // so the value columns stay equal and readable rather than the labels
  // squeezing them.
  const labelW = usable / (cols + 1);
  const colW = colWidthAt(cols, usable);
  const top = PAD_EDGE;
  const headerY = top + BAND_H;
  // A row holds up to two lines, so its band is twice the glyph plus the
  // gutter. The header is one line by construction — a column label that
  // wraps takes the second line out of the header band, which `needH`
  // accounts for below.
  const rowH = BAND_H * LINES_PER_CELL + GUTTER;
  const needH = BAND_H * LINES_PER_CELL + rows * rowH + GUTTER
              + CAPTION_SIZE + PAD_EDGE;
  return { rows, cols, labelW, colW, left, top, headerY, rowH, needH };
}

export interface FitProblem {
  where: string;
  text: string;
  needPt: number;
  havePt: number;
}

/**
 * Does the laid-out table actually fit? Measured, per cell, at a real frame.
 *
 * WHAT THIS ACTUALLY CATCHES TODAY, stated because the first version of this
 * comment claimed more. `textWidth` prices "MMMMMMMMM" and "mmmmmmmmm"
 * identically at this face — 68.3pt each — so the advance is UNIFORM per
 * character, and once the caps were derived from that same width there is no
 * string that passes a cap and fails this check. For text, the cap IS the
 * width check.
 *
 * So the load-bearing part here is HEIGHT — four rows plus a header plus a
 * caption against 236pt, which no per-string cap can know. The width pass
 * stays because it is the half that keeps the two honest: it measures where
 * the caps count, and the day the width model becomes per-glyph, or a face
 * with real kerning ships, it will start catching things again without
 * anything else having to change.
 */
export function fits(p: {
  columns: readonly string[];
  rows: readonly string[];
  cells: readonly string[];
  caption?: string;
}, width: number, height: number): FitProblem[] {
  const f = layoutTable(p.rows.length, p.columns.length, width, height);
  const out: FitProblem[] = [];
  const pad = CELL_PAD;

  // PRICED PER WRAPPED LINE, not per raw string — the same correction
  // labelled_figure's term cap needed. A cell is refused for the width of its
  // LONGEST LINE, because that is the only thing that can run off the board.
  const check = (where: string, text: string, have: number) => {
    const lines = wrapCell(text, capFor(have));
    const longest = lines.reduce((a, b) => (a.length >= b.length ? a : b), '');
    const need = textWidth(longest, CELL_SIZE) + pad;
    if (need > have) out.push({ where, text, needPt: need, havePt: have });
  };

  p.columns.forEach((c, i) => check(`column ${i} "${c}"`, c, f.colW));
  p.rows.forEach((r, i) => check(`row ${i} "${r}"`, r, f.labelW));
  p.cells.forEach((c, i) => {
    const r = Math.floor(i / f.cols);
    const col = i % f.cols;
    check(`cell [${r},${col}] "${c}"`, c, f.colW);
  });
  if (p.caption) {
    const need = textWidth(p.caption, CAPTION_SIZE) + pad;
    const have = width - 2 * PAD_EDGE;
    if (need > have) out.push({ where: 'caption', text: p.caption, needPt: need, havePt: have });
  }
  if (f.needH > height) {
    out.push({ where: 'the table', text: `${p.rows.length} rows`,
               needPt: f.needH, havePt: height });
  }
  return out;
}

export const RULE_STROKE = HAIRLINE_STROKE;
