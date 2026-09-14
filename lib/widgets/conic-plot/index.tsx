/**
 * `conic_plot` — a circle, ellipse, parabola or hyperbola, with the parts the
 * syllabus names, and optionally a shaded region.
 *
 * Built from docs/conic-plot-spec.md, which was written from
 * docs/maths-widget-gap.md's measurement: 8 of 71 segments in Application of
 * Integrals ask for a region bounded by a circle or an ellipse, and it is the
 * ONE subtopic `xy_plot` declines in its own words. Everything else in that
 * chapter that fails is `model_chose_no_widget`, which this does not claim to
 * fix.
 *
 * CAPS ARE STATED AND ENFORCED HERE, up front, because of what happened to
 * `reaction_scheme`: it shipped with its character limits living only in the
 * client, the server never measured them, and 30 of 38 stored payloads could
 * not be drawn. `validate()` below refuses anything the board cannot draw,
 * including a view box that does not contain the conic — "renders, but wrong"
 * is the failure no gate catches unless it is checked at this layer.
 */
import React from 'react';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import {
  ARROW_LEN, DOT_R, EMPHASIS_STROKE, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE,
  PAD_EDGE, READOUT_BAND, READOUT_SIZE, textWidth,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  autoView, conicPath, eccentricity, focalDistance, latusRectumLength,
  regionArea, secondBranch,
  type ConicKind, type ConicMark, type ConicRegion, type ConicShape,
} from './conic-math';

const KINDS: ConicKind[] = ['circle', 'ellipse', 'parabola', 'hyperbola'];
const MARKS: ConicMark[] = ['foci', 'directrix', 'axes', 'vertices',
                            'latus_rectum', 'asymptotes'];
const REGIONS: ConicRegion[] = ['interior', 'chord', 'with_line'];
const ROTATIONS = [0, 90, 180, 270];

/** Same budget as every other widget's caption. */
export const MAX_CAPTION_CHARS = 40;
/** Axis labels and mark labels. */
export const MAX_LABEL_CHARS = 12;
/** More than this and the marks collide at REF_W before anything else fails. */
export const MAX_MARKS = 6;
/** The smallest real frame, as everywhere else — a floor derived at 900x430
 *  is not a floor (docs/small-screen-rendering-rules.md). */
export const REF_W = 343;
export const REF_H = 236;

export interface ConicPlotParams {
  kind: ConicKind;
  a: number;
  b: number;
  cx: number;
  cy: number;
  rotate_deg: number;
  show: ConicMark[];
  region: ConicRegion | null;
  line_a: number;
  line_b: number;
  line_c: number;
  shade: boolean;
  area_readout: boolean;
  x_min: number | null;
  x_max: number | null;
  y_min: number | null;
  y_max: number | null;
  x_label: string;
  y_label: string;
  caption: string;
  highlight: number;
}

const num = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

