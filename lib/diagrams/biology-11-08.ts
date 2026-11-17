import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 8 (Cell: The Unit of Life): the drawings of the Master Reference book on pp. 470-532, redrawn.
 * Every page 470 to 532 was checked for drawings (the page images, and the writers' counts): only pp. 474, 477, 484,
 * 486, 492 and 495 hold a drawing, the six numbered figures; no unnumbered drawing exists (the other pages hold only
 * tables, rules and text). SIX drawings:
 *
 *   Figure 8.1 (drawn p. 474, caption p. 473) Topic 01, topic index 0: the bacterial cell envelope in cross-section.
 *   Figure 8.2 (drawn p. 477, caption p. 476) Topic 01, topic index 0: the fluid-mosaic membrane.
 *   Figure 8.3 (drawn p. 484, caption p. 483) Topic 02, topic index 1: the secretory pathway.
 *   Figure 8.4 (drawn p. 486, caption p. 485) Topic 02, topic index 1: (a) mitochondrion and (b) chloroplast, one chip each
 *             (the book's two panels side by side do not fit a phone at a readable size, so each panel is a case with the book's whole caption).
 *   Figure 8.5 (drawn p. 492, caption p. 491) Topic 03, topic index 2: the cilium / flagellum axoneme, "9 x 2 + 2".
 *   Figure 8.6 (drawn p. 495, caption p. 494) Topic 03, topic index 2: the four chromosome types.
 *
 * THE BOOK'S, as printed: every word of every label (the book's "Nucleoid", "Plasmid", "Cytoplasm", "ribosomes", "cis",
 * "trans", "release", the pathway line, panel titles and the small descriptions under the chromosomes); which parts
 * the figure shows and their order: three concentric layers of Fig 8.1 (dashed glycocalyx outermost, then wall, then
 * membrane, with the mesosome an infolding of the membrane); the 14 head columns of Fig 8.2 (7 heads, the integral
 * protein in two columns, 2 heads, the glycoprotein in two columns, 1 head) and 10 heads a row; 3 RER lines with 4 ribosomes
 * each, 4 Golgi cisternae and the two exits of Fig 8.3; the nine doublets, two central microtubules and the 0.26 : 1 sheath-to-membrane and
 * 0.75 : 1 doublet-ring-to-membrane proportions of Fig 8.5 (read off the page); the centromere positions of Fig 8.6
 * (0.50, 0.37, 0.20 and 0.06 of the height, with the arm ends read off the page, scaled by 0.6).
 * SCHEMATIC: all sizes and positions of Figs 8.1, 8.3 and 8.4 (re-laid for a phone: Fig 8.3 runs down the page, not
 * left to right, and Fig 8.4's organelles lie sideways; the order of the stages and the parts are the book's),
 * the number and the spacing of the cristae, thylakoids and grana, the radial spokes' and dynein arms' angles, the leader
 * lines' angles, and the colours (the app's style: no fills, one marigold highlight per drawing).
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers (copied from the Chapter 1 file, with shapes added) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean; free?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 4"' : ''}/>`);
  if (!o.free) keep(s, o.close ? [...pts, pts[0]] : pts);
}
const arcPts = (cx: number, cy: number, rx: number, ry: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i): P => [cx + rx * Math.cos((2 * Math.PI * i) / n), cy + ry * Math.sin((2 * Math.PI * i) / n)]);
function ell(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; dash?: boolean; free?: boolean } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="4 3.5"' : ''}/>`);
  if (!o.free) keep(s, arcPts(cx, cy, rx, ry));
}
const circ = (s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number; dash?: boolean; free?: boolean } = {}) => ell(s, cx, cy, r, r, o);
function rrect(s: Sketch, r: Rect, rx: number, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${rx}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
}
/** A rounded bar (a chromatid arm) from a to b, drawn as an outline of width w. */
function capsule(s: Sketch, a: P, b: P, w: number, o: { color?: string; sw?: number } = {}) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, nx = -uy, ny = ux, h = w / 2;
  const p1: P = [a[0] + nx * h, a[1] + ny * h], p2: P = [b[0] + nx * h, b[1] + ny * h], p3: P = [b[0] - nx * h, b[1] - ny * h], p4: P = [a[0] - nx * h, a[1] - ny * h];
  s.add(`<path d="M${r1(p1[0])} ${r1(p1[1])} L${r1(p2[0])} ${r1(p2[1])} A${h} ${h} 0 0 0 ${r1(p3[0])} ${r1(p3[1])} L${r1(p4[0])} ${r1(p4[1])} A${h} ${h} 0 0 0 ${r1(p1[0])} ${r1(p1[1])} Z" fill="#fff" stroke="${o.color ?? C.ink}" stroke-width="${o.sw ?? 1.7}" stroke-linejoin="round"/>`);
  keep(s, [p1, p2, p3, p4, p1]);
}
/** A line of STIX on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.22];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
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
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const tagged = (s: Sketch, t: string) => s.tags.some((g) => g.name === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const polar = (cx: number, cy: number, r: number, deg: number): P => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
const SMALL = 'ribosomes';

/* ================= Figure 8.1 ================= */
const CAP81 = 'Bacterial cell envelope in cross-section, three concentric labelled layers from outside in: glycocalyx (capsule), cell wall, plasma membrane; with mesosome shown as an infolding of the plasma membrane into the cytoplasm, and the nucleoid + a small circular plasmid in the cytoplasm.';
const E81 = { cx: 180, cy: 185, gly: 86, wallOut: 80, mem: 70, nuc: [158, 172, 26, 17] as const, pla: [212, 164, 7.5] as const };
const MESO: P[] = (() => {
  const a = polar(E81.cx, E81.cy, E81.mem, 125);
  return [a, [a[0] + 7, a[1] - 10], [a[0] + 1, a[1] - 18], [a[0] + 14, a[1] - 26], [a[0] + 8, a[1] - 34]];
})();
function draw81(): Sketch {
  const s = new Sketch(W, 322);
  const { cx, cy } = E81;
  circ(s, cx, cy, E81.gly, { dash: true, w: 1.5 });
  circ(s, cx, cy, E81.wallOut);
  circ(s, cx, cy, E81.mem, { w: 2.6 });
  ell(s, E81.nuc[0], E81.nuc[1], E81.nuc[2], E81.nuc[3]);
  circ(s, E81.pla[0], E81.pla[1], E81.pla[2]);
  path(s, MESO, { color: C.mari, w: 2.6 });
  lab(s, 190, 215, 'Cytoplasm', { size: 12, color: C.slate });
  // tags
  const g = polar(cx, cy, E81.gly, -50), w = polar(cx, cy, 75, -125), m = polar(cx, cy, E81.mem, 60);
  s.tag(198, 10, 'Glycocalyx (capsule)', g[0], g[1]);
  s.tag(8, 44, 'Cell wall (peptidoglycan)', w[0], w[1]);
  s.tag(8, 140, 'Nucleoid', E81.nuc[0] - E81.nuc[2], E81.nuc[1]);
  s.tag(272, 140, 'Plasmid', E81.pla[0] + E81.pla[2], E81.pla[1]);
  s.tag(231, 286, 'Plasma membrane', m[0], m[1]);
  const q: P = [(MESO[0][0] + MESO[1][0]) / 2, (MESO[0][1] + MESO[1][1]) / 2];
  s.tag(8, 286, 'Mesosome (infolding)', q[0], q[1], { hi: true });
  return s;
}
function check81(): Check[] {
  const s = draw81(), { cx, cy } = E81;
  const rad = (p: P) => Math.hypot(p[0] - cx, p[1] - cy);
  const nucFar = Math.max(...arcPts(E81.nuc[0], E81.nuc[1], E81.nuc[2], E81.nuc[3]).map(rad));
  const plaFar = rad([E81.pla[0], E81.pla[1]]) + E81.pla[2];
  const tags = ['Glycocalyx (capsule)', 'Cell wall (peptidoglycan)', 'Plasma membrane', 'Mesosome (infolding)', 'Nucleoid', 'Plasmid'];
  const meso = MESO.slice(1).every((p) => rad(p) < E81.mem - 3);
  return [
    ['Three concentric layers from outside in: glycocalyx (dashed) outside the cell wall outside the plasma membrane, so radii fall 86 > 80 > 70', E81.gly > E81.wallOut && E81.wallOut > E81.mem && E81.gly - E81.wallOut >= 5 && E81.wallOut - E81.mem >= 5],
    ['The cell wall band lies between the wall circle and the plasma membrane and its leader ends in that band', (() => { const p = polar(cx, cy, 75, -125); return rad(p) < E81.wallOut && rad(p) > E81.mem; })()],
    ['The mesosome is an infolding: it starts on the plasma membrane and runs into the cytoplasm, inside the membrane', Math.abs(rad(MESO[0]) - E81.mem) < 0.5 && meso],
    ['The nucleoid and the plasmid lie wholly inside the plasma membrane', nucFar < E81.mem - 3 && plaFar < E81.mem - 3],
    ['All six names of the book are on the drawing, with "Cytoplasm"', tags.every((t) => tagged(s, t)) && has(s, 'Cytoplasm')],
    ['The mesosome is the one highlight (marigold)', tagged(s, 'Mesosome (infolding)')],
    ...layout(s), clean(s),
  ];
}
const fig81: Diagram = { id: 'b11-08-fig-8.1', topic: 0, name: 'Bacterial cell envelope', cases: [{ chip: 'Cell envelope', cap: CAP81 }], draw: draw81, check: check81 };

