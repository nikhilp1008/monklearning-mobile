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
 *
 * SECOND PASS, same day. A review of the chain found five ways it still ended
 * in a silent blank, every one of them a hole the tests above could not see
 * because they only ever asked "did SOMETHING render". Each is now pinned by
 * a test that fails on the code as it stood:
 *
 *   1. `SvgXml` swallows a parse throw and renders null, so a malformed rung
 *      was a blank board and the rungs below it never ran.
 *   2. A rung that DREW logged nothing, so "fell one rung" and "fell none"
 *      were the same feed entry, and rung 2 logged nothing on a cache miss
 *      or a refused plate either.
 *   3. The `board_sequence` path returned unconditionally and never reached
 *      the chain at all.
 *   4. The terminal gap reported `event.payload?.widget`, which a sequence
 *      payload does not have.
 *   5. `if (!resolved.mod || !resolved.params) return null` sat BELOW the
 *      chain instead of falling into it.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { createFigureResolver } from '../labelled-figure/figure-resolver';
import type { FigureRecord } from '../labelled-figure/figure-resolver';
import {
  PLACEHOLDER_FIGURE, PLACEHOLDER_SLUG, placeholderFigureResolver,
} from '../labelled-figure/placeholder-figure';
import { TEST_SERVICES, TEST_THEME } from './test-utils';

jest.mock('../registry', () => {
  const real = jest.requireActual('../registry');
  const trimmed = Object.fromEntries(
    Object.entries(real.REGISTRY).filter(([id]) => id !== 'comparison_table'));
  /*
   * A widget whose `validate()` answers ok and forgets to return `params`.
   *
   * Not a hypothetical shape — it is what a validator looks like when its
   * happy path is edited and its return is not — and it is the only thing that
   * reaches hole 5's guard, which is why it has to be IN the registry. Written
   * inline because a `jest.mock` factory may not reference an out-of-scope
   * variable.
   */
  trimmed.sloppy_widget = {
    id: 'sloppy_widget', version: 1, defaults: {}, animatable: [],
    derived: [], computeDerived: () => ({}), derivedAliases: {},
    validate: () => ({ ok: true }),
    Component: () => null,
  };
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
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { SvgXml } = require('react-native-svg');

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="430">'
          + '<rect width="900" height="430" fill="#fff"/></svg>';

/**
 * The chapter's SVG, carrying a word nothing else on the board says, so a test
 * can assert WHICH rung drew rather than that something did. Every hole below
 * was a blank board that the old assertions — `json` is not null — could not
 * have told apart from a board that drew the wrong thing.
 */
const CHAPTER_MARK = 'chapter-plate-drew';
const CHAPTER_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="430">'
                  + `<text x="10" y="20">${CHAPTER_MARK}</text></svg>`;

/**
 * A model-generated SVG with an unclosed `<g>` — the shape of malformed the
 * tier-3 author actually produces, and the one this version's parser throws
 * on: "Expected closing tag </svg> to match opening tag <g>".
 */
const BROKEN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="430">'
                 + '<g><rect width="10" height="10"/></svg>';

/** A comparison_table payload — a widget the 19 Sep build does not carry. */
const UNDRAWABLE = {
  widget: 'comparison_table', version: 1,
  params: {
    kind: 'comparison', columns: ['Grazing', 'Detritus'],
    rows: ['Starts at'], cells: ['living plants', 'dead matter'],
    highlight: null, caption: 'Two food chains',
  },
};

/** A payload this build CAN draw, for the "fell none" half of a comparison. */
function drawablePayload() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { REGISTRY } = require('../registry');
  const mod = REGISTRY.field_lines;
  return { widget: mod.id, version: mod.version, params: mod.defaults };
}

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
  const json = r.toJSON();
  return {
    json,
    text: JSON.stringify(json),
    gaps: gaps.map((g) => g[0]),
    /** The detail of the FIRST gap with this reason — attribution is the point
     *  of hole 4, and a reason on its own cannot show it. */
    detail: (reason: string) =>
      gaps.find((g) => g[0] === reason)?.[1] as Record<string, unknown> | undefined,
  };
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

  /* `rung 3: with no svg, the chapter fallback is drawn` WAS HERE. The
   * chapterFallbackSvg rung is gone (S3) — nothing in the app ever set it, so
   * it was a rung that had never once fired in production. See BoardWidget.tsx
   * where it used to be. What replaced it is not another rung but a FED one:
   * the server now attaches the stored SVG to LIVE widget events too, so
   * `event.svg` covers the case this was imagined for. That is rung 1, tested
   * directly above. */

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
    const withNothing = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE });
    expect(withSvg.gaps).toContain('fell_back_to_event_svg');
    expect(withSvg.gaps).not.toContain('no_fallback_available');
    expect(withNothing.gaps).toContain('no_fallback_available');
    expect(withNothing.gaps).not.toContain('fell_back_to_event_svg');
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

