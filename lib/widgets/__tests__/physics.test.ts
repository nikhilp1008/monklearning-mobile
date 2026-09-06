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
import {
  areaBetween,
  crossingsIn,
  definiteIntegral,
  evalCurve,
  statistics,
  supportsAreaBetween,
  type CurveKind,
} from '../xy-plot/plot-math';
import { xyPlot } from '../xy-plot';
import { derive as deriveTrend, anomalies } from '../data-table-trend/trend-math';
import { reactionScheme } from '../reaction-scheme';
import {
  carbonCount,
  degreeOfUnsaturation,
  derive as deriveScheme,
  fitProblems,
  layout as schemeLayout,
  longestPath,
  molarMass,
  parseFormula,
  schemeRanks,
  type ReactionSchemeParams,
} from '../reaction-scheme/scheme-graph';
import {
  MAX_NODES_CHAIN, MAX_NODES_RING, NODE_H, chainCell, chainGrid,
  derive as deriveFlow, maxChainLabelChars, maxRingLabelChars, nodeWidth, ringFits,
} from '../process-flow/flow-math';
import { circuitNetwork } from '../circuit-network';
import {
  HALF_DIAG_MIN, SLOTS, VALUE_MAX_BY_KIND, VALUE_MIN,
  bridgeFloorBoxes, capacitorCharge, capacitorEnergy, capacitorVoltage,
  derive as deriveCircuit, fitProblems as circuitFit, fmtElement, fmtOhms,
  layout as circuitLayout, qualityFactor, resonantFreq, resonantOmega, textW,
  type CircuitNetworkParams, type ElementKind,
} from '../circuit-network/circuit-math';
import { moleculeStruct } from '../molecule-struct';
import {
  AXE, AXE_KEYS, BOND_GAP, LABEL_CLEAR, MAX_BOND_PAIRS, MAX_DOMAINS,
  MAX_LIGAND_CHARS, MIN_BOND_PAIRS, MODES,
  adjacentLabelDx, angleIsForced, axeFor, bondPath, derive as deriveMolecule,
  fitProblems as moleculeFitProblems, formalChargeCentre, formalChargeSum,
  labelBoxes as moleculeLabelBoxes, labelSeparationNeeded,
  layout as moleculeLayout, lonePairPath, terminalFormalCharge,
  type BondStyle, type MoleculeMode, type MoleculeStructParams,
} from '../molecule-struct/vsepr-math';

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
 * xy_plot v2 — THE AREA BETWEEN TWO CURVES.
 *
 * Every expected value below was derived from NCERT Class 12 Ch8 first and
 * compared afterwards; none was read out of an existing test.
 *
 *   1  y = x and y = x² on [0,1]. On (0,1), x > x², so
 *      ∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.
 *
 *   2  The parabola y² = 4ax and its latus rectum x = a, which meet at
 *      (a, ±2a). Integrating in x: ∫₀^a 2·2√(ax) dx = 4√a·(2/3)a^{3/2}
 *      = 8a²/3. Integrating in y instead — which is how this widget can draw
 *      it — ∫_{−2a}^{2a}(a − y²/4a) dy = 4a² − (1/4a)(16a³/3) = 8a²/3. The two
 *      agree, which is the check that the transposed picture is the same
 *      region and not a different one.
 *
 *   3  y = x² and y = |x|, meeting at −1, 0, 1. By symmetry
 *      2∫₀¹(x − x²)dx = 1/3. This one is a NEGATIVE result for the widget:
 *      |x| is piecewise and is not in the curve set, so it takes two payloads
 *      of 1/6 each. Asserted as such rather than quietly omitted.
 *
 *   4  The fixture that proves the sign handling is real: y = x against
 *      y = x² on [−1, 2], where the curves cross at 0 and at 1, both strictly
 *      inside. ∫|f−g| = 5/6 + 1/6 + 5/6 = 11/6, while |∫(f−g)| = 3/2. A naive
 *      implementation reports 1.5 for a region whose area is 1.833…, and
 *      nothing about the picture would tell a student it was wrong.
 */
describe('xy_plot — the area between two curves', () => {
  const LINE = 'line' as CurveKind;
  const PARA = 'parabola' as CurveKind;

  /** y = x against y = x², the pair every case below is built from. */
  const xVsXsq = (from: number, to: number) =>
    areaBetween(LINE, 1, 0, 0, PARA, 1, 0, 0, from, to);

  /**
   * The WRONG implementation, written out so the fixture has something to
   * fail against: one integral over the whole span, absolute value at the end.
   * This is what "the area between two curves is ∫(f−g)" produces if you never
   * think about the sign changing.
   */
  const naive = (from: number, to: number) =>
    Math.abs(
      definiteIntegral(LINE, 1, 0, 0, from, to) - definiteIntegral(PARA, 1, 0, 0, from, to)
    );

  test('y = x and y = x² on [0,1] -> 1/6', () => {
    expect(xVsXsq(0, 1)).toBeCloseTo(1 / 6, 12);
  });

  test('the parabola y² = 4ax against its latus rectum -> 8a²/3', () => {
    // Drawn transposed: the plotted horizontal variable is the textbook's y,
    // f is the line y = a and g is the parabola u²/4a over [−2a, 2a].
    for (const a of [0.5, 1, 2, 5]) {
      expect(areaBetween(LINE, 0, 0, a, PARA, 1 / (4 * a), 0, 0, -2 * a, 2 * a))
        .toBeCloseTo((8 * a * a) / 3, 10);
    }
  });

  test('y = x² and y = |x| is 1/3 — as TWO payloads, because |x| is piecewise', () => {
    // The right half is y = x; the left half is y = −x. Each is 1/6.
    const right = areaBetween(LINE, 1, 0, 0, PARA, 1, 0, 0, 0, 1);
    const left = areaBetween(LINE, -1, 0, 0, PARA, 1, 0, 0, -1, 0);
    expect(right).toBeCloseTo(1 / 6, 12);
    expect(left).toBeCloseTo(1 / 6, 12);
    expect(right + left).toBeCloseTo(1 / 3, 12);
    // And there is no single payload for it: the modulus is not a curve kind.
    expect(supportsAreaBetween('line', 'line')).toBe(true);
    expect(xyPlot.defaults.curve2).toBe('line');
  });

  /* ---- the crossing fixture, and its proof against the naive version ---- */

  test('two crossings inside [−1,2]: 11/6, where the naive answer is 3/2', () => {
    expect(xVsXsq(-1, 2)).toBeCloseTo(11 / 6, 12);
    expect(naive(-1, 2)).toBeCloseTo(3 / 2, 12);
    // The fixture only proves anything if the two genuinely differ.
    expect(Math.abs(xVsXsq(-1, 2) - naive(-1, 2))).toBeGreaterThan(0.3);
  });

  test('one crossing inside [−1,1]: 1, where the naive answer is 2/3', () => {
    // ∫_{−1}^{0}|x − x²| = 5/6 and ∫₀¹|x − x²| = 1/6, so the area is exactly 1;
    // the two parts cancel to 2/3 if they are added before the absolute value.
    expect(xVsXsq(-1, 1)).toBeCloseTo(1, 12);
    expect(naive(-1, 1)).toBeCloseTo(2 / 3, 12);
  });

  test('with no interior crossing the two agree — the split is not a fudge', () => {
    // [0,1] has crossings only at its endpoints, so |∫| is already right.
    expect(xVsXsq(0, 1)).toBeCloseTo(naive(0, 1), 12);
  });

  /* ---------------------------- the crossing solver --------------------- */

  test('crossings are the interior roots only, sorted', () => {
    expect(crossingsIn(LINE, 1, 0, 0, PARA, 1, 0, 0, -1, 2)).toHaveLength(2);
    const [r0, r1] = crossingsIn(LINE, 1, 0, 0, PARA, 1, 0, 0, -1, 2);
    expect(r0).toBeCloseTo(0, 12);
    expect(r1).toBeCloseTo(1, 12);
  });

  test('a root exactly on an endpoint is not a split point', () => {
    // 0 and 1 ARE the endpoints here.
    expect(crossingsIn(LINE, 1, 0, 0, PARA, 1, 0, 0, 0, 1)).toEqual([]);
  });

  test('a tangency is not returned — f − g touches zero without changing sign', () => {
    // y = 2x − 1 is the tangent to y = x² at x = 1: x² − 2x + 1 = (x−1)².
    expect(crossingsIn(PARA, 1, 0, 0, LINE, 2, 0, -1, -2, 4)).toEqual([]);
    // And the area is then just the single unsigned integral.
    expect(areaBetween(PARA, 1, 0, 0, LINE, 2, 0, -1, 0, 3)).toBeCloseTo(
      Math.abs(definiteIntegral(PARA, 1, 0, 0, 0, 3) - definiteIntegral(LINE, 2, 0, -1, 0, 3)),
      12
    );
  });

  test('parallel lines never cross, and identical curves have no root either', () => {
    expect(crossingsIn(LINE, 2, 0, 1, LINE, 2, 0, 5, -10, 10)).toEqual([]);
    expect(crossingsIn(LINE, 2, 0, 1, LINE, 2, 0, 1, -10, 10)).toEqual([]);
  });

  test('a pair with no closed-form crossing returns NaN, never a plausible number', () => {
    expect(supportsAreaBetween('sine', 'line')).toBe(false);
    expect(supportsAreaBetween('line', 'exponential')).toBe(false);
    expect(supportsAreaBetween('reciprocal', 'reciprocal')).toBe(false);
    expect(Number.isNaN(areaBetween('sine', 1, 1, 0, LINE, 0, 0, 0, 0, Math.PI))).toBe(true);
  });

  /* ------------- the sweep: exact vs an independent numeric ∫|f−g| ------- */

  /**
   * Trapezoid on |f − g| — deliberately NOT the method the widget uses. It is
   * here to check the closed form from outside, the way a second person would.
   * |f − g| has a kink at each crossing, so this converges slowly; 20000
   * panels is enough for six decimals on these coefficients.
   */
  const numericAbsArea = (
    kf: CurveKind, a: number, b: number, c: number,
    kg: CurveKind, a2: number, b2: number, c2: number,
    from: number, to: number, panels = 20000
  ) => {
    const lo = Math.min(from, to);
    const hi = Math.max(from, to);
    const h = (hi - lo) / panels;
    let sum = 0;
    for (let i = 0; i <= panels; i++) {
      const x = lo + h * i;
      const v = Math.abs(evalCurve(kf, a, b, c, x) - evalCurve(kg, a2, b2, c2, x));
      sum += i === 0 || i === panels ? v / 2 : v;
    }
    return sum * h;
  };

  /**
   * CLAUDE.md §3's animation rule, as arithmetic: `shade_to` is animatable, so
   * a cue tween walks it through every FRACTIONAL value between two numbers,
   * and the readout has to be the area of the region actually drawn at each
   * one — including the values where a crossing has just been passed. The
   * naive implementation is wrong on exactly the values past a crossing, so
   * this sweep is the crossing fixture repeated 41 times.
   */
  test('the area is exact at every fractional value shade_to sweeps through', () => {
    for (let i = 0; i <= 40; i++) {
      const to = -1 + (3 * i) / 40; // -1 .. 2, straddling both crossings
      if (to <= -1 + 1e-9) continue;
      const exact = xVsXsq(-1, to);
      expect(exact).toBeCloseTo(numericAbsArea(LINE, 1, 0, 0, PARA, 1, 0, 0, -1, to), 5);
    }
  });

  test('the area is additive across an arbitrary interior split', () => {
    // A property the naive version fails: |∫| over two halves does not add up
    // to |∫| over the whole once the sign changes inside one of them.
    for (const t of [-0.37, 0, 0.5, 1, 1.618]) {
      expect(xVsXsq(-1, t) + xVsXsq(t, 2)).toBeCloseTo(xVsXsq(-1, 2), 12);
    }
    // The naive version breaks additivity exactly where the sign flips: on
    // [0,2] the two halves are +1/6 and −5/6, so they cancel to 2/3 in one
    // integral and add to 1 in two. (Splitting [−1,2] would NOT have shown
    // this — every sub-integral there is negative, so they happen to add. A
    // property test that picks the wrong split proves nothing, which is worth
    // saying out loud: this line failed first time round for that reason.)
    expect(xVsXsq(0, 1) + xVsXsq(1, 2)).toBeCloseTo(xVsXsq(0, 2), 12);
    expect(naive(0, 1) + naive(1, 2)).toBeCloseTo(1, 12);
    expect(naive(0, 2)).toBeCloseTo(2 / 3, 12);
    expect(naive(0, 1) + naive(1, 2)).not.toBeCloseTo(naive(0, 2), 6);
  });

  test('the area never decreases as shade_to advances', () => {
    let prev = 0;
    for (let i = 1; i <= 60; i++) {
      const to = -1 + (3 * i) / 60;
      const v = xVsXsq(-1, to);
      expect(v).toBeGreaterThanOrEqual(prev - 1e-12);
      prev = v;
    }
  });

  test('against the default second curve (the x axis) it is the UNSIGNED area', () => {
    // y = x² − 1 on [0,2] crosses the axis at x = 1.
    //   signed   ∫₀²(x²−1)dx = 8/3 − 2 = 2/3
    //   unsigned ∫₀²|x²−1|dx = 2/3 + 4/3 = 2
    expect(definiteIntegral(PARA, 1, 0, -1, 0, 2)).toBeCloseTo(2 / 3, 12);
    expect(areaBetween(PARA, 1, 0, -1, LINE, 0, 0, 0, 0, 2)).toBeCloseTo(2, 12);
  });

  test('reversing the two curves does not change the area', () => {
    expect(areaBetween(PARA, 1, 0, 0, LINE, 1, 0, 0, -1, 2)).toBeCloseTo(11 / 6, 12);
  });

  test('reversing the limits does not change it either — an area is not signed', () => {
    expect(xVsXsq(2, -1)).toBeCloseTo(11 / 6, 12);
  });

  test('an empty interval is zero, not NaN', () => {
    expect(xVsXsq(0.5, 0.5)).toBe(0);
  });
});


