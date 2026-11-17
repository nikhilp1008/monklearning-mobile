import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 5 (Molecular Basis of Inheritance): the drawings of the Master Reference book on pp. 223-293, redrawn.
 * Every drawing sits on a "CHAPTER 5 . FIGURES" page; the captions are printed on the page before (pp. 226, 228, 236, 243,
 * 245, 251, 259, 266). EIGHT numbered figures, no unnumbered drawing; nothing else in pp. 223-293 is a drawing:
 *
 *   Figure 5.1 (drawing p. 227), Topic 01, topic index 0: chromatin packaging levels, DNA double helix to metaphase chromosome.
 *   Figure 5.2 (drawing p. 229), Topic 01, topic index 0: a replication fork.
 *   Figure 5.3 (drawing p. 237), Topic 02, topic index 1: the Hershey-Chase experiment (two cases, Track 1 and Track 2).
 *   Figure 5.4 (drawing p. 244), Topic 03, topic index 2: a transcription unit (prokaryote).
 *   Figure 5.5 (drawing p. 246), Topic 03, topic index 2: hnRNA to mature mRNA (cap, splicing, poly-A tail).
 *   Figure 5.6 (drawing p. 252), Topic 04, topic index 3: a bacterial ribosome with its A and P sites.
 *   Figure 5.7 (drawing p. 260), Topic 05, topic index 4: the lac operon (two cases, (a) lactose absent and (b) lactose present).
 *   Figure 5.8 (drawing p. 267), Topic 06, topic index 5: the DNA fingerprinting workflow (Southern blot).
 *
 * THE BOOK'S, as printed: every word of every label, title, step and box (the book's em dashes become colons, the house
 * rule; the en dashes of "cap - joined exons - poly-A tail" stay). 5.1: the six levels in the book's order with their sizes
 * (2 nm, ~11 nm, 30 nm, ~700 nm, ~1400 nm), ~200 bp and H2A H2B H3 H4 at the nucleosome, H1 at each of the linkers. 5.2: which
 * template is which (lagging 5'->3' toward the fork, leading 3'->5' toward the fork), the 5' and 3' end of every strand and
 * fragment, three Okazaki fragments with a ligase at each of the two nicks, helicase at the fork, the parental duplex and its
 * 3' / 5' ends. 5.3: the two tracks, where the radioactivity ends (32P in the pellet, 35S in the supernatant) and the conclusion.
 * 5.4: coding strand 5'->3' above, template 3'->5' below, promoter (-35 / -10), structural gene, terminator, RNA polymerase and
 * the growing transcript 5'->3'. 5.5: E1 I1 E2 I2 E3 I3 E4 in order, the three steps, the three removed introns. 5.6: the mRNA
 * 5' AUG UUU GCC GAA 3', P site tRNA 3'-AAA-5' carrying Phe, A site tRNA 3'-CGG-5' carrying Ala, Met-Phe chain, 23S rRNA. 5.7:
 * i, P, O, z, y, a in order, R bound to O in (a), the allolactose-repressor complex in (b). 5.8: the seven steps (step 2 optional)
 * and the gel and the blot with three lanes of three bands each.
 * COMPUTED, not placed: 5.4's and 5.2's arrows are checked to point the way the labels say; 5.6 is checked against the genetic
 * code (each codon codes the amino acid drawn, each anticodon pairs with its codon); 5.1 sizes are checked to rise.
 * SCHEMATIC: all sizes, spacings and positions (re-laid for a phone: 5.1 and 5.8 are one column, 5.3 and 5.7 are one panel per
 * case), the shapes of the helix, loops, fibre and wavy transcript, the leader angles, the band positions on the gel. The book's
 * colour fills are not copied (the app's style: no fills, one marigold highlight per drawing); where the book tells
 * labelled from unlabelled by an orange fill, the label says it. The sequences are set upright (house rule), where the page
 * sets them in its italic label face.
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
function circ(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number; dash?: string; track?: boolean } = {}) {
  s.add(`<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(r)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.track !== false) keep(s, Array.from({ length: 33 }, (_, i): P => [cx + r * Math.cos((i / 32) * 2 * Math.PI), cy + r * Math.sin((i / 32) * 2 * Math.PI)]));
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: string; rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 7}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; italic?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, o.italic ? `<i>${html}</i>` : html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
/** An arrow: a line and a filled head at b, kept for the clearance checks. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean; track?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  if (o.track !== false) keep(s, [a, b]);
}
/** A white ink-edged pill with up to three lines, full width, at the bottom: the conclusion of a drawing. */
function wide(s: Sketch, lines: string[], top: number): Rect {
  const rect: Rect = [14, top, s.w - 14, s.h - 10];
  s.tags.push({ name: lines.map(plain).join(' '), rect, from: null, to: null });
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="16" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  const cy = (rect[1] + rect[3]) / 2;
  lines.forEach((t, i) => s.text(s.w / 2, cy - ((lines.length - 1) * 16) / 2 + i * 16 + 4, t, { size: i === 0 ? 12.5 : 12, semibold: i === 0 }));
  return rect;
}
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const unit = (a: P, b: P): P => { const L = len(a, b); return [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; };
const at = (a: P, u: P, d: number, n?: P, off = 0): P => [a[0] + u[0] * d + (n ? n[0] * off : 0), a[1] + u[1] * d + (n ? n[1] * off : 0)];
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box; pills keep off the outlines too. */
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
    [`Every pill stays 3 px clear of every drawn outline: the closest is "${twhat}", ${r1(tgap)} px`, tgap >= 3],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const marigolds = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;

/* ================= Figure 5.1 ================= */
const CAP51 = 'Packaging of DNA in the eukaryotic nucleus: the naked 2 nm DNA double helix is wrapped ~1.65 turns (the core of about 146 bp) around a histone octamer to form a nucleosome; nucleosomes strung together give “beads-on-string” chromatin with H1 at each linker; this coils into a 30 nm fibre, folds into looped domains and finally condenses into the metaphase chromosome.';
/** The levels from the top of the page down (the most packaged first), with the sizes the book prints in nm. */
const LEVELS: { name: string; lines: string[]; nm: number }[] = [
  { name: 'Metaphase chromosome', lines: ['(~1400 nm width)'], nm: 1400 },
  { name: 'Looped domains', lines: ['(~700 nm)'], nm: 700 },
  { name: '30 nm fibre', lines: ['(30 nm diameter)'], nm: 30 },
  { name: 'Beads-on-string', lines: ['(chromatin; ~11 nm bead,', 'H1 at each linker)'], nm: 11 },
  { name: 'Nucleosome', lines: ['(~11 nm)', '~200 bp + H2A H2B H3 H4'], nm: 11 },
  { name: 'DNA double helix', lines: ['(2 nm diameter)'], nm: 2 },
];
const LY = (i: number) => 74 + i * 68;
const BEADS = 8;
function draw51(): Sketch {
  const s = new Sketch(W, 462);
  lab(s, 180, 22, 'Chromatin Packaging Levels', { size: 14, bold: true });
  lab(s, 8, 40, 'increasing packaging', { size: 10.5, anchor: 'start', color: C.slate });
  arrow(s, [22, LY(5) + 18], [22, 60], { color: C.slate, w: 1.6 });
  LEVELS.forEach((l, i) => {
    const n = l.lines.length + 1, y0 = LY(i) - (n - 1) * 7.5 + 4, hi = l.name === 'Nucleosome';
    lab(s, 196, y0, l.name, { size: 12, anchor: 'start', bold: true, color: hi ? C.amber : C.text });
    l.lines.forEach((t, k) => lab(s, 196, y0 + 15 * (k + 1), t, { size: 11, anchor: 'start', color: C.slate }));
  });
  // metaphase chromosome: two chromatids and the centromere bar
  box(s, 'chromatid 1', [68, 48, 104, 100], { rx: 9 });
  box(s, 'chromatid 2', [112, 48, 148, 100], { rx: 9 });
  path(s, [[92, LY(0)], [124, LY(0)]], { w: 3 });
  // looped domains: a thick axis with loops above and below
  path(s, [[52, LY(1)], [164, LY(1)]], { w: 3.2 });
  [74, 108, 142].forEach((x) => circ(s, x, LY(1) - 10, 10));
  [91, 125].forEach((x) => circ(s, x, LY(1) + 10, 10));
  // 30 nm fibre: a zigzag inside two dashed outlines
  const zig: P[] = Array.from({ length: 9 }, (_, k): P => [52 + k * 14, LY(2) + (k % 2 ? 8 : -8)]);
  path(s, zig, { w: 3.2 });
  path(s, zig.map((p): P => [p[0], p[1] - 6]), { color: C.slate, w: 1, dash: '3 3', track: false });
  path(s, zig.map((p): P => [p[0], p[1] + 6]), { color: C.slate, w: 1, dash: '3 3', track: false });
  keep(s, zig.map((p): P => [p[0], p[1] - 6])); keep(s, zig.map((p): P => [p[0], p[1] + 6]));
  // beads on a string, H1 at each linker
  path(s, [[40, LY(3)], [176, LY(3)]], { color: C.slate, w: 1.5 });
  for (let k = 0; k < BEADS; k++) circ(s, 48 + k * 17.4, LY(3), 6);
  for (let k = 0; k < BEADS - 1; k++) {
    const x = 48 + k * 17.4 + 8.7;
    lab(s, x, LY(3) - 20, 'H1', { size: 9, color: C.amber });
    s.add(`<path d="M${r1(x - 2.5)} ${LY(3) - 10.5} L${r1(x + 2.5)} ${LY(3) - 5.5} M${r1(x + 2.5)} ${LY(3) - 10.5} L${r1(x - 2.5)} ${LY(3) - 5.5}" stroke="${C.amber}" stroke-width="1.2" stroke-linecap="round" fill="none"/>`);
  }
  // nucleosome: DNA wrapped round four histone pairs (the octamer)
  circ(s, 108, LY(4), 20, { color: C.mari, w: 2.6 });
  [[-6, 0], [6, 0], [0, -6], [0, 6]].forEach(([dx, dy]) => circ(s, 108 + dx, LY(4) + dy, 5, { w: 1.5, track: false }));
  // DNA double helix: two strands crossing
  const helix = (ph: number): P[] => Array.from({ length: 61 }, (_, k): P => { const x = 40 + (k / 60) * 136; return [x, LY(5) + 9 * Math.sin(((x - 40) / 45) * 2 * Math.PI + ph)]; });
  path(s, helix(0), { w: 1.9 });
  path(s, helix(Math.PI), { color: C.slate, w: 1.9 });
  return s;
}
function check51(): Check[] {
  const s = draw51();
  const nm = LEVELS.map((l) => l.nm).reverse();
  return [
    ['Six levels in the book\'s order, top of the page to the foot: metaphase chromosome, looped domains, 30 nm fibre, beads-on-string, nucleosome, DNA double helix', LEVELS.map((l) => l.name).join() === 'Metaphase chromosome,Looped domains,30 nm fibre,Beads-on-string,Nucleosome,DNA double helix' && LEVELS.every((l, i) => has(s, l.name) && LY(i) === 74 + i * 68)],
    ['Packaging rises from the helix upward: 2, ~11, ~11, 30, ~700, ~1400 nm never fall, and the helix is the thinnest', nm.every((v, i) => i === 0 || v >= nm[i - 1]) && nm[0] === 2 && nm[5] === 1400],
    ['The book\'s sizes are on the drawing: 2 nm diameter, ~11 nm nucleosome and bead, 30 nm diameter, ~700 nm, ~1400 nm width', hasAll(s, ['(2 nm diameter)', '(~11 nm)', '(chromatin; ~11 nm bead,', '(30 nm diameter)', '(~700 nm)', '(~1400 nm width)'])],
    ['The nucleosome carries ~200 bp and the four histones H2A, H2B, H3 and H4, drawn as four pairs round which the DNA is wrapped', has(s, '~200 bp + H2A H2B H3 H4') && (s.svg().match(/r="5"/g) ?? []).length === 4],
    ['Beads-on-string: eight beads, one H1 at each of the seven linkers between them', BEADS === 8 && s.labels.filter((l) => l.text === 'H1').length === BEADS - 1 && (s.svg().match(/r="6"/g) ?? []).length === BEADS],
    ['Looped domains: three loops one side of the axis and two the other; the metaphase chromosome has two chromatids joined at a bar', (s.svg().match(/r="10"/g) ?? []).length === 5 && BOXES.get(s)!.filter((b) => b.name.startsWith('chromatid')).length === 2],
    ['"increasing packaging" arrow runs from the helix (foot) to the chromosome (top); the nucleosome is the one highlight', has(s, 'increasing packaging') && LY(5) > LY(0) && marigolds(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig51: Diagram = { id: 'b12-05-fig-5.1', topic: 0, name: 'Chromatin packaging levels', cases: [{ chip: 'Packaging levels', cap: CAP51 }], draw: draw51, check: check51 };

/* ================= Figure 5.2 ================= */
const CAP52 = 'A replication fork. The parental duplex is unwound by helicase at the fork. The leading strand is made continuously, growing toward the fork; the lagging strand is made as short Okazaki fragments, each growing away from the fork, and DNA ligase seals the nicks between them. The 5′ and 3′ ends of the strands are marked.';
const HEL: P = [238, 196], HR = 11;
const T1S: P = [244, 188], T1E: P = [70, 92]; // lagging-strand template: fork end, far end
const T2S: P = [244, 204], T2E: P = [70, 300]; // leading-strand template
const U1 = unit(T1S, T1E), U2 = unit(T2S, T2E);
const N1: P = [U1[1], -U1[0]]; // into the fork, below the lagging template
const N2: P = [-U2[1], U2[0]]; // into the fork, above the leading template
const FRAG: [number, number][] = [[30, 64], [86, 120], [142, 176]]; // Okazaki fragments: 5' end and 3' end, as distances from the fork along the template
const LEAD: [number, number] = [184, 62]; // the leading strand: its 5' end far from the fork, its 3' end near it
const OFF = 13;
function draw52(): Sketch {
  const s = new Sketch(W, 406);
  lab(s, 180, 22, 'Replication Fork', { size: 14, bold: true });
  lab(s, 8, 52, 'Lagging-strand template', { size: 10.5, anchor: 'start', color: C.text });
  lab(s, 8, 65, '(5′→3′ toward the fork)', { size: 10.5, anchor: 'start', color: C.text });
  lab(s, 352, 44, 'Direction of fork movement', { size: 10.5, anchor: 'end', color: C.slate, italic: true });
  arrow(s, [214, 56], [350, 56], { color: C.slate, w: 1.5 });
  // the two templates and the parental duplex
  path(s, [T1S, T1E], { w: 2.6 });
  path(s, [T2S, T2E], { w: 2.6 });
  path(s, [[T1S[0] + 8, T1S[1]], [330, T1S[1]]], { w: 2.6 });
  path(s, [[T2S[0] + 8, T2S[1]], [330, T2S[1]]], { w: 2.6 });
  for (let k = 0; k < 5; k++) path(s, [[266 + k * 16, T1S[1] + 3], [266 + k * 16, T2S[1] - 3]], { color: C.grey, w: 1, track: false });
  lab(s, 336, T1S[1] + 4, '3′', { size: 11, anchor: 'start' });
  lab(s, 336, T2S[1] + 4, '5′', { size: 11, anchor: 'start' });
  lab(s, 298, 232, 'Parental duplex', { size: 10.5, color: C.slate });
  lab(s, 62, 96, '5′', { size: 11, anchor: 'end' });
  lab(s, 62, 304, '3′', { size: 11, anchor: 'end' });
  lab(s, 8, 326, 'Leading-strand template', { size: 10.5, anchor: 'start' });
  lab(s, 8, 339, '(3′→5′ toward the fork)', { size: 10.5, anchor: 'start' });
  // the lagging strand: Okazaki fragments, each 5' (near the fork) to 3' (away), a ligase at each nick
  FRAG.forEach(([a, b], k) => {
    const tail = at(T1S, U1, a, N1, OFF), tip = at(T1S, U1, b, N1, OFF);
    arrow(s, tail, tip, { color: C.slate, w: 2.4, dash: true });
    const l5 = at(tail, N1, 13), l3 = at(tip, N1, 13);
    lab(s, l5[0], l5[1] + 4, '5′', { size: 9.5, color: C.slate });
    lab(s, l3[0], l3[1] + 4, '3′', { size: 9.5, color: C.slate });
    if (k < 2) { const m = at(T1S, U1, (b + FRAG[k + 1][0]) / 2, N1, OFF); s.dot(m[0], m[1], 4); }
  });
  // the leading strand: continuous, 5' far away, 3' at the fork
  const l5 = at(T2S, U2, LEAD[0], N2, OFF), l3 = at(T2S, U2, LEAD[1], N2, OFF);
  arrow(s, l5, l3, { color: C.slate, w: 2.4 });
  const t5 = at(l5, N2, 13), t3 = at(l3, N2, 13);
  lab(s, t5[0], t5[1] + 4, '5′', { size: 9.5, color: C.slate });
  lab(s, t3[0], t3[1] + 4, '3′', { size: 9.5, color: C.slate });
  // helicase at the fork
  circ(s, HEL[0], HEL[1], HR, { color: C.mari, w: 2.6 });
  lab(s, 270, 150, 'Helicase', { size: 12, anchor: 'start', bold: true, color: C.amber });
  leader(s, [282, 159], [HEL[0] + 8, HEL[1] - 8], true);
  // key
  path(s, [[14, 360], [40, 360]], { color: C.slate, w: 2.4 });
  lab(s, 48, 364, 'Leading strand (continuous)', { size: 10.5, anchor: 'start' });
  path(s, [[14, 376], [40, 376]], { color: C.slate, w: 2.4, dash: '5 3' });
  lab(s, 48, 380, 'Lagging strand (Okazaki fragments)', { size: 10.5, anchor: 'start' });
  s.dot(27, 394, 4);
  lab(s, 48, 398, 'DNA ligase at a nick', { size: 10.5, anchor: 'start' });
  return s;
}
function check52(): Check[] {
  const s = draw52();
  const dot = (a: number) => (a < 0 ? -1 : 1);
  // each new strand is antiparallel to its template: the lagging template runs 5'->3' toward the fork (far end 5'), so a fragment
  // grows (3') away from the fork; the leading template runs 3'->5' toward the fork (far end 3'), so the new strand grows (3') toward it
  const fragsAway = FRAG.every(([a, b]) => b > a);
  const leadToward = LEAD[1] < LEAD[0];
  const gaps = FRAG.slice(1).map(([a], i) => a - FRAG[i][1]);
  const eq = (a: number, b: number) => Math.abs(a - b) < 1e-9;
  return [
    ['Every strand end the book marks is here: the two template ends, the duplex ends (3′ top, 5′ bottom), and a 5′ and 3′ on each of the three Okazaki fragments and the leading strand', s.labels.filter((l) => l.text === '5′').length === 3 + 1 + 1 + 1 && s.labels.filter((l) => l.text === '3′').length === 3 + 1 + 1 + 1],
    ['Lagging side: three Okazaki fragments, each growing away from the fork (5′ end nearer the fork than its 3′ end), in order out from the fork', FRAG.length === 3 && fragsAway && FRAG.every(([a], i) => i === 0 || a > FRAG[i - 1][0])],
    ['A ligase sits in each of the two nicks, between neighbouring fragments (a gap of 22 on the strand), and nowhere else', gaps.length === 2 && gaps.every((g) => eq(g, 22)) && s.points.filter((p) => p.r === 4).length === 3],
    ['Leading side: one continuous strand growing toward the fork (its 3′ end nearer the fork than its 5′ end)', leadToward],
    ['The two templates open from the fork leaving the parental duplex behind it: the fork vertex is left of the duplex and the arms spread to the left', HEL[0] < 266 && T1E[0] < T1S[0] && T2E[0] < T2S[0] && dot(T1E[1] - T1S[1]) === -1 && dot(T2E[1] - T2S[1]) === 1],
    ['Direction of fork movement points right, away from the arms and into the parental duplex; helicase (the highlight) is at the vertex', has(s, 'Direction of fork movement') && has(s, 'Helicase') && marigolds(s) >= 1 && HEL[0] > T1S[0] - 10],
    ['The book\'s words are on it: both template names with their directions, Parental duplex, Helicase and the three-entry key (leading strand, lagging strand, DNA ligase at a nick)', hasAll(s, ['Lagging-strand template', '(5′→3′ toward the fork)', 'Leading-strand template', '(3′→5′ toward the fork)', 'Parental duplex', 'Helicase', 'Leading strand (continuous)', 'Lagging strand (Okazaki fragments)', 'DNA ligase at a nick'])],
    ...layout(s), clean(s),
  ];
}
const fig52: Diagram = { id: 'b12-05-fig-5.2', topic: 0, name: 'A replication fork', cases: [{ chip: 'Replication fork', cap: CAP52 }], draw: draw52, check: check52 };

/* ================= Figure 5.3 ================= */
const CAP53_1 = 'The Hershey–Chase experiment. Track 1: phage with <sup>32</sup>P-labelled DNA infects <i>E. coli</i>; after blending and centrifugation the radioactivity is found inside the bacterial pellet.';
const CAP53_2 = 'The Hershey–Chase experiment. Track 2: phage with <sup>35</sup>S-labelled protein coats infects <i>E. coli</i>; most of the radioactivity stays in the supernatant (empty coats) and the bacteria carry very little of it. Conclusion: DNA is the genetic material.';
type Track = { n: 1 | 2; title: string; phage: string[]; inside: string[]; pellet: string[]; super: string[]; hot: 'pellet' | 'supernatant'; label: string };
const TRACKS: Track[] = [
  { n: 1, title: 'Track 1: <sup>32</sup>P-labelled DNA', phage: ['<sup>32</sup>P-DNA', 'phage'], inside: ['Radioactivity inside the cells', '(DNA enters)'], pellet: ['PELLET', '(radioactive)'], super: ['Supernatant', '(empty coats)'], hot: 'pellet', label: '32P' },
  { n: 2, title: 'Track 2: <sup>35</sup>S-labelled protein', phage: ['<sup>35</sup>S-protein', 'phage'], inside: ['Little radioactivity in the cells', '(protein stays outside)'], pellet: ['PELLET', '(barely radioactive)'], super: ['Supernatant', '(<sup>35</sup>S coats,', 'radioactive)'], hot: 'supernatant', label: '35S' },
];
function lines(s: Sketch, cx: number, y0: number, ts: string[], name: string, o: { color?: string; bold?: boolean; size?: number; gap?: number } = {}) {
  const gap = o.gap ?? 14;
  ts.forEach((t, i) => lab(s, cx, y0 + i * gap - ((ts.length - 1) * gap) / 2 + 4, t, { size: o.size ?? 11, bold: o.bold && i === 0, color: o.color, within: name }));
}
function draw53(c: { track: 1 | 2 }): Sketch {
  const t = TRACKS[c.track - 1], s = new Sketch(W, 480);
  lab(s, 180, 20, 'Hershey–Chase Experiment (1952)', { size: 14, bold: true });
  lab(s, 180, 50, t.title, { size: 13, bold: true });
  // the phage: a head on a stem and a base plate (the labelled part drawn heavy)
  const protein = c.track === 2;
  circ(s, 170, 100, 17, { w: protein ? 3.4 : 1.7 });
  if (!protein) path(s, [[162, 98], [166, 92], [170, 100], [174, 94], [178, 100]], { w: 1.4, track: false });
  path(s, [[170, 117], [170, 140]], { w: 1.7 });
  path(s, [[158, 140], [182, 140]], { w: 2.2 });
  t.phage.forEach((x, i) => lab(s, 196, 96 + i * 15, x, { size: 11, anchor: 'start' }));
  arrow(s, [170, 148], [170, 174], { color: C.slate, w: 1.6 });
  lab(s, 182, 165, 'Infects <i>E. coli</i>', { size: 10.5, anchor: 'start', color: C.slate });
  box(s, 'E. coli', [130, 178, 210, 206], {});
  lab(s, 170, 196, '<i>E. coli</i>', { size: 12, within: 'E. coli' });
  t.inside.forEach((x, i) => lab(s, 180, 226 + i * 14, x, { size: 10.5, color: c.track === 1 ? C.amber : C.slate }));
  arrow(s, [170, 254], [170, 284], { color: C.slate, w: 1.6 });
  lab(s, 182, 274, 'Blender + centrifuge', { size: 10.5, anchor: 'start', color: C.slate });
  arrow(s, [160, 294], [96, 326], { color: C.slate, w: 1.6 });
  arrow(s, [180, 294], [244, 326], { color: C.slate, w: 1.6 });
  const hot = (w: 'pellet' | 'supernatant') => (t.hot === w ? { color: C.mari, w: 2.4 } : {});
  box(s, 'pellet', [18, 332, 172, 390], hot('pellet'));
  box(s, 'supernatant', [188, 332, 342, 390], hot('supernatant'));
  lines(s, 95, 361, t.pellet, 'pellet', { bold: true, color: t.hot === 'pellet' ? C.amber : C.text });
  lines(s, 265, 361, t.super, 'supernatant', { bold: false, color: t.hot === 'supernatant' ? C.amber : C.text });
  wide(s, ['CONCLUSION', 'DNA is the genetic material: it enters the cell', 'and directs the making of new virus particles.'], 410);
  return s;
}
function check53(c: { track: 1 | 2 }): Check[] {
  const s = draw53(c), t = TRACKS[c.track - 1];
  // the radioactive label is the one on DNA in track 1 and on protein in track 2; DNA enters the cell, protein coats stay outside
  const dnaLabelled = c.track === 1;
  const inCells = dnaLabelled, inPellet = inCells;
  return [
    [`Track ${c.track} as printed: ${dnaLabelled ? '32P-labelled DNA' : '35S-labelled protein'}`, has(s, plain(t.title)) && has(s, plain(t.phage[0])) && has(s, 'Hershey–Chase Experiment (1952)')],
    [dnaLabelled ? '32P labels DNA, which is inside the cells: the pellet is radioactive and the supernatant (empty coats) is not' : '35S labels protein, which stays outside: the pellet is barely radioactive and the supernatant (the 35S coats) holds the radioactivity', inCells === inPellet && has(s, dnaLabelled ? '(radioactive)' : '(barely radioactive)') && has(s, dnaLabelled ? '(empty coats)' : 'radioactive)')],
    [`The words under the E. coli box and in the two result boxes are the book's`, hasAll(s, t.inside.map(plain)) && hasAll(s, t.pellet.map(plain)) && hasAll(s, t.super.map(plain)) && has(s, 'Blender + centrifuge') && has(s, 'Infects E. coli')],
    ['Two arrows run from the blender step, one to the pellet (left) and one to the supernatant (right); the radioactive one is the highlight', (s.svg().match(/<path d="M[^"]*Z" fill="#57534B"\/>/g) ?? []).length === 4 && marigolds(s) === 1 && t.hot === (dnaLabelled ? 'pellet' : 'supernatant')],
    ['The conclusion is the book\'s (em dash set as a colon): DNA is the genetic material, it enters the cell and directs the making of new virus particles', s.tags.some((g) => g.name === 'CONCLUSION DNA is the genetic material: it enters the cell and directs the making of new virus particles.')],
    ...layout(s), clean(s),
  ];
}
const fig53: Diagram = {
  id: 'b12-05-fig-5.3', topic: 1, name: 'The Hershey–Chase experiment',
  cases: [{ chip: 'Track 1: 32P-DNA', track: 1, cap: CAP53_1 }, { chip: 'Track 2: 35S-protein', track: 2, cap: CAP53_2 }],
  draw: draw53, check: check53,
};

/* ================= Figure 5.4 ================= */
const CAP54 = 'A transcription unit on a DNA duplex, drawn left to right: the promoter lies at the 5′ (upstream) end of the coding strand, the structural gene in the middle and the terminator at the 3′ (downstream) end. The lower strand is the template (3′→5′) and the upper strand the coding strand (5′→3′). RNA polymerase moves along the template and the RNA grows 5′→3′.';
const X4 = { l: 40, p: 116, g: 236, r: 322 };
const CY = 138, TY = 174, POL: P = [150, 156];
const bez4 = (p0: P, p1: P, p2: P, p3: P, n = 24): P[] => Array.from({ length: n + 1 }, (_, i): P => {
  const t = i / n, u = 1 - t;
  return [u ** 3 * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0], u ** 3 * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1]];
});
const TRANSCRIPT: P[] = bez4([150, 186], [150, 224], [128, 246], [76, 246]);
function draw54(): Sketch {
  const s = new Sketch(W, 340);
  lab(s, 180, 20, 'Transcription Unit (Prokaryote)', { size: 14, bold: true });
  lab(s, 181, 56, 'Direction of transcription', { size: 10.5, color: C.slate, italic: true });
  arrow(s, [X4.l, 66], [X4.r, 66], { color: C.slate, w: 1.4, dash: true });
  // the three regions
  box(s, 'promoter', [X4.l, 114, X4.p, 200], { dash: '5 4', rx: 2 });
  box(s, 'gene', [X4.p, 114, X4.g, 200], { rx: 2 });
  box(s, 'terminator', [X4.g, 114, X4.r, 200], { dash: '5 4', rx: 2 });
  lab(s, (X4.l + X4.p) / 2, 90, 'PROMOTER', { size: 10, bold: true });
  lab(s, (X4.l + X4.p) / 2, 103, '(−35 / −10)', { size: 10, bold: true });
  lab(s, (X4.p + X4.g) / 2, 103, 'STRUCTURAL GENE', { size: 10, bold: true });
  lab(s, (X4.g + X4.r) / 2, 103, 'TERMINATOR', { size: 10, bold: true });
  // the duplex
  for (let x = X4.l + 8; x < X4.r; x += 12) path(s, [[x, CY + 3], [x, TY - 3]], { color: C.grey, w: 1, track: false });
  path(s, [[X4.l, CY], [X4.r, CY]], { w: 2.6 });
  path(s, [[X4.l, TY], [X4.r, TY]], { w: 2.6, color: C.slate });
  lab(s, 32, CY + 4, '5′', { size: 11, anchor: 'end' });
  lab(s, 328, CY + 4, '3′', { size: 11, anchor: 'start' });
  lab(s, 32, TY + 4, '3′', { size: 11, anchor: 'end', color: C.slate });
  lab(s, 328, TY + 4, '5′', { size: 11, anchor: 'start', color: C.slate });
  // RNA polymerase (the highlight), moving right, and the growing RNA
  ell(s, POL[0], POL[1], 20, 30, { color: C.mari, w: 2.6 });
  lab(s, POL[0], POL[1] - 3, 'RNA', { size: 10.5, bold: true, color: C.amber });
  lab(s, POL[0], POL[1] + 10, 'pol', { size: 10.5, bold: true, color: C.amber });
  arrow(s, [180, POL[1]], [214, POL[1]], { color: C.ink, w: 1.8 });
  path(s, TRANSCRIPT, { w: 2.2 });
  lab(s, 160, 218, '3′', { size: 11, anchor: 'start' });
  lab(s, 68, 250, '5′', { size: 11, anchor: 'end' });
  lab(s, 112, 258, 'growing RNA transcript', { size: 10.5, anchor: 'start', italic: true });
  lab(s, 112, 272, '(5′→3′)', { size: 10.5, anchor: 'start', italic: true });
  // key
  path(s, [[14, 302], [40, 302]], { w: 2.6 });
  lab(s, 48, 306, 'Coding strand (5′→3′)', { size: 10.5, anchor: 'start' });
  path(s, [[14, 320], [40, 320]], { w: 2.6, color: C.slate });
  lab(s, 48, 324, 'Template strand (3′→5′)', { size: 10.5, anchor: 'start' });
  return s;
}
function check54(): Check[] {
  const s = draw54();
  const tip = TRANSCRIPT[0], tail = TRANSCRIPT[TRANSCRIPT.length - 1];
  return [
    ['Left to right: promoter, structural gene, terminator, each next to the one before and the whole unit on the duplex', X4.l < X4.p && X4.p < X4.g && X4.g < X4.r && hasAll(s, ['PROMOTER', 'STRUCTURAL GENE', 'TERMINATOR'])],
    ['The promoter is at the 5′ (upstream) end of the coding strand and the terminator at its 3′ (downstream) end: the coding strand (upper) is 5′ at the left and 3′ at the right', s.labels.filter((l) => l.text === '5′').length >= 3 && X4.p - X4.l < X4.g - X4.p && has(s, '(−35 / −10)')],
    ['The two strands are antiparallel: the template (lower) is 3′ at the left and 5′ at the right, the reverse of the coding strand', CY < TY && has(s, 'Coding strand (5′→3′)') && has(s, 'Template strand (3′→5′)')],
    ['RNA polymerase sits inside the structural gene and moves right (the arrow points toward the 3′ end of the coding strand), reading the template 3′→5′', POL[0] > X4.p && POL[0] < X4.g && POL[0] + 20 < 180],
    ['The growing RNA leaves the polymerase by its 3′ end (the growing end is at the polymerase) and its 5′ end is the older one, further left: the RNA grows 5′→3′, left to right', tip[0] === POL[0] && tail[0] < tip[0] && has(s, '(5′→3′)') && has(s, 'growing RNA transcript')],
    ['RNA polymerase is the one highlight; "Direction of transcription" runs left to right across the unit', marigolds(s) >= 1 && has(s, 'Direction of transcription')],
    ...layout(s), clean(s),
  ];
}
const fig54: Diagram = { id: 'b12-05-fig-5.4', topic: 2, name: 'A transcription unit', cases: [{ chip: 'Transcription unit', cap: CAP54 }], draw: draw54, check: check54 };

