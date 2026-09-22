/**
 * `vector_sum@1` — the parallelogram law, drawn so the derivation is visible.
 *
 * N3, gap G6. Four Motion in a Plane objectives ask a student to ADD two
 * vectors and read the magnitude and direction formulae off the geometry, and
 * `free_body_forces` has no parallelogram and no notion of a resultant. The
 * cost of that is in the stored corpus: one board listed A, B **and R** in one
 * `forces` array, so the head-to-tail chain ran A → B → R and closed on
 * A+B+R, and R was drawn at `magnitude_rel 1.0` when |A+B| is 1.48.
 *
 * So the one rule this widget is built around: **R IS DERIVED AND CANNOT BE
 * AUTHORED.** There is no `r` parameter to be wrong. `validate()` refuses a
 * payload that tries, by name, because an author who reaches for it has the
 * wrong model of the figure and should be told so rather than ignored.
 *
 * SNAP-ONLY, and this is the contract rather than an omission. Moving θ moves
 * R, and R terminates in a LABEL. lib/widgets/CLAUDE.md: "A widget whose
 * moving geometry is LABEL-TERMINATED is snap-only... a bond that swings while
 * its label stays put is a wrong diagram, not a slightly-off one."
 * `SCAFFOLDING_TYPES` includes Text, so a tweened θ would be reported as a
 * params/motion violation — correctly. Successive board events with different
 * θ give the same teaching for free, and that is how the θ = 0°/90°/180°
 * objective is meant to be driven.
 */
import React from 'react';
import Svg, { G, Line, Path, Polygon } from 'react-native-svg';

import { BoardText as SvgText } from '../board-text';
import {
  fitReadout, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE,
  PAD_EDGE, PAD_SIDE, READOUT_SIZE, maxChars,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import { components, resultant, resultantRange } from './geometry';

/** The caption sits under the readout at the board's smallest size. */
const CAPTION_SIZE = LABEL_SIZE;

export const MODES = ['parallelogram', 'components'] as const;
export type VectorSumMode = (typeof MODES)[number];

export interface VectorSumParams {
  mode: VectorSumMode;
  /** |A|. Arbitrary units — the figure is a construction, not a measurement. */
  a_mag: number;
  /** |B| in `parallelogram`; the single vector's magnitude in `components`. */
  b_mag: number;
  /** The angle BETWEEN A and B (parallelogram), or from the x-axis
   *  (components). Degrees, 0..180. */
  theta_deg: number;
  a_label: string;
  b_label: string;
  /** Draw the perpendicular from B's head onto the line of A, with the right
   *  angle glyph and the two segments labelled. This is the construction the
   *  magnitude formula is read off, so it defaults ON. */
  show_perpendicular: boolean;
  caption: string;
}

/** Labels are drawn beside an arrowhead; more than this and they collide. */
const MAX_LABEL = 6;
const MIN_MAG = 0.1;
const MAX_MAG = 100;

const isStr = (v: unknown): v is string => typeof v === 'string';
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function validate(raw: unknown): ValidationResult<VectorSumParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  // THE ONE REFUSAL THIS WIDGET EXISTS FOR. An author reaching for `r` or
  // `resultant` has the wrong model of the figure — the resultant is what the
  // construction PRODUCES — and silently ignoring the key would let them
  // believe the board drew what they asked for.
  for (const k of ['r', 'r_mag', 'resultant', 'resultant_mag', 'alpha_deg']) {
    if (r[k] !== undefined) {
      errors.push(
        `"${k}" is not a parameter. The resultant is DERIVED from a_mag, `
        + `b_mag and theta_deg by the parallelogram law and drawn from that — `
        + `a resultant an author can type is one an author can get wrong, and `
        + `a stored board already listed A, B and R as three forces and closed `
        + `the chain on A+B+R. Give the two vectors and the angle between them.`);
    }
  }

  const mode = r.mode;
  if (!isStr(mode) || !(MODES as readonly string[]).includes(mode)) {
    errors.push(`mode must be one of ${MODES.join(', ')}`);
  }
  for (const [k, v] of [['a_mag', r.a_mag], ['b_mag', r.b_mag]] as const) {
    if (!isNum(v)) errors.push(`${k} must be a finite number`);
    else if (v < MIN_MAG || v > MAX_MAG) {
      errors.push(`${k} is ${v}; the drawable range is ${MIN_MAG}..${MAX_MAG}`);
    }
  }
  const theta = r.theta_deg;
  if (!isNum(theta)) errors.push('theta_deg must be a finite number');
  else if (theta < 0 || theta > 180) {
    errors.push(
      `theta_deg is ${theta}; the range is 0..180. The angle BETWEEN two `
      + `vectors is never reflex — beyond 180 it is the same pair measured the `
      + `other way round, and the parallelogram would be drawn mirrored.`);
  }
  for (const k of ['a_label', 'b_label'] as const) {
    const v = r[k];
    if (v !== undefined && !isStr(v)) errors.push(`${k} must be a string`);
    else if (isStr(v) && v.trim().length > MAX_LABEL) {
      errors.push(
        `${k} "${v}" is ${v.trim().length} characters, ${v.trim().length - MAX_LABEL} `
        + `over the ${MAX_LABEL} that fits beside an arrowhead at 343x236 `
        + `without touching the arrow it names. Use the book's symbol.`);
    }
  }
  // A RESULTANT TOO SHORT TO DRAW. At A=B, θ=180° it is the zero vector: no
  // arrow, no direction, and the "R" label sits on top of the shared tail
  // that A and B also start from. Near that, the arrowhead is longer than the
  // shaft. The bound is relative to the inputs because the figure is a
  // construction in arbitrary units — 0.05 of the longer vector is where the
  // 7pt arrowhead stops fitting inside its own arrow at 343x236.
  if (errors.length === 0 && mode === 'parallelogram') {
    const s = resultant(r.a_mag as number, r.b_mag as number, r.theta_deg as number);
    const longest = Math.max(r.a_mag as number, r.b_mag as number);
    if (s.r < 0.05 * longest) {
      errors.push(
        `A=${r.a_mag} and B=${r.b_mag} at ${r.theta_deg}° give a resultant of `
        + `${s.r.toFixed(3)}, which is under 5% of the longer vector and cannot `
        + `carry an arrowhead or a label clear of the tail. At exactly A=B and `
        + `θ=180° it is the zero vector, which has no direction to draw at all. `
        + `If the objective is that opposed equal vectors cancel, say it in the `
        + `caption — a picture of nothing is not a picture of cancellation.`);
    }
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      mode: mode as VectorSumMode,
      a_mag: r.a_mag as number,
      b_mag: r.b_mag as number,
      theta_deg: r.theta_deg as number,
      a_label: (isStr(r.a_label) ? r.a_label.trim() : 'A') || 'A',
      b_label: (isStr(r.b_label) ? r.b_label.trim() : 'B') || 'B',
      show_perpendicular: r.show_perpendicular !== false,
      caption: isStr(r.caption) ? r.caption.slice(0, 40) : '',
    },
  };
}

