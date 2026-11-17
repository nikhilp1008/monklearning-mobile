import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 12, CHAPTER 11 (Organisms and Populations): the drawings of the Master Reference book on pp. 600-655, redrawn.
 * The captions are printed on the page before the drawing ("see next page"); the drawings sit on "CHAPTER 11 . FIGURES"
 * pages: pp. 605, 613, 618, 621 (two figures) and 629. Every vector shape of those pages was read with PyMuPDF
 * (get_drawings), and the rest of the chapter holds text, tables and page rules only. SIX drawings:
 *
 *   Figure 11.1 (drawing p. 605), Topic 01, topic index 0: range of tolerance, stenothermal against eurythermal.
 *   Figure 11.2 (drawing p. 613), Topic 02, topic index 1: the four responses to stress and the three types of adaptation.
 *   Figure 11.3 (drawing p. 618), Topic 03, topic index 2: age pyramids (expanding, stable, declining).
 *   Figure 11.4 (drawing p. 621), Topic 03, topic index 2: exponential (J) against logistic (S) growth.
 *   Figure 11.5 (drawing p. 621), Topic 03, topic index 2: phases of logistic growth, growth rate greatest at K/2.
 *   Figure 11.6 (drawing p. 629), Topic 04, topic index 3: the six interspecific interactions.
 *
 * THE BOOK'S, as printed: every word of every label, title and note; in 11.1 the five zones (Zone of Intolerance, Zone of
 * Physiological Stress, Optimum Zone, Zone of Physiological Stress, Zone of Intolerance) at 0-20-40-60-80-100, the axis
 * ticks 0.0 to 1.0 and 0 to 100, both curves peaking at 1.0 at 50, and the note that the zones are marked for the narrow
 * curve; in 11.2 the four responses with their descriptions and the three adaptation types with their examples; in 11.3
 * the bar widths (read from the page: expanding 70.0 / 46.7 / 23.3, stable 46.7 / 48.6 / 35.0, declining 23.3 / 48.6 / 38.9
 * pt, bottom / middle / top) and the three growth words; in 11.4 and 11.5 the axes (0 to 12, 0 to 100), N0 = 5, K = 100, both
 * equations, the five labelled phases and the square at N = K/2; in 11.6 the six interactions with their (+, -, 0) effects,
 * descriptions and example pairs (bee and flower, species A and B, predator and prey, tick and dog, orchid and tree, mould
 * and microbe).
 * COMPUTED, not placed: the 11.4 curves are N = 5 e^(0.5 t) (exponential) and N = K / (1 + 19 e^(-0.5 t)) (logistic, K = 100,
 * N0 = 5), which reproduce the book's curve (the exponential reaches 107 at t = 6.13, the logistic 95.5 at t = 12 and 50 at
 * t = ln 19 / 0.5 = 5.89); the 11.5 dots lie on that logistic curve at t = 0.8, 3, 5.89 and 8; the 11.1 curves are Gaussians
 * (sigma 24 broad, 9.9 narrow, both centred on 50 and shifted to zero at 0 and 100) fitted to the book's points (broad 0.41
 * at 20, 0.90 at 40; narrow 0.60 at 40 and 60).
 * SCHEMATIC: all sizes and positions (re-laid for a phone: the 11.2 diagonal becomes a hub with four boxes, the 11.6 grid is
 * two columns by three rows, the 11.4 legend sits under the plot, the two curve names of 11.1 are a key under the plot, the
 * 11.3 bars are drawn at the book's own widths); the "dN/dt" and "(K - N)/K" of the equations are set as stacked fractions
 * (the house rule); the amensalism bracket is drawn as the book draws it. Colours are the app's style (no fills; one marigold
 * highlight per drawing), not the book's: the stenothermal curve (11.1), the stressed organism (11.2), the pre-reproductive
 * bars (11.3), the logistic curve (11.4), the K/2 square (11.5), the effect pairs (11.6). The book's green, brown and blue
 * carry no extra meaning: every name is in its label.
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
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"/>`);
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
type Item = string | { n: string; d: string };
/** A run of text and stacked fractions on one baseline (the house rule: a fraction is stacked, never a slash). */
function run(s: Sketch, x: number, y: number, items: Item[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}): Rect {
  const size = o.size ?? 11, fs = size * 0.92, bold = o.bold ? 1.08 : 1, anchor = o.anchor ?? 'start', GAP = 3;
  const ws = items.map((it) => (typeof it === 'string' ? wOf(it, size) * bold : Math.max(wOf(it.n, fs), wOf(it.d, fs)) * bold + 6));
  const total = ws.reduce((a, b) => a + b, 0) + GAP * (items.length - 1);
  let cx = anchor === 'middle' ? x - total / 2 : anchor === 'end' ? x - total : x;
  const x0 = cx;
  items.forEach((it, i) => {
    if (typeof it === 'string') lab(s, cx, y, it, { size, anchor: 'start', color: o.color, bold: o.bold });
    else {
      lab(s, cx + ws[i] / 2, y - 6.5, it.n, { size: fs, anchor: 'middle', color: o.color, bold: o.bold });
      lab(s, cx + ws[i] / 2, y + 8.5, it.d, { size: fs, anchor: 'middle', color: o.color, bold: o.bold });
      s.add(`<line x1="${r1(cx + 1)}" y1="${r1(y - 3.2)}" x2="${r1(cx + ws[i] - 1)}" y2="${r1(y - 3.2)}" stroke="${o.color ?? C.text}" stroke-width="1.1"/>`);
    }
    cx += ws[i] + GAP;
  });
  return [x0, y - size * 0.72 - 7, x0 + total, y + size * 0.22 + 9];
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
  const spill = (BOXES.get(s) ?? []).flatMap((b) => b.inner.filter((r) => r[0] < b.rect[0] + 4 || r[2] > b.rect[2] - 4 || r[1] < b.rect[1] + 4 || r[3] > b.rect[3] - 4).map(() => b.name));
  return [
    [`Every label stays ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${r1(gap)} px`, gap >= LABEL_GAP],
    [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0],
    [`No two labels touch${touch.length ? `: ${touch.join(', ')}` : ''}`, touch.length === 0],
    [`Every label lies inside its box${spill.length ? `: not in ${spill.join(', ')}` : ''}`, spill.length === 0],
  ];
}
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const count = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t).length;
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };
const mari = (s: Sketch) => (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
/** An arrow from a to b that stops short of b by `back` px; both ends are tracked as lines. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; back?: number } = {}) {
  const d = len(a, b), k = (d - (o.back ?? 0)) / d, e: P = [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
  s.vec(a[0], a[1], e[0], e[1], { color: o.color ?? C.ink, w: o.w ?? 1.8 });
  keep(s, [a, e]);
  return e;
}
const grid = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.grey, w: 0.8, dash: '1.5 3.5', track: false });

/* ================= Figure 11.1 ================= */
const CAP111 = 'Range of tolerance: performance/abundance versus the value of an abiotic factor (e.g., temperature). The stenothermal species has a narrow curve and the eurythermal species a broad one.';
const SIG_BROAD = 24, SIG_NARROW = 9.9;
/** A Gaussian centred on 50, shifted so that it is exactly 0 at 0 and 100 (the book's curves meet the axis at both ends). */
const bell = (v: number, sig: number) => { const e0 = Math.exp(-2500 / (2 * sig * sig)); return Math.max(0, (Math.exp(-((v - 50) ** 2) / (2 * sig * sig)) - e0) / (1 - e0)); };
const X1 = (v: number) => 50 + 3 * v, Y1 = (p: number) => 300 - 190 * p;
const curve1 = (sig: number): P[] => Array.from({ length: 101 }, (_, i): P => [X1(i), Y1(bell(i, sig))]);
const ZONES: string[][] = [['Zone of', 'Intolerance'], ['Zone of', 'Physiological', 'Stress'], ['Optimum', 'Zone'], ['Zone of', 'Physiological', 'Stress'], ['Zone of', 'Intolerance']];
function draw111(): Sketch {
  const s = new Sketch(W, 424);
  lab(s, 8, 16, 'Performance / Abundance', { size: 10.5, anchor: 'start', color: C.slate });
  // axes and ticks
  path(s, [[42, 70], [42, Y1(0)], [X1(100) + 8, Y1(0)]], { color: C.slate, w: 1.4 });
  for (let k = 0; k <= 5; k++) {
    const p = k / 5;
    path(s, [[39, Y1(p)], [42, Y1(p)]], { color: C.slate, w: 1.2 });
    lab(s, 33, Y1(p) + 3.5, p.toFixed(1), { size: 9.5, anchor: 'end', color: C.slate });
    if (k > 0) grid(s, [42, Y1(p)], [X1(100) + 8, Y1(p)]);
  }
  for (let v = 0; v <= 100; v += 20) {
    path(s, [[X1(v), Y1(0)], [X1(v), Y1(0) + 3]], { color: C.slate, w: 1.2 });
    lab(s, X1(v), Y1(0) + 15, String(v), { size: 9.5, color: C.slate });
    grid(s, [X1(v), 66], [X1(v), Y1(0)]);
  }
  lab(s, (X1(0) + X1(100)) / 2, Y1(0) + 34, 'Value of Abiotic Factor (e.g., Temperature °C)', { size: 10.5, color: C.slate });
  // the five zones, named across the top
  ZONES.forEach((z, i) => z.forEach((t, j) => lab(s, (X1(i * 20) + X1(i * 20 + 20)) / 2, 36 + j * 11, t, { size: 9, color: i === 2 ? C.amber : C.slate })));
  path(s, [[X1(50), Y1(1) - 4], [X1(50), 70]], { color: C.slate, w: 1.2, dash: '3 3', track: false });
  // the curves: the broad one in ink, the narrow one (the zones are marked for it) in the highlight
  path(s, curve1(SIG_BROAD), { color: C.ink, w: 1.9 });
  path(s, curve1(SIG_NARROW), { color: C.mari, w: 2.6 });
  // the key: each curve's name, in its own stroke
  const ky = Y1(0) + 62;
  path(s, [[56, ky - 4], [84, ky - 4]], { color: C.ink, w: 1.9 });
  run(s, 92, ky, ['Eurythermal (broad)'], { size: 11, bold: true });
  path(s, [[56, ky + 22], [84, ky + 22]], { color: C.mari, w: 2.6 });
  run(s, 92, ky + 26, ['Stenothermal (narrow)'], { size: 11, bold: true, color: C.amber });
  lab(s, (X1(0) + X1(100)) / 2, ky + 54, '<i>Zones are marked for the stenothermal (narrow) curve.</i>', { size: 10, color: C.slate });
  return s;
}
function check111(): Check[] {
  const s = draw111();
  const vs = Array.from({ length: 101 }, (_, i) => i);
  const fwhm = (sig: number) => vs.filter((v) => bell(v, sig) >= 0.5).length - 1;
  return [
    ['Both curves peak at 1.0, at 50, and are exactly 0 at 0 and 100', Math.abs(bell(50, SIG_BROAD) - 1) < 1e-9 && Math.abs(bell(50, SIG_NARROW) - 1) < 1e-9 && bell(0, SIG_BROAD) === 0 && bell(100, SIG_NARROW) === 0 && vs.every((v) => bell(v, SIG_BROAD) <= 1)],
    ['Each curve is symmetric about 50 (the book draws both as bells)', vs.slice(0, 50).every((v) => Math.abs(bell(v, SIG_BROAD) - bell(100 - v, SIG_BROAD)) < 1e-9 && Math.abs(bell(v, SIG_NARROW) - bell(100 - v, SIG_NARROW)) < 1e-9)],
    ['The stenothermal curve is the narrow one: its half-height width is under half the eurythermal one, and it lies inside the broad curve everywhere', fwhm(SIG_NARROW) * 2 < fwhm(SIG_BROAD) && vs.every((v) => bell(v, SIG_NARROW) <= bell(v, SIG_BROAD) + 1e-9)],
    ['The fit follows the book: broad curve about 0.41 at 20 and 0.9 at 40, narrow curve about 0.6 at 40 and at 60', Math.abs(bell(20, SIG_BROAD) - 0.41) < 0.04 && Math.abs(bell(40, SIG_BROAD) - 0.9) < 0.03 && Math.abs(bell(40, SIG_NARROW) - 0.6) < 0.03 && Math.abs(bell(60, SIG_NARROW) - 0.6) < 0.03],
    ['Five zones in the book\'s order across 0 to 100 (20 wide each): intolerance, physiological stress, optimum, physiological stress, intolerance; the optimum zone is the middle one (40 to 60)', ZONES.map((z) => z.join(' ')).join('|') === 'Zone of Intolerance|Zone of Physiological Stress|Optimum Zone|Zone of Physiological Stress|Zone of Intolerance' && count(s, 'Intolerance') === 2 && count(s, 'Physiological') === 2 && count(s, 'Optimum') === 1],
    ['Both axes are named as the book names them, with the ticks 0.0 to 1.0 and 0 to 100', has(s, 'Performance / Abundance') && has(s, 'Value of Abiotic Factor (e.g., Temperature °C)') && ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0', '0', '20', '40', '60', '80', '100'].every((t) => has(s, t))],
    ['Both curve names and the note about the zones are on the drawing; only the stenothermal curve (the one the zones are marked for) is in the highlight', has(s, 'Eurythermal (broad)') && has(s, 'Stenothermal (narrow)') && has(s, 'Zones are marked for the stenothermal (narrow) curve.') && mari(s) === 2],
    ...layout(s), clean(s),
  ];
}
const fig111: Diagram = { id: 'b12-11-fig-11.1', topic: 0, name: 'Range of tolerance', cases: [{ chip: 'Range of tolerance', cap: CAP111 }], draw: draw111, check: check111 };

/* ================= Figure 11.2 ================= */
const CAP112 = 'Organism responses to abiotic stress (regulate, conform, migrate, suspend) and the three types of adaptation (morphological, physiological, behavioural).';
const RESP: { name: string; d: [string, string]; x: number; y: number }[] = [
  { name: 'Regulate', d: ['Thermostat dial', 'holding steady'], x: 14, y: 38 },
  { name: 'Conform', d: ['Internal state follows', 'external conditions'], x: 210, y: 38 },
  { name: 'Migrate', d: ['Move to favourable', 'habitat'], x: 14, y: 254 },
  { name: 'Suspend', d: ['Dormancy / reduced', 'metabolism'], x: 210, y: 254 },
];
const RW = 136, RH = 60, HUB: P = [180, 176], HR = 42;
const ADAPT: [string, string][] = [['Morphological', '(Spiny cactus)'], ['Physiological', '(Kangaroo rat)'], ['Behavioural', '(Lizard basking)']];
/** The arrow of a response: from the hub's ring toward the box's near corner. */
function respArrow(r: (typeof RESP)[number]): { from: P; tip: P } {
  const cx = r.x < 100 ? r.x + RW + 4 : r.x - 4, cy = r.y < 100 ? r.y + RH + 4 : r.y - 4, tip: P = [cx, cy];
  const d = len(HUB, tip), k = (HR + 4) / d;
  return { from: [HUB[0] + (tip[0] - HUB[0]) * k, HUB[1] + (tip[1] - HUB[1]) * k], tip };
}
function draw112(): Sketch {
  const s = new Sketch(W, 420);
  lab(s, 180, 22, 'Organism Responses to Stress', { size: 14, bold: true });
  RESP.forEach((r) => {
    const name = r.name;
    box(s, name, [r.x, r.y, r.x + RW, r.y + RH]);
    lab(s, r.x + RW / 2, r.y + 22, name, { size: 13, bold: true, within: name });
    lab(s, r.x + RW / 2, r.y + 38, r.d[0], { size: 10.5, color: C.slate, within: name });
    lab(s, r.x + RW / 2, r.y + 51, r.d[1], { size: 10.5, color: C.slate, within: name });
    const a = respArrow(r);
    s.vec(a.from[0], a.from[1], a.tip[0], a.tip[1], { color: C.ink, w: 1.8 });
    keep(s, [a.from, a.tip]);
  });
  ell(s, HUB[0], HUB[1], HR, HR, { color: C.mari, w: 2.4 });
  lab(s, HUB[0], HUB[1] - 4, '!', { size: 26, bold: true, color: C.amber });
  lab(s, HUB[0], HUB[1] + 14, 'Stressed', { size: 11 });
  lab(s, HUB[0], HUB[1] + 27, 'Organism', { size: 11 });
  lab(s, 180, 352, 'Three types of adaptation', { size: 13, bold: true });
  path(s, [[14, 364], [346, 364]], { color: C.grey, w: 1.2 });
  ADAPT.forEach(([a, b], i) => {
    const x = 62 + i * 118;
    lab(s, x, 388, a, { size: 12, bold: true, color: C.slate });
    lab(s, x, 405, b, { size: 10, color: C.slate });
  });
  return s;
}
function check112(): Check[] {
  const s = draw112();
  return [
    ['Four responses, in the book\'s names and words: Regulate (thermostat dial holding steady), Conform (internal state follows external conditions), Migrate (move to favourable habitat), Suspend (dormancy / reduced metabolism)', RESP.map((r) => r.name).join() === 'Regulate,Conform,Migrate,Suspend' && RESP.every((r) => has(s, r.name) && has(s, r.d[0]) && has(s, r.d[1]))],
    ['The stressed organism is the hub: one arrow leaves its ring toward each of the four boxes, ending within 8 px of the box', RESP.every((r) => { const a = respArrow(r); return Math.abs(len(HUB, a.from) - (HR + 4)) < 1e-6 && rectDist([r.x, r.y, r.x + RW, r.y + RH], a.tip) < 8; })],
    ['The four boxes sit at the four corners around the hub, two above it and two below', RESP.filter((r) => r.y + RH < HUB[1]).length === 2 && RESP.filter((r) => r.y > HUB[1]).length === 2 && RESP.filter((r) => r.x < HUB[0]).length === 2],
    ['Three types of adaptation with the book\'s examples: Morphological (Spiny cactus), Physiological (Kangaroo rat), Behavioural (Lizard basking)', ADAPT.map((a) => a.join(' ')).join('|') === 'Morphological (Spiny cactus)|Physiological (Kangaroo rat)|Behavioural (Lizard basking)' && ADAPT.every(([a, b]) => has(s, a) && has(s, b))],
    ['The titles are the book\'s: "Organism Responses to Stress", "Stressed Organism", "Three types of adaptation"; only the hub is in the highlight', has(s, 'Organism Responses to Stress') && has(s, 'Stressed') && has(s, 'Organism') && has(s, 'Three types of adaptation') && mari(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig112: Diagram = { id: 'b12-11-fig-11.2', topic: 1, name: 'Responses to abiotic stress and adaptations', cases: [{ chip: 'Responses and adaptations', cap: CAP112 }], draw: draw112, check: check112 };

/* ================= Figure 11.3 ================= */
const CAP113 = 'Age pyramids: (a) expanding, (b) stable and (c) declining populations. In each, the bars are pre-reproductive (bottom), reproductive (middle) and post-reproductive (top).';
/** The book's bar widths in pt, bottom (pre-reproductive), middle (reproductive), top (post-reproductive). */
const PYR: { tag: string; name: string; growth: string; w: [number, number, number]; cx: number }[] = [
  { tag: '(a)', name: 'Expanding', growth: 'Rapid growth', w: [70, 46.7, 23.3], cx: 150 },
  { tag: '(b)', name: 'Stable', growth: 'Zero growth', w: [46.7, 48.6, 35], cx: 232 },
  { tag: '(c)', name: 'Declining', growth: 'Negative growth', w: [23.3, 48.6, 38.9], cx: 312 },
];
const BAR_H = 25.1, BAR_STEP = 29.2, PRE_TOP = 188;
const barTop = (row: number) => PRE_TOP - row * BAR_STEP;
const ROWS = ['Pre-reproductive', 'Reproductive', 'Post-reproductive'];
function draw113(): Sketch {
  const s = new Sketch(W, 244);
  lab(s, 180, 22, 'Age Structure of Populations', { size: 14, bold: true });
  PYR.forEach((p) => {
    lab(s, p.cx, 54, p.tag, { size: 12, bold: true, color: C.slate });
    lab(s, p.cx, 72, p.name, { size: 13, bold: true });
    lab(s, p.cx, 88, `<i>${p.growth}</i>`, { size: 10.5, color: C.slate });
    p.w.forEach((w, row) => {
      const y = barTop(row), pre = row === 0;
      path(s, [[p.cx - w / 2, y], [p.cx + w / 2, y], [p.cx + w / 2, y + BAR_H], [p.cx - w / 2, y + BAR_H]], { color: pre ? C.mari : C.ink, w: pre ? 2.4 : 1.7, close: true });
    });
  });
  // the age axis, an arrow pointing up, with the three bands named
  s.vec(14, barTop(0) + BAR_H + 6, 14, barTop(2) - 8, { color: C.slate, w: 1.4 });
  keep(s, [[14, barTop(0) + BAR_H + 6], [14, barTop(2) - 8]]);
  lab(s, 14, barTop(2) - 16, 'Age', { size: 10.5, color: C.slate });
  ROWS.forEach((t, row) => lab(s, 26, barTop(row) + BAR_H / 2 + 3.5, t, { size: 10, anchor: 'start', color: row === 0 ? C.amber : C.slate }));
  return s;
}
function check113(): Check[] {
  const s = draw113(), [a, b, c] = PYR.map((p) => p.w);
  return [
    ['(a) Expanding is a true pyramid: the pre-reproductive base is widest and each band above is narrower (rapid growth)', a[0] > a[1] && a[1] > a[2]],
    ['(b) Stable is nearly straight-sided: the base and the reproductive band are within 5 % of each other, and the post-reproductive band is narrower (zero growth)', Math.abs(b[0] - b[1]) / b[1] < 0.05 && b[2] < b[0]],
    ['(c) Declining has the narrowest base: the pre-reproductive band is narrower than the reproductive and the post-reproductive ones (negative growth)', c[0] < c[1] && c[0] < c[2]],
    ['The three bases rank expanding > stable > declining, the same order as the growth words (rapid, zero, negative)', a[0] > b[0] && b[0] > c[0]],
    ['In every pyramid the bands stack pre-reproductive at the bottom, reproductive in the middle, post-reproductive at the top, equal heights', barTop(0) > barTop(1) && barTop(1) > barTop(2) && Math.abs(barTop(0) - barTop(1) - BAR_STEP) < 1e-9 && BAR_H < BAR_STEP],
    ['The book\'s words are on the drawing: the title, (a) Expanding Rapid growth, (b) Stable Zero growth, (c) Declining Negative growth, the three band names and "Age"', has(s, 'Age Structure of Populations') && PYR.every((p) => has(s, p.tag) && has(s, p.name) && has(s, p.growth)) && ROWS.every((t) => has(s, t)) && has(s, 'Age')],
    ['The pre-reproductive bars (the base, which carries the growth rate) are the highlight: three of them', mari(s) === 3],
    ...layout(s), clean(s),
  ];
}
const fig113: Diagram = { id: 'b12-11-fig-11.3', topic: 2, name: 'Age pyramids', cases: [{ chip: 'Age pyramids', cap: CAP113 }], draw: draw113, check: check113 };

/* ================= Figures 11.4 and 11.5: the two growth curves ================= */
const CAP114 = 'Exponential (J-shaped) versus logistic (S-shaped) growth; the logistic curve levels off at the carrying capacity <i>K</i>.';
const CAP115 = 'Phases of logistic growth: lag, acceleration (log), deceleration and asymptote at <i>K</i>. The growth rate is greatest at <i>N</i> = <frac><num><i>K</i></num><den>2</den></frac>.';
const K = 100, N0 = 5, R = 0.5;
const expo = (t: number) => N0 * Math.exp(R * t);
const logi = (t: number) => K / (1 + ((K - N0) / N0) * Math.exp(-R * t));
const T_HALF = Math.log((K - N0) / N0) / R;
const T_END = Math.log(110 / N0) / R;
const X4 = (t: number) => 56 + 24.5 * t, Y4 = (n: number) => 290 - 2.1 * n;
/** Axes, ticks, names and the K guide, common to both growth figures. */
function growthFrame(s: Sketch, kLabel: string) {
  lab(s, 8, 16, 'Population Density (<i>N</i>)', { size: 10.5, anchor: 'start', color: C.slate });
  path(s, [[44, Y4(112)], [44, Y4(0)], [X4(12) + 8, Y4(0)]], { color: C.slate, w: 1.4 });
  for (let n = 0; n <= 100; n += 20) {
    path(s, [[41, Y4(n)], [44, Y4(n)]], { color: C.slate, w: 1.2 });
    lab(s, 35, Y4(n) + 3.5, String(n), { size: 9.5, anchor: 'end', color: C.slate });
    if (n > 0 && n < 100) grid(s, [44, Y4(n)], [X4(12) + 8, Y4(n)]);
  }
  for (let t = 0; t <= 12; t += 2) {
    path(s, [[X4(t), Y4(0)], [X4(t), Y4(0) + 3]], { color: C.slate, w: 1.2 });
    lab(s, X4(t), Y4(0) + 15, String(t), { size: 9.5, color: C.slate });
    if (t > 0) grid(s, [X4(t), Y4(112)], [X4(t), Y4(0)]);
  }
  lab(s, (44 + X4(12)) / 2, Y4(0) + 34, 'Time (<i>t</i>)', { size: 10.5, color: C.slate });
  path(s, [[44, Y4(K)], [X4(12) + 8, Y4(K)]], { color: C.slate, w: 1.2, dash: '5 4', track: false });
  lab(s, X4(12) + 4, Y4(K) - 6, kLabel, { size: 10, anchor: 'end', color: C.slate });
}
const logiPts = (): P[] => Array.from({ length: 121 }, (_, i): P => [X4(i / 10), Y4(logi(i / 10))]);
function draw114(): Sketch {
  const s = new Sketch(W, 416);
  growthFrame(s, '<i>K</i> = carrying capacity');
  // the exponential curve runs on past K, with a head
  const pts: P[] = Array.from({ length: 60 }, (_, i): P => { const t = (5.95 * i) / 59; return [X4(t), Y4(expo(t))]; });
  path(s, pts, { color: C.ink, w: 1.9 });
  s.vec(X4(5.95), Y4(expo(5.95)), X4(T_END), Y4(110), { color: C.ink, w: 1.9 });
  keep(s, [[X4(5.95), Y4(expo(5.95))], [X4(T_END), Y4(110)]]);
  path(s, logiPts(), { color: C.mari, w: 2.6 });
  s.dot(X4(0), Y4(N0), 3.4);
  lab(s, X4(0) + 9, Y4(N0) - 14, '<i>N</i><sub>0</sub>', { size: 11 });
  // the key, under the plot: each curve's equation beside its stroke, with the fractions stacked
  const ky = Y4(0) + 66;
  path(s, [[22, ky - 4], [50, ky - 4]], { color: C.ink, w: 1.9 });
  run(s, 58, ky, ['Exponential:', { n: 'd<i>N</i>', d: 'd<i>t</i>' }, '= <i>rN</i>'], { size: 11 });
  path(s, [[22, ky + 32], [50, ky + 32]], { color: C.mari, w: 2.6 });
  run(s, 58, ky + 36, ['Logistic:', { n: 'd<i>N</i>', d: 'd<i>t</i>' }, '= <i>rN</i>', { n: '<i>K</i> − <i>N</i>', d: '<i>K</i>' }], { size: 11 });
  return s;
}
function check114(): Check[] {
  const s = draw114();
  const ts = Array.from({ length: 121 }, (_, i) => i / 10);
  const slope = (f: (t: number) => number) => ts.slice(1).map((t, i) => f(t) - f(ts[i]));
  const es = slope(expo), ls = slope(logi);
  const peak = ls.indexOf(Math.max(...ls));
  return [
    ['Both curves start at N0 = 5 at t = 0', Math.abs(expo(0) - N0) < 1e-9 && Math.abs(logi(0) - N0) < 1e-9],
    ['The exponential curve is a J: its growth per step only ever increases, and it passes the carrying capacity K = 100 (107 at t = 6.13 where the book ends it)', es.every((d, i) => i === 0 || d >= es[i - 1] - 1e-12) && expo(6.13) > K && Math.abs(expo(T_END) - 110) < 1e-9],
    ['The logistic curve is an S: it rises, its growth per step peaks in the middle (at N = K/2) and then falls, and it stays below K and levels off (95.5 at t = 12)', ts.every((t) => logi(t) < K) && ls[peak] > ls[0] && ls[peak] > ls[ls.length - 1] && Math.abs(logi(T_HALF) - K / 2) < 1e-9 && logi(12) > 95 && logi(12) < 96],
    ['The two curves agree at the start and part later (the logistic is below the exponential from t = 0 on, by 1 at t = 1, by 20 at t = 5)', ts.slice(1).every((t) => logi(t) < expo(t)) && expo(1) - logi(1) < 1.1 && expo(5) - logi(5) > 20],
    ['The carrying capacity K = 100 is the dashed line the logistic curve approaches and the exponential one crosses', has(s, 'K = carrying capacity') && Math.abs(Y4(K) - 80) < 1e-9],
    ['Both equations are on the drawing as the book writes them, with dN/dt and (K − N)/K stacked: Exponential dN/dt = rN, Logistic dN/dt = rN (K − N)/K', has(s, 'Exponential:') && has(s, 'Logistic:') && count(s, 'dN') === 2 && count(s, 'dt') === 2 && count(s, '= rN') === 2 && has(s, 'K − N') && has(s, 'K')],
    ['The axes are the book\'s: Population Density (N) 0 to 100 and Time (t) 0 to 12, with N0 marked', has(s, 'Population Density (N)') && has(s, 'Time (t)') && has(s, 'N0') && ['0', '20', '40', '60', '80', '100', '2', '4', '6', '8', '10', '12'].every((t) => has(s, t))],
    ['Only the logistic curve (and its key line) is in the highlight', mari(s) === 2],
    ...layout(s), clean(s),
  ];
}
const fig114: Diagram = { id: 'b12-11-fig-11.4', topic: 2, name: 'Exponential and logistic growth', cases: [{ chip: 'J curve and S curve', cap: CAP114 }], draw: draw114, check: check114 };

const PH = { lag: 0.8, acc: 3, half: T_HALF, dec: 8 };
function draw115(): Sketch {
  const s = new Sketch(W, 338);
  growthFrame(s, 'Asymptote (<i>N</i> = <i>K</i>)');
  path(s, logiPts(), { color: C.ink, w: 2.2 });
  const at = (t: number): P => [X4(t), Y4(logi(t))];
  // the pointers stop 5 px short of their dots
  const point = (from: P, t: number, color: string = C.slate) => arrow(s, from, at(t), { color, w: 1.3, back: 6 });
  s.dot(...at(PH.lag), 3.8);
  s.dot(...at(PH.acc), 3.8);
  s.dot(...at(PH.dec), 3.8);
  const h = at(PH.half);
  s.point(h[0], h[1], 5, `<rect x="${r1(h[0] - 5)}" y="${r1(h[1] - 5)}" width="10" height="10" fill="${C.mari}"/>`);
  lab(s, 80, 208, 'Lag', { size: 10.5, color: C.slate });
  lab(s, 80, 220, 'Phase', { size: 10.5, color: C.slate });
  point([80, 230], PH.lag);
  lab(s, 142, 160, 'Acceleration', { size: 10.5, color: C.slate });
  lab(s, 142, 173, '(Log Phase)', { size: 10.5, color: C.slate });
  point([138, 182], PH.acc);
  lab(s, 300, 182, 'Deceleration', { size: 10.5, color: C.slate });
  point([284, 168], PH.dec);
  run(s, 268, 228, ['<i>N</i> =', { n: '<i>K</i>', d: '2' }], { size: 11, anchor: 'middle', bold: true, color: C.amber });
  lab(s, 268, 252, 'Maximum', { size: 11, bold: true, color: C.amber });
  lab(s, 268, 266, 'Growth Rate', { size: 11, bold: true, color: C.amber });
  point([236, 214], PH.half, C.mari);
  return s;
}
function check115(): Check[] {
  const s = draw115();
  const ts = Array.from({ length: 121 }, (_, i) => i / 10);
  const g = (t: number) => R * logi(t) * (K - logi(t)) / K;
  const fastest = ts.reduce((m, t) => (g(t) > g(m) ? t : m), 0);
  return [
    ['The growth rate rN(K − N)/K is greatest where N = K/2 (t = ln 19 / 0.5 = 5.89), and the highlighted square is on the curve there at N = 50', Math.abs(fastest - T_HALF) < 0.06 && Math.abs(logi(PH.half) - K / 2) < 1e-9 && Math.abs(g(T_HALF) - (R * K) / 4) < 1e-9],
    ['The growth rate is 0 at N = K (asymptote) and small at the start, so it is neither greatest at the lag nor at the asymptote: g(0.8) and g(12) are both under a third of the peak', g(PH.lag) < g(T_HALF) / 3 && g(12) < g(T_HALF) / 3],
    ['The four phases come in the book\'s order along the curve: lag (t = 0.8) then acceleration (3) then N = K/2 (5.89) then deceleration (8), with N 7, 19, 50, 74', PH.lag < PH.acc && PH.acc < PH.half && PH.half < PH.dec && [PH.lag, PH.acc, PH.half, PH.dec].map((t) => Math.round(logi(t))).join() === '7,19,50,74'],
    ['Acceleration is before the half-way point (the curve is steepening there) and deceleration after it (the curve is flattening)', g(PH.acc) < g(PH.half) && g(PH.dec) < g(PH.half) && g(2.9) < g(3.1) && g(7.9) > g(8.1)],
    ['The curve approaches the asymptote N = K = 100 and never reaches it (95.5 at t = 12)', ts.every((t) => logi(t) < K) && logi(12) > 95],
    ['Every label is the book\'s: Lag Phase, Acceleration (Log Phase), Deceleration, N = K/2 Maximum Growth Rate (K/2 stacked), Asymptote (N = K), both axis names', ['Lag', 'Phase', 'Acceleration', '(Log Phase)', 'Deceleration', 'N =', 'K', '2', 'Maximum', 'Growth Rate', 'Asymptote (N = K)', 'Population Density (N)', 'Time (t)'].every((t) => has(s, t))],
    ['Only the N = K/2 square (with its pointer) is in the highlight', s.svg().includes(`fill="${C.mari}"`) && mari(s) === 1],
    ...layout(s), clean(s),
  ];
}
const fig115: Diagram = { id: 'b12-11-fig-11.5', topic: 2, name: 'Phases of logistic growth', cases: [{ chip: 'Phases of logistic growth', cap: CAP115 }], draw: draw115, check: check115 };

/* ================= Figure 11.6 ================= */
const CAP116 = 'The six interspecific interactions, with the effect (+, − or 0) on species A and B.';
type Eff = '+' | '−' | '0';
type Inter = { name: string; a: Eff; b: Eff; left: string[]; right: string[]; link: 'both' | 'to' | 'bar'; desc: string[] };
const INTER: Inter[] = [
  { name: 'Mutualism', a: '+', b: '+', left: ['bee'], right: ['flower'], link: 'both', desc: ['Both benefit'] },
  { name: 'Competition', a: '−', b: '−', left: ['species', 'A'], right: ['species', 'B'], link: 'both', desc: ['Both harmed'] },
  { name: 'Predation', a: '+', b: '−', left: ['predator'], right: ['prey'], link: 'to', desc: ['One eats other'] },
  { name: 'Parasitism', a: '+', b: '−', left: ['tick'], right: ['dog'], link: 'to', desc: ['One benefits,', 'lives on host'] },
  { name: 'Commensalism', a: '+', b: '0', left: ['orchid'], right: ['tree'], link: 'to', desc: ['One benefits,', 'other unaffected'] },
  { name: 'Amensalism', a: '−', b: '0', left: ['mould'], right: ['microbe'], link: 'bar', desc: ['One harmed,', 'other unaffected'] },
];
const IW = 162, IH = 88, IX = [12, 186], IY = [44, 176, 308];
const pos = (i: number): P => [IX[i % 2], IY[Math.floor(i / 2)]];
const effect = (it: Inter) => `(${it.a}, ${it.b})`;
function draw116(): Sketch {
  const s = new Sketch(W, 436);
  lab(s, 180, 22, 'Types of Species Interactions', { size: 14, bold: true });
  INTER.forEach((it, i) => {
    const [x, y] = pos(i), name = it.name, ay = y + 29;
    box(s, name, [x, y, x + IW, y + IH]);
    const name2 = (t: string[], cx: number) => t.forEach((w, j) => lab(s, cx, t.length === 1 ? ay + 4 : ay - 1 + j * 13, w, { size: 11, within: name }));
    name2(it.left, x + 34);
    name2(it.right, x + IW - 34);
    const a0 = x + 66, a1 = x + IW - 66;
    if (it.link === 'both') {
      s.vec((a0 + a1) / 2, ay, a0, ay, { w: 1.6 });
      s.vec((a0 + a1) / 2, ay, a1, ay, { w: 1.6 });
      keep(s, [[a0, ay], [a1, ay]]);
    } else if (it.link === 'to') {
      s.vec(a0, ay, a1, ay, { w: 1.6 });
      keep(s, [[a0, ay], [a1, ay]]);
    } else {
      path(s, [[a0, ay], [a1 - 4, ay]], { w: 1.6 });
      path(s, [[a1 + 2, ay - 9], [a1 - 4, ay - 9], [a1 - 4, ay + 9], [a1 + 2, ay + 9]], { w: 1.6 });
    }
    lab(s, x + IW / 2, y + 58, name, { size: 13, bold: true, within: name });
    lab(s, x + IW / 2, y + 78, effect(it), { size: 14, bold: true, color: C.amber, within: name });
    it.desc.forEach((t, j) => lab(s, x + IW / 2, y + IH + 14 + j * 12, t, { size: 10, color: C.slate }));
  });
  return s;
}
function check116(): Check[] {
  const s = draw116();
  const sign = (e: Eff) => (e === '+' ? 1 : e === '−' ? -1 : 0);
  const kind = (it: Inter) => `${sign(it.a)},${sign(it.b)}`;
  const heads = (it: Inter) => (it.link === 'both' ? 2 : it.link === 'to' ? 1 : 0);
  return [
    ['Six interactions in the book\'s order with its effects: mutualism (+, +), competition (−, −), predation (+, −), parasitism (+, −), commensalism (+, 0), amensalism (−, 0)', INTER.map((it) => `${it.name} ${effect(it)}`).join('|') === 'Mutualism (+, +)|Competition (−, −)|Predation (+, −)|Parasitism (+, −)|Commensalism (+, 0)|Amensalism (−, 0)'],
    ['Each description agrees with its effects: both +, both harmed (−, −), one gains and one loses, one gains and the other is unaffected (+, 0), one is harmed and the other unaffected (−, 0)', INTER.every((it) => ({ '1,1': 'Both benefit', '-1,-1': 'Both harmed', '1,-1': it.name === 'Predation' ? 'One eats other' : 'One benefits,', '1,0': 'One benefits,', '-1,0': 'One harmed,' }[kind(it)] === it.desc[0]))],
    ['The two (+, −) interactions are predation and parasitism, the only repeated effect pair; the other four pairs are all different', INTER.filter((it) => kind(it) === '1,-1').map((it) => it.name).join() === 'Predation,Parasitism' && new Set(INTER.filter((it) => kind(it) !== '1,-1').map(kind)).size === 4],
    ['The link follows the effects: a double arrow when both species are affected alike (mutualism, competition), one arrow toward the species that is acted on or hosts (predation, parasitism, commensalism), and a blocking bar for amensalism (the mould harms the microbe, no return)', INTER.map(heads).join() === '2,2,1,1,1,0' && INTER[5].link === 'bar' && INTER.filter((it) => it.link === 'both').every((it) => sign(it.a) === sign(it.b) && it.a !== '0')],
    ['The example pairs are the book\'s: bee and flower, species A and B, predator and prey, tick and dog, orchid and tree, mould and microbe', INTER.map((it) => `${it.left.join(' ')} ${it.right.join(' ')}`).join('|') === 'bee flower|species A species B|predator prey|tick dog|orchid tree|mould microbe' && INTER.every((it) => [...it.left, ...it.right].every((t) => has(s, t)))],
    ['All six names, effects and descriptions are on the drawing, with the book\'s title; the effects (the +, −, 0 classification) are the highlight', has(s, 'Types of Species Interactions') && INTER.every((it) => has(s, it.name) && has(s, effect(it)) && it.desc.every((t) => has(s, t))) && count(s, '(+, −)') === 2],
    ...layout(s), clean(s),
  ];
}
const fig116: Diagram = { id: 'b12-11-fig-11.6', topic: 3, name: 'The six species interactions', cases: [{ chip: 'Six interactions', cap: CAP116 }], draw: draw116, check: check116 };

export const DIAGRAMS_BIOLOGY_12_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116];
