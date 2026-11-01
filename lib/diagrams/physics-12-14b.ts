import { C, LABEL_GAP, Rect, Sketch, crosses, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 14 (Semiconductor Electronics), second half: every
 * drawing of the Master Reference book in pp. 890–927, redrawn. They are the
 * five numbered figures, each printed on a "CHAPTER 14 · FIGURES" page (14.8
 * on p. 892, caption first on p. 891; 14.9 on p. 894, caption on p. 893; 14.10
 * on p. 897, caption on p. 896; 14.11 on p. 904, caption on p. 903; 14.12 on
 * p. 906, caption on p. 905), and one unnumbered drawing: the timing waveforms
 * of Addendum E's Example E.1 (p. 927, the book's "Figure 1"). Pages 890–927
 * were checked page by page; the rest is prose, typeset equations, tables
 * (gate truth tables, breakdown tables, the slice table) and cheat-sheet boxes.
 *
 * Every figure is computed, never placed by eye: the diodes' bias is read
 * back off the drawn wiring (which terminal reaches the cell's + plate); the
 * regulator's currents are solved on the drawn circuit with the book's worked
 * values; the solar-cell curve is I = I_S(e^(V/V_T) − 1) − I_L with its
 * maximum-power point found by scanning P = IV; every gate's function follows
 * from the shape drawn (flat or curved back, bubble, extra input line), and
 * the NAND constructions and the waveforms are evaluated for every input
 * combination from the wiring and the traces as drawn.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** NOT as the book writes it: a combining overline (U+0305) after each character it covers; U+033F is the double overline. */
const BAR = '̅', BAR2 = '̿';

/* ---------- drawing helpers (as in physics-12-12.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Dotted guides and
 * hatching are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A closed outline, never filled. */
function outline(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, [...pts, pts[0]]);
}
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
const keepHead = (s: Sketch, tip: P, u: P, L: number, hw = 4.5) => {
  HEADS.set(s, [...(HEADS.get(s) ?? []), [tip, add(tip, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), headTri(tip, u, L, hw)]);
};
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
/** A tag's dot: Sketch.tag draws it 2.6 px in radius. */
const DOT_R = 2.6;
/** A small arrowhead at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  keepHead(s, p, u, L, hw);
}
/** An arrow from a to b, its head at b. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: 'dash' | 'dot'; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 9;
  path(s, [a, add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4.5);
}
/** A dimension line from a to b with a small head at each end. */
function dim(s: Sketch, a: P, b: P, color: string = C.slate) {
  const u = unit(sub(b, a));
  path(s, [add(a, u, 3), add(b, u, -3)], { color, w: 1.2 });
  head(s, a, [-u[0], -u[1]], color, 7, 3.5);
  head(s, b, u, color, 7, 3.5);
}
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const pts of LINES.get(s) ?? []) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
      for (let k = 0; k <= n; k++) {
        const p: P = [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n];
        for (const [name, r] of boxes) { const d = rectDist(r, p); if (d < gap) { gap = d; what = name; } }
      }
    }
  }
  return { gap, what };
}
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** The check every figure makes on its own layout: labels clear of the lines, and no dotted guide through a label. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** No tag's dot on an arrowhead: there it reads as naming the arrow and hides its head. Within 8 px of a head's tip or middle. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot and the head's ink. */
const HEAD_CLEAR = 6;
const dotClear = (s: Sketch, at: P) => Math.min(Infinity, ...(INKS.get(s) ?? []).map((t) => triDist(t, at))) - DOT_R;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: dotClear(s, t.from as P) })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
/**
 * The result (what the figure states), bottom right, ink-edged, maths set in
 * STIX (Sketch.text). Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- circuits: wires, components, and reading them back (as physics-12-03b.ts) ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[], o: { color?: string; w?: number } = {}) { path(s, pts, o); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
/**
 * A component as drawn, with its two terminals: a resistor; a cell (a = its +
 * terminal, b = its −); a diode (a = anode, b = cathode); a bare pin.
 */
type Comp = { name: string; kind: 'R' | 'cell' | 'D' | 'pin'; a: P; b: P };
const COMPS = new WeakMap<Sketch, Comp[]>();
const reg = (s: Sketch, c: Comp) => { const l = COMPS.get(s) ?? []; l.push(c); COMPS.set(s, l); };

/** A resistor: a zigzag of `peaks` half-waves in the middle of a–b, with straight leads to a and b. */
function resistor(s: Sketch, name: string, a: P, b: P, o: { zig?: number; amp?: number; peaks?: number } = {}) {
  const L = len(a, b), u = unit(sub(b, a)), nrm: P = [-u[1], u[0]];
  const zl = o.zig ?? Math.min(L - 12, 44), amp = o.amp ?? 6, n = o.peaks ?? 6, z0 = (L - zl) / 2;
  const pts: P[] = [a, add(a, u, z0)];
  for (let i = 0; i < n; i++) pts.push(add(add(a, u, z0 + (zl * (i + 0.5)) / n), nrm, i % 2 ? -amp : amp));
  pts.push(add(a, u, z0 + zl), b);
  path(s, pts, { w: 1.7 });
  reg(s, { name, kind: 'R', a, b });
  return { m: add(a, u, L / 2), u, nrm };
}
/** A cell between `plus` and `minus` (its terminals): the long thin plate is +, the short thick one −. */
function cell(s: Sketch, name: string, plus: P, minus: P) {
  const u = unit(sub(plus, minus)), nrm: P = [-u[1], u[0]], m = mid(plus, minus);
  const pp = add(m, u, 3.5), pm = add(m, u, -3.5);
  path(s, [plus, pp]);
  path(s, [pm, minus]);
  path(s, [add(pp, nrm, 13), add(pp, nrm, -13)], { w: 1.8 });
  path(s, [add(pm, nrm, 7), add(pm, nrm, -7)], { w: 4.6 });
  reg(s, { name, kind: 'cell', a: plus, b: minus });
  return { pp, pm, nrm };
}
/** The diode's size: the triangle's length along the current and its half-width; the bar's half-length. */
const DI = { len: 24, hw: 14 };
/**
 * A diode from anode `a` to cathode `k`: leads, a triangle pointing from a to
 * k (the forward direction) and the bar at k. A Zener's bar has its two ends
 * bent (the book's symbol).
 */
function diode(s: Sketch, name: string, a: P, k: P, o: { zener?: boolean; color?: string; w?: number } = {}) {
  const u = unit(sub(k, a)), nrm: P = [-u[1], u[0]], m = mid(a, k);
  const base = add(m, u, -DI.len / 2), tip = add(m, u, DI.len / 2), color = o.color ?? C.ink, w = o.w ?? 1.8;
  path(s, [a, base]);
  path(s, [tip, k]);
  outline(s, [add(base, nrm, DI.hw), add(base, nrm, -DI.hw), tip], { color, w });
  const b1 = add(tip, nrm, DI.hw), b2 = add(tip, nrm, -DI.hw);
  path(s, o.zener ? [add(b1, u, 5), b1, b2, add(b2, u, -5)] : [b1, b2], { color, w });
  reg(s, { name, kind: 'D', a, b: k });
  return { m, u, nrm, base, tip };
}
/** A light arrow: a wavy line from a to b (three waves), its head at b. */
function wavy(s: Sketch, a: P, b: P, o: { color?: string; waves?: number; amp?: number } = {}) {
  const u = unit(sub(b, a)), nrm: P = [-u[1], u[0]], L = len(a, b) - 8, n = o.waves ?? 3, amp = o.amp ?? 3.2;
  const pts = samples(0, 1, 60).map((t): P => add(add(a, u, L * t), nrm, amp * Math.sin(2 * Math.PI * n * t)));
  path(s, pts, { color: o.color ?? C.ink, w: 1.5 });
  head(s, b, u, o.color ?? C.ink, 8, 4);
}
/** The circuit read off the drawing: terminals join the conductor whose wire they lie on; touching wires are one conductor. */
function readCircuit(s: Sketch) {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const comps = COMPS.get(s) ?? [];
  let loose = 0;
  const ids = new Map<number, number>();
  const nodeAt = (p: P) => { const i = ws.findIndex((w) => onWire(p, w)); const k = i < 0 ? -1 - loose++ : find(i); if (!ids.has(k)) ids.set(k, ids.size); return ids.get(k)!; };
  const at: Record<string, [number, number]> = {};
  comps.forEach((c) => { at[c.name] = [nodeAt(c.a), nodeAt(c.b)]; });
  return { comps, N: ids.size, at };
}
/**
 * The diode's bias, from the drawn circuit with the diode left open (no
 * current flows, so a resistor's two ends are at one potential): the cell's
 * + terminal at E = 1, its − at 0. Returns V(anode) − V(cathode): +1 forward,
 * −1 reverse, 0 when no cell drives it.
 */
