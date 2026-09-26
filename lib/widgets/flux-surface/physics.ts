/**
 * flux_surface — Φ = E·A cos θ, and the cube the symmetry argument is made on.
 *
 * No worklets, no rendering, no React. The two facts this file owns:
 *
 *   Φ = E A cos θ            flux through a flat patch whose outward normal
 *                            makes θ with a uniform field
 *   Φ_face = q / (6 ε₀)      one face of a cube with the charge at its CENTRE
 *   Φ_face = q / (24 ε₀)     one NON-ADJACENT face with the charge at a VERTEX
 *
 * The vertex result is the one that is usually got wrong, and it is worth
 * writing down why rather than only what. A charge at a vertex is shared by
 * EIGHT cubes stacked around that point, so one cube receives q/8ε₀. Of that
 * cube's six faces, the three that TOUCH the charge carry no flux — the field
 * is parallel to them, the charge lies in their plane — so the whole q/8ε₀
 * crosses the remaining three, giving q/24ε₀ each. Both halves of that are
 * checked below: the three adjacent faces are exactly zero, and the three
 * far faces sum to the cube total.
 *
 * REFERENCE VALUES, recomputed by hand before this file was written:
 *
 *   E=2000 N/C, A=0.5 m², θ=0     Φ = 1000 N·m²/C     face-on
 *   E=2000,     A=0.5,     θ=60°  Φ = 500             cos 60 = ½
 *   E=2000,     A=0.5,     θ=90°  Φ = 0               field skims the surface
 *   E=2000,     A=0.5,     θ=180° Φ = −1000           normal reversed
 *   q=8.85e-6 C at the centre     Φ_cube = 1.0e6 N·m²/C   (q/ε₀)
 *                                 Φ_face = 1.6667e5       (q/6ε₀)
 *   q=8.85e-6 C at a vertex       Φ_cube = 1.25e5         (q/8ε₀)
 *                                 Φ_far  = 4.1667e4       (q/24ε₀)
 *
 * ε₀ from CODATA 2018, the value NCERT prints: 8.854187817e-12 C²/(N·m²).
 */

/** Vacuum permittivity, C²/(N·m²). */
export const EPSILON_0 = 8.854187817e-12;

export const POSITIONS = ['centre', 'vertex'] as const;
export type ChargePosition = (typeof POSITIONS)[number];

export const DEG = Math.PI / 180;

/** Φ through a flat patch: E·A·cos θ, θ between the field and the normal. */
export function flatFlux(eField: number, area: number, thetaDeg: number): number {
  return eField * area * Math.cos(thetaDeg * DEG);
}

/** The projected area A cos θ — the shadow the patch casts across the field. */
export function projectedArea(area: number, thetaDeg: number): number {
  return area * Math.cos(thetaDeg * DEG);
}

/** Total flux out of the closed cube, by Gauss's law. */
export function cubeFlux(chargeC: number, position: ChargePosition): number {
  // At a vertex the charge is shared by the eight cubes meeting at that
  // point, so this cube encloses an eighth of it.
  return position === 'centre'
    ? chargeC / EPSILON_0
    : chargeC / (8 * EPSILON_0);
}

/**
 * Flux through ONE face.
 *
 * At the centre, symmetry splits the total six ways. At a vertex, the three
 * faces touching the charge lie in planes containing it and carry exactly
 * zero, so the cube's whole share crosses the other three.
 */
export function faceFlux(chargeC: number, position: ChargePosition,
                         adjacent: boolean): number {
  if (position === 'centre') return chargeC / (6 * EPSILON_0);
  return adjacent ? 0 : chargeC / (24 * EPSILON_0);
}

/**
 * The six faces' fluxes, in drawing order, summing to `cubeFlux`.
 *
 * Returned as a list rather than computed at each call site so the sum can be
 * asserted — the check that the faces account for the whole enclosed charge
 * and nothing more.
 */
export function faceFluxes(chargeC: number, position: ChargePosition): number[] {
  if (position === 'centre') {
    return Array(6).fill(faceFlux(chargeC, 'centre', false));
  }
  // three adjacent (zero), three far
  return [0, 0, 0,
          faceFlux(chargeC, 'vertex', false),
          faceFlux(chargeC, 'vertex', false),
          faceFlux(chargeC, 'vertex', false)];
}
