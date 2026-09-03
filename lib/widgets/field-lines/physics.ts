/**
 * Electric field lines — point charges by superposition, uniform field between
 * parallel plates. Nothing here is a worklet: `charge_uc` is the only numeric
 * param and it is NOT animatable (see index.tsx's `animatable: []` for why —
 * line COUNT is a function of charge, so tweening charge continuously would
 * mean adding/removing Path elements mid-tween, which is a snap dressed up as
 * an animation, not a real one). Every cue-driven change here is a snap
 * re-render on the JS thread, so this file is plain TypeScript, not
 * worklet-safe geometry.
 *
 * Reference results (verified against k = 8.988e9 N*m^2/C^2, eps0 = 8.854e-12 F/m):
 *   point, charge_uc=10, at REF_DISTANCE_M=0.10 m
 *     -> E = k*q/r^2 = 8.988e9 * 10e-6 / 0.01 = 8.988e6 N/C, radially outward
 *   dipole, charge_uc=10 (+/-10uC), SEPARATION_M=0.20 m, at the midpoint
 *     -> each charge is 0.10 m away; fields from +q and -q point the SAME
 *        direction at the midpoint (toward the negative charge) and add:
 *        E = 2 * (k*q/0.10^2) = 2 * 8.988e6 = 1.798e7 N/C
 *   like_charges, charge_uc=10 (+10uC, +10uC), SEPARATION_M=0.20 m, at the midpoint
 *     -> equal charges, equal distance, fields point in OPPOSITE directions
 *        at the midpoint and cancel: E = 0 exactly, regardless of charge_uc
 *   parallel_plates, charge_uc=10 (read as sigma = 10 uC/m^2)
 *     -> E = sigma / eps0 = 10e-6 / 8.854e-12 = 1.129e6 N/C, independent of
 *        plate separation (the standard infinite-sheet result)
 */

export interface FieldLinesParams {
  configuration: 'point' | 'dipole' | 'like_charges' | 'parallel_plates';
  /** Magnitude, in microcoulombs (or microcoulombs per m^2 for parallel_plates). */
  charge_uc: number;
  show_arrows: boolean;
  annotate: 'neutral_point' | 'termination' | null;
}

export interface FieldLinesDerived {
  /** N/C, at a configuration-specific reference point — see the header comment. */
  fieldMagnitude: number;
  /** Field lines drawn per charge. Equals charge_uc, rounded — the proportionality
   *  IS the lesson (docs/small-screen-rendering-rules.md), so this is never thinned. */
  lineCount: number;
  [key: string]: number;
}

export const K = 8.988e9;
export const EPS0 = 8.854e-12;

/** World constants — metres, fixed regardless of charge_uc so the scale never
 *  depends on the one param a cue can change (CLAUDE.md's params/motion rule,
 *  which applies to any value scaffolding depends on, animatable or not). */
export const SEPARATION_M = 0.2;
export const PLATE_GAP_M = 0.18;
export const REF_DISTANCE_M = 0.1;
export const WORLD_HALF_W = 0.3;
export const WORLD_HALF_H = 0.16;

const STEP_M = 0.004;
const MAX_STEPS = 260;

export interface Charge {
  x: number;
  y: number;
  /** Coulombs, signed. */
  q: number;
}

export function chargesFor(p: FieldLinesParams): Charge[] {
  const q = p.charge_uc * 1e-6;
  switch (p.configuration) {
    case 'point':
      return [{ x: 0, y: 0, q }];
    case 'dipole':
      return [
        { x: -SEPARATION_M / 2, y: 0, q },
        { x: SEPARATION_M / 2, y: 0, q: -q },
      ];
    case 'like_charges':
      return [
        { x: -SEPARATION_M / 2, y: 0, q },
        { x: SEPARATION_M / 2, y: 0, q },
      ];
    case 'parallel_plates':
      return [];
  }
}

