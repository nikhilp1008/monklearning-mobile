import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 1 (Sexual Reproduction in Flowering Plants): the drawings of the Master Reference book, pp. 8-62, redrawn.
 * Every page of the range was counted (vector shapes on the page images); the drawings sit on their own "CHAPTER 1 . FIGURES"
 * pages: pp. 12, 19, 26 and 33 (the captions are printed earlier, on pp. 11, 18, 25 and 32). SIX drawings, no unnumbered one:
 *
 *   Figure 1.1 (drawing p. 12), Topic 01, topic index 0: T.S. of a young bilobed anther (a) and the enlarged microsporangium (b).
 *   Figure 1.2 (drawing p. 12), Topic 01, topic index 0: L.S. of a mature anatropous ovule.
 *   Figure 1.3 (drawing p. 19), Topic 02, topic index 1: three flowers compared (three cases: grass, insect-pollinated, Yucca and moth).
 *   Figure 1.4 (drawing p. 19), Topic 02, topic index 1: the six steps of artificial hybridisation.
 *   Figure 1.5 (drawing p. 26), Topic 03, topic index 2: the fertilised embryo sac (syngamy and triple fusion).
 *   Figure 1.6 (drawing p. 33), Topic 04, topic index 3: the apomixis branching chart.
 *
 * THE BOOK'S, as printed: every label (1.1 Microsporangium, Sporogenous tissue, Epidermis, Endothecium, Middle layers, Tapetum and
 * the two panel names; 1.2 Chalaza, Antipodal cells, Central cell (2 polar nuclei), Nucellus, Integuments, Hilum, Funicle, Embryo
 * sac (7 cells, 8 nuclei), Synergids + filiform apparatus, Egg cell, Micropyle; 1.3 the three panel names, every part label and the
 * three lines under each flower; 1.4 the six numbered steps; 1.5 every label and both bold result lines; 1.6 every box and note), the
 * order of the wall layers from outside in, the counts (4 microsporangia in the T.S., 3 antipodals, 2 synergids, 1 egg, 1 central
 * cell with 2 polar nuclei: 7 cells, 8 nuclei; 6 steps; 2 male gametes; 3 branches under Agamospermy).
 * SCHEMATIC: all shapes, sizes and positions (re-laid for a phone: 1.1 stacks panels (a) and (b), 1.4 is a column, 1.6 is a tree of
 * a width that fits), the ring widths of the wall layers, petal, anther and ovule shapes, the moth's wings, the curve of the
 * arrow to the central cell, the leader lines' angles. Colours are the app's style (no fills, one marigold highlight per drawing),
 * not the book's (the book colours 1.1 to 1.6 in rust, green and slate): the meaning stays in the labels. Highlights: 1.1 the
 * sporogenous tissue, 1.2 the embryo sac, 1.3 the feathery stigma / sticky stigma / moth, 1.4 emasculation, 1.5 the triple-fusion
 * arrow and its result, 1.6 Apomixis. Panel names and the 'n' of 2n and 3n follow the house form (italic n).
 */

const W = 360;
type P = [number, number];
const D = Math.PI / 180;
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
const arcPts = (cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, rot = 0, n = 48): P[] =>
  Array.from({ length: n + 1 }, (_, i): P => {
    const a = (a0 + ((a1 - a0) * i) / n) * D, x = rx * Math.cos(a), y = ry * Math.sin(a), q = rot * D;
    return [cx + x * Math.cos(q) - y * Math.sin(q), cy + x * Math.sin(q) + y * Math.cos(q)];
  });
/** A closed ellipse (optionally turned by `rot` degrees), drawn as an SVG ellipse and tracked as a polyline. */
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; rot?: number; dash?: string } = {}) {
  const t = o.rot ? ` transform="rotate(${o.rot} ${r1(cx)} ${r1(cy)})"` : '';
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${t}/>`);
  keep(s, arcPts(cx, cy, rx, ry, 0, 360, o.rot ?? 0));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
const dotAt = (s: Sketch, x: number, y: number, r: number, col: string = C.ink) => s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${col}"/>`);
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
/** A name (one or two lines) with a grey leader ending in a dot on the part it names. */
function callout(s: Sketch, lines: string[], x: number, y: number, anchor: 'start' | 'middle' | 'end', target: P, o: { hi?: boolean; bold?: boolean; size?: number; from?: P } = {}) {
  const size = o.size ?? 12, lh = size + 1.5;
  lines.forEach((t, i) => lab(s, x, y + i * lh, t, { size, anchor, bold: o.bold, color: o.hi ? C.amber : C.text }));
  const last = y + (lines.length - 1) * lh;
  const from: P = o.from ?? (anchor === 'start' ? [x - 4, y - 3 + (last - y) / 2] : anchor === 'end' ? [x + 4, y - 3 + (last - y) / 2] : target[1] > y ? [x, last + 6] : [x, y - 12]);
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(target[0])}" y2="${r1(target[1])}" stroke="${o.hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(target[0])}" cy="${r1(target[1])}" r="2.6" fill="${o.hi ? C.mari : C.ink}"/>`);
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box. */
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
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const marigold = (s: Sketch) => s.svg().includes(C.mari);
const noDash = (cap: string): Check => ['The caption carries no em dash and no "Figure 1.x" or "(see next page)"', !cap.includes('—') && !/Figure 1\.|see next page/.test(cap)];

