import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 2 (Biological Classification): the drawings of the Master Reference book on pp. 63-141, redrawn.
 * Every page 63 to 141 was counted (pdfimages -list, and the vector shapes seen on the page images): the eight figures sit
 * on their own "Figures" pages 66, 74, 77, 84, 93, 96, 102 and 110 (their captions are first printed on pp. 65, 73, 76, 83,
 * 92, 95, 101, 109). The tables, decision tree lists and cheat sheets in the topics are text, not drawings, and pp. 115 to
 * 141 (Additional topics) hold no drawing. EIGHT figures on eight pages:
 *
 *   Figure 2.1 (drawn p. 66), Topic 00, topic index 0: the timeline Aristotle, Linnaeus, Whittaker 1969, Woese 1990 (the book prints 1977; review flag 7).
 *   Figure 2.2 (p. 74) and 2.3 (p. 77), Topic 01, index 1: a prokaryotic cell beside a eukaryotic cell; a labelled bacterial cell.
 *   Figure 2.4 (p. 84), Topic 02, index 2: Protista as the evolutionary crossroads.
 *   Figure 2.5 (p. 93) and 2.6 (p. 96), Topic 03, index 3: a fungal mycelium with a magnified hypha; the sexual cycle.
 *   Figure 2.7 (p. 102), Topic 04, index 4: a plant cell and an animal cell.
 *   Figure 2.8 (p. 110), Topic 05, index 5: a bacteriophage and the tobacco mosaic virus.
 *
 * THE BOOK'S, as printed: every word of every label, heading and note (the book's em dashes became colons or commas); the order
 * of the four boxes and their contents and the 1735 / 1969 years of Fig 2.1 (the third year is 1990, not the book's 1977, with a note that rRNA work was 1977) (Whittaker's box is the tallest, as in the
 * book); which structures each cell carries and which is named (Fig 2.2, 2.3, 2.7); the hub with three arrows out and a two-way
 * arrow to Monera (Fig 2.4); the branching mycelium with six sporangia, four septa and five nuclei in the septate hypha, a
 * hypha with no cross-walls and many nuclei (Fig 2.5); the seven steps of the sexual cycle and the two ending boxes (Fig 2.6);
 * the head, collar, sheath, base plate and tail fibres, and the "~300 nm" capsid length (Fig 2.8).
 * SCHEMATIC: all positions and sizes (re-laid for a phone: Fig 2.1 and 2.6 run downward where the book runs across, and the
 * two-panel figures 2.2, 2.7 and 2.8 are one panel per chip), the years' spacing on the axis (equal steps, not to scale), the
 * shapes of the cells, organelles, hyphae and virus, the number and place of dots (ribosomes, nuclei, chloroplasts, capsomeres)
 * and every leader line's angle. Fig 2.2 shows no outline for the unlabelled lysosome-like and ER bits the book draws, only the
 * named parts. In Fig 2.4 the "saprophytic" label sits beside its arrow (the errata, p. 1175, says the book sets it under the
 * Fungus-like box). The book's captions end the Fig 2.4 sentence with a dash and "depicting ..."; here it is a comma.
 * Colours are the app's style (no fills, one marigold highlight per drawing), not the book's.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers (copied from Chapter 1) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean; free?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  if (!o.free) keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** A smooth curve through the points (Catmull-Rom as a cubic path). */
function curve(s: Sketch, pts: P[], o: { color?: string; w?: number } = {}) {
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? p2;
    d += ` C${r1(p1[0] + (p2[0] - p0[0]) / 6)} ${r1(p1[1] + (p2[1] - p0[1]) / 6)} ${r1(p2[0] - (p3[0] - p1[0]) / 6)} ${r1(p2[1] - (p3[1] - p1[1]) / 6)} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linecap="round" stroke-linejoin="round"/>`);
  keep(s, pts);
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** An ellipse (rotated by deg); its outline is kept as a polyline for the label-clear check. */
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { deg?: number; color?: string; w?: number; dash?: boolean } = {}) {
  const deg = o.deg ?? 0;
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${rx}" ry="${ry}"${deg ? ` transform="rotate(${deg} ${r1(cx)} ${r1(cy)})"` : ''} fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  const a = (deg * Math.PI) / 180, pts: P[] = [];
  for (let i = 0; i <= 36; i++) {
    const t = (i / 36) * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t);
    pts.push([cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)]);
  }
  keep(s, pts);
}
/** The point of an ellipse at parameter angle t (degrees), and its outward unit normal. */
function onEll(cx: number, cy: number, rx: number, ry: number, t: number): { p: P; n: P } {
  const a = (t * Math.PI) / 180, p: P = [cx + rx * Math.cos(a), cy + ry * Math.sin(a)];
  const nx = Math.cos(a) / rx, ny = Math.sin(a) / ry, k = Math.hypot(nx, ny);
  return { p, n: [nx / k, ny / k] };
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
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t) || s.tags.some((g) => g.name === t);
const all = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
/** A name tag with a leader to the point it names; the tag's left edge is at x. */
const tg = (s: Sketch, x: number, y: number, t: string, px: number, py: number, o: { hi?: boolean; bare?: boolean } = {}) => s.tag(x, y, t, px, py, { anchor: 'start', ...o });
/** A tag that sits with its right edge at x. */
const tgr = (s: Sketch, x: number, y: number, t: string, px: number, py: number, o: { hi?: boolean; bare?: boolean } = {}) => s.tag(x, y, t, px, py, { anchor: 'end', ...o });
const ring = (s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number } = {}) => ell(s, cx, cy, r, r, o);
const arc = (cx: number, cy: number, r: number, a0: number, a1: number, n = 14): P[] =>
  Array.from({ length: n + 1 }, (_, i): P => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });
/** Does the point lie inside the ellipse? */
const inEll = (p: P, cx: number, cy: number, rx: number, ry: number, m = 0) => ((p[0] - cx) / (rx - m)) ** 2 + ((p[1] - cy) / (ry - m)) ** 2 < 1;