export function fieldAt(charges: readonly Charge[], x: number, y: number): { ex: number; ey: number } | null {
  let ex = 0;
  let ey = 0;
  for (const c of charges) {
    const dx = x - c.x;
    const dy = y - c.y;
    const r2 = dx * dx + dy * dy;
    if (r2 < 1e-8) return null;
    const r = Math.sqrt(r2);
    const e = (K * c.q) / r2;
    ex += (e * dx) / r;
    ey += (e * dy) / r;
  }
  return { ex, ey };
}

/**
 * Traces one field line by stepping along the normalised E direction. Stops
 * at a negative charge (absorption), at the world bounds (representing a line
 * that continues to infinity), or after MAX_STEPS.
 */
export function traceFieldLine(
  charges: readonly Charge[],
  start: { x: number; y: number },
  worldHalfW: number,
  worldHalfH: number,
  absorbR: number
): Array<[number, number]> {
  const pts: Array<[number, number]> = [[start.x, start.y]];
  let x = start.x;
  let y = start.y;
  for (let i = 0; i < MAX_STEPS; i++) {
    const f = fieldAt(charges, x, y);
    if (!f) break;
    const mag = Math.hypot(f.ex, f.ey);
    if (mag < 1e-9) break;
    x += (f.ex / mag) * STEP_M;
    y += (f.ey / mag) * STEP_M;
    pts.push([x, y]);
    if (Math.abs(x) > worldHalfW || Math.abs(y) > worldHalfH) break;
    const hitNegative = charges.some((c) => c.q < 0 && Math.hypot(x - c.x, y - c.y) < absorbR);
    if (hitNegative) break;
  }
  return pts;
}

/** Converts traced world points (metres) into an SVG path `d` string. World
 *  and pixel space share the same y-down convention here, so no axis flip. */
export function pathFromWorldPoints(
  points: ReadonlyArray<readonly [number, number]>,
  originX: number,
  originY: number,
  pxPerM: number
): string {
  let d = '';
  for (let i = 0; i < points.length; i++) {
    const [wx, wy] = points[i];
    const px = originX + wx * pxPerM;
    const py = originY + wy * pxPerM;
    d += (i === 0 ? 'M' : 'L') + px.toFixed(2) + ' ' + py.toFixed(2);
  }
  return d;
}

/** The zero-field point, only meaningful (and only ever exactly zero) for two
 *  equal charges of the same sign — see the header comment's third reference. */
export function neutralPointWorld(p: FieldLinesParams): { x: number; y: number } | null {
  return p.configuration === 'like_charges' ? { x: 0, y: 0 } : null;
}

/** Where field lines terminate on a finite point — only exists when the
 *  configuration has a sink for flux (a negative charge or plate). A single
 *  positive charge or two like charges have no finite termination: their
 *  lines all run to the world bounds, standing in for infinity. */
export function terminationPointWorld(p: FieldLinesParams): { x: number; y: number } | null {
  if (p.configuration === 'dipole') return { x: SEPARATION_M / 2, y: 0 };
  if (p.configuration === 'parallel_plates') return { x: PLATE_GAP_M / 2, y: 0 };
  return null;
}

export function deriveFieldLines(p: FieldLinesParams): FieldLinesDerived {
  const q = p.charge_uc * 1e-6;
  let fieldMagnitude: number;
  switch (p.configuration) {
    case 'point':
      fieldMagnitude = (K * q) / (REF_DISTANCE_M * REF_DISTANCE_M);
      break;
    case 'dipole': {
      const r = SEPARATION_M / 2;
      fieldMagnitude = 2 * ((K * q) / (r * r));
      break;
    }
    case 'like_charges':
      fieldMagnitude = 0;
      break;
    case 'parallel_plates':
      fieldMagnitude = q / EPS0;
      break;
  }
  return { fieldMagnitude, lineCount: Math.round(p.charge_uc) };
}
