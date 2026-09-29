/**
 * The client half of the API's `scripts/class_sweep.py` (V5): would the
 * classroom actually DRAW each board event the server puts on the wire?
 *
 * Not a test of anything on its own — a jest file because jest is where the
 * widget modules, the transpile, the reanimated mocks and the `@/` aliases
 * already resolve. Skipped unless CLASS_SWEEP_JOB points at a job file, so a
 * normal run never pays for it (same shape as emit-review-svgs.test.tsx).
 *
 *   CLASS_SWEEP_JOB=/path/job.json CLASS_SWEEP_OUT=/path/out.json \
 *     npx jest lib/widgets/__tests__/class-sweep-render.test.tsx
 *
 * WHAT RUNS, UNMODIFIED: the classroom's own dispatch — `BoardBlockView` ->
 * BoardWidget / BoardDiagram — the labelled-figure resolver seeded as
 * live-classroom seeds it (setChapterAssets + prefetch of the chapter's
 * published label sets), and `boardSignature` from board-continuity.ts, the
 * rule `applyContinuity` collapses consecutive boards by.
 *
 * WHAT IS STUBBED: `lookup()` is restricted to the manifest the job names for
 * each render (a client that does not carry a widget cannot draw it), the
 * label-set fetch reads the JSON the sweep downloaded, and the device file
 * download returns a cache path. Nothing on the draw/refuse path is stubbed.
 *
 * LIMIT, stated so nobody reads more into it: the "19sep" and "absent" views
 * run TODAY's renderer with the 19 Sep registry. The literal 19 Sep binary
 * (76393a4) dropped `event.svg` from payload events in board-text.tsx, so it
 * has no net under a widget; the sweep therefore also reports whether every
 * widget served to those views drew as a WIDGET, not via the net.
 *
 * Mode CLASS_SWEEP_MODE=defaults dumps each registry module's version and
 * `defaults` instead (the sweep models slot 2's model-filled params with them).
 */
import React from 'react';
import { readFileSync, writeFileSync } from 'node:fs';
import TestRenderer, { act } from 'react-test-renderer';

jest.mock('../registry', () => {
  const real = jest.requireActual('../registry');
  return {
    ...real,
    lookup: (id: string, version: number) => {
      // null = unrestricted (defaults mode); otherwise the manifest in force.
      const allowed: Map<string, number> | null =
        (globalThis as { __classSweepAllowed?: Map<string, number> | null }).__classSweepAllowed ?? null;
      if (allowed) {
        const max = allowed.get(id);
        if (max === undefined || version > max) return null;
      }
      return real.lookup(id, version);
    },
  };
});

/* eslint-disable @typescript-eslint/no-require-imports */
const { BoardBlockView } = require('@/components/board-text');
const { REGISTRY, lookup } = require('../registry');
const { boardSignature } = require('../board-continuity');
const { createFigureResolver } = require('../labelled-figure/figure-resolver');
const r2 = require('../labelled-figure/r2-figure-resolver');
const { TEST_SERVICES, TEST_THEME } = require('./test-utils');
/* eslint-enable @typescript-eslint/no-require-imports */

const JOB = process.env.CLASS_SWEEP_JOB;
const OUT = process.env.CLASS_SWEEP_OUT;
const MODE = process.env.CLASS_SWEEP_MODE ?? 'render';
const BASE = 'https://assets.class-sweep.test';

const PORTRAIT = { availableWidth: 402 - 56, maxHeight: Math.min(390 * 0.52, 402 - 56) };
const LANDSCAPE = { availableWidth: 700, maxHeight: 280 * 0.72 };
const TERMINAL = ['no_fallback_available', 'svg_invalid', 'empty_diagram_event', 'no_widget_host'];

function setManifest(m: Record<string, number> | null) {
  (globalThis as { __classSweepAllowed?: Map<string, number> | null }).__classSweepAllowed =
    m ? new Map(Object.entries(m)) : null;
}

function hostTypes(node: unknown, acc: Set<string>): Set<string> {
  if (!node) return acc;
  if (Array.isArray(node)) { node.forEach((n) => hostTypes(n, acc)); return acc; }
  if (typeof node === 'object') {
    const n = node as { type?: string; children?: unknown[] };
    if (n.type) acc.add(n.type);
    hostTypes(n.children, acc);
  }
  return acc;
}

type Rendered = { drew: boolean; rung: string; gaps: string[]; plate: string | null };

function render(event: Record<string, unknown>, figures: unknown,
                box: { availableWidth: number; maxHeight: number }): Rendered {
  const gaps: [string, unknown][] = [];
  const host = {
    activeSeq: event.seq as number, theme: TEST_THEME, services: TEST_SERVICES, figures,
    onGap: (reason: string, detail: unknown) => gaps.push([reason, detail]),
  };
  let r!: TestRenderer.ReactTestRenderer;
  act(() => {
    r = TestRenderer.create(<BoardBlockView event={event as never} diagramBox={box} widgetHost={host} />);
  });
  const types = [...hostTypes(r.toJSON(), new Set())];
  act(() => { r.unmount(); });
  // A picture is on the board when the tree carries an SVG surface or an
  // Image (labelled-figure art). A bare View is NOT a picture.
  const drewSomething = types.some((t) => /^RNSVG|Svg|Image/i.test(t));
  const names = gaps.map((g) => g[0]);
  const p = event.payload as { widget?: string; params?: { asset_slug?: string } } | undefined;
  let rung = 'NOTHING';
  let plate: string | null = null;
  if (drewSomething) {
    if (names.includes('fell_back_to_event_svg')) rung = 'net_svg';
    else if (names.includes('fell_back_to_illustration')) {
      rung = 'net_illustration'; plate = (event.illustration_slug as string) ?? null;
    } else if (p?.widget === 'labelled_figure') { rung = 'illustration'; plate = p.params?.asset_slug ?? null; }
    else if (p?.widget) rung = 'widget';
    else if (event.svg) rung = 'stored_svg';
    else rung = '?';
  }
  return { drew: drewSomething && !names.some((g) => TERMINAL.includes(g)), rung, gaps: names, plate };
}

