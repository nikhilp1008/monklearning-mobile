/**
 * THREE WAYS A BOARD ROW WENT BLANK BEFORE BoardWidget WAS EVER ASKED.
 *
 * `lib/widgets/__tests__/fallback-chain.test.tsx` proves BoardWidget's chain is
 * exhaustive: an undrawable payload falls to the event's svg, then to the
 * concept's plate, then to the chapter's svg, and logs its own gap at every
 * rung. All of that is downstream of `BoardBlockView`, and every rung of it was
 * reachable only through a gate in this component that returned `null` three
 * different ways first — silently, since `onGap` lives on the host object the
 * first of those gates had just refused to use.
 *
 * So these are the three `return null`s, not the chain:
 *
 *   1. `if (!widgetHost) return null` — above everything, including the figures
 *      that need no host at all. `app/dev-board-preview.tsx` passes no host.
 *   2. `if (!event.svg) return null` — behind a gate that tested `payload`
 *      alone, so an event carrying only `illustration_slug` died one line above
 *      the rung built for it.
 *   3. the branch gated on `type === 'diagram'` while `BoardEvent.type` ends in
 *      `| string`, so `figure` / `image` / `illustration` fell out of the
 *      bottom as `<Text>{''}</Text>` — an invisible row, of the right height.
 *
 * Harness style follows fallback-chain.test.tsx: one `draw()`, gaps collected
 * as a list of reasons. The one addition is `warnedGaps` — a host-less surface
 * has no `onGap`, so `reportGap` sends its gaps to `console.warn('[board-gap]',
 * …)`, which is where the classroom's own `onGap` sends them anyway. The
 * registry is NOT mocked here: nothing below names a real widget, so there is
 * nothing to trim.
 */
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import type { BoardEvent } from '@/lib/drona-voice-client';
import type { FigureRecord, FigureResolver } from '@/lib/widgets/labelled-figure/figure-resolver';
import {
  PLACEHOLDER_SLUG,
  placeholderFigureResolver,
} from '@/lib/widgets/labelled-figure/placeholder-figure';
import { TEST_SERVICES, TEST_THEME } from '@/lib/widgets/__tests__/test-utils';

import { BoardBlockView, type BoardWidgetHost } from '../board-text';

/**
 * A viewBox IS REQUIRED, and not as a formality: `BoardDiagram` returns null
 * for markup it cannot read a viewBox out of, because it sizes the figure from
 * that aspect. fallback-chain's own SVG fixture carries width/height and no
 * viewBox — fine there, since BoardWidget's rung hands the string to a raw
 * `SvgXml`; borrowed here unchanged it would make every "the svg is drawn" case
 * below pass or fail for the wrong reason.
 */
const SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 430" width="900" height="430">' +
  '<rect width="900" height="430" fill="#ffffff"/>' +
  '<circle cx="450" cy="215" r="80" fill="#2563eb"/></svg>';

/** A widget no registry carries, so BoardWidget resolves it to nothing and logs
 *  `unknown_widget`. Naming a real widget would make these tests depend on the
 *  registry's contents, which is fallback-chain's job, not this file's. */
const UNDRAWABLE = { widget: 'no_such_widget_exists', version: 1, params: {} };

const BOX = { availableWidth: 900, maxHeight: 430 };
/** What `app/dev-board-preview.tsx` passes today. */
const NO_BOX = { availableWidth: 0, maxHeight: 0 };

type HostOpts = {
  figures?: FigureResolver;
  box?: { availableWidth: number; maxHeight: number };
};

/**
 * Renders one board event. Passing `host` at all — `{}` is enough — is what
 * makes the surface a hosted one; omitting it is the dev-preview surface.
 * `box` overrides the board box for both, since a zero-area box is a property
 * of the caller and not of the host.
 */
