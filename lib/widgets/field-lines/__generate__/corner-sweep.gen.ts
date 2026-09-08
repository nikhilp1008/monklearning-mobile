/**
 * THE CORNERS OF THE LEGAL BOX, THROUGH THE REAL GATE.
 *
 *   CORNER_SWEEP_DIR=/tmp/sweep npx jest --config jest.config.js \
 *     --testMatch '**\/corner-sweep.gen.ts'
 *   node scripts/verify-tree-dir.mjs /tmp/sweep
 *
 * CLAUDE.md: "The extreme legal values are CORNERS, not endpoints. A schema
 * with N numeric params has 2^N corners, and defects hide in the combinations,
 * not on the axes." field_lines@2 has two numeric params (`charge_uc`,
 * `surface_scale`) and three more switches that change WHICH geometry is
 * drawn (`configuration`, `enclosed`, `show_arrows`), so the box is
 * 9 x 2 x 2 x 2 x 2 = 288 payloads, crossed with all three board sizes.
 *
 * It is a generator rather than a test for the same reason `__generate__/
 * golden.gen.ts` is: 864 trees is the right thing to sweep before a change
 * ships and the wrong thing to put in every CI run. The representative subset
 * that stays in CI is written by render-v2.test.tsx. Run this deliberately,
 * whenever the schema's bounds move — and note that the bounds are what it
 * checks, so widening `validate()`'s clamps without re-running it is exactly
 * the "schema admits what the gate rejects" failure CLAUDE.md describes.
 *
 * Guarded on CORNER_SWEEP_DIR so an accidental glob cannot fire it — and it
 * lives in `__generate__/`, not `__tests__/`, because Jest's DEFAULT testMatch
 * is `**\/__tests__\/**\/*.[jt]s?(x)`: any file under a `__tests__` directory
 * runs on a bare `npm test` regardless of its name. Written there first, this
 * generator threw "set CORNER_SWEEP_DIR" inside `npm run verify` and took the
 * whole gate red. `lib/widgets/__generate__/golden.gen.ts` is the same shape
 * for the same reason.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { fieldLines } from '..';
import { SURFACE_SCALE_MAX, SURFACE_SCALE_MIN, type FieldLinesParams } from '../physics';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';

const CONFIGS = [
  'point', 'dipole', 'like_charges', 'parallel_plates',
  'gaussian_sphere', 'gaussian_cylinder', 'gaussian_pillbox',
  'equipotential_point', 'equipotential_uniform',
] as const;

const BOARDS = [
  { name: '', width: 900, height: 430 },
  { name: '.real-small', width: 495, height: 270 },
  { name: '.spec-small', width: 343, height: 236 },
] as const;

/**
 * A realistic Hinglish sentence of realistic length, not a stub — the app's
 * DEFAULT language, and systematically longer than its English equivalent
 * (57 code units against 38). Swept over every configuration because the
 * readout's value half is a different length in each.
 */
const HINGLISH = 'Gaussian surface ke andar ka charge hi flux tay karta hai';
const ENGLISH = 'Only the enclosed charge sets the flux';

test('sweep every corner of the legal box through every board', () => {
  const dir = process.env.CORNER_SWEEP_DIR;
  if (!dir) throw new Error('set CORNER_SWEEP_DIR — see this file\'s header.');
  mkdirSync(dir, { recursive: true });

  let n = 0;
  const emit = (tag: string, raw: Record<string, unknown>, b: (typeof BOARDS)[number]) => {
    const r = fieldLines.validate(raw);
    if (!r.ok) throw new Error(`validate() rejected a corner it must accept: ${r.errors.join(', ')}`);
    const params = r.params as FieldLinesParams;
    const tree = renderWidgetTreeAt(fieldLines, params, {}, b.width, b.height);
    if (tree === null) throw new Error(`${tag} rendered null`);
    writeFileSync(resolve(dir, `${tag}${b.name}.json`), JSON.stringify(tree, null, 1));
    n++;
  };

  for (const configuration of CONFIGS) {
    for (const charge_uc of [4, 20]) {
      for (const surface_scale of [SURFACE_SCALE_MIN, SURFACE_SCALE_MAX]) {
        for (const enclosed of [true, false]) {
          for (const show_arrows of [true, false]) {
            const tag = [
              configuration, `q${charge_uc}`, `s${surface_scale}`,
              enclosed ? 'in' : 'out', show_arrows ? 'arr' : 'noarr',
            ].join('-');
            for (const b of BOARDS) {
              emit(tag, { configuration, charge_uc, surface_scale, enclosed, show_arrows }, b);
            }
          }
        }
      }
    }
  }

  // The caption and annotation axes, at the default numerics — they change
  // TEXT rather than geometry, so they do not need to be crossed with the
  // numeric corners, but they do need every board size and every
  // configuration, because the value half of the readout differs per
  // configuration and that is what the caption's budget is left over from.
  for (const configuration of CONFIGS) {
    for (const [cname, caption] of [['en', ENGLISH], ['hi', HINGLISH]] as const) {
      for (const annotate of [null, 'neutral_point', 'termination'] as const) {
        const tag = `${configuration}-${cname}-${annotate ?? 'noann'}`;
        for (const b of BOARDS) {
          // `charge_uc` has no default in validate() and never had one; it is
          // the one required key besides `configuration`.
          emit(tag, { configuration, charge_uc: 10, caption, annotate }, b);
        }
      }
    }
  }

  console.log(`corner sweep: ${n} trees -> ${dir}`);
  expect(n).toBe(CONFIGS.length * (2 * 2 * 2 * 2 + 2 * 3) * BOARDS.length);
});
