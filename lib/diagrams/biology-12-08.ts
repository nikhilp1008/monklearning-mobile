import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 8 (Microbes in Human Welfare): the drawings of the Master Reference book on pp. 408-478, redrawn.
 * The drawn pages were found from the page images and the text dump: the figures sit on their own "CHAPTER 8 . FIGURES" pages
 * (pp. 414, 416, 424, 432, 440, 448, 450) and their captions are printed on the page before (413, 423, 431, 439, 447, 449; Figure
 * 8.3 has no caption page). EIGHT numbered drawings, no unnumbered one:
 *
 *   Figure 8.1 (drawing p. 414), Topic 01, topic index 1: stages of curd making (four steps).
 *   Figure 8.2 (drawing p. 414), Topic 01, topic index 1: dough before and after fermentation.
 *   Figure 8.3 (drawing p. 416), Topic 01, topic index 1: acid against gas (leavening) fermentation, a TABLE the book prints as a figure.
 *   Figure 8.4 (drawing p. 424), Topic 02, topic index 2: microbial products made in a fermentor.
 *   Figure 8.5 (drawing p. 432), Topic 03, topic index 3: flow of sewage through a sewage treatment plant.
 *   Figure 8.6 (drawing p. 440), Topic 04, topic index 4: a floating gas-holder biogas plant.
 *   Figure 8.7 (drawing p. 448), Topic 05, topic index 5: the mode of action of the Bt toxin (three steps and a note).
 *   Figure 8.8 (drawing p. 450), Topic 05, topic index 5: Rhizobium root nodules and Glomus mycorrhiza.
 *
 * THE BOOK'S, as printed: every word of every heading, box, label and note (the numbered step headings 1 Warm milk ... 4 Curd
 * set and 1 Ingestion, 2 Activation, 3 Lysis; the five rows and both columns of the 8.3 table; the product, organism and class of
 * every entry in 8.4; every box, arrow and sludge label of 8.5, with the recycled part dashed and the major part going on to the
 * digester; "biogas (about 60% CH4)" and the inlet, outlet, ground level, stove and gas-outlet labels of 8.6; the Protoxin to
 * Toxin step under "Alkaline gut pH" and the bee note of 8.7; "N from bacteria", "P from fungus", the PO4(3-) at the hypha ends
 * and the soil note of 8.8). The sequences are the book's: steps 1 to 4 of 8.1; the plant flow sewage in, primary, secondary,
 * settling tank, activated sludge, anaerobic digester, biogas; the Bt steps 1 to 3. The book's colours are dropped (the app's
 * style: no fills, ink lines, one marigold highlight per drawing).
 * SCHEMATIC: every position, size and angle (re-laid for a phone width: 8.1, 8.4, 8.5 and 8.7 are columns where the book has a
 * row, the sewage plant is a two-column snake); the number of dots in the glasses of 8.1, the sizes and places of the bubbles of
 * 8.2, the cells of 8.7 and the hyphae and nodules of 8.8 (the book shows six hyphae and two nodules: kept); the 8.5 "Primary
 * sludge" and "Treated water" arrows leave sideways, where the book draws them down and up. Highlights (the app's one marigold per
 * drawing): 8.1 step 3, 8.2 the risen dough, 8.3 the chief-product row, 8.4 the fermentor, 8.5 the aeration tank, 8.6 the floating
 * gas holder, 8.7 the alkaline-gut box, 8.8 the plant root.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: string; track?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.track !== false) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box; tags and pills keep off the outlines too. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  let tgap = Infinity, twhat = '';
  for (const t of s.tags) for (const pts of LINES.get(s) ?? []) { const d = gapTo(t.rect, pts); if (d < tgap) { tgap = d; twhat = t.name; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every tag and pill stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

/* ---------- shared pieces of this chapter ---------- */
const co2 = 'CO<sub>2</sub>';
/** An arrow that the layout check also sees: a line and a filled head. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; dash?: boolean; w?: number } = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.8, dash: o.dash });
  keep(s, [a, b]);
}
/** Rectangle of the drawing's frame names: every one of `names` is a label on the drawing. */
const allHave = (s: Sketch, names: string[]) => names.every((t) => has(s, t));
/** How many arrowheads of a colour the drawing holds (every vec ends in a filled triangle). */
const heads = (s: Sketch, col: string) => (s.svg().match(new RegExp(`<path d="M[\\d.]+ [\\d.]+ L[\\d.]+ [\\d.]+ L[\\d.]+ [\\d.]+ Z" fill="${col}"`, 'g')) ?? []).length;
const marigolds = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;

/* ================= Figure 8.1: stages of curd making ================= */
const CAP81 = 'Stages of curd making: warm milk is inoculated with a spoonful of curd containing live <i>Lactobacillus</i>; the bacteria convert lactose to lactic acid, the pH falls and casein coagulates; vitamin B<sub>12</sub> increases and harmful microbes are checked.';
const CURD = [
  { n: 1, head: 'Warm milk', lines: ['Milk warmed to', 'about 40 °C'], dots: 0, ovals: 0 },
  { n: 2, head: 'Add starter', lines: ['A spoonful of curd', 'with live <i>Lactobacillus</i>', 'is mixed in'], dots: 2, ovals: 0 },
  { n: 3, head: 'Fermentation', lines: ['Bacteria turn lactose', 'into lactic acid;', 'the pH falls'], dots: 8, ovals: 0 },
  { n: 4, head: 'Curd set', lines: ['Casein coagulates', 'Vitamin B<sub>12</sub> rises', 'Harmful microbes', 'are checked'], dots: 0, ovals: 4 },
];
const CH = 90, CG = 24, C0 = 14;
const curdBox = (i: number): Rect => [14, C0 + i * (CH + CG), 346, C0 + i * (CH + CG) + CH];
const GLASS_X: [number, number] = [288, 326];
const DOT_AT: P[] = [[8, 12], [20, 9], [31, 12], [14, 21], [26, 20], [9, 31], [20, 29], [30, 31]];
function draw81(): Sketch {
  const s = new Sketch(W, C0 * 2 + 4 * CH + 3 * CG);
  CURD.forEach((st, i) => {
    const r = curdBox(i), hi = st.n === 3, name = `step ${st.n}`, t = r[1];
    box(s, name, r, hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, 38, t + 52, String(st.n), { size: 22, bold: true, color: hi ? C.amber : C.text, within: name });
    lab(s, 62, t + 24, st.head, { size: 13, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: name });
    st.lines.forEach((ln, k) => lab(s, 62, t + 41 + k * 13, ln, { size: 11.5, anchor: 'start', color: C.slate, within: name }));
    // the glass of milk
    const gx = GLASS_X[0], gy = t + 28, gw = GLASS_X[1] - GLASS_X[0], gh = 44;
    path(s, [[gx, gy], [gx, gy + gh], [gx + gw, gy + gh], [gx + gw, gy]], { w: 1.7 });
    path(s, [[gx, gy], [gx + gw, gy]], { w: 1.7, color: C.grey });
    DOT_AT.slice(0, st.dots).forEach(([dx, dy]) => s.dot(gx + dx, gy + 4 + dy, 2.6));
    ([[10, 15], [26, 14], [16, 27], [30, 28]] as P[]).slice(0, st.ovals).forEach(([dx, dy]) => ell(s, gx + dx, gy + dy + 4, 4.5, 2.8, { w: 1.3 }));
    if (i < 3) arrow(s, [180, r[3] + 3], [180, r[3] + CG - 3]);
  });
  return s;
}
function check81(): Check[] {
  const s = draw81();
  const inGlass = DOT_AT.every(([dx, dy]) => dx > 3 && dx < GLASS_X[1] - GLASS_X[0] - 3 && dy > 3 && dy < 40);
  return [
    ['Four steps, numbered 1 to 4 in the book\'s order: Warm milk, Add starter, Fermentation, Curd set', CURD.map((t) => t.n).join() === '1,2,3,4' && allHave(s, ['Warm milk', 'Add starter', 'Fermentation', 'Curd set'])],
    ['Every line of the book\'s four boxes is on the drawing: about 40 °C; a spoonful of curd with live Lactobacillus; lactose into lactic acid, the pH falls; casein coagulates, vitamin B12 rises, harmful microbes are checked', allHave(s, ['Milk warmed to', 'about 40 °C', 'A spoonful of curd', 'with live Lactobacillus', 'is mixed in', 'Bacteria turn lactose', 'into lactic acid;', 'the pH falls', 'Casein coagulates', 'Vitamin B12 rises', 'Harmful microbes', 'are checked'])],
    ['The glasses fill with bacteria as the steps go: none in step 1, two in step 2, many in step 3, and the set curd of step 4 shows holes, not dots', CURD[0].dots === 0 && CURD[1].dots < CURD[2].dots && CURD[2].dots > 4 && CURD[3].dots === 0 && CURD[3].ovals > 0 && inGlass],
    ['Three arrows join the four boxes, each pointing down from one step to the next', heads(s, C.ink) === 3],
    ['Step 3 (the fermentation itself) is the one marigold highlight', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig81: Diagram = { id: 'b12-08-fig-8.1', topic: 1, name: 'Stages of curd making', cases: [{ chip: 'Four stages', cap: CAP81 }], draw: draw81, check: check81 };

/* ================= Figure 8.2: dough before and after fermentation ================= */
const CAP82 = 'Dough before and after fermentation: the CO<sub>2</sub> released by the microbes (yeast in bread dough, bacteria in idli and dosa batter) is trapped in the dough and makes it rise.';
const B_BOX: Rect = [30, 34, 330, 140], A_BOX: Rect = [30, 226, 330, 336];
const BEFORE: [number, number, number][] = Array.from({ length: 15 }, (_, i) => [60 + 60 * (i % 5), 76 + 24 * Math.floor(i / 5), 9]);
const AFTER: [number, number, number][] = [[70, 302, 14], [110, 274, 9], [150, 308, 17], [190, 274, 13], [230, 300, 11], [270, 280, 15], [300, 312, 10]];
function draw82(): Sketch {
  const s = new Sketch(W, 426);
  lab(s, 180, 24, 'Before fermentation', { size: 12.5, bold: true });
  box(s, 'before', B_BOX);
  lab(s, 180, 54, 'dense dough', { size: 11, color: C.slate, within: 'before' });
  BEFORE.forEach(([x, y, r]) => ell(s, x, y, r, r));
  arrow(s, [180, 146], [180, 196]);
  lab(s, 194, 166, 'microbes', { size: 11, anchor: 'start', bold: true, color: C.slate });
  lab(s, 194, 181, 'ferment', { size: 11, anchor: 'start', bold: true, color: C.slate });
  lab(s, 180, 216, 'After fermentation', { size: 12.5, bold: true, color: C.amber });
  box(s, 'after', A_BOX, { color: C.mari, w: 2.2 });
  lab(s, 180, 246, 'risen, porous dough', { size: 11, color: C.slate, within: 'after' });
  AFTER.forEach(([x, y, r]) => ell(s, x, y, r, r));
  lab(s, 180, 362, `${co2} released by the microbes is trapped`, { size: 12, bold: true });
  lab(s, 180, 377, 'in the dough and makes it rise', { size: 12, bold: true });
  lab(s, 180, 399, 'Bread: <i>Saccharomyces cerevisiae</i> (yeast)', { size: 11, color: C.slate });
  lab(s, 180, 414, 'Idli, dosa batter: bacteria', { size: 11, color: C.slate });
  return s;
}
function check82(): Check[] {
  const s = draw82();
  const apart = AFTER.every(([x, y, r], i) => AFTER.slice(i + 1).every(([x2, y2, r2]) => Math.hypot(x - x2, y - y2) > r + r2 + 2));
  const inside = (b: Rect, list: [number, number, number][]) => list.every(([x, y, r]) => x - r > b[0] + 4 && x + r < b[2] - 4 && y - r > b[1] + 4 && y + r < b[3] - 4);
  const area = (l: [number, number, number][]) => l.reduce((a, [, , r]) => a + Math.PI * r * r, 0);
  return [
    ['Before: dense dough, a packed even grid of 15 equal cells; after: risen, porous dough, bubbles of different sizes that do not touch', BEFORE.length === 15 && new Set(BEFORE.map((b) => b[2])).size === 1 && new Set(AFTER.map((b) => b[2])).size > 4 && apart],
    ['Every bubble lies inside its own box', inside(B_BOX, BEFORE) && inside(A_BOX, AFTER)],
    ['The two dough boxes are the same size, and the gas bubbles take up a real share (over a tenth) of the risen dough', area(AFTER) / ((A_BOX[2] - A_BOX[0]) * (A_BOX[3] - A_BOX[1])) > 0.1 && B_BOX[2] - B_BOX[0] === A_BOX[2] - A_BOX[0]],
    ['Every word the book prints is here: both box titles, the two dough names, microbes ferment, the CO2 note, Bread: Saccharomyces cerevisiae (yeast) and Idli, dosa batter: bacteria', allHave(s, ['Before fermentation', 'After fermentation', 'dense dough', 'risen, porous dough', 'microbes', 'ferment', 'CO2 released by the microbes is trapped', 'in the dough and makes it rise', 'Bread: Saccharomyces cerevisiae (yeast)', 'Idli, dosa batter: bacteria'])],
    ['The arrow runs from the before box to the after box; the risen dough is the one marigold highlight', marigolds(s) === 1 && B_BOX[3] < 196 && 196 < A_BOX[1]],
    ...layout(s), clean(s),
  ];
}
const fig82: Diagram = { id: 'b12-08-fig-8.2', topic: 1, name: 'Dough before and after fermentation', cases: [{ chip: 'Before and after', cap: CAP82 }], draw: draw82, check: check82 };

/* ================= Figure 8.3: acid against gas fermentation (a table the book prints as a figure) ================= */
const CAP83 = 'Comparison of acid (lactic) fermentation and gas (leavening) fermentation: agent, product exploited, effect on the food, examples and extra benefit.';
const TX = 14, COLS = [84, 124, 124];
const TROWS: { f: string[]; a: string[]; g: string[]; hi?: boolean }[] = [
  { f: ['Main agent'], a: ['Lactic acid bacteria', '(e.g. <i>Lactobacillus</i>)'], g: ['Yeast (<i>Saccharomyces</i>', '<i>cerevisiae</i>), or bacteria'] },
  { f: ['Chief product', 'exploited'], a: ['Lactic acid'], g: ['Carbon dioxide (CO<sub>2</sub>)'], hi: true },
  { f: ['Effect on', 'the food'], a: ['Sours, thickens and sets', 'the milk (coagulation)'], g: ['Dough rises and becomes', 'soft and porous'] },
  { f: ['Representative', 'products'], a: ['Curd'], g: ['Bread, idli, dosa'] },
  { f: ['Extra benefit'], a: ['Vitamin B<sub>12</sub> increases;', 'harmful microbes', 'checked'], g: ['Spongy, puffed-up', 'texture'] },
];
const LH = 13, rowH = (r: { f: string[]; a: string[]; g: string[] }) => LH * Math.max(r.f.length, r.a.length, r.g.length) + 14;
const HEAD_H = 40, T0 = 38;
const rowTop = (i: number) => T0 + HEAD_H + TROWS.slice(0, i).reduce((a, r) => a + rowH(r), 0);
const colX = (c: number) => TX + COLS.slice(0, c).reduce((a, b) => a + b, 0);
const TBOT = rowTop(TROWS.length);
function draw83(): Sketch {
  const s = new Sketch(W, TBOT + 16);
  lab(s, 180, 22, 'Acid fermentation vs gas (leavening) fermentation', { size: 11.5, bold: true });
  const cell = (c: number, top: number, h: number, lines: string[], bold: boolean) => {
    const cx = colX(c) + COLS[c] / 2, y0 = top + (h - LH * lines.length) / 2 + 9.5;
    lines.forEach((ln, k) => lab(s, cx, y0 + k * LH, ln, { size: 9.5, bold, color: C.text }));
  };
  [['Feature'], ['Acid fermentation'], ['Gas (leavening)', 'fermentation']].forEach((l, c) => cell(c, T0, HEAD_H, l, true));
  TROWS.forEach((r, i) => { const top = rowTop(i), h = rowH(r); cell(0, top, h, r.f, true); cell(1, top, h, r.a, false); cell(2, top, h, r.g, false); });
  // the grid
  const x1 = TX + COLS.reduce((a, b) => a + b, 0);
  path(s, [[TX, T0], [x1, T0], [x1, TBOT], [TX, TBOT]], { close: true, w: 1.7 });
  path(s, [[TX, T0 + HEAD_H], [x1, T0 + HEAD_H]], { w: 1.7 });
  TROWS.slice(1).forEach((_, i) => path(s, [[TX, rowTop(i + 1)], [x1, rowTop(i + 1)]], { w: 1, color: C.grey }));
  [1, 2].forEach((c) => path(s, [[colX(c), T0], [colX(c), TBOT]], { w: 1, color: C.grey }));
  const hi = TROWS.findIndex((r) => r.hi);
  path(s, [[TX + 2, rowTop(hi) + 1.5], [x1 - 2, rowTop(hi) + 1.5], [x1 - 2, rowTop(hi + 1) - 1.5], [TX + 2, rowTop(hi + 1) - 1.5]], { close: true, w: 2.2, color: C.mari });
  return s;
}
function check83(): Check[] {
  const s = draw83();
  const need = ['Feature', 'Acid fermentation', 'Gas (leavening)', 'fermentation', 'Main agent', 'Lactic acid bacteria', '(e.g. Lactobacillus)', 'Yeast (Saccharomyces', 'cerevisiae), or bacteria', 'Chief product', 'exploited', 'Lactic acid', 'Carbon dioxide (CO2)', 'Effect on', 'the food', 'Sours, thickens and sets', 'the milk (coagulation)', 'Dough rises and becomes', 'soft and porous', 'Representative', 'products', 'Curd', 'Bread, idli, dosa', 'Extra benefit', 'Vitamin B12 increases;', 'harmful microbes', 'checked', 'Spongy, puffed-up', 'texture'];
  const fits = TROWS.every((r) => ([r.f, r.a, r.g] as string[][]).every((cell, c) => cell.every((ln) => wOf(ln, 9.5) * (c === 0 ? 1.08 : 1) <= COLS[c] - 8)));
  return [
    ['The book\'s table: three columns (Feature, Acid fermentation, Gas (leavening) fermentation) and five rows (main agent, chief product exploited, effect on the food, representative products, extra benefit)', TROWS.length === 5 && COLS.length === 3 && ['Main agent', 'Chief product', 'Effect on', 'Representative', 'Extra benefit'].every((t) => has(s, t))],
    ['Every cell of the book is on the drawing, word for word (lines only broken to fit the phone), and the title is the book\'s', allHave(s, need) && has(s, 'Acid fermentation vs gas (leavening) fermentation')],
    ['Acid column: lactic acid bacteria, lactic acid, curd, vitamin B12 up; gas column: yeast or bacteria, CO2, bread, idli, dosa: the acid is the product on the left and the gas on the right, never swapped', TROWS[1].a[0] === 'Lactic acid' && TROWS[1].g[0].startsWith('Carbon dioxide') && TROWS[3].a[0] === 'Curd' && TROWS[3].g[0].startsWith('Bread')],
    ['Every line fits inside its column cell', fits],
    ['The "Chief product exploited" row (lactic acid against carbon dioxide, what the two fermentations differ by) is the one marigold highlight', marigolds(s) === 1 && TROWS.findIndex((r) => r.hi) === 1],
    ...layout(s), clean(s),
  ];
}
const fig83: Diagram = { id: 'b12-08-fig-8.3', topic: 1, name: 'Acid against gas (leavening) fermentation', cases: [{ chip: 'Comparison', cap: CAP83 }], draw: draw83, check: check83 };

/* ================= Figure 8.4: microbial products made in fermentors ================= */
const CAP84 = 'Microbial products of industrial importance, made in fermentors: beverages, antibiotics, acids and enzymes, and bioactive drugs.';
const GROUPS: { head: string; items: [string, string][] }[] = [
  { head: 'Beverages', items: [['Wine, beer', '(<i>Saccharomyces cerevisiae</i>)'], ['Whisky, brandy, rum', '(distilled)']] },
  { head: 'Antibiotics', items: [['Penicillin', '(<i>Penicillium notatum</i>)']] },
  { head: 'Acids and enzymes', items: [['Citric acid', '(<i>Aspergillus niger</i>)'], ['Acetic acid', '(<i>Acetobacter aceti</i>)'], ['Lipase', '(microbial; detergents)'], ['Streptokinase', '(<i>Streptococcus</i>)']] },
  { head: 'Bioactive drugs', items: [['Cyclosporin A', '(<i>Trichoderma polysporum</i>)'], ['Statins', '(<i>Monascus purpureus</i>)']] },
];
const GH = (g: { items: unknown[] }) => 54 + 18 * (g.items.length - 1) + 4, GX0 = 42, GY0 = 114, GGAP = 10;
const gTop = (i: number) => GY0 + GROUPS.slice(0, i).reduce((a, g) => a + GH(g) + GGAP, 0);
const GBOT = gTop(GROUPS.length) - GGAP;
function draw84(): Sketch {
  const s = new Sketch(W, GBOT + 16);
  lab(s, 180, 22, 'Microbial industrial products', { size: 14, bold: true });
  box(s, 'fermentor', [110, 36, 250, 84], { color: C.mari, w: 2.2 });
  lab(s, 180, 58, 'Fermentor', { size: 13, bold: true, color: C.amber, within: 'fermentor' });
  lab(s, 180, 74, '(bioreactor)', { size: 10.5, color: C.slate, within: 'fermentor' });
  const mids = GROUPS.map((g, i) => gTop(i) + GH(g) / 2);
  path(s, [[180, 84], [180, 98], [24, 98], [24, mids[mids.length - 1]]], { w: 1.8, color: C.slate });
  GROUPS.forEach((g, i) => {
    const top = gTop(i), name = g.head;
    box(s, name, [GX0, top, 346, top + GH(g)]);
    arrow(s, [24, mids[i]], [GX0 - 2, mids[i]], { color: C.slate });
    lab(s, GX0 + 14, top + 22, g.head, { size: 13, anchor: 'start', bold: true, within: name });
    g.items.forEach(([nm, org], k) => {
      const y = top + 42 + 18 * k, w = wOf(nm, 11.5) * 1.08;
      lab(s, GX0 + 14, y, nm, { size: 11.5, anchor: 'start', bold: true, within: name });
      lab(s, GX0 + 14 + w + 6, y, org, { size: 11, anchor: 'start', color: C.slate, within: name });
    });
  });
  return s;
}
function check84(): Check[] {
  const s = draw84();
  const names = ['Beverages', 'Antibiotics', 'Acids and enzymes', 'Bioactive drugs', 'Fermentor', '(bioreactor)', 'Wine, beer', '(Saccharomyces cerevisiae)', 'Whisky, brandy, rum', '(distilled)', 'Penicillin', '(Penicillium notatum)', 'Citric acid', '(Aspergillus niger)', 'Acetic acid', '(Acetobacter aceti)', 'Lipase', '(microbial; detergents)', 'Streptokinase', '(Streptococcus)', 'Cyclosporin A', '(Trichoderma polysporum)', 'Statins', '(Monascus purpureus)'];
  return [
    ['One fermentor feeds four product classes, in the book\'s order: Beverages, Antibiotics, Acids and enzymes, Bioactive drugs', GROUPS.map((g) => g.head).join() === 'Beverages,Antibiotics,Acids and enzymes,Bioactive drugs' && allHave(s, names.slice(0, 6))],
    ['Every product and organism of the book\'s boxes is on the drawing, each product with its own microbe: wine, beer (Saccharomyces cerevisiae); penicillin (Penicillium notatum); citric acid (Aspergillus niger); acetic acid (Acetobacter aceti); streptokinase (Streptococcus); cyclosporin A (Trichoderma polysporum); statins (Monascus purpureus); whisky, brandy, rum (distilled); lipase (microbial; detergents)', allHave(s, names)],
    ['Each box is reached by one arrow from the spine under the fermentor', GROUPS.length === 4 && heads(s, C.slate) === 4],
    ['The fermentor is the one marigold highlight', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig84: Diagram = { id: 'b12-08-fig-8.4', topic: 2, name: 'Microbial products made in fermentors', cases: [{ chip: 'Four product classes', cap: CAP84 }], draw: draw84, check: check84 };

/* ================= Figure 8.5: flow of sewage through a treatment plant ================= */
const CAP85 = 'Flow of sewage through a sewage treatment plant (STP): primary treatment (filtration and sedimentation) → secondary (biological) treatment in the aeration tank → settling tank → activated sludge, of which a small part is recycled as inoculum and the major part goes to the anaerobic sludge digester (biogas); the treated water is released into a river.';
type SB = { name: string; rect: Rect; lines: { t: string; bold?: boolean; size?: number; color?: string }[]; hi?: boolean };
const STP: SB[] = [
  { name: 'Sewage in', rect: [14, 14, 150, 46], lines: [{ t: 'Sewage in', bold: true, size: 12 }] },
  { name: 'PRIMARY', rect: [14, 66, 150, 130], lines: [{ t: 'PRIMARY', bold: true, size: 12 }, { t: 'Filtration +' }, { t: 'sedimentation' }] },
  { name: 'SECONDARY', rect: [14, 168, 150, 260], hi: true, lines: [{ t: 'SECONDARY', bold: true, size: 12 }, { t: 'Aeration tank' }, { t: 'Air pumped in;', color: C.slate }, { t: 'flocs form, BOD falls', color: C.slate }] },
  { name: 'Settling tank', rect: [214, 196, 346, 236], lines: [{ t: 'Settling tank', bold: true, size: 12 }] },
  { name: 'Activated sludge', rect: [214, 274, 346, 316], lines: [{ t: 'Activated', bold: true, size: 11.5 }, { t: 'sludge', bold: true, size: 11.5 }] },
  { name: 'Anaerobic sludge digester', rect: [214, 356, 346, 402], lines: [{ t: 'Anaerobic', bold: true, size: 11.5 }, { t: 'sludge digester', bold: true, size: 11.5 }] },
];
type SE = { from: string; to: string; pts: P[]; dash?: boolean };
const STP_EDGES: SE[] = [
  { from: 'Sewage in', to: 'PRIMARY', pts: [[82, 46], [82, 66]] },
  { from: 'PRIMARY', to: 'SECONDARY', pts: [[82, 130], [82, 168]] },
  { from: 'SECONDARY', to: 'Settling tank', pts: [[150, 216], [214, 216]] },
  { from: 'Settling tank', to: 'Activated sludge', pts: [[280, 236], [280, 274]] },
  { from: 'Activated sludge', to: 'SECONDARY', pts: [[214, 295], [82, 295], [82, 260]], dash: true },
  { from: 'Activated sludge', to: 'Anaerobic sludge digester', pts: [[280, 316], [280, 356]] },
];
function draw85(): Sketch {
  const s = new Sketch(W, 420);
  STP.forEach((b) => {
    box(s, b.name, b.rect, b.hi ? { color: C.mari, w: 2.2 } : {});
    const n = b.lines.length, cy = (b.rect[1] + b.rect[3]) / 2, cx = (b.rect[0] + b.rect[2]) / 2, step = 16.5;
    b.lines.forEach((l, k) => lab(s, cx, cy + 4 + (k - (n - 1) / 2) * step, l.t, { size: l.size ?? 11, bold: l.bold, color: b.hi && k < 2 ? C.amber : l.color ?? C.text, within: b.name }));
  });
  STP_EDGES.forEach((e) => {
    const last = e.pts.length - 1;
    for (let k = 0; k < last - 1; k++) { s.line(e.pts[k][0], e.pts[k][1], e.pts[k + 1][0], e.pts[k + 1][1], { color: e.dash ? C.amber : C.ink, w: 1.8, dash: e.dash }); keep(s, [e.pts[k], e.pts[k + 1]]); }
    arrow(s, e.pts[last - 1], e.pts[last], { color: e.dash ? C.amber : C.ink, dash: e.dash });
  });
  lab(s, 92, 154, 'Effluent', { size: 10.5, anchor: 'start', color: C.slate });
  // the three outputs
  arrow(s, [150, 98], [176, 98], { color: C.slate });
  lab(s, 182, 102, 'Primary sludge', { size: 11, anchor: 'start', bold: true, color: C.slate });
  arrow(s, [280, 196], [280, 164]);
  lab(s, 280, 138, 'Treated water', { size: 11, bold: true });
  lab(s, 280, 153, 'into the river', { size: 11, bold: true });
  lab(s, 148, 274, 'Small part recycled', { size: 10.5, color: C.amber });
  lab(s, 148, 287, 'as inoculum', { size: 10.5, color: C.amber });
  lab(s, 268, 342, 'Major part', { size: 10.5, anchor: 'end', color: C.slate });
  arrow(s, [214, 379], [112, 379], { color: C.slate });
  lab(s, 14, 372, 'Biogas', { size: 11, anchor: 'start', bold: true });
  lab(s, 14, 388, `(CH<sub>4</sub>, ${co2}, H<sub>2</sub>S)`, { size: 10, anchor: 'start', color: C.slate });
  return s;
}
function check85(): Check[] {
  const s = draw85();
  const R = (n: string) => STP.find((b) => b.name === n)!.rect;
  const touches = (r: Rect, p: P) => rectDist(r, p) <= 3;
  const ok = STP_EDGES.every((e) => touches(R(e.from), e.pts[0]) && touches(R(e.to), e.pts[e.pts.length - 1]));
  const order = ['Sewage in', 'PRIMARY', 'SECONDARY', 'Settling tank', 'Activated sludge', 'Anaerobic sludge digester'];
  const chain = STP_EDGES.filter((e) => !e.dash).map((e) => e.from + '>' + e.to);
  return [
    ['The plant\'s order is the book\'s: sewage in, primary (filtration + sedimentation), secondary (aeration tank), settling tank, activated sludge, anaerobic sludge digester', chain.join() === 'Sewage in>PRIMARY,PRIMARY>SECONDARY,SECONDARY>Settling tank,Settling tank>Activated sludge,Activated sludge>Anaerobic sludge digester' && order.every((n) => R(n))],
    ['Every arrow starts on the box it leaves and ends on the box it enters', ok],
    ['A small part of the activated sludge is recycled (dashed) to the aeration tank as inoculum; the major part goes to the digester, which gives biogas (CH4, CO2, H2S)', STP_EDGES.some((e) => e.dash && e.from === 'Activated sludge' && e.to === 'SECONDARY') && allHave(s, ['Small part recycled', 'as inoculum', 'Major part', 'Biogas', '(CH4, CO2, H2S)'])],
    ['Every label of the book is here: Effluent, Primary sludge, Treated water into the river, Air pumped in; flocs form, BOD falls', allHave(s, ['Effluent', 'Primary sludge', 'Treated water', 'into the river', 'Air pumped in;', 'flocs form, BOD falls', 'Aeration tank', 'Filtration +', 'sedimentation'])],
    ['The secondary stage (the aeration tank, where BOD falls) is the one marigold highlight', marigolds(s) === 1 && STP.find((b) => b.hi)!.name === 'SECONDARY'],
    ...layout(s), clean(s),
  ];
}
const fig85: Diagram = { id: 'b12-08-fig-8.5', topic: 3, name: 'Flow through a sewage treatment plant', cases: [{ chip: 'Plant flow', cap: CAP85 }], draw: draw85, check: check85 };

/* ================= Figure 8.6: floating gas-holder biogas plant ================= */
const CAP86 = 'Biogas plant (floating gas-holder type): dung and water slurry enters the sealed anaerobic digester, where methanogens act on it; the biogas collects under the floating gas holder and is piped to the stove; the spent slurry leaves through the outlet and is used as manure.';
const DIG: Rect = [104, 188, 266, 302], HOLD: Rect = [116, 96, 254, 210], GROUND = 188;
const METH: P[] = Array.from({ length: 6 }, (_, i): P => [128 + 22 * i, 280]);
function draw86(): Sketch {
  const s = new Sketch(W, 340);
  // ground level, broken where the plant stands
  path(s, [[14, GROUND], [104, GROUND]], { w: 1.4, color: C.slate });
  path(s, [[266, GROUND], [346, GROUND]], { w: 1.4, color: C.slate });
  lab(s, 14, GROUND - 8, 'Ground level', { size: 10.5, anchor: 'start', color: C.slate });
  // digester (open at the top, the holder floats in it)
  path(s, [[116, DIG[1]], [DIG[0], DIG[1]], [DIG[0], DIG[3]], [DIG[2], DIG[3]], [DIG[2], DIG[1]], [254, DIG[1]]], { w: 1.8 });
  lab(s, 185, 236, 'Slurry: sealed, anaerobic;', { size: 10, bold: true });
  lab(s, 185, 251, 'methanogens active', { size: 10, bold: true });
  METH.forEach(([x, y]) => s.dot(x, y, 4));
  lab(s, 185, 322, 'DIGESTER', { size: 12, bold: true });
  // floating gas holder
  box(s, 'holder', HOLD, { color: C.mari, w: 2.4 });
  lab(s, 185, 128, 'Floating gas holder', { size: 12, bold: true, color: C.amber, within: 'holder' });
  lab(s, 185, 150, 'biogas (about 60% CH<sub>4</sub>)', { size: 10, within: 'holder' });
  // gas outlet pipe and stove
  path(s, [[160, HOLD[1]], [160, 56], [272, 56]], { w: 2.4, color: C.slate });
  s.vec(270, 56, 282, 56, { color: C.slate, w: 2.4 });
  lab(s, 176, 46, 'Gas outlet pipe', { size: 10.5, anchor: 'start', bold: true, color: C.slate });
  box(s, 'stove', [282, 28, 346, 84]);
  path(s, [[314, 40], [321, 56], [314, 72], [307, 56]], { close: true, w: 1.6 });
  lab(s, 314, 101, 'Stove', { size: 11, bold: true });
  // inlet and outlet pipes
  path(s, [[24, 226], [DIG[0], 226], [DIG[0], 248], [24, 248], [24, 226]], { w: 1.7 });
  arrow(s, [32, 237], [DIG[0] - 8, 237]);
  lab(s, 14, 272, 'Inlet:', { size: 11, anchor: 'start', bold: true });
  lab(s, 14, 285, 'dung + water', { size: 10.5, anchor: 'start', color: C.slate });
  lab(s, 14, 298, 'slurry', { size: 10.5, anchor: 'start', color: C.slate });
  path(s, [[DIG[2], 252], [330, 252], [330, 274], [DIG[2], 274]], { w: 1.7 });
  arrow(s, [DIG[2] + 8, 263], [322, 263]);
  lab(s, 346, 298, 'Outlet', { size: 11, anchor: 'end', bold: true });
  lab(s, 346, 311, 'spent slurry', { size: 10.5, anchor: 'end', color: C.slate });
  lab(s, 346, 324, 'used as manure', { size: 10.5, anchor: 'end', color: C.slate });
  return s;
}
function check86(): Check[] {
  const s = draw86();
  return [
    ['Every label of the book is on the drawing: Gas outlet pipe, Stove, Floating gas holder, biogas (about 60% CH4), Ground level, Slurry: sealed, anaerobic; methanogens active, DIGESTER, Inlet: dung + water slurry, Outlet: spent slurry used as manure', allHave(s, ['Gas outlet pipe', 'Stove', 'Floating gas holder', 'biogas (about 60% CH4)', 'Ground level', 'Slurry: sealed, anaerobic;', 'methanogens active', 'DIGESTER', 'Inlet:', 'dung + water', 'slurry', 'Outlet', 'spent slurry', 'used as manure'])],
    ['The gas holder floats in the top of the digester: it stands above ground level and dips into the slurry, and the pipe leaves its top for the stove', HOLD[1] < GROUND && HOLD[3] > DIG[1] && HOLD[3] < DIG[3] && HOLD[0] > DIG[0] && HOLD[2] < DIG[2]],
    ['The slurry flows in at the left (inlet) and out at the right (outlet), both below ground level, the outlet lower than the inlet; the six methanogens (green dots in the book) lie in the slurry', 226 > GROUND && 252 > 226 && METH.length === 6 && METH.every(([x, y]) => x > DIG[0] && x < DIG[2] && y > DIG[1] && y < DIG[3])],
    ['The floating gas holder (where the biogas collects) is the one marigold highlight', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig86: Diagram = { id: 'b12-08-fig-8.6', topic: 4, name: 'Floating gas-holder biogas plant', cases: [{ chip: 'Biogas plant', cap: CAP86 }], draw: draw86, check: check86 };

/* ================= Figure 8.7: mode of action of the Bt toxin ================= */
const CAP87 = 'Mode of action of Bt toxin: (1) the larva ingests Bt spores and crystals (inactive protoxin); (2) the alkaline gut pH converts the protoxin into active toxin; (3) the toxin forms pores in the gut-lining cells, the cells lyse and the larva dies; non-target insects are largely unharmed.';
const PH = 104, PG = 24, P0 = 14;
const pTop = (i: number) => P0 + i * (PH + PG);
const BT = [
  { n: 1, head: 'Ingestion', lines: ['Larva eats a leaf carrying', 'Bt spores and crystals', '(inactive protoxin)'] },
  { n: 2, head: 'Activation', lines: ['Gut alkalinity dissolves', 'the crystals; the inactive', 'protoxin becomes active toxin'] },
  { n: 3, head: 'Lysis', lines: ['Toxin makes pores in the', 'gut-lining cells; they swell', 'and lyse, and the larva dies'] },
];
const NOTE_T = pTop(3) - 2, NOTE: Rect = [14, NOTE_T, 346, NOTE_T + 54];
const CELLS = [0, 1, 2, 3].map((i) => 40 + 30 * i), RINGS = [0, 2, 3];
function draw87(): Sketch {
  const s = new Sketch(W, NOTE[3] + 14);
  BT.forEach((p, i) => {
    const t = pTop(i), name = `${p.n} ${p.head}`, r: Rect = [14, t, 346, t + PH];
    box(s, name, r);
    lab(s, 28, t + 22, `${p.n}  ${p.head}`, { size: 13, anchor: 'start', bold: true, within: name });
    p.lines.forEach((ln, k) => lab(s, 176, t + 52 + k * 15, ln, { size: 10.5, anchor: 'start', bold: i === 2 && k === 2, within: name }));
    if (i < 2) arrow(s, [180, r[3] + 3], [180, r[3] + PG - 3]);
  });
  // 1: the larva on a leaf
  const t1 = pTop(0);
  for (let k = 0; k < 5; k++) ell(s, 44 + 13 * k, t1 + 48, 6, 6);
  s.dot(44 + 13 * 5, t1 + 48, 6.5);
  ell(s, 96, t1 + 76, 54, 14);
  ([[68, 76], [90, 71], [110, 79], [126, 73]] as P[]).forEach(([x, y]) => s.dot(x, t1 + y, 2.6));
  // 2: protoxin becomes toxin under an alkaline gut pH
  const t2 = pTop(1);
  box(s, 'alkaline', [28, t2 + 38, 150, t2 + 88], { color: C.mari, w: 2.2 });
  lab(s, 89, t2 + 58, 'Alkaline gut pH', { size: 11, bold: true, color: C.amber, within: 'alkaline' });
  lab(s, 34, t2 + 78, 'Protoxin', { size: 10, anchor: 'start', color: C.slate, within: 'alkaline' });
  lab(s, 142, t2 + 78, 'Toxin', { size: 10, anchor: 'end', bold: true, color: C.amber, within: 'alkaline' });
  arrow(s, [80, t2 + 75], [106, t2 + 75], { color: C.amber });
  // 3: four gut-lining cells, pores in three
  const t3 = pTop(2);
  CELLS.forEach((x, i) => {
    path(s, [[x - 11, t3 + 36], [x + 11, t3 + 36], [x + 11, t3 + 68], [x - 11, t3 + 68]], { close: true, w: 1.6 });
    s.dot(x, t3 + 47, 3.4);
    if (RINGS.includes(i)) ell(s, x, t3 + 74, 6, 6, { w: 2 });
  });
  // the note
  box(s, 'note', NOTE);
  ell(s, 42, NOTE_T + 27, 14, 8, { w: 1.5 });
  path(s, [[38, NOTE_T + 20], [38, NOTE_T + 34]], { w: 1.2, track: false });
  path(s, [[46, NOTE_T + 20], [46, NOTE_T + 34]], { w: 1.2, track: false });
  lab(s, 66, NOTE_T + 24, 'Non-target insects (e.g. a bee) mostly unharmed:', { size: 10.5, anchor: 'start', color: C.slate, within: 'note' });
  lab(s, 66, NOTE_T + 40, 'the toxin acts on a limited group of insects', { size: 10.5, anchor: 'start', color: C.slate, within: 'note' });
  return s;
}
function check87(): Check[] {
  const s = draw87();
  return [
    ['Three steps in the book\'s order: 1 Ingestion, 2 Activation, 3 Lysis, joined by two downward arrows', BT.map((p) => p.n).join() === '1,2,3' && allHave(s, ['1  Ingestion', '2  Activation', '3  Lysis']) && heads(s, C.ink) === 2],
    ['Every line of the three captions is word for word: larva eats a leaf carrying Bt spores and crystals (inactive protoxin); gut alkalinity dissolves the crystals, the inactive protoxin becomes active toxin; toxin makes pores in the gut-lining cells, they swell and lyse, and the larva dies', allHave(s, BT.flatMap((p) => p.lines))],
    ['Step 2 shows Alkaline gut pH acting on Protoxin to give Toxin (the arrow runs from Protoxin to Toxin)', allHave(s, ['Alkaline gut pH', 'Protoxin', 'Toxin'])],
    ['Step 3 draws four gut-lining cells with a pore ring under three of them, as the book does', CELLS.length === 4 && RINGS.join() === '0,2,3'],
    ['The note that non-target insects (e.g. a bee) are largely unharmed because the toxin acts on a limited group of insects is under the steps', allHave(s, ['Non-target insects (e.g. a bee) mostly unharmed:', 'the toxin acts on a limited group of insects']) && NOTE[1] > pTop(2) + PH],
    ['The "Alkaline gut pH" box, where the protoxin is switched on, is the one marigold highlight', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig87: Diagram = { id: 'b12-08-fig-8.7', topic: 5, name: 'Mode of action of the Bt toxin', cases: [{ chip: 'Three steps', cap: CAP87 }], draw: draw87, check: check87 };

/* ================= Figure 8.8: Rhizobium root nodules and Glomus mycorrhiza ================= */
const CAP88 = 'Root system: <i>Rhizobium</i> in root nodules fixes atmospheric nitrogen (N from bacteria), whereas <i>Glomus</i> mycorrhizal hyphae absorb phosphorus from the soil (P from fungus).';
const SOIL: Rect = [14, 32, 346, 346], ROOT: Rect = [148, 56, 196, 322];
const NODULES: [number, number, number][] = [[128, 110, 20], [128, 240, 20]];
const HYPHAE: { a: P; b: P }[] = [
  { a: [196, 100], b: [262, 96] }, { a: [196, 114], b: [286, 124] }, { a: [196, 132], b: [300, 156] },
  { a: [196, 156], b: [294, 192] }, { a: [196, 182], b: [268, 226] }, { a: [196, 206], b: [244, 258] },
];
const PO4 = 'PO<sub>4</sub><sup>3−</sup>';
function draw88(): Sketch {
  const s = new Sketch(W, 360);
  lab(s, 82, 20, 'N from bacteria', { size: 12.5, bold: true });
  lab(s, 268, 20, 'P from fungus', { size: 12.5, bold: true });
  box(s, 'soil', SOIL, { color: C.grey, w: 1.4 });
  lab(s, 338, 316, 'Soil', { size: 10.5, anchor: 'end', color: C.slate });
  lab(s, 180, 336, 'Hyphae reach phosphate beyond the roots', { size: 10.5, color: C.slate });
  // the plant root
  s.add(`<rect x="${ROOT[0]}" y="${ROOT[1]}" width="${ROOT[2] - ROOT[0]}" height="${ROOT[3] - ROOT[1]}" rx="20" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
  keep(s, [[ROOT[0] + 6, ROOT[1] + 3], [ROOT[2] - 6, ROOT[1] + 3], [ROOT[2], ROOT[1] + 20], [ROOT[2], ROOT[3] - 20], [ROOT[2] - 6, ROOT[3] - 3], [ROOT[0] + 6, ROOT[3] - 3], [ROOT[0], ROOT[3] - 20], [ROOT[0], ROOT[1] + 20], [ROOT[0] + 6, ROOT[1] + 3]]);
  lab(s, 172, 186, 'Plant', { size: 11.5, bold: true });
  lab(s, 172, 201, 'root', { size: 11.5, bold: true });
  // nodules with their bacteria
  NODULES.forEach(([x, y, r]) => { ell(s, x, y, r, r, { w: 1.8 }); ([[-7, -6], [6, -8], [0, 7]] as P[]).forEach(([dx, dy]) => s.dot(x + dx, y + dy, 3)); });
  lab(s, 98, 106, 'Root nodules', { size: 11, anchor: 'end', bold: true });
  lab(s, 98, 120, 'with <i>Rhizobium</i>', { size: 11, anchor: 'end' });
  leader(s, [102, 113], [108.2, 113]);
  ['Symbiotic N<sub>2</sub> fixation:', 'N<sub>2</sub> of air converted', 'to usable ammonia'].forEach((t, i) => lab(s, 78, 284 + i * 13, t, { size: 10.5 }));
  // the hyphae, each ending at a phosphate ion
  HYPHAE.forEach(({ a, b }) => { path(s, [a, b], { w: 1.6, color: C.slate }); s.dot(b[0], b[1], 4.5); lab(s, b[0] + 9, b[1] + 4, PO4, { size: 10, anchor: 'start' }); });
  lab(s, 340, 58, '<i>Glomus</i> hyphae', { size: 10.5, anchor: 'end', bold: true, color: C.slate });
  lab(s, 340, 71, '(mycorrhiza)', { size: 10.5, anchor: 'end', color: C.slate });
  leader(s, [296, 80], [240, 97]);
  return s;
}
function check88(): Check[] {
  const s = draw88();
  const hyphaeOk = HYPHAE.every(({ a, b }) => a[0] === ROOT[2] && a[1] > ROOT[1] && a[1] < ROOT[3] && b[0] > a[0] && b[0] < SOIL[2] - 40 && b[1] > SOIL[1] && b[1] < SOIL[3]);
  return [
    ['Every word of the book is on the drawing: N from bacteria, P from fungus, Plant root, Root nodules with Rhizobium, Symbiotic N2 fixation: N2 of air converted to usable ammonia, Glomus hyphae (mycorrhiza), PO4(3-), Soil, Hyphae reach phosphate beyond the roots', allHave(s, ['N from bacteria', 'P from fungus', 'Plant', 'root', 'Root nodules', 'with Rhizobium', 'Symbiotic N2 fixation:', 'N2 of air converted', 'to usable ammonia', 'Glomus hyphae', '(mycorrhiza)', 'PO43−', 'Soil', 'Hyphae reach phosphate beyond the roots'])],
    ['The bacterial side: two nodules, each holding bacteria, on the root; the fungal side: six hyphae leaving the root, each ending at one PO4(3-) ion, all in the soil', NODULES.length === 2 && NODULES.every(([x, , r]) => x + r === ROOT[0]) && HYPHAE.length === 6 && s.labels.filter((l) => l.text === 'PO43−').length === 6 && hyphaeOk],
    ['Nitrogen is credited to the bacteria (left) and phosphorus to the fungus (right), as the book prints', has(s, 'N from bacteria') && has(s, 'P from fungus') && 82 < ROOT[0] && 268 > ROOT[2]],
    ['The plant root, which both partners serve, is the one marigold highlight', marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig88: Diagram = { id: 'b12-08-fig-8.8', topic: 5, name: 'Rhizobium nodules and Glomus mycorrhiza', cases: [{ chip: 'Root system', cap: CAP88 }], draw: draw88, check: check88 };

export const DIAGRAMS_BIOLOGY_12_08: Diagram[] = [fig81, fig82, fig83, fig84, fig85, fig86, fig87, fig88];
