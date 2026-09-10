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
import { circuitNetwork } from '../circuit-network';
import type { CircuitNetworkParams } from '../circuit-network';
import { reactionScheme } from '../reaction-scheme';
import { labelBoxes, type ReactionSchemeParams } from '../reaction-scheme/scheme-graph';
import { moleculeStruct } from '../molecule-struct';
import { freeBodyForces } from '../free-body-forces';
import { linesPlanes3d } from '../lines-planes-3d';
import { REFERENCE_CASES as LINES_PLANES_CASES } from '../lines-planes-3d/reference-cases';
import type { XyPlotParams } from '../xy-plot/plot-math';
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

/**
 * THE CASE THAT ACTUALLY SHIPS: A HINGLISH CAPTION AT 343x236.
 *
 * Every widget with a readout carries one `hinglish_*` case below, and it is
 * not decoration. The app has two language modes (lib/preferences.ts):
 *
 *     LanguageId = 'hinglish' | 'english'      // DEFAULT hinglish
 *
 * so the DEFAULT string on a student's board is Hinglish, and Hinglish is
 * romanised Latin — "Chalo shuru karte hain", from the API's persona.py, not
 * Devanagari. Nothing here was ever tested against it, because "another
 * language" was read as "another script" and the script the product does not
 * ship got the fixtures instead.
 *
 * What makes it a real case is not the alphabet, which the width model already
 * handles at CHAR_W. It is LENGTH. Hinglish says the same thing in more
 * characters than English does, every time:
 *
 *     "Two banks in series"       19   ->  "Do bank series mein jude hue hain"  33
 *     "Citric acid cycle"         17   ->  "Citric acid cycle ke aath steps"    31
 *     "Ethane to benzene"         17   ->  "Ethane se benzene banane ka raasta" 34
 *
 * and the readout is width-fitted, so 14 extra characters is exactly the
 * pressure `chrome.fitReadout` degrades under. Each case pairs with an
 * existing English one on the SAME payload wherever possible, so the two trees
 * differ in the caption and nothing else.
 */
/** The default box renderWidgetTree uses, named so the corner sweep can pass
 *  all three board sizes through one `test.each`. */
const BOARD = { width: 900, height: 430 };

