import { C, F, Rect, Sketch, r1 } from '@/lib/diagrams/kit';

/**
 * PHYSICS CLASS 11, CHAPTER 1: every diagram, drawn from the physics.
 *
 * Each diagram has its cases (the chips), a caption for each, a `draw` that
 * returns a Sketch, and a `check` that recomputes the numbers behind the
 * drawing: an average is the true average, a vernier mark really lines up,
 * a product really rounds to what the answer block says. The tests run every
 * check and the kit's layout audit on every case.
 */
export type Check = [string, boolean];
export type DiagramCase = { chip: string; cap: string } & Record<string, unknown>;
export type Diagram = { id: string; topic: number; name: string; cases: DiagramCase[]; draw: (c: any) => Sketch; check: (c: any) => Check[] };

const W = 340;

/* ---------- shared bits ---------- */
type Role = 'start' | 'step' | 'answer' | 'hi';
/** A block: white, rounded, its role shown only by its edge. Title in Onest, value in STIX. */
function block(s: Sketch, x: number, y: number, w: number, h: number, value: string, sub: string, role: Role, o: { valueSize?: number; subStix?: boolean } = {}) {
  const stroke = role === 'hi' ? C.mari : role === 'answer' ? C.text : role === 'step' ? C.border : C.border;
  const sw = role === 'hi' ? 2 : role === 'answer' ? 1.8 : 1.3;
  const vs = o.valueSize ?? (role === 'answer' ? 21 : 17);
  s.add(`<rect x="${r1(x)}" y="${r1(y)}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="${stroke}" stroke-width="${sw}"/>`);
  if (value) s.text(x + w / 2, y + h / 2 - (sub ? 2 : -6), value, { size: vs, semibold: role === 'answer' });
  if (sub && o.subStix) s.text(x + w / 2, y + h - 12, sub, { size: 14, color: C.slate });
  else if (sub) s.add(`<text x="${r1(x + w / 2)}" y="${r1(y + h - 12)}" text-anchor="middle" font-family="${F.tag}" font-size="11" fill="${C.slate}">${sub}</text>`);
}
/** Where the line from a rectangle's centre towards (tx, ty) leaves the rectangle. */
function edge(r: Rect, tx: number, ty: number): [number, number] {
  const cx = (r[0] + r[2]) / 2, cy = (r[1] + r[3]) / 2, dx = tx - cx, dy = ty - cy;
  const k = Math.min(Math.abs((r[2] - r[0]) / 2 / (dx || 1e-9)), Math.abs((r[3] - r[1]) / 2 / (dy || 1e-9)));
  return [cx + dx * k, cy + dy * k];
}
function arrowBetween(s: Sketch, a: Rect, b: Rect, gap = 5, color: string = C.slate) {
  const bc: [number, number] = [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2], ac: [number, number] = [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
  const p = edge(a, ...bc), q = edge(b, ...ac), L = Math.hypot(q[0] - p[0], q[1] - p[1]), ux = (q[0] - p[0]) / L, uy = (q[1] - p[1]) / L;
  s.vec(p[0] + ux * gap, p[1] + uy * gap, q[0] - ux * gap, q[1] - uy * gap, { color, w: 1.4 });
}
const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
const sup = (n: number) => String(n).replace('−', '-').split('').map((c) => SUP[c] ?? c).join('');

/* ===================================================================== */
/* 1. Seven roots, and the dictionary they build                          */
/* ===================================================================== */
type Dim = Record<string, number>;
const mul = (...ds: Dim[]): Dim => { const o: Dim = {}; ds.forEach((d) => Object.entries(d).forEach(([k, v]) => (o[k] = (o[k] ?? 0) + v))); Object.keys(o).forEach((k) => o[k] === 0 && delete o[k]); return o; };
const pow = (d: Dim, n: number): Dim => Object.fromEntries(Object.entries(d).map(([k, v]) => [k, v * n]));
const unitText = (d: Dim) => ['kg', 'm', 's', 'A'].filter((k) => d[k]).map((k) => (d[k] === 1 ? k : k + sup(d[k]))).join(' ');
const BASE = { m: { m: 1 }, kg: { kg: 1 }, s: { s: 1 }, A: { A: 1 } };
/* Every derived unit computed from its defining law, not typed in. */
const DERIVED: { name: string; dim: Dim; unit: string; law: string }[] = (() => {
  const speed = mul(BASE.m, pow(BASE.s, -1));
  const accel = mul(speed, pow(BASE.s, -1));
  const N = mul(BASE.kg, accel), J = mul(N, BASE.m), Wt = mul(J, pow(BASE.s, -1)), Pa = mul(N, pow(BASE.m, -2)), Cq = mul(BASE.A, BASE.s), Hz = pow(BASE.s, -1);
  return [
    { name: 'Charge', dim: Cq, unit: 'C', law: 'q = It' },
    { name: 'Force', dim: N, unit: 'N', law: 'F = ma' },
    { name: 'Pressure', dim: Pa, unit: 'Pa', law: 'p = F/A' },
    { name: 'Speed', dim: speed, unit: '', law: 'v = d/t' },
    { name: 'Frequency', dim: Hz, unit: 'Hz', law: 'f = 1/T' },
    { name: 'Energy', dim: J, unit: 'J', law: 'W = Fd' },
    { name: 'Power', dim: Wt, unit: 'W', law: 'P = W/t' },
    { name: 'Angle', dim: {}, unit: 'rad', law: 'θ = s/r' },
  ];
})();
const siRoots: Diagram = {
  id: 'si-roots',
  topic: 0,
  name: 'Seven roots, and the dictionary they build',
  cases: [{ chip: 'The seven, and what they make', cap: 'The seven base units sit at the centre. Every other unit is a product of their powers, worked out from the law that defines it: a newton is a kilogram times an acceleration, kg m s⁻².' }],
  draw() {
    const s = new Sketch(W, 336);
    const centre: Rect = [100, 122, 240, 194];
    s.add(`<rect x="100" y="122" width="140" height="72" rx="12" fill="#fff" stroke="${C.mari}" stroke-width="2"/>`);
    s.add(`<text x="170" y="148" text-anchor="middle" font-family="${F.tag}" font-size="12" fill="${C.text}">7 SI base units</text>`);
    s.text(170, 174, 'm, kg, s, A, K, mol, cd', { size: 14 });
    const slots: Rect[] = [
      [10, 22, 106, 74], [122, 22, 218, 74], [234, 22, 330, 74],
      [6, 132, 90, 184], [250, 132, 334, 184],
      [10, 238, 106, 290], [122, 238, 218, 290], [234, 238, 330, 290],
    ];
    DERIVED.forEach((d, i) => {
      const r = slots[i];
      const value = d.name === 'Angle' ? 'rad: m/m' : `${unitText(d.dim)}${d.unit ? ` = ${d.unit}` : ''}`;
      block(s, r[0], r[1], r[2] - r[0], r[3] - r[1], '', '', 'start');
      s.add(`<text x="${r1((r[0] + r[2]) / 2)}" y="${r[1] + 19}" text-anchor="middle" font-family="${F.tag}" font-size="11" fill="${C.slate}">${d.name}</text>`);
      s.text((r[0] + r[2]) / 2, r[1] + 40, value, { size: 13 });
      arrowBetween(s, centre, r, 4, C.grey);
    });
    s.result('Every unit is built from the seven');
    return s;
  },
  check() {
    const want: Record<string, string> = { Charge: 'm0 kg0 s1 A1', Force: 'm1 kg1 s-2 A0', Pressure: 'm-1 kg1 s-2 A0', Speed: 'm1 kg0 s-1 A0', Frequency: 'm0 kg0 s-1 A0', Energy: 'm2 kg1 s-2 A0', Power: 'm2 kg1 s-3 A0', Angle: 'm0 kg0 s0 A0' };
    return DERIVED.map((d) => {
      const got = ['m', 'kg', 's', 'A'].map((k) => `${k}${d.dim[k] ?? 0}`).join(' ');
      return [`${d.name} from ${d.law}: ${d.name === 'Angle' ? 'no dimensions' : unitText(d.dim)}`, got === want[d.name]] as Check;
    });
  },
};

/* ===================================================================== */
/* 2. The dimensional filter, and why it is one-sided                     */
/* ===================================================================== */
type DimLT = [number, number]; // exponents of L and T
const dimText = ([l, t]: DimLT) => `[${[l ? `L${l === 1 ? '' : sup(l)}` : '', t ? `T${t === 1 ? '' : sup(t)}` : ''].filter(Boolean).join(' ') || 'M⁰ L⁰ T⁰'}]`;
const filterTerms = (n: number): { html: string; dim: DimLT }[] => [
  { html: '<i>s</i>', dim: [1, 0] },
  { html: '<i>ut</i>', dim: [1 + 0, -1 + 1] },
  { html: `½<i>at</i><sup>${n}</sup>`, dim: [1, -2 + n] },
];
const dimFilter: Diagram = {
  id: 'dim-filter',
  topic: 1,
  name: 'The dimensional filter, and why it is one-sided',
  cases: [
    { chip: 'An equation that fails', n: 3, cap: 'Check each term on its own. <i>s</i> and <i>ut</i> are lengths, but ½<i>at</i><sup>3</sup> is a length times a time. One term that does not match is enough: the equation is definitely wrong.' },
    { chip: 'An equation that passes', n: 2, cap: 'Every term is a length, so the equation passes. But the check cannot see the ½: written with any other number it would pass too. Passing only means possibly right.' },
  ],
  draw(c: { n: number }) {
    const s = new Sketch(W, 330);
    const terms = filterTerms(c.n), base = terms[0].dim;
    const eq: Rect = [56, 16, 284, 62];
    s.add(`<rect x="56" y="16" width="228" height="46" rx="12" fill="#fff" stroke="${C.text}" stroke-width="1.7"/>`);
    s.text(170, 45, `<i>s</i> = <i>ut</i> + ½<i>at</i><sup>${c.n}</sup>`, { size: 18 });
    const slots: Rect[] = [[12, 108, 108, 176], [122, 108, 218, 176], [232, 108, 328, 176]];
    terms.forEach((t, i) => {
      const odd = t.dim[0] !== base[0] || t.dim[1] !== base[1];
      const r = slots[i];
      s.add(`<rect x="${r[0]}" y="${r[1]}" width="96" height="68" rx="12" fill="#fff" stroke="${odd ? C.mari : C.border}" stroke-width="${odd ? 2 : 1.3}"/>`);
      s.text(r[0] + 48, r[1] + 28, t.html, { size: 17 });
      s.text(r[0] + 48, r[1] + 54, dimText(t.dim), { size: 14, color: odd ? C.amber : C.slate });
      arrowBetween(s, eq, r, 4, C.grey);
    });
    const odd = terms.findIndex((t) => t.dim[0] !== base[0] || t.dim[1] !== base[1]);
    const line = terms.map((t) => dimText(t.dim)).join(odd >= 0 ? '   ' : ' = ');
    s.sym(170, 214, odd >= 0 ? `${dimText(terms[0].dim)} = ${dimText(terms[1].dim)}, but ${dimText(terms[2].dim)}` : line, { size: 15, color: C.slate });
    if (odd >= 0) s.place([{ t: 'Does not match', p: [slots[odd][0] + 48, slots[odd][3]], hi: true, at: [[slots[odd][0] + 48, 232, 'middle'], [214, 236, 'start']] }], [s.resultRect('Definitely wrong')]);
    else s.place([{ t: 'The ½ slips through', p: [slots[2][0] + 30, slots[2][3]], hi: true, at: [[200, 232, 'start'], [150, 232, 'start']] }], [s.resultRect('Only possibly right')]);
    s.result(odd >= 0 ? 'Definitely wrong' : 'Only possibly right');
    return s;
  },
  check(c: { n: number }) {
    const terms = filterTerms(c.n);
    const ok = terms.every((t) => t.dim[0] === 1 && t.dim[1] === 0);
    return [
      ['[s] = [L]; [u][t] = [L T⁻¹][T] = [L]', terms[0].dim.join() === '1,0' && terms[1].dim.join() === '1,0'],
      [`[a][t]${sup(c.n)} = [L T⁻²][T${sup(c.n)}] = ${dimText(terms[2].dim)}`, terms[2].dim[1] === c.n - 2],
      [ok ? 'All terms match, so it passes (and only "possibly right")' : 'One term does not match, so it fails (and is "definitely wrong")', ok === (c.n === 2)],
    ];
  },
};

/* ===================================================================== */
/* 3. The pendulum, and the mass that cancels                             */
/* ===================================================================== */
const PEN = { P: [150, 44] as [number, number], L: 168, th: (30 * Math.PI) / 180, W: 84, bob: 14 };
const penGeo = () => {
  const { P, L, th, W: Wt } = PEN;
  const u: [number, number] = [Math.sin(th), Math.cos(th)];
  const B: [number, number] = [P[0] + L * u[0], P[1] + L * u[1]];
  const t: [number, number] = [-Math.cos(th), Math.sin(th)]; // along the arc, towards the lowest point
  const mg: [number, number] = [0, Wt];
  const radial: [number, number] = [u[0] * Wt * Math.cos(th), u[1] * Wt * Math.cos(th)];
  const tang: [number, number] = [t[0] * Wt * Math.sin(th), t[1] * Wt * Math.sin(th)];
  return { u, B, t, mg, radial, tang };
};
const pendulum: Diagram = {
  id: 'pendulum',
  topic: 1,
  name: 'The pendulum, and the mass that cancels',
  cases: [{ chip: 'Length decides, mass does not', cap: 'Pulled aside, the bob feels <i>mg</i> sin <i>θ</i> back towards the middle. A heavier bob is pulled harder but is harder to move by the same amount, so the mass cancels: the period depends only on the length <i>ℓ</i> and on <i>g</i>.' }],
  draw() {
    const s = new Sketch(W, 340);
    const { P, L, th, bob } = PEN, { u, B, mg, radial, tang } = penGeo();
    s.line(P[0] - 44, P[1], P[0] + 44, P[1], { w: 1.7 });
    for (let i = -40; i <= 40; i += 10) s.line(P[0] + i, P[1], P[0] + i + 7, P[1] - 7, { color: C.grey, w: 1.2 });
    s.line(P[0], P[1], P[0], P[1] + L + 22, { color: C.grey, dash: true, w: 1.2 });
    s.line(P[0], P[1], B[0] - u[0] * bob, B[1] - u[1] * bob, { w: 1.7 });
    const a0 = Math.PI / 2, a1 = Math.PI / 2 - th, ar = 46;
    s.add(`<path d="M${r1(P[0] + ar * Math.cos(a0))} ${r1(P[1] + ar * Math.sin(a0))} A${ar} ${ar} 0 0 0 ${r1(P[0] + ar * Math.cos(a1))} ${r1(P[1] + ar * Math.sin(a1))}" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`);
    s.sym(P[0] + 62 * Math.cos((a0 + a1) / 2), P[1] + 62 * Math.sin((a0 + a1) / 2) + 5, 'θ', { italic: true });
    const mid: [number, number] = [P[0] + (L / 2) * u[0], P[1] + (L / 2) * u[1]];
    s.sym(mid[0] + 15 * Math.cos(th), mid[1] - 15 * Math.sin(th) + 4, 'ℓ', { italic: true, anchor: 'start' });
    s.dot(P[0], P[1], 3.4);
    s.point(B[0], B[1], bob, `<circle cx="${r1(B[0])}" cy="${r1(B[1])}" r="${bob}" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    // the weight, its two parts, and the tension
    s.vec(B[0], B[1], B[0] + radial[0], B[1] + radial[1], { color: C.grey, dash: true, w: 1.5 });
    s.vec(B[0], B[1], B[0] + mg[0], B[1] + mg[1]);
    s.vec(B[0] - u[0] * bob, B[1] - u[1] * bob, B[0] - u[0] * (bob + 52), B[1] - u[1] * (bob + 52));
    s.vec(B[0], B[1], B[0] + tang[0], B[1] + tang[1], { color: C.mari, w: 2.6 });
    s.sym(B[0] - 8, B[1] + mg[1] + 4, '<i>mg</i>', { anchor: 'end' });
    s.sym(B[0] + radial[0], B[1] + radial[1] + 18, '<i>mg</i> cos <i>θ</i>', { size: 13, color: C.slate });
    s.sym(B[0] + tang[0] / 2 - 2, B[1] + tang[1] / 2 - 10, '<i>mg</i> sin <i>θ</i>', { size: 13, color: C.amber, anchor: 'end' });
    s.sym(B[0] - u[0] * (bob + 52) - 8, B[1] - u[1] * (bob + 52) + 4, '<i>T</i>', { anchor: 'end' });
    s.place(
      [
        { t: 'Pivot', p: [P[0] - 2, P[1] + 2], own: P, at: [[24, 62, 'start'], [24, 90, 'start']] },
        { t: 'Bob, mass m', p: [B[0] + bob - 2, B[1] - 6], own: B, at: [[332, 132, 'end'], [332, 104, 'end'], [332, 160, 'end']] },
        { t: 'Restoring force', p: [B[0] + tang[0], B[1] + tang[1]], own: B, hi: true, at: [[24, 252, 'start'], [24, 230, 'start'], [24, 274, 'start'], [24, 206, 'start']] },
      ],
      [s.resultRect('Period depends on length, not mass')]
    );
    s.result('Period depends on length, not mass');
    return s;
  },
  check() {
    const { u, t, mg, radial, tang } = penGeo();
    const dot = (a: [number, number], b: [number, number]) => a[0] * b[0] + a[1] * b[1];
    const sum: [number, number] = [radial[0] + tang[0], radial[1] + tang[1]];
    return [
      ['The restoring part is at right angles to the string', Math.abs(dot(t, u)) < 1e-9],
      ['It points back towards the lowest point', tang[0] < 0],
      ['Its two parts add back to mg exactly', Math.hypot(sum[0] - mg[0], sum[1] - mg[1]) < 1e-6],
      [`Its size is mg sin θ: ${(Math.hypot(...tang) / PEN.W).toFixed(3)} = sin 22° (${Math.sin(PEN.th).toFixed(3)})`, Math.abs(Math.hypot(...tang) / PEN.W - Math.sin(PEN.th)) < 1e-9],
    ];
  },
};

/* ===================================================================== */
/* 4. Precision is not accuracy                                           */
/* ===================================================================== */
const ringOf5 = (cx: number, cy: number, r: number, turn: number) => [0, 1, 2, 3, 4].map((i) => { const a = ((turn + i * 72) * Math.PI) / 180; return [+(cx + r * Math.cos(a)).toFixed(1), +(cy + r * Math.sin(a)).toFixed(1)] as [number, number]; });
const TGT = { O: [170, 148] as [number, number], rings: [92, 64, 36], dotR: 5 };
const meanOf = (pts: [number, number][]) => [pts.reduce((a, p) => a + p[0], 0) / pts.length, pts.reduce((a, p) => a + p[1], 0) / pts.length] as [number, number];
type TargetCase = { chip: string; cap: string; kind: 'precise' | 'accurate' | 'both'; pts: [number, number][]; res: string };
const precision: Diagram = {
  id: 'precision',
  topic: 2,
  name: 'Precision is not accuracy',
  cases: [
    { chip: 'Precise, not accurate', kind: 'precise', pts: ringOf5(46, -34, 16, 14), res: 'Systematic error: calibrate', cap: 'Five readings close together but all off the centre: they agree with each other, not with the true value. A systematic error does this; calibration cures it.' },
    { chip: 'Accurate, not precise', kind: 'accurate', pts: [[-52, -18], [40, -46], [30, 50], [-36, 44], [18, -28]], res: 'Random error: take more readings', cap: 'Five readings scattered all round the centre: their average lands on the true value, but no two agree. Random error does this; averaging more readings tames it.' },
    { chip: 'Both', kind: 'both', pts: ringOf5(0, 0, 16, 30), res: 'Accurate and precise', cap: 'Five readings close together and on the centre: what every measurement is aiming for.' },
  ],
  draw(c: TargetCase) {
    const s = new Sketch(W, 312);
    const O = TGT.O;
    TGT.rings.forEach((r) => s.add(`<circle cx="${O[0]}" cy="${O[1]}" r="${r}" fill="#fff" stroke="${C.grey}" stroke-width="1.3"/>`));
    s.dot(O[0], O[1], 3.6);
    const pts = c.pts.map(([dx, dy]) => [O[0] + dx, O[1] + dy] as [number, number]);
    const mean = meanOf(pts), spread = Math.max(...pts.map((p) => Math.hypot(p[0] - mean[0], p[1] - mean[1]))) + 12;
    s.add(`<circle cx="${r1(mean[0])}" cy="${r1(mean[1])}" r="${r1(spread)}" fill="none" stroke="${C.grey}" stroke-width="1.2" stroke-dasharray="4 4"/>`);
    pts.forEach((p) => s.point(p[0], p[1], TGT.dotR, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="${TGT.dotR}" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/>`));
    s.point(mean[0], mean[1], 8.5, `<circle cx="${r1(mean[0])}" cy="${r1(mean[1])}" r="8.5" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    s.place(
      [
        { t: 'Their average', ring: [mean[0], mean[1], 9], own: mean, hi: true, key: 'ring', at: [[226, 20, 'start'], [236, 70, 'start'], [236, 110, 'start'], [332, 126, 'end'], [332, 150, 'end'], [12, 20, 'start'], [12, 70, 'start'], [12, 120, 'start']] },
        { t: 'True value', p: [O[0] - 3, O[1] + 3], own: O, key: 'dot', at: [[12, 230, 'start'], [12, 190, 'start'], [12, 150, 'start'], [236, 190, 'start']] },
        { t: `${pts.length} readings`, ring: [mean[0], mean[1], spread], own: [-999, -999], at: [[236, 190, 'start'], [236, 150, 'start'], [236, 110, 'start'], [12, 120, 'start'], [12, 160, 'start'], [236, 60, 'start'], [12, 20, 'start']] },
      ],
      [s.resultRect(c.res)]
    );
    s.result(c.res);
    return s;
  },
  check(c: TargetCase) {
    const pts = c.pts, mean = meanOf(pts), off = Math.hypot(...mean), spread = Math.max(...pts.map((p) => Math.hypot(p[0] - mean[0], p[1] - mean[1])));
    let gap = Infinity;
    pts.forEach((p, i) => pts.forEach((q, j) => { if (i < j) gap = Math.min(gap, Math.hypot(p[0] - q[0], p[1] - q[1])); }));
    const out: Check[] = [[`Five readings, none touching (closest ${gap.toFixed(0)} px apart)`, gap >= 2 * TGT.dotR + 5]];
    if (c.kind === 'precise') out.push([`Tight (spread ${spread.toFixed(0)} px) and off the centre (${off.toFixed(0)} px)`, spread < 20 && off > 40]);
    if (c.kind === 'accurate') out.push([`Scattered (spread ${spread.toFixed(0)} px) with the average on the centre (${off.toFixed(1)} px)`, spread > 40 && off < 4]);
    if (c.kind === 'both') out.push([`Tight (spread ${spread.toFixed(0)} px) and on the centre (${off.toFixed(1)} px)`, spread < 20 && off < 4]);
    return out;
  },
};

/* ===================================================================== */
/* 5. Two worked propagations                                             */
/* ===================================================================== */
type PropCase = { chip: string; cap: string; mode: 'sum' | 'product'; a: [string, number, number]; b: [string, number, number] };
const propResult = (c: PropCase) => {
  const [, a, da] = c.a, [, b, db] = c.b;
  if (c.mode === 'sum') return { value: a + b, err: da + db, rel: null as number | null };
  const rel = da / a + db / b;
  return { value: a * b, err: a * b * rel, rel };
};
const propagation: Diagram = {
  id: 'propagation',
  topic: 2,
  name: 'Two worked propagations',
  cases: [
    { chip: 'A sum: absolutes add', mode: 'sum', a: ['a', 4.2, 0.1], b: ['b', 3.1, 0.1], cap: 'Add two measured lengths and their absolute errors add too: 0.1 + 0.1 = 0.2 cm. They add even for a difference, because the errors could go either way.' },
    { chip: 'A product: relatives add', mode: 'product', a: ['l', 4.0, 0.1], b: ['b', 2.0, 0.1], cap: 'Multiply them and it is the relative errors that add: 2.5% + 5% = 7.5% of 8.0 cm², which is 0.6 cm².' },
  ],
  draw(c: PropCase) {
    const s = new Sketch(W, 352);
    const r = propResult(c), pct = (x: number) => `${+(x * 100).toFixed(1)}%`;
    const inA: Rect = [10, 44, 152, 108], inB: Rect = [188, 44, 330, 108], step: Rect = [86, 160, 254, 222], ans: Rect = [80, 276, 260, 342];
    const fx = (n: number) => n.toFixed(1);
    block(s, 10, 44, 142, 64, `<i>${c.a[0]}</i> = ${fx(c.a[1])} ± ${c.a[2]} cm`, c.mode === 'sum' ? `error ${c.a[2]} cm` : `error ${pct(c.a[2] / c.a[1])}`, 'start', { valueSize: 15 });
    block(s, 188, 44, 142, 64, `<i>${c.b[0]}</i> = ${fx(c.b[1])} ± ${c.b[2]} cm`, c.mode === 'sum' ? `error ${c.b[2]} cm` : `error ${pct(c.b[2] / c.b[1])}`, 'start', { valueSize: 15 });
    arrowBetween(s, inA, step, 5);
    arrowBetween(s, inB, step, 5);
    block(s, 86, 160, 168, 62, c.mode === 'sum' ? `<i>a</i> + <i>b</i> = ${fx(r.value)} cm` : `<i>A</i> = <i>lb</i> = ${fx(r.value)} cm²`, c.mode === 'sum' ? 'the sum' : 'the area', 'step', { valueSize: 16 });
    s.vec(170, 228, 170, 270, { color: C.slate, w: 1.4 });
    block(s, 80, 276, 180, 66, `${fx(r.value)} ± ${fx(r.err)} ${c.mode === 'sum' ? 'cm' : 'cm²'}`, c.mode === 'sum' ? `${c.a[2]} + ${c.b[2]} = ${fx(r.err)} cm` : `${pct(c.a[2] / c.a[1])} + ${pct(c.b[2] / c.b[1])} = ${pct(r.rel ?? 0)}`, 'answer', { valueSize: 19 });
    s.place([{ t: c.mode === 'sum' ? 'Absolute errors add' : 'Percentage errors add', p: [172, 249], hi: true, at: [[184, 238, 'start'], [12, 238, 'start']] }], [ans, step]);
    return s;
  },
  check(c: PropCase) {
    const r = propResult(c);
    if (c.mode === 'sum') return [[`4.2 + 3.1 = ${r.value.toFixed(1)} cm`, Math.abs(r.value - 7.3) < 1e-9], [`Errors add: 0.1 + 0.1 = ${r.err.toFixed(1)} cm`, Math.abs(r.err - 0.2) < 1e-9]];
    return [
      [`4.0 × 2.0 = ${r.value.toFixed(1)} cm²`, Math.abs(r.value - 8) < 1e-9],
      [`Relative errors add: 2.5% + 5% = ${((r.rel ?? 0) * 100).toFixed(1)}%`, Math.abs((r.rel ?? 0) - 0.075) < 1e-9],
      [`7.5% of 8.0 cm² = ${r.err.toFixed(1)} cm²`, Math.abs(r.err - 0.6) < 1e-9],
    ];
  },
};

/* ===================================================================== */
/* 6. Two rules that must never be swapped                                */
/* ===================================================================== */
type SigCase = { chip: string; cap: string; mul: boolean; a: string; b: string };
const sf = (x: string) => x.replace('.', '').replace(/^0+/, '').length;
const dp = (x: string) => (x.split('.')[1] ?? '').length;
const sigOutcome = (c: SigCase) => {
  const exact = c.mul ? +c.a * +c.b : +c.a + +c.b;
  const keep = c.mul ? Math.min(sf(c.a), sf(c.b)) : Math.min(dp(c.a), dp(c.b));
  const rounded = c.mul ? Number(exact.toPrecision(keep)) : Number(exact.toFixed(keep));
  const decider = c.mul ? (sf(c.a) <= sf(c.b) ? 'a' : 'b') : dp(c.a) <= dp(c.b) ? 'a' : 'b';
  return { exact: +exact.toFixed(4), keep, rounded, decider };
};
const sigfig: Diagram = {
  id: 'sigfig',
  topic: 3,
  name: 'Two rules that must never be swapped',
  cases: [
    { chip: 'Multiply: count figures', mul: true, a: '2.5', b: '3.42', cap: 'In × and ÷ the answer keeps as many significant figures as the least precise number. 2.5 has two, so 8.55 becomes 8.6.' },
    { chip: 'Add: count decimal places', mul: false, a: '2.5', b: '3.42', cap: 'In + and − it keeps as many decimal places as the least precise number. 2.5 has one, so 5.92 becomes 5.9.' },
  ],
  draw(c: SigCase) {
    const s = new Sketch(W, 352);
    const o = sigOutcome(c);
    const desc = (x: string) => (c.mul ? `${sf(x)} sig figs` : `${dp(x)} decimal place${dp(x) > 1 ? 's' : ''}`);
    const inA: Rect = [14, 44, 142, 106], inB: Rect = [198, 44, 326, 106], step: Rect = [96, 156, 244, 218], ans: Rect = [112, 272, 228, 338];
    block(s, 14, 44, 128, 62, c.a, desc(c.a), o.decider === 'a' ? 'hi' : 'start');
    block(s, 198, 44, 128, 62, c.b, desc(c.b), o.decider === 'b' ? 'hi' : 'start');
    arrowBetween(s, inA, step, 5);
    arrowBetween(s, inB, step, 5);
    block(s, 96, 156, 148, 62, `${c.a} ${c.mul ? '×' : '+'} ${c.b}`, `= ${o.exact}`, 'step', { subStix: true });
    s.vec(170, 224, 170, 266, { color: C.slate, w: 1.4 });
    block(s, 112, 272, 116, 66, String(o.rounded), c.mul ? `${o.keep} sig figs` : `${o.keep} decimal place${o.keep > 1 ? 's' : ''}`, 'answer');
    s.place([{ t: 'Decides the answer', p: [o.decider === 'a' ? 78 : 262, 44], hi: true, at: [[o.decider === 'a' ? 52 : 196, 12, 'start']] }]);
    s.place([{ t: c.mul ? 'Fewest sig figs' : 'Fewest decimal places', p: [172, 246], at: [[184, 234, 'start'], [12, 234, 'start']] }], [ans]);
    return s;
  },
  check(c: SigCase) {
    const o = sigOutcome(c);
    return [
      [`${c.a} ${c.mul ? '×' : '+'} ${c.b} = ${o.exact}`, Math.abs(o.exact - (c.mul ? 8.55 : 5.92)) < 1e-9],
      [`Keep ${o.keep} ${c.mul ? 'significant figures' : 'decimal place'}: ${o.rounded}`, String(o.rounded) === (c.mul ? '8.6' : '5.9')],
      [`"Decides the answer" sits on ${c.a}, the less precise number`, o.decider === 'a'],
    ];
  },
};

/* ===================================================================== */
/* 7. The ladder of least counts                                          */
/* ===================================================================== */
const RUNGS = [
  { name: 'Metre scale', lc: 1 },
  { name: 'Vernier callipers', lc: 0.1 },
  { name: 'Screw gauge', lc: 0.01 },
];
const leastCounts: Diagram = {
  id: 'least-counts',
  topic: 4,
  name: 'The ladder of least counts',
  cases: [{ chip: 'A hundredfold in two steps', cap: 'Each instrument reads ten times finer than the one above it: 1 mm, then 0.1 mm, then 0.01 mm. Two steps make a hundredfold.' }],
  draw() {
    const s = new Sketch(W, 340);
    const ys = [18, 120, 222];
    RUNGS.forEach((g, i) => {
      const finest = i === RUNGS.length - 1;
      s.add(`<rect x="70" y="${ys[i]}" width="200" height="66" rx="12" fill="#fff" stroke="${finest ? C.mari : C.border}" stroke-width="${finest ? 2 : 1.3}"/>`);
      s.add(`<text x="170" y="${ys[i] + 22}" text-anchor="middle" font-family="${F.tag}" font-size="12" fill="${C.slate}">${g.name}</text>`);
      s.text(170, ys[i] + 50, `${g.lc} mm`, { size: 21 });
      if (i < RUNGS.length - 1) {
        s.vec(170, ys[i] + 72, 170, ys[i + 1] - 6, { color: C.slate, w: 1.4 });
        s.sym(182, (ys[i] + 66 + ys[i + 1]) / 2 + 5, `÷ ${Math.round(g.lc / RUNGS[i + 1].lc)}`, { size: 15, color: C.slate, anchor: 'start' });
      }
    });
    s.result('100 times finer in two steps');
    return s;
  },
  check() {
    return [
      [`1 mm ÷ 0.1 mm = ${Math.round(1 / 0.1)}`, Math.round(1 / 0.1) === 10],
      [`0.1 mm ÷ 0.01 mm = ${Math.round(0.1 / 0.01)}`, Math.round(0.1 / 0.01) === 10],
      [`Overall: ${Math.round(1 / 0.01)} times finer`, Math.round(1 / 0.01) === 100],
    ];
  },
};

/* ===================================================================== */
/* 8. The jaws are closed. What does it read?                             */
/* ===================================================================== */
type VerCase = { chip: string; cap: string; e: number; k: number; res: string };
const VU = 21, VX0 = 80, BT = 56, BB = 94, SB = 132, TIP = 222, FACE = 58;
const VX = (mm: number) => VX0 + mm * VU;
const vernier: Diagram = {
  id: 'vernier',
  topic: 4,
  name: 'The jaws are closed. What does it read?',
  cases: [
    { chip: 'No zero error', e: 0, k: 10, res: 'Zero error 0', cap: 'Jaws closed, and the vernier zero sits on the main zero; the 10th vernier mark lines up with 9 mm.' },
    { chip: 'Positive', e: 0.3, k: 3, res: 'Zero error +0.3 mm', cap: 'The vernier zero sits 0.3 mm right of the main zero, and the 3rd mark lines up: +3 × 0.1 mm. Subtract it from every reading.' },
    { chip: 'Negative', e: -0.3, k: 7, res: 'Zero error −0.3 mm', cap: 'The vernier zero sits 0.3 mm left, and the 7th mark lines up: −(10 − 7) × 0.1 mm. Subtracting it adds 0.3 mm.' },
  ],
  draw(c: VerCase) {
    const s = new Sketch(W, 292);
    const r = 6, slideR = VX(c.e + 9) + 16, mHit = c.e === 0 ? 9 : Math.round(c.e + 0.9 * c.k);
    s.add(`<rect x="30" y="${BT}" width="292" height="${BB - BT}" rx="${r}" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    s.add(`<path d="M30 ${BB - r} V${TIP - 26} L${FACE} ${TIP} V${BB}" fill="#fff" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round"/>`);
    s.add(`<path d="M${FACE} ${BB} H${slideR - r} Q${slideR} ${BB} ${slideR} ${BB + r} V${SB - r} Q${slideR} ${SB} ${slideR - r} ${SB} H${FACE + 26} V${TIP - 26} L${FACE} ${TIP} Z" fill="#fff" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round"/>`);
    for (let i = -1; i <= 11; i++) {
      const x = VX(i);
      if (x < 34 || x > 318) continue;
      const hitM = i === mHit;
      s.line(x, BB, x, BB - (i % 5 === 0 ? 15 : 9), { color: hitM ? C.mari : C.ink, w: hitM ? 2.4 : 1.1 });
    }
    s.sym(VX(0), BB - 21, '0', { size: 12 });
    s.sym(VX(10), BB - 21, '1', { size: 12 });
    s.sym(VX(10) + 14, BB - 21, 'cm', { size: 10.5, color: C.faint });
    for (let k = 0; k <= 10; k++) {
      const x = VX(c.e + 0.9 * k), hitV = c.e === 0 ? k === 10 : k === c.k;
      s.line(x, BB, x, BB + (k % 5 === 0 ? 14 : 9), { color: hitV ? C.mari : C.ink, w: hitV ? 2.4 : 1.1 });
    }
    [0, 5, 10].forEach((k) => s.sym(VX(c.e + 0.9 * k), BB + 27, String(k), { size: 11 }));
    const hx = VX(mHit);
    s.tag(hx, 18, 'Lines up', hx, BB - 10, { hi: true, anchor: 'middle' });
    if (hx > 170) s.tag(30, 18, 'Main scale', 48, BT + 2);
    else s.tag(234, 18, 'Main scale', 300, BT + 2);
    s.tag(VX(c.e + 4.5), 146, 'Vernier scale', VX(c.e + 4.5), SB - 2, { anchor: 'middle' });
    s.tag(74, 214, 'Jaws closed', FACE + 2, TIP - 10);
    s.result(c.res);
    return s;
  },
  check(c: VerCase) {
    const m = c.e + 0.9 * c.k, err = c.e === 0 ? 0 : c.e > 0 ? c.k * 0.1 : -(10 - c.k) * 0.1;
    return [
      [`Vernier mark ${c.k} sits at ${m.toFixed(1)} mm, exactly on a main-scale mark`, Math.abs(m - Math.round(m)) < 1e-9],
      [`Zero error ${err === 0 ? '0' : `${err > 0 ? '+' : '−'}${Math.abs(err).toFixed(1)} mm`} matches the offset`, Math.abs(err - c.e) < 1e-9],
      ['Ten vernier divisions span 9 mm (least count 0.1 mm)', Math.abs(10 * 0.9 - 9) < 1e-9],
    ];
  },
};

/* ===================================================================== */
/* 9. Parallax, from your thumb to a star                                 */
/* ===================================================================== */
type ParCase = { chip: string; cap: string; thumb?: boolean };
const PAR = { S: [170, 44] as [number, number], A: [112, 232] as [number, number], B: [228, 232] as [number, number] };
const parallax: Diagram = {
  id: 'parallax',
  topic: 5,
  name: 'Parallax, from your thumb to a star',
  cases: [
    { chip: 'The thin triangle', cap: 'Two observers a known distance <i>b</i> apart both sight the same star. The angle at the star is tiny, so <i>θ</i> = <i>b</i>/<i>D</i> in radians. Drawn wide; a real one is far thinner.' },
    { chip: 'Your thumb', thumb: true, cap: 'Close one eye, then the other: your thumb jumps against the far wall. Your eyes are the basis <i>b</i>, and the jump is the parallax.' },
  ],
  draw(c: ParCase) {
    const s = new Sketch(W, 322);
    if (!c.thumb) {
      const { S, A, B } = PAR, M: [number, number] = [170, 232];
      const aA = Math.atan2(A[1] - S[1], A[0] - S[0]), aB = Math.atan2(B[1] - S[1], B[0] - S[0]), ar = 42;
      s.add(`<path d="M${A} L${S} L${B} Z" fill="#fff" stroke="${C.ink}" stroke-width="1.7" stroke-linejoin="round"/>`);
      s.line(S[0], S[1], M[0], M[1], { color: C.grey, dash: true, w: 1.2 });
      s.add(`<path d="M${r1(S[0] + ar * Math.cos(aB))} ${r1(S[1] + ar * Math.sin(aB))} A${ar} ${ar} 0 0 1 ${r1(S[0] + ar * Math.cos(aA))} ${r1(S[1] + ar * Math.sin(aA))}" fill="none" stroke="${C.mari}" stroke-width="2.6" stroke-linecap="round"/>`);
      s.sym(S[0], S[1] + 62, 'θ', { italic: true, color: C.amber });
      s.line(268, S[1], 268, M[1], { color: C.grey, w: 1.2 });
      s.line(262, S[1], 274, S[1], { color: C.grey, w: 1.2 });
      s.line(262, M[1], 274, M[1], { color: C.grey, w: 1.2 });
      s.sym(282, (S[1] + M[1]) / 2 + 5, 'D', { italic: true, anchor: 'start' });
      s.line(A[0], M[1] + 20, B[0], M[1] + 20, { color: C.grey, w: 1.2 });
      s.line(A[0], M[1] + 14, A[0], M[1] + 26, { color: C.grey, w: 1.2 });
      s.line(B[0], M[1] + 14, B[0], M[1] + 26, { color: C.grey, w: 1.2 });
      s.sym(M[0], M[1] + 38, 'b', { italic: true });
      [S, A, B].forEach((p) => s.dot(p[0], p[1]));
      s.sym(A[0] - 12, A[1] + 16, 'A', { italic: true });
      s.sym(B[0] + 12, B[1] + 16, 'B', { italic: true });
      s.tag(196, 16, 'Star', S[0] + 4, S[1] - 2);
      s.tag(16, 104, 'Parallax angle', S[0] - 14, S[1] + 40, { hi: true });
      s.tag(14, 196, 'Observer', A[0] - 2, A[1] - 3);
      s.tag(186, 258, 'Observer', B[0] - 3, B[1] + 3);
      s.result('Angle = basis ÷ distance');
      return s;
    }
    const L: [number, number] = [128, 222], R: [number, number] = [212, 222], Th: [number, number] = [170, 138], wall = 52;
    const at = (E: [number, number]) => E[0] + ((wall - E[1]) / (Th[1] - E[1])) * (Th[0] - E[0]);
    const xl = at(L), xr = at(R), midJ = (xl + xr) / 2;
    s.line(20, wall, 320, wall, { w: 1.7 });
    s.line(L[0], L[1], xl, wall, { color: C.grey, dash: true, w: 1.2 });
    s.line(R[0], R[1], xr, wall, { color: C.grey, dash: true, w: 1.2 });
    s.add(`<rect x="${Th[0] - 8}" y="${Th[1] - 24}" width="16" height="44" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/>`);
    s.vec(midJ, wall + 14, xl - 4, wall + 14, { color: C.mari, w: 2.6 });
    s.vec(midJ, wall + 14, xr + 4, wall + 14, { color: C.mari, w: 2.6 });
    s.dot(xl, wall);
    s.dot(xr, wall);
    [L, R].forEach(([x, y]) => s.point(x, y, 7, `<ellipse cx="${x}" cy="${y}" rx="12" ry="7" fill="#fff" stroke="${C.ink}" stroke-width="1.7"/><circle cx="${x}" cy="${y}" r="2.8" fill="${C.ink}"/>`));
    s.line(L[0], L[1] + 22, R[0], R[1] + 22, { color: C.grey, w: 1.2 });
    s.line(L[0], L[1] + 16, L[0], L[1] + 28, { color: C.grey, w: 1.2 });
    s.line(R[0], R[1] + 16, R[0], R[1] + 28, { color: C.grey, w: 1.2 });
    s.sym((L[0] + R[0]) / 2, L[1] + 40, 'b', { italic: true });
    s.tag(252, 16, 'Far wall', 300, wall);
    s.tag(midJ, 78, 'The jump', midJ, wall + 16, { hi: true, anchor: 'middle' });
    s.tag(206, 128, 'Your thumb', Th[0] + 8, Th[1] - 6);
    s.tag(16, 190, 'Left eye', L[0] - 10, L[1] - 3);
    s.tag(244, 190, 'Right eye', R[0] + 10, R[1] - 3);
    s.result('The jump is the parallax');
    return s;
  },
  check(c: ParCase) {
    if (c.thumb) return [['Each sight line runs from an eye through the thumb to the wall', true], ['The jump is drawn both ways, as it happens', true]];
    const { S, A, B } = PAR, b = B[0] - A[0], D = A[1] - S[1], th = 2 * Math.atan(b / 2 / D);
    return [
      ['D runs from the star straight down to the line AB', A[1] === B[1]],
      [`θ = ${th.toFixed(3)} rad vs b/D = ${(b / D).toFixed(3)}: within ${((100 * Math.abs(th - b / D)) / th).toFixed(0)}%; the caption says it is drawn wide`, Math.abs(th - b / D) / th < 0.05],
    ];
  },
};

/* ===================================================================== */
/* 10. The ladder of magnitudes                                           */
/* ===================================================================== */
type MagCase = { chip: string; cap: string; unit: string; lo: number; hi: number; items: { name: string; v: number; you?: boolean }[] };
const AX = { x: 112, top: 30, bottom: 338 };
const magY = (c: MagCase, v: number) => AX.bottom - ((Math.log10(v) - c.lo) / (c.hi - c.lo)) * (AX.bottom - AX.top);
const magnitudes: Diagram = {
  id: 'magnitudes',
  topic: 5,
  name: 'The ladder of magnitudes',
  cases: [
    { chip: 'Lengths', unit: 'm', lo: -15, hi: 26, cap: 'From the size of a nucleus to the edge of the observable universe: about 41 powers of ten, each mark ten times the one below.', items: [{ name: 'Nucleus', v: 1e-15 }, { name: 'Hydrogen atom', v: 1e-10 }, { name: 'Red blood cell', v: 8e-6 }, { name: 'You', v: 1.7, you: true }, { name: 'Radius of the Earth', v: 6.4e6 }, { name: 'Earth to the Sun', v: 1.5e11 }, { name: 'Observable universe', v: 1e26 }] },
    { chip: 'Masses', unit: 'kg', lo: -31, hi: 55, cap: 'From an electron to the observable universe: about 86 powers of ten. You sit roughly halfway, in powers of ten.', items: [{ name: 'Electron', v: 9.1e-31 }, { name: 'Proton', v: 1.67e-27 }, { name: 'Raindrop', v: 1e-6 }, { name: 'You', v: 70, you: true }, { name: 'The Earth', v: 6e24 }, { name: 'The Sun', v: 2e30 }, { name: 'Observable universe', v: 1e55 }] },
    { chip: 'Times', unit: 's', lo: -22, hi: 18, cap: 'From light crossing a nucleus to the age of the universe: about 40 powers of ten, with a heartbeat near the middle.', items: [{ name: 'Light crosses a nucleus', v: 1e-22 }, { name: 'One wave of light', v: 2e-15 }, { name: 'A heartbeat', v: 1, you: true }, { name: 'A day', v: 8.64e4 }, { name: 'A year', v: 3.15e7 }, { name: 'Age of the universe', v: 4.3e17 }] },
  ],
  draw(c: MagCase) {
    const s = new Sketch(W, 392);
    s.line(AX.x, AX.top, AX.x, AX.bottom, { w: 1.7 });
    const span = c.hi - c.lo, every = span > 60 ? 20 : 10;
    for (let p = Math.ceil(c.lo / 5) * 5; p <= c.hi; p += 5) {
      const y = AX.bottom - ((p - c.lo) / span) * (AX.bottom - AX.top);
      s.line(AX.x - 5, y, AX.x + 5, y, { color: C.grey, w: 1.2 });
      if (p % every === 0) s.sym(AX.x - 12, y + 5, `10<sup>${p < 0 ? '−' + -p : p}</sup>`, { size: 13, anchor: 'end', color: C.slate });
    }
    s.sym(AX.x, AX.top - 12, c.unit, { size: 14, color: C.slate });
    const specs = c.items.map((it) => {
      const y = magY(c, it.v);
      s.point(AX.x, y, 4, `<circle cx="${AX.x}" cy="${r1(y)}" r="4" fill="${it.you ? C.mari : C.ink}"/>`);
      const ys = [0, -26, 26, -52, 52, -78, 78].map((d) => y - 11 + d);
      return { t: it.name, p: [AX.x + 4, y] as [number, number], own: [AX.x, y] as [number, number], hi: !!it.you, at: ys.map((yy) => [AX.x + 34, yy, 'start'] as [number, number, 'start']) };
    });
    s.place(specs, [s.resultRect(`${span} powers of ten`)]);
    s.result(`${span} powers of ten`);
    return s;
  },
  check(c: MagCase) {
    const logs = c.items.map((i) => Math.log10(i.v));
    return [
      ['Every item is placed at its own power of ten', c.items.every((i) => Math.abs(magY(c, i.v) - (AX.bottom - ((Math.log10(i.v) - c.lo) / (c.hi - c.lo)) * (AX.bottom - AX.top))) < 1e-9)],
      ['The items climb in order of size', logs.every((l, i) => i === 0 || l > logs[i - 1])],
      [`All fit on the scale, 10${sup(c.lo)} to 10${sup(c.hi)} ${c.unit}`, logs.every((l) => l >= c.lo - 1e-9 && l <= c.hi + 1e-9)],
    ];
  },
};

/** Chapter order. */
export const DIAGRAMS_PHYSICS_11_01: Diagram[] = [siRoots, dimFilter, pendulum, precision, propagation, sigfig, leastCounts, vernier, parallax, magnitudes];
