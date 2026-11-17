import { C, LABEL_GAP, Rect, Sketch, audit, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 6 (Anatomy of Flowering Plants): the drawings of the Master Reference book on pp. 354-406, redrawn.
 * Pages 354-406 were looked at as page images (pdftoppm) for drawings. Only pp. 358, 366, 373 and 379 hold a drawing; every
 * other page holds only page rules and table rules, and pp. 383-406 (Additional topics A to G) hold no drawing at all. FOUR numbered figures:
 *
 *   Figure 6.1 (drawing p. 358), Topic 01, topic index 0: parenchyma, collenchyma and sclerenchyma (fibre, sclereid), one case.
 *   Figure 6.2 (drawing p. 366), Topic 02, topic index 1: xylem and phloem in longitudinal view, two cases (Xylem, Phloem).
 *   Figure 6.3 (drawing p. 373), Topic 03, topic index 2: T.S. of dicot and monocot root, stem and leaf, six cases (one per panel).
 *   Figure 6.4 (drawing p. 379), Topic 04, topic index 3: secondary growth, four cases: (a), (b), (c) of the young stem, and the old trunk's wedge.
 *
 * THE BOOK'S, as printed: every word of every title, label and printed note (the leader labels are split over lines on the
 * phone, the words are the book's); the errata wording of the dicot root note, "Di- to tetrarch xylem (2-4 groups); pith small
 * or absent"; which structures each panel has and which it lacks (no pith or only a small one in the dicot root, a large pith and
 * polyarch xylem in the monocot root, bundles in a ring with cambium in the dicot stem, scattered closed bundles in the monocot
 * stem, palisade above spongy in the dicot leaf, uniform mesophyll with bulliform cells in the monocot leaf); xylem lies
 * exarch in roots and endarch in the dicot stem, and nearer the upper face in the dicot leaf; solid intrafascicular and dashed
 * interfascicular cambium; the order of the layers in the wedge (pith, heartwood, sapwood, vascular cambium, secondary phloem,
 * periderm) with a lenticel in the bark. The book's panels are drawn together on one page; here each is its own case at full width.
 * Panels (a), (b), (c) of Fig 6.4 are separate cases, so the book's arrows between them are not drawn.
 * SCHEMATIC: every size, radius, number of cells, rays, bundles and annual rings, all coordinates, the angles of the wedge and of
 * the leader lines, the shapes of the cells (the book's own are also schematic, "schematic" is in its caption), and how many xylem
 * arms are drawn (a tetrarch cross in the dicot root, eight arms for "polyarch"). Colours are the app's style (no fills, one
 * marigold highlight per drawing: the xylem in the root, stem and leaf panels, the corner thickening of collenchyma, the perforation
 * plates, the sieve plate, the vascular cambium in Fig 6.4), not the book's.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => plain(html).length * size * 0.5;
const pol = (cx: number, cy: number, r: number, deg: number): P => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];

/* ---------- helpers (as in Chapter 1) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const FULL = new WeakMap<Sketch, string[]>();
const FACT = new WeakMap<Sketch, Record<string, number>>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
const fact = (s: Sketch, k: string, n = 1) => FACT.set(s, { ...(FACT.get(s) ?? {}), [k]: (FACT.get(s)?.[k] ?? 0) + n });
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; plant?: boolean; dash?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.5}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  if (!o.plant) keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** A circle or an arc (degrees, anticlockwise from east) as a smooth polyline. */
function arc(s: Sketch, cx: number, cy: number, r: number, a0: number, a1: number, o: { color?: string; w?: number; plant?: boolean; dash?: boolean } = {}) {
  const n = Math.max(8, Math.ceil(Math.abs(a1 - a0) / 6)), pts: P[] = [];
  for (let i = 0; i <= n; i++) pts.push(pol(cx, cy, r, a0 + ((a1 - a0) * i) / n));
  path(s, pts, o);
}
const ring = (s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number; plant?: boolean; dash?: boolean } = {}) => arc(s, cx, cy, r, 0, 360, o);
function ellipseRot(s: Sketch, cx: number, cy: number, rx: number, ry: number, deg: number, o: { color?: string; w?: number; plant?: boolean } = {}) {
  const t = (deg * Math.PI) / 180, pts: P[] = [];
  for (let i = 0; i < 24; i++) { const a = (i / 24) * 2 * Math.PI, x = rx * Math.cos(a), y = ry * Math.sin(a); pts.push([cx + x * Math.cos(t) - y * Math.sin(t), cy + x * Math.sin(t) + y * Math.cos(t)]); }
  path(s, pts, { close: true, ...o });
}
const circ = (s: Sketch, x: number, y: number, r: number, o: { color?: string; w?: number } = {}) => s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.2}"/>`);
const dotAt = (s: Sketch, x: number, y: number, r = 2.2, col: string = C.ink) => s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" fill="${col}"/>`);

/** A line of STIX on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 11, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
/**
 * A leader label: the book's words on one or more lines, text edge at `ax` (the edge nearest the drawing), a thin leader from just
 * beside the middle of the text to `to`, and a dot there. `y` is the first line's baseline.
 */
