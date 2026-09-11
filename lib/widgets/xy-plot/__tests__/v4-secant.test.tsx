/**
 * xy_plot v4 — the secant chord, built for the motion-graph evidence
 * (physics 11 ch2, Fig 2.1: x-t curve, chord AB "slope = average velocity",
 * tangent at A "slope = instantaneous velocity", Δt and Δx marked).
 *
 * The W1 gap ledger called this a NEW widget on the claim that xy_plot
 * lacked piecewise and slope annotations. v3 had both; what it lacked was
 * exactly one construction — this file is that correction, tested.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { xyPlot } from '..';
import { derive, type XyPlotParams } from '../plot-math';
import { renderWidgetTreeAt, scaffoldingDiffs } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');
const gate = resolve(__dirname, '../../../../scripts/verify-render.mjs');

const BOARDS = [
  { name: '', width: 900, height: 430 },
  { name: '.real-small', width: 495, height: 270 },
  { name: '.spec-small', width: 343, height: 236 },
] as const;

function params(over: Partial<XyPlotParams>): XyPlotParams {
  const r = xyPlot.validate({ ...xyPlot.defaults, ...over });
  if (!r.ok) throw new Error(`fixture rejected by validate(): ${r.errors.join(', ')}`);
  return r.params;
}

/* --------------------------------------------------------------- validate */

describe('validate: the chord is refused where it would lie', () => {
  const v = xyPlot.validate;

  test('a named shape takes no secant — a slope off a qualitative curve is a number with no referent', () => {
    const r = v({ ...xyPlot.defaults, mode: 'named', named_shape: 'heating',
                  secant: 'chord', secant_from: 0, secant_to: 2 });
    expect(r.ok).toBe(false);
  });

  test('data mode takes no secant — the trend line already is one', () => {
    const r = v({ ...xyPlot.defaults, mode: 'data', values: [1, 2, 3],
                  secant: 'chord', secant_from: 0, secant_to: 2 });
    expect(r.ok).toBe(false);
  });

  test('a degenerate chord is refused toward the tangent, by name', () => {
    const r = v({ ...xyPlot.defaults, mode: 'curve',
                  secant: 'chord', secant_from: 1.0, secant_to: 1.05 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/use tangent_kind for that limit/);
  });

  test('endpoints clamp into the domain rather than plotting off it', () => {
    const r = v({ ...xyPlot.defaults, mode: 'curve', x_min: 0, x_max: 3,
                  secant: 'chord', secant_from: -10, secant_to: 99 });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.params.secant_from).toBe(0);
      expect(r.params.secant_to).toBe(3);
    }
  });

  test('every v1..v3 payload still validates with the chord off', () => {
    const r = v(xyPlot.defaults);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.params.secant).toBe('none');
  });
});

/* ------------------------------------------------------------------ maths */

