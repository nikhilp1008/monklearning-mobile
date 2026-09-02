/**
 * Writes build/registry-manifest.json from REGISTRY_MANIFEST.
 *
 * Not a real assertion test — invoked by `npm run export-registry`
 * (scripts/export-registry.mjs), which runs Jest against this one file so the
 * manifest goes through the exact same module resolution and transform every
 * widget test does. That is deliberate: a manifest produced by a different
 * pipeline (e.g. a bare ts-node script) could resolve `registry.ts` slightly
 * differently and drift from what the app and the tests actually see.
 *
 * Named `.gen.ts`, not `.test.ts`, so `npm test`'s default testMatch does not
 * pick it up — generating a build artifact is not a test, and it should not
 * run, or fail the suite, just because someone ran `npm test`.
 *
 * Contract this must satisfy — scripts/validate-lesson-plan.mjs:38-44 (no
 * bundle ships the source of that contract as a script, only as this
 * behaviour): a top-level JSON array whose elements have `id: string` and
 * `version: number`. This emits `animatable` too; validate-lesson-plan.mjs
 * ignores unknown keys, and content/examples/registry-after-build.json is the
 * exact target shape minus that extra field.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { REGISTRY_MANIFEST } from '../registry';

test('registry manifest is exported to build/registry-manifest.json', () => {
  expect(REGISTRY_MANIFEST.length).toBeGreaterThan(0);
  for (const entry of REGISTRY_MANIFEST) {
    expect(typeof entry.id).toBe('string');
    expect(typeof entry.version).toBe('number');
  }

  const outDir = resolve(__dirname, '../../../build');
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, 'registry-manifest.json');
  writeFileSync(outPath, JSON.stringify(REGISTRY_MANIFEST, null, 2) + '\n');
});
