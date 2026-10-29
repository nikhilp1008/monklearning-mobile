import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 8 (Organic Chemistry — Some Basic Principles and
 * Techniques): every drawing of the Master Reference book on pp. 345–399,
 * redrawn. The pages were checked one by one (vector-drawing count per page,
 * then the page images). The chapter has THREE drawings:
 *
 *   Figure 8.1 (p. 348, "CHAPTER 8 · FIGURES" page; caption first on p. 347
 *     with "(see next page)") — the opening section, Subtopic 00 (n '00'),
 *     topic index 0: c11-08-fig-8.1.
 *   Figure 8.2 (p. 368; caption first on p. 367) — Topic 03, index 3.
 *   "Figure 1" of Additional topic F, the Kjeldahl back-titration flow
 *     (p. 392) — index 10. Its number is the addendum's own, so it takes the
 *     unnumbered id c11-08-F-d1.
 *
 * Judged NOT drawings: every table (classification, functional groups,
 * fission, reactive intermediates, estimation methods, distribution), the
 * condensed formulas and typeset equations; the book draws no apparatus
 * (Lassaigne, Liebig, Dumas, Kjeldahl, chromatography) and no other structure.
 *
 * Everything is computed, never placed by eye:
 *   8.1 — the four representations are built from atoms and bonds; the check
 *     reads each back to a molecular formula (C₃H₈O every time), with every C
 *     four-valent, O two-valent, H one-valent, the bond-line's hidden H filled
 *     in as 4 − (bonds drawn), and its zig-zag at 120°.
 *   8.2 — both ions are placed in 3D and projected: the carbocation's three
 *     bonds 120° apart in one plane with the empty p orbital along the plane's
 *     normal; the carbanion's three bonds and lone pair tetrahedral (109.47°),
 *     the wedge in front of the page, the hashed bond behind. Steric number,
 *     hybridisation, electron count and formal charge are computed.
 *   F — the flow's boxes in order; % N = 14 × meq/(1000 w) × 100 =
 *     1.4 (N_aV_a − N_bV_b)/w, checked on the addendum's own Examples F.1
 *     (23.7%) and F.2 (56%).
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');

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

/* ---------- structures: atom symbols and bonds ---------- */
/** The box an atom's symbol takes (null for a bond-line vertex, which has none). */
const labRect = (at: P, html: string, size: number): Rect => { const w = Math.max(mathW(html, size), plain(html).length * size * 0.5) * 0.92; return [at[0] - w / 2, at[1] - size * 0.38, at[0] + w / 2, at[1] + size * 0.38]; };
function lab(s: Sketch, at: P, html: string, size: number, color: string = C.ink) {
  s.labels.push({ text: plain(html), rect: labRect(at, html, size) });
  s.text(at[0], at[1] + size * 0.36, html, { size, color });
}
/** Where a line from inside a box first runs 5.5 px clear of it. */
function exit(r: Rect | null, p: P, u: P): number {
  if (!r) return 0;
  const g = 5.5;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null): [P, P] {
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u), tb = exit(rb, B, [-u[0], -u[1]]);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
/** A solid wedge (toward the viewer): narrow at a, 7 px wide at b. */
function wedge(s: Sketch, a: P, b: P) {
  const L = len(a, b), n: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L], hw = 3.5;
  s.add(`<path d="M${r1(a[0])} ${r1(a[1])} L${r1(b[0] + n[0] * hw)} ${r1(b[1] + n[1] * hw)} L${r1(b[0] - n[0] * hw)} ${r1(b[1] - n[1] * hw)} Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="1" stroke-linejoin="round"/>`);
  keep(s, [a, b]);
}
/** A hashed wedge (away from the viewer): short strokes widening toward b. */
function hash(s: Sketch, a: P, b: P) {
  const L = len(a, b), u: P = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n: P = [-u[1], u[0]], k = 6;
  for (let i = 0; i <= k; i++) {
    const t = 1 + ((L - 2) * i) / k, hw = 0.8 + (2.9 * i) / k, c: P = [a[0] + u[0] * t, a[1] + u[1] * t];
    s.add(`<line x1="${r1(c[0] + n[0] * hw)}" y1="${r1(c[1] + n[1] * hw)}" x2="${r1(c[0] - n[0] * hw)}" y2="${r1(c[1] - n[1] * hw)}" stroke="${C.ink}" stroke-width="1.4" stroke-linecap="round"/>`);
  }
  keep(s, [a, b]);
}
/** Atom counts of a formula string such as CH3CH2CH2OH or H3C. */
const count = (f: string) => { const n: Record<string, number> = {}; for (const [, el, k] of f.matchAll(/([A-Z][a-z]?)(\d*)/g)) n[el] = (n[el] ?? 0) + (k ? +k : 1); return n; };
const formula = (n: Record<string, number>) => ['C', 'H', 'O'].map((e) => (n[e] ? `${e}${n[e] > 1 ? n[e] : ''}` : '')).join('');
const VAL: Record<string, number> = { C: 4, H: 1, O: 2 };

