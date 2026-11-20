import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 12 (Practical Chemistry), drawer D2: Topic 02
 * (Preparations, index 1) and Topic 05 (Thermochemistry, sols, kinetics,
 * index 4). The numbers, names and observations are those of
 * content/textbooks/chem-12-12/topics-2-5.ts.
 *
 *   c12-12-02-d1  recrystallisation flow chart
 *   c12-12-02-d2  potash alum and Mohr's salt, two flow charts (two chips)
 *   c12-12-02-d3  reflux apparatus for acetanilide, and the pour into ice water
 *   c12-12-02-d4  acetanilide to p-nitroacetanilide, and the NO2+ electrophile
 *   c12-12-02-d5  aniline yellow, two routes (two chips)
 *   c12-12-02-d6  the iodoform reaction scheme
 *   c12-12-05-d1  beaker calorimeter
 *   c12-12-05-d2  temperature-time graph of the neutralisation run
 *   c12-12-05-d3  lyophilic and lyophobic sols (two chips)
 *   c12-12-05-d4  the iodine clock reaction
 *   c12-12-05-d5  rate against [I-] for the worked example (two chips)
 *
 * Flow charts are boxes drawn as registered tags (so the audit keeps every
 * label off them) joined by arrows whose routes are checked against the
 * boxes' edges. Structures are hexagons with substituents at computed
 * vertices; the checks read the substituent angles back (para = 180 degrees,
 * ortho = 60 degrees) and count atoms and charge in every equation drawn.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
/** A point at azimuth `az` degrees (anticlockwise on screen, 0 = right) and distance r from c. */
const polar = (c: P, az: number, r: number): P => [c[0] + r * Math.cos(rad(az)), c[1] - r * Math.sin(rad(az))];
const wOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- chemistry helpers: display markup and atom counts ---------- */
/** "Al2(SO4)3", "S2O3^2−" to markup with subscripts and a superscript charge. */
const chem = (f: string) => {
  const [a, c] = f.split('^');
  return a.replace(/([A-Za-z)])(\d+)/g, '$1<sub>$2</sub>') + (c ? `<sup>${c}</sup>` : '');
};
/** A whole equation line: each space-separated token through chem, "+" and "→" left alone. */
const eq = (line: string) => line.split(' ').map((t) => (t === '+' || t === '→' ? t : chem(t))).join(' ');
const MASS: Record<string, number> = { H: 1.008, C: 12.011, N: 14.007, O: 15.999, Na: 22.99, Cl: 35.45, I: 126.904, S: 32.06, K: 39.098, Al: 26.982, Fe: 55.845, As: 74.922 };
type Atoms = Record<string, number>;
/** Atom counts of a formula such as "KAl(SO4)2·12H2O" or "C6H5NH2" (charge after ^ ignored). */
function atoms(f: string): Atoms {
  const out: Atoms = {};
  const body = f.replace(/\^.*$/, '');
  for (const part of body.split('·')) {
    const m = /^(\d*)(.*)$/.exec(part)!;
    const k = m[1] ? +m[1] : 1;
    const stack: Atoms[] = [{}];
    const re = /([A-Z][a-z]?)(\d*)|\(|\)(\d*)/g;
    let t: RegExpExecArray | null;
    while ((t = re.exec(m[2]))) {
      if (t[1]) { const top = stack[stack.length - 1]; top[t[1]] = (top[t[1]] ?? 0) + (t[2] ? +t[2] : 1); }
      else if (t[0] === '(') stack.push({});
      else { const g = stack.pop()!, n = t[3] ? +t[3] : 1, top = stack[stack.length - 1]; for (const e in g) top[e] = (top[e] ?? 0) + g[e] * n; }
    }
    for (const e in stack[0]) out[e] = (out[e] ?? 0) + stack[0][e] * k;
  }
  return out;
}
const charge = (f: string) => { const c = f.split('^')[1]; if (!c) return 0; return (/[−-]/.test(c) ? -1 : 1) * (parseInt(c, 10) || 1); };
/** Atoms and charge of one side, "2HSO4^− + H3O^+". */
function side(s: string): { a: Atoms; q: number } {
  const a: Atoms = {};
  let q = 0;
  for (const term of s.split(' + ')) {
    const m = /^(\d*)(.*)$/.exec(term.trim())!, k = m[1] ? +m[1] : 1;
    const at = atoms(m[2]);
    for (const e in at) a[e] = (a[e] ?? 0) + at[e] * k;
    q += charge(m[2]) * k;
  }
  return { a, q };
}
function balanced(e: string): boolean {
  const [l, r] = e.split(' → ').map(side);
  const els = new Set([...Object.keys(l.a), ...Object.keys(r.a)]);
  return l.q === r.q && [...els].every((x) => (l.a[x] ?? 0) === (r.a[x] ?? 0));
}
const addAtoms = (...fs: string[]): Atoms => { const o: Atoms = {}; fs.forEach((f) => { const a = atoms(f); for (const e in a) o[e] = (o[e] ?? 0) + a[e]; }); return o; };
const sameAtoms = (a: Atoms, b: Atoms) => [...new Set([...Object.keys(a), ...Object.keys(b)])].every((e) => (a[e] ?? 0) === (b[e] ?? 0));
const massOf = (a: Atoms) => Object.entries(a).reduce((n, [e, k]) => n + MASS[e] * k, 0);
const formulaText = (a: Atoms) => ['C', 'H', ...Object.keys(a).filter((e) => e !== 'C' && e !== 'H').sort()].filter((e) => a[e]).map((e) => e + (a[e] > 1 ? a[e] : '')).join('');

/* ---------- drawing helpers (as in chemistry-11-09.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; free?: boolean };
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
  return [`Every tag and label stays at least ${LABEL_GAP} px clear of every drawn line: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
/** A symbol or word on the drawing, registered so tags keep clear of it. */
function lab(s: Sketch, x: number, y: number, html: string, size = 13, anchor: 'start' | 'middle' | 'end' = 'middle', color: string = C.text): Rect {
  const w = wOf(html, size) * 0.92, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * 0.3];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color });
  return rect;
}
/** The result, bottom right, ink-edged, maths in STIX; registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 14, lh = size + 6;
  const w = Math.max(...lines.map((t) => wOf(t, size))) + 26, h = lines.length * lh + 12;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="14" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 6 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}
/** A row of equation pieces centred on cx, one of them (hi) in the highlight colour; returns each piece's span. */
function row(s: Sketch, y: number, segs: { t: string; hi?: boolean }[], size = 13.5, cx = W / 2): { t: string; x0: number; x1: number }[] {
  const gap = 6, ws = segs.map((g) => wOf(g.t, size)), total = ws.reduce((a, b) => a + b, 0) + gap * (segs.length - 1);
  let x = cx - total / 2;
  return segs.map((g, i) => {
    const x0 = x;
    s.sym(x0, y, g.t, { size, anchor: 'start', color: g.hi ? C.amber : C.text });
    x += ws[i] + gap;
    return { t: g.t, x0, x1: x0 + ws[i] };
  });
}