/**
 * validate() is total, never throws, and every rejection is readable.
 *
 * The two groups below are different kinds of refusal and both matter:
 *
 *   CLOSED FORM   a pair whose crossings cannot be solved exactly. The widget
 *                 declines rather than reporting |∫(f−g)|, which is silently
 *                 too small whenever they cross inside the interval.
 *   FITS THE BOARD  a payload whose tick labels do not fit the smallest board.
 *                 CLAUDE.md §3: the schema's legal range must be a SUBSET of
 *                 what renders correctly, so when the two disagree the schema
 *                 narrows. Several of these were legal at v1 and would have
 *                 failed scripts/verify-render.mjs.
 */
describe('xy_plot — validate()', () => {
  const good = xyPlot.defaults;
  const patched = (patch: Record<string, unknown>) => ({ ...good, ...patch });
  const errorsOf = (raw: unknown) => {
    const r = xyPlot.validate(raw);
    return r.ok ? [] : [...r.errors];
  };

  test('the defaults validate', () => {
    expect(xyPlot.validate(good).ok).toBe(true);
  });

  test.each([
    ['a non-object', null, /params must be an object/],
    ['an empty object', {}, /mode must be one of/],
    ['an unknown mode', patched({ mode: 'integral' }), /mode must be one of/],
    ['an unknown curve2', patched({ mode: 'area_between', curve2: 'spiral' }), /curve2 must be one of/],
    ['NaN in a2', patched({ mode: 'area_between', a2: NaN }), /a2 must be a finite number/],
    ['Infinity in c2', patched({ mode: 'area_between', c2: Infinity }), /c2 must be a finite number/],
    ['x_max below x_min', patched({ x_min: 4, x_max: 1 }), /x_max must be greater/],

    // --- the closed-form refusals
    ['area_between with a sine', patched({ mode: 'area_between', curve: 'sine', b: 1, curve2: 'line' }), /no closed form/],
    ['area_between with an exponential', patched({ mode: 'area_between', curve2: 'exponential', a2: 1, b2: 1 }), /no closed form/],
    ['area_between with a reciprocal', patched({ mode: 'area_between', x_min: 1, x_max: 4, curve2: 'reciprocal', a2: 1 }), /no closed form/],
    ['two transcendental curves', patched({ mode: 'area_between', curve: 'sine', curve2: 'sine' }), /no closed form/],

    // --- the degenerate regions
    ['two identical curves', patched({ mode: 'area_between', curve: 'line', a: 2, c: 1, curve2: 'line', a2: 2, c2: 1 }), /the same curve/],
    ['a line written as a flat parabola against itself', patched({ mode: 'area_between', curve: 'line', a: 1, c: 0, curve2: 'parabola', a2: 0, b2: 1, c2: 0 }), /the same curve/],

    // --- the small-board refusals (all of these were legal at v1)
    ['a y-range wider than the tick gutter', patched({ a: 100, x_min: 0, x_max: 1000 }), /hang off the left edge/],
    ['a curve that is 1e6 tall', patched({ curve: 'exponential', a: 1, b: 1, x_min: 0, x_max: 20, mode: 'curve' }), /hang off the left edge/],
    ['a second curve that blows the range up', patched({ mode: 'area_between', x_min: 0, x_max: 100, curve2: 'parabola', a2: 100 }), /hang off the left edge/],
    ['a dataset with six-figure values', patched({ mode: 'data', values: [100000, 250000, 400000] }), /hang off the left edge/],
  ])('rejects %s with a readable message', (_name, payload, pattern) => {
    const r = xyPlot.validate(payload);
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: readonly string[] }).errors.join(' | ')).toMatch(pattern);
  });

  /**
   * use-cue-track.ts validates the MERGED params of every cue patch and drops
   * the cue if validation fails, so a rule here is a rule about the animation
   * states a narration may pass through. A zero-width shaded interval is the
   * state a sweep starts at, so it must be accepted — this is the regression
   * test for a rejection that was written, and then removed for that reason.
   */
  test('a zero-width shaded interval is legal — it is where a sweep starts', () => {
    const start = patched({
      mode: 'area_between', curve: 'line', a: 1, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 0,
    });
    expect(errorsOf(start)).toEqual([]);
    const r = xyPlot.validate(start);
    expect((r as { ok: true; params: { shade_to: number } }).params.shade_to).toBe(0);
    // ...and the area of nothing is 0, not NaN.
    expect(xyPlot.computeDerived((r as { ok: true; params: never }).params).area).toBe(0);
  });

  test('never throws, on anything', () => {
    for (const junk of [undefined, null, 0, '', [], NaN, { mode: 42 }, { values: 'x' }, { curve2: {} }]) {
      expect(() => xyPlot.validate(junk)).not.toThrow();
    }
  });

  /**
   * BACKWARD COMPATIBILITY, at the schema. A v1 payload has no curve2/a2/b2/c2
   * at all; it must still validate, and the defaults it picks up must be the
   * x axis, so nothing it renders can change.
   */
  test('a v1 payload validates and defaults its second curve to the x axis', () => {
    const v1 = {
      mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: 0, x_max: 3, shade_from: 0, shade_to: 2,
      values: [], x_label: 'x', y_label: 'y',
    };
    const r = xyPlot.validate(v1);
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: typeof xyPlot.defaults }).params;
    expect(p.curve2).toBe('line');
    expect([p.a2, p.b2, p.c2]).toEqual([0, 0, 0]);
    expect(p.mode).toBe('area');
  });

  test('the NCERT payloads this widget was extended for are accepted', () => {
    // y = x and y = x² on [0,1] — 1/6.
    expect(errorsOf(patched({
      mode: 'area_between', curve: 'line', a: 1, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    }))).toEqual([]);
    // y² = 4ax against its latus rectum, transposed — 8/3 at a = 1.
    expect(errorsOf(patched({
      mode: 'area_between', curve: 'line', a: 0, c: 1,
      curve2: 'parabola', a2: 0.25, b2: 0, c2: 0,
      x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
      x_label: 'y', y_label: 'x',
    }))).toEqual([]);
    // A parabola and its tangent y = 2x − 1 — the tangency case.
    expect(errorsOf(patched({
      mode: 'area_between', curve: 'parabola', a: 1, b: 0, c: 0,
      curve2: 'line', a2: 2, b2: 0, c2: -1,
      x_min: -1, x_max: 3, shade_from: 0, shade_to: 3,
    }))).toEqual([]);
  });

  test('a large coefficient is legal on a SMALL domain and not on a large one', () => {
    // The cap that binds is not a number on `a` — it is what (a, domain) does
    // to the tick labels. a = 100 over [0,10] tops out at y = 1e4, whose
    // widest label "10000" is 5 chars = 34.8pt in a 40.4pt gutter: legal.
    expect(errorsOf(patched({ a: 100, x_min: 0, x_max: 10, shade_to: 10 }))).toEqual([]);
    // The same coefficient over [0,100] reaches 1e6, label "1000000" = 48.7pt.
    expect(errorsOf(patched({ a: 100, x_min: 0, x_max: 100, shade_to: 100 })).length)
      .toBeGreaterThan(0);
  });

  test('a readout whose NUMBERS would be truncated is refused, but a label is trimmed', () => {
    // A number that does not fit is a wrong number once it is cut, so the
    // payload is refused...
    const wide = xyPlot.validate(patched({
      mode: 'data',
      values: [-9999.99, 9999.99, -8888.88, 7777.77],
      x_label: 'observation', y_label: 'value',
    }));
    if (wide.ok) {
      // If it fits, the premise of this test is wrong — say so loudly rather
      // than passing vacuously.
      expect(`${wide.params.values.length} values fit unexpectedly`).toBe('should not fit');
    }
    expect((wide as { ok: false; errors: readonly string[] }).errors.join(' | '))
      .toMatch(/too wide to show without truncating/);

    // ...whereas a `curve` readout is two axis labels and no number at all, so
    // it is allowed to be trimmed to the board instead of refused.
    expect(errorsOf(patched({
      mode: 'curve', curve: 'sine', a: 1, b: 1, c: 0, x_min: 0, x_max: 6.28,
      x_label: 'x'.repeat(40), y_label: 'y'.repeat(40),
    }))).toEqual([]);
  });

  test('a domain too narrow for two gridlines is refused', () => {
    // projectile_motion's tickStep defect in another widget: it draws, and it
    // reads as a blank box.
    const r = xyPlot.validate(patched({ x_min: 0, x_max: 0.02, shade_to: 0.02 }));
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: readonly string[] }).errors.join(' | '))
      .toMatch(/fewer than two gridlines/);
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

/**
 * process_flow computes STRUCTURE, not physics, so its reference values are
 * structural: how many directed steps a pathway has, whether the last one
 * returns to the first, and whether any node has out-degree greater than one.
 * The node labels are payload and are deliberately not asserted — that would
 * test the payload, not the widget.
 *
 * flow-math.ts's own header states these; this is that comment turned into an
 * assertion. Glycolysis is the load-bearing one: it must answer `closes: 0`
 * where Krebs answers 1, from the same shape of payload. A "does it close"
 * detector that always says yes is not a detector.
 */