const RUN = JOB && OUT ? test : test.skip;

if (MODE === 'defaults') {
  RUN('class sweep: dump registry defaults', () => {
    const out: Record<string, unknown> = {};
    for (const [id, mod] of Object.entries<any>(REGISTRY)) out[id] = { version: mod.version, defaults: mod.defaults };
    writeFileSync(OUT!, JSON.stringify(out, null, 1));
  });
} else {
  RUN('class sweep: render every wire event', async () => {
    const job = JSON.parse(readFileSync(JOB!, 'utf8'));
    const manifests: Record<string, Record<string, number>> = job.manifests;
    const out: Record<string, unknown> = { controls: {}, results: {}, prefetch: {} };

    // ── CONTROLS, per manifest view: the harness must be able to see a blank ──
    const GOOD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50"><rect width="100" height="50"/></svg>';
    const BROKEN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50"><g><rect width="10" height="10"/></svg>';
    const noFigures = createFigureResolver(async () => { throw new Error('none'); });
    for (const [view, m] of Object.entries(manifests)) {
      setManifest(m);
      const absentId = Object.keys(REGISTRY).find((id) => !(id in m)) ?? null;
      const presentId = Object.keys(m)[0];
      const ctl = {
        unknownWidget: render({ seq: 1, type: 'diagram', payload: { widget: 'no_such_widget', version: 1, params: {} } }, noFigures, PORTRAIT),
        tooNewVersion: render({ seq: 1, type: 'diagram', payload: { widget: presentId, version: m[presentId] + 1, params: {} } }, noFigures, PORTRAIT),
        notInManifest: absentId
          ? render({ seq: 1, type: 'diagram', payload: { widget: absentId, version: 1, params: REGISTRY[absentId].defaults } }, noFigures, PORTRAIT)
          : null,
        uncachedFigure: render({ seq: 1, type: 'diagram', payload: { widget: 'labelled_figure', version: 1, params: { asset_slug: 'not-prefetched' } } }, noFigures, PORTRAIT),
        brokenSvg: render({ seq: 1, type: 'diagram', svg: BROKEN }, noFigures, PORTRAIT),
        goodSvg: render({ seq: 1, type: 'diagram', svg: GOOD }, noFigures, PORTRAIT),
        netSaves: render({ seq: 1, type: 'diagram', payload: { widget: 'no_such_widget', version: 1, params: {} }, svg: GOOD }, noFigures, PORTRAIT),
        lookupRestricted: lookup(presentId, m[presentId] + 1) === null && (absentId === null || lookup(absentId, 1) === null),
      };
      (out.controls as Record<string, unknown>)[view] = ctl;
    }

    // ── EVERY UNIQUE WIRE EVENT, grouped by chapter so the resolver is seeded once ──
    const byChapter = new Map<string, { id: string; view: string; event: Record<string, unknown> }[]>();
    for (const r of job.renders) {
      if (!byChapter.has(r.chapter_id)) byChapter.set(r.chapter_id, []);
      byChapter.get(r.chapter_id)!.push(r);
    }
    for (const [chapterId, renders] of byChapter) {
      const fig = job.figures[chapterId] ?? { assets: [], label_sets: {} };
      r2._clearChapterAssets();
      r2.setChapterAssets(fig.assets);
      const loader = r2.createR2FigureLoader(
        BASE,
        async (url: string) => {
          const slug = decodeURIComponent(url.split('/').pop()!.replace(/\.json$/, ''));
          const s = fig.label_sets[slug];
          if (!s || s.__error__) throw new Error(`404 ${slug}`);
          return s;
        },
        async () => { throw new Error('Image.getSize stub: not needed for a labelled set'); },
        { ensureFile: async (_b: string, row: any) => `file:///cache/figures/${row.asset_slug}.${String(row.master_sha256).slice(0, 12)}.png` },
      );
      const figures = createFigureResolver(loader);
      let report = { resolved: [] as string[], missing: [] as string[] };
      await act(async () => { report = await figures.prefetch(fig.assets.map((a: any) => a.asset_slug)); });
      (out.prefetch as Record<string, unknown>)[chapterId] = report;
      for (const r of renders) {
        setManifest(manifests[r.view]);
        const e = r.event;
        // The net, forced: the same event with its widget unknown to this build.
        const netForced = e.payload && (e.svg || e.illustration_slug)
          ? render({ ...e, payload: { ...(e.payload as object), widget: 'zz_not_in_build' } }, figures, PORTRAIT)
          : null;
        (out.results as Record<string, unknown>)[r.id] = {
          portrait: render(e, figures, PORTRAIT),
          landscape: render(e, figures, LANDSCAPE),
          net_forced: netForced,
          signature: boardSignature(e),
        };
      }
    }
    setManifest(null);
    writeFileSync(OUT!, JSON.stringify(out));
  }, 1_800_000);
}