/* ---------- flow charts: boxes (registered as tags) and arrows ---------- */
type NodeSpec = { id: string; lines: string[]; hi?: boolean; dash?: boolean };
type FNode = NodeSpec & { x: number; y: number; w: number; h: number };
type FEdge = { from: string; to: string; pts: P[] };
const FS = 12.5, LHT = 16;
const hFor = (n: number) => n * LHT + 14;
const FLOW = new WeakMap<Sketch, { nodes: FNode[]; edges: FEdge[] }>();
const flowOf = (s: Sketch) => { let f = FLOW.get(s); if (!f) { f = { nodes: [], edges: [] }; FLOW.set(s, f); } return f; };
const Bt = (n: FNode): P => [n.x + n.w / 2, n.y + n.h];
const Tp = (n: FNode): P => [n.x + n.w / 2, n.y];
const Lf = (n: FNode): P => [n.x, n.y + n.h / 2];
const Rt = (n: FNode): P => [n.x + n.w, n.y + n.h / 2];
function putNode(s: Sketch, n: FNode) {
  flowOf(s).nodes.push(n);
  const col = n.hi ? C.mari : C.ink;
  s.add(`<rect x="${r1(n.x)}" y="${r1(n.y)}" width="${r1(n.w)}" height="${r1(n.h)}" rx="9" fill="none" stroke="${col}" stroke-width="${n.hi ? 2.2 : 1.5}"${n.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  s.tags.push({ name: plain(n.lines.join(' ')), rect: [n.x, n.y, n.x + n.w, n.y + n.h], from: null, to: null });
  const y0 = n.y + n.h / 2 - ((n.lines.length - 1) * LHT) / 2 + FS * 0.36;
  n.lines.forEach((t, i) => s.text(n.x + n.w / 2, y0 + i * LHT, t, { size: FS, color: n.hi ? C.amber : C.text }));
}
function edge(s: Sketch, a: FNode, b: FNode, pts: P[], o: { dash?: boolean } = {}) {
  flowOf(s).edges.push({ from: a.id, to: b.id, pts });
  for (let i = 0; i < pts.length - 1; i++) {
    if (i === pts.length - 2) s.vec(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], { w: 1.6, dash: o.dash });
    else s.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], { color: C.ink, w: 1.6, dash: o.dash });
  }
}
/** A vertical column of boxes joined top to bottom. */
function column(s: Sketch, specs: NodeSpec[], x: number, w: number, y0: number, gap: number): FNode[] {
  let y = y0;
  const ns = specs.map((sp) => { const n: FNode = { ...sp, x, y, w, h: hFor(sp.lines.length) }; y += n.h + gap; return n; });
  ns.forEach((n) => putNode(s, n));
  ns.slice(1).forEach((n, i) => edge(s, ns[i], n, [Bt(ns[i]), Tp(n)]));
  return ns;
}
const colH = (specs: NodeSpec[], gap: number) => specs.reduce((h, sp) => h + hFor(sp.lines.length), 0) + gap * (specs.length - 1);
const onEdge = (n: FNode, p: P) => p[0] >= n.x - 0.6 && p[0] <= n.x + n.w + 0.6 && p[1] >= n.y - 0.6 && p[1] <= n.y + n.h + 0.6 && (Math.abs(p[0] - n.x) < 0.6 || Math.abs(p[0] - n.x - n.w) < 0.6 || Math.abs(p[1] - n.y) < 0.6 || Math.abs(p[1] - n.y - n.h) < 0.6);
const inside = (n: FNode, p: P, k = 1) => p[0] > n.x + k && p[0] < n.x + n.w - k && p[1] > n.y + k && p[1] < n.y + n.h - k;
/** What a flow chart must satisfy: arrows join two boxes by their edges, every box reachable, text fits, nothing crosses. */
function flowChecks(s: Sketch, sources: string[]): Check[] {
  const { nodes, edges } = flowOf(s), by = new Map(nodes.map((n) => [n.id, n]));
  const out: Check[] = [];
  const badEdge = edges.filter((e) => { const a = by.get(e.from), b = by.get(e.to); return !a || !b || a === b || !onEdge(a, e.pts[0]) || !onEdge(b, e.pts[e.pts.length - 1]); });
  out.push([`All ${edges.length} arrows join two different boxes and start and end on their edges`, badEdge.length === 0 && new Set(nodes.map((n) => n.id)).size === nodes.length]);
  const seen = new Set<string>(sources);
  for (let grew = true; grew;) { grew = false; edges.forEach((e) => { if (seen.has(e.from) && !seen.has(e.to)) { seen.add(e.to); grew = true; } }); }
  const lost = nodes.filter((n) => !seen.has(n.id)).map((n) => n.id);
  out.push([`Every one of the ${nodes.length} boxes is reached from the start${lost.length ? `: not ${lost.join(', ')}` : ''}`, lost.length === 0]);
  const wide = nodes.flatMap((n) => n.lines.filter((t) => mathW(t, FS) > n.w - 12).map((t) => plain(t)));
  out.push([`Every line of text fits inside its box${wide.length ? `: too wide ${wide.join(' | ')}` : ''}`, wide.length === 0]);
  const clash = nodes.flatMap((a, i) => nodes.slice(i + 1).filter((b) => !(a.x + a.w + 4 <= b.x || b.x + b.w + 4 <= a.x || a.y + a.h + 4 <= b.y || b.y + b.h + 4 <= a.y)).map((b) => `${a.id}/${b.id}`));
  const outside = nodes.filter((n) => n.x < 2 || n.x + n.w > s.w - 2 || n.y < 0 || n.y + n.h > s.h).map((n) => n.id);
  out.push([`Boxes stay apart and inside the frame${clash.length || outside.length ? `: ${[...clash, ...outside].join(', ')}` : ''}`, clash.length === 0 && outside.length === 0]);
  const cross = edges.filter((e) => e.pts.some((p, i) => {
    if (i === e.pts.length - 1) return false;
    const q = e.pts[i + 1], n = Math.max(2, Math.ceil(len(p, q) / 2));
    return Array.from({ length: n - 1 }, (_, k) => [p[0] + ((q[0] - p[0]) * (k + 1)) / n, p[1] + ((q[1] - p[1]) * (k + 1)) / n] as P).some((pt) => nodes.some((nd) => nd.id !== e.from && nd.id !== e.to && inside(nd, pt, -1)));
  }));
  out.push([`No arrow runs through a box it does not join${cross.length ? `: ${cross.map((e) => `${e.from}>${e.to}`).join(', ')}` : ''}`, cross.length === 0]);
  let gap = Infinity, what = '';
  edges.forEach((e) => e.pts.slice(0, -1).forEach((p, i) => { const q = e.pts[i + 1], n = Math.max(1, Math.ceil(len(p, q) * 2)); for (let k = 0; k <= n; k++) { const pt: P = [p[0] + ((q[0] - p[0]) * k) / n, p[1] + ((q[1] - p[1]) * k) / n]; s.labels.forEach((l) => { const d = rectDist(l.rect, pt); if (d < gap) { gap = d; what = l.text; } }); } }));
  out.push([`Every label stays at least ${LABEL_GAP} px clear of every arrow${what ? `: the closest is "${what}", ${fmt(gap, 1)} px` : ''}`, gap >= LABEL_GAP - 1e-9]);
  out.push(labelsApart(s), inFrame(s));
  return out;
}
/** The box ids along the single path that leaves `from` by one arrow at a time. */
function chainOf(s: Sketch, from: string, skip: string[] = []): string[] {
  const { edges } = flowOf(s), ids = [from];
  for (let cur = from; ;) { const e = edges.find((x) => x.from === cur && !skip.includes(x.to)); if (!e) break; ids.push(e.to); cur = e.to; }
  return ids;
}
const hasText = (s: Sketch, ...parts: string[]): boolean => { const all = flowOf(s).nodes.map((n) => plain(n.lines.join(' '))).join(' | ') + ' | ' + s.labels.map((l) => l.text).join(' | '); return parts.every((p) => all.includes(p)); };

/* ======================================================================
 * 02-d1  Recrystallisation
 * ====================================================================== */
const CAP_D1 = 'Recrystallisation: the crude solid is dissolved in the least hot solvent, filtered hot only if specks remain, cooled slowly and left alone, filtered off (the mother liquor, holding the dissolved impurity, runs through), washed with a little cold solvent to rinse off the mother liquor that clings to the crystals, dried between the folds of filter paper and its melting point taken.';
const D1: NodeSpec[] = [
  { id: 'dissolve', lines: ['Dissolve the crude solid', 'in the minimum of', 'hot solvent'] },
  { id: 'hot', lines: ['Filter hot, only if', 'specks remain'], dash: true },
  { id: 'cool', lines: ['Cool slowly,', 'undisturbed'], hi: true },
  { id: 'filter', lines: ['Filter off the crystals'] },
  { id: 'wash', lines: ['Wash with a little', 'cold solvent'] },
  { id: 'dry', lines: ['Dry between the folds', 'of filter paper'] },
  { id: 'mp', lines: ['Take the melting point'] },
];
const d1: Diagram = {
  id: 'c12-12-02-d1',
  topic: 1,
  name: 'Recrystallisation',
  cases: [{ chip: 'Recrystallisation', cap: CAP_D1 }],
  draw() {
    const s = new Sketch(W, colH(D1, 20) + 24);
    const ns = column(s, D1, 14, 196, 12, 20);
    const filt = ns[3];
    const m: FNode = { id: 'liquor', lines: ['filtrate:', 'mother liquor', 'and impurity'], dash: true, x: 222, w: 112, h: hFor(3), y: filt.y + filt.h / 2 - hFor(3) / 2 };
    putNode(s, m);
    edge(s, filt, m, [Rt(filt), Lf(m)], { dash: true });
    return s;
  },
  check() {
    const s = d1.draw(d1.cases[0]);
    const out = flowChecks(s, ['dissolve']);
    const order = chainOf(s, 'dissolve', ['liquor']);
    out.push([`The steps run in the book's order: ${order.join(' > ')}`, order.join() === D1.map((n) => n.id).join()]);
    out.push(['The mother liquor, with the dissolved impurity, leaves as the filtrate when the crystals are filtered off, before the wash', flowOf(s).edges.some((e) => e.from === 'filter' && e.to === 'liquor') && !flowOf(s).edges.some((e) => e.to === 'liquor' && e.from !== 'filter') && hasText(s, 'impurity')]);
    out.push(['The hot filtration is dashed (optional); slow cooling is the highlight', !!flowOf(s).nodes.find((n) => n.id === 'hot')!.dash && flowOf(s).nodes.filter((n) => n.hi).map((n) => n.id).join() === 'cool']);
    return out;
  },
};

/* ======================================================================
 * 02-d2  Potash alum and Mohr's salt
 * ====================================================================== */
const ALUM: NodeSpec[] = [
  { id: 'a1', lines: [`${chem('Al2(SO4)3')} in water at about 40 °C`, `plus a little dilute ${chem('H2SO4')}`] },
  { id: 'a2', lines: [`Add ${chem('K2SO4')},`, 'heat and stir'] },
  { id: 'a3', lines: ['Cool slowly'], hi: true },
  { id: 'a4', lines: ['White crystals of potash alum'] },
  { id: 'a5', lines: ['Decant the mother liquor'] },
  { id: 'a6', lines: ['Wash with 1:1 cold', 'water–alcohol'] },
  { id: 'a7', lines: ['Filter, dry between the', 'folds of filter paper'] },
];
const MOHR: NodeSpec[] = [
  { id: 'm1', lines: [`${chem('FeSO4')} and ${chem('(NH4)2SO4')}`, 'in a little water, plus a', `little dilute ${chem('H2SO4')}`] },
  { id: 'm2', lines: ['Heat to the', 'crystallisation point'] },
  { id: 'm3', lines: ['Cool slowly'], hi: true },
  { id: 'm4', lines: ['Light green crystals of Mohr’s salt'] },
  { id: 'm5', lines: ['Decant the mother liquor'] },
  { id: 'm6', lines: ['Wash with 1:1 cold', 'water–alcohol'] },
  { id: 'm7', lines: ['Filter, dry between the', 'folds of filter paper'] },
];
const D2_CAPS: Record<string, string> = {
  'Potash alum': 'Potash alum: aluminium sulphate in water at about 40 °C with a little dilute sulphuric acid, potassium sulphate added with heating and stirring, slow cooling to white crystals, then decant, wash with cold 1:1 water–alcohol and dry.',
  'Mohr’s salt': 'Mohr’s salt: ferrous sulphate and ammonium sulphate in a little water with a little dilute sulphuric acid, heated to the crystallisation point, cooled slowly to light green crystals, then decant, wash and dry.',
};
const d2: Diagram = {
  id: 'c12-12-02-d2',
  topic: 1,
  name: 'Potash alum and Mohr’s salt',
  cases: Object.keys(D2_CAPS).map((chip) => ({ chip, cap: D2_CAPS[chip] })),
  draw(c) {
    const spec = c.chip === 'Potash alum' ? ALUM : MOHR;
    const s = new Sketch(W, colH(spec, 20) + 24);
    column(s, spec, 40, 260, 12, 20);
    return s;
  },
  check(c) {
    const alum = c.chip === 'Potash alum', spec = alum ? ALUM : MOHR, s = d2.draw(c);
    const out = flowChecks(s, [spec[0].id]);
    const order = chainOf(s, spec[0].id);
    out.push([`One path runs through all seven steps in order: ${order.join(' > ')}`, order.join() === spec.map((n) => n.id).join()]);
    out.push(alum
      ? ['Alum: the text’s equation K2SO4 + Al2(SO4)3 + 24H2O → 2KAl(SO4)2·12H2O is balanced; 40 °C, 1:1 water–alcohol and white crystals are on the chart', balanced('K2SO4 + Al2(SO4)3 + 24H2O → 2KAl(SO4)2·12H2O') && hasText(s, '40 °C', '1:1', 'White crystals')]
      : ['Mohr’s salt: the text’s equation FeSO4 + (NH4)2SO4 + 6H2O → FeSO4·(NH4)2SO4·6H2O is balanced; the crystallisation point, 1:1 water–alcohol and light green crystals are on the chart', balanced('FeSO4 + (NH4)2SO4 + 6H2O → FeSO4·(NH4)2SO4·6H2O') && hasText(s, 'crystallisation point', '1:1', 'Light green')]);
    out.push([`Slow cooling is the one highlighted step: ${flowOf(s).nodes.filter((n) => n.hi).map((n) => n.id).join()}`, flowOf(s).nodes.filter((n) => n.hi).length === 1]);
    return out;
  },
};

/* ======================================================================
 * 02-d3  Reflux apparatus for acetanilide, and the pour into ice water
 * ====================================================================== */