export function validateConicPlot(raw: unknown): ValidationResult<ConicPlotParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const kind = r.kind as ConicKind;
  if (!KINDS.includes(kind)) errors.push(`kind must be one of ${KINDS.join(', ')}`);

  const a = num(r.a) ? r.a : NaN;
  const b = num(r.b) ? r.b : (kind === 'circle' ? a : NaN);
  if (!(a > 0)) errors.push('a must be a finite number greater than 0');
  if (kind !== 'circle' && !(b > 0)) {
    errors.push('b must be a finite number greater than 0');
  }
  // REFUSED, not swapped. Swapping would silently redraw the figure with its
  // axes exchanged and every derived number still "correct" for a shape the
  // author did not ask for.
  if (kind === 'ellipse' && a > 0 && b > 0 && b > a) {
    errors.push('an ellipse needs a >= b; a is the semi-MAJOR axis');
  }

  const cx = num(r.cx) ? r.cx : 0;
  const cy = num(r.cy) ? r.cy : 0;
  const rot = num(r.rotate_deg) ? r.rotate_deg : 0;
  if (!ROTATIONS.includes(rot)) {
    errors.push(`rotate_deg must be one of ${ROTATIONS.join(', ')} — an arbitrary `
      + 'angle needs a rotated quadratic form and no figure in scope asks for one');
  }

  const showRaw = Array.isArray(r.show) ? (r.show as string[]) : [];
  if (showRaw.length > MAX_MARKS) errors.push(`show may name at most ${MAX_MARKS} marks`);
  const bad = showRaw.filter((m) => !MARKS.includes(m as ConicMark));
  if (bad.length) errors.push(`show contains unknown mark(s): ${bad.join(', ')}`);
  if (showRaw.includes('asymptotes') && kind !== 'hyperbola') {
    errors.push('only a hyperbola has asymptotes');
  }
  if (showRaw.includes('directrix') && kind === 'circle') {
    errors.push('a circle has no directrix');
  }
  if (showRaw.includes('foci') && kind === 'circle') {
    errors.push('a circle has no foci distinct from its centre');
  }

  const region = (r.region ?? null) as ConicRegion | null;
  if (region !== null && !REGIONS.includes(region)) {
    errors.push(`region must be null or one of ${REGIONS.join(', ')}`);
  }
  if (region === 'chord' && !(kind === 'circle' || kind === 'ellipse')) {
    errors.push('a chord region is only defined here for a circle or an ellipse');
  }

  for (const k of ['line_a', 'line_b', 'line_c'] as const) {
    if (r[k] !== undefined && !num(r[k])) errors.push(`${k} must be a finite number`);
  }
  const caption = typeof r.caption === 'string' ? r.caption : '';
  if (caption.length > MAX_CAPTION_CHARS) {
    errors.push(`caption must be at most ${MAX_CAPTION_CHARS} characters`);
  }
  for (const k of ['x_label', 'y_label'] as const) {
    const v = typeof r[k] === 'string' ? (r[k] as string) : '';
    if (v.length > MAX_LABEL_CHARS) {
      errors.push(`${k} must be at most ${MAX_LABEL_CHARS} characters`);
    }
  }
  if (errors.length) return { ok: false, errors };

  const shape: ConicShape = {
    kind, a, b: kind === 'circle' ? a : b, cx, cy,
    rotateDeg: rot as 0 | 90 | 180 | 270,
  };
  const auto = autoView(shape);
  const xMin = num(r.x_min) ? r.x_min : auto.xMin;
  const xMax = num(r.x_max) ? r.x_max : auto.xMax;
  const yMin = num(r.y_min) ? r.y_min : auto.yMin;
  const yMax = num(r.y_max) ? r.y_max : auto.yMax;
  if (!(xMax > xMin) || !(yMax > yMin)) {
    errors.push('the view box must have positive width and height');
  } else {
    // THE CHECK THAT CATCHES "renders, but wrong". A conic drawn half outside
    // its own frame passes every other test here and is useless on a board.
    const pts = conicPath(shape, 64);
    const inside = pts.filter(([x, y]) => x >= xMin && x <= xMax && y >= yMin && y <= yMax);
    const frac = inside.length / pts.length;
    const need = shape.kind === 'circle' || shape.kind === 'ellipse' ? 0.999 : 0.35;
    if (frac < need) {
      errors.push(
        `the view box holds only ${(frac * 100).toFixed(0)}% of the conic; `
        + 'widen x_min/x_max/y_min/y_max or shrink a/b'
      );
    }
  }
  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    params: {
      kind, a, b: kind === 'circle' ? a : b, cx, cy, rotate_deg: rot,
      show: showRaw as ConicMark[], region,
      line_a: num(r.line_a) ? r.line_a : 1,
      line_b: num(r.line_b) ? r.line_b : 0,
      line_c: num(r.line_c) ? r.line_c : 0,
      shade: r.shade === true,
      area_readout: r.area_readout !== false,
      x_min: xMin, x_max: xMax, y_min: yMin, y_max: yMax,
      x_label: (typeof r.x_label === 'string' ? r.x_label : 'x'),
      y_label: (typeof r.y_label === 'string' ? r.y_label : 'y'),
      caption,
      highlight: num(r.highlight) ? Math.trunc(r.highlight) : -1,
    },
  };
}

function shapeOf(p: ConicPlotParams): ConicShape {
  return { kind: p.kind, a: p.a, b: p.b, cx: p.cx, cy: p.cy,
           rotateDeg: p.rotate_deg as 0 | 90 | 180 | 270 };
}