describe('the secant slope by identities that never divide a difference', () => {
  test('on y = x² the chord slope over [a, b] is exactly a + b', () => {
    // (b² − a²)/(b − a) = a + b identically — an algebraic route that does
    // not run the widget's own difference quotient, so agreement means two
    // derivations concur rather than one derivation agreeing with itself.
    const d = derive(params({ mode: 'curve', curve: 'parabola', a: 1, b: 0, c: 0,
                              x_min: 0, x_max: 4, secant: 'chord',
                              secant_from: 1, secant_to: 3 }));
    expect(d.secantSlope).toBeCloseTo(1 + 3, 12);
  });

  test('on a line the chord slope IS the line slope, anywhere', () => {
    const d = derive(params({ mode: 'curve', curve: 'line', a: 2.5, b: 0, c: -1,
                              x_min: 0, x_max: 4, secant: 'chord',
                              secant_from: 0.5, secant_to: 3.5 }));
    expect(d.secantSlope).toBeCloseTo(2.5, 12);
  });

  test('as B → A the chord slope approaches the tangent slope (the figure’s whole point)', () => {
    const at = (to: number) =>
      derive(params({ mode: 'curve', curve: 'sine', a: 1, b: 1, c: 0,
                      x_min: 0, x_max: 6, secant: 'chord',
                      secant_from: 1, secant_to: to })).secantSlope;
    const tangent = Math.cos(1);
    // 5% of the domain is the closest legal approach; convergence is
    // monotone toward cos(1) from there.
    expect(Math.abs(at(1.4) - tangent)).toBeLessThan(Math.abs(at(3) - tangent));
  });

  test('a chord across a piecewise breakpoint is legal and exact', () => {
    // Unlike the tangent, which validate() refuses AT a breakpoint — a chord
    // connects two on-curve points and does not care what happens between.
    const d = derive(params({
      mode: 'curve', x_min: -2, x_max: 2,
      pieces: [
        { from: -2, to: 0, curve: 'line', a: -1, b: 0, c: 0 },   // |x| left
        { from: 0, to: 2, curve: 'line', a: 1, b: 0, c: 0 },     // |x| right
      ],
      secant: 'chord', secant_from: -1, secant_to: 2,
    }));
    // f(-1) = 1, f(2) = 2 → slope (2−1)/(2−(−1)) = 1/3.
    expect(d.secantSlope).toBeCloseTo(1 / 3, 12);
  });
});

/* --------------------------------------------------- scaffolding + gate */

describe('the frame holds still while secant_to slides', () => {
  test('two motion values, zero scaffolding diffs', () => {
    const p = params({ mode: 'curve', curve: 'parabola',
                       x_min: 0, x_max: 4, secant: 'chord',
                       secant_from: 0.5, secant_to: 3.5 });
    const at = (to: number) =>
      renderWidgetTreeAt(xyPlot, p, {
        shade_to: p.shade_to, tangent_at: p.tangent_at, secant_to: to,
      }, 900, 430);
    expect(scaffoldingDiffs(at(1.2), at(3.4))).toEqual([]);
  });
});

const CORNERS: { name: string; p: XyPlotParams }[] = [
  {
    name: 'secant-chord',
    p: params({ mode: 'curve', curve: 'parabola', x_min: 0, x_max: 4,
                secant: 'chord', secant_from: 0.5, secant_to: 3.5 }),
  },
  {
    name: 'secant-deltas-xt',
    // Fig 2.1 itself: x-t axis names, chord with the Δ risers, and the
    // tangent beside it — both constructions on one board, which is the
    // book's own picture and the densest legal payload.
    p: params({ mode: 'curve', curve: 'parabola', a: 0.4, b: 0.3, c: 0.5,
                x_min: 0, x_max: 5, x_label: 't', y_label: 'x',
                secant: 'chord_with_deltas', secant_from: 1, secant_to: 4,
                tangent_kind: 'tangent', tangent_at: 1 }),
  },
  {
    name: 'secant-deltas-negative-slope',
    // The risers flip sides when the chord falls; the label anchors must
    // follow. A falling v-t chord is ch2's deceleration picture.
    p: params({ mode: 'curve', curve: 'line', a: -0.8, b: 0, c: 4,
                x_min: 0, x_max: 4, x_label: 't', y_label: 'v',
                secant: 'chord_with_deltas', secant_from: 0.5, secant_to: 3.5 }),
  },
];

describe('corner trees pass the REAL gate at every board', () => {
  mkdirSync(outDir, { recursive: true });
  for (const { name, p } of CORNERS) {
    for (const b of BOARDS) {
      test(`${name} @ ${b.width}x${b.height}`, () => {
        const tree = renderWidgetTreeAt(
          xyPlot, p,
          { shade_to: p.shade_to, tangent_at: p.tangent_at, secant_to: p.secant_to },
          b.width, b.height
        );
        const file = resolve(outDir, `xy_plot@4.${name}${b.name}.json`);
        writeFileSync(file, JSON.stringify(tree));
        execFileSync('node', [gate, file, '--w', String(b.width), '--h', String(b.height)], {
          stdio: 'pipe',
        });
      });
    }
  }
});