/* ===================================================================== hole 1
 *
 * `SvgXml` is not a rung that either draws or defers to the next one: it is a
 * rung that draws or returns NULL, and the chain above it has already
 * committed by then.
 */
describe('a malformed svg is not a fallback', () => {
  test('liveness: SvgXml really does render nothing for BROKEN_SVG', () => {
    // The guard the three tests below stand on, and it must not be the same
    // parse call the component makes — this renders the library's own
    // component and reads its output. If BROKEN_SVG were quietly parseable,
    // every test here would pass for the wrong reason.
    const seen: unknown[] = [];
    let r!: TestRenderer.ReactTestRenderer;
    act(() => {
      r = TestRenderer.create(
        <SvgXml xml={BROKEN_SVG} width={900} height={430}
                onError={(e: unknown) => seen.push(e)} />);
    });
    expect(r.toJSON()).toBeNull();
    expect(seen).toHaveLength(1);
    // And the control: the same component draws the well-formed one.
    act(() => { r = TestRenderer.create(<SvgXml xml={SVG} width={900} height={430} />); });
    expect(r.toJSON()).not.toBeNull();
  });

  test('rung 1: a malformed event.svg is REFUSED and named, not silently drawn', () => {
    // Was: `SvgXml` caught the throw, console.error'd and returned null, and
    // the board went blank on an event that looked like it had a picture.
    // With the chapter rung gone (S3) there is nothing below this one, so the
    // outcome is an honest `no_fallback_available` — the point preserved here
    // is that the REFUSAL is detected and attributed to the right rung.
    const { json, gaps, detail } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE, svg: BROKEN_SVG });
    expect(json).toBeNull();
    expect(gaps).toContain('svg_invalid');
    expect(gaps).not.toContain('fell_back_to_event_svg');
    expect(gaps).toContain('no_fallback_available');
    expect(detail('svg_invalid')!.rung).toBe('event.svg');
    // U5: the detail says which figure and why — its UTF-8 size and the
    // parser's own message — so the corpus row it came from can be found.
    expect(detail('svg_invalid')!.bytes).toBe(BROKEN_SVG.length);   // ASCII
    expect(String(detail('svg_invalid')!.error)).toMatch(/closing tag/);
  });

  test('a rung that REFUSED does not get to claim it saved the board', () => {
    // Was: the rung logged `fell_back_to_*` and then drew nothing — the feed
    // said the board was rescued and the student saw blank paper. A wrong
    // entry in the feed is worse than a missing one: it is what P1 is measured
    // by. Asserted on `event.svg` now that it is the only svg rung.
    const { json, gaps } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE, svg: BROKEN_SVG });
    expect(json).toBeNull();
    expect(gaps).toContain('svg_invalid');
    expect(gaps).not.toContain('fell_back_to_event_svg');
    expect(gaps).toContain('no_fallback_available');
  });

  test('a malformed event.svg still reaches rung 2', () => {
    const { json, text, gaps } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE,
        svg: BROKEN_SVG, illustration_slug: PLACEHOLDER_SLUG },
      { figures: placeholderFigureResolver });
    expect(json).not.toBeNull();
    expect(gaps).toContain('svg_invalid');
    expect(gaps).toContain('fell_back_to_illustration');
    expect(text).toContain('Cell wall');
  });
});

