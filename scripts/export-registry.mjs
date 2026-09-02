#!/usr/bin/env node
/**
 * node scripts/export-registry.mjs
 *
 * Emits build/registry-manifest.json from lib/widgets/registry.ts's
 * REGISTRY_MANIFEST. Referenced by IMPLEMENTATION.md, docs/api-contract.md and
 * registry.ts's own header comment as `npm run export-registry` — no bundle
 * ships the script itself.
 *
 * registry.ts imports molecule-3d, which does a static
 * `require('*.html')` at module scope (Metro-only asset syntax) and is
 * written in TSX with worklet directives — none of which plain Node can load
 * unmodified. Jest already resolves and transforms all of that correctly (see
 * jest.config.js), so this shells out to Jest against ONE generator file
 * rather than re-implementing module resolution here. The generator
 * (lib/widgets/__generate__/registry-manifest.gen.ts) does the actual write;
 * this script is the stable CLI entry point and reports the result.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = resolve(root, 'build/registry-manifest.json');

const result = spawnSync(
  'npx',
  [
    'jest',
    '--config',
    'jest.config.js',
    '--testMatch',
    '**/registry-manifest.gen.ts',
    '--silent',
  ],
  { cwd: root, stdio: 'inherit' }
);

if (result.status !== 0) {
  console.error('\nexport-registry: the generator test failed — see output above.');
  process.exit(result.status ?? 1);
}

if (!existsSync(manifestPath)) {
  console.error(`export-registry: expected ${manifestPath} to exist after a passing run.`);
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
console.log(`\nbuild/registry-manifest.json (${manifest.length} widget${manifest.length === 1 ? '' : 's'}):`);
for (const entry of manifest) {
  console.log(`  ${entry.id}@${entry.version}`);
}
