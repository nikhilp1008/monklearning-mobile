/**
 * KEY POINTS for Mathematics Class 12, Chapter 9 (Differential Equations).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–05 each have five Remember points and one of each other kind;
 * Additional topics A–D have two Remember points and one of each other kind;
 * Additional P, the past-paper analysis, has five points (three archetypes as
 * Remember and Exam shortcuts, two traps): 65 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4 (the chapter's Parts 1–5); Additional
 * topics A–D are 5–8 (Addenda A–D) and Additional P is 9 (Addendum P, What
 * JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, procedures and its Cheat sheet. Common mistakes: its Common
 * pitfalls and its MCQ traps (A–D, which print neither: the slips their
 * worked examples and practice answers warn about; P: its traps). Exam
 * shortcuts: its Pro-Tips, Speed Traps and worked examples. `say`: the
 * book's own memory aids, word for word without their quotation marks or the
 * gloss after them, with a full stop added where the aid has none. Topics
 * 01–05 print four aids each; all four are used, the first two as the
 * topic's memory lines and the other two on later `say`s, which are not
 * shown as memory lines: twenty in all, ten of them memory lines. A–D and P print no aids, so each has two of
 * the book's own one-line sentences (A: "The φ step is not optional even
 * when it vanishes.", cut, and "Nothing here is new theory."; B: "Never
 * leave an answer containing v." and "Both reduce to machinery you already
 * own.", cut; C: "Translate, get a first-order DE, solve by whichever
 * workhorse fits." and "All of these translate through one coordinate
 * picture.", cut; D: "Diagnosis takes five seconds: look at what the
 * equation omits." and "Drill the diagnosis, and the integration takes care
 * of itself."; P: "Learning shapes pays better than memorising answers." and
 * "You never need to know what g is."): ten more, all memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: a constant subnormal gives a parabola only when the constant
 * is not zero (y dy/dx = 0 is a horizontal line), so the point says a ≠ 0;
 * "cooling has a floor" holds for a body hotter than its surroundings, and
 * the point states only θ → θ_s. The Exam relevance claims, the past-paper
 * distribution and its counts, the CBSE, NCERT and syllabus remarks, the
 * difficulty tags and the paper names in P are left out.
 *
 * Markup is the chapter's own: d upright and glued to its variable, <i> for
 * every variable and constant letter, |…| with a word joiner, − (U+2212)
 * for minus, log as Topics 03–04 write it and ln as A–D and P write it. Every
 * fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a
 * fraction inside a fraction (a slope in a denominator is written y · dx/dy,
 * as the chapter does); no em dashes; and always a space after "<", so it is
 * never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = '\u00a0';
const WJ = '\u2060';
const bar = (s: string) => `|${WJ}${s}|`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const ex = (p: string) => `e<sup>${p}</sup>`;
const fn = (name: string, arg: string) => `${name}${NB}${arg}`;
const d = (top: string, bottom: string) => fr(`d${top}`, `d${bottom}`);

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const t = I('t');
const v = I('v');
const w = I('w');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const G = I('G');
const M = I('M');
const N = I('N');
const P = I('P');
const Q = I('Q');
const X = I('X');
const Y = I('Y');
const TH = I('θ');
const PHI = I('φ');
const LAM = I('λ');
const MU = I('μ');
const c1 = sb(c, '1');
const c2 = sb(c, '2');
const c3 = sb(c, '3');
const c4 = sb(c, '4');
const c5 = sb(c, '5');
const C1 = sb(C, '1');
const C2 = sb(C, '2');
const P1 = sb(P, '1');
const Q1 = sb(Q, '1');
const N0 = sb(N, '0');
const TH0 = sb(TH, '0');
const THS = sb(TH, 's');
const My = sb(M, y);
const Nx = sb(N, x);
const Gy = sb(G, y);
const X2 = sq(x);
const Y2 = sq(y);
const V2 = sq(v);
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
const DV = `${NB}d${v}`;
const DYDX = d(y, x);
const DXDY = d(x, y);
const DVDX = d(v, x);
const DPDX = d(p, x);
const DPDY = d(p, y);
const DNDT = d(N, t);
const DTHDT = d(TH, t);
const D2Y = fr(`d<sup>2</sup>${y}`, `d${x}<sup>2</sup>`);
const D3Y = fr(`d<sup>3</sup>${y}`, `d${x}<sup>3</sup>`);
const YX = fr(y, x);
const SINX = fn('sin', x);
const COSX = fn('cos', x);
const IF = 'IF';
const EP = ex(`∫${P}${NB}d${x}`);
const YP = `${y}′`;
const YPP = `${y}″`;
const HALF = fr('1', '2');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Order, Degree & Solutions ──
  // pp. 581–582, 585, 589
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the order and the degree of a differential equation?',
    a: 'Order: the order of the highest derivative present. Degree: the power of that highest-order derivative, once the equation is a polynomial in its derivatives',
    why: `${D3Y} + 5(${D2Y})<sup>2</sup> − 7${DYDX} + 4${y} = ${COSX}: order 3, degree 1.`,
    say: 'Order is the rank of the boss derivative; degree is the boss’s power, after the room is cleaned.',
  },
  // pp. 581, 583–584, 589
  {
    topic: 0,
    kind: 'remember',
    q: 'When is the degree not defined?',
    a: `When a derivative sits inside a transcendental function (sin, log, ${ex('(·)')}, tan<sup>−1</sup>, …): its expansion is an infinite series of powers of the derivative, so there is no highest power`,
    why: `${D2Y} + ${ex(`d${y}/d${x}`)} = 0: order 2, degree not defined.`,
    say: 'No polynomial, no degree.',
  },
  // pp. 581, 584, 586, 589
  {
    topic: 0,
    kind: 'remember',
    q: 'What must be done before the degree is read?',
    a: 'Clear radicals, fractional powers and denominators, usually by raising both sides to an integer power. The order does not change; the degree is read from the cleared form',
    why: `√(1 + (${DYDX})<sup>2</sup>) = ${D2Y}: square both sides, and the degree is 2.`,
    say: 'Clean before you count.',
  },
  // pp. 582, 584, 589
  {
    topic: 0,
    kind: 'remember',
    q: 'How many arbitrary constants does a general solution carry?',
    a: 'Exactly as many independent ones as the order of the equation. A particular solution, with its constants fixed by conditions, carries none',
    why: 'An order-3 equation’s general solution carries exactly three free constants: no more, no fewer.',
    say: 'Constants = Order.',
  },
  // pp. 582–583
  {
    topic: 0,
    kind: 'remember',
    q: 'Do order and degree depend on each other?',
    a: 'No: they are independent fingerprints. A degree, when it exists, is always a positive integer: never a fraction, never negative',
    why: `(${D2Y})<sup>4</sup> + ${DYDX} = 0 has order 2 but degree 4.`,
    say: null,
  },
  // p. 588
  {
    topic: 0,
    kind: 'mixup',
    q: `In (${DYDX})<sup>5</sup> + ${D2Y} = 0, is the degree 5?`,
    a: `No, 1: the degree is the power of the highest-order derivative, ${D2Y}, not the largest power anywhere`,
    why: 'Powers never decide the order either: only the highest derivative does.',
    say: null,
  },
  // pp. 586, 588
  {
    topic: 0,
    kind: 'mistake',
    q: `How many independent constants does ${y} = (${c1} + ${c2})${NB}${ex(`${x}+${c3}`)} + ${c4}${NB}sin(${x} + ${c5}) carry?`,
    a: `Three, not five: (${c1} + ${c2})${NB}${ex(c3)} is a single constant, and ${c4}${NB}sin(${x} + ${c5}) expands into two, the coefficients of ${SINX} and ${COSX}. So the order is 3`,
    why: 'Sums inside one coefficient and constants in an exponent collapse: simplify, then count.',
    say: null,
  },
  // pp. 587–588
  {
    topic: 0,
    kind: 'shortcut',
    q: `Order and degree of [1 + (${DYDX})<sup>2</sup>]<sup>3/2</sup> = ${k}${D2Y}?`,
    a: `Order 2, degree 2: squaring clears the power and leaves ${sq(k)}(${D2Y})<sup>2</sup> on the right`,
    why: 'The two-second gate: a derivative inside a transcendental function, degree undefined; under a root, square, then read.',
    say: null,
  },

  // ── Topic 02 · Formation of Differential Equations ──
  // pp. 591–592, 595
  {
    topic: 1,
    kind: 'remember',
    q: 'How is the differential equation of a family of curves formed?',
    a: `Count the independent arbitrary constants ${n}, differentiate ${n} times, eliminate the constants from the ${n} + 1 equations, and leave only ${x}, ${y} and derivatives`,
    why: `${Y2} = 4${a}${x}: 2${y}${DYDX} = 4${a}, so ${Y2} = 2${x}${y}${DYDX}, i.e. 2${x}${DYDX} − ${y} = 0.`,
    say: 'Constants in, derivatives out.',
  },
  // pp. 590–591, 595
  {
    topic: 1,
    kind: 'remember',
    q: 'What order does the formed equation have?',
    a: 'The number of independent arbitrary constants in the family: one constant gives order 1, two give order 2',
    why: `${y} = ${m}${x}: ${DYDX} = ${YX}, of order 1.`,
    say: 'Count the dials = count the order.',
  },
  // pp. 591, 595
  {
    topic: 1,
    kind: 'remember',
    q: `Why differentiate exactly ${n} times?`,
    a: `${n} relations beyond the original are needed to eliminate ${n} constants. Fewer leaves a constant behind; more gives an equation of higher order, which a larger family also satisfies`,
    why: 'Predict the order from the constant count first: a mismatch flags a missed collapse or a skipped differentiation.',
    say: 'Differentiate once per constant.',
  },
  // pp. 591, 593–594
  {
    topic: 1,
    kind: 'remember',
    q: `What order for all circles, and for the circles through the origin with centres on the ${x}-axis?`,
    a: `All circles, ${X2} + ${Y2} + 2${I('gx')} + 2${I('fy')} + ${c} = 0: order 3 (${g}, ${f}, ${c}). Through the origin, ${X2} + ${Y2} = 2${a}${x}: order 1, the centre’s ${a} alone`,
    why: `The second family gives ${DYDX} = ${fr(`${Y2} − ${X2}`, `2${x}${y}`)}: a homogeneous equation.`,
    say: 'No constant may survive the answer.',
  },
  // pp. 592, 594
  {
    topic: 1,
    kind: 'remember',
    q: `What is the equation of ${y} = ${A}${NB}${COSX} + ${B}${NB}${SINX}?`,
    a: `${D2Y} + ${y} = 0: two constants, two differentiations, and ${D2Y} = −(${A}${NB}${COSX} + ${B}${NB}${SINX}) = −${y}`,
    why: `${A}${ex(x)} + ${B}${ex(`−${x}`)} gives ${D2Y} − ${y} = 0 instead: exponential, not sinusoidal.`,
    say: null,
  },
  // p. 594
  {
    topic: 1,
    kind: 'mixup',
    q: `Is ${DYDX} = ${m} the equation of the family ${y} = ${m}${x}?`,
    a: `No: ${m} must be eliminated. ${m} = ${YX}, so ${DYDX} = ${YX}`,
    why: `${x}${DYDX} + ${y} = 0 belongs to a different family, ${x}${y} = ${c}.`,
    say: null,
  },
  // pp. 594–595
  {
    topic: 1,
    kind: 'mistake',
    q: `The order of the equation of ${y} = (${c1} + ${c2})${ex(x)} + ${c3}?`,
    a: `2, not 3: ${c1} + ${c2} merges into one constant, and ${c3} is the other`,
    why: 'Constants summed in one coefficient, multiplied together or buried in an exponent count once.',
    say: null,
  },
  // p. 593
  {
    topic: 1,
    kind: 'shortcut',
    q: `The equation of ${y} = ${ex(x)}(${A}${NB}${COSX} + ${B}${NB}${SINX})?`,
    a: `${D2Y} − 2${DYDX} + 2${y} = 0: with ${w} = ${ex(x)}(−${A}${NB}${SINX} + ${B}${NB}${COSX}), ${YP} = ${y} + ${w} and ${w}′ = ${w} − ${y}`,
    why: `Carry the intermediate ${w} through both eliminations: a small system, not a one-liner.`,
    say: null,
  },

  // ── Topic 03 · Separable & Homogeneous Equations ──
  // pp. 598–600, 604
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a separable equation, and its general solution?',
    a: `${DYDX} = ${g}(${x})${NB}${h}(${y}): ∫${fr(`d${y}`, `${h}(${y})`)} = ∫${g}(${x})${DX} + ${C}, with a single constant, since the two integrals’ constants combine into one`,
    why: `${DYDX} = (4${sup(x, '3')} + 2)${ex(`−${y}`)}: ${ex(y)}${DY} = (4${sup(x, '3')} + 2)${DX}, so ${ex(y)} = ${sup(x, '4')} + 2${x} + ${C}.`,
    say: 'Separate the laundry, integrate each basket.',
  },
  // pp. 597–599, 604
  {
    topic: 2,
    kind: 'remember',
    q: `When is ${DYDX} = ${I('F')}(${x}, ${y}) a homogeneous equation?`,
    a: `When ${I('F')}(${LAM}${x}, ${LAM}${y}) = ${I('F')}(${x}, ${y}): ${I('F')} is homogeneous of degree 0, a function of ${YX} alone. For ${M}${DX} + ${N}${DY} = 0: when ${M} and ${N} are homogeneous of the same degree`,
    why: `${fr(`${x} + ${y}`, `${x} − ${y}`)} is homogeneous; ${fr(`${x} + ${y} + 1`, `${x} − ${y}`)} is not: the lone +1 breaks the scale-invariance.`,
    say: `If it only sees the ratio ${YX}, let ${y} = ${v}${x}.`,
  },
  // pp. 598–599, 602
  {
    topic: 2,
    kind: 'remember',
    q: 'How is a homogeneous equation solved?',
    a: `Put ${y} = ${v}${x}, ${DYDX} = ${v} + ${x}${DVDX}: then ${fr(`d${v}`, `${PHI}(${v}) − ${v}`)} = ${fr(`d${x}`, x)}, separable. Solve, then put back ${v} = ${YX}. When ${x} dominates, ${x} = ${v}${y} is cleaner`,
    why: `${DYDX} = ${fr(`${x} + ${y}`, x)}: ${x}${DVDX} = 1, so ${y} = ${x}${NB}log${NB}${bar(x)} + ${C}${x}.`,
    say: null,
  },
  // pp. 597, 599, 602
  {
    topic: 2,
    kind: 'remember',
    q: `What can dividing by ${h}(${y}) to separate lose?`,
    a: `The constant solutions where ${h}(${y}) = 0: the division assumes ${h}(${y}) ≠ 0. Note them before dividing and check them at the end`,
    why: `${DYDX} = ${Y2}: dividing by ${Y2} loses ${y} = 0, which satisfies the equation.`,
    say: 'Divide and you might lose a root.',
  },
  // pp. 601–602
  {
    topic: 2,
    kind: 'remember',
    q: `How is ${DYDX} = ${fr(`${x} − ${y} + 3`, `${x} + ${y} − 1`)} solved?`,
    a: `Shift the origin to where the two lines meet, (−1, 2): ${X} = ${x} + 1, ${Y} = ${y} − 2 give ${d(Y, X)} = ${fr(`${X} − ${Y}`, `${X} + ${Y}`)}, homogeneous`,
    why: `If the lines are parallel, substitute their shared combination ${t} = ${a}${x} + ${b}${y} instead.`,
    say: null,
  },
  // p. 602
  {
    topic: 2,
    kind: 'mixup',
    q: `Is ${DYDX} = ${X2} + ${Y2} a homogeneous equation?`,
    a: `No: ${X2} + ${Y2} is a homogeneous function, of degree 2, but a homogeneous equation needs degree 0`,
    why: `${DYDX} = ${fr(`${X2} + ${Y2}`, `${x}${y}`)} is homogeneous: top and bottom both have degree 2.`,
    say: null,
  },
  // pp. 603–604
  {
    topic: 2,
    kind: 'mistake',
    q: `The answer to a ${y} = ${v}${x} problem still contains ${v}. Done?`,
    a: `No: back-substitute ${v} = ${YX}. An answer containing ${v} scores zero`,
    why: `Carry exactly one constant, written log${NB}${C}, so that the logs combine.`,
    say: `Came in as ${y}, must leave as ${y}.`,
  },
  // pp. 600, 603
  {
    topic: 2,
    kind: 'shortcut',
    q: `∫${fr(`1 + ${v}`, `1 − 2${v} − ${V2}`)}${DV}, fast?`,
    a: `−${HALF}${NB}log${NB}${bar(`1 − 2${v} − ${V2}`)}: the numerator is −${HALF} times the derivative of the denominator, so no partial fractions`,
    why: `It solves ${DYDX} = ${fr(`${x} − ${y}`, `${x} + ${y}`)}: ${X2} − 2${x}${y} − ${Y2} = ${C}.`,
    say: null,
  },

  // ── Topic 04 · Linear Differential Equations ──
  // pp. 605–606, 610–611
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the standard form of a linear equation?',
    a: `${DYDX} + ${P}${y} = ${Q}: the coefficient of ${DYDX} exactly 1, ${P} and ${Q} functions of ${x} alone, and ${y}, ${DYDX} each to the first power with no products`,
    why: `${DYDX} + ${x}${y} = ${X2} is linear; ${DYDX} + ${Y2} = ${x} and ${y}${DYDX} + ${y} = ${x} are not.`,
    say: `Standard form first, ${P} second.`,
  },
  // pp. 606–607, 611
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the integrating factor and the solution?',
    a: `${IF} = ${EP}, and ${y} · ${IF} = ∫${Q} · ${IF}${DX} + ${C}`,
    why: `${DYDX} + ${fr('2', x)}${y} = ${sup(x, '3')}: ${IF} = ${X2}, so ${y}${X2} = ${fr(sup(x, '6'), '6')} + ${C}.`,
    say: `${IF} = e to the integral of ${P}.`,
  },
  // pp. 606–607
  {
    topic: 3,
    kind: 'remember',
    q: `Why is the integrating factor ${EP}?`,
    a: `Multiply by ${MU}(${x}): the left side is (${MU}${y})′ = ${MU}${YP} + ${MU}′${y} exactly when ${d(MU, x)} = ${MU}${P}, a separable equation whose solution is ${MU} = ${EP}`,
    why: `So the left side is always ${fr('d', `d${x}`)}(${y} · ${IF}): never expand it.`,
    say: null,
  },
  // pp. 606, 609, 612
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the mirror case?',
    a: `Linear in ${x}: ${DXDY} + ${P1}${x} = ${Q1}, with ${P1}, ${Q1} functions of ${y}; ${IF} = ${ex(`∫${P1}${NB}d${y}`)}, and ${x} · ${IF} = ∫${Q1} · ${IF}${DY} + ${C}`,
    why: `${DYDX} = ${fr(y, `${x} + ${Y2}`)} flips to ${DXDY} − ${fr('1', y)}${x} = ${y}: ${x} = ${Y2} + ${C}${y}.`,
    say: `Messy in ${y}? Try ${x}.`,
  },
  // pp. 606, 608, 612
  {
    topic: 3,
    kind: 'remember',
    q: 'What is integrated on the right-hand side?',
    a: `${Q} · ${IF}, not ${Q} alone: the integrating factor rides into the integral`,
    why: `${DYDX} + ${y}${NB}cot${NB}${x} = 4${x}${NB}csc${NB}${x}: ${IF} = ${SINX}, and csc${NB}${x} · ${SINX} = 1 leaves ∫4${x}${DX}.`,
    say: 'The IF rides into the integral.',
  },
  // p. 611
  {
    topic: 3,
    kind: 'mixup',
    q: `${DYDX} = ${fr('1', `${x} + ${y}`)}: linear in ${y}, or in ${x}?`,
    a: `In ${x}: ${DXDY} = ${x} + ${y}, i.e. ${DXDY} − ${x} = ${y} with ${P1} = −1. As written, ${y} sits in a denominator, and the right side is homogeneous of degree −1, not 0`,
    why: `If ${y} is tangled but ${x} is first-degree, flip to ${DXDY}.`,
    say: null,
  },
  // pp. 610–611
  {
    topic: 3,
    kind: 'mistake',
    q: `The integrating factor of ${x}${DYDX} − 2${y} = ${sup(x, '5')}?`,
    a: `${fr('1', X2)}: divide by ${x} first, so ${P} = −${fr('2', x)} and ${ex(`−2${NB}log${NB}${x}`)} = ${sup(x, '−2')}. Reading ${P} = −2 gives ${ex(`−2${x}`)}, and the whole problem collapses`,
    why: `A negative ${P} gives a negative power or a decaying exponential: check the sign before exponentiating.`,
    say: null,
  },
  // pp. 610–611
  {
    topic: 3,
    kind: 'shortcut',
    q: `${DYDX} − ${y} = 2, ${y}(0) = 0?`,
    a: `${y} = 2(${ex(x)} − 1): ${IF} = ${ex(`−${x}`)}, so ${y} = −2 + ${C}${ex(x)}, and ${y}(0) = 0 gives ${C} = 2`,
    why: `${y} = 2${ex(x)} is the decoy that drops the −2: then ${y}(0) = 2.`,
    say: null,
  },

  // ── Topic 05 · Applications of Differential Equations ──
  // pp. 613–615, 618–619
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the growth and decay model?',
    a: `${DNDT} = ${k}${N} ⇒ ${N} = ${N0}${NB}${ex(`${k}${t}`)}: ${k} > 0 grows, ${k} < 0 decays. Doubling time and half-life are ${fr(`ln${NB}2`, bar(k))}`,
    why: 'A culture that doubles in 4 hours is 8 = 2<sup>3</sup> times its size after 3 × 4 = 12 hours.',
    say: 'Proportional to itself ⇒ exponential.',
  },
  // pp. 613–614, 616, 618–619
  {
    topic: 4,
    kind: 'remember',
    q: 'What is Newton’s law of cooling?',
    a: `${DTHDT} = −${k}(${TH} − ${THS}), ${k} > 0 ⇒ ${TH} = ${THS} + (${TH0} − ${THS})${ex(`−${k}${t}`)}: the rate tracks the gap with the surroundings, and ${TH} → ${THS} as ${t} → ∞`,
    why: 'A body at 100°C in a room at 25°C, at 70°C after 10 minutes, is at 52°C after 20.',
    say: 'Cooling tracks the gap, not the heat.',
  },
  // pp. 614, 617–618
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the subtangent and the subnormal?',
    a: `At (${x}, ${y}), with slope ${DYDX}: subtangent ${y}${NB}·${NB}${DXDY}, subnormal ${y}${DYDX}`,
    why: `A constant subnormal, ${y}${DYDX} = ${a} with ${a} ≠ 0, gives ${Y2} = 2${a}${x} + ${C}: a parabola.`,
    say: null,
  },
  // pp. 614, 616, 618–619
  {
    topic: 4,
    kind: 'remember',
    q: 'How are orthogonal trajectories found?',
    a: `Form the family’s own equation, replace ${DYDX} by −${DXDY}, and solve`,
    why: `${y} = ${C}${X2}: ${DYDX} = ${fr(`2${y}`, x)}, so the trajectories solve ${DYDX} = −${fr(x, `2${y}`)}: ${fr(X2, '2')} + ${Y2} = ${C1}, ellipses.`,
    say: 'Right angles ⇒ negative reciprocal slope.',
  },
  // pp. 614–615
  {
    topic: 4,
    kind: 'remember',
    q: 'How is an application solved?',
    a: `Name the variables, translate the rate sentence into an equation with its sign fixed by whether the quantity rises or falls, solve it, let the initial value fix the constant and a second data point fix ${k}, then sanity-check the limiting behaviour`,
    why: 'Underline the rate word and what it is proportional to before writing any symbols.',
    say: null,
  },
  // pp. 613, 618
  {
    topic: 4,
    kind: 'mixup',
    q: `Cooling: ${DTHDT} proportional to ${TH}, or to ${TH} − ${THS}?`,
    a: `To ${TH} − ${THS}, the gap with the surroundings, not the body’s own temperature`,
    why: 'Hot chai cools fast straight out of the kettle and barely at all near room temperature.',
    say: null,
  },
  // pp. 613, 618
  {
    topic: 4,
    kind: 'mistake',
    q: `Decay and cooling with ${k} > 0: which sign?`,
    a: `Minus: ${DNDT} = −${k}${N} and ${DTHDT} = −${k}(${TH} − ${THS}). With a plus, a cooling body heats up without bound`,
    why: `Ask whether the quantity rises or falls before writing ${k}.`,
    say: `Lose ⇒ minus ${k}.`,
  },
  // pp. 615–616, 618
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Half-life 1600 years: what fraction remains after 4800 years?',
    a: `${fr('1', '8')}: ${fr('4800', '1600')} = 3 half-lives, so (${HALF})<sup>3</sup>. Count the halvings; skip ${k}`,
    why: `Cooling read at 10 and 20 minutes: write ${ex(`−20${k}`)} = (${ex(`−10${k}`)})<sup>2</sup> and never solve for ${k}.`,
    say: null,
  },

  // ── Additional A · Exact Differential Equations and Solving by Inspection ──
  // pp. 620–623
  {
    topic: 5,
    kind: 'remember',
    q: `When is ${M}${DX} + ${N}${DY} = 0 exact, and how is it solved?`,
    a: `Exact when ${My} = ${Nx}, with ${M}, ${N} and their first partial derivatives continuous on a rectangle. Then ${G} = ∫${M}${DX} with ${y} held constant, ${PHI}(${y}) = ${N} − ${Gy}, and the solution is ${G} + ∫${PHI}(${y})${DY} = ${C}`,
    why: `(2${x}${y} + 3${X2})${DX} + (${X2} + 6${Y2})${DY} = 0: ${X2}${y} + ${sup(x, '3')} + 2${sup(y, '3')} = ${C}.`,
    say: `The ${PHI} step is not optional even when it vanishes.`,
  },
  // pp. 620–621
  {
    topic: 5,
    kind: 'remember',
    q: 'What does the inspection table hold?',
    a: `d(${x}${y}) = ${y}${DX} + ${x}${DY}; d(${YX}) = ${fr(`${x}${DY} − ${y}${DX}`, X2)}; d(${fr(x, y)}) = ${fr(`${y}${DX} − ${x}${DY}`, Y2)}; d(ln(${X2} + ${Y2})) = ${fr(`2(${x}${DX} + ${y}${DY})`, `${X2} + ${Y2}`)}; d(tan<sup>−1</sup>(${YX})) = ${fr(`${x}${DY} − ${y}${DX}`, `${X2} + ${Y2}`)}`,
    why: `Two more: ${fr(`d(${x}${y})`, `(${x}${y})<sup>2</sup>`)} = −d(${fr('1', `${x}${y}`)}) and ${fr(`${y}${DX} − ${x}${DY}`, `${x}${y}`)} = d(ln${NB}${bar(fr(x, y))}).`,
    say: 'Nothing here is new theory.',
  },
  // pp. 621, 623
  {
    topic: 5,
    kind: 'mixup',
    q: `${x}${DY} − ${y}${DX} on top: d(${YX}) or d(tan<sup>−1</sup>(${YX}))?`,
    a: `Over ${X2} it is d(${YX}); over ${X2} + ${Y2} it is d(tan<sup>−1</sup>(${YX}))`,
    why: `${fr(`${x}${DY} − ${y}${DX}`, `${X2} + ${Y2}`)} = d${x} gives tan<sup>−1</sup>(${YX}) = ${x} + ${C}.`,
    say: null,
  },
  // pp. 622–623
  {
    topic: 5,
    kind: 'mistake',
    q: `In (${y}${ex(`${x}${y}`)} + 2${x})${DX} + ${x}${ex(`${x}${y}`)}${DY} = 0, may the ${PHI} step be skipped?`,
    a: `No: compute ${PHI}(${y}) = ${N} − ${Gy} every time. Here ${G} = ${ex(`${x}${y}`)} + ${X2} and ${PHI} = 0, so ${ex(`${x}${y}`)} + ${X2} = ${C}`,
    why: 'Skipping it is how students “confirm” wrong answers.',
    say: null,
  },
  // pp. 622–623
  {
    topic: 5,
    kind: 'shortcut',
    q: `${y}(1 + ${x}${y})${DX} + ${x}(1 − ${x}${y})${DY} = 0, not exact?`,
    a: `Regroup as d(${x}${y}) + ${x}${y}(${y}${DX} − ${x}${DY}) = 0 and divide by ${X2}${Y2}: ln${NB}${bar(fr(x, y))} − ${fr('1', `${x}${y}`)} = ${C}`,
    why: `The division loses ${x} = 0 and ${y} = 0, which satisfy the original equation.`,
    say: null,
  },

  // ── Additional B · Two Reducible Types: Bernoulli and f(ax + by + c) ──
  // pp. 624–625
  {
    topic: 6,
    kind: 'remember',
    q: 'How is a Bernoulli equation solved?',
    a: `${DYDX} + ${P}${y} = ${Q}${sup(y, n)}, ${n} ≠ 0, 1: divide by ${sup(y, n)} and put ${v} = ${sup(y, `1−${n}`)}, giving ${DVDX} + (1 − ${n})${P}${v} = (1 − ${n})${Q}, linear in ${v}. Solve, then put back ${v} = ${sup(y, `1−${n}`)}`,
    why: `${DYDX} + ${y} = ${Y2}${ex(x)}: ${v} = ${fr('1', y)}, and ${fr('1', y)} = ${ex(x)}(${C} − ${x}).`,
    say: `Never leave an answer containing ${v}.`,
  },
  // pp. 624–626
  {
    topic: 6,
    kind: 'remember',
    q: `How is ${DYDX} = ${f}(${a}${x} + ${b}${y} + ${c}) solved?`,
    a: `Put ${v} = ${a}${x} + ${b}${y} + ${c}: ${DVDX} = ${a} + ${b}${f}(${v}), separable as ${fr(`d${v}`, `${a} + ${b}${f}(${v})`)} = d${x}`,
    why: `${DYDX} = tan<sup>2</sup>(${x} + ${y}): ${v}′ = sec<sup>2</sup>${NB}${v}, so cos<sup>2</sup>${NB}${v}${DV} = d${x} and ${fr(`${y} − ${x}`, '2')} + ${fr(`sin(2(${x} + ${y}))`, '4')} = ${C}.`,
    say: 'Both reduce to machinery you already own.',
  },
  // pp. 624, 626
  {
    topic: 6,
    kind: 'mixup',
    q: `Linear, or Bernoulli: ${DYDX} + ${YX} = ${x}${Y2}?`,
    a: `Bernoulli with ${n} = 2: the ${Y2} spoils linearity. With ${v} = ${fr('1', y)}: ${v}′ − ${fr(v, x)} = −${x}, ${IF} = ${fr('1', x)}, so ${fr('1', y)} = ${C}${x} − ${X2}`,
    why: `With ${n} = 0 or 1 the equation is already linear and needs no substitution.`,
    say: null,
  },
  // p. 625
  {
    topic: 6,
    kind: 'mistake',
    q: `Solving ${DYDX} + ${y} = ${Y2}${ex(x)} by dividing by ${Y2}: anything lost?`,
    a: `Yes, ${y} = 0, which satisfies the equation (0 + 0 = 0): name it beside the general solution`,
    why: `${fr('1', y)} = ${ex(x)}(${C} − ${x}) never gives ${y} = 0.`,
    say: null,
  },
  // p. 626
  {
    topic: 6,
    kind: 'shortcut',
    q: `${DYDX} = cos(${x} + ${y})?`,
    a: `${v} = ${x} + ${y}: ${v}′ = 1 + cos${NB}${v} = 2${NB}cos<sup>2</sup>(${fr(v, '2')}), so tan${NB}${fr(`${x} + ${y}`, '2')} = ${x} + ${C}`,
    why: 'The argument of the function is itself the right new variable.',
    say: null,
  },

  // ── Additional C · Geometric Conditions Beyond the Subnormal ──
  // pp. 626–628
  {
    topic: 7,
    kind: 'remember',
    q: `What do the tangent and the normal cut off, with ${m} = ${DYDX} at (${x}, ${y})?`,
    a: `Subtangent ${bar(fr(y, m))}, length of tangent ${fr(`${bar(y)}√(1 + ${sq(m)})`, bar(m))}; subnormal ${bar(`${m}${y}`)}, length of normal ${bar(y)}√(1 + ${sq(m)})`,
    why: `A constant subnormal 4 through (2, 3): ${y}${DY} = 4${DX}, so ${Y2} = 8${x} − 7.`,
    say: 'Translate, get a first-order DE, solve by whichever workhorse fits.',
  },
  // pp. 626–627
  {
    topic: 7,
    kind: 'remember',
    q: 'Where does the tangent meet the axes?',
    a: `From ${Y} − ${y} = ${m}(${X} − ${x}): the ${x}-intercept is ${x} − ${fr(y, m)}, the ${y}-intercept ${y} − ${m}${x}`,
    why: `Tangent bisected at the point of contact: ${x} = ${HALF}(${x} − ${fr(y, m)}), so ${DYDX} = −${YX} and, through (2, 3), ${x}${y} = 6.`,
    say: 'All of these translate through one coordinate picture.',
  },
  // pp. 626–627
  {
    topic: 7,
    kind: 'mixup',
    q: 'Subtangent, or length of the tangent?',
    a: `The subtangent is the stretch of the ${x}-axis from the foot of the ordinate to where the tangent meets it, ${bar(fr(y, m))}; the length of the tangent is the tangent segment itself, ${fr(`${bar(y)}√(1 + ${sq(m)})`, bar(m))}`,
    why: `Likewise the subnormal ${bar(`${m}${y}`)} against the length of the normal, ${bar(y)}√(1 + ${sq(m)}).`,
    say: null,
  },
  // p. 628
  {
    topic: 7,
    kind: 'mistake',
    q: 'A tangent cutting off equal nonzero intercepts: slope +1?',
    a: `No, −1: intercepts ${a} and ${b} give slope −${fr(b, a)}, so ${DYDX} = −1 and, through (1, 1), ${x} + ${y} = 2`,
    why: 'Write the line through both intercepts before reading its slope.',
    say: null,
  },
  // p. 627
  {
    topic: 7,
    kind: 'shortcut',
    q: 'The curve through (2, 1) whose normals all pass through (1, 0)?',
    a: `${X2} + ${Y2} = 2${x} + 1: −${fr('1', m)} = ${fr(y, `${x} − 1`)} gives ${y}${DY} = (1 − ${x})${DX}, a circle centred at (1, 0) with radius √2`,
    why: 'Every normal of a circle passes through its centre: the answer checks itself.',
    say: null,
  },

  // ── Additional D · Second-Order Equations by Lowering the Order ──
  // pp. 628–630
  {
    topic: 8,
    kind: 'remember',
    q: `How is ${YPP} = ${f}(${x}, ${YP}), with ${y} absent, solved?`,
    a: `Put ${p} = ${DYDX}, so ${YPP} = ${DPDX}: solve the first-order ${DPDX} = ${f}(${x}, ${p}) for ${p}, then ${y} = ∫${p}${DX} + ${C2}. Two integrations, two constants`,
    why: `${YPP} = ${YP} + ${x}: ${p}′ − ${p} = ${x}, so ${p} = ${C1}${ex(x)} − ${x} − 1 and ${y} = ${C1}${ex(x)} − ${fr(X2, '2')} − ${x} + ${C2}.`,
    say: 'Diagnosis takes five seconds: look at what the equation omits.',
  },
  // pp. 628–630
  {
    topic: 8,
    kind: 'remember',
    q: `And ${YPP} = ${f}(${y}, ${YP}), with ${x} absent?`,
    a: `By the chain rule ${YPP} = ${p}${DPDY}: solve ${p}${DPDY} = ${f}(${y}, ${p}), first order in ${p} and ${y}, then ${DYDX} = ${p}(${y}), which is separable`,
    why: `${y}${YPP} = (${YP})<sup>2</sup>: ${y}${p}${DPDY} = ${sq(p)}, so ${p} = ${A}${y} and ${y} = ${B}${ex(`${A}${x}`)}.`,
    say: 'Drill the diagnosis, and the integration takes care of itself.',
  },
  // pp. 628–629
  {
    topic: 8,
    kind: 'mixup',
    q: `With ${x} absent, is ${YPP} = ${DPDX}?`,
    a: `Write it as ${p}${DPDY}: ${p} is then treated as a function of ${y}, so ${x} is not dragged back in`,
    why: `Omits ${y}: ${DPDX}. Omits ${x}: ${p}${DPDY}.`,
    say: null,
  },
  // p. 629
  {
    topic: 8,
    kind: 'mistake',
    q: `In ${y}${YPP} = (${YP})<sup>2</sup>, may ${y}${p}${DPDY} = ${sq(p)} be divided by ${p}?`,
    a: `Only once ${p} = 0, the constant solutions, is set aside; ${y} = ${B}${ex(`${A}${x}`)} includes them at ${A} = 0`,
    why: `The two constants ${A}, ${B} match the order 2.`,
    say: null,
  },
  // p. 630
  {
    topic: 8,
    kind: 'shortcut',
    q: `${x}${YPP} + ${YP} = 0, fast?`,
    a: `It is (${x}${YP})′ = 0: ${x}${YP} = ${C1}, so ${y} = ${C1}${NB}ln${NB}${bar(x)} + ${C2}`,
    why: `Likewise ${y}${YPP} + (${YP})<sup>2</sup> = (${y}${YP})′ = 0 gives ${Y2} = 2${C1}${x} + ${C2}.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // pp. 631–632
  {
    topic: 9,
    kind: 'shortcut',
    q: `The order of the equation whose solution is ${y} = (${c1} + ${c2})${NB}cos(${x} + ${c3}) − ${c4}${ex(`${x}+${c5}`)}?`,
    a: `3, not 5: cos(${x} + ${c3}) splits into ${COSX} and ${SINX} terms, two constants, and ${c4}${ex(c5)} collapses to one`,
    why: 'Expand before counting.',
    say: 'Learning shapes pays better than memorising answers.',
  },
  // pp. 631–632
  {
    topic: 9,
    kind: 'remember',
    q: `(${X2} − ${Y2})${DX} + 2${x}${y}${DY} = 0 through (1, 1)?`,
    a: `${y} = ${v}${x} gives ${X2} + ${Y2} = ${C}${x}, and (1, 1) fixes ${C} = 2: the circle (${x} − 1)<sup>2</sup> + ${Y2} = 1`,
    why: 'Examiners recycle: the same equation has been set twice.',
    say: null,
  },
  // p. 634
  {
    topic: 9,
    kind: 'shortcut',
    q: `${YP} + ${y}${g}′(${x}) = ${g}(${x})${g}′(${x}), ${g}(0) = ${g}(2) = 0, ${y}(0) = 0: ${y}(2)?`,
    a: `0: ${IF} = ${ex(g)}, so ${y}${ex(g)} = ${ex(g)}(${g} − 1) + ${C}; ${C} = 1, and at ${x} = 2, ${y}(2) = −1 + 1`,
    why: `∫${g}${ex(g)}${NB}d${g} = ${ex(g)}(${g} − 1) does all the work.`,
    say: `You never need to know what ${g} is.`,
  },
  // pp. 635–636
  {
    topic: 9,
    kind: 'mistake',
    q: `Order and degree of the equation of ${Y2} = 2${c}(${x} + √${c})?`,
    a: `Order 1, degree 3: ${c} = ${y}${YP} leaves (${y}${YP})<sup>3/2</sup>, and squaring gives (${Y2} − 2${x}${y}${YP})<sup>2</sup> = 4${sup(y, '3')}(${YP})<sup>3</sup>. Reading the unsquared form gives degree 1`,
    why: 'Clear fractional powers before reading the degree.',
    say: null,
  },
  // pp. 633, 635
  {
    topic: 9,
    kind: 'mistake',
    q: `${y}${DX} + ${Y2}${DY} = ${x}${DY}, ${y} > 0, ${y}(1) = 1: ${y}(−3)?`,
    a: `3: linear in ${x}, ${DXDY} − ${fr(x, y)} = −${y} gives ${x} = 2${y} − ${Y2}; at ${x} = −3, ${y} = 3 or −1, and ${y} > 0 rejects −1`,
    why: 'The stated condition is not decoration: −1 is the common wrong answer.',
    say: null,
  },
];
