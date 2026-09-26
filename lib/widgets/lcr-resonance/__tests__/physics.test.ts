/**
 * The maths, against NCERT's own worked answers BEFORE it is checked against
 * itself. CLAUDE.md §6: three known values, written down.
 */
import {
  bandwidth, capacitiveReactance, current, halfPowerFrequencies, impedance,
  inductiveReactance, omega0, phase, qFactor,
} from '../physics';

describe('NCERT Physics XII ch7 Example 7.7 — L 5.0 H, C 80 uF, R 40 ohm, V 230 V', () => {
  const L = 5.0, C = 80e-6, R = 40, V = 230;

  test('w0 = 50 rad/s', () => {
    expect(omega0(L, C)).toBeCloseTo(50, 6);
  });
  test('at resonance |Z| = R, exactly', () => {
    expect(impedance(omega0(L, C), R, L, C)).toBeCloseTo(R, 6);
  });
  test('peak current 5.75 A', () => {
    expect(current(omega0(L, C), R, L, C, V)).toBeCloseTo(5.75, 6);
  });
  test('Q = 6.25', () => {
    expect(qFactor(R, L, C)).toBeCloseTo(6.25, 6);
  });
  test('phase is zero at resonance, and changes sign across it', () => {
    const w0 = omega0(L, C);
    expect(phase(w0, R, L, C)).toBeCloseTo(0, 9);
    expect(phase(w0 * 0.8, R, L, C)).toBeGreaterThan(0);   // capacitive, leads
    expect(phase(w0 * 1.2, R, L, C)).toBeLessThan(0);      // inductive, lags
  });
});

describe('NCERT Example 7.8 — L 2.0 H, C 32 uF, R 10 ohm', () => {
  const L = 2.0, C = 32e-6, R = 10;
  test('w0 = 125 rad/s', () => {
    expect(omega0(L, C)).toBeCloseTo(125, 6);
  });
  test('Q = 25', () => {
    expect(qFactor(R, L, C)).toBeCloseTo(25, 6);
  });
});

describe('the reactances cross at resonance — the whole point of the figure', () => {
  const L = 5.0, C = 80e-6;
  test('X_L = X_C exactly at w0, and nowhere else', () => {
    const w0 = omega0(L, C);
    expect(inductiveReactance(w0, L)).toBeCloseTo(capacitiveReactance(w0, C), 6);
    expect(inductiveReactance(w0 * 0.9, L))
      .toBeLessThan(capacitiveReactance(w0 * 0.9, C));
    expect(inductiveReactance(w0 * 1.1, L))
      .toBeGreaterThan(capacitiveReactance(w0 * 1.1, C));
  });
});

describe('the half-power points are computed, not approximated', () => {
  const L = 5.0, C = 80e-6, R = 40;

  test('|Z| there is R*sqrt(2), so the power really is half', () => {
    const [lo, hi] = halfPowerFrequencies(R, L, C);
    for (const w of [lo, hi]) {
      expect(impedance(w, R, L, C)).toBeCloseTo(R * Math.SQRT2, 6);
    }
  });

  test('their separation is exactly the bandwidth R/L', () => {
    const [lo, hi] = halfPowerFrequencies(R, L, C);
    expect(hi - lo).toBeCloseTo(bandwidth(R, L), 9);
  });

  test('and they are NOT w0 +- R/2L, the textbook approximation', () => {
    // An INDEPENDENT route, not a rearrangement: the approximation is judged
    // by the impedance definition rather than by the formula that made it.
    const [lo] = halfPowerFrequencies(R, L, C);
    const approx = omega0(L, C) - R / (2 * L);
    expect(lo).not.toBeCloseTo(approx, 6);
    expect(impedance(approx, R, L, C)).not.toBeCloseTo(R * Math.SQRT2, 3);
  });

  test('both are positive and straddle w0', () => {
    const [lo, hi] = halfPowerFrequencies(R, L, C);
    const w0 = omega0(L, C);
    expect(lo).toBeGreaterThan(0);
    expect(lo).toBeLessThan(w0);
    expect(hi).toBeGreaterThan(w0);
  });
});

describe('the current curve really does peak at w0', () => {
  const L = 5.0, C = 80e-6, R = 40, V = 230;
  test('swept, the maximum is at w0', () => {
    // Independent of the closed form: sample and find the max.
    const w0 = omega0(L, C);
    let best = 0, bestW = 0;
    for (let w = 1; w < 150; w += 0.05) {
      const i = current(w, R, L, C, V);
      if (i > best) { best = i; bestW = w; }
    }
    expect(bestW).toBeCloseTo(w0, 1);
    expect(best).toBeCloseTo(V / R, 2);
  });
});
