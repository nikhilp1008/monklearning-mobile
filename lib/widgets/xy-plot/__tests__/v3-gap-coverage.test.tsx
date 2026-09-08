/**
 * THE EVIDENCE BEHIND THIRTEEN COLUMN PROMOTIONS.
 *
 * On 2026-09-07 the 27 high-confidence `gap_*` rows whose figures are plots
 * were re-read against xy_plot v3. Their `v2_evidence` had been written
 * against v2 and says so in as many words -- "a step function is not
 * expressible by xy_plot", "xy_plot has no Lorentzian", "xy_plot cannot do a
 * diode V-I characteristic" -- all three of which v3 draws. A stale refusal
 * reads exactly like a current one, which is why the whole set was re-read
 * rather than the ones that looked promising.
 *
 * Thirteen rows were promoted to `xy_plot` in content/concept-archetypes.csv.
 * Each promotion is a claim that this widget draws that concept's figure, and
 * each claim is this file: the payload, admitted by validate(), rendered at
 * 900x430, 495x270 and 343x236, and written into build/trees where
 * scripts/verify-tree-dir.mjs checks it on every run. Delete a case here and
 * the column is asserting something nothing checks.
 *
 * The fourteen rows NOT promoted are listed at the bottom with the specific
 * element that defeats them, so the next reader does not re-derive the same
 * fourteen refusals.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { xyPlot } from '..';
import type { XyPlotParams } from '../plot-math';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');
const D = xyPlot.defaults as XyPlotParams;
const P = (o: Partial<XyPlotParams>): XyPlotParams => ({ ...D, ...o });

/** row index in the 27 -> the payload that carries that concept. */
const CASES: Record<string, XyPlotParams> = {
  // 0  Power (phy11 ch5): P-t curve rising and falling, region under it shaded.
  gap00_area_under_curve: P({
    mode: 'area', curve: 'parabola', a: -2, b: 8, c: 0,
    x_min: 0, x_max: 4, shade_from: 0, shade_to: 4,
    x_label: 'time (s)', y_label: 'power (W)',
  }),
  // 1  Binding Energy Curve: Eb/A against A.
  gap01_binding_energy: P({ mode: 'named', named_shape: 'binding_energy' }),
  // 2  Newton's Law of Cooling: T = Ts + (T0-Ts)e^(-kt), asymptote at Ts.
  gap02_cooling: P({
    mode: 'curve', curve: 'exponential', a: 60, b: -0.35, c: 25,
    x_min: 0, x_max: 12,
    x_label: 'time (min)', y_label: 'temperature (C)',
  }),
  // 3  Indefinite Integrals: F(x)+C, the same curve stacked at five C.
  gap03_curve_family: P({
    mode: 'family', curve: 'parabola', a: 1, b: 0, c: 0,
    family_param: 'c', family_values: [-2, -1, 0, 1, 2],
    x_min: -2, x_max: 2, x_label: 'x', y_label: 'F(x) + C',
  }),
  // 4  Tangents and Normals: one curve, the tangent at a named point.
  gap04_tangent: P({
    mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: -1, x_max: 3, tangent_kind: 'tangent', tangent_at: 1,
    x_label: 'x', y_label: 'y = x^2',
  }),
  // 4b the normal at the same point — the other half of the concept.
  gap04b_normal: P({
    mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
    x_min: -1, x_max: 3, tangent_kind: 'normal', tangent_at: 1,
    x_label: 'x', y_label: 'y = x^2',
  }),
  // 5  Diode V-I characteristic.
  gap05_diode_iv: P({ mode: 'named', named_shape: 'diode_iv' }),
  // 9  LHL/RHL: a jump from 1 to 3 at x = 1.
  gap09_jump: P({
    mode: 'curve', x_min: 0, x_max: 2,
    pieces: [
      { from: 0, to: 1, curve: 'line', a: 0, b: 0, c: 1 },
      { from: 1, to: 2, curve: 'line', a: 0, b: 0, c: 3 },
    ],
    x_label: 'x', y_label: 'f(x)',
  }),
  // 10 Greatest integer: the staircase y = [x].
  gap10_staircase: P({
    mode: 'curve', x_min: 0, x_max: 6,
    pieces: [0, 1, 2, 3, 4, 5].map((n) => ({
      from: n, to: n + 1, curve: 'line' as const, a: 0, b: 0, c: n,
    })),
    x_label: 'x', y_label: 'y = [x]',
  }),
  // 11 Periodic: the sawtooth y = {x} over six unit bands.
  gap11_sawtooth: P({
    mode: 'curve', x_min: 0, x_max: 6,
    pieces: [0, 1, 2, 3, 4, 5].map((n) => ({
      from: n, to: n + 1, curve: 'line' as const, a: 1, b: 0, c: -n,
    })),
    x_label: 'x', y_label: 'y = {x}',
  }),
  // 13 Area under a piecewise f: y = |x| split at its corner, shaded.
  gap13_modulus_area: P({
    mode: 'area', x_min: -2, x_max: 2, shade_from: -2, shade_to: 2,
    pieces: [
      { from: -2, to: 0, curve: 'line', a: -1, b: 0, c: 0 },
      { from: 0, to: 2, curve: 'line', a: 1, b: 0, c: 0 },
    ],
    x_label: 'x', y_label: 'y = |x|',
  }),
  // 16/17 Resonance: amplitude against driving frequency at three dampings.
  gap16_resonance: P({ mode: 'named', named_shape: 'resonance' }),
  // 22 Stress-Strain and Yielding: the ductile curve with the yield landmarks.
  gap22_stress_strain: P({ mode: 'named', named_shape: 'stress_strain' }),
};