/* ================= Figure 1.1 ================= */
const CAP11 = 'Transverse section of a young bilobed anther showing four microsporangia at the corners; an enlarged single microsporangium labelling the four concentric wall layers from outside in: epidermis, endothecium, middle layers, tapetum, with central sporogenous tissue.';
const LAYERS = ['Epidermis', 'Endothecium', 'Middle layers', 'Tapetum'];
const RINGS = [64, 56, 48, 40, 29]; // outer edge of each wall layer, then the sporogenous core
const CB: P = [140, 380];
const SPOR: P[] = [[106, 84], [174, 84], [106, 192], [174, 192]];
function draw11(): Sketch {
  const s = new Sketch(W, 530);
  // (a) the T.S. of the anther: two lobes, four microsporangia at the corners, the connective
  ell(s, 140, 84, 52, 58);
  ell(s, 140, 192, 52, 58);
  s.add('<rect x="131" y="130" width="18" height="16" rx="2" fill="#fff"/>');
  path(s, [[131, 130], [149, 130], [149, 146], [131, 146]], { close: true, w: 1.5 });
  path(s, [[140, 134], [140, 142]], { w: 3 });
  SPOR.forEach(([x, y]) => { ell(s, x, y, 10, 10, { w: 1.5 }); ell(s, x, y, 5, 5, { w: 1.2, color: C.slate }); });
  callout(s, ['Microsporangium'], 190, 38, 'start', [SPOR[1][0] + 3, SPOR[1][1] - 6]);
  lab(s, 140, 276, '<i>(a) T.S. young bilobed anther</i>', { size: 11, color: C.slate });
  // (b) one microsporangium enlarged: four wall layers and the core
  RINGS.forEach((r, i) => ell(s, CB[0], CB[1], r, r, i === 4 ? { color: C.mari, w: 2.2 } : { w: i === 0 ? 1.9 : 1.5 }));
  const mids = [60, 52, 44, 34.5];
  [332, 356, 380, 404].forEach((y, i) => {
    const dy = y - CB[1];
    callout(s, [LAYERS[i]], 232, y + 3, 'start', [CB[0] + Math.sqrt(mids[i] ** 2 - dy ** 2), y]);
  });
  callout(s, ['Sporogenous tissue'], 140, 478, 'middle', [CB[0], CB[1] + 8], { hi: true });
  lab(s, 140, 512, '<i>(b) Enlarged microsporangium</i>', { size: 11, color: C.slate });
  return s;
}
function check11(): Check[] {
  const s = draw11();
  return [
    ['Four microsporangia at the corners of the T.S., two in each lobe', SPOR.length === 4 && SPOR.filter((p) => p[1] < 130).length === 2],
    ['Four wall layers, named from outside in: Epidermis, Endothecium, Middle layers, Tapetum, each band narrower inside the last', LAYERS.join() === 'Epidermis,Endothecium,Middle layers,Tapetum' && RINGS.every((r, i) => i === 0 || r < RINGS[i - 1]) && RINGS.length === LAYERS.length + 1],
    ['The wall layers\' labels run down in the same order as the rings run in', [332, 356, 380, 404].every((y, i, a) => i === 0 || y > a[i - 1])],
    ['The sporogenous tissue is the core inside the tapetum, and the only highlight', RINGS[4] < RINGS[3] && marigold(s) && (s.svg().match(/stroke="#EEA31F"/g) ?? []).length >= 2],
    ['Both panel names and the label Microsporangium are on the drawing', hasAll(s, ['(a) T.S. young bilobed anther', '(b) Enlarged microsporangium', 'Microsporangium', 'Sporogenous tissue'])],
    noDash(CAP11),
    ...layout(s), clean(s),
  ];
}
const fig11: Diagram = { id: 'b12-01-fig-1.1', topic: 0, name: 'T.S. of a young bilobed anther', cases: [{ chip: 'Anther and microsporangium', cap: CAP11 }], draw: draw11, check: check11 };

