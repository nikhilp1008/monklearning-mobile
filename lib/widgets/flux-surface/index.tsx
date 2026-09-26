/**
 * `flux_surface@1` — Φ = E A cos θ as a projection you can see, and the cube.
 *
 * N3, gap G8. Four objectives ask for one of two figures that none of
 * `field_lines`' nine configurations contains:
 *
 *   `patch`  a flat area element in a uniform field, with its OUTWARD NORMAL
 *            drawn, θ marked between the normal and the field, and the
 *            projected area A cos θ shown as the patch's shadow across the
 *            field — so the formula is read off the picture and θ = 90°
 *            visibly collapses to nothing.
 *   `cube`   a wire-frame cube with a point charge at its centre or at a
 *            vertex, which is the set-piece "flux through the faces of a
 *            cube" names and which nothing drew.
 *
 * Three stored boards asked for the first and got a plate configuration or
 * equipotential planes: "no flat surface, no normal and no theta, so
 * Phi = E A cos(theta) has nothing to be read off".
 *
 * Φ IS DERIVED. Like `vector_sum`'s resultant, it is what the figure
 * PRODUCES, and there is no parameter to state it with.
 *
 * SNAP-ONLY. Rotating the patch moves the normal, and the normal terminates
 * in the label n̂; θ's arc terminates in a label too. Per
 * lib/widgets/CLAUDE.md that makes the widget snap-only, and successive board
 * events at θ = 0°, 60°, 90° are how the collapse is taught.
 */
import React from 'react';
import Svg, { G, Line, Path, Polygon } from 'react-native-svg';

import { BoardText as SvgText } from '../board-text';
import {
  fitReadout, HAIRLINE_STROKE, LABEL_SIZE, LINE_STROKE, maxChars,
  PAD_EDGE, PAD_SIDE, READOUT_SIZE,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  cubeFlux, DEG, faceFlux, faceFluxes, flatFlux, POSITIONS, projectedArea,
  type ChargePosition,
} from './physics';

export const VIEWS = ['patch', 'cube'] as const;
export type FluxView = (typeof VIEWS)[number];

const CAPTION_SIZE = LABEL_SIZE;

export interface FluxSurfaceParams {
  view: FluxView;
  /** `patch`: uniform field strength, N/C. */
  e_field: number;
  /** `patch`: the patch's area, m². */
  area: number;
  /** `patch`: angle between the OUTWARD NORMAL and the field, degrees 0..180. */
  theta_deg: number;
  /** `cube`: the enclosed charge, coulombs. */
  charge_c: number;
  /** `cube`: where the charge sits. */
  position: ChargePosition;
  caption: string;
}

const isStr = (v: unknown): v is string => typeof v === 'string';
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function validate(raw: unknown): ValidationResult<FluxSurfaceParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  // Φ is what the figure produces. An author who types it has the wrong model
  // of the board, the same way `vector_sum`'s R did.
  for (const k of ['flux', 'phi', 'flux_value', 'face_flux']) {
    if (r[k] !== undefined) {
      errors.push(
        `"${k}" is not a parameter. The flux is DERIVED — E A cos θ for a `
        + `patch, q/6ε₀ or q/24ε₀ for a cube face — and drawn from that. Give `
        + `the field, the area and the angle, or the charge and its position.`);
    }
  }

  const view = r.view;
  if (!isStr(view) || !(VIEWS as readonly string[]).includes(view)) {
    errors.push(`view must be one of ${VIEWS.join(', ')}`);
    return { ok: false, errors };
  }

  if (view === 'patch') {
    if (!isNum(r.e_field) || r.e_field <= 0) {
      errors.push('e_field must be a positive finite number, in N/C');
    }
    if (!isNum(r.area) || r.area <= 0) {
      errors.push('area must be a positive finite number, in m²');
    }
    if (!isNum(r.theta_deg)) errors.push('theta_deg must be a finite number');
    else if (r.theta_deg < 0 || r.theta_deg > 180) {
      errors.push(
        `theta_deg is ${r.theta_deg}; the range is 0..180. It is the angle `
        + `between the field and the patch's OUTWARD NORMAL — not between the `
        + `field and the surface, which is its complement and the commonest `
        + `way to get the sign of Φ wrong.`);
    }
  } else {
    if (!isNum(r.charge_c) || r.charge_c === 0) {
      errors.push('charge_c must be a non-zero finite number, in coulombs');
    }
    const pos = r.position;
    if (!isStr(pos) || !(POSITIONS as readonly string[]).includes(pos)) {
      errors.push(`position must be one of ${POSITIONS.join(', ')}`);
    }
  }
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    params: {
      view: view as FluxView,
      e_field: isNum(r.e_field) ? r.e_field : 1000,
      area: isNum(r.area) ? r.area : 1,
      theta_deg: isNum(r.theta_deg) ? r.theta_deg : 0,
      charge_c: isNum(r.charge_c) ? r.charge_c : 1e-6,
      position: (isStr(r.position) && (POSITIONS as readonly string[]).includes(r.position)
        ? r.position : 'centre') as ChargePosition,
      caption: isStr(r.caption) ? r.caption.slice(0, 40) : '',
    },
  };
}

