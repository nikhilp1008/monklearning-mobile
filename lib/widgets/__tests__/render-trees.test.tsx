/**
 * Renders every SVG-producing registry entry and:
 *
 * 1. writes its default-params tree to build/trees/<id>@<version>.json for
 *    scripts/verify-render.mjs to assert over (legibility, bounds, NaN —
 *    see docs/render-verification.md);
 * 2. proves CLAUDE.md §3's params/motion invariant — render at IDENTICAL
 *    params and two different `motion` values, assert no scaffolding element
 *    (axis line, tick, label) moved. Rendering once at `mod.defaults` is
 *    exactly the moment params and motion agree, so that alone could never
 *    catch scaffolding computed from an animated value — the bug the split
 *    exists to prevent. Verified before writing this: `metresToPx` takes
 *    speed and gravity only, never angle, so projectile_motion should pass;
 *    a failure here is a real regression, not day-one noise;
 * 3. enforces that every REGISTRY key is either covered here or in SKIP with
 *    a stated reason — so a ninth widget cannot silently fall out of the
 *    harness the way #7 could without this.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { REGISTRY } from '../registry';
import { renderWidgetTree, renderWidgetTreeAt, scaffoldingDiffs } from './test-utils';

/**
 * Widgets this harness cannot verify, and why. `molecule_3d` renders a
 * WebView (mocked to `null` under Jest — see jest/react-native-webview-mock.js),
 * not SVG, so "renders nothing" is the correct and PERMANENT answer for it —
 * verify-render.mjs has no geometry to assert over. That is not a gap; it is
 * a different verification method (a rendered-tree assertion for SVG makes no
 * sense for a WebView host), tracked so it never looks like an oversight.
 */
const SKIP: Record<string, string> = {
  molecule_3d: 'renders a WebView, not SVG — verify-render.mjs has nothing to assert over',
};

const outDir = resolve(__dirname, '../../../build/trees');

/**
 * TWO small boards, both on record, deliberately — not because either is
 * known-correct:
 *
 *   REAL_SMALL   495x270  derived from THIS app's actual live-classroom
 *                         layout code (BOARD_LEFT=56, BOARD_RIGHT_GUTTER=116,
 *                         boardHeight*0.72) against a real iPhone SE landscape
 *                         window (667x375pt). This is what the shipped
 *                         classroom will actually hand a widget today.
 *   SPEC_SMALL   343x236  the number small-screen-rendering-rules.md is
 *                         written against — the classroom is landscape-only,
 *                         so this does not correspond to any portrait slot in
 *                         this app, but it is the doc's own reference number
 *                         and checking it is cheap.
 *
 * If these two disagree about what "the small case" is, that is a real,
 * useful discrepancy to have on record rather than silently picking one.
 */
const REAL_SMALL = { width: 495, height: 270 };
const SPEC_SMALL = { width: 343, height: 236 };

test('every registry entry is either verified below or explicitly skipped', () => {
  const covered = new Set(['projectile_motion', 'field_lines', ...Object.keys(SKIP)]);
  const missing = Object.keys(REGISTRY).filter((id) => !covered.has(id));
  expect(missing).toEqual([]);
});

describe('projectile_motion', () => {
  const mod = REGISTRY.projectile_motion!;
  const params = mod.defaults;

  test('renders at defaults and writes its tree for verify-render.mjs', () => {
    const tree = renderWidgetTree(mod, params, { launch_angle_deg: params.launch_angle_deg });
    expect(tree).not.toBeNull();

    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.json`),
      JSON.stringify(tree, null, 1)
    );

    // The one risk this whole harness exists to catch: under a bare
    // react-test-renderer, useAnimatedProps's result never lands on the
    // element and this string would not appear at all.
    expect(JSON.stringify(tree)).toContain('"d":');
  });

  test.each([
    ['real-small', REAL_SMALL],
    ['spec-small', SPEC_SMALL],
  ])('renders at the %s board box (%o) and writes that tree too', (name, box) => {
    const smallTree = renderWidgetTreeAt(
      mod,
      params,
      { launch_angle_deg: params.launch_angle_deg },
      box.width,
      box.height
    );
    expect(smallTree).not.toBeNull();

    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
      JSON.stringify(smallTree, null, 1)
    );
  });

  test('scaffolding does not move while launch_angle_deg tweens (CLAUDE.md §3)', () => {
    const treeShallow = renderWidgetTree(mod, params, { launch_angle_deg: 30 });
    const treeSteep = renderWidgetTree(mod, params, { launch_angle_deg: 65 });
    expect(scaffoldingDiffs(treeShallow, treeSteep)).toEqual([]);
  });
});

/**
 * `field_lines` has no animatable params (see index.tsx's `animatable: []`),
 * so there is no params/motion invariance to test the way projectile_motion's
 * is tested above — every cue-driven change here snaps and re-renders, so
 * `params` alone determines everything, always. What still needs checking is
 * the thing docs/small-screen-rendering-rules.md's own worked example is
 * about for this exact widget: the seed-ring-collapses-on-a-small-board bug,
 * which is why all four configurations are rendered at both small board
 * sizes, not just the default one.
 */
describe('field_lines', () => {
  const mod = REGISTRY.field_lines!;
  const configurations = ['point', 'dipole', 'like_charges', 'parallel_plates'] as const;

  test.each(configurations)('renders %s at defaults and writes its tree', (configuration) => {
    const params = { ...mod.defaults, configuration };
    const tree = renderWidgetTree(mod, params);
    expect(tree).not.toBeNull();

    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${configuration}.json`),
      JSON.stringify(tree, null, 1)
    );

    expect(JSON.stringify(tree)).toContain('"d":');
  });

  describe.each(configurations)('%s at small board sizes', (configuration) => {
    const params = { ...mod.defaults, configuration };

    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (name, box) => {
      const tree = renderWidgetTreeAt(mod, params, {}, box.width, box.height);
      expect(tree).not.toBeNull();

      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${configuration}.${name}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });
});

for (const [id, reason] of Object.entries(SKIP)) {
  test.skip(`${id}: ${reason}`, () => {});
}