describe('process_flow — pathway structure', () => {
  const base = { branch_at: -1, active_node: -1, caption: '' };
  const ring = (nodes: string[]) =>
    deriveFlow({ ...base, layout: 'ring' as const, nodes, closes: true });
  const chain = (nodes: string[], closes: boolean) =>
    deriveFlow({ ...base, layout: 'chain' as const, nodes, closes });

  test('the citric acid cycle has 8 intermediates and closes', () => {
    const d = ring([
      'Citrate', 'Isocitrate', 'a-Ketoglutarate', 'Succinyl-CoA',
      'Succinate', 'Fumarate', 'Malate', 'Oxaloacetate',
    ]);
    expect(d.nodeCount).toBe(8);
    expect(d.stepCount).toBe(8);      // 8 nodes, 8 edges — the wrap closes it
    expect(d.closes).toBe(1);
    expect(d.outDegreeMax).toBe(1);
    expect(d.branchAt).toBe(-1);
  });

  test('glycolysis has 10 steps and does NOT close', () => {
    const d = chain(
      ['Glucose', 'G-6-P', 'F-6-P', 'F-1,6-bP', 'DHAP', 'G-3-P',
       '1,3-BPG', '3-PGA', '2-PGA', 'PEP'],
      false
    );
    expect(d.nodeCount).toBe(10);
    expect(d.stepCount).toBe(9);      // 10 nodes, 9 edges — no wrap
    expect(d.closes).toBe(0);
    expect(d.outDegreeMax).toBe(1);
  });

  test('the Calvin cycle is a three-stage closed ring', () => {
    const d = ring(['Carboxylation', 'Reduction', 'Regeneration']);
    expect(d.nodeCount).toBe(3);
    expect(d.stepCount).toBe(3);
    expect(d.closes).toBe(1);
  });

  test('cyclic and non-cyclic photophosphorylation differ only in `closes`', () => {
    const cyclic = chain(['PS I', 'Ferredoxin', 'Cyt b6f', 'Plastocyanin'], true);
    expect(cyclic.closes).toBe(1);
    expect(cyclic.stepCount).toBe(4);   // 4 nodes, 4 edges — the return edge

    const nonCyclic = chain(
      ['PS II', 'PQ', 'Cyt b6f', 'PC', 'PS I', 'Ferredoxin', 'NADP+'],
      false
    );
    expect(nonCyclic.closes).toBe(0);
    expect(nonCyclic.stepCount).toBe(6); // 7 nodes, 6 edges — ends on NADPH
    // Same layout, same shape of payload, opposite answer. This pair is the
    // whole reason `layout` is one param on one widget rather than two
    // widgets: the contrast is the teaching point and it needs one board.
    expect(cyclic.closes).not.toBe(nonCyclic.closes);
  });

  test('pyruvate is a branch point — out-degree greater than one', () => {
    const d = deriveFlow({
      ...base, layout: 'chain', closes: false,
      nodes: ['Glucose', 'Pyruvate', 'Acetyl-CoA', 'Krebs cycle'],
      branch_at: 1,
    });
    expect(d.branchAt).toBe(1);
    expect(d.outDegreeMax).toBe(2);
    // The opposite fixture for the branch detector, same as above for `closes`.
    expect(ring(['a', 'b', 'c']).outDegreeMax).toBe(1);
  });

  test('a ring is closed even if the payload says otherwise', () => {
    // validate() forces this too; derive() must not be the place the picture
    // and the derived value can disagree.
    const d = deriveFlow({ ...base, layout: 'ring', nodes: ['a','b','c'], closes: false });
    expect(d.closes).toBe(1);
  });

  test('an out-of-range branch or active index reads as absent, never as NaN', () => {
    const d = deriveFlow({
      ...base, layout: 'chain', closes: false, nodes: ['a','b','c'],
      branch_at: 9, active_node: 9,
    });
    expect(d.branchAt).toBe(-1);
    expect(d.activeIndex).toBe(-1);
    expect(d.outDegreeMax).toBe(1);
    for (const v of Object.values(d)) expect(Number.isFinite(v)).toBe(true);
  });
});

/**
 * The caps are the schema, and the schema's legal range must be a SUBSET of
 * what renders correctly. These assert the arithmetic in flow-math.ts's header
 * rather than trusting it was recomputed by hand: the per-n ring budget, the
 * single chain budget, and — the part that actually matters — that no two node
 * boxes collide at the cap, at every board this app renders into.
 */
describe('process_flow — layout caps', () => {
  const BOARDS = [[343, 236], [495, 270], [900, 430], [680, 283]] as const;

  test('the ring label budget is the documented per-n table', () => {
    expect([3, 4, 5, 6, 7, 8].map(maxRingLabelChars)).toEqual([18, 18, 14, 18, 11, 16]);
  });

  test('the chain label budget is 17 — two columns in the narrowest grid', () => {
    expect(maxChainLabelChars()).toBe(17);
  });

  test('a ring at its own cap has no colliding boxes on any board', () => {
    for (const [w, h] of BOARDS) {
      for (let n = 3; n <= MAX_NODES_RING; n++) {
        expect([n, w, h, ringFits(n, maxRingLabelChars(n), w, h)])
          .toEqual([n, w, h, true]);
      }
    }
  });

  test('one more character than the cap always fails at the smallest board', () => {
    // Every assertion needs a fixture that fails it. A cap that is not the
    // boundary is not a cap — it is a number that happens to pass.
    for (let n = 3; n <= MAX_NODES_RING; n++) {
      const cap = maxRingLabelChars(n);
      if (cap >= 18) continue; // already at the declared ceiling; nothing above it
      expect([n, ringFits(n, cap + 1, 343, 236)]).toEqual([n, false]);
    }
    expect(maxChainLabelChars()).toBeLessThan(18);
  });

  test('a chain never lays out as one row or one column, at any size', () => {
    const L = maxChainLabelChars();
    for (const [w, h] of BOARDS) {
      for (let n = 3; n <= MAX_NODES_CHAIN; n++) {
        for (const closes of [true, false]) {
          const g = chainGrid(w, h, n, L, closes);
          expect(g.rows).toBeGreaterThanOrEqual(2);
          expect(g.cols).toBeGreaterThanOrEqual(2);
          // and the pitches still hold a node box plus its clearance
          expect(g.colPitch).toBeGreaterThanOrEqual(nodeWidth(L) + 16);
          expect(g.rowPitch).toBeGreaterThanOrEqual(NODE_H + 12);
        }
      }
    }
  });

  test('consecutive chain nodes are always in adjacent cells', () => {
    // What lets the highlight interpolate on a straight line between two nodes
    // without ever crossing a third. A row-major grid would not have this.
    const L = maxChainLabelChars();
    for (const [w, h] of BOARDS) {
      for (let n = 3; n <= MAX_NODES_CHAIN; n++) {
        const g = chainGrid(w, h, n, L, false);
        for (let i = 0; i + 1 < n; i++) {
          const a = chainCell(g, i);
          const b = chainCell(g, i + 1);
          const step = Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
          expect([n, i, step]).toEqual([n, i, 1]);
        }
      }
    }
  });
});

/**
 * reaction_scheme's assertable output is the READING of the scheme — its
 * depth, its branching, and what the formulae say — not the edge list it was
 * handed. `stepCount` is the only derived key that is simply told to us, and
 * the diazonium fixture below is there precisely to separate it from
 * `pathSteps`: five steps, one step deep.
 *
 * The five references are stated with their arithmetic in
 * ../reaction-scheme/scheme-graph.ts's header; this is that comment turned
 * into an assertion, not a new derivation. Atomic weights are pinned there to
 * the IUPAC 2021 abridged table (H 1.008, C 12.011, Br 79.904).
 */
describe('reaction_scheme — reading a scheme', () => {
  const scheme = (
    species: string[],
    from: number[],
    to: number[],
    reagent: string[] = from.map(() => '')
  ): ReactionSchemeParams => ({
    species,
    step_from: from,
    step_to: to,
    step_reagent: reagent,
    step_kind: from.map(() => 'plain' as const),
    highlight_step: -1,
    step_progress: 0,
    caption: '',
  });

  /* 1. the mass table itself */
  test('molar mass of C2H5Br is 108.97 — 2(12.011) + 5(1.008) + 79.904', () => {
    expect(molarMass('C2H5Br')).toBeCloseTo(108.97, 2);
  });

  /* 2. Wurtz doubles the chain */
  test('Wurtz: C2H5Br -> C4H10 gives carbonDelta +2 and molarMassEnd 58.12', () => {
    const d = deriveScheme(scheme(['C2H5Br', 'C4H10'], [0], [1], ['Na, ether']));
    expect(d.carbonStart).toBe(2);
    expect(d.carbonEnd).toBe(4);
    expect(d.carbonDelta).toBe(2);
    expect(d.molarMassEnd).toBeCloseTo(58.12, 2);
    expect(d.stepCount).toBe(1);
    expect(d.pathSteps).toBe(1);
  });

  /* 3. decarboxylation removes one — with (2), this proves the sign is real */
  test('decarboxylation: CH3COONa -> CH4 gives carbonDelta -1', () => {
    const d = deriveScheme(scheme(['CH3COONa', 'CH4'], [0], [1], ['NaOH/CaO']));
    expect(d.carbonStart).toBe(2);        // CH3COONa parses to C2H3O2Na
    expect(d.carbonEnd).toBe(1);
    expect(d.carbonDelta).toBe(-1);
  });

  test('carbonDelta is SIGNED — the same code gives +2 and -1', () => {
    const up = deriveScheme(scheme(['C2H5Br', 'C4H10'], [0], [1]));
    const down = deriveScheme(scheme(['CH3COONa', 'CH4'], [0], [1]));
    expect(Math.sign(up.carbonDelta)).toBe(1);
    expect(Math.sign(down.carbonDelta)).toBe(-1);
  });

  /* 4. the interconversion chain */
  test('C2H6 -> C2H4 -> C2H2 -> C6H6 is 3 steps deep and ends at DoU 4', () => {
    const d = deriveScheme(scheme(['C2H6', 'C2H4', 'C2H2', 'C6H6'], [0, 1, 2], [1, 2, 3]));
    expect(d.pathSteps).toBe(3);
    expect(d.unsatEnd).toBe(4);           // (2*6 + 2 + 0 - 6 - 0)/2 = 4
    expect(degreeOfUnsaturation('C2H2')).toBe(2);
    expect(degreeOfUnsaturation('C2H4')).toBe(1);
    expect(degreeOfUnsaturation('C2H6')).toBe(0);
  });

  /* 5. the fixture that proves pathSteps is not stepCount */
  test('the diazonium starburst is 5 steps but only 1 step deep', () => {
    const d = deriveScheme(
      scheme(
        ['C6H5N2Cl', 'C6H5Cl', 'C6H5Br', 'C6H5CN', 'C6H5OH', 'C6H6'],
        [0, 0, 0, 0, 0],
        [1, 2, 3, 4, 5]
      )
    );
    expect(d.stepCount).toBe(5);
    expect(d.pathSteps).toBe(1);
    expect(d.branchCount).toBe(5);
  });

  /* one code path, three shapes */
  test('rank is longest-path-from-a-source for chain, fan and converge alike', () => {
    expect(schemeRanks(3, [0, 1], [1, 2])).toEqual([0, 1, 2]);
    expect(schemeRanks(5, [0, 0, 0, 0], [1, 2, 3, 4])).toEqual([0, 1, 1, 1, 1]);
    expect(schemeRanks(4, [0, 1, 2], [3, 3, 3])).toEqual([0, 0, 0, 1]);
    // A diamond ranks its two middle nodes together and its sink after both.
    expect(schemeRanks(4, [0, 0, 1, 2], [1, 2, 3, 3])).toEqual([0, 1, 1, 2]);
  });

  test('a cycle is reported rather than ranked', () => {
    expect(schemeRanks(3, [0, 1, 2], [1, 2, 0])).toBeNull();
  });

  test('the longest path breaks ties by the lowest start index', () => {
    // Two one-edge paths, 0->2 and 1->2. Both are length 1; 0 wins.
    expect(longestPath(3, [0, 1], [2, 2])).toEqual([0, 2]);
    expect(longestPath(4, [0, 1, 2], [3, 3, 3])).toEqual([0, 3]);
  });

  /* the parser */
  test('condensed and parenthesised formulae collapse to element counts', () => {
    expect(parseFormula('CH3CH2OH')).toEqual({ C: 2, H: 6, O: 1 });
    expect(parseFormula('(CH3)2CHOH')).toEqual({ C: 3, H: 8, O: 1 });
    expect(parseFormula('CH3COONa')).toEqual({ C: 2, H: 3, O: 2, Na: 1 });
    expect(parseFormula('C6H5N2Cl')).toEqual({ C: 6, H: 5, N: 2, Cl: 1 });
    expect(parseFormula('CH3+')).toEqual({ C: 1, H: 3 });
  });

  test('a name is not a formula, and is worth 0 rather than an error', () => {
    // A node may legitimately be named rather than drawn as a formula. The
    // scheme is still correct; it just has no mass to report.
    expect(parseFormula('benzene')).toBeNull();
    expect(parseFormula('Benzene')).toBeNull();
    expect(parseFormula('PhOH')).toBeNull();
    expect(molarMass('benzene')).toBe(0);
    expect(carbonCount('benzene')).toBe(0);
    expect(degreeOfUnsaturation('benzene')).toBe(0);
    const d = deriveScheme(scheme(['benzene', 'phenol'], [0], [1]));
    expect(d.molarMassEnd).toBe(0);
    expect(d.carbonDelta).toBe(0);
    expect(d.pathSteps).toBe(1);          // the SCHEME still reads correctly
  });

  test('an unclosed bracket is a parse failure, not a partial answer', () => {
    expect(parseFormula('(CH3)2CH')).toEqual({ C: 3, H: 7 });
    expect(parseFormula('(CH3')).toBeNull();
    expect(parseFormula('CH3)')).toBeNull();
  });

  test('a salt still reads a sensible DoU — Na counts as monovalent', () => {
    // C2H3O2Na: (2*2 + 2 + 0 - 3 - 1)/2 = 1, the one C=O. A halogen-only X
    // would return 1.5, which is not a degree of anything.
    expect(degreeOfUnsaturation('CH3COONa')).toBe(1);
  });

  /**
   * THE NaN TRAP. rowPitch = bandHeight / (rows - 1) is Infinity when
   * rows === 1 — the single-chain case, i.e. the most common payload this
   * widget will ever get. Special-cased in layout(); asserted here because a
   * comment is not a check.
   */
  test('a single-row chain produces no Infinity and no NaN', () => {
    const l = schemeLayout(scheme(['A', 'B', 'C'], [0, 1], [1, 2], ['x', 'y']), 343, 236);
    expect(l.rows).toBe(1);
    expect(Number.isFinite(l.rowPitch)).toBe(true);
    for (const node of l.nodes) {
      expect(Number.isFinite(node.cx)).toBe(true);
      expect(Number.isFinite(node.cy)).toBe(true);
    }
    for (const e of l.edges) {
      for (const v of [e.x0, e.y0, e.x1, e.y1, e.tipX, e.tipY, e.headCX, e.headCY, e.midX, e.midY]) {
        expect(Number.isFinite(v)).toBe(true);
      }
    }
    // All three chips share the band's midline.
    expect(new Set(l.nodes.map((nd) => nd.cy)).size).toBe(1);
  });

  /**
   * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY.
   * These are the caps, each with the payload that sits one notch past it.
   */
  test('the row cap is 5, and 6 fails at 343x236', () => {
    const fan = (k: number) =>
      scheme(
        ['A', ...Array.from({ length: k }, (_, i) => `P${i}`)],
        Array.from({ length: k }, () => 0),
        Array.from({ length: k }, (_, i) => i + 1),
        Array.from({ length: k }, () => 'r')
      );
    expect(fitProblems(fan(5))).toEqual([]);
    expect(fitProblems(fan(6))[0]).toMatch(/at most 5 fit/);
  });

  test('the width budget refuses an 8-rank chain and admits a 7-rank one', () => {
    const chain = (k: number) =>
      scheme(
        Array.from({ length: k }, (_, i) => String.fromCharCode(65 + i)),
        Array.from({ length: k - 1 }, (_, i) => i),
        Array.from({ length: k - 1 }, (_, i) => i + 1)
      );
    // 7 ranks of 1-char chips: 7(18.96) + 6(28) = 132.7 + 168 = 300.7 <= 319.
    expect(fitProblems(chain(7))).toEqual([]);
    // 8 ranks: 8(18.96) + 7(28) = 151.7 + 196 = 347.7 > 319.
    expect(fitProblems(chain(8))[0]).toMatch(/only 319pt is usable/);
  });

  test('3 ranks of 10-char species fit; 11-char species do not', () => {
    // 3(6.96*10 + 12) + 2(28) = 244.8 + 56 = 300.8 <= 319.
    expect(fitProblems(scheme(['CH3CH2CH3', 'CH3CHBrCH', 'CH3CHOHCH'], [0, 1], [1, 2]))).toEqual([]);
    // 3(6.96*11 + 12) + 2(28) = 265.7 + 56 = 321.7 > 319.
    expect(
      fitProblems(scheme(['CH3CH2CH3XY', 'CH3CHBrCHXY', 'CH3CHOHCHXY'], [0, 1], [1, 2]))[0]
    ).toMatch(/only 319pt is usable/);
  });

  test('a gap that cannot hold its reagent is a budget failure, not a collision', () => {
    // 4 ranks of 5-char species: chips 4(46.8) = 187.2, so a flat GAP_MIN
    // budget spends 187.2 + 3(28) = 271.2 and calls the payload fine, laying
    // three 43.9pt gaps. A 12-char reagent is 83.5pt wide and would overhang
    // 19.8pt into a column whose species text starts only 6pt in — a hard
    // label collision in the commonest shape there is. With the reagent term
    // the same payload is 187.2 + 83.5 + 28 + 28 = 326.7 and is refused.
    const p = scheme(['CH3CH', 'C2H5O', 'C3H7O', 'C4H9O'], [0, 1, 2], [1, 2, 3],
      ['conc.H2SO4aq', 'r', 'r']);
    expect(fitProblems(p)[0]).toMatch(/only 319pt is usable/);
  });

  test('a rank-skipping step is refused rather than routed', () => {
    const p = scheme(['A', 'B', 'C'], [0, 1, 0], [1, 2, 2], ['x', 'y', 'overall']);
    expect(fitProblems(p)[0]).toMatch(/spans 2 ranks/);
  });

  test('two identical steps are caught by the geometric backstop', () => {
    // Same from, same to, same reagent: two labels on exactly one another,
    // which verify-render reports as a hard error. Nothing in the arithmetic
    // caps names this — the backstop is what catches it.
    const p = scheme(['A', 'B'], [0, 0], [1, 1], ['KOH', 'KOH']);
    expect(fitProblems(p).some((s) => /collide/.test(s))).toBe(true);
  });
});

