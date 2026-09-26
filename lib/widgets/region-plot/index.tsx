/**
 * `region_plot@1` — two boundaries, one set of axes, and the region between.
 *
 * N3, gap G9. Five Application of Integrals objectives need a picture neither
 * existing plotter can make. `xy_plot` is v = f(u) and says so in its own
 * spec: "CANNOT: circles, ellipses, closed 2-D regions". `conic_plot` draws
 * one conic at a time and cannot overlay a second curve. The objectives —
 * the lens between a circle and a parabola, the modulus diamond, the
 * inequality wedge — sit exactly in the seam, and three rounds of
 * spec-wording moved the subtopic 0/8 → 0/8 → 0/8. Wording was never the
 * blocker; overlay and region shading were.
 *
 * WHAT IT DRAWS: an upper boundary, a lower boundary, the region between them
 * shaded, their crossings marked, and optionally the integration strips inside
 * the shading — because "the area is built from thin vertical strips" is one
 * of the objectives verbatim and no widget drew a strip.
 *
 * THE SPLIT ABSCISSA is DERIVED, never authored. `crossings()` finds it by
 * bisection on the difference of the two boundaries, so the dashed line
 * showing where the upper boundary changes is always where the curves
 * actually meet — not where an author believed they meet.
 *
 * `strict` picks the boundary stroke: solid for ≤, dashed for <. The
 * strictness of an inequality is part of what the region IS, and a picture
 * that draws both the same way has thrown it away.
 *
 * SNAP-ONLY: every crossing is marked with a label.
 */
import React from 'react';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

import { BoardText as SvgText } from '../board-text';
import {
  fitReadout, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE, maxChars,
  PAD_EDGE, PAD_SIDE, READOUT_SIZE,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  area, BOUNDARY_KINDS, crossings, domain, yAt,
  type Boundary, type BoundaryKind,
} from './regions';

const CAPTION_SIZE = LABEL_SIZE;
const SAMPLES = 160;
const MAX_STRIPS = 12;

export interface RegionPlotParams {
  upper: Boundary;
  lower: Boundary;
  x_min: number;
  x_max: number;
  y_min: number;
  y_max: number;
  /** Draw the integration strips inside the shading. */
  show_strips: boolean;
  /** Solid boundary for ≤, dashed for <. */
  strict: boolean;
  x_label: string;
  y_label: string;
  caption: string;
}

const isStr = (v: unknown): v is string => typeof v === 'string';
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function readBoundary(raw: unknown, where: string, errors: string[]): Boundary | null {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    errors.push(`${where} must be an object {kind, a, b, c, r}`);
    return null;
  }
  const o = raw as Record<string, unknown>;
  const kind = o.kind;
  if (!isStr(kind) || !(BOUNDARY_KINDS as readonly string[]).includes(kind)) {
    errors.push(`${where}.kind must be one of ${BOUNDARY_KINDS.join(', ')}`);
    return null;
  }
  // Keys this widget does not read, refused by name. `xy_plot` shipped
  // silently ignoring `expression` and `top`/`bottom`, and two stored boards
  // drew y = x for both halves because `a` defaulted to 1.
  const KNOWN = ['kind', 'a', 'b', 'c', 'r'];
  const extra = Object.keys(o).filter((k) => !KNOWN.includes(k));
  if (extra.length > 0) {
    errors.push(
      `${where} carries ${extra.join(', ')}, which this widget does not read — `
      + `a boundary is {kind, a, b, c, r} and its shape must be in those. `
      + `Keys that are ignored silently are how two stored xy_plot boards came `
      + `to draw y = x for both halves.`);
  }
  for (const k of ['a', 'b', 'c', 'r'] as const) {
    if (o[k] !== undefined && !isNum(o[k])) {
      errors.push(`${where}.${k} must be a finite number`);
    }
  }
  const bd: Boundary = {
    kind: kind as BoundaryKind,
    a: isNum(o.a) ? o.a : 1, b: isNum(o.b) ? o.b : 0,
    c: isNum(o.c) ? o.c : 0, r: isNum(o.r) ? o.r : 1,
  };
  if ((bd.kind === 'circle_upper' || bd.kind === 'circle_lower') && bd.r <= 0) {
    errors.push(`${where}.r is ${bd.r}; a circle boundary needs a positive radius`);
  }
  if (bd.kind === 'line' && bd.b !== 0) {
    errors.push(
      `${where}.b is ${bd.b} on a line, and a line is a·x + c — b is never `
      + `read. Use a parabola if the x² term is meant.`);
  }
  return bd;
}

