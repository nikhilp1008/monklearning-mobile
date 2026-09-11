/**
 * The illustration tier, end to end against the bundled PLACEHOLDER.
 *
 * A SEPARATE file from render-trees.test.tsx on purpose: `labelled_figure` is
 * not a registry entry (see BoardWidget's illustration branch for why), so the
 * "every REGISTRY key is covered" guard there does not apply to it, and
 * keeping its trees here avoids three agents editing one file.
 *
 * Writes 12 trees into build/trees — 3 board sizes x 2 languages x 2 label
 * groups — which scripts/verify-tree-dir.mjs then runs through
 * verify-render.mjs at the right board box for each. docs/label-layer.md §2.7:
 * a figure is not shippable until every one of them exits 0, and the point of
 * running per language is that a figure which passes in English can fail in
 * Hindi.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

import { BoardWidget } from '../BoardWidget';
import { CHAR_W, DEVA_MAX_CHAR_W, LABEL_SIZE, PAD_EDGE } from '../chrome';
import { labelledFigure } from '../labelled-figure';
import {
  LEADER_STUB, MAX_LABELS_PER_GROUP, MAX_TERM_DEVA, MAX_TERM_LATIN, ROW,
  anchorAt, boardCapacity, fitRect, layoutFigure, rowsPerColumn, termCapFor,
  type LabelRecord, type LabelledFigureParams, type Lang,
} from '../labelled-figure/figure-layout';
import { createFigureResolver } from '../labelled-figure/figure-resolver';
import type { FigureRecord, FigureResolver } from '../labelled-figure/figure-resolver';
import {
  PLACEHOLDER_FIGURE, PLACEHOLDER_SLUG, placeholderFigureResolver,
} from '../labelled-figure/placeholder-figure';
import { TEST_SERVICES, TEST_THEME, renderWidgetTreeAt } from './test-utils';

const outDir = resolve(__dirname, '../../../build/trees');

const BOARDS = [
  { name: '', width: 900, height: 430 },
  { name: 'real-small', width: 495, height: 270 },
  { name: 'spec-small', width: 343, height: 236 },
] as const;

const mod = labelledFigure;
const base = mod.defaults;

function paramsFor(lang: Lang, group: string): LabelledFigureParams {
  const checked = mod.validate({ ...base, lang, active_group: group });
  if (!checked.ok) throw new Error(checked.errors.join('; '));
  return checked.params;
}

/* ------------------------------------------------------- the letterbox (§1.3) */

describe('the letterbox arithmetic', () => {
  // docs/label-layer.md §1.3's own worked table, for a 1600x1200 art. One
  // authored number, three correct positions — this is the entire argument
  // for normalising the anchor instead of storing a source pixel.
  test.each([
    [900, 430, 0.35833, 573.33, 430.0, 163.33, 0.0],
    [495, 270, 0.225, 360.0, 270.0, 67.5, 0.0],
    [343, 236, 0.19667, 314.67, 236.0, 14.17, 0.0],
  ])('a 1600x1200 art at %ix%i', (W, H, s, sW, sH, ox, oy) => {
    const fit = fitRect(W, H, 1600, 1200);
    expect(fit.s).toBeCloseTo(s, 4);
    expect(fit.sW).toBeCloseTo(sW, 2);
    expect(fit.sH).toBeCloseTo(sH, 2);
    expect(fit.ox).toBeCloseTo(ox, 2);
    expect(fit.oy).toBeCloseTo(oy, 2);
  });

  test('u = 0.412 lands at 399.5 / 215.8 / 143.8 — one number, three positions', () => {
    const xs = BOARDS.map((b) => anchorAt(fitRect(b.width, b.height, 1600, 1200), 0.412, 0).x);
    expect(xs[0]).toBeCloseTo(399.5, 1);
    expect(xs[1]).toBeCloseTo(215.8, 1);
    expect(xs[2]).toBeCloseTo(143.8, 1);
  });

  test('the anchor maps through the FITTED rect, not the board rect', () => {
    // The bug this exists to prevent: a 1600x1200 art does NOT fill a 900x430
    // board. Using the board rect would put u=1 at x=900 instead of x=736.67,
    // an error of 163.33pt — the whole left letterbox margin.
    const fit = fitRect(900, 430, 1600, 1200);
    expect(anchorAt(fit, 1, 0).x).toBeCloseTo(736.67, 2);
    expect(anchorAt(fit, 1, 0).x).not.toBeCloseTo(900, 0);
    expect(anchorAt(fit, 0, 0).x).toBeCloseTo(163.33, 2);
  });

  test('a PORTRAIT art letterboxes on the other axis', () => {
    // 1200x1600 at 343x236: height binds, so the margin is horizontal and
    // large — 83pt each side, which is §2.2's worked case for why a plate is
    // allowed to overhang the art rather than be confined to the margin.
    const fit = fitRect(343, 236, 1200, 1600);
    expect(fit.sW).toBeCloseTo(177, 0);
    expect(fit.sH).toBeCloseTo(236, 2);
    expect(fit.ox).toBeCloseTo(83, 0);
    expect(fit.oy).toBeCloseTo(0, 5);
  });
});

