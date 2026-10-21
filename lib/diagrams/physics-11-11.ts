import { C, F, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 11 (Thermodynamics): every figure of the Master
 * Reference book, redrawn. The chapter's drawings are its eleven numbered
 * figures, each printed on a "CHAPTER 11 · FIGURES" page (11.1 p. 744, 11.2
 * p. 746, 11.3 p. 753, 11.4 p. 755, 11.5 p. 761, 11.6 p. 764, 11.7 p. 770,
 * 11.8 p. 776, 11.9 p. 783, 11.10 p. 790, 11.11 p. 796; the first copy of each
 * caption sits a page earlier, where the text refers to it). It has no
 * unnumbered drawings: pp. 742–818 were checked page by page, Additional
 * Topics A–E included (the rest is text, typeset equations, boxed answers and
 * tables).
 *
 * Every figure is computed from the physics with the book's own values, never
 * placed by eye: the three bodies of the zeroth law settle to one temperature
 * (simulated, and the A–B heat current is then zero), the P–V curves are
 * isotherms PV = const and adiabats PV^γ = const with γ = 5/3 (the value the
 * book's own curves were drawn with: 11.5's end pressures 0.48 and 0.22, 11.6's
 * 1.1 and 0.5, 11.10's corners), areas under curves are integrated and equal
 * the work formulas, the constant-pressure piston rises by ΔV = nRΔT/P, the
 * engine and refrigerator balance Q₁ = Q₂ + W, the Carnot loop's area is
 * Q₁ − Q₂ with η = 1 − T₂/T₁, and the entropy curves add up to the universe's,
 * which never falls. Each `check` turns the drawing back into physics and
 * recomputes what the figure and its caption state, and measures that no
 * label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
/** Simpson's rule on [a, b] with n (even) strips. */
function simpson(fn: (x: number) => number, a: number, b: number, n = 2000) {
  const h = (b - a) / n;
  let s = fn(a) + fn(b);
  for (let i = 1; i < n; i++) s += fn(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}
/** Signed area of a closed polygon (shoelace): positive when it runs anticlockwise in (x right, y up) axes. */
const signedArea = (pts: P[]) => pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;

/* ---------- drawing helpers ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'long'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'long' ? ' stroke-dasharray="11 5"' : '');
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the dotted
 * guides that run from a tick are left out (`free`): their tick values sit on them.
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
  keep(s, [...pts, pts[0]]);
}
/** An arrow (a heat flow, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A rounded box, never filled; what it is shows only in its edge. */
function box(s: Sketch, r: Rect, o: { hi?: boolean; ink?: boolean; rx?: number } = {}) {
  const stroke = o.hi ? C.mari : o.ink ? C.ink : C.slate, sw = o.hi ? 2.2 : o.ink ? 1.9 : 1.5;
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 10}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
}
/** Words in Onest (names, headings): not maths, so straight into the SVG; registered so tags keep clear. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * (o.bold ? 0.6 : 0.56);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.74, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${o.bold ? F.bold : F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}
/** A flame: three tongues on a base, an ink outline (never filled). */
function flame(s: Sketch, cx: number, by: number, w = 34, h = 26) {
  outline(s, [
    [cx - w / 2, by], [cx - w / 2 + 3, by - h * 0.32], [cx - w / 3, by - h * 0.62], [cx - w / 6, by - h * 0.36],
    [cx, by - h], [cx + w / 6, by - h * 0.36], [cx + w / 3, by - h * 0.62], [cx + w / 2 - 3, by - h * 0.32], [cx + w / 2, by],
  ], { w: 1.6 });
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/**
 * How far every tag (pill and result block) and every label stays from every
 * kept line, sampled each half pixel: the closest one, and what it is.
 */
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
/** The check every figure makes on its own layout. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line it does not name: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
/**
 * The result, bottom right, ink-edged: maths set in STIX (Sketch.text, so its
 * letters keep their italics) or words in Onest Bold. Registered as a tag, so
 * the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number; maths?: boolean } = {}): Rect {
  const maths = o.maths ?? true, size = o.size ?? (maths ? 15 : 13), lh = size + 6;
  const plain = (t: string) => t.replace(/<\/?(?:i|sub|sup)>/g, '');
  const w = Math.max(...lines.map((t) => (maths ? mathW(t, size) : plain(t).length * size * 0.6))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => {
    const y = y0 + 7 + lh * i + lh / 2 + size * 0.36;
    if (maths) s.text(x0 + w / 2, y, t, { size, semibold: true });
    else s.add(`<text x="${r1(x0 + w / 2)}" y="${r1(y)}" text-anchor="middle" font-family="${F.bold}" font-size="${size}" fill="${C.text}">${esc(t)}</text>`);
  });
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, u: number) => f.ox + u * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}): P[] {
  const n = 160, pts: P[] = [];
  for (let i = 0; i <= n; i++) { const u = u0 + ((u1 - u0) * i) / n; pts.push(at(f, u, fn(u))); }
  path(s, pts, o);
  return pts;
}
type Tick = [number, string];
/** The two axes with arrowheads, their names and ticks. */
function axes(s: Sketch, f: Frame, o: { u1: number; v1: number; uName: string; vName: string; uTicks: Tick[]; vTicks: Tick[]; uNameAt?: P }) {
  s.vec(f.ox, f.oy, X(f, o.u1), f.oy, { color: C.grey, w: 1.3 });
  s.vec(f.ox, f.oy, f.ox, Y(f, o.v1), { color: C.grey, w: 1.3 });
  const un = o.uNameAt ?? [X(f, o.u1) - 2, f.oy - 9];
  s.sym(un[0], un[1], o.uName, { size: 15, anchor: 'end' });
  s.sym(f.ox + 9, Y(f, o.v1) + 6, o.vName, { size: 15, anchor: 'start' });
  o.vTicks.forEach(([v, txt]) => {
    s.line(f.ox - 4, Y(f, v), f.ox, Y(f, v), { color: C.grey, w: 1.2 });
    s.sym(f.ox - 7, Y(f, v) + 4.5, txt, { size: 12.5, anchor: 'end', color: C.slate });
  });
  o.uTicks.forEach(([u, txt]) => {
    s.line(X(f, u), f.oy, X(f, u), f.oy + 4, { color: C.grey, w: 1.2 });
    s.sym(X(f, u), f.oy + 17, txt, { size: 12.5, color: C.slate });
  });
}
/**
 * An area between two curves (lo below, hi above), drawn as thin vertical
 * slivers (never a fill). `skip` keeps them off a tag or label.
 */
function slivers(s: Sketch, f: Frame, lo: (u: number) => number, hi: (u: number) => number, u0: number, u1: number, o: { gap?: number; color?: string; skip?: Rect[] } = {}) {
  const gap = o.gap ?? 6, x0 = X(f, u0), x1 = X(f, u1);
  for (let x = x0 + gap / 2; x < x1 - 0.5; x += gap) {
    const u = uOf(f, x), a = Y(f, hi(u)) + 1.8, b = Y(f, lo(u)) - 1.8;
    if (b - a < 1.5) continue;
    let segs: [number, number][] = [[a, b]];
    for (const r of o.skip ?? []) {
      if (x <= r[0] - 3 || x >= r[2] + 3) continue;
      segs = segs.flatMap(([p, q]): [number, number][] => {
        if (q <= r[1] - 3 || p >= r[3] + 3) return [[p, q]];
        const out: [number, number][] = [];
        if (r[1] - 3 - p > 2) out.push([p, r[1] - 3]);
        if (q - r[3] - 3 > 2) out.push([r[3] + 3, q]);
        return out;
      });
    }
    segs.forEach(([p, q]) => s.line(x, p, x, q, { color: o.color ?? C.grey, w: 0.9 }));
  }
}
/** A quadratic Bézier from a through control k to b, as a function of t. */
const bez = (a: P, k: P, b: P) => (t: number): P => [(1 - t) ** 2 * a[0] + 2 * t * (1 - t) * k[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * t * (1 - t) * k[1] + t * t * b[1]];
/** ∫P dV along a path given as points (V, P), in order: the work done BY the gas (trapezoids). */
const workAlong = (pts: P[]) => pts.slice(1).reduce((w, p, i) => w + ((p[1] + pts[i][1]) / 2) * (p[0] - pts[i][0]), 0);

/* ===================================================================== */
/* Figure 11.1 · the zeroth law: A and B each in contact with C (topic 01) */
/* ===================================================================== */
/** Three equal boxes in a row, A · C · B, with a hatched diathermic wall in each gap. */
const G111 = (() => {
  const bw = 78, wall = 10, gap = 8, y0 = 92, y1 = 192, x0 = (W - (3 * bw + 2 * (wall + 2 * gap))) / 2;
  const A: Rect = [x0, y0, x0 + bw, y1];
  const w1: Rect = [A[2] + gap, y0 + 12, A[2] + gap + wall, y1 - 12];
  const Cc: Rect = [w1[2] + gap, y0, w1[2] + gap + bw, y1];
  const w2: Rect = [Cc[2] + gap, y0 + 12, Cc[2] + gap + wall, y1 - 12];
  const B: Rect = [w2[2] + gap, y0, w2[2] + gap + bw, y1];
  return { A, w1, Cc, w2, B, heatY: (y0 + y1) / 2 + 6, barY: 56 };
})();
/** A diathermic wall: its outline and 45° hatching, kept off the heat arrow's band. */
function wall111(s: Sketch, r: Rect, band: [number, number]) {
  outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { w: 1.5 });
  const wd = r[2] - r[0];
  for (let y = r[1] + 2; y + wd <= r[3] - 1; y += 7) {
    if (y + wd > band[0] && y < band[1]) continue;
    s.line(r[0] + 1, y + wd - 1, r[2] - 1, y + 1, { color: C.slate, w: 0.9 });
  }
}
/** A double-headed heat arrow across a wall, from box edge to box edge. */
function heat2(s: Sketch, x0: number, x1: number, y: number) {
  const h = 6, hw = 3.6;
  s.line(x0 + h, y, x1 - h, y, { color: C.ink, w: 1.6 });
  s.add(`<path d="M${r1(x0)} ${r1(y)} L${r1(x0 + h)} ${r1(y - hw)} L${r1(x0 + h)} ${r1(y + hw)} Z M${r1(x1)} ${r1(y)} L${r1(x1 - h)} ${r1(y - hw)} L${r1(x1 - h)} ${r1(y + hw)} Z" fill="${C.ink}"/>`);
  keep(s, [[x0, y], [x1, y]]);
}
/**
 * The book's setting in numbers, to check the law itself: three bodies with
 * heat capacities and starting temperatures, A and B joined to C only (equal
 * conductances), the A–B link insulated (k = 0).
 */
const Z111 = { cap: [1.0, 2.0, 1.5], T0: [350, 280, 310], k: 0.5, dt: 0.01, steps: 20000 };
function settle111() {
  const [cA, cB, cC] = Z111.cap;
  let [a, b, c] = Z111.T0;
  for (let i = 0; i < Z111.steps; i++) {
    const hAC = Z111.k * (a - c), hBC = Z111.k * (b - c);
    a -= (hAC * Z111.dt) / cA; b -= (hBC * Z111.dt) / cB; c += ((hAC + hBC) * Z111.dt) / cC;
  }
  return [a, b, c];
}
const fig111: Diagram = {
  id: 'p11-11-fig-11.1',
  topic: 0,
  name: 'Zeroth law: A and B each in contact with C',
  cases: [{ chip: 'Zeroth law', cap: 'Systems A and B are each in thermal contact with C through a diathermic (heat-conducting) wall and are insulated from each other by an adiabatic barrier. Once A and B are each in equilibrium with C, removing the A–B insulator changes nothing: A and B are already in equilibrium with each other (Zeroth Law).' }],
  draw() {
    const s = new Sketch(W, 330);
    const { A, w1, Cc, w2, B, heatY, barY } = G111, band: [number, number] = [heatY - 8, heatY + 8];
    const rect = (r: Rect) => outline(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]], { w: 2 });
    rect(A); rect(Cc); rect(B);
    wall111(s, w1, band); wall111(s, w2, band);
    heat2(s, A[2] + 1.5, Cc[0] - 1.5, heatY);
    heat2(s, Cc[2] + 1.5, B[0] - 1.5, heatY);
    const ax = (A[0] + A[2]) / 2, bx = (B[0] + B[2]) / 2;
    path(s, [[ax, A[1]], [ax, barY], [bx, barY], [bx, B[1]]], { color: C.mari, w: 2.6, dash: 'dash' });
    [[A, 'A'], [Cc, 'C'], [B, 'B']].forEach(([r, t]) => s.sym(((r as Rect)[0] + (r as Rect)[2]) / 2, (r as Rect)[1] + 32, t as string, { size: 22 }));
    const w1x = (w1[0] + w1[2]) / 2, w2x = (w2[0] + w2[2]) / 2;
    s.sym(w1x - 22, 252, '(heat flows)', { size: 13, color: C.slate });
    s.sym(w2x + 22, 252, '(heat flows)', { size: 13, color: C.slate });
    const res = resultBlock(s, ['Remove A–B insulator →', 'A and B already in equilibrium'], { maths: false });
    s.place([
      { t: 'Adiabatic (insulating) barrier', hi: true, p: [W / 2, barY], at: [[W / 2, 12, 'middle'], [W / 2, 8, 'middle']] },
      { t: 'Diathermic wall', p: [w1x, w1[3]], at: [[w1x + 32, 210, 'end'], [w1x + 34, 212, 'end']] },
      { t: 'Diathermic wall', p: [w2x, w2[3]], at: [[w2x - 32, 210, 'start'], [w2x - 34, 212, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { A, w1, Cc, w2, B, barY } = G111;
    const [a, b, c] = settle111();
    const E0 = Z111.cap.reduce((sum, ci, i) => sum + ci * Z111.T0[i], 0), E1 = Z111.cap[0] * a + Z111.cap[1] * b + Z111.cap[2] * c;
    const ax = (A[0] + A[2]) / 2, bx = (B[0] + B[2]) / 2;
    const Tf = (2.0 * 400 + 3.0 * 300) / 5.0;
    return [
      ['Each diathermic wall sits in a gap between C and one of A, B: A | wall | C | wall | B', A[2] < w1[0] && w1[2] < Cc[0] && Cc[2] < w2[0] && w2[2] < B[0]],
      ['The adiabatic barrier runs from A to B and passes above C without touching it', ax > A[0] && ax < A[2] && bx > B[0] && bx < B[2] && barY < Cc[1]],
      [`A (${Z111.T0[0]} K) and B (${Z111.T0[1]} K), each linked only to C (${Z111.T0[2]} K), settle to ${fmt(a, 4)}, ${fmt(b, 4)} and ${fmt(c, 4)} K: one temperature, with no A–B contact at all`, close(a, c, 1e-6) && close(b, c, 1e-6)],
      [`Energy is conserved while they settle: ΣCT = ${fmt(E0, 3)} before and ${fmt(E1, 3)} after (the final T is the capacity-weighted mean, ${fmt(E0 / 4.5, 4)} K)`, close(E0, E1, 1e-6) && close(c, E0 / 4.5, 1e-6)],
      [`Removing the A–B insulator then changes nothing: the heat current k(T_A − T_B) = ${fmt(Z111.k * (a - b), 9)}`, close(Z111.k * (a - b), 0, 1e-6)],
      [`The same law in topic 01's worked example 3: two halves through a diathermic partition settle at (2.0 × 400 + 3.0 × 300)/5.0 = ${fmt(Tf, 1)} K (the book's 340 K)`, close(Tf, 340)],
      clearCheck(fig111.draw(fig111.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.2 · from the zeroth law to temperature (topic 01)             */
/* ===================================================================== */
/** The book's five steps, its own words, top to bottom; the fourth (the label called temperature) is the point. */
const STEPS112: [string, string][] = [
  ['Thermal contact', 'via diathermic wall'],
  ['Variables settle', '(equilibrium)'],
  ['Equilibrium is transitive', '(Zeroth Law)'],
  ['Define a shared label', '= Temperature'],
  ['Thermometer compares', 'without direct contact'],
];
const G112 = { x0: 44, x1: 296, top: 10, h: 54, gap: 24, hi: 3 };
const box112 = (i: number): Rect => { const y = G112.top + i * (G112.h + G112.gap); return [G112.x0, y, G112.x1, y + G112.h]; };
const fig112: Diagram = {
  id: 'p11-11-fig-11.2',
  topic: 0,
  name: 'From the zeroth law to temperature',
  cases: [{ chip: 'Logical chain', cap: 'How the Zeroth Law leads to temperature: thermal contact, then equilibrium, then transitivity, then a shared label called temperature, so that a thermometer can compare systems without direct contact.' }],
  draw() {
    const s = new Sketch(W, box112(4)[3] + 10);
    STEPS112.forEach(([l1, l2], i) => {
      const r = box112(i), cx = (r[0] + r[2]) / 2, cy = (r[1] + r[3]) / 2;
      box(s, r, { hi: i === G112.hi, ink: i !== G112.hi });
      words(s, cx, cy - 4, l1, { size: 14, color: i === G112.hi ? C.amber : C.text });
      words(s, cx, cy + 15, l2, { size: 14, color: i === G112.hi ? C.amber : C.text });
      if (i < STEPS112.length - 1) arrow(s, [cx, r[3] + 3], [cx, box112(i + 1)[1] - 3], { color: C.slate, w: 1.8 });
    });
    return s;
  },
  check() {
    const keys = ['contact', 'settle', 'transitive', 'temperature', 'thermometer'];
    // the law itself, on a set of systems: "in equilibrium" is equal temperature
    const T = [300, 350, 300, 400, 350, 300, 400, 350];
    const eq = (i: number, j: number) => T[i] === T[j];
    let transitive = true;
    for (let i = 0; i < T.length; i++) for (let j = 0; j < T.length; j++) for (let k = 0; k < T.length; k++) if (eq(i, j) && eq(j, k) && !eq(i, k)) transitive = false;
    const groups = new Set(T).size;
    // a thermometer t, touched to each in turn, reads its temperature: two systems agree with it exactly when they are in equilibrium
    const viaThermometer = T.every((_, i) => T.every((__, j) => (T[i] === T[j]) === eq(i, j)));
    return [
      [`The five boxes are the book's steps in its order: ${STEPS112.map(([a, b]) => `${a} ${b}`).join(' → ')}`, STEPS112.length === 5 && keys.every((k, i) => `${STEPS112[i][0]} ${STEPS112[i][1]}`.toLowerCase().includes(k))],
      ['Each arrow runs down from one step to the next, and the boxes do not overlap', STEPS112.every((_, i) => i === 0 || box112(i)[1] > box112(i - 1)[3])],
      ['The caption\'s order matches: contact, then equilibrium, then transitivity, then the label called temperature, then the thermometer', keys.every((k, i) => i === 0 || STEPS112.findIndex(([a, b]) => `${a} ${b}`.toLowerCase().includes(k)) > STEPS112.findIndex(([a, b]) => `${a} ${b}`.toLowerCase().includes(keys[i - 1])))],
      [`"In equilibrium with" is transitive on ${T.length} sample systems, and splits them into ${groups} groups, one label (temperature) each`, transitive && groups === 3],
      ['A thermometer reading equal values means equilibrium, with no direct contact between the two systems', viaThermometer],
      clearCheck(fig112.draw(fig112.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.3 · the first law: heat in, internal energy, work out (topic 02) */
/* ===================================================================== */
const G113 = { l: 60, r: 200, top: 86, bot: 250, piston: [92, 110] as [number, number], cx: 130, workTo: 36, flameY: 322, heatFrom: 288 };
const fig113: Diagram = {
  id: 'p11-11-fig-11.3',
  topic: 1,
  name: 'First law: heat, internal energy and work',
  cases: [{ chip: 'First law', cap: 'Heat Δ<i>Q</i> flowing into a gas raises its internal energy <i>U</i> (a state function) and lets the gas do work Δ<i>W</i> on its surroundings: Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { l, r, top, bot, piston, cx, workTo, flameY, heatFrom } = G113;
    path(s, [[l, top], [l, bot], [r, bot], [r, top]], { w: 2.4 });
    outline(s, [[l + 3, piston[0]], [r - 3, piston[0]], [r - 3, piston[1]], [l + 3, piston[1]]], { w: 1.8 });
    arrow(s, [cx, piston[0] - 2], [cx, workTo], { color: C.ink, w: 2 });
    s.sym(cx - 9, 66, 'Δ<i>W</i>', { size: 16, anchor: 'end' });
    s.sym(cx, 172, 'internal energy <i>U</i>', { size: 14 });
    s.sym(cx, 192, '(state function)', { size: 13, color: C.slate });
    flame(s, cx, flameY);
    arrow(s, [cx, heatFrom], [cx, bot + 4], { color: C.mari, w: 2.6 });
    s.sym(cx - 10, 276, 'Δ<i>Q</i>', { size: 16, anchor: 'end', color: C.amber });
    const res = resultBlock(s, ['Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>']);
    s.place([
      { t: 'Work on surroundings', p: [cx, 58], at: [[cx + 26, 38, 'start'], [cx + 24, 34, 'start']] },
      { t: 'Heat in', hi: true, p: [cx, 272], at: [[cx + 22, 256, 'start'], [cx + 22, 252, 'start']] },
      { t: 'Gas', p: [r - 14, 222], at: [[r + 22, 206, 'start'], [r + 20, 200, 'start']] },
      { t: 'Piston', p: [r - 6, (piston[0] + piston[1]) / 2], at: [[r + 22, 112, 'start'], [r + 22, 118, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { l, r, top, bot, piston, cx, workTo, heatFrom } = G113;
    const R = 8.314, n = 1, dT = 10, Cv = 1.5 * R, Cp = 2.5 * R;
    const Q = n * Cp * dT, Wk = n * R * dT, U = n * Cv * dT;
    return [
      ['The heat arrow points up into the base of the cylinder (heat flows into the gas)', heatFrom > bot && cx > l && cx < r],
      ['The work arrow starts at the piston and points up, away from the gas (work done by the gas on its surroundings)', workTo < piston[0] && piston[0] > top - 10 && piston[1] < bot],
      [`Topic 02's worked example 1: ΔQ = 250 × 4.18 = ${fmt(250 * 4.18, 1)} J in, ΔW = 500 J out, so ΔU = ΔQ − ΔW = +${fmt(250 * 4.18 - 500, 1)} J (the book's +545 J)`, close(250 * 4.18 - 500, 545, 1e-9)],
      [`Worked example 2 (signs): ΔQ = −30 J, ΔW = −80 J gives ΔU = ${fmt(-30 - -80, 1)} J (the book's +50 J)`, -30 - -80 === 50],
      [`An ideal monatomic gas heated 10 K at constant pressure: ΔQ = nC_PΔT = ${fmt(Q, 2)} J splits into ΔU = nC_VΔT = ${fmt(U, 2)} J and ΔW = nRΔT = ${fmt(Wk, 2)} J`, close(Q, U + Wk, 1e-9)],
      clearCheck(fig113.draw(fig113.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.4 · three paths from A to B (topic 02)                        */
/* ===================================================================== */
/**
 * The book's states, read off its grid: A = (3.8, 1.0), B = (1.2, 3.8) in the
 * graph's units. Path 2 is the straight line; paths 1 and 3 are smooth curves
 * bowing above and below it (quadratic Béziers, vertical at A for path 1 and
 * level at A for path 3, as the book draws them).
 */
const S114 = { A: [3.8, 1.0] as P, B: [1.2, 3.8] as P, k1: [3.8, 3.0] as P, k3: [2.4, 1.0] as P };
const paths114 = (): P[][] => {
  const ts = samples(0, 1, 200), { A, B, k1, k3 } = S114;
  const mid: P = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  return [ts.map(bez(A, k1, B)), ts.map(bez(A, mid, B)), ts.map(bez(A, k3, B))];
};
const F114: Frame = { ox: 40, oy: 296, sx: 54, sy: 50 };
const STY114: Stroke[] = [{ w: 2.4 }, { color: C.slate, w: 2.2, dash: 'long' }, { w: 2.2, dash: 'dot' }];
const fig114: Diagram = {
  id: 'p11-11-fig-11.4',
  topic: 1,
  name: 'Three paths from A to B',
  cases: [{ chip: 'Three paths', cap: 'Three different paths from A to B on a <i>P</i>–<i>V</i> diagram: <i>Q</i> and <i>W</i> differ from path to path, but Δ<i>U</i> = <i>U</i>(B) − <i>U</i>(A) is the same for all.' }],
  draw() {
    const s = new Sketch(W, 404);
    const f = F114, { A, B } = S114;
    axes(s, f, { u1: 5.4, v1: 5.3, uName: '<i>V</i>', vName: '<i>P</i>', uTicks: [1, 2, 3, 4, 5].map((u): Tick => [u, String(u)]), vTicks: [1, 2, 3, 4, 5].map((v): Tick => [v, String(v)]), uNameAt: [X(f, 5.4) + 2, f.oy + 22] });
    paths114().forEach((pts, i) => path(s, pts.map(([v, p]) => at(f, v, p)), STY114[i]));
    const a = at(f, ...A), b = at(f, ...B);
    s.dot(a[0], a[1], 4.2, C.mari);
    s.dot(b[0], b[1], 4.2, C.mari);
    s.sym(a[0] + 10, a[1] + 18, 'A', { size: 16, anchor: 'start' });
    s.sym(b[0] - 9, b[1] - 8, 'B', { size: 16, anchor: 'end' });
    s.sym(W - 8, 22, '<i>Q</i> and <i>W</i> differ on every path', { size: 14, anchor: 'end', color: C.slate });
    // the legend: each path's own line, named
    ['Path 1', 'Path 2', 'Path 3'].forEach((t, i) => {
      const y = 334 + i * 22;
      path(s, [[14, y], [44, y]], { ...STY114[i], free: true });
      words(s, 52, y + 4.5, t, { size: 12.5, anchor: 'start' });
    });
    resultBlock(s, ['Δ<i>U</i> = <i>U</i><sub>B</sub> − <i>U</i><sub>A</sub>', 'is identical for all']);
    return s;
  },
  check() {
    const f = F114, { A, B } = S114;
    const drawn = fig114.draw(fig114.cases[0]);
    const ps = paths114();
    // read each path back from the drawing's own scale
    const back = ps.map((pts) => pts.map(([v, p]): P => { const q = at(f, v, p); return [uOf(f, q[0]), vOf(f, q[1])]; }));
    const Wk = back.map(workAlong);
    // a monatomic ideal gas in the graph's units: U = (3/2)PV
    const dU = 1.5 * (B[0] * B[1] - A[0] * A[1]);
    const Q = Wk.map((w) => dU + w);
    const lineP = (v: number) => A[1] + ((A[0] - v) / (A[0] - B[0])) * (B[1] - A[1]);
    const interp = (pts: P[], v: number) => { for (let i = 0; i < pts.length - 1; i++) { const [v0, p0] = pts[i], [v1, p1] = pts[i + 1]; if ((v - v0) * (v - v1) <= 0 && v0 !== v1) return p0 + ((p1 - p0) * (v - v0)) / (v1 - v0); } return NaN; };
    const order = samples(B[0] + 0.05, A[0] - 0.05, 60).every((v) => interp(back[0], v) > lineP(v) + 1e-9 && lineP(v) > interp(back[2], v) + 1e-9);
    return [
      ['All three paths start at A (3.8, 1.0) and end at B (1.2, 3.8)', back.every((pts) => close(pts[0][0], A[0], 1e-9) && close(pts[0][1], A[1], 1e-9) && close(pts[pts.length - 1][0], B[0], 1e-9) && close(pts[pts.length - 1][1], B[1], 1e-9))],
      ['Path 2 is the straight line; path 1 lies above it and path 3 below it all the way', order && back[1].every(([v, p]) => close(p, lineP(v), 1e-9))],
      [`The work done by the gas (area under each path, negative: A to B is a compression) differs: W₁ = ${fmt(Wk[0], 3)}, W₂ = ${fmt(Wk[1], 3)}, W₃ = ${fmt(Wk[2], 3)}`, Wk[0] < Wk[1] && Wk[1] < Wk[2] && Wk.every((w) => w < 0)],
      [`Path 2's work is the trapezium −½(P_A + P_B)(V_A − V_B) = ${fmt(-0.5 * (A[1] + B[1]) * (A[0] - B[0]), 3)}`, close(Wk[1], -0.5 * (A[1] + B[1]) * (A[0] - B[0]), 1e-9)],
      [`For a monatomic ideal gas ΔU = (3/2)(P_BV_B − P_AV_A) = ${fmt(dU, 3)} on every path, so Q = ΔU + W differs: ${Q.map((q) => fmt(q, 3)).join(', ')}`, Q[0] !== Q[1] && Q[1] !== Q[2] && Q.every((q, i) => close(q - Wk[i], dU, 1e-12))],
      clearCheck(drawn),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.5 · the four basic processes from one start (topic 03)        */
/* ===================================================================== */
/**
 * The book's curves, read off its grid: start (1.5, 1.5); the isochoric line
 * up to P = 4.7, the isobaric line and both curves out to V = 4.7. Its curves
 * end at P = 0.48 (isotherm) and 0.22 (adiabat), which is PV = 2.25 and
 * PV^γ = const with γ = 5/3 (a monatomic gas).
 */
const S115 = { V0: 1.5, P0: 1.5, Vend: 4.7, Ptop: 4.7, g: 5 / 3 };
const iso115 = (V: number) => (S115.P0 * S115.V0) / V;
const adi115 = (V: number) => S115.P0 * (S115.V0 / V) ** S115.g;
const F115: Frame = { ox: 40, oy: 322, sx: 46, sy: 56 };
/** The isochoric and isobaric lines, from the start: (V, P) ends. */
const LINES115 = { isochoric: [[S115.V0, S115.P0], [S115.V0, S115.Ptop]] as [P, P], isobaric: [[S115.V0, S115.P0], [S115.Vend, S115.P0]] as [P, P] };
const fig115: Diagram = {
  id: 'p11-11-fig-11.5',
  topic: 2,
  name: 'The four basic processes on a P–V diagram',
  cases: [{ chip: 'Four processes', cap: 'The four basic processes from a common starting point on a <i>P</i>–<i>V</i> diagram. The adiabatic curve is steeper than the isotherm; its slope is <i>γ</i> times as large.' }],
  draw() {
    const s = new Sketch(W, 420);
    const f = F115, { V0, P0, Vend } = S115;
    axes(s, f, { u1: 6.3, v1: 5.3, uName: '<i>V</i>', vName: '<i>P</i>', uTicks: [1, 2, 3, 4, 5].map((u): Tick => [u, String(u)]), vTicks: [1, 2, 3, 4, 5].map((v): Tick => [v, String(v)]), uNameAt: [X(f, 6.3), f.oy + 22] });
    path(s, LINES115.isochoric.map(([v, p]) => at(f, v, p)), { w: 2.4 });
    path(s, LINES115.isobaric.map(([v, p]) => at(f, v, p)), { color: C.slate, w: 2.4 });
    curve(s, f, iso115, V0, Vend, { w: 2.4 });
    curve(s, f, adi115, V0, Vend, { color: C.mari, w: 2.8 });
    const st = at(f, V0, P0);
    s.dot(st[0], st[1], 4);
    s.sym(st[0] + 10, st[1] - 9, 'start', { size: 14, anchor: 'start' });
    // each process's rule, next to its line
    s.sym(st[0] - 8, Y(f, 3.2), '<i>V</i> const', { size: 13.5, anchor: 'end' });
    s.sym(X(f, Vend) + 6, Y(f, P0) + 4.5, '<i>P</i> const', { size: 13.5, anchor: 'start' });
    s.sym(X(f, Vend) + 6, Y(f, iso115(Vend)) - 3, '<i>PV</i> = const', { size: 13.5, anchor: 'start' });
    s.sym(X(f, Vend) + 6, Y(f, adi115(Vend)) + 4.5, '<i>PV</i><sup><i>γ</i></sup> = const', { size: 13.5, anchor: 'start', color: C.amber });
    const res = resultBlock(s, ['Adiabatic is steeper:', 'slope = <i>γ</i> × isothermal slope'], { size: 14 });
    s.place([
      { t: 'Isochoric', p: at(f, V0, 4.2), at: [[st[0] + 14, 66, 'start'], [st[0] + 14, 70, 'start']] },
      { t: 'Isobaric', p: at(f, 4.0, P0), at: [[X(f, 4.0) - 30, 200, 'start'], [X(f, 4.0) - 40, 196, 'start']] },
      { t: 'Isothermal', p: at(f, 3.0, iso115(3.0)), at: [[X(f, 3.0) - 50, 244, 'end'], [X(f, 3.0) - 44, 244, 'end'], [X(f, 2.6), 244, 'start']] },
      { t: 'Adiabatic', hi: true, p: at(f, 2.0, adi115(2.0)), at: [[44, 286, 'start'], [44, 290, 'start'], [44, 296, 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const f = F115, { V0, P0, Vend, g } = S115, h = 1e-6;
    const slope = (fn: (V: number) => number) => (vOf(f, Y(f, fn(V0 + h))) - vOf(f, Y(f, fn(V0 - h)))) / (2 * h);
    const sIso = slope(iso115), sAdi = slope(adi115);
    const Vs = samples(V0, Vend, 200).slice(1);
    return [
      [`The isotherm keeps PV = ${fmt(P0 * V0, 2)} and the adiabat PV^γ = ${fmt(P0 * V0 ** g, 4)} (γ = 5/3) at every sampled point`, Vs.every((V) => close(V * iso115(V), P0 * V0, 1e-9) && close(V ** g * adi115(V), P0 * V0 ** g, 1e-9))],
      [`The isochoric line is vertical (V = ${V0} throughout, P rising to ${LINES115.isochoric[1][1]}) and the isobaric line level (P = ${P0} throughout), both from the start`, LINES115.isochoric.every(([v]) => v === V0) && LINES115.isobaric.every(([, p]) => p === P0) && [LINES115.isochoric[0], LINES115.isobaric[0]].every(([v, p]) => v === V0 && p === P0) && LINES115.isochoric[1][1] > P0 && LINES115.isobaric[1][0] > V0],
      [`At the start the isotherm's slope is −P/V = ${fmt(sIso, 4)} and the adiabat's −γP/V = ${fmt(sAdi, 4)}: the adiabat is ${fmt(sAdi / sIso, 4)} = γ times as steep`, close(sIso, -P0 / V0, 1e-5) && close(sAdi / sIso, g, 1e-5)],
      ['The adiabat lies below the isotherm for every V past the start: it loses pressure faster', Vs.every((V) => adi115(V) < iso115(V))],
      [`At V = 4.7 the isotherm reads ${fmt(iso115(Vend), 2)} and the adiabat ${fmt(adi115(Vend), 2)}, as the book's curves do (0.48 and 0.22)`, fmt(iso115(Vend), 2) === '0.48' && fmt(adi115(Vend), 2) === '0.22'],
      clearCheck(fig115.draw(fig115.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.6 · isothermal and adiabatic expansion compared (topic 03)    */
/* ===================================================================== */
/** The book's curves: start (1.2, 3.5), both to V_f = 3.8; they end at 1.1 and 0.5, which is γ = 5/3. */
const S116 = { V0: 1.2, P0: 3.5, Vf: 3.8, g: 5 / 3 };
const iso116 = (V: number) => (S116.P0 * S116.V0) / V;
const adi116 = (V: number) => S116.P0 * (S116.V0 / V) ** S116.g;
const F116: Frame = { ox: 40, oy: 304, sx: 50, sy: 60 };
const fig116: Diagram = {
  id: 'p11-11-fig-11.6',
  topic: 2,
  name: 'Isothermal against adiabatic work',
  cases: [{ chip: 'Work compared', cap: 'Isothermal and adiabatic expansion from the same start to the same final volume. The area under the isothermal curve (the work) is larger, so <i>W</i>(isothermal) > <i>W</i>(adiabatic).' }],
  draw() {
    const s = new Sketch(W, 392);
    const f = F116, { V0, P0, Vf } = S116;
    axes(s, f, { u1: 5.8, v1: 4.4, uName: '<i>V</i>', vName: '<i>P</i>', uTicks: [1, 2, 3, 4, 5].map((u): Tick => [u, String(u)]), vTicks: [1, 2, 3, 4].map((v): Tick => [v, String(v)]) });
    const adTag: Rect = [X(f, 1.9), f.oy - 30, X(f, 1.9) + 80, f.oy - 8];
    // The skip runs down to the V axis, so no short stubs are left under the tag.
    slivers(s, f, () => 0, adi116, V0, Vf, { skip: [[adTag[0], adTag[1], adTag[2], f.oy]] });
    slivers(s, f, adi116, iso116, V0, Vf, { color: C.mari, gap: 5 });
    path(s, [at(f, Vf, 0), at(f, Vf, iso116(Vf))], { color: C.slate, w: 1.2, dash: 'dot', free: true });
    curve(s, f, iso116, V0, Vf, { w: 2.6 });
    curve(s, f, adi116, V0, Vf, { color: C.slate, w: 2.6 });
    const st = at(f, V0, P0), ei = at(f, Vf, iso116(Vf)), ea = at(f, Vf, adi116(Vf));
    s.dot(st[0], st[1], 4);
    s.dot(ei[0], ei[1], 3.6);
    s.dot(ea[0], ea[1], 3.6);
    s.sym(st[0] + 10, st[1] - 10, 'start', { size: 14, anchor: 'start' });
    s.sym(ei[0] + 8, ei[1] - 8, '<i>P</i><sub><i>f</i></sub> (isothermal)', { size: 13, anchor: 'start' });
    s.sym(ea[0] + 8, ea[1] + 5, '<i>P</i><sub><i>f</i></sub> (adiabatic)', { size: 13, anchor: 'start' });
    s.sym(ea[0], f.oy + 34, '<i>V</i><sub><i>f</i></sub>', { size: 14 });
    const res = resultBlock(s, ['<i>W</i><sub>isothermal</sub> > <i>W</i><sub>adiabatic</sub> (same expansion)'], { size: 13 });
    s.place([
      { t: 'Isothermal', p: at(f, 2.3, iso116(2.3)), at: [[X(f, 2.6), Y(f, 2.75), 'start'], [X(f, 2.7), Y(f, 2.9), 'start']] },
      { t: 'Adiabatic', p: at(f, 1.75, adi116(1.75)), at: [[adTag[0], adTag[1], 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const { V0, P0, Vf, g } = S116;
    const Wiso = P0 * V0 * Math.log(Vf / V0), Wad = (P0 * V0 - adi116(Vf) * Vf) / (g - 1);
    const Iiso = simpson(iso116, V0, Vf), Iad = simpson(adi116, V0, Vf);
    const r2 = Math.log(2) / ((1 - 2 ** (1 - 5 / 3)) / (5 / 3 - 1));
    return [
      [`Both start at (${V0}, ${P0}) and end at V_f = ${Vf}: P_f = ${fmt(iso116(Vf), 2)} on the isotherm and ${fmt(adi116(Vf), 2)} on the adiabat (the book's 1.1 and 0.5)`, fmt(iso116(Vf), 1) === '1.1' && fmt(adi116(Vf), 1) === '0.5'],
      ['At every volume between, the isothermal pressure is higher (heat keeps its temperature up)', samples(V0, Vf, 200).slice(1).every((V) => iso116(V) > adi116(V))],
      [`Area under the isotherm ${fmt(Iiso, 4)} = nRT ln(V_f/V_i) = ${fmt(Wiso, 4)}; under the adiabat ${fmt(Iad, 4)} = (P_iV_i − P_fV_f)/(γ − 1) = ${fmt(Wad, 4)}`, close(Iiso, Wiso, 1e-9) && close(Iad, Wad, 1e-9)],
      [`So W(isothermal) = ${fmt(Wiso, 3)} > W(adiabatic) = ${fmt(Wad, 3)}; the marigold band between the curves is the difference, ${fmt(Wiso - Wad, 3)}`, Wiso > Wad],
      [`The same rule in topic 03's worked example 4 (V₀ → 2V₀, γ = 5/3): W_iso/W_adia = ln 2/(1.5(1 − 2^(−2/3))) = ${fmt(r2, 3)} ≈ 1.25`, fmt(r2, 2) === '1.25'],
      clearCheck(fig116.draw(fig116.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.7 · the same ΔT at constant V and at constant P (topic 04)    */
/* ===================================================================== */
/**
 * Two equal cylinders of gas start at the same volume and temperature T₀ =
 * 300 K and are heated by the same ΔT = 60 K (topic 04's worked example 3:
 * 2.0 mol, monatomic). The left is lidded (V fixed); the right carries a
 * weight on a free piston (P fixed), so its gas column grows by ΔT/T₀ (Charles):
 * the piston's rise is drawn to that scale, and PΔV = nRΔT.
 */
const S117 = { n: 2.0, R: 8.314, T0: 300, dT: 60 };
const G117 = { L: [64, 126] as [number, number], Rr: [194, 256] as [number, number], bot: 232, h0: 118, pist: 12, wallTop: 46 };
const top117 = () => { const { bot, h0 } = G117, { T0, dT } = S117; return { old: bot - h0, now: bot - h0 * ((T0 + dT) / T0) }; };
const fig117: Diagram = {
  id: 'p11-11-fig-11.7',
  topic: 3,
  name: 'Heating at constant volume and at constant pressure',
  cases: [{ chip: 'Same ΔT, two ways', cap: 'The same Δ<i>T</i> at constant volume and at constant pressure. At constant pressure the gas also does work <i>P</i>Δ<i>V</i>, so it needs <i>nR</i>Δ<i>T</i> more heat, which gives <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> (Mayer’s relation).' }],
  draw() {
    const s = new Sketch(W, 416);
    const { L, Rr, bot, pist, wallTop } = G117, { old, now } = top117();
    const lc = (L[0] + L[1]) / 2, rc = (Rr[0] + Rr[1]) / 2;
    // left: a closed, lidded cylinder
    path(s, [[L[0], old], [L[0], bot], [L[1], bot], [L[1], old]], { w: 2.4 });
    path(s, [[L[0] - 6, old], [L[1] + 6, old]], { w: 3.4 });
    s.sym(lc, old - 14, '<i>V</i> fixed', { size: 15 });
    words(s, lc, (old + bot) / 2 + 4, 'gas', { size: 13, color: C.slate });
    // right: a free piston under a weight, risen from where it started
    path(s, [[Rr[0], wallTop], [Rr[0], bot], [Rr[1], bot], [Rr[1], wallTop]], { w: 2.4 });
    path(s, [[Rr[0] + 3, old], [Rr[1] - 3, old]], { color: C.slate, w: 1.3, dash: 'dash' });
    outline(s, [[Rr[0] + 3, now - pist], [Rr[1] - 3, now - pist], [Rr[1] - 3, now], [Rr[0] + 3, now]], { w: 1.8 });
    outline(s, [[rc - 15, now - pist - 18], [rc + 15, now - pist - 18], [rc + 15, now - pist], [rc - 15, now - pist]], { w: 1.8 });
    s.sym(rc, wallTop - 14, 'weight → <i>P</i> fixed', { size: 15 });
    words(s, rc, (now + bot) / 2 + 4, 'gas', { size: 13, color: C.slate });
    // the extra: the piston's rise is the work PΔV; ΔU beside it
    const ax = Rr[1] + 14;
    arrow(s, [ax, old], [ax, now - 4], { color: C.mari, w: 2.6 });
    s.sym(ax + 8, (old + now) / 2 + 5, '<i>P</i>Δ<i>V</i> work', { size: 14, anchor: 'start', color: C.amber });
    arrow(s, [ax, bot - 10], [ax, bot - 70], { color: C.ink, w: 2 });
    s.sym(ax + 8, bot - 36, 'Δ<i>U</i>', { size: 15, anchor: 'start' });
    // heat from below
    const fy = 294;
    [lc, rc].forEach((cx) => { flame(s, cx, fy); arrow(s, [cx, fy - 30], [cx, bot + 4], { color: C.ink, w: 2 }); });
    s.sym(lc, 320, 'Δ<i>Q</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>,', { size: 14 });
    s.sym(lc, 338, 'all into <i>U</i>', { size: 14 });
    s.sym(rc, 320, 'Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>', { size: 14 });
    s.sym(8, 360, 'Same Δ<i>T</i>, but the right one needs <i>nR</i>Δ<i>T</i> more heat ⇒', { size: 13.5, anchor: 'start' });
    const res = resultBlock(s, ['<i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i>']);
    s.place([
      { t: 'Flame', p: [lc - 12, fy - 10], at: [[8, fy - 30, 'start'], [6, fy - 34, 'start']] },
      { t: 'Flame', p: [rc + 12, fy - 10], at: [[W - 8, fy - 30, 'end'], [W - 6, fy - 34, 'end']] },
    ], [res]);
    return s;
  },
  check() {
    const { n, R, T0, dT } = S117, { bot, h0 } = G117, { old, now } = top117();
    const Cv = 1.5 * R, Cp = 2.5 * R, QV = n * Cv * dT, QP = n * Cp * dT;
    const growth = (bot - now) / (bot - old);
    // P V₀ = nRT₀, so PΔV = P V₀ (growth − 1) = nRT₀ (growth − 1)
    const PdV = n * R * T0 * (growth - 1);
    return [
      ['Both gases start at the same volume: the left lid and the right piston\'s starting line are at the same height', close(bot - old, h0)],
      [`At constant P the drawn gas column grows by ${fmt(growth, 4)} = (T₀ + ΔT)/T₀ = ${fmt((T0 + dT) / T0, 4)} (V ∝ T, Charles)`, close(growth, (T0 + dT) / T0, 1e-12)],
      [`So the work done is PΔV = nRT₀(ΔV/V₀) = ${fmt(PdV, 1)} J = nRΔT = ${fmt(n * R * dT, 1)} J`, close(PdV, n * R * dT, 1e-9)],
      [`Topic 04's worked example 3 (2.0 mol, monatomic, ΔT = 60 K): ΔQ_V = nC_VΔT = ${fmt(QV / 1000, 2)} kJ, ΔQ_P = nC_PΔT = ${fmt(QP / 1000, 2)} kJ (the book's 1.50 and 2.49)`, fmt(QV / 1000, 2) === '1.5' && fmt(QP / 1000, 2) === '2.49'],
      [`The extra heat ΔQ_P − ΔQ_V = ${fmt(QP - QV, 1)} J is exactly nRΔT (the book's 998 J), the same ΔU = ${fmt(n * Cv * dT, 1)} J on both sides`, close(QP - QV, n * R * dT, 1e-9) && fmt(QP - QV, 0) === '998'],
      [`Per mole per kelvin: C_P − C_V = ${fmt(Cp - Cv, 3)} = R (Mayer)`, close(Cp - Cv, R, 1e-12)],
      clearCheck(fig117.draw(fig117.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.8 · heat engine and refrigerator (topic 05)                   */
/* ===================================================================== */
/**
 * Each machine as reservoirs and flows. A flow runs from one part to another;
 * `check` balances each machine (heat in = heat out + work out) and reads each
 * arrow's direction back from the drawing.
 */
type Part = 'hot' | 'cold' | 'machine' | 'out';
type Flow = { q: 'Q1' | 'Q2' | 'W'; from: Part; to: Part };
const ENG118: Flow[] = [{ q: 'Q1', from: 'hot', to: 'machine' }, { q: 'Q2', from: 'machine', to: 'cold' }, { q: 'W', from: 'machine', to: 'out' }];
const FRI118: Flow[] = [{ q: 'Q2', from: 'cold', to: 'machine' }, { q: 'Q1', from: 'machine', to: 'hot' }, { q: 'W', from: 'out', to: 'machine' }];
/** Each side's geometry: reservoirs, machine circle and the work arrow's far end. */
const side118 = (cx: number, right: boolean) => ({
  hot: [cx - 72, 62, cx + 72, 96] as Rect,
  cold: [cx - 72, 222, cx + 72, 256] as Rect,
  c: [cx, 159] as P, r: 31,
  out: [right ? cx - 82 : cx + 82, 159] as P,
});
const L118 = side118(84, false), R118 = side118(256, true);
/** An arrow's two ends for a flow, on the drawing. */
function ends118(g: ReturnType<typeof side118>, fl: Flow): [P, P] {
  const pt = (p: Part, toward: P): P => {
    if (p === 'hot') return [g.c[0], g.hot[3] + 3];
    if (p === 'cold') return [g.c[0], g.cold[1] - 3];
    if (p === 'out') return g.out;
    const d = len(g.c, toward), k = (g.r + 3) / d;
    return [g.c[0] + (toward[0] - g.c[0]) * k, g.c[1] + (toward[1] - g.c[1]) * k];
  };
  const far = (p: Part): P => (p === 'hot' ? [g.c[0], g.hot[3]] : p === 'cold' ? [g.c[0], g.cold[1]] : g.out);
  const a = fl.from === 'machine' ? pt('machine', far(fl.to)) : pt(fl.from, g.c);
  const b = fl.to === 'machine' ? pt('machine', far(fl.from)) : pt(fl.to, g.c);
  return [a, b];
}
function circle(s: Sketch, c: P, r: number) {
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="none" stroke="${C.ink}" stroke-width="2"/>`);
  keep(s, samples(0, 2 * Math.PI, 48).map((t): P => [c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]));
}
const fig118: Diagram = {
  id: 'p11-11-fig-11.8',
  topic: 4,
  name: 'Heat engine and refrigerator',
  cases: [{ chip: 'Engine and fridge', cap: 'Heat engine (left): heat <i>Q</i><sub>1</sub> in, work <i>W</i> out, heat <i>Q</i><sub>2</sub> rejected. Refrigerator (right): work <i>W</i> in moves heat <i>Q</i><sub>2</sub> from cold to hot, so <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>. Engine: pay heat, get work. Fridge: pay work, move heat.' }],
  draw() {
    const s = new Sketch(W, 352);
    path(s, [[W / 2, 52], [W / 2, 270]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    ([[L118, ENG118, 'Engine', 'cold reservoir'], [R118, FRI118, 'Fridge', 'cold space']] as const).forEach(([g, flows, name, cold]) => {
      box(s, g.hot); box(s, g.cold);
      s.sym(g.c[0], (g.hot[1] + g.hot[3]) / 2 + 5, '<i>T</i><sub>1</sub> (hot reservoir)', { size: 13 });
      s.sym(g.c[0], (g.cold[1] + g.cold[3]) / 2 + 5, `<i>T</i><sub>2</sub> (${cold})`, { size: 13 });
      circle(s, g.c, g.r);
      words(s, g.c[0], g.c[1] + 4.5, name, { size: 12.5, bold: true });
      flows.forEach((fl) => { const [a, b] = ends118(g, fl); arrow(s, a, b, fl.q === 'W' ? { color: C.mari, w: 2.6 } : { color: C.ink, w: 2 }); });
    });
    // what each arrow carries
    s.sym(L118.c[0] + 8, 116, '<i>Q</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.sym(L118.c[0] + 8, 212, '<i>Q</i><sub>2</sub>', { size: 15, anchor: 'start' });
    s.sym(L118.c[0] + 56, 148, '<i>W</i>', { size: 15, color: C.amber });
    s.sym(R118.c[0] + 8, 116, '<i>Q</i><sub>1</sub>', { size: 15, anchor: 'start' });
    s.sym(R118.c[0] + 8, 212, '<i>Q</i><sub>2</sub>', { size: 15, anchor: 'start' });
    s.sym(R118.c[0] - 56, 148, '<i>W</i>', { size: 15, color: C.amber });
    s.sym(R118.c[0], 44, '<i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>', { size: 15 });
    resultBlock(s, ['Engine: pay heat, get work.', 'Fridge: pay work, move heat.'], { maths: false });
    return s;
  },
  check() {
    const bal = (flows: Flow[], v: Record<string, number>) => flows.reduce((sum, fl) => sum + (fl.to === 'machine' ? v[fl.q] : fl.from === 'machine' ? -v[fl.q] : 0), 0);
    const e = { Q1: 1000, Q2: 600, W: 400 }, r = { Q1: 250, Q2: 200, W: 50 };
    const dir = (g: ReturnType<typeof side118>, flows: Flow[]) => flows.map((fl) => { const [a, b] = ends118(g, fl); return [b[0] - a[0], b[1] - a[1]] as P; });
    const de = dir(L118, ENG118), dr = dir(R118, FRI118);
    return [
      ['Engine: Q₁ runs down from the hot reservoir into it, Q₂ down out of it to the cold reservoir, W out to the side', de[0][1] > 0 && de[1][1] > 0 && de[2][0] > 0 && de[2][1] === 0],
      ['Refrigerator: Q₂ runs up from the cold space into it, Q₁ up out of it to the hot reservoir, W in from the side', dr[0][1] < 0 && dr[1][1] < 0 && dr[2][0] > 0 && dr[2][1] === 0],
      ['The hot reservoir is drawn above, the cold one below, on both sides', L118.hot[3] < L118.cold[1] && R118.hot[3] < R118.cold[1]],
      [`Topic 05's worked example 1 (engine): Q₁ = 1000 J in, Q₂ = 600 J out, W = 400 J out balances (net ${bal(ENG118, e)}); η = W/Q₁ = ${fmt(e.W / e.Q1, 2)}`, bal(ENG118, e) === 0 && close(e.W / e.Q1, 0.4)],
      [`Worked example 2 (fridge): Q₂ = 200 J and W = 50 J in, Q₁ = Q₂ + W = 250 J out balances (net ${bal(FRI118, r)}); COP = Q₂/W = ${fmt(r.Q2 / r.W, 2)}`, bal(FRI118, r) === 0 && r.Q1 === r.Q2 + r.W && close(r.Q2 / r.W, 4)],
      clearCheck(fig118.draw(fig118.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.9 · impossible machines (topic 06)                            */
/* ===================================================================== */
const L119 = { hot: [14, 20, 156, 54] as Rect, m: [64, 100, 116, 136] as Rect, out: 160 };
const R119 = { hot: [182, 20, 314, 54] as Rect, m: [214, 100, 266, 136] as Rect, cold: [182, 178, 314, 212] as Rect };
/** A cross from corner to corner of a box: this machine cannot exist. */
function cross(s: Sketch, r: Rect) {
  const e = 5;
  s.line(r[0] + e, r[1] + e, r[2] - e, r[3] - e, { color: C.mari, w: 3 });
  s.line(r[0] + e, r[3] - e, r[2] - e, r[1] + e, { color: C.mari, w: 3 });
}
const fig119: Diagram = {
  id: 'p11-11-fig-11.9',
  topic: 5,
  name: 'Impossible machines',
  cases: [{ chip: 'Two violations', cap: 'Impossible machines. Left: an engine that turns heat from a single reservoir entirely into work (violates Kelvin–Planck). Right: a device that moves heat from cold to hot with no work input (violates Clausius).' }],
  draw() {
    const s = new Sketch(W, 272);
    path(s, [[W / 2, 12], [W / 2, 222]], { color: C.grey, w: 1.2, dash: 'dash', free: true });
    const my = (L119.m[1] + L119.m[3]) / 2;
    // left: one reservoir in, all of it out as work
    const lx = (L119.m[0] + L119.m[2]) / 2;
    box(s, L119.hot); box(s, L119.m, { ink: true, rx: 6 });
    s.sym(lx, (L119.hot[1] + L119.hot[3]) / 2 + 5, '<i>T</i><sub>1</sub>', { size: 15 });
    arrow(s, [lx, L119.hot[3] + 3], [lx, L119.m[1] - 3], { w: 2 });
    arrow(s, [L119.m[2] + 3, my], [L119.out, my], { w: 2 });
    s.sym(lx + 9, 83, '<i>Q</i>', { size: 15, anchor: 'start' });
    s.sym((L119.m[2] + L119.out) / 2 + 2, my - 9, '<i>W</i> = <i>Q</i>', { size: 14 });
    s.sym(lx, L119.m[3] + 24, 'rejects nothing', { size: 13, color: C.slate });
    cross(s, L119.m);
    // right: heat from cold to hot, no work in
    const rx = (R119.m[0] + R119.m[2]) / 2;
    box(s, R119.hot); box(s, R119.cold); box(s, R119.m, { ink: true, rx: 6 });
    s.sym((R119.hot[0] + R119.hot[2]) / 2, (R119.hot[1] + R119.hot[3]) / 2 + 5, '<i>T</i><sub>1</sub>', { size: 15 });
    s.sym((R119.cold[0] + R119.cold[2]) / 2, (R119.cold[1] + R119.cold[3]) / 2 + 5, '<i>T</i><sub>2</sub>', { size: 15 });
    arrow(s, [rx, R119.cold[1] - 3], [rx, R119.m[3] + 3], { w: 2 });
    arrow(s, [rx, R119.m[1] - 3], [rx, R119.hot[3] + 3], { w: 2 });
    s.sym(rx - 9, 83, '<i>Q</i>', { size: 15, anchor: 'end' });
    s.sym(rx - 9, 163, '<i>Q</i>', { size: 15, anchor: 'end' });
    s.sym(rx + 9, 166, 'no work input', { size: 13, anchor: 'start', color: C.slate });
    cross(s, R119.m);
    words(s, (L119.hot[0] + L119.hot[2]) / 2, 240, '100% heat → work from', { size: 11.5, bold: true });
    words(s, (L119.hot[0] + L119.hot[2]) / 2, 256, 'one reservoir: forbidden', { size: 11.5, bold: true });
    words(s, (R119.hot[0] + R119.hot[2]) / 2, 240, 'Heat cold → hot with', { size: 11.5, bold: true });
    words(s, (R119.hot[0] + R119.hot[2]) / 2, 256, 'no work: forbidden', { size: 11.5, bold: true });
    s.place([
      { t: 'Engine', p: [L119.m[0], my], at: [[2, 66, 'start'], [2, 62, 'start']] },
      { t: 'Device', p: [R119.m[2], my], at: [[R119.m[2] + 8, my - 30, 'start'], [R119.m[2] + 8, my - 34, 'start']] },
    ]);
    return s;
  },
  check() {
    const Qh = 500, T = 400, T1 = 400, T2 = 300, Q = 100;
    const dSuniv = -Q / T2 + Q / T1;
    return [
      ['Left: the only heat arrow runs from the single reservoir T₁ into the engine, and the only way out is the work W = Q (nothing to a cold reservoir)', L119.hot[3] < L119.m[1] && L119.out > L119.m[2]],
      [`Topic 06's worked example 3: 500 J from one 400 K reservoir, 500 J of work. First law: ΔU_cycle = Q − W = ${Qh - 500} (satisfied); efficiency W/Q = ${fmt(500 / Qh, 2)}, above any Carnot limit 1 − T_c/${T} < 1: Kelvin–Planck forbids it`, Qh - 500 === 0 && 500 / Qh === 1],
      ['Right: the heat Q runs up from the cold reservoir T₂ (below) through the device to the hot reservoir T₁ (above), with no work arrow at all', R119.cold[1] > R119.m[3] && R119.hot[3] < R119.m[1]],
      [`Moving Q = ${Q} J from ${T2} K to ${T1} K alone would change the universe's entropy by −Q/T₂ + Q/T₁ = ${fmt(dSuniv, 4)} J/K < 0: Clausius forbids it`, dSuniv < 0],
      clearCheck(fig119.draw(fig119.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.10 · the Carnot cycle (topic 07)                              */
/* ===================================================================== */
/**
 * The book's cycle, read off its grid: A = (1, 2.5), B = (2, 1.25), so the hot
 * isotherm is PV = nRT₁ = 2.5; D ≈ (3.95, 0.25) and C ≈ (7.9, 0.127) on the cold
 * isotherm PV = nRT₂ = 1.0; the adiabats are PV^γ = const with γ = 5/3 (which
 * puts D and C exactly where the book has them). T₂/T₁ = 0.4.
 */
const S1110 = (() => {
  const g = 5 / 3, k1 = 2.5, k2 = 1.0, VA = 1, VB = 2;
  const VD = VA * (k1 / k2) ** (1 / (g - 1)), VC = VB * (k1 / k2) ** (1 / (g - 1));
  return { g, k1, k2, VA, VB, VC, VD };
})();
const hot1110 = (V: number) => S1110.k1 / V;
const cold1110 = (V: number) => S1110.k2 / V;
const adB1110 = (V: number) => hot1110(S1110.VB) * (S1110.VB / V) ** S1110.g;
const adA1110 = (V: number) => hot1110(S1110.VA) * (S1110.VA / V) ** S1110.g;
/** The loop in order A → B → C → D → A, as (V, P) points. */
const loop1110 = (): P[] => {
  const { VA, VB, VC, VD } = S1110, n = 120;
  const leg = (fn: (V: number) => number, a: number, b: number) => samples(a, b, n).map((V): P => [V, fn(V)]);
  return [...leg(hot1110, VA, VB), ...leg(adB1110, VB, VC).slice(1), ...leg(cold1110, VC, VD).slice(1), ...leg(adA1110, VD, VA).slice(1, -1)];
};
/** Heat taken in on a leg from V = a to b: Q = ΔU + ∫P dV, with U = PV/(γ − 1). */
const legQ = (fn: (V: number) => number, a: number, b: number) => (fn(b) * b - fn(a) * a) / (S1110.g - 1) + simpson(fn, a, b, 4000);
const F1110: Frame = { ox: 36, oy: 300, sx: 35, sy: 96 };
const fig1110: Diagram = {
  id: 'p11-11-fig-11.10',
  topic: 6,
  name: 'The Carnot cycle',
  cases: [{ chip: 'Carnot cycle', cap: 'The Carnot cycle on a <i>P</i>–<i>V</i> diagram: isothermal expansion A→B at <i>T</i><sub>1</sub> (absorbs <i>Q</i><sub>1</sub>), adiabatic expansion B→C, isothermal compression C→D at <i>T</i><sub>2</sub> (rejects <i>Q</i><sub>2</sub>), adiabatic compression D→A. Enclosed area = <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>; the loop is clockwise (engine).' }],
  draw() {
    const s = new Sketch(W, 486);
    const f = F1110, { VA, VB, VC, VD } = S1110;
    axes(s, f, { u1: 8.6, v1: 2.85, uName: '<i>V</i>', vName: '<i>P</i>', uTicks: [2, 4, 6, 8].map((u): Tick => [u, String(u)]), vTicks: [0.5, 1, 1.5, 2, 2.5].map((v): Tick => [v, String(v)]), uNameAt: [X(f, 8.6), f.oy + 22] });
    const upper = (V: number) => (V <= VB ? hot1110(V) : adB1110(V)), lower = (V: number) => (V <= VD ? adA1110(V) : cold1110(V));
    slivers(s, f, lower, upper, VA, VC, { color: C.mari, gap: 5 });
    const iso: Stroke = { w: 2.6 }, adi: Stroke = { color: C.slate, w: 2.4, dash: 'long' };
    curve(s, f, hot1110, VA, VB, iso);
    curve(s, f, adB1110, VB, VC, adi);
    curve(s, f, cold1110, VD, VC, iso);
    curve(s, f, adA1110, VA, VD, adi);
    // direction: A → B → C → D → A
    const mid = (fn: (V: number) => number, a: number, b: number, col: string) => { const p = at(f, a, fn(a)), q = at(f, b, fn(b)); s.mid(p[0], p[1], q[0], q[1], col); };
    mid(hot1110, 1.42, 1.5, C.ink);
    mid(adB1110, 4.6, 4.8, C.slate);
    mid(cold1110, 6.1, 5.9, C.ink);
    mid(adA1110, 2.3, 2.2, C.slate);
    const pA = at(f, VA, hot1110(VA)), pB = at(f, VB, hot1110(VB)), pC = at(f, VC, cold1110(VC)), pD = at(f, VD, cold1110(VD));
    [pA, pB, pC, pD].forEach((p) => s.dot(p[0], p[1], 3.8));
    s.sym(pA[0] - 8, pA[1] - 6, 'A', { size: 16, anchor: 'end' });
    s.sym(pB[0] + 9, pB[1] - 4, 'B', { size: 16, anchor: 'start' });
    s.sym(pC[0] + 2, pC[1] - 12, 'C', { size: 16 });
    s.sym(pD[0] - 6, pD[1] + 20, 'D', { size: 16 });
    // the key: each leg's own line, named as the book names it
    const key: [string, Stroke][] = [
      ['A → B isothermal expansion, absorb <i>Q</i><sub>1</sub> (<i>T</i><sub>1</sub>)', iso],
      ['B → C adiabatic expansion, <i>T</i><sub>1</sub> → <i>T</i><sub>2</sub>', adi],
      ['C → D isothermal compression, reject <i>Q</i><sub>2</sub> (<i>T</i><sub>2</sub>)', iso],
      ['D → A adiabatic compression, <i>T</i><sub>2</sub> → <i>T</i><sub>1</sub>', adi],
    ];
    key.forEach(([t, st], i) => {
      const y = f.oy + 46 + i * 21;
      path(s, [[10, y - 4.5], [36, y - 4.5]], { ...st, free: true });
      s.sym(44, y, t, { size: 13, anchor: 'start' });
    });
    resultBlock(s, ['Enclosed area = <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>;', 'loop is clockwise (engine)'], { size: 14 });
    return s;
  },
  check() {
    const f = F1110, { g, k1, k2, VA, VB, VC, VD } = S1110;
    const pts = loop1110().map(([V, P]): P => { const q = at(f, V, P); return [uOf(f, q[0]), vOf(f, q[1])]; });
    const area = signedArea(pts);
    const Q1 = k1 * Math.log(VB / VA), Q2 = k2 * Math.log(VC / VD);
    const eta = 1 - Q2 / Q1;
    const onAd = (V1: number, P1: number, V2: number, P2: number) => close(P1 * V1 ** g, P2 * V2 ** g, 1e-9);
    return [
      [`The corners: A (${VA}, ${fmt(hot1110(VA), 3)}), B (${VB}, ${fmt(hot1110(VB), 3)}), C (${fmt(VC, 3)}, ${fmt(cold1110(VC), 3)}), D (${fmt(VD, 3)}, ${fmt(cold1110(VD), 3)}): where the book's are (D ≈ (4, 0.25), C ≈ (7.9, 0.13))`, fmt(VD, 1) === '4' && fmt(VC, 1) === '7.9' && fmt(cold1110(VC), 2) === '0.13'],
      ['A→B and C→D are isotherms (PV = 2.5 and 1.0); B→C and D→A are adiabats PV^γ = const (γ = 5/3)', onAd(VB, hot1110(VB), VC, cold1110(VC)) && onAd(VA, hot1110(VA), VD, cold1110(VD))],
      [`The adiabats force V_B/V_A = V_C/V_D: ${fmt(VB / VA, 6)} = ${fmt(VC / VD, 6)}`, close(VB / VA, VC / VD, 1e-12)],
      [`Q₁ = nRT₁ ln(V_B/V_A) = ${fmt(Q1, 4)}, Q₂ = nRT₂ ln(V_C/V_D) = ${fmt(Q2, 4)}; the enclosed area, read back from the drawing, is ${fmt(-area, 4)} = Q₁ − Q₂ = ${fmt(Q1 - Q2, 4)}`, close(-area, Q1 - Q2, 2e-4)],
      [`Going A → B → C → D the loop runs clockwise (its signed area is negative in P–V axes), so the net work is done BY the gas: an engine`, area < 0],
      [`η = 1 − Q₂/Q₁ = ${fmt(eta, 4)} = 1 − T₂/T₁ = 1 − ${k2}/${k1} = ${fmt(1 - k2 / k1, 4)}; and Q₂/Q₁ = T₂/T₁`, close(eta, 1 - k2 / k1, 1e-12)],
      [`Heat on each leg by the first law (U = (3/2)PV for γ = 5/3): Q_AB = ${fmt(legQ(hot1110, VA, VB), 4)}, Q_BC = ${fmt(legQ(adB1110, VB, VC), 6)}, Q_CD = ${fmt(legQ(cold1110, VC, VD), 4)}, Q_DA = ${fmt(legQ(adA1110, VD, VA), 6)}: heat flows only on the isotherms`, close(legQ(hot1110, VA, VB), Q1, 1e-6) && close(legQ(cold1110, VC, VD), -Q2, 1e-6) && close(legQ(adB1110, VB, VC), 0, 1e-6) && close(legQ(adA1110, VD, VA), 0, 1e-6)],
      clearCheck(fig1110.draw(fig1110.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* Figure 11.11 · the universe's entropy never decreases (topic 08)        */
/* ===================================================================== */
/**
 * The book's curves, read off its grid: the system's entropy falls from 5 to
 * 3 J/K, the surroundings' rises from 1 to 6 J/K, both relaxing with the same
 * time constant (2 units of progress); the universe's is their sum, 6 → 9 J/K.
 */
const S1111 = { sys: [5, 3], sur: [1, 6], tau: 2, tEnd: 10 };
const ease = (t: number) => 1 - Math.exp(-t / S1111.tau);
const Ssys = (t: number) => S1111.sys[0] + (S1111.sys[1] - S1111.sys[0]) * ease(t);
const Ssur = (t: number) => S1111.sur[0] + (S1111.sur[1] - S1111.sur[0]) * ease(t);
const Suni = (t: number) => Ssys(t) + Ssur(t);
const F1111: Frame = { ox: 40, oy: 286, sx: 22, sy: 24 };
const fig1111: Diagram = {
  id: 'p11-11-fig-11.11',
  topic: 7,
  name: 'Entropy of the universe never decreases',
  cases: [{ chip: 'Entropy budget', cap: 'In a real process the entropy of the universe never decreases: the entropy of the system may fall, but the entropy of the surroundings rises by more.' }],
  draw() {
    const s = new Sketch(W, 418);
    const f = F1111, tE = S1111.tEnd;
    axes(s, f, { u1: 11.2, v1: 10.6, uName: '<i>t</i> / progress of process', vName: '<i>S</i> (J/K)', uTicks: [0, 2, 4, 6, 8, 10].map((u): Tick => [u, String(u)]), vTicks: [0, 2, 4, 6, 8, 10].map((v): Tick => [v, String(v)]), uNameAt: [X(f, 11.2), f.oy + 38] });
    curve(s, f, Ssys, 0, tE, { color: C.slate, w: 2.4 });
    curve(s, f, Ssur, 0, tE, { w: 2.4 });
    curve(s, f, Suni, 0, tE, { color: C.mari, w: 3 });
    s.sym(X(f, tE) + 6, Y(f, Suni(tE)) + 5, '<i>S</i><sub>universe</sub>', { size: 14, anchor: 'start', color: C.amber });
    s.sym(X(f, tE) + 6, Y(f, Ssur(tE)) + 5, '<i>S</i><sub>surroundings</sub>', { size: 14, anchor: 'start' });
    s.sym(X(f, tE) + 6, Y(f, Ssys(tE)) + 5, '<i>S</i><sub>system</sub>', { size: 14, anchor: 'start' });
    resultBlock(s, ['System entropy may fall,', 'but surroundings rise more —', 'universe total never decreases'], { maths: false });
    return s;
  },
  check() {
    const f = F1111, ts = samples(0, S1111.tEnd, 500);
    const back = (fn: (t: number) => number) => ts.map((t) => vOf(f, Y(f, fn(t))));
    const u = back(Suni), sy = back(Ssys), su = back(Ssur);
    const end = ts.length - 1;
    return [
      ['At every sampled moment S_universe = S_system + S_surroundings (read back from the drawing)', u.every((v, i) => close(v, sy[i] + su[i], 1e-9))],
      [`The book's end points: system ${fmt(sy[0], 2)} → ${fmt(sy[end], 2)}, surroundings ${fmt(su[0], 2)} → ${fmt(su[end], 2)}, universe ${fmt(u[0], 2)} → ${fmt(u[end], 2)} J/K`, close(sy[0], 5) && close(su[0], 1) && close(u[0], 6) && fmt(sy[end], 1) === '3' && fmt(su[end], 1) === '6' && fmt(u[end], 1) === '9'],
      ['The system\'s entropy falls all the way', sy.every((v, i) => i === 0 || v < sy[i - 1])],
      [`The surroundings' rises by ${fmt(su[end] - su[0], 2)} J/K, more than the system loses (${fmt(sy[0] - sy[end], 2)} J/K)`, su[end] - su[0] > sy[0] - sy[end]],
      [`So the universe's never decreases: it rises at every step, by ${fmt(u[end] - u[0], 2)} J/K in all (ΔS_universe > 0, a real, irreversible process)`, u.every((v, i) => i === 0 || v >= u[i - 1]) && u[end] > u[0]],
      [`The same budget in topic 08's worked example 3: block ${fmt(2 * 400 * Math.log(300 / 400), 1)} J/K, lake +${fmt(8e4 / 300, 1)} J/K, universe +${fmt(2 * 400 * Math.log(300 / 400) + 8e4 / 300, 1)} J/K > 0 (the book's −230, +267, +37)`, fmt(2 * 400 * Math.log(300 / 400), 0) === '−230' && fmt(8e4 / 300, 0) === '267' && fmt(2 * 400 * Math.log(300 / 400) + 8e4 / 300, 0) === '37'],
      clearCheck(fig1111.draw(fig1111.cases[0])),
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_11: Diagram[] = [fig111, fig112, fig113, fig114, fig115, fig116, fig117, fig118, fig119, fig1110, fig1111];