function draw(event: BoardEvent, host?: HostOpts, box = BOX) {
  const gaps: [string, unknown][] = [];
  const warned: unknown[][] = [];
  const spy = jest.spyOn(console, 'warn').mockImplementation((...args: unknown[]) => {
    warned.push(args);
  });
  const widgetHost: BoardWidgetHost | undefined = host
    ? {
        activeSeq: event.seq,
        theme: TEST_THEME,
        services: TEST_SERVICES,
        figures: host.figures ?? placeholderFigureResolver,
        onGap: (reason: string, detail: unknown) => gaps.push([reason, detail]),
      }
    : undefined;
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(
      <BoardBlockView event={event} diagramBox={box} widgetHost={widgetHost} />
    );
  });
  spy.mockRestore();
  const boardGaps = warned.filter((a) => a[0] === '[board-gap]');
  return {
    json: r.toJSON(),
    /** Gaps through the host's own sink. */
    gaps: gaps.map((g) => g[0]),
    detail: (reason: string) => gaps.find((g) => g[0] === reason)?.[1],
    /** Gaps from a surface with no sink — same measurements, shorter route. */
    warnedGaps: boardGaps.map((a) => String(a[1])),
    warnedDetail: (reason: string) =>
      boardGaps.find((a) => String(a[1]) === reason)?.[2],
    /** Everything else that reached console.warn, so a real error cannot hide
     *  behind a gap assertion. */
    otherWarnings: warned.filter((a) => a[0] !== '[board-gap]'),
  };
}

type Json = TestRenderer.ReactTestRendererJSON;

function roots(json: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): Json[] {
  if (!json) return [];
  return Array.isArray(json) ? json : [json];
}

/** Every host component name in the tree. `react-native-svg` renders as
 *  `RNSVG*` under jest-expo, which is how "a figure was drawn" is told apart
 *  from "a line of text was written". */
function nodeTypes(json: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): string[] {
  const out: string[] = [];
  const walk = (n: Json) => {
    out.push(String(n.type));
    for (const c of n.children ?? []) {
      if (c && typeof c === 'object') walk(c as Json);
    }
  };
  roots(json).forEach(walk);
  return out;
}

/** Every string in the tree, concatenated. */
function textIn(json: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>): string {
  let out = '';
  const walk = (n: Json) => {
    for (const c of n.children ?? []) {
      if (typeof c === 'string') out += c;
      else if (c && typeof c === 'object') walk(c as Json);
    }
  };
  roots(json).forEach(walk);
  return out;
}

const drewSvg = (json: ReturnType<TestRenderer.ReactTestRenderer['toJSON']>) =>
  nodeTypes(json).some((t) => t.startsWith('RNSVG'));

/* ------------------------------------------------------------------ vacuity */

describe('the harness can tell the three outcomes apart', () => {
  // Without this, every "it drew the figure" below could be passing against a
  // tree that draws nothing and a `nodeTypes` that never matches anything.
  test('an svg event draws RNSVG nodes; a text event draws none', () => {
    expect(drewSvg(draw({ seq: 1, type: 'diagram', svg: SVG }, {}).json)).toBe(true);
    expect(drewSvg(draw({ seq: 1, type: 'text', text: 'Charge is conserved.' }, {}).json))
      .toBe(false);
  });

  test('the placeholder resolver really has the slug cached, synchronously', () => {
    // Rung 2 below is only a test of the rung if `get()` answers. If the seed
    // ever stops being seeded, that test would pass for the wrong reason —
    // `no_fallback_available` instead of `fell_back_to_illustration`.
    expect(placeholderFigureResolver.get(PLACEHOLDER_SLUG)).not.toBeNull();
    expect(placeholderFigureResolver.get('nothing--here')).toBeNull();
  });
});

/* ------------------------------------------------------ 1. the host-less surface */

