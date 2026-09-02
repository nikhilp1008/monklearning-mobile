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
import { renderWidgetTree, scaffoldingDiffs } from './test-utils';

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

test('every registry entry is either verified below or explicitly skipped', () => {
  const covered = new Set(['projectile_motion', ...Object.keys(SKIP)]);
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

  test('scaffolding does not move while launch_angle_deg tweens (CLAUDE.md §3)', () => {
    const treeShallow = renderWidgetTree(mod, params, { launch_angle_deg: 30 });
    const treeSteep = renderWidgetTree(mod, params, { launch_angle_deg: 65 });
    expect(scaffoldingDiffs(treeShallow, treeSteep)).toEqual([]);
  });
});

for (const [id, reason] of Object.entries(SKIP)) {
  test.skip(`${id}: ${reason}`, () => {});
}