/**
 * Written when reaction_scheme was not in REGISTRY, so
 * derived-consistency.test.ts could not reach it. It is registered now and
 * that suite does reach it; these stay because they assert against the module
 * directly rather than through the registry.
 */
describe('reaction_scheme — derived self-consistency', () => {
  test('derived matches what computeDerived actually returns', () => {
    const values = reactionScheme.computeDerived(reactionScheme.defaults);
    expect(Object.keys(values).sort()).toEqual([...reactionScheme.derived].sort());
  });

  test('every derivedAliases key names a real derived quantity', () => {
    for (const key of Object.keys(reactionScheme.derivedAliases)) {
      expect(reactionScheme.derived).toContain(key);
    }
  });

  test('the derived key set never changes shape, whatever the payload', () => {
    const shapes = [
      { species: ['A', 'B'], step_from: [0], step_to: [1] },
      { species: ['A', 'B', 'C'], step_from: [0, 0], step_to: [1, 2] },
      { species: ['A', 'B', 'C'], step_from: [0, 1], step_to: [2, 2] },
    ];
    for (const s of shapes) {
      const p: ReactionSchemeParams = {
        ...s,
        step_reagent: s.step_from.map(() => 'r'),
        step_kind: s.step_from.map(() => 'plain' as const),
        highlight_step: -1,
        step_progress: 0,
        caption: '',
      };
      expect(Object.keys(reactionScheme.computeDerived(p)).sort())
        .toEqual([...reactionScheme.derived].sort());
    }
  });
});

/** validate() is total, never throws, and every rejection is readable. */
describe('reaction_scheme — validate()', () => {
  const good = reactionScheme.defaults;
  /** A whole payload, not a patch — `{ ...good, ...{} }` is still `good`, so
   *  a patch-based helper cannot express "an empty object". */
  const patched = (patch: Record<string, unknown>) => ({ ...good, ...patch });

  test('the defaults validate', () => {
    expect(reactionScheme.validate(good).ok).toBe(true);
  });

  test.each([
    ['an empty object', {}, /species must be an array/],
    ['a non-object', null, /params must be an object/],
    ['one species', patched({ species: ['A'] }), /2 to 8 strings/],
    ['nine species', patched({ species: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] }), /2 to 8 strings/],
    ['an 11-char species', { species: ['CH3CH2CH2XY', 'C2H4'], step_from: [0], step_to: [1], step_reagent: ['r'], step_kind: ['plain'], highlight_step: -1, step_progress: 0, caption: '' }, /1 to 10 characters/],
    ['ragged step arrays', patched({ step_to: [1, 2] }), /equal length/],
    ['no steps', patched({ step_from: [], step_to: [], step_reagent: [], step_kind: [] }), /1 to 8 entries/],
    ['an out-of-range index', patched({ step_to: [1, 2, 9] }), /species index in 0\.\.3/],
    ['a self-step', patched({ step_from: [0, 1, 3] }), /from a species to itself/],
    ['a 13-char reagent', patched({ step_reagent: ['773 K', 'Br2,KOH', 'thirteenchars'] }), /at most 12 characters/],
    ['an unknown step_kind', patched({ step_kind: ['plain', 'plain', 'huge'] }), /must be one of plain, major, minor/],
    ['a highlight past the last step', patched({ highlight_step: 3 }), /-1 or an integer in 0\.\.2/],
    ['NaN progress', patched({ step_progress: NaN }), /finite number/],
    ['Infinity progress', patched({ step_progress: Infinity }), /finite number/],
    ['a cycle', { species: ['A', 'B', 'C'], step_from: [0, 1, 2], step_to: [1, 2, 0], step_reagent: ['x', 'y', 'z'], step_kind: ['plain', 'plain', 'plain'], highlight_step: -1, step_progress: 0, caption: '' }, /cycle/],
  ])('rejects %s with a readable message', (_name, payload, pattern) => {
    const r = reactionScheme.validate(payload);
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: string[] }).errors.join(' | ')).toMatch(pattern);
  });

  test('never throws, on anything', () => {
    for (const junk of [undefined, 0, '', [], NaN, { species: 3 }, { species: [1, 2] }]) {
      expect(() => reactionScheme.validate(junk)).not.toThrow();
    }
  });

  test('step_progress is clamped into 0..1 rather than rejected', () => {
    const r = reactionScheme.validate({ ...good, step_progress: 4 });
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: ReactionSchemeParams }).params.step_progress).toBe(1);
  });

  test('an omitted step_kind defaults to plain for every step', () => {
    const r = reactionScheme.validate({ ...good, step_kind: undefined });
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: ReactionSchemeParams }).params.step_kind)
      .toEqual(['plain', 'plain', 'plain']);
  });
});

/* ==========================================================================
 * molecule_struct
 *
 * The widget's own output is the READING of a Lewis structure: the model sends
 * counts (centre, bond_pairs, lone_pairs, bond_orders, charge) and never names
 * a shape, an angle or a coordinate. Everything asserted below is looked up or
 * computed from those counts, so a test that passed by echoing the payload
 * back would have nothing to echo.
 * ========================================================================== */

function species(
  centre: string,
  ligands: string[],
  lone_pairs: number,
  bond_orders?: number[],
  patch: Partial<MoleculeStructParams> = {}
): MoleculeStructParams {
  return {
    mode: 'electron_domain',
    centre,
    bond_pairs: ligands.length,
    lone_pairs,
    ligands,
    bond_orders: bond_orders ?? ligands.map(() => 1),
    bond_styles: ligands.map(() => 'plain' as BondStyle),
    charge: 0,
    bracket: false,
    show_lone_pairs: true,
    show_angle: false,
    label: '',
    highlight_site: -1,
    ...patch,
  };
}

/** Every (bond_pairs, lone_pairs) the schema admits. */
function legalBox(): [number, number][] {
  const out: [number, number][] = [];
  for (let bp = MIN_BOND_PAIRS; bp <= MAX_BOND_PAIRS; bp++) {
    for (let lp = 0; lp + bp <= MAX_DOMAINS && lp <= 3; lp++) out.push([bp, lp]);
  }
  return out;
}

describe('molecule_struct — the AXE table is total, and it is a LOOKUP', () => {
  test('every legal (bond_pairs, lone_pairs) has a row, and there are no others', () => {
    const box = legalBox();
    for (const [bp, lp] of box) {
      expect([bp, lp, axeFor(bp, lp) !== null]).toEqual([bp, lp, true]);
    }
    // 14 rows: the table's legal range and the schema's are the SAME set, in
    // both directions. A row with no payload that can reach it is dead code; a
    // payload with no row is a crash waiting for a lesson to generate it.
    expect(AXE_KEYS.length).toBe(box.length);
    expect(AXE_KEYS.length).toBe(14);
  });

  test('the drawn angle and the reported angle are different numbers, on purpose', () => {
    // METHANE. The convention array puts the first two bonds at 135 and 45 —
    // 90 degrees apart ON THE PAGE, because 109.5 cannot be drawn in a plane.
    const tet = AXE['4-0'];
    expect(Math.abs(tet.bondSites[0] - tet.bondSites[1])).toBe(90);
    expect(tet.bondAngle).toBe(109.5);
    // And the widget reports the table's number, not the drawing's. This is
    // the assertion that would fail if anyone ever "fixed" the drawing by
    // measuring it.
    expect(deriveMolecule(species('C', ['H', 'H', 'H', 'H'], 0)).bond_angle_deg).toBe(109.5);

    // The same, geometrically: the two ligands really are 90 degrees apart on
    // the board, at every board size.
    const l = moleculeLayout(species('C', ['H', 'H', 'H', 'H'], 0), 343, 236);
    const a0 = Math.atan2(l.cy - l.sites[0].ly, l.sites[0].lx - l.cx);
    const a1 = Math.atan2(l.cy - l.sites[1].ly, l.sites[1].lx - l.cx);
    expect(Math.abs((a0 - a1) * (180 / Math.PI))).toBeCloseTo(90, 6);
  });

  test('no row uses an arc command, and no path has an odd number of numbers', () => {
    // verify-render's pathBounds pairs the numbers in `d` POSITIONALLY, so an
    // `A` command's flags would be read as coordinates and the bounds it
    // reports would not exist. M/L only, everywhere.
    const paths = [
      lonePairPath(100, 100, 90),
      moleculeLayout(species('C', ['O', 'O'], 0, [2, 2], { show_angle: true }), 343, 236).arcD,
      bondPath(moleculeLayout(species('C', ['O', 'O'], 0, [2, 2]), 343, 236).sites[0]),
    ];
    for (const d of paths) {
      expect(d).not.toMatch(/[AaCcQqSsTtHhVv]/);
      expect((d.match(/-?\d+\.?\d*/g) ?? []).length % 2).toBe(0);
    }
  });
});