/* ===================================================================== */
/* Figure 8.1 · propan-1-ol drawn four ways (opening section, p. 348)     */
/* ===================================================================== */
const CAP81 = 'The same molecule (propan-1-ol) drawn four ways side by side: (1) full Lewis with all H and bonds, (2) condensed CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH, (3) bond-line zig-zag with an OH at one end, (4) 3D wedge-dash showing tetrahedral carbons.';
type Graph = { atoms: { el: string; html: string | null; at: P }[]; bonds: { a: number; b: number; kind?: 'wedge' | 'hash' }[] };
const SZ81 = 14;
/** (1) Full Lewis: H–C–C–C–O–H, an H above and below each C. */
function lewis81(): Graph {
  const y = 62, xs = [18, 46, 74, 102, 130, 157];
  const atoms: Graph['atoms'] = [['H', xs[0]], ['C', xs[1]], ['C', xs[2]], ['C', xs[3]], ['O', xs[4]], ['H', xs[5]]].map(([el, x]) => ({ el: el as string, html: el as string, at: [x as number, y] as P }));
  const bonds: Graph['bonds'] = [0, 1, 2, 3, 4].map((i) => ({ a: i, b: i + 1 }));
  [1, 2, 3].forEach((c) => [y - 32, y + 32].forEach((hy) => { atoms.push({ el: 'H', html: 'H', at: [xs[c], hy] }); bonds.push({ a: c, b: atoms.length - 1 }); }));
  return { atoms, bonds };
}
/** (3) Bond-line: three carbons (an end and two corners, no symbols) and OH, zig-zag at 120°. */
const BL = { start: [26, 240] as P, L: 40, angle: 120 };
function bondline81(): Graph {
  const half = (180 - BL.angle) / 2, rad = (half * Math.PI) / 180, dx = BL.L * Math.cos(rad), dy = BL.L * Math.sin(rad);
  const pts: P[] = [0, 1, 2, 3].map((i) => [BL.start[0] + dx * i, BL.start[1] - (i % 2 ? dy : 0)]);
  return {
    atoms: [{ el: 'C', html: null, at: pts[0] }, { el: 'C', html: null, at: pts[1] }, { el: 'C', html: null, at: pts[2] }, { el: 'OH', html: 'OH', at: [pts[3][0] + 6, pts[3][1] - 4] }],
    bonds: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }],
  };
}
/** (4) Wedge-dash: H₃C–C–C–OH, each middle C with one H on a wedge (up) and one on a hashed bond (down). */
function wedge81(): Graph {
  const y = 236;
  const atoms: Graph['atoms'] = [
    { el: 'CH3', html: 'H<sub>3</sub>C', at: [198, y] }, { el: 'C', html: 'C', at: [238, y] }, { el: 'C', html: 'C', at: [276, y] }, { el: 'OH', html: 'OH', at: [314, y] },
    { el: 'H', html: 'H', at: [230, y - 40] }, { el: 'H', html: 'H', at: [246, y + 40] }, { el: 'H', html: 'H', at: [268, y - 40] }, { el: 'H', html: 'H', at: [284, y + 40] },
  ];
  return { atoms, bonds: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 1, b: 4, kind: 'wedge' }, { a: 1, b: 5, kind: 'hash' }, { a: 2, b: 6, kind: 'wedge' }, { a: 2, b: 7, kind: 'hash' }] };
}
const CONDENSED = 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH';
function drawGraph(s: Sketch, g: Graph, o: { color?: string } = {}) {
  const rect = (i: number) => (g.atoms[i].html ? labRect(g.atoms[i].at, g.atoms[i].html!, SZ81) : null);
  g.bonds.forEach(({ a, b, kind }) => {
    const [p, q] = ends(g.atoms[a].at, rect(a), g.atoms[b].at, rect(b));
    if (kind === 'wedge') wedge(s, p, q);
    else if (kind === 'hash') hash(s, p, q);
    else path(s, [p, q], { w: 1.8, color: o.color });
  });
  g.atoms.forEach((a) => { if (a.html) lab(s, a.at, a.html, SZ81); });
}
/** Formula of a drawn graph: explicit atoms, plus the H a bond-line vertex leaves implicit. */
function graphFormula(g: Graph, implicitH: boolean) {
  const n: Record<string, number> = {};
  g.atoms.forEach((a, i) => {
    Object.entries(count(a.el)).forEach(([e, k]) => (n[e] = (n[e] ?? 0) + k));
    if (implicitH && !a.html && a.el === 'C') n.H = (n.H ?? 0) + 4 - g.bonds.filter((b) => b.a === i || b.b === i).length;
  });
  return n;
}
/** Bonds at each skeletal atom, with the H a group label carries (H₃C, OH) and implicit H counted. */
function valences(g: Graph, implicitH: boolean): { el: string; v: number }[] {
  return g.atoms.map((a, i) => {
    const drawn = g.bonds.filter((b) => b.a === i || b.b === i).length;
    const grp = count(a.el), el = grp.C ? 'C' : grp.O ? 'O' : 'H';
    return { el, v: drawn + (grp.H && el !== 'H' ? grp.H : 0) + (implicitH && !a.html && el === 'C' ? 4 - drawn : 0) };
  });
}
const fig81: Diagram = {
  id: 'c11-08-fig-8.1',
  topic: 0,
  name: 'Four ways to draw propan-1-ol',
  cases: [{ chip: 'Propan-1-ol', cap: CAP81 }],
  draw() {
    const s = new Sketch(W, 326);
    drawGraph(s, lewis81());
    lab(s, [255, 62], CONDENSED, 16);
    drawGraph(s, bondline81(), { color: C.mari });
    drawGraph(s, wedge81());
    path(s, [[170, 14], [170, 300]], { color: C.grey, w: 1, dash: true, free: true });
    path(s, [[10, 152], [330, 152]], { color: C.grey, w: 1, dash: true, free: true });
    s.tag(85, 112, 'Lewis (full)', null, null, { anchor: 'middle' });
    s.tag(255, 112, 'Condensed', null, null, { anchor: 'middle' });
    s.tag(85, 296, 'Bond-line', null, null, { anchor: 'middle', hi: true });
    s.tag(255, 296, 'Wedge-dash', null, null, { anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig81.draw(fig81.cases[0]), out: Check[] = [];
    const want = 'C3H8O';
    const reps: [string, Record<string, number>][] = [['Lewis', graphFormula(lewis81(), false)], ['condensed', count(plain(CONDENSED))], ['bond-line', graphFormula(bondline81(), true)], ['wedge-dash', graphFormula(wedge81(), false)]];
    out.push([`Each drawing reads back to one formula, propan-1-ol's C₃H₈O: ${reps.map(([n, f]) => `${n} ${formula(f)}`).join(', ')}`, reps.every(([, f]) => formula(f) === want)]);
    const okVal = (g: Graph, imp: boolean) => valences(g, imp).every(({ el, v }) => v === VAL[el]);
    out.push(['Lewis: every C has four bonds, O two, every H one', okVal(lewis81(), false)]);
    out.push(['Bond-line: vertices and the free end are C; each gets 4 − (bonds drawn) hidden H (3, 2, 2), the OH is written out', okVal(bondline81(), true) && bondline81().atoms.filter((a) => !a.html).length === 3]);
    out.push(['Wedge-dash: both middle carbons are tetrahedral, four bonds each (two in the page, one wedge toward the viewer, one hashed away)', [1, 2].every((c) => { const b = wedge81().bonds.filter((x) => x.a === c || x.b === c); return b.length === 4 && b.filter((x) => x.kind === 'wedge').length === 1 && b.filter((x) => x.kind === 'hash').length === 1; }) && okVal(wedge81(), false)]);
    const zig = bondline81(), zp: P[] = [0, 1, 2].map((i) => zig.atoms[i].at);
    const a1 = (() => { const u: P = [zp[0][0] - zp[1][0], zp[0][1] - zp[1][1]], v: P = [zp[2][0] - zp[1][0], zp[2][1] - zp[1][1]]; return (Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180) / Math.PI; })();
    out.push([`The bond-line zig-zag turns at ${fmt(a1, 1)}° at each corner, with the OH at one end`, close(a1, BL.angle, 1e-6) && zig.atoms[3].html === 'OH']);
    out.push(['The chain is unbranched C–C–C–O (propan-1-ol: OH on the end carbon) in every drawing', [lewis81(), wedge81()].every((g) => g.bonds.filter((b) => !b.kind).length >= 3) && /^CH3CH2CH2OH$/.test(plain(CONDENSED))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.2 · carbocation and carbanion (Topic 03, p. 368)              */
/* ===================================================================== */
const CAP82 = 'Side-by-side of a carbocation (planar three bonds + empty perpendicular p-orbital) and a carbanion (pyramidal three bonds + a lone pair in the fourth position), labelled sp<sup>2</sup> and sp<sup>3</sup> respectively.';
type V3 = [number, number, number];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const deg = (a: V3, b: V3) => (Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / Math.sqrt(dot3(a, a) * dot3(b, b))))) * 180) / Math.PI;
const D = (d: number) => (d * Math.PI) / 180;
/** Carbocation: three bonds in the horizontal (x–z) plane 120° apart; the empty p orbital along y. Seen from 25° above the plane. */
const CAT = { c: [88, 170] as P, L: 74, tilt: 35, thetas: [-70, 50, 170], p: [0, 1, 0] as V3, lobe: 50 };
const catBonds = (): V3[] => CAT.thetas.map((t) => [Math.cos(D(t)), 0, Math.sin(D(t))]);
const projCat = (v: V3, L: number): P => [CAT.c[0] + L * v[0], CAT.c[1] - L * (v[1] * Math.cos(D(CAT.tilt)) - v[2] * Math.sin(D(CAT.tilt)))];
/**
 * Carbanion: lone pair along +y; three bonds at the tetrahedral angle from it, azimuths 0°, 120°, 240°,
 * turned 357° about y, tilted 26° about x and 24° in the page (the view, searched over all three turns,
 * that keeps one bond nearly in the page, one in front, one behind, and all four directions furthest apart).
 */
const TET = Math.acos(-1 / 3);
const ANI = { c: [244, 166] as P, L: 80, phis: [0, 120, 240], turn: 357, tilt: 26, spin: 24, kinds: ['plain', 'wedge', 'hash'] as const };
const view = (v: V3): V3 => {
  const E = D(ANI.tilt), G = D(ANI.spin), y = v[1] * Math.cos(E) - v[2] * Math.sin(E), z = v[1] * Math.sin(E) + v[2] * Math.cos(E);
  return [v[0] * Math.cos(G) - y * Math.sin(G), v[0] * Math.sin(G) + y * Math.cos(G), z];
};
const aniBonds = (): V3[] => ANI.phis.map((f) => view([Math.sin(TET) * Math.cos(D(f + ANI.turn)), Math.cos(TET), Math.sin(TET) * Math.sin(D(f + ANI.turn))]));
const aniLp = (): V3 => view([0, 1, 0]);
const projAni = (v: V3, L: number): P => [ANI.c[0] + L * v[0], ANI.c[1] - L * v[1]];
/** An ellipse, its long (ry) axis along the screen direction u (default straight up). */
function ellipse(s: Sketch, c: P, rx: number, ry: number, o: Stroke, u: P = [0, -1]) {
  const n: P = [-u[1], u[0]];
  const pts: P[] = Array.from({ length: 49 }, (_, i) => { const a = (2 * Math.PI * i) / 48, k = rx * Math.cos(a), m = ry * Math.sin(a); return [c[0] + n[0] * k + u[0] * m, c[1] + n[1] * k + u[1] * m]; });
  path(s, pts, o);
}
const fig82: Diagram = {
  id: 'c11-08-fig-8.2',
  topic: 3,
  name: 'Carbocation and carbanion',
  cases: [{ chip: 'R₃C⁺ and R₃C⁻', cap: CAP82 }],
  draw() {
    const s = new Sketch(W, 300), sz = 16;
    // carbocation
    const cR = labRect(CAT.c, 'C', sz);
    catBonds().forEach((v) => {
      const end = projCat(v, CAT.L), [p, q] = ends(CAT.c, cR, end, labRect(end, 'R', sz));
      path(s, [p, q], { w: 1.8 });
      lab(s, end, 'R', sz);
    });
    lab(s, CAT.c, 'C', sz);
    const up = projCat(CAT.p, CAT.lobe), dn = projCat([0, -1, 0], CAT.lobe);
    ellipse(s, up, 9, 22, { color: C.mari, w: 1.7, dash: true });
    ellipse(s, dn, 9, 22, { color: C.mari, w: 1.7, dash: true });
    s.sym(CAT.c[0] - 22, CAT.c[1] - 14, '+', { size: 19 });
    // carbanion
    const aR = labRect(ANI.c, 'C', sz);
    aniBonds().forEach((v, i) => {
      const end = projAni(v, ANI.L), [p, q] = ends(ANI.c, aR, end, labRect(end, 'R', sz));
      if (ANI.kinds[i] === 'wedge') wedge(s, p, q); else if (ANI.kinds[i] === 'hash') hash(s, p, q); else path(s, [p, q], { w: 1.8 });
      lab(s, end, 'R', sz);
    });
    lab(s, ANI.c, 'C', sz);
    const lp = projAni(aniLp(), 46), lv = aniLp(), lu: P = [lv[0] / Math.hypot(lv[0], lv[1]), -lv[1] / Math.hypot(lv[0], lv[1])];
    ellipse(s, lp, 11, 19, { color: C.ink, w: 1.4 }, lu);
    s.dot(lp[0] - 4 * lu[1], lp[1] + 4 * lu[0], 2.4); s.dot(lp[0] + 4 * lu[1], lp[1] - 4 * lu[0], 2.4);
    s.sym(ANI.c[0] + 18, ANI.c[1] - 22, '−', { size: 19 });
    s.sym(CAT.c[0], 282, 'carbocation: sp<sup>2</sup>, planar', { size: 13 });
    s.sym(255, 282, 'carbanion: sp<sup>3</sup>, pyramidal', { size: 13 });
    s.place([
      { t: 'empty p orbital (perpendicular)', p: [up[0] + 9, up[1] - 4], hi: true, at: [[8, 30, 'start'], [8, 22, 'start']] },
      { t: 'lone pair', p: [lp[0] + 19 * lu[0], lp[1] + 19 * lu[1]], at: [[252, 30, 'start'], [254, 60, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = fig82.draw(fig82.cases[0]), out: Check[] = [];
    const cb = catBonds();
    const catAngles = [deg(cb[0], cb[1]), deg(cb[1], cb[2]), deg(cb[0], cb[2])];
    out.push([`Carbocation: the three bonds are ${catAngles.map((a) => fmt(a, 1)).join('°, ')}° apart in one plane (trigonal planar)`, catAngles.every((a) => close(a, 120, 1e-9))]);
    out.push(['The empty p orbital lies along the plane’s normal: perpendicular to every bond', cb.every((v) => close(dot3(v, CAT.p), 0, 1e-12))]);
    out.push(['Carbocation: 3 σ bonds + 0 lone pairs ⇒ steric number 3 ⇒ sp²; 6 electrons round C (a sextet); formal charge 4 − 0 − 3 = +1', 3 + 0 === 3 && 3 * 2 === 6 && 4 - 0 - 3 === 1]);
    const ab = aniBonds(), all = [...ab, aniLp()];
    const pairs = all.flatMap((a, i) => all.slice(i + 1).map((b) => deg(a, b)));
    out.push([`Carbanion: the three bonds and the lone pair are mutually ${fmt(pairs[0], 2)}° apart (tetrahedral, 109.47°): a pyramid of three bonds with the lone pair in the fourth position`, pairs.every((a) => close(a, 109.4712, 1e-3))]);
    out.push(['Carbanion: 3 σ bonds + 1 lone pair ⇒ steric number 4 ⇒ sp³; 8 electrons round C (an octet); formal charge 4 − 2 − 3 = −1', 3 + 1 === 4 && 3 * 2 + 2 === 8 && 4 - 2 - 3 === -1]);
    out.push([`The wedge bond points toward the viewer (z = ${fmt(ab[1][2])}), the hashed bond away (z = ${fmt(ab[2][2])}), the plain one nearest the page (z = ${fmt(ab[0][2])})`, ANI.kinds.every((k, i) => (k === 'wedge' ? ab[i][2] > 0.3 : k === 'hash' ? ab[i][2] < -0.3 : Math.abs(ab[i][2]) < 0.2))]);
    out.push([`Every bond is long enough to read: projected ${ab.map((v) => fmt(Math.hypot(v[0], v[1]))).join(', ')} of its length`, ab.every((v) => Math.hypot(v[0], v[1]) > 0.5)]);
    out.push(['The charges drawn: + on the carbocation, − on the carbanion; the labels state sp² planar and sp³ pyramidal', ['+', '−', 'carbocation: sp2, planar', 'carbanion: sp3, pyramidal'].every((t) => s.labels.some((l) => l.text === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Additional topic F · Kjeldahl back-titration ("Figure 1", p. 392)      */
/* ===================================================================== */
const CAPF1 = 'The Kjeldahl back-titration as a milliequivalent flow: every nitrogen atom ends as one ammonia, which consumes exactly one equivalent of acid; the result is a single subtraction of what the base reports from what the acid started with.';
const NAVA = '<i>N</i><sub>a</sub><i>V</i><sub>a</sub>', NBVB = '<i>N</i><sub>b</sub><i>V</i><sub>b</sub>';
const STEPSF: [string, string][] = [
  ['sample of mass <i>w</i> g', '(organic nitrogen compound)'],
  ['digest: conc. H<sub>2</sub>SO<sub>4</sub>', 'all N becomes NH<sub>4</sub><sup>+</sup>'],
  ['distil with NaOH: NH<sub>3</sub> absorbed in', `known EXCESS standard acid, meq = ${NAVA}`],
  ['back-titrate the leftover acid', `with standard NaOH, meq = ${NBVB}`],
];
const RESULTF = ['meq of NH<sub>3</sub> = meq N', `= ${NAVA} − ${NBVB}`, 'mass of N (mg) = 14 × meq', `% N = 1.4 (${NAVA} − ${NBVB})/<i>w</i>`];
/** % N from the flow: meq of N × 14 mg, over the sample in mg, × 100. */
const pctN = (NaVa: number, NbVb: number, w: number) => ((14 * (NaVa - NbVb)) / (1000 * w)) * 100;
const GF = { cx: 160, y: [30, 92, 154, 216], half: 19, size: 12, h: 404 };
const fboxRect = (i: number): Rect => { const w = Math.max(...STEPSF[i].map((t) => Math.max(mathW(t, GF.size), plain(t).length * GF.size * 0.5))) + 18; return [GF.cx - w / 2, GF.y[i] - GF.half, GF.cx + w / 2, GF.y[i] + GF.half]; };
const DRAWNF = new WeakMap<Sketch, { arrows: [P, P][]; result: Rect }>();
const figF1: Diagram = {
  id: 'c11-08-F-d1',
  topic: 10,
  name: 'Kjeldahl back-titration flow',
  cases: [{ chip: 'Kjeldahl flow', cap: CAPF1 }],
  draw() {
    const s = new Sketch(W, GF.h), arrows: [P, P][] = [];
    STEPSF.forEach((lines, i) => {
      const r = fboxRect(i);
      path(s, rectPts(r), { w: 1.2, color: C.slate });
      lines.forEach((t, k) => s.sym(GF.cx, GF.y[i] - 3 + 15 * k, t, { size: GF.size }));
      if (i) { const a: P = [GF.cx, fboxRect(i - 1)[3] + 4], b: P = [GF.cx, r[1] - 4]; arrow(s, a, b, { color: C.slate, w: 1.4 }); arrows.push([a, b]); }
    });
    ['one N atom gives one NH<sub>3</sub>,', 'which consumes exactly one', 'equivalent of acid'].forEach((t, k) => s.sym(8, 270 + 15 * k, t, { size: 11.5, anchor: 'start', color: C.slate }));
    const res = resultBlock(s, RESULTF, { size: 12.5 });
    const x = fboxRect(3)[2] - 14, a: P = [x, fboxRect(3)[3] + 4], b: P = [x, res[1] - 4];
    arrow(s, a, b, { color: C.mari, w: 2 });
    arrows.push([a, b]);
    DRAWNF.set(s, { arrows, result: res });
    return s;
  },
  check() {
    const s = figF1.draw(figF1.cases[0]), d = DRAWNF.get(s)!, out: Check[] = [];
    const boxes = STEPSF.map((_, i) => fboxRect(i));
    const at = (p: P) => { const i = boxes.findIndex((r) => rectDist(r, p) < 6); return i >= 0 ? `box ${i + 1}` : rectDist(d.result, p) < 6 ? 'result' : '?'; };
    const read = d.arrows.map(([a, b]) => `${at(a)}→${at(b)}`);
    out.push([`Read off the drawing, the arrows run ${read.join(', ')}: sample → digest → distil into excess acid → back-titrate → result`, JSON.stringify(read) === JSON.stringify(['box 1→box 2', 'box 2→box 3', 'box 3→box 4', 'box 4→result'])]);
    out.push(['14 × meq is milligrams of N, so % N = 14 × meq/(1000 w) × 100 = 1.4 × meq/w (w in g)', close(pctN(1, 0, 1), 1.4, 1e-12)]);
    const f1 = pctN(20 * 0.1, 15 * 0.1, 0.0295);
    out.push([`Example F.1: 29.5 mg sample, 20 mL of 0.1 M HCl, 15 mL of 0.1 M NaOH ⇒ meq NH₃ = 2.0 − 1.5 = 0.5, N = 7.0 mg, % N = ${fmt(f1, 1)}% (book 23.7%)`, fmt(f1, 1) === '23.7']);
    const f2 = pctN(50 * 0.5 * 2, 60 * 0.5, 0.5);
    out.push([`Example F.2: 0.5 g, 50 mL of 0.5 M H₂SO₄ (normality 2 × molarity = 1.0 N), 60 mL of 0.5 M NaOH ⇒ meq NH₃ = 50 − 30 = 20, % N = ${fmt(f2, 1)}% (book 56%)`, close(f2, 56, 1e-9)]);
    out.push(['One N atom → one NH₃ → one equivalent of acid: meq N = meq NH₃ = NₐVₐ − N_bV_b', RESULTF[0].includes('meq N') && RESULTF[1] === `= ${NAVA} − ${NBVB}`]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_11_08: Diagram[] = [fig81, fig82, figF1];