/* ================= Figure 5.5 ================= */
const CAP55 = 'Processing of hnRNA into mature mRNA. Starting from hnRNA with alternating exons and introns: step 1, a cap (m<sup>7</sup>G) is added at the 5′ end; step 2, splicing removes the introns and joins the exons; step 3, a poly-A tail is added at the 3′ end. The result is mature mRNA: cap – joined exons – poly-A tail.';
const HN = ['E1', 'I1', 'E2', 'I2', 'E3', 'I3', 'E4']; // hnRNA, 5' to 3'
const MATURE = HN.filter((b) => b[0] === 'E');
const REMOVED = HN.filter((b) => b[0] === 'I');
const EW = 42, IW = 24, X0 = 58, RH = 26;
type Row = { y: number; blocks: string[]; cap: boolean; tail: boolean; hi?: boolean };
const ROWS: Row[] = [
  { y: 58, blocks: HN, cap: false, tail: false },
  { y: 138, blocks: HN, cap: true, tail: false },
  { y: 280, blocks: MATURE, cap: true, tail: false },
  { y: 366, blocks: MATURE, cap: true, tail: true, hi: true },
];
const rowEnd = (r: Row) => X0 + r.blocks.reduce((a, b) => a + (b[0] === 'E' ? EW : IW), 0);
function draw55(): Sketch {
  const s = new Sketch(W, 442);
  lab(s, 180, 20, 'Processing of hnRNA to Mature mRNA', { size: 14, bold: true });
  lab(s, X0, 50, 'hnRNA (primary transcript)', { size: 12, anchor: 'start', bold: true });
  ROWS.forEach((r, ri) => {
    let x = X0;
    r.blocks.forEach((b) => {
      const w = b[0] === 'E' ? EW : IW, name = `row ${ri + 1} ${b}`;
      box(s, name, [x, r.y, x + w, r.y + RH], { rx: 2, w: b[0] === 'E' && r.hi ? 2.4 : 1.7, color: b[0] === 'E' && r.hi ? C.mari : C.ink, dash: b[0] === 'I' ? '4 3' : undefined });
      lab(s, x + w / 2, r.y + RH / 2 + 4, b, { size: 11, bold: true, color: b[0] === 'I' ? C.slate : C.text, within: name });
      x += w;
    });
    const cy = r.y + RH / 2, end = rowEnd(r);
    lab(s, r.cap ? 24 : 50, cy + 4, '5′', { size: 12, anchor: 'end' });
    if (r.cap) circ(s, 40, cy, 8, { color: C.ink, w: 1.8 });
    if (r.tail) {
      path(s, [[end, cy], [end + 20, cy]], { w: 1.8 });
      circ(s, end + 29, cy, 9, { w: 1.8, track: false });
      lab(s, end + 29, cy + 3.5, 'A', { size: 10.5, bold: true });
      lab(s, end + 29, r.y - 9, 'poly-A tail', { size: 11, color: C.amber });
      lab(s, end + 44, cy + 4, '3′', { size: 12, anchor: 'start' });
    } else lab(s, end + 6, cy + 4, '3′', { size: 12, anchor: 'start' });
  });
  // steps
  arrow(s, [22, 96], [22, 128], { color: C.slate, w: 1.6 });
  lab(s, 40, 116, 'Step 1: 5′ capping (m<sup>7</sup>G cap added)', { size: 11.5, anchor: 'start', color: C.slate });
  lab(s, 30, 188, 'm<sup>7</sup>G cap', { size: 11, anchor: 'start', color: C.amber });
  arrow(s, [22, 198], [22, 272], { color: C.slate, w: 1.6 });
  lab(s, 40, 210, 'Step 2: splicing (introns removed, exons joined)', { size: 11.5, anchor: 'start', color: C.slate });
  lab(s, 40, 240, 'removed introns:', { size: 11, anchor: 'start', color: C.slate, italic: true });
  REMOVED.forEach((b, i) => {
    const x = 136 + i * 34, name = `removed ${b}`;
    box(s, name, [x, 224, x + 28, 250], { rx: 2, dash: '4 3' });
    lab(s, x + 14, 241, b, { size: 11, bold: true, color: C.slate, within: name });
  });
  arrow(s, [22, 318], [22, 358], { color: C.slate, w: 1.6 });
  lab(s, 40, 340, 'Step 3: 3′ poly-A tail added', { size: 11.5, anchor: 'start', color: C.slate });
  lab(s, 10, 426, 'Mature mRNA  (cap – joined exons – poly-A tail)', { size: 12, anchor: 'start', bold: true });
  return s;
}
function check55(): Check[] {
  const s = draw55();
  const seq = (r: Row) => r.blocks.join();
  return [
    ['hnRNA is E1 I1 E2 I2 E3 I3 E4: four exons and three introns, alternating, starting and ending with an exon, no cap and no tail', seq(ROWS[0]) === 'E1,I1,E2,I2,E3,I3,E4' && HN.every((b, i) => (i % 2 === 0) === (b[0] === 'E')) && !ROWS[0].cap && !ROWS[0].tail],
    ['Step 1 adds the m7G cap at the 5′ end only: the same seven blocks, now with a cap', seq(ROWS[1]) === seq(ROWS[0]) && ROWS[1].cap && !ROWS[1].tail && has(s, 'Step 1: 5′ capping (m7G cap added)') && has(s, 'm7G cap')],
    ['Step 2 splices: the three introns I1 I2 I3 are removed (and shown removed) and the four exons E1 E2 E3 E4 are joined in the same order', REMOVED.join() === 'I1,I2,I3' && seq(ROWS[2]) === 'E1,E2,E3,E4' && ROWS[2].cap && has(s, 'removed introns:') && has(s, 'Step 2: splicing (introns removed, exons joined)')],
    ['Step 3 adds the poly-A tail at the 3′ end only: cap, joined exons, tail; the mature mRNA is the highlight', ROWS[3].cap && ROWS[3].tail && seq(ROWS[3]) === 'E1,E2,E3,E4' && has(s, 'Step 3: 3′ poly-A tail added') && has(s, 'poly-A tail') && marigolds(s) === 4],
    ['Every row has its 5′ at the left and 3′ at the right (4 of each), and the bottom line is the book\'s', s.labels.filter((l) => l.text === '5′').length === 4 && s.labels.filter((l) => l.text === '3′').length === 4 && has(s, 'Mature mRNA  (cap – joined exons – poly-A tail)') && has(s, 'hnRNA (primary transcript)')],
    ['The four rows run top to bottom in step order and each fits the frame', ROWS.every((r, i) => i === 0 || r.y > ROWS[i - 1].y) && ROWS.every((r) => rowEnd(r) + 50 < W)],
    ...layout(s), clean(s),
  ];
}
const fig55: Diagram = { id: 'b12-05-fig-5.5', topic: 2, name: 'hnRNA to mature mRNA', cases: [{ chip: 'Cap, splice, tail', cap: CAP55 }], draw: draw55, check: check55 };