describe('molecule_struct — reference values (NCERT Cl.11 Unit 4, Cl.12 Unit 5)', () => {
  test('1. CH4 — steric number 4, sp3, tetrahedral, 109.5, formal charge 0', () => {
    const p = species('C', ['H', 'H', 'H', 'H'], 0);
    const d = deriveMolecule(p);
    expect(d.steric_number).toBe(4);
    expect(axeFor(4, 0)!.hybridisation).toBe('sp3');
    expect(axeFor(4, 0)!.shape).toBe('tetrahedral');
    expect(d.ideal_angle_deg).toBe(109.5);
    expect(d.bond_angle_deg).toBe(109.5);
    // V - 2*lone_pairs - sum(bond_orders) = 4 - 0 - 4 = 0
    expect(d.formal_charge_centre).toBe(0);
    expect(formalChargeSum(p)).toBe(0);
    // The octet, read off the drawing: 2 per bond, 2 per lone pair.
    expect(d.valence_electrons_total).toBe(8);
  });

  test('2. the -2.5 per lone pair constant is READ OFF NCERT’s own CH4/NH3/H2O series', () => {
    // Three points on one line, all sp3, all from NCERT: 109.5, 107, 104.5.
    // The constant is not tuned to fit water — water is the third point.
    const ch4 = deriveMolecule(species('C', ['H', 'H', 'H', 'H'], 0));
    const nh3 = deriveMolecule(species('N', ['H', 'H', 'H'], 1));
    const h2o = deriveMolecule(species('O', ['H', 'H'], 2));

    expect([ch4.steric_number, nh3.steric_number, h2o.steric_number]).toEqual([4, 4, 4]);
    expect([ch4.ideal_angle_deg, nh3.ideal_angle_deg, h2o.ideal_angle_deg])
      .toEqual([109.5, 109.5, 109.5]);
    expect([ch4.bond_angle_deg, nh3.bond_angle_deg, h2o.bond_angle_deg])
      .toEqual([109.5, 107, 104.5]);

    // Evenly spaced, 2.5 apart, both gaps — which is what makes it a series
    // and not two coincidences.
    expect(ch4.bond_angle_deg - nh3.bond_angle_deg).toBeCloseTo(2.5, 10);
    expect(nh3.bond_angle_deg - h2o.bond_angle_deg).toBeCloseTo(2.5, 10);
    expect(h2o.bond_angle_deg).toBeCloseTo(109.5 - 2 * 2.5, 10);

    // The shapes differ even though the parent geometry does not.
    expect(axeFor(3, 1)!.shape).toBe('trigonal pyramidal');
    expect(axeFor(2, 2)!.shape).toBe('bent');
    expect(deriveMolecule(species('O', ['H', 'H'], 2)).formal_charge_centre).toBe(0);
  });

  test('3. PCl5 — TWO angles, 120 equatorial AND 90 axial', () => {
    const p = species('P', ['Cl', 'Cl', 'Cl', 'Cl', 'Cl'], 0);
    const d = deriveMolecule(p);
    expect(d.steric_number).toBe(5);
    expect(axeFor(5, 0)!.hybridisation).toBe('sp3d');
    expect(axeFor(5, 0)!.shape).toBe('trigonal bipyramidal');
    expect(d.ideal_angle_deg).toBe(120);
    expect(d.bond_angle_deg).toBe(120);
    // THE FIXTURE THAT PROVES secondary_angle_deg IS REAL. A single-angle
    // model is wrong for every SN-5 species, not just this one.
    expect(d.secondary_angle_deg).toBe(90);
    expect(d.formal_charge_centre).toBe(0);   // 5 - 0 - 5
    expect(formalChargeSum(p)).toBe(0);       // every Cl is 7 + 1 - 8 = 0
    expect(d.valence_electrons_total).toBe(10);   // expanded octet

    // And a shape with only ONE angle reports 0 there, so the key is never a
    // number that happens to be right.
    expect(deriveMolecule(species('C', ['H', 'H', 'H', 'H'], 0)).secondary_angle_deg).toBe(0);
  });

  test('4. ozone — centre +1, terminals 0 and -1, and the SUM is the species charge', () => {
    // NCERT Cl.11 Unit 4's own worked example. bond_orders [2, 1] is the whole
    // point: the two oxygens are not equivalent in one resonance structure.
    const p = species('O', ['O', 'O'], 1, [2, 1]);
    const d = deriveMolecule(p);
    expect(d.steric_number).toBe(3);
    expect(axeFor(2, 1)!.shape).toBe('bent');
    expect(axeFor(2, 1)!.hybridisation).toBe('sp2');
    expect(d.bond_angle_deg).toBe(117.5);      // 120 - 1*2.5

    // 6 - 2*1 - (2 + 1) = +1
    expect(d.formal_charge_centre).toBe(1);
    expect(terminalFormalCharge('O', 2)).toBe(0);    // 6 + 2 - 8
    expect(terminalFormalCharge('O', 1)).toBe(-1);   // 6 + 1 - 8
    // The sum rule is what makes these three numbers a check rather than three
    // unrelated assertions.
    expect(formalChargeSum(p)).toBe(0);
    expect(formalChargeSum(p)).toBe(p.charge);

    // A charged species keeps the rule: NH4+ is +1 on N and 0 on every H.
    const nh4 = species('N', ['H', 'H', 'H', 'H'], 0, undefined, { charge: 1 });
    expect(formalChargeCentre(nh4)).toBe(1);
    expect(formalChargeSum(nh4)).toBe(1);
    expect(formalChargeSum(nh4)).toBe(nh4.charge);

    // A polyatomic ligand has no single V, so the sum is null rather than a
    // confident wrong number.
    expect(formalChargeSum(species('Fe', ['CN', 'CN'], 0))).toBeNull();
  });

  test('5. K4[Fe(CN)6] — oxidation state +2, coordination number 6, EAN 36', () => {
    const p = species('Fe', ['CN', 'CN', 'CN', 'CN', 'CN', 'CN'], 0, undefined, {
      mode: 'coordination', charge: -4, bracket: true, show_lone_pairs: false,
    });
    const d = deriveMolecule(p);
    // ox = charge - sum(ligand charges) = -4 - 6*(-1) = +2
    expect(d.oxidation_state).toBe(2);
    expect(d.coordination_number).toBe(6);
    // EAN = Z - ox + 2*CN = 26 - 2 + 12 = 36 (krypton)
    expect(d.ean).toBe(36);
    expect(moleculeStruct.validate(p).ok).toBe(true);

    // CROSS-CHECK. Same noble gas from a completely different (Z, ox, CN)
    // triple — which is the entire point of EAN, and what a hard-coded 36
    // would pass without.
    const nico4 = species('Ni', ['CO', 'CO', 'CO', 'CO'], 0, undefined, {
      mode: 'coordination', show_lone_pairs: false,
    });
    const dn = deriveMolecule(nico4);
    expect([dn.oxidation_state, dn.coordination_number, dn.ean]).toEqual([0, 4, 36]);
    expect(moleculeStruct.validate(nico4).ok).toBe(true);

    // coordination_number is the SUM OF DENTICITIES and equals bond_pairs for
    // every admitted payload — because a chelate is refused, not approximated.
    expect(d.coordination_number).toBe(p.bond_pairs);
    expect(dn.coordination_number).toBe(nico4.bond_pairs);

    // The three coordination numbers are zero outside coordination mode, so
    // the key set never changes shape while the values stay honest.
    const same = deriveMolecule({ ...p, mode: 'electron_domain' });
    expect([same.oxidation_state, same.coordination_number, same.ean]).toEqual([0, 0, 0]);
    expect(same.steric_number).toBe(6);
  });

  test('formal charge is a LEWIS quantity — zero for a coordination centre', () => {
    // The even-split formula applied to Ni(CO)4 returns 10 - 0 - 4 = +6, a
    // number nobody uses and NCERT never asks for. Coordination mode reports
    // oxidation_state instead, which splits every bond to the ligand.
    const nico4 = species('Ni', ['CO', 'CO', 'CO', 'CO'], 0, undefined, { mode: 'coordination' });
    expect(deriveMolecule(nico4).formal_charge_centre).toBe(0);
    expect(deriveMolecule(nico4).oxidation_state).toBe(0);

    // A dative bond is still split evenly, because that IS the definition —
    // so H3O+ comes out at +1 on the oxygen, which is the textbook answer.
    const h3o = species('O', ['H', 'H', 'H'], 1, undefined, {
      mode: 'interaction', charge: 1,
      bond_styles: ['plain', 'plain', 'dative'] as BondStyle[],
    });
    const dh = deriveMolecule(h3o);
    expect(dh.formal_charge_centre).toBe(1);          // 6 - 2 - 3
    expect(dh.bond_angle_deg).toBe(107);
    expect(formalChargeSum(h3o)).toBe(h3o.charge);

    // Bifluoride: EVERY ligand entry is an electron domain whatever its style,
    // so [F-H...F]- reads as steric number 2 and 180 degrees — which is what
    // it is. A hydrogen bond bolted onto water would move water's own shape,
    // which is why the payload puts the H at the centre.
    const hf2 = species('H', ['F', 'F'], 0, undefined, {
      mode: 'interaction', charge: -1,
      bond_styles: ['plain', 'hbond'] as BondStyle[],
    });
    const dhf = deriveMolecule(hf2);
    expect([dhf.steric_number, dhf.bond_angle_deg]).toEqual([2, 180]);
    expect(dhf.formal_charge_centre).toBe(-1);        // 1 - 0 - 2
    expect(formalChargeSum(hf2)).toBe(hf2.charge);
  });

  test('6. THE COUNTER-FIXTURE — XeF2 is LINEAR at 180, not bent at ~172.5', () => {
    const p = species('Xe', ['F', 'F'], 3);
    const d = deriveMolecule(p);
    expect(d.steric_number).toBe(5);
    expect(axeFor(2, 3)!.hybridisation).toBe('sp3d');
    expect(axeFor(2, 3)!.shape).toBe('linear');
    expect(d.ideal_angle_deg).toBe(180);
    expect(d.bond_angle_deg).toBe(180);

    // The two numbers a naive rule would produce, neither of which is right:
    //   "2 bond pairs means bent"          -> 120 - 3*2.5 = 112.5
    //   "linear, minus 2.5 per lone pair"  -> 180 - 3*2.5 = 172.5
    expect(d.bond_angle_deg).not.toBeCloseTo(172.5, 1);
    expect(d.bond_angle_deg).not.toBeCloseTo(112.5, 1);

    // The compression rule belongs to ONE parent geometry. Water and XeF2 have
    // the same bond_pairs and different lone_pairs, and only one of them is
    // compressed at all — which is why the table is a lookup and not a formula.
    expect(deriveMolecule(species('O', ['H', 'H'], 2)).bond_angle_deg).toBe(104.5);
    expect(d.formal_charge_centre).toBe(0);          // 8 - 6 - 2
    expect(d.valence_electrons_total).toBe(10);

    // Both LINEAR rows force the angle arc, and they are different steric
    // numbers — keying the rule off "steric_number 2" would leave XeF2 with a
    // zero-height bounding box and a hard coverage error.
    expect(angleIsForced(2, 3)).toBe(true);          // XeF2,  SN 5
    expect(angleIsForced(2, 0)).toBe(true);          // CO2,   SN 2
    expect(angleIsForced(4, 0)).toBe(false);         // CH4
    expect(moleculeLayout(p, 343, 236).showAngle).toBe(true);
  });
});

