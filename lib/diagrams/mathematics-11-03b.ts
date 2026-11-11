import { C, LABEL_GAP, Rect, Sketch, mathW, r1 } from '@/lib/diagrams/kit';
import type { Check, Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 11, CHAPTER 3 (Trigonometric Functions), the second half of its drawings (the Master
 * Reference book, October edition): Figures 3.12–3.17 and the unnumbered drawings of the Additional Topics.
 * Joined after Figures 3.1–3.11 (mathematics-11-03a.ts) in mathematics-11-03.ts.
 *
 *   Figure 3.12 (p. 224; caption first on p. 223), the derivation tree, Topic 05, topic index 4.
 *   Figure 3.13 (p. 228; caption p. 227), the chord proof of cos(A − B), Topic 05, index 4.
 *   Figure 3.14 (p. 235; caption p. 234), the principal solutions of sin x = 1/2, Topic 06, index 5.
 *   Figure 3.15 (p. 245; caption p. 244), two revolutions of A against one of A/2, Topic 07, index 6.
 *   Figure 3.16 (p. 250; caption p. 249), the pentagon's central triangle, Topic 07, index 6.
 *   Figure 3.17 (p. 259; caption p. 258), the circumcircle and the sine rule, Topic 08, index 7.
 *   Topic 09's own "Figure 1" (p. 278), the bands where sin x > 1/2, m11-03-09-d1, index 8.
 *   Topic 10's own "Figure 2" (p. 290), the amplitude rule, two panels, m11-03-10-d1, index 9.
 *   Topic 11's own "Figure 3" (p. 303), telescoping in four rows, m11-03-11-d1, index 10.
 *   Topic 12's own "Figure 4" (p. 317), the multiple-angle ladder, m11-03-12-d1, index 11 (Additional C and D: none).
 *
 * ONE HIGHLIGHT. The book draws in navy, green and orange; here the book's orange is the one marigold highlight
 * and every other colour is ink or slate: Fig 3.12 the shortcut to a cos x + b sin x = R cos(x − α); Fig 3.14,
 * Figure 1 the line y = 1/2 (and Figure 1's bands); Fig 3.15 the Quadrant III cells and where they land; Fig 3.16
 * the central triangle and its angles; Fig 3.17 the chord a and the central angle 2A; Figure 2 the value 5. Where
 * the book has no orange the highlight is the thing the drawing is about: Fig 3.13 the chord P3P4 and its angle
 * (the book's green), Figure 3 the two survivors' rings (the book's green).
 *
 * NO FILLS. The book's tinted regions are marigold hatching, computed line by line from the region and kept clear
 * of every label and line: Figure 1's three bands, Fig 3.15's cells (the first revolution's at 45°, the second's
 * at −45°, where the book used orange and green), Fig 3.16's central triangle. The book's pale alternate quadrant
 * tints in Fig 3.15 are decoration and are left out. Boxes and rings are outlines.
 *
 * FRACTIONS are stacked by hand (two runs and a short rule): every π-tick, angle and half on the drawings
 * (A/2, π/6, 5π/6, y = 1/2, 36°/2, (√5 − 1)/4, a/2, a/sin A, β/2 and its kin). Captions write them with <frac>.
 *
 * POINTS on a curve or circle are filled dots (decision 10). Graphs: arrowheaded axes named x, y and O; π-ticks
 * stacked; the book's grid lines are left out except Figure 1's, whose numbers sit under the plot (the curve
 * crosses the axis at every tick there, so they are carried down on faint guides, as printed).
 *
 * DEPARTURES, for a phone: Fig 3.12's side label is set level (the book runs it up the page) inside the dashed
 * route, and "add / subtract pairs" breaks onto two lines; Fig 3.13 takes B = 30° (the book draws 35°) to open the
 * wedge for its label A − B; Fig 3.17 opens B and C to 210° and 330° (the book about 215° and 325°) to give a/2 = R sin A
 * room under BC, and moves A to 120° (the book about 95°) so the triangle is 60°, 75°, 45°; Fig 3.14's general solution sits on its own line; Figure 1 drops the book's 0 under the plot (the O
 * names it); Figure 3 sets each row on two lines (the product, then its two sines) and its rings are pill outlines;
 * Figure 4's base box (the book's grey tint) is hatched in grey; Fig 3.13's label P2(cos B, sin B) sits above and right of P2, outside the
 * grey arc A, so both arcs run unbroken from 0°; Fig 3.15's mapping labels sit on
 * their own arrows (broken round them), on two rows; Fig 3.16 and Figure 2 are two panels each, one per chip; Fig
 * 3.14 gains the O at the centre (a graph's O, house rule); Figure 2's "5 - never reached" is "5: never reached"
 * (no dashes); Figure 3's vertical "cancels" is set level beside the arrows. No em dash anywhere.
 */

const W = 340;
type P = [number, number];
const fmt = (n: number, d = 2) => String(+n.toFixed(d)).replace('-', '−');
const len = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const plain = (html: string) => html.replace(/<[^>]+>/g, '');
const widthOf = (html: string, size: number) => Math.max(mathW(html, size), plain(html).length * size * 0.5);
const I = (t: string) => `<i>${t}</i>`;
const close = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const DEG = Math.PI / 180;
/** A point at `r` from c, at `deg` degrees measured anticlockwise from the x-axis (screen y runs down). */
const pol = (c: P, r: number, deg: number): P => [c[0] + r * Math.cos(deg * DEG), c[1] - r * Math.sin(deg * DEG)];
const angOf = (c: P, p: P) => { const a = Math.atan2(c[1] - p[1], p[0] - c[0]) / DEG; return a < 0 ? a + 360 : a; };

/* ---------- lines, labels and the layout checks (as in mathematics-11-02.ts) ---------- */
type Stroke = { color?: string; w?: number; dash?: boolean | string; name?: string };
const LINES = new WeakMap<Sketch, { name: string; pts: P[] }[]>();
const keep = (s: Sketch, pts: P[], name = '') => { const l = LINES.get(s) ?? []; l.push({ name, pts }); LINES.set(s, l); };
const linesNamed = (s: Sketch, re: RegExp) => (LINES.get(s) ?? []).filter((l) => re.test(l.name));
const dashAttr = (d: Stroke['dash']) => (d === true ? ' stroke-dasharray="5 4"' : d ? ` stroke-dasharray="${d}"` : '');
function path(s: Sketch, pts: P[], o: Stroke = {}) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ');
  s.add(`<path d="${d}" fill="none" stroke="${o.color ?? C.ink}" stroke-width="${o.w ?? 1.7}" stroke-linejoin="round" stroke-linecap="round"${dashAttr(o.dash)}/>`);
  keep(s, pts, o.name);
}
function arrow(s: Sketch, a: P, b: P, o: Stroke = {}) {
  s.vec(a[0], a[1], b[0], b[1], { color: o.color ?? C.ink, w: o.w ?? 1.5, dash: !!o.dash });
  keep(s, [a, b], o.name);
}
/** An arc of a circle, from a0 to a1 degrees, as a polyline. */
const arcPts = (c: P, r: number, a0: number, a1: number, n = 60): P[] => Array.from({ length: n + 1 }, (_, i) => pol(c, r, a0 + ((a1 - a0) * i) / n));
/** A polyline drawn in pieces, broken wherever it comes within `gap` of a rect in `avoid`. */
function brokenPath(s: Sketch, pts: P[], avoid: Rect[], gap: number, o: Stroke = {}) {
  const fine: P[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const n = Math.max(1, Math.ceil(len(pts[i], pts[i + 1])));
    for (let k = 0; k < n; k++) fine.push([pts[i][0] + ((pts[i + 1][0] - pts[i][0]) * k) / n, pts[i][1] + ((pts[i + 1][1] - pts[i][1]) * k) / n]);
  }
  fine.push(pts[pts.length - 1]);
  let run: P[] = [];
  const flush = () => { if (run.length > 1) path(s, run, o); run = []; };
  fine.forEach((p) => { if (avoid.some((r) => rectDist(r, p) < gap)) flush(); else run.push(p); });
  flush();
}
/** A curved arrow: a quadratic Bézier from a through ctrl to b, with a head at b. */
function bend(s: Sketch, a: P, ctrl: P, b: P, o: Stroke = {}) {
  const pts = Array.from({ length: 31 }, (_, i): P => { const t = i / 30, u = 1 - t; return [u * u * a[0] + 2 * u * t * ctrl[0] + t * t * b[0], u * u * a[1] + 2 * u * t * ctrl[1] + t * t * b[1]]; });
  path(s, pts.slice(0, -3), { ...o, w: o.w ?? 1.3 });
  s.vec(pts[pts.length - 4][0], pts[pts.length - 4][1], b[0], b[1], { color: o.color ?? C.slate, w: o.w ?? 1.3 });
  keep(s, pts.slice(-4), o.name);
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
function toPoly(p: P, pts: P[]): number {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1;
    const k = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L));
    d = Math.min(d, Math.hypot(p[0] - a[0] - k * dx, p[1] - a[1] - k * dy));
  }
  return d;
}
/** Distance from p to every kept line except those whose name matches `skip`. */
const toLines = (s: Sketch, p: P, skip = /^hatch/) => Math.min(Infinity, ...(LINES.get(s) ?? []).filter((l) => !skip.test(l.name)).map((l) => toPoly(p, l.pts)));
function clearance(s: Sketch): { gap: number; what: string } {
  let gap = Infinity, what = '';
  const boxes: [string, Rect][] = [...s.tags.map((t): [string, Rect] => [t.name, t.rect]), ...s.labels.map((l): [string, Rect] => [l.text, l.rect])];
  for (const { pts, name: ln } of LINES.get(s) ?? []) for (const [name, r] of boxes) { const d = boxToLine(r, pts); if (d < gap) { gap = d; what = `${name}" (from the ${ln || 'line'}`; } }
  return { gap, what };
}
const clearCheck = (s: Sketch): Check => {
  const { gap, what } = clearance(s);
  return [`Every label stays at least ${LABEL_GAP} px clear of every line, curve, dot and hatch stroke: the closest is "${what}", ${fmt(gap, 1)} px`, gap >= LABEL_GAP - 1e-9];
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
const layout = (s: Sketch): Check[] => [clearCheck(s), labelsApart(s), inFrame(s)];
const hasLabel = (s: Sketch, t: string) => s.labels.some((l) => l.text === t);
const allLabels = (s: Sketch, ts: string[]) => ts.filter((t) => !hasLabel(s, t));
const labelsCheck = (s: Sketch, ts: string[], what = 'The labels as printed'): Check => {
  const miss = allLabels(s, ts);
  return [`${what}: ${ts.join(' · ')}${miss.length ? `; missing ${miss.join(', ')}` : ''}`, miss.length === 0];
};
/** No vulgar-fraction characters and no em dash in anything the drawing shows. */
const noBadChars = (s: Sketch, d: Diagram): Check => {
  const all = [...s.labels.map((l) => l.text), d.name, ...d.cases.flatMap((c) => [c.chip, c.cap])].join(' ');
  return ['No em dash and no vulgar-fraction character in the labels, name, chips or captions', !/[\u2014\u00bc-\u00be\u2150-\u215e]/.test(all)];
};

/** A line of STIX on the drawing, from its baseline, its box at its true width. */
function lab(s: Sketch, x: number, y: number, html: string, o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, anchor = o.anchor ?? 'middle', w = widthOf(html, size);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const rect: Rect = [x0, y - size * 0.72, x0 + w, y + size * (html.includes('<sub>') ? 0.36 : 0.22)];
  s.labels.push({ text: plain(html), rect });
  s.text(x, y, html, { size, anchor, color: o.color ?? C.text });
  return rect;
}

/* ---------- stacked fractions, drawn by hand ---------- */
/**
 * A run of a label: text; text set larger (a bracket round a stacked fraction); a stacked fraction; or a Σ with
 * its limits stacked over and under it.
 */
type Piece = { t: string; big?: boolean } | { num: string; den: string } | { sum: true; top: string; bot: string };
const FRACS = new WeakMap<Sketch, { num: string; den: string; rule: [number, number, number]; numY: number; denY: number; numW: number; denW: number }[]>();
const FRAC_PAD = 2;
const fracW = (num: string, den: string, size: number) => Math.max(widthOf(num, size), widthOf(den, size)) + 2 * FRAC_PAD;
function frac(s: Sketch, x: number, y: number, num: string, den: string, size: number, color: string): Rect {
  const w = fracW(num, den, size), numY = y - 3, denY = y + 3 + size * 0.68;
  s.text(x, numY, num, { size, color });
  s.text(x, denY, den, { size, color });
  s.add(`<line x1="${r1(x - w / 2)}" y1="${r1(y)}" x2="${r1(x + w / 2)}" y2="${r1(y)}" stroke="${color}" stroke-width="1.1"/>`);
  FRACS.set(s, [...(FRACS.get(s) ?? []), { num, den, rule: [x - w / 2, x + w / 2, y], numY, denY, numW: widthOf(num, size), denW: widthOf(den, size) }]);
  return [x - w / 2, numY - size * 0.72, x + w / 2, denY + size * 0.22];
}
const BIG = 1.45;
/*
 * WHERE A LABEL'S RUNS SIT. A label that mixes text with a stacked fraction is several texts on the phone, each
 * placed where this file says. Placing them by mathW (the kit's generous estimate, never less than half an em a
 * character, so a run with spaces counts each space as half an em) left the spare width showing on Android as gaps:
 * word by word it spread into every space ("sin   x  >"), run by run it piled up before each fraction. So the runs
 * are laid by STIX Two's own advance widths (read from the .ttf the app loads, below, in thousandths of an em), one
 * after the other, each text against the fraction beside it, with only its own spaces and the fraction's small side
 * room between them. The label's box is that true width.
 */
const ADV_GROUPS = (g: string): Map<string, number> => new Map(g.split('¦').flatMap((e) => { const m = /^(.+)(\d{3})$/u.exec(e)!; return [...m[1]].map((ch): [string, number] => [ch, +m[2] / 1000]); }));
const ADV_UP = ADV_GROUPS(' 235¦,.;:‘’245¦j263¦|267¦l283¦i285¦f307¦t315¦()343¦[]347¦I357¦r380¦/387¦s395¦J396¦°405¦c446¦z458¦e464¦γ466¦x479¦a480¦v481¦y483¦g484¦0123456789495¦S504¦oθ514¦q521¦b522¦β530¦p537¦d539¦k542¦α561¦P569¦u570¦n576¦h577¦L585¦F588¦π591¦Z594¦Tφ603¦B618¦E626¦Y647¦ℤ648¦×655¦R659¦X664¦C670¦V680¦<>701¦K702¦A718¦+−=±∈G720¦D730¦OQ737¦N742¦w749¦U752¦H777¦√794¦m852¦⇒887¦M895¦∑936¦W944¦→948');
const ADV_IT = ADV_GROUPS(' 225¦‘’235¦,.;:242¦|267¦j272¦l273¦i279¦f291¦t298¦)339¦(340¦I343¦[]347¦s367¦r383¦/386¦°J398¦c408¦e412¦z425¦v429¦y446¦g451¦x453¦γ466¦o485¦6494¦012345789b495¦k499¦β507¦θ513¦q518¦p521¦aS534¦d541¦h549¦u557¦α562¦n564¦LP569¦F583¦π586¦B593¦φ598¦Z606¦Y607¦T610¦E614¦R620¦X637¦V640¦ℤ648¦×K655¦C656¦A681¦w694¦G697¦<>701¦D702¦OQ707¦N714¦+−=±∈720¦U731¦H757¦√794¦m825¦M869¦⇒887¦W913¦∑936¦→948');
/** How wide a run of maths (<i>, <sub>, <sup>) is set on the phone, in STIX Two at `size`: its glyphs' own advances. */
export function stixW(html: string, size: number): number {
  let em = 0, italic = 0, small = 0;
  const re = /<(\/?)(i|sub|sup)>|([^<]+|<)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[2]) { const d = m[1] ? -1 : 1; if (m[2] === 'i') italic += d; else small += d; continue; }
    for (const ch of m[3]) em += ((italic > 0 ? ADV_IT : ADV_UP).get(ch) ?? ADV_UP.get(ch) ?? 0.6) * (small > 0 ? 0.7 : 1);
  }
  // the phone sets a thin space before ⇒ and a hair space after it (components/textbook/markup.tsx hairSpaces)
  if (/⇒/.test(html)) em += 0.19;
  return em * size;
}
const SUM_LIM = 0.75;
/** A run's own width on the phone; a fraction keeps its rule (as wide as mathW says) and a point of room each side. */
const pieceW = (p: Piece, size: number) =>
  'sum' in p ? Math.max(stixW('∑', size * 1.5), stixW(p.bot, size * SUM_LIM), stixW(p.top, size * SUM_LIM)) + 3 : 't' in p ? stixW(p.t, p.big ? size * BIG : size) + (p.big ? 1 : 0) : fracW(p.num, p.den, size) + 2;
