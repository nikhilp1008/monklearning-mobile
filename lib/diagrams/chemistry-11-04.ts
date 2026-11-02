import { C, LABEL_GAP, Rect, Sketch, mathW, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 4 (Chemical Bonding and Molecular Structure),
 * first half: every drawing of the Master Reference book on pp. 163–182
 * (Topic 01, pp. 164–173; Topic 02, pp. 174–182; p. 182 carries Topic 02's
 * Pro-Tip and Cheat sheet, no drawing), redrawn.
 * Figures 4.5–4.8 and everything from Topic 03 on are in chemistry-11-04b.ts.
 *
 * The pages hold four drawings, all numbered, each on a "CHAPTER 4 · FIGURES"
 * page: Figure 4.1 (Born–Haber cycle) and 4.2 (ozone) on p. 168, 4.3 (azide
 * ion) on p. 170 — all Topic 01, topic index 0 — and 4.4 (the H₂ potential
 * energy curve) on p. 177, Topic 02, topic index 1. Each caption is printed a
 * first time where the text cites it, with "(see next page)" after it; the
 * captions here are the figure pages' own, which carry no pointer. One
 * unnumbered drawing, c11-04-01-d1 (topic index 0): the azide resonance pair
 * the book typesets inside Example 4(c) on p. 171 with lone-pair dots above
 * and below the letters, which app text cannot carry (expert review N6,
 * Nikhil's decision), so it is drawn. The other typeset structures (the
 * symmetric azide form, p. 169, beside Figure 4.3, and the thiocyanate MCQ
 * stem, p. 171) are written as plain text without dots, and the
 * SN/hybridisation table (p. 175) is a table.
 *
 * Every drawing is computed, not placed by eye: the Born–Haber boxes are
 * built from their species (one M, one X, total charge zero in every box)
 * and each arrow's process is read back from the boxes it joins; the Lewis
 * structures are drawn from atoms, bond orders and lone pairs, with angles
 * from VSEPR (ozone 120° for steric number 3; azide 180° for 2) and every
 * formal charge computed as FC = V − L − ½B; the H₂ curve is a Morse
 * potential with its minimum at r₀ = 74 pm and depth 435.8 kJ mol⁻¹. Each
 * `check` recomputes these and measures the layout.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 1) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;