function validate(raw: unknown): ValidationResult<RegionPlotParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  for (const k of ['split_at', 'intersection', 'area', 'region_area']) {
    if (r[k] !== undefined) {
      errors.push(
        `"${k}" is not a parameter. Where the boundaries cross, and the area `
        + `between them, are DERIVED from the two boundaries — a split abscissa `
        + `an author can type is one that can disagree with the curves drawn `
        + `beside it.`);
    }
  }

  const upper = readBoundary(r.upper, 'upper', errors);
  const lower = readBoundary(r.lower, 'lower', errors);
  for (const k of ['x_min', 'x_max', 'y_min', 'y_max'] as const) {
    if (!isNum(r[k])) errors.push(`${k} must be a finite number`);
  }
  if (errors.length > 0) return { ok: false, errors };

  const xMin = r.x_min as number;
  const xMax = r.x_max as number;
  const yMin = r.y_min as number;
  const yMax = r.y_max as number;
  if (xMax - xMin <= 0) errors.push('x_max must be greater than x_min');
  if (yMax - yMin <= 0) errors.push('y_max must be greater than y_min');
  if (errors.length > 0) return { ok: false, errors };

  // THE REGION MUST HAVE AREA. A view box in which the two boundaries never
  // separate is a picture of two curves, not of a region, and the whole
  // widget is the region.
  const a = area(upper!, lower!, xMin, xMax);
  const boxArea = (xMax - xMin) * (yMax - yMin);
  if (a < 0.01 * boxArea) {
    errors.push(
      `the region between these boundaries covers ${(a / boxArea * 100).toFixed(1)}% `
      + `of the view box, which is not a region anybody can see. Either the `
      + `boundaries do not separate over x ∈ [${xMin}, ${xMax}], or the box is `
      + `far larger than the region. Narrow the box to the region.`);
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      upper: upper!, lower: lower!,
      x_min: xMin, x_max: xMax, y_min: yMin, y_max: yMax,
      show_strips: r.show_strips === true,
      strict: r.strict === true,
      x_label: isStr(r.x_label) ? r.x_label.slice(0, 8) : 'x',
      y_label: isStr(r.y_label) ? r.y_label.slice(0, 8) : 'y',
      caption: isStr(r.caption) ? r.caption.slice(0, 40) : '',
    },
  };
}

/* ------------------------------------------------------------------ render */

