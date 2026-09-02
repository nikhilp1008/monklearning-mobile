/**
 * Shared render helpers for the widget verification harness (M2).
 *
 * Every render goes through `renderTree`, which wraps `TestRenderer.create` in
 * `act()`. Without that, React 19's scheduler defers the actual commit to a
 * later microtask (`scheduler.native`'s `Immediate`), `.toJSON()` returns
 * `null` synchronously, and Jest tears the environment down before the
 * deferred commit runs — "import after environment torn down". This
 * reproduces with zero Reanimated involved; it is a React 19 + Jest fake-timer
 * interaction, not a Reanimated one. Confirmed empirically before writing
 * anything else in this suite — see jest.config.js's header.
 */
import React from 'react';
import TestRenderer, { act, type ReactTestRenderer } from 'react-test-renderer';
import type { SharedValue } from 'react-native-reanimated';

import type { WidgetModule, WidgetRenderProps, WidgetServices, WidgetTheme } from '../types';

export const BOARD_WIDTH = 900;
export const BOARD_HEIGHT = 430;

/** A full theme — every widget's Component may reference any of these seven
 *  keys, and `strict` TS plus a real component means a partial object is not
 *  enough even for a "just render it" test. */
export const TEST_THEME: WidgetTheme = {
  ink: '#1C1A16',
  inkMuted: '#57534B',
  rule: 'rgba(28,26,22,.12)',
  accent: '#9A6A12',
  surface: '#FCFAF4',
  fontFamily: 'AnekLatin_400Regular',
  monoFontFamily: 'Menlo',
};

/** Rejects rather than pretending — no widget in this suite calls it, and a
 *  widget that started calling it without a real cache would be a bug this
 *  should surface, not silently satisfy. */
export const TEST_SERVICES: WidgetServices = {
  resolveStructure: async (ref: string) => {
    throw new Error(`test-utils: no structure cache — asked to resolve ${ref}`);
  },
};

/** A plain `{ value }` stub for a motion key — sufficient once
 *  `react-native-reanimated/mock`'s `useAnimatedProps` is calling the worklet
 *  eagerly rather than deferring to the UI thread; see jest.config.js. */
export function motionStub(value: number): SharedValue<number> {
  return { value } as SharedValue<number>;
}

/** Builds the full `motion` record a widget's Component expects, from a plain
 *  `{ key: value }` map — every `animatable` key must be present or the
 *  widget's own worklets will read `undefined`. */
export function motionFor(
  animatable: readonly string[],
  values: Record<string, number>
): Record<string, SharedValue<number>> {
  const motion: Record<string, SharedValue<number>> = {};
  for (const key of animatable) {
    motion[key] = motionStub(values[key] ?? 0);
  }
  return motion;
}

/** Renders one widget's Component and returns its serialised tree.
 *
 * `mod.Component` is typed as `ComponentType<WidgetRenderProps<P>>`, which
 * `React.createElement` accepts directly with no `any` — the `object` bound
 * `WidgetModule` uses for its own generic parameter is enough. */
export function renderWidgetTree<P extends object>(
  mod: WidgetModule<P>,
  params: P,
  motionValues: Record<string, number> = {}
): unknown {
  const props: WidgetRenderProps<P> = {
    params,
    motion: motionFor(mod.animatable, motionValues),
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    theme: TEST_THEME,
    services: TEST_SERVICES,
  };

  let renderer: ReactTestRenderer;
  act(() => {
    renderer = TestRenderer.create(React.createElement(mod.Component, props));
  });
  return renderer!.toJSON();
}

/** Elements whose props must NEVER differ between two renders that share
 *  `params` but differ only in `motion` — CLAUDE.md §3's params/motion
 *  invariant, stated as a check rather than a comment. Anything else (Path,
 *  Circle, Ellipse, Polygon/Polyline) is where animated geometry is expected
 *  to live and is allowed to change. */
const SCAFFOLDING_TYPES = new Set([
  'RNSVGLine',
  'Line',
  'RNSVGText',
  'Text',
  'SvgText',
  'RNSVGTSpan',
]);

interface TreeNode {
  type: string;
  props?: Record<string, unknown>;
  children?: unknown;
}

function flatten(node: unknown, out: TreeNode[] = []): TreeNode[] {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) {
    for (const n of node) flatten(n, out);
    return out;
  }
  const n = node as TreeNode;
  out.push(n);
  flatten(n.children, out);
  return out;
}

/**
 * Finds every scaffolding element whose props differ between two renders of
 * the SAME widget at the SAME params but different `motion` values, and
 * returns a description of each — empty means the invariant holds.
 *
 * Walks both trees positionally rather than matching by prop identity: two
 * renders of the same component at the same params produce the same element
 * order and count (nothing here conditionally renders on the animated value —
 * if it did, that would itself be worth catching, and a length mismatch below
 * does exactly that).
 */
export function scaffoldingDiffs(treeA: unknown, treeB: unknown): string[] {
  const flatA = flatten(treeA);
  const flatB = flatten(treeB);
  const diffs: string[] = [];

  if (flatA.length !== flatB.length) {
    diffs.push(
      `element count differs between motion values: ${flatA.length} vs ${flatB.length} — something is conditionally rendered on an animated value`
    );
    return diffs;
  }

  for (let i = 0; i < flatA.length; i++) {
    const a = flatA[i];
    const b = flatB[i];
    if (a.type !== b.type) {
      diffs.push(`element ${i}: type changed ${a.type} -> ${b.type}`);
      continue;
    }
    if (!SCAFFOLDING_TYPES.has(a.type)) continue; // geometry is allowed to move
    const propsA = JSON.stringify(a.props ?? {});
    const propsB = JSON.stringify(b.props ?? {});
    if (propsA !== propsB) {
      diffs.push(`${a.type} #${i} moved between motion values: ${propsA} -> ${propsB}`);
    }
  }
  return diffs;
}
