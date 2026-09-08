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
export function formatCell(v: number): string {
  if (!Number.isFinite(v)) return '—';
  if (Number.isInteger(v)) return String(v);
  const r = Math.round(v * 100) / 100;
  return Number.isInteger(r) ? String(r) : String(r);
}