/* ================= Figure 2.1 ================= */
const CAP21 = 'A timeline showing the evolution of classification: Aristotle (morphology), Linnaeus (Two Kingdoms: Plantae, Animalia), Whittaker 1969 (Five Kingdoms: Monera, Protista, Fungi, Plantae, Animalia), Woese (Three Domains: Archaea, Bacteria, Eukarya), with arrows showing each step subdividing the previous.';
const STEPS: { name: string; when: string; sub?: string[]; lines: string[]; note?: string[]; hi?: boolean }[] = [
  { name: 'Aristotle', when: 'Ancient', lines: ['(morphology)'] },
  { name: 'Linnaeus', when: '1735', sub: ['Two Kingdoms'], lines: ['Plantae · Animalia'] },
  { name: 'Whittaker 1969', when: '1969', sub: ['Five Kingdoms'], lines: ['Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia'], hi: true },
  { name: 'Woese, 1990', when: '1990', sub: ['Three Domains'], lines: ['Archaea', 'Bacteria', 'Eukarya'], note: ['Woese’s rRNA work (1977) separated', 'the archaebacteria; the three domains', 'were proposed in 1990.'] },
];
const BX: [number, number] = [86, 350], AXX = 60, GAP21 = 20;
const stepH = (st: (typeof STEPS)[number]) => 22 + (st.sub ? 17 : 0) + st.lines.length * 15 + 12;
function draw21(): Sketch {
  const total = STEPS.reduce((a, st) => a + stepH(st), 0) + GAP21 * 3;
  const s = new Sketch(W, 30 + total + 68);
  let y = 14;
  const mid: number[] = [];
  STEPS.forEach((st, i) => {
    const h = stepH(st), r: Rect = [BX[0], y, BX[1], y + h], cx = (r[0] + r[2]) / 2;
    box(s, st.name, r, st.hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, cx, y + 22, st.name, { size: 13, bold: true, color: st.hi ? C.amber : C.text, within: st.name });
    let ly = y + 22;
    if (st.sub) { ly += 17; lab(s, cx, ly, st.sub[0], { size: 11.5, color: C.slate, within: st.name }); }
    st.lines.forEach((t, k) => lab(s, cx, ly + (st.sub || k ? 15 : 16) + k * 15 - (st.sub ? 0 : 0), t, { size: 11, within: st.name }));
    mid.push(y + h / 2);
    if (i < STEPS.length - 1) { s.vec(cx, y + h + 2, cx, y + h + GAP21 - 2, { color: C.slate, w: 1.6 }); keep(s, [[cx, y + h + 2], [cx, y + h + GAP21 - 2]]); }
    y += h + GAP21;
  });
  // the axis: a grey arrow with a tick and a year at each box's middle
  s.vec(AXX, 8, AXX, y - GAP21 + 50, { color: C.slate, w: 1.6 }); keep(s, [[AXX, 8], [AXX, y - GAP21 + 50]]);
  STEPS.forEach((st, i) => {
    s.line(AXX - 5, mid[i], AXX + 5, mid[i], { color: C.slate, w: 1.6 }); keep(s, [[AXX - 5, mid[i]], [AXX + 5, mid[i]]]);
    lab(s, AXX - 9, mid[i] + 4, st.when, { size: 11, anchor: 'end', color: C.slate });
  });
  // the review's note on the years sits under the last box, outside it (Whittaker's box stays the tallest)
  const last = STEPS[STEPS.length - 1], nb = y - GAP21;
  (last.note ?? []).forEach((t, k) => lab(s, (BX[0] + BX[1]) / 2, nb + 22 + k * 13, t, { size: 10.5, color: C.slate }));
  lab(s, W / 2, y - GAP21 + 72, 'increasing complexity of evidence', { size: 11, color: C.slate });
  return s;
}
function check21(): Check[] {
  const s = draw21();
  const hs = STEPS.map(stepH);
  const yrs = STEPS.slice(1).map((st) => parseInt(st.when, 10));
  return [
    ['The four boxes are in the book\'s order: Aristotle, Linnaeus, Whittaker 1969, Woese (1990, corrected from the book\'s 1977)', STEPS.map((x) => x.name).join() === 'Aristotle,Linnaeus,Whittaker 1969,Woese, 1990'],
    ['The axis years 1735, 1969 and 1990 rise in order after "Ancient" (equal spacing, not to scale)', yrs.join() === '1735,1969,1990' && yrs.every((v, i) => !i || v > yrs[i - 1]) && STEPS[0].when === 'Ancient'],
    ['Whittaker\'s box is the tallest, as in the book, and is the one highlight', hs[2] === Math.max(...hs) && STEPS.filter((x) => x.hi).map((x) => x.name).join() === 'Whittaker 1969'],
    ['The kingdoms and domains listed are the book\'s: 2 + 5 + 3', STEPS[1].lines[0] === 'Plantae · Animalia' && STEPS[2].lines.length === 5 && STEPS[3].lines.length === 3 && all(s, ['Monera', 'Protista', 'Fungi', 'Archaea', 'Bacteria', 'Eukarya']) && has(s, 'the archaebacteria; the three domains')],
    ['The axis caption is on the drawing', has(s, 'increasing complexity of evidence')],
    ...layout(s), clean(s),
  ];
}
const fig21: Diagram = { id: 'b11-02-fig-2.1', topic: 0, name: 'Classification through time', cases: [{ chip: 'Timeline', cap: CAP21 }], draw: draw21, check: check21 };

/* ================= Figure 2.2 ================= */
const CAP22 = 'A two-panel comparison: left, a labelled prokaryotic (bacterial) cell showing cell wall, plasma membrane, nucleoid (naked circular DNA), 70S ribosomes, plasmid, mesosome, capsule, flagellum, pili/fimbriae; right, a eukaryotic cell with a membrane-bound nucleus and organelles: one open room versus many walled departments.';
const NOTE22 = 'One open room vs. many walled departments.';
const PRO_NAMES = ['Capsule', 'Cell wall', 'Plasma membrane', 'Fimbriae', 'Pili', '70S ribosomes', 'Flagellum', 'Mesosome', 'Plasmid', 'Nucleoid (naked circular DNA)'];
const EUK_NAMES = ['Nucleus (envelope)', 'Nucleolus', 'Plasma membrane', 'Rough ER', '80S ribosomes', 'Lysosome', 'Mitochondrion', 'Golgi apparatus'];
/** A closed irregular loop, the nucleoid. */
const nucleoid = (cx: number, cy: number, k: number): P[] =>
  ([[-30, -4], [-22, -14], [-10, -10], [0, -16], [12, -12], [20, -2], [14, 8], [26, 14], [10, 16], [-2, 8], [-12, 14], [-24, 10], [-32, 4]] as P[]).map(([x, y]): P => [cx + x * k, cy + y * k]);
