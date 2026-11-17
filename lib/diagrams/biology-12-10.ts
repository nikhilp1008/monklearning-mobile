import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 10 (Biotechnology and its Applications): the drawings of the Master Reference book on pp. 534-599, redrawn.
 * Every page of the range was counted (pdfimages -list: no raster image anywhere; the shapes seen on the page images). The
 * figures sit on their own "CHAPTER 10 . FIGURES" pages: pp. 538, 540, 546, 553, 559, 565 and 571 (the captions are printed
 * earlier, on pp. 537, 539, 545, 552, 558, 564 and 570, and again under each drawing). The other pages, and every Additional
 * topic (pp. 574-599), hold text, tables and page rules only. SEVEN drawings, all numbered, none unnumbered:
 *
 *   Figure 10.1 (drawing p. 538), Topic 01, topic index 0: how the Bt toxin works, four panels (one column).
 *   Figure 10.2 (drawing p. 540), Topic 01, topic index 0: RNA interference against the root-knot nematode (a column of four boxes).
 *   Figure 10.3 (drawing p. 546), Topic 02, topic index 1: two routes to insulin (two cases: the natural route, the Eli Lilly rDNA route).
 *   Figure 10.4 (drawing p. 553), Topic 03, topic index 2: the 1990 ADA gene-therapy procedure (ex vivo).
 *   Figure 10.5 (drawing p. 559), Topic 04, topic index 3: molecular diagnosis (three cases: PCR, probe and autoradiography, ELISA).
 *   Figure 10.6 (drawing p. 565), Topic 05, topic index 4: the five uses of transgenic animals.
 *   Figure 10.7 (drawing p. 571), Topic 06, topic index 5: biopiracy and regulation.
 *
 * THE BOOK'S, as printed: every word of every heading, box, note and label (the em dash in the 10.3 footer is a colon here, the
 * house rule; the figures carry no other); the numbering and order of the panels and steps (Bt 1 to 4; RNAi Steps 1 to 3 and
 * the outcome box; ADA steps 1 to 5 with the cDNA fed into the retrovirus before step 4, the return to the patient and the
 * "must repeat periodically (not permanent)" note, and the embryonic-stage note); the proinsulin order B region, C-peptide,
 * A region, with two S-S bridges, the removal of the C-peptide, mature insulin = chain A + chain B held by S-S bridges, the
 * Eli Lilly route with the two genes, two plasmids, two bioreactors, joining by disulphide bonds and HUMULIN; the PCR doubling
 * 1, 2, 4; the probe on the complementary normal gene giving a dark spot and the mutated gene none; the five uses of transgenic
 * animals with Rosie (1997) and the 95 per cent figure; the biopiracy chain and the two responses (Indian Patents Bill, GEAC).
 * No quantity is printed in any of the seven (no sizes, no amino-acid counts, no temperatures), so the checks are structural.
 * SCHEMATIC: every box size and position and the column layout (re-laid for a phone: the four Bt panels, the three diagnosis
 * panels and the two insulin routes are stacked or split into cases instead of standing side by side), the shapes of the
 * bacterium, cell, larva, midgut, gel-free film, well, mouse and sheep, the wave forms of the RNA strands, the arrow routes.
 * The book colours its figures (green, blue, orange, red); the house diagrams use no fills and ONE marigold highlight, so
 * colour carries no meaning here: Figure 10.5 therefore reads "antibodies (Y shapes) bind antigens (dots)" where the book says
 * "(blue)" and "(red)", and the highlight marks, per drawing, the step the figure is about (Bt pores; the RNAi outcome; the
 * disulphide join; the return loop; the amplified copies, the radioactive tag, the colour change; the 95 per cent hub; the
 * biopiracy box).
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
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: string } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
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
/** A white pill, ink-edged, bottom right, in STIX: the result of the drawing (the kit's result tag is Onest, which has no subscripts or Greek). */
function pill(s: Sketch, html: string, o: { size?: number; right?: boolean } = {}): Rect {
  const size = o.size ?? 13, w = wOf(html, size) + 26, x0 = o.right === false ? (s.w - w) / 2 : s.w - 8 - w, y0 = s.h - 38, rect: Rect = [x0, y0, x0 + w, y0 + 30];
  s.tags.push({ name: plain(html), rect, from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  s.text(x0 + w / 2, y0 + 20, html, { size, semibold: true });
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
const all = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const hiCount = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
const heads = (s: Sketch) => (s.svg().match(/<path d="M[^"]*Z" fill="#(?:2E2A24|EEA31F)"\/>/g) ?? []).length;

/* ---------- shape helpers ---------- */
/** An arrow that the label checks keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) { s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.8 }); keep(s, [a, b]); }
/** Lines of one label under each other, size * 1.2 apart. */
function ml(s: Sketch, x: number, y: number, lines: string[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string; step?: number } = {}) {
  const step = o.step ?? (o.size ?? 12) * 1.2;
  lines.forEach((t, i) => lab(s, x, y + i * step, t, o));
}
function wave(s: Sketch, x0: number, x1: number, y: number, amp: number, cycles: number, o: { color?: string; w?: number } = {}) {
  const n = cycles * 16;
  path(s, Array.from({ length: n + 1 }, (_, i): P => [x0 + ((x1 - x0) * i) / n, y - amp * Math.sin((2 * Math.PI * cycles * i) / n)]), { color: o.color ?? C.ink, w: o.w ?? 1.8 });
}
function diamond(s: Sketch, cx: number, cy: number, r: number) { path(s, [[cx, cy - r], [cx + r * 0.75, cy], [cx, cy + r], [cx - r * 0.75, cy]], { close: true, w: 1.5 }); }
function star(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number } = {}) {
  path(s, Array.from({ length: 10 }, (_, i): P => { const a = -Math.PI / 2 + (i * Math.PI) / 5, q = i % 2 ? r * 0.45 : r; return [cx + q * Math.cos(a), cy + q * Math.sin(a)]; }), { close: true, color: o.color, w: o.w ?? 1.5 });
}
function ring(s: Sketch, cx: number, cy: number, r: number, o: { color?: string; w?: number } = {}) { ell(s, cx, cy, r, r, o); }
function rectP(s: Sketch, r: Rect, o: { color?: string; w?: number; dash?: string } = {}) { path(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { close: true, ...o }); }
function mouse(s: Sketch, cx: number, cy: number) {
  ell(s, cx, cy, 10, 6, { w: 1.5 }); ell(s, cx + 11, cy - 2, 5, 4, { w: 1.5 }); ell(s, cx + 10, cy - 6.5, 2.4, 2.4, { w: 1.3 });
  path(s, [[cx - 10, cy], [cx - 17, cy - 1], [cx - 22, cy - 4]], { color: C.slate, w: 1.3 });
}
const fig = (id: string, topic: number, name: string, cases: Diagram['cases'], draw: Diagram['draw'], check: Diagram['check']): Diagram => ({ id, topic, name, cases, draw, check });

/* ================= Figure 10.1 ================= */
const CAP101 = 'How the Bt toxin works, in four panels. (1) <i>Bacillus thuringiensis</i> stores the toxin as inactive protoxin crystals. (2) The <i>cry</i> gene is transferred into the cotton plant, which makes the inactive protoxin in its tissues. (3) A bollworm larva eats the leaf; the alkaline gut solubilises the crystal into the active toxin. (4) The active toxin binds the midgut epithelial cells and forms pores, so the cells swell and burst and the insect dies.';
const PH = 112, PG = 22, P0 = 12;
const panelY = (i: number) => P0 + i * (PH + PG);
const BT_HEAD = ['Bacterium', 'Bt cotton plant', 'Insect eats leaf', 'Midgut epithelium'];
function draw101(): Sketch {
  const s = new Sketch(W, P0 * 2 + 4 * PH + 3 * PG);
  for (let i = 0; i < 4; i++) {
    const y = panelY(i), name = `panel ${i + 1}`, hi = i === 3;
    box(s, name, [14, y, 346, y + PH]);
    lab(s, 36, y + 28, String(i + 1), { size: 18, bold: true, color: hi ? C.amber : C.text, within: name });
    lab(s, 54, y + 27, BT_HEAD[i], { size: 13, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: name });
    if (i < 3) arrow(s, [180, y + PH + 3], [180, y + PH + PG - 3]);
  }
  // panel 1: the bacterium with its crystals
  let y = panelY(0);
  lab(s, 90, y + 45, '<i>Bacillus thuringiensis</i>', { size: 10.5, color: C.slate, within: 'panel 1' });
  path(s, [[44, y + 52], [136, y + 52], [148, y + 62], [148, y + 90], [136, y + 100], [44, y + 100], [32, y + 90], [32, y + 62]], { close: true, w: 1.7 });
  [[56, 68], [80, 84], [104, 70], [126, 88]].forEach(([dx, dy]) => diamond(s, dx, y + dy, 6));
  ml(s, 160, y + 62, ['inactive protoxin', 'crystals'], { size: 11, anchor: 'start', within: 'panel 1' });
  ml(s, 160, y + 88, ['(harmless to the', 'bacterium)'], { size: 10, anchor: 'start', color: C.slate, within: 'panel 1' });
  // panel 2: the plant cell making protoxin
  y = panelY(1);
  lab(s, 90, y + 45, 'leaf cell', { size: 10.5, color: C.slate, within: 'panel 2' });
  ell(s, 90, y + 77, 52, 25, { w: 1.7 });
  rectP(s, [64, y + 66, 116, y + 88], { w: 1.4 });
  [[76, 77], [91, 72], [104, 81]].forEach(([dx, dy]) => diamond(s, dx, y + dy, 4.5));
  ml(s, 160, y + 58, ['<i>cry</i> gene transferred;', 'protoxin made in plant', 'tissue (inactive)'], { size: 11, anchor: 'start', within: 'panel 2' });
  lab(s, 160, y + 98, 'plant is unharmed', { size: 10, anchor: 'start', color: C.slate, within: 'panel 2' });
  // panel 3: the larva and the midgut
  y = panelY(2);
  [40, 51, 62, 73, 84].forEach((x) => ring(s, x, y + 55, 5.5, { w: 1.5 }));
  ell(s, 104, y + 55, 14, 5, { w: 1.5 });
  rectP(s, [34, y + 66, 146, y + 106], { w: 1.7 });
  lab(s, 90, y + 80, 'midgut', { size: 9.5, color: C.slate });
  diamond(s, 52, y + 94, 5);
  arrow(s, [64, y + 94], [104, y + 94], { w: 1.5 });
  star(s, 126, y + 94, 7);
  ml(s, 160, y + 62, ['alkaline pH solubilises', 'crystal → ACTIVE toxin'], { size: 11, anchor: 'start', within: 'panel 3', step: 12.5 });
  ml(s, 160, y + 88, ['protoxin → active toxin', 'only in the insect gut'], { size: 10, anchor: 'start', color: C.slate, within: 'panel 3', step: 11.5 });
  // panel 4: the pores (the highlight)
  y = panelY(3);
  [36, 64, 92, 120].forEach((x) => rectP(s, [x, y + 66, x + 24, y + 100], { w: 1.6 }));
  [62, 90, 118].forEach((x) => {
    star(s, x, y + 46, 5);
    arrow(s, [x, y + 53], [x, y + 64], { w: 1.3 });
    ell(s, x, y + 66, 3.6, 2.4, { color: C.mari, w: 1.6 });
  });
  ml(s, 160, y + 54, ['toxin binds surface', 'and punches pores;', 'cells swell and burst'], { size: 10.5, anchor: 'start', within: 'panel 4', step: 12 });
  ml(s, 160, y + 92, ['pore formation → cell', 'lysis → insect dies'], { size: 10.5, anchor: 'start', bold: true, color: C.amber, within: 'panel 4', step: 12 });
  return s;
}
function check101(): Check[] {
  const s = draw101();
  return [
    ['Four panels in the book\'s order: 1 Bacterium, 2 Bt cotton plant, 3 Insect eats leaf, 4 Midgut epithelium', all(s, BT_HEAD) && all(s, ['1', '2', '3', '4']) && [0, 1, 2, 3].every((i) => i === 0 || panelY(i) > panelY(i - 1) + PH)],
    ['Panels 1 and 2: Bacillus thuringiensis, leaf cell, inactive protoxin crystals, cry gene transferred, plant is unharmed', all(s, ['Bacillus thuringiensis', 'leaf cell', 'inactive protoxin', 'crystals', '(harmless to the', 'bacterium)', 'cry gene transferred;', 'protoxin made in plant', 'tissue (inactive)', 'plant is unharmed'])],
    ['Panel 3: the alkaline pH solubilises the crystal into the ACTIVE toxin, only in the insect gut', all(s, ['midgut', 'alkaline pH solubilises', 'crystal → ACTIVE toxin', 'protoxin → active toxin', 'only in the insect gut'])],
    ['Panel 4: binds, punches pores, cells swell and burst; pore formation, cell lysis, insect dies', all(s, ['toxin binds surface', 'and punches pores;', 'cells swell and burst', 'pore formation → cell', 'lysis → insect dies'])],
    ['Seven arrowheads: three between the panels, three toxin arrows onto the pores, one protoxin to toxin in the gut', heads(s) === 7],
    ['The three pores are the highlight (panel 4)', hiCount(s) === 3],
    ...layout(s), clean(s),
  ];
}
const fig101 = fig('b12-10-fig-10.1', 0, 'How the Bt toxin works', [{ chip: 'Four panels', cap: CAP101 }], draw101, check101);

/* ================= Figure 10.2 ================= */
const CAP102 = 'RNA interference against the root-knot nematode <i>Meloidogyne incognita</i>. An <i>Agrobacterium</i>-based vector delivers the construct into a tobacco root cell; the cell makes sense and antisense RNA, which pair into dsRNA; the dsRNA silences the nematode\'s specific mRNA (no translation), so the parasite cannot survive and the plant is protected.';
const R2 = [10, 172, 320, 416].map((y, i) => [y, [140, 126, 74, 90][i]] as [number, number]);
function stepHead(s: Sketch, name: string, y: number, n: number, lines: string[]) {
  lab(s, 26, y + 20, `STEP ${n}`, { size: 11, anchor: 'start', bold: true, within: name });
  ml(s, 78, y + 20, lines, { size: 10.5, anchor: 'start', color: C.slate, within: name, step: 13 });
}
function draw102(): Sketch {
  const s = new Sketch(W, 516);
  const nm = ['b1', 'b2', 'b3', 'b4'];
  R2.forEach(([y, h], i) => {
    box(s, nm[i], [14, y, 346, y + h], i === 3 ? { color: C.mari, w: 2.2 } : {});
    if (i < 3) arrow(s, [180, y + h + 3], [180, y + h + 19]);
  });
  // box 1: the Agrobacterium delivers the construct to the root
  let y = R2[0][0];
  stepHead(s, 'b1', y, 1, ['Construct delivered to a root cell by an', 'Agrobacterium-based vector']);
  rectP(s, [40, y + 88, 150, y + 112], { w: 1.7 });
  rectP(s, [88, y + 70, 124, y + 96], { w: 1.7 });
  lab(s, 95, y + 128, 'tobacco root', { size: 10.5, color: C.slate, within: 'b1' });
  box(s, 'agro', [244, y + 80, 336, y + 104]);
  lab(s, 290, y + 96, '<i>Agrobacterium</i>', { size: 10, within: 'agro' });
  arrow(s, [240, y + 92], [130, y + 92]);
  ml(s, 186, y + 66, ['delivers gene', 'construct'], { size: 10, color: C.slate, within: 'b1', step: 12 });
  // box 2: sense and antisense RNA pair into dsRNA
  y = R2[1][0];
  stepHead(s, 'b2', y, 2, ['Complementary strands pair to form', 'double-stranded RNA']);
  lab(s, 250, y + 52, 'inside the host cell', { size: 10, color: C.slate, within: 'b2' });
  lab(s, 66, y + 68, 'sense RNA', { size: 10, color: C.slate, within: 'b2' });
  wave(s, 30, 102, y + 80, 4, 4, { color: C.ink });
  wave(s, 30, 102, y + 100, 4, 4, { color: C.slate });
  lab(s, 66, y + 116, 'antisense RNA', { size: 10, color: C.slate, within: 'b2' });
  arrow(s, [110, y + 84], [152, y + 91], { w: 1.5 });
  arrow(s, [110, y + 98], [152, y + 94], { w: 1.5 });
  wave(s, 164, 250, y + 86, 3.5, 4, { color: C.ink });
  wave(s, 164, 250, y + 96, 3.5, 4, { color: C.slate });
  lab(s, 207, y + 116, 'dsRNA', { size: 11, bold: true, within: 'b2' });
  // box 3: RNAi
  y = R2[2][0];
  stepHead(s, 'b3', y, 3, ['dsRNA initiates RNAi']);
  lab(s, 180, y + 46, 'RNAi: nematode mRNA silenced', { size: 14, bold: true, within: 'b3' });
  lab(s, 180, y + 63, '(no translation → essential protein not made)', { size: 10.5, color: C.slate, within: 'b3' });
  // box 4: the outcome (the highlight)
  y = R2[3][0];
  wave(s, 30, 104, y + 34, 5, 3, { color: C.ink, w: 2.4 });
  rectP(s, [28, y + 46, 110, y + 54], { w: 1.5 });
  path(s, [[28, y + 22], [108, y + 50]], { w: 2.4 });
  path(s, [[108, y + 22], [28, y + 50]], { w: 2.4 });
  lab(s, 28, y + 74, '<i>Meloidogyne incognita</i>', { size: 10, anchor: 'start', color: C.slate, within: 'b4' });
  ml(s, 250, y + 40, ['parasite cannot survive', '→ plant protected'], { size: 12, bold: true, color: C.amber, within: 'b4', step: 16 });
  return s;
}
function check102(): Check[] {
  const s = draw102();
  return [
    ['Steps 1 to 3 as the book numbers them, then the outcome box: parasite cannot survive, plant protected', all(s, ['STEP 1', 'STEP 2', 'STEP 3', 'parasite cannot survive', '→ plant protected']) && R2.every(([y], i) => i === 0 || y > R2[i - 1][0] + R2[i - 1][1])],
    ['Step 1: construct delivered to a root cell by an Agrobacterium-based vector (arrow runs from Agrobacterium to the root cell, leftwards)', all(s, ['Construct delivered to a root cell by an', 'Agrobacterium-based vector', 'Agrobacterium', 'delivers gene', 'construct', 'tobacco root'])],
    ['Step 2: sense RNA and antisense RNA, inside the host cell, pair into dsRNA', all(s, ['inside the host cell', 'sense RNA', 'antisense RNA', 'dsRNA', 'Complementary strands pair to form', 'double-stranded RNA'])],
    ['Step 3: dsRNA initiates RNAi; the nematode mRNA is silenced, no translation, essential protein not made', all(s, ['dsRNA initiates RNAi', 'RNAi: nematode mRNA silenced', '(no translation → essential protein not made)'])],
    ['Three arrows join the four boxes, plus the delivery arrow and the two arrows into dsRNA (six heads in all)', heads(s) === 6],
    ['The outcome box (Meloidogyne incognita crossed out) is the highlight', hiCount(s) === 1 && has(s, 'Meloidogyne incognita')],
    ...layout(s), clean(s),
  ];
}
const fig102 = fig('b12-10-fig-10.2', 0, 'RNA interference against the root-knot nematode', [{ chip: 'RNAi', cap: CAP102 }], draw102, check102);

/* ================= Figure 10.3 ================= */
const CAP103_NAT = 'Two routes to insulin. Natural route: single-chain proinsulin (B region, C-peptide, A region, with two S-S bridges between A and B) loses its C-peptide to give mature insulin (chain A + chain B held by S-S bridges).';
const CAP103_LILLY = 'Two routes to insulin. Eli Lilly rDNA route: genes for chains A and B go into separate <i>E. coli</i> plasmids, the chains are made separately, extracted, and joined by disulphide bonds to give humulin. Same product, two different paths - do not mix them up.';
const FOOT = 'Same product, two different paths: do not mix them up.';
function bars(s: Sketch, yB: number, yA: number, bridgeColor: string) {
  rectP(s, [60, yB, 230, yB + 16], { w: 1.7 });
  rectP(s, [60, yA, 230, yA + 16], { w: 1.7 });
  [100, 150].forEach((x) => path(s, [[x, yB + 16], [x, yA]], { color: bridgeColor, w: 2 }));
  lab(s, 42, yB + 13, 'B', { size: 12, bold: true });
  lab(s, 42, yA + 13, 'A', { size: 12, bold: true });
}
function draw103(c: { mode: 'nat' | 'lilly' }): Sketch {
  const s = new Sketch(W, 440);
  if (c.mode === 'nat') {
    lab(s, 180, 24, 'Natural route (in the body)', { size: 14, bold: true });
    lab(s, 150, 52, 'PROINSULIN (single folded chain)', { size: 11.5, bold: true });
    bars(s, 70, 112, C.ink);
    lab(s, 125, 103, 'S–S', { size: 10, bold: true, color: C.slate });
    path(s, Array.from({ length: 19 }, (_, i): P => { const a = -Math.PI / 2 + (Math.PI * i) / 18; return [230 + 21 * Math.cos(a), 99 + 21 * Math.sin(a)]; }), { color: C.slate, w: 4.5 });
    lab(s, 264, 103, 'C-peptide', { size: 11, anchor: 'start', color: C.slate });
    ml(s, 150, 150, ['B region – C-peptide (loop) – A region;', 'two S–S bridges join A and B'], { size: 10, color: C.slate, step: 13 });
    arrow(s, [150, 178], [150, 214]);
    ml(s, 166, 190, ['C-peptide removed', '(cell peptidases)'], { size: 10.5, anchor: 'start', color: C.slate, step: 13 });
    bars(s, 232, 272, C.ink);
    ell(s, 282, 258, 13, 8, { color: C.slate, w: 4 });
    lab(s, 282, 288, 'free C-peptide', { size: 10, color: C.slate });
    box(s, 'mature', [40, 312, 320, 364], { color: C.mari, w: 2.2 });
    lab(s, 180, 334, 'MATURE INSULIN = chain A + chain B', { size: 12, bold: true, color: C.amber, within: 'mature' });
    lab(s, 180, 351, 'held by S–S bridges', { size: 12, bold: true, color: C.amber, within: 'mature' });
  } else {
    lab(s, 180, 24, 'Eli Lilly rDNA route (industry, 1983)', { size: 14, bold: true });
    box(s, 'geneA', [24, 44, 164, 78]); lab(s, 94, 65, 'gene for chain A', { size: 11.5, within: 'geneA' });
    box(s, 'geneB', [196, 44, 336, 78]); lab(s, 266, 65, 'gene for chain B', { size: 11.5, within: 'geneB' });
    [94, 266].forEach((x) => {
      arrow(s, [x, 80], [x, 104]);
      ring(s, x, 130, 24, { color: C.slate, w: 1.8 }); lab(s, x, 133, 'plasmid', { size: 9 });
      arrow(s, [x, 156], [x, 182]);
    });
    ml(s, 180, 122, ['each into', 'an <i>E. coli</i>', 'plasmid'], { size: 9.5, color: C.slate, step: 12 });
    box(s, 'reA', [24, 184, 164, 240]); ml(s, 94, 205, ['bioreactor:', 'chain A made', 'separately'], { size: 11, within: 'reA', step: 13 });
    box(s, 'reB', [196, 184, 336, 240]); ml(s, 266, 205, ['bioreactor:', 'chain B made', 'separately'], { size: 11, within: 'reB', step: 13 });
    arrow(s, [100, 244], [160, 294]);
    arrow(s, [260, 244], [200, 294]);
    ml(s, 180, 262, ['extracted,', 'purified'], { size: 9.5, color: C.slate, step: 12 });
    box(s, 'join', [60, 296, 300, 330], { color: C.mari, w: 2.2, dash: '5 4' });
    lab(s, 180, 317, 'join by creating disulphide bonds', { size: 11, color: C.amber, within: 'join' });
    arrow(s, [180, 333], [180, 353]);
    box(s, 'hum', [110, 356, 250, 390]); lab(s, 180, 378, 'HUMULIN', { size: 13, bold: true, within: 'hum' });
  }
  pill(s, FOOT, { size: 11 });
  return s;
}
function check103(c: { mode: 'nat' | 'lilly' }): Check[] {
  const s = draw103(c);
  const out: Check[] = [['The book\'s footer is the one result pill: "Same product, two different paths: do not mix them up."', s.tags.some((t) => t.name === FOOT)]];
  if (c.mode === 'nat') {
    out.push(
      ['Proinsulin in the book\'s order B region, C-peptide, A region, with two S-S bridges between A and B (two bridge lines above, two below)', all(s, ['PROINSULIN (single folded chain)', 'B region – C-peptide (loop) – A region;', 'two S–S bridges join A and B', 'S–S', 'C-peptide']) && (s.svg().match(/stroke-width="2"/g) ?? []).length === 4],
      ['The C-peptide is removed (cell peptidases) and the free C-peptide is shown apart from the two chains', all(s, ['C-peptide removed', '(cell peptidases)', 'free C-peptide'])],
      ['Mature insulin = chain A + chain B held by S-S bridges, in the highlight; no amino-acid count is printed in the figure', all(s, ['MATURE INSULIN = chain A + chain B', 'held by S–S bridges']) && hiCount(s) === 1],
    );
  } else {
    out.push(
      ['Two genes (chain A, chain B), each into its own E. coli plasmid, each made separately in its own bioreactor: two parallel columns', all(s, ['gene for chain A', 'gene for chain B', 'each into', 'an E. coli', 'plasmid', 'bioreactor:', 'chain A made', 'chain B made', 'separately']) && s.labels.filter((l) => l.text === 'plasmid').length === 3],
      ['The chains are extracted, purified, then joined by creating disulphide bonds (highlight) to give HUMULIN', all(s, ['extracted,', 'purified', 'join by creating disulphide bonds', 'HUMULIN']) && hiCount(s) === 1],
      ['Seven arrows: gene to plasmid, plasmid to bioreactor (twice each), two converging on the join, join to HUMULIN', heads(s) === 7],
    );
  }
  return [...out, ...layout(s), clean(s)];
}
const fig103 = fig('b12-10-fig-10.3', 1, 'Two routes to insulin', [{ chip: 'Natural route', cap: CAP103_NAT, mode: 'nat' }, { chip: 'Eli Lilly rDNA route', cap: CAP103_LILLY, mode: 'lilly' }], draw103, check103);

/* ================= Figure 10.4 ================= */
const CAP104 = 'The 1990 ADA gene-therapy procedure (ex vivo). (1) Lymphocytes are taken from the patient\'s blood and (2) grown in culture. (3) A functional ADA cDNA is inserted into a retrovirus (vector), which (4) delivers the ADA gene into the cultured lymphocytes. (5) The corrected lymphocytes are re-infused into the patient; the cycle must be repeated periodically because the treatment is not permanent. A permanent cure would require introducing the gene at an early embryonic stage.';
const ADA: { name: string; rect: Rect; lines: string[] }[] = [
  { name: 's1', rect: [28, 14, 172, 68], lines: ['(1) Patient:', 'lymphocytes taken', 'from blood'] },
  { name: 's3', rect: [188, 14, 332, 68], lines: ['(3) functional', 'ADA cDNA'] },
  { name: 's2', rect: [28, 90, 172, 134], lines: ['(2) Lymphocytes', 'grown in culture'] },
  { name: 'vec', rect: [188, 90, 332, 134], lines: ['inserted into retrovirus', '(vector)'] },
  { name: 's4', rect: [28, 156, 332, 208], lines: ['(4) Retrovirus delivers ADA gene into', 'cultured lymphocytes'] },
  { name: 's5', rect: [28, 230, 332, 282], lines: ['(5) Corrected lymphocytes', 're-infused into patient'] },
];
function draw104(): Sketch {
  const s = new Sketch(W, 384);
  ADA.forEach((b) => {
    box(s, b.name, b.rect);
    const cy = (b.rect[1] + b.rect[3]) / 2, cx = (b.rect[0] + b.rect[2]) / 2, n = b.lines.length;
    ml(s, cx, cy - ((n - 1) * 13) / 2 + 4, b.lines, { size: 11, within: b.name, step: 13 });
  });
  arrow(s, [100, 70], [100, 88]); arrow(s, [260, 70], [260, 88]);
  arrow(s, [100, 136], [100, 154]); arrow(s, [260, 136], [260, 154]);
  arrow(s, [180, 210], [180, 228]);
  // the return to the patient (the highlight): periodic, not permanent
  path(s, [[28, 256], [14, 256], [14, 41]], { color: C.mari, w: 2.2, dash: '6 4' });
  arrow(s, [14, 41], [28, 41], { color: C.mari, w: 2.2 });
  lab(s, 26, 304, 'must repeat periodically (not permanent)', { size: 11, anchor: 'start', bold: true, color: C.amber });
  box(s, 'perm', [28, 322, 332, 370]);
  lab(s, 180, 342, 'Permanent cure = introduce the gene', { size: 12, bold: true, within: 'perm' });
  lab(s, 180, 358, 'at an early embryonic stage', { size: 12, bold: true, within: 'perm' });
  return s;
}
function check104(): Check[] {
  const s = draw104();
  const r = (n: string) => ADA.find((b) => b.name === n)!.rect;
  return [
    ['Five numbered steps as the book prints them: (1) patient, (2) culture, (3) functional ADA cDNA, (4) retrovirus delivers, (5) re-infused', all(s, ['(1) Patient:', '(2) Lymphocytes', '(3) functional', '(4) Retrovirus delivers ADA gene into', '(5) Corrected lymphocytes', 're-infused into patient', 'lymphocytes taken', 'from blood', 'grown in culture', 'ADA cDNA', 'cultured lymphocytes'])],
    ['The cDNA is inserted into the retrovirus (vector) before step 4, and both it and the cultured lymphocytes feed step 4', all(s, ['inserted into retrovirus', '(vector)']) && r('vec')[3] < r('s4')[1] && r('s2')[3] < r('s4')[1] && r('s3')[3] < r('vec')[1]],
    ['Step 5 follows step 4 and the corrected cells return to step 1 (highlighted dashed loop): must repeat periodically (not permanent)', r('s5')[1] > r('s4')[3] && hiCount(s) === 2 && has(s, 'must repeat periodically (not permanent)')],
    ['The permanent cure note: introduce the gene at an early embryonic stage', all(s, ['Permanent cure = introduce the gene', 'at an early embryonic stage'])],
    ['Six arrowheads: four down the columns, one into step 5, one back into the patient', heads(s) === 6],
    ...layout(s), clean(s),
  ];
}
const fig104 = fig('b12-10-fig-10.4', 2, 'The 1990 ADA gene-therapy procedure', [{ chip: 'Ex vivo procedure', cap: CAP104 }], draw104, check104);

/* ================= Figure 10.5 ================= */
const CAP105_PCR = 'Molecular diagnosis. PCR amplifies a nucleic acid so that tiny amounts (HIV, cancer mutations) can be detected.';
const CAP105_PROBE = 'Molecular diagnosis. A radioactive-tagged single-stranded probe pairs with the complementary normal gene and gives a dark spot on the film, whereas a mutated gene gives no spot.';
const CAP105_ELISA = 'Molecular diagnosis. ELISA uses antigen-antibody interaction, with a colour change, to detect a pathogen protein or antibody.';
const DUP_H = 5;
function duplex(s: Sketch, cx: number, y: number, w: number, hi = false) {
  path(s, [[cx - w / 2, y], [cx + w / 2, y]], { color: hi ? C.mari : C.ink, w: 2.2 });
  path(s, [[cx - w / 2, y + DUP_H], [cx + w / 2, y + DUP_H]], { color: hi ? C.mari : C.slate, w: 2.2 });
}
const PCR_ROWS = [[180], [102, 258], [62, 142, 218, 298]];
function draw105(c: { mode: 'pcr' | 'probe' | 'elisa' }): Sketch {
  const s = new Sketch(W, c.mode === 'pcr' ? 312 : c.mode === 'probe' ? 336 : 292);
  lab(s, 180, 22, 'Molecular Diagnosis', { size: 14, bold: true });
  if (c.mode === 'pcr') {
    lab(s, 180, 52, 'PCR', { size: 13, bold: true });
    duplex(s, 180, 86, 70);
    [102, 258].forEach((x) => arrow(s, [x === 102 ? 162 : 198, 98], [x, 136], { w: 1.5 }));
    [102, 258].forEach((x) => duplex(s, x, 148, 80));
    PCR_ROWS[1].forEach((x, i) => [x - 40, x + 40].forEach((t) => arrow(s, [x + (t < x ? -12 : 12), 162], [t + 0, 206], { w: 1.5 })));
    PCR_ROWS[2].forEach((x) => duplex(s, x, 216, 56, true));
    ml(s, 180, 262, ['amplify nucleic acid →', 'detect tiny amounts', '(HIV, cancer mutations)'], { size: 11, step: 14 });
  } else if (c.mode === 'probe') {
    lab(s, 180, 52, 'Probe + autoradiography', { size: 13, bold: true });
    path(s, [[50, 90], [170, 90]], { color: C.mari, w: 2.2 });
    path(s, [[50, 102], [170, 102]], { color: C.slate, w: 2.2 });
    [58, 82, 106, 130, 154].forEach((x) => path(s, [[x, 92], [x, 100]], { color: C.grey, w: 1.2 }));
    star(s, 192, 80, 7, { color: C.mari, w: 1.8 });
    ml(s, 208, 76, ['radioactive-', 'tagged probe'], { size: 10, anchor: 'start', color: C.amber, step: 12 });
    lab(s, 50, 122, 'complementary gene', { size: 10.5, anchor: 'start', color: C.slate });
    lab(s, 180, 150, 'photographic film', { size: 10, color: C.slate });
    rectP(s, [60, 160, 160, 250], { w: 1.7 });
    rectP(s, [200, 160, 300, 250], { w: 1.7 });
    s.add('<circle cx="110" cy="205" r="26" fill="#2E2A24"/>'); keep(s, Array.from({ length: 33 }, (_, i): P => [110 + 26 * Math.cos((i / 32) * 2 * Math.PI), 205 + 26 * Math.sin((i / 32) * 2 * Math.PI)]));
    ml(s, 110, 266, ['normal gene:', 'dark spot'], { size: 10.5, step: 13 });
    ml(s, 250, 266, ['mutated gene:', 'NO spot'], { size: 10.5, step: 13 });
    ml(s, 180, 304, ['complementary pairing reveals', 'normal vs mutated gene'], { size: 11, step: 14 });
  } else {
    lab(s, 180, 52, 'ELISA', { size: 13, bold: true });
    path(s, [[100, 80], [260, 80], [244, 190], [116, 190]], { close: true, color: C.mari, w: 2.2 });
    lab(s, 180, 104, 'colour change', { size: 11, color: C.amber });
    [150, 180, 210].forEach((x) => {
      ring(s, x, 148, 6, { w: 1.8 });
      path(s, [[x, 188], [x, 168]], { w: 1.8 });
      path(s, [[x - 8, 157], [x, 168], [x + 8, 157]], { w: 1.8 });
    });
    lab(s, 180, 214, 'antibodies (Y shapes) bind antigens (dots)', { size: 10, color: C.slate });
    ml(s, 180, 242, ['antigen–antibody interaction', 'detects pathogen protein', 'or antibody'], { size: 11, step: 14 });
  }
  return s;
}
function check105(c: { mode: 'pcr' | 'probe' | 'elisa' }): Check[] {
  const s = draw105(c);
  const out: Check[] = [['Panel title and the figure heading are the book\'s: "Molecular Diagnosis" over "' + { pcr: 'PCR', probe: 'Probe + autoradiography', elisa: 'ELISA' }[c.mode] + '"', all(s, ['Molecular Diagnosis', { pcr: 'PCR', probe: 'Probe + autoradiography', elisa: 'ELISA' }[c.mode]])]];
  if (c.mode === 'pcr') {
    out.push(
      ['PCR doubles the copies: 1 duplex, then 2, then 4 (one, two, four), the four amplified copies in the highlight', PCR_ROWS.map((r) => r.length).join() === '1,2,4' && PCR_ROWS.every((r, i) => r.length === 2 ** i) && hiCount(s) === 8],
      ['The book\'s note: amplify nucleic acid, detect tiny amounts (HIV, cancer mutations)', all(s, ['amplify nucleic acid →', 'detect tiny amounts', '(HIV, cancer mutations)'])],
      ['Six arrows: one duplex into two, two into four', heads(s) === 6],
    );
  } else if (c.mode === 'probe') {
    out.push(
      ['A radioactive-tagged probe (tag in the highlight) pairs with the complementary gene (five pairing rungs)', all(s, ['radioactive-', 'tagged probe', 'complementary gene']) && hiCount(s) === 2],
      ['Two film squares: normal gene gives a dark spot (a filled disc), mutated gene gives NO spot (empty square)', all(s, ['photographic film', 'normal gene:', 'dark spot', 'mutated gene:', 'NO spot']) && (s.svg().match(/<circle cx="110" cy="205" r="26"/g) ?? []).length === 1],
      ['Complementary pairing reveals normal vs mutated gene', all(s, ['complementary pairing reveals', 'normal vs mutated gene'])],
    );
  } else {
    out.push(
      ['An ELISA well with a colour change (highlight), three antigens each caught by an antibody', all(s, ['colour change']) && hiCount(s) === 1 && (s.svg().match(/<ellipse/g) ?? []).length === 3],
      ['The book\'s notes: antibodies bind antigens; antigen-antibody interaction detects pathogen protein or antibody (colour words of the book dropped: the drawing has no colours)', all(s, ['antibodies (Y shapes) bind antigens (dots)', 'antigen–antibody interaction', 'detects pathogen protein', 'or antibody'])],
    );
  }
  return [...out, ...layout(s), clean(s)];
}
const fig105 = fig('b12-10-fig-10.5', 3, 'Molecular diagnosis', [{ chip: 'PCR', cap: CAP105_PCR, mode: 'pcr' }, { chip: 'Probe and autoradiography', cap: CAP105_PROBE, mode: 'probe' }, { chip: 'ELISA', cap: CAP105_ELISA, mode: 'elisa' }], draw105, check105);

/* ================= Figure 10.6 ================= */
const CAP106 = 'The five uses of transgenic animals (95% of them are mice): (1) normal physiology and development; (2) disease models (cancer, Alzheimer\'s, cystic fibrosis); (3) biological products - Rosie (1997), whose milk contained human alpha-lactalbumin, and sheep making alpha-1-antitrypsin for emphysema; (4) vaccine safety testing (polio); (5) chemical safety (toxicity) testing with faster results.';
const USES: { name: string; y: number; h: number; lines: string[] }[] = [
  { name: 'u1', y: 90, h: 46, lines: ['(1) Normal physiology', '& development'] },
  { name: 'u2', y: 148, h: 56, lines: ['(2) Disease models', '(cancer, Alzheimer\'s,', 'cystic fibrosis)'] },
  { name: 'u3', y: 216, h: 78, lines: ['(3) Biological products', 'Rosie (cow, 1997): milk with', 'human α-lactalbumin;', 'sheep: α-1-antitrypsin', 'for emphysema'] },
  { name: 'u4', y: 306, h: 46, lines: ['(4) Vaccine safety', '(polio)'] },
  { name: 'u5', y: 364, h: 46, lines: ['(5) Chemical / toxicity', 'testing (faster results)'] },
];
function draw106(): Sketch {
  const s = new Sketch(W, 422);
  box(s, 'hub', [90, 12, 270, 62], { color: C.mari, w: 2.2 });
  lab(s, 180, 34, 'Transgenic Animals', { size: 12.5, bold: true, color: C.amber, within: 'hub' });
  lab(s, 180, 51, '(95% are mice)', { size: 12.5, bold: true, color: C.amber, within: 'hub' });
  const last = USES[4].y + USES[4].h / 2;
  path(s, [[90, 37], [24, 37], [24, last]], { color: C.ink, w: 1.8 });
  USES.forEach((u, i) => {
    const cy = u.y + u.h / 2;
    box(s, u.name, [40, u.y, 346, u.y + u.h]);
    arrow(s, [24, cy], [40, cy]);
    ml(s, 228, u.y + (u.h === 78 ? 17 : u.h === 56 ? 19 : 20), u.lines, { size: 11, within: u.name, step: 13 });
    if (i === 2) { // sheep
      ell(s, 70, cy, 15, 8, { w: 1.5 }); ell(s, 90, cy - 6, 5, 4, { w: 1.5 });
      [-8, 0, 8].forEach((dx) => path(s, [[70 + dx, cy + 8], [70 + dx, cy + 18]], { w: 1.5 }));
    } else {
      mouse(s, 70, cy);
      const ax = 98;
      if (i === 0) { ring(s, ax, cy - 4, 4, { color: C.slate, w: 1.4 }); path(s, [[ax + 3, cy - 1], [ax + 8, cy + 4]], { color: C.slate, w: 1.4 }); }
      if (i === 1) { path(s, [[ax - 4, cy - 4], [ax + 4, cy + 4]], { w: 1.6 }); path(s, [[ax + 4, cy - 4], [ax - 4, cy + 4]], { w: 1.6 }); }
      if (i === 3) rectP(s, [ax - 3, cy - 6, ax + 3, cy + 6], { color: C.slate, w: 1.4 });
      if (i === 4) path(s, [[ax, cy - 6], [ax + 5, cy + 4], [ax - 5, cy + 4]], { close: true, color: C.slate, w: 1.4 });
    }
  });
  return s;
}
function check106(): Check[] {
  const s = draw106();
  return [
    ['The hub says "Transgenic Animals (95% are mice)" and is the highlight', all(s, ['Transgenic Animals', '(95% are mice)']) && hiCount(s) === 1],
    ['Five uses, numbered (1) to (5) in the book\'s order, each with an arrow from the hub', USES.map((u) => u.lines[0].slice(0, 3)).join() === '(1),(2),(3),(4),(5)' && USES.every((u, i) => i === 0 || u.y > USES[i - 1].y + USES[i - 1].h) && heads(s) === 5],
    ['(1) normal physiology and development; (2) disease models (cancer, Alzheimer\'s, cystic fibrosis)', all(s, ['(1) Normal physiology', '& development', '(2) Disease models', '(cancer, Alzheimer\'s,', 'cystic fibrosis)'])],
    ['(3) biological products: Rosie (1997) with human alpha-lactalbumin in her milk, and sheep making alpha-1-antitrypsin for emphysema', all(s, ['(3) Biological products', 'Rosie (cow, 1997): milk with', 'human α-lactalbumin;', 'sheep: α-1-antitrypsin', 'for emphysema'])],
    ['(4) vaccine safety (polio); (5) chemical / toxicity testing (faster results)', all(s, ['(4) Vaccine safety', '(polio)', '(5) Chemical / toxicity', 'testing (faster results)'])],
    ...layout(s), clean(s),
  ];
}
const fig106 = fig('b12-10-fig-10.6', 4, 'The five uses of transgenic animals', [{ chip: 'Five uses', cap: CAP106 }], draw106, check106);

/* ================= Figure 10.7 ================= */
const CAP107 = 'Biopiracy and regulation. Indian bioresources and traditional knowledge (Neem, Turmeric, Basmati) are patented by a foreign company or institution without authorisation or payment, which is biopiracy. India\'s response is the Indian Patents Bill (second amendment: patent terms, emergency provisions, research and development initiatives). Separately, the GEAC regulates the validity and safety of GM organisms. Ethics in biotechnology means consent, safety, and fair benefit-sharing.';
function draw107(): Sketch {
  const s = new Sketch(W, 384);
  box(s, 'bio', [14, 14, 346, 76]);
  ml(s, 180, 34, ['Indian traditional bioresource /', 'knowledge', '(Neem, Turmeric, Basmati)'], { size: 11.5, within: 'bio', step: 14 });
  arrow(s, [180, 78], [180, 104]);
  box(s, 'piracy', [14, 106, 346, 170], { color: C.mari, w: 2.2 });
  ml(s, 180, 128, ['Foreign company or institution patents it', 'WITHOUT authorisation or payment'], { size: 11.5, within: 'piracy', step: 15 });
  lab(s, 180, 158, '= BIOPIRACY', { size: 12, bold: true, color: C.amber, within: 'piracy' });
  arrow(s, [95, 172], [95, 200]);
  box(s, 'india', [14, 202, 176, 312]);
  ml(s, 95, 222, ['India’s response:', 'Indian Patents Bill', '(second amendment:', 'patent terms, emergency', 'provisions, R&D)'], { size: 11, within: 'india', step: 14 });
  box(s, 'gm', [184, 202, 346, 258]);
  ml(s, 265, 222, ['GM organisms released', 'into ecosystems:', 'unpredictable effects'], { size: 11, within: 'gm', step: 14 });
  arrow(s, [265, 260], [265, 274]);
  box(s, 'geac', [184, 276, 346, 312]);
  ml(s, 265, 291, ['GEAC: regulates validity', '& safety of GM organisms'], { size: 11, within: 'geac', step: 14 });
  path(s, [[24, 330], [336, 330]], { color: C.grey, w: 1.2, track: false });
  ml(s, 180, 352, ['Ethics in biotechnology = consent,', 'safety, and fair benefit-sharing.'], { size: 12, bold: true, color: C.text, step: 16 });
  return s;
}
function check107(): Check[] {
  const s = draw107();
  return [
    ['The chain: Indian bioresource / knowledge (Neem, Turmeric, Basmati) to a foreign company or institution patenting it WITHOUT authorisation or payment = BIOPIRACY (highlight)', all(s, ['Indian traditional bioresource /', 'knowledge', '(Neem, Turmeric, Basmati)', 'Foreign company or institution patents it', 'WITHOUT authorisation or payment', '= BIOPIRACY']) && hiCount(s) === 1],
    ['Only the Indian Patents Bill hangs from biopiracy (India\'s response: second amendment, patent terms, emergency provisions, R&D); the GEAC stands apart under its own line (GM organisms released into ecosystems: unpredictable effects, over three lines)', all(s, ['India’s response:', 'Indian Patents Bill', '(second amendment:', 'patent terms, emergency', 'provisions, R&D)', 'GM organisms released', 'into ecosystems:', 'unpredictable effects', 'GEAC: regulates validity', '& safety of GM organisms']) && heads(s) === 3],
    ['The closing line: ethics in biotechnology = consent, safety, and fair benefit-sharing', all(s, ['Ethics in biotechnology = consent,', 'safety, and fair benefit-sharing.'])],
    ...layout(s), clean(s),
  ];
}
const fig107 = fig('b12-10-fig-10.7', 5, 'Biopiracy and regulation', [{ chip: 'Biopiracy and GEAC', cap: CAP107 }], draw107, check107);

export const DIAGRAMS_BIOLOGY_12_10: Diagram[] = [fig101, fig102, fig103, fig104, fig105, fig106, fig107];
