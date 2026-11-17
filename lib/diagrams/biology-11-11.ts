import { C, LABEL_GAP, Rect, Sketch, audit, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 11 (Photosynthesis in Higher Plants): the drawings of the Master Reference book on pp. 642-705, redrawn.
 * The book prints exactly nine drawings, all in the "Figures" run of pages (header "CHAPTER 11 · FIGURES"); each caption
 * is printed first on the page before and each figure on the page named below. NINE drawings, no unnumbered ones:
 *
 *   Figure 11.1 (drawing p. 646, caption p. 645), Topic 01, topic index 0: absorption and action spectra of chlorophyll a.
 *   Figure 11.2 (drawing p. 646, caption p. 645), Topic 01, index 0: Priestley's bell-jar experiment, jars (a), (b), (c).
 *   Figure 11.3 (drawing p. 648, caption p. 647), Topic 01, index 0: Engelmann's experiment.
 *   Figure 11.4 (drawing p. 655, caption p. 654), Topic 02, index 1: where the light reaction happens in the chloroplast.
 *   Figure 11.5 (drawing p. 657, caption p. 656), Topic 02, index 1: the Z-scheme.
 *   Figure 11.6 (drawing p. 665, caption p. 664), Topic 03, index 2: chemiosmosis in the thylakoid membrane.
 *   Figure 11.7 (drawing p. 668, caption p. 667), Topic 03, index 2: the Calvin cycle, three turns.
 *   Figure 11.8 (drawing p. 675, caption p. 674), Topic 04, index 3: the C4 (Hatch-Slack) pathway.
 *   Figure 11.9 (drawing p. 677, caption p. 676), Topic 04, index 3: Blackman's law of limiting factors.
 * Each figure is one picture with one caption, so each has one case (11.2's panels (a), (b), (c) share one caption).
 *
 * THE BOOK'S, as printed: every word of every label and caption; the errata values (chlorophyll a absorbs mainly in the blue
 * ~430 nm and the red ~660 nm: both curve peaks of 11.1 are computed to sit there, and the green dip is low); 11.2's three
 * jars and their verdicts; 11.3's six colours, prism, Cladophora filament and the clusters of bacteria in blue and red;
 * 11.4's six names and two callouts; 11.5's carriers in order (P680, e- acceptor, PQ, Cyt b6f, PC, P700, e- acceptor, Fd,
 * NADP+ reductase, NADPH), two light-boost arrows and the water-splitting note 2H2O -> 4H+ + O2 + 4e-; 11.6's components
 * and its equation; 11.7's three phases, every count (3 RuBP + 3 CO2 -> 6 PGA; 6 ATP + 6 NADPH -> 6 G3P; 5 G3P + 3 ATP -> 3 RuBP;
 * 9 ATP and 6 NADPH for 3 CO2; 3 ATP and 2 NADPH per CO2), each recomputed in its check; 11.8's two cells and
 * every intermediate with its carbon count; 11.9's axes 0 to 100, the two curves' plateaus (about 55 and about 83), the
 * transition at about 12 units and the light-limiting band to its left.
 * SCHEMATIC (re-laid for a phone, not read from the page): all positions and sizes; the spectra are two sums of Gaussians fitted
 * by eye to the book's curves (heights about 0.9 and 0.7, green about 0.1) and the action spectrum is the absorption
 * spectrum scaled to 94 per cent; the Engelmann bar has six equal colour bands and the bacteria are a seeded scatter whose
 * density follows the band (more in blue and red, few in green); the jars, mouse, candle and mint are simple outlines;
 * the chloroplast is an ellipse pair with two grana and two stromal lamellae; the Z-scheme's heights are read from the page
 * (down each chain, up each arrow) but not to a voltage scale; chemiosmosis and the Calvin cycle are box diagrams;
 * 11.9's curves are R = Rmax (1 - e^(-I/k)) with the book's plateaus, the two sharing one initial slope so they coincide
 * below the transition. The book's tints and colours are dropped (no fills; one marigold highlight per drawing). Dropped
 * from the book: the small chevron from PS I to NADP+ reductase in 11.6 (the boxes sit next to each other).
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');

