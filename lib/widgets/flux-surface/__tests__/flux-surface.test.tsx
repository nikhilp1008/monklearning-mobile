/**
 * `flux_surface@1`, N3 / gap G8.
 *
 * The cube results are checked by a route INDEPENDENT of the formula that
 * produces them: the six faces are summed and compared against Gauss's law
 * applied to the enclosed charge. `q/6ε₀ × 6 === q/ε₀` would be an identity;
 * asserting that the FACE LIST — which encodes which faces are zero and which
 * are not — adds up to the enclosed charge is not, because a wrong split of
 * the vertex case fails it while the arithmetic stays perfect.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

import { faceFluxes, fluxSurface, validate } from '../index';
import {
  cubeFlux, EPSILON_0, faceFlux, flatFlux, projectedArea,
} from '../physics';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const ROOT = resolve(__dirname, '../../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'g8-'));
const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

describe('Φ = E A cos θ, against the reference rows', () => {
  test.each([
    [0, 1000], [60, 500], [90, 0], [180, -1000],
  ])('θ=%p° gives Φ=%p', (theta, want) => {
    expect(flatFlux(2000, 0.5, theta)).toBeCloseTo(want, 9);
  });

  test('θ=90° is exactly zero, not merely small', () => {
    // The lesson of the figure: the field skims the surface and nothing
    // crosses it. cos(π/2) is 6.1e-17 in floating point, so this asserts the
    // PRODUCT rounds to zero at the precision a board prints, not that the
    // cosine is literally 0.
    expect(Math.abs(flatFlux(2000, 0.5, 90))).toBeLessThan(1e-12);
  });

  test('the projected area is what varies, and it vanishes at 90°', () => {
    expect(projectedArea(0.5, 0)).toBeCloseTo(0.5, 12);
    expect(projectedArea(0.5, 60)).toBeCloseTo(0.25, 12);
    expect(Math.abs(projectedArea(0.5, 90))).toBeLessThan(1e-16);
  });
});

describe('the cube, checked against Gauss rather than against itself', () => {
  const q = 8.854187817e-6;

  test('centre: the six faces sum to the enclosed charge over ε₀', () => {
    const faces = faceFluxes(q, 'centre');
    expect(faces).toHaveLength(6);
    expect(faces.reduce((a, b) => a + b, 0)).toBeCloseTo(q / EPSILON_0, 4);
    expect(cubeFlux(q, 'centre')).toBeCloseTo(1.0e6, 0);
    expect(faceFlux(q, 'centre', false)).toBeCloseTo(1.0e6 / 6, 0);
  });

  test('vertex: three faces are EXACTLY zero and three carry it all', () => {
    // This is the half that is usually got wrong. A wrong split — six equal
    // faces of q/48ε₀, say — still sums correctly, so the sum alone cannot
    // catch it. Both facts are asserted: which faces are zero, and the total.
    const faces = faceFluxes(q, 'vertex');
    expect(faces.filter((f) => f === 0)).toHaveLength(3);
    expect(faces.filter((f) => f !== 0)).toHaveLength(3);
    expect(faces.reduce((a, b) => a + b, 0)).toBeCloseTo(q / (8 * EPSILON_0), 4);
    expect(faceFlux(q, 'vertex', true)).toBe(0);
    expect(faceFlux(q, 'vertex', false)).toBeCloseTo(q / (24 * EPSILON_0), 4);
  });

  test('a vertex cube gets an EIGHTH of what a centred one does', () => {
    expect(cubeFlux(q, 'vertex') * 8).toBeCloseTo(cubeFlux(q, 'centre'), 4);
  });

  test('a negative charge gives negative flux, in and out', () => {
    expect(cubeFlux(-q, 'centre')).toBeLessThan(0);
    expect(faceFlux(-q, 'centre', false)).toBeLessThan(0);
  });
});

describe('refusals', () => {
  const patch = { view: 'patch', e_field: 2000, area: 0.5, theta_deg: 60,
                  charge_c: 1e-6, position: 'centre', caption: 'x' };

  test.each(['flux', 'phi', 'flux_value', 'face_flux'])(
    '%p cannot be authored', (k) => {
      const r = validate({ ...patch, [k]: 500 });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.errors.join(' ')).toMatch(/is not a parameter/);
    });

  test('theta beyond 180, with the reason it is a sign error', () => {
    const r = validate({ ...patch, theta_deg: 270 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/OUTWARD NORMAL/);
  });

  test('a zero or negative area, and a zero field', () => {
    expect(validate({ ...patch, area: 0 }).ok).toBe(false);
    expect(validate({ ...patch, area: -1 }).ok).toBe(false);
    expect(validate({ ...patch, e_field: 0 }).ok).toBe(false);
  });

  test('a zero charge on the cube view', () => {
    // Zero charge is zero flux everywhere: a cube with nothing in it is a
    // picture of a cube, not a picture of Gauss's law.
    expect(validate({ ...patch, view: 'cube', charge_c: 0 }).ok).toBe(false);
  });

  test('a bad view or position', () => {
    expect(validate({ ...patch, view: 'sphere' }).ok).toBe(false);
    expect(validate({ ...patch, view: 'cube', position: 'edge' }).ok).toBe(false);
  });

  test('NaN, Infinity, empty and non-objects, without throwing', () => {
    expect(validate({ ...patch, e_field: NaN }).ok).toBe(false);
    expect(validate({ ...patch, area: Infinity }).ok).toBe(false);
    expect(validate({}).ok).toBe(false);
    expect(validate(7).ok).toBe(false);
    expect(validate(null).ok).toBe(false);
  });

  test('the defaults validate, and computeDerived matches `derived`', () => {
    expect(validate(fluxSurface.defaults).ok).toBe(true);
    const d = fluxSurface.computeDerived!(fluxSurface.defaults);
    expect(Object.keys(d).sort()).toEqual([...fluxSurface.derived!].sort());
  });
});

describe('every view and corner, through the REAL gate at five frames', () => {
  const CASES: { n: string; p: Record<string, unknown> }[] = [
    { n: 'patch-default', p: fluxSurface.defaults as never },
    { n: 'patch-face-on', p: { ...fluxSurface.defaults, theta_deg: 0 } },
    { n: 'patch-edge-on', p: { ...fluxSurface.defaults, theta_deg: 90 } },
    { n: 'patch-reversed', p: { ...fluxSurface.defaults, theta_deg: 180 } },
    { n: 'cube-centre', p: { ...fluxSurface.defaults, view: 'cube' } },
    { n: 'cube-vertex', p: { ...fluxSurface.defaults, view: 'cube',
                             position: 'vertex' } },
  ];

  for (const c of CASES) {
    for (const [w, h] of GATE_FRAMES) {
      test(`${c.n} at ${w}x${h}`, () => {
        const v = validate(c.p);
        expect(v.ok).toBe(true);
        if (!v.ok) return;
        const tree = renderWidgetTreeAt(fluxSurface, v.params, {}, w, h);
        const json = JSON.stringify(tree);
        expect(json).not.toContain('NaN');
        const f = join(dir, `${c.n}-${w}x${h}.json`);
        writeFileSync(f, json);
        const r = spawnSync('node', [GATE, f, '--w', String(w), '--h', String(h)],
                            { cwd: ROOT, encoding: 'utf8' });
        if (r.status !== 0) throw new Error(`${c.n} ${w}x${h}:\n${r.stdout}${r.stderr}`);
      }, 20_000);
    }
  }

  test('a Hinglish caption at 343x236 changes nothing but the caption', () => {
    const en = validate({ ...fluxSurface.defaults, caption: 'Flux through a patch' });
    const hi = validate({ ...fluxSurface.defaults,
      caption: 'Patch se guzarne wala flux nikalte hain' });
    if (!en.ok || !hi.ok) throw new Error('fixture invalid');
    const strip = (t: unknown) =>
      JSON.stringify(t).replace(/"content":"[^"]*"/g, '"content":"X"');
    expect(strip(renderWidgetTreeAt(fluxSurface, hi.params, {}, 343, 236)))
      .toBe(strip(renderWidgetTreeAt(fluxSurface, en.params, {}, 343, 236)));
  });
});
