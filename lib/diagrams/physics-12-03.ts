import { C, F, LABEL_GAP, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 3 (Current Electricity), FIRST HALF: every drawing
 * of the Master Reference book on pp. 139–178 (the chapter guide and Topics
 * 01–03), redrawn. The second half (Figures 3.11–3.19 and pp. 179–255) is in
 * physics-12-03b.ts.
 *
 * The drawings in these pages are the ten numbered figures, each printed on a
 * "CHAPTER 3 · FIGURES" page (3.1 on p. 145, 3.2 on p. 148, 3.3 on p. 151,
 * 3.4–3.6 on p. 153, 3.7 on p. 157, 3.8 on p. 164, 3.9 on p. 171, 3.10 on
 * p. 173; the first copy of each caption sits a page earlier, where the text
 * refers to it). There are no unnumbered drawings: pp. 139–178 were checked
 * page by page; the rest is prose, typeset equations, boxed answers, the exam
 * table (p. 144) and the colour-code table (p. 162). (Figure 3.11, on
 * pp. 175–176, is drawn in physics-12-03b.ts.)
 *
 * Every figure is computed from the physics, never placed by eye: the chapter
 * map's chain and groups come from the caption's own grouping; the drifting
 * electrons are free flights with the same random velocities with and without
 * the field, so the field adds exactly ½aτ² a flight against E⃗ and nothing
 * else; the slab is v_d dt thick (Example 1's 1.47 × 10⁻⁴ m s⁻¹); the filament
 * curve solves I·R₀(1 + kVI) = V; the diode follows I = I_s(e^(V/nV_T) − 1);
 * the N-curve is a cubic whose falling part runs exactly between its turning
 * points; the cone's radius grows linearly and its slices sum to ρL/(πab); the
 * resistivity curves are ρ₀ + (a smooth knee into a straight line) and
 * ρ∞ e^(B/T); and the two circuits are read back off their wires as nodes and
 * solved with Example 1's 2, 3 and 6 Ω. Each `check` recomputes what the
 * figure and its caption state, and measures that no label or tag touches a
 * line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- drawing helpers (as in physics-12-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, wires, arrows), by
 * sketch: `clearance` measures each tag and label against them. Axes and the
 * dotted guides that only join marks are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** An arrow that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  arrow(s, m, a, { color, w: 1.3 });
  arrow(s, m, b, { color, w: 1.3 });
}
/** A small filled head at the end b of a line from a (the end of a path). */
function head(s: Sketch, a: P, b: P, color: string, L = 5.5, hw = 3) {
  const t = Math.atan2(b[1] - a[1], b[0] - a[0]), bx = b[0] - L * Math.cos(t), by = b[1] - L * Math.sin(t);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(bx + hw * Math.sin(t))} ${r1(by - hw * Math.cos(t))} L${r1(bx - hw * Math.sin(t))} ${r1(by + hw * Math.cos(t))} Z" fill="${color}"/>`);
}
/** Points on an ellipse round c (semi-axes rx, ry), parameter t0 to t1 (radians, y down). */
const ellPts = (c: P, rx: number, ry: number, t0: number, t1: number, n = 120): P[] => samples(t0, t1, n).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]);
/** A rounded rectangle's outline as points (corner radius rr). */
function roundRect(r: Rect, rr: number): P[] {
  const [x0, y0, x1, y1] = r, arc = (cx: number, cy: number, a0: number) => ellPts([cx, cy], rr, rr, a0, a0 + Math.PI / 2, 10);
  return [...arc(x1 - rr, y0 + rr, -Math.PI / 2), ...arc(x1 - rr, y1 - rr, 0), ...arc(x0 + rr, y1 - rr, Math.PI / 2), ...arc(x0 + rr, y0 + rr, Math.PI), [x1 - rr, y0]];
}
/** Words in Onest (names, headings): straight into the SVG, registered so tags and the checks keep clear of them. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * 0.56;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.75, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${o.bold ? F.bold : F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/**
 * How far every tag and every label stays from every kept line, sampled each
 * half pixel: the closest one, and what it is.
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
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** A dotted guide that only joins marks: free of the clearance check, but never through a label or tag (`guideCheck`). */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P) => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color: C.slate, w: 1, dash: 'dot', free: true });
};
const guideCheck = (s: Sketch): Check => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  const bad = (GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => samples(0, 1, 200).some((k) => rectDist(r, add(a, sub(b, a), k)) < 2)).map(([n]) => n));
  return [`No dotted guide runs through a label or tag${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};

/* ---------- graphs ---------- */
/** Where V = 0 (or T = 0), value = 0 sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const at = (f: Frame, x: number, y: number): P => [f.ox + x * f.sx, f.oy - y * f.sy];
/** The two axes of a graph, grey with arrowheads (free), named at their tips in STIX. */
function axes(s: Sketch, x0: number, x1: number, y0: number, y1: number, ox: number, oy: number, xName: string, yName: string) {
  s.vec(x0, oy, x1, oy, { color: C.grey, w: 1.3 });
  s.vec(ox, y0, ox, y1, { color: C.grey, w: 1.3 });
  s.sym(x1 + 3, oy + 18, xName, { size: 15, anchor: 'end' });
  s.sym(ox - 7, y1 + 10, yName, { size: 15, anchor: 'end' });
}

/* ---------- circuits ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[]) { path(s, pts); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);
/**
 * The circuit's nodes, read off the drawn wires: wires that touch (an end of one
 * on another) are one conductor; each named terminal belongs to the conductor
 * whose wire it lies on. Returns the terminals' names grouped by conductor.
 */
function nodes(s: Sketch, terms: Record<string, P>): string[][] {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const groups = new Map<number, string[]>();
  Object.entries(terms).forEach(([name, p]) => { const i = ws.findIndex((w) => onWire(p, w)); const k = i < 0 ? -1 - groups.size : find(i); groups.set(k, [...(groups.get(k) ?? []), name]); });
  return [...groups.values()].map((g) => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}
const sameNodes = (a: string[][], b: string[][]) => JSON.stringify(a) === JSON.stringify(b.map((g) => [...g].sort()).sort((x, y) => x[0].localeCompare(y[0])));
/** A cell on a vertical wire: the long (+) plate at y, the short, thick (−) plate 10 px below, centred on x. */
function cell(s: Sketch, x: number, y: number) {
  path(s, [[x - 15, y], [x + 15, y]], { w: 2 });
  path(s, [[x - 8, y + 10], [x + 8, y + 10]], { w: 4.5 });
  return { plus: [x, y] as P, minus: [x, y + 10] as P };
}
/** The zig-zag of a resistor from a to b (its two terminals): `n` teeth, `amp` px either side. */
function resistor(s: Sketch, a: P, b: P, n = 6, amp = 6) {
  const d = sub(b, a), L = Math.hypot(d[0], d[1]), u: P = [d[0] / L, d[1] / L], nrm: P = [-u[1], u[0]], m = 2 * n;
  const pts = samples(0, 1, m).map((t, j): P => add(add(a, d, t), nrm, j === 0 || j === m ? 0 : j % 2 ? amp : -amp));
  path(s, pts, { w: 1.8 });
}

/* ===================================================================== */
/* Figure 3.1 · the chapter map (the guide, topic index 0)                */
/* ===================================================================== */
/** The book's four groups, as its caption groups them, and each topic's box text. */
const MAP = [
  { head: ['What flows'], items: ['Current & Ohm’s law'] },
  { head: ['What resists'], items: ['Resistivity & materials', 'Series & parallel'] },
  { head: ['What it does /', 'what drives it'], items: ['Energy & power', 'EMF & internal r', 'Cells in groups'] },
  { head: ['Networks &', 'measurement'], items: ['Kirchhoff’s laws', 'Bridges & meters'] },
];
/** The caption's grouping, by topic number: what flows (01), what resists (02–03), what it does and what drives it (04–06), networks and measurement (07–08). */
const MAP_CAPTION = [[1], [2, 3], [4, 5, 6], [7, 8]];
const M31 = { x0: 8, x1: 332, tagX: 228, top: 8, pad: 9, gapT: 26, gapG: 12, headX: 20, rr: 14 };
const map31Geo = () => {
  const { x0, x1, top, pad, gapT, gapG } = M31;
  let y = top, n = 0;
  const groups = MAP.map((g) => {
    const tags = g.items.map((t, k) => ({ n: ++n, text: `${String(n).padStart(2, '0')} ${t}`, y: y + pad + k * (22 + gapT) }));
    const out: Rect = [x0, y, x1, tags[tags.length - 1].y + 22 + pad];
    y = out[3] + gapG;
    return { head: g.head, tags, out };
  });
  return { groups, h: y - gapG + top };
};
const fig31: Diagram = {
  id: 'p12-03-fig-3.1',
  topic: 0,
  name: 'The chapter map',
  cases: [{ chip: 'Eight topics', cap: 'How the eight topics connect: what flows (01), what resists (02–03), what it does and what drives it (04–06), and networks and measurement (07–08).' }],
  draw() {
    const g = map31Geo();
    const s = new Sketch(W, Math.ceil(g.h));
    const all = g.groups.flatMap((gr) => gr.tags);
    g.groups.forEach((gr) => {
      path(s, roundRect(gr.out, M31.rr), { color: C.faint, w: 1.3, dash: 'dash' });
      const cy = (gr.out[1] + gr.out[3]) / 2, lh = 15;
      gr.head.forEach((t, i) => words(s, M31.headX, cy + 4 - ((gr.head.length - 1) * lh) / 2 + i * lh, t, { size: 12, anchor: 'start', color: C.slate }));
    });
    // the storyline, 01 → 08: one arrow from each topic down to the next
    all.slice(0, -1).forEach((t, i) => arrow(s, [M31.tagX, t.y + 22 + 5], [M31.tagX, all[i + 1].y - 5], { color: C.mari, w: 1.8 }));
    all.forEach((t) => s.tag(M31.tagX, t.y, t.text, null, null, { anchor: 'middle' }));
    return s;
  },
  check() {
    const g = map31Geo(), s = fig31.draw(fig31.cases[0]);
    const tags = s.tags, lines = LINES.get(s) ?? [];
    const arrows = lines.filter((l) => l.length === 2 && close(l[0][0], M31.tagX) && close(l[1][0], M31.tagX));
    const byNum = (k: number) => tags.find((t) => t.name.startsWith(String(k).padStart(2, '0') + ' '))!;
    const inside = (r: Rect, o: Rect) => r[0] - o[0] >= LABEL_GAP && o[2] - r[2] >= LABEL_GAP && r[1] - o[1] >= LABEL_GAP && o[3] - r[3] >= LABEL_GAP;
    const groupsRead = g.groups.map((gr) => tags.filter((t) => inside(t.rect, gr.out)).map((t) => Number(t.name.slice(0, 2))));
    const outs = g.groups.map((gr) => gr.out);
    return [
      [`Eight topics, 01 to 08, each in its own box, top to bottom in order: ${tags.map((t) => t.name.slice(0, 2)).join(', ')}`, tags.length === 8 && tags.every((t, i) => t.name.startsWith(String(i + 1).padStart(2, '0') + ' ')) && tags.every((t, i) => i === 0 || t.rect[1] > tags[i - 1].rect[3])],
      [`Seven arrows, each from one topic straight down to the next (01 → 02 → … → 08), none skipping a box`, arrows.length === 7 && samples(1, 7, 6).every((k) => { const a = byNum(k), b = byNum(k + 1); return arrows.some((l) => l[0][1] >= a.rect[3] + 4 && l[1][1] <= b.rect[1] - 4 && l[0][1] < l[1][1] && tags.every((t) => t.rect[3] <= l[0][1] || t.rect[1] >= l[1][1])); })],
      [`Read off the outlines, the groups are ${groupsRead.map((gr) => `(${gr.map((k) => String(k).padStart(2, '0')).join('–')})`).join(' ')}: the caption's what flows (01), what resists (02–03), what it does and drives it (04–06), networks and measurement (07–08)`, JSON.stringify(groupsRead) === JSON.stringify(MAP_CAPTION)],
      ['The four outlines do not overlap, and each group’s heading sits inside its own outline', outs.every((o, i) => i === 0 || o[1] > outs[i - 1][3]) && s.labels.every((l) => outs.filter((o) => inside(l.rect, o)).length === 1)],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.2 · drift of free electrons (topic 01)                        */
/* ===================================================================== */
/**
 * Sixteen electrons, each making K free flights of time τ between collisions.
 * Every flight starts with a random velocity of the same thermal speed u; the
 * electrons come in pairs with opposite velocities, so the random velocities
 * average to exactly zero. With the field on, the same flights are bent by the
 * acceleration a = eE/m against E⃗ (E⃗ points right): each flight is shifted
 * ½aτ² to the left and nothing else changes. One electron (the first) is the
 * marigold one in both panels.
 */
const D32 = { box: [14, 62, 326, 202] as Rect, K: 4, u: 16, a: 6, tau: 1, seed: 2059, hi: 0, zone: [122, 108, 218, 146] as Rect, xs: [44, 96, 148, 200, 252, 300], ys: [88, 132, 176], vd: [[204, 132], [136, 132]] as [P, P] };
/** A small seeded generator (mulberry32), so both panels draw the same electrons. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const walks32 = () => {
  const { xs, ys, zone, K, u, seed } = D32;
  const starts: P[] = ys.flatMap((y) => xs.map((x): P => [x, y])).filter((p) => rectDist(zone, p) > 0);
  const r = rng(seed), half = starts.length / 2;
  const vel: P[][] = Array.from({ length: half }, () => Array.from({ length: K }, (): P => { const th = r() * 2 * Math.PI; return [u * Math.cos(th), u * Math.sin(th)]; }));
  return { starts, vel: [...vel, ...vel.map((vs) => vs.map((v): P => [-v[0], -v[1]]))] };
};
/** One electron's path: K flights, each x = x₀ + v t − ½ a t² (a against E⃗, to the left), y = y₀ + v t. */
const path32 = (start: P, vs: P[], a: number): P[] => {
  const pts: P[] = [start];
  let p = start;
  vs.forEach((v) => { samples(0, D32.tau, 8).slice(1).forEach((t) => pts.push([p[0] + v[0] * t - 0.5 * a * t * t, p[1] + v[1] * t])); p = pts[pts.length - 1]; });
  return pts;
};
type Case32 = { chip: string; cap: string; on: boolean };
const fig32: Diagram = {
  id: 'p12-03-fig-3.2',
  topic: 1,
  name: 'Drift of free electrons',
  cases: [
    { chip: 'Field off', on: false, cap: 'Drift of free electrons in a conductor. With the field off the random motion has no net displacement.' },
    { chip: 'Field on', on: true, cap: 'Drift of free electrons in a conductor. With a field <i>E</i> on each electron acquires a small net drift opposite to <i>E</i>, so the conventional current <i>I</i> points along <i>E</i>.' },
  ] as Case32[],
  draw(c: Case32) {
    const s = new Sketch(W, 254);
    const { box: b } = D32, w = walks32();
    words(s, W / 2, 16, c.on ? 'Field on' : 'Field off', { size: 13, bold: true });
    path(s, [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]], [b[0], b[1]]], { w: 1.7 });
    const paths = w.starts.map((p, i) => path32(p, w.vel[i], c.on ? D32.a : 0));
    paths.forEach((pts, i) => {
      const col = i === D32.hi ? C.mari : C.slate;
      path(s, pts, { color: col, w: i === D32.hi ? 1.8 : 1.1 });
      head(s, pts[pts.length - 2], pts[pts.length - 1], col);
    });
    if (c.on) {
      arrow(s, D32.vd[0], D32.vd[1], { w: 2.2 });
      s.sym(170, 122, '<i>v⃗</i><sub>d</sub>', { size: 15 });
      arrow(s, [170, 50], [312, 50], { color: C.slate, w: 1.6 });
      s.sym(241, 40, '<i>I</i> (conventional)', { size: 14 });
      arrow(s, [124, 220], [312, 220], { color: C.slate, w: 1.6 });
      s.sym(218, 244, '<i>E⃗</i>', { size: 16 });
    }
    const p0 = paths[D32.hi];
    s.place([
      { t: 'One free electron', hi: true, p: p0[0], at: [[16, 28, 'start'], [16, 32, 'start']] },
      { t: 'Conductor', p: [60, b[3]], at: [[16, 212, 'start'], [16, 216, 'start']] },
    ]);
    return s;
  },
  check(c: Case32) {
    const w = walks32(), s = fig32.draw(c), { box: b, zone, K, a, tau, u } = D32;
    const off = w.starts.map((p, i) => path32(p, w.vel[i], 0)), on = w.starts.map((p, i) => path32(p, w.vel[i], a));
    const disp = (ps: P[][]) => ps.map((pts) => sub(pts[pts.length - 1], pts[0]));
    const mean = (ds: P[]) => [ds.reduce((t, d) => t + d[0], 0) / ds.length, ds.reduce((t, d) => t + d[1], 0) / ds.length] as P;
    const mOff = mean(disp(off)), mOn = mean(disp(on)), shift = K * 0.5 * a * tau * tau;
    const meanV = mean(w.vel.flat());
    const drawn = c.on ? on : off;
    const inBox = drawn.every((pts) => pts.every((p) => p[0] > b[0] + 3 && p[0] < b[2] - 3 && p[1] > b[1] + 3 && p[1] < b[3] - 3));
    const out: Check[] = [
      [`${w.starts.length} electrons, ${K} free flights each, every flight at the same thermal speed u = ${u} px per τ in a random direction; the panels draw the same flights`, w.starts.length === 16 && w.vel.every((vs) => vs.length === K && vs.every((v) => close(Math.hypot(v[0], v[1]), u, 1e-9)))],
      [`The random velocities average to zero (${fmt(meanV[0], 9)}, ${fmt(meanV[1], 9)}): with the field off the mean displacement is (${fmt(mOff[0], 6)}, ${fmt(mOff[1], 6)}) px — no net displacement`, close(meanV[0], 0, 1e-9) && close(meanV[1], 0, 1e-9) && close(mOff[0], 0, 1e-6) && close(mOff[1], 0, 1e-6)],
      [`With E⃗ on (pointing right), every electron ends exactly ${fmt(shift, 1)} px = K·½aτ² left of where it ends with the field off, its random motion unchanged: a net drift opposite to E⃗`, on.every((pts, i) => close(pts[pts.length - 1][0] - off[i][off[i].length - 1][0], -shift, 1e-9) && close(pts[pts.length - 1][1], off[i][off[i].length - 1][1], 1e-9)) && close(mOn[0], -shift, 1e-6)],
      [`The drift is small beside the random motion: ½aτ² = ${fmt(0.5 * a * tau * tau, 1)} px a flight against uτ = ${u} px`, 0.5 * a * tau * tau < 0.3 * u * tau],
      [`Every path stays inside the conductor${c.on ? ' and clear of the v⃗_d arrow' : ''}`, inBox && (!c.on || on.every((pts) => pts.every((p) => rectDist(zone, p) > 4)))],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
    if (c.on) out.push(['v⃗_d is drawn to the left (against E⃗) and the conventional current I to the right (along E⃗)', D32.vd[1][0] < D32.vd[0][0] && close(D32.vd[0][1], D32.vd[1][1])]);
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.3 · the charge that crosses A in dt (topic 01)               */
/* ===================================================================== */
/** A wire of radius R px, drawn in perspective (end ellipses e·R wide); the slab at its right end is v_d dt = 64 px thick. */
const D33 = { xl: 22, xr: 306, cy: 136, R: 60, e: 0.2, vdt: 64 };
/** Example 1 (p. 154): I = 3.0 A, A = 1.5 mm², n = 8.5 × 10²⁸ m⁻³, e = 1.6 × 10⁻¹⁹ C. */
const EX1V = { I: 3.0, A: 1.5e-6, n: 8.5e28, e: 1.6e-19 };
const fig33: Diagram = {
  id: 'p12-03-fig-3.3',
  topic: 1,
  name: 'Charge crossing an area',
  cases: [{ chip: 'Drift slab', cap: 'Charge crossing an area <i>A</i> in time d<i>t</i>: the electrons that cross it fill a slab of thickness (drift speed × d<i>t</i>) and volume <i>A</i> × (drift speed) × d<i>t</i>.' }],
  draw() {
    const s = new Sketch(W, 268);
    const { xl, xr, cy, R, e, vdt } = D33, rx = e * R, xs = xr - vdt;
    // the wire: two edges and the end faces
    path(s, [[xl, cy - R], [xr, cy - R]]);
    path(s, [[xl, cy + R], [xr, cy + R]]);
    path(s, ellPts([xl, cy], rx, R, 0, 2 * Math.PI));
    path(s, ellPts([xr, cy], rx, R, 0, 2 * Math.PI));
    // the slab: its left face dashed, its body hatched (lines, never a fill), clear of the arrow and its label
    path(s, ellPts([xs, cy], rx, R, 0, 2 * Math.PI), { color: C.mari, w: 2, dash: 'dash' });
    const skip: Rect = [xs + 6, cy - 34, xr - 6, cy + 10];
    for (let k = -2 * R; k < vdt + 2 * R; k += 10) {
      const seg = samples(0, 1, 200).map((t): P => [xs + k + t * 2 * R, cy + R - t * 2 * R]).filter((p) => p[0] > xs + 1 && p[0] < xr - 1 && rectDist(skip, p) > 0);
      const runs: P[][] = [];
      seg.forEach((p, i) => { if (i && len(p, seg[i - 1]) < 2) runs[runs.length - 1].push(p); else runs.push([p]); });
      runs.filter((r) => r.length > 2).forEach((r) => path(s, [r[0], r[r.length - 1]], { color: C.mari, w: 0.9, free: true }));
    }
    arrow(s, [xr - 8, cy], [xs + 12, cy], { w: 2 });
    s.sym(xr - vdt / 2 + 2, cy - 14, '<i>v</i><sub>d</sub>', { size: 16 });
    s.sym(xr + rx + 8, cy + 6, '<i>A</i>', { size: 17, anchor: 'start' });
    // L above, v_d dt below
    measure(s, [xl, cy - R - 22], [xr, cy - R - 22]);
    s.sym((xl + xr) / 2, cy - R - 32, '<i>L</i>', { size: 17 });
    guide(s, [xs, cy + R + 3], [xs, cy + R + 24]);
    guide(s, [xr, cy + R + 3], [xr, cy + R + 24]);
    measure(s, [xs, cy + R + 20], [xr, cy + R + 20]);
    s.sym(xr - vdt / 2, cy + R + 48, '<i>v</i><sub>d</sub> d<i>t</i>', { size: 16 });
    s.sym(118, cy + R + 48, 'Volume = <i>A v</i><sub>d</sub> d<i>t</i>', { size: 16 });
    s.place([{ t: 'Slab that crosses in dt', hi: true, p: [xs - rx, cy], at: [[xs - rx - 8, cy - 11, 'end'], [xs - rx - 8, cy - 30, 'end']] }]);
    return s;
  },
  check() {
    const { R, vdt } = D33, s = fig33.draw(fig33.cases[0]);
    const A = Math.PI * R * R, vd = 16, dt = vdt / vd;
    const reach = (d: number) => d <= vd * dt + 1e-9;
    const { I, A: Aw, n, e } = EX1V, vdEx = I / (n * e * Aw), den = n * e * Aw;
    return [
      [`The slab is v_d dt thick: at v_d = ${vd} px per unit time for dt = ${fmt(dt, 2)}, ${fmt(vd * dt, 1)} px, the drawn ${vdt} px`, close(vd * dt, vdt, 1e-9)],
      ['Electrons drift left (the arrow) at v_d: every one inside the slab reaches its dashed face within dt, and one just beyond it does not', reach(0) && reach(vdt) && !reach(vdt + 0.5)],
      [`So the volume that crosses is A × v_d dt = ${fmt(A * vdt, 0)} px³ (the slab's own volume, πR² × thickness), and dq = n(A v_d dt)e gives I = dq/dt = neAv_d`, close(A * vdt, Math.PI * R * R * vd * dt, 1e-6)],
      [`Example 1: neA = ${fmt(den / 1e4, 2)} × 10⁴ (the book's 2.04 × 10⁴), v_d = I/(neA) = ${fmt(vdEx * 1e4, 2)} × 10⁻⁴ m s⁻¹ (the book's 1.47 × 10⁻⁴ ≈ 0.15 mm s⁻¹)`, fmt(den / 1e4, 2) === '2.04' && fmt(vdEx * 1e4, 2) === '1.47' && fmt(vdEx * 1e3, 2) === '0.15'],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
      guideCheck(s),
    ];
  },
};

/* ===================================================================== */
/* Figures 3.4, 3.5, 3.6 · V–I characteristics (topic 01)                 */
/* ===================================================================== */
/**
 * 3.4: one R₀ for both. The metal at constant temperature is I = V/R₀; the
 * filament heats with the power it takes, R = R₀(1 + kP), P = VI, so its I
 * solves kR₀V·I² + R₀I − V = 0. Both leave the origin together (cold, the
 * filament is R₀) and the filament falls below as it heats.
 */
const G34 = { f: { ox: 44, oy: 262, sx: 26, sy: 21 } as Frame, R0: 1, k: 0.02, Vmax: 10 };
const iFil = (V: number) => { const { R0, k } = G34; return V === 0 ? 0 : (-R0 + Math.sqrt(R0 * R0 + 4 * k * R0 * V * V)) / (2 * k * R0 * V); };
const fig34: Diagram = {
  id: 'p12-03-fig-3.4',
  topic: 1,
  name: 'Ohmic and non-ohmic V–I graphs',
  cases: [{ chip: 'Metal and filament', cap: '<i>V</i>–<i>I</i> graphs. A metal at constant temperature is ohmic (a straight line through the origin); a filament lamp is non-ohmic (the curve bends towards the <i>V</i> axis as the filament heats up).' }],
  draw() {
    const s = new Sketch(W, 292);
    const { f, R0, Vmax } = G34;
    axes(s, f.ox, 326, f.oy, 22, f.ox, f.oy, '<i>V</i>', '<i>I</i>');
    path(s, [at(f, 0, 0), at(f, Vmax, Vmax / R0)], { w: 2 });
    path(s, samples(0, Vmax, 120).map((V) => at(f, V, iFil(V))), { color: C.mari, w: 2.4 });
    s.place([
      { t: 'Ohmic (metal, constant T)', p: at(f, 3.2, 3.2 / R0), at: [[56, 70, 'start'], [56, 80, 'start']] },
      { t: 'Non-ohmic (filament)', hi: true, p: at(f, 8, iFil(8)), at: [[326, 200, 'end'], [326, 206, 'end']] },
    ]);
    return s;
  },
  check() {
    const { R0, k, Vmax } = G34, s = fig34.draw(fig34.cases[0]);
    const Vs = samples(0.01, Vmax, 400), h = 1e-4;
    const slope0 = iFil(h) / h;
    const Rst = Vs.map((V) => V / iFil(V));
    const d2 = samples(0.5, Vmax - 0.5, 40).map((V) => iFil(V + 0.1) - 2 * iFil(V) + iFil(V - 0.1));
    return [
      ['The filament curve solves I·R₀(1 + kVI) = V at every point: its resistance rises with the power it takes', Vs.every((V) => close(iFil(V) * R0 * (1 + k * V * iFil(V)), V, 1e-9))],
      [`Both start at the origin with the same slope 1/R₀ (cold filament): ${fmt(slope0, 4)} against ${fmt(1 / R0, 4)}`, close(iFil(0), 0) && Math.abs(slope0 - 1 / R0) < 1e-3],
      ['The metal is a straight line through the origin (constant R₀); the filament curve bends down, toward the V axis (concave, below the line for every V > 0)', d2.every((x) => x < 0) && Vs.every((V) => iFil(V) < V / R0)],
      [`The filament’s V/I rises steadily as it heats: ${fmt(Rst[0], 3)}R₀ near the origin to ${fmt(Rst[Rst.length - 1], 2)}R₀ at the top`, Rst.every((r, i) => i === 0 || r > Rst[i - 1])],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
  },
};

/**
 * 3.5: a junction diode, I = I_s(e^(V/nV_T) − 1), to scale in V for a diode
 * with V_th = 0.7 V that breaks down at 6 V (28 px a volt). Forward current in
 * mA (I_s chosen so I = 1 mA at V_th); the reverse current, I_s, is far too
 * small to see on that scale, so its branch is drawn just under the axis, as
 * the book draws it. At −V_br the current falls away vertically.
 */
const G35 = { f: { ox: 262, oy: 150, sx: 28, sy: 4 } as Frame, Vth: 0.7, nVT: 0.05, Ith: 1, Vbr: 6, Itop: 31, rev: 3, bottom: 292 };
const Is35 = G35.Ith / (Math.exp(G35.Vth / G35.nVT) - 1);
const iDiode = (V: number) => Is35 * (Math.exp(V / G35.nVT) - 1);
const vAt35 = (I: number) => G35.nVT * Math.log(I / Is35 + 1);
const fig35: Diagram = {
  id: 'p12-03-fig-3.5',
  topic: 1,
  name: 'Junction diode characteristic',
  cases: [{ chip: 'Junction diode', cap: '<i>V</i>–<i>I</i> characteristic of a junction diode: only a tiny current in reverse bias until breakdown, and a sharp rise of current in forward bias beyond the threshold voltage <i>V</i><sub>th</sub>.' }],
  draw() {
    const s = new Sketch(W, 304);
    const { f, Vth, Vbr, Itop, rev, bottom } = G35;
    axes(s, 16, 330, bottom, 18, f.ox, f.oy, '<i>V</i>', '<i>I</i>');
    const xth = at(f, Vth, 0)[0], xbr = at(f, -Vbr, 0)[0];
    guide(s, [xth, 22], [xth, bottom]);
    // reverse: the tiny current, just under the axis, from 0 back to −V_br; then breakdown, straight down
    path(s, [[f.ox, f.oy + rev], [xbr, f.oy + rev], [xbr, bottom - 8]]);
    // forward: flat to V_th, then the sharp rise
    path(s, samples(0, vAt35(Itop), 200).map((V) => at(f, V, iDiode(V))), { color: C.mari, w: 2.4 });
    path(s, [[f.ox, f.oy + rev], at(f, 0, 0)]);
    s.sym(xbr + 2, f.oy - 12, '−<i>V</i><sub>br</sub>', { size: 15 });
    // a row below the V axis's own name, so the two never read as one "V_th V"
    s.sym(xth + 4, f.oy + 44, '<i>V</i><sub>th</sub>', { size: 15, anchor: 'start' });
    s.place([
      { t: 'Forward bias', hi: true, p: at(f, vAt35(18), 18), at: [[252, 48, 'end'], [252, 40, 'end']] },
      { t: 'Reverse bias (tiny current)', p: [178, f.oy + rev], at: [[248, 96, 'end'], [248, 88, 'end']] },
      { t: 'Breakdown', p: [xbr, 240], at: [[xbr + 10, 236, 'start'], [xbr + 10, 252, 'start']] },
    ]);
    return s;
  },
  check() {
    const { Vth, Vbr, Ith, Itop, nVT, f, rev } = G35, s = fig35.draw(fig35.cases[0]);
    const vTop = vAt35(Itop), Vr = samples(-Vbr, 0, 100);
    return [
      [`I = I_s(e^(V/nV_T) − 1) with nV_T = ${nVT} V: ${fmt(iDiode(Vth), 3)} mA at V_th = ${Vth} V, ${Itop} mA by ${fmt(vTop, 3)} V`, close(iDiode(Vth), Ith, 1e-9) && close(iDiode(vTop), Itop, 1e-9)],
      [`A sharp rise beyond V_th: the current grows ${Itop}-fold in the next ${fmt((vTop - Vth) * 1000, 0)} mV, but is only ${fmt((iDiode(Vth / 2) / Itop) * 100, 3)}% of the top at V_th/2`, vTop - Vth < 0.2 && iDiode(Vth / 2) / Itop < 1e-3],
      [`Reverse bias: the current never exceeds I_s = ${(Is35 * 1e6).toFixed(4)} nA in size, down to −V_br (drawn ${rev} px under the axis, tiny beside the ${fmt(Itop * f.sy, 0)} px forward rise)`, Vr.every((V) => iDiode(V) <= 0 && -iDiode(V) <= Is35 * (1 + 1e-12)) && rev < 0.05 * Itop * f.sy],
      [`To scale in V: −V_br at ${fmt(Vbr * f.sx, 0)} px left of the origin, V_th at ${fmt(Vth * f.sx, 1)} px right (6 V against 0.7 V); breakdown drops straight down at −V_br`, close(at(f, -Vbr, 0)[0], f.ox - Vbr * f.sx) && close(at(f, Vth, 0)[0] - f.ox, Vth * f.sx)],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
      guideCheck(s),
    ];
  },
};

/**
 * 3.6: I(V) = I_c + a(u³ − 3s²u), u = V − V_m: a cubic that rises, turns down
 * at u = −s, turns up again at u = +s. The line I = I_c meets it at u = 0 and
 * u = ±√3 s, three voltages for one current; between the turning points
 * dI/dV < 0, so dV/dI < 0 (marigold).
 */
const G36 = { f: { ox: 40, oy: 280, sx: 28, sy: 24 } as Frame, Ic: 5, a: 4.2 / 19, s: 1.6, Vm: 5, u0: 3.6 };
const iN = (V: number) => { const { Ic, a, s, Vm } = G36, u = V - Vm; return Ic + a * (u ** 3 - 3 * s * s * u); };
const dN = (V: number) => { const { a, s, Vm } = G36, u = V - Vm; return a * (3 * u * u - 3 * s * s); };
/** Where the cubic crosses I = I_c, by bisection on each third of the curve. */
const roots36 = () => {
  const { Vm, u0, s, Ic } = G36, g = (V: number) => iN(V) - Ic;
  const bis = (lo: number, hi: number) => { for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (g(lo) * g(m) <= 0) hi = m; else lo = m; } return (lo + hi) / 2; };
  return [bis(Vm - u0, Vm - s), bis(Vm - s, Vm + s), bis(Vm + s, Vm + u0)];
};
const fig36: Diagram = {
  id: 'p12-03-fig-3.6',
  topic: 1,
  name: 'N-shaped I–V curve',
  cases: [{ chip: 'Negative resistance', cap: 'An N-shaped <i>I</i>–<i>V</i> curve (as for GaAs): one value of the current corresponds to three values of the voltage, and the falling middle portion has negative resistance (d<i>V</i>/d<i>I</i> < 0).' }],
  draw() {
    const s = new Sketch(W, 306);
    const { f, Vm, u0, s: sp, Ic } = G36;
    axes(s, f.ox, 330, f.oy, 22, f.ox, f.oy, '<i>V</i>', '<i>I</i>');
    const yc = at(f, 0, Ic)[1];
    guide(s, [f.ox + 4, yc], [326, yc]);
    path(s, samples(Vm - u0, Vm - sp, 80).map((V) => at(f, V, iN(V))), { w: 2 });
    path(s, samples(Vm + sp, Vm + u0, 80).map((V) => at(f, V, iN(V))), { w: 2 });
    path(s, samples(Vm - sp, Vm + sp, 80).map((V) => at(f, V, iN(V))), { color: C.mari, w: 3.2 });
    roots36().forEach((V) => s.dot(...at(f, V, Ic), 3.6));
    s.sym(214, 232, 'same <i>I</i>, three values of <i>V</i>', { size: 14, color: C.slate });
    s.sym(250, 40, '(d<i>V</i>/d<i>I</i> < 0)', { size: 14, anchor: 'start', color: C.amber });
    s.place([{ t: 'Negative-resistance region', hi: true, p: at(f, Vm - 0.55, iN(Vm - 0.55)), at: [[48, 24, 'start'], [48, 28, 'start']] }]);
    return s;
  },
  check() {
    const { f, Vm, s: sp, Ic, u0 } = G36, s = fig36.draw(fig36.cases[0]);
    const r = roots36(), mid = samples(Vm - sp + 1e-3, Vm + sp - 1e-3, 100), outer = [...samples(Vm - u0, Vm - sp - 1e-3, 50), ...samples(Vm + sp + 1e-3, Vm + u0, 50)];
    return [
      [`The line I = I_c meets the curve at three voltages, V = ${r.map((v) => fmt(v, 3)).join(', ')} (the three dots): one current, three values of V`, r.every((v) => close(iN(v), Ic, 1e-9)) && r[0] < r[1] && r[1] < r[2] && close(r[1], Vm, 1e-9) && close(r[2] - Vm, Math.sqrt(3) * sp, 1e-9)],
      [`The marigold part runs exactly between the turning points (dI/dV = 0 at V = ${fmt(Vm - sp, 2)} and ${fmt(Vm + sp, 2)}) and falls all the way: dI/dV < 0, so dV/dI < 0 — negative resistance`, close(dN(Vm - sp), 0, 1e-12) && close(dN(Vm + sp), 0, 1e-12) && mid.every((V) => dN(V) < 0)],
      ['Outside it the curve rises (dI/dV > 0): an N shape', outer.every((V) => dN(V) > 0)],
      [`The curve stays inside the frame: I from ${fmt(iN(Vm - u0), 2)} to ${fmt(iN(Vm + u0), 2)} on a 0–10 axis`, iN(Vm - u0) > 0 && at(f, Vm + u0, iN(Vm + u0))[1] > 22],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
      guideCheck(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.7 · the truncated cone (topic 01, Example 4)                  */
/* ===================================================================== */
/** End radii a = 26 px and b = 72 px over L = 222 px; the disc at x = 0.42L, dx = 9 px thick. */
const D37 = { xl: 58, xr: 280, cy: 132, a: 26, b: 72, e: 0.18, xd: 0.42, dx: 9 };
const r37 = (x: number) => { const { a, b, xl, xr } = D37; return a + ((b - a) * x) / (xr - xl); };
const fig37: Diagram = {
  id: 'p12-03-fig-3.7',
  topic: 1,
  name: 'Non-uniform conductor',
  cases: [{ chip: 'Cone and disc', cap: 'A non-uniform conductor: a truncated cone of length <i>L</i> with end radii <i>a</i> and <i>b</i>. A thin disc of thickness d<i>x</i> and radius <i>r</i>(<i>x</i>), at distance <i>x</i> from the narrow face, is the element that is summed to give the resistance.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { xl, xr, cy, a, b, e, dx } = D37, L = xr - xl, x = D37.xd * L, xd = xl + x, r = r37(x), r2 = r37(x + dx);
    path(s, [[xl, cy - a], [xr, cy - b]]);
    path(s, [[xl, cy + a], [xr, cy + b]]);
    path(s, ellPts([xl, cy], e * a, a, 0, 2 * Math.PI));
    path(s, ellPts([xr, cy], e * b, b, 0, 2 * Math.PI));
    // the disc: dashed face, hatched body
    path(s, ellPts([xd, cy], e * r, r, 0, 2 * Math.PI), { color: C.mari, w: 2, dash: 'dash' });
    path(s, [[xd + dx, cy - r2], [xd + dx, cy + r2]], { color: C.mari, w: 1.2, free: true });
    for (let y = cy - r + 8; y < cy + r2 - 2; y += 8) path(s, [[xd + 1, y + 4], [xd + dx - 1, y - 4]], { color: C.mari, w: 0.9, free: true });
    // r(x), from the axis to the top edge
    s.dot(xd + dx / 2, cy, 3);
    path(s, [[xd + dx / 2, cy], [xd + dx / 2, cy - r37(x + dx / 2)]], { w: 1.8, free: true });
    s.sym(xd + dx + 8, cy - r / 2 + 4, '<i>r</i>(<i>x</i>)', { size: 16, anchor: 'start' });
    // the current in and out
    arrow(s, [12, cy], [xl - e * a - 6, cy], { w: 2.4 });
    arrow(s, [xr + e * b + 6, cy], [332, cy], { w: 2.4 });
    s.sym(24, cy - 12, '<i>I</i>', { size: 17 });
    s.sym(320, cy - 12, '<i>I</i>', { size: 17 });
    s.sym(xl - 10, cy - a - 10, '<i>a</i>', { size: 17 });
    s.sym(xr + 10, cy - b - 6, '<i>b</i>', { size: 17 });
    // dx above the disc; x and L below
    const ytop = cy - r37(x) - 22;
    guide(s, [xd, cy - r - 4], [xd, ytop - 4]);
    guide(s, [xd + dx, cy - r2 - 4], [xd + dx, ytop - 4]);
    path(s, [[xd - 12, ytop], [xd, ytop]], { color: C.slate, w: 1.3 });
    head(s, [xd - 12, ytop], [xd, ytop], C.slate);
    path(s, [[xd + dx + 12, ytop], [xd + dx, ytop]], { color: C.slate, w: 1.3 });
    head(s, [xd + dx + 12, ytop], [xd + dx, ytop], C.slate);
    s.sym(xd + dx / 2, ytop - 10, 'd<i>x</i>', { size: 16 });
    const y1 = cy + b + 22, y2 = cy + b + 54;
    guide(s, [xl, cy + a + 4], [xl, y2 + 4]);
    guide(s, [xd, cy + r + 4], [xd, y1 + 4]);
    guide(s, [xr, cy + b + 4], [xr, y2 + 4]);
    measure(s, [xl, y1], [xd, y1]);
    measure(s, [xl, y2], [xr, y2]);
    s.sym((xl + xd) / 2, y1 + 20, '<i>x</i>', { size: 17 });
    s.sym((xl + xr) / 2, y2 + 20, '<i>L</i>', { size: 17 });
    s.place([{ t: 'Thin disc', hi: true, p: [xd + dx / 2, cy + r - 10], at: [[xd + 26, cy + 16, 'start'], [xd + 30, cy + 22, 'start']] }]);
    return s;
  },
  check() {
    const { xl, xr, a, b, dx } = D37, L = xr - xl, x = D37.xd * L, s = fig37.draw(fig37.cases[0]);
    const edgeY = (X: number) => a + ((b - a) * (X - xl)) / (xr - xl);
    const rho = 1, n = 20000;
    const Rsum = samples(0, L, n).slice(1).reduce((t, X) => t + (rho * (L / n)) / (Math.PI * r37(X - L / (2 * n)) ** 2), 0);
    const Rbook = (rho * L) / (Math.PI * a * b);
    return [
      [`The radius grows linearly from a = ${a} px at the narrow face to b = ${b} px at the wide face: the drawn edges are straight lines through both ends`, close(r37(0), a) && close(r37(L), b) && close(r37(x), edgeY(xl + x))],
      [`The disc sits at x = ${fmt(x, 1)} px from the narrow face with r(x) = a + (b − a)x/L = ${fmt(r37(x), 2)} px, d x = ${dx} px thick`, close(r37(x), a + ((b - a) * x) / L) && dx < 0.05 * L],
      [`Summing ρ dx/(πr²) over ${n} thin discs gives ${fmt(Rsum * 1e5, 4)} × 10⁻⁵ against ρL/(πab) = ${fmt(Rbook * 1e5, 4)} × 10⁻⁵ (px units)`, Math.abs(Rsum / Rbook - 1) < 1e-6],
      [`Not the average radius: ρL/(π((a + b)/2)²) = ${fmt(((rho * L) / (Math.PI * ((a + b) / 2) ** 2)) * 1e5, 4)} × 10⁻⁵ is smaller`, (rho * L) / (Math.PI * ((a + b) / 2) ** 2) < Rbook],
      [`I is the same through every section, so v_d ∝ 1/r²: drift ${fmt((b / a) ** 2, 2)} times faster at the narrow face; with b = 2a (practice question 5) the ratio is 4 ∶ 1`, close((b / a) ** 2, (Math.PI * b * b) / (Math.PI * a * a)) && close((2 / 1) ** 2, 4)],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
      guideCheck(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.8 · resistivity against temperature (topic 02)                */
/* ===================================================================== */
/**
 * Metal: ρ = ρ₀ + k(√(T² + T₁²) − T₁): flat at the small residual ρ₀ near
 * T = 0, then a straight line of slope k. Semiconductor: ρ = ρ∞ e^(B/T),
 * falling steeply as T rises (carriers multiply).
 */
const G38 = { f: { ox: 40, oy: 252, sx: 27, sy: 22 } as Frame, rho0: 1.6, k: 0.9, T1: 2, rInf: 0.9, B: 3.2, Tmax: 10, top: 9.6 };
const rhoMetal = (T: number) => G38.rho0 + G38.k * (Math.sqrt(T * T + G38.T1 * G38.T1) - G38.T1);
const rhoSemi = (T: number) => G38.rInf * Math.exp(G38.B / T);
type Case38 = { chip: string; cap: string; kind: 'metal' | 'semi' };
const fig38: Diagram = {
  id: 'p12-03-fig-3.8',
  topic: 2,
  name: 'Resistivity against temperature',
  cases: [
    { chip: 'Metal', kind: 'metal', cap: 'Resistivity against temperature. For a metal, <i>ρ</i> rises almost linearly with <i>T</i> above a small residual value <i>ρ</i><sub>res</sub>.' },
    { chip: 'Semiconductor', kind: 'semi', cap: 'Resistivity against temperature. For a semiconductor, <i>ρ</i> falls steeply as <i>T</i> rises.' },
  ] as Case38[],
  draw(c: Case38) {
    const s = new Sketch(W, 280);
    const { f, Tmax, rho0, B, rInf, top } = G38;
    axes(s, f.ox, 318, f.oy, 24, f.ox, f.oy, '<i>T</i>', '<i>ρ</i>');
    if (c.kind === 'metal') {
      const y0 = at(f, 0, rho0)[1];
      guide(s, [f.ox + 4, y0], [312, y0]);
      path(s, samples(0, Tmax, 200).map((T) => at(f, T, rhoMetal(T))), { color: C.mari, w: 2.4 });
      s.sym(f.ox + 8, y0 + 22, '<i>ρ</i><sub>res</sub> (residual)', { size: 14, anchor: 'start', color: C.slate });
      s.sym(198, 48, 'Metal:', { size: 15, anchor: 'end', color: C.amber });
      s.sym(198, 68, '<i>ρ</i> rises with <i>T</i>', { size: 15, anchor: 'end', color: C.amber });
    } else {
      const T0 = B / Math.log(top / rInf);
      path(s, samples(T0, Tmax, 300).map((T) => at(f, T, rhoSemi(T))), { color: C.mari, w: 2.4 });
      s.sym(312, 48, 'Semiconductor:', { size: 15, anchor: 'end', color: C.amber });
      s.sym(312, 68, '<i>ρ</i> falls as <i>T</i> rises', { size: 15, anchor: 'end', color: C.amber });
    }
    return s;
  },
  check(c: Case38) {
    const { rho0, k, Tmax, rInf, B, top, f } = G38, s = fig38.draw(c), h = 1e-5;
    const d = (fn: (T: number) => number, T: number) => (fn(T + h) - fn(T - h)) / (2 * h);
    if (c.kind === 'metal') {
      const Ts = samples(0.01, Tmax, 200);
      const sl = samples(5, Tmax, 20).map((T) => d(rhoMetal, T));
      // topic 02, Example 2: 100 Ω at 0 °C, α = 4.0 × 10⁻³ °C⁻¹, at 50 °C
      const R50 = 100 * (1 + 4.0e-3 * 50);
      return [
        [`At T → 0 the curve levels off at the residual ρ_res = ${rho0} (the dotted line), with zero slope`, close(rhoMetal(0), rho0) && Math.abs(d(rhoMetal, h)) < 1e-4],
        ['ρ rises with T everywhere (α > 0 for a metal) and stays above ρ₀', Ts.every((T) => d(rhoMetal, T) > 0 && rhoMetal(T) > rho0)],
        [`Almost linear above the knee: the slope from T = 5 to 10 stays within ${fmt((1 - Math.min(...sl) / k) * 100, 1)}% of k = ${k}`, sl.every((x) => x / k > 0.9 && x <= k)],
        [`The linear law in use (topic 02, Example 2): R = 100[1 + (4.0 × 10⁻³)(50)] = ${fmt(R50, 0)} Ω`, close(R50, 120)],
        [`The curve stays inside the frame (top at ${fmt(at(f, Tmax, rhoMetal(Tmax))[1], 0)} px)`, at(f, Tmax, rhoMetal(Tmax))[1] > 24],
        clearCheck(s),
        labelsApart(s),
        inFrame(s),
        guideCheck(s),
      ];
    }
    const T0 = B / Math.log(top / rInf), Ts = samples(T0, Tmax, 200);
    return [
      [`ρ = ρ∞e^(B/T) falls as T rises (α < 0) all the way: it enters the frame at T = ${fmt(T0, 2)} and is ${fmt(rhoSemi(T0) / rhoSemi(Tmax), 1)} times smaller by T = ${Tmax}`, Ts.every((T) => d(rhoSemi, T) < 0) && rhoSemi(T0) / rhoSemi(Tmax) > 5],
      ['Steeply at first, then levelling (convex), toward a small value that it never reaches', Ts.every((T) => rhoSemi(T + 0.01) - 2 * rhoSemi(T) + rhoSemi(T - 0.01) > 0) && rhoSemi(Tmax) > rInf],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
  },
};

/* ===================================================================== */
/* Figures 3.9 and 3.10 · resistors in series and in parallel (topic 03)  */
/* ===================================================================== */
/** Example 1 (p. 172): 2, 3 and 6 Ω; series 11 Ω, parallel 1 Ω. */
const EX1R = [2, 3, 6];

/** Series: A to B along the top wire, three equal sections, a resistor in the middle of each. */
const SE = { left: 52, right: 322, top: 128, bot: 198, A: 86, B: 292, cellY: 156, rl: 44, vY: 88, VY: 44 };
const seGeo = () => {
  const { A, B, rl } = SE, d = (B - A) / 3;
  return [0, 1, 2].map((i) => { const x0 = A + i * d, x1 = x0 + d, m = (x0 + x1) / 2; return { x0, x1, a: m - rl / 2, b: m + rl / 2 }; });
};
const fig39: Diagram = {
  id: 'p12-03-fig-3.9',
  topic: 3,
  name: 'Resistors in series',
  cases: [{ chip: 'Series', cap: 'Three resistors <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> in series across a cell: the same current <i>I</i> flows through all of them and the potential drops <i>V</i><sub>1</sub>, <i>V</i><sub>2</sub>, <i>V</i><sub>3</sub> add up to <i>V</i>.' }],
  draw() {
    const s = new Sketch(W, 214);
    const { left, right, top, bot, A, B, cellY, vY, VY } = SE, g = seGeo();
    const c = cell(s, left, cellY);
    wire(s, [c.plus, [left, top], [g[0].a, top]]);
    g.slice(0, -1).forEach((r, i) => wire(s, [[r.b, top], [g[i + 1].a, top]]));
    wire(s, [[g[2].b, top], [right, top], [right, bot], [left, bot], c.minus]);
    g.forEach((r, i) => {
      resistor(s, [r.a, top], [r.b, top]);
      s.sym((r.a + r.b) / 2, top + 30, `<i>R</i><sub>${i + 1}</sub>`, { size: 16 });
      measure(s, [r.x0 + 2, vY], [r.x1 - 2, vY], C.mari);
      s.sym((r.x0 + r.x1) / 2, vY - 10, `<i>V</i><sub>${i + 1}</sub>`, { size: 16, color: C.amber });
    });
    s.dot(A, top, 3.4);
    s.dot(B, top, 3.4);
    s.sym(A - 6, top - 10, '<i>A</i>', { size: 16, anchor: 'end' });
    s.sym(B + 6, top - 10, '<i>B</i>', { size: 16, anchor: 'start' });
    guide(s, [A, top - 6], [A, VY - 4]);
    guide(s, [B, top - 6], [B, VY - 4]);
    measure(s, [A + 2, VY], [B - 2, VY]);
    s.sym((A + B) / 2, VY - 12, '<i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub>', { size: 16, color: C.slate });
    arrow(s, [right, top + 18], [right, top + 50], { w: 2 });
    s.sym(right - 10, top + 40, '<i>I</i>', { size: 16, anchor: 'end' });
    s.sym(left - 22, cellY + 10, '<i>V</i>', { size: 16, anchor: 'end' });
    return s;
  },
  check() {
    const { left, top, A, B, cellY, right, vY } = SE, g = seGeo(), s = fig39.draw(fig39.cases[0]);
    const terms: Record<string, P> = { plus: [left, cellY], minus: [left, cellY + 10], A: [A, top], B: [B, top] };
    g.forEach((r, i) => { terms[`R${i + 1}a`] = [r.a, top]; terms[`R${i + 1}b`] = [r.b, top]; });
    const net = nodes(s, terms);
    const Rs = EX1R.reduce((t, r) => t + r, 0), V = 11, I = V / Rs, Vi = EX1R.map((r) => I * r);
    const vSpans = (LINES.get(s) ?? []).filter((l) => l.length === 2 && close(l[0][1], vY) && close(l[1][1], vY));
    return [
      [`Read off the wires, one chain: ${net.map((n) => `{${n.join(', ')}}`).join(' ')}: + → A → R₁ → R₂ → R₃ → B → −, no junction anywhere, so one current I through all`, sameNodes(net, [['A', 'R1a', 'plus'], ['R1b', 'R2a'], ['R2b', 'R3a'], ['B', 'R3b', 'minus']])],
      ['The cell’s long (+) plate is on top, so I leaves it along the top wire, A to B, and returns down the right side: the I arrow points down there', top < cellY && right > B],
      [`V₁, V₂, V₃ each span their own resistor's section, end to end, and together exactly A to B, where V is marked`, vSpans.length === 6 && close(g[0].x0, A) && close(g[2].x1, B) && g.every((r, i) => i === 0 || close(r.x0, g[i - 1].x1)) && g.every((r) => r.a > r.x0 && r.b < r.x1)],
      [`Example 1: 2 + 3 + 6 = ${Rs} Ω (the book's 11 Ω); on V = ${V} V, I = ${fmt(I, 2)} A in each, and V₁, V₂, V₃ = ${Vi.map((v) => fmt(v, 2)).join(', ')} V add up to V`, Rs === 11 && close(Vi.reduce((t, v) => t + v, 0), V, 1e-12)],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
      guideCheck(s),
    ];
  },
};

/** Parallel: every resistor joins the top rail (A, + side) to the bottom rail (B, − side). */
const PA = { left: 44, top: 46, bot: 208, xs: [140, 216, 292], rl: 76, cellY: 122 };
const fig310: Diagram = {
  id: 'p12-03-fig-3.10',
  topic: 3,
  name: 'Resistors in parallel',
  cases: [{ chip: 'Parallel', cap: 'Three resistors <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> in parallel across a cell: each has the same potential difference <i>V</i>, and the total current <i>I</i> splits into <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>, <i>I</i><sub>3</sub>.' }],
  draw() {
    const s = new Sketch(W, 238);
    const { left, top, bot, xs, rl, cellY } = PA, mid = (top + bot) / 2;
    const c = cell(s, left, cellY);
    wire(s, [c.plus, [left, top], [xs[2], top]]);
    wire(s, [c.minus, [left, bot], [xs[2], bot]]);
    xs.forEach((x, i) => {
      wire(s, [[x, top], [x, mid - rl / 2]]);
      wire(s, [[x, mid + rl / 2], [x, bot]]);
      resistor(s, [x, mid - rl / 2], [x, mid + rl / 2], 6, 7);
      s.dot(x, top, 3.4);
      s.dot(x, bot, 3.4);
      // I_k on its own branch, between the rail and the resistor, named on the
      // same side as R_k: in the gap left of the branch, I₂ read as R₁'s current.
      arrow(s, [x, top + 9], [x, mid - rl / 2 - 6], { color: C.mari, w: 2.4 });
      s.sym(x + 9, top + 30, `<i>I</i><sub>${i + 1}</sub>`, { size: 16, anchor: 'start', color: C.amber });
      s.sym(x + 13, mid + 6, `<i>R</i><sub>${i + 1}</sub>`, { size: 16, anchor: 'start' });
    });
    arrow(s, [left + 34, top], [left + 70, top], { w: 2.4 });
    s.sym(left + 52, top - 12, '<i>I</i>', { size: 16 });
    // A and B name the rails at their first junction
    s.sym(xs[0], top - 12, '<i>A</i>', { size: 16 });
    s.sym(xs[0], bot + 24, '<i>B</i>', { size: 16 });
    s.sym(left - 22, cellY + 10, '<i>V</i>', { size: 16, anchor: 'end' });
    return s;
  },
  check() {
    const { left, top, bot, xs, rl, cellY } = PA, s = fig310.draw(fig310.cases[0]), mid = (top + bot) / 2;
    const terms: Record<string, P> = { plus: [left, cellY], minus: [left, cellY + 10] };
    xs.forEach((x, i) => { terms[`T${i + 1}`] = [x, mid - rl / 2]; terms[`B${i + 1}`] = [x, mid + rl / 2]; });
    const net = nodes(s, terms);
    const inv = EX1R.reduce((t, r) => t + 1 / r, 0), Rp = 1 / inv, V = 6, Ii = EX1R.map((r) => V / r);
    // Example 3 (p. 174): 3 A into 6 Ω ∥ 3 Ω
    const I3 = 3 * (6 / (6 + 3));
    // the branch whose wire a label's centre is nearest
    const branchOf = (t: string) => { const r = s.labels.find((l) => l.text === t)!.rect, c = (r[0] + r[2]) / 2; return xs.reduce((b, x, k) => (Math.abs(c - x) < Math.abs(c - xs[b]) ? k : b), 0); };
    return [
      [`Read off the wires, two nodes: ${net.map((n) => `{${n.join(', ')}}`).join(' ')}: every resistor's top on rail A with the + plate, every bottom on rail B with the − plate`, sameNodes(net, [['T1', 'T2', 'T3', 'plus'], ['B1', 'B2', 'B3', 'minus']])],
      ['So each resistor has the same potential difference V across it, and I₁, I₂, I₃ all run down, from A (+) to B (−); I enters rail A from the + plate', top < cellY && bot > cellY && xs.every((x) => x > left)],
      [`Example 1: 1/R_p = 1/2 + 1/3 + 1/6 = ${fmt(inv, 3)}, R_p = ${fmt(Rp, 3)} Ω (the book's 1 Ω), below the smallest`, close(Rp, 1, 1e-12) && Rp < Math.min(...EX1R)],
      [`On V = ${V} V: I₁, I₂, I₃ = ${Ii.map((i) => fmt(i, 2)).join(', ')} A, which add to I = V/R_p = ${fmt(V / Rp, 2)} A; the largest current takes the smallest resistor`, close(Ii.reduce((t, i) => t + i, 0), V / Rp, 1e-12) && Ii[0] > Ii[1] && Ii[1] > Ii[2]],
      [`Current divider (Example 3): 3 A into 6 Ω ∥ 3 Ω puts I(6/(6 + 3)) = ${fmt(I3, 2)} A through the 3 Ω`, close(I3, 2)],
      ['Each I_k and R_k are named beside their own branch, and A at the first junction of the top rail', xs.every((_, i) => branchOf(`I${i + 1}`) === i && branchOf(`R${i + 1}`) === i) && branchOf('A') === 0],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_03: Diagram[] = [fig31, fig32, fig33, fig34, fig35, fig36, fig37, fig38, fig39, fig310];
