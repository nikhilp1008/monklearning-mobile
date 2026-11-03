import { C, F, LABEL_GAP, Rect, Sketch, crosses, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * PHYSICS CLASS 12, CHAPTER 14 (Semiconductor Electronics), Topics 01–02:
 * every drawing of the Master Reference book in pp. 866–889, redrawn. They are
 * the seven numbered figures, each printed on a "CHAPTER 14 · FIGURES" page
 * (14.1 on p. 868, 14.2 on p. 870, 14.3 on p. 872, 14.4 on p. 879, 14.5 on
 * p. 882, 14.6 and 14.7 on p. 884; the first copy of each caption sits a page
 * earlier, where the text reaches it). There are no unnumbered drawings: pp.
 * 866–889 were checked page by page; the rest is prose, typeset equations,
 * symbol lists and the cheat-sheet boxes (the boxed n_e n_h = n_i² on p. 876
 * is a boxed formula). The '00' opening (p. 865) has no drawing either.
 *
 * Every figure is computed from the physics, never placed by eye: the band
 * diagrams of Figure 14.1 share one energy scale (25 px per eV), with the
 * topic's own gaps (diamond 5.4 eV for the insulator, silicon 1.1 eV for the
 * semiconductor); Figure 14.2 follows NCERT's band-formation picture (the s
 * and p levels spread into bands as r falls, overlap, and split again into two
 * 4N bands with the gap at the equilibrium spacing r₀, inside the overlap);
 * Figure 14.3 keeps the book's levels (donor just below E_C, acceptor just
 * above E_V) with the gaps exaggerated, as the book says, and E_F at its
 * room-temperature position (past the impurity level, which is ionised);
 * Figure 14.4 is charge-neutral region by region and its depletion charges
 * balance (N_A x_p = N_D x_n); Figure 14.5's bands
 * bend by the depletion approximation (two parabolae, slope continuous at the
 * junction) by eV_b = 0.7 eV with E_g = 1.1 eV (silicon); Figure 14.6 is the
 * diode equation I = I_S(e^{V/V_T} − 1) with V_T = 25.9 mV; Figure 14.7 is a
 * 50 Hz, 10 V sine full-wave rectified and smoothed by an ideal diode and a
 * capacitor discharging as e^{−t/(R_L C)}. Each `check` recomputes what the
 * figure and its caption state, reads the drawn curves back where it can, and
 * measures that no label or tag touches a line it does not name.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const add = (a: P, b: P, k = 1): P => [a[0] + k * b[0], a[1] + k * b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const dotp = (a: P, b: P) => a[0] * b[0] + a[1] * b[1];
const unit = (a: P): P => { const l = Math.hypot(a[0], a[1]); return [a[0] / l, a[1] / l]; };
const samples = (a: number, b: number, n = 400) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- drawing helpers (as in physics-12-11.ts and physics-12-12.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: 'dash' | 'dot'; free?: boolean };
const dashOf = (d?: Stroke['dash']) => (d === 'dash' ? ' stroke-dasharray="6 4"' : d === 'dot' ? ' stroke-dasharray="1.5 3.5"' : '');

/**
 * Every line a label must keep clear of (outlines, curves, arrows, marks), by
 * sketch: `clearance` measures each tag and label against them. Dotted guides
 * are left out (`free`).
 */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: ink, rounded joins. */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, pts);
}
/** A closed outline, never filled. */
function outline(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ') + ' Z';
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round"${dashOf(o.dash)}/>`);
  if (!o.free) keep(s, [...pts, pts[0]]);
}
const box = (r: Rect): P[] => [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]];
/** Every arrowhead drawn, by sketch, as its tip and its middle: a tag's dot keeps off them (`dotsOffHeads`). */
const HEADS = new WeakMap<Sketch, [P, P][]>();
/** Every arrowhead as the triangle drawn, by sketch. */
const INKS = new WeakMap<Sketch, P[][]>();
const headTri = (tip: P, u: P, L = 9, hw = 4.5): P[] => { const b = add(tip, u, -L), nv: P = [-u[1], u[0]]; return [tip, add(b, nv, hw), add(b, nv, -hw)]; };
/** A small arrowhead with its tip at p, pointing along the unit direction u. */
function head(s: Sketch, p: P, u: P, color: string = C.ink, L = 9, hw = 4.5) {
  const tri = headTri(p, u, L, hw);
  s.add(`<path d="M${tri.map((q) => `${r1(q[0])} ${r1(q[1])}`).join(' L')} Z" fill="${color}"/>`);
  keep(s, [...tri, tri[0]]);
  HEADS.set(s, [...(HEADS.get(s) ?? []), [p, add(p, u, -L / 2)]]);
  INKS.set(s, [...(INKS.get(s) ?? []), tri]);
}
/** An arrow from a to b, its head at b. */
function arrow(s: Sketch, a: P, b: P, o: { color?: string; w?: number; dash?: 'dash' | 'dot'; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 9;
  path(s, [a, add(b, u, -L + 1)], { color: o.color, w: o.w ?? 1.8, dash: o.dash });
  head(s, b, u, o.color ?? C.ink, L, o.hw ?? 4.5);
}
/** A span (an energy gap, a width): a line from a to b with a head at each end. */
function span(s: Sketch, a: P, b: P, o: { color?: string; w?: number; L?: number; hw?: number } = {}) {
  const u = unit(sub(b, a)), L = o.L ?? 7, hw = o.hw ?? 3.5, col = o.color ?? C.slate;
  path(s, [add(a, u, L - 1), add(b, u, -L + 1)], { color: col, w: o.w ?? 1.4 });
  head(s, a, [-u[0], -u[1]], col, L, hw);
  head(s, b, u, col, L, hw);
}
/**
 * A dotted guide, free of the clearance check (it only joins marks), but
 * never through a label or a tag. See `guideHits`.
 */
const GUIDES = new WeakMap<Sketch, [P, P][]>();
const guide = (s: Sketch, a: P, b: P, color: string = C.slate, dash: 'dot' | 'dash' = 'dot') => {
  GUIDES.set(s, [...(GUIDES.get(s) ?? []), [a, b]]);
  path(s, [a, b], { color, w: 1.1, dash, free: true });
};
/** Words in Onest (names on the drawing, as the book writes them), registered so tags and the checks keep clear of them. */
function words(s: Sketch, x: number, y: number, t: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 12, anchor = o.anchor ?? 'middle', w = t.length * size * 0.56;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: t, rect: [x0, y - size * 0.75, x0 + w, y + size * 0.22] });
  s.add(`<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${F.tag}" font-size="${size}" fill="${o.color ?? C.text}">${esc(t)}</text>`);
}

/* ---------- carriers and ions ---------- */
/** A conduction electron: a small ink dot (a point tags keep off). */
const electron = (s: Sketch, p: P) => s.dot(p[0], p[1], 3.2);
/** A hole: a small open ring, the book's mark. */
function hole(s: Sketch, p: P) {
  s.point(p[0], p[1], 3.6, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3.6" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
  keep(s, samples(0, 360, 24).map((a): P => [p[0] + 3.6 * Math.cos((a * Math.PI) / 180), p[1] + 3.6 * Math.sin((a * Math.PI) / 180)]));
}
/** The marks of Figure 14.4: a mobile hole "+", a mobile electron "−", and the fixed ions ⊖ and ⊕ (a sign in a ring). */
type Mark = 'hole' | 'electron' | 'acceptor' | 'donor';
function mark(s: Sketch, p: P, m: Mark) {
  const [x, y] = p, a = 4.5;
  const plus = (c: string, w: number, r: number) => `<line x1="${r1(x - r)}" y1="${r1(y)}" x2="${r1(x + r)}" y2="${r1(y)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><line x1="${r1(x)}" y1="${r1(y - r)}" x2="${r1(x)}" y2="${r1(y + r)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const minus = (c: string, w: number, r: number) => `<line x1="${r1(x - r)}" y1="${r1(y)}" x2="${r1(x + r)}" y2="${r1(y)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const ringSvg = `<circle cx="${r1(x)}" cy="${r1(y)}" r="5.6" fill="none" stroke="${C.ink}" stroke-width="1.3"/>`;
  if (m === 'hole') s.point(x, y, a, plus(C.ink, 1.8, a));
  else if (m === 'electron') s.point(x, y, a, minus(C.ink, 2, a + 0.5));
  else s.point(x, y, 5.6, ringSvg + (m === 'donor' ? plus(C.ink, 1.3, 3) : minus(C.ink, 1.3, 3)));
  keep(s, m === 'hole' || m === 'electron' ? [[x - a, y - a], [x + a, y - a], [x + a, y + a], [x - a, y + a], [x - a, y - a]] : samples(0, 360, 24).map((t): P => [x + 5.6 * Math.cos((t * Math.PI) / 180), y + 5.6 * Math.sin((t * Math.PI) / 180)]));
  MARKS.set(s, [...(MARKS.get(s) ?? []), { p, m }]);
}
/** The marks drawn, by sketch, so a check can count them back off the drawing. */
const MARKS = new WeakMap<Sketch, { p: P; m: Mark }[]>();

/* ---------- the layout checks ---------- */
/** Point-to-segment distance. */
function distSeg(p: P, a: P, b: P) {
  const d = sub(b, a), L = dotp(d, d) || 1, k = Math.max(0, Math.min(1, dotp(sub(p, a), d) / L));
  return len(p, add(a, d, k));
}
/** How far p is from a triangle's ink (0 inside it). */
const triDist = (t: P[], p: P) => {
  const side = (a: P, b: P) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const s3 = t.map((a, i) => side(a, t[(i + 1) % 3]));
  if (s3.every((v) => v >= 0) || s3.every((v) => v <= 0)) return 0;
  return Math.min(...t.map((a, i) => distSeg(p, a, t[(i + 1) % 3])));
};
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
/** The labels and tags a dotted guide runs through (more than 4 px into the box). */
const guideHits = (s: Sketch): string[] => {
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  return [...new Set((GUIDES.get(s) ?? []).flatMap(([a, b]) => boxes.filter(([, r]) => crosses(a, b, r, 4)).map(([name]) => name)))];
};
/** Labels clear of the lines, and no dotted guide through a label. */
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  const through = guideHits(s);
  return [
    `Every tag and label stays at least ${LABEL_GAP} px clear of every line: the closest is "${what}", ${fmt(gap, 1)} px; no dotted guide runs through one${through.length ? ` (but through ${through.map((t) => `"${t}"`).join(', ')})` : ''}`,
    gap >= LABEL_GAP - 1e-9 && !through.length,
  ];
};
/** No two labels on one drawing touch (the kit's audit checks tags; this checks the STIX labels against each other). */
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two symbols or labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** No tag's dot on an arrowhead: there it reads as naming the arrow and hides its head. Within 8 px of a head's tip or middle. */
const dotsOffHeads = (s: Sketch): Check => {
  const bad = s.tags.filter((t) => t.from && (HEADS.get(s) ?? []).some((h) => h.some((q) => len(q, t.from as P) < 8))).map((t) => t.name);
  return [`No tag's dot sits on an arrowhead${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** And no tag's dot beside an arrowhead either: at least HEAD_CLEAR px of white between the dot (2.6 px) and the head's ink. */
const HEAD_CLEAR = 6;
const dotsClearOfHeads = (s: Sketch): Check => {
  const near = s.tags.filter((t) => t.from).map((t) => ({ name: t.name, gap: Math.min(Infinity, ...(INKS.get(s) ?? []).map((tri) => triDist(tri, t.from as P))) - 2.6 })).sort((a, b) => a.gap - b.gap);
  return [`Every tag's dot keeps at least ${HEAD_CLEAR} px clear of every arrowhead${near.length ? `: the closest is "${near[0].name}", ${fmt(near[0].gap, 1)} px` : ''}`, near.every((n) => n.gap >= HEAD_CLEAR - 1e-9)];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
/** The layout checks of a drawn sketch. */
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), dotsOffHeads(s), dotsClearOfHeads(s), inFrame(s)];
/** A tag placed at a fixed spot, joined to p (the kit's audit still checks it). */
const tagAt = (s: Sketch, t: string, x: number, y: number, p: P | null, o: { hi?: boolean; anchor?: 'start' | 'middle' | 'end' } = {}) => s.tag(x, y, t, p ? p[0] : null, p ? p[1] : null, o);