/* ------------------------------------------------------------------ render */

const ARROW = 6;

function head(x1: number, y1: number, x2: number, y2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const p = (d: number) =>
    [x2 - ARROW * Math.cos(a - d), y2 - ARROW * Math.sin(a - d)].join(',');
  return `${x2},${y2} ${p(0.5)} ${p(-0.5)}`;
}

/** `sci` keeps a big flux readable without a formatter each call site. */
function sci(v: number): string {
  if (v === 0) return '0';
  const a = Math.abs(v);
  if (a >= 1e-3 && a < 1e5) return v.toPrecision(3).replace(/\.?0+$/, '');
  const e = Math.floor(Math.log10(a));
  const m = v / 10 ** e;
  return `${m.toFixed(2)}e${e}`;
}

function FluxSurfaceView(
  { params, width, height, theme }: WidgetRenderProps<FluxSurfaceParams>,
) {
  const left = PAD_SIDE;
  const right = width - PAD_SIDE;
  const top = PAD_EDGE + LABEL_SIZE;
  const bottom = height - PAD_EDGE - READOUT_SIZE - CAPTION_SIZE - 8;
  const midY = (top + bottom) / 2;

  const phi = flatFlux(params.e_field, params.area, params.theta_deg);
  const proj = projectedArea(params.area, params.theta_deg);

  const readout = params.view === 'patch'
    ? `Φ ${sci(phi)}   A cos θ ${proj.toFixed(3)}   θ ${params.theta_deg}°`
    : `Φ cube ${sci(cubeFlux(params.charge_c, params.position))}   `
      + `per face ${sci(faceFlux(params.charge_c, params.position, false))}`;

  const label = (t: string, x: number, y: number, fill: string,
                 anchor: 'start' | 'middle' | 'end' = 'middle') => (
    <SvgText x={x} y={y} fill={fill} fontSize={LABEL_SIZE}
             fontFamily={theme.fontFamily} textAnchor={anchor}>{t}</SvgText>
  );

  /* --- patch: uniform field, area element, normal, theta, shadow --- */
  function patch() {
    const fieldX0 = left + 8;
    const fieldX1 = right - 8;
    const rows = 5;
    const arrows = [];
    for (let i = 0; i < rows; i++) {
      const y = top + 14 + i * ((bottom - top - 28) / (rows - 1));
      arrows.push(
        <G key={`f${i}`}>
          <Line x1={fieldX0} y1={y} x2={fieldX1 - 10} y2={y}
                stroke={theme.rule} strokeWidth={HAIRLINE_STROKE} />
          <Polygon points={head(fieldX0, y, fieldX1 - 10, y)} fill={theme.rule} />
        </G>,
      );
    }
    // The patch, seen edge-on and rotated by theta. Drawn as a parallelogram
    // so it reads as a surface in perspective rather than a bare line.
    const cx = (left + right) / 2 - 20;
    const halfLen = Math.min(58, (bottom - top) / 3);
    const t = params.theta_deg * DEG;
    // The patch's own plane is perpendicular to its normal; the normal makes
    // theta with the field (which points +x), so the patch tilts by theta too.
    const px = Math.sin(t) * halfLen;
    const py = Math.cos(t) * halfLen;
    const skew = 16;                    // the perspective offset
    const quad = [
      [cx - px, midY - py], [cx + px, midY + py],
      [cx + px + skew, midY + py - 7], [cx - px + skew, midY - py - 7],
    ].map((p) => p.join(',')).join(' ');
    const nx = cx + Math.cos(t) * 44;
    const ny = midY - Math.sin(t) * 44;
    const shadowHalf = Math.abs(Math.cos(t)) * halfLen;

    return (
      <G>
        {arrows}
        <Polygon points={quad} fill={theme.accent} fillOpacity={0.18}
                 stroke={theme.accent} strokeWidth={LINE_STROKE} />
        {/* the projected area — the patch's shadow on a plane across the
            field. At theta = 90 it is a point, which is the whole lesson. */}
        <Line x1={right - 26} y1={midY - shadowHalf} x2={right - 26}
              y2={midY + shadowHalf} stroke={theme.ink}
              strokeWidth={LINE_STROKE * 2} />
        {/* the outward normal */}
        <Line x1={cx} y1={midY} x2={nx} y2={ny} stroke={theme.ink}
              strokeWidth={LINE_STROKE} />
        <Polygon points={head(cx, midY, nx, ny)} fill={theme.ink} />
        {/* theta, between the normal and the field direction (+x) */}
        {/* A POLYLINE, not an `A` arc command. verify-render's `pathBounds`
            does not implement elliptical arcs, and reported this one as
            [0,0]-[357,344] on a 702x289 board — an out-of-bounds error for a
            26pt arc sitting in the middle of the figure. Sampling it as line
            segments costs eleven points and is measured correctly by every
            reader, the gate included. */}
        <Path d={Array.from({ length: 11 }, (_, i) => {
          const a = (t * i) / 10;
          return `${i === 0 ? 'M' : 'L'} ${cx + Math.cos(a) * 26} `
               + `${midY - Math.sin(a) * 26}`;
        }).join(' ')}
              fill="none" stroke={theme.inkMuted} strokeWidth={HAIRLINE_STROKE} />
        {label('n', nx + 10, ny - 2, theme.ink)}
        {label('θ', cx + 34, midY - 10, theme.inkMuted)}
        {label('A cos θ', right - 26, midY + shadowHalf + 14, theme.ink)}
        {label('E', fieldX0 + 14, top + 6, theme.rule, 'start')}
      </G>
    );
  }

  /* --- cube: wire frame, charge, the symmetry the objective names --- */
  function cube() {
    /* The oblique projection adds `d` to the width AND to the height — the
     * back face sits up and to the right — so the depth has to come out of
     * both budgets before the side is chosen. Sizing from `s` alone put the
     * back face at y = -16 on a 343x236 board: out of bounds at the top, at
     * the two narrow frames only. */
    const DEPTH = 0.38;
    const s = Math.max(40, Math.min((right - left - 30) / (1 + DEPTH),
                                    (bottom - top - 20) / (1 + DEPTH), 150));
    const d = s * DEPTH;
    const x0 = left + Math.max(8, (right - left - s - d) / 2);
    const y0 = midY - (s + d) / 2 + d;  // the front face, with room above
    const F = [[x0, y0], [x0 + s, y0], [x0 + s, y0 + s], [x0, y0 + s]];
    const B = F.map(([x, y]) => [x + d, y - d]);
    const edge = (a: number[], b: number[], k: string, dash?: string) => (
      <Line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={theme.ink}
            strokeWidth={HAIRLINE_STROKE} strokeDasharray={dash} />
    );
    const q = params.charge_c;
    const at = params.position === 'centre'
      ? [x0 + s / 2 + d / 2, y0 + s / 2 - d / 2]
      : [x0, y0 + s];                   // the near-bottom-left vertex
    return (
      <G>
        {F.map((p, i) => edge(p, F[(i + 1) % 4], `f${i}`))}
        {B.map((p, i) => edge(p, B[(i + 1) % 4], `b${i}`, '3 3'))}
        {F.map((p, i) => edge(p, B[i], `c${i}`, i === 0 ? undefined : '3 3'))}
        <Polygon points={`${at[0]},${at[1] - 5} ${at[0] + 5},${at[1]} `
                         + `${at[0]},${at[1] + 5} ${at[0] - 5},${at[1]}`}
                 fill={theme.accent} />
        {label('q', at[0] + 12, at[1] - 6, theme.accent)}
        {label(params.position === 'centre' ? 'q/6ε₀ per face'
                                            : 'q/24ε₀ per far face',
               (left + right) / 2, bottom + 2, theme.inkMuted)}
        {label(`${sci(q)} C`, x0, y0 - 4, theme.inkMuted, 'start')}
      </G>
    );
  }

  return (
    <Svg width={width} height={height}>
      {params.view === 'patch' ? patch() : cube()}
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

export const fluxSurface: WidgetModule<FluxSurfaceParams> = {
  id: 'flux_surface' as never,
  version: 1,
  defaults: {
    view: 'patch', e_field: 2000, area: 0.5, theta_deg: 60,
    charge_c: 8.854187817e-6, position: 'centre',
    caption: 'Φ = E A cos θ: only the projected area counts',
  },
  // SNAP-ONLY — the normal and the θ arc both terminate in labels. See the
  // note at the top of this file.
  animatable: [],
  derived: ['flux', 'projectedArea', 'cubeFlux', 'faceFlux', 'adjacentFaceFlux'],
  computeDerived(p) {
    return {
      flux: flatFlux(p.e_field, p.area, p.theta_deg),
      projectedArea: projectedArea(p.area, p.theta_deg),
      cubeFlux: cubeFlux(p.charge_c, p.position),
      faceFlux: faceFlux(p.charge_c, p.position, false),
      adjacentFaceFlux: faceFlux(p.charge_c, p.position, true),
    };
  },
  derivedAliases: {
    flux: ['flux', 'phi', 'electric flux'],
    projectedArea: ['projected area', 'a cos theta', 'effective area'],
    cubeFlux: ['total flux', 'flux out of the cube'],
    faceFlux: ['per face', 'through each face', 'one face'],
    adjacentFaceFlux: ['adjacent face', 'touching face'],
  },
  validate,
  Component: FluxSurfaceView,
};

export { validate, faceFluxes };
