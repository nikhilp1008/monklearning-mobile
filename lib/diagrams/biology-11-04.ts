import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 4 (Animal Kingdom): the drawings of the Master Reference book on pp. 221-283, redrawn.
 * SIX numbered figures, all of them in the book's own "Figures" pages (pp. 224, 228, 237, 245, 247); the rest of pp. 221-283
 * holds only tables and page rules (the writers' reports list no unnumbered drawing, and none was found on the page images).
 *
 *   Figure 4.1 (drawing p. 224, caption p. 223), Topic 01, topic index 0: Kingdom Animalia classification chart.
 *   Figure 4.2 (drawing p. 228, caption p. 227), Topic 02, topic index 1: the three body-cavity types as cross-sections.
 *   Figure 4.3 (drawing p. 237, caption p. 236), Topic 03, topic index 2: the dichotomous key to the non-chordate phyla.
 *   Figure 4.4 (drawing p. 237, caption p. 236), Topic 03, topic index 2: longitudinal section of a Sycon-type sponge.
 *   Figure 4.5 (drawing p. 245, caption p. 244), Topic 04, topic index 3: classification of Phylum Chordata.
 *   Figure 4.6 (drawing p. 247, caption p. 246), Topic 04, topic index 3: the fate of the notochord in three chordate groups.
 *
 * THE BOOK'S, as printed: every word of every label, box and arrow label (an em dash in a label is written as a colon or a
 * comma); the order of the ten non-chordate phyla in 4.1 and every example genus; every Yes/No answer and which way it
 * leads in 4.1, 4.3 and 4.5 (Notochord present?, Cranium?, Jaws?; True tissues?, Symmetry?, Body feature?, Coelom?,
 * Coelom origin?, Segmented?, Exoskeleton?, Adult symmetry?); the five-layer reading of 4.2 (ectoderm outermost, endoderm
 * innermost, mesoderm solid / as scattered patches / as two linings); the water path of 4.4 (ostia, spongocoel lined with
 * choanocytes, osculum), its five labels and the spicules in the body wall; in 4.6 which group keeps the notochord for life
 * (Cephalochordata), in the larval tail only (Urochordata) and replaces it by the vertebral column (Vertebrata).
 * SCHEMATIC: every box size and position (re-laid for a phone: the book's charts are far wider), the leader and arrow
 * angles, the choice to stack the book's two columns of 4.1 with a vertical "Yes" line, every shape of 4.2, 4.4 and 4.6
 * (no scale; the number of ostia, spicules and choanocytes in 4.4 and of vertebrae in 4.6 are only a pattern, as in the
 * book), and the layout of the key's branches in 4.3 (the book's arrows run both sides of one spine; here the answers that
 * continue the key run down one side and the finished phyla sit on the other). The book's own layout slips (errata: the
 * arrow of 4.1 that crosses the corner of the AGNATHA box, the two mesoderm circles of 4.2 that overlap, the key's
 * Ctenophora box under Platyhelminthes) are not repeated. Colour is the app's style (no fills; the one marigold highlight is
 * the starting point in 4.1, 4.3 and 4.5, the mesoderm in 4.2, the water path in 4.4 and the notochord in 4.6), not the book's.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers (the Chapter 1 set) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; plain?: boolean; dash?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  if (!o.plain) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function circle(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number; dash?: boolean; plain?: boolean } = {}) {
  s.add(`<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  if (!o.plain) keep(s, Array.from({ length: 33 }, (_, i): P => [cx + r * Math.cos((i / 32) * 2 * Math.PI), cy + r * Math.sin((i / 32) * 2 * Math.PI)]));
}
function ellipse(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; plain?: boolean } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${rx}" ry="${ry}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  if (!o.plain) keep(s, Array.from({ length: 25 }, (_, i): P => [cx + rx * Math.cos((i / 24) * 2 * Math.PI), cy + ry * Math.sin((i / 24) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 6}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.5}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 10, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
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
    [`Every label lies inside its box${spill.length ? `: not in ${[...new Set(spill)].join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

/* ---------- chart pieces ---------- */
type Ln = { h: string; bold?: boolean; color?: string };
const LH = 12.5, PAD = 7;
const boxH = (n: number) => 2 * PAD + 10 + (n - 1) * LH;
/** A node of a chart: a box with centred lines. `pill` makes a decision (round ends), otherwise a result. Returns its rect. */
function node(s: Sketch, id: string, x: number, y: number, w: number, lines: (string | Ln)[], o: { hi?: boolean; pill?: boolean } = {}): Rect {
  const L: Ln[] = lines.map((l) => (typeof l === 'string' ? { h: l } : l));
  const r: Rect = [x, y, x + w, y + boxH(L.length)];
  box(s, id, r, { color: o.hi ? C.mari : C.ink, w: o.hi ? 2.2 : 1.5, rx: o.pill ? 12 : 5 });
  L.forEach((l, i) => lab(s, x + w / 2, y + PAD + 8 + i * LH, l.h, { size: 10, bold: l.bold, color: l.color ?? (o.hi && i === 0 ? C.amber : C.text), within: id }));
  return r;
}
/** A line, with a head at its end if asked, kept for the label-clear check. */
function ln(s: Sketch, a: P, b: P, head = false, color: string = C.slate) {
  if (head) s.vec(a[0], a[1], b[0], b[1], { color, w: 1.5 }); else s.line(a[0], a[1], b[0], b[1], { color, w: 1.5 });
  keep(s, [a, b]);
}
const cx = (r: Rect) => (r[0] + r[2]) / 2;
const cy = (r: Rect) => (r[1] + r[3]) / 2;

/* ================= Figure 4.1 ================= */
const CAP41 = 'Classification of Kingdom Animalia: the ten non-chordate phyla in order of rising complexity, and Chordata divided into Protochordata (Urochordata, Cephalochordata) and Vertebrata (Agnatha and Gnathostomata).';
/** The ten non-chordate phyla, in the book's order, with the book's grade, feature and example genus. */
const PHYLA: { name: string; lines: string[] }[] = [
  { name: 'Porifera', lines: ['Porifera: cellular grade', 'canal system, e.g. <i>Sycon</i>'] },
  { name: 'Cnidaria', lines: ['Cnidaria (Coelenterata):', 'tissue grade, cnidoblasts,', 'e.g. <i>Hydra</i>'] },
  { name: 'Ctenophora', lines: ['Ctenophora: tissue grade', 'comb plates,', 'e.g. <i>Pleurobrachia</i>'] },
  { name: 'Platyhelminthes', lines: ['Platyhelminthes:', 'organ grade, flame cells;', 'acoelomate, e.g. <i>Taenia</i>'] },
  { name: 'Aschelminthes', lines: ['Aschelminthes:', 'organ-system grade,', 'pseudocoelom, e.g. <i>Ascaris</i>'] },
  { name: 'Annelida', lines: ['Annelida:', 'organ-system grade,', 'metameric segmentation,', 'e.g. <i>Pheretima</i>'] },
  { name: 'Arthropoda', lines: ['Arthropoda:', 'organ-system grade,', 'jointed legs; largest', 'phylum, e.g. <i>Apis</i>'] },
  { name: 'Mollusca', lines: ['Mollusca:', 'organ-system grade,', 'radula + shell, e.g. <i>Pila</i>'] },
  { name: 'Echinodermata', lines: ['Echinodermata:', 'organ-system grade,', 'water vascular system,', 'e.g. <i>Asterias</i>'] },
  { name: 'Hemichordata', lines: ['Hemichordata:', 'organ-system grade,', 'proboscis gland,', 'e.g. <i>Balanoglossus</i>'] },
];
const T1 = 160, RX1 = 174, RW1 = 178;
function draw41(): Sketch {
  // heights first, so the frame fits the taller column
  const listH = PHYLA.reduce((a, p) => a + boxH(p.lines.length), 0) + 9 * 15;
  const H = 190 + listH + 14;
  const s = new Sketch(W, H);
  lab(s, W / 2, 17, 'Kingdom Animalia: Classification Overview', { size: 13, bold: true });
  const root = node(s, 'ANIMALIA', 70, 30, 220, [{ h: 'ANIMALIA', bold: true }, '(multicellular, heterotrophic,', 'eukaryotic, no cell wall)'], { hi: true });
  lab(s, 180, 104, '<i>Notochord present?</i>', { size: 10.5 });
  const non = node(s, 'NON-CHORDATA', 8, 120, 138, [{ h: 'NON-CHORDATA', bold: true }, { h: '(no notochord)', bold: true }]);
  const cho = node(s, 'CHORDATA', RX1, 120, RW1, [{ h: 'CHORDATA', bold: true }, 'notochord at some stage +', 'dorsal hollow nerve cord,', 'pharyngeal gill slits,', 'post-anal tail, ventral heart']);
  ln(s, [112, root[3]], [cx(non), non[1] - 2], true);
  ln(s, [250, root[3]], [cx(cho), cho[1] - 2], true);
  lab(s, 78, 100, '<i>No</i>', { size: 10, anchor: 'end' });
  lab(s, 270, 100, '<i>Yes</i>', { size: 10, anchor: 'start' });
  // the ten phyla, top to bottom, an arrow between each pair
  let y = non[3] + 38;
  lab(s, 86, non[3] + 17, 'increasing', { size: 9.5, anchor: 'start', color: C.slate });
  lab(s, 86, non[3] + 28, 'complexity', { size: 9.5, anchor: 'start', color: C.slate });
  let prev: Rect = non;
  PHYLA.forEach((p) => {
    const r = node(s, p.name, 8, y, 138, p.lines);
    ln(s, [cx(non), prev[3] + 1], [cx(non), r[1] - 2], true);
    prev = r;
    y = r[3] + 15;
  });
  // the chordate tree down the right: "No" straight down, "Yes" by the line at the left
  const pro = node(s, 'PROTOCHORDATA', RX1, cho[3] + 34, RW1, [{ h: 'PROTOCHORDATA', bold: true }, { h: '(ACRANIATA)', bold: true }]);
  ln(s, [cx(cho), cho[3] + 1], [cx(cho), pro[1] - 2], true);
  lab(s, cx(cho) - 6, cho[3] + 21, '<i>No</i>', { size: 10, anchor: 'end' });
  lab(s, cx(cho) + 8, cho[3] + 21, '<i>Cranium?</i>', { size: 10, anchor: 'start' });
  const uro = node(s, 'Urochordata', RX1, pro[3] + 24, 88, ['Urochordata', '(Tunicata)', 'notochord in', 'larval tail', 'e.g. <i>Ascidia</i>']);
  const cep = node(s, 'Cephalochordata', RX1 + 92, pro[3] + 24, 88, ['Cephalochordata', 'notochord', 'lifelong', 'e.g.', '<i>Branchiostoma</i>']);
  ln(s, [cx(uro), pro[3] + 1], [cx(uro), uro[1] - 2], true);
  ln(s, [cx(cep), pro[3] + 1], [cx(cep), cep[1] - 2], true);
  const ver = node(s, 'VERTEBRATA', RX1, uro[3] + 32, RW1, [{ h: 'VERTEBRATA (CRANIATA)', bold: true }, 'notochord →', 'vertebral column']);
  trunk(s, cho, ver, 'Yes', (cho[3] + uro[3]) / 2 + 24);
  const agn = node(s, 'AGNATHA', RX1, ver[3] + 32, RW1, ['AGNATHA (jawless)', 'Class Cyclostomata', 'e.g. <i>Petromyzon</i>']);
  ln(s, [cx(ver), ver[3] + 1], [cx(ver), agn[1] - 2], true);
  lab(s, cx(ver) - 6, ver[3] + 21, '<i>No</i>', { size: 10, anchor: 'end' });
  lab(s, cx(ver) + 8, ver[3] + 21, '<i>Jaws?</i>', { size: 10, anchor: 'start' });
  const gna = node(s, 'GNATHOSTOMATA', RX1, agn[3] + 32, RW1, [{ h: 'GNATHOSTOMATA', bold: true }]);
  trunk(s, ver, gna, 'Yes', (ver[3] + agn[3]) / 2 + 16, ver[3] - 8);
  const pis = node(s, 'PISCES', RX1, gna[3] + 30, 88, ['PISCES', 'Chondrichthyes', '(cartilage):', '<i>Scoliodon</i>', 'Osteichthyes', '(bone): <i>Labeo</i>']);
  const tet = node(s, 'TETRAPODA', RX1 + 92, gna[3] + 30, 88, ['TETRAPODA', 'Amphibia (<i>Rana</i>)', 'Reptilia (<i>Naja</i>)', 'Aves (<i>Columba</i>)', 'Mammalia (<i>Homo</i>)']);
  ln(s, [cx(pis), gna[3] + 1], [cx(pis), pis[1] - 2], true);
  ln(s, [cx(tet), gna[3] + 1], [cx(tet), tet[1] - 2], true);
  return s;
}
/** The "Yes" line: out of the left of one node (at its own height, so the second trunk does not run on from the end of the first), down beside the column, into the left of the next; the word sits in a gap in the line. */
function trunk(s: Sketch, from: Rect, to: Rect, word: string, ylab: number, leaveY?: number) {
  const y0 = leaveY ?? cy(from), y1 = cy(to);
  ln(s, [from[0], y0], [T1, y0]);
  ln(s, [T1, y0], [T1, ylab - 11.5]);
  ln(s, [T1, ylab + 7], [T1, y1]);
  ln(s, [T1, y1], [to[0] - 1, y1], true);
  lab(s, T1, ylab, `<i>${word}</i>`, { size: 10 });
}
function check41(): Check[] {
  const s = draw41();
  const order = PHYLA.map((p) => p.name).join();
  return [
    ['Ten non-chordate phyla in the book\'s order, Porifera to Hemichordata, each with its example genus', order === 'Porifera,Cnidaria,Ctenophora,Platyhelminthes,Aschelminthes,Annelida,Arthropoda,Mollusca,Echinodermata,Hemichordata' && ['Sycon', 'Hydra', 'Pleurobrachia', 'Taenia', 'Ascaris', 'Pheretima', 'Apis', 'Pila', 'Asterias', 'Balanoglossus'].every((g, i) => PHYLA[i].lines.some((l) => l.includes(`<i>${g}</i>`)))],
    ['The chart\'s three questions and their answers are on it (Notochord present? No/Yes, Cranium? No/Yes, Jaws? No/Yes)', ['Notochord present?', 'Cranium?', 'Jaws?'].every((t) => has(s, t)) && s.labels.filter((l) => l.text === 'Yes').length === 3 && s.labels.filter((l) => l.text === 'No').length === 3],
    ['Every group of the book is a node: Non-chordata, Chordata, Protochordata with Urochordata and Cephalochordata, Vertebrata with Agnatha and Gnathostomata, then Pisces and Tetrapoda', ['NON-CHORDATA', 'CHORDATA', 'PROTOCHORDATA', 'Urochordata', 'Cephalochordata', 'VERTEBRATA (CRANIATA)', 'AGNATHA (jawless)', 'GNATHOSTOMATA', 'PISCES', 'TETRAPODA'].every((t) => has(s, t))],
    ['The seven vertebrate classes are all named: Cyclostomata, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia', ['Class Cyclostomata', 'Chondrichthyes', 'Osteichthyes', 'Amphibia (Rana)', 'Reptilia (Naja)', 'Aves (Columba)', 'Mammalia (Homo)'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig41: Diagram = { id: 'b11-04-fig-4.1', topic: 0, name: 'Classification of Kingdom Animalia', cases: [{ chip: 'Whole kingdom', cap: CAP41 }], draw: draw41, check: check41 };

/* ================= Figure 4.2 ================= */
const CAP42 = 'Body-cavity types in triploblastic animals: acoelomate (solid mesoderm, no cavity), pseudocoelomate (mesoderm only as scattered patches, cavity not fully lined) and eucoelomate (true coelom lined by mesoderm on the body-wall and gut sides).';
const CY42 = 134, XS42 = [60, 180, 300];
const R_ECTO = 46, R_ENDO = 19;
const R_MIN = 20.6, R_MOUT = 43.7, R_PSEUDO = 39.1, R_EUOUT = 43, R_EUIN = 22;
function draw42(): Sketch {
  const s = new Sketch(W, 318);
  lab(s, W / 2, 18, 'Triploblastic Body Plans: Coelom Types', { size: 13, bold: true });
  const M = { color: C.mari, w: 2.2 };
  XS42.forEach((x) => { circle(s, x, CY42, R_ECTO, { w: 3.4 }); circle(s, x, CY42, R_ENDO, { dash: true }); });
  // acoelomate: the mesoderm fills the whole space from the endoderm to the ectoderm (a ring of short strokes touching both)
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * 2 * Math.PI;
    path(s, [[XS42[0] + R_MIN * Math.cos(a), CY42 + R_MIN * Math.sin(a)], [XS42[0] + R_MOUT * Math.cos(a), CY42 + R_MOUT * Math.sin(a)]], { color: C.mari, w: 1.2, plain: true });
  }
  // pseudocoelomate: scattered patches of mesoderm against the body wall, the cavity left open inside them
  for (let i = 0; i < 11; i++) { const a = -Math.PI / 2 + (i / 11) * 2 * Math.PI; circle(s, XS42[1] + R_PSEUDO * Math.cos(a), CY42 + R_PSEUDO * Math.sin(a), 5.5, { ...M, w: 1.9 }); }
  // eucoelomate: mesoderm as two linings, the outer one against the ectoderm (body wall), the inner one against the endoderm (gut)
  circle(s, XS42[2], CY42, R_EUOUT, M);
  circle(s, XS42[2], CY42, R_EUIN, M);
  // labels over the mesoderm, each with its arrow
  const top = 64;
  ['solid', 'mesoderm'].forEach((t, i) => lab(s, XS42[0], 38 + i * 12.5, t, { size: 10.5, bold: true, color: C.amber }));
  ln(s, [XS42[0] - 2, top], [XS42[0] - 6, CY42 - 33], true, C.mari);
  lab(s, XS42[1], 38, 'mesoderm', { size: 10.5, color: C.amber });
  lab(s, XS42[1], 50.5, '(patches on body wall)', { size: 10, color: C.amber });
  ln(s, [XS42[1] + 6, top], [XS42[1] + 1, CY42 - R_PSEUDO - 2], true, C.mari);
  lab(s, XS42[2], 38, 'mesoderm lining', { size: 10.5, bold: true, color: C.amber });
  lab(s, XS42[2], 50.5, '(body wall + gut)', { size: 10.5, bold: true, color: C.amber });
  ln(s, [XS42[2] - 8, top], [XS42[2] - 6, CY42 - 42.5], true, C.mari);
  ln(s, [XS42[2] + 8, top], [XS42[2] + 9, CY42 - 20.2], true, C.mari);
  ['ACOELOMATE', 'PSEUDOCOELOMATE', 'EUCOELOMATE'].forEach((t, i) => lab(s, XS42[i], 218, t, { size: 11, bold: true }));
  lab(s, XS42[0], 240, '<i>no cavity</i>', { size: 10.5, color: C.slate });
  ['<i>pseudocoel: cavity</i>', '<i>not fully lined</i>'].forEach((t, i) => lab(s, XS42[1], 240 + i * 13, t, { size: 10.5, color: C.slate }));
  ['<i>coelom: true cavity,</i>', '<i>fully lined</i>'].forEach((t, i) => lab(s, XS42[2], 240 + i * 13, t, { size: 10.5, color: C.slate }));
  // the key to the three germ layers
  const ly = 292;
  path(s, [[30, ly], [52, ly]], { w: 3.4 }); lab(s, 58, ly + 4, 'Ectoderm', { size: 11, anchor: 'start' });
  path(s, [[134, ly], [156, ly]], { color: C.mari, w: 2.2 }); lab(s, 162, ly + 4, 'Mesoderm', { size: 11, anchor: 'start' });
  path(s, [[244, ly], [266, ly]], { dash: true }); lab(s, 272, ly + 4, 'Endoderm', { size: 11, anchor: 'start' });
  return s;
}
function check42(): Check[] {
  const s = draw42();
  const centres = XS42.map((x, i) => (i === 1 ? Array.from({ length: 11 }, (_, k): P => { const a = -Math.PI / 2 + (k / 11) * 2 * Math.PI; return [R_PSEUDO * Math.cos(a), R_PSEUDO * Math.sin(a)]; }) : []));
  const patchGap = len(centres[1][0], centres[1][1]) - 11;
  return [
    ['Three body plans in the book\'s order: acoelomate, pseudocoelomate, eucoelomate', ['ACOELOMATE', 'PSEUDOCOELOMATE', 'EUCOELOMATE'].every((t) => has(s, t))],
    ['Pseudocoelomate mesoderm is 11 separate patches that do not overlap one another', patchGap > 2],
    ['Eucoelomate lining lies between the body wall and the gut: its two rings sit inside the ectoderm and outside the endoderm, the outer one against the ectoderm and the inner one against the endoderm', R_EUOUT + 1.1 <= R_ECTO - 1.7 + 0.05 && R_EUOUT + 1.1 > R_ECTO - 3.4 && R_EUIN - 1.1 > R_ENDO && R_EUIN - 1.1 < R_ENDO + 3],
    ['Acoelomate mesoderm fills the space from the endoderm to the ectoderm, and the pseudocoelomate patches lie against the body wall', R_MIN - 0.6 <= R_ENDO + 1.8 && R_MOUT + 0.6 >= R_ECTO - 2.4 && R_PSEUDO + 5.5 + 0.95 >= R_ECTO - 1.7 && R_PSEUDO + 5.5 + 0.95 <= R_ECTO],
    ['The three germ layers are keyed (ectoderm, mesoderm, endoderm) and the mesoderm labels are all there', ['Ectoderm', 'Mesoderm', 'Endoderm', 'solid', 'mesoderm lining'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig42: Diagram = { id: 'b11-04-fig-4.2', topic: 1, name: 'Body-cavity types', cases: [{ chip: 'Coelom types', cap: CAP42 }], draw: draw42, check: check42 };

/* ================= Figure 4.3 ================= */
const CAP43 = 'Dichotomous key to the non-chordate phyla, using tissue organisation, symmetry, presence of coelom and origin of coelom.';
function draw43(): Sketch {
  const s = new Sketch(W, 722);
  lab(s, W / 2, 17, 'Dichotomous Key: Non-Chordate Phyla', { size: 13, bold: true });
  const A = 8, AW = 80, X = 48, C2 = 196, C2W = 156;
  const dec = (id: string, y: number, lines: string[], w = AW, x = A) => node(s, id, x, y, w, lines.map((h) => ({ h, bold: true })), { pill: true });
  const res = (id: string, y: number, lines: string[], x = C2, w = C2W) => node(s, id, x, y, w, [{ h: lines[0], bold: true }, ...lines.slice(1)]);
  const down = (a: Rect, b: Rect, text: string[], ty?: number) => {
    ln(s, [X, a[3] + 1], [X, b[1] - 2], true);
    const mid = ty ?? (a[3] + b[1]) / 2 + (text.length > 1 ? -2 : 4);
    text.forEach((t, i) => lab(s, X + 8, mid + i * 12.5, `<i>${t}</i>`, { size: 10, anchor: 'start' }));
  };
  const right = (a: Rect, yy: number, bx: number, text: string[]) => {
    ln(s, [a[2] + 1, yy], [bx - 2, yy], true);
    text.forEach((t, i) => lab(s, (a[2] + bx) / 2, yy - 7 - (text.length - 1 - i) * 12.5, `<i>${t}</i>`, { size: 10 }));
  };
  const root = node(s, 'ANIMALIA', A, 30, AW, [{ h: 'ANIMALIA', bold: true }], { hi: true });
  // 1 True tissues?
  const tt = dec('True tissues?', 84, ['True', 'tissues?']);
  const por = res('PORIFERA', cy(tt) - boxH(3) / 2, ['PORIFERA', 'no true tissues;', 'canal system']);
  ln(s, [X, root[3] + 1], [X, tt[1] - 2], true);
  right(tt, cy(tt), C2, ['No']);
  // 2 Symmetry?
  const sym = dec('Symmetry?', 150, ['Symmetry?']);
  down(tt, sym, ['Yes']);
  const bod = dec('Body feature?', 150, ['Body feature?'], 96, C2);
  right(sym, cy(sym), C2, ['Radial,', 'diploblastic']);
  const BUS = 206;
  const cni = res('CNIDARIA', 188, ['CNIDARIA'], 236, 116);
  const cte = res('CTENOPHORA', 226, ['CTENOPHORA'], 236, 116);
  ln(s, [BUS, bod[3] + 1], [BUS, cy(cte)]);
  ln(s, [BUS, cy(cni)], [236 - 2, cy(cni)], true);
  ln(s, [BUS, cy(cte)], [236 - 2, cy(cte)], true);
  lab(s, BUS - 8, cy(cni) + 3.5, '<i>cnidoblasts</i>', { size: 10, anchor: 'end' });
  lab(s, BUS - 8, cy(cte) + 3.5, '<i>comb plates</i>', { size: 10, anchor: 'end' });
  // 3 Coelom?
  const coe = dec('Coelom?', 300, ['Coelom?']);
  down(sym, coe, ['Bilateral,', 'triploblastic'], 216);
  const pla = res('PLATYHELMINTHES', cy(coe) - 25 - boxH(2) / 2, ['PLATYHELMINTHES', 'acoelomate']);
  const asc = res('ASCHELMINTHES', cy(coe) + 25 - boxH(2) / 2, ['ASCHELMINTHES', 'pseudocoelomate']);
  const B2 = 108;
  ln(s, [coe[2] + 1, cy(coe)], [B2, cy(coe)]);
  ln(s, [B2, cy(pla)], [B2, cy(asc)]);
  ln(s, [B2, cy(pla)], [C2 - 2, cy(pla)], true);
  ln(s, [B2, cy(asc)], [C2 - 2, cy(asc)], true);
  lab(s, (B2 + C2) / 2, cy(pla) - 7, '<i>Absent</i>', { size: 10 });
  lab(s, (B2 + C2) / 2, cy(asc) - 7, '<i>Pseudocoelom</i>', { size: 10 });
  // 4 Coelom origin?
  const ori = dec('Coelom origin?', 380, ['Coelom', 'origin?']);
  down(coe, ori, ['True coelom']);
  const adu = dec('Adult symmetry?', cy(ori) - 12, ['Adult symmetry?'], 104, C2);
  right(ori, cy(ori), C2, ['Enterocoelom']);
  const ech = res('ECHINODERMATA', 424, ['ECHINODERMATA'], 236, 116);
  const hem = res('HEMICHORDATA', 466, ['HEMICHORDATA'], 236, 116);
  ln(s, [BUS, adu[3] + 1], [BUS, cy(hem)]);
  ln(s, [BUS, cy(ech)], [236 - 2, cy(ech)], true);
  ln(s, [BUS, cy(hem)], [236 - 2, cy(hem)], true);
  ['radial;', 'tube feet'].forEach((t, i) => lab(s, BUS - 8, cy(ech) - 2 + i * 12.5, `<i>${t}</i>`, { size: 10, anchor: 'end' }));
  ['bilateral;', 'proboscis-', 'collar-trunk'].forEach((t, i) => lab(s, BUS - 8, cy(hem) - 14.5 + i * 12.5, `<i>${t}</i>`, { size: 10, anchor: 'end' }));
  // 5 Segmented?
  const seg = dec('Segmented?', 518, ['Segmented?']);
  down(ori, seg, ['Schizocoelom'], 470);
  const mol = res('MOLLUSCA', cy(seg) - boxH(3) / 2, ['MOLLUSCA', 'unsegmented;', 'shell + mantle']);
  right(seg, cy(seg), C2, ['No']);
  // 6 Exoskeleton?
  const exo = dec('Exoskeleton?', 590, ['Exoskeleton?']);
  down(seg, exo, ['Yes']);
  const ann = res('ANNELIDA', cy(exo) - boxH(3) / 2, ['ANNELIDA', 'metameric', 'segmentation']);
  right(exo, cy(exo), C2, ['No, soft']);
  const art = res('ARTHROPODA', 660, ['ARTHROPODA', 'jointed legs;', 'largest phylum'], A, 100);
  down(exo, art, ['Yes, jointed']);
  void por; void cni; void pla; void asc; void mol; void ann;
  return s;
}
function check43(): Check[] {
  const s = draw43();
  const phyla = ['PORIFERA', 'CNIDARIA', 'CTENOPHORA', 'PLATYHELMINTHES', 'ASCHELMINTHES', 'MOLLUSCA', 'ANNELIDA', 'ARTHROPODA', 'ECHINODERMATA', 'HEMICHORDATA'];
  const qs = ['tissues?', 'Symmetry?', 'Body feature?', 'Coelom?', 'origin?', 'Segmented?', 'Exoskeleton?', 'Adult symmetry?'];
  return [
    ['All ten non-chordate phyla of the key are on it, each at the end of a branch', phyla.every((t) => has(s, t))],
    ['All eight questions of the book\'s key are there, Body feature? and Adult symmetry? included', qs.every((q) => has(s, q))],
    ['The answers are the book\'s: No, Yes, Radial diploblastic, Bilateral triploblastic, Absent, Pseudocoelom, True coelom, Schizocoelom, Enterocoelom, cnidoblasts, comb plates, radial tube feet, bilateral proboscis-collar-trunk, No soft, Yes jointed', ['No', 'Yes', 'Radial,', 'diploblastic', 'Bilateral,', 'triploblastic', 'Absent', 'Pseudocoelom', 'True coelom', 'Schizocoelom', 'Enterocoelom', 'cnidoblasts', 'comb plates', 'radial;', 'tube feet', 'bilateral;', 'proboscis-', 'collar-trunk', 'No, soft', 'Yes, jointed'].every((t) => has(s, t))],
    ['Arthropoda is "largest phylum", Mollusca "unsegmented; shell + mantle", Annelida "metameric segmentation"', ['largest phylum', 'unsegmented;', 'shell + mantle', 'metameric', 'segmentation'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig43: Diagram = { id: 'b11-04-fig-4.3', topic: 2, name: 'Key to the non-chordate phyla', cases: [{ chip: 'Dichotomous key', cap: CAP43 }], draw: draw43, check: check43 };

/* ================= Figure 4.4 ================= */
const CAP44 = 'Longitudinal section of a <i>Sycon</i>-type sponge: water enters through the ostia, passes through the spongocoel lined with choanocytes (collar cells) and leaves through the osculum; spicules lie in the body wall.';
const OUT: P[] = [[170, 82], [190, 82], [232, 106], [238, 200], [226, 300], [204, 342], [180, 356], [156, 342], [134, 300], [122, 200], [128, 106]];
const INN: P[] = [[176, 86], [184, 86], [210, 114], [214, 200], [206, 296], [190, 326], [180, 332], [170, 326], [154, 296], [146, 200], [150, 114]];
const WATER_Y = [126, 166, 206, 246, 286];
/** The choanocytes are one row lining the inner face of the spongocoel, on both sides. */
const CHOANO_Y = [128, 146, 164, 182, 200, 218, 236, 254, 272, 290];
const OSTIA_Y = [146, 186, 226, 266];
const CHOANO_IN = 5.5;
/** The x of a closed outline's left or right edge at a height y (the outline is symmetric about x = 180). */
function edgeX(pts: P[], y: number, side: 'l' | 'r') {
  const R = pts.slice(1, 7);
  for (let i = 0; i < R.length - 1; i++) {
    const a = R[i], b = R[i + 1];
    if (y >= a[1] && y <= b[1]) { const x = a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1] || 1); return side === 'r' ? x : 360 - x; }
  }
  return side === 'r' ? 200 : 160;
}
function draw44(): Sketch {
  const s = new Sketch(W, 400);
  lab(s, W / 2, 17, '<i>Sycon</i>: Longitudinal Section', { size: 13, bold: true });
  path(s, OUT, { close: true, w: 2 });
  path(s, INN, { close: true, w: 1.7 });
  ellipse(s, 180, 82, 12, 4, { w: 1.7 });
  // water out
  lab(s, 180, 42, 'Water out', { size: 10.5, color: C.amber });
  s.vec(180, 70, 180, 52, { color: C.mari, w: 2 }); keep(s, [[180, 70], [180, 52]]);
  // choanocytes (collar cells): a single row lining the inner wall of the spongocoel, left and right
  CHOANO_Y.forEach((y) => { const xl = edgeX(INN, y, 'l') + CHOANO_IN; circle(s, xl, y, 4, { w: 1.4, plain: true }); circle(s, 360 - xl, y, 4, { w: 1.4, plain: true }); });
  // the water path up the spongocoel
  [[WATER_Y[0] - 8, 98], [WATER_Y[1] - 8, WATER_Y[0] + 8], [WATER_Y[2] - 8, WATER_Y[1] + 8], [WATER_Y[3] - 8, WATER_Y[2] + 8], [WATER_Y[4] - 8, WATER_Y[3] + 8]].forEach(([a, b]) => { s.vec(180, a, 180, b, { color: C.mari, w: 1.8 }); keep(s, [[180, a], [180, b]]); });
  // ostia on both walls, the incoming water on the left
  OSTIA_Y.forEach((y) => {
    const xl = (edgeX(OUT, y, 'l') + edgeX(INN, y, 'l')) / 2, xr = 360 - xl;
    ellipse(s, xl, y, 3, 6, { w: 1.7, plain: true });
    if (y < 250) ellipse(s, xr, y, 3, 6, { w: 1.7, plain: true });
    s.vec(98, y, xl - 5, y, { color: C.mari, w: 1.8 }); keep(s, [[98, y], [xl - 5, y]]);
  });
  // spicules in the body wall: six-armed stars in a pattern
  const star = (x: number, y: number) => [0, 60, 120].forEach((d) => { const a = (d * Math.PI) / 180; path(s, [[x - 4.5 * Math.cos(a), y - 4.5 * Math.sin(a)], [x + 4.5 * Math.cos(a), y + 4.5 * Math.sin(a)]], { w: 1.2, plain: true }); });
  [126, 166, 206, 246, 290].forEach((y) => { const xl = (edgeX(OUT, y, 'l') + edgeX(INN, y, 'l')) / 2; star(xl, y); star(360 - xl, y); });
  // labels, each with a leader to its part
  const lead = (a: P, b: P, color: string = C.slate) => { path(s, [a, b], { color, w: 1 }); s.add(`<circle cx="${r1(b[0])}" cy="${r1(b[1])}" r="2.4" fill="${color}"/>`); };
  lab(s, 10, 96, 'Ostia', { size: 10.5, anchor: 'start' });
  lab(s, 10, 108.5, '(incurrent pores)', { size: 10.5, anchor: 'start' });
  lead([60, 115], [(edgeX(OUT, OSTIA_Y[0], 'l') + edgeX(INN, OSTIA_Y[0], 'l')) / 2 - 3, OSTIA_Y[0] - 4]);
  lab(s, 10, 214, 'Spicules', { size: 10.5, anchor: 'start' });
  lead([62, 210], [(edgeX(OUT, 206, 'l') + edgeX(INN, 206, 'l')) / 2 - 3, 206]);
  lab(s, 10, 330, 'Body wall', { size: 10.5, anchor: 'start' });
  lab(s, 10, 342.5, '(mesohyl, with spicules)', { size: 10.5, anchor: 'start' });
  lead([62, 328], [(edgeX(OUT, 300, 'l') + edgeX(INN, 296, 'l')) / 2 - 1, 308]);
  lab(s, 20, OSTIA_Y[3] + 22, 'Water in', { size: 10.5, anchor: 'start', color: C.amber });
  lab(s, 262, 96, 'Water flow', { size: 10.5, anchor: 'start', color: C.amber });
  lab(s, 262, 108.5, 'through', { size: 10.5, anchor: 'start', color: C.amber });
  lab(s, 262, 121, 'spongocoel', { size: 10.5, anchor: 'start', color: C.amber });
  lab(s, 262, 176, 'Spongocoel', { size: 10.5, anchor: 'start' });
  lead([258, 172], [188, 186]);
  lab(s, 262, 262, 'Choanocytes', { size: 10.5, anchor: 'start' });
  lab(s, 262, 274.5, '(collar cells)', { size: 10.5, anchor: 'start' });
  lead([258, 268], [360 - (edgeX(INN, 254, 'l') + CHOANO_IN) + 4.5, 254]);
  lab(s, 262, 70, 'Osculum', { size: 10.5, anchor: 'start' });
  lead([258, 66], [191, 80]);
  return s;
}
function check44(): Check[] {
  const s = draw44();
  const widthAt = (pts: P[], y: number) => 360 - 2 * edgeX(pts, y, 'l');
  return [
    ['All five labels of the book are on it: Ostia (incurrent pores), Spicules, Body wall (mesohyl, with spicules), Spongocoel, Choanocytes (collar cells), with Osculum, Water in, Water out and Water flow through spongocoel', ['Ostia', '(incurrent pores)', 'Spicules', 'Body wall', '(mesohyl, with spicules)', 'Spongocoel', 'Choanocytes', '(collar cells)', 'Osculum', 'Water in', 'Water out', 'Water flow', 'through', 'spongocoel'].every((t) => has(s, t))],
    ['The body wall is thicker than nothing everywhere: the outer outline is wider than the spongocoel at every choanocyte row and ostium', [...CHOANO_Y, ...OSTIA_Y].every((y) => widthAt(OUT, y) > widthAt(INN, y) + 20)],
    ['The choanocytes are one row lining each inner wall of the spongocoel, none floating across its middle: every collar cell sits against the inner outline and leaves the centre line free for the water', CHOANO_Y.every((y) => widthAt(INN, y) > 2 * (CHOANO_IN + 4) + 30)],
    ...layout(s), clean(s),
  ];
}
const fig44: Diagram = { id: 'b11-04-fig-4.4', topic: 2, name: 'Section of a Sycon sponge', cases: [{ chip: 'Sycon section', cap: CAP44 }], draw: draw44, check: check44 };

/* ================= Figure 4.5 ================= */
const CAP45 = 'Classification of Phylum Chordata: Protochordata (Urochordata, Cephalochordata) and Vertebrata (Agnatha: Cyclostomata; Gnathostomata: Pisces and Tetrapoda).';
function draw45(): Sketch {
  const s = new Sketch(W, 474);
  lab(s, W / 2, 17, 'Phylum Chordata: Classification', { size: 13, bold: true });
  const cho = node(s, 'CHORDATA', 30, 30, 300, [{ h: 'CHORDATA', bold: true }, '(notochord, dorsal hollow nerve cord,', 'pharyngeal gill slits, post-anal tail,', 'ventral heart)'], { hi: true });
  const pro = node(s, 'PROTOCHORDATA', 8, 132, 168, [{ h: 'PROTOCHORDATA', bold: true }, { h: '(ACRANIATA)', bold: true }]);
  const ver = node(s, 'VERTEBRATA', 206, 132, 150, [{ h: 'VERTEBRATA', bold: true }, { h: '(CRANIATA)', bold: true }, 'notochord →', 'vertebral column']);
  ln(s, [110, cho[3] + 1], [cx(pro), pro[1] - 2], true);
  ln(s, [250, cho[3] + 1], [cx(ver), ver[1] - 2], true);
  lab(s, 180, 114, '<i>Cranium?</i>', { size: 10.5 });
  lab(s, 90, 110, '<i>No</i>', { size: 10, anchor: 'end' });
  lab(s, 272, 110, '<i>Yes</i>', { size: 10, anchor: 'start' });
  const uro = node(s, 'Urochordata', 4, 198, 88, ['Urochordata', '(Tunicata)', 'notochord in', 'larval tail', 'only', '<i>Ascidia</i>']);
  const cep = node(s, 'Cephalochordata', 96, 198, 88, ['Cephalochordata', 'notochord', 'lifelong', '<i>Branchiostoma</i>']);
  ln(s, [cx(uro), pro[3] + 1], [cx(uro), uro[1] - 2], true);
  ln(s, [cx(cep), pro[3] + 1], [cx(cep), cep[1] - 2], true);
  const agn = node(s, 'AGNATHA', 206, 226, 150, [{ h: 'AGNATHA', bold: true }, 'Cyclostomata', '<i>Petromyzon</i>']);
  ln(s, [cx(ver), ver[3] + 1], [cx(ver), agn[1] - 2], true);
  lab(s, cx(ver) - 6, 216, '<i>No</i>', { size: 10, anchor: 'end' });
  lab(s, cx(ver) + 8, 216, '<i>Jaws?</i>', { size: 10, anchor: 'start' });
  const gna = node(s, 'GNATHOSTOMATA', 206, 312, 150, [{ h: 'GNATHOSTOMATA', bold: true }]);
  const TX = 190, y0 = cy(ver), y1 = cy(gna), yl = 290;
  ln(s, [ver[0], y0], [TX, y0]);
  ln(s, [TX, y0], [TX, yl - 11.5]);
  ln(s, [TX, yl + 7], [TX, y1]);
  ln(s, [TX, y1], [gna[0] - 1, y1], true);
  lab(s, TX, yl, '<i>Yes</i>', { size: 10 });
  const pis = node(s, 'PISCES', 100, 376, 126, [{ h: 'PISCES', bold: true }, 'Chondrichthyes', '<i>Scoliodon</i> (cartilage)', 'Osteichthyes', '<i>Labeo</i> (bone)']);
  const tet = node(s, 'TETRAPODA', 238, 376, 118, [{ h: 'TETRAPODA', bold: true }, 'Amphibia (<i>Rana</i>)', 'Reptilia (<i>Naja</i>)', 'Aves (<i>Columba</i>)', 'Mammalia (<i>Homo</i>)']);
  ln(s, [244, gna[3] + 1], [cx(pis) + 8, pis[1] - 2], true);
  ln(s, [cx(tet), gna[3] + 1], [cx(tet), tet[1] - 2], true);
  lab(s, 192, 354, '<i>fins</i>', { size: 10, anchor: 'end' });
  lab(s, cx(tet) + 6, 356, '<i>limbs</i>', { size: 10, anchor: 'start' });
  return s;
}
function check45(): Check[] {
  const s = draw45();
  return [
    ['Chordata splits at Cranium? into Protochordata (Urochordata, Cephalochordata) and Vertebrata; Vertebrata splits at Jaws? into Agnatha (Cyclostomata) and Gnathostomata', ['CHORDATA', 'Cranium?', 'PROTOCHORDATA', '(ACRANIATA)', 'Urochordata', 'Cephalochordata', 'VERTEBRATA', '(CRANIATA)', 'Jaws?', 'AGNATHA', 'Cyclostomata', 'GNATHOSTOMATA'].every((t) => has(s, t))],
    ['Gnathostomata splits into Pisces (fins: Chondrichthyes, Osteichthyes) and Tetrapoda (limbs: Amphibia, Reptilia, Aves, Mammalia)', ['fins', 'limbs', 'PISCES', 'Chondrichthyes', 'Osteichthyes', 'TETRAPODA', 'Amphibia (Rana)', 'Reptilia (Naja)', 'Aves (Columba)', 'Mammalia (Homo)'].every((t) => has(s, t))],
    ['The notochord notes are the book\'s: in larval tail only (Urochordata), lifelong (Cephalochordata), to vertebral column (Vertebrata)', ['notochord in', 'larval tail', 'only', 'lifelong', 'notochord →', 'vertebral column'].every((t) => has(s, t))],
    ['The example genera are the book\'s: Ascidia, Branchiostoma, Petromyzon, Scoliodon (cartilage), Labeo (bone)', ['Ascidia', 'Branchiostoma', 'Petromyzon', 'Scoliodon (cartilage)', 'Labeo (bone)'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig45: Diagram = { id: 'b11-04-fig-4.5', topic: 3, name: 'Classification of Chordata', cases: [{ chip: 'Chordata tree', cap: CAP45 }], draw: draw45, check: check45 };

/* ================= Figure 4.6 ================= */
const CAP46 = 'Fate of the notochord: it persists throughout life in Cephalochordata, is confined to the larval tail in Urochordata, and is replaced by the vertebral column in Vertebrata.';
function rect(s: Sketch, x: number, y: number, w: number, h: number, o: { color?: string; w?: number; plain?: boolean } = {}) {
  path(s, [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], { close: true, color: o.color, w: o.w, plain: o.plain });
}
function draw46(): Sketch {
  const s = new Sketch(W, 664);
  const NC = { color: C.mari, w: 2.2 };
  const arrow = (a: P, b: P, color: string = C.slate) => { s.vec(a[0], a[1], b[0], b[1], { color, w: 1.5 }); keep(s, [a, b]); };
  // panel A: Cephalochordata
  let y0 = 8;
  box(s, 'A', [8, y0, 352, y0 + 172], { color: C.grey, w: 1.2, rx: 8 });
  lab(s, 180, y0 + 21, 'Cephalochordata (<i>Amphioxus</i>)', { size: 12, bold: true, within: 'A' });
  lab(s, 110, y0 + 43, 'head', { size: 10, color: C.slate, within: 'A' });
  rect(s, 90, y0 + 50, 40, 80);
  rect(s, 104, y0 + 52, 12, 76, NC);
  lab(s, 110, y0 + 148, 'tail', { size: 10, color: C.slate, within: 'A' });
  lab(s, 182, y0 + 86, 'Notochord', { size: 10.5, anchor: 'start', color: C.amber, within: 'A' });
  lab(s, 182, y0 + 99, '(persists for life)', { size: 10.5, anchor: 'start', color: C.amber, within: 'A' });
  arrow([176, y0 + 90], [118, y0 + 90], C.mari);
  lab(s, 180, y0 + 164, '<i>Notochord rod throughout life</i>', { size: 10.5, color: C.amber, within: 'A' });
  // panel B: Urochordata
  y0 = 188;
  box(s, 'B', [8, y0, 352, y0 + 254], { color: C.grey, w: 1.2, rx: 8 });
  lab(s, 180, y0 + 21, 'Urochordata (<i>Ascidia</i>)', { size: 12, bold: true, within: 'B' });
  lab(s, 110, y0 + 42, 'Larva', { size: 10, color: C.slate, within: 'B' });
  ellipse(s, 110, y0 + 58, 22, 8);
  rect(s, 90, y0 + 70, 40, 60);
  rect(s, 104, y0 + 74, 12, 50, NC);
  lab(s, 182, y0 + 96, 'Notochord', { size: 10.5, anchor: 'start', color: C.amber, within: 'B' });
  lab(s, 182, y0 + 109, 'in tail only', { size: 10.5, anchor: 'start', color: C.amber, within: 'B' });
  arrow([176, y0 + 100], [118, y0 + 100], C.mari);
  arrow([110, y0 + 134], [110, y0 + 158]);
  lab(s, 100, y0 + 150, 'metamorphosis', { size: 10, anchor: 'end', color: C.slate, within: 'B' });
  path(s, [[100, y0 + 168], [100, y0 + 180]]); path(s, [[120, y0 + 168], [120, y0 + 180]]);
  path(s, [[90, y0 + 180], [130, y0 + 180], [142, y0 + 224], [78, y0 + 224]], { close: true });
  lab(s, 40, y0 + 212, 'Adult', { size: 10, anchor: 'start', color: C.slate, within: 'B' });
  lab(s, 180, y0 + 242, '<i>Lost in adult</i>', { size: 10.5, color: C.amber, within: 'B' });
  // panel C: Vertebrata
  y0 = 450;
  box(s, 'C', [8, y0, 352, y0 + 180], { color: C.grey, w: 1.2, rx: 8 });
  lab(s, 180, y0 + 21, 'Vertebrata', { size: 12, bold: true, within: 'C' });
  lab(s, 90, y0 + 42, 'Embryo', { size: 10, color: C.slate, within: 'C' });
  lab(s, 270, y0 + 42, 'Adult', { size: 10, color: C.slate, within: 'C' });
  ellipse(s, 90, y0 + 60, 24, 9);
  ellipse(s, 270, y0 + 60, 24, 9);
  rect(s, 84, y0 + 74, 12, 46, NC);
  [0, 1, 2, 3, 4].forEach((i) => rect(s, 256, y0 + 74 + i * 10, 28, 7));
  lab(s, 180, y0 + 90, '<i>replaced by</i>', { size: 10, color: C.slate, within: 'C' });
  arrow([128, y0 + 98], [226, y0 + 98]);
  lab(s, 90, y0 + 150, 'Notochord', { size: 10.5, color: C.amber, within: 'C' });
  arrow([90, y0 + 137], [90, y0 + 124], C.mari);
  lab(s, 270, y0 + 150, 'Vertebral column', { size: 10.5, within: 'C' });
  arrow([270, y0 + 137], [270, y0 + 125]);
  lab(s, 180, y0 + 168, '<i>Replaced by vertebral column</i>', { size: 10.5, color: C.amber, within: 'C' });
  // the key
  rect(s, 20, 640, 14, 9, NC); lab(s, 40, 648, 'Notochord', { size: 10.5, anchor: 'start' });
  rect(s, 130, 640, 14, 9); lab(s, 150, 648, 'Vertebral column', { size: 10.5, anchor: 'start' });
  return s;
}
function check46(): Check[] {
  const s = draw46();
  return [
    ['The three groups are the book\'s, in its order: Cephalochordata (Amphioxus), Urochordata (Ascidia), Vertebrata', ['Cephalochordata (Amphioxus)', 'Urochordata (Ascidia)', 'Vertebrata'].every((t) => has(s, t))],
    ['Each fate is stated: persists for life, in tail only (lost in adult), replaced by vertebral column', ['(persists for life)', 'in tail only', 'Lost in adult', 'Replaced by vertebral column', 'replaced by', 'metamorphosis', 'Notochord rod throughout life'].every((t) => has(s, t))],
    ['The notochord is the highlight in all three panels and is keyed beside the vertebral column; the book\'s other words (head, tail, Larva, Adult, Embryo) are on it', ['Notochord', 'Vertebral column', 'head', 'tail', 'Larva', 'Adult', 'Embryo'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig46: Diagram = { id: 'b11-04-fig-4.6', topic: 3, name: 'Fate of the notochord', cases: [{ chip: 'Notochord fate', cap: CAP46 }], draw: draw46, check: check46 };

export const DIAGRAMS_BIOLOGY_11_04: Diagram[] = [fig41, fig42, fig43, fig44, fig45, fig46];
