import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 7 (Redox Reactions): every drawing of the Master
 * Reference book on pp. 295–344, redrawn. The pages were checked one by one
 * (vector-drawing count per page, then the page images). The chapter has FIVE
 * drawings:
 *
 *   Figure 7.1 (p. 300, "CHAPTER 7 · FIGURES" page; caption first on p. 299
 *     with "(see next page)") — Topic 01, topic index 0: c11-07-fig-7.1.
 *   Figure 7.2 (p. 302; caption first on p. 301) — Topic 01, index 0.
 *   Figure 7.3 (p. 310; caption first on p. 309) — Topic 02, index 1.
 *   Figure 7.4 (p. 317; caption first on p. 316) — Topic 03, index 2.
 *   "Figure 1" of Additional topic A, the electrode-potential ladder (p. 329) —
 *     index 4. Its number is the addendum's own, so it takes the unnumbered id
 *     c11-07-A-d1 (as Chapter 2's and Chapter 6's addendum figures did).
 *
 * Judged NOT drawings: every table (n-factor table p. 314, O.N. rules, the
 * distribution and trap tables), the typeset equations and boxed answers.
 *
 * Everything is computed, never placed by eye:
 *   7.1, 7.2 — the structures are atoms and bonds (with lone pairs and formal
 *     charges kept as data); every oxidation number is computed from the bonds
 *     (O.N. = formal charge + Σ bond order × (+1 to a more electronegative
 *     partner, −1 to a less electronegative one, 0 to the same element)) and
 *     must sum to the species' charge.
 *   7.3 — the O.N. of P in PH₃ and H₂PO₂⁻ from H = +1, O = −2 and the charge;
 *     electrons gained (1 × 3) = electrons lost (3 × 1); the full equation in
 *     alkali balanced for atoms and charge.
 *   7.4, A — the E° values of the ladder (NCERT standard values, as the book
 *     prints them); E°cell = E°cathode − E°anode = 0.80 − (−0.76) = 1.56 V; the
 *     anode is the lower couple; electron, anion and cation arrows read back
 *     from the drawing.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const sgn = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${-n}` : '0');

/* ---------- drawing helpers (as in chemistry-11-04.ts) ---------- */
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
/** The result, bottom right, ink-edged, maths in STIX; registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 14, lh = size + 6;
  const w = Math.max(...lines.map((t) => Math.max(mathW(t, size), plain(t).length * size * 0.5))) + 26, h = lines.length * lh + 12;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="14" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 6 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- structures: atoms as element symbols, bonds as lines ---------- */
/** Pauling electronegativities of the elements drawn. */
const EN: Record<string, number> = { O: 3.44, S: 2.58, Cr: 1.66 };
type Atom = { el: string; html: string; at: P; /** formal charge, from the structure's lone pairs and bonds */ fc: number; lp: number; V: number };
type Mol = { atoms: Atom[]; bonds: [number, number, number][]; charge: number };
const ATOM = 21;
/** The box an atom's symbol takes. */
const atomRect = (a: Atom, size = ATOM): Rect => { const w = Math.max(mathW(a.html, size), plain(a.html).length * size * 0.5) * 0.92; return [a.at[0] - w / 2, a.at[1] - size * 0.38, a.at[0] + w / 2, a.at[1] + size * 0.38]; };
/** Where a line from inside a box first runs 5 px clear of it. */
function exit(r: Rect, p: P, u: P): number {
  const g = 5.5;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
type Drawn = { lines: { a: number; b: number }[] };
function drawMol(s: Sketch, m: Mol, size = ATOM): Drawn {
  const rec: Drawn = { lines: [] };
  m.bonds.forEach(([a, b, o]) => {
    const A = m.atoms[a].at, B = m.atoms[b].at, L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L], n: P = [-u[1], u[0]];
    for (let k = 0; k < o; k++) {
      const off = (k - (o - 1) / 2) * 6.4;
      const pa: P = [A[0] + n[0] * off, A[1] + n[1] * off], pb: P = [B[0] + n[0] * off, B[1] + n[1] * off];
      const ta = exit(atomRect(m.atoms[a], size), pa, u), tb = exit(atomRect(m.atoms[b], size), pb, [-u[0], -u[1]]);
      path(s, [[pa[0] + u[0] * ta, pa[1] + u[1] * ta], [pb[0] - u[0] * tb, pb[1] - u[1] * tb]], { w: 2.1 });
      rec.lines.push({ a, b });
    }
  });
  m.atoms.forEach((at) => {
    s.labels.push({ text: plain(at.html), rect: atomRect(at, size) });
    s.text(at.at[0], at.at[1] + size * 0.36, at.html, { size, semibold: true, color: C.ink });
  });
  return rec;
}
/** O.N. = formal charge + Σ bond order × (+1 toward a more electronegative partner, −1 toward a less, 0 toward the same element). */
const onOf = (m: Mol, i: number) => m.atoms[i].fc + m.bonds.filter(([a, b]) => a === i || b === i).reduce((t, [a, b, o]) => { const other = m.atoms[a === i ? b : a].el, me = m.atoms[i].el; return t + o * (EN[other] > EN[me] ? 1 : EN[other] < EN[me] ? -1 : 0); }, 0);
/** Formal charge from the structure: V − L − ½B. */
const fcOf = (m: Mol, i: number) => m.atoms[i].V - 2 * m.atoms[i].lp - m.bonds.filter(([a, b]) => a === i || b === i).reduce((t, [, , o]) => t + o, 0);
function molChecks(m: Mol, drawn: Drawn): Check[] {
  const out: Check[] = [];
  const total = m.atoms.reduce((t, a) => t + a.V, 0) - m.charge;
  const inStruct = 2 * m.bonds.reduce((t, [, , o]) => t + o, 0) + 2 * m.atoms.reduce((t, a) => t + a.lp, 0);
  out.push([`Valence electrons ${total} = 2 × bond orders + 2 × lone pairs = ${inStruct}`, total === inStruct]);
  out.push([`Each atom's formal charge from its bonds and lone pairs (V − L − ½B): ${m.atoms.map((a, i) => `${a.el}${i + 1} ${sgn(fcOf(m, i))}`).join(', ')}; they sum to the charge ${sgn(m.charge)}`, m.atoms.every((a, i) => a.fc === fcOf(m, i)) && m.atoms.reduce((t, a) => t + a.fc, 0) === m.charge]);
  const ons = m.atoms.map((_, i) => onOf(m, i));
  out.push([`Oxidation numbers from the bonds sum to the species' charge: ${ons.map(sgn).join(' + ')} = ${sgn(ons.reduce((a, b) => a + b, 0))}`, ons.reduce((a, b) => a + b, 0) === m.charge]);
  out.push([`Every bond in the structure is drawn: ${drawn.lines.length} lines for bond orders summing to ${m.bonds.reduce((t, [, , o]) => t + o, 0)}`, drawn.lines.length === m.bonds.reduce((t, [, , o]) => t + o, 0)]);
  return out;
}