/* ------------------------------------------------- capacity, MEASURED (§2.4) */

describe('how many labels a board can actually hold', () => {
  /*
   *   first baseline  = LABEL_SIZE                          (12)
   *   last  baseline <= H - PAD_EDGE                        (H - 10)
   *   n rows          : 12 + (n-1) * ROW <= H - 10
   *   n               = floor((H - 22) / 17.8) + 1
   */
  test.each([
    [430, 23, 46],
    [270, 14, 28],
    [236, 13, 26],
  ])('at height %i: %i rows per column, %i in total', (H, rows, total) => {
    expect(rowsPerColumn(H)).toBe(rows);
    expect(boardCapacity(H)).toBe(total);
    expect(rows).toBe(Math.floor((H - PAD_EDGE - LABEL_SIZE) / ROW) + 1);
  });

  test.each([
    [430, 22, 44],
    [270, 13, 26],
    [236, 11, 22],
  ])('at height %i with the group strip reserved: %i per column, %i total', (H, rows, total) => {
    expect(rowsPerColumn(H, true)).toBe(rows);
    expect(boardCapacity(H, true)).toBe(total);
  });

  test('the manifest\'s largest figure does not fit even at the geometric ceiling', () => {
    // illustration-manifest.csv: 48 figures, 595 labels, min 6 / median 11.5 /
    // max 28, and 28 of 48 are over the spec's 10-label cap. 28 simultaneous
    // labels exceed the ceiling at BOTH small boards, so this is not a tight
    // fit that could be tuned — it is impossible at the 11pt font floor.
    expect(boardCapacity(236, true)).toBeLessThan(28);
    expect(boardCapacity(270, true)).toBeLessThan(28);
    // And the shippable cap is well under the ceiling, on purpose.
    expect(MAX_LABELS_PER_GROUP).toBeLessThan(boardCapacity(236, true));
  });

  test('one group at the cap always fits the smallest board, even all on one side', () => {
    expect(rowsPerColumn(236, true)).toBeGreaterThanOrEqual(MAX_LABELS_PER_GROUP);
  });
});

/* ---------------------------------------------------------- the term caps */

