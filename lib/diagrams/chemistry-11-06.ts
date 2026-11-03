import { C, F, LABEL_GAP, RESULT_SIZE, Rect, Sketch, r1, resultW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 6 (Equilibrium): every drawing of the Master
 * Reference book, redrawn. Pages 251–294 were checked one by one on the page
 * images (p. 251 title, p. 252 contents and the start of book Sub-01; the five
 * sub-topics on pp. 252–283, printed in the order Sub-01, Sub-04, Sub-05,
 * Sub-02, Sub-03 and numbered Topics 01–05 in the app in that page order; the
 * Additional Topics on pp. 284–294). The chapter has THREE drawings:
 *
 *   Figure 6.1 (p. 254, "CHAPTER 6 · FIGURES" page; its caption is printed
 *     first on p. 253 with "(see next page)") — book Sub-01 = app Topic 01,
 *     topic index 0: c11-06-fig-6.1.
 *   Figure 6.2 (p. 273, figures page; caption first on p. 272) — book Sub-02
 *     = app Topic 04, topic index 3: c11-06-fig-6.2.
 *   "Figure 1" of Addendum B, the titration curves (p. 287) — app Additional
 *     topic B, topic index 6. Its number is the addendum's own, not a chapter
 *     figure number "6.N", so it takes the unnumbered id c11-06-B-d1 (as
 *     Chapter 2's addendum "Figure 1" became c11-02-B-d1).
 *
 * Judged NOT drawings: every table (units, Sub-05's summary of effects,
 * ICE tables, the sign map, the salt-type and hydrolysis tables, the four
 * landmarks, the distribution and the traps), the typeset equations, including
 * the conjugate-pair labels under HCl + H₂O ⇌ H₃O⁺ + Cl⁻ (p. 270) and the
 * stepwise H₃PO₄ arrows (p. 271), and the boxed answers. The text describes a
 * "valley" of Gibbs energy (p. 260) and Le Chatelier response, but the book
 * draws neither, so neither is redrawn.
 *
 * Everything is computed, never placed by eye:
 *   6.1 — the rates of a real reversible reaction A ⇌ B, first order each way
 *     (k_f = 0.6, k_r = 0.4 per unit time, so K = 1.5; [A]₀ = 1, [B]₀ = 0):
 *     [A](t) = (k_r + k_f e^(−kt))/k, k = k_f + k_r. The forward rate k_f[A]
 *     falls and the reverse rate k_r[B] rises to the same plateau
 *     k_f k_r/k; [B]/[A] there is K. The book's figure names no reaction and no
 *     numbers, so none is written on the drawing; K = 1.5 matches the book's
 *     proportions (the forward rate starts 1 + K = 2.5 times its plateau). t_eq
 *     is where the two rates differ by less than 0.5% of the starting forward
 *     rate (under 1 px here).
 *   6.2 — [H⁺] of 0.1 M acetic acid from Ka = 1.8 × 10⁻⁵ (Topic 04's own value,
 *     Examples 3–4, p. 275): √(Ka c) = 1.34 × 10⁻³ M alone, Ka[acid]/[salt] =
 *     1.8 × 10⁻⁵ M with 0.1 M acetate; bars on a true log scale.
 *   B — the exact pH of 25 mL of 0.1 M acid against 0.1 M NaOH from the charge
 *     balance (strong: [H⁺] − [OH⁻] = net acid; weak: [H⁺] + [Na⁺] = [A⁻] + [OH⁻],
 *     Ka = 1.74 × 10⁻⁵ as the addendum's table states), solved at each volume.
 *
 * Each `check` recomputes every plateau, K and pH the drawing or caption states,
 * and measures that no tag or label touches a line.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const lg = Math.log10;

/* ---------- drawing helpers (as in chemistry-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="7 5"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/** Every line a label must keep clear of, by sketch. Axes, ticks and grid lines are left out: their values sit on them. */
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
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
/** A tag whose line ends on a given curve: true when the tag exists and its dot lies on fn (in graph units). */
const tagOnCurve = (s: Sketch, f: Frame, name: string, fn: (u: number) => number, tol = 1e-9) => {
  const t = s.tags.find((g) => g.name === name);
  return !!t && !!t.from && close(vOf(f, t.from[1]), fn(uOf(f, t.from[0])), tol);
};

/* ===================================================================== */
/* Figure 6.1 · forward and reverse rates against time (Topic 01, p. 254) */
/* ===================================================================== */

/** A ⇌ B, first order each way: the rate constants (per unit time), K = kf/kr, and the start. */
const R61 = { kf: 0.6, kr: 0.4, A0: 1, B0: 0 };
const k61 = R61.kf + R61.kr;
const conA = (t: number) => { const { kr, A0, B0 } = R61, T = A0 + B0; return (kr * T) / k61 + (A0 - (kr * T) / k61) * Math.exp(-k61 * t); };
const conB = (t: number) => R61.A0 + R61.B0 - conA(t);
const rateF = (t: number) => R61.kf * conA(t);
const rateR = (t: number) => R61.kr * conB(t);
/** The share of the starting forward rate by which the two rates may still differ at t_eq. */
const EQ_TOL = 0.005;
/** t_eq: where rate_f − rate_r = kf A0 e^(−kt) falls to EQ_TOL of kf A0. */
const TEQ = Math.log(1 / EQ_TOL) / k61;
const T_END = 8.5;
const F61: Frame = { ox: 34, oy: 262, sx: (W - 16 - 34) / T_END, sy: 300 };
const CAP61 = 'Rates of the forward and reverse reactions versus time: the forward rate falls and the reverse rate rises until the two become equal at equilibrium, after which the concentrations stay constant.';

const fig61: Diagram = {
  id: 'c11-06-fig-6.1',
  topic: 0,
  name: 'Rates reaching equilibrium',
  cases: [{ chip: 'Rates vs time', cap: CAP61 }],
  draw() {
    const s = new Sketch(W, 300), f = F61;
    // axes
    s.vec(f.ox, f.oy, f.ox, 50, { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, W - 8, f.oy, { color: C.grey, w: 1.3 });
    s.sym(f.ox + 8, 50, 'rate', { size: 15, anchor: 'start' });
    s.sym(W - 8, f.oy + 22, 'time', { size: 15, anchor: 'end' });
    // t_eq on the axis, with a dashed guide up through the plateau
    s.line(X(f, TEQ), f.oy, X(f, TEQ), f.oy + 4, { color: C.grey, w: 1.2 });
    s.sym(X(f, TEQ), f.oy + 22, '<i>t</i><sub>eq</sub>', { size: 15 });
    path(s, [[X(f, TEQ), f.oy], [X(f, TEQ), 162]], { color: C.slate, w: 1.1, dash: 'dash' });
    // the two rates, then the equal plateau after t_eq as the highlight
    const ts = samples(0, T_END, 600);
    path(s, ts.map((t) => at(f, t, rateR(t))), { color: C.slate, w: 2, dash: 'dash' });
    path(s, ts.map((t) => at(f, t, rateF(t))), { w: 2.2 });
    path(s, samples(TEQ, T_END, 120).map((t) => at(f, t, rateF(t))), { color: C.mari, w: 2.8 });
    // what holds after t_eq
    s.sym(250, 116, 'rate<sub>forward</sub> = rate<sub>reverse</sub>', { size: 13 });
    s.sym(272, 224, 'concentrations', { size: 13, color: C.slate });
    s.sym(272, 241, 'now constant', { size: 13, color: C.slate });
    const tF = 0.7, tR = 1.0, tE = 7.0;
    s.place([
      { t: 'equilibrium', hi: true, p: at(f, tE, rateF(tE)), at: [[X(f, tE), 130, 'middle'], [X(f, tE) - 6, 130, 'middle'], [X(f, tE) + 4, 132, 'middle']] },
      { t: 'forward rate', p: at(f, tF, rateF(tF)), at: [[X(f, 0.8), 84, 'start'], [X(f, 0.75), 80, 'start'], [X(f, 0.85), 88, 'start']] },
      { t: 'reverse rate', p: at(f, tR, rateR(tR)), at: [[X(f, 1.6), 228, 'start'], [X(f, 1.8), 228, 'start'], [X(f, 1.4), 230, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = F61, s = fig61.draw({});
    const out: Check[] = [];
    const K = R61.kf / R61.kr, plateau = (R61.kf * R61.kr * R61.A0) / k61;
    // the concentrations obey the rate law: d[A]/dt = −kf[A] + kr[B], and A + B is conserved
    const ok = samples(0.01, T_END, 200).every((t) => { const h = 1e-6, d = (conA(t + h) - conA(t - h)) / (2 * h); return close(d, -rateF(t) + rateR(t), 1e-6) && close(conA(t) + conB(t), R61.A0 + R61.B0, 1e-12); });
    out.push(['[A](t) solves d[A]/dt = −k_f[A] + k_r[B] with [A] + [B] conserved, at every time tried', ok]);
    const ts = samples(0, T_END, 400);
    out.push([`The forward rate falls all the way (from ${fmt(rateF(0), 2)}) and the reverse rate rises all the way (from ${fmt(rateR(0), 2)})`, ts.every((t, i) => !i || (rateF(t) < rateF(ts[i - 1]) && rateR(t) > rateR(ts[i - 1]))) && rateR(0) === 0]);
    out.push([`Both rates head for the same plateau k_f k_r[A]₀/(k_f + k_r) = ${fmt(plateau, 3)}: at the axis end they are ${fmt(rateF(T_END), 4)} and ${fmt(rateR(T_END), 4)}`, close(rateF(1e3), plateau, 1e-12) && close(rateR(1e3), plateau, 1e-12) && Math.abs(rateF(T_END) - rateR(T_END)) < 1e-3]);
    out.push([`At the plateau [B]/[A] = ${fmt(conB(1e3) / conA(1e3), 4)} = K = k_f/k_r = ${fmt(K, 2)}; the forward rate starts 1 + K = ${fmt(rateF(0) / plateau, 2)} times its plateau (the book's figure ≈ 2.6)`, close(conB(1e3) / conA(1e3), K, 1e-9) && close(rateF(0) / plateau, 1 + K, 1e-12)]);
    const gapPx = (Y(f, rateR(TEQ)) - Y(f, rateF(TEQ)));
    out.push([`At t_eq = ${fmt(TEQ, 3)} the rates differ by ${fmt((rateF(TEQ) - rateR(TEQ)) / rateF(0) * 100, 2)}% of the starting forward rate, ${fmt(gapPx, 2)} px on the drawing: equal to the eye`, close((rateF(TEQ) - rateR(TEQ)) / rateF(0), EQ_TOL, 1e-12) && gapPx <= 1]);
    out.push([`After t_eq the concentrations stay constant: [A] changes by under ${fmt(Math.abs(conA(TEQ) - conA(1e3)) * 100, 2)}% of [A]₀ (net rate under ${fmt(EQ_TOL * 100, 1)}% of the start)`, Math.abs(conA(TEQ) - conA(1e3)) / R61.A0 < 0.005]);
    const tEq = s.labels.find((l) => l.text === 'teq');
    out.push(['t_eq is written under the axis where the dashed guide stands', !!tEq && close(uOf(f, (tEq.rect[0] + tEq.rect[2]) / 2), TEQ, 1e-9)]);
    out.push(['Each rate’s tag line ends on its own curve, and “equilibrium” on the plateau after t_eq', tagOnCurve(s, f, 'forward rate', rateF) && tagOnCurve(s, f, 'reverse rate', rateR) && tagOnCurve(s, f, 'equilibrium', rateF) && uOf(f, s.tags.find((t) => t.name === 'equilibrium')!.from![0]) > TEQ]);
    const conc = s.labels.filter((l) => /concentrations|now constant/.test(l.text));
    out.push(['“concentrations now constant” sits wholly after t_eq, under the plateau', conc.length === 2 && conc.every((l) => uOf(f, l.rect[0]) > TEQ && l.rect[1] > Y(f, plateau))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 6.2 · [H⁺] with and without the common ion (Topic 04, p. 273)   */
/* ===================================================================== */

/** Acetic acid (Topic 04's Examples 3–4): Ka, the acid, and the sodium acetate added. */
const A62 = { Ka: 1.8e-5, c: 0.1, salt: 0.1 };
/** [H⁺] as the book computes it: √(Ka c) alone (Ostwald, α ≪ 1); Ka[acid]/[salt] in the buffer. */
const H_ALONE = Math.sqrt(A62.Ka * A62.c);
const H_BUF = (A62.Ka * A62.c) / A62.salt;
/** The exact values, from the quadratics x²/(c − x) = Ka and x(s + x)/(c − x) = Ka. */
const quad = (b: number, cc: number) => (-b + Math.sqrt(b * b + 4 * cc)) / 2;
const H_ALONE_X = quad(A62.Ka, A62.Ka * A62.c);
const H_BUF_X = quad(A62.salt + A62.Ka, A62.Ka * A62.c);
/** Log axis: v = log10[H⁺], from −6 (the axis) to −1. */
const F62: Frame = { ox: 60, oy: 290, sx: 1, sy: 46 };
const V_MIN = -6;
const yLog = (c: number) => Y(F62, lg(c) - V_MIN);
const BARS = [{ x: 132, c: H_ALONE, val: '1.34 × 10<sup>−3</sup> M', cat: ['0.1 M acetic acid', 'alone'] }, { x: 262, c: H_BUF, val: '1.8 × 10<sup>−5</sup> M', cat: ['0.1 M acetic acid', '+ 0.1 M sodium acetate'] }];
const BAR_W = 66;
const CAP62 = '[H<sup>+</sup>] in 0.1 M acetic acid alone (1.34 × 10<sup>−3</sup> M) and in 0.1 M acetic acid containing 0.1 M sodium acetate (1.8 × 10<sup>−5</sup> M): the common ion suppresses [H<sup>+</sup>] about 74-fold.';
/** The suppression arrow: a quadratic curve from above the first bar's value to above the second's. */
const ARC: [P, P, P] = [[150, 108], [236, 92], [254, 196]];
const bez = (t: number): P => { const [a, b, c] = ARC, u = 1 - t; return [u * u * a[0] + 2 * u * t * b[0] + t * t * c[0], u * u * a[1] + 2 * u * t * b[1] + t * t * c[1]]; };

const RESULT62 = '≈ 74-fold';
const RESULT_GAP = 4;
/** The kit's result tag (ink edge, Onest Bold), set at a given spot instead of the bottom-right corner: right edge x1, top y. Registered as a tag so the audit sees it. */
function resultAt(s: Sketch, x1: number, y: number, t: string) {
  const w = resultW(t), x0 = x1 - w;
  s.tags.push({ name: t, rect: [x0, y, x1, y + 30], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y)}" width="${r1(w)}" height="30" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/><text x="${r1(x0 + w / 2)}" y="${r1(y + 20)}" text-anchor="middle" font-family="${F.bold}" font-size="${RESULT_SIZE}" fill="${C.text}">${t}</text>`);
}

const fig62: Diagram = {
  id: 'c11-06-fig-6.2',
  topic: 3,
  name: 'Common-ion suppression of [H⁺]',
  cases: [{ chip: 'Log scale', cap: CAP62 }],
  draw() {
    const s = new Sketch(W, 352), f = F62;
    // grid at each decade, minor log ticks, the axes
    for (let d = 0; d <= 5; d++) if (d) s.line(f.ox, Y(f, d), W - 10, Y(f, d), { color: C.grey, w: 0.7 });
    for (let d = 0; d < 5; d++) for (let m = 2; m <= 9; m++) s.line(f.ox - 2.5, Y(f, d + lg(m)), f.ox, Y(f, d + lg(m)), { color: C.grey, w: 0.9 });
    s.line(f.ox, f.oy, f.ox, Y(f, 5), { color: C.grey, w: 1.3 });
    s.line(f.ox, f.oy, W - 10, f.oy, { color: C.grey, w: 1.3 });
    vTicks(s, f, [0, 1, 2, 3, 4, 5].map((d): Tick => [d, `10<sup>−${6 - d}</sup>`]));
    s.sym(14, 34, '[H<sup>+</sup>] (mol L<sup>−1</sup>, log scale)', { size: 14, anchor: 'start' });
    // the bars (outlines), their values, their names under the axis
    BARS.forEach((b) => {
      const top = yLog(b.c), x0 = b.x - BAR_W / 2, x1 = b.x + BAR_W / 2;
      path(s, [[x0, f.oy], [x0, top], [x1, top], [x1, f.oy]], { w: 1.8 });
      s.line(b.x, f.oy, b.x, f.oy + 4, { color: C.grey, w: 1.2 });
      s.sym(b.x, top - 9, b.val, { size: 14 });
      b.cat.forEach((t, i) => s.sym(b.x, f.oy + 20 + 16 * i, t, { size: 12.5, color: C.slate }));
    });
    // the suppression arrow, the highlight
    const arc = samples(0, 0.9, 60).map(bez);
    path(s, arc, { color: C.mari, w: 2.2 });
    s.vec(bez(0.9)[0], bez(0.9)[1], bez(1)[0], bez(1)[1], { color: C.mari, w: 2.2 });
    keep(s, [bez(0.9), bez(1)]);
    s.place([{ t: 'common-ion suppression', hi: true, p: bez(0.3), at: [[W - 12, 46, 'end'], [W - 16, 46, 'end'], [W - 20, 48, 'end']] }]);
    // the result sits directly under the arrow's tag (the book sets "common-ion suppression ≈ 74-fold" as one label on the arrow)
    const arrowTag = s.tags.find((t) => t.name === 'common-ion suppression');
    if (arrowTag) resultAt(s, arrowTag.rect[2], arrowTag.rect[3] + RESULT_GAP, RESULT62);
    return s;
  },
  check() {
    const f = F62, s = fig62.draw({});
    const out: Check[] = [];
    out.push([`Alone: [H⁺] = √(Ka c) = √(${A62.Ka.toExponential(1)} × ${A62.c}) = ${H_ALONE.toExponential(3)} M (the book's 1.34 × 10⁻³); exact quadratic ${H_ALONE_X.toExponential(3)} M`, Math.abs(H_ALONE - 1.34e-3) < 0.005e-3 && Math.abs(H_ALONE_X - 1.34e-3) / 1.34e-3 < 0.01]);
    out.push([`The approximation x ≪ c holds: α = ${fmt((H_ALONE / A62.c) * 100, 2)}% ≤ 5%`, H_ALONE / A62.c <= 0.05]);
    out.push([`With 0.1 M acetate: [H⁺] = Ka[acid]/[salt] = ${H_BUF.toExponential(2)} M (the book's 1.8 × 10⁻⁵); exact ${H_BUF_X.toExponential(3)} M`, close(H_BUF, 1.8e-5, 1e-12) && Math.abs(H_BUF_X - 1.8e-5) / 1.8e-5 < 0.001]);
    const ratio = H_ALONE / H_BUF, ratioPrinted = 1.34e-3 / 1.8e-5;
    out.push([`Suppression: ${H_ALONE.toExponential(3)}/${H_BUF.toExponential(1)} = ${fmt(ratio, 1)} (from the printed values ${fmt(ratioPrinted, 1)}): “about 74-fold”`, Math.abs(ratio - 74) < 1 && Math.abs(ratioPrinted - 74) < 0.5]);
    out.push([`pH alone ${fmt(-lg(H_ALONE), 2)} and with acetate ${fmt(-lg(H_BUF), 2)} (Topic 04 Examples 3–4: 2.87 and 4.74)`, Math.abs(-lg(H_ALONE) - 2.87) < 0.005 && Math.abs(-lg(H_BUF) - 4.74) < 0.005]);
    // the bars read back on the log axis
    out.push(['Each bar’s top reads back as its [H⁺] on the log axis, and decade lines sit one decade apart', BARS.every((b) => close(10 ** (vOf(f, yLog(b.c)) + V_MIN), b.c, 1e-12 * b.c)) && close(Y(f, 0) - Y(f, 1), f.sy, 1e-9)]);
    out.push([`The two tops are ${fmt(lg(ratio), 3)} decades apart (log 74 = ${fmt(lg(74), 3)})`, close(vOf(f, yLog(H_ALONE)) - vOf(f, yLog(H_BUF)), lg(ratio), 1e-9)]);
    const tg = s.tags.find((t) => t.name === 'common-ion suppression'), rs = s.tags.find((t) => t.name === RESULT62);
    out.push(['The result “≈ 74-fold” sits directly under the “common-ion suppression” tag on the arrow (right edges aligned, 4 px apart), not alone in a corner', !!tg && !!rs && close(rs.rect[1] - tg.rect[3], RESULT_GAP) && close(rs.rect[2], tg.rect[2])]);
    out.push(['The result says ≈ 74-fold, and the suppression arrow runs from the first bar down to the second', s.tags.some((t) => t.name === '≈ 74-fold') && ARC[0][0] < BARS[1].x && ARC[2][0] < BARS[1].x + BAR_W / 2 && ARC[2][0] > BARS[1].x - BAR_W / 2 && ARC[2][1] < yLog(H_BUF) - 22]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic B · titration curves (p. 287)                          */
/* ===================================================================== */

/** 25 mL of 0.1 M acid with 0.1 M NaOH; acetic acid's Ka from the addendum's table. */
const TB = { Va: 25, Ca: 0.1, Cb: 0.1, Ka: 1.74e-5, Kw: 1e-14 };
const pKa = -lg(TB.Ka);
const VEQ = (TB.Ca * TB.Va) / TB.Cb;
/** Strong acid: [H⁺] − Kw/[H⁺] = (CaVa − CbV)/(Va + V). */
function pHstrong(V: number) {
  const d = (TB.Ca * TB.Va - TB.Cb * V) / (TB.Va + V);
  const h = d >= 0 ? (d + Math.sqrt(d * d + 4 * TB.Kw)) / 2 : (2 * TB.Kw) / (-d + Math.sqrt(d * d + 4 * TB.Kw));
  return -lg(h);
}
/** Weak acid: [H⁺] + [Na⁺] = Ka C_T/(Ka + [H⁺]) + Kw/[H⁺], by bisection on log[H⁺] (the left side minus the right rises with [H⁺]). */
function pHweak(V: number) {
  const CT = (TB.Ca * TB.Va) / (TB.Va + V), Na = (TB.Cb * V) / (TB.Va + V);
  const g = (h: number) => h + Na - (TB.Ka * CT) / (TB.Ka + h) - TB.Kw / h;
  let lo = -15, hi = 0;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (g(10 ** m) > 0) hi = m; else lo = m; }
  return -(lo + hi) / 2;
}
/** Volumes to draw: fine everywhere, very fine through the jump. */
const VOLS = [...samples(0, 24.8, 300), ...samples(24.8, 25.2, 400).slice(1), ...samples(25.2, 50, 300).slice(1)];
const FB: Frame = { ox: 40, oy: 300, sx: (W - 14 - 40) / 50, sy: 18.6 };
const CAPB = 'Titration of 25 mL of 0.1 M acid with 0.1 M NaOH: strong acid (black) versus weak acid (marigold, p<i>K</i><sub>a</sub> = 4.76). Read off the weak acid’s higher start, its buffer region, the half-equivalence point at pH = p<i>K</i><sub>a</sub>, and its equivalence point above 7.';
/** The book's landmark values (the four-landmark table, p. 286). */
/** Where the strong tag's line meets the ink curve: on its own jump at pH 5, a hair before 25 mL. */
const V_S = (() => { let lo = 24, hi = 25; for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (pHstrong(m) < 5) lo = m; else hi = m; } return (lo + hi) / 2; })();
/** From here on the two curves agree within 0.05 pH (checked), so they are drawn as one edged run. */
const V_MERGE = 26;
const TAG_S = 'strong acid', TAG_W = 'weak acid';
const BOOK = { startStrong: 1.0, startWeak: 2.88, half: 4.76, eqWeak: 8.7, eqStrong: 7 };

const figB: Diagram = {
  id: 'c11-06-B-d1',
  topic: 6,
  name: 'Titration curves',
  cases: [{ chip: 'Strong vs weak', cap: CAPB }],
  draw() {
    const s = new Sketch(W, 352), f = FB;
    s.line(f.ox, f.oy, f.ox, Y(f, 14), { color: C.grey, w: 1.3 });
    s.line(f.ox, f.oy, X(f, 50), f.oy, { color: C.grey, w: 1.3 });
    vTicks(s, f, [0, 2, 4, 6, 8, 10, 12, 14].map((v): Tick => [v, String(v)]));
    hTicks(s, f, [0, 10, 20, 30, 40, 50].map((u): Tick => [u, String(u)]));
    s.sym(14, Y(f, 7) + 5, 'pH', { size: 14, anchor: 'start' });
    s.sym(X(f, 25), f.oy + 40, 'volume of 0.1 M NaOH added (mL)', { size: 13 });
    // the equivalence volume, dashed
    path(s, [[X(f, VEQ), f.oy], [X(f, VEQ), Y(f, 12.6)]], { color: C.grey, w: 1, dash: 'dash' });
    // Draw order: the strong acid (ink) whole, then the weak acid (the highlight) whole over it, so the
    // marigold curve and its own jump stay in sight; where the two run together after 25 mL the ink is
    // drawn wider underneath, edging the marigold, so that run reads as both curves.
    const after = VOLS.filter((v) => v >= V_MERGE);
    path(s, after.map((v) => at(f, v, pHstrong(v))), { w: 5.2, free: true });
    path(s, VOLS.map((v) => at(f, v, pHstrong(v))), { w: 2.1 });
    path(s, VOLS.map((v) => at(f, v, pHweak(v))), { color: C.mari, w: 2.4 });
    // the landmarks: each dot in its own curve's colour
    const half = at(f, VEQ / 2, pHweak(VEQ / 2)), eqW = at(f, VEQ, pHweak(VEQ)), eqS = at(f, VEQ, pHstrong(VEQ));
    s.dot(half[0], half[1], 3.4, C.mari);
    s.dot(eqW[0], eqW[1], 3.4, C.mari);
    s.dot(eqS[0], eqS[1], 3.4);
    s.sym(half[0], half[1] - 42, 'half-equivalence:', { size: 12.5, color: C.amber });
    s.sym(half[0], half[1] - 26, 'pH = p<i>K</i><sub>a</sub>', { size: 12.5, color: C.amber });
    s.sym(eqW[0] + 9, eqW[1] + 4.5, 'equivalence: pH = 8.7', { size: 12.5, anchor: 'start', color: C.amber });
    s.sym(eqS[0] + 9, eqS[1] + 4.5, 'equivalence: pH = 7', { size: 12.5, anchor: 'start' });
    // the strong tag sits in the empty lower right of the plot and names the ink jump at pH 5, where only the ink curve runs
    const vW = 2.5;
    s.place([
      { t: TAG_S, p: at(f, V_S, pHstrong(V_S)), at: [[X(f, 28), Y(f, 4.3), 'start'], [X(f, 29), Y(f, 4.3), 'start'], [X(f, 30), Y(f, 4.5), 'start']] },
      { t: TAG_W, hi: true, p: at(f, vW, pHweak(vW)), at: [[f.ox + 6, 36, 'start'], [f.ox + 4, 36, 'start'], [f.ox + 8, 38, 'start']] },
    ]);
    return s;
  },
  check() {
    const f = FB, s = figB.draw({});
    const out: Check[] = [];
    const sw = pHweak(0), ss = pHstrong(0), hf = pHweak(VEQ / 2), ew = pHweak(VEQ), es = pHstrong(VEQ);
    const cSalt = (TB.Ca * TB.Va) / (TB.Va + VEQ);
    out.push([`pKa = −log(1.74 × 10⁻⁵) = ${fmt(pKa, 3)}, the caption's 4.76`, Math.abs(pKa - 4.76) < 0.005]);
    out.push([`Strong acid starts at pH = −log 0.1 = ${fmt(ss, 3)}`, Math.abs(ss - BOOK.startStrong) < 0.001]);
    const alpha = 10 ** -sw / TB.Ca;
    out.push([`Weak acid starts at pH ${fmt(sw, 3)} (exact); the book's ½(pKa − log c) = ½(4.76 + 1) = 2.88; α = ${fmt(alpha * 100, 2)}% ≤ 5%, so the approximation holds; higher than the strong start`, Math.abs(sw - BOOK.startWeak) < 0.01 && Math.abs(0.5 * (pKa - lg(TB.Ca)) - BOOK.startWeak) < 0.005 && alpha <= 0.05 && sw > ss]);
    out.push([`Half-equivalence (${VEQ / 2} mL): pH ${fmt(hf, 3)} = pKa ${fmt(pKa, 3)} ([salt] = [acid])`, Math.abs(hf - pKa) < 0.005 && Math.abs(hf - BOOK.half) < 0.01]);
    const eqBook = 7 + 0.5 * (pKa + lg(cSalt));
    out.push([`Equivalence at ${VEQ} mL (0.1 × 25/0.1): weak acid pH ${fmt(ew, 3)} exact; 7 + ½(pKa + log c_salt) with c_salt = ${cSalt} M (log = ${fmt(lg(cSalt), 2)}) gives ${fmt(eqBook, 3)}, the book's 8.7, above 7`, Math.abs(ew - BOOK.eqWeak) < 0.05 && Math.abs(eqBook - BOOK.eqWeak) < 0.05 && Math.abs(ew - eqBook) < 0.01 && ew > 7]);
    out.push([`Strong acid at equivalence: pH ${fmt(es, 4)} = 7 (NaCl, no hydrolysis)`, Math.abs(es - BOOK.eqStrong) < 1e-6]);
    const excess = samples(26, 50, 100).every((v) => Math.abs(pHweak(v) - pHstrong(v)) < 0.01);
    out.push([`Excess base: the two curves agree within 0.01 pH from 26 mL on; at 50 mL pH = 14 + log(2.5/75) = ${fmt(pHstrong(50), 2)}`, excess && Math.abs(pHstrong(50) - (14 + lg(2.5 / 75))) < 1e-6]);
    // the jump: steepest at the equivalence volume for both
    const steep = (fn: (v: number) => number) => { const vs = samples(20, 30, 20000); let best = 0, at0 = 0; for (let i = 1; i < vs.length; i++) { const d = (fn(vs[i]) - fn(vs[i - 1])) / (vs[i] - vs[i - 1]); if (d > best) { best = d; at0 = vs[i]; } } return at0; };
    out.push(['Both curves are steepest at the equivalence volume, 25 mL', Math.abs(steep(pHstrong) - VEQ) < 0.01 && Math.abs(steep(pHweak) - VEQ) < 0.02]);
    // the buffer region is gentler than the strong acid's run? (book: "a gentle slope instead of the strong acid's flat run"): weak rises more from 2.5 to 22.5 mL
    out.push([`Buffer zone: from 2.5 to 22.5 mL the weak acid rises ${fmt(pHweak(22.5) - pHweak(2.5), 2)} pH units, the strong acid ${fmt(pHstrong(22.5) - pHstrong(2.5), 2)}`, pHweak(22.5) - pHweak(2.5) > pHstrong(22.5) - pHstrong(2.5)]);
    // the dots and the drawing
    const dotAt = (v: number, pH: number) => s.points.some((p) => close(uOf(f, p.x), v, 1e-9) && close(vOf(f, p.y), pH, 1e-9));
    out.push(['Dots stand on the half-equivalence point and both equivalence points', dotAt(VEQ / 2, hf) && dotAt(VEQ, ew) && dotAt(VEQ, es)]);
    const st = s.tags.find((t) => t.name === TAG_S);
    out.push([`The strong-acid tag line ends on the ink curve's own jump (${fmt(V_S, 4)} mL, pH ${fmt(pHstrong(V_S), 2)}), where the weak acid is ${fmt(pHweak(V_S) - pHstrong(V_S), 2)} pH units higher`, !!st && !!st.from && uOf(f, st.from[0]) < VEQ && Math.abs(pHstrong(V_S) - 5) < 1e-6 && pHweak(V_S) - pHstrong(V_S) > 2]);
    out.push(['The strong-acid tag sits inside the plot, in the empty part right of the dashed 25 mL line and below the equivalence labels', !!st && st.rect[0] > X(f, VEQ) + LABEL_GAP && st.rect[2] <= s.w && st.rect[3] < f.oy && st.rect[1] > Y(f, 7) + 6]);
    out.push(['Each curve’s tag line ends on its own curve', tagOnCurve(s, f, TAG_W, pHweak) && tagOnCurve(s, f, TAG_S, pHstrong)]);
    out.push([`From ${V_MERGE} mL the two curves agree within 0.05 pH, so that run is drawn as one ink-edged marigold line`, samples(V_MERGE, 50, 400).every((v) => Math.abs(pHweak(v) - pHstrong(v)) < 0.05)]);
    const svg = s.svg(), circ = (p: P, col: string) => svg.indexOf(`<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3.4" fill="${col}"/>`);
    const eW = at(f, VEQ, ew), eS = at(f, VEQ, es), hP = at(f, VEQ / 2, hf);
    out.push(['The weak acid’s dots (half-equivalence, equivalence at 8.7) are marigold, the strong acid’s equivalence dot ink', circ(eW, C.mari) >= 0 && circ(hP, C.mari) >= 0 && circ(eS, C.ink) >= 0]);
    const iS = svg.indexOf(`stroke="${C.ink}" stroke-width="2.1"`), iW = svg.indexOf(`stroke="${C.mari}" stroke-width="2.4"`);
    out.push(['The marigold weak-acid curve is drawn over the ink one, so its jump and equivalence dot stay in sight', iS >= 0 && iW > iS]);
    out.push(['The weak acid’s labels are in its colour (amber), the strong acid’s in ink', s.texts.filter((t) => /8\.7|half-equivalence|<i>K<\/i>/.test(t.html)).every((t) => t.color === C.amber) && s.texts.some((t) => t.html === 'equivalence: pH = 7' && t.color === C.text)]);
    const lab = (txt: string) => s.labels.find((l) => l.text === txt);
    out.push(['Each “equivalence” label sits level with its own dot, right of the dashed 25 mL line', [['equivalence: pH = 8.7', ew], ['equivalence: pH = 7', es]].every(([t, pH]) => { const l = lab(t as string); return !!l && Math.abs((l.rect[1] + l.rect[3]) / 2 - Y(f, pH as number)) < 6 && l.rect[0] > X(f, VEQ) + LABEL_GAP; })]);
    const hl = [lab('half-equivalence:'), lab('pH = pKa')];
    out.push(['“half-equivalence: pH = pKa” is set over its dot, clear of the curve', hl.every((l) => !!l && close((l.rect[0] + l.rect[2]) / 2, X(f, VEQ / 2), 1e-9) && l.rect[3] < Y(f, hf) - 6)]);
    out.push(['The caption names only the colours the drawing uses (black ink, marigold), not navy or terracotta', /black/.test(CAPB) && /marigold/.test(CAPB) && !/navy|terracotta/.test(CAPB)]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_06: Diagram[] = [fig61, fig62, figB];
