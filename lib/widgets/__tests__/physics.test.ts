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
 * reaction_scheme is not in REGISTRY (see render-trees.test.tsx), so
 * derived-consistency.test.ts does not reach it. The same two invariants,
 * asserted here instead of being lost.
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