describe('a surface with no widget host', () => {
  test('THE REGRESSION: an svg-only figure used to be blank without a host', () => {
    // `if (!widgetHost) return null` was the first line of the branch, so this
    // drew nothing — on `app/dev-board-preview.tsx`, the one screen whose whole
    // purpose is judging what a board looks like. BoardDiagram needs no theme,
    // no services and no resolver; the host was never the figure's dependency.
    const { json, warnedGaps } = draw({ seq: 1, type: 'diagram', svg: SVG, caption: 'A field' });
    expect(json).not.toBeNull();
    expect(drewSvg(json)).toBe(true);
    // Nothing was skipped, so nothing is reported: this row is complete.
    expect(warnedGaps).toEqual([]);
  });

  test('the caption comes with it, so the figure is not half-drawn', () => {
    expect(textIn(draw({ seq: 1, type: 'diagram', svg: SVG, caption: 'Two food chains' }).json))
      .toContain('Two food chains');
  });

  test('a payload with no runtime to draw it is REPORTED, not just dropped', () => {
    // Still blank — there is no registry on this surface and nothing else to
    // draw — but no longer silent, and the reason names the surface rather than
    // the event, because that is where the fix would go.
    const { json, warnedGaps, warnedDetail } = draw({
      seq: 4, type: 'diagram', payload: UNDRAWABLE, tier: 'precomputed',
    });
    expect(json).toBeNull();
    expect(warnedGaps).toEqual(['no_widget_host']);
    expect(warnedDetail('no_widget_host')).toMatchObject({
      seq: 4, drew: 'nothing', hasPayload: true,
    });
  });

  test('an svg BESIDE an unhostable payload is drawn, and the swap is counted', () => {
    // The student sees the model's hand-drawn approximation where the registry
    // would have computed the real curve. That is a tier-3 render in all but
    // name, and it is the one way tier 3 happens without BoardWidget being
    // asked — so it is counted like one rather than passing for a clean draw.
    const { json, warnedGaps, warnedDetail } = draw({
      seq: 5, type: 'diagram', payload: UNDRAWABLE, svg: SVG, tier: 'precomputed',
    });
    expect(drewSvg(json)).toBe(true);
    expect(warnedGaps).toEqual(['no_widget_host']);
    expect(warnedDetail('no_widget_host')).toMatchObject({ drew: 'svg', hasPayload: true });
  });

  test('a slug with no resolver is reported too — a host is what resolves it', () => {
    const { json, warnedGaps } = draw({
      seq: 6, type: 'diagram', illustration_slug: PLACEHOLDER_SLUG,
    });
    expect(json).toBeNull();
    expect(warnedGaps).toEqual(['no_widget_host']);
  });

  test('text is unaffected by the absence of a host', () => {
    const { json, warnedGaps } = draw({ seq: 7, type: 'heading', text: 'Real Cells' });
    expect(textIn(json)).toBe('Real Cells');
    expect(warnedGaps).toEqual([]);
  });
});

/* ------------------------------------- 2. an event whose only figure is a slug */

describe('a diagram carrying only an illustration_slug', () => {
  test('THE REGRESSION: it reaches BoardWidget, and the plate is drawn', () => {
    // The gate was `if (event.payload)`, with `if (!event.svg) return null`
    // behind it. A slug is neither, so this event returned null one line above
    // P3's illustration rung — the rung exists FOR this shape
    // (`lib/widgets/board-continuity.ts` signs it `ill:${slug}`) and was
    // unreachable from the classroom for it.
    const { json, gaps } = draw(
      { seq: 2, type: 'diagram', illustration_slug: PLACEHOLDER_SLUG },
      {}
    );
    expect(json).not.toBeNull();
    expect(drewSvg(json)).toBe(true);
    expect(gaps).toContain('fell_back_to_illustration');
  });

  test('an UNCACHED slug is asked for rather than dropped on the floor', () => {
    // The other half of the proof that the rung is reached: BoardWidget's
    // cache-miss path prefetches. Nothing can prefetch a slug that never got
    // past this component.
    const asked: string[][] = [];
    const figures = {
      get: () => null,
      subscribe: () => () => {},
      prefetch: (slugs: readonly string[]) => { asked.push([...slugs]); },
      cached: () => [],
    } as unknown as FigureResolver;
    const { json, gaps, detail } = draw(
      { seq: 3, type: 'diagram', illustration_slug: 'ecosystem--grazing-chain' },
      { figures }
    );
    expect(asked).toEqual([['ecosystem--grazing-chain']]);
    expect(json).toBeNull();
    expect(gaps).toContain('no_fallback_available');
    expect(detail('no_fallback_available')).toMatchObject({ hadIllustration: true });
  });

  test('a slug and a payload together still resolve through the chain', () => {
    // The ordinary P3 shape — a widget slot with its plate sent alongside — and
    // the case that already worked. It must keep working: the new gate is
    // `payload || slug`, not `slug` instead of `payload`.
    const { json, gaps } = draw(
      {
        seq: 8, type: 'diagram', tier: 'precomputed',
        payload: UNDRAWABLE, illustration_slug: PLACEHOLDER_SLUG,
      },
      {}
    );
    expect(json).not.toBeNull();
    expect(gaps).toContain('unknown_widget');
    expect(gaps).toContain('fell_back_to_illustration');
  });

  test('a diagram carrying NOTHING is the only honest no-op — and it logs', () => {
    // The distinction the gap feed exists to make: this row is empty because
    // the event is empty, not because the build could not draw it. Blank rows
    // that log nothing are indistinguishable from rows that never arrived.
    const { json, gaps, detail } = draw({ seq: 9, type: 'diagram' }, {});
    expect(json).toBeNull();
    expect(gaps).toEqual(['empty_diagram_event']);
    expect(detail('empty_diagram_event')).toMatchObject({
      seq: 9, hasPayload: false, hasIllustration: false,
    });
  });
});

