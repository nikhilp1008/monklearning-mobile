/**
 * Writes/refreshes the projectile_motion golden tree. Never runs as part of
 * `npm test` (see ../projectile-motion/__golden__/golden.test.tsx for the
 * check that actually gates CI) — invoked only by
 * `npm run regenerate-golden`, deliberately, per
 * docs/render-verification.md: "Regenerate deliberately, never automatically.
 * A golden file that updates itself is a test that cannot fail."
 *
 * Guarded on REGENERATE_GOLDEN so an accidental
 * `jest --testMatch '**\/golden.gen.ts'` without going through the npm script
 * still requires deliberate intent, not just the right glob.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { REGISTRY } from '../registry';
import { renderWidgetTree } from '../__tests__/test-utils';

test('regenerate the projectile_motion golden tree', () => {
  if (process.env.REGENERATE_GOLDEN !== '1') {
    throw new Error(
      'Run this via `npm run regenerate-golden`, not directly — see this file\'s header.'
    );
  }
  const mod = REGISTRY.projectile_motion!;
  const tree = renderWidgetTree(mod, mod.defaults, {
    launch_angle_deg: mod.defaults.launch_angle_deg,
  });
  const dir = resolve(__dirname, '../projectile-motion/__golden__');
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, '45deg-22ms-earth.json'), JSON.stringify(tree, null, 1) + '\n');
});