describe('term length caps, derived at 343x236', () => {
  /*
   * These numbers MOVED when chrome.ts stopped guessing widths.
   *
   *   before   Latin 22 (CHAR_W 0.58, fitted to Anek Latin)
   *            Deva  17 (CHAR_W_DEVA 0.75, explicitly not a measurement)
   *   after    Latin 20 (Menlo 0.6021 measured, x1.05 margin)
   *            Deva  11 (the WIDEST codepoint in Anek Devanagari, x1.05)
   *
   * Latin lost two units because 0.58 under-charged the family the labels are
   * actually drawn in. Devanagari lost six because 11 is now the worst case a
   * Devanagari term can hit rather than an average-shaped guess — and the cap
   * validate() applies is no longer this constant at all, it is `termCapFor`,
   * measured from the term itself.
   */
  test('20 Latin code units; 11 for the worst-case Devanagari codepoint', () => {
    expect(MAX_TERM_LATIN).toBe(20);
    expect(MAX_TERM_DEVA).toBe(11);
  });

  test('the derivation is the two-columns-on-one-row budget', () => {
    const budget = 343 - 2 * PAD_EDGE - 2 * LEADER_STUB;
    expect(budget).toBe(307);
    expect(20 * LABEL_SIZE * CHAR_W * 2 + 36).toBeLessThanOrEqual(343);
    expect(21 * LABEL_SIZE * CHAR_W * 2 + 36).toBeGreaterThan(343);
    expect(Math.floor(budget / (2 * LABEL_SIZE * DEVA_MAX_CHAR_W))).toBe(11);
  });

  test('the worst-case Devanagari cap is SHORTER, and a real term sits above it', () => {
    // Direction still matters: over-estimating fails loudly in CI and costs a
    // shorter term; under-estimating passes CI and overlaps on a device. What
    // changed is that the over-estimate is now a measured MAXIMUM rather than
    // a number nobody measured, so a real term is no longer charged at it —
    // 'क' is 0.812 em, not the block's widest 1.0245, and gets a cap to match.
    expect(DEVA_MAX_CHAR_W).toBeGreaterThan(CHAR_W);
    expect(MAX_TERM_DEVA).toBeLessThan(MAX_TERM_LATIN);
    expect(termCapFor('क'.repeat(8))).toBeGreaterThan(MAX_TERM_DEVA);
  });

  test('a mixed-script term is capped between its two halves, not at one rate', () => {
    /*
     * The case the old `hasDevanagari(text) ? DEVA : LATIN` flag could not
     * represent: one Devanagari code unit used to re-price every Latin
     * character beside it, at 0.75 em each.
     *
     * Note the direction is the opposite of what that flag assumed. Measured,
     * `नाभिक` averages 0.4224 em per CODE UNIT — two of its five code units
     * are matras with no advance at all — against Menlo's 0.60205. So a
     * Devanagari term gets a LONGER cap than a Latin one, not a shorter one,
     * and the old guardrail had it backwards by 78%.
     */
    const latin = termCapFor('Nucleus');
    const deva = termCapFor('नाभिक');
    const mixed = termCapFor('Nucleus नाभिक');
    expect(deva).toBeGreaterThan(latin);
    expect(mixed).toBeGreaterThan(latin);
    expect(mixed).toBeLessThan(deva);
  });
});

/* ------------------------------------------------------------- validate() */

