/**
 * data_table_trend — a series of values side by side, and where the trend
 * breaks.
 *
 * Nothing here is a worklet. The one animatable param (`highlight_row`) moves
 * a single Rect's y and needs no maths on the UI thread, so this file is plain
 * TypeScript with zero imports — which is what lets its assertions run before
 * any React exists.
 *
 * WHAT THIS WIDGET ACTUALLY COMPUTES. The cell values are payload inputs, so
 * asserting "Li = 520" would test the payload, not the widget. The widget's own
 * output is the READING of the series: its direction, its span, and the indices
 * where a local step opposes the overall direction. That last one is the
 * teaching point of the chapter this widget exists for — NCERT's period-2
 * ionisation-enthalpy table is memorable precisely because of the Be→B and N→O
 * dips, and a widget that FINDS them is doing the work rather than being told
 * the answer.
 *
 * Reference results (independently recomputed before this file was written):
 *
 *   First ionisation enthalpy, period 2 — NCERT Cl.11 Chem Unit 3, kJ/mol
 *     [520, 899, 801, 1086, 1402, 1314, 1681, 2081]   (Li Be B C N O F Ne)
 *       trendSign +1, netChange 1561, span 1561
 *       anomalyCount 2, firstAnomaly 2      <- B (filled 2s) and O (half-filled 2p)
 *
 *   Atomic radii down group 1 — NCERT Cl.11 Unit 3, metallic radii pm
 *     [152, 186, 227, 248, 265]            (Li Na K Rb Cs)
 *       trendSign +1, netChange 113, span 113, anomalyCount 0, firstAnomaly -1
 *
 *   Lanthanoid contraction — NCERT Cl.12 Unit 4, Ln3+ ionic radii pm
 *     [106, 99, 94, 88, 85]                (La Nd Gd Er Lu)
 *       trendSign -1, netChange -21, span 21, anomalyCount 0, firstAnomaly -1
 *
 *   Electron gain enthalpy, group 17 — SIGNED, kJ/mol
 *     [-328, -349, -325, -295]             (F Cl Br I)
 *       trendSign +1, netChange 33, span 54, anomalyCount 1, firstAnomaly 1
 *       ^ the famous F < Cl exception falls straight out of the same detector.
 *         Values must stay SIGNED: feeding magnitudes flips every sign and
 *         silently inverts the result.
 *
 * The two zero-anomaly fixtures are as load-bearing as the two that find them —
 * a detector that always fires is not a detector
 * (docs/small-screen-rendering-rules.md, "every assertion needs a fixture that
 * fails it").
 */

export type CellKind = 'numeric' | 'categorical';

export interface DataTableTrendParams {
  cell_kind: CellKind;
  /** One entity per row. Order IS the trend axis — a period, a group, a
   *  series — so there is no separate axis param. */
  row_labels: readonly string[];
  col_labels: readonly string[];
  /** Row-major, length exactly rows*cols. Empty in categorical mode. */
  values: readonly number[];
  /** Row-major, length exactly rows*cols. Empty in numeric mode. */
  text_values: readonly string[];
  /** Which column the reading describes. -1 in categorical mode. */
  trend_col: number;
  /** Banded row. -1 = none. ANIMATABLE. */
  highlight_row: number;
  unit: string;
  caption: string;
}

export interface TrendDerived {
  trendSign: number;
  netChange: number;
  span: number;
  anomalyCount: number;
  /** Row index of the first step opposing the trend, or -1. */
  firstAnomaly: number;
  highlightValue: number;
  minValue: number;
  maxValue: number;
  [key: string]: number;
}

/** The values in one column, row-major input. */
export function column(
  values: readonly number[],
  cols: number,
  col: number,
  rows: number
): number[] {
  const out: number[] = [];
  if (cols <= 0 || col < 0 || col >= cols) return out;
  for (let r = 0; r < rows; r++) {
    const v = values[r * cols + col];
    if (typeof v === 'number' && Number.isFinite(v)) out.push(v);
  }
  return out;
}

/**
 * Row indices whose step from the previous row opposes the overall direction.
 * Returns row indices (not step indices) so the result names the element that
 * breaks the trend, which is what a caption wants to say.
 */
export function anomalies(v: readonly number[]): number[] {
  if (v.length < 2) return [];
  const net = v[v.length - 1] - v[0];
  const sign = Math.abs(net) < 1e-9 ? 0 : Math.sign(net);
  if (sign === 0) return [];
  const out: number[] = [];
  for (let i = 1; i < v.length; i++) {
    const step = v[i] - v[i - 1];
    if ((step < 0 && sign > 0) || (step > 0 && sign < 0)) out.push(i);
  }
  return out;
}