/* ================= Figure 5.6 ================= */
const CAP56 = 'A bacterial ribosome (small and large subunits) on an mRNA that is read 5′→3′. The P site holds the tRNA attached to the growing polypeptide chain and the A site holds the incoming charged tRNA, whose anticodon pairs with the next codon. A peptide bond forms between the two amino acids, catalysed by the rRNA (ribozyme) of the large subunit.';
const CODONS = ['AUG', 'UUU', 'GCC', 'GAA'];
const CODE: Record<string, string> = { AUG: 'Met', UUU: 'Phe', GCC: 'Ala', GAA: 'Glu' };
const CX = [68, 140, 212, 284];
const PCX = CX[1], ACX = CX[2];
const TRNA = { P: { aa: 'Phe', anti: '3′-AAA-5′', codon: 'UUU' }, A: { aa: 'Ala', anti: '3′-CGG-5′', codon: 'GCC' } };
const comp: Record<string, string> = { A: 'U', U: 'A', G: 'C', C: 'G' };
/** The anticodon 3'-xyz-5' pairs with the codon 5'-x'y'z'-3': complement base by base, read in the same direction. */
const pairs = (anti: string, codon: string) => anti.replace(/[35′-]/g, '').split('').every((b, i) => comp[b] === codon[i]);
function draw56(): Sketch {
  const s = new Sketch(W, 394);
  lab(s, 180, 20, 'Ribosome & Translation (Bacterial)', { size: 14, bold: true });
  lab(s, 182, 46, 'Peptide bond', { size: 11.5, bold: true, color: C.amber });
  lab(s, 182, 60, 'forms here', { size: 11.5, bold: true, color: C.amber });
  // large subunit
  box(s, 'large', [16, 74, 344, 226], {});
  lab(s, 28, 98, 'Large subunit', { size: 12, anchor: 'start', bold: true, within: 'large' });
  box(s, 'rrna', [236, 88, 332, 126], { rx: 3 });
  lab(s, 284, 104, '23S rRNA', { size: 11, bold: true, within: 'rrna' });
  lab(s, 284, 118, '(ribozyme)', { size: 11, bold: true, within: 'rrna' });
  // the two tRNAs, their amino acids and the peptide bond
  box(s, 'P tRNA', [PCX - 33, 172, PCX + 33, 212], { rx: 3 });
  box(s, 'A tRNA', [ACX - 33, 172, ACX + 33, 212], { rx: 3 });
  lab(s, PCX, 196, TRNA.P.anti, { size: 9.5, bold: true, within: 'P tRNA' });
  lab(s, ACX, 196, TRNA.A.anti, { size: 9.5, bold: true, within: 'A tRNA' });
  [-8, 0, 8].forEach((d) => { path(s, [[PCX + d, 212], [PCX + d, 238]], { w: 1.4 }); path(s, [[ACX + d, 212], [ACX + d, 238]], { w: 1.4 }); });
  const AAY = 158;
  circ(s, 112, 130, 11, { track: false }); lab(s, 112, 133.5, 'Met', { size: 9, bold: true });
  path(s, [[118, 138], [PCX - 6, AAY - 8]], { w: 1.8, track: false });
  circ(s, PCX, AAY, 11, { track: false }); lab(s, PCX, AAY + 3.5, TRNA.P.aa, { size: 9, bold: true });
  circ(s, ACX, AAY, 11, { track: false }); lab(s, ACX, AAY + 3.5, TRNA.A.aa, { size: 9, bold: true });
  path(s, [[PCX + 11, AAY], [ACX - 11, AAY]], { color: C.mari, w: 3.2, track: false });
  leader(s, [182, 70], [(PCX + ACX) / 2, AAY - 3], true);
  ['growing', 'polypeptide', 'chain'].forEach((t, i) => lab(s, 22, 166 + i * 13, t, { size: 10, anchor: 'start', italic: true, color: C.amber }));
  ['incoming charged', 'tRNA (A site)'].forEach((t, i) => lab(s, 252, 170 + i * 13, t, { size: 10, anchor: 'start', italic: true, color: C.slate }));
  // mRNA 5' to 3' and its codons
  arrow(s, [36, 246], [330, 246], { color: C.ink, w: 2.6 });
  lab(s, 22, 250, '5′', { size: 12, anchor: 'end' });
  lab(s, 336, 250, '3′', { size: 12, anchor: 'start' });
  lab(s, 330, 238, 'mRNA', { size: 11, anchor: 'end', italic: true });
  CODONS.forEach((cd, i) => lab(s, CX[i], 266, cd, { size: 12 }));
  // small subunit
  box(s, 'small', [16, 276, 344, 352], {});
  lab(s, PCX, 296, 'P site', { size: 12, bold: true, within: 'small' });
  lab(s, ACX, 296, 'A site', { size: 12, bold: true, within: 'small' });
  lab(s, 28, 338, 'Small subunit', { size: 12, anchor: 'start', bold: true, within: 'small' });
  arrow(s, [24, 376], [70, 376], { color: C.slate, w: 1.5 });
  lab(s, 78, 380, 'ribosome moves 5′→3′ along the mRNA', { size: 10.5, anchor: 'start', italic: true, color: C.slate });
  return s;
}
function check56(): Check[] {
  const s = draw56();
  return [
    ['The mRNA is 5′ AUG UUU GCC GAA 3′, drawn left to right with the ribosome moving the same way', CODONS.join(' ') === 'AUG UUU GCC GAA' && CX.every((x, i) => i === 0 || x > CX[i - 1]) && hasAll(s, CODONS) && has(s, 'ribosome moves 5′→3′ along the mRNA')],
    ['Each codon codes the amino acid drawn on its tRNA by the genetic code: UUU is Phe (P site), GCC is Ala (A site), and the chain begins with AUG, Met', CODE[TRNA.P.codon] === TRNA.P.aa && CODE[TRNA.A.codon] === TRNA.A.aa && CODE.AUG === 'Met' && hasAll(s, ['Met', 'Phe', 'Ala'])],
    ['Each anticodon pairs with its codon (antiparallel, A-U and G-C): 3′-AAA-5′ with UUU and 3′-CGG-5′ with GCC', pairs(TRNA.P.anti, TRNA.P.codon) && pairs(TRNA.A.anti, TRNA.A.codon) && hasAll(s, [TRNA.P.anti, TRNA.A.anti])],
    ['The P tRNA stands over the P-site codon and the A tRNA over the next codon, 3′ of it; the P and A site names sit under those codons', PCX === CX[1] && ACX === CX[2] && ACX > PCX && has(s, 'P site') && has(s, 'A site')],
    ['The peptide bond (the highlight) joins Phe on the P tRNA to Ala on the A tRNA, and the growing chain Met–Phe stays on the P tRNA; "Peptide bond forms here" and "23S rRNA (ribozyme)" are on the large subunit', marigolds(s) >= 1 && hasAll(s, ['Peptide bond', 'forms here', '23S rRNA', '(ribozyme)', 'Large subunit', 'Small subunit'])],
    ['The book\'s notes are on it: growing polypeptide chain, incoming charged tRNA (A site), mRNA', hasAll(s, ['growing', 'polypeptide', 'chain', 'incoming charged', 'tRNA (A site)', 'mRNA'])],
    ...layout(s), clean(s),
  ];
}
const fig56: Diagram = { id: 'b12-05-fig-5.6', topic: 3, name: 'A bacterial ribosome', cases: [{ chip: 'A and P sites', cap: CAP56 }], draw: draw56, check: check56 };

