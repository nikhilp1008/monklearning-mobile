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
import {
  MAX_CAPTION_CHARS, MAX_NODES_RING, MIN_NODES,
  maxChainLabelChars, maxRingLabelChars,
} from '../process-flow/flow-math';

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

/*
 * WHY A SECOND FILE, AND WHY GENERATED.
 *
 * process_flow CUTS a node label that exceeds its budget -- `validate()` does
 * `s.slice(0, cap)` with no ellipsis -- and the budget is angular geometry, not
 * a round number: a 5-node ring allows 13 characters while a 6-node ring allows
 * 17, because a 5-ring's mirrored pair sits 1.18*rx apart and a 6-ring's sits
 * 1.73*rx apart.
 *
 * Nothing told the payload generator any of that. Measured on the Ecosystem
 * precompute, 33 of 42 stored payloads lose text and 22 captions are cut, so
 * a board read "Producers (ph" to a student. The prompt now states the budget
 * -- and a budget typed into a prompt is a number that rots, so it is EXPORTED
 * from the widget's own maths here and pinned by a test in the API repo
 * against this file rather than against a comment.
 *
 * Kept out of registry-manifest.json deliberately: that file's shape is a
 * contract (scripts/validate-lesson-plan.mjs, and an exact-content drift test
 * on the server), and widening it to carry one widget's layout detail would
 * make every consumer of the manifest care about process_flow.
 */
test('process_flow label budgets are exported to build/label-budgets.json', () => {
  const ring: Record<string, number> = {};
  for (let n = MIN_NODES - 1; n <= MAX_NODES_RING; n++) ring[String(n)] = maxRingLabelChars(n);

  const budgets = {
    _generated_by: 'lib/widgets/__generate__/registry-manifest.gen.ts',
    _why: 'process_flow slices over-budget labels with no ellipsis; the generator must write within these.',
    process_flow: { ring, chain: maxChainLabelChars(), caption: MAX_CAPTION_CHARS },
  };

  const outDir = resolve(__dirname, '../../../build');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'label-budgets.json'), JSON.stringify(budgets, null, 2) + '\n');
});