function RegionPlotView(
  { params, width, height, theme }: WidgetRenderProps<RegionPlotParams>,
) {
  const p = params;
  const left = PAD_SIDE + 22;
  const right = width - PAD_SIDE;
  const top = PAD_EDGE + LABEL_SIZE;
  const bottom = height - PAD_EDGE - READOUT_SIZE - CAPTION_SIZE - 12;

  const X = (x: number) => left + ((x - p.x_min) / (p.x_max - p.x_min)) * (right - left);
  const Y = (y: number) => bottom - ((y - p.y_min) / (p.y_max - p.y_min)) * (bottom - top);

  const sample = (bd: Boundary) => {
    const [lo, hi] = domain(bd, p.x_min, p.x_max);
    const pts: string[] = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const x = lo + ((hi - lo) * i) / SAMPLES;
      const y = yAt(bd, x);
      if (!Number.isFinite(y)) continue;
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${X(x)} ${Y(y)}`);
    }
    return pts.join(' ');
  };

  /* The shaded region, as one closed path: along the upper boundary, back
   * along the lower. Built from the SAME sampling the curves are drawn from,
   * so the shading cannot disagree with its own edges. */
  const fill = (() => {
    const [lo, hi] = [Math.max(domain(p.upper, p.x_min, p.x_max)[0],
                               domain(p.lower, p.x_min, p.x_max)[0]),
                      Math.min(domain(p.upper, p.x_min, p.x_max)[1],
                               domain(p.lower, p.x_min, p.x_max)[1])];
    const fwd: string[] = [];
    const back: string[] = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const x = lo + ((hi - lo) * i) / SAMPLES;
      const yu = yAt(p.upper, x);
      const yl = yAt(p.lower, x);
      if (!Number.isFinite(yu) || !Number.isFinite(yl) || yu < yl) continue;
      fwd.push(`${fwd.length === 0 ? 'M' : 'L'} ${X(x)} ${Y(yu)}`);
      back.unshift(`L ${X(x)} ${Y(yl)}`);
    }
    return fwd.length === 0 ? '' : `${fwd.join(' ')} ${back.join(' ')} Z`;
  })();

  const cross = crossings(p.upper, p.lower, p.x_min, p.x_max);
  const regionArea = area(p.upper, p.lower, p.x_min, p.x_max);
  const dash = p.strict ? '5 4' : undefined;

  const strips: React.ReactElement[] = [];
  if (p.show_strips) {
    const [lo, hi] = [Math.max(domain(p.upper, p.x_min, p.x_max)[0],
                               domain(p.lower, p.x_min, p.x_max)[0]),
                      Math.min(domain(p.upper, p.x_min, p.x_max)[1],
                               domain(p.lower, p.x_min, p.x_max)[1])];
    for (let i = 1; i < MAX_STRIPS; i++) {
      const x = lo + ((hi - lo) * i) / MAX_STRIPS;
      const yu = yAt(p.upper, x);
      const yl = yAt(p.lower, x);
      if (!Number.isFinite(yu) || !Number.isFinite(yl) || yu <= yl) continue;
      strips.push(
        <Line key={`s${i}`} x1={X(x)} y1={Y(yl)} x2={X(x)} y2={Y(yu)}
              stroke={theme.accent} strokeWidth={HAIRLINE_STROKE}
              strokeOpacity={0.55} />,
      );
    }
  }

  const readout = `area ${regionArea.toFixed(3)}`
    + (cross.length > 0
      ? `   meets at x ${cross.map((c) => c.toFixed(2)).join(', ')}`
      : '');

  return (
    <Svg width={width} height={height}>
      {/* axes */}
      <Line x1={left} y1={Y(Math.min(Math.max(0, p.y_min), p.y_max))}
            x2={right} y2={Y(Math.min(Math.max(0, p.y_min), p.y_max))}
            stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
      <Line x1={X(Math.min(Math.max(0, p.x_min), p.x_max))} y1={top}
            x2={X(Math.min(Math.max(0, p.x_min), p.x_max))} y2={bottom}
            stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />

      {fill ? <Path d={fill} fill={theme.accent} fillOpacity={0.16} /> : null}
      <G>{strips}</G>

      <Path d={sample(p.upper)} fill="none" stroke={theme.ink}
            strokeWidth={LINE_STROKE} strokeDasharray={dash} />
      <Path d={sample(p.lower)} fill="none" stroke={theme.ink}
            strokeWidth={LINE_STROKE} strokeDasharray={dash} />

      {/* the split abscissa — DERIVED, at the crossings the curves actually
          have, never at one an author typed */}
      {cross.map((x, i) => (
        <G key={`x${i}`}>
          <Line x1={X(x)} y1={top} x2={X(x)} y2={bottom} stroke={theme.inkMuted}
                strokeWidth={HAIRLINE_STROKE} strokeDasharray="3 3" />
          <Circle cx={X(x)} cy={Y(yAt(p.upper, x))} r={3} fill={theme.accent} />
        </G>
      ))}

      {/* INSIDE the plot, not under it. Below the axis it shares a band with
          the readout, and at 340x340 — where the readout is widest relative
          to the board — the two collided: 'x' against
          'area 2.000   meets at x -1.00, 1.00'. There is nothing under the
          axis but the readout, so the label belongs above it. */}
      <SvgText x={right - 2} y={bottom - 5} fill={theme.inkMuted}
               fontSize={LABEL_SIZE} fontFamily={theme.fontFamily}
               textAnchor="end">{p.x_label}</SvgText>
      <SvgText x={left - 6} y={top + LABEL_SIZE} fill={theme.inkMuted}
               fontSize={LABEL_SIZE} fontFamily={theme.fontFamily}
               textAnchor="end">{p.y_label}</SvgText>

      <SvgText x={PAD_SIDE} y={height - PAD_EDGE - CAPTION_SIZE - 4}
               fill={theme.inkMuted} fontSize={READOUT_SIZE}
               fontFamily={theme.monoFontFamily}>
        {fitReadout('', readout, right - PAD_SIDE, READOUT_SIZE,
                    theme.monoFontFamily)}
      </SvgText>
      {p.caption ? (
        <SvgText x={PAD_SIDE} y={height - PAD_EDGE} fill={theme.inkMuted}
                 fontSize={CAPTION_SIZE} fontFamily={theme.fontFamily}>
          {p.caption.slice(0, maxChars(right - PAD_SIDE, CAPTION_SIZE,
                                       p.caption, theme.fontFamily))}
        </SvgText>
      ) : null}
    </Svg>
  );
}

export const regionPlot: WidgetModule<RegionPlotParams> = {
  id: 'region_plot' as never,
  version: 1,
  defaults: {
    upper: { kind: 'circle_upper', a: 1, b: 0, c: 0, r: 2 },
    lower: { kind: 'parabola', a: 1, b: 0, c: -2, r: 1 },
    x_min: -1.6, x_max: 1.6, y_min: -2.2, y_max: 2.2,
    show_strips: true, strict: false, x_label: 'x', y_label: 'y',
    caption: 'The region between a circle and a parabola',
  },
  animatable: [],
  derived: ['regionArea', 'splitCount', 'firstSplit'],
  computeDerived(p) {
    const c = crossings(p.upper, p.lower, p.x_min, p.x_max);
    return {
      regionArea: area(p.upper, p.lower, p.x_min, p.x_max),
      splitCount: c.length,
      firstSplit: c.length > 0 ? c[0] : NaN,
    };
  },
  derivedAliases: {
    regionArea: ['area', 'the area', 'region area'],
    splitCount: ['intersections', 'crossings'],
    firstSplit: ['split point', 'split abscissa', 'where they meet'],
  },
  validate,
  Component: RegionPlotView,
};

export { validate };
