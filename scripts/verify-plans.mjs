#!/usr/bin/env node
/**
 * node scripts/verify-plans.mjs
 *
 * Runs the two example lesson plans against validate-lesson-plan.mjs and
 * asserts each lands where docs/example-requests.md and IMPLEMENTATION.md say
 * it should — a small fixed regression test for the validator itself, since
 * neither example plan changes.
 *
 *   projectile-motion.plan.json           --registry ...  -> exit 1 (2 errors)
 *   projectile-motion.plan.resolved.json  --registry ...  -> exit 0
 *
 * Requires build/registry-manifest.json — run `npm run export-registry` first
 * (or `npm run verify`, which sequences everything).
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function run(plan, manifest) {
  return spawnSync(
    'node',
    [resolve(root, 'scripts/validate-lesson-plan.mjs'), resolve(root, plan), '--registry', resolve(root, manifest)],
    { cwd: root, stdio: 'inherit' }
  ).status;
}

/**
 * Each example plan is checked against the manifest it was actually written
 * for — these are NOT the same manifest, and using the wrong one for either
 * gives a false result:
 *
 * - projectile-motion.plan.json is exercised against TODAY's real, exported
 *   registry (build/registry-manifest.json) — it is the "here is what a plan
 *   with a real registry gap looks like" case, and today's registry (v1 of
 *   two widgets) is exactly what produces its 3 documented errors.
 * - projectile-motion.plan.resolved.json is exercised against
 *   content/examples/registry-after-build.json, an ALIASED, aspirational
 *   manifest the bundle ships specifically for this fixture — it names
 *   projectile_motion@2 and kinematics_graphs@1, neither of which exists in
 *   this repo's registry yet (both are M3 work). Checking it against
 *   TODAY's real manifest instead would report 3 registry-gap errors that
 *   have nothing to do with the validator and everything to do with M3 not
 *   having happened — a false failure, not a real one.
 */
const cases = [
  {
    plan: 'content/examples/projectile-motion.plan.json',
    manifest: 'build/registry-manifest.json',
    expect: 1,
  },
  {
    plan: 'content/examples/projectile-motion.plan.resolved.json',
    manifest: 'content/examples/registry-after-build.json',
    expect: 0,
  },
];

let failed = 0;
for (const { plan, manifest, expect } of cases) {
  console.log(`\n--- ${plan} --registry ${manifest} (expect exit ${expect}) ---`);
  const status = run(plan, manifest);
  if (status !== expect) {
    console.error(`FAIL: ${plan} exited ${status}, expected ${expect}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nverify:plans — ${failed} case(s) did not match the documented behaviour.`);
  process.exit(1);
}
console.log('\nverify:plans — both example plans behave as documented.');
