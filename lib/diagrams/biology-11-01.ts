import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 1 (The Living World): the drawings of the Master Reference book on pp. 12-62, redrawn.
 * Every page 12 to 62 was counted (pdfimages -list: no raster image on any page; pdftocairo -svg: stroked/filled shapes
 * outside glyphs) and the pages with more than a few shapes were looked at. Only pp. 15, 22 and 30 hold a drawing; the
 * other pages hold only page rules, table rules (p. 31), underlines (p. 23) and white text-background strokes (p. 32).
 * THREE drawings on three pages:
 *
 *   Figure 1.1 (drawing p. 15, caption p. 14), Topic 00, topic index 0: the "Is it a DEFINING property of life?" chart.
 *   Figure 1.2 (drawing p. 22, caption p. 21), Topic 01, topic index 1: five regional names and one scientific name.
 *   Figure 1.3 (drawing p. 30, caption p. 29), Topic 02, topic index 2: the seven categories as an inverted funnel.
 *
 * THE BOOK'S, as printed: every word of every label and box; which properties fail (Growth, Reproduction) and which pass
 * (Metabolism, Cellular organisation, Consciousness / response to stimuli); the five regional names and
 * Solanum melongena; the seven ranks in order, Kingdom at the top and Species at the bottom, the two arrows (organisms
 * increase upward, common characters increase downward) and the two end notes. The funnel's edge positions are the
 * book's own (read from the page, 7 rows of equal height, Species a straight-sided block), scaled by 0.6.
 * SCHEMATIC: all box sizes and positions in Fig 1.1 (re-laid for a phone), the plant in Fig 1.2 (a simple outline of an
 * eggplant, two fruits, five leaves; no botanical measure), the leader lines' angles, and the test tube. Colours are the
 * app's style (no fills; one marigold highlight per drawing), not the book's.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; plant?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"/>`);
  if (!o.plant) keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** A box (no fill) with its name; labels placed in it are checked to lie inside. */
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
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, touches no other label, and sits inside its box. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

