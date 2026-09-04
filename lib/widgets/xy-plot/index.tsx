import React, { useMemo } from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  areaPath,
  curvePath,
  curveRange,
  derive,
  statistics,
  tickStep,
  type CurveKind,
  type PlotMode,
  type XyPlotParams,
} from './plot-math';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/**
 * Chrome constants — device points, NEVER a function of width/height.
 * docs/small-screen-rendering-rules.md. Chosen to sit clear of the render
 * harness's 11px / 1.2 floors rather than on them.
 */
const TICK_LABEL_SIZE = 12;
const AXIS_TITLE_SIZE = 12;
const READOUT_SIZE = 14;
const GRIDLINE_STROKE = 1.5;
const AXIS_STROKE = 1.6;
const CURVE_STROKE = 2.6;
const MARKER_STROKE = 1.6;
const DOT_R = 4;
const SAMPLES = 96;

/**
 * Left padding is a CONTAINER SIZED FROM THE CHROME IT HOLDS, not a fraction
 * of the frame — the rule docs/small-screen-rendering-rules.md added after
 * projectile-motion's PAD.bottom shipped the opposite mistake. What sits in
 * it is a y-tick label (fixed TICK_LABEL_SIZE, right-anchored) plus its gap,
 * so it is measured in the same units the label is.
 */
const PAD_LEFT = TICK_LABEL_SIZE * 3.2 + 8;
const PAD_RIGHT = 14;
/** Holds the readout line, which is fixed-size text. */
const PAD_TOP = READOUT_SIZE * 1.6 + 6;
/** Holds an x-tick label, then the axis title, both fixed-size, plus descender. */
const PAD_BOTTOM = TICK_LABEL_SIZE * 3.1 + 6;

const CURVES: CurveKind[] = ['line', 'parabola', 'sine', 'exponential', 'reciprocal'];
const MODES: PlotMode[] = ['curve', 'area', 'data'];

/* ------------------------------------------------------------------ validate */

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function validate(raw: unknown): ValidationResult<XyPlotParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const mode = r.mode;
  const curve = r.curve ?? 'parabola';
  if (typeof mode !== 'string' || !(MODES as string[]).includes(mode)) {
    errors.push(`mode must be one of ${MODES.join(', ')}`);
  }
  if (typeof curve !== 'string' || !(CURVES as string[]).includes(curve)) {
    errors.push(`curve must be one of ${CURVES.join(', ')}`);
  }
  for (const k of ['a', 'b', 'c'] as const) {
    if (r[k] !== undefined && !finite(r[k])) errors.push(`${k} must be a finite number`);
  }
  const a = finite(r.a) ? r.a : 1;
  const b = finite(r.b) ? r.b : 0;
  const c = finite(r.c) ? r.c : 0;

  const values = r.values ?? [];
  if (!Array.isArray(values) || values.some((v) => !finite(v))) {
    errors.push('values must be an array of finite numbers');
  }
  if (mode === 'data' && Array.isArray(values) && values.length < 2) {
    errors.push('data mode needs at least 2 values');
  }

  let xMin = finite(r.x_min) ? r.x_min : 0;
  let xMax = finite(r.x_max) ? r.x_max : 5;
  if (!(xMax > xMin)) errors.push('x_max must be greater than x_min');

  // A reciprocal through zero is not a rendering problem to clamp away, it is
  // a different diagram. Rejected rather than silently shifted.
  if (curve === 'reciprocal' && xMin <= 0 && xMax >= 0) {
    errors.push('reciprocal curve cannot span x = 0; keep the domain on one side of it');
  }
  if (errors.length > 0) return { ok: false, errors };

  xMin = clamp(xMin, -1000, 1000);
  xMax = clamp(xMax, -1000, 1000);
  const sFrom = clamp(finite(r.shade_from) ? r.shade_from : xMin, xMin, xMax);
  const sTo = clamp(finite(r.shade_to) ? r.shade_to : xMax, xMin, xMax);

  return {
    ok: true,
    params: {
      mode: mode as PlotMode,
      curve: curve as CurveKind,
      // Bounded so a runaway coefficient cannot produce a curve that is a
      // vertical line on every board — the readable range, not the safe one.
      a: clamp(a, -100, 100),
      b: clamp(b, -100, 100),
      c: clamp(c, -100, 100),
      x_min: xMin,
      x_max: xMax,
      shade_from: sFrom,
      shade_to: sTo,
      // Capped so the dot plot stays a plot rather than a smear; a dataset
      // longer than this is a data_table_trend, not an xy_plot.
      values: (values as number[]).slice(0, 60),
      x_label: typeof r.x_label === 'string' ? r.x_label.slice(0, 40) : 'x',
      y_label: typeof r.y_label === 'string' ? r.y_label.slice(0, 40) : 'y',
    },
  };
}