describe('molecule_struct — the caps, and the arithmetic they came from', () => {
  test('the site radius is 85.0 at 343x236, and 72.4 in interaction mode', () => {
    // innerW = 343 - 24 = 319; innerH = 236 - 28.4 - 10 = 197.6
    // R_width  = (319   - 2*27.84)/2 = 131.66
    // R_height = (197.6 - 2*13.80)/2 =  85.00   -> height-bound
    const ed = moleculeLayout(species('C', ['H', 'H', 'H', 'H'], 0), 343, 236);
    expect(ed.R).toBeCloseTo(85, 6);
    expect(ed.cx).toBeCloseTo(171.5, 6);
    expect(ed.cy).toBeCloseTo(127.2, 6);

    // Interaction mode gives up bandFor(12, 6) = 25.2 to the style legend:
    // R_height = (172.4 - 27.6)/2 = 72.4. It is therefore the BINDING mode for
    // every label cap, which is why validate() runs its backstop per-mode.
    const inter = moleculeLayout(
      species('C', ['H', 'H', 'H', 'H'], 0, undefined, { mode: 'interaction' }), 343, 236
    );
    expect(inter.R).toBeCloseTo(72.4, 6);
    expect(inter.R).toBeLessThan(ed.R);
  });

  test('six sites clear and seven do not — the bond_pairs cap, measured', () => {
    const need4 = labelSeparationNeeded(MAX_LIGAND_CHARS);      // 27.84 + 4
    expect(need4).toBeCloseTo(31.84, 6);

    // Six sites, 60 degrees apart: dx = R*(1 - cos 60) = 0.5*R
    expect(adjacentLabelDx(85, 6)).toBeCloseTo(42.5, 6);
    expect(adjacentLabelDx(72.4, 6)).toBeCloseTo(36.2, 6);
    expect(adjacentLabelDx(72.4, 6)).toBeGreaterThan(need4);

    // Seven sites, 51.43 degrees apart: dx = R*(1 - cos 51.43) = 0.3765*R.
    // It FAILS at the interaction-mode radius, and clears by 0.16pt at the
    // electron-domain one — which is a coincidence, not a margin.
    expect(adjacentLabelDx(72.4, 7)).toBeCloseTo(27.26, 1);
    expect(adjacentLabelDx(72.4, 7)).toBeLessThan(need4);
    expect(adjacentLabelDx(85, 7) - need4).toBeLessThan(0.2);

    // So the schema stops at 6, and the AXE table has no row past it either.
    expect(MAX_BOND_PAIRS).toBe(6);
    expect(axeFor(7, 0)).toBeNull();
    const r = moleculeStruct.validate(
      species('S', ['F', 'F', 'F', 'F', 'F', 'F', 'F'], 0)
    );
    expect(r.ok).toBe(false);
  });

  test('a 4-char ligand fits at six sites and a 5-char one does not', () => {
    // 4 chars: 27.84 + 4 = 31.84 <= 36.20 at the interaction-mode R
    // 5 chars: 34.80 + 4 = 38.80 >  36.20
    expect(labelSeparationNeeded(4)).toBeLessThan(adjacentLabelDx(72.4, 6));
    expect(labelSeparationNeeded(5)).toBeGreaterThan(adjacentLabelDx(72.4, 6));
    expect(MAX_LIGAND_CHARS).toBe(4);
    expect(LABEL_CLEAR).toBe(4);

    const ok = moleculeStruct.validate(species('S', ['FFFF', 'FFFF', 'FFFF', 'FFFF', 'FFFF', 'FFFF'], 0));
    expect(ok.ok).toBe(true);
    const bad = moleculeStruct.validate(species('S', ['FFFFF', 'F', 'F', 'F', 'F', 'F'], 0));
    expect(bad.ok).toBe(false);
    expect((bad as { ok: false; errors: string[] }).errors.join(' | ')).toMatch(/1 to 4 characters/);
  });

  test('BOND_GAP is a DEVICE constant — the same 5pt at every board', () => {
    // A double bond's two shafts are BOND_GAP apart in device points, not a
    // fraction of R. Expressed as a fraction it would collapse as the board
    // shrank and the second line would drift into the ligand label — the same
    // defect class as field_lines' seed ring.
    const p = species('C', ['O', 'O'], 0, [2, 2]);
    const gapAt = (w: number, h: number) => {
      const s = moleculeLayout(p, w, h).sites[0];
      const nums = (bondPath(s).match(/-?\d+\.?\d*/g) ?? []).map(Number);
      // Two subpaths of two points each: the two shaft starts.
      return Math.hypot(nums[0] - nums[4], nums[1] - nums[5]);
    };
    expect(gapAt(343, 236)).toBeCloseTo(BOND_GAP, 4);
    expect(gapAt(495, 270)).toBeCloseTo(BOND_GAP, 4);
    expect(gapAt(900, 430)).toBeCloseTo(BOND_GAP, 4);
    expect(BOND_GAP).toBe(5);
  });

  test('a lone pair is ONE path with TWO closed subpaths, never two circles', () => {
    // Two Circles 6.4pt apart at r = 2.4 are below verify-render assertion 8's
    // 2r + 4 = 8.8 floor, so EVERY payload carrying a lone pair would be a
    // hard error. Both dots therefore live in one Path.
    const d = lonePairPath(100, 100, 90);
    expect((d.match(/M/g) ?? []).length).toBe(2);
    expect((d.match(/Z/g) ?? []).length).toBe(2);
    // The two dot centres really are 6.4 apart — i.e. the thing that would
    // have failed, does exist, and is drawn a legal way instead.
    expect(6.4).toBeLessThan(2 * 2.4 + 4);
  });

  test('validate() admits nothing the small-board layout rejects', () => {
    // THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY.
    // Every AXE row, in every mode, at the widest labels the schema allows,
    // laid out at the SMALLEST board this app checks.
    for (const [bp, lp] of legalBox()) {
      for (const mode of MODES) {
        const lig = mode === 'coordination' ? 'NO2' : 'WWWW';
        const p = species(mode === 'coordination' ? 'Fe' : 'Xe',
          new Array<string>(bp).fill(lig), lp, new Array<number>(bp).fill(1), {
            mode: mode as MoleculeMode,
            charge: -4, bracket: true, show_angle: true, label: 'X'.repeat(24),
            highlight_site: bp - 1,
          });
        expect([bp, lp, mode, moleculeFitProblems(p, 343, 236)]).toEqual([bp, lp, mode, []]);
      }
    }
  });

  test('the geometric backstop catches what the caps do not name', () => {
    // The arithmetic caps say nothing about a centre label so wide that the
    // bond has no shaft left. The backstop measures it.
    const p = species('Xe', ['WWWW', 'WWWW'], 0);
    expect(moleculeFitProblems(p, 343, 236)).toEqual([]);
    // Shrink the board until the same payload stops fitting: the backstop must
    // be capable of saying no, or it is not a check.
    expect(moleculeFitProblems(p, 120, 80).length).toBeGreaterThan(0);
  });
});

describe('molecule_struct — derived self-consistency', () => {
  test('derived matches what computeDerived actually returns', () => {
    // molecule_struct is not in REGISTRY (registry wiring is a separate serial
    // step), so derived-consistency.test.ts does not reach it. Same assertion,
    // made directly, so registration cannot be the first time this is checked.
    expect(Object.keys(moleculeStruct.computeDerived(moleculeStruct.defaults)).sort())
      .toEqual([...moleculeStruct.derived].sort());
    for (const key of Object.keys(moleculeStruct.derivedAliases)) {
      expect(moleculeStruct.derived).toContain(key);
    }
    expect(moleculeStruct.derived.length).toBe(10);
  });

  test('the derived key set is THE SAME SET IN EVERY MODE and every shape', () => {
    const want = [...moleculeStruct.derived].sort();
    for (const [bp, lp] of legalBox()) {
      for (const mode of MODES) {
        const p = species(mode === 'coordination' ? 'Fe' : 'Xe',
          new Array<string>(bp).fill(mode === 'coordination' ? 'CN' : 'F'), lp,
          undefined, { mode: mode as MoleculeMode });
        expect([bp, lp, mode, Object.keys(moleculeStruct.computeDerived(p)).sort()])
          .toEqual([bp, lp, mode, want]);
        for (const v of Object.values(moleculeStruct.computeDerived(p))) {
          expect(Number.isFinite(v)).toBe(true);
        }
      }
    }
  });

  test('hybridisation and shape are STRINGS, so steric_number is the key', () => {
    // computeDerived returns Record<string, number>; the words cannot live
    // there. steric_number fixes the hybridisation outright, and with
    // lone_pairs (itself a param) it fixes the shape — so a caption can
    // reference the number and the readout can render the words.
    const byStericNumber = new Map<number, Set<string>>();
    for (const [bp, lp] of legalBox()) {
      const e = axeFor(bp, lp)!;
      const sn = bp + lp;
      if (!byStericNumber.has(sn)) byStericNumber.set(sn, new Set());
      byStericNumber.get(sn)!.add(e.hybridisation);
      expect(deriveMolecule(species('Xe', new Array<string>(bp).fill('F'), lp)).steric_number)
        .toBe(sn);
    }
    for (const [sn, hybs] of byStericNumber) {
      expect([sn, hybs.size]).toEqual([sn, 1]);
    }
    expect([...byStericNumber.keys()].sort()).toEqual([2, 3, 4, 5, 6]);
  });
});