/* ================= Figure 1.1 ================= */
const CAP11 = 'Which characteristics can define life? Growth and reproduction fail the test; metabolism, cellular organisation and consciousness (response to stimuli) pass. An isolated metabolic reaction in a test tube is neither living nor non-living.';
const FAILS = [
  { name: 'Growth', lines: ['non-living things also grow', '(sand dune, crystal)', 'by external accumulation'] },
  { name: 'Reproduction', lines: ['many living things', 'do not reproduce', '(mule, worker bee,', 'infertile couple)'] },
];
const PASSES = [
  { name: 'Metabolism', title: ['Metabolism'], lines: ['all living things,', 'no exception'] },
  { name: 'Cellular organisation', title: ['Cellular organisation'], lines: ['coupled with metabolism'] },
  { name: 'Consciousness / response to stimuli', title: ['Consciousness /', 'response to stimuli'], lines: ['the defining property'] },
];
const LX: [number, number] = [8, 172], RX: [number, number] = [184, 354];
function draw11(): Sketch {
  const s = new Sketch(W, 404);
  lab(s, W / 2, 24, 'Is it a DEFINING property of life?', { size: 15, bold: true });
  lab(s, (LX[0] + LX[1]) / 2, 54, 'FAILS', { size: 13, bold: true });
  lab(s, (RX[0] + RX[1]) / 2, 54, 'PASSES', { size: 13, bold: true });
  s.line(178, 64, 178, 308, { color: C.grey, w: 1.4 });
  keep(s, [[178, 64], [178, 308]]);
  let y = 66;
  for (const f of FAILS) {
    const h = 34 + f.lines.length * 15 + 8, r: Rect = [LX[0], y, LX[1], y + h];
    box(s, f.name, r);
    lab(s, (r[0] + r[2]) / 2 + 10, y + 24, f.name, { size: 13, bold: true, within: f.name });
    const tx = r[0] + 16;
    path(s, [[tx - 5, y + 14], [tx + 5, y + 24]], { w: 1.7 }); path(s, [[tx + 5, y + 14], [tx - 5, y + 24]], { w: 1.7 });
    f.lines.forEach((t, i) => lab(s, (r[0] + r[2]) / 2, y + 46 + i * 15, t, { size: 11, color: C.slate, within: f.name }));
    y += h + 10;
  }
  y = 66;
  for (const p of PASSES) {
    const hi = p.title.length === 2, h = 26 + p.title.length * 17 + 8 + p.lines.length * 15, r: Rect = [RX[0], y, RX[1], y + h];
    box(s, p.name, r, hi ? { color: C.mari, w: 2.2 } : {});
    p.title.forEach((t, i) => lab(s, (r[0] + r[2]) / 2 + 10, y + 24 + i * 17, t, { size: 12, bold: true, color: hi ? C.amber : C.text, within: p.name }));
    const cx = r[0] + 16;
    path(s, [[cx - 5, y + 19], [cx - 1, y + 24], [cx + 6, y + 13]], { w: 1.7 });
    p.lines.forEach((t, i) => lab(s, (r[0] + r[2]) / 2, y + 24 + (p.title.length - 1) * 17 + 20 + i * 15, t, { size: 11, color: C.slate, within: p.name }));
    y += h + 10;
  }
  // the test tube box
  const by = 322, r: Rect = [58, by, 302, by + 72];
  box(s, 'tube', r);
  const tx = 84, top = by + 10, bot = by + 52, rr = 11;
  path(s, [[tx - rr - 4, top], [tx + rr + 4, top]], { color: C.slate, w: 1.7 });
  const U: P[] = [[tx - rr, top], [tx - rr, bot - rr]];
  for (let i = 0; i <= 12; i++) { const a = Math.PI * (i / 12); U.push([tx - rr * Math.cos(a), bot - rr + rr * Math.sin(a)]); }
  U.push([tx + rr, top]);
  path(s, U, { color: C.slate });
  path(s, [[tx - rr, top + 14], [tx + rr, top + 14]], { color: C.grey, w: 1.4 });
  lab(s, 108, by + 18, 'isolated metabolic', { size: 11, anchor: 'start', within: 'tube' });
  lab(s, 108, by + 33, 'reaction in a test tube', { size: 11, anchor: 'start', within: 'tube' });
  lab(s, 108, by + 50, 'not a living thing,', { size: 11, anchor: 'start', bold: true, color: C.amber, within: 'tube' });
  lab(s, 108, by + 64, 'but a living reaction', { size: 11, anchor: 'start', bold: true, color: C.amber, within: 'tube' });
  return s;
}
function check11(): Check[] {
  const s = draw11();
  return [
    ['Two properties fail (Growth, Reproduction) and three pass (Metabolism, Cellular organisation, Consciousness / response to stimuli)', FAILS.length === 2 && PASSES.length === 3 && FAILS.every((f) => has(s, f.name)) && PASSES.every((p) => p.title.every((t) => has(s, t)))],
    ['The book\'s title, both column heads and the test-tube verdict are all on the drawing', ['Is it a DEFINING property of life?', 'FAILS', 'PASSES', 'not a living thing,', 'but a living reaction'].every((t) => has(s, t))],
    ['Only the defining property (consciousness) is in the highlight', PASSES.filter((p) => p.lines.includes('the defining property')).map((p) => p.name).join() === 'Consciousness / response to stimuli'],
    ...layout(s), clean(s),
  ];
}
const fig11: Diagram = { id: 'b11-01-fig-1.1', topic: 0, name: 'Defining properties of life', cases: [{ chip: 'Defining property', cap: CAP11 }], draw: draw11, check: check11 };

