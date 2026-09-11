/**
 * free_body_forces@1 — validate refusals, derive reference values, and corner
 * trees written for scripts/verify-render.mjs.
 *
 * Two jobs kept apart (the render-v2 pattern): trees are WRITTEN for the gate,
 * never re-asserted here — a widget grading its own legibility is a checker it
 * wrote itself. What IS asserted here is the part the gate cannot see: that
 * the numbers derive() reports are the numbers the construction draws.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { freeBodyForces } from '..';
import { derive, layoutHeadToTail, minSeparationDeg, type FreeBodyParams } from '../physics';
import { renderWidgetTreeAt, TEST_THEME } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');

const BOARDS = [
  { name: '', width: 900, height: 430 },
  { name: '.real-small', width: 495, height: 270 },
  { name: '.spec-small', width: 343, height: 236 },
] as const;

function params(over: Partial<FreeBodyParams> & { forces?: FreeBodyParams['forces'] }): FreeBodyParams {
  const r = freeBodyForces.validate({ ...freeBodyForces.defaults, ...over });
  if (!r.ok) throw new Error(`fixture rejected by validate(): ${r.errors.join(', ')}`);
  return r.params;
}

/* --------------------------------------------------------------- validate */

describe('validate refuses, with readable reasons', () => {
  const v = freeBodyForces.validate;

  test('never throws, on anything', () => {
    for (const raw of [null, 7, 'x', [], {}, { forces: 'no' }]) {
      expect(() => v(raw)).not.toThrow();
    }
  });

  test('too few, too many forces', () => {
    expect(v({ forces: [{ label: 'mg', angle_deg: 270, magnitude_rel: 1 }] }).ok).toBe(false);
    const six = Array.from({ length: 6 }, (_x, i) => ({
      label: `F${i}`, angle_deg: i * 60, magnitude_rel: 1,
    }));
    expect(v({ forces: six }).ok).toBe(false);
  });

  test('labels: empty, oversized', () => {
    expect(v({ forces: [
      { label: '', angle_deg: 270, magnitude_rel: 1 },
      { label: 'N', angle_deg: 90, magnitude_rel: 1 },
    ] }).ok).toBe(false);
    expect(v({ forces: [
      { label: 'F_buoyant!', angle_deg: 270, magnitude_rel: 1 },
      { label: 'N', angle_deg: 90, magnitude_rel: 1 },
    ] }).ok).toBe(false);
  });

  test('NaN and Infinity are named, not rendered', () => {
    const r = v({ forces: [
      { label: 'mg', angle_deg: NaN, magnitude_rel: 1 },
      { label: 'N', angle_deg: 90, magnitude_rel: Infinity },
    ] });
    expect(r.ok).toBe(false);
  });

  test('the separation floor: 15° apart is refused and says why', () => {
    const r = v({ forces: [
      { label: 'A', angle_deg: 0, magnitude_rel: 1 },
      { label: 'B', angle_deg: 15, magnitude_rel: 1 },
    ] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/labels collide at 343x236/);
  });

  test('head_to_tail refuses a context — no body, no floor', () => {
    expect(v({ mode: 'head_to_tail', context: 'floor' }).ok).toBe(false);
  });

  test('components need an axis to resolve onto', () => {
    expect(v({ components_of: 0, context: 'none' }).ok).toBe(false);
  });

  test('a force on its own resolution axis has no drawable components', () => {
    const r = v({
      context: 'string', components_of: 0,
      forces: [
        { label: 'T', angle_deg: 90, magnitude_rel: 1 },   // along the string
        { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/within 8°/);
  });

  test('magnitude floor is a clamp, and the reason is the gate', () => {
    const r = v({ forces: [
      { label: 'mg', angle_deg: 270, magnitude_rel: 0.05 },
      { label: 'N', angle_deg: 90, magnitude_rel: 1 },
    ] });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.params.forces[0].magnitude_rel).toBe(0.35);
  });
});

/* ----------------------------------------------------------------- derive */

describe('derive: reference values, independent routes', () => {
  test('3-4-5: forces 3/5 @ 0° and 4/5 @ 90° give net 1 at 53.13°', () => {
    // Scaled into the legal 0.35..1 band; the ratios are what is being tested.
    const d = derive(params({ forces: [
      { label: 'A', angle_deg: 0, magnitude_rel: 0.6 },
      { label: 'B', angle_deg: 90, magnitude_rel: 0.8 },
    ] }));
    expect(d.net_rel).toBeCloseTo(1.0, 10);
    expect(Math.atan2(d.net_fy_rel, d.net_fx_rel) * (180 / Math.PI)).toBeCloseTo(53.130102, 4);
  });

  test("Lami's closing triangle: three equal forces 120° apart net to zero", () => {
    const d = derive(params({ forces: [
      { label: 'A', angle_deg: 0, magnitude_rel: 1 },
      { label: 'B', angle_deg: 120, magnitude_rel: 1 },
      { label: 'C', angle_deg: 240, magnitude_rel: 1 },
    ] }));
    expect(d.net_rel).toBeCloseTo(0, 12);
  });

  test('ch13 pendulum resolution: mg at 30° off the axis splits cos/sin', () => {
    // The INDEPENDENT route: not re-running derive's own sums, but checking
    // the drawn head-to-tail construction against the closed form. mg down,
    // T at 60° from +x (a 30° pendulum swing): the closure the polygon draws
    // must equal law-of-cosines |mg + T|.
    const p = params({ mode: 'head_to_tail', context: 'none', forces: [
      { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
      { label: 'T', angle_deg: 60, magnitude_rel: 0.866 },
    ] });
    const d = derive(p);
    const expected = Math.sqrt(1 + 0.866 ** 2 - 2 * 1 * 0.866 * Math.cos((30 * Math.PI) / 180));
    expect(d.net_rel).toBeCloseTo(expected, 6);

    // …and the picture agrees: the drawn closure segment's length over the
    // drawn first-arrow's length reproduces the same ratio. Geometry checked
    // against algebra, not algebra against itself.
    const { arrows, closure } = layoutHeadToTail(p, 900, 430);
    expect(closure).not.toBeNull();
    const a0 = Math.hypot(arrows[0].x2 - arrows[0].x1, arrows[0].y2 - arrows[0].y1);
    const c = Math.hypot(closure!.x2 - closure!.x1, closure!.y2 - closure!.y1);
    expect(c / a0).toBeCloseTo(expected / 1, 6);
  });

  test('a balanced chain draws NO closure segment', () => {
    const p = params({ mode: 'head_to_tail', context: 'none', forces: [
      { label: 'A', angle_deg: 0, magnitude_rel: 1 },
      { label: 'B', angle_deg: 120, magnitude_rel: 1 },
      { label: 'C', angle_deg: 240, magnitude_rel: 1 },
    ] });
    expect(layoutHeadToTail(p, 900, 430).closure).toBeNull();
  });

  test('derived self-consistency: keys match computeDerived exactly', () => {
    expect(Object.keys(freeBodyForces.computeDerived(freeBodyForces.defaults)).sort())
      .toEqual([...freeBodyForces.derived].sort());
  });

  test('minSeparationDeg wraps: 350° and 10° are 20° apart, not 340', () => {
    expect(minSeparationDeg([
      { label: 'A', angle_deg: 350, magnitude_rel: 1 },
      { label: 'B', angle_deg: 10, magnitude_rel: 1 },
    ])).toBe(20);
  });
});

/* --------------------------------------------- trees for the render gate */

/**
 * CORNERS, not endpoints. The cases that need two things extreme at once:
 * five forces at exactly the separation floor, the smallest body, the
 * longest labels, on the smallest board — plus each mode/context.
 */
const CORNERS: { name: string; p: FreeBodyParams }[] = [
  { name: 'defaults', p: params({}) },
  {
    name: 'five-forces-min-sep-particle',
    p: params({
      body: 'particle', context: 'none',
      forces: [
        { label: 'F_appl', angle_deg: 0, magnitude_rel: 1 },
        { label: 'F_B', angle_deg: 72, magnitude_rel: 0.8 },
        { label: 'mg', angle_deg: 144, magnitude_rel: 0.35 },
        { label: 'N', angle_deg: 216, magnitude_rel: 0.6 },
        { label: 'f_k', angle_deg: 288, magnitude_rel: 0.45 },
      ],
    }),
  },
  {
    name: 'terminal-velocity-sphere',
    p: params({
      body: 'sphere', context: 'none',
      forces: [
        { label: 'W', angle_deg: 270, magnitude_rel: 1 },
        { label: 'F_B', angle_deg: 90, magnitude_rel: 0.4 },
        { label: 'F_v', angle_deg: 114, magnitude_rel: 0.6 },
      ],
      caption: 'At terminal velocity: W = F_B + F_v',
    }),
  },
  {
    name: 'incline-components',
    p: params({
      context: 'incline', incline_angle_deg: 30, components_of: 0,
      forces: [
        { label: 'mg', angle_deg: 270, magnitude_rel: 1 },
        { label: 'N', angle_deg: 120, magnitude_rel: 0.87 },
        { label: 'f', angle_deg: 30, magnitude_rel: 0.5 },
      ],
    }),
  },
  {
    name: 'pendulum-string-components',
    p: params({
      body: 'sphere', context: 'string', components_of: 0,
      forces: [
        { label: 'mg', angle_deg: 250, magnitude_rel: 1 },
        { label: 'T', angle_deg: 90, magnitude_rel: 0.94 },
      ],
    }),
  },
  {
    name: 'head-to-tail-unbalanced',
    p: params({
      mode: 'head_to_tail', context: 'none',
      forces: [
        { label: 'A', angle_deg: 0, magnitude_rel: 0.6 },
        { label: 'B', angle_deg: 90, magnitude_rel: 0.8 },
      ],
    }),
  },
  {
    name: 'head-to-tail-closed',
    p: params({
      mode: 'head_to_tail', context: 'none',
      forces: [
        { label: 'P', angle_deg: 0, magnitude_rel: 1 },
        { label: 'Q', angle_deg: 120, magnitude_rel: 1 },
        { label: 'R', angle_deg: 240, magnitude_rel: 1 },
      ],
    }),
  },
];

describe('corner trees pass scripts/verify-render.mjs at every board', () => {
  mkdirSync(outDir, { recursive: true });
  const gate = resolve(__dirname, '../../../../scripts/verify-render.mjs');

  for (const { name, p } of CORNERS) {
    for (const b of BOARDS) {
      test(`${name} @ ${b.width}x${b.height}`, () => {
        const tree = renderWidgetTreeAt(freeBodyForces, p, {}, b.width, b.height);
        const file = resolve(outDir, `free_body_forces@1.${name}${b.name}.json`);
        writeFileSync(file, JSON.stringify(tree));
        // The REAL gate, not a re-implementation of its assertions. execFileSync
        // throws on exit 1, which is the failure this test reports.
        execFileSync('node', [gate, file, '--w', String(b.width), '--h', String(b.height)], {
          stdio: 'pipe',
        });
      });
    }
  }
});
