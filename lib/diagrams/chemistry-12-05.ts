import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 5 (Coordination Compounds): every drawing of the Master Reference
 * book on pp. 196–250, redrawn. Every page's vector shapes were counted (only pp. 208, 210 and 243
 * hold a curve or a slanted line; there are no raster images). The chapter has THREE drawings:
 *
 *   Figure 5.1 (p. 208; caption first on p. 207) — Topic 02, topic index 1, on worked example 1.
 *   Figure 5.2 (p. 210; caption first on p. 209) — Topic 02, index 1, on worked example 4.
 *   "Figure 1" (p. 243, unnumbered in the chapter's series) — Additional topic C, index 8.
 *
 * The book's octahedra are a true projection: decoded from p. 208's path data, its three axes are
 * perpendicular and equally long to within 0.1% once given their depth, and p. 210 uses the same
 * three axes at 0.79 of the size. So the geometry here is a real octahedron in that same view, and
 * the checks read each structure back off the drawing (which ligand sits on which vertex, which two
 * vertices each en joins) and enumerate the rotations and reflections of the octahedron over it.
 *
 * Figure 1's levels are the book's too: on p. 243 eg is 58.4, t2g 38.8, t2 17.3 and e 25.9 pt from
 * the barycentre, which are 0.6, 0.4, 0.4 and 0.6 of its Δo (97.2 pt) and Δt (43.2 pt = 4/9 Δo). Both
 * patterns stand on one energy scale here as there.
 */

const W = 340;
type P = [number, number];
type V3 = [number, number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');

/* ---------- drawing helpers (as in chemistry-12-04.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
const namesOf = (s: Sketch, prefix: string) => LINES.get(s)!.filter((l) => l.name.startsWith(prefix)).map((l) => l.name);
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, pts, o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How close a box comes to a polyline, walked at half a pixel. */
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  return gap;
};
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = name; } }
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

/** A symbol or line of STIX on the drawing, its box at its true width (subscripts counted), so the clearances mean what they say. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = Math.max(mathW(html, size), plain(html).length * size * 0.5);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
}

/* ---------- the octahedron: the book's view, a true projection ---------- */
type Vx = 'p1' | 'm1' | 'p2' | 'm2' | 'p3' | 'm3';
const VX: Vx[] = ['p1', 'm1', 'p2', 'm2', 'p3', 'm3'];
const axisOf = (v: Vx) => Number(v[1]) - 1;
const signOf = (v: Vx) => (v[0] === 'p' ? 1 : -1);
const makeVx = (axis: number, sign: number) => `${sign > 0 ? 'p' : 'm'}${axis + 1}` as Vx;
/** p. 208, path data, Fig 5.1(a): each vertex from the metal, in points, y down. p1 right, p2 near right, p3 up. */
const AX: P[] = [[33.77, -6.66], [19.5, 11.55], [0, -36.64]];
/** p. 210, path data: the same three axes in Fig 5.2. */
const AX52: P[] = [[26.66, -5.27], [15.39, 9.11], [0, -28.95]];
const K52 = AX52[2][1] / AX[2][1];
/** The depth each axis needs to be a true octahedron: the third row of an orthogonal matrix, + toward the reader. */
const AX3: V3[] = (() => {
  const x: V3 = [AX[0][0], AX[1][0], AX[2][0]], y: V3 = [AX[0][1], AX[1][1], AX[2][1]], R = Math.hypot(...x);
  const z: V3 = [(x[1] * y[2] - x[2] * y[1]) / R, (x[2] * y[0] - x[0] * y[2]) / R, (x[0] * y[1] - x[1] * y[0]) / R];
  return AX.map(([a, b], i): V3 => [a, b, z[i]]);
})();
const v3 = (v: Vx, flip = false): V3 => { const a = AX3[axisOf(v)], k = signOf(v); return [(flip ? -1 : 1) * k * a[0], k * a[1], k * a[2]]; };
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const det3 = (a: V3, b: V3, c: V3) => a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0]);
const angle3 = (a: V3, b: V3) => (Math.acos(dot3(a, b) / Math.sqrt(dot3(a, a) * dot3(b, b))) * 180) / Math.PI;

type LabelSpec = { v: Vx; side: 'top' | 'bottom' | 'left' | 'right'; dy?: number };
type Panel = {
  id: string;
  c: P;
  S: number;
  /** Drawn as the reflection in a vertical plane: x runs the other way. */
  flip?: boolean;
  metal: string;
  lig: Partial<Record<Vx, string>>;
  /** The ligand in the highlight. */
  hi: string;
  en: [Vx, Vx][];
  labels: LabelSpec[];
};
const pos = (p: Panel, v: Vx): P => { const a = v3(v, p.flip); return [p.c[0] + p.S * a[0], p.c[1] + p.S * a[1]]; };
const RL = 6.5, RDONOR = 4.5, RM = 12.5;
const circlePts = (c: P, r: number, n = 48): P[] => Array.from({ length: n + 1 }, (_, i): P => [c[0] + r * Math.cos((2 * Math.PI * i) / n), c[1] + r * Math.sin((2 * Math.PI * i) / n)]);
const toward = (p: P, q: P, r: number): P => { const L = len(p, q); return [p[0] + ((q[0] - p[0]) * r) / L, p[1] + ((q[1] - p[1]) * r) / L]; };
const ligHtml = (name: string) => (name === 'NH3' ? 'NH<sub>3</sub>' : name);