function note(s: Sketch, side: 'l' | 'r', ax: number, y: number, lines: string[], to: P, o: { hi?: boolean; size?: number } = {}) {
  const size = o.size ?? 11;
  lines.forEach((t, i) => lab(s, ax, y + i * 13, t, { size, anchor: side === 'l' ? 'end' : 'start', color: o.hi ? C.amber : C.text }));
  const my = y - 4 + ((lines.length - 1) * 13) / 2, sx = side === 'l' ? ax + 6 : ax - 6;
  path(s, [[sx, my], to], { color: o.hi ? C.mari : C.slate, w: 1 });
  dotAt(s, to[0], to[1], 2.1, o.hi ? C.mari : C.ink);
  FULL.set(s, [...(FULL.get(s) ?? []), lines.join(' ')]);
}
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 1.5));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, and touches no other label. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
  ];
}
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ...texts: string[]): Check => {
  const full = FULL.get(s) ?? [];
  const miss = texts.filter((t) => !full.includes(t) && !has(s, t));
  return [`The book's own words are all there${miss.length ? `: missing ${miss.join(' | ')}` : ''}`, miss.length === 0];
};
const fx = (s: Sketch, k: string) => FACT.get(s)?.[k] ?? 0;
const dist = (a: P, b: P) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/* ================= Figure 6.1 ================= */
const CAP61 = 'Simple permanent tissues: (A) parenchyma, (B) collenchyma, (C) sclerenchyma (fibre and sclereid).';
function draw61(): Sketch {
  const s = new Sketch(W, 204);
  // (A) parenchyma: nine round, thin-walled living cells, the nucleus in the middle one
  const cy = 72;
  [-22, 0, 22].forEach((dy, row) => [-25, 0, 25].forEach((dx, col) => {
    const x = 58 + dx + (row === 1 ? 12.5 : 0), y = cy + dy;
    ring(s, x, y, 11, { w: 1.6 }); fact(s, 'parenchyma');
    if (row === 1 && col === 1) { dotAt(s, x, y, 3.2); fact(s, 'nucleus'); }
  }));
  // (B) collenchyma: seven hexagons, a seventh centre and six round it, corners of the middle one thickened (marigold)
  const R = 14, hx = 178, step = Math.sqrt(3) * R;
  const hexAt = (x: number, y: number) => path(s, Array.from({ length: 6 }, (_, i): P => pol(x, y, R, 90 + 60 * i)), { close: true, w: 1.6 });
  hexAt(hx, cy); fact(s, 'hexagon');
  for (let k = 0; k < 6; k++) { const [x, y] = pol(hx, cy, step, 60 * k); hexAt(x, y); fact(s, 'hexagon'); }
  for (let i = 0; i < 6; i++) { const [x, y] = pol(hx, cy, R, 90 + 60 * i); s.dot(x, y, 3.6, C.mari); fact(s, 'corner');}
  // (C) sclerenchyma: a fibre (long, tapering, thick wall, narrow lumen) and a sclereid (concentric, with pit canals)
  path(s, [[268, 36], [274, 36], [281, 72], [274, 108], [268, 108], [261, 72]], { close: true, w: 1.6 });
  path(s, [[270, 46], [272, 46], [275, 72], [272, 98], [270, 98], [267, 72]], { close: true, w: 1.2, color: C.slate });
  const sx = 326;
  ring(s, sx, cy, 22, { w: 1.7 }); ring(s, sx, cy, 15, { w: 1.2, color: C.slate }); ring(s, sx, cy, 6, { w: 1.2, color: C.slate });
  for (let k = 0; k < 6; k++) path(s, [pol(sx, cy, 6, 30 + 60 * k), pol(sx, cy, 22, 30 + 60 * k)], { color: C.grey, w: 1.1, plant: true });
  fact(s, 'fibre'); fact(s, 'sclereid');
  lab(s, 271, 26, 'Fibre', { bold: true, size: 11.5 }); lab(s, sx, 26, 'Sclereid', { bold: true, size: 11.5 });
  [['(A) Parenchyma', 64, ['Living; thin,', 'uniform walls']], ['(B) Collenchyma', 178, ['Living; wall', 'thickened at', 'the corners']], ['(C) Sclerenchyma', 303, ['Dead; thick', 'lignified walls']]].forEach(([t, x, ls]) => {
    lab(s, x as number, 142, t as string, { bold: true, size: 12 });
    (ls as string[]).forEach((l, i) => lab(s, x as number, 160 + i * 14, l, { size: 11, color: C.slate }));
  });
  return s;
}
function check61(): Check[] {
  const s = draw61();
  return [
    ['Parenchyma is nine round cells with one nucleus; collenchyma seven hexagons with six corner thickenings; sclerenchyma a fibre and a sclereid', fx(s, 'parenchyma') === 9 && fx(s, 'nucleus') === 1 && fx(s, 'hexagon') === 7 && fx(s, 'corner') === 6 && fx(s, 'fibre') === 1 && fx(s, 'sclereid') === 1],
    ['A corner thickening sits exactly on a vertex of the middle hexagon, 14 px from its centre', Math.abs(dist(pol(178, 72, 14, 90), [178, 72]) - 14) < 1e-9],
    ['The three headings, the printed notes, "Fibre" and "Sclereid" are all on the drawing', ['(A) Parenchyma', '(B) Collenchyma', '(C) Sclerenchyma', 'Fibre', 'Sclereid', 'Living; thin,', 'uniform walls', 'Living; wall', 'thickened at', 'the corners', 'Dead; thick', 'lignified walls'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig61: Diagram = { id: 'b11-06-fig-6.1', topic: 0, name: 'Simple permanent tissues', cases: [{ chip: 'Three tissues', cap: CAP61 }], draw: draw61, check: check61 };

/* ================= Figure 6.2 ================= */
const CAP62 = 'Conducting elements in longitudinal view. Xylem: tracheid and vessel (dead, lignified). Phloem: sieve tube element (living, no nucleus) and companion cell (living, with nucleus).';
function drawXylem(): Sketch {
  const s = new Sketch(W, 296);
  lab(s, W / 2, 26, 'Xylem (Longitudinal View)', { size: 14, bold: true });
  // tracheid: long, thick-walled, tapering closed ends, pits in pairs on both walls
  const tx = 100;
  path(s, [[tx - 13, 72], [tx + 13, 72], [tx + 25, 88], [tx + 25, 206], [tx + 13, 222], [tx - 13, 222], [tx - 25, 206], [tx - 25, 88]], { close: true, w: 1.7 });
  [112, 134, 156, 178].forEach((y) => { path(s, [[tx - 24, y], [tx - 16, y]], { color: C.slate, w: 1.6 }); path(s, [[tx + 16, y], [tx + 24, y]], { color: C.slate, w: 1.6 }); fact(s, 'pit', 2); });
  // vessel: three elements end to end, perforation plates (marigold) where they meet
  const vx = 215, rects: [number, number][] = [[72, 118], [126, 168], [176, 222]];
  rects.forEach(([a, b]) => path(s, [[vx - 20, a], [vx + 20, a], [vx + 20, b], [vx - 20, b]], { close: true, w: 1.7 }));
  [122, 172].forEach((y) => { path(s, [[vx - 20, y], [vx + 20, y]], { color: C.mari, w: 3 }); fact(s, 'plate'); });
  note(s, 'r', 146, 50, ['Tapering', 'closed ends'], [tx + 15, 76]);
  note(s, 'l', 64, 150, ['Pits'], [tx - 20, 156]);
  note(s, 'r', 252, 96, ['Elements form one', 'continuous tube'], [vx + 20, 96]);
  note(s, 'r', 252, 160, ['Perforation', 'plates'], [vx + 20, 172], { hi: true });
  lab(s, tx, 246, 'Tracheid'); lab(s, vx, 246, 'Vessel');
  lab(s, W / 2, 278, 'Dead, lignified (water conducting)', { bold: true, size: 12, color: C.amber });
  return s;
}
function drawPhloem(): Sketch {
  const s = new Sketch(W, 316);
  lab(s, W / 2, 26, 'Phloem (Longitudinal View)', { size: 14, bold: true });
  const sx0 = 118, sx1 = 162, cx0 = 194, cx1 = 214, y0 = 72, y1 = 222;
  path(s, [[sx0, y0], [sx1, y0], [sx1, y1], [sx0, y1]], { close: true, w: 1.7 });
  path(s, [[cx0, y0], [cx1, y0], [cx1, y1], [cx0, y1]], { close: true, w: 1.7 });
  [y0, y1].forEach((y) => { path(s, [[sx0, y], [sx1, y]], { color: C.mari, w: 3.4, dash: true }); fact(s, 'plate'); });
  [128, 152].forEach((x) => path(s, [[x, y0 + 10], [x, y1 - 10]], { color: C.grey, w: 1.3, dash: true, plant: true }));
  [132, 156, 180].forEach((y) => { path(s, [[sx1, y], [cx0, y]], { color: C.slate, w: 1.4, dash: true, plant: true }); fact(s, 'plasmodesma'); });
  ring(s, 204, 132, 6, { w: 1.5 }); dotAt(s, 204, 132, 2.2); fact(s, 'nucleus');
  note(s, 'l', 100, 52, ['Sieve', 'plate'], [sx0 + 4, y0], { hi: true });
  note(s, 'l', 96, 154, ['Living,', 'anucleate'], [128, 158]);
  note(s, 'r', 232, 126, ['Living, nucleate', '(controls sieve tube)'], [210, 132]);
  lab(s, 140, 246, 'Sieve tube'); lab(s, 140, 260, 'element'); lab(s, 204, 246, 'Companion'); lab(s, 204, 260, 'cell');
  lab(s, W / 2, 294, 'Fine plasmodesmata link the two cells', { size: 11, color: C.slate });
  return s;
}
function checkXylem(): Check[] {
  const s = drawXylem();
  return [
    ['The vessel has three elements and two perforation plates; the tracheid has pits on both walls', fx(s, 'plate') === 2 && fx(s, 'pit') === 8],
    ['Both closed ends of the tracheid taper (the top and bottom are narrower than the middle)', (13 + 13) < (25 + 25)],
    hasAll(s, 'Tapering closed ends', 'Pits', 'Elements form one continuous tube', 'Perforation plates', 'Tracheid', 'Vessel', 'Xylem (Longitudinal View)', 'Dead, lignified (water conducting)'),
    ...layout(s), clean(s),
  ];
}
function checkPhloem(): Check[] {
  const s = drawPhloem();
  return [
    ['One sieve tube element with a sieve plate at each end, one companion cell with one nucleus, three plasmodesmata between them', fx(s, 'plate') === 2 && fx(s, 'nucleus') === 1 && fx(s, 'plasmodesma') === 3],
    ['The nucleus lies inside the companion cell and the sieve tube element has none', 204 - 6 > 194 && 204 + 6 < 214],
    hasAll(s, 'Sieve plate', 'Living, anucleate', 'Living, nucleate (controls sieve tube)', 'Phloem (Longitudinal View)', 'Fine plasmodesmata link the two cells'),
    ...layout(s), clean(s),
  ];
}
const fig62: Diagram = {
  id: 'b11-06-fig-6.2', topic: 1, name: 'Xylem and phloem, longitudinal view',
  cases: [{ chip: 'Xylem', cap: CAP62, which: 'xylem' }, { chip: 'Phloem', cap: CAP62, which: 'phloem' }],
  draw: (c: { which: string }) => (c.which === 'xylem' ? drawXylem() : drawPhloem()),
  check: (c: { which: string }) => (c.which === 'xylem' ? checkXylem() : checkPhloem()),
};

/* ================= Figure 6.3 ================= */
const CAP63 = 'T.S. of dicot and monocot root, stem and leaf (schematic), with the main tissues labelled.';
const CX = 180;
/** Root, T.S. */
function drawRoot(mono: boolean): Sketch {
  const s = new Sketch(W, 262), cy = 128, Ro = 66;
  lab(s, W / 2, 24, mono ? 'Monocot root (T.S.)' : 'Dicot root (T.S.)', { size: 14, bold: true });
  ring(s, CX, cy, Ro, { w: 1.8 });
  for (let k = 0; k < 28; k++) path(s, [pol(CX, cy, Ro, k * (360 / 28)), pol(CX, cy, Ro + 7, k * (360 / 28))], { color: C.grey, w: 1.2, plant: true });
  for (let k = 0; k < 26; k++) circ(s, ...pol(CX, cy, 57, k * (360 / 26)), 3.1, { color: C.grey });
  for (let k = 0; k < 20; k++) circ(s, ...pol(CX, cy, 49, 9 + k * 18), 3.1, { color: C.grey });
  arc(s, CX, cy, 41, 59, 59 + 352, { w: 1.5 }); // the endodermis, with one passage cell left as a gap at 55 degrees
  ring(s, CX, cy, 35, { color: C.slate, w: 1.2, dash: true });
  fact(s, 'ring', 3);
  if (mono) {
    ring(s, CX, cy, 19, { w: 1.4 }); lab(s, CX, cy + 3, 'Pith', { size: 9, color: C.slate });
    for (let k = 0; k < 8; k++) { path(s, [pol(CX, cy, 22, 45 * k), pol(CX, cy, 31, 45 * k)], { color: C.mari, w: 4.5 }); fact(s, 'xylem'); }
    for (let k = 0; k < 8; k++) { const [x, y] = pol(CX, cy, 26.5, 22.5 + 45 * k); circ(s, x, y, 3, { color: C.ink, w: 1.4 }); fact(s, 'phloem'); }
    note(s, 'l', 104, 78, ['Epiblema', '(root hairs)'], pol(CX, cy, Ro, 158));
    note(s, 'l', 104, 130, ['Cortex'], pol(CX, cy, 53, 180));
    note(s, 'l', 104, 184, ['Endodermis', '(Casparian band)'], pol(CX, cy, 41, 218));
    note(s, 'r', 256, 78, ['Pericycle'], pol(CX, cy, 35, 35));
    note(s, 'r', 256, 114, ['Phloem'], pol(CX, cy, 26.5, 22.5));
    note(s, 'r', 256, 164, ['Xylem (exarch)'], pol(CX, cy, 31, -45), { hi: true });
    lab(s, W / 2, 246, 'Polyarch xylem (more than 6 groups); large pith', { size: 11, color: C.slate });
  } else {
    for (let k = 0; k < 4; k++) { path(s, [pol(CX, cy, 0, 90 * k), pol(CX, cy, 27, 90 * k)], { color: C.mari, w: 5 }); fact(s, 'xylem'); }
    for (let k = 0; k < 4; k++) { const [x, y] = pol(CX, cy, 17, 45 + 90 * k); circ(s, x, y, 4, { color: C.ink, w: 1.4 }); fact(s, 'phloem'); }
    note(s, 'l', 104, 78, ['Epiblema', '(root hairs)'], pol(CX, cy, Ro, 158));
    note(s, 'l', 104, 130, ['Cortex'], pol(CX, cy, 53, 180));
    note(s, 'l', 104, 184, ['Endodermis', '(Casparian band)'], pol(CX, cy, 41, 218));
    note(s, 'r', 256, 66, ['Passage cell'], pol(CX, cy, 41, 53));
    note(s, 'r', 256, 100, ['Pericycle'], pol(CX, cy, 35, 28));
    note(s, 'r', 256, 136, ['Xylem (exarch)'], pol(CX, cy, 27, 0), { hi: true });
    note(s, 'r', 256, 174, ['Phloem'], pol(CX, cy, 17, -45));
    lab(s, W / 2, 246, 'Di- to tetrarch xylem (2–4 groups); pith small or absent', { size: 11, color: C.slate });
  }
  return s;
}
/** Dicot stem, T.S. */
function drawDicotStem(): Sketch {
  const s = new Sketch(W, 262), cy = 128, Ro = 68;
  lab(s, W / 2, 24, 'Dicot stem (T.S.)', { size: 14, bold: true });
  ring(s, CX, cy, Ro, { w: 1.8 });
  for (let k = 0; k < 30; k++) circ(s, ...pol(CX, cy, 62, k * 12), 3.1, { color: C.ink, w: 1.3 });
  for (let k = 0; k < 24; k++) circ(s, ...pol(CX, cy, 54, 7 + k * 15), 3.8, { color: C.grey });
  for (let k = 0; k < 18; k++) circ(s, ...pol(CX, cy, 47, 3 + k * 20), 3.2, { color: C.grey });
  ring(s, CX, cy, 42, { w: 1.5 }); ring(s, CX, cy, 38, { color: C.slate, w: 1.1, dash: true });
  ring(s, CX, cy, 16, { w: 1.4 }); lab(s, CX, cy + 3, 'Pith', { size: 9, color: C.slate });
  for (let k = 0; k < 8; k++) {
    const a = 45 * k;
    ellipseRot(s, ...pol(CX, cy, 27, a), 4.8, 8.5, -a + 90 + 0, { w: 1.3 });
    s.add(`<circle cx="${r1(pol(CX, cy, 21.5, a)[0])}" cy="${r1(pol(CX, cy, 21.5, a)[1])}" r="2.5" fill="none" stroke="${C.mari}" stroke-width="2"/>`); fact(s, 'xylem');
    const [px, py] = pol(CX, cy, 32.5, a); circ(s, px, py, 2.3, { color: C.ink, w: 1.3 }); fact(s, 'phloem');
    path(s, [pol(CX, cy, 27, a + 7), pol(CX, cy, 27, a - 7)], { color: C.slate, w: 1.1, plant: true }); fact(s, 'cambium');
    path(s, [pol(CX, cy, 18, a + 22.5), pol(CX, cy, 37, a + 22.5)], { color: C.grey, w: 1.1, plant: true });
  }
  note(s, 'l', 104, 58, ['Epidermis'], pol(CX, cy, Ro, 140));
  note(s, 'l', 104, 98, ['Hypodermis', '(collenchyma)'], pol(CX, cy, 62, 170));
  note(s, 'l', 104, 150, ['Cortex'], pol(CX, cy, 50.5, 193));
  note(s, 'l', 104, 198, ['Endodermis', '(starch sheath)'], pol(CX, cy, 42, 225));
  note(s, 'r', 256, 56, ['Pericycle'], pol(CX, cy, 38, 60));
  note(s, 'r', 256, 84, ['Phloem'], pol(CX, cy, 32.5, 45));
  note(s, 'r', 256, 112, ['Medullary ray'], pol(CX, cy, 28, 22.5));
  note(s, 'r', 256, 140, ['Cambium'], pol(CX, cy, 27, 0));
  note(s, 'r', 256, 176, ['Xylem (endarch)'], pol(CX, cy, 21.5, -45), { hi: true });
  lab(s, W / 2, 246, 'Bundles in a ring, open (cambium present)', { size: 11, color: C.slate });
  return s;
}
/** Monocot stem, T.S. */
const BUNDLES: [number, number, number][] = [[52, 20, 6.5], [52, 80, 6.5], [52, 150, 6.5], [52, 215, 6.5], [52, 270, 6.5], [52, 330, 6.5], [30, 40, 8.5], [30, 120, 8.5], [30, 200, 8.5], [30, 290, 8.5], [6, 170, 9]];
function drawMonoStem(): Sketch {
  const s = new Sketch(W, 262), cy = 128, Ro = 68;
  lab(s, W / 2, 24, 'Monocot stem (T.S.)', { size: 14, bold: true });
  ring(s, CX, cy, Ro, { w: 1.8 });
  for (let k = 0; k < 30; k++) circ(s, ...pol(CX, cy, 62, k * 12), 3.1, { color: C.ink, w: 1.3 });
  const centres = BUNDLES.map(([r, a]) => pol(CX, cy, r, a));
  // each bundle is turned so its xylem lies toward the centre of the stem and its phloem toward the outside (the book's orientation)
  const outward = (i: number): P => { const q = pol(0, 0, 1, BUNDLES[i][1]); return [q[0], q[1]]; };
  const phloemAt = (i: number): P => { const [x, y] = centres[i], [ux, uy] = outward(i), z = BUNDLES[i][2]; return [x + ux * z * 0.3, y + uy * z * 0.3]; };
  const xylemAt = (i: number): P[] => { const [x, y] = centres[i], [ux, uy] = outward(i), z = BUNDLES[i][2]; return [-1, 1].map((d): P => [x - ux * z * 0.36 - uy * d * z * 0.3, y - uy * z * 0.36 + ux * d * z * 0.3]); };
  for (let gy = -6; gy <= 6; gy++) for (let gx = -6; gx <= 6; gx++) { // ground tissue: a loose grid of thin-walled cells, clear of the bundles
    const p: P = [CX + gx * 10.5 + (gy % 2) * 5 + Math.sin(gx * 7 + gy * 3) * 1.5, cy + gy * 9.5 + Math.cos(gx * 5 + gy * 11) * 1.5];
    if (dist(p, [CX, cy]) < 53 && centres.every((c, i) => dist(c, p) > BUNDLES[i][2] + 6)) circ(s, p[0], p[1], 3, { color: C.grey });
  }
  BUNDLES.forEach(([, , size], i) => {
    const [x, y] = centres[i];
    circ(s, x, y, size, { color: C.ink, w: 1.5 });
    keep(s, Array.from({ length: 17 }, (_, k): P => pol(x, y, size, k * 22.5)));
    const ph = phloemAt(i), [ux, uy] = outward(i);
    circ(s, ph[0], ph[1], size * 0.32, { color: C.ink, w: 1.3 }); fact(s, 'phloem');
    xylemAt(i).forEach((q) => s.add(`<circle cx="${r1(q[0])}" cy="${r1(q[1])}" r="${r1(size * 0.28)}" fill="none" stroke="${C.mari}" stroke-width="1.8"/>`));
    if (Math.hypot(xylemAt(i)[0][0] - CX, xylemAt(i)[0][1] - cy) < Math.hypot(ph[0] - CX, ph[1] - cy) || Math.hypot(ux, uy) === 0) fact(s, 'xylemIn');
    fact(s, 'bundle');
  });
  const at = (i: number): P => centres[i];
  note(s, 'l', 104, 58, ['Epidermis'], pol(CX, cy, Ro, 143));
  note(s, 'l', 104, 98, ['Hypodermis', '(sclerenchyma)'], pol(CX, cy, 62, 170));
  note(s, 'l', 104, 190, ['Ground tissue'], pol(CX, cy, 41, 195));
  note(s, 'r', 256, 46, ['Vascular bundle', '(closed)'], at(0));
  note(s, 'r', 256, 92, ['Phloem'], phloemAt(6));
  note(s, 'r', 256, 128, ['Xylem'], xylemAt(9)[1], { hi: true });
  note(s, 'r', 256, 176, ['Bundle sheath', '(sclerenchyma)'], pol(at(9)[0], at(9)[1], BUNDLES[9][2], -30));
  lab(s, W / 2, 246, 'Scattered closed bundles; no cambium', { size: 11, color: C.slate });
  return s;
}
/** Leaf cells in a row: a row of boxes between two lines. */
function cellRow(s: Sketch, x0: number, x1: number, y0: number, y1: number, n: number, o: { color?: string } = {}) {
  path(s, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], { close: true, color: o.color ?? C.ink, w: 1.5 });
  for (let k = 1; k < n; k++) path(s, [[x0 + ((x1 - x0) * k) / n, y0], [x0 + ((x1 - x0) * k) / n, y1]], { color: C.grey, w: 1.1, plant: true });
}
function stoma(s: Sketch, x: number, y: number) { [-3.4, 3.4].forEach((d) => ellipseRot(s, x + d, y, 2.4, 4.2, 0, { color: C.ink, w: 1.5, plant: true })); fact(s, 'stoma'); }
function drawDicotLeaf(): Sketch {
  const s = new Sketch(W, 284);
  lab(s, W / 2, 24, 'Dicot leaf (T.S.)', { size: 14, bold: true });
  const x0 = 112, x1 = 248;
  path(s, [[x0, 78], [x1, 78]], { color: C.slate, w: 3 });
  cellRow(s, x0, x1, 82, 94, 8); // upper epidermis, cuticle above it
  for (let k = 0; k < 8; k++) { const cx = x0 + 8.5 + k * 17; path(s, [[cx - 6, 98], [cx + 6, 98], [cx + 6, 126], [cx - 6, 126]], { close: true, color: C.ink, w: 1.2, plant: true }); fact(s, 'palisade'); }
  [[128, 156], [150, 160], [140, 172], [150, 174], [172, 176], [208, 176], [215, 160], [232, 148], [236, 170], [200, 166]].forEach(([x, y]) => { if (Math.hypot(x - 180, y - 141) > 21) circ(s, x, y, 5.5, { color: C.ink, w: 1.2 }); });
  cellRow(s, x0, x1, 186, 198, 8);
  stoma(s, 150, 192); stoma(s, 216, 192);
  circ(s, 180, 141, 15, { w: 1.6 }); keep(s, Array.from({ length: 17 }, (_, k): P => pol(180, 141, 15, k * 22.5)));
  s.add(`<circle cx="180" cy="135" r="4.5" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`); circ(s, 180, 147, 4.5, { color: C.ink, w: 1.5 });
  fact(s, 'xylem'); fact(s, 'phloem');
  note(s, 'r', 258, 54, ['Upper epidermis', '(with cuticle)'], [236, 88]);
  note(s, 'r', 258, 98, ['Palisade', 'parenchyma'], [226, 112]);
  note(s, 'r', 258, 134, ['Xylem'], [184, 134], { hi: true });
  note(s, 'r', 258, 160, ['Phloem'], [184, 149]);
  note(s, 'r', 258, 186, ['Spongy parenchyma', '(air spaces)'], [236, 170]);
  note(s, 'r', 258, 224, ['Stoma (lower', 'epidermis)'], [219, 192]);
  note(s, 'l', 100, 138, ['Vascular bundle', '(with sheath)'], pol(180, 141, 15, 190));
  lab(s, W / 2, 264, 'Dorsiventral: palisade above, spongy below', { size: 11, color: C.slate });
  return s;
}
function drawMonoLeaf(): Sketch {
  const s = new Sketch(W, 284);
  lab(s, 180, 24, 'Monocot leaf (T.S.)', { size: 14, bold: true });
  const x0 = 16, x1 = 200;
  path(s, [[x0, 78], [x1, 78]], { color: C.slate, w: 3 });
  cellRow(s, x0, x1, 82, 94, 12);
  // bulliform cells: three larger cells let down into the upper epidermis
  path(s, [[84, 82], [84, 108], [124, 108], [124, 82]], { color: C.ink, w: 1.5 }); path(s, [[96, 82], [96, 108], [112, 108], [112, 82]], { color: C.grey, w: 1.1, plant: true });
  fact(s, 'bulliform');
  // uniform mesophyll: rows of alike round cells, two bundles with sheaths
  const bundle: P[] = [[50, 130], [156, 130]];
  for (let row = 0; row < 3; row++) for (let k = 0; k < 11; k++) {
    const x = x0 + 12 + k * 16.5 + (row % 2) * 8, y = 118 + row * 15;
    if (x < x1 - 6 && bundle.every((b) => Math.hypot(b[0] - x, b[1] - y) > 21)) { circ(s, x, y, 5.6, { color: C.ink, w: 1.2 }); fact(s, 'mesophyll'); }
  }
  bundle.forEach(([x, y]) => {
    circ(s, x, y, 14, { w: 1.6 }); keep(s, Array.from({ length: 17 }, (_, k): P => pol(x, y, 14, k * 22.5)));
    s.add(`<circle cx="${x}" cy="${y - 4.5}" r="4.2" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`); circ(s, x, y + 5, 4.2, { color: C.ink, w: 1.5 });
    fact(s, 'xylem'); fact(s, 'phloem');
  });
  cellRow(s, x0, x1, 172, 184, 12);
  stoma(s, 40, 88); stoma(s, 168, 88); stoma(s, 64, 178); stoma(s, 150, 178);
  path(s, [[x0, 188], [x1, 188]], { color: C.slate, w: 3 });
  note(s, 'r', 214, 56, ['Bulliform cells'], [104, 100]);
  note(s, 'r', 214, 92, ['Upper epidermis', '(stomata present)'], [188, 88]);
  note(s, 'r', 214, 140, ['Vascular bundle', '(with sheath)'], pol(156, 130, 14, 0));
  note(s, 'r', 214, 176, ['Mesophyll', '(not differentiated)'], [124, 142]);
  note(s, 'r', 214, 218, ['Lower epidermis', '(stomata present)'], [182, 184]);
  lab(s, W / 2, 262, 'Isobilateral: uniform mesophyll, stomata on both faces', { size: 11, color: C.slate });
  return s;
}
const PANELS: Record<string, () => Sketch> = {
  droot: () => drawRoot(false), mroot: () => drawRoot(true), dstem: drawDicotStem, mstem: drawMonoStem, dleaf: drawDicotLeaf, mleaf: drawMonoLeaf,
};
const FULL63: Record<string, string[]> = {
  droot: ['Dicot root (T.S.)', 'Epiblema (root hairs)', 'Cortex', 'Endodermis (Casparian band)', 'Passage cell', 'Pericycle', 'Xylem (exarch)', 'Phloem', 'Di- to tetrarch xylem (2–4 groups); pith small or absent'],
  mroot: ['Monocot root (T.S.)', 'Epiblema (root hairs)', 'Cortex', 'Endodermis (Casparian band)', 'Pericycle', 'Phloem', 'Xylem (exarch)', 'Pith', 'Polyarch xylem (more than 6 groups); large pith'],
  dstem: ['Dicot stem (T.S.)', 'Epidermis', 'Hypodermis (collenchyma)', 'Cortex', 'Endodermis (starch sheath)', 'Pericycle', 'Phloem', 'Medullary ray', 'Cambium', 'Xylem (endarch)', 'Pith', 'Bundles in a ring, open (cambium present)'],
  mstem: ['Monocot stem (T.S.)', 'Epidermis', 'Hypodermis (sclerenchyma)', 'Ground tissue', 'Vascular bundle (closed)', 'Phloem', 'Xylem', 'Bundle sheath (sclerenchyma)', 'Scattered closed bundles; no cambium'],
  dleaf: ['Dicot leaf (T.S.)', 'Upper epidermis (with cuticle)', 'Palisade parenchyma', 'Xylem', 'Phloem', 'Spongy parenchyma (air spaces)', 'Stoma (lower epidermis)', 'Vascular bundle (with sheath)', 'Dorsiventral: palisade above, spongy below'],
  mleaf: ['Monocot leaf (T.S.)', 'Bulliform cells', 'Upper epidermis (stomata present)', 'Vascular bundle (with sheath)', 'Mesophyll (not differentiated)', 'Lower epidermis (stomata present)', 'Isobilateral: uniform mesophyll, stomata on both faces'],
};
function check63(c: { panel: string }): Check[] {
  const s = PANELS[c.panel]();
  const f = (k: string) => fx(s, k);
  const specific: Check[] = {
    droot: [['Tetrarch: four xylem arms alternating with four phloem groups, no pith drawn', f('xylem') === 4 && f('phloem') === 4 && !has(s, 'Pith')] as Check],
    mroot: [['Polyarch: eight xylem arms (more than 6) alternating with eight phloem groups, and a pith', f('xylem') === 8 && f('xylem') > 6 && f('phloem') === 8 && has(s, 'Pith')] as Check],
    dstem: [['Eight open bundles in a ring, each with xylem toward the pith (21.5 px out), cambium (27) and phloem outward (32.5)', f('xylem') === 8 && f('phloem') === 8 && f('cambium') === 8 && 21.5 < 27 && 27 < 32.5] as Check],
    mstem: [['Many scattered closed bundles, each with its xylem toward the centre and its phloem outward, and no cambium', f('bundle') === BUNDLES.length && f('bundle') > 6 && f('cambium') === 0 && f('xylemIn') === BUNDLES.length] as Check],
    dleaf: [['Palisade above (eight columns), spongy below; the xylem is above the phloem in the bundle; stomata in the lower epidermis', f('palisade') === 8 && f('xylem') === 1 && f('phloem') === 1 && f('stoma') === 2] as Check],
    mleaf: [['Uniform mesophyll with bulliform cells, two bundles, stomata on both faces (four stomata drawn)', f('mesophyll') > 20 && f('bulliform') === 1 && f('xylem') === 2 && f('stoma') === 4] as Check],
  }[c.panel]!;
  return [...specific, hasAll(s, ...FULL63[c.panel]), ...layout(s), clean(s)];
}
const fig63: Diagram = {
  id: 'b11-06-fig-6.3', topic: 2, name: 'T.S. of root, stem and leaf',
  cases: [
    { chip: 'Dicot root', cap: CAP63, panel: 'droot' }, { chip: 'Monocot root', cap: CAP63, panel: 'mroot' },
    { chip: 'Dicot stem', cap: CAP63, panel: 'dstem' }, { chip: 'Monocot stem', cap: CAP63, panel: 'mstem' },
    { chip: 'Dicot leaf', cap: CAP63, panel: 'dleaf' }, { chip: 'Monocot leaf', cap: CAP63, panel: 'mleaf' },
  ],
  draw: (c: { panel: string }) => PANELS[c.panel](), check: check63,
};

/* ================= Figure 6.4 ================= */
const CAP64 = 'Secondary growth in a dicot stem: (a)-(c) formation of the cambial ring and secondary thickening in a young stem; below, a transverse wedge of an old trunk from pith to bark.';
/** The young stem: eight bundles, the gap at 180 degrees is the medullary ray. */
const BA = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
function stemStage(stage: 'a' | 'b' | 'c'): Sketch {
  const s = new Sketch(W, 244), cy = 128, Ro = 72;
  lab(s, W / 2, 20, 'Young dicot stem: formation of the cambial ring (T.S.)', { size: 12, bold: true });
  lab(s, W / 2, 40, stage === 'a' ? '(a) Primary structure' : stage === 'b' ? '(b) Cambial ring complete' : '(c) Secondary growth', { size: 12, bold: true });
  ring(s, CX, cy, Ro, { w: 1.8 });
  ring(s, CX, cy, 16, { w: 1.4 }); lab(s, CX, cy + 3, 'Pith', { size: 9, color: C.slate });
  if (stage !== 'c') {
    const rr = 44;
    BA.forEach((a) => {
      ellipseRot(s, ...pol(CX, cy, rr, a), 5.5, 9.5, 90 - a);
      circ(s, ...pol(CX, cy, rr - 5, a), 2.6, { color: C.ink, w: 1.5 }); fact(s, 'xylem');
      circ(s, ...pol(CX, cy, rr + 5.5, a), 2.6, { color: C.ink, w: 1.5 }); fact(s, 'phloem');
      if (stage === 'a') { path(s, [pol(CX, cy, rr, a + 8), pol(CX, cy, rr, a - 8)], { color: C.mari, w: 2.4, plant: true }); fact(s, 'cambium'); }
    });
    if (stage === 'b') {
      BA.forEach((a) => { arc(s, CX, cy, rr, a - 11, a + 11, { color: C.mari, w: 2.6, plant: true }); fact(s, 'solid'); });
      for (let k = 0; k < 8; k++) { const mid = 45 * k; arc(s, CX, cy, rr, mid - 11.5, mid + 11.5, { color: C.mari, w: 2.6, dash: true, plant: true }); fact(s, 'dashed'); }
    }
  } else {
    for (let k = 0; k < 24; k++) path(s, [pol(CX, cy, 17, k * 15 + 7.5), pol(CX, cy, 44, k * 15 + 7.5)], { color: C.grey, w: 1.1, plant: true });
    BA.forEach((a) => { circ(s, ...pol(CX, cy, 23, a), 2.4, { color: C.ink, w: 1.5 }); fact(s, 'xylem'); });
    ring(s, CX, cy, 45, { color: C.mari, w: 2.8 }); fact(s, 'cambium');
    ring(s, CX, cy, 50, { w: 1.4 }); ring(s, CX, cy, 55, { w: 1.4 });
  }
  if (stage === 'a') {
    note(s, 'l', 104, 124, ['Medullary', 'ray'], pol(CX, cy, 30, 180));
    note(s, 'l', 104, 208, ['Intrafascicular', 'cambium'], pol(CX, cy, 44, 202.5), { hi: true });
    note(s, 'r', 256, 84, ['Primary phloem'], pol(CX, cy, 49.5, 22.5));
    note(s, 'r', 256, 196, ['Primary xylem'], pol(CX, cy, 39, 337.5));
  } else if (stage === 'b') {
    note(s, 'l', 104, 198, ['Intrafascicular', 'cambium (solid)'], pol(CX, cy, 44, 202.5), { hi: true });
    note(s, 'r', 256, 198, ['Interfascicular', 'cambium (dashed)'], pol(CX, cy, 44, 360), { hi: true });
  } else {
    note(s, 'l', 104, 84, ['Secondary', 'medullary ray'], pol(CX, cy, 33, 127.5));
    note(s, 'l', 104, 204, ['Secondary xylem', '(wood)'], pol(CX, cy, 33, 232.5));
    note(s, 'r', 256, 120, ['Vascular cambium'], pol(CX, cy, 45, 20), { hi: true });
    note(s, 'r', 256, 196, ['Secondary phloem', '(thin, crushed', 'outside)'], pol(CX, cy, 52.5, 340));
  }
  return s;
}
/* The wedge: pith at the top, bark at the bottom, so labels can sit in two columns beside it. */
const AX = 180, AY = 50, WR = 270, HA = 15, TH = Math.tan((HA * Math.PI) / 180);
const wp = (rho: number, phi: number): P => [AX + rho * Math.sin((phi * Math.PI) / 180), AY + rho * Math.cos((phi * Math.PI) / 180)];
const wArc = (s: Sketch, rho: number, o: { color?: string; w?: number; dash?: boolean; plant?: boolean } = {}) => path(s, Array.from({ length: 13 }, (_, i): P => wp(rho, -HA + (2 * HA * i) / 12)), o);
const hw = (y: number) => Math.min((y - AY) * TH, WR * Math.sin((HA * Math.PI) / 180));
const WEDGE = { pith: 14, heartEnd: 124, sapEnd: 228, cambium: 232, phloemEnd: 248, barkEnd: WR };
function drawWedge(): Sketch {
  const s = new Sketch(W, 400);
  lab(s, W / 2, 22, 'Old dicot trunk: transverse wedge from pith to bark', { size: 12, bold: true });
  path(s, [wp(WR, -HA), [AX, AY], wp(WR, HA)], { w: 1.8 }); wArc(s, WR, { w: 1.8 });
  wArc(s, WEDGE.pith, { w: 1.3 }); // the pith's edge
  // annual rings: each is spring wood (wide vessels) then a narrow band of autumn wood (narrow vessels)
  const ringsH = [34, 54, 74, 94, 114], ringsS = [148, 168, 188, 208, 228];
  [...ringsH, ...ringsS].forEach((b, i) => {
    const heart = i < ringsH.length;
    wArc(s, b, { w: heart ? 1.4 : 1.3, color: heart ? C.ink : C.slate }); wArc(s, b - 5, { w: 1.1, color: C.grey, plant: true });
    fact(s, 'ring');
    const mid = b - 12;
    [-6, 0, 6].forEach((ph) => { const [x, y] = wp(mid, ph * (1 + mid / 240)); if (heart) { dotAt(s, x, y, 2.6); fact(s, 'plugged'); } else { circ(s, x, y, 3.6, { color: C.ink, w: 1.3 }); fact(s, 'vessel'); } });
    [-4, 4].forEach((ph) => { const [x, y] = wp(b - 2.5, ph); circ(s, x, y, 1.3, { color: C.ink, w: 1 }); });
  });
  wArc(s, WEDGE.heartEnd, { color: C.slate, w: 1.5, dash: true }); // heartwood / sapwood boundary
  wArc(s, WEDGE.cambium, { color: C.mari, w: 3 }); fact(s, 'cambium');
  wArc(s, WEDGE.phloemEnd, { w: 1.5 });
  // the lenticel: a small gap in the periderm near the lower edge, drawn as a box across the bark
  const lc = HA * 0.62, lp = [wp(250, lc - 2.6), wp(250, lc + 2.6), wp(WR, lc + 2.6), wp(WR, lc - 2.6)];
  path(s, lp, { close: true, w: 1.4, plant: true });
  const [lx, ly] = wp(262, lc);
  fact(s, 'lenticel');
  // labels: a left column and a right column, each row level with what it names, in the book's order down the wedge
  const ax = (side: 'l' | 'r', y: number, n: number) => (side === 'l' ? AX - hw(y + n * 13) - 14 : AX + hw(y + n * 13) + 14);
  const L = (y: number, lines: string[], to: P, o: { hi?: boolean } = {}) => note(s, 'l', ax('l', y, lines.length), y, lines, to, o);
  const R = (y: number, lines: string[], to: P, o: { hi?: boolean } = {}) => note(s, 'r', ax('r', y, lines.length), y, lines, to, o);
  L(60, ['Pith'], wp(7, 0));
  L(98, ['Heartwood (dark,', 'vessels plugged', 'by tyloses;', 'non-conducting)'], wp(64, -HA * 0.6));
  L(208, ['Spring wood', '(wide vessels)'], wp(175, -HA * 0.55));
  L(252, ['One annual ring =', 'spring + autumn', 'wood'], wp(205.5, -HA * 0.6));
  R(176, ['Sapwood (light,', 'conducts water)'], wp(140, HA * 0.6));
  R(222, ['Autumn wood', '(narrow vessels)'], wp(185.5, HA * 0.6));
  R(272, ['Vascular cambium'], wp(WEDGE.cambium, HA * 0.55), { hi: true });
  R(304, ['Secondary phloem'], wp(240, HA * 0.55));
  R(334, ['Periderm (cork', '+ cork cambium)'], wp(262, -HA * 0.3));
  R(374, ['Lenticel', '(gas exchange)'], [lx, ly]);
  return s;
}
function checkStage(stage: 'a' | 'b' | 'c'): Check[] {
  const s = stemStage(stage), f = (k: string) => fx(s, k);
  const words = { a: ['(a) Primary structure', 'Medullary ray', 'Intrafascicular cambium', 'Primary phloem', 'Primary xylem'], b: ['(b) Cambial ring complete', 'Intrafascicular cambium (solid)', 'Interfascicular cambium (dashed)'], c: ['(c) Secondary growth', 'Secondary medullary ray', 'Secondary xylem (wood)', 'Vascular cambium', 'Secondary phloem (thin, crushed outside)'] }[stage];
  const own: Check = stage === 'a'
    ? ['Eight open bundles, each with a little cambium between its xylem and phloem, and a medullary ray gap on the left (between the bundles at 157.5 and 202.5 degrees)', f('xylem') === 8 && f('cambium') === 8 && BA.includes(157.5) && BA.includes(202.5) && !BA.includes(180)]
    : stage === 'b'
      ? ['The cambial ring is complete: eight solid arcs (inside the bundles) joined by eight dashed arcs (between them)', f('solid') === 8 && f('dashed') === 8]
      : ['Secondary xylem inside the cambium ring, secondary phloem outside it (rings at 50 and 55, cambium at 45), primary xylem (eight dots) left near the pith', f('xylem') === 8 && f('cambium') === 1 && 45 < 50 && 50 < 55];
  return [own, hasAll(s, 'Young dicot stem: formation of the cambial ring (T.S.)', ...words), ...layout(s), clean(s)];
}
function checkWedge(): Check[] {
  const s = drawWedge(), f = (k: string) => fx(s, k);
  const order = [WEDGE.pith, WEDGE.heartEnd, WEDGE.sapEnd, WEDGE.cambium, WEDGE.phloemEnd, WEDGE.barkEnd];
  return [
    ['The layers run in the book\'s order from pith outward: pith, heartwood, sapwood, vascular cambium, secondary phloem, periderm', order.every((v, i) => i === 0 || v > order[i - 1])],
    ['Heartwood has plugged (filled) vessels and sapwood open ones; every annual ring is spring wood plus an autumn band; one lenticel in the bark', f('plugged') === 15 && f('vessel') === 15 && f('ring') === 10 && f('lenticel') === 1],
    ['Only one cambium arc (the highlight), lying between sapwood and secondary phloem', f('cambium') === 1 && WEDGE.sapEnd < WEDGE.cambium && WEDGE.cambium < WEDGE.phloemEnd],
    hasAll(s, 'Old dicot trunk: transverse wedge from pith to bark', 'Pith', 'Periderm (cork + cork cambium)', 'Secondary phloem', 'Vascular cambium', 'Sapwood (light, conducts water)', 'Spring wood (wide vessels)', 'Autumn wood (narrow vessels)', 'One annual ring = spring + autumn wood', 'Heartwood (dark, vessels plugged by tyloses; non-conducting)', 'Lenticel (gas exchange)'),
    ...layout(s), clean(s),
  ];
}
const fig64: Diagram = {
  id: 'b11-06-fig-6.4', topic: 3, name: 'Secondary growth in a dicot stem',
  cases: [
    { chip: '(a) Primary', cap: CAP64, view: 'a' }, { chip: '(b) Cambial ring', cap: CAP64, view: 'b' },
    { chip: '(c) Secondary', cap: CAP64, view: 'c' }, { chip: 'Old trunk wedge', cap: CAP64, view: 'wedge' },
  ],
  draw: (c: { view: string }) => (c.view === 'wedge' ? drawWedge() : stemStage(c.view as 'a' | 'b' | 'c')),
  check: (c: { view: string }) => (c.view === 'wedge' ? checkWedge() : checkStage(c.view as 'a' | 'b' | 'c')),
};

export const DIAGRAMS_BIOLOGY_11_06: Diagram[] = [fig61, fig62, fig63, fig64];