/** validate() is total, never throws, and every rejection is readable. */
describe('molecule_struct — validate()', () => {
  const good = moleculeStruct.defaults;
  /** A whole payload, not a patch — `{ ...good, ...{} }` is still `good`, so a
   *  patch-based helper cannot express "an empty object". */
  const patched = (patch: Record<string, unknown>) => ({ ...good, ...patch });

  test('the defaults validate', () => {
    expect(moleculeStruct.validate(good).ok).toBe(true);
  });

  test.each([
    ['an empty object', {}, /centre must be a 1 to 3 character element symbol/],
    ['a non-object', null, /params must be an object/],
    ['an unknown mode', patched({ mode: 'ball_and_stick' }), /mode must be one of/],
    ['an unknown centre', patched({ centre: 'Xx' }), /not in the element table/],
    ['a 4-char centre', patched({ centre: 'Abcd' }), /1 to 3 character element symbol/],
    ['one bond pair', patched({ bond_pairs: 1, ligands: ['H'], bond_orders: [1], bond_styles: ['plain'] }), /bond_pairs must be an integer in 2\.\.6/],
    ['seven bond pairs', patched({ bond_pairs: 7, ligands: new Array(7).fill('F'), bond_orders: new Array(7).fill(1), bond_styles: new Array(7).fill('plain') }), /bond_pairs must be an integer in 2\.\.6/],
    ['four lone pairs', patched({ lone_pairs: 4 }), /lone_pairs must be an integer in 0\.\.3/],
    ['seven electron domains', patched({ bond_pairs: 5, lone_pairs: 2, ligands: new Array(5).fill('F'), bond_orders: new Array(5).fill(1), bond_styles: new Array(5).fill('plain') }), /at most 6/],
    ['a ragged ligands array', patched({ ligands: ['H', 'H'] }), /exactly bond_pairs \(4\) strings/],
    ['a 5-char ligand', patched({ ligands: ['HHHHH', 'H', 'H', 'H'] }), /1 to 4 characters/],
    ['ragged bond_orders', patched({ bond_orders: [1, 1] }), /empty or have exactly bond_pairs \(4\)/],
    ['a quadruple bond', patched({ bond_orders: [4, 1, 1, 1] }), /integer in 1\.\.3/],
    ['an unknown bond_style', patched({ bond_styles: ['plain', 'plain', 'squiggle', 'dash'] }), /must be one of plain, wedge, dash, dative, hbond/],
    ['a charge of 5', patched({ charge: 5 }), /integer in -4\.\.4/],
    ['NaN charge', patched({ charge: NaN }), /integer in -4\.\.4/],
    ['Infinity charge', patched({ charge: Infinity }), /integer in -4\.\.4/],
    ['a highlight past the last site', patched({ highlight_site: 4 }), /-1 or an integer in 0\.\.3/],
    ['a non-boolean bracket', patched({ bracket: 'yes' }), /bracket must be a boolean/],
    ['an unknown ligand in coordination mode', patched({ mode: 'coordination', centre: 'Fe', ligands: ['Zz', 'Zz', 'Zz', 'Zz'] }), /not in the ligand table/],
    ['a chelate in coordination mode', patched({ mode: 'coordination', centre: 'Ni', bond_pairs: 3, lone_pairs: 0, ligands: ['en', 'en', 'en'], bond_orders: [1, 1, 1], bond_styles: ['plain', 'plain', 'plain'], charge: 2 }), /polydentate/],
  ])('rejects %s with a readable message', (_name, payload, pattern) => {
    const r = moleculeStruct.validate(payload);
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: string[] }).errors.join(' | ')).toMatch(pattern);
  });

  test('never throws, on anything', () => {
    for (const junk of [
      undefined, 0, '', [], NaN, { centre: 3 }, { centre: 'C' },
      { centre: 'C', bond_pairs: 4 }, { centre: 'C', bond_pairs: 4, ligands: [1, 2, 3, 4] },
      { centre: 'C', bond_pairs: 2, ligands: ['H', 'H'], bond_orders: 'no' },
    ]) {
      expect(() => moleculeStruct.validate(junk)).not.toThrow();
    }
  });

  test('omitted arrays default rather than reject', () => {
    const r = moleculeStruct.validate({
      centre: 'N', bond_pairs: 3, lone_pairs: 1, ligands: ['H', 'H', 'H'],
    });
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: MoleculeStructParams }).params;
    expect(p.bond_orders).toEqual([1, 1, 1]);
    expect(p.bond_styles).toEqual(['plain', 'plain', 'plain']);
    expect(p.show_lone_pairs).toBe(true);      // a lone pair drawn by default
    expect(p.mode).toBe('electron_domain');
    expect(p.highlight_site).toBe(-1);
  });

  test('a label is sliced; a formula never is', () => {
    const r = moleculeStruct.validate(patched({ label: 'x'.repeat(60) }));
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: MoleculeStructParams }).params.label.length).toBe(24);
    // A sliced caption is a shorter sentence; a sliced formula is a different
    // substance, so an over-long ligand is refused instead.
    expect(moleculeStruct.validate(patched({ ligands: ['HHHHH', 'H', 'H', 'H'] })).ok).toBe(false);
  });

  test('every label box the component emits is inside the board it was laid out for', () => {
    for (const box of [[343, 236], [495, 270], [900, 430]] as const) {
      for (const mode of MODES) {
        const p = species(mode === 'coordination' ? 'Fe' : 'Xe',
          ['WWWW', 'WWWW', 'WWWW', 'WWWW', 'WWWW', 'WWWW'].slice(0, 6)
            .map((s) => (mode === 'coordination' ? 'NO2' : s)), 0, undefined, {
            mode: mode as MoleculeMode, charge: -4, bracket: true,
            show_angle: true, label: 'X'.repeat(24), highlight_site: 0,
          });
        for (const b of moleculeLabelBoxes(p, box[0], box[1])) {
          expect([mode, box[0], b.s, b.x0 >= -1 && b.x1 <= box[0] + 1]).toEqual([mode, box[0], b.s, true]);
          expect([mode, box[0], b.s, b.y0 >= -1 && b.y1 <= box[1] + 1]).toEqual([mode, box[0], b.s, true]);
        }
      }
    }
  });
});

/**
 * circuit_network — the five reference values its maths module's header states,
 * turned into assertions. Every one is chosen so that a STUB cannot pass it:
 * the resistor combination is self-checking through two independent routes,
 * the metre bridge is deliberately off the 50cm mark, the RC point is
 * exponential rather than linear, the capacitor series is the one formula
 * whose three plausible wrong answers are all far away, and the resonance
 * fixture separates ω₀ from f₀.
 */
describe('circuit_network — NCERT reference values', () => {
  const R = (name: string, value: number) => ({ kind: 'resistor' as const, name, value });
  const base = {
    internal_r: 0, bridge_null_cm: 50, show_current: true,
    t_frac: 0, bridge_delta: 0, caption: '',
  };

  /** 1. NCERT Cl.12 Physics Part I Ch.3 — combination of resistors, V = ε − I r. */
  const combo: CircuitNetworkParams = {
    ...base,
    topology: 'series_parallel',
    elements: [R('R1', 4), R('R2', 4), R('R3', 12), R('R4', 6)],
    source_v: 16,
    internal_r: 1,
  };

  test('ref 1: banks {4,4} and {12,6} behind ε 16 V, r 1 Ω', () => {
    const d = deriveCircuit(combo);
    expect(d.r_eq).toBeCloseTo(6, 9);                 // 4‖4 = 2, 12‖6 = 4
    expect(d.i_total).toBeCloseTo(2.285714, 6);       // 16/7
    expect(d.terminal_v).toBeCloseTo(13.714286, 6);   // 16 − 2.285714
    expect(d.power).toBeCloseTo(31.346939, 6);        // (256/49)·6
  });

  test('ref 1 is self-checking: terminal_v also equals i_total × r_eq', () => {
    // Two independent routes to one number, so a sign slip in ε − I r cannot
    // pass quietly the way it would against a single hand-typed expectation.
    const d = deriveCircuit(combo);
    expect(d.terminal_v).toBeCloseTo(d.i_total * d.r_eq, 9);
  });

  test('ref 1: the parallel banks are not summed, averaged or ignored', () => {
    const d = deriveCircuit(combo);
    expect(d.r_eq).not.toBeCloseTo(26, 1);   // summing every slot
    expect(d.r_eq).not.toBeCloseTo(6.5, 1);  // averaging
  });

  /** 2. Metre bridge, same chapter. */
  const bridge: CircuitNetworkParams = {
    ...base,
    topology: 'bridge',
    elements: [
      R('P', 6), R('Q', 4), R('R', 3), R('S', 5),
      { kind: 'galvanometer', name: 'G', value: 50 },
    ],
    source_v: 2,
    bridge_null_cm: 53.5,
  };

  test('ref 2: R 6 Ω, null at 53.5 cm -> X = 5.214953 Ω', () => {
    expect(deriveCircuit(bridge).r_unknown).toBeCloseTo(5.214953, 6);
  });

  test('ref 2 is off the 50 cm mark on purpose', () => {
    // At exactly 50 cm the answer IS the standard resistance, so a stub that
    // returns slot 0's value would pass. At 53.5 it returns 6 and is wrong.
    expect(deriveCircuit(bridge).r_unknown).not.toBeCloseTo(6, 1);
    expect(deriveCircuit({ ...bridge, bridge_null_cm: 50 }).r_unknown).toBeCloseTo(6, 9);
  });

  /** 3. RC charging. */
  const rc: CircuitNetworkParams = {
    ...base,
    topology: 'series',
    elements: [R('R', 20000), { kind: 'capacitor', name: 'C', value: 5 }],
    source_v: 12,
  };

  test('ref 3: R 20 kΩ with C 5 µF gives τ = 0.1 s exactly', () => {
    expect(deriveCircuit(rc).tau).toBeCloseTo(0.1, 12);
  });

  test('ref 3: V_C is exponential, not linear in t_frac', () => {
    // The animation window is 2.5 τ, so t_frac 0.4 IS one time constant.
    expect(capacitorVoltage(rc, 0.4)).toBeCloseTo(7.585447, 6);   // 12(1 − e⁻¹)
    expect(capacitorVoltage(rc, 1)).toBeCloseTo(11.014980, 6);    // 12(1 − e⁻²·⁵)
    // A stub linear in t_frac returns 12 × 0.4 = 4.8 here — 58% low, which is
    // exactly why the assertion is at a FRACTION and not at the endpoints:
    // 0 and 1 agree for any monotone stub.
    expect(capacitorVoltage(rc, 0.4)).not.toBeCloseTo(4.8, 1);
    expect(capacitorVoltage(rc, 0)).toBeCloseTo(0, 9);
  });

  /** 4. Capacitors in series, NCERT Cl.12 Part I Ch.2. */
  const caps: CircuitNetworkParams = {
    ...base,
    topology: 'series',
    elements: [
      { kind: 'capacitor', name: 'C1', value: 2 },
      { kind: 'capacitor', name: 'C2', value: 3 },
      { kind: 'capacitor', name: 'C3', value: 4 },
    ],
    source_v: 12,
  };

  test('ref 4: 2, 3 and 4 µF in series give 12/13 µF, Q 11.08 µC, U 66.46 µJ', () => {
    const d = deriveCircuit(caps);
    expect(d.c_eq).toBeCloseTo(12 / 13, 9);
    expect(d.c_eq).toBeCloseTo(0.923077, 6);
    expect(capacitorCharge(caps)).toBeCloseTo(11.076923, 6);
    expect(capacitorEnergy(caps)).toBeCloseTo(66.461538, 6);
  });

  test('ref 4: every plausible wrong formula is visibly wrong', () => {
    const c = deriveCircuit(caps).c_eq;
    expect(c).not.toBeCloseTo(9, 1);  // summing (that is the PARALLEL rule)
    expect(c).not.toBeCloseTo(3, 1);  // averaging
    // ...and the parallel rule on the same three, for contrast.
    expect(deriveCircuit({ ...caps, topology: 'parallel', elements: caps.elements.slice(0, 3) }).c_eq)
      .toBeCloseTo(9, 9);
  });

  /** 5. Series LCR at NCERT Cl.12 Part I Ch.7's own worked values. */
  const lcr: CircuitNetworkParams = {
    ...base,
    topology: 'series',
    elements: [
      R('R', 40),
      { kind: 'inductor', name: 'L', value: 5000 },   // 5.0 H, in millihenry
      { kind: 'capacitor', name: 'C', value: 80 },
    ],
    source_v: 230,
  };

  test('ref 5: L 5 H, C 80 µF, R 40 Ω -> ω₀ 50 rad/s, f₀ 7.96 Hz, Q 6.25', () => {
    expect(resonantOmega(lcr)).toBeCloseTo(50, 9);
    expect(resonantFreq(lcr)).toBeCloseTo(7.957747, 6);
    expect(qualityFactor(lcr)).toBeCloseTo(6.25, 9);
  });

  test('ref 5: f₀ is not ω₀ — the commonest bug in this formula', () => {
    expect(resonantFreq(lcr)).not.toBeCloseTo(50, 1);
    expect(resonantOmega(lcr) / resonantFreq(lcr)).toBeCloseTo(2 * Math.PI, 9);
  });
});

/**
 * The caps, each with the payload that sits one notch past it, and the
 * geometric backstop that catches what no named cap describes.
 * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY.
 */