/* ---------- drawing helpers (copied from chemistry-11-01.ts / physics-12-01.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean };
/** Every line a label must keep clear of, by sketch. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: rounded joins, kept for the clearance check unless `free`. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  if (!o.free) keep(s, pts);
}
/** An arrow (the kit's vector), kept for the clearance check. */
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w, dash: o.dash });
  keep(s, [a, b]);
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
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap)} px`, gap >= LABEL_GAP - 1e-9];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the labels against each other). */
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
/**
 * The result, bottom right, ink-edged, maths set in STIX (Sketch.text).
 * Registered as a tag, so the audit keeps everything else off it.
 */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 15, lh = size + 6;
  const w = Math.max(...lines.map((t) => mathW(t, size))) + 30, h = lines.length * lh + 14;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="15" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 7 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ===================================================================== */
/* Figure 4.1 · Born–Haber cycle (Topic 01, p. 168)                       */
/* ===================================================================== */
/**
 * The species the boxes hold, each with what it is made of: M and X atoms
 * and charge. Every box must hold one M, one X and no net charge.
 */
type Token = { html: string; M: number; X: number; q: number; key: string };
const T = {
  Ms: { html: 'M(s)', M: 1, X: 0, q: 0, key: 'M(s)' },
  Mg: { html: 'M(g)', M: 1, X: 0, q: 0, key: 'M(g)' },
  Mp: { html: 'M<sup>+</sup>(g)', M: 1, X: 0, q: 1, key: 'M+(g)' },
  hX2: { html: '½X<sub>2</sub>(g)', M: 0, X: 1, q: 0, key: '½X2(g)' },
  Xg: { html: 'X(g)', M: 0, X: 1, q: 0, key: 'X(g)' },
  Xm: { html: 'X<sup>−</sup>(g)', M: 0, X: 1, q: -1, key: 'X−(g)' },
  e: { html: 'e<sup>−</sup>', M: 0, X: 0, q: -1, key: 'e−' },
  MX: { html: 'MX(s)', M: 1, X: 1, q: 0, key: 'MX(s)' },
} satisfies Record<string, Token>;
type BoxId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
/** The six boxes, as the book prints them (p. 168). */
const BOX: Record<BoxId, Token[]> = {
  A: [T.Ms, T.hX2],
  B: [T.Mg, T.hX2],
  C: [T.Mg, T.Xg],
  D: [T.Mp, T.e, T.Xg],
  E: [T.Mp, T.Xm],
  F: [T.MX],
};
const boxHtml = (id: BoxId) => BOX[id].map((t) => t.html).join(' + ');
type Kind = 'invested' | 'returned' | 'direct';
type Step = { from: BoxId; to: BoxId; label: string; kind: Kind; /** what the step does: species lost → species gained */ lost: string[]; got: string[]; /** its enthalpy in the Hess sum, for KCl (Chapter 5's worked example, kJ mol⁻¹) */ kcl: number };
/** The stepwise route, in the book's order, and the direct route. Lattice formation is −Δ_latt H (errata: lattice enthalpy is the separation enthalpy, positive). */
const KCL = { sub: 89, i: 419, halfBond: 122, eg: -349, latt: 718, f: -437 };
const STEPS: Step[] = [
  { from: 'A', to: 'B', label: 'Δ<sub>sub</sub><i>H</i>', kind: 'invested', lost: ['M(s)'], got: ['M(g)'], kcl: KCL.sub },
  { from: 'B', to: 'C', label: '½Δ<sub>bond</sub><i>H</i>', kind: 'invested', lost: ['½X2(g)'], got: ['X(g)'], kcl: KCL.halfBond },
  { from: 'C', to: 'D', label: 'Δ<sub>i</sub><i>H</i>', kind: 'invested', lost: ['M(g)'], got: ['M+(g)', 'e−'], kcl: KCL.i },
  { from: 'D', to: 'E', label: 'Δ<sub>eg</sub><i>H</i>', kind: 'returned', lost: ['X(g)', 'e−'], got: ['X−(g)'], kcl: KCL.eg },
  { from: 'E', to: 'F', label: '−Δ<sub>latt</sub><i>H</i>', kind: 'returned', lost: ['M+(g)', 'X−(g)'], got: ['MX(s)'], kcl: -KCL.latt },
];
const DIRECT: Step = { from: 'A', to: 'F', label: 'Δ<sub>f</sub><i>H</i>', kind: 'direct', lost: ['M(s)', '½X2(g)'], got: ['MX(s)'], kcl: KCL.f };
const HESS = ['Hess’s law:', 'Δ<sub>f</sub><i>H</i> = Δ<sub>sub</sub><i>H</i> + ½Δ<sub>bond</sub><i>H</i>', '+ Δ<sub>i</sub><i>H</i> + Δ<sub>eg</sub><i>H</i> − Δ<sub>latt</sub><i>H</i>'];
/**
 * The caption as printed (p. 168), with three changes after the expert review (flags 16, 17) and
 * Nikhil's decisions: the stages named in the drawn order (the book's own drawing runs sublimation →
 * bond dissociation → ionisation; its caption had ionisation second); the colours named as drawn
 * ("orange" → "solid marigold", "green" → "dashed grey": the returned steps are dashed slate, and no
 * green is added); and the generic letters M, X upright, like every stand-in element letter here.
 */
const CAP41 = 'Born–Haber cycle for an alkali halide MX: the direct route from M(s) + ½X<sub>2</sub>(g) to MX(s) (the enthalpy of formation) equals the stepwise route through sublimation, bond dissociation, ionisation, electron gain and lattice formation. Energy invested is shown in solid marigold, energy returned in dashed grey.';
/** Box size (px), the two column centres, the right column's row centres, MX(s)'s centre, the legend row. */
const G41 = { size: 14, pad: 9, bh: 28, xL: 62, xR: 250, rows: [34, 106, 178, 250], yF: 316, legendY: 350, h: 470 };
const STYLE: Record<Kind, Stroke> = { invested: { color: C.mari, w: 1.9 }, returned: { color: C.slate, w: 1.7, dash: true }, direct: { color: C.ink, w: 1.9 } };
const LABEL_COLOR: Record<Kind, string> = { invested: C.amber, returned: C.slate, direct: C.text };
function geo41() {
  const { size, pad, bh, xL, xR, rows, yF } = G41;
  const rect = (id: BoxId, cx: number, cy: number): Rect => {
    const html = boxHtml(id), w = Math.max(mathW(html, size), plain(html).length * size * 0.5) + 2 * pad;
    return [cx - w / 2, cy - bh / 2, cx + w / 2, cy + bh / 2];
  };
  const box: Record<BoxId, Rect> = { A: rect('A', xL, rows[0]), B: rect('B', xR, rows[0]), C: rect('C', xR, rows[1]), D: rect('D', xR, rows[2]), E: rect('E', xR, rows[3]), F: rect('F', xL, yF) };
  const g = 3; // arrows stop this far short of a box
  const midY = (r: Rect) => (r[1] + r[3]) / 2;
  // each arrow: tail, tip, and where its label goes (baseline point, anchor)
  const arrows: { st: Step; a: P; b: P; at: P; anchor: 'start' | 'middle' | 'end' }[] = [
    { st: STEPS[0], a: [box.A[2] + g, midY(box.A)], b: [box.B[0] - g, midY(box.B)], at: [(box.A[2] + box.B[0]) / 2, midY(box.A) - 9], anchor: 'middle' },
    ...[1, 2, 3].map((k) => {
      const f = [box.B, box.C, box.D][k - 1], t = [box.C, box.D, box.E][k - 1];
      return { st: STEPS[k], a: [xR, f[3] + g] as P, b: [xR, t[1] - g] as P, at: [xR + 9, (f[3] + t[1]) / 2 + 5] as P, anchor: 'start' as const };
    }),
    // lattice formation: from the ions' box, lower left, to MX(s)'s right side
    { st: STEPS[4], a: [box.E[0] + 14, box.E[3] + g], b: [box.F[2] + g, midY(box.F)], at: [146, 283], anchor: 'end' },
    { st: DIRECT, a: [xL, box.A[3] + g], b: [xL, box.F[1] - g], at: [xL - 9, (box.A[3] + box.F[1]) / 2 + 5], anchor: 'end' },
  ];
  return { box, arrows };
}
/** What each drawing recorded: its boxes and arrows, read back by the check. */
const DRAWN41 = new WeakMap<Sketch, { boxes: { id: BoxId; rect: Rect; html: string }[]; arrows: { label: string; a: P; b: P; color: string; dash: boolean }[] }>();
const fig41: Diagram = {
  id: 'c11-04-fig-4.1',
  topic: 0,
  name: 'Born–Haber cycle',
  cases: [{ chip: 'Born–Haber cycle', cap: CAP41 }],
  draw() {
    const s = new Sketch(W, G41.h), g = geo41();
    const rec = { boxes: [] as { id: BoxId; rect: Rect; html: string }[], arrows: [] as { label: string; a: P; b: P; color: string; dash: boolean }[] };
    (Object.keys(g.box) as BoxId[]).forEach((id) => {
      const r = g.box[id], html = boxHtml(id);
      path(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]], { color: C.ink, w: 1.3 });
      s.sym((r[0] + r[2]) / 2, (r[1] + r[3]) / 2 + 5, html, { size: G41.size });
      rec.boxes.push({ id, rect: r, html });
    });
    g.arrows.forEach(({ st, a, b, at, anchor }) => {
      const sty = STYLE[st.kind];
      arrow(s, a, b, sty);
      s.sym(at[0], at[1], st.label, { size: 14, anchor, color: LABEL_COLOR[st.kind] });
      rec.arrows.push({ label: st.label, a, b, color: sty.color!, dash: !!sty.dash });
    });
    // the legend: each kind's own line, then its name
    const y = G41.legendY, items: [Kind, string][] = [['invested', 'energy invested'], ['returned', 'energy returned']];
    let x = 10;
    items.forEach(([k, t]) => {
      path(s, [[x, y + 11], [x + 22, y + 11]], STYLE[k]);
      s.tag(x + 28, y, t, null, null, { hi: k === 'invested' });
      x += 28 + tagW(t) + 13;
    });
    resultBlock(s, HESS, { size: 14 });
    DRAWN41.set(s, rec);
    return s;
  },
  check() {
    const s = fig41.draw(fig41.cases[0]), rec = DRAWN41.get(s)!;
    const out: Check[] = [];
    // every box holds one M, one X and no net charge
    const comp = (id: BoxId) => BOX[id].reduce((a, t) => ({ M: a.M + t.M, X: a.X + t.X, q: a.q + t.q }), { M: 0, X: 0, q: 0 });
    out.push([`Every box holds one M, one X and zero net charge: ${(Object.keys(BOX) as BoxId[]).map((id) => `${plain(boxHtml(id))} → M ${comp(id).M}, X ${comp(id).X}, charge ${comp(id).q}`).join('; ')}`, (Object.keys(BOX) as BoxId[]).every((id) => { const c = comp(id); return c.M === 1 && c.X === 1 && c.q === 0; })]);
    // each drawn arrow, read back: which box its tail leaves and which its tip reaches
    const boxAt = (p: P) => rec.boxes.find((b) => rectDist(b.rect, p) <= 3.5)?.id ?? '?';
    const all = [...STEPS, DIRECT];
    const readBack = rec.arrows.map((a) => `${boxAt(a.a)}→${boxAt(a.b)}`);
    out.push([`Read off the drawing, the arrows join ${readBack.join(', ')}: the stepwise route A→B→C→D→E→F and the direct route A→F, nothing else`, JSON.stringify(readBack) === JSON.stringify(all.map((st) => `${st.from}→${st.to}`))]);
    // each step does exactly what its label says: species lost and gained, from the boxes it joins
    const keys = (id: BoxId) => BOX[id].map((t) => t.key);
    const diff = (a: string[], b: string[]) => a.filter((k) => !b.includes(k)).sort();
    const stepOk = all.map((st) => {
      const lost = diff(keys(st.from), keys(st.to)), got = diff(keys(st.to), keys(st.from));
      return { st, ok: JSON.stringify(lost) === JSON.stringify([...st.lost].sort()) && JSON.stringify(got) === JSON.stringify([...st.got].sort()), txt: `${plain(st.label)}: ${lost.join(' + ')} → ${got.join(' + ')}` };
    });
    out.push([`Each arrow is the process its label names: ${stepOk.map((x) => x.txt).join('; ')}`, stepOk.every((x) => x.ok)]);
    // Hess's law with the book's own KCl data (Chapter 5): the steps sum to the formation enthalpy
    const sum = STEPS.reduce((a, st) => a + st.kcl, 0);
    out.push([`Hess's law with Chapter 5's KCl data: ${STEPS.map((st) => fmt(st.kcl, 0)).join(' + ')} = ${fmt(sum, 0)} kJ mol⁻¹ = Δ_f H (${fmt(KCL.f, 0)})`, close(sum, KCL.f) && close(DIRECT.kcl, KCL.f)]);
    out.push([`The lattice step carries −Δ_latt H (errata): with Δ_latt H = +${KCL.latt} kJ mol⁻¹ (separation, positive) the formation step is ${fmt(-KCL.latt, 0)}; a +Δ_latt H arrow would give ${fmt(sum + 2 * KCL.latt, 0)} ≠ ${fmt(KCL.f, 0)}`, KCL.latt > 0 && STEPS[4].label.startsWith('−') && !close(sum + 2 * KCL.latt, KCL.f)]);
    // the Hess line in the drawing is the stepwise labels in order, each with its own sign
    const terms = STEPS.map((st) => plain(st.label)).map((t, i) => (i === 0 ? t : t.startsWith('−') ? `− ${t.slice(1)}` : `+ ${t}`));
    const hessDrawn = plain(HESS.slice(1).join(' '));
    out.push([`The Hess's-law line reads ${hessDrawn}: the five stepwise labels in order with their signs, equal to Δ_f H`, hessDrawn === `${plain(DIRECT.label)} = ${terms.join(' ')}` && s.tags.some((t) => t.name.startsWith('Hess’s law:'))]);
    // colour: invested (endothermic, positive) steps marigold; returned (exothermic, negative) dashed slate
    out.push([`Invested steps are endothermic and drawn marigold, solid (${STEPS.filter((x) => x.kind === 'invested').map((x) => `${plain(x.label)} ${fmt(x.kcl, 0)}`).join(', ')}); returned steps exothermic and drawn slate, dashed (${STEPS.filter((x) => x.kind === 'returned').map((x) => `${plain(x.label)} ${fmt(x.kcl, 0)}`).join(', ')})`, STEPS.every((st, i) => (st.kind === 'invested' ? st.kcl > 0 && rec.arrows[i].color === C.mari && !rec.arrows[i].dash : st.kcl < 0 && rec.arrows[i].color === C.slate && rec.arrows[i].dash))]);
    out.push(['The legend names both kinds, each beside its own line', s.tags.some((t) => t.name === 'energy invested') && s.tags.some((t) => t.name === 'energy returned')]);
    const stageOf: Record<string, string> = { sub: 'sublimation', bond: 'bond dissociation', i: 'ionisation', eg: 'electron gain', latt: 'lattice formation' };
    const drawnStages = STEPS.map((st) => stageOf[/Δ<sub>(\w+)<\/sub>/.exec(st.label)![1]]);
    out.push([`The caption names the five stages in the drawn order: ${drawnStages.join(', ')}`, drawnStages.every((w, i, a) => CAP41.indexOf(w) > (i ? CAP41.indexOf(a[i - 1]) : 0))]);
    out.push(['The caption names only the colours and strokes the drawing uses: invested solid marigold, returned dashed grey (slate), no orange or green', CAP41.includes('solid marigold') && CAP41.includes('dashed grey') && !/orange|green/.test(CAP41) && STYLE.invested.color === C.mari && !STYLE.invested.dash && STYLE.returned.color === C.slate && !!STYLE.returned.dash]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Lewis structures: atoms, bonds, lone pairs, formal charges            */
/* ===================================================================== */
type Atom = { el: string; V: number; at: P; /** lone-pair directions, degrees (screen: 0 = right, 90 = down) */ lp: number[]; /** where its formal charge is printed; none when the book prints none */ fc?: P; fcColor?: string };
type Mol = { atoms: Atom[]; bonds: [number, number, number][]; charge: number };
const ATOM_SIZE = 24, BOND_GAP = 16.5, LP_R = 19, LP_HALF = 4.6, DBL = 3.6;
/** What each drawing recorded: atom centres, each bond line drawn (with its atoms), each lone-pair dot. */
const DRAWN = new WeakMap<Sketch, { lines: { a: number; b: number }[]; dots: P[] }>();
function atomLabel(s: Sketch, x: number, y: number, el: string) {
  const w = ATOM_SIZE * 0.72 * el.length;
  s.labels.push({ text: el, rect: [x - w / 2, y - ATOM_SIZE * 0.36, x + w / 2, y + ATOM_SIZE * 0.36] });
  s.text(x, y + ATOM_SIZE * 0.36, el, { size: ATOM_SIZE, semibold: true, color: C.ink });
}
/** FC = V − L − ½B, from the structure. */
const lone = (m: Mol, i: number) => 2 * m.atoms[i].lp.length;
const bonding = (m: Mol, i: number) => 2 * m.bonds.filter(([a, b]) => a === i || b === i).reduce((t, [, , o]) => t + o, 0);
const fcOf = (m: Mol, i: number) => m.atoms[i].V - lone(m, i) - bonding(m, i) / 2;
const sgn = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${-n}` : '0');
type Drawn = { lines: { a: number; b: number }[]; dots: P[] };
function drawMol(s: Sketch, m: Mol): Drawn {
  const rec: Drawn = { lines: [], dots: [] };
  m.bonds.forEach(([a, b, o]) => {
    const A = m.atoms[a].at, B = m.atoms[b].at, L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L], n: P = [-u[1], u[0]];
    for (let k = 0; k < o; k++) {
      const off = (k - (o - 1) / 2) * 2 * DBL;
      const p: P = [A[0] + u[0] * BOND_GAP + n[0] * off, A[1] + u[1] * BOND_GAP + n[1] * off], q: P = [B[0] - u[0] * BOND_GAP + n[0] * off, B[1] - u[1] * BOND_GAP + n[1] * off];
      path(s, [p, q], { w: 2.2 });
      rec.lines.push({ a, b });
    }
  });
  m.atoms.forEach((at) => {
    atomLabel(s, at.at[0], at.at[1], at.el);
    at.lp.forEach((d) => {
      const u: P = [Math.cos(rad(d)), Math.sin(rad(d))], n: P = [-u[1], u[0]];
      [-1, 1].forEach((k) => {
        const p: P = [at.at[0] + u[0] * LP_R + n[0] * k * LP_HALF, at.at[1] + u[1] * LP_R + n[1] * k * LP_HALF];
        s.dot(p[0], p[1], 2.4, C.ink);
        rec.dots.push(p);
      });
    });
  });
  m.atoms.forEach((at, i) => { if (at.fc) s.sym(at.fc[0], at.fc[1], sgn(fcOf(m, i)), { size: 17, color: at.fcColor }); });
  DRAWN.set(s, rec);
  return rec;
}
/** The chemistry the structure states, read back from the drawing: electrons, octets, formal charges, their sum. */
function molChecks(s: Sketch, m: Mol, want: { fc: number[]; electrons: number; angle: number }, drawn?: Drawn): Check[] {
  const rec = drawn ?? DRAWN.get(s)!, out: Check[] = [];
  const total = m.atoms.reduce((t, a) => t + a.V, 0) - m.charge;
  const drawnE = 2 * rec.lines.length + rec.dots.length;
  out.push([`Valence electrons: ${m.atoms.map((a) => a.V).join(' + ')}${m.charge < 0 ? ` + ${-m.charge}` : m.charge > 0 ? ` − ${m.charge}` : ''} = ${total} = ${want.electrons} stated; drawn ${rec.lines.length} bond lines × 2 + ${rec.dots.length} dots = ${drawnE}`, total === want.electrons && drawnE === total]);
  // lone-pair dots and bond lines read back per atom
  const dotsAt = (i: number) => rec.dots.filter((p) => len(p, m.atoms[i].at) < LP_R + LP_HALF + 2).length;
  const linesAt = (i: number) => rec.lines.filter((l) => l.a === i || l.b === i).length;
  out.push([`Lone-pair dots on each atom, read off the drawing: ${m.atoms.map((a, i) => `${a.el}${i + 1} ${dotsAt(i)} (L = ${lone(m, i)})`).join(', ')}`, m.atoms.every((_, i) => dotsAt(i) === lone(m, i))]);
  out.push([`Every atom has an octet, L + B = 8: ${m.atoms.map((_, i) => `${dotsAt(i)} + ${2 * linesAt(i)}`).join(', ')}`, m.atoms.every((_, i) => dotsAt(i) + 2 * linesAt(i) === 8 && lone(m, i) + bonding(m, i) === 8)]);
  const fcs = m.atoms.map((_, i) => fcOf(m, i));
  out.push([`Formal charges FC = V − L − ½B: ${m.atoms.map((a, i) => `${a.V} − ${lone(m, i)} − ${bonding(m, i) / 2} = ${sgn(fcs[i])}`).join('; ')} (stated ${want.fc.map(sgn).join(', ')})`, JSON.stringify(fcs) === JSON.stringify(want.fc)]);
  out.push([`Formal charges sum to the species' charge: ${fcs.map((x) => `(${sgn(x)})`).join(' + ')} = ${sgn(fcs.reduce((a, b) => a + b, 0))}`, fcs.reduce((a, b) => a + b, 0) === m.charge]);
  if (m.atoms.some((a) => a.fc)) out.push(['Each atom’s drawn formal charge is its computed one', m.atoms.every((a, i) => !a.fc || s.labels.some((l) => l.text === sgn(fcs[i]) && Math.abs((l.rect[0] + l.rect[2]) / 2 - a.fc![0]) < 0.5))]);
  // the bond angle at the central atom, measured on the drawing, against VSEPR
  const c = m.atoms[1], ends = m.bonds.map(([a, b]) => m.atoms[a === 1 ? b : a].at);
  const ang = Math.abs(((Math.atan2(ends[0][1] - c.at[1], ends[0][0] - c.at[0]) - Math.atan2(ends[1][1] - c.at[1], ends[1][0] - c.at[0])) * 180) / Math.PI);
  const sn = m.bonds.length + c.lp.length, vsepr = { 2: 180, 3: 120, 4: 109.5 }[sn as 2 | 3 | 4];
  out.push([`Central atom: ${m.bonds.length} σ-bonded atoms + ${c.lp.length} lone pair(s) = steric number ${sn} ⇒ ${vsepr}°; drawn angle ${fmt(Math.min(ang, 360 - ang))}°`, close(Math.min(ang, 360 - ang), want.angle, 1e-6) && vsepr === want.angle]);
  // lone pairs keep clear of bonds and of each other on every atom
  const dirs = m.atoms.map((a, i) => [...a.lp, ...m.bonds.filter(([x, y]) => x === i || y === i).map(([x, y]) => { const o = m.atoms[x === i ? y : x].at; return (Math.atan2(o[1] - a.at[1], o[0] - a.at[0]) * 180) / Math.PI; })]);
  const minSep = Math.min(...dirs.map((d) => { let mn = 360; d.forEach((p, i) => d.forEach((q, j) => { if (i < j) { const x = Math.abs(((p - q) % 360 + 540) % 360 - 180); mn = Math.min(mn, x); } })); return mn; }));
  out.push([`Around every atom the bonds and lone pairs are spread at least 90° apart (closest ${fmt(minSep)}°)`, minSep >= 90 - 1e-9]);
  return out;
}

