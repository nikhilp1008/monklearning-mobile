/**
 * KEY POINTS for Mathematics Class 12, Chapter 5 (Continuity and
 * Differentiability).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–07 each have four or five Remember points, at least one of each
 * other kind and one Exam shortcut (Topic 01 carries two Common mistakes,
 * Topic 07 two Exam shortcuts); Additional topics A–E have two Remember
 * points and one of each other kind; Additional P, the past-paper analysis,
 * has five points (archetypes as Remember and Exam shortcuts, two traps): 87
 * points in all. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–07 are 0–6 (the chapter's numbered parts 1–7);
 * Additional topics A–E are 7–11 (Addenda A–E) and Additional P is 12
 * (Addendum P, What JEE Actually Asks). No point refers to another topic by
 * number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, formulas, derivations and its Cheat sheet. Common mistakes:
 * its Common student pitfalls and its MCQ traps (A–E, which print neither:
 * the slips their worked examples and practice answers warn about; P: its
 * traps). Exam shortcuts: its Pro-Tips, Speed Traps and worked examples.
 * `say`: the book's own memory aids, word for word without their quotation
 * marks and the gloss after them: Topics 01–06 print one each and Topic 07
 * two; all eight are here, all of them memory lines. Topic 01's drops its
 * gloss (": Differentiable ⇒ Continuous, but …"), Topic 02's its lead
 * "Quotient:" (capitalised) and Topic 07's their leads "Rolle:" and "MVT:"
 * (capitalised). A–E and P print no aids, so each has two of the book's own
 * one-line sentences (A: "Every standard limit is a derivative in
 * disguise." and "Factor the numerator rather than expanding anything.";
 * B: "Nesting does not heal a corner sitting away from the outer zeros." and
 * "A corner plus a smooth term cannot cancel.", cut; C: "The single-point
 * continuity assumption is doing all the work." and "No additive function is
 * continuous at exactly one point.", cut from its bracket and capitalised;
 * D: "Lagrange is CMVT with the simplest possible companion.", cut, and
 * "Keep the two jobs separate in your answer."; E: "The floor function
 * rounds down." and "Touching an integer from above is harmless; touching
 * from below, or crossing, is fatal."; P: "Simplify fully before
 * substituting any value." and "Corners add unless they cancel.", cut):
 * twenty in all, all of them memory lines.
 *
 * Where the book over-states a rule, the point states only the true version;
 * in this chapter the reviewed text needed no such repair (the
 * principal-range conditions, the zero-slope rule for modulus corners and the
 * minimum-touch rule for floors are all stated with their conditions). The
 * Exam relevance claims, the CBSE, NCERT, syllabus and L'Hôpital-for-boards
 * remarks (Lagrange's theorem is given without them, decision 25), the
 * past-paper distribution and paper counts in P, and the year used as an
 * argument in an Additional C practice question are left out.
 *
 * Markup is the chapter's own: <i> for every variable and function letter,
 * d/dx with an upright d, e, ln, lim, sin and the other function names
 * upright, LHL/RHL/LHD/RHD upright, ′ (U+2032) for a derivative, |x| with a
 * word joiner, ⌊x⌋ for the greatest integer, − (U+2212) for minus. Every
 * fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a
 * fraction inside a numerator (÷ there instead); no em dashes; and always a
 * space after "<", so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const WJ = '⁠';
const abs = (s: string) => `|${WJ}${s}|`;
const fl = (s: string) => `⌊${s}⌋`;
const sup = (b: string, s: string) => `${b}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const cu = (s: string) => sup(s, '3');
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
const q = I('q');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const th = I('θ');
const fp = `${f}′`;
const gp = `${g}′`;
const of = (fn: string, s: string) => `${fn}(${s})`;
const lim = (s: string) => `lim<sub>${s}</sub>${NB}`;
const H0 = lim(`${h}→0`);
const H0P = lim(`${h}→0<sup>+</sup>`);
/** d/dx with an upright d. */
const D = fr('d', `d${x}`);
const DYDX = fr(`d${y}`, `d${x}`);
const DYDT = fr(`d${y}`, `d${t}`);
const DXDT = fr(`d${x}`, `d${t}`);
const D2Y = fr(`d<sup>2</sup>${y}`, `d${x}<sup>2</sup>`);
const D2YT = fr(`d<sup>2</sup>${y}`, `d${t}<sup>2</sup>`);
const D2XT = fr(`d<sup>2</sup>${x}`, `d${t}<sup>2</sup>`);
const DDT = fr('d', `d${t}`);
const ex = (s: string) => `e<sup>${s}</sup>`;
const EX = ex(x);
const X2 = sq(x);
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const LNX = `ln${NB}${x}`;
const inv = (fn: string, s = x) => `${fn}<sup>−1</sup>${NB}${s}`;
const R1X2 = `√(1 − ${X2})`;
const LHL = 'LHL';
const RHL = 'RHL';
const LHD = 'LHD';
const RHD = 'RHD';
const ONE_PLUS = `1 + ${X2}`;
const HALF = fr('1', '2');
const RT2 = fr('1', '√2');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Continuity & Differentiability: The Foundations ──
  // pp. 308–310
  {
    topic: 0,
    kind: 'remember',
    q: `What three things must hold for ${f} to be continuous at ${x} = ${c}?`,
    a: `${of(f, c)} exists; the limit exists, so ${LHL} = ${RHL}; and the limit equals the value. In one line: ${LHL} = ${RHL} = ${of(f, c)}, with ${LHL} = ${H0P}${of(f, `${c} − ${h}`)} and ${RHL} = ${H0P}${of(f, `${c} + ${h}`)}`,
    why: `${LHL} ≠ ${RHL} is a jump; ${LHL} = ${RHL} ≠ ${of(f, c)} is a removable hole.`,
    say: null,
  },
  // pp. 309–310
  {
    topic: 0,
    kind: 'remember',
    q: `When is ${f} differentiable at ${c}?`,
    a: `When ${LHD} = ${H0P}${fr(`${of(f, `${c} − ${h}`)} − ${of(f, c)}`, `−${h}`)} and ${RHD} = ${H0P}${fr(`${of(f, `${c} + ${h}`)} − ${of(f, c)}`, h)} are equal and finite; then ${of(fp, c)} is that common value. Check continuity first: if it fails, stop`,
    why: `${LHD} ≠ ${RHD} is a corner; an infinite one-sided derivative is a vertical tangent or cusp.`,
    say: null,
  },
  // pp. 309–310, 316
  {
    topic: 0,
    kind: 'remember',
    q: 'Which way does the bridge theorem run, and why?',
    a: `Differentiable ⇒ continuous, never the reverse. For ${x} ≠ ${c}, ${of(f, x)} − ${of(f, c)} = ${fr(`${of(f, x)} − ${of(f, c)}`, `${x} − ${c}`)} · (${x} − ${c}), whose limit is ${of(fp, c)} · 0 = 0`,
    why: `${abs(x)} at 0 is continuous but not differentiable: the first factor has no finite limit there.`,
    say: 'DiCo, not CoDi.',
  },
  // pp. 308, 316
  {
    topic: 0,
    kind: 'remember',
    q: 'Where does a function fail to be differentiable?',
    a: `At a corner (${abs(x)} at 0), at a cusp or vertical tangent (${x}<sup>1/3</sup> at 0, where the slope blows up), and at every discontinuity (${fl(x)} at each integer). The first two can happen where the function is continuous`,
    why: 'No tangent can exist where the graph is not even connected.',
    say: null,
  },
  // p. 313
  {
    topic: 0,
    kind: 'remember',
    q: `${of(f, x)} = ${X2}${NB}sin${NB}${fr('1', x)} for ${x} ≠ 0, ${of(f, '0')} = 0: is ${f} differentiable at 0, and is ${fp} continuous there?`,
    a: `Differentiable, with ${of(fp, '0')} = ${H0}${h}${NB}sin${NB}${fr('1', h)} = 0 by squeeze. But ${of(fp, x)} = 2${x}${NB}sin${NB}${fr('1', x)} − cos${NB}${fr('1', x)} has no limit at 0, so ${fp} is not continuous there`,
    why: 'Differentiability does not force the derivative to be continuous.',
    say: null,
  },
  // p. 308
  {
    topic: 0,
    kind: 'mixup',
    q: `${LHL} = ${RHL} at ${c}: is ${f} continuous there?`,
    a: `Not necessarily: that only says the limit exists. Continuity also needs ${of(f, c)} to exist and equal it; ${LHL} = ${RHL} ≠ ${of(f, c)} is a removable hole`,
    why: 'Both paths must lead to the same dot, and the dot must be painted there.',
    say: null,
  },
  // p. 315
  {
    topic: 0,
    kind: 'mistake',
    q: `${of(f, x)} = ${a}${x} + 1 for ${x} ≤ 1 and ${X2} + ${b} for ${x} > 1 is differentiable at 1: what is ${a} + ${b}?`,
    a: `4. Continuity gives ${a} + 1 = 1 + ${b}, so ${a} = ${b}; equal slopes give ${a} = 2. Solving only the derivative condition and mishandling ${b}, or writing ${a} = ${b} + 1, lands on the wrong options`,
    why: 'Differentiability at a join needs continuity there as well as equal slopes.',
    say: null,
  },
  // pp. 314–315
  {
    topic: 0,
    kind: 'mistake',
    q: `At how many points of (0, 3) is ${fl(x)} discontinuous?`,
    a: `Two, ${x} = 1 and 2. ${x} = 3 is not inside the open interval, so it does not count`,
    why: `In (−2, 3) the count is 4: ${x} = −1, 0, 1, 2.`,
    say: null,
  },
  // pp. 313, 315
  {
    topic: 0,
    kind: 'shortcut',
    q: `At how many points is ${abs(`${X2} − 4`)} + ${abs(`${x} − 1`)} not differentiable?`,
    a: `Three: ${x} = −2, 1, 2. A term ${abs(of(g, x))} has a corner where ${g} crosses zero with ${of(gp, x)} ≠ 0; the vertex ${x} = 0 of ${X2} − 4 is not a zero, so it is not a corner`,
    why: 'For a piecewise function, test only the junctions: standard pieces are smooth inside.',
    say: null,
  },

  // ── Topic 02 · The Differentiation Toolkit ──
  // p. 317
  {
    topic: 1,
    kind: 'remember',
    q: `What are the derivatives of ${sup(x, n)}, ${EX}, ${sup(a, x)}, ${LNX} and log<sub>${a}</sub>${NB}${x}?`,
    a: `${n}${sup(x, `${n}−1`)}, ${EX}, ${sup(a, x)}${NB}ln${NB}${a}, ${fr('1', x)} and ${fr('1', `${x}${NB}ln${NB}${a}`)}; each holds on its domain (${x} > 0 for the logarithms, ${a} > 0 and ${a} ≠ 1)`,
    why: `A constant differentiates to 0.`,
    say: null,
  },
  // pp. 317, 321–322
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the six trigonometric derivatives, and which carry a minus sign?',
    a: `sin → cos, cos → −sin, tan → sec<sup>2</sup>, cot → −csc<sup>2</sup>, sec → sec${NB}tan, csc → −csc${NB}cot. The “negative six”: cos, cot, csc and cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup> all differentiate with a minus`,
    why: `sec${NB}${x}${NB}tan${NB}${x} is the derivative of sec${NB}${x}, not of tan${NB}${x}.`,
    say: null,
  },
  // pp. 317, 319, 322
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the product and quotient rules?',
    a: `(${I('uv')})′ = ${u}′${v} + ${u}${v}′: two terms, the two strips a rectangle of sides ${u} and ${v} gains. (${fr(u, v)})′ = ${fr(`${u}′${v} − ${u}${v}′`, sq(v))}, with ${v} ≠ 0`,
    why: 'A one-term answer to a product is wrong by inspection.',
    say: 'Low d-high minus high d-low, all over low-squared.',
  },
  // pp. 317–318, 321
  {
    topic: 1,
    kind: 'remember',
    q: `${f} and ${g} are continuous at ${c}: which combinations are continuous there?`,
    a: `${f} ± ${g}, ${I('kf')} and ${I('fg')}; ${fr(f, g)} provided ${of(g, c)} ≠ 0; and the composite ${f} ∘ ${g} if ${f} is continuous at ${of(g, c)}. So polynomials, sin, cos, ${EX} and their sensible combinations are continuous wherever defined`,
    why: `“${fr(f, g)} is continuous at every real ${x}” is false: ${fr('1', x)} is not even defined at 0.`,
    say: null,
  },
  // p. 318
  {
    topic: 1,
    kind: 'remember',
    q: `How does ${D}${NB}${SINX} = ${COSX} come from first principles?`,
    a: `sin(${x} + ${h}) − ${SINX} = 2${NB}cos(${x} + ${fr(h, '2')})${NB}sin${NB}${fr(h, '2')}, so the quotient is cos(${x} + ${fr(h, '2')}) · sin${NB}${fr(h, '2')} ÷ ${fr(h, '2')} → ${COSX} · 1`,
    why: `It uses lim<sub>${th}→0</sub>${NB}${fr(`sin${NB}${th}`, th)} = 1; cos${NB}${x} → −sin${NB}${x} the same way.`,
    say: null,
  },
  // p. 321
  {
    topic: 1,
    kind: 'mixup',
    q: `${D}(${fr(EX, x)}) is ${fr(`${EX}(${x} − 1)`, X2)} or ${fr(`${EX}(1 − ${x})`, X2)}?`,
    a: `${fr(`${EX}(${x} − 1)`, X2)}: the numerator is ${u}′${v} − ${u}${v}′. Writing ${u}${v}′ − ${u}′${v} flips the sign, the most common quotient-rule error`,
    why: `${fr(EX, X2)} is ${u}′ over ${sq(v)}, dropping both ${v} and the −${u}${v}′ term.`,
    say: null,
  },
  // p. 320
  {
    topic: 1,
    kind: 'mistake',
    q: `A student differentiates ${X2}${NB}${SINX} as 2${x}${NB}${COSX}. What went wrong?`,
    a: `The false rule (${I('uv')})′ = ${u}′${v}′. The product rule gives 2${x}${NB}${SINX} + ${X2}${NB}${COSX} = ${x}(2${NB}${SINX} + ${x}${NB}${COSX})`,
    why: `Two factors depending on ${x} give two terms, never one.`,
    say: null,
  },
  // pp. 319, 321
  {
    topic: 1,
    kind: 'shortcut',
    q: `What is ${D}${NB}${fr(SINX, `1 + ${COSX}`)}?`,
    a: `${fr('1', `1 + ${COSX}`)}: the numerator cos${NB}${x}(1 + ${COSX}) + sin<sup>2</sup>${NB}${x} collapses to 1 + ${COSX} by the Pythagorean identity`,
    why: 'Before a quotient rule, check whether algebra simplifies the quotient first.',
    say: null,
  },

  // ── Topic 03 · The Chain Rule ──
  // pp. 323–324
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the chain rule, and what picture explains it?',
    a: `${DYDX} = ${fr(`d${y}`, `d${u}`)} · ${fr(`d${u}`, `d${x}`)} = ${of(fp, of(g, x))} · ${of(gp, x)}: differentiate the outer function with the inner left inside, then multiply by the inner derivative. Rates multiply like meshing gears: 5 turns per turn times 3 turns per turn is 15`,
    why: `${D}${NB}sin(${X2}) = cos(${X2}) · 2${x}.`,
    say: 'Outside-in, and don’t forget the inside.',
  },
  // pp. 323–325
  {
    topic: 2,
    kind: 'remember',
    q: `How do you differentiate ${y} = ${of(f, of(g, of(h, x)))}?`,
    a: `${of(fp, of(g, of(h, x)))} · ${of(gp, of(h, x))} · ${h}′(${x}): one factor per layer peeled. ${y} = sin(cos(${X2})) gives −2${x}${NB}sin(${X2})${NB}cos(cos(${X2}))`,
    why: 'Count the factors: three layers, three factors.',
    say: null,
  },
  // p. 324
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the common composite patterns?',
    a: `${D}[${of(g, x)}]<sup>${n}</sup> = ${n}[${of(g, x)}]<sup>${n}−1</sup>${of(gp, x)}; ${D}${NB}sin${NB}${of(g, x)} = cos${NB}${of(g, x)} · ${of(gp, x)}; ${D}${NB}${ex(of(g, x))} = ${ex(of(g, x))}${of(gp, x)}; ${D}${NB}ln${NB}${of(g, x)} = ${fr(of(gp, x), of(g, x))}`,
    why: `${D}${NB}ln(sin${NB}${x}) = cot${NB}${x}; ${D}${NB}ln(cos${NB}${x}) = −tan${NB}${x}.`,
    say: null,
  },
  // p. 323
  {
    topic: 2,
    kind: 'remember',
    q: 'When does the chain rule apply?',
    a: `When the inner ${g} is differentiable at ${x} and the outer ${f} is differentiable at ${of(g, x)}. If either link breaks (a corner, a point outside the domain), it does not apply there`,
    why: `√${u} is not differentiable at ${u} = 0, so √(${of(g, x)}) needs care wherever ${of(g, x)} = 0.`,
    say: null,
  },
  // p. 326
  {
    topic: 2,
    kind: 'mixup',
    q: `Is ${D}${NB}${ex(X2)} equal to ${X2}${ex(`${X2}−1`)}?`,
    a: `No: that applies the power rule to an exponential. The outer derivative is ${ex(X2)} itself, times the inner 2${x}: 2${x}${NB}${ex(X2)}`,
    why: `The power rule needs a constant exponent; here the variable is in the exponent.`,
    say: null,
  },
  // pp. 325–326
  {
    topic: 2,
    kind: 'mistake',
    q: `A student writes ${D}${NB}${ex(`3${x}`)} = ${ex(`3${x}`)}. What is missing?`,
    a: `The inner derivative: ${ex(`3${x}`)} · 3 = 3${ex(`3${x}`)}. Likewise ${D}${NB}sin(2${x}) = 2${NB}cos(2${x}), not cos(2${x})`,
    why: 'After the outer derivative, ask “times the derivative of the inside?” before moving on.',
    say: null,
  },
  // p. 325
  {
    topic: 2,
    kind: 'shortcut',
    q: `What is ${D}(${X2}√(1 + ${X2}))?`,
    a: `${fr(`${x}(2 + 3${X2})`, `√(1 + ${X2})`)}: product rule outside, chain rule on √(1 + ${X2}), whose derivative is ${fr(x, `√(1 + ${X2})`)}; then one common denominator`,
    why: 'When a composite sits inside a product, apply the product rule first.',
    say: null,
  },

  // ── Topic 04 · Implicit Differentiation ──
  // pp. 328, 332
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the one idea behind implicit differentiation?',
    a: `${y} is secretly a function of ${x}, so differentiate both sides with respect to ${x} and give every ${y}-term its chain-rule factor: ${D}(${sup(y, n)}) = ${n}${sup(y, `${n}−1`)}${DYDX}. Then collect the ${DYDX} terms and solve`,
    why: `${X2} + ${sq(y)} = 25 gives 2${x} + 2${y}${DYDX} = 0, so ${DYDX} = −${fr(x, y)}.`,
    say: `It’s just the chain rule in disguise: every ${y} owes a ${DYDX}.`,
  },
  // pp. 329, 332
  {
    topic: 3,
    kind: 'remember',
    q: `How do you differentiate a mixed term such as ${I('xy')}?`,
    a: `With the product rule, since both factors depend on ${x}: ${D}(${I('xy')}) = 1 · ${y} + ${x} · ${DYDX} = ${y} + ${x}${DYDX}`,
    why: `${y} alone forgets the second term; ${x}${DYDX} alone forgets the first.`,
    say: null,
  },
  // pp. 329–330
  {
    topic: 3,
    kind: 'remember',
    q: `What is ${DYDX} for the folium ${cu(x)} + ${cu(y)} = 3${I('axy')}?`,
    a: `${fr(`${I('ay')} − ${X2}`, `${sq(y)} − ${I('ax')}`)}: 3${X2} + 3${sq(y)}${DYDX} = 3${a}(${y} + ${x}${DYDX}), then gather the ${DYDX} terms and factor`,
    why: `Answers in both ${x} and ${y} are normal for an implicit curve: they give the slope at each point.`,
    say: null,
  },
  // p. 330
  {
    topic: 3,
    kind: 'remember',
    q: `For ${X2} + ${sq(y)} = 1, what is ${D2Y} in terms of ${y}?`,
    a: `−${fr('1', cu(y))}. Differentiate ${DYDX} = −${fr(x, y)} by the quotient rule, substitute ${DYDX} back to get −${fr(`${sq(y)} + ${X2}`, cu(y))}, then use the relation itself`,
    why: 'An implicit second derivative always takes the first one back in, and often the relation too.',
    say: null,
  },
  // p. 328
  {
    topic: 3,
    kind: 'remember',
    q: 'Where does implicit differentiation give no slope?',
    a: `Where the curve has a vertical tangent: on ${X2} + ${sq(y)} = 25 at (±5, 0), where ${y} = 0 makes −${fr(x, y)} blow up. There ${DYDX} does not exist, and the formula is honestly reporting it`,
    why: `The method assumes the relation defines ${y} as a differentiable function of ${x} near the point.`,
    say: null,
  },
  // p. 332
  {
    topic: 3,
    kind: 'mixup',
    q: `For sin${NB}${y} = ${x}, is ${DYDX} = cos${NB}${y}?`,
    a: `No: differentiating gives cos${NB}${y}${NB}${DYDX} = 1, so ${DYDX} = ${fr('1', `cos${NB}${y}`)}. Stopping at cos${NB}${y} forgets to solve for ${DYDX}`,
    why: `This is exactly how ${D}${NB}${inv('sin')} = ${fr('1', R1X2)} is derived.`,
    say: null,
  },
  // pp. 330, 332
  {
    topic: 3,
    kind: 'mistake',
    q: `A student differentiates ${X2} + ${sq(y)} = 1 and writes 2${x} + 2${y} = 0. What went wrong?`,
    a: `${sq(y)} was treated as if ${y} were constant: it gives 2${y}${DYDX}, not 2${y}. The correct line is 2${x} + 2${y}${DYDX} = 0, so ${DYDX} = −${fr(x, y)}`,
    why: `The “answer” 2${x} + 2${y} = 0 is not even a derivative: it has no ${DYDX} in it.`,
    say: null,
  },
  // pp. 330, 332
  {
    topic: 3,
    kind: 'shortcut',
    q: 'What one scan catches the defining implicit error?',
    a: `Look for a differentiated ${y}-term without a ${DYDX}: there must be none. Every ${y}-term carries one, so a bare one means a dropped chain factor`,
    why: `And do not pre-solve for ${y}: differentiate the relation as it stands.`,
    say: null,
  },

  // ── Topic 05 · Derivatives of Inverse Trigonometric Functions ──
  // pp. 334, 338
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the six inverse-trigonometric derivatives?',
    a: `${D}${NB}${inv('sin')} = ${fr('1', R1X2)} and ${D}${NB}${inv('cos')} = ${fr('−1', R1X2)} (${abs(x)} < 1); ${D}${NB}${inv('tan')} = ${fr('1', ONE_PLUS)}, cot<sup>−1</sup>: ${fr('−1', ONE_PLUS)}; ${D}${NB}${inv('sec')} = ${fr('1', `${abs(x)}√(${X2} − 1)`)}, csc<sup>−1</sup>: the same with a minus (${abs(x)} > 1)`,
    why: 'Each cofunction (cos<sup>−1</sup>, cot<sup>−1</sup>, csc<sup>−1</sup>) is the same magnitude with a minus sign.',
    say: null,
  },
  // p. 334
  {
    topic: 4,
    kind: 'remember',
    q: `How is ${D}${NB}${inv('sin')} = ${fr('1', R1X2)} derived, and why the positive root?`,
    a: `${y} = ${inv('sin')} gives sin${NB}${y} = ${x}, so cos${NB}${y}${NB}${DYDX} = 1 and ${DYDX} = ${fr('1', `cos${NB}${y}`)} = ${fr('1', R1X2)}. The root is positive because cos${NB}${y} ≥ 0 on the principal range [−${fr('π', '2')}, ${fr('π', '2')}]`,
    why: `For tan⁻¹: sec<sup>2</sup>${NB}${y}${NB}${DYDX} = 1 and sec<sup>2</sup>${NB}${y} = 1 + tan<sup>2</sup>${NB}${y} = 1 + ${X2}.`,
    say: null,
  },
  // pp. 333–334, 337
  {
    topic: 4,
    kind: 'remember',
    q: 'Which substitution unlocks which inverse-trigonometric expression?',
    a: `${x} = tan${NB}${th} for ${fr(`2${x}`, `1 − ${X2}`)}, ${fr(`2${x}`, ONE_PLUS)} and ${fr(`1 − ${X2}`, ONE_PLUS)}; ${x} = sin${NB}${th} (or cos${NB}${th}) for √(1 − ${X2}); ${x} = sec${NB}${th} for √(${X2} − 1). The expression collapses to one multiple angle, the inverse cancels, then differentiate`,
    why: `${inv('tan', `(${fr(`2${x}`, `1 − ${X2}`)})`)} = 2${NB}${inv('tan')} for ${abs(x)} < 1, so its derivative is ${fr('2', ONE_PLUS)}.`,
    say: 'Substitute, collapse the double angle, then differentiate, and mind the range.',
  },
  // pp. 334, 338
  {
    topic: 4,
    kind: 'remember',
    q: `On what ranges does 2${NB}${inv('tan')} equal its three double-angle forms?`,
    a: `${inv('tan', fr(`2${x}`, `1 − ${X2}`))} for ${abs(x)} < 1; ${inv('sin', fr(`2${x}`, ONE_PLUS))} for ${abs(x)} ≤ 1; ${inv('cos', fr(`1 − ${X2}`, ONE_PLUS))} for ${x} ≥ 0. All three together for 0 ≤ ${x} < 1`,
    why: `Also 2${NB}${inv('sin')} = sin<sup>−1</sup>(2${x}√(1 − ${X2})) for ${abs(x)} ≤ ${RT2} and 3${NB}${inv('sin')} = sin<sup>−1</sup>(3${x} − 4${cu(x)}) for ${abs(x)} ≤ ${HALF}.`,
    say: null,
  },
  // p. 335
  {
    topic: 4,
    kind: 'remember',
    q: `What is the derivative of sin<sup>−1</sup>(2${x}√(1 − ${X2})), and where?`,
    a: `${fr('2', R1X2)} only for ${abs(x)} < ${RT2}, where it equals 2${NB}${inv('sin')}. For ${RT2} < ${abs(x)} < 1 it is −${fr('2', R1X2)}: the expression becomes ±π − 2${NB}${inv('sin')}. At ${x} = ±${RT2} there is a corner`,
    why: `The cancellation needs 2${th} inside the principal range [−${fr('π', '2')}, ${fr('π', '2')}] of sin<sup>−1</sup>.`,
    say: null,
  },
  // p. 337
  {
    topic: 4,
    kind: 'mixup',
    q: `Is ${D}${NB}${inv('sec')} equal to ${fr('1', `${x}√(${X2} − 1)`)}?`,
    a: `Only for ${x} > 1. The derivative is ${fr('1', `${abs(x)}√(${X2} − 1)`)}: the ${abs(x)} matters for ${x} < −1, and csc<sup>−1</sup> carries it too`,
    why: `The radicand is ${X2} − 1, not 1 − ${X2}.`,
    say: null,
  },
  // pp. 336–337
  {
    topic: 4,
    kind: 'mistake',
    q: `Is ${D}${NB}${inv('cos', `(${fr(`1 − ${X2}`, ONE_PLUS)})`)} = ${fr('2', ONE_PLUS)} for every ${x} ≠ 0?`,
    a: `No: only for ${x} > 0, where the expression is 2${NB}${inv('tan')}. For ${x} < 0 it equals −2${NB}${inv('tan')}, so the derivative is −${fr('2', ONE_PLUS)}: the sign flips`,
    why: 'These simplifications, and sometimes the sign of the derivative, are piecewise: always state the range.',
    say: null,
  },
  // p. 336
  {
    topic: 4,
    kind: 'shortcut',
    q: `What is ${D}${NB}${inv('tan', `(${fr(`√(1 + ${X2}) − 1`, x)})`)}?`,
    a: `${fr('1', `2(1 + ${X2})`)}. With ${x} = tan${NB}${th} the inside is ${fr(`1 − cos${NB}${th}`, `sin${NB}${th}`)} = tan${NB}${fr(th, '2')}, so the function is ${HALF}${NB}${inv('tan')}`,
    why: 'Grinding the quotient and chain rules here wastes time and invites slips.',
    say: null,
  },

  // ── Topic 06 · Logarithmic & Parametric Differentiation ──
  // pp. 339–340, 346
  {
    topic: 5,
    kind: 'remember',
    q: 'When do you take logs before differentiating, and what is the engine?',
    a: `For a variable base and exponent (${sup(u, v)}, such as ${sup(x, x)}) or a long product or quotient. Take ln of both sides, then use ${D}(ln${NB}${y}) = ${fr('1', y)}${NB}${DYDX}, the chain rule on ln${NB}${y}`,
    why: `The base must be positive: work with |${NB}·${NB}| or restrict the domain otherwise.`,
    say: null,
  },
  // pp. 340–341, 345
  {
    topic: 5,
    kind: 'remember',
    q: `What is ${D}(${sup(u, v)}), and what is ${D}(${sup(x, x)})?`,
    a: `${sup(u, v)}${NB}ln${NB}${u} · ${v}′ + ${v}${NB}${sup(u, `${v}−1`)}${u}′: the exponential piece (base frozen) plus the power piece (exponent frozen). So ${D}(${sup(x, x)}) = ${sup(x, x)}(1 + ${LNX})`,
    why: `From ln${NB}${y} = ${x}${NB}${LNX}: ${fr(`${y}′`, y)} = ${LNX} + 1.`,
    say: null,
  },
  // pp. 340, 342
  {
    topic: 5,
    kind: 'remember',
    q: `${x} = ${of(f, t)}, ${y} = ${of(g, t)}: what is ${DYDX}?`,
    a: `${DYDT} ÷ ${DXDT}, provided ${DXDT} ≠ 0. For the astroid ${x} = ${a}${NB}cos<sup>3</sup>${NB}${t}, ${y} = ${a}${NB}sin<sup>3</sup>${NB}${t} it is −tan${NB}${t}`,
    why: `Time is the puppeteer, ${x} and ${y} the puppets: compare how fast each responds.`,
    say: null,
  },
  // pp. 340–341, 346
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you find the parametric second derivative?',
    a: `${D2Y} = ${DDT}(${DYDX}) ÷ ${DXDT}: differentiate the slope with respect to ${t}, then divide by ${DXDT} once more. It is not ${D2YT} ÷ ${D2XT}`,
    why: `The chain rule: ${D} = (1 ÷ ${DXDT}) · ${DDT}, applied to the slope.`,
    say: `Slope, then differentiate by ${t}, then divide by ${DXDT} once more.`,
  },
  // pp. 340, 344, 346
  {
    topic: 5,
    kind: 'remember',
    q: 'Where does a parametric slope fail?',
    a: `Where ${DXDT} = 0: with ${DYDT} ≠ 0 the slope blows up, a vertical tangent. ${DYDT} = 0 (with ${DXDT} ≠ 0) is a horizontal tangent, slope 0`,
    why: `${DYDT} = ${DXDT} merely makes the slope 1.`,
    say: null,
  },
  // p. 344
  {
    topic: 5,
    kind: 'mixup',
    q: `${sup(x, '5')}, 5<sup>${x}</sup>, ${sup(x, `sin${NB}${x}`)}, sin(${sup(x, '5')}): which genuinely needs logarithmic differentiation?`,
    a: `Only ${sup(x, `sin${NB}${x}`)}, with a variable base and a variable exponent. ${sup(x, '5')} takes the power rule, 5<sup>${x}</sup> the exponential rule, sin(${sup(x, '5')}) the chain rule`,
    why: `${sup(x, `sin${NB}${x}`)} differentiates to ${sup(x, `sin${NB}${x}`)}(cos${NB}${x}${NB}ln${NB}${x} + ${fr(SINX, x)}).`,
    say: null,
  },
  // pp. 343–345
  {
    topic: 5,
    kind: 'mistake',
    q: `${x} = ${I('at')}<sup>2</sup>, ${y} = 2${I('at')}: is ${D2Y} = ${fr('0', `2${a}`)} = 0?`,
    a: `No: −${fr('1', `2${I('at')}<sup>3</sup>`)}. ${DYDX} = ${fr(`2${a}`, `2${I('at')}`)} = ${fr('1', t)}; its ${t}-derivative −${fr('1', sq(t))}, divided by ${DXDT} = 2${I('at')}. Dividing ${D2YT} by ${D2XT} cancels the d${t}’s as if they were numbers`,
    why: `For ${x} = ${sq(t)}, ${y} = ${cu(t)}: ${fr('3', `4${t}`)}, not ${fr('3', '2')}, which forgets the second division.`,
    say: null,
  },
  // p. 344
  {
    topic: 5,
    kind: 'shortcut',
    q: `What is ${DYDX} for ${y} = ${fr(`(${x} − 1)(${x} − 2)`, `(${x} − 3)(${x} − 4)`)}?`,
    a: `${y}[${fr('1', `${x} − 1`)} + ${fr('1', `${x} − 2`)} − ${fr('1', `${x} − 3`)} − ${fr('1', `${x} − 4`)}]: ln shatters the product into a sum of logs, and each log differentiates in one step`,
    why: `Multiply by ${y} and put the original expression back for ${y} at the end.`,
    say: null,
  },

  // ── Topic 07 · Second-Order Derivatives & the Mean Value Theorems ──
  // pp. 347, 352–353
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the second derivative measure?',
    a: `How fast the rate itself changes: for a car, acceleration. Its sign gives the bending: ${y}″ > 0 concave up (a cup ∪), ${y}″ < 0 concave down (a cap ∩)`,
    why: `${y} = ${cu(x)} has ${y}″ = 6${x}: concave up exactly on (0, ∞), with an inflection at 0.`,
    say: null,
  },
  // pp. 347–348, 353
  {
    topic: 6,
    kind: 'remember',
    q: 'What does Rolle’s theorem say?',
    a: `If ${f} is continuous on [${a}, ${b}], differentiable on (${a}, ${b}) and ${of(f, a)} = ${of(f, b)}, then ${of(fp, c)} = 0 for at least one ${c} strictly inside (${a}, ${b})`,
    why: 'A ball thrown up and caught at the same height is, for an instant at the top, neither rising nor falling.',
    say: 'Same heights ⇒ a flat spot.',
  },
  // pp. 347–348, 353
  {
    topic: 6,
    kind: 'remember',
    q: 'What does Lagrange’s Mean Value Theorem say?',
    a: `If ${f} is continuous on [${a}, ${b}] and differentiable on (${a}, ${b}), then ${of(fp, c)} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)} for at least one ${c} in (${a}, ${b}): some tangent is parallel to the secant. Rolle is the case ${of(f, a)} = ${of(f, b)}, a horizontal secant`,
    why: '150 km in 2 hours: at some instant the speedometer read exactly 75 km/h.',
    say: 'Your average speed is your exact speed at some instant.',
  },
  // p. 349
  {
    topic: 6,
    kind: 'remember',
    q: 'How does Lagrange’s theorem follow from Rolle’s?',
    a: `Subtract the secant: ${of(g, x)} = ${of(f, x)} − [${of(f, a)} + ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)}(${x} − ${a})]. Then ${of(g, a)} = ${of(g, b)} = 0, Rolle gives ${of(gp, c)} = 0, and ${of(gp, c)} = ${of(fp, c)} − ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)}`,
    why: 'Tilt the function to make its endpoints level, apply Rolle, tilt back.',
    say: null,
  },
  // pp. 348, 353
  {
    topic: 6,
    kind: 'remember',
    q: 'What do the two theorems promise, and what not?',
    a: `They are existence theorems: at least one ${c}, strictly inside (${a}, ${b}), but not that it is unique, and you still have to solve for it. A solution on an endpoint does not count`,
    why: `For ${X2} on [1, 3]: the average slope is 4 and ${of(fp, c)} = 2${c} = 4 gives ${c} = 2.`,
    say: null,
  },
  // p. 353
  {
    topic: 6,
    kind: 'mixup',
    q: `Rolle or Lagrange: which may you use when ${of(f, a)} ≠ ${of(f, b)}?`,
    a: `Only Lagrange, concluding ${of(fp, c)} = the average slope. Rolle needs ${of(f, a)} = ${of(f, b)} as well, and only then concludes ${of(fp, c)} = 0`,
    why: `Using ${of(fp, c)} = 0 when the endpoint values differ is wrong.`,
    say: null,
  },
  // pp. 348, 350, 352
  {
    topic: 6,
    kind: 'mistake',
    q: `Apply Rolle to ${abs(`${x} − 1`)} on [0, 2]: where is ${c}?`,
    a: `Nowhere, and there is no arithmetic error: ${of(f, '0')} = ${of(f, '2')} = 1, but the corner at ${x} = 1 breaks differentiability, so Rolle does not apply. The slope is −1 then +1, never 0`,
    why: `${abs(x)} on [−1, 1] is the same trap: the equal-endpoints condition holds, a hypothesis fails.`,
    say: null,
  },
  // pp. 351, 353
  {
    topic: 6,
    kind: 'shortcut',
    q: `How does the Mean Value Theorem prove ${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)} for 0 < ${a} < ${b}?`,
    a: `Apply it to ln${NB}${x} on [${a}, ${b}]: ${fr('1', c)} = ln(${fr(b, a)}) ÷ (${b} − ${a}) for some ${c} in (${a}, ${b}). From ${a} < ${c} < ${b}, ${fr('1', b)} < ${fr('1', c)} < ${fr('1', a)}; multiply by ${b} − ${a}`,
    why: `Choose ${f} so that ${of(fp, c)} is the quantity to bound, then squeeze with ${a} < ${c} < ${b}.`,
    say: null,
  },
  // pp. 352–353
  {
    topic: 6,
    kind: 'shortcut',
    q: `${f} is differentiable on [${a}, ${b}] and ${of(fp, x)} ≠ 0 on (${a}, ${b}): at most how many roots?`,
    a: `One. Two roots ${p} < ${q} would give ${of(f, p)} = ${of(f, q)} = 0, and Rolle would force ${of(fp, c)} = 0 between them`,
    why: `For how many roots, reach for Rolle: two roots manufacture a zero of ${fp} between them.`,
    say: null,
  },

  // ── Additional A · Standard Limits ──
  // pp. 354–355, 357
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the six standard limits as x → 0?',
    a: `${fr(SINX, x)} → 1; ${fr(`1 − ${COSX}`, X2)} → ${HALF}; ${fr(`${EX} − 1`, x)} → 1; ${fr(`ln(1 + ${x})`, x)} → 1; ${fr(`${sup(a, x)} − 1`, x)} → ln${NB}${a}; ${fr(`(1 + ${x})<sup>${n}</sup> − 1`, x)} → ${n} for every real ${n}. The principle behind them: ${H0}${fr(`${of(f, `${a} + ${h}`)} − ${of(f, a)}`, h)} = ${of(fp, a)}`,
    why: `${fr(`${EX} − 1`, x)} is the derivative of ${EX} at 0; ${fr(`ln(1 + ${x})`, x)} that of ln at 1.`,
    say: 'Every standard limit is a derivative in disguise.',
  },
  // p. 356
  {
    topic: 7,
    kind: 'remember',
    q: `How do you evaluate lim<sub>${x}→π</sub>${NB}${fr(SINX, `${x} − π`)}?`,
    a: `−1. When ${of(f, a)} = 0 and ${f} is differentiable at ${a}, lim<sub>${x}→${a}</sub>${NB}${fr(of(f, x), `${x} − ${a}`)} = ${of(fp, a)}; here (sin${NB}${x})′ at π is cos${NB}π. Or substitute ${u} = ${x} − π`,
    why: 'The same principle works away from 0.',
    say: null,
  },
  // p. 355
  {
    topic: 7,
    kind: 'mixup',
    q: `Is lim<sub>${x}→0</sub>${NB}${fr(`1 − ${COSX}`, X2)} equal to 1?`,
    a: `No, ${HALF}: 1 − ${COSX} = 2${NB}sin<sup>2</sup>${NB}${fr(x, '2')}, so the quotient is ${HALF}(sin${NB}${fr(x, '2')} ÷ ${fr(x, '2')})<sup>2</sup>. The 1 belongs to ${fr(SINX, x)}`,
    why: `Both trigonometric limits need ${x} in radians.`,
    say: null,
  },
  // p. 357
  {
    topic: 7,
    kind: 'mistake',
    q: `${of(f, x)} = ${fr(`${ex(`3${x}`)} − 1`, `ln(1 + 2${x})`)} for ${x} ≠ 0: which ${of(f, '0')} makes it continuous?`,
    a: `${fr('3', '2')}, not 1. Split it as ${fr(`${ex(`3${x}`)} − 1`, `3${x}`)} · ${fr(`2${x}`, `ln(1 + 2${x})`)} · ${fr(`3${x}`, `2${x}`)}: the first two factors tend to 1, the third is the constant ${fr('3', '2')}`,
    why: 'Each piece must match a standard limit exactly, its argument and its denominator alike.',
    say: null,
  },
  // p. 357
  {
    topic: 7,
    kind: 'shortcut',
    q: `What is lim<sub>${x}→0</sub>${NB}${fr(`tan${NB}${x} − ${SINX}`, cu(x))}?`,
    a: `${HALF}. tan${NB}${x} − ${SINX} = tan${NB}${x}(1 − ${COSX}), so the quotient is ${fr(SINX, x)} · ${fr('1', COSX)} · ${fr(`1 − ${COSX}`, X2)} → 1 · 1 · ${HALF}`,
    why: 'Three lines, each checkable, against three rounds of differentiating top and bottom.',
    say: 'Factor the numerator rather than expanding anything.',
  },

  // ── Additional B · Differentiating Through Moduli ──
  // pp. 358–359
  {
    topic: 8,
    kind: 'remember',
    q: `Where can ${abs(f)} fail to be differentiable, for differentiable ${f}?`,
    a: `Only at zeros of ${f}: where ${of(f, c)} ≠ 0, ${abs(f)} is ${f} or −${f} nearby. At a zero, ${abs(f)} is differentiable if and only if ${of(fp, c)} = 0. So the corners are exactly the zeros where ${f} crosses with non-zero slope`,
    why: `The one-sided derivatives at a zero are ${abs(of(fp, c))} and −${abs(of(fp, c))}: a corner, never a blow-up.`,
    say: null,
  },
  // pp. 359–360
  {
    topic: 8,
    kind: 'remember',
    q: `How smooth is ${sup(abs(x), n)} at 0, and when is ${of(f, abs(x))} differentiable at 0?`,
    a: `For odd ${n}, exactly ${n} − 1 times: each differentiation strips one power until a lone ${abs(x)} remains (${sup(abs(x), '3')} is twice differentiable, not three times). For even ${n} it is ${sup(x, n)}. ${of(f, abs(x))} is differentiable at 0 if and only if ${of(fp, '0')} = 0`,
    why: 'Folding a graph into an even function makes a corner unless the graph arrives flat.',
    say: null,
  },
  // p. 361
  {
    topic: 8,
    kind: 'mixup',
    q: `Is cos${NB}${abs(x)} differentiable at 0?`,
    a: `Yes: cos${NB}${abs(x)} = cos${NB}${x} for every ${x}, since cosine is even. The rule predicts a corner only when ${of(fp, '0')} ≠ 0, and here ${of(fp, '0')} = −sin${NB}0 = 0`,
    why: `By contrast ${x}${abs(x)} is differentiable at 0 with derivative 0, while ${abs(x)}(${x} − 1) has a corner there.`,
    say: null,
  },
  // p. 361
  {
    topic: 8,
    kind: 'mistake',
    q: `Where is ${abs(`${abs(x)} − 1`)} not differentiable?`,
    a: `At three points, ${x} = −1, 0, 1. The outer zeros ±1 are crossings with slope ±1; the inner corner at 0 survives because ${abs(x)} − 1 = −1 ≠ 0 there, so the outer bars just flip its sign`,
    why: `Missing ${x} = 0 is the slip.`,
    say: 'Nesting does not heal a corner sitting away from the outer zeros.',
  },
  // p. 361
  {
    topic: 8,
    kind: 'shortcut',
    q: `How many points of non-differentiability has ${abs(SINX)} + ${abs(COSX)} in (0, 2π)?`,
    a: `Three: ${fr('π', '2')}, π, ${fr('3π', '2')}. At each, one summand has a crossing zero (a corner) and the other is smooth and non-zero`,
    why: `Likewise ${abs(`${x} − 1`)} + ${abs(`${x} − 2`)} + ${abs(`${x} − 3`)} fails exactly at 1, 2, 3.`,
    say: 'A corner plus a smooth term cannot cancel.',
  },

  // ── Additional C · Functional Equations ──
  // pp. 362–363
  {
    topic: 9,
    kind: 'remember',
    q: `${of(f, `${x} + ${y}`)} = ${of(f, x)} + ${of(f, y)} for all reals, and ${f} is continuous at one point: what is ${f}?`,
    a: `${of(f, x)} = ${I('cx')} with ${c} = ${of(f, '1')}. ${of(f, '0')} = 0; continuity at one point spreads to 0 and then everywhere; ${of(f, I('n'))} = ${I('n')}${of(f, '1')} and ${of(f, fr(m, n))} = ${fr(m, n)}${of(f, '1')}; continuity carries the rationals to every real`,
    why: `With ${of(f, '2')} = 10: ${of(f, x)} = 5${x}, ${of(f, '−5')} = −25, and the derivative is 5 everywhere.`,
    say: 'The single-point continuity assumption is doing all the work.',
  },
  // pp. 363, 365
  {
    topic: 9,
    kind: 'remember',
    q: `${of(f, `${x} + ${y}`)} = ${of(f, x)}${of(f, y)}, ${f} continuous at a point and not identically zero: what is ${f}?`,
    a: `${of(f, x)} = ${sup(a, x)} with ${a} = ${of(f, '1')} > 0. First ${of(f, '0')} = 1; ${of(f, x)} = ${of(f, fr(x, '2'))}<sup>2</sup> ≥ 0 and ${of(f, x)}${of(f, `−${x}`)} = 1, so ${f} > 0; then ln${NB}${f} is additive. If ${f} is differentiable at 0, ${of(fp, x)} = ${of(f, x)}${of(fp, '0')}`,
    why: `So ${of(fp, '0')} = ${k} gives ${of(f, x)} = ${ex(I('kx'))}.`,
    say: 'No additive function is continuous at exactly one point.',
  },
  // p. 365
  {
    topic: 9,
    kind: 'mixup',
    q: `${of(f, I('xy'))} = ${of(f, x)} + ${of(f, y)} for ${x}, ${y} > 0, with ${f} continuous at 1 and ${of(f, 'e')} = 1: is ${f} linear?`,
    a: `No: ${of(f, x)} = ${LNX}. Put ${of(g, t)} = ${of(f, ex(t))}: then ${g} is additive and continuous at 0, so ${of(g, t)} = ${t}, and ${of(f, x)} = ${of(g, LNX)}`,
    why: `${of(f, I('xy'))} = ${of(f, x)}${of(f, y)} goes the same way, to ${sup(x, c)}.`,
    say: null,
  },
  // p. 363
  {
    topic: 9,
    kind: 'mistake',
    q: `Does ${of(f, `${x} + ${y}`)} = ${of(f, x)} + ${of(f, y)} alone force ${of(f, x)} = ${I('cx')}?`,
    a: 'No. Without the continuity hypothesis pathological non-linear additive functions exist, wildly discontinuous everywhere; examiners strip the hypothesis to build traps',
    why: 'Continuity at even one point is enough to rule them out.',
    say: null,
  },
  // p. 364
  {
    topic: 9,
    kind: 'shortcut',
    q: `${of(f, `${x} + ${y}`)} = ${of(f, x)}${of(f, y)}, ${of(fp, '0')} = ${k} ≠ 0 and ${of(f, '1')} = 2: what are ${f} and ${fp}?`,
    a: `${of(f, x)} = 2<sup>${x}</sup> and ${of(fp, x)} = 2<sup>${x}</sup>${NB}ln${NB}2. Put the identity in the difference quotient: ${of(fp, x)} = ${of(f, x)}${of(fp, '0')} = ${k}${of(f, x)}, so ${of(f, x)} = ${ex(I('kx'))}, and ${ex(k)} = 2 gives ${k} = ln${NB}2`,
    why: 'The equation plus one continuity or differentiability seed gives an explicit function; then the calculus is trivial.',
    say: null,
  },

  // ── Additional D · Cauchy's Mean Value Theorem and Roots ──
  // pp. 365–366
  {
    topic: 10,
    kind: 'remember',
    q: 'What does Cauchy’s Mean Value Theorem say?',
    a: `If ${f} and ${g} are continuous on [${a}, ${b}], differentiable on (${a}, ${b}) and ${of(gp, x)} ≠ 0 there, then ${fr(of(fp, c), of(gp, c))} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${of(g, b)} − ${of(g, a)}`)} for some ${c} in (${a}, ${b}). ${of(g, b)} ≠ ${of(g, a)}, else Rolle would give a zero of ${gp}`,
    why: `Proof: Rolle on ${of(f, x)} − λ${of(g, x)}, with λ the right-hand ratio. ${of(g, x)} = ${x} gives Lagrange back.`,
    say: 'Lagrange is CMVT with the simplest possible companion.',
  },
  // pp. 366, 368
  {
    topic: 10,
    kind: 'remember',
    q: 'What does the Rolle cascade say about roots?',
    a: `Two roots of ${f} force a root of ${fp} between them. So if ${fp} has no zero on an interval, ${f} has at most one root there; and a degree-${n} polynomial with ${n} distinct real roots has a derivative with exactly one root in each of the ${n} − 1 gaps`,
    why: `Five distinct roots of ${p} force at least four of ${p}′ and at least three of ${p}″.`,
    say: null,
  },
  // pp. 367–368
  {
    topic: 10,
    kind: 'mixup',
    q: '“Exactly one real root”: which tool proves which half?',
    a: `Uniqueness comes from the sign of the derivative (via Rolle); existence comes from two samples of opposite sign (via continuity, the intermediate value theorem)`,
    why: 'Students who merge the two jobs usually prove neither.',
    say: 'Keep the two jobs separate in your answer.',
  },
  // p. 368
  {
    topic: 10,
    kind: 'mistake',
    q: `${of(fp, x)} > 0 on (${a}, ${b}): does ${f} have exactly one zero there?`,
    a: `No, at most one. ${fp} > 0 rules out a second zero but does not produce a first: that needs a sign change of ${f}`,
    why: `${cu(x)} + ${x} − 1 has ${of(fp, x)} = 3${X2} + 1 > 0 and ${of(f, '0')} = −1 < 0 < 1 = ${of(f, '1')}: exactly one.`,
    say: null,
  },
  // pp. 367–368
  {
    topic: 10,
    kind: 'shortcut',
    q: `Why does 2${cu(x)} − 3${X2} + 6${x} + 6 = 0 have exactly one real root?`,
    a: `Its derivative 6(${X2} − ${x} + 1) has discriminant −3 < 0, so it is always positive: at most one root. The values −5 at ${x} = −1 and 6 at 0 have opposite signs: at least one`,
    why: 'Uniqueness from the derivative, existence from two samples.',
    say: null,
  },

  // ── Additional E · Greatest Integer Compositions ──
  // p. 369
  {
    topic: 11,
    kind: 'remember',
    q: `For continuous ${g}, when is ${fl(of(g, x))} discontinuous at ${c}?`,
    a: `Exactly when ${of(g, c)} is an integer ${m} and ${g} < ${m} at points arbitrarily close to ${c}: a crossing of the level, or a local maximum sitting on it. A local minimum touching ${m} from above leaves ${fl(g)} continuous`,
    why: `Where ${of(g, c)} is not an integer, ${fl(g)} is constant nearby.`,
    say: 'The floor function rounds down.',
  },
  // pp. 369–371
  {
    topic: 11,
    kind: 'remember',
    q: `What is the shortcut when ${g} is strictly monotonic?`,
    a: `Every solution of ${of(g, x)} = an integer inside the interval is a genuine crossing, so the discontinuities are exactly those solutions; an endpoint needs its own one-sided check`,
    why: `${fl(`2${x} + 1`)} on [0, 2) jumps at ${HALF}, 1 and ${fr('3', '2')}; at 0 it is right-continuous.`,
    say: 'Touching an integer from above is harmless; touching from below, or crossing, is fatal.',
  },
  // pp. 370–371
  {
    topic: 11,
    kind: 'mixup',
    q: `Are ${fl(X2)} and ${fl(COSX)} continuous at 0?`,
    a: `${fl(X2)} is: ${X2} touches 0 at a minimum and stays in [0, 1) nearby. ${fl(COSX)} is not: cos${NB}0 = 1 is touched at a maximum, so nearby the floor drops to 0`,
    why: 'Minimum on the level: continuous; maximum on the level: a jump.',
    say: null,
  },
  // p. 370
  {
    topic: 11,
    kind: 'mistake',
    q: `How many discontinuities has ${fl(`2${NB}${SINX}`)} in (0, 2π)?`,
    a: `Six, not seven: ${fr('π', '6')}, ${fr('π', '2')}, ${fr('5π', '6')}, π, ${fr('7π', '6')}, ${fr('11π', '6')}. At ${fr('3π', '2')} the level −2 is touched at a minimum, so the floor stays −2 throughout`,
    why: `At ${fr('π', '2')} the level 2 is touched at a maximum: values nearby have floor 1, a jump.`,
    say: null,
  },
  // pp. 370–371
  {
    topic: 11,
    kind: 'shortcut',
    q: `How many discontinuities has ${fl(X2)} in (−2, 2)?`,
    a: `Six: ${X2} = 1, 2, 3 at ${x} = ±1, ±√2, ±√3, all crossings. The level 0 at ${x} = 0 is a minimum-touch`,
    why: `${fl(SINX)} in (0, 2π) has 2, ${fr('π', '2')} and π, while ${fr('3π', '2')} is a minimum-touch.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 373
  {
    topic: 12,
    kind: 'shortcut',
    q: `${of(f, x)} = ${a}${x} + ${b} (${x} < 1), 4 (${x} = 1), ${X2} + 3${x} (${x} > 1): which ${a}, ${b} make it differentiable at 1?`,
    a: `${a} = 5, ${b} = −1. Continuity first: ${a} + ${b} = 4. Then ${LHD} = ${a} and ${RHD} = 2(1) + 3 = 5`,
    why: `${I('kx')} + 1 then cos${NB}${x} at π: continuity needs ${k} = −${fr('2', 'π')}, equal slopes ${k} = 0, so no ${k} gives both.`,
    say: null,
  },
  // pp. 374–375
  {
    topic: 12,
    kind: 'remember',
    q: `At how many points of (−2, 3) is ${fl(X2)}${NB}sin(π${x}) discontinuous?`,
    a: `8: ±√2, ±√3, √5, √6, √7, √8. ${fl(X2)} jumps at ${x} = ±√${n}, but at the integers sin(π${x}) → 0 sends both one-sided limits to 0, the value there; and 0 is a minimum-touch`,
    why: 'Multiplying by a factor that vanishes exactly at a jump heals it.',
    say: 'Corners add unless they cancel.',
  },
  // p. 375
  {
    topic: 12,
    kind: 'shortcut',
    q: `${of(f, `${x} + ${y}`)} = ${of(f, x)}${of(f, y)}, ${of(f, x)} ≠ 0, ${of(fp, '0')} = 2: what is ${of(fp, '3')}?`,
    a: `2${ex('6')}. ${of(f, '0')} = 1; differentiating in ${y} at ${y} = 0 gives ${of(fp, x)} = 2${of(f, x)}, so ${of(f, x)} = ${ex(`2${x}`)}`,
    why: `Find ${of(f, '0')}, differentiate in one variable at 0, then solve the differential equation with ${of(f, '0')}.`,
    say: null,
  },
  // pp. 375–376, 379, 381
  {
    topic: 12,
    kind: 'mistake',
    q: `Is the derivative of ${inv('sin', `(${fr(`2${x}`, ONE_PLUS)})`)} equal to ${fr('2', ONE_PLUS)} for all ${x}?`,
    a: `No: only for ${abs(x)} < 1. For ${abs(x)} > 1 the expression is ±π − 2${NB}${inv('tan')}, derivative −${fr('2', ONE_PLUS)}; at ±1 there is a corner. ${inv('tan', `(${fr(`2${x}`, `1 − ${X2}`)})`)} differs from 2${NB}${inv('tan')} only by a constant ±π, so its derivative is ${fr('2', ONE_PLUS)} for every ${x} ≠ ±1`,
    why: 'Check whether the multiple angle stays in the principal range before cancelling.',
    say: null,
  },
  // pp. 377, 379
  {
    topic: 12,
    kind: 'mistake',
    q: `${x} = 2${NB}sin${NB}${th} − sin${NB}2${th}, ${y} = 2${NB}cos${NB}${th} − cos${NB}2${th}: what is ${D2Y} at ${th} = π?`,
    a: `${fr('3', '8')}. ${DYDX} = cot${NB}${fr(`3${th}`, '2')}; its ${th}-derivative −${fr('3', '2')}${NB}csc<sup>2</sup>${NB}${fr(`3${th}`, '2')} is −${fr('3', '2')} at π, divided by ${fr(`d${x}`, `d${th}`)} = −4. The naive ratio of second derivatives does not even exist here: 6 ÷ 0`,
    why: 'Simplify the slope fully before substituting a value.',
    say: 'Simplify fully before substituting any value.',
  },
];
