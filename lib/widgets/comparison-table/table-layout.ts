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

export const CELL_SIZE = LABEL_SIZE;
export const HEADER_SIZE = LABEL_SIZE;
/** One text band: the glyph plus the gutter under it. */
export const BAND_H = 18;
export const GUTTER = 6;
export const CAPTION_SIZE = 11;

/**
 * Characters a cell may hold, at the WIDEST table.
 *
 *   319pt / 3 columns = 106.3pt per column
 *   106.3 / (13 * 0.60205) = 13.6 -> 14 characters
 *
 * Derived at 3 columns because that is the worst case; a 2-column table has
 * more room and is bounded by `fits()` rather than by this.
 */
export const MAX_COL_LABEL = Math.floor(
  (USABLE_W / MAX_COLUMNS) / (CELL_SIZE * CHAR_W));

/** The row-label gutter is wider: it carries a property name, not a value. */
export const MAX_ROW_LABEL = 18;
export const MAX_CELL = 24;
export const MAX_CAPTION = 40;

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
  const colW = (usable - labelW) / cols;
  const top = PAD_EDGE;
  const headerY = top + BAND_H;
  const rowH = BAND_H + GUTTER;
  const needH = BAND_H + rows * rowH + GUTTER + CAPTION_SIZE + PAD_EDGE;
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
 * This is the gate. Every string is priced at the face that draws it —
 * `textWidth` reads the measured advance tables — so a cell inside the
 * character cap can still be refused for being wide, which is the case the
 * character cap cannot see.
 */
export function fits(p: {
  columns: readonly string[];
  rows: readonly string[];
  cells: readonly string[];
  caption?: string;
}, width: number, height: number): FitProblem[] {
  const f = layoutTable(p.rows.length, p.columns.length, width, height);
  const out: FitProblem[] = [];
  const pad = 8;                      // the cell's own breathing room

  const check = (where: string, text: string, have: number) => {
    const need = textWidth(text, CELL_SIZE) + pad;
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
