/**
 * Rewrites the four `../__golden__/v1-*.json` trees from a fresh render.
 *
 *     npm run regenerate-golden
 *
 * That script's glob is `**\/golden.gen.ts` and its env is REGENERATE_GOLDEN=1,
 * so this file is picked up by it alongside projectile_motion's — the script's
 * log line names only that widget and now understates what it does. Nothing in
 * `npm test` runs this: Jest's default testMatch is `**\/__tests__\/**` plus
 * `*.test.*`, and `__generate__/` is neither, which is the same reason
 * ./corner-sweep.gen.ts lives here rather than beside the tests.
 *
 * WHY THIS EXISTS AT ALL. The four goldens were written by hand from a v1
 * render and had no regenerator, so the only way to move them was to paste in
 * new bytes — which is exactly the situation where a golden gets accepted
 * blind. They now move by running this and reading `git diff`.
 *
 * REGENERATE DELIBERATELY, AND ONLY FOR A REASON YOU CAN NAME. These bytes are
 * the whole of the v1 compatibility claim (see ../__golden__/golden.test.tsx):
 * a golden that updates itself is a test that cannot fail. The two legitimate
 * reasons so far:
 *
 *   1. a react-native-svg / Reanimated bump that legitimately moves the tree;
 *   2. a defect fix that changes what v1 SHOULD have drawn — which is what
 *      moved `v1-like_charges.json` on 2026-09-06, and only that one file:
 *      its readout went from `lines 10`, printed beside twenty drawn curves,
 *      to `lines 20`. `like_charges` is the only configuration with two
 *      seeding sources, so it is the only tree that could move; that the other
 *      three came back byte-identical is itself part of the review.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { fieldLines } from '..';
import type { FieldLinesParams } from '../physics';
import { renderWidgetTree } from '../../__tests__/test-utils';

/** The RAW v1 payload shape — no `surface_scale`, no `enclosed`, no `caption`
 *  — exactly as ../__golden__/golden.test.tsx feeds it back in. */
const V1_BASE = { charge_uc: 10, show_arrows: true, annotate: null };
const CONFIGURATIONS = ['point', 'dipole', 'like_charges', 'parallel_plates'] as const;

test('regenerate the four field_lines v1 golden trees', () => {
  if (process.env.REGENERATE_GOLDEN !== '1') {
    throw new Error(
      'Run this via `npm run regenerate-golden`, not directly — see this file\'s header.'
    );
  }
  const dir = resolve(__dirname, '../__golden__');
  mkdirSync(dir, { recursive: true });

  for (const configuration of CONFIGURATIONS) {
    const raw = { ...V1_BASE, configuration };
    const result = fieldLines.validate(raw);
    if (!result.ok) throw new Error(`v1 payload rejected: ${result.errors.join(', ')}`);
    const params = (result as { ok: true; params: FieldLinesParams }).params;
    const tree = renderWidgetTree(fieldLines, params);
    if (tree === null) throw new Error(`${configuration} rendered null`);
    // Indent 1 and a trailing newline, matching the bytes
    // already checked in, so a regeneration diff shows only what MOVED.
    writeFileSync(
      resolve(dir, `v1-${configuration}.json`),
      JSON.stringify(tree, null, 1) + '\n'
    );
  }
});