/* ---------- graphs ---------- */
/** Where (0, 0) of the graph sits on the drawing, and how many px one unit is along each axis. */
type Frame = { ox: number; oy: number; sx: number; sy: number };
const gx = (f: Frame, u: number) => f.ox + u * f.sx;
const gy = (f: Frame, v: number) => f.oy - v * f.sy;
const gp = (f: Frame, u: number, v: number): P => [gx(f, u), gy(f, v)];
const vOf = (f: Frame, y: number) => (f.oy - y) / f.sy;
/** A tick's number: minus as U+2212, decimals only where the step needs them. */
const tickTxt = (n: number, d = 0) => (n < 0 ? '−' : '') + Math.abs(n).toFixed(d);
/** The drawn curves of a sketch, by name, so a check can read them back. */
const CURVES = new WeakMap<Sketch, Record<string, P[]>>();
const keepCurve = (s: Sketch, name: string, pts: P[]) => CURVES.set(s, { ...(CURVES.get(s) ?? {}), [name]: pts });
/** A drawn curve read back at drawing x: its drawing y, interpolated between the two drawn points either side. */
function yAtX(pts: P[], x: number): number {
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    if ((a[0] - x) * (b[0] - x) <= 0 && a[0] !== b[0]) return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]);
  }
  return NaN;
}
/** A key line: the curve's own stroke, then its name in Onest. */
function keyRow(s: Sketch, x: number, y: number, t: string, st: Stroke) {
  path(s, [[x, y - 4], [x + 20, y - 4]], { ...st, free: true });
  words(s, x + 26, y, t, { size: 12, anchor: 'start' });
}

/* ===================================================================== */
/* Figure 14.1 · energy-band diagrams (topic 01)                          */
/* ===================================================================== */
/**
 * One energy scale for all three panels, K141 px per eV, so switching panels
 * shows the gaps in proportion. The insulator's gap is drawn as diamond's
 * 5.4 eV and the semiconductor's as silicon's 1.1 eV (the values Topic 01
 * gives beside the book's "more than 3 eV" and "less than 3 eV"). The
 * conductor's bands overlap by 1.0 eV and its Fermi level E_F lies 0.4 eV above
 * the top of the (filled) valence band, inside the conduction band, which is
 * therefore partly filled: its electrons sit below E_F, in the overlap, where
 * the book draws them. Band heights are not physics (2.4 eV, the conductor's
 * conduction band 3.6 eV to take its labels).
 */