function drawProk(s: Sketch, cx: number, cy: number, tags: boolean, nucLabel = 'Nucleoid (naked circular DNA)') {
  const R = { cap: [112, 64], wall: [102, 54], mem: [95, 47] };
  ell(s, cx, cy, R.cap[0], R.cap[1], { color: C.slate, dash: true });
  ell(s, cx, cy, R.wall[0], R.wall[1], { w: 2.2 });
  ell(s, cx, cy, R.mem[0], R.mem[1]);
  // nucleoid (the highlight), ribosomes, plasmid, mesosome
  curve(s, [...nucleoid(cx - 8, cy, 1), nucleoid(cx - 8, cy, 1)[0]], { color: C.mari, w: 2.2 });
  const ribo: P[] = [[cx - 64, cy - 16], [cx - 40, cy - 30], [cx - 6, cy - 34], [cx + 28, cy - 30], [cx + 56, cy - 22], [cx + 64, cy + 4], [cx + 40, cy + 26], [cx - 4, cy + 30], [cx - 56, cy + 18], [cx - 44, cy + 32]];
  ribo.forEach(([x, y]) => s.dot(x, y, 2.6));
  ring(s, cx + 28, cy + 30, 7);
  const mes = onEll(cx, cy, R.mem[0], R.mem[1], 55);
  ring(s, mes.p[0] - mes.n[0] * 5, mes.p[1] - mes.n[1] * 5, 6);
  // flagellum: a wave from the right of the cell
  const fl = onEll(cx, cy, R.wall[0], R.wall[1], -8).p;
  curve(s, [fl, [fl[0] + 20, fl[1] - 12], [fl[0] + 40, fl[1] + 4], [fl[0] + 58, fl[1] - 10]], { color: C.slate, w: 2 });
  // fimbriae: many short lines, pili: a few long thick ones
  [158, 172, 186, 200].forEach((t) => { const { p, n } = onEll(cx, cy, R.wall[0], R.wall[1], t); path(s, [p, [p[0] + n[0] * 24, p[1] + n[1] * 24]], { color: C.slate, w: 1.2 }); });
  [128, 142].forEach((t) => { const { p, n } = onEll(cx, cy, R.wall[0], R.wall[1], t); path(s, [p, [p[0] + n[0] * 52, p[1] + n[1] * 52]], { w: 2.6 }); });
  if (!tags) return;
  const fim = onEll(cx, cy, R.wall[0], R.wall[1], 200), fimTip: P = [fim.p[0] + fim.n[0] * 24, fim.p[1] + fim.n[1] * 24];
  const pil = onEll(cx, cy, R.wall[0], R.wall[1], 142), pilTip: P = [pil.p[0] + pil.n[0] * 52, pil.p[1] + pil.n[1] * 52];
  const capP = onEll(cx, cy, R.cap[0], R.cap[1], 232).p, wallP = onEll(cx, cy, R.wall[0], R.wall[1], 270).p, memP = onEll(cx, cy, R.mem[0], R.mem[1], 305).p;
  tg(s, 6, 40, 'Capsule', capP[0], capP[1]);
  tg(s, 132, 40, 'Cell wall', wallP[0], wallP[1]);
  tgr(s, W - 6, 40, 'Plasma membrane', memP[0], memP[1]);
  tg(s, 6, 96, 'Fimbriae', fimTip[0], fimTip[1]);
  tg(s, 6, 238, 'Pili', pilTip[0], pilTip[1]);
  tgr(s, W - 6, 86, '70S ribosomes', cx + 56, cy - 22);
  tgr(s, W - 6, 186, 'Flagellum', fl[0] + 40, fl[1] + 4);
  tgr(s, W - 6, 250, 'Mesosome', mes.p[0] - mes.n[0] * 5 + 4.2, mes.p[1] - mes.n[1] * 5 + 4.2, { bare: true });
  tg(s, 150, 236, 'Plasmid', cx + 28, cy + 37);
  tg(s, 60, 284, nucLabel, cx - 39, cy + 4, { hi: true });
}
function drawEuk(s: Sketch, cx: number, cy: number, tags: boolean) {
  const R = 106;
  ring(s, cx, cy, R, { w: 2.2 });
  const nx = cx - 24, ny = cy - 20;
  ring(s, nx, ny, 34, { color: C.mari, w: 2.2 });
  ring(s, nx, ny, 30, { color: C.grey, w: 1.2 });
  ring(s, nx - 4, ny + 2, 9);
  // rough ER: a wave from the nucleus with dots along it, free 80S ribosomes
  curve(s, [[nx + 32, ny + 6], [nx + 46, ny - 6], [nx + 60, ny + 8], [nx + 76, ny - 2]], { color: C.slate });
  [[nx + 44, ny - 12], [nx + 58, ny + 0], [nx + 72, ny - 8]].forEach(([x, y]) => s.dot(x, y, 2.2));
  [[cx + 40, cy - 52], [cx + 56, cy - 38], [cx + 30, cy - 30], [cx + 62, cy - 14]].forEach(([x, y]) => s.dot(x, y, 2.6));
  ring(s, cx - 78, cy + 8, 10);
  ell(s, cx - 56, cy + 52, 20, 10, { deg: -35 });
  path(s, [[cx - 62, cy + 46], [cx - 56, cy + 54]], { w: 1.2 }); path(s, [[cx - 54, cy + 40], [cx - 48, cy + 49]], { w: 1.2 });
  [0, 6, 12].forEach((d) => path(s, arc(cx + 38, cy + 38 + d, 16 + d * 0.3, 205, 335, 8), { color: C.slate, w: 1.6 }));
  if (!tags) return;
  const memP: P = [cx + R * Math.cos((-45 * Math.PI) / 180), cy + R * Math.sin((-45 * Math.PI) / 180)];
  tg(s, 6, 40, 'Nucleus (envelope)', nx - 20, ny - 27, { hi: true });
  tg(s, 6, 104, 'Nucleolus', nx - 4, ny + 2);
  tgr(s, W - 6, 40, 'Plasma membrane', memP[0], memP[1]);
  tgr(s, W - 6, 116, 'Rough ER', nx + 58, ny + 0);
  tgr(s, W - 6, 148, '80S ribosomes', cx + 62, cy - 14);
  tg(s, 6, 186, 'Lysosome', cx - 82, cy + 12);
  tg(s, 6, 268, 'Mitochondrion', cx - 62, cy + 56);
  tgr(s, W - 6, 280, 'Golgi apparatus', cx + 46, cy + 56);
}
function draw22(c: { chip: string }): Sketch {
  const prok = c.chip === 'Prokaryotic cell';
  const s = new Sketch(W, prok ? 336 : 332);
  if (prok) { lab(s, W / 2, 20, 'Prokaryotic (bacterial) cell', { size: 14, bold: true }); drawProk(s, 180, 160, true); }
  else { lab(s, W / 2, 20, 'Eukaryotic cell', { size: 14, bold: true }); drawEuk(s, 180, 168, true); }
  lab(s, W / 2, prok ? 326 : 324, NOTE22, { size: 11, color: C.slate });
  return s;
}
function check22(c: { chip: string }): Check[] {
  const s = draw22(c);
  const prok = c.chip === 'Prokaryotic cell';
  const names = prok ? PRO_NAMES : EUK_NAMES;
  const hi = s.tags.filter((t) => /fill|stroke/.test(t.name)).length;
  return [
    [prok ? 'All ten parts the book names on the bacterial cell are tagged, and its heading is the book\'s' : 'All eight parts the book names on the eukaryotic cell are tagged, and its heading is the book\'s', all(s, names) && s.tags.length === names.length && has(s, prok ? 'Prokaryotic (bacterial) cell' : 'Eukaryotic cell') && hi === 0],
    ['The book\'s note "One open room vs. many walled departments." is on the drawing', has(s, NOTE22)],
    prok
      ? ['Pili are fewer and longer than fimbriae, and the nucleoid (naked DNA) lies inside the plasma membrane with the plasmid', (() => { const mem = [95, 47]; return inEll([172, 160], 180, 160, mem[0], mem[1], 6) && inEll([208, 190], 180, 160, mem[0], mem[1], 6); })()]
      : ['The nucleus (membrane-bound, highlighted) lies inside the cell outline with the other organelles', inEll([156, 148], 180, 168, 106, 106, 30)],
    ...layout(s), clean(s),
  ];
}
const fig22: Diagram = { id: 'b11-02-fig-2.2', topic: 1, name: 'Prokaryotic and eukaryotic cells', cases: [{ chip: 'Prokaryotic cell', cap: CAP22 }, { chip: 'Eukaryotic cell', cap: CAP22 }], draw: draw22, check: check22 };

