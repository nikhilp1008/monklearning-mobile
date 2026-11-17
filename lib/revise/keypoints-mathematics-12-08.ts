/**
 * KEY POINTS for Mathematics Class 12, Chapter 8 (Application of Integrals).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 each have five Remember points and one of each other kind;
 * Additional topics A–E have two Remember points and one of each other kind;
 * Additional P, the past-paper analysis, has five points (three archetypes as
 * Remember and Exam shortcuts, two traps): 54 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the chapter's Subtopics 01–03); Additional
 * topics A–E are 3–7 (Addenda A–E) and Additional P is 8 (Addendum P, What
 * JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio; the addenda's own "Page n of 20" counted on from
 * p. 560) is above each point. Remember: the topic's key definitions,
 * theorems and its Cheat sheet. Common mistakes: its Common pitfalls and its
 * MCQ traps (A–E, which print neither: the slips their worked examples and
 * practice answers warn about; P: its traps). Exam shortcuts: its Pro-Tips,
 * Speed Traps and worked examples. `say`: the book's own memory aids, word
 * for word without their quotation marks: Topic 01 prints one, "SLiCE", whose
 * first sentence (acronym and steps) and second sentence are its two lines;
 * Topic 02 prints one, "ISSI", split the same way; Topic 03 prints three,
 * and its "Top minus bottom, every strip, every time." rides on the third
 * `say` so that it does not repeat Topic 02's second line among the memory
 * lines: seven in all, six of them memory lines. A–E and P print no aids, so
 * each has two of the book's own one-line sentences (A: "Squaring
 * manufactures roots.", cut, and "Two routes, one answer."; B: "Always
 * expand before you assume." and "A method that reproduces a known result on
 * a known shape is safe to trust on a new one."; C: "The graph of f⁻¹ is the
 * reflection of the graph of f in the line y = x." and "One geometric fact
 * about reflection does most of the work."; D: "Do not plug numbers yet."
 * and "Name the parameter k and write every boundary in terms of it."; E:
 * "Three structural facts replace the casework." and "Every arch of |⁠sin x|
 * is a translate of the first.", cut and capitalised; P: "The examiner is
 * testing decoding, not integration." and "Always compute top minus
 * bottom."): eighteen in all, sixteen of them memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: Archimedes' 4/3 holds for every chord when the triangle's
 * apex is the point where the tangent parallel to the chord touches (the
 * vertex only for a chord x = h, which is all the card's legend says). The
 * Exam relevance claims, the past-paper distribution and its counts, the
 * CBSE, NCERT and syllabus remarks, the difficulty tags and the paper names
 * in P are left out.
 *
 * Markup is the chapter's own: ∫ upright with <sub>/<sup> limits, d upright
 * and glued to its variable, <i> for every variable and constant letter,
 * |⁠…| with a word joiner, − (U+2212) for minus. Every fraction is stacked,
 * <frac><num>…</num><den>…</den></frac>, and never a fraction inside a
 * fraction; no em dashes; and always a space after "<", so it is never read
 * as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const WJ = '⁠';
const bar = (s: string) => `|${WJ}${s}|`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
const tf = (fn: string, s: string, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${s}`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const t = I('t');
const x = I('x');
const y = I('y');
const A = I('A');
const S = I('S');
const T = I('T');
const al = I('α');
const be = I('β');
const lam = I('λ');
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
const DT = `${NB}d${t}`;
const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const X2 = sq(x);
const Y2 = sq(y);
const SIN = tf('sin', x);
const COS = tf('cos', x);
const PI2 = fr('π', '2');
const ASIN = (z: string) => `sin<sup>−1</sup>${NB}${z}`;
const ACOS = (z: string) => `cos<sup>−1</sup>${NB}${z}`;
const ATAN = (z: string) => `tan<sup>−1</sup>${NB}${z}`;
const ACOT = (z: string) => `cot<sup>−1</sup>${NB}${z}`;
const R1 = sb(r, '1');
const R2 = sb(r, '2');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Area under Simple Curves ──
  // pp. 530–533, 540
  {
    topic: 0,
    kind: 'remember',
    q: `What is the area between a curve ${y} = ${fx} ≥ 0, the ${x}-axis and the lines ${x} = ${a}, ${x} = ${b}?`,
    a: `${A} = ${INT(a, b)} ${y}${DX} = ${INT(a, b)} ${fx}${DX}: the sum of thin vertical strips of height ${y} and width d${x}`,
    why: `${y} = ${X2} + 2 from ${x} = 0 to 2: [${fr(sup(x, '3'), '3')} + 2${x}]<sub>0</sub><sup>2</sup> = ${fr('20', '3')}.`,
    say: `SLiCE: Sketch → Limits (and roots) → Choose variable (d${x}/d${y}) → Evaluate (with |·| and symmetry).`,
  },
  // pp. 531, 533, 540
  {
    topic: 0,
    kind: 'remember',
    q: `What is the area between a curve ${x} = ${g}(${y}) ≥ 0, the ${y}-axis and the lines ${y} = ${c}, ${y} = ${d}?`,
    a: `${A} = ${INT(c, d)} ${x}${DY} = ${INT(c, d)} ${g}(${y})${DY}: horizontal strips of length ${x} and height d${y}, swept from ${y} = ${c} to ${y} = ${d}`,
    why: `${x} = ${Y2}, the ${y}-axis, ${y} = 0 to 2: ${INT('0', '2')} ${Y2}${DY} = ${fr('8', '3')}.`,
    say: 'Slice the region right and the integral writes itself.',
  },
  // pp. 531, 533, 540
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the area when the curve lies below the axis, or crosses it?',
    a: `Below (${fx} ≤ 0): ${A} = ${bar(`${INT(a, b)} ${fx}${DX}`)} = −${INT(a, b)} ${fx}${DX}. Crossing at ${c}: ${A} = ${INT(a, c)} ${fx}${DX} + ${bar(`${INT(c, b)} ${fx}${DX}`)} = ${INT(a, b)} ${bar(fx)}${DX}. Split at every root`,
    why: `${y} = ${SIN} on [0, 2π]: the area is 2 + 2 = 4, while the integral is 0.`,
    say: null,
  },
  // pp. 534–535, 540
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the circle and ellipse areas, and the integral behind them?',
    a: `${X2} + ${Y2} = ${sq(a)}: π${sq(a)}, as 4${INT('0', a)} √(${sq(a)} − ${X2})${DX}. ${fr(X2, sq(a))} + ${fr(Y2, sq(b))} = 1: π${a}${b}. The workhorse: ∫√(${sq(a)} − ${X2})${DX} = ${fr(x, '2')}√(${sq(a)} − ${X2}) + ${fr(sq(a), '2')}${NB}${ASIN(fr(x, a))} + ${I('C')}`,
    why: `Setting ${b} = ${a} turns π${a}${b} into π${sq(a)}: a formula that degenerates correctly is almost certainly right.`,
    say: null,
  },
  // p. 534
  {
    topic: 0,
    kind: 'remember',
    q: `Why is the area exactly ${INT(a, b)} ${fx}${DX}?`,
    a: `Cut [${a}, ${b}] into ${n} strips of width Δ${x} = ${fr(`${b} − ${a}`, n)}; the rectangle sum ∑${NB}${f}(${sb(I('ξ'), I('i'))})${NB}Δ${x} tends, as ${n} → ∞, to the exact area, and that limit is the definite integral`,
    why: 'The thinner the strips, the smaller the sliver of error between each rectangle and the curved strip.',
    say: null,
  },
  // pp. 531, 539
  {
    topic: 0,
    kind: 'mixup',
    q: `d${x} or d${y}?`,
    a: `Walled left and right by vertical lines: d${x}. Capped above and below by horizontal lines, or the curve given as ${x} = ${g}(${y}): d${y}. The wrong choice turns one integral into two`,
    why: `${x} = 4 − ${Y2} with the ${y}-axis: ${INT('−2', '2')} (4 − ${Y2})${DY} = ${fr('32', '3')} in one piece.`,
    say: null,
  },
  // pp. 536, 539
  {
    topic: 0,
    kind: 'mistake',
    q: `The area between ${y} = ${sup(x, '3')} and the ${x}-axis from ${x} = −2 to 2?`,
    a: `8, not 0: ${INT('−2', '2')} ${sup(x, '3')}${DX} = 0 because the two pieces cancel. Split at ${x} = 0: 2${INT('0', '2')} ${sup(x, '3')}${DX} = 8`,
    why: 'Never integrate straight across a root.',
    say: null,
  },
  // pp. 537, 539
  {
    topic: 0,
    kind: 'shortcut',
    q: `The first-quadrant region under ${Y2} = 4${x}, up to ${x} = 4?`,
    a: `${fr('32', '3')}, from ${INT('0', '4')} 2√${x}${DX}. Without the ${x}-axis as a boundary, both branches count and symmetry doubles it to ${fr('64', '3')}`,
    why: `Read whether the ${x}-axis is a stated boundary: it decides one branch or two.`,
    say: null,
  },

  // ── Topic 02 · Area between Two Curves ──
  // pp. 541–544, 550
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the area between two curves, with vertical strips?',
    a: `${A} = ${INT(a, b)} [${fx} − ${gx}]${DX}, ${f} ≥ ${g}, with ${a}, ${b} the intersections from ${fx} = ${gx}. It holds even below the axis: shifting both curves by a constant does not change the gap`,
    why: `${y} = ${x} and ${y} = ${X2}: ${INT('0', '1')} (${x} − ${X2})${DX} = ${fr('1', '6')}.`,
    say: 'ISSI: Intersect, Sketch, Sample (which is on top), Integrate.',
  },
  // pp. 543, 546, 550
  {
    topic: 1,
    kind: 'remember',
    q: 'And with horizontal strips?',
    a: `${A} = ${INT(c, d)} [${p}(${y}) − ${q}(${y})]${DY}, right minus left, with ${c}, ${d} the ${y}-coordinates of the intersections. Sideways-opening curves are far cleaner this way`,
    why: `${Y2} = 4${x} and ${y} = 2${x} − 4: ${INT('−2', '4')} (${fr(`${y} + 4`, '2')} − ${fr(Y2, '4')})${DY} = 15 − 6 = 9.`,
    say: 'Always top minus bottom, every strip, every time.',
  },
  // pp. 543, 545
  {
    topic: 1,
    kind: 'remember',
    q: 'What if the curves cross inside the interval?',
    a: `Split at the crossing ${k}: ${A} = ${INT(a, k)} [${fx} − ${gx}]${DX} + ${INT(k, b)} [${gx} − ${fx}]${DX} = ${INT(a, b)} ${bar(`${fx} − ${gx}`)}${DX}`,
    why: `${y} = ${x} and ${y} = ${sup(x, '3')} on [−1, 1]: 2${INT('0', '1')} (${x} − ${sup(x, '3')})${DX} = ${fr('1', '2')}, though ${INT('−1', '1')} (${x} − ${sup(x, '3')})${DX} = 0.`,
    say: null,
  },
  // pp. 543–544
  {
    topic: 1,
    kind: 'remember',
    q: `What area do ${Y2} = 4${a}${x} and ${X2} = 4${a}${y} enclose?`,
    a: `${fr(`16${sq(a)}`, '3')}: they meet at (0, 0) and (4${a}, 4${a}), and 2√(${a}${x}) is on top, so ${INT('0', `4${a}`)} (2√(${a}${x}) − ${fr(X2, `4${a}`)})${DX}`,
    why: `${a} = 1 gives ${fr('16', '3')}; ${fr('32', '3')} is the area under the upper parabola alone.`,
    say: null,
  },
  // p. 546
  {
    topic: 1,
    kind: 'remember',
    q: `Which curve bounds the region common to ${Y2} = 4${x} and ${X2} + ${Y2} = 5?`,
    a: `They meet at (1, ±2). In the upper half the parabola 2√${x} is the ceiling from 0 to 1, the circle from 1 to √5; doubling gives ${fr('2', '3')} + ${fr('5π', '2')} − 5${NB}${ASIN(fr('1', '√5'))}`,
    why: `The root ${x} = −5 is rejected: the parabola needs ${x} ≥ 0.`,
    say: null,
  },
  // pp. 548–549
  {
    topic: 1,
    kind: 'mixup',
    q: `Between two curves: ${f} − ${g} or ${bar(f)} − ${bar(g)}?`,
    a: `${f} − ${g}, the gap between the curves, top minus bottom. ${bar(f)} − ${bar(g)} is not the gap: the single-curve modulus rule does not carry over`,
    why: `${INT(a, b)} (${g} − ${f})${DX} gives the negative of the area.`,
    say: null,
  },
  // pp. 547, 549
  {
    topic: 1,
    kind: 'mistake',
    q: 'Where do the limits come from?',
    a: `From solving ${fx} = ${gx}: the intersections. Numbers copied from the question are not limits; skipping this is the most common way to lose the whole question`,
    why: `${Y2} = ${x} and ${x} = 3${y} meet at ${y} = 0 and 3: ${INT('0', '3')} (3${y} − ${Y2})${DY} = ${fr('9', '2')}.`,
    say: null,
  },
  // pp. 548–549
  {
    topic: 1,
    kind: 'shortcut',
    q: `The area between ${y} = ${x} and ${Y2} = 4${x}?`,
    a: `${fr('8', '3')}: they meet at ${x} = 0 and 4, the parabola 2√${x} on top, so ${INT('0', '4')} (2√${x} − ${x})${DX} = ${fr('32', '3')} − 8`,
    why: `${fr('16', '3')} and 8 are the planted no-subtraction answers.`,
    say: null,
  },

  // ── Topic 03 · Advanced Regions: Modulus, Inequalities & Composite Areas ──
  // pp. 551–553, 555
  {
    topic: 2,
    kind: 'remember',
    q: 'How is the area under a modulus curve found?',
    a: `${bar(fx)} = ${fx} where ${fx} ≥ 0 and −${fx} where ${fx} < 0: set each inside expression to zero to find the corners, split there, and integrate one smooth piece at a time`,
    why: `${y} = ${bar(x)} from −2 to 3: ${INT('−2', '0')} (−${x})${DX} + ${INT('0', '3')} ${x}${DX} = 2 + ${fr('9', '2')} = ${fr('13', '2')}.`,
    say: `Sideways curves → integrate in ${y}.`,
  },
  // pp. 551, 553–555
  {
    topic: 2,
    kind: 'remember',
    q: 'How is a region given by inequalities decoded?',
    a: `${y} ≤ ${fx}: below the curve; ${y} ≥ ${fx}: above; ${X2} + ${Y2} ≤ ${sq(r)}: inside the circle. The region is the overlap: sketch, find the boundary intersections for the limits, read off top and bottom, and confirm with a test point`,
    why: `{${y} ≥ ${X2}, ${y} ≤ ${x} + 2}: ${INT('−1', '2')} (${x} + 2 − ${X2})${DX} = ${fr('9', '2')}.`,
    say: 'Decode the boundary; the calculus is the easy part.',
  },
  // pp. 553–554
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a composite region?',
    a: `One whose ceiling switches at ${x} = ${s}: ${A} = ${INT(a, s)} [${sb('top', '1')} − bottom]${DX} + ${INT(s, b)} [${sb('top', '2')} − bottom]${DX}, with ${s} found by setting the two ceilings equal`,
    why: `A triangle bounded by three lines is the simplest composite region: split at the ${x} of its middle vertex.`,
    say: 'Top minus bottom, every strip, every time.',
  },
  // pp. 553–555
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the diamond area?',
    a: `${fr(bar(x), p)} + ${fr(bar(y), q)} ≤ 1 has area 2${p}${q}; ${bar(x)} + ${bar(y)} ≤ ${a} has area 2${sq(a)}: four copies of the first-quadrant right triangle`,
    why: `${bar(x)} + ${bar(y)} ≤ 2: 8; its diagonals are 4 and 4, and ${fr('1', '2')} · 4 · 4 = 8.`,
    say: null,
  },
  // p. 554
  {
    topic: 2,
    kind: 'remember',
    q: 'Which symmetries let you integrate a small piece and multiply?',
    a: `About the ${y}-axis (${x} → −${x} unchanged): 2 × the right half. About the ${x}-axis (${y} → −${y}): 2 × the upper half. About the origin: 2 × one half. Four-fold, as in ${bar(x)} + ${bar(y)} ≤ ${a}: 4 × the first quadrant`,
    why: 'Many modulus regions are symmetric, but not all: verify before using it.',
    say: null,
  },
  // pp. 555, 557
  {
    topic: 2,
    kind: 'mixup',
    q: `${bar(x)} + ${bar(y)} ≤ ${a}: is ${a} the side of the square?`,
    a: `No: ${a} is the half-diagonal; the side is ${a}√2, so the area is 2${sq(a)}, not ${sq(a)}`,
    why: `${bar(x)} + ${bar(y)} ≤ 4: 32, not 16.`,
    say: null,
  },
  // p. 558
  {
    topic: 2,
    kind: 'mistake',
    q: `How many corners does ${bar(`${bar(x)} − 1`)} have?`,
    a: `Three: ${x} = −1, 0, 1. Every modulus contributes a kink; missing the inner one gives wrong limits and a wrong area`,
    why: 'Shading the wrong side of an inequality is the other decoding slip: confirm with a test point.',
    say: null,
  },
  // pp. 556–558
  {
    topic: 2,
    kind: 'shortcut',
    q: `{${y} ≥ ${bar(x)}, ${X2} + ${Y2} ≤ 8}?`,
    a: `2π: the wedge ${y} ≥ ${bar(x)} is a 90° sector of the disc of radius √8, so ${fr('1', '4')}π(√8)<sup>2</sup>`,
    why: 'Diamonds, wedges, sectors and triangles have shape formulas: compute both ways as a free check.',
    say: null,
  },

  // ── Additional A · Segments of Conics: Chords, Tangents and the Latus Rectum ──
  // pp. 560–561
  {
    topic: 3,
    kind: 'remember',
    q: `What is the smaller segment of ${X2} + ${Y2} = ${sq(r)} beyond the chord ${x} = ${c}?`,
    a: `${S} = ${sq(r)}${NB}${ACOS(fr(c, r))} − ${c}√(${sq(r)} − ${sq(c)}), for 0 ≤ ${c} ≤ ${r}: twice ${INT(c, r)} √(${sq(r)} − ${X2})${DX}`,
    why: `${r} = 5, ${c} = 3: 25${NB}${ACOS(fr('3', '5'))} − 12.`,
    say: 'Squaring manufactures roots.',
  },
  // pp. 561–562
  {
    topic: 3,
    kind: 'remember',
    q: 'What is Archimedes’ parabolic segment?',
    a: `A parabola cut by a chord gives a segment of exactly ${fr('4', '3')} of the triangle on that chord whose apex is where the tangent parallel to the chord touches (the vertex, for a chord ${x} = ${h}). For ${Y2} = 4${a}${x} and ${x} = ${h}: ${S} = ${fr('8', '3')}√${a}${NB}${sup(h, '3/2')}`,
    why: `${y} = 4${x} − ${X2} and ${y} = 3: apex (2, 4), triangle 1, segment ${fr('4', '3')}.`,
    say: 'Two routes, one answer.',
  },
  // pp. 561, 562
  {
    topic: 3,
    kind: 'mixup',
    q: `An ellipse segment cut by ${x} = ${h}: scale by ${a}${b} or by ${sq(a)}?`,
    a: `By ${a}${b}: ${I('X')} = ${fr(x, a)}, ${I('Y')} = ${fr(y, b)} sends the ellipse to the unit circle and divides every area by ${a}${b}; the cut becomes ${I('X')} = ${fr(h, a)}`,
    why: `${fr(X2, '16')} + ${fr(Y2, '9')} = 1 cut by ${x} = 2: 12(${fr('π', '3')} − ${fr('√3', '4')}) = 4π − 3√3.`,
    say: null,
  },
  // pp. 561–562
  {
    topic: 3,
    kind: 'mistake',
    q: `The region bounded by ${Y2} = 4${x} and its latus rectum: one branch or two?`,
    a: `Two: the strip runs from −2√${x} up to 2√${x}, so ${A} = 4${INT('0', '1')} √${x}${DX} = ${fr('8', '3')}. The part above the axis alone is half the region`,
    why: `Archimedes agrees: triangle ${fr('1', '2')} · 4 · 1 = 2, segment ${fr('4', '3')} × 2.`,
    say: null,
  },
  // p. 563
  {
    topic: 3,
    kind: 'shortcut',
    q: `The area between ${Y2} = 4${x} and the double ordinate ${x} = 4?`,
    a: `${fr('64', '3')} by Archimedes: the triangle is ${fr('1', '2')} · 8 · 4 = 16, the segment ${fr('4', '3')} × 16`,
    why: `The ${fr('4', '3')} check catches the half-segment slip in two lines.`,
    say: null,
  },

  // ── Additional B · Parametric Areas: the Astroid and the Cycloid ──
  // pp. 563, 565
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the area under a parametric curve?',
    a: `${A} = ${INT(al, be)} ${y}(${t})${NB}${x}′(${t})${DT}, for the curve traced once with ${y} ≥ 0 and ${x} increasing. If ${x} decreases as ${t} increases the integral comes out negative: take the absolute value, or reverse the limits`,
    why: `${x} = ${a}${NB}cos${NB}${t}, ${y} = ${b}${NB}sin${NB}${t}: 4${a}${b}${INT('0', 'π/2')} ${tf('sin', t, '2')}${DT} = π${a}${b}, as before.`,
    say: 'Always expand before you assume.',
  },
  // pp. 564–565
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the astroid and cycloid areas?',
    a: `Astroid ${sup(x, '2/3')} + ${sup(y, '2/3')} = ${sup(a, '2/3')} (${x} = ${a}${NB}${tf('cos', t, '3')}, ${y} = ${a}${NB}${tf('sin', t, '3')}): ${fr(`3π${sq(a)}`, '8')}. One cycloid arch, ${x} = ${a}(${t} − sin${NB}${t}), ${y} = ${a}(1 − cos${NB}${t}): 3π${sq(a)}, ${fr('3', '4')} of its bounding rectangle`,
    why: `Astroid quarter: 3${sq(a)}${INT('0', 'π/2')} ${tf('sin', t, '4')}${NB}${tf('cos', t, '2')}${DT} = 3${sq(a)}(${fr('3π', '16')} − ${fr('5π', '32')}).`,
    say: 'A method that reproduces a known result on a known shape is safe to trust on a new one.',
  },
  // p. 565
  {
    topic: 4,
    kind: 'mixup',
    q: `${x} = ${a}(${t} + sin${NB}${t}), ${y} = ${a}(1 − cos${NB}${t}): also 3π${sq(a)}?`,
    a: `No: π${sq(a)}. Here ${x}′(${t}) = ${a}(1 + cos${NB}${t}), and (1 − cos${NB}${t})(1 + cos${NB}${t}) = ${tf('sin', t, '2')}`,
    why: 'A different curve, though it looks like the cycloid: expand before trusting the familiar answer.',
    say: null,
  },
  // p. 564
  {
    topic: 4,
    kind: 'mistake',
    q: `The astroid in the first quadrant: ${x}′(${t}) = −3${a}${NB}${tf('cos', t, '2')}${NB}sin${NB}${t}. The sign?`,
    a: `As ${t} runs from 0 to ${PI2}, ${x} falls from ${a} to 0, so the integral comes out negative: flip the limits, then multiply the quarter by 4`,
    why: `The curve is unchanged by ${x} → −${x} and by ${y} → −${y}, which is why the quarter is enough.`,
    say: null,
  },
  // pp. 563–564
  {
    topic: 4,
    kind: 'shortcut',
    q: `${INT('0', 'π/2')} ${tf('sin', t, '6')}${DT} fast?`,
    a: `${fr('5π', '32')}: ${sb(I('I'), n)} = ${fr(`${n} − 1`, n)}${NB}${sb(I('I'), `${n}−2`)} with ${sb(I('I'), '0')} = ${PI2}, so ${fr('5', '6')} · ${fr('3', '4')} · ${fr('1', '2')} · ${PI2}`,
    why: `Write ${tf('cos', t, '2')} = 1 − ${tf('sin', t, '2')} to turn ${tf('sin', t, '4')}${NB}${tf('cos', t, '2')} into ${sb(I('I'), '4')} − ${sb(I('I'), '6')}.`,
    say: null,
  },

  // ── Additional C · Inverse Functions and the Mirror Trick ──
  // p. 566
  {
    topic: 5,
    kind: 'remember',
    q: `What is the area between ${y} = ${fx} and ${y} = ${sup(f, '−1')}(${x})?`,
    a: `For ${f} continuous and strictly increasing, with ${f}(${a}) = ${a}, ${f}(${b}) = ${b} and ${fx} ≥ ${x} on [${a}, ${b}]: ${A} = 2${INT(a, b)} (${fx} − ${x})${DX}. Reflection in ${y} = ${x} swaps the graphs, so the two pieces either side of the diagonal are congruent`,
    why: `${y} = ${X2} and ${y} = √${x}: 2${INT('0', '1')} (√${x} − ${x})${DX} = ${fr('1', '3')}.`,
    say: `The graph of ${sup(f, '−1')} is the reflection of the graph of ${f} in the line ${y} = ${x}.`,
  },
  // p. 566
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the inverse-trigonometric anti-derivatives?',
    a: `∫${ASIN(x)}${DX} = ${x}${NB}${ASIN(x)} + √(1 − ${X2}); ∫${ACOS(x)}${DX} = ${x}${NB}${ACOS(x)} − √(1 − ${X2}); ∫${ATAN(x)}${DX} = ${x}${NB}${ATAN(x)} − ${fr('1', '2')}${NB}ln(1 + ${X2}); each + ${I('C')}, by parts`,
    why: `${y} = ${ACOS(x)}, the ${x}-axis, ${x} = 0 to 1: [${x}${NB}${ACOS(x)} − √(1 − ${X2})]<sub>0</sub><sup>1</sup> = 1.`,
    say: 'One geometric fact about reflection does most of the work.',
  },
  // pp. 566–567
  {
    topic: 5,
    kind: 'mixup',
    q: `${y} = ${ASIN(x)}, ${y} = ${ACOS(x)} and the ${x}-axis: under which curve?`,
    a: `Under the lower one on each side of the crossing ${x} = ${fr('1', '√2')}: ${ASIN(x)} on the left, ${ACOS(x)} on the right. The area is √2 − 1`,
    why: `About 1.16 means the upper envelope was integrated; ${PI2} means both full areas were added.`,
    say: null,
  },
  // p. 567
  {
    topic: 5,
    kind: 'mistake',
    q: `The area between ${y} = ${sup(x, '3')} and ${y} = ${sup(x, '1/3')}: one lobe?`,
    a: `Two, symmetric about the origin, meeting at ${x} = −1, 0, 1. Each is 2${INT('0', '1')} (${sup(x, '1/3')} − ${x})${DX} = ${fr('1', '2')}, so the total is 1`,
    why: `Direct check: 2${INT('0', '1')} (${sup(x, '1/3')} − ${sup(x, '3')})${DX} = 1.`,
    say: null,
  },
  // pp. 567–568
  {
    topic: 5,
    kind: 'shortcut',
    q: `${y} = ${ATAN(x)}, ${y} = ${ACOT(x)} and the ${y}-axis?`,
    a: `ln${NB}2: ${ACOT(x)} = ${PI2} − ${ATAN(x)} for ${x} > 0, they meet at ${x} = 1, so ${INT('0', '1')} (${PI2} − 2${NB}${ATAN(x)})${DX} = ${PI2} − 2(${fr('π', '4')} − ${fr('1', '2')}${NB}ln${NB}2)`,
    why: `Or integrate horizontally: ${y} = ${ATAN(x)}, the ${y}-axis and ${y} = ${fr('π', '4')} bound ${INT('0', 'π/4')} tan${NB}${y}${DY} = ${fr('1', '2')}${NB}ln${NB}2.`,
    say: null,
  },

  // ── Additional D · When the Area Is the Unknown: Hunting a Parameter ──
  // pp. 568–570
  {
    topic: 6,
    kind: 'remember',
    q: 'How is a parameter found from a given area?',
    a: `Name the parameter, write every boundary and the limits in terms of it, form ${A}(${k}), impose the condition (a target value, a maximum, a ratio) and solve; then check that ${A}(${k}) moves the right way as ${k} changes`,
    why: `${y} = ${a}${x} − ${X2} with the ${x}-axis: roots 0 and ${a}, area ${fr(sup(a, '3'), '6')} = ${fr('9', '2')}, so ${a} = 3.`,
    say: 'Do not plug numbers yet.',
  },
  // pp. 569–570
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the root-gap lemma?',
    a: `If ${q}(${x}) = ${c}(${x} − ${R1})(${x} − ${R2}) with ${R1} < ${R2}, then ${INT(R1, R2)} ${q}(${x})${DX} = −${fr(`${c}(${R2} − ${R1})<sup>3</sup>`, '6')}. A line–parabola area depends only on the leading coefficient and the gap between the roots`,
    why: `${y} = ${X2} and ${y} = ${m}${x} + 3: ${A}(${m}) = ${fr(`(${sq(m)} + 12)<sup>3/2</sup>`, '6')}, least at ${m} = 0, where it is 4√3.`,
    say: `Name the parameter ${k} and write every boundary in terms of it.`,
  },
  // p. 569
  {
    topic: 6,
    kind: 'mixup',
    q: `The line ${y} = ${k} halving 0 ≤ ${y} ≤ 4 − ${X2}: at the mean height?`,
    a: `No, below it. The cap above ${y} = ${k} is ${fr(`4${sup(I('u'), '3')}`, '3')} with ${I('u')} = √(4 − ${k}); half of ${fr('32', '3')} gives ${sup(I('u'), '3')} = 4, so ${k} = 4 − ∛16 ≈ 1.48, below the mean height 1.6`,
    why: 'The region is wider near its base, so the equal-area line sits below the balance point.',
    say: null,
  },
  // p. 570
  {
    topic: 6,
    kind: 'mistake',
    q: `For which ${m} is the area between ${y} = ${X2} and ${y} = ${m}${x} + 3 equal to ${fr('32', '3')}?`,
    a: `Both ${m} = 2 and ${m} = −2: (${sq(m)} + 12)<sup>3/2</sup> = 64 gives ${sq(m)} = 4. Stopping at one root loses half the answer`,
    why: 'An inverse problem can have more than one admissible answer.',
    say: null,
  },
  // p. 570
  {
    topic: 6,
    kind: 'shortcut',
    q: `${y} = ${c} cuts ${bar(x)} + ${bar(y)} ≤ 2 into lower and upper parts in the ratio 3 ∶ 1. Find ${c}`,
    a: `${c} = 2 − √2: the cap above ${y} = ${c} is a triangle of area (2 − ${c})<sup>2</sup>, which must be 2 of the diamond’s 8`,
    why: 'A shape formula beats an integral when the cap is a triangle.',
    say: null,
  },

  // ── Additional E · Multi-Hump Periodic Areas ──
  // pp. 571, 573
  {
    topic: 7,
    kind: 'remember',
    q: 'What are hump counting and shift invariance?',
    a: `Each arch of ${SIN} has area ${INT('0', 'π')} ${SIN}${DX} = 2, so over ${n} full arches (pieces of length π) the area under ${bar(SIN)} is 2${n}; the same for ${bar(COS)}. If ${f} has period ${T}, ${INT(a, `${a}+${T}`)} ${f} is the same for every ${a}`,
    why: `${y} = ${SIN} on [0, ${fr('5π', '2')}]: 2 + 2 + 1 = 5.`,
    say: 'Three structural facts replace the casework.',
  },
  // p. 572
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the amplitude shift?',
    a: `${A}${NB}${SIN} + ${I('B')}${NB}${COS} = ${I('R')}${NB}sin(${x} + ${I('φ')}) with ${I('R')} = √(${sq(A)} + ${sq(I('B'))}); in particular ${SIN} − ${COS} = √2${NB}sin(${x} − ${fr('π', '4')}). The area between sine and cosine becomes a scaled area under one modulus sine`,
    why: `Between ${SIN} and ${COS} on [0, 2π]: √2 × 2 × 2 = 4√2, against three integrals by brute force.`,
    say: `Every arch of ${bar(SIN)} is a translate of the first.`,
  },
  // pp. 571–572
  {
    topic: 7,
    kind: 'mixup',
    q: `${INT('0', '5π/2')} ${SIN}${DX} against the area on the same interval?`,
    a: 'The integral is 1, after cancellations; the area is 5. When the question asks for area, report the area',
    why: `For an odd ${f} on [−${a}, ${a}] the integral is 0, but the area is 2${INT('0', a)} ${bar(f)}${DX}.`,
    say: null,
  },
  // pp. 572–573
  {
    topic: 7,
    kind: 'mistake',
    q: `sin${NB}2${x} and ${SIN} on [0, π]: one integral?`,
    a: `No: they cross inside, at ${x} = ${fr('π', '3')} (${SIN}(2${NB}${COS} − 1) = 0). Split there: ${fr('1', '4')} + ${fr('9', '4')} = ${fr('5', '2')}`,
    why: 'Here the area cannot exceed 4, since each curve alone has area 2 over [0, π].',
    say: null,
  },
  // p. 573
  {
    topic: 7,
    kind: 'shortcut',
    q: `The area under ${y} = ${bar(COS)} for 0 ≤ ${x} ≤ ${fr('3π', '2')}?`,
    a: `3: three pieces of length ${PI2}, each with area 1`,
    why: `Between ${SIN} and ${COS} on [0, π]: a window of one period of ${bar(tf('sin', I('u')))}, so √2 × 2 = 2√2.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // pp. 573–574
  {
    topic: 8,
    kind: 'shortcut',
    q: `${Y2} = 4${lam}${x} and ${y} = ${lam}${x} (${lam} > 0) enclose ${fr('1', '9')}. Find ${lam}`,
    a: `${lam} = 24: in ${y}, the line ${x} = ${fr(y, lam)} is right of ${x} = ${fr(Y2, `4${lam}`)} for 0 ≤ ${y} ≤ 4, so the area is ${fr('8', `3${lam}`)}`,
    why: `A sideways parabola and a line: integrate in ${y}.`,
    say: 'The examiner is testing decoding, not integration.',
  },
  // p. 574
  {
    topic: 8,
    kind: 'remember',
    q: `What do ${Y2} = ${a}${x}, ${X2} = ${a}${y} and ${y} = ${a}${X2}, ${x} = ${a}${Y2} enclose?`,
    a: `${fr(sq(a), '3')}, meeting at (0, 0) and (${a}, ${a}); and ${fr('1', `3${sq(a)}`)}, meeting at (0, 0) and (${fr('1', a)}, ${fr('1', a)})`,
    why: `Area 1 for ${y} = ${a}${X2}, ${x} = ${a}${Y2} gives ${a} = ${fr('1', '√3')}.`,
    say: 'Always compute top minus bottom.',
  },
  // p. 576
  {
    topic: 8,
    kind: 'shortcut',
    q: `The area under ${y} = max{${X2}, (1 − ${x})<sup>2</sup>, 2${x}(1 − ${x})} on [0, 1]?`,
    a: `${fr('17', '27')}: the ceiling switches at ${x} = ${fr('1', '3')} and ${fr('2', '3')}, from (1 − ${x})<sup>2</sup> to 2${x}(1 − ${x}) to ${X2}: ${fr('19', '81')} + ${fr('13', '81')} + ${fr('19', '81')}`,
    why: 'Find each switch point, then integrate slab by slab.',
    say: null,
  },
  // p. 577
  {
    topic: 8,
    kind: 'mistake',
    q: `Squaring √${x} = ${x} − 2 gives ${x} = 1 and ${x} = 4. Both intersections?`,
    a: `Only ${x} = 4: at ${x} = 1 the right side is negative. Check every intersection against the original curves and the stated quadrant`,
    why: `Domains kill roots too: ${Y2} = 4${x} has no point with ${x} < 0, so a root ${x} = −5 is rejected.`,
    say: null,
  },
  // p. 577
  {
    topic: 8,
    kind: 'mistake',
    q: `${X2} = ${y} and ${Y2} = 4${x} − 3 meet at (1, 1): a crossing?`,
    a: 'No: they touch there, with the same tangent (slope 2). Treating the touch as a pass-through corrupts the region',
    why: `Clauses such as “first quadrant”, “${x} ≥ 0” and “smaller region” reshape the answer too.`,
    say: null,
  },
];
