/**
 * `lcr_resonance@1` — the series LCR circuit's frequency response, exactly.
 *
 * Every function here is closed-form and worklet-safe. No sampling of a
 * black box: the student reads f0, the peak current and the bandwidth off
 * this board, so the curve must BE the formula rather than resemble it.
 *
 * NCERT Physics XII, ch7 §7.6-7.7. Checked against three worked values, which
 * are asserted in __tests__ rather than trusted here:
 *
 *   L = 5.0 H, C = 80 uF, R = 40 ohm, V = 230 V   (NCERT Example 7.7)
 *     w0 = 1/sqrt(LC) = 1/sqrt(5 * 80e-6) = 50 rad/s
 *     I0 = V/R = 230/40 = 5.75 A            at resonance Z = R
 *     Q  = w0 L / R = 50 * 5 / 40 = 6.25
 *
 *   L = 2.0 H, C = 32 uF, R = 10 ohm        (NCERT Example 7.8)
 *     w0 = 1/sqrt(2 * 32e-6) = 125 rad/s
 *     Q  = 125 * 2 / 10 = 25
 *
 *   bandwidth  dw = R/L, and the half-power points sit at w0 -+ R/2L, where
 *     |Z| = R*sqrt(2) and the power is half its peak. That is the DEFINITION
 *     the derivation objectives ask for, so it is computed rather than marked
 *     by eye.
 */

/** Angular resonant frequency, rad/s. */
export function omega0(L: number, C: number): number {
  'worklet';
  return 1 / Math.sqrt(L * C);
}

export function inductiveReactance(w: number, L: number): number {
  'worklet';
  return w * L;
}

export function capacitiveReactance(w: number, C: number): number {
  'worklet';
  return w <= 0 ? Infinity : 1 / (w * C);
}

/** |Z| = sqrt(R^2 + (X_L - X_C)^2). Minimal, and equal to R, at w0. */
export function impedance(w: number, R: number, L: number, C: number): number {
  'worklet';
  if (w <= 0) return Infinity;
  const x = w * L - 1 / (w * C);
  return Math.sqrt(R * R + x * x);
}

/** Current amplitude for a fixed source amplitude. Peaks at w0. */
export function current(w: number, R: number, L: number, C: number, v: number): number {
  'worklet';
  const z = impedance(w, R, L, C);
  return z === Infinity || z === 0 ? 0 : v / z;
}

/** Phase of current relative to voltage, radians. Zero at resonance,
 *  capacitive (positive, current leads) below it, inductive above. */
export function phase(w: number, R: number, L: number, C: number): number {
  'worklet';
  if (w <= 0) return Math.PI / 2;
  return Math.atan2(1 / (w * C) - w * L, R);
}

/** Q = w0 L / R = (1/R) sqrt(L/C). The sharpness of the peak. */
export function qFactor(R: number, L: number, C: number): number {
  'worklet';
  return (1 / R) * Math.sqrt(L / C);
}

/** Full width at half power, rad/s. dw = R/L, exactly. */
export function bandwidth(R: number, L: number): number {
  'worklet';
  return R / L;
}

/**
 * The two half-power frequencies, rad/s.
 *
 * NOT w0 -+ R/2L, which is the textbook's approximation and is only right for
 * large Q. The exact roots of |Z|^2 = 2R^2 are
 *
 *     w = -+ R/2L + sqrt((R/2L)^2 + w0^2)
 *
 * and both are positive. At Q = 6.25 the approximation is already 0.3% out;
 * a board that MARKS these points should mark the real ones.
 */
export function halfPowerFrequencies(R: number, L: number, C: number): [number, number] {
  'worklet';
  const a = R / (2 * L);
  const w0 = omega0(L, C);
  const root = Math.sqrt(a * a + w0 * w0);
  return [root - a, root + a];
}
