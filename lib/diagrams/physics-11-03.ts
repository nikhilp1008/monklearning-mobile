import { C, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 3 (Motion in a Plane): every figure of the
 * Master Reference book, redrawn. The chapter's drawings are its seven
 * numbered figures (pp. 135–179); it has no unnumbered drawings, and the
 * Additional Topics (pp. 182–194) have none.
 *
 * The chapter is vectors, so every arrow here is built from a magnitude and
 * an angle and every trajectory from its equation: the resultant really is
 * the head-to-tail sum, the parabola is y = x tan θ − gx²/(2u² cos² θ), the
 * river triangle closes, Δv on the circle points at the centre. Each `check`
 * turns the drawn pixels back into physics and compares them with the book.
 */

const W = 340;
type P = [number, number];
const DEG = Math.PI / 180;
const cos = (a: number) => Math.cos(a * DEG);
const sin = (a: number) => Math.sin(a * DEG);
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const len = (a: P) => Math.hypot(a[0], a[1]);
/** Screen y runs down; physics y runs up. A screen vector as physics (x, y). */
const up = (v: P): P => [v[0], -v[1]];
/** The physics angle (degrees, anticlockwise from +x) of a screen vector. */
const angleOf = (v: P) => Math.atan2(-v[1], v[0]) / DEG;
/** The point at distance r from c, at physics angle a (degrees). */
const polar = (c: P, r: number, a: number): P => [c[0] + r * cos(a), c[1] - r * sin(a)];

/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: { color?: string; w?: number; dash?: 'dash' | 'dot' } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  const dash = o.dash === 'dash' ? ' stroke-dasharray="5 4"' : o.dash === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dash}/>`);
}
/** An angle mark: an arc round c from physics angle a0 to a1 (degrees). */
function arc(s: Sketch, c: P, r: number, a0: number, a1: number, o: { color?: string; w?: number } = {}) {
  const n = 24, pts: P[] = [];
  for (let i = 0; i <= n; i++) pts.push(polar(c, r, a0 + ((a1 - a0) * i) / n));
  path(s, pts, { color: o.color ?? C.slate, w: o.w ?? 1.3 });
}
/** A right-angle mark at `at`, between the unit directions u and v (screen). */
function square(s: Sketch, at: P, u: P, v: P, e = 8) {
  path(s, [add(at, [u[0] * e, u[1] * e]), add(at, [u[0] * e + v[0] * e, u[1] * e + v[1] * e]), add(at, [v[0] * e, v[1] * e])], { color: C.slate, w: 1.1 });
}
/** A measured length with an arrowhead at each end (the book's d, R and r). */
function measure(s: Sketch, a: P, b: P, color: string = C.slate) {
  const m: P = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  s.vec(m[0], m[1], a[0], a[1], { color, w: 1.3 });
  s.vec(m[0], m[1], b[0], b[1], { color, w: 1.3 });
}
/** A point that tags must keep clear of, with nothing drawn (an arrow's tip already marks it). */
const keepClear = (s: Sketch, p: P, r = 3) => s.point(p[0], p[1], r, '');
/** A small open-ended axis: grey, with an arrowhead and its name at the tip. */
function axis(s: Sketch, a: P, b: P, name: string, at: P) {
  s.vec(a[0], a[1], b[0], b[1], { color: C.grey, w: 1.3 });
  s.sym(at[0], at[1], `<i>${name}</i>`, { size: 15, anchor: 'start' });
}

/* ===================================================================== */
/* Figure 3.1 · the parallelogram law, derived on OPQS (topic 01)         */
/* ===================================================================== */
/** Any two vectors will do; these keep the book's proportions (B about ¾ of A, θ = 60°). */
const F31 = { A: 5, B: 3.5, th: 60, O: [30, 236] as P, k: 36 };
const geo31 = () => {
  const { A, B, th, O, k } = F31;
  const Pp: P = [O[0] + A * k, O[1]];
  const Q = polar(Pp, B * k, th);
  const S: P = [Q[0], O[1]];
  return { O, P: Pp, Q, S };
};
const fig31: Diagram = {
  id: 'p11-03-fig-3.1',
  topic: 0,
  name: 'The parallelogram law, step by step',
  cases: [{ chip: 'Triangle OQS', cap: 'Parallelogram law of vector addition: <i>A</i> = <i>OP</i> and <i>B</i> = <i>PQ</i>, with angle <i>θ</i> between them; the resultant is <i>R</i> = <i>OQ</i>. <i>QS</i> is perpendicular to <i>OS</i>, with <i>PS</i> = <i>B</i> cos <i>θ</i> and <i>QS</i> = <i>B</i> sin <i>θ</i>, and <i>α</i> is the angle <i>R</i> makes with <i>A</i>.' }],
  draw() {
    const s = new Sketch(W, 280);
    const { O, P: Pp, Q, S } = geo31(), alpha = angleOf(sub(Q, O));
    axis(s, [O[0] - 14, O[1]], [W - 16, O[1]], 'x', [W - 13, O[1] + 5]);
    axis(s, [O[0], O[1] + 22], [O[0], 40], 'y', [O[0] + 8, 48]);
    // the perpendicular QS and its right angle
    path(s, [Q, S], { color: C.slate, w: 1.3, dash: 'dash' });
    square(s, S, [-1, 0], [0, -1]);
    // angle marks: θ at P between PS and PQ, α at O between OP and OQ
    arc(s, Pp, 24, 0, F31.th);
    s.sym(...polar(Pp, 38, F31.th / 2), '<i>θ</i>', { size: 15, anchor: 'middle' });
    arc(s, O, 52, 0, alpha);
    s.sym(...add(polar(O, 72, alpha / 2), [0, 5]), '<i>α</i>', { size: 15 });
    // the two vectors head to tail, then the resultant
    s.vec(O[0], O[1], Pp[0], Pp[1], { w: 2 });
    s.vec(Pp[0], Pp[1], Q[0], Q[1], { w: 2 });
    s.vec(O[0], O[1], Q[0], Q[1], { color: C.mari, w: 2.6 });
    s.dot(O[0], O[1], 3);
    s.dot(S[0], S[1], 3);
    keepClear(s, Pp);
    keepClear(s, Q);
    // letters and lengths
    s.sym(O[0] - 6, O[1] + 18, '<i>O</i>', { anchor: 'end' });
    s.sym(Pp[0], O[1] + 19, '<i>P</i>');
    s.sym(S[0], O[1] + 19, '<i>S</i>');
    s.sym(Q[0] + 2, Q[1] - 9, '<i>Q</i>');
    s.sym((O[0] + Pp[0]) / 2, O[1] + 20, '<i>A</i>', { size: 16 });
    s.sym((Pp[0] + S[0]) / 2, O[1] + 40, '<i>B</i> cos <i>θ</i>', { size: 14, color: C.slate });
    s.sym(S[0] + 7, (Q[1] + S[1]) / 2 + 4, '<i>B</i> sin <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    const mB: P = [(Pp[0] + Q[0]) / 2, (Pp[1] + Q[1]) / 2];
    s.sym(mB[0] + 12, mB[1] + 10, '<i>B</i>', { size: 16, anchor: 'start' });
    const mR = polar(O, len(sub(Q, O)) * 0.5, alpha);
    s.sym(...add(mR, [-8, -12]), '<i>R</i>', { size: 16 });
    s.place([{ t: 'Resultant', p: polar(O, len(sub(Q, O)) * 0.3, alpha), hi: true, at: [[O[0] + 14, 70, 'start'], [O[0] + 14, 100, 'start']] }]);
    return s;
  },
  check() {
    const { A, B, th, k } = F31, { O, P: Pp, Q, S } = geo31();
    const R = up(sub(Q, O)), a = up(sub(Pp, O)), b = up(sub(Q, Pp));
    const Rmag = len(R) / k, alpha = Math.atan2(R[1], R[0]) / DEG, thAtP = Math.atan2(b[1], b[0]) / DEG;
    const law = Math.sqrt(A * A + B * B + 2 * A * B * cos(th));
    return [
      [`OP = A = ${fmt(len(a) / k)} along OS, PQ = B = ${fmt(len(b) / k)} at θ = ${fmt(thAtP)}° to it`, close(len(a) / k, A) && close(len(b) / k, B) && close(a[1], 0) && close(thAtP, th)],
      ['OQ is the head-to-tail sum OP + PQ', close(R[0], a[0] + b[0]) && close(R[1], a[1] + b[1])],
      [`PS = ${fmt((S[0] - Pp[0]) / k, 3)} = B cos θ, QS = ${fmt((S[1] - Q[1]) / k, 3)} = B sin θ`, close((S[0] - Pp[0]) / k, B * cos(th)) && close((S[1] - Q[1]) / k, B * sin(th))],
      ['QS is perpendicular to OS', close(Q[0], S[0]) && close(S[1], O[1])],
      [`OQ² = OS² + QS²: R = ${fmt(Rmag, 4)} = √(A² + B² + 2AB cos θ) = ${fmt(law, 4)}`, close(Rmag, law) && close(Rmag ** 2, ((S[0] - O[0]) / k) ** 2 + ((S[1] - Q[1]) / k) ** 2)],
      [`α = ${fmt(alpha)}°: tan α = QS/OS = B sin θ/(A + B cos θ)`, close(Math.tan(alpha * DEG), (B * sin(th)) / (A + B * cos(th)))],
      [`|A − B| ≤ R ≤ A + B: ${fmt(Math.abs(A - B))} ≤ ${fmt(Rmag)} ≤ ${fmt(A + B)}`, Math.abs(A - B) <= Rmag && Rmag <= A + B],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.2 · dot product as a projection, cross product as an area     */
/* ===================================================================== */
type Case32 = { chip: string; cap: string; part: 'dot' | 'cross' };
const D32 = { A: 6, B: 4.6, th: 50, O: [40, 236] as P, k: 42 };
const X32 = { A: 4.6, B: 3.6, th: 50, O: [26, 236] as P, k: 40 };
const geo32 = (part: 'dot' | 'cross') => {
  const { A, B, th, O, k } = part === 'dot' ? D32 : X32;
  const At: P = [O[0] + A * k, O[1]], Bt = polar(O, B * k, th), far = add(At, sub(Bt, O));
  const cen: P = [(O[0] + far[0]) / 2, (O[1] + far[1]) / 2];
  return { O, At, Bt, far, foot: [Bt[0], O[1]] as P, cen };
};
/** The radius of the ⊙ (out of the page) mark for C = A × B. */
const OUT_R = 8;
/** Horizontal hatching inside the parallelogram O, A, A + B, B (the book's shading; never a fill). */
function hatch(s: Sketch, g: ReturnType<typeof geo32>, skip: Rect[], gap = 7) {
  const top = g.Bt[1], run = (g.Bt[0] - g.O[0]) / (g.O[1] - g.Bt[1]);
  for (let y = g.O[1] - gap / 2; y > top + 1.5; y -= gap) {
    const x0 = g.O[0] + (g.O[1] - y) * run + 3, x1 = x0 + (g.At[0] - g.O[0]) - 6;
    let segs: [number, number][] = [[x0, x1]];
    for (const r of skip) {
      if (y <= r[1] || y >= r[3]) continue;
      segs = segs.flatMap(([a, b]): [number, number][] => {
        if (b <= r[0] || a >= r[2]) return [[a, b]];
        const out: [number, number][] = [];
        if (r[0] - a > 2) out.push([a, r[0]]);
        if (b - r[2] > 2) out.push([r[2], b]);
        return out;
      });
    }
    segs.forEach(([a, b]) => s.line(a, y, b, y, { color: C.grey, w: 0.9 }));
  }
}
const fig32: Diagram = {
  id: 'p11-03-fig-3.2',
  topic: 1,
  name: 'Dot and cross products, in pictures',
  cases: [
    { chip: 'Left: dot', part: 'dot', cap: 'Left: dot product, <i>A</i>·<i>B</i> = <i>A</i>(<i>B</i> cos <i>θ</i>), where <i>B</i> cos <i>θ</i> is the projection of <i>B</i> on <i>A</i>.' },
    { chip: 'Right: cross', part: 'cross', cap: 'Right: cross product, |<i>A</i> × <i>B</i>| = <i>AB</i> sin <i>θ</i> = area of the shaded parallelogram; <i>C</i> = <i>A</i> × <i>B</i> is perpendicular to the plane of <i>A</i> and <i>B</i>.' },
  ],
  draw(c: Case32) {
    const s = new Sketch(W, 290);
    const g = geo32(c.part), th = c.part === 'dot' ? D32.th : X32.th;
    if (c.part === 'dot') {
      s.sym(W / 2, 24, 'dot = (length of <i>A</i>)', { size: 15 });
      s.sym(W / 2, 46, '× (projection of <i>B</i> on <i>A</i>)', { size: 15 });
      // the perpendicular from B's tip, and the projection it cuts off
      path(s, [g.Bt, g.foot], { color: C.slate, w: 1.3, dash: 'dash' });
      square(s, g.foot, [-1, 0], [0, -1]);
      const py = g.O[1] + 14;
      s.line(g.O[0], py, g.foot[0], py, { color: C.mari, w: 2.4 });
      s.line(g.O[0], py - 5, g.O[0], py + 5, { color: C.mari, w: 2 });
      s.line(g.foot[0], py - 5, g.foot[0], py + 5, { color: C.mari, w: 2 });
      s.sym((g.O[0] + g.foot[0]) / 2, py + 22, '<i>B</i> cos <i>θ</i>', { size: 15, color: C.amber });
      arc(s, g.O, 30, 0, th);
      s.sym(...add(polar(g.O, 44, th / 2), [0, 5]), '<i>θ</i>', { size: 15 });
      s.vec(g.O[0], g.O[1], g.At[0], g.At[1], { w: 2 });
      s.vec(g.O[0], g.O[1], g.Bt[0], g.Bt[1], { w: 2 });
      s.dot(g.O[0], g.O[1], 3);
      keepClear(s, g.Bt);
      s.sym(g.O[0] - 7, g.O[1] + 5, '<i>O</i>', { anchor: 'end' });
      s.sym(g.At[0] + 8, g.At[1] + 5, '<i>A</i>', { size: 16, anchor: 'start' });
      const mB = polar(g.O, D32.B * D32.k * 0.55, th);
      s.sym(mB[0] - 12, mB[1], '<i>B</i>', { size: 16, anchor: 'end' });
      s.place([{ t: 'Projection of B on A', p: [(g.O[0] + g.foot[0]) * 0.5 + 30, py], hi: true, at: [[W - 8, py + 30, 'end'], [W - 8, py + 8, 'end']] }]);
      return s;
    }
    s.sym(W / 2, 24, '|<i>A</i> × <i>B</i>| = <i>AB</i> sin <i>θ</i>', { size: 15 });
    s.sym(W / 2, 46, '= area of shaded parallelogram', { size: 15 });
    const { cen } = g;
    const thLab = add(polar(g.O, 46, th / 2), [0, 5]);
    // the far two sides, dashed, close the parallelogram
    path(s, [g.Bt, g.far, g.At], { color: C.mari, w: 2.2, dash: 'dash' });
    arc(s, g.O, 32, 0, th);
    s.sym(...thLab, '<i>θ</i>', { size: 15 });
    s.vec(g.O[0], g.O[1], g.At[0], g.At[1], { w: 2 });
    s.vec(g.O[0], g.O[1], g.Bt[0], g.Bt[1], { w: 2 });
    // C = A × B points out of the page, toward the reader: the standard ⊙ at the parallelogram's centre
    s.point(cen[0], cen[1], OUT_R, `<circle cx="${r1(cen[0])}" cy="${r1(cen[1])}" r="${OUT_R}" fill="none" stroke="${C.ink}" stroke-width="1.7"/><circle cx="${r1(cen[0])}" cy="${r1(cen[1])}" r="2.2" fill="${C.ink}"/>`);
    s.dot(g.O[0], g.O[1], 3);
    keepClear(s, g.Bt);
    s.sym(g.O[0] + 2, g.O[1] + 19, '<i>O</i>');
    s.sym(g.At[0], g.At[1] + 19, '<i>A</i>', { size: 16 });
    const mB = polar(g.O, X32.B * X32.k * 0.6, th);
    s.sym(mB[0] - 10, mB[1], '<i>B</i>', { size: 16, anchor: 'end' });
    s.place([
      { t: 'C = A × B (out of page)', ring: [cen[0], cen[1], OUT_R], own: cen, at: [[cen[0], 70, 'middle'], [W - 8, 70, 'end']] },
      { t: 'Shaded parallelogram', p: polar(g.At, X32.B * X32.k * 0.3, X32.th), own: g.far, hi: true, at: [[W - 8, g.O[1] + 28, 'end'], [W - 8, g.far[1] + 60, 'end']] },
    ]);
    // the hatching keeps clear of the ⊙, the θ mark and the ⊙'s leader line
    const lead = s.tags.find((t) => t.name.startsWith('C = '));
    const skip: Rect[] = [[cen[0] - OUT_R - 5, cen[1] - OUT_R - 5, cen[0] + OUT_R + 5, cen[1] + OUT_R + 5], [thLab[0] - 9, thLab[1] - 14, thLab[0] + 9, thLab[1] + 5], [g.O[0], g.O[1] - 36, g.O[0] + 36, g.O[1]]];
    if (lead?.from && lead.to && Math.abs(lead.from[0] - lead.to[0]) < 1) skip.push([lead.from[0] - 4, lead.to[1], lead.from[0] + 4, lead.from[1]]);
    hatch(s, g, skip);
    return s;
  },
  check(c: Case32) {
    const g = geo32(c.part), F = c.part === 'dot' ? D32 : X32, { A, B, th, k } = F;
    const a = up(sub(g.At, g.O)).map((v) => v / k) as P, b = up(sub(g.Bt, g.O)).map((v) => v / k) as P;
    const angle = (Math.atan2(b[1], b[0]) - Math.atan2(a[1], a[0])) / DEG;
    const base: Check[] = [[`|A| = ${fmt(len(a))}, |B| = ${fmt(len(b))}, with θ = ${fmt(angle)}° between them, tail to tail at O`, close(len(a), A) && close(len(b), B) && close(angle, th)]];
    if (c.part === 'dot') {
      const proj = (g.foot[0] - g.O[0]) / k, dot = a[0] * b[0] + a[1] * b[1];
      return [
        ...base,
        ['The dashed line from B’s tip meets A at a right angle', close(g.foot[0], g.Bt[0]) && close(g.foot[1], g.O[1])],
        [`The projection of B on A is ${fmt(proj, 4)} = B cos θ`, close(proj, B * cos(th))],
        [`A·B = AxBx + AyBy = ${fmt(dot, 4)} = A(B cos θ) = ${fmt(A * proj, 4)}`, close(dot, A * proj) && close(dot, A * B * cos(th))],
      ];
    }
    const poly = [g.O, g.At, g.far, g.Bt].map((p) => up(p).map((v) => v / k) as P);
    const area = Math.abs(poly.reduce((s2, p, i) => { const q = poly[(i + 1) % 4]; return s2 + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;
    // A and B in the xy-plane: A × B = (0, 0, AxBy − AyBx)
    const Cz = a[0] * b[1] - a[1] * b[0], CzBA = b[0] * a[1] - b[1] * a[0];
    const cross3 = (u: number[], v: number[]) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const dot3 = (u: number[], v: number[]) => u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
    const C3 = cross3([a[0], a[1], 0], [b[0], b[1], 0]);
    return [
      ...base,
      ['The far corner is A + B: the figure is a parallelogram', close(g.far[0] - g.Bt[0], g.At[0] - g.O[0]) && close(g.far[1] - g.Bt[1], g.At[1] - g.O[1])],
      [`Area of the drawn parallelogram = ${fmt(area, 4)} = AB sin θ = |A × B|`, close(area, A * B * sin(th)) && close(area, Math.abs(Cz))],
      [`C = A × B = (${fmt(C3[0])}, ${fmt(C3[1])}, ${fmt(C3[2], 3)}): A·C = ${fmt(dot3([a[0], a[1], 0], C3))} and B·C = ${fmt(dot3([b[0], b[1], 0], C3))}, so C is perpendicular to the plane of A and B`, close(C3[0], 0) && close(C3[1], 0) && close(C3[2], Cz) && close(dot3([a[0], a[1], 0], C3), 0) && close(dot3([b[0], b[1], 0], C3), 0)],
      [`Its z-part is +${fmt(Cz, 3)}: with x right and y up on the page, +z points out of the page, so C is drawn as ⊙`, Cz > 0 && close(Cz, A * B * sin(th))],
      ['B × A = −A × B (anticommutative)', close(CzBA, -Cz)],
      ['The ⊙ for C sits at the parallelogram’s centre (where its diagonals cross), wholly inside it', close(g.cen[0], (g.At[0] + g.Bt[0]) / 2) && close(g.cen[1], (g.At[1] + g.Bt[1]) / 2) && g.cen[1] - OUT_R > g.Bt[1] && g.cen[1] + OUT_R < g.O[1]],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.3 · position, displacement and velocity on a curved path      */
/* ===================================================================== */
/** A smooth arching path, y = ax − bx² (any curve would do; this is the book's shape), and the points A and B on it. */
const F33 = { O: [36, 262] as P, k: 44, a: 2.162, b: 0.2922, xA: 0.9, xB: 5, x0: 0.62, x1: 6.1, vx: 26 };
const y33 = (x: number) => F33.a * x - F33.b * x * x;
const dy33 = (x: number) => F33.a - 2 * F33.b * x;
const at33 = (x: number, y: number): P => [F33.O[0] + x * F33.k, F33.O[1] - y * F33.k];
const geo33 = () => {
  const { xA, xB, vx } = F33;
  const A = at33(xA, y33(xA)), B = at33(xB, y33(xB));
  // velocities tangent to the path; a common horizontal part, as for any constant-acceleration path
  const vA: P = [vx, -vx * dy33(xA)], vB: P = [vx, -vx * dy33(xB)];
  return { A, B, vA, vB };
};
const fig33: Diagram = {
  id: 'p11-03-fig-3.3',
  topic: 2,
  name: 'Position, displacement and velocity in a plane',
  cases: [{ chip: 'From A to B', cap: 'Motion along a curved path from <i>A</i> to <i>B</i>: <i>r</i><sub>0</sub> and <i>r</i> are the position vectors, Δ<i>r</i> = <i>r</i> − <i>r</i><sub>0</sub> is the displacement, and <i>v</i><sub>0</sub> and <i>v</i> are the velocities, tangent to the path at <i>A</i> and <i>B</i>. The dashed lines show the independent <i>x</i>-progress and <i>y</i>-progress.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { O } = F33, { A, B, vA, vB } = geo33();
    axis(s, [O[0] - 14, O[1]], [W - 16, O[1]], 'x', [W - 13, O[1] + 5]);
    axis(s, [O[0], O[1] + 20], [O[0], 22], 'y', [O[0] + 8, 30]);
    // the independent x- and y-progress of A and B
    [A, B].forEach((p) => {
      path(s, [[p[0], O[1]], p], { color: C.slate, w: 1.1, dash: 'dash' });
      path(s, [[O[0], p[1]], p], { color: C.slate, w: 1.1, dash: 'dash' });
    });
    // the path
    const pts: P[] = [];
    for (let i = 0; i <= 80; i++) { const x = F33.x0 + ((F33.x1 - F33.x0) * i) / 80; pts.push(at33(x, y33(x))); }
    path(s, pts, { w: 1.8 });
    // position vectors from O, the displacement between their tips
    s.vec(O[0], O[1], A[0], A[1], { color: C.slate, w: 1.6 });
    s.vec(O[0], O[1], B[0], B[1], { color: C.slate, w: 1.6 });
    s.vec(A[0], A[1], B[0], B[1], { color: C.mari, w: 2.6 });
    s.vec(A[0], A[1], A[0] + vA[0], A[1] + vA[1], { w: 2 });
    s.vec(B[0], B[1], B[0] + vB[0], B[1] + vB[1], { w: 2 });
    s.dot(O[0], O[1], 3);
    s.dot(A[0], A[1], 3.2);
    s.dot(B[0], B[1], 3.2);
    s.sym(O[0] - 6, O[1] + 18, '<i>O</i>', { anchor: 'end' });
    s.sym(A[0] - 9, A[1] - 6, '<i>A</i>', { anchor: 'end' });
    s.sym(B[0] + 4, B[1] - 12, '<i>B</i>', { anchor: 'start' });
    s.sym(A[0] + vA[0] - 6, A[1] + vA[1] - 4, '<i>v</i><sub>0</sub>', { size: 16, anchor: 'end' });
    s.sym(B[0] + vB[0] + 6, B[1] + vB[1] + 4, '<i>v</i>', { size: 16, anchor: 'start' });
    const ang0 = angleOf(sub(A, O)), mr0 = polar(O, len(sub(A, O)) * 0.55, ang0);
    s.sym(mr0[0] - 9, mr0[1] + 2, '<i>r</i><sub>0</sub>', { size: 16, anchor: 'end' });
    const angR = angleOf(sub(B, O)), mr = polar(O, len(sub(B, O)) * 0.6, angR);
    s.sym(mr[0] + 6, mr[1] + 18, '<i>r</i>', { size: 16, anchor: 'start' });
    const angD = angleOf(sub(B, A)), md = polar(A, len(sub(B, A)) * 0.45, angD);
    s.sym(md[0] - 4, md[1] - 12, 'Δ<i>r</i>', { size: 16, color: C.amber });
    s.place([
      { t: 'Displacement', p: polar(A, len(sub(B, A)) * 0.7, angD), hi: true, at: [[W - 8, 6, 'end'], [150, 6, 'start']] },
      { t: 'Path', p: at33(1.75, y33(1.75)), at: [[60, 40, 'start'], [50, 70, 'start']] },
    ]);
    return s;
  },
  check() {
    const { O, k, xA, xB } = F33, { A, B, vA, vB } = geo33();
    const r0 = up(sub(A, O)), r = up(sub(B, O)), dr = up(sub(B, A));
    const h = 1e-6, slope = (x: number) => (y33(x + h) - y33(x - h)) / (2 * h);
    return [
      [`A and B sit on the path: A = (${fmt(r0[0] / k)}, ${fmt(r0[1] / k)}), B = (${fmt(r[0] / k)}, ${fmt(r[1] / k)})`, close(r0[1] / k, y33(r0[0] / k)) && close(r[1] / k, y33(r[0] / k)) && close(r0[0] / k, xA) && close(r[0] / k, xB)],
      ['Δr = r − r₀: the displacement arrow joins the tips of the two position vectors', close(dr[0], r[0] - r0[0]) && close(dr[1], r[1] - r0[1])],
      [`v₀ is tangent at A (slope ${fmt(-vA[1] / vA[0], 4)} = dy/dx = ${fmt(slope(xA), 4)})`, close(-vA[1] / vA[0], slope(xA), 1e-6)],
      [`v is tangent at B (slope ${fmt(-vB[1] / vB[0], 4)} = dy/dx = ${fmt(slope(xB), 4)})`, close(-vB[1] / vB[0], slope(xB), 1e-6)],
      ['Both velocities share one horizontal part, as the independent x-motion needs', close(vA[0], vB[0])],
      ['The path arches over between A and B (it rises at A and falls at B)', slope(xA) > 0 && slope(xB) < 0],
      [`The dashed lines meet the axes at A's and B's own coordinates: x = ${fmt((A[0] - O[0]) / k)}, ${fmt((B[0] - O[0]) / k)}; y = ${fmt((O[1] - A[1]) / k)}, ${fmt((O[1] - B[1]) / k)}`, close((A[0] - O[0]) / k, xA) && close((B[0] - O[0]) / k, xB) && close((O[1] - A[1]) / k, y33(xA)) && close((O[1] - B[1]) / k, y33(xB))],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.4 · projectile: components, apex, range (topic 04)            */
/* ===================================================================== */
/** u = 20 m/s at 40°, g = 10 m/s² (the book's drawing is at about 40°, true to scale). */
const F34 = { u: 20, th: 40, g: 10, O: [38, 150] as P, k: 6.3, kv: 2.7 };
const pr34 = () => {
  const { u, th, g } = F34;
  const ux = u * cos(th), uy = u * sin(th), T = (2 * uy) / g, H = (uy * uy) / (2 * g), R = (u * u * sin(2 * th)) / g;
  return { ux, uy, T, H, R, x: (t: number) => ux * t, y: (t: number) => uy * t - (g * t * t) / 2 };
};
const at34 = (x: number, y: number): P => [F34.O[0] + x * F34.k, F34.O[1] - y * F34.k];
/** The drawn arrows: launch velocity, its velocity at the apex and at landing (one px-per-m/s scale). */
const geo34 = () => {
  const { O, kv } = F34, p = pr34();
  const apex = at34(p.R / 2, p.H), B = at34(p.R, 0);
  const vAt = (t: number): P => [p.ux * kv, -(p.uy - F34.g * t) * kv];
  return { apex, B, U: add(O, vAt(0)), apexTip: add(apex, vAt(p.T / 2)), landTip: add(B, vAt(p.T)) };
};
const fig34: Diagram = {
  id: 'p11-03-fig-3.4',
  topic: 3,
  name: 'Projectile: components, apex and range',
  cases: [{ chip: 'Launch to landing', cap: 'Projectile motion: launch velocity <i>u</i> at angle <i>θ</i> to the horizontal, with components <i>u</i> cos <i>θ</i> and <i>u</i> sin <i>θ</i>. At the apex (height <i>H</i>) the vertical component of velocity is zero and only <i>u</i> cos <i>θ</i> remains; <i>R</i> is the horizontal range, and the landing velocity mirrors the launch velocity.' }],
  draw() {
    const s = new Sketch(W, 236);
    const { O, th } = F34, p = pr34();
    const { apex, B, U, apexTip, landTip } = geo34();
    axis(s, [O[0] - 16, O[1]], [W - 16, O[1]], 'x', [W - 13, O[1] + 5]);
    axis(s, [O[0], O[1] + 26], [O[0], 44], 'y', [O[0] + 8, 52]);
    // the trajectory, from its equation
    const pts: P[] = [];
    for (let i = 0; i <= 90; i++) { const t = (p.T * i) / 90; pts.push(at34(p.x(t), p.y(t))); }
    path(s, pts, { color: C.mari, w: 2.4 });
    // launch velocity and its two components
    s.vec(O[0], O[1], U[0], O[1], { color: C.slate, w: 1.5, dash: true });
    s.vec(U[0], O[1], U[0], U[1], { color: C.slate, w: 1.5, dash: true });
    s.vec(O[0], O[1], U[0], U[1], { w: 2.1 });
    arc(s, O, 20, 0, th);
    s.sym(...add(polar(O, 31, th / 2), [1, 5]), '<i>θ</i>', { size: 14 });
    s.sym(U[0] - 10, U[1] - 6, '<i>u</i>', { size: 16, anchor: 'end' });
    s.sym(U[0] + 5, (O[1] + U[1]) / 2 + 9, '<i>u</i> sin <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym((O[0] + U[0]) / 2, O[1] + 17, '<i>u</i> cos <i>θ</i>', { size: 14, color: C.slate });
    // the apex: height H, velocity u cos θ only
    path(s, [apex, [apex[0], O[1]]], { color: C.slate, w: 1.2, dash: 'dash' });
    s.vec(apex[0], apex[1], apexTip[0], apexTip[1], { w: 2.1 });
    s.dot(apex[0], apex[1], 3.2);
    s.sym(apex[0] - 8, apex[1] - 10, '<i>v</i><sub><i>y</i></sub> = 0', { size: 14, anchor: 'end' });
    s.sym(apexTip[0] + 6, apex[1] + 5, '<i>u</i> cos <i>θ</i>', { size: 14, anchor: 'start' });
    s.sym(apex[0] + 7, (apex[1] + O[1]) / 2 + 9, '<i>H</i>', { size: 16, anchor: 'start' });
    // landing: the launch velocity mirrored
    s.vec(B[0], B[1], landTip[0], landTip[1], { w: 2.1 });
    s.dot(B[0], B[1], 3.2);
    s.dot(O[0], O[1], 3.2);
    s.sym(O[0] - 8, O[1] + 18, '<i>O</i>', { anchor: 'end' });
    s.sym(B[0] - 4, B[1] - 12, '<i>B</i>', { anchor: 'end' });
    // the range
    const ry = O[1] + 36;
    path(s, [[B[0], O[1] + 6], [B[0], ry + 6]], { color: C.grey, w: 1, dash: 'dot' });
    measure(s, [O[0], ry], [B[0], ry]);
    s.sym((O[0] + B[0]) / 2, ry + 20, '<i>R</i>', { size: 16 });
    s.place([
      { t: 'Apex', p: apex, at: [[apex[0] - 6, apex[1] - 54, 'end'], [apex[0] + 30, apex[1] - 50, 'start']] },
      { t: 'Trajectory', p: at34(p.x(p.T * 0.22), p.y(p.T * 0.22)), hi: true, at: [[O[0] + 22, 8, 'start'], [O[0] + 22, 20, 'start']] },
      { t: 'Landing velocity', p: [B[0] + (landTip[0] - B[0]) * 0.6, B[1] + (landTip[1] - B[1]) * 0.6], at: [[W - 8, ry + 14, 'end'], [W - 8, ry + 22, 'end']] },
    ]);
    return s;
  },
  check() {
    const { u, th, g, k, kv, O } = F34, p = pr34();
    const { apex, B, U, apexTip, landTip } = geo34();
    const launch = up(sub(U, O)), atTop = up(sub(apexTip, apex)), landing = up(sub(landTip, B));
    const Rdrawn = (B[0] - O[0]) / k, Hdrawn = (O[1] - apex[1]) / k;
    const tTop = p.uy / g, vyTop = p.uy - g * tTop;
    // the drawn landing velocity against the path's own slope at B
    const h = 1e-6, slope = (p.y(p.T) - p.y(p.T - h)) / (p.x(p.T) - p.x(p.T - h));
    return [
      [`Range drawn ${fmt(Rdrawn, 3)} m = u² sin 2θ/g = ${fmt((u * u * sin(2 * th)) / g, 3)} m`, close(Rdrawn, (u * u * sin(2 * th)) / g)],
      [`Apex drawn ${fmt(Hdrawn, 3)} m high = u² sin² θ/(2g) = ${fmt((u * sin(th)) ** 2 / (2 * g), 3)} m, at x = R/2`, close(Hdrawn, (u * sin(th)) ** 2 / (2 * g)) && close(apex[0] - O[0], (B[0] - O[0]) / 2)],
      [`Time of flight 2u sin θ/g = ${fmt(p.T, 3)} s: y(T) = 0 and x(T) = R`, close(p.y(p.T), 0, 1e-9) && close(p.x(p.T), p.R, 1e-9)],
      [`At the apex (t = T/2) v_y = ${fmt(vyTop)}: the arrow there is horizontal, ${fmt(atTop[0] / kv, 3)} m/s = u cos θ`, close(vyTop, 0) && close(tTop, p.T / 2) && close(atTop[1], 0) && close(atTop[0] / kv, u * cos(th))],
      [`The launch arrow is u = ${fmt(len(launch) / kv)} m/s at ${fmt(angleOf(sub(U, O)))}°; its components u cos θ = ${fmt(launch[0] / kv, 3)}, u sin θ = ${fmt(launch[1] / kv, 3)}`, close(len(launch) / kv, u) && close(angleOf(sub(U, O)), th) && close(launch[0] / kv, u * cos(th)) && close(launch[1] / kv, u * sin(th))],
      ['The drawn path is y = x tan θ − gx²/(2u² cos² θ)', [0.2, 0.5, 0.8].every((f) => { const t = p.T * f, x = p.x(t); return close(p.y(t), x * Math.tan(th * DEG) - (g * x * x) / (2 * u * u * cos(th) ** 2), 1e-9); })],
      [`Landing arrow (${fmt(landing[0] / kv)}, ${fmt(landing[1] / kv)}) m/s mirrors the launch (${fmt(launch[0] / kv)}, ${fmt(launch[1] / kv)}) and is tangent to the path at B`, close(landing[0], launch[0]) && close(landing[1], -launch[1]) && close(landing[1] / landing[0], slope, 1e-4)],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.5 · river crossing: minimum time, shortest path (topic 05)    */
/* ===================================================================== */
/** The book's proportions are Example 1's: d = 100 m, v_b = 5 m/s, v_r = 3 m/s. */
const RIV = { d: 100, vb: 5, vr: 3, top: 54, bot: 246, kv: 22 };
type Case35 = { chip: string; cap: string; part: 'time' | 'path' };
const geo35 = (part: 'time' | 'path') => {
  const { d, vb, vr, top, bot, kv } = RIV, kd = (bot - top) / d;
  const S: P = part === 'time' ? [104, bot] : [196, bot];
  const th = part === 'path' ? Math.asin(vr / vb) / DEG : 0; // heading upstream of straight across
  const head: P = [-vb * sin(th), vb * cos(th)]; // the boat's velocity relative to the water (physics x, y)
  const ground: P = [head[0] + vr, head[1]];
  const tCross = d / ground[1], drift = ground[0] * tCross;
  const tip = (v: P): P => [S[0] + v[0] * kv, S[1] - v[1] * kv];
  const land: P = [S[0] + drift * kd, top];
  return { S, th, head, ground, tCross, drift, kd, vbTip: tip(head), vgTip: tip(ground), land };
};
const fig35: Diagram = {
  id: 'p11-03-fig-3.5',
  topic: 4,
  name: 'River crossing: least time or shortest path',
  cases: [
    { chip: 'Minimum time', part: 'time', cap: 'River crossing. Left: minimum time, with the boat heading straight across, so the resultant (ground) velocity is tilted downstream and the boat drifts.' },
    { chip: 'Shortest path', part: 'path', cap: 'Right: shortest path, with the boat heading upstream at angle <i>θ</i> so the resultant points straight across. <i>d</i> is the river width.' },
  ],
  draw(c: Case35) {
    const s = new Sketch(W, 290);
    const { top, bot } = RIV, g = geo35(c.part);
    // banks and width
    s.line(12, top, W - 10, top, { w: 2.2 });
    s.line(12, bot, W - 10, bot, { w: 2.2 });
    measure(s, [24, top + 4], [24, bot - 4], C.ink);
    s.sym(34, (top + bot) / 2 + 5, '<i>d</i>', { size: 16, anchor: 'start' });
    // the current: a row of small grey arrows, downstream (to the right)
    const cy = top + 100, cx0 = 240;
    for (let x = cx0; x < W - 24; x += 24) s.vec(x, cy, x + 14, cy, { color: C.grey, w: 1.3 });
    s.sym(W - 12, cy - 12, 'current <i>v</i><sub><i>r</i></sub>', { size: 14, color: C.slate, anchor: 'end' });
    // the ground path on to the far bank
    path(s, [g.vgTip, g.land], { color: C.slate, w: 1.3, dash: 'dash' });
    if (c.part === 'path') {
      arc(s, g.S, 34, 90, 90 + g.th);
      s.sym(...add(polar(g.S, 48, 90 + g.th / 2), [0, 5]), '<i>θ</i>', { size: 15 });
    }
    s.vec(g.S[0], g.S[1], g.vbTip[0], g.vbTip[1], { w: 2.1 });
    s.vec(g.S[0], g.S[1], g.vgTip[0], g.vgTip[1], { color: C.mari, w: 2.6 });
    s.dot(g.S[0], g.S[1], 3.2);
    s.dot(g.land[0], g.land[1], 3.2);
    if (c.part === 'time') {
      s.sym(g.vbTip[0] - 8, (g.S[1] + g.vbTip[1]) / 2 + 10, '<i>v</i><sub><i>b</i></sub>', { size: 16, anchor: 'end' });
      s.sym(g.S[0] + (g.vgTip[0] - g.S[0]) * 0.55 + 12, g.S[1] + (g.vgTip[1] - g.S[1]) * 0.55 + 8, '<i>v</i><sub>ground</sub>', { size: 16, anchor: 'start' });
    } else {
      s.sym(g.vbTip[0] - 6, g.vbTip[1] + 2, '<i>v</i><sub><i>b</i></sub>', { size: 16, anchor: 'end' });
      s.sym(g.vgTip[0] + 8, (g.S[1] + g.vgTip[1]) / 2 + 10, '<i>v</i><sub>ground</sub>', { size: 16, anchor: 'start' });
    }
    const gMid: P = [g.S[0] + (g.vgTip[0] - g.S[0]) * 0.3, g.S[1] + (g.vgTip[1] - g.S[1]) * 0.3];
    s.place([
      { t: 'Ground velocity', p: gMid, hi: true, at: [[W - 8, bot + 14, 'end'], [g.S[0] + 30, bot + 14, 'start']] },
      { t: c.part === 'time' ? 'Lands downstream' : 'Lands directly opposite', p: g.land, at: [[g.land[0] - 10, 10, 'end'], [g.land[0] + 10, 10, 'start'], [W - 8, 10, 'end']] },
      { t: 'Boat', p: g.S, at: [[g.S[0] - 40, bot + 14, 'end'], [44, bot + 14, 'start']] },
    ]);
    return s;
  },
  check(c: Case35) {
    const { d, vb, vr, top, bot, kv } = RIV, g = geo35(c.part);
    const head = up(sub(g.vbTip, g.S)).map((v) => v / kv) as P, ground = up(sub(g.vgTip, g.S)).map((v) => v / kv) as P;
    const driftDrawn = (g.land[0] - g.S[0]) / g.kd, widthDrawn = (bot - top) / g.kd;
    const out: Check[] = [
      [`Ground velocity = boat velocity + current: (${fmt(ground[0])}, ${fmt(ground[1])}) = (${fmt(head[0])} + ${vr}, ${fmt(head[1])})`, close(ground[0], head[0] + vr) && close(ground[1], head[1])],
      [`The boat's own speed is ${fmt(len(head))} m/s`, close(len(head), vb)],
      [`The river is ${fmt(widthDrawn)} m wide`, close(widthDrawn, d)],
      ['The dashed path runs on along the ground velocity to the far bank', close((g.land[0] - g.vgTip[0]) * ground[1], (g.vgTip[1] - g.land[1]) * ground[0], 1e-6)],
    ];
    if (c.part === 'time')
      return [
        ...out,
        ['Heading straight across: the boat velocity has no along-river part', close(head[0], 0)],
        [`t = d/v_b = ${fmt(g.tCross)} s; drift = v_r t = v_r d/v_b = ${fmt(driftDrawn)} m (as drawn)`, close(g.tCross, d / vb) && close(driftDrawn, (vr * d) / vb) && close(driftDrawn, 60)],
        [`v_ground = √(v_b² + v_r²) = ${fmt(len(ground), 3)} m/s, tilted ${fmt(Math.atan2(ground[0], ground[1]) / DEG)}° downstream`, close(len(ground), Math.sqrt(vb * vb + vr * vr)) && ground[0] > 0],
      ];
    return [
      ...out,
      [`Heading upstream at θ = ${fmt(g.th)}° from straight across: sin θ = v_r/v_b = ${fmt(vr / vb)}`, close(sin(g.th), vr / vb) && head[0] < 0],
      ['The upstream part cancels the current: the resultant points straight across, no drift', close(ground[0], 0) && close(driftDrawn, 0)],
      [`v_across = √(v_b² − v_r²) = ${fmt(ground[1])} m/s, t = d/v_across = ${fmt(g.tCross)} s, longer than d/v_b = ${fmt(d / vb)} s`, close(ground[1], Math.sqrt(vb * vb - vr * vr)) && g.tCross > d / vb],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.6 · centripetal acceleration from the velocity triangle       */
/* ===================================================================== */
/** A particle going clockwise round O; P and Q 40° apart (the book's "small" Δθ, drawn large to be seen). */
const F36 = { O: [170, 186] as P, r: 108, dth: 40, v: 46, T: [36, 168] as P, vBig: 168 };
type Case36 = { chip: string; cap: string; part: 'circle' | 'triangle' };
const geo36 = () => {
  const { O, r, dth, v, T, vBig } = F36;
  const aP = 90 + dth / 2, aQ = 90 - dth / 2;
  const Pp = polar(O, r, aP), Q = polar(O, r, aQ);
  // clockwise motion: the velocity at angle φ points along φ − 90°
  const v1dir = aP - 90, v2dir = aQ - 90;
  return { aP, aQ, P: Pp, Q, v1dir, v2dir, v1tip: polar(Pp, v, v1dir), v2tip: polar(Q, v, v2dir), t1: polar(T, vBig, v1dir), t2: polar(T, vBig, v2dir) };
};
const fig36: Diagram = {
  id: 'p11-03-fig-3.6',
  topic: 5,
  name: 'Why the acceleration points to the centre',
  cases: [
    { chip: 'Left: the circle', part: 'circle', cap: 'Left: a particle moves on a circle of centre <i>O</i> from <i>P</i> to <i>Q</i>; the velocities <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> are tangent to the circle with equal speed <i>v</i>, and <i>OP</i> and <i>OQ</i> subtend a small angle Δ<i>θ</i>.' },
    { chip: 'Right: Δv', part: 'triangle', cap: 'Right: <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> drawn tail-to-tail with angle Δ<i>θ</i> between them; their difference Δ<i>v</i> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub> points toward <i>O</i>.' },
  ],
  draw(c: Case36) {
    const s = new Sketch(W, 312);
    const { O, r, T } = F36, g = geo36();
    if (c.part === 'circle') {
      s.add(`<circle cx="${O[0]}" cy="${O[1]}" r="${r}" fill="none" stroke="${C.grey}" stroke-width="1.4"/>`);
      // the stretch of the circle the particle covers, P to Q, clockwise
      arc(s, O, r, g.aP, g.aQ, { color: C.mari, w: 2.6 });
      const m1 = polar(O, r, 92), m0 = polar(O, r, 88);
      s.mid(m1[0], m1[1], m0[0], m0[1], C.mari);
      s.vec(O[0], O[1], g.P[0], g.P[1], { color: C.slate, w: 1.5 });
      s.vec(O[0], O[1], g.Q[0], g.Q[1], { color: C.slate, w: 1.5 });
      arc(s, O, 28, g.aQ, g.aP);
      s.sym(O[0], O[1] - 38, 'Δ<i>θ</i>', { size: 15 });
      s.vec(g.P[0], g.P[1], g.v1tip[0], g.v1tip[1], { w: 2.1 });
      s.vec(g.Q[0], g.Q[1], g.v2tip[0], g.v2tip[1], { w: 2.1 });
      s.dot(O[0], O[1], 3.2);
      s.dot(g.P[0], g.P[1], 3.2);
      s.dot(g.Q[0], g.Q[1], 3.2);
      s.sym(O[0] + 6, O[1] + 18, '<i>O</i>', { anchor: 'start' });
      s.sym(g.P[0] - 8, g.P[1] - 6, '<i>P</i>', { anchor: 'end' });
      s.sym(g.Q[0] + 6, g.Q[1] + 16, '<i>Q</i>', { anchor: 'start' });
      s.sym(g.v1tip[0] - 2, g.v1tip[1] - 9, '<i>v</i><sub>1</sub>', { size: 16, anchor: 'middle' });
      s.sym(g.v2tip[0] + 6, g.v2tip[1] + 5, '<i>v</i><sub>2</sub>', { size: 16, anchor: 'start' });
      s.place([{ t: 'Path from P to Q', p: polar(O, r, 100), hi: true, at: [[12, 8, 'start'], [12, 36, 'start']] }]);
      return s;
    }
    // the velocity triangle, kept in the circle's orientation so "toward O" reads straight off it
    arc(s, T, 46, g.v2dir, g.v1dir);
    s.sym(T[0] + 60, T[1] + 5, 'Δ<i>θ</i>', { size: 15, anchor: 'start' });
    s.vec(T[0], T[1], g.t1[0], g.t1[1], { w: 2.1 });
    s.vec(T[0], T[1], g.t2[0], g.t2[1], { w: 2.1 });
    s.vec(g.t1[0], g.t1[1], g.t2[0], g.t2[1], { color: C.mari, w: 2.6 });
    s.dot(T[0], T[1], 3);
    keepClear(s, g.t1);
    keepClear(s, g.t2);
    const m1 = polar(T, F36.vBig * 0.5, g.v1dir), m2 = polar(T, F36.vBig * 0.5, g.v2dir);
    s.sym(m1[0] - 2, m1[1] - 12, '<i>v</i><sub>1</sub>', { size: 16 });
    s.sym(m2[0] - 2, m2[1] + 24, '<i>v</i><sub>2</sub>', { size: 16 });
    s.sym(g.t1[0] - 9, (g.t1[1] + g.t2[1]) / 2 + 5, 'Δ<i>v</i>', { size: 16, anchor: 'end', color: C.amber });
    s.place([{ t: 'Points toward O', p: [g.t1[0], (g.t1[1] + g.t2[1]) / 2], hi: true, at: [[W - 8, (g.t1[1] + g.t2[1]) / 2 - 11, 'end'], [W - 8, (g.t1[1] + g.t2[1]) / 2 + 14, 'end']] }]);
    return s;
  },
  check(c: Case36) {
    const { O, r, dth, v, T, vBig } = F36, g = geo36();
    const v1 = up(sub(g.v1tip, g.P)), v2 = up(sub(g.v2tip, g.Q)), rP = up(sub(g.P, O)), rQ = up(sub(g.Q, O));
    const dot = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
    const between = Math.acos(dot(rP, rQ) / (len(rP) * len(rQ))) / DEG;
    if (c.part === 'circle')
      return [
        ['P and Q are on the circle', close(len(rP), r) && close(len(rQ), r)],
        [`OP and OQ subtend Δθ = ${fmt(between)}°`, close(between, dth)],
        ['v₁ and v₂ are tangent (at right angles to OP and OQ)', close(dot(v1, rP), 0, 1e-6) && close(dot(v2, rQ), 0, 1e-6)],
        ['They have equal speed v', close(len(v1), v) && close(len(v2), v)],
        ['Both point the same way round (clockwise, P towards Q)', rP[0] * v1[1] - rP[1] * v1[0] < 0 && rQ[0] * v2[1] - rQ[1] * v2[0] < 0 && g.Q[0] > g.P[0]],
      ];
    const a = up(sub(g.t1, T)), b = up(sub(g.t2, T)), dv = up(sub(g.t2, g.t1));
    const ang = Math.acos(dot(a, b) / (len(a) * len(b))) / DEG;
    // the centre seen from the middle of the arc PQ
    const toO = up(sub(O, polar(O, r, 90)));
    const along = dot(dv, toO) / (len(dv) * len(toO));
    const exact = 2 * vBig * sin(dth / 2), approx = vBig * dth * DEG;
    return [
      ['v₁ and v₂ are drawn tail to tail, each in its own direction from the circle and of equal length', close(angleOf(sub(g.t1, T)), g.v1dir) && close(angleOf(sub(g.t2, T)), g.v2dir) && close(len(a), len(b))],
      [`The angle between them is Δθ = ${fmt(ang)}°, the same as at O`, close(ang, dth)],
      ['Δv = v₂ − v₁ closes the triangle from v₁’s tip to v₂’s tip', close(dv[0], b[0] - a[0]) && close(dv[1], b[1] - a[1])],
      [`Δv points straight at O from the middle of the arc (cosine ${fmt(along, 6)})`, close(along, 1, 1e-9)],
      [`|Δv| = 2v sin(Δθ/2) = ${fmt(len(dv) / vBig, 4)} v, near v Δθ = ${fmt(approx / vBig, 4)} v; the two meet as Δθ → 0`, close(len(dv), exact) && [10, 1, 0.1].every((d, i, all) => { const ratio = (2 * sin(d / 2)) / (d * DEG); return ratio < 1 && (i === 0 || ratio > (2 * sin(all[i - 1] / 2)) / (all[i - 1] * DEG)); }) && Math.abs((2 * sin(0.05)) / (0.1 * DEG) - 1) < 1e-6],
    ];
  },
};

/* ===================================================================== */
/* Figure 3.7 · a car on a frictionless banked road (topic 06)            */
/* ===================================================================== */
/** Bank angle 30° (as the book draws it); mg drawn 84 px, so N = mg/cos θ. */
const F37 = { th: 30, G: [218, 150] as P, mg: 84, centreX: 30, body: [36, 16] as P };
const geo37 = () => {
  const { th, G, mg, centreX, body } = F37;
  const N = mg / cos(th);
  const n: P = [-sin(th), cos(th)]; // unit normal to the road, up and inward (physics)
  const t: P = [cos(th), sin(th)]; // along the road, up and outward
  const scr = (v: P, k: number): P => [G[0] + v[0] * k, G[1] - v[1] * k];
  // the road runs under the car's base
  const base = scr(n, -body[1] / 2);
  const roadA: P = [base[0] - t[0] * 150, base[1] + t[1] * 150], roadB: P = [base[0] + t[0] * 120, base[1] - t[1] * 120];
  // where the road crosses the horizontal through the car (for the angle mark)
  const crossX = base[0] + ((base[1] - G[1]) / t[1]) * t[0];
  return { N, n, t, Ntip: scr(n, N), NcTip: [G[0], G[1] - N * cos(th)] as P, NsTip: [G[0] - N * sin(th), G[1]] as P, mgTip: [G[0], G[1] + mg] as P, base, roadA, roadB, cross: [crossX, G[1]] as P, centre: [centreX, G[1]] as P };
};
const fig37: Diagram = {
  id: 'p11-03-fig-3.7',
  topic: 5,
  name: 'A car on a banked road',
  cases: [{ chip: 'Banked road', cap: 'A car on a frictionless banked road (side view, bank angle <i>θ</i>). The weight <i>mg</i> acts downward and the normal force <i>N</i> is perpendicular to the road; <i>N</i> cos <i>θ</i> balances <i>mg</i>, and <i>N</i> sin <i>θ</i> points toward the centre of the turn (distance <i>r</i> to the left), supplying the centripetal force.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { th, G, body } = F37, g = geo37();
    // the horizontal through the car, out to the centre of the turn
    path(s, [g.centre, [W - 14, G[1]]], { color: C.grey, w: 1.2, dash: 'dash' });
    s.line(...g.roadA, ...g.roadB, { w: 3 });
    arc(s, g.cross, 58, 0, th);
    s.sym(...add(polar(g.cross, 72, th / 2), [0, 5]), '<i>θ</i>', { size: 15 });
    // the car: a block sitting on the road, tilted with it
    const corners = ([[-1, 0], [1, 0], [1, 2], [-1, 2]] as P[]).map(([a, b]) => [g.base[0] + g.t[0] * a * (body[0] / 2) + g.n[0] * b * (body[1] / 2), g.base[1] - g.t[1] * a * (body[0] / 2) - g.n[1] * b * (body[1] / 2)] as P);
    s.add(`<path d="${corners.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ')} Z" fill="#fff" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round"/>`);
    // forces from the car's centre
    s.vec(G[0], G[1], g.NcTip[0], g.NcTip[1], { color: C.slate, w: 1.5, dash: true });
    s.vec(G[0], G[1], g.NsTip[0], g.NsTip[1], { color: C.slate, w: 1.5, dash: true });
    s.vec(G[0], G[1], g.mgTip[0], g.mgTip[1], { w: 2.1 });
    s.vec(G[0], G[1], g.Ntip[0], g.Ntip[1], { color: C.mari, w: 2.6 });
    s.dot(G[0], G[1], 2.8);
    s.dot(g.centre[0], g.centre[1], 3.4);
    keepClear(s, g.Ntip);
    keepClear(s, g.NcTip);
    keepClear(s, g.NsTip);
    s.sym(g.Ntip[0] - 6, g.Ntip[1] - 4, '<i>N</i>', { size: 17, anchor: 'end', color: C.amber });
    s.sym(g.NcTip[0] + 8, g.NcTip[1] + 6, '<i>N</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym(g.NsTip[0] - 4, G[1] - 9, '<i>N</i> sin <i>θ</i>', { size: 14, color: C.slate, anchor: 'end' });
    s.sym(g.mgTip[0] + 8, g.mgTip[1], '<i>mg</i>', { size: 16, anchor: 'start' });
    // the radius of the turn
    const ry = 272;
    path(s, [[G[0], g.mgTip[1] + 6], [G[0], ry + 6]], { color: C.grey, w: 1, dash: 'dot' });
    path(s, [[g.centre[0], G[1] + 6], [g.centre[0], ry + 6]], { color: C.grey, w: 1, dash: 'dot' });
    measure(s, [g.centre[0], ry], [G[0], ry]);
    s.sym((g.centre[0] + G[0]) / 2, ry - 8, '<i>r</i>', { size: 16 });
    s.place([
      { t: 'Normal force', p: polar(G, len(sub(g.Ntip, G)) * 0.62, 90 + th), hi: true, at: [[g.Ntip[0] - 30, 10, 'end'], [12, 40, 'start']] },
      { t: 'Centre of turn', p: g.centre, at: [[g.centre[0] - 6, G[1] - 46, 'start'], [g.centre[0] - 6, G[1] + 16, 'start']] },
      { t: 'Banked road', p: add(g.roadB, [-22 * g.t[0], 22 * g.t[1]]), at: [[W - 8, 30, 'end'], [W - 8, 8, 'end']] },
      { t: 'Car', p: corners[2], own: corners[2], at: [[G[0] + 34, G[1] - 64, 'start'], [G[0] + 40, G[1] - 50, 'start']] },
    ]);
    return s;
  },
  check() {
    const { th, G, mg } = F37, g = geo37();
    const N = up(sub(g.Ntip, G)), Nc = up(sub(g.NcTip, G)), Ns = up(sub(g.NsTip, G)), road = up(sub(g.roadB, g.roadA)), W8 = up(sub(g.mgTip, G));
    const dot = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
    const roadAngle = Math.atan2(road[1], road[0]) / DEG;
    return [
      [`The road is banked at θ = ${fmt(roadAngle)}°`, close(roadAngle, th)],
      ['N is perpendicular to the road', close(dot(N, road), 0, 1e-6)],
      ['N cos θ and N sin θ are N’s vertical and horizontal parts', close(Nc[0] + Ns[0], N[0]) && close(Nc[1] + Ns[1], N[1]) && close(len(Nc), len(N) * cos(th)) && close(len(Ns), len(N) * sin(th))],
      [`N cos θ balances mg (${fmt(len(Nc))} = ${fmt(len(W8))}), so N = mg/cos θ`, close(len(Nc), mg) && close(len(W8), mg) && Nc[1] > 0 && W8[1] < 0],
      ['N sin θ points from the car toward the centre of the turn', Ns[0] < 0 && g.centre[0] < G[0] && close(g.centre[1], G[1])],
      ['The road rises away from the centre (outer edge higher), so N tilts inward', road[1] > 0 && N[0] < 0],
      [`N sin θ / N cos θ = tan θ = ${fmt(Math.tan(th * DEG), 4)}: with N sin θ = mv²/r this is tan θ = v²/(rg)`, close(len(Ns) / len(Nc), Math.tan(th * DEG))],
    ];
  },
};

export const DIAGRAMS_PHYSICS_11_03: Diagram[] = [fig31, fig32, fig33, fig34, fig35, fig36, fig37];
