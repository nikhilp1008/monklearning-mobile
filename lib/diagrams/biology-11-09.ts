import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 9 (Biomolecules): the five numbered figures of the Master Reference book on pp. 538, 547,
 * 555, 562 and 564, redrawn. Every figure sits on its own "CHAPTER 9 · FIGURES" page (its caption is first printed on the
 * page before); no other page of pp. 533-590 was judged to hold a drawing (the Chapter 9 text pages carry only tables,
 * rules and bullets). FIVE figures on five pages, one case per panel, every case carrying the book's whole caption:
 *
 *   Figure 9.1 (drawn p. 538), Topic 01, topic index 0: (a) cell composition by mass, (b) acid fractionation.
 *   Figure 9.2 (p. 547), Topic 02, index 1: (a) saturated, (b) unsaturated, (c) triglyceride.
 *   Figure 9.3 (p. 555), Topic 03, index 2: protein levels (1)-(4), and the antiparallel DNA strand pair.
 *   Figure 9.4 (p. 562), Topic 04, index 3: (a) energy profile, (b) enzyme models.
 *   Figure 9.5 (p. 564), Topic 04, index 3: panels (i) temperature, (ii) pH, (iii) [substrate], (iv) competitive inhibitor
 *   curves, (v) competitive inhibition mechanism.
 *
 * THE BOOK'S, as printed: every word of every label, title and note; the six composition shares (Water 70-90 %, Proteins
 * 10-15 %, Nucleic acids 5-7 %, Carbohydrates 3 %, Lipids 2 %, Ions 1 %), drawn as bars at the MIDPOINTS of the ranges
 * (80, 12.5, 6, 3, 2, 1: the book's own bars are in those proportions, read on p. 538); the flow-chart steps and arrows;
 * the fatty-acid skeletons (8 C-C bonds, the C=C on the 4th, both neighbours on the same side so it is cis, COOH and CH3
 * at the ends; the triglyceride's CH2, CH, CH2 on three O-C(=O)-R arms, ester bond named); the protein levels and the DNA
 * sequence (top A T G C A G, bottom T A C G T C, A=T two dotted bonds, G≡C three, 5' to 3' arrows opposed); the energy
 * profile's proportions (Ea 173 : Ea' 76 : ΔG 88 on p. 562, scaled by 0.555, so 96 : 42 : 49), with ΔG measured between
 * the same reactants and products for both curves; panel (i)'s optimum at 37 °C with its read values (about 0.08 at 0 °C,
 * 0.3 at 20 °C), (ii)'s optimum at pH 7, (iii)'s Km at half Vmax, (iv)'s Km' = 3 Km (71 and 214 px on p. 564) with the same
 * Vmax.
 * SCHEMATIC: all positions and sizes re-laid for a phone; the 2 x 2 grid of the four protein levels (the book has a row);
 * the helix, sheet, folded chain and subunit pictures; the curve shapes (smooth stand-ins through the book's read points:
 * a Michaelis-Menten hyperbola for (iii) and (iv), Gaussian bumps for (ii) and the energy profile, an asymmetric one for (i));
 * Fig 9.4(b)'s notch and substrate shapes. Added for a single panel shown alone: a "Reaction rate" axis label on (ii) and
 * (iii) (the book prints it once for the row). Colours are the app's (no fills; one marigold highlight per drawing).
 * Greek letters and sub/superscripts are set in STIX only (no tags, so one font per text run on Android).
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: string; name?: string; keep?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
function path(s: Sketch, pts: P[], o: Stroke & { close?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  if (o.keep !== false) keep(s, o.close ? [...pts, pts[0]] : pts, o.name);
}
function head(s: Sketch, a: P, b: P, col: string, HL = 8, HW = 3.8): P {
  const L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, base: P = [b[0] - ux * HL, b[1] - uy * HL];
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${col}"/>`);
  return base;
}
/** A line with a head at b (and at a too when `both`). */
function arrow(s: Sketch, a: P, b: P, o: Stroke & { both?: boolean } = {}) {
  const col = o.color ?? C.ink, w = o.w ?? 1.5;
  const pb = head(s, a, b, col, 7.5, 3.5), pa = o.both ? head(s, b, a, col, 7.5, 3.5) : a;
  s.add(`<path d="M${r1(pa[0])} ${r1(pa[1])} L${r1(pb[0])} ${r1(pb[1])}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`);
  keep(s, [a, b], o.name);
}
/** A curved arrow: a cubic from a to the tip b. */
function curly(s: Sketch, a: P, c1: P, c2: P, b: P, o: Stroke = {}) {
  const n = 30, HL = 7, HW = 3.3, col = o.color ?? C.slate;
  const all = Array.from({ length: n + 1 }, (_, i): P => {
    const t = i / n, u = 1 - t;
    return [u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0], u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1]];
  });
  const shaft = all.filter((p) => len(p, b) >= HL), base = shaft[shaft.length - 1];
  const L = len(base, b), ux = (b[0] - base[0]) / L, uy = (b[1] - base[1]) / L;
  path(s, shaft, { color: col, w: o.w ?? 1.5, name: o.name });
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${col}"/>`);
}
function circle(s: Sketch, c: P, r: number, o: Stroke = {}) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  if (o.keep !== false) keep(s, Array.from({ length: 25 }, (_, i): P => [c[0] + r * Math.cos((i / 24) * 2 * Math.PI), c[1] + r * Math.sin((i / 24) * 2 * Math.PI)]), o.name);
}
/** A line of STIX on the drawing from its baseline; its box at its width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  return rect;
}
const title = (s: Sketch, html: string) => lab(s, W / 2, 20, html, { size: 13, bold: true });
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string } = {}): Rect {
  const size = o.size ?? 14, w = wOf(html, size);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text });
  return rect;
}
function exit(r: Rect | null, p: P, u: P, g: number): number {
  if (!r) return 0;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke = {}) {
  const g = LABEL_GAP + 0.5, L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  path(s, [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]], o);
}

/* ---------- layout checks ---------- */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
function gapTo(r: Rect, pts: P[]) {
  let g = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) g = Math.min(g, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return g;
}
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  for (const l of s.labels) for (const { pts } of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const ends = (s: Sketch) => [...layout(s), clean(s)];

/* ---------- boxes and flow lines (Figure 9.1(b)) ---------- */
type Line = { html: string; color?: string; bold?: boolean };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const FLOWS = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const LH = 15;
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number } = {}) {
  BOXES.set(s, [...(BOXES.get(s) ?? []), { id, rect, lines }]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="none" stroke="${o.edge ?? C.ink}" stroke-width="${o.w ?? 1.5}"/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * LH) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * LH + 12 * 0.34, l.html, { size: 12, color: l.color ?? C.text, semibold: l.bold }));
}
function flow(s: Sketch, pts: P[], name: string) {
  const b = pts[pts.length - 1], a = pts[pts.length - 2], base = head(s, a, b, C.ink, 8, 3.8);
  const shaft = [...pts.slice(0, -1), base].map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${shaft}" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-linejoin="round"/>`);
  FLOWS.set(s, [...(FLOWS.get(s) ?? []), { name, pts }]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
const flowsOf = (s: Sketch) => (FLOWS.get(s) ?? []).map(({ name, pts }) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return { name, from: from?.id ?? '?', to: to?.id ?? '?' };
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
function chartClear(s: Sketch): Check[] {
  const E = (FLOWS.get(s) ?? []).map((f) => f.pts), B = BOXES.get(s) ?? [];
  const seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => B.forEach((b) => { if ([pts[0], pts[pts.length - 1]].some((p) => onBorder(b.rect, p))) return; if (gapTo([b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2], pts) < 1e-9) through++; }));
  const tight = B.flatMap((b) => b.lines.filter((l) => wOf(l.html, 12) * (l.bold ? 1.08 : 1) + 12 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  const tall = B.filter((b) => b.lines.length * LH + 8 > b.rect[3] - b.rect[1]).map((b) => b.id);
  return [
    [`No crossing lines: ${E.length} flow lines, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every line of text fits its box at Android's widths${tight.length || tall.length ? `: not ${[...tight, ...tall].join(', ')}` : ''}`, tight.length === 0 && tall.length === 0],
  ];
}
const boxText = (s: Sketch, id: string) => BOXES.get(s)!.find((b) => b.id === id)!.lines.map((l) => plain(l.html)).join(' ');

/* ====================================================================== */
/* Figure 9.1 (drawn p. 538, caption p. 537) · composition and fractionation */
/* ====================================================================== */
const CAP91 = 'Average chemical composition of a cell by mass (a) and acid fractionation of tissue into the acid-soluble and acid-insoluble fractions (b).';
/** p. 538: the printed shares; `mid` is the bar's length in per cent (the midpoint of a range). */
const SHARES = [
  { name: 'Water', text: '70–90 %', lo: 70, hi: 90 },
  { name: 'Proteins', text: '10–15 %', lo: 10, hi: 15 },
  { name: 'Nucleic acids', text: '5–7 %', lo: 5, hi: 7 },
  { name: 'Carbohydrates', text: '3 %', lo: 3, hi: 3 },
  { name: 'Lipids', text: '2 %', lo: 2, hi: 2 },
  { name: 'Ions', text: '1 %', lo: 1, hi: 1 },
];
const mid = (r: { lo: number; hi: number }) => (r.lo + r.hi) / 2;
const BAR = { x0: 112, k: 2.2, h: 24, y0: 52, dy: 34 };
const BARS = new WeakMap<Sketch, { name: string; rect: Rect }[]>();
function draw91a(): Sketch {
  const s = new Sketch(W, 276), G = BAR;
  title(s, 'Cell composition by mass');
  path(s, [[G.x0, G.y0 - 8], [G.x0, G.y0 + 5 * G.dy + G.h + 8]], { color: C.grey, w: 1.4, name: 'baseline' });
  SHARES.forEach((r, i) => {
    const y = G.y0 + i * G.dy, w = mid(r) * G.k, hi = i === 0, rect: Rect = [G.x0, y, G.x0 + w, y + G.h];
    BARS.set(s, [...(BARS.get(s) ?? []), { name: r.name, rect }]);
    s.add(`<rect x="${r1(rect[0])}" y="${r1(y)}" width="${r1(w)}" height="${G.h}" fill="none" stroke="${hi ? C.mari : C.ink}" stroke-width="${hi ? 2.2 : 1.7}" stroke-linejoin="round"/>`);
    keep(s, [[rect[0], rect[1]], [rect[2], rect[1]], [rect[2], rect[3]], [rect[0], rect[3]], [rect[0], rect[1]]], `bar:${r.name}`);
    lab(s, G.x0 - 10, y + G.h / 2 + 4.4, r.name, { size: 12.5, anchor: 'end', color: C.slate });
    lab(s, rect[2] + 8, y + G.h / 2 + 4.4, r.text, { size: 12.5, anchor: 'start' });
  });
  return s;
}
function check91a(): Check[] {
  const s = draw91a(), B = BARS.get(s)!;
  const lens = B.map((b) => (b.rect[2] - b.rect[0]) / BAR.k);
  return [
    ['The six components in the book\'s order, largest first', SHARES.map((r) => r.name).join() === 'Water,Proteins,Nucleic acids,Carbohydrates,Lipids,Ions' && SHARES.every((r, i) => i === 0 || mid(r) <= mid(SHARES[i - 1]))],
    [`Each bar's length is the printed share (the midpoint of a range): ${lens.map((l) => fmt(l, 1)).join(', ')} per cent`, lens.every((l, i) => close(l, mid(SHARES[i]), 1e-6)) && close(lens[0], 80) && close(lens[1], 12.5) && close(lens[2], 6)],
    ['The printed shares are on the drawing (70–90 %, 10–15 %, 5–7 %, 3 %, 2 %, 1 %)', SHARES.every((r) => has(s, r.text))],
    ['The bars share one baseline and are one height; Water (the largest) is the highlight', B.every((b) => close(b.rect[0], BAR.x0) && close(b.rect[3] - b.rect[1], BAR.h))],
    ...ends(s),
  ];
}
const FLOW_BOX = {
  tissue: [100, 8, 260, 63] as Rect, grind: [150, 90, 210, 118] as Rect, slurry: [150, 146, 210, 174] as Rect, strain: [128, 202, 232, 230] as Rect,
  filtrate: [20, 262, 170, 362] as Rect, retentate: [190, 262, 340, 362] as Rect,
};
function draw91b(): Sketch {
  const s = new Sketch(W, 405), F = FLOW_BOX, DY = 26;
  title(s, 'Acid fractionation');
  const mv = (r: Rect): Rect => [r[0], r[1] + DY, r[2], r[3] + DY];
  const lines = (a: string[]) => a.map((html) => ({ html }));
  box(s, 'tissue', mv(F.tissue), lines(['Living tissue +', 'trichloroacetic', 'acid']));
  box(s, 'grind', mv(F.grind), [{ html: 'Grind' }]);
  box(s, 'slurry', mv(F.slurry), [{ html: 'Slurry' }]);
  box(s, 'strain', mv(F.strain), [{ html: 'Strain/Filter', color: C.amber }], { edge: C.mari, w: 2.2 });
  box(s, 'filtrate', mv(F.filtrate), lines(['Filtrate', '(acid-soluble', 'pool)', 'Micromolecules', '18\u2013800\u00a0Da']));
  box(s, 'retentate', mv(F.retentate), lines(['Retentate', '(acid-insoluble', 'fraction)', 'Macromolecules', '>1000\u00a0Da (and', 'membrane lipids)']));
  const B = BOXES.get(s)!, rect = (id: string) => B.find((b) => b.id === id)!.rect;
  const down = (a: string, b: string): [P, P] => [[180, rect(a)[3]], [180, rect(b)[1]]];
  flow(s, down('tissue', 'grind'), 'tissue>grind');
  flow(s, down('grind', 'slurry'), 'grind>slurry');
  flow(s, down('slurry', 'strain'), 'slurry>strain');
  flow(s, [[150, rect('strain')[3]], [95, rect('filtrate')[1]]], 'strain>filtrate');
  flow(s, [[210, rect('strain')[3]], [265, rect('retentate')[1]]], 'strain>retentate');
  return s;
}
function check91b(): Check[] {
  const s = draw91b(), f = flowsOf(s).map((x) => `${x.from}>${x.to}`);
  return [
    ['The chain of steps is the book\'s: tissue + trichloroacetic acid > Grind > Slurry > Strain/Filter, which splits into Filtrate and Retentate', f.join() === 'tissue>grind,grind>slurry,slurry>strain,strain>filtrate,strain>retentate'],
    ['The Filtrate is the acid-soluble pool of micromolecules, 18–800 Da; the Retentate the acid-insoluble fraction of macromolecules, >1000 Da (and membrane lipids, a note added to the book\'s label)', boxText(s, 'filtrate') === 'Filtrate (acid-soluble pool) Micromolecules 18–800 Da' && boxText(s, 'retentate') === 'Retentate (acid-insoluble fraction) Macromolecules >1000 Da (and membrane lipids)' && 800 < 1000],
    ['The first box reads "Living tissue + trichloroacetic acid"; the step that separates the two fractions is the one highlight', boxText(s, 'tissue') === 'Living tissue + trichloroacetic acid' && BOXES.get(s)!.filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id).join() === 'strain'],
    ...chartClear(s), clean(s),
  ];
}
const fig91: Diagram = {
  id: 'b11-09-fig-9.1', topic: 0, name: 'Cell composition and acid fractionation',
  cases: [{ chip: 'Composition', cap: CAP91, panel: 'a' }, { chip: 'Fractionation', cap: CAP91, panel: 'b' }],
  draw: (c: { panel: string }) => (c.panel === 'a' ? draw91a() : draw91b()),
  check: (c: { panel: string }) => (c.panel === 'a' ? check91a() : check91b()),
};

/* ====================================================================== */
/* Figure 9.2 (drawn p. 547, caption p. 546) · fatty acids and a triglyceride */
/* ====================================================================== */
const CAP92 = 'A saturated fatty acid (a) and an unsaturated fatty acid with a cis C=C kink (b); a triglyceride is glycerol joined to three fatty acids by ester bonds (c).';
const ZIG = { n: 8, dx: 26, dy: 8 };
/** The skeleton's vertices: 8 bonds. The unsaturated chain starts high and, after its double bond, repeats the low level (the cis kink). */
function zigzag(x0: number, yc: number, unsat: boolean): P[] {
  return Array.from({ length: ZIG.n + 1 }, (_, i): P => {
    const high = unsat ? (i < 4 ? i % 2 === 0 : i % 2 === 1) : i % 2 === 1;
    return [x0 + i * ZIG.dx, yc + (high ? -ZIG.dy : ZIG.dy)];
  });
}
function drawChain(unsat: boolean): Sketch {
  const s = new Sketch(W, unsat ? 178 : 160), yc = unsat ? 106 : 100;
  title(s, unsat ? '(b) Unsaturated' : '(a) Saturated');
  const notes = unsat ? ['C=C bend: chains pack loosely', '(liquid at RT)'] : ['no C=C: straight chain,', 'packs tightly (solid at RT)'];
  notes.forEach((t, i) => lab(s, W / 2, 50 + i * 15, t, { size: 11.5, color: C.slate }));
  const wA = wOf('COOH', 14), wB = wOf('CH<sub>3</sub>', 14), total = wA + 5 + ZIG.n * ZIG.dx + 5 + wB, x0 = (W - total) / 2 + wA + 5;
  const V = zigzag(x0, yc, unsat);
  atom(s, [x0 - 5 - wA / 2, V[0][1]], 'COOH', { size: 14 });
  atom(s, [V[ZIG.n][0] + 5 + wB / 2, V[ZIG.n][1]], 'CH<sub>3</sub>', { size: 14 });
  for (let i = 0; i < ZIG.n; i++) {
    if (unsat && i === 3) {
      [-2.4, 2.4].forEach((d, k) => path(s, [[V[3][0], V[3][1] + d], [V[4][0], V[4][1] + d]], { color: C.mari, w: 2.2, name: `cc${k}` }));
    } else path(s, [V[i], V[i + 1]], { name: `cc-${i}` });
  }
  if (unsat) {
    lab(s, (V[3][0] + V[4][0]) / 2, V[3][1] + 26, 'cis C=C', { size: 12, bold: true, color: C.amber });
    lab(s, (V[3][0] + V[4][0]) / 2, V[3][1] + 41, '(kink)', { size: 12, bold: true, color: C.amber });
  }
  return s;
}
function checkChain(unsat: boolean): Check[] {
  const s = drawChain(unsat), V = zigzag(0, 0, unsat);
  const singles = linesNamed(s, /^cc-\d$/).length, doubles = linesNamed(s, /^cc[01]$/).length / 2;
  const out: Check[] = [
    [`The chain has ${ZIG.n} carbon-carbon bonds as printed: ${singles} single${unsat ? ' and 1 double' : ', no double bond'}`, singles + doubles === ZIG.n && doubles === (unsat ? 1 : 0)],
    ['COOH at the left end and CH₃ at the right end', hasAll(s, ['COOH', 'CH3'])],
  ];
  if (unsat) {
    const dbl = lineOf(s, 'cc0'), yb = dbl[0][1] + 2.4, neighbours = [lineOf(s, 'cc-2'), lineOf(s, 'cc-4')].map((p) => Math.abs(p[0][1] - yb) < 1e-6 ? p[1][1] : p[0][1]);
    out.push(['The C=C is the 4th bond; the two chain bonds beside it lie on the same side of it (cis), which is the kink', V[3][1] === V[4][1] && neighbours.every((y) => y < yb - 1) && close(len(dbl[0], dbl[1]), ZIG.dx, 1e-6)]);
    out.push(['The double bond is the one highlight, with its note "cis C=C (kink)"', hasAll(s, ['cis C=C', '(kink)']) && doubles === 1]);
  } else {
    out.push(['A straight zigzag: the bonds alternate up and down all the way, so the chain stays in line (packs tightly)', V.every((p, i) => i === 0 || (i % 2 === 1 ? p[1] < V[i - 1][1] : p[1] > V[i - 1][1]))]);
  }
  out.push(['Both notes are the book\'s', unsat ? hasAll(s, ['C=C bend: chains pack loosely', '(liquid at RT)']) : hasAll(s, ['no C=C: straight chain,', 'packs tightly (solid at RT)'])]);
  return [...out, ...ends(s)];
}
const ROWS = [74, 122, 170], TG = { gx: 44, ox: 112, cx: 176, dO: 26 };
function drawTri(): Sketch {
  const s = new Sketch(W, 276);
  title(s, '(c) Triglyceride');
  const g: Rect[] = [];
  ['CH<sub>2</sub>', 'CH', 'CH<sub>2</sub>'].forEach((h, i) => g.push(atom(s, [TG.gx, ROWS[i]], h, { size: 14 })));
  for (let i = 0; i < 2; i++) bond(s, [TG.gx, ROWS[i]], g[i], [TG.gx, ROWS[i + 1]], g[i + 1], { name: `gv${i}` });
  ROWS.forEach((y, i) => {
    const o = atom(s, [TG.ox, y], 'O', { size: 14 }), c = atom(s, [TG.cx, y], 'C', { size: 14 }), od = atom(s, [TG.cx, y - TG.dO], 'O', { size: 14 });
    bond(s, [TG.gx, y], g[i], [TG.ox, y], o, { name: `r${i}:gO` });
    bond(s, [TG.ox, y], o, [TG.cx, y], c, { name: `r${i}:ester`, color: C.mari, w: 2.2 });
    [-2.2, 2.2].forEach((d, k) => bond(s, [TG.cx + d, y], c, [TG.cx + d, y - TG.dO], od, { name: `r${i}:co${k}` }));
    const z: P[] = [[TG.cx + 11, y + 6], [TG.cx + 29, y - 4], [TG.cx + 47, y + 6], [TG.cx + 65, y - 4], [TG.cx + 83, y + 6]];
    path(s, z, { name: `r${i}:chain` });
    lab(s, TG.cx + 98, y + 9, '<i>R</i>', { size: 14 });
  });
  const ex = 146;
  arrow(s, [ex, 207], [ex, ROWS[2] + 5], { color: C.mari, w: 1.5, name: 'pointer' });
  lab(s, ex - 4, 224, 'ester bond', { size: 11.5, anchor: 'middle', color: C.amber });
  lab(s, 236, 252, 'Glycerol + 3 fatty acids', { size: 11.5, color: C.slate });
  lab(s, 236, 267, '(R = hydrocarbon chain)', { size: 11.5, color: C.slate });
  return s;
}
function checkTri(): Check[] {
  const s = drawTri();
  const names = (re: RegExp) => linesNamed(s, re).length;
  const orderAtAcylC = ROWS.map((_, i) => names(new RegExp(`^r${i}:ester$`)) + names(new RegExp(`^r${i}:co[01]$`)) + names(new RegExp(`^r${i}:chain$`)));
  const hs = [2, 1, 2], gOrder = [1 + 1, 1 + 2, 1 + 1].map((n, i) => n + hs[i]);
  return [
    ['Glycerol as printed: CH₂, CH, CH₂ joined by two single bonds (C₃H₅ with five H), each carbon carrying one O', names(/^gv\d$/) === 2 && hs.reduce((a, b) => a + b) === 5 && ROWS.every((_, i) => names(new RegExp(`^r${i}:gO$`)) === 1)],
    [`Each glycerol carbon has four bonds counting its H: ${gOrder.join(', ')}`, gOrder.every((v) => v === 4)],
    [`Three identical arms O–C(=O)–R joined by an ester bond; the acyl carbon has four bonds on every arm (${orderAtAcylC.join(', ')}: ester 1, C=O 2, chain 1)`, orderAtAcylC.every((v) => v === 4) && names(/:ester$/) === 3 && names(/:co[01]$/) === 6],
    ['The ester bonds are the one highlight, pointed out by "ester bond"; the note reads Glycerol + 3 fatty acids (R = hydrocarbon chain)', hasAll(s, ['ester bond', 'Glycerol + 3 fatty acids', '(R = hydrocarbon chain)'])],
    ...ends(s),
  ];
}
const fig92: Diagram = {
  id: 'b11-09-fig-9.2', topic: 1, name: 'Fatty acids and the triglyceride',
  cases: [{ chip: 'Saturated', cap: CAP92, k: 'a' }, { chip: 'Unsaturated', cap: CAP92, k: 'b' }, { chip: 'Triglyceride', cap: CAP92, k: 'c' }],
  draw: (c: { k: string }) => (c.k === 'a' ? drawChain(false) : c.k === 'b' ? drawChain(true) : drawTri()),
  check: (c: { k: string }) => (c.k === 'a' ? checkChain(false) : c.k === 'b' ? checkChain(true) : checkTri()),
};

/* ====================================================================== */
/* Figure 9.3 (drawn p. 555, caption p. 554) · protein levels and DNA pair */
/* ====================================================================== */
const CAP93 = 'Levels of protein structure (1–4) and an antiparallel DNA double strand with A=T and G≡C base pairs.';
const PRIMARY = ['AGSL', 'PVAL'];
function drawProtein(): Sketch {
  const s = new Sketch(W, 322);
  // (1) Primary
  lab(s, 90, 22, '(1) Primary', { size: 13, bold: true });
  PRIMARY.forEach((row, r) => [...row].forEach((ch, i) => {
    const c: P = [39 + i * 34, 54 + r * 28];
    circle(s, c, 11, { keep: false });
    lab(s, c[0], c[1] + 3.4, ch, { size: 10 });
    if (i) path(s, [[c[0] - 34 + 11, c[1]], [c[0] - 11, c[1]]], { color: C.slate, name: `pep${r}${i}` });
  }));
  lab(s, 90, 112, 'Peptide bonds', { size: 11, bold: true });
  lab(s, 90, 126, '(sequence)', { size: 11, bold: true });
  // (2) Secondary
  lab(s, 270, 22, '(2) Secondary', { size: 13, bold: true });
  const helix: P[] = Array.from({ length: 61 }, (_, i): P => [236 + 8 * Math.sin((i / 60) * 4 * Math.PI), 40 + (i / 60) * 62]);
  path(s, helix, { color: C.mari, w: 2.4, name: 'helix' });
  [48, 70, 92].forEach((y, k) => path(s, Array.from({ length: 7 }, (_, i): P => [278 + i * 8, y + (i % 2 ? -3.5 : 3.5)]), { color: C.slate, name: `sheet${k}` }));
  lab(s, 236, 120, 'α-helix', { size: 12, bold: true, color: C.amber });
  lab(s, 302, 120, 'β-sheet', { size: 12, bold: true });
  lab(s, 270, 140, 'H-bonds', { size: 11, bold: true });
  // (3) Tertiary
  lab(s, 90, 186, '(3) Tertiary', { size: 13, bold: true });
  const star: P[] = Array.from({ length: 91 }, (_, i): P => { const t = (i / 90) * 2 * Math.PI, r = 24 + 8 * Math.cos(5 * t); return [90 + r * Math.cos(t - Math.PI / 2), 236 + r * Math.sin(t - Math.PI / 2)]; });
  path(s, star, { w: 1.9, name: 'fold' });
  path(s, [[80, 228], [101, 244]], { color: C.grey, w: 1.4, keep: false });
  path(s, [[100, 227], [81, 245]], { color: C.grey, w: 1.4, keep: false });
  lab(s, 90, 288, 'Folded chain', { size: 11, bold: true });
  lab(s, 90, 302, '(3-D shape)', { size: 11, bold: true });
  // (4) Quaternary
  lab(s, 270, 186, '(4) Quaternary', { size: 13, bold: true });
  [[255, 221], [285, 221], [255, 251], [285, 251]].forEach((c, i) => circle(s, c as P, 14.5, { name: `subunit${i}` }));
  lab(s, 270, 288, '4 subunits', { size: 11, bold: true });
  lab(s, 270, 302, '(e.g. haemoglobin)', { size: 11, bold: true });
  return s;
}
function checkProtein(): Check[] {
  const s = drawProtein(), pep = linesNamed(s, /^pep/).length;
  return [
    ['Four levels in the book\'s order: (1) Primary, (2) Secondary, (3) Tertiary, (4) Quaternary', hasAll(s, ['(1) Primary', '(2) Secondary', '(3) Tertiary', '(4) Quaternary'])],
    [`Primary: two chains of four residues, ${pep} peptide bonds (3 per chain), residues A G S L and P V A L`, pep === 6 && PRIMARY.join() === 'AGSL,PVAL' && hasAll(s, ['A', 'G', 'S', 'L', 'P', 'V'])],
    ['Secondary: one helix (the highlight) and three sheet strands, named α-helix, β-sheet and H-bonds', linesNamed(s, /^helix$/).length === 1 && linesNamed(s, /^sheet\d$/).length === 3 && hasAll(s, ['α-helix', 'β-sheet', 'H-bonds'])],
    ['Tertiary: a folded chain "(3-D shape)"; quaternary: four subunits, "(e.g. haemoglobin)"', linesNamed(s, /^subunit\d$/).length === 4 && hasAll(s, ['Folded chain', '(3-D shape)', '4 subunits', '(e.g. haemoglobin)']) && linesNamed(s, /^fold$/).length === 1],
    ...ends(s),
  ];
}
const TOP = 'ATGCAG', BOT = 'TACGTC', DX = { x: (i: number) => 64 + i * 46, top: 52, bot: 152 };
const HBONDS: Record<string, number> = { A: 2, T: 2, G: 3, C: 3 };
function drawDNA(): Sketch {
  const s = new Sketch(W, 208);
  lab(s, W / 2, 22, 'Sugar–phosphate backbone', { size: 12, color: C.slate });
  arrow(s, [34, DX.top], [322, DX.top], { w: 2, name: 'top-backbone' });
  arrow(s, [322, DX.bot], [34, DX.bot], { w: 2, name: 'bottom-backbone' });
  lab(s, 26, DX.top + 5, '5′', { size: 13, anchor: 'end', bold: true });
  lab(s, 332, DX.top + 5, '3′', { size: 13, anchor: 'start', bold: true });
  lab(s, 26, DX.bot + 5, '3′', { size: 13, anchor: 'end', bold: true });
  lab(s, 332, DX.bot + 5, '5′', { size: 13, anchor: 'start', bold: true });
  [...TOP].forEach((t, i) => {
    const x = DX.x(i), b = BOT[i];
    [[DX.top, t, 66], [DX.bot, b, 114]].forEach(([ny, ch, by]) => {
      circle(s, [x, ny as number], 4.5, { color: C.slate });
      path(s, ny === DX.top ? [[x, DX.top + 4.5], [x, by as number]] : [[x, DX.bot - 4.5], [x, (by as number) + 24]], { color: C.slate, w: 1.4, name: `stem${i}${ny === DX.top ? 't' : 'b'}` });
      path(s, [[x - 11, by as number], [x + 11, by as number], [x + 11, (by as number) + 24], [x - 11, (by as number) + 24]], { close: true, name: `base${i}${ny === DX.top ? 't' : 'b'}` });
      lab(s, x, (by as number) + 16.3, ch as string, { size: 12, bold: true });
    });
    const n = HBONDS[t], off = n === 2 ? [-4, 4] : [-7, 0, 7];
    off.forEach((d, k) => path(s, [[x + d, 93], [x + d, 111]], { color: C.mari, w: 1.7, dash: '2 3', name: `hb${i}-${k}` }));
  });
  lab(s, W / 2, 182, 'Antiparallel strands', { size: 12 });
  lab(s, W / 2, 198, 'A=T: 2 H-bonds, G≡C: 3 H-bonds', { size: 12 });
  return s;
}
function checkDNA(): Check[] {
  const s = drawDNA(), comp: Record<string, string> = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const counts = [...TOP].map((_, i) => linesNamed(s, new RegExp(`^hb${i}-`)).length);
  const top = lineOf(s, 'top-backbone'), bot = lineOf(s, 'bottom-backbone');
  const at = (ch: string) => [...TOP].map((t, i) => (t === ch ? counts[i] : -1)).filter((c) => c >= 0);
  return [
    ['The sequence is the book\'s: top A T G C A G, bottom T A C G T C, and every pair is complementary (A with T, G with C)', TOP === 'ATGCAG' && BOT === 'TACGTC' && [...TOP].every((t, i) => comp[t] === BOT[i])],
    [`Hydrogen bonds drawn: ${counts.join(', ')} (A=T two, G≡C three)`, [...TOP].every((t, i) => counts[i] === HBONDS[t] && counts[i] === (t === 'A' || t === 'T' ? 2 : 3)) && at('A').every((c) => c === 2) && at('G').every((c) => c === 3)],
    ['Antiparallel: the top strand runs 5′ to 3′ left to right, the bottom the other way, so its 3′ end is at the left', top[1][0] > top[0][0] && bot[1][0] < bot[0][0] && has(s, '5′') && has(s, '3′')],
    ['The hydrogen bonds (dotted) are the one highlight; the note is the book\'s: Antiparallel strands, A=T: 2 H-bonds, G≡C: 3 H-bonds', hasAll(s, ['Antiparallel strands', 'A=T: 2 H-bonds, G≡C: 3 H-bonds', 'Sugar–phosphate backbone'])],
    ...ends(s),
  ];
}
const fig93: Diagram = {
  id: 'b11-09-fig-9.3', topic: 2, name: 'Protein structure levels and the DNA pair',
  cases: [{ chip: 'Protein levels', cap: CAP93, k: 'p' }, { chip: 'DNA strands', cap: CAP93, k: 'd' }],
  draw: (c: { k: string }) => (c.k === 'p' ? drawProtein() : drawDNA()),
  check: (c: { k: string }) => (c.k === 'p' ? checkProtein() : checkDNA()),
};

/* ====================================================================== */
/* Figure 9.4 (drawn p. 562, caption p. 561) · energy profile and models  */
/* ====================================================================== */
const CAP94 = 'Energy profile of a reaction with and without an enzyme: the enzyme lowers <i>E</i><sub>a</sub> but leaves ΔG unchanged (a); lock-and-key and induced-fit models (b).';
const EA = '<i>E</i><sub>a</sub>';
/** p. 562 reads Ea 173 : Ea' 76 : ΔG 88 (page px); scaled by 0.555. */
const PROF = { x0: 28, yAxis: 262, yR: 176, Ea: 96, EaP: 42, dG: 49, xp: 175, w: 30, sigU: 22, sigE: 26, xa: 66, xb: 108, xg: 302 };
const sig = (x: number) => 1 / (1 + Math.exp(-(x - PROF.xp) / PROF.w));
const curveY = (x: number, H: number, sg: number) => PROF.yR + PROF.dG * sig(x) - H * Math.exp(-((x - PROF.xp) ** 2) / (2 * sg * sg));
/** The bump height that makes the curve's top exactly `ea` above the reactants. */
function bumpFor(ea: number, sg: number): number {
  let lo = 0, hi = 600;
  for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; const top = Math.min(...Array.from({ length: 291 }, (_, i) => curveY(40 + i, m, sg))); if (PROF.yR - top < ea) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
const HU = bumpFor(PROF.Ea, PROF.sigU), HE = bumpFor(PROF.EaP, PROF.sigE);
const profPts = (H: number, sg: number): P[] => Array.from({ length: 291 }, (_, i): P => [40 + i, curveY(40 + i, H, sg)]);
const apex = (pts: P[]) => pts.reduce((a, b) => (b[1] < a[1] ? b : a));
function drawProfile(): Sketch {
  const s = new Sketch(W, 292), G = PROF, U = profPts(HU, G.sigU), E = profPts(HE, G.sigE), au = apex(U), ae = apex(E);
  lab(s, W / 2, 18, `(a) Energy profile: ${EA} falls, ΔG unchanged`, { size: 13, bold: true });
  arrow(s, [G.x0, G.yAxis], [G.x0, 32], { color: C.ink, w: 1.6, name: 'y-axis' });
  arrow(s, [G.x0, G.yAxis], [346, G.yAxis], { color: C.ink, w: 1.6, name: 'x-axis' });
  lab(s, G.x0 + 10, 40, 'Free energy', { size: 12, anchor: 'start' });
  lab(s, 190, 282, 'Reaction progress', { size: 12.5 });
  path(s, U, { color: C.slate, w: 2, name: 'without' });
  path(s, E, { color: C.mari, w: 2.4, name: 'with' });
  path(s, [[G.xa, au[1]], [au[0] - 2, au[1]]], { color: C.slate, w: 1.2, dash: '2 3', name: 'dot-Ea' });
  path(s, [[G.xb, ae[1]], [ae[0] - 2, ae[1]]], { color: C.mari, w: 1.2, dash: '2 3', name: 'dot-EaP' });
  arrow(s, [G.xa, G.yR], [G.xa, au[1]], { color: C.slate, both: true, name: 'Ea' });
  arrow(s, [G.xb, G.yR], [G.xb, ae[1]], { color: C.mari, both: true, name: 'EaP' });
  const yP = G.yR + G.dG * sig(330);
  path(s, [[236, G.yR], [G.xg, G.yR]], { color: C.grey, w: 1.2, dash: '2 3', name: 'dot-R' });
  arrow(s, [G.xg, yP], [G.xg, G.yR], { color: C.slate, w: 1.5, name: 'dG', both: true });
  lab(s, G.xa - 6, (G.yR + au[1]) / 2 + 4, EA, { size: 13, bold: true, anchor: 'end', color: C.slate });
  lab(s, G.xb - 6, (G.yR + ae[1]) / 2 + 4, `${EA}′`, { size: 13, bold: true, anchor: 'end', color: C.amber });
  lab(s, G.xg + 9, (G.yR + yP) / 2 + 4, 'ΔG', { size: 13, bold: true, anchor: 'start' });
  lab(s, au[0], au[1] - 12, 'Without enzyme', { size: 12, bold: true, color: C.slate });
  lab(s, 220, 132, 'With enzyme', { size: 12, bold: true, color: C.amber, anchor: 'start' });
  lab(s, 40, 198, 'Reactants', { size: 12, anchor: 'start' });
  lab(s, 262, 248, 'Products', { size: 12 });
  return s;
}
function checkProfile(): Check[] {
  const s = drawProfile(), U = lineOf(s, 'without'), E = lineOf(s, 'with'), au = apex(U), ae = apex(E), G = PROF;
  const ea = G.yR - au[1], eap = G.yR - ae[1], dg = U[U.length - 1][1] - G.yR, dge = E[E.length - 1][1] - G.yR;
  return [
    [`Both curves start at the same reactants level (${fmt(U[0][1], 1)} and ${fmt(E[0][1], 1)}) and end at the same products level (${fmt(U[U.length - 1][1], 1)} and ${fmt(E[E.length - 1][1], 1)}), so ΔG is unchanged: ${fmt(dg, 1)} px`, Math.abs(U[0][1] - E[0][1]) < 1 && Math.abs(U[U.length - 1][1] - E[E.length - 1][1]) < 0.01 && Math.abs(dg - dge) < 0.01 && dg > 0],
    [`The enzyme lowers the barrier: Ea ${fmt(ea, 1)} px without, Ea′ ${fmt(eap, 1)} px with (the book's 173 : 76 scaled by 0.555 = 96 : 42)`, Math.abs(ea - G.Ea) < 0.6 && Math.abs(eap - G.EaP) < 0.6 && eap < ea && Math.abs(eap / ea - 76 / 173) < 0.01],
    ['The ΔG arrow runs from the products level up to the reactants level (products lie lower, 88 : 173 of Ea as printed)', Math.abs(G.dG / G.Ea - 88 / 173) < 0.01 && lineOf(s, 'dG')[0][1] > lineOf(s, 'dG')[1][1]],
    ['Both curves peak at one place on the reaction axis; the enzyme curve is the one highlight and lies under the other at the peak', Math.abs(au[0] - ae[0]) < 6 && ae[1] > au[1]],
    ['Every label of the book\'s panel (a) is on the drawing', hasAll(s, ['Free energy', 'Reaction progress', 'Without enzyme', 'With enzyme', 'Reactants', 'Products', 'ΔG', 'Ea', 'Ea′'])],
    ...ends(s),
  ];
}
function drawModels(): Sketch {
  const s = new Sketch(W, 226);
  title(s, '(b) Enzyme models');
  const top = 104, bot = 168;
  // lock-and-key: a rectangular notch and a substrate that fits it
  const cx1 = 90, nw = 30, nd = 18;
  path(s, [[30, top], [cx1 - nw / 2, top], [cx1 - nw / 2, top + nd], [cx1 + nw / 2, top + nd], [cx1 + nw / 2, top], [150, top], [150, bot], [30, bot]], { close: true, w: 1.9, name: 'site1' });
  path(s, [[cx1 - 15, 38], [cx1 + 15, 38], [cx1 + 15, 68], [cx1 - 15, 68]], { close: true, color: C.mari, w: 2.2, name: 'S1' });
  lab(s, cx1, 58.5, 'S', { size: 13, bold: true, color: C.amber });
  arrow(s, [cx1, 72], [cx1, top + nd - 5], { color: C.slate, w: 1.5, name: 'in1' });
  // induced fit: a curved notch that moulds round a round substrate
  const cx2 = 270, r = 18;
  const arc: P[] = Array.from({ length: 25 }, (_, i): P => { const f = (i / 24) * Math.PI; return [cx2 - r * Math.cos(f), top + r * Math.sin(f)]; });
  path(s, [[210, top], ...arc, [330, top], [330, bot], [210, bot]], { close: true, w: 1.9, name: 'site2' });
  circle(s, [cx2, 54], 15, { color: C.mari, w: 2.2, name: 'S2' });
  lab(s, cx2, 58.5, 'S', { size: 13, bold: true, color: C.amber });
  arrow(s, [cx2, 72], [cx2, top + r - 5], { color: C.slate, w: 1.5, name: 'in2' });
  curly(s, [228, 74], [232, 88], [238, 92], [248, 95], { name: 'mould-l' });
  curly(s, [312, 74], [308, 88], [302, 92], [292, 95], { name: 'mould-r' });
  ['Lock-and-key', '(Fischer):', 'rigid site'].forEach((t, i) => lab(s, cx1, 186 + i * 14, t, { size: 11, bold: true }));
  ['Induced fit', '(Koshland): site', 'moulds round S'].forEach((t, i) => lab(s, cx2, 186 + i * 14, t, { size: 11, bold: true }));
  return s;
}
function checkModels(): Check[] {
  const s = drawModels(), site1 = lineOf(s, 'site1'), site2 = lineOf(s, 'site2'), S1 = lineOf(s, 'S1');
  const notch1 = site1[3][0] - site1[2][0], sW = S1[1][0] - S1[0][0];
  const floor2 = Math.max(...site2.map((p) => p[1]).filter((y) => y < 168));
  return [
    ['Lock-and-key: a rigid, square-cornered site and a substrate of the same width (the shape fits as it is, nothing changes)', close(notch1, sW) && site1[1][1] === site1[2][1] - 18 && site1[2][0] < S1[0][0] + 0.01 + 0 || close(notch1, 30) && close(sW, 30)],
    ['Induced fit: the site is a curved notch deeper than it is wide at the rim, and the substrate is round; curved arrows show the site moulding round S', floor2 > 104 && lineOf(s, 'mould-l').length > 3 && lineOf(s, 'mould-r').length > 3],
    ['Both substrates are named S and each has its own downward arrow into the site (one highlight: the substrate)', labelsOf(s, 'S').length === 2 && linesNamed(s, /^in\d$/).length === 2],
    ['The captions are the book\'s: Lock-and-key (Fischer): rigid site; Induced fit (Koshland): site moulds round S', hasAll(s, ['Lock-and-key', '(Fischer):', 'rigid site', 'Induced fit', '(Koshland): site', 'moulds round S'])],
    ...ends(s),
  ];
}
const labelsOf = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);
const fig94: Diagram = {
  id: 'b11-09-fig-9.4', topic: 3, name: 'Energy profile and enzyme models',
  cases: [{ chip: 'Energy profile', cap: CAP94, k: 'a' }, { chip: 'Enzyme models', cap: CAP94, k: 'b' }],
  draw: (c: { k: string }) => (c.k === 'a' ? drawProfile() : drawModels()),
  check: (c: { k: string }) => (c.k === 'a' ? checkProfile() : checkModels()),
};

/* ====================================================================== */
/* Figure 9.5 (drawn p. 564, caption p. 563) · factors affecting activity  */
/* ====================================================================== */
const CAP95 = 'Factors affecting enzyme activity: temperature (i), pH (ii) and substrate concentration (iii); a competitive inhibitor raises the apparent <i>K</i><sub>m</sub> but leaves <i>V</i><sub>max</sub> unchanged (iv); mechanism of competitive inhibition (v). Each enzyme has its own optimum pH; here it is marked at 7. <i>K</i><sub>m</sub> is the substrate concentration at which the rate is half of <i>V</i><sub>max</sub>.';
const KM = '<i>K</i><sub>m</sub>', VMAX = '<i>V</i><sub>max</sub>';
type Graph = { x0: number; y0: number; w: number; h: number; xmax: number; ymax: number };
const gx = (g: Graph, x: number) => g.x0 + (x / g.xmax) * g.w;
const gy = (g: Graph, y: number) => g.y0 - (y / g.ymax) * g.h;
const GR = (ymax: number, xmax: number): Graph => ({ x0: 52, y0: 240, w: 284, h: 182, xmax, ymax });
function axes(s: Sketch, g: Graph, o: { xt?: [number, string][]; yt: [number, string][]; xlabel: string; ylabel?: boolean }) {
  path(s, [[g.x0, g.y0 - g.h], [g.x0, g.y0], [g.x0 + g.w, g.y0]], { color: C.slate, w: 1.5, name: 'axes' });
  (o.xt ?? []).forEach(([v, t]) => { path(s, [[gx(g, v), g.y0], [gx(g, v), g.y0 + 4]], { color: C.slate, w: 1.3 }); lab(s, gx(g, v), g.y0 + 17, t, { size: 10.5, color: C.slate }); });
  o.yt.forEach(([v, t]) => { path(s, [[g.x0 - 4, gy(g, v)], [g.x0, gy(g, v)]], { color: C.slate, w: 1.3 }); lab(s, g.x0 - 9, gy(g, v) + 3.8, t, { size: 10.5, anchor: 'end', color: C.slate }); });
  lab(s, g.x0 + g.w / 2, g.y0 + (o.xt ? 36 : 22), o.xlabel, { size: 12.5 });
  if (o.ylabel !== false) lab(s, 8, 44, 'Reaction rate', { size: 12, anchor: 'start' });
}
const sample = (g: Graph, f: (x: number) => number, n = 140): P[] => Array.from({ length: n + 1 }, (_, i): P => { const x = (i / n) * g.xmax; return [gx(g, x), gy(g, f(x))]; });
const YT: [number, string][] = [[0, '0.0'], [0.5, '0.5'], [1, '1.0']];
const tempRate = (T: number) => (T <= 37 ? 0.07 + 0.93 * Math.exp(-(((37 - T) / 14.4) ** 2)) : Math.exp(-(((T - 37) / 6.7) ** 2)));
const phRate = (p: number) => Math.exp(-(((p - 7) / 1.25) ** 2) / 2);
const mm = (km: number, vmax = 1) => (x: number) => (vmax * x) / (km + x);
const HEADS = ['(i) Temperature', '(ii) pH', '(iii) [Substrate]', '(iv) Effect of a competitive inhibitor', '(v) Competitive inhibition'];

function drawTemp(): Sketch {
  const s = new Sketch(W, 290), g = GR(1.4, 60);
  title(s, HEADS[0]);
  axes(s, g, { xt: [[0, '0'], [20, '20'], [37, '37'], [60, '60']], yt: YT, xlabel: 'Temperature (°C)' });
  path(s, sample(g, tempRate, 240), { w: 2.4, name: 'curve' });
  path(s, [[gx(g, 37), g.y0], [gx(g, 37), g.y0 - g.h]], { color: C.mari, w: 1.7, dash: '5 4', name: 'optimum' });
  s.dot(gx(g, 37), gy(g, 1), 4.2, C.mari);
  lab(s, gx(g, 37) - 8, 80, 'Optimum', { size: 11, anchor: 'end', color: C.amber });
  lab(s, gx(g, 37) - 8, 94, '37 °C', { size: 11, anchor: 'end', color: C.amber });
  lab(s, 96, 165, 'more', { size: 11, color: C.slate });
  lab(s, 96, 179, 'collisions', { size: 11, color: C.slate });
  lab(s, 302, 140, 'enzyme', { size: 11, color: C.slate });
  lab(s, 302, 154, 'denatures', { size: 11, color: C.slate });
  return s;
}
function checkTemp(): Check[] {
  const s = drawTemp(), g = GR(1.4, 60), pts = lineOf(s, 'curve');
  const top = pts.reduce((a, b) => (b[1] < a[1] ? b : a));
  const T = (x: number) => ((x - g.x0) / g.w) * g.xmax;
  return [
    [`The curve peaks at ${fmt(T(top[0]), 1)} °C at rate ${fmt((g.y0 - top[1]) / (g.h / g.ymax), 2)}: the optimum, 37 °C and 1.0`, Math.abs(T(top[0]) - 37) < 0.4 && Math.abs((g.y0 - top[1]) / (g.h / g.ymax) - 1) < 0.01],
    ['Read values from p. 564: about 0.08 at 0 °C and about 0.3 at 20 °C, then a sharp fall (denaturation) to about zero by 50 °C', Math.abs(tempRate(0) - 0.07) < 0.02 && Math.abs(tempRate(20) - 0.3) < 0.03 && tempRate(50) < 0.05],
    ['The rate rises gently to the optimum and falls faster after it (denatures)', tempRate(30) < tempRate(37) && tempRate(44) < tempRate(37) && 37 - 25 > 0 && tempRate(37 - 6) > tempRate(37 + 6)],
    ['The optimum (dashed line and dot) is the one highlight; the notes more collisions, enzyme denatures, Optimum 37 °C are the book\'s', hasAll(s, ['Optimum', '37 °C', 'more', 'collisions', 'enzyme', 'denatures', 'Temperature (°C)', 'Reaction rate'])],
    ...ends(s),
  ];
}
function drawPH(): Sketch {
  const s = new Sketch(W, 290), g = GR(1.4, 14);
  title(s, HEADS[1]);
  axes(s, g, { xt: [[0, '0'], [7, '7'], [14, '14']], yt: YT, xlabel: 'pH' });
  path(s, sample(g, phRate, 240), { w: 2.4, name: 'curve' });
  path(s, [[gx(g, 7), g.y0], [gx(g, 7), g.y0 - g.h]], { color: C.mari, w: 1.7, dash: '5 4', name: 'optimum' });
  s.dot(gx(g, 7), gy(g, 1), 4.2, C.mari);
  lab(s, gx(g, 7) - 8, 80, 'Optimum', { size: 11, anchor: 'end', color: C.amber });
  lab(s, gx(g, 7) - 8, 94, 'pH', { size: 11, anchor: 'end', color: C.amber });
  return s;
}
function checkPH(): Check[] {
  const s = drawPH(), g = GR(1.4, 14), pts = lineOf(s, 'curve'), top = pts.reduce((a, b) => (b[1] < a[1] ? b : a));
  return [
    [`The curve peaks at pH ${fmt(((top[0] - g.x0) / g.w) * 14, 1)}, rate 1.0: the optimum pH 7`, Math.abs(((top[0] - g.x0) / g.w) * 14 - 7) < 0.1 && Math.abs((g.y0 - top[1]) / (g.h / g.ymax) - 1) < 0.01],
    ['A bell, equal on either side of the optimum, near zero at pH 0 and pH 14', close(phRate(5), phRate(9)) && close(phRate(3), phRate(11)) && phRate(0) < 0.001 && phRate(14) < 0.001],
    ['The optimum (dashed line and dot) is the one highlight; labels are the book\'s: Optimum pH, 0, 7, 14, pH', hasAll(s, ['Optimum', 'pH', '0', '7', '14'])],
    ...ends(s),
  ];
}
const KS = 4.5;
function drawSub(): Sketch {
  const s = new Sketch(W, 290), g = GR(1.3, KS);
  title(s, HEADS[2]);
  axes(s, g, { yt: YT, xlabel: '[Substrate]' });
  path(s, [[g.x0, gy(g, 1)], [g.x0 + g.w, gy(g, 1)]], { color: C.grey, w: 1.6, dash: '6 4', name: 'vmax' });
  path(s, [[g.x0, gy(g, 0.5)], [g.x0 + g.w, gy(g, 0.5)]], { color: C.grey, w: 1.2, dash: '2 3', name: 'half' });
  path(s, sample(g, mm(1), 160), { w: 2.4, name: 'curve' });
  s.dot(gx(g, 1), gy(g, 0.5), 4.2, C.mari);
  lab(s, g.x0 + g.w, gy(g, 1) - 11, VMAX, { size: 12, anchor: 'end', color: C.slate });
  lab(s, gx(g, 1) + 6, gy(g, 0.5) + 20, KM, { size: 12, anchor: 'start', color: C.amber });
  lab(s, 292, gy(g, 0.5) + 28, 'all enzyme', { size: 11, color: C.slate });
  lab(s, 292, gy(g, 0.5) + 42, 'saturated', { size: 11, color: C.slate });
  return s;
}
function checkSub(): Check[] {
  const s = drawSub(), g = GR(1.3, KS), pts = lineOf(s, 'curve'), V = mm(1);
  const y = (x: number) => (g.y0 - pts.reduce((a, b) => (Math.abs(b[0] - gx(g, x)) < Math.abs(a[0] - gx(g, x)) ? b : a))[1]) / (g.h / g.ymax);
  return [
    ['At the substrate level Km the rate is exactly half of Vmax (the dotted 0.5 line meets the curve at the dot)', close(V(1), 0.5) && Math.abs(y(1) - 0.5) < 0.01],
    [`The rate climbs steeply, then flattens below Vmax: ${fmt(y(KS), 2)} at the right edge, never reaching 1.0`, pts.every((p) => p[1] > gy(g, 1)) && V(KS) < 1 && V(KS) > 0.8 && V(0.5) - V(0) > V(KS) - V(KS - 0.5)],
    ['Vmax is the dashed line at 1.0; the Km dot (the one highlight) lies at half of it; labels Vmax, Km, all enzyme saturated, [Substrate]', hasAll(s, ['Vmax', 'Km', 'all enzyme', 'saturated', '[Substrate]'])],
    ...ends(s),
  ];
}
const KR = 3, KSM = 4.7;
function drawInhib(): Sketch {
  const s = new Sketch(W, 290), g = GR(1.6, KSM);
  title(s, HEADS[3]);
  axes(s, g, { yt: YT, xlabel: '[Substrate]' });
  path(s, [[g.x0, gy(g, 1)], [g.x0 + g.w, gy(g, 1)]], { color: C.grey, w: 1.6, dash: '6 4', name: 'vmax' });
  path(s, [[g.x0, gy(g, 0.5)], [g.x0 + g.w, gy(g, 0.5)]], { color: C.grey, w: 1.2, dash: '2 3', name: 'half' });
  path(s, sample(g, mm(1), 160), { w: 2.4, name: 'normal' });
  path(s, sample(g, mm(KR), 160), { color: C.mari, w: 2.4, name: 'inhibited' });
  s.dot(gx(g, 1), gy(g, 0.5), 4.2, C.ink);
  s.dot(gx(g, KR), gy(g, 0.5), 4.2, C.mari);
  lab(s, gx(g, 1) + 2, gy(g, 0.5) - 24, KM, { size: 11, anchor: 'start' });
  lab(s, gx(g, KR) + 6, gy(g, 0.5) + 15, `${KM}′ (higher)`, { size: 11, anchor: 'start', color: C.amber });
  lab(s, g.x0 + 6, gy(g, 1) - 9, `same ${VMAX}`, { size: 11, anchor: 'start', color: C.slate });
  // legend
  const lx = 104, ly = 58;
  path(s, [[lx, ly], [336, ly], [336, ly + 42], [lx, ly + 42]], { close: true, color: C.grey, w: 1.3, name: 'legend' });
  path(s, [[lx + 8, ly + 13], [lx + 36, ly + 13]], { w: 2.4, name: 'key-normal' });
  path(s, [[lx + 8, ly + 31], [lx + 36, ly + 31]], { color: C.mari, w: 2.4, name: 'key-inhibited' });
  lab(s, lx + 44, ly + 17, 'Normal', { size: 11, anchor: 'start' });
  lab(s, lx + 44, ly + 35, 'With competitive inhibitor', { size: 11, anchor: 'start' });
  return s;
}
function checkInhib(): Check[] {
  const s = drawInhib(), g = GR(1.6, KSM), V1 = mm(1), V3 = mm(KR);
  const dots = s.points.map((p) => (g.y0 - p.y) / (g.h / g.ymax));
  const nrm = lineOf(s, 'normal'), inh = lineOf(s, 'inhibited');
  return [
    ['Both dots sit at half of Vmax: the normal Km at the left and Km′ at the right, on their own curves', dots.length === 2 && dots.every((d) => Math.abs(d - 0.5) < 1e-6) && close(V1(1), 0.5) && close(V3(KR), 0.5)],
    [`Km′ = ${KR} Km (the book's dots are at 71 and 214 px from the axis on p. 564, a ratio of ${fmt(214 / 71, 2)}), so the inhibitor raises the apparent Km`, Math.abs(KR - 214 / 71) < 0.02 && KR > 1],
    ['Same Vmax: both curves tend to 1.0 (the dashed line) as substrate grows; the inhibited curve is below the normal one at every substrate level', V1(1e6) > 0.999 && V3(1e6) > 0.999 && nrm.every((p, i) => inh[i][1] >= p[1] - 1e-9)],
    ['The inhibited curve (marigold) is the one highlight; the legend names both: Normal, With competitive inhibitor', hasAll(s, ['Normal', 'With competitive inhibitor', 'same Vmax', 'Km', 'Km′ (higher)', '[Substrate]'])],
    ...ends(s),
  ];
}
function enzymeBlock(s: Sketch, cx: number, id: string, o: { hi: boolean; top: number }) {
  const t = o.top, nw = 36, nd = 26;
  path(s, [[cx - 62, t], [cx - nw / 2, t], [cx - nw / 2, t + nd], [cx + nw / 2, t + nd], [cx + nw / 2, t], [cx + 62, t], [cx + 62, t + 70], [cx - 62, t + 70]], { close: true, w: 1.9, name: `E${id}` });
  lab(s, cx - 50, t + 58, 'E', { size: 13, bold: true });
  const sq: Rect = [cx - 16, t - 10, cx + 16, t + nd - 2];
  path(s, [[sq[0], sq[1]], [sq[2], sq[1]], [sq[2], sq[3]], [sq[0], sq[3]]], { close: true, color: o.hi ? C.mari : C.ink, w: 2.2, name: `bound${id}` });
  lab(s, cx, (sq[1] + sq[3]) / 2 + 4.6, o.hi ? 'I' : 'S', { size: 13, bold: true, color: o.hi ? C.amber : C.text });
  return sq;
}
function drawMech(): Sketch {
  const s = new Sketch(W, 226), top = 104;
  title(s, HEADS[4]);
  enzymeBlock(s, 95, 'N', { hi: false, top });
  const sq = enzymeBlock(s, 265, 'I', { hi: true, top });
  path(s, [[249, 32], [281, 32], [281, 64], [249, 64]], { close: true, w: 2.2, name: 'Sfree' });
  lab(s, 265, 52.6, 'S', { size: 13, bold: true });
  arrow(s, [265, 68], [265, sq[1] - 4], { color: C.slate, w: 1.5, name: 'blocked-arrow' });
  lab(s, 273, 84, 'blocked', { size: 11, anchor: 'start', color: C.amber });
  lab(s, 95, 196, 'Normal: S fits', { size: 11 });
  lab(s, 95, 210, 'the active site', { size: 11 });
  lab(s, 265, 196, 'I holds the site;', { size: 11 });
  lab(s, 265, 210, 'extra S out-competes I', { size: 11 });
  return s;
}
function checkMech(): Check[] {
  const s = drawMech(), N = lineOf(s, 'boundN'), I = lineOf(s, 'boundI'), F = lineOf(s, 'Sfree'), a = lineOf(s, 'blocked-arrow');
  return [
    ['Normal: S sits in the active site of E (the square lies in the notch, bottom at the notch floor)', N[3][1] === 104 + 26 - 2 && N[0][0] > lineOf(s, 'EN')[1][0] - 1],
    ['Inhibited: I (the highlight) fills the same site of E, so the substrate S above it is blocked, its arrow stopping on I', I[0][1] === N[0][1] && F[2][1] < a[0][1] + 6 && a[1][1] < I[0][1] && a[1][1] > a[0][1]],
    ['The captions are the book\'s: Normal: S fits the active site; I holds the site; extra S out-competes I', hasAll(s, ['Normal: S fits', 'the active site', 'I holds the site;', 'extra S out-competes I', 'blocked'])],
    ['Two E blocks, each labelled E', labelsOf(s, 'E').length === 2],
    ...ends(s),
  ];
}
const GRAPHS: [string, () => Sketch, () => Check[]][] = [
  ['Temperature', drawTemp, checkTemp], ['pH', drawPH, checkPH], ['Substrate', drawSub, checkSub], ['Inhibitor curves', drawInhib, checkInhib], ['Mechanism', drawMech, checkMech],
];
const fig95: Diagram = {
  id: 'b11-09-fig-9.5', topic: 3, name: 'Factors affecting enzyme activity',
  cases: GRAPHS.map(([chip], k) => ({ chip, cap: CAP95, k })),
  draw: (c: { k: number }) => GRAPHS[c.k][1](),
  check: (c: { k: number }) => GRAPHS[c.k][2](),
};

export const DIAGRAMS_BIOLOGY_11_09: Diagram[] = [fig91, fig92, fig93, fig94, fig95];