/* ------------------------------------------------ 3. a type this build never met */

describe('an event type with no branch of its own', () => {
  // `BoardEvent.type` is `'text' | … | string`, open because the server may
  // name a type this build does not carry. Each of these fell past the
  // `type === 'diagram'` gate, past all four text branches, and rendered
  // `<Text>{''}</Text>`: a row with no glyphs that still takes its 20pt of
  // marginTop. Invisible, and no gap.
  test.each(['figure', 'image', 'illustration'])(
    'a %s carrying a payload is routed by what it carries',
    (type) => {
      const { gaps } = draw(
        { seq: 10, type, payload: UNDRAWABLE, tier: 'precomputed' },
        {}
      );
      // It reached BoardWidget: only BoardWidget logs these two.
      expect(gaps).toContain('unknown_widget');
      expect(gaps).toContain('no_fallback_available');
    }
  );

  test('THE REGRESSION: the empty <Text> is gone, in both directions', () => {
    // Before: json was a Text node with '' in it, and gaps was empty — a row
    // that looked like a rendering bug and left no trace anywhere.
    // After: either a figure is drawn, or nothing is drawn AND it is logged.
    const withSvg = draw({ seq: 11, type: 'figure', svg: SVG, caption: 'A grazing chain' }, {});
    expect(drewSvg(withSvg.json)).toBe(true);
    // The figure AND its caption — where the old path produced one Text node
    // holding the empty string and no figure at all.
    expect(textIn(withSvg.json)).toBe('A grazing chain');
    expect(withSvg.gaps).toEqual([]);

    const withNothing = draw({ seq: 12, type: 'image' }, {});
    expect(withNothing.json).toBeNull();
    expect(withNothing.gaps).toEqual(['unknown_event_type']);
    expect(withNothing.detail('unknown_event_type')).toMatchObject({ seq: 12, type: 'image' });
  });

  test('an unknown type carrying WORDS is written, and still logged', () => {
    // Visible beats invisible: an event with text in it is prose, whatever it
    // is called. The gap is the other half — the type was a guess, and it only
    // gets a branch of its own if someone can see it arriving.
    const { json, gaps } = draw(
      { seq: 13, type: 'callout', text: 'EMF is not a force.' },
      {}
    );
    expect(textIn(json)).toBe('EMF is not a force.');
    expect(gaps).toEqual(['unknown_event_type']);
  });

  test('a figure-typed event with only a slug resolves like a diagram', () => {
    const { json, gaps } = draw(
      { seq: 14, type: 'illustration', illustration_slug: PLACEHOLDER_SLUG },
      {}
    );
    expect(drewSvg(json)).toBe(true);
    expect(gaps).toContain('fell_back_to_illustration');
  });

  test('THE GUARD: the four known types are untouched and log nothing', () => {
    // The unknown-type branch must not fire for anything that already had a
    // branch — a gap on every ordinary line of prose would drown the feed the
    // other two cases were added to, which is the way this fix could quietly
    // make things worse.
    const known: BoardEvent[] = [
      { seq: 20, type: 'text', text: 'A cell is a charge pump.' },
      { seq: 21, type: 'heading', text: 'Combining Cells' },
      { seq: 22, type: 'note', text: 'A standing definition-mark loss.' },
      { seq: 23, type: 'formula', latex: 'V = E - Ir' },
    ];
    for (const event of known) {
      const { json, gaps, warnedGaps, otherWarnings } = draw(event, {});
      expect(gaps).toEqual([]);
      expect(warnedGaps).toEqual([]);
      expect(otherWarnings).toEqual([]);
      expect(textIn(json).length).toBeGreaterThan(0);
    }
  });

  test('a formula still goes through the LaTeX converter, not around it', () => {
    // `raw` is now chosen by `isFigure` rather than by two chained type tests.
    // If that rewrite had caught `formula` in the figure branch, the latex
    // would simply vanish rather than fail loudly.
    expect(textIn(draw({ seq: 24, type: 'formula', latex: 'E = W/q' }, {}).json))
      .toBe('E = W/q');
    expect(textIn(draw({ seq: 25, type: 'text', text: '10^5 m/s' }, {}).json))
      .toBe('10⁵ m/s');
  });
});