test('every registry entry is either verified below or explicitly skipped', () => {
  // All nine are registered as of the wiring commit. The three entries that
  // used to carry "verified below but NOT in the registry yet" notes are now
  // plain members; reaction_scheme was verified below all along and simply
  // never added itself here, which is precisely what this guard is for -- it
  // failed the moment the registry grew, naming the one widget nobody had
  // listed. A guard that only fires on the case its author remembered is not
  // a guard.
  const covered = new Set([
    'projectile_motion', 'field_lines', 'xy_plot', 'data_table_trend',
    'process_flow', 'reaction_scheme', 'molecule_struct', 'circuit_network',
    // lines_planes_3d was verified below (line ~1896) for two commits before it
    // was registered, exactly as reaction_scheme had been. Both times the guard
    // caught it at the moment of wiring and named the widget -- which is the
    // job. Verified below and listed here are two different claims, and only
    // the second is what this set asserts.
    'lines_planes_3d',
    // free_body_forces was wired 2026-09-10. Its own suite
    // (free-body-forces/__tests__) runs seven corner payloads through the
    // REAL gate at all three boards; the section below is the integration
    // file's own record of the same claim, in this file's shape.
    'free_body_forces',
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

    // The widest labels the schema allows, on the smallest board. `curve` is
    // the one mode whose readout carries no number, so it is trimmed to the
    // box rather than refused — and the trim is a code path, so the gate has
    // to see it at every board size.
    curve_long_labels: {
      ...mod.defaults,
      mode: 'curve' as const,
      curve: 'sine' as const,
      a: 1, b: 1, c: 0,
      x_min: 0, x_max: 6.28,
      x_label: 'displacement along the beam axis xx',
      y_label: 'bending moment about the neutral z',
    },

    // The default language, on the smallest board. `curve` is the one mode
    // whose readout is BUILT FROM the axis labels ("<y> vs <x>"), so Hinglish
    // axis names are this widget's caption pressure — and it is the one
    // readout widget that does not go through fitReadout at all: it slices,
    // because a curve readout carries no number to protect.
    curve_hinglish_labels: {
      ...mod.defaults,
      mode: 'curve' as const,
      curve: 'sine' as const,
      a: 1, b: 1, c: 0,
      x_min: 0, x_max: 6.28,
      x_label: 'samay, second mein',
      y_label: 'vistaar, metre mein',
    },

    /* ---- v2: the region between two curves. NCERT Class 12 Ch8. ---- */

    // "Area between two intersecting curves": y = x and y = x² on [0,1] = 1/6.
    area_between: {
      ...mod.defaults,
      mode: 'area_between' as const,
      curve: 'line' as const, a: 1, b: 0, c: 0,
      curve2: 'parabola' as const, a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1,
    },
    // The crossing case, and the reason the crossings are solved at all: the
    // curves cross at 0 and 1, both INSIDE [−1,2]. 5/6 + 1/6 + 5/6 = 11/6.
    // |∫(f−g)| over the same span is 3/2, so a readout of 1.50 here would be
    // the naive implementation and 1.83 is the area of what is drawn.
    area_between_crossing: {
      ...mod.defaults,
      mode: 'area_between' as const,
      curve: 'line' as const, a: 1, b: 0, c: 0,
      curve2: 'parabola' as const, a2: 1, b2: 0, c2: 0,
      x_min: -1.2, x_max: 2.2, shade_from: -1, shade_to: 2,
    },
    // "Area bounded by a curve and its tangent": y = x² and y = 2x − 1, which
    // touch at x = 1 without crossing. ∫₀³|x² − 2x + 1| = ∫₀³(x−1)² = 3.33.
    area_between_tangent: {
      ...mod.defaults,
      mode: 'area_between' as const,
      curve: 'parabola' as const, a: 1, b: 0, c: 0,
      curve2: 'line' as const, a2: 2, b2: 0, c2: -1,
      x_min: -1, x_max: 3, shade_from: 0, shade_to: 3,
    },
    // The parabola y² = 4ax against its own latus rectum, 8a²/3 = 2.67 at
    // a = 1 — drawn TRANSPOSED, the horizontal variable standing for the
    // textbook's y, because this widget integrates along x only.
    area_between_latus: {
      ...mod.defaults,
      mode: 'area_between' as const,
      curve: 'line' as const, a: 0, b: 0, c: 1,
      curve2: 'parabola' as const, a2: 0.25, b2: 0, c2: 0,
      x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2,
      x_label: 'y', y_label: 'x',
    },
    // Against the default second curve, the x axis: the UNSIGNED area under
    // y = x² − 1 on [0,2] is 2, where the signed integral `area` mode reports
    // is 2/3. Two different questions, two different numbers, one widget.
    area_between_axis: {
      ...mod.defaults,
      mode: 'area_between' as const,
      curve: 'parabola' as const, a: 1, b: 0, c: -1,
      curve2: 'line' as const, a2: 0, b2: 0, c2: 0,
      x_min: -0.5, x_max: 2.5, shade_from: 0, shade_to: 2,
    },
  };

  /**
   * What the readout must say for each case — the arithmetic, tied to the
   * picture. Derived by hand from NCERT Ch8 (see plot-math.ts's header), not
   * read off a render.
   */
  const EXPECTED_READOUT: Partial<Record<keyof typeof CASES, string>> = {
    area: 'area 2.67',                 // ∫₀² x² dx = 8/3
    area_between: 'area 0.17',         // 1/6
    area_between_crossing: 'area 1.83', // 11/6, NOT the naive 3/2
    area_between_tangent: 'area 3',     // ∫₀³ (x−1)² dx = 3
    area_between_latus: 'area 2.67',    // 8a²/3 at a = 1
    area_between_axis: 'area 2',        // ∫₀²|x²−1| dx, where ∫₀²(x²−1) dx = 2/3
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
      const expectedReadout = EXPECTED_READOUT[name];
      if (expectedReadout) {
        // The readout is the number a student reads off the board, so it is
        // asserted as a string in the tree rather than trusted to derive().
        expect(json).toContain(`"content":"${expectedReadout}"`);
      }
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

  test('axes and ticks do not move while an area_between sweep crosses a crossing', () => {
    // The harder version of the same invariant. Between these two values the
    // shaded region gains a whole extra lobe (the curves cross at x = 1), so
    // the animated path changes shape and not just width — and the element
    // COUNT must still be identical, because the lobes are sub-paths of one
    // `d` rather than separate elements. scaffoldingDiffs reports a count
    // mismatch first, so this asserts both things at once.
    const before = renderWidgetTree(mod, CASES.area_between_crossing, { shade_to: 0.4 });
    const after = renderWidgetTree(mod, CASES.area_between_crossing, { shade_to: 1.7 });
    expect(scaffoldingDiffs(before, after)).toEqual([]);
  });

  /**
   * THE PICTURE AND THE NUMBER, CHECKED AGAINST EACH OTHER.
   *
   * Everything else here checks the readout string or the maths; this measures
   * the SHAPE. Shoelace over the shaded path's own sub-polygons gives its area
   * in px², and px² = world area x (pxPerX·pxPerY) — one constant, whatever
   * `shade_to` is, because the frame does not move while it sweeps. So if the
   * ratio of drawn pixels to reported area is the SAME NUMBER at five values
   * of shade_to that straddle both crossings, the drawing and the arithmetic
   * are describing the same region at every one of them.
   *
   * Deliberately scale-free: the test never computes pxPerX or pxPerY, so it
   * cannot inherit a mistake from the layout code it is checking.
   */
  test('the shaded pixels and the reported area keep a constant ratio across a sweep', () => {
    /*
     * Per-lobe absolute area, summed — NOT the absolute value of the sum.
     * Consecutive lobes wind in opposite directions (f is above g on one side
     * of a crossing and below it on the other), so summing signed areas makes
     * them cancel: the same cancellation ∫|f−g| exists to prevent, reappearing
     * in the checker. Written the wrong way first, and it under-reported by 6%
     * on the two-lobe case, which is how it got noticed.
     */
    const shoelace = (d: string): number => {
      let total = 0;
      for (const sub of d.split('M').slice(1)) {
        const nums = sub.match(/-?\d+\.?\d*/g) ?? [];
        const pts: [number, number][] = [];
        for (let i = 0; i + 1 < nums.length; i += 2) pts.push([+nums[i], +nums[i + 1]]);
        let lobe = 0;
        for (let i = 0; i < pts.length; i++) {
          const [x0, y0] = pts[i];
          const [x1, y1] = pts[(i + 1) % pts.length];
          lobe += x0 * y1 - x1 * y0;
        }
        total += Math.abs(lobe) / 2;
      }
      return total;
    };

    const shadedPath = (tree: unknown): string => {
      const found: string[] = [];
      const walk = (n: unknown): void => {
        if (!n || typeof n !== 'object') return;
        if (Array.isArray(n)) return n.forEach(walk);
        const e = n as { type?: string; props?: { d?: string }; children?: unknown };
        // The shaded region is the only CLOSED path in this widget; f and g
        // are drawn open.
        if (e.props?.d && e.props.d.includes('Z')) found.push(e.props.d);
        walk(e.children);
      };
      walk(tree);
      expect(found).toHaveLength(1);
      return found[0];
    };

    const params = CASES.area_between_crossing;
    const ratios: number[] = [];
    for (const shadeTo of [-0.6, 0.25, 0.9, 1.4, 2]) {
      const tree = renderWidgetTree(mod, { ...params, shade_to: shadeTo }, { shade_to: shadeTo });
      const reported = mod.computeDerived({ ...params, shade_to: shadeTo }).area;
      expect(reported).toBeGreaterThan(0);
      ratios.push(shoelace(shadedPath(tree)) / reported);
    }
    // Every ratio is the same px-per-unit-area constant. A 0.5% band covers
    // the polygon's own sampling error against the true curve; a wrong region
    // is out by tens of percent, not tenths.
    for (const r of ratios) expect(r / ratios[0]).toBeCloseTo(1, 2);
  });

  test('the region gains a lobe as the sweep passes a crossing, without gaining an element', () => {
    // Shading runs from −1, and the curves cross at 0 and at 1. So [−1, 0.4]
    // is two closed sub-regions and [−1, 1.7] is three. Only the shaded path
    // is closed — f and g are drawn open — so counting 'Z' in the tree counts
    // lobes, and the element count is asserted separately by scaffoldingDiffs
    // above.
    const twoLobes = JSON.stringify(renderWidgetTree(mod, CASES.area_between_crossing, { shade_to: 0.4 }));
    const threeLobes = JSON.stringify(renderWidgetTree(mod, CASES.area_between_crossing, { shade_to: 1.7 }));
    const zCount = (json: string) => (json.match(/Z/g) ?? []).length;
    expect(zCount(twoLobes)).toBe(2);
    expect(zCount(threeLobes)).toBe(3);
  });
});

/**
 * data_table_trend's risk is not "does it draw" but "do two labels collide" —
 * verify-render treats ANY text overlap as a hard error, and a table is almost
 * entirely text. The worst case is the widest legal payload (8 rows x 4
 * numeric columns) at the smallest board, so that is rendered explicitly
 * rather than only the default.
 */
/**
 * xy_plot area_between — THE CORNERS, not the endpoints.
 *
 * CLAUDE.md §3: a schema with N numeric params has 2^N corners and the defects
 * hide in the combinations. Sweeping one param at a time misses every bug that
 * needs two things extreme at once — which is how projectile_motion's three
 * post-sweep defects were found, and how the y-tick overflow this widget's
 * validate() now rejects had been sitting in the v1 schema unnoticed.
 *
 * Five binary axes, so 32 payloads: curve kind of f, curve kind of g,
 * coefficient magnitude (0.01 vs the 100 clamp), domain (narrow vs the ±1000
 * clamp), and whether the shading covers the whole domain or an inner slice
 * that puts the crossings in different places. Every accepted one is written
 * out at ALL THREE board sizes and goes through scripts/verify-render.mjs with
 * the rest of build/trees — the gate is the assertion, not a copy of it in
 * here. 343x236 is the binding case and is checked at that box by
 * verify-tree-dir.mjs's `.spec-small` suffix.
 *
 * A rejected corner is a PASS, not a gap: it means validate() and the gate
 * agree about a payload that cannot be drawn legibly. What would be a failure
 * is a corner validate() accepts and the gate then rejects, and there is no
 * assertion for that here because there does not need to be — the gate runs
 * over what this writes.
 */
describe('xy_plot area_between corners', () => {
  const mod = REGISTRY.xy_plot!;

  const KINDS = ['line', 'parabola'] as const;
  const MAGS = [0.01, 100];
  const DOMAINS: [number, number][] = [
    [-0.5, 0.5],      // narrow
    [-1000, 1000],    // the x clamp
  ];

  const corners: { name: string; params: XyPlotParams }[] = [];
  for (const kf of KINDS) {
    for (const kg of KINDS) {
      for (const mag of MAGS) {
        for (const [xMin, xMax] of DOMAINS) {
          for (const inner of [false, true]) {
            const span = xMax - xMin;
            corners.push({
              name: [
                kf === 'line' ? 'L' : 'P',
                kg === 'line' ? 'L' : 'P',
                mag === 100 ? 'big' : 'tiny',
                span > 100 ? 'wide' : 'narrow',
                inner ? 'inner' : 'full',
              ].join('-'),
              params: {
                ...mod.defaults,
                mode: 'area_between' as const,
                curve: kf, a: mag, b: mag / 2, c: 0,
                curve2: kg, a2: -mag, b2: 0, c2: mag,
                x_min: xMin, x_max: xMax,
                shade_from: inner ? xMin + span * 0.25 : xMin,
                shade_to: inner ? xMax - span * 0.25 : xMax,
              },
            });
          }
        }
      }
    }
  }

  test('there are 32 corners and validate() never throws on any of them', () => {
    expect(corners).toHaveLength(32);
    for (const { params } of corners) {
      expect(() => mod.validate(params)).not.toThrow();
    }
  });

  test('the sweep is not vacuous — some corners are accepted and some refused', () => {
    const results = corners.map((k) => mod.validate(k.params).ok);
    expect(results.filter(Boolean).length).toBeGreaterThan(4);
    expect(results.filter((ok) => !ok).length).toBeGreaterThan(0);
  });

  test('every refusal says something a person can act on', () => {
    for (const { name, params } of corners) {
      const r = mod.validate(params);
      if (r.ok) continue;
      expect(r.errors.length).toBeGreaterThan(0);
      for (const e of r.errors) {
        expect(typeof e).toBe('string');
        expect(e.length).toBeGreaterThan(20);
      }
      expect(`${name}: ${r.errors.join(' | ')}`).toMatch(/edge|gridline|curve|interval|spacing/);
    }
  });

  describe.each(corners)('$name', ({ name, params }) => {
    const result = mod.validate(params);

    test.each([
      ['', BOARD],
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders through the gate at %s', (label, box) => {
      if (!result.ok) {
        // Refused by the schema, so it can never reach a board. Nothing to
        // render; the assertion is that the refusal happened at all.
        expect(result.ok).toBe(false);
        return;
      }
      const p = result.params;
      const tree = renderWidgetTreeAt(mod, p, { shade_to: p.shade_to }, box.width, box.height);
      expect(tree).not.toBeNull();
      const json = JSON.stringify(tree);
      expect(json).not.toContain('NaN');
      expect(json).toContain('"d":');

      mkdirSync(outDir, { recursive: true });
      const suffix = label ? `.${label}` : '';
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.corner-${name}${suffix}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });
});

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
    // THE DEFAULT LANGUAGE, at 40 characters — exactly MAX_CAPTION_CHARS, so
    // this is also the longest caption validate() will pass through unsliced.
    // Same payload as `numeric`; only the caption differs.
    hinglish: {
      ...mod.defaults,
      caption: 'Dekho, period 2 mein ionisation enthalpy',
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
    // THE DEFAULT LANGUAGE. Same ring as `ring`, whose English caption is
    // 'Citric acid cycle' (17) — this is the same sentence at 31.
    hinglish: {
      ...mod.defaults,
      caption: 'Citric acid cycle ke aath steps',
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
    // n = 8 -> 15 characters, the boundary flow-math.ts derives at 343x236.
    // It was 16 while chrome.ts assumed 0.58 em per code unit for every
    // family; node labels are drawn in `theme.monoFontFamily`, and Menlo's
    // advance is 0.60205 em exactly.
    for (const s of p.nodes) expect(s.length).toBeLessThanOrEqual(15);
    expect(p.nodes[0]).toBe('Phosphoenolpyru');
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

  const CASES: Record<'chain' | 'fan' | 'converge' | 'wurtz' | 'hinglish', ReactionSchemeParams> = {
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

    // THE DEFAULT LANGUAGE. The same scheme as `chain`, whose English caption
    // is 'Ethane to benzene' (17) — this is the same sentence at 34.
    hinglish: {
      ...mod.defaults,
      caption: 'Ethane se benzene banane ka raasta',
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
    // Written when reaction_scheme was not yet in the REGISTRY that
    // derived-consistency.test.ts iterates. It is now, so this duplicates that
    // check -- kept deliberately: it asserts against the module directly, so
    // it still holds if the widget is ever unregistered.
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

    // THE DEFAULT LANGUAGE. This widget's `label` IS its caption slot —
    // readoutText() passes it to fitReadout as one. Same molecule as `h2o`,
    // whose English label is 'Water' (5); a Hinglish Drona names it in 20.
    // See the note under the readout assertion below: this widget's VALUE is
    // long enough that no caption of realistic length survives 343x236, in
    // either language. The fixture is here to hold that on record.
    hinglishLabel: {
      mode: 'electron_domain', centre: 'O', bond_pairs: 2, lone_pairs: 2,
      ligands: ['H', 'H'], bond_orders: [1, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Paani ka bent aakaar', highlight_site: -1,
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

/**
 * circuit_network is verified here BEFORE it is registered — registry wiring
 * is a separate serial step, so `REGISTRY.circuit_network` does not exist yet
 * and the module is imported directly. Everything else is the same harness.
 *
 * The cases are chosen for the three risks this widget actually has, not for
 * variety:
 *
 * FIRST, EVERY TOPOLOGY LAYS OUT DIFFERENTLY. Six named shapes means six
 * independent collision problems, so all six are rendered at all three boards
 * rather than the default one — `series_parallel`'s stacked bank labels, the
 * `bridge` diamond's four diagonal arms, and `two_loop`'s three vertical
 * branches each place text somewhere no other topology does.
 *
 * SECOND, THE GLYPH FLOOR. The source and the galvanometer are both circles at
 * GLYPH_R, so verify-render assertion 8 demands 24pt between them, and only
 * `bridge` puts both on one board. That is the case the half-diagonal floor
 * exists for.
 *
 * THIRD, THE PARAMS/MOTION SPLIT, for BOTH animatable params. `t_frac` moves a
 * charge quad and a current arrow; `bridge_delta` moves a needle. If either
 * ever dragged a label with it, the widget would be label-terminated and
 * therefore snap-only — that is what the invariance test below decides, rather
 * than the module's comment.
 */
describe('circuit_network', () => {
  const mod = circuitNetwork;
  const R = (name: string, value: number) => ({ kind: 'resistor' as const, name, value });

  const CASES: Record<string, CircuitNetworkParams> = {
    // Reference 1 — NCERT Cl.12 Ch.3, two banks in series behind a real cell.
    series_parallel: { ...mod.defaults },

    // Reference 2 — the metre bridge. The ONLY board carrying two GLYPH_R
    // circles, i.e. the only one assertion 8 can fail on.
    bridge: {
      topology: 'bridge',
      elements: [
        R('P', 6), R('Q', 4), R('R', 3), R('S', 5),
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
      source_v: 2, internal_r: 0, bridge_null_cm: 53.5,
      show_current: false, t_frac: 0, bridge_delta: 0.6,
      caption: 'Metre bridge',
    },

    // Reference 3 — RC charging. The case the charge fill exists for.
    rc: {
      topology: 'series',
      elements: [R('R', 20000), { kind: 'capacitor', name: 'C', value: 5 }],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0.4, bridge_delta: 0,
      caption: 'RC charging',
    },

    // Reference 4 — three capacitors in series. r_eq is 0 here, which is the
    // readout's degenerate branch and a real payload rather than a corner.
    caps: {
      topology: 'series',
      elements: [
        { kind: 'capacitor', name: 'C1', value: 2 },
        { kind: 'capacitor', name: 'C2', value: 3 },
        { kind: 'capacitor', name: 'C3', value: 4 },
      ],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: false, t_frac: 1, bridge_delta: 0,
      caption: 'Capacitors in series',
    },

    // Reference 5 — series LCR at NCERT's own resonance values.
    lcr: {
      topology: 'series',
      elements: [
        R('R', 40),
        { kind: 'inductor', name: 'L', value: 5000 },
        { kind: 'capacitor', name: 'C', value: 80 },
      ],
      source_v: 230, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Series LCR',
    },

    // The branch cap, at the widest labels the schema admits.
    parallel: {
      topology: 'parallel',
      elements: [R('R1', 4700), R('R2', 12), R('R3', 6)],
      source_v: 6, internal_r: 0.5, bridge_null_cm: 50,
      show_current: true, t_frac: 0.5, bridge_delta: 0,
      caption: 'Three in parallel',
    },

    ladder: {
      topology: 'ladder',
      elements: [R('R1', 10), R('R2', 20), R('R3', 30), R('R4', 40)],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0.25, bridge_delta: 0,
      caption: 'Ladder network',
    },

    two_loop: {
      topology: 'two_loop',
      elements: [R('R1', 10), R('R2', 20), R('R3', 30), R('R4', 40), R('R5', 50), R('R6', 60)],
      source_v: 24, internal_r: 2, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Two-mesh network',
    },

    /*
     * A Hindi caption. It is here because the two halves of the width
     * contract once disagreed about it: verify-render.mjs charged any string
     * containing Devanagari 0.75 per code unit while chrome's fitReadout
     * budgeted 0.58, so this readout ran off the 343 and 495 boards while
     * passing at 900.
     *
     * Neither number was measured, and both are gone. chrome.ts and
     * verify-render.mjs now read one generated table and price Devanagari
     * from Anek Devanagari's own per-codepoint advances — under which this
     * caption is NARROWER than the Latin model said, not wider, because four
     * of its code units are matras with no advance at all. The tree this
     * writes is still the fixture for the two staying in step.
     */
    hindi_caption: {
      topology: 'series_parallel',
      elements: [R('R1', 4), R('R2', 4), R('R3', 12), R('R4', 6)],
      source_v: 16, internal_r: 1, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'दो बैंक श्रेणी में जुड़े हैं और यही',
    },

    // THE DEFAULT LANGUAGE, and the case this widget actually ships. Same
    // network as `series_parallel`, whose English caption is 'Two banks in
    // series' (19); this is the same sentence a Hinglish Drona says, at 33.
    hinglish_caption: {
      ...mod.defaults,
      caption: 'Do bank series mein jude hue hain',
    },

    // The kinds that only a single reducible path may carry: a switch, and a
    // lamp (whose glyph is deliberately NOT GLYPH_R — see LAMP_R).
    switched: {
      topology: 'series',
      elements: [
        { kind: 'switch', name: 'S', value: 1 },
        R('R', 4700),
        { kind: 'lamp', name: 'L1', value: 12 },
      ],
      source_v: 6, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0.8, bridge_delta: 0,
      caption: 'Lamp and switch',
    },
  };

  test('every case is a payload validate() would actually admit', () => {
    // The schema's legal range must be a SUBSET of what renders correctly — so
    // the trees below have to come from inside the schema, not beside it.
    for (const [name, params] of Object.entries(CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
    }
  });

  test.each(Object.keys(CASES))('renders %s and writes its tree', (name) => {
    const params = CASES[name];
    const tree = renderWidgetTree(mod, params, {
      t_frac: params.t_frac,
      bridge_delta: params.bridge_delta,
    });
    expect(tree).not.toBeNull();
    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
      JSON.stringify(tree, null, 1)
    );
    const json = JSON.stringify(tree);
    // Wires are Lines, symbols are Paths and Lines, glyphs are Circles. A tree
    // missing any of the three is a schematic with nothing to read.
    expect(json).toContain('RNSVGLine');
    expect(json).toContain('RNSVGCircle');
    expect(json).toContain('"d":');
    // Every element must reach the tree by name — a silently dropped slot is
    // the failure a bare "did it render" check would miss.
    for (const el of params.elements) {
      expect(json).toContain(`"content":"${el.name}"`);
    }
  });

  describe.each(Object.keys(CASES))('%s at small boards', (name) => {
    const params = CASES[name];
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const tree = renderWidgetTreeAt(
        mod,
        params,
        { t_frac: params.t_frac, bridge_delta: params.bridge_delta },
        box.width,
        box.height
      );
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('the network does not move while t_frac charges (CLAUDE.md §3)', () => {
    for (const name of Object.keys(CASES)) {
      const a = renderWidgetTree(mod, CASES[name], { t_frac: 0 });
      const b = renderWidgetTree(mod, CASES[name], { t_frac: 1 });
      expect([name, scaffoldingDiffs(a, b)]).toEqual([name, []]);
    }
  });

  test('the bridge does not move while bridge_delta deflects (CLAUDE.md §3)', () => {
    // The needle is a Path and may move; every Line and Text here is
    // scaffolding and may not. Checked on EVERY case, not just `bridge`,
    // because off a bridge the needle is parked by opacity rather than
    // unmounted — and an unmounted element would change the element count,
    // which scaffoldingDiffs reports.
    for (const name of Object.keys(CASES)) {
      const a = renderWidgetTree(mod, CASES[name], { bridge_delta: -1 });
      const b = renderWidgetTree(mod, CASES[name], { bridge_delta: 1 });
      expect([name, scaffoldingDiffs(a, b)]).toEqual([name, []]);
    }
  });

  test('both animatable params at 0 is a drawable frame, not a NaN', () => {
    // motionFor defaults an unsupplied key to 0, so 0 has to render — for a
    // charge fill that means a zero-height quad with real coordinates rather
    // than an absent element.
    for (const name of Object.keys(CASES)) {
      const tree = renderWidgetTree(mod, CASES[name], {});
      expect([name, /NaN|Infinity/.test(JSON.stringify(tree))]).toEqual([name, false]);
    }
  });

  test('a payload with no capacitor draws nothing at the board origin', () => {
    // The charge fill is always mounted, which is what keeps the element count
    // constant across motion values — but parked at (0,0) it stretched
    // verify-render's ink-coverage bbox to the board's top-left corner
    // (series_parallel measured 93.6% of a 343x236 board where its ink is
    // 68.9%), so assertion 2 passed for the wrong reason. It is parked on the
    // source glyph instead, exactly as the off-bridge needle is.
    for (const name of ['series_parallel', 'two_loop', 'switched']) {
      const json = JSON.stringify(renderWidgetTree(mod, CASES[name], {}));
      expect([name, json.includes('M0.00 0.00L0.00 0.00')]).toEqual([name, false]);
    }
  });

  test('derived matches what computeDerived actually returns', () => {
    // derived-consistency.test.ts iterates the REGISTRY, which circuit_network
    // is not in yet. Same assertion, made directly, so registration cannot be
    // the first time this is checked.
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });
});

/**
 * lines_planes_3d is verified here BEFORE it is registered — registry wiring
 * is a separate serial step, so `REGISTRY.lines_planes_3d` does not exist yet
 * and the module is imported directly. Everything else is the same harness.
 *
 * Its cases come from `../lines-planes-3d/reference-cases`, the same list its
 * own maths suite imports, so the two cannot drift.
 *
 * The risks this widget actually has, which is what the cases are chosen for:
 *
 * FIRST, THE PROJECTION. Every other widget in this harness draws in the plane
 * it computes in. This one draws a 3-D figure through an orthographic camera,
 * so a payload that is geometrically perfect can still collapse — a line along
 * the camera's line of sight projects to a point, a plane perpendicular to it
 * is edge-on. `validate()` refuses both (see space-math's fitProblems); what
 * the trees prove is that the ADMITTED ones survive all three boards.
 *
 * SECOND, LABEL DENSITY. Up to nine labels sit on the figure itself rather
 * than in a corner — P, F, P', L, L1, L2, n, X, θ, φ, p1, p2, x, y, z — and
 * verify-render treats any two overlapping text boxes as a hard error. The
 * placer is greedy first-fit over eight compass slots; `axes_on` is the case
 * that loads it, with three extra axis labels no other case has.
 *
 * THIRD, NO ANIMATABLE PARAMS AT ALL, and that is load-bearing rather than
 * lazy: every moving thing here terminates in a Text, and the camera auto-fits
 * to the scene, so a tween would move the scaffolding twice over. The
 * params/motion invariance test other widgets run has nothing to vary here,
 * so the guard below asserts the empty `animatable` directly instead — a
 * silent regression to a non-empty list is the thing worth catching.
 */
describe('free_body_forces', () => {
  const mod = freeBodyForces;
  const FBD_CASES: Record<string, object> = {
    defaults: mod.defaults,
    'terminal-velocity': {
      mode: 'fbd', body: 'sphere', context: 'none',
      forces: [
        { label: 'W', angle_deg: 270, magnitude_rel: 1 },
        { label: 'F_B', angle_deg: 90, magnitude_rel: 0.4 },
        { label: 'F_v', angle_deg: 114, magnitude_rel: 0.6 },
      ],
      caption: 'At terminal velocity: W = F_B + F_v',
    },
    'head-to-tail-closed': {
      mode: 'head_to_tail', context: 'none',
      forces: [
        { label: 'P', angle_deg: 0, magnitude_rel: 1 },
        { label: 'Q', angle_deg: 120, magnitude_rel: 1 },
        { label: 'R', angle_deg: 240, magnitude_rel: 1 },
      ],
    },
  };

  test('every case is a payload validate() would actually admit', () => {
    for (const [name, params] of Object.entries(FBD_CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
    }
  });

  test.each(Object.keys(FBD_CASES))('renders %s and writes its tree', (name) => {
    const r = mod.validate(FBD_CASES[name]);
    if (!r.ok) throw new Error(r.errors.join(', '));
    const tree = renderWidgetTree(mod, r.params);
    expect(tree).not.toBeNull();
    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
      JSON.stringify(tree, null, 1)
    );
    const json = JSON.stringify(tree);
    // Arrows are Lines with Path heads; every force terminates in a Text
    // label. A tree without all three is not a free-body diagram.
    expect(json).toContain('RNSVGLine');
    expect(json).toContain('RNSVGPath');
    expect(json).toContain('RNSVGText');
  });

  describe.each(Object.keys(FBD_CASES))('%s at small boards', (name) => {
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const r = mod.validate(FBD_CASES[name]);
      if (!r.ok) throw new Error(r.errors.join(', '));
      const tree = renderWidgetTreeAt(mod, r.params, {}, box.width, box.height);
      expect(tree).not.toBeNull();
    });
  });
});

describe('lines_planes_3d', () => {
  const mod = linesPlanes3d;
  const CASES = LINES_PLANES_CASES;

  test('every case is a payload validate() would actually admit', () => {
    // The schema's legal range must be a SUBSET of what renders correctly — so
    // the trees below have to come from inside the schema, not beside it.
    for (const [name, params] of Object.entries(CASES)) {
      const r = mod.validate(params);
      expect([name, r.ok ? [] : r.errors]).toEqual([name, []]);
    }
  });

  test.each(Object.keys(CASES))('renders %s and writes its tree', (name) => {
    const params = CASES[name];
    const tree = renderWidgetTree(mod, params);
    expect(tree).not.toBeNull();
    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${name}.json`),
      JSON.stringify(tree, null, 1)
    );
    const json = JSON.stringify(tree);
    // Lines are the objects, Paths are the faces and arrowheads, Circles are
    // the marked points. A tree missing any of the three is not this figure.
    expect(json).toContain('RNSVGLine');
    expect(json).toContain('RNSVGPath');
    expect(json).toContain('RNSVGCircle');
    // The readout must carry the derived numbers, not a typed copy of them.
    expect(json).toContain('RNSVGText');
  });

  describe.each(Object.keys(CASES))('%s at small boards', (name) => {
    test.each([
      ['real-small', REAL_SMALL],
      ['spec-small', SPEC_SMALL],
    ])('renders at the %s board box (%o)', (label, box) => {
      const tree = renderWidgetTreeAt(mod, CASES[name], {}, box.width, box.height);
      expect(tree).not.toBeNull();
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        resolve(outDir, `${mod.id}@${mod.version}.${name}.${label}.json`),
        JSON.stringify(tree, null, 1)
      );
    });
  });

  test('animatable is empty, and that is the contract not an omission', () => {
    // CLAUDE.md §3: moving geometry that terminates in a label cannot animate,
    // because SCAFFOLDING_TYPES includes Text/TSpan. Every drawn object here
    // is label-terminated. Adding an animatable key would also break the
    // auto-fit, which recomputes the world scale from the scene.
    expect(mod.animatable).toEqual([]);
  });

  test('the figure is identical however `motion` is populated', () => {
    // With no animatable params `motionFor` returns {}, so the widget cannot
    // read a SharedValue even by accident. Asserted rather than assumed:
    // a widget that reached into `motion` for an unlisted key would render
    // differently here, and scaffoldingDiffs would not be run to catch it.
    for (const name of Object.keys(CASES)) {
      const a = renderWidgetTree(mod, CASES[name], { anything: 0 });
      const b = renderWidgetTree(mod, CASES[name], { anything: 1 });
      expect([name, scaffoldingDiffs(a, b)]).toEqual([name, []]);
      expect(JSON.stringify(a)).toEqual(JSON.stringify(b));
    }
  });

  test('no NaN or Infinity reaches any prop, at any board size', () => {
    for (const name of Object.keys(CASES)) {
      for (const box of [BOARD, REAL_SMALL, SPEC_SMALL]) {
        const json = JSON.stringify(
          renderWidgetTreeAt(mod, CASES[name], {}, box.width, box.height)
        );
        expect([name, box.width, /NaN|Infinity/.test(json)]).toEqual([name, box.width, false]);
      }
    }
  });

  test('derived matches what computeDerived actually returns', () => {
    // derived-consistency.test.ts iterates the REGISTRY, which lines_planes_3d
    // is not in yet. Same assertion, made directly, so registration cannot be
    // the first time this is checked.
    expect(Object.keys(mod.computeDerived(mod.defaults)).sort()).toEqual([...mod.derived].sort());
    for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  });
});
