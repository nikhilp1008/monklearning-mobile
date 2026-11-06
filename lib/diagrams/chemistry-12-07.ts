import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 7 (Alcohols, Phenols and Ethers): every drawing of the Master Reference
 * book on pp. 311–366, redrawn. Every page's vector shapes were counted (only pp. 315, 318, 325 and 334
 * hold a curve or a slanted line, p. 346 holds the bar chart's rectangles, and no page has a raster
 * image). FIVE drawings on five pages:
 *
 *   Figure 7.1 (p. 315; caption first on p. 314) — Topic 01, topic index 0.
 *   Figure 7.2 (p. 318; caption first on p. 317) — Topic 01, index 0.
 *   Figure 7.3 (p. 325; caption first on p. 324) — Topic 02, index 1.
 *   Figure 7.4 (p. 334; caption first on p. 333) — Topic 03, index 2.
 *   "Figure 1" (p. 346, unnumbered in the chapter's series) — Additional topic A, index 4.
 *
 * THE BOOK'S NUMBERS. Fig 7.3's points stand on the book's linear pKa scale (19.22 units a pKa step on
 * p. 325), at the book's values except carbonic acid 6.4 and ethanol 15.9, the chapter's set; its NaHCO₃
 * bracket stops short of carbonic acid and its Na bracket starts at ethanol (review rc7a). Figure 1's bar
 * lengths are the book's to 0.01 (path data, p. 346). Fig 7.4's temperatures and masses are the book's;
 * its skeletons are drawn at the ideal 120° zig-zag. Figs 7.1 and 7.2 carry no numbers but the printed
 * conditions; their layout is schematic, re-laid for a phone.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
/** The point r from c in direction deg (counter-clockwise from +x, y up). */
const az = (c: P, deg: number, r: number): P => [c[0] + r * Math.cos(rad(deg)), c[1] - r * Math.sin(rad(deg))];
/** The direction of b from a, 0–360 (counter-clockwise from +x, y up). */
const azOf = (a: P, b: P) => ((Math.atan2(a[1] - b[1], b[0] - a[0]) * 180) / Math.PI + 360) % 360;
const azGap = (x: number, y: number) => { const d = (((x - y) % 360) + 360) % 360; return Math.min(d, 360 - d); };
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
/** The angle at b between b→a and b→c, in degrees. */
const angleAt = (a: P, b: P, c: P) => azGap(azOf(b, a), azOf(b, c));

/* ---------- drawing helpers (as in chemistry-12-06.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
/** Every line a label must keep clear of, by sketch, with its name so a check can read it back. */
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
const namesOf = (s: Sketch, prefix: string) => (LINES.get(s) ?? []).filter((l) => l.name.startsWith(prefix)).map((l) => l.name);
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color, w: o.w });
  keep(s, [a, b], o.name);
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
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
const labelsNamed = (s: Sketch, t: string) => s.labels.filter((l) => l.text === t);

/** A line of STIX on the drawing, from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
}
const AT = 14;
/** An atom or group centred on p; its box is what bonds stop short of. */
function atom(s: Sketch, p: P, html: string, o: { size?: number; color?: string } = {}): Rect {
  const size = o.size ?? AT, w = widthOf(html, size);
  const rect: Rect = [p[0] - w / 2, p[1] - size * 0.4, p[0] + w / 2, p[1] + size * (html.includes('<sub>') ? 0.62 : 0.4)];
  s.labels.push({ text: plain(html), rect });
  s.text(p[0], p[1] + size * 0.36, html, { size, color: o.color ?? C.text });
  return rect;
}

/* ---------- bonds ---------- */
function exit(r: Rect | null, p: P, u: P, g: number): number {
  if (!r) return 0;
  for (let t = 0; t < 200; t += 0.25) { const q: P = [p[0] + u[0] * t, p[1] + u[1] * t]; if (q[0] < r[0] - g || q[0] > r[2] + g || q[1] < r[1] - g || q[1] > r[3] + g) return t; }
  return 200;
}
/** The two ends of a bond between two atoms, each stopped clear of its symbol. */
function ends(A: P, ra: Rect | null, B: P, rb: Rect | null, g = LABEL_GAP + 0.5): [P, P] {
  const L = len(A, B), u: P = [(B[0] - A[0]) / L, (B[1] - A[1]) / L];
  const ta = exit(ra, A, u, g), tb = exit(rb, B, [-u[0], -u[1]], g);
  return [[A[0] + u[0] * ta, A[1] + u[1] * ta], [B[0] - u[0] * tb, B[1] - u[1] * tb]];
}
function bond(s: Sketch, A: P, ra: Rect | null, B: P, rb: Rect | null, o: Stroke = {}) {
  path(s, ends(A, ra, B, rb), o);
}

/* ---------- formulas: what a species holds ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
const SUBDIGIT: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
/**
 * The atoms in a formula as printed ("C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)<sub>2</sub>", "C₂H₅–O–CH₃"), with
 * brackets; bonds, spaces and charges are skipped. "R" counts as its own symbol.
 */
function count(html: string): Tally {
  const t = html.replace(/<sup>[^<]*<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/[₀-₉]/g, (d) => SUBDIGIT[d]);
  let i = 0;
  const group = (): Tally => {
    let out: Tally = {};
    while (i < t.length && t[i] !== ')') {
      let part: Tally;
      if (t[i] === '(') { i++; part = group(); i++; } else if (/[A-Z]/.test(t[i])) {
        let sym = t[i++];
        if (i < t.length && /[a-z]/.test(t[i])) sym += t[i++];
        part = { [sym]: 1 };
      } else { i++; continue; }
      let n = '';
      while (i < t.length && /\d/.test(t[i])) n += t[i++];
      out = sum(out, times(part, n ? +n : 1));
    }
    return out;
  };
  return group();
}
/** Charge as printed in a superscript: "+", "−", "2−". */
const chargeOf = (html: string) => {
  const m = html.match(/<sup>(\d*)([+−])<\/sup>/);
  return m ? (m[2] === '+' ? 1 : -1) * (m[1] ? +m[1] : 1) : 0;
};
type Side = [number, string][];
const sideAtoms = (side: Side) => sum(...side.map(([n, f]) => times(count(f), n)));
const sideCharge = (side: Side) => side.reduce((q, [n, f]) => q + n * chargeOf(f), 0);
const tallyText = (t: Tally) => Object.entries(t).filter(([, v]) => v).map(([k, v]) => `${k}${v === 1 ? '' : v}`).join(' ');
const MASS: Record<string, number> = { C: 12.011, H: 1.008, O: 15.999 };
const massOf = (t: Tally) => Object.entries(t).reduce((m, [k, v]) => m + MASS[k] * v, 0);