const RF = { cx: 150, cy: 215, r: 46, neck: 9, joint: 118, top: 30, sand: 232, trayTop: 225, trayBot: 285, trayL: 60, trayR: 240, trayInset: 12 };
const arcPts = (c: P, r: number, from: number, to: number): P[] => Array.from({ length: 81 }, (_, i) => polar(c, from + ((to - from) * i) / 80, r));
const CAP_D3A = 'Reflux for acetanilide: aniline with acetic anhydride and acetic acid, with a few pumice stones, in a round-bottom flask standing in a sand bath, the air condenser upright on the flask’s mouth, heated gently from below.';
const CAP_D3B = 'The cooled reaction mixture is poured slowly, with stirring, into 150–200 mL of ice-cold water; acetanilide separates as a solid.';
const BK = { l: 120, r: 240, top: 70, bot: 270, water: 130 };
const ICE: [number, number][] = [[135, 0], [160, 0], [214, 0]];
const ROD: [P, P] = [[225, 30], [170, 235]];
/** The solid: small rings scattered below the surface by a fixed sequence. */
const SOLID: P[] = (() => { const pts: P[] = []; let a = 7; for (let i = 0; i < 16; i++) { a = (a * 73 + 19) % 211; const b = (a * 37 + 11) % 223; pts.push([BK.l + 12 + (a / 211) * (BK.r - BK.l - 24), BK.water + 22 + (b / 223) * (BK.bot - BK.water - 36)]); } return pts; })();
const FLAME: P[] = (() => {
  const L: P[] = Array.from({ length: 25 }, (_, i) => { const t = i / 24; return [150 - 17 * Math.pow(Math.sin(Math.PI * Math.pow(t, 1.6)), 0.8), 292 + 32 * t] as P; });
  return [...L, ...L.slice(0, -1).reverse().map(([x, y]) => [300 - x, y] as P)];
})();
const SAND_SEG = (y: number): [number, number, number, number] => {
  const inner = (yy: number, left: boolean) => (left ? RF.trayL + ((yy - RF.trayTop) * RF.trayInset) / (RF.trayBot - RF.trayTop) : RF.trayR - ((yy - RF.trayTop) * RF.trayInset) / (RF.trayBot - RF.trayTop));
  const dx = Math.sqrt(RF.r * RF.r - (y - RF.cy) ** 2);
  return [inner(y, true), RF.cx - dx, RF.cx + dx, inner(y, false)];
};
const d3: Diagram = {
  id: 'c12-12-02-d3',
  topic: 1,
  name: 'Reflux for acetanilide',
  cases: [{ chip: 'Reflux', cap: CAP_D3A }, { chip: 'Pour into ice water', cap: CAP_D3B }],
  draw(c) {
    if (c.chip === 'Reflux') {
      const s = new Sketch(W, 336);
      const half = (Math.asin(RF.neck / RF.r) * 180) / Math.PI;
      path(s, arcPts([RF.cx, RF.cy], RF.r, 90 + half, 450 - half));
      const yN = RF.cy - Math.sqrt(RF.r * RF.r - RF.neck * RF.neck);
      // the flask's neck in ink up to the joint, the air condenser (the highlight) above it, one tube on one axis
      path(s, [[RF.cx - RF.neck, yN], [RF.cx - RF.neck, RF.joint]]);
      path(s, [[RF.cx + RF.neck, yN], [RF.cx + RF.neck, RF.joint]]);
      path(s, [[RF.cx - RF.neck, RF.joint], [RF.cx - RF.neck, RF.top]], { color: C.mari, w: 2.4 });
      path(s, [[RF.cx + RF.neck, RF.joint], [RF.cx + RF.neck, RF.top]], { color: C.mari, w: 2.4 });
      path(s, [[RF.cx - RF.neck - 4, RF.joint], [RF.cx + RF.neck + 4, RF.joint]]);
      // the liquid
      const dl = Math.sqrt(RF.r * RF.r - 100);
      path(s, [[RF.cx - dl, RF.cy - 10], [RF.cx + dl, RF.cy - 10]], { color: C.grey, w: 1.3 });
      // pumice stones
      [[135, 245], [150, 251], [164, 243]].forEach(([x, y]) => s.add(`<circle cx="${x}" cy="${y}" r="3.6" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`));
      // the sand bath: a tray, and the sand's surface either side of the flask
      path(s, [[RF.trayL, RF.trayTop], [RF.trayL + RF.trayInset, RF.trayBot], [RF.trayR - RF.trayInset, RF.trayBot], [RF.trayR, RF.trayTop]]);
      const [a, b, c2, d] = SAND_SEG(RF.sand);
      path(s, [[a, RF.sand], [b, RF.sand]], { color: C.grey, w: 1.3 });
      path(s, [[c2, RF.sand], [d, RF.sand]], { color: C.grey, w: 1.3 });
      // the flame under the tray
      path(s, FLAME, { w: 1.5 });
      s.place([
        { t: 'air condenser', p: [RF.cx + RF.neck, 62], hi: true, at: [[176, 52, 'start']] },
        { t: 'round-bottom flask', p: polar([RF.cx, RF.cy], 42, RF.r), at: [[336, 146, 'end']] },
        { t: 'sand bath', p: [RF.trayR - RF.trayInset * 0.55, 255], at: [[336, 250, 'end']] },
        { t: 'pumice stones', p: [135, 245], at: [[8, 296, 'start']] },
        { t: 'reaction mixture', p: [RF.cx - dl + 10, RF.cy - 10], at: [[4, 138, 'start']] },
        { t: 'flame', p: [166.6, 312], at: [[190, 296, 'start']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 316);
    path(s, [[BK.l, BK.top], [BK.l, BK.bot], [BK.r, BK.bot], [BK.r, BK.top]]);
    path(s, [[BK.l, BK.water], [BK.r, BK.water]], { color: C.slate, w: 1.4 });
    ICE.forEach(([x]) => path(s, [[x, BK.water - 8], [x + 13, BK.water - 8], [x + 13, BK.water + 5], [x, BK.water + 5], [x, BK.water - 8]], { color: C.grey, w: 1.5 }));
    SOLID.forEach(([x, y]) => s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="2.8" fill="none" stroke="${C.mari}" stroke-width="1.8"/>`));
    path(s, ROD, { w: 2 });
    arrow(s, [106, 52], [150, 104], { color: C.grey, w: 1.6 });
    s.sym(16, 24, 'cooled mixture poured', { size: 12.5, anchor: 'start' });
    s.sym(16, 40, 'in slowly, with stirring', { size: 12.5, anchor: 'start' });
    s.place([
      { t: 'ice water', p: [BK.l + 6, 200], at: [[3, 214, 'start']] },
      { t: 'stirring rod', p: [223, 38], at: [[336, 6, 'end']] },
      { t: 'ice', p: [ICE[2][0] + 6, BK.water - 8], at: [[252, 100, 'start']] },
      { t: 'solid separates', p: SOLID.reduce((a, b) => (b[1] > a[1] ? b : a)), hi: true, at: [[130, 284, 'start']] },
      { t: 'beaker', p: [BK.r, 230], at: [[252, 238, 'start']] },
    ]);
    return s;
  },
  check(c) {
    const out: Check[] = [];
    if (c.chip === 'Reflux') {
      const s = d3.draw(c);
      out.push(['The air condenser stands vertically on the flask’s mouth: its axis is the neck’s axis, and it lies above the flask’s top', RF.cx === RF.cx && RF.top < RF.cy - RF.r && RF.joint < RF.cy - RF.r && RF.joint > RF.top]);
      out.push([`The neck meets the circle at y = ${fmt(RF.cy - Math.sqrt(RF.r ** 2 - RF.neck ** 2), 1)}, below the joint at y = ${RF.joint}`, RF.cy - Math.sqrt(RF.r ** 2 - RF.neck ** 2) > RF.joint]);
      const stones: P[] = [[135, 245], [150, 251], [164, 243]];
      out.push(['The three pumice stones lie inside the flask', stones.every(([x, y]) => Math.hypot(x - RF.cx, y - RF.cy) + 3.6 < RF.r)]);
      out.push([`The flask’s bottom (y = ${RF.cy + RF.r}) sinks below the sand surface (y = ${RF.sand}) and clear of the tray’s floor (y = ${RF.trayBot})`, RF.cy + RF.r > RF.sand && RF.cy + RF.r < RF.trayBot]);
      const [a, b, c2, d] = SAND_SEG(RF.sand);
      out.push([`The sand’s surface stops at the flask’s outline: it runs ${fmt(a, 1)}–${fmt(b, 1)} and ${fmt(c2, 1)}–${fmt(d, 1)}, clear of the circle (centre ${RF.cx}, radius ${RF.r})`, b < RF.cx && c2 > RF.cx && close(Math.hypot(b - RF.cx, RF.sand - RF.cy), RF.r, 1e-6) && close(Math.hypot(c2 - RF.cx, RF.sand - RF.cy), RF.r, 1e-6) && a < b && c2 < d]);
      out.push(['The flame is below the tray and under the flask', 292 > RF.trayBot && 150 === RF.cx]);
      out.push(['Six things are named: air condenser, round-bottom flask, reaction mixture, sand bath, pumice stones, flame', ['air condenser', 'round-bottom flask', 'reaction mixture', 'sand bath', 'pumice stones', 'flame'].every((t) => s.tags.some((q) => q.name === t))]);
      out.push([`The condenser (the highlight) starts at the joint, y = ${RF.joint}, above the flask; below it the neck is the flask’s`, RF.joint < RF.cy - Math.sqrt(RF.r ** 2 - RF.neck ** 2) && RF.top < RF.joint]);
      out.push(...layout(s));
    } else {
      const s = d3.draw(c);
      out.push([`All ${SOLID.length} solid particles lie inside the beaker, below the water surface`, SOLID.every(([x, y]) => x > BK.l + 3 && x < BK.r - 3 && y > BK.water && y < BK.bot - 3)]);
      const xAt = (y: number) => ROD[0][0] + ((ROD[1][0] - ROD[0][0]) * (y - ROD[0][1])) / (ROD[1][1] - ROD[0][1]);
      out.push([`The rod enters the beaker over its mouth (x = ${fmt(xAt(BK.top), 1)}) and reaches below the water surface`, xAt(BK.top) > BK.l && xAt(BK.top) < BK.r && ROD[1][1] > BK.water && ROD[0][1] < BK.top]);
      out.push(['The ice floats at the surface: each piece straddles the water line, clear of the rod and the walls', ICE.every(([x]) => x > BK.l + 4 && x + 13 < BK.r - 4 && Math.abs(xAt(BK.water) - (x + 6.5)) > 14)]);
      out.push(['The names are the book’s: ice water, stirring rod, ice, solid separates, beaker', ['ice water', 'stirring rod', 'ice', 'solid separates', 'beaker'].every((t) => s.tags.some((q) => q.name === t))]);
      out.push(...layout(s));
    }
    return out;
  },
};

/* ======================================================================
 * Structures: hexagon rings with substituents at computed vertices
 * ====================================================================== */
const RR = 22;
type Sub = { az: number; html: string; f: string };
type RingRec = { c: P; subs: Sub[] };
const MOLS = new WeakMap<Sketch, RingRec[]>();
function ring(s: Sketch, c: P, subs: Sub[], len_ = 12, size = 14) {
  path(s, Array.from({ length: 7 }, (_, k) => polar(c, 60 * k, RR)));
  s.add(`<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r1(RR * 0.58)}" fill="none" stroke="${C.ink}" stroke-width="1.3"/>`);
  const m = MOLS.get(s) ?? [];
  m.push({ c, subs });
  MOLS.set(s, m);
  const g = 5;
  subs.forEach((sb) => {
    const v = polar(c, sb.az, RR), e = polar(v, sb.az, len_), ca = Math.cos(rad(sb.az));
    path(s, [v, e]);
    if (!sb.html) return;
    if (Math.abs(ca) > 0.99) lab(s, e[0] + (ca > 0 ? g : -g), e[1] + size * 0.36, sb.html, size, ca > 0 ? 'start' : 'end', C.text);
    else if (Math.sin(rad(sb.az)) > 0) lab(s, e[0], e[1] - g - size * 0.3, sb.html, size, 'middle');
    else lab(s, e[0], e[1] + g + size * 0.72, sb.html, size, 'middle');
  });
}
const NHAC: Sub = { az: 0, html: chem('NHCOCH3'), f: 'NHCOCH3' };
const ringAtoms = (r: RingRec): Atoms => addAtoms(`C6H${6 - r.subs.length}`, ...r.subs.filter((x) => x.f).map((x) => x.f));
const azGap = (a: number, b: number) => { const d = (((a - b) % 360) + 360) % 360; return Math.min(d, 360 - d); };

/* ======================================================================
 * 02-d4  Acetanilide to p-nitroacetanilide
 * ====================================================================== */
const NITR = 'HNO3 + 2H2SO4 → NO2^+ + H3O^+ + 2HSO4^−';
const CAP_D4A = 'Nitration of acetanilide with nitric and concentrated sulphuric acids at 0–5 °C, never above 10 °C: the para isomer is the major product; the minor, yellow ortho isomer stays in the alcohol mother liquor when the product is recrystallised.';
const CAP_D4B = 'Concentrated sulphuric acid turns nitric acid into the nitronium ion, NO₂⁺, the electrophile that attacks the para position of acetanilide.';
const d4: Diagram = {
  id: 'c12-12-02-d4',
  topic: 1,
  name: 'Nitration of acetanilide',
  cases: [{ chip: 'Scheme', cap: CAP_D4A }, { chip: 'The electrophile', cap: CAP_D4B }],
  draw(c) {
    if (c.chip === 'Scheme') {
      const s = new Sketch(W, 424);
      const A: P = [100, 66], PA: P = [100, 226], OR: P = [100, 352];
      ring(s, A, [NHAC]);
      arrow(s, [100, 92], [100, 203], { w: 1.8 });
      s.sym(112, 130, eq('HNO3 + H2SO4 (conc.)'), { size: 12.5, anchor: 'start' });
      s.sym(112, 148, '0–5 °C, below 10 °C', { size: 12.5, anchor: 'start' });
      path(s, [[100, 160], [26, 160], [26, 352]], { color: C.slate, w: 1.4 });
      arrow(s, [26, 352], [70, 352], { color: C.slate, w: 1.4 });
      ring(s, PA, [{ az: 180, html: chem('O2N'), f: 'NO2' }, NHAC]);
      ring(s, OR, [{ az: -60, html: chem('NO2'), f: 'NO2' }, NHAC]);
      s.sym(140, 382, 'stays in the mother liquor', { size: 12.5, anchor: 'start', color: C.slate });
      s.place([
        { t: 'acetanilide', p: [100, 66 - 19.05], at: [[53, 8, 'start']] },
        { t: 'para (major)', p: [100, 226 + 19.05], hi: true, at: [[60, 262, 'start']] },
        { t: 'ortho (minor, yellow)', p: [100, 352 - 19.05], at: [[60, 302, 'start']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 250);
    const segs = row(s, 34, [{ t: eq('HNO3 + 2H2SO4 →') }, { t: eq('NO2^+'), hi: true }, { t: eq('+ H3O^+ + 2HSO4^−') }], 13.5);
    const no2 = segs[1];
    const RC: P = [222, 160];
    ring(s, RC, [NHAC]);
    lab(s, 62, 165, eq('NO2^+'), 15, 'middle', C.amber);
    arrow(s, [86, 160], [RC[0] - RR - 8, 160], { w: 1.8 });
    s.place([
      { t: 'nitronium ion', p: [(no2.x0 + no2.x1) / 2, 42], hi: true, at: [[90, 60, 'start']] },
      { t: 'attacking electrophile', p: [128, 160], at: [[14, 100, 'start']] },
      { t: 'para carbon', p: polar(RC, 180, RR), at: [[96, 206, 'start']] },
      { t: 'acetanilide', p: polar(RC, -60, RR), at: [[236, 206, 'start']] },
    ]);
    return s;
  },
  check(c) {
    const out: Check[] = [];
    const s = d4.draw(c), rings = MOLS.get(s)!;
    if (c.chip === 'Scheme') {
      const [a, p, o] = rings;
      const ac = ringAtoms(a), pn = ringAtoms(p), on = ringAtoms(o);
      out.push([`Acetanilide counts C₈H₉NO (${formulaText(ac)}), ${fmt(massOf(ac), 2)} g mol⁻¹: the text’s 135.17`, formulaText(ac) === 'C8H9NO' && close(massOf(ac), 135.17, 0.02)]);
      out.push([`p-Nitroacetanilide counts ${formulaText(pn)}, ${fmt(massOf(pn), 2)} g mol⁻¹: the text’s 180.16`, formulaText(pn) === 'C8H8N2O3' && close(massOf(pn), 180.16, 0.02)]);
      out.push([`The drawn ortho isomer has the same formula as the para one: ${formulaText(on)}`, sameAtoms(pn, on)]);
      const pg = azGap(p.subs[0].az, p.subs[1].az), og = azGap(o.subs[0].az, o.subs[1].az);
      out.push([`Para: the NO₂ and NHCOCH₃ vertices are ${pg}° apart (opposite); ortho: ${og}° apart (neighbours)`, pg === 180 && og === 60]);
      out.push(['The overall equation C6H5NHCOCH3 + HNO3 → O2N–C6H4–NHCOCH3 + H2O is balanced', balanced('C8H9NO + HNO3 → C8H8N2O3 + H2O')]);
      out.push([`The text’s yield ratio 180.16/135.17 = ${fmt(180.16 / 135.17, 4)}; the drawn masses give ${fmt(massOf(pn) / massOf(ac), 4)}`, close(massOf(pn) / massOf(ac), 180.16 / 135.17, 2e-4)]);
      out.push(['The conditions are the book’s: HNO₃ + H₂SO₄ (conc.), 0–5 °C, below 10 °C, and the ortho isomer stays in the mother liquor', ['HNO3 + H2SO4 (conc.)', '0–5 °C, below 10 °C', 'stays in the mother liquor'].every((t) => s.labels.some((l) => l.text === t))]);
      out.push(['The three structures are named: acetanilide, para (major), ortho (minor, yellow)', ['acetanilide', 'para (major)', 'ortho (minor, yellow)'].every((t) => s.tags.some((q) => q.name === t))]);
    } else {
      out.push([`The nitrating mixture ${NITR} is balanced in atoms and charge`, balanced(NITR)]);
      const ar = rings[0];
      const tip = 222 - RR - 8;
      out.push([`The electrophile’s arrow ends ${fmt(polar(ar.c, 180, RR)[0] - tip, 0)} px short of the ring’s left vertex, the position opposite NHCOCH₃ (${azGap(180, NHAC.az)}° away): para`, azGap(180, NHAC.az) === 180 && polar(ar.c, 180, RR)[0] - tip > 0 && polar(ar.c, 180, RR)[0] - tip < 12]);
      out.push(['NO₂⁺ is shown with its charge and named as the nitronium ion and the attacking electrophile; the vertex it heads for is named the para carbon', ['nitronium ion', 'attacking electrophile', 'para carbon'].every((t) => s.tags.some((q) => q.name === t))]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ======================================================================
 * 02-d5  Aniline yellow, two routes
 * ====================================================================== */
const DIAZO = 'C6H5NH2 + NaNO2 + 2HCl → C6H5N2Cl + NaCl + 2H2O';
const COUPLE = 'C6H5N2^+ + C6H5NH2 → H2NC6H4N2C6H5 + H^+';
const CAP_D5A = 'Aniline yellow, route (a): aniline is diazotised at 0–5 °C with sodium nitrite and hydrochloric acid, then the benzenediazonium ion couples at the para position with more aniline, taken in dilute hydrochloric acid so that the medium is weakly acidic.';
const CAP_D5B = 'Aniline yellow, route (b): diazoaminobenzene rearranges to p-aminoazobenzene when warmed at 40–45 °C with a little aniline hydrochloride (the catalyst) in aniline as solvent; the two are isomers.';
/** The product H₂N–C₆H₄–N=N–C₆H₅ centred on row y; registers its two rings. */
function aminoazo(s: Sketch, y: number, x1 = 80): { c1: P; c2: P; bottom: number } {
  const c1: P = [x1, y];
  ring(s, c1, [{ az: 180, html: chem('H2N'), f: 'NH2' }, { az: 0, html: '', f: 'N2' }]);
  const e: P = polar(c1, 0, RR + 12);
  const L = lab(s, e[0] + 5, y + 14 * 0.36, 'N=N', 14, 'start');
  const c2: P = [L[2] + 5 + 12 + RR, y];
  path(s, [[L[2] + 5, y], [L[2] + 5 + 12, y]]);
  ring(s, c2, [{ az: 180, html: '', f: '' }]);
  // ring() drew a stub for the link from ring 2; remove double drawing by ignoring: the stub lies on the bond to N=N
  return { c1, c2, bottom: y + 19.05 };
}
const d5: Diagram = {
  id: 'c12-12-02-d5',
  topic: 1,
  name: 'Aniline yellow',
  cases: [{ chip: 'Diazotise, then couple', cap: CAP_D5A }, { chip: 'Rearrangement', cap: CAP_D5B }],
  draw(c) {
    if (c.chip === 'Diazotise, then couple') {
      const s = new Sketch(W, 462);
      const X = 80;
      ring(s, [X, 62], [{ az: 0, html: chem('NH2'), f: 'NH2' }]);
      arrow(s, [X, 90], [X, 168], { w: 1.8 });
      s.sym(X + 14, 122, eq('NaNO2 + HCl'), { size: 12.5, anchor: 'start' });
      s.sym(X + 14, 140, '0–5 °C', { size: 12.5, anchor: 'start' });
      ring(s, [X, 204], [{ az: 0, html: 'N<sub>2</sub><sup>+</sup>Cl<sup>−</sup>', f: 'N2Cl' }]);
      arrow(s, [X, 238 + 24], [X, 330], { w: 1.8 });
      s.sym(X + 14, 288, '+ aniline in dilute HCl', { size: 12.5, anchor: 'start' });
      s.sym(X + 14, 306, '(weakly acidic)', { size: 12.5, anchor: 'start' });
      const pr = aminoazo(s, 382, X);
      s.place([
        { t: 'aniline', p: [X, 62 - 19.05], at: [[X - 30, 10, 'start']] },
        { t: 'benzenediazonium chloride', p: [X, 204 + 19.05], at: [[14, 236, 'start']] },
        { t: 'p-aminoazobenzene (aniline yellow)', p: [pr.c1[0], pr.bottom], hi: true, at: [[14, 420, 'start']] },
      ]);
      return s;
    }
    const s = new Sketch(W, 340);
    const c1: P = [50, 62];
    ring(s, c1, [{ az: 0, html: '', f: 'N3H' }]);
    const e: P = polar(c1, 0, RR + 12);
    const L = lab(s, e[0] + 5, 62 + 14 * 0.36, 'N=N–NH', 14, 'start');
    const c2: P = [L[2] + 5 + 12 + RR, 62];
    path(s, [[L[2] + 5, 62], [L[2] + 5 + 12, 62]]);
    ring(s, c2, [{ az: 180, html: '', f: '' }]);
    arrow(s, [170, 128], [170, 218], { w: 1.8 });
    s.sym(158, 148, 'aniline hydrochloride', { size: 12.5, anchor: 'end' });
    s.sym(158, 166, '(catalyst)', { size: 12.5, anchor: 'end' });
    s.sym(158, 184, 'aniline as solvent', { size: 12.5, anchor: 'end' });
    s.sym(158, 202, '40–45 °C', { size: 12.5, anchor: 'end' });
    const pr = aminoazo(s, 252, 80);
    s.place([
      { t: 'diazoaminobenzene', p: [c1[0], 62 + 19.05], at: [[8, 100, 'start']] },
      { t: 'isomerisation', p: [170, 170], at: [[190, 168, 'start']] },
      { t: 'p-aminoazobenzene', p: [pr.c1[0], pr.bottom], hi: true, at: [[14, 296, 'start']] },
    ]);
    return s;
  },
  check(c) {
    const out: Check[] = [];
    const s = d5.draw(c), rings = MOLS.get(s)!;
    const prod = (rs: RingRec[]) => ringAtoms(rs[rs.length - 2]), prod2 = (rs: RingRec[]) => ringAtoms(rs[rs.length - 1]);
    const product = addAtoms(...[prod(rings), prod2(rings)].map(formulaText));
    out.push([`p-Aminoazobenzene as drawn counts ${formulaText(product)} (the text: C₁₂H₁₁N₃, 197.2 g mol⁻¹, ${fmt(massOf(product), 1)})`, formulaText(product) === 'C12H11N3' && close(massOf(product), 197.2, 0.1)]);
    const r1_ = rings[rings.length - 2];
    out.push([`In the product H₂N and N=N sit ${azGap(r1_.subs[0].az, r1_.subs[1].az)}° apart on the ring: para`, azGap(r1_.subs[0].az, r1_.subs[1].az) === 180]);
    if (c.chip === 'Diazotise, then couple') {
      out.push([`The diazotisation ${DIAZO} is balanced`, balanced(DIAZO)]);
      out.push([`The coupling ${COUPLE} is balanced in atoms and charge`, balanced(COUPLE)]);
      const an = ringAtoms(rings[0]), dz = ringAtoms(rings[1]);
      out.push([`The drawn aniline counts ${formulaText(an)} and the diazonium salt ${formulaText(dz)}; together they carry the product’s atoms less one H`, formulaText(an) === 'C6H7N' && formulaText(dz) === 'C6H5ClN2' && sameAtoms(addAtoms('C6H7N', 'C6H5N2'), addAtoms(formulaText(product), 'H'))]);
      out.push(['The conditions are the book’s: NaNO₂ + HCl, 0–5 °C, then + aniline in dilute HCl (weakly acidic)', ['NaNO2 + HCl', '0–5 °C', '+ aniline in dilute HCl', '(weakly acidic)'].every((t) => s.labels.some((l) => l.text === t))]);
    } else {
      const dza = addAtoms('C6H5', 'N3H', 'C6H5');
      out.push([`Diazoaminobenzene as drawn counts ${formulaText(dza)}: the same formula as the product, so the change is an isomerisation`, sameAtoms(dza, product) && formulaText(dza) === 'C12H11N3']);
      out.push(['The conditions are the book’s: aniline hydrochloride (catalyst), aniline as solvent, 40–45 °C, named as an isomerisation', ['aniline hydrochloride', '(catalyst)', 'aniline as solvent', '40–45 °C'].every((t) => s.labels.some((l) => l.text === t)) && s.tags.some((q) => q.name === 'isomerisation')]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ======================================================================
 * 02-d6  The iodoform reaction
 * ====================================================================== */
const HYPO = 'I2 + 2NaOH → NaI + NaOI + H2O';
const ETH = 'CH3CH2OH + 4I2 + 6NaOH → CHI3 + HCOONa + 5NaI + 5H2O';
const ACE = 'CH3COCH3 + 3I2 + 4NaOH → CHI3 + CH3COONa + 3NaI + 3H2O';
const CAP_D6 = 'The iodoform reaction: iodine in sodium hydroxide makes sodium hypoiodite, which oxidises CH₃CH(OH)R to CH₃COR, replaces the three H of CH₃ by I, and alkali then cleaves the C–C bond to give yellow iodoform and a carboxylate: HCOONa from ethanol, CH₃COONa from acetone.';
const d6: Diagram = {
  id: 'c12-12-02-d6',
  topic: 1,
  name: 'Iodoform reaction',
  cases: [{ chip: 'Iodoform reaction', cap: CAP_D6 }],
  draw() {
    const s = new Sketch(W, 456);
    s.sym(W / 2, 26, eq('I2 + 2NaOH → NaI + NaOI + H2O'), { size: 13.5 });
    const mk = (id: string, lines: string[], x: number, y: number, w: number, o: Partial<NodeSpec> = {}): FNode => { const n: FNode = { id, lines, x, y, w, h: hFor(lines.length), ...o }; putNode(s, n); return n; };
    const A = mk('alcohol', [`${chem('CH3')}CH(OH)R`.replace('CH<sub>3</sub>CH', `CH<sub>3</sub>CH`), 'ethanol: R = H'], 14, 70, 190);
    const Bn = mk('ketone', [`${chem('CH3')}COR`], 14, 70 + A.h + 34, 190);
    const Cn = mk('triiodo', [`${chem('CI3')}COR`], 14, Bn.y + Bn.h + 34, 190);
    const Sn = mk('acetone', ['acetone', 'R = CH₃'.replace('CH₃', 'CH<sub>3</sub>')], 236, Bn.y - (hFor(2) - Bn.h) / 2, 96, { dash: true });
    const yRow = Cn.y + Cn.h + 56;
    const Dn = mk('iodoform', [`${chem('CHI3')}, yellow`, 'precipitate'], 14, yRow, 128, { hi: true });
    const En = mk('salt', ['RCOONa'], 168, yRow, 96);
    const Nn = mk('notes', [`R = H (ethanol): ${chem('HCOONa')}`, `R = ${chem('CH3')} (acetone): ${chem('CH3COONa')}`], 76, En.y + En.h + 30, 256, { dash: true });
    edge(s, A, Bn, [Bt(A), Tp(Bn)]);
    edge(s, Bn, Cn, [Bt(Bn), Tp(Cn)]);
    edge(s, Sn, Bn, [Lf(Sn), Rt(Bn)]);
    const ym = Cn.y + Cn.h + 30;
    edge(s, Cn, Dn, [Bt(Cn), [Bt(Cn)[0], ym], [Tp(Dn)[0], ym], Tp(Dn)]);
    edge(s, Cn, En, [Bt(Cn), [Bt(Cn)[0], ym], [Tp(En)[0], ym], Tp(En)]);
    edge(s, En, Nn, [Bt(En), [Bt(En)[0], Nn.y]]);
    const cx = 109;
    s.sym(cx + 12, A.y + A.h + 21, 'NaOI oxidises', { size: 12.5, anchor: 'start' });
    s.sym(cx + 12, Bn.y + Bn.h + 21, 'NaOI: 3 H of CH₃ become I'.replace('CH₃', 'CH<sub>3</sub>'), { size: 12.5, anchor: 'start' });
    s.sym(cx + 12, Cn.y + Cn.h + 18, 'NaOH cleaves C–C', { size: 12.5, anchor: 'start' });
    return s;
  },
  check() {
    const s = d6.draw(d6.cases[0]);
    const out = flowChecks(s, ['alcohol', 'acetone']);
    out.push([`The hypoiodite equation ${HYPO} is balanced`, balanced(HYPO)]);
    out.push([`The ethanol overall equation is balanced; carbon is kept: 2 C in ethanol = 1 (CHI₃) + 1 (HCOONa)`, balanced(ETH) && atoms('CH3CH2OH').C === atoms('CHI3').C + atoms('HCOONa').C]);
    out.push([`The acetone overall equation is balanced; carbon is kept: 3 C = 1 (CHI₃) + 2 (CH₃COONa)`, balanced(ACE) && atoms('CH3COCH3').C === atoms('CHI3').C + atoms('CH3COONa').C]);
    for (const [r, name] of [['H', 'ethanol'], ['CH3', 'acetone']] as const) {
      const alc = r === 'H' ? 'CH3CH(OH)H' : 'CH3CH(OH)CH3';
      const ket = `CH3CO${r}`, tri = `CI3CO${r}`;
      const lose = atoms(ket).H - atoms(tri).H, gain = (atoms(tri).I ?? 0);
      out.push([`${name}: CH₃COR → CI₃COR replaces ${lose} H by ${gain} I, and CH₃CH(OH)R → CH₃COR loses 2 H (oxidation)`, lose === 3 && gain === 3 && atoms(alc).H - atoms(ket).H === 2 && atoms(alc).C === atoms(ket).C]);
      const end = r === 'H' ? 'HCOONa' : 'CH3COONa';
      out.push([`${name}: CI₃COR + OH⁻ gives CHI₃ + RCOO⁻, so the carboxylate ${end} has the carbon count ${atoms(tri).C - 1}`, atoms(end).C === atoms(tri).C - 1]);
    }
    out.push(['Both starting points feed the chain: the alcohol enters at the top, acetone joins CH₃COR; both end in CHI₃ and RCOONa', flowOf(s).edges.some((e) => e.from === 'acetone' && e.to === 'ketone') && flowOf(s).edges.filter((e) => e.from === 'triiodo').map((e) => e.to).sort().join() === 'iodoform,salt']);
    return out;
  },
};

/* ======================================================================
 * 05-d1  Beaker calorimeter
 * ====================================================================== */
const CAL = { ol: 110, or: 230, top: 70, bot: 270, sl: 140, sr: 200, stop: 112, sbot: 232, bl: 130, br: 210, cover: [100, 240] as [number, number], solution: 160, thx: 163, stx: 186 };
const COTTON: P[] = (() => { const pts: P[] = []; for (let k = 0; k < 14; k++) { const y = 120 + k * 7.6; pts.push([k % 2 ? 119 : 131, y], [k % 2 ? 221 : 209, y]); } return pts; })();
const CAP_05D1 = 'The beaker calorimeter: a small beaker of solution stands on a wooden block inside a larger beaker, the gap packed with cotton wool; a cardboard cover carries the thermometer and the stirrer.';
const d51: Diagram = {
  id: 'c12-12-05-d1',
  topic: 4,
  name: 'Beaker calorimeter',
  cases: [{ chip: 'Beaker calorimeter', cap: CAP_05D1 }],
  draw() {
    const s = new Sketch(W, 292);
    path(s, [[CAL.ol, CAL.top], [CAL.ol, CAL.bot], [CAL.or, CAL.bot], [CAL.or, CAL.top]]);
    path(s, [[CAL.sl, CAL.stop], [CAL.sl, CAL.sbot], [CAL.sr, CAL.sbot], [CAL.sr, CAL.stop]], { color: C.mari, w: 2.4 });
    path(s, [[CAL.bl, CAL.sbot], [CAL.br, CAL.sbot], [CAL.br, CAL.bot], [CAL.bl, CAL.bot], [CAL.bl, CAL.sbot]]);
    path(s, [[CAL.bl + 18, CAL.sbot + 12], [CAL.br - 18, CAL.sbot + 12]], { color: C.grey, w: 1.2 });
    path(s, [[CAL.bl + 30, CAL.sbot + 24], [CAL.br - 30, CAL.sbot + 24]], { color: C.grey, w: 1.2 });
    path(s, [[CAL.sl + 1, CAL.solution], [CAL.sr - 1, CAL.solution]], { color: C.slate, w: 1.3 });
    COTTON.forEach(([x, y]) => s.add(`<circle cx="${r1(x)}" cy="${r1(y)}" r="4.2" fill="none" stroke="${C.faint}" stroke-width="1.3"/>`));
    // the cover lies on the rim
    path(s, [[CAL.cover[0], CAL.top - 6], [CAL.cover[1], CAL.top - 6], [CAL.cover[1], CAL.top], [CAL.cover[0], CAL.top], [CAL.cover[0], CAL.top - 6]], { w: 1.6 });
    // thermometer and stirrer pass through it
    path(s, [[CAL.thx - 3, 26], [CAL.thx - 3, 196], [CAL.thx + 3, 196], [CAL.thx + 3, 26], [CAL.thx - 3, 26]], { w: 1.4 });
    s.add(`<circle cx="${CAL.thx}" cy="201" r="5.2" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`);
    path(s, [[CAL.stx, 32], [CAL.stx, 206]], { w: 1.5 });
    path(s, [[CAL.stx - 5, 32], [CAL.stx + 5, 32]], { w: 1.5 });
    s.add(`<ellipse cx="${CAL.stx}" cy="210" rx="9" ry="3.6" fill="none" stroke="${C.ink}" stroke-width="1.4"/>`);
    s.place([
      { t: 'small beaker', p: [CAL.sl, 128], hi: true, at: [[3, 96, 'start']] },
      { t: 'cotton wool', p: [119, 150], at: [[3, 150, 'start']] },
      { t: 'outer beaker', p: [CAL.ol, 232], at: [[3, 196, 'start']] },
      { t: 'wooden block', p: [CAL.br, 252], at: [[236, 244, 'start']] },
      { t: 'solution', p: [CAL.sr - 7, 176], at: [[236, 172, 'start']] },
      { t: 'cardboard cover', p: [CAL.cover[1] - 4, CAL.top - 6], at: [[214, 28, 'start']] },
      { t: 'thermometer', p: [CAL.thx - 3, 78], at: [[40, 28, 'start']] },
      { t: 'stirrer', p: [CAL.stx, 32], at: [[170, 0, 'start']] },
    ]);
    return s;
  },
  check() {
    const s = d51.draw(d51.cases[0]);
    const out: Check[] = [];
    out.push(['The small beaker lies inside the larger one, with a gap on each side for the cotton wool', CAL.ol < CAL.sl && CAL.sr < CAL.or && CAL.sl - CAL.ol >= 20 && CAL.or - CAL.sr >= 20 && CAL.stop > CAL.top]);
    out.push(['The wooden block stands on the large beaker’s floor and the small beaker stands on the block, the block inside the large beaker', CAL.bot - CAL.sbot > 0 && CAL.bl > CAL.ol && CAL.br < CAL.or && CAL.bl < CAL.sl && CAL.br > CAL.sr]);
    const inGap = COTTON.every(([x, y]) => y > CAL.stop && y < CAL.sbot && ((x - 4.2 > CAL.ol && x + 4.2 < CAL.sl) || (x - 4.2 > CAL.sr && x + 4.2 < CAL.or)));
    out.push([`All ${COTTON.length} tufts of cotton wool lie in the gap between the two beakers, above the block`, inGap && COTTON.filter(([x]) => x < CAL.sl).length === COTTON.filter(([x]) => x > CAL.sr).length]);
    out.push(['The cardboard cover lies on the larger beaker’s rim and overhangs both walls', CAL.cover[0] < CAL.ol && CAL.cover[1] > CAL.or]);
    out.push(['The thermometer and the stirrer pass through the cover (they start above it) and end below the solution’s surface', 26 < CAL.top - 6 && 32 < CAL.top - 6 && 196 > CAL.solution && 206 > CAL.solution && CAL.thx > CAL.sl && CAL.stx < CAL.sr && CAL.thx < CAL.stx]);
    out.push(['The bulb and the stirring loop stay above the small beaker’s floor', 201 + 5.2 < CAL.sbot && 210 + 3.6 < CAL.sbot]);
    out.push(['The named parts are the book’s: small beaker, cotton wool, outer beaker, wooden block, solution, cardboard cover, thermometer, stirrer', ['small beaker', 'cotton wool', 'outer beaker', 'wooden block', 'solution', 'cardboard cover', 'thermometer', 'stirrer'].every((t) => s.tags.some((q) => q.name === t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ======================================================================
 * 05-d2  Temperature against time for the neutralisation run
 * ====================================================================== */
const G2 = { x0: 92, xs: 30, y0: 250, ys: 22, T0: 25 };
const X2 = (t: number) => G2.x0 + G2.xs * t;
const Y2 = (T: number) => G2.y0 - (T - G2.T0) * G2.ys;
const RUN = { t1: 27.0, t2: 33.3, mix: 3, peak: 4, slope: 0.2 };
const TMAX = RUN.t2 - RUN.slope * (RUN.peak - RUN.mix);
const cooling = (t: number) => RUN.t2 - RUN.slope * (t - RUN.mix);
const rise = (t: number) => { const u = t - RUN.mix; return RUN.t1 + (TMAX - RUN.t1) * (1 - Math.pow(1 - u, 2.5)); };
const BASE_T = [0, 0.5, 1, 1.5, 2, 2.5, 3];
const COOL_T = [4, 4.5, 5, 5.5, 6, 6.5, 7];
const CAP_05D2 = 'Schematic temperature–time graph for the neutralisation of 1.0 M HCl by 1.0 M NaOH, read every 30 s: a steady baseline, a jump at the moment of mixing, a maximum, then a slow fall. The cooling line extended back to the time of mixing gives the corrected final temperature. Only <i>t</i><sub>1</sub> = 27.0 °C and <i>t</i><sub>2</sub> = 33.3 °C are the text’s readings; the times and the curve between them are illustrative. Δ<i>T</i> = 33.3 − 27.0 = 6.3 K.';
const d52: Diagram = {
  id: 'c12-12-05-d2',
  topic: 4,
  name: 'Temperature against time',
  cases: [{ chip: 'Neutralisation run', cap: CAP_05D2 }],
  draw() {
    const s = new Sketch(W, 336);
    arrow(s, [G2.x0, G2.y0], [332, G2.y0], { color: C.slate, w: 1.4 });
    arrow(s, [G2.x0, G2.y0], [G2.x0, 26], { color: C.slate, w: 1.4 });
    for (let t = 0; t <= 7; t++) { path(s, [[X2(t), G2.y0], [X2(t), G2.y0 + 4]], { color: C.slate, w: 1.2 }); lab(s, X2(t), G2.y0 + 17, String(t), 11.5); }
    lab(s, 332, 240, 'time / min', 12, 'end');
    lab(s, X2(RUN.mix), G2.y0 + 32, 'mixing', 12);
    lab(s, G2.x0 + 8, 22, '<i>T</i> / °C', 12, 'start');
    lab(s, G2.x0 - 6, Y2(RUN.t1) + 4, '27.0', 12, 'end');
    lab(s, G2.x0 - 6, Y2(RUN.t2) + 4, '33.3', 12, 'end');
    // the baseline, the jump, the maximum and the slow fall
    path(s, BASE_T.map((t) => [X2(t), Y2(RUN.t1)] as P), { w: 1.7 });
    const jump: P[] = Array.from({ length: 41 }, (_, i) => { const t = RUN.mix + (RUN.peak - RUN.mix) * (i / 40); return [X2(t), Y2(rise(t))] as P; });
    path(s, jump, { w: 1.9 });
    path(s, [[X2(RUN.peak), Y2(cooling(RUN.peak))], [X2(7), Y2(cooling(7))]], { w: 1.9 });
    // the readings as open rings, so the tags' filled leader dots cannot be mistaken for readings
    [...BASE_T, ...COOL_T].forEach((t) => s.add(`<circle cx="${r1(X2(t))}" cy="${r1(Y2(t <= RUN.mix ? RUN.t1 : cooling(t)))}" r="3" fill="#fff" stroke="${C.ink}" stroke-width="1.5"/>`));
    // helpers: the time of mixing, the corrected level, the extended cooling line
    path(s, [[X2(RUN.mix), G2.y0], [X2(RUN.mix), 62]], { color: C.slate, w: 1.2, dash: true });
    path(s, [[G2.x0, Y2(RUN.t2)], [X2(RUN.mix), Y2(RUN.t2)]], { color: C.slate, w: 1.2, dash: true });
    path(s, [[X2(RUN.peak), Y2(cooling(RUN.peak))], [X2(RUN.mix), Y2(RUN.t2)]], { color: C.slate, w: 1.5, dash: true });
    // ΔT, the highlight
    const bx = X2(RUN.mix) - 8, ya = Y2(RUN.t1), yb = Y2(RUN.t2), ym = (ya + yb) / 2;
    arrow(s, [bx, ym], [bx, yb + 1], { color: C.mari, w: 2 });
    arrow(s, [bx, ym], [bx, ya - 1], { color: C.mari, w: 2 });
    lab(s, bx - 8, ym - 6, 'Δ<i>T</i> =', 13, 'end', C.amber);
    lab(s, bx - 8, ym + 12, '<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>', 13, 'end', C.amber);
    s.place([
      { t: 'baseline', p: [X2(1), Y2(RUN.t1)], at: [[96, 160, 'start']] },
      { t: 'extended cooling line', p: [(X2(RUN.peak) + X2(RUN.mix)) / 2, (Y2(cooling(RUN.peak)) + Y2(RUN.t2)) / 2], at: [[102, 34, 'start']] },
      { t: 'maximum', p: [X2(RUN.peak), Y2(cooling(RUN.peak))], hi: false, at: [[X2(RUN.peak) + 4, 104, 'start']] },
    ]);
    resultBlock(s, ['Δ<i>T</i> = <i>t</i><sub>2</sub> − <i>t</i><sub>1</sub> = 33.3 − 27.0 = 6.3 K'], { size: 13 });
    return s;
  },
  check() {
    const s = d52.draw(d52.cases[0]);
    const out: Check[] = [];
    out.push(['The caption calls the graph schematic and names the text’s only readings, t₁ and t₂', CAP_05D2.startsWith('Schematic') && CAP_05D2.includes('27.0 °C') && CAP_05D2.includes('33.3 °C')]);
    out.push(['The mixing time is named under its tick on the time axis', s.labels.some((l) => l.text === 'mixing' && Math.abs((l.rect[0] + l.rect[2]) / 2 - X2(RUN.mix)) < 0.5 && l.rect[1] > G2.y0 + 17)]);
    const base = BASE_T.map(() => RUN.t1), mean = base.reduce((a, b) => a + b, 0) / base.length;
    out.push([`The readings before mixing form a steady baseline at ${fmt(mean, 1)} °C`, close(mean, 27.0, 1e-9) && BASE_T.every((t) => t <= RUN.mix)]);
    // least-squares line through the readings after the maximum, extended back to the time of mixing
    const xs = COOL_T, ys = COOL_T.map(cooling), n = xs.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
    const m = xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / xs.reduce((a, x) => a + (x - mx) ** 2, 0), b0 = my - m * mx;
    const back = b0 + m * RUN.mix;
    out.push([`The cooling readings fit a line of slope ${fmt(m, 2)} °C per min; extended back to the mixing time (${RUN.mix} min) it gives ${fmt(back, 2)} °C`, m < 0 && close(back, 33.3, 0.005)]);
    out.push([`The drawn extension ends at the corrected level: y = ${fmt(Y2(RUN.t2), 1)} for ${fmt(back, 1)} °C`, close(Y2(back), Y2(33.3), 0.2)]);
    out.push([`The observed maximum, ${fmt(TMAX, 1)} °C at ${RUN.peak} min, lies below the corrected ${fmt(RUN.t2, 1)} °C (heat lost during the rise) and after the mixing time`, TMAX < RUN.t2 && RUN.peak > RUN.mix && close(rise(RUN.peak), TMAX, 1e-9)]);
    out.push([`The jump starts at the baseline: the curve begins at ${fmt(rise(RUN.mix), 1)} °C at the mixing time`, close(rise(RUN.mix), RUN.t1, 1e-9)]);
    out.push([`ΔT = t₂ − t₁ = ${fmt(RUN.t2, 1)} − ${fmt(RUN.t1, 1)} = ${fmt(RUN.t2 - RUN.t1, 1)} K, the text’s 6.3`, close(RUN.t2 - RUN.t1, 6.3, 1e-9)]);
    const q = (200 * 4.184 + 64.4) * 6.3;
    out.push([`With W = 64.4 J/K and 200 mL: q = ${fmt(q, 0)} J, so ${fmt(q / 0.1 / 1000, 1)} kJ per mole of water: the text’s 56.8`, close(q / 0.1 / 1000, 56.8, 0.05)]);
    out.push(['The bracket spans exactly the two levels: its ends are at the y of 27.0 and 33.3 °C', close(Y2(27) - Y2(33.3), 6.3 * G2.ys, 1e-9)]);
    out.push(...layout(s));
    return out;
  },
};

/* ======================================================================
 * 05-d3  Sol preparation
 * ====================================================================== */
const FeEq = 'FeCl3 + 3H2O → Fe(OH)3 + 3HCl';
const AlEq = 'AlCl3 + 3H2O → Al(OH)3 + 3HCl';
const AsEq = 'As2O3 + 3H2S → As2S3 + 3H2O';
const CAP_D3S_A = 'Lyophilic sols form by direct mixing: egg albumin is stirred into 5 % NaCl solution; a paste of starch or gum is added to boiling water with stirring and boiled for ten minutes.';
const CAP_D3S_B = 'Lyophobic sols need a special method: FeCl₃ or AlCl₃ solution is dropped into boiling water (hydrolysis gives a brown Fe(OH)₃ or a white Al(OH)₃ sol); H₂S is passed into an As₂O₃ solution and the excess H₂S is driven off, leaving an As₂S₃ sol.';
const d53: Diagram = {
  id: 'c12-12-05-d3',
  topic: 4,
  name: 'Preparing sols',
  cases: [{ chip: 'Lyophilic', cap: CAP_D3S_A }, { chip: 'Lyophobic', cap: CAP_D3S_B }],
  draw(c) {
    const mk = (s: Sketch, id: string, lines: string[], x: number, y: number, w: number, o: Partial<NodeSpec> = {}): FNode => { const n: FNode = { id, lines, x, y, w, h: hFor(lines.length), ...o }; putNode(s, n); return n; };
    if (c.chip === 'Lyophilic') {
      const s = new Sketch(W, 330);
      const a1 = mk(s, 'alb', ['Egg albumin poured into', `100 mL of 5 % NaCl solution`], 14, 14, 270);
      const a2 = mk(s, 'albsol', ['Albumin sol'], 14, a1.y + a1.h + 56, 270, { hi: true });
      edge(s, a1, a2, [Bt(a1), Tp(a2)]);
      s.sym(Bt(a1)[0] + 12, a1.y + a1.h + 32, 'stir well: direct mixing', { size: 12.5, anchor: 'start' });
      const b1 = mk(s, 'paste', ['Paste of starch or gum', '(500 mg) in a little hot water'], 14, a2.y + a2.h + 36, 270);
      const b2 = mk(s, 'starchsol', ['Starch or gum sol'], 14, b1.y + b1.h + 56, 270);
      edge(s, b1, b2, [Bt(b1), Tp(b2)]);
      s.sym(Bt(b1)[0] + 12, b1.y + b1.h + 24, 'into 100 mL boiling water,', { size: 12.5, anchor: 'start' });
      s.sym(Bt(b1)[0] + 12, b1.y + b1.h + 42, 'stirring; boil 10 min', { size: 12.5, anchor: 'start' });
      return s;
    }
    const s = new Sketch(W, 420);
    const f1 = mk(s, 'chloride', ['FeCl₃ solution', 'or AlCl₃ solution'].map((t) => t.replace('FeCl₃', 'FeCl<sub>3</sub>').replace('AlCl₃', 'AlCl<sub>3</sub>')), 14, 14, 200);
    const fe = mk(s, 'fe', ['Fe(OH)<sub>3</sub> sol', 'brown'], 14, f1.y + f1.h + 60, 150, { hi: true });
    const al = mk(s, 'al', ['Al(OH)<sub>3</sub> sol', 'white'], 176, f1.y + f1.h + 60, 150);
    const ym = f1.y + f1.h + 34;
    edge(s, f1, fe, [Bt(f1), [Bt(f1)[0], ym], [Tp(fe)[0], ym], Tp(fe)]);
    edge(s, f1, al, [Bt(f1), [Bt(f1)[0], ym], [Tp(al)[0], ym], Tp(al)]);
    s.sym(Bt(f1)[0] + 14, f1.y + f1.h + 17, 'dropwise into boiling water', { size: 12.5, anchor: 'start' });
    const r1_ = mk(s, 'oxide', ['As₂O₃ in water'.replace('As₂O₃', 'As<sub>2</sub>O<sub>3</sub>'), '(boiled, cooled, filtered)'], 14, fe.y + fe.h + 34, 220);
    const r2 = mk(s, 'asmix', ['As₂S₃ with excess H₂S'.replace('As₂S₃', 'As<sub>2</sub>S<sub>3</sub>').replace('H₂S', 'H<sub>2</sub>S')], 14, r1_.y + r1_.h + 52, 220);
    const r3 = mk(s, 'assol', ['As₂S₃ sol'.replace('As₂S₃', 'As<sub>2</sub>S<sub>3</sub>')], 14, r2.y + r2.h + 52, 220);
    edge(s, r1_, r2, [Bt(r1_), Tp(r2)]);
    edge(s, r2, r3, [Bt(r2), Tp(r3)]);
    s.sym(Bt(r1_)[0] + 12, r1_.y + r1_.h + 31, 'pass H<sub>2</sub>S through it', { size: 12.5, anchor: 'start' });
    s.sym(Bt(r2)[0] + 12, r2.y + r2.h + 22, 'drive off the excess H<sub>2</sub>S', { size: 12.5, anchor: 'start' });
    s.sym(Bt(r2)[0] + 12, r2.y + r2.h + 39, 'by slow heating, filter', { size: 12.5, anchor: 'start' });
    return s;
  },
  check(c) {
    const s = d53.draw(c);
    if (c.chip === 'Lyophilic') {
      const out = flowChecks(s, ['alb', 'paste']);
      out.push(['Both lyophilic sols are made by direct mixing: albumin in 5 % NaCl, and a starch or gum paste into boiling water, boiled 10 min', hasText(s, '5 % NaCl', 'boiling water', 'boil 10 min', 'Albumin sol', 'Starch or gum sol')]);
      out.push(['The two preparations are separate paths of two boxes each', flowOf(s).edges.length === 2]);
      return out;
    }
    const out = flowChecks(s, ['chloride', 'oxide']);
    out.push([`The hydrolysis equations ${FeEq}, ${AlEq} and the sulphide equation ${AsEq} are balanced`, balanced(FeEq) && balanced(AlEq) && balanced(AsEq)]);
    out.push(['The chloride splits into the brown iron sol and the white aluminium sol; arsenic goes through H₂S and the excess is driven off', flowOf(s).edges.filter((e) => e.from === 'chloride').map((e) => e.to).sort().join() === 'al,fe' && chainOf(s, 'oxide').join() === 'oxide,asmix,assol' && hasText(s, 'brown', 'white', 'excess')]);
    return out;
  },
};

/* ======================================================================
 * 05-d4  The clock reaction
 * ====================================================================== */
const OXI = '2I^− + H2O2 + 2H^+ → I2 + 2H2O';
const RED = 'I2 + 2S2O3^2− → S4O6^2− + 2I^−';
const NET = 'H2O2 + 2S2O3^2− + 2H^+ → S4O6^2− + 2H2O';
const CK = { ax: 60, ay: 380, sx: 1.5, cs: 45000, c0: 0.002, tB: 150 };
const Xk = (t: number) => CK.ax + CK.sx * t;
const Yk = (cc: number) => CK.ay - CK.cs * cc;
const CAP_05D4 = 'The clock reaction: H₂O₂ oxidises I⁻ to I₂ in acid, and thiosulphate reduces the I₂ straight back to I⁻ (forming S₄O₆²⁻) while it lasts. When the thiosulphate is used up, free I₂ colours the starch blue: the time to the blue colour measures the rate. The graph is flask B of the worked example: 0.002 M thiosulphate used up steadily in 150 s.';
const d54: Diagram = {
  id: 'c12-12-05-d4',
  topic: 4,
  name: 'The clock reaction',
  cases: [{ chip: 'Clock reaction', cap: CAP_05D4 }],
  draw() {
    const s = new Sketch(W, 450);
    const mk = (id: string, lines: string[], x: number, y: number, w: number, o: Partial<NodeSpec> = {}): FNode => { const n: FNode = { id, lines, x, y, w, h: hFor(lines.length), ...o }; putNode(s, n); return n; };
    const N1 = mk('iodide', [eq('2I^− + H2O2 + 2H^+')], 14, 90, 150);
    const N2 = mk('iodine', [chem('I2')], 226, 90, 100);
    const N3 = mk('blue', ['free I<sub>2</sub> + starch', '→ intense blue colour'], 126, 190, 200);
    edge(s, N1, N2, [Rt(N1), Lf(N2)]);
    const yTop = 68;
    edge(s, N2, N1, [Tp(N2), [Tp(N2)[0], yTop], [Tp(N1)[0], yTop], Tp(N1)]);
    edge(s, N2, N3, [[Bt(N2)[0], N2.y + N2.h], [Bt(N2)[0], N3.y]]);
    lab(s, W / 2, 36, `while ${chem('S2O3^2−')} lasts, I₂ is reduced back:`.replace('I₂', 'I<sub>2</sub>'), 12.5);
    lab(s, W / 2, 54, eq(RED), 12.5);
    lab(s, Bt(N2)[0] - 10, 166, `${chem('S2O3^2−')} used up`, 12.5, 'end');
    lab(s, (Rt(N1)[0] + Lf(N2)[0]) / 2, N1.y + N1.h / 2 + 17, 'oxidation', 11.5);
    // thiosulphate against time, to the blue colour
    arrow(s, [CK.ax, CK.ay], [330, CK.ay], { color: C.slate, w: 1.4 });
    arrow(s, [CK.ax, CK.ay], [CK.ax, 276], { color: C.slate, w: 1.4 });
    lab(s, CK.ax + 8, 270, `[${chem('S2O3^2−')}] / M`, 12, 'start');
    lab(s, CK.ax - 6, Yk(CK.c0) + 4, '0.002', 11.5, 'end');
    lab(s, CK.ax - 6, CK.ay - 1 + 4 - 4 + 2, '0', 11.5, 'end');
    lab(s, 190, CK.ay + 16, 'time / s', 12);
    path(s, [[CK.ax, Yk(CK.c0)], [Xk(CK.tB), Yk(0)]], { w: 1.9 });
    lab(s, 166, 314, `flask B, [I<sup>−</sup>] = 0.005 M`, 12, 'start');
    path(s, [[CK.ax, Yk(CK.c0)], [CK.ax + 6, Yk(CK.c0)]], { w: 1.5 });
    s.add(`<circle cx="${r1(Xk(CK.tB))}" cy="${r1(Yk(0))}" r="5.4" fill="none" stroke="${C.mari}" stroke-width="2.4"/>`);
    lab(s, Xk(CK.tB) + 14, CK.ay - 12, '150 s', 12, 'start');
    s.place([{ t: 'blue appears when thiosulphate is used up', p: [Xk(CK.tB), CK.ay + 5.4], hi: true, at: [[14, 408, 'start']] }]);
    return s;
  },
  check() {
    const s = d54.draw(d54.cases[0]);
    const out = flowChecks(s, ['iodide']);
    out.push([`The oxidation ${OXI} and the removal of iodine ${RED} are balanced; together they give ${NET}`, balanced(OXI) && balanced(RED) && balanced(NET)]);
    const sum = (a: string, b: string) => { const A = side(a.split(' → ')[0]), B = side(b.split(' → ')[0]), RA = side(a.split(' → ')[1]), RB = side(b.split(' → ')[1]); return { l: [A, B], r: [RA, RB] }; };
    const t = sum(OXI, RED), tot = (xs: { a: Atoms; q: number }[]) => xs.reduce((o, x) => { for (const e in x.a) o[e] = (o[e] ?? 0) + x.a[e]; return o; }, {} as Atoms);
    const cancel = (L: Atoms, R: Atoms) => { const l = { ...L }, r = { ...R }; for (const e in l) { const m = Math.min(l[e], r[e] ?? 0); l[e] -= m; if (r[e] !== undefined) r[e] -= m; } return [l, r]; };
    const [nl, nr] = cancel(tot(t.l), tot(t.r));
    const netL = side(NET.split(' → ')[0]).a, netR = side(NET.split(' → ')[1]).a;
    out.push(['Adding the two steps and cancelling I₂ and I⁻ leaves the net change: I⁻ is regenerated, so its concentration stays nearly constant', ['I', 'S'].every((e) => (nl[e] ?? 0) - (nr[e] ?? 0) === (netL[e] ?? 0) - (netR[e] ?? 0))]);
    const slope = CK.c0 / CK.tB, rateB = 0.001 / 150;
    out.push([`The drawn line falls from 0.002 M to zero in 150 s: ${fmt(slope * 1e5, 2)} × 10⁻⁵ M s⁻¹, twice the rate ${fmt(rateB * 1e6, 2)} × 10⁻⁶ M s⁻¹ of flask B (2 S₂O₃²⁻ per I₂)`, close(slope, 2 * rateB, 1e-9)]);
    out.push(['The line starts at 0.002 M on the axis and ends on the time axis, where the ring marks the blue', close(Yk(CK.c0), CK.ay - 90, 1e-9) && close(Yk(0), CK.ay, 1e-9)]);
    out.push(['The graph is named as flask B, [I⁻] = 0.005 M, the run whose time is 150 s', s.labels.some((l) => l.text === 'flask B, [I−] = 0.005 M') && RUNS[0].c === 0.005 && RUNS[0].t === CK.tB]);
    out.push(['The box equation 2I⁻ + H₂O₂ + 2H⁺ carries the coefficients of the balanced oxidation', OXI.startsWith('2I^− + H2O2 + 2H^+')]);
    out.push(['One highlight: the ring where the line meets the time axis, tagged “blue appears when thiosulphate is used up”; no box is highlighted', flowOf(s).nodes.every((n) => !n.hi) && s.tags.some((q) => q.name === 'blue appears when thiosulphate is used up')]);
    return out;
  },
};

/* ======================================================================
 * 05-d5  Rate against [I-] for the worked example
 * ====================================================================== */
const RUNS = [{ c: 0.005, t: 150 }, { c: 0.010, t: 76 }, { c: 0.015, t: 50 }];
const rateOf = (t: number) => 0.001 / t;
const G5 = { x0: 70, y0: 240 };
const CAP_05D5A = 'Rate against [I⁻] for flasks B, C and D: rates 6.67 × 10⁻⁶, 1.32 × 10⁻⁵ and 2.00 × 10⁻⁵ M s⁻¹ at 0.005, 0.010 and 0.015 M lie on a straight line through the origin: the order in iodide is 1, with slope k′ = 1.33 × 10⁻³ s⁻¹.';
const CAP_05D5B = 'The same runs as time against 1/[I⁻]: a straight line through the origin of slope t × [I⁻] ≈ 0.75 M s, so time is inversely proportional to [I⁻] and the rate is proportional to it.';
const d55: Diagram = {
  id: 'c12-12-05-d5',
  topic: 4,
  name: 'Rate against iodide concentration',
  cases: [{ chip: 'Rate against [I⁻]', cap: CAP_05D5A }, { chip: 'Time against 1/[I⁻]', cap: CAP_05D5B }],
  draw(c) {
    const rateCase = c.chip === 'Rate against [I⁻]';
    const s = new Sketch(W, 312);
    const X = rateCase ? (v: number) => G5.x0 + v * 16250 : (u: number) => G5.x0 + u * 1.136;
    const Y = rateCase ? (v: number) => G5.y0 - v * 86.36 : (t: number) => G5.y0 - t * 1.1875;
    arrow(s, [G5.x0, G5.y0], [332, G5.y0], { color: C.slate, w: 1.4 });
    arrow(s, [G5.x0, G5.y0], [G5.x0, 44], { color: C.slate, w: 1.4 });
    lab(s, G5.x0 + 8, 26, rateCase ? 'rate / 10<sup>−5</sup> M s<sup>−1</sup>' : '<i>t</i> / s', 12, 'start');
    lab(s, 332, G5.y0 + 34, rateCase ? '[I<sup>−</sup>] / M' : '1/[I<sup>−</sup>] / M<sup>−1</sup>', 12, 'end');
    const pts: P[] = RUNS.map((r) => rateCase ? [X(r.c), Y(rateOf(r.t) / 1e-5)] : [X(1 / r.c), Y(r.t)]);
    RUNS.forEach((r, i) => {
      const xv = rateCase ? r.c : 1 / r.c;
      path(s, [[pts[i][0], G5.y0], pts[i]], { color: C.grey, w: 1.2, dash: true });
      path(s, [[G5.x0, pts[i][1]], pts[i]], { color: C.grey, w: 1.2, dash: true });
      lab(s, pts[i][0], G5.y0 + 17, rateCase ? xv.toFixed(3) : fmt(xv, 0), 11.5);
    });
    if (rateCase) { [1, 2].forEach((v) => lab(s, G5.x0 - 6, Y(v) + 4, String(v), 11.5, 'end')); }
    else { [50, 100, 150].forEach((v) => lab(s, G5.x0 - 6, Y(v) + 4, String(v), 11.5, 'end')); }
    const end = rateCase ? 0.0158 : 205;
    const k = rateCase ? 1.33e-3 / 1e-5 : 0.75;
    path(s, [[G5.x0, G5.y0], [X(end), Y(k * end)]], { color: C.mari, w: 2.4 });
    pts.forEach((p) => s.point(p[0], p[1], 4, `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="4" fill="${C.ink}"/>`));
    if (rateCase) {
      lab(s, G5.x0 + 16, 48, 'slope = <i>k</i>′ = 1.33 × 10<sup>−3</sup> s<sup>−1</sup>', 12.5, 'start');
      s.place([{ t: 'order 1', p: [X(0.0125), Y(k * 0.0125)], hi: true, at: [[240, 190, 'start']] }]);
    } else {
      lab(s, G5.x0 + 16, 48, 'slope = <i>t</i>[I<sup>−</sup>] ≈ 0.75 M s', 12.5, 'start');
      s.place([{ t: 'through origin', p: [X(120), Y(0.75 * 120)], hi: true, at: [[92, 84, 'start']] }]);
    }
    return s;
  },
  check(c) {
    const rateCase = c.chip === 'Rate against [I⁻]';
    const s = d55.draw(c), out: Check[] = [];
    const rates = RUNS.map((r) => rateOf(r.t));
    out.push([`Rates 0.001/t = ${rates.map((r) => r.toExponential(2).replace('e-', ' × 10⁻').replace('e', '')).join(', ')} M s⁻¹: the text’s 6.67 × 10⁻⁶, 1.32 × 10⁻⁵, 2.00 × 10⁻⁵`, close(rates[0], 6.67e-6, 5e-9) && close(rates[1], 1.32e-5, 5e-8) && close(rates[2], 2.0e-5, 5e-8)]);
    out.push([`t × [I⁻] = ${RUNS.map((r) => fmt(r.t * r.c, 2)).join(', ')}: almost constant (0.75, 0.76, 0.75)`, RUNS.every((r) => close(r.t * r.c, 0.75, 0.011))]);
    if (rateCase) {
      const cs = RUNS.map((r) => r.c), k = rates.map((r, i) => r / cs[i]);
      const fit = rates.reduce((a, r, i) => a + r * cs[i], 0) / cs.reduce((a, x) => a + x * x, 0);
      out.push([`The fitted slope through the origin is ${(fit * 1e3).toFixed(2)} × 10⁻³ s⁻¹ and each rate/[I⁻] is ${k.map((x) => (x * 1e3).toFixed(2)).join(', ')} × 10⁻³: k′ = 1.33 × 10⁻³ s⁻¹`, close(fit, 1.33e-3, 5e-6) && k.every((x) => close(x, fit, 2e-5))]);
      const order = Math.log(rates[2] / rates[0]) / Math.log(cs[2] / cs[0]);
      out.push([`The order from flasks B and D is ${fmt(order, 2)} = 1; from B and C it is ${fmt(Math.log(rates[1] / rates[0]) / Math.log(2), 2)} ≈ 1 (the text’s 0.98)`, close(order, 1, 1e-9) && close(Math.log(rates[1] / rates[0]) / Math.log(2), 0.98, 0.01)]);
      out.push(['The three points are on the drawn line through the origin: each lies within 2 px of it', RUNS.every((r) => Math.abs(rateOf(r.t) / 1e-5 - 133 * r.c) * 86.36 < 2)]);
      out.push(['The line is named “order 1”', s.tags.some((q) => q.name === 'order 1')]);
    } else {
      const us = RUNS.map((r) => 1 / r.c), ts = RUNS.map((r) => r.t);
      const slope = ts.reduce((a, t, i) => a + t * us[i], 0) / us.reduce((a, x) => a + x * x, 0);
      out.push([`The fitted slope of t against 1/[I⁻] through the origin is ${fmt(slope, 3)} M s`, close(slope, 0.75, 0.01)]);
      out.push(['The three points are on the drawn line: each lies within 2 px of it', RUNS.every((r) => Math.abs(r.t - 0.75 / r.c) * 1.1875 < 2)]);
    }
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_12B: Diagram[] = [d1, d2, d3, d4, d5, d6, d51, d52, d53, d54, d55];