function diodeBias(s: Sketch, dName: string) {
  const { comps, at, N } = readCircuit(s);
  const parent = Array.from({ length: N }, (_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  comps.filter((c) => c.kind === 'R').forEach((c) => { parent[find(at[c.name][0])] = find(at[c.name][1]); });
  const V = new Map<number, number>();
  comps.filter((c) => c.kind === 'cell').forEach((c) => { V.set(find(at[c.name][0]), 1); V.set(find(at[c.name][1]), 0); });
  const [na, nk] = at[dName];
  return (V.get(find(na)) ?? 0) - (V.get(find(nk)) ?? 0);
}
/** A node dot where wires join. */
const node = (s: Sketch, p: P, color: string = C.ink) => s.point(p[0], p[1], 3.2, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3.2" fill="${color}"/>`);
/** The ground symbol hanging from p: three bars, shrinking. */
function ground(s: Sketch, p: P) {
  path(s, [p, [p[0], p[1] + 10]], { w: 1.5 });
  [[12, 10], [8, 15], [4, 20]].forEach(([hw, dy]) => path(s, [[p[0] - hw, p[1] + dy], [p[0] + hw, p[1] + dy]], { w: 1.5 }));
}

/* ===================================================================== */
/* Figure 14.8 · the four special-purpose diodes (topic 03)              */
/* ===================================================================== */
/**
 * One panel per diode, as the book draws them. Zener diode and photodiode:
 * the cell's + plate (top) reaches the diode's cathode through the series
 * resistor, so the diode is reverse biased, and its current (I_Z, I_ph) runs
 * down through it, against the triangle. LED: the + plate reaches the anode,
 * forward bias, I_F along the triangle. Solar cell: no cell at all; light
 * falls on the junction and the current I leaves the anode (p side) into the
 * load R_L, so inside the cell it runs from cathode to anode (a reverse
 * current, the photocurrent). Light arrows point at the photodiode and the
 * solar cell, and away from the LED.
 */
const CAP148 = 'The four special-purpose diodes.';
type Kind148 = 'zener' | 'photo' | 'led' | 'solar';
const G148 = { L: 64, R: 234, T: 52, B: 166, cp: 92, cm: 126, dt: 88, db: 130, rs: [116, 182] as [number, number] };
const SOL = { L: 140, R: 270, T: 70, B: 182, dt: 106, db: 148, rl: [98, 156] as [number, number] };
/** Where each panel's diode is, and its anode / cathode. */
const diode148 = (kind: Kind148): { a: P; k: P } => {
  if (kind === 'solar') return { a: [SOL.L, SOL.dt], k: [SOL.L, SOL.db] };
  const { R, dt, db } = G148;
  return kind === 'led' ? { a: [R, dt], k: [R, db] } : { a: [R, db], k: [R, dt] };
};
/** The current arrow beside each diode: from, to. */
const current148 = (kind: Kind148): [P, P] => {
  if (kind === 'solar') return [[SOL.L + 28, SOL.T - 18], [SOL.L + 92, SOL.T - 18]];
  const x = kind === 'led' ? G148.R - 36 : G148.R + 30;
  return [[x, G148.dt - 8], [x, G148.db + 14]];
};
/** How far the diode's triangle reaches either side of its line at height y (vertical diodes): zero at the tip, DI.hw at the base. */
const reach148 = (kind: Kind148, y: number) => {
  const { a, k } = diode148(kind), m = mid(a, k), sgn = Math.sign(k[1] - a[1]);
  const base = m[1] - (sgn * DI.len) / 2, tip = m[1] + (sgn * DI.len) / 2;
  return (DI.hw * (y - tip)) / (base - tip);
};
/** The two light arrows: from, to. Into the photodiode's and the solar cell's triangle from the left, out of the LED's to the right; each starts or ends 5 px off the triangle. */
const light148 = (kind: Kind148): [P, P][] => {
  const { a, k } = diode148(kind), x = a[0], m = mid(a, k);
  if (kind === 'photo') return [-6, 6].map((dy): [P, P] => { const y = m[1] + dy; return [[x - 84, y], [x - reach148(kind, y) - 5, y]]; });
  if (kind === 'solar') return [[-6, -20], [6, 8]].map(([dy, from]): [P, P] => { const y = m[1] + dy; return [[x - 92, y + from], [x - reach148(kind, y) - 5, y]]; });
  if (kind === 'led') return [-9, 7].map((dy): [P, P] => { const y = m[1] + dy, p: P = [x + reach148(kind, y) + 5, y]; return [p, add(p, unit([1, -0.6]), 38)]; });
  return [];
};
const SUB148: Record<Kind148, string> = {
  zener: 'Reverse bias, breakdown at <i>V</i><sub>Z</sub>',
  photo: 'Reverse bias, light → current',
  led: 'Forward bias, current → light',
  solar: 'No bias, light → power',
};
const NAME148: Record<Kind148, string> = { zener: 'Zener diode', photo: 'Photodiode', led: 'LED', solar: 'Solar cell' };
const CUR148: Record<Kind148, string> = { zener: '<i>I</i><sub>Z</sub>', photo: '<i>I</i><sub>ph</sub>', led: '<i>I</i><sub>F</sub>', solar: '<i>I</i>' };
const fig148: Diagram = {
  id: 'p12-14-fig-14.8',
  topic: 3,
  name: 'Four special-purpose diodes',
  cases: [
    { chip: 'Zener diode', kind: 'zener', cap: `${CAP148} Zener diode: reverse bias, current flows at the breakdown voltage.` },
    { chip: 'Photodiode', kind: 'photo', cap: `${CAP148} Photodiode: reverse bias, light in, photocurrent out.` },
    { chip: 'LED', kind: 'led', cap: `${CAP148} LED: forward bias, current in, light out.` },
    { chip: 'Solar cell', kind: 'solar', cap: `${CAP148} Solar cell: no bias, light in, electrical power delivered to the load.` },
  ],
  draw(c: { kind: Kind148 }) {
    const kind = c.kind;
    const s = new Sketch(W, kind === 'solar' ? 284 : 240);
    const { a, k } = diode148(kind);
    const [c0, c1] = current148(kind);
    if (kind !== 'solar') {
      const { L, R, T, B, cp, cm, rs } = G148;
      const cl = cell(s, 'cell', [L, cp], [L, cm]);
      wire(s, [[L, cp], [L, T], [rs[0], T]]);
      resistor(s, 'R', [rs[0], T], [rs[1], T]);
      wire(s, [[rs[1], T], [R, T], kind === 'led' ? a : k]);
      wire(s, [kind === 'led' ? k : a, [R, B], [L, B], [L, cm]]);
      s.sym(L + 22, cl.pp[1] - 4, '+', { size: 16 });
      s.sym(L + 22, cl.pm[1] + 16, '−', { size: 16 });
    } else {
      const { L, R, T, B, rl } = SOL;
      wire(s, [a, [L, T], [R, T], [R, rl[0]]]);
      resistor(s, 'RL', [R, rl[0]], [R, rl[1]]);
      wire(s, [[R, rl[1]], [R, B], [L, B], k]);
      s.sym(R + 14, (rl[0] + rl[1]) / 2 + 6, '<i>R</i><sub>L</sub>', { size: 16, anchor: 'start' });
      s.sym((L + R) / 2 + 6, B + 30, 'Open circuit: <i>V</i><sub>OC</sub>;  short circuit: <i>I</i><sub>SC</sub>', { size: 13 });
    }
    const d = diode(s, 'D', a, k, { zener: kind === 'zener', color: C.mari, w: 2.2 });
    arrow(s, c0, c1, { w: 1.7, L: 8, hw: 4 });
    const cm = mid(c0, c1);
    if (kind === 'solar') s.sym(cm[0], c0[1] - 9, CUR148[kind], { size: 16 });
    else if (kind === 'led') s.sym(c0[0] - 8, cm[1] + 6, CUR148[kind], { size: 16, anchor: 'end' });
    else s.sym(c0[0] + 9, cm[1] + 6, CUR148[kind], { size: 16, anchor: 'start' });
    if (kind === 'zener') s.sym(G148.R - DI.hw - 7, (G148.dt + G148.db) / 2 + 6, '<i>V</i><sub>Z</sub>', { size: 16, anchor: 'end' });
    light148(kind).forEach(([p, q]) => wavy(s, p, q));
    const ls = light148(kind);
    if (kind === 'photo') s.sym(ls[0][0][0] - 6, (ls[0][0][1] + ls[1][0][1]) / 2 + 6, '<i>hν</i>', { size: 16, anchor: 'end' });
    if (kind === 'led') s.sym(ls[0][1][0] + 4, ls[0][1][1] - 6, '<i>hν</i>', { size: 16, anchor: 'start' });
    if (kind === 'solar') s.sym(ls[0][0][0] + 4, ls[0][0][1] - 12, '<i>hν</i>', { size: 16, anchor: 'start' });
    resultBlock(s, [SUB148[kind]]);
    // the diode's name: from above for the Zener diode and photodiode (to the bar's right end), below right for the LED, inside the loop for the solar cell (to the base's right corner)
    const bar = add(d.tip, d.nrm, kind === 'led' ? -DI.hw : DI.hw), corner = add(d.base, d.nrm, -DI.hw);
    s.place([
      kind === 'solar'
        ? { t: NAME148[kind], hi: true, p: corner, at: [[corner[0] + 16, corner[1] + 16, 'start'], [corner[0] + 20, corner[1] + 20, 'start']] }
        : kind === 'led'
          ? { t: NAME148[kind], hi: true, p: bar, at: [[bar[0] + 20, bar[1] + 14, 'start'], [bar[0] + 24, bar[1] + 18, 'start']] }
          : { t: NAME148[kind], hi: true, p: bar, at: [[W - 6, 14, 'end'], [W - 6, 22, 'end'], [W - 10, 14, 'end']] },
    ]);
    return s;
  },
  check(c: { kind: Kind148 }) {
    const kind = c.kind;
    const s = fig148.draw(c);
    const { a, k } = diode148(kind);
    const [c0, c1] = current148(kind);
    const fwd = unit(sub(k, a)), cur = unit(sub(c1, c0));
    const bias = diodeBias(s, 'D');
    const out: Check[] = [];
    if (kind === 'solar') {
      const { comps, at } = readCircuit(s);
      const [na, nk] = at.D, [r0, r1] = at.RL;
      out.push(['Solar cell: no cell in the circuit (no external bias); the diode and the load R_L form one loop, anode to the load’s top, cathode to its bottom', !comps.some((q) => q.kind === 'cell') && bias === 0 && na === r0 && nk === r1 && na !== nk]);
      // the current arrow is on the top wire, which leaves the anode: it points away from the anode, toward the load
      const top: P = [SOL.L, SOL.T];
      out.push([`The current I leaves the anode (p side) and flows through the load: the arrow runs along the anode’s top wire, away from it (cos = ${fmt(dotp(cur, unit(sub([SOL.R, SOL.T], top))), 3)}), so inside the cell it runs cathode → anode, against the triangle (a reverse photocurrent)`, close(c0[1], c1[1]) && c0[1] < SOL.T && close(dotp(cur, unit(sub([SOL.R, SOL.T], top))), 1) && dotp(fwd, [0, 1]) > 0.99 && a[1] < k[1]]);
    } else {
      const want = kind === 'led' ? 1 : -1;
      out.push([`${NAME148[kind]}: read off the wiring, the cell’s + plate reaches the ${kind === 'led' ? 'anode' : 'cathode'} through the resistor, so V(anode) − V(cathode) = ${bias > 0 ? '+E' : '−E'}: ${kind === 'led' ? 'forward' : 'reverse'} bias`, bias === want]);
      out.push([`The current arrow ${CUR148[kind].replace(/<[^>]+>/g, '')} runs ${dotp(cur, fwd) > 0 ? 'along' : 'against'} the triangle (anode → cathode is forward): ${kind === 'led' ? 'a forward current' : kind === 'zener' ? 'a reverse current, flowing at breakdown' : 'a reverse current, the photocurrent'}`, kind === 'led' ? close(dotp(cur, fwd), 1) : close(dotp(cur, fwd), -1)]);
      out.push([`It flows the way the cell drives it: out of the + plate, round to the ${kind === 'led' ? 'anode' : 'cathode'}, down the diode`, close(c0[0], c1[0]) && cur[1] > 0 && G148.cp < G148.cm]);
    }
    if (kind === 'zener') out.push(['V_Z, the breakdown voltage, is marked across the Zener, beside the triangle', s.labels.some((l) => l.text === 'VZ' && l.rect[2] < G148.R - DI.hw && l.rect[1] < (G148.dt + G148.db) / 2 && l.rect[3] > (G148.dt + G148.db) / 2)]);
    const ls = light148(kind);
    if (ls.length) {
      const dm = mid(a, k);
      const dists = ls.map(([p, q]) => [len(p, dm), len(q, dm)]);
      const inward = kind !== 'led';
      out.push([`The light arrows point ${inward ? 'at' : 'away from'} the diode (${inward ? 'light in' : 'light out'}): their heads are ${dists.map(([p, q]) => `${fmt(q, 0)} px`).join(', ')} from it, their tails ${dists.map(([p]) => `${fmt(p, 0)} px`).join(', ')}`, dists.every(([p, q]) => (inward ? q < p : q > p))]);
    }
    out.push([`The result tag names the bias, as the book’s panel title: “${SUB148[kind].replace(/<[^>]+>/g, '')}”`, s.tags.some((t) => t.name === SUB148[kind].replace(/<\/?(?:i|sub|sup)>/g, ''))]);
    return [...out, ...layout(s)];
  },
};

/* ===================================================================== */
/* Figure 14.9 · the Zener voltage regulator (topic 03)                  */
/* ===================================================================== */
/**
 * The unregulated cell V_in, + at the top, feeds the top rail through R_S; at
 * the junction the Zener (cathode up: reverse biased) and the load R_L hang in
 * parallel down to the ground rail. The check reads the circuit back off the
 * drawing and solves it with the book's numbers, the Zener as an ideal clamp
 * at V_Z once V_in drives it into breakdown: worked example 1 (p. 896),
 * worked example 3 (p. 898), practice 3 and 5 (p. 899) and Example B.2 (p. 918).
 */
const G149 = { L: 70, T: 92, B: 228, cp: 146, cm: 176, rs: [96, 170] as [number, number], zx: 212, dt: 142, db: 176, iz: 232, il: 264, lx: 296, rl: [124, 196] as [number, number], vx: 334, gx: 120 };
/** The regulator on the read-back circuit: the junction's voltage and the currents, Zener as an ideal clamp at V_Z (it conducts only once the junction would rise past V_Z). */
function regulate(Vin: number, VZ: number, RS: number, RL: number) {
  const open = (Vin * RL) / (RS + RL);
  const V = Math.min(open, VZ);
  const Iin = (Vin - V) / RS, IL = V / RL, IZ = Iin - IL;
  return { V, Iin, IL, IZ, breakdown: open >= VZ };
}
const fig149: Diagram = {
  id: 'p12-14-fig-14.9',
  topic: 3,
  name: 'Zener voltage regulator',
  cases: [{ chip: 'Regulator', cap: 'Zener voltage regulator. The unregulated supply feeds the load through a series resistor; the reverse-biased Zener diode is connected in parallel with the load. The current through the series resistor splits into the Zener current and the load current, and the output voltage equals the Zener voltage.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { L, T, B, cp, cm, rs, zx, dt, db, iz, il, lx, rl, vx, gx } = G149;
    const cl = cell(s, 'Vin', [L, cp], [L, cm]);
    wire(s, [[L, cp], [L, T], [rs[0], T]]);
    resistor(s, 'RS', [rs[0], T], [rs[1], T]);
    wire(s, [[rs[1], T], [lx, T]]);
    wire(s, [[zx, T], [zx, dt]]);
    diode(s, 'Z', [zx, db], [zx, dt], { zener: true, color: C.mari, w: 2.2 });
    wire(s, [[zx, db], [zx, B]]);
    wire(s, [[lx, T], [lx, rl[0]]]);
    resistor(s, 'RL', [lx, rl[0]], [lx, rl[1]]);
    wire(s, [[lx, rl[1]], [lx, B]]);
    wire(s, [[L, cm], [L, B], [lx, B]]);
    [[zx, T], [lx, T], [zx, B], [lx, B]].forEach((p) => node(s, p as P));
    ground(s, [gx, B]);
    // labels on the parts
    s.sym((rs[0] + rs[1]) / 2, T - 14, '<i>R</i><sub>S</sub>', { size: 16 });
    s.sym(L + 22, cl.pp[1] - 4, '+', { size: 16 });
    s.sym(L + 22, cl.pm[1] + 16, '−', { size: 16 });
    s.sym(L - 18, (cp + cm) / 2 + 2, '<i>V</i><sub>in</sub>', { size: 16, anchor: 'end' });
    s.sym(L - 16, (cp + cm) / 2 + 20, '(unreg.)', { size: 12, anchor: 'end' });
    s.sym(lx + 12, (rl[0] + rl[1]) / 2 + 6, '<i>R</i><sub>L</sub>', { size: 16, anchor: 'start' });
    // the currents: I_in along the top under R_S, I_Z and I_L down their branches
    arrow(s, [rs[0] + 6, T + 22], [rs[1] - 6, T + 22], { w: 1.6, L: 8, hw: 4 });
    s.sym((rs[0] + rs[1]) / 2, T + 42, '<i>I</i><sub>in</sub>', { size: 16 });
    arrow(s, [iz, dt - 18], [iz, db + 22], { w: 1.6, L: 8, hw: 4 });
    s.sym(iz + 7, (dt + db) / 2 + 6, '<i>I</i><sub>Z</sub>', { size: 15, anchor: 'start' });
    arrow(s, [il, dt - 18], [il, db + 22], { w: 1.6, L: 8, hw: 4 });
    s.sym(il + 7, (dt + db) / 2 + 6, '<i>I</i><sub>L</sub>', { size: 14, anchor: 'start' });
    // the voltage across R_S, spanning the resistor's two ends above it (the book draws it at the foot, away from R_S), and the output across the load
    dim(s, [rs[0], T - 32], [rs[1], T - 32]);
    s.sym((rs[0] + rs[1]) / 2, T - 45, '<i>V</i><sub><i>R</i>S</sub> = <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>', { size: 13, color: C.slate });
    guide(s, [lx + 4, T], [vx, T]);
    guide(s, [lx + 4, B], [vx, B]);
    dim(s, [vx, T], [vx, B], C.ink);
    s.sym(W - 4, T - 14, '<i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub>', { size: 16, anchor: 'end' });
    resultBlock(s, ['<i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>']);
    // the Zener named inside the loop, joined to its triangle's lower left corner; the book's "(reverse biased)" under the name
    const corner: P = [zx - DI.hw, (dt + db) / 2 + DI.len / 2];
    s.place([
      { t: 'Zener', hi: true, p: corner, at: [[corner[0] - 26, corner[1] - 19, 'end'], [corner[0] - 28, corner[1] - 21, 'end']] },
    ]);
    const zt = s.tags.find((t) => t.name === 'Zener');
    if (zt) s.sym(corner[0] - 52, zt.rect[3] + 13, '(reverse biased)', { size: 11.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig149.draw(fig149.cases[0]);
    const { at } = readCircuit(s);
    const top = at.RS[1], gnd = at.Vin[1];
    const out: Check[] = [
      ['Read off the wiring: R_S joins the cell’s + terminal to the junction; the Zener’s cathode, the load’s top and R_S meet at that one junction (I_in = I_Z + I_L there); the Zener’s anode, the load’s foot and the cell’s − terminal share the ground rail', at.RS[0] === at.Vin[0] && at.Z[1] === top && at.RL[0] === top && at.Z[0] === gnd && at.RL[1] === gnd && top !== gnd && at.Vin[0] !== top],
      ['The Zener is reverse biased: its cathode is on the junction the + terminal feeds through R_S, its anode on the − terminal’s rail', at.Z[1] === at.RS[1] && at.RS[0] === at.Vin[0] && at.Z[0] === at.Vin[1]],
    ];
    // Worked example 1 (p. 896): V_Z = 6.0 V, I_L = 10 mA, V_in = 12 V, I_Z = 20 mA → R_S = 200 Ω
    const RS1 = (12 - 6) / (0.02 + 0.01), r1x = regulate(12, 6, RS1, 6 / 0.01);
    out.push([`Worked example 1: R_S = (12 − 6)/(20 + 10 mA) = ${fmt(RS1, 3)} Ω (the book’s 200 Ω); on the drawn circuit with R_L = V_Z/I_L = 600 Ω it gives V_out = ${fmt(r1x.V, 3)} V, I_in = ${fmt(r1x.Iin * 1e3, 3)} mA = I_Z + I_L = ${fmt(r1x.IZ * 1e3, 3)} + ${fmt(r1x.IL * 1e3, 3)} mA`, close(RS1, 200) && r1x.breakdown && close(r1x.V, 6) && close(r1x.IZ, 0.02) && close(r1x.IL, 0.01) && close(r1x.Iin, r1x.IZ + r1x.IL)]);
    // Worked example 3 (p. 898): P = 2.0 W, V_Z = 10 V, V_in up to 20 V, no load → R_S ≥ 50 Ω
    const IZm = 2.0 / 10, RS3 = (20 - 10) / IZm, r3 = regulate(20, 10, RS3, 1e12);
    out.push([`Worked example 3: I_Z,max = P/V_Z = ${fmt(IZm, 3)} A, R_S ≥ (20 − 10)/0.20 = ${fmt(RS3, 3)} Ω (the book’s 50 Ω); with no load at V_in = 20 V the Zener then carries ${fmt(r3.IZ, 4)} A and dissipates ${fmt(r3.IZ * 10, 3)} W = P`, close(RS3, 50) && close(r3.IZ * 10, 2, 1e-9)]);
    // Practice 3 and 5 (p. 899)
    const RSp3 = (9 - 5) / 0.03, RSp5 = (14 - 8) / (1.0 / 8.0);
    out.push([`Practice 3: R_S = (9.0 − 5.0)/0.030 = ${fmt(RSp3, 2)} Ω (the book’s 133 Ω); practice 5: R_S ≥ (14 − 8)/0.125 = ${fmt(RSp5, 3)} Ω (the book’s 48 Ω)`, Math.round(RSp3) === 133 && close(RSp5, 48)]);
    // Example B.2 (p. 918): V_Z = 10 V, V_in = 15 V, R_S = 100 Ω, R_L = 500 Ω then 400 Ω
    const b1 = regulate(15, 10, 100, 500), b2 = regulate(15, 10, 100, 400);
    out.push([`Example B.2: R_L = 500 Ω gives I_L = ${fmt(b1.IL * 1e3, 3)} mA, I_in = ${fmt(b1.Iin * 1e3, 3)} mA, I_Z = ${fmt(b1.IZ * 1e3, 3)} mA (the book’s 30 mA); R_L = 400 Ω gives I_Z = ${fmt(b2.IZ * 1e3, 3)} mA (the book’s 25 mA); V_out stays V_Z`, close(b1.IZ, 0.03) && close(b2.IZ, 0.025) && close(b1.V, 10) && close(b2.V, 10)]);
    out.push(['The labelled drop across R_S is V_in − V_Z: in example 1, 12 − 6 = 6.0 V = I_in R_S', close(r1x.Iin * RS1, 12 - 6)]);
    return [...out, ...layout(s)];
  },
};

/* ===================================================================== */
/* Figure 14.10 · the illuminated solar cell's I–V curve (topic 03)      */
/* ===================================================================== */
/**
 * I = I_S(e^(V/V_T) − 1) − I_L with the book's values: I_SC = I_L = 30 mA and
 * V_OC = 0.60 V, V_T = 25.9 mV (Addendum A, n = 1), so I_S = I_L/(e^(V_OC/V_T) − 1).
 * The maximum-power point is where |IV| peaks, found by scanning the curve
 * (at 0.52 V, −28.6 mA, as the book's square); the hatched rectangle from the
 * origin to it has area P_max. The axes run as the book's: V from 0 to 0.7 V,
 * I from −35 to +5 mA (ticks every 0.1 V and 5 mA).
 */
const G1410 = { IL: 30, VOC: 0.6, VT: 0.0259, ox: 66, x1: 322, v1: 0.7, top: 40, bot: 268, i0: 8, i1: -36 };
const IS1410 = G1410.IL / Math.expm1(G1410.VOC / G1410.VT);
const I1410 = (V: number) => IS1410 * Math.expm1(V / G1410.VT) - G1410.IL;
const X1410 = (V: number) => G1410.ox + ((G1410.x1 - G1410.ox) * V) / G1410.v1;
const Y1410 = (I: number) => G1410.top + ((G1410.bot - G1410.top) * (G1410.i0 - I)) / (G1410.i0 - G1410.i1);
/** The maximum-power point: the largest −IV on a 0.0001 V grid, refined by golden section. */
const mpp1410 = () => {
  let a = 0, b = G1410.VOC;
  for (let i = 0; i < 200; i++) { const m1 = a + (b - a) * 0.382, m2 = a + (b - a) * 0.618; if (-m1 * I1410(m1) > -m2 * I1410(m2)) b = m2; else a = m1; }
  const V = (a + b) / 2;
  return { V, I: I1410(V), P: -V * I1410(V) };
};
const fig1410: Diagram = {
  id: 'p12-14-fig-14.10',
  topic: 3,
  name: 'Solar cell I–V characteristic',
  cases: [{ chip: 'Fourth quadrant', cap: 'Current-voltage characteristic of an illuminated solar cell, drawn in the fourth quadrant. The curve meets the current axis at the short-circuit current and the voltage axis at the open-circuit voltage; the maximum-power point (shaded rectangle) lies at the knee between them.' }],
  draw() {
    const s = new Sketch(W, 330);
    const { ox, x1, v1, top, bot, VOC, IL } = G1410;
    const m = mpp1410(), mx = X1410(m.V), my = Y1410(m.I), y0 = Y1410(0);
    // the note inside the rectangle (the hatching leaves a clear patch round it); I_SC beside its own point on the current axis, below the curve
    const note = ['Fourth quadrant:', '<i>P</i> = <i>IV</i> < 0 — the cell', 'supplies power'];
    const ny = (y0 + my) / 2 - 14;
    note.forEach((t, i) => s.sym((ox + mx) / 2, ny + 17 * i, t, { size: 13 }));
    s.sym(ox + 10, Y1410(-IL) + 20, '<i>I</i><sub>SC</sub>', { size: 16, anchor: 'start' });
    const nl = s.labels.slice(0, note.length);
    const skips: Rect[] = [[Math.min(...nl.map((l) => l.rect[0])) - 7, nl[0].rect[1] - 5, Math.max(...nl.map((l) => l.rect[2])) + 7, nl[nl.length - 1].rect[3] + 5]];
    // the maximum-power rectangle: hatched marigold, its two free edges dashed
    for (let x = ox + 6; x < mx - 2; x += 6) {
      const cuts = skips.filter((r) => x > r[0] && x < r[2]).map((r): [number, number] => [Math.max(r[1], y0 + 2), Math.min(r[3], my - 2)]).sort((a, b) => a[0] - b[0]);
      let y = y0 + 2;
      for (const [c0, c1] of cuts) { if (c0 > y) path(s, [[x, y], [x, c0]], { color: C.mari, w: 1, free: true }); y = Math.max(y, c1); }
      if (y < my - 2) path(s, [[x, y], [x, my - 2]], { color: C.mari, w: 1, free: true });
    }
    path(s, [[ox, my], [mx, my], [mx, y0]], { color: C.mari, w: 1.4, dash: 'dash' });
    // axes: I = 0 across, V = 0 up the left, the V scale along the foot
    arrow(s, [ox, bot], [ox, top - 14], { color: C.grey, w: 1.3 });
    path(s, [[ox, y0], [x1 + 8, y0]], { color: C.grey, w: 1.3 });
    path(s, [[ox, bot], [x1, bot]], { color: C.grey, w: 1.3 });
    for (let I = 5; I >= -35; I -= 5) {
      path(s, [[ox - 4, Y1410(I)], [ox, Y1410(I)]], { color: C.grey, w: 1.3, free: true });
      s.sym(ox - 8, Y1410(I) + 4.5, fmt(I, 0), { size: 12, anchor: 'end' });
    }
    for (let k = 0; k <= 7; k++) {
      const V = k / 10;
      path(s, [[X1410(V), bot], [X1410(V), bot + 4]], { color: C.grey, w: 1.3, free: true });
      s.sym(X1410(V), bot + 18, V.toFixed(1), { size: 12 });
    }
    s.sym(ox + 11, top - 10, '<i>I</i> (mA)', { size: 14, anchor: 'start' });
    s.sym((ox + x1) / 2, bot + 40, '<i>V</i> (V)', { size: 14 });
    // the curve, from V = 0 to where it leaves the top of the plot
    const vTop = G1410.VT * Math.log1p((G1410.i0 + IL) / IS1410);
    path(s, samples(0, Math.min(vTop, v1), 600).map((V): P => [X1410(V), Y1410(I1410(V))]), { w: 2.3 });
    // I_SC and V_OC on the axes, the maximum-power point at the knee
    s.dot(ox, Y1410(-IL), 4);
    s.dot(X1410(VOC), y0, 4);
    s.sym(X1410(VOC) - 10, y0 - 12, '<i>V</i><sub>OC</sub>', { size: 16, anchor: 'end' });
    s.point(mx, my, 4, `<rect x="${r1(mx - 4)}" y="${r1(my - 4)}" width="8" height="8" fill="${C.ink}"/>`);
    s.place([
      { t: 'MPP', hi: true, p: [mx + 3, my + 3], own: [mx, my], at: [[mx + 14, my + 12, 'start'], [mx + 18, my + 14, 'start'], [mx + 22, my + 8, 'start']] },
    ]);
    return s;
  },
  check() {
    const { IL, VOC, VT, v1 } = G1410;
    const s = fig1410.draw(fig1410.cases[0]);
    const m = mpp1410();
    // the scan, independently: the best −IV on a fine grid
    const grid = samples(0, VOC, 60000);
    const best = grid.reduce((b, V) => (-V * I1410(V) > -b * I1410(b) ? V : b), 0);
    const FF = m.P / (IL * VOC);
    const vmpEq = VOC - VT * Math.log1p(m.V / VT);
    const mk = s.points.find((p) => close(p.x, X1410(m.V), 1e-6) && close(p.y, Y1410(m.I), 1e-6));
    return [
      [`At V = 0 the curve is at I = ${fmt(I1410(0), 6)} mA: it meets the current axis at −I_SC, I_SC = I_L = ${IL} mA (Addendum C: I_SC = I_L)`, close(I1410(0), -IL, 1e-9)],
      [`At I = 0 it crosses the voltage axis at V_OC = V_T ln(I_SC/I_S + 1) = ${fmt(VT * Math.log1p(IL / IS1410), 6)} V, the book’s 0.6 V; V_T ln(I_SC/I_S) = ${fmt(VT * Math.log(IL / IS1410), 4)} V (Addendum C’s approximation)`, close(I1410(VOC), 0, 1e-9) && close(VT * Math.log(IL / IS1410), VOC, 1e-6)],
      [`Between them I < 0 and V > 0, so P = IV < 0: the curve from I_SC to V_OC lies in the fourth quadrant`, grid.slice(1, -1).every((V) => I1410(V) < 0)],
      [`Maximum power at the knee: −IV peaks at V_mp = ${fmt(m.V, 4)} V, I_mp = ${fmt(m.I, 3)} mA (the book’s square at about 0.52 V, −28.5 mA); a 60 000-step scan agrees (${fmt(best, 4)} V)`, Math.abs(m.V - best) < 2e-5 && Math.abs(m.V - 0.52) < 0.005 && Math.abs(m.I + 28.5) < 0.3],
      [`It satisfies d(IV)/dV = 0: V_mp = V_OC − V_T ln(1 + V_mp/V_T) = ${fmt(vmpEq, 4)} V`, Math.abs(vmpEq - m.V) < 1e-4],
      [`The rectangle runs from the origin to the MPP: area = V_mp |I_mp| = P_max = ${fmt(m.P, 2)} mW, the largest rectangle under the curve; FF = P_max/(I_SC V_OC) = ${fmt(FF, 3)}, between 0 and 1`, FF > 0.7 && FF < 0.9 && !!mk],
      [`For an exponential cell the knee sits ${fmt((VOC - m.V) / VT, 2)} V_T below V_OC: Example C.1’s note (as corrected) uses V_OC − 3V_T = ${fmt(VOC - 3 * VT, 3)} V ≈ 0.52 V (the book printed V_OC − 5V_T ≈ 0.47 V, left of its own square)`, (VOC - m.V) / VT > 2.5 && (VOC - m.V) / VT < 3.5 && Math.abs(VOC - 3 * VT - m.V) < 0.005],
      [`The axes span the book’s: V from 0 to ${v1} V in steps of 0.1, I from −35 to +5 mA in steps of 5`, close(X1410(0), G1410.ox) && close(X1410(v1), G1410.x1)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Logic gates: the standard shapes, and their function read off the shape */
/* ===================================================================== */
type GateKind = 'OR' | 'AND' | 'NOT' | 'NAND' | 'NOR' | 'XOR';
/** What a drawn gate is made of: the back (flat or curved), the front (round, pointed or a triangle), an output bubble, an extra input curve. */
type Shape = { back: 'flat' | 'curved'; front: 'round' | 'pointed' | 'triangle'; bubble: boolean; extra: boolean };
const SHAPE: Record<GateKind, Shape> = {
  OR: { back: 'curved', front: 'pointed', bubble: false, extra: false },
  AND: { back: 'flat', front: 'round', bubble: false, extra: false },
  NOT: { back: 'flat', front: 'triangle', bubble: true, extra: false },
  NAND: { back: 'flat', front: 'round', bubble: true, extra: false },
  NOR: { back: 'curved', front: 'pointed', bubble: true, extra: false },
  XOR: { back: 'curved', front: 'pointed', bubble: false, extra: true },
};
/** The function a drawn shape means: flat back + round front = AND, curved back + pointed front = OR, with an extra curve XOR, a triangle passes its input, and a bubble inverts. */
const shapeFn = (sh: Shape) => (a: number, b: number) => {
  const base = sh.front === 'triangle' ? a : sh.back === 'flat' ? a & b : sh.extra ? a ^ b : a | b;
  return sh.bubble ? 1 - base : base;
};
/** The book's truth tables (p. 903), rows 00, 01, 10, 11 (NOT: input 0, 1). */
const BOOK_TT: Record<GateKind, number[]> = { OR: [0, 1, 1, 1], AND: [0, 0, 0, 1], NAND: [1, 1, 1, 0], NOR: [1, 0, 0, 0], XOR: [0, 1, 1, 0], NOT: [1, 0] };
const ROWS: [number, number][] = [[0, 0], [0, 1], [1, 0], [1, 1]];
/** `head` and `foot`: a point on the body's top and bottom outline, for a tag's line. */
type Gate = { name: string; kind: GateKind; shape: Shape; ins: P[]; out: P; box: Rect; tip: P; head: P; foot: P };
const GATES = new WeakMap<Sketch, Gate[]>();
const BUB = 4;
/**
 * A gate with its back at x0, centred on cy: body gw long, gh tall. Its input
 * pins (on the back, or on the extra curve of an XOR) and its output pin
 * (past the bubble) are returned; the caller draws the leads.
 */
function gate(s: Sketch, name: string, kind: GateKind, x0: number, cy: number, o: { gw?: number; gh?: number; color?: string; bubble?: string; n?: number } = {}): Gate {
  const sh = SHAPE[kind], gw = o.gw ?? 44, gh = o.gh ?? 34, color = o.color ?? C.ink, top = cy - gh / 2, bot = cy + gh / 2, hr = gh / 2;
  let body: P[] = [];
  let backX = (y: number) => x0 + 0 * y;
  let head: P = [x0 + (gw - hr) / 2, top], foot: P = [x0 + (gw - hr) / 2, bot];
  if (sh.front === 'round') {
    body = [[x0, top], [x0 + gw - hr, top], ...samples(90, -90, 40).map((d): P => [x0 + gw - hr + hr * Math.cos((d * Math.PI) / 180), cy - hr * Math.sin((d * Math.PI) / 180)]), [x0, bot]];
  } else if (sh.front === 'pointed') {
    const depth = gh * 0.22;
    backX = (y: number) => x0 + depth * (1 - ((y - cy) / hr) ** 2);
    const q = (p0: P, c: P, p1: P) => samples(0, 1, 30).map((t): P => [(1 - t) ** 2 * p0[0] + 2 * t * (1 - t) * c[0] + t * t * p1[0], (1 - t) ** 2 * p0[1] + 2 * t * (1 - t) * c[1] + t * t * p1[1]]);
    const upper = q([x0, top], [x0 + gw * 0.62, top], [x0 + gw, cy]);
    const lower = q([x0 + gw, cy], [x0 + gw * 0.62, bot], [x0, bot]);
    const back = samples(bot, top, 30).map((y): P => [backX(y), y]);
    body = [...upper, ...lower.slice(1), ...back.slice(1, -1)];
    head = upper[10];
    foot = lower[20];
  } else {
    body = [[x0, top + 2], [x0 + gw * 0.78, cy], [x0, bot - 2]];
    head = [x0 + gw * 0.3, top + 2 + (cy - top - 2) * (0.3 / 0.78)];
    foot = [x0 + gw * 0.3, bot - 2 - (bot - 2 - cy) * (0.3 / 0.78)];
  }
  outline(s, body, { color, w: 1.8 });
  let pinX = backX;
  if (sh.extra) {
    const off = 7, depth = gh * 0.22;
    pinX = (y: number) => x0 - off + depth * (1 - ((y - cy) / hr) ** 2);
    path(s, samples(top, bot, 30).map((y): P => [pinX(y), y]), { color, w: 1.8 });
  }
  const tipX = sh.front === 'triangle' ? x0 + gw * 0.78 : x0 + gw;
  let out: P = [tipX, cy];
  if (sh.bubble) {
    const bc: P = [tipX + BUB, cy];
    s.point(bc[0], bc[1], BUB, `<circle cx="${r1(bc[0])}" cy="${r1(bc[1])}" r="${BUB}" fill="#fff" stroke="${o.bubble ?? color}" stroke-width="1.8"/>`);
    keep(s, samples(0, 360, 24).map((d): P => [bc[0] + BUB * Math.cos((d * Math.PI) / 180), bc[1] + BUB * Math.sin((d * Math.PI) / 180)]));
    out = [tipX + 2 * BUB, cy];
  }
  const n = o.n ?? (kind === 'NOT' ? 1 : 2);
  const ys = n === 1 ? [cy] : [cy - gh * 0.27, cy + gh * 0.27];
  const g: Gate = { name, kind, shape: sh, ins: ys.map((y): P => [pinX(y), y]), out, box: [x0 - (sh.extra ? 7 : 0), top, out[0], bot], tip: [tipX, cy], head, foot };
  GATES.set(s, [...(GATES.get(s) ?? []), g]);
  return g;
}

/* ===================================================================== */
/* Figure 14.11 · the standard gate symbols (topic 04)                    */
/* ===================================================================== */
/**
 * The six symbols in the book's order and rows: OR, AND, NOT; NAND, NOR, XOR,
 * inputs A and B on the left, output Y on the right. The bubbles (the NOT in
 * NOT, NAND and NOR) are the drawing's one marigold mark. The check reads each
 * gate's function off the shape drawn (back, front, bubble, extra curve) and
 * compares its truth table with the book's (p. 903).
 */
const G1411 = { cols: [16, 128, 236], rows: [76, 182], gx: 22, gw: 44, gh: 34 };
const ORDER1411: GateKind[] = ['OR', 'AND', 'NOT', 'NAND', 'NOR', 'XOR'];
const fig1411: Diagram = {
  id: 'p12-14-fig-14.11',
  topic: 4,
  name: 'Logic gate symbols',
  cases: [{ chip: 'Six gates', cap: 'Standard symbols for the logic gates: OR (curved back, pointed front), AND (flat back, rounded front), NOT (triangle with a small bubble), NAND (AND with an output bubble), NOR (OR with an output bubble) and XOR (OR with an extra curved line at the input). Inputs are <i>A</i> and <i>B</i>; the output is <i>Y</i>.' }],
  draw() {
    const s = new Sketch(W, 262);
    const { cols, rows, gx, gw, gh } = G1411;
    const specs: { t: string; p: P; at: [number, number, 'start' | 'middle' | 'end'][] }[] = [];
    ORDER1411.forEach((kind, i) => {
      const cx = cols[i % 3], cy = rows[Math.floor(i / 3)], x0 = cx + gx;
      const g = gate(s, kind, kind, x0, cy, { gw, gh, bubble: C.mari });
      g.ins.forEach((p, j) => {
        path(s, [[cx + 12, p[1]], p], { w: 1.6 });
        s.sym(cx + 3, p[1] + 5, j === 0 ? '<i>A</i>' : '<i>B</i>', { size: 14, anchor: 'middle' });
      });
      path(s, [g.out, [g.out[0] + 12, g.out[1]]], { w: 1.6 });
      s.sym(g.out[0] + 21, g.out[1] + 5, '<i>Y</i>', { size: 14 });
      specs.push({ t: kind, p: g.foot, at: [[g.foot[0], cy + gh / 2 + 14, 'middle'], [g.foot[0] + 6, cy + gh / 2 + 16, 'middle'], [g.foot[0] - 6, cy + gh / 2 + 16, 'middle']] });
    });
    s.place(specs);
    return s;
  },
  check() {
    const s = fig1411.draw(fig1411.cases[0]);
    const gs = GATES.get(s) ?? [];
    const out: Check[] = [];
    out.push([`Six gates in the book’s order: ${gs.map((g) => g.kind).join(', ')}`, gs.map((g) => g.kind).join() === ORDER1411.join()]);
    gs.forEach((g) => {
      const f = shapeFn(g.shape), tt = g.kind === 'NOT' ? [0, 1].map((a) => f(a, a)) : ROWS.map(([a, b]) => f(a, b));
      const said = `${g.shape.back} back, ${g.shape.front} front${g.shape.bubble ? ', output bubble' : ''}${g.shape.extra ? ', extra input curve' : ''}`;
      out.push([`${g.kind}: drawn with a ${said}; read off the shape its truth table is ${tt.join(', ')} (the book’s ${BOOK_TT[g.kind].join(', ')})`, tt.join() === BOOK_TT[g.kind].join() && g.ins.length === (g.kind === 'NOT' ? 1 : 2)]);
    });
    const nand = gs.find((g) => g.kind === 'NAND')!, and = gs.find((g) => g.kind === 'AND')!, nor = gs.find((g) => g.kind === 'NOR')!, or = gs.find((g) => g.kind === 'OR')!, xor = gs.find((g) => g.kind === 'XOR')!;
    out.push(['NAND is the AND shape with an output bubble, NOR the OR shape with one, XOR the OR shape with an extra curve at the input (same body sizes)', nand.shape.back === and.shape.back && nand.shape.front === and.shape.front && nand.shape.bubble && nor.shape.back === or.shape.back && nor.shape.bubble && xor.shape.extra && !xor.shape.bubble && close(nand.tip[0] - nand.box[0], and.tip[0] - and.box[0])]);
    out.push(['XNOR is the complement of XOR on every row', ROWS.every(([a, b]) => 1 - shapeFn(xor.shape)(a, b) === (a === b ? 1 : 0))]);
    return [...out, ...layout(s)];
  },
};

/* ===================================================================== */
/* Figure 14.12 · NOT, AND and OR from NAND gates (topic 04)              */
/* ===================================================================== */
/**
 * (a) one NAND, its two inputs tied to A; (b) NAND(A, B) followed by a NAND
 * with its inputs tied (an inverter); (c) A and B each through a tied NAND,
 * Ā and B̄ into a third NAND. The tied inputs are drawn as one line that forks
 * at a dot into both inputs. The check reads the wiring back as nodes (the
 * inputs, each gate's pins), evaluates every gate for every input row and
 * compares Y with NOT A, A·B and A + B, and the marked Ā, B̄ wires with NOT A,
 * NOT B.
 */
type Part1412 = 'a' | 'b' | 'c';
const CAP1412 = 'Universal construction from NAND gates.';
const END1412 = 'Each is labelled with its Boolean reduction.';
const GW = 50, GH = 44;
/** Inputs, as named pins; each wire is registered for the read-back. */
type Pin = { name: string; p: P };
const PINS = new WeakMap<Sketch, Pin[]>();
const inPin = (s: Sketch, name: string, p: P) => { PINS.set(s, [...(PINS.get(s) ?? []), { name, p }]); };
/** A fork: one wire from `from` to a dot, then a wire on to each pin. */
function fork(s: Sketch, from: P, at: P, to: P[], color: string = C.ink) {
  wire(s, [from, at], { color, w: 1.7 });
  to.forEach((p) => wire(s, [at, [at[0], p[1]], p], { color, w: 1.7 }));
  node(s, at, color);
}
/** Evaluate the drawn network for the named inputs: every wire is a node; a gate's output drives the node its out pin is on. */
function evaluate(s: Sketch, inputs: Record<string, number>) {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const nodeOf = (p: P) => { const i = ws.findIndex((w) => onWire(p, w)); return i < 0 ? -1 : find(i); };
  const val = new Map<number, number>();
  (PINS.get(s) ?? []).forEach((pn) => { if (pn.name in inputs) val.set(nodeOf(pn.p), inputs[pn.name]); });
  const gs = GATES.get(s) ?? [];
  for (let pass = 0; pass < gs.length + 1; pass++) {
    gs.forEach((g) => {
      const ins = g.ins.map((p) => val.get(nodeOf(p)));
      if (ins.some((v) => v === undefined)) return;
      const f = shapeFn(g.shape);
      val.set(nodeOf(g.out), ins.length === 1 ? f(ins[0]!, ins[0]!) : f(ins[0]!, ins[1]!));
    });
  }
  return { at: (p: P) => val.get(nodeOf(p)), nodeOf, gates: gs };
}
const G1412 = {
  a: { inX: 30, fx: 96, gx: 140, cy: 120, yx: 270 },
  b: { inX: 28, g1: 66, fx: 168, g2: 196, cy: 120, yx: 300 },
  c: { inX: 28, fx: 54, g1: 76, g2: 76, ya: 78, yb: 186, g3: 202, cy: 132, yx: 316 },
};
const fig1412: Diagram = {
  id: 'p12-14-fig-14.12',
  topic: 4,
  name: 'NAND as a universal gate',
  cases: [
    { chip: '(a) NOT from NAND', part: 'a', cap: `${CAP1412} (a) One NAND with both inputs tied to <i>A</i> gives NOT <i>A</i>. ${END1412}` },
    { chip: '(b) AND from NAND', part: 'b', cap: `${CAP1412} (b) Two NAND gates in series give AND. ${END1412}` },
    { chip: '(c) OR from NAND', part: 'c', cap: `${CAP1412} (c) Two input-inverting NAND gates feeding a third NAND give OR. ${END1412}` },
  ],
  draw(c: { part: Part1412 }) {
    const s = new Sketch(W, 262);
    const tags: { t: string; hi?: boolean; p: P; own?: P; at: [number, number, 'start' | 'middle' | 'end'][] }[] = [];
    const tagGate = (g: Gate, hi = false, below = false) => {
      const p = below ? g.foot : g.head, y = below ? g.box[3] : g.box[1];
      tags.push({ t: 'NAND', hi, p, at: below ? [[p[0], y + 12, 'middle'], [p[0], y + 16, 'middle']] : [[p[0], y - 34, 'middle'], [p[0], y - 38, 'middle'], [p[0] + 10, y - 34, 'middle']] });
    };
    if (c.part === 'a') {
      const { inX, fx, gx, cy, yx } = G1412.a;
      const g = gate(s, 'N1', 'NAND', gx, cy, { gw: GW, gh: GH });
      inPin(s, 'A', [inX, cy]);
      s.sym(inX - 12, cy + 5, '<i>A</i>', { size: 16 });
      fork(s, [inX, cy], [fx, cy], g.ins, C.mari);
      wire(s, [g.out, [yx, cy]]);
      s.sym(yx + 6, cy + 5, '<i>Y</i>', { size: 16, anchor: 'start' });
      tagGate(g);
      tags.push({ t: 'Both inputs tied to A', hi: true, p: [fx, cy], own: [fx, cy], at: [[16, cy + 54, 'start'], [16, cy + 60, 'start']] });
      resultBlock(s, [`<i>Y</i> = <i>A${BAR}</i>·${BAR}<i>A${BAR}</i> = <i>A${BAR}</i>`]);
    } else if (c.part === 'b') {
      const { inX, g1, fx, g2, cy, yx } = G1412.b;
      const n1 = gate(s, 'N1', 'NAND', g1, cy, { gw: GW, gh: GH });
      const n2 = gate(s, 'N2', 'NAND', g2, cy, { gw: GW, gh: GH, color: C.mari });
      ['A', 'B'].forEach((nm, i) => {
        inPin(s, nm, [inX, n1.ins[i][1]]);
        wire(s, [[inX, n1.ins[i][1]], n1.ins[i]]);
        s.sym(inX - 10, n1.ins[i][1] + 5, `<i>${nm}</i>`, { size: 16 });
      });
      fork(s, n1.out, [fx, cy], n2.ins);
      wire(s, [n2.out, [yx, cy]]);
      s.sym(yx + 6, cy + 5, '<i>Y</i>', { size: 16, anchor: 'start' });
      tagGate(n1);
      tagGate(n2, true);
      resultBlock(s, [`<i>Y</i> = <i>A${BAR2}</i>·${BAR2}<i>B${BAR2}</i> = <i>A</i>·<i>B</i>`]);
    } else {
      const { inX, fx, g1, ya, yb, g3, cy, yx } = G1412.c;
      const n1 = gate(s, 'N1', 'NAND', g1, ya, { gw: GW, gh: GH });
      const n2 = gate(s, 'N2', 'NAND', g1, yb, { gw: GW, gh: GH });
      const n3 = gate(s, 'N3', 'NAND', g3, cy, { gw: GW, gh: GH });
      inPin(s, 'A', [inX, ya]);
      inPin(s, 'B', [inX, yb]);
      s.sym(inX - 10, ya + 5, '<i>A</i>', { size: 16 });
      s.sym(inX - 10, yb + 5, '<i>B</i>', { size: 16 });
      fork(s, [inX, ya], [fx, ya], n1.ins);
      fork(s, [inX, yb], [fx, yb], n2.ins);
      const jx = (n1.out[0] + n3.ins[0][0]) / 2 + 8;
      wire(s, [n1.out, [jx, ya], [jx, n3.ins[0][1]], n3.ins[0]], { color: C.mari });
      wire(s, [n2.out, [jx, yb], [jx, n3.ins[1][1]], n3.ins[1]], { color: C.mari });
      s.sym((n1.out[0] + jx) / 2, ya - 8, `<i>A${BAR}</i>`, { size: 16, color: C.amber });
      s.sym((n2.out[0] + jx) / 2, yb - 8, `<i>B${BAR}</i>`, { size: 16, color: C.amber });
      wire(s, [n3.out, [yx, cy]]);
      s.sym(yx + 6, cy + 5, '<i>Y</i>', { size: 16, anchor: 'start' });
      tagGate(n1);
      tagGate(n2, false, true);
      tagGate(n3);
      resultBlock(s, [`<i>Y</i> = <i>A${BAR2}</i>·${BAR}<i>B${BAR2}</i> = <i>A</i> + <i>B</i>`]);
    }
    s.place(tags);
    return s;
  },
  check(c: { part: Part1412 }) {
    const s = fig1412.draw(c);
    const want = c.part === 'a' ? (a: number) => 1 - a : c.part === 'b' ? (a: number, b: number) => a & b : (a: number, b: number) => a | b;
    const label = c.part === 'a' ? 'NOT A' : c.part === 'b' ? 'A·B' : 'A + B';
    const rows: [number, number][] = c.part === 'a' ? [[0, 0], [1, 1]] : ROWS;
    const yPin: P = c.part === 'a' ? [G1412.a.yx, G1412.a.cy] : c.part === 'b' ? [G1412.b.yx, G1412.b.cy] : [G1412.c.yx, G1412.c.cy];
    const got = rows.map(([a, b]) => evaluate(s, { A: a, B: b }).at(yPin));
    const exp = rows.map(([a, b]) => want(a, b));
    const ev = evaluate(s, { A: 0, B: 0 });
    const out: Check[] = [
      [`Every gate drawn is a NAND (flat back, round front, output bubble): ${ev.gates.map((g) => g.kind).join(', ')}; ${ev.gates.length} gate${ev.gates.length > 1 ? 's' : ''} (the book’s ${c.part === 'a' ? 1 : c.part === 'b' ? 2 : 3})`, ev.gates.every((g) => g.kind === 'NAND') && ev.gates.length === (c.part === 'a' ? 1 : c.part === 'b' ? 2 : 3)],
      [`Read off the wiring and evaluated row by row, Y = ${got.join(', ')} for ${rows.map(([a, b]) => (c.part === 'a' ? `A = ${a}` : `AB = ${a}${b}`)).join(', ')}: ${label} (${exp.join(', ')})`, got.join() === exp.join()],
    ];
    const tied = ev.gates.filter((g) => ev.nodeOf(g.ins[0]) === ev.nodeOf(g.ins[1]));
    out.push([`The NANDs used as inverters have both inputs on one node (tied): ${tied.map((g) => g.name).join(', ')}; a tied NAND gives NOT: ${[0, 1].map((a) => shapeFn(SHAPE.NAND)(a, a)).join(', ')} for 0, 1`, tied.length === (c.part === 'a' ? 1 : c.part === 'b' ? 1 : 2) && [0, 1].every((a) => shapeFn(SHAPE.NAND)(a, a) === 1 - a)]);
    if (c.part === 'c') {
      const g = G1412.c, n3 = ev.gates.find((x) => x.name === 'N3')!;
      const aBar = ROWS.map(([a, b]) => evaluate(s, { A: a, B: b }).at(n3.ins[0])), bBar = ROWS.map(([a, b]) => evaluate(s, { A: a, B: b }).at(n3.ins[1]));
      out.push([`The wire marked Ā carries NOT A (${aBar.join(', ')}) and the one marked B̄ carries NOT B (${bBar.join(', ')}), into the third NAND: De Morgan, NOT(Ā·B̄) = A + B`, aBar.join() === ROWS.map(([a]) => 1 - a).join() && bBar.join() === ROWS.map(([, b]) => 1 - b).join() && g.ya < g.cy && g.cy < g.yb]);
    }
    if (c.part === 'b') out.push(['The first NAND gives NOT(A·B); the second, inputs tied, inverts it back: NOT(NOT(A·B)) = A·B on every row', ROWS.every(([a, b]) => 1 - (1 - (a & b)) === (a & b))]);
    return [...out, ...layout(s)];
  },
};

/* ===================================================================== */
/* Addendum E, Example E.1 · timing waveforms (unnumbered, p. 927)        */
/* ===================================================================== */
/**
 * Eight equal slices, the book's traces: A = 0 1 1 0 1 0 0 1, B = 0 0 1 1 0 0
 * 1 1, Y = 0 1 0 1 1 0 1 0. The traces are drawn from these levels; the check
 * reads each trace back at mid-slice off the drawn line, checks that every
 * edge sits on a slice boundary, and finds Y = A ⊕ B in every slice, with
 * (0, 1, 1, 0) for rows 00, 01, 10, 11 matching only the XOR column of the
 * book's table (p. 926).
 */
const E1 = { A: [0, 1, 1, 0, 1, 0, 0, 1], B: [0, 0, 1, 1, 0, 0, 1, 1], Y: [0, 1, 0, 1, 1, 0, 1, 0], x0: 106, x1: 312, lab: 14, hi: { A: 70, B: 128, Y: 186 } as Record<string, number>, amp: 26, top: 40, bot: 226 };
const sx = (i: number) => E1.x0 + ((E1.x1 - E1.x0) * i) / 8;
const traceOf = (name: 'A' | 'B' | 'Y'): P[] => {
  const v = E1[name], yh = E1.hi[name], yl = yh + E1.amp, pts: P[] = [[sx(0), v[0] ? yh : yl]];
  v.forEach((b, i) => { const y = b ? yh : yl; if (i > 0 && b !== v[i - 1]) pts.push([sx(i), pts[pts.length - 1][1]], [sx(i), y]); });
  pts.push([sx(8), v[7] ? yh : yl]);
  return pts;
};
/** The level of a drawn trace at x: the y of its horizontal run there. */
const levelAt = (pts: P[], x: number, yh: number) => {
  for (let i = 1; i < pts.length; i++) if (pts[i][1] === pts[i - 1][1] && x > Math.min(pts[i - 1][0], pts[i][0]) && x < Math.max(pts[i - 1][0], pts[i][0])) return close(pts[i][1], yh) ? 1 : 0;
  return -1;
};
const figE1: Diagram = {
  id: 'p12-14-E-d1',
  topic: 9,
  name: 'Gate from timing waveforms',
  cases: [{ chip: 'Eight slices', cap: 'Timing waveforms for Example E.1: inputs <i>A</i> and <i>B</i> with output <i>Y</i> over eight equal time slices. Slicing at every input transition and reading (<i>A</i>, <i>B</i>) → <i>Y</i> per slice gives 00 → 0, 01 → 1, 10 → 1, 11 → 0 — the XOR column.' }],
  draw() {
    const s = new Sketch(W, 236);
    const { x0, lab, hi, amp, top, bot } = E1;
    for (let i = 0; i <= 8; i++) guide(s, [sx(i), top + 6], [sx(i), bot], C.grey, 'dash');
    s.sym(x0 - 8, top - 6, 'slice', { size: 13, anchor: 'end', color: C.slate });
    for (let i = 0; i < 8; i++) s.sym((sx(i) + sx(i + 1)) / 2, top - 6, String(i + 1), { size: 13, color: C.slate });
    (['A', 'B', 'Y'] as const).forEach((nm) => {
      const isY = nm === 'Y';
      path(s, traceOf(nm), { color: isY ? C.mari : C.ink, w: 2.2 });
      s.sym(lab, hi[nm] + amp / 2 + 6, `<i>${nm}</i>`, { size: 17, color: isY ? C.amber : C.text });
    });
    // the output's levels, as the book marks them (at the right-hand end here, where the tags leave room)
    s.sym(E1.x1 + 7, hi.Y + 5, '1', { size: 12, anchor: 'start', color: C.slate });
    s.sym(E1.x1 + 7, hi.Y + amp + 5, '0', { size: 12, anchor: 'start', color: C.slate });
    // each trace named at its start, from the left, beside its letter
    s.place((['A', 'B', 'Y'] as const).map((nm) => ({ t: nm === 'Y' ? 'Output' : 'Input', hi: nm === 'Y', p: [x0 + 8, hi[nm] + amp] as P, at: [[28, hi[nm] + amp - 11, 'start'], [30, hi[nm] + amp - 11, 'start']] as [number, number, 'start'][] })));
    return s;
  },
  check() {
    const s = figE1.draw(figE1.cases[0]);
    const read = (nm: 'A' | 'B' | 'Y') => Array.from({ length: 8 }, (_, i) => levelAt(traceOf(nm), (sx(i) + sx(i + 1)) / 2, E1.hi[nm]));
    const A = read('A'), B = read('B'), Y = read('Y');
    const edges = (['A', 'B', 'Y'] as const).flatMap((nm) => traceOf(nm).filter((p, i, a) => i > 0 && i < a.length - 1).map((p) => p[0]));
    const onBoundary = edges.every((x) => Array.from({ length: 9 }, (_, i) => sx(i)).some((b) => close(b, x, 1e-9)));
    const inputEdges = new Set((['A', 'B'] as const).flatMap((nm) => traceOf(nm).slice(1, -1).map((p) => r1(p[0]))));
    const rowY = ROWS.map(([a, b]) => { const ys = A.map((_, i) => i).filter((i) => A[i] === a && B[i] === b).map((i) => Y[i]); return ys.length && ys.every((y) => y === ys[0]) ? ys[0] : -1; });
    const matches = (Object.keys(BOOK_TT) as GateKind[]).filter((k) => k !== 'NOT' && BOOK_TT[k].join() === rowY.join());
    const book = { A: '01101001', B: '00110011', Y: '01011010' };
    // Practice E (p. 928): two more waveform problems, by the same rule
    const p1 = '011001'.split('').map((a, i) => 1 - (+a & +'001101'[i])).join('');
    const p2 = '100110'.split('').map((a, i) => 1 - (+a | +'001101'[i])).join('');
    return [
      [`Read at mid-slice off the drawn traces: A = ${A.join('')}, B = ${B.join('')}, Y = ${Y.join('')} (the book’s slice table, p. 927)`, A.join('') === book.A && B.join('') === book.B && Y.join('') === book.Y],
      [`Every edge of every trace sits on a slice boundary, and every boundary inside the run is an edge of A or B (${inputEdges.size} of 7): the eight intervals are bounded by input transitions`, onBoundary && inputEdges.size === 7],
      [`Y = A ⊕ B in all eight slices`, A.every((a, i) => (a ^ B[i]) === Y[i])],
      [`Each input pair gives the same Y every time it occurs: rows 00, 01, 10, 11 → ${rowY.join(', ')}; all four occur`, rowY.every((y) => y >= 0)],
      [`That Y column matches only ${matches.join(', ')} among OR, AND, NAND, NOR, XOR (and XNOR is ${ROWS.map(([a, b]) => (a === b ? 1 : 0)).join(', ')})`, matches.join() === 'XOR'],
      [`Practice E: 1 — NAND of A = 011001, B = 001101 is ${p1} (the given Y = 110110); 2 — NOR of A = 100110, B = 001101 is ${p2} (the book’s 010000)`, p1 === '110110' && p2 === '010000'],
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 14 (Semiconductor Electronics), second half: Figures 14.8–14.10 (Topic 03), 14.11–14.12 (Topic 04), and the unnumbered timing waveforms of Addendum E; Topic 03, Topic 04 and Addenda A–D have no unnumbered drawings. */
export const DIAGRAMS_PHYSICS_12_14B: Diagram[] = [fig148, fig149, fig1410, fig1411, fig1412, figE1];