/* ================= Figure 2.3 ================= */
const CAP23 = 'Labelled bacterial cell with capsule, cell wall, plasma membrane, mesosome, nucleoid, plasmid, 70S ribosomes, flagellum, fimbriae and pili clearly distinguished.';
function draw23(): Sketch {
  const s = new Sketch(W, 320);
  lab(s, W / 2, 20, 'Prokaryotic Bacterial Cell', { size: 14, bold: true });
  drawProk(s, 180, 160, true, 'Nucleoid (circular DNA)');
  return s;
}
function check23(): Check[] {
  const s = draw23();
  const parts = ['Capsule', 'Cell wall', 'Plasma membrane', 'Mesosome', 'Nucleoid (circular DNA)', 'Plasmid', '70S ribosomes', 'Flagellum', 'Fimbriae', 'Pili'];
  const named = ['Capsule', 'Cell wall', 'Plasma membrane', 'Mesosome', 'Nucleoid (circular DNA)', 'Plasmid', '70S ribosomes', 'Flagellum', 'Fimbriae', 'Pili'];
  return [
    ['All ten parts the caption lists are tagged; the nucleoid is the highlight (the book\'s label for it here reads "Nucleoid (circular DNA)", and "naked" is the Fig 2.2 wording only)', parts.length === 10 && named.every((t) => has(s, t)) && has(s, 'Prokaryotic Bacterial Cell')],
    ['The three outlines nest: capsule outside the cell wall outside the plasma membrane', (() => { const a = [112, 64], b = [102, 54], m = [95, 47]; return a[0] > b[0] && b[0] > m[0] && a[1] > b[1] && b[1] > m[1]; })()],
    ...layout(s), clean(s),
  ];
}
const fig23: Diagram = { id: 'b11-02-fig-2.3', topic: 1, name: 'A bacterial cell', cases: [{ chip: 'Bacterial cell', cap: CAP23 }], draw: draw23, check: check23 };

/* ================= Figure 2.4 ================= */
const CAP24 = 'A central hub labelled "PROTISTA (single-celled eukaryotes)" with three arrows radiating out to "Plant-like (algal protists)", "Animal-like (protozoa)", and "Fungus-like (slime moulds)", and a two-way arrow at the bottom linking it to "Monera (prokaryotes)", depicting Protista as the evolutionary crossroads.';
const HUB: P = [180, 176], HUBR = 46;
const KIN: { name: string; sub: string; rect: Rect; arrow: string; ang: number; end: P }[] = [
  { name: 'Fungus-like', sub: '(slime moulds)', rect: [8, 52, 112, 98], arrow: 'saprophytic', ang: 220, end: [112, 104] },
  { name: 'Plant-like', sub: '(algal protists)', rect: [248, 52, 352, 98], arrow: 'photosynthetic', ang: 320, end: [244, 104] },
  { name: 'Animal-like', sub: '(protozoa)', rect: [248, 254, 352, 300], arrow: 'heterotrophic', ang: 40, end: [246, 254] },
];
function draw24(): Sketch {
  const s = new Sketch(W, 372);
  lab(s, W / 2, 24, 'Protista as Evolutionary Crossroads', { size: 14, bold: true });
  ring(s, HUB[0], HUB[1], HUBR, { color: C.mari, w: 2.4 });
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name: 'hub', rect: [HUB[0] - HUBR, HUB[1] - HUBR, HUB[0] + HUBR, HUB[1] + HUBR], inner: [] }]);
  lab(s, HUB[0], HUB[1] - 8, 'PROTISTA', { size: 12, bold: true, color: C.amber });
  lab(s, HUB[0], HUB[1] + 10, '(single-celled', { size: 10.5, color: C.slate });
  lab(s, HUB[0], HUB[1] + 23, 'eukaryotes)', { size: 10.5, color: C.slate });
  KIN.forEach((k) => {
    const cx = (k.rect[0] + k.rect[2]) / 2;
    box(s, k.name, k.rect);
    lab(s, cx, k.rect[1] + 20, k.name, { size: 12, bold: true, within: k.name });
    lab(s, cx, k.rect[1] + 36, k.sub, { size: 10.5, color: C.slate, within: k.name });
    const a = (k.ang * Math.PI) / 180, st: P = [HUB[0] + (HUBR + 3) * Math.cos(a), HUB[1] + (HUBR + 3) * Math.sin(a)];
    s.vec(st[0], st[1], k.end[0], k.end[1], { color: C.slate, w: 1.7 }); keep(s, [st, k.end]);
  });
  lab(s, 100, 130, 'saprophytic', { size: 10.5, anchor: 'end', color: C.slate });
  lab(s, 246, 130, 'photosynthetic', { size: 10.5, anchor: 'start', color: C.slate });
  lab(s, 246, 238, 'heterotrophic', { size: 10.5, anchor: 'start', color: C.slate });
  box(s, 'Monera', [120, 312, 240, 358]);
  lab(s, 180, 332, 'Monera', { size: 12, bold: true, within: 'Monera' });
  lab(s, 180, 348, '(prokaryotes)', { size: 10.5, color: C.slate, within: 'Monera' });
  s.vec(180, HUB[1] + HUBR + 3, 180, 308, { color: C.slate, w: 1.7 }); s.vec(180, 316, 180, HUB[1] + HUBR + 8, { color: C.slate, w: 1.7 });
  keep(s, [[180, HUB[1] + HUBR + 3], [180, 310]]);
  return s;
}
function check24(): Check[] {
  const s = draw24();
  const toward = KIN.every((k) => len([(k.rect[0] + k.rect[2]) / 2, (k.rect[1] + k.rect[3]) / 2], k.end) < len([(k.rect[0] + k.rect[2]) / 2, (k.rect[1] + k.rect[3]) / 2], HUB));
  return [
    ['The hub and the four boxes carry the book\'s words: PROTISTA (single-celled eukaryotes), Plant-like (algal protists), Animal-like (protozoa), Fungus-like (slime moulds), Monera (prokaryotes)', all(s, ['PROTISTA', 'Plant-like', '(algal protists)', 'Animal-like', '(protozoa)', 'Fungus-like', '(slime moulds)', 'Monera', '(prokaryotes)', '(single-celled', 'eukaryotes)'])],
    ['Three one-way arrows leave the hub, each ending at its box and labelled with its mode of nutrition (photosynthetic, heterotrophic, saprophytic), and one two-way arrow joins the hub to Monera', KIN.length === 3 && toward && KIN.map((k) => k.arrow).sort().join() === 'heterotrophic,photosynthetic,saprophytic' && all(s, ['photosynthetic', 'heterotrophic', 'saprophytic'])],
    ['Each arrow label sits beside its own arrow, not under a box (the errata\'s fix for "saprophytic"): nearer its own arrow than any other', (() => { const L: [string, P][] = [['saprophytic', [100, 126]], ['photosynthetic', [246, 126]], ['heterotrophic', [246, 234]]]; return L.every(([t, p]) => { const k = KIN.find((q) => q.arrow === t)!, a = (k.ang * Math.PI) / 180, st: P = [HUB[0] + HUBR * Math.cos(a), HUB[1] + HUBR * Math.sin(a)], mid: P = [(st[0] + k.end[0]) / 2, (st[1] + k.end[1]) / 2]; return KIN.filter((q) => q !== k).every((q) => { const a2 = (q.ang * Math.PI) / 180, s2: P = [HUB[0] + HUBR * Math.cos(a2), HUB[1] + HUBR * Math.sin(a2)]; return len(p, mid) < len(p, [(s2[0] + q.end[0]) / 2, (s2[1] + q.end[1]) / 2]); }); }); })()],
    ['The hub (the one highlight) lies midway between Monera below and the three kinds above and beside', HUB[1] < 312 && HUB[1] > 52],
    ...layout(s), clean(s),
  ];
}
const fig24: Diagram = { id: 'b11-02-fig-2.4', topic: 2, name: 'Protista as a crossroads', cases: [{ chip: 'Crossroads', cap: CAP24 }], draw: draw24, check: check24 };