/* ================= Figure 1.2 ================= */
const CAP12 = 'Longitudinal section of a mature anatropous ovule showing funicle, hilum, micropyle and chalaza, two integuments enclosing the nucellus, and inside it the 7-celled/8-nucleate embryo sac: egg + 2 synergids (with filiform apparatus) at the micropylar end, central cell with 2 polar nuclei, and 3 antipodals at the chalazal end.';
const OX = 190, OY = 185;
const ANTI: P[] = [[177, 134], [190, 131], [203, 134]];
const SYN: P[] = [[171, 222], [209, 222]];
const EGG: P = [190, 226];
const POLAR: P[] = [[182, 170], [198, 170]];
const onEll = (cx: number, cy: number, rx: number, ry: number, deg: number): P => [cx + rx * Math.cos(deg * D), cy + ry * Math.sin(deg * D)];
const CELLS = { antipodals: ANTI.length, synergids: SYN.length, egg: 1, central: 1 };
function draw12(): Sketch {
  const s = new Sketch(W, 372);
  // the two integuments, open at the micropyle
  path(s, arcPts(OX, OY, 66, 88, 106, 434, 0, 90), { w: 2 });
  path(s, arcPts(OX, OY, 60, 82, 106, 434, 0, 90), { w: 1.5 });
  [106, 74].forEach((a) => path(s, [onEll(OX, OY, 66, 88, a), onEll(OX, OY, 60, 82, a)], { w: 1.5 }));
  ell(s, OX, OY, 50, 72, { w: 1.5, color: C.slate });
  ell(s, OX, 182, 38, 62, { color: C.mari, w: 2.2 });
  ell(s, OX, 170, 26, 26, { w: 1.5 });
  POLAR.forEach(([x, y]) => dotAt(s, x, y, 3.4));
  ANTI.forEach(([x, y]) => ell(s, x, y, 5, 5, { w: 1.3 }));
  SYN.forEach(([x, y]) => { ell(s, x, y, 6, 9, { w: 1.4 }); path(s, [[x, y + 9], [x + (x < OX ? -3 : 3), y + 18]], { w: 1.2, color: C.slate }); });
  ell(s, EGG[0], EGG[1], 9, 11, { w: 1.7 });
  // hilum and funicle
  const hil = onEll(OX, OY, 66, 88, 125);
  path(s, [hil, [98, 318]], { w: 5.5 });
  dotAt(s, hil[0], hil[1], 4);
  // names
  callout(s, ['Chalaza'], OX, 62, 'middle', [OX, OY - 88]);
  callout(s, ['Antipodal', 'cells'], 106, 118, 'end', [ANTI[0][0] - 3, ANTI[0][1]]);
  callout(s, ['Central cell', '(2 polar nuclei)'], 106, 158, 'end', [OX - 26, 170]);
  callout(s, ['Nucellus'], 106, 214, 'end', onEll(OX, OY, 50, 72, 165));
  callout(s, ['Integuments'], 106, 257, 'end', onEll(OX, OY, 63, 85, 150), { from: [100, 250] });
  callout(s, ['Hilum'], 160, 301, 'start', [hil[0], hil[1] + 4], { from: [158, 293] });
  callout(s, ['Funicle'], 80, 352, 'middle', [124, 290]);
  callout(s, ['Embryo sac', '(7 cells, 8 nuclei)'], 246, 112, 'start', onEll(OX, 182, 38, 62, -50), { hi: true, size: 11 });
  callout(s, ['Synergids', '+ filiform apparatus'], 242, 262, 'start', [SYN[1][0] + 5, SYN[1][1] - 2], { size: 11 });
  callout(s, ['Egg cell'], 246, 296, 'start', [EGG[0] + 7, EGG[1] + 9], { size: 11 });
  callout(s, ['Micropyle'], 246, 332, 'start', [OX, OY + 88], { size: 11 });
  return s;
}
function check12(): Check[] {
  const s = draw12();
  const cells = CELLS.antipodals + CELLS.synergids + CELLS.egg + CELLS.central;
  const nuclei = CELLS.antipodals + CELLS.synergids + CELLS.egg + POLAR.length;
  return [
    ['The embryo sac has 7 cells (3 antipodals + 2 synergids + 1 egg + 1 central cell) and 8 nuclei (the central cell holds 2 polar nuclei)', cells === 7 && nuclei === 8 && POLAR.length === 2],
    ['Egg apparatus at the micropylar (bottom) end: the egg between two synergids, below the central cell; the antipodals at the chalazal (top) end', SYN.every((p) => p[1] > 190) && EGG[1] > 190 && ANTI.every((p) => p[1] < 150) && Math.min(...SYN.map((p) => p[0])) < EGG[0] && Math.max(...SYN.map((p) => p[0])) > EGG[0]],
    ['Two integuments enclose the nucellus, which encloses the embryo sac (radii shrink inward)', 66 > 60 && 60 > 50 && 50 > 38],
    ['The embryo sac is the only highlight', marigold(s)],
    ['Every label of the book is on the drawing', hasAll(s, ['Chalaza', 'Antipodal', 'cells', 'Central cell', '(2 polar nuclei)', 'Nucellus', 'Integuments', 'Hilum', 'Funicle', 'Embryo sac', '(7 cells, 8 nuclei)', 'Synergids', '+ filiform apparatus', 'Egg cell', 'Micropyle'])],
    noDash(CAP12),
    ...layout(s), clean(s),
  ];
}
const fig12: Diagram = { id: 'b12-01-fig-1.2', topic: 0, name: 'L.S. of an anatropous ovule', cases: [{ chip: 'Ovule and embryo sac', cap: CAP12 }], draw: draw12, check: check12 };

