import { C, LABEL_GAP, Rect, Sketch, audit, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * BIOLOGY CLASS 11, CHAPTER 14 (Breathing and Exchange of Gases): the drawings of the Master Reference book on pp. 819-885, redrawn.
 * Every page of the range was counted (pdfimages -list, and the shapes seen on the page images). The figures sit on their own
 * "CHAPTER 14 . FIGURES" pages: pp. 823, 827, 829, 837, 839 and 846 (the captions are printed earlier, on pp. 822, 826, 828,
 * 836, 838 and 845). The other pages of the chapter hold text, tables and page rules only. SIX drawings:
 *
 *   Figure 14.1 (drawing p. 823), Topic 01, topic index 0: the five steps of respiration.
 *   Figure 14.2 (drawing p. 827), Topic 02, topic index 1: the spirogram.
 *   Figure 14.3 (drawing p. 829), Topic 02, topic index 1: the mechanism of breathing (two cases, Inspiration and Expiration).
 *   Figure 14.4 (drawing p. 837), Topic 03, topic index 2: partial pressures and the direction of diffusion (three cases).
 *   Figure 14.5 (drawing p. 839), Topic 03, topic index 2: the O2-Hb dissociation curve.
 *   Figure 14.6 (drawing p. 846), Topic 04, topic index 3: the respiratory centres in the brainstem.
 *
 * THE BOOK'S, as printed: every word of every label, box and note; the order of the five steps and which of them belongs to
 * "every cell"; in the spirogram all eight values (IRV 3000, TV 500, ERV 1100, RV 1200, IC 3500, FRC 2300, VC 4600, TLC
 * 5800 mL), the four guide levels (TLC 5800, tidal peak 2800, end-expiratory level 2300, RV ceiling 1200), the bar spans, and
 * the order of the trace (three quiet breaths, a maximal inspiration to TLC, a maximal expiration down to RV, three more quiet
 * breaths); in 14.3 the two pressure statements; in 14.4 every partial pressure (104, 40, 45, 40 / 95, 40, 45, 40) and the
 * four haem sites; in 14.5 P50 = 26.6 mmHg, the tissue point (pO2 40) and the lung point (pO2 104), the 50 % guide and the
 * direction of both shifts; in 14.6 the structures, their names and descriptions.
 * COMPUTED, not placed: the spirogram's bars and trace from the values above (the check adds them up); the arrows in 14.4
 * point from the higher to the lower partial pressure; the 14.5 curves are Hill curves S = p^n / (P50^n + p^n) with n = 2.7
 * (P50 26.6 gives 75 % at pO2 40 and 97 % at pO2 104, as the book's curve shows).
 * SCHEMATIC: all box, ellipse and organ sizes and positions (re-laid for a phone, so 14.1 is a column, 14.3 and 14.4 are
 * one panel per case, the spirogram's time axis is not to scale), the breath depth of the waves, rib and lung outlines,
 * the shifted curves' P50 (about 18 and 40 mmHg: the book gives no number), the leader lines' angles. The "mL" after the
 * spirogram's numbers is dropped (the axis says Volume (mL)) so that four columns of bars fit a phone. Colours are the app's
 * style (no fills; one marigold highlight per drawing), not the book's.
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
/** A grey leader from a label to a point it names, ending in a dot (a tag's own look, for names that need STIX). */
function leader(s: Sketch, from: P, to: P, hi = false) {
  s.add(`<line x1="${r1(from[0])}" y1="${r1(from[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(to[0])}" cy="${r1(to[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
  keep(s, [from, to]);
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
const sub2 = 'O<sub>2</sub>', co2 = 'CO<sub>2</sub>';

/* ================= Figure 14.1 ================= */
const CAP141 = 'The five steps of respiration. (1) Breathing: air moves in and out of the lungs. (2) Diffusion of O<sub>2</sub> and CO<sub>2</sub> across the alveolar membrane. (3) Transport of gases by the blood. (4) Diffusion of O<sub>2</sub> and CO<sub>2</sub> between blood and tissues. (5) Cellular respiration: cells use O<sub>2</sub> and release CO<sub>2</sub>. Steps 1–4 belong to the respiratory system; step 5 occurs in every cell.';
const STEPS = [
  { n: 1, a: 'Breathing', b: 'air in/out of lungs', where: 'respiratory system' },
  { n: 2, a: 'Diffusion at alveoli', b: `${sub2} in, ${co2} out of blood`, where: 'respiratory system' },
  { n: 3, a: 'Transport by blood', b: `${sub2} to tissues, ${co2} to lungs`, where: 'respiratory system' },
  { n: 4, a: 'Diffusion at tissues', b: `${sub2} to cells, ${co2} to blood`, where: 'respiratory system' },
  { n: 5, a: 'Cellular respiration', b: `cells use ${sub2}, release ${co2}`, where: 'every cell' },
];
const BH = 56, BG = 22, B0 = 16;
const stepBox = (i: number): Rect => [14, B0 + i * (BH + BG), 346, B0 + i * (BH + BG) + BH];
function draw141(): Sketch {
  const s = new Sketch(W, B0 * 2 + 5 * BH + 4 * BG);
  STEPS.forEach((st, i) => {
    const r = stepBox(i), hi = st.n === 5, name = `step ${st.n}`;
    box(s, name, r, hi ? { color: C.mari, w: 2.2 } : {});
    lab(s, 40, r[1] + 37, String(st.n), { size: 22, bold: true, color: hi ? C.amber : C.text, within: name });
    lab(s, 66, r[1] + 23, st.a, { size: 13, anchor: 'start', bold: true, color: hi ? C.amber : C.text, within: name });
    lab(s, 66, r[1] + 42, st.b, { size: 11.5, anchor: 'start', color: C.slate, within: name });
    lab(s, 334, r[1] + 23, st.where, { size: 10, anchor: 'end', color: hi ? C.amber : C.faint, within: name });
    if (i < 4) s.vec(180, r[3] + 3, 180, r[3] + BG - 3, { color: C.ink, w: 1.8 });
  });
  return s;
}
function check141(): Check[] {
  const s = draw141();
  return [
    ['Five steps, numbered 1 to 5 in the book\'s order, with the book\'s headings', STEPS.map((t) => t.n).join() === '1,2,3,4,5' && ['Breathing', 'Diffusion at alveoli', 'Transport by blood', 'Diffusion at tissues', 'Cellular respiration'].every((t) => has(s, t))],
    ['Steps 1 to 4 are marked "respiratory system" and step 5 "every cell"', STEPS.filter((t) => t.where === 'respiratory system').map((t) => t.n).join() === '1,2,3,4' && STEPS[4].where === 'every cell' && s.labels.filter((l) => l.text === 'respiratory system').length === 4 && has(s, 'every cell')],
    ['Four arrows join the five boxes in a chain, each box above the next', STEPS.slice(1).every((_, i) => stepBox(i + 1)[1] > stepBox(i)[3]) && (s.svg().match(/<path d="M[^"]*Z" fill="#2E2A24"\/>/g) ?? []).length === 4],
    ['Only the last step (cells use O2 and release CO2) is in the highlight', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length === 1],
    ...layout(s), clean(s),
  ];
}
const fig141: Diagram = { id: 'b11-14-fig-14.1', topic: 0, name: 'Five steps of respiration', cases: [{ chip: 'Five steps', cap: CAP141 }], draw: draw141, check: check141 };

/* ================= Figure 14.2 ================= */
const CAP142 = 'Spirogram showing the lung volumes (TV, IRV, ERV, RV) and the capacities (IC, FRC, VC, TLC). Quiet breathing gives the small waves (tidal volume); a maximal inspiration reaches TLC and a maximal expiration stops at the residual volume.';
const BOOK = { IRV: 3000, TV: 500, ERV: 1100, RV: 1200, IC: 3500, FRC: 2300, VC: 4600, TLC: 5800 };
const GUIDES: [string, number][] = [['TLC', BOOK.TLC], ['tidal peak', BOOK.RV + BOOK.ERV + BOOK.TV], ['end-expiratory', BOOK.RV + BOOK.ERV], ['RV ceiling', BOOK.RV]];
const YB = 382, PPM = 0.058, AX = 34, SX = 110, SK = 0.5;
const Yv = (v: number) => YB - v * PPM;
const Xb = (b: number) => SX + (b - 224) * SK;
const COLS = [212, 250, 288, 326];
type Bar = { name: string; col: number; lo: number; hi: number; value: number; hl?: boolean };
const BARS: Bar[] = [
  { name: 'IRV', col: 0, lo: BOOK.RV + BOOK.ERV + BOOK.TV, hi: BOOK.TLC, value: BOOK.IRV },
  { name: 'TV', col: 0, lo: BOOK.RV + BOOK.ERV, hi: BOOK.RV + BOOK.ERV + BOOK.TV, value: BOOK.TV, hl: true },
  { name: 'ERV', col: 0, lo: BOOK.RV, hi: BOOK.RV + BOOK.ERV, value: BOOK.ERV },
  { name: 'RV', col: 0, lo: 0, hi: BOOK.RV, value: BOOK.RV },
  { name: 'IC', col: 1, lo: BOOK.RV + BOOK.ERV, hi: BOOK.TLC, value: BOOK.IC },
  { name: 'FRC', col: 1, lo: 0, hi: BOOK.RV + BOOK.ERV, value: BOOK.FRC },
  { name: 'VC', col: 2, lo: BOOK.RV, hi: BOOK.TLC, value: BOOK.VC },
  { name: 'TLC', col: 3, lo: 0, hi: BOOK.TLC, value: BOOK.TLC },
];
/** The trace as (book x, mL) points: three quiet breaths, maximal inspiration, plateau at TLC, maximal expiration to RV, back to quiet breathing, three more breaths. */
function wave(b0: number, b1: number, cycles: number): [number, number][] {
  const lo = BOOK.RV + BOOK.ERV, amp = BOOK.TV, n = cycles * 14;
  return Array.from({ length: n + 1 }, (_, i): [number, number] => { const t = i / n; return [b0 + (b1 - b0) * t, lo + (amp / 2) * (1 - Math.cos(2 * Math.PI * cycles * t))]; });
}
const WAVE_A = wave(224, 280, 3), WAVE_B = wave(357, 413, 3);
const BIG: [number, number][] = [[280, 2300], [282, 2800], [300, 5800], [310, 5800], [335, 1200], [345, 1200], [357, 2300]];
const TRACE: [number, number][] = [...WAVE_A, ...BIG.slice(1), ...WAVE_B.slice(1)];
const toXY = (pts: [number, number][]): P[] => pts.map(([b, v]) => [Xb(b), Yv(v)]);
function draw142(): Sketch {
  const s = new Sketch(W, YB + 34);
  lab(s, 8, 16, 'Volume (mL)', { size: 10.5, anchor: 'start', color: C.slate });
  // axes and ticks
  path(s, [[AX, Yv(6000)], [AX, YB], [Xb(413) + 8, YB]], { color: C.slate, w: 1.4 });
  for (let v = 0; v <= 6000; v += 1000) {
    path(s, [[AX - 3, Yv(v)], [AX, Yv(v)]], { color: C.slate, w: 1.2 });
    lab(s, AX - 8, Yv(v) + 3.5, String(v), { size: 9.5, anchor: 'end', color: C.slate });
  }
  lab(s, (SX + Xb(413)) / 2, YB + 24, 'Time', { size: 11, color: C.slate });
  // the guides, each named at its left end
  GUIDES.forEach(([name, v]) => {
    const two = name === 'end-expiratory';
    if (two) {
      lab(s, SX - 8, Yv(v) - 3, 'end-expiratory', { size: 9, anchor: 'end', color: C.slate });
      lab(s, SX - 8, Yv(v) + 8, 'level', { size: 9, anchor: 'end', color: C.slate });
    } else lab(s, SX - 8, Yv(v) + 3, name, { size: 9, anchor: 'end', color: C.slate });
    path(s, [[SX, Yv(v)], [COLS[0], Yv(v)]], { color: C.grey, w: 1.2, dash: '3 3', track: false });
  });
  // the trace: the quiet waves in the highlight, the rest in ink
  path(s, toXY(WAVE_A), { color: C.mari, w: 2.2 });
  path(s, toXY(BIG), { color: C.ink, w: 1.9 });
  path(s, toXY(WAVE_B), { color: C.mari, w: 2.2 });
  // the bars
  BARS.forEach((b) => {
    const x = COLS[b.col], ya = Yv(b.hi), yb = Yv(b.lo), col = b.hl ? C.mari : C.ink;
    path(s, [[x, ya], [x, yb]], { color: col, w: b.hl ? 2.4 : 1.4 });
    path(s, [[x - 2.5, ya], [x + 2.5, ya]], { color: col, w: 1.2 });
    path(s, [[x - 2.5, yb], [x + 2.5, yb]], { color: col, w: 1.2 });
    const mid = (ya + yb) / 2;
    lab(s, x + 7, mid - 3.5, b.name, { size: 9.5, anchor: 'start', bold: true, color: b.hl ? C.amber : C.text });
    lab(s, x + 7, mid + 7.5, String(b.value), { size: 9.5, anchor: 'start', color: b.hl ? C.amber : C.slate });
  });
  return s;
}
function check142(): Check[] {
  const s = draw142();
  const barH = (n: string) => { const b = BARS.find((q) => q.name === n)!; return (Yv(b.lo) - Yv(b.hi)) / PPM; };
  const near = (a: number, b: number) => Math.abs(a - b) < 0.6;
  const vals = TRACE.map((p) => p[1]);
  const quiet = [...WAVE_A, ...WAVE_B].map((p) => p[1]);
  return [
    ['Capacities add up: IC = IRV + TV = 3500, FRC = ERV + RV = 2300, VC = IRV + TV + ERV = 4600, TLC = VC + RV = 5800', BOOK.IRV + BOOK.TV === BOOK.IC && BOOK.ERV + BOOK.RV === BOOK.FRC && BOOK.IRV + BOOK.TV + BOOK.ERV === BOOK.VC && BOOK.VC + BOOK.RV === BOOK.TLC],
    ['Each drawn bar is as long as its printed value (IRV 3000, TV 500, ERV 1100, RV 1200, IC 3500, FRC 2300, VC 4600, TLC 5800 mL)', BARS.every((b) => near(barH(b.name), b.value))],
    ['The four volumes stack end to end from 0 to TLC, and the capacities sit on the same levels', BARS.filter((b) => b.col === 0).every((b, i, a) => i === 0 || b.hi === a[i - 1].lo) && BARS[0].hi === BOOK.TLC && BARS[3].lo === 0 && BARS.find((b) => b.name === 'IC')!.lo === BARS.find((b) => b.name === 'FRC')!.hi],
    ['The trace peaks at TLC (5800), falls to exactly RV (1200) and never lower, and the quiet breaths swing 500 mL (2300 to 2800)', Math.max(...vals) === BOOK.TLC && Math.min(...vals) === BOOK.RV && Math.abs(Math.max(...quiet) - 2800) < 1e-6 && Math.abs(Math.min(...quiet) - 2300) < 1e-6],
    ['Three quiet breaths come before the deep one and three after it', WAVE_A.filter((_, i) => i % 14 === 0 && i > 0).length === 3 && WAVE_B.filter((_, i) => i % 14 === 0 && i > 0).length === 3 && WAVE_A[WAVE_A.length - 1][0] < BIG[2][0] && WAVE_B[0][0] > BIG[BIG.length - 1][0] - 1],
    ['The four guides sit at the book\'s levels: TLC 5800, tidal peak 2800, end-expiratory level 2300, RV ceiling 1200', GUIDES.map((g) => g[1]).join() === '5800,2800,2300,1200' && ['TLC', 'tidal peak', 'end-expiratory', 'level', 'RV ceiling'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig142: Diagram = { id: 'b11-14-fig-14.2', topic: 1, name: 'Spirogram', cases: [{ chip: 'Volumes and capacities', cap: CAP142 }], draw: draw142, check: check142 };

/* ================= Figure 14.3 ================= */
const CAP143_IN = 'Mechanism of breathing. Inspiration (left): the diaphragm contracts and flattens, the ribs move up and out, thoracic volume increases and the pressure in the lungs falls below atmospheric pressure, so air flows in.';
const CAP143_OUT = 'Mechanism of breathing. Expiration (right): the diaphragm relaxes and domes upward, the ribs move down, thoracic volume decreases and the pressure in the lungs rises above atmospheric pressure, so air flows out.';
const PL = '<i>P</i><sub>lungs</sub>', PA = '<i>P</i><sub>atm</sub>';
type Breath = { title: string; air: string; arrow: 'down' | 'up'; sag: number; sternX: number; ribDrop: number; lung: [number, number, number, number]; vol: string; dia: [string, string]; pill: string; sign: '<' | '>' };
const BREATH: Record<'in' | 'out', Breath> = {
  in: { title: 'Inspiration', air: 'Air in', arrow: 'down', sag: 4, sternX: 236, ribDrop: 8, lung: [166, 198, 38, 60], vol: 'increases', dia: ['Diaphragm contracts', '(flattens)'], pill: `${PL} < ${PA}`, sign: '<' },
  out: { title: 'Expiration', air: 'Air out', arrow: 'up', sag: -46, sternX: 230, ribDrop: 22, lung: [166, 200, 28, 38], vol: 'decreases', dia: ['Diaphragm relaxes', '(domes upward)'], pill: `${PL} > ${PA}`, sign: '>' },
};
const BX: Rect = [90, 84, 250, 348], BAR_L = 104, DIA_Y = 298;
/** Thoracic volume as the cavity's height (top of the ribs to the middle of the diaphragm), the width being fixed. */
const cavity = (b: Breath) => DIA_Y + b.sag - 110;
const lungArea = (b: Breath) => Math.PI * b.lung[2] * b.lung[3];
function draw143(c: { mode: 'in' | 'out' }): Sketch {
  const b = BREATH[c.mode], s = new Sketch(W, 396), cx = (BX[0] + BX[2]) / 2;
  lab(s, cx, 22, b.title, { size: 15, bold: true });
  lab(s, cx, 46, b.air, { size: 11, color: C.slate });
  [cx - 30, cx + 30].forEach((x) => (b.arrow === 'down' ? s.vec(x, 54, x, 77, { color: C.ink, w: 1.8 }) : s.vec(x, 77, x, 54, { color: C.ink, w: 1.8 })));
  box(s, 'thorax', BX);
  // vertebral column (left bar) and sternum (right bar)
  path(s, [[BAR_L, 98], [BAR_L, DIA_Y + 2]], { w: 3.4 });
  path(s, [[b.sternX, 108], [b.sternX, 196 + b.ribDrop]], { w: 3.4 });
  // ribs: five arcs from the column to the sternum, steeper when the ribs have moved down
  for (let i = 0; i < 5; i++) {
    const y0 = 114 + i * 19, y1 = y0 + b.ribDrop - (c.mode === 'in' ? 0 : 0);
    const pts: P[] = Array.from({ length: 17 }, (_, k): P => { const t = k / 16; return [BAR_L + (b.sternX - BAR_L) * t, y0 + (y1 - y0) * t - 7 * Math.sin(Math.PI * t)]; });
    path(s, pts, { color: C.slate, w: 1.4 });
  }
  // lung
  ell(s, b.lung[0], b.lung[1], b.lung[2], b.lung[3]);
  // diaphragm (the highlight): flat when contracted, a dome when relaxed
  const dia: P[] = Array.from({ length: 25 }, (_, k): P => { const t = k / 24; return [BAR_L + 4 + (b.sternX + 6 - BAR_L - 4) * t, DIA_Y - (c.mode === 'in' ? -b.sag : -b.sag) * 0 + b.sag * Math.sin(Math.PI * t)]; });
  path(s, dia, { color: C.mari, w: 3 });
  lab(s, cx + 2, 324, b.dia[0], { size: 11, color: C.amber, within: 'thorax' });
  lab(s, cx + 2, 337, b.dia[1], { size: 11, color: C.amber, within: 'thorax' });
  // names (tags) and the thoracic-volume arrow
  const rib1 = 114 + 19 + b.ribDrop * 0.12 - 7 * Math.sin(Math.PI * 0.12);
  s.tag(8, 96, 'Ribs', BAR_L + 14, rib1, { bare: false });
  s.tag(8, 176, 'Lung', b.lung[0] - b.lung[2], b.lung[1] - 4);
  s.tag(262, 58, 'Sternum', b.sternX, 112);
  const top = 112, bot = DIA_Y + b.sag;
  path(s, [[272, top], [272, bot]], { color: C.ink, w: 1.5 });
  s.vec(272, (top + bot) / 2, 272, top, { color: C.ink, w: 1.5 });
  s.vec(272, (top + bot) / 2, 272, bot, { color: C.ink, w: 1.5 });
  ['Thoracic', 'volume', b.vol].forEach((t, i) => lab(s, 282, (top + bot) / 2 - 11 + i * 14, t, { size: 11, anchor: 'start', color: C.slate }));
  pill(s, b.pill, { size: 14 });
  return s;
}
function check143(c: { mode: 'in' | 'out' }): Check[] {
  const s = draw143(c), me = BREATH[c.mode], other = BREATH[c.mode === 'in' ? 'out' : 'in'];
  const grows = cavity(me) > cavity(other) && lungArea(me) > lungArea(other);
  const inhale = c.mode === 'in';
  return [
    [inhale ? 'Inspiration: the thoracic cavity (diaphragm flattened) and the lung are larger than in expiration' : 'Expiration: the thoracic cavity (diaphragm domed up) and the lung are smaller than in inspiration', inhale ? grows : !grows],
    [inhale ? 'Volume up means pressure down (Boyle): the pill reads P_lungs < P_atm, and air flows in, down the gradient' : 'Volume down means pressure up (Boyle): the pill reads P_lungs > P_atm, and air flows out, down the gradient', (me.sign === '<') === inhale && (me.arrow === 'down') === inhale],
    ['The diaphragm is flat when contracted (no rise above its edges) and domes upward when relaxed', inhale ? Math.abs(me.sag) <= 6 : me.sag < -30],
    ['Ribs sit at a steeper angle after they move down (expiration) than when raised (inspiration)', BREATH.out.ribDrop > BREATH.in.ribDrop],
    ['The book\'s names are on the drawing: Ribs, Lung, Sternum, the air arrows, the diaphragm note and the thoracic-volume note', s.tags.map((t) => t.name).includes('Ribs') && s.tags.map((t) => t.name).includes('Lung') && s.tags.map((t) => t.name).includes('Sternum') && has(s, me.air) && has(s, me.dia[0]) && has(s, me.dia[1]) && has(s, me.vol) && has(s, me.title)],
    ...layout(s), clean(s),
  ];
}
const fig143: Diagram = {
  id: 'b11-14-fig-14.3', topic: 1, name: 'Mechanism of breathing',
  cases: [{ chip: 'Inspiration', mode: 'in', cap: CAP143_IN }, { chip: 'Expiration', mode: 'out', cap: CAP143_OUT }],
  draw: draw143, check: check143,
};

/* ================= Figure 14.4 ================= */
const CAP144_1 = 'Partial pressures (mmHg) and direction of diffusion. (1) Alveolus and blood: O<sub>2</sub> diffuses into the blood (<i>p</i>O<sub>2</sub> 104 → 40) and CO<sub>2</sub> out of it (<i>p</i>CO<sub>2</sub> 45 → 40). Every gas moves down its own partial-pressure gradient.';
const CAP144_2 = 'Partial pressures (mmHg) and direction of diffusion. (2) Blood and tissue: O<sub>2</sub> moves into the tissue (<i>p</i>O<sub>2</sub> 95 → 40) and CO<sub>2</sub> into the blood (<i>p</i>CO<sub>2</sub> 45 → 40). Every gas moves down its own partial-pressure gradient.';
const CAP144_3 = 'Partial pressures (mmHg) and direction of diffusion. (3) Haemoglobin: each molecule has four haem sites that load O<sub>2</sub> in the lungs and unload it at the tissues.';
type Side = { name: string; shape: 'ell' | 'rect'; pO2: number; pCO2: number };
const PARTS: Record<number, { title: string; L: Side; R: Side }> = {
  1: { title: 'Alveolus ↔ Capillary', L: { name: 'Alveolus', shape: 'ell', pO2: 104, pCO2: 40 }, R: { name: 'Blood', shape: 'rect', pO2: 40, pCO2: 45 } },
  2: { title: 'Capillary ↔ Tissue', L: { name: 'Blood', shape: 'rect', pO2: 95, pCO2: 40 }, R: { name: 'Tissue', shape: 'ell', pO2: 40, pCO2: 45 } },
};
const pOf = (g: 'O2' | 'CO2', n: number) => `<i>p</i>${g === 'O2' ? sub2 : co2} ${n}`;
/** The way a gas moves: from the side with the higher partial pressure to the lower. */
const flow = (a: number, b: number): 'right' | 'left' => (a > b ? 'right' : 'left');
function drawSide(s: Sketch, side: Side, x0: number, x1: number, name: string) {
  const cy = 130;
  if (side.shape === 'ell') ell(s, (x0 + x1) / 2, cy, (x1 - x0) / 2, 66);
  else box(s, name, [x0, cy - 66, x1, cy + 66]);
  const cx = (x0 + x1) / 2;
  lab(s, cx, cy - 24, side.name, { size: 13, bold: true, within: side.shape === 'rect' ? name : undefined });
  lab(s, cx, cy + 6, pOf('O2', side.pO2), { size: 12.5, within: side.shape === 'rect' ? name : undefined });
  lab(s, cx, cy + 27, pOf('CO2', side.pCO2), { size: 12.5, within: side.shape === 'rect' ? name : undefined });
}
function drawHb(): Sketch {
  const s = new Sketch(W, 362), cx = 180, cy = 178, R = 40, hr = 18, D = 78;
  lab(s, cx, 24, 'Haemoglobin (Hb)', { size: 14, bold: true });
  ell(s, cx, cy, R, R);
  lab(s, cx, cy - 2, 'Globin', { size: 12 });
  lab(s, cx, cy + 13, '(protein)', { size: 11, color: C.slate });
  const dirs: [number, number][] = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  dirs.forEach(([dx, dy]) => {
    const hx = cx + dx * D, hy = cy + dy * D;
    ell(s, hx, hy, hr, hr, { color: C.mari, w: 2.2 });
    lab(s, hx, hy + 3.5, 'Haem', { size: 9.5 });
    const a: P = [hx + dx * hr, hy + dy * hr], z: P = [hx + dx * (hr + 20), hy + dy * (hr + 20)];
    path(s, [a, z], { color: C.ink, w: 1.4 });
    const lx = hx + dx * (hr + 38), ly = hy + dy * (hr + 38);
    lab(s, lx, ly + 4, sub2, { size: 12, color: C.ink });
  });
  lab(s, cx, 334, 'lungs: load up to 4 O<sub>2</sub>', { size: 11, color: C.slate });
  lab(s, cx, 349, 'tissues: unload', { size: 11, color: C.slate });
  return s;
}
function draw144(c: { part: number }): Sketch {
  if (c.part === 3) return drawHb();
  const p = PARTS[c.part], s = new Sketch(W, 272);
  lab(s, 180, 26, p.title, { size: 14, bold: true });
  drawSide(s, p.L, 18, 142, 'left'); drawSide(s, p.R, 218, 342, 'right');
  const o2 = flow(p.L.pO2, p.R.pO2), c2 = flow(p.L.pCO2, p.R.pCO2);
  const arrow = (y: number, d: 'right' | 'left') => (d === 'right' ? s.vec(152, y, 208, y, { color: C.mari, w: 2.4 }) : s.vec(208, y, 152, y, { color: C.mari, w: 2.4 }));
  arrow(108, o2); arrow(152, c2);
  keep(s, [[152, 108], [208, 108]]); keep(s, [[152, 152], [208, 152]]);
  lab(s, 180, 94, sub2, { size: 13, bold: true, color: C.amber });
  lab(s, 180, 176, co2, { size: 13, bold: true, color: C.amber });
  lab(s, 180, 240, 'each gas moves down its own', { size: 11, color: C.slate });
  lab(s, 180, 255, 'partial-pressure gradient', { size: 11, color: C.slate });
  return s;
}
function check144(c: { part: number }): Check[] {
  const s = draw144(c);
  if (c.part === 3) {
    const haem = (s.svg().match(/stroke="#EEA31F"/g) ?? []).length;
    return [
      ['Four haem sites around one globin, each with its own O2 (the book: "four haem sites")', haem === 4 && s.labels.filter((l) => l.text === 'Haem').length === 4 && s.labels.filter((l) => l.text === 'O2').length === 4 && has(s, 'Globin') && has(s, '(protein)')],
      ['The note reads "lungs: load up to 4 O2" and "tissues: unload"', has(s, 'lungs: load up to 4 O2') && has(s, 'tissues: unload')],
      ...layout(s), clean(s),
    ];
  }
  const p = PARTS[c.part], o2 = flow(p.L.pO2, p.R.pO2), c2 = flow(p.L.pCO2, p.R.pCO2);
  const svg = s.svg();
  const heads = (svg.match(/<path d="M[^"]*Z" fill="#EEA31F"\/>/g) ?? []).length;
  const down = (a: number, b: number) => Math.abs(a - b);
  return [
    [c.part === 1 ? 'Part 1 as printed: alveolus pO2 104, pCO2 40; blood pO2 40, pCO2 45 (mmHg)' : 'Part 2 as printed: blood pO2 95, pCO2 40; tissue pO2 40, pCO2 45 (mmHg)', has(s, `pO2 ${p.L.pO2}`) && has(s, `pCO2 ${p.L.pCO2}`) && has(s, `pO2 ${p.R.pO2}`) && has(s, `pCO2 ${p.R.pCO2}`)],
    [c.part === 1 ? 'O2 runs from the alveolus to the blood (104 to 40) and CO2 from the blood to the alveolus (45 to 40)' : 'O2 runs from the blood to the tissue (95 to 40) and CO2 from the tissue to the blood (45 to 40)', o2 === 'right' && c2 === 'left'],
    ['Each arrow points down its own gradient (from the higher partial pressure to the lower)', (o2 === 'right') === (p.L.pO2 > p.R.pO2) && (c2 === 'right') === (p.L.pCO2 > p.R.pCO2) && heads === 2],
    [c.part === 1 ? 'Gradients are 64 mmHg for O2 and 5 mmHg for CO2' : 'Gradients are 55 mmHg for O2 and 5 mmHg for CO2', c.part === 1 ? down(104, 40) === 64 && down(45, 40) === 5 : down(95, 40) === 55 && down(45, 40) === 5],
    ['The book\'s note "each gas moves down its own partial-pressure gradient" and the panel title are on the drawing', has(s, 'each gas moves down its own') && has(s, 'partial-pressure gradient') && has(s, p.title)],
    ...layout(s), clean(s),
  ];
}
const fig144: Diagram = {
  id: 'b11-14-fig-14.4', topic: 2, name: 'Partial pressures and diffusion',
  cases: [{ chip: 'Alveolus and blood', part: 1, cap: CAP144_1 }, { chip: 'Blood and tissue', part: 2, cap: CAP144_2 }, { chip: 'Haemoglobin', part: 3, cap: CAP144_3 }],
  draw: draw144, check: check144,
};

/* ================= Figure 14.5 ================= */
const CAP145 = 'Oxygen–haemoglobin dissociation curve (sigmoid). Right shift (high <i>p</i>CO<sub>2</sub>, low pH, high temperature: the Bohr effect) favours unloading of O<sub>2</sub> at the tissues; left shift (low <i>p</i>CO<sub>2</sub>, high pH, low temperature) favours loading at the lungs.';
const P50 = 26.6, HILL = 2.7, P50_RIGHT = 40, P50_LEFT = 18, P_TISSUE = 40, P_LUNG = 104;
const sat = (p: number, p50: number) => (100 * p ** HILL) / (p50 ** HILL + p ** HILL);
const X5 = (p: number) => 46 + p * 2.7, Y5 = (v: number) => 336 - v * 2.7;
const curve = (p50: number, pmax = 100): P[] => Array.from({ length: 81 }, (_, i): P => { const p = (pmax * i) / 80; return [X5(p), Y5(sat(p, p50))]; });
function draw145(): Sketch {
  const s = new Sketch(W, 408);
  lab(s, 8, 20, '% Saturation of Haemoglobin', { size: 11, anchor: 'start', color: C.slate });
  // axes
  path(s, [[46, Y5(104)], [46, Y5(0)], [X5(110), Y5(0)]], { color: C.slate, w: 1.4 });
  for (let v = 0; v <= 100; v += 20) { path(s, [[43, Y5(v)], [46, Y5(v)]], { color: C.slate, w: 1.2 }); lab(s, 38, Y5(v) + 3.5, String(v), { size: 9.5, anchor: 'end', color: C.slate }); }
  for (let p = 0; p <= 100; p += 20) { path(s, [[X5(p), Y5(0)], [X5(p), Y5(0) + 3]], { color: C.slate, w: 1.2 }); lab(s, X5(p), Y5(0) + 15, String(p), { size: 9.5, color: C.slate }); }
  lab(s, (46 + X5(110)) / 2, Y5(0) + 56, 'Partial Pressure of O<sub>2</sub> (mmHg)', { size: 11, color: C.slate });
  // guides (dotted grey): 50 % across, P50 down to its label, tissues and lungs down to the axis
  const dots = (a: P, b: P) => path(s, [a, b], { color: C.grey, w: 1.4, dash: '1.5 3.5', track: false });
  dots([46, Y5(50)], [X5(P50_RIGHT), Y5(50)]);
  dots([X5(P50), Y5(50)], [X5(P50), Y5(0) + 24]);
  dots([X5(P_TISSUE), Y5(sat(P_TISSUE, P50))], [X5(P_TISSUE), Y5(0)]);
  dots([X5(P_LUNG), Y5(sat(P_LUNG, P50))], [X5(P_LUNG), Y5(0)]);
  // the curves
  path(s, curve(P50_LEFT), { color: C.ink, w: 1.7, dash: '6 4' });
  path(s, curve(P50_RIGHT), { color: C.ink, w: 1.7, dash: '6 4' });
  path(s, curve(P50, P_LUNG), { color: C.mari, w: 2.8 });
  s.dot(X5(P50), Y5(50), 3.4); s.dot(X5(P_TISSUE), Y5(sat(P_TISSUE, P50)), 3.4); s.dot(X5(P_LUNG), Y5(sat(P_LUNG, P50)), 3.4);
  // names
  lab(s, X5(P50) , Y5(0) + 38, 'P<sub>50</sub> = 26.6 mmHg', { size: 11, bold: true, color: C.amber });
  lab(s, 226, 214, 'Normal', { size: 11.5, bold: true, color: C.amber });
  leader(s, [226, 196], [X5(60), Y5(sat(60, P50))], true);
  ['Left shift:', 'low <i>p</i>CO<sub>2</sub>, high pH,', 'low temperature', '(favours loading)'].forEach((t, i) => lab(s, 50, 70 + i * 11.5, t, { size: 9.5, anchor: 'start', color: C.text }));
  leader(s, [66, 114], [X5(15.5), Y5(sat(15.5, P50_LEFT))]);
  ['Right shift:', 'high <i>p</i>CO<sub>2</sub>, low pH,', 'high temperature', '(Bohr effect:', 'favours unloading)'].forEach((t, i) => lab(s, 262, 262 + i * 12.5, t, { size: 10, anchor: 'start', color: C.text }));
  leader(s, [268, 246], [X5(70), Y5(sat(70, P50_RIGHT))]);
  ['Lungs', `(<i>p</i>${sub2} = 104 mmHg)`].forEach((t, i) => lab(s, 262, 150 + i * 12.5, t, { size: 10, anchor: 'start', color: C.text }));
  leader(s, [296, 140], [X5(P_LUNG), Y5(sat(P_LUNG, P50))]);
  ['Tissues', `(<i>p</i>${sub2} = 40 mmHg)`].forEach((t, i) => lab(s, 176, 246 + i * 12.5, t, { size: 10, anchor: 'start', color: C.text }));
  leader(s, [196, 234], [X5(P_TISSUE), Y5(sat(P_TISSUE, P50))]);
  return s;
}
function check145(): Check[] {
  const s = draw145();
  const ps = Array.from({ length: 201 }, (_, i) => i * 0.5), ss = ps.map((p) => sat(p, P50));
  const slope = ss.slice(1).map((v, i) => v - ss[i]);
  const peak = slope.indexOf(Math.max(...slope));
  const mono = (arr: number[]) => arr.every((v, i) => i === 0 || v >= arr[i - 1]);
  const pts = (m: number) => Array.from({ length: 100 }, (_, i) => i + 1).every((p) => (m > 0 ? sat(p, P50_RIGHT) < sat(p, P50) && sat(p, P50) < sat(p, P50_LEFT) : true));
  return [
    ['P50 = 26.6 mmHg: the normal curve is exactly 50 % saturated there', Math.abs(sat(P50, P50) - 50) < 1e-9 && has(s, 'P50 = 26.6 mmHg')],
    ['The normal curve is sigmoid: rising, with its steepest part near P50 (between 15 and 35 mmHg), flattening at the top', mono(ss) && ps[peak] > 15 && ps[peak] < 35 && ss[ss.length - 1] > 97],
    ['At the tissues (pO2 40) the normal curve is about 75 %; at the lungs (pO2 104) about 97 to 98 %', sat(P_TISSUE, P50) > 73 && sat(P_TISSUE, P50) < 78 && sat(P_LUNG, P50) > 96.5 && sat(P_LUNG, P50) < 98.5],
    ['The right shift (Bohr effect) lies below the normal curve everywhere, and the left shift above it: P50 rises to the right and falls to the left', P50_RIGHT > P50 && P50_LEFT < P50 && pts(1)],
    ['The drawn P50 dot is at 50 % and at pO2 26.6 on the drawn axes', Math.abs(Y5(50) - 201) < 1e-9 && Math.abs((X5(P50) - 46) / 2.7 - P50) < 1e-9],
    ['Every note the book prints is on the drawing: Normal, Left shift, Right shift (Bohr effect), Lungs, Tissues, P50 and both axis names', ['Normal', 'Left shift:', 'Right shift:', '(Bohr effect:', 'Lungs', 'Tissues', '% Saturation of Haemoglobin', 'Partial Pressure of O2 (mmHg)', '(favours loading)', 'favours unloading)'].every((t) => has(s, t))],
    ...layout(s), clean(s),
  ];
}
const fig145: Diagram = { id: 'b11-14-fig-14.5', topic: 2, name: 'Oxygen–haemoglobin dissociation curve', cases: [{ chip: 'Sigmoid curve', cap: CAP145 }], draw: draw145, check: check145 };

/* ================= Figure 14.6 ================= */
const CAP146 = 'Respiratory centres in the brainstem: the pneumotaxic centre (pons), and the respiratory rhythm centre and chemosensitive area (medulla). Signals from the aortic arch and carotid artery also reach the rhythm centre. Regulation responds chiefly to CO<sub>2</sub> and H<sup>+</sup>, not to O<sub>2</sub>.';
const MED: [number, number, number] = [155, 240, 40];
const MRY = 28;
function draw146(): Sketch {
  const s = new Sketch(W, 436);
  lab(s, 180, 24, 'Respiratory centres in the brainstem', { size: 14, bold: true });
  ell(s, 190, 98, 105, 42);
  lab(s, 190, 102, 'Cerebrum', { size: 12, color: C.slate });
  ell(s, 155, 182, 34, 19);
  lab(s, 155, 186, 'Pons', { size: 12, bold: true });
  ell(s, 243, 186, 36, 24);
  lab(s, 243, 190, 'Cerebellum', { size: 11, color: C.slate });
  ell(s, MED[0], MED[1], MED[2], MRY, { color: C.mari, w: 2.4 });
  lab(s, MED[0], MED[1] - 2, 'Medulla', { size: 11, bold: true, color: C.amber });
  lab(s, MED[0], MED[1] + 11, 'oblongata', { size: 11, bold: true, color: C.amber });
  path(s, [[142, 267], [142, 338], [168, 338], [168, 267]], { w: 1.7 });
  // vessels
  path(s, [[292, 246], [304, 258], [304, 331]], { color: C.ink, w: 3.4 });
  const arch: P[] = Array.from({ length: 25 }, (_, k): P => { const a = Math.PI + (Math.PI * k) / 24; return [312 + 28 * Math.cos(a), 358 + 28 * Math.sin(a)]; });
  path(s, [[284, 386], [284, 358], ...arch.slice(1, -1), [340, 358], [340, 386]], { color: C.ink, w: 3.4 });
  // signals from the carotid to the rhythm centre (dashed)
  s.vec(292, 246, MED[0] + MED[2] + 5, MED[1] + 2, { color: C.slate, w: 1.6, dash: true });
  keep(s, [[292, 246], [MED[0] + MED[2] + 5, MED[1] + 2]]);
  lab(s, 243, 270, `${co2}, H<sup>+</sup> signals`, { size: 10, color: C.slate });
  lab(s, 243, 283, 'to the rhythm centre', { size: 10, color: C.slate });
  // descriptions of the centres (left) with leaders
  ['Pneumotaxic centre', '(reduces inspiration', 'duration)'].forEach((t, i) => lab(s, 8, 168 + i * 13, t, { size: 10, anchor: 'start', color: C.text }));
  leader(s, [112, 166], [131, 169]);
  ['Respiratory rhythm', 'centre (primary)'].forEach((t, i) => lab(s, 8, 226 + i * 13, t, { size: 10, anchor: 'start', color: C.amber }));
  leader(s, [100, 234], [MED[0] - MED[2], MED[1]], true);
  ['Chemosensitive area', `(${co2} / H<sup>+</sup> sensitive)`].forEach((t, i) => lab(s, 8, 272 + i * 13, t, { size: 10, anchor: 'start', color: C.text }));
  leader(s, [116, 264], [MED[0] - 30, MED[1] + 18.5]);
  // names with leaders
  s.tag(8, 312, 'Spinal cord', 142, 322, { bare: false });
  s.tag(186, 300, 'Carotid artery', 304, 311);
  s.tag(180, 347, 'Aortic arch', 284, 358);
  pill(s, `Regulation responds chiefly to ${co2} / H<sup>+</sup>, not to ${sub2}`, { size: 12 });
  return s;
}
function check146(): Check[] {
  const s = draw146();
  const names = ['Cerebrum', 'Pons', 'Cerebellum', 'Medulla', 'oblongata', 'Pneumotaxic centre', '(reduces inspiration', 'duration)', 'Respiratory rhythm', 'centre (primary)', 'Chemosensitive area', '(CO2 / H+ sensitive)', 'CO2, H+ signals', 'to the rhythm centre'];
  const tagNames = s.tags.map((t) => t.name);
  return [
    ['Every structure the book draws is here: cerebrum, pons, cerebellum, medulla oblongata, spinal cord, carotid artery, aortic arch', names.slice(0, 5).every((t) => has(s, t)) && ['Spinal cord', 'Carotid artery', 'Aortic arch'].every((t) => tagNames.includes(t))],
    ['The book\'s descriptions are on it word for word: pneumotaxic centre (reduces inspiration duration), respiratory rhythm centre (primary), chemosensitive area (CO2 / H+ sensitive), CO2, H+ signals to the rhythm centre', names.slice(5).every((t) => has(s, t))],
    ['The book\'s note is the one result pill: "Regulation responds chiefly to CO2 / H+, not to O2"', tagNames.includes('Regulation responds chiefly to CO2 / H+, not to O2')],
    ['The pons lies above the medulla, the medulla above the spinal cord, and the cerebellum beside the pons (brainstem order, top to bottom)', 182 + 19 < MED[1] - MRY + 12 && MED[1] < 338 && 243 - 36 > 155 + 34],
    ['The medulla (rhythm centre, chemosensitive area) is the highlight; the pons keeps its ink outline', (s.svg().match(/stroke="#EEA31F"/g) ?? []).length >= 1],
    ...layout(s), clean(s),
  ];
}
const fig146: Diagram = { id: 'b11-14-fig-14.6', topic: 3, name: 'Respiratory centres in the brainstem', cases: [{ chip: 'Brainstem', cap: CAP146 }], draw: draw146, check: check146 };

export const DIAGRAMS_BIOLOGY_11_14: Diagram[] = [fig141, fig142, fig143, fig144, fig145, fig146];