/* ------------------------------------------------- a box with no area to draw in */

describe('a diagram box with no area', () => {
  test('a figure with nowhere to go says so rather than painting an empty row', () => {
    // At 0x0 every renderer below paints nothing — BoardDiagram computes
    // `min(0, …)`, a widget gets a 0x0 canvas — and none of them can tell that
    // apart from a figure that failed. This is what `app/dev-board-preview.tsx`
    // passes today, so it is the reason a figure is still missing there after
    // the host-less fix above, and now it is a reason that gets printed.
    const { json, warnedGaps, warnedDetail } = draw(
      { seq: 30, type: 'diagram', svg: SVG }, undefined, NO_BOX
    );
    expect(json).toBeNull();
    expect(warnedGaps).toEqual(['no_diagram_space']);
    expect(warnedDetail('no_diagram_space')).toMatchObject({ availableWidth: 0, maxHeight: 0 });
  });

  test('it is reported BEFORE the chain runs, so the feed blames the box', () => {
    // A payload dispatched into a 0x0 canvas would log `unknown_widget` and
    // `no_fallback_available` — two gaps about the registry, for a row whose
    // actual problem is that it was given no room. The box is checked first so
    // the feed names the fix.
    const { gaps } = draw(
      { seq: 31, type: 'diagram', payload: UNDRAWABLE, tier: 'precomputed' }, {}, NO_BOX
    );
    expect(gaps).toEqual(['no_diagram_space']);
  });

  test('text is unaffected: the box is the FIGURE\'s constraint, not the board\'s', () => {
    // The dev preview passes no box and is still, primarily, a typography
    // screen. Every line of writing on it must keep rendering.
    const { json, warnedGaps } = draw(
      { seq: 32, type: 'text', text: 'A cell is a charge pump.' }, undefined, NO_BOX
    );
    expect(textIn(json)).toBe('A cell is a charge pump.');
    expect(warnedGaps).toEqual([]);
  });
});

/* ---------------------------------------------------------- the record's shape */

describe('the figure record the plate is drawn from', () => {
  test('it is the bundled placeholder, so nothing here fetches', () => {
    // CLAUDE.md §3: a live class renders with the network off. These tests draw
    // a real plate through the real resolver, so the plate they draw had better
    // be a bundled one — asserted here so a future resolver that reaches for a
    // URL cannot slip in behind a green suite.
    //
    // NOT `typeof source === 'number'`: Metro yields an asset module id at
    // runtime, but jest-expo's asset transform yields `{ testUri }`, so the
    // portable statement is about the absence of a scheme, not the type.
    const rec = placeholderFigureResolver.get(PLACEHOLDER_SLUG) as FigureRecord;
    expect(rec.asset_slug).toBe(PLACEHOLDER_SLUG);
    expect(JSON.stringify(rec.art.source)).not.toMatch(/https?:/);
  });
});

/* ------------------------------------------------ U5: a malformed stored svg */

/**
 * U5. An svg-only event whose markup does not parse — here an unclosed `<g>`,
 * the shape the offline corpus check found — went to `BoardDiagram`, whose
 * `SvgXml` caught the parser's throw, `console.warn`ed and drew its `fallback`:
 * an empty View. No gap of any kind, so `gap_report.py` could not see a board
 * the student saw as blank paper.
 *
 * Now the string is put through react-native-svg's OWN `parse` before anything
 * is rendered — the function `SvgXml` would call on it — and a refusal is an
 * `svg_invalid` gap followed by the next rung, or by the chain's terminal gap
 * when there is none.
 */
const MALFORMED_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 430">' +
  '<g><circle cx="450" cy="215" r="80" fill="#2563eb"/></svg>';

