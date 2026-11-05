import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 2 (Electrochemistry): every drawing of the Master
 * Reference book on pp. 58–100, redrawn. Every page was looked at on its image and
 * its vector shapes counted. The chapter has FOUR drawings, all numbered, each on a
 * "CHAPTER 2 · FIGURES" page, each caption printed a first time a page earlier with
 * "(see next page)"; the captions here are the figure pages' own, which carry no pointer:
 *
 *   Figure 2.1 (p. 63; caption first on p. 62) — Topic 01, topic index 0.
 *   Figure 2.2 (p. 75; caption first on p. 74) — Topic 02, index 1.
 *   Figure 2.3 (p. 79; caption first on p. 78) — Topic 03, index 2.
 *   Figure 2.4 (p. 81; caption first on p. 80) — Topic 03, index 2.
 *
 * Judged NOT drawings: the symbol tables (pp. 61, 77), the reference tables B1–B3
 * (pp. 86–87), the question-share table (p. 97), boxed answers and typeset equations,
 * and the rules between sections. Topic 04 and Additional topics A–E hold no figure.
 *
 * Everything is computed, never placed by eye:
 *   2.1 — E° from the book's table B1 (p. 87): the anode is the lower couple,
 *     E°cell = 0.34 − (−0.76) = 1.10 V; arrows and half-reactions read back.
 *   2.2 — both curves are the book's own, read from the figure's path data on p. 75:
 *     KCl is Λm = 150 − 18√c (dashed to √c = 0.1), and CH₃COOH is Λm = αΛ°m with Λ°m = 390
 *     and α from Ostwald's law at Ka = 1.8 × 10⁻⁵, which reproduces the book's curve to
 *     within 0.1 S cm² mol⁻¹. The chapter prints neither that slope nor this Ka.
 *   2.3 — the wiring read back: long plate (+) to the anode, short plate (−) to the cathode.
 *   2.4 — every half-reaction balanced for atoms and charge; water depth over the
 *     metal from the drop's own outline: greatest at the centre, zero at the rim.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');

/* ---------- drawing helpers (as in chemistry-11-07.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean };
/** Every line a label must keep clear of, by sketch. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.free) keep(s, pts);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w, dash: o.dash });
  if (!o.free) keep(s, [a, b]);
}
const rectPts = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]];
const circlePts = (c: P, rad: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i) => [c[0] + rad * Math.cos((2 * Math.PI * i) / n), c[1] + rad * Math.sin((2 * Math.PI * i) / n)] as P);
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
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
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const hasTag = (s: Sketch, t: string) => s.tags.some((x) => x.name === t);

/**
 * A tag whose name needs a subscript, a superscript or Greek, all in STIX (Android: one
 * font inside one tag). One line or two; one leader, or two when it names two marks.
 */
