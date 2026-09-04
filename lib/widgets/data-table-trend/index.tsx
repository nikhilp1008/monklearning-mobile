import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  anomalies,
  column,
  derive,
  formatCell,
  type CellKind,
  type DataTableTrendParams,
} from './trend-math';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

/**
 * Chrome constants — device points, never a function of width/height.
 * docs/small-screen-rendering-rules.md.
 */
const CELL_SIZE = 12;
const HEADER_SIZE = 12;
const READOUT_SIZE = 14;
const RULE_STROKE = 1.5;
const ARROW_STROKE = 1.6;
const ANOMALY_R = 3;

/** Containers sized from the chrome they hold, not from a fraction of the
 *  frame — the rule added after projectile-motion's PAD.bottom. */
const PAD_TOP = READOUT_SIZE * 1.6 + 6;
const HEADER_H = HEADER_SIZE * 1.6;
const PAD_BOTTOM = 10;
const PAD_SIDE = 12;
/** Width reserved for the trend arrow and anomaly dots, right of the grid. */
const GUTTER_W = 22;

/** Caps that keep every cell clear of verify-render's label-overlap check at
 *  343x236, the smallest board this app checks. Enforced in validate(), never
 *  by thinning the render: where density carries meaning, cap the parameter. */
const MAX_ROWS = 8; // period 2 is Li..Ne — exactly 8
const MAX_COLS_NUMERIC = 4;
const MAX_COLS_CATEGORICAL = 3; // text cells are wider; 4 does not fit at 343
const MAX_ROW_LABEL = 12;
const MAX_COL_LABEL = 5;
const MAX_TEXT_CELL = 8;

const KINDS: CellKind[] = ['numeric', 'categorical'];

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string';
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isInt = (v: unknown): v is number => finite(v) && Number.isInteger(v);

function validate(raw: unknown): ValidationResult<DataTableTrendParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const kind = r.cell_kind ?? 'numeric';
  if (!isStr(kind) || !(KINDS as string[]).includes(kind)) {
    errors.push(`cell_kind must be one of ${KINDS.join(', ')}`);
  }
  const numeric = kind === 'numeric';

  const rowLabels = r.row_labels;
  if (!Array.isArray(rowLabels) || rowLabels.length < 2 || rowLabels.length > MAX_ROWS
      || rowLabels.some((x) => !isStr(x))) {
    errors.push(`row_labels must be an array of 2 to ${MAX_ROWS} strings`);
  }
  const colLabels = r.col_labels;
  const maxCols = numeric ? MAX_COLS_NUMERIC : MAX_COLS_CATEGORICAL;
  if (!Array.isArray(colLabels) || colLabels.length < 1 || colLabels.some((x) => !isStr(x))) {
    errors.push(`col_labels must be an array of 1 to ${maxCols} strings`);
  } else if (colLabels.length > maxCols) {
    errors.push(
      numeric
        ? `numeric mode allows at most ${MAX_COLS_NUMERIC} columns`
        : `categorical mode allows at most ${MAX_COLS_CATEGORICAL} columns — text cells do not fit ${MAX_COLS_NUMERIC} at 343pt`
    );
  }
  if (errors.length > 0) return { ok: false, errors };

  const rows = (rowLabels as string[]).length;
  const cols = (colLabels as string[]).length;
  const need = rows * cols;

  const values = r.values ?? [];
  const textValues = r.text_values ?? [];
  if (numeric) {
    if (!Array.isArray(values) || values.some((v) => !finite(v))) {
      errors.push('values must be an array of finite numbers');
    } else if (values.length !== need) {
      // Rejected, never padded — padding invents data the model did not send.
      errors.push(`values must have exactly rows×cols = ${need} entries, got ${values.length}`);
    }
  } else if (!Array.isArray(textValues) || textValues.some((v) => !isStr(v))) {
    errors.push('text_values must be an array of strings');
  } else if (textValues.length !== need) {
    errors.push(`text_values must have exactly rows×cols = ${need} entries, got ${textValues.length}`);
  }

  const trendCol = r.trend_col ?? 0;
  if (numeric && !(isInt(trendCol) && trendCol >= 0 && trendCol < cols)) {
    errors.push(`trend_col must be an integer in 0..${cols - 1}`);
  }
  const hl = r.highlight_row ?? -1;
  if (!(isInt(hl) && (hl === -1 || (hl >= 0 && hl < rows)))) {
    errors.push(`highlight_row must be -1 or an integer in 0..${rows - 1}`);
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      cell_kind: kind as CellKind,
      row_labels: (rowLabels as string[]).map((s) => s.slice(0, MAX_ROW_LABEL)),
      col_labels: (colLabels as string[]).map((s) => s.slice(0, MAX_COL_LABEL)),
      values: numeric ? (values as number[]) : [],
      text_values: numeric ? [] : (textValues as string[]).map((s) => s.slice(0, MAX_TEXT_CELL)),
      trend_col: numeric ? (trendCol as number) : -1,
      highlight_row: hl as number,
      unit: isStr(r.unit) ? r.unit.slice(0, 10) : '',
      caption: isStr(r.caption) ? r.caption.slice(0, 40) : '',
    },
  };
}