describe('a stored svg that will not parse (U5)', () => {
  test('liveness: the fixture really is malformed, and only by its <g>', () => {
    // Without this, every refusal below could be passing against a string
    // the parser was never going to refuse, or refusing for another reason.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { parse } = require('react-native-svg') as typeof import('react-native-svg');
    expect(() => parse(MALFORMED_SVG)).toThrow(/closing tag/);
    expect(parse(MALFORMED_SVG.replace('</svg>', '</g></svg>'))).not.toBeNull();
  });

  test('THE REGRESSION: an svg-only event is an svg_invalid gap, not a silent blank', () => {
    const { json, gaps, detail, otherWarnings } = draw(
      { seq: 40, type: 'diagram', svg: MALFORMED_SVG }, {}
    );
    expect(drewSvg(json)).toBe(false);
    expect(json).toBeNull();
    // Refused, THEN the chain's own no-fallback reason: nothing else can draw.
    expect(gaps).toEqual(['svg_invalid', 'no_fallback_available']);
    expect(detail('svg_invalid')).toMatchObject({
      seq: 40, rung: 'event.svg', bytes: MALFORMED_SVG.length,
    });
    expect(String((detail('svg_invalid') as { error: string }).error))
      .toMatch(/closing tag/);
    expect(detail('no_fallback_available')).toMatchObject({
      seq: 40, hadIllustration: false,
    });
    // SvgXml was never handed the string, so its own error path never ran.
    expect(otherWarnings).toEqual([]);
  });

  test('the same event on a host-less surface is reported through the warn sink', () => {
    const { json, warnedGaps } = draw({ seq: 41, type: 'diagram', svg: MALFORMED_SVG });
    expect(json).toBeNull();
    expect(warnedGaps).toEqual(['svg_invalid', 'no_fallback_available']);
  });

  test('with an illustration behind it, the plate is drawn instead', () => {
    const { json, gaps, detail } = draw(
      { seq: 42, type: 'diagram', svg: MALFORMED_SVG, illustration_slug: PLACEHOLDER_SLUG },
      {}
    );
    expect(drewSvg(json)).toBe(true);
    expect(gaps).toEqual(['svg_invalid', 'fell_back_to_illustration']);
    expect(detail('svg_invalid')).toMatchObject({ rung: 'event.svg', bytes: MALFORMED_SVG.length });
  });

  test('under a widget this build lacks: svg_invalid, then the next rung', () => {
    const toPlate = draw(
      { seq: 43, type: 'diagram', tier: 'precomputed', payload: UNDRAWABLE,
        svg: MALFORMED_SVG, illustration_slug: PLACEHOLDER_SLUG },
      {}
    );
    expect(drewSvg(toPlate.json)).toBe(true);
    expect(toPlate.gaps).toEqual(['unknown_widget', 'svg_invalid', 'fell_back_to_illustration']);

    const toNothing = draw(
      { seq: 44, type: 'diagram', tier: 'precomputed', payload: UNDRAWABLE, svg: MALFORMED_SVG },
      {}
    );
    expect(toNothing.json).toBeNull();
    expect(toNothing.gaps).toEqual(['unknown_widget', 'svg_invalid', 'no_fallback_available']);
    expect(toNothing.detail('svg_invalid')).toMatchObject({ rung: 'event.svg', seq: 44 });
  });

  test('beside an unhostable payload, the svg no longer claims it drew', () => {
    // `no_widget_host` with `drew: 'svg'` is what gap_report counts as DREW.
    // A refused svg drew nothing, so the host-less terminal says so.
    const { json, warnedGaps, warnedDetail } = draw({
      seq: 45, type: 'diagram', payload: UNDRAWABLE, svg: MALFORMED_SVG, tier: 'precomputed',
    });
    expect(json).toBeNull();
    expect(warnedGaps).toEqual(['svg_invalid', 'no_widget_host']);
    expect(warnedDetail('no_widget_host')).toMatchObject({ drew: 'nothing', hasPayload: true });
  });

  test('THE GUARD: a valid svg draws and logs nothing, hosted or not', () => {
    for (const host of [{}, undefined]) {
      const { json, gaps, warnedGaps, otherWarnings } = draw(
        { seq: 46, type: 'diagram', svg: SVG }, host
      );
      expect(drewSvg(json)).toBe(true);
      expect(gaps).toEqual([]);
      expect(warnedGaps).toEqual([]);
      expect(otherWarnings).toEqual([]);
    }
  });
});