/* ---------- trees (Figures 7.1 and 7.2) ---------- */
type Line = { html: string; size?: number; color?: string };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const EDGES = new WeakMap<Sketch, P[][]>();
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number } = {}) {
  const b: Box = { id, rect, lines };
  BOXES.set(s, [...(BOXES.get(s) ?? []), b]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const lh = 16, x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * lh + (l.size ?? 12.5) * 0.34, l.html, { size: l.size ?? 12.5, color: l.color ?? C.text }));
}
function edge(s: Sketch, pts: P[]) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${C.slate}" stroke-width="1.2" stroke-linejoin="round"/>`);
  EDGES.set(s, [...(EDGES.get(s) ?? []), pts]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
/** The tree as drawn: which box each connector really touches at each end. */
const treeOf = (s: Sketch) => (EDGES.get(s) ?? []).map((pts) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return [from?.id ?? '?', to?.id ?? '?'] as [string, string];
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
/** Connectors that properly cross another, connectors that run through a box they do not end on, and text that overruns its box. */
function treeClear(s: Sketch): Check[] {
  const E = EDGES.get(s) ?? [], B = BOXES.get(s) ?? [], seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => {
    const own = [pts[0], pts[pts.length - 1]];
    B.forEach((b) => { if (own.some((p) => onBorder(b.rect, p))) return; const inner: Rect = [b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2]; if (boxToLine(inner, pts) < 1e-9) through++; });
  });
  const tight = B.flatMap((b) => b.lines.filter((l) => widthOf(l.html, l.size ?? 12.5) + 8 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  const tall = B.filter((b) => b.lines.length * 16 + 4 > b.rect[3] - b.rect[1]).map((b) => b.id);
  return [
    [`No crossing lines: ${E.length} connectors, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every line of text fits its box with room to spare at Android's widths${tight.length || tall.length ? `: not ${[...tight, ...tall].join(', ')}` : ''}`, tight.length === 0 && tall.length === 0],
  ];
}

/* ===================================================================== */
/* Figure 7.1 · classification (Topic 01, p. 315)                         */
/* ===================================================================== */
const CAP71 = 'Classification of alcohols (by –OH count; 1°, 2°, 3°; allylic, benzylic, vinylic), phenols, and simple versus mixed ethers.';
type Leaf = { id: string; lines: string[] };
type Branch = { id: string; lines: string[]; leaves: Leaf[] };
const L = (id: string, ...lines: string[]): Leaf => ({ id, lines: lines.length ? lines : [id] });
/** p. 315, each box as printed, top to bottom. Long ones are broken over two lines for a phone. */
const ALCOHOLS: Branch[] = [
  { id: 'by number of –OH', lines: ['by number', 'of –OH'], leaves: [L('monohydric: one –OH'), L('dihydric: two –OH'), L('trihydric: three –OH'), L('polyhydric: many –OH')] },
  { id: 'by carbinol carbon', lines: ['by carbinol', 'carbon'], leaves: [L('1°', '1°: R–CH<sub>2</sub>–OH'), L('2°', '2°: R<sub>2</sub>CH–OH'), L('3°', '3°: R<sub>3</sub>C–OH')] },
  { id: 'by position of –OH', lines: ['by position', 'of –OH'], leaves: [L('allylic', 'allylic: CH<sub>2</sub>=CH–CH<sub>2</sub>–OH'), L('benzylic', 'benzylic: C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–OH'), L('vinylic', 'vinylic: CH<sub>2</sub>=CH–OH (unstable)')] },
];
const PHENOLS: Leaf[] = [L('monohydric: phenol'), L('dihydric', 'dihydric: catechol,', 'resorcinol, hydroquinone'), L('trihydric: pyrogallol')];
const ETHERS: Leaf[] = [L('simple', 'simple / symmetrical: C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub>'), L('mixed', 'mixed / unsymmetrical:', 'C<sub>2</sub>H<sub>5</sub>–O–CH<sub>3</sub>, C<sub>6</sub>H<sub>5</sub>–O–CH<sub>3</sub>')];
/** The criterion every chapter test turns on (Lucas, oxidation, dehydration) is the one highlighted. */
const HI71 = 'by carbinol carbon';
const G71 = { root: [4, 4, 150, 44] as Rect, trunk: 10, colL: 18, colR: 100, fork: 106, leafL: 112, leafR: 337, top: 58, pitch: 4, leaf1: 22, leaf2: 38, group: 8, family: 22 };
/** Ring positions of the –OH groups (1 = the first OH's carbon). */
const RINGS: Record<string, number[]> = { phenol: [1], catechol: [1, 2], resorcinol: [1, 3], hydroquinone: [1, 4], pyrogallol: [1, 2, 3] };
const fig71: Diagram = {
  id: 'c12-07-fig-7.1',
  topic: 0,
  name: 'Classifying alcohols, phenols and ethers',
  cases: [{ chip: 'Three families', cap: CAP71 }],
  draw() {
    const G = G71, s = new Sketch(W, 10);
    const leafH = (l: Leaf) => (l.lines.length > 1 ? G.leaf2 : G.leaf1);
    /** Leaves stacked from y; returns their centres and the bottom. */
    const stack = (leaves: Leaf[], y0: number, idp: string) => {
      let y = y0;
      const mids = leaves.map((l) => {
        const r: Rect = [G.leafL, y, G.leafR, y + leafH(l)];
        box(s, `${idp}${l.id}`, r, l.lines.map((html) => ({ html })));
        y += leafH(l) + G.pitch;
        return (r[1] + r[3]) / 2;
      });
      return { mids, bottom: y - G.pitch };
    };
    const fork = (from: number, mids: number[]) => mids.forEach((m) => edge(s, [[G.colR, from], [G.fork, from], [G.fork, m], [G.leafL, m]]));
    // alcohols: root, then three criteria, each with its leaves
    box(s, 'Alcohols', G.root, [{ html: 'Alcohols', size: 14 }, { html: 'R–OH', size: 13.5 }], { edge: C.ink, w: 1.6 });
    let y = G.top;
    ALCOHOLS.forEach((b) => {
      const { mids, bottom } = stack(b.leaves, y, ''), m = (y + bottom) / 2, hi = b.id === HI71;
      box(s, b.id, [G.colL, m - 20, G.colR, m + 20], b.lines.map((html) => ({ html, color: hi ? C.amber : C.text })), hi ? { edge: C.mari, w: 1.8 } : {});
      edge(s, [[G.trunk, G.root[3]], [G.trunk, m], [G.colL, m]]);
      fork(m, mids);
      y = bottom + G.pitch + G.group;
    });
    // phenols and ethers: a root, then its leaves
    ([['Phenols', 'Ar–OH', PHENOLS, 'ph:'], ['Ethers', 'R–O–R′', ETHERS, 'et:']] as [string, string, Leaf[], string][]).forEach(([name, f, leaves, idp]) => {
      y += G.family - G.group;
      const { mids, bottom } = stack(leaves, y, idp), m = (y + bottom) / 2;
      box(s, name, [4, m - 20, G.colR, m + 20], [{ html: name, size: 14 }, { html: f, size: 13.5 }], { edge: C.ink, w: 1.6 });
      fork(m, mids);
      y = bottom + G.pitch + G.group;
    });
    s.h = y - G.pitch - G.group + 4;
    return s;
  },
  check() {
    const s = fig71.draw(fig71.cases[0]), out: Check[] = [], tree = treeOf(s);
    const kids = (id: string) => tree.filter(([a]) => a === id).map(([, b]) => b);
    out.push([`Read back from where the lines end: Alcohols branches to ${kids('Alcohols').join(', ')}`, kids('Alcohols').join() === ALCOHOLS.map((b) => b.id).join()]);
    const each = ALCOHOLS.every((b) => kids(b.id).join() === b.leaves.map((l) => l.id).join());
    out.push([`Each criterion leads to its own leaves (4, 3, 3), Phenols to ${kids('Phenols').length} and Ethers to ${kids('Ethers').length}; nothing leads on from a leaf: ${BOXES.get(s)!.length} boxes, ${tree.length} lines`, each && kids('Phenols').join() === PHENOLS.map((l) => `ph:${l.id}`).join() && kids('Ethers').join() === ETHERS.map((l) => `et:${l.id}`).join() && BOXES.get(s)!.length === 21 && tree.length === 18]);
    const text = (l: Leaf) => l.lines.map(plain).join(' ');
    const printed = [...ALCOHOLS.flatMap((b) => b.leaves), ...PHENOLS, ...ETHERS].map(text);
    const book = ['monohydric: one –OH', 'dihydric: two –OH', 'trihydric: three –OH', 'polyhydric: many –OH', '1°: R–CH2–OH', '2°: R2CH–OH', '3°: R3C–OH', 'allylic: CH2=CH–CH2–OH', 'benzylic: C6H5–CH2–OH', 'vinylic: CH2=CH–OH (unstable)', 'monohydric: phenol', 'dihydric: catechol, resorcinol, hydroquinone', 'trihydric: pyrogallol', 'simple / symmetrical: C2H5–O–C2H5', 'mixed / unsymmetrical: C2H5–O–CH3, C6H5–O–CH3'];
    out.push(['Every leaf reads as printed on p. 315 (two broken over two lines)', JSON.stringify(printed) === JSON.stringify(book)]);
    // by number of –OH
    const words: Record<string, number> = { one: 1, two: 2, three: 3 }, prefix: Record<string, number> = { mono: 1, di: 2, tri: 3, poly: 4 };
    out.push(['By –OH count: mono-, di-, tri- name one, two, three –OH; poly- names more', ALCOHOLS[0].leaves.every((l) => { const [, pre, word] = l.id.match(/^(\w+?)hydric: (\w+)/)!; return word === 'many' ? prefix[pre] > 3 : prefix[pre] === words[word]; })]);
    // by carbinol carbon: R groups on the C–OH carbon, and its H, from the formula
    const degree = ALCOHOLS[1].leaves.map((l) => {
      const f = plain(l.lines[0]).split(': ')[1], c = count(f.split('–OH')[0]);
      return { deg: +l.id[0], R: c.R ?? 0, H: c.H ?? 0, C: c.C ?? 0 };
    });
    out.push([`By the carbinol carbon, read off each formula: ${degree.map((d) => `${d.deg}° has ${d.R} R and ${d.H} H on its C–OH carbon, ${d.R} + ${d.H} + 1 = ${d.R + d.H + 1} bonds`).join('; ')}`, degree.every((d) => d.R === d.deg && d.C === 1 && d.R + d.H + 1 === 4)]);
    // allylic, benzylic, vinylic: what the carbon bearing OH is bonded to
    const where = ALCOHOLS[2].leaves.map((l) => {
      const f = plain(l.lines[0]).split(': ')[1].replace(' (unstable)', ''), parts = f.split(/(–|=)/), n = parts.length;
      const intoOH = parts[n - 2], carb = parts[n - 3], toLeft = parts[n - 4], left = parts[n - 5], leftsLeft = parts[n - 6];
      const kind = toLeft === '=' || intoOH === '=' ? 'vinylic' : left === 'C6H5' ? 'benzylic' : leftsLeft === '=' ? 'allylic' : '?';
      const valence = parts.every((p, i) => i % 2 === 1 || !/^CH?\d?$/.test(p) || (count(p).H ?? 0) + [parts[i - 1], parts[i + 1]].reduce((b, x) => b + (x === '=' ? 2 : x === '–' ? 1 : 0), 0) === 4);
      return { id: l.id, kind, carb, f: tallyText(count(f)), valence };
    });
    out.push([`By position, read off each formula: ${where.map((w) => `${w.id}: the C–OH carbon ${w.carb} ${w.kind === 'vinylic' ? 'is itself in the C=C (sp²)' : w.kind === 'benzylic' ? 'is sp³ and bonded to the ring' : 'is sp³ and bonded to a C=C carbon'} (${w.f})`).join('; ')}; every carbon has four bonds`, where.every((w) => w.kind === w.id && w.valence)]);
    // phenols
    const phen = PHENOLS.map((l) => { const names = text(l).split(': ')[1].split(', '); return { pre: l.id.match(/^(\w+?)hydric/)![1], names, oh: names.map((n) => RINGS[n].length) }; });
    out.push([`Phenols by –OH count: ${phen.map((p) => `${p.names.map((n) => `${n} (OH at ${RINGS[n].join(', ')})`).join(', ')}`).join('; ')}, so mono-, di-, tri- hold`, phen.every((p) => p.oh.every((k) => k === prefix[p.pre]))]);
    // ethers
    const eth = ETHERS.map((l) => ({ id: l.id, ex: text(l).split(': ')[1].split(', ').map((e) => { const [a, b] = e.split('–O–'); return { e, sym: a === b, f: tallyText(count(e)) }; }) }));
    out.push([`Ethers: ${eth.map((x) => x.ex.map((e) => `${e.e} (${e.f}) has ${e.sym ? 'two identical' : 'two different'} groups`).join(', ')).join('; ')}: simple, then mixed, as filed`, eth[0].ex.every((e) => e.sym) && eth[1].ex.every((e) => !e.sym)]);
    out.push([`One highlight, the ${HI71} box`, BOXES.get(s)!.filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id).join() === HI71]);
    out.push(...treeClear(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.2 · four routes to phenol (Topic 01, p. 318)                  */
/* ===================================================================== */
const CAP72 = 'Four routes to phenol: from chlorobenzene (Dow process), benzenesulphonic acid, benzenediazonium chloride, and cumene.';
type Route = { id: string; rect: Rect; lines: string[]; tail: P; tip: P; cond: { y: number; lines: string[] }; steps: [Side, Side][] };
const PHENOL = 'C<sub>6</sub>H<sub>5</sub>OH', PHENOXIDE = 'C<sub>6</sub>H<sub>5</sub>ONa', HP = 'H<sup>+</sup>';
const ACIDIFY: [Side, Side] = [[[1, PHENOXIDE], [1, HP]], [[1, PHENOL], [1, 'Na<sup>+</sup>']]];
const PH72: Rect = [122, 128, 218, 170];
/** p. 318, the four sources at the corners, each arrow into phenol, the conditions as printed. The equations are the text's (pp. 317–319), balanced. */
const ROUTES: Route[] = [
  { id: 'chlorobenzene', rect: [4, 4, 164, 46], lines: ['chlorobenzene', 'C<sub>6</sub>H<sub>5</sub>Cl'], tail: [128, 50], tip: [150, 124], cond: { y: 74, lines: ['Dow: NaOH, 623 K,', '320 atm; then H<sup>+</sup>'] }, steps: [[[[1, 'C<sub>6</sub>H<sub>5</sub>Cl'], [2, 'NaOH']], [[1, PHENOXIDE], [1, 'NaCl'], [1, 'H<sub>2</sub>O']]], ACIDIFY] },
  { id: 'benzenesulphonic acid', rect: [176, 4, 336, 46], lines: ['benzenesulphonic acid', 'C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H'], tail: [212, 50], tip: [190, 124], cond: { y: 74, lines: ['1. NaOH, fuse', '2. H<sup>+</sup>'] }, steps: [[[[1, 'C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H'], [3, 'NaOH']], [[1, PHENOXIDE], [1, 'Na<sub>2</sub>SO<sub>3</sub>'], [2, 'H<sub>2</sub>O']]], ACIDIFY] },
  { id: 'benzenediazonium chloride', rect: [4, 252, 164, 308], lines: ['benzenediazonium', 'chloride', 'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup>'], tail: [128, 248], tip: [150, 174], cond: { y: 228, lines: ['H<sub>2</sub>O, warm'] }, steps: [[[[1, 'C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>'], [1, 'Cl<sup>−</sup>'], [1, 'H<sub>2</sub>O']], [[1, PHENOL], [1, 'N<sub>2</sub>'], [1, 'HCl']]]] },
  { id: 'cumene', rect: [176, 258, 336, 300], lines: ['cumene', 'C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)<sub>2</sub>'], tail: [212, 254], tip: [190, 174], cond: { y: 214, lines: ['1. O<sub>2</sub>', '2. H<sup>+</sup> / H<sub>2</sub>O'] }, steps: [[[[1, 'C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)<sub>2</sub>'], [1, 'O<sub>2</sub>']], [[1, 'C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)<sub>2</sub>OOH']]], [[[1, 'C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)<sub>2</sub>OOH']], [[1, PHENOL], [1, 'CH<sub>3</sub>COCH<sub>3</sub>']]]] },
];
/** Where a route's arrow runs at height y. */
const xAt = (r: Route, y: number) => r.tail[0] + ((y - r.tail[1]) / (r.tip[1] - r.tail[1])) * (r.tip[0] - r.tail[0]);
const fig72: Diagram = {
  id: 'c12-07-fig-7.2',
  topic: 0,
  name: 'Four routes to phenol',
  cases: [{ chip: 'To phenol', cap: CAP72 }],
  draw() {
    const s = new Sketch(W, 312);
    box(s, 'Phenol', PH72, [{ html: 'Phenol', size: 14, color: C.amber }, { html: PHENOL, size: 13.5, color: C.amber }], { edge: C.mari, w: 1.8 });
    ROUTES.forEach((r) => {
      box(s, r.id, r.rect, r.lines.map((html) => ({ html })));
      arrow(s, r.tail, r.tip, { w: 1.7, name: `route:${r.id}` });
      // each condition beside its own arrow, on the outer side, 8 px clear of it at the nearer end of the line
      const left = r.tail[0] < W / 2;
      r.cond.lines.forEach((html, i) => {
        const y = r.cond.y + i * 16, xs = [y - 9, y + 5].map((v) => xAt(r, v)), x = left ? Math.min(...xs) - 8 : Math.max(...xs) + 8;
        lab(s, x, y, html, { anchor: left ? 'end' : 'start', size: 12, color: C.slate });
      });
    });
    return s;
  },
  check() {
    const s = fig72.draw(fig72.cases[0]), out: Check[] = [];
    const B = BOXES.get(s)!, rectOf = (id: string) => B.find((b) => b.id === id)!.rect;
    const reads = ROUTES.map((r) => { const [a, b] = lineOf(s, `route:${r.id}`); return { id: r.id, from: rectDist(rectOf(r.id), a), to: rectDist(rectOf('Phenol'), b), back: rectDist(rectOf('Phenol'), a) }; });
    out.push([`Each arrow, read back, leaves its source (${reads.map((x) => fmt(x.from, 1)).join(', ')} px off its box) and ends at phenol (${reads.map((x) => fmt(x.to, 1)).join(', ')} px off): four routes in, none out`, reads.every((x) => x.from >= 2 && x.from <= 6 && x.to >= 2 && x.to <= 6 && x.back > x.to) && namesOf(s, 'route:').length === 4]);
    ROUTES.forEach((r) => {
      const ok = r.steps.every(([a, b]) => same(sideAtoms(a), sideAtoms(b)) && sideCharge(a) === sideCharge(b));
      const show = r.steps.map(([a, b]) => `${a.map(([n, f]) => `${n > 1 ? n : ''}${plain(f)}`).join(' + ')} → ${b.map(([n, f]) => `${n > 1 ? n : ''}${plain(f)}`).join(' + ')}`).join('; then ');
      out.push([`From ${r.id}: ${show}. Atoms (${tallyText(sideAtoms(r.steps[0][0]))}) and charge balance at every step, and the last step gives phenol`, ok && r.steps[r.steps.length - 1][1].some(([, f]) => f === PHENOL)]);
    });
    out.push(['The sources as printed: C₆H₅Cl, C₆H₅SO₃H, C₆H₅N₂⁺Cl⁻ and cumene C₆H₅CH(CH₃)₂ (C₉H₁₂); phenol C₆H₅OH is C₆H₆O', tallyText(count(ROUTES[3].lines[1])) === 'C9 H12' && tallyText(count(PHENOL)) === 'C6 H6 O']);
    const conds = ['Dow: NaOH, 623 K,', '320 atm; then H+', '1. NaOH, fuse', '2. H+', 'H2O, warm', '1. O2', '2. H+ / H2O'];
    out.push(['The conditions as printed beside each arrow: Dow: NaOH, 623 K, 320 atm; then H⁺ · 1. NaOH, fuse 2. H⁺ · H₂O, warm · 1. O₂ 2. H⁺ / H₂O', conds.every((c) => hasLabel(s, c))]);
    out.push(['Every condition sits on the outer side of its own arrow, within 12 px of it and nearer it than any other arrow', ROUTES.every((r) => labelsNamed(s, plain(r.cond.lines[0])).every((l) => { const mid: P = [(l.rect[0] + l.rect[2]) / 2, (l.rect[1] + l.rect[3]) / 2], d = (id: string) => boxToLine(l.rect, lineOf(s, `route:${id}`)); return ROUTES.every((o) => o === r || d(r.id) < d(o.id)) && (r.tail[0] < W / 2 ? l.rect[2] < xAt(r, mid[1]) : l.rect[0] > xAt(r, mid[1])) && d(r.id) < 12; }))]);
    out.push(...treeClear(s), ...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.3 · the acidity ladder (Topic 02, p. 325)                     */
/* ===================================================================== */
const CAP73 = 'The acidity ladder: carboxylic acid > carbonic acid > phenol > water > alcohols, with the NaHCO<sub>3</sub>, NaOH and Na reaction brackets.';
type Rung = { id: string; formula: string; pKa: number; shown: string; up: boolean; shift?: number };
/**
 * p. 325, left to right; above or below the line as printed. The book's path data puts each on one linear scale.
 * Carbonic acid and ethanol stand at the chapter's values, 6.4 and 15.9 (Additional topic A, NCERT), not the
 * book's 6.3 and 16.0 (founder decision 25).
 */
const RUNGS: Rung[] = [
  { id: 'carboxylic acid', formula: 'RCOOH', pKa: 4.5, shown: '4.5', up: true },
  { id: 'carbonic acid', formula: 'H<sub>2</sub>CO<sub>3</sub>', pKa: 6.4, shown: '6.4', up: false },
  { id: 'phenol', formula: 'C<sub>6</sub>H<sub>5</sub>OH', pKa: 10.0, shown: '10.0', up: true },
  { id: 'water', formula: 'H<sub>2</sub>O', pKa: 15.7, shown: '15.7', up: false, shift: -7 },
  { id: 'ethanol', formula: 'C<sub>2</sub>H<sub>5</sub>OH', pKa: 15.9, shown: '15.9', up: true },
  { id: '3° alcohol', formula: 'R<sub>3</sub>COH', pKa: 18, shown: '≈ 18', up: false, shift: 7 },
];
/**
 * p. 325's brackets: the reagent, and where each one's feet stand. The NaHCO₃ bracket stops 6 px short of
 * carbonic acid (only acids stronger than H₂CO₃ release CO₂); the Na bracket starts at ethanol, so it covers the
 * alcohols only, as the caption says.
 */
const BRACKETS: { id: string; text: string; from: number; to: number; row: 0 | 1 }[] = [
  { id: 'NaHCO3', text: 'reacts with NaHCO<sub>3</sub>', from: 4.5, to: 6.4 - 6 / 18.93, row: 0 },
  { id: 'NaOH', text: 'reacts with NaOH', from: 4.5, to: 10.0, row: 1 },
  { id: 'Na', text: 'reacts only with Na metal', from: 15.9, to: 18, row: 0 },
];
/** p. 325, path data: points at 49.78 + 19.22 (pKa − 4.5) in the figure's units. */
const BOOK73 = { x45: 49.78, perUnit: 19.22, xs: [49.78, 84.38, 155.51, 265.08, 270.85, 309.3] };
const G73 = { p0: 2.6, x0: 8, k: 18.93, axL: 4, axR: 334, y: 150, dot: 1.8, row: [58, 85], name: [104, 174], line: 15, sz: 11.5 };
const X73 = (p: number) => G73.x0 + (p - G73.p0) * G73.k;
const fig73: Diagram = {
  id: 'c12-07-fig-7.3',
  topic: 1,
  name: 'The acidity ladder',
  cases: [{ chip: 'pKa scale', cap: CAP73 }],
  draw() {
    const G = G73, s = new Sketch(W, 212);
    // the direction of acid strength, the highlight
    lab(s, 10, 16, 'stronger acid', { anchor: 'start', size: 12.5, color: C.amber });
    arrow(s, [96, 26], [8, 26], { color: C.mari, w: 1.8, name: 'stronger' });
    // the pKa line
    arrow(s, [G.axL, G.y], [G.axR, G.y], { w: 1.8, name: 'axis' });
    lab(s, 166, G.name[1], 'increasing p<i>K</i><sub>a</sub>', { size: 12, color: C.slate });
    RUNGS.forEach((r) => {
      const x = X73(r.pKa), lines = [r.id, r.formula, r.shown], half = Math.max(...lines.map((h) => widthOf(h, G.sz))) / 2;
      const cx = Math.min(Math.max(x + (r.shift ?? 0), half + 4), W - half - 4), y0 = r.up ? G.name[0] : G.name[1];
      s.dot(x, G.y, G.dot);
      lines.forEach((h, i) => lab(s, cx, y0 + i * G.line, h, { size: G.sz }));
      const top = r.up ? y0 + 2 * G.line + G.sz * 0.22 + LABEL_GAP + 0.5 : G.y + G.dot, bot = r.up ? G.y - G.dot : y0 - G.sz * 0.72 - LABEL_GAP - 0.5;
      path(s, [[x, top], [x, bot]], { color: C.slate, w: 1.1, name: `tick:${r.id}` });
    });
    BRACKETS.forEach((b) => {
      const y = G.row[b.row], a = X73(b.from), c = X73(b.to);
      path(s, [[a, y + 6], [a, y], [c, y], [c, y + 6]], { color: C.slate, w: 1.4, name: `bracket:${b.id}` });
    });
    lab(s, 4, G.row[0] - 9, BRACKETS[0].text, { anchor: 'start', size: G.sz, color: C.slate });
    lab(s, X73(6.4) + 8, G.row[1] - 9, BRACKETS[1].text, { anchor: 'start', size: G.sz, color: C.slate });
    lab(s, W - 4, G.row[0] - 9, BRACKETS[2].text, { anchor: 'end', size: G.sz, color: C.slate });
    return s;
  },
  check() {
    const s = fig73.draw(fig73.cases[0]), G = G73, out: Check[] = [];
    const back = (x: number) => G.p0 + (x - G.x0) / G.k;
    const read = RUNGS.map((r) => back(lineOf(s, `tick:${r.id}`)[0][0]));
    out.push([`Each point read back off the drawing stands at its printed pKa: ${RUNGS.map((r, i) => `${r.id} ${fmt(read[i], 2)}`).join(', ')}`, RUNGS.every((r, i) => close(read[i], r.pKa, 1e-9))]);
    const bookP = BOOK73.xs.map((x) => 4.5 + (x - BOOK73.x45) / BOOK73.perUnit);
    const printed = [4.5, 6.3, 10.0, 15.7, 16.0, 18], moved: Record<string, number> = { 'carbonic acid': 6.4, ethanol: 15.9 };
    out.push([`The book's own points, from p. 325's path data, read ${bookP.map((p) => fmt(p, 2)).join(', ')} on one linear scale; carbonic acid and ethanol are drawn at the chapter's 6.4 and 15.9 (Additional topic A, NCERT), the other four at the book's spacing`, bookP.every((p, i) => close(p, printed[i], 0.01)) && RUNGS.every((r, i) => close(r.pKa, moved[r.id] ?? printed[i], 1e-9))]);
    const order = [...RUNGS].sort((a, b) => a.pKa - b.pKa).map((r) => r.id);
    out.push([`Smaller pKa, stronger acid: left to right ${order.join(' > ')}, the caption's order (carboxylic acid > carbonic acid > phenol > water > alcohols); the stronger-acid arrow points left`, order.join() === RUNGS.map((r) => r.id).join() && lineOf(s, 'stronger')[1][0] < lineOf(s, 'stronger')[0][0] && lineOf(s, 'axis')[1][0] > lineOf(s, 'axis')[0][0]]);
    const feet = BRACKETS.map((b) => { const p = lineOf(s, `bracket:${b.id}`); return [back(p[0][0]), back(p[3][0])]; });
    out.push([`Each bracket's feet stand where set: ${BRACKETS.map((b, i) => `${b.id} ${fmt(feet[i][0], 2)}–${fmt(feet[i][1], 2)}`).join(', ')}`, BRACKETS.every((b, i) => close(feet[i][0], b.from, 1e-9) && close(feet[i][1], b.to, 1e-9))]);
    const xOf = (id: string) => lineOf(s, `tick:${id}`)[0][0], nb = lineOf(s, 'bracket:NaHCO3'), na = lineOf(s, 'bracket:Na');
    out.push([`The NaHCO₃ bracket covers the carboxylic acid and stops ${fmt(xOf('carbonic acid') - nb[3][0], 1)} px short of carbonic acid: only acids stronger than H₂CO₃ release CO₂`, close(nb[0][0], xOf('carboxylic acid'), 1e-9) && close(xOf('carbonic acid') - nb[3][0], 6, 1e-6)]);
    out.push(['The Na bracket runs from ethanol to the 3° alcohol, the alcohols only, leaving water out', close(na[0][0], xOf('ethanol'), 1e-9) && close(na[3][0], xOf('3° alcohol'), 1e-9) && xOf('water') < na[0][0]]);
    // what each reagent can deprotonate: K = 10^(pKa of the base's conjugate acid − pKa of the acid)
    const K = (acid: number, conj: number) => 10 ** (conj - acid), pk = (id: string) => RUNGS.find((r) => r.id === id)!.pKa;
    const bicarb = RUNGS.filter((r) => K(r.pKa, pk('carbonic acid')) > 1).map((r) => r.id), hydroxide = RUNGS.filter((r) => K(r.pKa, pk('water')) > 1).map((r) => r.id);
    const c = pk('carbonic acid'), w = pk('water'), e = pk('ethanol');
    out.push([`NaHCO₃ (conjugate acid H₂CO₃, ${c}): K = 10^(${c} − pKa) is above 1 only for ${bicarb.join(', ')} (${fmt(K(4.5, c), 0)}); for phenol ${K(10, c).toExponential(1)}, so phenol does not react`, bicarb.join() === 'carboxylic acid' && K(10, c) < 1]);
    out.push([`NaOH (conjugate acid water, ${w}): K = 10^(${w} − pKa) is above 1 for ${hydroxide.join(', ')}, phenol ${K(10, w).toExponential(1)}; for ethanol ${fmt(K(e, w), 2)} and the 3° alcohol ${K(18, w).toExponential(1)}, so the alcohols react only with Na metal`, ['carboxylic acid', 'carbonic acid', 'phenol'].every((x) => hydroxide.includes(x)) && K(e, w) < 1 && K(18, w) < 1]);
    out.push(['The labels as printed: stronger acid, increasing pKa, the three brackets, and each point\'s name, formula and value', ['stronger acid', 'increasing pKa', 'reacts with NaHCO3', 'reacts with NaOH', 'reacts only with Na metal', ...RUNGS.flatMap((r) => [r.id, plain(r.formula), r.shown])].every((t) => hasLabel(s, t))]);
    const ticks = RUNGS.every((r) => { const t = lineOf(s, `tick:${r.id}`), [, , v] = [r.id, r.formula, r.shown], l = labelsNamed(s, r.up ? v : r.id)[0].rect; return t[0][0] >= l[0] && t[0][0] <= l[2]; });
    out.push(['Each tick runs from its dot straight to its own label block', ticks]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 7.4 · boiling points at comparable mass (Topic 03, p. 334)      */
/* ===================================================================== */
const CAP74 = 'At comparable mass an alkane, an ether and an alcohol boil at 309, 308 and 390 K — the hydrogen-bonding jump.';
type Node = { el: 'C' | 'O' | 'H' | 'R'; at: P; mol: 1 | 2 };
type Mol = { id: string; bp: number; force: string; nodes: Node[]; bonds: [number, number][]; yc: number };
const G74 = { L: 22, x0: 14, rows: [70, 152, 236], text: 196, hb: 40, oh: 30, r: 30 };
/** A zig-zag of n vertices, 120° at every corner, from (x0, yc); `up` says whether the first vertex is the high one. */
const zig = (yc: number, n: number, up: boolean): P[] => Array.from({ length: n }, (_, i): P => [G74.x0 + i * G74.L * Math.cos(rad(30)), yc + ((i % 2 === 0) === up ? -1 : 1) * (G74.L * Math.sin(rad(30))) / 2]);
function molecules(): Mol[] {
  const [y1, y2, y3] = G74.rows;
  const pent = zig(y1, 5, false), eth = zig(y2, 5, false), but = zig(y3, 5, false);
  const O = but[4], H = az(O, 30, G74.oh), O2 = az(H, 30, G74.hb), R = az(O2, -30, G74.r);
  return [
    { id: 'n-pentane', bp: 309, force: 'dispersion only', yc: y1, nodes: pent.map((at): Node => ({ el: 'C', at, mol: 1 })), bonds: [[0, 1], [1, 2], [2, 3], [3, 4]] },
    { id: 'ethoxyethane', bp: 308, force: 'dispersion +', yc: y2, nodes: eth.map((at, i): Node => ({ el: i === 2 ? 'O' : 'C', at, mol: 1 })), bonds: [[0, 1], [1, 2], [2, 3], [3, 4]] },
    { id: 'butan-1-ol', bp: 390, force: 'hydrogen bonding', yc: y3, nodes: [...but.map((at, i): Node => ({ el: i === 4 ? 'O' : 'C', at, mol: 1 })), { el: 'H', at: H, mol: 1 }, { el: 'O', at: O2, mol: 2 }, { el: 'R', at: R, mol: 2 }], bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [6, 7]] },
  ];
}
/** The molecule drawn as a skeleton: its formula, with the H a bare vertex leaves unwritten. */
function formulaOf(m: Mol): Tally {
  const t: Tally = {};
  m.nodes.forEach((n, i) => {
    if (n.mol !== 1) return;
    t[n.el] = (t[n.el] ?? 0) + 1;
    if (n.el === 'C') t.H = (t.H ?? 0) + 4 - m.bonds.filter((b) => b.includes(i)).length;
  });
  return t;
}
const MU74 = { up: 40, tip: 13, lab: 10 };
const fig74: Diagram = {
  id: 'c12-07-fig-7.4',
  topic: 2,
  name: 'Boiling points at comparable mass',
  cases: [{ chip: 'Mass ≈ 72–74', cap: CAP74 }],
  draw() {
    const s = new Sketch(W, 292), G = G74;
    lab(s, W / 2, 18, 'similar molar mass (≈ 72–74 g mol<sup>−1</sup>)', { size: 12.5, color: C.slate });
    molecules().forEach((m) => {
      const rects = m.nodes.map((n) => (n.el === 'C' ? null : atom(s, n.at, n.el)));
      m.bonds.forEach(([a, b]) => bond(s, m.nodes[a].at, rects[a], m.nodes[b].at, rects[b], { w: 1.7, name: `${m.id}:${a}-${b}` }));
      const hi = m.id === 'butan-1-ol';
      lab(s, G.text, m.yc - 16, m.id, { anchor: 'start', size: 13.5 });
      lab(s, G.text, m.yc + 3, `bp ${m.bp} K`, { anchor: 'start', size: hi ? 14 : 13, color: hi ? C.amber : C.text });
      lab(s, G.text, m.yc + 21, m.force, { anchor: 'start', size: 12, color: C.slate });
      if (m.id === 'ethoxyethane') lab(s, G.text, m.yc + 37, 'weak dipole–dipole', { anchor: 'start', size: 12, color: C.slate });
      if (m.id === 'ethoxyethane') {
        const O = m.nodes[2].at;
        arrow(s, [O[0], O[1] - MU74.up], [O[0], O[1] - MU74.tip], { color: C.slate, w: 1.6, name: 'dipole' });
        lab(s, O[0] + MU74.lab, O[1] - 26, '<i>μ</i>', { anchor: 'start', size: 14, color: C.slate });
      }
      if (hi) {
        const [, , , , , H, O2] = m.nodes.map((n) => n.at), rH = rects[5], rO2 = rects[6];
        bond(s, H, rH, O2, rO2, { color: C.mari, w: 1.8, dash: true, name: 'hbond' });
        lab(s, 140, m.yc + 30, 'O–H···O', { size: 12, color: C.amber });
        lab(s, 140, m.yc + 46, 'hydrogen bond', { size: 12, color: C.amber });
      }
    });
    return s;
  },
  check() {
    const s = fig74.draw(fig74.cases[0]), out: Check[] = [], M = molecules();
    const f = M.map(formulaOf), mass = f.map(massOf);
    out.push([`Formulas counted off the skeletons (a bare vertex is C with 4 − bonds H): ${M.map((m, i) => `${m.id} ${tallyText(f[i])}, ${fmt(mass[i], 2)} g mol⁻¹`).join('; ')}: all within the printed ≈ 72–74 g mol⁻¹`, tallyText(f[0]) === 'C5 H12' && tallyText(f[1]) === 'C4 H10 O' && tallyText(f[2]) === 'C4 H10 O' && mass.every((x) => x > 71.5 && x < 74.5)]);
    out.push(['Ethoxyethane and butan-1-ol are both C₄H₁₀O (functional isomers), so their mass is the same', same(f[1], f[2])]);
    const chain = (m: Mol) => m.nodes.filter((n) => n.mol === 1).map((_, i) => m.bonds.filter((b) => b.includes(i)).length);
    out.push([`Unbranched chains (no vertex with three bonds); in the ether O sits between two ethyl groups (C–C–O–C–C), in the alcohol O ends the chain (butan-1-ol)`, M.every((m) => Math.max(...chain(m)) <= 2) && M[1].nodes.findIndex((n) => n.el === 'O') === 2 && M[2].nodes.findIndex((n) => n.el === 'O') === 4]);
    const corners = M.flatMap((m) => [1, 2, 3].map((i) => angleAt(m.nodes[i - 1].at, m.nodes[i].at, m.nodes[i + 1].at)));
    out.push([`Every zig-zag corner is ${fmt(corners[0], 1)}°`, corners.every((a) => close(a, 120, 1e-6))]);
    const bp = M.map((m) => m.bp);
    out.push([`Boiling points as printed, ${bp.join(', ')} K (p. 333's text: 309.1, 307.6, 390, which round to them): the ether within ${bp[0] - bp[1]} K of the alkane, the alcohol ${bp[2] - bp[0]} K above both`, bp[0] === Math.round(309.1) && bp[1] === Math.round(307.6) && bp[2] === 390 && Math.abs(bp[0] - bp[1]) <= 2 && bp[2] - Math.max(bp[0], bp[1]) > 50]);
    const [d0, d1] = lineOf(s, 'dipole'), O = M[1].nodes[2].at, bis = (azOf(O, M[1].nodes[1].at) + azOf(O, M[1].nodes[3].at)) / 2;
    out.push([`The ether's dipole arrow points at ${fmt(azOf(d0, d1), 0)}°, along the C–O–C bisector (${fmt(bis, 0)}°) and toward the O, the negative end`, close(azGap(azOf(d0, d1), bis + 180), 0, 1e-6) && d1[1] > d0[1] && d1[1] < O[1]]);
    const n = M[2].nodes, hb = angleAt(n[4].at, n[5].at, n[6].at);
    out.push([`The hydrogen bond: O–H···O straight (${fmt(hb, 0)}° at H), H···O (${G74.hb} px) drawn longer than O–H (${G74.oh} px) and dashed, to the O of a second molecule`, close(hb, 180, 1e-6) && G74.hb > G74.oh && n[6].mol === 2]);
    out.push(['The labels as printed, except the ether’s “dipole-dipole only”, which now reads dispersion + weak dipole–dipole: similar molar mass (≈ 72–74 g mol⁻¹), the three names, bp 309 K, bp 308 K, bp 390 K, dispersion only, dispersion + weak dipole–dipole, hydrogen bonding, μ, O–H···O, hydrogen bond', ['similar molar mass (≈ 72–74 g mol−1)', 'n-pentane', 'ethoxyethane', 'butan-1-ol', 'bp 309 K', 'bp 308 K', 'bp 390 K', 'dispersion only', 'dispersion +', 'weak dipole–dipole', 'hydrogen bonding', 'μ', 'O–H···O', 'hydrogen bond', 'R'].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" · the acidity ladder with pKa values (Additional A, p. 346) */
/* ===================================================================== */
const CAPA1 = 'The acidity ladder: the phenols and ethanol with NCERT’s p<i>K</i><sub>a</sub> values, and water, benzoic acid, 2,4-dinitrophenol, picric acid and carbonic acid added for reference. Only acids to the left of the carbonic-acid line liberate CO<sub>2</sub> from sodium bicarbonate.';
type Bar = { id: string; pKa: number; shown: string; ref?: boolean };
/** p. 346, top to bottom, with the value printed at each bar; the bar lengths are the book's (path data). */
const BARS: Bar[] = [
  { id: 'ethanol', pKa: 15.9, shown: '15.9', ref: true }, { id: 'water', pKa: 15.7, shown: '15.7', ref: true },
  { id: 'p-cresol', pKa: 10.2, shown: '10.2' }, { id: 'm-cresol', pKa: 10.1, shown: '10.1' }, { id: 'phenol', pKa: 10.0, shown: '10.0' },
  { id: 'm-nitrophenol', pKa: 8.3, shown: '8.3' }, { id: 'o-nitrophenol', pKa: 7.2, shown: '7.2' }, { id: 'p-nitrophenol', pKa: 7.1, shown: '7.1' },
  { id: 'benzoic acid', pKa: 4.19, shown: '4.2' }, { id: '2,4-dinitrophenol', pKa: 4.1, shown: '4.1' }, { id: 'picric acid', pKa: 0.4, shown: '0.4' },
];
/** p. 346, path data: bar ends in page units, from the axis at 231.32, 13.392 units a pKa step; the dashed line at 6.40. */
const BOOKA1 = { x0: 231.32, perUnit: 0.94699 * 14.1425, ends: [444.27, 441.59, 367.93, 366.59, 365.25, 342.48, 327.75, 326.41, 287.44, 286.23, 236.68], line: 6.4 };
const GA1 = { x0: 116, k: 12.2, top: 46, pitch: 22, bar: 13, axis: 292, sz: 11.5, max: 16 };
const XA1 = (p: number) => GA1.x0 + p * GA1.k;
const figAd1: Diagram = {
  id: 'c12-07-A-d1',
  topic: 4,
  name: 'Acidity ladder with pKa values',
  cases: [{ chip: 'pKa values', cap: CAPA1 }],
  draw() {
    const G = GA1, s = new Sketch(W, 334), xl = XA1(BOOKA1.line);
    // axes
    path(s, [[G.x0, G.top - 2], [G.x0, G.axis], [XA1(17), G.axis]], { color: C.slate, w: 1.2, name: 'axes' });
    for (let v = 0; v <= G.max; v += 2) {
      path(s, [[XA1(v), G.axis], [XA1(v), G.axis + 4]], { color: C.slate, w: 1.2, name: `tick:${v}` });
      lab(s, XA1(v), G.axis + 17, String(v), { size: 11, color: C.slate });
    }
    lab(s, XA1(8), G.axis + 36, 'p<i>K</i><sub>a</sub>  (smaller = stronger acid)', { size: 12 });
    // the bars, open, each with its printed value
    BARS.forEach((b, i) => {
      const y = G.top + i * G.pitch, x = XA1(b.pKa);
      path(s, [[G.x0, y], [x, y], [x, y + G.bar], [G.x0, y + G.bar]], { color: b.ref ? C.slate : C.ink, w: b.ref ? 1.4 : 1.7, name: `bar:${b.id}` });
      lab(s, G.x0 - 6, y + G.bar / 2 + 4, b.id, { anchor: 'end', size: G.sz, color: b.ref ? C.slate : C.text });
      lab(s, x + 5, y + G.bar / 2 + 4, b.shown, { anchor: 'start', size: G.sz });
    });
    // the carbonic-acid line, the highlight
    path(s, [[xl, 20], [xl, G.axis]], { color: C.mari, w: 1.8, dash: true, name: 'line' });
    lab(s, xl + 5, 16, 'carbonic acid (6.4)', { anchor: 'start', size: 12, color: C.amber });
    lab(s, xl - 5, 34, 'fizzes with NaHCO<sub>3</sub>', { anchor: 'end', size: 11, color: C.amber });
    lab(s, xl + 5, 34, 'no fizz', { anchor: 'start', size: 11, color: C.slate });
    return s;
  },
  check() {
    const s = figAd1.draw(figAd1.cases[0]), G = GA1, out: Check[] = [];
    const read = BARS.map((b) => (lineOf(s, `bar:${b.id}`)[1][0] - G.x0) / G.k);
    out.push([`Each bar read back off the drawing: ${BARS.map((b, i) => `${b.id} ${fmt(read[i], 2)}`).join(', ')}, labelled as printed`, BARS.every((b, i) => close(read[i], b.pKa, 1e-9) && hasLabel(s, b.shown) && Math.abs(+b.shown - b.pKa) <= 0.05)]);
    const book = BOOKA1.ends.map((x) => (x - BOOKA1.x0) / BOOKA1.perUnit);
    out.push([`The book's bars, from p. 346's path data, end at ${book.map((p) => fmt(p, 2)).join(', ')}: each within 0.01 of the value drawn here (benzoic acid's bar is 4.19, the text's value, printed 4.2)`, book.every((p, i) => close(p, BARS[i].pKa, 0.011))]);
    out.push(['Top to bottom in the book\'s order, pKa falling all the way: weakest acid at the top, strongest at the bottom', BARS.every((b, i) => i === 0 || b.pKa < BARS[i - 1].pKa)]);
    const lx = lineOf(s, 'line')[0][0], fizz = BARS.filter((b) => 10 ** (BOOKA1.line - b.pKa) > 1).map((b) => b.id), left = BARS.filter((b) => lineOf(s, `bar:${b.id}`)[1][0] < lx).map((b) => b.id);
    out.push([`HA + HCO₃⁻ ⇌ A⁻ + H₂CO₃ has K = 10^(6.4 − pKa), above 1 only for ${fizz.join(', ')}: exactly the bars that end left of the line (Example A.2's answer)`, fizz.join() === left.join() && fizz.join() === 'benzoic acid,2,4-dinitrophenol,picric acid' && close((lx - G.x0) / G.k, 6.4, 1e-9)]);
    const pk = (id: string) => BARS.find((b) => b.id === id)!.pKa;
    out.push([`The text's orders hold on these values: p-cresol < phenol < m-nitrophenol < p-nitrophenol (${[pk('p-cresol'), pk('phenol'), pk('m-nitrophenol'), pk('p-nitrophenol')].join(', ')}); ortho and para below meta; every mononitrophenol above 7; ethanol just above water`, pk('p-cresol') > pk('phenol') && pk('phenol') > pk('m-nitrophenol') && pk('m-nitrophenol') > pk('p-nitrophenol') && pk('o-nitrophenol') < pk('m-nitrophenol') && ['o', 'm', 'p'].every((x) => pk(`${x}-nitrophenol`) > 7) && pk('ethanol') > pk('water')]);
    out.push(['The axis runs 0–16 in steps of 2, as printed, and every bar ends inside it', BARS.every((b) => b.pKa < G.max) && [0, 2, 4, 6, 8, 10, 12, 14, 16].every((v) => hasLabel(s, String(v)))]);
    out.push(['The labels as printed: carbonic acid (6.4), fizzes with NaHCO₃, no fizz, pKa (smaller = stronger acid), and the eleven names', ['carbonic acid (6.4)', 'fizzes with NaHCO3', 'no fizz', 'pKa  (smaller = stronger acid)', ...BARS.map((b) => b.id)].every((t) => hasLabel(s, t))]);
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_07: Diagram[] = [fig71, fig72, fig73, fig74, figAd1];
