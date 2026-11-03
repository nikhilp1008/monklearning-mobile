import { C, LABEL_GAP, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 2 (Structure of Atom): every drawing of the
 * Master Reference book, redrawn. Pages 72–116 were checked one by one on the
 * page images (p. 72 title, p. 73 contents and the start of Topic 01, Topics
 * 01–04 on pp. 73–102, the Additional Topics on pp. 103–116). The chapter has
 * ONE drawing: the two-panel graph on p. 106, captioned "Figure 1" inside
 * Addendum B (app Additional topic B, topic index 5). Its number is the
 * addendum's own, not a chapter figure number "2.N", so it takes the
 * unnumbered id `c11-02-B-d1`, as the Chemistry brief names it.
 *
 * Judged NOT drawings (nothing to redraw): the quantum-number table (p. 97)
 * and the "Distribution" table of the JEE/NEET addendum (p. 112); every
 * typeset equation, including the under-braced "Coulomb pull = centripetal
 * need" equation (1) on p. 90, which is an equation with brace labels, not a
 * picture; the boxed answers and the section rules. The text describes
 * discharge tubes, Rutherford scattering, the EM spectrum, photoelectric
 * graphs, energy levels, standing waves and orbital shapes, but the book
 * draws none of them, so none is redrawn.
 *
 * The graph is computed from the real hydrogen wavefunctions, never placed by
 * eye: R_nl(r) ∝ ρ^l e^(−ρ/2) L_(n−l−1)^(2l+1)(ρ), ρ = 2r/(n a₀), with the
 * associated Laguerre polynomial from its recurrence, and the curve drawn is
 * 4πr²ψ² ∝ r²R_nl², each scaled to its own peak (the book's axis is
 * "arb.", every curve topping out at 1.0). Each `check` recomputes what the
 * graph and its caption state — the peak count n − l, the n − l − 1 radial
 * nodes and where they fall, 1s peaking at exactly a₀, the peak order, the
 * inner-peak heights — and measures that no tag or label touches a curve.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in physics-11-13.ts and physics-12-08.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="7 5"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/** Every line a label must keep clear of (the curves), by sketch. Axes and ticks are left out: their values sit on them. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
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
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every curve: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
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
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const X = (f: Frame, u: number) => f.ox + u * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke = {}, n = 600): P[] {
  const pts = samples(u0, u1, n).map((u) => at(f, u, fn(u)));
  path(s, pts, o);
  return pts;
}
type Tick = [number, string];
function vTicks(s: Sketch, f: Frame, ticks: Tick[]) {
  ticks.forEach(([v, txt]) => {
    s.line(f.ox - 4, Y(f, v), f.ox, Y(f, v), { color: C.grey, w: 1.2 });
    s.sym(f.ox - 7, Y(f, v) + 4.5, txt, { size: 12.5, anchor: 'end', color: C.slate });
  });
}
function hTicks(s: Sketch, f: Frame, ticks: Tick[]) {
  ticks.forEach(([u, txt]) => {
    s.line(X(f, u), f.oy, X(f, u), f.oy + 4, { color: C.grey, w: 1.2 });
    s.sym(X(f, u), f.oy + 20, txt, { size: 12.5, color: C.slate });
  });
}

/* ===================================================================== */
/* p. 106 · radial probability distributions, n = 2 and n = 3 (topic B)   */
/* ===================================================================== */

/** The associated Laguerre polynomial L_k^α(x), by its three-term recurrence. */
function laguerre(k: number, alpha: number, x: number): number {
  if (k === 0) return 1;
  let a = 1, b = 1 + alpha - x;
  for (let j = 1; j < k; j++) { const c = ((2 * j + 1 + alpha - x) * b - (j + alpha) * a) / (j + 1); a = b; b = c; }
  return b;
}
/** The hydrogen radial function R_nl(r), r in units of a₀, up to its constant: ρ^l e^(−ρ/2) L_(n−l−1)^(2l+1)(ρ), ρ = 2r/n. */
const Rnl = (n: number, l: number) => (r: number) => { const rho = (2 * r) / n; return rho ** l * Math.exp(-rho / 2) * laguerre(n - l - 1, 2 * l + 1, rho); };
/** The radial distribution r²R² (∝ 4πr²ψ² for an s orbital, and the radial distribution for any l), not yet scaled. */
const Praw = (n: number, l: number) => { const R = Rnl(n, l); return (r: number) => r * r * R(r) ** 2; };
/** The largest value of fn on [a, b] and where it is, by a fine scan, then golden-section polish. */
function peak(fn: (u: number) => number, a: number, b: number, N = 20000) {
  let best = -Infinity, u0 = a;
  for (let i = 0; i <= N; i++) { const u = a + ((b - a) * i) / N, v = fn(u); if (v > best) { best = v; u0 = u; } }
  let lo = Math.max(a, u0 - (b - a) / N), hi = Math.min(b, u0 + (b - a) / N);
  const g = (Math.sqrt(5) - 1) / 2;
  for (let i = 0; i < 80; i++) { const m1 = hi - g * (hi - lo), m2 = lo + g * (hi - lo); if (fn(m1) < fn(m2)) lo = m1; else hi = m2; }
  return { u: (lo + hi) / 2, v: fn((lo + hi) / 2) };
}
/** Scaled to its own peak, as the book's "arb." axis is: each curve tops out at 1. */
const PEAK = new Map<string, number>();
function Pn(n: number, l: number) {
  const key = `${n}${l}`, raw = Praw(n, l);
  if (!PEAK.has(key)) PEAK.set(key, peak(raw, 0, 80, 80000).v);
  const m = PEAK.get(key) as number;
  return (r: number) => raw(r) / m;
}
/** Every local maximum of fn on (a, b): where it is and how high. */
function maxima(fn: (u: number) => number, a: number, b: number, N = 40000) {
  const out: { u: number; v: number }[] = [];
  const us = samples(a, b, N), vs = us.map(fn);
  for (let i = 1; i < N; i++) if (vs[i] > vs[i - 1] && vs[i] >= vs[i + 1] && vs[i] > 1e-9) out.push(peak(fn, us[i - 1], us[i + 1], 40));
  return out;
}
/** Every zero of R_nl on (a, b) (the radial nodes: R changes sign there), by bisection. */
function nodes(n: number, l: number, a = 1e-6, b = 80, N = 40000) {
  const R = Rnl(n, l), us = samples(a, b, N), out: number[] = [];
  for (let i = 0; i < N; i++) {
    if (R(us[i]) * R(us[i + 1]) < 0) {
      let lo = us[i], hi = us[i + 1];
      for (let k = 0; k < 80; k++) { const m = (lo + hi) / 2; if (R(lo) * R(m) <= 0) hi = m; else lo = m; }
      out.push((lo + hi) / 2);
    }
  }
  return out;
}
const LET = ['s', 'p', 'd', 'f'];
const lbl = (n: number, l: number) => `${n}${LET[l]}`;

type CaseB = { chip: string; cap: string; shell: 2 | 3 };
const CAPB = 'Radial probability distribution 4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> versus distance from the nucleus for hydrogen orbitals.';
const CAPB_END = 'Peak count always equals <i>n</i> − <i>l</i>.';
/** The two panels: r from 0 to 12 a₀ (n = 2) and 0 to 33 a₀ (n = 3), as the book's axes run; 4πr²ψ² from 0 to 1.2. */
const FB: Record<2 | 3, Frame> = {
  2: { ox: 46, oy: 286, sx: 23.6, sy: 170 },
  3: { ox: 46, oy: 286, sx: 8.55, sy: 170 },
};
const RMAX: Record<2 | 3, number> = { 2: 12.2, 3: 32.5 };
/** The 1s curve is drawn out to 6 a₀, where it has died away. */
const R1S = 6;
/**
 * The 3s orbital's two inner peaks are marked where they are: one tag, "3s inner peaks", with a line
 * and dot to each peak (a dotted ring round them was crossed by the 3p curve, which peaks between
 * them). The tag stands over the top-left, clear of every curve; one line drops straight to the
 * second peak, the other slants to the first, clear of the y-axis and of the 3p curve below it.
 */
const INNER_TAG: [number, number] = [60, 86];
/** Where, along the tag's bottom edge, the line to the first inner peak leaves it. */
const INNER_FROM = 12;
/** The two 3s inner peaks, on the drawing. */
const innerPeaks = (f: Frame): [P, P] => { const [m0, m1] = maxima(Pn(3, 0), 1e-6, 60); return [at(f, m0.u, m0.v), at(f, m1.u, m1.v)]; };
/**
 * The 2s node's tag. Above the axis every straight line out of the node dot crosses a curve: the 2s
 * curve leaves the node along the axis, and the dashed 1s tail runs through the low values out to
 * 5 a₀, so a tag between 3.6 and 8 a₀ would have its line cross that tail. So the tag stands under
 * the axis, below-left of the node, and its short line drops from the dot between the "a₀" and "2.5"
 * labels, crossing nothing. "2s node" is short enough to stand there ("2s radial node" is not).
 */
const NODE_NAME = '2s node';
const NODE_TAG: [number, number] = [22, 314];
/** Point-to-segment distance. */
const segDist = (p: P, a: P, b: P) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1, k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)); return Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy); };
/** The closest a segment comes to a drawn curve, leaving out the stretch within `skip` px of the segment's own end at `a` (where it names a point on that curve). */
const segToCurve = (a: P, b: P, pts: P[], skip = 0) => Math.min(...pts.filter((q) => len(q, a) > skip).map((q) => segDist(q, a, b)));