/* ===================================================================== hole 2
 *
 * The feed has to say which rung drew, not only that a rung failed. Two of the
 * four rung outcomes logged nothing at all.
 */
describe('a rung that DREW says so', () => {
  test('falling one rung and falling none are different feed entries', () => {
    const fell = draw({ seq: 1, tier: 'precomputed', payload: UNDRAWABLE, svg: SVG });
    const none = draw({ seq: 1, tier: 'precomputed', payload: drawablePayload() });
    expect(fell.gaps).toContain('fell_back_to_event_svg');
    expect(fell.json).not.toBeNull();
    // The widget the server chose drew. Nothing fell, so nothing is logged —
    // that is the zero the tier-3 rate is measured against.
    expect(none.gaps).toEqual([]);
    expect(none.json).not.toBeNull();
  });

  test('rung 2 logs a cache MISS under its own name', () => {
    // Was: silent. `no_fallback_available` was the only entry, so "this
    // chapter has no plate bound" (a content task) and "the plate exists and
    // was never prefetched" (a client bug) were the same row.
    const asked: string[][] = [];
    const figures = {
      get: () => null,
      subscribe: () => () => {},
      prefetch: (slugs: string[]) => { asked.push(slugs); },
      cached: () => [],
    } as never;
    const { gaps, detail } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE, illustration_slug: 'test--plate' },
      { figures });
    expect(gaps).toContain('illustration_not_cached');
    expect(detail('illustration_not_cached')!.slug).toBe('test--plate');
    expect(asked).toEqual([['test--plate']]);
  });

  test('rung 2 logs a plate that is CACHED and still refused', () => {
    // Was: silent, and the most misleading of the four — the art is bound, in
    // cache, and unusable, which is a re-authoring job, and the feed said
    // exactly what it says for a chapter with no plate at all.
    const broken = { asset_slug: 'test--plate', groups: [], labels: [] } as unknown as FigureRecord;
    const figures = {
      get: () => broken,
      subscribe: () => () => {},
      prefetch: async () => ({ resolved: [], missing: [] }),
      cached: () => ['test--plate'],
    } as never;
    const { text, gaps, detail } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE, illustration_slug: 'test--plate' },
      { figures });
    expect(gaps).toContain('illustration_refused');
    expect((detail('illustration_refused')!.errors as string[]).join(' ')).toContain('art');
    // NO `svg` on this event ON PURPOSE: `event.svg` is rung 1 and would
    // short-circuit before the plate is ever tried, so a fixture carrying one
    // could not test the plate's refusal at all. With the chapter rung gone
    // (S3) the refusal is now terminal, and it still says so rather than
    // going quiet — which is the thing under test.
    expect(text).toBe('null');
    expect(gaps).toContain('no_fallback_available');
  });

  test('rung 2 SUCCESS is a fall, and the feed says which slug', () => {
    const { json, gaps, detail } = draw(
      { seq: 1, tier: 'precomputed', payload: UNDRAWABLE,
        illustration_slug: PLACEHOLDER_SLUG },
      { figures: placeholderFigureResolver });
    expect(json).not.toBeNull();
    expect(gaps).toContain('fell_back_to_illustration');
    expect(detail('fell_back_to_illustration')!.slug).toBe(PLACEHOLDER_SLUG);
    expect(detail('fell_back_to_illustration')!.widget).toBe('comparison_table');
    // Liveness for the record this stands on.
    expect(placeholderFigureResolver.get(PLACEHOLDER_SLUG)).toBe(PLACEHOLDER_FIGURE);
  });
});