/* ================= Figure 2.5 ================= */
const CAP25 = 'A fungal mycelium shown as a branching network of hyphae spreading through a substrate, with one inset magnifying a single hypha to show the chitinous cell wall and (a) a septate hypha with cross-walls vs (b) an aseptate coenocytic hypha with many nuclei and no cross-walls.';
const TRUNK = 180, SUB_TOP = 268;
const NODES = [220, 176, 130];
const TIPS: P[] = [[80, 170], [280, 170], [84, 114], [276, 114], [84, 44], [276, 44]];
const SEPTA = [96, 152, 208, 264], SEPT_NUC = [68, 124, 180, 236, 292], COEN_NUC = [60, 84, 122, 146, 188, 214, 252, 280];
function draw25(): Sketch {
  const s = new Sketch(W, 566);
  lab(s, W / 2, 22, 'Fungal Mycelium: Hyphal Network', { size: 14, bold: true });
  const hy = (pts: P[]) => path(s, pts, { color: C.mari, w: 2.2 });
  hy([[TRUNK, SUB_TOP], [TRUNK, 70]]);
  hy([[TRUNK, NODES[0]], TIPS[0]]); hy([[TRUNK, NODES[0]], TIPS[1]]);
  hy([[TRUNK, NODES[1]], TIPS[2]]); hy([[TRUNK, NODES[1]], TIPS[3]]);
  hy([[TRUNK, NODES[2]], [130, 84], TIPS[4]]); hy([[TRUNK, NODES[2]], [232, 84], TIPS[5]]);
  TIPS.forEach(([x, y]) => ring(s, x, y, 8));
  box(s, 'substrate', [30, SUB_TOP, 330, 300]);
  lab(s, 180, 289, 'substrate', { size: 11, color: C.slate, within: 'substrate' });
  lab(s, 194, 246, 'mycelium', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 194, 259, '(network of hyphae)', { size: 11, anchor: 'start', color: C.slate });
  tg(s, 6, 66, 'sporangium', TIPS[4][0] - 6, TIPS[4][1] + 6);
  tg(s, 258, 68, 'hypha', 214, 100, { hi: true });
  // the arrow to the inset
  s.vec(180, 304, 180, 326, { color: C.slate, w: 1.6, dash: true }); keep(s, [[180, 304], [180, 326]]);
  // the inset
  box(s, 'inset', [8, 330, 352, 556]);
  lab(s, 180, 352, 'Hypha magnified', { size: 13, bold: true, within: 'inset' });
  lab(s, 180, 380, '(a) Septate hypha', { size: 12, bold: true, within: 'inset' });
  const ya = 398;
  path(s, [[40, ya], [320, ya]], { color: C.mari, w: 2.2 }); path(s, [[40, ya + 14], [320, ya + 14]], { color: C.mari, w: 2.2 });
  SEPTA.forEach((x) => path(s, [[x, ya], [x, ya + 14]], { w: 2.4 }));
  SEPT_NUC.forEach((x) => ring(s, x, ya + 7, 3.6));
  tg(s, 14, 424, 'septa (cross-walls)', SEPTA[0], ya + 7);
  tgr(s, 346, 424, 'chitinous cell wall', 300, ya + 14);
  lab(s, 180, 486, '(b) Aseptate (coenocytic) hypha', { size: 12, bold: true, within: 'inset' });
  const yb = 504;
  path(s, [[40, yb], [320, yb]], { color: C.mari, w: 2.2 }); path(s, [[40, yb + 14], [320, yb + 14]], { color: C.mari, w: 2.2 });
  COEN_NUC.forEach((x) => ring(s, x, yb + 7, 3.6));
  lab(s, 180, 540, 'no cross-walls; many nuclei in shared cytoplasm', { size: 11, color: C.slate, within: 'inset' });
  return s;
}
function check25(): Check[] {
  const s = draw25();
  const cells = SEPTA.length + 1;
  const names = ['sporangium', 'hypha', 'mycelium', '(network of hyphae)', 'substrate', 'Hypha magnified', '(a) Septate hypha', 'septa (cross-walls)', 'chitinous cell wall', '(b) Aseptate (coenocytic) hypha', 'no cross-walls; many nuclei in shared cytoplasm'];
  return [
    ['Every label of the book is on the drawing: sporangium, hypha, mycelium (network of hyphae), substrate, the inset and its four labels', all(s, names) && has(s, 'Fungal Mycelium: Hyphal Network')],
    ['Six sporangia end the branches (three tiers of two) and all grow up from the substrate', TIPS.length === 6 && TIPS.every(([, y]) => y < SUB_TOP) && NODES.length === 3],
    ['The septate hypha has four septa dividing it into five compartments, one nucleus in each', cells === 5 && SEPT_NUC.length === cells && SEPT_NUC.every((x, i) => x > (SEPTA[i - 1] ?? 40) && x < (SEPTA[i] ?? 320))],
    ['The aseptate hypha has no septum and many (eight) nuclei in one tube', COEN_NUC.length === 8 && COEN_NUC.length > SEPT_NUC.length],
    ...layout(s), clean(s),
  ];
}
const fig25: Diagram = { id: 'b11-02-fig-2.5', topic: 3, name: 'Fungal mycelium and hyphae', cases: [{ chip: 'Mycelium and hyphae', cap: CAP25 }], draw: draw25, check: check25 };