/* ===================================================================== */
/* Figure 7.1 · CrO₅ butterfly (Topic 01, p. 300)                         */
/* ===================================================================== */
const CAP71 = 'Butterfly structure of CrO<sub>5</sub>: Cr (O.N. +6) bonded to two side-on peroxo (O–O) groups (four O at −1) and one terminal Cr=O oxygen (−2).';
const G71 = { cr: [170, 150] as P, top: [170, 62] as P, dx: 92, dy: 42, h: 268 };
function crO5(): Mol {
  const { cr, top, dx, dy } = G71;
  const O = (at: P, lp: number, fc: number): Atom => ({ el: 'O', html: 'O', at, fc, lp, V: 6 });
  return {
    charge: 0,
    atoms: [
      { el: 'Cr', html: 'Cr', at: cr, fc: 0, lp: 0, V: 6 },
      O(top, 2, 0),
      // the peroxo O: one bond to Cr, one to the other O of the pair, two lone pairs
      O([cr[0] - dx, cr[1] - dy], 2, 0), O([cr[0] - dx, cr[1] + dy], 2, 0),
      O([cr[0] + dx, cr[1] - dy], 2, 0), O([cr[0] + dx, cr[1] + dy], 2, 0),
    ],
    bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [4, 5, 1]],
  };
}
/** Where each atom's O.N. is printed, as in the book: beside each O, under Cr. */
const ON71: P[] = [[170, 196], [196, 58], [52, 113], [52, 197], [288, 113], [288, 197]];
/** The summary line under the drawing, as three items (the book's wide gaps). */
const SUM71 = (m: Mol): [number, string][] => [[72, `peroxo O: ${sgn(onOf(m, 2))} each`], [192, `oxo O: ${sgn(onOf(m, 1))}`], [282, `Cr: ${sgn(onOf(m, 0))}`]];
const fig71: Diagram = {
  id: 'c11-07-fig-7.1',
  topic: 0,
  name: 'CrO₅ butterfly structure',
  cases: [{ chip: 'CrO₅', cap: CAP71 }],
  draw() {
    const s = new Sketch(W, G71.h), m = crO5();
    drawMol(s, m);
    m.atoms.forEach((_, i) => s.sym(ON71[i][0], ON71[i][1], sgn(onOf(m, i)), { size: 16, color: i === 0 ? C.amber : C.slate, anchor: i === 1 ? 'start' : 'middle' }));
    SUM71(m).forEach(([x, t]) => s.sym(x, G71.h - 16, t, { size: 14, color: C.slate }));
    return s;
  },
  check() {
    const m = crO5(), s = new Sketch(W, G71.h), drawn = drawMol(s, m);
    const s2 = fig71.draw(fig71.cases[0]);
    const out = molChecks(m, drawn);
    const ons = m.atoms.map((_, i) => onOf(m, i));
    out.push([`Cr: four single bonds to peroxo O + one double bond to the oxo O ⇒ O.N. ${sgn(ons[0])} (caption +6)`, ons[0] === 6]);
    out.push([`The four peroxo O (each one bond to Cr, one to O) are ${ons.slice(2).map(sgn).join(', ')} (caption: four O at −1); the terminal Cr=O oxygen ${sgn(ons[1])} (caption −2)`, ons.slice(2).every((x) => x === -1) && ons[1] === -2]);
    out.push(['Two side-on peroxo groups: two O–O bonds, each pair bonded to Cr at both ends', m.bonds.filter(([a, b]) => m.atoms[a].el === 'O' && m.atoms[b].el === 'O').length === 2]);
    out.push(['Formula read off the structure: one Cr, five O (CrO₅)', m.atoms.filter((a) => a.el === 'Cr').length === 1 && m.atoms.filter((a) => a.el === 'O').length === 5]);
    out.push([`Treating all five O as −2 would put Cr at ${sgn(10)}, above its 6 valence electrons: why the structure is needed`, 5 * 2 > m.atoms[0].V]);
    out.push(['Each O.N. drawn is the computed one, and the summary line states them', m.atoms.every((_, i) => s2.labels.some((l) => l.text === sgn(ons[i]) && close(l.rect[1], ON71[i][1] - 16 * 0.72))) && ['peroxo O: −1 each', 'oxo O: −2', 'Cr: +6'].every((t) => s2.labels.some((l) => l.text === t))]);
    out.push(...layout(s2));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.2 · tetrathionate S₄O₆²⁻ (Topic 01, p. 302)                    */
/* ===================================================================== */
const CAP72 = 'Tetrathionate ion S<sub>4</sub>O<sub>6</sub><sup>2−</sup>: S–S–S–S chain; each terminal S (O.N. +5) carries two =O and one O<sup>−</sup>; the two central S atoms (O.N. 0) are bonded only to sulphur.';
const G72 = { x: [30, 88, 146, 204, 262, 314], lo: 150, hi: 122, up: 64, h: 250 };
function s4o6(): Mol {
  const { x, lo, hi, up } = G72;
  const at = (el: string, html: string, p: P, lp: number, fc: number): Atom => ({ el, html, at: p, fc, lp, V: 6 });
  return {
    charge: -2,
    atoms: [
      at('O', 'O<sup>−</sup>', [x[0], lo], 3, -1), // 0
      at('S', 'S', [x[1], lo], 0, 0), // 1 terminal S
      at('S', 'S', [x[2], hi], 2, 0), // 2 central S
      at('S', 'S', [x[3], lo], 2, 0), // 3 central S
      at('S', 'S', [x[4], hi], 0, 0), // 4 terminal S
      at('O', 'O<sup>−</sup>', [x[5], hi], 3, -1), // 5
      at('O', 'O', [x[1], lo - up], 2, 0), at('O', 'O', [x[1], lo + up], 2, 0), // 6, 7
      at('O', 'O', [x[4], hi - up], 2, 0), at('O', 'O', [x[4], hi + up], 2, 0), // 8, 9
    ],
    bonds: [[0, 1, 1], [1, 6, 2], [1, 7, 2], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 8, 2], [4, 9, 2], [4, 5, 1]],
  };
}
const ON72: [number, P][] = [[1, [118, 180]], [2, [146, 92]], [3, [204, 184]], [4, [292, 154]]];
const fig72: Diagram = {
  id: 'c11-07-fig-7.2',
  topic: 0,
  name: 'Tetrathionate ion',
  cases: [{ chip: 'S₄O₆²⁻', cap: CAP72 }],
  draw() {
    const s = new Sketch(W, G72.h), m = s4o6();
    drawMol(s, m);
    ON72.forEach(([i, p]) => s.sym(p[0], p[1], sgn(onOf(m, i)), { size: 16, color: onOf(m, i) ? C.amber : C.slate }));
    s.sym(16, 34, 'S<sub>4</sub>O<sub>6</sub><sup>2−</sup>', { size: 16, anchor: 'start', color: C.slate });
    return s;
  },
  check() {
    const m = s4o6(), drawn = drawMol(new Sketch(W, G72.h), m), s = fig72.draw(fig72.cases[0]);
    const out = molChecks(m, drawn);
    const ons = m.atoms.map((_, i) => onOf(m, i));
    const nb = (i: number) => m.bonds.filter(([a, b]) => a === i || b === i).map(([a, b, o]) => ({ el: m.atoms[a === i ? b : a].el, o, fc: m.atoms[a === i ? b : a].fc }));
    out.push([`The chain S–S–S–S: S1–S2, S2–S3, S3–S4 bonded, in a zig-zag`, [[1, 2], [2, 3], [3, 4]].every(([a, b]) => m.bonds.some(([x, y]) => x === a && y === b))]);
    out.push(['Each terminal S carries two =O and one O⁻ (and one S)', [1, 4].every((i) => nb(i).filter((n) => n.el === 'O' && n.o === 2).length === 2 && nb(i).filter((n) => n.el === 'O' && n.o === 1 && n.fc === -1).length === 1 && nb(i).filter((n) => n.el === 'S').length === 1)]);
    out.push(['The two central S are bonded only to sulphur', [2, 3].every((i) => nb(i).every((n) => n.el === 'S'))]);
    out.push([`O.N. from the bonds: terminal S ${sgn(ons[1])}, ${sgn(ons[4])} (caption +5); central S ${sgn(ons[2])}, ${sgn(ons[3])} (caption 0); every O −2`, ons[1] === 5 && ons[4] === 5 && ons[2] === 0 && ons[3] === 0 && m.atoms.every((a, i) => a.el !== 'O' || ons[i] === -2)]);
    out.push([`The average over the four S, (5 + 0 + 0 + 5)/4 = ${fmt((ons[1] + ons[2] + ons[3] + ons[4]) / 4)}, is the fractional +2.5 no single S carries`, close((ons[1] + ons[2] + ons[3] + ons[4]) / 4, 2.5)]);
    out.push(['Formula read off the structure: S₄O₆, charge 2−', m.atoms.filter((a) => a.el === 'S').length === 4 && m.atoms.filter((a) => a.el === 'O').length === 6 && m.charge === -2]);
    out.push(['Each O.N. drawn is the computed one', ON72.every(([i, p]) => s.labels.some((l) => l.text === sgn(ons[i]) && close((l.rect[0] + l.rect[2]) / 2, p[0])))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.3 · disproportionation of P₄ (Topic 02, p. 310)                */
/* ===================================================================== */
const CAP73 = 'Disproportionation of P<sub>4</sub> in alkali: one P is reduced (0 → −3, gains 3 e<sup>−</sup>, giving PH<sub>3</sub>) for every three P oxidised (0 → +1, each loses 1 e<sup>−</sup>, giving 3 H<sub>2</sub>PO<sub>2</sub><sup>−</sup>), so the electrons balance.';
/** Species: formula counts, charge, and how many of them the equation makes. */
type Sp = { html: string; P: number; H: number; O: number; q: number };
const P4: Sp = { html: 'P<sub>4</sub>', P: 4, H: 0, O: 0, q: 0 };
const PH3: Sp = { html: 'PH<sub>3</sub>', P: 1, H: 3, O: 0, q: 0 };
const HYP: Sp = { html: 'H<sub>2</sub>PO<sub>2</sub><sup>−</sup>', P: 1, H: 2, O: 2, q: -1 };
const OH: Sp = { html: 'OH<sup>−</sup>', P: 0, H: 1, O: 1, q: -1 };
const H2O: Sp = { html: 'H<sub>2</sub>O', P: 0, H: 2, O: 1, q: 0 };
/** O.N. of P: H = +1, O = −2, the rest from the charge. */
const onP = (sp: Sp) => (sp.q - sp.H - -2 * sp.O) / sp.P;
const G73 = { p4: [44, 128] as P, ph3: [282, 66] as P, hyp: [272, 196] as P, h: 330 };
const box = (c: P, html: string, size = 17): Rect => { const w = Math.max(mathW(html, size), plain(html).length * size * 0.5) + 18; return [c[0] - w / 2, c[1] - 16, c[0] + w / 2, c[1] + 16]; };
const DRAWN73 = new WeakMap<Sketch, { from: P; to: P; kind: string }[]>();
const fig73: Diagram = {
  id: 'c11-07-fig-7.3',
  topic: 1,
  name: 'Disproportionation of P₄',
  cases: [{ chip: 'P₄ in alkali', cap: CAP73 }],
  draw() {
    const s = new Sketch(W, G73.h), arrows: { from: P; to: P; kind: string }[] = [];
    const boxes: [P, string, boolean][] = [[G73.p4, P4.html, true], [G73.ph3, PH3.html, false], [G73.hyp, `3 ${HYP.html}`, false]];
    boxes.forEach(([c, html, hi]) => {
      path(s, rectPts(box(c, html)), { color: hi ? C.mari : C.ink, w: hi ? 1.9 : 1.3 });
      s.sym(c[0], c[1] + 6, html, { size: 17 });
    });
    const bp = box(G73.p4, P4.html), b1 = box(G73.ph3, PH3.html), b2 = box(G73.hyp, `3 ${HYP.html}`);
    const a1: P = [bp[2] + 6, G73.p4[1] - 8], t1: P = [b1[0] - 6, G73.ph3[1] + 4];
    const a2: P = [bp[2] + 6, G73.p4[1] + 8], t2: P = [b2[0] - 6, G73.hyp[1] - 4];
    arrow(s, a1, t1); arrow(s, a2, t2);
    arrows.push({ from: a1, to: t1, kind: 'reduction' }, { from: a2, to: t2, kind: 'oxidation' });
    s.sym(12, 30, `reduction: P ${sgn(onP(P4))} → ${sgn(onP(PH3))}, gains 3e<sup>−</sup>`, { size: 14, anchor: 'start' });
    s.sym(12, 252, `oxidation: P ${sgn(onP(P4))} → ${sgn(onP(HYP))}, loses 1e<sup>−</sup> × 3`, { size: 14, anchor: 'start' });
    resultBlock(s, ['1 P reduced per 3 P oxidised', 'balances the electrons.'], { size: 13 });
    DRAWN73.set(s, arrows);
    return s;
  },
  check() {
    const s = fig73.draw(fig73.cases[0]), arrows = DRAWN73.get(s)!, out: Check[] = [];
    out.push([`O.N. of P: P₄ ${sgn(onP(P4))}, PH₃ ${sgn(onP(PH3))} (H +1), H₂PO₂⁻ ${sgn(onP(HYP))} (H +1, O −2, charge −1)`, onP(P4) === 0 && onP(PH3) === -3 && onP(HYP) === 1]);
    const gained = 1 * (onP(P4) - onP(PH3)), lost = 3 * (onP(HYP) - onP(P4));
    out.push([`Electrons: 1 P gains ${gained}, 3 P each lose 1 = ${lost}; they balance`, gained === 3 && lost === 3]);
    out.push(['All four P of P₄ are used: 1 reduced + 3 oxidised = 4', 1 + 3 === P4.P]);
    // P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻ (Topic 02, p. 309)
    const L: [Sp, number][] = [[P4, 1], [OH, 3], [H2O, 3]], R: [Sp, number][] = [[PH3, 1], [HYP, 3]];
    const sum = (side: [Sp, number][], k: keyof Sp) => side.reduce((t, [sp, n]) => t + n * (sp[k] as number), 0);
    out.push([`P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻ balances: P ${sum(L, 'P')}/${sum(R, 'P')}, H ${sum(L, 'H')}/${sum(R, 'H')}, O ${sum(L, 'O')}/${sum(R, 'O')}, charge ${sum(L, 'q')}/${sum(R, 'q')}`, (['P', 'H', 'O', 'q'] as (keyof Sp)[]).every((k) => sum(L, k) === sum(R, k))]);
    const bp = box(G73.p4, P4.html), b1 = box(G73.ph3, PH3.html), b2 = box(G73.hyp, `3 ${HYP.html}`);
    const red = arrows.find((a) => a.kind === 'reduction')!, ox = arrows.find((a) => a.kind === 'oxidation')!;
    out.push(['Read off the drawing: the reduction arrow runs from P₄ to PH₃ (O.N. falls) and the oxidation arrow from P₄ to 3 H₂PO₂⁻ (O.N. rises)', rectDist(bp, red.from) < 8 && rectDist(b1, red.to) < 8 && rectDist(bp, ox.from) < 8 && rectDist(b2, ox.to) < 8 && onP(PH3) < 0 && onP(HYP) > 0]);
    out.push(...layout(s));
    return out;
  },
};

/* ---------- the E° ladder (Additional topic A, p. 329): NCERT values as printed ---------- */
type Couple = { html: string; key: string; E: number };
const LADDER: Couple[] = [
  { html: 'F<sub>2</sub>/F<sup>−</sup>', key: 'F2/F-', E: 2.87 },
  { html: 'MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>', key: 'MnO4-/Mn2+', E: 1.51 },
  { html: 'Cl<sub>2</sub>/Cl<sup>−</sup>', key: 'Cl2/Cl-', E: 1.36 },
  { html: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>', key: 'Cr2O7 2-/Cr3+', E: 1.33 },
  { html: 'Ag<sup>+</sup>/Ag', key: 'Ag+/Ag', E: 0.8 },
  { html: 'Fe<sup>3+</sup>/Fe<sup>2+</sup>', key: 'Fe3+/Fe2+', E: 0.77 },
  { html: 'I<sub>2</sub>/I<sup>−</sup>', key: 'I2/I-', E: 0.54 },
  { html: 'Cu<sup>2+</sup>/Cu', key: 'Cu2+/Cu', E: 0.34 },
  { html: '2H<sup>+</sup>/H<sub>2</sub>  (SHE)', key: 'SHE', E: 0 },
  { html: 'Ni<sup>2+</sup>/Ni', key: 'Ni2+/Ni', E: -0.25 },
  { html: 'Fe<sup>2+</sup>/Fe', key: 'Fe2+/Fe', E: -0.44 },
  { html: 'Zn<sup>2+</sup>/Zn', key: 'Zn2+/Zn', E: -0.76 },
  { html: 'Mg<sup>2+</sup>/Mg', key: 'Mg2+/Mg', E: -2.36 },
  { html: 'Li<sup>+</sup>/Li', key: 'Li+/Li', E: -3.05 },
];
const Eof = (key: string) => LADDER.find((c) => c.key === key)!.E;
const volts = (E: number) => (E > 0 ? `+${E.toFixed(2)}` : E < 0 ? `−${(-E).toFixed(2)}` : '0.00');

/* ===================================================================== */
/* Figure 7.4 · Zn–Ag galvanic cell (Topic 03, p. 317)                    */
/* ===================================================================== */
const CAP74 = 'Zn–Ag galvanic cell: the Zn rod in ZnSO<sub>4</sub>(aq) is the anode (−; oxidation Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>) and the Ag rod in AgNO<sub>3</sub>(aq) is the cathode (+; reduction Ag<sup>+</sup> + e<sup>−</sup> → Ag). Electrons flow from anode to cathode through the wire; in the KNO<sub>3</sub> salt bridge anions drift toward the anode and cations toward the cathode; <i>E</i>°<sub>cell</sub> = 1.56 V.';
/** The two half-cells: metal, its couple on the ladder, its half-reaction as reduction (electrons on the left). */
const HALF = {
  Zn: { metal: 'Zn', sol: 'ZnSO<sub>4</sub>(aq)', couple: 'Zn2+/Zn', n: 2, ion: 'Zn<sup>2+</sup>' },
  Ag: { metal: 'Ag', sol: 'AgNO<sub>3</sub>(aq)', couple: 'Ag+/Ag', n: 1, ion: 'Ag<sup>+</sup>' },
};
const G74 = { lb: [14, 154] as [number, number], rb: [186, 326] as [number, number], top: 184, surf: 202, bot: 276, rodL: 48, rodR: 292, rodTop: 112, rodBot: 258, rodW: 8, wire: 46, v: [170, 46] as P, vr: 16, h: 336 };
const DRAWN74 = new WeakMap<Sketch, { e: [P, P]; anion: [P, P]; cation: [P, P]; anodeX: number; cathodeX: number; volts: string }>();
function cell() {
  // the anode is the couple lower on the ladder: it is driven backwards (oxidation)
  const [an, ca] = Eof(HALF.Zn.couple) < Eof(HALF.Ag.couple) ? [HALF.Zn, HALF.Ag] : [HALF.Ag, HALF.Zn];
  const E = Eof(ca.couple) - Eof(an.couple);
  return { an, ca, E };
}
const fig74: Diagram = {
  id: 'c11-07-fig-7.4',
  topic: 2,
  name: 'Zn–Ag galvanic cell',
  cases: [{ chip: 'Galvanic cell', cap: CAP74 }],
  draw() {
    const g = G74, s = new Sketch(W, g.h), { an, ca, E } = cell();
    // beakers (open at the top), solution surfaces (grey dashed)
    [g.lb, g.rb].forEach(([x0, x1]) => {
      path(s, [[x0, g.top], [x0, g.bot], [x1, g.bot], [x1, g.top]], { w: 1.7 });
      path(s, [[x0 + 3, g.surf], [x1 - 3, g.surf]], { color: C.grey, w: 1.2, dash: true });
    });
    // rods
    [g.rodL, g.rodR].forEach((x) => path(s, rectPts([x - g.rodW, g.rodTop, x + g.rodW, g.rodBot]), { w: 1.5 }));
    // wire and voltmeter
    const { v, vr } = g;
    path(s, [[g.rodL, g.rodTop], [g.rodL, g.wire], [v[0] - vr, g.wire]], { w: 1.5 });
    path(s, [[v[0] + vr, g.wire], [g.rodR, g.wire], [g.rodR, g.rodTop]], { w: 1.5 });
    path(s, circlePts(v, vr), { w: 1.5 });
    s.sym(v[0], v[1] + 5.5, 'V', { size: 15 });
    const vText = `${E.toFixed(2)} V`;
    s.sym(v[0] + vr + 8, v[1] - 9, vText, { size: 15, anchor: 'start' });
    // electron flow, on the wire leaving the anode (marigold: the figure's point)
    const ax = an === HALF.Zn ? g.rodL : g.rodR, cx = an === HALF.Zn ? g.rodR : g.rodL;
    const e: [P, P] = [[ax + 30 * Math.sign(cx - ax), g.wire], [ax + 92 * Math.sign(cx - ax), g.wire]];
    arrow(s, e[0], e[1], { color: C.mari, w: 2.2, free: true });
    // salt bridge: an inverted U, two walls, its ends dipping below each surface
    const outer: P[] = [[112, 222], [112, 122], [228, 122], [228, 222]], inner: P[] = [[124, 222], [124, 144], [216, 144], [216, 222]];
    path(s, outer, { color: C.slate, w: 1.4 }); path(s, inner, { color: C.slate, w: 1.4 });
    path(s, [[112, 222], [124, 222]], { color: C.slate, w: 1.4 }); path(s, [[216, 222], [228, 222]], { color: C.slate, w: 1.4 });
    const anion: [P, P] = [[164, 133], [128 + (ax < cx ? 6 : 82), 133]], cation: [P, P] = [[176, 133], [212 - (ax < cx ? 6 : 82), 133]];
    arrow(s, anion[0], anion[1], { color: C.slate, w: 1.4, free: true });
    arrow(s, cation[0], cation[1], { color: C.slate, w: 1.4, free: true });
    s.sym(132, 112, 'anions', { size: 13, color: C.slate });
    s.sym(208, 112, 'cations', { size: 13, color: C.slate });
    s.sym(170, 162, 'salt bridge', { size: 13, color: C.slate });
    s.sym(170, 177, '(KNO<sub>3</sub>)', { size: 13, color: C.slate });
    // metals and solutions
    s.sym(84, 166, 'Zn', { size: 17 }); s.sym(256, 166, 'Ag', { size: 17 });
    s.sym(98, 248, HALF.Zn.sol, { size: 13 }); s.sym(242, 248, HALF.Ag.sol, { size: 13 });
    // electrode names and half-reactions under each beaker
    const lx = (g.lb[0] + g.lb[1]) / 2, rx = (g.rb[0] + g.rb[1]) / 2;
    const [anX, caX] = ax < cx ? [lx, rx] : [rx, lx];
    s.sym(anX, 300, 'anode (−), oxidation', { size: 13 });
    s.sym(anX, 320, `${an.metal} → ${an.ion} + ${an.n > 1 ? an.n : ''}e<sup>−</sup>`, { size: 13 });
    s.sym(caX, 300, 'cathode (+), reduction', { size: 13 });
    s.sym(caX, 320, `${ca.ion} + ${ca.n > 1 ? ca.n : ''}e<sup>−</sup> → ${ca.metal}`, { size: 13 });
    s.place([{ t: 'electron flow: anode → cathode', p: [(e[0][0] + e[1][0]) / 2 - 4, g.wire], hi: true, at: [[58, 70, 'start'], [60, 72, 'start']] }]);
    DRAWN74.set(s, { e, anion, cation, anodeX: ax, cathodeX: cx, volts: vText });
    return s;
  },
  check() {
    const s = fig74.draw(fig74.cases[0]), d = DRAWN74.get(s)!, { an, ca, E } = cell(), out: Check[] = [];
    out.push([`E°(Zn²⁺/Zn) = ${volts(Eof('Zn2+/Zn'))} V is below E°(Ag⁺/Ag) = ${volts(Eof('Ag+/Ag'))} V, so Zn is the anode (oxidation) and Ag the cathode (reduction)`, an === HALF.Zn && ca === HALF.Ag]);
    out.push([`E°cell = E°cathode − E°anode = ${volts(Eof('Ag+/Ag'))} − (${volts(Eof('Zn2+/Zn'))}) = ${fmt(E)} V, positive (spontaneous), as drawn "${d.volts}" and the caption's 1.56 V`, close(E, 1.56, 1e-9) && E > 0 && d.volts === '1.56 V']);
    // Scale the halves to a common electron count; the ion charge equals its n (metal 0).
    const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);
    const ne = (an.n * ca.n) / gcd(an.n, ca.n), kA = ne / an.n, kC = ne / ca.n;
    const qLeft = kA * 0 + kC * ca.n, qRight = kA * an.n + kC * 0;
    out.push([`Electrons: Zn → Zn²⁺ + 2e⁻ releases ${an.n}, Ag⁺ + e⁻ → Ag takes ${ca.n}; scaled to ${ne} e⁻ this gives ${kA === 1 ? '' : kA}Zn + ${kC}Ag⁺ → ${kA === 1 ? '' : kA}Zn²⁺ + ${kC}Ag, charge ${sgn(qLeft)} left and ${sgn(qRight)} right`, kA === 1 && kC === 2 && kA * an.n === kC * ca.n && qLeft === qRight && qLeft === 2]);
    out.push(['Read off the drawing: the electron arrow on the wire points from the anode (Zn rod) toward the cathode (Ag rod)', Math.sign(d.e[1][0] - d.e[0][0]) === Math.sign(d.cathodeX - d.anodeX)]);
    out.push(['In the salt bridge the anion arrow points toward the anode, the cation arrow toward the cathode', Math.sign(d.anion[1][0] - d.anion[0][0]) === Math.sign(d.anodeX - d.cathodeX) && Math.sign(d.cation[1][0] - d.cation[0][0]) === Math.sign(d.cathodeX - d.anodeX)]);
    out.push(['The anode is marked (−) with an oxidation (electrons as products); the cathode (+) with a reduction (electrons as reactants)', s.labels.some((l) => l.text === 'anode (−), oxidation') && s.labels.some((l) => l.text === 'Zn → Zn2+ + 2e−') && s.labels.some((l) => l.text === 'cathode (+), reduction') && s.labels.some((l) => l.text === 'Ag+ + e− → Ag')]);
    out.push(['Each rod stands in its own solution: Zn in ZnSO₄(aq) (left), Ag in AgNO₃(aq) (right), both rods reaching below the surface', G74.rodL > G74.lb[0] && G74.rodL < G74.lb[1] && G74.rodR > G74.rb[0] && G74.rodR < G74.rb[1] && G74.rodBot > G74.surf]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic A · the E° ladder ("Figure 1", p. 329)                */
/* ===================================================================== */
const CAPA1 = 'The standard electrode potential ladder. Selected couples from NCERT Table 8.1 in descending order of <i>E</i>°, with the hydrogen electrode (SHE) as the zero reference; oxidising strength rises up the ladder, reducing strength down it.';
/** The book spaces the rungs evenly (a rank ladder, not a scale): so does this. */
const GA = { x: 82, y0: 56, step: 24, ax: 216, bx: 330, h: 410 };
const rungY = (i: number) => GA.y0 + GA.step * i;
const DRAWNA = new WeakMap<Sketch, { up: [P, P]; down: [P, P] }>();
const figA1: Diagram = {
  id: 'c11-07-A-d1',
  topic: 4,
  name: 'Electrode potential ladder',
  cases: [{ chip: 'E° ladder', cap: CAPA1 }],
  draw() {
    const s = new Sketch(W, GA.h);
    const yTop = rungY(0) - 18, yBot = rungY(LADDER.length - 1) + 12;
    arrow(s, [GA.x, yBot], [GA.x, yTop], { color: C.ink, w: 1.5 });
    s.sym(GA.x - 6, yTop - 10, '<i>E</i>° / V', { size: 14, anchor: 'end' });
    LADDER.forEach((c, i) => {
      const y = rungY(i), hi = c.E === 0;
      path(s, [[GA.x - 5, y], [GA.x + 5, y]], { w: 1.4 });
      s.sym(GA.x - 10, y + 4.5, volts(c.E), { size: 13, anchor: 'end', color: hi ? C.amber : C.text });
      s.sym(GA.x + 11, y + 4.5, c.html, { size: 13, anchor: 'start', color: hi ? C.amber : C.text });
    });
    // Expert review (Oct 31): each trend runs over the WHOLE ladder (Zn²⁺ out-oxidises Mg²⁺, Cu out-reduces Ag),
    // so both arrows span every rung, side by side, instead of the book's split at the SHE.
    const yT = rungY(0) - 4, yB = rungY(LADDER.length - 1) + 4;
    const up: [P, P] = [[GA.ax, yB], [GA.ax, yT]], down: [P, P] = [[GA.bx, yT], [GA.bx, yB]];
    arrow(s, up[0], up[1], { w: 1.7 });
    arrow(s, down[0], down[1], { w: 1.7, color: C.slate });
    ['oxidising', 'strength of the', 'oxidised form', 'increases'].forEach((t, i) => s.sym(GA.ax + 8, 96 + 16 * i, t, { size: 12, anchor: 'start' }));
    ['reducing', 'strength of the', 'reduced form', 'increases'].forEach((t, i) => s.sym(GA.bx - 8, 314 + 16 * i, t, { size: 12, anchor: 'end', color: C.slate }));
    DRAWNA.set(s, { up, down });
    return s;
  },
  check() {
    const s = figA1.draw(figA1.cases[0]), d = DRAWNA.get(s)!, out: Check[] = [];
    out.push([`The couples run in descending order of E°: ${LADDER.map((c) => volts(c.E)).join(' > ')}`, LADDER.every((c, i) => i === 0 || c.E < LADDER[i - 1].E)]);
    const she = LADDER.findIndex((c) => c.E === 0);
    out.push(['The hydrogen electrode (SHE) is the zero reference: 0.00 V, positive couples above it, negative below', LADDER[she].key === 'SHE' && LADDER.slice(0, she).every((c) => c.E > 0) && LADDER.slice(she + 1).every((c) => c.E < 0)]);
    out.push(['Each rung is drawn at its rank, top to bottom, with its own value', LADDER.every((c, i) => s.labels.some((l) => l.text === volts(c.E) && close(l.rect[3], rungY(i) + 4.5 + 13 * 0.22)))]);
    out.push(['The NCERT standard values: F₂ +2.87, MnO₄⁻ +1.51, Cl₂ +1.36, Cr₂O₇²⁻ +1.33, Ag⁺ +0.80, Fe³⁺/Fe²⁺ +0.77, I₂ +0.54, Cu²⁺ +0.34, Ni²⁺ −0.25, Fe²⁺/Fe −0.44, Zn²⁺ −0.76, Mg²⁺ −2.36, Li⁺ −3.05 V', JSON.stringify(LADDER.map((c) => c.E)) === JSON.stringify([2.87, 1.51, 1.36, 1.33, 0.8, 0.77, 0.54, 0.34, 0, -0.25, -0.44, -0.76, -2.36, -3.05])]);
    out.push(['Oxidising strength of the oxidised form increases UP the ladder (arrow points up, toward F₂, the strongest oxidant); reducing strength of the reduced form increases DOWN (toward Li, the strongest reductant)', d.up[1][1] < d.up[0][1] && d.down[1][1] > d.down[0][1] && LADDER[0].key === 'F2/F-' && LADDER[LADDER.length - 1].key === 'Li+/Li']);
    const top = rungY(0), bot = rungY(LADDER.length - 1);
    out.push(['Each trend runs over the whole ladder: both arrows span every rung, from Li⁺/Li to F₂/F⁻, not just one side of the SHE', [d.up, d.down].every(([a, b]) => Math.min(a[1], b[1]) <= top && Math.max(a[1], b[1]) >= bot)]);
    out.push([`Reading the ladder: Fe³⁺ (${volts(Eof('Fe3+/Fe2+'))}) is above I₂ (${volts(Eof('I2/I-'))}), so Fe³⁺ oxidises I⁻; E°cell = ${fmt(Eof('Fe3+/Fe2+') - Eof('I2/I-'))} V > 0`, Eof('Fe3+/Fe2+') - Eof('I2/I-') > 0]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_07: Diagram[] = [fig71, fig72, fig73, fig74, figA1];