function ConicPlotComponent({ params, width, height, theme }: WidgetRenderProps<ConicPlotParams>) {
  const p = params;
  const s = shapeOf(p);
  const left = PAD_EDGE + 2;
  const right = width - PAD_EDGE - 2;
  const top = PAD_EDGE;
  const bottom = height - PAD_EDGE - READOUT_BAND;
  const sx = (x: number) => left + ((x - p.x_min!) / (p.x_max! - p.x_min!)) * (right - left);
  const sy = (y: number) => bottom - ((y - p.y_min!) / (p.y_max! - p.y_min!)) * (bottom - top);
  const d = (pts: Array<[number, number]>) =>
    pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(2)},${sy(y).toFixed(2)}`).join('');

  const main = conicPath(s);
  const other = secondBranch(s);
  const c = focalDistance(s);
  const marks = p.show;

  return (
    <Svg width={width} height={height}>
      {marks.includes('axes') && (
        <G>
          <Line x1={sx(p.x_min!)} y1={sy(p.cy)} x2={sx(p.x_max!)} y2={sy(p.cy)}
                stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
          <Line x1={sx(p.cx)} y1={sy(p.y_min!)} x2={sx(p.cx)} y2={sy(p.y_max!)}
                stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
        </G>
      )}
      {p.shade && (p.kind === 'circle' || p.kind === 'ellipse') && (
        // The theme has no soft fill, so the shade is the accent at low opacity
          // rather than a colour invented here — an invented one would be the
          // only hue on the board nobody could re-theme.
          <Path d={`${d(main)}Z`} fill={theme.accent} fillOpacity={0.16} stroke="none" />
      )}
      <Path d={d(main)} fill="none" stroke={theme.ink} strokeWidth={LINE_STROKE} />
      {other && <Path d={d(other)} fill="none" stroke={theme.ink} strokeWidth={LINE_STROKE} />}
      {marks.includes('asymptotes') && s.kind === 'hyperbola' && (
        <G>
          {[1, -1].map((m) => (
            <Line key={m} x1={sx(p.x_min!)} y1={sy(p.cy + (m * p.b / p.a) * (p.x_min! - p.cx))}
                  x2={sx(p.x_max!)} y2={sy(p.cy + (m * p.b / p.a) * (p.x_max! - p.cx))}
                  stroke={theme.rule} strokeWidth={HAIRLINE_STROKE}
                  strokeDasharray="4,3" />
          ))}
        </G>
      )}
      {marks.includes('directrix') && s.kind !== 'circle' && (
        <Line x1={sx(p.cx - (s.kind === 'parabola' ? p.a : p.a / eccentricity(s)))}
              y1={sy(p.y_min!)}
              x2={sx(p.cx - (s.kind === 'parabola' ? p.a : p.a / eccentricity(s)))}
              y2={sy(p.y_max!)}
              stroke={theme.inkMuted} strokeWidth={HAIRLINE_STROKE} strokeDasharray="5,4" />
      )}
      {marks.includes('foci') && s.kind !== 'circle' && (
        <G>
          {(s.kind === 'parabola' ? [1] : [1, -1]).map((m) => (
            <Circle key={m} cx={sx(p.cx + m * c)} cy={sy(p.cy)} r={DOT_R}
                    fill={theme.accent} />
          ))}
        </G>
      )}
      {marks.includes('vertices') && (
        <G>
          {[1, -1].map((m) => (
            <Circle key={m} cx={sx(p.cx + m * p.a)} cy={sy(p.cy)} r={DOT_R - 1}
                    fill={theme.ink} />
          ))}
        </G>
      )}
      {p.caption ? (
        <SvgText x={left} y={height - PAD_EDGE} fontSize={READOUT_SIZE}
                 fill={theme.inkMuted} textAnchor="start">
          {p.caption}
        </SvgText>
      ) : null}
      {p.area_readout && regionArea(s, p.region, p.line_c) > 0 ? (
        <SvgText x={right} y={height - PAD_EDGE} fontSize={READOUT_SIZE}
                 fill={theme.ink} textAnchor="end">
          {`area ${regionArea(s, p.region, p.line_c).toFixed(2)}`}
        </SvgText>
      ) : null}
    </Svg>
  );
}

export const conicPlot: WidgetModule<ConicPlotParams> = {
  id: 'conic_plot' as never,
  version: 1,
  defaults: {
    kind: 'circle', a: 4, b: 4, cx: 0, cy: 0, rotate_deg: 0,
    show: ['axes', 'vertices'], region: 'interior',
    line_a: 1, line_b: 0, line_c: 0,
    shade: true, area_readout: true,
    x_min: -5.4, x_max: 5.4, y_min: -5.4, y_max: 5.4,
    x_label: 'x', y_label: 'y', caption: 'x² + y² = 16', highlight: -1,
  },
  // FOUR, the same ceiling useCueTrack allocates. `kind`, `region` and `show`
  // are deliberately absent: changing any of them mid-tween changes what the
  // picture IS, and the scaffolding-invariance rule says the frame must not
  // move while the values do.
  animatable: ['a', 'b', 'line_c', 'cx'],
  derived: ['area', 'eccentricity', 'focalDistance', 'latusRectum'],
  computeDerived(params) {
    const s = shapeOf(params);
    return {
      area: regionArea(s, params.region, params.line_c),
      eccentricity: eccentricity(s),
      focalDistance: focalDistance(s),
      latusRectum: latusRectumLength(s),
    };
  },
  derivedAliases: {
    area: ['area', 'region', 'shaded area'],
    eccentricity: ['eccentricity', 'e'],
    focalDistance: ['focal distance', 'focus', 'c'],
    latusRectum: ['latus rectum', 'latusrectum'],
  },
  validate: validateConicPlot,
  Component: ConicPlotComponent,
};