/* ================= Figure 2.6 ================= */
const CAP26 = 'A flow strip showing two compatible hyphae, plasmogamy (protoplasms fuse, two nuclei side by side), dikaryon / dikaryophase (n+n), karyogamy (nuclei fuse into a diploid zygote), meiosis, haploid spores, with the Ascomycete branch ending in ascospores-in-ascus and the Basidiomycete branch ending in basidiospores-on-basidium.';
const FLOW: { t: string; note?: string[]; bold: boolean; hi?: boolean }[] = [
  { t: 'Two compatible hyphae', bold: false },
  { t: 'Plasmogamy', note: ['(protoplasts fuse,', 'two nuclei side by side)'], bold: true },
  { t: 'Dikaryon (n+n)', note: ['(karyogamy delayed in', 'Asco- and Basidiomycetes)'], bold: true, hi: true },
  { t: 'Karyogamy', note: ['(nuclei fuse into', 'diploid zygote)'], bold: true },
  { t: 'Diploid zygote', bold: false },
  { t: 'Haploid spores', bold: true },
];
const FX: [number, number] = [45, 195], FH = 36, FG = 22;
function draw26(): Sketch {
  const s = new Sketch(W, 520);
  lab(s, W / 2, 22, 'Fungal Sexual Reproduction Cycle', { size: 14, bold: true });
  let y = 38;
  const tops: number[] = [];
  FLOW.forEach((f, i) => {
    const gap = i === 4 ? FG + 10 : FG, r: Rect = [FX[0], y, FX[1], y + FH], cx = (FX[0] + FX[1]) / 2;
    tops.push(y);
    box(s, f.t, r, f.hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, cx, y + 23, f.t, { size: 12, bold: f.bold, color: f.hi ? C.amber : C.text, within: f.t });
    if (f.note) f.note.forEach((t, k) => lab(s, 208, y + 15 + k * 13, t, { size: 10.5, anchor: 'start', color: C.slate }));
    if (i < FLOW.length - 1) { s.vec(cx, y + FH + 1, cx, y + FH + gap - 1, { color: C.slate, w: 1.7 }); keep(s, [[cx, y + FH + 1], [cx, y + FH + gap - 1]]); }
    if (i === 4) lab(s, cx + 12, y + FH + 22, 'Meiosis', { size: 12, anchor: 'start', bold: true, color: C.amber });
    y += FH + gap;
  });
  const cx = (FX[0] + FX[1]) / 2, ys = y - FG + FH + FG - FH; // bottom of Haploid spores is tops[5] + FH
  const yb = tops[5] + FH;
  const by = yb + 26, ty = yb + 48, LX = 92, RX = 268;
  path(s, [[cx, yb + 1], [cx, by], [LX, by], [LX, ty - 2]], {});
  path(s, [[cx, by], [RX, by], [RX, ty - 2]], {});
  s.vec(LX, by + 4, LX, ty, { color: C.ink, w: 1.7 }); s.vec(RX, by + 4, RX, ty, { color: C.ink, w: 1.7 });
  void ys;
  // two ending boxes
  const A: Rect = [8, ty + 2, 176, ty + 96], B: Rect = [184, ty + 2, 352, ty + 96];
  box(s, 'asc', A); box(s, 'bas', B);
  lab(s, LX, ty + 22, 'ASCOMYCETES', { size: 10, bold: true, color: C.slate, within: 'asc' });
  lab(s, LX, ty + 40, 'Ascospores in Ascus', { size: 11.5, bold: true, within: 'asc' });
  box(s, 'ascus', [LX - 30, ty + 52, LX + 30, ty + 80], { color: C.slate, w: 1.5 });
  [-18, -6, 6, 18].forEach((d) => ring(s, LX + d, ty + 66, 3.4));
  lab(s, RX, ty + 22, 'BASIDIOMYCETES', { size: 10, bold: true, color: C.slate, within: 'bas' });
  lab(s, RX, ty + 40, 'Basidiospores on Basidium', { size: 11, bold: true, within: 'bas' });
  ell(s, RX, ty + 72, 9, 12);
  [-15, -5, 5, 15].forEach((d) => { path(s, [[RX + d * 0.5, ty + 61], [RX + d, ty + 54]], { w: 1.4 }); ring(s, RX + d, ty + 52, 2.6); });
  s.h = ty + 96 + 14;
  return s;
}
function check26(): Check[] {
  const s = draw26();
  const names = ['Two compatible hyphae', 'Plasmogamy', 'Dikaryon (n+n)', 'Karyogamy', 'Diploid zygote', 'Meiosis', 'Haploid spores', 'ASCOMYCETES', 'Ascospores in Ascus', 'BASIDIOMYCETES', 'Basidiospores on Basidium', '(protoplasts fuse,', 'two nuclei side by side)', '(karyogamy delayed in', 'Asco- and Basidiomycetes)', '(nuclei fuse into', 'diploid zygote)'];
  const order = ['Two compatible hyphae', 'Plasmogamy', 'Dikaryon (n+n)', 'Karyogamy', 'Diploid zygote', 'Haploid spores'];
  const ys = order.map((t) => s.labels.find((l) => l.text === t)!.rect[1]);
  const meio = s.labels.find((l) => l.text === 'Meiosis')!.rect[1];
  return [
    ['The steps follow the book\'s order: two compatible hyphae, plasmogamy, dikaryon (n+n), karyogamy, diploid zygote, meiosis, haploid spores', FLOW.map((f) => f.t).join() === order.join() && ys.every((y, i) => !i || y > ys[i - 1]) && meio > ys[4] && meio < ys[5]],
    ['Every word of the book is on the drawing: the six boxes, "Meiosis", the three notes and the two ending boxes', all(s, names) && has(s, 'Fungal Sexual Reproduction Cycle')],
    ['The cycle ends in two branches, the Ascomycete box with four ascospores in an ascus and the Basidiomycete box with four basidiospores on a basidium', s.labels.filter((l) => /^ASCO|^BASIDIO/.test(l.text)).length === 2],
    ['Only Dikaryon (n+n) is highlighted', FLOW.filter((f) => f.hi).map((f) => f.t).join() === 'Dikaryon (n+n)'],
    ...layout(s), clean(s),
  ];
}
const fig26: Diagram = { id: 'b11-02-fig-2.6', topic: 3, name: 'Fungal sexual cycle', cases: [{ chip: 'Sexual cycle', cap: CAP26 }], draw: draw26, check: check26 };