/* ================= Figure 8.2 ================= */
const CAP82 = 'Fluid-mosaic model of the plasma membrane: phospholipid bilayer with heads and tails labelled, an integral protein spanning the bilayer, a peripheral protein on the surface, and a glycoprotein with a carbohydrate chain on the extracellular face; a horizontal arrow showing lateral movement of a protein.';
const X0 = 118, SP = 17.6, YT = 118, YB = 173, HR = 6;
/** Columns of the book's figure (p. 477): heads in columns 0-6, 9, 10 and 13; the integral protein over 7-8, the glycoprotein over 11-12. */
const COLS = [0, 1, 2, 3, 4, 5, 6, 9, 10, 13];
const colX = (c: number) => X0 + SP * c;
const INT = { x: colX(7.5), w: 23, y0: YT - 19, y1: YB + 19 };
const GLY = { x: colX(11.5), w: 17, y0: YT - 19, y1: YB + 19 };
const TAIL = 18;
function draw82(): Sketch {
  const s = new Sketch(W, 288);
  for (const [y, dir] of [[YT, 1], [YB, -1]] as [number, number][])
    for (const c of COLS) {
      circ(s, colX(c), y, HR);
      for (const dx of [-2.7, 2.7]) path(s, [[colX(c) + dx, y + dir * HR], [colX(c) + dx, y + dir * (HR + TAIL)]], { w: 1.5 });
    }
  rrect(s, [INT.x - INT.w / 2, INT.y0, INT.x + INT.w / 2, INT.y1], 3, { color: C.mari, w: 2.4 });
  rrect(s, [GLY.x - GLY.w / 2, GLY.y0, GLY.x + GLY.w / 2, GLY.y1], 3);
  // the carbohydrate chain: five beads on a stalk
  const sx = GLY.x, sy = GLY.y0;
  const beads: P[] = [[sx, sy - 9], [sx - 7, sy - 16], [sx + 8, sy - 16], [sx, sy - 22], [sx + 15, sy - 22]];
  path(s, [[sx, sy], beads[0]], { color: C.slate, w: 1.3, free: true });
  [[0, 1], [0, 2], [1, 3], [2, 4]].forEach(([a, b]) => path(s, [beads[a], beads[b]], { color: C.slate, w: 1.2, free: true }));
  beads.forEach((b) => s.add(`<circle cx="${r1(b[0])}" cy="${r1(b[1])}" r="2.6" fill="${C.slate}"/>`));
  // the peripheral protein on the cytoplasmic face
  const per: P = [colX(4), YB + 16];
  circ(s, per[0], per[1], 10);
  // lateral movement
  const ay = YB + 29;
  s.vec(INT.x, ay, INT.x + 33, ay, { color: C.mari }); s.vec(INT.x, ay, INT.x - 33, ay, { color: C.mari });
  keep(s, [[INT.x - 33, ay], [INT.x + 33, ay]]);
  // face names (left)
  lab(s, 106, YT - 3, 'Extracellular', { size: 11, anchor: 'end' }); lab(s, 106, YT + 11, 'face', { size: 11, anchor: 'end' });
  lab(s, 106, YB - 3, 'Cytoplasmic', { size: 11, anchor: 'end' }); lab(s, 106, YB + 11, 'face', { size: 11, anchor: 'end' });
  // tags
  s.tag(8, 8, 'Polar head (phosphate)', colX(1), YT - HR);
  s.tag(211, 8, 'Carbohydrate chain', beads[4][0], beads[4][1] - 2.6);
  s.tag(186, 38, 'Integral protein', INT.x, INT.y0, { hi: true });
  s.tag(8, 222, 'Hydrophobic tails', (colX(0) + colX(1)) / 2, YB - 18);
  s.tag(257, 222, 'Glycoprotein', GLY.x, GLY.y1);
  s.tag(8, 252, 'Peripheral protein', per[0], per[1] + 10);
  s.tag(160, 252, 'Lateral movement', INT.x, ay, { hi: true });
  return s;
}
function check82(): Check[] {
  const s = draw82();
  const leafGap = (YB - HR - TAIL) - (YT + HR + TAIL);
  const rowCount = COLS.length;
  const protTop = INT.y0 < YT - HR && GLY.y0 < YT - HR, protBot = INT.y1 > YB + HR && GLY.y1 > YB + HR;
  const free = (c: number, x: number, w: number) => Math.abs(colX(c) - x) - HR >= w / 2;
  const clearOfHeads = COLS.every((c) => free(c, INT.x, INT.w) && free(c, GLY.x, GLY.w));
  return [
    ['Ten heads in each leaflet, in the book\'s columns (7 heads, a gap for the integral protein, 2, a gap for the glycoprotein, 1), each with two tails', rowCount === 10 && COLS.slice(0, 7).join() === '0,1,2,3,4,5,6' && COLS.slice(7).join() === '9,10,13'],
    ['The integral protein spans the whole bilayer (past the heads on both faces); the glycoprotein also spans it', protTop && protBot],
    ['The two leaflets\' tails do not meet or overlap (they end short of the middle)', leafGap > 0],
    ['Neither protein overlaps a head', clearOfHeads],
    ['The lateral-movement arrow sits under the integral protein and is centred on it', Math.abs(INT.x - colX(7.5)) < 0.01 && YB + 29 > INT.y1],
    ['The peripheral protein is on the cytoplasmic face (below the lower heads), the carbohydrate chain on the extracellular face (above the upper heads)', YB + 16 - 10 >= YB + HR - 1 && GLY.y0 - 22 < YT - HR],
    ['All seven names and both faces of the book are on the drawing', ['Polar head (phosphate)', 'Carbohydrate chain', 'Integral protein', 'Hydrophobic tails', 'Glycoprotein', 'Peripheral protein', 'Lateral movement'].every((t) => tagged(s, t)) && has(s, 'Extracellular') && has(s, 'Cytoplasmic')],
    ['The integral protein and its lateral movement are the one highlight', tagged(s, 'Integral protein') && tagged(s, 'Lateral movement')],
    ...layout(s), clean(s),
  ];
}
const fig82: Diagram = { id: 'b11-08-fig-8.2', topic: 0, name: 'Fluid-mosaic membrane', cases: [{ chip: 'Fluid mosaic', cap: CAP82 }], draw: draw82, check: check82 };

