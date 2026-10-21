import { C, LABEL_GAP, Rect, Sketch, r1, mathW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 14 (Waves): OUR OWN DIAGRAMS, NOT THE BOOK'S.
 *
 * The Master Reference book prints no drawings in this chapter: pp. 944–996
 * were checked one by one, Additional Topics A–D included, and there is no
 * "Figure 14.N" and no unnumbered graph, sketch or diagram (only prose,
 * typeset equations, boxes and tables, which the text carries as tables).
 *
 * The three drawings below are OUR ADDITIONS, recommended by the expert
 * reviewer for JEE/NEET students and approved by the founder on 2026-10-20.
 * Because the book has no figure for them, their captions are ours: short,
 * in the book's voice, and using only the chapter's own symbols, names and
 * formulas.
 *
 *   p11-14-01-d1  Topic 01, the string element in the derivation of v = √(T/μ)
 *                 (pp. 948–949): an arc Δℓ = 2Rθ, the tension T at each end,
 *                 the net inward force 2T sin θ ≈ T Δℓ/R.
 *   p11-14-03-d1  Topic 03, the first three modes of a string fixed at both
 *                 ends, an open pipe and a closed pipe (pp. 965–966), nodes and
 *                 antinodes placed from the chapter's own formulas.
 *   p11-14-C-d1   Additional topic C, worked example C.2 (p. 991): the
 *                 triangular pulse A(1 − |x|/L) at t = 0, L/(2v) and L/v,
 *                 drawn from y = ½φ(x − vt) + ½φ(x + vt).
 *
 * Every drawing is computed, never placed by eye, and each `check` reads the
 * drawn geometry back and recomputes what the drawing and its caption state.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in physics-11-13.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows), by sketch:
 * `clearance` measures each tag and label against them. Axes and the dotted
 * guides that run from a tick are left out (`free`): their values sit on them.
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** An arrow (a force, a direction) that labels keep clear of. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: boolean } = {}) {
  s.vec(a[0], a[1], b[0], b[1], o);
  keep(s, [a, b]);
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

/* ===================================================================== */
/* p11-14-01-d1 · forces on a small element of string (topic 01)          */
/* ===================================================================== */
/**
 * Top: the pulse in the frame moving with it (frozen; the string slides back
 * at v), y = −H e^(−(x − xc)²/w²) above a baseline, with the element ringed
 * at its crest. Below: that element magnified, an arc of radius R about its
 * centre O subtending 2θ (drawn at θ = 21° so the angle can be seen; the
 * derivation's θ is small), the tension T along the tangent at each end, its
 * parts T cos θ (cancelling) and T sin θ (inward), and the net inward force
 * 2T sin θ toward O. Tensions are drawn `LT` px long.
 */
const PU = { y0: 98, H: 56, w: 44, xc: 170, ring: 12, vFrom: 128, vTo: 48 };
/** The magnified element's own velocity in the pulse's frame: an arc of radius R + 18 over ±10°, its head at the left end. */
const VA = { half: 10 * D2R, dr: 18 };
const pulseY = (x: number) => PU.y0 - PU.H * Math.exp(-(((x - PU.xc) / PU.w) ** 2));
const EL = { O: [170, 420] as P, R: 210, th: 21 * D2R, LT: 78 };
const elGeo = () => {
  const { O, R, th, LT } = EL;
  /** A point on the arc at angle a from the upward vertical through O (positive to the right). */
  const on = (a: number, r = R): P => [O[0] + r * Math.sin(a), O[1] - r * Math.cos(a)];
  const top = on(0), Rt = on(th), Lt = on(-th);
  /** Tension at each end: along the tangent, pulling away from the element (outward and down). */
  const uR: P = [Math.cos(th), Math.sin(th)], uL: P = [-Math.cos(th), Math.sin(th)];
  const tipR: P = [Rt[0] + LT * uR[0], Rt[1] + LT * uR[1]], tipL: P = [Lt[0] + LT * uL[0], Lt[1] + LT * uL[1]];
  const net = 2 * LT * Math.sin(th);
  return { on, top, Rt, Lt, uR, uL, tipR, tipL, net };
};
/** The chapter's own numbers: Example 1 (μ = 0.04 kg m⁻¹, T = 36 N) and Example 3 (μ = 0.5 kg m⁻¹, T = 2 N), p. 949–950. */
const STRINGS = [{ mu: 0.04, T: 36, v: 30 }, { mu: 0.5, T: 2, v: 2 }];
const CAP1 =
  'A tiny element Δ<i>ℓ</i> at the crest of the pulse, seen in the frame moving with the pulse: an arc of radius <i>R</i> subtending 2<i>θ</i> at its centre. The tension <i>T</i> at each end has horizontal components that cancel and inward components <i>T</i> sin <i>θ</i> that add, 2<i>T</i> sin <i>θ</i> ≈ <i>T</i> Δ<i>ℓ</i>/<i>R</i>; this supplies the centripetal force <i>μ</i> Δ<i>ℓ</i> <i>v</i><sup>2</sup>/<i>R</i>, so <i>v</i> = √(<i>T</i>/<i>μ</i>).';
const fig1: Diagram = {
  id: 'p11-14-01-d1',
  topic: 0,
  name: 'Forces on a small element of string',
  cases: [{ chip: 'String element', cap: CAP1 }],
  draw() {
    const s = new Sketch(W, 440);
    // --- the pulse, frozen in its own frame ---
    path(s, samples(14, W - 14, 240).map((x): P => [x, pulseY(x)]), { w: 1.9 });
    const crest: P = [PU.xc, pulseY(PU.xc)];
    s.point(crest[0], crest[1], PU.ring, `<circle cx="${r1(crest[0])}" cy="${r1(crest[1])}" r="${PU.ring}" fill="none" stroke="${C.slate}" stroke-width="1.3" stroke-dasharray="3 3"/>`);
    const vy = PU.y0 + 18;
    arrow(s, [PU.vFrom, vy], [PU.vTo, vy], { color: C.slate, w: 1.6 });
    s.sym(40, vy + 5, '<i>v</i>', { size: 15, anchor: 'end', color: C.slate });
    // --- the element, magnified ---
    const { O, R, th } = EL, g = elGeo();
    path(s, [O, g.Lt], { color: C.grey, w: 1.2, dash: 'dash' });
    path(s, [O, g.Rt], { color: C.grey, w: 1.2, dash: 'dash' });
    path(s, samples(-th, th, 40).map((a) => g.on(a, 30)), { color: C.slate, w: 1.2 });
    s.sym(O[0], O[1] - 40, '2<i>θ</i>', { size: 14 });
    const rm = g.on(-th, R * 0.48);
    s.sym(rm[0] - 12, rm[1] + 5, '<i>R</i>', { size: 15 });
    path(s, samples(-th, th, 60).map((a) => g.on(a)), { w: 2.6 });
    // its velocity in this frame: along the arc, backward (left)
    const va = VA.half, vr = R + VA.dr;
    path(s, samples(va, -va + 2.2 * D2R, 30).map((a) => g.on(a, vr)), { color: C.slate, w: 1.4 });
    const vEnd = g.on(-va, vr), vBack = g.on(-va + 3 * D2R, vr);
    s.vec(vBack[0], vBack[1], vEnd[0], vEnd[1], { color: C.slate, w: 1.4 });
    s.sym(O[0], O[1] - vr - 12, '<i>v</i>', { size: 15, color: C.slate });
    const dl = g.on(-16 * D2R, R + 16);
    s.sym(dl[0] - 4, dl[1] + 5, 'Δ<i>ℓ</i>', { size: 15, anchor: 'end' });
    // tension and its parts at each end
    for (const side of [1, -1]) {
      const end = side > 0 ? g.Rt : g.Lt, tip = side > 0 ? g.tipR : g.tipL;
      const hx: P = [tip[0], end[1]], vy2: P = [end[0], tip[1]];
      path(s, [end, hx], { color: C.grey, w: 1.3, dash: 'dash' });
      path(s, [end, vy2], { color: C.grey, w: 1.3, dash: 'dash' });
      arrow(s, end, tip, { w: 1.9 });
      s.sym(side > 0 ? tip[0] + 10 : tip[0] - 10, tip[1] + 10, '<i>T</i>', { size: 15 });
      s.sym((end[0] + hx[0]) / 2 + side * 4, end[1] - 9, '<i>T</i> cos <i>θ</i>', { size: 13, color: C.slate });
      s.sym(end[0] + side * 7, vy2[1] + 20, '<i>T</i> sin <i>θ</i>', { size: 13, color: C.slate, anchor: side > 0 ? 'start' : 'end' });
      s.dot(end[0], end[1], 3);
    }
    // the net inward force, from the element toward O
    arrow(s, g.top, [g.top[0], g.top[1] + g.net], { color: C.mari, w: 2.6 });
    s.sym(g.top[0] + 8, g.top[1] + 26, '2<i>T</i> sin <i>θ</i>', { size: 14, anchor: 'start', color: C.amber });
    s.dot(O[0], O[1], 3);
    const res = resultBlock(s, ['<i>T</i> = <i>μv</i><sup>2</sup>', '<i>v</i> = √(<i>T</i>/<i>μ</i>)'], { size: 15 });
    s.place(
      [
        { t: 'Net inward force', hi: true, p: [g.top[0] + 2, g.top[1] + g.net * 0.62], at: [[206, 340, 'start'], [207, 344, 'start'], [208, 348, 'start']] },
        { t: 'Element at the crest', ring: [crest[0], crest[1], PU.ring], own: crest, at: [[W - 6, 6, 'end'], [W - 6, 4, 'end']] },
        { t: 'String slides back', p: [96, vy], at: [[10, vy + 12, 'start'], [10, vy + 14, 'start']] },
        { t: 'Element, magnified', p: g.on(13 * D2R), at: [[W - 8, 166, 'end'], [W - 8, 162, 'end'], [W - 6, 158, 'end']] },
        { t: 'Centre', p: O, own: O, at: [[40, 398, 'start'], [30, 404, 'start'], [20, 396, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check() {
    const { O, R, th, LT } = EL, g = elGeo();
    const arc = samples(-th, th, 2000).map((a) => g.on(a));
    const arcLen = arc.slice(1).reduce((a, p, i) => a + len(arc[i], p), 0);
    const toO = (p: P): P => { const d = len(p, O); return [(O[0] - p[0]) / d, (O[1] - p[1]) / d]; };
    const dot = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
    const fR: P = [g.tipR[0] - g.Rt[0], g.tipR[1] - g.Rt[1]], fL: P = [g.tipL[0] - g.Lt[0], g.tipL[1] - g.Lt[1]];
    const sum: P = [fR[0] + fL[0], fR[1] + fL[1]];
    // the crest of the drawn pulse: highest point, curving down on both sides (its centre of curvature lies below)
    const xs = samples(14, W - 14, 2000), ys = xs.map(pulseY);
    const iTop = ys.indexOf(Math.min(...ys));
    const curv = (pulseY(PU.xc + 1) + pulseY(PU.xc - 1) - 2 * pulseY(PU.xc)) / 1;
    const small = [1, 2, 5].map((d) => d * D2R).map((a) => (2 * Math.sin(a)) / (2 * a));
    // force balance with the chapter's numbers, for an element Δℓ = 2 mm on an arc of R = 5 cm
    const dl = 0.002, Rm = 0.05;
    // the tension's pull T Δℓ/R must equal the centripetal need μ Δℓ v²/R: solve that balance for v
    const bal = STRINGS.map(({ mu, T }) => { const F = (T * dl) / Rm, v = Math.sqrt((F * Rm) / (mu * dl)); return { F, v, Fc: (mu * dl * v * v) / Rm }; });
    return [
      [`The element is an arc of radius R = ${R} px subtending 2θ = ${fmt((2 * th) / D2R, 0)}° at its centre: its drawn length is ${fmt(arcLen, 2)} px = R(2θ) = ${fmt(2 * R * th, 2)} px (Δℓ = 2Rθ)`, close(arcLen, 2 * R * th, 0.01) && close(len(g.Lt, O), R, 1e-9) && close(len(g.Rt, O), R, 1e-9)],
      ['Each tension is along the string\'s tangent at its end (at right angles to the radius) and pulls away from the element', close(dot(fR, toO(g.Rt)), 0, 1e-9) && close(dot(fL, toO(g.Lt)), 0, 1e-9) && fR[0] > 0 && fL[0] < 0],
      [`Both tensions are the same T (${LT} px): the horizontal parts T cos θ = ${fmt(LT * Math.cos(th), 2)} px point opposite ways and cancel`, close(len(g.Rt, g.tipR), LT, 1e-9) && close(len(g.Lt, g.tipL), LT, 1e-9) && close(sum[0], 0, 1e-9) && close(fR[0], LT * Math.cos(th), 1e-9)],
      [`The inward parts T sin θ = ${fmt(LT * Math.sin(th), 2)} px each point toward O and add to 2T sin θ = ${fmt(sum[1], 2)} px, the marigold arrow's length (${fmt(g.net, 2)} px)`, close(sum[1], 2 * LT * Math.sin(th), 1e-9) && close(g.net, sum[1], 1e-9) && dot([0, 1], toO(g.top)) > 0.999999],
      ['The net-force arrow starts at the middle of the element and points straight at the centre O', close(g.top[0], O[0], 1e-9) && close(len(g.top, O), R, 1e-9)],
      [`For a tiny element sin θ ≈ θ, so 2T sin θ ≈ 2Tθ = T Δℓ/R: the ratio 2T sin θ/(T Δℓ/R) is ${small.map((r) => fmt(r, 5)).join(', ')} at θ = 1°, 2°, 5° (the drawing opens θ to ${fmt(th / D2R, 0)}° only so the angle can be seen)`, small.every((r) => 1 - r < 0.0013)],
      [`Force balance in the pulse's frame, T Δℓ/R = μ Δℓ v²/R, solved for v with Δℓ = 2 mm on R = 5 cm: Example 1 (μ = 0.04 kg m⁻¹, T = 36 N, pull ${fmt(bal[0].F, 3)} N) gives v = ${fmt(bal[0].v, 3)} m s⁻¹ and Example 3 (μ = 0.5 kg m⁻¹, T = 2 N, pull ${fmt(bal[1].F, 3)} N) gives ${fmt(bal[1].v, 3)} m s⁻¹, the book's 30 and 2 m s⁻¹ = √(T/μ), whatever Δℓ and R`, STRINGS.every((st, i) => close(bal[i].v, st.v, 1e-9) && close(bal[i].v, Math.sqrt(st.T / st.mu), 1e-9) && close(bal[i].F, bal[i].Fc, 1e-12))],
      ['The ringed element is the crest of the drawn pulse: its highest point, curving down on both sides, so the centre of its arc lies below it, as drawn', close(xs[iTop], PU.xc, 0.2) && curv > 0 && O[1] > g.top[1]],
      ['The string slides backward (left) in the top panel, and the magnified element moves the same way: its velocity arrow, along the arc, has its head at the left end', PU.vTo < PU.vFrom && g.on(-VA.half, R + VA.dr)[0] < g.on(VA.half, R + VA.dr)[0] && close(len(g.on(-VA.half, R + VA.dr), O), R + VA.dr, 1e-9)],
      clearCheck(fig1.draw(fig1.cases[0])),
    ];
  },
};

/* ===================================================================== */
/* p11-14-03-d1 · standing-wave modes in strings and pipes (topic 03)     */
/* ===================================================================== */
/**
 * Three rows, the first three allowed modes, each across the same length L
 * (`L` px from X0). The displacement amplitude along the length is
 *   string (nodes at both ends):              sin(nπx/L),         λ = 2L/n
 *   open pipe (antinodes at both ends):       cos(nπx/L),         λ = 2L/n
 *   closed pipe (closed end at x = 0):        sin((2n − 1)πx/2L), λ = 4L/(2n − 1)
 * drawn as its two extremes ±a·g(x). Nodes (N) and antinodes (A) are placed
 * from the node/antinode formulas, not from the curve, and checked against it.
 */
type Kind2 = 'string' | 'open' | 'closed';
type Case2 = { chip: string; cap: string; kind: Kind2 };
const SW = { X0: 44, L: 252, rows: [34, 140, 246], amp: 15, ampS: 20, half: 22, h: 392 };
const lam = (kind: Kind2, n: number) => (kind === 'closed' ? (4 * SW.L) / (2 * n - 1) : (2 * SW.L) / n);
const amp2 = (kind: Kind2, n: number) => (x: number) => {
  const u = x - SW.X0;
  if (kind === 'string') return Math.sin((n * Math.PI * u) / SW.L);
  if (kind === 'open') return Math.cos((n * Math.PI * u) / SW.L);
  return Math.sin(((2 * n - 1) * Math.PI * u) / (2 * SW.L));
};
/** Node and antinode positions (px) from the formulas: adjacent ones λ/2 apart, starting from the left end's own kind. */
function marks(kind: Kind2, n: number) {
  const l = lam(kind, n), N: number[] = [], A: number[] = [];
  const first = kind === 'open' ? 'A' : 'N';
  for (let m = 0; SW.X0 + (m * l) / 2 <= SW.X0 + SW.L + 1e-9; m++) (first === 'N' ? N : A).push(SW.X0 + (m * l) / 2);
  for (let m = 0; SW.X0 + l / 4 + (m * l) / 2 <= SW.X0 + SW.L + 1e-9; m++) (first === 'N' ? A : N).push(SW.X0 + l / 4 + (m * l) / 2);
  return { N, A };
}
const axisY = (row: number) => SW.rows[row] + 52;
const harm = (kind: Kind2, n: number) => (kind === 'closed' ? 2 * n - 1 : n);
const fLine = (kind: Kind2, n: number) => {
  const h = harm(kind, n), den = kind === 'closed' ? '4' : '2';
  const head = `<i>n</i> = ${n}:  <i>f</i><sub>${n}</sub> = ${h === 1 ? '' : h}<i>v</i>/(${den}<i>L</i>)`;
  if (h === 1) return head;
  return `${head} = ${h}<i>f</i><sub>1</sub>${kind === 'closed' ? ` (${h === 3 ? '3rd' : '5th'} harmonic)` : ''}`;
};
const CAP2 = {
  string: 'A string fixed at both ends has a node (N) at each end, so its modes fit one, two and three half-wavelengths into <i>L</i> (adjacent nodes are <i>λ</i>/2 apart, a node and the next antinode <i>λ</i>/4). Hence <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>): every harmonic, in the ratio 1 ∶ 2 ∶ 3.',
  open: 'An open pipe has a displacement antinode (A) at each open end, so its modes also fit one, two and three half-wavelengths into <i>L</i>. Hence <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>): every harmonic, in the ratio 1 ∶ 2 ∶ 3.',
  closed: 'A closed pipe has a displacement node (N) at the closed end and an antinode (A) at the open end, so its modes fit one, three and five quarter-wavelengths into <i>L</i>. Hence <i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>): only the odd harmonics, in the ratio 1 ∶ 3 ∶ 5.',
};
const fig2: Diagram = {
  id: 'p11-14-03-d1',
  topic: 2,
  name: 'Standing-wave modes in strings and pipes',
  cases: [
    { chip: 'String', kind: 'string', cap: CAP2.string },
    { chip: 'Open pipe', kind: 'open', cap: CAP2.open },
    { chip: 'Closed pipe', kind: 'closed', cap: CAP2.closed },
  ] as Case2[],
  draw(c: Case2) {
    const s = new Sketch(W, SW.h);
    const { X0, L, half } = SW, X1 = X0 + L, kind = c.kind;
    const a = kind === 'string' ? SW.ampS : SW.amp;
    for (let row = 0; row < 3; row++) {
      const n = row + 1, y = axisY(row), g = amp2(kind, n), col = row === 0 ? C.mari : C.ink;
      s.sym(X0 + 14, SW.rows[row] + 14, fLine(kind, n), { size: 14, anchor: 'start', color: row === 0 ? C.amber : C.text });
      path(s, [[X0, y], [X1, y]], { color: C.grey, w: 1, free: true });
      if (kind === 'string') {
        // the clamps: a post at each end, hatched on the outside
        for (const [x, side] of [[X0, -1], [X1, 1]] as [number, number][]) {
          path(s, [[x, y - half - 2], [x, y + half + 2]], { w: 2.2 });
          for (let yy = y - half + 2; yy <= y + half; yy += 8) path(s, [[x, yy], [x + side * 7, yy - 6]], { color: C.grey, w: 1.1 });
        }
      } else {
        path(s, [[X0, y - half], [X1, y - half]], { w: 2 });
        path(s, [[X0, y + half], [X1, y + half]], { w: 2 });
        if (kind === 'closed') path(s, [[X0, y - half], [X0, y + half]], { w: 3.2 });
      }
      const xs = samples(X0, X1, 300);
      path(s, xs.map((x): P => [x, y - a * g(x)]), { color: col, w: row === 0 ? 2.4 : 1.8 });
      path(s, xs.map((x): P => [x, y + a * g(x)]), { color: col, w: row === 0 ? 2 : 1.5, dash: 'dash' });
      const m = marks(kind, n);
      m.N.forEach((x) => { s.dot(x, y, 3); s.sym(x, y + half + 18, 'N', { size: 13, color: C.slate }); });
      m.A.forEach((x) => s.sym(x, y + half + 18, 'A', { size: 13, color: C.slate }));
    }
    s.sym(10, SW.h - 18, 'N node, A antinode', { size: 13, anchor: 'start', color: C.slate });
    const ratio = kind === 'closed' ? '1 ∶ 3 ∶ 5' : '1 ∶ 2 ∶ 3';
    const res = resultBlock(s, [`<i>f</i><sub>1</sub> ∶ <i>f</i><sub>2</sub> ∶ <i>f</i><sub>3</sub> = ${ratio}`], { size: 14 });
    const y1 = axisY(0), g1 = amp2(kind, 1), xf = X0 + 0.7 * L;
    const endName = (left: boolean) => (kind === 'string' ? 'Fixed end' : kind === 'open' ? 'Open end' : left ? 'Closed end' : 'Open end');
    s.place(
      [
        { t: 'Fundamental', hi: true, p: [xf, y1 - a * Math.abs(g1(xf))], at: [[150, 6, 'start'], [146, 6, 'start'], [156, 6, 'start']] },
        { t: endName(true), p: [X0, y1 - half - 2], at: [[8, 6, 'start'], [6, 6, 'start']] },
        { t: endName(false), p: [X1, y1 - half - 2], at: [[W - 8, 6, 'end'], [W - 6, 6, 'end']] },
      ],
      [res]
    );
    return s;
  },
  check(c: Case2) {
    const { X0, L } = SW, X1 = X0 + L, kind = c.kind;
    const rows = [1, 2, 3].map((n) => {
      const l = lam(kind, n), g = amp2(kind, n), m = marks(kind, n), all = [...m.N.map((x) => ['N', x] as const), ...m.A.map((x) => ['A', x] as const)].sort((p, q) => p[1] - q[1]);
      return { n, l, g, m, all };
    });
    const units = (px: number) => px / L; // in units of L
    const v = 200, Lm = 0.5; // Example 1 (p. 967): v = 200 m s⁻¹ on a 0.5 m wire
    const out: Check[] = [];
    out.push([`Each mode's amplitude has wavelength λ = ${kind === 'closed' ? '4L/(2n − 1)' : '2L/n'}: it reverses every λ/2 and repeats every λ (${rows.map((r) => fmt(units(r.l), 3) + 'L').join(', ')})`, rows.every((r) => samples(X0, X1, 60).every((x) => close(r.g(x + r.l / 2), -r.g(x), 1e-9) && close(r.g(x + r.l), r.g(x), 1e-9)))]);
    out.push([
      'Node and antinode marks alternate along each mode, every adjacent pair λ/4 apart, so adjacent nodes (and adjacent antinodes) are λ/2 apart',
      rows.every((r) => r.all.every((p, i) => i === 0 || (p[0] !== r.all[i - 1][0] && close(p[1] - r.all[i - 1][1], r.l / 4, 1e-9)))),
    ]);
    out.push(['Each N sits where the drawn amplitude is zero and each A where it is greatest (|amplitude| = 1)', rows.every((r) => r.m.N.every((x) => close(r.g(x), 0, 1e-9)) && r.m.A.every((x) => close(Math.abs(r.g(x)), 1, 1e-9)))]);
    out.push(['There are no other zeros or peaks: the drawn amplitude changes sign only at the marked nodes', rows.every((r) => {
      const xs = samples(X0, X1, 4000);
      let z = 0;
      for (let i = 1; i < xs.length; i++) if (Math.sign(r.g(xs[i])) * Math.sign(r.g(xs[i - 1])) < 0) z++;
      const inner = r.m.N.filter((x) => x > X0 + 1e-6 && x < X1 - 1e-6).length;
      return z === inner;
    })]);
    if (kind === 'string') {
      out.push(['End conditions: a node at each fixed end (both ends N, amplitude 0)', rows.every((r) => r.m.N.some((x) => close(x, X0)) && r.m.N.some((x) => close(x, X1)) && close(r.g(X0), 0, 1e-9) && close(r.g(X1), 0, 1e-9))]);
    } else if (kind === 'open') {
      out.push(['End conditions: a displacement antinode at each open end (both ends A)', rows.every((r) => r.m.A.some((x) => close(x, X0)) && r.m.A.some((x) => close(x, X1)) && close(Math.abs(r.g(X0)), 1, 1e-9) && close(Math.abs(r.g(X1)), 1, 1e-9))]);
    } else {
      out.push(['End conditions: a displacement node at the closed end (left, N) and an antinode at the open end (right, A)', rows.every((r) => r.m.N.some((x) => close(x, X0)) && r.m.A.some((x) => close(x, X1)) && close(r.g(X0), 0, 1e-9) && close(Math.abs(r.g(X1)), 1, 1e-9))]);
    }
    if (kind === 'closed') {
      out.push([`The modes hold ${rows.map((r) => fmt(L / (r.l / 4), 3)).join(', ')} quarter-wavelengths: λ = 4L, 4L/3, 4L/5 (${rows.map((r) => r.m.N.length + ' N, ' + r.m.A.length + ' A').join('; ')})`, rows.every((r, i) => close(L / (r.l / 4), 2 * (i + 1) - 1, 1e-9) && r.m.N.length === i + 1 && r.m.A.length === i + 1)]);
      const fm = rows.map((r) => v / (units(r.l) * Lm)); // f = v/λ, with λ in metres
      out.push([`f = v/λ gives fₙ = (2n − 1)v/(4L): ${fm.map((x) => fmt(x, 1)).join(', ')} Hz for v = 200 m s⁻¹, L = 0.5 m, in the ratio 1 ∶ 3 ∶ 5, the 1st, 3rd and 5th harmonics (odd only)`, rows.every((r, i) => close(fm[i], ((2 * r.n - 1) * v) / (4 * Lm), 1e-9)) && close(fm[1] / fm[0], 3, 1e-12) && close(fm[2] / fm[0], 5, 1e-12)]);
      out.push([`Its fundamental v/(4L) = ${fmt(fm[0], 1)} Hz is half the open pipe's v/(2L) = ${fmt(v / (2 * Lm), 1)} Hz: one octave lower`, close(fm[0] * 2, v / (2 * Lm), 1e-9)]);
      out.push(['Example 3 (p. 968): v = 340 m s⁻¹, L = 1.7 m give f₁ = 50 Hz, and 250, 350, 450 Hz are its 5th, 7th and 9th harmonics; the first overtone is the 3rd harmonic', close(340 / (4 * 1.7), 50, 1e-9) && [250, 350, 450].every((x, i) => close(x / 50, 5 + 2 * i, 1e-12))]);
    } else {
      out.push([`The modes hold ${rows.map((r) => fmt(L / (r.l / 2), 3)).join(', ')} half-wavelengths: λ = 2L, L, 2L/3 (${rows.map((r) => r.m.N.length + ' N, ' + r.m.A.length + ' A').join('; ')})`, rows.every((r, i) => close(L / (r.l / 2), i + 1, 1e-9)) && rows.every((r, i) => (kind === 'string' ? r.m.N.length === i + 2 && r.m.A.length === i + 1 : r.m.A.length === i + 2 && r.m.N.length === i + 1))]);
      const fm = rows.map((r) => v / (units(r.l) * Lm)); // f = v/λ, with λ in metres
      out.push([`f = v/λ gives fₙ = nv/(2L): ${fm.map((x) => fmt(x, 1)).join(', ')} Hz for Example 1's v = 200 m s⁻¹, L = 0.5 m (the book's 200, 400, 600 Hz), all harmonics, 1 ∶ 2 ∶ 3`, rows.every((r, i) => close(fm[i], (r.n * v) / (2 * Lm), 1e-9)) && close(fm[0], 200, 1e-9) && close(fm[1], 400, 1e-9) && close(fm[2], 600, 1e-9)]);
    }
    out.push(['The row labels state the same formulas: f₁, then the multiples ' + (kind === 'closed' ? '3f₁ and 5f₁' : '2f₁ and 3f₁'), [1, 2, 3].every((n) => fLine(kind, n).includes(`<sub>${n}</sub>`) && (n === 1 || fLine(kind, n).includes(`= ${harm(kind, n)}<i>f</i><sub>1</sub>`)))]);
    out.push(clearCheck(fig2.draw(c)));
    return out;
  },
};

/* ===================================================================== */
/* p11-14-C-d1 · the triangular pulse of worked example C.2 (topic C)      */
/* ===================================================================== */
/**
 * y(x, 0) = φ(x) = A(1 − |x|/L) for |x| ≤ L, zero elsewhere, released from rest
 * (v = 20 m s⁻¹): by d'Alembert y = ½φ(x − vt) + ½φ(x + vt). Drawn at the
 * example's three instants, vt = 0, L/2 and L, with x in units of L and y in
 * units of A. The two half-height copies are dashed; their sum, the string's
 * shape, is the marigold line.
 */
type Case3 = { chip: string; cap: string; vt: number };
const phi = (x: number) => (Math.abs(x) <= 1 ? 1 - Math.abs(x) : 0);
const right = (vt: number) => (x: number) => 0.5 * phi(x - vt);
const left = (vt: number) => (x: number) => 0.5 * phi(x + vt);
const total = (vt: number) => (x: number) => right(vt)(x) + left(vt)(x);
/** A half's drawn triangle (x in L, y in A): from (c − 1, 0) up to (c, ½) and down to (c + 1, 0). */
const halfPts = (c: number): P[] => [[c - 1, 0], [c, 0.5], [c + 1, 0]];
/** A triangle's height at u, from its three corners. */
const triAt = (t: P[], u: number) => (u <= t[0][0] || u >= t[2][0] ? 0 : u <= t[1][0] ? (t[1][1] * (u - t[0][0])) / (t[1][0] - t[0][0]) : (t[1][1] * (t[2][0] - u)) / (t[2][0] - t[1][0]));
const FP = { ox: 170, oy: 214, sx: 66, sy: 128, ax: 30, x0: -2.1, x1: 2.1 };
const PX = (u: number) => FP.ox + u * FP.sx;
const PY = (v: number) => FP.oy - v * FP.sy;
/** The corners of the drawn total: every place a slope can change (the triangles' ends and peaks), so the polyline is exact. */
const corners = (vt: number) => [...new Set([FP.x0, FP.x1, ...[-vt, vt].flatMap((c) => [c - 1, c, c + 1])].map((u) => +u.toFixed(9)))].filter((u) => u >= FP.x0 && u <= FP.x1).sort((a, b) => a - b);
const ticks3: Record<number, [number, string][]> = {
  0: [[-1, '−<i>L</i>'], [0, '0'], [1, '<i>L</i>']],
  0.5: [[-1.5, '−3<i>L</i>/2'], [-0.5, '−<i>L</i>/2'], [0, '0'], [0.5, '<i>L</i>/2'], [1.5, '3<i>L</i>/2']],
  1: [[-2, '−2<i>L</i>'], [-1, '−<i>L</i>'], [0, '0'], [1, '<i>L</i>'], [2, '2<i>L</i>']],
};
const fig3: Diagram = {
  id: 'p11-14-C-d1',
  topic: 6,
  name: 'A triangular pulse splitting in two',
  cases: [
    { chip: 't = 0', vt: 0, cap: 'The triangular pulse <i>y</i>(<i>x</i>, 0) = <i>A</i>(1 − |<i>x</i>|/<i>L</i>) at rest: peak <i>A</i> at <i>x</i> = 0, base from −<i>L</i> to +<i>L</i>. Released, it splits into two half-height triangles (dashed) moving at ±<i>v</i>: <i>y</i> = ½<i>φ</i>(<i>x</i> − <i>vt</i>) + ½<i>φ</i>(<i>x</i> + <i>vt</i>).' },
    { chip: 't = L/(2v)', vt: 0.5, cap: 'At <i>t</i> = <i>L</i>/(2<i>v</i>) the half-height triangles peak at <i>x</i> = ±<i>L</i>/2 and overlap for −<i>L</i>/2 ≤ <i>x</i> ≤ <i>L</i>/2, where they add to a flat top of height <i>A</i>/2; outside the overlap the profile slopes down in a straight line to zero at <i>x</i> = ±3<i>L</i>/2.' },
    { chip: 't = L/v', vt: 1, cap: 'At <i>t</i> = <i>L</i>/<i>v</i> the peaks are at <i>x</i> = ±<i>L</i>, height <i>A</i>/2: two separate triangles, touching only at <i>x</i> = 0, where both are zero.' },
  ] as Case3[],
  draw(c: Case3) {
    const s = new Sketch(W, 330);
    const vt = c.vt;
    // axes
    s.vec(FP.ax, FP.oy, FP.ax, PY(1.2), { color: C.grey, w: 1.3 });
    s.vec(FP.ax, FP.oy, W - 8, FP.oy, { color: C.grey, w: 1.3 });
    s.sym(FP.ax + 8, PY(1.2) + 6, '<i>y</i>', { size: 15, anchor: 'start' });
    s.sym(W - 8, FP.oy - 8, '<i>x</i>', { size: 15, anchor: 'end' });
    // A and A/2 on the y axis, each with a dotted guide to the peak at that height (the left one)
    for (const [v, t, to] of [[1, '<i>A</i>', vt === 0 ? 0 : null], [0.5, '<i>A</i>/2', -vt]] as [number, string, number | null][]) {
      s.line(FP.ax - 4, PY(v), FP.ax, PY(v), { color: C.grey, w: 1.2 });
      s.sym(FP.ax - 6, PY(v) + 5, t, { size: 13, anchor: 'end', color: C.slate });
      if (to !== null) path(s, [[FP.ax + 2, PY(v)], [PX(to) - 3, PY(v)]], { color: C.grey, w: 0.9, dash: 'dot', free: true });
    }
    for (const [u, t] of ticks3[vt]) {
      s.line(PX(u), FP.oy, PX(u), FP.oy + 4, { color: C.grey, w: 1.2 });
      s.sym(PX(u), FP.oy + 19, t, { size: 13, color: C.slate });
    }
    s.sym(14, 26, vt === 0 ? '<i>t</i> = 0' : vt === 0.5 ? '<i>t</i> = <i>L</i>/(2<i>v</i>)' : '<i>t</i> = <i>L</i>/<i>v</i>', { size: 15, anchor: 'start' });
    // the two halves, dashed (at t = 0 they coincide; at t = L/v they are the shape itself)
    if (vt < 1) (vt === 0 ? [0] : [-vt, vt]).forEach((cx) => path(s, halfPts(cx).map(([u, v]): P => [PX(u), PY(v)]), { color: C.slate, w: 1.4, dash: 'dash' }));
    // the string's shape: the sum
    const cs = corners(vt);
    path(s, cs.map((u): P => [PX(u), PY(total(vt)(u))]), { color: C.mari, w: 2.6 });
    // each half's velocity, with the half it belongs to written over its arrow
    const ay = PY(0.5) - (vt === 0 ? 30 : 20);
    for (const side of [1, -1]) {
      const from = vt === 0 ? side * 0.5 : side * vt, to = from + side * 0.6;
      arrow(s, [PX(from), ay], [PX(to), ay], { color: C.slate, w: 1.5 });
      s.sym(PX(to) + side * 6, ay + 5, '<i>v</i>', { size: 14, color: C.slate, anchor: side > 0 ? 'start' : 'end' });
      s.sym(PX((from + to) / 2), ay - 12, side > 0 ? '½<i>φ</i>(<i>x</i> − <i>vt</i>)' : '½<i>φ</i>(<i>x</i> + <i>vt</i>)', { size: 13, color: C.slate });
    }
    if (vt === 1) s.dot(PX(0), FP.oy, 3.4);
    const res = resultBlock(s, [vt === 0 ? '<i>y</i> = ½<i>φ</i>(<i>x</i> − <i>vt</i>) + ½<i>φ</i>(<i>x</i> + <i>vt</i>)' : vt === 0.5 ? 'Flat top <i>A</i>/2 for |<i>x</i>| ≤ <i>L</i>/2' : 'Peaks <i>A</i>/2 at <i>x</i> = ±<i>L</i>'], { size: 14 });
    const specs: Parameters<Sketch['place']>[0] =
      vt === 0
        ? [
            { t: 'Pulse at rest', hi: true, p: [PX(0.62), PY(total(0)(0.62))], at: [[W - 8, 130, 'end'], [W - 8, 136, 'end'], [W - 8, 124, 'end']] },
            { t: 'Each half', p: [PX(-0.4), PY(right(0)(-0.4))], at: [[PX(-0.4) - 24, 246, 'start'], [PX(-0.4) - 30, 248, 'start']] },
          ]
        : vt === 0.5
          ? [{ t: 'Flat top', hi: true, p: [PX(0), PY(0.5)], at: [[PX(0), 56, 'middle'], [PX(0), 52, 'middle']] }]
          : [{ t: 'Touch only here', hi: true, p: [PX(0), FP.oy], own: [PX(0), FP.oy], at: [[PX(0), 56, 'middle'], [PX(0), 52, 'middle']] }];
    s.place(specs, [res]);
    return s;
  },
  check(c: Case3) {
    const vt = c.vt, cs = corners(vt), drawn = cs.map((u): P => [PX(u), PY(total(vt)(u))]);
    /** The drawn total, read back at any x (linear between its corners). */
    const read = (u: number) => {
      const x = PX(u);
      for (let i = 1; i < drawn.length; i++) if (x <= drawn[i][0] + 1e-9) { const [a, b] = [drawn[i - 1], drawn[i]], k = (x - a[0]) / (b[0] - a[0] || 1); return (FP.oy - (a[1] + k * (b[1] - a[1]))) / FP.sy; }
      return NaN;
    };
    const us = samples(FP.x0, FP.x1, 4200);
    const dAlembert = (u: number) => 0.5 * phi(u - vt) + 0.5 * phi(u + vt);
    const area = (fn: (u: number) => number) => us.slice(1).reduce((a, u, i) => a + ((fn(u) + fn(us[i])) / 2) * (u - us[i]), 0);
    const out: Check[] = [
      [`The marigold shape, read back from the drawing at ${us.length} points, is y = ½φ(x − vt) + ½φ(x + vt) with vt = ${vt === 0 ? '0' : vt === 0.5 ? 'L/2' : 'L'} (x in units of L, y in units of A)`, us.every((u) => close(read(u), dAlembert(u), 1e-9))],
      [`At t = 0 it is the released pulse: ½φ(x) + ½φ(x) = φ(x) = A(1 − |x|/L) for |x| ≤ L, zero elsewhere`, us.every((u) => close(total(0)(u), Math.abs(u) <= 1 ? 1 - Math.abs(u) : 0, 1e-12))],
      [`The halves (dashed where they part from the shape) are ½φ(x ∓ vt): triangles of height A/2 and base 2L centred at x = ±vt = ${vt === 0 ? '0' : vt === 0.5 ? '±L/2' : '±L'}, moving right and left`, us.every((u) => close(triAt(halfPts(vt), u), right(vt)(u), 1e-12) && close(triAt(halfPts(-vt), u), left(vt)(u), 1e-12)) && close(right(vt)(vt), 0.5) && close(left(vt)(-vt), 0.5)],
      [`The area under the string's shape stays AL: ${fmt(area(total(vt)), 4)} AL (each half carries ${fmt(area(right(vt)), 4)} AL)`, close(area(total(vt)), 1, 1e-6) && close(area(right(vt)), 0.5, 1e-6)],
    ];
    if (vt === 0) {
      out.push(['Peak A at x = 0; the base runs from −L to +L; the two halves coincide there, each of height A/2', close(total(0)(0), 1) && close(total(0)(-1), 0) && close(total(0)(1), 0) && us.every((u) => close(right(0)(u), left(0)(u), 1e-12))]);
    } else if (vt === 0.5) {
      const inner = us.filter((u) => u >= -0.5 && u <= 0.5), outer = us.filter((u) => u >= 0.5 && u <= 1.5);
      out.push(['For −L/2 ≤ x ≤ L/2 the halves are (A/2)(½ + x/L) and (A/2)(½ − x/L), and they add to a flat top of height A/2', inner.every((u) => close(right(0.5)(u), 0.5 * (0.5 + u), 1e-12) && close(left(0.5)(u), 0.5 * (0.5 - u), 1e-12) && close(total(0.5)(u), 0.5, 1e-12))]);
      out.push(['Outside the overlap the shape slopes down in a straight line from A/2 at x = ±L/2 to zero at x = ±3L/2, and is zero beyond', outer.every((u) => close(total(0.5)(u), 0.5 * (1.5 - u), 1e-12) && close(total(0.5)(-u), 0.5 * (1.5 - u), 1e-12)) && us.filter((u) => Math.abs(u) >= 1.5).every((u) => close(total(0.5)(u), 0, 1e-12))]);
      out.push(['The halves overlap exactly on −L/2 ≤ x ≤ L/2 (both non-zero only there)', us.every((u) => (right(0.5)(u) > 1e-12 && left(0.5)(u) > 1e-12) === (u > -0.5 && u < 0.5))]);
    } else {
      out.push(['Peaks A/2 at x = ±L; the shape is zero at x = 0 and beyond ±2L', close(total(1)(1), 0.5) && close(total(1)(-1), 0.5) && close(total(1)(0), 0) && us.filter((u) => Math.abs(u) >= 2).every((u) => close(total(1)(u), 0, 1e-12))]);
      out.push(['The two triangles no longer overlap: at every x at least one of them is zero (they meet only at x = 0)', us.every((u) => right(1)(u) * left(1)(u) < 1e-15)]);
    }
    const v = 20; // m s⁻¹, the example's string
    out.push([`With v = ${v} m s⁻¹ the halves move ±vt: L/2 at t = L/(2v) = L/40 s and L at t = L/v = L/20 s (L in metres), whatever L is`, close(v * (1 / (2 * v)), 0.5) && close(v * (1 / v), 1)]);
    out.push(clearCheck(fig3.draw(c)));
    return out;
  },
};

export const DIAGRAMS_PHYSICS_11_14: Diagram[] = [fig1, fig2, fig3];
