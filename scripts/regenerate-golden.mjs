#!/usr/bin/env node
/**
 * node scripts/regenerate-golden.mjs
 *
 * Overwrites every checked-in golden tree with a fresh render:
 *
 *   projectile-motion/__golden__/45deg-22ms-earth.json     via golden.gen.ts
 *   xy-plot/__golden__/*.json               (9)  via test-utils' assertGolden
 *   field-lines/__golden__/*.json           (4)  via test-utils' assertGolden
 *
 * Only the first of those had a regeneration path before. The other thirteen
 * were frozen bytes with no way to refresh them but a text editor, which is
 * how a golden stops being regenerated and starts being deleted. They are now
 * written by the same REGENERATE_GOLDEN guard, from the same payloads their
 * own tests assert against, so there is still exactly one definition of each
 * case.
 *
 * Run this DELIBERATELY, never automatically — docs/render-verification.md:
 * "A golden file that updates itself is a test that cannot fail." A
 * react-native-svg or Reanimated version bump can legitimately change the
 * tree; when that happens, run this, then REVIEW THE DIFF before committing
 * it. A golden accepted blind is worse than no golden — it stops proving
 * anything the moment nobody looks at what changed.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

console.log('Regenerating every golden tree...');
console.log('Review the diff before committing — see this script\'s own header.\n');

const result = spawnSync(
  'npx',
  [
    'jest',
    '--config',
    'jest.config.js',
    '--testMatch',
    '**/golden.gen.ts',
    '--testMatch',
    '**/__golden__/golden.test.tsx',
  ],
  { cwd: root, stdio: 'inherit', env: { ...process.env, REGENERATE_GOLDEN: '1' } }
);
process.exit(result.status ?? 1);