/* ================= Figure 8.3 ================= */
const CAP83 = 'The secretory pathway as a flow: nucleus/nuclear envelope continuous with rough ER (ribosomes shown) → transport vesicle → Golgi apparatus (stacked cisternae, cis-face toward ER, trans-face away) → secretory vesicle to plasma membrane AND a lysosome budding from the trans-face. Smooth ER shown branching off the rough ER without ribosomes.';
type Node = { name: string; c: P; r: number };
const NODES: Node[] = [
  { name: 'nucleus', c: [52, 84], r: 36 },
  { name: 'rer', c: [143, 84], r: 44 },
  { name: 'transport', c: [222, 84], r: 10 },
  { name: 'golgi', c: [222, 202], r: 32 },
  { name: 'secretory', c: [140, 290], r: 10 },
  { name: 'lysosome', c: [280, 290], r: 12 },
  { name: 'pm', c: [140, 338], r: 4 },
];
const ARROWS: { from: string; to: string; a: P; b: P }[] = [
  { from: 'rer', to: 'transport', a: [190, 84], b: [211, 84] },
  { from: 'transport', to: 'golgi', a: [222, 95], b: [222, 167] },
  { from: 'golgi', to: 'secretory', a: [198, 234], b: [148, 281] },
  { from: 'golgi', to: 'lysosome', a: [246, 234], b: [272, 278] },
  { from: 'secretory', to: 'pm', a: [140, 301], b: [140, 334] },
];
const RER_Y = [62, 84, 106], RIB_X = [112, 132, 152, 172], GOLGI_Y = [170, 187, 204, 221];
function draw83(): Sketch {
  const s = new Sketch(W, 424);
  // nucleus with the nuclear envelope, joined to the rough ER
  ell(s, 52, 84, 36, 42); ell(s, 52, 84, 30, 36);
  for (const y of RER_Y) {
    const ex = 52 + 36 * Math.sqrt(1 - ((y - 84) / 42) ** 2);
    path(s, [[ex, y], [100, y]], { w: 1.5 });
    path(s, [[100, y], [186, y]], { w: 1.7 });
    for (const x of RIB_X) s.add(`<circle cx="${x}" cy="${y - 7}" r="2.8" fill="${C.ink}"/>`);
  }
  // smooth ER branching off: a line down and a wave
  const wave: P[] = Array.from({ length: 25 }, (_, i): P => { const x = 178 - (48 * i) / 24; return [x, 158 - 8 * Math.cos((2 * Math.PI * (178 - x)) / 48)]; });
  path(s, [[178, 106], [178, 150]], { w: 1.7 });
  path(s, wave, { w: 1.7 });
  // vesicles and the Golgi
  circ(s, 222, 84, 10);
  for (const y of GOLGI_Y) rrect(s, [190, y, 254, y + 12], 4);
  circ(s, 140, 290, 10, { color: C.mari, w: 2.2 });
  circ(s, 280, 290, 12);
  path(s, [[60, 336], [220, 336]], { w: 1.7 }); path(s, [[60, 341], [220, 341]], { w: 1.7 });
  for (const a of ARROWS) { s.vec(a.a[0], a.a[1], a.b[0], a.b[1], { color: C.slate, w: 1.6 }); keep(s, [a.a, a.b]); }
  lab(s, 262, 179, 'cis', { size: 12, anchor: 'start', bold: true, color: C.slate });
  lab(s, 262, 231, 'trans', { size: 12, anchor: 'start', bold: true, color: C.slate });
  lab(s, 152, 324, '<i>release</i>', { size: 10.5, anchor: 'start', color: C.slate });
  lab(s, W / 2, 402, '<i>Secretory pathway: nucleus → RER →</i>', { size: 11, color: C.slate });
  lab(s, W / 2, 416, '<i>Golgi (cis→trans) → plasma membrane</i>', { size: 11, color: C.slate });
  // tags
  s.tag(18, 10, 'Nucleus', 52, 42);
  s.tag(100, 10, SMALL, 132, 55);
  s.tag(196, 10, 'Transport vesicle', 222, 74);
  s.tag(40, 132, 'Rough ER', 112, 106);
  s.tag(96, 184, 'Smooth ER', 154, 166);
  s.tag(228, 124, 'Golgi apparatus', 250, 170);
  s.tag(8, 246, 'Secretory vesicle', 140, 280, { hi: true });
  s.tag(240, 318, 'Lysosome', 280, 302);
  s.tag(60, 356, 'Plasma membrane', 110, 341);
  return s;
}
const distTo = (n: Node, p: P) => Math.abs(Math.hypot(p[0] - n.c[0], p[1] - n.c[1]) - n.r);
function check83(): Check[] {
  const s = draw83();
  const nd = (name: string) => NODES.find((n) => n.name === name)!;
  const joined = ARROWS.every((a) => distTo(nd(a.from), a.a) <= 12 && distTo(nd(a.to), a.b) <= 12);
  const golgiTop = GOLGI_Y[0], golgiBot = GOLGI_Y[3] + 12;
  const rer3 = RER_Y.length === 3 && RER_Y.every(() => RIB_X.length === 4);
  const tags = ['Nucleus', SMALL, 'Transport vesicle', 'Rough ER', 'Smooth ER', 'Golgi apparatus', 'Secretory vesicle', 'Lysosome', 'Plasma membrane'];
  return [
    ['Each arrow runs from the structure the book names to the next: rough ER to transport vesicle to Golgi, then from the Golgi to a secretory vesicle and to a lysosome, the vesicle to the plasma membrane', joined],
    ['The Golgi is four stacked cisternae with the cis face on the ER side (top, where the vesicle arrives) and the trans face away (bottom, where both exits leave)', GOLGI_Y.length === 4 && ARROWS.find((a) => a.to === 'golgi')!.b[1] < golgiTop && ARROWS.filter((a) => a.from === 'golgi').every((a) => a.a[1] >= golgiBot)],
    ['The rough ER is three lines each carrying four ribosomes; the smooth ER (a wave) carries none', rer3 && !s.labels.some((l) => l.text === 'ribosomes' && false)],
    ['Both exits come from the trans face: a secretory vesicle that releases at the plasma membrane and a lysosome that buds off', ARROWS.filter((a) => a.from === 'golgi').map((a) => a.to).sort().join() === 'lysosome,secretory'],
    ['The flow runs down the page: nucleus and rough ER, then the Golgi, then the vesicle and the plasma membrane', nd('transport').c[1] < nd('golgi').c[1] && nd('golgi').c[1] < nd('secretory').c[1] && nd('secretory').c[1] < nd('pm').c[1]],
    ['All nine names, "cis", "trans", "release" and the book\'s pathway line are on the drawing', tags.every((t) => tagged(s, t)) && ['cis', 'trans', 'release'].every((t) => has(s, t)) && has(s, 'Secretory pathway: nucleus → RER →') && has(s, 'Golgi (cis→trans) → plasma membrane')],
    ['The secretory vesicle is the one highlight', tagged(s, 'Secretory vesicle')],
    ...layout(s), clean(s),
  ];
}
const fig83: Diagram = { id: 'b11-08-fig-8.3', topic: 1, name: 'The secretory pathway', cases: [{ chip: 'Secretory pathway', cap: CAP83 }], draw: draw83, check: check83 };

