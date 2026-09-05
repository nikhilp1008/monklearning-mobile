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
  const covered = new Set(['projectile_motion', 'field_lines', 'xy_plot', 'data_table_trend', ...Object.keys(SKIP)]);
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

/**
 * xy_plot is a plotting substrate with modes, so "does it render" has to be
 * asked once per mode — `curve`, `area` and `data` build genuinely different
 * trees from the same component. The area mode is also the only one with an
 * animatable param, so it carries the params/motion invariant check.
 */
describe('xy_plot', () => {
  const mod = REGISTRY.xy_plot!;

  const CASES = {
    // Maths 12 Ch8, the chapter this widget unlocks: area under y = x^2.
    area: { ...mod.defaults },
    // Maths 11 Ch13: the standard dataset, mean 5 / median 4.5 / sd 2.
    data: {
      ...mod.defaults,
      mode: 'data' as const,
      values: [2, 4, 4, 4, 5, 5, 7, 9],
      x_label: 'observation',
      y_label: 'value',
    },
    // A plain curve with no shading — y = sin x over a full period.
    curve: {
      ...mod.defaults,
      mode: 'curve' as const,
      curve: 'sine' as const,
      a: 1, b: 1, c: 0,
      x_min: 0, x_max: 6.28,
    },
  };

  test.each(Object.keys(CASES) as (keyof typeof CASES)[])(
    'renders %s at defaults and writes its tree',
    (name) => {
      const params = CASES[name];
      const tree = renderWidgetTree(mod, params, { shade_to: params.shade_to });
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
        JSON.stringify(tree, null, 1)
      );
      const json = JSON.stringify(tree);
      if (name === 'data') {
        // No path in this mode, and that is correct — a dot plot is lines and
        // circles. Assert what it SHOULD draw rather than relaxing the check:
        // one marker per observation, and the mean rule that reads off them.
        expect(json).toContain('RNSVGCircle');
        expect(json).toContain('mean 5');
      } else {
        // The one risk the harness exists to catch: under a bare
        // react-test-renderer the animated `d` never lands on the element.
        expect(json).toContain('"d":');
      }
    }
  );

  describe.each(Object.keys(CASES) as (keyof typeof CASES)[])('%s at small boards', (name) => {
    const params = CASES[name];
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const tree = renderWidgetTreeAt(
        mod, params, { shade_to: params.shade_to }, box.width, box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('axes and ticks do not move while shade_to sweeps (CLAUDE.md §3)', () => {
    // The whole reason the coefficients are not animatable: the y-range is a
    // function of the curve, so only the shaded width may change.
    const narrow = renderWidgetTree(mod, CASES.area, { shade_to: 0.5 });
    const wide = renderWidgetTree(mod, CASES.area, { shade_to: 3 });
    expect(scaffoldingDiffs(narrow, wide)).toEqual([]);
  });
});

/**
 * data_table_trend's risk is not "does it draw" but "do two labels collide" —
 * verify-render treats ANY text overlap as a hard error, and a table is almost
 * entirely text. The worst case is the widest legal payload (8 rows x 4
 * numeric columns) at the smallest board, so that is rendered explicitly
 * rather than only the default.
 */
describe('data_table_trend', () => {
  const mod = REGISTRY.data_table_trend!;

  const CASES = {
    // The default: NCERT period-2 ionisation enthalpy, 8 rows x 1 col.
    numeric: { ...mod.defaults },
    // Widest legal numeric payload — the label-collision worst case.
    widest: {
      ...mod.defaults,
      col_labels: ['IE1', 'IE2', 'r', 'EN'],
      values: [
        520, 7298, 152, 0.98,  899, 1757, 112, 1.57,  801, 2427, 85, 2.04,
        1086, 2353, 77, 2.55,  1402, 2856, 75, 3.04,  1314, 3388, 73, 3.44,
        1681, 3374, 72, 3.98,  2081, 3952, 71, 0,
      ],
      caption: 'Period 2 trends',
    },
    // Categorical: a comparison matrix, no trend, 3 columns.
    categorical: {
      ...mod.defaults,
      cell_kind: 'categorical' as const,
      row_labels: ['A', 'B', 'AB', 'O'],
      col_labels: ['Ag', 'Ab', 'Give'],
      values: [],
      text_values: [
        'A', 'anti-B', 'A,AB',  'B', 'anti-A', 'B,AB',
        'A,B', 'none', 'AB',    'none', 'both', 'all',
      ],
      trend_col: -1,
      unit: '',
      caption: 'ABO blood groups',
    },
  };

  test.each(Object.keys(CASES) as (keyof typeof CASES)[])(
    'renders %s and writes its tree',
    (name) => {
      const params = CASES[name];
      const tree = renderWidgetTree(mod, params, { highlight_row: params.highlight_row });
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
        JSON.stringify(tree, null, 1)
      );
      // Every row label must reach the tree — a silently dropped row is the
      // failure a "did it render" check would miss.
      for (const label of params.row_labels) {
        expect(JSON.stringify(tree)).toContain(`"content":"${label}"`);
      }
    }
  );

  describe.each(Object.keys(CASES) as (keyof typeof CASES)[])('%s at small boards', (name) => {
    const params = CASES[name];
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const tree = renderWidgetTreeAt(
        mod, params, { highlight_row: params.highlight_row }, box.width, box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('the grid does not move while highlight_row sweeps (CLAUDE.md §3)', () => {
    // The band is a Rect and may move; every Line and Text here is
    // scaffolding and may not. This also pins the always-render rule — a
    // conditionally mounted band would change the element count.
    const a = renderWidgetTree(mod, CASES.numeric, { highlight_row: 0 });
    const b = renderWidgetTree(mod, CASES.numeric, { highlight_row: 7 });
    expect(scaffoldingDiffs(a, b)).toEqual([]);
  });

  test('an unhighlighted board still renders the band, parked invisible', () => {
    // motionFor defaults a missing key to 0, which is a valid row — so -1 is
    // the sentinel and the Rect must exist either way.
    const tree = renderWidgetTree(mod, CASES.numeric, { highlight_row: -1 });
    expect(JSON.stringify(tree)).toContain('RNSVGRect');
  });
});

/**
 * The schema's legal range must be a subset of what renders correctly.
 *
 * This is a regression test for a real defect: validate() accepted
 * launch_angle_deg = 1, and the resulting tree failed verify-render's glyph
 * floor at every board size, because at 1 degree the apex marker sits 4.8px
 * from the origin dot. The correct fix was to narrow validate(), not to relax
 * the checker — so this test pins the floor rather than the symptom.
 */
describe('projectile_motion angle floor', () => {
  const mod = REGISTRY.projectile_motion!;

  test('validate() clamps a degenerate angle up to the renderable floor', () => {
    const r = mod.validate({ ...mod.defaults, launch_angle_deg: 1 });
    expect(r.ok).toBe(true);
    expect((r as { ok: true; params: { launch_angle_deg: number } }).params.launch_angle_deg).toBe(3);
  });

  test('every angle validate() admits keeps the apex clear of the origin dot', () => {
    // 2r + GLYPH_GAP for the r=4 origin dot, the floor verify-render applies.
    const FLOOR = 12;
    for (const a of [1, 2, 3, 5, 15, 45, 65, 89, 95]) {
      const r = mod.validate({ ...mod.defaults, launch_angle_deg: a });
      if (!r.ok) continue;
      const p = (r as { ok: true; params: { launch_angle_deg: number } }).params;
      for (const box of [SPEC_SMALL, REAL_SMALL, { width: 900, height: 430 }]) {
        const tree = renderWidgetTreeAt(
          mod, p as never, { launch_angle_deg: p.launch_angle_deg }, box.width, box.height
        );
        const circles: { cx: number; cy: number; r: number }[] = [];
        const walk = (n: unknown): void => {
          if (!n || typeof n !== 'object') return;
          const e = n as { type?: string; props?: Record<string, number>; children?: unknown[] };
          if ((e.type === 'RNSVGCircle' || e.type === 'Circle') && e.props) {
            circles.push({ cx: +e.props.cx, cy: +e.props.cy, r: +e.props.r });
          }
          (e.children ?? []).forEach(walk);
        };
        walk(tree);
        for (let i = 0; i < circles.length; i++) {
          for (let j = i + 1; j < circles.length; j++) {
            const [x, y] = [circles[i], circles[j]];
            if (Math.abs(x.r - y.r) > 0.5) continue; // verify-render's own skip rule
            const d = Math.hypot(x.cx - y.cx, x.cy - y.cy);
            expect(d).toBeGreaterThanOrEqual(FLOOR);
          }
        }
      }
    }
  });
});

for (const [id, reason] of Object.entries(SKIP)) {
  test.skip(`${id}: ${reason}`, () => {});
}