function mtag(s: Sketch, x: number, y: number, lines: string[], ps: P[], o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end'; size?: number } = {}): Rect {
  const size = o.size ?? 13, hi = !!o.hi, lh = size + 4, anchor = o.anchor ?? 'start';
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 18, h = lines.length === 1 ? 22 : lines.length * lh + 6;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x, rect: Rect = [x0, y, x0 + w, y + h];
  const name = plain(lines.join(' '));
  ps.forEach((p, i) => {
    const to: P = [Math.max(x0 + 8, Math.min(x0 + w - 8, p[0])), p[1] < y ? y : y + h];
    s.add(`<line x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(to[0])}" y2="${r1(to[1])}" stroke="${hi ? C.mari : C.grey}" stroke-width="1.2"/><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6" fill="${hi ? C.mari : C.ink}"/>`);
    // a second leader goes through the audit too, on a record with no area of its own that stops just short of the tag
    if (i === 0) s.tags.push({ name, rect, from: p, to });
    else s.tags.push({ name: `${name} (second line)`, rect: [x0, y, x0, y], from: p, to: [to[0], to[1] + (p[1] < y ? -3 : 3)] });
  });
  if (!ps.length) s.tags.push({ name, rect, from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${y}" width="${r1(w)}" height="${h}" rx="11" fill="#fff" stroke="${hi ? C.mari : C.border}" stroke-width="${hi ? 1.5 : 1}"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y + (lines.length === 1 ? 15.5 : 3 + lh * i + lh * 0.72), t, { size, color: hi ? C.amber : C.text }));
  return rect;
}

/* ---------- the chemistry: half-reactions counted, E° and λ° as the book's tables print them ---------- */
type Sp = { at: Record<string, number>; q: number };
const sp = (q: number, at: Record<string, number>): Sp => ({ at, q });
const ELECTRON = sp(-1, {});
const side = (items: [number, Sp][]) => {
  const at: Record<string, number> = {};
  let q = 0;
  items.forEach(([n, x]) => { q += n * x.q; Object.entries(x.at).forEach(([e, k]) => { at[e] = (at[e] ?? 0) + n * k; }); });
  return { at, q };
};
function balanced(left: [number, Sp][], right: [number, Sp][]): boolean {
  const a = side(left), b = side(right);
  return close(a.q, b.q) && [...new Set([...Object.keys(a.at), ...Object.keys(b.at)])].every((e) => close(a.at[e] ?? 0, b.at[e] ?? 0));
}
/** Table B1 (pp. 86–87), V. */
const E0 = { Zn: -0.76, Cu: 0.34, Fe: -0.44, O2: 1.23 };
/** Table B2 (p. 87), S cm² mol⁻¹. */
const LAMBDA = { H: 349.6, K: 73.5, Cl: 76.3, Ac: 40.9 };

/* ===================================================================== */
/* Figure 2.1 · Daniell cell (Topic 01, p. 63)                            */
/* ===================================================================== */
const CAP21 = 'The Daniell cell: Zn anode in ZnSO<sub>4</sub> and Cu cathode in CuSO<sub>4</sub> joined by a salt bridge; electrons flow Zn to Cu, emf about 1.10 V.';
const G21 = {
  lb: [12, 158] as [number, number], rb: [182, 328] as [number, number], rim: 196, surf: 216, bot: 300,
  rodL: 66, rodR: 274, rodTop: 112, rodBot: 290, rodW: 8, wire: 58, v: [170, 58] as P, vr: 17,
  br: { lo: 104, li: 122, ri: 218, ro: 236, top: 96, under: 136, dip: 228 }, h: 350,
};
const DRAWN21 = new WeakMap<Sketch, { e: [P, P]; cur: [P, P]; k: [P, P]; cl: [P, P]; anodeX: number; cathodeX: number; volts: string }>();
/** The anode is the lower couple on the table. */
const daniell = () => {
  const anode = E0.Zn < E0.Cu ? 'Zn' : 'Cu';
  return { anode, E: E0.Cu - E0.Zn };
};
const fig21: Diagram = {
  id: 'c12-02-fig-2.1',
  topic: 0,
  name: 'Daniell cell',
  cases: [{ chip: 'Daniell cell', cap: CAP21 }],
  draw() {
    const g = G21, s = new Sketch(W, g.h), { E } = daniell(), b = g.br;
    // beakers (open at the top); solution surfaces (grey dashed), broken at the rods and the bridge
    [g.lb, g.rb].forEach(([x0, x1]) => path(s, [[x0, g.rim], [x0, g.bot], [x1, g.bot], [x1, g.rim]], { w: 1.7 }));
    ([[g.lb[0] + 3, g.rodL - g.rodW], [g.rodL + g.rodW, b.lo], [b.li, g.lb[1] - 3], [g.rb[0] + 3, b.ri], [b.ro, g.rodR - g.rodW], [g.rodR + g.rodW, g.rb[1] - 3]] as [number, number][])
      .forEach(([a, c]) => path(s, [[a, g.surf], [c, g.surf]], { color: C.grey, w: 1.2, dash: true }));
    // rods
    [g.rodL, g.rodR].forEach((x) => path(s, rectPts([x - g.rodW, g.rodTop, x + g.rodW, g.rodBot]), { w: 1.5 }));
    // wire and voltmeter
    const { v, vr } = g;
    path(s, [[g.rodL, g.rodTop], [g.rodL, g.wire], [v[0] - vr, g.wire]], { w: 1.5 });
    path(s, [[v[0] + vr, g.wire], [g.rodR, g.wire], [g.rodR, g.rodTop]], { w: 1.5 });
    path(s, circlePts(v, vr), { w: 1.5 });
    s.sym(v[0], v[1] + 5.5, 'V', { size: 15 });
    const volts = `${E.toFixed(2)} V`;
    s.sym(v[0] + vr + 4, v[1] - 10, volts, { size: 15, anchor: 'start' });
    // electrons (marigold: the figure's point) and conventional current, on the wire
    const ax = g.rodL, cx = g.rodR;
    const e: [P, P] = [[ax + 22, g.wire], [ax + 76, g.wire]], cur: [P, P] = [[cx - 6, g.wire], [cx - 42, g.wire]];
    arrow(s, e[0], e[1], { color: C.mari, w: 2.2, free: true });
    arrow(s, cur[0], cur[1], { color: C.slate, w: 1.7, free: true });
    // salt bridge: an inverted U, two walls, its ends dipping below each surface
    path(s, [[b.lo, b.dip], [b.lo, b.top], [b.ro, b.top], [b.ro, b.dip]], { color: C.slate, w: 1.4 });
    path(s, [[b.li, b.dip], [b.li, b.under], [b.ri, b.under], [b.ri, b.dip]], { color: C.slate, w: 1.4 });
    path(s, [[b.lo, b.dip], [b.li, b.dip]], { color: C.slate, w: 1.4 });
    path(s, [[b.ri, b.dip], [b.ro, b.dip]], { color: C.slate, w: 1.4 });
    const k: [P, P] = [[132, 108], [226, 108]], cl: [P, P] = [[208, 124], [114, 124]];
    arrow(s, k[0], k[1], { color: C.slate, w: 1.4, free: true });
    arrow(s, cl[0], cl[1], { color: C.slate, w: 1.4, free: true });
    s.sym(118, 113, 'K<sup>+</sup>', { size: 13 });
    s.sym(222, 129, 'Cl<sup>−</sup>', { size: 13 });
    s.sym(170, 160, 'salt bridge', { size: 13, color: C.slate });
    s.sym(170, 176, '(KCl)', { size: 13, color: C.slate });
    // metals and ions
    s.sym(89, 170, 'Zn', { size: 17 });
    s.sym(251, 170, 'Cu', { size: 17 });
    s.sym(36, 268, 'Zn<sup>2+</sup>', { size: 14 });
    s.sym(96, 268, 'SO<sub>4</sub><sup>2−</sup>', { size: 14 });
    s.sym(244, 268, 'Cu<sup>2+</sup>', { size: 14 });
    s.sym(306, 268, 'SO<sub>4</sub><sup>2−</sup>', { size: 14 });
    // electrode names under each beaker
    const lx = (g.lb[0] + g.lb[1]) / 2, rx = (g.rb[0] + g.rb[1]) / 2;
    s.sym(lx, 322, 'anode (−)', { size: 14 });
    s.sym(lx, 340, 'Zn in ZnSO<sub>4</sub>', { size: 14 });
    s.sym(rx, 322, 'cathode (+)', { size: 14 });
    s.sym(rx, 340, 'Cu in CuSO<sub>4</sub>', { size: 14 });
    // tags
    mtag(s, 4, 14, ['e<sup>−</sup> flow Zn → Cu'], [[(e[0][0] + e[1][0]) / 2 - 4, g.wire]], { hi: true });
    s.place([
      { t: 'voltmeter', p: [v[0], v[1] - vr], at: [[v[0], 2, 'middle']] },
      { t: 'current', p: [(cur[0][0] + cur[1][0]) / 2 + 6, g.wire], at: [[245, 14, 'start']] },
    ]);
    DRAWN21.set(s, { e, cur, k, cl, anodeX: ax, cathodeX: cx, volts });
    return s;
  },
  check() {
    const s = fig21.draw(fig21.cases[0]), d = DRAWN21.get(s)!, g = G21, { anode, E } = daniell(), out: Check[] = [];
    out.push([`E°(Zn²⁺/Zn) = ${fmt(E0.Zn)} V is below E°(Cu²⁺/Cu) = +${fmt(E0.Cu)} V, so Zn is the anode and Cu the cathode`, anode === 'Zn']);
    out.push([`E°cell = ${fmt(E0.Cu)} − (${fmt(E0.Zn)}) = ${fmt(E)} V, positive, as drawn "${d.volts}" and the caption's 1.10 V`, close(E, 1.1, 1e-9) && E > 0 && d.volts === '1.10 V' && hasLabel(s, '1.10 V')]);
    const Zn = sp(0, { Zn: 1 }), Zn2 = sp(2, { Zn: 1 }), Cu = sp(0, { Cu: 1 }), Cu2 = sp(2, { Cu: 1 }), SO4 = sp(-2, { S: 1, O: 4 }), K = sp(1, { K: 1 }), Cl = sp(-1, { Cl: 1 });
    out.push(['Zn → Zn²⁺ + 2e⁻ and Cu²⁺ + 2e⁻ → Cu balance for atoms and charge, and Zn + Cu²⁺ → Zn²⁺ + Cu is their sum', balanced([[1, Zn]], [[1, Zn2], [2, ELECTRON]]) && balanced([[1, Cu2], [2, ELECTRON]], [[1, Cu]]) && balanced([[1, Zn], [1, Cu2]], [[1, Zn2], [1, Cu]])]);
    out.push(['Read off the drawing: the electron arrow on the wire points from the Zn rod toward the Cu rod', d.anodeX === g.rodL && d.cathodeX === g.rodR && d.e[1][0] > d.e[0][0]]);
    out.push(['Conventional current in the wire runs the other way, from Cu toward Zn', d.cur[1][0] < d.cur[0][0] && Math.sign(d.cur[1][0] - d.cur[0][0]) === -Math.sign(d.e[1][0] - d.e[0][0])]);
    out.push(['In the bridge K⁺ moves toward the cathode and Cl⁻ toward the anode, as the text on p. 60 says', d.k[1][0] > d.k[0][0] && d.cl[1][0] < d.cl[0][0]]);
    out.push(['Each solution is neutral as named: Zn²⁺ + SO₄²⁻, Cu²⁺ + SO₄²⁻; the bridge\'s KCl gives K⁺ and Cl⁻', Zn2.q + SO4.q === 0 && Cu2.q + SO4.q === 0 && K.q + Cl.q === 0 && hasLabel(s, 'Zn2+') && hasLabel(s, 'Cu2+') && s.labels.filter((l) => l.text === 'SO42−').length === 2 && hasLabel(s, 'K+') && hasLabel(s, 'Cl−')]);
    out.push(['The anode is marked (−) and the cathode (+), each rod in its own solution and below the surface', hasLabel(s, 'anode (−)') && hasLabel(s, 'Zn in ZnSO4') && hasLabel(s, 'cathode (+)') && hasLabel(s, 'Cu in CuSO4') && g.rodBot > g.surf && g.rodL > g.lb[0] && g.rodL < g.lb[1] && g.rodR > g.rb[0] && g.rodR < g.rb[1]]);
    out.push(['The bridge ends dip below both surfaces and stand clear of the rods', g.br.dip > g.surf && g.br.lo > g.rodL + g.rodW && g.br.ro < g.rodR - g.rodW && g.br.lo > g.lb[0] && g.br.li < g.lb[1] && g.br.ri > g.rb[0] && g.br.ro < g.rb[1]]);
    out.push(['Named as in the book: voltmeter, electron flow, current, salt bridge (KCl)', hasTag(s, 'voltmeter') && hasTag(s, 'e− flow Zn → Cu') && hasTag(s, 'current') && hasLabel(s, 'salt bridge') && hasLabel(s, '(KCl)')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.2 · Λm against √c (Topic 02, p. 75)                           */
/* ===================================================================== */
const CAP22 = 'Molar conductivity vs root concentration: a strong electrolyte extrapolates cleanly to the intercept; a weak one shoots up near infinite dilution. Schematic: the KCl line is drawn flatter than measured values, and the weak curve is cut off at the top of the axis; it goes on rising to Λ°<sub>m</sub> = 390.5 S cm<sup>2</sup> mol<sup>−1</sup> as <i>c</i> → 0.';
/** The book's plot, from its path data: KCl and the weak acid. */
const PLOT = { kcl0: 150, A: 18, weak0: 390, Ka: 1.8e-5, dashTo: 0.1, weakFrom: 0.00733 };
const kcl = (rc: number) => PLOT.kcl0 - PLOT.A * rc;
/** α from Ostwald's law, Ka = cα²/(1 − α), with c = (√c)². */
const alphaOf = (rc: number) => { const c = rc * rc, K = PLOT.Ka; return (-K + Math.sqrt(K * K + 4 * K * c)) / (2 * c); };
const weak = (rc: number) => PLOT.weak0 * alphaOf(rc);
const G22 = { x0: 46, x1: 326, y0: 262, k: 232 / 175, top: 175, h: 306 };
const X22 = (rc: number) => G22.x0 + (G22.x1 - G22.x0) * rc;
const Y22 = (L: number) => G22.y0 - G22.k * L;
const DRAWN22 = new WeakMap<Sketch, { weakPts: P[]; dash: [P, P]; solid: [P, P]; dot: P }>();
const fig22: Diagram = {
  id: 'c12-02-fig-2.2',
  topic: 1,
  name: 'Molar conductivity against root concentration',
  cases: [{ chip: 'Strong and weak', cap: CAP22 }],
  draw() {
    const g = G22, s = new Sketch(W, g.h);
    // axes and ticks, every 20 and every 0.2 as the book
    path(s, [[g.x0, Y22(g.top)], [g.x0, g.y0], [g.x1, g.y0]], { color: C.slate, w: 1.3 });
    for (let L = 0; L <= 160; L += 20) {
      path(s, [[g.x0 - 4, Y22(L)], [g.x0, Y22(L)]], { color: C.slate, w: 1.1 });
      s.sym(g.x0 - 8, Y22(L) + 4.5, String(L), { size: 13, anchor: 'end', color: C.slate });
    }
    for (let i = 0; i <= 5; i++) {
      const rc = i / 5;
      path(s, [[X22(rc), g.y0], [X22(rc), g.y0 + 4]], { color: C.slate, w: 1.1 });
      s.sym(X22(rc), g.y0 + 20, rc.toFixed(1), { size: 13, color: C.slate });
    }
    s.sym(6, 14, 'Λ<sub>m</sub> (S cm<sup>2</sup> mol<sup>−1</sup>)', { size: 13, anchor: 'start' });
    s.sym((g.x0 + g.x1) / 2, g.y0 + 37, '√<i>c</i> (mol<sup>1/2</sup> L<sup>−1/2</sup>)', { size: 15 });
    // KCl: a straight line, dashed where it is extrapolated
    const dash: [P, P] = [[X22(0), Y22(kcl(0))], [X22(PLOT.dashTo), Y22(kcl(PLOT.dashTo))]], solid: [P, P] = [dash[1], [X22(1), Y22(kcl(1))]];
    path(s, dash, { w: 1.6, dash: true });
    path(s, solid, { w: 2.1 });
    // the weak acid, sampled closely near the axis, where it shoots up
    const n = 240, weakPts: P[] = Array.from({ length: n + 1 }, (_, i) => { const rc = PLOT.weakFrom * Math.pow(1 / PLOT.weakFrom, i / n); return [X22(rc), Y22(weak(rc))] as P; });
    path(s, weakPts, { color: C.mari, w: 2.3 });
    const dot: P = [X22(0), Y22(kcl(0))];
    s.dot(dot[0], dot[1]);
    // tags
    mtag(s, 120, 2, ['Λ°<sub>m</sub> (KCl):', 'read off by extrapolation'], [dot]);
    const k0 = 0.7;
    mtag(s, 330, 104, ['KCl (strong electrolyte)'], [[X22(k0), Y22(kcl(k0))]], { anchor: 'end' });
    const w1 = 0.035, w2 = 0.25;
    mtag(s, 104, 138, ['cannot extrapolate;', 'use Kohlrausch’s law'], [[X22(w1), Y22(weak(w1))]], { hi: true });
    mtag(s, 130, 204, ['CH<sub>3</sub>COOH (weak electrolyte)'], [[X22(w2), Y22(weak(w2))]]);
    DRAWN22.set(s, { weakPts, dash, solid, dot });
    return s;
  },
  check() {
    const s = fig22.draw(fig22.cases[0]), d = DRAWN22.get(s)!, g = G22, out: Check[] = [];
    const kclLimit = LAMBDA.K + LAMBDA.Cl, acLimit = LAMBDA.H + LAMBDA.Ac;
    out.push([`The KCl intercept ${PLOT.kcl0} is Kohlrausch's λ°(K⁺) + λ°(Cl⁻) = ${fmt(LAMBDA.K, 1)} + ${fmt(LAMBDA.Cl, 1)} = ${fmt(kclLimit, 1)} S cm² mol⁻¹, to the plot's reading`, Math.abs(PLOT.kcl0 - kclLimit) <= 0.5]);
    out.push([`The weak curve's limit ${PLOT.weak0} is λ°(H⁺) + λ°(CH₃COO⁻) = ${fmt(LAMBDA.H, 1)} + ${fmt(LAMBDA.Ac, 1)} = ${fmt(acLimit, 1)} S cm² mol⁻¹, to the plot's reading`, Math.abs(PLOT.weak0 - acLimit) <= 0.5]);
    out.push([`KCl is straight, Λm = Λ°m − A√c: ${PLOT.kcl0} at √c = 0, ${fmt(kcl(1), 0)} at √c = 1, the same slope in both drawn pieces`, close(kcl(1), 132) && close((d.dash[1][1] - d.dash[0][1]) / (d.dash[1][0] - d.dash[0][0]), (d.solid[1][1] - d.solid[0][1]) / (d.solid[1][0] - d.solid[0][0]), 1e-9)]);
    out.push(['The intercept mark sits on the axis at √c = 0 and Λm = 150, the start of the dashed extrapolation, which runs from √c = 0.1 down to the axis', close(d.dot[0], g.x0) && close(d.dot[1], Y22(150)) && close(d.dash[0][1], d.dot[1]) && close(d.dash[1][0], X22(0.1)) && close(d.dash[1][0], d.solid[0][0])]);
    const samples = [PLOT.weakFrom, 0.05, 0.1, 0.2, 0.5, 1];
    out.push([`Each point of the weak curve obeys Ostwald: Ka = cα²/(1 − α) = 1.8 × 10⁻⁵ with α = Λm/Λ°m (√c = ${samples.join(', ')})`, samples.every((rc) => { const a = weak(rc) / PLOT.weak0; return close((rc * rc * a * a) / (1 - a), PLOT.Ka, 1e-10); })]);
    out.push([`It matches the book's plotted ends: ${fmt(weak(PLOT.weakFrom), 1)} at √c = ${PLOT.weakFrom} (book 169.7), ${fmt(weak(1), 2)} at √c = 1 (book 1.65)`, Math.abs(weak(PLOT.weakFrom) - 169.7) < 0.3 && Math.abs(weak(1) - 1.65) < 0.05]);
    const lift = weak(0.01) / weak(1);
    out.push([`The weak curve shoots up near infinite dilution: Λm rises ${fmt(lift, 0)}-fold from √c = 1 to √c = 0.01, while KCl gains only ${fmt(kcl(0) / kcl(1), 2)}-fold over the whole axis`, lift > 50 && kcl(0) / kcl(1) < 1.2]);
    const slopeAt = (rc: number, h = 1e-4) => (weak(rc + h) - weak(rc - h)) / (2 * h);
    const fromLine = weak(0.2) - slopeAt(0.2) * 0.2;
    out.push([`Why it cannot be extrapolated: a straight line from √c = 0.2 reaches only ${fmt(fromLine, 0)} at √c = 0, far short of Λ°m = ${PLOT.weak0}`, fromLine < PLOT.weak0 / 5]);
    out.push(['Read off the drawing: the weak curve falls all the way along, and stays inside the axis (up to 175)', d.weakPts.every((p, i) => i === 0 || p[1] > d.weakPts[i - 1][1]) && d.weakPts[0][1] >= Y22(g.top) && close(d.weakPts[d.weakPts.length - 1][0], X22(1), 1e-6)]);
    out.push(['Named as in the book: both curves, the intercept and the Kohlrausch remark; axes every 20 and every 0.2', hasTag(s, 'KCl (strong electrolyte)') && hasTag(s, 'CH3COOH (weak electrolyte)') && hasTag(s, 'Λ°m (KCl): read off by extrapolation') && hasTag(s, 'cannot extrapolate; use Kohlrausch’s law') && hasLabel(s, '160') && hasLabel(s, '1.0')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.3 · electrolytic cell (Topic 03, p. 79)                       */
/* ===================================================================== */
const CAP23 = 'An electrolytic cell: the electrode wired to the battery’s positive terminal is the anode (oxidation); electrons flow from the battery to the cathode.';
const G23 = {
  bx: [30, 310] as [number, number], rim: 164, surf: 192, bot: 298, rodL: 100, rodR: 240, rodW: 9, rodTop: 118, rodBot: 288,
  wire: 78, short: { x: 160, half: 12 }, long: { x: 180, half: 22 }, h: 348,
};
type Wire23 = { rodX: number; plate: 'short' | 'long' };
const DRAWN23 = new WeakMap<Sketch, { wires: Wire23[]; eL: [P, P]; eR: [P, P]; cat: [P, P]; an: [P, P] }>();
const fig23: Diagram = {
  id: 'c12-02-fig-2.3',
  topic: 2,
  name: 'Electrolytic cell',
  cases: [{ chip: 'Electrolytic cell', cap: CAP23 }],
  draw() {
    const g = G23, s = new Sketch(W, g.h);
    // the beaker, the surface (grey dashed, broken at the rods), the rods
    path(s, [[g.bx[0], g.rim], [g.bx[0], g.bot], [g.bx[1], g.bot], [g.bx[1], g.rim]], { w: 1.7 });
    ([[g.bx[0] + 3, g.rodL - g.rodW], [g.rodL + g.rodW, g.rodR - g.rodW], [g.rodR + g.rodW, g.bx[1] - 3]] as [number, number][])
      .forEach(([a, c]) => path(s, [[a, g.surf], [c, g.surf]], { color: C.grey, w: 1.2, dash: true }));
    [g.rodL, g.rodR].forEach((x) => path(s, rectPts([x - g.rodW, g.rodTop, x + g.rodW, g.rodBot]), { w: 1.5 }));
    // the battery: short plate (−) wired to the left rod, long plate (+) to the right rod
    const wires: Wire23[] = [{ rodX: g.rodL, plate: 'short' }, { rodX: g.rodR, plate: 'long' }];
    path(s, [[g.rodL, g.rodTop], [g.rodL, g.wire], [g.short.x, g.wire]], { w: 1.5 });
    path(s, [[g.long.x, g.wire], [g.rodR, g.wire], [g.rodR, g.rodTop]], { w: 1.5 });
    path(s, [[g.short.x, g.wire - g.short.half], [g.short.x, g.wire + g.short.half]], { w: 2.4 });
    path(s, [[g.long.x, g.wire - g.long.half], [g.long.x, g.wire + g.long.half]], { w: 2.4 });
    s.sym(g.long.x + 13, 66, '+', { size: 18 });
    s.sym(g.short.x - 13, 70, '−', { size: 18 });
    // electrons: out of the anode to +, from − to the cathode (marigold: the figure's point)
    const eL: [P, P] = [[g.rodL - 16, 84], [g.rodL - 16, 114]], eR: [P, P] = [[g.rodR + 16, 114], [g.rodR + 16, 84]];
    arrow(s, eL[0], eL[1], { color: C.mari, w: 2.2, free: true });
    arrow(s, eR[0], eR[1], { color: C.mari, w: 2.2, free: true });
    s.sym(g.rodL - 30, 103, 'e<sup>−</sup>', { size: 15, color: C.amber });
    s.sym(g.rodR + 30, 103, 'e<sup>−</sup>', { size: 15, color: C.amber });
    // the ions and the electrolyte
    const cat: [P, P] = [[160, 224], [g.rodL + g.rodW + 6, 224]], an: [P, P] = [[180, 256], [g.rodR - g.rodW - 6, 256]];
    arrow(s, cat[0], cat[1], { color: C.slate, w: 1.6, free: true });
    arrow(s, an[0], an[1], { color: C.slate, w: 1.6, free: true });
    s.sym(148, 215, 'cations', { size: 13 });
    s.sym(192, 247, 'anions', { size: 13 });
    s.sym(170, 284, 'electrolyte', { size: 14, color: C.slate });
    // electrode names under each rod
    s.sym(g.rodL, 320, 'cathode (−)', { size: 14 });
    s.sym(g.rodL, 338, 'reduction', { size: 14 });
    s.sym(g.rodR, 320, 'anode (+)', { size: 14 });
    s.sym(g.rodR, 338, 'oxidation', { size: 14 });
    s.place([{ t: 'DC source (battery)', p: [(g.short.x + g.long.x) / 2, g.wire], at: [[170, 6, 'middle']] }]);
    DRAWN23.set(s, { wires, eL, eR, cat, an });
    return s;
  },
  check() {
    const s = fig23.draw(fig23.cases[0]), d = DRAWN23.get(s)!, g = G23, out: Check[] = [];
    const to = (plate: Wire23['plate']) => d.wires.find((w) => w.plate === plate)!.rodX;
    out.push(['The battery is drawn with its long plate as + and its short plate as −', g.long.half > g.short.half && hasLabel(s, '+') && hasLabel(s, '−')]);
    out.push(['Read off the wiring: the + plate goes to the rod named anode, the − plate to the rod named cathode', to('long') === g.rodR && to('short') === g.rodL && s.labels.some((l) => l.text === 'anode (+)' && close((l.rect[0] + l.rect[2]) / 2, g.rodR)) && s.labels.some((l) => l.text === 'cathode (−)' && close((l.rect[0] + l.rect[2]) / 2, g.rodL))]);
    out.push(['The anode does oxidation and the cathode reduction, whichever kind of cell it is', hasLabel(s, 'oxidation') && hasLabel(s, 'reduction')]);
    out.push(['Electrons flow from the battery to the cathode: the left arrow runs down the wire toward the rod', d.eL[1][1] > d.eL[0][1] && d.eL[1][1] < g.rodTop && d.eL[0][0] < g.rodL]);
    out.push(['And they leave the anode for the battery\'s + terminal: the right arrow runs up the wire away from the rod', d.eR[1][1] < d.eR[0][1] && d.eR[0][0] > g.rodR]);
    out.push(['Cations move toward the cathode (which the battery makes negative), anions toward the anode', d.cat[1][0] < d.cat[0][0] && d.cat[1][0] > g.rodL + g.rodW && d.an[1][0] > d.an[0][0] && d.an[1][0] < g.rodR - g.rodW]);
    out.push(['The signs are the reverse of the galvanic cell\'s: anode + here, anode − in Figure 2.1', hasLabel(s, 'anode (+)') && hasLabel(fig21.draw(fig21.cases[0]), 'anode (−)')]);
    out.push(['Both rods stand in the one beaker and reach below the surface', g.rodBot > g.surf && g.rodBot < g.bot && g.rodL - g.rodW > g.bx[0] && g.rodR + g.rodW < g.bx[1]]);
    out.push(['Named as in the book: DC source (battery), cations, anions, electrolyte', hasTag(s, 'DC source (battery)') && hasLabel(s, 'cations') && hasLabel(s, 'anions') && hasLabel(s, 'electrolyte')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 2.4 · rusting under a droplet (Topic 03, p. 81)                 */
/* ===================================================================== */
const CAP24 = 'Rusting under a water droplet: iron dissolves at the oxygen-poor centre (anode), O<sub>2</sub> is reduced at the edge (cathode), rust forms in between.';
const G24 = { ys: 176, cx: 170, a: 112, b: 84, ironX: [12, 328] as [number, number], ironBot: 240, rust: 70, rustR: 10, eY: 197, h: 250 };
/** The drop's height over the metal at a distance from its centre: the water oxygen must get through. */
const depth = (dx: number) => (Math.abs(dx) >= G24.a ? 0 : G24.b * Math.sqrt(1 - (dx / G24.a) ** 2));
const DRAWN24 = new WeakMap<Sketch, { anode: P; cathodes: P[]; rust: P[]; eL: [P, P]; eR: [P, P] }>();
const fig24: Diagram = {
  id: 'c12-02-fig-2.4',
  topic: 2,
  name: 'Rusting under a water droplet',
  cases: [{ chip: 'Rusting', cap: CAP24 }],
  draw() {
    const g = G24, s = new Sketch(W, g.h), [xL, xR] = g.ironX;
    const rust: P[] = [[g.cx - g.rust, g.ys], [g.cx + g.rust, g.ys]];
    // the iron block; its top is broken where the rust deposits sit
    path(s, [[rust[0][0] - g.rustR, g.ys], [xL, g.ys], [xL, g.ironBot], [xR, g.ironBot], [xR, g.ys], [rust[1][0] + g.rustR, g.ys]], { w: 1.8 });
    path(s, [[rust[0][0] + g.rustR, g.ys], [rust[1][0] - g.rustR, g.ys]], { w: 1.8 });
    // the drop, from its own outline, and the rust deposits
    const n = 72, drop: P[] = Array.from({ length: n + 1 }, (_, i) => { const t = Math.PI * (1 - i / n); return [g.cx + g.a * Math.cos(t), g.ys - g.b * Math.sin(t)] as P; });
    path(s, drop, { w: 1.6, color: C.slate });
    rust.forEach((c) => path(s, circlePts(c, g.rustR), { w: 1.5 }));
    // electrons through the metal, centre to rim
    const eL: [P, P] = [[g.cx - 12, g.eY], [g.cx - g.a + 8, g.eY]], eR: [P, P] = [[g.cx + 12, g.eY], [g.cx + g.a - 8, g.eY]];
    arrow(s, eL[0], eL[1], { w: 1.8, free: true });
    arrow(s, eR[0], eR[1], { w: 1.8, free: true });
    s.sym((eL[0][0] + eL[1][0]) / 2, 218, 'e<sup>−</sup>', { size: 15 });
    s.sym((eR[0][0] + eR[1][0]) / 2, 218, 'e<sup>−</sup>', { size: 15 });
    s.sym(36, 228, 'iron', { size: 14, color: C.slate });
    // tags: the anode under the middle of the drop, the cathodes at the rim, rust on both deposits
    const anode: P = [g.cx, g.ys], cathodes: P[] = [[g.cx - g.a, g.ys], [g.cx + g.a, g.ys]];
    mtag(s, g.cx, 114, ['ANODE (low O<sub>2</sub>)', 'Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>'], [anode], { anchor: 'middle', size: 12, hi: true });
    mtag(s, 4, 2, ['CATHODE (high O<sub>2</sub>)', 'O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O'], [cathodes[0]], { size: 12 });
    mtag(s, W - 6, 2, ['CATHODE', '(high O<sub>2</sub>)'], [cathodes[1]], { size: 12, anchor: 'end' });
    mtag(s, g.cx, 54, ['rust, Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O'], rust.map((c): P => [c[0], c[1] - g.rustR]), { anchor: 'middle' });
    const shoulder = 72;
    s.place([{ t: 'water drop', p: [g.cx + shoulder, g.ys - depth(shoulder)], at: [[202, 2, 'middle']] }]);
    DRAWN24.set(s, { anode, cathodes, rust, eL, eR });
    return s;
  },
  check() {
    const s = fig24.draw(fig24.cases[0]), d = DRAWN24.get(s)!, g = G24, out: Check[] = [];
    const Fe = sp(0, { Fe: 1 }), Fe2 = sp(2, { Fe: 1 }), O2 = sp(0, { O: 2 }), Hp = sp(1, { H: 1 }), H2O = sp(0, { H: 2, O: 1 }), Fe2O3 = sp(0, { Fe: 2, O: 3 });
    out.push(['Anode: Fe → Fe²⁺ + 2e⁻ balances for atoms and charge', balanced([[1, Fe]], [[1, Fe2], [2, ELECTRON]])]);
    out.push(['Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O balances for atoms and charge', balanced([[1, O2], [4, Hp], [4, ELECTRON]], [[2, H2O]])]);
    out.push(['2Fe + O₂ + 4H⁺ → 2Fe²⁺ + 2H₂O balances: two Fe give the 4e⁻ that one O₂ takes', balanced([[2, Fe], [1, O2], [4, Hp]], [[2, Fe2], [2, H2O]])]);
    out.push([`E°cell = ${fmt(E0.O2)} − (${fmt(E0.Fe)}) = ${fmt(E0.O2 - E0.Fe)} V, positive: rusting is spontaneous`, close(E0.O2 - E0.Fe, 1.67, 1e-9)]);
    const feON = (-Fe2O3.q + 2 * (Fe2O3.at.O ?? 0)) / (Fe2O3.at.Fe ?? 1);
    out.push(['Fe²⁺ then goes on to rust as on p. 96: 2Fe²⁺ + 2H₂O + ½O₂ → Fe₂O₃ + 4H⁺ balances, with Fe at +3 in Fe₂O₃', balanced([[2, Fe2], [2, H2O], [0.5, O2]], [[1, Fe2O3], [4, Hp]]) && feON === 3]);
    const [cl, cr] = d.cathodes, dep = (p: P) => depth(p[0] - g.cx);
    out.push([`Water over the metal, read from the drop: ${fmt(dep(d.anode), 0)} at the anode, ${fmt(dep(cl), 0)} at each cathode. The centre is furthest from the air (oxygen-poor), the rim next to it`, close(dep(d.anode), g.b) && close(dep(cl), 0) && close(dep(cr), 0)]);
    out.push(['The anode is marked at the middle of the drop on the iron surface; each cathode at its rim', d.anode[0] === g.cx && d.anode[1] === g.ys && close(cl[0], g.cx - g.a) && close(cr[0], g.cx + g.a) && cl[1] === g.ys && cr[1] === g.ys]);
    out.push(['Rust lies in between, on the surface, on each side of the anode and inside the rim', d.rust.every((c) => c[1] === g.ys && Math.abs(c[0] - g.cx) + g.rustR < g.a && Math.abs(c[0] - g.cx) - g.rustR > 0) && close(d.rust[0][0] + d.rust[1][0], 2 * g.cx)]);
    out.push(['Electrons run through the metal from centre to rim, both ways, below the surface', d.eL[1][0] < d.eL[0][0] && d.eR[1][0] > d.eR[0][0] && d.eL[0][1] > g.ys && d.eL[0][1] < g.ironBot && Math.abs(d.eL[1][0] - g.cx) > Math.abs(d.eL[0][0] - g.cx)]);
    out.push(['The drop is drawn inside the iron\'s width', g.cx - g.a > g.ironX[0] && g.cx + g.a < g.ironX[1]]);
    out.push(['Named as in the book: the anode with its reaction, both cathodes, the cathode reaction on the left, rust, water drop, iron', hasTag(s, 'ANODE (low O2) Fe → Fe2+ + 2e−') && hasTag(s, 'CATHODE (high O2) O2 + 4H+ + 4e− → 2H2O') && hasTag(s, 'CATHODE (high O2)') && hasTag(s, 'rust, Fe2O3·xH2O') && hasTag(s, 'water drop') && hasLabel(s, 'iron')]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_02: Diagram[] = [fig21, fig22, fig23, fig24];