/** The width a node of Fig 3.12 is boxed to: the generous estimate, as drawn before, so the tree keeps its shape. */
const runsW = (parts: Piece[], size: number) => parts.reduce((a, p) => a + ('t' in p ? mathW(p.t, p.big ? size * BIG : size) + (p.big ? 1 : 0) : pieceW(p, size)), 0);
const pieceText = (p: Piece) => ('sum' in p ? `∑[${plain(p.bot)}..${plain(p.top)}]` : 't' in p ? plain(p.t) : `${plain(p.num)}/${plain(p.den)}`);
/**
 * A text run in its slot [at, at + w]. Its own leading and trailing spaces are kept as room, not as text (an SVG
 * drops them, and Android leaves a trailing space out when it aligns a line by its end). A run with something after
 * it is set against that by its end, so whatever a renderer's widths, it meets the fraction or bracket it leads into.
 */
export function setRun(s: Sketch, at: number, w: number, y: number, t: string, size: number, color: string, leads: boolean) {
  const lead = /^ */.exec(plain(t))![0].length, trail = / *$/.exec(plain(t))![0].length, sp = stixW(' ', size), body = t.replace(/^((?:<[^>]+>)*) +/, '$1').replace(/ +((?:<\/[^>]+>)*)$/, '$1');
  if (leads) s.text(at + w - trail * sp, y, body, { size, anchor: 'end', color });
  else s.text(at + lead * sp, y, body, { size, anchor: 'start', color });
}
/** One label made of runs, its fractions' rules on the maths axis. Registered as ONE label. */
function runs(s: Sketch, x: number, y: number, parts: Piece[], o: { size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string } = {}): Rect {
  const size = o.size ?? 13, color = o.color ?? C.text, ws = parts.map((p) => pieceW(p, size)), total = ws.reduce((a, b) => a + b, 0);
  let at = o.anchor === 'middle' ? x - total / 2 : o.anchor === 'end' ? x - total : x;
  const box: Rect = [at, y - size * 0.72, at + total, y + size * 0.22];
  parts.forEach((p, i) => {
    if ('sum' in p) {
      const cx = at + ws[i] / 2;
      s.text(cx, y + size * 0.2, '∑', { size: size * 1.5, color });
      s.text(cx, y - size * 1.02, p.top, { size: size * SUM_LIM, color });
      s.text(cx, y + size * 0.98, p.bot, { size: size * SUM_LIM, color });
      box[1] = Math.min(box[1], y - size * 1.6); box[3] = Math.max(box[3], y + size * 1.15);
    } else if ('t' in p) {
      if (p.big) { s.text(at, y + size * 0.13, p.t, { size: size * BIG, anchor: 'start', color }); box[1] = Math.min(box[1], y - size * 1.1); box[3] = Math.max(box[3], y + size * 0.45); }
      else setRun(s, at, ws[i], y, p.t, size, color, i < parts.length - 1);
    } else {
      const r = frac(s, at + ws[i] / 2, y - size * 0.27, p.num, p.den, size, color);
      box[1] = Math.min(box[1], r[1]); box[3] = Math.max(box[3], r[3]);
    }
    at += ws[i];
  });
  s.labels.push({ text: parts.map(pieceText).join(''), rect: box });
  return box;
}
/** Every stacked fraction really is stacked: numerator above the rule, denominator below, the rule as wide as both. */
const stackedCheck = (s: Sketch, want: string[]): Check => {
  const fr = FRACS.get(s) ?? [], got = fr.map((f) => `${plain(f.num)}/${plain(f.den)}`);
  const ok = fr.every((f) => f.numY < f.rule[2] && f.denY - 6 > f.rule[2] && f.rule[1] - f.rule[0] >= Math.max(f.numW, f.denW)) && want.every((w) => got.includes(w));
  return [`Every fraction on the drawing is stacked by hand (${fr.length}: ${[...new Set(got)].join(', ')}), numerator over the rule over denominator`, ok];
};

/* ---------- hatching: the book's shading, as lines ---------- */
/**
 * Marigold hatching over every point `inside` says is shaded, at 45° (dir 1) or −45° (dir −1), kept `gap` px clear
 * of each label and each rect in `avoid`. Built line by line at half-pixel steps; each stroke is kept.
 */
function hatch(s: Sketch, inside: (p: P) => boolean, box: Rect, o: { step?: number; avoid?: Rect[]; gap?: number; keepAs?: string; color?: string; dir?: 1 | -1 } = {}): [P, P][] {
  const step = (o.step ?? 7) * Math.SQRT2, gap = o.gap ?? LABEL_GAP + 1, avoid = [...s.labels.map((l) => l.rect), ...(o.avoid ?? [])], dir = o.dir ?? 1;
  const ok = (p: P) => inside(p) && avoid.every((r) => rectDist(r, p) >= gap);
  const segs: [P, P][] = [];
  const k0 = dir === 1 ? box[0] + box[1] : box[0] - box[3], k1 = dir === 1 ? box[2] + box[3] : box[2] - box[1];
  for (let k = k0 + step / 2; k <= k1; k += step) {
    const xa = dir === 1 ? Math.max(box[0], k - box[3]) : Math.max(box[0], k + box[1]), xb = dir === 1 ? Math.min(box[2], k - box[1]) : Math.min(box[2], k + box[3]);
    let a: P | null = null, b: P | null = null;
    const end = () => { if (a && b && len(a, b) >= 3) segs.push([a, b]); a = null; };
    for (let x = xa; x <= xb + 1e-9; x += 0.5) {
      const p: P = [x, dir === 1 ? k - x : x - k];
      if (ok(p)) { if (!a) a = p; b = p; } else end();
    }
    end();
  }
  s.add(`<path d="${segs.map(([a, b]) => `M${r1(a[0])} ${r1(a[1])} L${r1(b[0])} ${r1(b[1])}`).join(' ')}" fill="none" stroke="${o.color ?? C.mari}" stroke-width="1" stroke-linecap="round"/>`);
  segs.forEach((sg) => keep(s, sg, o.keepAs ?? 'hatch'));
  return segs;
}
const HATCH = new WeakMap<Sketch, { name: string; segs: [P, P][] }[]>();
const addHatch = (s: Sketch, name: string, segs: [P, P][]) => HATCH.set(s, [...(HATCH.get(s) ?? []), { name, segs }]);
const hatchOf = (s: Sketch, name: string) => (HATCH.get(s) ?? []).filter((h) => h.name === name).flatMap((h) => h.segs);
const allIn = (segs: [P, P][], test: (p: P) => boolean) => segs.every(([a, b]) => test(a) && test(b) && test([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]));

/* ---------- dots and graphs ---------- */
const DOTS = new WeakMap<Sketch, { p: P; name: string }[]>();
const DOT_R = 3.6;
/** A filled dot (a point on a curve, a circle or a line: decision 10), kept as a ring for the clearance check. */
function pt(s: Sketch, p: P, name: string, col: string = C.ink, r = DOT_R) {
  s.dot(p[0], p[1], r, col);
  keep(s, Array.from({ length: 25 }, (_, i): P => [p[0] + (r + 1) * Math.cos((2 * Math.PI * i) / 24), p[1] + (r + 1) * Math.sin((2 * Math.PI * i) / 24)]), `dot:${name}`);
  DOTS.set(s, [...(DOTS.get(s) ?? []), { p, name }]);
}
const dotsOf = (s: Sketch) => DOTS.get(s) ?? [];
const dotAt = (s: Sketch, name: string) => dotsOf(s).find((d) => d.name === name)?.p;
type Gr = { ox: number; oy: number; ux: number; uy: number };
const gx = (g: Gr, v: number) => g.ox + v * g.ux;
const gy = (g: Gr, v: number) => g.oy - v * g.uy;
const gp = (g: Gr, p: P): P => [gx(g, p[0]), gy(g, p[1])];
const unPx = (g: Gr, p: P): P => [(p[0] - g.ox) / g.ux, (g.oy - p[1]) / g.uy];
const AXIS_W = 1.3;
/** The two axes through O, from px to px, with arrowheads, named x and y. */
function axes(s: Sketch, x0: number, x1: number, oy: number, y0: number, y1: number, ox: number, yName: 'right' | 'left' = 'right') {
  arrow(s, [x0, oy], [x1, oy], { color: C.slate, w: AXIS_W, name: 'axis:x' });
  arrow(s, [ox, y0], [ox, y1], { color: C.slate, w: AXIS_W, name: 'axis:y' });
  lab(s, x1 + 5, oy + 5, I('x'), { anchor: 'start', size: 15 });
  if (yName === 'left') lab(s, ox - 7, y1 + 6, I('y'), { anchor: 'end', size: 15 });
  else lab(s, ox + 7, y1 + 6, I('y'), { anchor: 'start', size: 15 });
}
const tick = (s: Sketch, x: number, y: number, vertical = true) => {
  if (vertical) { s.line(x, y - 4, x, y + 4, { color: C.slate, w: 1.1 }); keep(s, [[x, y - 4], [x, y + 4]], 'tick'); }
  else { s.line(x - 4, y, x + 4, y, { color: C.slate, w: 1.1 }); keep(s, [[x - 4, y], [x + 4, y]], 'tick'); }
};
/** A multiple of π as a tick label: "π", "2π", "−π", or stacked "π/2", "3π/2". */
const piPieces = (num: number, den: number): Piece[] => {
  const sign = num < 0 ? '−' : '', n = Math.abs(num), top = `${n === 1 ? '' : n}π`;
  if (den === 1) return [{ t: `${sign}${top}` }];
  return sign ? [{ t: '−' }, { num: top, den: String(den) }] : [{ num: top, den: String(den) }];
};
const sample = (f: (x: number) => number, a: number, b: number, n = 200): P[] => Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, f(x)]; });
const curve = (s: Sketch, g: Gr, pts: P[], o: Stroke = {}) => path(s, pts.map((p) => gp(g, p)), { color: o.color ?? C.ink, w: o.w ?? 2, dash: o.dash, name: o.name ?? 'curve' });
const curvesBack = (s: Sketch, g: Gr, re: RegExp) => linesNamed(s, re).map((l) => l.pts.map((p) => unPx(g, p)));
/** A small angle mark: an arc at c of radius r from a0 to a1 degrees. */
const angle = (s: Sketch, c: P, r: number, a0: number, a1: number, o: Stroke = {}) => path(s, arcPts(c, r, a0, a1, 40), { color: o.color ?? C.ink, w: o.w ?? 1.5, name: o.name ?? 'angle' });
/** A right-angle mark at corner c, its legs along unit directions u and v. */
function square(s: Sketch, c: P, u: P, v: P, k = 9, col: string = C.slate) {
  const a: P = [c[0] + u[0] * k, c[1] + u[1] * k], b: P = [a[0] + v[0] * k, a[1] + v[1] * k], d: P = [c[0] + v[0] * k, c[1] + v[1] * k];
  path(s, [a, b, d], { color: col, w: 1.1, name: 'right-angle' });
}