/* ================= Figure 5.7 ================= */
const CAP57_A = 'The lac operon: regulatory gene (<i>i</i>), promoter (<i>P</i>), operator (<i>O</i>) and structural genes <i>z</i>, <i>y</i>, <i>a</i>. (a) Lactose absent: the repressor made by the <i>i</i> gene is bound to the operator, RNA polymerase is blocked and the operon is OFF.';
const CAP57_B = 'The lac operon: regulatory gene (<i>i</i>), promoter (<i>P</i>), operator (<i>O</i>) and structural genes <i>z</i>, <i>y</i>, <i>a</i>. (b) Lactose present: lactose (allolactose) binds the repressor, which changes shape and leaves the operator; RNA polymerase transcribes <i>z</i>, <i>y</i> and <i>a</i> and the operon is ON.';
/** The map, 5' to 3': gene, left edge, right edge. */
const MAP: [string, number, number][] = [['i', 14, 64], ['P', 92, 134], ['O', 134, 172], ['z', 188, 240], ['y', 240, 292], ['a', 292, 344]];
const GY: [number, number] = [136, 172];
function genes(s: Sketch) {
  MAP.forEach(([g, a, b]) => {
    box(s, g, [a, GY[0], b, GY[1]], { rx: 2, w: 1.9 });
    lab(s, (a + b) / 2, GY[1] - 11, g, { size: 15, bold: true, italic: true, within: g });
  });
  path(s, [[10, GY[1] + 5], [350, GY[1] + 5]], { w: 3.4 });
}
const mid = (g: string): number => { const m = MAP.find((x) => x[0] === g)!; return (m[1] + m[2]) / 2; };
function draw57(c: { on: boolean }): Sketch {
  const s = new Sketch(W, c.on ? 306 : 296);
  lab(s, 180, 20, 'Lac Operon: Inducible System', { size: 14, bold: true });
  lab(s, 14, 46, c.on ? '(b) Lactose PRESENT: operon ON' : '(a) Lactose ABSENT: operon OFF', { size: 13, anchor: 'start', bold: true });
  genes(s);
  const polX = 108, R = 14;
  if (!c.on) {
    circ(s, polX, 108, R, { color: C.ink, w: 1.8, track: false });
    lab(s, polX, 112, 'pol', { size: 11, bold: true });
    path(s, [[132, 92], [132, 124]], { color: C.amber, w: 3, track: false });
    circ(s, mid('O') + 4, 108, R, { color: C.mari, w: 2.6, track: false });
    lab(s, mid('O') + 4, 112.5, 'R', { size: 13, bold: true, color: C.amber });
    path(s, [[mid('O') + 4, 108 + R], [mid('O') + 4, GY[0]]], { color: C.mari, w: 1.8 });
    lab(s, 14, 100, 'RNA polymerase', { size: 10.5, anchor: 'start', color: C.amber });
    lab(s, 14, 113, 'blocked', { size: 10.5, anchor: 'start', color: C.amber });
    lab(s, 180, 104, 'Repressor bound', { size: 11.5, anchor: 'start', bold: true, color: C.amber });
    lab(s, 180, 118, 'to the operator', { size: 11.5, anchor: 'start', bold: true, color: C.amber });
    lab(s, 14, 268, 'No mRNA: <i>z</i>, <i>y</i>, <i>a</i> are not transcribed', { size: 12, anchor: 'start', italic: false, color: C.slate });
  } else {
    circ(s, polX, 108, R, { color: C.ink, w: 1.8, track: false });
    lab(s, polX, 112, 'pol', { size: 11, bold: true });
    lab(s, 232, 82, 'RNA polymerase transcribes <i>z</i>, <i>y</i>, <i>a</i>', { size: 12, bold: true });
    arrow(s, [polX + R + 2, 108], [346, 108], { color: C.ink, w: 1.8, track: false });
    arrow(s, [190, 200], [332, 200], { color: C.ink, w: 1.8, track: false });
    lab(s, 346, 220, 'mRNA', { size: 11.5, anchor: 'end' });
  }
  // the repressor made by the i gene
  arrow(s, [mid('i'), GY[1] + 12], [mid('i'), 214], { color: C.slate, w: 1.6 });
  circ(s, mid('i'), 232, R, { color: C.ink, w: 1.8, dash: c.on ? '3 3' : undefined, track: false });
  lab(s, mid('i'), 236.5, 'R', { size: 13, bold: true });
  lab(s, 62, 236, 'repressor made by the <i>i</i> gene', { size: 10.5, anchor: 'start', italic: true, color: C.slate });
  if (c.on) {
    circ(s, 56, 276, R, { color: C.mari, w: 2.6, dash: '3 3', track: false });
    lab(s, 56, 280.5, 'R', { size: 13, bold: true, color: C.amber });
    circ(s, 40, 266, 8, { color: C.ink, w: 1.5, track: false });
    lab(s, 40, 269, 'I', { size: 9, bold: true });
    lab(s, 82, 272, 'Repressor + allolactose (I):', { size: 10.5, anchor: 'start', color: C.amber });
    lab(s, 82, 285, 'inactive, released from O', { size: 10.5, anchor: 'start', color: C.amber });
  }
  return s;
}
function check57(c: { on: boolean }): Check[] {
  const s = draw57(c);
  const order = MAP.map((m) => m[0]).join('');
  const gaps = MAP.slice(1).map((m, i) => m[1] - MAP[i][2]);
  return [
    ['The map is i, then P, O, z, y, a, left to right, with i a gap away from the promoter and a small gap between O and z', order === 'iPOzya' && MAP.every((m, i) => i === 0 || m[1] >= MAP[i - 1][2]) && gaps[0] > 0 && gaps[2] > 0 && gaps[1] === 0 && hasAll(s, ['i', 'P', 'O', 'z', 'y', 'a'])],
    c.on
      ? ['Lactose present: no repressor sits on the operator; the repressor (R) is shown with allolactose (I), inactive and released from O, and RNA polymerase runs on across z, y, a (arrow) making mRNA', !has(s, 'Repressor bound') && hasAll(s, ['Repressor + allolactose (I):', 'inactive, released from O', 'mRNA']) && has(s, 'RNA polymerase transcribes z, y, a')]
      : ['Lactose absent: the repressor made by the i gene (R) is bound to the operator and RNA polymerase (pol) is blocked at the promoter; no mRNA is made, so z, y, a are not transcribed', hasAll(s, ['Repressor bound', 'to the operator', 'RNA polymerase', 'blocked']) && has(s, 'No mRNA: z, y, a are not transcribed') && !has(s, 'mRNA')],
    ['The repressor is made by the i gene: an arrow leaves the i box down to R, with "repressor made by the i gene" beside it', has(s, 'repressor made by the i gene') && has(s, 'R')],
    [c.on ? 'Operon ON: the repressor is off the operator (the polymerase arrow starts at the promoter and passes O)' : 'Operon OFF: the repressor sits on O, which is the promoter\'s neighbour, between pol and the structural genes', c.on ? mid('P') < mid('O') : mid('O') > mid('P') && mid('O') < mid('z')],
    [`${c.on ? 'The inactive repressor complex' : 'The repressor bound to the operator'} is the one highlight`, marigolds(s) >= 1 && marigolds(s) <= 2],
    ['Panel title and all words are the book\'s (em dash set as a colon)', has(s, 'Lac Operon: Inducible System') && has(s, c.on ? '(b) Lactose PRESENT: operon ON' : '(a) Lactose ABSENT: operon OFF')],
    ...layout(s), clean(s),
  ];
}
const fig57: Diagram = {
  id: 'b12-05-fig-5.7', topic: 4, name: 'The lac operon, off and on',
  cases: [{ chip: '(a) Lactose absent', on: false, cap: CAP57_A }, { chip: '(b) Lactose present', on: true, cap: CAP57_B }],
  draw: draw57, check: check57,
};