describe('validate', () => {
  const bad = (patch: object) => mod.validate({ ...base, ...patch });

  test('rejects an empty object, a non-object, null and an array without throwing', () => {
    for (const raw of [{}, 'x', 42, null, [], undefined]) {
      const r = mod.validate(raw);
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.errors.length).toBeGreaterThan(0);
    }
  });

  test('accepts the placeholder at both languages and both groups', () => {
    for (const lang of ['english', 'hinglish'] as Lang[]) {
      for (const g of base.groups) {
        expect(mod.validate({ ...base, lang, active_group: g.id }).ok).toBe(true);
      }
    }
  });

  test('a term with only english is invalid — both languages ship from the start', () => {
    const labels = base.labels.map((l, i) =>
      i === 0 ? ({ ...l, term: { english: l.term.english } } as unknown as LabelRecord) : l
    );
    const r = bad({ labels });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/english AND hinglish/);
  });

  test('an over-cap term is REJECTED, never truncated', () => {
    const labels = base.labels.map((l, i) =>
      i === 0 ? { ...l, term: { ...l.term, english: 'Rough endoplasmic reticulum' } } : l
    );
    const r = bad({ labels });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/over the 20-unit cap/);
    // The failure mode this prevents: "Rough endoplasmic re" on a student's
    // board, rendered confidently and wrong.
  });

  test('an over-cap DEVANAGARI term still fails, though no Devanagari ships today', () => {
    const labels = base.labels.map((l, i) =>
      i === 0
        ? { ...l, term: { english: 'Nucleus', hinglish: 'क'.repeat(termCapFor('क') + 1) } }
        : l
    );
    const r = bad({ labels });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/hinglish term/);
  });

  test('a label naming an undeclared group is rejected', () => {
    const labels = base.labels.map((l, i) => (i === 0 ? { ...l, group: 'cytoskeleton' } : l));
    expect(bad({ labels }).ok).toBe(false);
  });

  test('an unknown active_group is an error; an absent one starts the reveal', () => {
    expect(bad({ active_group: 'nope' }).ok).toBe(false);
    const r = mod.validate({ ...base, active_group: undefined });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.params.active_group).toBe(base.groups[0].id);
  });

  test('a group over the cap is rejected, with the split named as the fix', () => {
    const extras: LabelRecord[] = [];
    for (let i = 0; i < MAX_LABELS_PER_GROUP; i++) {
      extras.push({
        id: `extra-${i}`,
        term: { english: `Part ${i}`, hinglish: `भाग ${i}` },
        // Spread far enough apart to clear the 10pt anchor floor, so the ONLY
        // error is the count.
        anchor: { u: 0.05 + i * 0.09, v: 0.9 },
        side: i % 2 === 0 ? 'left' : 'right',
        group: 'organelles',
      });
    }
    const r = bad({ labels: [...base.labels, ...extras] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/at most 10 are drawn at once/);
  });

  test('two anchors under the 10pt glyph floor at 343x236 are rejected', () => {
    // Assertion 8 would fire on the two r=3 anchor dots. The schema's legal
    // range must be a SUBSET of what renders correctly, so this is caught in
    // validate() rather than discovered by the gate.
    const first = base.labels[0];
    const labels = [
      ...base.labels,
      { ...first, id: 'too-close', anchor: { u: first.anchor.u + 0.005, v: first.anchor.v } },
    ];
    const r = bad({ labels });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.join(' ')).toMatch(/glyph floor/);
  });

  test('anchors close together in DIFFERENT groups are fine — they never co-exist', () => {
    const first = base.labels[0]; // organelles
    const labels = [
      ...base.labels,
      {
        ...first,
        id: 'nearby-but-elsewhere',
        group: 'nucleus',
        anchor: { u: first.anchor.u + 0.002, v: first.anchor.v },
      },
    ];
    expect(bad({ labels }).ok).toBe(true);
  });

  test('a remote URL is not a legal art source — the offline guarantee, checked', () => {
    const asString = bad({ art: { ...base.art, source: 'https://r2.example/cell.png' } });
    expect(asString.ok).toBe(false);
    const asUri = bad({ art: { ...base.art, source: { uri: 'https://r2.example/cell.png' } } });
    expect(asUri.ok).toBe(false);
    if (!asUri.ok) expect(asUri.errors.join(' ')).toMatch(/never a remote URL/);
    // A local file the resolver already downloaded is fine — that is the
    // whole point of prefetch.
    expect(bad({ art: { ...base.art, source: { uri: 'file:///cache/cell.png' } } }).ok).toBe(true);
  });
});

/* -------------------------------------------------------------- the layout */

