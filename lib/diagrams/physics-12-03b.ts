import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 3 (Current Electricity), SECOND HALF: every
 * drawing of the Master Reference book from Figure 3.11 on, redrawn (the first
 * half, Figures 3.1–3.10, is in physics-12-03.ts). The drawings here are the
 * nine numbered figures 3.11–3.19, each printed on a "CHAPTER 3 · FIGURES"
 * page (3.11 on p. 176, 3.12 on p. 182, 3.13 on p. 190, 3.14 on p. 198, 3.15
 * on p. 201, 3.16 on p. 208, 3.17 on p. 211, 3.18 on p. 213, 3.19 on p. 222;
 * the first copy of each caption sits a page earlier, where the text refers to
 * it). Pages 179–255 have no unnumbered drawings: they were checked page by
 * page, the Master Appendix and the Supplement (Additional topics A–F, pp.
 * 235–255) included; the Supplement's networks are all described in words, and
 * the rest is prose, typeset equations, boxed answers and tables.
 *
 * Every circuit is wired as a graph and read back: the wires are drawn with
 * `wire`, each component registers its two terminals, and a check groups the
 * terminals into nodes by the wires they touch, then solves the circuit it has
 * read (modified nodal analysis) with the book's own values: the ladder closed
 * by X gives X, Example 1's cell gives 2 A and 11 V, the series and mixed
 * groupings give nE, nr and mnE/(mR + nr), the bridge nulls at P/Q = R/S and
 * gives 18 Ω, the two-cell network gives 1.6 A and −0.4 A, and the meter
 * bridge nulls at l = 40 cm with X = 7.5 Ω. The P–R graph is P = E²R/(R + r)²,
 * sampled, with its maximum found numerically. Each `check` also measures that
 * no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const crossp = (a: P, b: P) => a[0] * b[1] - a[1] * b[0];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const inRect = (p: P, r: Rect) => p[0] > r[0] && p[0] < r[2] && p[1] > r[1] && p[1] < r[3];

/* ---------- drawing helpers (as in physics-12-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, wires, components, arrows),
 * by sketch: `clearance` measures each tag and label against them. Dotted
 * guides and axes that a value sits on are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A rounded rectangle, never filled (a dashed outline names a group). */
function roundBox(s: Sketch, r: Rect, o: { color?: string; w?: number; dash?: boolean; rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 8}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}"${o.dash ? ' stroke-dasharray="6 4"' : ''}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]]);
}
/** An arrow (a current, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
}
/** A measured length with an arrowhead at each end. */
function measure(s: Sketch, a: P, b: P, color: string = C.slate, w = 1.3) {
  const m = mid(a, b);
  arrow(s, m, a, { color, w });
  arrow(s, m, b, { color, w });
}
/** A dotted guide (free of the clearance check: it only joins marks). */
const guide = (s: Sketch, a: P, b: P) => path(s, [a, b], { color: C.slate, w: 1, dash: 'dot', free: true });
/** The points of a circle about c (math angles, y down on the drawing). */
const circPts = (c: P, R: number, a0 = 0, a1 = 360, n = 72): P[] => samples(a0, a1, n).map((a) => [c[0] + R * Math.cos((a * Math.PI) / 180), c[1] - R * Math.sin((a * Math.PI) / 180)]);
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
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/**
 * The result, bottom right, ink-edged, maths set in STIX (Sketch.text).
 * Registered as a tag, so the audit keeps everything else off it.
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

/* ---------- circuits: wires, components, and reading them back ---------- */
/** Wires as drawn, by sketch, so a check can read the circuit back off the drawing. */
const WIRES = new WeakMap<Sketch, P[][]>();
function wire(s: Sketch, pts: P[], o: { color?: string; w?: number } = {}) { path(s, pts, o); const l = WIRES.get(s) ?? []; l.push(pts); WIRES.set(s, l); }
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** Does p lie on the polyline (within half a pixel)? */
const onWire = (p: P, w: P[]) => w.some((a, i) => i > 0 && distSeg(p, w[i - 1], a) < 0.5);

/**
 * A component as drawn: a resistor, a cell (a = its + terminal, b = its −),
 * a galvanometer, a key, or a bare pin (a wire end the reader names).
 */
type Comp = { name: string; kind: 'R' | 'cell' | 'G' | 'key' | 'pin'; a: P; b: P };
const COMPS = new WeakMap<Sketch, Comp[]>();
const reg = (s: Sketch, c: Comp) => { const l = COMPS.get(s) ?? []; l.push(c); COMPS.set(s, l); };
/** A pin: a named point on a wire (a terminal, a rail end), for the reader. */
const pin = (s: Sketch, name: string, p: P) => reg(s, { name, kind: 'pin', a: p, b: p });