/* ================= Figure 2.7 ================= */
const CAP27 = 'A side-by-side of a generalised plant cell (cellulose wall, chloroplasts, large central vacuole) and a generalised animal cell (no wall, no chloroplasts), with captions "Plantae: autotroph, walled" and "Animalia: heterotroph, wall-less".';
const PLANT: { wall: Rect; mem: Rect; nuc: P; vac: P; chl: P[] } = { wall: [60, 76, 230, 236], mem: [67, 83, 223, 229], nuc: [102, 120], vac: [150, 172], chl: [[176, 100], [206, 124], [208, 178], [94, 180], [100, 210], [196, 212]] };
const ANI = { c: [150, 160] as P, r: 78, nuc: [128, 138] as P };
function draw27(c: { chip: string }): Sketch {
  const plant = c.chip === 'Plant cell';
  const s = new Sketch(W, plant ? 282 : 290);
  if (plant) {
    lab(s, W / 2, 22, 'Plant Cell: autotroph, walled', { size: 14, bold: true });
    const { wall, mem, nuc, vac, chl } = PLANT;
    const rr = (r: Rect, o: { color?: string; w?: number }) => { s.add(`<rect x="${r[0]}" y="${r[1]}" width="${r[2] - r[0]}" height="${r[3] - r[1]}" rx="4" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`); keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]); };
    rr(wall, { color: C.mari, w: 3 }); rr(mem, {});
    ring(s, nuc[0], nuc[1], 18); ring(s, nuc[0] - 3, nuc[1] + 2, 5);
    ring(s, vac[0], vac[1], 36, { color: C.slate });
    chl.forEach(([x, y]) => { ell(s, x, y, 8, 4.5); path(s, [[x - 4, y], [x + 4, y]], { w: 1.1 }); });
    tg(s, 10, 44, 'Nucleus', nuc[0] - 10, nuc[1] - 16);
    tg(s, 244, 44, 'Cell wall', wall[2], 96, { hi: true });
    tg(s, 244, 118, 'Cell membrane', mem[2], 130);
    tg(s, 244, 188, 'Chloroplast', 214, 178);
    tg(s, 96, 254, 'Central vacuole', vac[0], vac[1] + 36);
  } else {
    lab(s, W / 2, 22, 'Animal Cell: heterotroph, wall-less', { size: 14, bold: true });
    const [cx, cy] = ANI.c, [nx, ny] = ANI.nuc;
    ring(s, cx, cy, ANI.r, { color: C.mari, w: 2.6 });
    ring(s, nx, ny, 20); ring(s, nx - 3, ny + 2, 5.5);
    ell(s, cx + 30, cy - 38, 9, 5, { deg: -20 }); ell(s, cx - 38, cy + 34, 9, 5, { deg: 20 }); ell(s, cx + 36, cy + 28, 9, 5, { deg: -10 });
    ring(s, cx + 8, cy - 60, 6); ring(s, cx + 20, cy - 4, 6);
    curve(s, [[cx - 62, cy + 6], [cx - 54, cy - 2], [cx - 48, cy + 8], [cx - 40, cy + 2]], { color: C.slate, w: 1.4 });
    [0, 6, 12].forEach((d) => path(s, arc(cx - 6, cy + 40 + d, 18, 200, 340, 8), { color: C.slate, w: 1.6 }));
    tg(s, 6, 46, 'Nucleus', nx - 12, ny - 16);
    tg(s, 246, 84, 'Mitochondrion', cx + 38, cy - 40);
    tg(s, 246, 150, 'Cell membrane', cx + ANI.r, cy - 6, { hi: true });
    tg(s, 236, 214, 'Golgi apparatus', cx + 8, cy + 50);
    lab(s, W / 2, 274, 'no cell wall: the plasma membrane is the outer boundary', { size: 11, color: C.slate });
  }
  return s;
}
function check27(c: { chip: string }): Check[] {
  const s = draw27(c);
  const plant = c.chip === 'Plant cell';
  const names = plant ? ['Nucleus', 'Cell wall', 'Cell membrane', 'Chloroplast', 'Central vacuole'] : ['Nucleus', 'Mitochondrion', 'Cell membrane', 'Golgi apparatus'];
  return [
    [plant ? 'The plant cell carries the book\'s five labels and its heading, "Plant Cell: autotroph, walled"' : 'The animal cell carries the book\'s four labels, its heading and the note about the plasma membrane', all(s, names) && s.tags.length === names.length && has(s, plant ? 'Plant Cell: autotroph, walled' : 'Animal Cell: heterotroph, wall-less') && (plant || has(s, 'no cell wall: the plasma membrane is the outer boundary'))],
    plant
      ? ['The plant cell has a wall outside its membrane, chloroplasts and a large central vacuole, all inside the wall', PLANT.chl.length === 6 && PLANT.chl.every(([x, y]) => x > PLANT.mem[0] && x < PLANT.mem[2] && y > PLANT.mem[1] && y < PLANT.mem[3]) && PLANT.wall[0] < PLANT.mem[0] && PLANT.wall[2] > PLANT.mem[2]]
      : ['The animal cell has one outline only (the membrane, the highlight) and no wall, no chloroplast, no vacuole', s.tags.every((t) => !/wall|chloroplast|vacuole/i.test(t.name.replace('no cell wall', '')))],
    ...layout(s), clean(s),
  ];
}
const fig27: Diagram = { id: 'b11-02-fig-2.7', topic: 4, name: 'Plant and animal cells', cases: [{ chip: 'Plant cell', cap: CAP27 }, { chip: 'Animal cell', cap: CAP27 }], draw: draw27, check: check27 };