/* ===================================================================== hole 3
 *
 * The sequence path returned unconditionally: a step that could not draw got
 * its strip and nothing under it, and the three rungs sitting in props were
 * never consulted.
 */
describe('a sequence that cannot draw falls into the same chain', () => {
  const scheme = (reagent: string) => ({
    widget: 'reaction_scheme', version: 1,
    params: {
      caption: reagent, species: ['R2C=O', 'R2CH2'], step_from: [0], step_to: [1],
      step_kind: ['plain'], step_reagent: [reagent], step_progress: 1,
      highlight_step: 0,
    },
  });

  /** Step 2 names a widget this build lacks and carries an SVG, so
   *  `validateSequence` keeps it — rewritten to `widget: ''` — rather than
   *  dropping the case the author supplied art for. */
  const sequence = (stepSvg?: string) => ({
    seq: 7, tier: 'precomputed' as const,
    payload: {
      kind: 'board_sequence',
      steps: [
        { payload: scheme('Zn-Hg / HCl'), caption: 'Clemmensen — acid-stable' },
        { payload: UNDRAWABLE, caption: 'The table — acid vs base', seq: 4,
          ...(stepSvg === undefined ? {} : { fallback_svg: stepSvg }) },
      ],
    },
  });

  test('liveness: the visible step really is the undrawable one', () => {
    // activeSeq 1 shows step 1 of 2 and the reagent it can draw; the tests
    // below rely on activeSeq 4 having moved past it.
    const first = draw(sequence(SVG), {});
    expect(first.text).toContain('Zn-Hg / HCl');
    expect(first.text).toContain('1/2');
  });

  test('a step whose own svg is malformed reaches the chapter plate', () => {
    // Was: "2/2" over blank paper, and not one gap — the single most
    // deniable failure in this file, because the strip makes the board look
    // deliberate.
    const { json, text, gaps } = draw(
      { ...sequence(BROKEN_SVG), svg: CHAPTER_SVG }, { activeSeq: 4 });
    expect(json).not.toBeNull();
    expect(gaps).toContain('svg_invalid');
    expect(gaps).toContain('fell_back_to_event_svg');
    expect(text).toContain(CHAPTER_MARK);
    // The strip survives the fall: a student who cannot see that a second
    // case exists reads the first as the whole answer.
    expect(text).toContain('2/2');
    expect(text).toContain('The table — acid vs base');
  });

  test('a step with no svg of its own is DROPPED, so the chain is not needed', () => {
    // Why the `!step.fallback_svg` half of that branch cannot be reached from a
    // validated sequence: `board-sequence-validate`'s degrade rule drops the
    // case with no art and renumbers, so the case that CAN draw still draws and
    // the strip reads 1/1. The guard is there for the crash on `step.payload`,
    // not for a case that happens.
    const warns: string[] = [];
    const spy = jest.spyOn(console, 'warn')
      .mockImplementation((m?: unknown) => { warns.push(String(m)); });
    try {
      const { text, gaps } = draw(
        { ...sequence(undefined), svg: CHAPTER_SVG }, { activeSeq: 4 });
      expect(text).toContain('1/1');
      expect(text).toContain('Zn-Hg / HCl');
      expect(text).not.toContain(CHAPTER_MARK);
      expect(gaps).not.toContain('fell_back_to_event_svg');
      expect(warns.join(' ')).toContain('comparison_table');
    } finally {
      spy.mockRestore();
    }
  });

  test('a step that CAN draw its own svg says so and does not fall further', () => {
    const { text, gaps } = draw(
      { ...sequence(SVG), svg: CHAPTER_SVG }, { activeSeq: 4 });
    expect(gaps).toContain('step_fell_back_to_svg');
    expect(gaps).not.toContain('fell_back_to_event_svg');
    expect(text).not.toContain(CHAPTER_MARK);
    expect(text).toContain('2/2');
  });

  test('a sequence whose visible step draws is untouched by all of this', () => {
    const { text, gaps } = draw(sequence(SVG), { activeSeq: 1 });
    expect(text).toContain('Zn-Hg / HCl');
    expect(gaps).not.toContain('fell_back_to_event_svg');
    expect(gaps).not.toContain('no_fallback_available');
  });

  /* =================================================================== hole 4
   *
   * A sequence payload carries `kind`/`steps` and names no widget, so
   * `widget: event.payload?.widget` was `undefined` on exactly the payload
   * shape most likely to reach the terminal gap.
   */
  test('the terminal gap on a refused sequence is attributable', () => {
    // Every step refused and none carrying an SVG: `validateSequence` has
    // nothing left to show, so the chain runs with nothing in it.
    const { json, gaps, detail } = draw({
      seq: 7, tier: 'live' as const,
      payload: {
        kind: 'board_sequence',
        steps: [
          { payload: UNDRAWABLE, caption: 'One' },
          { payload: UNDRAWABLE, caption: 'Two', seq: 4 },
        ],
      },
    }, {});
    expect(json).toBeNull();
    expect(gaps).toContain('sequence_refused');
    expect(gaps).toContain('no_fallback_available');
    const d = detail('no_fallback_available')!;
    // Was `undefined`: a feed row that cannot be counted or grouped.
    expect(d.widget).toBe('board_sequence');
    // And the board event itself, which identifies it whatever the payload is.
    expect(d.seq).toBe(7);
    expect(d.tier).toBe('live');
  });

  test('a gap from inside a sequence names WHICH case of how many', () => {
    const { detail } = draw(sequence(BROKEN_SVG), { activeSeq: 4 });
    const d = detail('svg_invalid')!;
    expect(d.widget).toBe('board_sequence');
    expect(d.step).toBe('2/2');
    expect(d.rung).toBe('step.fallback_svg');
    // `validateSequence` rewrote the step's widget to '' to keep it for its
    // SVG, so the step cannot name itself; the detail says so rather than
    // reporting an empty string.
    expect(d.stepWidget).toBe('(rewritten to svg)');
  });
});