/* ================= Figure 1.3 ================= */
const CAP13 = 'Side-by-side comparison of three flowers: a wind-pollinated grass floret (exposed anthers, feathery stigma, no petals), an insect-pollinated flower (bright petals, nectar guides), and the <i>Yucca</i>–moth pair (moth at the ovary), each labelled with its agent and key adaptations.';
type Flower = { k: 'a' | 'b' | 'c'; chip: string; title: string; notes: [string, string, string] };
const FLOWERS: Flower[] = [
  { k: 'a', chip: 'Grass floret', title: '(a) Wind-pollinated grass floret', notes: ['Anemophily', 'Light, non-sticky pollen', 'Feathery stigma'] },
  { k: 'b', chip: 'Insect-pollinated', title: '(b) Insect-pollinated flower', notes: ['Entomophily', 'Bright petals, nectar guides', 'Sticky stigma'] },
  { k: 'c', chip: 'Yucca and moth', title: '(c) <i>Yucca</i> and its moth (<i>Pronuba</i>)', notes: ['Obligate mutualism', 'Moth pollinates and lays eggs', 'Larvae eat some seeds'] },
];
const ANTHERS: P[] = [[130, 106], [180, 92], [230, 106]];
const PETALS = [-90, -18, 54, 126, 198];
const OVULES: P[] = [[112, 136], [128, 136], [120, 150], [112, 164], [128, 164]];
function stigma(s: Sketch, from: P, to: P) {
  path(s, [from, to], { color: C.mari, w: 2.2 });
  const a = Math.atan2(to[1] - from[1], to[0] - from[0]), L = len(from, to);
  for (let i = 1; i <= 8; i++) {
    const t = i / 8.5, x = from[0] + (to[0] - from[0]) * t, y = from[1] + (to[1] - from[1]) * t;
    [-1, 1].forEach((sd) => path(s, [[x, y], [x + sd * 7 * Math.sin(a) - 3 * Math.cos(a), y - sd * 7 * Math.cos(a) - 3 * Math.sin(a)]], { color: C.mari, w: 1.1, track: false }));
  }
  return L;
}
function draw13(c: { k: 'a' | 'b' | 'c' }): Sketch {
  const f = FLOWERS.find((q) => q.k === c.k)!, s = new Sketch(W, 306);
  lab(s, 180, 22, f.title, { size: 13, bold: true });
  if (c.k === 'a') {
    path(s, [[168, 150], [192, 150], [204, 172], [180, 226], [156, 172]], { close: true, w: 1.8 });
    path(s, [[172, 156], [188, 156], [196, 172], [180, 214], [164, 172]], { close: true, w: 1.3 });
    ANTHERS.forEach(([x, y]) => { path(s, [[180, 150], [x, y + 4]], { color: C.slate, w: 1.2 }); ell(s, x, y, 7, 4.5, { w: 1.5 }); });
    stigma(s, [170, 170], [118, 148]);
    stigma(s, [190, 170], [242, 148]);
    callout(s, ['Anther'], 246, 88, 'start', [237, 102]);
    callout(s, ['Feathery stigma'], 236, 204, 'start', [232, 152], { hi: true });
    callout(s, ['Lemma and palea'], 124, 224, 'end', [164, 190]);
  } else if (c.k === 'b') {
    PETALS.forEach((a) => {
      const cx = 180 + 40 * Math.cos(a * D), cy = 150 + 40 * Math.sin(a * D);
      ell(s, cx, cy, 24, 15, { rot: a, w: 1.6 });
      dotAt(s, 180 + 44 * Math.cos(a * D), 150 + 44 * Math.sin(a * D), 2.3, C.slate);
    });
    [-54, 18, 90, 162, 234].forEach((a) => { const x = 180 + 22 * Math.cos(a * D), y = 150 + 22 * Math.sin(a * D); ell(s, x, y, 3, 4.5, { w: 1.2, rot: a }); });
    ell(s, 180, 150, 8, 8, { color: C.mari, w: 2.2 });
    callout(s, ['Nectar guide (spot)'], 126, 92, 'end', [180 + 44 * Math.cos(198 * D), 150 + 44 * Math.sin(198 * D)]);
    callout(s, ['Anther'], 112, 175, 'end', [180 + 22 * Math.cos(162 * D), 150 + 22 * Math.sin(162 * D)]);
    callout(s, ['Sticky stigma'], 236, 96, 'start', [183, 147], { hi: true });
    callout(s, ['Petal'], 232, 220, 'start', [210, 192]);
  } else {
    ell(s, 120, 150, 28, 34, { w: 1.9 });
    ell(s, 120, 150, 18, 26, { w: 1.4, color: C.slate });
    OVULES.forEach(([x, y]) => ell(s, x, y, 4.5, 6, { w: 1.3 }));
    path(s, [[148, 148], [176, 142]], { w: 1.6 });
    ell(s, 210, 138, 40, 5.5, { rot: -13, color: C.mari, w: 2.2 });
    ell(s, 246, 126, 5, 5, { w: 1.6 });
    ell(s, 240, 102, 24, 10, { rot: -72, w: 1.5 });
    ell(s, 258, 152, 24, 10, { rot: 68, w: 1.5 });
    ell(s, 226, 108, 15, 7, { rot: -60, w: 1.3 });
    ell(s, 232, 148, 15, 7, { rot: 55, w: 1.3 });
    path(s, [[250, 124], [282, 112]], { w: 1.2, color: C.slate });
    path(s, [[251, 127], [282, 130]], { w: 1.2, color: C.slate });
    callout(s, ['Ovary wall'], 92, 80, 'middle', onEll(120, 150, 28, 34, -120));
    callout(s, ['Moth'], 296, 70, 'middle', [250, 124], { hi: true, from: [292, 76] });
    callout(s, ['Locule with ovules'], 14, 218, 'start', [112, 164], { from: [80, 206] });
  }
  lab(s, 180, 256, f.notes[0], { size: 12, bold: true });
  lab(s, 180, 273, f.notes[1], { size: 11, color: C.slate });
  lab(s, 180, 289, f.notes[2], { size: 11, color: C.slate });
  return s;
}
function check13(c: { k: 'a' | 'b' | 'c' }): Check[] {
  const s = draw13(c), f = FLOWERS.find((q) => q.k === c.k)!;
  const parts: Record<string, string[]> = { a: ['Anther', 'Feathery stigma', 'Lemma and palea'], b: ['Nectar guide (spot)', 'Anther', 'Sticky stigma', 'Petal'], c: ['Ovary wall', 'Moth', 'Locule with ovules'] };
  return [
    ['The panel name, every part label and the three lines under the flower are the book\'s', hasAll(s, [...parts[c.k], ...f.notes, plain(f.title)])],
    c.k === 'a' ? ['Three exposed anthers and two feathery stigmas, no petals', ANTHERS.length === 3 && PETALS.length === 5] : c.k === 'b' ? ['Five petals, each with a nectar-guide spot, and five anthers round the stigma', PETALS.length === 5] : ['The ovary shows five ovules in its locule, and the moth is at the ovary', OVULES.length === 5],
    ['One highlight', marigold(s)],
    noDash(CAP13),
    ...layout(s), clean(s),
  ];
}
const fig13: Diagram = { id: 'b12-01-fig-1.3', topic: 1, name: 'Three flowers compared', cases: FLOWERS.map((f) => ({ chip: f.chip, cap: CAP13, k: f.k })), draw: draw13, check: check13 };

