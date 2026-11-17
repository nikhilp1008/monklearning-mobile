/**
 * KEY POINTS for Mathematics Class 12, Chapter 6 (Applications of
 * Derivatives).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 each have five Remember points and one of each other kind;
 * Topics 04 and 05, the book's two short appendices, have three Remember
 * points and one of each other kind; Additional topics A–E have two Remember
 * points and one of each other kind; Additional P, the past-paper analysis,
 * has five points (archetypes as Remember and Exam shortcuts, two traps): 66
 * points in all. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4 (the book's Subtopics 01–03 and its
 * Appendices A and B, numbered on); Additional topics A–E are 5–9 (Addenda
 * A–E) and Additional P is 10 (Addendum P, What JEE Actually Asks). No point
 * refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, theorems, procedures and its Cheat sheet. Common mistakes: its
 * Common student pitfalls and its MCQ traps (Topics 04–05: their Pitfalls &
 * Pro-Tips; A–E, which print neither: the slips their worked examples and
 * practice answers warn about; P: its traps). Exam shortcuts: its Pro-Tips
 * and worked examples. `say`: the book's own memory aids, word for word
 * without their quotation marks and the gloss after them: Topics 01–03 print
 * one each, all three here as memory lines (Topic 02's "Slope says go" and
 * Topic 03's "Frown for max, smile for min" drop their glosses). Topics 04
 * and 05, A–E and P print no aids, so each has two of the book's own
 * one-line sentences (Topic 04: "Flip and negate.", cut and capitalised, and
 * "Always confirm the point actually lies on the curve before writing the
 * line."; Topic 05: "The smaller the step, the better the estimate." and
 * "Trig approximations require x in radians."; A: "Tilt the picture flat."
 * and "Both bounds come from one MVT application.", cut; B: "Track
 * strictness honestly.", cut and capitalised, and "On each monotonic branch
 * the graph crosses the axis at most once.", its step 3; C: "Same
 * diagnostic, opposite realities." and "Only sign-changers count."; D:
 * "Calculus and AM–GM agree.", cut, and "Any answer failing this normal
 * test is wrong on sight."; E: "For certain curves these segments are
 * gloriously constant.", cut and capitalised, and "Derive them once rather
 * than memorising blind.", cut and capitalised; P: "The examiners recycle
 * almost verbatim." and "Never trust f′ = 0 alone.", from its bracket,
 * capitalised): nineteen in all, all of them memory lines.
 *
 * Where the book over-states a rule, the point states only the true version:
 * the First Derivative Test's "f′ does not change sign ⇒ c is a point of
 * inflection" (the true conclusion is only "no extremum"; a critical point
 * without a sign change need not be an inflection point), and the Topic 02
 * Pro-Tip "read the sign of the middle interval first: it instantly fixes the
 * whole pattern by alternation" (true only when the roots of f′ are simple;
 * a squared factor does not change sign, as (x − 1)² shows in Topic 03's
 * first MCQ). The Exam relevance claims, the CBSE, NCERT, syllabus and
 * rationalisation remarks (Lagrange's theorem and the two appendices are
 * given without them, decisions 25 and 27), the "closed brackets accepted in
 * CBSE" remark, the past-paper distribution and paper counts in P are left
 * out.
 *
 * Markup is the chapter's own: <i> for every variable, function and point
 * letter, d/dx and dy/dx with an upright d, ln, sin and the other function
 * names upright, ′ and ″ (U+2032, U+2033) for derivatives, |x| with a word
 * joiner, Δ upright, − (U+2212) for minus. Every fraction is stacked,
 * <frac><num>…</num><den>…</den></frac>, and never a fraction inside a
 * numerator (÷ there instead); no em dashes; and always a space after "<",
 * so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const WJ = '⁠';
const abs = (s: string) => `|${WJ}${s}|`;
const sup = (b: string, s: string) => `${b}<sup>${s}</sup>`;
const sb = (b: string, s: string) => `${b}<sub>${s}</sub>`;
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
const r = I('r');
const t = I('t');
const x = I('x');
const y = I('y');
const A = I('A');
const R = I('R');
const S = I('S');
const V = I('V');
const th = I('θ');
const fp = `${f}′`;
const fpp = `${f}″`;
const gp = `${g}′`;
const of = (fn: string, s: string) => `${fn}(${s})`;
/** d/dt and friends, with an upright d. */
const dd = (top: string, bot: string) => fr(`d${top}`, `d${bot}`);
const DYDX = dd(y, x);
const DRDT = dd(r, t);
const DXDT = dd(x, t);
const DYDT = dd(y, t);
const DHDT = dd(h, t);
const DVDT = dd(V, t);
const DSDT = dd(S, t);
const DADT = dd(A, t);
const X2 = sq(x);
const X3 = cu(x);
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const x0 = sb(x, '0');
const y0 = sb(y, '0');
const m1 = sb(m, '1');
const m2 = sb(m, '2');
const Dx = `Δ${x}`;
const Dy = `Δ${y}`;
const fN = (o: string) => `${f}<sup>(${o})</sup>`;
const ex = (s: string) => `e<sup>${s}</sup>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Rate of Change of Quantities ──
  // pp. 383–385
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the difference between an average and an instantaneous rate of change?',
    a: `The average rate over an interval is ${fr(Dy, Dx)}, a ratio of finite changes; the instantaneous rate is its limit, ${DYDX} = ${of(fp, x)}, evaluated at the given point`,
    why: '“How fast … when the radius is 10 cm” asks for the instantaneous rate at that moment.',
    say: null,
  },
  // pp. 383–385, 387
  {
    topic: 0,
    kind: 'remember',
    q: 'How are two changing quantities’ rates linked?',
    a: `By the chain rule in time: if ${I('Q')} depends on ${x} and ${x} on ${t}, ${dd(I('Q'), t)} = ${dd(I('Q'), x)} · ${DXDT}. For a ripple, ${DADT} = 2π${r}${NB}${DRDT}`,
    why: `A slick growing at ${DRDT} = 3 cm/s has ${DADT} = 2π(10)(3) = 60π cm<sup>2</sup>/s at ${r} = 10 cm.`,
    say: null,
  },
  // pp. 385, 392
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the standard rate relations for a circle, a sphere and a cube?',
    a: `Circle: ${DADT} = 2π${r}${NB}${DRDT}, ${dd(I('C'), t)} = 2π${NB}${DRDT}. Sphere: ${DVDT} = 4π${sq(r)}${NB}${DRDT}, ${DSDT} = 8π${r}${NB}${DRDT}. Cube of edge ${x}: ${DVDT} = 3${X2}${NB}${DXDT}`,
    why: `For a cone, ${V} = ${fr('1', '3')}π${sq(r)}${h}: first use the constraint between ${r} and ${h}.`,
    say: null,
  },
  // pp. 386, 392
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the five-step method for a related-rates problem?',
    a: `Name the given and wanted rates; write a relation between the quantities; eliminate extra variables with the constraint; differentiate the whole relation with respect to ${t}; only then substitute the instant’s values, with sign and units`,
    why: 'A decreasing quantity carries a negative rate; units travel with it (cm/s, cm<sup>2</sup>/s, cm<sup>3</sup>/s).',
    say: 'Differentiate first, plug in last.',
  },
  // p. 389
  {
    topic: 0,
    kind: 'remember',
    q: `Water enters an inverted cone at 8 cm<sup>3</sup>/s, with ${r} = ${fr(h, '2')}: how fast does the level rise at depth 4 cm?`,
    a: `${fr('2', 'π')} cm/s. Reduce to ${h} first: ${V} = ${fr('1', '3')}π(${fr(h, '2')})<sup>2</sup>${h} = ${fr(`π${cu(h)}`, '12')}, so ${DVDT} = ${fr(`π${sq(h)}`, '4')}${NB}${DHDT}, and 8 = 4π${NB}${DHDT}`,
    why: 'Without the constraint you are left with an unknown extra rate.',
    say: null,
  },
  // p. 391
  {
    topic: 0,
    kind: 'mixup',
    q: 'A balloon’s volume grows at a constant rate. Is its radius growing at a constant rate too?',
    a: `No, more and more slowly: ${DRDT} = ${fr('1', `4π${sq(r)}`)}${NB}${DVDT}, which shrinks as ${r} grows`,
    why: 'The rates do not track linearly; the geometry sits between them.',
    say: null,
  },
  // pp. 387–388, 392
  {
    topic: 0,
    kind: 'mistake',
    q: `A 13 m ladder’s foot moves out at 2 m/s. How fast does the top move when the foot is 5 m out?`,
    a: `${DYDT} = −${fr(x, y)}${NB}${DXDT} = −${fr('5', '12')}(2) = −${fr('5', '6')} m/s: the top slides down at ${fr('5', '6')} m/s. Dropping the minus sign is the usual lost mark`,
    why: `${X2} + ${sq(y)} = 169 is differentiated before ${x} = 5, ${y} = 12 go in; plugging in first kills the rates.`,
    say: null,
  },
  // pp. 387, 392
  {
    topic: 0,
    kind: 'shortcut',
    q: `A sphere’s volume grows at 100 cm<sup>3</sup>/s. At ${r} = 5 cm, how fast do its radius and surface area grow?`,
    a: `${DVDT} = (surface area) × ${DRDT}, since ${dd(V, r)} = 4π${sq(r)} = ${S}: ${DRDT} = ${fr('100', '100π')} = ${fr('1', 'π')} cm/s, then ${DSDT} = 8π(5)(${fr('1', 'π')}) = 40 cm<sup>2</sup>/s`,
    why: 'The same check works on every sphere problem.',
    say: null,
  },

  // ── Topic 02 · Monotonicity ──
  // pp. 393–394
  {
    topic: 1,
    kind: 'remember',
    q: `What do increasing and strictly increasing mean on an interval ${I('I')}?`,
    a: `For all ${sb(x, '1')} < ${sb(x, '2')} in ${I('I')}: increasing means ${of(f, sb(x, '1'))} ≤ ${of(f, sb(x, '2'))}, strictly increasing means ${of(f, sb(x, '1'))} < ${of(f, sb(x, '2'))} (decreasing likewise with ≥ and >). Monotonicity belongs to an interval, never to a point`,
    why: `Either kind, increasing or decreasing, is called monotonic on ${I('I')}.`,
    say: null,
  },
  // pp. 393–394
  {
    topic: 1,
    kind: 'remember',
    q: 'What does the first-derivative criterion for monotonicity say?',
    a: `For ${f} continuous on [${a}, ${b}] and differentiable on (${a}, ${b}): ${of(fp, x)} > 0 throughout ⇒ strictly increasing on [${a}, ${b}]; ${of(fp, x)} < 0 ⇒ strictly decreasing; ${of(fp, x)} = 0 ⇒ constant. The sign of the slope decides, not its size`,
    why: `The rigorous proof runs through the Mean Value Theorem: ${of(f, sb(x, '2'))} − ${of(f, sb(x, '1'))} = ${of(fp, c)}(${sb(x, '2')} − ${sb(x, '1')}).`,
    say: 'Slope says go.',
  },
  // pp. 393–394, 401
  {
    topic: 1,
    kind: 'remember',
    q: `Is ${X3} strictly increasing, though ${of(fp, '0')} = 0?`,
    a: `Yes: ${of(fp, x)} ≥ 0 with equality only at finitely many isolated points still gives strict increase. So ${of(fp, x)} > 0 is sufficient, not necessary`,
    why: `${x} − ${SINX} is strictly increasing too: its derivative 1 − ${COSX} vanishes only at isolated points.`,
    say: null,
  },
  // pp. 395, 401
  {
    topic: 1,
    kind: 'remember',
    q: 'How do you find the intervals of increase and decrease?',
    a: `Fix the domain; differentiate and factor ${fp}; find the critical points (${fp} = 0 or undefined); test one point in each piece of the sign chart; translate the signs. Closed brackets at a critical point are fine when ${f} is continuous there`,
    why: `2${X3} − 9${X2} + 12${x} + 5: ${of(fp, x)} = 6(${x} − 1)(${x} − 2), increasing on (−∞, 1] and [2, ∞), decreasing on [1, 2].`,
    say: null,
  },
  // pp. 397, 401
  {
    topic: 1,
    kind: 'remember',
    q: `How does monotonicity prove ${x} > ln(1 + ${x}) for ${x} > 0?`,
    a: `Put ${of(g, x)} = ${x} − ln(1 + ${x}). Then ${of(gp, x)} = ${fr(x, `1 + ${x}`)} > 0 for ${x} > 0, so ${g} is strictly increasing on [0, ∞) and ${of(g, x)} > ${of(g, '0')} = 0`,
    why: `Define ${g} = LHS − RHS, fix the sign of ${gp}, and anchor at a known point.`,
    say: null,
  },
  // pp. 393, 400
  {
    topic: 1,
    kind: 'mixup',
    q: `${fr('1', x)} decreases on (−∞, 0) and on (0, ∞). Does it decrease on its whole domain?`,
    a: `No: ${of(f, '−1')} = −1 < 1 = ${of(f, '1')}. Monotonic pieces never merge across a gap in the domain`,
    why: 'Always split at domain breaks before stating intervals.',
    say: null,
  },
  // p. 400
  {
    topic: 1,
    kind: 'mistake',
    q: `For which ${b} is ${X3} + ${b}${X2} + 3${x} + 5 strictly increasing on ℝ?`,
    a: `${b} ∈ [−3, 3], the closed interval. ${of(fp, x)} = 3${X2} + 2${b}${x} + 3 ≥ 0 for every ${x} needs discriminant 4${sq(b)} − 36 ≤ 0; at ${b} = ±3, ${fp} has one isolated zero, which is harmless`,
    why: 'Writing the discriminant condition as strict (< 0) loses the endpoints.',
    say: null,
  },
  // pp. 398, 401
  {
    topic: 1,
    kind: 'shortcut',
    q: `How do you show ${X3} + 3${X2} + 6${x} − 11 is strictly increasing on ℝ?`,
    a: `Skip the sign chart and bound ${fp}: ${of(fp, x)} = 3(${x} + 1)<sup>2</sup> + 3 > 0 for every ${x}. Complete the square, or use −1 ≤ ${COSX} ≤ 1 for a trigonometric term`,
    why: `When ${fp} factors into distinct linear factors, its sign alternates across the roots; a repeated factor does not change sign.`,
    say: null,
  },

  // ── Topic 03 · Maxima and Minima ──
  // pp. 402–403
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a critical point, and why does it matter?',
    a: `A point of the domain where ${of(fp, c)} = 0 or ${of(fp, c)} does not exist. Interior local extrema can occur only there; a local extremum is the highest or lowest point nearby, an absolute one over the whole interval`,
    why: `Corners such as the vertex of ${abs(x)} can be minima, so include non-differentiable points.`,
    say: null,
  },
  // pp. 402–403, 410
  {
    topic: 2,
    kind: 'remember',
    q: 'What does the First Derivative Test say?',
    a: `As ${x} increases through a critical point ${c} of a continuous ${f}: ${fp} from + to − gives a local maximum, from − to + a local minimum; no change of sign, no extremum. It also handles corners`,
    why: `${X3} at 0: + before and + after, so no extremum (an inflection point there).`,
    say: null,
  },
  // pp. 403, 410
  {
    topic: 2,
    kind: 'remember',
    q: 'What does the Second Derivative Test say, and when is it silent?',
    a: `With ${of(fp, c)} = 0: ${of(fpp, c)} < 0 gives a local maximum, ${of(fpp, c)} > 0 a local minimum. If ${of(fpp, c)} = 0 the test fails: go back to the First Derivative Test`,
    why: `It needs ${f} twice differentiable at ${c}, so it classifies only smooth interior turning points.`,
    say: 'Frown for max, smile for min.',
  },
  // pp. 404, 407
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you find absolute extrema on [a, b]?',
    a: `Evaluate ${f} at every critical point inside (${a}, ${b}) and at both endpoints, then compare: the largest is the absolute maximum, the smallest the absolute minimum. The endpoints are the step students forget`,
    why: `3${sup(x, '4')} − 8${X3} + 12${X2} − 48${x} + 25 on [0, 3]: maximum 25 at the endpoint 0, minimum −39 at 2.`,
    say: null,
  },
  // pp. 404, 406
  {
    topic: 2,
    kind: 'remember',
    q: `Squares of side ${x} are cut from the corners of an 18 cm tin sheet to fold an open box. Which ${x} maximises the volume?`,
    a: `${x} = 3 cm, ${V} = 432 cm<sup>3</sup>. ${of(V, x)} = ${x}(18 − 2${x})<sup>2</sup> on 0 < ${x} < 9 gives ${of(`${V}′`, x)} = (18 − 2${x})(18 − 6${x}); the root 9 is rejected, since it gives no box`,
    why: 'State the feasible domain first, so infeasible roots reject themselves; then answer what is asked.',
    say: null,
  },
  // p. 409
  {
    topic: 2,
    kind: 'mixup',
    q: `Has ${X3} − 3${X2} + 3${x} + 7 a maximum or a minimum at ${x} = 1, where ${fp} = 0?`,
    a: `Neither: ${of(fp, x)} = 3(${x} − 1)<sup>2</sup> ≥ 0 touches zero at 1 but never changes sign. ${of(fp, c)} = 0 is necessary for a smooth extremum, not sufficient`,
    why: 'A critical point is only a candidate until a sign flip or a curvature check settles it.',
    say: null,
  },
  // pp. 409–410
  {
    topic: 2,
    kind: 'mistake',
    q: `For ${sup(x, '4')} at 0, the Second Derivative Test fails. So is there no extremum?`,
    a: `There is a local minimum: ${of(fpp, '0')} = 0 means “inconclusive”, not “no extremum”. ${fp} = 4${X3} goes from − to + at 0`,
    why: 'Never write “no maximum or minimum” from a failed second test.',
    say: null,
  },
  // pp. 407–408
  {
    topic: 2,
    kind: 'shortcut',
    q: `Which cylinder of greatest volume fits inside a sphere of radius ${R}?`,
    a: `Height ${fr(`2${R}`, '√3')}, volume ${fr(`4π${cu(R)}`, '3√3')}. With ${sq(r)} = ${sq(R)} − ${fr(sq(h), '4')}, ${of(V, h)} = π(${sq(R)}${h} − ${fr(cu(h), '4')}), so ${of(`${V}′`, h)} = 0 at ${sq(h)} = ${fr(`4${sq(R)}`, '3')}`,
    why: 'Make the objective a function of one variable through the constraint, then differentiate.',
    say: null,
  },

  // ── Topic 04 · Tangents and Normals ──
  // pp. 412, 415
  {
    topic: 3,
    kind: 'remember',
    q: `What are the tangent and normal to ${y} = ${of(f, x)} at (${x0}, ${y0})?`,
    a: `With ${m} = ${of(fp, x0)}: tangent ${y} − ${y0} = ${m}(${x} − ${x0}); normal ${y} − ${y0} = −${fr('1', m)}(${x} − ${x0}). If ${m} = 0 the tangent is ${y} = ${y0} and the normal ${x} = ${x0}; a vertical tangent ${x} = ${x0} has the normal ${y} = ${y0}`,
    why: `For ${y} = ${X2} − 3${x} + 2 at (2, 0): ${m} = 1, tangent ${y} = ${x} − 2, normal ${y} = −${x} + 2.`,
    say: 'Flip and negate.',
  },
  // pp. 412–413
  {
    topic: 3,
    kind: 'remember',
    q: 'At what angle do two curves meet?',
    a: `tan${NB}${th} = ${abs(fr(`${m1} − ${m2}`, `1 + ${m1}${m2}`))}, with ${m1}, ${m2} the tangent slopes at the common point. They cut orthogonally if ${m1}${m2} = −1 and touch if ${m1} = ${m2}`,
    why: `${y} = ${X2} and ${x} = ${sq(y)} at (1, 1): ${m1} = 2, ${m2} = ${fr('1', '2')}, tan${NB}${th} = ${fr('3', '4')}.`,
    say: 'Always confirm the point actually lies on the curve before writing the line.',
  },
  // pp. 413, 415
  {
    topic: 3,
    kind: 'remember',
    q: `Where is the tangent to ${y} = ${X3} − 11${x} + 5 parallel to ${y} = ${x} − 11?`,
    a: `Parallel means slope 1: 3${X2} − 11 = 1, so ${x} = ±2, giving (2, −9) and (−2, 19). For a perpendicular line set ${m} × (line slope) = −1 instead`,
    why: `At (2, −9) the tangent is the given line itself; at (−2, 19) it is ${y} = ${x} + 21.`,
    say: null,
  },
  // pp. 412, 415
  {
    topic: 3,
    kind: 'mixup',
    q: `The tangent slope at a point is ${m}. Is the normal slope ${fr('1', m)} or −${m}?`,
    a: `Neither: −${fr('1', m)}. Perpendicular slopes multiply to −1, so flip and negate; a missed sign is the most common error`,
    why: `The normal to ${y} = ${fr('1', x)} at (1, 1) has slope 1 (tangent slope −1): ${y} = ${x}.`,
    say: null,
  },
  // p. 415
  {
    topic: 3,
    kind: 'mistake',
    q: `For a tangent perpendicular to a line, do you set ${m} equal to the line’s slope?`,
    a: `No, that is the parallel case. Perpendicular means ${m} × (line slope) = −1. And before either, check the point lies on the curve`,
    why: `When ${m} = 0, write the horizontal and vertical lines directly instead of dividing by zero.`,
    say: null,
  },
  // p. 415
  {
    topic: 3,
    kind: 'shortcut',
    q: `Where is the tangent to ${y} = ${X3} parallel to ${y} = 12${x} + 7?`,
    a: `At (2, 8) and (−2, −8): 3${X2} = 12 gives ${x} = ±2`,
    why: `The tangent to ${y} = ${SINX} at 0 is ${y} = ${x}, slope cos${NB}0 = 1.`,
    say: null,
  },

  // ── Topic 05 · Approximations and Differentials ──
  // pp. 416–417
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the differential, and what is linear approximation?',
    a: `d${y} = ${of(fp, x)}${NB}d${x}, and ${Dy} ≈ d${y} for small ${Dx}. So ${of(f, `${x} + ${Dx}`)} ≈ ${of(f, x)} + ${of(fp, x)}${NB}${Dx}: walk along the tangent instead of the curve, from a base ${x} where ${of(f, x)} and ${of(fp, x)} are easy`,
    why: `√25.3 ≈ 5 + ${fr('1', '10')}(0.3) = 5.03; the true value is about 5.0299.`,
    say: 'The smaller the step, the better the estimate.',
  },
  // pp. 416–418
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you estimate the error in a computed quantity?',
    a: `Absolute error ≈ ${abs(`d${y}`)} = ${abs(of(fp, x))}${NB}${abs(`d${x}`)}; relative error ≈ ${abs(fr(`d${y}`, y))}; percentage error ≈ ${abs(fr(`d${y}`, y))} × 100. For ${y} = ${sup(x, n)}, ${fr(`d${y}`, y)} = ${n}${NB}${fr(`d${x}`, x)}`,
    why: `A sphere’s radius 9 cm ± 0.03 cm: ${fr(`d${V}`, V)} = 3${NB}${fr(`d${r}`, r)} = 3 · ${fr('0.03', '9')}, a 1% error in the volume.`,
    say: `Trig approximations require ${x} in radians.`,
  },
  // p. 418
  {
    topic: 4,
    kind: 'remember',
    q: `What three things does a linear approximation need?`,
    a: `A base point close to the target and easy to evaluate; ${Dx} = target − base, with its sign; and ${f} differentiable at the base, with ${Dx} small`,
    why: 'A poor base point ruins the estimate.',
    say: null,
  },
  // pp. 416, 418
  {
    topic: 4,
    kind: 'mixup',
    q: 'Absolute or relative error: which is which?',
    a: `The absolute error is the estimated change itself, ${abs(`d${y}`)}; the relative error divides it by the value, ${abs(fr(`d${y}`, y))}, and the percentage error is that × 100`,
    why: 'A 2% error in a square’s side gives about 4% in its area.',
    say: null,
  },
  // pp. 417–418
  {
    topic: 4,
    kind: 'mistake',
    q: `Estimate (1.97)<sup>6</sup> from ${x} = 2. What is ${Dx}?`,
    a: `−0.03, not +0.03: (1.97)<sup>6</sup> ≈ 64 + 192(−0.03) = 58.24. And for sin${NB}31°, convert the 1° step to radians first`,
    why: 'The true value is about 58.45: the tangent runs below a curve that bends upward.',
    say: null,
  },
  // pp. 417–418
  {
    topic: 4,
    kind: 'shortcut',
    q: `${y} = ${sup(x, n)} and ${x} has a small percentage error: what is the error in ${y}?`,
    a: `${n} times as large, from ${fr(`d${y}`, y)} = ${n}${NB}${fr(`d${x}`, x)}: a volume ${V} ∝ ${cu(r)} triples the percentage error in ${r}, an area doubles it`,
    why: 'No derivative of the whole formula is needed.',
    say: null,
  },

  // ── Additional A · Rolle’s Theorem and the Mean Value Theorem ──
  // pp. 419–420
  {
    topic: 5,
    kind: 'remember',
    q: 'Why are Rolle’s theorem and the Mean Value Theorem true?',
    a: `Rolle: a continuous ${f} on [${a}, ${b}] has a maximum and a minimum; if both are at the endpoints, ${f} is constant; otherwise one is interior, and an interior extremum of a differentiable function has ${fp} = 0 (Fermat: the one-sided quotients are ≤ 0 and ≥ 0). The Mean Value Theorem is Rolle applied to ${of(f, x)} − ${of(f, a)} − μ(${x} − ${a}), with μ the secant slope`,
    why: `Cauchy’s version is Rolle on ${f} − ${of(f, a)} − λ(${g} − ${of(g, a)}), divided by the non-zero ${of(gp, c)}.`,
    say: 'Tilt the picture flat.',
  },
  // p. 420
  {
    topic: 5,
    kind: 'remember',
    q: 'What three consequences of the Mean Value Theorem are used constantly?',
    a: `${fp} = 0 on an interval ⇒ ${f} constant there; ${abs(fp)} ≤ ${I('M')} ⇒ ${abs(`${of(f, b)} − ${of(f, a)}`)} ≤ ${I('M')}${abs(`${b} − ${a}`)}; between two zeros of ${f} lies a zero of ${fp}, so ${n} distinct zeros force at least ${n} − 1 of ${fp}`,
    why: `${abs(`tan${NB}${a} − tan${NB}${b}`)} ≥ ${abs(`${a} − ${b}`)} on (−${fr('π', '2')}, ${fr('π', '2')}), since sec<sup>2</sup>${NB}${c} ≥ 1.`,
    say: null,
  },
  // pp. 420, 422
  {
    topic: 5,
    kind: 'mixup',
    q: `${abs(x)} and ${fr('1', x)} on [−1, 1]: which hypothesis fails for each?`,
    a: `${abs(x)} is continuous but not differentiable at 0; ${fr('1', x)} is not even defined, so not continuous, at 0. For ${fr('1', x)} the theorem would promise ${of(fp, c)} = 1, yet ${of(fp, x)} = −${fr('1', X2)} < 0 wherever it exists`,
    why: 'A corner or a hole inside the interval voids the guarantee.',
    say: null,
  },
  // p. 421
  {
    topic: 5,
    kind: 'mistake',
    q: `Verify Rolle for ${X3} − 3${x} on [0, √3]: is ${c} = ±1?`,
    a: `Only ${c} = 1. ${of(f, '0')} = ${of(f, '√3')} = 0 and ${of(fp, x)} = 3(${x} − 1)(${x} + 1), but −1 is outside (0, √3)`,
    why: 'A verification checks all three hypotheses and keeps only c strictly inside the interval.',
    say: null,
  },
  // p. 421
  {
    topic: 5,
    kind: 'shortcut',
    q: `What two bounds on ln(1 + ${x}) does one Mean Value Theorem step give for ${x} > 0?`,
    a: `${fr(x, `1 + ${x}`)} < ln(1 + ${x}) < ${x}: ln(1 + ${x}) = ${fr(x, `1 + ${c}`)} for some 0 < ${c} < ${x}. In general ${fr(`${b} − ${a}`, b)} < ln${NB}${fr(b, a)} < ${fr(`${b} − ${a}`, a)} for 0 < ${a} < ${b}`,
    why: 'Squeeze c between the endpoints and reciprocate.',
    say: 'Both bounds come from one MVT application.',
  },

  // ── Additional B · Monotonicity II ──
  // p. 423
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the comparative lemma say?',
    a: `If ${of(f, a)} ≥ ${of(g, a)} and ${of(fp, x)} > ${of(gp, x)} on (${a}, ${b}), with ${f}, ${g} continuous on [${a}, ${b}) and differentiable on (${a}, ${b}), then ${of(f, x)} > ${of(g, x)} on (${a}, ${b}). With only ${fp} ≥ ${gp}, the conclusion is only ${f} ≥ ${g}`,
    why: `ln(1 + ${x}) > ${x} − ${fr(X2, '2')} for ${x} > 0: the difference has derivative ${fr(X2, `1 + ${x}`)} > 0 and value 0 at 0.`,
    say: 'Track strictness honestly.',
  },
  // p. 424
  {
    topic: 6,
    kind: 'remember',
    q: `How do you count the real roots of ${of(f, x)} = 0?`,
    a: `Find the critical points; evaluate ${f} at each and take the limits at the ends of the domain. Each monotonic branch has exactly one root if its end-values have opposite signs, none if the same; a 0 at a shared critical point counts once. For a parameter, the count changes where an extremum value hits 0`,
    why: `2${X3} − 9${X2} + 12${x} − 3 has extremum values 2 and 1, both positive: exactly one real root.`,
    say: 'On each monotonic branch the graph crosses the axis at most once.',
  },
  // p. 425
  {
    topic: 6,
    kind: 'mixup',
    q: `To prove ${x} − ${fr(X3, '6')} < ${SINX} < ${x} for ${x} > 0, which link comes first?`,
    a: `The upper one, ${SINX} < ${x}. The lower link’s auxiliary needs ${x} − ${SINX} > 0 inside its own derivative certificate, so it can only be proved after`,
    why: 'Reusing a proved inequality inside another derivative is the examined skill.',
    say: null,
  },
  // p. 425
  {
    topic: 6,
    kind: 'mistake',
    q: `How many distinct real roots has ${X3} − 3${x} + 2 = 0?`,
    a: `Two, not three: it is (${x} − 1)<sup>2</sup>(${x} + 2), a double root at the local minimum 1 touching the axis and a simple root at −2`,
    why: `The double root sits on a shared end of two branches and is counted once.`,
    say: null,
  },
  // p. 425
  {
    topic: 6,
    kind: 'shortcut',
    q: `For which ${k} has ${X3} − 3${x} + ${k} = 0 three distinct real roots?`,
    a: `−2 < ${k} < 2. The extremum values are ${of(f, '−1')} = ${k} + 2 (maximum) and ${of(f, '1')} = ${k} − 2 (minimum); three crossings need them of opposite signs`,
    why: `${k} = ±2: two distinct roots (one double); ${k} < −2 or ${k} > 2: exactly one.`,
    say: null,
  },

  // ── Additional C · Higher Derivatives, Concavity, Inflection ──
  // pp. 426–427
  {
    topic: 7,
    kind: 'remember',
    q: 'What does the n-th derivative test say?',
    a: `If ${of(fp, c)} = ⋯ = ${of(fN(`${n}−1`), c)} = 0 and ${of(fN(n), c)} ≠ 0, with ${fN(n)} continuous at ${c}: for even ${n}, a strict local maximum if ${of(fN(n), c)} < 0 and a minimum if > 0; for odd ${n}, no extremum but a stationary point of inflection`,
    why: `${sup(x, '4')}: ${n} = 4, a minimum; ${X3}: ${n} = 3, a stationary inflection.`,
    say: 'Same diagnostic, opposite realities.',
  },
  // p. 427
  {
    topic: 7,
    kind: 'remember',
    q: 'What is a point of inflection, and how do you find one?',
    a: `An interior point where the concavity changes: ${fpp} > 0 is concave up, ${fpp} < 0 concave down. Solve ${fpp} = 0, then test the sign of ${fpp} on each side. ${fpp} = 0 is necessary (for continuous ${fpp}) but not sufficient`,
    why: `${sup(x, '4')} has ${of(fpp, '0')} = 0 yet ${fpp} ≥ 0 everywhere: no inflection.`,
    say: 'Only sign-changers count.',
  },
  // pp. 426–427
  {
    topic: 7,
    kind: 'mixup',
    q: `${X3} and ${sup(x, '4')} both have ${fp} = ${fpp} = 0 at the origin. Same behaviour?`,
    a: `No: ${X3} has a stationary inflection (first non-zero derivative of odd order 3), ${sup(x, '4')} a strict minimum (even order 4, positive)`,
    why: 'A zero second derivative is where the chapter’s test stops, not an answer.',
    say: null,
  },
  // p. 429
  {
    topic: 7,
    kind: 'mistake',
    q: `${of(f, x)} = ${sup(x, '6')} − 3${sup(x, '4')} + 3${X2} has critical points 0 and ±1. Are all three extrema?`,
    a: `No: only 0, a strict minimum. ${of(fp, x)} = 6${x}(${X2} − 1)<sup>2</sup> changes sign at 0 but not at ±1, which are stationary inflections`,
    why: `It factors as (${X2} − 1)<sup>3</sup> + 1; its four inflection points are ±1 and ±${fr('1', '√5')}.`,
    say: null,
  },
  // p. 428
  {
    topic: 7,
    kind: 'shortcut',
    q: `What happens at the critical point of ${sup(x, '5')} − 5${sup(x, '4')} + 10${X3} − 10${X2} + 5${x} + 2?`,
    a: `It is (${x} − 1)<sup>5</sup> + 3 (row five of Pascal’s triangle, alternating signs), so at ${x} = 1 the first four derivatives vanish and the fifth is 120: a stationary inflection, no extremum`,
    why: `Likewise ${sup(x, '4')} + 4${X3} + 6${X2} + 4${x} + 2 = (${x} + 1)<sup>4</sup> + 1: a strict minimum 1 at −1.`,
    say: null,
  },

  // ── Additional D · Extrema on Open and Unbounded Domains ──
  // pp. 429–430
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you find a global extremum on an open or unbounded domain?',
    a: `Find the interior critical points and the limits of ${f} at every end. If both end-limits are +∞, the smallest critical value is the global minimum (with −∞, the largest is the global maximum); a finite end-limit joins the comparison. “No global minimum” is a valid answer`,
    why: 'The closed-interval rule has no endpoints to evaluate here.',
    say: null,
  },
  // pp. 430–431
  {
    topic: 8,
    kind: 'remember',
    q: `What is the least value of ${I('px')} + ${fr(q, x)} for ${p}, ${q}, ${x} > 0?`,
    a: `2√${I('pq')}, at ${x} = √(${fr(q, p)}): the derivative ${p} − ${fr(q, X2)} vanishes there, and both end-limits are +∞. AM–GM gives the same bound in one line`,
    why: `For ${x} + ${fr('4', X2)}: the minimum 3 at ${x} = 2, by calculus or by AM–GM on ${fr(x, '2')}, ${fr(x, '2')}, ${fr('4', X2)}.`,
    say: 'Calculus and AM–GM agree.',
  },
  // pp. 430–431
  {
    topic: 8,
    kind: 'mixup',
    q: `Inscribed rectangle in ${fr(X2, sq(a))} + ${fr(sq(y), sq(b))} = 1: parametrise or eliminate?`,
    a: `Parametrise: the vertex (${a}${NB}cos${NB}${th}, ${b}${NB}sin${NB}${th}) gives area 2${I('ab')}${NB}sin${NB}2${th} ≤ 2${I('ab')}, at ${th} = ${fr('π', '4')}. Elimination reaches the same rectangle through a square root`,
    why: `On a circle of radius ${R} the answer is the square of area 2${sq(R)}.`,
    say: null,
  },
  // p. 432
  {
    topic: 8,
    kind: 'mistake',
    q: `Has ${x}${ex(`−${x}`)} a global minimum on ℝ?`,
    a: `No. Its global maximum is ${fr('1', 'e')} at ${x} = 1, but ${f} → −∞ as ${x} → −∞: it descends without bound`,
    why: 'Compute the end-limits before declaring an extremum global.',
    say: null,
  },
  // p. 432
  {
    topic: 8,
    kind: 'shortcut',
    q: `Which point of ${sq(y)} = 4${x} is closest to (2, 1)?`,
    a: `(1, 2), at distance √2: minimise the squared distance ${fr(sup(y, '4'), '16')} − 2${y} + 5, whose derivative vanishes at ${y} = 2. Check: the joining segment (slope −1) is perpendicular to the tangent there (slope 1)`,
    why: 'The shortest segment from a point to a curve is normal to the curve.',
    say: 'Any answer failing this normal test is wrong on sight.',
  },

  // ── Additional E · Subtangent, Subnormal, Intercepts ──
  // pp. 433–434
  {
    topic: 9,
    kind: 'remember',
    q: `What are the subtangent, subnormal and the tangent and normal lengths at ${I('P')}(${x}, ${y})?`,
    a: `With ${m} = ${DYDX} and ${y}, ${m} ≠ 0: subtangent ${abs(fr(y, m))}, subnormal ${abs(I('my'))}, tangent length ${fr(`${abs(y)}√(1 + ${sq(m)})`, abs(m))}, normal length ${abs(y)}√(1 + ${sq(m)})`,
    why: `The tangent meets the ${x}-axis at ${x} − ${fr(y, m)}, the normal at ${x} + ${I('my')}; its ${y}-intercept is ${y} − ${I('mx')}.`,
    say: 'For certain curves these segments are gloriously constant.',
  },
  // pp. 434–435
  {
    topic: 9,
    kind: 'remember',
    q: 'Which classic curves have a constant subtangent or subnormal?',
    a: `${y} = ${sup(a, x)}: the subtangent is ${abs(fr('1', `ln${NB}${a}`))} everywhere. ${sq(y)} = 4${I('ax')}: the subnormal is 2${a} everywhere. At (${I('at')}<sup>2</sup>, 2${I('at')}) the tangent is ${I('ty')} = ${x} + ${I('at')}<sup>2</sup> and the normal ${y} + ${I('tx')} = 2${I('at')} + ${I('at')}<sup>3</sup>`,
    why: `The slope at the parameter point is ${m} = ${fr(`2${a}`, y)} = ${fr('1', t)}.`,
    say: 'Derive them once rather than memorising blind.',
  },
  // pp. 433–434
  {
    topic: 9,
    kind: 'mixup',
    q: `For ${y} = ${X3} at (1, 1), which is ${fr('1', '3')} and which is 3: the subtangent or the subnormal?`,
    a: `Subtangent ${abs(fr(y, m))} = ${fr('1', '3')}, subnormal ${abs(I('my'))} = 3, with ${m} = 3. The tangent ${y} = 3${x} − 2 meets the axis at ${fr('2', '3')}, the normal at 4`,
    why: `The lengths are ${fr('√10', '3')} and √10.`,
    say: null,
  },
  // p. 436
  {
    topic: 9,
    kind: 'mistake',
    q: `At which points of ${sq(y)} = 4${x} is the subnormal 4?`,
    a: `None: here ${a} = 1, so the subnormal is 2${a} = 2 at every point. It is a constant of the curve, not a variable`,
    why: `Solving ${I('my')} = 4 as if it varied is the trap.`,
    say: null,
  },
  // p. 435
  {
    topic: 9,
    kind: 'shortcut',
    q: `How do you find the tangents to ${y} = 4 − ${X2} through (2, 7), a point off the curve?`,
    a: `Take a general contact point ${x} = ${a}: the tangent is ${y} = −2${I('ax')} + ${sq(a)} + 4. Making it pass through (2, 7) gives ${sq(a)} − 4${a} − 3 = 0, so ${a} = 2 ± √7: two tangents`,
    why: 'Generic contact point plus a pass-through condition: the same machinery handles a given slope or given intercepts.',
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 437
  {
    topic: 10,
    kind: 'shortcut',
    q: `A ball of radius 10 cm has ice of thickness ${x} melting at 50 cm<sup>3</sup>/min. How fast does ${x} fall at ${x} = 5 cm?`,
    a: `At ${fr('1', '18π')} cm/min. The melt acts on the outer radius 10 + ${x}: ${V} = ${fr('4', '3')}π(10 + ${x})<sup>3</sup>, so −50 = 4π(15)<sup>2</sup>${NB}${DXDT}`,
    why: `Writing ${V} = ${fr('4', '3')}π${X3} with the thickness as the radius is the repeated trap.`,
    say: 'The examiners recycle almost verbatim.',
  },
  // p. 439
  {
    topic: 10,
    kind: 'remember',
    q: `The least-degree polynomial ${p} has a local maximum at 1, a local minimum at 3, ${of(p, '1')} = 6 and ${of(p, '3')} = 2. What is ${p}′(0)?`,
    a: `9. ${p} is a cubic with ${p}′(${x}) = ${k}(${x} − 1)(${x} − 3); integrating and fitting the two values gives ${k} = 3`,
    why: `Prescribe ${p}′ as a constant times the product of the (${x} − extremum) factors, integrate, fit the values.`,
    say: `Never trust ${fp} = 0 alone.`,
  },
  // p. 440
  {
    topic: 10,
    kind: 'shortcut',
    q: `Position ${of(f, t)} = ${I('at')}<sup>2</sup> + ${I('bt')} + ${c}: at what time is the average speed over [${sb(t, '1')}, ${sb(t, '2')}] attained?`,
    a: `At the midpoint ${fr(`${sb(t, '1')} + ${sb(t, '2')}`, '2')}: by Lagrange some τ has 2${a}τ + ${b} equal to the secant slope ${a}(${sb(t, '1')} + ${sb(t, '2')}) + ${b}`,
    why: 'For a quadratic this point is unique.',
    say: null,
  },
  // p. 441
  {
    topic: 10,
    kind: 'mistake',
    q: `What is the absolute maximum of ${X3} − 3${x} on [0, 3]?`,
    a: `18, at the endpoint 3. The critical point ${x} = 1 gives only the minimum −2`,
    why: `${SINX} + ${COSX} on [0, ${fr('π', '2')}] is the reverse trap: the endpoints give 1, the answer is √2 at ${fr('π', '4')}.`,
    say: null,
  },
  // p. 441
  {
    topic: 10,
    kind: 'mistake',
    q: `Where does ${cu(y)} + 3${X2} = 12${y} have vertical tangents?`,
    a: `Where the denominator of ${DYDX} = ${fr(`6${x}`, `12 − 3${sq(y)}`)} vanishes, so ${y} = ±2; but only ${y} = 2 gives real points, ${x} = ±${fr('4', '√3')}. ${y} = −2 leads to 3${X2} = −16`,
    why: `Vertical tangent: the denominator of ${DYDX} is zero; horizontal: the numerator.`,
    say: null,
  },
];
