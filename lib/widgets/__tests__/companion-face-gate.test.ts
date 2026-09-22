/**
 * Every STORED board that carries a character Onest cannot draw, through the
 * real gate, at all five GATE_FRAMES.
 *
 * The fixture is a snapshot of the corpus taken on 2026-09-22 — 38 of 260
 * boards — exported by the API repo. It is checked in because the point is
 * regression: these are the boards where the companion face is load-bearing,
 * and a change to the run split, the advance tables, or `BoardText` would show
 * up here first.
 *
 * WHY FIVE FRAMES AND NOT ONE. lib/widgets/CLAUDE.md: a device-point bound is
 * binding at 343x236, but a RATIO bound is binding at the WIDEST board. Ink
 * coverage is a ratio, and a payload that covered 5.0% of 900x430 once passed
 * clean at 343x236. Text that changes width changes both, so both ends are
 * checked.
 *
 * It SPAWNS `node scripts/verify-render.mjs`, the same binary CI runs, rather
 * than re-implementing its assertions — the pattern chrome-gate-agreement.ts
 * uses and for the same reason: a re-implementation can agree with itself
 * while disagreeing with the thing that actually gates.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

import BOARDS from './companion-face-boards.json';
import { REGISTRY } from '../registry';
import { renderWidgetTreeAt } from './test-utils';

const ROOT = resolve(__dirname, '../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'companion-gate-'));

const GATE_FRAMES = [
  [340, 340], [343, 236], [495, 270], [702, 289], [900, 430],
] as const;

type Board = {
  id: string; widget: string; params: Record<string, unknown>;
  chapter: string; sub: string;
};
const boards = BOARDS as unknown as Board[];

/** molecule_3d renders a WebView, not SVG; the gate has nothing to read. */
const NOT_SVG = new Set(['molecule_3d']);

describe('the stored boards that need the companion face', () => {
  test('the fixture is not empty, and is not silently all-skipped', () => {
    // A suite that iterates an empty list passes. This is the guard against
    // the fixture going missing or every row landing in NOT_SVG — the
    // check-that-passes-on-absent-information shape this project keeps
    // finding.
    expect(boards.length).toBeGreaterThan(20);
    expect(boards.filter((b) => !NOT_SVG.has(b.widget)).length)
      .toBeGreaterThan(20);
  });

  const drawable = boards.filter((b) => !NOT_SVG.has(b.widget));

  test.each(drawable.map((b) => [b.id, b] as const))(
    '%s draws and clears the gate at all five frames', (_id, board) => {
      // The registry is a heterogeneous map and `renderWidgetTreeAt` wants a
      // single param type; the two cannot be reconciled without naming all
      // fourteen. registry.ts already carries the same `any` for the same
      // reason — see the note there about the heterogeneous module map.
      const mod = REGISTRY[board.widget as keyof typeof REGISTRY] as
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        any;
      expect(mod).toBeDefined();
      const v = mod.validate(board.params);
      // Every one of these is a payload the server already stored and the
      // client gate already accepted, so a refusal here is a real regression,
      // not a bad fixture.
      expect(v.ok).toBe(true);
      if (!v.ok) return;

      for (const [w, h] of GATE_FRAMES) {
        const tree = renderWidgetTreeAt(mod, v.params, {}, w, h);
        expect(tree).not.toBeNull();
        const json = JSON.stringify(tree);
        expect(json).not.toContain('NaN');

        const file = join(dir, `${board.id}-${w}x${h}.json`);
        writeFileSync(file, json);
        const r = spawnSync('node', [GATE, file, '--w', String(w), '--h', String(h)],
                            { cwd: ROOT, encoding: 'utf8' });
        if (r.status !== 0) {
          throw new Error(
            `${board.chapter} / ${board.sub} (${board.widget}) failed the gate `
            + `at ${w}x${h}:\n${r.stdout}${r.stderr}`);
        }
      }
    }, 30_000);
});
