import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';
import { stixW } from '@/lib/diagrams/mathematics-11-03b';

/**
 * MATHEMATICS CLASS 11, CHAPTER 8 (Sequences and Series): every drawing of the Master Reference book (October
 * edition) on pp. 677–788, redrawn. The numbered figures stand on their own "CHAPTER 8 · FIGURES" plates, the page
 * after their caption; the Additional Topics part prints its own "Figure 1" and "Figure 2" in the text.
 *
 *   Figure 8.1 (p. 678; caption p. 677), the sequence as a function machine, Topic 01, topic index 0.
 *   Figure 8.2 (p. 685; caption p. 684), the AP staircase and the line of slope d, Topic 02, index 1.
 *   Figure 8.3 (p. 696; caption p. 695), the chessboard GP, growth against decay, Topic 03, index 2.
 *   Figure 8.4 (p. 707; caption p. 706), the round trip and the HM, Topic 04, index 3.
 *   Figure 8.5 (p. 714; caption p. 713), H < G < A for a = 4, b = 16, Topic 05, index 4.
 *   Figure 8.6 (p. 721; caption p. 720), an AGP is an AP times a GP, Topic 06, index 5.
 *   Figure 8.7 (p. 728; caption p. 727), the cube identity telescopes; the sum of cubes is a square, Topic 07, index 6.
 *   Figure 8.8 (p. 736; caption p. 735), the telescoping collapse of 1/(r(r + 1)), Topic 08, index 7.
 *   Figure 8.9 (p. 744; caption p. 743), outside-in pairs in an AP and a GP, Topic 09, index 8.
 *   Figure 8.10 (p. 746; caption p. 745), simple against compound interest and depreciation, Topic 09, index 8.
 *   Figure 8.11 (p. 762; caption p. 761), front-pairing the alternating squares, Additional topic B, index 10.
 *   The Additional Topics part's "Figure 1" (p. 774), a₁ = 2, aₙ₊₁ = 3aₙ + 1 from its fixed point, m11-08-F-d1, index 14.
 *   Its "Figure 2" (p. 781), y = x + 4/x on x > 0 and on x ≥ 3, m11-08-G-d1, index 15.
 *
 * ONE HIGHLIGHT. The book's orange is the marigold where it is one thing: 8.1 the Σ line; 8.2 the risers d and
 * d = 50; 8.3 the 2⁶³ arrow and the r = 2 curve; 8.4 the "out" arrow (first chip) and the AP of reciprocals (second
 * chip); 8.5 G; 8.6 the AGP row; 8.7 the strikes, the dashed pairings and their heading; 8.9 the GP row; 8.10 the
 * compound curve, its label and its callout; 8.11 the negative tiles, the AP of brackets and its sum; F-d1 the gaps
 * from L and their note; G-d1 the minimum and the bound (first chip). The book's navy, teal and green are ink, its
 * grey slate.
 *
 * NO FILLS. The book's pale box fills (8.1's rule, 8.6's AP row, 8.9's middle panel, 8.11's positive tiles), the
 * chessboard's alternate squares, 8.4's road strips and 8.7's three coloured regions are left out: outlines only
 * (8.7's 1³ and 3 × 3 squares get heavy edges so the three regions still read). 8.8's two "shaded" survivors are
 * marigold hatching with heavy edges, so the label "only the shaded ends survive" is still true; there the
 * book's orange strikes and dotted links are ink, so the one highlight is what survives. G-d1's grey band
 * (x < 3, excluded) is marigold hatching; the curve over it, grey in the book, is a thin dashed ink line, and that
 * chip's dashed bound and its label are ink.
 *
 * DOTS. Every point on a graph is a filled dot (decision 10): 8.2, 8.3, 8.5, 8.10, F-d1, G-d1.
 *
 * DEPARTURES, for a phone: grid lines are left out (tick numbers stay); axis names the book runs up the page are set
 * level at the top of the axis; side-by-side panels are chips (8.2, 8.3, 8.4, 8.7, G-d1), one panel each; 8.4's HP and
 * AP rows stand one above the other with "flip" between, and its boxed result is set over two lines; 8.10's key is
 * left out (decision 18): each curve is named beside it. 8.6's brace label "Sₙ — sum by …" takes a colour and its
 * "Example 2" reads "The second worked example" (what the reader shows). Every fraction on a drawing is stacked by
 * hand; the n/2 in 8.9's exponent keeps its slash (a raised run). No em dash.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<\/?(?:i|sub|sup|b|frac|num|den)>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const sb = (b: string, k: string) => `${b}<sub>${k}</sub>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const N = I('n'), K = I('k');
const AN = sb(I('a'), I('n'));
const thou = (v: number) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/* ---------- lines, labels and the layout checks (as in mathematics-11-06.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string; free?: boolean };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
/** A polyline; `free` leaves it out of the clearance check (a strike drawn through a label on purpose). */
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  if (!o.free) keep(s, pts, o.name);
}
/** An arrow with a small filled head at b (and at a too when `both`); the head shrinks on a short arrow. */
function arr(s: Sketch, a: P, b: P, o: Stroke & { both?: boolean; head?: number } = {}) {
  const col = o.color ?? C.ink, L0 = o.head ?? 7, d = len(a, b), L = Math.min(L0, d / (o.both ? 2.6 : 1.6)), hw = L * 0.5;
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), ux = Math.cos(ang), uy = Math.sin(ang);
  const headAt = (tip: P, sgn: number) => {
    const bx = tip[0] - sgn * L * ux, by = tip[1] - sgn * L * uy;
    s.add(`<path d="M${r1(tip[0])} ${r1(tip[1])} L${r1(bx + hw * uy)} ${r1(by - hw * ux)} L${r1(bx - hw * uy)} ${r1(by + hw * ux)} Z" fill="${col}"/>`);
  };
  const a2: P = o.both ? [a[0] + L * ux * 0.8, a[1] + L * uy * 0.8] : a, b2: P = [b[0] - L * ux * 0.8, b[1] - L * uy * 0.8];
  s.add(`<line x1="${r1(a2[0])}" y1="${r1(a2[1])}" x2="${r1(b2[0])}" y2="${r1(b2[1])}" stroke="${col}" stroke-width="${o.w ?? 1.4}" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  headAt(b, 1);
  if (o.both) headAt(a, -1);
  if (!o.free) keep(s, [a, b], o.name ?? 'arrow');
}
/** A quadratic Bézier from a through ctrl to b, as points. */
const quad = (a: P, c: P, b: P, n = 40): P[] => Array.from({ length: n + 1 }, (_, i): P => { const t = i / n, u = 1 - t; return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]; });
/** A rounded box, its outline kept for the clearance check. */
function box(s: Sketch, r: Rect, o: Stroke & { rx?: number } = {}) {
  s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${r1(r[2] - r[0])}" height="${r1(r[3] - r[1])}" rx="${o.rx ?? 5}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.4}"${dashAttr(o.dash)}/>`);
  keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]], o.name ?? 'box');
}
const rectDist = (r: Rect, p: P) => Math.hypot(Math.max(r[0] - p[0], 0, p[0] - r[2]), Math.max(r[1] - p[1], 0, p[1] - r[3]));
const boxToLine = (r: Rect, pts: P[]) => {
  let gap = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(len(a, b) * 2));
    for (let k = 0; k <= n; k++) gap = Math.min(gap, rectDist(r, [a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]));
  }
  if (pts.length === 1) gap = rectDist(r, pts[0]);
  return gap;
};
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const l of s.labels) { const d = boxToLine(l.rect, pts); if (d < gap) { gap = d; what = `${l.text}" (from the ${ln || 'line'})`; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, box, dot and hatch stroke: the closest is "${what}, ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
};
const labelsApart = (s: Sketch): Check => {
  const L = s.labels;
  const bad = L.flatMap((a, i) => L.slice(i + 1).filter((b) => !(a.rect[2] + 2 <= b.rect[0] || b.rect[2] + 2 <= a.rect[0] || a.rect[3] + 2 <= b.rect[1] || b.rect[3] + 2 <= a.rect[1])).map((b) => `${a.text} / ${b.text}`));
  return [`No two labels on the drawing touch${bad.length ? `: ${bad.join(', ')}` : ''}`, bad.length === 0];
};
const inFrame = (s: Sketch): Check => {
  const out = s.labels.filter((l) => l.rect[0] < 0 || l.rect[2] > s.w || l.rect[1] < 0 || l.rect[3] > s.h).map((l) => l.text);
  return [`Every label lies inside the frame${out.length ? `: not ${out.join(', ')}` : ''}`, out.length === 0];
};
const linesInFrame = (s: Sketch): Check => {
  const out = (LINES.get(s) ?? []).filter((l) => l.pts.some((p) => p[0] < 0 || p[0] > s.w || p[1] < 0 || p[1] > s.h)).map((l) => l.name);
  return [`Every line lies inside the frame${out.length ? `: not ${[...new Set(out)].join(', ')}` : ''}`, out.length === 0];
};
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s), linesInFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = ts.filter((t) => !hasLabel(s, t));
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No em dash, no vulgar-fraction character and no one-line fraction outside a raised run, in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const unraised = (h: string) => plain(h.replace(/<sup>.*?<\/sup>/g, '').replace(/<frac>.*?<\/frac>/g, ''));
  const all = [...s.texts.map((t) => unraised(t.html)), d.name, ...d.cases.flatMap((c) => [c.chip, unraised(c.cap)])].join(' ').replace(/km\/h/g, 'kmh');
  return ['No em dash, no vulgar-fraction character and no slash fraction in the labels, name, chips or captions', !/[—¼-¾⅐-⅞]/.test(all) && !/[\w)!]\s*\/\s*[\w(]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; semibold?: boolean } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size) * (o.semibold ? 1.05 : 1);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text, semibold: o.semibold });
  return rect;
}
/** A label centred in a box: the baseline set so the text sits in the middle of (cx, cy). */
const labC = (s: Sketch, cx: number, cy: number, html: string, o: { size?: number; color?: string; semibold?: boolean } = {}) => lab(s, cx, cy + (o.size ?? 13) * (html.includes('<sub>') ? 0.22 : 0.3), html, { ...o, anchor: 'middle' });

