#!/usr/bin/env node
/**
 * node scripts/regenerate-golden.mjs
 *
 * Overwrites lib/widgets/projectile-motion/__golden__/45deg-22ms-earth.json
 * with a fresh render.
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

console.log('Regenerating the projectile_motion golden tree...');
console.log('Review the diff before committing — see this script\'s own header.\n');

const result = spawnSync(
  'npx',
  [
    'jest',
    '--config',
    'jest.config.js',
    '--testMatch',
    '**/golden.gen.ts',
  ],
  { cwd: root, stdio: 'inherit', env: { ...process.env, REGENERATE_GOLDEN: '1' } }
);
process.exit(result.status ?? 1);
