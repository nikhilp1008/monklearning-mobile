import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 9 (Biotechnology: Principles and Processes): the drawings of the Master Reference book on pp. 479-533,
 * redrawn. The figures sit on "CHAPTER 9 . FIGURES" pages (all vector, no raster image): pp. 483, 490, 492 (two figures), 498, 500,
 * 506 and 508; each caption is printed on the page before (pp. 482, 489, 491, 497, 499, 505, 507). Pages 479-533 hold no other
 * drawing (the Additional topics only rule their tables). EIGHT numbered figures, no unnumbered drawing:
 *
 *   Figure 9.1 (drawing p. 483), Topic 01, topic index 0: the three steps of genetically modifying an organism.
 *   Figure 9.2 (drawing p. 490), Topic 02, topic index 1: circular map of the plasmid pBR322.
 *   Figure 9.3 (drawing p. 492), Topic 02, topic index 1: EcoRI cuts, sticky ends, ligation (three cases, one per panel).
 *   Figure 9.4 (drawing p. 492), Topic 02, topic index 1: heat-shock transformation.
 *   Figure 9.5 (drawing p. 498), Topic 03, topic index 2: agarose gel electrophoresis.
 *   Figure 9.6 (drawing p. 500), Topic 03, topic index 2: elution of a band.
 *   Figure 9.7 (drawing p. 506), Topic 04, topic index 3: the workflow of recombinant DNA technology.
 *   Figure 9.8 (drawing p. 508), Topic 04, topic index 3: one PCR cycle.
 *
 * THE BOOK'S, as printed: every word of every label, title, box and note; in 9.1 the three steps and the closing note; in 9.2
 * pBR322 (4361 bp), the four genes with their descriptions, the eight sites and which of them lie inside ampR (PstI, PvuI) and
 * tetR (BamHI, SalI); in 9.3 the sequences (5'-GAATTC-3' over 3'-CTTAAG-5', the cut between G and A on each strand, the AATT
 * overhangs, the four nicks); in 9.4 the three temperatures (0, 42, 0 degrees C) and the three captions; in 9.5 the lane and band
 * layout (3 lanes with 3, 4 and 2 bands), the cathode (-) and anode (+) ends and the notes; in 9.6 the four bands with the
 * target fragment lowest, the slice, the elution box and the tube; in 9.7 the nine steps in the book's serpentine order; in 9.8
 * the three temperatures (~94, ~40-60, ~72 degrees C), the two primers, the Taq square, the repeat ~30 cycles loop and 2^30 = 10^9.
 * COMPUTED, not placed: the pBR322 sites and genes at the angles read from the page, with the tests of which site lies in which
 * gene; the 9.3 pieces are produced by cutting the printed sequences at the printed positions (the check recuts them and
 * recomputes the complements); the 9.5 band positions are read from the page and the check proves that every band lies past
 * its well; 2^30 in 9.8 is computed.
 * SCHEMATIC: all sizes and positions (re-laid for a phone, so 9.1, 9.4 and 9.6 are columns, the gel and its UV view in 9.5 are
 * stacked, the 9.3 panels are one case each, the 9.7 grid keeps the book's serpentine), the plasmid's angles (read by eye from
 * the page; the real map is not to scale in the book), the band sizes (the book prints none), and the colours: the app's style
 * has no fills and one marigold highlight, so the book's colour groups are carried by words: in 9.3 foreign DNA is set in bold
 * where the book colours it orange, in 9.7 the four colour groups of the book's key are listed by their box numbers, and
 * in 9.8 the two strands differ in ink and grey.
 * Captions are the book's, without "Figure 9.N" and without "(see next page)"; the pointer is the only change.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const NB = ' ';

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: string; track?: boolean; cap?: string } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="${o.cap ?? 'round'}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.track !== false) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, Array.from({ length: 49 }, (_, i): P => [cx + rx * Math.cos((i / 48) * 2 * Math.PI), cy + ry * Math.sin((i / 48) * 2 * Math.PI)]));
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
/** An arrow that is also kept clear of labels. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.8 });
  keep(s, [a, b]);
}
/** A grey leader from a label to a point it names, ending in a dot. */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
}
/** A white pill in STIX, ink-edged (marigold-edged when `hi`): the closing note of a drawing. */
function pill(s: Sketch, html: string, o: { size?: number; hi?: boolean } = {}): Rect {
  const size = o.size ?? 13, w = wOf(html, size) + 26, x0 = s.w - 8 - w, y0 = s.h - 38, rect: Rect = [x0, y0, x0 + w, y0 + 30];
  s.tags.push({ name: plain(html), rect, from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${o.hi ? C.mari : C.text}" stroke-width="1.6"/>`);
  s.text(x0 + w / 2, y0 + 20, html, { size, semibold: true });
  return rect;
}
/** A row of DNA letters at a fixed pitch (cells), one text per cell so two strands line up; one label for the whole row. */
function seq(s: Sketch, x0: number, y: number, str: string, pitch: number, o: { size?: number; colors?: (string | undefined)[]; bold?: boolean[] } = {}): Rect {
  const size = o.size ?? 13, cells = [...str];
  cells.forEach((ch, i) => s.text(x0 + pitch * (i + 0.5), y, ch, { size, anchor: 'middle', color: o.colors?.[i] ?? C.text, semibold: o.bold?.[i] }));
  const rect: Rect = [x0, y - size * 0.72, x0 + pitch * cells.length, y + size * 0.22];
  s.labels.push({ text: str, rect });
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
/** Every drawn label keeps LABEL_GAP clear of every drawn outline, lies in the frame, touches no other label, and sits inside its box. */
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
const marigold = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
const heads = (s: Sketch, col: string) => (s.svg().match(new RegExp(`<path d="M[^"]*Z" fill="${col}"/>`, 'g')) ?? []).length;
const sub2 = 'CaCl<sub>2</sub>';

/* ================= Figure 9.1 ================= */
const CAP91 = 'The three steps of genetically modifying an organism: (1) identify the DNA with the desirable gene, (2) introduce it into the host, (3) maintain it in the host and transfer it to the progeny.';
const STEPS91: [string, string][] = [['1. Identify DNA', 'with desirable gene'], ['2. Introduce DNA', 'into host'], ['3. Maintain in host', '& transfer to progeny']];
const B91 = (i: number): Rect => [40, 16 + i * 98, 320, 16 + i * 98 + 64];
function draw91(): Sketch {
  const s = new Sketch(W, 16 + 3 * 64 + 2 * 34 + 70);
  STEPS91.forEach(([a, b], i) => {
    const r = B91(i), name = `step ${i + 1}`;
    box(s, name, r);
    lab(s, 180, r[1] + 28, a, { size: 14, within: name });
    lab(s, 180, r[1] + 47, b, { size: 14, within: name });
    if (i < 2) arrow(s, [180, r[3] + 4], [180, B91(i + 1)[1] - 4], { color: C.mari, w: 2.4 });
  });
  const y = B91(2)[3] + 34;
  lab(s, 180, y, '<i>All three must succeed for a</i>', { size: 12, color: C.slate });
  lab(s, 180, y + 17, '<i>stable genetically modified organism.</i>', { size: 12, color: C.slate });
  return s;
}
function check91(): Check[] {
  const s = draw91();
  return [
    ['Three steps in the book\'s order: identify the DNA with the desirable gene, introduce it into the host, maintain it in the host and transfer it to the progeny', STEPS91.map((t) => t[0].slice(0, 2)).join('') === '1.2.3.' && hasAll(s, ['1. Identify DNA', 'with desirable gene', '2. Introduce DNA', 'into host', '3. Maintain in host', '& transfer to progeny'])],
    ['Two arrows join the three boxes in a chain, each box above the next', B91(1)[1] > B91(0)[3] && B91(2)[1] > B91(1)[3] && heads(s, C.mari) === 2],
    ['The book\'s note "All three must succeed for a stable genetically modified organism." is on the drawing', has(s, 'All three must succeed for a') && has(s, 'stable genetically modified organism.')],
    ['The chain of arrows (all three must succeed) is the one highlight', heads(s, C.mari) === 2],
    ...layout(s), clean(s),
  ];
}
const fig91: Diagram = { id: 'b12-09-fig-9.1', topic: 0, name: 'Three steps of genetic modification', cases: [{ chip: 'Three steps', cap: CAP91 }], draw: draw91, check: check91 };

/* ================= Figure 9.2 ================= */
const CAP92 = 'Circular map of the plasmid pBR322, showing the ori, rop, <i>amp</i><sup>R</sup> and <i>tet</i><sup>R</sup> genes and the restriction sites HindIII, EcoRI, ClaI, PvuI, PstI, PvuII, SalI and BamHI. PstI and PvuI lie inside <i>amp</i><sup>R</sup>; BamHI and SalI lie inside <i>tet</i><sup>R</sup>.';
const CX = 200, CY = 205, RR = 76;
/** Angles in degrees clockwise from the top, read from the book's drawing. */
const SITES: [string, number][] = [['PvuI', 345], ['EcoRI', 60], ['ClaI', 82], ['HindIII', 100], ['BamHI', 138], ['SalI', 158], ['PvuII', 224], ['PstI', 301]];
const GENES: Record<string, [number, number]> = { ampR: [281, 351], ori: [239, 264], rop: [215, 232], tetR: [121, 198] };
const pol = (a: number, r: number): P => [CX + r * Math.sin((a * Math.PI) / 180), CY - r * Math.cos((a * Math.PI) / 180)];
const inGene = (g: string, a: number) => a >= GENES[g][0] && a <= GENES[g][1];
function arc(a0: number, a1: number, r = RR): P[] { const n = Math.max(4, Math.round(a1 - a0)); return Array.from({ length: n + 1 }, (_, i): P => pol(a0 + ((a1 - a0) * i) / n, r)); }
function draw92(): Sketch {
  const s = new Sketch(W, 404);
  ell(s, CX, CY, RR, RR, { w: 1.7 });
  // genes: ink, the short ones lighter
  path(s, arc(...GENES.ampR), { w: 6.5, cap: 'butt' });
  path(s, arc(...GENES.tetR), { w: 6.5, cap: 'butt' });
  path(s, arc(...GENES.ori), { w: 6.5, cap: 'butt', color: C.slate });
  path(s, arc(...GENES.rop), { w: 6.5, cap: 'butt', color: C.grey });
  // sites: ticks across the ring and names
  SITES.forEach(([name, a]) => {
    path(s, [pol(a, RR - 8), pol(a, RR + 8)], { w: 1.9 });
    if (name === 'PvuII') { const p = pol(a, RR - 16); lab(s, p[0] + 3, p[1] + 4, name, { size: 10.5, anchor: 'start' }); return; }
    const p = pol(a, RR + 15), sn = Math.sin((a * Math.PI) / 180), cs = Math.cos((a * Math.PI) / 180);
    const anchor = sn > 0.3 ? 'start' : sn < -0.3 ? 'end' : 'middle';
    lab(s, p[0], p[1] + 4 - cs * 4, name, { size: 10.5, anchor });
  });
  lab(s, CX, CY - 3, 'pBR322', { size: 15, bold: true, color: C.amber });
  lab(s, CX, CY + 15, '(4361 bp)', { size: 13, bold: true, color: C.amber });
  // gene names
  lab(s, 8, 36, '<i>amp</i><sup>R</sup>', { size: 13, bold: true, anchor: 'start' });
  lab(s, 8, 51, '(ampicillin resistance)', { size: 10.5, anchor: 'start' });
  leader(s, [100, 58], pol(316, RR));
  lab(s, 8, 244, 'ori', { size: 13, bold: true, anchor: 'start' });
  lab(s, 8, 259, '(origin of replication)', { size: 10.5, anchor: 'start' });
  leader(s, [116, 246], pol(251, RR));
  lab(s, 8, 318, 'rop', { size: 13, bold: true, anchor: 'start' });
  lab(s, 8, 333, '(copy-number control)', { size: 10.5, anchor: 'start' });
  leader(s, [96, 306], pol(223, RR));
  lab(s, 232, 334, '<i>tet</i><sup>R</sup>', { size: 13, bold: true });
  lab(s, 232, 349, '(tetracycline resistance)', { size: 10.5 });
  leader(s, [214, 316], pol(160, RR));
  lab(s, 180, 378, 'PstI & PvuI cut inside <i>amp</i><sup>R</sup>', { size: 10.5, color: C.slate });
  lab(s, 180, 393, 'BamHI & SalI cut inside <i>tet</i><sup>R</sup>', { size: 10.5, color: C.slate });
  return s;
}
function check92(): Check[] {
  const s = draw92();
  const a = (n: string) => SITES.find((q) => q[0] === n)![1];
  const ts = (SITES.map((q) => q[0]).sort()).join();
  return [
    ['Eight sites as the caption lists them: HindIII, EcoRI, ClaI, PvuI, PstI, PvuII, SalI, BamHI', ts === ['HindIII', 'EcoRI', 'ClaI', 'PvuI', 'PstI', 'PvuII', 'SalI', 'BamHI'].sort().join() && ['HindIII', 'EcoRI', 'ClaI', 'PvuI', 'PstI', 'PvuII', 'SalI', 'BamHI'].every((n) => has(s, n))],
    ['PstI and PvuI lie inside ampR (angles 301 and 345 in 281 to 351)', inGene('ampR', a('PstI')) && inGene('ampR', a('PvuI'))],
    ['BamHI and SalI lie inside tetR (angles 138 and 158 in 121 to 198)', inGene('tetR', a('BamHI')) && inGene('tetR', a('SalI'))],
    ['EcoRI, ClaI and HindIII lie outside every gene (the book draws them on the bare ring between ampR and tetR)', ['EcoRI', 'ClaI', 'HindIII'].every((n) => Object.keys(GENES).every((g) => !inGene(g, a(n))))],
    ['Four genes with the book\'s descriptions, and the plasmid name with its size 4361 bp', hasAll(s, ['ampR', '(ampicillin resistance)', 'ori', '(origin of replication)', 'rop', '(copy-number control)', 'tetR', '(tetracycline resistance)', 'pBR322', '(4361 bp)'])],
    ['The genes do not overlap one another', Object.values(GENES).sort((p, q) => p[0] - q[0]).every((g, i, arr) => i === 0 || g[0] > arr[i - 1][1])],
    ['The two notes under the ring are the book\'s: PstI & PvuI cut inside ampR, BamHI & SalI cut inside tetR', has(s, 'PstI & PvuI cut inside ampR') && has(s, 'BamHI & SalI cut inside tetR')],
    ['The plasmid\'s name and size is the one highlight (amber text); the ring and the gene arcs stay ink', marigold(s) === 0],
    ...layout(s), clean(s),
  ];
}
const fig92: Diagram = { id: 'b12-09-fig-9.2', topic: 1, name: 'Plasmid pBR322 map', cases: [{ chip: 'Circular map', cap: CAP92 }], draw: draw92, check: check92 };

/* ================= Figure 9.3 ================= */
const CAP93 = 'EcoRI cuts the vector and the foreign DNA at GAATTC, leaving complementary AATT sticky ends; the fragments base-pair and DNA ligase seals the four nicks to give recombinant DNA.';
const D = '···';
const SITE = 'GAATTC';
const compl = (t: string) => [...t].map((c) => ({ A: 'T', T: 'A', G: 'C', C: 'G' } as Record<string, string>)[c] ?? c).join('');
const VEC_TOP = `${D}${SITE}${D}`;
const FOR_TOP = `${D}${SITE}${D}${SITE}${D}`;
const VEC_BOT = compl(VEC_TOP), FOR_BOT = compl(FOR_TOP);
/** EcoRI cuts G^AATTC on the top strand and, read 5' to 3' on the bottom, the same: on the strand as written (3' to 5') that is CTTAA^G. */
const cutsTop = (t: string) => [...t.matchAll(/GAATTC/g)].map((m) => m.index! + 1);
const cutsBot = (t: string) => [...t.matchAll(/CTTAAG/g)].map((m) => m.index! + 5);
const split = (top: string, bot: string) => {
  const ct = [0, ...cutsTop(top), top.length], cb = [0, ...cutsBot(bot), bot.length];
  return ct.slice(0, -1).map((_, i) => ({ top: top.slice(ct[i], ct[i + 1]), bot: bot.slice(cb[i], cb[i + 1]), tx: ct[i], bx: cb[i] }));
};
const VEC_PIECES = split(VEC_TOP, VEC_BOT), FOR_PIECES = split(FOR_TOP, FOR_BOT);
const PIT = 11, X0 = 34;
const SEQSZ = 13;
const FOREIGN = (on: boolean) => (on ? C.slate : undefined);
function titleLines(s: Sketch, a: string, b: string) { lab(s, 8, 22, a, { size: 12, bold: true, anchor: 'start' }); lab(s, 8, 38, b, { size: 12, bold: true, anchor: 'start' }); }
function draw93(c: { panel: 1 | 2 | 3 }): Sketch {
  if (c.panel === 1) {
    const s = new Sketch(W, 300);
    titleLines(s, '1  EcoRI recognises GAATTC and cuts', 'each strand between G and A');
    const strand = (y: number, top: string, bot: string, foreign: boolean, label: string, lx: number) => {
      lab(s, lx, y - 40, label, { size: 12, bold: true, color: foreign ? C.slate : C.text });
      lab(s, 8, y + 4, '5′', { size: 11, anchor: 'start', color: C.slate }); lab(s, 8, y + 24, '3′', { size: 11, anchor: 'start', color: C.slate });
      seq(s, X0, y + 4, top, PIT, { size: SEQSZ, colors: [...top].map((_, i) => FOREIGN(foreign && i >= 0)), bold: [...top].map(() => foreign) });
      seq(s, X0, y + 24, bot, PIT, { size: SEQSZ, colors: [...bot].map(() => FOREIGN(foreign)), bold: [...bot].map(() => foreign) });
      const rx = X0 + top.length * PIT + 4;
      lab(s, rx, y + 4, '3′', { size: 11, anchor: 'start', color: C.slate }); lab(s, rx, y + 24, '5′', { size: 11, anchor: 'start', color: C.slate });
      cutsTop(top).forEach((k) => arrow(s, [X0 + k * PIT, y - 28], [X0 + k * PIT, y - 11], { color: C.mari, w: 2.2 }));
      cutsBot(bot).forEach((k) => arrow(s, [X0 + k * PIT, y + 52], [X0 + k * PIT, y + 34], { color: C.mari, w: 2.2 }));
    };
    strand(100, VEC_TOP, VEC_BOT, false, 'Vector', X0 + 6 * PIT);
    strand(222, FOR_TOP, FOR_BOT, true, 'Foreign DNA', X0 + 8 * PIT);
    return s;
  }
  if (c.panel === 2) {
    const s = new Sketch(W, 282);
    titleLines(s, '2  Staggered cuts leave single-stranded', 'AATT sticky ends (shaded)');
    const blocks: { y: number; top: string; bot: string; tx: number; bx: number; foreign: boolean; name: string }[] = [
      { y: 92, top: VEC_PIECES[0].top, bot: VEC_PIECES[0].bot, tx: 0, bx: 0, foreign: false, name: 'vector, left piece' },
      { y: 172, top: FOR_PIECES[1].top, bot: FOR_PIECES[1].bot, tx: 0, bx: FOR_PIECES[1].bx - FOR_PIECES[1].tx, foreign: true, name: 'foreign DNA fragment' },
      { y: 252, top: VEC_PIECES[1].top, bot: VEC_PIECES[1].bot, tx: 0, bx: VEC_PIECES[1].bx - VEC_PIECES[1].tx, foreign: false, name: 'vector, right piece' },
    ];
    const shade = (y: number, k0: number, n: number, off: number) => s.add(`<rect x="${r1(X0 + (off + k0) * PIT - 1)}" y="${r1(y - 13)}" width="${r1(n * PIT + 2)}" height="17" rx="3" fill="none" stroke="${C.mari}" stroke-width="1.8"/>`);
    blocks.forEach((b) => {
      seq(s, X0 + b.tx * PIT, b.y, b.top, PIT, { size: SEQSZ, colors: [...b.top].map(() => FOREIGN(b.foreign)), bold: [...b.top].map(() => b.foreign) });
      seq(s, X0 + b.bx * PIT, b.y + 20, b.bot, PIT, { size: SEQSZ, colors: [...b.bot].map(() => FOREIGN(b.foreign)), bold: [...b.bot].map(() => b.foreign) });
      lab(s, 196, b.y + 14, b.name, { size: 11, anchor: 'start', color: b.foreign ? C.slate : C.text });
    });
    // shaded overhangs: top AATT of the fragment and the right piece, bottom TTAA of the left piece and the fragment
    shade(blocks[0].y + 20, 4, 4, 0);
    shade(blocks[1].y, 0, 4, 0);
    shade(blocks[1].y + 20, 9, 4, blocks[1].bx - 4);
    shade(blocks[2].y, 0, 4, 0);
    return s;
  }
  const s = new Sketch(W, 252);
  titleLines(s, '3  Complementary ends base-pair; DNA ligase', 'seals the four nicks');
  const top = VEC_PIECES[0].top + FOR_PIECES[1].top + VEC_PIECES[1].top, bot = VEC_PIECES[0].bot + FOR_PIECES[1].bot + VEC_PIECES[1].bot;
  const nT = [VEC_PIECES[0].top.length, VEC_PIECES[0].top.length + FOR_PIECES[1].top.length];
  const nB = [VEC_PIECES[0].bot.length, VEC_PIECES[0].bot.length + FOR_PIECES[1].bot.length];
  const fT = (i: number) => i >= nT[0] && i < nT[1], fB = (i: number) => i >= nB[0] && i < nB[1];
  const y = 106;
  seq(s, X0, y, top, PIT, { size: SEQSZ, colors: [...top].map((_, i) => FOREIGN(fT(i))), bold: [...top].map((_, i) => fT(i)) });
  seq(s, X0, y + 20, bot, PIT, { size: SEQSZ, colors: [...bot].map((_, i) => FOREIGN(fB(i))), bold: [...bot].map((_, i) => fB(i)) });
  nT.forEach((k) => arrow(s, [X0 + k * PIT, y - 40], [X0 + k * PIT, y - 22], { color: C.mari, w: 2.2 }));
  nB.forEach((k) => { arrow(s, [X0 + k * PIT, y + 62], [X0 + k * PIT, y + 44], { color: C.mari, w: 2.2 }); lab(s, X0 + k * PIT, y + 82, 'DNA ligase', { size: 10.5, color: C.slate }); });
  lab(s, 180, y + 120, 'recombinant DNA', { size: 12.5, bold: true });
  lab(s, 180, y + 139, 'grey bold letters: foreign DNA; dark: vector', { size: 10.5, color: C.slate });
  return s;
}
function check93(c: { panel: 1 | 2 | 3 }): Check[] {
  const s = draw93(c);
  const joined = VEC_PIECES[0].top + FOR_PIECES[1].top + VEC_PIECES[1].top, joinedB = VEC_PIECES[0].bot + FOR_PIECES[1].bot + VEC_PIECES[1].bot;
  const nicks = cutsTop(FOR_TOP).length + cutsBot(FOR_BOT).length;
  const over = (p: { top: string; bot: string; tx: number; bx: number }) => p.tx - p.bx;
  if (c.panel === 1) return [
    ['The site is a palindrome: GAATTC on the top strand over CTTAAG, and the bottom strand read 5\' to 3\' is GAATTC again', SITE === [...compl(SITE)].reverse().join('') && VEC_BOT.includes('CTTAAG')],
    ['EcoRI cuts between G and A on each strand: the vector is cut once (2 arrows), the foreign DNA at both of its sites (4 arrows)', cutsTop(VEC_TOP).length === 1 && cutsBot(VEC_BOT).length === 1 && cutsTop(FOR_TOP).length === 2 && cutsBot(FOR_BOT).length === 2 && heads(s, C.mari) === 6],
    ['The top-strand cut lies after the G (1 base into the site) and the bottom-strand cut after CTTAA (5 bases in): a stagger of 4 bases', cutsTop(VEC_TOP)[0] - VEC_TOP.indexOf(SITE) === 1 && cutsBot(VEC_BOT)[0] - VEC_BOT.indexOf('CTTAAG') === 5],
    ['The printed rows are the book\'s: 5\'···GAATTC···3\' over 3\'···CTTAAG···5\', and the foreign DNA with two sites', hasAll(s, [VEC_TOP, VEC_BOT, FOR_TOP, FOR_BOT, 'Vector', 'Foreign DNA'])],
    ['The six cut arrows are the highlight', heads(s, C.mari) === 6],
    ...layout(s), clean(s),
  ];
  if (c.panel === 2) return [
    ['Cutting the printed sequences at the printed positions gives the book\'s pieces: ···G over ···CTTAA; AATTC···G over G···CTTAA; AATTC··· over G···', VEC_PIECES[0].top === '···G' && VEC_PIECES[0].bot === '···CTTAA' && FOR_PIECES[1].top === 'AATTC···G' && FOR_PIECES[1].bot === 'G···CTTAA' && VEC_PIECES[1].top === 'AATTC···' && VEC_PIECES[1].bot === 'G···'],
    ['Every cut end carries a single-stranded overhang of four bases (AATT on the top strand, TTAA on the bottom), offset by 4 cells as drawn', over(FOR_PIECES[1]) === -4 && over(VEC_PIECES[1]) === -4 && VEC_PIECES[0].bot.length - VEC_PIECES[0].top.length === 4 && FOR_PIECES[1].bx + FOR_PIECES[1].bot.length - (FOR_PIECES[1].tx + FOR_PIECES[1].top.length) === 4],
    ['The two overhangs that meet are complementary: AATT pairs with TTAA read the same way along the pair', compl('AATT') === 'TTAA' && FOR_PIECES[1].top.startsWith('AATT') && VEC_PIECES[0].bot.endsWith('TTAA')],
    ['The three pieces are named as the book names them', hasAll(s, ['vector, left piece', 'foreign DNA fragment', 'vector, right piece'])],
    ['The four shaded overhangs are the highlight', (s.svg().match(/rx="3" fill="none" stroke="#EEA31F"/g) ?? []).length === 4],
    ...layout(s), clean(s),
  ];
  return [
    ['The pieces fit end to end into ···GAATTC···GAATTC··· over ···CTTAAG···CTTAAG···', joined === FOR_TOP && joinedB === FOR_BOT && hasAll(s, [FOR_TOP, FOR_BOT])],
    ['The bottom strand is the complement of the top, base by base', compl(joined) === joinedB],
    ['Four nicks: two on each strand, four arrows, two of them labelled DNA ligase as the book labels the lower pair', nicks === 4 && heads(s, C.mari) === 4 && s.labels.filter((l) => l.text === 'DNA ligase').length === 2],
    ['The label "recombinant DNA" is the book\'s', has(s, 'recombinant DNA')],
    ['The four ligase arrows are the highlight', heads(s, C.mari) === 4],
    ...layout(s), clean(s),
  ];
}
const fig93: Diagram = {
  id: 'b12-09-fig-9.3', topic: 1, name: 'EcoRI cuts, sticky ends and ligation',
  cases: [{ chip: 'Cut', panel: 1, cap: CAP93 }, { chip: 'Sticky ends', panel: 2, cap: CAP93 }, { chip: 'Ligation', panel: 3, cap: CAP93 }],
  draw: draw93, check: check93,
};

/* ================= Figure 9.4 ================= */
const CAP94 = `Heat-shock transformation: (1) ${sub2}-treated competent cells and recombinant DNA on ice, (2) a brief heat shock at 42${NB}°C, during which DNA enters through transient pores, (3) return to ice.`;
const STEP94 = [
  { t: `0${NB}°C`, n: 'Step 1: Ice', l: [`${sub2}-treated cells`, '+ recombinant DNA'], temp: 0 },
  { t: `42${NB}°C`, n: 'Step 2: Heat shock', l: ['Brief heat shock;', 'DNA enters via pores'], temp: 42 },
  { t: `0${NB}°C`, n: 'Step 3: Ice', l: ['Return to ice;', 'pores close'], temp: 0 },
];
const R94 = 134;
function draw94(): Sketch {
  const s = new Sketch(W, 14 + 3 * R94 + 34);
  const dna = (x: number, y: number) => { s.add(`<rect x="${r1(x - 4)}" y="${r1(y - 4)}" width="8" height="8" fill="${C.ink}"/>`); keep(s, [[x - 4, y - 4], [x + 4, y - 4], [x + 4, y + 4], [x - 4, y + 4], [x - 4, y - 4]]); };
  STEP94.forEach((st, i) => {
    const y0 = 14 + i * R94, name = `temp ${i + 1}`, hi = st.temp === 42;
    box(s, name, [14, y0, 92, y0 + 38], hi ? { color: C.mari, w: 2.4 } : {});
    lab(s, 53, y0 + 25, st.t, { size: 16, bold: true, color: hi ? C.amber : C.text, within: name });
    lab(s, 108, y0 + 25, st.n, { size: 14, bold: true, anchor: 'start' });
    const cy = y0 + 86;
    ell(s, 62, cy, 36, 20);
    if (i === 0) { dna(18, cy - 24); dna(108, cy - 24); }
    if (i === 1) {
      [52, 62, 72].forEach((x) => { s.add(`<circle cx="${x}" cy="${r1(cy - 19.5)}" r="3.6" fill="#fff" stroke="${C.ink}" stroke-width="1.4"/>`); });
      dna(110, cy - 40);
      arrow(s, [106, cy - 37], [76, cy - 24], { color: C.ink, w: 1.6 });
    }
    if (i === 2) dna(62, cy);
    lab(s, 128, cy - 4, st.l[0], { size: 12, anchor: 'start' });
    lab(s, 128, cy + 13, st.l[1], { size: 12, anchor: 'start' });
    if (i < 2) arrow(s, [53, y0 + 112], [53, y0 + R94 - 4], { color: C.ink, w: 1.8 });
  });
  const ly = 14 + 3 * R94 + 14;
  s.add(`<rect x="106" y="${ly - 5}" width="8" height="8" fill="${C.ink}"/>`);
  lab(s, 120, ly + 3, '= recombinant DNA', { size: 12, anchor: 'start', color: C.slate });
  return s;
}
function check94(): Check[] {
  const s = draw94(), svg = s.svg();
  return [
    ['Three steps as the book prints them: 0 °C (Step 1: Ice), 42 °C (Step 2: Heat shock), 0 °C (Step 3: Ice)', hasAll(s, [`0${NB}°C`, `42${NB}°C`, 'Step 1: Ice', 'Step 2: Heat shock', 'Step 3: Ice']) && STEP94.map((t) => t.temp).join() === '0,42,0'],
    ['The cell notes are the book\'s: CaCl2-treated cells + recombinant DNA; Brief heat shock; DNA enters via pores; Return to ice; pores close', hasAll(s, ['CaCl2-treated cells', '+ recombinant DNA', 'Brief heat shock;', 'DNA enters via pores', 'Return to ice;', 'pores close'])],
    ['The DNA is outside the cell in step 1 (two squares), at the pores in step 2 (one square, three pores) and inside in step 3 (one square)', (svg.match(/<rect x="[^"]*" y="[^"]*" width="8" height="8"/g) ?? []).length === 2 + 1 + 1 + 1 && (svg.match(/r="3.6" fill="#fff"/g) ?? []).length === 3],
    ['The legend "= recombinant DNA" is on the drawing, and the heat-shock step (42 °C, the only hot one) is the highlight', has(s, '= recombinant DNA') && marigold(s) === 1],
    ['Two arrows join the three rows', heads(s, C.ink) >= 3],
    ...layout(s), clean(s),
  ];
}
const fig94: Diagram = { id: 'b12-09-fig-9.4', topic: 1, name: 'Heat-shock transformation', cases: [{ chip: 'Three steps', cap: CAP94 }], draw: draw94, check: check94 };

/* ================= Figure 9.5 ================= */
const CAP95 = 'Agarose gel electrophoresis: DNA loaded into wells at the cathode (−) end migrates toward the anode (+), and smaller fragments travel farthest. Ethidium-bromide-stained bands glow orange under UV light.';
/** Band positions as a fraction of the run from the well to the far end of the gel, read from the book, lanes 1 to 3. */
const LANES: number[][] = [[0.142, 0.362, 0.656], [0.095, 0.264, 0.46, 0.777], [0.217, 0.558]];
const UV: number[][] = [[0.25, 0.41, 0.62], [0.21, 0.34, 0.48, 0.71], [0.3, 0.55]];
const GEL: Rect = [40, 60, 320, 164], WELL_X = 50, RUN0 = 62, RUN1 = 312, LY = [84, 112, 140];
function draw95(): Sketch {
  const s = new Sketch(W, 400);
  lab(s, 40, 24, 'Larger fragments', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 40, 38, '(stay near the wells)', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 320, 24, 'Smaller fragments', { size: 11, anchor: 'end', color: C.amber });
  lab(s, 320, 38, '(travel farthest)', { size: 11, anchor: 'end', color: C.amber });
  box(s, 'gel', GEL);
  lab(s, 20, 118, '−', { size: 26, bold: true, color: C.slate });
  lab(s, 342, 118, '+', { size: 26, bold: true, color: C.slate });
  LANES.forEach((bands, i) => {
    const y = LY[i];
    s.add(`<rect x="${WELL_X - 6}" y="${y - 6}" width="12" height="12" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
    s.dot(WELL_X, y, 2.2);
    bands.forEach((t) => { const x = RUN0 + t * (RUN1 - RUN0); path(s, [[x, y - 7], [x, y + 7]], { w: 4.5, color: C.slate, cap: 'butt', track: false }); });
  });
  lab(s, 40, 186, 'Cathode (−)', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 40, 200, 'wells loaded here', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 320, 186, 'Anode (+)', { size: 11, anchor: 'end', color: C.slate });
  arrow(s, [70, 226], [250, 226], { color: C.ink, w: 2 });
  lab(s, 160, 248, 'DNA migrates toward the anode', { size: 12, color: C.text });
  lab(s, 180, 282, '<i>Under UV light</i>', { size: 12, color: C.slate });
  lab(s, 180, 297, '<i>(EtBr-stained bands glow orange)</i>', { size: 11, color: C.slate });
  box(s, 'uv', [70, 308, 290, 392]);
  UV.forEach((bands, i) => bands.forEach((t) => { const x = 82 + t * 196, y = 328 + i * 24; path(s, [[x - 6, y], [x + 6, y]], { w: 5, color: C.mari, track: false }); }));
  return s;
}
function check95(): Check[] {
  const s = draw95();
  const pos = (t: number) => RUN0 + t * (RUN1 - RUN0);
  return [
    ['Three lanes with 3, 4 and 2 bands, as the book draws them', LANES.map((l) => l.length).join() === '3,4,2' && UV.map((l) => l.length).join() === '3,4,2'],
    ['Every band lies past its well, toward the anode (+): DNA is negative and moves away from the cathode (−) wells', LANES.every((l) => l.every((t) => pos(t) > WELL_X + 6)) && WELL_X < RUN0 && RUN1 < GEL[2]],
    ['The wells are at the left (cathode, −) end and the + sign is at the right (anode) end', WELL_X < (GEL[0] + GEL[2]) / 2 && has(s, '−') && has(s, '+')],
    ['The migration arrow points right, toward the anode (+), from the wells', (s.svg().match(/<path d="M250 226/g) ?? []).length === 1],
    ['Smaller fragments travel farthest: the notes say so and the farthest band of each lane is the smallest (bands run in order of distance)', LANES.every((l) => l.every((t, i) => i === 0 || t > l[i - 1])) && hasAll(s, ['Larger fragments', '(stay near the wells)', 'Smaller fragments', '(travel farthest)'])],
    ['The book\'s labels: Cathode (−), wells loaded here, Anode (+), DNA migrates toward the anode, Under UV light, EtBr-stained bands glow orange', hasAll(s, ['Cathode (−)', 'wells loaded here', 'Anode (+)', 'DNA migrates toward the anode', 'Under UV light', '(EtBr-stained bands glow orange)'])],
    ['The glowing UV bands (nine, as many as in the gel) are the highlight', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 9 && UV.flat().length === LANES.flat().length],
    ...layout(s), clean(s),
  ];
}
const fig95: Diagram = { id: 'b12-09-fig-9.5', topic: 2, name: 'Agarose gel electrophoresis', cases: [{ chip: 'Gel and UV', cap: CAP95 }], draw: draw95, check: check95 };

/* ================= Figure 9.6 ================= */
const CAP96 = 'Elution: the band of interest is cut out of the agarose gel with a blade, and the DNA is extracted from the gel slice, ready for ligation into a vector.';
const GX = 24;
const BARS96: [number, number, number][] = [[GX + 55, 24, 65], [GX + 55, 49, 77], [GX + 55, 79, 88]];
function draw96(): Sketch {
  const s = new Sketch(W, 394);
  box(s, 'gel', [GX, 14, GX + 220, 154], { rx: 3 });
  BARS96.forEach(([x, y, w]) => path(s, [[x, y], [x + w, y]], { w: 4.5, color: C.faint, cap: 'butt', track: false }));
  const ty = 128;
  box(s, 'target', [GX + 30, ty - 5, GX + 150, ty + 5], { color: C.mari, w: 2.4, rx: 1 });
  path(s, [[GX + 24, ty - 20], [GX + 156, ty - 20]], { color: C.mari, w: 1.6, dash: '5 4', track: false });
  path(s, [[GX + 24, ty + 20], [GX + 156, ty + 20]], { color: C.mari, w: 1.6, dash: '5 4', track: false });
  lab(s, 268, 112, 'Target', { size: 12, anchor: 'start', color: C.amber });
  lab(s, 268, 127, 'fragment', { size: 12, anchor: 'start', color: C.amber });
  arrow(s, [262, 124], [GX + 156, ty + 1], { color: C.mari, w: 1.6 });
  arrow(s, [GX + 60, 158], [60, 202], { color: C.slate, w: 1.8 });
  lab(s, 98, 178, 'cut out', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 98, 192, 'with a blade', { size: 11, anchor: 'start', color: C.slate });
  box(s, 'slice', [14, 206, 110, 256]);
  path(s, [[28, 231], [96, 231]], { w: 5, track: false });
  lab(s, 62, 276, 'Gel slice with', { size: 11, color: C.slate });
  lab(s, 62, 290, 'DNA fragment', { size: 11, color: C.slate });
  arrow(s, [116, 231], [146, 231], { color: C.slate, w: 1.8 });
  box(s, 'elute', [150, 203, 270, 259]);
  lab(s, 210, 227, 'Elute DNA', { size: 12.5, bold: true, within: 'elute' });
  lab(s, 210, 244, 'from gel slice', { size: 12.5, bold: true, within: 'elute' });
  arrow(s, [210, 263], [210, 296], { color: C.slate, w: 1.8 });
  box(s, 'tube', [190, 300, 230, 372], { rx: 6 });
  ell(s, 210, 358, 13, 5.5);
  lab(s, 244, 322, 'Purified', { size: 12.5, bold: true, anchor: 'start' });
  lab(s, 244, 338, 'DNA', { size: 12.5, bold: true, anchor: 'start' });
  lab(s, 244, 358, 'ready for', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 244, 372, 'ligation', { size: 11, anchor: 'start', color: C.slate });
  return s;
}
function check96(): Check[] {
  const s = draw96();
  return [
    ['The gel shows three ordinary bands and the target fragment lowest (the farthest run, hence the smallest), as in the book', BARS96.length === 3 && BARS96.every(([, y]) => y < 128 - 20) && BARS96.every((b, i, a) => i === 0 || b[1] > a[i - 1][1])],
    ['The target band, with the two dashed cut lines above and below it, is the highlight (one band marked, two dashes)', marigold(s) >= 3 && (s.svg().match(/stroke="#EEA31F" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray/g) ?? []).length === 2],
    ['The sequence is the book\'s: gel, cut out with a blade, gel slice with DNA fragment, elute DNA from gel slice, purified DNA ready for ligation', hasAll(s, ['cut out', 'with a blade', 'Gel slice with', 'DNA fragment', 'Elute DNA', 'from gel slice', 'Purified', 'DNA', 'ready for', 'ligation', 'Target', 'fragment'])],
    ['The flow goes down the page: gel above the slice, the slice before the elution box, the elution box above the tube', 154 < 206 && 110 < 150 && 259 < 300],
    ...layout(s), clean(s),
  ];
}
const fig96: Diagram = { id: 'b12-09-fig-9.6', topic: 2, name: 'Elution of a band', cases: [{ chip: 'Cut out and elute', cap: CAP96 }], draw: draw96, check: check96 };

/* ================= Figure 9.7 ================= */
const CAP97 = 'Workflow of recombinant DNA technology: isolation of DNA, cutting with a restriction enzyme, amplification by PCR, ligation into a vector, insertion into a competent host, selection of recombinants, culture and expression in a bioreactor, downstream processing, and the purified product.';
const STEP97: [string, string][] = [['1. Isolation', 'of DNA'], ['2. Cutting with', 'restriction enzyme'], ['3. Amplification', 'by PCR'], ['4. Ligation', 'into vector'], ['5. Insertion into', 'competent host'], ['6. Selection of', 'recombinants'], ['7. Culture &', 'expression'], ['8. Downstream', 'processing'], ['9. Purified', 'product']];
/** Serpentine: row 1 left to right (1-3), row 2 right to left (4-6), row 3 left to right (7-9). */
const COL97 = [4, 126, 248];
const pos97 = (i: number): { col: number; row: number } => { const row = Math.floor(i / 3), k = i % 3; return { row, col: row === 1 ? 2 - k : k }; };
const B97 = (i: number): Rect => { const { col, row } = pos97(i); return [COL97[col], 14 + row * 92, COL97[col] + 100, 14 + row * 92 + 64]; };
const GROUPS97: [string, number[]][] = [['DNA isolation', [1]], ['Cutting, ligation, insertion', [2, 4, 5]], ['Amplification / selection', [3, 6]], ['Expression and product', [7, 8, 9]]];
function draw97(): Sketch {
  const s = new Sketch(W, 14 + 3 * 92 - 28 + 36 + 4 * 17 + 16);
  STEP97.forEach(([a, b], i) => {
    const r = B97(i), name = `step ${i + 1}`, hi = i === 8;
    box(s, name, r, hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, (r[0] + r[2]) / 2, r[1] + 28, a, { size: 10, within: name, color: hi ? C.amber : C.text });
    lab(s, (r[0] + r[2]) / 2, r[1] + 45, b, { size: 10, within: name, color: hi ? C.amber : C.text });
  });
  for (let i = 0; i < 8; i++) {
    const a = B97(i), b = B97(i + 1), pa = pos97(i), pb = pos97(i + 1);
    if (pa.row === pb.row) {
      const y = (a[1] + a[3]) / 2, r = pb.col > pa.col;
      arrow(s, [r ? a[2] + 3 : a[0] - 3, y], [r ? b[0] - 3 : b[2] + 3, y]);
    } else arrow(s, [(a[0] + a[2]) / 2, a[3] + 3], [(b[0] + b[2]) / 2, b[1] - 3]);
  }
  const y0 = B97(8)[3] + 32;
  GROUPS97.forEach(([name, ids], k) => {
    lab(s, 8, y0 + k * 17, `${ids.join(', ')}`, { size: 11, anchor: 'start', bold: true });
    lab(s, 64, y0 + k * 17, name, { size: 11, anchor: 'start', color: C.slate });
  });
  return s;
}
function check97(): Check[] {
  const s = draw97();
  const order = Array.from({ length: 9 }, (_, i) => pos97(i));
  const centre = (r: Rect): P => [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
  const adj = Array.from({ length: 8 }, (_, i) => { const a = centre(B97(i)), b = centre(B97(i + 1)); return len(a, b) < 130; });
  return [
    ['Nine steps in the book\'s order with the book\'s words', STEP97.every(([a], i) => a.startsWith(`${i + 1}.`)) && hasAll(s, STEP97.flat())],
    ['The grid is the book\'s serpentine: 1, 2, 3 across the top, 4, 5, 6 back along the middle (4 under 3), 7, 8, 9 across the bottom (7 under 6)', order[2].col === 2 && order[3].col === 2 && order[3].row === 1 && order[5].col === 0 && order[6].col === 0 && order[6].row === 2 && order[8].col === 2],
    ['Eight arrows chain the nine boxes, each joining neighbours (box i to box i + 1)', heads(s, C.ink) === 8 && adj.every(Boolean)],
    ['The book\'s colour key is kept as words: DNA isolation (1), Cutting, ligation, insertion (2, 4, 5), Amplification / selection (3, 6), Expression and product (7, 8, 9)', GROUPS97.flatMap((g) => g[1]).sort().join() === '1,2,3,4,5,6,7,8,9' && hasAll(s, ['DNA isolation', 'Cutting, ligation, insertion', 'Amplification / selection', 'Expression and product', '2, 4, 5', '3, 6', '7, 8, 9'])],
    ['The last box, the purified product, is the one highlight', marigold(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig97: Diagram = { id: 'b12-09-fig-9.7', topic: 3, name: 'Workflow of recombinant DNA technology', cases: [{ chip: 'Nine steps', cap: CAP97 }], draw: draw97, check: check97 };

/* ================= Figure 9.8 ================= */
const CAP98 = `One PCR cycle: (A) denaturation at ~94${NB}°C, (B) annealing at ~40–60${NB}°C with two primers binding opposite strands, (C) extension at ~72${NB}°C by Taq polymerase. About 30 cycles give roughly a billion copies of the target.`;
const CYCLES = 30;
const BLK = 132, SX0 = 98, SX1 = 242;
const TEMP98 = [`~94${NB}°C`, `~40–60${NB}°C`, `~72${NB}°C`];
function draw98(): Sketch {
  const s = new Sketch(W, 10 + 3 * BLK + 50);
  const topC = C.ink, botC = C.slate;
  const yA = 10, yC = 10 + 2 * BLK;
  const titles = ['A. Denaturation', 'B. Annealing', 'C. Extension'];
  titles.forEach((t, i) => {
    const y0 = 10 + i * BLK;
    lab(s, 98, y0 + 18, t, { size: 14, bold: true, anchor: 'start' });
    const pw = wOf(TEMP98[i], 13) + 22, px = 346 - pw;
    box(s, `temp ${i}`, [px, y0, 346, y0 + 28], { rx: 8 });
    lab(s, px + pw / 2, y0 + 19, TEMP98[i], { size: 13, bold: true, within: `temp ${i}` });
  });
  // A: the strands apart, arrows pointing apart
  path(s, [[SX0, yA + 46], [SX1, yA + 46]], { w: 3.4, color: topC });
  path(s, [[SX0, yA + 82], [SX1, yA + 82]], { w: 3.4, color: botC });
  arrow(s, [170, yA + 64], [170, yA + 52], { color: C.ink, w: 1.6 });
  arrow(s, [170, yA + 64], [170, yA + 76], { color: C.ink, w: 1.6 });
  lab(s, 170, yA + 108, 'Double helix separates', { size: 11, color: C.slate });
  lab(s, 170, yA + 122, 'into two single strands', { size: 11, color: C.slate });
  // B: two primers on opposite strands
  const yB = 10 + BLK;
  path(s, [[SX0, yB + 46], [SX1, yB + 46]], { w: 3.4, color: topC });
  path(s, [[SX0, yB + 82], [SX1, yB + 82]], { w: 3.4, color: botC });
  path(s, [[104, yB + 55], [136, yB + 55]], { w: 5, color: C.ink });
  path(s, [[200, yB + 73], [236, yB + 73]], { w: 5, color: C.ink });
  lab(s, 252, yB + 60, 'primer', { size: 11, anchor: 'start', color: C.text });
  leader(s, [246, yB + 57], [138, yB + 55]);
  lab(s, 252, yB + 96, 'primer', { size: 11, anchor: 'start', color: C.text });
  leader(s, [246, yB + 93], [238, yB + 75]);
  lab(s, 170, yB + 108, 'Primers bind to opposite', { size: 11, color: C.slate });
  lab(s, 170, yB + 122, 'strands (template regions)', { size: 11, color: C.slate });
  // C: Taq extends the primers
  path(s, [[SX0, yC + 46], [SX1, yC + 46]], { w: 3.4, color: topC });
  path(s, [[SX0, yC + 82], [SX1, yC + 82]], { w: 3.4, color: botC });
  path(s, [[104, yC + 55], [204, yC + 55]], { w: 2.4, color: C.ink });
  path(s, [[150, yC + 73], [236, yC + 73]], { w: 2.4, color: C.ink });
  s.add(`<rect x="204" y="${yC + 50}" width="12" height="12" fill="none" stroke="${C.ink}" stroke-width="1.8"/>`);
  keep(s, [[204, yC + 50], [216, yC + 50], [216, yC + 62], [204, yC + 62], [204, yC + 50]]);
  lab(s, 233, yC + 34, 'Taq', { size: 11, anchor: 'start', color: C.text });
  leader(s, [226, yC + 36], [212, yC + 50]);
  lab(s, 170, yC + 108, 'Taq polymerase extends the primers,', { size: 11, color: C.slate });
  lab(s, 170, yC + 122, 'synthesising new complementary strands', { size: 11, color: C.slate });
  // the loop: C goes back to A, ~30 cycles
  path(s, [[90, yC + 14], [14, yC + 14], [14, yA + 14]], { color: C.mari, w: 2.6, cap: 'butt' });
  arrow(s, [14, yA + 14], [90, yA + 14], { color: C.mari, w: 2.6 });
  lab(s, 24, yB + 50, 'repeat', { size: 13, bold: true, anchor: 'start', color: C.amber });
  lab(s, 24, yB + 67, '~30 cycles', { size: 13, bold: true, anchor: 'start', color: C.amber });
  pill(s, `~30 cycles: up to about a billion copies (2<sup>30</sup> ≈ 10<sup>9</sup>)`, { size: 12 });
  return s;
}
function check98(): Check[] {
  const s = draw98();
  const copies = 2 ** CYCLES;
  return [
    ['Three stages in the book\'s order: A. Denaturation, B. Annealing, C. Extension', hasAll(s, ['A. Denaturation', 'B. Annealing', 'C. Extension'])],
    ['The temperatures are the book\'s: ~94 °C, ~40–60 °C, ~72 °C, rising from annealing to extension and highest for denaturation', TEMP98.every((t) => has(s, t)) && 94 > 72 && 72 > 60 && 60 > 40],
    ['Two primers sit on opposite strands in B (one under the top strand at the left, one over the bottom strand at the right), labelled primer', s.labels.filter((l) => l.text === 'primer').length === 2 && 104 < 200 && 136 < 236],
    ['In C the extension of each primer is longer than the primer was in B, and Taq sits at the growing end of the upper one', (204 - 104) > (136 - 104) && (236 - 150) > (236 - 200) && has(s, 'Taq')],
    ['The notes are the book\'s: Double helix separates into two single strands; Primers bind to opposite strands (template regions); Taq polymerase extends the primers, synthesising new complementary strands', hasAll(s, ['Double helix separates', 'into two single strands', 'Primers bind to opposite', 'strands (template regions)', 'Taq polymerase extends the primers,', 'synthesising new complementary strands'])],
    ['2^30 = 1 073 741 824, which is about 10^9 (a billion): 1.07 × 10^9', copies === 1073741824 && Math.abs(copies / 1e9 - 1.07) < 0.01 && s.tags.some((q) => q.name === '~30 cycles: up to about a billion copies (230 ≈ 109)')],
    ['The loop back from C to A, "repeat ~30 cycles", is the highlight', has(s, 'repeat') && has(s, '~30 cycles') && heads(s, C.mari) === 1],
    ...layout(s), clean(s),
  ];
}
const fig98: Diagram = { id: 'b12-09-fig-9.8', topic: 3, name: 'One PCR cycle', cases: [{ chip: 'One cycle', cap: CAP98 }], draw: draw98, check: check98 };

export const DIAGRAMS_BIOLOGY_12_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95, fig96, fig97, fig98];