/* ---------- labels of several runs: text, stacked fractions and a Σ with its limits (as in mathematics-11-06.ts) ---------- */
type Piece = { t: string } | { num: string; den: string } | { sum: true; bot: string; top: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  // A numerator with brackets reaches below its baseline: n(n + 1)(2n + 1) over 6 had the rule
  // through the feet of its brackets (8.7, Android check of Ch 8), so it sits a bracket's depth higher.
  const deep = /[()[\]{}|]/.test(plain(num)) ? size * 0.2 : 0;
  const w = fracW(num, den, size), numY = y - 3 - deep, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const SUM = 1.5, SUM_LIM = 0.72;
const pieceW = (p: Piece, size: number) =>
  'sum' in p ? Math.max(stixW('∑', size * SUM), stixW(p.bot, size * SUM_LIM), stixW(p.top, size * SUM_LIM)) + 3 : 't' in p ? stixW(p.t, size) : fracW(p.num, p.den, size) + 2;
const pieceText = (p: Piece) => ('sum' in p ? `∑[${plain(p.bot)}..${plain(p.top)}]` : 't' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
/** A text run in its slot: set against what follows it by its end, its own end spaces kept as room. */
function textRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
const runsW = (parts: Piece[], size: number) => parts.reduce((a, p) => a + pieceW(p, size), 0);
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const bx: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  const grow = (r: Rect) => { bx[1] = Math.min(bx[1], r[1]); bx[3] = Math.max(bx[3], r[3]); };
  parts.forEach((p, i) => {
    if ('sum' in p) {
      const cx = at + ws[i] / 2;
      s.text(cx, y + size * 0.2, '∑', { size: size * SUM, color });
      // Limits clear of the ∑: at 0.98 and 1.0 the lower limit touched its foot (8.1, 8.8; Android check of Ch 8).
      s.text(cx, y + size * 1.14, p.bot, { size: size * SUM_LIM, color });
      s.text(cx, y - size * 1.1, p.top, { size: size * SUM_LIM, color });
      grow([0, y - size * 1.65, 0, y + size * 1.31]);
    } else if ('t' in p) textRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    else grow(frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color));
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: bx });
  return bx;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const f = FRACS.get(s) ?? [], got = f.map((q) => `${plain(q.num)}/${plain(q.den)}`);
  const ok = f.every((q) => q.numY < q.rule[2] && q.denY - 6 > q.rule[2] && q.rule[1] - q.rule[0] >= Math.max(q.numW, q.denW)) && want.every((w) => got.includes(w)) && f.length === want.length;
  return [`Every fraction on the drawing is stacked by hand (${f.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- dots ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotAt = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name)?.p;
/** A vertical ellipsis (⋮) as three small dots, not points that mean anything. */
const vdots = (s: Sketch, x: number, y: number, col: string = C.ink) => [-6, 0, 6].forEach((d) => s.add(`<circle cx="${r1(x)}" cy="${r1(y + d)}" r="1.3" fill="${col}"/>`));

/* ---------- hatching: the book's shading, as marigold lines (mathematics-11-05.ts) ---------- */
const HATCH = new WeakMap<Sketch, [P, P][]>();
function hatch(s: Sketch, inside: (p: P) => boolean, bx: Rect, o: { step?: number; avoid?: Rect[]; gap?: number } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])];
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  for (let k = bx[0] + bx[1] + step / 2; k <= bx[2] + bx[3]; k += step) {
    const xa = Math.max(bx[0], k - bx[3]), xb = Math.min(bx[2], k - bx[1]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, k - x];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, 'hatch'));
  HATCH.set(s, [...(HATCH.get(s) ?? []), ...segs]);
  return segs;
}
const hatchAll = (s: Sketch, test: (p: P) => boolean) => (HATCH.get(s) ?? []).every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));
const hatchN = (s: Sketch) => (HATCH.get(s) ?? []).length;
/** Distance from p to a polyline. */
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}

/* ---------- graphs: the book's left and bottom spines ---------- */
type Gr = { x: [number, number]; y: [number, number]; L: number; R: number; B: number; T: number };
const gx = (g: Gr, v: number) => g.L + ((v - g.x[0]) / (g.x[1] - g.x[0])) * (g.R - g.L);
const gy = (g: Gr, v: number) => g.B - ((v - g.y[0]) / (g.y[1] - g.y[0])) * (g.B - g.T);
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [g.x[0] + ((p[0] - g.L) / (g.R - g.L)) * (g.x[1] - g.x[0]), g.y[0] + ((g.B - p[1]) / (g.B - g.T)) * (g.y[1] - g.y[0])];
/** The left and bottom spines, outward ticks and their numbers in slate (`yf` formats a y tick). */
function spines(s: Sketch, g: Gr, o: { xt?: number[]; yt?: number[]; yf?: (v: number) => string; size?: number; ydy?: Record<string, number> } = {}) {
  const size = o.size ?? 11;
  path(s, [[g.L, g.T], [g.L, g.B], [g.R, g.B]], { color: C.ink, w: 1.3, name: 'spine' });
  (o.xt ?? []).forEach((t) => {
    const x = gx(g, t);
    path(s, [[x, g.B], [x, g.B + 4]], { color: C.slate, w: 1.1, name: 'tick' });
    lab(s, x, g.B + 17, fmt(t), { size, color: C.slate });
  });
  (o.yt ?? []).forEach((t) => {
    const y = gy(g, t);
    path(s, [[g.L - 4, y], [g.L, y]], { color: C.slate, w: 1.1, name: 'tick' });
    lab(s, g.L - 8, y + 4 + (o.ydy?.[String(t)] ?? 0), o.yf ? o.yf(t) : fmt(t), { anchor: 'end', size, color: C.slate });
  });
}
const curve = (g: Gr, f: (x: number) => number, a: number, b: number, n = 240): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return gp(g, [x, f(x)]); });

/* ===================================================================== */
/* Figure 8.1 · the sequence as a function machine (Topic 01, p. 678)    */
/* ===================================================================== */
const CAP81 = 'Position in, term out: the sequence as a function machine.';
const fig81: Diagram = {
  id: 'm11-08-fig-8.1',
  topic: 0,
  name: 'The sequence as a function machine',
  cases: [{ chip: 'Function machine', cap: CAP81 }],
  draw() {
    const s = new Sketch(W, 222), sz = 12.5;
    const t1 = `${N} = 1, 2, 3, …`, t2 = `${AN} = 2${N} − 1`, t3 = '1, 3, 5, 7, …';
    const w1 = widthOf(t1, sz) + 16, w2 = widthOf(t2, 14) + 16, w3 = widthOf(t3, sz) + 16, gap = (W - 8 - w1 - w2 - w3) / 2;
    const x1 = 4, x2 = x1 + w1 + gap, x3 = x2 + w2 + gap, y0 = 38, y1 = 88, cy = (y0 + y1) / 2;
    box(s, [x1, y0, x1 + w1, y1], { name: 'input' });
    box(s, [x2, y0, x2 + w2, y1], { w: 2.2, name: 'rule' });
    box(s, [x3, y0, x3 + w3, y1], { name: 'output' });
    lab(s, x1 + w1 / 2, y0 + 20, 'input', { size: 13.5 });
    lab(s, x1 + w1 / 2, y0 + 39, t1, { size: sz });
    lab(s, x2 + w2 / 2, y0 + 20, 'rule', { size: 14.5 });
    lab(s, x2 + w2 / 2, y0 + 39, t2, { size: 14 });
    lab(s, x3 + w3 / 2, y0 + 20, 'output', { size: 13.5 });
    lab(s, x3 + w3 / 2, y0 + 39, t3, { size: sz });
    arr(s, [x1 + w1 + 2, cy], [x2 - 2, cy], { w: 1.8, head: 6 });
    arr(s, [x2 + w2 + 2, cy], [x3 - 2, cy], { w: 1.8, head: 6 });
    lab(s, x1 + w1 / 2, 24, 'position', { size: 13, color: C.slate });
    lab(s, x3 + w3 / 2, 24, `term ${AN}`, { size: 13, color: C.slate });
    const parts: Piece[] = [{ sum: true, bot: `${K} = 1`, top: '4' }, { t: `(2${K} − 1) = 1 + 3 + 5 + 7 = 16` }];
    const sw = runsW(parts, 15), bx0 = W / 2 - sw / 2 - 12, by0 = 122;
    runs(s, W / 2, by0 + 33, parts, { size: 15, anchor: 'middle', color: C.amber });
    box(s, [bx0, by0, W - bx0, by0 + 62], { color: C.slate, w: 1.1, name: 'sum box' });
    arr(s, [x3 + w3 / 2, y1 + 3], [x3 + w3 / 2, by0 - 3], { color: C.slate, w: 1.6, head: 7 });
    lab(s, W / 2 - 8, 206, 'sequence: list the terms.', { anchor: 'end', size: 12.5, color: C.slate });
    lab(s, W / 2 + 8, 206, 'series: add them up.', { anchor: 'start', size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig81.draw(fig81.cases[0]), out: Check[] = [];
    const a = (n: number) => 2 * n - 1;
    out.push(['The rule aₙ = 2n − 1 sends n = 1, 2, 3, 4 to 1, 3, 5, 7, as the output box prints', [1, 2, 3, 4].map(a).join() === '1,3,5,7']);
    out.push(['The series Σ (2k − 1) for k = 1 to 4 is 1 + 3 + 5 + 7 = 16 (= 4², the sum of the first n odd numbers)', [1, 2, 3, 4].reduce((t, k) => t + a(k), 0) === 16]);
    out.push(labelsCheck(s, ['input', 'n = 1, 2, 3, …', 'rule', 'an = 2n − 1', 'output', '1, 3, 5, 7, …', 'position', 'term an', '∑[k = 1..4](2k − 1) = 1 + 3 + 5 + 7 = 16', 'sequence: list the terms.', 'series: add them up.']));
    out.push(noBadChars(s, fig81));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.2 · the AP staircase and its line (Topic 02, p. 685)         */
/* ===================================================================== */
const CAP82 = 'An AP is a staircase of equal risers, and a line of slope <i>d</i>.';
const G82: Gr = { x: [0, 7], y: [420, 835], L: 62, R: 332, B: 214, T: 32 };
const A82 = (n: number) => 500 + 50 * (n - 1);
type Case82 = { chip: string; cap: string; panel: 'stairs' | 'graph' };
const STEP = { x0: 84, w: 54, base: 186, a: 62, d: 24 };
const fig82: Diagram = {
  id: 'm11-08-fig-8.2',
  topic: 1,
  name: 'An AP as a staircase and a line',
  cases: [{ chip: 'Staircase', cap: CAP82, panel: 'stairs' }, { chip: 'Line of slope d', cap: CAP82, panel: 'graph' }] as Case82[],
  draw(c: Case82) {
    if (c.panel === 'stairs') {
      const s = new Sketch(W, 226), { x0, w, base, a, d } = STEP, A = I('a'), D = I('d');
      const names = [A, `${A} + ${D}`, `${A} + 2${D}`, `${A} + 3${D}`];
      for (let i = 0; i < 4; i++) {
        const top = base - a - d * i, xl = x0 + w * i;
        path(s, [[xl, base], [xl, top], [xl + w, top], [xl + w, base]], { w: 1.8, name: `block:${i}` });
        lab(s, xl + w / 2, top - 9, names[i], { size: 14 });
        if (i > 0) {
          const ax = xl + 9;
          arr(s, [ax, top + d - 1], [ax, top + 1], { color: C.mari, w: 1.5, both: true, head: 6, name: `riser:${i}` });
          lab(s, ax + 7, top + d / 2 + 5, D, { anchor: 'start', size: 15, color: C.amber });
          path(s, [[xl, top + d], [xl + 5, top + d]], { color: C.slate, w: 1, name: 'level' });
        }
      }
      path(s, [[x0 - 46, base], [x0 + 4 * w + 30, base]], { w: 2.4, name: 'ground' });
      arr(s, [x0 - 18, base - 2], [x0 - 18, base - a + 2], { color: C.slate, w: 1.2, both: true, head: 6, name: 'height a' });
      lab(s, x0 - 30, base - a / 2 + 5, A, { size: 16, color: C.slate });
      lab(s, x0 + 2 * w, base + 24, 'step number', { size: 13, color: C.slate });
      return s;
    }
    const s = new Sketch(W, 262), g = G82;
    spines(s, g, { xt: [1, 2, 3, 4, 5, 6], yt: [500, 600, 700, 800] });
    lab(s, gx(g, 3.5), g.B + 38, N, { size: 15 });
    lab(s, g.L - 6, 18, `${AN} (Rs)`, { anchor: 'start', size: 13.5 });
    path(s, [gp(g, [0.4, A82(0.4)]), gp(g, [6.6, A82(6.6)])], { w: 2, name: 'line' });
    path(s, [gp(g, [3, 600]), gp(g, [4, 600]), gp(g, [4, 650])], { color: C.mari, w: 1.4, dash: '4 3', name: 'rise' });
    for (let n = 1; n <= 6; n++) pt(s, gp(g, [n, A82(n)]), `n=${n}`);
    lab(s, gx(g, 4) + 7, gy(g, 622) + 5, `${I('d')} = 50`, { anchor: 'start', size: 14, color: C.amber });
    lab(s, gx(g, 1), gy(g, 800) + 5, `${AN} = 500 + 50(${N} − 1)`, { anchor: 'start', size: 13.5 });
    return s;
  },
  check(c: Case82) {
    const s = fig82.draw(c), out: Check[] = [];
    if (c.panel === 'stairs') {
      const tops = [0, 1, 2, 3].map((i) => linesNamed(s, new RegExp(`^block:${i}$`))[0].pts[1][1]);
      const risers = tops.slice(1).map((t, i) => tops[i] - t);
      out.push([`Each step rises by the same d: risers ${risers.map((r) => fmt(r)).join(', ')} px, and the first step stands a = ${STEP.a} px, so step k stands a + (k − 1)d`, risers.every((r) => close(r, STEP.d)) && close(STEP.base - tops[0], STEP.a)]);
      out.push(['The three risers are marked d (k = 2, 3, 4), each arrow spanning exactly one riser', linesNamed(s, /^riser:/).every((l) => close(Math.abs(l.pts[0][1] - l.pts[1][1]), STEP.d - 2))]);
      out.push(labelsCheck(s, ['a', 'a + d', 'a + 2d', 'a + 3d', 'd', 'step number']));
    } else {
      const g = G82, ds = dotsOf(s).map((d) => unPx(g, d.p));
      out.push([`Six dots on aₙ = 500 + 50(n − 1): ${ds.map((p) => `(${fmt(p[0])}, ${fmt(p[1])})`).join(', ')}, i.e. 500, 550, …, 750 Rs`, ds.length === 6 && ds.every((p) => close(p[1], A82(p[0]), 1e-6))]);
      const ln = linesNamed(s, /^line$/)[0].pts.map((p) => unPx(g, p));
      out.push(['The line runs through every dot: slope (rise over run) is d = 50', close((ln[1][1] - ln[0][1]) / (ln[1][0] - ln[0][0]), 50)]);
      const r = linesNamed(s, /^rise$/)[0].pts.map((p) => unPx(g, p));
      out.push([`The dashed rise: one step right (3 to 4), up ${fmt(r[2][1] - r[1][1])} = d = 50`, close(r[1][0] - r[0][0], 1) && close(r[2][1] - r[1][1], 50) && close(r[0][1], A82(3)) && close(r[2][1], A82(4))]);
      out.push(labelsCheck(s, ['an = 500 + 50(n − 1)', 'd = 50', 'an (Rs)', 'n', '500', '800', '1', '6']));
    }
    out.push(noBadChars(s, fig82));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.3 · the chessboard GP (Topic 03, p. 696)                     */
/* ===================================================================== */
const CAP83 = 'The chessboard GP: explosive growth against decay to zero.';
type Case83 = { chip: string; cap: string; panel: 'board' | 'grow' | 'decay' };
const G83G: Gr = { x: [0.5, 6.6], y: [-2.5, 35], L: 50, R: 330, B: 214, T: 34 };
const H83G = 262;
const G83D: Gr = { x: [0.5, 6.6], y: [-0.12, 1.12], L: 50, R: 330, B: 196, T: 30 };
const IN83: Gr = { x: [0.6, 6.4], y: [-0.05, 1.6], L: 92, R: 196, B: 104, T: 52 };
const BOARD = { x0: 34, y0: 42, cell: 34 };
const fig83: Diagram = {
  id: 'm11-08-fig-8.3',
  topic: 2,
  name: 'The chessboard GP',
  cases: [{ chip: 'Chessboard', cap: CAP83, panel: 'board' }, { chip: 'r = 2: explosive', cap: CAP83, panel: 'grow' }, { chip: 'r = 0.8: decay', cap: CAP83, panel: 'decay' }] as Case83[],
  draw(c: Case83) {
    if (c.panel === 'board') {
      const s = new Sketch(W, 352), { x0, y0, cell } = BOARD, side = 8 * cell;
      lab(s, W / 2, 26, `grains per square: ${I('a')} = 1, ${I('r')} = 2`, { size: 14, color: C.slate });
      for (let i = 1; i < 8; i++) {
        path(s, [[x0 + i * cell, y0], [x0 + i * cell, y0 + side]], { color: C.slate, w: 0.6, name: 'grid' });
        path(s, [[x0, y0 + i * cell], [x0 + side, y0 + i * cell]], { color: C.slate, w: 0.6, name: 'grid' });
      }
      path(s, [[x0, y0], [x0 + side, y0], [x0 + side, y0 + side], [x0, y0 + side], [x0, y0]], { w: 2.2, name: 'board' });
      ['1', '2', '4', '8', '16', '…'].forEach((t, i) => labC(s, x0 + (i + 0.5) * cell, y0 + cell / 2, t, { size: 13.5, semibold: t !== '…' }));
      const last: P = [x0 + 7.5 * cell, y0 + 7.5 * cell];
      const l = lab(s, W / 2 - 20, 340, `2<sup>63</sup> on the last square`, { size: 14, color: C.amber });
      arr(s, [l[2] - 14, l[1] - 6], [last[0] - 4, last[1] + 6], { color: C.mari, w: 1.6, head: 7, name: 'to last' });
      return s;
    }
    if (c.panel === 'grow') {
      const s = new Sketch(W, H83G), g = G83G, f = (n: number) => 2 ** (n - 1);
      spines(s, g, { xt: [1, 2, 3, 4, 5, 6], yt: [0, 16, 32] });
      lab(s, gx(g, 3.55), g.B + 36, N, { size: 15 });
      path(s, curve(g, f, 1, 6), { color: C.mari, w: 2.2, name: 'curve' });
      for (let n = 1; n <= 6; n++) pt(s, gp(g, [n, f(n)]), `n=${n}`);
      lab(s, g.R, 20, `${I('r')} = 2:  explosive`, { anchor: 'end', size: 15, color: C.amber });
      const h = IN83, lg = (n: number) => Math.log10(f(n));
      path(s, [[h.L, h.T], [h.L, h.B], [h.R, h.B]], { color: C.ink, w: 1, name: 'inset spine' });
      [[0, '0.0'], [1.5, '1.5']].forEach(([v, t]) => { const y = gy(h, v as number); path(s, [[h.L - 3, y], [h.L, y]], { color: C.slate, w: 0.9, name: 'tick' }); lab(s, h.L - 7.5, y + 3.5, t as string, { anchor: 'end', size: 10, color: C.slate }); });
      [1, 6].forEach((v) => { const x = gx(h, v); path(s, [[x, h.B], [x, h.B + 3]], { color: C.slate, w: 0.9, name: 'tick' }); lab(s, x, h.B + 15, String(v), { size: 10, color: C.slate }); });
      path(s, [1, 2, 3, 4, 5, 6].map((n) => gp(h, [n, lg(n)])), { color: C.ink, w: 1.4, name: 'log line' });
      for (let n = 1; n <= 6; n++) pt(s, gp(h, [n, lg(n)]), `log n=${n}`, C.ink, 2.4);
      lab(s, (h.L + h.R) / 2, h.T - 10, `log ${AN} is linear`, { size: 11.5 });
      return s;
    }
    const s = new Sketch(W, 236), g = G83D, f = (n: number) => 0.8 ** (n - 1);
    spines(s, g, { xt: [1, 2, 3, 4, 5, 6], yt: [0, 0.5, 1], yf: (v) => v.toFixed(1) });
    lab(s, gx(g, 3.55), g.B + 36, N, { size: 15 });
    path(s, [gp(g, [g.x[0], 0]), gp(g, [g.x[1], 0])], { color: C.slate, w: 1.2, dash: '5 4', name: 'asymptote' });
    lab(s, g.R - 4, gy(g, 0) - 9, 'asymptote', { anchor: 'end', size: 13, color: C.slate });
    path(s, curve(g, f, 1, 6), { color: C.ink, w: 2.2, name: 'curve' });
    for (let n = 1; n <= 6; n++) pt(s, gp(g, [n, f(n)]), `n=${n}`);
    lab(s, gx(g, 2.55), gy(g, 0.9), `${I('r')} = 0.8:  decay`, { anchor: 'start', size: 15 });
    return s;
  },
  check(c: Case83) {
    const s = fig83.draw(c), out: Check[] = [];
    if (c.panel === 'board') {
      const top = [1, 2, 3, 4, 5].map((k) => 2 ** (k - 1));
      out.push([`The top row reads ${top.join(', ')}: aₖ = 1 × 2ᵏ⁻¹, a GP with a = 1, r = 2`, top.join() === '1,2,4,8,16']);
      out.push(['The last of the 64 squares holds 2⁶⁴⁻¹ = 2⁶³ grains, and the arrow ends inside it', 64 - 1 === 63 && (() => { const p = linesNamed(s, /^to last$/)[0].pts[1], { x0, y0, cell } = BOARD; return p[0] > x0 + 7 * cell && p[1] > y0 + 7 * cell; })()]);
      out.push(labelsCheck(s, ['grains per square: a = 1, r = 2', '1', '2', '4', '8', '16', '…', '263 on the last square']));
    } else if (c.panel === 'grow') {
      const g = G83G, ds = dotsOf(s).filter((d) => d.name.startsWith('n=')).map((d) => unPx(g, d.p));
      out.push([`The dots read ${ds.map((p) => fmt(p[1])).join(', ')}: 2ⁿ⁻¹ for n = 1 … 6, the sixth at 32`, ds.length === 6 && ds.every((p, i) => close(p[1], 2 ** i))]);
      const lg = dotsOf(s).filter((d) => d.name.startsWith('log')).map((d) => unPx(IN83, d.p));
      const steps = lg.slice(1).map((p, i) => p[1] - lg[i][1]);
      out.push([`The inset: log aₙ rises by the same log 2 = ${fmt(Math.log10(2), 3)} each step (a straight line), from 0 to ${fmt(lg[5][1], 3)}`, steps.every((d) => close(d, Math.log10(2)))]);
      out.push(labelsCheck(s, ['r = 2:  explosive', 'log an is linear', '0', '16', '32', '0.0', '1.5', 'n']));
    } else {
      const g = G83D, ds = dotsOf(s).map((d) => unPx(g, d.p));
      out.push([`The dots read ${ds.map((p) => fmt(p[1], 3)).join(', ')}: 0.8ⁿ⁻¹, falling towards the dashed asymptote 0 but never reaching it`, ds.length === 6 && ds.every((p, i) => close(p[1], 0.8 ** i)) && ds.every((p) => p[1] > 0)]);
      out.push(labelsCheck(s, ['r = 0.8:  decay', 'asymptote', '0.0', '0.5', '1.0', 'n']));
    }
    out.push(noBadChars(s, fig83));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.4 · the round trip and the HM (Topic 04, p. 707)             */
/* ===================================================================== */
const CAP84 = 'The round trip: the honest average is the HM 48, not 50.';
type Case84 = { chip: string; cap: string; panel: 'trip' | 'flip' };
const fig84: Diagram = {
  id: 'm11-08-fig-8.4',
  topic: 3,
  name: 'The round trip and the HM',
  cases: [{ chip: 'The round trip', cap: CAP84, panel: 'trip' }, { chip: 'HP to AP', cap: CAP84, panel: 'flip' }] as Case84[],
  draw(c: Case84) {
    if (c.panel === 'trip') {
      const s = new Sketch(W, 310), xa = 66, xb = 274;
      lab(s, W / 2, 22, 'out at 40 km/h', { size: 14, color: C.amber });
      path(s, [[xa, 32], [xa, 104]], { w: 2.2, name: 'town A' });
      path(s, [[xb, 32], [xb, 104]], { w: 2.2, name: 'town B' });
      box(s, [xa + 1, 36, xb - 1, 58], { color: C.slate, w: 0.8, rx: 0, name: 'lane out' });
      box(s, [xa + 1, 78, xb - 1, 100], { color: C.slate, w: 0.8, rx: 0, name: 'lane back' });
      arr(s, [xa + 12, 47], [xb - 12, 47], { color: C.mari, w: 2.4, head: 9, name: 'out' });
      arr(s, [xb - 12, 89], [xa + 12, 89], { w: 2.4, head: 9, name: 'back' });
      lab(s, xa - 8, 73, 'town A', { anchor: 'end', size: 13.5 });
      lab(s, xb + 8, 73, 'town B', { anchor: 'start', size: 13.5 });
      lab(s, W / 2, 124, 'back at 60 km/h', { size: 14 });
      arr(s, [xa + 4, 138], [xb - 4, 138], { color: C.slate, w: 1.2, both: true, head: 6, name: 'distance' });
      lab(s, W / 2, 158, 'the same distance each way', { size: 13, color: C.slate });
      box(s, [12, 170, W - 12, 302], { w: 1.6, rx: 6, name: 'result box' });
      lab(s, W / 2, 192, 'round-trip average speed', { size: 13.5 });
      runs(s, W / 2, 226, [{ t: `= ${I('H')} = ` }, { num: '2(40)(60)', den: '40 + 60' }, { t: ' = 48 km/h' }], { size: 13.5, anchor: 'middle' });
      runs(s, W / 2, 264, [{ t: 'the arithmetic mean ' }, { num: '40 + 60', den: '2' }, { t: ' = 50' }], { size: 12.5, anchor: 'middle', color: C.slate });
      lab(s, W / 2, 288, 'is the wrong average', { size: 12.5, color: C.slate });
      return s;
    }
    const s = new Sketch(W, 262), bw = 56, gap = 12, x0 = W / 2 - (3 * bw + 2 * gap) / 2;
    const cx = (i: number) => x0 + i * (bw + gap) + bw / 2;
    lab(s, W / 2, 20, 'in HP', { size: 14 });
    ['40', '48', '60'].forEach((t, i) => { box(s, [cx(i) - bw / 2, 30, cx(i) + bw / 2, 62], { w: 1.6, name: `hp:${t}` }); labC(s, cx(i), 46, t, { size: 16 }); });
    lab(s, W / 2, 84, 'no constant gap, no constant ratio', { size: 13, color: C.slate });
    arr(s, [W / 2, 94], [W / 2, 120], { w: 1.8, head: 7, name: 'flip' });
    lab(s, W / 2 + 10, 112, 'flip', { anchor: 'start', size: 13.5 });
    lab(s, W / 2, 142, 'in AP', { size: 14, color: C.amber });
    ['40', '48', '60'].forEach((d, i) => { box(s, [cx(i) - bw / 2, 151, cx(i) + bw / 2, 192], { color: C.mari, w: 1.6, name: `ap:${d}` }); runs(s, cx(i), 175, [{ num: '1', den: d }], { size: 13, anchor: 'middle' }); });
    arr(s, [cx(0) + 6, 202], [cx(1) - 6, 202], { color: C.mari, w: 1.3, both: true, head: 6, name: 'gap 1' });
    arr(s, [cx(1) + 6, 202], [cx(2) - 6, 202], { color: C.mari, w: 1.3, both: true, head: 6, name: 'gap 2' });
    runs(s, W / 2, 236, [{ t: 'constant gap −' }, { num: '1', den: '240' }], { size: 13.5, anchor: 'middle', color: C.amber });
    return s;
  },
  check(c: Case84) {
    const s = fig84.draw(c), out: Check[] = [];
    const H = (2 * 40 * 60) / (40 + 60), A = (40 + 60) / 2;
    if (c.panel === 'trip') {
      out.push([`H = 2(40)(60)/(40 + 60) = ${fmt(H)} km/h; check by distance 240 km each way: 480 km in 6 + 4 = 10 h is 48 km/h; the AM is ${fmt(A)}`, H === 48 && A === 50 && 480 / (240 / 40 + 240 / 60) === 48]);
      out.push(stackedCheck(s, ['2(40)(60)/40 + 60', '40 + 60/2']));
      out.push(labelsCheck(s, ['out at 40 km/h', 'back at 60 km/h', 'town A', 'town B', 'the same distance each way', 'round-trip average speed', 'is the wrong average']));
    } else {
      const g1 = 1 / 48 - 1 / 40, g2 = 1 / 60 - 1 / 48;
      out.push([`The reciprocals 1/40, 1/48, 1/60 step by ${fmt(g1, 6)} and ${fmt(g2, 6)}: both −1/240, an AP; 40, 48, 60 step by 8 and 12 and by ratios 1.2 and 1.25, neither constant`, close(g1, -1 / 240, 1e-12) && close(g2, -1 / 240, 1e-12) && 48 - 40 !== 60 - 48 && 48 / 40 !== 60 / 48]);
      out.push(stackedCheck(s, ['1/40', '1/48', '1/60', '1/240']));
      out.push(labelsCheck(s, ['in HP', 'in AP', '40', '48', '60', 'flip', 'no constant gap, no constant ratio', 'constant gap −1/240']));
    }
    out.push(noBadChars(s, fig84));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.5 · H < G < A for a = 4, b = 16 (Topic 05, p. 714)           */
/* ===================================================================== */
const CAP85 = 'For <i>a</i> = 4 and <i>b</i> = 16, the means order as 6.4 < 8 < 10.';
const NL85 = { x0: 14, ux: 17.8, from: 1.4, y: 122 };
const nx85 = (v: number) => NL85.x0 + (v - NL85.from) * NL85.ux;
const fig85: Diagram = {
  id: 'm11-08-fig-8.5',
  topic: 4,
  name: 'The three means for a = 4, b = 16',
  cases: [{ chip: 'a = 4, b = 16', cap: CAP85 }],
  draw() {
    const s = new Sketch(W, 222), y = NL85.y;
    lab(s, W / 2, 22, `${I('H')} < ${I('G')} < ${I('A')},  strictly between ${I('a')} and ${I('b')}`, { size: 14 });
    arr(s, [nx85(1.4), y], [nx85(18.8), y], { w: 1.5, head: 9, name: 'axis' });
    for (let v = 2; v <= 18; v += 2) if (v !== 4 && v !== 16) path(s, [[nx85(v), y - 4], [nx85(v), y + 4]], { color: C.slate, w: 0.9, name: `tick:${v}` });
    [4, 16].forEach((v) => path(s, [[nx85(v), y - 10], [nx85(v), y + 10]], { w: 2.2, name: `end:${v}` }));
    lab(s, nx85(4), y + 30, `${I('a')} = 4`, { size: 15 });
    lab(s, nx85(16), y + 30, `${I('b')} = 16`, { size: 15 });
    const means: [string, number, string][] = [['H', 6.4, C.ink], ['G', 8, C.mari], ['A', 10, C.ink]];
    means.forEach(([m, v, col]) => {
      const x = nx85(v), tc = col === C.mari ? C.amber : C.text;
      path(s, [[x, y - 6], [x, y - 40]], { color: col, w: 2.2, name: `stem:${m}` });
      pt(s, [x, y], m, col);
      lab(s, x, y - 50, I(m), { size: 18, color: tc });
      lab(s, x, y - 72, fmt(v), { size: 13, color: tc });
    });
    lab(s, W / 2, y + 58, `${I('AH')} = 10 × 6.4 = 64 = 8<sup>2</sup> = ${I('G')}<sup>2</sup>`, { size: 14, color: C.slate });
    arr(s, [nx85(6.4), y + 74], [nx85(10), y + 74], { color: C.slate, w: 1.2, both: true, head: 6, name: 'spread' });
    lab(s, W / 2, y + 96, `this spread closes to a single point when ${I('a')} = ${I('b')}`, { size: 12.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig85.draw(fig85.cases[0]), out: Check[] = [], a = 4, b = 16;
    const A = (a + b) / 2, G = Math.sqrt(a * b), H = (2 * a * b) / (a + b);
    out.push([`A = (4 + 16)/2 = ${fmt(A)}, G = √64 = ${fmt(G)}, H = 2(4)(16)/20 = ${fmt(H)}; AH = ${fmt(A * H)} = G²`, A === 10 && G === 8 && close(H, 6.4) && close(A * H, G * G)]);
    const at = (m: string) => (dotAt(s, m)![0] - NL85.x0) / NL85.ux + NL85.from;
    out.push([`On the line: H at ${fmt(at('H'))}, G at ${fmt(at('G'))}, A at ${fmt(at('A'))}, in order and strictly between a = 4 and b = 16`, close(at('H'), H) && close(at('G'), G) && close(at('A'), A) && a < at('H') && at('H') < at('G') && at('G') < at('A') && at('A') < b]);
    out.push(labelsCheck(s, ['H < G < A,  strictly between a and b', 'a = 4', 'b = 16', 'H', 'G', 'A', '6.4', '8', '10', 'AH = 10 × 6.4 = 64 = 82 = G2', 'this spread closes to a single point when a = b']));
    out.push(noBadChars(s, fig85));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.6 · an AGP is an AP times a GP (Topic 06, p. 721)            */
/* ===================================================================== */
const CAP86 = 'An AGP is an AP times a GP, term by term.';
const B86 = { x0: 46, w: 64, gap: 4, h: 32, rows: [18, 82, 148] };
const fig86: Diagram = {
  id: 'm11-08-fig-8.6',
  topic: 5,
  name: 'An AGP, term by term',
  cases: [{ chip: 'AP × GP', cap: CAP86 }],
  draw() {
    const s = new Sketch(W, 306), { x0, w, gap, h, rows } = B86, A = I('a'), D = I('d'), R = I('r');
    const cx = (i: number) => x0 + i * (w + gap) + w / 2;
    const rowsT: [string, string[], string, string][] = [
      ['AP', [A, `${A} + ${D}`, `${A} + 2${D}`, `${A} + 3${D}`], C.ink, C.text],
      ['GP', ['1', R, `${R}<sup>2</sup>`, `${R}<sup>3</sup>`], C.ink, C.text],
      ['AGP', [A, `(${A}+${D})${R}`, `(${A}+2${D})${R}<sup>2</sup>`, `(${A}+3${D})${R}<sup>3</sup>`], C.mari, C.amber],
    ];
    rowsT.forEach(([name, terms, col, tc], j) => {
      const y = rows[j];
      lab(s, 24, y + h / 2 + 5, name, { size: 14.5, color: tc });
      terms.forEach((t, i) => { box(s, [cx(i) - w / 2, y, cx(i) + w / 2, y + h], { color: col, w: 1.6, name: `${name}:${i}` }); labC(s, cx(i), y + h / 2, t, { size: 13.5 }); });
      lab(s, x0 + 4 * (w + gap) + 4, y + h / 2 + 4, '⋯', { anchor: 'start', size: 15, color: C.slate });
    });
    for (let i = 0; i < 4; i++) {
      lab(s, cx(i), (rows[0] + h + rows[1]) / 2 + 5, '×', { size: 15, color: C.slate });
      arr(s, [cx(i), rows[1] + h + 4], [cx(i), rows[2] - 4], { color: C.slate, w: 1.3, head: 6, name: 'times' });
    }
    const by = rows[2] + h + 8, xl = x0, xr = x0 + 4 * w + 3 * gap;
    path(s, [[xl, by], [xl, by + 8], [xr, by + 8], [xr, by]], { color: C.slate, w: 1.4, name: 'brace' });
    path(s, [[(xl + xr) / 2, by + 8], [(xl + xr) / 2, by + 14]], { color: C.slate, w: 1.4, name: 'brace' });
    lab(s, (xl + xr) / 2, by + 34, `${sb(I('S'), N)}: sum by multiply-by-${R} and subtract`, { size: 13.5, color: C.slate });
    runs(s, W / 2, 252, [{ t: `The second worked example: ${A} = 1, ${D} = 1, ${R} = ` }, { num: '1', den: '3' }], { size: 13, anchor: 'middle' });
    runs(s, W / 2, 290, [{ t: 'gives  1 + ' }, { num: '2', den: '3' }, { t: ' + ' }, { num: '3', den: '3<sup>2</sup>' }, { t: ' + ' }, { num: '4', den: '3<sup>3</sup>' }, { t: ' + ⋯ = ' }, { num: '9', den: '4' }], { size: 13, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig86.draw(fig86.cases[0]), out: Check[] = [];
    const a = 1, d = 1, r = 1 / 3;
    let sum = 0;
    for (let k = 0; k < 200; k++) sum += (a + k * d) * r ** k;
    const closed = a / (1 - r) + (d * r) / (1 - r) ** 2;
    out.push([`Term k of the AGP is (a + (k − 1)d)·rᵏ⁻¹, the AP term times the GP term; with a = 1, d = 1, r = 1/3 the terms are 1, 2/3, 3/3², 4/3³, … and the sum to infinity is a/(1 − r) + dr/(1 − r)² = 3/2 + 3/4 = ${fmt(closed, 6)} (partial sums reach ${fmt(sum, 6)})`, close(closed, 9 / 4) && close(sum, 9 / 4, 1e-9)]);
    out.push(stackedCheck(s, ['1/3', '2/3', '3/32', '4/33', '9/4']));
    out.push(labelsCheck(s, ['AP', 'GP', 'AGP', 'a', 'a + d', 'a + 2d', 'a + 3d', '1', 'r', 'r2', 'r3', '(a+d)r', '(a+2d)r2', '(a+3d)r3', 'Sn: sum by multiply-by-r and subtract']));
    out.push(noBadChars(s, fig86));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.7 · the cube identity telescopes (Topic 07, p. 728)          */
/* ===================================================================== */
const CAP87 = 'The cube identity telescopes; the sum of cubes is a square.';
type Case87 = { chip: string; cap: string; panel: 'telescope' | 'square' };
const SQ87 = { x0: 62, y0: 46, cell: 36 };
const cube = (b: string) => `${b}<sup>3</sup>`;
const fig87: Diagram = {
  id: 'm11-08-fig-8.7',
  topic: 6,
  name: 'The cube identity and the sum of cubes',
  cases: [{ chip: 'The identity telescopes', cap: CAP87, panel: 'telescope' }, { chip: 'The sum of cubes', cap: CAP87, panel: 'square' }] as Case87[],
  draw(c: Case87) {
    if (c.panel === 'telescope') {
      const s = new Sketch(W, 330), sz = 15, x = 24, xr = 150;
      lab(s, 14, 24, 'every interior cube cancels in a pair', { anchor: 'start', size: 14.5, color: C.amber });
      const rows: { y: number; a: string; b: string; rhs: string; strike: [boolean, boolean] }[] = [
        { y: 60, a: cube('1'), b: cube('0'), rhs: '= 3(1)<sup>2</sup> − 3(1) + 1', strike: [true, false] },
        { y: 102, a: cube('2'), b: cube('1'), rhs: '= 3(2)<sup>2</sup> − 3(2) + 1', strike: [true, true] },
        { y: 144, a: cube('3'), b: cube('2'), rhs: '= 3(3)<sup>2</sup> − 3(3) + 1', strike: [false, true] },
        { y: 214, a: cube(N), b: `(${N} − 1)<sup>3</sup>`, rhs: `= 3${N}<sup>2</sup> − 3${N} + 1`, strike: [false, false] },
      ];
      const spans: [number, number][][] = [];
      rows.forEach((r) => {
        lab(s, x, r.y, `${r.a} − ${r.b}`, { anchor: 'start', size: sz });
        lab(s, xr, r.y, r.rhs, { anchor: 'start', size: sz, color: C.slate });
        const a0 = x, a1 = x + stixW(r.a, sz), b0 = x + stixW(`${r.a} − `, sz), b1 = b0 + stixW(r.b, sz);
        spans.push([[a0, a1], [b0, b1]]);
        [[a0, a1], [b0, b1]].forEach(([u, v], k) => { if (r.strike[k]) path(s, [[u - 2, r.y + 3], [v + 2, r.y - sz * 0.78]], { color: C.mari, w: 1.5, free: true }); });
      });
      // each struck first term pairs with the struck second term of the next line
      [0, 1].forEach((k) => {
        const [a0, a1] = spans[k][0], [b0, b1] = spans[k + 1][1], ya = rows[k].y + 7, yb = rows[k + 1].y - sz * 0.95;
        const pa: P = [(a0 + a1) / 2 + 3, ya], pb: P = [(b0 + b1) / 2 - 1, yb];
        path(s, quad(pa, [(pa[0] + pb[0]) / 2 + 12, (ya + yb) / 2 - 4], pb), { color: C.mari, w: 1.3, dash: '3 2.5', free: true });
      });
      vdots(s, x + 8, 180);
      vdots(s, xr + 60, 180, C.slate);
      path(s, [[14, 236], [300, 236]], { color: C.slate, w: 1, name: 'rule' });
      lab(s, 14, 268, 'add:', { anchor: 'start', size: 14, color: C.slate });
      lab(s, 50, 268, `${cube(N)} = 3∑${K}<sup>2</sup> − 3∑${K} + ${N}`, { anchor: 'start', size: 16 });
      runs(s, 50, 306, [{ t: `⇒  ∑${K}<sup>2</sup> = ` }, { num: `${N}(${N} + 1)(2${N} + 1)`, den: '6' }], { size: 15 });
      return s;
    }
    const s = new Sketch(W, 312), { x0, y0, cell } = SQ87, side = 6 * cell, bot = y0 + side;
    lab(s, W / 2, 28, '1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> = 36 = 6<sup>2</sup>', { size: 16 });
    for (let i = 1; i < 6; i++) {
      path(s, [[x0 + i * cell, y0], [x0 + i * cell, bot]], { color: C.slate, w: 0.6, name: 'grid' });
      path(s, [[x0, y0 + i * cell], [x0 + side, y0 + i * cell]], { color: C.slate, w: 0.6, name: 'grid' });
    }
    path(s, [[x0, y0], [x0 + side, y0], [x0 + side, bot], [x0, bot], [x0, y0]], { w: 2.4, name: 'square 6' });
    path(s, [[x0, bot - 3 * cell], [x0 + 3 * cell, bot - 3 * cell], [x0 + 3 * cell, bot]], { w: 2, name: 'square 3' });
    path(s, [[x0, bot - cell], [x0 + cell, bot - cell], [x0 + cell, bot]], { w: 2, name: 'square 1' });
    labC(s, x0 + 4.5 * cell, y0 + 1.5 * cell, '3<sup>3</sup>', { size: 18 });
    labC(s, x0 + 1.5 * cell, bot - 2.5 * cell, '2<sup>3</sup>', { size: 16 });
    labC(s, x0 + 0.5 * cell, bot - 0.5 * cell, '1<sup>3</sup>', { size: 13 });
    arr(s, [x0 + 2, bot + 16], [x0 + side - 2, bot + 16], { color: C.slate, w: 1.2, both: true, head: 6, name: 'width' });
    lab(s, x0 + side / 2, bot + 40, '1 + 2 + 3 = 6', { size: 15, color: C.slate });
    return s;
  },
  check(c: Case87) {
    const s = fig87.draw(c), out: Check[] = [];
    if (c.panel === 'telescope') {
      const ok = [1, 2, 3, 7, 20].every((k) => k ** 3 - (k - 1) ** 3 === 3 * k * k - 3 * k + 1);
      const n = 10, sk2 = (n * (n + 1) * (2 * n + 1)) / 6, sk = (n * (n + 1)) / 2;
      let direct = 0;
      for (let k = 1; k <= n; k++) direct += k * k;
      out.push(['Each line k³ − (k − 1)³ = 3k² − 3k + 1 holds (k = 1, 2, 3, 7, 20)', ok]);
      out.push([`Adding lines 1 to n, the interior cubes cancel: n³ = 3∑k² − 3∑k + n; at n = 10: 1000 = 3(${sk2}) − 3(${sk}) + 10, and ∑k² = n(n + 1)(2n + 1)/6 = ${sk2} = ${direct} directly`, n ** 3 === 3 * sk2 - 3 * sk + n && sk2 === direct]);
      out.push(stackedCheck(s, ['n(n + 1)(2n + 1)/6']));
      out.push(labelsCheck(s, ['every interior cube cancels in a pair', '13 − 03', '23 − 13', '33 − 23', 'n3 − (n − 1)3', '= 3(1)2 − 3(1) + 1', '= 3n2 − 3n + 1', 'add:', 'n3 = 3∑k2 − 3∑k + n']));
    } else {
      const cells = (k: number) => k * k, r1c = cells(1), r2c = cells(3) - cells(1), r3c = cells(6) - cells(3);
      out.push([`The regions hold ${r1c}, ${r2c} and ${r3c} unit squares = 1³, 2³, 3³; together ${r1c + r2c + r3c} = 6², the side 1 + 2 + 3 = 6`, r1c === 1 && r2c === 8 && r3c === 27 && r1c + r2c + r3c === 36 && 1 + 2 + 3 === 6]);
      out.push(labelsCheck(s, ['13 + 23 + 33 = 36 = 62', '33', '23', '13', '1 + 2 + 3 = 6']));
    }
    out.push(noBadChars(s, fig87));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.8 · the telescoping collapse (Topic 08, p. 736)              */
/* ===================================================================== */
const CAP88 = 'Only the first and last terms survive the collapse.';
const T88 = { x0: 52, w: 44, gap: 4, h: 38, y0: 66, pitch: 44 };
const fig88: Diagram = {
  id: 'm11-08-fig-8.8',
  topic: 7,
  name: 'Telescoping: only the ends survive',
  cases: [{ chip: 'r = 1 to 5', cap: CAP88 }],
  draw() {
    const s = new Sketch(W, 400), { x0, w, gap, h, y0, pitch } = T88, R = I('r'), V = I('V');
    const bx = (col: number): [number, number] => [x0 + (col - 1) * (w + gap), x0 + (col - 1) * (w + gap) + w];
    const top = (row: number) => y0 + (row - 1) * pitch;
    runs(s, 10, 36, [{ t: `${sb(I('t'), R)} = ` }, { num: '1', den: `${R}(${R} + 1)` }, { t: ` = ${sb(V, R)} − ${sb(V, `${R} + 1`)},   ${sb(V, R)} = ` }, { num: '1', den: R }], { size: 15 });
    const survivors: Rect[] = [];
    for (let r = 1; r <= 5; r++) {
      const y = top(r), cy = y + h / 2;
      lab(s, 8, cy + 5, `${R} = ${r}`, { anchor: 'start', size: 13, color: C.slate });
      [[r, '+', r], [r + 1, '−', r + 1]].forEach(([col, sign, k]) => {
        const [a, b] = bx(col as number), first = r === 1 && sign === '+', last = r === 5 && sign === '−', keepIt = first || last;
        box(s, [a, y, b, y + h], { color: C.ink, w: keepIt ? 2.6 : 1.3, name: keepIt ? 'survivor' : `term:${r}:${sign}` });
        const rr = first ? lab(s, (a + b) / 2, cy + 5, '+1', { size: 14 }) : runs(s, (a + b) / 2, cy + 4, [{ t: sign as string }, { num: '1', den: String(k) }], { size: 12.5, anchor: 'middle' });
        if (keepIt) survivors.push([a, y, b, y + h]);
        else path(s, [[rr[0] - 3, rr[3] - 2], [rr[2] + 3, rr[1] + 3]], { color: C.ink, w: 1.1, free: true });
      });
      if (r < 5) {
        const [a, b] = bx(r + 1);
        path(s, [[(a + b) / 2, y + h + 1], [(a + b) / 2, top(r + 1) - 1]], { color: C.slate, w: 1.4, dash: '2 2.5', name: 'link' });
      }
    }
    lab(s, x0, top(5) + 22, 'only the shaded ends survive', { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, 10, top(5) + h + 24, `each −${sb(V, K)} is cancelled by the +${sb(V, K)} directly below it`, { anchor: 'start', size: 12.5 });
    survivors.forEach((q) => hatch(s, (p) => p[0] > q[0] + 3 && p[0] < q[2] - 3 && p[1] > q[1] + 3 && p[1] < q[3] - 3, q, { step: 5, gap: 4.5 }));
    const ry = top(5) + h + 40;
    path(s, [[14, ry], [W - 14, ry]], { color: C.slate, w: 1, name: 'rule' });
    runs(s, 14, ry + 44, [{ sum: true, bot: `${R} = 1`, top: '5' }, { num: '1', den: `${R}(${R} + 1)` }, { t: ` = ${sb(V, '1')} − ${sb(V, '6')} = 1 − ` }, { num: '1', den: '6' }, { t: ' = ' }, { num: '5', den: '6' }], { size: 15 });
    return s;
  },
  check() {
    const s = fig88.draw(fig88.cases[0]), out: Check[] = [];
    let sum = 0;
    for (let r = 1; r <= 5; r++) sum += 1 / (r * (r + 1));
    out.push([`Each term 1/(r(r + 1)) = 1/r − 1/(r + 1) (r = 1 … 5), and the sum is ${fmt(sum, 6)} = 1 − 1/6 = 5/6`, [1, 2, 3, 4, 5].every((r) => close(1 / (r * (r + 1)), 1 / r - 1 / (r + 1))) && close(sum, 5 / 6) && close(1 - 1 / 6, 5 / 6)]);
    out.push(['Row r holds +1/r over column r and −1/(r + 1) over column r + 1, so each −1/k sits straight above the +1/k that cancels it: 4 dotted links, 8 struck terms, 2 survivors (+1 and −1/6)', linesNamed(s, /^link$/).length === 4 && linesNamed(s, /^term:/).length === 8 && linesNamed(s, /^survivor$/).length === 2]);
    out.push([`The two survivors hatched (${hatchN(s)} strokes), each stroke inside one of them`, hatchN(s) > 6 && hatchAll(s, (p) => linesNamed(s, /^survivor$/).some((l) => p[0] > l.pts[0][0] && p[0] < l.pts[1][0] && p[1] > l.pts[0][1] && p[1] < l.pts[2][1]))]);
    out.push(stackedCheck(s, ['1/r(r + 1)', '1/r', '1/2', '1/2', '1/3', '1/3', '1/4', '1/4', '1/5', '1/5', '1/6', '1/r(r + 1)', '1/6', '5/6']));
    out.push(labelsCheck(s, ['r = 1', 'r = 5', '+1', '−1/6', 'each −Vk is cancelled by the +Vk directly below it', 'only the shaded ends survive']));
    out.push(noBadChars(s, fig88));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.9 · outside-in pairs (Topic 09, p. 744)                      */
/* ===================================================================== */
const CAP89 = 'Outside-in pairs: sums in an AP, products in a GP.';
const B89 = { x0: 38, w: 46, gap: 4, h: 40 };
const fig89: Diagram = {
  id: 'm11-08-fig-8.9',
  topic: 8,
  name: 'Outside-in pairs',
  cases: [{ chip: 'AP and GP', cap: CAP89 }],
  draw() {
    const s = new Sketch(W, 348), { x0, w, gap, h } = B89, A = I('a'), D = I('d'), L = I('l'), R = I('r');
    const cx = (i: number) => x0 + i * (w + gap) + w / 2;
    const ya = 78, yg = 238;
    lab(s, W / 2, 22, `every outside-in pair:  sum = ${A} + ${L}`, { size: 13.5 });
    lab(s, 18, ya + h / 2 + 5, 'AP', { size: 14.5 });
    [A, `${A} + ${D}`, '⋯', '⋯', `${L} − ${D}`, L].forEach((t, i) => { box(s, [cx(i) - w / 2, ya, cx(i) + w / 2, ya + h], { w: 1.6, name: `ap:${i}` }); labC(s, cx(i), ya + h / 2, t, { size: 14 }); });
    path(s, quad([cx(0), ya - 2], [(cx(0) + cx(5)) / 2, ya - 80], [cx(5), ya - 2]), { w: 1.5, name: 'arc' });
    path(s, quad([cx(1), ya - 2], [(cx(1) + cx(4)) / 2, ya - 46], [cx(4), ya - 2]), { w: 1.5, name: 'arc' });
    box(s, [10, 132, W - 10, 222], { w: 1.2, rx: 6, name: 'panel' });
    runs(s, W / 2, 158, [{ t: 'AP: pairs share a sum  ⇒  ' }, { t: `${sb(I('S'), I('n'))} = ` }, { num: I('n'), den: '2' }, { t: `(${A} + ${L})` }], { size: 13, anchor: 'middle' });
    lab(s, W / 2, 186, `GP: pairs share a product  ⇒  ${I('P')} = (${I('al')})<sup>${I('n')}/2</sup>`, { size: 13 });
    lab(s, W / 2, 208, `e.g. GP 2, 4, 8, 16:  ${I('al')} = 32,  ${I('P')} = 32<sup>2</sup> = 1024`, { size: 12.5, color: C.slate });
    lab(s, 18, yg + h / 2 + 5, 'GP', { size: 14.5, color: C.amber });
    [A, `${A}${R}`, '⋯', '⋯', 'frac', L].forEach((t, i) => {
      box(s, [cx(i) - w / 2, yg, cx(i) + w / 2, yg + h], { color: C.mari, w: 1.6, name: `gp:${i}` });
      if (t === 'frac') runs(s, cx(i), yg + h / 2 + 4, [{ num: L, den: R }], { size: 13.5, anchor: 'middle' });
      else labC(s, cx(i), yg + h / 2, t, { size: 14 });
    });
    path(s, quad([cx(0), yg + h + 2], [(cx(0) + cx(5)) / 2, yg + h + 80], [cx(5), yg + h + 2]), { color: C.mari, w: 1.5, name: 'arc' });
    path(s, quad([cx(1), yg + h + 2], [(cx(1) + cx(4)) / 2, yg + h + 46], [cx(4), yg + h + 2]), { color: C.mari, w: 1.5, name: 'arc' });
    lab(s, W / 2, 338, `every outside-in pair:  product = ${I('al')}`, { size: 13.5, color: C.amber });
    return s;
  },
  check() {
    const s = fig89.draw(fig89.cases[0]), out: Check[] = [];
    const ap = [3, 7, 11, 15, 19, 23], gp = [2, 4, 8, 16];
    out.push(['AP 3, 7, …, 23: outside-in pairs 3 + 23 = 7 + 19 = 11 + 15 = a + l; Sₙ = (n/2)(a + l) = 3 × 26 = 78', ap[0] + ap[5] === ap[1] + ap[4] && ap[1] + ap[4] === ap[2] + ap[3] && ap.reduce((a, b) => a + b) === (6 / 2) * (3 + 23)]);
    out.push(['GP 2, 4, 8, 16: pairs 2 × 16 = 4 × 8 = al = 32, and P = (al)^(n/2) = 32² = 1024 = 2 · 4 · 8 · 16', gp[0] * gp[3] === 32 && gp[1] * gp[2] === 32 && 32 ** (4 / 2) === 1024 && gp.reduce((a, b) => a * b) === 1024]);
    out.push(['Each arc joins a pair the same distance in from the two ends (1st with 6th, 2nd with 5th)', linesNamed(s, /^arc$/).every((l) => close(l.pts[0][0] - B89.x0 - B89.w / 2 + l.pts[l.pts.length - 1][0] - B89.x0 - B89.w / 2, 5 * (B89.w + B89.gap)))]);
    out.push(stackedCheck(s, ['n/2', 'l/r']));
    out.push(labelsCheck(s, ['every outside-in pair:  sum = a + l', 'every outside-in pair:  product = al', 'AP', 'GP', 'a', 'a + d', 'l − d', 'l', 'ar', '⋯', 'GP: pairs share a product  ⇒  P = (al)n/2', 'e.g. GP 2, 4, 8, 16:  al = 32,  P = 322 = 1024']));
    out.push(noBadChars(s, fig89));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.10 · simple against compound interest (Topic 09, p. 746)     */
/* ===================================================================== */
const CAP810 = 'Simple interest is a line; compound interest curves away.';
const P810 = 15625;
const F810 = { comp: (n: number) => P810 * 1.08 ** n, simp: (n: number) => P810 * (1 + (8 * n) / 100), dep: (n: number) => P810 * 0.8 ** n };
const G810: Gr = { x: [-0.7, 11.1], y: [-3000, 39000], L: 58, R: 332, B: 316, T: 24 };
/** The baselines of the simple and the depreciation names, each set close to its own curve. */
const SY810 = 168, DY810 = 231;
const fig810: Diagram = {
  id: 'm11-08-fig-8.10',
  topic: 8,
  name: 'Simple against compound interest',
  cases: [{ chip: 'P = Rs 15,625', cap: CAP810 }],
  draw() {
    const s = new Sketch(W, 362), g = G810, Pp = I('P'), Rr = I('R');
    spines(s, g, { xt: [0, 2, 4, 6, 8, 10], yt: [0, 5000, 10000, 15625, 20000, 25000, 30000, 35000], yf: thou, size: 10.5 });
    lab(s, 6, 14, 'value (Rs)', { anchor: 'start', size: 13 });
    lab(s, gx(g, 5), g.B + 40, `time ${N} (years)`, { size: 13.5 });
    path(s, [gp(g, [g.x[0], 0]), gp(g, [g.x[1], 0])], { color: C.slate, w: 1.1, dash: '5 4', name: 'zero' });
    const cols: [keyof typeof F810, string][] = [['dep', C.ink], ['simp', C.ink], ['comp', C.mari]];
    cols.forEach(([k, col]) => {
      path(s, curve(g, F810[k], 0, 10, 200), { color: col, w: 2.1, name: k });
      for (let n = 1; n <= 10; n++) pt(s, gp(g, [n, F810[k](n)]), `${k}:${n}`, col, 2.5);
    });
    pt(s, gp(g, [0, P810]), 'P', C.ink, 4.6);
    lab(s, gx(g, 0) - 4, gy(g, P810) - 13, Pp, { size: 15 });
    // the gap at n = 10
    const a10 = gp(g, [10, F810.simp(10)]), c10 = gp(g, [10, F810.comp(10)]);
    arr(s, [a10[0], a10[1] - 5], [c10[0], c10[1] + 5], { w: 1.3, both: true, head: 5.5, name: 'gap' });
    lab(s, g.R - 2, 32, 'the gap is the effect', { anchor: 'end', size: 11.5 });
    const gl = lab(s, g.R - 2, 46, 'of compounding', { anchor: 'end', size: 11.5 });
    path(s, [[gl[0] + 44, gl[3] + 5], [c10[0] - 4, (a10[1] + c10[1]) / 2 - 6]], { color: C.slate, w: 1, name: 'leader' });
    // the curves named beside them (decision 18: no key): simple just under its own line, depreciation just over its own curve
    runs(s, g.L + 8, 82, [{ t: `compound (GP), ${Rr} = 8:  ${Pp}(1 + ` }, { num: '8', den: '100' }, { t: `)<sup>${I('n')}</sup>` }], { size: 11.5, color: C.amber });
    runs(s, g.R, SY810, [{ t: `simple (AP), ${Rr} = 8:  ${Pp}(1 + ` }, { num: `8${I('n')}`, den: '100' }, { t: ')' }], { size: 11.5, anchor: 'end' });
    runs(s, g.R, DY810, [{ t: `depreciation, ${Rr} = 20:  ${Pp}(1 − ` }, { num: '20', den: '100' }, { t: `)<sup>${I('n')}</sup>` }], { size: 11.5, anchor: 'end' });
    // the two callouts
    const c3 = gp(g, [3, F810.comp(3)]);
    lab(s, g.L + 22, 112, 'Rs 19,683', { anchor: 'start', size: 11.5, color: C.amber });
    const k3 = lab(s, g.L + 22, 126, 'after 3 years', { anchor: 'start', size: 11.5, color: C.amber });
    arr(s, [k3[2] - 6, k3[3] + 5], [c3[0] - 3, c3[1] - 5], { color: C.mari, w: 1.2, head: 5.5, name: 'callout 3' });
    const d5 = gp(g, [5, F810.dep(5)]);
    lab(s, g.L + 30, 272, 'Rs 5,120', { anchor: 'start', size: 11.5 });
    const k5 = lab(s, g.L + 30, 286, 'after 5 years', { anchor: 'start', size: 11.5 });
    arr(s, [k5[2] + 5, k5[1] + 2], [d5[0] - 5, d5[1] + 3], { w: 1.2, head: 5.5, name: 'callout 5' });
    return s;
  },
  check() {
    const s = fig810.draw(fig810.cases[0]), out: Check[] = [], g = G810;
    out.push([`15,625 × 1.08³ = ${fmt(F810.comp(3))} (Rs 19,683, exactly: 15,625 = 5⁶ and 1.08 = 27/25); 15,625 × 0.8⁵ = ${fmt(F810.dep(5))} (Rs 5,120, exactly: 0.8 = 4/5)`, close(F810.comp(3), 19683, 1e-6) && close(F810.dep(5), 5120, 1e-6)]);
    out.push([`At n = 10: compound ${fmt(F810.comp(10), 0)} against simple ${fmt(F810.simp(10), 0)}, the gap ${fmt(F810.comp(10) - F810.simp(10), 0)}; the simple values rise by the same 1,250 a year (a line), the compound by a growing amount (a curve)`, F810.comp(10) > F810.simp(10) && close(F810.simp(5) - F810.simp(4), 1250) && F810.comp(5) - F810.comp(4) > F810.comp(4) - F810.comp(3)]);
    const bad = (['comp', 'simp', 'dep'] as const).filter((k) => !dotsOf(s).filter((d) => d.name.startsWith(`${k}:`)).every((d) => { const p = unPx(g, d.p); return close(p[1], F810[k](p[0]), 1e-6); }));
    out.push([`Every year's dot lies on its own curve (10 each), and P sits at (0, 15,625)${bad.length ? `: not ${bad.join(', ')}` : ''}`, bad.length === 0 && close(unPx(g, dotAt(s, 'P')!)[1], P810)]);
    out.push(stackedCheck(s, ['8/100', '8n/100', '20/100']));
    out.push(labelsCheck(s, ['value (Rs)', 'time n (years)', 'P', 'Rs 19,683', 'after 3 years', 'Rs 5,120', 'after 5 years', 'the gap is the effect', 'of compounding', 'compound (GP), R = 8:  P(1 + 8/100)n', 'simple (AP), R = 8:  P(1 + 8n/100)', 'depreciation, R = 20:  P(1 − 20/100)n', '0', '5,000', '10,000', '15,625', '20,000', '25,000', '30,000', '35,000', '2', '10']));
    out.push(noBadChars(s, fig810));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 8.11 · front-pairing the alternating squares (Additional B, p. 762) */
/* ===================================================================== */
const CAP811 = 'Front-pairing the alternating squares, and the odd-<i>n</i> leftover.';
const T811 = { x0: 12, w: 40, gap: 5, h: 30 };
const fig811: Diagram = {
  id: 'm11-08-fig-8.11',
  topic: 10,
  name: 'Front-pairing the alternating squares',
  cases: [{ chip: 'Even n and odd n', cap: CAP811 }],
  draw() {
    const s = new Sketch(W, 320), { x0, w, gap, h } = T811;
    const tx = (i: number) => x0 + i * (w + gap);
    const tiles = (y: number, n: number) => {
      for (let i = 0; i < n; i++) {
        const k = i + 1, neg = k % 2 === 0, extra = k === 7;
        box(s, [tx(i), y, tx(i) + w, y + h], { color: neg ? C.mari : C.ink, w: extra ? 2.6 : 1.6, name: `tile:${y}:${k}` });
        labC(s, tx(i) + w / 2, y + h / 2, `${extra ? '+' : neg ? '−' : ''}${k}<sup>2</sup>`, { size: 14, color: neg ? C.amber : C.text });
      }
      [0, 2, 4].forEach((i) => {
        const a = tx(i) - 2, b = tx(i + 1) + w + 2, by = y + h + 16, m = (a + b) / 2;
        path(s, [[a + 1, by - 8], [a + 1, by], [b - 1, by], [b - 1, by - 8]], { color: C.slate, w: 1.3, name: 'bracket' });
        path(s, [[m, by], [m, by + 6]], { color: C.slate, w: 1.3, name: 'bracket' });
        lab(s, m, by + 28, ['−3', '−7', '−11'][i / 2], { size: 15, color: C.slate });
      });
    };
    lab(s, 10, 20, `even ${N}: the pairing is exact`, { anchor: 'start', size: 13.5 });
    lab(s, W - 8, 20, `${sb(I('S'), '6')} = −21`, { anchor: 'end', size: 15 });
    tiles(32, 6);
    lab(s, 150, 132, `the brackets form an AP with ${I('d')} = −4`, { size: 13.5, color: C.amber });
    lab(s, 6, 176, `odd ${N}: pair the first ${N} − 1, then add ${sb(I('t'), N)} on its own`, { anchor: 'start', size: 12.5 });
    tiles(188, 7);
    const mx = tx(6) + w / 2;
    arr(s, [mx, 252], [mx, 226], { w: 1.6, head: 6, name: 'leftover' });
    lab(s, mx, 270, '+49', { size: 15 });
    lab(s, 136, 290, '−3,  −7,  −11  sum to  −21', { size: 13.5, color: C.amber });
    lab(s, W - 8, 312, `${sb(I('S'), '7')} = −21 + 49 = 28`, { anchor: 'end', size: 15 });
    return s;
  },
  check() {
    const s = fig811.draw(fig811.cases[0]), out: Check[] = [];
    const t = (k: number) => (k % 2 ? 1 : -1) * k * k, S = (n: number) => Array.from({ length: n }, (_, i) => t(i + 1)).reduce((a, b) => a + b, 0);
    const pairs = [1, 3, 5].map((k) => t(k) + t(k + 1));
    out.push([`The pairs 1² − 2², 3² − 4², 5² − 6² are ${pairs.join(', ')}: an AP with d = −4, summing to ${pairs.reduce((a, b) => a + b)} = S₆ = −n(n + 1)/2`, pairs.join() === '-3,-7,-11' && pairs[1] - pairs[0] === -4 && pairs[2] - pairs[1] === -4 && S(6) === -21 && S(6) === -(6 * 7) / 2]);
    out.push([`Odd n = 7: the first six pair to −21, then +7² = +49, S₇ = ${S(7)} = n(n + 1)/2`, S(7) === 28 && S(7) === -21 + 49 && S(7) === (7 * 8) / 2]);
    out.push(labelsCheck(s, ['even n: the pairing is exact', 'S6 = −21', '12', '−22', '32', '−42', '52', '−62', '+72', '−3', '−7', '−11', 'the brackets form an AP with d = −4', 'odd n: pair the first n − 1, then add tn on its own', '+49', '−3,  −7,  −11  sum to  −21', 'S7 = −21 + 49 = 28']));
    out.push(noBadChars(s, fig811));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 1" (F, p. 774) · the terms measured from the fixed point      */
/* ===================================================================== */
const CAPF = `The first four terms of ${sb(I('a'), '1')} = 2, ${sb(I('a'), `${N}+1`)} = 3${AN} + 1 measured from the fixed point ${I('L')} = −<frac><num>1</num><den>2</den></frac>: the terms themselves are not a GP, but their distances from ${I('L')} are, each one ${I('p')} = 3 times the last.`;
const GF: Gr = { x: [0.2, 4.8], y: [-24, 84], L: 46, R: 332, B: 290, T: 28 };
const AF = [2, 7, 22, 67];
const figF: Diagram = {
  id: 'm11-08-F-d1',
  topic: 14,
  name: 'Measuring from the fixed point',
  cases: [{ chip: 'a₁ = 2, p = 3, q = 1', cap: CAPF }],
  draw() {
    const s = new Sketch(W, 330), g = GF, L = -0.5;
    spines(s, g, { xt: [1, 2, 3, 4], yt: [0, 20, 40, 60, 80] });
    lab(s, gx(g, 2.5), g.B + 36, N, { size: 15 });
    lab(s, 8, 16, AN, { anchor: 'start', size: 15 });
    lab(s, g.L + 14, 16, `${sb(I('a'), '1')} = 2,    ${sb(I('a'), `${N}+1`)} = 3${AN} + 1`, { anchor: 'start', size: 13 });
    path(s, [gp(g, [g.x[0], L]), gp(g, [g.x[1], L])], { color: C.slate, w: 1.3, dash: '5 4', name: 'fixed point' });
    runs(s, gx(g, 2.5), gy(g, -14), [{ t: `fixed point  ${I('L')} = ` }, { num: I('q'), den: `1 − ${I('p')}` }, { t: ' = −' }, { num: '1', den: '2' }], { size: 13, anchor: 'middle', color: C.slate });
    lab(s, g.L + 14, gy(g, 52), `each gap ${AN} − ${I('L')} is ${I('p')} = 3`, { anchor: 'start', size: 12.5, color: C.amber });
    lab(s, g.L + 14, gy(g, 52) + 16, 'times the one before it', { anchor: 'start', size: 12.5, color: C.amber });
    const gaps = [['5', '2'], ['15', '2'], ['45', '2'], ['135', '2']];
    AF.forEach((a, i) => {
      const n = i + 1, p = gp(g, [n, a]), base = gp(g, [n, L]);
      arr(s, [base[0], base[1] - 1.5], [p[0], p[1] + DOT_R + 1.5], { color: C.mari, w: 1.3, both: a > 5, head: 5, name: `gap:${n}` });
      pt(s, p, `a${n}`);
      // every gap is named on the right of its own arrow (as the book does): the two short ones just above L, the long ones at mid-arrow;
      // a₁'s and a₂'s names sit above-left of their dots, clear of those gap names
      const midY = n <= 2 ? base[1] - 19 : (p[1] + base[1]) / 2;
      runs(s, p[0] + (n <= 2 ? 9 : 6), midY + 4, [{ num: gaps[i][0], den: gaps[i][1] }], { size: 11.5, color: C.amber, anchor: 'start' });
      const lx = n <= 2 ? p[0] - 6 : p[0], ly = n === 1 ? p[1] - 11 : n === 2 ? p[1] - 18 : p[1] - 13.5;
      lab(s, lx, ly, `${sb(I('a'), String(n))} = ${a}`, { anchor: n <= 2 ? 'end' : 'middle', size: 12.5 });
    });
    return s;
  },
  check() {
    const s = figF.draw(figF.cases[0]), out: Check[] = [], g = GF, p = 3, q = 1, L = q / (1 - p);
    const a = [2];
    for (let i = 0; i < 3; i++) a.push(p * a[i] + q);
    const d = a.map((x) => x - L);
    out.push([`a₁ = 2, aₙ₊₁ = 3aₙ + 1 gives ${a.join(', ')}; L = q/(1 − p) = ${fmt(L)}; the gaps aₙ − L are ${d.map((x) => fmt(x)).join(', ')} = 5/2, 15/2, 45/2, 135/2, each 3 times the last, while the terms themselves have ratios ${fmt(a[1] / a[0])}, ${fmt(a[2] / a[1])} (not a GP)`, a.join() === AF.join() && L === -0.5 && d.every((x, i) => close(x, (5 / 2) * 3 ** i)) && a[1] / a[0] !== a[2] / a[1]]);
    out.push([`The closed form aₙ = (a₁ − L)pⁿ⁻¹ + L gives ${[1, 2, 3, 4].map((n) => fmt(2.5 * 3 ** (n - 1) - 0.5)).join(', ')}`, [1, 2, 3, 4].every((n) => close(2.5 * 3 ** (n - 1) - 0.5, AF[n - 1]))]);
    const ds = [1, 2, 3, 4].map((n) => unPx(g, dotAt(s, `a${n}`)!));
    out.push([`The dots sit at ${ds.map((q2) => `(${fmt(q2[0])}, ${fmt(q2[1])})`).join(', ')}, and each gap arrow runs from L up to its dot`, ds.every((q2, i) => close(q2[0], i + 1) && close(q2[1], AF[i])) && [1, 2, 3, 4].every((n) => { const l = linesNamed(s, new RegExp(`^gap:${n}$`))[0].pts.map((q2) => unPx(g, q2)); return close(l[0][0], n) && Math.abs(l[0][1] - L) < 1 && l[1][1] < AF[n - 1] && l[1][1] > AF[n - 1] - 3; })]);
    out.push(stackedCheck(s, ['q/1 − p', '1/2', '5/2', '15/2', '45/2', '135/2']));
    out.push(labelsCheck(s, ['a1 = 2,    an+1 = 3an + 1', 'a1 = 2', 'a2 = 7', 'a3 = 22', 'a4 = 67', 'each gap an − L is p = 3', 'times the one before it', 'fixed point  L = q/1 − p = −1/2', '5/2', '15/2', '45/2', '135/2', 'an', 'n', '0', '20', '40', '60', '80']));
    out.push(noBadChars(s, figF));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* "Figure 2" (G, p. 781) · the AM-GM bound and a restricted domain      */
/* ===================================================================== */
const CAPG = `${I('y')} = ${I('x')} + <frac><num>4</num><den>${I('x')}</den></frac>: on ${I('x')} > 0 the AM-GM bound 4 is attained at ${I('x')} = 2, but on the restricted domain ${I('x')} ≥ 3 the equality point is excluded and the minimum moves to the boundary, ${I('f')}(3) = <frac><num>13</num><den>3</den></frac>, with 4 still a true but unattained bound.`;
const GG: Gr = { x: [0, 8.4], y: [2.6, 10.4], L: 52, R: 330, B: 262, T: 34 };
const fG = (x: number) => x + 4 / x;
type CaseG = { chip: string; cap: string; panel: 'all' | 'restricted' };
const figG: Diagram = {
  id: 'm11-08-G-d1',
  topic: 15,
  name: 'The AM-GM bound and a restricted domain',
  cases: [{ chip: 'x > 0', cap: CAPG, panel: 'all' }, { chip: 'x ≥ 3', cap: CAPG, panel: 'restricted' }] as CaseG[],
  draw(c: CaseG) {
    const s = new Sketch(W, 308), g = GG, X = I('x');
    spines(s, g, { xt: [0, 2, 4, 6, 8], yt: [3, 4, 5, 6, 7, 8, 9, 10] });
    lab(s, gx(g, 4.2), g.B + 36, X, { size: 15 });
    runs(s, 8, 18, [{ t: `${I('y')} = ${X} + ` }, { num: '4', den: X }], { size: 13 });
    lab(s, gx(g, 4.6), 22, c.panel === 'all' ? `${X} > 0` : `${X} ≥ 3`, { size: 14 });
    if (c.panel === 'all') {
      path(s, curve(g, fG, 0.55, 8), { w: 2.2, name: 'curve' });
      path(s, [gp(g, [0, 4]), gp(g, [8.4, 4])], { color: C.mari, w: 1.4, dash: '5 4', name: 'bound' });
      pt(s, gp(g, [2, 4]), 'min', C.mari, 4);
      const l = lab(s, gx(g, 2.75), gy(g, 8.75), '(2, 4): minimum', { size: 12.5, color: C.amber });
      arr(s, [gx(g, 3.2), l[3] + 5], [gx(g, 2) + 2, gy(g, 4) - 7], { color: C.mari, w: 1.2, head: 6, name: 'to min' });
      lab(s, gx(g, 3.1), gy(g, 4) + 17, 'AM-GM bound = 4', { anchor: 'start', size: 12.5, color: C.amber });
      return s;
    }
    path(s, curve(g, fG, 0.55, 3), { w: 1.1, dash: '3 3', name: 'excluded curve' });
    path(s, curve(g, fG, 3, 8), { w: 2.2, name: 'curve' });
    path(s, [gp(g, [0, 4]), gp(g, [8.4, 4])], { color: C.ink, w: 1.3, dash: '5 4', name: 'bound' });
    pt(s, gp(g, [3, 13 / 3]), 'min');
    const l = runs(s, gx(g, 4.7), gy(g, 9.15), [{ t: '(3, ' }, { num: '13', den: '3' }, { t: '): the actual' }], { size: 12, anchor: 'middle' });
    const l2 = lab(s, gx(g, 4.7), l[3] + 13, `minimum on ${X} ≥ 3`, { size: 12 });
    arr(s, [gx(g, 3.45), l2[3] + 5], [gx(g, 3) + 2, gy(g, 13 / 3) - 6], { w: 1.2, head: 6, name: 'to min' });
    lab(s, g.R - 2, gy(g, 4) + 17, 'bound still true,', { anchor: 'end', size: 12 });
    lab(s, g.R - 2, gy(g, 4) + 31, 'no longer attained', { anchor: 'end', size: 12 });
    const lines = linesNamed(s, /^(excluded curve|bound|spine|tick)$/).map((q) => q.pts);
    hatch(s, (p) => p[0] > g.L + 3 && p[0] < gx(g, 3) - 1 && p[1] > g.T && p[1] < g.B - 3 && lines.every((q) => toPoly(p, q) > 3), [g.L, g.T, gx(g, 3), g.B], { step: 8 });
    return s;
  },
  check(c: CaseG) {
    const s = figG.draw(c), out: Check[] = [], g = GG;
    let mAll = Infinity, xAll = 0, rises = true;
    for (let i = 1; i <= 8000; i++) { const x = i / 1000, y = fG(x); if (y < mAll) { mAll = y; xAll = x; } if (x > 3 && y <= fG(x - 0.001)) rises = false; }
    out.push([`x + 4/x ≥ 2√(x · 4/x) = 4, equal when x = 4/x, x = 2: the least value on x > 0 is ${fmt(mAll, 4)} at x = ${fmt(xAll, 2)}; on x ≥ 3 the function rises (1 − 4/x² > 0), so its least value is f(3) = 3 + 4/3 = 13/3 = ${fmt(fG(3), 4)}, above the bound 4`, close(mAll, 4, 1e-9) && close(xAll, 2) && rises && close(fG(3), 13 / 3) && fG(3) > 4]);
    const m = unPx(g, dotAt(s, 'min')!);
    out.push([`The marked minimum sits at (${fmt(m[0])}, ${fmt(m[1], 3)}), on the curve`, close(m[1], fG(m[0])) && close(m[0], c.panel === 'all' ? 2 : 3)]);
    if (c.panel === 'restricted') {
      out.push([`The excluded part x < 3 hatched (${hatchN(s)} strokes), every stroke left of x = 3`, hatchN(s) > 20 && hatchAll(s, (p) => unPx(g, p)[0] < 3)]);
      out.push(stackedCheck(s, ['4/x', '13/3']));
      out.push(labelsCheck(s, ['x ≥ 3', '(3, 13/3): the actual', 'minimum on x ≥ 3', 'bound still true,', 'no longer attained', 'y = x + 4/x', '3', '10', '0', '8']));
    } else {
      out.push(stackedCheck(s, ['4/x']));
      out.push(labelsCheck(s, ['x > 0', '(2, 4): minimum', 'AM-GM bound = 4', 'y = x + 4/x', '3', '10', '0', '8']));
    }
    out.push(noBadChars(s, figG));
    out.push(...layout(s));
    return out;
  },
};

/** Mathematics 11 Chapter 8, Sequences and Series: the book's figures. */
export const DIAGRAMS_MATHEMATICS_11_08: Diagram[] = [fig81, fig82, fig83, fig84, fig85, fig86, fig87, fig88, fig89, fig810, fig811, figF, figG];