/* ================= Figure 5.8 ================= */
const CAP58 = 'DNA fingerprinting workflow: isolation of DNA; optional PCR amplification (a modern addition to NCERT’s list of steps) when the sample is tiny; digestion with restriction endonucleases; separation of the fragments by gel electrophoresis; Southern blotting (transfer to a nylon or nitrocellulose membrane); hybridisation with a labelled VNTR probe; and autoradiography, which reveals the band pattern (the “fingerprint”).';
const STEPS: { n: number; head: string; body: string[]; optional?: boolean }[] = [
  { n: 1, head: 'DNA isolation', body: ['Cells lysed; DNA purified', 'from the nucleus'] },
  { n: 2, head: 'PCR amplification (optional)', body: ['Makes many copies when', 'the sample is tiny'], optional: true },
  { n: 3, head: 'Restriction digestion', body: ['Restriction endonucleases cut the DNA', 'into fragments of different lengths'] },
  { n: 4, head: 'Gel electrophoresis', body: ['Fragments separated by size', '(smaller fragments move faster)'] },
  { n: 5, head: 'Southern blotting', body: ['Fragments transferred to a nylon /', 'nitrocellulose membrane'] },
  { n: 6, head: 'Hybridisation', body: ['Labelled VNTR probe binds to', 'matching fragments'] },
  { n: 7, head: 'Autoradiography', body: ['X-ray film shows the band pattern', '= the DNA fingerprint'] },
];
const SY = (i: number) => 40 + i * 74, SH = 58, SX0 = 44, SX1 = 248;
/** Three lanes of three bands (the book's gel and blot): lane x and the band heights down the inset. */
const LANES: number[][] = [[0.2, 0.5, 0.74], [0.32, 0.62, 0.88], [0.2, 0.42, 0.74]];
function inset(s: Sketch, name: string, r: Rect, o: { dash?: string }) {
  box(s, name, r, { rx: 2, dash: o.dash, w: 1.7 });
  LANES.forEach((bands, k) => {
    const x = r[0] + 12 + k * 23;
    bands.forEach((f) => path(s, [[x - 7, r[1] + 6 + f * (r[3] - r[1] - 12)], [x + 7, r[1] + 6 + f * (r[3] - r[1] - 12)]], { w: 2.6, track: false }));
  });
}
function draw58(): Sketch {
  const s = new Sketch(W, 556);
  lab(s, 180, 22, 'DNA Fingerprinting: Workflow', { size: 14, bold: true });
  STEPS.forEach((st, i) => {
    const y = SY(i), name = `step ${st.n}`, hi = st.n === 6;
    box(s, name, [SX0, y, SX1, y + SH], { color: hi ? C.mari : C.ink, w: hi || st.n === 7 ? 2.4 : 1.7, dash: st.optional ? '6 4' : undefined });
    circ(s, 26, y + SH / 2, 12, { w: 1.8, track: false });
    lab(s, 26, y + SH / 2 + 4.5, String(st.n), { size: 13, bold: true });
    lab(s, (SX0 + SX1) / 2 + 2, y + 19, st.head, { size: 12, bold: true, color: hi ? C.amber : C.text, within: name });
    st.body.forEach((t, k) => lab(s, (SX0 + SX1) / 2 + 2, y + 35 + k * 13, t, { size: 10, color: C.slate, within: name }));
    if (i < STEPS.length - 1) arrow(s, [(SX0 + SX1) / 2, y + SH + 2], [(SX0 + SX1) / 2, SY(i + 1) - 2], { color: C.slate, w: 1.6 });
  });
  // the gel (beside step 4) and the blot (beside step 5)
  const G: Rect = [276, SY(3) + 8, 346, SY(3) + 60], M: Rect = [276, SY(4) + 30, 346, SY(4) + 82];
  lab(s, 311, SY(3) - 3, 'wells (−)', { size: 9.5, color: C.slate });
  inset(s, 'gel', G, {});
  [0, 1, 2].forEach((k) => s.add(`<rect x="${G[0] + 5 + k * 23}" y="${G[1] - 3}" width="14" height="6" fill="#fff" stroke="${C.ink}" stroke-width="1.4"/>`));
  lab(s, 282, G[3] + 14, 'Gel', { size: 10, anchor: 'start', color: C.slate });
  lab(s, 346, G[3] + 14, '(+)', { size: 10, anchor: 'end', color: C.slate });
  arrow(s, [SX1 + 2, SY(3) + SH / 2], [G[0] - 2, SY(3) + SH / 2], { color: C.slate, w: 1.3, dash: true });
  inset(s, 'blot', M, { dash: '5 4' });
  lab(s, 311, M[1] - 8, 'Membrane (blot)', { size: 9.5, color: C.slate });
  lab(s, 311, M[3] + 34, 'Labelled', { size: 10, color: C.amber });
  lab(s, 311, M[3] + 47, 'VNTR probe', { size: 10, color: C.amber });
  arrow(s, [SX1 + 2, SY(4) + 49], [M[0] - 2, SY(4) + 49], { color: C.slate, w: 1.3, dash: true });
  arrow(s, [311, M[3] + 21], [311, M[3] + 3], { color: C.mari, w: 1.5 });
  return s;
}
function check58(): Check[] {
  const s = draw58();
  return [
    ['Seven steps, numbered 1 to 7 in the book\'s order, each with the book\'s heading: DNA isolation, PCR amplification (optional), Restriction digestion, Gel electrophoresis, Southern blotting, Hybridisation, Autoradiography', STEPS.map((t) => t.n).join() === '1,2,3,4,5,6,7' && STEPS.every((t) => has(s, t.head)) && STEPS.every((t, i) => SY(i) < (i === 6 ? 1e9 : SY(i + 1)))],
    ['Only step 2 is optional (dashed box); it is the PCR step, which makes copies when the sample is tiny', STEPS.filter((t) => t.optional).map((t) => t.n).join() === '2' && STEPS[1].head.includes('PCR') && has(s, 'the sample is tiny')],
    ['Each step\'s description is the book\'s, wrapped to the box, including "smaller fragments move faster" for the gel', STEPS.every((t) => t.body.every((l) => has(s, l)))],
    ['The gel and the blot each carry three lanes of three bands (the blot is the gel\'s pattern transferred, so the same positions), and they hang off steps 4 and 5', LANES.length === 3 && LANES.every((l) => l.length === 3) && has(s, 'wells (−)') && hasAll(s, ['Gel', '(+)', 'Membrane (blot)'])],
    ['Hybridisation (step 6, the labelled VNTR probe) is the one highlight, and the probe is named beside the blot', marigolds(s) >= 1 && hasAll(s, ['Labelled', 'VNTR probe'])],
    ['Arrows join step 1 to 2 to ... to 7 (six) and two dashed arrows reach the gel and the blot', (s.svg().match(/<path d="M[^"]*Z" fill="#57534B"\/>/g) ?? []).length === 8],
    ...layout(s), clean(s),
  ];
}
const fig58: Diagram = { id: 'b12-05-fig-5.8', topic: 5, name: 'DNA fingerprinting workflow', cases: [{ chip: 'Southern blot workflow', cap: CAP58 }], draw: draw58, check: check58 };

export const DIAGRAMS_BIOLOGY_12_05: Diagram[] = [fig51, fig52, fig53, fig54, fig55, fig56, fig57, fig58];
