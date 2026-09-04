/**
 * CLAUDE.md §6 rung 3: "numeric output checked against at least three known
 * values from an NCERT or standard reference, written into the maths module
 * as a comment." physics.ts's own header already states them — this is that
 * comment turned into an assertion, not a new derivation.
 *
 * Needs no RN mocking of any kind: physics.ts has zero imports and every
 * export is a pure `'worklet'`-marked function (the directive is an inert
 * string literal without the Reanimated Babel plugin running, which is fine
 * here — nothing about these assertions depends on it).
 */
import { derive } from '../projectile-motion/physics';
import { deriveFieldLines } from '../field-lines/physics';
import { definiteIntegral, statistics } from '../xy-plot/plot-math';
import { derive as deriveTrend, anomalies } from '../data-table-trend/trend-math';

test('v0=22, theta=45, g=9.81 -> R=49.34 m, H=12.34 m, T=3.17 s', () => {
  const d = derive({ launch_angle_deg: 45, initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' });
  expect(d.range).toBeCloseTo(49.34, 1);
  expect(d.apexHeight).toBeCloseTo(12.34, 1);
  expect(d.flightTime).toBeCloseTo(3.17, 1);
});

test('v0=22, theta=65, g=9.81 -> R=37.79 m, H=20.26 m', () => {
  const d = derive({ launch_angle_deg: 65, initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' });
  expect(d.range).toBeCloseTo(37.79, 1);
  expect(d.apexHeight).toBeCloseTo(20.26, 1);
});

test('complementary angles (25 / 65) share a range', () => {
  const base = { initial_speed_ms: 22, gravity_ms2: 9.81, body: 'earth' as const };
  const a = derive({ ...base, launch_angle_deg: 25 });
  const b = derive({ ...base, launch_angle_deg: 65 });
  expect(a.range).toBeCloseTo(b.range, 6);
});

/**
 * field_lines/physics.ts's own header states these four; asserted here the
 * same way projectile_motion's are above.
 */
test('point, charge_uc=10, at 0.10 m -> E = 8.988e6 N/C', () => {
  const d = deriveFieldLines({ configuration: 'point', charge_uc: 10, show_arrows: true, annotate: null });
  expect(d.fieldMagnitude).toBeCloseTo(8.988e6, -2);
});

test('dipole, charge_uc=10, 0.20 m separation, at the midpoint -> E = 1.798e7 N/C (fields add)', () => {
  const d = deriveFieldLines({ configuration: 'dipole', charge_uc: 10, show_arrows: true, annotate: null });
  expect(d.fieldMagnitude).toBeCloseTo(1.798e7, -4);
});

test('like_charges, charge_uc=10, 0.20 m separation, at the midpoint -> E = 0 exactly (fields cancel)', () => {
  const d = deriveFieldLines({ configuration: 'like_charges', charge_uc: 10, show_arrows: true, annotate: null });
  expect(d.fieldMagnitude).toBe(0);
});

test('parallel_plates, charge_uc=10 (sigma=10 uC/m^2) -> E = sigma/eps0 = 1.129e6 N/C', () => {
  const d = deriveFieldLines({ configuration: 'parallel_plates', charge_uc: 10, show_arrows: true, annotate: null });
  expect(d.fieldMagnitude).toBeCloseTo(1.129e6, -3);
});


/**
 * xy_plot integrates analytically rather than sampling, so these are exact
 * identities, not tolerances on a quadrature. Each is a standard integral a
 * Class 12 student is expected to know — which is the point: if the board
 * says the area is 2.67, that number has to be 8/3.
 */
describe('xy_plot — definite integrals', () => {
  test('∫₀² x² dx = 8/3', () => {
    expect(definiteIntegral('parabola', 1, 0, 0, 0, 2)).toBeCloseTo(8 / 3, 10);
  });

  test('∫₀⁴ x dx = 8', () => {
    expect(definiteIntegral('line', 1, 0, 0, 0, 4)).toBeCloseTo(8, 10);
  });

  test('∫₀^π sin x dx = 2', () => {
    expect(definiteIntegral('sine', 1, 1, 0, 0, Math.PI)).toBeCloseTo(2, 10);
  });

  test('∫₁^e (1/x) dx = 1', () => {
    expect(definiteIntegral('reciprocal', 1, 0, 0, 1, Math.E)).toBeCloseTo(1, 10);
  });

  test('∫₀¹ eˣ dx = e − 1', () => {
    expect(definiteIntegral('exponential', 1, 1, 0, 0, 1)).toBeCloseTo(Math.E - 1, 10);
  });

  test('reversing the limits negates the integral', () => {
    expect(definiteIntegral('parabola', 1, 0, 0, 2, 0)).toBeCloseTo(-8 / 3, 10);
  });

  test('a signed area below the axis is negative', () => {
    // ∫₀^π sin(x) dx = 2 above the axis; the next half-period is its mirror.
    expect(definiteIntegral('sine', 1, 1, 0, Math.PI, 2 * Math.PI)).toBeCloseTo(-2, 10);
  });
});

describe('xy_plot — statistics', () => {
  // The standard textbook set. Population variance (÷N), as NCERT uses for a
  // complete dataset.
  const SET = [2, 4, 4, 4, 5, 5, 7, 9];

  test('[2,4,4,4,5,5,7,9] -> mean 5, median 4.5, variance 4, sd 2', () => {
    const s = statistics(SET);
    expect(s.mean).toBeCloseTo(5, 10);
    expect(s.median).toBeCloseTo(4.5, 10);
    expect(s.variance).toBeCloseTo(4, 10);
    expect(s.stdDev).toBeCloseTo(2, 10);
  });

  test('an odd-length set takes the middle value, not an average', () => {
    expect(statistics([1, 3, 7]).median).toBeCloseTo(3, 10);
  });

  test('median does not assume the input is sorted', () => {
    expect(statistics([9, 1, 5]).median).toBeCloseTo(5, 10);
  });

  test('a constant set has zero spread', () => {
    const s = statistics([4, 4, 4, 4]);
    expect(s.variance).toBe(0);
    expect(s.stdDev).toBe(0);
  });

  test('an empty set does not produce NaN', () => {
    const s = statistics([]);
    expect(Number.isFinite(s.mean)).toBe(true);
    expect(Number.isFinite(s.variance)).toBe(true);
  });
});


/**
 * data_table_trend's assertable output is the READING of a series, not its
 * values — the values are payload. The two zero-anomaly fixtures matter as
 * much as the two that find anomalies: a detector that always fires is not a
 * detector.
 */
describe('data_table_trend — trend reading', () => {
  const base = {
    cell_kind: 'numeric' as const, col_labels: ['v'], text_values: [],
    trend_col: 0, highlight_row: -1, unit: '', caption: '',
  };
  const of = (labels: string[], values: number[]) =>
    deriveTrend({ ...base, row_labels: labels, values });

  test('period-2 ionisation enthalpy finds exactly the B and O breaks', () => {
    const d = of(['Li','Be','B','C','N','O','F','Ne'],
                 [520, 899, 801, 1086, 1402, 1314, 1681, 2081]);
    expect(d.trendSign).toBe(1);
    expect(d.netChange).toBe(1561);
    expect(d.span).toBe(1561);
    expect(d.anomalyCount).toBe(2);
    expect(d.firstAnomaly).toBe(2);           // B
    expect(anomalies([520, 899, 801, 1086, 1402, 1314, 1681, 2081])).toEqual([2, 5]); // B and O
    expect(d.minValue).toBe(520);
    expect(d.maxValue).toBe(2081);
  });

  test('atomic radii down group 1 is monotone — zero anomalies', () => {
    const d = of(['Li','Na','K','Rb','Cs'], [152, 186, 227, 248, 265]);
    expect(d.trendSign).toBe(1);
    expect(d.netChange).toBe(113);
    expect(d.anomalyCount).toBe(0);
    expect(d.firstAnomaly).toBe(-1);
  });

  test('lanthanoid contraction is a clean negative trend', () => {
    const d = of(['La','Nd','Gd','Er','Lu'], [106, 99, 94, 88, 85]);
    expect(d.trendSign).toBe(-1);
    expect(d.netChange).toBe(-21);
    expect(d.span).toBe(21);
    expect(d.anomalyCount).toBe(0);
  });

  test('signed electron gain enthalpy finds the F < Cl exception', () => {
    const d = of(['F','Cl','Br','I'], [-328, -349, -325, -295]);
    expect(d.trendSign).toBe(1);
    expect(d.netChange).toBe(33);
    expect(d.span).toBe(54);
    expect(d.anomalyCount).toBe(1);
    expect(d.firstAnomaly).toBe(1);           // Cl
  });

  test('float arithmetic does not invent a spurious span', () => {
    // 3.0 - 0.9 is 2.0999999999999996 in JS.
    const d = of(['Na','Mg','Al','Si','P','S','Cl'], [0.9,1.2,1.5,1.8,2.1,2.5,3.0]);
    expect(d.netChange).toBeCloseTo(2.1, 6);
    expect(d.anomalyCount).toBe(0);
  });

  test('a flat series has no direction and therefore no anomalies', () => {
    const d = of(['a','b','c'], [5, 5, 5]);
    expect(d.trendSign).toBe(0);
    expect(d.anomalyCount).toBe(0);
    expect(d.firstAnomaly).toBe(-1);
  });

  test('categorical mode returns every derived key, all zeroed', () => {
    const d = deriveTrend({
      cell_kind: 'categorical', row_labels: ['A','B'], col_labels: ['x'],
      values: [], text_values: ['p','q'], trend_col: -1,
      highlight_row: -1, unit: '', caption: '',
    });
    expect(Object.keys(d).sort()).toEqual(
      ['anomalyCount','firstAnomaly','highlightValue','maxValue','minValue','netChange','span','trendSign']
    );
    expect(d.trendSign).toBe(0);
  });
});