const BOARDS: [string, number, number][] = [
  ['', 900, 430], ['.real-small', 495, 270], ['.spec-small', 343, 236],
];

test.each(Object.keys(CASES))('%s: validate admits it', (name) => {
  const r = xyPlot.validate(CASES[name]);
  expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
});

test.each(Object.keys(CASES))('%s: renders at all three boards', (name) => {
  mkdirSync(outDir, { recursive: true });
  for (const [suffix, w, h] of BOARDS) {
    const tree = renderWidgetTreeAt(xyPlot, CASES[name], {}, w, h);
    expect(tree).not.toBeNull();
    writeFileSync(resolve(outDir, `xy_plot@3.${name}${suffix}.json`), JSON.stringify(tree, null, 1));
  }
});

/*
 * NOT PROMOTED, and why. Each names the element v3 cannot express, not a
 * general impression -- the refusals are as measured as the promotions.
 *
 *   6  Domain and Range of Real Functions   y = x/(1+x^2). `reciprocal` is
 *                                           a/x + c; no combination of the
 *                                           five kinds is this rational.
 *   7  Average and Instantaneous Quantities the figure contrasts a SECANT
 *                                           chord with a tangent. v3 draws the
 *                                           tangent; the secant is the other
 *                                           half of the teaching point.
 *   8  Graphical Analysis                   a 2x3 panel of x-t and v-t shapes.
 *                                           One payload is one plot.
 *  12  Standard Real Functions and Graphs   six functions in six panels, same.
 *  14  Areas: Greatest Integer / Frac Part  the retrieved chunks are 2-D
 *                                           regions -- |x|+|y|<=a, a wedge
 *                                           inside a circle. There is no
 *                                           integration variable.
 *  15  Potential Energy                     U(x) with a valley AND a hilltop,
 *                                           a horizontal total-E line and two
 *                                           turning points. `potential_energy`
 *                                           is a Lennard-Jones well: one
 *                                           minimum, no hilltop, no E line.
 *                                           The NAME matches and the FIGURE
 *                                           does not.
 *  18  Derivative as Slope of a Tangent     four secants of stated slopes
 *  19  Derivative from First Principles     closing on the tangent. The
 *                                           convergence IS the figure.
 *  20  Increasing and Decreasing Functions  a sign chart is a number line with
 *  21  Wavy Curve Method                    +/- intervals and arrows, not a
 *                                           plot of a function.
 *  23  Graphs of Trigonometric Functions    cos and tan-with-asymptotes. v3 has
 *                                           one `sine` kind. The closest call
 *                                           here: `family` draws Fig 3.9's
 *                                           sin x / 2 sin x on its own, but
 *                                           two of the concept's four figures
 *                                           stay out of reach.
 *  24  Standard Trigonometric Limits        a unit circle with a marked point.
 *  25  Trig Functions: Domain, Range, Signs No curve kind is a circle; the
 *                                           kinds are functions of one
 *                                           variable.
 *  26  Ohm's Law and Resistance             three figures, and Fig 3.4 alone
 *                                           needs two curves on one axes with
 *                                           nothing shaded between them.
 *                                           `area_between` would draw them and
 *                                           report an area the figure is not
 *                                           about.
 */
