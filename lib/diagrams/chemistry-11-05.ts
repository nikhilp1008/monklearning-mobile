import { C, F, LABEL_GAP, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 5 (Chemical Thermodynamics): every drawing of
 * the Master Reference book, redrawn. Pages 213–250 were checked one by one on
 * the page images (p. 213 title, p. 214 contents and the start of Topic 01,
 * Topics 01–04 on pp. 214–238, the Additional Topics on pp. 239–250). The
 * chapter has ONE drawing: the P–V graph on p. 246, captioned "Figure 1"
 * inside Addendum E (app Additional topic E, topic index 8). Its number is the
 * addendum's own, not a chapter figure number "5.N", so it takes the
 * unnumbered id `c11-05-E-d1`, as Chapter 2's "Figure 1" (c11-02-B-d1) did.
 *
 * Judged NOT drawings (nothing to redraw): the four-processes table (p. 233),
 * the ΔH/ΔS four-case tables (pp. 227–228, 243), the Addendum P tables
 * (pp. 248–249); the typeset Born–Haber equations (pp. 223, 225) and the
 * lattice/hydration route "Ionic solid → gaseous ions → aqueous ions" with
 * its labels over the arrows (p. 234), which are equations, not pictures;
 * boxed answers and section rules. The text speaks of calorimeters, Hess
 * cycles, enthalpy diagrams and ΔG–T lines, but the book draws none of them.
 *
 * The graph is computed, never placed by eye. The book's own curves fix the
 * numbers: from the common initial state (V₁, p₁) the isotherm's end dot sits
 * at exactly half the starting pressure, so the expansion doubles the volume
 * (V₂ = 2V₁, as in worked example E1), and the adiabat's end dot at 0.3775 p₁,
 * which is 2^(−γ) with γ = 1.40 (a diatomic ideal gas); both curves run on to
 * about 2.3 V₁. So: isotherm pV = p₁V₁, adiabat pV^γ = p₁V₁^γ, and the
 * single-step path the constant external pressure p_ext = p₂ = p₁V₁/V₂ from V₁
 * to V₂. Work on the gas is w = −∫p_ext dV, the negative area under each
 * path. Each `check` reads the drawn lines back, recomputes the three works
 * (isothermal −p₁V₁ ln 2, single-step −p₂ΔV, adiabatic −(p₁V₁ − p′V₂)/(γ − 1)),
 * the ordering the caption states, worked example E1's numbers, and measures
 * that no tag or label touches a line it does not name.
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
/** ∫p dV along a path given as points (V, p), in order (trapezoids): the work done BY the gas; w on the gas is its negative. */
const areaAlong = (pts: P[]) => pts.slice(1).reduce((a, p, i) => a + ((p[1] + pts[i][1]) / 2) * (p[0] - pts[i][0]), 0);

/* ---------- drawing helpers (copied from the approved physics-11-11.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean };
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Every line a label must keep clear of, by sketch, with the name of the line. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
/** An open line through points, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke & { name?: string } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="7 5"' : ''}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) {
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
/** The result, bottom right, ink-edged, in Onest Bold; registered as a tag so the audit keeps everything else off it. */
function resultWords(s: Sketch, t: string, size = 13): Rect {
  const w = t.length * size * 0.6 + 30, h = size + 20, x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: t, rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  s.add(`<text x="${r1(x0 + w / 2)}" y="${r1(y0 + h / 2 + size * 0.36)}" text-anchor="middle" font-family="${F.bold}" font-size="${size}" fill="${C.text}">${esc(t)}</text>`);
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number; u0: number };
const X = (f: Frame, u: number) => f.ox + (u - f.u0) * f.sx;
const Y = (f: Frame, v: number) => f.oy - v * f.sy;
const at = (f: Frame, u: number, v: number): P => [X(f, u), Y(f, v)];
const uOf = (f: Frame, x: number) => (x - f.ox) / f.sx + f.u0;
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A function drawn as a smooth line, sampled finely; returns the drawn points. */
function curve(s: Sketch, f: Frame, fn: (u: number) => number, u0: number, u1: number, o: Stroke & { name?: string } = {}): P[] {
  const n = 260, pts: P[] = []; // 260 steps over 1 → 2.3 puts V₂ = 2 on a sample
  for (let i = 0; i <= n; i++) { const u = u0 + ((u1 - u0) * i) / n; pts.push(at(f, u, fn(u))); }
  path(s, pts, o);
  return pts;
}

/* ===================================================================== */
/* Addendum E, Figure 1 · P–V paths from a common initial state (p. 246)   */
/* ===================================================================== */
/**
 * In units of the initial state: V₁ = 1, p₁ = 1 (so p₁V₁ = nRT = 1). The book's
 * graph has no scale and no origin on its V axis (the axis starts a little
 * left of V₁); the pressure axis does start at p = 0, so the areas under the
 * paths (down to the V axis) are the works. Drawn the same way here.
 */
const S = { V1: 1, p1: 1, V2: 2, Vend: 2.3, g: 1.4 };
const iso = (V: number) => (S.p1 * S.V1) / V;
const adi = (V: number) => S.p1 * (S.V1 / V) ** S.g;
const p2 = iso(S.V2);
/** The V axis starts at V = 0.8 V₁ (the book's starts just left of V₁, at about 0.85 V₁). */
const FR: Frame = { ox: 40, oy: 290, sx: 165, sy: 228, u0: 0.8 };
const H = 350;
/** The caption, word for word from p. 246 ("Figure 1:" dropped; colour words matched to the drawing). */
const CAP = 'P–V paths from a common initial state: the reversible isotherm (marigold), the steeper reversible adiabat (black), and the single-step expansion against the final pressure (dashed). The work is the (negative) area under each path, so the reversible isothermal expansion extracts the most work.'
  .replace('P–V', '<i>P</i>–<i>V</i>');
const RESULT = 'Most work: reversible isotherm';

const figE1: Diagram = {
  id: 'c11-05-E-d1',
  topic: 8,
  name: 'Expansion paths on a P–V diagram',
  cases: [{ chip: 'Three paths', cap: CAP }],
  draw() {
    const s = new Sketch(W, H), f = FR, { V1, V2, Vend } = S;
    // axes: no ticks, as in the book
    const uTop = 2.62, vTop = 1.12;
    s.vec(f.ox, f.oy, X(f, uTop), f.oy, { color: C.grey, w: 1.3 });
    s.vec(f.ox, f.oy, f.ox, Y(f, vTop), { color: C.grey, w: 1.3 });
    s.sym(X(f, uTop) - 2, f.oy - 9, '<i>V</i>', { size: 15, anchor: 'end' });
    s.sym(f.ox + 9, Y(f, vTop) + 6, '<i>P</i>', { size: 15, anchor: 'start' });
    // the three paths
    path(s, [at(f, V1, p2), at(f, V2, p2)], { color: C.slate, w: 2.2, dash: true, name: 'single step' });
    curve(s, f, adi, V1, Vend, { w: 2.4, name: 'adiabat' });
    curve(s, f, iso, V1, Vend, { color: C.mari, w: 2.8, name: 'isotherm' });
    const st = at(f, V1, S.p1), ei = at(f, V2, iso(V2)), ea = at(f, V2, adi(V2));
    s.dot(st[0], st[1], 4);
    s.dot(ei[0], ei[1], 3.4, C.mari);
    s.dot(ea[0], ea[1], 3.4);
    // each path's rule, beside it
    s.sym(X(f, 2.06), Y(f, iso(2.06)) - 14, '<i>PV</i> = const', { size: 13.5, anchor: 'start', color: C.amber });
    s.sym(X(f, 2.02), Y(f, adi(2.02)) + 29, '<i>PV</i><sup><i>γ</i></sup> = const', { size: 13.5, anchor: 'start' });
    s.sym(X(f, 1.03), Y(f, p2) + 21, '<i>p</i><sub>ext</sub> = <i>p</i><sub>2</sub>', { size: 13.5, anchor: 'start', color: C.slate });
    const res = resultWords(s, RESULT);
    s.place([
      { t: 'Initial state', p: st, at: [[st[0] + 16, st[1] - 30, 'start'], [st[0] + 18, st[1] - 26, 'start']] },
      { t: 'Isothermal', hi: true, p: at(f, 1.45, iso(1.45)), at: [[X(f, 1.62), Y(f, 0.93), 'start'], [X(f, 1.6), Y(f, 0.9), 'start'], [X(f, 1.7), Y(f, 0.95), 'start']] },
      { t: 'Adiabatic', p: ea, own: ea, bare: true, at: [[X(f, 1.95), Y(f, 0.2), 'end'], [X(f, 1.95), Y(f, 0.17), 'end'], [X(f, 1.9), Y(f, 0.15), 'end']] },
      { t: 'Single step', p: at(f, 1.52, p2), bare: true, at: [[X(f, 0.85), Y(f, 0.28), 'start'], [X(f, 0.85), Y(f, 0.25), 'start'], [X(f, 0.92), Y(f, 0.17), 'start'], [X(f, 0.9), Y(f, 0.15), 'start'], [X(f, 0.95), Y(f, 0.2), 'start']] },
    ], [res]);
    return s;
  },
  check() {
    const s = figE1.draw(figE1.cases[0]), f = FR, { V1, p1, V2, Vend, g } = S, out: Check[] = [];
    const lines = LINES.get(s)!, got = (n: string) => lines.find((l) => l.name === n)!.pts.map(([x, y]): P => [uOf(f, x), vOf(f, y)]);
    const isoD = got('isotherm'), adiD = got('adiabat'), oneD = got('single step');
    // the curves are the gas laws
    out.push([`The drawn isotherm, read back at every point, keeps pV = p₁V₁ = ${fmt(p1 * V1)}`, isoD.every(([v, p]) => close(p * v, p1 * V1, 1e-9))]);
    out.push([`The drawn adiabat, read back at every point, keeps pV^γ = p₁V₁^γ with γ = ${g}`, adiD.every(([v, p]) => close(p * v ** g, p1 * V1 ** g, 1e-9))]);
    out.push(['Both curves start at the common initial state (V₁, p₁), marked by the ink dot', close(isoD[0][0], V1) && close(isoD[0][1], p1) && close(adiD[0][0], V1) && close(adiD[0][1], p1) && s.points.some((q) => close(q.x, X(f, V1)) && close(q.y, Y(f, p1)) && q.r === 4)]);
    // the book's drawn values
    out.push([`As the book draws it: the isotherm's end dot at p₂ = ${fmt(iso(V2), 4)} p₁ (so V₂ = 2V₁) and the adiabat's at ${fmt(adi(V2), 4)} p₁ (book 188/498 = 0.3775, so γ = −log₂ 0.3775 = ${fmt(-Math.log2(188 / 498), 3)} ≈ 1.4); both curves run on to ${Vend} V₁ (book 2.31)`, close(iso(V2), 0.5) && Math.abs(adi(V2) - 188 / 498) < 0.002 && Math.abs(-Math.log2(188 / 498) - g) < 0.01]);
    // steeper adiabat
    const h = 1e-6, sIso = (iso(V1 + h) - iso(V1 - h)) / (2 * h), sAdi = (adi(V1 + h) - adi(V1 - h)) / (2 * h);
    out.push([`At the initial state the isotherm's slope is −p/V = ${fmt(sIso, 4)} and the adiabat's −γp/V = ${fmt(sAdi, 4)}: the adiabat is γ = ${fmt(sAdi / sIso, 4)} times as steep`, close(sIso, -p1 / V1, 1e-5) && close(sAdi / sIso, g, 1e-5)]);
    out.push(['On expansion the adiabat falls below the isotherm at every V past V₁ (point 4 of the text)', samples(V1, Vend, 300).slice(1).every((v) => adi(v) < iso(v))]);
    // the single-step path
    out.push([`The dashed single-step path is level at p_ext = p₂ = p₁V₁/V₂ = ${fmt(p2, 4)}, from V₁ to V₂, ending on the isotherm's end dot (the same final state as the reversible isotherm)`, oneD.length === 2 && oneD.every(([, p]) => close(p, p2, 1e-9)) && close(oneD[0][0], V1, 1e-9) && close(oneD[1][0], V2, 1e-9) && close(oneD[1][1], iso(V2), 1e-9)]);
    // the works, as negative areas
    const upTo = (pts: P[]) => pts.filter(([v]) => v <= V2 + 1e-9);
    const wIso = -areaAlong(upTo(isoD)), wAdi = -areaAlong(upTo(adiD)), wOne = -areaAlong(oneD);
    const wIsoF = -p1 * V1 * Math.log(V2 / V1), wOneF = -p2 * (V2 - V1), wAdiF = -(p1 * V1 - adi(V2) * V2) / (g - 1);
    out.push([`w on the gas = −(area under the path) from V₁ to V₂: isothermal ${fmt(wIso, 4)} = −p₁V₁ ln 2 = ${fmt(wIsoF, 4)}; single step ${fmt(wOne, 4)} = −p₂ΔV = ${fmt(wOneF, 4)}; adiabatic ${fmt(wAdi, 4)} = −(p₁V₁ − p′V₂)/(γ − 1) = ${fmt(wAdiF, 4)} (units of p₁V₁)`, close(wIso, wIsoF, 2e-5) && close(wOne, wOneF, 1e-12) && close(wAdi, wAdiF, 2e-5) && close(simpson(iso, V1, V2), -wIsoF, 1e-9)]);
    out.push(['Every w is negative: the gas expands (ΔV > 0) and does work on the surroundings (IUPAC sign, w = −p_ext ΔV)', [wIso, wAdi, wOne].every((w) => w < 0)]);
    out.push([`So the reversible isothermal expansion extracts the most work: |w| = ${fmt(-wIso, 3)} > ${fmt(-wAdi, 3)} (adiabatic) > ${fmt(-wOne, 3)} (single step) p₁V₁, as the caption and the result say`, -wIso > -wAdi && -wIso > -wOne && s.tags.some((t) => t.name === RESULT)]);
    // worked example E1, the same doubling
    const R = 8.314, T = 300, a = -R * T * Math.log(2), b = -0.5 * R * T;
    out.push([`Worked example E1 (1 mol, 300 K, V doubled) has the drawn ratio: w_rev = −nRT ln 2 = ${fmt(a, 1)} J (book −1729), w_single = −½nRT = ${fmt(b, 1)} J (book −1247); ratio ${fmt(a / b, 4)} = ${fmt(wIso / wOne, 4)} as drawn`, Math.round(a) === -1729 && Math.round(b) === -1247 && close(a / b, wIso / wOne, 1e-4)]);
    // labels and caption
    const names = s.tags.map((t) => t.name);
    out.push(['Every path the book labels is named: initial state, isothermal (PV = const), adiabatic (PV^γ = const), single step (p_ext = p₂)', ['Initial state', 'Isothermal', 'Adiabatic', 'Single step'].every((t) => names.includes(t)) && ['PV = const', 'PVγ = const', 'pext = p2'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(['The marigold highlight is the isotherm, as the caption says; the adiabat is ink (black) and the single step dashed; the caption names no other colour', s.svg().includes(`stroke="${C.mari}" stroke-width="2.8"`) && s.svg().includes('stroke-dasharray') && !/navy|terracotta|orange|blue|green|red/.test(CAP) && CAP.includes('(marigold)') && CAP.includes('(black)') && CAP.includes('(dashed)')]);
    out.push(clearCheck(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_05: Diagram[] = [figE1];
