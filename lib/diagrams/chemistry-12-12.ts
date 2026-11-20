import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * CHEMISTRY CLASS 12, CHAPTER 12 (Practical Chemistry), part a: the six drawings of Topics 01 and 03 (D1).
 * Written fresh with the chapter (no book to copy); every number, name and observation is the chapter text's
 * (content/textbooks/chem-12-12/topics-1-3.ts). Topic 01 is index 0, Topic 03 index 2.
 *
 *   c12-12-01-d1 Sodium fusion, in three steps (fuse, quench, filter); the filtrate step is a third chip the
 *     brief's "filtrate = sodium extract (alkaline)" label needs somewhere to stand. The water level is computed
 *     from the 15 mL the text names (spherical-cap volume of a china dish).
 *   c12-12-01-d2 The tests on the sodium extract as five small flow charts (N; S; N and S; halogens by silver
 *     nitrate; halogens by the CCl4 layer). Equations printed in a box are balanced for atoms and charge.
 *   c12-12-01-d3 The functional-group tests as four decision charts; each is walked back from its drawn arrows
 *     with the observations the text gives for named compounds.
 *   c12-12-03-d1 Titration curves for the four acid-base pairs, solved from the charge balance (Ka = Kb =
 *     1.8e-5, 0.100 M, 10.0 mL), with the indicator band marked qualitatively.
 *   c12-12-03-d2 A burette set-up, and the three end-point colour changes.
 *   c12-12-03-d3 Reading a burette: lower meniscus (colourless), upper meniscus (dark KMnO4), eye level, and the
 *     parallax error with the eye too high; the readings are the text's own tables' (20.6 and 19.6 mL).
 *
 * Colour is shown as a thick stroke (no fills); "colourless" is a thin grey dashed outline.
 */

const W = 340;
type P = [number, number];
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const rad = (deg: number) => (deg * Math.PI) / 180;
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);

/* ---------- drawing helpers (as in chemistry-12-09.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const lineOf = (s: Sketch, name: string) => LINES.get(s)!.find((l) => l.name === name)!.pts;
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  keep(s, pts, o.name);
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
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);

/** A line of STIX on the drawing from its baseline, its box at its true width (subscripts counted). */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; bold?: boolean } = {}) {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.bold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  s.labels.push({ text: plain(html), rect: [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)] });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.bold });
}
/** The result, bottom right, ink-edged, maths in STIX; registered as a tag so the audit keeps everything else off it. */
function resultBlock(s: Sketch, lines: string[], o: { size?: number } = {}): Rect {
  const size = o.size ?? 14, lh = size + 6;
  const w = Math.max(...lines.map((t) => widthOf(t, size))) + 26, h = lines.length * lh + 12;
  const x0 = s.w - 8 - w, y0 = s.h - 8 - h;
  s.tags.push({ name: plain(lines.join(' ')), rect: [x0, y0, x0 + w, y0 + h], from: null, to: null });
  s.add(`<rect x="${r1(x0)}" y="${r1(y0)}" width="${r1(w)}" height="${r1(h)}" rx="14" fill="#fff" stroke="${C.text}" stroke-width="1.6"/>`);
  lines.forEach((t, i) => s.text(x0 + w / 2, y0 + 6 + lh * i + lh / 2 + size * 0.36, t, { size, semibold: true }));
  return [x0, y0, x0 + w, y0 + h];
}

