/**
 * KEY POINTS for Mathematics Class 11, Chapter 5 (Linear Inequalities).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–05 and Additional topics A–F each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the sign-flip rule and the parameter case; Topic
 * 03, modeling; Topic 05, moduli with a variable right-hand side, case splits
 * and the two-distance results): 65 points in all. Memory lines are a fifth,
 * short section of their own, read rather than tested: the first two of each
 * topic.
 *
 * `topic`: Topics 01–05 are 0–4 (01–04 the main chapter, 05 the
 * supplement's Unit 5), Additional topics A–F are 5–10 (A–C the supplement's
 * addenda, D–F the "Additional Topics" part). No point refers to another
 * topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps. Exam
 * shortcuts: its Pro-Tips, with a worked example or practice answer. `say`:
 * the book's own mnemonics, word for word without their quotation marks,
 * from each topic's cheat sheet (Topics 01–05) and from the two closing
 * "Everything on One Screen" summaries, each given to the additional topic it
 * sums up (C: “Guard before you square.”, “Domain first, algebra second.”;
 * D: the point-pair and fold line; E: “Reduce, draw, then re-attach.” and the
 * dot-in-the-margin line; F: “One interior point fixes every sign.”). A and B
 * have no mnemonic, so each has the book's own one-line sentence instead:
 * twenty in all, eighteen of them memory lines (Topics 04 and 05 carry a
 * third mnemonic on a later point). Where the book over-states a rule (“always anchor positive
 * on the far right”, “never cross-multiply”, “never square”, “always
 * maximised at a vertex”, “a region bounded by n edges needs exactly n
 * inequalities”, “exactly two honest ways”, “every term on both sides is a
 * modulus”), the point states it only with the condition the chapter itself
 * gives, or leaves it out.
 *
 * Markup is the chapter's own: variables and Greek letters italic, − (U+2212)
 * for minus, every fraction stacked, <frac><num>…</num><den>…</den></frac>,
 * and always a space after “<” (as the book prints it), so it is never read
 * as a tag. Exam-frequency claims would keep the label “(the book’s estimate
 * from past papers, not official figures)”; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const x = '<i>x</i>';
const y = '<i>y</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const n = '<i>n</i>';
const t = '<i>t</i>';
const D = '<i>D</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const sq = (s: string) => `${s}<sup>2</sup>`;
/** ax² + bx + c */
const QUAD = `<i>ax</i><sup>2</sup> + <i>bx</i> + ${c}`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Linear Inequalities in One Variable ──
  // pp. 416, 418–419, 424
  {
    topic: 0,
    kind: 'remember',
    q: 'Which moves keep the direction of an inequality, which one flips it, and why does it flip?',
    a: `The order axioms, for all real ${a}, ${b}, ${c}: ${a} < ${b} ⟹ ${a} + ${c} < ${b} + ${c} (add or subtract anything); ${a} < ${b}, ${c} > 0 ⟹ <i>ac</i> < <i>bc</i> and ${fr(a, c)} < ${fr(b, c)}; ${a} < ${b}, ${c} < 0 ⟹ <i>ac</i> > <i>bc</i> and ${fr(a, c)} > ${fr(b, c)} (the sign flips); ${a} < ${b} and ${b} < ${c} ⟹ ${a} < ${c}. Proof of the flip: ${a} < ${b} means ${b} − ${a} > 0; for ${c} < 0 a positive times a negative is negative, so ${c}(${b} − ${a}) < 0, that is <i>cb</i> < <i>ca</i>. It follows from what “less than” means: multiplying by −1 reflects every point across 0, and a reflection swaps left and right`,
    why: '−2 < 3; multiplying both sides by −1 gives 2 > −3: the symbol reversed.',
    say: 'Negative flips, positive sticks.',
  },
  // pp. 418, 424
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you write a solution in interval notation, and which bracket goes with which sign?',
    a: `A square bracket [ ] includes the endpoint (non-strict ≤ or ≥, a filled circle •); a round bracket ( ) excludes it (strict < or >, a hollow circle ∘). ∞ and −∞ are not real numbers, so they always take a round bracket: [3, ∞] is always wrong. The empty set is ∅, and all reals is (−∞, ∞) or ℝ. Every answer can be written in three equivalent languages: {${x} ∶ ${a} < ${x} ≤ ${b}} is (${a}, ${b}], drawn with ∘ at ${a} and • at ${b}`,
    why: `{${x} ∶ −3 < ${x} ≤ 4} is (−3, 4]: strict at −3, so round; non-strict at 4, so square.`,
    say: 'Infinity never gets a hug (square bracket).',
  },
  // pp. 418–420, 424
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the standard procedure for a linear inequality in one variable, and which step is the dangerous one?',
    a: `Clear fractions by multiplying by the LCM of the (positive integer) denominators, which is positive, so no flip; remove brackets; collect the variable terms on one side and constants on the other by addition and subtraction only; reduce to <i>ax</i> ≶ ${b}; divide by ${a}, reversing the symbol if ${a} < 0; write the interval; draw it on a number line. In general, for ${a} ≠ 0, <i>ax</i> + ${b} > 0 ⟹ ${x} > −${fr(b, a)} if ${a} > 0, and ${x} < −${fr(b, a)} if ${a} < 0. The solution of a linear equation is a point; the solution of a linear inequality is an interval`,
    why: `3(2${x} − 1) ≥ 2(${x} + 3) − 5: 6${x} − 3 ≥ 2${x} + 1, so 4${x} ≥ 4; dividing by +4 (no flip) gives ${x} ≥ 1, that is [1, ∞).`,
    say: null,
  },
  // p. 422
  {
    topic: 0,
    kind: 'remember',
    q: `When can a linear inequality (${a} − 2)${x} < ${a} + 3 hold for every real ${x}?`,
    a: `Only when the coefficient of ${x} vanishes. If ${a} − 2 > 0, dividing gives ${x} < ${fr(`${a} + 3`, `${a} − 2`)}, a half-line; if ${a} − 2 < 0, the flip gives ${x} > ${fr(`${a} + 3`, `${a} − 2`)}, again only a half-line. At ${a} = 2 the inequality collapses to 0 ⋅ ${x} < 5, that is 0 < 5, true for every ${x}. So it holds for all real ${x} only when ${a} = 2: a “linear” inequality stops being linear the instant its leading coefficient is zero, and that degenerate case is the one that gives a universal solution`,
    why: `(${a} − 1)${x} > 3 has no solution exactly when ${a} = 1: it becomes 0 > 3, false for every ${x}.`,
    say: null,
  },
  // pp. 419, 421, 423
  {
    topic: 0,
    kind: 'mixup',
    q: `In −7 ≤ ${fr(`3 − 2${x}`, '4')} < 5, which end of the answer is strict after you divide by −2?`,
    a: `Treat a double inequality as one object with three parts: do every operation to all three. Multiplying by a negative reverses the entire chain, and the two endpoints swap roles; the strictness travels with its bound. Multiply by 4: −28 ≤ 3 − 2${x} < 20; subtract 3: −31 ≤ −2${x} < 17; divide by −2 and flip both symbols: ${fr('31', '2')} ≥ ${x} > −${fr('17', '2')}; re-read left to right: −${fr('17', '2')} < ${x} ≤ ${fr('31', '2')}. The strict < came in on the 5 side and now sits on the lower bound`,
    why: `So the answer is (−${fr('17', '2')}, ${fr('31', '2')}]; brackets the other way round mean the inclusivity was not swapped along with the symbols.`,
    say: null,
  },
  // pp. 416, 423
  {
    topic: 0,
    kind: 'mistake',
    q: `Is the solution set of ${fr(`2 − 3${x}`, '5')} ≤ −4 the interval (−∞, ${fr('22', '3')}]?`,
    a: `No: [${fr('22', '3')}, ∞). Multiplying by 5 gives −3${x} ≤ −22, and dividing by −3 flips the sign: ${x} ≥ ${fr('22', '3')}. (−∞, ${fr('22', '3')}] forgets the flip, by far the costliest mistake; (${fr('22', '3')}, ∞) flips but turns ≤ into >. The other listed slips: cross-multiplying by an expression whose sign you do not know, such as ${x} + 3 in ${fr(`${x} + 1`, `${x} + 3`)} < 2 (bring everything to one side and combine into one fraction instead), and squaring both sides without being certain both are non-negative`,
    why: `In |3 − ${x}| ≤ 5, that is −8 ≤ −${x} ≤ 2, dropping the minus sign instead of multiplying by −1 and flipping gives [−8, 2] (the range of −${x}) instead of [−2, 8].`,
    say: null,
  },
  // pp. 421, 424
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you check the direction and the brackets of an answer in ten seconds?',
    a: `Pick any number inside your interval and substitute it into the original inequality: if it satisfies it, the direction and brackets are almost certainly right; if it fails, you most likely missed a flip. For −7 ≤ ${fr(`3 − 2${x}`, '4')} < 5 with answer (−${fr('17', '2')}, ${fr('31', '2')}], test ${x} = 0: ${fr('3 − 0', '4')} = 0.75, and indeed −7 ≤ 0.75 < 5`,
    why: `For integers satisfying both 3${x} − 2 > 4 and 2(${x} − 1) ≤ ${x} + 3, intersect ${x} > 2 with ${x} ≤ 5 to get (2, 5]: 2 is excluded and 5 included, so the integers are 3, 4, 5, count 3 and sum 12.`,
    say: null,
  },

  // ── Topic 02 · Linear Inequalities in Two Variables ──
  // pp. 425–427, 435
  {
    topic: 1,
    kind: 'remember',
    q: 'Why is the solution of a linear inequality in two variables a whole half-plane, and why does one test point decide it?',
    a: `A line <i>ax</i> + <i>by</i> = ${c} (${a}, ${b} not both zero) splits the plane into two half-planes. Take ${b} > 0 and a point <i>P</i>(${al}, ${be}) on the line, so <i>aα</i> + <i>bβ</i> = ${c}. A point <i>Q</i>(${al}, <i>γ</i>) above it has <i>γ</i> > ${be}; multiplying by ${b} > 0 and adding <i>aα</i> gives <i>aα</i> + <i>bγ</i> > ${c}. Conversely <i>aα</i> + <i>bγ</i> > ${c} forces <i>γ</i> > ${be}. So the solution of <i>ax</i> + <i>by</i> > ${c} is exactly the upper half-plane when ${b} > 0, and the lower one when ${b} < 0 (when ${b} = 0 the line is vertical and the region is a right or left half-plane). The sign of <i>ax</i> + <i>by</i> − ${c} is constant throughout each half-plane, so one point off the line reports for its entire side`,
    why: `For a single linear inequality in two variables the answer is a region, not a point: 40${x} + 20${y} ≤ 120 is met by (3, 0), (2, 1), (1, 3) and (0, 0), all in one region.`,
    say: 'Solid includes, dotted excludes.',
  },
  // pp. 426–427, 429–430, 435
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the working procedure for solving a linear inequality, or a system of them, graphically?',
    a: `Draw the boundary line <i>ax</i> + <i>by</i> = ${c} (its intercepts make plotting easy); solid for ≤ or ≥ (boundary included), dotted for < or > (boundary excluded). Choose a test point off the line, (0, 0) unless the line passes through the origin; if it satisfies the inequality shade its side, otherwise the other side. For a system, keep only the common overlap of all the regions, never the combined shading. In real problems ${x} ≥ 0, ${y} ≥ 0 are added, confining the region to the first quadrant`,
    why: `2${x} + 3${y} ≤ 12: intercepts (6, 0) and (0, 4), solid line; the origin gives 0 ≤ 12, true, so shade the side containing the origin.`,
    say: 'System means overlap, not pile-up.',
  },
  // pp. 426, 431, 435
  {
    topic: 1,
    kind: 'remember',
    q: 'What kinds of solution region can a system give, and where do its corner points come from?',
    a: `A region may be bounded (enclosed on all sides, finite area, e.g. a triangle) or unbounded (extending infinitely in some direction), and a system can have an empty solution set ∅ when the half-planes share no common point. The corner points (vertices) of a bounded region come from solving the boundary lines two at a time; they become decisive in Class 12 Linear Programming`,
    why: `${x} + ${y} ≤ 4, ${x} ≥ 1, ${y} ≥ 0: pairwise intersections (1, 0), (4, 0) and (1, 3), a bounded triangle.`,
    say: null,
  },
  // pp. 426
  {
    topic: 1,
    kind: 'mixup',
    q: `Is ${x} ≥ 2 a stretch of the number line or a half-plane?`,
    a: `It depends on the context. In one variable it is a stretch of the line; asked for “in the plane”, it is still a two-variable inequality and describes a vertical half-plane. The same symbols mean a stretch of line in 1-D and a half-plane in 2-D. The strictness convention is one idea wearing two costumes: a solid line corresponds to a filled circle, a dotted line to a hollow one`,
    why: `${x} + 2${y} ≤ 5 has a solid boundary (boundary included); a dotted line would only suit a strict sign.`,
    say: null,
  },
  // pp. 426, 429–430, 433–434
  {
    topic: 1,
    kind: 'mistake',
    q: `To solve ${y} > 2${x} graphically, you test (0, 0) and get 0 > 0, false. Do you shade the side away from the origin?`,
    a: `No: the boundary ${y} = 2${x} passes through the origin, so (0, 0) lies on the line and cannot tell the two sides apart. Pick another point: (1, 0) gives 0 > 2, false, so shade the other side; (0, 1) gives 1 > 0, true, confirming it. Draw the line dotted (strict). Glance at the constant term first: if ${c} = 0, skip (0, 0) and use (1, 0) or (0, 1). The other listed slips: the wrong line style, shading the side you tested after it gave “false”, and taking the union instead of the intersection for a system`,
    why: `For 2${x} − ${y} > 0, the point (2, 4) cannot be a test point: 2(2) − 4 = 0 puts it exactly on the line.`,
    say: null,
  },
  // pp. 431–432, 434
  {
    topic: 1,
    kind: 'shortcut',
    q: 'After shading a system, how do you check the region in one step?',
    a: `The one-point audit: pick any point clearly inside your final region and substitute it into every original inequality. If it satisfies all of them, your region and line styles are almost certainly right; if it fails even one, you shaded a wrong side or mishandled a constraint. For an area, list the vertices in cyclic order and use the shoelace formula, Area = ${fr('1', '2')}|∑(<i>x</i><sub><i>i</i></sub><i>y</i><sub><i>i</i>+1</sub> − <i>x</i><sub><i>i</i>+1</sub><i>y</i><sub><i>i</i></sub>)|`,
    why: `${x} + ${y} ≤ 6, ${x} + 2${y} ≤ 8, ${x}, ${y} ≥ 0: vertices (0, 0), (6, 0), (4, 2), (0, 4), area ${fr('1', '2')} × 28 = 14 square units; (1, 1) passes all four (2 ≤ 6, 3 ≤ 8).`,
    say: null,
  },

  // ── Topic 03 · Applications & Word Problems of Linear Inequalities ──
  // pp. 436–437, 442
  {
    topic: 2,
    kind: 'remember',
    q: 'Which comparison words translate into which inequality sign?',
    a: `≥ for at least, no less than, a minimum of, not below; ≤ for at most, no more than, a maximum of, not above; > for more than, greater than, exceeds, over; < for less than, fewer than, below, under, short of. Between ${a} and ${b} (exclusive): ${a} < ${x} < ${b}; between ${a} and ${b}, inclusive: ${a} ≤ ${x} ≤ ${b}. “At least 80” allows 80; “more than 80” does not. A careless reading flips the entire answer`,
    why: `“A number ${x} is no more than 7 and at least −2”: −2 ≤ ${x} ≤ 7, both ends included.`,
    say: 'Read the word, then write the sign.',
  },
  // pp. 436–438, 442
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the five-step modeling routine, and what are the hidden domains?',
    a: `Name the unknown, with units (“Let ${x} = …”); translate each requirement into an inequality (one condition, one inequality; several make a system, whose answer is the intersection); record the hidden domain; solve; interpret the result in the words of the problem. Hidden domains: a count is a non-negative integer (solve over the reals, then keep only the integers); a physical measurement is positive. A solution set is not yet an answer: “the minimum length is 10 cm”, not merely “${x} ≥ 10”`,
    why: `Shortest side ${x}, longest 2${x}, third ${x} + 2, perimeter at least 42: 4${x} + 2 ≥ 42 gives ${x} ≥ 10, so the minimum length of the shortest side is 10 cm.`,
    say: 'Count? Then whole and non-negative.',
  },
  // pp. 437–439
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you model an average condition and a mixture condition?',
    a: `“The average of ${n} quantities is at least <i>A</i>” becomes ${fr('sum', n)} ≥ <i>A</i>. In a mixture the concentration is ${fr('amount of pure component', 'total amount')}: for ${y} litres of a ${b}% solution added to <i>V</i> litres of an ${a}% solution, it is ${fr(`${fr(a, '100')}<i>V</i> + ${fr(b, '100')}${y}`, `<i>V</i> + ${y}`)}. Bound it as required, clear the fraction by multiplying by the positive total <i>V</i> + ${y} (no flip), and remember the hidden domain ${y} ≥ 0`,
    why: `600 mL of 20% acid plus ${y} mL of 50%: 0.30 < ${fr(`120 + 0.5${y}`, `600 + ${y}`)} < 0.40; multiplying by 600 + ${y} > 0 gives ${y} > 300 and ${y} < 1200, so 300 < ${y} < 1200.`,
    say: null,
  },
  // p. 440
  {
    topic: 2,
    kind: 'remember',
    q: 'How does a constraint system lead to the best production plan?',
    a: `Model each “at most” as ≤ and add ${x}, ${y} ≥ 0 for counts; the system’s solution region is the feasible region. Find its corner points by solving the boundary lines pairwise, then evaluate the linear objective at each corner: on a bounded feasible region like this one, the optimum sits at a corner. This is the Linear Programming formalised in Class 12`,
    why: `2${x} + 3${y} ≤ 36, ${x} + 2${y} ≤ 22, ${x}, ${y} ≥ 0: corners (0, 0), (18, 0), (0, 11), (6, 8); <i>Z</i> = 30${x} + 50${y} gives 0, 540, 550 and 580, so the maximum is ₹580 at 6 chairs and 8 tables.`,
    say: null,
  },
  // pp. 437, 441–442
  {
    topic: 2,
    kind: 'mixup',
    q: `Does “${x} lies between 3 and 9” include 3 and 9?`,
    a: `No: “between”, with no “inclusive”, is read as strict on both ends, 3 < ${x} < 9. Only “between ${a} and ${b}, inclusive” gives ${a} ≤ ${x} ≤ ${b}; many students reflexively write ≤. ${x} < 3 or ${x} > 9 describes the opposite region, outside the interval`,
    why: `“Between 3 and 9” is 3 < ${x} < 9; 3 ≤ ${x} ≤ 9 adds inclusivity the wording does not state.`,
    say: null,
  },
  // pp. 441–442
  {
    topic: 2,
    kind: 'mistake',
    q: `A factory makes ${x} toys with 5${x} − 3 > 32. Is the least number of toys 7, or 7.4?`,
    a: `Neither: 8. 5${x} − 3 > 32 gives ${x} > 7, and ${x} counts toys, so it must be a positive integer greater than 7. 7 fails because 7 is not greater than 7; 7.4 ignores that a count is a whole number. The other listed slips: misreading the comparison word, forgetting the hidden domain, stopping at the inequality instead of interpreting it, and treating “between” as inclusive`,
    why: `For consecutive odd natural numbers ${x}, ${x} + 2, both greater than 10, with sum less than 40: 10 < ${x} < 19 is not the answer; the odd values 11, 13, 15, 17 give the pairs (11, 13) to (17, 19).`,
    say: null,
  },
  // pp. 440–442, 451
  {
    topic: 2,
    kind: 'shortcut',
    q: 'After solving a word problem, what is the fastest way to catch a wrong sign or a lost answer?',
    a: `Plug a clearly valid value from the problem back in to confirm the symbols point the right way; in a discrete problem, substitute the largest admissible value: it takes seconds and catches a dropped boundary. For the triangle with perimeter at least 42, test ${x} = 10: 10 + 20 + 12 = 42 ≥ 42, so the boundary is included and “at least” was read correctly as ≥`,
    why: `Consecutive even natural numbers, both larger than 5, sum less than 24: 2${x} < 22 gives ${x} < 11, so ${x} ∈ {6, 8, 10}; checking the largest, 10 + 12 = 22 < 24, so (10, 12) qualifies.`,
    say: null,
  },

  // ── Topic 04 · Non-Linear Inequalities: The Wavy-Curve Method ──
  // pp. 444, 450
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the standard results for modulus and quadratic inequalities?',
    a: `For ${a} > 0: |${x}| < ${a} ⟺ −${a} < ${x} < ${a} and |${x}| ≤ ${a} ⟺ −${a} ≤ ${x} ≤ ${a} (inside); |${x}| > ${a} ⟺ ${x} < −${a} or ${x} > ${a} and |${x}| ≥ ${a} ⟺ ${x} ≤ −${a} or ${x} ≥ ${a} (outside); ${sq(x)} < ${sq(a)} ⟺ |${x}| < ${a}. For ${QUAD} with ${a} > 0 and real roots ${al} < ${be}: < 0 between, ${al} < ${x} < ${be}; > 0 outside, ${x} < ${al} or ${x} > ${be}. If the discriminant is negative and ${a} > 0, the expression is positive for all ${x}. Make the coefficient of ${sq(x)} positive first`,
    why: `${sq(x)} − ${x} − 6 = (${x} − 3)(${x} + 2) > 0, roots −2 and 3, leading coefficient positive: outside, (−∞, −2) ∪ (3, ∞).`,
    say: 'Less-than locks you in, greater-than lets you out.',
  },
  // pp. 443, 445, 450
  {
    topic: 3,
    kind: 'remember',
    q: 'Why does the wavy-curve method work, and what happens at a squared factor?',
    a: `A continuous expression can only switch between positive and negative by passing through zero, so the critical points (zeros of the numerator and of the denominator) chop the line into intervals on each of which the sign is constant. Walking along a product, each time you cross a simple root one factor flips sign, so the product flips: the curve crosses. A squared factor such as (${x} − 1)<sup>2</sup> is ≥ 0 on both sides of ${x} = 1, so the product’s sign does not change there: the curve touches the axis and bounces back. Odd multiplicity crosses; even multiplicity bounces`,
    why: `(${x} − 2)<sup>2</sup>(${x} − 5) > 0: the squared factor never flips the sign, so the sign is decided by ${x} − 5, giving ${x} > 5 (${x} = 2 makes the product 0, not positive).`,
    say: 'Odd crosses, even bounces.',
  },
  // pp. 443–447, 450
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the steps of the wavy-curve algorithm?',
    a: `Move everything to one side so the other side is 0; combine into one quotient, factor completely into linear factors (${x} − <i>r</i>) and irreducible quadratics, and make each ${x}-coefficient positive (rewrite 3 − ${x} as −(${x} − 3) and track the minus). Mark the critical points: numerator zeros filled for ≤ or ≥ and hollow if strict; denominator zeros always hollow. Fix the sign on the far right (for ${x} beyond every critical point, all positive-coefficient factors are positive, so the expression is positive there, unless a negative constant factor is left over, when it is negative there), then walk left, crossing at odd and bouncing at even roots. Read off the required side and adjust the endpoints`,
    why: `${fr(`(${x} + 3)(${x} − 1)<sup>2</sup>(${x} − 4)`, `${x} + 2`)} ≥ 0: + on (4, ∞), − on (1, 4) and (−2, 1) (bounce at 1), + on (−3, −2), − before −3, so ${x} ∈ [−3, −2) ∪ {1} ∪ [4, ∞).`,
    say: 'Denominators get a hole, never a dot.',
  },
  // pp. 444, 449–450
  {
    topic: 3,
    kind: 'mixup',
    q: 'Numerator root or denominator root: which one may enter the solution?',
    a: `A numerator root makes the expression 0, so it is included only for a non-strict inequality (≤ or ≥), and never if it also makes the denominator zero. A denominator root makes the expression undefined, so it is never included: always an open circle, even under ≤ or ≥`,
    why: `${fr(`${x} + 1`, `${x} − 3`)} ≤ 0: negative between −1 and 3; include −1 (numerator, non-strict) but exclude 3 (denominator), giving [−1, 3).`,
    say: null,
  },
  // pp. 443–444, 446, 450
  {
    topic: 3,
    kind: 'mistake',
    q: `Can you solve ${fr(`${x} − 4`, `${x} + 1`)} < 1 by multiplying both sides by ${x} + 1?`,
    a: `No: the sign of ${x} + 1 is unknown, so you cannot know whether to flip. Bring everything to one side and combine: ${fr(`${x} − 4`, `${x} + 1`)} − 1 = ${fr('−5', `${x} + 1`)} < 0, which needs ${x} + 1 > 0, so ${x} ∈ (−1, ∞) (${x} = −1 excluded: undefined there). Note that ${fr('−5', `${x} + 1`)} is negative on the far right because of its negative constant. The other listed slips: the wrong modulus direction, including a denominator zero, and treating an even-multiplicity root as a normal crossing`,
    why: `|${x} − 2| > 3 is outside, (−∞, −1) ∪ (5, ∞); the inside answer (−1, 5) applies the less-than (inside) template to a greater-than inequality.`,
    say: null,
  },
  // pp. 445, 449–450
  {
    topic: 3,
    kind: 'shortcut',
    q: `For ${a} > 0 and <i>b</i><sup>2</sup> − 4<i>ac</i> < 0, solve ${QUAD} < 0 at once.`,
    a: `No real ${x}. With ${a} > 0 and no real roots, the parabola lies entirely above the axis, so ${QUAD} > 0 for every ${x}: it is never negative. For a polynomial or rational inequality, fix the far-right sign once (after making every ${x}-coefficient positive and checking that no negative constant factor is left over), confirm it with one large value of ${x}, then flip at odd roots and bounce at even ones`,
    why: `${sq(x)} − 7${x} + 12 ≤ 0 has roots 3 and 4 and is ≤ 0 between them: [3, 4].`,
    say: null,
  },

  // ── Topic 05 · Modulus Inequalities & Case Analysis ──
  // pp. 452–453, 465
  {
    topic: 4,
    kind: 'remember',
    q: `What does |${x} − ${a}| mean, and which basic properties of the modulus hold?`,
    a: `|${x} − ${a}| is the distance on the number line between ${x} and ${a}, and distance never carries a sign. |${x}| = ${x} for ${x} ≥ 0 and |${x}| = −${x} for ${x} < 0; |${x}| ≥ 0, with |${x}| = 0 iff ${x} = 0. For all real ${x}, ${y}: |<i>xy</i>| = |${x}| |${y}|, |${x}|<sup>2</sup> = ${sq(x)}, √${sq(x)} = |${x}|, −|${x}| ≤ ${x} ≤ |${x}|, the triangle inequality |${x} + ${y}| ≤ |${x}| + |${y}| and its reverse form | |${x}| − |${y}| | ≤ |${x} − ${y}|. The modulus itself never restricts the domain`,
    why: `|${x} − 42| < 5 says “within 5 of 42”: the stretch from 37 to 47; |${x} − 42| > 5 is everything outside it, in two pieces.`,
    say: 'Less-than is an and, greater-than is an or.',
  },
  // pp. 452, 454–455, 458–459
  {
    topic: 4,
    kind: 'remember',
    q: `How do you solve |${f}| < ${g} and |${f}| > ${g} when ${g} contains the variable?`,
    a: `For any real expressions ${f}, ${g}, whatever the sign of ${g}: |${f}| < ${g} ⟺ −${g} < ${f} < ${g} (intersect), and |${f}| > ${g} ⟺ ${f} > ${g} or ${f} < −${g} (union); non-strict versions replace < by ≤ and > by ≥. No separate case on the sign of ${g} is needed: −${g} < ${f} < ${g} forces −${g} < ${g}, so ${g} > 0 comes free, and a negative ${g} makes the union all of ℝ, correctly, because a modulus always beats a negative number. Proof: |${f}| < ${g} gives ${g} > |${f}| ≥ 0, and ${f} ≤ |${f}|, −${f} ≤ |${f}| give both halves; conversely |${f}| is ${f} or −${f}, both < ${g}`,
    why: `|${x} + 3| < 2${x} ⟺ −2${x} < ${x} + 3 < 2${x}: ${x} > −1 and ${x} > 3, so ${x} ∈ (3, ∞).`,
    say: 'Every case must go home to its own interval.',
  },
  // pp. 456–457
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you solve an inequality with two or more moduli by a case split?',
    a: `Find the critical points by setting each modulus argument to zero; ${n} distinct points give ${n} + 1 intervals covering ℝ. Build a sign table, one row per argument. On each interval replace |<i>u</i>| by −<i>u</i> where <i>u</i> is negative and by <i>u</i> where it is positive or zero, and solve. Intersect each case’s solution with that case’s own interval: a value outside it does not solve the original, because the rewriting was valid only inside. Then union the surviving pieces`,
    why: `|${x} − 1| + |${x} + 2| < 5: on (−∞, −2), −2${x} − 1 < 5 gives (−3, −2); on [−2, 1) the sum is 3 < 5, all of it; on [1, ∞), 2${x} + 1 < 5 gives [1, 2). Union (−3, 2).`,
    say: null,
  },
  // pp. 453–455, 457
  {
    topic: 4,
    kind: 'remember',
    q: `What do the two-distance results say about |${x} − ${a}| + |${x} − ${b}| (${a} < ${b})?`,
    a: `|${x} − ${a}| + |${x} − ${b}| ≥ ${b} − ${a} for every ${x}, with equality exactly on [${a}, ${b}]: between the two points the total is the gap, and outside it climbs. So |${x} − ${a}| + |${x} − ${b}| ≤ ${c} ⟺ ${x} ∈ [${fr(`${a} + ${b} − ${c}`, '2')}, ${fr(`${a} + ${b} + ${c}`, '2')}] when ${c} ≥ ${b} − ${a}, and has no solution when ${c} < ${b} − ${a}; the strict version < ${c} gives the open interval when ${c} > ${b} − ${a} and no solution when ${c} ≤ ${b} − ${a}. Valid only when the coefficient of ${x} inside each modulus is exactly 1`,
    why: `|${x} − 1| + |${x} + 2| < 5: ${a} = −2, ${b} = 1, ${c} = 5 > 3, so the open interval from ${fr('−2 + 1 − 5', '2')} = −3 to ${fr('−2 + 1 + 5', '2')} = 2.`,
    say: null,
  },
  // pp. 453–454, 458, 465
  {
    topic: 4,
    kind: 'mixup',
    q: `When may you square a modulus inequality: |${f}| < ${g}, or |${f}| < |${h}|?`,
    a: `Squaring is order-preserving only on non-negative numbers. |${f}| < |${h}| ⟺ ${sq(f)} < ${sq(h)} with no condition, since both sides are already non-negative: when each side is a single modulus, square at once and solve ${sq(f)} − ${sq(h)} < 0 by the difference of squares. A bare expression facing a modulus needs a guard: |${f}| < ${g} ⟺ ${sq(f)} < ${sq(g)} <b>and</b> ${g} > 0; |${f}| > ${g} ⟺ ${sq(f)} > ${sq(g)} <b>or</b> ${g} < 0`,
    why: `|${x} − 1| < |${x} + 3|: square directly, (${x} − 1)<sup>2</sup> < (${x} + 3)<sup>2</sup> reduces to −8${x} < 8, so ${x} ∈ (−1, ∞).`,
    say: 'Square only with a guard; modulus against modulus needs no guard.',
  },
  // pp. 453, 459–461, 464
  {
    topic: 4,
    kind: 'mistake',
    q: `Squaring |${x} − 3| < 2${x} − 5 gives 3${sq(x)} − 14${x} + 16 > 0, so (−∞, 2) ∪ (${fr('8', '3')}, ∞). Right?`,
    a: `No: the answer is (${fr('8', '3')}, ∞). ${x} = 0 lies in the first piece, yet it gives 3 < −5, false: squaring without the guard destroyed the sign information. The equivalence −(2${x} − 5) < ${x} − 3 < 2${x} − 5 gives ${x} > ${fr('8', '3')} and ${x} > 2, so ${x} > ${fr('8', '3')}; or square with the guard 2${x} − 5 > 0, that is ${x} > ${fr('5', '2')}, which kills the spurious branch. The other listed slips: forgetting to intersect a case with its own interval, confusing “and” with “or”, taking the critical point from the constant (|2${x} + 3| switches at −${fr('3', '2')}, not −3), and losing endpoints under a non-strict sign`,
    why: `|${x} − 3| + |${x} − 6| < 2 has no solution: the points are 3 apart, so the sum is never below 3; leaving the cases ${x} > 3.5 and ${x} < 5.5 un-intersected wrongly gives all of ℝ.`,
    say: null,
  },
  // pp. 462–463, 465
  {
    topic: 4,
    kind: 'shortcut',
    q: `Solve |${x} − 4| + |${x} − 9| ≤ 11, and |${x} − 4| + |${x} − 9| < 3, in five seconds.`,
    a: `Read two moduli as distances. With unit coefficients the minimum value of |${x} − ${a}| + |${x} − ${b}| is |${a} − ${b}|, here 5, reached everywhere between 4 and 9. So < 3 is empty on sight, and ≤ 11 solves to [${fr('4 + 9 − 11', '2')}, ${fr('4 + 9 + 11', '2')}] = [1, 12]. Then audit the endpoints: substitute each into the original inequality and decide inclusion from that, never from the shape of your last algebraic line`,
    why: `|${x}| + |${x} − 4| ≤ 6: [${fr('0 + 4 − 6', '2')}, ${fr('0 + 4 + 6', '2')}] = [−1, 5], which holds seven integers, −1 to 5.`,
    say: null,
  },

  // ── Additional topic A · Quadratic Sign with a Parameter: “Positive for Every Real x” ──
  // pp. 466–467
  {
    topic: 5,
    kind: 'remember',
    q: `When is ${f}(${x}) = ${QUAD} positive, non-negative, negative or non-positive for every real ${x}?`,
    a: `With ${D} = <i>b</i><sup>2</sup> − 4<i>ac</i> and ${a} ≠ 0: ${f}(${x}) > 0 for all ${x} ⟺ ${a} > 0 <b>and</b> ${D} < 0; ≥ 0 ⟺ ${a} > 0 <b>and</b> ${D} ≤ 0; < 0 ⟺ ${a} < 0 <b>and</b> ${D} < 0; ≤ 0 ⟺ ${a} < 0 <b>and</b> ${D} ≤ 0. In the degenerate branch ${a} = 0 the conditions are ${b} = 0 and ${c} > 0 (or ≥ 0, < 0, ≤ 0 respectively). The final answer is the union of the ${a} ≠ 0 solutions and the ${a} = 0 solutions`,
    why: `${sq(x)} + ${k}${x} + 4 > 0 for every ${x}: ${D} = ${sq(k)} − 16 < 0, so ${k} ∈ (−4, 4).`,
    say: `A parabola with ${a} > 0 opens upward, so it stays strictly above the axis exactly when it never meets the axis.`,
  },
  // pp. 466, 468
  {
    topic: 5,
    kind: 'remember',
    q: `What extra step does a parameter in the coefficient of ${sq(x)} demand?`,
    a: `Test separately the value of ${k} that makes that coefficient zero: at that value the expression is no longer a quadratic at all, and the discriminant condition alone never sees it. Solve the genuine quadratic (leading coefficient of the right sign and the discriminant condition, intersected), then union it with the degenerate value if that one works`,
    why: `(${k} − 3)${sq(x)} + (${k} − 3)${x} + 4 > 0: ${k} = 3 leaves the constant 4 > 0, a solution; for ${k} ≠ 3, ${k} > 3 and ${D} = (${k} − 3)(${k} − 19) < 0 give 3 < ${k} < 19; union [3, 19).`,
    say: null,
  },
  // pp. 466, 468
  {
    topic: 5,
    kind: 'mixup',
    q: `For “positive for every ${x}” do you need ${D} < 0 or ${D} ≤ 0?`,
    a: `For > 0 you need ${D} < 0, no real root at all. For ≥ 0 you may allow ${D} = 0, since a perfect square touches the axis but never dips below it. That is why an endpoint where ${D} = 0 fails a strict requirement: there the expression becomes a perfect square that is zero somewhere`,
    why: `${sq(x)} − 2${k}${x} + (${k} + 6) ≥ 0 for every ${x}: the slack sign permits ${D} = 0, so the answer [−2, 3] includes both endpoints.`,
    say: null,
  },
  // pp. 468–469
  {
    topic: 5,
    kind: 'mistake',
    q: `Is the answer for (${k} + 1)${sq(x)} + 2(${k} + 1)${x} + 4 > 0 for every ${x} just (−1, 3)?`,
    a: `No: [−1, 3). The degenerate value ${k} = −1 leaves the constant 4 > 0, so it belongs; a discriminant-only solution never sees it. Forgetting the leading-coefficient condition is the partner slip: a quadratic that opens downward is eventually negative, whatever its discriminant`,
    why: `In (${k} − 3)${sq(x)} + (${k} − 3)${x} + 4 > 0, ${k} = 2 gives −${sq(x)} − ${x} + 4, which opens downward and so is eventually negative: correctly excluded.`,
    say: null,
  },
  // pp. 466, 469
  {
    topic: 5,
    kind: 'shortcut',
    q: `Find all ${k} for which ${sq(x)} + 2(${k} − 1)${x} + (${k} + 5) > 0 for every real ${x}. The fast way?`,
    a: `The coefficient of ${sq(x)} is 1, positive and free of ${k}, so no degenerate branch: only the discriminant condition remains, and with an even middle coefficient work with ${fr(D, '4')}. ${fr(D, '4')} = (${k} − 1)<sup>2</sup> − (${k} + 5) = ${sq(k)} − 3${k} − 4 = (${k} − 4)(${k} + 1) < 0, so −1 < ${k} < 4. At ${k} = 4 the expression is (${x} + 3)<sup>2</sup> and at ${k} = −1 it is (${x} − 2)<sup>2</sup>, both zero somewhere: correctly excluded`,
    why: `−${sq(x)} + 2${k}${x} − 4 < 0 for every ${x}: multiply by −1 and flip to ${sq(x)} − 2${k}${x} + 4 > 0, then ${D} < 0 gives ${k} ∈ (−2, 2).`,
    say: null,
  },

  // ── Additional topic B · Finding the Domain of a Function by Sign Analysis ──
  // pp. 469, 472
  {
    topic: 6,
    kind: 'remember',
    q: 'Which condition does each structure in a function impose on its domain?',
    a: `√<i>u</i>: <i>u</i> ≥ 0. ${fr('1', '<i>u</i>')}: <i>u</i> ≠ 0. ${fr('1', '√<i>u</i>')}: <i>u</i> > 0 (both conditions at once). log<sub>${b}</sub> <i>u</i>: <i>u</i> > 0, with base ${b} > 0, ${b} ≠ 1. ${fr('1', `log<sub>${b}</sub> <i>u</i>`)}: <i>u</i> > 0 and <i>u</i> ≠ 1. Here <i>u</i> is the expression inside the structure, itself a function of ${x}`,
    why: `${f}(${x}) = log<sub>10</sub>(${sq(x)} − 5${x} + 6) needs ${sq(x)} − 5${x} + 6 > 0, outside the roots 2 and 3: (−∞, 2) ∪ (3, ∞).`,
    say: 'The domain is the intersection of every condition the expression generates.',
  },
  // pp. 469–470
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find a domain by sign analysis?',
    a: `Read the expression from the outside in and write one condition for each structure you meet. Solve each condition by the wavy-curve algorithm, remembering that denominator roots are always hollow and numerator roots are filled only under a non-strict sign. The domain is the intersection: one failed condition disqualifies the point, however comfortable the others look`,
    why: `${f}(${x}) = √(${fr(`${x} − 1`, `${x} − 3`)}): ${fr(`${x} − 1`, `${x} − 3`)} ≥ 0, with 1 filled and 3 hollow; positive on (3, ∞), negative on (1, 3), positive before 1, so the domain is (−∞, 1] ∪ (3, ∞).`,
    say: null,
  },
  // pp. 469, 472
  {
    topic: 6,
    kind: 'mixup',
    q: 'A square root standing alone, or the same square root in a denominator: ≥ 0 or > 0?',
    a: `The distinction between ≥ and > carries all the marks. A square root standing alone allows its argument to be zero (√0 = 0 is defined); the same square root in a denominator does not, because the denominator would then be 0`,
    why: `${f}(${x}) = ${fr('1', `√(9 − ${sq(x)})`)} has domain (−3, 3), strict at both ends because the root sits in a denominator.`,
    say: null,
  },
  // pp. 469–471
  {
    topic: 6,
    kind: 'mistake',
    q: `For ${f}(${x}) = log<sub>10</sub>(${fr(`${x} − 2`, `${x} + 3`)}) + √(9 − ${sq(x)}), are both ends of the domain closed, like the root’s [−3, 3]?`,
    a: `No: the domain is (2, 3]. The logarithm needs ${fr(`${x} − 2`, `${x} + 3`)} > 0, so ${x} < −3 or ${x} > 2 (strict); the root needs −3 ≤ ${x} ≤ 3. Intersecting leaves (2, 3]: open at 2, where the log argument is 0 and log<sub>10</sub> 0 is undefined, closed at 3, where both terms are defined. The bracket at each end is decided by whichever condition binds there: never assume the domain inherits one condition’s brackets`,
    why: `In √(${fr(`${x} − 1`, `${x} − 3`)}), ${x} = 3 stays excluded even though the inequality ${fr(`${x} − 1`, `${x} − 3`)} ≥ 0 is non-strict: the function is undefined there.`,
    say: null,
  },
  // pp. 470, 472
  {
    topic: 6,
    kind: 'shortcut',
    q: `Find the domain of ${f}(${x}) = √(${fr(`(${x} + 1)(${x} − 2)`, `${x} − 4`)}) quickly.`,
    a: `One condition, ${fr(`(${x} + 1)(${x} − 2)`, `${x} − 4`)} ≥ 0, solved by the wavy curve and checked by substitution. Anchor positive on (4, ∞), then flip at each simple root: negative on (2, 4), positive on (−1, 2), negative before −1. Include the numerator roots −1 and 2 (non-strict), exclude the denominator root 4: [−1, 2] ∪ (4, ∞)`,
    why: `Checks for √(${fr(`${x} − 1`, `${x} − 3`)}): at ${x} = 0, ${fr('−1', '−3')} = ${fr('1', '3')} ≥ 0, in; at ${x} = 1, √0 = 0, in; at ${x} = 2, ${fr('1', '−1')} = −1 < 0, out.`,
    say: null,
  },

  // ── Additional topic C · Irrational Inequalities: Controlled Squaring ──
  // pp. 472, 475
  {
    topic: 7,
    kind: 'remember',
    q: `How do you solve √${f} < ${g}?`,
    a: `√${f} < ${g} ⟺ ${f} ≥ 0 <b>and</b> ${g} > 0 <b>and</b> ${f} < ${sq(g)}. ${f} ≥ 0 is the domain condition and can never be dropped; since √${f} ≥ 0, ${g} must be strictly positive or no solution can exist; and all three conditions are intersected. Write the domain and sign conditions before squaring: they are part of the answer. For ≤, the final comparison becomes ${f} ≤ ${sq(g)} and the sign condition relaxes to ${g} ≥ 0; the domain condition stays`,
    why: `√(${x} + 3) < ${x} + 1: ${x} ≥ −3, ${x} > −1, and ${x} + 3 < (${x} + 1)<sup>2</sup> gives ${x} < −2 or ${x} > 1; intersecting leaves ${x} ∈ (1, ∞).`,
    say: 'Guard before you square.',
  },
  // pp. 472, 474–475
  {
    topic: 7,
    kind: 'remember',
    q: `How do you solve √${f} > ${g}?`,
    a: `√${f} > ${g} ⟺ [${f} ≥ 0 <b>and</b> ${g} < 0] <b>or</b> [${g} ≥ 0 <b>and</b> ${f} > ${sq(g)}]. A negative ${g} is an automatic win (a non-negative root always exceeds a negative number), so that branch is kept, with the domain condition written explicitly, and unioned with the squared branch. In the second bracket ${f} > ${sq(g)} ≥ 0 already forces ${f} ≥ 0, so the domain condition is absorbed`,
    why: `√(${x} + 3) > ${x} + 1: branch 1 gives −3 ≤ ${x} < −1; branch 2 squares on ${x} ≥ −1 to −2 < ${x} < 1, so −1 ≤ ${x} < 1; union [−3, 1).`,
    say: 'Domain first, algebra second.',
  },
  // pp. 472, 474
  {
    topic: 7,
    kind: 'mixup',
    q: 'Why does the less-than rule intersect three conditions while the greater-than rule unions two branches?',
    a: `For less-than, √${f} ≥ 0 means a non-positive ${g} can never win, so ${g} > 0 is required and everything is intersected. For greater-than, a negative ${g} always loses to the root, so the region where ${g} < 0 (inside the domain) is a whole branch of solutions, joined by “or” to the squared branch where ${g} ≥ 0`,
    why: `√(${x} − 2) ≥ ${x} − 4: the branch 2 ≤ ${x} < 4 holds automatically because the right side is negative there, and squaring on ${x} ≥ 4 adds [4, 6]: [2, 6].`,
    say: null,
  },
  // pp. 474–475
  {
    topic: 7,
    kind: 'mistake',
    q: `In √(${x} + 3) < ${x} + 1, can you skip the sign condition ${x} + 1 > 0 and just square?`,
    a: `No: squaring alone gives ${x} < −2 or ${x} > 1, and the whole branch ${x} < −2 is spurious. At ${x} = −2.5, √0.5 ≈ 0.707 < −1.5 is false. The sign condition ${x} > −1 kills that branch, leaving (1, ∞). Dropping the domain condition is the partner slip`,
    why: `√(${sq(x)} − 4) < 3: the domain condition ${sq(x)} ≥ 4 carves the middle out, giving (−√13, −2] ∪ [2, √13).`,
    say: null,
  },
  // p. 474
  {
    topic: 7,
    kind: 'shortcut',
    q: `You have solved √(${x} + 3) < ${x} + 1 and √(${x} + 3) > ${x} + 1. How do you check both at once?`,
    a: `On the common domain exactly one relation holds at each point (less than, equal to or greater than), so the three answer sets must be disjoint and their union must be the whole domain. Here less-than gives (1, ∞), the two sides are equal only at ${x} = 1, and greater-than gives [−3, 1): together exactly [−3, ∞), nothing missing and nothing counted twice. Whenever a paper asks for both directions, run this audit: it catches a lost branch instantly`,
    why: `At ${x} = 1 both sides equal 2, so it belongs to neither strict answer; at ${x} = −3, √0 = 0 > −2, so −3 belongs to the greater-than answer.`,
    say: null,
  },

  // ── Additional topic D · Modulus Regions in Two Variables ──
  // pp. 476, 489
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you draw a region defined by moduli in two variables?',
    a: `Set each modulus argument to zero to find the critical lines (|${x}| gives ${x} = 0, |${y} − 2| gives ${y} = 2, |${x} − ${y}| gives ${y} = ${x}); ${k} distinct lines cut the plane into at most 2<sup>${k}</sup> pieces. Build a sign table, drop the bars on each piece, and shade the resulting half-plane by a test point. Intersect each piece’s half-plane with that piece, union the surviving pieces, and read the shape. Boundaries: solid for ≤ and ≥, dotted for < and >`,
    why: `|${x}| + |${y}| ≤ 3: in each quadrant a half-plane such as ${x} + ${y} ≤ 3 cut down to that quadrant is a right triangle with legs 3; the four make the square with vertices (±3, 0), (0, ±3).`,
    say: 'A modulus on the line is a point pair; a modulus in the plane is a fold.',
  },
  // pp. 477–478
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the standard modulus regions and their measurements?',
    a: `With ${a}, ${b}, ${c} > 0 and coefficient 1 inside every modulus: |${x}| ≤ ${a}, |${y}| ≤ ${b} is a rectangle centred at the origin, area 4<i>ab</i>. |${x}| + |${y}| ≤ ${a} is a square with vertices (±${a}, 0), (0, ±${a}): diagonals 2${a}, side ${a}√2, area 2${sq(a)}, inradius ${fr(a, '√2')}, circumradius ${a}; |${x} − ${h}| + |${y} − ${k}| ≤ ${c} is the same square centred at (${h}, ${k}), area 2${sq(c)}. |${x} + ${y}| ≤ ${a} and |${x} − ${y}| ≤ ${a} is identical to |${x}| + |${y}| ≤ ${a}, since max(|${x} + ${y}|, |${x} − ${y}|) = |${x}| + |${y}|. |${x} − ${y}| ≤ ${a} is an unbounded band of perpendicular width ${a}√2; |${x}| − |${y}| ≥ ${a} is two opposite wedges with apexes (±${a}, 0)`,
    why: `|${x} + ${y}| ≤ 2 and |${x} − ${y}| ≤ 2 together are exactly |${x}| + |${y}| ≤ 2, area 2(2)<sup>2</sup> = 8 square units.`,
    say: null,
  },
  // pp. 477–479
  {
    topic: 8,
    kind: 'remember',
    q: `How many points with integer coordinates satisfy |${x}| + |${y}| ≤ ${n}?`,
    a: `For a non-negative integer ${n}, 2${sq(n)} + 2${n} + 1. The value is always odd, a free sanity check on any count you make by hand. To count directly, on the line ${y} = <i>j</i> the condition is |${x}| ≤ ${n} − |<i>j</i>|, which admits 2(${n} − |<i>j</i>|) + 1 integer values of ${x}`,
    why: `${n} = 3: 1 + 3 + 5 + 7 + 5 + 3 + 1 = 25 = 2(3)<sup>2</sup> + 2(3) + 1; for ${n} = 5 the count is 61.`,
    say: null,
  },
  // pp. 477, 480
  {
    topic: 8,
    kind: 'mixup',
    q: `|${x}| + |${y}| ≤ ${a} or |${x}| ≤ ${a}, |${y}| ≤ ${b}: which is the square on its corner and which the rectangle?`,
    a: `|${x}| + |${y}| ≤ ${a} is the square (a diamond) with vertices on the axes at (±${a}, 0), (0, ±${a}), area 2${sq(a)}. |${x}| ≤ ${a}, |${y}| ≤ ${b} is the rectangle with sides parallel to the axes, width 2${a}, height 2${b}, area 4<i>ab</i>. And |${x}| + |${y}| ≥ ${a} is everything outside the square, boundary included`,
    why: `|${x}| + |${y}| ≤ 2 has area 8; |${x}| ≤ 3, |${y}| ≤ 2 is 6 wide and 4 tall, area 24.`,
    say: null,
  },
  // pp. 476, 478
  {
    topic: 8,
    kind: 'mistake',
    q: `Does the standard-region table give the shape of |2${x}| + |${y}| ≤ ${a}?`,
    a: `No: every row assumes coefficient 1 inside each modulus. For |2${x}| + |${y}| ≤ ${a} or |${x}| + |3${y}| ≤ ${a} the shape is still a rhombus but the diagonals differ, so return to the case split. The partner slip is skipping the intersection step: each piece’s half-plane must be intersected with that piece, the two-dimensional version of “every case goes home to its own interval”, and it is skipped just as often`,
    why: `In |${x}| + |${y}| ≤ 3 the point (2, 2) gives 4 ≤ 3, false: it lies outside, although it looks close to the corner.`,
    say: null,
  },
  // pp. 476–477, 479–480
  {
    topic: 8,
    kind: 'shortcut',
    q: `Find the area of {(${x}, ${y}) ∶ |${x}| + |${y}| ≤ 4 and |${x}| ≥ 1} without a fresh case split.`,
    a: `Use symmetry: if the inequality is unchanged when ${x} → −${x} the region is symmetric about the ${y}-axis (likewise ${y} → −${y}, and swapping ${x} and ${y}), so compute one piece and reflect. Here |${x}| ≥ 1 deletes the strip −1 < ${x} < 1 from the square of area 32, leaving two congruent pieces; the right one is the triangle (1, 3), (1, −3), (4, 0), area ${fr('1', '2')}(6)(3) = 9. Doubling: 18 square units. Check by subtraction: the strip is 12 + 1 + 1 = 14, and 32 − 14 = 18`,
    why: `{|${x}| + |${y}| ≤ 4, ${y} ≥ ${x}}: the line ${y} = ${x} passes through the centre of a centrally symmetric region and bisects its area, so 16 square units.`,
    say: null,
  },

  // ── Additional topic E · Repeated Factors: Reduce the Inequality Before You Draw It ──
  // pp. 481, 489
  {
    topic: 9,
    kind: 'remember',
    q: `Why may you replace ${fr(P, Q)} ≷ 0 by ${P} ⋅ ${Q} ≷ 0?`,
    a: `For real <i>p</i>, <i>q</i> with <i>q</i> ≠ 0, ${fr('<i>p</i>', '<i>q</i>')} = ${fr('<i>pq</i>', '<i>q</i><sup>2</sup>')} and <i>q</i><sup>2</sup> > 0, so the quotient and the product have the same sign. Hence ${fr(`${P}(${x})`, `${Q}(${x})`)} ≷ 0 ⟺ ${P}(${x}) ⋅ ${Q}(${x}) ≷ 0, together with ${Q}(${x}) ≠ 0. That condition is not optional bookkeeping: it is what keeps the two statements equivalent. ${P} and ${Q} are the numerator and denominator after everything has been brought to one side and combined into a single quotient`,
    why: `${fr(`${x} + 5`, `${x} + 2`)} ≤ 0 has the sign of (${x} + 5)(${x} + 2) ≤ 0 with ${x} ≠ −2: [−5, −2).`,
    say: 'Reduce, draw, then re-attach.',
  },
  // pp. 481–482, 489
  {
    topic: 9,
    kind: 'remember',
    q: `What do you do with a factor (${x} − <i>r</i>)<sup><i>m</i></sup>, and with a quadratic whose ${D} < 0?`,
    a: `Even <i>m</i>: delete it, since (${x} − <i>r</i>)<sup><i>m</i></sup> ≥ 0 cannot change the sign anywhere except at ${x} = <i>r</i>; record the root: from the numerator it makes the expression 0, a solution under ≤ or ≥ and excluded when strict; from the denominator it is excluded always. Odd <i>m</i>: replace by (${x} − <i>r</i>), which carries the same sign; if it came from the denominator it is still excluded always. A quadratic with ${D} < 0 never changes sign: delete it if ${a} > 0, delete it and reverse the inequality if ${a} < 0; delete a positive constant, delete a negative one and reverse`,
    why: `${fr(`(${sq(x)} + ${x} + 1)(${x} − 4)`, `(${x} + 1)<sup>2</sup>`)} ≥ 0: ${D} = −3 < 0 with a positive leading coefficient, so the quadratic goes; ${x} = −1 is excluded; the answer is [4, ∞).`,
    say: 'Even powers leave no trace on the curve, only a dot in the margin.',
  },
  // pp. 482–483
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the procedure for an inequality with repeated factors?',
    a: `Bring everything to one side, combine into one quotient, factor completely and make every ${x}-coefficient positive, tracking each stray −1. Apply R1, R2, R3, writing a margin list of include and exclude candidates as you go. Run the ordinary wavy curve on the reduced product, which now has only distinct simple factors: no bouncing to think about. Re-attach: delete every excluded point, add back every included point, even one sitting alone in a rejected stretch. Substitute one value from each interval of the answer into the original`,
    why: `${fr(`(${x} − 2)<sup>3</sup>(${x} + 1)<sup>4</sup>(${x} − 5)`, `(${x} + 3)<sup>2</sup>(${x} − 1)`)} ≥ 0 reduces to (${x} − 1)(${x} − 2)(${x} − 5) ≥ 0, [1, 2] ∪ [5, ∞); delete 1, add −1: {−1} ∪ (1, 2] ∪ [5, ∞).`,
    say: null,
  },
  // pp. 481, 485
  {
    topic: 9,
    kind: 'mixup',
    q: 'An even-power root in the numerator or in the denominator: which one can be a solution?',
    a: `Only the numerator one, and only under ≤ or ≥: there the expression is 0. An even-power root of the denominator is excluded always, even when it falls in the middle of an accepted stretch, where it punches a hole`,
    why: `${fr(`(${x} − 1)<sup>2</sup>(${x} + 4)`, `${x} − 2`)} ≥ 0 gives (−∞, −4] ∪ {1} ∪ (2, ∞), with 1 isolated; ${fr(`(${x} + 1)(${x} − 4)`, `(${x} − 2)<sup>2</sup>`)} ≤ 0 gives [−1, 2) ∪ (2, 4], with 2 punched out.`,
    say: null,
  },
  // pp. 482, 484–485
  {
    topic: 9,
    kind: 'mistake',
    q: `With ${t} = ${fr(`${x} − 1`, `${x} + 2`)}, can you push back the branch ${t} ≤ 1 by cross-multiplying, ${x} − 1 ≤ ${x} + 2?`,
    a: `No: that is true for every ${x} and hands in all of ℝ minus {−2}, losing the exclusion ${x} < −5. Each ${t}-condition must be solved by bringing everything to one side: ${fr(`${x} − 1`, `${x} + 2`)} − 1 = ${fr('−3', `${x} + 2`)} ≤ 0, which gives ${x} > −2. The other branch, ${t} ≥ 2, gives ${fr(`${x} + 5`, `${x} + 2`)} ≤ 0, that is [−5, −2). Since the ${t}-answer was a union, union the push-backs: [−5, −2) ∪ (−2, ∞). Missing the re-attach step is the other trap: it silently loses an isolated solution point`,
    why: `Intersecting the two push-backs instead would give (−2, ∞) ∩ [−5, −2) = ∅, an empty answer.`,
    say: null,
  },
  // pp. 482, 484–485
  {
    topic: 9,
    kind: 'shortcut',
    q: `Solve (${fr(`${x} − 1`, `${x} + 2`)})<sup>2</sup> − 3(${fr(`${x} − 1`, `${x} + 2`)}) + 2 ≥ 0. The fast way?`,
    a: `Name the repeating block: ${t} = ${fr(`${x} − 1`, `${x} + 2`)}, ${x} ≠ −2. Solve in ${t} first: ${sq(t)} − 3${t} + 2 = (${t} − 1)(${t} − 2) ≥ 0, so ${t} ≤ 1 or ${t} ≥ 2. Push each ${t}-interval back as its own rational inequality, by bringing to one side: (−2, ∞) and [−5, −2). A union in ${t} gives a union in ${x}: [−5, −2) ∪ (−2, ∞). Do not assume ${t} ranges over all of ℝ: a ${t}-value that is unreachable simply pushes back to an empty set`,
    why: `At ${x} = −6, ${t} = ${fr('7', '4')}, strictly between 1 and 2, so the expression is −${fr('3', '16')} < 0: the stretch ${x} < −5 is rightly excluded.`,
    say: null,
  },

  // ── Additional topic F · Reading a Region Backwards: Writing the System from the Picture ──
  // pp. 486, 489
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you write the system of inequalities for a shaded region?',
    a: `Each straight edge gives one inequality; an edge along the ${x}-axis gives ${y} ≥ 0 or ${y} ≤ 0, along the ${y}-axis ${x} ≥ 0 or ${x} ≤ 0. Find each boundary line from two corners, ${fr(`${y} − ${y}<sub>1</sub>`, `${x} − ${x}<sub>1</sub>`)} = ${fr(`${y}<sub>2</sub> − ${y}<sub>1</sub>`, `${x}<sub>2</sub> − ${x}<sub>1</sub>`)}, or from its intercepts (<i>p</i>, 0) and (0, <i>q</i>), ${fr(x, '<i>p</i>')} + ${fr(y, '<i>q</i>')} = 1. Decide each direction with one point strictly inside the region (for a bounded region the centroid of the corners works; for a triangle <i>A</i>, <i>B</i>, <i>C</i>, its centroid ${fr('1', '3')}(<i>A</i> + <i>B</i> + <i>C</i>)), and strictness from the drawing: solid gives ≤ or ≥, dotted < or >. Then audit: every corner satisfies all the inequalities, with equality in at least two`,
    why: `Triangle (0, 0), (4, 0), (0, 3), solid: ${fr(x, '4')} + ${fr(y, '3')} = 1 is 3${x} + 4${y} = 12, and (1, 1) gives 7 < 12, so ${x} ≥ 0, ${y} ≥ 0, 3${x} + 4${y} ≤ 12.`,
    say: 'One interior point fixes every sign.',
  },
  // pp. 486–489
  {
    topic: 10,
    kind: 'remember',
    q: 'What decides whether a first-quadrant region is bounded?',
    a: `The direction of the inequalities, not their number. With all constraints <i>ax</i> + <i>by</i> ≤ ${c} (${a}, ${b}, ${c} > 0) the region is bounded; if they read <i>ax</i> + <i>by</i> ≥ ${c}, it is unbounded away from the origin. In Class 12 this decides whether a maximum exists at all: on such an unbounded region a linear objective <i>Z</i> = <i>ax</i> + <i>by</i> with ${a}, ${b} > 0 has a minimum at a corner but no maximum`,
    why: `Corners (0, 8), (2, 4), (10, 0), extending away from the origin: 2${x} + ${y} ≥ 8, ${x} + 2${y} ≥ 10, ${x} ≥ 0, ${y} ≥ 0, unbounded.`,
    say: null,
  },
  // pp. 486–488
  {
    topic: 10,
    kind: 'mixup',
    q: 'To fix the direction of each edge, do you substitute the origin or a point inside the region?',
    a: `A point strictly inside the shaded region: write the sign that makes each boundary statement true there. The origin works only when it lies inside; for a region pushed away from the origin, test a point well out in it, and the origin must then fail every slant constraint`,
    why: `For the region with corners (0, 8), (2, 4), (10, 0), the point (5, 5) gives 15 ≥ 8 and 15 ≥ 10, while the origin gives 0 ≥ 8 and 0 ≥ 10, both false.`,
    say: null,
  },
  // p. 488
  {
    topic: 10,
    kind: 'mistake',
    q: `For corners (0, 8), (2, 4), (10, 0) of a region extending away from the origin, can you write 2${x} + ${y} ≤ 8, ${x} + 2${y} ≤ 10?`,
    a: `No: those reversed inequalities describe a bounded quadrilateral with vertices (0, 0), (4, 0), (2, 4), (0, 5), a confident wrong answer. The region needs 2${x} + ${y} ≥ 8 and ${x} + 2${y} ≥ 10, with ${x} ≥ 0 and ${y} ≥ 0 as genuine edges, since the corners (0, 8) and (10, 0) sit on the axes`,
    why: `(4, 2) gives 2${x} + ${y} = 10 ≥ 8 but ${x} + 2${y} = 8 < 10: it fails exactly one constraint, lying just outside the second edge.`,
    say: null,
  },
  // pp. 486–487
  {
    topic: 10,
    kind: 'shortcut',
    q: 'How do you audit a system read off a picture before writing it down?',
    a: `Every listed corner must satisfy all the inequalities, with equality in at least two of them (the two edges meeting there); the interior point must satisfy all of them; and a point just outside the middle of one edge, away from the corners, should fail exactly that edge’s inequality`,
    why: `For ${x} ≥ 0, ${y} ≥ 0, 3${x} + 4${y} ≤ 12: (4, 0) gives equality in ${y} ≥ 0 and in 3${x} + 4${y} ≤ 12, and the outside point (2, 3) gives 18 > 12, failing only the third.`,
    say: null,
  },
];