const figB: Diagram = {
  id: 'c11-02-B-d1',
  topic: 5,
  name: 'Radial probability curves',
  cases: [
    { chip: 'n = 2 shell', shell: 2, cap: `${CAPB} The <i>n</i> = 2 shell — 2s has two peaks separated by a radial node while 2p has one peak; the 1s curve (single peak at exactly <i>a</i><sub>0</sub>) is shown dashed for reference. ${CAPB_END}` },
    { chip: 'n = 3 shell', shell: 3, cap: `${CAPB} The <i>n</i> = 3 shell — 3s, 3p, 3d carry three, two and one peaks respectively. ${CAPB_END}` },
  ] as CaseB[],
  draw(c: CaseB) {
    const s = new Sketch(W, 340);
    const f = FB[c.shell], top = 1.2;
    // axes
    s.vec(f.ox, f.oy, f.ox, Y(f, top) - 14, { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, W - 10, f.oy, { color: C.grey, w: 1.3 });
    vTicks(s, f, [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2].map((v): Tick => [v, v.toFixed(1)]));
    s.sym(f.ox + 8, Y(f, top) - 12, '4π<i>r</i><sup>2</sup><i>ψ</i><sup>2</sup> (arb.)', { size: 14, anchor: 'start' });
    s.sym(W - 8, f.oy + 44, '<i>r</i>/<i>a</i><sub>0</sub>', { size: 15, anchor: 'end' });
    if (c.shell === 2) {
      hTicks(s, f, [0, 2.5, 5, 7.5, 10].map((u): Tick => [u, u.toFixed(1)]));
      s.sym(W / 2 + 10, 34, '<i>n</i> = 2 (1s dashed for scale)', { size: 15 });
      const P1 = Pn(1, 0), P2s = Pn(2, 0), P2p = Pn(2, 1);
      curve(s, f, P1, 0, R1S, { color: C.slate, w: 2, dash: 'dash' });
      curve(s, f, P2p, 0, RMAX[2], { w: 2.2 });
      curve(s, f, P2s, 0, RMAX[2], { color: C.mari, w: 2.6 });
      // a₀ above the 1s peak (r = a₀)
      // a₀ under the axis, where a dotted guide drops from the 1s peak (r = a₀)
      path(s, [at(f, 1, 1), [X(f, 1), f.oy]], { color: C.slate, w: 1, dash: 'dot', free: true });
      s.sym(X(f, 1), f.oy + 20, '<i>a</i><sub>0</sub>', { size: 14, color: C.slate });
      // the 2s node: a dot on the axis where the curve touches it
      const node = nodes(2, 0)[0];
      s.dot(X(f, node), f.oy, 3.2, C.amber);
      s.place([
        { t: NODE_NAME, hi: true, p: [X(f, node), f.oy], own: [X(f, node), f.oy], at: [[NODE_TAG[0], NODE_TAG[1], 'start'], [NODE_TAG[0] + 2, NODE_TAG[1], 'start'], [NODE_TAG[0] - 2, NODE_TAG[1], 'start']] },
        { t: '2s', hi: true, p: at(f, 7.6, P2s(7.6)), at: [[X(f, 8.8), 150, 'start'], [X(f, 9), 160, 'start'], [X(f, 9.2), 140, 'start']] },
        { t: '2p', p: at(f, 3.3, P2p(3.3)), at: [[X(f, 3.0), 86, 'start'], [X(f, 3.2), 86, 'start'], [X(f, 2.8), 86, 'start']] },
        { t: '1s', p: at(f, 1.35, P1(1.35)), at: [[X(f, 1.4), 86, 'start'], [X(f, 1.3), 86, 'start'], [X(f, 1.5), 86, 'start']] },
      ]);
      return s;
    }
    hTicks(s, f, [0, 10, 20, 30].map((u): Tick => [u, String(u)]));
    s.sym(W / 2 + 10, 34, '<i>n</i> = 3: peaks = <i>n</i> − <i>l</i> (3, 2, 1)', { size: 15 });
    const P3s = Pn(3, 0), P3p = Pn(3, 1), P3d = Pn(3, 2);
    curve(s, f, P3d, 0, RMAX[3], { color: C.slate, w: 2, dash: 'dash' });
    curve(s, f, P3p, 0, RMAX[3], { w: 2.2 });
    curve(s, f, P3s, 0, RMAX[3], { color: C.mari, w: 2.6 });
    // the two 3s inner peaks: a dot on each, both joined to one tag (the first by a line drawn here, the second by the tag's own)
    const [pk0, pk1] = innerPeaks(f), from0: P = [INNER_TAG[0] + INNER_FROM, INNER_TAG[1] + 22];
    s.add(`<line x1="${r1(pk0[0])}" y1="${r1(pk0[1])}" x2="${r1(from0[0])}" y2="${r1(from0[1])}" stroke="${C.grey}" stroke-width="1.2"/>`);
    s.dot(pk0[0], pk0[1], 2.6);
    s.place([
      { t: '3s inner peaks', p: pk1, at: [[INNER_TAG[0], INNER_TAG[1], 'start']] },
      { t: '3s', hi: true, p: at(f, 16.5, P3s(16.5)), at: [[X(f, 23.5), 178, 'start'], [X(f, 24), 178, 'start'], [X(f, 23), 178, 'start']] },
      { t: '3p', p: at(f, 15.2, P3p(15.2)), at: [[X(f, 23.5), 130, 'start'], [X(f, 24), 130, 'start'], [X(f, 23), 130, 'start']] },
      { t: '3d', p: at(f, 13.6, P3d(13.6)), at: [[X(f, 23.5), 218, 'start'], [X(f, 24), 218, 'start'], [X(f, 23), 218, 'start']] },
    ]);
    return s;
  },
  check(c: CaseB) {
    const f = FB[c.shell], s = figB.draw(c);
    const out: Check[] = [];
    // the radial functions are the hydrogen ones: compare with the closed forms the textbooks print
    const closed: Record<string, (r: number) => number> = {
      '10': (r) => Math.exp(-r), '20': (r) => (2 - r) * Math.exp(-r / 2), '21': (r) => r * Math.exp(-r / 2),
      '30': (r) => (27 - 18 * r + 2 * r * r) * Math.exp(-r / 3), '31': (r) => r * (6 - r) * Math.exp(-r / 3), '32': (r) => r * r * Math.exp(-r / 3),
    };
    const orbs: [number, number][] = c.shell === 2 ? [[1, 0], [2, 0], [2, 1]] : [[3, 0], [3, 1], [3, 2]];
    const same = orbs.every(([n, l]) => { const R = Rnl(n, l), g = closed[`${n}${l}`], rs = [0.3, 1.1, 2.7, 4.4, 8.2, 13.9]; const k = R(rs[0]) / g(rs[0]); return rs.every((r) => close(R(r) / g(r), k, 1e-9 * Math.abs(k))); });
    out.push([`R_nl from the Laguerre recurrence matches the hydrogen closed forms (${orbs.map(([n, l]) => lbl(n, l)).join(', ')}) at every r tried`, same]);
    for (const [n, l] of orbs) {
      const fn = Pn(n, l), mx = maxima(fn, 1e-6, 60), nd = nodes(n, l);
      const top = Math.max(...mx.map((m) => m.v));
      out.push([`${lbl(n, l)}: ${mx.length} peak(s) at r = ${mx.map((m) => fmt(m.u, 2)).join(', ')} a₀ = n − l = ${n - l}; ${nd.length} radial node(s) = n − l − 1 = ${n - l - 1}${nd.length ? ` at r = ${nd.map((r) => fmt(r, 3)).join(', ')} a₀` : ''}`, mx.length === n - l && nd.length === n - l - 1]);
      // each node lies between two peaks, and the curve touches zero there
      const between = nd.every((r, i) => mx[i].u < r && r < mx[i + 1].u && Math.abs(fn(r)) < 1e-12);
      out.push([`${lbl(n, l)}: starts at zero (r = 0), tops out at 1 (scaled to its own peak), and touches the axis at each node, between its peaks`, close(fn(0), 0, 1e-15) && close(top, 1, 1e-9) && between]);
    }
    if (c.shell === 2) {
      const pk1 = peak(Pn(1, 0), 0, 10), pk2p = peak(Pn(2, 1), 0, 20), m2s = maxima(Pn(2, 0), 1e-6, 60), nd = nodes(2, 0)[0];
      const a0 = s.labels.find((l) => l.text === 'a0'), a0u = a0 ? uOf(f, (a0.rect[0] + a0.rect[2]) / 2) : NaN;
      out.push([`1s peaks at r = ${fmt(pk1.u, 6)} a₀: exactly the Bohr radius, where a₀ is written under the axis (r = ${fmt(a0u, 3)} a₀ on the drawing)`, close(pk1.u, 1, 1e-6) && close(a0u, 1, 1e-9)]);
      out.push([`The 2s node is at r = ${fmt(nd, 6)} a₀ = 2a₀ (where 2 − r = 0), and the dot naming it sits there on the axis`, close(nd, 2, 1e-9) && s.points.some((p) => close(uOf(f, p.x), nd, 1e-6) && close(vOf(f, p.y), 0, 1e-9))]);
      out.push([`2s peaks at r = 3 ∓ √5 = ${fmt(3 - Math.sqrt(5), 3)} and ${fmt(3 + Math.sqrt(5), 3)} a₀ (drawn ${m2s.map((m) => fmt(m.u, 3)).join(', ')}); the inner one is ${fmt(m2s[0].v, 3)} of the outer (the book's ≈ 0.27)`, close(m2s[0].u, 3 - Math.sqrt(5), 1e-6) && close(m2s[1].u, 3 + Math.sqrt(5), 1e-6) && Math.abs(m2s[0].v - 0.27) < 0.01]);
      out.push([`2p peaks at r = ${fmt(pk2p.u, 4)} a₀ = n²a₀ = 4a₀ (l = n − 1), inside the 2s outer peak`, close(pk2p.u, 4, 1e-6) && pk2p.u < m2s[1].u]);
      const nt = s.tags.find((t) => t.name === NODE_NAME), nodeP: P = [X(f, nd), f.oy];
      const ax0 = s.labels.find((l) => l.text === 'a0'), t25 = s.labels.find((l) => l.text === '2.5');
      const gapTo = (r: Rect | undefined) => (r && nt?.to ? Math.min(...samples(0, 1, 400).map((t) => rectDist(r, [nodeP[0] + (nt.to![0] - nodeP[0]) * t, nodeP[1] + (nt.to![1] - nodeP[1]) * t]))) : NaN);
      out.push([`The “${NODE_NAME}” tag stands just under the axis, below-left of the node; its line (${fmt(nt?.from && nt.to ? len(nt.from, nt.to) : NaN, 0)} px) leaves the dot downward, never above the axis, so it crosses no curve, and passes between “a₀” (${fmt(gapTo(ax0?.rect), 1)} px) and “2.5” (${fmt(gapTo(t25?.rect), 1)} px)`, !!nt?.from && !!nt.to && close(nt.from[0], nodeP[0], 1e-9) && close(nt.from[1], f.oy, 1e-9) && nt.to[1] > f.oy && nt.rect[1] > f.oy && len(nt.from, nt.to) < 40 && gapTo(ax0?.rect) >= LABEL_GAP && gapTo(t25?.rect) >= LABEL_GAP]);
      out.push([`The axis runs 0 to ${RMAX[2]} a₀ with ticks every 2.5 a₀, as the book's; the 1s dashed curve is drawn to ${R1S} a₀, where it is ${fmt(Pn(1, 0)(R1S), 4)} of its peak`, Pn(1, 0)(R1S) < 0.01]);
    } else {
      const outer = (n: number, l: number) => { const m = maxima(Pn(n, l), 1e-6, 60); return m[m.length - 1]; };
      const o3s = outer(3, 0), o3p = outer(3, 1), o3d = outer(3, 2);
      out.push([`Main peaks move out as l falls: 3d at ${fmt(o3d.u, 3)} a₀ (= n²a₀ = 9a₀), 3p at ${fmt(o3p.u, 3)}, 3s at ${fmt(o3s.u, 3)} a₀`, close(o3d.u, 9, 1e-6) && o3d.u < o3p.u && o3p.u < o3s.u]);
      const nd3s = nodes(3, 0), nd3p = nodes(3, 1);
      out.push([`3s nodes at (9 ∓ 3√3)/2 = ${fmt((9 - 3 * Math.sqrt(3)) / 2, 3)}, ${fmt((9 + 3 * Math.sqrt(3)) / 2, 3)} a₀ (roots of 27 − 18r + 2r²); 3p node at 6a₀`, close(nd3s[0], (9 - 3 * Math.sqrt(3)) / 2, 1e-9) && close(nd3s[1], (9 + 3 * Math.sqrt(3)) / 2, 1e-9) && close(nd3p[0], 6, 1e-9)]);
      const m3s = maxima(Pn(3, 0), 1e-6, 60), m3p = maxima(Pn(3, 1), 1e-6, 60);
      out.push([`Inner peaks, as the book draws them: 3s ${fmt(m3s[0].v, 2)} at ${fmt(m3s[0].u, 2)} a₀ and ${fmt(m3s[1].v, 2)} at ${fmt(m3s[1].u, 2)} a₀; 3p ${fmt(m3p[0].v, 2)} at ${fmt(m3p[0].u, 2)} a₀`, Math.abs(m3s[0].v - 0.14) < 0.02 && Math.abs(m3s[1].v - 0.38) < 0.02 && Math.abs(m3p[0].v - 0.39) < 0.02]);
      // the two marks: one on each 3s inner peak, both lines from the one tag, each clean
      const [pk0, pk1] = innerPeaks(f), lead = s.tags.find((t) => t.name === '3s inner peaks');
      const from0: P = [INNER_TAG[0] + INNER_FROM, INNER_TAG[1] + 22];
      const dotOn = (q: P) => s.points.some((p) => close(p.x, q[0], 1e-9) && close(p.y, q[1], 1e-9));
      out.push([`“3s inner peaks” names both inner 3s peaks (${fmt(m3s[0].u, 2)} and ${fmt(m3s[1].u, 2)} a₀) with a dot on each: its own line ends on the second, a second line from its lower edge on the first`, !!lead?.from && close(lead.from[0], pk1[0], 1e-9) && close(lead.from[1], pk1[1], 1e-9) && dotOn(pk0) && !!lead && close(from0[1], lead.rect[3], 1e-9) && from0[0] > lead.rect[0] && from0[0] < lead.rect[2]]);
      const lines = LINES.get(s) ?? [], [c3d, c3p, c3s] = lines.slice(0, 3);
      const clear0 = Math.min(segToCurve(pk0, from0, c3p), segToCurve(pk0, from0, c3d), segToCurve(pk0, from0, c3s, 4));
      const clear1 = Math.min(segToCurve(pk1, lead!.to!, c3p), segToCurve(pk1, lead!.to!, c3d), segToCurve(pk1, lead!.to!, c3s, 4));
      out.push([`Neither line crosses a curve (closest ${fmt(clear0, 1)} and ${fmt(clear1, 1)} px, the 3s curve only at its own peak), nor runs along the y-axis (the slanted line keeps ${fmt(Math.min(pk0[0], from0[0]) - f.ox, 1)}+ px off it and leaves it at ${fmt((from0[0] - pk0[0]) / (pk0[1] - from0[1]), 2)} px per px), nor do the two lines meet`, clear0 >= 2 && clear1 >= 2 && Math.min(pk0[0], from0[0]) - f.ox >= 6 && from0[0] - pk0[0] >= 6 && segDist(pk1, pk0, from0) > 10 && from0[0] < lead!.to![0]]);
      const m3pIn = m3p[0], pkPx = at(f, m3pIn.u, m3pIn.v);
      out.push([`The 3p inner peak (${fmt(m3pIn.u, 2)} a₀, ${fmt(m3pIn.v, 2)}) carries no mark: it is ${fmt(Math.min(len(pkPx, pk0), len(pkPx, pk1)), 1)} px from the nearer 3s mark, and neither line passes within ${fmt(Math.min(segDist(pkPx, pk0, from0), segDist(pkPx, pk1, lead!.to!)), 1)} px of it`, Math.min(len(pkPx, pk0), len(pkPx, pk1)) > 8 && Math.min(segDist(pkPx, pk0, from0), segDist(pkPx, pk1, lead!.to!)) > 6]);
      out.push(['The second line runs through no tag or label', !s.labels.some((l) => samples(0, 1, 200).some((t) => rectDist(l.rect, [pk0[0] + (from0[0] - pk0[0]) * t, pk0[1] + (from0[1] - pk0[1]) * t]) < LABEL_GAP)) && !s.tags.some((tg) => tg.name !== '3s inner peaks' && samples(0, 1, 200).some((t) => rectDist(tg.rect, [pk0[0] + (from0[0] - pk0[0]) * t, pk0[1] + (from0[1] - pk0[1]) * t]) < 2))]);
      out.push([`All three have died away by the axis end (${RMAX[3]} a₀): ${orbs.map(([n, l]) => fmt(Pn(n, l)(RMAX[3]), 3)).join(', ')} of their peaks`, orbs.every(([n, l]) => Pn(n, l)(RMAX[3]) < 0.01)]);
    }
    // the curves are drawn as computed: read one back from the drawing
    const fn = Pn(c.shell, 0), rs = samples(0, 10, 50);
    out.push([`The ${c.shell}s curve read back from the drawing equals r²R² scaled, at every r tried`, rs.every((r) => close(vOf(f, Y(f, fn(r))), fn(r), 1e-9))]);
    // each curve's tag line ends on that curve
    const tagOn = (name: string, n: number, l: number) => { const t = s.tags.find((g) => g.name === name); return !!t && !!t.from && close(vOf(f, t.from[1]), Pn(n, l)(uOf(f, t.from[0])), 1e-9); };
    out.push(['Each curve’s tag line ends on its own curve', orbs.every(([n, l]) => tagOn(lbl(n, l), n, l))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_02: Diagram[] = [figB];
