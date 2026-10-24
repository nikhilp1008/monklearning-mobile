import { C, LABEL_GAP, Rect, Sketch, r1, tagW } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 11, CHAPTER 1 (Some Basic Concepts of Chemistry): every
 * drawing of the Master Reference book on pp. 7–71, redrawn.
 *
 * The chapter has one drawing: Figure 1.1, the classification of matter,
 * printed on the "CHAPTER 1 · FIGURES" page (p. 11); its caption is printed a
 * first time on p. 10, where the text cites it, with "(see next page)" after
 * it (dropped here: the caption is taken from p. 11, which has no pointer).
 * There are no unnumbered drawings. Pages 7–71 were checked one by one on the
 * page images: p. 7 (title page) and the top of p. 8 (contents) are not
 * copied; everything else is prose, bullet lists, typeset equations and
 * fractions (the "mole triangle" of p. 33 is the typeset equation
 * n = m/M = N/N_A = V/V_m, not a drawn triangle), boxed answers (pp. 17, 22,
 * 23, 28, 34, 35, 42, 43, 48, 49, 55, 56), the cheat-sheet boxes and the one
 * table of the chapter, "The Distribution" (p. 67, Additional topic D), which
 * is a table and not a drawing. Blank lower halves (pp. 14, 38, 45, 51, 58)
 * hold nothing.
 *
 * Figure 1.1 is the book's tree (Matter → Pure Substances / Mixtures → four
 * kinds, each with its examples). Four boxes in a row do not fit a phone's
 * width with their examples, so each branch's two kinds are stacked under it,
 * joined by an elbow line, with Matter splitting into the two branches as in
 * the book. The `check` reads the tree back off the drawn lines (which box
 * each line leaves and which it reaches), finds each example under its own
 * box, compares both with the book's tree and its caption, and tests the
 * chemistry the tree states: an element's examples are each one kind of atom,
 * a compound's each two or more.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 1) => String(+n.toFixed(d));
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');

/* ---------- drawing helpers (as in physics-12-03.ts) ---------- */
/** Every line a label must keep clear of, by sketch: `clearCheck` measures each tag and label against them. */
const LINES = new WeakMap<Sketch, P[][]>();
const keep = (s: Sketch, pts: P[]) => { const l = LINES.get(s) ?? []; l.push(pts); LINES.set(s, l); };
/** An open line through points: rounded joins, kept for the clearance check. */
function path(s: Sketch, pts: P[], o: { color?: string; w?: number } = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"/>`);
  keep(s, pts);
}
/** Distance from a point to a rectangle (0 inside it). */
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
/** How far every tag and every label stays from every kept line, sampled each half pixel: the closest one, and what it is. */
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
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
/** Every label inside the frame (the kit's audit checks tags only). */
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};

/* ===================================================================== */
/* Figure 1.1 · classification of matter (Topic 01, p. 11)                */
/* ===================================================================== */
type Kind = { name: string; ex: string[] };
type Branch = { name: string; kinds: [Kind, Kind] };
/** The book's tree, box for box, with each kind's examples as printed (p. 11). */
const TREE: { root: string; branches: [Branch, Branch] } = {
  root: 'Matter',
  branches: [
    { name: 'Pure Substances', kinds: [{ name: 'Elements', ex: ['Fe', 'O<sub>2</sub>'] }, { name: 'Compounds', ex: ['H<sub>2</sub>O', 'NaCl'] }] },
    { name: 'Mixtures', kinds: [{ name: 'Homogeneous', ex: ['salt solution', 'air'] }, { name: 'Heterogeneous', ex: ['sand + iron filings'] }] },
  ],
};
const CAP11 = 'Classification of matter into pure substances (elements, e.g. Fe, O<sub>2</sub>; compounds, e.g. H<sub>2</sub>O, NaCl) and mixtures (homogeneous, e.g. salt solution, air; heterogeneous, e.g. sand + iron filings).';
/**
 * Layout: Matter at the top, centred over the two branches; each branch's box starts at `colX`, its
 * two kinds stacked under it at `colX + 24`, joined to it by an elbow down a
 * trunk at `colX + 12`; each kind's examples sit under its box.
 */
