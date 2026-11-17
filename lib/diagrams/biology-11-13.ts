import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 13 (Plant Growth and Development): the drawings of the Master Reference book on pp. 765-818, redrawn.
 * Four numbered figures, each read from the page image (pp. 769, 771, 777, 786). The writers recorded no other drawing; the
 * phytochrome chain on p. 801 (Pr, red light 660 nm, Pfr, far-red light 730 nm, Pr) is typeset text in the book, so it has no diagram.
 *
 *   Figure 13.1 (drawing p. 769, caption p. 768), Topic 01, topic index 0: arithmetic line and the geometric (sigmoid) curve, L against t.
 *   Figure 13.2 (drawing p. 771, caption p. 770), Topic 01, topic index 0: differentiation, dedifferentiation, redifferentiation.
 *   Figure 13.3 (drawing p. 777, caption p. 776), Topic 02, topic index 1: the "Hormonal Balance" see-saw.
 *   Figure 13.4 (drawing p. 786, caption p. 785), Topic 03, topic index 2: the night-break experiment.
 *
 * THE BOOK'S, as printed: every word of every label, title and box (the em dashes of the book's box in Fig 13.4 become commas, the
 * house rule). Fig 13.1: the line L = L0 + rt from (0, 1) to (10, 9.5) and a logistic curve from L = 0.15 at t = 0 to a plateau of
 * 10, read from the page (inflection near t = 3.2, curve and line crossing near t = 2.7, L about 1.7 at t = 2 and about 7.4 at
 * t = 4), axes 0 to 10 in steps of 2, and the four phase labels with their arrows. Fig 13.2: which cell sits in Division ON (the
 * meristem-derived cell and the cell that regains division power: dashed boxes) or Division OFF (the mature cell and the new mature
 * tissue: solid boxes), and which arrow joins which. Fig 13.3: the beam tilts with the promoters' side lower, hangers run to the
 * corners of each box, the fulcrum is a triangle under the pivot, and the arc "developmental stage tips the balance" has a head at
 * both ends. Fig 13.4: bar 1 is 8 h light then 16 h dark, bar 2 is 16 h light then 8 h dark, bar 3 is 8 h light, dark, a flash
 * centred on the 16 h mark one hour wide (read from the page at 300 dpi: 15.5 to 16.5 h), dark to 24 h; plant (a) flowers only on
 * bar 1, plant (b) only on bars 2 and 3.
 * SCHEMATIC: all sizes and positions (re-laid for a phone width), the leader and arrow angles, the exact curve beyond the values
 * above, the box and beam proportions, and the colours (the app's style: no fills, one marigold highlight per drawing, dark time
 * drawn as hatching instead of the book's solid navy, light time as an open bar). The one-hour width of the flash is the book's
 * drawn width, so the two dark runs beside it are 7.5 h each: the dark time before and after the flash is not 8 h and 8 h.
 * Check-only value: a critical night length of 12 h, any value between 8 and 16 h gives the same result.
 */

const W = 360;
type P = [number, number];
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- helpers ---------- */
const LINES = new WeakMap<Sketch, P[][]>();
const BOXES = new WeakMap<Sketch, { name: string; rect: Rect; inner: Rect[] }[]>();
const keep = (s: Sketch, pts: P[]) => LINES.set(s, [...(LINES.get(s) ?? []), pts]);
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; close?: boolean; dash?: boolean; skip?: boolean } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + (o.close ? ' Z' : '');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.skip) keep(s, o.close ? [...pts, pts[0]] : pts);
}
/** An arrow head at `to`, pointing along from -> to. */
function head(s: Sketch, from: P, to: P, color: string = C.ink, L = 9, hw = 4.5) {
  const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const bx = to[0] - L * Math.cos(a), by = to[1] - L * Math.sin(a);
  s.add(`<path d="M${r1(to[0])} ${r1(to[1])} L${r1(bx + hw * Math.sin(a))} ${r1(by - hw * Math.cos(a))} L${r1(bx - hw * Math.sin(a))} ${r1(by + hw * Math.cos(a))} Z" fill="${color}"/>`);
}
const bez = (p0: P, p1: P, p2: P, p3: P, n = 24): P[] => Array.from({ length: n + 1 }, (_, i): P => {
  const t = i / n, u = 1 - t;
  return [u ** 3 * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0], u ** 3 * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1]];
});
/** A curved arrow along a cubic: the line stops short of the tip so the head sits on the end. */
function curveArrow(s: Sketch, pts: P[], color: string = C.slate, w = 1.8) {
  const n = pts.length, tip = pts[n - 1];
  let k = n - 1;
  while (k > 0 && Math.hypot(pts[k][0] - tip[0], pts[k][1] - tip[1]) < 8) k--;
  path(s, pts.slice(0, k + 1), { color, w });
  head(s, pts[k], tip, color);
  keep(s, [pts[k], tip]);
}
function box(s: Sketch, name: string, r: Rect, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="7" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="6 4"' : ''}/>`);
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
const has = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const clean = (s: Sketch): Check => { const a = audit(s); return [`Layout audit is clear${a.length ? `: ${a.join('; ')}` : ''}`, a.length === 0 && s.unplaced.length === 0]; };

/* ================= Figure 13.1 ================= */
const CAP131 = 'Arithmetic growth (<i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>) is a straight line; geometric growth gives a sigmoid curve with a lag phase, a log (exponential) phase, a phase of diminishing growth and a stationary phase.';
/** The straight line: L0 = 1, slope r = 0.85 (the book's line runs from 1 at t = 0 to 9.5 at t = 10). */
const L0 = 1, RATE = 0.85, KCAP = 10, LSTART = 0.15;
const lin = (t: number) => L0 + RATE * t;
/** The sigmoid: a logistic with plateau 10 and L = 0.15 at t = 0, midpoint at t = 3.2 (read from the page). */
const KR = Math.log(KCAP / LSTART - 1) / 3.2;
const sig = (t: number) => KCAP / (1 + (KCAP / LSTART - 1) * Math.exp(-KR * t));
const PX0 = 44, PXS = 29.2, PY0 = 290, PYS = 24;
const tx = (t: number) => PX0 + t * PXS, ly = (l: number) => PY0 - l * PYS;
const PHASE: { n: number; t: number; lines: string[]; at: P; anchor: 'start' | 'middle' | 'end'; from: P }[] = [
  { n: 1, t: 1.1, lines: ['1. lag phase'], at: [108, 278], anchor: 'start', from: [101, 275] },
  { n: 2, t: 3.4, lines: ['2. log', '(exponential)', 'phase'], at: [52, 120], anchor: 'start', from: [116, 150] },
  { n: 3, t: 6.4, lines: ['3. phase of', 'diminishing', 'growth'], at: [232, 82], anchor: 'middle', from: [235, 68] },
  { n: 4, t: 9, lines: ['4. stationary phase'], at: [338, 30], anchor: 'end', from: [306, 38] },
];
function draw131(): Sketch {
  const s = new Sketch(W, 336);
  // axes, ticks, numbers
  s.vec(PX0, PY0, 342, PY0, { color: C.slate, w: 1.6 }); keep(s, [[PX0, PY0], [342, PY0]]);
  s.vec(PX0, PY0, PX0, 20, { color: C.slate, w: 1.6 }); keep(s, [[PX0, PY0], [PX0, 20]]);
  for (let v = 0; v <= 10; v += 2) {
    path(s, [[tx(v), PY0], [tx(v), PY0 + 5]], { color: C.slate, w: 1.2 });
    lab(s, tx(v), PY0 + 20, String(v), { size: 10.5, color: C.slate });
    path(s, [[PX0 - 5, ly(v)], [PX0, ly(v)]], { color: C.slate, w: 1.2 });
    lab(s, PX0 - 12, ly(v) + 4, String(v), { size: 10.5, color: C.slate, anchor: 'end' });
  }
  lab(s, 58, 26, '<i>L</i> (size)', { size: 14, anchor: 'start' });
  lab(s, 342, 328, '<i>t</i> (time)', { size: 14, anchor: 'end' });
  // the two curves
  const A: P[] = [0, 10].map((t): P => [tx(t), ly(lin(t))]);
  path(s, A, { w: 2.2 });
  const G: P[] = Array.from({ length: 101 }, (_, i): P => [tx(i / 10), ly(sig(i / 10))]);
  path(s, G, { color: C.mari, w: 2.6 });
  // legend
  path(s, [[56, 44], [82, 44]], { w: 2.2 });
  lab(s, 90, 48, '<i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>', { size: 12, anchor: 'start' });
  path(s, [[56, 64], [82, 64]], { color: C.mari, w: 2.6 });
  lab(s, 90, 68, 'geometric', { size: 12, anchor: 'start' });
  // the four phase labels with arrows to the curve
  for (const p of PHASE) {
    p.lines.forEach((t, i) => lab(s, p.at[0], p.at[1] + i * 14, t, { size: 11.5, color: p.n === 2 ? C.amber : C.slate, anchor: p.anchor }));
    const to: P = [tx(p.t), ly(sig(p.t))];
    s.vec(p.from[0], p.from[1], to[0], to[1], { color: C.slate, w: 1.3 }); keep(s, [p.from, to]);
  }
  return s;
}
function check131(): Check[] {
  const s = draw131();
  const ts = Array.from({ length: 101 }, (_, i) => i / 10);
  const slope = (t: number) => (sig(t + 0.05) - sig(t - 0.05)) / 0.1;
  const steep = ts.reduce((b, t) => (slope(t) > slope(b) ? t : b), 0);
  let cross = 0;
  for (const t of ts) if (sig(t) < lin(t)) cross = t;
  const near = (p: P) => Math.min(...ts.map((t) => Math.hypot(tx(t) - p[0], ly(sig(t)) - p[1])));
  const ok = (a: number, b: number, e: number) => Math.abs(a - b) <= e;
  return [
    ['The arithmetic line runs from 1 at t = 0 to 9.5 at t = 10 (the book\'s two end points) and is straight', ok(lin(0), 1, 1e-9) && ok(lin(10), 9.5, 1e-9) && ok(lin(5) - lin(0), (lin(10) - lin(0)) / 2, 1e-9)],
    ['The sigmoid starts near 0.15 and levels at the plateau 10 (within 0.01 by t = 10)', ok(sig(0), 0.15, 1e-6) && KCAP - sig(10) < 0.01],
    ['The sigmoid rises all the way (never falls) and is slowest at both ends: lag at the start, plateau at the end', ts.slice(1).every((t) => sig(t) > sig(t - 0.1)) && slope(0.1) < 0.3 && slope(9.9) < 0.01],
    [`Growth is fastest in the log phase: the steepest point is t = ${r1(steep)}, between 2 and 4.5`, steep > 2 && steep < 4.5],
    [`The curve crosses the straight line near t = ${r1(cross)} (the book\'s crossing is near 2.7)`, Math.abs(cross - 2.7) < 0.25],
    ['The four phase points are in order along t: lag, log, diminishing, stationary, each phase label\'s arrow ends on the curve', PHASE.every((p, i) => i === 0 || p.t > PHASE[i - 1].t) && PHASE.every((p) => near([tx(p.t), ly(sig(p.t))]) < 1)],
    ['All four phase labels, both legend entries and both axis titles are the book\'s words', ['1. lag phase', '2. log', '(exponential)', 'phase', '3. phase of', 'diminishing', 'growth', '4. stationary phase', 'geometric', 'L (size)', 't (time)', 'Lt = L0 + rt'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig131: Diagram = { id: 'b11-13-fig-13.1', topic: 0, name: 'Arithmetic and geometric growth', cases: [{ chip: 'L against t', cap: CAP131 }], draw: draw131, check: check131 };

/* ================= Figure 13.2 ================= */
const CAP132 = 'Differentiation and redifferentiation both end in loss of the capacity to divide, while dedifferentiation restores it.';
const TL: Rect = [10, 38, 126, 92], TR: Rect = [220, 38, 350, 92], MB: Rect = [66, 176, 176, 242], NT: Rect = [220, 190, 350, 266];
const DIV_Y = 136;
const diffC = bez([50, 92], [38, 140], [40, 190], [65, 209]);
const dediffC = bez([177, 208], [204, 190], [188, 104], [219, 66]);
function draw132(): Sketch {
  const s = new Sketch(W, 290);
  lab(s, 10, 26, 'Division ON', { size: 12, bold: true, anchor: 'start' });
  path(s, [[10, DIV_Y], [350, DIV_Y]], { color: C.grey, w: 1.3, dash: true });
  const four = (r: Rect, name: string, lines: string[], o: { dash?: boolean }) => {
    box(s, name, r, o);
    const cx = (r[0] + r[2]) / 2, top = (r[1] + r[3]) / 2 - ((lines.length - 1) * 14) / 2 + 4;
    lines.forEach((t, i) => lab(s, cx, top + i * 14, t, { size: 11, within: name }));
  };
  four(TL, 'Meristem-derived cell', ['Meristem-derived', 'cell'], { dash: true });
  four(TR, 'Cell regains division power', ['Cell regains', 'division power'], { dash: true });
  four(MB, 'Mature cell lost division capacity', ['Mature cell', 'lost division', 'capacity'], {});
  four(NT, 'New mature specialised tissue', ['New mature', 'specialised tissue', '(e.g., secondary', 'xylem)'], {});
  curveArrow(s, diffC);
  curveArrow(s, dediffC, C.mari, 2.6);
  s.vec(335, 92, 335, 190, { color: C.slate, w: 1.8 }); keep(s, [[335, 92], [335, 190]]);
  lab(s, 71, 128, 'Differentiation', { size: 11.5, anchor: 'start' });
  lab(s, 214, 128, 'Dedifferentiation', { size: 11.5, anchor: 'start', color: C.amber, bold: true });
  lab(s, 327, 170, 'Redifferentiation', { size: 11.5, anchor: 'end' });
  lab(s, 10, 264, 'Division OFF', { size: 12, bold: true, anchor: 'start' });
  return s;
}
function check132(): Check[] {
  const s = draw132();
  const onEdge = (p: P, r: Rect) => (Math.abs(p[0] - r[0]) < 2 || Math.abs(p[0] - r[2]) < 2) && p[1] > r[1] - 2 && p[1] < r[3] + 2 || (Math.abs(p[1] - r[1]) < 2 || Math.abs(p[1] - r[3]) < 2) && p[0] > r[0] - 2 && p[0] < r[2] + 2;
  const first = (a: P[]) => a[0], last = (a: P[]) => a[a.length - 1];
  const above = (r: Rect) => r[3] < DIV_Y, below = (r: Rect) => r[1] > DIV_Y;
  return [
    ['Division ON holds the meristem-derived cell and the cell that regains division power; Division OFF the mature cell and the new mature tissue', above(TL) && above(TR) && below(MB) && below(NT)],
    ['Differentiation runs from the meristem-derived cell to the mature cell that lost division capacity (ON to OFF)', onEdge(first(diffC), TL) && onEdge(last(diffC), MB) && first(diffC)[1] < DIV_Y && last(diffC)[1] > DIV_Y],
    ['Dedifferentiation runs from the mature cell to the cell that regains division power (OFF to ON): the one that restores division, the highlight', onEdge(first(dediffC), MB) && onEdge(last(dediffC), TR) && first(dediffC)[1] > DIV_Y && last(dediffC)[1] < DIV_Y],
    ['Redifferentiation runs from the cell that regained division power down to the new mature tissue (ON to OFF)', onEdge([335, 92], TR) && onEdge([335, 190], NT)],
    ['Two of the three arrows end in Division OFF (differentiation and redifferentiation), one in Division ON (dedifferentiation), as the caption says', last(diffC)[1] > DIV_Y && 190 > DIV_Y && last(dediffC)[1] < DIV_Y],
    ['All labels are the book\'s words', ['Division ON', 'Division OFF', 'Meristem-derived', 'cell', 'Cell regains', 'division power', 'Mature cell', 'lost division', 'capacity', 'New mature', 'specialised tissue', '(e.g., secondary', 'xylem)', 'Differentiation', 'Dedifferentiation', 'Redifferentiation'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig132: Diagram = { id: 'b11-13-fig-13.2', topic: 0, name: 'Differentiation cycle', cases: [{ chip: 'Division ON and OFF', cap: CAP132 }], draw: draw132, check: check132 };

/* ================= Figure 13.3 ================= */
const CAP133 = 'The net growth response depends on the balance between growth promoters (auxins, gibberellins, cytokinins) and growth inhibitors (abscisic acid, ethylene), which shifts with the stage of development.';
const PIV: P = [180, 176], ARM = 112, TILT = (5.9 * Math.PI) / 180;
const BEND_L: P = [PIV[0] - ARM, PIV[1] + ARM * Math.tan(TILT)], BEND_R: P = [PIV[0] + ARM, PIV[1] - ARM * Math.tan(TILT)];
const BOXL: Rect = [6, BEND_L[1] + 30, 130, BEND_L[1] + 102], BOXR: Rect = [230, BEND_R[1] + 30, 354, BEND_R[1] + 102];
const BASE_Y = 290, BASE_HALF = 31;
function draw133(): Sketch {
  const s = new Sketch(W, 306);
  lab(s, W / 2, 24, 'Hormonal Balance', { size: 15, bold: true });
  lab(s, W / 2, 46, 'Net growth response = hormonal balance', { size: 12, color: C.slate });
  lab(s, W / 2, 84, 'developmental stage tips the balance', { size: 11.5, color: C.amber });
  const arc = bez([86, 120], [130, 96], [230, 96], [274, 120], 28);
  path(s, arc, { color: C.mari, w: 2.2 });
  head(s, arc[1], arc[0], C.mari); head(s, arc[arc.length - 2], arc[arc.length - 1], C.mari);
  // fulcrum, beam, pivot
  path(s, [PIV, [PIV[0] - BASE_HALF, BASE_Y], [PIV[0] + BASE_HALF, BASE_Y]], { close: true, w: 2 });
  path(s, [BEND_L, BEND_R], { w: 4 });
  s.add(`<circle cx="${PIV[0]}" cy="${PIV[1]}" r="4.6" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
  for (const [end, bx] of [[BEND_L, BOXL], [BEND_R, BOXR]] as [P, Rect][]) {
    path(s, [[bx[0], bx[1]], end, [bx[2], bx[1]]], { w: 1.4 });
  }
  const two = (r: Rect, name: string, t1: string, t2: string, l1: string, l2: string) => {
    box(s, name, r);
    const cx = (r[0] + r[2]) / 2;
    lab(s, cx, r[1] + 21, t1, { size: 12, bold: true, within: name });
    lab(s, cx, r[1] + 35, t2, { size: 12, bold: true, within: name });
    lab(s, cx, r[1] + 52, l1, { size: 10, color: C.slate, within: name });
    lab(s, cx, r[1] + 65, l2, { size: 10, color: C.slate, within: name });
  };
  two(BOXL, 'GROWTH PROMOTERS', 'GROWTH', 'PROMOTERS', 'Auxins, Gibberellins,', 'Cytokinins');
  two(BOXR, 'GROWTH INHIBITORS', 'GROWTH', 'INHIBITORS', 'Abscisic acid,', 'Ethylene');
  return s;
}
function check133(): Check[] {
  const s = draw133();
  const slopeL = (PIV[1] - BEND_L[1]) / (PIV[0] - BEND_L[0]), slopeR = (BEND_R[1] - PIV[1]) / (BEND_R[0] - PIV[0]);
  const cL = (BOXL[0] + BOXL[2]) / 2, cR = (BOXR[0] + BOXR[2]) / 2;
  return [
    ['The beam is one straight line through the pivot, tilted about 5.9 degrees with the promoters\' end lower', Math.abs(slopeL - slopeR) < 1e-9 && BEND_L[1] > PIV[1] && BEND_R[1] < PIV[1] && Math.abs((Math.atan(-slopeL) * 180) / Math.PI - 5.9) < 0.01],
    ['Each box hangs centred on its beam end, its hangers going to the two top corners', Math.abs(cL - BEND_L[0]) < 1 && Math.abs(cR - BEND_R[0]) < 1 && BOXL[1] > BEND_L[1] && BOXR[1] > BEND_R[1]],
    ['The fulcrum is a triangle with its apex on the pivot, wider at the base, and clear of both boxes', PIV[1] < BASE_Y && BASE_HALF > 0 && PIV[0] + BASE_HALF < BOXR[0] && PIV[0] - BASE_HALF > BOXL[2]],
    ['Promoters list auxins, gibberellins, cytokinins; inhibitors list abscisic acid, ethylene (the caption\'s two groups)', ['Auxins, Gibberellins,', 'Cytokinins', 'Abscisic acid,', 'Ethylene', 'GROWTH', 'PROMOTERS', 'INHIBITORS'].every((t) => has(s, t))],
    ['Title, subtitle and the arc\'s words are the book\'s', ['Hormonal Balance', 'Net growth response = hormonal balance', 'developmental stage tips the balance'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig133: Diagram = { id: 'b11-13-fig-13.3', topic: 1, name: 'Hormonal balance', cases: [{ chip: 'Promoters and inhibitors', cap: CAP133 }], draw: draw133, check: check133 };

/* ================= Figure 13.4 ================= */
const CAP134 = 'Night-break experiment. A short-day plant flowers only when the continuous dark period is long enough; a flash of light in the middle of the night prevents flowering in a short-day plant but allows it in a long-day plant.';
type Seg = { kind: 'light' | 'dark' | 'flash'; from: number; to: number };
const BARS: Seg[][] = [
  [{ kind: 'light', from: 0, to: 8 }, { kind: 'dark', from: 8, to: 24 }],
  [{ kind: 'light', from: 0, to: 16 }, { kind: 'dark', from: 16, to: 24 }],
  [{ kind: 'light', from: 0, to: 8 }, { kind: 'dark', from: 8, to: 15.5 }, { kind: 'flash', from: 15.5, to: 16.5 }, { kind: 'dark', from: 16.5, to: 24 }],
];
/** The longest continuous dark run on a bar (hours). */
const longestDark = (b: Seg[]) => Math.max(0, ...b.filter((g) => g.kind === 'dark').map((g) => g.to - g.from));
/** Check-only: the critical night length (any value between 8 and 16 h gives the same result). */
const CRIT = 12;
const OUT: { sdp: boolean; ldp: boolean }[] = [{ sdp: true, ldp: false }, { sdp: false, ldp: true }, { sdp: false, ldp: true }];
const BX = 14, BW = 240, HR = BW / 24, BH = 22, RX = 264;
function drawBar(s: Sketch, segs: Seg[], top: number) {
  const x = (h: number) => BX + h * HR;
  for (const g of segs) {
    const r: Rect = [x(g.from), top, x(g.to), top + BH];
    if (g.kind === 'flash') {
      s.add(`<rect x="${r1(r[0])}" y="${top}" width="${r1(r[2] - r[0])}" height="${BH}" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
      keep(s, [[r[0], top], [r[2], top], [r[2], top + BH], [r[0], top + BH], [r[0], top]]);
      continue;
    }
    s.add(`<rect x="${r1(r[0])}" y="${top}" width="${r1(r[2] - r[0])}" height="${BH}" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
    keep(s, [[r[0], top], [r[2], top], [r[2], top + BH], [r[0], top + BH], [r[0], top]]);
    const word = g.kind === 'light' ? 'light' : 'dark', cx = (r[0] + r[2]) / 2;
    const lr = lab(s, cx, top + 15, word, { size: 10.5, color: C.slate });
    if (g.kind === 'dark') {
      // hatching for dark time (lines run up and to the right), left clear round the word
      const lo = r[0] + 1.5, hi = r[2] - 1.5, hh = BH - 3, bot = top + BH - 1.5;
      for (let hx = r[0] - hh + 2; hx < hi; hx += 5) {
        // the line is y = bot - (x - hx); keep x in [lo, hi] and outside the word's window
        const win: [number, number][] = [[Math.max(hx, lo), Math.min(hx + hh, hi)]];
        const cut: [number, number][] = [];
        for (const [a, b] of win) {
          const w0 = lr[0] - 3, w1 = lr[2] + 3;
          if (b <= w0 || a >= w1) cut.push([a, b]);
          else { if (a < w0) cut.push([a, w0]); if (b > w1) cut.push([w1, b]); }
        }
        for (const [a, b] of cut) if (b - a > 1.5) path(s, [[a, bot - (a - hx)], [b, bot - (b - hx)]], { color: C.slate, w: 1, skip: true });
      }
    }
  }
}
function draw134(): Sketch {
  const s = new Sketch(W, 432);
  // legend
  const sw = (x: number, kind: 'light' | 'dark' | 'flash', text: string) => {
    if (kind === 'flash') s.add(`<rect x="${x}" y="9" width="11" height="11" fill="none" stroke="${C.mari}" stroke-width="2.2"/>`);
    else {
      s.add(`<rect x="${x}" y="9" width="14" height="11" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`);
      if (kind === 'dark') for (let k = 3; k < 14; k += 4) s.add(`<line x1="${x + k}" y1="19" x2="${x + k + 5 > 14 ? 14 + x : x + k + 5}" y2="${19 - Math.min(10, 14 - k)}" stroke="${C.slate}" stroke-width="1"/>`);
    }
    keep(s, [[x, 9], [x + 14, 9], [x + 14, 20], [x, 20], [x, 9]]);
    lab(s, x + 21, 19, text, { size: 11, anchor: 'start' });
  };
  sw(BX, 'light', 'Light'); sw(BX + 76, 'dark', 'Dark'); sw(BX + 148, 'flash', 'Night-break flash');
  const panel = (name: string, y0: number, who: 'sdp' | 'ldp') => {
    lab(s, BX, y0, name, { size: 12, bold: true, anchor: 'start' });
    [0, 8, 16, 24].forEach((h) => lab(s, BX + h * HR, y0 + 19, `${h} h`, { size: 10, color: C.slate }));
    const tops = [y0 + 30, y0 + 68, y0 + 126];
    BARS.forEach((b, i) => {
      drawBar(s, b, tops[i]);
      const mid = tops[i] + 16, yes = OUT[i][who];
      if (yes) {
        path(s, [[RX, mid - 4], [RX + 4, mid], [RX + 11, mid - 9]], { w: 1.8 });
        lab(s, RX + 17, mid, 'FLOWERS', { size: 11.5, bold: true, anchor: 'start' });
      } else lab(s, RX, mid, 'no flower', { size: 11.5, color: C.slate, anchor: 'start' });
    });
    const fl = BARS[2].find((g) => g.kind === 'flash')!, fx = BX + ((fl.from + fl.to) / 2) * HR;
    lab(s, fx, tops[2] - 20, 'night break', { size: 10.5, color: C.amber });
    s.vec(fx, tops[2] - 11, fx, tops[2] - 1, { color: C.mari, w: 1.5 }); keep(s, [[fx, tops[2] - 11], [fx, tops[2] - 1]]);
  };
  panel('(a) Short-Day Plant (Long-Night Plant)', 46, 'sdp');
  panel('(b) Long-Day Plant (Short-Night Plant)', 224, 'ldp');
  // the book's box
  const r: Rect = [14, 384, 346, 424];
  box(s, 'box', r);
  lab(s, W / 2, 403, 'It is the continuous dark period,', { size: 11, within: 'box' });
  lab(s, W / 2, 417, 'not total light, that is decisive.', { size: 11, within: 'box' });
  return s;
}
function check134(): Check[] {
  const s = draw134();
  const total = (b: Seg[], k: Seg['kind']) => b.filter((g) => g.kind === k).reduce((a, g) => a + g.to - g.from, 0);
  const joined = BARS.every((b) => b[0].from === 0 && b[b.length - 1].to === 24 && b.slice(1).every((g, i) => g.from === b[i].to));
  const fl = BARS[2].find((g) => g.kind === 'flash')!;
  return [
    ['Each of the three bars covers 24 h with no gap and no overlap, from 0 h to 24 h', joined],
    ['Bar 1: 8 h light then 16 h dark (short day, long night)', total(BARS[0], 'light') === 8 && total(BARS[0], 'dark') === 16 && BARS[0][0].to === 8],
    ['Bar 2: 16 h light then 8 h dark (long day, short night)', total(BARS[1], 'light') === 16 && total(BARS[1], 'dark') === 8 && BARS[1][0].to === 16],
    ['Bar 3: 8 h light, dark from 8 h, a one-hour flash centred on the 16 h mark, dark again to 24 h (light 8 h, flash 1 h, dark 15 h)', total(BARS[2], 'light') === 8 && BARS[2][1].from === 8 && (fl.from + fl.to) / 2 === 16 && fl.to - fl.from === 1 && total(BARS[2], 'flash') === 1 && total(BARS[2], 'dark') === 15 && BARS[2][3].to === 24],
    ['The flash splits the long night: the longest unbroken dark run on bar 3 is 7.5 h, against 16 h on bar 1', longestDark(BARS[2]) === 7.5 && longestDark(BARS[0]) === 16 && longestDark(BARS[1]) === 8],
    ['The flowering marks follow the continuous dark period: short-day plant flowers only where it is long, long-day plant only where it is short', BARS.every((b, i) => OUT[i].sdp === longestDark(b) >= CRIT && OUT[i].ldp === !OUT[i].sdp)],
    ['(a) has one FLOWERS (bar 1) and two no flower; (b) has two FLOWERS (bars 2 and 3) and one no flower, as the page shows', OUT.filter((o) => o.sdp).length === 1 && OUT.filter((o) => o.ldp).length === 2 && OUT[0].sdp && !OUT[1].sdp && !OUT[2].sdp],
    ['The legend, both panel headings, the hour marks, the night break label and the box (commas, no em dash) are on the drawing', ['Light', 'Dark', 'Night-break flash', '(a) Short-Day Plant (Long-Night Plant)', '(b) Long-Day Plant (Short-Night Plant)', '0 h', '8 h', '16 h', '24 h', 'night break', 'light', 'dark', 'FLOWERS', 'no flower', 'It is the continuous dark period,', 'not total light, that is decisive.'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig134: Diagram = { id: 'b11-13-fig-13.4', topic: 2, name: 'Night-break experiment', cases: [{ chip: 'Short-day and long-day plants', cap: CAP134 }], draw: draw134, check: check134 };

export const DIAGRAMS_BIOLOGY_11_13: Diagram[] = [fig131, fig132, fig133, fig134];
