/**
 * THE EVIDENCE BEHIND FOUR COLUMN PROMOTIONS.
 *
 * field_lines@2 was built, verified independently and wired — and routed ZERO
 * concepts, because the column names the electrostatics concepts
 * `gap_gaussian_surface`, `gap_equipotential_surfaces` and
 * `gap_dipole_field_geometry`, and nobody renamed them when the widget shipped.
 * A `gap_*` name can never route: the gate requires a registered widget id.
 *
 * Two of those rows say the quiet part outright, and both were written against
 * v1:
 *
 *   Electric Flux  — "Gaussian surfaces are outside field_lines"
 *   Gauss's Law    — "registry excludes Gaussian surfaces"
 *
 * v2 is exactly the version that added `gaussian_sphere`, `gaussian_cylinder`
 * and `gaussian_pillbox`. A stale refusal reads identically to a current one.
 *
 * Each case below is the payload for one promoted concept: admitted by
 * validate(), rendered at 900x430, 495x270 and 343x236, and written into
 * build/trees where scripts/verify-tree-dir.mjs checks it on every run. Delete
 * one and the column asserts something nothing checks.
 *
 * NOT PROMOTED — "Coulomb's Law and Electric Forces". Its figures are Fig 1.1
 * force arrows on two point charges, Fig 1.2 an equilateral-triangle resultant
 * and Fig 1.3 a rod element dF. This widget draws FIELD LINES; no
 * configuration produces a force vector on a charge, and `annotate` offers only
 * `neutral_point` and `termination`. `like_charges` puts two charges on the
 * board and would look close enough to pass a glance, which is exactly why it
 * is refused here in writing: the arrows in that figure are forces, and drawing
 * field lines instead would answer a different question confidently.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { fieldLines } from '..';
import type { FieldLinesParams } from '../physics';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const outDir = resolve(__dirname, '../../../../build/trees');
const D = fieldLines.defaults as FieldLinesParams;
const P = (o: Partial<FieldLinesParams>): FieldLinesParams => ({ ...D, ...o });

const CASES: Record<string, FieldLinesParams> = {
  // Electric Flux — Fig 1.10, the coaxial Gaussian cylinder round a line charge.
  gap_flux_cylinder: P({
    configuration: 'gaussian_cylinder',
    charge_uc: 8, surface_scale: 1.2, enclosed: true,
    caption: 'Flux through a coaxial Gaussian cylinder',
  }),
  // Electric Flux — Fig 1.11, the pillbox across a charged sheet.
  gap_flux_pillbox: P({
    configuration: 'gaussian_pillbox',
    charge_uc: 6, surface_scale: 1, enclosed: true,
    caption: 'Pillbox across a charged sheet',
  }),
  // Gauss's Law — Fig 1.12, the shell with a Gaussian sphere. `enclosed: false`
  // is the OTHER half of the teaching point: move the source outside and the
  // flux goes to zero while the field does not.
  gap_gauss_sphere_enclosing: P({
    configuration: 'gaussian_sphere',
    charge_uc: 12, surface_scale: 1.4, enclosed: true,
    caption: 'Gaussian sphere enclosing the charge',
  }),
  gap_gauss_sphere_outside: P({
    configuration: 'gaussian_sphere',
    charge_uc: 12, surface_scale: 1.4, enclosed: false,
    caption: 'Charge outside the surface: net flux zero',
  }),
  // Electric Dipole and Its Field — Fig 1.4/1.5/1.6.
  gap_dipole_field: P({
    configuration: 'dipole', charge_uc: 10, annotate: 'neutral_point',
    caption: 'Dipole field: axial and equatorial points',
  }),
  // Equipotential Surfaces — Fig 2.1, two closely spaced surfaces with the
  // field perpendicular to them, which is the E = -dV/dr derivation.
  gap_equipotential_uniform: P({
    configuration: 'equipotential_uniform',
    charge_uc: 5, caption: 'Equipotentials perpendicular to a uniform field',
  }),
  gap_equipotential_point: P({
    configuration: 'equipotential_point',
    charge_uc: 9, caption: 'Equipotentials round a point charge',
  }),
};

const BOARDS: [string, number, number][] = [
  ['', 900, 430], ['.real-small', 495, 270], ['.spec-small', 343, 236],
];

test.each(Object.keys(CASES))('%s: validate admits it', (name) => {
  const r = fieldLines.validate(CASES[name]);
  expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
});

test.each(Object.keys(CASES))('%s: renders at all three boards', (name) => {
  mkdirSync(outDir, { recursive: true });
  for (const [suffix, w, h] of BOARDS) {
    const tree = renderWidgetTreeAt(fieldLines, CASES[name], {}, w, h);
    expect(tree).not.toBeNull();
    writeFileSync(
      resolve(outDir, `field_lines@2.${name}${suffix}.json`),
      JSON.stringify(tree, null, 1)
    );
  }
});

test('the two Gauss cases differ, or `enclosed` is decorative', () => {
  // Both promotions lean on `enclosed` carrying the flux argument. If the two
  // trees were identical the widget would be drawing the same picture for
  // "flux = q/e0" and "flux = 0", and the concept would be worse served than
  // by tier 3.
  const a = JSON.stringify(renderWidgetTreeAt(fieldLines, CASES.gap_gauss_sphere_enclosing, {}, 343, 236));
  const b = JSON.stringify(renderWidgetTreeAt(fieldLines, CASES.gap_gauss_sphere_outside, {}, 343, 236));
  expect(a).not.toEqual(b);
});