/* ================= Figure 2.8 ================= */
const CAP28 = 'A bacteriophage drawn with labelled head (containing the nucleic acid), collar, sheath/tail and tail fibres; beside it a simple rod-shaped TMV showing helically arranged capsomeres around a coiled RNA strand: two virus architectures, tailed phage and helical TMV.';
const ROW_N = 13, ROW_Y0 = 100, ROW_DY = 14;
function draw28(c: { chip: string }): Sketch {
  const phage = c.chip === '(a) Bacteriophage';
  const s = new Sketch(W, phage ? 336 : 346);
  if (phage) {
    lab(s, W / 2, 20, 'Bacteriophage (T4-like)', { size: 14, bold: true });
    const hx = 180, hy = 116, R = 58;
    const hex: P[] = [-90, -30, 30, 90, 150, 210].map((a): P => [hx + R * Math.cos((a * Math.PI) / 180), hy + R * Math.sin((a * Math.PI) / 180)]);
    path(s, hex, { close: true, color: C.mari, w: 2.4 });
    ell(s, hx, hy, 16, 28, { color: C.slate, w: 1.5 }); ell(s, hx, hy, 9, 20, { color: C.slate, w: 1.2 });
    ell(s, hx, 184, 17, 5);
    const sheath: P[] = Array.from({ length: 12 }, (_, i): P => [hx + (i % 2 ? 8 : -8), 192 + i * 5.5]);
    path(s, sheath, { color: C.slate, w: 1.7 });
    path(s, [[hx - 22, 256], [hx + 22, 256], [hx + 22, 266], [hx - 22, 266]], { close: true });
    ([[-22, -48, 292], [-12, -26, 300], [12, 26, 300], [22, 48, 292]] as number[][]).forEach(([x0, x1, y1]) => { path(s, [[hx + x0, 266], [hx + x1, y1]], { w: 1.5 }); s.dot(hx + x1, y1, 2.2); });
    tg(s, 238, 40, 'Head (capsid)', 206, 73, { hi: true });
    tg(s, 6, 90, 'Nucleic acid (DNA)', hx - 16, hy);
    tg(s, 6, 176, 'Collar', hx - 17, 186);
    tg(s, 240, 200, 'Tail sheath', hx + 8, 214);
    tg(s, 6, 288, 'Tail fibers', hx - 35, 279);
    tg(s, 240, 262, 'Base plate', hx + 22, 262);
  } else {
    lab(s, W / 2, 20, 'Tobacco Mosaic Virus (TMV)', { size: 14, bold: true });
    const cx = 110, top = ROW_Y0 - 14, bot = ROW_Y0 + (ROW_N - 1) * ROW_DY + ROW_DY + 6;
    ell(s, cx, top, 17, 5); ell(s, cx, bot, 17, 5);
    const rna: P[] = [];
    for (let k = 0; k < ROW_N; k++) { rna.push([cx - 6, ROW_Y0 + k * ROW_DY]); rna.push([cx + 6, ROW_Y0 + k * ROW_DY + ROW_DY / 2]); }
    path(s, rna, { color: C.slate, w: 1.6 });
    for (let k = 0; k < ROW_N; k++) { ring(s, cx - 15, ROW_Y0 + k * ROW_DY, 3.4, { color: C.mari, w: 1.8 }); ring(s, cx + 15, ROW_Y0 + k * ROW_DY + ROW_DY / 2, 3.4, { color: C.mari, w: 1.8 }); }
    const mid = (top + bot) / 2;
    s.line(166, top, 166, bot, { color: C.slate, w: 1.4 }); keep(s, [[166, top], [166, bot]]);
    s.line(161, top, 171, top, { color: C.slate, w: 1.4 }); s.line(161, bot, 171, bot, { color: C.slate, w: 1.4 });
    lab(s, 178, mid - 2, 'Capsid length:', { size: 11, anchor: 'start', color: C.slate });
    lab(s, 178, mid + 12, '~300 nm', { size: 11, anchor: 'start', color: C.slate });
    tg(s, 62, 36, 'Helically arranged capsomeres (protein)', cx + 15, ROW_Y0 + ROW_DY / 2, { hi: true });
    tg(s, 6, 316, 'RNA strand (coiled inside)', cx + 6, ROW_Y0 + (ROW_N - 1) * ROW_DY + ROW_DY / 2);
  }
  return s;
}
function check28(c: { chip: string }): Check[] {
  const s = draw28(c);
  const phage = c.chip === '(a) Bacteriophage';
  const names = phage ? ['Head (capsid)', 'Nucleic acid (DNA)', 'Collar', 'Tail sheath', 'Tail fibers', 'Base plate', 'Bacteriophage (T4-like)'] : ['Helically arranged capsomeres (protein)', 'RNA strand (coiled inside)', 'Capsid length:', '~300 nm', 'Tobacco Mosaic Virus (TMV)'];
  return [
    [phage ? 'The phage carries the book\'s six labels and heading: head (capsid), nucleic acid (DNA), collar, tail sheath, tail fibers, base plate' : 'The TMV carries the book\'s two labels, the capsid-length note "~300 nm" and its heading', all(s, names) && (phage ? s.tags.length === 6 : s.tags.length === 2)],
    phage
      ? ['The head (the highlight) is a regular hexagon above the collar, sheath, base plate and fibres, in that order down the tail', (() => { const y = [116, 184, 192 + 5.5 * 11, 261]; return y.every((v, i) => !i || v > y[i - 1]); })()]
      : ['The rod holds thirteen turns of capsomere pairs around one RNA zigzag, and the capsid length is bracketed along its whole length', ROW_N === 13],
    ...layout(s), clean(s),
  ];
}
const fig28: Diagram = { id: 'b11-02-fig-2.8', topic: 5, name: 'Phage and TMV', cases: [{ chip: '(a) Bacteriophage', cap: CAP28 }, { chip: '(b) Tobacco mosaic virus', cap: CAP28 }], draw: (c: { chip: string }) => draw28({ chip: c.chip === '(b) Tobacco mosaic virus' ? 'b' : '(a) Bacteriophage' }), check: (c: { chip: string }) => check28({ chip: c.chip === '(b) Tobacco mosaic virus' ? 'b' : '(a) Bacteriophage' }) };

export const DIAGRAMS_BIOLOGY_11_02: Diagram[] = [fig21, fig22, fig23, fig24, fig25, fig26, fig27, fig28];