/** A resistor: a zigzag of `peaks` half-waves in the middle of a–b, with straight leads to a and b. */
function resistor(s: Sketch, name: string, a: P, b: P, o: { zig?: number; amp?: number; peaks?: number; color?: string; w?: number } = {}) {
  const L = len(a, b), u = unit(sub(b, a)), nrm: P = [-u[1], u[0]];
  const zl = o.zig ?? Math.min(L - 12, 40), amp = o.amp ?? 6, n = o.peaks ?? 6, z0 = (L - zl) / 2;
  const pts: P[] = [a, add(a, u, z0)];
  for (let i = 0; i < n; i++) pts.push(add(add(a, u, z0 + (zl * (i + 0.5)) / n), nrm, i % 2 ? -amp : amp));
  pts.push(add(a, u, z0 + zl), b);
  path(s, pts, { w: o.w ?? 1.7, color: o.color });
  reg(s, { name, kind: 'R', a, b });
  return { m: add(a, u, L / 2), u, nrm, zl };
}
/** Plate half-lengths: the long thin plate is the + terminal, the short thick one the −. */
const PLATE = { plus: 12, minus: 6, gap: 6 };
const PLATES = new WeakMap<Sketch, Record<string, { plus: P; minus: P }>>();
/** A cell between `plus` and `minus` (its terminals), its two plates across the line at the middle; `k` scales the plates. */
function cell(s: Sketch, name: string, plus: P, minus: P, k = 1) {
  const u = unit(sub(plus, minus)), nrm: P = [-u[1], u[0]], m = mid(plus, minus);
  const pp = add(m, u, (PLATE.gap * k) / 2), pm = add(m, u, (-PLATE.gap * k) / 2);
  path(s, [plus, pp]);
  path(s, [pm, minus]);
  path(s, [add(pp, nrm, PLATE.plus * k), add(pp, nrm, -PLATE.plus * k)], { w: 1.8 * Math.sqrt(k) });
  path(s, [add(pm, nrm, PLATE.minus * k), add(pm, nrm, -PLATE.minus * k)], { w: 4.6 * Math.sqrt(k) });
  reg(s, { name, kind: 'cell', a: plus, b: minus });
  const pl = PLATES.get(s) ?? {};
  pl[name] = { plus: pp, minus: pm };
  PLATES.set(s, pl);
  return { m, u, nrm };
}
/** A galvanometer: a circle with G, its terminals where the line meets the circle. */
function galvo(s: Sketch, name: string, c: P, dir: P, R = 13, o: { color?: string } = {}) {
  const u = unit(dir);
  const a = add(c, u, -R), b = add(c, u, R);
  s.point(c[0], c[1], R, '');
  path(s, circPts(c, R), { color: o.color ?? C.ink, w: o.color ? 2.2 : 1.7 });
  s.text(c[0], c[1] + 5.5, '<i>G</i>', { size: 16, color: o.color === C.mari ? C.amber : C.text });
  reg(s, { name, kind: 'G', a, b });
  return { a, b };
}
/** A key (tap switch): two contact dots, the lever lifted from the left one. */
function key(s: Sketch, name: string, a: P, b: P) {
  s.dot(a[0], a[1], 3.2);
  s.dot(b[0], b[1], 3.2);
  const u = unit(sub(b, a)), tip = add(add(a, u, len(a, b) * 0.95), [u[1], -u[0]], 12);
  path(s, [a, tip], { w: 1.8 });
  reg(s, { name, kind: 'key', a, b });
  /** A point on the lever, for a tag. */
  return add(a, sub(tip, a), 0.55);
}
/** An open terminal: a small ring on the wire's end. */
function terminal(s: Sketch, p: P) {
  s.point(p[0], p[1], 4, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="4" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/>`);
}

/**
 * The circuit read off the drawing: every component terminal and pin joins
 * the conductor whose drawn wire it lies on; wires that touch (an end of one
 * on another) are one conductor. A terminal on no wire is a node of its own,
 * so a missing wire shows up as an open circuit.
 */
function readCircuit(s: Sketch) {
  const ws = WIRES.get(s) ?? [], parent = ws.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  ws.forEach((a, i) => ws.forEach((b, j) => { if (i < j && (onWire(a[0], b) || onWire(a[a.length - 1], b) || onWire(b[0], a) || onWire(b[b.length - 1], a))) parent[find(i)] = find(j); }));
  const comps = COMPS.get(s) ?? [];
  const ids = new Map<number, number>();
  let loose = 0;
  const nodeAt = (p: P) => { const i = ws.findIndex((w) => onWire(p, w)); const k = i < 0 ? -1 - loose++ : find(i); if (!ids.has(k)) ids.set(k, ids.size); return ids.get(k)!; };
  const at: Record<string, number> = {};
  comps.forEach((c) => { at[`${c.name}.a`] = nodeAt(c.a); at[`${c.name}.b`] = nodeAt(c.b); });
  const n = (name: string, end: 'a' | 'b' = 'a') => { const v = at[`${name}.${end}`]; if (v === undefined) throw new Error(`no terminal ${name}.${end}`); return v; };
  /** Does each listed set of terminals share one node, and the sets differ? */
  const same = (...names: string[]) => { const ns = names.map((t) => { const [c, e] = t.split('.'); return n(c, (e ?? 'a') as 'a' | 'b'); }); return ns.every((v) => v === ns[0]); };
  return { comps, N: ids.size, n, same };
}
type Circuit = ReturnType<typeof readCircuit>;

/** A circuit element for the solver: a resistance from n[0] to n[1], or an ideal source with n[0] its + terminal. */
type El = { name: string; kind: 'R'; n: [number, number]; R: number } | { name: string; kind: 'V'; n: [number, number]; E: number };
const LEAK = 1e-12;
/**
 * Modified nodal analysis: node voltages (ground at 0 V) and each element's
 * current, for a resistance from n[0] to n[1], for a source out of its +
 * terminal into the circuit. `inject` adds currents into nodes from outside.
 */
function solve(N: number, els: El[], ground: number, inject: Record<number, number> = {}) {
  const idx = (k: number) => (k < ground ? k : k - 1);
  const vs = els.filter((e) => e.kind === 'V');
  const M = N - 1 + vs.length;
  const A = Array.from({ length: M }, () => new Array<number>(M + 1).fill(0));
  const addG = (i: number, j: number, v: number) => { if (i !== ground && j !== ground) A[idx(i)][idx(j)] += v; };
  els.forEach((e) => { if (e.kind === 'R') { const [a, b] = e.n, g = 1 / e.R; addG(a, a, g); addG(b, b, g); addG(a, b, -g); addG(b, a, -g); } });
  // a leak of 10⁻¹² S from every node to ground, so a node left floating (an open branch) sits at 0 V instead of making the system singular
  for (let k = 0; k < N; k++) addG(k, k, LEAK);
  vs.forEach((e, k) => {
    const [p, m] = e.n, row = N - 1 + k;
    if (p !== ground) { A[idx(p)][row] -= 1; A[row][idx(p)] += 1; }
    if (m !== ground) { A[idx(m)][row] += 1; A[row][idx(m)] -= 1; }
    A[row][M] = e.kind === 'V' ? e.E : 0;
  });
  Object.entries(inject).forEach(([k, I]) => { if (+k !== ground) A[idx(+k)][M] += I; });
  for (let c = 0; c < M; c++) {
    let piv = c;
    for (let r = c + 1; r < M; r++) if (Math.abs(A[r][c]) > Math.abs(A[piv][c])) piv = r;
    [A[c], A[piv]] = [A[piv], A[c]];
    if (Math.abs(A[c][c]) < 1e-15) throw new Error('singular circuit');
    for (let r = 0; r < M; r++) {
      if (r === c) continue;
      const f = A[r][c] / A[c][c];
      if (f) for (let k = c; k <= M; k++) A[r][k] -= f * A[c][k];
    }
  }
  const x = A.map((row, i) => row[M] / row[i]);
  const V = Array.from({ length: N }, (_, k) => (k === ground ? 0 : x[idx(k)]));
  const I: Record<string, number> = {};
  els.forEach((e) => { if (e.kind === 'R') I[e.name] = (V[e.n[0]] - V[e.n[1]]) / e.R; });
  vs.forEach((e, k) => { I[e.name] = x[N - 1 + k]; });
  return { V, I };
}
/**
 * The elements of a read circuit with the book's values: resistors and
 * galvanometers by `R[name]`, cells by `E[name]` (a cell's internal resistance
 * is drawn as its own resistor where the book draws one), keys closed.
 * Components named in `skip` are left out (an open branch).
 */
function elements(c: Circuit, R: Record<string, number>, E: Record<string, number>, skip: string[] = []): El[] {
  return c.comps.filter((k) => k.kind !== 'pin' && !skip.includes(k.name)).map((k): El => {
    const n: [number, number] = [c.n(k.name, 'a'), c.n(k.name, 'b')];
    if (k.kind === 'cell') return { name: k.name, kind: 'V', n, E: E[k.name] };
    if (k.kind === 'key') return { name: k.name, kind: 'V', n, E: 0 };
    if (R[k.name] === undefined) throw new Error(`no value for ${k.name}`);
    return { name: k.name, kind: 'R', n, R: R[k.name] };
  });
}
/** Resistance between nodes p and q of a resistor network: 1 A in at p, out at q. */
const reqBetween = (N: number, els: El[], p: number, q: number) => solve(N, els, q, { [p]: 1 }).V[p];

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, u: number) => f.ox + u * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
type Tick = [number, string];

/* ===================================================================== */
/* Figure 3.11 · the infinite ladder (topic 03)                            */
/* ===================================================================== */
/**
 * Three sections drawn, each a series R on the top rail and a shunt R across
 * the rails; both rails run on to "…". The dashed outline holds the rest of
 * the ladder AFTER the first section (series R and shunt R), so what it holds
 * is the same network as the whole, of resistance X: the book's own dashed box
 * also took in the first shunt R, which would make it R ∥ X = 0.618R, not X
 * (the text and caption say the rest is what is left once the first section is
 * removed; reported).
 */
const LD = { top: 104, bot: 196, A: 44, nodes: [118, 194, 270], end: 304, boxL: 133, boxR: 334, boxT: 72, boxB: 226, shZ: [122, 178] as [number, number] };
const R311 = 1;
const XGOLD = ((1 + Math.sqrt(5)) / 2) * R311;
const fig311: Diagram = {
  id: 'p12-03-fig-3.11',
  topic: 3,
  name: 'Infinite ladder',
  cases: [{ chip: 'Infinite ladder', cap: 'An infinite ladder of identical resistors <i>R</i>. Removing the first section leaves the same network, so the resistance <i>X</i> between <i>A</i> and <i>B</i> satisfies <i>X</i> = <i>R</i> + <i>RX</i>/(<i>R</i> + <i>X</i>).' }],
  draw() {
    const s = new Sketch(W, 330);
    const { top, bot, A, nodes: xs, end, boxL, boxR, boxT, boxB, shZ } = LD;
    // the rest of the ladder, outlined (drawn first, under everything)
    roundBox(s, [boxL, boxT, boxR, boxB], { color: C.mari, w: 2.2, dash: true, rx: 10 });
    // terminals
    terminal(s, [A, top]);
    terminal(s, [A, bot]);
    pin(s, 'A', [A + 4, top]);
    pin(s, 'B', [A + 4, bot]);
    // the bottom rail, one conductor from B to its end
    wire(s, [[A + 4, bot], [end, bot]]);
    pin(s, 'tailB', [end, bot]);
    // the top rail: series resistors between the nodes, a shunt down from each node
    let x0 = A + 4;
    xs.forEach((x, i) => {
      const a: P = [i === 0 ? x0 + 10 : x0 + 12, top], b: P = [x - 12, top];
      wire(s, [[x0, top], a]);
      resistor(s, `S${i + 1}`, a, b, { zig: 34 });
      wire(s, [b, [x + 12, top]]);
      wire(s, [[x, top], [x, shZ[0]]]);
      resistor(s, `H${i + 1}`, [x, shZ[0]], [x, shZ[1]], { zig: 34 });
      wire(s, [[x, shZ[1]], [x, bot]]);
      s.dot(x, top, 3.4);
      s.dot(x, bot, 3.4);
      s.sym((a[0] + b[0]) / 2, top - 15, '<i>R</i>', { size: 16 });
      s.sym(x - 12, (shZ[0] + shZ[1]) / 2 + 5, '<i>R</i>', { size: 16, anchor: 'end' });
      x0 = x + 12;
    });
    wire(s, [[x0, top], [end, top]]);
    pin(s, 'tailA', [end, top]);
    // the rails run on
    [top, bot].forEach((y) => [0, 1, 2].forEach((k) => s.add(`<circle cx="${end + 8 + 6 * k}" cy="${y}" r="1.7" fill="${C.ink}"/>`)));
    // X between A and B
    measure(s, [20, top + 2], [20, bot - 2], C.slate);
    s.sym(9, (top + bot) / 2 + 5, '<i>X</i>', { size: 16 });
    s.sym(A, top - 14, '<i>A</i>', { size: 16 });
    s.sym(A, bot + 25, '<i>B</i>', { size: 16 });
    s.sym((boxL + boxR) / 2, boxB + 22, 'same network, resistance <i>X</i>', { size: 15, color: C.amber });
    const res = resultBlock(s, ['<i>X</i> = <i>R</i> + <i>RX</i>/(<i>R</i> + <i>X</i>)']);
    s.place([{ t: 'The rest of the ladder', hi: true, p: [250, boxT], at: [[W - 8, 22, 'end'], [W - 8, 18, 'end'], [W - 30, 22, 'end']] }], [res]);
    return s;
  },
  check() {
    const s = fig311.draw(fig311.cases[0]), c = readCircuit(s);
    const vals: Record<string, number> = {};
    ['S1', 'S2', 'S3', 'H1', 'H2', 'H3'].forEach((k) => (vals[k] = R311));
    const base = elements(c, vals, {});
    const A = c.n('A'), B = c.n('B'), tA = c.n('tailA'), tB = c.n('tailB');
    // the drawn ladder, closed at its open end by the rest of the infinite ladder (X)
    const closed: El[] = [...base, { name: 'tail', kind: 'R', n: [tA, tB], R: XGOLD }];
    const Rab = reqBetween(c.N, closed, A, B);
    // the outlined part alone: S2, S3, H2, H3 and the tail, seen from node 1 and the bottom rail
    const box: Rect = [LD.boxL, LD.boxT, LD.boxR, LD.boxB];
    const inside = c.comps.filter((k) => k.kind === 'R' && inRect(k.a, box) && inRect(k.b, box)).map((k) => k.name).sort();
    const n1 = c.n('S1', 'b');
    const boxed = closed.filter((e) => e.name === 'tail' || inside.includes(e.name));
    const Rbox = reqBetween(c.N, boxed, n1, B);
    // the book's box, which also takes in the first shunt
    const Rbook = reqBetween(c.N, [...boxed, ...closed.filter((e) => e.name === 'H1')], n1, B);
    // a finite ladder of N sections, ending in a shunt, read as a recursion from the far end
    const finite = (N: number) => { let x = Infinity; for (let i = 0; i < N; i++) x = R311 + (Number.isFinite(x) ? (R311 * x) / (R311 + x) : R311); return x; };
    const f3 = finite(3), f12 = finite(12);
    return [
      ['Read off the wires: A → series R → node 1 → series R → node 2 → series R → node 3, each node joined to the bottom rail (B) by a shunt R', c.same('A', 'S1.a') && c.same('S1.b', 'S2.a', 'H1.a') && c.same('S2.b', 'S3.a', 'H2.a') && c.same('S3.b', 'H3.a', 'tailA') && c.same('B', 'H1.b', 'H2.b', 'H3.b', 'tailB') && c.N === 5],
      [`The dashed outline holds ${inside.join(', ')}: everything after the first section (its series R and its shunt R stay outside)`, inside.join(',') === 'H2,H3,S2,S3'],
      [`Closed at its open end by the rest of the infinite ladder, X = (1 + √5)R/2, the drawn network measures R_AB = ${fmt(Rab, 9)}R: the same X`, close(Rab, XGOLD, 1e-9)],
      [`What the outline holds, seen from node 1 and the bottom rail, is ${fmt(Rbox, 9)}R = X: the same network as the whole`, close(Rbox, XGOLD, 1e-9)],
      [`So X = R + RX/(R + X): ${fmt(R311 + (R311 * XGOLD) / (R311 + XGOLD), 9)} = ${fmt(XGOLD, 9)}, the root of X² − RX − R² = 0, X = ${fmt(XGOLD, 3)}R (the book's 1.618R)`, close(R311 + (R311 * XGOLD) / (R311 + XGOLD), XGOLD, 1e-12) && close(XGOLD ** 2 - R311 * XGOLD - R311 ** 2, 0, 1e-12) && fmt(XGOLD, 3) === '1.618'],
      [`An outline that also took in the first shunt would hold R ∥ X = ${fmt(Rbook, 3)}R, not X: that is why it starts after the first shunt`, close(Rbook, (R311 * XGOLD) / (R311 + XGOLD), 1e-9) && !close(Rbook, XGOLD, 1e-3)],
      [`A finite ladder converges on X fast: 3 sections give ${fmt(f3, 4)}R, 12 give ${fmt(f12, 9)}R`, Math.abs(f3 - XGOLD) < 0.01 && close(f12, XGOLD, 1e-6)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.12 · power to the load against R (topic 04)                     */
/* ===================================================================== */
/** P = E²R/(R + r)², in units of E²/r against R in units of r, from 0 to 10r. */
const P312 = (R: number) => R / (R + 1) ** 2;
const F312: Frame = { ox: 76, oy: 238, sx: 24, sy: 720 };
const fig312: Diagram = {
  id: 'p12-03-fig-3.12',
  topic: 4,
  name: 'Power to the load against R',
  cases: [{ chip: 'Maximum power', cap: 'Power delivered to the load against load resistance <i>R</i>. The maximum power, <i>E</i><sup>2</sup>/(4<i>r</i>), occurs at <i>R</i> = <i>r</i>; for larger <i>R</i> the power falls slowly towards zero.' }],
  draw() {
    const s = new Sketch(W, 318);
    const f = F312;
    s.vec(f.ox, f.oy, X(f, 10.6), f.oy, { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, f.ox, Y(f, 0.305), { color: C.grey, w: 1.3 });
    s.sym(X(f, 10.6), f.oy - 10, '<i>R</i>', { size: 16, anchor: 'end' });
    s.sym(f.ox + 9, Y(f, 0.305) + 8, '<i>P</i><sub>load</sub>', { size: 16, anchor: 'start' });
    const ticks: Tick[] = [[0, '0'], [1, '<i>r</i>'], [2, '2<i>r</i>'], [4, '4<i>r</i>'], [6, '6<i>r</i>'], [8, '8<i>r</i>'], [10, '10<i>r</i>']];
    ticks.forEach(([u, t]) => { s.line(X(f, u), f.oy, X(f, u), f.oy + 4, { color: C.grey, w: 1.2 }); s.sym(X(f, u), f.oy + 19, t, { size: 13, color: C.slate }); });
    const pk = at(f, 1, P312(1));
    s.line(f.ox - 4, pk[1], f.ox, pk[1], { color: C.grey, w: 1.2 });
    s.sym(f.ox - 7, pk[1] + 5, '<i>E</i><sup>2</sup>/(4<i>r</i>)', { size: 13, anchor: 'end', color: C.slate });
    guide(s, [f.ox, pk[1]], pk);
    guide(s, pk, [pk[0], f.oy]);
    const pts = samples(0, 10, 500).map((u) => at(f, u, P312(u)));
    path(s, pts, { color: C.mari, w: 2.6 });
    s.dot(pk[0], pk[1], 4.2, C.mari);
    resultBlock(s, ['<i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/(4<i>r</i>) at <i>R</i> = <i>r</i>']);
    return s;
  },
  check() {
    const s = fig312.draw(fig312.cases[0]);
    const Rs = samples(0, 10, 100000), Ps = Rs.map(P312);
    const iMax = Ps.indexOf(Math.max(...Ps));
    const after = Ps.slice(iMax);
    // Example 4: E = 12 V, r = 2 Ω; Practice 5: E = 6 V, r = 1 Ω, R = 5 Ω
    const pl = (E: number, r: number, R: number) => (E * E * R) / (R + r) ** 2;
    return [
      [`The drawn curve is P = E²R/(R + r)²; sampled from 0 to 10r it peaks at R/r = ${fmt(Rs[iMax], 4)}`, close(Rs[iMax], 1, 1e-3)],
      [`Its peak is ${fmt(Ps[iMax], 6)} E²/r = E²/(4r), where the dashed guides meet the axes`, close(Ps[iMax], 0.25, 1e-8) && close(Y(F312, 0.25), Y(F312, P312(1)))],
      ['dP/dR = E²(r − R)/(R + r)³: positive below r, zero at r, negative above (one maximum)', [0.5, 1, 3].every((R, i) => Math.sign((1 - R) / (R + 1) ** 3) === [1, 0, -1][i])],
      [`Beyond R = r it falls all the way and only slowly: P(10r) = ${fmt(P312(10) / 0.25, 3)} P_max, still above zero`, after.every((p, i) => i === 0 || p < after[i - 1]) && P312(10) > 0 && P312(10) / 0.25 > 0.3],
      [`At R = r the load and the internal resistance take equal shares, η = R/(R + r) = ${fmt(1 / 2, 2)}`, close(1 / (1 + 1), 0.5)],
      [`Example 4 (E = 12 V, r = 2 Ω): P_max = ${fmt(pl(12, 2, 2), 2)} W at R = 2 Ω (the book's 18 W), above P at 1 Ω or 3 Ω`, close(pl(12, 2, 2), 18) && pl(12, 2, 1) < 18 && pl(12, 2, 3) < 18],
      [`Practice 5 (E = 6 V, r = 1 Ω): P_max = ${fmt(pl(6, 1, 1), 2)} W; at R = 5 Ω, P = ${fmt(pl(6, 1, 5), 2)} W (the book's 9 W and 5.0 W)`, close(pl(6, 1, 1), 9) && close(pl(6, 1, 5), 5)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.13 · a cell with internal resistance (topic 05)                 */
/* ===================================================================== */
const CL = { x: 104, top: 56, tp: 96, tm: 224, Rx: 292, Rz: [118, 190] as [number, number], box: [72, 96, 150, 224] as Rect, vx: 34 };
/** Example 1 (p. 191): E = 12 V, r = 0.5 Ω, R = 5.5 Ω. */
const EX1E = { E: 12, r: 0.5, R: 5.5 };
const fig313: Diagram = {
  id: 'p12-03-fig-3.13',
  topic: 5,
  name: 'Cell with internal resistance',
  cases: [{ chip: 'Terminal voltage', cap: 'A cell of emf <i>E</i> and internal resistance <i>r</i> (inside the dashed box) drives a current <i>I</i> through an external resistor <i>R</i>. The terminal voltage <i>V</i> is the potential difference across the cell’s two terminals.' }],
  draw() {
    const s = new Sketch(W, 290);
    const { x, top, tp, tm, Rx, Rz, box, vx } = CL;
    roundBox(s, box, { color: C.slate, w: 1.5, dash: true });
    // the cell: + plate up, toward the top terminal; then r; terminals on the box's edge
    wire(s, [[x, tp], [x, 116]]);
    cell(s, 'E', [x, 116], [x, 140]);
    wire(s, [[x, 140], [x, 152]]);
    resistor(s, 'r', [x, 152], [x, 208], { zig: 38 });
    wire(s, [[x, 208], [x, tm]]);
    // out of the + terminal, round through R, back to the − terminal
    wire(s, [[x, tp], [x, top], [Rx, top], [Rx, Rz[0]]]);
    resistor(s, 'R', [Rx, Rz[0]], [Rx, Rz[1]], { zig: 46, peaks: 7 });
    wire(s, [[Rx, Rz[1]], [Rx, tm], [x, tm]]);
    pin(s, 'T+', [x, tp]);
    pin(s, 'T-', [x, tm]);
    s.dot(x, tp, 3.6);
    s.dot(x, tm, 3.6);
    s.mid(190, top, 214, top);
    s.sym(202, top - 12, '<i>I</i>', { size: 16 });
    s.sym(x + 18, 134, '<i>E</i>', { size: 16, anchor: 'start' });
    s.sym(x + 15, 186, '<i>r</i>', { size: 16, anchor: 'start' });
    s.sym(Rx + 14, (Rz[0] + Rz[1]) / 2 + 5, '<i>R</i>', { size: 16, anchor: 'start' });
    // V: from terminal to terminal, beside the cell
    guide(s, [vx, tp], [x - 5, tp]);
    guide(s, [vx, tm], [x - 5, tm]);
    measure(s, [vx, tp + 1], [vx, tm - 1], C.mari, 2);
    s.sym(vx - 12, (tp + tm) / 2 + 6, '<i>V</i>', { size: 17, color: C.amber });
    s.place([
      { t: 'Cell', p: [box[2], 110], at: [[188, 98, 'start'], [192, 104, 'start']] },
      { t: 'Terminal voltage', hi: true, p: [vx, 200], at: [[60, 246, 'start'], [64, 250, 'start'], [80, 246, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = fig313.draw(fig313.cases[0]), c = readCircuit(s);
    const { E, r, R } = EX1E;
    const els = elements(c, { r, R }, { E });
    const g = c.n('T-'), sol = solve(c.N, els, g);
    const V = sol.V[c.n('T+')], I = sol.I.R;
    const open = solve(c.N, elements(c, { r }, { E }, ['R']), g).V[c.n('T+')];
    const short = solve(c.N, elements(c, { r, R: 1e-12 }, { E }), g).I.R;
    // Example 2: open circuit 1.5 V; across 4 Ω it reads 1.2 V, so r = 1 Ω
    const ex2 = solve(c.N, elements(c, { r: 1, R: 4 }, { E: 1.5 }), g).V[c.n('T+')];
    const pl = PLATES.get(s)!.E;
    const inBox = (p: P) => p[0] >= CL.box[0] && p[0] <= CL.box[2] && p[1] >= CL.box[1] && p[1] <= CL.box[3];
    return [
      ['Read off the wires: the + terminal, the cell, r and the − terminal in series inside the box; R joined across the two terminals outside it', c.same('T+', 'E.a', 'R.a') && c.same('E.b', 'r.a') && c.same('T-', 'r.b', 'R.b') && c.N === 3],
      ['The long (+) plate faces the top terminal: the current leaves the cell there', pl.plus[1] < pl.minus[1]],
      ['The dashed box holds the cell and r, not R; both terminals sit on its edge, and V is measured between their two heights', inBox([CL.x, 116]) && inBox([CL.x, 208]) && !inBox([CL.Rx, CL.Rz[0]]) && CL.tp === CL.box[1] && CL.tm === CL.box[3]],
      [`Example 1 (12 V, 0.5 Ω, 5.5 Ω), solved from the wiring: I = ${fmt(I, 4)} A, out of the + terminal along the top wire (the arrow's way) and down through R (the book's 2 A)`, close(I, 2, 1e-9) && I > 0],
      [`V = ${fmt(V, 4)} V = E − Ir = 12 − 2 × 0.5 (the book's 11 V), the drop IR across R`, close(V, E - I * r, 1e-9) && close(V, 11, 1e-9) && close(V, I * R, 1e-9)],
      [`With R taken away no current flows and V = ${fmt(open, 4)} V = E; with R shorted, I = ${fmt(short, 3)} A = E/r`, close(open, E, 1e-9) && close(short, E / r, 1e-6)],
      [`Example 2: a 1.5 V cell with r = 1 Ω reads ${fmt(ex2, 4)} V across 4 Ω (the book's 1.2 V)`, close(ex2, 1.2, 1e-9)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.14 · n cells in series (topic 06)                               */
/* ===================================================================== */
/**
 * Three cells drawn, each followed by its r, with "…" between the second and
 * third for the rest of the n; every cell has its short (−) plate to the left,
 * so the current runs left to right along the top through each from − to +.
 */
const SR = { top: 110, bot: 230, L: 14, Rx: 322, units: [30, 116, 232], gap: [200, 220] as [number, number], Rz: [138, 202] as [number, number], arrowY: 64 };
const unit314 = (x: number) => ({ cm: [x, SR.top] as P, cp: [x + 22, SR.top] as P, ra: [x + 28, SR.top] as P, rb: [x + 76, SR.top] as P });
/** Example 1 (p. 200): three cells, 2 V and 0.5 Ω each, on 4.5 Ω. */
const EX1S = { n: 3, E: 2, r: 0.5, R: 4.5 };
const fig314: Diagram = {
  id: 'p12-03-fig-3.14',
  topic: 6,
  name: 'Cells in series',
  cases: [{ chip: 'n in series', cap: '<i>n</i> identical cells in series, each of emf <i>E</i> and internal resistance <i>r</i>, connected to an external resistor <i>R</i>. The combination has emf <i>nE</i> and internal resistance <i>nr</i>.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { top, bot, L, Rx, units, gap, Rz, arrowY } = SR;
    wire(s, [[Rx, Rz[1]], [Rx, bot], [L, bot], [L, top], unit314(units[0]).cm]);
    units.forEach((x, i) => {
      const u = unit314(x), k = i + 1;
      cell(s, `E${k}`, u.cp, u.cm);
      wire(s, [u.cp, u.ra]);
      resistor(s, `r${k}`, u.ra, u.rb, { zig: 36 });
      s.sym((u.cm[0] + u.cp[0]) / 2, top - 20, '<i>E</i>', { size: 16 });
      s.sym((u.ra[0] + u.rb[0]) / 2, top + 26, '<i>r</i>', { size: 16 });
    });
    const u1 = unit314(units[0]), u2 = unit314(units[1]), u3 = unit314(units[2]);
    wire(s, [u1.rb, u2.cm]);
    wire(s, [u2.rb, [gap[0], top]]);
    wire(s, [[gap[1], top], u3.cm]);
    pin(s, 'gapL', [gap[0], top]);
    pin(s, 'gapR', [gap[1], top]);
    [0, 1, 2].forEach((k) => s.add(`<circle cx="${(gap[0] + gap[1]) / 2 - 6 + 6 * k}" cy="${top}" r="1.7" fill="${C.ink}"/>`));
    wire(s, [u3.rb, [Rx, top], [Rx, Rz[0]]]);
    resistor(s, 'R', [Rx, Rz[0]], [Rx, Rz[1]], { zig: 40 });
    s.sym(Rx - 14, (Rz[0] + Rz[1]) / 2 + 5, '<i>R</i>', { size: 16, anchor: 'end' });
    // the current: left along the bottom
    s.mid(178, bot, 154, bot);
    s.sym(166, bot - 12, '<i>I</i>', { size: 16 });
    // n cells, each (E, r)
    guide(s, [u1.cm[0], arrowY], [u1.cm[0], top - 34]);
    guide(s, [u3.rb[0], arrowY], [u3.rb[0], top - 34]);
    measure(s, [u1.cm[0] + 1, arrowY], [u3.rb[0] - 1, arrowY], C.mari, 2);
    s.sym((u1.cm[0] + u3.rb[0]) / 2, arrowY - 14, '<i>n</i> cells in series, each (<i>E</i>, <i>r</i>)', { size: 15, color: C.amber });
    resultBlock(s, ['<i>E</i><sub>eq</sub> = <i>nE</i>,  <i>r</i><sub>eq</sub> = <i>nr</i>']);
    return s;
  },
  check() {
    const s = fig314.draw(fig314.cases[0]), c = readCircuit(s);
    const { n, E, r, R } = EX1S;
    // the "…" stands for the cells not drawn: with n = 3 (Example 1) it is a plain join
    const join: El = { name: 'join', kind: 'V', n: [c.n('gapR'), c.n('gapL')], E: 0 };
    const vals = { r1: r, r2: r, r3: r, R };
    const cells = { E1: E, E2: E, E3: E };
    const sol = solve(c.N, [...elements(c, vals, cells), join], c.n('R', 'b'));
    const I = sol.I.R;
    const open = solve(c.N, [...elements(c, { r1: r, r2: r, r3: r }, cells, ['R']), join], c.n('R', 'b')).V[c.n('R', 'a')];
    const short = solve(c.N, [...elements(c, { ...vals, R: 1e-12 }, cells), join], c.n('R', 'b')).I.R;
    // Practice 4: three 2 V, 1 Ω cells, one reversed, on 1 Ω
    const rev = solve(c.N, [...elements(c, { r1: 1, r2: 1, r3: 1, R: 1 }, { E1: 2, E2: -2, E3: 2 }), join], c.n('R', 'b')).I.R;
    const pl = PLATES.get(s)!;
    return [
      ['Read off the wires, one loop: left rail → E₁ → r₁ → E₂ → r₂ → … → E₃ → r₃ → R → bottom wire → left rail', c.same('E1.b', 'R.b') && c.same('E1.a', 'r1.a') && c.same('r1.b', 'E2.b') && c.same('E2.a', 'r2.a') && c.same('r2.b', 'gapL') && c.same('gapR', 'E3.b') && c.same('E3.a', 'r3.a') && c.same('r3.b', 'R.a')],
      ['Every cell is the same way round, short (−) plate on the left: going along the top you cross each from − to +, so the EMFs add', ['E1', 'E2', 'E3'].every((k) => pl[k].minus[0] < pl[k].plus[0])],
      [`Example 1 (three 2 V, 0.5 Ω cells on 4.5 Ω), solved from the wiring: I = ${fmt(I, 4)} A (the book's 1 A), down through R and left along the bottom, the arrow's way`, close(I, (n * E) / (R + n * r), 1e-9) && close(I, 1, 1e-9) && I > 0],
      [`The group is one cell of emf ${fmt(open, 4)} V = nE (open circuit) and internal resistance nE/I_short = ${fmt((n * E) / short, 4)} Ω = nr`, close(open, n * E, 1e-9) && close((n * E) / short, n * r, 1e-6)],
      [`Practice 4: reverse one of three 2 V, 1 Ω cells, on 1 Ω: net EMF (3 − 2) × 2 = 2 V, I = ${fmt(rev, 4)} A (the book's 0.5 A)`, close(rev, 0.5, 1e-9)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.15 · mixed grouping (topic 06)                                  */
/* ===================================================================== */
/** m = 3 rows of n = 3 cells drawn; every cell's short (−) plate faces the left rail. */
const MX = { L: 30, Rr: 228, rows: [104, 158, 212], bot: 304, Rz: [98, 158] as [number, number], ny: 46, mx: 244 };
const unit315 = (x: number, y: number) => ({ cm: [x + 6, y] as P, cp: [x + 22, y] as P, ra: [x + 26, y] as P, rb: [x + 60, y] as P });
const xs315 = [MX.L, MX.L + 66, MX.L + 132];
const fig315: Diagram = {
  id: 'p12-03-fig-3.15',
  topic: 6,
  name: 'Mixed grouping of cells',
  cases: [{ chip: 'm rows of n', cap: 'Mixed grouping: <i>m</i> rows in parallel, each row having <i>n</i> cells in series, connected to an external resistor <i>R</i>. Each row has emf <i>nE</i> and internal resistance <i>nr</i>.' }],
  draw() {
    const s = new Sketch(W, 410);
    const { L, Rr, rows, bot, Rz, ny, mx } = MX;
    const top = rows[0];
    // one row, outlined
    roundBox(s, [L + 3, top - 22, Rr - 3, top + 18], { color: C.mari, w: 2.2, dash: true, rx: 10 });
    wire(s, [[L, top], [L, bot], [Rz[0], bot]]);
    wire(s, [[Rr, top], [Rr, bot], [Rz[1], bot]]);
    resistor(s, 'R', [Rz[1], bot], [Rz[0], bot], { zig: 48, peaks: 8 });
    rows.forEach((y, j) => {
      let prev: P = [L, y];
      xs315.forEach((x, i) => {
        const u = unit315(x, y), k = `${j + 1}${i + 1}`;
        wire(s, [prev, u.cm]);
        cell(s, `E${k}`, u.cp, u.cm);
        wire(s, [u.cp, u.ra]);
        resistor(s, `r${k}`, u.ra, u.rb, { zig: 26, amp: 5.5 });
        prev = u.rb;
      });
      wire(s, [prev, [Rr, y]]);
      s.dot(L, y, 3.4);
      s.dot(Rr, y, 3.4);
    });
    pin(s, 'minus', [L, bot]);
    pin(s, 'plus', [Rr, bot]);
    // E and r, named once, under the first cell of the last row
    const u0 = unit315(xs315[0], rows[2]);
    s.sym((u0.cm[0] + u0.cp[0]) / 2, rows[2] + 32, '<i>E</i>', { size: 16 });
    s.sym((u0.ra[0] + u0.rb[0]) / 2, rows[2] + 28, '<i>r</i>', { size: 16 });
    // the current through R: from + to −
    arrow(s, [154, bot - 22], [102, bot - 22], { w: 1.8 });
    s.sym(128, bot - 34, '<i>I</i>', { size: 16 });
    s.sym(L - 14, bot - 16, '−', { size: 17 });
    s.sym(Rr + 14, bot - 16, '+', { size: 17 });
    s.sym((Rz[0] + Rz[1]) / 2, bot + 26, '<i>R</i>', { size: 16 });
    // n cells in every row; m rows
    measure(s, [L + 1, ny], [Rr - 1, ny], C.slate);
    s.sym((L + Rr) / 2, ny - 12, '<i>n</i> cells in series in every row', { size: 15, color: C.slate });
    measure(s, [mx, rows[0] + 1], [mx, rows[2] - 1], C.slate);
    s.sym(mx + 10, rows[1] - 4, '<i>m</i> rows', { size: 15, anchor: 'start', color: C.slate });
    s.sym(mx + 10, rows[1] + 14, 'in parallel', { size: 15, anchor: 'start', color: C.slate });
    const res = resultBlock(s, ['each row: emf <i>nE</i>,', 'internal resistance <i>nr</i>']);
    s.place([{ t: 'One row', hi: true, p: [Rr - 3, top - 14], at: [[W - 8, 70, 'end'], [W - 8, 64, 'end'], [W - 8, 76, 'end']] }], [res]);
    return s;
  },
  check() {
    const s = fig315.draw(fig315.cases[0]), c = readCircuit(s);
    const m = 3, n = 3, E = 1.5, r = 0.5, R = 2;
    const vals: Record<string, number> = { R }, cells: Record<string, number> = {};
    for (let j = 1; j <= m; j++) for (let i = 1; i <= n; i++) { vals[`r${j}${i}`] = r; cells[`E${j}${i}`] = E; }
    const g = c.n('minus');
    const sol = solve(c.N, elements(c, vals, cells), g);
    const I = sol.I.R, Vplus = sol.V[c.n('plus')];
    // one row alone: its open-circuit EMF and its internal resistance
    const others = c.comps.filter((k) => /^[Er][23]/.test(k.name)).map((k) => k.name);
    const rowOpen = solve(c.N, elements(c, vals, cells, [...others, 'R']), g).V[c.n('plus')];
    const rowShort = solve(c.N, elements(c, { ...vals, R: 1e-12 }, cells, others), g).I.R;
    const pl = PLATES.get(s)!;
    const box: Rect = [MX.L + 3, MX.rows[0] - 22, MX.Rr - 3, MX.rows[0] + 18];
    const boxed = c.comps.filter((k) => k.kind !== 'pin' && inRect(k.a, box) && inRect(k.b, box)).map((k) => k.name).sort();
    // Example 4 (24 cells, 1.5 V, 0.5 Ω, on 3 Ω) and Practice 5 (32 cells, 1.2 V, 0.4 Ω, on 0.8 Ω): try every m × n
    const best = (N: number, e: number, ri: number, Rl: number) => {
      let top = { m: 0, n: 0, I: 0 };
      for (let mm = 1; mm <= N; mm++) if (N % mm === 0) { const nn = N / mm, Ii = (mm * nn * e) / (mm * Rl + nn * ri); if (Ii > top.I) top = { m: mm, n: nn, I: Ii }; }
      return top;
    };
    const b4 = best(24, 1.5, 0.5, 3), b5 = best(32, 1.2, 0.4, 0.8);
    return [
      ['Read off the wires: every row starts on the left rail and ends on the right rail, three cells and three r in series between; R joins the rails along the bottom', [1, 2, 3].every((j) => c.same('minus', `E${j}1.b`) && c.same('plus', `r${j}3.b`) && c.same(`E${j}1.a`, `r${j}1.a`) && c.same(`r${j}1.b`, `E${j}2.b`) && c.same(`r${j}2.b`, `E${j}3.b`)) && c.same('plus', 'R.a') && c.same('minus', 'R.b')],
      ['In every row each cell has its short (−) plate to the left: the right rail is +, the left rail −', Object.values(pl).every((p) => p.minus[0] < p.plus[0]) && Vplus > 0],
      [`The outline holds exactly one row: ${boxed.join(', ')}`, boxed.join(',') === 'E11,E12,E13,r11,r12,r13'],
      [`One row alone: emf ${fmt(rowOpen, 4)} V = nE and internal resistance ${fmt(rowOpen / rowShort, 4)} Ω = nr (n = 3, E = 1.5 V, r = 0.5 Ω)`, close(rowOpen, n * E, 1e-9) && close(rowOpen / rowShort, n * r, 1e-6)],
      [`All m = 3 rows on R = 2 Ω, solved from the wiring: I = ${fmt(I, 4)} A = mnE/(mR + nr), from + to − through R (the arrow's way)`, close(I, (m * n * E) / (m * R + n * r), 1e-9) && I > 0],
      [`Example 4: of every m × n = 24, the most current on 3 Ω comes from m = ${b4.m}, n = ${b4.n} (mR = nr), I = ${fmt(b4.I, 4)} A (the book's 2 rows of 12, 3 A)`, b4.m === 2 && b4.n === 12 && close(b4.I, 3, 1e-9) && close(b4.m * 3, b4.n * 0.5)],
      [`Practice 5: of every m × n = 32 on 0.8 Ω, m = ${b5.m}, n = ${b5.n}, I = ${fmt(b5.I, 4)} A (the book's m = 4, n = 8, 6 A)`, b5.m === 4 && b5.n === 8 && close(b5.I, 6, 1e-9)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.16 · Kirchhoff's two rules (topic 07)                           */
/* ===================================================================== */
/** The junction: three currents in (I₁, I₂, I₃), two out (I₄, I₅), as the book draws them. */
const JN = { c: [170, 118] as P, ends: { I1: [70, 60], I2: [70, 176], I3: [270, 60], I4: [270, 176], I5: [170, 222] } as Record<string, P>, out: ['I4', 'I5'] };
/** The loop: a hexagon (points left and right), a cell on its upper-left side, resistors on its upper-right side and its bottom. */
const JARROWS = new WeakMap<Sketch, Record<string, [P, P]>>();
/** `k`: the cell and resistors drawn 1.6 times the usual size, so they read at a phone's width (Android review, 2026-10-22: the plates were about 12 px). */
const LP = { c: [170, 156] as P, R: 104, cellSide: 2, resSides: [0, 4], arcR: 66, k: 1.6 };
const hexV = (k: number): P => [LP.c[0] + LP.R * Math.cos((k * Math.PI) / 3), LP.c[1] - LP.R * Math.sin((k * Math.PI) / 3)];
/** The loop's values for the check: E = 6 V, resistors 1 Ω and 2 Ω, so I = 2 A. */
const LV = { E: 6, R0: 1, R4: 2 };
const fig316: Diagram = {
  id: 'p12-03-fig-3.16',
  topic: 7,
  name: 'Kirchhoff’s rules',
  cases: [
    { chip: 'Junction rule', part: 'junction', cap: 'Kirchhoff’s rules: the junction rule — total current in equals total current out.' },
    { chip: 'Loop rule', part: 'loop', cap: 'Kirchhoff’s rules: the loop rule — the rise in potential across the cell is exactly cancelled by the drops across the resistors around a closed loop.' },
  ],
  draw(cs: { part: string }) {
    if (cs.part === 'junction') {
      const s = new Sketch(W, 316);
      const { c, ends, out } = JN;
      const drawn: Record<string, [P, P]> = {};
      Object.entries(ends).forEach(([k, e]) => {
        const u = unit(sub(c, e));
        drawn[k] = out.includes(k) ? [add(c, u, -6), e] : [e, add(c, u, -6)];
        arrow(s, ...drawn[k], { w: 2 });
      });
      JARROWS.set(s, drawn);
      s.dot(c[0], c[1], 5.5, C.mari);
      const lab: Record<string, [P, 'start' | 'middle' | 'end']> = { I1: [[62, 56], 'end'], I2: [[62, 194], 'end'], I3: [[278, 56], 'start'], I4: [[278, 194], 'start'], I5: [[170, 246], 'middle'] };
      Object.entries(lab).forEach(([k, [p, a]]) => s.sym(p[0], p[1], `<i>I</i><sub>${k[1]}</sub>`, { size: 17, anchor: a }));
      const res = resultBlock(s, ['<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + <i>I</i><sub>3</sub> = <i>I</i><sub>4</sub> + <i>I</i><sub>5</sub>']);
      s.place([{ t: 'Junction', hi: true, p: c, own: c, at: [[c[0] + 44, 104, 'start'], [c[0] + 46, 100, 'start'], [c[0] + 46, 112, 'start']] }], [res]);
      return s;
    }
    const s = new Sketch(W, 340);
    const V = [0, 1, 2, 3, 4, 5].map(hexV);
    const { k: big } = LP;
    let tagCell: P = LP.c;
    // each side k runs from vertex k to vertex k+1 (anticlockwise on the page); a component sits in the middle of three of them
    for (let k = 0; k < 6; k++) {
      const a = V[k], b = V[(k + 1) % 6], u = unit(sub(b, a)), L = len(a, b);
      const p0 = add(a, u, L / 2 - 22 * big), p1 = add(a, u, L / 2 + 22 * big);
      if (k === LP.cellSide) {
        // walking clockwise (from vertex 3 to vertex 2) you cross − then +: the cell's + plate faces vertex 2
        wire(s, [a, add(a, u, L / 2 - 12 * big)]);
        const ce = cell(s, 'E', add(a, u, L / 2 - 12 * big), add(a, u, L / 2 + 12 * big), big);
        // the tag's dot on the + plate, on its outer half
        tagCell = add(add(ce.m, ce.u, (PLATE.gap * big) / 2), ce.nrm, -PLATE.plus * big * 0.6);
        wire(s, [add(a, u, L / 2 + 12 * big), b]);
      } else if (LP.resSides.includes(k)) {
        wire(s, [a, p0]);
        resistor(s, `R${k}`, p0, p1, { zig: 34 * big, amp: 6 * big, w: 2 });
        wire(s, [p1, b]);
      } else wire(s, [a, b]);
    }
    V.forEach((v) => s.dot(v[0], v[1], 2.8));
    // the walk round the loop, clockwise on the page (the current's way: out of the cell's + plate)
    const arc = circPts(LP.c, LP.arcR, 200, -20, 60);
    path(s, arc.slice(0, -2), { color: C.mari, w: 2.2, dash: 'dash' });
    arrow(s, arc[arc.length - 5], arc[arc.length - 1], { color: C.mari, w: 2.2 });
    s.sym(LP.c[0], LP.c[1] - 6, 'net change', { size: 14, color: C.amber });
    s.sym(LP.c[0], LP.c[1] + 12, 'in potential = 0', { size: 14, color: C.amber });
    const r0 = mid(V[0], V[1]), r4 = mid(V[4], V[5]);
    s.place([
      { t: 'Cell (escalator)', p: tagCell, at: [[8, 10, 'start'], [8, 14, 'start'], [8, 6, 'start']] },
      { t: 'Resistor (slope)', p: add(r0, [8, -6]), at: [[W - 8, 10, 'end'], [W - 8, 14, 'end'], [W - 8, 6, 'end']] },
      { t: 'Resistor (slope)', p: [r4[0], r4[1] + 7], at: [[r4[0], 284, 'middle'], [r4[0], 288, 'middle'], [r4[0], 280, 'middle']] },
    ]);
    return s;
  },
  check(cs: { part: string }) {
    const s = fig316.draw(cs);
    if (cs.part === 'junction') {
      const { c } = JN, drawn = JARROWS.get(s)!;
      // an arrow points in when its head is nearer the junction than its tail
      const ins = Object.keys(drawn).filter((k) => len(drawn[k][1], c) < len(drawn[k][0], c)), outs = Object.keys(drawn).filter((k) => !ins.includes(k));
      // the text's numbers: 5 A, 3 A and 2 A in, 10 A out in total
      const In = [5, 3, 2], out = 10;
      return [
        [`Three arrows point into the junction (${ins.join(', ')}) and two out of it (${outs.join(', ')}), as the equation's two sides say`, ins.join(',') === 'I1,I2,I3' && outs.join(',') === 'I4,I5'],
        ['Every arrow lies on a straight wire through the junction', Object.values(drawn).every(([a, b]) => Math.abs(crossp(sub(b, a), sub(c, a))) / len(a, b) < 1e-9)],
        [`The text's example: 5 A, 3 A and 2 A in, so I₄ + I₅ = ${In.reduce((a, b) => a + b, 0)} A must leave (the book's 10 A): taking in as + and out as −, ΣI = 0`, In.reduce((a, b) => a + b, 0) === out],
        clearCheck(s),
        labelsApart(s),
      ];
    }
    const c = readCircuit(s);
    const els = elements(c, { R0: LV.R0, R4: LV.R4 }, { E: LV.E });
    const g = c.n('E', 'b'), sol = solve(c.N, els, g);
    const I = sol.I.E;
    // walk clockwise on the page from the cell's − terminal: up across the cell, then on round, entering each resistor at its b end
    const rise = sol.V[c.n('E', 'a')] - sol.V[c.n('E', 'b')];
    const drops = ['R0', 'R4'].map((k) => sol.V[c.n(k, 'b')] - sol.V[c.n(k, 'a')]);
    const pl = PLATES.get(s)!.E;
    // the walk's sense: the arc runs clockwise on the page (its angle falls), and so does the current out of the + plate
    const arc = circPts(LP.c, LP.arcR, 200, -20, 60);
    const turn = crossp(sub(arc[1], LP.c), sub(arc[2], arc[1]));
    const cur = crossp(sub(pl.plus, LP.c), sub(pl.plus, pl.minus));
    return [
      ['Read off the wires: one closed loop through the cell and the two resistors, nothing else', c.same('E.a', 'R0.b') && c.same('R0.a', 'R4.b') && c.same('R4.a', 'E.b') && c.N === 3],
      ['The dashed arrow walks round the loop the way the current goes: both turn clockwise on the page, out of the cell’s + plate', turn > 0 && cur > 0],
      [`With E = ${LV.E} V and resistors of ${LV.R0} Ω and ${LV.R4} Ω, the current is ${fmt(I, 4)} A, the same all round`, close(I, LV.E / (LV.R0 + LV.R4), 1e-9) && close(-sol.I.R0, I, 1e-9) && close(-sol.I.R4, I, 1e-9)],
      [`Round the loop: a rise of ${fmt(rise, 3)} V across the cell, drops of ${drops.map((d) => fmt(d, 3)).join(' V and ')} V across the resistors (IR each); net change ${fmt(rise - drops[0] - drops[1], 9)} V`, close(rise - drops[0] - drops[1], 0, 1e-9) && close(drops[0], I * LV.R0, 1e-9) && close(drops[1], I * LV.R4, 1e-9)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.17 · the Wheatstone bridge (topic 07)                           */
/* ===================================================================== */
const WB = { A: [52, 160] as P, B: [170, 52] as P, C: [288, 160] as P, D: [170, 268] as P, G: [170, 160] as P, L: 18, Rr: 322, bot: 318, cell: [112, 136] as [number, number], key: [196, 228] as [number, number] };
/** The arms' zigzags. */
const WZ = { zig: 74, peaks: 14, amp: 6 };
/** Example 2 (p. 212): P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, 6 V. */
const EX2W = { P: 10, Q: 20, R: 15, S: 30, E: 6 };
const fig317: Diagram = {
  id: 'p12-03-fig-3.17',
  topic: 7,
  name: 'Wheatstone bridge',
  cases: [{ chip: 'Wheatstone bridge', cap: 'Wheatstone bridge: arms <i>P</i>, <i>Q</i>, <i>R</i>, <i>S</i> form the diamond ABCD, a galvanometer <i>G</i> joins B and D, and the cell with a key is connected across A and C. At balance the galvanometer current is zero and <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>.' }],
  draw() {
    const s = new Sketch(W, 372);
    const { A, B, C: Cc, D, G, L, Rr, bot, cell: cx, key: kx } = WB;
    const arms: [string, P, P][] = [['P', A, B], ['Q', B, Cc], ['R', A, D], ['S', D, Cc]];
    // Teeth about as steep as every other resistor's (66° off the wire; 65° on
    // a 34 px resistor of 6): at 8 peaks a tooth leaned 52°, so on an arm at
    // 42.5° its two edges ran within 10° of level and plumb and the zigzag read
    // as a staircase (Android review, 2026-10-22).
    arms.forEach(([k, a, b]) => resistor(s, k, a, b, WZ));
    const g = galvo(s, 'G', G, [0, 1], 14, { color: C.mari });
    wire(s, [B, g.a]);
    wire(s, [g.b, D]);
    // the cell and key across A and C
    wire(s, [A, [L, A[1]], [L, bot], [cx[0], bot]]);
    cell(s, 'E', [cx[0], bot], [cx[1], bot]);
    wire(s, [[cx[1], bot], [kx[0], bot]]);
    const lever = key(s, 'K', [kx[0], bot], [kx[1], bot]);
    wire(s, [[kx[1], bot], [Rr, bot], [Rr, Cc[1]], Cc]);
    [A, B, Cc, D].forEach((p) => s.dot(p[0], p[1], 3.6));
    s.sym(A[0] - 12, A[1] - 12, 'A', { size: 17 });
    s.sym(B[0], B[1] - 14, 'B', { size: 17 });
    s.sym(Cc[0] + 12, Cc[1] - 12, 'C', { size: 17 });
    s.sym(D[0], D[1] + 28, 'D', { size: 17 });
    // the arms' names, inside the diamond: 24 px in from each arm's middle, toward the centre
    arms.forEach(([k, a, b]) => {
      const u = unit(sub(b, a)), nrm: P = [-u[1], u[0]], m = mid(a, b), inward = dotp(nrm, sub(G, m)) > 0 ? nrm : ([-nrm[0], -nrm[1]] as P);
      const q = add(m, inward, 24);
      s.sym(q[0], q[1] + 6, `<i>${k}</i>`, { size: 17 });
    });
    // currents beside the arms, outside the diamond: I₁ through P and Q, I₂ through R and S
    const beside = (a: P, b: P, out: P, k: number) => { const u = unit(sub(b, a)), m = add(mid(a, b), out, 24); arrow(s, add(m, u, -15), add(m, u, 15), { w: 1.8 }); return add(m, out, 18 + k); };
    const up: P = unit([-1, -1.1]), dn: P = unit([-1, 1.1]);
    const l1 = beside(A, B, up, 0), l2 = beside(B, Cc, [-up[0], up[1]], 0), l3 = beside(A, D, dn, 4), l4 = beside(D, Cc, [-dn[0], dn[1]], 4);
    s.sym(l1[0], l1[1] + 4, '<i>I</i><sub>1</sub>', { size: 16 });
    s.sym(l2[0], l2[1] + 4, '<i>I</i><sub>1</sub>', { size: 16 });
    s.sym(l3[0], l3[1] + 6, '<i>I</i><sub>2</sub>', { size: 16 });
    s.sym(l4[0], l4[1] + 6, '<i>I</i><sub>2</sub>', { size: 16 });
    arrow(s, [183, 84], [183, 118], { w: 1.6, color: C.slate });
    s.sym(192, 110, '<i>I</i><sub>g</sub>', { size: 16, anchor: 'start', color: C.slate });
    s.sym((cx[0] + cx[1]) / 2, bot + 30, '<i>E</i>', { size: 16 });
    const res = resultBlock(s, ['balance: <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>']);
    s.place([{ t: 'Key', p: lever, at: [[(kx[0] + kx[1]) / 2, 278, 'middle'], [(kx[0] + kx[1]) / 2 + 12, 278, 'middle'], [(kx[0] + kx[1]) / 2 + 24, 274, 'middle']] }], [res]);
    return s;
  },
  check() {
    const s = fig317.draw(fig317.cases[0]), c = readCircuit(s);
    const { P: p, Q: q, R: r, S: sv, E } = EX2W;
    const nA = c.n('P', 'a'), nC = c.n('Q', 'b');
    const run = (v: Record<string, number>, e = E) => solve(c.N, elements(c, v, { E: e }), nC);
    const bal = run({ P: p, Q: q, R: r, S: sv, G: 100 });
    const Req = E / bal.I.E;
    // the arms alone, for resistance between A and C (cell and key taken out)
    const req = (v: Record<string, number>) => reqBetween(c.N, elements(c, v, {}, ['E', 'K']), nA, nC);
    const q4 = req({ P: 2, Q: 4, R: 3, S: 6, G: 5 });
    const ex4 = req({ P: 1, Q: 2, R: 2, S: 1, G: 1 });
    const pr5 = req({ P: 1, Q: 2, R: 1, S: 1, G: 1 });
    const off = run({ P: 10, Q: 10, R: 10, S: 11, G: 20 });
    // a tooth edge runs 2·amp across the wire over zig/peaks along it; on an arm at angle θ its edges run at θ ± tooth
    const tooth = (Math.atan2(2 * WZ.amp, WZ.zig / WZ.peaks) * 180) / Math.PI;
    const offAxis = Math.min(...[[WB.A, WB.B], [WB.B, WB.C], [WB.A, WB.D], [WB.D, WB.C]].flatMap(([a, b]) => {
      const th = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
      return [th + tooth, th - tooth].map((e) => { const m = ((e % 90) + 90) % 90; return Math.min(m, 90 - m); });
    }));
    return [
      ['Read off the wires: P from A to B, Q from B to C, R from A to D, S from D to C, G from B to D, and the cell and key from A round to C', c.same('P.a', 'R.a') && c.same('P.b', 'Q.a', 'G.a') && c.same('Q.b', 'S.b') && c.same('R.b', 'S.a', 'G.b') && c.same('E.a', 'P.a') && c.same('E.b', 'K.a') && c.same('K.b', 'Q.b') && c.N === 5],
      [`The cell's long (+) plate is wired to A, so A is the high side: V_A − V_C = ${fmt(bal.V[nA] - bal.V[nC], 4)} V`, close(bal.V[nA] - bal.V[nC], E, 1e-9)],
      [`Example 2 (10, 20, 15, 30 Ω on 6 V), solved from the wiring: P/Q = R/S = 1/2 and I_g = ${fmt(Math.abs(bal.I.G), 9)} A: balanced`, close(p / q, r / sv) && close(bal.I.G, 0, 1e-9)],
      [`So B and D are at one potential (${fmt(bal.V[c.n('G', 'a')], 4)} V and ${fmt(bal.V[c.n('G', 'b')], 4)} V), I₁ = ${fmt(bal.I.P, 4)} A runs A → B → C through P and Q, I₂ = ${fmt(bal.I.R, 4)} A runs A → D → C through R and S (the arrows' ways)`, close(bal.V[c.n('G', 'a')], bal.V[c.n('G', 'b')], 1e-9) && close(bal.I.P, bal.I.Q, 1e-9) && close(bal.I.R, bal.I.S, 1e-9) && bal.I.P > 0 && bal.I.R > 0],
      [`And the network is (P + Q) ∥ (R + S): ${fmt(Req, 4)} Ω (the book's 18 Ω)`, close(Req, 18, 1e-9)],
      [`Q4: 2, 4, 3, 6 Ω with a 5 Ω galvanometer: ${fmt(q4, 4)} Ω (the book's 3.6 Ω)`, close(q4, 3.6, 1e-9)],
      [`Example 4, unbalanced (AB = R, BC = 2R, AD = 2R, DC = R, BD = R): ${fmt(ex4, 6)}R (the book's 7R/5 = 1.4R)`, close(ex4, 1.4, 1e-9)],
      [`Practice 5 (AB = R, BC = 2R, AD = R, DC = R, BD = R): ${fmt(pr5, 6)}R (the book's 13R/11 ≈ 1.18R)`, close(pr5, 13 / 11, 1e-9)],
      [`The arms' teeth lean ${fmt(tooth, 1)}° off the wire, so on the diamond's arms no tooth edge runs within ${fmt(offAxis, 1)}° of level or plumb: a zigzag, not a staircase`, offAxis >= 15],
      [`Addendum E's Example E.1: S raised to 11 Ω (P = Q = R = 10 Ω, G = 20 Ω, 6 V) gives I_g = ${fmt(off.I.G * 1000, 3)} mA from B to D, i.e. 4.72 mA from D to B (the book's −4.72 mA)`, fmt(off.I.G * 1000, 2) === '−4.72'],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.18 · two cells and a shared resistor (topic 07)                 */
/* ===================================================================== */
const TC = { top: 60, bot: 246, xs: [90, 170, 250], cell: [112, 136] as [number, number], rz: [160, 220] as [number, number], mz: [104, 200] as [number, number] };
/** Example 1 (p. 212): E₁ = 8 V with 2 Ω, E₂ = 4 V with 2 Ω, 4 Ω between A and B. */
const EX1T = { E1: 8, E2: 4, r1: 2, r2: 2, Rm: 4 };
const fig318: Diagram = {
  id: 'p12-03-fig-3.18',
  topic: 7,
  name: 'Two cells and a shared resistor',
  cases: [{ chip: 'Worked example 1', cap: 'The network of worked example 1: a cell <i>E</i><sub>1</sub> = 8 V with 2 Ω and a cell <i>E</i><sub>2</sub> = 4 V with 2 Ω, both connected to a common 4 Ω resistor between nodes A and B.' }],
  draw() {
    const s = new Sketch(W, 290);
    const { top, bot, xs, cell: cy, rz, mz } = TC;
    wire(s, [[xs[0], top], [xs[2], top]]);
    wire(s, [[xs[0], bot], [xs[2], bot]]);
    [xs[0], xs[2]].forEach((x, i) => {
      const k = i + 1;
      wire(s, [[x, top], [x, cy[0]]]);
      cell(s, `E${k}`, [x, cy[0]], [x, cy[1]]);
      wire(s, [[x, cy[1]], [x, rz[0]]]);
      resistor(s, `r${k}`, [x, rz[0]], [x, rz[1]], { zig: 40 });
      wire(s, [[x, rz[1]], [x, bot]]);
    });
    wire(s, [[xs[1], top], [xs[1], mz[0]]]);
    resistor(s, 'Rm', [xs[1], mz[0]], [xs[1], mz[1]], { zig: 56, peaks: 8 });
    wire(s, [[xs[1], mz[1]], [xs[1], bot]]);
    xs.forEach((x) => { s.dot(x, top, 3.6); s.dot(x, bot, 3.6); });
    pin(s, 'A', [xs[0], top]);
    pin(s, 'B', [xs[0], bot]);
    s.sym(xs[0] - 22, top - 10, 'A', { size: 17 });
    s.sym(xs[0] - 22, bot + 24, 'B', { size: 17 });
    s.sym(xs[0] - 18, (cy[0] + cy[1]) / 2 + 6, '<i>E</i><sub>1</sub> = 8 V', { size: 15, anchor: 'end' });
    s.sym(xs[2] + 18, (cy[0] + cy[1]) / 2 + 6, '<i>E</i><sub>2</sub> = 4 V', { size: 15, anchor: 'start' });
    s.sym(xs[0] - 14, (rz[0] + rz[1]) / 2 + 5, '2 Ω', { size: 15, anchor: 'end' });
    s.sym(xs[2] + 14, (rz[0] + rz[1]) / 2 + 5, '2 Ω', { size: 15, anchor: 'start' });
    s.sym(xs[1] + 14, (mz[0] + mz[1]) / 2 + 5, '4 Ω', { size: 15, anchor: 'start' });
    // the assumed currents: I₁ up the left branch, I₂ up the right, I₁ + I₂ down the middle
    arrow(s, [xs[0] - 14, 98], [xs[0] - 14, 72], { w: 1.8 });
    s.sym(xs[0] - 22, 92, '<i>I</i><sub>1</sub>', { size: 16, anchor: 'end' });
    arrow(s, [xs[2] - 14, 98], [xs[2] - 14, 72], { w: 1.8 });
    s.sym(xs[2] - 22, 92, '<i>I</i><sub>2</sub>', { size: 16, anchor: 'end' });
    arrow(s, [xs[1] - 12, 70], [xs[1] - 12, 96], { color: C.mari, w: 2.2 });
    s.sym(xs[1] - 19, 88, '<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>', { size: 15, anchor: 'end', color: C.amber });
    return s;
  },
  check() {
    const s = fig318.draw(fig318.cases[0]), c = readCircuit(s);
    const run = (v: typeof EX1T) => solve(c.N, elements(c, { r1: v.r1, r2: v.r2, Rm: v.Rm }, { E1: v.E1, E2: v.E2 }), c.n('B'));
    const ex1 = run(EX1T);
    // a source's current is out of its + plate (up, toward A): I₁ and I₂ as assumed
    const I1 = ex1.I.E1, I2 = ex1.I.E2, Im = ex1.I.Rm;
    const ex3 = run({ E1: 8, E2: 7, r1: 1, r2: 1, Rm: 2 });
    const pin3 = 8 * ex3.I.E1 + 7 * ex3.I.E2, pout3 = ex3.I.E1 ** 2 * 1 + ex3.I.E2 ** 2 * 1 + ex3.I.Rm ** 2 * 2;
    const pr3 = run({ E1: 5, E2: 7, r1: 2, r2: 2, Rm: 1 });
    const pl = PLATES.get(s)!;
    return [
      ['Read off the wires: the left branch (E₁ over 2 Ω), the 4 Ω and the right branch (E₂ over 2 Ω) each run from A (top) to B (bottom)', c.same('A', 'E1.a', 'E2.a', 'Rm.a') && c.same('E1.b', 'r1.a') && c.same('E2.b', 'r2.a') && c.same('B', 'r1.b', 'r2.b', 'Rm.b') && c.N === 4],
      ['Both cells have their long (+) plate up, toward A', pl.E1.plus[1] < pl.E1.minus[1] && pl.E2.plus[1] < pl.E2.minus[1]],
      [`Example 1, solved from the wiring: I₁ = ${fmt(I1, 4)} A up the left branch, I₂ = ${fmt(I2, 4)} A up the right (the book's 1.6 A and −0.4 A: E₂ is being charged)`, close(I1, 1.6, 1e-9) && close(I2, -0.4, 1e-9)],
      [`Junction rule at A: I₁ + I₂ = ${fmt(I1 + I2, 4)} A goes down the 4 Ω (the book's 1.2 A), and V_A − V_B = ${fmt(ex1.V[c.n('A')], 4)} V = 4 Ω × 1.2 A`, close(Im, I1 + I2, 1e-9) && close(Im, 1.2, 1e-9) && close(ex1.V[c.n('A')], 4.8, 1e-9)],
      [`Example 3 (8 V and 7 V, 1 Ω each, 2 Ω shared): I₁ = ${fmt(ex3.I.E1, 4)} A, I₂ = ${fmt(ex3.I.E2, 4)} A, ${fmt(ex3.I.Rm, 4)} A shared; ${fmt(pin3, 3)} W in = ${fmt(pout3, 3)} W dissipated (the book's 2 A, 1 A, 3 A, 23 W)`, close(ex3.I.E1, 2, 1e-9) && close(ex3.I.E2, 1, 1e-9) && close(ex3.I.Rm, 3, 1e-9) && close(pin3, 23, 1e-9) && close(pout3, 23, 1e-9)],
      [`Practice 3 (5 V and 7 V, 2 Ω each, 1 Ω shared): ${fmt(pr3.I.Rm, 4)} A through the 1 Ω, branches ${fmt(pr3.I.E1, 4)} A and ${fmt(pr3.I.E2, 4)} A (the book's 3 A; 1 A and 2 A)`, close(pr3.I.Rm, 3, 1e-9) && close(pr3.I.E1, 1, 1e-9) && close(pr3.I.E2, 2, 1e-9)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 3.19 · the meter bridge (topic 08)                                */
/* ===================================================================== */
/** The 100 cm wire from A to C, the jockey D at l = 40 cm (the book's drawing and Example 1). */
const MB = { A: [48, 150] as P, Cx: 292, top: 70, B: 170, Gy: 104, L: 20, Rr: 320, bot: 270, l: 40, scaleY: 214, cell: [92, 116] as [number, number], key: [196, 228] as [number, number] };
const cmX = (cm: number) => MB.A[0] + ((MB.Cx - MB.A[0]) * cm) / 100;
/** Example 1 (p. 224): R = 5 Ω in the left gap, null at 40 cm, so X = 7.5 Ω. */
const EX1M = { R: 5, X: 7.5, sigma: 0.02 };
const fig319: Diagram = {
  id: 'p12-03-fig-3.19',
  topic: 8,
  name: 'Meter bridge',
  cases: [{ chip: 'Meter bridge', cap: 'Meter bridge: a known resistance <i>R</i> and an unknown <i>X</i> meet at B; a galvanometer joins B to the jockey D on the uniform 100 cm wire AC. At the null point AD = <i>l</i> and DC = 100 − <i>l</i>.' }],
  draw() {
    const s = new Sketch(W, 316);
    const { A, Cx, top, B, Gy, L, Rr, bot, scaleY, cell: cx, key: kx } = MB;
    const y = A[1], C0: P = [Cx, y], xD = cmX(MB.l), D: P = [xD, y];
    // the uniform wire, thick, from A to C (its two parts AD and DC are the bridge's lower arms)
    path(s, [A, C0], { w: 3.6 });
    reg(s, { name: 'AD', kind: 'R', a: A, b: D });
    reg(s, { name: 'DC', kind: 'R', a: D, b: C0 });
    // R and X along the top, meeting at B
    wire(s, [A, [A[0], top], [A[0] + 12, top]]);
    resistor(s, 'R', [A[0] + 12, top], [B - 14, top], { zig: 76, peaks: 8 });
    wire(s, [[B - 14, top], [B + 14, top]]);
    resistor(s, 'X', [B + 14, top], [Cx - 12, top], { zig: 76, peaks: 8 });
    wire(s, [[Cx - 12, top], [Cx, top], C0]);
    // the galvanometer, from B down to the jockey at D
    const g = galvo(s, 'G', [B, Gy], [0, 1], 13);
    wire(s, [[B, top], g.a]);
    wire(s, [g.b, [xD, y - 15]]);
    wire(s, [[xD, y - 15], D]);
    // the jockey: a marigold wedge on the wire at D
    path(s, [[xD - 7, y - 15], [xD + 7, y - 15], [xD, y - 2], [xD - 7, y - 15]], { color: C.mari, w: 2.2 });
    s.point(xD, y, 3, '');
    // the cell and key, from beyond A round to beyond C
    wire(s, [[L, y], A]);
    wire(s, [C0, [Rr, y]]);
    wire(s, [[L, y], [L, bot], [cx[0], bot]]);
    cell(s, 'E', [cx[0], bot], [cx[1], bot]);
    wire(s, [[cx[1], bot], [kx[0], bot]]);
    const lever = key(s, 'K', [kx[0], bot], [kx[1], bot]);
    wire(s, [[kx[1], bot], [Rr, bot], [Rr, y]]);
    [A, C0].forEach((p) => s.dot(p[0], p[1], 3.6));
    s.dot(B, top, 3.6);
    s.sym(A[0] - 14, y - 10, 'A', { size: 17 });
    s.sym(Cx + 14, y - 10, 'C', { size: 17 });
    s.sym(B, top - 12, 'B', { size: 17 });
    s.sym((A[0] + 12 + B - 14) / 2, top - 14, '<i>R</i>', { size: 16 });
    s.sym((B + 14 + Cx - 12) / 2, top - 14, '<i>X</i>', { size: 16 });
    s.sym(xD, y + 20, 'D', { size: 16, color: C.amber });
    // AD = l and DC = 100 − l, then the scale in cm
    const my = scaleY - 22;
    guide(s, [xD, y + 26], [xD, my + 6]);
    measure(s, [A[0] + 1, my], [xD - 1, my], C.slate);
    measure(s, [xD + 1, my], [Cx - 1, my], C.slate);
    s.sym((A[0] + xD) / 2, my - 9, '<i>l</i>', { size: 16 });
    s.sym((xD + Cx) / 2, my - 9, '100 − <i>l</i>', { size: 15 });
    s.line(A[0], scaleY, Cx, scaleY, { color: C.grey, w: 1.2 });
    for (let k = 0; k <= 10; k++) {
      const x = cmX(10 * k);
      s.line(x, scaleY, x, scaleY - (k % 5 ? 4 : 7), { color: C.grey, w: 1.2 });
      s.sym(x, scaleY + 15, String(10 * k), { size: 11.5, color: C.slate });
    }
    s.sym((A[0] + Cx) / 2, scaleY + 32, 'cm', { size: 13, color: C.slate });
    s.sym((cx[0] + cx[1]) / 2, bot + 30, '<i>E</i>', { size: 16 });
    s.place([
      { t: 'Jockey', hi: true, p: [xD - 7, y - 15], at: [[xD - 14, 100, 'end'], [xD - 16, 96, 'end']] },
      { t: 'Key', p: lever, at: [[(kx[0] + kx[1]) / 2, 284, 'middle'], [(kx[0] + kx[1]) / 2, 288, 'middle']] },
    ]);
    return s;
  },
  check() {
    const s = fig319.draw(fig319.cases[0]), c = readCircuit(s);
    const { R, X: Xv, sigma } = EX1M;
    const lRead = ((cmX(MB.l) - MB.A[0]) / (MB.Cx - MB.A[0])) * 100;
    const run = (l: number, x: number, r = R) => solve(c.N, elements(c, { R: r, X: x, G: 30, AD: sigma * l, DC: sigma * (100 - l) }, { E: 2 }), c.n('DC', 'b'));
    const atNull = run(lRead, Xv), offNull = run(45, Xv);
    const Xof = (r: number, l: number) => (r * (100 - l)) / l;
    const ticks = samples(0, 100, 10).map(cmX);
    return [
      ['Read off the wires: R from A to B, X from B to C, the galvanometer from B to the jockey D on the wire, the cell and key from A round to C', c.same('R.a', 'AD.a', 'E.a') && c.same('R.b', 'X.a', 'G.a') && c.same('X.b', 'DC.b', 'K.b') && c.same('G.b', 'AD.b', 'DC.a') && c.same('E.b', 'K.a') && c.N === 5],
      [`The scale runs 0 at A to 100 at C in equal 10 cm steps (${fmt((MB.Cx - MB.A[0]) / 100, 2)} px a cm), and the jockey reads l = ${fmt(lRead, 6)} cm`, close(ticks[0], MB.A[0]) && close(ticks[10], MB.Cx) && ticks.every((x, i) => i === 0 || close(x - ticks[i - 1], ticks[1] - ticks[0], 1e-9)) && close(lRead, 40, 1e-9)],
      [`Example 1: R = 5 Ω, null at l = 40 cm, so X = R(100 − l)/l = ${fmt(Xof(R, lRead), 4)} Ω (the book's 7.5 Ω); X > R, as a null left of centre says`, close(Xof(R, lRead), 7.5, 1e-9) && Xof(R, lRead) > R],
      [`Solved from the wiring with that X and any uniform wire: I_g = ${fmt(Math.abs(atNull.I.G), 12)} A at the drawn D, and ${fmt(offNull.I.G * 1000, 3)} mA with the jockey at 45 cm`, close(atNull.I.G, 0, 1e-12) && Math.abs(offNull.I.G) > 1e-4],
      ['The cell’s long (+) plate faces the A end', atNull.V[c.n('AD', 'a')] > 0],
      [`Practice 1: R = 6 Ω, null at 60 cm: X = ${fmt(Xof(6, 60), 4)} Ω (the book's 4 Ω), and the bridge with that X nulls there too`, close(Xof(6, 60), 4, 1e-9) && close(run(60, 4, 6).I.G, 0, 1e-12)],
      clearCheck(s),
      labelsApart(s),
    ];
  },
};

export const DIAGRAMS_PHYSICS_12_03B: Diagram[] = [fig311, fig312, fig313, fig314, fig315, fig316, fig317, fig318, fig319];