const G11 = { rootY: 8, branchY: 62, kindY: [108, 166], exDrop: 42, colX: [14, 180], trunk: 12, indent: 24, gap: 5, exSize: 14, h: 222 };
const tagRect = (x: number, y: number, t: string, anchor: 'start' | 'middle' = 'start'): Rect => {
  const w = tagW(t), x0 = anchor === 'middle' ? x - w / 2 : x;
  return [x0, y, x0 + w, y + 22];
};
const geo11 = () => {
  const { rootY, branchY, kindY, colX, trunk, indent } = G11;
  const branches = TREE.branches.map((b, i) => ({
    name: b.name,
    rect: tagRect(colX[i], branchY, b.name),
    trunkX: colX[i] + trunk,
    kinds: b.kinds.map((k, j) => ({ ...k, rect: tagRect(colX[i] + indent, kindY[j], k.name) })),
  }));
  // Matter centred over its two branches, so the split is symmetric as in the book
  const rootX = branches.reduce((t, b) => t + (b.rect[0] + b.rect[2]) / 2, 0) / 2;
  const root = tagRect(rootX, rootY, TREE.root, 'middle');
  return { root, rootX, branches };
};
const fig11: Diagram = {
  id: 'c11-01-fig-1.1',
  topic: 0,
  name: 'Classification of matter',
  cases: [{ chip: 'Classification', cap: CAP11 }],
  draw() {
    const s = new Sketch(W, G11.h);
    const g = geo11(), gap = G11.gap, link = { color: C.slate, w: 1.4 };
    // Matter splits into the two branches, as in the book
    g.branches.forEach((b, i) => {
      const from: P = [g.rootX + (i ? 12 : -12), g.root[3] + gap], to: P = [(b.rect[0] + b.rect[2]) / 2, b.rect[1] - gap];
      path(s, [from, to], link);
    });
    // each branch to its two kinds: down its trunk, then right into the box
    g.branches.forEach((b) => b.kinds.forEach((k) => {
      const my = (k.rect[1] + k.rect[3]) / 2;
      path(s, [[b.trunkX, b.rect[3] + gap], [b.trunkX, my], [k.rect[0] - gap, my]], link);
    }));
    s.tag(g.root[0], g.root[1], TREE.root, null, null, { hi: true });
    g.branches.forEach((b) => {
      s.tag(b.rect[0], b.rect[1], b.name, null, null);
      b.kinds.forEach((k) => {
        s.tag(k.rect[0], k.rect[1], k.name, null, null);
        s.sym(k.rect[0] + 2, k.rect[1] + G11.exDrop, k.ex.join(', '), { size: G11.exSize, anchor: 'start', color: C.slate });
      });
    });
    return s;
  },
  check() {
    const s = fig11.draw(fig11.cases[0]);
    const tags = s.tags, lines = LINES.get(s) ?? [];
    const names = tags.map((t) => t.name);
    // which box a line's end belongs to: the tag it stops just short of
    const boxAt = (p: P) => tags.find((t) => rectDist(t.rect, p) <= G11.gap + 0.5)?.name ?? '?';
    const edges = lines.map((l) => `${boxAt(l[0])} → ${boxAt(l[l.length - 1])}`).sort();
    const want = TREE.branches.flatMap((b) => [`${TREE.root} → ${b.name}`, ...b.kinds.map((k) => `${b.name} → ${k.name}`)]).sort();
    // the parent sits above its child in every link
    const rect = (n: string) => tags.find((t) => t.name === n)!.rect;
    const mari = s.svg().match(new RegExp(`x="[0-9.]+"(?= y="[0-9.]+" width="[0-9.]+" height="22" rx="11" fill="#fff" stroke="${C.mari}")`, 'g')) ?? [];
    const downward = lines.every((l) => rect(boxAt(l[0]))[3] < rect(boxAt(l[l.length - 1]))[1]);
    // each example line belongs to the box just above it, left-aligned with it
    const exOf = (k: string) => s.labels.filter((lb) => { const r = rect(k); return Math.abs(lb.rect[0] - r[0]) < 6 && lb.rect[1] > r[3] && lb.rect[1] - r[3] < 24; }).map((lb) => lb.text);
    const kinds = TREE.branches.flatMap((b) => b.kinds);
    const exOk = kinds.every((k) => JSON.stringify(exOf(k.name)) === JSON.stringify([plain(k.ex.join(', '))]));
    // the chemistry the tree states: elements are one kind of atom, compounds two or more
    const symbols = (f: string) => new Set(plain(f).match(/[A-Z][a-z]?/g) ?? []);
    const [el, co] = TREE.branches[0].kinds;
    const elOk = el.ex.every((f) => symbols(f).size === 1);
    const coOk = co.ex.every((f) => symbols(f).size >= 2);
    const elems = (f: string) => [...symbols(f)].join(' + ');
    // the caption names every kind (in lower case, as it prints them) followed by its examples
    const capOk = kinds.every((k) => CAP11.includes(`${k.name.toLowerCase()}, e.g. ${k.ex.join(', ')}`)) && TREE.branches.every((b) => CAP11.includes(b.name.toLowerCase()));
    return [
      [`Seven boxes, named as the book names them: ${names.join(', ')}`, JSON.stringify(names) === JSON.stringify([TREE.root, ...TREE.branches.flatMap((b) => [b.name, ...b.kinds.map((k) => k.name)])])],
      ['Only Matter, the thing classified, is marigold', mari.length === 1 && mari[0] === `x="${r1(rect(TREE.root)[0])}"`],
      [`Read off the drawn lines, the links are ${edges.join('; ')}: Matter splits into Pure Substances and Mixtures, Pure Substances into Elements and Compounds, Mixtures into Homogeneous and Heterogeneous, and nothing else`, JSON.stringify(edges) === JSON.stringify(want)],
      ['Every link runs down from the parent to its child', downward],
      [`Under each kind, its own examples as the book prints them: ${kinds.map((k) => `${k.name}: ${exOf(k.name).join(' | ')}`).join('; ')}`, exOk],
      [`The elements' examples are each one kind of atom (${el.ex.map((f) => `${plain(f)}: ${elems(f)}`).join(', ')})`, elOk],
      [`The compounds' examples are each two or more elements combined (${co.ex.map((f) => `${plain(f)}: ${elems(f)}`).join(', ')})`, coOk],
      ['The caption, word for word from p. 11, names both branches and every kind with the same examples as the drawing', capOk],
      ['Each branch box stands on its own side of the drawing, its kinds stacked under it, all inside the frame', geo11().branches.every((b, i) => b.kinds.every((k) => k.rect[0] > b.trunkX && (i === 0 ? k.rect[2] < geo11().branches[1].rect[0] : k.rect[2] < W - 2)))],
      clearCheck(s),
      labelsApart(s),
      inFrame(s),
    ];
  },
};

export const DIAGRAMS_CHEMISTRY_11_01: Diagram[] = [fig11];
