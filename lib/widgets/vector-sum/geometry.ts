/**
 * vector_sum — the parallelogram law, and the perpendicular foot it is read off.
 *
 * Nothing here is a worklet and nothing here renders. The whole point of the
 * widget is that **R is DERIVED**: the gap doc records what happened when it
 * was not. `free_body_forces` accepted a payload listing A, B *and* R as three
 * entries in one `forces` array, so the head-to-tail chain ran A then B then R
 * and closed on A+B+R, and R was drawn at `magnitude_rel 1.0` when |A+B| is
 * 1.48. A resultant an author can type is a resultant an author can get wrong.
 *
 * WHAT THIS COMPUTES, and what it refuses to be told:
 *
 *   R  = sqrt(A² + B² + 2AB cos θ)        the parallelogram law
 *   α  = atan2(B sin θ, A + B cos θ)      direction of R, measured from A
 *   foot = (B cos θ, B sin θ)             the perpendicular from B's head onto
 *                                         the line of A — the two segments the
 *                                         derivation actually reads
 *
 * REFERENCE VALUES, recomputed by hand before this file was written and
 * checked against the special cases NCERT Class 11 Ch.4 sets as exercises:
 *
 *   A=3, B=4, θ=90°   R=5           α=53.130°   the 3-4-5 triangle
 *   A=1, B=1, θ=60°   R=1.732051    α=30°       R = √3, the equilateral case
 *   A=5, B=3, θ=0°    R=8           α=0°        collinear, same sense
 *   A=5, B=3, θ=180°  R=2           α=0°        collinear, opposed
 *   A=1, B=1, θ=90°   R=1.414214    α=45°       R = √2
 *
 * The θ=0 and θ=180 rows are the two the objectives name as "special cases",
 * and they are also where a naive implementation divides by zero: α is
 * `atan2`, not `atan(B sin θ / (A + B cos θ))`, because at θ=180° the
 * denominator can be exactly 0 and the quotient form gives NaN.
 *
 * `atan2` DOES NOT RESCUE THE FULLY DEGENERATE CASE, and an earlier draft of
 * this comment claimed it did. At A=B, θ=180° the resultant is the zero
 * vector and has no direction at all; floating point then decides the answer,
 * because `sin(π)` is 1.2246e-16 rather than 0 while `a + b·cos(π)` is exactly
 * 0, so `atan2` returns 90°. A confident right angle for a vector that does
 * not exist.
 *
 * So the convention is stated rather than stumbled into: **when |R| is zero
 * the direction is reported as 0**, and `vector_sum`'s `validate()` REFUSES
 * the payload outright, because a figure whose resultant is a point is not a
 * figure. The test that caught this is the one that swept θ to 180 with
 * A = B; it is kept.
 */

export interface VectorSum {
  /** |R|, in the same units as a and b. */
  readonly r: number;
  /** Direction of R measured from A, in degrees, in [0, 180]. */
  readonly alphaDeg: number;
  /** B cos θ — the segment along A. NEGATIVE when θ is obtuse, which is the
   *  case where the foot lands behind the tail and the figure must still be
   *  drawn honestly rather than flipped. */
  readonly along: number;
  /** B sin θ — the perpendicular segment. Always ≥ 0 for θ in [0, 180]. */
  readonly across: number;
}

export const DEG = Math.PI / 180;

/** The parallelogram law. `thetaDeg` is the angle BETWEEN a and b. */
export function resultant(a: number, b: number, thetaDeg: number): VectorSum {
  const t = thetaDeg * DEG;
  const along = b * Math.cos(t);
  const across = b * Math.sin(t);
  const r = Math.sqrt(a * a + b * b + 2 * a * b * Math.cos(t));
  // atan2, NOT atan(across / (a + along)): at θ=180° with a=b the denominator
  // is exactly 0, and the quotient form returns NaN where the answer is 0.
  // See the note above: at A=B, θ=180° the resultant is the zero vector and
  // `atan2(1.2e-16, 0)` reports 90° for it. Zero magnitude, zero direction —
  // and `validate()` refuses the payload so it never reaches a board.
  const alphaDeg = r < 1e-12 ? 0 : Math.atan2(across, a + along) / DEG;
  return { r, alphaDeg, along, across };
}

/**
 * The range a resultant can take, which is the other thing these objectives
 * ask for: |A−B| ≤ R ≤ A+B, with the bounds reached at θ=180° and θ=0°.
 */
export function resultantRange(a: number, b: number): readonly [number, number] {
  return [Math.abs(a - b), a + b];
}

/** One vector's components on the axes, for the `components` mode. */
export function components(mag: number, thetaDeg: number) {
  const t = thetaDeg * DEG;
  return { x: mag * Math.cos(t), y: mag * Math.sin(t) };
}
