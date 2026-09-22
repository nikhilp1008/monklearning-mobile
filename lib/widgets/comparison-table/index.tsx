/**
 * `comparison_table@1` — the things being compared across the top, the
 * properties they are compared ON down the side, short text in the cells.
 *
 * L2, from docs/comparison-table-spec.md. It exists because the prompt has
 * been telling the author to DECLINE on "compare, contrast, distinguish or
 * list" since 2026-09-15 — correctly, since no registered widget drew a
 * table — and 12 of the 86 proposed-n rows on the SANE sheets were a
 * schematic drawn for a tabular objective anyway. An arrow means "becomes";
 * a comparison is not a sequence.
 *
 * NO TREND, NO ORDERING. Swapping two columns changes nothing about what this
 * says, which is the whole reason it is not `data_table_trend` with strings
 * switched on: that widget right-aligns and uses tabular figures BECAUSE its
 * column is a trend. One widget holding both sets of layout rules would pick
 * the wrong one the first time they disagreed.
 *
 * NEVER TRUNCATES. A clipped word in a definitions table teaches a wrong
 * definition, which is worse than no table — so an over-long cell is refused
 * with the measurement, and the author shortens it once, in the vocabulary.
 */
import React, { useMemo } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';
import { BoardText as SvgText } from '../board-text';

import { PAD_EDGE } from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  BAND_H, CAPTION_SIZE, CELL_SIZE, HEADER_SIZE, MAX_CAPTION, MAX_COLUMNS,
  MAX_ROWS, MIN_COLUMNS, MIN_ROWS, REF_H, REF_W, RULE_STROKE, colLabelCap,
  colLabelTotal, fits, layoutTable, rowLabelCap, rowLabelTotal, wrapCell,
} from './table-layout';

export interface ComparisonTableParams {
  kind: 'comparison';
  columns: string[];
  rows: string[];
  /** ONE FLAT array, row-major, length exactly rows x columns. */
  cells: string[];
  highlight: readonly [number, number] | null;
  caption: string;
}

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;

function readStrings(v: unknown, where: string, min: number, max: number,
                     cap: number, errors: string[]): string[] | null {
  if (!Array.isArray(v)) {
    errors.push(`${where} must be an array of strings`);
    return null;
  }
  if (v.length < min || v.length > max) {
    errors.push(
      `${where} has ${v.length} entries; this widget takes ${min} to ${max}` +
      (min === MIN_COLUMNS ? ' — a "comparison" of one thing is not one' : ''));
    return null;
  }
  const out: string[] = [];
  v.forEach((s, i) => {
    if (!isStr(s)) {
      errors.push(`${where}[${i}] must be a non-empty string`);
      return;
    }
    const t = s.trim();
    if (t.length > cap) {
      errors.push(
        `${where}[${i}] "${t}" is ${t.length} characters, ${t.length - cap} over the ` +
        `${cap}-character cap measured at ${REF_W}x${REF_H}. Shorten it in the ` +
        `vocabulary — it is never truncated at render time, because a clipped word ` +
        `in a comparison teaches a wrong definition.`);
      return;
    }
    out.push(t);
  });
  return out.length === v.length ? out : null;
}

export function validate(raw: unknown): ValidationResult<ComparisonTableParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  // THE CAPS DEPEND ON HOW MANY COLUMNS THIS TABLE HAS. A two-column table
  // gets 107.7pt per column and a three-column one 80.75, so holding both to
  // the tighter figure refused labels that fit their own board — which is
  // what happened to all fifteen of the first authored tables.
  const nCols = Array.isArray(r.columns) ? r.columns.length : MAX_COLUMNS;
  // The TOTAL a string may carry — two lines' worth. The per-line cap is what
  // `fits()` measures against; a term one character over a single line is
  // wrapped, not refused, because refusing "Stratification" by one character
  // is a widget nobody can author for.
  const colCap = colLabelTotal(nCols);
  const rowCap = rowLabelTotal(nCols);

  const columns = readStrings(r.columns, 'columns', MIN_COLUMNS, MAX_COLUMNS,
                              colCap, errors);
  const rows = readStrings(r.rows, 'rows', MIN_ROWS, MAX_ROWS,
                           rowCap, errors);

  let cells: string[] | null = null;
  if (columns && rows) {
    const want = rows.length * columns.length;
    if (!Array.isArray(r.cells)) {
      errors.push('cells must be an array');
    } else if (r.cells.length !== want) {
      // THE NESTED-ARRAY SHAPE, named explicitly. `data_table_trend` shipped
      // the other way round, every model emitted an array of rows, and 0 of
      // 14 stored payloads rendered until the spec said this sentence.
      errors.push(
        `cells must be ONE FLAT row-major array of exactly rows x columns = ` +
        `${rows.length} x ${columns.length} = ${want} strings, not an array of ` +
        `rows; got ${r.cells.length}` +
        (Array.isArray(r.cells[0]) ? ' (this looks like an array of rows)' : ''));
    } else {
      // A cell sits in a value column: the same width as a column label.
      cells = readStrings(r.cells, 'cells', want, want, colCap, errors);
    }
  }

  let highlight: readonly [number, number] | null = null;
  if (r.highlight != null) {
    const h = r.highlight;
    if (!Array.isArray(h) || h.length !== 2 ||
        !h.every((n) => typeof n === 'number' && Number.isInteger(n))) {
      errors.push('highlight must be null or [row, col]');
    } else if (rows && columns &&
               (h[0] < 0 || h[0] >= rows.length || h[1] < 0 || h[1] >= columns.length)) {
      errors.push(
        `highlight [${h[0]}, ${h[1]}] is outside the ${rows?.length}x${columns?.length} grid`);
    } else {
      highlight = [h[0] as number, h[1] as number];
    }
  }

  const caption = isStr(r.caption) ? r.caption.trim() : '';
  if (caption.length > MAX_CAPTION) {
    errors.push(`caption is ${caption.length} characters, over the ${MAX_CAPTION} cap`);
  }

  if (errors.length > 0 || !columns || !rows || !cells) {
    return { ok: false, errors };
  }

  /*
   * AND NOW THE REAL CHECK. The character caps above are a pre-filter;
   * `reaction_scheme` raised its caps 10 -> 20 and only 2 of 38 stored
   * payloads moved, because the binding limit was always the measured width.
   * This refuses with the measurement so the author can repair against a
   * number rather than a guess.
   */
  const problems = fits({ columns, rows, cells, caption }, REF_W, REF_H);
  if (problems.length > 0) {
    const p = problems[0];
    errors.push(
      `${p.where} needs ${p.needPt.toFixed(1)}pt but only ${p.havePt.toFixed(1)}pt ` +
      `is usable at ${REF_W}x${REF_H}` +
      (problems.length > 1 ? ` (and ${problems.length - 1} more)` : ''));
    return { ok: false, errors };
  }

  return {
    ok: true,
    params: { kind: 'comparison', columns, rows, cells, highlight, caption },
  };
}