/* ===================================================================== */
/* Figure 4.2 · ozone (Topic 01, p. 168)                                  */
/* ===================================================================== */
const CAP42 = 'Ozone Lewis structure — central O with one double bond to a left terminal O and one single bond to a right terminal O. Central O carries one lone pair; the double-bonded terminal O carries two lone pairs; the single-bonded terminal O carries three lone pairs.';
/** Central O, the O–O length (px) and the angle (VSEPR, steric number 3). */
const G42 = { c: [170, 84] as P, L: 84, angle: 120, h: 214 };
function ozone(): Mol {
  const { c, L, angle } = G42, half = angle / 2;
  // bonds leave the central O downwards, each half the angle from the vertical
  const dl = 90 + half, dr = 90 - half;
  const left: P = [c[0] + L * Math.cos(rad(dl)), c[1] + L * Math.sin(rad(dl))], right: P = [c[0] + L * Math.cos(rad(dr)), c[1] + L * Math.sin(rad(dr))];
  const back = (d: number) => d + 180; // direction from a terminal back to the centre
  return {
    charge: 0,
    atoms: [
      // left O (double bond): two lone pairs at ±120° from its bond
      { el: 'O', V: 6, at: left, lp: [back(dl) + 120, back(dl) - 120], fc: [left[0] - 34, left[1] - 38], fcColor: C.slate },
      // central O: one lone pair, opposite its two bonds
      { el: 'O', V: 6, at: c, lp: [270], fc: [c[0], c[1] - 46], fcColor: C.amber },
      // right O (single bond): three lone pairs, 90° apart, away from its bond
      { el: 'O', V: 6, at: right, lp: [back(dr) + 90, back(dr) + 180, back(dr) + 270], fc: [right[0] + 34, right[1] - 38], fcColor: C.amber },
    ],
    bonds: [[0, 1, 2], [1, 2, 1]],
  };
}
const fig42: Diagram = {
  id: 'c11-04-fig-4.2',
  topic: 0,
  name: 'Ozone Lewis structure',
  cases: [{ chip: 'Lewis structure', cap: CAP42 }],
  draw() {
    const s = new Sketch(W, G42.h), m = ozone();
    drawMol(s, m);
    s.sym(W / 2, G42.h - 14, 'formal charges:  +1 (central),  0,  −1', { size: 15, color: C.slate });
    return s;
  },
  check() {
    const s = fig42.draw(fig42.cases[0]), m = ozone();
    const out = molChecks(s, m, { fc: [0, 1, -1], electrons: 18, angle: 120 });
    const order = (a: number, b: number) => m.bonds.find(([x, y]) => (x === a && y === b) || (x === b && y === a))?.[2];
    out.push(['As the caption says: double bond to the LEFT terminal O, single bond to the RIGHT; lone pairs 1 on the central O, 2 on the double-bonded, 3 on the single-bonded O', order(0, 1) === 2 && order(1, 2) === 1 && m.atoms[0].at[0] < m.atoms[1].at[0] && m.atoms[2].at[0] > m.atoms[1].at[0] && m.atoms[1].lp.length === 1 && m.atoms[0].lp.length === 2 && m.atoms[2].lp.length === 3]);
    out.push(['The line under the drawing states the computed charges: +1 (central), 0, −1', s.labels.some((l) => l.text === `formal charges:  ${sgn(fcOf(m, 1))} (central),  ${sgn(fcOf(m, 0))},  ${sgn(fcOf(m, 2))}`)]);
    out.push(['The nonzero formal charges (+1, −1) are the highlight (amber), the zero is grey, as in the book', m.atoms.every((a, i) => a.fcColor === (fcOf(m, i) ? C.amber : C.slate))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.3 · azide ion (Topic 01, p. 170)                              */
/* ===================================================================== */
const CAP43 = 'Azide ion N<sub>3</sub><sup>−</sup>: N=N=N with two lone pairs on each terminal N and none on the central N; formal charges −1, +1, −1 give an overall charge of −1.';
/** The three N on one line (steric number 2 at the centre: 180°), their spacing, the bracket. */
const G43 = { y: 112, x: [72, 170, 268], br: [24, 316, 46, 178] as [number, number, number, number], h: 196 };
function azide(): Mol {
  const [x0, x1, x2] = G43.x, y = G43.y;
  return {
    charge: -1,
    atoms: [
      { el: 'N', V: 5, at: [x0, y], lp: [225, 135], fc: [x0, y - 40], fcColor: C.amber },
      { el: 'N', V: 5, at: [x1, y], lp: [], fc: [x1, y - 40], fcColor: C.amber },
      { el: 'N', V: 5, at: [x2, y], lp: [315, 45], fc: [x2, y - 40], fcColor: C.amber },
    ],
    bonds: [[0, 1, 2], [1, 2, 2]],
  };
}
const fig43: Diagram = {
  id: 'c11-04-fig-4.3',
  topic: 0,
  name: 'Azide ion',
  cases: [{ chip: 'Lewis structure', cap: CAP43 }],
  draw() {
    const s = new Sketch(W, G43.h), m = azide(), [l, r, t, b] = G43.br;
    drawMol(s, m);
    // the square brackets and the ion's charge outside them
    path(s, [[l + 10, t], [l, t], [l, b], [l + 10, b]], { color: C.slate, w: 2 });
    path(s, [[r - 10, t], [r, t], [r, b], [r - 10, b]], { color: C.slate, w: 2 });
    s.sym(r + 13, t - 1, '−', { size: 20 }); // raised clear of the bracket's top stroke, a charge not a serif
    return s;
  },
  check() {
    const s = fig43.draw(fig43.cases[0]), m = azide();
    const out = molChecks(s, m, { fc: [-1, 1, -1], electrons: 16, angle: 180 });
    out.push(['As the caption says: N=N=N (two double bonds), two lone pairs on each terminal N, none on the central N', m.bonds.every(([, , o]) => o === 2) && m.atoms[0].lp.length === 2 && m.atoms[2].lp.length === 2 && m.atoms[1].lp.length === 0]);
    const avg = m.bonds.reduce((t, [, , o]) => t + o, 0) / m.bonds.length;
    out.push([`Both N–N bonds have order ${avg} (the resonance hybrid's average, 2) and are drawn the same length (${fmt(len(m.atoms[0].at, m.atoms[1].at))} and ${fmt(len(m.atoms[1].at, m.atoms[2].at))} px)`, avg === 2 && close(len(m.atoms[0].at, m.atoms[1].at), len(m.atoms[1].at, m.atoms[2].at))]);
    const minus = s.labels.find((x) => x.text === '−');
    out.push(['The ion’s overall charge, −, sits outside the bracket at its top right, equal to the formal charges’ sum', !!minus && minus.rect[0] > G43.br[1] && minus.rect[3] < G43.y && m.atoms.reduce((t, _, i) => t + fcOf(m, i), 0) === -1]);
    out.push(['Every atom, lone pair and formal charge lies inside the bracket', [...DRAWN.get(s)!.dots, ...m.atoms.map((a) => a.at)].every((p) => p[0] > G43.br[0] + 6 && p[0] < G43.br[1] - 6 && p[1] > G43.br[2] && p[1] < G43.br[3]) && s.labels.filter((x) => x.text !== '−').every((x) => x.rect[0] > G43.br[0] + 4 && x.rect[2] < G43.br[1] - 4 && x.rect[1] > G43.br[2] + 4 && x.rect[3] < G43.br[3] - 4)]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* c11-04-01-d1 · the azide triple/single resonance pair (Topic 01,       */
/* Example 4(c), p. 171)                                                  */
/* ===================================================================== */
/**
 * The book typesets the pair inside the sentence, [N≡N–N]⁻ ↔ [N–N≡N]⁻, with its lone pairs as
 * dots over, under and beside the letters: one pair above the triple-bonded N; above, below and
 * beside the single-bonded N. Each form is drawn as the book prints it, on the same three-atom line
 * as Figure 4.3 (steric number 2 at the centre: 180°). The two forms are stacked, one above the
 * other with the resonance arrow between them, because side by side they do not fit a phone's width
 * at the size of Figure 4.3. No formal charges are printed: the book's line prints none; the
 * check computes them.
 */
const CAP01D1 = 'Azide ion N<sub>3</sub><sup>−</sup>: the two triple/single resonance forms, each with one lone pair on the triple-bonded N, none on the central N and three on the single-bonded N.';
const G01 = { x: [74, 170, 266], y: [52, 180] as [number, number], br: [26, 314] as [number, number], half: 34, gap: 12, h: 232 };
function azideTS(form: 0 | 1): Mol {
  const y = G01.y[form], [x0, x1, x2] = G01.x;
  // form 0: [N≡N–N]⁻, form 1: [N–N≡N]⁻; lone pairs where the book prints them (270 up, 90 down, 0 right, 180 left)
  return form === 0
    ? { charge: -1, atoms: [{ el: 'N', V: 5, at: [x0, y], lp: [270] }, { el: 'N', V: 5, at: [x1, y], lp: [] }, { el: 'N', V: 5, at: [x2, y], lp: [270, 90, 0] }], bonds: [[0, 1, 3], [1, 2, 1]] }
    : { charge: -1, atoms: [{ el: 'N', V: 5, at: [x0, y], lp: [180, 270, 90] }, { el: 'N', V: 5, at: [x1, y], lp: [] }, { el: 'N', V: 5, at: [x2, y], lp: [270] }], bonds: [[0, 1, 1], [1, 2, 3]] };
}
const DRAWN01 = new WeakMap<Sketch, Drawn[]>();
const fig01d1: Diagram = {
  id: 'c11-04-01-d1',
  topic: 0,
  name: 'Azide resonance forms',
  cases: [{ chip: 'Two forms', cap: CAP01D1 }],
  draw() {
    const s = new Sketch(W, G01.h), [l, r] = G01.br, recs: Drawn[] = [];
    ([0, 1] as const).forEach((f) => {
      recs.push(drawMol(s, azideTS(f)));
      const t = G01.y[f] - G01.half, b = G01.y[f] + G01.half;
      // the square brackets and the ion's charge outside them, as in Figure 4.3
      path(s, [[l + 10, t], [l, t], [l, b], [l + 10, b]], { color: C.slate, w: 2 });
      path(s, [[r - 10, t], [r, t], [r, b], [r - 10, b]], { color: C.slate, w: 2 });
      s.sym(r + 13, t - 1, '−', { size: 20 }); // raised clear of the bracket's top stroke, a charge not a serif
    });
    // the double-headed resonance arrow between the two forms
    const xa = G01.x[1], ya = G01.y[0] + G01.half + G01.gap, yb = G01.y[1] - G01.half - G01.gap;
    s.vec(xa, (ya + yb) / 2, xa, ya, { color: C.ink, w: 1.7 });
    s.vec(xa, (ya + yb) / 2, xa, yb, { color: C.ink, w: 1.7 });
    keep(s, [[xa, ya], [xa, yb]]);
    DRAWN01.set(s, recs);
    return s;
  },
  check() {
    const s = fig01d1.draw(fig01d1.cases[0]), recs = DRAWN01.get(s)!, out: Check[] = [];
    const m = [azideTS(0), azideTS(1)];
    out.push(...molChecks(s, m[0], { fc: [0, 1, -2], electrons: 16, angle: 180 }, recs[0]).map(([t, ok]): Check => [`[N≡N–N]⁻: ${t}`, ok]));
    out.push(...molChecks(s, m[1], { fc: [-2, 1, 0], electrons: 16, angle: 180 }, recs[1]).map(([t, ok]): Check => [`[N–N≡N]⁻: ${t}`, ok]));
    out.push(['As printed: one lone pair on the triple-bonded N (above it), none on the centre, three on the single-bonded N (above, below and beside it)', JSON.stringify(m[0].atoms.map((a) => a.lp)) === JSON.stringify([[270], [], [270, 90, 0]]) && JSON.stringify(m[1].atoms.map((a) => a.lp)) === JSON.stringify([[180, 270, 90], [], [270]])]);
    // the two forms are mirror images: equivalent to each other
    const mirror = m[0].atoms.every((a, i) => a.lp.length === m[1].atoms[2 - i].lp.length && fcOf(m[0], i) === fcOf(m[1], 2 - i)) && m[0].bonds[0][2] === m[1].bonds[1][2] && m[0].bonds[1][2] === m[1].bonds[0][2];
    out.push(['The two forms are mirror images of each other (lone pairs, bond orders and formal charges swapped end for end): equivalent to each other', mirror]);
    // but not to the symmetric form of Figure 4.3, whose charges are −1, +1, −1
    const sym = azide(), fSym = sym.atoms.map((_, i) => fcOf(sym, i)), f0 = m[0].atoms.map((_, i) => fcOf(m[0], i));
    out.push([`Not equivalent to the symmetric form (Figure 4.3): charges ${f0.map(sgn).join(', ')} against ${fSym.map(sgn).join(', ')}, a larger charge separation`, JSON.stringify(f0) !== JSON.stringify(fSym) && Math.max(...f0.map(Math.abs)) > Math.max(...fSym.map(Math.abs))]);
    // averaged over the two equivalent forms each N–N bond has order (3 + 1)/2 = 2, as the text says
    const avg = [0, 1].map((k) => (m[0].bonds[k][2] + m[1].bonds[k][2]) / 2);
    out.push([`Averaged over the two forms each N–N bond has order ${avg.join(' and ')}: the text's average bond order of 2, both bonds alike`, avg.every((x) => x === 2)]);
    const minus = s.labels.filter((x) => x.text === '−');
    out.push(['Each form carries the ion’s charge, −, outside its bracket at the top right', minus.length === 2 && minus.every((x) => x.rect[0] > G01.br[1])]);
    out.push(['Every atom and lone pair lies inside its own bracket', [0, 1].every((f) => [...recs[f].dots, ...m[f].atoms.map((a) => a.at)].every((p) => p[0] > G01.br[0] + 6 && p[0] < G01.br[1] - 6 && Math.abs(p[1] - G01.y[f]) < G01.half - 4))]);
    out.push(['The resonance arrow stands clear between the two brackets', G01.y[0] + G01.half + G01.gap < G01.y[1] - G01.half - G01.gap]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 4.4 · H₂ potential energy curve (Topic 02, p. 177)              */
/* ===================================================================== */
const CAP44 = 'Potential energy of two H atoms against internuclear distance: <i>E</i> → 0 for widely separated atoms, a minimum of −435.8 kJ mol<sup>−1</sup> at <i>r</i><sub>0</sub> = 74 pm (this depth is the bond enthalpy), and a steep rise at shorter distances because of nuclear repulsion.';
/**
 * A Morse potential E(r) = D[(1 − e^(−a(r − r₀)))² − 1]: zero for widely separated atoms, its
 * minimum −D at r₀, and a steep rise inside. D and r₀ are the book's; a is set so the curve crosses
 * E = 0 at 50 pm, where the book's drawn curve crosses it (a = ln 2 / 24 pm⁻¹).
 */
const H2 = { D: 435.8, r0: 74, a: Math.LN2 / 24 };
const E = (r: number) => H2.D * ((1 - Math.exp(-H2.a * (r - H2.r0))) ** 2 - 1);
/** Graph frame: E = 0 at oy, r = 0 at ox; px per pm and per kJ mol⁻¹; the axes' ranges. */
const F44 = { ox: 60, oy: 215.5, sx: 262 / 430, sy: 0.13, rMax: 430, eTop: 1350, eBot: -560, h: 322 };
const X4 = (r: number) => F44.ox + r * F44.sx;
const Y4 = (e: number) => F44.oy - e * F44.sy;
/** Where the curve starts at the top: E = 1300. */
const rTop = () => { let lo = 1, hi = H2.r0; for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (E(m) > 1300) lo = m; else hi = m; } return (lo + hi) / 2; };
const fig44: Diagram = {
  id: 'c11-04-fig-4.4',
  topic: 1,
  name: 'Potential energy of two H atoms',
  cases: [{ chip: 'Potential energy', cap: CAP44 }],
  draw() {
    const s = new Sketch(W, F44.h), { ox, oy } = F44;
    // axes
    s.vec(ox, Y4(F44.eBot), ox, Y4(F44.eTop) - 8, { color: C.grey, w: 1.3 });
    s.vec(ox, oy, X4(F44.rMax) + 10, oy, { color: C.grey, w: 1.3 });
    [1250, 1000, 750, 500, 250, 0, -250, -500].forEach((e) => {
      s.line(ox - 4, Y4(e), ox, Y4(e), { color: C.grey, w: 1.2 });
      s.sym(ox - 7, Y4(e) + 4.5, fmt(e, 0), { size: 12.5, anchor: 'end', color: C.slate });
    });
    [100, 200, 300, 400].forEach((r) => {
      s.line(X4(r), oy, X4(r), oy + 4, { color: C.grey, w: 1.2 });
      s.sym(X4(r), oy - 8, String(r), { size: 12.5, color: C.slate });
    });
    s.sym(ox + 26, Y4(F44.eTop) + 2, '<i>E</i> (kJ mol<sup>−1</sup>)', { size: 15, anchor: 'start' });
    s.sym(W - 6, oy + 24, '<i>r</i> (pm)', { size: 15, anchor: 'end' });
    // the curve
    const r0 = rTop(), pts: P[] = [];
    for (let i = 0; i <= 800; i++) { const r = r0 + ((F44.rMax - r0) * i) / 800; pts.push([X4(r), Y4(E(r))]); }
    path(s, pts, { w: 2.4 });
    // the minimum: the bond
    const m: P = [X4(H2.r0), Y4(-H2.D)];
    path(s, [[ox, m[1]], [m[0] - 5, m[1]]], { color: C.mari, w: 1.2, dash: true, free: true });
    path(s, [[m[0], oy - 3], [m[0], 180]], { color: C.mari, w: 1.2, dash: true, free: true });
    // the well depth: a two-headed arrow from E = 0 down to the minimum
    const midY = (oy + m[1]) / 2;
    s.vec(m[0], midY, m[0], oy + 2, { w: 1.5 });
    s.vec(m[0], midY, m[0], m[1] - 6, { w: 1.5 });
    keep(s, [[m[0], oy + 2], [m[0], m[1] - 6]]);
    s.dot(m[0], m[1], 4, C.mari);
    s.sym(m[0] + 3, 172.6, '<i>r</i><sub>0</sub> = 74 pm', { size: 14, anchor: 'start', color: C.amber });
    s.sym(ox + 3, m[1] + 15, '−435.8', { size: 13.5, anchor: 'start', color: C.amber });
    s.sym(X4(88), m[1] + 22, 'bond enthalpy (well depth)', { size: 13, anchor: 'start' });
    s.sym(X4(88), m[1] + 40, '435.8 kJ mol<sup>−1</sup>', { size: 13, anchor: 'start' });
    s.sym(W - 8, Y4(180), 'H + H  (separated atoms, <i>E</i> = 0)', { size: 12, anchor: 'end', color: C.slate });
    // the repulsive wall, named by a tag
    const rw = 41;
    s.place([{ t: 'nuclear repulsion dominates', p: [X4(rw), Y4(E(rw))], at: [[112, 82, 'start'], [116, 70, 'start'], [112, 96, 'start']] }]);
    return s;
  },
  check() {
    const s = fig44.draw(fig44.cases[0]), out: Check[] = [];
    // minimum: where dE/dr = 0, found numerically
    let lo = 40, hi = 200;
    const g = (Math.sqrt(5) - 1) / 2;
    for (let i = 0; i < 200; i++) { const a = hi - g * (hi - lo), b = lo + g * (hi - lo); if (E(a) < E(b)) hi = b; else lo = a; }
    const rMin = (lo + hi) / 2;
    out.push([`The curve's minimum is at r = ${fmt(rMin, 4)} pm = r₀ = 74 pm, E = ${fmt(E(rMin), 4)} kJ mol⁻¹ = −435.8 (the bond enthalpy is its depth, 435.8)`, close(rMin, 74, 1e-4) && close(E(rMin), -435.8, 1e-6)]);
    out.push([`E → 0 for widely separated atoms: E(430 pm) = ${fmt(E(430), 3)}, E(1000 pm) = ${fmt(E(1000), 6)} kJ mol⁻¹, always below zero beyond r₀ and rising towards it`, Math.abs(E(430)) < 0.5 && Math.abs(E(1000)) < 1e-6 && [100, 150, 200, 300, 430].every((r, i, a) => E(r) < 0 && (i === 0 || E(r) > E(a[i - 1])))]);
    const r0z = H2.r0 - Math.log(2) / H2.a;
    out.push([`A steep rise inside: E = 0 at r = ${fmt(r0z, 2)} pm, E(41 pm) = ${fmt(E(41), 0)}, E(36 pm) = ${fmt(E(36), 0)} kJ mol⁻¹; slope there ${fmt((E(40) - E(42)) / 2, 0)} kJ mol⁻¹ per pm against ${fmt((E(160) - E(150)) / 10, 1)} at 150 pm on the far side`, close(E(r0z), 0, 1e-9) && E(41) > 650 && E(36) > 1250 && (E(40) - E(42)) / 2 > 20 * Math.abs((E(160) - E(150)) / 10)]);
    // the drawn curve, read back
    const lines = LINES.get(s)!, curve = lines.find((l) => l.length > 100)!;
    out.push(['The drawn curve, read back at every point, is E(r)', curve.every(([x, y]) => close((F44.oy - y) / F44.sy, E((x - F44.ox) / F44.sx), 1e-6))]);
    const dot = s.points.find((p) => p.r === 4)!;
    out.push([`The marigold dot is the minimum: r = ${fmt((dot.x - F44.ox) / F44.sx, 3)} pm, E = ${fmt((F44.oy - dot.y) / F44.sy, 3)} kJ mol⁻¹`, close((dot.x - F44.ox) / F44.sx, 74) && close((F44.oy - dot.y) / F44.sy, -435.8)]);
    const tick = (t: string) => s.labels.find((l) => l.text === t);
    out.push(['Every axis value stands at its own value: E ticks 1250 … −500, r ticks 100 … 400', [1250, 1000, 750, 500, 250, 0, -250, -500].every((e) => { const l = tick(fmt(e, 0)); return !!l && close((F44.oy - (l.rect[1] + 12.5 * 0.72 - 4.5)) / F44.sy, e, 1e-6); }) && [100, 200, 300, 400].every((r) => { const l = tick(String(r)); return !!l && close(((l.rect[0] + l.rect[2]) / 2 - F44.ox) / F44.sx, r); })]);
    out.push(['The book’s labels are there: r₀ = 74 pm, −435.8, the well depth 435.8 kJ mol⁻¹, H + H (separated atoms, E = 0)', ['r0 = 74 pm', '−435.8', 'bond enthalpy (well depth)', '435.8 kJ mol−1', 'H + H  (separated atoms, E = 0)'].every((t) => !!tick(t))]);
    const tg = s.tags.find((t) => t.name === 'nuclear repulsion dominates');
    out.push(['“nuclear repulsion dominates” names the steep wall inside r₀, where E is large and positive', !!tg?.from && (tg.from[0] - F44.ox) / F44.sx < 50 && close((F44.oy - tg.from[1]) / F44.sy, E((tg.from[0] - F44.ox) / F44.sx), 1e-6) && E((tg.from[0] - F44.ox) / F44.sx) > 500]);
    out.push(['The caption’s values are the drawing’s: −435.8 kJ mol⁻¹ at r₀ = 74 pm', CAP44.includes('−435.8 kJ mol<sup>−1</sup> at <i>r</i><sub>0</sub> = 74 pm') && H2.D === 435.8 && H2.r0 === 74]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_04: Diagram[] = [fig41, fig42, fig43, fig01d1, fig44];
