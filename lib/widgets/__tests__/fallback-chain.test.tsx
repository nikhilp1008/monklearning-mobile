/**
 * P3 — an undrawable payload never leaves the board blank.
 *
 * Before this the `!resolved` branch was two lines: draw `event.svg` if there
 * is one, else `return null`. Null is a blank board, and on 2026-09-23 that
 * is exactly what an Ecosystem turn gave the 19 Sep build — eleven times,
 * because a slot-1 board event carries a `payload` and never an `svg`, so the
 * `if` never fired and the `return null` always did.
 *
 * P1 removes the cause server-side. This is the belt and braces for every
 * build P1 cannot reach: one already installed, one talking to an older API,
 * one whose manifest did not arrive.
 *
 * The registry is mocked WITHOUT comparison_table — the 19 Sep registry,
 * since comparison_table landed 20 Sep in f5ff1c3.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { createFigureResolver } from '../labelled-figure/figure-resolver';
import type { FigureRecord } from '../labelled-figure/figure-resolver';
import { TEST_SERVICES, TEST_THEME } from './test-utils';

jest.mock('../registry', () => {
  const real = jest.requireActual('../registry');
  const trimmed = Object.fromEntries(
    Object.entries(real.REGISTRY).filter(([id]) => id !== 'comparison_table'));
  return {
    ...real,
    REGISTRY: trimmed,
    REGISTRY_MANIFEST: real.REGISTRY_MANIFEST.filter(
      (e: { id: string }) => e.id !== 'comparison_table'),
    lookup: (id: string, version: number) => {
      const mod = (trimmed as Record<string, { version: number } | undefined>)[id];
      if (!mod) return null;
      return version > mod.version ? null : mod;
    },
  };
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { BoardWidget } = require('../BoardWidget');

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="430">'
          + '<rect width="900" height="430" fill="#fff"/></svg>';

/** A comparison_table payload — a widget the 19 Sep build does not carry. */
const UNDRAWABLE = {
  widget: 'comparison_table', version: 1,
  params: {
    kind: 'comparison', columns: ['Grazing', 'Detritus'],
    rows: ['Starts at'], cells: ['living plants', 'dead matter'],
    highlight: null, caption: 'Two food chains',
  },
};

function draw(event: object, extra: Record<string, unknown> = {}) {
  const gaps: [string, unknown][] = [];
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(
      <BoardWidget
        event={event as never} activeSeq={1} width={900} height={430}
        theme={TEST_THEME} services={TEST_SERVICES}
        onGap={(reason: string, detail: unknown) => gaps.push([reason, detail])}
        {...extra} />);
  });
  return { json: r.toJSON(), gaps: gaps.map((g) => g[0]) };
}

describe('the chain, rung by rung', () => {
  test('vacuity guard: the mocked registry really lacks comparison_table', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { REGISTRY, lookup } = require('../registry');
    expect(REGISTRY.comparison_table).toBeUndefined();
    expect(lookup('comparison_table', 1)).toBeNull();
    expect(lookup('field_lines', 1)).not.toBeNull();
  });

  test('rung 1: an svg on the event is drawn', () => {
    const { json } = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE, svg: SVG });
    expect(json).not.toBeNull();
  });

  test('rung 3: with no svg, the chapter fallback is drawn', () => {
    const { json, gaps } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE },
      { chapterFallbackSvg: SVG });
    expect(json).not.toBeNull();
    expect(gaps).toContain('unknown_widget');
    expect(gaps).toContain('fell_back_to_chapter_svg');
  });

  test('THE REGRESSION: no svg and no fallback used to be a silent blank', () => {
    // It is still blank — there is genuinely nothing to draw — but it is no
    // longer SILENT, and the gap says which kind of nothing it is. That
    // distinction is what P2's backfill is measured by.
    const { json, gaps } = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE });
    expect(json).toBeNull();
    expect(gaps).toContain('unknown_widget');
    expect(gaps).toContain('no_fallback_available');
  });

  test('every rung logs its OWN gap, so the feed can tell them apart', () => {
    // A board that fell two rungs and a board that fell none look identical
    // on screen. The feed is how P1's effect gets measured, so they must not
    // look identical there.
    const withSvg = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE, svg: SVG });
    const withChapter = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE },
                             { chapterFallbackSvg: SVG });
    const withNothing = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE });
    expect(withSvg.gaps).not.toContain('fell_back_to_chapter_svg');
    expect(withChapter.gaps).toContain('fell_back_to_chapter_svg');
    expect(withNothing.gaps).toContain('no_fallback_available');
  });
});

describe('rung 2 — the concept\'s plate', () => {
  const REC: FigureRecord = {
    asset_slug: 'test--plate', art_uri: 'https://example.invalid/a.svg',
    width: 900, height: 430, labels: [], groups: [],
  } as unknown as FigureRecord;

  test('a CACHED illustration is drawn instead of nothing', () => {
    const figures = createFigureResolver({
      fetch: async () => REC,
    } as never);
    (figures as unknown as { seed?: (r: FigureRecord) => void }).seed?.(REC);
    const { gaps } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE,
        illustration_slug: 'test--plate' },
      { figures });
    // Either it drew the plate, or the resolver had nothing cached and asked
    // for it. What it must NOT do is report a missing fallback while an
    // illustration slug is present and fetchable.
    expect(gaps).toContain('unknown_widget');
  });

  test('an UNCACHED slug asks for it rather than declaring nothing', () => {
    const asked: string[][] = [];
    const figures = {
      get: () => null,
      subscribe: () => () => {},
      prefetch: (slugs: string[]) => { asked.push(slugs); },
      cached: () => [],
    } as never;
    draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE,
           illustration_slug: 'test--plate' }, { figures });
    expect(asked).toEqual([['test--plate']]);
  });
});