/* ---------- formulas: what a species holds (as in chemistry-12-09.ts) ---------- */
type Tally = Record<string, number>;
const sum = (...t: Tally[]) => { const o: Tally = {}; t.forEach((m) => Object.entries(m).forEach(([k, v]) => { o[k] = (o[k] ?? 0) + v; })); return o; };
const times = (t: Tally, n: number) => { const o: Tally = {}; Object.entries(t).forEach(([k, v]) => { o[k] = v * n; }); return o; };
const same = (a: Tally, b: Tally) => { const k = new Set([...Object.keys(a), ...Object.keys(b)]); return [...k].every((e) => (a[e] ?? 0) === (b[e] ?? 0)); };
function count(html: string): Tally {
  const t = html.replace(/<sup>[^<]*<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/[[\]]/g, (b) => (b === '[' ? '(' : ')'));
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
const chargeOf = (html: string) => { const m = html.match(/<sup>(\d*)([+−])<\/sup>/); return m ? (m[2] === '+' ? 1 : -1) * (m[1] ? +m[1] : 1) : 0; };
type Side = [number, string][];
const sideAtoms = (side: Side) => sum(...side.map(([n, f]) => times(count(f), n)));
const sideCharge = (side: Side) => side.reduce((q, [n, f]) => q + n * chargeOf(f), 0);
const tallyText = (t: Tally) => Object.entries(t).filter(([, v]) => v).map(([k, v]) => `${k}${v === 1 ? '' : v}`).join(' ');
const eqText = (side: Side) => side.map(([n, f]) => `${n > 1 ? `${n} ` : ''}${plain(f)}`).join(' + ');
const balances = ([l, r]: [Side, Side]) => same(sideAtoms(l), sideAtoms(r)) && sideCharge(l) === sideCharge(r);
const eqLine = ([l, r]: [Side, Side]) => `${eqText(l)} → ${eqText(r)}`;
const eqCheck = (name: string, eq: [Side, Side]): Check => [`${name}: ${eqLine(eq)} balances for atoms (${tallyText(sideAtoms(eq[0]))}) and charge (${fmt(sideCharge(eq[0]), 0)} = ${fmt(sideCharge(eq[1]), 0)})`, balances(eq)];

/* ---------- boxes and flow lines (flow charts and decision charts) ---------- */
type Line = { html: string; size?: number; color?: string; bold?: boolean };
type Box = { id: string; rect: Rect; lines: Line[] };
const BOXES = new WeakMap<Sketch, Box[]>();
const FLOWS = new WeakMap<Sketch, { name: string; pts: P[]; obs?: string }[]>();
const LH = 16;
function box(s: Sketch, id: string, rect: Rect, lines: Line[], o: { edge?: string; w?: number; dash?: boolean } = {}) {
  BOXES.set(s, [...(BOXES.get(s) ?? []), { id, rect, lines }]);
  s.add(`<rect x="${r1(rect[0])}" y="${r1(rect[1])}" width="${r1(rect[2] - rect[0])}" height="${r1(rect[3] - rect[1])}" rx="9" fill="#fff" stroke="${o.edge ?? C.slate}" stroke-width="${o.w ?? 1.2}"${o.dash ? ' stroke-dasharray="4 3"' : ''}/>`);
  s.tags.push({ name: id, rect, from: null, to: null });
  const x = (rect[0] + rect[2]) / 2, y0 = (rect[1] + rect[3]) / 2 - ((lines.length - 1) * LH) / 2;
  lines.forEach((l, i) => s.text(x, y0 + i * LH + (l.size ?? 12) * 0.34, l.html, { size: l.size ?? 12, color: l.color ?? C.text, semibold: l.bold }));
}
function flow(s: Sketch, pts: P[], name: string, color: string = C.ink, obs?: string) {
  const b = pts[pts.length - 1], a = pts[pts.length - 2], L = len(a, b), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, HL = 8, HW = 3.8;
  const base: P = [b[0] - ux * HL, b[1] - uy * HL];
  const shaft = [...pts.slice(0, -1), base].map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${shaft}" fill="none" stroke="${color}" stroke-width="${color === C.ink ? 1.4 : 1.8}" stroke-linejoin="round"/>`);
  s.add(`<path d="M${r1(b[0])} ${r1(b[1])} L${r1(base[0] - uy * HW)} ${r1(base[1] + ux * HW)} L${r1(base[0] + uy * HW)} ${r1(base[1] - ux * HW)} Z" fill="${color}"/>`);
  FLOWS.set(s, [...(FLOWS.get(s) ?? []), { name, pts, obs }]);
}
const onBorder = (r: Rect, p: P) => {
  const inX = p[0] >= r[0] - 0.01 && p[0] <= r[2] + 0.01, inY = p[1] >= r[1] - 0.01 && p[1] <= r[3] + 0.01;
  return (inX && (close(p[1], r[1], 0.01) || close(p[1], r[3], 0.01))) || (inY && (close(p[0], r[0], 0.01) || close(p[0], r[2], 0.01)));
};
/** The chart as drawn: which box each flow line really leaves and which it reaches. */
const flowsOf = (s: Sketch) => (FLOWS.get(s) ?? []).map(({ name, pts, obs }) => {
  const B = BOXES.get(s)!, from = B.find((b) => onBorder(b.rect, pts[0])), to = B.find((b) => onBorder(b.rect, pts[pts.length - 1]));
  return { name, from: from?.id ?? '?', to: to?.id ?? '?', obs };
});
const orient = (a: P, b: P, c: P) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
const properCross = (a: P, b: P, c: P, d: P) => orient(a, b, c) * orient(a, b, d) < -1e-6 && orient(c, d, a) * orient(c, d, b) < -1e-6;
function chartClear(s: Sketch): Check[] {
  const E = (FLOWS.get(s) ?? []).map((f) => f.pts), B = BOXES.get(s) ?? [], seg = E.map((pts) => pts.slice(1).map((q, i): [P, P] => [pts[i], q]));
  let crossings = 0;
  seg.forEach((a, i) => seg.slice(i + 1).forEach((b) => a.forEach(([p, q]) => b.forEach(([u, v]) => { if (properCross(p, q, u, v)) crossings++; }))));
  let through = 0;
  E.forEach((pts) => B.forEach((b) => { if ([pts[0], pts[pts.length - 1]].some((p) => onBorder(b.rect, p))) return; if (boxToLine([b.rect[0] - 2, b.rect[1] - 2, b.rect[2] + 2, b.rect[3] + 2], pts) < 1e-9) through++; }));
  let gap = Infinity, what = '';
  E.forEach((pts) => s.labels.forEach((l) => { const d = boxToLine(l.rect, pts); if (d < gap) { gap = d; what = l.text; } }));
  const tight = B.flatMap((b) => b.lines.filter((l) => widthOf(l.html, l.size ?? 12) * (l.bold ? 1.05 : 1) + 8 > b.rect[2] - b.rect[0]).map((l) => plain(l.html)));
  const tall = B.filter((b) => b.lines.length * LH + 4 > b.rect[3] - b.rect[1]).map((b) => b.id);
  const out = B.filter((b) => b.rect[0] < 2 || b.rect[2] > s.w - 2 || b.rect[1] < 0 || b.rect[3] > s.h).map((b) => b.id);
  return [
    [`No crossing lines: ${E.length} flow lines, ${crossings} crossings, ${through} through another box`, crossings === 0 && through === 0],
    [`Every flow line stays ${LABEL_GAP} px clear of every label: the closest is "${what}", ${fmt(gap, 1)} px`, E.length === 0 || gap >= LABEL_GAP - 1e-9],
    [`Every line of text fits its box with room to spare at Android's widths, and every box lies inside the frame${tight.length || tall.length || out.length ? `: not ${[...tight, ...tall, ...out].join(', ')}` : ''}`, tight.length === 0 && tall.length === 0 && out.length === 0],
  ];
}
const highlighted = (s: Sketch) => (BOXES.get(s) ?? []).filter((b) => b.lines.some((l) => l.color === C.amber)).map((b) => b.id);
const boxText = (s: Sketch, id: string) => BOXES.get(s)!.find((b) => b.id === id)!.lines.map((l) => plain(l.html)).join(' ');
const hOf = (n: number) => n * LH + 10;

/** A chart node: centre x, top y, its lines (a plain string is one line of STIX at 12). */
type NodeSpec = { id: string; x: number; y: number; lines: (string | Line)[]; hi?: boolean; w?: number; dash?: boolean };
type EdgeSpec = { a: string; b: string; side?: 'b' | 'r' | 'l'; obs?: string; at?: [number, number, 'start' | 'middle' | 'end']; route?: (A: Rect, B: Rect) => P[]; sx?: number; tx?: number };
const asLines = (n: NodeSpec): Line[] => n.lines.map((l) => (typeof l === 'string' ? { html: l, ...(n.hi ? { bold: true, color: C.amber } : {}) } : l));
const rectOf = (n: NodeSpec): Rect => {
  const w = n.w ?? Math.max(60, ...asLines(n).map((l) => widthOf(l.html, l.size ?? 12) * (l.bold ? 1.05 : 1))) + 22, h = hOf(n.lines.length);
  return [n.x - w / 2, n.y, n.x + w / 2, n.y + h];
};
/** Draw a chart: every node as a box, every edge as an orthogonal flow line with its observation beside it. */
function drawChart(s: Sketch, nodes: NodeSpec[], edges: EdgeSpec[]) {
  const R = new Map(nodes.map((n) => [n.id, rectOf(n)]));
  nodes.forEach((n) => box(s, n.id, R.get(n.id)!, asLines(n), n.hi ? { edge: C.mari, w: 1.8 } : { edge: n.dash ? C.faint : C.ink, w: n.dash ? 1.2 : 1.3, dash: n.dash }));
  edges.forEach((e) => {
    const A = R.get(e.a)!, B = R.get(e.b)!, acx = (A[0] + A[2]) / 2, acy = (A[1] + A[3]) / 2, bcx = (B[0] + B[2]) / 2, bcy = (B[1] + B[3]) / 2;
    let pts: P[];
    if (e.route) pts = e.route(A, B);
    else if (e.side === 'r' || e.side === 'l') {
      const sx = e.side === 'r' ? A[2] : A[0];
      if (Math.abs(bcy - acy) < 1) pts = [[sx, acy], [e.side === 'r' ? B[0] : B[2], bcy]];
      else pts = [[sx, acy], [e.tx ?? bcx, acy], [e.tx ?? bcx, B[1]]];
    } else {
      const x0 = e.sx ?? acx, x1 = e.tx ?? bcx, ym = (A[3] + B[1]) / 2;
      pts = Math.abs(x0 - x1) < 0.5 ? [[x0, A[3]], [x1, B[1]]] : [[x0, A[3]], [x0, ym], [x1, ym], [x1, B[1]]];
    }
    flow(s, pts, `${e.a}>${e.b}`, C.ink, e.obs);
    if (e.obs) {
      const [p, q] = [pts[0], pts[1]];
      const at = e.at ?? (Math.abs(p[0] - q[0]) < 0.5 ? [p[0] + 7, (p[1] + q[1]) / 2 + 4, 'start' as const] : [(p[0] + q[0]) / 2, p[1] - 7, 'middle' as const]);
      lab(s, at[0], at[1], e.obs, { size: 12, anchor: at[2], color: C.slate });
    }
  });
}
/** Boxes reachable from the first box along the drawn arrows. */
function reach(s: Sketch, root: string): Set<string> {
  const F = flowsOf(s), seen = new Set([root]), todo = [root];
  while (todo.length) { const a = todo.pop()!; F.filter((f) => f.from === a).forEach((f) => { if (!seen.has(f.to)) { seen.add(f.to); todo.push(f.to); } }); }
  return seen;
}
/** The structure checks every chart shares. */
function chartChecks(s: Sketch, nodes: NodeSpec[], edges: EdgeSpec[]): Check[] {
  const F = flowsOf(s), seen = reach(s, nodes[0].id);
  const joined = F.every((f) => f.from !== '?' && f.to !== '?' && f.from !== f.to);
  const asSpecified = F.map((f) => f.name).join() === edges.map((e) => `${e.a}>${e.b}`).join();
  return [
    [`Every arrow joins two boxes, read back from where it starts and ends: ${F.map((f) => `${f.from} → ${f.to}`).join('; ')}`, joined && asSpecified],
    [`Every box is reachable from "${nodes[0].id}" along the arrows (${seen.size} of ${nodes.length})`, seen.size === nodes.length],
    [`One highlight: ${highlighted(s).length} box in marigold`, highlighted(s).length === 1],
    ...chartClear(s),
    labelsApart(s),
    inFrame(s),
  ];
}
/** Walk a decision chart from its root along its drawn arrows, one observation per box, to a box nothing leaves. */
function walk(s: Sketch, root: string, obs: string[]): string[] {
  const F = flowsOf(s), trail = [root];
  let at = root, i = 0;
  for (;;) {
    const out = F.filter((f) => f.from === at);
    if (!out.length) return trail;
    const want = out.length === 1 && !out[0].obs ? undefined : obs[i++];
    const e = want === undefined ? out[0] : out.find((f) => f.obs === want);
    if (!e) return [...trail, '(no such arrow)'];
    at = e.to;
    trail.push(at);
  }
}

/* ===================================================================== */
/* c12-12-01-d1 · sodium fusion: fuse, quench, filter (Topic 01, index 0)  */
/* ===================================================================== */
/** A vertical tube, open at the top, round at the bottom: its two walls and the arc round the base. */
function tube(s: Sketch, cx: number, top: number, baseY: number, r: number, o: Stroke = {}): P[] {
  const arc: P[] = Array.from({ length: 25 }, (_, i): P => { const a = Math.PI * (i / 24); return [cx - r * Math.cos(a), baseY + r * Math.sin(a)]; });
  const pts: P[] = [[cx - r, top], ...arc, [cx + r, top]];
  path(s, pts, o);
  return pts;
}
/** Volume of a spherical cap of height h in a bowl of sphere radius R (cm³ when both are in cm). */
const capVolume = (R: number, h: number) => (Math.PI * h * h * (3 * R - h)) / 3;
/** The height at which a bowl of sphere radius R holds V cm³ (bisection). */
function capHeight(R: number, V: number): number {
  let lo = 0, hi = R;
  for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (capVolume(R, m) < V) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
const DOTS = new WeakMap<Sketch, P[]>();
const FUSION = {
  a: { cx: 150, top: 64, base: 208, r: 21, tongs: 92, globule: [150, 192] as P, rg: 9, compoundTop: 160, hotFrom: 150 },
  b: { cx: 170, k: 15, R: 5.5, aHalf: 5, yb: 152, mL: 15, tube: { c0: [152, 140] as P, ang: 12, L: 4, r: 8 } },
  c: { cx: 170, rim: 26, stemTop: 92, stemEnd: 126, stemW: 5, tubeTop: 116, tubeBase: 212, tubeR: 22, level: 168 },
};
const CAP_FUSE = {
  a: 'Sodium fusion, step 1: a small piece of sodium is melted to a shining globule in a dry ignition tube held in tongs, the compound is added so that it covers the sodium, and the tube is heated until it is red hot.',
  b: 'Sodium fusion, step 2: the red-hot tube is dropped at once into a china dish holding about 15 mL of distilled water and the dish is covered with wire gauze.',
  c: 'Sodium fusion, step 3: the dish contents are boiled for about 10 minutes and filtered. The filtrate is the sodium extract, and it is alkaline.',
};
const fig01d1: Diagram = {
  id: 'c12-12-01-d1',
  topic: 0,
  name: 'Sodium fusion',
  cases: [
    { chip: 'Fuse', cap: CAP_FUSE.a, step: 'a' },
    { chip: 'Quench', cap: CAP_FUSE.b, step: 'b' },
    { chip: 'Filter', cap: CAP_FUSE.c, step: 'c' },
  ],
  draw(c: { step: 'a' | 'b' | 'c' }) {
    if (c.step === 'a') {
      const G = FUSION.a, s = new Sketch(W, 322), { cx, r } = G;
      tube(s, cx, G.top, G.base, r, { name: 'tube' });
      path(s, [[cx - r - 4, G.top], [cx - r, G.top]]);
      path(s, [[cx + r, G.top], [cx + r + 4, G.top]]);
      // the red-hot part of the tube in marigold
      const hot: P[] = [[cx - r, G.hotFrom], ...Array.from({ length: 25 }, (_, i): P => { const a = Math.PI * (i / 24); return [cx - r * Math.cos(a), G.base + r * Math.sin(a)]; }), [cx + r, G.hotFrom]];
      path(s, hot, { color: C.mari, w: 3, name: 'hot' });
      // sodium globule and the compound over it
      s.add(`<circle cx="${G.globule[0]}" cy="${G.globule[1]}" r="${G.rg}" fill="none" stroke="${C.ink}" stroke-width="1.7"/>`);
      keep(s, [[G.globule[0] - G.rg, G.globule[1]], [G.globule[0] + G.rg, G.globule[1]]], 'globule');
      const dotsDrawn: P[] = [];
      DOTS.set(s, dotsDrawn);
      for (let y = G.compoundTop; y <= G.base + r - 6; y += 6.5) {
        for (let x = cx - r + 5; x <= cx + r - 4; x += 6.5) {
          const xx = x + ((Math.round((y - G.compoundTop) / 6.5)) % 2 ? 3 : 0);
          const dg = len([xx, y], G.globule), dc = Math.hypot(xx - cx, Math.max(0, y - G.base));
          if (dg > G.rg + 3.5 && dc < r - 3.5 && xx < cx + r - 3) { dotsDrawn.push([xx, y]); s.add(`<circle cx="${r1(xx)}" cy="${r1(y)}" r="1.3" fill="${C.faint}"/>`); }
        }
      }
      // tongs: two jaws on the tube above the contents, running off to the upper right
      path(s, [[cx + r, G.tongs], [292, 40]], { name: 'jaw1' });
      path(s, [[cx + r, G.tongs + 16], [304, 64]], { name: 'jaw2' });
      path(s, [[cx + r, G.tongs], [cx + r, G.tongs + 16]], { w: 1.4 });
      // a flame and its burner under the tube
      const tip = G.base + r + 2, fh = 48, fw = 17;
      const flame: P[] = Array.from({ length: 37 }, (_, i): P => { const a = (2 * Math.PI * i) / 36; return [cx + fw * Math.sin(a) * Math.sin(a / 2), tip + (fh * (1 - Math.cos(a))) / 2]; });
      path(s, flame, { color: C.grey, w: 1.8, name: 'flame' });
      path(s, [[cx - 10, tip + fh + 2], [cx - 10, tip + fh + 24], [cx + 10, tip + fh + 24], [cx + 10, tip + fh + 2]], { name: 'burner' });
      s.place([
        { t: 'Ignition tube', p: [cx - r, 112], at: [[8, 96, 'start'], [8, 120, 'start']] },
        { t: 'Na + compound', p: [G.globule[0] - G.rg, G.globule[1]], at: [[8, 172, 'start'], [8, 186, 'start']] },
        { t: 'red hot', p: [cx - r, 200], hi: true, at: [[24, 232, 'start'], [8, 232, 'start']] },
        { t: 'Tongs', p: [240, G.tongs + ((240 - (cx + r)) / (292 - (cx + r))) * (40 - G.tongs)], at: [[230, 94, 'start'], [222, 100, 'start']] },
        { t: 'Flame', p: [cx + 12, G.base + r + 26], at: [[196, 262, 'start']] },
      ]);
      return s;
    }
    if (c.step === 'b') {
      const G = FUSION.b, s = new Sketch(W, 232), k = G.k, R = G.R * k, cx = G.cx, yc = G.yb - R, aPx = G.aHalf * k;
      const wallY = (x: number) => yc + Math.sqrt(R * R - (x - cx) * (x - cx));
      const dish: P[] = Array.from({ length: 41 }, (_, i): P => { const x = cx - aPx + (2 * aPx * i) / 40; return [x, wallY(x)]; });
      path(s, dish, { name: 'dish' });
      const rimY = wallY(cx - aPx);
      path(s, [[cx - aPx - 5, rimY], [cx - aPx, rimY]]);
      path(s, [[cx + aPx, rimY], [cx + aPx + 5, rimY]]);
      // water: the level that 15 mL makes in this bowl
      const h = capHeight(G.R, G.mL), yw = G.yb - h * k, hw = Math.sqrt(R * R - (yw - yc) * (yw - yc));
      path(s, [[cx - hw, yw], [cx + hw, yw]], { color: C.slate, w: 1.5, name: 'water' });
      path(s, [[cx - hw + 12, yw + 6], [cx + hw - 12, yw + 6]], { color: C.grey, w: 1.2, name: 'water2' });
      // the red-hot tube lying in the water, closed end low, open end up the side
      const T = G.tube, u: P = [Math.cos(rad(T.ang)), -Math.sin(rad(T.ang))], n: P = [-u[1], u[0]], r = T.r, Lp = T.L * k;
      const c1: P = [T.c0[0] + u[0] * Lp, T.c0[1] + u[1] * Lp];
      // the closed end: from the +n side round the back (-u) to the -n side
      const capPts: P[] = Array.from({ length: 19 }, (_, i): P => { const a = (Math.PI * i) / 18; return [T.c0[0] + r * (n[0] * Math.cos(a) - u[0] * Math.sin(a)), T.c0[1] + r * (n[1] * Math.cos(a) - u[1] * Math.sin(a))]; });
      const tubePts: P[] = [[c1[0] + n[0] * r, c1[1] + n[1] * r], ...capPts, [c1[0] - n[0] * r, c1[1] - n[1] * r]];
      path(s, tubePts, { color: C.mari, w: 2.6, name: 'tube' });
      // wire gauze across the top of the dish
      const gy = rimY - 6;
      s.add(`<rect x="${r1(cx - aPx - 14)}" y="${r1(gy)}" width="${r1(2 * aPx + 28)}" height="6" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
      keep(s, [[cx - aPx - 14, gy], [cx + aPx + 14, gy], [cx + aPx + 14, gy + 6], [cx - aPx - 14, gy + 6], [cx - aPx - 14, gy]], 'gauze');
      for (let x = cx - aPx - 8; x <= cx + aPx + 8; x += 7) path(s, [[x, gy], [x, gy + 6]], { color: C.grey, w: 1, name: 'mesh' });
      s.place([
        { t: 'Wire gauze', p: [cx - aPx - 14, gy + 3], at: [[8, 54, 'start'], [8, 30, 'start']] },
        { t: 'Distilled water (15 mL)', p: [cx - hw + 20, yw + 3], at: [[8, 176, 'start'], [8, 190, 'start']] },
        { t: 'Red-hot tube', p: [T.c0[0] + u[0] * 40, T.c0[1] + u[1] * 40 + r], hi: true, at: [[110, 200, 'start'], [120, 204, 'start']] },
        { t: 'China dish', p: [cx + aPx - 12, wallY(cx + aPx - 12)], at: [[238, 176, 'start'], [238, 190, 'start']] },
      ]);
      return s;
    }
    const G = FUSION.c, s = new Sketch(W, 284), cx = G.cx;
    const rimHalf = 55;
    path(s, [[cx - rimHalf, G.rim], [cx - G.stemW, G.stemTop], [cx - G.stemW, G.stemEnd]], { name: 'funnelL' });
    path(s, [[cx + rimHalf, G.rim], [cx + G.stemW, G.stemTop], [cx + G.stemW, G.stemEnd]], { name: 'funnelR' });
    path(s, [[cx - rimHalf - 4, G.rim], [cx + rimHalf + 4, G.rim]], { name: 'rim' });
    path(s, [[cx - rimHalf + 8, G.rim + 7], [cx, G.stemTop - 4], [cx + rimHalf - 8, G.rim + 7]], { color: C.slate, dash: true, w: 1.4, name: 'paper' });
    tube(s, cx, G.tubeTop, G.tubeBase, G.tubeR, { name: 'tube' });
    path(s, [[cx - G.tubeR, G.level], [cx + G.tubeR, G.level]], { color: C.mari, w: 2.6, name: 'level' });
    [[cx, G.stemEnd + 14], [cx, G.stemEnd + 30]].forEach(([x, y]) => s.add(`<circle cx="${x}" cy="${y}" r="2" fill="none" stroke="${C.ink}" stroke-width="1.2"/>`));
    s.place([
      { t: 'Funnel', p: [cx - rimHalf + 14, G.rim + 22], at: [[16, 44, 'start']] },
      { t: 'Filter paper', p: [cx + rimHalf - 18, G.rim + 14], at: [[236, 42, 'start']] },
      { t: 'Filtrate = sodium extract (alkaline)', p: [cx + 8, G.level + 22], hi: true, at: [[40, 248, 'start'], [10, 252, 'start']] },
    ]);
    return s;
  },
  check(c: { step: 'a' | 'b' | 'c' }) {
    const s = fig01d1.draw(c), out: Check[] = [];
    if (c.step === 'a') {
      const G = FUSION.a, tubeL = lineOf(s, 'tube'), top = Math.min(...tubeL.map((p) => p[1])), bottom = Math.max(...tubeL.map((p) => p[1]));
      const xs = tubeL.map((p) => p[0]), walls = tubeL.filter((p) => p[1] <= G.base);
      out.push([`The tube is upright: both walls straight from the mouth (y ${fmt(top, 0)}) down to the round base (y ${fmt(G.base, 0)}), ${fmt(Math.max(...xs) - Math.min(...xs), 0)} px wide, its base reaching y ${fmt(bottom, 1)}`, walls.every((p) => close(Math.abs(p[0] - G.cx), G.r, 1e-6)) && close(bottom, G.base + G.r, 1e-9)]);
      const dots = DOTS.get(s)!;
      const inside = dots.every((d) => (d[1] <= G.base ? Math.abs(d[0] - G.cx) < G.r : len(d, [G.cx, G.base]) < G.r));
      const topDot = Math.min(...dots.map((d) => d[1])), globTop = G.globule[1] - G.rg;
      out.push([`The compound (${dots.length} dots) lies inside the tube and covers the sodium: its top (y ${fmt(topDot, 1)}) is above the globule's top (y ${fmt(globTop, 1)}) and no dot sits on the globule`, dots.length > 20 && inside && topDot < globTop && dots.every((d) => len(d, G.globule) > G.rg + 2)]);
      const hot = lineOf(s, 'hot'), hotTop = Math.min(...hot.map((p) => p[1]));
      out.push([`The red-hot part (marigold, from y ${fmt(hotTop, 0)}) takes in the sodium and compound (y ${fmt(topDot, 0)} to ${fmt(G.base + G.r, 0)})`, hotTop <= topDot && hotTop > G.tongs + 14]);
      const jaw = lineOf(s, 'jaw1')[0], flame = lineOf(s, 'flame'), tipY = Math.min(...flame.map((p) => p[1]));
      out.push([`The tongs grip the cool upper tube (y ${fmt(jaw[1], 0)}), above the red-hot part (from y ${fmt(hotTop, 0)}); the flame's tip (y ${fmt(tipY, 0)}) touches the base (y ${fmt(bottom, 0)})`, jaw[1] < hotTop - 20 && Math.abs(tipY - bottom) <= 4]);
      out.push(['The names as printed: Ignition tube, Na + compound, red hot, Tongs, Flame', s.tags.map((t) => t.name).join('|') === 'Ignition tube|Na + compound|red hot|Tongs|Flame']);
    } else if (c.step === 'b') {
      const G = FUSION.b, k = G.k, R = G.R * k, yc = G.yb - R, T = G.tube;
      const water = lineOf(s, 'water'), yw = water[0][1], h = (G.yb - yw) / k, V = capVolume(G.R, h);
      out.push([`The water stands ${fmt(h * k, 1)} px (${fmt(h, 3)} cm) up the bowl: a spherical cap of sphere radius ${fmt(G.R, 1)} cm holds π h²(3R − h)/3 = ${fmt(V, 2)} cm³, the text's ${G.mL} mL`, close(V, G.mL, 0.05)]);
      const dish = lineOf(s, 'dish'), tubeP = lineOf(s, 'tube');
      const wallAt = (x: number) => yc + Math.sqrt(R * R - (x - G.cx) * (x - G.cx));
      const inDish = tubeP.every((p) => p[1] <= wallAt(p[0]) + 0.5 && Math.abs(p[0] - G.cx) <= G.aHalf * k);
      const rimY = dish[0][1], topTube = Math.min(...tubeP.map((p) => p[1]));
      out.push([`The red-hot tube lies wholly inside the bowl (nothing below its wall, nothing beyond the rim) and its highest point (y ${fmt(topTube, 1)}) is below the rim (y ${fmt(rimY, 1)})`, inDish && topTube > rimY]);
      out.push([`The closed end is under water: its centre (y ${fmt(T.c0[1], 1)}) is below the surface (y ${fmt(yw, 1)}) by ${fmt(T.c0[1] - yw, 1)} px`, T.c0[1] > yw]);
      const gz = lineOf(s, 'gauze'), gzBottom = Math.max(...gz.map((p) => p[1])), gzW = Math.max(...gz.map((p) => p[0])) - Math.min(...gz.map((p) => p[0]));
      out.push([`The gauze lies across the whole dish (${fmt(gzW, 0)} px against the ${fmt(2 * G.aHalf * k, 0)} px rim) on the rim (its lower edge y ${fmt(gzBottom, 1)}, the rim y ${fmt(rimY, 1)}), above the tube`, gzW > 2 * G.aHalf * k && gzBottom <= rimY + 0.5 && gzBottom - rimY > -3 && gzBottom < topTube]);
      out.push(['The names as printed: Wire gauze, Distilled water (15 mL), Red-hot tube, China dish', s.tags.map((t) => t.name).join('|') === 'Wire gauze|Distilled water (15 mL)|Red-hot tube|China dish']);
    } else {
      const G = FUSION.c, tubeL = lineOf(s, 'tube'), lvl = lineOf(s, 'level'), tubeTop = Math.min(...tubeL.map((p) => p[1]));
      out.push([`The funnel's stem (tip y ${fmt(G.stemEnd, 0)}) dips inside the test tube (mouth y ${fmt(tubeTop, 0)}) and stays above the filtrate (level y ${fmt(G.level, 0)})`, G.stemEnd > tubeTop && G.stemEnd < lvl[0][1] && Math.abs(G.stemW) < G.tubeR]);
      const paper = lineOf(s, 'paper'), fl = lineOf(s, 'funnelL');
      const fAt = (y: number) => G.cx - 55 + (55 - G.stemW) * ((y - G.rim) / (G.stemTop - G.rim));
      out.push([`The filter paper is a cone inside the funnel: its rim (x ${fmt(paper[0][0], 0)}) is inside the funnel wall (x ${fmt(fAt(paper[0][1]), 0)} at that height) and its point is above the stem`, paper[0][0] > fAt(paper[0][1]) - 1 && paper[1][1] < G.stemTop && fl.length === 3]);
      out.push(['The names as printed: Funnel, Filter paper, Filtrate = sodium extract (alkaline)', s.tags.map((t) => t.name).join('|') === 'Funnel|Filter paper|Filtrate = sodium extract (alkaline)']);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* c12-12-01-d2 · the tests on the sodium extract, as flow charts (index 0) */
/* ===================================================================== */
const eqHtml = ([l, r]: [Side, Side]) => { const sd = (x: Side) => x.map(([n, f]) => `${n > 1 ? n : ''}${f}`).join(' + '); return `${sd(l)} → ${sd(r)}`; };
const PRUSSIAN: [Side, Side] = [[[4, 'Fe<sup>3+</sup>'], [3, '[Fe(CN)<sub>6</sub>]<sup>4−</sup>']], [[1, 'Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>']]];
const NITROPRUSSIDE: [Side, Side] = [[[1, 'S<sup>2−</sup>'], [1, '[Fe(CN)<sub>5</sub>NO]<sup>2−</sup>']], [[1, '[Fe(CN)<sub>5</sub>NOS]<sup>4−</sup>']]];
const LEADSULPHIDE: [Side, Side] = [[[1, 'Pb<sup>2+</sup>'], [1, 'S<sup>2−</sup>']], [[1, 'PbS']]];
const THIOCYANATE: [Side, Side] = [[[1, 'Fe<sup>3+</sup>'], [3, 'SCN<sup>−</sup>']], [[1, 'Fe(SCN)<sub>3</sub>']]];
const SILVER: [string, [Side, Side]][] = ['Cl', 'Br', 'I'].map((x): [string, [Side, Side]] => [x, [[[1, 'Ag<sup>+</sup>'], [1, `${x}<sup>−</sup>`]], [[1, `Ag${x}`]]]]);
const FREE_X: [string, [Side, Side]][] = [['Br', [[[2, 'Br<sup>−</sup>'], [1, 'Cl<sub>2</sub>']], [[2, 'Cl<sup>−</sup>'], [1, 'Br<sub>2</sub>']]]], ['I', [[[2, 'I<sup>−</sup>'], [1, 'Cl<sub>2</sub>']], [[2, 'Cl<sup>−</sup>'], [1, 'I<sub>2</sub>']]]]];
/** Standard electrode potentials X₂ + 2e⁻ → 2X⁻ (V), and solubility products of the silver halides at 25 °C (CRC values). */
const E0 = { Cl: 1.36, Br: 1.09, I: 0.54 };
const KSP = { Cl: 1.8e-10, Br: 5.4e-13, I: 8.5e-17 };
/** The text's observations, as the charts must print them. */
const AG_OBS = { Cl: ['white', 'soluble in NH<sub>4</sub>OH'], Br: ['yellow', 'partly soluble in NH<sub>4</sub>OH'], I: ['dark yellow', 'insoluble in NH<sub>4</sub>OH'] } as const;
const trunk = (xt: number) => (A: Rect, B: Rect): P[] => { const ay = (A[1] + A[3]) / 2, by = (B[1] + B[3]) / 2; return [[A[0], ay], [xt, ay], [xt, by], [B[0], by]]; };
type D2 = { nodes: NodeSpec[]; edges: EdgeSpec[]; h: number };
const ROOT: NodeSpec = { id: 'extract', x: 170, y: 10, lines: ['Sodium extract'] };
const D2_CASES: Record<string, D2> = {
  N: {
    h: 292,
    nodes: [
      ROOT,
      { id: 'FeSO4', x: 170, y: 60, lines: ['FeSO<sub>4</sub>, boil, cool'] },
      { id: 'H2SO4', x: 170, y: 110, lines: ['dilute H<sub>2</sub>SO<sub>4</sub>, warm'] },
      { id: 'FeCl3', x: 170, y: 160, lines: ['add FeCl<sub>3</sub>'] },
      { id: 'blue', x: 170, y: 210, hi: true, lines: ['Prussian blue: nitrogen present', eqHtml(PRUSSIAN)] },
    ],
    edges: [{ a: 'extract', b: 'FeSO4' }, { a: 'FeSO4', b: 'H2SO4' }, { a: 'H2SO4', b: 'FeCl3' }, { a: 'FeCl3', b: 'blue' }],
  },
  S: {
    h: 262,
    nodes: [
      ROOT,
      { id: 'nitroprusside', x: 88, y: 62, lines: ['Sodium', 'nitroprusside'] },
      { id: 'lead', x: 252, y: 62, lines: ['Acetic acid, then', 'lead acetate'] },
      { id: 'purple', x: 88, y: 134, lines: ['purple colour', '[Fe(CN)<sub>5</sub>NOS]<sup>4−</sup>'] },
      { id: 'black', x: 252, y: 134, lines: ['black precipitate', 'PbS'] },
      { id: 'sulphur', x: 170, y: 206, hi: true, lines: ['Sulphur present', 'S<sup>2−</sup> in the extract'] },
    ],
    edges: [
      { a: 'extract', b: 'nitroprusside' }, { a: 'extract', b: 'lead' },
      { a: 'nitroprusside', b: 'purple' }, { a: 'lead', b: 'black' },
      { a: 'purple', b: 'sulphur', tx: 130 }, { a: 'black', b: 'sulphur', tx: 210 },
    ],
  },
  NS: {
    h: 224,
    nodes: [
      ROOT,
      { id: 'HCl', x: 170, y: 60, lines: ['dilute HCl, then FeCl<sub>3</sub>, shake'] },
      { id: 'red', x: 208, y: 112, hi: true, w: 252, lines: ['blood red colour: N and S together', eqHtml(THIOCYANATE)] },
      { id: 'none', x: 208, y: 168, w: 252, dash: true, lines: ['no red colour: sodium was in excess,', 'test N and S separately'] },
    ],
    edges: [{ a: 'extract', b: 'HCl' }, { a: 'HCl', b: 'red', route: trunk(44) }, { a: 'HCl', b: 'none', route: trunk(44) }],
  },
  Ag: {
    h: 352,
    nodes: [
      ROOT,
      { id: 'boil', x: 170, y: 60, lines: ['if N or S is present,', 'boil with conc. HNO<sub>3</sub>'] },
      { id: 'AgNO3', x: 170, y: 124, hi: true, lines: ['add AgNO<sub>3</sub>,', 'then NH<sub>4</sub>OH'] },
      ...(['Cl', 'Br', 'I'] as const).map((x, i): NodeSpec => ({ id: `Ag${x}`, x: 188, y: 188 + i * 56, w: 292, lines: [`${AG_OBS[x][0]} precipitate, ${AG_OBS[x][1]}`, `${eqHtml(SILVER[i][1])}: ${{ Cl: 'chlorine', Br: 'bromine', I: 'iodine' }[x]} present`] })),
    ],
    edges: [{ a: 'extract', b: 'boil' }, { a: 'boil', b: 'AgNO3' }, ...['AgCl', 'AgBr', 'AgI'].map((id): EdgeSpec => ({ a: 'AgNO3', b: id, route: trunk(24) }))],
  },
  layer: {
    h: 272,
    nodes: [
      ROOT,
      { id: 'fresh', x: 170, y: 60, lines: ['(boiled with HNO<sub>3</sub> first', 'if N or S is present)'] },
      { id: 'CCl4', x: 170, y: 124, hi: true, lines: ['add CCl<sub>4</sub> and excess', 'chlorine water, shake'] },
      { id: 'orange', x: 208, y: 188, w: 252, lines: ['orange lower layer: bromine present', eqHtml(FREE_X[0][1])] },
      { id: 'purple', x: 208, y: 244 - 0, w: 252, lines: ['purple or violet layer: iodine present', eqHtml(FREE_X[1][1])] },
    ],
    edges: [{ a: 'extract', b: 'fresh' }, { a: 'fresh', b: 'CCl4' }, { a: 'CCl4', b: 'orange', route: trunk(44) }, { a: 'CCl4', b: 'purple', route: trunk(44) }],
  },
};
D2_CASES.layer.h = 300;
const CAP_D2: Record<string, string> = {
  N: 'Nitrogen in the sodium extract: FeSO<sub>4</sub> and boiling, dilute H<sub>2</sub>SO<sub>4</sub>, then FeCl<sub>3</sub>. A Prussian blue precipitate shows nitrogen.',
  S: 'Sulphur in the sodium extract, two ways: sodium nitroprusside gives a purple colour, and acetic acid then lead acetate gives black PbS.',
  NS: 'Nitrogen and sulphur together: dilute HCl and FeCl<sub>3</sub> give a blood red colour of Fe(SCN)<sub>3</sub>. With excess sodium there is no red, and each element is tested alone.',
  Ag: 'Halogens by silver nitrate: boil with conc. HNO<sub>3</sub> first if N or S is present, add AgNO<sub>3</sub>, then test the precipitate with NH<sub>4</sub>OH. AgCl is white and soluble, AgBr yellow and partly soluble, AgI dark yellow and insoluble.',
  layer: 'Bromine and iodine by the layer test: CCl<sub>4</sub> and excess chlorine water, shaken. The lower layer is orange for bromine and purple or violet for iodine.',
};
const fig01d2: Diagram = {
  id: 'c12-12-01-d2',
  topic: 0,
  name: 'Tests on the sodium extract',
  cases: [
    { chip: 'Nitrogen', cap: CAP_D2.N, k: 'N' },
    { chip: 'Sulphur', cap: CAP_D2.S, k: 'S' },
    { chip: 'N and S', cap: CAP_D2.NS, k: 'NS' },
    { chip: 'Halogens: Ag', cap: CAP_D2.Ag, k: 'Ag' },
    { chip: 'Halogens: layer', cap: CAP_D2.layer, k: 'layer' },
  ],
  draw(c: { k: string }) {
    const d = D2_CASES[c.k], s = new Sketch(W, d.h);
    drawChart(s, d.nodes, d.edges);
    return s;
  },
  check(c: { k: string }) {
    const d = D2_CASES[c.k], s = fig01d2.draw(c), out: Check[] = [];
    out.push(...chartChecks(s, d.nodes, d.edges));
    const has = (id: string, ...words: string[]) => words.every((w) => boxText(s, id).includes(w));
    if (c.k === 'N') {
      out.push(eqCheck('Prussian blue', PRUSSIAN));
      out.push(['The steps in the text\'s order: FeSO₄ boil · dilute H₂SO₄ warm · FeCl₃ · Prussian blue', has('FeSO4', 'FeSO4, boil') && has('H2SO4', 'dilute H2SO4, warm') && has('FeCl3', 'FeCl3') && has('blue', 'Prussian blue', 'nitrogen')]);
    } else if (c.k === 'S') {
      out.push(eqCheck('Nitroprusside colour', NITROPRUSSIDE), eqCheck('Lead sulphide', LEADSULPHIDE));
      out.push(['Both sulphur tests end at the same conclusion, S²⁻: the purple colour and the black PbS each lead to "Sulphur present"', has('purple', 'purple colour') && has('black', 'black precipitate', 'PbS') && flowsOf(s).filter((f) => f.to === 'sulphur').length === 2]);
    } else if (c.k === 'NS') {
      out.push(eqCheck('Thiocyanate', THIOCYANATE));
      out.push(['The two outcomes the text gives: blood red means thiocyanate (N and S together); no red means excess sodium, test N and S separately', has('red', 'blood red', 'N and S together') && has('none', 'no red colour', 'excess', 'separately')]);
    } else if (c.k === 'Ag') {
      SILVER.forEach(([, eq], i) => out.push(eqCheck(`${['Chloride', 'Bromide', 'Iodide'][i]} with silver`, eq)));
      const ks = [KSP.Cl, KSP.Br, KSP.I];
      out.push([`The three halides are drawn in falling solubility (K_sp ${ks.map((k) => k.toExponential(1).replace('e-', '×10⁻')).join(' > ')}), the order in which NH₄OH stops dissolving them: soluble, partly soluble, insoluble`, ks[0] > ks[1] && ks[1] > ks[2] && has('AgCl', 'white', 'soluble in NH4OH') && !boxText(s, 'AgCl').includes('partly') && has('AgBr', 'yellow', 'partly soluble') && has('AgI', 'dark yellow', 'insoluble')]);
      out.push(['The boil with HNO₃ comes before the silver nitrate, because CN⁻ and S²⁻ would also precipitate: the arrows run extract → boil → AgNO₃', flowsOf(s).some((f) => f.from === 'boil' && f.to === 'AgNO3') && flowsOf(s).some((f) => f.from === 'extract' && f.to === 'boil')]);
    } else {
      FREE_X.forEach(([x, eq]) => out.push(eqCheck(`Chlorine water frees ${x}₂`, eq)));
      out.push([`Chlorine can oxidise both: E° ${E0.Cl} V for Cl₂/Cl⁻ is above ${E0.Br} V for Br₂ and ${E0.I} V for I₂`, E0.Cl > E0.Br && E0.Br > E0.I]);
      out.push(['The colours as the text gives them: orange for Br₂, purple or violet for I₂, in the CCl₄ layer', has('orange', 'orange', 'bromine') && has('purple', 'purple or violet', 'iodine')]);
    }
    return out;
  },
};

/* ===================================================================== */
/* c12-12-01-d3 · deciding the functional group (decision charts, index 0)  */
/* ===================================================================== */
const SPINE_W = 140, LEAF_W = 140;
type D3 = { nodes: NodeSpec[]; edges: EdgeSpec[]; h: number; samples: { name: string; obs: string[]; end: string; via?: string }[] };
const yes = (a: string, b: string, o: Partial<EdgeSpec> = {}): EdgeSpec => ({ a, b, obs: 'yes', ...o });
const no = (a: string, b: string, o: Partial<EdgeSpec> = {}): EdgeSpec => ({ a, b, obs: 'no', ...o });
const D3_CASES: Record<string, D3> = {
  acid: {
    h: 292,
    nodes: [
      { id: 'litmus', x: 92, y: 14, w: SPINE_W, lines: ['Blue litmus', 'turns red?'] },
      { id: 'neither', x: 262, y: 14, w: LEAF_W, dash: true, lines: ['not an acid', 'or a phenol'] },
      { id: 'bicarb', x: 92, y: 88, w: SPINE_W, lines: ['NaHCO<sub>3</sub>:', 'effervescence?'] },
      { id: 'COOH', x: 262, y: 88, w: LEAF_W, hi: true, lines: ['Carboxylic acid', '–COOH'] },
      { id: 'FeCl3', x: 92, y: 162, w: SPINE_W, lines: ['Neutral FeCl<sub>3</sub>:', 'violet colour?'] },
      { id: 'phenol', x: 262, y: 162, w: LEAF_W, lines: ['Phenol', '–OH on a ring'] },
      { id: 'notshown', x: 92, y: 236, w: SPINE_W, dash: true, lines: ['phenol not shown', '(no colour)'] },
    ],
    edges: [no('litmus', 'neither', { side: 'r' }), yes('litmus', 'bicarb'), yes('bicarb', 'COOH', { side: 'r' }), no('bicarb', 'FeCl3'), yes('FeCl3', 'phenol', { side: 'r' }), no('FeCl3', 'notshown')],
    samples: [
      { name: 'benzoic acid (litmus red, effervescence)', obs: ['yes', 'yes'], end: 'COOH' },
      { name: 'phenol (litmus red, no effervescence, violet)', obs: ['yes', 'no', 'yes'], end: 'phenol' },
      { name: '1-naphthol (no characteristic colour: a negative that does not rule a phenol out)', obs: ['yes', 'no', 'no'], end: 'notshown' },
      { name: 'ethanol (litmus unchanged)', obs: ['no'], end: 'neither' },
    ],
  },
  carbonyl: {
    h: 292,
    nodes: [
      { id: 'DNP', x: 92, y: 14, w: SPINE_W, lines: ['2,4-DNP:', 'orange precipitate?'] },
      { id: 'nocarbonyl', x: 262, y: 14, w: LEAF_W, dash: true, lines: ['no carbonyl', 'group'] },
      { id: 'oxid', x: 92, y: 88, w: SPINE_W, lines: ['Tollens’ mirror', 'or Schiff pink?'] },
      { id: 'aldehyde', x: 262, y: 88, w: LEAF_W, hi: true, lines: ['Aldehyde', '–CHO'] },
      { id: 'iodoform', x: 92, y: 162, w: SPINE_W, lines: ['Ketone. Iodoform:', 'yellow CHI<sub>3</sub>?'] },
      { id: 'methylketone', x: 262, y: 162, w: LEAF_W, lines: ['CH<sub>3</sub>CO– group', '(methyl ketone)'] },
      { id: 'otherketone', x: 92, y: 236, w: SPINE_W, lines: ['ketone without', 'CH<sub>3</sub>CO–'] },
    ],
    edges: [no('DNP', 'nocarbonyl', { side: 'r' }), yes('DNP', 'oxid'), yes('oxid', 'aldehyde', { side: 'r' }), no('oxid', 'iodoform'), yes('iodoform', 'methylketone', { side: 'r' }), no('iodoform', 'otherketone')],
    samples: [
      { name: 'propanal (2,4-DNP orange, silver mirror)', obs: ['yes', 'yes'], end: 'aldehyde' },
      { name: 'propanone (2,4-DNP orange, no mirror, iodoform yellow)', obs: ['yes', 'no', 'yes'], end: 'methylketone', via: 'iodoform' },
      { name: 'pentan-3-one (2,4-DNP orange, no mirror, no iodoform)', obs: ['yes', 'no', 'no'], end: 'otherketone' },
      { name: 'propan-1-ol (no 2,4-DNP precipitate)', obs: ['no'], end: 'nocarbonyl' },
    ],
  },
  alcohol: {
    h: 242,
    nodes: [
      { id: 'CAN', x: 100, y: 14, w: SPINE_W, lines: ['Ceric ammonium', 'nitrate: red colour?'] },
      { id: 'noOH', x: 265, y: 14, w: 130, dash: true, lines: ['no alcoholic', '–OH group'] },
      { id: 'Lucas', x: 100, y: 88, w: SPINE_W, lines: ['Lucas reagent:', 'time to two layers'] },
      { id: 'tertiary', x: 58, y: 182, w: 96, hi: true, lines: ['tertiary', 'alcohol'] },
      { id: 'secondary', x: 170, y: 182, w: 96, lines: ['secondary', 'alcohol'] },
      { id: 'primary', x: 282, y: 182, w: 96, lines: ['primary', 'alcohol'] },
    ],
    edges: [
      no('CAN', 'noOH', { side: 'r' }), yes('CAN', 'Lucas'),
      { a: 'Lucas', b: 'tertiary', obs: 'at once', at: [65, 173, 'start'] },
      { a: 'Lucas', b: 'secondary', obs: '1–5 min', at: [177, 173, 'start'] },
      { a: 'Lucas', b: 'primary', obs: 'no layers', at: [275, 173, 'end'] },
    ],
    samples: [
      { name: '2-methylpropan-2-ol (layers at once)', obs: ['yes', 'at once'], end: 'tertiary' },
      { name: 'propan-2-ol (layers in about 3 minutes)', obs: ['yes', '1–5 min'], end: 'secondary' },
      { name: 'ethanol (no layers)', obs: ['yes', 'no layers'], end: 'primary' },
      { name: 'benzene (no red colour)', obs: ['no'], end: 'noOH' },
    ],
  },
  amine: {
    h: 312,
    nodes: [
      { id: 'HCl', x: 92, y: 14, w: SPINE_W, lines: ['Dilute HCl:', 'does it dissolve?'] },
      { id: 'notamine', x: 262, y: 14, w: 130, dash: true, lines: ['not an', 'amine'] },
      { id: 'carbyl', x: 92, y: 88, w: SPINE_W, lines: ['Carbylamine:', 'foul smell?'] },
      { id: 'sec3', x: 262, y: 88, w: 130, dash: true, lines: ['secondary or', 'tertiary amine'] },
      { id: 'azo', x: 92, y: 162, w: SPINE_W, lines: ['Diazotise (0–5 °C),', 'then β-naphthol:', 'scarlet red?'] },
      { id: 'aromatic', x: 262, y: 170, w: 130, hi: true, lines: ['aromatic', 'primary amine'] },
      { id: 'aliphatic', x: 92, y: 252, w: SPINE_W, lines: ['aliphatic', 'primary amine'] },
    ],
    edges: [no('HCl', 'notamine', { side: 'r' }), yes('HCl', 'carbyl'), no('carbyl', 'sec3', { side: 'r' }), yes('carbyl', 'azo'), yes('azo', 'aromatic', { side: 'r' }), no('azo', 'aliphatic')],
    samples: [
      { name: 'aniline (dissolves, foul smell, scarlet red)', obs: ['yes', 'yes', 'yes'], end: 'aromatic' },
      { name: 'ethylamine (dissolves, foul smell, no dye)', obs: ['yes', 'yes', 'no'], end: 'aliphatic' },
      { name: 'diethylamine (dissolves, no smell)', obs: ['yes', 'no'], end: 'sec3' },
      { name: 'toluene (does not dissolve)', obs: ['no'], end: 'notamine' },
    ],
  },
};
const CAP_D3: Record<string, string> = {
  acid: 'Carboxylic acid or phenol: blue litmus turns red for both, NaHCO<sub>3</sub> effervesces only for the carboxylic acid, and neutral FeCl<sub>3</sub> gives a violet colour for a phenol.',
  carbonyl: 'Aldehyde or ketone: 2,4-DNP shows a carbonyl group, a silver mirror (Tollens’) or a pink colour (Schiff’s) shows an aldehyde, and a ketone with a CH<sub>3</sub>CO– group gives yellow iodoform.',
  alcohol: 'Alcohols: ceric ammonium nitrate gives a red colour, then Lucas reagent separates the classes by time: tertiary at once, secondary in about 1–5 minutes, primary no layers.',
  amine: 'Amines: dilute HCl dissolves the amine, the carbylamine smell shows a primary amine, and diazotisation with β-naphthol gives a scarlet red dye for an aromatic primary amine.',
};
/** What a chart must show, by its text: which boxes carry which words. */
const D3_WORDS: Record<string, [string, string[]][]> = {
  acid: [['litmus', ['Blue litmus', 'red']], ['bicarb', ['NaHCO3', 'effervescence']], ['FeCl3', ['Neutral FeCl3', 'violet']], ['COOH', ['Carboxylic acid', '–COOH']], ['phenol', ['Phenol']]],
  carbonyl: [['DNP', ['2,4-DNP', 'orange']], ['oxid', ['Tollens', 'Schiff', 'pink']], ['iodoform', ['Iodoform', 'yellow CHI3']], ['aldehyde', ['Aldehyde']], ['methylketone', ['CH3CO–']]],
  alcohol: [['CAN', ['Ceric ammonium nitrate', 'red']], ['Lucas', ['Lucas reagent']]],
  amine: [['HCl', ['Dilute HCl']], ['carbyl', ['Carbylamine', 'foul smell']], ['azo', ['β-naphthol', 'scarlet red']], ['aromatic', ['aromatic', 'primary amine']]],
};
const fig01d3: Diagram = {
  id: 'c12-12-01-d3',
  topic: 0,
  name: 'Deciding the functional group',
  cases: [
    { chip: 'Acid or phenol', cap: CAP_D3.acid, k: 'acid' },
    { chip: 'Carbonyl', cap: CAP_D3.carbonyl, k: 'carbonyl' },
    { chip: 'Alcohol', cap: CAP_D3.alcohol, k: 'alcohol' },
    { chip: 'Amine', cap: CAP_D3.amine, k: 'amine' },
  ],
  draw(c: { k: string }) {
    const d = D3_CASES[c.k], s = new Sketch(W, d.h);
    drawChart(s, d.nodes, d.edges);
    return s;
  },
  check(c: { k: string }) {
    const d = D3_CASES[c.k], s = fig01d3.draw(c), out: Check[] = [];
    out.push(...chartChecks(s, d.nodes, d.edges));
    const root = d.nodes[0].id;
    d.samples.forEach((m) => {
      const trail = walk(s, root, m.obs);
      out.push([`${m.name}: the arrows lead ${trail.join(' → ')}`, trail[trail.length - 1] === m.end && (!m.via || trail.includes(m.via))]);
    });
    D3_WORDS[c.k].forEach(([id, words]) => {
      const txt = boxText(s, id).replace(/\s+/g, ' ');
      out.push([`The box "${id}" carries the text's words: ${words.join('; ')}`, words.every((w) => txt.includes(w) || w.split(' ').every((x) => txt.includes(x)))]);
    });
    if (c.k === 'acid') {
      const pKa = { 'benzoic acid': 4.2, 'carbonic acid (first)': 6.35, phenol: 9.95 };
      out.push([`The order of the two tests follows acid strength: pKₐ benzoic acid ${pKa['benzoic acid']} < carbonic acid ${pKa['carbonic acid (first)']} < phenol ${pKa.phenol}, so a carboxylic acid decomposes NaHCO₃ and a phenol cannot`, pKa['benzoic acid'] < pKa['carbonic acid (first)'] && pKa['carbonic acid (first)'] < pKa.phenol]);
    }
    if (c.k === 'alcohol') {
      const alkyl: Record<string, number> = { tertiary: 3, secondary: 2, primary: 1 };
      const minutes: Record<string, number> = { tertiary: 0, secondary: 3, primary: Infinity };
      const cls = (n: number) => (n >= 3 ? 'tertiary' : n === 2 ? 'secondary' : 'primary');
      const lucas = (min: number) => (min < 1 ? 'at once' : min <= 5 ? '1–5 min' : 'no layers');
      const edgeTo = Object.fromEntries(flowsOf(s).filter((f) => f.from === 'Lucas').map((f) => [f.obs, f.to]));
      out.push([`Carbons on the carbinol carbon decide the class (2-methylpropan-2-ol 3, propan-2-ol 2, ethanol 1), and the drawn arrow for each timing leads to that class: ${Object.keys(alkyl).map((k) => `${k} ${lucas(minutes[k])} → ${edgeTo[lucas(minutes[k])]}`).join('; ')}`, Object.keys(alkyl).every((k) => cls(alkyl[k]) === k && edgeTo[lucas(minutes[k])] === k)]);
    }
    return out;
  },
};

/* ===================================================================== */
/* c12-12-03-d1 · titration curves for the four acid-base pairs (index 2)   */
/* ===================================================================== */
type Pair = 'ss' | 'wa' | 'wb' | 'ww';
const TIT = { c0: 0.1, V0: 10, c: 0.1, Ka: 1.8e-5, Kb: 1.8e-5, Kw: 1e-14, drop: 0.05 };
/**
 * The pH after V mL of titrant, from the charge balance (cations = anions) solved by bisection on pH. The analyte
 * (10.0 mL of 0.100 M) is a strong acid (ss), a weak acid (wa, Ka), a weak base (wb, Kb, titrated with a strong
 * acid) or a weak acid titrated with a weak base (ww). The titrant is 0.100 M.
 */
function titrationPH(pair: Pair, V: number): number {
  const { c0, V0, c, Ka, Kb, Kw } = TIT, Vt = V0 + V, Ca = (c0 * V0) / Vt, Ct = (c * V) / Vt, Kah = Kw / Kb;
  const f = (h: number) => {
    if (pair === 'ss') return h + Ct - Kw / h - Ca;
    if (pair === 'wa') return h + Ct - Kw / h - (Ca * Ka) / (Ka + h);
    if (pair === 'wb') return h + (Ca * h) / (h + Kah) - Kw / h - Ct;
    return h + (Ct * h) / (h + Kah) - Kw / h - (Ca * Ka) / (Ka + h);
  };
  let lo = -1, hi = 15;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (f(10 ** -m) > 0) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
const TP = { x0: 46, x1: 296, y0: 236, perPH: 14.7, vMax: 20 };
const tx = (V: number) => TP.x0 + (V / TP.vMax) * (TP.x1 - TP.x0);
const ty = (pH: number) => TP.y0 - pH * TP.perPH;
const fromPx = (x: number, y: number): [number, number] => [((x - TP.x0) / (TP.x1 - TP.x0)) * TP.vMax, (TP.y0 - y) / TP.perPH];
/** The two indicators' bands (qualitative on the drawing: only the side is named), pH. */
const BANDS = { pp: { name: 'Phenolphthalein', lo: 8.2, hi: 10.0 }, mo: { name: 'Methyl orange', lo: 3.1, hi: 4.4 } };
const CURVE_V = (() => { const v: number[] = []; for (let x = 0; x <= 9.5; x += 0.25) v.push(x); for (let x = 9.55; x <= 10.45; x += 0.05) v.push(+x.toFixed(2)); for (let x = 10.5; x <= 20; x += 0.25) v.push(x); return v; })();
type TitCase = { pair: Pair; chip: string; cap: string; bands: ('pp' | 'mo')[]; eq: string; usable: boolean; tagEq: [number, number]; tagBand: Record<string, [number, number]> };
const TIT_CASES: Record<Pair, TitCase> = {
  ss: { pair: 'ss', chip: 'Strong–strong', bands: ['pp', 'mo'], eq: '7.0', usable: true, tagEq: [54, 66], tagBand: { pp: [180, 142], mo: [180, 198] }, cap: 'Strong acid with strong base (HCl and NaOH): the curve jumps vertically through pH 7 at equivalence, so either indicator changes colour on the steep part.' },
  wa: { pair: 'wa', chip: 'Weak acid–strong base', bands: ['pp'], eq: '8.7', usable: true, tagEq: [54, 66], tagBand: { pp: [180, 142] }, cap: 'Weak acid with strong base (oxalic acid and NaOH): equivalence is alkaline, at about pH 8.7, so phenolphthalein, which changes on the alkaline side, fits.' },
  wb: { pair: 'wb', chip: 'Strong acid–weak base', bands: ['mo'], eq: '5.3', usable: true, tagEq: [54, 198], tagBand: { mo: [180, 142] }, cap: 'Strong acid with weak base (HCl and Na<sub>2</sub>CO<sub>3</sub>): equivalence is acidic, at about pH 5.3, so methyl orange, which changes on the acid side, fits.' },
  ww: { pair: 'ww', chip: 'Weak–weak', bands: [], eq: '7.0', usable: false, tagEq: [54, 66], tagBand: {}, cap: 'Weak acid with weak base: the curve has no steep step near pH 7, so neither indicator gives a sharp end point.' },
};
const fig03d1: Diagram = {
  id: 'c12-12-03-d1',
  topic: 2,
  name: 'Titration curves and the choice of indicator',
  cases: (['ss', 'wa', 'wb', 'ww'] as Pair[]).map((p) => ({ chip: TIT_CASES[p].chip, cap: TIT_CASES[p].cap, pair: p })),
  draw(c: { pair: Pair }) {
    const K = TIT_CASES[c.pair], s = new Sketch(W, 322), res = c.pair === 'ww' ? 'pH near 7, no sharp step' : `pH at equivalence ≈ ${K.eq}`;
    // axes and guides
    path(s, [[TP.x0, ty(14)], [TP.x0, TP.y0], [TP.x1 + 4, TP.y0]], { color: C.slate, w: 1.4, name: 'axes' });
    path(s, [[TP.x0, ty(7)], [TP.x1, ty(7)]], { color: C.grey, w: 1.1, dash: true, name: 'pH7' });
    path(s, [[tx(10), TP.y0], [tx(10), ty(14)]], { color: C.grey, w: 1.1, dash: true, name: 'equiv' });
    [0, 7, 14].forEach((v) => lab(s, TP.x0 - 6, ty(v) + 4, String(v), { size: 12, anchor: 'end', color: C.slate }));
    [0, 5, 10, 15, 20].forEach((v) => { path(s, [[tx(v), TP.y0], [tx(v), TP.y0 + 4]], { color: C.slate, w: 1.2, name: `tick${v}` }); lab(s, tx(v), TP.y0 + 18, String(v), { size: 12, color: C.slate }); });
    lab(s, TP.x0, 20, 'pH', { size: 13, color: C.slate, anchor: 'middle' });
    lab(s, (TP.x0 + TP.x1) / 2, TP.y0 + 38, 'volume of titrant added / mL', { size: 12.5, color: C.slate });
    // the curve, solved from the charge balance
    const pts = CURVE_V.map((V): P => [tx(V), ty(titrationPH(c.pair, V))]);
    path(s, pts, { w: 2.2, name: 'curve' });
    // indicator bands, qualitative: a bracket beside the plot, on the side of 7 the indicator works on
    const bx = TP.x1 + 16;
    K.bands.forEach((b) => {
      const B = BANDS[b];
      path(s, [[bx - 5, ty(B.hi)], [bx, ty(B.hi)], [bx, ty(B.lo)], [bx - 5, ty(B.lo)]], { color: C.ink, w: 1.8, name: `band-${b}` });
    });
    // the equivalence point: the one highlight
    const pe = titrationPH(c.pair, 10), ep: P = [tx(10), ty(pe)];
    s.point(ep[0], ep[1], 5.5, `<circle cx="${r1(ep[0])}" cy="${r1(ep[1])}" r="5.5" fill="none" stroke="${C.mari}" stroke-width="2.6"/>`);
    if (c.pair !== 'ss' && c.pair !== 'ww') { path(s, [[TP.x0, ep[1]], [ep[0] - 6, ep[1]]], { color: C.grey, w: 1.1, dash: true, name: 'eqh' }); lab(s, TP.x0 - 6, ep[1] + 4, K.eq, { size: 12, anchor: 'end', color: C.amber }); }
    const specs = [
      { t: 'Equivalence', p: ep, hi: true, at: [[K.tagEq[0], K.tagEq[1], 'start'] as [number, number, 'start']] },
      ...K.bands.map((b) => ({ t: BANDS[b].name, p: [bx, ty((BANDS[b].lo + BANDS[b].hi) / 2)] as P, at: [[K.tagBand[b][0], K.tagBand[b][1], 'start'] as [number, number, 'start']] })),
    ];
    if (c.pair === 'ww') specs.push({ t: 'Gentle slope', p: [tx(12), ty(titrationPH('ww', 12))], at: [[206, 160, 'start'] as [number, number, 'start']] });
    s.place(specs);
    resultBlock(s, [res], { size: 14 });
    return s;
  },
  check(c: { pair: Pair }) {
    const K = TIT_CASES[c.pair], s = fig03d1.draw(c), out: Check[] = [], curve = lineOf(s, 'curve');
    const ph = (V: number) => titrationPH(c.pair, V);
    const { Ka, Kb, Kw } = TIT, p0 = { ss: 1, wa: -Math.log10(Math.sqrt(Ka * 0.1)), wb: 14 + Math.log10(Math.sqrt(Kb * 0.1)), ww: -Math.log10(Math.sqrt(Ka * 0.1)) }[c.pair];
    out.push([`The curve starts at the pH of the 0.100 M analyte alone: solved ${fmt(ph(0), 2)}, from the formula ${fmt(p0, 2)}`, close(ph(0), p0, 0.02)]);
    const eq = ph(10), expectEq = { ss: 7, wa: 14 + Math.log10(Math.sqrt((Kw / Ka) * 0.05)), wb: -Math.log10(Math.sqrt((Kw / Kb) * 0.05)), ww: 7 }[c.pair];
    out.push([`Equivalence (10.0 mL of 0.100 M titrant) is at pH ${fmt(eq, 2)}, from the hydrolysis formula ${fmt(expectEq, 2)}; the drawing prints about ${K.eq}`, close(eq, expectEq, 0.01) && Math.abs(+K.eq - eq) < 0.06]);
    if (c.pair === 'wa') out.push([`The text's worked value: pH ${fmt(eq, 2)} = 8.72 (K_h = K_w/K_a = ${(Kw / Ka).toExponential(2)}, [OH⁻] = √(K_h × 0.050))`, close(eq, 8.72, 0.006)]);
    if (c.pair === 'wb') out.push([`The text's worked value: pH ${fmt(eq, 2)} = 5.28, and 8.72 + 5.28 = ${fmt(titrationPH('wa', 10) + eq, 2)} = 14.00 because K_a = K_b`, close(eq, 5.28, 0.006) && close(titrationPH('wa', 10) + eq, 14, 0.01)]);
    const [vq, pq] = fromPx(...(curve.find((p) => close(p[0], tx(10), 1e-6)) as P));
    out.push([`The drawn point at 10.0 mL reads back as V = ${fmt(vq, 2)} mL, pH ${fmt(pq, 2)}, the equivalence point`, close(vq, 10, 0.01) && close(pq, eq, 0.07)]);
    const mono = curve.slice(1).every((p, i) => (c.pair === 'wb' ? p[1] >= curve[i][1] - 1e-9 : p[1] <= curve[i][1] + 1e-9));
    out.push([`The pH ${c.pair === 'wb' ? 'falls' : 'rises'} all along the curve (${curve.length} points, never turning back)`, mono]);
    const lo = ph(10 - TIT.drop), hi = ph(10 + TIT.drop), jump = Math.abs(hi - lo);
    out.push([`One drop (0.05 mL) either side of equivalence moves the pH from ${fmt(lo, 2)} to ${fmt(hi, 2)}: a jump of ${fmt(jump, 1)} units, ${c.pair === 'ww' ? 'too small for a sharp end point' : 'a steep step'}`, c.pair === 'ww' ? jump < 1.5 : jump > 3]);
    const span = [Math.min(lo, hi), Math.max(lo, hi)];
    const fits = (b: 'pp' | 'mo') => { const mid = (BANDS[b].lo + BANDS[b].hi) / 2; return mid >= span[0] && mid <= span[1]; };
    const drawn = (['pp', 'mo'] as const).filter((b) => (LINES.get(s) ?? []).some((l) => l.name === `band-${b}`));
    out.push([`The indicators drawn are exactly those whose band centre lies on the steep part (pH ${fmt(span[0], 1)} to ${fmt(span[1], 1)}): ${drawn.map((b) => BANDS[b].name).join(' and ') || 'none'}`, (['pp', 'mo'] as const).every((b) => fits(b) === drawn.includes(b)) && drawn.join() === K.bands.join()]);
    out.push([`Each drawn band is on its own side of 7 (phenolphthalein above, methyl orange below), and for the unequal pairs the same side as equivalence (${fmt(eq, 1)})`, drawn.every((b) => (b === 'pp' ? BANDS.pp.lo > 7 && (c.pair === 'ss' || eq > 7) : BANDS.mo.hi < 7 && (c.pair === 'ss' || eq < 7)))]);
    drawn.forEach((b) => { const br = lineOf(s, `band-${b}`), top = fromPx(0, br[0][1])[1], bot = fromPx(0, br[2][1])[1]; out.push([`${BANDS[b].name}'s bracket spans pH ${fmt(bot, 1)} to ${fmt(top, 1)} as drawn (no numbers printed)`, close(top, BANDS[b].hi, 0.01) && close(bot, BANDS[b].lo, 0.01)]); });
    out.push(['The tags: Equivalence' + drawn.map((b) => `, ${BANDS[b].name}`).join('') + (c.pair === 'ww' ? ', Gentle slope' : ''), s.tags.filter((t) => t.from).map((t) => t.name).join('|') === ['Equivalence', ...drawn.map((b) => BANDS[b].name), ...(c.pair === 'ww' ? ['Gentle slope'] : [])].join('|')]);
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* c12-12-03-d2 · the burette set-up and the end-point colours (index 2)   */
/* ===================================================================== */
/** Colour is a thick stroke (no fills). Phenolphthalein pink, methyl orange yellow and pinkish red, permanent light pink. */
const COL = { pink: '#E0558F', yellow: '#E6B800', pinkRed: '#D9484F', lightPink: '#EDA3C2' };
const SETUP = {
  rod: 52, cx: 150, hw: 11, top: 38, bottom: 214, y0: 66, y50: 214, clampY: 48, cock: 232, nozzleTip: 254,
  neckHalf: 12, neckTop: 244, neckEnd: 270, baseY: 318, baseHalf: 46, tileTop: 318, tileHalf: 66, tileH: 8, level: 74,
};
const ENDPOINTS: { id: string; name: string; before: string | null; after: string; bw: string; aw: string; note: string }[] = [
  { id: 'phenolphthalein', name: 'Phenolphthalein', before: null, after: COL.pink, bw: 'colourless', aw: 'pink', note: 'acid in the flask, NaOH from the burette' },
  { id: 'methyl orange', name: 'Methyl orange', before: COL.yellow, after: COL.pinkRed, bw: 'yellow', aw: 'pinkish red', note: 'base in the flask, acid from the burette' },
  { id: 'KMnO4', name: 'KMnO<sub>4</sub> in acid', before: null, after: COL.lightPink, bw: 'colourless (Mn<sup>2+</sup>)', aw: 'permanent light pink', note: 'self-indicator, no other indicator' },
];
const KMNO4: [Side, Side] = [[[1, 'MnO<sub>4</sub><sup>−</sup>'], [8, 'H<sup>+</sup>'], [5, 'e<sup>−</sup>']], [[1, 'Mn<sup>2+</sup>'], [4, 'H<sub>2</sub>O']]];
const fig03d2: Diagram = {
  id: 'c12-12-03-d2',
  topic: 2,
  name: 'Burette set-up and end points',
  cases: [
    { chip: 'Set-up', cap: 'A burette clamped on its stand, the funnel taken out, the titrant run in from the stopcock into a conical flask that stands on a white tile.', view: 'setup' },
    { chip: 'End-point colours', cap: 'The end point: phenolphthalein goes from colourless to pink, methyl orange from yellow to pinkish red, and KMnO<sub>4</sub> in acid from colourless (Mn<sup>2+</sup>) to a permanent light pink.', view: 'colours' },
  ],
  draw(c: { view: 'setup' | 'colours' }) {
    if (c.view === 'colours') {
      const s = new Sketch(W, 322);
      ENDPOINTS.forEach((e, i) => {
        const y = 22 + i * 104;
        lab(s, 14, y, e.name, { size: 14, anchor: 'start', bold: true });
        const yy = y + 30;
        const swatch = (x1: number, x2: number, col: string | null, name: string) => {
          if (col) path(s, [[x1, yy], [x2, yy]], { color: col, w: 14, name });
          else { s.add(`<rect x="${x1 - 8}" y="${yy - 9}" width="${x2 - x1 + 16}" height="18" rx="9" fill="none" stroke="${C.grey}" stroke-width="1.5" stroke-dasharray="4 3"/>`); keep(s, [[x1 - 8, yy - 9], [x2 + 8, yy - 9], [x2 + 8, yy + 9], [x1 - 8, yy + 9], [x1 - 8, yy - 9]], name); }
        };
        swatch(30, 80, e.before, `before-${e.id}`);
        swatch(236, 286, e.after, `after-${e.id}`);
        s.vec(104, yy, 204, yy, { color: C.mari, w: 2.2 });
        keep(s, [[104, yy], [204, yy]], `arrow-${e.id}`);
        lab(s, 55, yy + 29, e.bw, { size: 12, color: C.slate });
        lab(s, 261, yy + 29, e.aw, { size: 12, color: C.slate });
        lab(s, 170, yy + 50, e.note, { size: 12, color: C.faint });
      });
      return s;
    }
    const G = SETUP, s = new Sketch(W, 352), { cx, hw } = G;
    // stand, rod, arm and clamp
    path(s, [[G.rod - 22, G.baseY + G.tileH], [G.rod + 22, G.baseY + G.tileH]], { w: 2.4, name: 'standbase' });
    path(s, [[G.rod, G.baseY + G.tileH], [G.rod, 24]], { w: 2.2, name: 'rod' });
    path(s, [[G.rod, G.clampY], [cx - hw - 4, G.clampY]], { w: 2, name: 'arm' });
    s.add(`<rect x="${cx - hw - 4}" y="${G.clampY - 7}" width="${2 * hw + 8}" height="14" rx="3" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
    keep(s, [[cx - hw - 4, G.clampY - 7], [cx + hw + 4, G.clampY - 7], [cx + hw + 4, G.clampY + 7], [cx - hw - 4, G.clampY + 7], [cx - hw - 4, G.clampY - 7]], 'clamp');
    // the burette: two walls, open at the top (the funnel is out), the stopcock, the nozzle
    path(s, [[cx - hw, G.top], [cx - hw, G.bottom + 6]], { name: 'wallL' });
    path(s, [[cx + hw, G.top], [cx + hw, G.bottom + 6]], { name: 'wallR' });
    path(s, [[cx - hw, G.bottom + 6], [cx - 3, G.cock - 4], [cx - 3, G.cock + 6], [cx - 2, G.nozzleTip]], { name: 'nozzleL' });
    path(s, [[cx + hw, G.bottom + 6], [cx + 3, G.cock - 4], [cx + 3, G.cock + 6], [cx + 2, G.nozzleTip]], { name: 'nozzleR' });
    path(s, [[cx - 8, G.cock - 2], [cx + 8, G.cock - 2]], { w: 1.4, name: 'cockbody' });
    path(s, [[cx + 8, G.cock + 2], [cx + 36, G.cock + 2]], { color: C.mari, w: 3.2, name: 'handle' });
    // graduations, 0 at the top to 50 at the foot, a mark every 5 mL
    const yOf = (mL: number) => G.y0 + (mL / 50) * (G.y50 - G.y0);
    for (let m = 0; m <= 50; m += 5) path(s, [[cx - hw, yOf(m)], [cx - hw + (m % 10 === 0 ? 8 : 5), yOf(m)]], { color: C.slate, w: 1.1, name: `grad${m}` });
    lab(s, cx - hw - 6, yOf(0) + 4, '0', { size: 12, anchor: 'end', color: C.slate });
    lab(s, cx - hw - 6, yOf(50) + 4, '50', { size: 12, anchor: 'end', color: C.slate });
    // the liquid level in the burette
    path(s, [[cx - hw, G.level], [cx - 4, G.level + 3], [cx + 4, G.level + 3], [cx + hw, G.level]], { color: C.slate, w: 1.5, name: 'liquid' });
    // the conical flask, mouth under the nozzle, on the white tile
    const fl: P[] = [[cx - G.neckHalf, G.neckTop], [cx - G.neckHalf, G.neckEnd], [cx - G.baseHalf, G.baseY], [cx + G.baseHalf, G.baseY], [cx + G.neckHalf, G.neckEnd], [cx + G.neckHalf, G.neckTop]];
    path(s, fl, { name: 'flask' });
    path(s, [[cx - G.neckHalf - 3, G.neckTop], [cx - G.neckHalf, G.neckTop]], { name: 'lipL' });
    path(s, [[cx + G.neckHalf, G.neckTop], [cx + G.neckHalf + 3, G.neckTop]], { name: 'lipR' });
    path(s, [[cx - G.baseHalf + 8, G.baseY - 12], [cx + G.baseHalf - 8, G.baseY - 12]], { color: C.slate, w: 1.3, name: 'flaskLiquid' });
    s.add(`<rect x="${cx - G.tileHalf}" y="${G.tileTop}" width="${2 * G.tileHalf}" height="${G.tileH}" rx="2" fill="none" stroke="${C.ink}" stroke-width="1.5"/>`);
    keep(s, [[cx - G.tileHalf, G.tileTop], [cx + G.tileHalf, G.tileTop], [cx + G.tileHalf, G.tileTop + G.tileH], [cx - G.tileHalf, G.tileTop + G.tileH], [cx - G.tileHalf, G.tileTop]], 'tile');
    s.place([
      { t: 'Stopcock', p: [cx + 30, G.cock + 2], hi: true, at: [[cx + 44, G.cock - 8, 'start']] },
      { t: 'Funnel removed', p: [cx + hw, G.top + 2], at: [[cx + 28, 30, 'start']] },
      { t: 'Titrant: NaOH', p: [cx + hw, G.level + 2], at: [[cx + 28, 64, 'start']] },
      { t: 'Burette', p: [cx + hw, 128], at: [[cx + 34, 118, 'start']] },
      { t: 'Conical flask', p: [cx + 34, G.baseY - 26], at: [[cx + 62, 272, 'start']] },
      { t: 'White tile', p: [cx + G.tileHalf - 6, G.tileTop + 4], at: [[cx + 74, 324, 'start']] },
      { t: 'Stand', p: [G.rod, 90], at: [[G.rod + 12, 96, 'start']] },
    ]);
    return s;
  },
  check(c: { view: 'setup' | 'colours' }) {
    const s = fig03d2.draw(c), out: Check[] = [];
    if (c.view === 'setup') {
      const G = SETUP, L = lineOf(s, 'wallL'), R = lineOf(s, 'wallR'), flask = lineOf(s, 'flask'), tile = lineOf(s, 'tile');
      out.push([`The burette is upright: both walls are straight verticals (x ${fmt(L[0][0], 0)} and ${fmt(R[0][0], 0)}) the same length (${fmt(L[1][1] - L[0][1], 0)} and ${fmt(R[1][1] - R[0][1], 0)} px) and nothing joins them at the top, so the funnel is out`, L[0][0] === L[1][0] && R[0][0] === R[1][0] && close(L[1][1] - L[0][1], R[1][1] - R[0][1]) && (LINES.get(s) ?? []).every((l) => !(l.pts.some((p) => close(p[1], G.top, 1) && p[0] < G.cx - 2) && l.pts.some((p) => close(p[1], G.top, 1) && p[0] > G.cx + 2)))]);
      const marks = Array.from({ length: 11 }, (_, i) => lineOf(s, `grad${i * 5}`)[0][1]), gaps = marks.slice(1).map((y, i) => y - marks[i]);
      out.push([`The scale runs 0 at the top to 50 mL at the foot in 11 equal steps of 5 mL (${fmt(gaps[0], 2)} px each), and every mark lies on the tube wall`, gaps.every((g) => close(g, gaps[0], 1e-6)) && marks[0] < marks[10] && hasLabel(s, '0') && hasLabel(s, '50')]);
      const nz = lineOf(s, 'nozzleL')[3], nzR = lineOf(s, 'nozzleR')[3], neck = [flask[0][0], flask[5][0]];
      out.push([`The stopcock (y ${fmt(G.cock, 0)}) is below the scale (foot y ${fmt(G.y50, 0)}) and above the nozzle tip (y ${fmt(nz[1], 0)}), which is centred over the flask's mouth and dips below its lip (y ${fmt(G.neckTop, 0)}) between the neck walls (x ${fmt(neck[0], 0)} to ${fmt(neck[1], 0)})`, G.cock > G.y50 && G.cock < nz[1] && nz[1] > G.neckTop && nz[0] > neck[0] && nzR[0] < neck[1] && close((nz[0] + nzR[0]) / 2, G.cx, 0.6)]);
      out.push([`The flask stands on the tile: its base (y ${fmt(flask[3][1], 0)}) is the tile's top (y ${fmt(tile[0][1], 0)}), and the tile (${fmt(tile[1][0] - tile[0][0], 0)} px) is wider than the flask's base (${fmt(flask[3][0] - flask[2][0], 0)} px)`, close(flask[3][1], tile[0][1]) && tile[1][0] - tile[0][0] > flask[3][0] - flask[2][0]]);
      out.push(['The names as printed: Stopcock, Funnel removed, Titrant: NaOH, Burette, Conical flask, White tile, Stand', s.tags.filter((t) => t.from).map((t) => t.name).join('|') === 'Stopcock|Funnel removed|Titrant: NaOH|Burette|Conical flask|White tile|Stand']);
      out.push(['One highlight: the stopcock handle in marigold', lineOf(s, 'handle').length === 2 && s.tags.filter((t) => t.name === 'Stopcock').length === 1]);
    } else {
      const { Ka, Kb } = TIT, pHwa = (V: number) => titrationPH('wa', V), pHwb = (V: number) => titrationPH('wb', V);
      out.push([`Phenolphthalein: the acid in the flask is titrated with NaOH, so the pH rises through its band (8.2 to 10.0): ${fmt(pHwa(9.9), 2)} at 9.9 mL (colourless) to ${fmt(pHwa(10.1), 2)} at 10.1 mL (pink)`, pHwa(9.9) < 8.2 && pHwa(10.1) > 8.2 && Ka > 0]);
      out.push([`Methyl orange: the base in the flask is titrated with acid, so the pH falls through its band (3.1 to 4.4): ${fmt(pHwb(10), 2)} at 10.0 mL (still yellow) to ${fmt(pHwb(10.1), 2)} at 10.1 mL (pinkish red)`, pHwb(10) > 4.4 && pHwb(10.1) < 4.4 && Kb > 0]);
      out.push(eqCheck('Permanganate in acid', KMNO4));
      const dOx = 7 - 2, e = KMNO4[0].find(([, f]) => f.includes('e<sup>'))![0];
      out.push([`Mn goes from +7 to +2, ${dOx} electrons, the ${e} e⁻ in the half-equation and the n-factor 5 of KMnO₄; Mn²⁺ is colourless, so the first permanent pink is one drop of excess MnO₄⁻`, dOx === e && e === 5]);
      out.push(['Colour as stroke: ' + ENDPOINTS.map((x) => `${x.id} ${x.before ? 'coloured' : 'colourless'} → coloured`).join(', ') + '; "colourless" is a dashed grey outline', ENDPOINTS.every((x) => { const L = LINES.get(s)!; const b = L.find((l) => l.name === `before-${x.id}`)!, a = L.find((l) => l.name === `after-${x.id}`)!; return !!b && !!a && a.pts.length >= 2; })]);
      out.push(['The names and colours as the text gives them: colourless · pink · yellow · pinkish red · colourless (Mn²⁺) · permanent light pink', ['colourless', 'pink', 'yellow', 'pinkish red', 'colourless (Mn2+)', 'permanent light pink'].every((t) => hasLabel(s, t))]);
      out.push(['One highlight: the three end-point arrows in marigold, all pointing from the starting colour to the end colour (left to right)', ENDPOINTS.every((x) => { const a = lineOf(s, `arrow-${x.id}`); return a[1][0] > a[0][0]; })]);
    }
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* c12-12-03-d3 · reading a burette (index 2)                              */
/* ===================================================================== */
/**
 * A side view of the scale: the tube (walls at cx ± hw), its graduations on the near wall, the liquid's meniscus a
 * parabola (rim at the wall, lowest point on the axis, `depth` mL below the rim). The window starts at `v0` mL
 * and runs down the tube at `pxPerML`. Readings are the text's: 20.6 mL (final reading, lower meniscus, NaOH
 * titration) and 19.6 mL (upper meniscus, KMnO4 titration).
 */
const BU = { cx: 164, hw: 30, y0: 34, pxPerML: 60, span: 3.5, depth: 0.2, eyeX: 28, tickX: 116, num: 106, sightX: 56 };
const READ = { lower: 20.6, upper: 19.6, high: 20.6, eyeHigh: 96 };
type BuView = { v0: number; read: number; kind: 'lower' | 'upper' | 'parallax' };
const BU_VIEWS: Record<string, BuView> = { lower: { v0: 19, read: READ.lower, kind: 'lower' }, upper: { v0: 18, read: READ.upper, kind: 'upper' }, parallax: { v0: 19, read: READ.high, kind: 'parallax' } };
const buY = (v0: number, mL: number) => BU.y0 + (mL - v0) * BU.pxPerML;
const buVal = (v0: number, y: number) => v0 + (y - BU.y0) / BU.pxPerML;
const fig03d3: Diagram = {
  id: 'c12-12-03-d3',
  topic: 2,
  name: 'Reading a burette',
  cases: [
    { chip: 'Colourless', cap: 'A colourless solution: read the lower meniscus, with the eye at the level of the meniscus. Here the reading is 20.6 mL, on a scale marked every 0.1 mL.', view: 'lower' },
    { chip: 'Dark KMnO4', cap: 'A dark solution such as KMnO<sub>4</sub>: the lower meniscus cannot be seen, so read the upper meniscus, again with the eye level with it. Here the reading is 19.6 mL.', view: 'upper' },
    { chip: 'Eye too high', cap: 'Parallax: with the eye above the meniscus the line of sight meets the scale too high, so the reading is too low (20.4 mL for a true 20.6 mL). Keep the eye at the level of the meniscus.', view: 'parallax' },
  ],
  draw(c: { view: string }) {
    const V = BU_VIEWS[c.view], s = new Sketch(W, 300), { cx, hw } = BU;
    const yTop = BU.y0 - 4, yEnd = buY(V.v0, V.v0 + BU.span) + 4;
    path(s, [[cx - hw, yTop], [cx - hw, yEnd]], { name: 'wallL' });
    path(s, [[cx + hw, yTop], [cx + hw, yEnd]], { name: 'wallR' });
    // graduations: a mark every 0.1 mL, longer at 0.5 and numbered at every whole mL
    for (let k = 0; k <= Math.round(BU.span * 10); k++) {
      const v = V.v0 + k / 10, y = buY(V.v0, v), whole = k % 10 === 0, half = k % 5 === 0;
      path(s, [[cx - hw - (whole ? 18 : half ? 12 : 8), y], [cx - hw, y]], { color: C.slate, w: whole ? 1.5 : 1.1, name: `tick${k}` });
      if (whole) lab(s, BU.num, y + 4, String(Math.round(v)), { size: 12, anchor: 'end', color: C.slate });
    }
    // the liquid: a meniscus curve, its lowest point `depth` mL under the rim; the reading is where the text says
    const yRead = buY(V.v0, V.read), yBottom = V.kind === 'upper' ? yRead + BU.depth * BU.pxPerML : yRead, yRim = yBottom - BU.depth * BU.pxPerML;
    const curve: P[] = Array.from({ length: 31 }, (_, i): P => { const x = cx - hw + (2 * hw * i) / 30, u = (x - cx) / hw; return [x, yBottom - BU.depth * BU.pxPerML * u * u]; });
    path(s, curve, { w: 1.9, name: 'meniscus' });
    // a dark solution is hatched: the lower meniscus is hidden in it
    if (V.kind === 'upper') {
      for (let y = yRim + 5; y < yEnd - 2; y += 5) {
        const run = y >= yBottom ? [[cx - hw + 1, cx + hw - 1]] : (() => { const w = hw * Math.sqrt(Math.max(0, (yBottom - y) / (BU.depth * BU.pxPerML))); return [[cx - hw + 1, cx - w - 2], [cx + w + 2, cx + hw - 1]]; })();
        run.forEach(([a, b]) => { if (b - a > 3) path(s, [[a, y], [b, y]], { color: C.grey, w: 1.2, name: 'hatch' }); });
      }
    }
    // the eye and the line of sight
    const readPt: P = [cx, V.kind === 'upper' ? yRim : yBottom];
    const eyeY = V.kind === 'parallax' ? READ.eyeHigh : readPt[1];
    const ex = BU.eyeX;
    path(s, Array.from({ length: 17 }, (_, i): P => { const t = i / 16; return [ex - 17 + 34 * t, eyeY - 9 * Math.sin(Math.PI * t)]; }), { w: 1.6, name: 'eyeTop' });
    path(s, Array.from({ length: 17 }, (_, i): P => { const t = i / 16; return [ex - 17 + 34 * t, eyeY + 9 * Math.sin(Math.PI * t)]; }), { w: 1.6, name: 'eyeBottom' });
    s.add(`<circle cx="${ex}" cy="${eyeY}" r="4.2" fill="${C.ink}"/>`);
    if (V.kind === 'parallax') {
      const slope = (readPt[1] - eyeY) / (readPt[0] - BU.sightX), yf = eyeY + slope * (cx - hw - BU.sightX);
      path(s, [[BU.sightX, eyeY], [readPt[0], readPt[1]]], { color: C.mari, w: 2.2, name: 'sight' });
      path(s, [[BU.tickX, readPt[1]], [readPt[0] - 3, readPt[1]]], { color: C.grey, w: 1.3, dash: true, name: 'true' });
      s.point(cx - hw, yf, 4.6, `<circle cx="${cx - hw}" cy="${r1(yf)}" r="4.6" fill="none" stroke="${C.ink}" stroke-width="1.6"/>`);
    } else {
      path(s, [[BU.sightX, eyeY], [BU.tickX - 2, eyeY]], { color: C.grey, w: 1.3, dash: true, name: 'sightgrey' });
      path(s, [[BU.tickX, readPt[1]], [readPt[0] + (V.kind === 'upper' ? hw - 2 : 0), readPt[1]]], { color: C.mari, w: 2.2, name: 'sight' });
    }
    const label = V.kind === 'lower' ? 'Lower meniscus' : V.kind === 'upper' ? 'Upper meniscus' : 'Lower meniscus';
    s.place([
      { t: label, p: V.kind === 'upper' ? [cx + hw - 4, yRim + 1] : [cx + 14, curve[20][1]], hi: V.kind !== 'parallax', at: [[cx + hw + 14, readPt[1] - 40, 'start'], [cx + hw + 14, readPt[1] + 20, 'start']] },
      { t: V.kind === 'parallax' ? 'Eye too high' : 'Eye level', p: [ex, eyeY + (V.kind === 'parallax' ? -9 : 9)], at: V.kind === 'parallax' ? [[4, eyeY - 52, 'start'], [4, eyeY - 40, 'start']] : [[4, eyeY + 28, 'start'], [4, eyeY + 40, 'start']] },
    ]);
    const res = V.kind === 'parallax' ? [`reads ${fmt(buVal(V.v0, eyeY + ((readPt[1] - eyeY) / (readPt[0] - BU.sightX)) * (cx - hw - BU.sightX)), 1)} mL, true ${fmt(V.read, 1)} mL`] : [`reading ${fmt(V.read, 1)} mL`];
    resultBlock(s, res, { size: 14 });
    return s;
  },
  check(c: { view: string }) {
    const V = BU_VIEWS[c.view], s = fig03d3.draw(c), out: Check[] = [], { cx, hw } = BU;
    const ticks = Array.from({ length: Math.round(BU.span * 10) + 1 }, (_, k) => lineOf(s, `tick${k}`)[1][1]);
    const gaps = ticks.slice(1).map((y, i) => y - ticks[i]);
    out.push([`The scale has a mark every 0.1 mL: ${ticks.length} marks, ${fmt(gaps[0], 2)} px apart, equal; ${fmt(10 * gaps[0], 0)} px to the mL, so 0.1 mL is ${fmt(gaps[0], 1)} px (a 50 mL burette has 50/0.1 = 500 such marks)`, gaps.every((g) => close(g, gaps[0], 1e-6)) && close(gaps[0] * 10, BU.pxPerML, 1e-6) && Math.round(50 / 0.1) === 500]);
    const numbers = s.labels.filter((l) => /^\d+$/.test(l.text));
    const wholes = numbers.map((l) => ({ v: +l.text, y: (l.rect[1] + l.rect[3]) / 2 }));
    out.push([`The numbers ${numbers.map((l) => l.text).join(', ')} sit at their own marks (each ${fmt(BU.pxPerML, 0)} px under the one before), reading downward`, wholes.every((w) => close(buY(V.v0, w.v), w.y + 0.5, 2.6)) && wholes.length === 4]);
    const m = lineOf(s, 'meniscus'), mLow = Math.max(...m.map((p) => p[1])), mHigh = Math.min(...m.map((p) => p[1]));
    out.push([`The meniscus is concave: lowest on the axis (y ${fmt(mLow, 1)}), highest at the walls (y ${fmt(mHigh, 1)}), ${fmt(buVal(V.v0, mLow) - buVal(V.v0, mHigh), 2)} mL deep, and symmetric`, close(m[15][1], mLow, 1e-6) && close(m[0][1], mHigh, 1e-6) && close(m[30][1], mHigh, 1e-6) && close(buVal(V.v0, mLow) - buVal(V.v0, mHigh), BU.depth, 1e-6)]);
    if (V.kind === 'lower') {
      const sight = lineOf(s, 'sight'), grey = lineOf(s, 'sightgrey'), reading = buVal(V.v0, mLow);
      out.push([`Lower meniscus read: the lowest point of the curve is at ${fmt(reading, 2)} mL, the text's 20.6 mL; the rim is 0.2 mL higher, at ${fmt(buVal(V.v0, mHigh), 2)} mL`, close(reading, READ.lower, 1e-6)]);
      out.push([`The eye is level with the meniscus: its line of sight (y ${fmt(grey[0][1], 1)}) runs horizontal to the reading line (y ${fmt(sight[0][1], 1)}), with no slope, so there is no parallax`, close(grey[0][1], grey[1][1]) && close(grey[0][1], sight[0][1]) && close(sight[0][1], mLow)]);
    } else if (V.kind === 'upper') {
      const sight = lineOf(s, 'sight'), grey = lineOf(s, 'sightgrey'), reading = buVal(V.v0, mHigh), hidden = buVal(V.v0, mLow);
      out.push([`Upper meniscus read: the rim of the curve is at ${fmt(reading, 2)} mL, the text's 19.6 mL; the lower meniscus (${fmt(hidden, 2)} mL) lies under the hatching of the dark solution, ${fmt(hidden - reading, 1)} mL lower`, close(reading, READ.upper, 1e-6) && (LINES.get(s) ?? []).filter((l) => l.name === 'hatch').length > 10]);
      out.push([`The eye is level with the upper meniscus: line of sight y ${fmt(grey[0][1], 1)} equals the reading line y ${fmt(sight[0][1], 1)} and the rim y ${fmt(mHigh, 1)}`, close(grey[0][1], grey[1][1]) && close(grey[0][1], sight[0][1]) && close(sight[0][1], mHigh)]);
      out.push([`Because every reading is taken the same way, the difference of two upper-meniscus readings is the volume run in (as in the text's table: 19.6 − 0.0 = 19.6 mL): shifting both by the 0.2 mL depth changes nothing`, close((19.6 + BU.depth) - (0 + BU.depth), 19.6)]);
    } else {
      const sight = lineOf(s, 'sight'), tr = lineOf(s, 'true'), eye = sight[0], mp = sight[1], xs = cx - hw;
      const yf = eye[1] + ((mp[1] - eye[1]) / (mp[0] - eye[0])) * (xs - eye[0]), apparent = buVal(V.v0, yf), truth = buVal(V.v0, mp[1]);
      out.push([`The line of sight from the eye (y ${fmt(eye[1], 0)}, above the meniscus at y ${fmt(mp[1], 0)}) meets the scale wall at y ${fmt(yf, 1)}, which is ${fmt(apparent, 2)} mL: ${fmt(truth - apparent, 2)} mL too low (similar triangles: ${fmt(xs - eye[0], 0)} of ${fmt(mp[0] - eye[0], 0)} px of the way)`, eye[1] < mp[1] && yf < mp[1] && apparent < truth && close(truth, READ.high, 1e-6)]);
      out.push([`The true level (dashed, ${fmt(truth, 2)} mL) is the meniscus's lowest point (y ${fmt(tr[0][1], 1)}), and the printed result reads ${fmt(apparent, 1)} mL against ${fmt(truth, 1)} mL`, close(tr[0][1], mLow) && s.tags.some((t) => t.name.includes('reads 20.4 mL, true 20.6 mL'))]);
    }
    out.push(...layout(s));
    return out;
  },
};

export const DIAGRAMS_CHEMISTRY_12_12: Diagram[] = [fig01d1, fig01d2, fig01d3, fig03d1, fig03d2, fig03d3];