/** p. 210, path data: each en's two control points from the metal, in points, as the book curves them. */
const EN_CTRL: Record<string, [P, P]> = {
  'p1-m2': [[18.654, -14.233], [4.634, -15.517]],
  'm1-p2': [[-18.662, 14.217], [-4.639, 15.502]],
  'm2-m3': [[-18.474, 14.123], [-13.345, 26.811]],
};
function enCurve(p: Panel, a: Vx, b: Vx, n = 28): P[] {
  const P0 = pos(p, a), P3 = pos(p, b), [c1, c2] = EN_CTRL[`${a}-${b}`], k = p.S / K52, f = p.flip ? -1 : 1;
  const P1: P = [p.c[0] + f * k * c1[0], p.c[1] + k * c1[1]], P2: P = [p.c[0] + f * k * c2[0], p.c[1] + k * c2[1]];
  return Array.from({ length: n + 1 }, (_, i): P => {
    const t = i / n, u = 1 - t;
    return [u * u * u * P0[0] + 3 * u * u * t * P1[0] + 3 * u * t * t * P2[0] + t * t * t * P3[0], u * u * u * P0[1] + 3 * u * u * t * P1[1] + 3 * u * t * t * P2[1] + t * t * t * P3[1]];
  });
}
const ringOf = (p: Panel, v: Vx) => (p.lig[v] ? RL : RDONOR);

/** One octahedron: the twelve edges, the six bonds (near ones heavy, as printed), the en arcs, the atoms, the labels. */
function octa(s: Sketch, p: Panel) {
  VX.forEach((a, i) => VX.slice(i + 1).forEach((b) => {
    if (axisOf(a) !== axisOf(b)) path(s, [pos(p, a), pos(p, b)], { color: C.grey, w: 0.8, name: `${p.id}:edge:${a}-${b}` });
  }));
  VX.forEach((v) => {
    const q = pos(p, v), near = v3(v)[2] > 0;
    path(s, [toward(p.c, q, RM), toward(q, p.c, ringOf(p, v))], { color: near ? C.ink : C.slate, w: near ? 2.2 : 1.2, name: `${p.id}:bond:${v}` });
  });
  p.en.forEach(([a, b]) => path(s, enCurve(p, a, b), { w: 2.8, name: `${p.id}:en:${a}-${b}` }));
  VX.forEach((v) => {
    const q = pos(p, v), name = p.lig[v];
    if (!name) { s.dot(q[0], q[1], RDONOR, C.ink); return; }
    const hi = name === p.hi;
    s.add(`<circle cx="${r1(q[0])}" cy="${r1(q[1])}" r="${RL}" fill="#fff" stroke="${hi ? C.mari : C.ink}" stroke-width="${hi ? 2.4 : 1.5}"/>`);
    keep(s, circlePts(q, RL), `${p.id}:ring:${v}`);
  });
  s.add(`<circle cx="${r1(p.c[0])}" cy="${r1(p.c[1])}" r="${RM}" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/>`);
  keep(s, circlePts(p.c, RM), `${p.id}:metal`);
  const mw = mathW(p.metal, 12);
  s.labels.push({ text: p.metal, rect: [p.c[0] - mw / 2, p.c[1] - 4.3, p.c[0] + mw / 2, p.c[1] + 4.3] });
  s.text(p.c[0], p.c[1] + 4, p.metal, { size: 12 });
  p.labels.forEach(({ v, side, dy }) => {
    const q = pos(p, v), name = p.lig[v]!, col = name === p.hi ? C.amber : C.text, gap = RL + LABEL_GAP + 0.3, sided = p.flip ? (side === 'left' ? 'right' : side === 'right' ? 'left' : side) : side;
    if (sided === 'top') lab(s, q[0], q[1] - gap - 13 * (name === 'NH3' ? 0.36 : 0.22), ligHtml(name), { color: col });
    else if (sided === 'bottom') lab(s, q[0], q[1] + gap + 13 * 0.72, ligHtml(name), { color: col });
    else if (sided === 'right') lab(s, q[0] + gap, q[1] + 4.5 + (dy ?? 0), ligHtml(name), { anchor: 'start', color: col });
    else lab(s, q[0] - gap, q[1] + 4.5 + (dy ?? 0), ligHtml(name), { anchor: 'end', color: col });
  });
}
/** The book's square brackets, and the charge at the clear outer corner. */
function brackets(s: Sketch, x0: number, x1: number, y0: number, y1: number, charge: string, id: string) {
  path(s, [[x0 + 5, y0], [x0, y0], [x0, y1], [x0 + 5, y1]], { w: 1.2, name: `${id}:bracket:left` });
  path(s, [[x1 - 5, y0], [x1, y0], [x1, y1], [x1 - 5, y1]], { w: 1.2, name: `${id}:bracket:right` });
  lab(s, x1 + LABEL_GAP + 0.5, y0 + 10, charge, { anchor: 'start' });
}