describe('circuit_network — caps and the fit', () => {
  const R = (name: string, value: number) => ({ kind: 'resistor' as const, name, value });
  const p = (topology: CircuitNetworkParams['topology'], n: number): CircuitNetworkParams => ({
    topology,
    elements: Array.from({ length: n }, (_, i) => R(`R${i}`, 4700)),
    source_v: 12, internal_r: 0, bridge_null_cm: 50,
    show_current: true, t_frac: 0, bridge_delta: 0, caption: '',
  });

  test('a series rail holds 4 cells and refuses 5', () => {
    // 4 × 52pt = 208 of the 291pt rail at 343x236, 83pt spare. Six would be
    // 312 > 291 and is arithmetically impossible; five fits the pitch but
    // leaves under one cell of slack, so the cap is 4.
    expect(SLOTS.series).toEqual({ min: 1, max: 4 });
    expect(circuitNetwork.validate(p('series', 4)).ok).toBe(true);
    const r = circuitNetwork.validate(p('series', 5));
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toMatch(/1 to 4 elements/);
  });

  test('a parallel bank holds 3 branches and refuses 4', () => {
    // 3 × 52 branch pitch + 28 of rail ends = 184 ≤ 197.6 of usable height.
    // 4 would need 236 > 197.6.
    expect(SLOTS.parallel).toEqual({ min: 2, max: 3 });
    expect(circuitNetwork.validate(p('parallel', 3)).ok).toBe(true);
    expect(circuitNetwork.validate(p('parallel', 4)).ok).toBe(false);
  });

  test('a fixed-slot topology rejects a short payload rather than padding it', () => {
    // Padding would invent circuit the model did not send.
    for (const t of ['series_parallel', 'ladder', 'bridge', 'two_loop'] as const) {
      const short = circuitNetwork.validate(p(t, SLOTS[t].min - 1));
      expect([t, short.ok]).toEqual([t, false]);
      expect((short as { ok: false; errors: string[] }).errors.join(' ')).toMatch(/never padded/);
    }
  });

  test('every display string fits the 6-character budget across the whole range', () => {
    // The cap that closes the dense-mesh risk: 6 × 12 × 0.58 = 41.76pt against
    // a 52pt cell pitch. Swept rather than spot-checked, because the failure is
    // a UNIT-BOUNDARY one — 0.99956 Ω printed "1000 mΩ" until the thresholds
    // were moved off the round numbers.
    for (const kind of Object.keys(VALUE_MAX_BY_KIND) as ElementKind[]) {
      const max = VALUE_MAX_BY_KIND[kind];
      for (let i = 0; i <= 4000; i++) {
        const value = VALUE_MIN * Math.pow(max / VALUE_MIN, i / 4000);
        const s = fmtElement({ kind, name: 'x', value });
        expect([kind, value, s, s.length <= 6]).toEqual([kind, value, s, true]);
      }
    }
  });

  test('fmtOhms emits "4.7 kΩ", never "4.700 kΩ"', () => {
    expect(fmtOhms(4700)).toBe('4.7 kΩ');
    expect(fmtOhms(20000)).toBe('20 kΩ');
    expect(fmtOhms(4)).toBe('4 Ω');
    expect(fmtOhms(1e7)).toBe('10 MΩ');
  });

  /**
   * THE ONE GENUINE GLYPH HAZARD. The source and the galvanometer are both
   * circles at GLYPH_R, so verify-render assertion 8 demands 24pt between
   * them, and long arm labels are what shrink the diamond that separates them.
   * The floor is enforced in layout and CHECKED here — an assertion with no
   * fixture that fails it is an assertion trusted on the strength of having
   * been written (docs/small-screen-rendering-rules.md).
   */
  test('bridge labels clear each other at the 40pt half-diagonal floor', () => {
    const bridge: CircuitNetworkParams = {
      ...p('bridge', 5),
      elements: [
        R('P', 4700), R('Q', 4700), R('R', 4700), R('S', 4700),
        { kind: 'galvanometer', name: 'G', value: 4700 },
      ],
      bridge_null_cm: 53.5,
    };
    const collisions = (hx: number, hy: number) => {
      const b = bridgeFloorBoxes(bridge, hx, hy);
      let n = 0;
      for (let i = 0; i < b.length; i++) {
        for (let j = i + 1; j < b.length; j++) {
          if (b[i].x0 < b[j].x1 && b[j].x0 < b[i].x1 && b[i].y0 < b[j].y1 && b[j].y0 < b[i].y1) n++;
        }
      }
      return n;
    };
    expect(HALF_DIAG_MIN).toBe(40);
    expect(collisions(HALF_DIAG_MIN, HALF_DIAG_MIN)).toBe(0);
    // The fixture that FAILS it: half the floor puts the galvanometer's own
    // centred label straight through both lower arm labels.
    expect(collisions(20, 20)).toBeGreaterThan(0);
    expect(circuitFit(bridge, 343, 236)).toEqual([]);
  });

  test('the source and the galvanometer keep 24pt apart at every board', () => {
    const bridge: CircuitNetworkParams = {
      ...p('bridge', 5),
      elements: [
        R('P', 6), R('Q', 4), R('R', 3), R('S', 5),
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
    };
    for (const [w, h] of [[343, 236], [495, 270], [900, 430]] as const) {
      const g = circuitLayout(bridge, w, h).glyphs;
      const src = g.find((x) => x.what === 'source')!;
      const gal = g.find((x) => x.what === 'galvanometer')!;
      expect([w, Math.hypot(src.x - gal.x, src.y - gal.y) >= 24]).toEqual([w, true]);
    }
  });

  test('a capacitor leaves a real gap in the wire, not a short across its plates', () => {
    const rc: CircuitNetworkParams = {
      ...p('series', 2),
      elements: [R('R', 20000), { kind: 'capacitor', name: 'C', value: 5 }],
    };
    const l = circuitLayout(rc, 343, 236);
    const cap = l.elements[1];
    // No wire may pass through the element's own footprint. A rail drawn
    // straight through a capacitor is a WRONG diagram, not an untidy one.
    for (const w of l.wires) {
      const through =
        Math.abs(w.y0 - cap.cy) < 0.5 && Math.abs(w.y1 - cap.cy) < 0.5 &&
        Math.min(w.x0, w.x1) < cap.cx - 1 && Math.max(w.x0, w.x1) > cap.cx + 1;
      expect(through).toBe(false);
    }
  });

  test('the derived key set never changes shape, whatever the topology', () => {
    const shapes: CircuitNetworkParams[] = [
      p('series', 3), p('parallel', 2), p('series_parallel', 4),
      p('ladder', 4), p('two_loop', 6),
      {
        ...p('bridge', 5),
        elements: [
          R('P', 6), R('Q', 4), R('R', 3), R('S', 5),
          { kind: 'galvanometer', name: 'G', value: 50 },
        ],
      },
    ];
    for (const s of shapes) {
      expect(Object.keys(circuitNetwork.computeDerived(s)).sort())
        .toEqual([...circuitNetwork.derived].sort());
      // Zeros where inapplicable, never a missing key.
      for (const k of circuitNetwork.derived) {
        expect([s.topology, k, Number.isFinite(circuitNetwork.computeDerived(s)[k])])
          .toEqual([s.topology, k, true]);
      }
    }
  });
});

/** validate() is total, never throws, and every rejection is readable. */
describe('circuit_network — validate()', () => {
  const good = circuitNetwork.defaults;
  /** A whole payload, not a patch — `{ ...good, ...{} }` is still `good`, so
   *  a patch-based helper cannot express "an empty object". */
  const patched = (patch: Record<string, unknown>) => ({ ...good, ...patch });
  const R = (name: string, value: number) => ({ kind: 'resistor' as const, name, value });

  test('the defaults validate', () => {
    expect(circuitNetwork.validate(good).ok).toBe(true);
  });

  test.each([
    ['an empty object', {}, /topology must be one of/],
    ['a non-object', null, /params must be an object/],
    ['an unknown topology', patched({ topology: 'mesh' }), /topology must be one of/],
    ['elements that are not an array', patched({ elements: 4 }), /elements must be an array/],
    ['too few elements', patched({ elements: [R('R1', 4)] }), /exactly 4 elements/],
    ['too many elements', patched({ elements: [R('a', 1), R('b', 1), R('c', 1), R('d', 1), R('e', 1)] }), /exactly 4 elements/],
    ['a 4-character name', patched({ elements: [R('Rxyz', 4), R('R2', 4), R('R3', 12), R('R4', 6)] }), /1 to 3 characters/],
    ['an unknown kind', patched({ elements: [{ kind: 'diode', name: 'D', value: 1 }, R('R2', 4), R('R3', 12), R('R4', 6)] }), /kind must be one of/],
    ['a NaN value', patched({ elements: [R('R1', NaN), R('R2', 4), R('R3', 12), R('R4', 6)] }), /value must be a finite number/],
    ['an Infinity value', patched({ elements: [R('R1', Infinity), R('R2', 4), R('R3', 12), R('R4', 6)] }), /value must be a finite number/],
    ['a zero value', patched({ elements: [R('R1', 0), R('R2', 4), R('R3', 12), R('R4', 6)] }), /value must be a finite number/],
    ['a galvanometer outside a bridge', patched({ elements: [{ kind: 'galvanometer', name: 'G', value: 50 }, R('R2', 4), R('R3', 12), R('R4', 6)] }), /only exists in a bridge/],
    ['a switch in a ladder', { ...good, topology: 'ladder', elements: [{ kind: 'switch', name: 'S', value: 1 }, R('R2', 4), R('R3', 12), R('R4', 6)] }, /only allowed in series or series_parallel/],
    ['a capacitor mixed with a resistor in one parallel bank', { ...good, topology: 'parallel', elements: [R('R1', 4), { kind: 'capacitor', name: 'C', value: 5 }] }, /r_eq and c_eq are BOTH meaningless/],
    ['source_v out of range', patched({ source_v: 900 }), /source_v must be a finite number in 0\.1\.\.500/],
    ['a NaN source_v', patched({ source_v: NaN }), /source_v must be a finite number/],
    ['internal_r out of range', patched({ internal_r: 400 }), /internal_r must be a finite number in 0\.\.100/],
    ['bridge_null_cm out of range', patched({ bridge_null_cm: 100 }), /bridge_null_cm must be a finite number in 1\.\.99/],
    ['a non-boolean show_current', patched({ show_current: 'yes' }), /show_current must be a boolean/],
    ['a NaN t_frac', patched({ t_frac: NaN }), /t_frac must be a finite number/],
    ['an Infinity bridge_delta', patched({ bridge_delta: Infinity }), /bridge_delta must be a finite number/],
  ])('rejects %s with a readable message', (_name, payload, pattern) => {
    const r = circuitNetwork.validate(payload);
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: string[] }).errors.join(' | ')).toMatch(pattern);
  });

  test('never throws, on anything', () => {
    for (const junk of [undefined, 0, '', [], NaN, { topology: 3 }, { topology: 'series' },
      { topology: 'series', elements: [1, 2] }]) {
      expect(() => circuitNetwork.validate(junk)).not.toThrow();
    }
  });

  test('the animation phases are clamped, the physical claims are not', () => {
    // A phase is a position in a render and may be clamped; a voltage is a
    // claim about a circuit, and clamping 900 V to 500 would put a number on
    // the board the lesson never said.
    const r = circuitNetwork.validate({ ...good, t_frac: 4, bridge_delta: -9 });
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: CircuitNetworkParams }).params.t_frac).toBe(1);
    expect((r as { ok: true; params: CircuitNetworkParams }).params.bridge_delta).toBe(-1);
    expect(circuitNetwork.validate({ ...good, source_v: 900 }).ok).toBe(false);
  });

  test('a bridge needs its galvanometer in slot 4, not on an arm', () => {
    const arms = [
      { kind: 'galvanometer' as const, name: 'G', value: 50 },
      R('Q', 4), R('R', 3), R('S', 5), R('P', 6),
    ];
    const r = circuitNetwork.validate({ ...good, topology: 'bridge', elements: arms });
    expect(r.ok).toBe(false);
    expect((r as { ok: false; errors: string[] }).errors.join(' ')).toMatch(/slot 4/);
  });
});

/**
 * Corners found by an independent verification pass (2026-09-05), each with the
 * payload that produced it. Both are cases the schema admits and the reference
 * fixtures never reach.
 */
describe('circuit_network — corner regressions', () => {
  const R = (name: string, value: number) => ({ kind: 'resistor' as const, name, value });

  test('a bridge whose arms are not resistive reports no metre-bridge answer', () => {
    // Nothing in validate() objects to it: no parallel bank mixes families, so
    // the payload is legal. Reading slot 0's raw `value` printed "X 5.21 Ω"
    // for 6 µF — a resistance the payload never contained, in the derived key
    // a caption is most likely to quote.
    const caps: CircuitNetworkParams = {
      ...circuitNetwork.defaults,
      topology: 'bridge',
      bridge_null_cm: 53.5,
      elements: [
        { kind: 'capacitor', name: 'C1', value: 6 },
        { kind: 'capacitor', name: 'C2', value: 3 },
        { kind: 'capacitor', name: 'C3', value: 3 },
        { kind: 'capacitor', name: 'C4', value: 3 },
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
    };
    expect(circuitNetwork.validate(caps).ok).toBe(true);
    expect(deriveCircuit(caps).r_unknown).toBe(0);
    // and the resistive bridge still reads 6 × 46.5 / 53.5
    const res: CircuitNetworkParams = {
      ...caps,
      elements: [R('P', 6), R('Q', 4), R('R', 3), R('S', 5), { kind: 'galvanometer', name: 'G', value: 50 }],
    };
    expect(deriveCircuit(res).r_unknown).toBeCloseTo(5.214953, 6);
  });

  test('the fit model measures a label at the width verify-render will', () => {
    // scripts/verify-render.mjs picks 0.75 per code unit for a string holding
    // ANY Devanagari and 0.58 otherwise. A backstop measuring a name the gate
    // measures wider is modelling a checker that does not exist — `name` is
    // free text and the schema admits any script.
    expect(textW('R12')).toBeCloseTo(3 * 12 * 0.58, 9);
    expect(textW('क्ष')).toBeCloseTo(3 * 12 * 0.75, 9);
    expect(textW('क्ष')).toBeGreaterThan(textW('R12'));
  });
});