/* ------------------------------------------------------------------ render */

const ARROW = 7;

function arrowHead(x1: number, y1: number, x2: number, y2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const p = (d: number) => [
    x2 - ARROW * Math.cos(a - d), y2 - ARROW * Math.sin(a - d),
  ].join(',');
  return `${x2},${y2} ${p(0.45)} ${p(-0.45)}`;
}

function VectorSumView({ params, width, height, theme }: WidgetRenderProps<VectorSumParams>) {
  const { a_mag, b_mag, theta_deg, mode } = params;
  const sum = resultant(a_mag, b_mag, theta_deg);
  const comp = components(b_mag, theta_deg);

  const left = PAD_SIDE;
  const right = width - PAD_SIDE;
  const top = PAD_EDGE + LABEL_SIZE;
  const bottom = height - PAD_EDGE - READOUT_SIZE - CAPTION_SIZE - 8;

  /* THE SCALE IS COMPUTED FROM THE WHOLE FIGURE, including the resultant and
   * the perpendicular foot, so nothing can leave the box. It depends on
   * a_mag, b_mag and theta_deg — all `params`, none of them animatable — so
   * the frame is fixed for a given board, which is the params/motion rule
   * even though this widget tweens nothing. */
  const xs = [0, a_mag, sum.along, sum.r * Math.cos(sum.alphaDeg * Math.PI / 180)];
  const ys = [0, sum.across, sum.r * Math.sin(sum.alphaDeg * Math.PI / 180)];
  const spanX = Math.max(...xs) - Math.min(...xs) || 1;
  const spanY = Math.max(...ys) - Math.min(...ys) || 1;
  const pad = 26;                       // room for arrowheads and their labels
  const scale = Math.min((right - left - pad * 2) / spanX,
                         (bottom - top - pad * 2) / spanY);
  const originX = left + pad - Math.min(...xs) * scale;
  const originY = bottom - pad;
  const P = (x: number, y: number): [number, number] =>
    [originX + x * scale, originY - y * scale];

  const [ax, ay] = P(a_mag, 0);
  const [bx, by] = P(sum.along, sum.across);
  const [rx, ry] = P(a_mag + sum.along, sum.across);
  const [ox, oy] = P(0, 0);
  const [fx, fy] = P(sum.along, 0);

  /* COLLINEAR IS A DIFFERENT DRAWING, not a thin parallelogram.
   *
   * At θ=0 or θ=180 the parallelogram has no area: A and B land on the same
   * line, drawn one on top of the other, and the figure is a horizontal
   * stripe. The gate calls it degenerate — 2.3% ink at every frame — and it
   * is right to: a student cannot see two arrows that occupy the same pixels.
   *
   * These are also the two angles the objective names as its special cases,
   * so refusing them was not an option. The textbook draws this case
   * HEAD-TO-TAIL instead: A, then B continuing from A's head, with R on its
   * own baseline below. That is the other method the same objective asks for
   * ("head-to-tail and parallelogram methods"), and it is legible at θ=0 and
   * θ=180 precisely because it does not rely on the angle between them.
   */
  const collinear = Math.abs(sum.across) < 1e-6 * Math.max(a_mag, b_mag);

  const readout = mode === 'parallelogram'
    ? `R ${sum.r.toFixed(2)}   α ${sum.alphaDeg.toFixed(1)}°   θ ${theta_deg}°`
    : `${params.b_label}x ${comp.x.toFixed(2)}   ${params.b_label}y ${comp.y.toFixed(2)}`;

  const label = (t: string, x: number, y: number, fill: string,
                 anchor: 'start' | 'middle' | 'end' = 'middle') => (
    <SvgText x={x} y={y} fill={fill} fontSize={LABEL_SIZE}
             fontFamily={theme.fontFamily} textAnchor={anchor}>{t}</SvgText>
  );

  return (
    <Svg width={width} height={height}>
      {mode === 'parallelogram' && collinear ? (
        (() => {
          const rowY = (i: number) => top + pad + i * ((bottom - top - pad * 2) / 2);
          const span = Math.max(a_mag + Math.abs(sum.along), sum.r) || 1;
          const sc = (right - left - pad * 2) / span;
          const x0 = left + pad;
          const X = (v: number) => x0 + v * sc;
          const bEnd = a_mag + sum.along;
          return (
            <G>
              {/* head to tail: A, then B from A's head */}
              <Line x1={X(0)} y1={rowY(0)} x2={X(a_mag)} y2={rowY(0)}
                    stroke={theme.ink} strokeWidth={LINE_STROKE} />
              <Polygon points={arrowHead(X(0), rowY(0), X(a_mag), rowY(0))}
                       fill={theme.ink} />
              <Line x1={X(a_mag)} y1={rowY(0)} x2={X(bEnd)} y2={rowY(0)}
                    stroke={theme.ink} strokeWidth={LINE_STROKE} />
              <Polygon points={arrowHead(X(a_mag), rowY(0), X(bEnd), rowY(0))}
                       fill={theme.ink} />
              {/* R on its own baseline, so it is never under another arrow */}
              <Line x1={X(0)} y1={rowY(1)} x2={X(sum.r)} y2={rowY(1)}
                    stroke={theme.accent} strokeWidth={LINE_STROKE * 2} />
              <Polygon points={arrowHead(X(0), rowY(1), X(sum.r), rowY(1))}
                       fill={theme.accent} />
              {/* the dashed drop showing R ends where the chain ended */}
              <Line x1={X(sum.r)} y1={rowY(0)} x2={X(sum.r)} y2={rowY(1)}
                    stroke={theme.rule} strokeWidth={HAIRLINE_STROKE}
                    strokeDasharray="3 3" />
              {label(params.a_label, X(a_mag / 2), rowY(0) - 8, theme.ink)}
              {label(params.b_label, X((a_mag + bEnd) / 2), rowY(0) - 8, theme.ink)}
              {label('R', X(sum.r / 2), rowY(1) - 8, theme.accent)}
            </G>
          );
        })()
      ) : mode === 'parallelogram' ? (
        <G>
          {/* the completed parallelogram, light and dashed — it is
              CONSTRUCTION, and must not read as two more vectors */}
          <Line x1={ax} y1={ay} x2={rx} y2={ry} stroke={theme.rule}
                strokeWidth={HAIRLINE_STROKE} strokeDasharray="4 4" />
          <Line x1={bx} y1={by} x2={rx} y2={ry} stroke={theme.rule}
                strokeWidth={HAIRLINE_STROKE} strokeDasharray="4 4" />

          {params.show_perpendicular && (
            <G>
              <Line x1={ox} y1={oy} x2={fx} y2={fy} stroke={theme.rule}
                    strokeWidth={HAIRLINE_STROKE} />
              <Line x1={bx} y1={by} x2={fx} y2={fy} stroke={theme.rule}
                    strokeWidth={HAIRLINE_STROKE} strokeDasharray="3 3" />
              {/* the right-angle glyph at the foot */}
              <Path d={`M ${fx - 7} ${fy} L ${fx - 7} ${fy - 7} L ${fx} ${fy - 7}`}
                    fill="none" stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
            </G>
          )}

          {/* A and B from the shared tail */}
          <Line x1={ox} y1={oy} x2={ax} y2={ay} stroke={theme.ink}
                strokeWidth={LINE_STROKE} />
          <Polygon points={arrowHead(ox, oy, ax, ay)} fill={theme.ink} />
          <Line x1={ox} y1={oy} x2={bx} y2={by} stroke={theme.ink}
                strokeWidth={LINE_STROKE} />
          <Polygon points={arrowHead(ox, oy, bx, by)} fill={theme.ink} />

          {/* R — heavier and in the accent, a different KIND of object */}
          <Line x1={ox} y1={oy} x2={rx} y2={ry} stroke={theme.accent}
                strokeWidth={LINE_STROKE * 2} />
          <Polygon points={arrowHead(ox, oy, rx, ry)} fill={theme.accent} />

          {label(params.a_label, ax + 12, ay + 4, theme.ink)}
          {label(params.b_label, bx - 12, by - 4, theme.ink)}
          {label('R', rx + 12, ry - 6, theme.accent)}
        </G>
      ) : (
        <G>
          <Line x1={ox} y1={oy} x2={P(comp.x, 0)[0]} y2={oy} stroke={theme.rule}
                strokeWidth={HAIRLINE_STROKE} strokeDasharray="4 4" />
          <Line x1={P(comp.x, 0)[0]} y1={oy} x2={P(comp.x, comp.y)[0]}
                y2={P(comp.x, comp.y)[1]} stroke={theme.rule}
                strokeWidth={HAIRLINE_STROKE} strokeDasharray="4 4" />
          <Path d={`M ${P(comp.x, 0)[0] - 7} ${oy} L ${P(comp.x, 0)[0] - 7} ${oy - 7} `
                   + `L ${P(comp.x, 0)[0]} ${oy - 7}`}
                fill="none" stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
          <Line x1={ox} y1={oy} x2={P(comp.x, comp.y)[0]} y2={P(comp.x, comp.y)[1]}
                stroke={theme.accent} strokeWidth={LINE_STROKE * 2} />
          <Polygon points={arrowHead(ox, oy, P(comp.x, comp.y)[0], P(comp.x, comp.y)[1])}
                   fill={theme.accent} />
          {label(params.b_label, P(comp.x, comp.y)[0] + 12,
                 P(comp.x, comp.y)[1] - 6, theme.accent)}
        </G>
      )}

      <SvgText x={left} y={height - PAD_EDGE - CAPTION_SIZE - 4}
               fill={theme.inkMuted} fontSize={READOUT_SIZE}
               fontFamily={theme.monoFontFamily}>
        {fitReadout('', readout, right - left, READOUT_SIZE, theme.monoFontFamily)}
      </SvgText>
      {params.caption ? (
        <SvgText x={left} y={height - PAD_EDGE} fill={theme.inkMuted}
                 fontSize={CAPTION_SIZE} fontFamily={theme.fontFamily}>
          {params.caption.slice(0, maxChars(right - left, CAPTION_SIZE,
                                            params.caption, theme.fontFamily))}
        </SvgText>
      ) : null}
    </Svg>
  );
}