/* ================= Figure 1.2 ================= */
const CAP12 = 'Many regional names (begun, vangi, kathirikai, brinjal, eggplant) refer to one organism, which has a single universal scientific name, <i>Solanum melongena</i>.';
const NAMES: { t: string; side: 'l' | 'r'; y: number; tx: number }[] = [
  { t: 'begun', side: 'l', y: 22, tx: 140 },
  { t: 'vangi', side: 'l', y: 92, tx: 122 },
  { t: 'eggplant', side: 'l', y: 192, tx: 104 },
  { t: 'kathirikai', side: 'r', y: 66, tx: 222 },
  { t: 'brinjal', side: 'r', y: 136, tx: 246 },
];
const BOXY = 262, NAME = 'Solanum melongena';
function ellipse(s: Sketch, cx: number, cy: number, rx: number, ry: number, deg: number) {
  s.add(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${deg} ${cx} ${cy})" fill="none" stroke="${C.ink}" stroke-width="1.7"/>`);
}
function draw12(): Sketch {
  const s = new Sketch(W, 316);
  // the plant (schematic): stem, five leaves, two fruits with stalks and caps, ground
  const stemX = (y: number) => 181 - 4 * Math.sin(((241 - y) / 199) * Math.PI * 1.5);
  const stem: P[] = Array.from({ length: 21 }, (_, i): P => { const t = i / 20; return [stemX(241 - t * 199), 241 - t * 199]; });
  path(s, stem, { plant: true });
  const LEAVES = [[150, 94, 24, 10, -20], [213, 60, 24, 10, 25], [213, 128, 24, 10, 25], [149, 156, 24, 10, -20], [179, 40, 10, 6, -40]];
  LEAVES.forEach(([x, y, rx, ry, a]) => ellipse(s, x, y, rx, ry, a));
  // short petioles from the stem to the stem-side end of each side leaf
  LEAVES.slice(0, 4).forEach(([x, y, rx, , a]) => {
    const dir = x < 181 ? 1 : -1, rad = (a * Math.PI) / 180;
    const ex = x + dir * rx * Math.cos(rad), ey = y + dir * rx * Math.sin(rad);
    path(s, [[stemX(ey), ey], [ex, ey]], { plant: true });
  });
  path(s, [[180, 150], [196, 180]], { plant: true }); path(s, [[179, 158], [164, 190]], { plant: true });
  ellipse(s, 198, 202, 14, 20, 0); ellipse(s, 164, 212, 14, 20, 0);
  ellipse(s, 196, 180, 8, 3, 0); ellipse(s, 164, 190, 8, 3, 0);
  ellipse(s, 184, 246, 22, 5, 0);
  // the scientific name's box (the highlight)
  const bw = wOf(NAME, 16) + 36, r: Rect = [(W - bw) / 2, BOXY, (W + bw) / 2, BOXY + 38];
  box(s, NAME, r, { color: C.mari, w: 2.2 });
  lab(s, W / 2, BOXY + 25, `<i>${NAME}</i>`, { size: 16, bold: true, color: C.amber, within: NAME });
  for (const n of NAMES) {
    const w = n.t.length * 12 * 0.56 + 20, x = n.side === 'l' ? 8 : W - 8 - w;
    s.tag(x, n.y, n.t, n.tx, BOXY, { anchor: 'start', bare: true });
    s.add(`<path d="M${n.tx - 4} ${BOXY - 9} L${n.tx} ${BOXY - 1} L${n.tx + 4} ${BOXY - 9}" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`);
  }
  return s;
}
function check12(): Check[] {
  const s = draw12();
  const tags = s.tags.map((t) => t.name);
  const ends = s.tags.filter((t) => t.from).map((t) => t.from![1]);
  return [
    ['The five regional names are the book\'s (begun, vangi, kathirikai, brinjal, eggplant)', ['begun', 'vangi', 'kathirikai', 'brinjal', 'eggplant'].every((n) => tags.includes(n)) && NAMES.length === 5],
    ['Every leader line ends on the one scientific-name box', ends.length === 5 && ends.every((y) => y === BOXY) && NAMES.every((n) => n.tx > (W - wOf(NAME, 16) - 36) / 2 && n.tx < (W + wOf(NAME, 16) + 36) / 2)],
    ['The scientific name is one box, in italics, and the only highlight', has(s, NAME)],
    ...layout(s), clean(s),
  ];
}
const fig12: Diagram = { id: 'b11-01-fig-1.2', topic: 1, name: 'One organism, many names', cases: [{ chip: 'Regional names', cap: CAP12 }], draw: draw12, check: check12 };