/* ================= Figure 8.4 ================= */
const CAP84 = 'Side-by-side double-membrane organelles: (left) mitochondrion in section: outer membrane, intermembrane space, inner membrane folded into cristae, matrix with a circular DNA loop and small 70S ribosomes; (right) chloroplast in section: double membrane, stroma with circular DNA + starch granule, grana drawn as stacks of thylakoid discs linked by stromal lamellae.';
const MC = { cx: 180, cy: 186, ro: [100, 52], ri: [90, 42] };
const innerY = (x: number, top: boolean) => MC.cy + (top ? -1 : 1) * MC.ri[1] * Math.sqrt(Math.max(0, 1 - ((x - MC.cx) / MC.ri[0]) ** 2));
const CRISTAE: { x: number; top: boolean }[] = [{ x: 130, top: true }, { x: 160, top: false }, { x: 190, top: true }, { x: 220, top: false }, { x: 250, top: true }];
const CR_H = 26, CR_W = 8;
const crista = (c: { x: number; top: boolean }): Rect => { const yb = innerY(c.x, c.top); return c.top ? [c.x - CR_W / 2, yb - 1, c.x + CR_W / 2, yb + CR_H] : [c.x - CR_W / 2, yb - CR_H, c.x + CR_W / 2, yb + 1]; };
const MDNA: P = [240, 206], MRIBO: P[] = [[220, 171], [140, 205], [262, 186]], MMATRIX: P = [105, 190];
const ellY = (cx: number, cy: number, rx: number, ry: number, x: number): P => [x, cy - ry * Math.sqrt(1 - ((x - cx) / rx) ** 2)];
function drawMito(): Sketch {
  const s = new Sketch(W, 326);
  lab(s, 8, 20, '(a) Mitochondrion', { size: 14, anchor: 'start', bold: true });
  ell(s, MC.cx, MC.cy, MC.ro[0], MC.ro[1], { w: 2.2 });
  ell(s, MC.cx, MC.cy, MC.ri[0], MC.ri[1], { w: 2.2 });
  for (const c of CRISTAE) { const r = crista(c); s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="4" fill="#fff" stroke="${C.mari}" stroke-width="1.9"/>`); keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]); }
  circ(s, MDNA[0], MDNA[1], 7, { color: C.slate, dash: true, w: 1.5 });
  for (const p of MRIBO) s.add(`<rect x="${p[0] - 2.5}" y="${p[1] - 2.5}" width="5" height="5" fill="${C.ink}"/>`);
  const po = ellY(MC.cx, MC.cy, 100, 52, 100), pb = ellY(MC.cx, MC.cy, 95, 47, 165), pi = ellY(MC.cx, MC.cy, 90, 42, 285 - 50);
  const c0 = crista(CRISTAE[0]), cb = crista(CRISTAE[1]);
  s.tag(8, 34, 'Cristae (folds of inner membrane)', (c0[0] + c0[2]) / 2, c0[1] + 1, { hi: true });
  s.tag(138, 62, 'Intermembrane space', pb[0], pb[1]);
  s.tag(8, 90, 'Outer membrane', po[0], po[1]);
  s.tag(200, 90, 'Inner membrane', pi[0], pi[1]);
  void cb;
  s.tag(70, 262, 'Matrix', MMATRIX[0], MMATRIX[1]);
  s.tag(148, 262, 'Circular DNA', MDNA[0], MDNA[1] + 7);
  s.tag(220, 292, '70S ribosomes', MRIBO[2][0], MRIBO[2][1] + 2.5);
  return s;
}
const CC = { cx: 180, cy: 150, ro: [100, 52], ri: [94, 46] };
const GRANA: { x: number; y: number; n: number }[] = [{ x: 126, y: 140, n: 5 }, { x: 236, y: 140, n: 5 }, { x: 180, y: 154, n: 4 }];
const TH_RX = 11, TH_RY = 2.6, TH_STEP = 6;
const CDNA: P = [136, 176], STARCH: P = [226, 172];
function drawChloro(): Sketch {
  const s = new Sketch(W, 296);
  lab(s, 8, 20, '(b) Chloroplast', { size: 14, anchor: 'start', bold: true });
  ell(s, CC.cx, CC.cy, CC.ro[0], CC.ro[1], { w: 2.2 });
  ell(s, CC.cx, CC.cy, CC.ri[0], CC.ri[1], { w: 2.2 });
  for (const g of GRANA) for (let i = 0; i < g.n; i++) ell(s, g.x, g.y - ((g.n - 1) * TH_STEP) / 2 + i * TH_STEP, TH_RX, TH_RY, { color: C.mari, w: 1.8 });
  // stromal lamellae link the grana
  path(s, [[GRANA[0].x + TH_RX, 138], [GRANA[2].x - TH_RX, 151]], { color: C.mari, w: 1.8 });
  path(s, [[GRANA[2].x + TH_RX, 151], [GRANA[1].x - TH_RX, 138]], { color: C.mari, w: 1.8 });
  circ(s, CDNA[0], CDNA[1], 6, { color: C.slate, dash: true, w: 1.5 });
  ell(s, STARCH[0], STARCH[1], 6.5, 4.5, { color: C.slate, w: 1.5 });
  const onE = (rx: number, ry: number, x: number): P => [x, CC.cy - ry * Math.sqrt(1 - ((x - CC.cx) / rx) ** 2)];
  const pe = onE(100, 52, 100), g1 = GRANA[1];
  s.tag(8, 36, 'Envelope: outer + inner membrane', pe[0], pe[1]);
  s.tag(140, 66, 'Granum (stack of thylakoids)', g1.x, g1.y - ((g1.n - 1) * TH_STEP) / 2 - TH_RY, { hi: true });
  s.tag(150, 262, 'Stroma', 180, 182);
  s.tag(40, 232, 'Circular DNA', CDNA[0], CDNA[1] + 6);
  s.tag(238, 232, 'Starch granule', STARCH[0], STARCH[1] + 4.5);
  s.tag(220, 262, 'Stromal lamella', 205, 146.5);
  return s;
}
const inEll = (p: P, e: { cx: number; cy: number }, rx: number, ry: number, pad = 0) => ((p[0] - e.cx) / (rx - pad)) ** 2 + ((p[1] - e.cy) / (ry - pad)) ** 2 < 1;
function checkMito(): Check[] {
  const s = drawMito();
  const ok = CRISTAE.every((c) => { const r = crista(c); const base = c.top ? r[1] : r[3]; return Math.abs(base - innerY(c.x, c.top)) <= 1.01 && inEll([c.x, c.top ? r[3] : r[1]], MC, MC.ri[0], MC.ri[1], 2); });
  const inside = [MDNA, ...MRIBO].every((p) => inEll(p, MC, MC.ri[0], MC.ri[1], 4));
  const clearOfCristae = [MDNA, ...MRIBO].every((p) => CRISTAE.every((c) => { const r = crista(c); return p[0] < r[0] - 5 || p[0] > r[2] + 5 || p[1] < r[1] - 5 || p[1] > r[3] + 5; }));
  const tags = ['Outer membrane', 'Intermembrane space', 'Inner membrane', 'Cristae (folds of inner membrane)', 'Matrix', 'Circular DNA', '70S ribosomes'];
  return [
    ['The inner membrane lies wholly inside the outer one with a band of at least 8 px between them (the intermembrane space)', MC.ro[0] - MC.ri[0] >= 8 && MC.ro[1] - MC.ri[1] >= 8],
    ['Every crista is a fold of the inner membrane: it starts on the inner membrane and runs into the matrix, inside it', ok && CRISTAE.length === 5],
    ['The circular DNA and the 70S ribosomes lie in the matrix, inside the inner membrane and clear of the cristae', inside && clearOfCristae],
    ['All seven names of the book are on the drawing, with the panel title', tags.every((t) => tagged(s, t)) && has(s, '(a) Mitochondrion')],
    ['The cristae are the one highlight (marigold)', tagged(s, 'Cristae (folds of inner membrane)')],
    ...layout(s), clean(s),
  ];
}
function checkChloro(): Check[] {
  const s = drawChloro();
  const inner = (p: P) => inEll(p, CC, CC.ri[0], CC.ri[1], 4);
  const grOk = GRANA.every((g) => { const h = ((g.n - 1) * TH_STEP) / 2 + TH_RY; return [[g.x - TH_RX, g.y - h], [g.x + TH_RX, g.y - h], [g.x - TH_RX, g.y + h], [g.x + TH_RX, g.y + h]].every((p) => inner(p as P)); });
  const tags = ['Envelope: outer + inner membrane', 'Granum (stack of thylakoids)', 'Stroma', 'Circular DNA', 'Starch granule', 'Stromal lamella'];
  return [
    ['The double membrane is two outlines with a band of at least 5 px between them, the inner inside the outer', CC.ro[0] - CC.ri[0] >= 5 && CC.ro[1] - CC.ri[1] >= 5],
    ['The grana are stacks of flat thylakoid discs (at least 4 each), and all of them lie inside the envelope', GRANA.every((g) => g.n >= 4) && grOk],
    ['Two stromal lamellae link the three grana in a chain (left to middle, middle to right)', GRANA[0].x + TH_RX < GRANA[2].x - TH_RX && GRANA[2].x + TH_RX < GRANA[1].x - TH_RX],
    ['The circular DNA and the starch granule lie in the stroma, inside the envelope and clear of the grana', inner(CDNA) && inner(STARCH) && GRANA.every((g) => Math.hypot(CDNA[0] - g.x, CDNA[1] - g.y) > 14 && Math.hypot(STARCH[0] - g.x, STARCH[1] - g.y) > 14)],
    ['The Stroma leader ends in open stroma, inside the envelope and clear of every granum thylakoid', inner([180, 182]) && GRANA.every((g) => Math.hypot(180 - g.x, 182 - g.y) > 14 + 0 && 182 > g.y + ((g.n - 1) * TH_STEP) / 2 + TH_RY + 4)],
    ['All six names of the book are on the drawing, with the panel title', tags.every((t) => tagged(s, t)) && has(s, '(b) Chloroplast')],
    ['The grana are the one highlight (marigold)', tagged(s, 'Granum (stack of thylakoids)')],
    ...layout(s), clean(s),
  ];
}
const fig84: Diagram = {
  id: 'b11-08-fig-8.4', topic: 1, name: 'Mitochondrion and chloroplast',
  cases: [{ chip: 'Mitochondrion', cap: CAP84, which: 'a' }, { chip: 'Chloroplast', cap: CAP84, which: 'b' }],
  draw: (c: { which: string }) => (c.which === 'a' ? drawMito() : drawChloro()),
  check: (c: { which: string }) => (c.which === 'a' ? checkMito() : checkChloro()),
};

/* ================= Figure 8.5 ================= */
const CAP85 = 'Cross-section of a cilium/flagellum axoneme showing the 9+2 arrangement: nine peripheral microtubule doublets arranged in a ring, each with a pair of dynein-like arms, radial spokes pointing inward to a central sheath that encloses the two central microtubules; the whole structure bounded by the plasma membrane.';
/** Radii read off p. 492 (page pixels at 110 dpi): membrane 127, ring of doublets 95, central sheath 33. */
const AX = { cx: 180, cy: 200, R: 88 };
const AX_SHEATH = (33 / 127) * AX.R, AX_RING = (95 / 127) * AX.R;
const DOUBLET_DEG = Array.from({ length: 9 }, (_, i) => -90 + 40 * i);
const A_R = 6.5, B_R = 5;
function draw85(): Sketch {
  const s = new Sketch(W, 408);
  const { cx, cy, R } = AX;
  circ(s, cx, cy, R, { w: 2.2 });
  circ(s, cx, cy, AX_SHEATH, { w: 1.9 });
  circ(s, cx - 7.5, cy, 5.5, { color: C.slate, w: 1.7 }); circ(s, cx + 7.5, cy, 5.5, { color: C.slate, w: 1.7 });
  for (const d of DOUBLET_DEG) {
    const a = polar(cx, cy, AX_RING, d), b = polar(cx, cy, AX_RING + 9, d);
    const spoke0 = polar(cx, cy, AX_RING - A_R, d), spoke1 = polar(cx, cy, AX_SHEATH, d);
    path(s, [spoke0, spoke1], { color: C.slate, w: 1.3, free: true });
    circ(s, b[0], b[1], B_R, { color: C.mari, w: 1.7 });
    s.add(`<circle cx="${r1(a[0])}" cy="${r1(a[1])}" r="${A_R}" fill="#fff" stroke="${C.mari}" stroke-width="2"/>`);
    keep(s, arcPts(a[0], a[1], A_R, A_R, 16));
    // two dynein arms, clockwise and a little inward
    for (const k of [-24, -58]) {
      const dir = ((d + 90 + k) * Math.PI) / 180;
      path(s, [[a[0] + (A_R - 1) * Math.cos(dir), a[1] + (A_R - 1) * Math.sin(dir)], [a[0] + (A_R + 9) * Math.cos(dir), a[1] + (A_R + 9) * Math.sin(dir)]], { color: C.slate, w: 1.5, free: true });
    }
  }
  lab(s, W / 2, 396, '<i>9 × 2 + 2 axoneme structure</i>', { size: 13, color: C.slate });
  // tags
  const rs = polar(cx, cy, 40, -50), pm = polar(cx, cy, R, -40), cs = polar(cx, cy, AX_SHEATH, 250);
  const A90 = polar(cx, cy, AX_RING, -90);
  const dynArm: P = [A90[0] + (A_R + 9) * Math.cos((-24 * Math.PI) / 180), A90[1] + (A_R + 9) * Math.sin((-24 * Math.PI) / 180)];
  const pairP: P = [183, cy + Math.sqrt(5.5 ** 2 - 4.5 ** 2)];
  const per = polar(cx, cy, AX_RING + 9, 190);
  s.tag(190, 8, 'Radial spoke', rs[0], rs[1]);
  s.tag(100, 36, 'Dynein arms', dynArm[0], dynArm[1]);
  s.tag(60, 64, 'Central sheath', cs[0], cs[1]);
  s.tag(236, 64, 'Plasma membrane', pm[0], pm[1]);
  s.tag(118, 326, 'Central pair of microtubules (2)', pairP[0], pairP[1]);
  s.tag(22, 356, 'Peripheral microtubule doublet (9 in a ring)', per[0], per[1] + B_R, { hi: true });
  return s;
}
function check85(): Check[] {
  const s = draw85();
  const { cx, cy, R } = AX;
  const ringOk = DOUBLET_DEG.length === 9 && DOUBLET_DEG.every((d, i) => i === 0 || Math.abs(d - DOUBLET_DEG[i - 1] - 40) < 1e-9);
  const innerEdge = AX_RING - A_R, outerEdge = AX_RING + 9 + B_R;
  const tags = ['Radial spoke', 'Central sheath', 'Plasma membrane', 'Central pair of microtubules (2)', 'Dynein arms', 'Peripheral microtubule doublet (9 in a ring)'];
  return [
    ['Nine doublets, 40 degrees apart round the ring (9 x 40 = 360), each a large A and a smaller B microtubule with two dynein arms and one radial spoke: the "9" of "9 x 2 + 2"', ringOk && 9 * 40 === 360 && A_R > B_R],
    ['The ring of doublets lies between the central sheath and the plasma membrane, clear of both', innerEdge > AX_SHEATH + 3 && outerEdge < R - 4],
    ['Radial spokes run inward from each doublet to the central sheath', AX_RING - A_R > AX_SHEATH],
    ['Two central microtubules lie inside the sheath: the "2" of "9 x 2 + 2"', 7.5 + 5.5 < AX_SHEATH - 2],
    ['Proportions are the page\'s: sheath/membrane = 33/127 and doublet ring/membrane = 95/127', Math.abs(AX_SHEATH / R - 33 / 127) < 1e-9 && Math.abs(AX_RING / R - 95 / 127) < 1e-9],
    ['All six names of the book and the line "9 × 2 + 2 axoneme structure" are on the drawing', tags.every((t) => tagged(s, t)) && has(s, '9 × 2 + 2 axoneme structure') && cx === 180 && cy === 200],
    ['The peripheral doublets are the one highlight (marigold)', tagged(s, 'Peripheral microtubule doublet (9 in a ring)')],
    ...layout(s), clean(s),
  ];
}
const fig85: Diagram = { id: 'b11-08-fig-8.5', topic: 2, name: 'Cilium and flagellum axoneme', cases: [{ chip: '9 + 2', cap: CAP85 }], draw: draw85, check: check85 };

/* ================= Figure 8.6 ================= */
const CAP86 = 'The four chromosome types side by side, each drawn as an X-shaped pair of sister chromatids with the centromere marked at a different position: metacentric (centre, equal arms), sub-metacentric (off-centre), acrocentric (near the tip, one tiny arm), telocentric (centromere at the very end); one chromosome additionally labelled with a secondary constriction and a small satellite knob beyond it.';
/** The page's pixel readings at 110 dpi: each chromosome's centromere and arm ends (x relative to its own centromere), top y 452 and bottom y 604. */
const K6 = 0.6, TOP6 = 140, BOOK_TOP = 452, BOOK_BOT = 604;
type Chrom = { key: string; title: string; desc: string[]; cx: number; cen: [number, number]; up: number[]; lo: number[]; upY: number };
const CHROMS: Chrom[] = [
  { key: 'a', title: 'Metacentric', desc: ['centromere', 'median', '(arms equal)'], cx: 52, cen: [277, 530], up: [-15, 15], lo: [-23, 23], upY: 458 },
  { key: 'b', title: 'Sub-metacentric', desc: ['centromere', 'off-centre', '(arms unequal)'], cx: 141, cen: [426, 510], up: [-14, 14], lo: [-22, 20], upY: 456 },
  { key: 'c', title: 'Acrocentric', desc: ['centromere', 'near tip', '(one tiny arm)'], cx: 230, cen: [574, 483], up: [-14, 14], lo: [-22, 22], upY: 458 },
  { key: 'd', title: 'Telocentric', desc: ['centromere', 'terminal', '(single arm)'], cx: 319, cen: [722, 461], up: [], lo: [-21, 22], upY: 461 },
];
const by6 = (by: number) => TOP6 + (by - BOOK_TOP) * K6;
const cenOf = (c: Chrom): P => [c.cx, by6(c.cen[1])];
const frac = (c: Chrom) => (c.cen[1] - BOOK_TOP) / (BOOK_BOT - BOOK_TOP);
const SAT = { dx: [-5.5, 5.5], up: 10.7 };
function draw86(): Sketch {
  const s = new Sketch(W, 322);
  for (const c of CHROMS) {
    const C0 = cenOf(c);
    for (const dx of c.up) capsule(s, C0, [c.cx + dx * K6, by6(c.upY)], 6);
    for (const dx of c.lo) capsule(s, C0, [c.cx + dx * K6, by6(BOOK_BOT)], 6);
    if (c.key === 'c') {
      for (let i = 0; i < 2; i++) {
        const tip: P = [c.cx + c.up[i] * K6, by6(c.upY)], dot: P = [tip[0] + SAT.dx[i], tip[1] - SAT.up];
        path(s, [tip, dot], { color: C.slate, w: 1.3, free: true });
        s.add(`<circle cx="${r1(dot[0])}" cy="${r1(dot[1])}" r="2.6" fill="${C.slate}"/>`);
        keep(s, arcPts(dot[0], dot[1], 2.6, 2.6, 12));
      }
    }
    s.add(`<circle cx="${r1(C0[0])}" cy="${r1(C0[1])}" r="5.5" fill="${C.mari}" stroke="#fff" stroke-width="1.4"/>`);
    keep(s, arcPts(C0[0], C0[1], 5.5, 5.5, 14));
    lab(s, c.cx, 254, `(${c.key})`, { size: 11, bold: true });
    lab(s, c.cx, 267, c.title, { size: 11, bold: true });
    c.desc.forEach((t, i) => lab(s, c.cx, 282 + i * 12, t, { size: 10, color: C.slate }));
  }
  const a = CHROMS[0], cc = CHROMS[2], A0 = cenOf(a);
  const armTip: P = [a.cx + a.up[0] * K6, by6(a.upY)];
  s.tag(8, 8, 'sister chromatids', armTip[0] - 3, armTip[1] + 3);
  s.tag(44, 38, 'centromere', A0[0], A0[1] - 5.5, { hi: true });
  const tipL: P = [cc.cx + cc.up[0] * K6, by6(cc.upY)], tipR: P = [cc.cx + cc.up[1] * K6, by6(cc.upY)];
  const dotR: P = [tipR[0] + SAT.dx[1], tipR[1] - SAT.up];
  s.tag(150, 8, 'secondary constriction', tipL[0] + 1, tipL[1] - 2);
  s.tag(232, 38, 'satellite', dotR[0], dotR[1] - 2.6);
  return s;
}
function check86(): Check[] {
  const s = draw86();
  const fr = CHROMS.map(frac);
  const bookFr = [(530 - 452) / 152, (510 - 452) / 152, (483 - 452) / 152, (461 - 452) / 152];
  const arm = (c: Chrom, dx: number, up: boolean) => Math.hypot(dx * K6, (up ? by6(c.upY) : by6(BOOK_BOT)) - cenOf(c)[1]);
  const aL = CHROMS[0], bL = CHROMS[1], cL = CHROMS[2], dL = CHROMS[3];
  const tags = ['sister chromatids', 'centromere', 'secondary constriction', 'satellite'];
  return [
    ['The centromere sits at 0.50, 0.37, 0.20 and 0.06 of the chromosome\'s height in (a) to (d): moving from the middle to the very end', fr.every((f, i) => Math.abs(f - bookFr[i]) < 1e-9) && fr[0] > fr[1] && fr[1] > fr[2] && fr[2] > fr[3] && Math.abs(fr[0] - 0.5) < 0.03],
    ['(a) metacentric has two equal arms (the two lengths above and below the centromere agree within 3 px of the page\'s drawing)', Math.abs(arm(aL, aL.up[0], true) - arm(aL, aL.lo[0], false)) < 3],
    ['(b) sub-metacentric: the lower arms are clearly longer than the upper ones (ratio above 1.3)', arm(bL, bL.lo[0], false) / arm(bL, bL.up[0], true) > 1.3],
    ['(c) acrocentric has one tiny arm: upper arms under a quarter of the lower ones; only (c) carries satellites', arm(cL, cL.up[0], true) / arm(cL, cL.lo[0], false) < 0.25 && CHROMS.filter((c) => c.key === 'c').length === 1],
    ['(d) telocentric: the centromere is at the very end, with no arm above it, only the single arm below (as two chromatids)', dL.up.length === 0 && dL.lo.length === 2 && cenOf(dL)[1] - by6(BOOK_TOP) < 0.1 * (by6(BOOK_BOT) - by6(BOOK_TOP))],
    ['Each chromosome is drawn as an X-shaped pair of sister chromatids with a centromere marked in highlight colour (four centromeres)', CHROMS.length === 4],
    ['The four panel titles, their small descriptions and the four tags are on the drawing', tags.every((t) => tagged(s, t)) && ['(a)', '(b)', '(c)', '(d)'].every((t) => has(s, t)) && ['Metacentric', 'Sub-metacentric', 'Acrocentric', 'Telocentric', '(arms equal)', '(arms unequal)', '(one tiny arm)', '(single arm)'].every((t) => has(s, t))],
    ['The centromere is the one highlight (marigold)', tagged(s, 'centromere')],
    ...layout(s), clean(s),
  ];
}
const fig86: Diagram = { id: 'b11-08-fig-8.6', topic: 2, name: 'Four chromosome types', cases: [{ chip: 'Chromosome types', cap: CAP86 }], draw: draw86, check: check86 };

/** BIOLOGY CLASS 11, CHAPTER 8 (Cell: The Unit of Life): the drawings of the Master Reference book on pp. 470-532, redrawn. */
export const DIAGRAMS_BIOLOGY_11_08: Diagram[] = [fig81, fig82, fig83, fig84, fig85, fig86];