/* ----------------------------------------------------------------- component */

function DataTableTrend({
  params, motion, width, height, theme,
}: WidgetRenderProps<DataTableTrendParams>) {
  const hlSv = motion.highlight_row;

  /* Scaffolding: grid geometry from params and the measured box only. */
  const frame = useMemo(() => {
    const rows = params.row_labels.length;
    const cols = params.col_labels.length;
    const left = PAD_SIDE;
    const right = width - PAD_SIDE - GUTTER_W;
    const top = PAD_TOP;
    const bottom = height - PAD_BOTTOM;

    const maxLabelChars = params.row_labels.reduce((m, s) => Math.max(m, s.length), 1);
    // The one width allowed to consult `width`, and only as a ceiling.
    const labelW = Math.min(0.32 * width, maxLabelChars * CELL_SIZE * 0.58 + 12);
    const gridLeft = left + labelW;
    const colW = Math.max(1, (right - gridLeft) / cols);
    const headerY = top + HEADER_H;
    const rowH = Math.max(1, (bottom - headerY) / rows);

    const v = column(params.values, cols, params.trend_col, rows);
    return {
      rows, cols, left, right, top, bottom, labelW, gridLeft, colW, headerY, rowH,
      anomalyRows: params.cell_kind === 'numeric' ? anomalies(v) : [],
    };
  }, [width, height, params]);

  const d = useMemo(() => derive(params), [params]);

  /**
   * The readout, fitted to the measured width.
   *
   * READOUT_SIZE stays fixed — it is chrome, and chrome never scales. But HOW
   * MANY CHARACTERS FIT is legitimately a function of the box, and treating
   * the string as if it were width-independent is what verify-render caught
   * here: the untruncated line ran off the board at both small sizes while
   * looking fine at 900. Same 0.58 char-width model the checker itself uses,
   * so what is built here is what it measures.
   *
   * Order matters when it does not all fit. The derived NUMBER is the thing
   * the lesson refers to, so it is never dropped; the caption is prose and
   * gives up its characters first.
   */
  const readout = useMemo(() => {
    const maxChars = Math.max(8, Math.floor((frame.right - frame.left) / (READOUT_SIZE * 0.58)));
    if (params.cell_kind !== 'numeric') {
      return (params.caption || 'comparison').slice(0, maxChars);
    }
    const sign = d.netChange > 0 ? '+' : '';
    const unit = params.unit ? ` ${params.unit}` : '';
    const breaks = d.anomalyCount > 0
      ? `   ${d.anomalyCount} break${d.anomalyCount > 1 ? 's' : ''}`
      : '';
    let value = `${sign}${formatCell(d.netChange)}${unit}${breaks}`;
    if (value.length > maxChars) value = `${sign}${formatCell(d.netChange)}${unit}`;
    const room = maxChars - value.length - 3;
    const cap = room > 4 ? `${params.caption.slice(0, room)}   ` : '';
    return `${cap}${value}`.slice(0, maxChars);
  }, [params, d, frame.left, frame.right]);

  const rowCentreY = (i: number) => frame.headerY + frame.rowH * (i + 0.5);
  const colCentreX = (c: number) => frame.gridLeft + frame.colW * (c + 0.5);

  /**
   * The band is the only element permitted to move, and it ALWAYS renders.
   *
   * `motionFor` in test-utils defaults an unsupplied key to 0, and 0 is a valid
   * row index — so -1 is the "no highlight" sentinel and the Rect is parked by
   * opacity rather than unmounted. Rendering it conditionally would change the
   * element count between two motion values, which scaffoldingDiffs reports as
   * a params/motion violation. Rect is deliberately not in SCAFFOLDING_TYPES;
   * every Line and Text in this widget is, so nothing else may move.
   */
  const bandProps = useAnimatedProps(() => {
    const h = hlSv.value;
    const clamped = Math.min(frame.rows - 1, Math.max(0, h));
    return {
      y: frame.headerY + frame.rowH * clamped,
      fillOpacity: h < 0 ? 0 : 0.16,
    };
  });

  const trendUp = d.trendSign > 0;
  const arrowX = frame.right + GUTTER_W / 2;
  const arrowTop = frame.headerY + 6;
  const arrowBot = frame.bottom - 6;
  const headY = trendUp ? arrowTop : arrowBot;
  const tailY = trendUp ? arrowBot : arrowTop;
  const headDir = trendUp ? 1 : -1;

  return (
    <Svg width={width} height={height}>
      {/* Swept band, under everything. */}
      <AnimatedRect
        animatedProps={bandProps}
        x={frame.left}
        width={Math.max(1, frame.right - frame.left)}
        height={frame.rowH}
        fill={theme.accent}
      />

      {/* Header labels. */}
      {params.col_labels.map((c, i) => (
        <SvgText
          key={`h${i}`}
          x={colCentreX(i)}
          y={frame.top + HEADER_SIZE}
          fill={theme.inkMuted}
          fontSize={HEADER_SIZE}
          fontFamily={theme.monoFontFamily}
          textAnchor="middle"
        >
          {c}
        </SvgText>
      ))}

      {/* TWO rules minimum, and this is not decoration. verify-render's
          boundsOf understands Path/Circle/Line/Rect but NOT text, so a table
          of pure text has a degenerate bounding box and fails the ink-coverage
          assertion despite rendering perfectly. Two rules at different y give
          the tree real extent. */}
      <Line
        x1={frame.left} y1={frame.headerY} x2={frame.right} y2={frame.headerY}
        stroke={theme.ink} strokeWidth={RULE_STROKE}
      />
      <Line
        x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom}
        stroke={theme.rule} strokeWidth={RULE_STROKE}
      />

      {/* Rows: entity label, then its cells. */}
      {params.row_labels.map((label, r) => (
        <G key={`r${r}`}>
          <SvgText
            x={frame.left}
            y={rowCentreY(r) + CELL_SIZE * 0.35}
            fill={theme.ink}
            fontSize={CELL_SIZE}
            fontFamily={theme.monoFontFamily}
          >
            {label}
          </SvgText>
          {params.col_labels.map((_, c) => {
            const idx = r * frame.cols + c;
            const text =
              params.cell_kind === 'numeric'
                ? formatCell(params.values[idx])
                : (params.text_values[idx] ?? '');
            return (
              <SvgText
                key={`c${c}`}
                x={colCentreX(c)}
                y={rowCentreY(r) + CELL_SIZE * 0.35}
                fill={theme.inkMuted}
                fontSize={CELL_SIZE}
                fontFamily={theme.monoFontFamily}
                textAnchor="middle"
              >
                {text}
              </SvgText>
            );
          })}
        </G>
      ))}

      {/* Where the trend breaks — the thing this widget computes rather than
          is told. One dot per anomalous row, in the gutter. */}
      {frame.anomalyRows.map((r) => (
        <Circle
          key={`a${r}`}
          cx={arrowX}
          cy={rowCentreY(r)}
          r={ANOMALY_R}
          fill={theme.ink}
        />
      ))}

      {/* Trend arrow, numeric mode only and only when there IS a direction. */}
      {params.cell_kind === 'numeric' && d.trendSign !== 0 && (
        <G>
          <Line
            x1={arrowX} y1={tailY} x2={arrowX} y2={headY}
            stroke={theme.accent} strokeWidth={ARROW_STROKE}
          />
          <Path
            d={
              `M${arrowX} ${headY}` +
              `L${arrowX - 4} ${headY + 7 * headDir}` +
              `L${arrowX + 4} ${headY + 7 * headDir}Z`
            }
            fill={theme.accent}
          />
        </G>
      )}

      <SvgText
        x={frame.left}
        y={PAD_TOP - READOUT_SIZE * 0.5}
        fill={theme.ink}
        fontSize={READOUT_SIZE}
        fontFamily={theme.monoFontFamily}
      >
        {readout}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const dataTableTrend: WidgetModule<DataTableTrendParams> = {
  id: 'data_table_trend',
  version: 1,
  // NCERT's period-2 ionisation enthalpies, so the default payload exercises
  // the anomaly path rather than a trivially monotone series.
  defaults: {
    cell_kind: 'numeric',
    row_labels: ['Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'],
    col_labels: ['IE1'],
    values: [520, 899, 801, 1086, 1402, 1314, 1681, 2081],
    text_values: [],
    trend_col: 0,
    highlight_row: -1,
    unit: 'kJ/mol',
    caption: 'First ionisation enthalpy, period 2',
  },
  // Exactly one, and it moves exactly one Rect's y. The band exists at every
  // frame; only its position changes, so the geometry is continuous. Every
  // other numeric param here — row count, column count, trend_col — changes
  // the ELEMENT COUNT, which is a snap wearing an animation's clothes and is
  // why field_lines ships with an empty list.
  animatable: ['highlight_row'],
  derived: [
    'trendSign', 'netChange', 'span', 'anomalyCount',
    'firstAnomaly', 'highlightValue', 'minValue', 'maxValue',
  ],
  computeDerived: derive,
  derivedAliases: {
    trendSign: ['trend', 'the trend', 'direction', 'across the period', 'down the group'],
    netChange: ['change', 'net change', 'overall change', 'increases', 'decreases'],
    span: ['span', 'range', 'spread', 'difference', 'from smallest to largest'],
    anomalyCount: ['anomaly', 'anomalies', 'exception', 'exceptions', 'breaks the trend'],
    firstAnomaly: ['first anomaly', 'first exception', 'where the trend breaks'],
    highlightValue: ['this value', 'the value', 'highlighted value', 'this element'],
    minValue: ['smallest', 'minimum', 'lowest'],
    maxValue: ['largest', 'maximum', 'highest'],
  },
  validate,
  Component: DataTableTrend,
};

export type { DataTableTrendParams };
