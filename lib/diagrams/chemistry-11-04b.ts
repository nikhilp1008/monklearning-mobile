import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 4 (Chemical Bonding and Molecular Structure),
 * second file: Figures 4.5–4.8 and every unnumbered drawing from Topic 03 on
 * (pp. 180–212). Figures 4.1–4.4 and the drawings of Topics 01–02 are in
 * chemistry-11-04.ts; both files are registered under 'chemistry|11|4'.
 *
 * Pages 180–212 were checked one by one on the page images. The drawings:
 *   c11-04-fig-4.5  p. 180 (figures page; cited inside Topic 02, Example 3, p. 179)  topic 1
 *   c11-04-fig-4.6  p. 188 (figures page; cited inside Topic 03, Example 4, p. 187)  topic 2, panels (a), (b)
 *   c11-04-fig-4.7  p. 195 (figures page; cited in Topic 04's diborane framework, p. 194)  topic 3
 *   c11-04-fig-4.8  p. 195 (figures page; cited inside Topic 04, Example 1, p. 194)  topic 3
 *   c11-04-A-d1     p. 201, Additional topic A, the book's "Figure 1" (MO energy orderings)  topic 4
 *   c11-04-D-d1     p. 206, Additional topic D, the two N₂O Lewis forms with their lone-pair
 *                   dots (typeset in the book, but dots over and under letters cannot be written
 *                   in the app's markup, so it is a drawing)  topic 7
 * Not drawings: the typeset MO configurations and orderings (pp. 184, 186, 187, 189), the bond-order
 * fractions, the electron-count table (p. 200), the lone-pair table (p. 203), the polarity
 * checklist (p. 205), the symmetry table (p. 207), the JEE/NEET distribution and traps tables
 * (pp. 209–210). Topics 03–04 and Additional topics B, C, E, F print no other drawing.
 *
 * Every structure is drawn from computed geometry: VSEPR angles (the book's 102° and 173° for SF₄,
 * 107° for NH₃, 109.5° for NH₄⁺, 120° for ring and nitro atoms), the book's bond lengths for
 * diborane (119 and 133 pm, to scale), the MO ladders from the book's two orderings. Each `check`
 * rebuilds the molecule as atoms and bonds and recomputes every atom's electron count, its formal
 * charge (V − lone-pair electrons − bonds), the sum against the stated charge, the electron total,
 * the angles and lengths read back off the drawing, and, for the MO ladders, aufbau/Pauli/Hund
 * fillings for every species the book tabulates.
 */

const W = 340;
type P = [number, number];
const D2R = Math.PI / 180;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
/** A unit vector at `deg` degrees, measured on screen (x right, y DOWN: 90° points down). */
const dir = (deg: number): P => [Math.cos(deg * D2R), Math.sin(deg * D2R)];
const perp = (a: P): P => [-a[1], a[0]];
/** The angle a–o–b in degrees, read off the drawing. */
const angleAt = (a: P, o: P, b: P) => { const u = unit(sub(a, o)), v = unit(sub(b, o)); return Math.acos(Math.max(-1, Math.min(1, u[0] * v[0] + u[1] * v[1]))) / D2R; };
const samples = (a: number, b: number, n: number) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- drawing helpers (as in chemistry-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot' | 'hb'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : d === 'hb' ? ' stroke-dasharray="0.1 5.2"' : '');
/** Every line a label must keep clear of (bonds, arcs, arrows), by sketch. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
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
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every bond and line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
/** No lone-pair dot or other marked point sits on or within 2 px of a label. */
const dotsClear = (s: Sketch): Check => {
  const bad = s.points.filter((p) => s.labels.some((l) => rectDist(l.rect, [p.x, p.y]) < p.r + 2)).length;
  return [`Every lone-pair dot stays clear of every symbol${bad ? ` (${bad} touch)` : ''}`, bad === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), dotsClear(s)];

/* ---------- structures: atoms, bonds, charges, lone pairs ---------- */
const ATOM = 18;
/** The box an element symbol takes, centred on its atom: its true STIX width, cap height. */
const atomRect = (p: P, el: string, size = ATOM): Rect => { const w = mathW(el, size); return [p[0] - w / 2, p[1] - 0.36 * size, p[0] + w / 2, p[1] + 0.36 * size]; };
/** An element symbol centred on its atom, registered as a label (tags and lines keep clear of it). */
function atomSym(s: Sketch, p: P, el: string, o: { size?: number; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? ATOM;
  s.labels.push({ text: el, rect: atomRect(p, el, size) });
  s.text(p[0], p[1] + 0.33 * size, el, { size, color: o.color ?? C.text, semibold: o.bold });
}
/** A small sign (+, −) or other mark centred at p, registered as a label. */
function smallSym(s: Sketch, p: P, html: string, size = 13, color: string = C.text) {
  const w = mathW(html, size);
  s.labels.push({ text: html.replace(/<[^>]+>/g, ''), rect: [p[0] - w / 2, p[1] - 0.36 * size, p[0] + w / 2, p[1] + 0.36 * size] });
  s.text(p[0], p[1] + 0.33 * size, html, { size, color });
}
/** Walk from a toward b until the point is `gap` px clear of every box (a bond stops short of the symbols it joins). */
function trim(a: P, b: P, boxes: Rect[], gap = LABEL_GAP + 0.3): P {
  const u = unit(sub(b, a)), L = len(a, b);
  for (let t = 0; t < L; t += 0.25) { const p = add(a, mul(u, t)); if (boxes.every((r) => rectDist(r, p) >= gap)) return p; }
  return b;
}
/** The point at distance just enough from an atom's box (in direction deg) for a mark of half-size h to clear it by gap. */
function beside(p: P, el: string, deg: number, h: number, gap: number, size = ATOM): P {
  const r = atomRect(p, el, size), u = dir(deg);
  for (let t = 0; t < 60; t += 0.25) { const q = add(p, mul(u, t)); const box: Rect = [q[0] - h, q[1] - h, q[0] + h, q[1] + h]; if (!(box[2] + gap <= r[0] || r[2] + gap <= box[0] || box[3] + gap <= r[1] || r[3] + gap <= box[1])) continue; return q; }
  return add(p, mul(u, 60));
}

type Atom = {
  id: string; el: string; p: P;
  /** drawn as a symbol (ring carbons are not: skeletal corners) */
  show: boolean;
  /** lone pairs it carries (drawn or not) */
  lp: number;
  /** hydrogens the skeletal drawing leaves implicit */
  hImp?: number;
  /** formal charge the book prints on it, and where (degrees) the sign sits; no qAt: not printed on the atom */
  q: number; qAt?: number;
  /** where the sign sits instead, as an offset from the atom (after a lone pair, as ":⁻") */
  qOff?: P;
  /** the directions (degrees) of the lone pairs the book draws as dot pairs */
  lpAt?: number[];
  color?: string;
};
type Bond = { a: string; b: string; order: number; style?: 'wedge' | 'hash' | 'ring' };
type Mol = { atoms: Atom[]; bonds: Bond[]; charge: number };
const VAL: Record<string, number> = { H: 1, B: 3, C: 4, N: 5, O: 6, F: 7, S: 6 };
const byId = (m: Mol, id: string) => m.atoms.find((a) => a.id === id)!;
const boxesOf = (m: Mol): Rect[] => m.atoms.filter((a) => a.show).map((a) => atomRect(a.p, a.el));

/** A bond between two atoms, trimmed clear of every symbol, single to triple, plain, wedge or hash. */
function bondLine(s: Sketch, a: P, b: P, order: number, boxes: Rect[], o: { style?: Bond['style']; color?: string; w?: number } = {}) {
  const g = LABEL_GAP + 0.3 + (order > 1 ? 2.5 : 0), pa = trim(a, b, boxes, g), pb = trim(b, a, boxes, g), n = perp(unit(sub(b, a))), col = o.color ?? C.ink;
  if (o.style === 'wedge') {
    const w = 3.6, c1 = add(pb, mul(n, w)), c2 = add(pb, mul(n, -w));
    s.add(`<path d="M${r1(pa[0])} ${r1(pa[1])} L${r1(c1[0])} ${r1(c1[1])} L${r1(c2[0])} ${r1(c2[1])} Z" fill="${col}" stroke="${col}" stroke-width="1" stroke-linejoin="round"/>`);
    keep(s, [pa, c1]); keep(s, [pa, c2]);
    return;
  }
  if (o.style === 'hash') {
    const k = 7;
    for (let i = 0; i <= k; i++) { const c = add(pa, mul(sub(pb, pa), i / k)), w = 0.6 + (3.4 * i) / k; path(s, [add(c, mul(n, w)), add(c, mul(n, -w))], { color: col, w: 1.3 }); }
    return;
  }
  const offs = order >= 3 ? [-3.6, 0, 3.6] : order === 2 ? [-2.4, 2.4] : [0];
  offs.forEach((d) => path(s, [add(pa, mul(n, d)), add(pb, mul(n, d))], { color: col, w: o.w ?? 1.8 }));
}
/** A pair of lone-pair dots beside an atom, in direction deg. Returns the two dot centres. */
function lonePair(s: Sketch, p: P, el: string, deg: number, color: string = C.ink): P[] {
  const c = beside(p, el, deg, 1.9, 2.4), n = perp(dir(deg));
  const d = [add(c, mul(n, 3)), add(c, mul(n, -3))];
  d.forEach((q) => s.dot(q[0], q[1], 1.9, color));
  return d;
}
function drawMol(s: Sketch, m: Mol, o: { skip?: string[] } = {}) {
  const boxes = boxesOf(m);
  m.bonds.forEach((b) => { if (!o.skip?.includes(`${b.a}-${b.b}`)) bondLine(s, byId(m, b.a).p, byId(m, b.b).p, b.order === 1.5 ? 1 : b.order, boxes, { style: b.style }); });
  m.atoms.forEach((a) => {
    if (!a.show) return;
    atomSym(s, a.p, a.el, { color: a.color });
    if (a.qAt !== undefined && a.q) smallSym(s, a.qOff ? add(a.p, a.qOff) : beside(a.p, a.el, a.qAt, 4.6, 2.6), a.q > 0 ? '+' : '−');
    (a.lpAt ?? []).forEach((d) => lonePair(s, a.p, a.el, d));
  });
}

/* ---------- the electron bookkeeping every structure check runs ---------- */
type Book = { fc: Record<string, number>; shell: Record<string, number>; total: number; valence: number };
function bookkeep(m: Mol): Book {
  const fc: Record<string, number> = {}, shell: Record<string, number> = {};
  let bondE = 0, lpE = 0, valence = 0;
  for (const a of m.atoms) {
    const B = m.bonds.filter((b) => b.a === a.id || b.b === a.id).reduce((t, b) => t + b.order, 0) + (a.hImp ?? 0);
    fc[a.id] = VAL[a.el] - 2 * a.lp - B;
    shell[a.id] = 2 * a.lp + 2 * B;
    lpE += 2 * a.lp;
    valence += VAL[a.el] + (a.hImp ?? 0) * VAL.H;
  }
  bondE = 2 * (m.bonds.reduce((t, b) => t + b.order, 0) + m.atoms.reduce((t, a) => t + (a.hImp ?? 0), 0));
  return { fc, shell, total: bondE + lpE, valence: valence - m.charge };
}
/** The checks every drawn structure passes: each atom's shell, its formal charge as printed, the charge sum and the electron total. */
function molChecks(name: string, m: Mol, expand: Record<string, number> = {}): Check[] {
  const k = bookkeep(m);
  const full = m.atoms.every((a) => k.shell[a.id] === (expand[a.id] ?? (a.el === 'H' ? 2 : 8)));
  const printed = m.atoms.every((a) => (a.qAt === undefined ? true : k.fc[a.id] === a.q) && k.fc[a.id] === a.q);
  const sum = m.atoms.reduce((t, a) => t + k.fc[a.id], 0);
  const list = m.atoms.filter((a) => a.show || a.el !== 'C').map((a) => `${a.el}${a.id.replace(/^[A-Za-z]+/, '')} ${k.shell[a.id]} e, FC ${fmt(k.fc[a.id], 0)}`).join('; ');
  return [
    [`${name}: every atom has its full shell (H 2, others 8${Object.keys(expand).length ? `, ${Object.entries(expand).map(([id, n]) => `${byId(m, id).el} ${n}`).join(', ')}` : ''}): ${list}`, full],
    [`${name}: every formal charge (V − lone-pair electrons − bonds) equals the charge the drawing carries, and they sum to ${fmt(m.charge, 0)}`, printed && sum === m.charge],
    [`${name}: ${k.total} electrons in bonds and lone pairs = ${k.valence} valence electrons of the formula`, k.total === k.valence],
  ];
}

/* ===================================================================== */
/* Figure 4.5 · SF₄, see-saw (Topic 02, Example 3; figures page p. 180)   */
/* ===================================================================== */
const CAP45 = 'SF<sub>4</sub>: trigonal-bipyramidal electron-pair geometry with the lone pair in an equatorial position, giving a see-saw shape; the two axial S–F bonds bend slightly away from the lone pair (F–S–F ≈ 173°).';
/** The book's two angles: equatorial F–S–F 102°, axial F–S–F 173° (each axial bond 3.5° off the vertical, away from the lone pair). */
const SF4 = { eq: 102, ax: 173, S: [168, 126] as P, L: 80, lpD: 50 };
function mol45(): Mol {
  const { S, L, eq, ax } = SF4, tilt = (180 - ax) / 2;
  // the lone pair is on the left (180°), so the axial bonds lean right; the equatorial bonds open about 0°
  return {
    charge: 0,
    atoms: [
      { id: 'S', el: 'S', p: S, show: true, lp: 1, q: 0 },
      { id: 'F1', el: 'F', p: add(S, mul(dir(-90 + tilt), L)), show: true, lp: 3, q: 0 },
      { id: 'F2', el: 'F', p: add(S, mul(dir(90 - tilt), L)), show: true, lp: 3, q: 0 },
      { id: 'F3', el: 'F', p: add(S, mul(dir(-eq / 2), L)), show: true, lp: 3, q: 0 },
      { id: 'F4', el: 'F', p: add(S, mul(dir(eq / 2), L)), show: true, lp: 3, q: 0 },
    ],
    bonds: [{ a: 'S', b: 'F1', order: 1 }, { a: 'S', b: 'F2', order: 1 }, { a: 'S', b: 'F3', order: 1, style: 'wedge' }, { a: 'S', b: 'F4', order: 1 }],
  };
}
const fig45: Diagram = {
  id: 'c11-04-fig-4.5',
  topic: 1,
  name: 'SF₄: see-saw shape',
  cases: [{ chip: 'See-saw', cap: CAP45 }],
  draw() {
    const s = new Sketch(W, 304);
    const m = mol45(), S = SF4.S;
    drawMol(s, m);
    // the lone pair: a dashed lobe on the equatorial side opposite the two equatorial bonds, its two electrons inside
    const c = add(S, [-SF4.lpD, 0]), rx = 25, ry = 17;
    path(s, samples(0, 2 * Math.PI, 72).map((t): P => [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)]), { color: C.mari, w: 1.6, dash: 'dash' });
    s.dot(c[0], c[1] - 5, 2.4, C.ink); s.dot(c[0], c[1] + 5, 2.4, C.ink);
    // the 102° arc between the equatorial bonds
    const r = 30;
    path(s, samples(-SF4.eq / 2, SF4.eq / 2, 40).map((d) => add(S, mul(dir(d), r))), { color: C.slate, w: 1.3 });
    s.sym(S[0] + r + 9, S[1] + 5, `${SF4.eq}°`, { size: 15, anchor: 'start', color: C.slate });
    s.sym(W / 2, 270, `F<sub>ax</sub>–S–F<sub>ax</sub> = ${SF4.ax}°`, { size: 15 });
    s.sym(W / 2, 292, '(bent away from the lone pair)', { size: 14, color: C.slate });
    s.place([{ t: 'lone pair (equatorial)', hi: true, ring: [c[0], c[1], ry], bare: true, at: [[8, 222, 'start'], [6, 226, 'start'], [10, 230, 'start']] }]);
    return s;
  },
  check() {
    const m = mol45(), s = fig45.draw(fig45.cases[0]), p = (id: string) => byId(m, id).p, S = p('S');
    const ax = angleAt(p('F1'), S, p('F2')), eq = angleAt(p('F3'), S, p('F4'));
    const lpDir: P = [-1, 0];
    // the lone pair is equatorial: it lies in the plane of the two equatorial bonds, on the bisector of their outer angle
    const bis = unit(add(unit(sub(p('F3'), S)), unit(sub(p('F4'), S))));
    // VSEPR on the ideal trigonal bipyramid: an equatorial site has two neighbours at 90°, an axial site three
    const tbp: [number, number, number][] = [[0, 0, 1], [0, 0, -1], [1, 0, 0], [Math.cos(120 * D2R), Math.sin(120 * D2R), 0], [Math.cos(240 * D2R), Math.sin(240 * D2R), 0]];
    const at90 = (i: number) => tbp.filter((v, j) => j !== i && close(v[0] * tbp[i][0] + v[1] * tbp[i][1] + v[2] * tbp[i][2], 0, 1e-9)).length;
    const H = (6 + 4) / 2;
    const leanAway = [p('F1'), p('F2')].every((f) => (f[0] - S[0]) * lpDir[0] < 0);
    const ring = s.points.filter((q) => q.x < S[0] - 30);
    return [
      ...molChecks('SF₄', m, { S: 10 }),
      [`S: H = ½(V + M − C + A) = ½(6 + 4 − 0 + 0) = ${H} = 4 σ bonds + 1 lone pair (steric number 5, sp³d, trigonal bipyramid); the drawing has ${m.bonds.length} bonds and ${ring.length} lone-pair dots`, H === 5 && m.bonds.length + byId(m, 'S').lp === 5 && ring.length === 2],
      [`On the ideal trigonal bipyramid an equatorial site has ${at90(2)} neighbours at 90° and an axial site ${at90(0)}: the lone pair goes equatorial (the book's reason)`, at90(2) === 2 && at90(0) === 3],
      [`The drawn equatorial F–S–F angle is ${fmt(eq, 3)}° (the book's 102°), below the ideal 120°`, close(eq, 102, 1e-9) && eq < 120],
      [`The drawn axial F–S–F angle is ${fmt(ax, 3)}° (the book's ≈ 173°), below 180°, both axial bonds leaning away from the lone pair`, close(ax, 173, 1e-9) && leanAway],
      [`The lone pair sits on the equatorial bisector, opposite the two equatorial bonds (bisector ${fmt(bis[0], 3)}, ${fmt(bis[1], 3)})`, close(bis[0], -lpDir[0], 1e-9) && close(bis[1], -lpDir[1], 1e-9)],
      ['All four S–F bonds are drawn the same length', ['F1', 'F2', 'F3', 'F4'].every((f) => close(len(S, p(f)), SF4.L, 1e-9))],
      [`Four bond dipoles on a see-saw do not cancel: their vector sum, as drawn, is ${fmt(len([0, 0], ['F1', 'F2', 'F3', 'F4'].reduce<P>((t, f) => add(t, unit(sub(p(f), S))), [0, 0])), 3)} bond-lengths (SF₄ is polar)`, len([0, 0], ['F1', 'F2', 'F3', 'F4'].reduce<P>((t, f) => add(t, unit(sub(p(f), S))), [0, 0])) > 0.1],
      ['The caption states the same angle the drawing prints (173°)', CAP45.includes(`≈ ${SF4.ax}°`)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.6 · o- and p-nitrophenol (Topic 03, Example 4; p. 188)        */
/* ===================================================================== */
/**
 * One nitrophenol molecule laid along an axis: the ring (a regular hexagon, carbons as corners),
 * the OH on C1 and the NO₂ on C2 (ortho) or C4 (para), every angle 120°. `rot` turns the whole
 * molecule; `flip` mirrors it across its axis; `at` is the ring's centre; b the bond length.
 */
type NPOpts = { isomer: 'o' | 'p'; at: P; b: number; rot: number; tag: string };
function nitrophenol(o: NPOpts): Mol {
  const { at, b, rot, tag } = o, T = (id: string) => `${id}${tag}`;
  // ring corners: C1 at rot − 90° (up when rot = 0), then clockwise
  const ring6 = Array.from({ length: 6 }, (_, i) => add(at, mul(dir(rot - 90 + 60 * i), b)));
  const out = (i: number) => dir(rot - 90 + 60 * i); // outward from the ring at corner i
  const OH = add(ring6[0], mul(out(0), b));
  const nIdx = o.isomer === 'o' ? 1 : 3;
  const N = add(ring6[nIdx], mul(out(nIdx), b));
  const toN = rot - 90 + 60 * nIdx;
  // nitro O's at ±60° from the C–N direction; the =O is the one turned toward the hydrogen bond (ortho: toward the OH)
  const sA = o.isomer === 'o' ? -60 : 60;
  // the nitro N–O bonds are drawn a little longer in the small para panel, so its double bond reads
  const nb = o.isomer === 'p' ? 1.25 * b : b;
  const oA = add(N, mul(dir(toN + sA), nb)), oB = add(N, mul(dir(toN - sA), nb));
  // the phenol H: on the O–O line in the ortho isomer (the chelate), else at 120° from C1–O (drawn one bond long)
  const H = o.isomer === 'o' ? add(OH, mul(unit(sub(oA, OH)), 0.69 * b)) : add(OH, mul(dir(rot - 90 + 60), 1.1 * b));
  // where the + and − sit: up and to the right, outside the bonds, as the book prints them
  const qd = o.isomer === 'o' ? toN : toN - 120;
  const atoms: Atom[] = [
    ...ring6.map((p, i): Atom => ({ id: T(`C${i + 1}`), el: 'C', p, show: false, lp: 0, q: 0, hImp: i === 0 || i === nIdx ? 0 : 1 })),
    { id: T('O1'), el: 'O', p: OH, show: true, lp: 2, q: 0 },
    { id: T('H1'), el: 'H', p: H, show: true, lp: 0, q: 0, color: C.slate },
    { id: T('N'), el: 'N', p: N, show: true, lp: 0, q: 1, qAt: qd },
    { id: T('Oa'), el: 'O', p: oA, show: true, lp: 2, q: 0 },
    { id: T('Ob'), el: 'O', p: oB, show: true, lp: 3, q: -1, qAt: qd },
  ];
  const ring = ring6.map((_, i): Bond => ({ a: T(`C${i + 1}`), b: T(`C${((i + 1) % 6) + 1}`), order: 1.5, style: 'ring' }));
  return {
    charge: 0,
    atoms,
    bonds: [...ring, { a: T('C1'), b: T('O1'), order: 1 }, { a: T('O1'), b: T('H1'), order: 1 }, { a: T(`C${nIdx + 1}`), b: T('N'), order: 1 }, { a: T('N'), b: T('Oa'), order: 2 }, { a: T('N'), b: T('Ob'), order: 1 }],
  };
}
const merge = (...ms: Mol[]): Mol => ({ charge: ms.reduce((t, m) => t + m.charge, 0), atoms: ms.flatMap((m) => m.atoms), bonds: ms.flatMap((m) => m.bonds) });
type Case46 = { chip: string; cap: string; isomer: 'o' | 'p' };
const G46 = {
  o: { at: [100, 184] as P, b: 40, rot: 0 },
  /** the para chain: molecule 1 lower left, molecule 2 placed so that H1 of molecule 1 meets =O of molecule 2 in a straight O–H···O line */
  p: { at: [70, 372] as P, b: 32, rot: 0, hb: 1.5 },
};
/** The molecules of a case, and the hydrogen bonds as [H, O] atom-id pairs (plus an open end for the chain). */
function geo46(isomer: 'o' | 'p') {
  if (isomer === 'o') {
    const m = nitrophenol({ isomer: 'o', ...G46.o, tag: '' });
    return { mols: [m], hb: [['H1', 'Oa']] as [string, string][], open: null as null | [P, P] };
  }
  const g = G46.p;
  const m1 = nitrophenol({ isomer: 'p', at: g.at, b: g.b, rot: g.rot, tag: 'a' });
  const O1 = byId(m1, 'O1a').p, H1 = byId(m1, 'H1a').p;
  const target = add(H1, mul(unit(sub(H1, O1)), g.hb * g.b));
  const probe = nitrophenol({ isomer: 'p', at: [0, 0], b: g.b, rot: g.rot, tag: 'b' });
  const m2 = nitrophenol({ isomer: 'p', at: sub(target, byId(probe, 'Oab').p), b: g.b, rot: g.rot, tag: 'b' });
  const O2 = byId(m2, 'O1b').p, H2 = byId(m2, 'H1b').p;
  // the chain goes on: an open hydrogen bond from H of molecule 2, as long as the others
  const open: [P, P] = [H2, add(H2, mul(unit(sub(H2, O2)), g.hb * g.b))];
  return { mols: [m1, m2], hb: [['H1a', 'Oab']] as [string, string][], open };
}
/** A hydrogen bond: marigold dots between H and O, trimmed clear of both symbols. */
function hBond(s: Sketch, h: P, o: P, boxes: Rect[]) {
  const a = trim(h, o, boxes), b = trim(o, h, boxes);
  path(s, [a, b], { color: C.mari, w: 3, dash: 'hb' });
  return [a, b] as [P, P];
}
const CAP46 = { o: '(a) o-Nitrophenol: intramolecular O–H···O hydrogen bond closing a six-membered chelate ring.', p: '(b) p-Nitrophenol: intermolecular O–H···O hydrogen bonds link separate molecules into a chain.' };
/** The chelate ring's six members, and a small ring drawn inside it to name it. */
function chelate(m: Mol) {
  const ids = ['O1', 'H1', 'Oa', 'N', 'C2', 'C1'], pts = ids.map((id) => byId(m, id).p);
  const c = mul(pts.reduce<P>((t, p) => add(t, p), [0, 0]), 1 / 6);
  return { ids, pts, c, r: 9 };
}
const fig46: Diagram = {
  id: 'c11-04-fig-4.6',
  topic: 2,
  name: 'Hydrogen bonding in nitrophenols',
  cases: [
    { chip: 'o-Nitrophenol', isomer: 'o', cap: CAP46.o },
    { chip: 'p-Nitrophenol', isomer: 'p', cap: CAP46.p },
  ] as Case46[],
  draw(c: Case46) {
    const s = new Sketch(W, c.isomer === 'o' ? 278 : 470);
    const g = geo46(c.isomer), all = merge(...g.mols), boxes = boxesOf(all);
    g.mols.forEach((m) => {
      drawMol(s, m);
      // the aromatic ring's circle, as the book draws it
      const ring = m.atoms.filter((a) => a.el === 'C').map((a) => a.p), cen = mul(ring.reduce<P>((t, p) => add(t, p), [0, 0]), 1 / 6), R = len(cen, ring[0]) * 0.58;
      path(s, samples(0, 2 * Math.PI, 72).map((t): P => [cen[0] + R * Math.cos(t), cen[1] + R * Math.sin(t)]), { color: C.slate, w: 1.4 });
    });
    const hb = g.hb.map(([h, o]) => hBond(s, byId(all, h).p, byId(all, o).p, boxes));
    if (c.isomer === 'o') {
      const k = chelate(g.mols[0]);
      path(s, samples(0, 2 * Math.PI, 48).map((t): P => [k.c[0] + k.r * Math.cos(t), k.c[1] + k.r * Math.sin(t)]), { color: C.slate, w: 1.1, dash: 'dot', free: true });
      s.sym(G46.o.at[0] + 40, 268, '(a) <i>o</i>-nitrophenol', { size: 16 });
      s.place([
        { t: 'intramolecular O–H···O bond', hi: true, p: mul(add(hb[0][0], hb[0][1]), 0.5), at: [[150, 40, 'middle'], [170, 40, 'middle'], [190, 40, 'middle']] },
        { t: 'six-membered chelate ring', ring: [k.c[0], k.c[1], k.r], bare: true, at: [[W - 4, 196, 'end'], [W - 4, 204, 'end'], [W - 4, 212, 'end'], [W - 4, 222, 'end']] },
      ]);
      return s;
    }
    const open = g.open as [P, P];
    const a = trim(open[0], open[1], boxes);
    path(s, [a, open[1]], { color: C.mari, w: 3, dash: 'hb' });
    s.sym(open[1][0] + 4, open[1][1] + 1, '···', { size: 16, anchor: 'start', color: C.amber });
    s.sym(230, 458, '(b) <i>p</i>-nitrophenol', { size: 16 });
    const mid = mul(add(hb[0][0], hb[0][1]), 0.5), mid2 = mul(add(a, open[1]), 0.5);
    s.place([
      { t: 'intermolecular O–H···O bond', hi: true, p: mid, at: [0, 6, 12, 18, 24].map((d): [number, number, 'end'] => [W - 4, mid[1] + d, 'end']) },
      { t: 'molecule to molecule, chain', p: mid2, at: [34, 40, 46, 52, 58].map((d): [number, number, 'end'] => [W - 4, mid2[1] - d, 'end']) },
    ]);
    return s;
  },
  check(c: Case46) {
    const s = fig46.draw(c), g = geo46(c.isomer), out: Check[] = [];
    g.mols.forEach((m, i) => out.push(...molChecks(`${c.isomer}-Nitrophenol${g.mols.length > 1 ? ` (molecule ${i + 1})` : ''}, C₆H₅NO₃`, m)));
    const m = g.mols[0], k = bookkeep(m);
    const nH = m.atoms.filter((a) => a.el === 'H').length + m.atoms.reduce((t, a) => t + (a.hImp ?? 0), 0);
    out.push([`Formula read off the structure: C${m.atoms.filter((a) => a.el === 'C').length}H${nH}N${m.atoms.filter((a) => a.el === 'N').length}O${m.atoms.filter((a) => a.el === 'O').length}, ${k.valence} valence electrons (24 + 5 + 5 + 18 = 52)`, nH === 5 && k.valence === 52]);
    // every angle at the ring, at N and at C–O is 120°, every ring bond the same length
    const ang = (m2: Mol, a: string, o: string, b: string) => angleAt(byId(m2, a).p, byId(m2, o).p, byId(m2, b).p);
    const t = m.atoms[0].id.replace('C1', '');
    const nC = c.isomer === 'o' ? 'C2' : 'C4';
    out.push([`Nitro group trigonal: O=N–O ${fmt(ang(m, `Oa${t}`, `N${t}`, `Ob${t}`), 3)}°, C–N=O ${fmt(ang(m, `${nC}${t}`, `N${t}`, `Oa${t}`), 3)}°; ring angles all 120°`, close(ang(m, `Oa${t}`, `N${t}`, `Ob${t}`), 120, 1e-9) && close(ang(m, `${nC}${t}`, `N${t}`, `Oa${t}`), 120, 1e-9) && [1, 2, 3, 4, 5, 6].every((i) => close(ang(m, `C${((i + 4) % 6) + 1}${t}`, `C${i}${t}`, `C${(i % 6) + 1}${t}`), 120, 1e-9))]);
    // the substituents' positions on the ring: 1,2 for ortho, 1,4 for para (counted round the ring bonds)
    const ringPath = (from: string, to: string) => { let n = 0, cur = Number(from.slice(1)); const goal = Number(to.slice(1)); while (cur !== goal) { cur = (cur % 6) + 1; n++; } return Math.min(n, 6 - n); };
    out.push([`OH on C1 and NO₂ on ${nC}: ${ringPath('C1', nC)} ring bond(s) apart (${c.isomer === 'o' ? 'ortho, 1,2' : 'para, 1,4'})`, ringPath('C1', nC) === (c.isomer === 'o' ? 1 : 3)]);
    if (c.isomer === 'o') {
      const kk = chelate(m), p = (id: string) => byId(m, id).p;
      // the ring closed by the hydrogen bond: H–O1–C1–C2–N–Oa, then Oa···H
      const covalent = (a: string, b: string) => m.bonds.some((x) => (x.a === a && x.b === b) || (x.a === b && x.b === a));
      const chain = ['H1', 'O1', 'C1', 'C2', 'N', 'Oa'];
      const closed = chain.every((id, i) => i === chain.length - 1 || covalent(id, chain[i + 1]));
      const lin = angleAt(p('O1'), p('H1'), p('Oa'));
      out.push([`The hydrogen bond closes a ring of ${chain.length} atoms, ${chain.join('–')}···H: six-membered, as the caption says`, closed && chain.length === 6]);
      out.push([`The O–H···O line is straight (${fmt(lin, 3)}° at H); H···O ${fmt(len(p('H1'), p('Oa')) / G46.o.b, 2)} bond lengths, longer than O–H ${fmt(len(p('O1'), p('H1')) / G46.o.b, 2)}`, close(lin, 180, 1e-6) && len(p('H1'), p('Oa')) > len(p('O1'), p('H1'))]);
      out.push(['The hydrogen bond goes to the nitro group’s =O, inside the same molecule', g.hb[0][1] === 'Oa' && byId(m, 'Oa').lp === 2]);
      out.push(['The dotted ring naming the chelate lies inside it, clear of all six members and their bonds', kk.pts.every((q) => len(q, kk.c) > kk.r + 8)]);
    } else {
      const all = merge(...g.mols), p = (id: string) => byId(all, id).p;
      const hb = len(p('H1a'), p('Oab')), lin = angleAt(p('O1a'), p('H1a'), p('Oab'));
      const ownO = Math.min(len(p('H1a'), p('Oaa')), len(p('H1a'), p('Oba')));
      out.push([`The hydrogen bond joins H of molecule 1 to the =O of molecule 2: a straight O–H···O line (${fmt(lin, 3)}° at H), H···O ${fmt(hb / G46.p.b, 2)} bond lengths`, close(lin, 180, 1e-6) && close(hb / G46.p.b, G46.p.hb, 1e-9)]);
      out.push([`Within one molecule the H is ${fmt(ownO / G46.p.b, 2)} bond lengths from its own nitro O's, seven bonds round (H–O–C1–C2–C3–C4–N–O): too far for an internal bond`, ownO > 2.5 * hb]);
      const minSep = Math.min(...g.mols[0].atoms.flatMap((a) => g.mols[1].atoms.map((b2) => len(a.p, b2.p))));
      out.push([`The two molecules never overlap: closest atoms ${fmt(minSep / G46.p.b, 2)} bond lengths apart (the H···O bond itself)`, close(minSep, hb, 1e-6)]);
      out.push(['The chain goes on: molecule 2’s O–H has its own open hydrogen bond, in line with its O–H', !!g.open && close(angleAt(p('O1b'), p('H1b'), g.open[1]), 180, 1e-6)]);
      out.push(['Both molecules are the same, the second a pure translation of the first', g.mols[0].atoms.every((a, i) => close(len(a.p, g.mols[0].atoms[0].p), len(g.mols[1].atoms[i].p, g.mols[1].atoms[0].p), 1e-9))]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.7 · diborane (Topic 04, diborane framework; p. 195)           */
/* ===================================================================== */
const CAP47 = 'Diborane B<sub>2</sub>H<sub>6</sub>: four terminal B–H bonds (≈ 119 pm) and two bridging B–H–B three-centre two-electron (3c–2e) bonds (B–H ≈ 133 pm).';
/**
 * The book's lengths, to scale: terminal B–H 119 pm, bridge B–H 133 pm. Two values the figure needs
 * and the book does not give are the standard ones: B···B 177 pm and H–B–H (terminal) 121.5°. The
 * book's view, like every textbook's, shows the terminal and bridging hydrogens in one plane.
 */
const B2H6 = { term: 119, bridge: 133, BB: 177, HtBHt: 121.5, k: 0.82, c: [170, 160] as P };
function mol47() {
  const { term, bridge, BB, HtBHt, k, c } = B2H6;
  const B1: P = [c[0] - (BB / 2) * k, c[1]], B2: P = [c[0] + (BB / 2) * k, c[1]];
  const hy = Math.sqrt(bridge ** 2 - (BB / 2) ** 2) * k;
  const Hb1: P = [c[0], c[1] - hy], Hb2: P = [c[0], c[1] + hy];
  const t = (from: P, deg: number): P => add(from, mul(dir(deg), term * k));
  const half = HtBHt / 2;
  return { B1, B2, Hb: [Hb1, Hb2], Ht: [t(B1, 180 + half), t(B1, 180 - half), t(B2, -half), t(B2, half)] };
}
/** The circle through three points (the banana bond is an arc of it). */
function circle3(a: P, b: P, c: P) {
  const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  const ux = ((a[0] ** 2 + a[1] ** 2) * (b[1] - c[1]) + (b[0] ** 2 + b[1] ** 2) * (c[1] - a[1]) + (c[0] ** 2 + c[1] ** 2) * (a[1] - b[1])) / d;
  const uy = ((a[0] ** 2 + a[1] ** 2) * (c[0] - b[0]) + (b[0] ** 2 + b[1] ** 2) * (a[0] - c[0]) + (c[0] ** 2 + c[1] ** 2) * (b[0] - a[0])) / d;
  return { c: [ux, uy] as P, r: len([ux, uy], a) };
}
/** One banana bond, B → H → B, as the arc of the circle through the three atoms, cut clear of the symbols. */
function banana(B1: P, H: P, B2: P, boxes: Rect[]): P[][] {
  const k = circle3(B1, H, B2), ang = (p: P) => Math.atan2(p[1] - k.c[1], p[0] - k.c[0]);
  const seg = (p: P, q: P) => {
    let a0 = ang(p), a1 = ang(q);
    if (Math.abs(a1 - a0) > Math.PI) a1 += a1 < a0 ? 2 * Math.PI : -2 * Math.PI;
    return samples(a0, a1, 60).map((t): P => [k.c[0] + k.r * Math.cos(t), k.c[1] + k.r * Math.sin(t)]).filter((p2) => boxes.every((r) => rectDist(r, p2) >= LABEL_GAP + 1.2));
  };
  return [seg(B1, H), seg(H, B2)];
}
const fig47: Diagram = {
  id: 'c11-04-fig-4.7',
  topic: 3,
  name: 'Diborane',
  cases: [{ chip: 'B₂H₆', cap: CAP47 }],
  draw() {
    const s = new Sketch(W, 330), g = mol47();
    const boxes = [g.B1, g.B2].map((p) => atomRect(p, 'B', 20)).concat([...g.Hb, ...g.Ht].map((p) => atomRect(p, 'H')));
    g.Ht.forEach((h, i) => bondLine(s, i < 2 ? g.B1 : g.B2, h, 1, boxes));
    const arcs = g.Hb.map((h) => banana(g.B1, h, g.B2, boxes));
    arcs.flat().forEach((a) => path(s, a, { color: C.mari, w: 2.6 }));
    [g.B1, g.B2].forEach((p) => atomSym(s, p, 'B', { size: 20 }));
    g.Hb.forEach((p) => atomSym(s, p, 'H', { color: C.amber }));
    g.Ht.forEach((p) => atomSym(s, p, 'H', { color: C.slate }));
    const upper = arcs[0][1], lower = arcs[1][0];
    s.place([
      { t: '3c–2e', hi: true, p: arcs[0][0][Math.round(arcs[0][0].length * 0.5)], at: [[96, 20, 'middle'], [90, 20, 'middle'], [102, 24, 'middle']] },
      { t: '3c–2e', hi: true, p: lower[Math.round(lower.length * 0.5)], at: [[80, 248, 'start'], [72, 252, 'start'], [88, 244, 'start']] },
      { t: 'bridge B–H = 133 pm', p: upper[Math.round(upper.length * 0.5)], at: [[W - 6, 20, 'end'], [W - 6, 14, 'end'], [W - 6, 26, 'end']] },
      { t: 'terminal B–H = 119 pm', p: mul(add(g.B1, g.Ht[1]), 0.5), at: [[14, 288, 'start'], [8, 292, 'start'], [20, 290, 'start']] },
    ]);
    return s;
  },
  check() {
    const g = mol47(), s = fig47.draw(fig47.cases[0]), k = B2H6.k;
    const e = 2 * 3 + 6 * 1, used = 4 * 2 + 2 * 2;
    const t = g.Ht.map((h, i) => len(i < 2 ? g.B1 : g.B2, h) / k), b = [g.B1, g.B2].flatMap((B) => g.Hb.map((h) => len(B, h) / k));
    const HbBHb = angleAt(g.Hb[0], g.B1, g.Hb[1]), BHB = angleAt(g.B1, g.Hb[0], g.B2), HtBHt = angleAt(g.Ht[0], g.B1, g.Ht[1]);
    return [
      [`Valence electrons 2(3) + 6(1) = ${e}; four 2c–2e terminal bonds (8) + two 3c–2e bridges (4) = ${used}; seven ordinary bonds would need 14`, e === 12 && used === e && 7 * 2 === 14],
      [`Every terminal B–H drawn ${t.map((x) => fmt(x, 3)).join(', ')} pm (the book's 119), every bridge B–H ${b.map((x) => fmt(x, 3)).join(', ')} pm (the book's 133): to one scale`, t.every((x) => close(x, 119, 1e-9)) && b.every((x) => close(x, 133, 1e-9))],
      ['The bridge bonds are longer than the terminal ones (the book: longer and weaker)', Math.min(...b) > Math.max(...t)],
      [`Each B has four bonding partners (two terminal H, two bridges): sp³; angles H–B–H ${fmt(HtBHt, 1)}° (terminal), ${fmt(HbBHb, 1)}° (bridge), B–H–B ${fmt(BHB, 1)}°`, close(HtBHt, B2H6.HtBHt, 1e-9) && HbBHb < 109.5 && BHB < 90],
      ['One bridging H on each side of the B–B line, each bridge drawn through its H and ending at both borons', g.Hb[0][1] < g.B1[1] && g.Hb[1][1] > g.B1[1] && [0, 1].every((i) => close(circle3(g.B1, g.Hb[i], g.B2).r, len(circle3(g.B1, g.Hb[i], g.B2).c, g.Hb[i]), 1e-9))],
      ['The two borons and four terminal H are symmetric about the bridge line', close(g.B1[0] + g.B2[0], 2 * B2H6.c[0], 1e-9) && close(g.Ht[0][0] + g.Ht[2][0], 2 * B2H6.c[0], 1e-9)],
      ['The caption gives the same two lengths', CAP47.includes('≈ 119 pm') && CAP47.includes('≈ 133 pm')],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 4.8 · NH₃ + H⁺ → NH₄⁺ (Topic 04, Example 1; p. 195)             */
/* ===================================================================== */
const CAP48 = 'NH<sub>3</sub> donates its nitrogen lone pair to H<sup>+</sup> (a coordinate bond), forming NH<sub>4</sub><sup>+</sup>, a tetrahedral ion with four equivalent N–H bonds.';
const G48 = { N1: [56, 150] as P, Hp: [146, 130] as P, N2: [266, 152] as P, L: 36, nh3: 107, td: 109.5, arrow: [174, 206] as [number, number] };
function mol48() {
  const { N1, N2, L, nh3, td } = G48;
  const nh3m: Mol = {
    charge: 0,
    atoms: [
      { id: 'N', el: 'N', p: N1, show: true, lp: 1, q: 0 },
      { id: 'H1', el: 'H', p: add(N1, mul(dir(90 + nh3 / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
      { id: 'H2', el: 'H', p: add(N1, mul(dir(90 - nh3 / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
      { id: 'H3', el: 'H', p: add(N1, mul(dir(90), L)), show: true, lp: 0, q: 0, color: C.slate },
    ],
    bonds: [{ a: 'N', b: 'H1', order: 1 }, { a: 'N', b: 'H2', order: 1 }, { a: 'N', b: 'H3', order: 1, style: 'wedge' }],
  };
  const proton: Mol = { charge: 1, atoms: [{ id: 'H', el: 'H', p: G48.Hp, show: false, lp: 0, q: 1 }], bonds: [] };
  const nh4: Mol = {
    charge: 1,
    atoms: [
      { id: 'N', el: 'N', p: N2, show: true, lp: 0, q: 1 },
      { id: 'H1', el: 'H', p: add(N2, mul(dir(90 + td / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
      { id: 'H2', el: 'H', p: add(N2, mul(dir(90 - td / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
      { id: 'H3', el: 'H', p: add(N2, mul(dir(-90 - td / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
      { id: 'H4', el: 'H', p: add(N2, mul(dir(-90 + td / 2), L)), show: true, lp: 0, q: 0, color: C.slate },
    ],
    bonds: [{ a: 'N', b: 'H1', order: 1 }, { a: 'N', b: 'H2', order: 1 }, { a: 'N', b: 'H3', order: 1, style: 'hash' }, { a: 'N', b: 'H4', order: 1, style: 'wedge' }],
  };
  return { nh3m, proton, nh4 };
}
/** A quadratic Bézier from a through control k to b, sampled. */
const bez = (a: P, k: P, b: P, n = 40): P[] => samples(0, 1, n).map((t) => add(add(mul(a, (1 - t) ** 2), mul(k, 2 * t * (1 - t))), mul(b, t * t)));
const fig48: Diagram = {
  id: 'c11-04-fig-4.8',
  topic: 3,
  name: 'NH₃ + H⁺ → NH₄⁺',
  cases: [{ chip: 'Coordinate bond', cap: CAP48 }],
  draw() {
    const s = new Sketch(W, 262), g = mol48(), { N1, Hp, N2 } = G48;
    drawMol(s, g.nh3m);
    drawMol(s, g.nh4);
    // the lone pair on N, in a dashed lobe, and the curved arrow that carries it to H⁺
    const lob: P = [N1[0], N1[1] - 21];
    [-3.5, 3.5].forEach((d) => s.dot(lob[0] + d, lob[1], 1.9));
    path(s, samples(0, 2 * Math.PI, 60).map((t): P => [lob[0] + 11 * Math.cos(t), lob[1] + 7 * Math.sin(t)]), { color: C.mari, w: 1.4, dash: 'dash' });
    // H⁺: a ring with + inside, H⁺ written above it
    const rr = 10;
    path(s, samples(0, 2 * Math.PI, 60).map((t): P => [Hp[0] + rr * Math.cos(t), Hp[1] + rr * Math.sin(t)]), { color: C.ink, w: 1.6 });
    s.text(Hp[0], Hp[1] + 5, '+', { size: 15 });
    s.sym(Hp[0], Hp[1] - rr - 10, 'H<sup>+</sup>', { size: 16 });
    const from: P = [lob[0] + 13, lob[1] - 4], to: P = add(Hp, mul(unit(sub([Hp[0] - 40, Hp[1] - 30], Hp)), rr + 3));
    const cv = bez(from, [Hp[0] - 34, lob[1] - 42], to);
    path(s, cv.slice(0, -3), { color: C.mari, w: 2 });
    s.vec(cv[cv.length - 4][0], cv[cv.length - 4][1], to[0], to[1], { color: C.mari, w: 2 });
    // the reaction arrow, then [NH₄]⁺ in brackets
    s.vec(G48.arrow[0], N1[1], G48.arrow[1], N1[1], { color: C.ink, w: 2 });
    const bx = [N2[0] - 52, N2[0] + 52], by = [N2[1] - 50, N2[1] + 50];
    path(s, [[bx[0] + 6, by[0]], [bx[0], by[0]], [bx[0], by[1]], [bx[0] + 6, by[1]]], { color: C.slate, w: 1.6 });
    path(s, [[bx[1] - 6, by[0]], [bx[1], by[0]], [bx[1], by[1]], [bx[1] - 6, by[1]]], { color: C.slate, w: 1.6 });
    smallSym(s, [bx[1] + 11, by[0] + 3], '+', 15);
    s.place([
      { t: 'lone pair', hi: true, ring: [lob[0], lob[1], 7], bare: true, at: [[8, 56, 'start'], [6, 50, 'start'], [10, 62, 'start']] },
      { t: 'donated', p: cv[22], at: [[92, 52, 'start'], [96, 48, 'start'], [100, 44, 'start']] },
    ]);
    s.tag(W - 4, by[1] + 34, 'tetrahedral: four equivalent N–H bonds', null, null, { anchor: 'end' });
    return s;
  },
  check() {
    const g = mol48(), s = fig48.draw(fig48.cases[0]);
    const p3 = (id: string) => byId(g.nh3m, id).p, p4 = (id: string) => byId(g.nh4, id).p;
    const k3 = bookkeep(g.nh3m), k4 = bookkeep(g.nh4), kp = bookkeep(g.proton);
    const hnh3 = angleAt(p3('H1'), p3('N'), p3('H2'));
    const hnh4 = angleAt(p4('H1'), p4('N'), p4('H2')), hnh4b = angleAt(p4('H3'), p4('N'), p4('H4'));
    const lens = ['H1', 'H2', 'H3', 'H4'].map((h) => len(p4('N'), p4(h)));
    return [
      ...molChecks('NH₃', g.nh3m),
      ...molChecks('NH₄⁺', g.nh4),
      [`H⁺ brings no electrons and an empty 1s orbital: ${kp.total} electrons, formal charge +${kp.fc.H}`, kp.total === 0 && kp.fc.H === 1],
      [`Electrons are conserved: NH₃ ${k3.total} + H⁺ ${kp.total} = NH₄⁺ ${k4.total} (the lone pair becomes the fourth N–H bond); charge 0 + 1 = +1, printed outside the brackets`, k3.total + kp.total === k4.total && g.nh3m.charge + g.proton.charge === g.nh4.charge],
      [`N's formal charge goes 0 → +${k4.fc.N}: the ion's + belongs to the whole ion (the book prints it on the bracket)`, k3.fc.N === 0 && k4.fc.N === 1],
      [`NH₃ drawn with H–N–H ${fmt(hnh3, 2)}° (the book's 107°, below the tetrahedral 109.5° because of the lone pair)`, close(hnh3, 107, 1e-9) && hnh3 < 109.5],
      [`NH₄⁺ drawn with H–N–H ${fmt(hnh4, 2)}° and ${fmt(hnh4b, 2)}° (the tetrahedral 109.5°) and all four N–H the same length (${lens.map((x) => fmt(x, 2)).join(', ')} px): four equivalent bonds`, close(hnh4, 109.5, 1e-9) && close(hnh4b, 109.5, 1e-9) && lens.every((x) => close(x, lens[0], 1e-9))],
      ['NH₃ has one lone pair (two dots) and NH₄⁺ none', s.points.filter((q) => len([q.x, q.y], G48.N1) < 24).length === 2 && byId(g.nh4, 'N').lp === 0],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Additional topic A, Figure 1 · the two MO orderings (p. 201)           */
/* ===================================================================== */
type Lv = { key: string; html: string; n: 1 | 2; bonding: boolean };
const LV: Record<string, Lv> = {
  s1: { key: 's1', html: 'σ<sub>1s</sub>', n: 1, bonding: true },
  s1x: { key: 's1x', html: 'σ<sup>*</sup><sub>1s</sub>', n: 1, bonding: false },
  s2: { key: 's2', html: 'σ<sub>2s</sub>', n: 1, bonding: true },
  s2x: { key: 's2x', html: 'σ<sup>*</sup><sub>2s</sub>', n: 1, bonding: false },
  pz: { key: 'pz', html: 'σ<sub>2p<i>z</i></sub>', n: 1, bonding: true },
  pi: { key: 'pi', html: 'π<sub>2p<i>x</i></sub> = π<sub>2p<i>y</i></sub>', n: 2, bonding: true },
  pix: { key: 'pix', html: 'π<sup>*</sup><sub>2p<i>x</i></sub> = π<sup>*</sup><sub>2p<i>y</i></sub>', n: 2, bonding: false },
  pzx: { key: 'pzx', html: 'σ<sup>*</sup><sub>2p<i>z</i></sub>', n: 1, bonding: false },
};
/** The two orderings as Topic 03 prints them (p. 184), lowest first. */
const ORDER = {
  a: ['s1', 's1x', 's2', 's2x', 'pi', 'pz', 'pix', 'pzx'],
  b: ['s1', 's1x', 's2', 's2x', 'pz', 'pi', 'pix', 'pzx'],
};
/** Fill an ordering with n electrons: lowest first (aufbau), two per orbital (Pauli), degenerate orbitals singly first (Hund). */
function fill(order: string[], n: number) {
  let left = n;
  const occ = order.map((k) => {
    const lv = LV[k], cap = 2 * lv.n, e = Math.min(cap, left);
    left -= e;
    // Hund: e electrons over lv.n orbitals, singly first
    const per = Array.from({ length: lv.n }, (_, i) => (e > i ? 1 : 0) + (e > lv.n + i ? 1 : 0));
    return { k, e, per };
  });
  const Nb = occ.filter((o) => LV[o.k].bonding).reduce((t, o) => t + o.e, 0), Na = n - Nb;
  const unpaired = occ.reduce((t, o) => t + o.per.filter((x) => x === 1).length, 0);
  const homo = [...occ].reverse().find((o) => o.e > 0)?.k ?? '', lumo = occ.find((o) => o.e === 0)?.k ?? '';
  return { Nb, Na, BO: (Nb - Na) / 2, unpaired, homo, homoE: occ.find((o) => o.k === homo)?.e ?? 0, lumo };
}
/** The book's electron-count table (p. 200): total e⁻, members, N_b, N_a, BO, unpaired. */
const TABLE_A: [number, string, number, number, number, number][] = [
  [10, 'B₂', 6, 4, 1, 2], [12, 'C₂', 8, 4, 2, 0], [13, 'N₂⁺, CN', 9, 4, 2.5, 1], [14, 'N₂, CO, CN⁻, NO⁺, C₂²⁻', 10, 4, 3, 0],
  [15, 'NO, N₂⁻, O₂⁺', 10, 5, 2.5, 1], [16, 'O₂, NO⁻', 10, 6, 2, 2], [17, 'O₂⁻', 10, 7, 1.5, 1], [18, 'O₂²⁻, F₂', 10, 8, 1, 0],
];
const CAPA = 'The two molecular-orbital energy orderings for second-period diatomics: (a) up to N<sub>2</sub>, with the π<sub>2p</sub> pair below σ<sub>2p<i>z</i></sub>; (b) O<sub>2</sub> and F<sub>2</sub>, with σ<sub>2p<i>z</i></sub> below the π<sub>2p</sub> pair. The highlighted levels are the crossover pair.';
const GA = { y0: 300, dy: 29, a: [96, 136] as [number, number], b: [204, 244] as [number, number], size: 12.5 };
const levelY = (i: number) => GA.y0 - i * GA.dy;
const crossover = (k: string) => k === 'pz' || k === 'pi';
const figA: Diagram = {
  id: 'c11-04-A-d1',
  topic: 4,
  name: 'MO energy orderings',
  cases: [{ chip: 'Two orderings', cap: CAPA }],
  draw() {
    const s = new Sketch(W, 362);
    (['a', 'b'] as const).forEach((col) => {
      const [x0, x1] = GA[col];
      ORDER[col].forEach((k, i) => {
        const y = levelY(i), hi = crossover(k);
        path(s, [[x0, y], [x1, y]], { color: hi ? C.mari : C.ink, w: hi ? 3 : 2.2 });
        s.sym(col === 'a' ? x0 - 6 : x1 + 6, y + 4.5, LV[k].html, { size: GA.size, anchor: col === 'a' ? 'end' : 'start' });
      });
      s.sym((x0 + x1) / 2, GA.y0 + 34, `(${col})`, { size: 15, color: C.slate });
    });
    // the crossover: a double-headed arrow between the two swapped levels, in the gap between the ladders
    const xm = (GA.a[1] + GA.b[0]) / 2, ya = levelY(5) + 5, yb = levelY(4) - 5;
    s.vec(xm, (ya + yb) / 2, xm, ya - 2, { color: C.mari, w: 1.8 });
    s.vec(xm, (ya + yb) / 2, xm, yb + 2, { color: C.mari, w: 1.8 });
    s.sym(xm, levelY(3) + 4, 'crossover', { size: 12.5, color: C.amber });
    s.sym(GA.a[0] - 70, 22, 'up to N<sub>2</sub> (at most 14 e<sup>−</sup>)', { size: 14, anchor: 'start' });
    s.sym(W - 4, 44, 'O<sub>2</sub> and F<sub>2</sub> (more than 14 e<sup>−</sup>)', { size: 14, anchor: 'end' });
    return s;
  },
  check() {
    const s = figA.draw(figA.cases[0]), out: Check[] = [];
    // read the ladders back: which label sits on which drawn level, bottom to top
    const read = (col: 'a' | 'b') => {
      const [x0, x1] = GA[col];
      const lab = s.labels.filter((l) => (col === 'a' ? l.rect[2] <= x0 : l.rect[0] >= x1) && l.rect[1] > 60 && l.rect[3] < GA.y0 + 12);
      return lab.sort((p, q) => q.rect[1] - p.rect[1]).map((l) => l.text);
    };
    const plain = (k: string) => LV[k].html.replace(/<[^>]+>/g, '');
    (['a', 'b'] as const).forEach((col) => {
      const got = read(col), want = ORDER[col].map(plain);
      out.push([`Ladder (${col}), read off the drawing bottom to top: ${got.join(' < ')} — the book's “${col === 'a' ? 'up to' : 'after'} N₂” ordering (p. 184)`, JSON.stringify(got) === JSON.stringify(want)]);
    });
    const diff = ORDER.a.map((k, i) => (k === ORDER.b[i] ? '' : `${k}/${ORDER.b[i]}`)).filter(Boolean);
    out.push([`The two ladders differ only in the swapped pair σ2pz and π2p (positions ${ORDER.a.map((k, i) => (k === ORDER.b[i] ? '' : i + 1)).filter(Boolean).join(', ')}), the two levels drawn in marigold`, JSON.stringify(diff) === JSON.stringify(['pi/pz', 'pz/pi'])]);
    out.push(['Levels are evenly spaced, rising (the book’s schematic ladder)', ORDER.a.every((_, i) => i === 0 || close(levelY(i - 1) - levelY(i), GA.dy, 1e-9))]);
    // the book's table, filled by aufbau, Pauli and Hund: ≤ 14 electrons on ladder (a), more on ladder (b)
    for (const [n, who, Nb, Na, BO, un] of TABLE_A) {
      const f = fill(n <= 14 ? ORDER.a : ORDER.b, n);
      out.push([`${n} e⁻ (${who}), ladder (${n <= 14 ? 'a' : 'b'}): N_b = ${f.Nb}, N_a = ${f.Na}, BO = ${f.BO}, ${f.unpaired} unpaired (the book's ${Nb}, ${Na}, ${BO}, ${un})`, f.Nb === Nb && f.Na === Na && f.BO === BO && f.unpaired === un]);
    }
    // the series ends and the one-electron species (p. 200)
    const ends: [number, string, number, number][] = [[6, 'Li₂', 1, 0], [20, 'Ne₂', 0, 0], [1, 'H₂⁺', 0.5, 1], [3, 'He₂⁺', 0.5, 1], [2, 'H₂', 1, 0], [4, 'He₂', 0, 0], [8, 'Be₂', 0, 0]];
    out.push([`Series ends: ${ends.map(([n, w, bo]) => `${w} (${n} e⁻) BO ${fill(n <= 14 ? ORDER.a : ORDER.b, n).BO} (book ${bo})`).join(', ')}; H₂⁺ and He₂⁺ paramagnetic`, ends.every(([n, , bo, un]) => { const f = fill(n <= 14 ? ORDER.a : ORDER.b, n); return f.BO === bo && f.unpaired === un; })]);
    // bond orders do not depend on the crossover; magnetism does, only for B₂ and C₂ (the book's two warnings, pp. 185 and 200)
    const sameBO = samples(1, 20, 19).every((n) => fill(ORDER.a, n).BO === fill(ORDER.b, n).BO);
    const magDiff = samples(1, 20, 19).filter((n) => fill(ORDER.a, n).unpaired !== fill(ORDER.b, n).unpaired);
    out.push([`For every count 1–20 both ladders give the same bond order; only ${magDiff.join(' and ')} electrons change magnetism: B₂ (a: ${fill(ORDER.a, 10).unpaired} unpaired, b: ${fill(ORDER.b, 10).unpaired}) and C₂ (a: ${fill(ORDER.a, 12).unpaired}, b: ${fill(ORDER.b, 12).unpaired})`, sameBO && JSON.stringify(magDiff) === JSON.stringify([10, 12])]);
    // HOMO / LUMO (p. 201) and the topic's examples (pp. 186–187)
    const o2 = fill(ORDER.b, 16), n2 = fill(ORDER.a, 14), no = fill(ORDER.b, 15);
    out.push([`O₂: HOMO the π* pair with ${o2.homoE} electrons, LUMO σ*2pz; N₂: HOMO σ2pz (${n2.homoE} electrons), LUMO the π* pair; NO: HOMO π* with ${no.homoE} electron`, o2.homo === 'pix' && o2.homoE === 2 && o2.lumo === 'pzx' && n2.homo === 'pz' && n2.homoE === 2 && n2.lumo === 'pix' && no.homo === 'pix' && no.homoE === 1]);
    const bo = (n: number) => fill(n <= 14 ? ORDER.a : ORDER.b, n).BO;
    out.push([`O₂ family: O₂⁺ ${bo(15)} > O₂ ${bo(16)} > O₂⁻ ${bo(17)} > O₂²⁻ ${bo(18)}; NO ${bo(15)} → NO⁺ ${bo(14)} (the electron leaves π*)`, bo(15) === 2.5 && bo(16) === 2 && bo(17) === 1.5 && bo(18) === 1 && bo(14) === 3]);
    const heads = s.labels.map((l) => l.text);
    out.push(['Headings, as printed: (a) “up to N2 (at most 14 e−)”, (b) “O2 and F2 (more than 14 e−)”, the split the fillings above use', heads.includes('up to N2 (at most 14 e−)') && heads.includes('O2 and F2 (more than 14 e−)')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic D · the two N₂O forms (p. 206)                        */
/* ===================================================================== */
/** The two forms as printed: atoms in a row N–N–O, bond orders, lone pairs (with where the dots sit) and charges. */
const GD = { y: 64, dx: 44, x0: [28, 206] as [number, number], arrow: [140, 176] as [number, number] };
function molD(form: 0 | 1): Mol {
  const x = GD.x0[form], y = GD.y;
  const p = (i: number): P => [x + i * GD.dx, y];
  return form === 0
    ? { charge: 0, atoms: [
        { id: 'Na', el: 'N', p: p(0), show: true, lp: 2, lpAt: [180, -90], q: -1, qAt: -35, qOff: [13.5, -14] },
        { id: 'Nb', el: 'N', p: p(1), show: true, lp: 0, q: 1, qAt: -35, qOff: [10, -14] },
        { id: 'O', el: 'O', p: p(2), show: true, lp: 2, lpAt: [-90, 0], q: 0 },
      ], bonds: [{ a: 'Na', b: 'Nb', order: 2 }, { a: 'Nb', b: 'O', order: 2 }] }
    : { charge: 0, atoms: [
        { id: 'Na', el: 'N', p: p(0), show: true, lp: 1, lpAt: [180], q: 0 },
        { id: 'Nb', el: 'N', p: p(1), show: true, lp: 0, q: 1, qAt: -35, qOff: [10, -14] },
        { id: 'O', el: 'O', p: p(2), show: true, lp: 3, lpAt: [-90, 90, 0], q: -1, qAt: -28, qOff: [23, -9] },
      ], bonds: [{ a: 'Na', b: 'Nb', order: 3 }, { a: 'Nb', b: 'O', order: 1 }] };
}
const CHI: Record<string, number> = { N: 3.04, O: 3.44 };
const figD: Diagram = {
  id: 'c11-04-D-d1',
  topic: 7,
  name: 'N₂O resonance forms',
  cases: [{ chip: 'Two forms', cap: 'N<sub>2</sub>O (16 valence electrons, linear) has two serious candidates.' }],
  draw() {
    const s = new Sketch(W, 120);
    drawMol(s, molD(0));
    drawMol(s, molD(1));
    // the resonance arrow ⟷
    const [a, b] = GD.arrow;
    s.vec((a + b) / 2, GD.y, a, GD.y, { color: C.ink, w: 1.6 });
    s.vec((a + b) / 2, GD.y, b, GD.y, { color: C.ink, w: 1.6 });
    keep(s, [[a, GD.y], [b, GD.y]]);
    return s;
  },
  check() {
    const s = figD.draw(figD.cases[0]), out: Check[] = [];
    const fc = [0, 1].map((f) => bookkeep(molD(f as 0 | 1)).fc);
    [0, 1].forEach((f) => {
      const m = molD(f as 0 | 1);
      out.push(...molChecks(f === 0 ? ':N̈⁻=N⁺=Ö:' : ':N≡N⁺–Ö:⁻', m));
      out.push([`${f === 0 ? 'First' : 'Second'} form: every lone pair the book prints is drawn (${m.atoms.map((x) => `${x.el} ${(x.lpAt ?? []).length}/${x.lp}`).join(', ')})`, m.atoms.every((x) => (x.lpAt ?? []).length === x.lp)]);
    });
    out.push([`Formal charges: N=N=O (terminal N) ${fmt(fc[0].Na, 0)}, (central N) +${fc[0].Nb}, (O) ${fmt(fc[0].O, 0)}; N≡N–O ${fmt(fc[1].Na, 0)}, +${fc[1].Nb}, ${fmt(fc[1].O, 0)} — the book's values`, fc[0].Na === -1 && fc[0].Nb === 1 && fc[0].O === 0 && fc[1].Na === 0 && fc[1].Nb === 1 && fc[1].O === -1]);
    out.push([`The second form puts the negative charge on O, the more electronegative atom (${CHI.O} > ${CHI.N}): the dominant form, as the text says`, fc[1].O === -1 && CHI.O > CHI.N]);
    out.push(['Both forms keep the same atoms in the same places (N–N–O): only electrons move between them', [0, 1, 2].every((i) => close(molD(0).atoms[i].p[0] - GD.x0[0], molD(1).atoms[i].p[0] - GD.x0[1], 1e-9))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_04B: Diagram[] = [fig45, fig46, fig47, fig48, figA, figD];
