import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 6 (Evolution): the drawings of the Master Reference book on pp. 294-350, redrawn.
 * Every page of the range was looked at (PyMuPDF get_drawings and the page images). The figures sit on their own
 * "CHAPTER 6 . FIGURES" pages: pp. 300, 309, 319 and 327 (the captions are printed on the page before: pp. 299, 308, 318,
 * 326). The hominin table (p. 316) is a table, and the Additional topics (pp. 331-350) hold text and tables only.
 * FOUR drawings:
 *
 *   Figure 6.1 (drawing p. 300), Topic 01, topic index 0: the Miller-Urey apparatus (1953).
 *   Figure 6.2 (drawing p. 309), Topic 02, topic index 1: types of natural selection (three cases: (a) stabilising, (b) directional, (c) disruptive).
 *   Figure 6.3 (drawing p. 319), Topic 03, topic index 2: primate phylogenetic tree, and fossil hominins (two cases).
 *   Figure 6.4 (drawing p. 327), Topic 04, topic index 3: geological timeline of life.
 *
 * THE BOOK'S, as printed: in 6.1 the title and the five lettered labels (A) Electrodes (spark), (B) CH4 + NH3 + H2 + water vapour,
 * (C) Boiling water ("primitive ocean"), (D) Condenser, (E) U-trap (amino acids), "Heat", and the direction of the circulation
 * loop (flask C up and across to flask B, B to the condenser, down through the U-trap and back to C); in 6.2 the three panel
 * titles, the legend (Before selection, After selection, Removed by selection), "Number of individuals" and "Phenotype", the
 * dashed before curve, the solid after curve and which part is removed (both tails in (a), the left tail in (b), the middle in (c));
 * in 6.3 the nine tree leaves in the book's branching order, the chimpanzee-human split marked "Last common ancestor
 * (chimpanzee-human)", the heading "Fossil hominins" with the seven entries in the book's order and every brain-capacity note
 * as printed (ape-sized, ~400-500 cc, 650-800 cc, ~900 cc, 1400 cc, ~1600 cc, ~1350-1600 cc), "older -> younger"; in 6.4 the
 * title, "Animal groups" and the seven groups in the book's order, the dashed 65 mya line labelled "65 mya (dinosaur extinction)",
 * "Adaptive radiation of mammals", the reptile bar with its dark stretch (dinosaurs dominate), the tick values 2000, 600, 500,
 * 400, 300, 200, 100, 0, the axis title, and the plant track Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms with
 * its line "algae -> bryophytes -> pteridophytes -> gymnosperms -> angiosperms". The bar spans in 6.4 were read from the
 * book's vector drawing against its own axis: mammals about 220 mya to now (a thin bar that widens after 65 mya), birds
 * about 150, reptiles about 300 with the dark stretch from about 200 to 65, amphibians and fishes about 350, invertebrates
 * about 500 and single-celled life 2000 mya. The check recomputes them from the pixel positions.
 * SCHEMATIC: all sizes and positions (re-laid for a phone: 6.2 is one panel per case, 6.3 one half per case, 6.4 has its
 * labels beside the bars instead of a legend column); the Gaussian shapes of the 6.2 curves (the book gives no numbers: the
 * widths, peak heights and the cut points are read from its drawing); the plant-track boundaries in 6.4 (about 700, 470,
 * 250 and 120 mya, read from the book's line; it prints none); the tube and flask shapes of 6.1. The book's title for
 * 6.4 axis, "Millions of years ago (mya) -- scale compressed before 600 mya", has its em dash set as a comma (house rule).
 * The book colours 6.1 (green arrows, orange U-trap), 6.2 (shaded tails), 6.3 (orange ancestor, green dots) and 6.4 (a
 * fill per group); the app's style is no fills and one marigold highlight, so the meaning is carried by the labels: the
 * U-trap with its amino acids (6.1), the hatching of what selection removed (6.2), the last common ancestor (6.3) and
 * the 65 mya line (6.4). The Fossil hominins case of 6.3 has no highlight.
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
function circ(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number } = {}) {
  s.add(`<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.4}"/>`);
  keep(s, Array.from({ length: 25 }, (_, i): P => [cx + r * Math.cos((i / 24) * 2 * Math.PI), cy + r * Math.sin((i / 24) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 7}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
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
/** A grey leader from a label to a point it names, ending in a dot. */
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 3 || r[3] > b.rect[3] - 3).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const marigolds = (s: Sketch) => (s.svg().match(/EEA31F/g) ?? []).length;
const sub = (g: string, n: number) => `${g}<sub>${n}</sub>`;

/* ================= Figure 6.1 ================= */
const CAP61 = 'Miller–Urey apparatus. (A) Electrodes produce a spark in the upper flask; (B) the flask holds the gas mixture CH<sub>4</sub> + NH<sub>3</sub> + H<sub>2</sub> + water vapour; (C) boiling water (the “primitive ocean”) supplies water vapour; (D) the condenser cools the vapour; (E) the U-shaped trap collects the condensate, in which amino acids accumulate. Arrows show the circulation loop.';
const FB: Rect = [150, 84, 270, 164], FC: Rect = [58, 270, 178, 350], COND: Rect = [300, 172, 336, 232];
const TUBE: P[] = [[118, 270], [118, 124], [150, 124]];
const TUBE_R: P[] = [[270, 124], [318, 124], [318, 172]];
const TUBE_B: P[] = [[318, 232], [318, 338], [284, 338], [284, 318], [178, 318]];
const ELX = [192, 232];
function draw61(): Sketch {
  const s = new Sketch(W, 396);
  lab(s, 180, 22, 'Miller–Urey Apparatus (1953)', { size: 15, bold: true });
  box(s, 'B', FB);
  box(s, 'C', FC);
  box(s, 'D', COND, { rx: 3 });
  path(s, TUBE); path(s, TUBE_R); path(s, TUBE_B);
  // arrows of the loop
  s.mid(118, 236, 118, 190); s.mid(270, 124, 318, 124); s.mid(318, 250, 318, 300); s.mid(250, 318, 200, 318);
  // electrodes and spark
  ELX.forEach((x) => path(s, [[x, 98], [x, 136]], { w: 3 }));
  ELX.forEach((x) => s.dot(x, 138, 3.4));
  path(s, [[192, 138], [204, 146], [214, 142], [232, 138]], { color: C.slate, w: 1.8 });
  // condenser: a middle wall and short ticks
  path(s, [[318, 176], [318, 228]], { color: C.slate, w: 1.2 });
  [186, 202, 218].forEach((y) => { path(s, [[306, y], [312, y]], { color: C.grey, w: 1.2, track: false }); path(s, [[324, y], [330, y]], { color: C.grey, w: 1.2, track: false }); });
  // boiling water in flask C: a level line and bubbles
  path(s, [[64, 298], [172, 298]], { color: C.slate, w: 1.2, dash: '3 3', track: false });
  [[80, 314], [104, 322], [130, 312], [154, 324]].forEach(([x, y]) => circ(s, x, y, 3.2, { color: C.slate, w: 1.1 }));
  box(s, 'heat', [88, 354, 148, 376], { color: C.slate, w: 1.4, rx: 4 });
  lab(s, 118, 369, 'Heat', { size: 11, color: C.slate, within: 'heat' });
  // the amino acids collecting in the U-trap (the highlight)
  path(s, [[289, 334], [313, 334]], { color: C.mari, w: 3.4, track: false });
  // labels
  lab(s, 8, 46, '(A) Electrodes', { size: 11, anchor: 'start' });
  lab(s, 8, 59, '(spark)', { size: 11, anchor: 'start' });
  leader(s, [58, 66], [192, 104]);
  lab(s, 352, 46, `(B) ${sub('CH', 4)} + ${sub('NH', 3)} + ${sub('H', 2)}`, { size: 11, anchor: 'end' });
  lab(s, 352, 59, '+ water vapour', { size: 11, anchor: 'end' });
  leader(s, [300, 66], [262, 100]);
  lab(s, 8, 216, '(C) Boiling water', { size: 11, anchor: 'start' });
  lab(s, 8, 229, '(“primitive ocean”)', { size: 11, anchor: 'start' });
  leader(s, [30, 238], [74, 292]);
  lab(s, 296, 206, '(D) Condenser', { size: 11, anchor: 'end' });
  leader(s, [300, 202], [304, 202]);
  lab(s, 350, 364, '(E) U-trap', { size: 11, anchor: 'end', color: C.amber });
  lab(s, 350, 377, '(amino acids)', { size: 11, anchor: 'end', color: C.amber });
  leader(s, [334, 350], [313, 335], true);
  return s;
}
function check61(): Check[] {
  const s = draw61();
  const names = ['Miller–Urey Apparatus (1953)', '(A) Electrodes', '(spark)', '(B) CH4 + NH3 + H2', '+ water vapour', '(C) Boiling water', '(“primitive ocean”)', '(D) Condenser', '(E) U-trap', '(amino acids)', 'Heat'];
  const loop = [...TUBE, ...TUBE_R, ...TUBE_B];
  return [
    ['The title and every label of the book are on it: (A) Electrodes (spark), (B) CH4 + NH3 + H2 + water vapour, (C) Boiling water ("primitive ocean"), (D) Condenser, (E) U-trap (amino acids), Heat', names.every((t) => has(s, t))],
    ['The loop is closed and runs C to B to the condenser to the U-trap and back to C: the tube leaves flask C at the top and enters B on its left, leaves B on its right to the condenser, and returns to C along the bottom', TUBE[0][0] > FC[0] && TUBE[0][0] < FC[2] && TUBE[0][1] === FC[1] && TUBE[2][0] === FB[0] && TUBE_R[0][0] === FB[2] && TUBE_R[2][1] === COND[1] && TUBE_B[0][1] === COND[3] && TUBE_B[TUBE_B.length - 1][0] === FC[2] && loop.length === 11],
    ['Four arrows show the circulation: up, right, down and left', (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 4],
    ['The U-trap lies below the condenser and holds the amino acids (the highlight)', TUBE_B[2][1] > COND[3] && marigolds(s) >= 3],
    ['The condenser stands between the upper flask and the trap, the boiling flask lower left and the spark between two electrodes in the upper flask', COND[0] > FB[2] && FC[1] > FB[3] && ELX.every((x) => x > FB[0] && x < FB[2])],
    ...layout(s), clean(s),
  ];
}
const fig61: Diagram = { id: 'b12-06-fig-6.1', topic: 0, name: 'Miller–Urey apparatus', cases: [{ chip: 'Apparatus', cap: CAP61 }], draw: draw61, check: check61 };

/* ================= Figure 6.2 ================= */
const CAP62 = 'Types of natural selection: (a) stabilising, (b) directional, (c) disruptive. Dashed curve = population before selection; solid curve = after selection; shaded = individuals removed by selection.';
type Sel = { title: string; after: (z: number) => number; cut: [number, number][] };
const gau = (z: number, m: number, sd: number, h = 1) => h * Math.exp(-((z - m) ** 2) / (2 * sd * sd));
const before = (z: number) => gau(z, 0, 1);
const SEL: Record<'stab' | 'dir' | 'dis', Sel> = {
  stab: { title: '(a) Stabilising selection', after: (z) => gau(z, 0, 0.62, 1.53), cut: [[-3.4, -0.95], [0.95, 3.4]] },
  dir: { title: '(b) Directional selection', after: (z) => gau(z, 1.15, 0.95), cut: [[-3.4, -0.8]] },
  dis: { title: '(c) Disruptive selection', after: (z) => gau(z, -0.9, 0.5) + gau(z, 0.9, 0.5), cut: [[-0.5, 0.5]] },
};
const YB2 = 292, HT = 110, X0 = 30, XS = 45.6, XC = 185;
const px2 = (z: number) => XC + z * XS, py2 = (v: number) => YB2 - v * HT;
const curve = (f: (z: number) => number): P[] => Array.from({ length: 137 }, (_, i): P => { const z = -3.4 + (6.8 * i) / 136; return [px2(z), py2(f(z))]; });
function draw62(c: { mode: 'stab' | 'dir' | 'dis' }): Sketch {
  const m = SEL[c.mode], s = new Sketch(W, 332);
  lab(s, 180, 22, m.title, { size: 15, bold: true });
  // legend
  path(s, [[14, 46], [44, 46]], { color: C.slate, w: 1.7, dash: '5 4', track: false });
  lab(s, 54, 50, 'Before selection', { size: 11, anchor: 'start' });
  path(s, [[14, 64], [44, 64]], { color: C.ink, w: 2.2, track: false });
  lab(s, 54, 68, 'After selection', { size: 11, anchor: 'start' });
  for (let x = 16; x <= 42; x += 4) path(s, [[x, 76], [x, 86]], { color: C.mari, w: 1.2, track: false });
  lab(s, 54, 86, 'Removed by selection', { size: 11, anchor: 'start', color: C.amber });
  // axes
  s.vec(X0 - 12, YB2, X0 - 12, 112, { color: C.slate, w: 1.4 });
  keep(s, [[X0 - 12, YB2], [X0 - 12, 112]]);
  lab(s, X0 - 4, 114, 'Number of individuals', { size: 10.5, anchor: 'start', color: C.slate });
  path(s, [[X0, YB2], [W - X0, YB2]], { color: C.ink, w: 1.7 });
  lab(s, XC, 314, 'Phenotype', { size: 11, color: C.slate });
  // the removed parts: hatched under the before curve (the highlight)
  m.cut.forEach(([a, b]) => { for (let z = a; z <= b + 1e-9; z += 0.07) path(s, [[px2(z), YB2 - 1], [px2(z), py2(before(z))]], { color: C.mari, w: 1, track: false }); });
  path(s, curve(before), { color: C.slate, w: 1.7, dash: '5 4' });
  path(s, curve(m.after), { color: C.ink, w: 2.4 });
  return s;
}
const argmax = (f: (z: number) => number) => { let b = -3.4, v = -1; for (let z = -3.4; z <= 3.4; z += 0.01) if (f(z) > v) { v = f(z); b = z; } return b; };
const peak = (f: (z: number) => number) => f(argmax(f));
/** The local maxima of a curve. */
const peaks = (f: (z: number) => number) => { const out: number[] = []; for (let z = -3.39; z < 3.39; z += 0.01) if (f(z) > f(z - 0.01) && f(z) >= f(z + 0.01) && f(z) > 0.2) out.push(z); return out; };
function check62(c: { mode: 'stab' | 'dir' | 'dis' }): Check[] {
  const s = draw62(c), m = SEL[c.mode];
  const spec: Record<string, [string, boolean]> = {
    stab: ['Stabilising: the after curve is narrower and higher, centred where the population was; both tails are removed', peak(m.after) > peak(before) && Math.abs(argmax(m.after)) < 0.05 && m.after(1.5) < before(1.5) && m.after(-1.5) < before(-1.5) && m.cut.length === 2 && m.cut[0][1] < 0 && m.cut[1][0] > 0],
    dir: ['Directional: the after curve is the same shape moved to one side (right), and the tail on the other side (left) is removed', Math.abs(peak(m.after) - peak(before)) < 1e-6 && argmax(m.after) > 0.8 && m.cut.length === 1 && m.cut[0][0] < -3 && m.cut[0][1] < 0],
    dis: ['Disruptive: the after curve has two peaks at the two extremes and a dip in the middle, and the middle is removed', peaks(m.after).length === 2 && peaks(m.after)[0] < -0.5 && peaks(m.after)[1] > 0.5 && m.after(0) < 0.5 * before(0) && m.cut.length === 1 && m.cut[0][0] < 0 && m.cut[0][1] > 0],
  };
  return [
    spec[c.mode],
    ['The before curve is the same bell in every panel (peak at the centre, dashed), so the panels compare', Math.abs(argmax(before)) < 0.05 && peak(before) === 1],
    ['Only the removed parts are removed: each cut lies under the before curve where the after curve is below it (or equal)', m.cut.every(([a, b]) => { let ok = true; for (let z = a; z <= b; z += 0.1) if (m.after(z) > before(z) + 0.45) ok = false; return ok; })],
    ['The book\'s title, legend, axis labels are on it: panel title, Before selection, After selection, Removed by selection, Number of individuals, Phenotype', [m.title, 'Before selection', 'After selection', 'Removed by selection', 'Number of individuals', 'Phenotype'].every((t) => has(s, t))],
    ['The hatching of what was removed is the one highlight', marigolds(s) >= 10],
    ...layout(s), clean(s),
  ];
}
const fig62: Diagram = {
  id: 'b12-06-fig-6.2', topic: 1, name: 'Types of natural selection',
  cases: [{ chip: 'Stabilising', mode: 'stab', cap: CAP62 }, { chip: 'Directional', mode: 'dir', cap: CAP62 }, { chip: 'Disruptive', mode: 'dis', cap: CAP62 }],
  draw: draw62, check: check62,
};

/* ================= Figure 6.3 ================= */
const CAP63 = 'Primate phylogenetic tree (left), with the chimpanzee–human split marked as the last common ancestor, and the sequence of fossil hominins with approximate brain capacity (right), oldest at the top. Branching order of the early branches is simplified (tree shrews are close relatives of the primates). Cro-Magnon is an early <i>Homo sapiens</i>, and the Neanderthal and <i>Homo sapiens</i> brain ranges overlap.';
const LEAVES = ['Tree shrews', 'Lemurs & tarsiers', 'New-world monkeys', 'Old-world monkeys', 'Gibbon', 'Orangutan', 'Gorilla', 'Chimpanzee', 'Human'];
const LY = (i: number) => 62 + 30 * i;
const NX = (k: number) => 24 + 22 * k;
const LEAF_END = 206;
/** The bottom of node k's vertical: the middle of the next node's span (the last node spans chimpanzee to human, so the one before it ends at their middle: the ancestor). */
function nodeBottom(k: number): number {
  if (k === 7) return LY(8);
  return (LY(k + 1) + nodeBottom(k + 1)) / 2;
}
const HOMININS: { name: string; note: string; latin: boolean }[] = [
  { name: '<i>Dryopithecus</i> / <i>Ramapithecus</i>', note: 'ape-sized', latin: true },
  { name: '<i>Australopithecus</i>', note: '~400–500 cc', latin: true },
  { name: '<i>Homo habilis</i>', note: '650–800 cc', latin: true },
  { name: '<i>Homo erectus</i>', note: '~900 cc', latin: true },
  { name: 'Neanderthal', note: '1400 cc', latin: false },
  { name: 'Cro-Magnon', note: '~1600 cc', latin: false },
  { name: '<i>Homo sapiens</i>', note: '~1350–1600 cc', latin: true },
];
const HY = (i: number) => 86 + 48 * i;
function draw63(c: { mode: 'tree' | 'fossils' }): Sketch {
  if (c.mode === 'tree') {
    const s = new Sketch(W, 368);
    lab(s, 180, 24, 'Primate Phylogenetic Tree', { size: 15, bold: true });
    // root stub, then the seven nodes
    path(s, [[8, (LY(0) + nodeBottom(0)) / 2], [NX(0), (LY(0) + nodeBottom(0)) / 2]], { w: 1.8 });
    for (let k = 0; k < 8; k++) {
      const top = LY(k), bot = k === 7 ? LY(8) : nodeBottom(k);
      path(s, [[NX(k), top], [NX(k), bot]], { w: 1.8 });
      path(s, [[NX(k), top], [LEAF_END, top]], { w: 1.8 });
      if (k < 7) path(s, [[NX(k), bot], [NX(k + 1), bot]], { w: 1.8 });
    }
    path(s, [[NX(7), LY(8)], [LEAF_END, LY(8)]], { w: 1.8 });
    LEAVES.forEach((t, i) => lab(s, LEAF_END + 7, LY(i) + 4, t, { size: 12, anchor: 'start' }));
    const lca: P = [NX(7), nodeBottom(6)];
    s.dot(lca[0], lca[1], 5.4, C.mari);
    lab(s, 40, 340, 'Last common ancestor', { size: 11, anchor: 'start', color: C.amber });
    lab(s, 40, 353, '(chimpanzee–human)', { size: 11, anchor: 'start', color: C.amber });
    leader(s, [112, 326], [lca[0] - 5, lca[1] + 4], true);
    return s;
  }
  const s = new Sketch(W, 420);
  lab(s, 180, 24, 'Fossil hominins', { size: 15, bold: true });
  lab(s, 8, 52, 'older → younger', { size: 10.5, anchor: 'start', color: C.slate });
  s.vec(26, 64, 26, 404, { color: C.slate, w: 1.5 });
  keep(s, [[26, 64], [26, 404]]);
  path(s, [[70, HY(0)], [70, HY(6)]], { color: C.faint, w: 1.2, dash: '1.5 3.5' });
  HOMININS.forEach((h, i) => {
    s.dot(70, HY(i), 4.8);
    lab(s, 86, HY(i) - 2, h.name, { size: 12.5, anchor: 'start' });
    lab(s, 86, HY(i) + 14, h.note, { size: 11, anchor: 'start', color: C.slate });
  });
  return s;
}
function check63(c: { mode: 'tree' | 'fossils' }): Check[] {
  const s = draw63(c);
  if (c.mode === 'tree') {
    const lca = nodeBottom(6);
    return [
      ['All nine leaves are there in the book\'s order: tree shrews, lemurs and tarsiers, new-world monkeys, old-world monkeys, gibbon, orangutan, gorilla, chimpanzee, human', LEAVES.every((t) => has(s, t)) && LEAVES.every((_, i) => i === 0 || LY(i) > LY(i - 1))],
      ['Each branch point sits halfway between its two sides, so the tree is a true binary tree: the chimpanzee and the human leave the last node together', [0, 1, 2, 3, 4, 5, 6].every((k) => Math.abs(nodeBottom(k) - (LY(k + 1) + nodeBottom(k + 1)) / 2) < 1e-6) && lca === (LY(7) + LY(8)) / 2],
      ['The last common ancestor (chimpanzee–human) is the highlighted dot, where the chimpanzee and human branches split', marigolds(s) >= 2 && has(s, 'Last common ancestor') && has(s, '(chimpanzee–human)') && lca > LY(7) && lca < LY(8)],
      ['The nodes step to the right one by one, the root on the left', [0, 1, 2, 3, 4, 5, 6, 7].every((k) => k === 0 || NX(k) > NX(k - 1))],
      ...layout(s), clean(s),
    ];
  }
  const caps = HOMININS.map((h) => h.note);
  return [
    ['Seven fossil hominins in the book\'s order, oldest at the top: Dryopithecus / Ramapithecus, Australopithecus, Homo habilis, Homo erectus, Neanderthal, Cro-Magnon, Homo sapiens', HOMININS.length === 7 && HOMININS.every((h, i) => has(s, plain(h.name)) && (i === 0 || HY(i) > HY(i - 1)))],
    ['Every brain capacity is as printed: ape-sized, ~400–500 cc, 650–800 cc, ~900 cc, 1400 cc, ~1600 cc, ~1350–1600 cc', caps.join('|') === 'ape-sized|~400–500 cc|650–800 cc|~900 cc|1400 cc|~1600 cc|~1350–1600 cc' && caps.every((t) => has(s, t))],
    ['Scientific names are italic (Dryopithecus, Ramapithecus, Australopithecus, Homo habilis, Homo erectus, Homo sapiens); Neanderthal and Cro-Magnon are not', HOMININS.every((h) => h.latin === h.name.includes('<i>'))],
    ['The "older → younger" arrow runs down the whole list', has(s, 'older → younger')],
    ['There is no highlight in this half (the book\'s one highlight is the ancestor, in the tree)', marigolds(s) === 0],
    ...layout(s), clean(s),
  ];
}
const fig63: Diagram = {
  id: 'b12-06-fig-6.3', topic: 2, name: 'Primate tree and fossil hominins',
  cases: [{ chip: 'Primate tree', mode: 'tree', cap: CAP63 }, { chip: 'Fossil hominins', mode: 'fossils', cap: CAP63 }],
  draw: draw63, check: check63,
};

/* ================= Figure 6.4 ================= */
const CAP64 = 'Geological timeline of life (mya). The dashed line marks the dinosaur mass extinction (~65 mya), followed by the adaptive radiation of mammals. Lower track: plant evolution, algae → bryophytes → pteridophytes → gymnosperms → angiosperms. Values are the book’s (the earliest cells are now dated to about 3.5 bya, the oldest jawless fishes to about 500 mya, well before the first amphibians, and the first land plants to about 470 mya).';
/** x for a time in mya: linear (0.418 px per mya) to 600 mya, then compressed to 2000 mya at the left, as the book's axis is. */
const XM = (m: number) => (m <= 600 ? 336 - 0.418 * m : 85 - (m - 600) * (71 / 1400));
type Grp = { name: string; from: number; row: number; thin?: boolean; dark?: [number, number]; inside?: boolean };
const GROUPS: Grp[] = [
  { name: 'Mammals', from: 220, row: 0, thin: true },
  { name: 'Birds', from: 150, row: 1 },
  { name: 'Reptiles', from: 300, row: 2, dark: [200, 65] },
  { name: 'Amphibians', from: 350, row: 3 },
  { name: 'Fishes', from: 350, row: 4 },
  { name: 'Invertebrates', from: 500, row: 5 },
  { name: 'Single-celled life', from: 2000, row: 6, inside: true },
];
const GY = (row: number) => 118 + 34 * row;
const PLANTS: { name: string; from: number; to: number; up: boolean }[] = [
  { name: 'Algae', from: 2000, to: 700, up: true },
  { name: 'Bryophytes', from: 700, to: 470, up: false },
  { name: 'Pteridophytes', from: 470, to: 250, up: true },
  { name: 'Gymnosperms', from: 250, to: 120, up: false },
  { name: 'Angiosperms', from: 120, to: 0, up: true },
];
const TICKS = [2000, 600, 500, 400, 300, 200, 100, 0];
const YT = 392, YA = 466;
function draw64(): Sketch {
  const s = new Sketch(W, 520);
  lab(s, 180, 24, 'Geological Timeline of Life', { size: 15, bold: true });
  lab(s, 350, 46, '65 mya', { size: 11.5, anchor: 'end', bold: true, color: C.amber });
  lab(s, 350, 59, '(dinosaur extinction)', { size: 11.5, anchor: 'end', bold: true, color: C.amber });
  lab(s, 14, 84, 'Animal groups', { size: 12, anchor: 'start', bold: true });
  lab(s, XM(65) - 8, 90, 'Adaptive radiation of mammals', { size: 10.5, anchor: 'end', color: C.amber });
  GROUPS.forEach((g) => {
    const cy = GY(g.row), x0 = XM(g.from), x1 = XM(0), h = g.thin ? 8 : 22;
    if (g.thin) {
      const xe = XM(65);
      path(s, [[x0, cy - 4], [xe, cy - 4], [x1, cy - 11], [x1, cy + 11], [xe, cy + 4], [x0, cy + 4]], { close: true, w: 1.5 });
    } else box(s, g.name, [x0, cy - h / 2, x1, cy + h / 2], { w: 1.5, rx: 2 });
    // the dark stretch (dinosaurs dominate): the book shades it, here it is outlined heavier
    if (g.dark) path(s, [[XM(g.dark[0]), cy - h / 2], [XM(g.dark[1]), cy - h / 2], [XM(g.dark[1]), cy + h / 2], [XM(g.dark[0]), cy + h / 2]], { close: true, w: 3.2 });
    if (g.inside) lab(s, x0 + 9, cy + 4, g.name, { size: 11, anchor: 'start' });
    else if (g.dark) {
      lab(s, x0 - 8, cy - 1, 'Reptiles', { size: 11, anchor: 'end' });
      lab(s, x0 - 8, cy + 12, '(dark: dinosaurs dominate)', { size: 10, anchor: 'end', color: C.slate });
    } else lab(s, x0 - 8, cy + 4, g.name, { size: 11, anchor: 'end' });
  });
  // the extinction line (the highlight)
  path(s, [[XM(65), 70], [XM(65), GY(6) + 16]], { color: C.mari, w: 2.6, dash: '6 4', track: false });
  // plant track
  lab(s, 14, 358, 'Plant track:', { size: 12, anchor: 'start', bold: true });
  PLANTS.forEach((p, i) => {
    const a = XM(p.from), b = XM(p.to);
    path(s, [[a + (i ? 1 : 0), YT], [b, YT]], { color: i % 2 ? C.slate : C.ink, w: 3.4 });
    lab(s, (a + b) / 2, p.up ? YT - 11 : YT + 22, p.name, { size: 10.5, color: C.text });
  });
  lab(s, 14, 440, 'algae → bryophytes → pteridophytes →', { size: 10, anchor: 'start', color: C.slate });
  lab(s, 14, 453, '→ gymnosperms → angiosperms', { size: 10, anchor: 'start', color: C.slate });
  // axis
  path(s, [[XM(2000), YA], [XM(0), YA]], { color: C.slate, w: 1.4 });
  TICKS.forEach((t) => { path(s, [[XM(t), YA], [XM(t), YA + 6]], { color: C.slate, w: 1.2 }); lab(s, XM(t), YA + 20, String(t), { size: 10, color: C.slate }); });
  lab(s, 180, YA + 42, 'Millions of years ago (mya), scale compressed before 600 mya', { size: 10, color: C.slate });
  return s;
}
function check64(): Check[] {
  const s = draw64();
  const mya = (x: number) => (336 - x) / 0.418;
  const ok = (a: number, b: number) => Math.abs(a - b) < 1;
  const names = ['Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Fishes', 'Invertebrates', 'Single-celled life', 'Animal groups', 'Plant track:', 'Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms', '65 mya', '(dinosaur extinction)', 'Adaptive radiation of mammals', '(dark: dinosaurs dominate)'];
  return [
    ['Seven groups in the book\'s order, top to bottom: mammals, birds, reptiles, amphibians, fishes, invertebrates, single-celled life', GROUPS.map((g) => g.name).join() === 'Mammals,Birds,Reptiles,Amphibians,Fishes,Invertebrates,Single-celled life' && GROUPS.every((g, i) => g.row === i)],
    ['Each group begins where the book\'s bar begins (about 220, 150, 300, 350, 350, 500 and 2000 mya) and runs to the present', ok(mya(XM(220)), 220) && ok(mya(XM(150)), 150) && ok(mya(XM(300)), 300) && ok(mya(XM(350)), 350) && ok(mya(XM(500)), 500) && GROUPS.map((g) => g.from).join() === '220,150,300,350,350,500,2000'],
    ['Older groups have longer bars: single-celled life, invertebrates, then fishes and amphibians together, then reptiles, mammals, birds (the order of the bars\' left ends)', [...GROUPS].sort((a, b) => b.from - a.from).map((g) => g.name).join() === 'Single-celled life,Invertebrates,Amphibians,Fishes,Reptiles,Mammals,Birds' || GROUPS[6].from > GROUPS[5].from && GROUPS[5].from > GROUPS[3].from && GROUPS[3].from === GROUPS[4].from && GROUPS[3].from > GROUPS[2].from && GROUPS[2].from > GROUPS[0].from && GROUPS[0].from > GROUPS[1].from],
    ['The dark stretch of the reptile bar (dinosaurs dominate) runs from about 200 to 65 mya, ending at the dashed line, and the mammals widen only after the line', GROUPS[2].dark![0] === 200 && GROUPS[2].dark![1] === 65 && GROUPS[2].dark![1] === 65 && GROUPS[0].thin === true],
    ['The dashed line stands at 65 mya on the axis and is the one highlight', ok(mya(XM(65)), 65) && marigolds(s) >= 1],
    ['The axis ticks are 2000, 600, 500, 400, 300, 200, 100, 0 and the time runs right to left: 0 on the right, the scale linear to 600 mya', TICKS.join() === '2000,600,500,400,300,200,100,0' && TICKS.every((t, i) => i === 0 || XM(t) > XM(TICKS[i - 1])) && ok(mya(XM(100)), 100) && ok(mya(XM(600)), 600)],
    ['The plant track runs algae, bryophytes, pteridophytes, gymnosperms, angiosperms, each beginning where the last ends, ending at the present', PLANTS.map((p) => p.name).join() === 'Algae,Bryophytes,Pteridophytes,Gymnosperms,Angiosperms' && PLANTS.every((p, i) => i === 0 || p.from === PLANTS[i - 1].to) && PLANTS[4].to === 0 && PLANTS[0].from === 2000],
    ['The book\'s words are on it: the title, Animal groups, the seven groups, 65 mya (dinosaur extinction), Adaptive radiation of mammals, the reptile note, Plant track and its five stages', names.every((t) => has(s, t)) && has(s, 'Geological Timeline of Life') && has(s, 'algae → bryophytes → pteridophytes →') && has(s, '→ gymnosperms → angiosperms')],
    ...layout(s), clean(s),
  ];
}
const fig64: Diagram = { id: 'b12-06-fig-6.4', topic: 3, name: 'Geological timeline of life', cases: [{ chip: 'Timeline', cap: CAP64 }], draw: draw64, check: check64 };

export const DIAGRAMS_BIOLOGY_12_06: Diagram[] = [fig61, fig62, fig63, fig64];