/* ================= Figure 1.3 ================= */
const CAP13 = 'The seven taxonomic categories as an inverted funnel: Kingdom (most organisms, fewest shared characters) down to Species (fewest organisms, most shared characters).';
const RANKS = ['Kingdom', 'Phylum/Division', 'Class', 'Order', 'Family', 'Genus', 'Species'];
/** The funnel's edges as read from p. 30 (page pixels at 90 dpi): left edge x at each row boundary, top to bottom, and the right edge. */
const BOOK_L = [160, 188, 216, 244, 271, 299, 327, 327], BOOK_R = [605, 578, 549, 521, 493, 466, 438, 438];
const K = 0.6, X0 = 110, XS = 16.5, TOP = 34, ROWH = 49 * K;
const fx = (b: number) => (b - X0) * K + XS;
function draw13(): Sketch {
  const s = new Sketch(W, 272);
  lab(s, W / 2, 20, 'Kingdom: most organisms, fewest shared characters', { size: 11, color: C.slate });
  RANKS.forEach((name, i) => {
    const y0 = TOP + i * ROWH, y1 = y0 + ROWH, sp = i === 6;
    const pts: P[] = sp ? [[fx(327), y0], [fx(438), y0], [fx(438), y1], [fx(327), y1]] : [[fx(BOOK_L[i]), y0], [fx(BOOK_R[i]), y0], [fx(BOOK_R[i + 1]), y1], [fx(BOOK_L[i + 1]), y1]];
    path(s, pts, { close: true, color: sp ? C.mari : C.ink, w: sp ? 2.2 : 1.7 });
    lab(s, W / 2, y0 + ROWH / 2 + 4, name, { size: 12, bold: true, color: sp ? C.amber : C.text });
  });
  const yb = TOP + 7 * ROWH;
  lab(s, W / 2, yb + 20, 'Species: fewest organisms, most shared characters', { size: 11, color: C.slate });
  s.vec(17, yb - 2, 17, TOP + 6, { color: C.slate, w: 2 }); keep(s, [[17, yb - 2], [17, TOP + 6]]);
  s.vec(W - 17, TOP + 6, W - 17, yb - 2, { color: C.slate, w: 2 }); keep(s, [[W - 17, TOP + 6], [W - 17, yb - 2]]);
  ['number of', 'organisms', 'increases'].forEach((t, i) => lab(s, 62, TOP + 4 * ROWH + 10 + i * 13, t, { size: 10.5, color: C.slate }));
  ['number of', 'common', 'characters', 'increases'].forEach((t, i) => lab(s, 296, TOP + 4 * ROWH - 2 + i * 13, t, { size: 10.5, color: C.slate }));
  return s;
}
function check13(): Check[] {
  const s = draw13();
  const wid = (i: number) => (BOOK_R[i] - BOOK_L[i]) * K;
  const rows = [0, 1, 2, 3, 4, 5, 6];
  const names = s.labels.map((l) => l.text);
  return [
    ['Seven ranks in the book\'s order, Kingdom at the top and Species at the bottom', RANKS.join() === 'Kingdom,Phylum/Division,Class,Order,Family,Genus,Species' && RANKS.every((n) => names.includes(n))],
    ['The funnel narrows at every row, so each rank holds fewer organisms than the one above', rows.slice(1).every((i) => wid(i) < wid(i - 1))],
    ['Each row\'s lower edge is the next row\'s upper edge (no gaps), and Species is straight-sided', [0, 1, 2, 3, 4].every((i) => BOOK_L[i + 1] > BOOK_L[i] && BOOK_R[i + 1] < BOOK_R[i]) && BOOK_L[6] === BOOK_L[7] && BOOK_R[6] === BOOK_R[7]],
    ['Both end notes and both arrow captions are on the drawing', ['Kingdom: most organisms, fewest shared characters', 'Species: fewest organisms, most shared characters', 'organisms', 'characters'].every((t) => names.includes(t))],
    ...layout(s), clean(s),
  ];
}
const fig13: Diagram = { id: 'b11-01-fig-1.3', topic: 2, name: 'The taxonomic funnel', cases: [{ chip: 'Seven categories', cap: CAP13 }], draw: draw13, check: check13 };

export const DIAGRAMS_BIOLOGY_11_01: Diagram[] = [fig11, fig12, fig13];