/* ----------------------------------------------------------------- component */

function fmt(v: number): string {
  if (!isFinite(v)) return '—';
  const r = Math.round(v * 100) / 100;
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
}

function XyPlot({ params, motion, width, height, theme }: WidgetRenderProps<XyPlotParams>) {
  const shadeSv = motion.shade_to;

  /*
   * Static scaffolding: axes, gridlines, ticks. Computed from `params` only,
   * and specifically NOT from `shade_to` — the axis must hold still while the
   * shaded region sweeps, or the two states cannot be compared.
   */
  const frame = useMemo(() => {
    const left = PAD_LEFT;
    const right = width - PAD_RIGHT;
    const top = PAD_TOP;
    const bottom = height - PAD_BOTTOM;
    const plotW = Math.max(1, right - left);
    const plotH = Math.max(1, bottom - top);

    const isData = params.mode === 'data';
    const stats = statistics(params.values);

    let xMin: number, xMax: number, yMin: number, yMax: number;
    if (isData) {
      xMin = 0;
      xMax = Math.max(1, params.values.length + 1);
      const lo = Math.min(...params.values, 0);
      const hi = Math.max(...params.values, 1);
      const padY = (hi - lo) * 0.15 || 1;
      yMin = lo - padY;
      yMax = hi + padY;
    } else {
      xMin = params.x_min;
      xMax = params.x_max;
      const r = curveRange(params.curve, params.a, params.b, params.c, xMin, xMax, SAMPLES);
      const padY = (r.yMax - r.yMin) * 0.12;
      yMin = r.yMin - padY;
      yMax = r.yMax + padY;
    }
    // Always show the x-axis when it is nearly in range, so "area under the
    // curve" has a visible floor to sit on.
    if (yMin > 0 && yMin < (yMax - yMin) * 0.5) yMin = 0;
    if (yMax < 0 && -yMax < (yMax - yMin) * 0.5) yMax = 0;

    const pxPerX = plotW / (xMax - xMin);
    const pxPerY = plotH / (yMax - yMin);
    const originX = left;
    // Pixel y of the value 0 — where the x-axis is drawn, clamped into the box
    // so a curve entirely above or below zero still gets a baseline.
    const zeroY = Math.min(bottom, Math.max(top, bottom - (0 - yMin) * pxPerY));

    const xStep = tickStep(xMax - xMin);
    const yStep = tickStep(yMax - yMin);
    const xTicks: number[] = [];
    for (let t = Math.ceil(xMin / xStep) * xStep; t <= xMax + 1e-9; t += xStep) xTicks.push(t);
    const yTicks: number[] = [];
    for (let t = Math.ceil(yMin / yStep) * yStep; t <= yMax + 1e-9; t += yStep) yTicks.push(t);

    return {
      left, right, top, bottom, plotW, plotH,
      xMin, xMax, yMin, yMax, pxPerX, pxPerY, originX, zeroY,
      xTicks, yTicks, isData, stats,
    };
  }, [width, height, params]);

  const d = useMemo(() => derive(params), [params]);

  const toPx = (x: number) => frame.originX + (x - frame.xMin) * frame.pxPerX;
  const toPy = (y: number) => frame.bottom - (y - frame.yMin) * frame.pxPerY;

  const staticCurve = useMemo(
    () =>
      frame.isData
        ? ''
        : curvePath(
            params.curve, params.a, params.b, params.c,
            frame.xMin, frame.xMax,
            frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
            frame.pxPerX, frame.pxPerY, SAMPLES
          ),
    [params, frame]
  );

  const shadeProps = useAnimatedProps(() => ({
    d:
      params.mode === 'area'
        ? areaPath(
            params.curve, params.a, params.b, params.c,
            params.shade_from, shadeSv.value,
            frame.xMin,
            frame.originX, frame.bottom + frame.yMin * frame.pxPerY,
            frame.pxPerX, frame.pxPerY, SAMPLES
          )
        : '',
  }));

  return (
    <Svg width={width} height={height}>
      {/* Gridlines and ticks — scaffolding, params-only. */}
      <G>
        {frame.xTicks.map((t) => (
          <G key={`x${t}`}>
            <Line
              x1={toPx(t)} y1={frame.top} x2={toPx(t)} y2={frame.bottom}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={toPx(t)} y={frame.bottom + TICK_LABEL_SIZE * 1.35}
              fill={theme.inkMuted} fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor="middle"
            >
              {fmt(t)}
            </SvgText>
          </G>
        ))}
        {frame.yTicks.map((t) => (
          <G key={`y${t}`}>
            <Line
              x1={frame.left} y1={toPy(t)} x2={frame.right} y2={toPy(t)}
              stroke={theme.rule} strokeWidth={GRIDLINE_STROKE}
            />
            <SvgText
              x={frame.left - 6} y={toPy(t) + TICK_LABEL_SIZE * 0.35}
              fill={theme.inkMuted} fontSize={TICK_LABEL_SIZE}
              fontFamily={theme.monoFontFamily} textAnchor="end"
            >
              {fmt(t)}
            </SvgText>
          </G>
        ))}
      </G>

      {/* The shaded region sweeps; everything above holds still. */}
      {params.mode === 'area' && (
        <AnimatedPath animatedProps={shadeProps} fill={theme.accent} fillOpacity={0.16} />
      )}

      {!frame.isData && (
        <Path
          d={staticCurve} fill="none" stroke={theme.accent}
          strokeWidth={CURVE_STROKE} strokeLinecap="round" strokeLinejoin="round"
        />
      )}

      {/* Data mode: one bar + dot per observation, with mean and median rules. */}
      {frame.isData &&
        params.values.map((v, i) => (
          <G key={`v${i}`}>
            <Line
              x1={toPx(i + 1)} y1={toPy(0)} x2={toPx(i + 1)} y2={toPy(v)}
              stroke={theme.accent} strokeWidth={MARKER_STROKE}
            />
            <Circle cx={toPx(i + 1)} cy={toPy(v)} r={DOT_R} fill={theme.accent} />
          </G>
        ))}
      {frame.isData && (
        <G>
          <Line
            x1={frame.left} y1={toPy(frame.stats.mean)} x2={frame.right} y2={toPy(frame.stats.mean)}
            stroke={theme.ink} strokeWidth={MARKER_STROKE} strokeDasharray="6 4"
          />
          <SvgText
            x={frame.right - 4} y={toPy(frame.stats.mean) - 5}
            fill={theme.ink} fontSize={TICK_LABEL_SIZE}
            fontFamily={theme.monoFontFamily} textAnchor="end"
          >
            {`mean ${fmt(frame.stats.mean)}`}
          </SvgText>
        </G>
      )}

      {/* Axes last, over the fill, so the baseline reads as the boundary. */}
      <Line
        x1={frame.left} y1={frame.zeroY} x2={frame.right} y2={frame.zeroY}
        stroke={theme.ink} strokeWidth={AXIS_STROKE}
      />
      <Line
        x1={frame.left} y1={frame.top} x2={frame.left} y2={frame.bottom}
        stroke={theme.ink} strokeWidth={AXIS_STROKE}
      />

      <SvgText
        x={frame.right} y={frame.bottom + TICK_LABEL_SIZE * 3.0}
        fill={theme.inkMuted} fontSize={AXIS_TITLE_SIZE}
        fontFamily={theme.monoFontFamily} textAnchor="end"
      >
        {params.x_label.toUpperCase()}
      </SvgText>

      <SvgText
        x={frame.left} y={PAD_TOP - READOUT_SIZE * 0.5}
        fill={theme.ink} fontSize={READOUT_SIZE} fontFamily={theme.monoFontFamily}
      >
        {params.mode === 'area'
          ? `area ${fmt(d.area)}`
          : params.mode === 'data'
            ? `mean ${fmt(d.mean)}   median ${fmt(d.median)}   sd ${fmt(d.stdDev)}`
            : `${params.y_label} vs ${params.x_label}`}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const xyPlot: WidgetModule<XyPlotParams> = {
  id: 'xy_plot',
  version: 1,
  defaults: {
    mode: 'area',
    curve: 'parabola',
    a: 1, b: 0, c: 0,
    x_min: 0, x_max: 3,
    shade_from: 0, shade_to: 2,
    values: [],
    x_label: 'x',
    y_label: 'y',
  },
  // Only `shade_to`. It sweeps a region continuously, which is a real
  // animation of a real quantity — the area readout and the shaded width move
  // together. The coefficients are deliberately NOT animatable: changing `a`
  // rescales the curve's own y-range, so the axis would have to move
  // mid-tween and the before/after would stop being comparable (CLAUDE.md §3,
  // the same reason projectile_motion's pxPerM ignores angle).
  animatable: ['shade_to'],
  derived: ['area', 'mean', 'median', 'variance', 'stdDev'],
  computeDerived: derive,
  derivedAliases: {
    area: ['area', 'the area', 'region', 'bigger', 'smaller', 'grows', 'shrinks'],
    mean: ['mean', 'average'],
    median: ['median', 'middle value'],
    variance: ['variance', 'spread'],
    stdDev: ['standard deviation', 'sd', 'sigma', 'scatter'],
  },
  validate,
  Component: XyPlot,
};

export type { XyPlotParams };