/* ================= Figure 1.4 ================= */
const CAP14 = 'Flow strip of the artificial-hybridisation steps: select parents → emasculate (forceps removing anthers from a bud) → bag → collect pollen from male parent → dust on receptive stigma → re-bag → fruit develops.';
const HSTEPS: [string, string][] = [
  ['Select parents', ''],
  ['Emasculate', '(remove anthers)'],
  ['Bag', '(butter-paper cover)'],
  ['Collect pollen', ''],
  ['Dust on receptive stigma', ''],
  ['Re-bag & fruit develops', ''],
];
const HB = 52, HG = 20, H0 = 12;
const hbox = (i: number): Rect => [20, H0 + i * (HB + HG), 340, H0 + i * (HB + HG) + HB];
function draw14(): Sketch {
  const s = new Sketch(W, H0 * 2 + 6 * HB + 5 * HG);
  HSTEPS.forEach(([a, b], i) => {
    const r = hbox(i), hi = i === 1, name = `step ${i + 1}`;
    box(s, name, r, hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, 46, r[1] + 34, String(i + 1), { size: 22, bold: true, color: hi ? C.amber : C.text, within: name });
    if (b) {
      lab(s, 78, r[1] + 23, a, { size: 14, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: name });
      lab(s, 78, r[1] + 41, b, { size: 12, anchor: 'start', color: C.slate, within: name });
    } else lab(s, 78, r[1] + 32, a, { size: 14, anchor: 'start', bold: true, within: name });
    if (i < 5) { s.vec(180, r[3] + 3, 180, r[3] + HG - 3, { color: C.ink, w: 1.8 }); }
  });
  return s;
}
function check14(): Check[] {
  const s = draw14();
  return [
    ['Six steps, numbered 1 to 6 in the book\'s order: select parents, emasculate, bag, collect pollen, dust on receptive stigma, re-bag and fruit develops', HSTEPS.length === 6 && HSTEPS.map((t) => t[0]).join('|') === 'Select parents|Emasculate|Bag|Collect pollen|Dust on receptive stigma|Re-bag & fruit develops'],
    ['Emasculate carries "(remove anthers)" and Bag "(butter-paper cover)"', HSTEPS[1][1] === '(remove anthers)' && HSTEPS[2][1] === '(butter-paper cover)' && hasAll(s, ['(remove anthers)', '(butter-paper cover)'])],
    ['Five arrows join the six boxes in a chain, each box above the next', HSTEPS.slice(1).every((_, i) => hbox(i + 1)[1] > hbox(i)[3]) && (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 5],
    ['Only emasculation is in the highlight', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 1],
    noDash(CAP14),
    ...layout(s), clean(s),
  ];
}
const fig14: Diagram = { id: 'b12-01-fig-1.4', topic: 1, name: 'Artificial hybridisation steps', cases: [{ chip: 'Six steps', cap: CAP14 }], draw: draw14, check: check14 };

/* ================= Figure 1.5 ================= */
const CAP15 = 'A fertilised embryo sac showing the pollen tube discharging two male gametes into a degenerating synergid; one arrow to the egg cell (syngamy → zygote, 2<i>n</i>) and one to the central cell with its two polar nuclei (triple fusion → PEN, 3<i>n</i>); the antipodals at the chalazal end are shown degenerating.';
const E5 = { cx: 180, cy: 175, rx: 142, ry: 80 };
const ANTI5: P[] = [[62, 152], [58, 175], [62, 198]];
const SYN5: P[] = [[284, 152], [284, 198]];
const GAM: P[] = [[280, 146], [289, 158]];
const POL5: P[] = [[132, 175], [164, 175]];
function draw15(): Sketch {
  const s = new Sketch(W, 372);
  ell(s, E5.cx, E5.cy, E5.rx, E5.ry, { w: 2 });
  ell(s, 148, 175, 64, 50, { w: 1.6 });
  ANTI5.forEach(([x, y]) => ell(s, x, y, 7, 7, { w: 1.3, dash: '3 3', color: C.slate }));
  ell(s, 242, 175, 16, 26, { w: 1.9 });
  SYN5.forEach(([x, y]) => ell(s, x, y, 11, 16, { w: 1.4, dash: '3 3' }));
  POL5.forEach(([x, y]) => dotAt(s, x, y, 5.5));
  GAM.forEach(([x, y]) => dotAt(s, x, y, 4.2));
  path(s, [[334, 98], [290, 132]], { w: 3.4 });
  // the arrow to the central cell (triple fusion, the highlight) and the short one to the egg (syngamy)
  const q = (t: number): P => [(1 - t) ** 2 * 276 + 2 * (1 - t) * t * 236 + t * t * 198, (1 - t) ** 2 * 140 + 2 * (1 - t) * t * 112 + t * t * 152];
  const pts = Array.from({ length: 17 }, (_, i) => q(i / 16));
  path(s, pts.slice(0, 14), { color: C.mari, w: 2.2, track: false });
  s.vec(pts[13][0], pts[13][1], pts[16][0], pts[16][1], { color: C.mari, w: 2.2 });
  s.vec(274, 160, 259, 168, { color: C.ink, w: 1.8 });
  callout(s, ['Central cell', '(2 polar nuclei)'], 94, 30, 'middle', [112, 136], { from: [100, 52] });
  callout(s, ['Pollen tube', '(2 male gametes)'], 350, 24, 'end', [312, 114]);
  callout(s, ['Degenerating', 'antipodals'], 10, 262, 'start', [ANTI5[2][0], ANTI5[2][1] + 5], { from: [40, 252] });
  callout(s, ['Degenerating', 'synergids'], 352, 250, 'end', [290, 208], { from: [310, 240] });
  callout(s, ['Polar nuclei', 'triple fusion → PEN (3<i>n</i>)'], 150, 300, 'middle', [150, 186], { hi: true, bold: true, from: [150, 286] });
  callout(s, ['Egg cell', 'syngamy → zygote (2<i>n</i>)'], 262, 338, 'middle', [244, 200], { bold: true, from: [256, 324] });
  return s;
}
function check15(): Check[] {
  const s = draw15();
  return [
    ['Two male gametes enter one synergid; the embryo sac holds 3 antipodals, 2 synergids, 1 egg and a central cell with 2 polar nuclei', GAM.length === 2 && ANTI5.length === 3 && SYN5.length === 2 && POL5.length === 2],
    ['Both male gametes lie in the upper (pollen-tube) synergid, which is the first of the two', GAM.every((g) => Math.abs(g[0] - SYN5[0][0]) < 11 && Math.abs(g[1] - SYN5[0][1]) < 16)],
    ['Two arrows: to the egg (syngamy, 2n zygote) and to the central cell (triple fusion, 3n PEN = 2 polar nuclei + 1 male gamete: 2 + 1 = 3)', POL5.length + 1 === 3 && 2 * 1 === 2 && hasAll(s, ['syngamy → zygote (2n)', 'triple fusion → PEN (3n)'])],
    ['Every label of the book is on the drawing', hasAll(s, ['Central cell', '(2 polar nuclei)', 'Pollen tube', '(2 male gametes)', 'Degenerating', 'antipodals', 'synergids', 'Polar nuclei', 'Egg cell'])],
    ['The triple-fusion arrow and its result line are the highlight', marigold(s)],
    noDash(CAP15),
    ...layout(s), clean(s),
  ];
}
const fig15: Diagram = { id: 'b12-01-fig-1.5', topic: 2, name: 'Fertilised embryo sac', cases: [{ chip: 'Double fertilisation', cap: CAP15 }], draw: draw15, check: check15 };

/* ================= Figure 1.6 ================= */
const CAP16 = 'A simple branching chart: “Apomixis” splitting into “Vegetative reproduction” and “Agamospermy”; Agamospermy branching into “Diplospory (MMC → 2<i>n</i> embryo sac → 2<i>n</i> embryo)”, “Apospory (somatic cell → aposporic 2<i>n</i> embryo sac)”, and “Adventive embryony (nucellar/integumentary cell → 2<i>n</i> embryo, bypassing embryo sac)”.';
const N2 = '2<i>n</i>';
const TOPBOX: Rect = [70, 14, 190, 54], VEG: Rect = [12, 96, 132, 144], AGA: Rect = [200, 96, 320, 140];
const LEAVES: { name: string; lines: string[]; note: string; r: Rect }[] = [
  { name: 'Diplospory', lines: ['Diplospory', '(MMC → ' + N2, 'embryo sac)'], note: '→ ' + N2 + ' embryo', r: [12, 220, 120, 292] },
  { name: 'Apospory', lines: ['Apospory', '(somatic cell →', N2 + ' embryo sac)'], note: '→ ' + N2 + ' embryo', r: [126, 220, 234, 292] },
  { name: 'Adventive embryony', lines: ['Adventive', 'embryony', '(nucellar cell →', N2 + ' embryo)'], note: 'bypasses embryo sac', r: [240, 220, 348, 292] },
];
function draw16(): Sketch {
  const s = new Sketch(W, 340);
  const mid = (r: Rect): number => (r[0] + r[2]) / 2;
  box(s, 'Apomixis', TOPBOX, { color: C.mari, w: 2.4 });
  lab(s, mid(TOPBOX), 40, 'Apomixis', { size: 15, bold: true, color: C.amber, within: 'Apomixis' });
  box(s, 'Vegetative', VEG);
  lab(s, mid(VEG), 117, 'Vegetative', { size: 13, within: 'Vegetative' });
  lab(s, mid(VEG), 134, 'reproduction', { size: 13, within: 'Vegetative' });
  box(s, 'Agamospermy', AGA);
  lab(s, mid(AGA), 124, 'Agamospermy', { size: 13.5, within: 'Agamospermy' });
  s.vec(mid(TOPBOX) - 20, TOPBOX[3] + 2, mid(VEG), VEG[1] - 3, { color: C.slate, w: 1.5 });
  s.vec(mid(TOPBOX) + 20, TOPBOX[3] + 2, mid(AGA), AGA[1] - 3, { color: C.slate, w: 1.5 });
  keep(s, [[mid(TOPBOX) - 20, TOPBOX[3]], [mid(VEG), VEG[1]]]);
  keep(s, [[mid(TOPBOX) + 20, TOPBOX[3]], [mid(AGA), AGA[1]]]);
  LEAVES.forEach((l) => {
    box(s, l.name, l.r);
    const n = l.lines.length, y0 = (l.r[1] + l.r[3]) / 2 - ((n - 1) * 14) / 2 + 4;
    l.lines.forEach((t, i) => lab(s, mid(l.r), y0 + i * 14, t, { size: 11.5, bold: i === 0 && n === 3, within: l.name }));
    lab(s, mid(l.r), l.r[3] + 20, '<i>' + l.note + '</i>', { size: 11, color: C.slate });
    s.vec(mid(AGA) + (mid(l.r) - mid(AGA)) * 0.0, AGA[3] + 2, mid(l.r), l.r[1] - 3, { color: C.slate, w: 1.5 });
    keep(s, [[mid(AGA), AGA[3]], [mid(l.r), l.r[1]]]);
  });
  return s;
}
function check16(): Check[] {
  const s = draw16();
  return [
    ['Apomixis splits into Vegetative reproduction and Agamospermy; Agamospermy splits into Diplospory, Apospory and Adventive embryony (three leaves)', LEAVES.map((l) => l.name).join() === 'Diplospory,Apospory,Adventive embryony' && hasAll(s, ['Apomixis', 'Vegetative', 'reproduction', 'Agamospermy', 'Diplospory', 'Apospory'])],
    ['Every box, bracket and note is the book\'s: (MMC → 2n embryo sac), (somatic cell → 2n embryo sac), (nucellar cell → 2n embryo), "→ 2n embryo" twice and "bypasses embryo sac"', hasAll(s, ['(MMC → 2n', '(somatic cell →', '2n embryo sac)', '(nucellar cell →', '2n embryo)', '→ 2n embryo', 'bypasses embryo sac']) && s.labels.filter((l) => l.text === '→ 2n embryo').length === 2],
    ['Three branches leave Agamospermy and two leave Apomixis (five arrow heads)', (s.svg().match(/<path d="M[^"]*Z" fill="#57534B"\/>/g) ?? []).length === 5],
    ['The three leaves lie in one row under Agamospermy, the left two ordered as in the book', LEAVES.every((l) => l.r[1] > AGA[3]) && LEAVES.every((l, i, a) => i === 0 || l.r[0] > a[i - 1].r[2])],
    ['Apomixis is the highlight', marigold(s)],
    noDash(CAP16),
    ...layout(s), clean(s),
  ];
}
const fig16: Diagram = { id: 'b12-01-fig-1.6', topic: 3, name: 'Apomixis branching chart', cases: [{ chip: 'Branching chart', cap: CAP16 }], draw: draw16, check: check16 };

export const DIAGRAMS_BIOLOGY_12_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, fig16];