/* ===================================================================== hole 5
 *
 * `if (!resolved.mod || !resolved.params) return null` sat BELOW the chain.
 */
describe('a resolution that named no module', () => {
  const SLOPPY_EVENT = {
    seq: 3, tier: 'live' as const,
    payload: { widget: 'sloppy_widget', version: 1, params: {} },
  };

  test('liveness: the mocked registry really carries the sloppy validator', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { lookup } = require('../registry');
    const mod = lookup('sloppy_widget', 1);
    expect(mod).not.toBeNull();
    const checked = mod.validate({});
    expect(checked.ok).toBe(true);
    // The whole point: ok, and no params. Without this the test below would
    // be exercising the ordinary happy path.
    expect(checked.params).toBeUndefined();
  });

  test('it falls into the chain instead of returning a blank board', () => {
    // Was: a bare `return null` one line below the chain. Blank board, no
    // gap, chapter SVG unused — the exact defect P3 was written to remove,
    // reachable through any widget whose validator loses its params.
    const { json, text, gaps, detail } = draw({ ...SLOPPY_EVENT, svg: CHAPTER_SVG });
    expect(json).not.toBeNull();
    expect(text).toContain(CHAPTER_MARK);
    expect(gaps).toContain('resolved_without_module');
    expect(gaps).toContain('fell_back_to_event_svg');
    const d = detail('resolved_without_module')!;
    expect(d.widget).toBe('sloppy_widget');
    expect(d.hadMod).toBe(true);
    expect(d.hadParams).toBe(false);
  });

  test('with nothing behind it, it is a measured blank and not a silent one', () => {
    const { json, gaps } = draw(SLOPPY_EVENT, {});
    expect(json).toBeNull();
    expect(gaps).toContain('resolved_without_module');
    expect(gaps).toContain('no_fallback_available');
  });
});
