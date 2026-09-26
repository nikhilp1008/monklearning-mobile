/**
 * The payload CLI's widget map must list every registry entry.
 *
 * `scripts/validate-payload.mjs` carries its OWN map of widget id → directory,
 * because it loads each module by path through a TypeScript build step rather
 * than importing `registry.ts` (which drags molecule-3d's `require()` of an
 * HTML asset into the graph). That is a good reason for the map to exist and
 * no reason at all for it to drift.
 *
 * It drifted on 2026-09-22. Three widgets were added to `registry.ts`, wired,
 * tested at five frames, and registered server-side — and every payload for
 * them was refused by the server's gate, because this map had not grown. The
 * failure surfaced as "19 refused, 5 declined, 0 authored" on a re-authoring
 * run, which reads exactly like a bad batch of boards.
 *
 * `render-trees.test.tsx` has a coverage guard of the same shape, and it
 * caught the same three additions the same day. This is that guard for the
 * OTHER list.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { REGISTRY } from '../registry';

const CLI = resolve(__dirname, '../../../scripts/validate-payload.mjs');

/** The ids in the CLI's `WIDGETS` object, read from the source. */
function cliWidgetIds(): string[] {
  const src = readFileSync(CLI, 'utf8');
  const block = src.slice(src.indexOf('const WIDGETS = {'));
  const body = block.slice(0, block.indexOf('\n};'));
  return [...body.matchAll(/^\s{2}([a-z0-9_]+):\s*\[/gm)].map((m) => m[1]);
}

/** Ids the CLI lists as unjudgeable rather than loadable. */
function cliUnjudgeableIds(): string[] {
  const src = readFileSync(CLI, 'utf8');
  const line = src.slice(src.indexOf('const UNJUDGEABLE = {'));
  const body = line.slice(0, line.indexOf('};'));
  return [...body.matchAll(/([a-z0-9_]+):\s*'/g)].map((m) => m[1]);
}

test('every registry widget is loadable or explicitly unjudgeable by the CLI', () => {
  const known = new Set([...cliWidgetIds(), ...cliUnjudgeableIds()]);
  const missing = Object.keys(REGISTRY).filter((id) => !known.has(id));
  expect(missing).toEqual([]);
});

test('the CLI lists nothing that is not in the registry', () => {
  // The other direction: a widget removed from the registry but left here
  // would have the CLI try to compile a directory that no longer exists, and
  // the failure would be a build error at gate time on a production turn.
  const ids = Object.keys(REGISTRY);
  const stale = cliWidgetIds().filter((id) => !ids.includes(id));
  expect(stale).toEqual([]);
});

test('the parser actually found the map, and is not asserting over nothing', () => {
  // The vacuity guard. Both tests above pass trivially if the regex stops
  // matching — which it would the day the object is reformatted — and a
  // guard that silently measures an empty list is the shape this project
  // keeps finding.
  expect(cliWidgetIds().length).toBeGreaterThan(12);
  expect(cliWidgetIds()).toContain('projectile_motion');
  expect(cliUnjudgeableIds()).toContain('molecule_3d');
});