export const vectorSum: WidgetModule<VectorSumParams> = {
  id: 'vector_sum' as never,
  version: 1,
  defaults: {
    mode: 'parallelogram', a_mag: 3, b_mag: 4, theta_deg: 90,
    a_label: 'A', b_label: 'B', show_perpendicular: true,
    caption: 'Parallelogram law: R from A, B and θ',
  },
  // SNAP-ONLY. Moving θ moves R, and R terminates in a label — see the note
  // at the top of this file. Successive board events with different θ give
  // the θ = 0°/90°/180° objective exactly what it needs.
  animatable: [],
  derived: ['r', 'alphaDeg', 'along', 'across', 'rMin', 'rMax'],
  computeDerived(p) {
    const s = resultant(p.a_mag, p.b_mag, p.theta_deg);
    const [rMin, rMax] = resultantRange(p.a_mag, p.b_mag);
    return { r: s.r, alphaDeg: s.alphaDeg, along: s.along, across: s.across, rMin, rMax };
  },
  derivedAliases: {
    r: ['resultant', 'magnitude of the resultant', 'R'],
    alphaDeg: ['direction', 'angle of the resultant', 'alpha'],
    along: ['B cos theta', 'component along'],
    across: ['B sin theta', 'perpendicular component'],
    rMin: ['minimum resultant', 'smallest'],
    rMax: ['maximum resultant', 'largest'],
  },
  validate,
  Component: VectorSumView,
};

export { validate };
export type { VectorSumParams as Params };