/* ---------- reading a structure back off a drawing, and the octahedron's symmetry ---------- */
type Struct = { lig: Partial<Record<Vx, string>>; en: [Vx, Vx][] };
const vertexAt = (p: Panel, q: P) => VX.find((v) => close(len(pos(p, v), q), 0, 1e-6));
/** Each ring's ligand is the name printed nearest it; each en joins the vertices its curve ends on. */
function readBack(s: Sketch, p: Panel, boxes: { text: string; rect: Rect }[]): Struct {
  const lig: Struct['lig'] = {};
  namesOf(s, `${p.id}:ring:`).forEach((name) => {
    const v = name.split(':')[2] as Vx, q = pos(p, v);
    const best = boxes.map((b) => ({ b, d: rectDist(b.rect, q) })).sort((x, y) => x.d - y.d)[0];
    lig[v] = best.b.text;
  });
  const en = namesOf(s, `${p.id}:en:`).map((name): [Vx, Vx] => {
    const pts = lineOf(s, name);
    return [vertexAt(p, pts[0])!, vertexAt(p, pts[pts.length - 1])!];
  });
  return { lig, en };
}
/** The 48 ways an octahedron maps onto itself, as what they do to its three axes. */
type Op = { to: number[]; sign: number[]; det: number };
const OPS: Op[] = (() => {
  const out: Op[] = [];
  const perms: [number[], number][] = [[[0, 1, 2], 1], [[1, 2, 0], 1], [[2, 0, 1], 1], [[0, 2, 1], -1], [[2, 1, 0], -1], [[1, 0, 2], -1]];
  for (const [to, par] of perms) for (const a of [1, -1]) for (const b of [1, -1]) for (const c of [1, -1]) out.push({ to, sign: [a, b, c], det: par * a * b * c });
  return out;
})();
const apply = (o: Op, v: Vx): Vx => makeVx(o.to[axisOf(v)], o.sign[axisOf(v)] * signOf(v));
const canon = (lig: Struct['lig'], en: [Vx, Vx][]) => {
  const l = (Object.entries(lig) as [Vx, string][]).map(([v, n]) => `${n}@${v}`).sort().join(',');
  const e = en.map(([a, b]) => [a, b].sort().join('-')).sort().join(',');
  return `${l}|${e}`;
};
const moved = (o: Op, t: Struct) => {
  const lig: Struct['lig'] = {};
  (Object.entries(t.lig) as [Vx, string][]).forEach(([v, n]) => { lig[apply(o, v)] = n; });
  return canon(lig, t.en.map(([a, b]): [Vx, Vx] => [apply(o, a), apply(o, b)]));
};
/** How many reflections (or other improper operations) carry a structure onto itself: none means it is chiral. */
const improperFixing = (t: Struct) => OPS.filter((o) => o.det < 0 && moved(o, t) === canon(t.lig, t.en));
/** Classes of an arrangement under the 24 rotations. */
const rotationClasses = (list: Struct[]) => {
  const seen = new Map<string, Struct>();
  list.forEach((t) => {
    const key = OPS.filter((o) => o.det > 0).map((o) => moved(o, t)).sort()[0];
    if (!seen.has(key)) seen.set(key, t);
  });
  return [...seen.values()];
};