export function derive(p: DataTableTrendParams): TrendDerived {
  const rows = p.row_labels.length;
  const cols = p.col_labels.length;
  const empty: TrendDerived = {
    trendSign: 0, netChange: 0, span: 0, anomalyCount: 0,
    firstAnomaly: -1, highlightValue: 0, minValue: 0, maxValue: 0,
  };
  // Categorical tables have no trend to read. Every key is still returned —
  // `derived` and computeDerived's output must match in EVERY mode, which
  // derived-consistency.test.ts asserts.
  if (p.cell_kind !== 'numeric' || p.trend_col < 0) return empty;

  const v = column(p.values, cols, p.trend_col, rows);
  if (v.length < 2) return empty;

  const net = v[v.length - 1] - v[0];
  const an = anomalies(v);
  const hv =
    p.highlight_row >= 0 && p.highlight_row < rows
      ? p.values[p.highlight_row * cols + p.trend_col]
      : 0;

  return {
    trendSign: Math.abs(net) < 1e-9 ? 0 : Math.sign(net),
    netChange: net,
    span: Math.max(...v) - Math.min(...v),
    anomalyCount: an.length,
    firstAnomaly: an.length > 0 ? an[0] : -1,
    highlightValue: typeof hv === 'number' && Number.isFinite(hv) ? hv : 0,
    minValue: Math.min(...v),
    maxValue: Math.max(...v),
  };
}

/** Compact cell text — keeps a 4-column numeric row inside the small board. */
//: Unicode superscripts, because this app has no LaTeX renderer and never
//: will — `\ce{}` and friends leak their own markup onto the board.
const SUP = ['\u2070', '\u00b9', '\u00b2', '\u00b3', '\u2074',
             '\u2075', '\u2076', '\u2077', '\u2078', '\u2079'];

function superscript(n: number): string {
  const sign = n < 0 ? '\u207b' : '';
  return sign + String(Math.abs(n)).split('').map((d) => SUP[Number(d)]).join('');
}

/** The window inside which a plain decimal is the clearest thing to print. */
const PLAIN_MIN = 1e-3;
const PLAIN_MAX = 1e6;

/**
 * One table cell.
 *
 * ROUNDING TO TWO DECIMALS DESTROYS THE DATA OUTSIDE A NARROW BAND, and it did:
 * nine published boards printed a correct value as "0". An amine table's Kb
 * column — 1.8e-05, 4.4e-04, 4.3e-10, right to three significant figures —
 * rendered as 0, 0, 0; an electromagnetic spectrum whose seven rows all
 * satisfy c = f*lambda showed five wavelengths as 0. The payloads were never
 * wrong. This function was.
 *
 * Outside [1e-3, 1e6] the value is printed in scientific notation with two
 * significant figures, which is how both of those tables are written in the
 * textbook anyway. Inside it, nothing changes.
 */
export function formatCell(v: number): string {
  if (!Number.isFinite(v)) return '\u2014';
  if (v === 0) return '0';
  const mag = Math.abs(v);
  if (mag >= PLAIN_MIN && mag <= PLAIN_MAX) {
    if (Number.isInteger(v)) return String(v);
    const r = Math.round(v * 100) / 100;
    // THE GUARD, not the band, is what actually stops a value printing as 0.
    // 0.001 is inside [1e-3, 1e6] and still rounds to 0 at two decimals, so a
    // boundary alone would have left the defect sitting exactly on the edge.
    if (r !== 0) return String(r);
  }
  const exp = Math.floor(Math.log10(mag));
  const mantissa = v / 10 ** exp;
  // Two significant figures, and a bare mantissa of 1 is dropped: 1e20 reads
  // better as 10^20 than as 1x10^20.
  const m = Math.round(mantissa * 10) / 10;
  const head = Math.abs(m) === 1 ? (m < 0 ? '-' : '') : `${m}\u00d7`;
  return `${head}10${superscript(exp)}`;
}


/**
 * One categorical cell, wrapped to at most two lines instead of cut.
 *
 * Cells were sliced at 8 characters, full stop, and the two match-the-band
 * boards in the published corpus were unreadable because of it: "Antenna ",
 * "Oscillat", "Klystron", "Driven e", "Radioact", "Nuclear ", "Delocali",
 * "In aroma". Each of those is a correct answer the student cannot read.
 *
 * Split at the LAST space that keeps the first line inside `max` — the same
 * rule labelled_figure's `wrapTerm` uses, and for the same reason: the final
 * word is the one that carries the meaning, so it should stand alone rather
 * than be the half that gets cut.
 */
export function wrapCell(text: string, max: number): [string] | [string, string] {
  const t = (text ?? '').trim();
  if (t.length <= max) return [t];
  const head = t.slice(0, max + 1);
  const cut = head.lastIndexOf(' ');
  if (cut <= 0) {
    // One long word. Two lines of it still beat one truncated line.
    return [t.slice(0, max), t.slice(max, max * 2)];
  }
  return [t.slice(0, cut), t.slice(cut + 1, cut + 1 + max)];
}