const K141 = 25;
const G141 = { x0: 112, x1: 176, ax: 98, tx: 192, H: 300, Eg3: 3 };
type Kind141 = 'conductor' | 'insulator' | 'semi';
const BANDS141: Record<Kind141, { vb: [number, number]; cb: [number, number]; ef?: number; e: [number, number][]; h: [number, number][] }> = {
  // electrons and holes: [energy in eV, across the band 0–1]
  conductor: { vb: [-3.0, 0], cb: [-1.0, 2.6], ef: 0.4, e: [[-0.3, 0.18], [-0.7, 0.36], [-0.3, 0.54], [-0.7, 0.72], [-0.3, 0.88]], h: [] },
  insulator: { vb: [-2.4, 0], cb: [5.4, 7.8], e: [], h: [] },
  semi: { vb: [-2.4, 0], cb: [1.1, 3.5], e: [[1.55, 0.25], [1.85, 0.55], [1.55, 0.8]], h: [[-0.45, 0.25], [-0.75, 0.55], [-0.45, 0.8]] },
};
/** The drawing y of energy E (eV) in a panel: the panel's whole energy range centred in the frame. */
const y141 = (k: Kind141) => {
  const b = BANDS141[k], lo = Math.min(b.vb[0], b.cb[0]), hi = Math.max(b.vb[1], b.cb[1]), mid = (lo + hi) / 2;
  return (E: number) => G141.H / 2 - K141 * (E - mid);
};
const STATE141: Record<Kind141, [string, string]> = {
  conductor: ['(partially filled)', '(filled)'],
  insulator: ['(empty)', '(filled)'],
  semi: ['(few electrons)', '(nearly full; holes at the top)'],
};
/** What each panel draws, by sketch, for the checks. */
const DRAWN141 = new WeakMap<Sketch, { cb: Rect; vb: Rect; e: P[]; h: P[]; ef?: number; gap?: [P, P] }>();
const fig141: Diagram = {
  id: 'p12-14-fig-14.1',
  topic: 1,
  name: 'Energy-band diagrams',
  cases: [
    { chip: '(a) Conductor', kind: 'conductor', cap: 'Energy-band diagrams. (a) Conductor: the partially filled conduction band overlaps the valence band.' },
    { chip: '(b) Insulator', kind: 'insulator', cap: 'Energy-band diagrams. (b) Insulator: filled valence band, empty conduction band and a very large energy gap (more than 3 eV).' },
    { chip: '(c) Semiconductor', kind: 'semi', cap: 'Energy-band diagrams. (c) Semiconductor: the same structure but a small gap (less than 3 eV), so a few electrons are excited into the conduction band, leaving holes behind.' },
  ],
  draw(c: { kind: Kind141 }) {
    const s = new Sketch(W, G141.H);
    const { x0, x1, ax, tx } = G141, b = BANDS141[c.kind], y = y141(c.kind);
    const cb: Rect = [x0, y(b.cb[1]), x1, y(b.cb[0])], vb: Rect = [x0, y(b.vb[1]), x1, y(b.vb[0])];
    outline(s, box(cb), { w: 1.8 });
    outline(s, box(vb), { w: 1.8 });
    const at = (E: number, f: number): P => [x0 + 6 + (x1 - x0 - 12) * f, y(E)];
    const e = b.e.map(([E, f]) => at(E, f)), h = b.h.map(([E, f]) => at(E, f));
    e.forEach((p) => electron(s, p));
    h.forEach((p) => hole(s, p));
    const drawn: { cb: Rect; vb: Rect; e: P[]; h: P[]; ef?: number; gap?: [P, P] } = { cb, vb, e, h };
    if (b.ef != null) {
      // the Fermi level, and the overlap of the two bands (the thing this panel is about)
      path(s, [[x0 - 8, y(b.ef)], [x1 + 4, y(b.ef)]], { color: C.slate, w: 1.3, dash: 'dash' });
      s.sym(x0 - 12, y(b.ef) + 5, '<i>E</i><sub>F</sub>', { size: 15, anchor: 'end' });
      drawn.ef = b.ef;
      const top: P = [x1 + 12, y(b.vb[1])], bot: P = [x1 + 12, y(b.cb[0])];
      path(s, [[x1 + 7, top[1]], top, bot, [x1 + 7, bot[1]]], { color: C.mari, w: 2 });
      tagAt(s, 'Bands overlap', tx + 14, (top[1] + bot[1]) / 2 - 11, [top[0], (top[1] + bot[1]) / 2], { hi: true });
    } else {
      // the gap, from the top of the valence band to the bottom of the conduction band
      const a: P = [ax, y(b.vb[1])], z: P = [ax, y(b.cb[0])];
      span(s, a, z, { color: C.mari, w: 1.8 });
      s.sym(ax - 8, (a[1] + z[1]) / 2 + 5, c.kind === 'insulator' ? '<i>E</i><sub>g</sub> > 3 eV' : '<i>E</i><sub>g</sub> < 3 eV', { size: 15, anchor: 'end', color: C.amber });
      drawn.gap = [a, z];
    }
    // the bands' names, each with its state under it
    const [cbState, vbState] = STATE141[c.kind];
    tagAt(s, 'Conduction band', tx, cb[1] + 1, [x1, cb[1] + 12]);
    words(s, tx + 4, cb[1] + 37, cbState, { size: 12, anchor: 'start', color: C.slate });
    const vbLines = vbState.length > 20 ? ['(nearly full;', 'holes at the top)'] : [vbState];
    const vt = vb[3] - 24 - 15 * vbLines.length;
    tagAt(s, 'Valence band', tx, vt, [x1, vt + 11]);
    vbLines.forEach((t, i) => words(s, tx + 4, vt + 37 + 15 * i, t, { size: 12, anchor: 'start', color: C.slate }));
    DRAWN141.set(s, drawn);
    return s;
  },
  check(c: { kind: Kind141 }) {
    const s = fig141.draw(c), d = DRAWN141.get(s)!, b = BANDS141[c.kind], y = y141(c.kind);
    const eV = (px: number) => px / K141;
    const inside = (p: P, r: Rect) => p[0] > r[0] + 3 && p[0] < r[2] - 3 && p[1] > r[1] + 3 && p[1] < r[3] - 3;
    const scale: Check = [`One energy scale for all three panels, ${K141} px per eV: the drawn bands are ${fmt(eV(d.cb[3] - d.cb[1]), 3)} eV and ${fmt(eV(d.vb[3] - d.vb[1]), 3)} eV tall, as set`, close(eV(d.cb[3] - d.cb[1]), b.cb[1] - b.cb[0], 1e-9) && close(eV(d.vb[3] - d.vb[1]), b.vb[1] - b.vb[0], 1e-9)];
    if (c.kind === 'conductor') {
      const overlap = eV(d.cb[3] - d.vb[1]), ef = d.ef as number;
      return [
        scale,
        [`The bands overlap: the bottom of the conduction band is ${fmt(overlap, 3)} eV below the top of the valence band (E_g ≈ 0, no gap to climb)`, overlap > 0 && close(overlap, b.vb[1] - b.cb[0], 1e-9)],
        [`E_F lies ${fmt(ef - b.vb[1], 2)} eV above the top of the valence band and ${fmt(b.cb[1] - ef, 2)} eV below the top of the conduction band: the valence band is all below E_F (filled), the conduction band only partly (partially filled)`, ef > b.vb[1] && ef < b.cb[1] && ef > b.cb[0]],
        [`Every electron drawn (${d.e.length}) is in the conduction band, below E_F (occupied states lie below the Fermi level), in the overlap where the book draws them`, d.e.length === 5 && d.e.every((p) => inside(p, d.cb) && p[1] > y(ef) + 3.2 && p[1] > d.vb[1] && p[1] < d.cb[3])],
        ['The overlap bracket spans exactly from the top of the valence band to the bottom of the conduction band', (LINES.get(s) ?? []).some((l) => l.length === 4 && close(l[1][1], d.vb[1], 1e-9) && close(l[2][1], d.cb[3], 1e-9))],
        ...layout(s),
      ];
    }
    const [a, z] = d.gap as [P, P], gap = eV(a[1] - z[1]);
    const gapAt: Check = [`The marked gap runs exactly from the top of the valence band to the bottom of the conduction band`, close(a[1], d.vb[1], 1e-9) && close(z[1], d.cb[3], 1e-9)];
    if (c.kind === 'insulator') {
      return [
        scale,
        gapAt,
        [`The gap is drawn as ${fmt(gap, 3)} eV (diamond, the topic’s example of an insulator): more than ${G141.Eg3} eV, as labelled`, close(gap, 5.4, 1e-9) && gap > G141.Eg3],
        ['Nothing is drawn in the conduction band (empty) and no hole in the valence band (filled)', d.e.length === 0 && d.h.length === 0],
        ...layout(s),
      ];
    }
    const eTop = Math.min(...d.e.map((p) => p[1])), hBot = Math.max(...d.h.map((p) => p[1]));
    return [
      scale,
      gapAt,
      [`The gap is drawn as ${fmt(gap, 3)} eV (silicon, the topic’s value): less than ${G141.Eg3} eV, as labelled, and ${fmt(5.4 / gap, 2)} times smaller than the insulator’s`, close(gap, 1.1, 1e-9) && gap < G141.Eg3],
      [`A few electrons in the conduction band (${d.e.length}) and as many holes left behind in the valence band (${d.h.length}): n_e = n_h in a pure semiconductor`, d.e.length === 3 && d.h.length === d.e.length && d.e.every((p) => inside(p, d.cb)) && d.h.every((p) => inside(p, d.vb))],
      [`The holes are at the top of the valence band (the lowest within ${fmt(eV(hBot - d.vb[1]), 2)} eV of its top) and the electrons at the bottom of the conduction band (the highest ${fmt(eV(d.cb[3] - eTop), 2)} eV above it), where thermal excitation puts them`, eV(hBot - d.vb[1]) < 1 && eV(d.cb[3] - eTop) < 1],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.2 · energy bands from atomic levels (topic 01)               */
/* ===================================================================== */
/**
 * NCERT's band-formation picture, on the book's own energy axis (no unit). Far
 * apart (right) each atom has a sharp s level (E = 1, 2N states for N atoms)
 * and p level (E = 3, 6N states). As r falls each spreads into a band whose
 * edges move out as φ(r) = e^{−(r − r_c)/λ} (the overlap of neighbouring
 * orbitals): the p band from 3 + 0.3φ down to 3 − 1.2φ, the s band from 1 − 0.3φ
 * up to 1 + 0.8φ. Their inner edges meet at r_c (E = 1.8) and the bands overlap,
 * one band of 8N states, for r_s < r < r_c (the inner edges run on in grey).
 * Inside r_s the 8N states split again into two bands of 4N, about E = 1.8, the
 * gap growing as 2κ(r_s − r): at the equilibrium spacing r₀, which lies inside
 * the overlap, the lower band (valence, 4N states, filled by the 4N valence
 * electrons) and the upper band (conduction, 4N states, empty) are apart by
 * E_g. The numbers are illustrative, not silicon's.
 */
const G142 = { lv: [3, 1], rc: 2.9, lam: 1.6, rs: 2.2, kap: 0.6, r0: 1.5, Em: 1.8, rL: 0.8, rR: 5, lev: [5.18, 5.5] as [number, number], u0: 0.3, u1: 5.7, v0: -1, v1: 4.6 };
const F142: Frame = { ox: 50 - 0.3 * 50, oy: 36 + 4.6 * 44, sx: 50, sy: 44 };
const phi142 = (r: number) => Math.exp(-(r - G142.rc) / G142.lam);
/** The band edges at r: outer top and bottom, the p band's bottom and s band's top, and (inside r_s) the gap's edges. */
const e142 = (r: number) => {
  const f = phi142(r), g = Math.max(0, G142.kap * (G142.rs - r));
  return { top: 3 + 0.3 * f, bot: 1 - 0.3 * f, pBot: 3 - 1.2 * f, sTop: 1 + 0.8 * f, gUp: G142.Em + g, gLo: G142.Em - g };
};
const fig142: Diagram = {
  id: 'p12-14-fig-14.2',
  topic: 1,
  name: 'Energy bands from atomic levels',
  cases: [{ chip: 'Bands form', cap: 'Energy bands from atomic levels. Sharp atomic levels at large interatomic distance (right) spread into bands as <i>r</i> decreases; the dashed line marks the equilibrium spacing <i>r</i><sub>0</sub> of the crystal, where the valence band, the energy gap and the conduction band are shown.' }],
  draw() {
    const s = new Sketch(W, 352);
    const f = F142, { lv, rc, rs, r0, rL, rR, lev, u0, u1, v0, v1 } = G142;
    // axes
    const xa = gx(f, u0), ya = gy(f, v0);
    s.vec(xa, ya, gx(f, u1), ya, { color: C.grey, w: 1.3 });
    s.vec(xa, ya, xa, gy(f, v1) - 8, { color: C.grey, w: 1.3 });
    keep(s, [[xa, ya], [gx(f, u1), ya]]);
    keep(s, [[xa, ya], [xa, gy(f, v1) - 8]]);
    [-1, 0, 1, 2, 3, 4].forEach((v) => { s.line(xa - 4, gy(f, v), xa, gy(f, v), { color: C.grey, w: 1.2 }); s.sym(xa - 7, gy(f, v) + 4.5, tickTxt(v), { size: 12, anchor: 'end', color: C.slate }); });
    [1, 2, 3, 4, 5].forEach((u) => { s.line(gx(f, u), ya, gx(f, u), ya + 4, { color: C.grey, w: 1.2 }); s.sym(gx(f, u), ya + 17, String(u), { size: 12, color: C.slate }); });
    s.sym(xa + 8, 22, 'Energy', { size: 14, anchor: 'start' });
    s.sym((xa + gx(f, u0 + 5.4)) / 2, ya + 38, 'Interatomic distance <i>r</i>', { size: 14 });
    // the band edges
    const edge = (k: 'top' | 'bot' | 'pBot' | 'sTop' | 'gUp' | 'gLo', from: number, to: number) => samples(from, to, 300).map((r) => gp(f, r, e142(r)[k]));
    const top = edge('top', rL, rR), bot = edge('bot', rL, rR);
    const pBot = edge('pBot', rc, rR), sTop = edge('sTop', rc, rR);
    const gUp = edge('gUp', rL, rs), gLo = edge('gLo', rL, rs);
    [top, bot, pBot, sTop, gUp, gLo].forEach((c) => path(s, c, { w: 1.8 }));
    // inside the overlap the two inner edges run on in grey: one band of 8N states
    path(s, edge('pBot', rs, rc), { color: C.grey, w: 1.5 });
    path(s, edge('sTop', rs, rc), { color: C.grey, w: 1.5 });
    // the ends: the two bands closed at rR, the two split bands closed at rL
    const at = (r: number, E: number) => gp(f, r, E), eR = e142(rR), eL = e142(rL);
    path(s, [at(rR, eR.top), at(rR, eR.pBot)], { w: 1.8 });
    path(s, [at(rR, eR.sTop), at(rR, eR.bot)], { w: 1.8 });
    path(s, [at(rL, eL.top), at(rL, eL.gUp)], { w: 1.8 });
    path(s, [at(rL, eL.gLo), at(rL, eL.bot)], { w: 1.8 });
    keepCurve(s, 'top', top); keepCurve(s, 'bot', bot); keepCurve(s, 'pBot', pBot); keepCurve(s, 'sTop', sTop); keepCurve(s, 'gUp', gUp); keepCurve(s, 'gLo', gLo);
    // the sharp atomic levels far apart, named as a group by a line round them
    lv.forEach((E) => path(s, [gp(f, lev[0], E), gp(f, lev[1], E)], { w: 2.4 }));
    const gr: Rect = [gx(f, lev[0]) - 5, gy(f, lv[0]) - 9, gx(f, lev[1]) + 5, gy(f, lv[1]) + 9];
    outline(s, box(gr), { color: C.slate, w: 1.1, dash: 'dash' });
    s.sym(gx(f, rR) - 1, 86, '<i>p</i>: 6<i>N</i> states', { size: 12, anchor: 'end', color: C.slate });
    s.sym(gx(f, rR) - 1, 222, '<i>s</i>: 2<i>N</i> states', { size: 12, anchor: 'end', color: C.slate });
    // r0, and the gap there
    const e0 = e142(r0), g1 = gp(f, r0, e0.gLo), g0 = gp(f, r0, e0.gUp);
    guide(s, [gx(f, r0), gy(f, e0.bot) + 1], [gx(f, r0), g1[1] + 3], C.slate, 'dash');
    guide(s, [gx(f, r0), g0[1] - 3], [gx(f, r0), gy(f, v1) + 4], C.slate, 'dash');
    s.sym(gx(f, r0) - 6, gy(f, v1) + 14, '<i>r</i><sub>0</sub>', { size: 15, anchor: 'end' });
    span(s, g1, g0, { color: C.mari, w: 2 });
    s.sym(gx(f, r0) - 8, (g0[1] + g1[1]) / 2 + 5, '<i>E</i><sub>g</sub>', { size: 15, anchor: 'end', color: C.amber });
    // which way r decreases
    const dy = ya + 58;
    arrow(s, [138, dy - 4], [62, dy - 4], { color: C.slate, w: 1.4, L: 8, hw: 4 });
    s.sym(146, dy, 'Decreasing <i>r</i> (atoms approach)', { size: 12, anchor: 'start', color: C.slate });
    // the names
    tagAt(s, 'Conduction band', 106, 4, gp(f, 1.9, 3.2));
    s.sym(140, 44, '(4<i>N</i> states, empty)', { size: 12, anchor: 'start', color: C.slate });
    tagAt(s, 'Atomic levels', W - 4, 4, [gr[2] - 4, gr[1]], { anchor: 'end' });
    tagAt(s, 'Valence band', 56, 250, gp(f, 1.1, 0.8));
    s.sym(168, 272, '(4<i>N</i> states, filled)', { size: 12, anchor: 'start', color: C.slate });
    tagAt(s, 'Overlap: 8N states', 196, 232, gp(f, 2.55, 1.8));
    return s;
  },
  check() {
    const f = F142, { lv, rc, rs, r0, rR, kap, Em } = G142, s = fig142.draw(fig142.cases[0]);
    const cv = CURVES.get(s) ?? {};
    const at = (name: string, r: number) => vOf(f, yAtX(cv[name] ?? [], gx(f, r)));
    const pW = [3, 3.5, 4, 4.5, 5].map((r) => at('top', r) - at('pBot', r)), sW = [3, 3.5, 4, 4.5, 5].map((r) => at('sTop', r) - at('bot', r));
    const gap0 = at('gUp', r0) - at('gLo', r0);
    const e = e142(rc), em = e142((rs + rc) / 2);
    return [
      [`Far apart the levels are sharp: at r = ${rR} the p band is ${fmt(pW[4], 2)} and the s band ${fmt(sW[4], 2)} wide (${fmt((100 * pW[4]) / (lv[0] - lv[1]), 0)}% and ${fmt((100 * sW[4]) / (lv[0] - lv[1]), 0)}% of the levels’ spacing), and the levels drawn beyond are single lines at E = ${lv.join(' and ')}`, pW[4] / (lv[0] - lv[1]) < 0.4 && sW[4] / (lv[0] - lv[1]) < 0.3 && at('top', rR) > lv[0] && at('pBot', rR) < lv[0] && at('sTop', rR) > lv[1] && at('bot', rR) < lv[1]],
      [`As r decreases each band widens: the p band ${pW.map((x) => fmt(x, 2)).reverse().join(' → ')}, the s band ${sW.map((x) => fmt(x, 2)).reverse().join(' → ')} from r = 5 to 3; the p band (6N states) is the wider`, pW.slice(1).every((x, i) => x < pW[i]) && sW.slice(1).every((x, i) => x < sW[i]) && pW.every((x, i) => x > sW[i])],
      [`The s band’s top and the p band’s bottom meet at r_c = ${rc} (E = ${fmt(e.pBot, 3)} and ${fmt(e.sTop, 3)}); between r_s = ${rs} and r_c they overlap (at r = ${fmt((rs + rc) / 2, 2)} the s band reaches ${fmt(em.sTop, 2)}, above the p band’s bottom ${fmt(em.pBot, 2)}): one band of 2N + 6N = 8N states, no gap`, close(e.pBot, e.sTop, 1e-12) && em.sTop > em.pBot && e142(rs + 1e-6).gUp === e142(rs + 1e-6).gLo],
      [`Inside r_s the 8N states split into two bands about E = ${Em}: the gap opens as 2 × ${kap} × (r_s − r), and at the equilibrium spacing r₀ = ${r0} (inside the overlap point, r₀ < r_s < r_c, as NCERT draws it) E_g = ${fmt(gap0, 3)}; the marked gap runs exactly from the valence band’s top to the conduction band’s bottom there`, r0 < rs && rs < rc && close(gap0, 2 * kap * (rs - r0), 1e-3) && (HEADS.get(s) ?? []).some(([tip]) => close(tip[0], gx(f, r0), 1e-9) && close(tip[1], gy(f, e142(r0).gLo), 1e-9)) && (HEADS.get(s) ?? []).some(([tip]) => close(tip[1], gy(f, e142(r0).gUp), 1e-9))],
      [`At r₀ both bands are real bands: the valence band from ${fmt(at('bot', r0), 2)} to ${fmt(at('gLo', r0), 2)}, the conduction band from ${fmt(at('gUp', r0), 2)} to ${fmt(at('top', r0), 2)}`, at('gLo', r0) - at('bot', r0) > 0.5 && at('top', r0) - at('gUp', r0) > 0.5],
      ['The states count (Section 3 (A)): N atoms × (2 s + 6 p) outer states = 8N, split into two bands of 4N each; the 4N valence electrons fill the lower band exactly and leave the upper empty', 2 + 6 === 4 + 4 && 4 === 4],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.3 · band diagrams of doped semiconductors (topic 01)         */
/* ===================================================================== */
/**
 * Not to scale, as the book says ("Energy gaps exaggerated for clarity"): the
 * gap is drawn 120 px and the impurity level 30 px from its band edge, where to
 * scale (germanium's 0.7 eV, the book's 0.01 eV) it would be under 2 px. The
 * levels are drawn at room temperature, which the figure shows (carriers
 * already in the bands): n-type, the donor level just below E_C and E_F below
 * it, in the upper half of the gap (for silicon with N_D ~ 10^22 m^−3,
 * E_C − E_F ≈ k_BT ln(N_c/N_D) ≈ 0.2 eV, well below E_d, as Figure 14.5 draws
 * it); p-type, the acceptor level just above E_V and E_F above it, in the lower
 * half. With E_F past the impurity level the impurities are ionised: three
 * donor ions (⊕) on the donor level and their three electrons in the conduction
 * band, or three acceptor ions (⊖) on the acceptor level and their three holes
 * in the valence band.
 */
const G143 = { x0: 120, x1: 184, cb: [48, 104] as [number, number], vb: [224, 280] as [number, number], off: 30, ef: 20, H: 340, span: 104 };
type Kind143 = 'n' | 'p';
/** The levels of a panel, as drawing y (larger y = lower energy). */
const lv143 = (k: Kind143) => {
  const { cb, vb, off, ef } = G143, Ec = cb[1], Ev = vb[0];
  const imp = k === 'n' ? Ec + off : Ev - off;
  return { Ec, Ev, imp, Ef: k === 'n' ? imp + ef : imp - ef, mid: (Ec + Ev) / 2 };
};
const DRAWN143 = new WeakMap<Sketch, { onLevel: P[]; inCB: P[]; inVB: P[]; arrow: [P, P] }>();
const fig143: Diagram = {
  id: 'p12-14-fig-14.3',
  topic: 1,
  name: 'Doped semiconductors: band diagrams',
  cases: [
    { chip: 'n-type', kind: 'n', cap: 'Band diagrams of doped semiconductors. n-type: the donor level lies just below the conduction band (about 0.01 eV in germanium, 0.05 eV in silicon), and electrons are promoted into the conduction band. Gaps are exaggerated.' },
    { chip: 'p-type', kind: 'p', cap: 'Band diagrams of doped semiconductors. p-type: the acceptor level lies just above the valence band (about 0.01–0.05 eV), leaving holes in the valence band. Gaps are exaggerated.' },
  ],
  draw(c: { kind: Kind143 }) {
    const s = new Sketch(W, G143.H);
    const { x0, x1, cb, vb, span: sx } = G143, n = c.kind === 'n', L = lv143(c.kind);
    const xm = (x0 + x1) / 2;
    words(s, xm, 24, n ? 'n-type' : 'p-type', { size: 14 });
    outline(s, box([x0, cb[0], x1, cb[1]]), { w: 1.8 });
    outline(s, box([x0, vb[0], x1, vb[1]]), { w: 1.8 });
    // the Fermi level and the impurity level (the thing the panel is about)
    path(s, [[x0 - 8, L.Ef], [x1 + 10, L.Ef]], { color: C.slate, w: 1.3, dash: 'dash' });
    s.sym(x1 + 16, L.Ef + 5, '<i>E</i><sub>F</sub>', { size: 15, anchor: 'start' });
    path(s, [[x0 - 8, L.imp], [x1 + 10, L.imp]], { color: C.mari, w: 2, dash: 'dash' });
    s.sym(x1 + 16, L.imp + 5, n ? '<i>E</i><sub>d</sub> (donor)' : '<i>E</i><sub>a</sub> (acceptor)', { size: 15, anchor: 'start', color: C.amber });
    // the ionised impurities on their level: donor ions (+) or acceptor ions (−)
    const onLevel: P[] = [x0 + 6, xm - 4, x1 - 10].map((x): P => [x, L.imp]);
    onLevel.forEach((p) => mark(s, p, n ? 'donor' : 'acceptor'));
    let inCB: P[] = [], inVB: P[] = [];
    let a: P, z: P;
    if (n) {
      inCB = [[x0 + 14, cb[0] + 18], [x0 + 30, cb[0] + 36], [x1 - 12, cb[0] + 16]];
      inCB.forEach((p) => electron(s, p));
      a = [xm + 9, L.imp - 9]; z = [xm + 9, cb[1] - 12];
    } else {
      inVB = [[x0 + 14, vb[0] + 38], [x0 + 30, vb[0] + 20], [x1 - 12, vb[0] + 40]];
      inVB.forEach((p) => hole(s, p));
      a = [xm + 9, vb[0] + 12]; z = [xm + 9, L.imp + 9];
    }
    arrow(s, a, z, { color: C.slate, w: 1.4, L: 7, hw: 3.5 });
    // the impurity level's distance from its band edge
    const e0: P = [sx, n ? L.Ec : L.Ev], e1: P = [sx, L.imp];
    span(s, e0, e1, { color: C.slate });
    s.sym(sx - 8, (e0[1] + e1[1]) / 2 + 5, '~ 0.01–0.05 eV', { size: 13, anchor: 'end' });
    tagAt(s, 'CB', x1 + 16, cb[0] - 4, [x1, cb[0] + 12]);
    tagAt(s, 'VB', x1 + 16, vb[1] - 24, [x1, vb[1] - 12]);
    s.sym(xm, vb[1] + 22, n ? '<i>n</i><sub>e</sub> ≫ <i>n</i><sub>h</sub>' : '<i>n</i><sub>h</sub> ≫ <i>n</i><sub>e</sub>', { size: 15 });
    words(s, W / 2, G143.H - 10, 'Energy gaps exaggerated for clarity (not to scale).', { size: 11, color: C.slate });
    DRAWN143.set(s, { onLevel, inCB, inVB, arrow: [a, z] });
    return s;
  },
  check(c: { kind: Kind143 }) {
    const s = fig143.draw(c), d = DRAWN143.get(s)!, L = lv143(c.kind), n = c.kind === 'n';
    const gap = L.Ev - L.Ec, off = Math.abs(L.imp - (n ? L.Ec : L.Ev));
    const scaled = (0.01 / 0.7) * gap;
    const inside = (p: P, r: [number, number]) => p[0] > G143.x0 + 3 && p[0] < G143.x1 - 3 && p[1] > r[0] + 3 && p[1] < r[1] - 3;
    const ions = (MARKS.get(s) ?? []).filter((q) => close(q.p[1], L.imp, 1e-9));
    const common: Check[] = [
      [`Not to scale, as the book says: the impurity level is drawn ${off} px from its band edge in a ${gap} px gap; to scale (0.01 eV in germanium’s 0.7 eV) it would be ${fmt(scaled, 2)} px, so the drawing exaggerates it ${fmt(off / scaled, 0)} times`, off / scaled > 10],
    ];
    if (n) {
      return [
        [`The donor level lies just below the conduction band, in the gap's top ${fmt((100 * off) / gap, 0)}%: E_C above E_d above E_F, all above the valence band`, L.Ec < L.imp && L.imp < L.Ef && L.Ef < L.Ev && off < gap / 2],
        [`E_F lies at its room-temperature position: below the donor level (by ${fmt(L.Ef - L.imp, 0)} px) but still in the upper half of the gap (${fmt(L.mid - L.Ef, 0)} px above mid-gap), near the conduction band, as in Figure 14.5`, L.Ef > L.imp && L.Ef < L.mid],
        [`With E_F below E_d the donors are ionised: ${ions.length} donor ions (⊕) on the donor level and their ${d.inCB.length} electrons in the conduction band, no holes drawn in the valence band: n_e ≫ n_h, and the crystal stays neutral`, ions.length === 3 && ions.every((q) => q.m === 'donor') && d.inCB.length === ions.length && d.inCB.every((p) => inside(p, G143.cb)) && d.inVB.length === 0],
        ['The arrow points up, from the donor level into the conduction band (electrons promoted)', d.arrow[0][1] > d.arrow[1][1] && d.arrow[0][1] <= L.imp && d.arrow[1][1] < L.Ec && d.arrow[1][1] > G143.cb[0]],
        ...common,
        ...layout(s),
      ];
    }
    return [
      [`The acceptor level lies just above the valence band, in the gap's bottom ${fmt((100 * off) / gap, 0)}%: E_V below E_a below E_F, all below the conduction band`, L.Ev > L.imp && L.imp > L.Ef && L.Ef > L.Ec && off < gap / 2],
      [`E_F lies at its room-temperature position: above the acceptor level (by ${fmt(L.imp - L.Ef, 0)} px) but still in the lower half of the gap (${fmt(L.Ef - L.mid, 0)} px below mid-gap), near the valence band`, L.Ef < L.imp && L.Ef > L.mid],
      [`With E_F above E_a the acceptors are ionised: ${ions.length} acceptor ions (⊖) on the acceptor level and ${d.inVB.length} holes left in the valence band, no electron drawn in the conduction band: n_h ≫ n_e, and the crystal stays neutral`, ions.length === 3 && ions.every((q) => q.m === 'acceptor') && d.inVB.length === ions.length && d.inVB.every((p) => inside(p, G143.vb)) && d.inCB.length === 0],
      ['The arrow points up, from the valence band to the acceptor level (valence electrons hop up, leaving holes)', d.arrow[0][1] > d.arrow[1][1] && d.arrow[0][1] > L.Ev && d.arrow[1][1] >= L.imp],
      ...common,
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.4 · a p-n junction at equilibrium (topic 02)                 */
/* ===================================================================== */
/**
 * Equal doping on both sides (as the book draws it), so the depletion region
 * reaches equally far into each side: N_A x_p = N_D x_n with N_A = N_D gives
 * x_p = x_n = d/2, two columns of three ions on each side of the junction.
 * Outside it each region is neutral: as many mobile holes as acceptor ions on
 * the p-side, as many mobile electrons as donor ions on the n-side. The field
 * points from the positive (n-side) ions to the negative (p-side) ones: from n
 * to p.
 */
const G144 = { r: [8, 42, 332, 166] as Rect, j: 170, xp: 42, xn: 42, rows: [96, 122, 148], E: 74 };
const P144: [number, number, Mark][] = [
  [26, 62, 'hole'], [58, 58, 'acceptor'], [94, 64, 'hole'], [112, 90, 'acceptor'], [24, 96, 'acceptor'], [62, 92, 'hole'],
  [40, 124, 'hole'], [84, 120, 'acceptor'], [108, 140, 'hole'], [22, 148, 'acceptor'], [64, 150, 'hole'], [92, 156, 'acceptor'],
];
/** The n-region's marks: the p-region's mirrored about the junction, holes turned electrons and acceptors donors. */
const N144: [number, number, Mark][] = P144.map(([x, y, m]) => [2 * G144.j - x, y + 2, m === 'hole' ? 'electron' : 'donor']);
const fig144: Diagram = {
  id: 'p12-14-fig-14.4',
  topic: 2,
  name: 'p-n junction at equilibrium',
  cases: [{ chip: 'Depletion region', cap: 'A p-n junction at equilibrium. The p-region (left) has mobile holes (+) and fixed negative acceptor ions; the n-region (right) has mobile electrons (−) and fixed positive donor ions. The depletion region has no mobile carriers: fixed negative ions on the p-side, fixed positive ions on the n-side, and an internal field pointing from n to p. Its width <i>d</i> and the barrier potential are marked.' }],
  draw() {
    const s = new Sketch(W, 300);
    const { r, j, xp, xn, rows, E } = G144, dl = j - xp, dr = j + xn;
    outline(s, box(r), { w: 1.8 });
    // the depletion region's edges (the thing the figure is about) and the junction
    path(s, [[dl, r[1]], [dl, r[3]]], { color: C.mari, w: 2.2 });
    path(s, [[dr, r[1]], [dr, r[3]]], { color: C.mari, w: 2.2 });
    guide(s, [j, E + 8], [j, r[3] - 2], C.slate, 'dot');
    // the fixed ions in it: negative on the p-side, positive on the n-side
    rows.forEach((y) => {
      [dl + xp * 0.3, dl + xp * 0.75].forEach((x) => mark(s, [x, y], 'acceptor'));
      [j + xn * 0.25, j + xn * 0.7].forEach((x) => mark(s, [x, y], 'donor'));
    });
    // the internal field, from n to p
    arrow(s, [dr - 6, E], [dl + 6, E], { w: 1.8, L: 8, hw: 4 });
    s.sym(j, E - 12, '<i>E⃗</i> (n → p)', { size: 13 });
    // the mobile carriers and the fixed ions outside it
    [...P144, ...N144].forEach(([x, y, m]) => mark(s, [x, y], m));
    // d, and the barrier potential across it
    guide(s, [dl, r[3] + 3], [dl, r[3] + 20]);
    guide(s, [dr, r[3] + 3], [dr, r[3] + 20]);
    span(s, [dl, r[3] + 14], [dr, r[3] + 14], { color: C.slate });
    s.sym(j, r[3] + 36, 'Depletion width <i>d</i>', { size: 13 });
    s.sym(j, r[3] + 60, 'Barrier potential <i>V</i><sub>b</sub> across the region', { size: 13 });
    // the key
    const key: [Mark, string][] = [['hole', 'mobile hole'], ['acceptor', 'fixed acceptor ion'], ['electron', 'mobile electron'], ['donor', 'fixed donor ion']];
    key.forEach(([m, t], i) => {
      const x = i % 2 ? 182 : 22, y = 252 + 24 * Math.floor(i / 2);
      mark(s, [x, y], m);
      words(s, x + 14, y + 4, t, { size: 12, anchor: 'start' });
    });
    tagAt(s, 'p-region', 8, 8, [45, r[1]]);
    tagAt(s, 'Depletion region', j, 8, [j - 14, r[1]], { hi: true, anchor: 'middle' });
    tagAt(s, 'n-region', W - 8, 8, [W - 45, r[1]], { anchor: 'end' });
    return s;
  },
  check() {
    const s = fig144.draw(fig144.cases[0]), { r, j, xp, xn } = G144, dl = j - xp, dr = j + xn;
    const ms = (MARKS.get(s) ?? []).filter((q) => q.p[1] < r[3]);
    const where = (lo: number, hi: number, m: Mark) => ms.filter((q) => q.p[0] > lo && q.p[0] < hi && q.m === m).length;
    const pH = where(r[0], dl, 'hole'), pA = where(r[0], dl, 'acceptor'), nE = where(dr, r[2], 'electron'), nD = where(dr, r[2], 'donor');
    const dA = where(dl, j, 'acceptor'), dD = where(j, dr, 'donor');
    const mobileIn = where(dl, dr, 'hole') + where(dl, dr, 'electron');
    const wrongSide = where(dl, j, 'donor') + where(j, dr, 'acceptor') + where(r[0], dl, 'electron') + where(r[0], dl, 'donor') + where(dr, r[2], 'hole') + where(dr, r[2], 'acceptor');
    const clearOf = ms.every((q) => Math.abs(q.p[0] - dl) > 7 && Math.abs(q.p[0] - dr) > 7 && q.p[0] - r[0] > 7 && r[2] - q.p[0] > 7 && q.p[1] - r[1] > 7 && r[3] - q.p[1] > 7);
    const apart = ms.every((a, i) => ms.every((b, k) => k <= i || len(a.p, b.p) > 13));
    const heads = HEADS.get(s) ?? [];
    const field = heads.find(([tip]) => close(tip[1], G144.E, 1e-9));
    // practice question 3 (p. 887): W = 2.0 μm, V_b = 0.30 V
    const Ef = 0.3 / 2.0e-6;
    return [
      [`The p-region is neutral: ${pH} mobile holes and ${pA} acceptor ions; the n-region too: ${nE} mobile electrons and ${nD} donor ions`, pH === pA && nE === nD && pH > 0 && nE > 0],
      [`The depletion region has no mobile carriers (${mobileIn}), ${dA} negative ions on the p-side of the junction and ${dD} positive ones on the n-side: its charge balances`, mobileIn === 0 && dA === dD && dA === 6],
      [`Equal doping, so N_A x_p = N_D x_n puts the junction in the middle: x_p = ${xp} px = x_n = ${xn} px, d = ${dr - dl} px`, xp === xn && dr - dl === xp + xn],
      [`Every mark is where its kind belongs (${wrongSide} out of place), clear of the edges and of one another`, wrongSide === 0 && clearOf && apart],
      ['The field arrow points from the n-side’s positive ions to the p-side’s negative ions: from n to p, leftward, across the depletion region', !!field && (field[0][0] - field[1][0]) < 0 && field[0][0] > dl && field[0][0] < j],
      [`The width d is marked from edge to edge of the depletion region`, heads.some(([tip]) => close(tip[0], dl, 1e-9)) && heads.some(([tip]) => close(tip[0], dr, 1e-9))],
      [`Practice question 3 (p. 887), with the uniform-field model E = V_b/d: 0.30 V across 2.0 μm gives ${fmt(Ef / 1e5, 3)} × 10⁵ V m⁻¹ (the book’s 1.5 × 10⁵), from the n-side to the p-side`, close(Ef, 1.5e5, 1e-6)],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.5 · band bending at equilibrium (topic 02)                   */
/* ===================================================================== */
/**
 * To scale for silicon (110 px per eV): E_g = 1.1 eV, V_b = 0.7 V (the
 * topic's values), with E_F 0.2 eV above E_V on the p-side and 0.2 eV below
 * E_C on the n-side (equal doping, as the book draws it), so the step is
 * eV_b = E_g − 0.2 − 0.2 = 0.7 eV. The bands bend by the depletion
 * approximation: across uniformly charged layers the potential is a parabola
 * on each side, joined with the same slope at the junction (the field is
 * continuous there, N_A x_p = N_D x_n) and flat at the edges (no field outside).
 */
const K145 = 110;
const G145 = { yF: 172, dl: 118, dr: 222, x0: 30, x1: 300, Eg: 1.1, d: 0.2 };
/** The fraction of the step the bands have dropped at x (0 on the p-side, 1 on the n-side). */
const f145 = (x: number) => {
  const { dl, dr } = G145, j = (dl + dr) / 2, xp = j - dl, xn = dr - j;
  if (x <= dl) return 0;
  if (x >= dr) return 1;
  // equal doping: each side takes half the drop
  return x <= j ? 0.5 * ((x - dl) / xp) ** 2 : 1 - 0.5 * ((dr - x) / xn) ** 2;
};
const e145 = () => {
  const { Eg, d } = G145, EvP = -d, EcP = EvP + Eg, EcN = d, EvN = EcN - Eg, qVb = EcP - EcN;
  return { EvP, EcP, EcN, EvN, qVb };
};
const Y145 = (E: number) => G145.yF - K145 * E;
const fig145: Diagram = {
  id: 'p12-14-fig-14.5',
  topic: 2,
  name: 'Band bending at a p-n junction',
  cases: [{ chip: 'Equilibrium', cap: 'Band bending at equilibrium. The conduction and valence band edges drop from the p-side to the n-side across the depletion region while the Fermi level stays flat. The step between the two sides is the barrier height (electron charge times barrier potential) that majority carriers must overcome; the energy gap is a separate span on one side.' }],
  draw() {
    const s = new Sketch(W, 312);
    const { dl, dr, x0, x1 } = G145, e = e145();
    words(s, (x0 + dl) / 2 + 4, 24, 'p-region', { size: 13 });
    words(s, (dl + dr) / 2, 24, 'Depletion', { size: 13 });
    words(s, (dr + x1) / 2 + 8, 24, 'n-region', { size: 13 });
    guide(s, [dl, 36], [dl, 300], C.faint);
    guide(s, [dr, 36], [dr, 300], C.faint);
    const xs = samples(x0, x1, 540);
    const Ec = xs.map((x): P => [x, Y145(e.EcP - e.qVb * f145(x))]);
    const Ev = xs.map((x): P => [x, Y145(e.EvP - e.qVb * f145(x))]);
    path(s, Ec, { w: 2.2 });
    path(s, Ev, { w: 2.2 });
    keepCurve(s, 'Ec', Ec);
    keepCurve(s, 'Ev', Ev);
    path(s, [[x0 - 18, G145.yF], [x1 + 6, G145.yF]], { color: C.slate, w: 1.4, dash: 'dash' });
    s.sym(x1 + 10, G145.yF + 5, '<i>E</i><sub>F</sub>', { size: 15, anchor: 'start' });
    s.sym(x0 - 4, Y145(e.EcP) - 9, '<i>E</i><sub>C</sub>', { size: 15, anchor: 'start' });
    s.sym(x0 - 4, Y145(e.EvP) + 22, '<i>E</i><sub>V</sub>', { size: 15, anchor: 'start' });
    s.sym(x1 + 10, Y145(e.EcN) + 5, '<i>E</i><sub>C</sub>', { size: 15, anchor: 'start' });
    s.sym(x1 + 10, Y145(e.EvN) + 5, '<i>E</i><sub>V</sub>', { size: 15, anchor: 'start' });
    // the step: eV_b, from the p-side's E_C down to the n-side's E_C level
    const qx = 66;
    guide(s, [qx - 8, Y145(e.EcN)], [dr - 6, Y145(e.EcN)], C.slate, 'dot');
    span(s, [qx, Y145(e.EcP) + 2], [qx, Y145(e.EcN)], { color: C.mari, w: 2 });
    s.sym(qx - 8, (Y145(e.EcP) + Y145(e.EcN)) / 2 + 5, '<i>eV</i><sub>b</sub>', { size: 15, anchor: 'end', color: C.amber });
    // the gap, a separate span on the n-side
    const gx5 = 282;
    span(s, [gx5, Y145(e.EcN) + 2], [gx5, Y145(e.EvN) - 2], { color: C.slate });
    s.sym(gx5 - 8, (Y145(e.EcN) + Y145(e.EvN)) / 2 + 5, '<i>E</i><sub>g</sub>', { size: 15, anchor: 'end' });
    // the majority carriers: holes just inside the p-side's valence band, electrons just inside the n-side's conduction band
    [80, 98].forEach((x) => hole(s, [x, Y145(e.EvP) + 10]));
    words(s, 68, Y145(e.EvP) + 40, 'holes (majority)', { size: 11, color: C.slate });
    [256, 272].forEach((x) => electron(s, [x, Y145(e.EcN) - 9]));
    words(s, 264, Y145(e.EcN) - 38, 'electrons', { size: 11, color: C.slate });
    words(s, 264, Y145(e.EcN) - 24, '(majority)', { size: 11, color: C.slate });
    return s;
  },
  check() {
    const s = fig145.draw(fig145.cases[0]), { dl, dr, Eg, d } = G145, e = e145();
    const cv = CURVES.get(s) ?? {}, Ec = cv.Ec ?? [], Ev = cv.Ev ?? [];
    const E = (y: number) => (G145.yF - y) / K145;
    const gaps = Ec.map((p, i) => E(p[1]) - E(Ev[i][1]));
    const inP = Ec.filter((p) => p[0] <= dl), inN = Ec.filter((p) => p[0] >= dr);
    const mono = Ec.slice(1).every((p, i) => p[1] >= Ec[i][1] - 1e-9);
    const j = (dl + dr) / 2, h = 1e-4;
    const slope = (x: number) => (f145(x + h) - f145(x - h)) / (2 * h);
    return [
      [`E_C − E_V = ${fmt(Math.min(...gaps), 6)}–${fmt(Math.max(...gaps), 6)} eV everywhere: the gap is silicon’s ${Eg} eV on both sides and through the bend`, gaps.every((g) => close(g, Eg, 1e-9))],
      [`The step is eV_b = E_C(p) − E_C(n) = ${fmt(e.qVb, 3)} eV = E_g − ${d} − ${d} eV: silicon’s V_b = 0.7 V`, close(e.qVb, 0.7, 1e-12) && close(E(Ec[0][1]) - E(Ec[Ec.length - 1][1]), 0.7, 1e-9)],
      [`The bands are flat outside the depletion region (no field there) and drop only inside it, steadily from the p-side to the n-side`, inP.every((p) => close(p[1], Ec[0][1], 1e-9)) && inN.every((p) => close(p[1], Ec[Ec.length - 1][1], 1e-9)) && mono],
      [`The two parabolae join smoothly: at the junction the slope is ${fmt(slope(j - 1e-3), 4)} from the left and ${fmt(slope(j + 1e-3), 4)} from the right (the field is continuous), and it is zero at both edges`, Math.abs(slope(j - 1e-3) - slope(j + 1e-3)) < 1e-3 && Math.abs(slope(dl + 1e-3)) < 1e-3 && Math.abs(slope(dr - 1e-3)) < 1e-3 && close(f145(j), 0.5, 1e-12)],
      [`The Fermi level is flat (one line at E = 0) and between the bands on each side: ${d} eV above E_V on the p-side, ${d} eV below E_C on the n-side`, close(E(G145.yF), 0) && e.EvP < 0 && e.EcP > 0 && e.EcN > 0 && e.EvN < 0],
      [`The eV_b arrow spans the p-side’s E_C down to the n-side’s E_C level (${fmt((Y145(e.EcN) - Y145(e.EcP)) / K145, 3)} eV), the E_g arrow the n-side’s gap (${fmt((Y145(e.EvN) - Y145(e.EcN)) / K145, 3)} eV)`, (HEADS.get(s) ?? []).some(([t]) => close(t[1], Y145(e.EcN), 1e-9) && close(t[0], 66, 1e-9)) && (HEADS.get(s) ?? []).some(([t]) => close(t[1], Y145(e.EvN) - 2, 1e-9))],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.6 · the I–V characteristic of a silicon diode (topic 02)     */
/* ===================================================================== */
/**
 * Forward: the topic's ideal diode equation I = I_S(e^{V/V_T} − 1) at 300 K
 * (V_T = 25.9 mV), with I_S chosen so the current reaches 5 mA, a quarter of
 * the 20 mA scale, at the book's knee, 0.70 V (I_S = 5 mA/(e^{0.70/0.0259} − 1)
 * ≈ 9 fA; the curve then reaches 20 mA at 0.736 V, as the book draws it).
 * Reverse: the same equation gives −I_S, far too small to show (it lies on the
 * zero line), until the breakdown voltage V_br = −50 V; past it the reverse
 * current grows as (|V| − 50 V)^{3/2}, reaching −20 mA at −60 V, the book's
 * curve (the diode equation has no breakdown term, so this branch is
 * descriptive). Two voltage scales, as the book's caption says: 2.73 px per
 * volt on the reverse side, 135 px per volt on the forward side.
 */
const VT = 0.0259;
const G146 = { x0: 214, xL: 50, xR: 322, vL: -60, vR: 0.8, y0: 130, sy: 5, iTop: 20, iBot: -25, knee: 0.7, iKnee: 5, vbr: -50, iEnd: 20 };
const IS146 = (G146.iKnee * 1e-3) / (Math.exp(G146.knee / VT) - 1);
const KBR = G146.iEnd / Math.pow(G146.vbr - G146.vL, 1.5);
/** The diode's current in mA at V volts. */
const I146 = (V: number) => {
  const ideal = IS146 * (Math.exp(V / VT) - 1) * 1e3;
  return V >= G146.vbr ? ideal : ideal - KBR * Math.pow(G146.vbr - V, 1.5);
};
const X146 = (V: number) => (V < 0 ? G146.x0 + (V * (G146.x0 - G146.xL)) / -G146.vL : G146.x0 + (V * (G146.xR - G146.x0)) / G146.vR);
const Y146 = (I: number) => G146.y0 - I * G146.sy;
const fig146: Diagram = {
  id: 'p12-14-fig-14.6',
  topic: 2,
  name: 'Diode I–V characteristic',
  cases: [{ chip: 'Silicon diode', cap: 'Current-voltage characteristic of a silicon diode, drawn with different voltage scales for reverse bias (left) and forward bias (right). Forward: negligible current until the knee at about 0.7 V, then a steep exponential rise. Reverse: a tiny, nearly constant saturation current, then a sharp rise in reverse current at the breakdown voltage.' }],
  draw() {
    const s = new Sketch(W, 322);
    const { xL, xR, iTop, iBot, knee, vbr } = G146, yb = Y146(iBot);
    // axes: current at the left, voltage along the bottom; the zero lines across
    s.vec(xL, yb, xR + 10, yb, { color: C.grey, w: 1.3 });
    s.vec(xL, yb, xL, Y146(iTop) - 12, { color: C.grey, w: 1.3 });
    keep(s, [[xL, yb], [xR + 10, yb]]);
    keep(s, [[xL, yb], [xL, Y146(iTop) - 12]]);
    path(s, [[xL, Y146(0)], [xR + 4, Y146(0)]], { color: C.grey, w: 1.1 });
    path(s, [[X146(0), yb], [X146(0), Y146(iTop)]], { color: C.grey, w: 1.1 });
    for (let i = iBot; i <= iTop; i += 5) { s.line(xL - 4, Y146(i), xL, Y146(i), { color: C.grey, w: 1.2 }); s.sym(xL - 7, Y146(i) + 4.5, tickTxt(i), { size: 11, anchor: 'end', color: C.slate }); }
    [-60, -50, -40, -30, -20, -10, 0].forEach((v) => { s.line(X146(v), yb, X146(v), yb + 4, { color: C.grey, w: 1.2 }); s.sym(X146(v), yb + 18, tickTxt(v), { size: 11, color: C.slate }); });
    [0.2, 0.4, 0.6, 0.8].forEach((v) => { s.line(X146(v), yb, X146(v), yb + 4, { color: C.grey, w: 1.2 }); s.sym(X146(v), yb + 18, tickTxt(v, 1), { size: 11, color: C.slate }); });
    s.sym(xL + 8, 14, '<i>I</i> (mA)', { size: 14, anchor: 'start' });
    s.sym(W / 2, yb + 40, '<i>V</i> (volts) — note the different horizontal scales', { size: 13 });
    s.sym(W / 2, yb + 57, 'for reverse (left) and forward (right) bias', { size: 13 });
    // the breakdown voltage and the knee
    guide(s, [X146(vbr), yb - 2], [X146(vbr), Y146(iTop)], C.slate, 'dash');
    guide(s, [X146(knee), yb - 2], [X146(knee), Y146(iTop)], C.slate, 'dash');
    // the characteristic (the thing the figure is about): reverse from −60 V, forward until it leaves the top
    const vTop = VT * Math.log((iTop * 1e-3) / IS146 + 1);
    const rev = samples(G146.vL, 0, 600).map((v): P => [X146(v), Y146(I146(v))]);
    const fwd = samples(0, vTop, 600).map((v): P => [X146(v), Y146(I146(v))]);
    const all = [...rev, ...fwd.slice(1)];
    path(s, all, { color: C.mari, w: 2.4 });
    keepCurve(s, 'iv', all);
    s.dot(X146(vbr), Y146(0), 3.6);
    s.dot(X146(knee), Y146(I146(knee)), 3.6);
    s.sym(X146(vbr) + 6, Y146(15) + 5, '<i>V</i><sub>br</sub>', { size: 15, anchor: 'start' });
    s.sym(X146(vbr) + 6, Y146(0) - 22, '<i>I</i><sub>S</sub>: tiny (too small', { size: 11, anchor: 'start', color: C.slate });
    s.sym(X146(vbr) + 6, Y146(0) - 9, 'to show at this scale)', { size: 11, anchor: 'start', color: C.slate });
    s.sym(X146(knee) - 6, Y146(14) + 4, 'Knee', { size: 13, anchor: 'end' });
    s.sym(X146(knee) - 6, Y146(11) + 4, '≈ 0.7 V', { size: 13, anchor: 'end' });
    words(s, 128, Y146(-12) + 4, 'Reverse bias', { size: 12 });
    words(s, 264, Y146(18) + 4, 'Forward bias', { size: 12 });
    return s;
  },
  check() {
    const s = fig146.draw(fig146.cases[0]), { knee, iKnee, vbr, vL, x0, xL, xR, vR, sy } = G146;
    const pts = (CURVES.get(s) ?? {}).iv ?? [];
    const read = (V: number) => (G146.y0 - yAtX(pts, X146(V))) / sy;
    const v20 = VT * Math.log((20e-3) / IS146 + 1);
    const flat = samples(vbr + 0.5, -0.5, 50).every((v) => Math.abs(I146(v)) <= IS146 * 1e3 + 1e-15);
    return [
      [`Forward: the drawn curve is I = I_S(e^{V/V_T} − 1) with V_T = 25.9 mV (k_BT/e at 300 K) and I_S = ${fmt(IS146 * 1e15, 2)} fA: read back ${[0.6, 0.65, 0.7, 0.72].map((v) => `${fmt(read(v), 3)} mA at ${v} V`).join(', ')}`, [0.6, 0.65, 0.7, 0.72].every((v) => Math.abs(read(v) - IS146 * 1e3 * (Math.exp(v / VT) - 1)) < 0.05)],
      [`Negligible current until the knee: ${fmt(I146(0.5) * 1e3, 2)} μA at 0.5 V and ${fmt(I146(0.6), 3)} mA at 0.6 V, then ${iKnee} mA at the knee, 0.7 V, and 20 mA by ${fmt(v20, 3)} V: a steep exponential rise`, I146(0.5) < 0.01 && I146(0.6) < 0.2 && close(I146(knee), iKnee, 1e-9) && v20 < 0.74],
      [`Steep: on the exponential the current doubles every V_T ln 2 = ${fmt(VT * Math.log(2) * 1e3, 1)} mV and rises tenfold every ${fmt(VT * Math.log(10) * 1e3, 1)} mV (worked example 4: 18 mV, ~60 mV per decade)`, close(I146(knee + VT * Math.log(2)) / I146(knee), 2, 1e-3) && Math.round(VT * Math.log(2) * 1e3) === 18 && Math.abs(VT * Math.log(10) * 1e3 - 59.6) < 0.1],
      [`Reverse, below breakdown: the current is −I_S (|I| ≤ ${fmt(IS146 * 1e15, 2)} fA), nearly constant; on this scale it is ${fmt(IS146 * 1e3 * sy, 12)} px off the zero line, and even 1 nA would be ${fmt(1e-6 * sy, 6)} px: too small to show`, flat && IS146 * 1e3 * sy < 1e-6 && 1e-6 * sy < 1e-4],
      [`At the breakdown voltage V_br = ${fmt(vbr)} V the reverse current rises sharply: ${fmt(I146(-52), 2)} mA at −52 V, ${fmt(I146(-55), 2)} mA at −55 V, ${fmt(read(vL), 2)} mA at ${fmt(vL)} V (read back)`, Math.abs(I146(vbr)) < 1e-9 && I146(-55) < -5 && Math.abs(read(vL) + 20) < 0.05],
      [`Two voltage scales: ${fmt((x0 - xL) / -vL, 3)} px per volt for reverse bias (left), ${fmt((xR - x0) / vR, 1)} px per volt for forward bias (right), ${fmt((xR - x0) / vR / ((x0 - xL) / -vL), 1)} times larger`, (xR - x0) / vR > 10 * ((x0 - xL) / -vL)],
      ['The dots mark the knee (0.7 V, on the curve) and V_br (−50 V, where the curve leaves the zero line)', s.points.some((p) => close(p.x, X146(knee), 1e-9) && close(p.y, Y146(iKnee), 1e-9)) && s.points.some((p) => close(p.x, X146(vbr), 1e-9) && close(p.y, Y146(0), 1e-9))],
      ...layout(s),
    ];
  },
};

/* ===================================================================== */
/* Figure 14.7 · full-wave rectifier with a capacitor filter (topic 02)   */
/* ===================================================================== */
/**
 * A 50 Hz sine of peak V_m = 10 V, full-wave rectified: |V_m sin(2π·50·t)|,
 * a pulse every 10 ms (f_out = 2f_in = 100 Hz), four in the book's 40 ms. The
 * filter: an ideal diode and a capacitor across the load, starting uncharged.
 * The capacitor follows the input up while the input is higher (charge), and
 * otherwise discharges through the load as e^{−t/τ} with τ = R_L C = 100 ms,
 * ten pulse spacings (the book's drawing: the output sags from 10 V to about
 * 9.2 V before the next pulse catches it). Simulated in 0.01 ms steps.
 */
const G147 = { Vm: 10, f: 50, tau: 100, t1: 40, ox: 52, sx: 6.6, sy: 9, vAx: 15, yTop: 161, yBot: 341, dt: 0.01, H: 418 };
const vin147 = (t: number) => Math.abs(G147.Vm * Math.sin(2 * Math.PI * G147.f * t * 1e-3));
/** The filtered output, stepped: [t, V, charging]. */
const vout147 = (): [number, number, boolean][] => {
  const { tau, t1, dt } = G147, out: [number, number, boolean][] = [];
  let v = 0;
  for (let k = 0; k <= Math.round(t1 / dt); k++) {
    const t = k * dt, dis = v * Math.exp(-dt / tau), vi = vin147(t);
    const ch = vi >= dis;
    v = ch ? vi : dis;
    out.push([t, v, ch]);
  }
  return out;
};
const fig147: Diagram = {
  id: 'p12-14-fig-14.7',
  topic: 2,
  name: 'Full-wave rectifier with a capacitor filter',
  cases: [{ chip: 'Before and after', cap: 'Full-wave rectifier with a capacitor filter. Top: the pulsating rectified output. Bottom: the same output (dashed) and the filtered output (solid): the capacitor charges near each peak and discharges slowly between peaks, so the output stays close to the peak value with a small saw-tooth ripple.' }],
  draw() {
    const s = new Sketch(W, G147.H);
    const { ox, sx, sy, yTop, yBot, t1, vAx } = G147;
    const panel = (y0: number, title: string, ylab: string, ticks: boolean) => {
      const f: Frame = { ox, oy: y0, sx, sy };
      const ty = y0 - vAx * sy - 10;
      words(s, 200, ty, title, { size: 11 });
      s.sym(4, ty, ylab, { size: 13, anchor: 'start' });
      s.vec(ox, y0, gx(f, t1) + 12, y0, { color: C.grey, w: 1.3 });
      s.vec(ox, y0, ox, gy(f, vAx), { color: C.grey, w: 1.3 });
      keep(s, [[ox, y0], [gx(f, t1) + 12, y0]]);
      keep(s, [[ox, y0], [ox, gy(f, vAx)]]);
      [0, 5, 10].forEach((v) => { s.line(ox - 4, gy(f, v), ox, gy(f, v), { color: C.grey, w: 1.2 }); s.sym(ox - 7, gy(f, v) + 4.5, String(v), { size: 11, anchor: 'end', color: C.slate }); });
      samples(0, 40, 8).forEach((t) => {
        s.line(gx(f, t), y0, gx(f, t), y0 + 4, { color: C.grey, w: 1.2 });
        if (ticks) s.sym(gx(f, t), y0 + 16, String(t), { size: 11, color: C.slate });
      });
      return f;
    };
    // top: the pulsating output
    const ft = panel(yTop, 'Full-wave rectifier output (before filter)', '<i>V</i><sub>rect</sub> (V)', false);
    const top = samples(0, t1, 800).map((t) => gp(ft, t, vin147(t)));
    path(s, top, { w: 2 });
    keepCurve(s, 'top', top);
    // bottom: the same output dashed, the filtered output solid (the thing the figure is about)
    const fb = panel(yBot, 'After capacitor-input filter', '<i>V</i><sub>out</sub> (V)', true);
    const inp = samples(0, t1, 800).map((t) => gp(fb, t, vin147(t)));
    path(s, inp, { color: C.slate, w: 1.2, dash: 'dash' });
    const vo = vout147();
    const outp = vo.filter((_, k) => k % 5 === 0).map(([t, v]) => gp(fb, t, v));
    path(s, outp, { color: C.mari, w: 2.6 });
    keepCurve(s, 'in', inp);
    keepCurve(s, 'out', outp);
    s.sym(gx(fb, 20), yBot + 38, '<i>t</i> (ms)', { size: 13 });
    keyRow(s, 64, yBot + 66, 'Rectified input', { color: C.slate, w: 1.2, dash: 'dash' });
    keyRow(s, 196, yBot + 66, 'Filtered output', { color: C.mari, w: 2.6 });
    // the dip just before the third pulse catches the output: the ripple
    const k3 = vo.findIndex(([t, , ch], k) => t > 20 && ch && !vo[k - 1][2]);
    const dip = gp(fb, vo[k3][0], vo[k3][1]);
    const row = (f: Frame) => gy(f, 14.6);
    s.place([
      { t: 'Pulsating waveform', p: gp(ft, 25, 10), at: [[gx(ft, 25), row(ft), 'middle'], [gx(ft, 27), row(ft), 'middle']] },
      { t: 'Charge', p: gp(fb, 2.5, vin147(2.5)), at: [[58, row(fb), 'start'], [60, row(fb), 'start']] },
      { t: 'Discharge', p: gp(fb, 12, vo[Math.round(12 / G147.dt)][1]), at: [[126, row(fb), 'start'], [128, row(fb), 'start']] },
      { t: 'Ripple', hi: true, p: dip, at: [[dip[0] + 4, row(fb), 'start'], [dip[0] + 8, row(fb), 'start'], [dip[0] + 12, row(fb), 'start']] },
    ]);
    return s;
  },
  check() {
    const s = fig147.draw(fig147.cases[0]), { Vm, f, tau, dt } = G147, vo = vout147();
    const peaks = samples(0, 40, 4000).filter((t, i, a) => i > 0 && i < a.length - 1 && vin147(t) > vin147(a[i - 1]) && vin147(t) >= vin147(a[i + 1]));
    const after = vo.filter(([t]) => t > 6);
    const ripple = Math.max(...after.map(([, v]) => v)) - Math.min(...after.map(([, v]) => v));
    const below = vo.every(([t, v]) => v >= vin147(t) - 1e-9);
    // the diode stops conducting just after a peak, where the input falls as fast as the capacitor would: tan(ωδ) = 1/(ωτ)
    const w = 2 * Math.PI * f * 1e-3, lag = Math.atan(1 / (w * tau)) / w;
    const charging = vo.filter(([, , ch]) => ch).map(([t]) => t).filter((t) => t > 6);
    const nearPeak = charging.every((t) => peaks.some((p) => t <= p + lag + 2 * dt && t > p - 2));
    const cut = Math.max(...vo.filter(([t, , ch]) => ch && t < 7).map(([t]) => t));
    // between pulses the output is V e^{−Δt/τ}: check one stretch
    const kc = Math.round(cut / dt), k12 = Math.round(12 / dt);
    const decay = close(vo[k12][1], vo[kc][1] * Math.exp(-(12 - cut) / tau), 1e-9);
    const fr = (CURVES.get(s) ?? {});
    const readTop = (t: number) => (G147.yTop - yAtX(fr.top ?? [], G147.ox + t * G147.sx)) / G147.sy;
    const readOut = (t: number) => (G147.yBot - yAtX(fr.out ?? [], G147.ox + t * G147.sx)) / G147.sy;
    return [
      [`The rectified output is |V_m sin ωt| with V_m = ${Vm} V and f_in = ${f} Hz: ${peaks.length} pulses in 40 ms, peaks at ${peaks.map((p) => fmt(p, 2)).join(', ')} ms, every ${fmt(peaks[1] - peaks[0], 2)} ms (f_out = 2f_in = ${fmt(1000 / (peaks[1] - peaks[0]), 0)} Hz); read back ${fmt(readTop(5), 3)} V at 5 ms and ${fmt(readTop(10), 3)} V at 10 ms`, peaks.length === 4 && close(peaks[1] - peaks[0], 10, 0.02) && Math.abs(readTop(5) - 10) < 0.01 && Math.abs(readTop(10)) < 0.05],
      [`The filtered output never falls below the rectified input (the capacitor holds it up), and it charges only near each peak: from ${fmt(Math.max(...peaks.slice(1).map((p) => p - Math.min(...charging.filter((t) => t <= p && t > p - 2)))), 2)} ms before it until ${fmt(lag, 3)} ms after it (where the input falls as fast as the capacitor discharges, tan ωδ = 1/(ωτ); simulated ${fmt(cut - 5, 2)} ms)`, below && nearPeak && Math.abs(cut - 5 - lag) < 2 * dt],
      [`Between peaks it discharges slowly through the load, V = V_peak e^{−Δt/τ} with τ = R_L C = ${tau} ms (from the diode’s cut-off at ${fmt(cut, 2)} ms to 12 ms: ${fmt(vo[kc][1], 3)} → ${fmt(vo[k12][1], 3)} V)`, decay],
      [`A small saw-tooth ripple: after the first peak the output stays between ${fmt(10 - ripple, 2)} and 10 V, ripple ${fmt(ripple, 2)} V = ${fmt((100 * ripple) / Vm, 1)}% of the peak (near the estimate V_m T/τ = ${fmt((Vm * 10) / tau, 1)} V, T = 10 ms between pulses); read back ${fmt(readOut(14), 3)} V at 14 ms`, ripple < 0.1 * Vm && ripple > 0.5 && Math.abs(readOut(14) - vo[Math.round(14 / dt)][1]) < 0.02],
      ['The “Ripple” tag names the lowest point of a sag, where the next pulse catches the output', (() => { const t = s.tags.find((x) => x.name === 'Ripple'); if (!t?.from) return false; const tt = ((t.from as P)[0] - G147.ox) / G147.sx; const k = Math.round(tt / dt); return vo[k][2] && !vo[k - 1][2] && Math.abs(vo[k][1] - (10 - ripple)) < 0.01; })()],
      ...layout(s),
    ];
  },
};

/** Physics 12 Ch 14 (Semiconductor Electronics): Figures 14.1–14.3 (Topic 01) and 14.4–14.7 (Topic 02); these topics have no unnumbered drawings. */
export const DIAGRAMS_PHYSICS_12_14: Diagram[] = [fig141, fig142, fig143, fig144, fig145, fig146, fig147];
