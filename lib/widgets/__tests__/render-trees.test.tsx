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
import { processFlow } from '../process-flow';
import { renderWidgetTree, renderWidgetTreeAt, scaffoldingDiffs } from './test-utils';
import { reactionScheme } from '../reaction-scheme';
import { labelBoxes, type ReactionSchemeParams } from '../reaction-scheme/scheme-graph';
import { moleculeStruct } from '../molecule-struct';
import {
  labelBoxes as moleculeLabelBoxes, type BondStyle, type MoleculeMode,
  type MoleculeStructParams,
} from '../molecule-struct/vsepr-math';

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
  const covered = new Set([
    'projectile_motion', 'field_lines', 'xy_plot', 'data_table_trend',
    // process_flow is verified below but is NOT in the registry yet — wiring
    // it in is a separate serial step. Listing it here keeps this guard
    // honest the moment it lands rather than the commit after.
    'process_flow',
    // molecule_struct, likewise: verified below, registry wiring is separate.
    'molecule_struct',
    ...Object.keys(SKIP),
  ]);
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

  /**
   * CORNERS, not endpoints. A one-param sweep over angle passed cleanly and
   * still missed three defects, each needing two or three params extreme at
   * once: tickStep with no gridline inside a 0.04 m span, tickStep's 2000
   * fallback giving 12 intervals on a 25000 m span, and a fractional PAD.left
   * too narrow for a five-digit y label.
   *
   * The apex position is speed- and gravity-INVARIANT by construction —
   * metresToPx fits to v^2/g, so pxPerM is proportional to g/v^2, and the
   * v^2/g in apexX cancels it exactly. That is asserted below rather than
   * assumed, because it is what lets the angle floor be a pure angle
   * constraint instead of a joint (angle, speed, gravity) one.
   */
  test('the apex lands on the same pixel at every speed and gravity', () => {
    const at = (v: number, g: number) => {
      const r = mod.validate({ ...mod.defaults, launch_angle_deg: 3, initial_speed_ms: v, gravity_ms2: g });
      const p = (r as { ok: true; params: { launch_angle_deg: number } }).params;
      const tree = renderWidgetTreeAt(mod, p as never, { launch_angle_deg: 3 }, 900, 430);
      const found: string[] = [];
      const walk = (n: unknown): void => {
        if (!n || typeof n !== 'object') return;
        const e = n as { type?: string; props?: Record<string, number>; children?: unknown[] };
        if ((e.type === 'RNSVGCircle' || e.type === 'Circle') && e.props) {
          found.push(`${Number(e.props.cx).toFixed(2)},${Number(e.props.cy).toFixed(2)}`);
        }
        (e.children ?? []).forEach(walk);
      };
      walk(tree);
      return found.join(' ');
    };
    expect(at(1, 1.6)).toBe(at(200, 24.8));
    expect(at(22, 9.81)).toBe(at(200, 1.6));
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

/**
 * process_flow is verified here BEFORE it is registered — registry wiring is a
 * separate serial step, so `REGISTRY.process_flow` does not exist yet and the
 * module is imported directly. Everything else is the same harness.
 *
 * Its risk is the same one data_table_trend has and worse: a pathway is mostly
 * text, and verify-render treats ANY overlap of two labels as a hard error.
 * The worst cases are the WIDEST legal payload at the SMALLEST board, once per
 * layout — a pointy-top ring at its maximum node count, a serpentine chain at
 * its maximum node count, and the chain that closes (which gives up a lane to
 * its return edge and so lays out in a narrower grid than the other two).
 */
describe('process_flow', () => {
  const mod = processFlow;

  const CASES = {
    // NCERT Cl.11 Bio Ch.14 — the closed ring, at the ring's maximum n.
    ring: { ...mod.defaults },
    // Same chapter — 10 nodes is the chain's maximum, and it does NOT close.
    chain: {
      ...mod.defaults,
      layout: 'chain' as const,
      nodes: ['Glucose', 'G-6-P', 'F-6-P', 'F-1,6-bP', 'DHAP', 'G-3-P',
              '1,3-BPG', '3-PGA', '2-PGA', 'PEP'],
      closes: false,
      caption: 'Glycolysis',
    },
    // NCERT Cl.11 Bio Ch.13 — a chain that DOES close. The concept this widget
    // exists as one widget for: the open run and the return edge, one board.
    chain_closed: {
      ...mod.defaults,
      layout: 'chain' as const,
      nodes: ['PS I', 'Ferredoxin', 'Cyt b6f', 'Plastocyanin'],
      closes: true,
      caption: 'Cyclic photophosphorylation',
    },
    // A branch point — the only payload where out-degree exceeds one.
    branch: {
      ...mod.defaults,
      layout: 'chain' as const,
      nodes: ['Glucose', 'Pyruvate', 'Acetyl-CoA', 'Krebs cycle'],
      closes: false,
      branch_at: 1,
      caption: 'Fate of pyruvate',
    },
  };

  test('every case is a payload validate() would actually admit', () => {
    // The schema's legal range must be a subset of what renders correctly — so
    // the trees below have to come from inside the schema, not beside it.
    for (const [name, params] of Object.entries(CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok]).toEqual([name, true]);
    }
  });

  test.each(Object.keys(CASES) as (keyof typeof CASES)[])(
    'renders %s and writes its tree',
    (name) => {
      const params = CASES[name];
      const tree = renderWidgetTree(mod, params, { active_node: params.active_node });
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
        JSON.stringify(tree, null, 1)
      );
      const json = JSON.stringify(tree);
      // Edges are Paths and node plates are Rects — a tree missing either is
      // a diagram with no ink for verify-render's coverage assertion to see.
      expect(json).toContain('"d":');
      expect(json).toContain('RNSVGRect');
      // Every node label must reach the tree; a silently dropped step is the
      // failure a bare "did it render" check would miss.
      for (const label of params.nodes) {
        expect(json).toContain(`"content":"${label}"`);
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
        mod, params, { active_node: params.active_node }, box.width, box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('the pathway does not move while active_node walks it (CLAUDE.md §3)', () => {
    // The highlight is a Rect and may move; every Text here is scaffolding and
    // may not. If a label ever rode on the highlight this would fail, which is
    // the check that keeps `animatable: ['active_node']` honest rather than
    // asserted in a comment.
    const a = renderWidgetTree(mod, CASES.ring, { active_node: 0 });
    const b = renderWidgetTree(mod, CASES.ring, { active_node: 5.5 });
    expect(scaffoldingDiffs(a, b)).toEqual([]);

    const c = renderWidgetTree(mod, CASES.chain, { active_node: 1 });
    const d = renderWidgetTree(mod, CASES.chain, { active_node: 8.25 });
    expect(scaffoldingDiffs(c, d)).toEqual([]);
  });

  test('an unhighlighted board still renders the plate, parked invisible', () => {
    // motionFor defaults a missing key to 0, which is a valid node — so -1 is
    // the sentinel and the Rect must exist either way, parked AT node 0 rather
    // than at the origin, where it would enlarge the measured ink box.
    const tree = renderWidgetTree(mod, CASES.ring, { active_node: -1 });
    expect(JSON.stringify(tree)).toContain('"fillOpacity":0');
  });

  test('derived matches what computeDerived actually returns', () => {
    // derived-consistency.test.ts iterates the REGISTRY, which process_flow is
    // not in yet. Same assertion, made directly, so registration cannot be the
    // first time this is checked.
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });

  test('validate() rejects the six shapes it has to reject, readably', () => {
    const bad: [string, unknown][] = [
      ['not an object', 42],
      ['empty object', {}],
      ['wrong layout', { layout: 'spiral', nodes: ['a', 'b', 'c'] }],
      ['too few nodes', { layout: 'ring', nodes: ['a', 'b'] }],
      ['too many ring nodes', { layout: 'ring', nodes: Array(9).fill('a') }],
      ['too many chain nodes', { layout: 'chain', nodes: Array(11).fill('a') }],
      ['non-string node', { layout: 'ring', nodes: ['a', 'b', 7] }],
      ['empty label', { layout: 'ring', nodes: ['a', '  ', 'c'] }],
      ['NaN branch', { layout: 'ring', nodes: ['a','b','c'], branch_at: NaN }],
      ['Infinity active', { layout: 'ring', nodes: ['a','b','c'], active_node: Infinity }],
      ['fractional index', { layout: 'ring', nodes: ['a','b','c'], active_node: 1.5 }],
      ['out-of-range index', { layout: 'ring', nodes: ['a','b','c'], branch_at: 3 }],
    ];
    for (const [name, payload] of bad) {
      const r = mod.validate(payload);
      expect([name, r.ok]).toEqual([name, false]);
      expect([name, (r as { ok: false; errors: string[] }).errors.length > 0])
        .toEqual([name, true]);
    }
  });

  test('validate() truncates every label to what its layout can render', () => {
    const r = mod.validate({
      layout: 'ring',
      nodes: ['Phosphoenolpyruvate', 'Glyceraldehyde-3-P', 'Dihydroxyacetone',
              'Fructose-1,6-bis', 'Oxaloacetic acid', 'Alpha-ketoglutarate',
              'Succinyl-coenzyme', 'Isocitric acid'],
    });
    expect(r.ok).toBe(true);
    const p = (r as { ok: true; params: { nodes: readonly string[] } }).params;
    // n = 8 -> 16 characters, the boundary flow-math.ts derives at 343x236.
    for (const s of p.nodes) expect(s.length).toBeLessThanOrEqual(16);
    expect(p.nodes[0]).toBe('Phosphoenolpyruv');
  });
});

/**
 * reaction_scheme is verified here BEFORE it is registered — registry wiring
 * is a separate serial step, so `REGISTRY.reaction_scheme` does not exist yet
 * and the module is imported directly. Everything else is the same harness.
 *
 * Two risks, and the cases below are chosen for them rather than for variety.
 *
 * FIRST, INK. A scheme is species TEXT joined by arrows, and verify-render's
 * boundsOf understands Path/Circle/Line/Rect but NOT text — so the smallest
 * legal payload (2 species, 1 step) draws one horizontal arrow whose bounding
 * box is roughly 300x0: ~0% coverage, a hard error, and only 4.3% even once
 * the chip plates are counted. The `wurtz` case is that exact payload, kept
 * as a regression fixture for the two bracketing rules that fix it.
 *
 * SECOND, COLLISIONS. Three shapes fall out of one ranking rule and each puts
 * the labels somewhere different: a chain lays every label on one y (so the
 * arrow gaps have to hold the reagents), a fan HALVES the reagent pitch to
 * rowPitch/2, and a converge does the same in mirror. All three are rendered
 * at all three boards.
 */
describe('reaction_scheme', () => {
  const mod = reactionScheme;

  const CASES: Record<'chain' | 'fan' | 'converge' | 'wurtz', ReactionSchemeParams> = {
    // CHAIN — NCERT Cl.11 "Hydrocarbons". ranks 0,1,2,3; rows 1, which is the
    // NaN trap (rowPitch = band/(rows-1)) and the commonest payload there is.
    chain: { ...mod.defaults },

    // FAN — NCERT Cl.12 "Amines". ranks 0,1,1,1,1,1; rows 5, the cap. This is
    // the widest fan that fits, so it is the binding case for the reagent
    // pitch of rowPitch/2 = 21.98 against the 17.8 two boxes need.
    fan: {
      species: ['C6H5N2Cl', 'C6H5Cl', 'C6H5Br', 'C6H5CN', 'C6H5OH', 'C6H6'],
      step_from: [0, 0, 0, 0, 0],
      step_to: [1, 2, 3, 4, 5],
      step_reagent: ['CuCl/HCl', 'CuBr/HBr', 'CuCN/KCN', 'H2O,warm', 'H3PO2'],
      step_kind: ['plain', 'plain', 'plain', 'major', 'minor'],
      highlight_step: 0,
      step_progress: 1,
      caption: 'Benzenediazonium chloride',
    },

    // CONVERGE — NCERT Cl.12 "Alcohols, Phenols and Ethers": three routes to
    // the same product. ranks 0,0,0,1 with no `layout` param anywhere: the
    // same longest-path-from-a-source rule produces it.
    converge: {
      species: ['C2H4', 'C2H5Br', 'CH3CHO', 'C2H5OH'],
      step_from: [0, 1, 2],
      step_to: [3, 3, 3],
      step_reagent: ['H2O/H+', 'aq.KOH', 'H2/Ni'],
      step_kind: ['plain', 'plain', 'plain'],
      highlight_step: 1,
      step_progress: 1,
      caption: 'Three routes to ethanol',
    },

    // The ink-coverage regression fixture. NCERT Cl.12 "Haloalkanes and
    // Haloarenes": the smallest scheme the schema admits.
    wurtz: {
      species: ['C2H5Br', 'C4H10'],
      step_from: [0],
      step_to: [1],
      step_reagent: ['Na, dry ether'.slice(0, 12)],
      step_kind: ['major'],
      highlight_step: 0,
      step_progress: 1,
      caption: 'Wurtz reaction',
    },
  };

  test('every case is a payload validate() would actually admit', () => {
    // The schema's legal range must be a SUBSET of what renders correctly — so
    // the trees below have to come from inside the schema, not beside it.
    for (const [name, params] of Object.entries(CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok]).toEqual([name, true]);
    }
  });

  test.each(Object.keys(CASES) as (keyof typeof CASES)[])(
    'renders %s and writes its tree',
    (name) => {
      const params = CASES[name];
      const tree = renderWidgetTree(mod, params, { step_progress: params.step_progress });
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
        JSON.stringify(tree, null, 1)
      );
      const json = JSON.stringify(tree);
      // Arrows and the tracer are Paths; chips and reagent plates are Rects.
      // A tree missing either is a diagram with no ink for the coverage
      // assertion to measure.
      expect(json).toContain('"d":');
      expect(json).toContain('RNSVGRect');
      // Every species must reach the tree — a silently dropped node is the
      // failure a bare "did it render" check would miss.
      for (const label of params.species) {
        expect(json).toContain(`"content":"${label}"`);
      }
      for (const reagent of params.step_reagent) {
        expect(json).toContain(`"content":"${reagent}"`);
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
        mod, params, { step_progress: params.step_progress }, box.width, box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('the scheme does not move while step_progress traces (CLAUDE.md §3)', () => {
    // The tracer is a Path and may move; every Line and Text here is
    // scaffolding and may not. This is the check that keeps
    // `animatable: ['step_progress']` honest rather than merely argued: if a
    // reagent label ever rode the moving end, the widget would be
    // label-terminated and therefore snap-only.
    for (const name of Object.keys(CASES) as (keyof typeof CASES)[]) {
      const a = renderWidgetTree(mod, CASES[name], { step_progress: 0 });
      const b = renderWidgetTree(mod, CASES[name], { step_progress: 1 });
      expect([name, scaffoldingDiffs(a, b)]).toEqual([name, []]);
    }
  });

  test('an unhighlighted board still renders the tracer, parked invisible', () => {
    // motionFor defaults a missing key to 0, and 0 is a valid step index — so
    // -1 is the sentinel and the Path must exist either way. Mounting it
    // conditionally would change the element count between two motion values,
    // which scaffoldingDiffs reports as a params/motion violation.
    const count = (n: unknown): number => {
      if (!n || typeof n !== 'object') return 0;
      if (Array.isArray(n)) return n.reduce((a: number, x) => a + count(x), 0);
      const e = n as { children?: unknown };
      return 1 + count(e.children);
    };
    const off = renderWidgetTree(mod, { ...CASES.chain, highlight_step: -1 }, {});
    expect(JSON.stringify(off)).toContain('"strokeOpacity":0');
    // Same element count, highlighted or not — the tracer is parked by
    // opacity, never unmounted. (scaffoldingDiffs is the wrong tool here: the
    // two trees differ in PARAMS, which is allowed to change a label's fill.)
    const on = renderWidgetTree(mod, CASES.chain, {});
    expect(count(off)).toBe(count(on));
  });

  test('progress 0 is a drawable state, not a NaN', () => {
    // motionFor defaults an unsupplied key to 0, so 0 has to render.
    const tree = renderWidgetTree(mod, CASES.chain, { step_progress: 0 });
    expect(JSON.stringify(tree)).not.toMatch(/NaN|Infinity/);
  });

  test('derived matches what computeDerived actually returns', () => {
    // derived-consistency.test.ts iterates the REGISTRY, which reaction_scheme
    // is not in yet. Same assertion, made directly, so registration cannot be
    // the first time this is checked.
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });

  /**
   * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY, and
   * the extreme values are CORNERS rather than endpoints. The corners of this
   * schema's box are (rank count) x (species width) x (reagent width) x
   * (rows), and each corner is crossed with all three board sizes below —
   * asserting the thing verify-render's assertion 4 asserts, since a payload
   * that collides at 343x236 must never be admitted in the first place.
   */
  test('every corner of the legal box lays out without a label collision', () => {
    const corners: ReactionSchemeParams[] = [
      // widest chain the budget admits: 7 one-char ranks
      {
        species: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        step_from: [0, 1, 2, 3, 4, 5], step_to: [1, 2, 3, 4, 5, 6],
        step_reagent: ['', '', '', '', '', ''],
        step_kind: ['plain', 'plain', 'plain', 'plain', 'plain', 'plain'],
        highlight_step: 5, step_progress: 1, caption: 'seven ranks',
      },
      // widest species the budget admits at 3 ranks
      {
        species: ['CH3CH2CH3', 'CH3CHBrCH', 'CH3CHOHCH'],
        step_from: [0, 1], step_to: [1, 2],
        step_reagent: ['Br2', 'aq.KOH'],
        step_kind: ['plain', 'major'],
        highlight_step: 0, step_progress: 0.5, caption: 'ten-char species',
      },
      // widest reagent, at the two ranks that leave room for it
      {
        species: ['C6H5CH3', 'C6H5COOH'],
        step_from: [0], step_to: [1],
        step_reagent: ['KMnO4/KOH,H'],
        step_kind: ['major'],
        highlight_step: 0, step_progress: 1, caption: 'twelve-char reagent',
      },
      // the row cap, both ways round
      { ...CASES.fan },
      {
        species: ['A', 'B', 'C', 'D', 'E', 'Z'],
        step_from: [0, 1, 2, 3, 4], step_to: [5, 5, 5, 5, 5],
        step_reagent: ['p', 'q', 'r', 's', 't'],
        step_kind: ['plain', 'plain', 'plain', 'plain', 'plain'],
        highlight_step: 4, step_progress: 1, caption: 'five converging',
      },
    ];

    for (const params of corners) {
      const r = mod.validate(params);
      expect([params.caption, r.ok]).toEqual([params.caption, true]);
      for (const box of [SPEC_SMALL, REAL_SMALL, { width: 900, height: 430 }]) {
        // Every label box, in verify-render's own model.
        const boxes = labelBoxes(params, box.width, box.height);
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i];
            const b = boxes[j];
            const hit = a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
            expect([params.caption, box.width, a.s, b.s, hit])
              .toEqual([params.caption, box.width, a.s, b.s, false]);
          }
        }
      }
    }
  });
});

/**
 * molecule_struct is verified here BEFORE it is registered — registry wiring
 * is a separate serial step, so `REGISTRY.molecule_struct` does not exist yet
 * and the module is imported directly. Everything else is the same harness.
 *
 * THREE MODES x THREE BOARDS, and the modes are not cosmetic: `interaction`
 * gives up a legend row and therefore lays out at a SMALLER site radius (72.4
 * vs 85.0 at 343x236), so a payload that fits in electron_domain mode is not
 * thereby known to fit in interaction mode. That is the whole reason
 * validate() runs its geometric backstop per-mode rather than once.
 *
 * Two risks, and the cases below are chosen for them rather than for variety.
 *
 * FIRST, INK. verify-render's boundsOf understands Path/Circle/Line/Rect and
 * NOT text, and a molecule is mostly text. CO2 and XeF2 drawn as two collinear
 * bonds have a bounding box roughly 150x0 — 0% coverage, a hard error. The
 * `co2` and `xef2` cases are those exact payloads, kept as regression fixtures
 * for the two things that fix them: the forced angle arc (which gives the
 * MOLECULE 2D extent) and the two bracketing band rules (which give the TREE
 * its coverage). They are different steric numbers — 2 and 5 — and the same
 * drawn geometry, which is why `angleIsForced` keys off the shape.
 *
 * SECOND, LONE PAIRS. Every payload with a lone pair would be a hard error on
 * assertion 8 if the two dots were <Circle>s: 6.4pt apart at r = 2.4 is below
 * the 2r + 4 = 8.8 floor. `h2o`, `nh3`, `xef2` and `clf3` all carry lone pairs,
 * so the one-Path-per-pair decision is regression-tested by the gate itself
 * rather than only by the unit assertion in physics.test.ts.
 */
describe('molecule_struct', () => {
  const mod = moleculeStruct;

  const CASES: Record<string, MoleculeStructParams> = {
    // ELECTRON DOMAIN — NCERT Cl.11 Unit 4, Table 4.6's first row. Drawn 90
    // degrees apart, annotated 109.5. The wedge/dash pair is what makes the
    // 2D drawing read as a tetrahedron at all.
    ch4: { ...mod.defaults },

    // THE INK FIXTURE, steric number 2. Two collinear bonds and nothing else.
    co2: {
      mode: 'electron_domain', centre: 'C', bond_pairs: 2, lone_pairs: 0,
      ligands: ['O', 'O'], bond_orders: [2, 2], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: false,
      label: 'Carbon dioxide', highlight_site: -1,
    },

    // THE COUNTER-FIXTURE, and the second ink fixture: steric number 5, three
    // lone pairs, still linear at 180.
    xef2: {
      mode: 'electron_domain', centre: 'Xe', bond_pairs: 2, lone_pairs: 3,
      ligands: ['F', 'F'], bond_orders: [1, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: false,
      label: 'Xenon difluoride', highlight_site: 0,
    },

    // The lone-pair series NCERT reads the -2.5 constant off.
    nh3: {
      mode: 'electron_domain', centre: 'N', bond_pairs: 3, lone_pairs: 1,
      ligands: ['H', 'H', 'H'], bond_orders: [1, 1, 1],
      bond_styles: ['plain', 'wedge', 'dash'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Ammonia', highlight_site: 1,
    },
    h2o: {
      mode: 'electron_domain', centre: 'O', bond_pairs: 2, lone_pairs: 2,
      ligands: ['H', 'H'], bond_orders: [1, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Water', highlight_site: -1,
    },

    // The SN-5 pair: both angles, and the shape a single-angle model gets
    // wrong. Also the widest non-coordination payload, at 5 sites.
    pcl5: {
      mode: 'electron_domain', centre: 'P', bond_pairs: 5, lone_pairs: 0,
      ligands: ['Cl', 'Cl', 'Cl', 'Cl', 'Cl'], bond_orders: [1, 1, 1, 1, 1],
      bond_styles: ['plain', 'plain', 'plain', 'wedge', 'dash'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Phosphorus(V) chloride', highlight_site: 3,
    },
    clf3: {
      mode: 'electron_domain', centre: 'Cl', bond_pairs: 3, lone_pairs: 2,
      ligands: ['F', 'F', 'F'], bond_orders: [1, 1, 1],
      bond_styles: ['plain', 'plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Chlorine trifluoride', highlight_site: -1,
    },

    // COORDINATION — NCERT Cl.12 Unit 5. Six sites, the site cap, and the
    // widest board the schema admits: bracket, charge, and dative bonds.
    fecn6: {
      mode: 'coordination', centre: 'Fe', bond_pairs: 6, lone_pairs: 0,
      ligands: ['CN', 'CN', 'CN', 'CN', 'CN', 'CN'],
      bond_orders: [1, 1, 1, 1, 1, 1],
      bond_styles: ['dative', 'dative', 'dative', 'dative', 'dative', 'dative'],
      charge: -4, bracket: true, show_lone_pairs: false, show_angle: false,
      label: 'Hexacyanoferrate(II)', highlight_site: 2,
    },
    // The EAN cross-check: same 36 from a different (Z, ox, CN) triple.
    nico4: {
      mode: 'coordination', centre: 'Ni', bond_pairs: 4, lone_pairs: 0,
      ligands: ['CO', 'CO', 'CO', 'CO'], bond_orders: [1, 1, 1, 1],
      bond_styles: ['dative', 'dative', 'dative', 'dative'],
      charge: 0, bracket: false, show_lone_pairs: false, show_angle: false,
      label: 'Nickel tetracarbonyl', highlight_site: 0,
    },

    // INTERACTION — the mode with the smallest site radius. Bifluoride,
    // [F-H...F]-: the strongest hydrogen bond there is, and genuinely LINEAR
    // at 180, so it is an ink fixture in the mode with the least room. Note
    // the centre is the HYDROGEN: every ligand entry is an electron domain, so
    // an H-bond partner bolted onto water would move water's reported shape.
    hf2: {
      mode: 'interaction', centre: 'H', bond_pairs: 2, lone_pairs: 0,
      ligands: ['F', 'F'], bond_orders: [1, 1],
      bond_styles: ['plain', 'hbond'],
      charge: -1, bracket: true, show_lone_pairs: true, show_angle: false,
      label: 'Bifluoride ion', highlight_site: 1,
    },
    // A dative bond, in the mode that names it: H3O+ is trigonal pyramidal at
    // 107 with a formal charge of +1 on the oxygen — all three numbers right.
    h3o: {
      mode: 'interaction', centre: 'O', bond_pairs: 3, lone_pairs: 1,
      ligands: ['H', 'H', 'H'], bond_orders: [1, 1, 1],
      bond_styles: ['plain', 'plain', 'dative'],
      charge: 1, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Hydronium ion', highlight_site: 2,
    },
    // Six 4-char ligands in interaction mode: the binding corner of the whole
    // schema, where dx = 36.2 against the 31.84 two 4-char boxes need.
    interWide: {
      mode: 'interaction', centre: 'Xe', bond_pairs: 6, lone_pairs: 0,
      ligands: ['OMe2', 'OMe2', 'OMe2', 'OMe2', 'OMe2', 'OMe2'],
      bond_orders: [1, 1, 1, 1, 1, 1],
      bond_styles: ['plain', 'wedge', 'dash', 'dative', 'hbond', 'plain'],
      charge: 4, bracket: true, show_lone_pairs: false, show_angle: true,
      label: 'Every bond style at once', highlight_site: 5,
    },
  };

  test('every case is a payload validate() would actually admit', () => {
    // The schema's legal range must be a SUBSET of what renders correctly — so
    // the trees below have to come from inside the schema, not beside it.
    for (const [name, params] of Object.entries(CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok]).toEqual([name, true]);
    }
  });

  test('all three modes are exercised', () => {
    // A harness that only ever rendered electron_domain would never lay
    // anything out at the interaction-mode radius, which is the smaller one.
    const modes = new Set<MoleculeMode>(Object.values(CASES).map((p) => p.mode));
    expect([...modes].sort()).toEqual(['coordination', 'electron_domain', 'interaction']);
  });

  test.each(Object.keys(CASES))('renders %s and writes its tree', (name) => {
    const params = CASES[name];
    const tree = renderWidgetTree(mod, params, { highlight_site: params.highlight_site });
    expect(tree).not.toBeNull();
    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
      JSON.stringify(tree, null, 1)
    );
    const json = JSON.stringify(tree);
    // Bonds, band rules and the marker are the three things that must exist:
    // a tree missing any of them is a diagram with nothing for the coverage
    // assertion to measure, or a marker that was conditionally unmounted.
    expect(json).toContain('"d":');
    expect(json).toContain('RNSVGLine');
    expect(json).toContain('RNSVGCircle');
    // Every ligand and the centre must reach the tree — a silently dropped
    // label is the failure a bare "did it render" check would miss.
    expect(json).toContain(`"content":"${params.centre}"`);
    for (const lig of params.ligands) expect(json).toContain(`"content":"${lig}"`);
  });

  describe.each(Object.keys(CASES))('%s at small boards', (name) => {
    const params = CASES[name];
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const tree = renderWidgetTreeAt(
        mod, params, { highlight_site: params.highlight_site }, box.width, box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('the structure does not move while highlight_site travels (CLAUDE.md §3)', () => {
    // THE ANIMATABLE JUSTIFICATION, as a check rather than an argument. The
    // marker is a Circle and may move; every Line and Text here — band rules,
    // bonds' labels, the centre atom, the readout — is scaffolding and may
    // not. If a ligand label ever rode the moving end, this widget would be
    // label-terminated and therefore snap-only, like the rest of the
    // structural-formula family.
    for (const name of Object.keys(CASES)) {
      const a = renderWidgetTree(mod, CASES[name], { highlight_site: 0 });
      const b = renderWidgetTree(mod, CASES[name], {
        highlight_site: CASES[name].bond_pairs - 1,
      });
      expect([name, scaffoldingDiffs(a, b)]).toEqual([name, []]);
      // Fractional too: a cue tweens through the values between two sites.
      const mid = renderWidgetTree(mod, CASES[name], { highlight_site: 0.5 });
      expect([name, scaffoldingDiffs(a, mid)]).toEqual([name, []]);
    }
  });

  test('an unhighlighted board still renders the marker, parked invisible', () => {
    // motionFor defaults a missing key to 0, and 0 is a VALID site index — so
    // -1 is the sentinel and the Circle must exist either way. Mounting it
    // conditionally would change the element count between two motion values,
    // which scaffoldingDiffs reports as a params/motion violation.
    const count = (n: unknown): number => {
      if (!n || typeof n !== 'object') return 0;
      if (Array.isArray(n)) return n.reduce((a: number, x) => a + count(x), 0);
      const e = n as { children?: unknown };
      return 1 + count(e.children);
    };
    const off = renderWidgetTree(mod, { ...CASES.ch4, highlight_site: -1 }, {});
    expect(JSON.stringify(off)).toContain('"fillOpacity":0');
    const on = renderWidgetTree(mod, { ...CASES.ch4, highlight_site: 1 }, { highlight_site: 1 });
    expect(count(off)).toBe(count(on));
    expect(JSON.stringify(on)).toContain('"fillOpacity":0.85');
  });

  test('highlight_site 0 is a drawable state, not a NaN', () => {
    // motionFor defaults an unsupplied key to 0, so 0 has to render.
    for (const name of Object.keys(CASES)) {
      const tree = renderWidgetTree(mod, CASES[name], { highlight_site: 0 });
      expect([name, /NaN|Infinity/.test(JSON.stringify(tree))]).toEqual([name, false]);
    }
  });

  test('THE CIRCLE INVENTORY: exactly one Circle per render, at MARKER_R', () => {
    // verify-render assertion 8 fails any two circles of the SAME radius closer
    // than 2r + 4. A lone pair drawn as two <Circle>s at r = 2.4 and 6.4pt
    // apart is 8.8 vs 6.4 — every payload with a lone pair would be a hard
    // error. Both dots therefore live in ONE <Path>, and this widget's entire
    // Circle inventory is the single travelling marker. With one circle in the
    // tree, assertion 8 has no pair to compare and cannot fire — which is a
    // structural guarantee, not a tuned clearance.
    for (const name of Object.keys(CASES)) {
      for (const box of [{ width: 900, height: 430 }, SPEC_SMALL]) {
        const tree = renderWidgetTreeAt(
          mod, CASES[name], { highlight_site: 0 }, box.width, box.height
        );
        const circles = (JSON.stringify(tree).match(/RNSVGCircle/g) ?? []).length;
        expect([name, box.width, circles]).toEqual([name, box.width, 1]);
      }
    }
  });

  test('derived matches what computeDerived actually returns', () => {
    // derived-consistency.test.ts iterates the REGISTRY, which molecule_struct
    // is not in yet. Same assertion, made directly, so registration cannot be
    // the first time this is checked.
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });

  /**
   * THE SCHEMA'S LEGAL RANGE MUST BE A SUBSET OF WHAT RENDERS CORRECTLY, and
   * the extreme values are CORNERS rather than endpoints. The corners of this
   * schema's box are (mode) x (electron domains) x (ligand width) x (bracket +
   * charge + angle), and each is crossed with all three board sizes — asserting
   * what verify-render's assertion 4 asserts, because a payload that collides
   * at 343x236 must never be admitted in the first place.
   */
  test('every corner of the legal box lays out without a label collision', () => {
    const corners: MoleculeStructParams[] = [];
    for (const mode of ['electron_domain', 'coordination', 'interaction'] as MoleculeMode[]) {
      for (const bp of [2, 6]) {
        for (const lp of bp === 2 ? [0, 3] : [0]) {
          for (const wide of [false, true]) {
            const lig = mode === 'coordination' ? (wide ? 'NO2' : 'CN') : (wide ? 'WWWW' : 'W');
            corners.push({
              mode,
              centre: wide ? 'Xe' : 'C',
              bond_pairs: bp,
              lone_pairs: lp,
              ligands: new Array<string>(bp).fill(lig),
              bond_orders: new Array<number>(bp).fill(wide ? 3 : 1),
              bond_styles: new Array<BondStyle>(bp).fill(wide ? 'dative' : 'plain'),
              charge: wide ? -4 : 0,
              bracket: wide,
              show_lone_pairs: true,
              show_angle: wide,
              label: wide ? 'X'.repeat(24) : '',
              highlight_site: bp - 1,
            });
          }
        }
      }
    }

    for (const params of corners) {
      const name = `${params.mode}/${params.bond_pairs}+${params.lone_pairs}/${params.ligands[0]}`;
      // coordination mode needs a transition-metal centre with a real Z.
      const p = params.mode === 'coordination' ? { ...params, centre: 'Fe' } : params;
      const r = mod.validate(p);
      expect([name, r.ok]).toEqual([name, true]);
      for (const box of [SPEC_SMALL, REAL_SMALL, { width: 900, height: 430 }]) {
        const boxes = moleculeLabelBoxes(p, box.width, box.height);
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i];
            const b = boxes[j];
            const hit = a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
            expect([name, box.width, a.s, b.s, hit]).toEqual([name, box.width, a.s, b.s, false]);
          }
        }
      }
    }
  });
});