function ComparisonTable({ params, width, height, theme }:
                         WidgetRenderProps<ComparisonTableParams>) {
  const f = useMemo(
    () => layoutTable(params.rows.length, params.columns.length, width, height),
    [params.rows.length, params.columns.length, width, height]
  );
  const colX = (c: number) => f.left + f.labelW + f.colW * (c + 0.5);
  const rowY = (r: number) => f.headerY + f.rowH * (r + 0.5);

  return (
    <Svg width={width} height={height}>
      {/* The highlight sits UNDER the text so the text keeps its own colour;
          a reversed-out cell reads as a different kind of content. */}
      {params.highlight && (
        <Rect
          x={f.left + f.labelW + f.colW * params.highlight[1]}
          y={rowY(params.highlight[0]) - BAND_H / 2}
          width={f.colW}
          height={BAND_H}
          rx={4}
          fill={theme.accent}
          fillOpacity={0.16}
        />
      )}

      {params.columns.flatMap((c, i) =>
        wrapCell(c, colLabelCap(f.cols)).map((ln, li, all) => (
          <SvgText
            key={`h${i}-${li}`} x={colX(i)}
            y={f.top + HEADER_SIZE + (li - (all.length - 1) / 2) * HEADER_SIZE}
            fill={theme.ink} fontSize={HEADER_SIZE} fontWeight="700"
            fontFamily={theme.fontFamily} textAnchor="middle"
          >
            {ln}
          </SvgText>
        ))
      )}

      <Line x1={f.left} y1={f.headerY} x2={width - PAD_EDGE} y2={f.headerY}
            stroke={theme.rule} strokeWidth={RULE_STROKE} />

      {params.rows.map((r, i) => (
        <React.Fragment key={`r${i}`}>
          {wrapCell(r, rowLabelCap(f.cols)).map((ln, li, all) => (
            <SvgText
              key={`rl${li}`} x={f.left}
              y={rowY(i) + CELL_SIZE * 0.35 + (li - (all.length - 1) / 2) * CELL_SIZE}
              fill={theme.inkMuted} fontSize={CELL_SIZE} fontFamily={theme.fontFamily}
            >
              {ln}
            </SvgText>
          ))}
          {params.columns.flatMap((_, c) =>
            wrapCell(params.cells[i * f.cols + c], colLabelCap(f.cols))
              .map((ln, li, all) => (
                <SvgText
                  key={`c${c}-${li}`} x={colX(c)}
                  y={rowY(i) + CELL_SIZE * 0.35 + (li - (all.length - 1) / 2) * CELL_SIZE}
                  fill={theme.ink} fontSize={CELL_SIZE} fontFamily={theme.fontFamily}
                  textAnchor="middle"
                >
                  {ln}
                </SvgText>
              ))
          )}
          {i < params.rows.length - 1 && (
            <Line x1={f.left} y1={rowY(i) + f.rowH / 2}
                  x2={width - PAD_EDGE} y2={rowY(i) + f.rowH / 2}
                  stroke={theme.rule} strokeWidth={RULE_STROKE} strokeOpacity={0.5} />
          )}
        </React.Fragment>
      ))}

      {params.caption ? (
        <SvgText
          x={f.left} y={height - PAD_EDGE}
          fill={theme.inkMuted} fontSize={CAPTION_SIZE} fontFamily={theme.fontFamily}
        >
          {params.caption}
        </SvgText>
      ) : null}
    </Svg>
  );
}

export const comparisonTable: WidgetModule<ComparisonTableParams> = {
  id: 'comparison_table' as never,
  version: 1,
  defaults: {
    kind: 'comparison',
    columns: ['Aldehyde', 'Ketone'],
    rows: ['Oxidation', 'H on C=O'],
    cells: ['easy', 'resists', 'yes', 'no'],
    highlight: null,
    caption: 'Aldehydes oxidise; ketones resist',
  },
  // ONE. `highlight` is the only thing a narration moves: the table itself is
  // the answer and a comparison whose CONTENT changed mid-sentence would be a
  // different comparison. It is also not a number, so it snaps rather than
  // tweens — which is why `animatable` stays empty and the host re-renders on
  // params instead. Same call labelled_figure makes, for the same reason.
  animatable: [],
  derived: [],
  computeDerived: () => ({}),
  derivedAliases: {},
  validate,
  Component: ComparisonTable,
};