/* ===================================================================== */
/* Figure 5.1 · cis and trans [Cr(NH₃)₄Br₂]⁺ (Topic 02, p. 208)            */
/* ===================================================================== */
const CAP51 = 'The cis and trans isomers of octahedral [Cr(NH<sub>3</sub>)<sub>4</sub>Br<sub>2</sub>]<sup>+</sup>: the two bromides adjacent (90°) or opposite (180°).';
const S51 = 1.1, HB51 = 76.8, CY51 = 75, TOP51 = 2, BOT51 = 146, ARC51 = 0.63;
const CIS51: Panel = {
  id: 'a', c: [78, CY51], S: S51, metal: 'Cr', hi: 'Br', en: [],
  lig: { p3: 'Br', p1: 'Br', m1: 'NH3', m2: 'NH3', p2: 'NH3', m3: 'NH3' },
  labels: [{ v: 'p3', side: 'top' }, { v: 'p1', side: 'right' }, { v: 'm1', side: 'left' }, { v: 'm2', side: 'left', dy: -4 }, { v: 'p2', side: 'right', dy: 6 }, { v: 'm3', side: 'bottom' }],
};
const TRANS51: Panel = {
  id: 'b', c: [249, CY51], S: S51, metal: 'Cr', hi: 'Br', en: [],
  lig: { p3: 'Br', m3: 'Br', p1: 'NH3', m1: 'NH3', m2: 'NH3', p2: 'NH3' },
  labels: [{ v: 'p3', side: 'top' }, { v: 'm3', side: 'bottom' }, { v: 'p1', side: 'right' }, { v: 'm1', side: 'left' }, { v: 'm2', side: 'left', dy: -4 }, { v: 'p2', side: 'right', dy: 6 }],
};
/** The 90° arc: the great circle from one Br to the other, as the projection shows it. */
const arc51 = (n = 30): P[] => {
  const a = AX[2], b = AX[0], c = CIS51.c, k = S51 * ARC51;
  return Array.from({ length: n + 1 }, (_, i): P => {
    const t = (i / n) * (Math.PI / 2);
    return [c[0] + k * (Math.cos(t) * a[0] + Math.sin(t) * b[0]), c[1] + k * (Math.cos(t) * a[1] + Math.sin(t) * b[1])];
  });
};
const ligBoxes = (s: Sketch, names: string[]) => s.labels.filter((l) => names.includes(l.text));
const fig51: Diagram = {
  id: 'c12-05-fig-5.1',
  topic: 1,
  name: 'cis and trans [Cr(NH₃)₄Br₂]⁺',
  cases: [{ chip: 'cis and trans', cap: CAP51 }],
  draw() {
    const s = new Sketch(W, 196);
    octa(s, CIS51);
    path(s, arc51(), { color: C.mari, w: 1.8, name: 'arc' });
    octa(s, TRANS51);
    [CIS51, TRANS51].forEach((p) => brackets(s, p.c[0] - HB51, p.c[0] + HB51, TOP51, BOT51, '+', p.id));
    lab(s, CIS51.c[0] + 40, CY51 - 36, '90°', { color: C.amber });
    lab(s, CIS51.c[0], BOT51 + 20, '(a) cis', { size: 14 });
    lab(s, TRANS51.c[0], BOT51 + 20, '(b) trans', { size: 14 });
    lab(s, TRANS51.c[0], BOT51 + 40, 'Br–Cr–Br = 180°', { size: 14, color: C.amber });
    return s;
  },
  check() {
    const s = fig51.draw(fig51.cases[0]), out: Check[] = [];
    const names = ligBoxes(s, ['Br', 'NH3']);
    const a = readBack(s, CIS51, names), b = readBack(s, TRANS51, names);
    const sites = (t: Struct, n: string) => (Object.entries(t.lig) as [Vx, string][]).filter(([, m]) => m === n).map(([v]) => v);
    out.push(['Read back off the drawing, each panel has 2 Br and 4 NH₃, each printed beside its own ring, on six vertices: the Ma₄b₂ of the formula, CN = 6', [a, b].every((t) => sites(t, 'Br').length === 2 && sites(t, 'NH3').length === 4)]);
    out.push(['Oxidation state: x + 4(0) + 2(−1) = +1 gives Cr +3, and each bracket prints the charge +', 3 + 4 * 0 + 2 * -1 === 1 && s.labels.filter((l) => l.text === '+').length === 2]);
    const dots = [dot3(AX3[0], AX3[1]), dot3(AX3[0], AX3[2]), dot3(AX3[1], AX3[2])].map((d) => Math.abs(d) / dot3(AX3[0], AX3[0])), lens = AX3.map((x) => Math.sqrt(dot3(x, x)));
    out.push([`The book's view (p. 208, path data) is a true projection of an octahedron: with depth added, its axes are perpendicular (worst ${fmt(Math.max(...dots) * 100, 2)}% off) and equal (${lens.map((l) => fmt(l, 2)).join(', ')} pt)`, Math.max(...dots) < 0.002 && Math.max(...lens) - Math.min(...lens) < 0.1]);
    const edges = namesOf(s, 'a:edge:');
    out.push([`Twelve edges, each joining two perpendicular vertices; six bonds from the metal to the six vertices, the three on the reader's side heavy, as printed (${VX.filter((v) => v3(v)[2] > 0).join(', ')})`, edges.length === 12 && edges.every((n) => { const [x, y] = n.split(':')[2].split('-') as Vx[]; return close(angle3(v3(x), v3(y)), 90, 0.2); }) && namesOf(s, 'a:bond:').length === 6 && VX.filter((v) => v3(v)[2] > 0).sort().join() === ['m1', 'p2', 'p3'].sort().join()]);
    const [x1, x2] = sites(a, 'Br'), [y1, y2] = sites(b, 'Br');
    const cis = angle3(v3(x1), v3(x2)), trans = angle3(v3(y1), v3(y2));
    const flat = (Math.acos((AX[2][0] * AX[0][0] + AX[2][1] * AX[0][1]) / (Math.hypot(...AX[2]) * Math.hypot(...AX[0]))) * 180) / Math.PI;
    out.push([`Br–Cr–Br, measured in three dimensions off the drawn vertices: ${fmt(cis, 1)}° in (a), ${fmt(trans, 1)}° in (b), the printed 90° and 180° (on the flat page the cis pair stands ${fmt(flat, 1)}° apart, as any 90° seen at a slant; the book's the same)`, close(cis, 90, 0.2) && close(trans, 180, 0.2) && hasLabel(s, '90°') && hasLabel(s, 'Br–Cr–Br = 180°')]);
    const arc = lineOf(s, 'arc'), det = AX[2][0] * AX[0][1] - AX[2][1] * AX[0][0];
    const coord = (q: P): P => { const dx = (q[0] - CIS51.c[0]) / (S51 * ARC51), dy = (q[1] - CIS51.c[1]) / (S51 * ARC51); return [(dx * AX[0][1] - dy * AX[0][0]) / det, (AX[2][0] * dy - AX[2][1] * dx) / det]; };
    const cs = arc.map(coord);
    out.push(['The arc, read back, starts on the up Br bond, ends on the right Br bond and is a quarter of a great circle at every point', close(cs[0][1], 0) && close(cs[cs.length - 1][0], 0) && cs.every(([u, v]) => close(Math.hypot(u, v), 1, 1e-9) && u > -1e-9 && v > -1e-9)]);
    const all = VX.flatMap((u, i) => VX.slice(i + 1).map((v): Struct => ({ lig: { [u]: 'Br', [v]: 'Br', ...Object.fromEntries(VX.filter((w) => w !== u && w !== v).map((w) => [w, 'NH3'])) }, en: [] })));
    const classes = rotationClasses(all), byAngle = classes.map((t) => { const [u, v] = sites(t, 'Br'); return Math.round(angle3(v3(u), v3(v))); }).sort((p, q) => p - q);
    out.push([`Enumerated: the ${all.length} ways to put 2 Br on 6 vertices fall into ${classes.length} under the 24 rotations, at ${byAngle.join('° and ')}°; the two drawn panels are those two`, all.length === 15 && classes.length === 2 && byAngle.join() === '90,180' && classes.some((t) => OPS.some((o) => o.det > 0 && moved(o, t) === canon(a.lig, a.en))) && classes.some((t) => OPS.some((o) => o.det > 0 && moved(o, t) === canon(b.lig, b.en)))]);
    out.push(['The labels as printed: Br, NH₃, Cr, 90°, (a) cis, (b) trans, Br–Cr–Br = 180°', ['Br', 'NH3', 'Cr', '90°', '(a) cis', '(b) trans', 'Br–Cr–Br = 180°'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 5.2 · [Co(en)₂(NH₃)Cl]²⁺ (Topic 02, p. 210)                      */
/* ===================================================================== */
const CAP52 = '[Co(en)<sub>2</sub>(NH<sub>3</sub>)Cl]<sup>2+</sup>: the achiral trans isomer, and the cis isomer existing as a mirror-image (d/l) pair.';
const S52 = 1.36, H1 = 2, H2 = 214, ROW52 = 158, CY52 = 80.5;
const XM = 160, D52 = 99;
const HN = 56, HCL = 74.2;
const TRANS52: Panel = {
  id: 'a', c: [W / 2, H1 + CY52], S: S52, metal: 'Co', hi: 'Cl',
  lig: { p3: 'NH3', m3: 'Cl' }, en: [['p1', 'm2'], ['m1', 'p2']],
  labels: [{ v: 'p3', side: 'top' }, { v: 'm3', side: 'bottom' }],
};
const CIS52: Panel = {
  id: 'b', c: [XM - D52, H2 + CY52], S: S52, metal: 'Co', hi: 'Cl',
  lig: { p3: 'NH3', p1: 'Cl' }, en: [['m2', 'm3'], ['m1', 'p2']],
  labels: [{ v: 'p3', side: 'top' }, { v: 'p1', side: 'right' }],
};
const MIRROR52: Panel = { ...CIS52, id: 'c', c: [XM + D52, H2 + CY52], flip: true };
const EN_AT: Record<string, P> = { a: [32, -39], b: [-37, 46], c: [37, 46] };
const fig52: Diagram = {
  id: 'c12-05-fig-5.2',
  topic: 1,
  name: 'Stereoisomers of [Co(en)₂(NH₃)Cl]²⁺',
  cases: [{ chip: 'trans, cis, mirror', cap: CAP52 }],
  draw() {
    const s = new Sketch(W, 404);
    [TRANS52, CIS52, MIRROR52].forEach((p) => {
      octa(s, p);
      lab(s, p.c[0] + EN_AT[p.id][0], p.c[1] + EN_AT[p.id][1], 'en');
    });
    brackets(s, TRANS52.c[0] - HN, TRANS52.c[0] + HN, H1, H1 + ROW52, '2+', 'a');
    brackets(s, CIS52.c[0] - HN, CIS52.c[0] + HCL, H2, H2 + ROW52, '2+', 'b');
    brackets(s, MIRROR52.c[0] - HCL, MIRROR52.c[0] + HN, H2, H2 + ROW52, '2+', 'c');
    lab(s, TRANS52.c[0], H1 + ROW52 + 19, '(a) trans', { size: 14 });
    lab(s, CIS52.c[0] + 8, H2 + ROW52 + 19, '(b) cis', { size: 14 });
    lab(s, MIRROR52.c[0] - 2, H2 + ROW52 + 19, '(c) mirror image of (b)', { size: 13 });
    path(s, [[XM, H2], [XM, 402]], { color: C.slate, w: 1.2, dash: true, name: 'mirror' });
    s.tag(XM, H2 - 26, 'mirror plane', XM, H2, { anchor: 'middle', bare: true });
    return s;
  },
  check() {
    const s = fig52.draw(fig52.cases[0]), out: Check[] = [];
    const names = ligBoxes(s, ['NH3', 'Cl']);
    const a = readBack(s, TRANS52, names), b = readBack(s, CIS52, names), c = readBack(s, MIRROR52, names);
    const site = (t: Struct, n: string) => (Object.entries(t.lig) as [Vx, string][]).find(([, m]) => m === n)![0];
    out.push(['Oxidation state and count: x + 2(0) + 0 + (−1) = +2 gives Co +3; CN = 2(2) + 1 + 1 = 6; each bracket prints 2+', 3 + 2 * 0 + 0 - 1 === 2 && 2 * 2 + 1 + 1 === 6 && s.labels.filter((l) => l.text === '2+').length === 3]);
    const axes = AX52.every((q, i) => close(q[0], AX[i][0] * K52, 0.05) && close(q[1], AX[i][1] * K52, 0.05));
    out.push([`The book's three octahedra on p. 210 (path data) use the axes of p. 208 at ${fmt(K52, 2)} of the size`, axes]);
    const panels: [string, Struct][] = [['(a)', a], ['(b)', b], ['(c)', c]];
    const adjacent = panels.every(([, t]) => t.en.length === 2 && t.en.every(([u, v]) => close(angle3(v3(u), v3(v)), 90, 0.2)));
    out.push(['Each en, read back, joins two vertices 90° apart: it spans adjacent positions, never opposite ones', adjacent]);
    const full = panels.every(([, t]) => { const used = [...Object.keys(t.lig), ...t.en.flat()].sort(); return used.join() === [...VX].sort().join(); });
    out.push(['In each panel NH₃, Cl and the four ends of the two en fill the six vertices, each exactly once; four solid donor dots, one on each en end', full && s.points.length === 12]);
    const ang = (t: Struct) => angle3(v3(site(t, 'NH3')), v3(site(t, 'Cl')));
    out.push([`NH₃–Co–Cl, measured in three dimensions: ${fmt(ang(a), 1)}° in (a), ${fmt(ang(b), 1)}° in (b), ${fmt(ang(c), 1)}° in (c): trans, cis, cis`, close(ang(a), 180, 0.2) && close(ang(b), 90, 0.2) && close(ang(c), 90, 0.2)]);
    const fixA = improperFixing(a), fixB = improperFixing(b);
    // a true mirror: done twice it is nothing, and it leaves one direction reversed (trace +1)
    const mirrorsA = fixA.filter((o) => VX.every((v) => apply(o, apply(o, v)) === v) && o.to.reduce((tr, to, i) => tr + (to === i ? o.sign[i] : 0), 0) === 1);
    const onAxis = mirrorsA.every((o) => apply(o, 'p3') === 'p3');
    out.push([`(a) is achiral: of the octahedron's 24 reflections and improper turns, ${fixA.length} carry it onto itself, ${mirrorsA.length} of them true mirror planes through the NH₃–Co–Cl axis`, fixA.length >= 1 && mirrorsA.length >= 1 && onAxis]);
    out.push([`(b) is chiral: ${fixB.length} of those 24 carry it onto itself, so it has no mirror plane, no centre and no improper axis`, fixB.length === 0]);
    const lines = namesOf(s, 'b:').filter((n) => /:(edge|bond|ring|en|metal)/.test(n));
    const centre = (pts: P[]): P => [(Math.min(...pts.map((w) => w[0])) + Math.max(...pts.map((w) => w[0]))) / 2, (Math.min(...pts.map((w) => w[1])) + Math.max(...pts.map((w) => w[1]))) / 2];
    const reflected = lines.length > 0 && lines.every((n) => {
      const p = lineOf(s, n), q = lineOf(s, `c${n.slice(1)}`);
      if (n.includes(':ring:') || n.includes(':metal')) { const [u, w] = [centre(p), centre(q)]; return close(u[0] + w[0], 2 * XM, 1e-9) && close(u[1], w[1], 1e-9); }
      return p.length === q.length && p.every(([x, y], i) => close(x + q[i][0], 2 * XM, 1e-9) && close(y, q[i][1], 1e-9));
    });
    const m = lineOf(s, 'mirror');
    const dotsMirror = VX.filter((v) => !CIS52.lig[v]).every((v) => { const q = pos(CIS52, v), u = pos(MIRROR52, v); return close(q[0] + u[0], 2 * XM, 1e-9) && close(q[1], u[1], 1e-9) && s.points.some((d) => close(d.x, u[0]) && close(d.y, u[1])); });
    out.push([`(c) is truly (b) mirrored: all ${lines.length} of (b)'s lines, curves and rings, and its donor dots, read back as (c)'s reflected in the drawn line x = ${XM}, heavy bonds included`, reflected && dotsMirror && m[0][0] === XM && m[1][0] === XM && canon(b.lig, b.en) === canon(c.lig, c.en)]);
    // a rotation is a map of the three axes that keeps their handedness; take (b)'s axes to (c)'s vertices
    const base = Math.sign(det3(v3('p1'), v3('p2'), v3('p3')));
    const rotations = OPS.filter((o) => Math.sign(det3(v3(apply(o, 'p1'), true), v3(apply(o, 'p2'), true), v3(apply(o, 'p3'), true))) === base);
    const onto = rotations.filter((o) => moved(o, b) === canon(c.lig, c.en));
    out.push([`(b) and (c) are not superimposable: none of the ${rotations.length} rotations takes (b)'s three-dimensional positions onto (c)'s`, rotations.length === 24 && onto.length === 0]);
    const arrangements: Struct[] = [];
    VX.forEach((u) => VX.forEach((v) => {
      if (u === v) return;
      const rest = VX.filter((w) => w !== u && w !== v), first = rest[0];
      rest.slice(1).forEach((partner) => {
        const others = rest.filter((w) => w !== first && w !== partner);
        if (axisOf(first) !== axisOf(partner) && axisOf(others[0]) !== axisOf(others[1])) arrangements.push({ lig: { [u]: 'NH3', [v]: 'Cl' }, en: [[first, partner], [others[0], others[1]]] });
      });
    }));
    const classes = rotationClasses(arrangements);
    const nTrans = classes.filter((t) => close(ang(t), 180, 0.2)).length, nCis = classes.filter((t) => close(ang(t), 90, 0.2)).length;
    const hit = (t: Struct) => classes.findIndex((k) => OPS.some((o) => o.det > 0 && moved(o, t) === canon(k.lig, k.en)));
    out.push([`Enumerated: every way to place NH₃, Cl and two en on adjacent pairs gives ${classes.length} stereoisomers under the rotations (${nTrans} trans, ${nCis} cis), worked example 4's 3; (a) and (b) are two of them`, classes.length === 3 && nTrans === 1 && nCis === 2 && hit(a) >= 0 && hit(b) >= 0 && hit(a) !== hit(b)]);
    const en = [...s.labels.filter((l) => l.text === 'en')];
    const near = [TRANS52, CIS52, MIRROR52].every((p, i) => Math.min(...p.en.map(([u, v]) => boxToLine(en[i].rect, lineOf(s, `${p.id}:en:${u}-${v}`)))) < 26);
    out.push(['Each panel\'s en label stands beside an en arc', en.length === 3 && near]);
    const metalGap = Math.min(...[TRANS52, CIS52, MIRROR52].flatMap((p) => p.en.map(([u, v]) => Math.min(...lineOf(s, `${p.id}:en:${u}-${v}`).map((q) => len(q, p.c))) - RM)));
    out.push([`The en arcs pass clear of the metal's ring, by ${fmt(metalGap, 1)} px at the closest`, metalGap > 2]);
    out.push(['The labels as printed: NH₃, Cl, Co, en, (a) trans, (b) cis, (c) mirror image of (b), mirror plane', ['NH3', 'Cl', 'Co', 'en', '(a) trans', '(b) cis', '(c) mirror image of (b)'].every((t) => hasLabel(s, t)) && s.tags.some((t) => t.name === 'mirror plane')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · the two splitting patterns (Additional topic C, p. 243)    */
/* ===================================================================== */
const CAPC1 = 'The two splitting patterns side by side. (a) Octahedral: t<sub>2g</sub> lowered by 0.4 Δ<sub>o</sub>, e<sub>g</sub> raised by 0.6 Δ<sub>o</sub>; the g subscripts record the centre of symmetry. (b) Tetrahedral: inverted and smaller, Δ<sub>t</sub> = (4/9)Δ<sub>o</sub>; e below, t<sub>2</sub> above, no g subscripts, essentially always high spin.';
/** p. 243, path data, in points, y down: the two barycentres (the same line), the four levels, and the dashes each level is built of. */
const BOOKC = { bary: 420.7, eg: 362.3, t2g: 459.5, t2: 403.4, e: 446.6, dashes: { eg: 2, t2g: 3, t2: 3, e: 2 } };
const DO = 168, DT = (4 / 9) * DO, BARY = 148;
const LEVC = { eg: BARY - 0.6 * DO, t2g: BARY + 0.4 * DO, t2: BARY - 0.4 * DT, e: BARY + 0.6 * DT };
const DASH = 14, GAP = 3;
type Level = { key: keyof typeof LEVC; n: number; name: string; value: string };
function pattern(s: Sketch, o: { cx: number; x0: number; x1: number; arrowX: number; levels: Level[] }) {
  path(s, [[o.x0, BARY], [o.x1, BARY]], { color: C.grey, w: 1, dash: true, name: `bary-${o.cx}` });
  o.levels.forEach(({ key, n, name, value }) => {
    const y = LEVC[key], w = n * DASH + (n - 1) * GAP, a = o.cx - w / 2;
    for (let i = 0; i < n; i++) path(s, [[a + i * (DASH + GAP), y], [a + i * (DASH + GAP) + DASH, y]], { w: 2.4, name: `${key}-${i}` });
    lab(s, o.cx - 28, y + 4.5, value, { anchor: 'end', color: C.slate });
    lab(s, o.cx + 28, y + 4.5, name, { size: 14, anchor: 'start' });
  });
  const [hi, lo] = [LEVC[o.levels[0].key], LEVC[o.levels[1].key]], mid = (hi + lo) / 2;
  s.vec(o.arrowX, mid, o.arrowX, hi + 2, { color: C.mari, w: 1.7 });
  s.vec(o.arrowX, mid, o.arrowX, lo - 2, { color: C.mari, w: 1.7 });
  keep(s, [[o.arrowX, hi + 2], [o.arrowX, lo - 2]], `arrow-${o.cx}`);
}
const figC1: Diagram = {
  id: 'c12-05-C-d1',
  topic: 8,
  name: 'Octahedral and tetrahedral splitting',
  cases: [{ chip: 'Two patterns', cap: CAPC1 }],
  draw() {
    const s = new Sketch(W, 280);
    lab(s, 76, 20, '(a) octahedral', { size: 14 });
    lab(s, 240, 20, '(b) tetrahedral', { size: 14 });
    pattern(s, { cx: 76, x0: 4, x1: 126, arrowX: 130, levels: [{ key: 'eg', n: 2, name: 'e<sub>g</sub>', value: '+0.6 Δ<sub>o</sub>' }, { key: 't2g', n: 3, name: 't<sub>2g</sub>', value: '−0.4 Δ<sub>o</sub>' }] });
    pattern(s, { cx: 240, x0: 168, x1: 284, arrowX: 288, levels: [{ key: 't2', n: 3, name: 't<sub>2</sub>', value: '+0.4 Δ<sub>t</sub>' }, { key: 'e', n: 2, name: 'e', value: '−0.6 Δ<sub>t</sub>' }] });
    lab(s, 136, BARY + 5, 'Δ<sub>o</sub>', { anchor: 'start', color: C.amber, size: 14 });
    lab(s, 294, BARY + 2, 'Δ<sub>t</sub> =', { anchor: 'start', color: C.amber });
    lab(s, 294, BARY + 21, '(4/9)Δ<sub>o</sub>', { anchor: 'start', color: C.amber });
    s.tag(8, BARY + 10, 'barycentre', 30, BARY);
    s.tag(172, BARY + 10, 'barycentre', 194, BARY);
    lab(s, 74, 244, 'centre of symmetry:', { size: 12.5, color: C.slate });
    lab(s, 74, 261, 'g subscripts', { size: 12.5, color: C.slate });
    lab(s, 244, 244, 'no centre of symmetry: no g;', { size: 12.5, color: C.slate });
    lab(s, 244, 261, 'essentially always high spin', { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = figC1.draw(figC1.cases[0]), out: Check[] = [];
    const yOf = (k: string) => lineOf(s, `${k}-0`)[0][1];
    const count = (k: string) => namesOf(s, `${k}-`).length;
    const b = lineOf(s, 'bary-76')[0][1];
    const eg = (b - yOf('eg')) / DO, t2g = (yOf('t2g') - b) / DO, spanO = yOf('t2g') - yOf('eg'), spanT = yOf('e') - yOf('t2'), t2 = (b - yOf('t2')) / spanT, e = (yOf('e') - b) / spanT;
    out.push([`Read back off the drawing: eg ${fmt(eg)} Δo above and t2g ${fmt(t2g)} Δo below the barycentre, t2 ${fmt(t2)} Δt above and e ${fmt(e)} Δt below`, close(eg, 0.6) && close(t2g, 0.4) && close(t2, 0.4) && close(e, 0.6) && close(spanO, DO)]);
    out.push(['Both patterns share one barycentre and one energy scale, and Δt/Δo reads 4/9 off the drawn levels', close(lineOf(s, 'bary-240')[0][1], b) && close(spanT / spanO, 4 / 9)]);
    const B = BOOKC, bO = B.t2g - B.eg, bT = B.e - B.t2;
    out.push([`The same in the book (p. 243, path data): Δo ${fmt(bO, 1)} pt, Δt ${fmt(bT, 1)} pt = ${fmt(bT / bO, 3)} Δo; eg ${fmt((B.bary - B.eg) / bO, 3)}, t2g ${fmt((B.t2g - B.bary) / bO, 3)}, t2 ${fmt((B.bary - B.t2) / bT, 3)}, e ${fmt((B.e - B.bary) / bT, 3)}`, close(bT / bO, 4 / 9, 0.002) && close((B.bary - B.eg) / bO, 0.6, 0.002) && close((B.t2g - B.bary) / bO, 0.4, 0.002) && close((B.bary - B.t2) / bT, 0.4, 0.002) && close((B.e - B.bary) / bT, 0.6, 0.002)]);
    const nums = { eg: count('eg'), t2g: count('t2g'), t2: count('t2'), e: count('e') };
    out.push([`The orbitals counted off the drawing: ${nums.t2g} in t2g, ${nums.eg} in eg, ${nums.t2} in t2, ${nums.e} in e, the book's own dash counts`, nums.t2g === B.dashes.t2g && nums.eg === B.dashes.eg && nums.t2 === B.dashes.t2 && nums.e === B.dashes.e]);
    const sumO = nums.t2g * (yOf('t2g') - b) - nums.eg * (b - yOf('eg')), sumT = nums.e * (yOf('e') - b) - nums.t2 * (b - yOf('t2'));
    out.push(['It is a true barycentre: orbital count × shift cancels on the drawing, 3(−0.4) + 2(+0.6) = 0 and 2(−0.6) + 3(+0.4) = 0', close(sumO, 0, 1e-9) && close(sumT, 0, 1e-9)]);
    out.push(['The order inverts: the set of three lies below in (a) and above in (b); the tetrahedral gap is the smaller', yOf('t2g') > b && yOf('eg') < b && yOf('t2') < b && yOf('e') > b && spanT < spanO]);
    const ends = (cx: number, hi: string, lo: string) => { const a = lineOf(s, `arrow-${cx}`); return close(a[0][1], yOf(hi) + 2) && close(a[1][1], yOf(lo) - 2); };
    out.push(['Each double arrow runs level to level, 2 px short at each end, and carries its own label: Δo and Δt = (4/9)Δo', ends(76, 'eg', 't2g') && ends(240, 't2', 'e') && hasLabel(s, 'Δo') && hasLabel(s, 'Δt =') && hasLabel(s, '(4/9)Δo')]);
    const onLevel = (text: string, y: number) => { const l = s.labels.find((x) => x.text === text); return !!l && l.rect[1] < y && l.rect[3] > y; };
    out.push(['Each value and each set\'s name stands on its own level', onLevel('+0.6 Δo', yOf('eg')) && onLevel('eg', yOf('eg')) && onLevel('−0.4 Δo', yOf('t2g')) && onLevel('t2g', yOf('t2g')) && onLevel('+0.4 Δt', yOf('t2')) && onLevel('t2', yOf('t2')) && onLevel('−0.6 Δt', yOf('e')) && onLevel('e', yOf('e'))]);
    out.push(['The labels as printed: (a) octahedral, (b) tetrahedral, barycentre twice, and the two notes (each on two lines)', ['(a) octahedral', '(b) tetrahedral', 'centre of symmetry:', 'g subscripts', 'no centre of symmetry: no g;', 'essentially always high spin'].every((t) => hasLabel(s, t)) && s.tags.filter((t) => t.name === 'barycentre').length === 2]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_05: Diagram[] = [fig51, fig52, figC1];
