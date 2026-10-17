import { C, F, Rect, Sketch, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 11, CHAPTER 1 (Units and Measurements): the book's six
 * figures, redrawn. The chapter has no unnumbered drawings (pp. 8–74).
 *
 * Each diagram draws from computed geometry, and its `check` recomputes every
 * value the figure states: a unit really is the product its law makes, the
 * vernier line that coincides really is the one the zero error needs, a
 * rounded figure really is what the rule gives. The tests run every check and
 * the kit's layout audit on every case.
 */

const W = 340;

/* ---------- shared bits ---------- */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
type Edge = 'fine' | 'ink' | 'hi' | 'dash';
/** A white, rounded box; what it is shows only in its edge. */
function box(s: Sketch, x: number, y: number, w: number, h: number, edge: Edge = 'fine') {
  const stroke = edge === 'hi' ? C.mari : edge === 'ink' ? C.text : edge === 'dash' ? C.faint : C.border;
  const sw = edge === 'hi' ? 2 : edge === 'ink' ? 1.7 : 1.3;
  s.add(`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="12" fill="#fff" stroke="${stroke}" stroke-width="${sw}"${edge === 'dash' ? ' stroke-dasharray="5 4"' : ''}/>`);
  return [x, y, x + w, y + h] as Rect;
}
/** Words in Onest (names, headings): not maths, so straight into the SVG. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${o.anchor ?? 'middle'}" font-family="${o.bold ? F.bold : F.tag}" font-size="${o.size ?? 12}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}
/** Where the line from a rectangle's centre towards (tx, ty) leaves the rectangle. */
function edgePoint(r: Rect, tx: number, ty: number): [number, number] {
  const cx = (r[0] + r[2]) / 2, cy = (r[1] + r[3]) / 2, dx = tx - cx, dy = ty - cy;
  const k = Math.min(Math.abs((r[2] - r[0]) / 2 / (dx || 1e-9)), Math.abs((r[3] - r[1]) / 2 / (dy || 1e-9)));
  return [cx + dx * k, cy + dy * k];
}
function arrowBetween(s: Sketch, a: Rect, b: Rect, gap = 5, color: string = C.slate) {
  const bc: [number, number] = [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2], ac: [number, number] = [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
  const p = edgePoint(a, ...bc), q = edgePoint(b, ...ac), L = Math.hypot(q[0] - p[0], q[1] - p[1]), ux = (q[0] - p[0]) / L, uy = (q[1] - p[1]) / L;
  s.vec(p[0] + ux * gap, p[1] + uy * gap, q[0] - ux * gap, q[1] - uy * gap, { color, w: 1.4 });
}
/**
 * The result, bottom right, ink-edged, when it needs more than the kit's
 * one-line Onest tag: several lines, or maths (set in STIX by `Sketch.text`
 * so its letters keep their italics). Registered as a tag, so the audit keeps
 * everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { maths?: boolean; size?: number } = {}) {
  const size = o.size ?? (o.maths ? 15 : 13), lh = size + 6;
  const plain = (t: string) => t.replace(/<[^>]+>/g, '');
  const w = Math.max(...lines.map((t) => plain(t).length * size * (o.maths ? 0.5 : 0.58))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => {
    const y = y0 + 7 + lh * i + lh / 2 + size * 0.36;
    if (o.maths) s.text(x0 + w / 2, y, t, { size, semibold: true });
    else words(s, x0 + w / 2, y, t, { size, bold: true });
  });
  return [x0, y0, x0 + w, y0 + h] as Rect;
}
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

/* ===================================================================== */
/* Figure 1.1  Derived units are built from the seven SI base units       */
/* ===================================================================== */
type Dim = Record<string, number>;
const BASE7 = ['m', 'kg', 's', 'A', 'K', 'mol', 'cd'];
const mul = (...ds: Dim[]): Dim => {
  const o: Dim = {};
  ds.forEach((d) => Object.entries(d).forEach(([k, v]) => (o[k] = (o[k] ?? 0) + v)));
  Object.keys(o).forEach((k) => o[k] === 0 && delete o[k]);
  return o;
};
const pw = (d: Dim, n: number): Dim => Object.fromEntries(Object.entries(d).map(([k, v]) => [k, v * n]));
const sameDim = (a: Dim, b: Dim) => [...new Set([...Object.keys(a), ...Object.keys(b)])].every((k) => (a[k] ?? 0) === (b[k] ?? 0));
/** Reads a unit as the figure prints it ("kg·m<sup>2</sup>/s<sup>3</sup>", "kg/(m·s<sup>2</sup>)", "1/s") into powers of base units. */
function parseUnit(html: string): Dim {
  const t = html.replace(/<sup>([^<]+)<\/sup>/g, '^$1').replace(/<[^>]+>/g, '').replace(/−/g, '-');
  const side = (x: string, sign: number): Dim =>
    mul(
      ...x
        .replace(/[()]/g, '')
        .split('·')
        .filter((f) => f && f !== '1')
        .map((f) => { const [u, n] = f.split('^'); return { [u]: sign * (n ? Number(n) : 1) }; })
    );
  const [num, den = ''] = t.split('/');
  return mul(side(num, 1), side(den, -1));
}
const U = { m: { m: 1 }, kg: { kg: 1 }, s: { s: 1 }, A: { A: 1 } };
/* Each derived unit worked out from the law that defines it, not typed in. */
const LAWS: Record<string, Dim> = (() => {
  const speed = mul(U.m, pw(U.s, -1)), accel = mul(speed, pw(U.s, -1)), force = mul(U.kg, accel), energy = mul(force, U.m);
  return { charge: mul(U.A, U.s), speed, force, power: mul(energy, pw(U.s, -1)), pressure: mul(force, pw(U.m, -2)), frequency: pw(U.s, -1), energy };
})();
const LAW_TEXT: Record<string, string> = { charge: 'q = It', speed: 'v = d/t', force: 'F = ma', power: 'P = W/t', pressure: 'p = F/A', frequency: 'f = 1/T', energy: 'W = Fd' };
/** The seven boxes as the book prints them, in its places round the centre. */
const DERIVED: { name: string; unit: string; sym: string; at: Rect }[] = [
  { name: 'charge', unit: 'A·s', sym: 'C', at: [8, 14, 108, 64] },
  { name: 'speed', unit: 'm/s', sym: '', at: [120, 14, 220, 64] },
  { name: 'force', unit: 'kg·m/s<sup>2</sup>', sym: 'N', at: [232, 14, 332, 64] },
  { name: 'power', unit: 'kg·m<sup>2</sup>/s<sup>3</sup>', sym: 'W', at: [4, 118, 98, 168] },
  { name: 'pressure', unit: 'kg/(m·s<sup>2</sup>)', sym: 'Pa', at: [242, 118, 336, 168] },
  { name: 'frequency', unit: '1/s', sym: 'Hz', at: [4, 226, 104, 276] },
  { name: 'energy', unit: 'kg·m<sup>2</sup>/s<sup>2</sup>', sym: 'J', at: [121, 226, 219, 276] },
];
const CENTRE: Rect = [114, 106, 226, 180];
const SUPP: Rect = [228, 218, 336, 290];
const fig11: Diagram = {
  id: 'p11-01-fig-1.1',
  topic: 0,
  name: 'Seven base units, and what they build',
  cases: [{ chip: 'Base and derived', cap: 'Derived units are built from the seven SI base units (m, kg, s, A, K, mol, cd). The radian and steradian are supplementary, dimensionless units and are not base units.' }],
  draw() {
    const s = new Sketch(W, 300);
    box(s, CENTRE[0], CENTRE[1], CENTRE[2] - CENTRE[0], CENTRE[3] - CENTRE[1], 'hi');
    words(s, 170, CENTRE[1] + 22, '7 SI Base Units', { size: 12.5 });
    s.text(170, CENTRE[1] + 44, '(m, kg, s, A,', { size: 14 });
    s.text(170, CENTRE[1] + 62, 'K, mol, cd)', { size: 14 });
    DERIVED.forEach((d) => {
      const r = d.at, cx = (r[0] + r[2]) / 2;
      box(s, r[0], r[1], r[2] - r[0], r[3] - r[1]);
      words(s, cx, r[1] + 19, d.name, { size: 11, color: C.slate });
      s.text(cx, r[1] + 39, `${d.unit}${d.sym ? ` (${d.sym})` : ''}`, { size: 13.5 });
      arrowBetween(s, CENTRE, r, 4, C.grey);
    });
    // Not joined to the centre: the supplementary units are not built from the base seven.
    box(s, SUPP[0], SUPP[1], SUPP[2] - SUPP[0], SUPP[3] - SUPP[1], 'dash');
    const sx = (SUPP[0] + SUPP[2]) / 2;
    words(s, sx, SUPP[1] + 17, 'Supplementary units', { size: 10, color: C.slate });
    words(s, sx, SUPP[1] + 31, '(not base units):', { size: 10, color: C.slate });
    s.text(sx, SUPP[1] + 50, 'radian, steradian', { size: 13 });
    s.text(sx, SUPP[1] + 66, '(dimensionless)', { size: 13 });
    return s;
  },
  check() {
    const out: Check[] = DERIVED.map((d) => {
      const got = parseUnit(d.unit), want = LAWS[d.name];
      return [`${d.name} = ${d.unit.replace(/<[^>]+>/g, '')} is what ${LAW_TEXT[d.name]} makes of the base units`, sameDim(got, want)];
    });
    const named: Record<string, Dim> = { C: mul(U.A, U.s), N: LAWS.force, W: LAWS.power, Pa: LAWS.pressure, Hz: pw(U.s, -1), J: LAWS.energy };
    DERIVED.filter((d) => d.sym).forEach((d) => out.push([`(${d.sym}) is the named unit of ${d.name}`, sameDim(named[d.sym], parseUnit(d.unit))]));
    out.push(['Every derived unit uses only base units', DERIVED.every((d) => Object.keys(parseUnit(d.unit)).every((k) => BASE7.includes(k)))]);
    out.push(['Seven base units in the centre: m, kg, s, A, K, mol, cd', BASE7.length === 7 && new Set(BASE7).size === 7]);
    out.push(['Radian (m/m) and steradian (m²/m²) have no dimensions', sameDim(mul(U.m, pw(U.m, -1)), {}) && sameDim(mul(pw(U.m, 2), pw(U.m, -2)), {})]);
    return out;
  },
};

/* ===================================================================== */
/* Figure 1.2  Simple pendulum                                            */
/* ===================================================================== */
/** The book's drawing has the string about 20° from the vertical. */
const PEN = { P: [148, 40] as [number, number], L: 172, th: (20 * Math.PI) / 180, Wt: 100, bob: 14 };
const penGeo = () => {
  const { P, L, th, bob } = PEN;
  const u: [number, number] = [Math.sin(th), Math.cos(th)]; // along the string, away from the pivot
  const t: [number, number] = [-Math.cos(th), Math.sin(th)]; // along the arc, back towards the lowest point
  const B: [number, number] = [P[0] + L * u[0], P[1] + L * u[1]];
  const at = (d: [number, number]): [number, number] => [B[0] + bob * d[0], B[1] + bob * d[1]];
  return { u, t, B, at };
};
/** Dimensional analysis for t = C ℓ^a m^b g^c: the powers of M, L, T on each side. */
function pendulumPowers() {
  // [T] = [L]^a [M]^b [L T^-2]^c.  M: b = 0.  T: -2c = 1.  L: a + c = 0.
  const b = 0, c = -1 / 2, a = -c;
  const M = b, Lp = a + c, T = -2 * c;
  return { a, b, c, M, L: Lp, T };
}
const fig12: Diagram = {
  id: 'p11-01-fig-1.2',
  topic: 1,
  name: 'Simple pendulum',
  cases: [{ chip: 'Simple pendulum', cap: 'Simple pendulum of length <i>l</i>. The restoring component <i>mg</i> sin <i>θ</i> leads to the period <i>t</i> = <i>C</i>√(<i>l</i>/<i>g</i>), which does not depend on the mass <i>m</i>.' }],
  draw() {
    const s = new Sketch(W, 386);
    const { P, L, th, Wt, bob } = PEN, { u, t, B, at } = penGeo();
    // the support, the vertical, the string
    s.line(P[0] - 58, P[1], P[0] + 58, P[1], { w: 1.8 });
    for (let i = -52; i <= 48; i += 12) s.line(P[0] + i, P[1], P[0] + i + 9, P[1] - 9, { color: C.grey, w: 1.2 });
    s.line(P[0], P[1], P[0], B[1] + 6, { color: C.grey, dash: true, w: 1.2 });
    s.line(P[0], P[1], B[0] - u[0] * bob, B[1] - u[1] * bob, { w: 1.7 });
    const a0 = Math.PI / 2, a1 = Math.PI / 2 - th, ar = 52;
    s.add(`<path d="M${r1(P[0] + ar * Math.cos(a0))} ${r1(P[1] + ar * Math.sin(a0))} A${ar} ${ar} 0 0 0 ${r1(P[0] + ar * Math.cos(a1))} ${r1(P[1] + ar * Math.sin(a1))}" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`);
    s.sym(P[0] + 72 * Math.cos((a0 + a1) / 2), P[1] + 72 * Math.sin((a0 + a1) / 2) + 5, 'θ', { italic: true });
    const mid: [number, number] = [P[0] + (L * 0.45) * u[0], P[1] + (L * 0.45) * u[1]];
    s.sym(mid[0] + 14 * Math.cos(th), mid[1] - 14 * Math.sin(th) + 4, 'ℓ', { italic: true, anchor: 'start' });
    s.dot(P[0], P[1], 3.2);
    // the weight and its two components, each drawn from the bob's edge along its own line
    const g0 = at([0, 1]), c0 = at(u), s0 = at(t);
    const cosL = Wt * Math.cos(th), sinL = Wt * Math.sin(th);
    s.vec(c0[0], c0[1], c0[0] + cosL * u[0], c0[1] + cosL * u[1], { color: C.grey, dash: true, w: 1.5 });
    s.vec(g0[0], g0[1], g0[0], g0[1] + Wt);
    s.vec(s0[0], s0[1], s0[0] + sinL * t[0], s0[1] + sinL * t[1], { color: C.mari, w: 2.6 });
    s.point(B[0], B[1], bob, `<circle cx="${r1(B[0])}" cy="${r1(B[1])}" r="${bob}" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    s.text(B[0], B[1] + 5, '<i>m</i>', { size: 15 });
    const tip: [number, number] = [s0[0] + sinL * t[0], s0[1] + sinL * t[1]];
    s.sym(g0[0] + 10, g0[1] + Wt - 2, '<i>mg</i>', { anchor: 'start' });
    s.sym(c0[0] + cosL * u[0] + 6, c0[1] + cosL * u[1] + 16, '<i>mg</i> cos <i>θ</i>', { size: 14, color: C.slate, anchor: 'start' });
    s.sym(tip[0] - 6, tip[1] - 7, '<i>mg</i> sin <i>θ</i>', { size: 14, color: C.amber, anchor: 'end' });
    const res = resultBlock(s, ['<i>t</i> = <i>C</i>√(<i>ℓ</i>/<i>g</i>); mass <i>m</i> cancels out'], { maths: true });
    s.place([{ t: 'Restoring component', p: [tip[0] + 1, tip[1] - 1], own: tip, hi: true, at: [[12, 272, 'start'], [12, 290, 'start'], [12, 254, 'start']] }], [res]);
    return s;
  },
  check() {
    const { u, t, B } = penGeo(), { P, L, th } = PEN;
    const dot = (a: [number, number], b: [number, number]) => a[0] * b[0] + a[1] * b[1];
    const mg: [number, number] = [0, 1], cosPart = [u[0] * Math.cos(th), u[1] * Math.cos(th)], sinPart = [t[0] * Math.sin(th), t[1] * Math.sin(th)];
    const pw3 = pendulumPowers();
    return [
      [`The string is ℓ long and ${Math.round((th * 180) / Math.PI)}° from the vertical`, near(Math.hypot(B[0] - P[0], B[1] - P[1]), L, 1e-9) && near(Math.atan2(B[0] - P[0], B[1] - P[1]), th)],
      ['mg sin θ is at right angles to the string', near(dot(t, u), 0)],
      ['mg sin θ points back towards the lowest point (the restoring part)', t[0] < 0 && near(dot(t, mg), Math.sin(th))],
      ['mg cos θ lies along the string, away from the pivot', near(dot(u, mg), Math.cos(th)) && u[1] > 0],
      ['The two components add back to mg', near(cosPart[0] + sinPart[0], mg[0]) && near(cosPart[1] + sinPart[1], mg[1])],
      ['Powers balance: M: b = 0; T: −2c = 1 so c = −½; L: a + c = 0 so a = ½', pw3.M === 0 && pw3.T === 1 && pw3.L === 0 && pw3.a === 0.5 && pw3.c === -0.5],
      ['So t = C ℓ^½ g^−½ = C√(ℓ/g): the mass m has power 0 and cancels', pw3.b === 0],
    ];
  },
};

/* ===================================================================== */
/* Figure 1.3  Worst-case rules for combining errors                      */
/* ===================================================================== */
const SUM = { a: [10.0, 0.2], b: [5.0, 0.1] } as const;
const PLATE = { l: [16.3, 0.05], b: [13.8, 0.05] } as const;
/** Worst case by brute force: every sign of every error, the largest change. */
function worst(f: (v: number[]) => number, vals: number[], errs: number[]) {
  const x = f(vals);
  let m = 0;
  for (let mask = 0; mask < 1 << vals.length; mask++) {
    const v = vals.map((a, i) => a + ((mask >> i) & 1 ? errs[i] : -errs[i]));
    m = Math.max(m, Math.abs(f(v) - x));
  }
  return m;
}
const fig13: Diagram = {
  id: 'p11-01-fig-1.3',
  topic: 2,
  name: 'Error propagation rules — worst-case addition',
  cases: [{ chip: 'Worst-case rules', cap: 'Worst-case rules for combining errors: absolute errors add for sums and differences; relative (percentage) errors add, each weighted by its power, for products, quotients and powers.' }],
  draw() {
    const s = new Sketch(W, 392);
    // Absolute errors
    words(s, 16, 22, 'Absolute Errors ADD', { size: 13, anchor: 'start', bold: true });
    box(s, 8, 32, 324, 44);
    s.text(170, 60, '<i>x</i> = <i>a</i> ± <i>b</i>   ⇒   Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>', { size: 16 });
    box(s, 8, 84, 324, 62);
    s.text(170, 108, 'Example: <i>x</i> = (10.0 ± 0.2)', { size: 14 });
    s.text(170, 132, '+ (5.0 ± 0.1) = 15.0 ± 0.3', { size: 14 });
    // Relative errors
    words(s, 16, 176, 'Relative (%) Errors ADD', { size: 13, anchor: 'start', bold: true });
    box(s, 8, 186, 324, 64, 'hi');
    s.text(170, 210, '<i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>   ⇒', { size: 15 });
    s.text(170, 236, 'Δ<i>x</i>/<i>x</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>', { size: 15 });
    box(s, 8, 258, 324, 62);
    s.text(170, 282, '<i>A</i> = <i>ℓb</i>,  <i>ℓ</i> = 16.30 ± 0.05,  <i>b</i> = 13.80 ± 0.05', { size: 13.5 });
    s.text(170, 306, '⇒  Δ<i>A</i>/<i>A</i> = 0.05/16.30 + 0.05/13.80', { size: 13.5 });
    resultBlock(s, ['ALWAYS worst case: every', 'error pushes the same way.']);
    return s;
  },
  check() {
    const [a, da] = SUM.a, [b, db] = SUM.b;
    const sum = a + b, dsum = worst((v) => v[0] + v[1], [a, b], [da, db]), ddiff = worst((v) => v[0] - v[1], [a, b], [da, db]);
    // the power rule against brute force, for x = a^2 b / c^3 with small errors
    const vals = [2.0, 3.0, 5.0], errs = [2e-6, 3e-6, 1e-6], [p, q, r] = [2, 1, 3];
    const f = (v: number[]) => (v[0] ** p * v[1] ** q) / v[2] ** r, x = f(vals);
    const rule = p * (errs[0] / vals[0]) + q * (errs[1] / vals[1]) + r * (errs[2] / vals[2]);
    const [l, dl] = PLATE.l, [w, dw] = PLATE.b, rl = dl / l, rw = dw / w, rel = rl + rw, A = l * w;
    return [
      [`(10.0 ± 0.2) + (5.0 ± 0.1) = ${sum.toFixed(1)} ± ${dsum.toFixed(1)}`, near(sum, 15, 1e-9) && near(dsum, 0.3, 1e-9)],
      ['For a difference the worst case is the same Δa + Δb', near(ddiff, da + db, 1e-9)],
      ['Δx/x = pΔa/a + qΔb/b + rΔc/c matches the worst case of a^p b^q/c^r (to first order)', Math.abs(worst(f, vals, errs) / x - rule) / rule < 1e-4],
      ['The denominator c still adds its r Δc/c, with a plus sign', Math.abs(worst(f, vals, [0, 0, errs[2]]) / x - r * (errs[2] / vals[2])) / (r * (errs[2] / vals[2])) < 1e-4],
      [`0.05/16.30 = ${rl.toFixed(5)}, 0.05/13.80 = ${rw.toFixed(5)}: sum ${rel.toFixed(5)} (the text's 0.00307 + 0.00362 = 0.00669)`, rl.toFixed(5) === '0.00307' && rw.toFixed(5) === '0.00362' && rel.toFixed(5) === '0.00669'],
      [`A = 16.30 × 13.80 = ${A.toFixed(2)} cm², ΔA ≈ ${(rel * A).toFixed(1)} cm² (the text's 224.94 and 1.5)`, A.toFixed(2) === '224.94' && (rel * A).toFixed(1) === '1.5'],
    ];
  },
};

/* ===================================================================== */
/* Figure 1.4  Rounding decision card                                     */
/* ===================================================================== */
/** Exact decimals as integers and a count of decimal places, so 2.5 × 3.42 is 8.55 and never 8.549999. */
type Dec = { n: bigint; dp: number };
const dec = (t: string): Dec => ({ n: BigInt(t.replace('.', '')), dp: (t.split('.')[1] ?? '').length });
const decStr = (d: Dec) => { const neg = d.n < 0n, s = (neg ? -d.n : d.n).toString().padStart(d.dp + 1, '0'); return (neg ? '-' : '') + (d.dp ? `${s.slice(0, -d.dp)}.${s.slice(-d.dp)}` : s); };
const decMul = (a: Dec, b: Dec): Dec => ({ n: a.n * b.n, dp: a.dp + b.dp });
const decAdd = (a: Dec, b: Dec): Dec => { const dp = Math.max(a.dp, b.dp); return { n: a.n * 10n ** BigInt(dp - a.dp) + b.n * 10n ** BigInt(dp - b.dp), dp }; };
const strip = (d: Dec): Dec => { let { n, dp } = d; while (dp > 0 && n % 10n === 0n) { n /= 10n; dp--; } return { n, dp }; };
/** Keep `keep` decimal places, the book's way: below 5 drop, above 5 up, exactly 5 to the even digit. */
function roundDp(d: Dec, keep: number): Dec {
  if (d.dp <= keep) return d;
  const cut = 10n ** BigInt(d.dp - keep), q = d.n / cut, rem = d.n % cut, half = cut / 2n;
  const up = rem > half || (rem === half && q % 2n === 1n);
  return { n: up ? q + 1n : q, dp: keep };
}
/** Significant figures: leading zeros never count; zeros after a decimal point do. */
const sigFigs = (t: string) => t.replace('.', '').replace(/^0+/, '').length;
const dpOf = (t: string) => (t.split('.')[1] ?? '').length;
const roundSf = (d: Dec, sf: number): Dec => { const digits = (d.n < 0n ? -d.n : d.n).toString().length; return roundDp(d, d.dp - (digits - sf)); };
const ROUND = { mul: ['2.5', '3.42'], add: ['12.5', '0.0021'] } as const;
const fig14: Diagram = {
  id: 'p11-01-fig-1.4',
  topic: 3,
  name: 'Rounding decision card',
  cases: [{ chip: 'Rounding rules', cap: 'Rounding decision card: for × or ÷ keep the fewest significant figures; for + or − keep the fewest decimal places. Round once, at the end.' }],
  draw() {
    const s = new Sketch(W, 432);
    box(s, 8, 8, 324, 40, 'hi');
    words(s, 170, 33, 'Round ONCE, at the end.', { size: 15, bold: true });
    const section = (y: number, head: [string, string], rule: [string, string], ex: string, why: [string, string]) => {
      words(s, 16, y + 16, head[0], { size: 12.5, anchor: 'start', bold: true });
      words(s, 16, y + 33, head[1], { size: 12.5, anchor: 'start', bold: true });
      s.text(16, y + 58, rule[0], { size: 13.5, anchor: 'start', color: C.slate });
      s.text(16, y + 77, rule[1], { size: 13.5, anchor: 'start', color: C.slate });
      box(s, 8, y + 90, 324, 86);
      s.text(170, y + 116, ex, { size: 16 });
      s.text(170, y + 142, why[0], { size: 13.5 });
      s.text(170, y + 164, why[1], { size: 13.5 });
    };
    const [ma, mb] = ROUND.mul;
    const prod = decStr(strip(decMul(dec(ma), dec(mb)))), keepSf = Math.min(sigFigs(ma), sigFigs(mb)), prodR = decStr(roundSf(decMul(dec(ma), dec(mb)), keepSf));
    section(58, ['× or ÷  →  count SIGNIFICANT', 'FIGURES, keep the least'], ['Result has the same significant figures as', 'the least-precise factor.'], `Example:  ${ma} × ${mb} = ${prod}`, [`${ma} has ${sigFigs(ma)} sf, ${mb} has ${sigFigs(mb)} sf  ⇒`, `rounded to ${keepSf} sf: ${prodR}`]);
    const [aa, ab] = ROUND.add;
    const total = decStr(decAdd(dec(aa), dec(ab))), keepDp = Math.min(dpOf(aa), dpOf(ab)), totalR = decStr(roundDp(decAdd(dec(aa), dec(ab)), keepDp));
    section(246, ['+ or −  →  count DECIMAL', 'PLACES, keep the least'], ['Result has the same decimal places as the', 'least-precise term.'], `Example:  ${aa} + ${ab} = ${total}`, [`${aa} has ${dpOf(aa)} dp, ${ab} has ${dpOf(ab)} dp  ⇒`, `rounded to ${keepDp} dp: ${totalR}`]);
    return s;
  },
  check() {
    const [ma, mb] = ROUND.mul, [aa, ab] = ROUND.add;
    const prod = decMul(dec(ma), dec(mb)), total = decAdd(dec(aa), dec(ab));
    const keepSf = Math.min(sigFigs(ma), sigFigs(mb)), keepDp = Math.min(dpOf(aa), dpOf(ab));
    return [
      [`2.5 × 3.42 = ${decStr(strip(prod))} exactly`, decStr(strip(prod)) === '8.55'],
      [`2.5 has ${sigFigs(ma)} sf, 3.42 has ${sigFigs(mb)} sf: keep ${keepSf}`, sigFigs(ma) === 2 && sigFigs(mb) === 3 && keepSf === 2],
      [`8.55 to 2 sf is ${decStr(roundSf(prod, keepSf))} (exactly 5, after an odd 5: round up)`, decStr(roundSf(prod, keepSf)) === '8.6'],
      [`12.5 + 0.0021 = ${decStr(total)}`, decStr(total) === '12.5021'],
      [`12.5 has ${dpOf(aa)} dp, 0.0021 has ${dpOf(ab)} dp: keep ${keepDp}`, dpOf(aa) === 1 && dpOf(ab) === 4 && keepDp === 1],
      [`12.5021 to 1 dp is ${decStr(roundDp(total, keepDp))}`, decStr(roundDp(total, keepDp)) === '12.5'],
      [`Swapping the rules would give a different answer: 12.5021 to 2 sf is ${decStr(roundSf(total, 2))}, not 12.5`, decStr(roundSf(total, 2)) === '13'],
    ];
  },
};

/* ===================================================================== */
/* Figure 1.5  Zero error of a vernier callipers                          */
/* ===================================================================== */
type ZeroCase = { chip: string; cap: string; e: number; note: [string, string]; res: [string, string?] };
const MM = 22, X0 = 38, MB = 72, VB = 94; // px per mm, main zero, main-scale line, vernier line
const VSD = 0.9; // 10 vernier divisions = 9 mm
const mx = (mm: number) => X0 + mm * MM;
/** The vernier line that coincides with a main-scale mark, and that mark. */
function coincide(e: number) {
  for (let k = 0; k <= 10; k++) { const at = e + VSD * k; if (Math.abs(at - Math.round(at)) < 1e-9) return { k, main: Math.round(at) }; }
  return { k: -1, main: NaN };
}
const zeroError = (e: number) => { const { k } = coincide(e); const LC = 1 - VSD; return e > 0 ? k * LC : e < 0 ? -(10 - k) * LC : 0; };
const fig15: Diagram = {
  id: 'p11-01-fig-1.5',
  topic: 4,
  name: 'Zero error of a vernier callipers',
  cases: [
    { chip: 'No zero error', e: 0, note: ['Vernier 0 coincides exactly with main 0', '(jaws closed).'], res: ['Zero error = 0'], cap: 'Zero error of a vernier callipers: (i) none. Corrected = Observed − Zero error, sign included.' },
    { chip: 'Positive zero error', e: 0.4, note: ['Vernier 0 sits 0.4 mm to the right of main 0;', 'the 4th vernier line coincides.'], res: ['Zero error = +0.04 cm', '→ subtract it from the reading'], cap: 'Zero error of a vernier callipers: (ii) positive, +0.04 cm, subtract it. Corrected = Observed − Zero error, sign included.' },
    { chip: 'Negative zero error', e: -0.4, note: ['Vernier 0 sits 0.4 mm to the left of main 0;', 'the 6th vernier line coincides.'], res: ['Zero error = −0.04 cm', '→ add it (subtract a negative number)'], cap: 'Zero error of a vernier callipers: (iii) negative, −0.04 cm, add it. Corrected = Observed − Zero error, sign included.' },
  ],
  draw(c: ZeroCase) {
    const s = new Sketch(W, 316);
    const hit = coincide(c.e), hx = mx(hit.main);
    // main scale: 0 to 12 mm, ticks standing on its line
    s.line(mx(0), MB, mx(12), MB, { w: 1.8 });
    for (let i = 0; i <= 12; i++) s.line(mx(i), MB, mx(i), MB - (i % 5 === 0 ? 14 : 8), { w: 1.2 });
    [0, 5, 10].forEach((i) => s.sym(mx(i), MB - 20, String(i), { size: 12 }));
    // vernier: 10 divisions over 9 mm, ticks hanging from its line, its zero at the offset
    const vx = (k: number) => mx(c.e + VSD * k);
    s.line(vx(0), VB, vx(10), VB, { w: 1.8 });
    for (let k = 0; k <= 10; k++) s.line(vx(k), VB, vx(k), VB + (k % 10 === 0 ? 13 : 8), { w: 1.2 });
    [0, 10].forEach((k) => s.sym(vx(k), VB + 27, String(k), { size: 12 }));
    // the lines that coincide
    s.line(hx, MB - 12, hx, VB + 12, { color: C.mari, w: 2, dash: true });
    s.point(hx, MB - 14, 3.4, `<circle cx="${r1(hx)}" cy="${MB - 14}" r="3.4" fill="${C.mari}"/>`);
    s.text(16, 178, c.note[0], { size: 13.5, anchor: 'start', color: C.slate });
    s.text(16, 197, c.note[1], { size: 13.5, anchor: 'start', color: C.slate });
    box(s, 8, 212, 324, 32);
    s.text(170, 233, 'Corrected = Observed − Zero error  (sign included)', { size: 13.5 });
    const res = resultBlock(s, c.res.filter(Boolean) as string[]);
    s.place(
      [
        { t: 'Main scale (1 division = 1 mm)', p: [mx(11.5), MB], at: [[334, 8, 'end']] },
        { t: 'Vernier scale (10 divisions = 9 mm)', p: [vx(8.5), VB], at: [[334, 130, 'end'], [6, 130, 'start']] },
      ],
      [res]
    );
    return s;
  },
  check(c: ZeroCase) {
    const LC = 1 - VSD, hit = coincide(c.e), z = zeroError(c.e);
    const want = c.e === 0 ? 0 : c.e > 0 ? 0.4 : -0.4;
    // With no zero error the 10th line also sits on a mark (9 mm): that is the scale's end, not a reading.
    const others = Array.from({ length: 11 }, (_, k) => k).filter((k) => k !== hit.k && !(c.e === 0 && k === 10) && Math.abs(c.e + VSD * k - Math.round(c.e + VSD * k)) < 1e-9);
    const observed = 4.5, corrected = observed - z / 10; // cm
    const n = c.e === 0 ? 0 : c.e > 0 ? 4 : 6;
    return [
      [`Least count = 1 MSD − 1 VSD = 1 mm − 0.9 mm = ${LC.toFixed(1)} mm`, near(LC, 0.1)],
      ['Ten vernier divisions are drawn over 9 mm', near(mx(c.e + VSD * 10) - mx(c.e), 9 * MM)],
      [`Vernier line ${hit.k} sits at ${(c.e + VSD * hit.k).toFixed(1)} mm, on main mark ${hit.main}`, hit.k === n && near(c.e + VSD * hit.k, hit.main)],
      ['No other vernier line coincides', others.length === 0],
      [`Zero error = ${z >= 0 ? (z > 0 ? '+' : '') : '−'}${Math.abs(z / 10).toFixed(2)} cm, the offset of the vernier zero`, near(z, want, 1e-9) && near(z, c.e, 1e-9)],
      ['The printed note and result say the same line and the same zero error', (c.e === 0 ? c.note[0].includes('coincides exactly with main 0') && c.res[0] === 'Zero error = 0' : c.note[1].includes(`the ${hit.k}th vernier line`) && c.res[0] === `Zero error = ${z > 0 ? '+' : '−'}${Math.abs(z / 10).toFixed(2)} cm`)],
      [z > 0 ? 'Corrected = Observed − (+0.04 cm): the correction subtracts' : z < 0 ? 'Corrected = Observed − (−0.04 cm): the correction adds' : 'Corrected = Observed: nothing to correct', z > 0 ? near(corrected, observed - 0.04) : z < 0 ? near(corrected, observed + 0.04) : corrected === observed],
    ];
  },
};

/* ===================================================================== */
/* Figure 1.6  Parallax method, and the thumb test                        */
/* ===================================================================== */
type ParCase = { chip: string; cap: string; part: 'triangle' | 'thumb' };
/** θ chosen small enough that the arc Dθ and the chord AB differ by under 1%. */
const TRI = { S: [150, 40] as [number, number], D: 206, th: 0.4 };
const triGeo = () => {
  const { S, D, th } = TRI;
  const A: [number, number] = [S[0] - D * Math.sin(th / 2), S[1] + D * Math.cos(th / 2)];
  const B: [number, number] = [S[0] + D * Math.sin(th / 2), S[1] + D * Math.cos(th / 2)];
  return { S, A, B, b: Math.hypot(B[0] - A[0], B[1] - A[1]) };
};
const THUMB = { wall: 80, eyeY: 292, eyeL: 140, eyeR: 200, thumb: [170, 214] as [number, number] };
const thumbGeo = () => {
  const { wall, eyeY, eyeL, eyeR, thumb } = THUMB;
  const hitWall = (ex: number) => ex + ((wall - eyeY) / (thumb[1] - eyeY)) * (thumb[0] - ex);
  return { seenL: hitWall(eyeL), seenR: hitWall(eyeR) };
};
const fig16: Diagram = {
  id: 'p11-01-fig-1.6',
  topic: 5,
  name: 'Parallax method',
  cases: [
    { chip: 'Parallax triangle', part: 'triangle', cap: 'Parallax method: the distant object <i>S</i> is viewed from two points <i>A</i> and <i>B</i> separated by the basis <i>b</i>; the parallactic angle <i>θ</i> satisfies <i>b</i> = <i>Dθ</i>, so <i>D</i> = <i>b</i>/<i>θ</i>.' },
    { chip: 'Thumb test', part: 'thumb', cap: 'Inset: a thumb at arm\'s length seems to jump against a far wall when seen by the left and right eye in turn.' },
  ],
  draw(c: ParCase) {
    const s = new Sketch(W, 344);
    if (c.part === 'triangle') {
      const { S, A, B } = triGeo();
      s.line(S[0], S[1], A[0], A[1], { w: 1.7 });
      s.line(S[0], S[1], B[0], B[1], { w: 1.7 });
      s.line(A[0], A[1], B[0], B[1], { color: C.mari, w: 2.6 });
      const aA = Math.atan2(A[1] - S[1], A[0] - S[0]), aB = Math.atan2(B[1] - S[1], B[0] - S[0]), ar = 44;
      s.add(`<path d="M${r1(S[0] + ar * Math.cos(aB))} ${r1(S[1] + ar * Math.sin(aB))} A${ar} ${ar} 0 0 1 ${r1(S[0] + ar * Math.cos(aA))} ${r1(S[1] + ar * Math.sin(aA))}" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`);
      s.sym(S[0], S[1] + ar + 18, 'θ', { italic: true });
      // D along each side, set off outward
      const side = (P: [number, number], sgn: number) => s.sym((S[0] + P[0]) / 2 + sgn * 16, (S[1] + P[1]) / 2 + 5, 'D', { italic: true });
      side(A, -1);
      side(B, 1);
      [S, A, B].forEach((p) => s.dot(p[0], p[1]));
      s.sym(S[0] - 12, S[1] - 6, 'S', { italic: true, anchor: 'end' });
      s.sym(A[0] - 10, A[1] + 5, 'A', { italic: true, anchor: 'end' });
      s.sym(B[0] + 10, B[1] + 5, 'B', { italic: true, anchor: 'start' });
      s.sym(S[0], A[1] + 24, 'b', { italic: true });
      const res = resultBlock(s, ['<i>b</i> = <i>Dθ</i>  ⇒  <i>D</i> = <i>b</i>/<i>θ</i>'], { maths: true });
      s.place(
        [
          { t: 'Distant object', p: S, own: S, at: [[196, 18, 'start'], [196, 40, 'start']] },
          { t: 'Basis', p: [S[0] + 10, A[1]], hi: true, at: [[176, 262, 'start'], [196, 256, 'start']] },
        ],
        [res]
      );
      return s;
    }
    const { wall, eyeY, eyeL, eyeR, thumb } = THUMB, { seenL, seenR } = thumbGeo();
    s.line(28, wall, 312, wall, { w: 1.8 });
    s.line(eyeL, eyeY, seenL, wall, { color: C.grey, dash: true, w: 1.2 });
    s.line(eyeR, eyeY, seenR, wall, { color: C.grey, dash: true, w: 1.2 });
    [seenR, seenL].forEach((x) => s.line(x, wall - 7, x, wall + 7, { w: 2 }));
    s.sym(seenR, wall + 24, 'R', { size: 13 });
    s.sym(seenL, wall + 24, 'L', { size: 13 });
    // the apparent shift, both ways
    const ay = wall - 22, mid = (seenL + seenR) / 2;
    s.vec(mid, ay, seenR, ay, { color: C.mari, w: 2.4 });
    s.vec(mid, ay, seenL, ay, { color: C.mari, w: 2.4 });
    s.point(thumb[0], thumb[1], 4, `<rect x="${thumb[0] - 12}" y="${thumb[1] - 3.5}" width="24" height="7" rx="3.5" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    s.dot(eyeL, eyeY);
    s.dot(eyeR, eyeY);
    s.place(
      [
        { t: 'Parallax = the apparent shift', p: [mid + 30, ay], hi: true, at: [[mid, 8, 'middle']] },
        { t: 'Far wall', p: [306, wall], at: [[334, 96, 'end'], [334, 40, 'end']] },
        { t: 'Thumb', p: [thumb[0] + 12, thumb[1]], own: thumb, at: [[226, 232, 'start'], [226, 176, 'start']] },
        { t: 'L eye', p: [eyeL, eyeY], own: [eyeL, eyeY], at: [[eyeL - 4, 308, 'end'], [eyeL, 308, 'middle']] },
        { t: 'R eye', p: [eyeR, eyeY], own: [eyeR, eyeY], at: [[eyeR + 4, 308, 'start'], [eyeR, 308, 'middle']] },
      ]
    );
    return s;
  },
  check(c: ParCase) {
    if (c.part === 'triangle') {
      const { S, A, B, b } = triGeo(), { D, th } = TRI;
      const angle = Math.acos(((A[0] - S[0]) * (B[0] - S[0]) + (A[1] - S[1]) * (B[1] - S[1])) / (D * D));
      return [
        ['SA = SB = D', near(Math.hypot(A[0] - S[0], A[1] - S[1]), D, 1e-9) && near(Math.hypot(B[0] - S[0], B[1] - S[1]), D, 1e-9)],
        [`The angle at S is θ = ${th} rad`, near(angle, th, 1e-9)],
        [`b = Dθ: the drawn basis ${b.toFixed(1)} vs Dθ = ${(D * th).toFixed(1)} (within ${((100 * Math.abs(D * th - b)) / b).toFixed(2)}%)`, Math.abs(D * th - b) / b < 0.01],
        [`So D = b/θ: ${(b / th).toFixed(1)} vs D = ${D} (small angle, within 1%)`, Math.abs(b / th - D) / D < 0.01],
        ['A and B are level, so b is the basis seen from S', near(A[1], B[1])],
      ];
    }
    const { wall, eyeY, eyeL, eyeR, thumb } = THUMB, { seenL, seenR } = thumbGeo();
    const onLine = (ex: number, wx: number) => Math.abs((thumb[0] - ex) * (wall - eyeY) - (wx - ex) * (thumb[1] - eyeY)) < 1e-6;
    const shift = seenL - seenR, predicted = (eyeR - eyeL) * ((eyeY - wall) / (eyeY - thumb[1]) - 1);
    return [
      ['Each sight line runs from an eye through the thumb to the wall', onLine(eyeL, seenL) && onLine(eyeR, seenR)],
      ['The lines cross at the thumb, so the left eye sees it on the right (L) and the right eye on the left (R)', seenL > seenR],
      [`The jump against the wall: ${shift.toFixed(1)} = eye gap × (wall ÷ thumb distance − 1) = ${predicted.toFixed(1)}`, near(shift, predicted, 1e-9)],
    ];
  },
};

/** Chapter order: by topic, then by page. */
export const DIAGRAMS_PHYSICS_11_01: Diagram[] = [fig11, fig12, fig13, fig14, fig15, fig16];