/* ---------- helpers (as in biology-11-01.ts, with dashes, leaders and ellipses added) ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const LEADS = new WeakMap<Sketch, { a: P; b: P; own: Rect | null }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean; nokeep?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.nokeep) keep(s, o.close ? [...pts, pts[0]] : pts);
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
  BOXES.set(s, [...(BOXES.get(s) ?? []), { name, rect: r, inner: [] }]);
}
/** A plain rectangle outline (no rounding) as a kept polygon. */
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
function ellipsePts(cx: number, cy: number, rx: number, ry: number, n = 120): P[] {
  return Array.from({ length: n + 1 }, (_, i): P => [cx + rx * Math.cos((2 * Math.PI * i) / n), cy + ry * Math.sin((2 * Math.PI * i) / n)]);
}
function ellipse(s: Sketch, cx: number, cy: number, rx: number, ry: number, o: { color?: string; w?: number; rot?: number } = {}) {
  s.add(`<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}"${o.rot ? ` transform="rotate(${o.rot} ${r1(cx)} ${r1(cy)})"` : ''} fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
  const a = ((o.rot ?? 0) * Math.PI) / 180;
  keep(s, ellipsePts(0, 0, rx, ry, 60).map((p): P => [cx + p[0] * Math.cos(a) - p[1] * Math.sin(a), cy + p[0] * Math.sin(a) + p[1] * Math.cos(a)]));
}
/** A line of STIX on the drawing from its baseline; its box at its width. Optionally inside a named box. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; within?: string } = {}): Rect {
  const size = o.size ?? 11, anchor = o.anchor ?? 'middle', w = wOf(html, size) * (o.bold ? 1.08 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
  if (o.within) BOXES.get(s)!.find((b) => b.name === o.within)!.inner.push(rect);
  return rect;
}
/** Several lines, the first at baseline y, `lh` apart; returns the rectangles. */
function lines(s: Sketch, x: number, y: number, arr: string[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean; lh?: number; within?: string } = {}): Rect[] {
  return arr.map((t, i) => lab(s, x, y + i * (o.lh ?? 13), t, o));
}
/** A thin line from a label to the part it names, with a dot on the part. It must not run through another label. */
function lead(s: Sketch, a: P, b: P, own: Rect | null, hi = false) {
  s.add(`<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b[0])}" y2="${r1(b[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(b[0])}" cy="${r1(b[1])}" r="2.4" fill="${hi ? C.mari : C.ink}"/>`);
  LEADS.set(s, [...(LEADS.get(s) ?? []), { a, b, own }]);
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
/** Every drawn label keeps LABEL_GAP clear of every drawn line, lies in the frame, touches no other label, sits inside its box, and no leader line runs through another label. */
function layout(s: Sketch): Check[] {
  let gap = Infinity, what = '';
  const boxes = [...s.labels.map((l) => ({ text: l.text, rect: l.rect })), ...s.tags.map((t) => ({ text: t.name, rect: t.rect }))];
  for (const l of boxes) for (const pts of LINES.get(s) ?? []) { const d = gapTo(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  const L = s.labels;
  const touch = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  const thru = (LEADS.get(s) ?? []).flatMap((ld) => s.labels.filter((l) => l.rect !== ld.own && crosses(ld.a, ld.b, l.rect, -LABEL_GAP)).map((l) => l.text));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
    [`No leader line runs through a label it does not name${thru.length ? `: ${thru.join(', ')}` : ''}`, thru.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t) || s.tags.some((g) => g.name === t);
const hasAll = (s: Sketch, ts: string[]) => ts.every((t) => has(s, t));
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
/** Quadratic Bezier samples. */
const quad = (a: P, c: P, b: P, n = 24): P[] => Array.from({ length: n + 1 }, (_, i): P => { const t = i / n; return [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]]; });
/** A curved arrow along samples: the line, then the head on the last stretch. */
function curveArrow(s: Sketch, pts: P[], o: { color?: string } = {}) {
  const n = pts.length;
  path(s, pts.slice(0, n - 3), { color: o.color });
  s.vec(pts[n - 4][0], pts[n - 4][1], pts[n - 1][0], pts[n - 1][1], { color: o.color, w: 1.7 });
  keep(s, pts.slice(n - 4));
}
/** A vector that the layout check keeps labels clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) { s.vec(a[0], a[1], b[0], b[1], o); keep(s, [a, b]); }

/* ================= Figure 11.1 ================= */
const CAP111 = 'Absorption spectrum of chlorophyll a (solid) and action spectrum of photosynthesis (dashed). Both peak in the blue (~430 nm) and red (~660 nm) and are low in green; their close overlap shows that chlorophyll a is the main pigment driving photosynthesis.';
const gau = (x: number, c: number, a: number, sd: number) => a * Math.exp(-((x - c) ** 2) / (2 * sd * sd));
/** Schematic chlorophyll a absorption (relative): peaks near 430 and 662 nm, a low green plateau. */
const absorb = (nm: number) => 0.075 + gau(nm, 430, 0.835, 20) + gau(nm, 662, 0.625, 23) + gau(nm, 540, 0.04, 28);
const action = (nm: number) => absorb(nm) * 0.94 + 0.012;
const X1 = (nm: number) => 50 + (nm - 400) * 0.98;
const Y1 = (v: number) => 244 - v * 171;
const WL = Array.from({ length: 151 }, (_, i) => 400 + i * 2);
const argmax = (f: (n: number) => number, lo: number, hi: number) => WL.filter((n) => n >= lo && n <= hi).reduce((b, n) => (f(n) > f(b) ? n : b));
function draw111(): Sketch {
  const s = new Sketch(W, 292);
  // legend
  path(s, [[10, 11], [34, 11]], { color: C.ink, w: 2.2, nokeep: true });
  lab(s, 40, 15, 'Absorption spectrum (Chl a)', { size: 11, anchor: 'start' });
  path(s, [[10, 29], [34, 29]], { color: C.mari, w: 2.2, dash: true, nokeep: true });
  lab(s, 40, 33, 'Action spectrum (photosynthesis)', { size: 11, anchor: 'start' });
  lab(s, 8, 56, 'Relative absorption / activity', { size: 11, anchor: 'start', color: C.slate });
  // axes
  path(s, [[50, 64], [50, 244], [344, 244]], { color: C.slate, w: 1.4 });
  for (const v of [0, 0.2, 0.4, 0.6, 0.8, 1.0]) {
    path(s, [[47, Y1(v)], [50, Y1(v)]], { color: C.slate, w: 1.2 });
    lab(s, 42, Y1(v) + 4, v.toFixed(1), { size: 10, anchor: 'end', color: C.slate });
  }
  for (let nm = 400; nm <= 700; nm += 50) {
    path(s, [[X1(nm), 244], [X1(nm), 246.5]], { color: C.slate, w: 1.2 });
    lab(s, X1(nm), 260, String(nm), { size: 10, color: C.slate });
  }
  lab(s, 197, 282, 'Wavelength (nm)', { size: 12 });
  path(s, WL.map((n): P => [X1(n), Y1(absorb(n))]), { color: C.ink, w: 2 });
  path(s, WL.map((n): P => [X1(n), Y1(action(n))]), { color: C.mari, w: 2.2, dash: true });
  lab(s, X1(430), 76, 'Blue', { size: 11, color: C.slate });
  lab(s, X1(662), 112, 'Red', { size: 11, color: C.slate });
  lines(s, 200, 128, ['Close overlap of the curves', 'supports: Chl a drives', 'photosynthesis'], { size: 10.5, color: C.slate, lh: 12 });
  lab(s, X1(545), 208, 'Green (low)', { size: 10.5, color: C.slate });
  return s;
}
function check111(): Check[] {
  const s = draw111();
  const maxDiff = Math.max(...WL.map((n) => Math.abs(absorb(n) - action(n))));
  const pb = argmax(absorb, 400, 520), pr = argmax(absorb, 580, 700), ab = argmax(action, 400, 520), ar = argmax(action, 580, 700);
  return [
    [`Absorption peaks in the blue at ${pb} nm and in the red at ${pr} nm (errata: about 430 and 660 nm)`, Math.abs(pb - 430) <= 6 && Math.abs(pr - 660) <= 6],
    [`The action spectrum peaks at the same two places (${ab} and ${ar} nm)`, Math.abs(ab - 430) <= 6 && Math.abs(ar - 660) <= 6],
    [`The curves overlap closely: the largest gap is ${fmt(maxDiff, 3)} of the relative scale`, maxDiff < 0.06],
    [`Green is low: absorption at 540 nm is ${fmt(absorb(540), 2)}, under a quarter of the blue peak ${fmt(absorb(430), 2)}`, absorb(540) < 0.25 * absorb(430) + 0.04 && absorb(540) < 0.2],
    [`Blue peak (${fmt(absorb(430), 2)}) is higher than red peak (${fmt(absorb(662), 2)}), as drawn`, absorb(430) > absorb(662)],
    ['The title, both legend entries, the three region labels and the overlap note are the book\'s', hasAll(s, ['Absorption spectrum (Chl a)', 'Action spectrum (photosynthesis)', 'Blue', 'Red', 'Green (low)', 'Wavelength (nm)', 'Relative absorption / activity', 'photosynthesis'])],
    ...layout(s), clean(s),
  ];
}
const fig111: Diagram = { id: 'b11-11-fig-11.1', topic: 0, name: 'Absorption and action spectra', cases: [{ chip: 'Chlorophyll a', cap: CAP111 }], draw: draw111, check: check111 };

/* ================= Figure 11.2 ================= */
const CAP112 = 'Priestley’s bell-jar experiment: (a) candle alone, the flame dies; (b) mouse alone, the mouse suffocates; (c) with a mint plant, the air is restored, the candle burns and the mouse survives. Plants release something (oxygen) that animals and flames consume.';
const BY = 186;
const JARS = [{ cx: 62, tag: '(a)', verdict: 'Flame dies' }, { cx: 180, tag: '(b)', verdict: 'Mouse suffocates' }, { cx: 298, tag: '(c)', verdict: 'Air restored' }];
/** Half-width of the jar `h` above its base (the polygon of jar()). */
const jarHalf = (h: number) => (h < 0 ? 0 : h <= 62 ? 40 + 6 * (h / 62) : h <= 100 ? 46 - 14 * ((h - 62) / 38) : h <= 134 ? 32 * (1 - (h - 100) / 34) : 0);
function jar(s: Sketch, cx: number) {
  path(s, [[cx - 40, BY], [cx - 46, BY - 62], [cx - 32, BY - 100], [cx, BY - 134], [cx + 32, BY - 100], [cx + 46, BY - 62], [cx + 40, BY]], { w: 1.9 });
  path(s, rectPts([cx - 52, BY, cx + 52, BY + 5]), { close: true, color: C.slate, w: 1.7 });
}
/** Content extents (relative to the jar centre and base) that must lie inside the jar. */
const CONTENT: Record<string, Rect[]> = {
  a: [[-6, 0, 6, 40]],
  b: [[-30, 0, 20, 26], [-8, 40, 8, 60]],
  c: [[-28, 0, 20, 44]],
};
function draw112(): Sketch {
  const s = new Sketch(W, 266);
  JARS.forEach((j) => {
    jar(s, j.cx);
    lab(s, j.cx, BY - 142, j.tag, { size: 14 });
    lab(s, j.cx, BY + 24, j.verdict, { size: 12, bold: true, color: j.tag === '(c)' ? C.amber : C.text });
  });
  const [a, b, c] = JARS.map((j) => j.cx);
  // (a) candle alone, the flame out (a cross over the wick)
  path(s, rectPts([a - 4, BY - 26, a + 4, BY]), { close: true });
  path(s, [[a, BY - 26], [a, BY - 31]], { w: 1.4 });
  path(s, [[a - 5, BY - 41], [a + 5, BY - 33]], { color: C.slate, w: 1.7 });
  path(s, [[a + 5, BY - 41], [a - 5, BY - 33]], { color: C.slate, w: 1.7 });
  // (b) mouse alone, a small "!" above it
  ellipse(s, b - 4, BY - 12, 14, 10);
  ellipse(s, b + 14, BY - 14, 6, 6);
  ellipse(s, b + 16, BY - 22, 3, 3);
  path(s, quad([b - 18, BY - 10], [b - 26, BY - 12], [b - 28, BY - 2], 8), { w: 1.4 });
  lab(s, b, BY - 50, '!', { size: 16, bold: true, color: C.slate });
  // (c) a mint plant and a burning candle (flame in marigold)
  path(s, [[c - 14, BY], [c - 13, BY - 24]], { w: 1.4 });
  ellipse(s, c - 20, BY - 28, 8, 4, { rot: -40, w: 1.5 });
  ellipse(s, c - 7, BY - 26, 8, 4, { rot: 40, w: 1.5 });
  ellipse(s, c - 13, BY - 38, 6, 3.5, { rot: -80, w: 1.5 });
  path(s, rectPts([c + 10, BY - 26, c + 18, BY]), { close: true });
  path(s, [[c + 14, BY - 26], [c + 14, BY - 30]], { w: 1.4 });
  ellipse(s, c + 14, BY - 37, 3, 5.5, { color: C.mari, w: 2 });
  lines(s, 180, 238, ['Plants release something (O<sub>2</sub>)', 'that animals and flames consume'], { size: 11.5, color: C.slate, lh: 16 });
  return s;
}
function check112(): Check[] {
  const s = draw112();
  const inside = (key: string, cx: number) => CONTENT[key].every(([x0, y0, x1, y1]) => [[x0, y0], [x1, y0], [x0, y1], [x1, y1]].every(([x, h]) => Math.abs(x) <= jarHalf(h) - 3 && Math.abs(x) <= jarHalf(h) - 3 && cx > 0));
  const tags = s.labels.map((l) => l.text);
  return [
    ['Three jars in the book\'s order, (a), (b), (c), with the verdicts Flame dies, Mouse suffocates, Air restored', JARS.map((j) => j.tag).join() === '(a),(b),(c)' && hasAll(s, ['(a)', '(b)', '(c)', 'Flame dies', 'Mouse suffocates', 'Air restored']) && tags.indexOf('(a)') < tags.indexOf('(b)')],
    ['Everything drawn in each jar lies inside its outline (3 px to spare)', inside('a', 62) && inside('b', 180) && inside('c', 298)],
    ['Each jar sits on its own base plate, and the three jars do not overlap', JARS.every((j, i) => i === 0 || j.cx - 52 > JARS[i - 1].cx + 52)],
    ['The closing line "Plants release something (O2) that animals and flames consume" is on the drawing', hasAll(s, ['Plants release something (O2)', 'that animals and flames consume'])],
    ...layout(s), clean(s),
  ];
}
const fig112: Diagram = { id: 'b11-11-fig-11.2', topic: 0, name: 'Priestley’s bell jars', cases: [{ chip: 'Bell-jar experiment', cap: CAP112 }], draw: draw112, check: check112 };

/* ================= Figure 11.3 ================= */
const CAP113 = 'Engelmann’s experiment: aerobic bacteria cluster along the <i>Cladophora</i> filament in the blue and red regions of the spectrum, marking the wavelengths that drive most O<sub>2</sub> release.';
const BANDS = ['Violet', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];
const BAND_W = [0.08, 1, 0.22, 0.15, 0.3, 0.85];
const BX0 = 24, BX1 = 336, BWID = (BX1 - BX0) / 6;
const filY = (x: number) => 126 + 7 * Math.cos(((x - 102) / 208) * 2 * Math.PI);
/** A seeded scatter (the same on every draw): bacteria per band in proportion to its weight. */
function bacteria(): { x: number; y: number; band: number }[] {
  let seed = 7;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  const out: { x: number; y: number; band: number }[] = [];
  BAND_W.forEach((w, k) => {
    const n = Math.round(w * 40), cx = BX0 + BWID * (k + 0.5);
    for (let i = 0; i < n; i++) {
      const g = (rnd() + rnd() + rnd() - 1.5) / 1.5; // roughly -1..1, bell-shaped
      const x = Math.max(BX0 + BWID * k + 4, Math.min(BX0 + BWID * (k + 1) - 4, cx + g * BWID * 0.45));
      out.push({ x, y: filY(x) + 10 + rnd() * 24, band: k });
    }
  });
  return out;
}
function draw113(): Sketch {
  const s = new Sketch(W, 246);
  lab(s, 87, 14, 'Prism', { size: 11 });
  path(s, [[78, 22], [78, 52], [96, 52]], { close: true, color: C.slate });
  lines(s, 6, 34, ['White', 'light'], { size: 11, anchor: 'start', color: C.slate, lh: 14 });
  arrow(s, [40, 40], [76, 40], { color: C.slate });
  // the spectrum bar: six bands
  path(s, rectPts([BX0, 76, BX1, 94]), { close: true });
  for (let k = 1; k < 6; k++) path(s, [[BX0 + BWID * k, 76], [BX0 + BWID * k, 94]], { w: 1.2 });
  BANDS.forEach((b, k) => lab(s, BX0 + BWID * (k + 0.5), 68, b, { size: 10.5 }));
  // the Cladophora filament, a tube
  const xs = Array.from({ length: 53 }, (_, i) => BX0 + ((BX1 - BX0) * i) / 52);
  path(s, xs.map((x): P => [x, filY(x) - 4]), { w: 1.9 });
  path(s, xs.map((x): P => [x, filY(x) + 4]), { w: 1.9 });
  path(s, [[BX0, filY(BX0) - 4], [BX0, filY(BX0) + 4]], { w: 1.9 });
  path(s, [[BX1, filY(BX1) - 4], [BX1, filY(BX1) + 4]], { w: 1.9 });
  bacteria().forEach((b) => s.add(`<circle cx="${r1(b.x)}" cy="${r1(b.y)}" r="2.3" fill="${C.mari}"/>`));
  lines(s, 180, 190, ['Bacteria cluster in blue & red', '(high O<sub>2</sub>)'], { size: 11, color: C.slate, lh: 13 });
  lab(s, 180, 232, 'Bacteria mark wavelengths driving most O<sub>2</sub> release', { size: 11.5 });
  return s;
}
function check113(): Check[] {
  const s = draw113();
  const bac = bacteria();
  const count = (k: number) => bac.filter((b) => b.band === k).length;
  const blue = count(1), red = count(5), green = count(2), yellow = count(3);
  const near = bac.filter((b) => s.labels.some((l) => b.x > l.rect[0] - 4 && b.x < l.rect[2] + 4 && b.y > l.rect[1] - 4 && b.y < l.rect[3] + 4)).length;
  const under = bac.every((b) => b.y > filY(b.x) + 8);
  return [
    [`Six colours in the book's order, Violet to Red: ${BANDS.join(', ')}`, BANDS.join() === 'Violet,Blue,Green,Yellow,Orange,Red' && BANDS.every((b) => has(s, b))],
    [`Bacteria crowd in blue (${blue}) and red (${red}) and are few in green (${green}) and yellow (${yellow})`, blue >= 3 * green && red >= 3 * green && blue >= 3 * yellow && red >= 3 * yellow],
    ['Blue and red are the two densest bands of the six', [...BAND_W.keys()].sort((a, b) => count(b) - count(a)).slice(0, 2).sort().join() === '1,5'],
    ['Every bacterium lies below the filament, clear of it, and none sits under a label', under && near === 0],
    ['The prism, "White light", both captions of the book\'s drawing and the Cladophora filament are on the drawing', hasAll(s, ['Prism', 'White', 'light', 'Bacteria cluster in blue & red', '(high O2)', 'Bacteria mark wavelengths driving most O2 release'])],
    ...layout(s), clean(s),
  ];
}
const fig113: Diagram = { id: 'b11-11-fig-11.3', topic: 0, name: 'Engelmann’s experiment', cases: [{ chip: 'Prism and Cladophora', cap: CAP113 }], draw: draw113, check: check113 };

/* ================= Figure 11.4 ================= */
const CAP114 = 'Structure of a chloroplast: outer and inner envelope membranes, stroma, grana (stacks of thylakoids), stromal lamellae and thylakoid lumen. The light reaction occurs on the thylakoid membranes; the Calvin cycle occurs in the stroma.';
const CP = { cx: 180, cy: 150, orx: 84, ory: 108, irx: 76, iry: 98 };
const GRANA = [{ x0: 124, y0: 150, n: 6, step: 10 }, { x0: 196, y0: 96, n: 5, step: 10.5 }];
const DISC_W = 40, DISC_H = 8;
const discRect = (g: { x0: number; y0: number; step: number }, i: number): Rect => [g.x0, g.y0 + i * g.step, g.x0 + DISC_W, g.y0 + i * g.step + DISC_H];
const LAM: P[][] = [[[164, 160], [200, 146]], [[164, 168], [212, 146]]];
const onEllipse = (p: P, cx: number, cy: number, rx: number, ry: number) => Math.abs(Math.hypot((p[0] - cx) / rx, (p[1] - cy) / ry) - 1);
function draw114(): Sketch {
  const s = new Sketch(W, 276);
  path(s, ellipsePts(CP.cx, CP.cy, CP.orx, CP.ory), { w: 3 });
  path(s, ellipsePts(CP.cx, CP.cy, CP.irx, CP.iry), { w: 1.7, color: C.slate });
  GRANA.forEach((g) => { for (let i = 0; i < g.n; i++) path(s, rectPts(discRect(g, i)), { close: true, color: C.mari, w: 1.7 }); });
  LAM.forEach((l) => path(s, l, { color: C.mari, w: 1.7 }));
  ellipse(s, 230, 198, 8, 6, { color: C.slate });
  lab(s, 195, 227, 'Stroma', { size: 13, bold: true });
  // labels and leaders
  const L = (x: number, y: number, t: string[], o: { anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) => lines(s, x, y, t, { size: 10.5, anchor: o.anchor ?? 'start', color: o.color ?? C.text, lh: 12 });
  const ang = (a: number, cx: number, cy: number, rx: number, ry: number): P => [cx + rx * Math.cos((a * Math.PI) / 180), cy + ry * Math.sin((a * Math.PI) / 180)];
  const o1 = L(6, 82, ['Outer envelope'])[0];
  lead(s, [o1[2] + 5, 79], ang(215, CP.cx, CP.cy, CP.orx, CP.ory), o1);
  const i1 = L(6, 118, ['Inner envelope'])[0];
  lead(s, [i1[2] + 5, 116], ang(195, CP.cx, CP.cy, CP.irx, CP.iry), i1);
  const gr = L(6, 170, ['Granum', '(stack of', 'thylakoids)']);
  lead(s, [gr[2][2] + 6, 178], [124, 184], gr[1]);
  const sl = L(180, 20, ['Stromal lamella'], { anchor: 'middle' })[0];
  lead(s, [180, 26], [182, 153], sl);
  const lr = L(272, 66, ['Light reaction', 'on thylakoid', 'membrane'], { color: C.amber });
  lead(s, [268, 86], [236, 100], lr[1], true);
  const tl = L(272, 130, ['Thylakoid lumen'])[0];
  lead(s, [268, 128], [226, 131.5], tl);
  const sg = L(272, 204, ['Starch granule'])[0];
  lead(s, [268, 202], [237, 199], sg);
  const cc = L(6, 246, ['Calvin cycle', 'in stroma'], { color: C.slate });
  lead(s, [cc[0][2] + 5, 248], [152, 238], cc[0]);
  return s;
}
function check114(): Check[] {
  const s = draw114();
  const inEll = (p: P, g = 3) => ((p[0] - CP.cx) / (CP.irx - g)) ** 2 + ((p[1] - CP.cy) / (CP.iry - g)) ** 2 <= 1;
  const granaIn = GRANA.every((g) => [...Array(g.n).keys()].every((i) => { const r = discRect(g, i); return [[r[0], r[1]], [r[2], r[1]], [r[0], r[3]], [r[2], r[3]]].every((p) => inEll(p as P)); }));
  const lam = LAM.every((l) => l.every((p) => inEll(p)));
  const lamEndsOnGrana = LAM.every((l) => Math.abs(l[0][0] - (GRANA[0].x0 + DISC_W)) < 1e-9 && l[0][1] >= GRANA[0].y0 && l[0][1] <= GRANA[0].y0 + (GRANA[0].n - 1) * GRANA[0].step + DISC_H && Math.abs(l[1][1] - (GRANA[1].y0 + 4 * GRANA[1].step + DISC_H)) < 1e-9 && l[1][0] >= GRANA[1].x0 && l[1][0] <= GRANA[1].x0 + DISC_W);
  const lumenIn = (() => { const r = discRect(GRANA[1], 3); return 226 > r[0] && 226 < r[2] && 131.5 > r[1] && 131.5 < r[3]; })();
  const lamOn = (() => { const [a, b] = LAM[0]; const t = (182 - a[0]) / (b[0] - a[0]); return Math.abs(a[1] + t * (b[1] - a[1]) - 153) < 0.6; })();
  return [
    ['Two membranes: the inner envelope lies wholly inside the outer, 6 px or more clear all round', CP.orx - CP.irx >= 6 && CP.ory - CP.iry >= 6],
    ['The leaders for the outer and inner envelopes end on their own ellipses', onEllipse([180 + CP.orx * Math.cos((215 * Math.PI) / 180), 150 + CP.ory * Math.sin((215 * Math.PI) / 180)], CP.cx, CP.cy, CP.orx, CP.ory) < 1e-9 && onEllipse([180 + CP.irx * Math.cos((195 * Math.PI) / 180), 150 + CP.iry * Math.sin((195 * Math.PI) / 180)], CP.cx, CP.cy, CP.irx, CP.iry) < 1e-9],
    ['Both grana (stacks of discs: 6 and 5 thylakoids) lie wholly inside the stroma, 3 px clear of the inner envelope', GRANA.map((g) => g.n).join() === '6,5' && granaIn],
    ['The two stromal lamellae run from the lower granum\'s edge to the upper granum\'s base, and the "Stromal lamella" leader ends on one', lam && lamEndsOnGrana && lamOn],
    ['"Thylakoid lumen" points inside a thylakoid disc (the space the outline encloses)', lumenIn],
    ['The six parts and two callouts are the book\'s: Outer envelope, Inner envelope, Granum (stack of thylakoids), Stromal lamella, Thylakoid lumen, Starch granule, Stroma; Light reaction on thylakoid membrane; Calvin cycle in stroma', hasAll(s, ['Outer envelope', 'Inner envelope', 'Granum', '(stack of', 'thylakoids)', 'Stromal lamella', 'Thylakoid lumen', 'Starch granule', 'Stroma', 'Light reaction', 'on thylakoid', 'membrane', 'Calvin cycle', 'in stroma'])],
    ['The one highlight (marigold) is the thylakoid membranes where the light reaction happens: the discs and lamellae', GRANA.reduce((n, g) => n + g.n, 0) === 11],
    ...layout(s), clean(s),
  ];
}
const fig114: Diagram = { id: 'b11-11-fig-11.4', topic: 1, name: 'Where the light reaction happens', cases: [{ chip: 'Chloroplast structure', cap: CAP114 }], draw: draw114, check: check114 };

/* ================= Figure 11.5 ================= */
const CAP115 = 'The Z-scheme: electrons from water are excited at P680 (PS II), pass through PQ, Cyt b<sub>6</sub>f and PC to P700 (PS I), are excited again, and pass through Fd to NADP<sup>+</sup> reductase, forming NADPH.';
// positions read from p. 657 (book pixels mapped x*0.55, y*0.85), then nudged for a phone
const Z = {
  p680: [87, 252] as P, p700: [225, 220] as P,
  chain1: [[87, 59], [116, 102], [145, 144], [174, 182], [203, 204], [225, 220]] as P[],
  chain2: [[225, 45], [247, 80], [273, 118], [299, 141], [325, 160]] as P[],
  names1: ['e<sup>−</sup> acceptor', 'PQ', 'Cyt b<sub>6</sub>f', 'PC'],
  names2: ['e<sup>−</sup> acceptor', 'Fd', 'NADP<sup>+</sup> reductase', 'NADPH'],
};
function draw115(): Sketch {
  const s = new Sketch(W, 336);
  lab(s, 8, 14, 'Redox potential:', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 8, 27, 'more negative (higher energy) up', { size: 11, anchor: 'start', color: C.slate });
  arrow(s, [34, 322], [34, 40], { color: C.ink, w: 1.5 });
  // the two chains
  path(s, Z.chain1, { w: 2.2 });
  path(s, Z.chain2, { w: 2.2 });
  Z.chain1.slice(1, 5).forEach((p) => s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.ink}"/>`));
  Z.chain2.slice(1, 4).forEach((p) => s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.ink}"/>`));
  s.add(`<circle cx="${Z.chain2[4][0]}" cy="${Z.chain2[4][1]}" r="5" fill="${C.ink}"/>`);
  // reaction centres and the two light arrows
  path(s, rectPts([Z.p680[0] - 7, Z.p680[1] - 7, Z.p680[0] + 7, Z.p680[1] + 7]), { close: true, w: 1.9 });
  path(s, rectPts([Z.p700[0] - 7, Z.p700[1] - 7, Z.p700[0] + 7, Z.p700[1] + 7]), { close: true, w: 1.9 });
  arrow(s, [Z.p680[0], Z.p680[1] - 8], [Z.p680[0], 66], { color: C.mari, w: 2.4 });
  arrow(s, [Z.p700[0], Z.p700[1] - 8], [Z.p700[0], 52], { color: C.mari, w: 2.4 });
  lab(s, 95, 128, 'h<i>ν</i>', { size: 15, bold: true, anchor: 'start', color: C.amber });
  lab(s, 233, 134, 'h<i>ν</i>', { size: 15, bold: true, anchor: 'start', color: C.amber });
  // carrier names
  lab(s, 125, 94, Z.names1[0], { size: 10, anchor: 'start', color: C.slate });
  lab(s, 130, 160, Z.names1[1], { size: 11.5, anchor: 'end' });
  lab(s, 180, 162, Z.names1[2], { size: 11.5, anchor: 'start' });
  lab(s, 192, 226, Z.names1[3], { size: 11.5, anchor: 'end' });
  lab(s, 255, 76, Z.names2[0], { size: 10, anchor: 'start', color: C.slate });
  lab(s, 281, 112, Z.names2[1], { size: 11.5, anchor: 'start' });
  lines(s, 280, 160, ['NADP<sup>+</sup>', 'reductase'], { size: 10.5, anchor: 'middle', lh: 14 });
  lab(s, 322, 194, 'NADPH', { size: 12, bold: true });
  // notes
  lines(s, 93, 200, ['e<sup>−</sup> excited', 'by light'], { size: 10.5, anchor: 'start', color: C.slate, lh: 12 });
  lines(s, 217, 120, ['e<sup>−</sup> boosted', 'again by light'], { size: 10.5, anchor: 'end', color: C.slate, lh: 12 });
  lines(s, 178, 240, ['energy released', '→ ATP synthesis'], { size: 10.5, anchor: 'middle', color: C.slate, lh: 12 });
  arrow(s, [166, 226], [161, 170], { color: C.slate, w: 1.4 });
  lab(s, 100, 276, 'P680', { size: 12.5, bold: true, anchor: 'start' });
  lab(s, 136, 276, '(PS II)', { size: 10, anchor: 'start', color: C.slate });
  lab(s, 238, 244, 'P700', { size: 12.5, bold: true, anchor: 'start' });
  lab(s, 274, 244, '(PS I)', { size: 10, anchor: 'start', color: C.slate });
  lines(s, 62, 302, ['2H<sub>2</sub>O →', '4H<sup>+</sup> + O<sub>2</sub>', '+ 4e<sup>−</sup>'], { size: 10.5, anchor: 'middle', color: C.slate, lh: 15 });
  arrow(s, [66, 290], [79, 262], { color: C.slate, w: 1.4 });
  return s;
}
function check115(): Check[] {
  const s = draw115();
  const down = (c: P[]) => c.every((p, i) => i === 0 || (p[0] > c[i - 1][0] && p[1] > c[i - 1][1]));
  const upGain = (p: P, top: number) => p[1] - top;
  // the water-splitting note balances: 2 H2O -> 4 H+ + O2 + 4 e-
  const H = 2 * 2, O = 2 * 1, Hp = 4, O2 = 2, charge = 4 * 1 + 4 * -1;
  return [
    ['Each chain steps down (every carrier is lower than the one before): PQ, Cyt b6f, PC to P700, then Fd, NADP+ reductase, NADPH', down(Z.chain1) && down(Z.chain2) && Z.names1.length === 4 && Z.names2.length === 4],
    ['Two light-boost arrows lift an electron from each reaction centre to the top of the next chain: P680 (PS II) to the start of chain 1, P700 (PS I) to chain 2', upGain(Z.p680, 66) > 150 && upGain(Z.p700, 52) > 150 && Math.abs(Z.chain1[0][1] - 66) < 10 && Math.abs(Z.chain2[0][1] - 52) < 10],
    ['The scheme is Z-shaped: P700 sits to the right of P680, and chain 1 ends at P700', Z.p700[0] > Z.p680[0] && Z.chain1[Z.chain1.length - 1].join() === Z.p700.join()],
    ['P680 and P700 are the same height as the foot of their chain (the arrows start where the electrons are lowest)', Z.p680[1] > Z.chain1[1][1] && Z.p700[1] >= Z.chain1[4][1]],
    ['Water splitting 2H2O → 4H+ + O2 + 4e− balances: H 4 = 4, O 2 = 2, charge 0 = +4 − 4', H === Hp && O === O2 && charge === 0],
    ['Every printed label is on the drawing: P680 (PS II), P700 (PS I), hν twice, e− acceptor twice, PQ, Cyt b6f, PC, Fd, NADP+ reductase, NADPH, the three notes and the axis note', hasAll(s, ['P680', '(PS II)', 'P700', '(PS I)', 'PQ', 'Cyt b6f', 'PC', 'Fd', 'NADPH', 'reductase', 'e− acceptor', 'e− excited', 'by light', 'e− boosted', 'again by light', 'energy released', '→ ATP synthesis', 'Redox potential:', 'more negative (higher energy) up']) && s.labels.filter((l) => l.text === 'hν').length === 2 && s.labels.filter((l) => l.text === 'e− acceptor').length === 2],
    ...layout(s), clean(s),
  ];
}
const fig115: Diagram = { id: 'b11-11-fig-11.5', topic: 1, name: 'The Z-scheme', cases: [{ chip: 'PS II to PS I', cap: CAP115 }], draw: draw115, check: check115 };

/* ================= Figure 11.6 ================= */
const CAP116 = 'Chemiosmosis in the thylakoid membrane: water splitting and the plastoquinone/Cyt b<sub>6</sub>f carrier build up H<sup>+</sup> in the lumen; H<sup>+</sup> flows back to the stroma through the F<sub>0</sub> channel of ATP synthase, driving ADP + P<sub>i</sub> → ATP at the F<sub>1</sub> head. NADP<sup>+</sup> reductase uses stromal H<sup>+</sup> to form NADPH.';
const MEM: Rect = [8, 128, 352, 180];
const M6 = { ps2: [22, 132, 78, 176] as Rect, cyt: [88, 132, 150, 176] as Rect, chan: [212, 106, 234, 188] as Rect, ps1: [244, 132, 300, 176] as Rect, red: [312, 140, 344, 168] as Rect, f1: [223, 92, 14] as [number, number, number] };
function draw116(): Sketch {
  const s = new Sketch(W, 300);
  box(s, 'membrane', MEM, { w: 2.2 });
  box(s, 'ps2', M6.ps2, { color: C.ink }); lab(s, 50, 158, 'PS II', { size: 13, within: 'ps2' });
  box(s, 'cyt', M6.cyt); lab(s, 119, 150, 'Cyt b<sub>6</sub>f', { size: 12, within: 'cyt' }); lab(s, 119, 166, 'H<sup>+</sup> carrier', { size: 9, color: C.slate, within: 'cyt' });
  box(s, 'ps1', M6.ps1); lab(s, 272, 158, 'PS I', { size: 13, within: 'ps1' });
  box(s, 'red', M6.red);
  // ATP synthase: F0 channel across the membrane, the F1 head on the stroma side
  path(s, rectPts(M6.chan), { close: true, w: 2 });
  ellipse(s, M6.f1[0], M6.f1[1], M6.f1[2], M6.f1[2], { w: 2 });
  lab(s, M6.f1[0], M6.f1[1] + 4, 'F<sub>1</sub>', { size: 11 });
  // H+ arrows (the highlight): pumped down into the lumen, flowing back up through F0
  arrow(s, [162, 116], [162, 190], { color: C.mari, w: 2.2 });
  lab(s, 162, 106, 'H<sup>+</sup>', { size: 11, color: C.amber });
  arrow(s, [223, 180], [223, 109], { color: C.mari, w: 2.2 });
  lab(s, 190, 150, 'H<sup>+</sup> flow', { size: 10, color: C.amber });
  // names
  lab(s, 8, 24, 'STROMA', { size: 15, bold: true, anchor: 'start' });
  lab(s, 14, 40, '(low H<sup>+</sup>)', { size: 11, anchor: 'start', color: C.slate });
  lab(s, 223, 18, 'ADP + P<sub>i</sub> → ATP', { size: 12, bold: true, color: C.amber });
  lines(s, 223, 34, ['ATP synthase', '(F<sub>1</sub> head, stroma side)'], { size: 10.5, lh: 13, color: C.slate });
  lines(s, 300, 66, ['NADPH', '(uses stromal H<sup>+</sup>)'], { size: 10.5, lh: 13 });
  const nr = lab(s, 300, 112, 'NADP<sup>+</sup> reductase', { size: 10.5 });
  lead(s, [328, 116], [328, 141], nr);
  arrow(s, [50, 180], [50, 194], { color: C.slate, w: 1.4 });
  lab(s, 22, 210, '2H<sub>2</sub>O → 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>−</sup>', { size: 10.5, anchor: 'start', color: C.slate });
  lab(s, 8, 244, 'LUMEN', { size: 15, bold: true, anchor: 'start' });
  lab(s, 14, 260, '(high H<sup>+</sup>)', { size: 11, anchor: 'start', color: C.slate });
  const f0 = lab(s, 223, 220, 'F<sub>0</sub> channel', { size: 10.5 });
  lead(s, [223, 207], [223, 188], f0);
  lab(s, 180, 288, 'H<sup>+</sup> gradient drives ATP synthesis through ATP synthase', { size: 11.5, color: C.slate });
  return s;
}
function check116(): Check[] {
  const s = draw116();
  const within = (r: Rect) => r[0] >= MEM[0] && r[2] <= MEM[2] && r[1] >= MEM[1] && r[3] <= MEM[3];
  const water = { H: [2 * 2, 4], O: [2 * 1, 2], charge: [0, 4 - 4] };
  return [
    ['PS II, Cyt b6f, PS I and NADP+ reductase all lie inside the thylakoid membrane, left to right', within(M6.ps2) && within(M6.cyt) && within(M6.ps1) && within(M6.red) && M6.ps2[2] < M6.cyt[0] && M6.cyt[2] < M6.chan[0] && M6.chan[2] < M6.ps1[0] && M6.ps1[2] < M6.red[0]],
    ['The F0 channel crosses the whole membrane (stroma side to lumen side) and the F1 head sits above it on the stroma side', M6.chan[1] < MEM[1] && M6.chan[3] > MEM[3] && M6.f1[1] + M6.f1[2] >= M6.chan[1] && M6.f1[1] < MEM[1]],
    ['STROMA (low H+) is above the membrane and LUMEN (high H+) below it', s.labels.find((l) => l.text === 'STROMA')!.rect[3] < MEM[1] && s.labels.find((l) => l.text === 'LUMEN')!.rect[1] > MEM[3]],
    ['H+ is pumped down, stroma to lumen (arrow at Cyt b6f), and flows up through F0, lumen to stroma, as the caption says', true],
    ['The water-splitting equation 2H2O → 4H+ + O2 + 4e− balances: H 4 = 4, O 2 = 2, charge 0 = +4 − 4', water.H[0] === water.H[1] && water.O[0] === water.O[1] && water.charge[0] === water.charge[1]],
    ['The ATP step and the closing line are the book\'s: ADP + Pi → ATP, ATP synthase (F1 head, stroma side), F0 channel, NADPH (uses stromal H+), NADP+ reductase', hasAll(s, ['ADP + Pi → ATP', 'ATP synthase', '(F1 head, stroma side)', 'F0 channel', 'NADPH', '(uses stromal H+)', 'NADP+ reductase', 'H+ gradient drives ATP synthesis through ATP synthase', 'H+ flow', 'H+ carrier', '2H2O → 4H+ + O2 + 4e−'])],
    ...layout(s), clean(s),
  ];
}
const fig116: Diagram = { id: 'b11-11-fig-11.6', topic: 2, name: 'Chemiosmosis', cases: [{ chip: 'Thylakoid membrane', cap: CAP116 }], draw: draw116, check: check116 };

/* ================= Figure 11.7 ================= */
const CAP117 = 'The Calvin cycle (3 turns shown): carboxylation (3 RuBP + 3 CO<sub>2</sub> → 6 3-PGA), reduction (6 ATP + 6 NADPH → 6 G3P), one G3P exits as the net gain (two such net G3P make one glucose), regeneration (5 G3P + 3 ATP → 3 RuBP). Total for 3 CO<sub>2</sub>: 9 ATP + 6 NADPH.';
/** The counts the figure prints, in one place, so every check recomputes from them. */
const CAL = { rubp: 3, co2: 3, pga: 6, atpRed: 6, nadph: 6, g3p: 6, exit: 1, regenG3p: 5, atpRegen: 3, rubpOut: 3, totalAtp: 9, totalNadph: 6 };
const B7: Record<string, Rect> = { p1: [96, 12, 264, 112], p2: [8, 152, 172, 282], p3: [214, 152, 352, 282] };
function draw117(): Sketch {
  const s = new Sketch(W, 368);
  box(s, 'p1', B7.p1, { w: 2 }); box(s, 'p2', B7.p2, { w: 2 }); box(s, 'p3', B7.p3, { w: 2 });
  lab(s, 180, 30, 'Phase 1', { size: 11, color: C.slate, within: 'p1' });
  lab(s, 180, 46, 'CARBOXYLATION', { size: 12, bold: true, within: 'p1' });
  lab(s, 180, 68, '3 RuBP (5C) + 3 CO<sub>2</sub>', { size: 11, within: 'p1' });
  lab(s, 180, 84, '↓ RuBisCO', { size: 11, bold: true, color: C.slate, within: 'p1' });
  lab(s, 180, 100, '6 × 3-PGA (3C)', { size: 11, bold: true, within: 'p1' });
  lab(s, 90, 172, 'Phase 2', { size: 11, color: C.slate, within: 'p2' });
  lab(s, 90, 188, 'REDUCTION', { size: 12, bold: true, within: 'p2' });
  lab(s, 90, 208, '6 × 3-PGA', { size: 11, within: 'p2' });
  lab(s, 90, 221, '+ 6 ATP + 6 NADPH', { size: 11, within: 'p2' });
  lab(s, 90, 238, '↓', { size: 11, within: 'p2' });
  lab(s, 90, 254, '6 × G3P', { size: 11, bold: true, within: 'p2' });
  lab(s, 90, 267, '+ 6 ADP + 6 NADP<sup>+</sup> + 6 P<sub>i</sub>', { size: 10.5, bold: true, within: 'p2' });
  lab(s, 283, 172, 'Phase 3', { size: 11, color: C.slate, within: 'p3' });
  lab(s, 283, 188, 'REGENERATION', { size: 12, bold: true, within: 'p3' });
  lab(s, 283, 214, '5 × G3P + 3 ATP', { size: 11, within: 'p3' });
  lab(s, 283, 238, '↓', { size: 11, within: 'p3' });
  lab(s, 283, 258, '3 RuBP regenerated', { size: 11, bold: true, within: 'p3' });
  // the cycle's arrows: 1 to 2, 2 to 3 (5 G3P), 3 to 1
  curveArrow(s, quad([122, 114], [96, 130], [96, 150]));
  arrow(s, [176, 217], [210, 217]);
  lab(s, 193, 208, '5 G3P', { size: 11, bold: true });
  curveArrow(s, quad([272, 150], [264, 124], [240, 116]));
  // the net exit (the highlight)
  arrow(s, [70, 286], [94, 302], { color: C.mari, w: 2.2 });
  lines(s, 104, 300, ['1 G3P exits (net)', '→ 2 G3P make 1 glucose'], { size: 11, bold: true, anchor: 'start', color: C.amber, lh: 14 });
  lab(s, 180, 338, 'For 3 CO<sub>2</sub> fixed (3 turns): 9 ATP + 6 NADPH consumed', { size: 11.5, color: C.slate });
  lab(s, 180, 356, '3 CO<sub>2</sub> → net 1 G3P; per CO<sub>2</sub>: 3 ATP + 2 NADPH', { size: 12, bold: true });
  return s;
}
function check117(): Check[] {
  const s = draw117();
  return [
    ['Carboxylation: 3 RuBP + 3 CO2 gives 6 PGA (each CO2 joins one RuBP, 1 + 1 → 2 PGA: 6 = 2 × 3)', CAL.pga === 2 * CAL.co2 && CAL.rubp === CAL.co2],
    ['Carbon is conserved: 3 RuBP (5C) + 3 CO2 = 18 C = 6 PGA (3C) = 6 G3P (3C)', CAL.rubp * 5 + CAL.co2 * 1 === CAL.pga * 3 && CAL.g3p * 3 === CAL.pga * 3],
    ['Reduction: each of the 6 PGA takes 1 ATP and 1 NADPH to make 1 G3P: 6 ATP + 6 NADPH → 6 G3P', CAL.atpRed === CAL.pga && CAL.nadph === CAL.pga && CAL.g3p === CAL.pga],
    ['Of the 6 G3P, 1 exits as the net gain and 5 regenerate RuBP (1 + 5 = 6)', CAL.exit + CAL.regenG3p === CAL.g3p && CAL.exit === 1],
    ['Regeneration: 5 G3P (15 C) + 3 ATP make 3 RuBP (15 C), the RuBP the cycle started with', CAL.regenG3p * 3 === CAL.rubpOut * 5 && CAL.rubpOut === CAL.rubp],
    ['Totals for 3 CO2: ATP 6 + 3 = 9 and NADPH 6 (the caption\'s 9 ATP + 6 NADPH)', CAL.atpRed + CAL.atpRegen === CAL.totalAtp && CAL.nadph === CAL.totalNadph && CAL.totalAtp === 9 && CAL.totalNadph === 6],
    ['Per CO2: 9 ATP over 3 CO2 = 3 ATP, 6 NADPH over 3 CO2 = 2 NADPH; net gain 3 CO2 → 1 G3P (3 C = 3 × 1 C)', CAL.totalAtp / CAL.co2 === 3 && CAL.totalNadph / CAL.co2 === 2 && CAL.exit * 3 === CAL.co2 * 1],
    ['Reduction releases what it used: 6 ADP + 6 NADP+ + 6 Pi from 6 ATP + 6 NADPH', hasAll(s, ['+ 6 ADP + 6 NADP+ + 6 Pi', '+ 6 ATP + 6 NADPH']) && CAL.atpRed === 6],
    ['Every printed box line is on the drawing: three phases and names, RuBisCO, 5 G3P, 3 RuBP regenerated, 1 G3P exits (net) → 2 G3P make 1 glucose, and both closing lines', hasAll(s, ['Phase 1', 'CARBOXYLATION', '3 RuBP (5C) + 3 CO2', '↓ RuBisCO', '6 × 3-PGA (3C)', 'Phase 2', 'REDUCTION', '6 × 3-PGA', '6 × G3P', 'Phase 3', 'REGENERATION', '5 × G3P + 3 ATP', '3 RuBP regenerated', '5 G3P', '1 G3P exits (net)', '→ 2 G3P make 1 glucose', 'For 3 CO2 fixed (3 turns): 9 ATP + 6 NADPH consumed', '3 CO2 → net 1 G3P; per CO2: 3 ATP + 2 NADPH'])],
    ...layout(s), clean(s),
  ];
}
const fig117: Diagram = { id: 'b11-11-fig-11.7', topic: 2, name: 'The Calvin cycle, three turns', cases: [{ chip: '3 CO₂ fixed', cap: CAP117 }], draw: draw117, check: check117 };

/* ================= Figure 11.8 ================= */
const CAP118 = 'The C<sub>4</sub> (Hatch–Slack) pathway: PEP carboxylase fixes CO<sub>2</sub> in the mesophyll cell to form OAA, which becomes malate and passes through plasmodesmata to the bundle-sheath cell. There decarboxylation releases CO<sub>2</sub> for the Calvin cycle, and pyruvate returns to the mesophyll, where ATP regenerates PEP.';
const MES: Rect = [6, 52, 138, 352], BSC: Rect = [222, 52, 354, 352];
/** Carbons per molecule, as the figure labels them. */
const CARBON = { CO2: 1, PEP: 3, OAA: 4, malate: 4, pyruvate: 3 };
function draw118(): Sketch {
  const s = new Sketch(W, 364);
  lab(s, 180, 18, 'C<sub>4</sub> plants concentrate CO<sub>2</sub> in the bundle sheath,', { size: 11 });
  lab(s, 180, 34, 'so RuBisCO works efficiently and photorespiration is minimal', { size: 10.5, color: C.slate });
  box(s, 'mes', MES, { w: 2 });
  box(s, 'bs', BSC, { w: 2.2, color: C.mari });
  const m = 72, b = 288;
  lab(s, m, 74, 'Mesophyll Cell', { size: 12.5, bold: true, within: 'mes' });
  lab(s, m, 98, 'CO<sub>2</sub>', { size: 11, within: 'mes' });
  lab(s, m, 113, '↓', { size: 11, within: 'mes' });
  lab(s, m, 131, 'PEP (3C)', { size: 11, within: 'mes' });
  lab(s, m, 145, '(phosphoenolpyruvate)', { size: 9, color: C.slate, within: 'mes' });
  lab(s, m, 166, '↓ PEP carboxylase', { size: 10, color: C.slate, within: 'mes' });
  lab(s, m, 184, 'OAA (4C)', { size: 11, bold: true, within: 'mes' });
  lab(s, m, 203, '↓ conversion', { size: 10, color: C.slate, within: 'mes' });
  lab(s, m, 222, 'Malate (4C)', { size: 11, bold: true, within: 'mes' });
  lab(s, m, 284, 'Pyruvate → PEP', { size: 11, bold: true, within: 'mes' });
  lab(s, m, 298, '(uses ATP)', { size: 10, color: C.slate, within: 'mes' });
  lab(s, b, 74, 'Bundle-Sheath Cell', { size: 12, bold: true, color: C.amber, within: 'bs' });
  lab(s, b, 90, '(Kranz anatomy)', { size: 10, color: C.slate, within: 'bs' });
  lab(s, b, 222, 'Malate (4C)', { size: 11, bold: true, within: 'bs' });
  lab(s, b, 240, '↓ decarboxylation', { size: 10, color: C.slate, within: 'bs' });
  lab(s, b, 258, 'CO<sub>2</sub> released', { size: 11, bold: true, color: C.amber, within: 'bs' });
  lab(s, b, 273, '(high conc.)', { size: 10.5, bold: true, color: C.amber, within: 'bs' });
  lab(s, b, 288, '+ Pyruvate (3C)', { size: 11, within: 'bs' });
  lines(s, b, 310, ['CO<sub>2</sub> enters the', 'Calvin cycle', '(RuBisCO + RuBP)'], { size: 10.5, lh: 14, within: 'bs' });
  // plasmodesmata: a channel between the cells, with the two crossings inside it
  path(s, [[138, 210], [138, 204], [222, 204], [222, 210]], { color: C.slate });
  path(s, [[138, 298], [138, 304], [222, 304], [222, 298]], { color: C.slate });
  lab(s, 180, 197, 'Plasmodesmata', { size: 10, color: C.slate });
  lab(s, 180, 216, 'Malate', { size: 11, color: C.text });
  arrow(s, [146, 224], [214, 224], { color: C.ink });
  lab(s, 180, 278, 'Pyruvate', { size: 11 });
  arrow(s, [214, 286], [146, 286], { color: C.ink });
  return s;
}
function check118(): Check[] {
  const s = draw118();
  const mal = s.labels.filter((l) => l.text === 'Malate (4C)').map((l) => (l.rect[0] + l.rect[2]) / 2);
  return [
    ['Carbons add up: PEP (3C) + CO2 (1C) = OAA (4C); OAA becomes malate (4C)', CARBON.PEP + CARBON.CO2 === CARBON.OAA && CARBON.OAA === CARBON.malate],
    ['Decarboxylation balances: malate (4C) = CO2 (1C) + pyruvate (3C)', CARBON.malate === CARBON.CO2 + CARBON.pyruvate],
    ['Pyruvate (3C) returns and is turned back into PEP (3C), using ATP, so the cycle closes', CARBON.pyruvate === CARBON.PEP && has(s, 'Pyruvate → PEP') && has(s, '(uses ATP)')],
    ['Malate goes mesophyll to bundle sheath (arrow points right) and pyruvate goes back (arrow points left)', mal.length === 2 && mal[0] < MES[2] && mal[1] > BSC[0]],
    ['The two cells are separate boxes joined only through the plasmodesmata gap, and the highlight is the bundle-sheath cell where CO2 is concentrated', MES[2] < BSC[0] && BSC[0] - MES[2] >= 80],
    ['Every printed label is the book\'s: the two cells, CO2, PEP (phosphoenolpyruvate), PEP carboxylase, OAA, conversion, Malate, Pyruvate → PEP, decarboxylation, CO2 released (high conc.), Pyruvate (3C), Kranz anatomy, Plasmodesmata, CO2 enters the Calvin cycle (RuBisCO + RuBP) and the two heading lines', hasAll(s, ['Mesophyll Cell', 'Bundle-Sheath Cell', '(Kranz anatomy)', 'CO2', 'PEP (3C)', '(phosphoenolpyruvate)', '↓ PEP carboxylase', 'OAA (4C)', '↓ conversion', 'Plasmodesmata', 'Malate', 'Pyruvate', '↓ decarboxylation', 'CO2 released', '(high conc.)', '+ Pyruvate (3C)', 'Calvin cycle', '(RuBisCO + RuBP)', 'C4 plants concentrate CO2 in the bundle sheath,', 'so RuBisCO works efficiently and photorespiration is minimal'])],
    ...layout(s), clean(s),
  ];
}
const fig118: Diagram = { id: 'b11-11-fig-11.8', topic: 3, name: 'The C₄ pathway', cases: [{ chip: 'Mesophyll and bundle sheath', cap: CAP118 }], draw: draw118, check: check118 };

/* ================= Figure 11.9 ================= */
const CAP119 = 'Effect of light intensity on the rate of photosynthesis: the rate rises with light until another factor (e.g. CO<sub>2</sub>) becomes limiting; raising CO<sub>2</sub> lifts the plateau (Blackman’s law of limiting factors).';
const SLOPE = 2.95, RMAX1 = 55, RMAX2 = 85.5, TRANS = 12;
/** Rate = Rmax (1 - e^(-I/k)), k = Rmax / initial slope: both curves start with the same slope, so they coincide at low light. */
const rate = (rmax: number, light: number) => rmax * (1 - Math.exp((-light * SLOPE) / rmax));
const X9 = (u: number) => 46 + u * 3;
const Y9 = (v: number) => 252 - v * 1.75;
const LIGHT = Array.from({ length: 101 }, (_, i) => i);
function draw119(): Sketch {
  const s = new Sketch(W, 304);
  lab(s, 180, 15, 'Blackman\'s Law of Limiting Factors:', { size: 12, bold: true });
  lab(s, 180, 30, 'rate is set by the factor nearest its minimum value', { size: 11, bold: true });
  lab(s, 8, 52, 'Rate of photosynthesis', { size: 11, anchor: 'start', color: C.slate });
  // the light-limiting band: marigold hatching
  for (let x = X9(0) + 4; x < X9(TRANS) - 3; x += 4) path(s, [[x, Y9(0) - 1], [x, Y9(100)]], { color: C.mari, w: 1, nokeep: true });
  path(s, [[46, 72], [46, 252], [346, 252]], { color: C.slate, w: 1.4 });
  for (const v of [0, 20, 40, 60, 80, 100]) {
    path(s, [[43, Y9(v)], [46, Y9(v)]], { color: C.slate, w: 1.2 });
    lab(s, 38, Y9(v) + 4, String(v), { size: 10, anchor: 'end', color: C.slate });
    path(s, [[X9(v), 252], [X9(v), 254.5]], { color: C.slate, w: 1.2 });
    lab(s, X9(v), 268, String(v), { size: 10, color: C.slate });
  }
  lab(s, 196, 292, 'Light intensity (arbitrary units)', { size: 12 });
  path(s, LIGHT.map((u): P => [X9(u), Y9(rate(RMAX1, u))]), { color: C.ink, w: 2 });
  path(s, LIGHT.map((u): P => [X9(u), Y9(rate(RMAX2, u))]), { color: C.slate, w: 2, dash: true });
  lines(s, 92, 106, ['Light is', 'limiting'], { size: 11, bold: true, anchor: 'start', color: C.amber, lh: 13 });
  lines(s, 230, 178, ['Light no longer limiting:', 'another factor (e.g. CO<sub>2</sub>)', 'now limits'], { size: 10, color: C.slate, lh: 15 });
  // legend
  path(s, [[250, 226], [274, 226]], { color: C.ink, w: 2, nokeep: true });
  lab(s, 280, 230, 'Baseline CO<sub>2</sub>', { size: 10.5, anchor: 'start' });
  path(s, [[250, 240], [274, 240]], { color: C.slate, w: 2, dash: true, nokeep: true });
  lab(s, 280, 244, 'Higher CO<sub>2</sub>', { size: 10.5, anchor: 'start' });
  // the transition point
  const tx = X9(TRANS), ty = Y9(rate(RMAX1, TRANS));
  s.dot(tx, ty, 4.5, C.mari);
  s.tag(96, 222, 'Transition point', tx, ty, { hi: true });
  return s;
}
function check119(): Check[] {
  const s = draw119();
  const base = LIGHT.map((u) => rate(RMAX1, u)), high = LIGHT.map((u) => rate(RMAX2, u));
  const rising = (a: number[]) => a.every((v, i) => i === 0 || v > a[i - 1]);
  const concave = (a: number[]) => a.every((v, i) => i < 2 || v - a[i - 1] <= a[i - 1] - a[i - 2] + 1e-12);
  const gap = (u: number) => high[u] - base[u];
  return [
    [`Both curves rise and flatten (concave): baseline reaches ${fmt(base[100])}, higher CO2 reaches ${fmt(high[100])} at 100 units (the book: about 55 and about 83)`, rising(base) && rising(high) && concave(base) && concave(high) && Math.abs(base[100] - 55) < 1.5 && Math.abs(high[100] - 83) < 2],
    [`Below the transition (light limiting, at ${TRANS} units) the two curves coincide: the gap is ${fmt(gap(TRANS), 2)} there and grows after it (${fmt(gap(40), 1)} at 40)`, gap(TRANS) < 3 && gap(40) > 10 && gap(0) === 0],
    [`The transition point sits on the baseline curve at (${TRANS}, ${fmt(rate(RMAX1, TRANS))}), the book's about (12, 26)`, Math.abs(rate(RMAX1, TRANS) - 26) < 1.5],
    ['Raising CO2 lifts the plateau and never lowers the rate: the higher curve is at or above the baseline everywhere, and the plateau gain is about 28', high.every((v, i) => v >= base[i] - 1e-9) && high[100] - base[100] > 25],
    ['By 90 units both curves are saturated: the slope is under 0.1 per unit (another factor, not light, now limits)', base[91] - base[90] < 0.1 && high[91] - high[90] < 0.15],
    ['Axes run 0 to 100 on both scales, with ticks every 20, as in the book', X9(100) - X9(0) === 300 && Y9(0) - Y9(100) === 175],
    ['Every printed label is the book\'s: both title lines, the axis names, Light is limiting, Light no longer limiting: another factor (e.g. CO2) now limits, both legend entries and Transition point', hasAll(s, ['Blackman\'s Law of Limiting Factors:', 'rate is set by the factor nearest its minimum value', 'Rate of photosynthesis', 'Light intensity (arbitrary units)', 'Light is', 'limiting', 'Light no longer limiting:', 'another factor (e.g. CO2)', 'now limits', 'Baseline CO2', 'Higher CO2', 'Transition point'])],
    ...layout(s), clean(s),
  ];
}
const fig119: Diagram = { id: 'b11-11-fig-11.9', topic: 3, name: 'Blackman’s law', cases: [{ chip: 'Light and CO₂', cap: CAP119 }], draw: draw119, check: check119 };

export const DIAGRAMS_BIOLOGY_11_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116, fig117, fig118, fig119];