describe('layout', () => {
  test('the font is 12pt at every board size — chrome does not scale', () => {
    for (const b of BOARDS) {
      const tree = JSON.stringify(renderWidgetTreeAt(mod, paramsFor('english', 'organelles'), {}, b.width, b.height));
      expect([b.width, /"fontSize":11(\D|$)/.test(tree)]).toEqual([b.width, false]);
      expect(tree).toContain('"fontSize":12');
    }
  });

  test('rows are at least ROW apart within a column, at every board and language', () => {
    for (const b of BOARDS) {
      for (const lang of ['english', 'hinglish'] as Lang[]) {
        for (const g of base.groups) {
          const { labels } = layoutFigure(paramsFor(lang, g.id), b.width, b.height);
          for (const side of ['left', 'right'] as const) {
            const ys = labels.filter((l) => l.side === side).map((l) => l.ty).sort((x, y) => x - y);
            for (let i = 1; i < ys.length; i++) {
              expect([b.width, lang, g.id, side, ys[i] - ys[i - 1] >= ROW - 1e-9]).toEqual(
                [b.width, lang, g.id, side, true]
              );
            }
          }
        }
      }
    }
  });

  test('no two label boxes overlap — assertion 4, asserted at the schema', () => {
    for (const b of BOARDS) {
      for (const lang of ['english', 'hinglish'] as Lang[]) {
        for (const g of base.groups) {
          const { labels, strip } = layoutFigure(paramsFor(lang, g.id), b.width, b.height);
          const boxes = labels.map((l) => {
            const w = l.plate.w - 6;
            const x0 = l.textAnchor === 'end' ? l.tx - w : l.tx;
            return { s: l.text, x0, x1: x0 + w, y0: l.ty - LABEL_SIZE * 0.82, y1: l.ty - LABEL_SIZE * 0.82 + LABEL_SIZE * 1.15 };
          });
          if (strip) {
            boxes.push({
              s: strip.text, x0: strip.x, x1: strip.x + strip.plate.w - 6,
              y0: strip.y - 14 * 0.82, y1: strip.y - 14 * 0.82 + 14 * 1.15,
            });
          }
          for (let i = 0; i < boxes.length; i++) {
            for (let j = i + 1; j < boxes.length; j++) {
              const a = boxes[i], c = boxes[j];
              const hit = a.x0 < c.x1 && c.x0 < a.x1 && a.y0 < c.y1 && c.y0 < a.y1;
              expect([b.width, lang, a.s, c.s, hit]).toEqual([b.width, lang, a.s, c.s, false]);
            }
          }
        }
      }
    }
  });

  test('a single-group figure reserves no strip, so §1.3 holds for it exactly', () => {
    const one = mod.validate({
      ...base,
      groups: [base.groups[0]],
      labels: base.labels.filter((l) => l.group === base.groups[0].id),
    });
    expect(one.ok).toBe(true);
    if (!one.ok) return;
    const { strip, labels } = layoutFigure(one.params, 343, 236);
    expect(strip).toBeNull();
    expect(Math.min(...labels.map((l) => l.ty))).toBeGreaterThanOrEqual(LABEL_SIZE);
  });

  test('a very wide art falls back to the BOARD band rather than walking off the top', () => {
    // The spec clamps a column to the art's band. A 2000x500 art at 343x236
    // draws only 85.75pt tall; ten labels need 160.2pt, and "shift up by the
    // excess" would put the top label above y=0 and trip assertion 3.
    const labels: LabelRecord[] = [];
    for (let i = 0; i < MAX_LABELS_PER_GROUP; i++) {
      labels.push({
        id: `w${i}`,
        term: { english: `Part ${i}`, hinglish: `भाग ${i}` },
        anchor: { u: 0.04 + i * 0.1, v: 0.5 },
        side: 'left',
        group: 'organelles',
      });
    }
    const r = mod.validate({
      ...base,
      art: { ...base.art, intrinsic_w: 2000, intrinsic_h: 500 },
      groups: [base.groups[0]],
      labels,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const laid = layoutFigure(r.params, 343, 236);
    expect(laid.fit.sH).toBeCloseTo(85.75, 2);
    for (const l of laid.labels) {
      expect(l.ty - LABEL_SIZE * 0.82).toBeGreaterThanOrEqual(-1);
      expect(l.ty + LABEL_SIZE * 0.33).toBeLessThanOrEqual(236 + 1);
    }
  });
});

/* ------------------------------------------------------------ the resolver */

describe('the resolver', () => {
  test('get() is cache-only and returns null on a miss — it cannot fetch', () => {
    expect(placeholderFigureResolver.get(PLACEHOLDER_SLUG)).toBe(PLACEHOLDER_FIGURE);
    expect(placeholderFigureResolver.get('bio11-ch7-cockroach--morphology')).toBeNull();
  });

  test('a seeded record resolves with no prefetch at all', () => {
    const r = createFigureResolver(async () => { throw new Error('no'); }, [PLACEHOLDER_FIGURE]);
    expect(r.get(PLACEHOLDER_SLUG)).not.toBeNull();
    expect(r.cached()).toEqual([PLACEHOLDER_SLUG]);
  });

  test('prefetch reports misses instead of throwing — one 404 must not take down the pass', async () => {
    const report = await placeholderFigureResolver.prefetch([PLACEHOLDER_SLUG, 'not-a-figure']);
    expect(report.resolved).toEqual([PLACEHOLDER_SLUG]);
    expect(report.missing).toEqual(['not-a-figure']);
  });

  test('a network loader is only ever reached through prefetch', async () => {
    let loads = 0;
    const r = createFigureResolver(async (slug) => {
      loads++;
      return { ...PLACEHOLDER_FIGURE, asset_slug: slug };
    });
    expect(r.get('bio-x')).toBeNull();
    expect(loads).toBe(0);      // get() did NOT load
    await r.prefetch(['bio-x']);
    expect(loads).toBe(1);
    expect(r.get('bio-x')).not.toBeNull();
  });
});

/* ------------------------------------------------------- BoardWidget tier */

describe('BoardWidget: the illustration tier', () => {
  const renderEvent = (
    params: Record<string, unknown>,
    figures?: Parameters<typeof BoardWidget>[0]['figures']
  ) => {
    const gaps: [string, unknown][] = [];
    // `.toJSON()` must be read AFTER act() returns — inside it, React 19 has
    // not committed yet and it answers null. See test-utils.ts's header.
    let renderer: TestRenderer.ReactTestRenderer;
    act(() => {
      renderer = TestRenderer.create(
        <BoardWidget
          event={{ seq: 1, tier: 'precomputed', payload: { widget: 'labelled_figure', version: 1, params } }}
          activeSeq={1}
          width={900}
          height={430}
          theme={TEST_THEME}
          services={TEST_SERVICES}
          figures={figures}
          onGap={(reason, detail) => gaps.push([reason, detail])}
        />
      );
    });
    return { tree: renderer!.toJSON(), gaps };
  };

  test('a board event naming a cached slug renders the figure', () => {
    const { tree, gaps } = renderEvent(
      { asset_slug: PLACEHOLDER_SLUG, lang: 'english' },
      placeholderFigureResolver
    );
    expect(gaps).toEqual([]);
    const json = JSON.stringify(tree);
    expect(json).toContain('RNSVGImage');
    expect(json).toContain('"content":"Cell wall"');
  });

  test('an UNCACHED slug renders nothing and logs a gap — it never awaits', () => {
    const { tree, gaps } = renderEvent(
      { asset_slug: 'bio11-ch7-cockroach--morphology', lang: 'english' },
      placeholderFigureResolver
    );
    expect(tree).toBeNull();
    expect(gaps.map((g) => g[0])).toEqual(['figure_not_cached']);
  });

  test('a host with no asset store at all degrades the same way', () => {
    const { tree, gaps } = renderEvent({ asset_slug: PLACEHOLDER_SLUG });
    expect(tree).toBeNull();
    expect(gaps.map((g) => g[0])).toEqual(['figure_not_cached']);
  });

  test('the cue track advances the group — the reveal, in the mechanism that already exists', () => {
    // A cue patches `active_group`; useCueTrack merges, re-validates and
    // re-renders. `animatable: []`, so nothing tweens: this widget is
    // label-terminated and therefore snap-only (CLAUDE.md §3).
    const gaps: [string, unknown][] = [];
    let renderer: TestRenderer.ReactTestRenderer;
    const el = (activeSeq: number) => (
      <BoardWidget
        event={{
          seq: 1,
          tier: 'precomputed',
          payload: {
            widget: 'labelled_figure',
            version: 1,
            params: { asset_slug: PLACEHOLDER_SLUG, lang: 'english' },
            cues: [{ seq: 4, patch: { active_group: 'nucleus' }, caption: 'The nucleus' }],
          },
        }}
        activeSeq={activeSeq}
        width={900}
        height={430}
        theme={TEST_THEME}
        services={TEST_SERVICES}
        figures={placeholderFigureResolver}
        onGap={(reason, detail) => gaps.push([reason, detail])}
      />
    );
    act(() => { renderer = TestRenderer.create(el(1)); });
    expect(JSON.stringify(renderer!.toJSON())).toContain('"content":"Cell wall"');
    act(() => { renderer.update(el(5)); });
    const after = JSON.stringify(renderer!.toJSON());
    expect(after).toContain('"content":"Nucleolus"');
    expect(after).not.toContain('"content":"Cell wall"');
    expect(gaps).toEqual([]);
  });
});

/* ------------------------------------------------------------ derived */

test('derived matches what computeDerived actually returns', () => {
  expect(Object.keys(mod.computeDerived(base)).sort()).toEqual([...mod.derived].sort());
  for (const key of Object.keys(mod.derivedAliases)) expect(mod.derived).toContain(key);
  expect(mod.computeDerived(paramsFor('english', 'nucleus'))).toEqual({
    label_count: 3, group_index: 2, group_count: 2,
  });
});

/* ------------------------------------------------------------- the trees */

describe('render trees for the gate', () => {
  test.each(
    BOARDS.flatMap((b) =>
      (['english', 'hinglish'] as Lang[]).flatMap((lang) =>
        PLACEHOLDER_FIGURE.groups.map((g) => [b.name || 'full', lang, g.id, b] as const)
      )
    )
  )('%s / %s / %s', (_name, lang, group, box) => {
    const tree = renderWidgetTreeAt(mod, paramsFor(lang, group), {}, box.width, box.height);
    expect(tree).not.toBeNull();
    const json = JSON.stringify(tree);
    // The three things that must reach the tree: the art, a leader, a plate.
    expect(json).toContain('RNSVGImage');
    expect(json).toContain('RNSVGLine');
    expect(json).toContain('RNSVGRect');
    expect(json).not.toMatch(/NaN|Infinity/);

    mkdirSync(outDir, { recursive: true });
    const suffix = box.name ? `.${box.name}` : '';
    writeFileSync(
      resolve(outDir, `${mod.id}@${mod.version}.${group}.${lang}${suffix}.json`),
      JSON.stringify(tree, null, 1)
    );
  });
});

/* ------------------------------------------------- the record lands LATE */
/*
 * A live session picks its figure server-side DURING the turn, so the client
 * cannot have prefetched it before the class: `get()` misses on the first
 * render, by construction, for every figure that has ever been shown.
 *
 * The first fix here was a re-render counter owned by BoardWidget. It works
 * only for the instance that owns it, which is the narrowest possible reading
 * of the problem — the record lands in a cache shared by every block, and a
 * re-keyed list, a second block on the same slug, or an unmount between the
 * fetch and its landing each lose the update in a different way. These four
 * tests are those cases.
 */
describe('BoardWidget redraws when the figure record lands', () => {
  const SLUG = 'bio11-ch7-cockroach--morphology-and-digestive-system--a';

  /** A resolver whose loader we control, so "later" is a thing we can time. */
  const deferredResolver = () => {
    let release: (r: FigureRecord) => void = () => {};
    let loads = 0;
    const resolver = createFigureResolver(async (slug) => {
      loads += 1;
      return new Promise<FigureRecord>((res) => {
        release = () => res({ ...PLACEHOLDER_FIGURE, asset_slug: slug });
      });
    });
    return { resolver, release: () => release(PLACEHOLDER_FIGURE), loads: () => loads };
  };

  const mount = (figures: FigureResolver, gaps: [string, unknown][]) =>
    TestRenderer.create(
      <BoardWidget
        event={{ seq: 1, tier: 'precomputed',
                 payload: { widget: 'labelled_figure', version: 1,
                            params: { asset_slug: SLUG, lang: 'english' } } }}
        activeSeq={1}
        width={900}
        height={430}
        theme={TEST_THEME}
        services={TEST_SERVICES}
        figures={figures}
        onGap={(reason, detail) => gaps.push([reason, detail])}
      />
    );

  test('(a) a record arriving after mount redraws THAT instance', async () => {
    const { resolver, release } = deferredResolver();
    const gaps: [string, unknown][] = [];
    let r: TestRenderer.ReactTestRenderer;
    act(() => { r = mount(resolver, gaps); });
    expect(r!.toJSON()).toBeNull();                     // first render: a miss
    expect(gaps.map((g) => g[0])).toEqual(['figure_not_cached']);

    await act(async () => { release(); await Promise.resolve(); });
    // No prop changed, no parent re-rendered, the list was not re-keyed.
    expect(JSON.stringify(r!.toJSON())).toContain('RNSVGImage');
  });

  test('(b) unmounted and remounted after the fetch draws at once, no second fetch', async () => {
    const { resolver, release, loads } = deferredResolver();
    const gaps: [string, unknown][] = [];
    let r: TestRenderer.ReactTestRenderer;
    act(() => { r = mount(resolver, gaps); });
    act(() => { r!.unmount(); });
    await act(async () => { release(); await Promise.resolve(); });
    expect(loads()).toBe(1);

    let r2: TestRenderer.ReactTestRenderer;
    act(() => { r2 = mount(resolver, gaps); });
    expect(JSON.stringify(r2!.toJSON())).toContain('RNSVGImage');
    // Still one. A cache hit must not re-enter the loader.
    expect(loads()).toBe(1);
  });

  test('(c) two blocks on one slug both draw from a single fetch', async () => {
    const { resolver, release, loads } = deferredResolver();
    const gaps: [string, unknown][] = [];
    let a: TestRenderer.ReactTestRenderer;
    let b: TestRenderer.ReactTestRenderer;
    act(() => { a = mount(resolver, gaps); b = mount(resolver, gaps); });
    await act(async () => { release(); await Promise.resolve(); });
    expect(JSON.stringify(a!.toJSON())).toContain('RNSVGImage');
    expect(JSON.stringify(b!.toJSON())).toContain('RNSVGImage');
    // `inFlight` dedupes; two subscribers is not two requests.
    expect(loads()).toBe(1);
  });

  test('(d) a failed fetch logs the gap and never throws', async () => {
    const resolver = createFigureResolver(async (slug) => {
      throw new Error(`404 for ${slug}`);
    });
    const gaps: [string, unknown][] = [];
    let r: TestRenderer.ReactTestRenderer;
    await act(async () => {
      r = mount(resolver, gaps);
      await Promise.resolve();
    });
    // The block stays empty and the classroom draws its text fallback around
    // it. A throw here would take the whole board down for one missing plate.
    expect(r!.toJSON()).toBeNull();
    expect(gaps.map((g) => g[0])).toEqual(['figure_not_cached']);
  });
});