/* ===================================================================== */
/* Figure 3.12 · the derivation tree (Topic 05, p. 224)                  */
/* ===================================================================== */
const CAP312 = 'The derivation tree: every compound-angle formula descends from the single identity for cos(<i>A</i> − <i>B</i>).';
type Node = { key: string; c: P; lines: Piece[][]; size: number; box?: Rect };
const NODE_PAD = 9;
const nodeBox = (n: Node): Rect => {
  const w = Math.max(...n.lines.map((l) => runsW(l, n.size))) + 2 * NODE_PAD, h = n.lines.length === 1 ? 30 : 52;
  return [n.c[0] - w / 2, n.c[1] - h / 2, n.c[0] + w / 2, n.c[1] + h / 2];
};
const NODES312 = (): Node[] => [
  { key: 'root', c: [190, 26], size: 12.5, lines: [[{ t: `cos(${I('A')} − ${I('B')}) = cos ${I('A')} cos ${I('B')} + sin ${I('A')} sin ${I('B')}` }]] },
  { key: 'cos+', c: [74, 98], size: 12.5, lines: [[{ t: `cos(${I('A')} + ${I('B')})` }]] },
  { key: 'sin±', c: [190, 98], size: 12.5, lines: [[{ t: `sin(${I('A')} ± ${I('B')})` }]] },
  { key: 'tan±', c: [288, 98], size: 12.5, lines: [[{ t: `tan(${I('A')} ± ${I('B')})` }]] },
  { key: 'double', c: [110, 172], size: 12.5, lines: [[{ t: `Double angle [${I('B')} = ${I('A')}]` }]] },
  { key: 'p2s', c: [276, 172], size: 12.5, lines: [[{ t: 'Product → Sum' }]] },
  { key: 'half', c: [64, 252], size: 12.5, lines: [[{ t: 'Half angle' }], [{ t: `[${I('A')} → ` }, { num: I('A'), den: '2' }, { t: ']' }]] },
  { key: 'triple', c: [166, 252], size: 12.5, lines: [[{ t: 'Triple angle' }], [{ t: `[2${I('A')} + ${I('A')}]` }]] },
  { key: 's2p', c: [276, 252], size: 12.5, lines: [[{ t: 'Sum → Product' }]] },
  { key: 'rcos', c: [196, 350], size: 12.5, lines: [[{ t: `${I('a')} cos ${I('x')} + ${I('b')} sin ${I('x')} = ${I('R')} cos(${I('x')} − ${I('α')})` }]] },
];
/** The tree's edges, parent to child, with the book's label on each that has one. */
const EDGES312: [string, string, string?][] = [
  ['root', 'cos+', `${I('B')} → −${I('B')}`], ['root', 'sin±', 'cofunction'], ['root', 'tan±', 'ratio'],
  ['cos+', 'double'], ['sin±', 'double'], ['sin±', 'p2s', 'add / subtract|pairs'],
  ['double', 'half'], ['double', 'triple'], ['p2s', 's2p', 'substitute'],
];
const fig312: Diagram = {
  id: 'm11-03-fig-3.12',
  topic: 4,
  name: 'The derivation tree',
  cases: [{ chip: 'From cos(A − B)', cap: CAP312 }],
  draw() {
    const s = new Sketch(W, 378), nodes = NODES312(), by = (k: string) => nodes.find((n) => n.key === k)!;
    nodes.forEach((n) => {
      const b = (n.box = nodeBox(n)), hi = n.key === 'rcos', root = n.key === 'root';
      s.add(`<rect x="${r1(b[0])}" y="${r1(b[1])}" width="${r1(b[2] - b[0])}" height="${r1(b[3] - b[1])}" rx="7" fill="none" stroke="${hi ? C.mari : C.ink}" stroke-width="${root || hi ? 2 : 1.3}"/>`);
      keep(s, [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]], [b[0], b[1]]], `node:${n.key}`);
      const base = n.lines.length === 1 ? [n.c[1] + n.size * 0.36] : [n.c[1] - 12, n.c[1] + 11];
      n.lines.forEach((l, i) => runs(s, n.c[0], base[i], l, { size: n.size, anchor: 'middle' }));
    });
    // each edge from the parent's bottom to the child's top, aimed between their centres
    const ends = (p: Node, c: Node): [P, P] => {
      const pb = p.box!, cb = c.box!, dx = c.c[0] - p.c[0];
      const ax = Math.max(pb[0] + 14, Math.min(pb[2] - 14, p.c[0] + dx * 0.55)), bx = Math.max(cb[0] + 14, Math.min(cb[2] - 14, c.c[0] - dx * 0.3));
      return [[ax, pb[3] + 2], [bx, cb[1] - 2]];
    };
    const edgeLab: Record<string, [number, number, 'start' | 'end']> = { 'cos+': [-6, -2, 'end'], 'sin±': [-6, 4, 'end'], 'tan±': [7, 0, 'start'], p2s: [9, -6, 'start'], s2p: [-7, 5, 'end'] };
    EDGES312.forEach(([a, b, t]) => {
      const [p, q] = ends(by(a), by(b));
      arrow(s, p, q, { color: C.slate, w: 1.3, name: `edge:${a}>${b}` });
      if (t) { const m: P = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], [dx, dy, an] = edgeLab[b]; t.split('|').forEach((line, k) => lab(s, m[0] + dx + k * 14, m[1] + dy + k * 14, line, { size: 11.5, anchor: an, color: C.slate })); }
    });
    // the shortcut, the highlight: dashed from the master key down the left to a cos x + b sin x = R cos(x − α)
    const root = by('root').box!, rc = by('rcos').box!, xr = 10, yr = (root[1] + root[3]) / 2, yb = (rc[1] + rc[3]) / 2;
    path(s, [[root[0] - 2, yr], [xr, yr], [xr, yb], [rc[0] - 10, yb]], { color: C.mari, w: 1.5, dash: true, name: 'shortcut' });
    arrow(s, [rc[0] - 12, yb], [rc[0] - 2, yb], { color: C.mari, w: 1.5, name: 'shortcut' });
    lab(s, 20, 298, `expand ${I('R')} cos(${I('x')} − ${I('α')})`, { size: 11.5, anchor: 'start', color: C.amber });
    lab(s, 20, 314, 'with the master key', { size: 11.5, anchor: 'start', color: C.amber });
    return s;
  },
  check() {
    const s = fig312.draw(fig312.cases[0]), out: Check[] = [];
    // the identities behind each edge, at sample angles
    const As = [0.3, 1.1, 2.5, -0.7], Bs = [0.2, -0.9, 1.7, 0.4], cm = (A: number, B: number) => Math.cos(A) * Math.cos(B) + Math.sin(A) * Math.sin(B), ok = (f: (A: number, B: number) => boolean) => As.every((A, i) => f(A, Bs[i]));
    out.push(['The master key: cos(A − B) = cos A cos B + sin A sin B at every sample', ok((A, B) => close(Math.cos(A - B), cm(A, B), 1e-12))]);
    out.push(['B → −B gives cos(A + B) = cos A cos B − sin A sin B; the cofunction sin θ = cos(π/2 − θ) gives sin(A ± B) = sin A cos B ± cos A sin B; their ratio gives tan(A ± B)', ok((A, B) => close(Math.cos(A + B), cm(A, -B), 1e-12) && close(Math.sin(A + B), cm(Math.PI / 2 - A, B), 1e-12) && close(Math.sin(A - B), Math.sin(A) * Math.cos(B) - Math.cos(A) * Math.sin(B), 1e-12) && close(Math.tan(A + B), (Math.tan(A) + Math.tan(B)) / (1 - Math.tan(A) * Math.tan(B)), 1e-9))]);
    out.push(['B = A gives the double angles, A → A/2 the half angles, 2A + A the triple angles; adding and subtracting sin(A ± B) gives product → sum, substituting gives sum → product', As.every((A) => close(Math.sin(2 * A), 2 * Math.sin(A) * Math.cos(A), 1e-12) && close(Math.cos(A), 1 - 2 * Math.sin(A / 2) ** 2, 1e-12) && close(Math.sin(3 * A), 3 * Math.sin(A) - 4 * Math.sin(A) ** 3, 1e-12)) && ok((A, B) => close(2 * Math.sin(A) * Math.cos(B), Math.sin(A + B) + Math.sin(A - B), 1e-12) && close(Math.sin(A) + Math.sin(B), 2 * Math.sin((A + B) / 2) * Math.cos((A - B) / 2), 1e-12))]);
    const R = 5, al = Math.atan2(4, 3);
    out.push(['Expanding R cos(x − α) with the master key gives a cos x + b sin x with a = R cos α, b = R sin α (3 cos x + 4 sin x = 5 cos(x − α), tan α = 4/3)', [0, 0.7, 2, 4].every((x) => close(3 * Math.cos(x) + 4 * Math.sin(x), R * Math.cos(x - al), 1e-12))]);
    const nodes = NODES312(), by = (k: string) => nodes.find((n) => n.key === k)!;
    const edges = EDGES312.map(([a, b]) => linesNamed(s, new RegExp(`^edge:${a.replace(/[+±]/g, '.')}>${b.replace(/[+±]/g, '.')}$`))[0]);
    out.push([`Nine arrows, each from its parent box's bottom down to its child's top, as printed (${EDGES312.map(([a, b]) => `${a} → ${b}`).join(', ')})`, edges.every((e, i) => e && e.pts[0][1] > e.pts[1][1] - 999 && Math.abs(e.pts[0][1] - nodeBox(by(EDGES312[i][0]))[3]) < 3 && Math.abs(e.pts[1][1] - nodeBox(by(EDGES312[i][1]))[1]) < 3)]);
    const boxes = nodes.map(nodeBox), apart = boxes.every((a, i) => boxes.every((b, j) => i >= j || a[2] + 6 <= b[0] || b[2] + 6 <= a[0] || a[3] + 6 <= b[1] || b[3] + 6 <= a[1]));
    out.push([`The ten boxes lie apart and inside the phone-width frame (the tree stays in its book shape: three across at most): ${boxes.map((b) => b.map((v) => fmt(v, 0)).join(',')).join(' | ')}`, apart && boxes.every((b) => b[0] >= 2 && b[2] <= W - 2)]);
    out.push(['The dashed shortcut, the highlight, runs from the master key to the R cos(x − α) box and ends in an arrow at it', linesNamed(s, /^shortcut$/).length === 2]);
    out.push(labelsCheck(s, ['cos(A − B) = cos A cos B + sin A sin B', 'cos(A + B)', 'sin(A ± B)', 'tan(A ± B)', 'Double angle [B = A]', 'Product → Sum', 'Half angle', '[A → A/2]', 'Triple angle', '[2A + A]', 'Sum → Product', 'a cos x + b sin x = R cos(x − α)', 'B → −B', 'cofunction', 'ratio', 'add / subtract', 'pairs', 'substitute', 'expand R cos(x − α)', 'with the master key']));
    out.push(stackedCheck(s, ['A/2']));
    out.push(noBadChars(s, fig312));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.13 · the chord proof of cos(A − B) (Topic 05, p. 228)        */
/* ===================================================================== */
const CAP313 = 'The chord proof of cos(<i>A</i> − <i>B</i>): two chords subtending equal central angles must be equal.';
/** p. 228 draws A = 100°, B = 35°; B is taken as 30° here (A − B = 70°) to open the wedge that holds the label A − B. */
const A313 = 100, B313 = 30;
const O313: P = [136, 168], R313 = 108;
/** The grey arcs A and B run this far outside the circle; P2's label starts at x = P2X313, clear of arc A. */
const ARC313 = { A: 14, B: 7 }, P2X313 = 244;
const fig313: Diagram = {
  id: 'm11-03-fig-3.13',
  topic: 4,
  name: 'The chord proof of cos(A − B)',
  cases: [{ chip: 'Equal chords', cap: CAP313 }],
  draw() {
    const s = new Sketch(W, 344), O = O313, r = R313;
    const P1 = pol(O, r, A313), P2 = pol(O, r, B313), P3 = pol(O, r, A313 - B313), P4 = pol(O, r, 0);
    axes(s, 20, 316, O[1], 290, 18, O[0]);
    lab(s, O[0] - 7, O[1] + 17, I('O'), { anchor: 'end', size: 14 });
    path(s, arcPts(O, r, 0, 360, 240), { color: C.slate, w: 1.6, name: 'circle' });
    // the radii to P1, P2, P3, grey
    [P1, P2, P3].forEach((p, i) => path(s, [O, p], { color: C.grey, w: 1.1, name: `radius:${i + 1}` }));
    // P2's label sits above and right of P2, outside the grey arc A, so the arcs A and B run unbroken from 0°
    lab(s, P1[0] - 9, P1[1] - 10, `${I('P')}<sub>1</sub>(cos ${I('A')}, sin ${I('A')})`, { anchor: 'end', size: 12.5 });
    lab(s, P2X313, P2[1] - 16, `${I('P')}<sub>2</sub>(cos ${I('B')}, sin ${I('B')})`, { anchor: 'start', size: 11.5 });
    lab(s, pol(O, r + 34, 74)[0], pol(O, r + 34, 74)[1] + 2, `${I('P')}<sub>3</sub>`, { size: 13, color: C.amber });
    lab(s, P4[0] + 8, P4[1] + 19, `${I('P')}<sub>4</sub>`, { anchor: 'start', size: 13, color: C.amber });
    lab(s, ...pol(O, r + 32, 56), I('A'), { size: 13, color: C.slate });
    lab(s, ...pol(O, r + 34, 11), I('B'), { size: 13, color: C.slate });
    path(s, arcPts(O, r + ARC313.A, 0, A313, 120), { color: C.grey, w: 1.8, name: 'arc:A' });
    path(s, arcPts(O, r + ARC313.B, 0, B313, 60), { color: C.grey, w: 1.8, name: 'arc:B' });
    // the angle A − B at the centre twice: between OP2 and OP1 (ink), and between OP4 and OP3 (the highlight)
    angle(s, O, 46, B313, A313, { color: C.ink, w: 1.5, name: 'angle:P1OP2' });
    lab(s, ...pol(O, 68, 46), `${I('A')} − ${I('B')}`, { size: 11.5 });
    angle(s, O, 30, 0, A313 - B313, { color: C.mari, w: 1.7, name: 'angle:P3OP4' });
    lab(s, ...pol(O, 60, 9), `${I('A')} − ${I('B')}`, { size: 12.5, color: C.amber });
    // the two chords: P1P2 ink, P3P4 the highlight
    path(s, [P1, P2], { color: C.ink, w: 3, name: 'chord:P1P2' });
    path(s, [P3, P4], { color: C.mari, w: 3, name: 'chord:P3P4' });
    pt(s, P1, 'P1'); pt(s, P2, 'P2'); pt(s, P3, 'P3', C.mari); pt(s, P4, 'P4', C.mari);
    lab(s, W / 2, 312, `${I('P')}<sub>3</sub>(cos(${I('A')} − ${I('B')}), sin(${I('A')} − ${I('B')})), ${I('P')}<sub>4</sub>(1, 0)`, { size: 12.5 });
    lab(s, W / 2, 332, `equal central angles ⇒ equal chords: ${I('P')}<sub>1</sub>${I('P')}<sub>2</sub> = ${I('P')}<sub>3</sub>${I('P')}<sub>4</sub>`, { size: 12.5 });
    return s;
  },
  check() {
    const s = fig313.draw(fig313.cases[0]), out: Check[] = [], O = O313, r = R313;
    const at = (n: string) => { const p = dotAt(s, n)!; return [(p[0] - O[0]) / r, (O[1] - p[1]) / r] as P; };
    const [p1, p2, p3, p4] = ['P1', 'P2', 'P3', 'P4'].map(at), A = A313 * DEG, B = B313 * DEG;
    out.push([`The four points read back on the unit circle: P1 = (cos A, sin A), P2 = (cos B, sin B), P3 = (cos(A − B), sin(A − B)), P4 = (1, 0), with A = ${A313}°, B = ${B313}°`, close(p1[0], Math.cos(A), 1e-3) && close(p1[1], Math.sin(A), 1e-3) && close(p2[0], Math.cos(B), 1e-3) && close(p3[0], Math.cos(A - B), 1e-3) && close(p3[1], Math.sin(A - B), 1e-3) && close(p4[0], 1, 1e-3) && close(p4[1], 0, 1e-3)]);
    const d12 = len(p1, p2), d34 = len(p3, p4);
    out.push([`The central angles P1OP2 and P3OP4 are both A − B = ${A313 - B313}° (read back: ${fmt(angOf([0, 0], p1) - angOf([0, 0], p2), 1)}° and ${fmt(angOf([0, 0], p3), 1)}°), so the chords are equal: P1P2 = ${fmt(d12, 4)}, P3P4 = ${fmt(d34, 4)}`, close(d12, d34, 1e-3)]);
    const c = Math.cos(A - B), lhs = 2 - 2 * (Math.cos(A) * Math.cos(B) + Math.sin(A) * Math.sin(B)), rhs = 2 - 2 * c;
    out.push([`P1P2² = 2 − 2(cos A cos B + sin A sin B) = ${fmt(lhs, 6)} and P3P4² = 2 − 2 cos(A − B) = ${fmt(rhs, 6)}: equal, so cos(A − B) = cos A cos B + sin A sin B`, close(lhs, rhs, 1e-12) && close((Math.cos(A) - Math.cos(B)) ** 2 + (Math.sin(A) - Math.sin(B)) ** 2, lhs, 1e-12)]);
    out.push(['All four points are filled dots on the circle (decision 10); the chord P3P4 and its angle are the highlight', dotsOf(s).length === 4 && linesNamed(s, /^chord:/).length === 2]);
    out.push(labelsCheck(s, ['P1(cos A, sin A)', 'P2(cos B, sin B)', 'P3', 'P4', 'A', 'B', 'A − B', 'O', 'x', 'y', 'P3(cos(A − B), sin(A − B)), P4(1, 0)', 'equal central angles ⇒ equal chords: P1P2 = P3P4']));
    out.push([`"A − B" printed twice, once in each angle`, s.labels.filter((l) => l.text === 'A − B').length === 2]);
    const arcOk = (n: string, rr: number, end: number) => {
      const ls = linesNamed(s, new RegExp(`^arc:${n}$`)), pts = ls[0]?.pts ?? [];
      return ls.length === 1 && pts.length > 1 && close(angOf(O, pts[0]), 0, 1e-6) && close(angOf(O, pts[pts.length - 1]), end, 1e-6) && pts.every((p) => close(len(O, p), rr, 1e-6));
    };
    out.push([`The grey arcs A and B are each one unbroken stroke from 0°, A to ${A313}° and B to ${B313}° (nothing breaks them, so arc A cannot read as A − B)`, arcOk('A', r + ARC313.A, A313) && arcOk('B', r + ARC313.B, B313)]);
    out.push(noBadChars(s, fig313));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.14 · principal solutions of sin x = 1/2 (Topic 06, p. 235)   */
/* ===================================================================== */
const CAP314 = `The two principal solutions of sin <i>x</i> = ${fr('1', '2')}, at 30° and 150°, each repeating every full turn.`;
const O314: P = [176, 160], R314 = 100;
const fig314: Diagram = {
  id: 'm11-03-fig-3.14',
  topic: 5,
  name: 'Principal solutions of sin x = 1/2',
  cases: [{ chip: 'Two solutions', cap: CAP314 }],
  draw() {
    const s = new Sketch(W, 362), O = O314, r = R314, yl = O[1] - r / 2;
    axes(s, 58, 312, O[1], 282, 32, O[0]);
    lab(s, O[0] - 6, O[1] + 17, I('O'), { anchor: 'end', size: 14 });
    path(s, arcPts(O, r, 0, 360, 240), { color: C.slate, w: 1.6, name: 'circle' });
    // y = 1/2, the highlight, dashed across the circle
    path(s, [[58, yl], [300, yl]], { color: C.mari, w: 1.5, dash: true, name: 'line:half' });
    runs(s, 52, yl + 4, [{ t: `${I('y')} = ` }, { num: '1', den: '2' }], { size: 13, anchor: 'end', color: C.amber });
    const S1 = pol(O, r, 30), S2 = pol(O, r, 150);
    path(s, [O, S1], { color: C.ink, w: 2.2, name: 'radius:30' });
    path(s, [O, S2], { color: C.ink, w: 2.2, name: 'radius:150' });
    angle(s, O, 26, 0, 30, { name: 'angle:30' });
    angle(s, O, 44, 0, 150, { name: 'angle:150' });
    lab(s, ...pol(O, 64, 11), '30°', { size: 12 });
    lab(s, ...pol(O, 60, 108), '150°', { size: 12 });
    pt(s, S1, 'π/6'); pt(s, S2, '5π/6');
    runs(s, S1[0] + 2, S1[1] - 24, [{ t: `${I('θ')} = ` }, { num: 'π', den: '6' }], { size: 13, anchor: 'start' });
    runs(s, S2[0] - 2, S2[1] - 28, [{ t: `${I('θ')} = ` }, { num: '5π', den: '6' }], { size: 13, anchor: 'end' });
    lab(s, W / 2, 306, 'two principal solutions in [0, 2π); each repeats every 2π', { size: 11.5 });
    lab(s, W / 2, 326, 'general solution:', { size: 11.5 });
    runs(s, W / 2, 350, [{ t: `${I('θ')} = ${I('n')}π + (−1)<sup>${I('n')}</sup>` }, { num: 'π', den: '6' }, { t: `, ${I('n')} ∈ ℤ` }], { size: 11.5, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig314.draw(fig314.cases[0]), out: Check[] = [], O = O314, r = R314;
    const read = dotsOf(s).map((d) => angOf(O, d.p)), yl = O[1] - r / 2;
    out.push([`The two solution points read back at ${read.map((a) => `${fmt(a, 2)}°`).join(' and ')}: π/6 and 5π/6, both in [0, 2π)`, close(read[0], 30, 1e-6) && close(read[1], 150, 1e-6)]);
    out.push(['Both lie on the circle and on the dashed line y = 1/2: sin 30° = sin 150° = 1/2, the line drawn half a radius above O', dotsOf(s).every((d) => close(d.p[1], yl, 1e-6) && close(len(d.p, O), r, 1e-6)) && close(Math.sin(Math.PI / 6), 0.5, 1e-12) && close(Math.sin((5 * Math.PI) / 6), 0.5, 1e-12)]);
    const gen = [-3, -2, -1, 0, 1, 2, 3].map((n) => n * Math.PI + (-1) ** n * (Math.PI / 6));
    out.push(['θ = nπ + (−1)ⁿπ/6 gives, for n = 0, 1, 2, …, π/6, 5π/6, 13π/6, 17π/6, …: every one has sin θ = 1/2, and those in [0, 2π) are exactly the two drawn', gen.every((t) => close(Math.sin(t), 0.5, 1e-12)) && gen.filter((t) => t >= 0 && t < 2 * Math.PI).length === 2]);
    out.push(['The two points are filled dots on the circle (decision 10); the angle arcs 30° and 150° run from the x-axis', dotsOf(s).length === 2 && linesNamed(s, /^angle:/).length === 2]);
    out.push(labelsCheck(s, ['θ = π/6', 'θ = 5π/6', 'y = 1/2', '30°', '150°', 'x', 'y', 'O', 'two principal solutions in [0, 2π); each repeats every 2π', 'general solution:', 'θ = nπ + (−1)nπ/6, n ∈ ℤ']));
    out.push(stackedCheck(s, ['π/6', '5π/6', '1/2']));
    out.push(noBadChars(s, fig314));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.15 · two revolutions of A, one of A/2 (Topic 07, p. 245)     */
/* ===================================================================== */
const CAP315 = `Two revolutions of <i>A</i> against one of ${fr('<i>A</i>', '2')}: the same Quadrant III label sends ${fr('<i>A</i>', '2')} into Quadrant II or Quadrant IV.`;
const G315 = { x0: 30, x1: 326, top: [36, 76] as [number, number], bot: [188, 228] as [number, number] };
const QN = ['I', 'II', 'III', 'IV'];
/** px for an angle on a bar running 0 to `full` degrees. */
const bx315 = (deg: number, full: number) => G315.x0 + ((G315.x1 - G315.x0) * deg) / full;
/** p. 245: the two Quadrant III stretches of A, and where A/2 lands. */
const MAP315: { a: [number, number]; h: [number, number]; dir: 1 | -1 }[] = [{ a: [180, 270], h: [90, 135], dir: 1 }, { a: [540, 630], h: [270, 315], dir: -1 }];
const fig315: Diagram = {
  id: 'm11-03-fig-3.15',
  topic: 6,
  name: 'Two revolutions of A, one of A/2',
  cases: [{ chip: 'Quadrant III', cap: CAP315 }],
  draw() {
    const s = new Sketch(W, 336), G = G315;
    lab(s, (G.x0 + G.x1) / 2, 22, `two full revolutions of ${I('A')}`, { size: 12.5, color: C.slate });
    lab(s, G.x0 - 8, (G.top[0] + G.top[1]) / 2 + 6, I('A'), { size: 16, anchor: 'end' });
    runs(s, G.x0 - 7, (G.bot[0] + G.bot[1]) / 2 + 4, [{ num: I('A'), den: '2' }], { size: 13, anchor: 'end' });
    const bar = (y: [number, number], full: number, cells: number, ticks: number, name: string) => {
      path(s, [[G.x0, y[0]], [G.x1, y[0]], [G.x1, y[1]], [G.x0, y[1]], [G.x0, y[0]]], { color: C.slate, w: 1.2, name: `bar:${name}` });
      for (let k = 1; k < cells; k++) path(s, [[bx315((full * k) / cells, full), y[0]], [bx315((full * k) / cells, full), y[1]]], { color: C.grey, w: 1, name: `cell:${name}` });
      for (let k = 0; k < cells; k++) {
        const q = QN[k % 4], hi = name === 'A' && q === 'III';
        lab(s, bx315((full * (k + 0.5)) / cells, full), y[0] + 14, q, { size: 11, color: hi ? C.amber : C.slate });
      }
      for (let k = 0; k <= ticks; k++) {
        const x = bx315((full * k) / ticks, full);
        tick(s, x, y[1] + 2);
        lab(s, x, y[1] + 18, `${(full * k) / ticks}°`, { size: 10.5, color: C.text });
      }
    };
    bar(G.top as [number, number], 720, 8, 8, 'A');
    bar(G.bot as [number, number], 360, 4, 8, 'A/2');
    // the mapping labels on their own arrows, two rows
    const rows = [120, 156];
    const labs = MAP315.map((m, i) => lab(s, (bx315(m.a[0], 720) + bx315(m.a[1], 720)) / 2 + (i ? -10 : 8), rows[i], `(${m.a[0]}°, ${m.a[1]}°) → (${m.h[0]}°, ${m.h[1]}°)`, { size: 11.5, color: C.amber }));
    MAP315.forEach((m) => m.a.forEach((a) => {
      const x = bx315(a, 720), y0 = G.top[1] + 26, y1 = G.bot[0] - 2;
      brokenPath(s, [[x, y0], [x, y1 - 9]], labs, 4.5, { color: C.mari, w: 1.3, dash: '4 3', name: `map:${a}` });
      arrow(s, [x, y1 - 9], [x, y1], { color: C.mari, w: 1.3, name: `map:${a}` });
    }));
    runs(s, (G.x0 + G.x1) / 2, 268, [{ t: 'one revolution of ' }, { num: I('A'), den: '2' }, { t: ' (same width, half scale)' }], { size: 12.5, anchor: 'middle', color: C.slate });
    runs(s, W / 2, 302, [{ t: `the same label ‘Quadrant III’ for ${I('A')} sends ` }, { num: I('A'), den: '2' }, { t: ' into' }], { size: 12.5, anchor: 'middle' });
    lab(s, W / 2, 326, 'Quadrant II or Quadrant IV', { size: 12.5 });
    // hatching: the Quadrant III cells of A and the cells of A/2 they land in
    MAP315.forEach((m, i) => {
      const cell = (y: [number, number], a: number, b: number, full: number): Rect => [bx315(a, full), y[0], bx315(b, full), y[1]];
      [cell(G.top, m.a[0], m.a[1], 720), cell(G.bot, m.h[0], m.h[1], 360)].forEach((r, k) => {
        const inner: Rect = [r[0] + 3, r[1] + 3, r[2] - 3, r[3] - 3];
        addHatch(s, `map${i}:${k}`, hatch(s, (p) => p[0] > inner[0] && p[0] < inner[2] && p[1] > inner[1] && p[1] < inner[3] && toLines(s, p, /^(hatch|map)/) > 3, inner, { step: 4.5, dir: m.dir, gap: 4 }));
      });
    });
    return s;
  },
  check() {
    const s = fig315.draw(fig315.cases[0]), out: Check[] = [], G = G315;
    out.push(['Same width, half scale: the A/2 bar runs 0° to 360° over the same length as the A bar\'s 0° to 720°, so every angle A sits straight above A/2', [0, 90, 180, 270, 540, 630, 720].every((a) => close(bx315(a, 720), bx315(a / 2, 360)))]);
    out.push(['Halving the Quadrant III stretches: (180°, 270°)/2 = (90°, 135°), inside Quadrant II; (540°, 630°)/2 = (270°, 315°), inside Quadrant IV', MAP315.every((m) => m.h[0] === m.a[0] / 2 && m.h[1] === m.a[1] / 2) && Math.floor(135 / 90) === 1 && Math.floor(90 / 90) === 1 && Math.floor(270 / 90) === 3 && Math.floor(314 / 90) === 3]);
    out.push(['Both A-stretches are Quadrant III: 180°–270° and 540°–630° = 180°–270° plus one full turn', (540 - 360) === 180 && (630 - 360) === 270]);
    const arrows = MAP315.flatMap((m) => m.a.map((a) => linesNamed(s, new RegExp(`^map:${a}$`)).flatMap((l) => l.pts)));
    out.push(['Four dashed arrows run straight down from 180°, 270°, 540°, 630° on A to 90°, 135°, 270°, 315° on A/2', arrows.every((pts, i) => { const a = MAP315[i >> 1].a[i & 1]; return pts.every((p) => close(p[0], bx315(a, 720))) && Math.max(...pts.map((p) => p[1])) >= G.bot[0] - 2.01; })]);
    const inCell = (name: string, x0: number, x1: number, y: [number, number]) => { const h = hatchOf(s, name); return h.length > 3 && allIn(h, (p) => p[0] > x0 && p[0] < x1 && p[1] > y[0] && p[1] < y[1]); };
    out.push(['The shaded cells hatched (the first revolution\'s at 45°, the second\'s at −45°), every stroke inside its cell: A in (180°, 270°) and (540°, 630°), A/2 in (90°, 135°) and (270°, 315°)', MAP315.every((m, i) => inCell(`map${i}:0`, bx315(m.a[0], 720), bx315(m.a[1], 720), G.top) && inCell(`map${i}:1`, bx315(m.h[0], 360), bx315(m.h[1], 360), G.bot))]);
    out.push(labelsCheck(s, ['two full revolutions of A', 'A', 'A/2', 'I', 'II', 'III', 'IV', '0°', '90°', '180°', '270°', '360°', '450°', '540°', '630°', '720°', '45°', '135°', '225°', '315°', '(180°, 270°) → (90°, 135°)', '(540°, 630°) → (270°, 315°)', 'one revolution of A/2 (same width, half scale)', 'the same label ‘Quadrant III’ for A sends A/2 into', 'Quadrant II or Quadrant IV']));
    out.push(stackedCheck(s, ['A/2']));
    out.push(noBadChars(s, fig315));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.16 · the pentagon's central triangle (Topic 07, p. 250)      */
/* ===================================================================== */
const CAP316 = 'Where 18 degrees comes from: the central triangle of a regular pentagon, apex 72° and base angles 54°.';
type Case316 = { chip: string; cap: string; k: 0 | 1 };
const O316a: P = [170, 132], R316a = 98;
const O316b: P = [170, 262], L316 = 196;
const fig316: Diagram = {
  id: 'm11-03-fig-3.16',
  topic: 6,
  name: 'The pentagon and its central triangle',
  cases: [{ chip: 'Pentagon', cap: CAP316, k: 0 }, { chip: 'Central triangle', cap: CAP316, k: 1 }],
  draw(c: Case316) {
    if (c.k === 0) {
      const s = new Sketch(W, 278), O = O316a, r = R316a, V = [54, 126, 198, 270, 342].map((a) => pol(O, r, a));
      path(s, arcPts(O, r, 0, 360, 240), { color: C.slate, w: 1.6, name: 'circle' });
      [V[2], V[3], V[4]].forEach((v, i) => path(s, [O, v], { color: C.grey, w: 1.1, name: `radius:${i}` }));
      path(s, [O, V[0]], { color: C.mari, w: 1.4, name: 'tri' });
      path(s, [O, V[1]], { color: C.mari, w: 1.4, name: 'tri' });
      path(s, [...V, V[0]], { color: C.ink, w: 2.4, name: 'pentagon' });
      angle(s, O, 17, 54, 126, { color: C.mari, w: 2, name: 'angle:72' });
      lab(s, O[0], O[1] - 30, '72°', { size: 13, color: C.amber });
      V.forEach((v, i) => pt(s, v, `V${i}`));
      pt(s, O, 'O');
      lab(s, O[0] + 10, O[1] + 24, I('O'), { anchor: 'start', size: 14 });
      lab(s, W / 2, 264, '5 × 72° = 360°', { size: 13.5 });
      const tri = [O, V[0], V[1]];
      const inTri = (p: P) => { const [a, b, d] = tri, sg = (u: P, v: P, w: P) => (w[0] - u[0]) * (v[1] - u[1]) - (v[0] - u[0]) * (w[1] - u[1]); const x = sg(a, b, p), y = sg(b, d, p), z = sg(d, a, p); return (x > 0 && y > 0 && z > 0) || (x < 0 && y < 0 && z < 0); };
      addHatch(s, 'tri', hatch(s, (p) => inTri(p) && toLines(s, p) > 3.5, [V[1][0], V[0][1], V[0][0], O[1]], { step: 6 }));
      return s;
    }
    const s = new Sketch(W, 326), O = O316b, L = L316, Bl = pol(O, L, 126), Br = pol(O, L, 54), M: P = [O[0], Bl[1]];
    path(s, [O, Bl, Br, O], { color: C.mari, w: 1.6, name: 'tri' });
    // OM dashed, up past M; the dotted line 18° off it
    path(s, [O, [O[0], 26]], { color: C.slate, w: 1.4, dash: true, name: 'OM' });
    const tip = pol(O, (O[1] - 40) / Math.cos(18 * DEG), 72);
    path(s, [O, tip], { color: C.slate, w: 1.2, dash: '2 3', name: 'dotted' });
    square(s, M, [1, 0], [0, 1], 9);
    angle(s, Bl, 22, -54, 0, { color: C.slate, w: 1.5, name: 'angle:54l' });
    angle(s, Br, 22, 180, 234, { color: C.slate, w: 1.5, name: 'angle:54r' });
    angle(s, O, 40, 54, 126, { color: C.mari, w: 2, name: 'angle:72' });
    angle(s, O, 112, 54, 126, { color: C.mari, w: 2, name: 'angle:36' });
    angle(s, O, 202, 72, 90, { color: C.slate, w: 1.6, name: 'angle:18' });
    pt(s, M, 'M', C.slate);
    pt(s, O, 'O');
    pt(s, Bl, 'Bl'); pt(s, Br, 'Br');
    lab(s, M[0] - 8, M[1] - 9, I('M'), { anchor: 'end', size: 14, color: C.slate });
    lab(s, O[0], O[1] + 20, I('O'), { size: 14 });
    lab(s, Bl[0] - 2, Bl[1] - 14, '54°', { size: 13, color: C.slate });
    lab(s, Br[0] + 2, Br[1] - 14, '54°', { size: 13, color: C.slate });
    lab(s, O[0] - 40, O[1] - 124, '36°', { size: 13, color: C.amber });
    lab(s, O[0] + 66, O[1] - 124, '36°', { size: 13, color: C.amber });
    lab(s, O[0] - 7, O[1] - 50, '72°', { size: 13, color: C.amber, anchor: 'end' });
    runs(s, tip[0] + 7, 30, [{ t: '18° = ' }, { num: '36°', den: '2' }], { size: 13, anchor: 'start', color: C.slate });
    runs(s, W / 2, 306, [{ t: 'sin 18° = ' }, { num: '√5 − 1', den: '4' }, { t: ',   cos 36° = ' }, { num: '√5 + 1', den: '4' }], { size: 13.5, anchor: 'middle' });
    const inTri = (p: P) => { const sg = (u: P, v: P, w: P) => (w[0] - u[0]) * (v[1] - u[1]) - (v[0] - u[0]) * (w[1] - u[1]); const x = sg(O, Bl, p), y = sg(Bl, Br, p), z = sg(Br, O, p); return (x > 0 && y > 0 && z > 0) || (x < 0 && y < 0 && z < 0); };
    addHatch(s, 'tri', hatch(s, (p) => inTri(p) && toLines(s, p) > 3.5, [Bl[0], Bl[1], Br[0], O[1]], { step: 7 }));
    return s;
  },
  check(c: Case316) {
    const s = fig316.draw(c), out: Check[] = [];
    out.push(['Five equal central angles fill the turn: 360° / 5 = 72°, and 5 × 72° = 360°', 360 / 5 === 72 && 5 * 72 === 360]);
    out.push(['The central triangle is isosceles (two radii), so each base angle is (180° − 72°) / 2 = 54°; OM bisects the apex: 72° / 2 = 36° each side, and 36° / 2 = 18°', (180 - 72) / 2 === 54 && 72 / 2 === 36 && 36 / 2 === 18]);
    const s18 = (Math.sqrt(5) - 1) / 4, c36 = (Math.sqrt(5) + 1) / 4;
    out.push([`sin 18° = (√5 − 1)/4 = ${fmt(s18, 6)} and cos 36° = (√5 + 1)/4 = ${fmt(c36, 6)}, matching sin 18° = ${fmt(Math.sin(18 * DEG), 6)}, cos 36° = 1 − 2 sin² 18° = ${fmt(Math.cos(36 * DEG), 6)}`, close(s18, Math.sin(18 * DEG), 1e-12) && close(c36, Math.cos(36 * DEG), 1e-12) && close(c36, 1 - 2 * s18 * s18, 1e-12)]);
    const H = hatchOf(s, 'tri');
    if (c.k === 0) {
      const O = O316a, vs = dotsOf(s).filter((d) => d.name.startsWith('V')).map((d) => angOf(O, d.p)).sort((a, b) => a - b);
      out.push([`The five vertices read back on the circle at ${vs.map((a) => `${fmt(a, 1)}°`).join(', ')}: 72° apart, the top edge level`, vs.every((a, i) => i === 0 || close(a - vs[i - 1], 72, 1e-6)) && dotsOf(s).filter((d) => d.name.startsWith('V')).every((d) => close(len(d.p, O), R316a, 1e-6))]);
      out.push([`The central triangle, the book's shaded one, hatched (${H.length} strokes), every stroke inside it`, H.length > 10 && allIn(H, (p) => p[1] < O[1] && Math.abs(p[0] - O[0]) < (O[1] - p[1]) * Math.tan(36 * DEG) + 0.5)]);
      out.push(labelsCheck(s, ['72°', 'O', '5 × 72° = 360°']));
    } else {
      const O = O316b, Bl = dotAt(s, 'Bl')!, Br = dotAt(s, 'Br')!, M = dotAt(s, 'M')!;
      const apex = angOf(O, Bl) - angOf(O, Br), base = Math.atan2(O[1] - Bl[1], O[0] - Bl[0]) / DEG;
      out.push([`Read back: apex angle ${fmt(apex, 3)}°, base angle ${fmt(base, 3)}°, OB = OB′ = ${fmt(len(O, Bl), 2)}; M the midpoint of the base, OM ⊥ the base`, close(apex, 72, 1e-6) && close(base, 54, 1e-6) && close(len(O, Bl), len(O, Br), 1e-9) && close(M[0], (Bl[0] + Br[0]) / 2, 1e-9) && close(M[1], Bl[1], 1e-9)]);
      const dot = linesNamed(s, /^dotted$/)[0].pts, ang = Math.atan2(dot[1][0] - dot[0][0], dot[0][1] - dot[1][1]) / DEG;
      out.push([`The dotted line leaves O at ${fmt(ang, 3)}° from OM: 18° = 36°/2`, close(ang, 18, 1e-6)]);
      out.push([`The triangle, the book's shaded one, hatched (${H.length} strokes), every stroke inside it`, H.length > 30 && allIn(H, (p) => p[1] > Bl[1] && p[1] < O[1] && Math.abs(p[0] - O[0]) < (O[1] - p[1]) * Math.tan(36 * DEG) + 0.5)]);
      out.push(labelsCheck(s, ['M', 'O', '54°', '36°', '72°', '18° = 36°/2', 'sin 18° = √5 − 1/4,   cos 36° = √5 + 1/4']));
      out.push(stackedCheck(s, ['36°/2', '√5 − 1/4', '√5 + 1/4']));
    }
    out.push(noBadChars(s, fig316));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Figure 3.17 · the circumcircle and the sine rule (Topic 08, p. 259)   */
/* ===================================================================== */
const CAP317 = `The circumcircle turns the sine rule into a length: the perpendicular from <i>O</i> to <i>BC</i> gives ${fr('<i>a</i>', '2')} = <i>R</i> sin <i>A</i>.`;
/** p. 259: B and C level below O (the book's 215° and 325°, opened to 210° and 330° to give the a/2 label room under BC), so A = 60° and
 *  BOC = 2A = 120°. A sits at 120° (the book about 95°) so the triangle reads 60°, 75°, 45°, not a near-equilateral special case. */
const O317: P = [172, 166], R317 = 130, ANG317 = { A: 120, B: 210, C: 330 }, BOM317 = 45;
const fig317: Diagram = {
  id: 'm11-03-fig-3.17',
  topic: 7,
  name: 'The circumcircle and the sine rule',
  cases: [{ chip: 'a = 2R sin A', cap: CAP317 }],
  draw() {
    const s = new Sketch(W, 366), O = O317, r = R317, A = pol(O, r, ANG317.A), B = pol(O, r, ANG317.B), Cc = pol(O, r, ANG317.C), M: P = [O[0], B[1]];
    path(s, arcPts(O, r, 0, 360, 240), { color: C.slate, w: 1.6, name: 'circle' });
    path(s, [B, A, Cc], { color: C.ink, w: 2.2, name: 'sides:cb' });
    path(s, [B, Cc], { color: C.mari, w: 2.6, name: 'side:a' });
    path(s, [B, O, Cc], { color: C.slate, w: 1.4, name: 'radii' });
    path(s, [O, M], { color: C.slate, w: 1.4, dash: true, name: 'OM' });
    square(s, M, [-1, 0], [0, -1], 9);
    const aA = angOf(A, B), aC = angOf(A, Cc);
    angle(s, A, 30, aA, aC, { name: 'angle:A' });
    angle(s, O, 30, ANG317.B, ANG317.C, { color: C.mari, w: 2, name: 'angle:2A' });
    angle(s, O, BOM317, ANG317.B, 270, { color: C.slate, w: 1.6, name: 'angle:BOM' });
    [['A', A], ['B', B], ['C', Cc], ['O', O], ['M', M]].forEach(([n, p]) => pt(s, p as P, n as string));
    lab(s, A[0], A[1] - 13, I('A'), { size: 16 });
    lab(s, B[0] - 9, B[1] + 6, I('B'), { anchor: 'end', size: 16 });
    lab(s, Cc[0] + 9, Cc[1] + 6, I('C'), { anchor: 'start', size: 16 });
    lab(s, O[0] - 8, O[1] - 9, I('O'), { anchor: 'end', size: 14 });
    lab(s, M[0] + 6, M[1] + 18, I('M'), { anchor: 'start', size: 14 });
    const bis = (aA + aC) / 2;
    lab(s, ...pol(A, 46, bis), I('A'), { size: 14 });
    lab(s, (A[0] + B[0]) / 2 - 12, (A[1] + B[1]) / 2, I('c'), { size: 15 });
    lab(s, (A[0] + Cc[0]) / 2 + 12, (A[1] + Cc[1]) / 2 - 6, I('b'), { size: 15 });
    lab(s, (O[0] + B[0]) / 2 - 2, (O[1] + B[1]) / 2 - 10, I('R'), { size: 14, color: C.slate });
    lab(s, (O[0] + Cc[0]) / 2 - 9, (O[1] + Cc[1]) / 2 + 16, I('R'), { size: 14, color: C.slate });
    lab(s, ...pol(O, BOM317 + 18, 240), I('A'), { size: 13, color: C.slate });
    lab(s, ...pol(O, 47, 300), `2${I('A')}`, { size: 14, color: C.amber });
    lab(s, Cc[0] - 36, Cc[1] + 20, I('a'), { size: 15, color: C.amber });
    runs(s, 92, B[1] + 21, [{ num: I('a'), den: '2' }, { t: ` = ${I('R')} sin ${I('A')}` }], { size: 11, anchor: 'start', color: C.slate });
    lab(s, W / 2, 330, `${I('OM')} ⊥ ${I('BC')} bisects both the chord and the central angle:`, { size: 12.5 });
    runs(s, W / 2, 354, [{ num: I('a'), den: '2' }, { t: ` = ${I('R')} sin ${I('A')}, so ` }, { num: I('a'), den: `sin ${I('A')}` }, { t: ` = 2${I('R')}` }], { size: 12.5, anchor: 'middle' });
    return s;
  },
  check() {
    const s = fig317.draw(fig317.cases[0]), out: Check[] = [], O = O317, r = R317;
    const A = dotAt(s, 'A')!, B = dotAt(s, 'B')!, Cc = dotAt(s, 'C')!, M = dotAt(s, 'M')!;
    const angAt = (v: P, p: P, q: P) => Math.acos(((p[0] - v[0]) * (q[0] - v[0]) + (p[1] - v[1]) * (q[1] - v[1])) / (len(v, p) * len(v, q))) / DEG;
    const a = len(B, Cc), aA = angAt(A, B, Cc), bOc = angAt(O, B, Cc), bOm = angAt(O, B, M);
    out.push([`A, B, C on the circle of radius R; the angle at A reads back ${fmt(aA, 3)}°, the central angle BOC ${fmt(bOc, 3)}° = 2A (the angle at the centre is twice the angle at the circumference)`, [A, B, Cc].every((p) => close(len(O, p), r, 1e-9)) && close(bOc, 2 * aA, 1e-6)]);
    out.push([`OM ⊥ BC and M the midpoint of BC: BM = MC = ${fmt(len(B, M), 3)}, and OM halves the central angle: BOM = ${fmt(bOm, 3)}° = A`, close(len(B, M), len(M, Cc), 1e-9) && close(M[1], B[1], 1e-9) && close(M[0], O[0], 1e-9) && close(bOm, aA, 1e-6)]);
    out.push([`In the right triangle BOM: a/2 = R sin A (${fmt(a / 2, 4)} = ${fmt(r * Math.sin(aA * DEG), 4)}), so a/sin A = 2R = ${fmt(2 * r, 3)}`, close(a / 2, r * Math.sin(aA * DEG), 1e-6) && close(a / Math.sin(aA * DEG), 2 * r, 1e-6)]);
    out.push(['The five points A, B, C, O, M are filled dots (decision 10); the chord a and the central angle 2A are the highlight', dotsOf(s).length === 5 && linesNamed(s, /^side:a$/).length === 1 && linesNamed(s, /^angle:2A$/).length === 1]);
    out.push(labelsCheck(s, ['A', 'B', 'C', 'O', 'M', 'a', 'b', 'c', 'R', '2A', 'a/2 = R sin A', 'OM ⊥ BC bisects both the chord and the central angle:', 'a/2 = R sin A, so a/sin A = 2R']));
    out.push([`A printed three times (the vertex, its angle, the half central angle BOM) and R twice, as in the book`, s.labels.filter((l) => l.text === 'A').length === 3 && s.labels.filter((l) => l.text === 'R').length === 2]);
    const aB = angAt(B, A, Cc), aCc = angAt(Cc, A, B);
    out.push([`The triangle is not a special case: A, B, C read back ${fmt(aA, 2)}°, ${fmt(aB, 2)}°, ${fmt(aCc, 2)}° (60°, 75°, 45°)`, close(aA, 60, 1e-6) && close(aB, 75, 1e-6) && close(aCc, 45, 1e-6)]);
    out.push(stackedCheck(s, ['a/2', 'a/sin A']));
    out.push(noBadChars(s, fig317));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 09's "Figure 1" · the bands where sin x > 1/2 (p. 278)          */
/* ===================================================================== */
const CAP091 = `The bands where sin <i>x</i> > ${fr('1', '2')}: the curve <i>y</i> = sin <i>x</i> cut by the line <i>y</i> = ${fr('1', '2')}, with the solution intervals (2<i>n</i>π + ${fr('π', '6')}, 2<i>n</i>π + ${fr('5π', '6')}) shaded for <i>n</i> = −1, 0, 1; each band is centred on 2<i>n</i>π + ${fr('π', '2')}, not on its left endpoint.`;
const G091: Gr = { ox: 156, oy: 160, ux: 17, uy: 54 };
const N091 = [-1, 0, 1];
const fig091: Diagram = {
  id: 'm11-03-09-d1',
  topic: 8,
  name: 'The bands where sin x > 1/2',
  cases: [{ chip: 'sin x > 1/2', cap: CAP091 }],
  draw() {
    const s = new Sketch(W, 268), g = G091, P = Math.PI, top = gy(g, 1.38), bot = gy(g, -1.38);
    runs(s, W / 2, 20, [{ t: `sin ${I('x')} > ` }, { num: '1', den: '2' }, { t: ` on (2${I('n')}π + ` }, { num: 'π', den: '6' }, { t: `, 2${I('n')}π + ` }, { num: '5π', den: '6' }, { t: ');' }], { size: 12.5, anchor: 'middle' });
    runs(s, W / 2, 52, [{ t: `each band is centred on 2${I('n')}π + ` }, { num: 'π', den: '2' }, { t: ' (dotted)' }], { size: 12.5, anchor: 'middle' });
    axes(s, gx(g, -2.08 * P), gx(g, 3.17 * P), g.oy, bot + 2, top - 6, g.ox);
    lab(s, g.ox - 6, g.oy - 7, I('O'), { anchor: 'end', size: 13 });
    // the ticks along x carried down on faint guides to their numbers under the plot, as printed
    ([[-2, 1], [-1, 1], [1, 1], [2, 1], [3, 1]] as [number, number][]).forEach(([n, d]) => {
      const x = gx(g, (n * P) / d);
      tick(s, x, g.oy);
      path(s, [[x, g.oy + 6], [x, bot + 4]], { color: C.grey, w: 0.8, dash: '2 3', name: 'guide' });
      runs(s, x, bot + 20, piPieces(n, d), { size: 12, anchor: 'middle', color: C.slate });
    });
    tick(s, g.ox, gy(g, 1), false); tick(s, g.ox, gy(g, -1), false);
    lab(s, g.ox - 8, gy(g, 1) + 4, '1', { anchor: 'end', size: 12, color: C.slate });
    lab(s, g.ox + 8, gy(g, -1) + 4, '−1', { anchor: 'start', size: 12, color: C.slate });
    // y = 1/2, the highlight, dashed
    path(s, [[gx(g, -2.08 * P), gy(g, 0.5)], [gx(g, 3.12 * P), gy(g, 0.5)]], { color: C.mari, w: 1.6, dash: true, name: 'line:half' });
    runs(s, gx(g, -2.08 * P) - 4, gy(g, 0.5) + 4, [{ t: `${I('y')} = ` }, { num: '1', den: '2' }], { size: 12.5, anchor: 'end', color: C.amber });
    // the curve: thin, then thick where it is above the line
    curve(s, g, sample(Math.sin, -2 * P, 3 * P, 600), { color: C.slate, w: 1.5, name: 'curve:sin' });
    N091.forEach((n) => {
      const a = 2 * n * P + P / 6, b = 2 * n * P + (5 * P) / 6, c = 2 * n * P + P / 2;
      curve(s, g, sample(Math.sin, a, b, 80), { color: C.ink, w: 3, name: `curve:above:${n}` });
      path(s, [[gx(g, c), g.oy], [gx(g, c), gy(g, 1) + 3]], { color: C.slate, w: 1, dash: '1.5 2.5', name: `centre:${n}` });
      path(s, [[gx(g, a), g.oy + 7], [gx(g, b), g.oy + 7]], { color: C.mari, w: 4, name: `bar:${n}` });
      lab(s, gx(g, c), g.oy + 26, `${I('n')} = ${n < 0 ? '−' : ''}${Math.abs(n)}`, { size: 12, color: C.amber });
    });
    // the bands hatched, full height, clear of every line
    N091.forEach((n) => {
      const xa = gx(g, 2 * n * P + P / 6), xb = gx(g, 2 * n * P + (5 * P) / 6);
      addHatch(s, `band:${n}`, hatch(s, (p) => p[0] > xa + 2 && p[0] < xb - 2 && p[1] > top + 2 && p[1] < bot - 2 && toLines(s, p) > 4, [xa, top, xb, bot], { step: 6 }));
    });
    return s;
  },
  check() {
    const s = fig091.draw(fig091.cases[0]), out: Check[] = [], g = G091, P = Math.PI;
    const [sin] = curvesBack(s, g, /^curve:sin$/);
    out.push(['The curve read back is y = sin x for −2π ≤ x ≤ 3π, as printed', sin.every((p) => close(p[1], Math.sin(p[0]), 1e-3)) && close(sin[0][0], -2 * P, 1e-3) && close(sin[sin.length - 1][0], 3 * P, 1e-3)]);
    out.push(['sin x = 1/2 at x = π/6 and 5π/6 (and 2π later), sin x > 1/2 strictly between: checked at 400 points of each period', close(Math.sin(P / 6), 0.5, 1e-12) && close(Math.sin((5 * P) / 6), 0.5, 1e-12) && Array.from({ length: 400 }, (_, i) => (i + 0.5) * (2 * P / 400)).every((x) => (Math.sin(x) > 0.5) === (x > P / 6 && x < (5 * P) / 6))]);
    const thick = N091.map((n) => curvesBack(s, g, new RegExp(`^curve:above:${n === -1 ? '-1' : n}$`))[0]);
    out.push(['The thick arcs are exactly the parts of the curve above y = 1/2, one per band, n = −1, 0, 1', thick.every((pts, i) => pts.every((p) => p[1] >= 0.5 - 1e-9 && close(p[1], Math.sin(p[0]), 1e-3)) && close(pts[0][0], 2 * N091[i] * P + P / 6, 1e-3))]);
    out.push(['Each band is centred on 2nπ + π/2 (the dotted line up to the peak, sin = 1), not on its left endpoint: (π/6 + 5π/6)/2 = π/2', close((P / 6 + (5 * P) / 6) / 2, P / 2, 1e-12) && N091.every((n) => { const l = linesNamed(s, new RegExp(`^centre:${n}$`))[0]; return l && close(unPx(g, l.pts[0])[0], 2 * n * P + P / 2, 1e-6); })]);
    out.push([`The three bands, the book's shaded intervals, hatched (${N091.map((n) => hatchOf(s, `band:${n}`).length).join(', ')} strokes), every stroke inside its band, with its bar on the x-axis`, N091.every((n) => { const h = hatchOf(s, `band:${n}`), xa = gx(g, 2 * n * P + P / 6), xb = gx(g, 2 * n * P + (5 * P) / 6); return h.length > 20 && allIn(h, (p) => p[0] > xa && p[0] < xb); })]);
    out.push(labelsCheck(s, ['sin x > 1/2 on (2nπ + π/6, 2nπ + 5π/6);', 'each band is centred on 2nπ + π/2 (dotted)', 'y = 1/2', 'n = −1', 'n = 0', 'n = 1', '−2π', '−π', 'π', '2π', '3π', '1', '−1', 'x', 'y', 'O']));
    out.push(stackedCheck(s, ['1/2', 'π/6', '5π/6', 'π/2']));
    out.push(noBadChars(s, fig091));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 10's "Figure 2" · when the amplitude rule applies (p. 290)      */
/* ===================================================================== */
const CAP101 = 'When the amplitude rule applies and when it does not: 3 sin <i>x</i> + 4 cos <i>x</i> reaches ±5 = ±√(3<sup>2</sup> + 4<sup>2</sup>), while 3 sin<sup>2</sup> <i>x</i> + 4 cos<sup>2</sup> <i>x</i> = 3 + cos<sup>2</sup> <i>x</i> stays trapped in [3, 4] and never approaches 5.';
type Case101 = { chip: string; cap: string; k: 0 | 1 };
const f101 = [(x: number) => 3 * Math.sin(x) + 4 * Math.cos(x), (x: number) => 3 * Math.sin(x) ** 2 + 4 * Math.cos(x) ** 2];
const G101: Gr[] = [{ ox: 34, oy: 176, ux: 42, uy: 21 }, { ox: 34, oy: 290, ux: 42, uy: 38 }];
const AL101 = Math.atan2(4, 3);
const fig101: Diagram = {
  id: 'm11-03-10-d1',
  topic: 9,
  name: 'When the amplitude rule applies',
  cases: [{ chip: '3 sin x + 4 cos x', cap: CAP101, k: 0 }, { chip: '3 sin² x + 4 cos² x', cap: CAP101, k: 1 }],
  draw(c: Case101) {
    const g = G101[c.k], P = Math.PI, s = new Sketch(W, c.k ? 340 : 314), xR = gx(g, 2 * P);
    if (c.k === 0) {
      lab(s, W / 2, 18, `${I('y')} = 3 sin ${I('x')} + 4 cos ${I('x')}`, { size: 13 });
      lab(s, W / 2, 36, `amplitude rule applies: ${I('R')} = 5`, { size: 13 });
    } else {
      lab(s, W / 2, 18, `${I('y')} = 3 sin<sup>2</sup> ${I('x')} + 4 cos<sup>2</sup> ${I('x')} = 3 + cos<sup>2</sup> ${I('x')}`, { size: 13 });
      lab(s, W / 2, 36, 'amplitude rule does not apply: range [3, 4]', { size: 13 });
    }
    const yTop = c.k ? gy(g, 6.1) : gy(g, 5.75), yBot = c.k ? g.oy + 6 : gy(g, -5.75);
    axes(s, g.ox - 6, xR + 18, g.oy, yBot, yTop - 4, g.ox);
    lab(s, g.ox - 6, g.oy + 17, I('O'), { anchor: 'end', size: 13 });
    ([[1, 2], [1, 1], [3, 2], [2, 1]] as [number, number][]).forEach(([n, d]) => {
      const x = gx(g, (n * P) / d);
      tick(s, x, g.oy);
      runs(s, x + (c.k === 0 && n === 3 ? -8 : 0), g.oy + (d === 2 ? 24 : 19), piPieces(n, d), { size: 12, anchor: 'middle', color: C.slate });
    });
    if (c.k === 0) {
      [5, -5].forEach((v) => {
        path(s, [[g.ox - 6, gy(g, v)], [xR + 10, gy(g, v)]], { color: C.mari, w: 1.5, dash: true, name: `line:${v}` });
        lab(s, xR + 2, gy(g, v) + (v > 0 ? -8 : 18), v > 0 ? '5' : '−5', { size: 13, anchor: 'end', color: C.amber });
      });
      curve(s, g, sample(f101[0], 0, 2 * P, 400), { w: 2.4, name: 'curve' });
      pt(s, gp(g, [P / 2 - AL101, 5]), 'max', C.mari);
      pt(s, gp(g, [P / 2 - AL101 + P, -5]), 'min', C.mari);
    } else {
      // 3 and 4 dashed (the walls of the range), 5 dashed grey and crossed out, the highlight
      [4, 3].forEach((v) => {
        path(s, [[g.ox - 6, gy(g, v)], [xR + 10, gy(g, v)]], { color: C.slate, w: 1.4, dash: true, name: `line:${v}` });
        lab(s, xR + 2, gy(g, v) + (v === 4 ? -8 : 18), String(v), { size: 13, anchor: 'end', color: C.slate });
      });
      path(s, [[g.ox - 6, gy(g, 5)], [xR + 10, gy(g, 5)]], { color: C.grey, w: 1.4, dash: true, name: 'line:5' });
      const cx = gx(g, P), cy = gy(g, 5);
      path(s, [[cx - 16, cy - 6], [cx + 16, cy + 6]], { color: C.mari, w: 2.2, name: 'cross' });
      path(s, [[cx - 16, cy + 6], [cx + 16, cy - 6]], { color: C.mari, w: 2.2, name: 'cross' });
      lab(s, g.ox + 6, gy(g, 5) - 10, '5: never reached', { size: 12.5, anchor: 'start', color: C.amber });
      curve(s, g, sample(f101[1], 0, 2 * P, 400), { w: 2.4, name: 'curve' });
    }
    return s;
  },
  check(c: Case101) {
    const s = fig101.draw(c), out: Check[] = [], g = G101[c.k], f = f101[c.k], [pts] = curvesBack(s, g, /^curve$/);
    out.push([`The curve read back is ${c.k ? 'y = 3 sin² x + 4 cos² x' : 'y = 3 sin x + 4 cos x'} on [0, 2π]`, pts.every((p) => close(p[1], f(p[0]), 1e-3)) && close(pts[0][0], 0, 1e-6) && close(pts[pts.length - 1][0], 2 * Math.PI, 1e-3)]);
    const ys = Array.from({ length: 20001 }, (_, i) => f((i * 2 * Math.PI) / 20000)), hi = Math.max(...ys), lo = Math.min(...ys);
    if (c.k === 0) {
      out.push([`R = √(3² + 4²) = ${Math.hypot(3, 4)}: 3 sin x + 4 cos x = 5 sin(x + α), tan α = 4/3; on [0, 2π] its largest value is ${fmt(hi, 6)}, its smallest ${fmt(lo, 6)}`, Math.hypot(3, 4) === 5 && close(hi, 5, 1e-6) && close(lo, -5, 1e-6) && [0.3, 2, 5].every((x) => close(f(x), 5 * Math.sin(x + AL101), 1e-12))]);
      const mx = unPx(g, dotAt(s, 'max')!), mn = unPx(g, dotAt(s, 'min')!);
      out.push([`The extremes are filled dots on the curve: max 5 at x = π/2 − α = ${fmt(mx[0], 4)}, min −5 at x = 3π/2 − α = ${fmt(mn[0], 4)}, each touching its dashed line y = ±5`, close(f(mx[0]), 5, 1e-9) && close(mx[1], 5, 1e-9) && close(f(mn[0]), -5, 1e-9) && close(mn[1], -5, 1e-9)]);
      out.push(labelsCheck(s, ['y = 3 sin x + 4 cos x', 'amplitude rule applies: R = 5', '5', '−5', 'π/2', 'π', '3π/2', '2π', 'x', 'y', 'O']));
    } else {
      out.push([`3 sin² x + 4 cos² x = 3(sin² x + cos² x) + cos² x = 3 + cos² x, and 0 ≤ cos² x ≤ 1: on [0, 2π] its largest value is ${fmt(hi, 6)}, its smallest ${fmt(lo, 6)}, range [3, 4]`, [0.3, 2, 5].every((x) => close(f(x), 3 + Math.cos(x) ** 2, 1e-12)) && close(hi, 4, 1e-9) && close(lo, 3, 1e-6)]);
      out.push(['The value 4 is reached at 0, π, 2π, the value 3 at π/2 and 3π/2; 5, what the amplitude rule would claim, is never reached (crossed out)', close(f(0), 4) && close(f(Math.PI), 4) && close(f(Math.PI / 2), 3) && hi < 5 && linesNamed(s, /^cross$/).length === 2]);
      out.push(labelsCheck(s, ['y = 3 sin2 x + 4 cos2 x = 3 + cos2 x', 'amplitude rule does not apply: range [3, 4]', '5: never reached', '4', '3', 'π/2', 'π', '3π/2', '2π', 'x', 'y', 'O']));
    }
    out.push(stackedCheck(s, ['π/2', '3π/2']));
    out.push(noBadChars(s, fig101));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 11's "Figure 3" · telescoping in four rows (p. 303)             */
/* ===================================================================== */
const CAP111 = `Telescoping in four rows: multiplying each term by 2 sin ${fr('<i>β</i>', '2')} turns it into a difference of neighbouring sines, every interior term cancels against the row above, and only the two extreme ends survive.`;
const B = I('β');
/** sin(a ± kβ/2) as runs, with the book's tall brackets round the stacked fraction. */
const sinHalf = (sign: '+' | '−', inner: '+' | '−', k: number): Piece[] => [{ t: `${sign} sin` }, { t: '(', big: true }, { t: `${I('a')} ${inner} ` }, { num: k === 1 ? B : `${k}${B}`, den: '2' }, { t: ')', big: true }];
const ROWS111 = [0, 1, 2, 3];
const lhs111 = (r: number): Piece[] => [{ t: '2 sin ' }, { num: B, den: '2' }, { t: r === 0 ? ` cos ${I('a')} =` : ` cos(${I('a')} + ${r === 1 ? '' : r}${B}) =` }];
const fig111: Diagram = {
  id: 'm11-03-11-d1',
  topic: 10,
  name: 'Telescoping in four rows',
  cases: [{ chip: 'Four rows', cap: CAP111 }],
  draw() {
    // each row on two lines (the product, then its two sines), so the four rows fit a phone
    const s = new Sketch(W, 410), size = 12, YL = [44, 114, 184, 254], YT = YL.map((y) => y + 38), xM = 98, xRt = 252;
    const mid: Rect[] = [], right: Rect[] = [];
    ROWS111.forEach((r, i) => {
      runs(s, 14, YL[i], lhs111(r), { size, anchor: 'start' });
      mid.push(runs(s, xM, YT[i], sinHalf('+', '+', 2 * r + 1), { size, anchor: 'middle' }));
      right.push(runs(s, xRt, YT[i], r === 0 ? sinHalf('−', '−', 1) : sinHalf('−', '+', 2 * r - 1), { size, anchor: 'middle' }));
    });
    // the cancelling pairs: each row's −sin(a + (2r − 1)β/2) against the row above's +sin
    for (let i = 1; i < 4; i++) {
      const a: P = [right[i][0] + 6, right[i][1] - 5], b: P = [mid[i - 1][2] + 5, (mid[i - 1][1] + mid[i - 1][3]) / 2];
      bend(s, a, [a[0] - 4, b[1] + 2], b, { color: C.slate, w: 1.3, name: `cancel:${i}` });
    }
    lab(s, right[1][0] + 30, YL[2] - 2, 'cancels', { size: 11.5, anchor: 'start', color: C.slate });
    // the two survivors, ringed: the highlight
    const ring = (r: Rect, name: string) => {
      const q: Rect = [r[0] - 13, r[1] - 7, r[2] + 13, r[3] + 7], h = q[3] - q[1];
      s.add(`<rect x="${r1(q[0])}" y="${r1(q[1])}" width="${r1(q[2] - q[0])}" height="${r1(h)}" rx="${r1(h / 2)}" fill="none" stroke="${C.mari}" stroke-width="1.8"/>`);
      keep(s, [[q[0] + h / 2, q[1]], [q[2] - h / 2, q[1]], ...arcPts([q[2] - h / 2, q[1] + h / 2], h / 2, 90, -90, 20), [q[0] + h / 2, q[3]], ...arcPts([q[0] + h / 2, q[1] + h / 2], h / 2, 270, 90, 20)], name);
    };
    ring(right[0], 'ring:first'); ring(mid[3], 'ring:last');
    const top = right[0], c0 = (top[0] + top[2]) / 2;
    lab(s, c0 + 10, 16, 'the only survivors', { size: 11.5, color: C.amber });
    arrow(s, [c0 + 40, 25], [c0 + 30, top[1] - 6], { color: C.mari, w: 1.3, name: 'arrow:survivors' });
    lab(s, (mid[3][0] + mid[3][2]) / 2, mid[3][3] + 24, 'the other survivor', { size: 11.5, color: C.amber });
    runs(s, 14, 358, [{ t: '⇒ 2 sin ' }, { num: B, den: '2' }, { t: ' ' }, { sum: true, top: '3', bot: `${I('r')} = 0` }, { t: ` cos(${I('a')} + ${I('r')}${B})` }], { size: 12.5, anchor: 'start' });
    runs(s, 46, 396, [{ t: '= sin' }, { t: '(', big: true }, { t: `${I('a')} + ` }, { num: `7${B}`, den: '2' }, { t: ')', big: true }, { t: ' − sin' }, { t: '(', big: true }, { t: `${I('a')} − ` }, { num: B, den: '2' }, { t: ')', big: true }], { size: 12.5, anchor: 'start' });
    return s;
  },
  check() {
    const s = fig111.draw(fig111.cases[0]), out: Check[] = [], a = 0.37, b = 0.81;
    const row = (r: number) => 2 * Math.sin(b / 2) * Math.cos(a + r * b), plus = (r: number) => Math.sin(a + ((2 * r + 1) * b) / 2), minus = (r: number) => Math.sin(a + ((2 * r - 1) * b) / 2);
    out.push(['Each row is the product-to-sum identity 2 sin(β/2) cos(a + rβ) = sin(a + (2r + 1)β/2) − sin(a + (2r − 1)β/2), checked for r = 0 to 3 (a = 0.37, β = 0.81)', ROWS111.every((r) => close(row(r), plus(r) - minus(r), 1e-12))]);
    out.push(['Row r + 1\'s negative term equals row r\'s positive term (the three arrows): they cancel', [0, 1, 2].every((r) => close(minus(r + 1), plus(r), 1e-12)) && new Set(linesNamed(s, /^cancel:/).map((l) => l.name)).size === 3]);
    const sum = ROWS111.reduce((t, r) => t + Math.cos(a + r * b), 0);
    out.push([`Only the ends survive: 2 sin(β/2) Σ cos(a + rβ) = sin(a + 7β/2) − sin(a − β/2) = ${fmt(Math.sin(a + 3.5 * b) - Math.sin(a - b / 2), 6)}, the sum being ${fmt(2 * Math.sin(b / 2) * sum, 6)}`, close(2 * Math.sin(b / 2) * sum, Math.sin(a + 3.5 * b) - Math.sin(a - b / 2), 1e-12)]);
    out.push(['The two survivors are ringed (the highlight): −sin(a − β/2) in the first row, +sin(a + 7β/2) in the last', linesNamed(s, /^ring:/).length === 2]);
    const rows = ['2 sin β/2 cos a =', '2 sin β/2 cos(a + β) =', '2 sin β/2 cos(a + 2β) =', '2 sin β/2 cos(a + 3β) ='];
    const terms = ['+ sin(a + β/2)', '+ sin(a + 3β/2)', '+ sin(a + 5β/2)', '+ sin(a + 7β/2)', '− sin(a − β/2)', '− sin(a + β/2)', '− sin(a + 3β/2)', '− sin(a + 5β/2)'];
    out.push(labelsCheck(s, [...rows, ...terms, 'cancels', 'the only survivors', 'the other survivor', '⇒ 2 sin β/2 ∑[r = 0..3] cos(a + rβ)', '= sin(a + 7β/2) − sin(a − β/2)']));
    out.push(stackedCheck(s, ['β/2', '3β/2', '5β/2', '7β/2']));
    out.push(noBadChars(s, fig111));
    out.push(...layout(s));
    return out;
  },
};

/* ===================================================================== */
/* Topic 12's "Figure 4" · the multiple-angle ladder (p. 317)            */
/* ===================================================================== */
const CAP121 = 'The multiple-angle ladder: doubling and tripling generate cos 2<i>x</i>, cos 4<i>x</i>, cos 8<i>x</i> and cos 3<i>x</i>, cos 6<i>x</i>, while 5<i>x</i> = 2<i>x</i> + 3<i>x</i> reaches cos 5<i>x</i>; each node carries its leading coefficient 2<sup><i>n</i>−1</sup>.';
/** p. 317: each rung cos nx, where it sits, and the leading coefficient printed beside it. */
const RUNGS121: { n: number; c: P; side: 'start' | 'end' }[] = [
  { n: 2, c: [104, 214], side: 'end' }, { n: 4, c: [104, 134], side: 'end' }, { n: 8, c: [104, 54], side: 'end' },
  { n: 5, c: [172, 78], side: 'start' }, { n: 3, c: [240, 214], side: 'start' }, { n: 6, c: [240, 134], side: 'start' },
];
const BASE121: P = [172, 286];
/** cos nx as a polynomial in c = cos x, by cos(n + 1)x = 2c cos nx − cos(n − 1)x: its coefficients, highest power first. */
function chebyshev(n: number): number[] {
  let a = [1], b = [1, 0];
  if (n === 0) return a;
  for (let k = 1; k < n; k++) { const next = [...b.map((v) => 2 * v), 0]; a.forEach((v, i) => { next[next.length - a.length + i] -= v; }); a = b; b = next; }
  return b;
}
const fig121: Diagram = {
  id: 'm11-03-12-d1',
  topic: 11,
  name: 'The multiple-angle ladder',
  cases: [{ chip: 'Ladder', cap: CAP121 }],
  draw() {
    const s = new Sketch(W, 362), bw = 60, bh = 30, size = 13;
    const box = (c: P, w: number, h: number, col: string = C.ink, wd = 1.5): Rect => {
      const r: Rect = [c[0] - w / 2, c[1] - h / 2, c[0] + w / 2, c[1] + h / 2];
      s.add(`<rect x="${r1(r[0])}" y="${r1(r[1])}" width="${w}" height="${h}" rx="7" fill="none" stroke="${col}" stroke-width="${wd}"/>`);
      keep(s, [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]], [r[0], r[1]]], 'box');
      return r;
    };
    const R: Record<number, Rect> = {};
    RUNGS121.forEach(({ n, c, side }) => {
      R[n] = box(c, bw, bh);
      lab(s, c[0], c[1] + 4.5, `cos ${n}${I('x')}`, { size });
      lab(s, side === 'end' ? c[0] - bw / 2 - 5 : c[0] + bw / 2 + 5, c[1] + 4, `lead 2<sup>${n - 1}</sup> = ${2 ** (n - 1)}`, { size: 10.5, anchor: side, color: C.slate });
    });
    const base = box(BASE121, 96, 44, C.slate, 1.5);
    const bl = lab(s, BASE121[0], BASE121[1] + 4.5, `cos ${I('x')}, sin ${I('x')}`, { size });
    // the book's shaded base box, hatched in grey (its neutral tint), round its words
    addHatch(s, 'base', hatch(s, (p) => p[0] > base[0] + 3 && p[0] < base[2] - 3 && p[1] > base[1] + 3 && p[1] < base[3] - 3, base, { color: C.grey, step: 4.5, gap: 4.5, avoid: [bl] }));
    const up = (a: Rect, b: Rect, t: string, side: 1 | -1) => {
      const x = (a[0] + a[2]) / 2;
      arrow(s, [x, a[1] - 3], [x, b[3] + 3], { color: C.ink, w: 1.6, name: `step:${t}` });
      lab(s, x + side * 8, (a[1] + b[3]) / 2 + 4, '×2', { size: 12, anchor: side > 0 ? 'start' : 'end', color: C.slate });
    };
    up(R[2], R[4], '2>4', -1); up(R[4], R[8], '4>8', -1); up(R[3], R[6], '3>6', 1);
    arrow(s, [base[0] + 10, base[1] - 2], [R[2][2] - 12, R[2][3] + 3], { color: C.ink, w: 1.6, name: 'step:1>2' });
    lab(s, 112, 256, '×2', { size: 12, color: C.slate });
    arrow(s, [base[2] - 10, base[1] - 2], [R[3][0] + 12, R[3][3] + 3], { color: C.ink, w: 1.6, name: 'step:1>3' });
    lab(s, 236, 256, '×3', { size: 12, color: C.slate });
    // 5x = 2x + 3x, the highlight: dashed from cos 2x and cos 3x up to cos 5x
    arrow(s, [R[2][2] - 4, R[2][1] - 3], [R[5][0] + 10, R[5][3] + 3], { color: C.mari, w: 1.5, dash: true, name: 'sum:2' });
    arrow(s, [R[3][0] + 4, R[3][1] - 3], [R[5][2] - 10, R[5][3] + 3], { color: C.mari, w: 1.5, dash: true, name: 'sum:3' });
    lab(s, 146, 160, `2${I('x')} + 3${I('x')}`, { size: 12, anchor: 'start', color: C.amber });
    lab(s, 204, 186, `2${I('x')} + 3${I('x')}`, { size: 12, anchor: 'end', color: C.amber });
    runs(s, W / 2, 330, [{ t: `leading coefficient of cos ${I('nx')} in powers of cos ${I('x')} is 2<sup>${I('n')} − 1</sup>;` }], { size: 11.5, anchor: 'middle', color: C.slate });
    lab(s, W / 2, 350, `only powers of the same parity as ${I('n')} appear`, { size: 11.5, color: C.slate });
    return s;
  },
  check() {
    const s = fig121.draw(fig121.cases[0]), out: Check[] = [];
    const lead = RUNGS121.map(({ n }) => chebyshev(n));
    out.push([`cos nx as a polynomial in cos x, built by cos(n + 1)x = 2 cos x cos nx − cos(n − 1)x: leading coefficients ${RUNGS121.map(({ n }, i) => `cos ${n}x: ${lead[i][0]}`).join(', ')}, each 2^(n − 1) as labelled`, RUNGS121.every(({ n }, i) => lead[i][0] === 2 ** (n - 1) && lead[i].length === n + 1)]);
    out.push(['Only powers of the same parity as n appear: every other coefficient is 0 (cos 4x = 8c⁴ − 8c² + 1, cos 6x = 32c⁶ − 48c⁴ + 18c² − 1)', lead.every((co) => co.every((v, i) => i % 2 === 0 || v === 0)) && chebyshev(4).join() === '8,0,-8,0,1' && chebyshev(6).join() === '32,0,-48,0,18,0,-1']);
    out.push(['The polynomials agree with cos nx at sample angles, and the coefficients sum to cos(n · 0) = 1', RUNGS121.every(({ n }) => [0.3, 1.2, 2.9].every((x) => close(chebyshev(n).reduce((t, v) => t * Math.cos(x) + v, 0), Math.cos(n * x), 1e-9)) && chebyshev(n).reduce((t, v) => t + v, 0) === 1)]);
    out.push(['The arrows as printed: ×2 from cos x to cos 2x to cos 4x to cos 8x, ×3 from cos x to cos 3x, ×2 from cos 3x to cos 6x; dashed 2x + 3x from cos 2x and cos 3x to cos 5x (2 + 3 = 5, 2 · 3 = 6, 2 · 4 = 8)', ['1>2', '2>4', '4>8', '1>3', '3>6'].every((k) => linesNamed(s, new RegExp(`^step:${k}$`)).length === 1) && linesNamed(s, /^sum:/).length === 2 && 2 + 3 === 5]);
    const H = hatchOf(s, 'base');
    out.push([`The book's shaded base box hatched in grey (${H.length} strokes), every stroke inside it`, H.length > 8 && allIn(H, (p) => Math.abs(p[0] - BASE121[0]) < 48 && Math.abs(p[1] - BASE121[1]) < 22)]);
    out.push(labelsCheck(s, ['cos 2x', 'cos 4x', 'cos 8x', 'cos 5x', 'cos 3x', 'cos 6x', 'cos x, sin x', 'lead 21 = 2', 'lead 23 = 8', 'lead 27 = 128', 'lead 24 = 16', 'lead 22 = 4', 'lead 25 = 32', '×2', '×3', '2x + 3x', 'leading coefficient of cos nx in powers of cos x is 2n − 1;', 'only powers of the same parity as n appear']));
    out.push(noBadChars(s, fig121));
    out.push(...layout(s));
    return out;
  },
};

/** Chapter 3 drawings, Figures 3.12–3.17 and the unnumbered drawings of Topics 09–12; joined in mathematics-11-03.ts. */
export const DIAGRAMS_B: Diagram[] = [fig312, fig313, fig314, fig315, fig316, fig317, fig091, fig101, fig111, fig121];
