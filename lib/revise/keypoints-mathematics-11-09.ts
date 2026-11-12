/**
 * KEY POINTS for Mathematics Class 11, Chapter 9 (Straight Lines).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 00–08 and Additional topics A–F each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the angle formula and collinearity; Topic 07,
 * the excentres, the Euler line and where each centre sits; Topic 08, the
 * angle, the bisectors, the determinant condition, homogenisation and the
 * area and distance results, with two Common mistakes): 91 points in all.
 * Memory lines are a fifth, short section of their own, read rather than
 * tested: the first two of each topic.
 *
 * `topic`: Topic 00 (the opening topic, "Start here") is 0 and has key points
 * of its own; Topics 01–08 are 1–8 (01–06 the main chapter, 07 the
 * supplement's Subtopic 07, 08 the "Additional Topics" part's Subtopic 08);
 * Additional topics A–F (the book's Patterns 1–6) are 9–14. No point refers
 * to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * formulas and definitions, its theorems, derivations and procedures, and its
 * Cheat sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–F,
 * which have no MCQs or pitfall lists: their Speed Trap example, their scope
 * conditions and their corrections). Exam shortcuts: its Pro-Tips, with a
 * worked example or practice answer. `say`: the book's own mnemonics, word for
 * word without their quotation marks, from each cheat sheet (Topics 00–08):
 * twenty-nine in all, every one the book prints ("p is positive, period" and
 * "Set the other to zero" take a colon before their trailing phrase, "Minus A
 * over B", "Normalize, then subtract" and "Flip and Negate" likewise). A–F
 * have no cheat sheet and no mnemonic, so each has the book's own one-line
 * sentences instead (A: the intercept line, without its "(the Topic 02
 * Pro-Tip)" bracket; B: the "for every value of λ" line; C: "Read the sign of
 * the answer, do not discard it." and the positive-ratio line; D: the shift
 * line, without its "Guard rail:" label, as decision 31; E: "You cannot
 * translate the rule …" and "The parameter may not survive into the answer.";
 * F: "reflect twice and you are back where you started" and "the mirror’s
 * constant is the average of the other two"): thirty-eight in all,
 * twenty-seven of them memory lines (A, B and D have one each).
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: collinearity by equal slopes (not for points on a vertical
 * line: use the area test there); "perpendicular slopes always have opposite
 * signs" (only when neither line is vertical); "genuinely two such lines" for
 * a given angle with a line (check the vertical line separately); the
 * normal-form sign "opposite to that of C" (C ≠ 0; C = 0 gives p = 0); the
 * concurrency determinant (det = 0 is necessary for concurrency; the converse
 * needs no two lines parallel, since three mutually parallel lines also make it
 * vanish); the origin rule for the bisectors (both constants made positive, so
 * neither line through the origin); "m₁m₂ = −1 always" for the
 * bisectors (when both bisectors have slopes: the axes, one vertical, are a
 * perpendicular pair with no product); "you cannot reflect an equation
 * directly" (substituting the reflection map works for every mirror); the
 * incentre on the Euler line "only when isosceles" (and not equilateral, where
 * there is no Euler line); the bisectors of a pair "always real" (except
 * a = b with h = 0); Δ = 0 as "a pair of lines" (degenerate, not real: check
 * h² ≥ ab, and for a parallel pair g² ≥ ac and f² ≥ bc); "if two are
 * parallel … the determinant returns 0" (two parallel lines leave a vertex
 * missing; only concurrent lines give area 0); shifting to remove the first-degree terms of "a second-degree curve" (a
 * central curve: a circle, an ellipse, a hyperbola; a parabola has no centre);
 * the fixed point of L₁ + λL₂ = 0 (the base lines must meet: proportional or
 * parallel base lines give none); and the parallel-mirror image (both lines
 * written with the same a and b). Procedure A's "genuine evidence, not
 * circular" (Topic 07), the "dimensionally incoherent" angle weights and the "non-linear parameter" remark (Additional
 * B) are left out.
 *
 * Markup is the chapter's own: variables and Greek letters italic, Δ and π
 * upright, ℓ upright, subscripts as <sub> (<i>I</i><sub>A</sub> for an
 * excentre); − (U+2212) for minus; every fraction stacked,
 * <frac><num>…</num><den>…</den></frac>; ratios with ∶ (U+2236); no em dashes;
 * and always a space after "<" (as the book prints it), so it is never read as
 * a tag. Exam-frequency claims would keep the label "(the book’s estimate from
 * past papers, not official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const sb = (base: string, s: string) => `<i>${base}</i><sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const p = '<i>p</i>';
const r = '<i>r</i>';
const s = '<i>s</i>';
const t = '<i>t</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const A = '<i>A</i>';
const B = '<i>B</i>';
const C = '<i>C</i>';
const G = '<i>G</i>';
const H = '<i>H</i>';
const In = '<i>I</i>';
const L = '<i>L</i>';
const O = '<i>O</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const R = '<i>R</i>';
const S = '<i>S</i>';
const X = '<i>X</i>';
const Y = '<i>Y</i>';
const th = '<i>θ</i>';
const om = '<i>ω</i>';
const lam = '<i>λ</i>';
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const y3 = sb('y', '3');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const a1 = sb('a', '1');
const a2 = sb('a', '2');
const b1 = sb('b', '1');
const b2 = sb('b', '2');
const c1 = sb('c', '1');
const c2 = sb('c', '2');
const L1 = sb('L', '1');
const L2 = sb('L', '2');
const C1 = sb('C', '1');
const C2 = sb('C', '2');
const HALF = fr('1', '2');
const ATAN = 'tan<sup>−1</sup> ';
const ROOTAB = `√(${sq(A)} + ${sq(B)})`;
const H2AB = `${sq(h)} − <i>ab</i>`;
const IA = sb('I', 'A');
const rA = sb('r', 'A');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Coordinate Foundations ──
  // pp. 791–792, 796
  {
    topic: 0,
    kind: 'remember',
    q: `What are the distance formula and the section formula for the point dividing ${A}${B} in the ratio ${m} ∶ ${n}?`,
    a: `${A}${B} = √((${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup>). Internal division: (${fr(`<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>`, `${m} + ${n}`)}, ${fr(`<i>my</i><sub>2</sub> + <i>ny</i><sub>1</sub>`, `${m} + ${n}`)}), proved by dropping perpendiculars to the x-axis, which cut the x-coordinates in the same ratio. External division: ${m} − ${n} in place of ${m} + ${n}, which fails at ${m} = ${n} (no point divides a segment externally in the ratio 1 ∶ 1: that point is at infinity). The midpoint is the 1 ∶ 1 internal case, (${fr(`${x1} + ${x2}`, '2')}, ${fr(`${y1} + ${y2}`, '2')})`,
    why: `${P} divides ${A}(−1, 3) to ${B}(5, −9) with ${A}${P} ∶ ${P}${B} = 2 ∶ 1: ${P} = (${fr('9', '3')}, ${fr('−15', '3')}) = (3, −5), and <i>OP</i> = √34.`,
    say: 'Internal adds, external subtracts (the <i>m</i> ± <i>n</i> denominator).',
  },
  // pp. 792, 794, 796–797
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the centroid and the area of a triangle from its vertices, and how does the area test collinearity?',
    a: `${G} = (${fr(`${x1} + ${x2} + ${x3}`, '3')}, ${fr(`${y1} + ${y2} + ${y3}`, '3')}). Δ = ${HALF}|${x1}(${y2} − ${y3}) + ${x2}(${y3} − ${y1}) + ${x3}(${y1} − ${y2})|: the algebraic sum of the three trapezia under the sides, the modulus removing the orientation sign. ${A}, ${B}, ${C} are collinear ⟺ Δ = 0: an area of 0 is not a failure but the test itself`,
    why: `(1, 4), (3, −2), (−3, 16): 2Δ = |1(−18) + 3(12) + (−3)(6)| = |−18 + 36 − 18| = 0, so the points are collinear.`,
    say: 'Area zero means in a row (collinear).',
  },
  // pp. 792, 794–797
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you find the equation of a locus, and what does shifting the origin to (h, k) do to coordinates?',
    a: `Locus: let the moving point be ${P}(${h}, ${k}); translate every condition into an equation in ${h}, ${k}; eliminate any parameters; replace (${h}, ${k}) by (${x}, ${y}). Shift of origin to (${h}, ${k}): a point’s new coordinates are (${X}, ${Y}) = (${x} − ${h}, ${y} − ${k}); to rewrite an equation substitute ${x} = ${X} + ${h}, ${y} = ${Y} + ${k}. The shift never rotates the axes: slopes and distances are unchanged, only coordinates relabel`,
    why: `Distance from (4, 0) twice the distance from (1, 0): (${h} − 4)<sup>2</sup> + ${sq(k)} = 4[(${h} − 1)<sup>2</sup> + ${sq(k)}] gives ${sq(x)} + ${sq(y)} = 4, an Apollonius circle.`,
    say: 'New equals old minus shift.',
  },
  // pp. 791, 795–796
  {
    topic: 0,
    kind: 'mixup',
    q: 'Internal or external division: which denominator, and where does the point land?',
    a: `Internal uses ${m} + ${n} and puts the point between ${A} and ${B}; external uses ${m} − ${n} and puts it outside the segment, on the line through ${A} and ${B}. Picking the wrong one flips the point to the wrong side`,
    why: `(2, ${k}) divides the segment from (0, 0) to (6, 9) internally in the ratio 1 ∶ 2, and ${k} = 3.`,
    say: null,
  },
  // pp. 795–796
  {
    topic: 0,
    kind: 'mistake',
    q: 'The centroid is (3, 1) and two vertices are (2, −1) and (5, 4). Is the third vertex (4, 0)?',
    a: `No: (2, 0). Multiply the centroid by 3 first, since ${x1} + ${x2} + ${x3} = 3<i>x̄</i>: ${x3} = 9 − 2 − 5 = 2 and ${y3} = 3 − (−1) − 4 = 0. (4, 0) subtracts only one vertex in ${x}; (2, 2) fails the ${y}-sum (−1 + 4 + 2 = 5, not 3), and (8, 2) fails both sums. The other listed slips: internal and external section formulas swapped, the modulus dropped from the area (a negative “area”), and the shift added instead of subtracted`,
    why: 'Origin shifted to (2, −1): the point (5, 3) becomes (5 − 2, 3 − (−1)) = (3, 4); adding the shift gives (7, 2).',
    say: null,
  },
  // pp. 795–796
  {
    topic: 0,
    kind: 'shortcut',
    q: `If (1, 2), (4, ${y}), (7, 8) are collinear, find ${y} in one line.`,
    a: `The ${x}-values are equally spaced, so the middle point is the midpoint: ${y} = ${fr('2 + 8', '2')} = 5. For collinearity in general, use area = 0 rather than slopes: one computation, it never divides by zero (no vertical-line worry), and the modulus protects you from orientation sign errors`,
    why: `Area test: 1(${y} − 8) + 4(8 − 2) + 7(2 − ${y}) = 30 − 6${y} = 0, so ${y} = 5.`,
    say: null,
  },

  // ── Topic 01 · Slope of a Line and Angles ──
  // pp. 798–801, 807
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the inclination and the slope of a line, and when is the slope undefined?',
    a: `Inclination ${th}: the angle from the positive x-axis to the line, measured anticlockwise, with 0° ≤ ${th} < 180° (a line has no arrow). Slope ${m} = tan ${th}, rise over run, defined for every non-vertical line. Horizontal: ${th} = 0°, ${m} = 0; vertical: ${th} = 90°, ${m} undefined (never “infinite”, never zero). From two points, ${m} = ${fr(`${y2} − ${y1}`, `${x2} − ${x1}`)}, ${x1} ≠ ${x2}, and it does not matter which point is first. ${m} < 0: the line falls to the right and ${th} is obtuse`,
    why: `${A}(−3, 2), ${B}(5, −4): ${m} = ${fr('−6', '8')} = −${fr('3', '4')} < 0, so the inclination is obtuse.`,
    say: 'Horizontal Zero, Vertical Void: slope 0 vs undefined.',
  },
  // pp. 800–801, 807
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the conditions for two lines to be parallel, and to be perpendicular?',
    a: `Parallel: equal inclinations, so ${m1} = ${m2}. Perpendicular: inclinations differing by 90°, so ${m1}${m2} = −1, i.e. ${m2} = −${fr('1', m1)} (from tan(${th} + 90°) = −cot ${th}). Both need the slopes to exist: if one line is vertical, the perpendicular to it is horizontal, and that pair is handled by inspection, not by the product rule`,
    why: `The line through (0, −3) and (4, 5) has slope 2; a perpendicular through (2, 7) and (${k}, 1) needs ${fr('−6', `${k} − 2`)} = −${fr('1', '2')}, so ${k} = 14.`,
    say: 'Flip and Negate: for perpendicular slopes.',
  },
  // pp. 800–803, 807
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the acute angle between two lines with slopes m₁ and m₂, and how do you find it safely?',
    a: `tan ${th} = |${fr(`${m2} − ${m1}`, `1 + ${m1}${m2}`)}|: the lines make two supplementary angles, ${th} and 180° − ${th}, and the modulus picks the acute one (the obtuse one is 180° − ${th}). Procedure: if either line is vertical, work from inclinations (the acute angle is |90° − ${th}|, ${th} the other line’s inclination); if 1 + ${m1}${m2} = 0 the lines are perpendicular, 90°, stop; otherwise evaluate and take tan<sup>−1</sup>`,
    why: `Slopes ${fr('1', '2')} and −3: ${m2} − ${m1} = −${fr('7', '2')} and 1 + ${m1}${m2} = −${fr('1', '2')}, so tan ${th} = 7 and ${th} = ${ATAN}7 ≈ 81.87°.`,
    say: null,
  },
  // pp. 798, 801, 805–807
  {
    topic: 1,
    kind: 'remember',
    q: 'How do slopes test three points for collinearity, and what slope has a line equally inclined to the axes?',
    a: `${A}, ${B}, ${C} are collinear when slope(${A}${B}) = slope(${B}${C}), for points not on a vertical line: there no slope exists, so use the area test. Equally inclined to the axes: ${th} = 45° or 135°, so ${m} = tan 45° = 1 or tan 135° = −1, i.e. ${m} = ±1 (0 or undefined would be parallel to an axis, the opposite situation)`,
    why: `${A}(2, 3), ${B}(4, 7), ${C}(5, ${k}): slope(${A}${B}) = 2 and slope(${B}${C}) = ${k} − 7, so ${k} = 9.`,
    say: 'Equally inclined ⇒ ±1.',
  },
  // pp. 804–807
  {
    topic: 1,
    kind: 'mixup',
    q: 'The angle between two given lines, or a line making a given angle α with a given line: modulus or ±?',
    a: `For the angle between two given lines, take the modulus: it gives the acute angle. For a line making angle <i>α</i> with a given line of slope ${m2}, set the signed ratio ${fr(`${m} − ${m2}`, `1 + <i>mm</i><sub>2</sub>`)} = ± tan <i>α</i>: the two signs give the lines on either side. Then check separately whether a vertical line also makes angle <i>α</i>, since “let the slope be ${m}” has excluded it (when it does, one of the two sign equations has no solution)`,
    why: `45° with 3${x} − ${y} + 5 = 0: ${fr(`${m} − 3`, `1 + 3${m}`)} = ±1 gives ${m} = −2 or ${fr('1', '2')}; a vertical line makes only about 18.43° with it, so neither answer is vertical.`,
    say: null,
  },
  // pp. 804–806
  {
    topic: 1,
    kind: 'mistake',
    q: `A line is perpendicular to one of slope ${fr('2', '3')}. Is its slope ${fr('3', '2')}?`,
    a: `No: −${fr('3', '2')}, from ${m1}${m2} = −1. ${fr('3', '2')} reciprocates but drops the sign (the most common slip), −${fr('2', '3')} negates without reciprocating, and “undefined” would be right only if the first line were horizontal. When neither line is vertical, perpendicular slopes have opposite signs: two of the same sign mean a mistake. The other listed slips: calling the slope of a vertical line infinity or zero (it is undefined), and forgetting to check the vertical line after “let the slope be ${m}”`,
    why: `In the perpendicular-through-(2, 7) problem, writing ${m1} = +${fr('1', '2')} gives ${k} = −10 instead of 14.`,
    say: null,
  },
  // pp. 805–806
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you catch most slope slips before they cost marks?',
    a: 'Glance at the geometry before any slope computation: rising left to right ⇒ slope positive; falling ⇒ negative; flat ⇒ 0; upright ⇒ undefined. This two-second sign check catches most arithmetic slips',
    why: `${y} = √3${x} + 1 rises steeply: its slope √3 gives ${th} = ${ATAN}√3 = 60° with the x-axis, not 30° (tan 30° = ${fr('1', '√3')}).`,
    say: null,
  },

  // ── Topic 02 · Equations of a Line ──
  // pp. 808–811, 818
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the point-slope, two-point, slope-intercept and intercept forms, and where does each fail?',
    a: `Point-slope ${y} − ${y1} = ${m}(${x} − ${x1}) and slope-intercept ${y} = <i>mx</i> + ${c} need a slope, so neither gives a vertical line, which is ${x} = ${a} (a horizontal line is ${y} = ${b}). Two-point: ${y} − ${y1} = ${fr(`${y2} − ${y1}`, `${x2} − ${x1}`)}(${x} − ${x1}), ${x1} ≠ ${x2}. Intercept: ${fr(x, a)} + ${fr(y, b)} = 1 with ${a} ≠ 0, ${b} ≠ 0, so it fails for a line through the origin or parallel to an axis. All descend from point-slope: a second point in place of ${m} gives two-point, the point (0, ${c}) gives ${y} = <i>mx</i> + ${c}`,
    why: `Through (−2, 5) and (3, −1): ${m} = −${fr('6', '5')}, so 6${x} + 5${y} − 13 = 0, with ${y}-intercept ${fr('13', '5')}.`,
    say: null,
  },
  // pp. 808, 810, 818, 821
  {
    topic: 2,
    kind: 'remember',
    q: 'Which lines does Ax + By + C = 0 describe, and what are its slope and intercepts?',
    a: `Every line, vertical ones included, and with ${A}, ${B} not both zero every such equation is a line (${B} ≠ 0 gives ${y} = −${fr(A, B)}${x} − ${fr(C, B)}; ${B} = 0 gives ${x} = −${fr(C, A)}): the only form that never fails. Slope ${m} = −${fr(A, B)} (${B} ≠ 0), ${y}-intercept ${c} = −${fr(C, B)} (${B} ≠ 0), ${x}-intercept ${a} = −${fr(C, A)} (${A} ≠ 0)`,
    why: `3${x} − 4${y} + 12 = 0: ${m} = −${fr('3', '−4')} = ${fr('3', '4')}, ${a} = −4, ${b} = 3; the line rises to the right, as a positive slope must.`,
    say: 'Minus <i>A</i> over <i>B</i>: for slope from the general form.',
  },
  // pp. 810–813, 818
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the normal form of a line, and how do you reduce Ax + By + C = 0 to it?',
    a: `${x} cos ${om} + ${y} sin ${om} = ${p}: ${p} ≥ 0 the perpendicular distance from the origin, ${om} the angle the normal makes with the +x-axis, 0 ≤ ${om} < 360°. Move the constant: <i>Ax</i> + <i>By</i> = −${C}; divide by ±${ROOTAB}, choosing the sign that makes the right side positive (opposite to the sign of ${C}; if ${C} = 0 the line passes through the origin and ${p} = 0). Read off cos ${om} = ${fr(A, `±${ROOTAB}`)}, sin ${om} = ${fr(B, `±${ROOTAB}`)}, ${p} = ${fr(`|${C}|`, ROOTAB)}, and fix ${om} from the signs of cos ${om} and sin ${om} together`,
    why: `${x} − √3${y} + 8 = 0: divide by −2 to get −${fr('1', '2')}${x} + ${fr('√3', '2')}${y} = 4, so ${p} = 4, and cos ${om} < 0, sin ${om} > 0 give ${om} = 120°.`,
    say: '<i>p</i> is positive, period: for the normal-form sign check.',
  },
  // pp. 813–817
  {
    topic: 2,
    kind: 'mixup',
    q: `cos ${om} = −${fr('1', '2')} in a normal form: is ${om} 120° or 240°?`,
    a: `cos ${om} alone cannot say: both have cos ${om} = −${fr('1', '2')}. Use the signs of cos ${om} and sin ${om} together to fix the quadrant: sin ${om} > 0 gives 120°, sin ${om} < 0 gives 240°`,
    why: `${fr('5', '13')}${x} + ${fr('12', '13')}${y} = 3 has cos ${om} = ${fr('5', '13')}, sin ${om} = ${fr('12', '13')}: ${om} = ${ATAN}${fr('12', '5')} ≈ 67.4°, in the first quadrant.`,
    say: null,
  },
  // pp. 815–817
  {
    topic: 2,
    kind: 'mistake',
    q: `Are the slope and y-intercept of 2${x} − 5${y} + 10 = 0 equal to −${fr('2', '5')} and 2?`,
    a: `No: ${fr('2', '5')} and 2. ${m} = −${fr(A, B)} = −${fr('2', '−5')} = ${fr('2', '5')} and ${c} = −${fr(C, B)} = −${fr('10', '−5')} = 2: −${fr('2', '5')} is the +${fr(A, B)} slip (the most frequent error on these forms), −2 drops the minus on the intercept, and ${fr('5', '2')} flips the fraction. The other listed slips: a negative ${p} in the normal form (wrong sign for the radical: flip it), reading ${om} from one trig value, and forcing intercept form on a line through the origin or parallel to an axis`,
    why: `3${x} − 4${y} = 12: ${y} = 0 gives ${x} = 4 and ${x} = 0 gives ${y} = −3, so the intercepts are 4 and −3, not 4 and 3.`,
    say: null,
  },
  // pp. 815, 817
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you read the intercepts of any line in two seconds?',
    a: `Set ${y} = 0 for the ${x}-intercept and ${x} = 0 for the ${y}-intercept: no need to memorise −${fr(C, A)} and −${fr(C, B)} and risk a sign error, since the substitution carries the signs for you`,
    why: `3${x} − 4${y} + 12 = 0: ${y} = 0 gives ${x} = −4, ${x} = 0 gives ${y} = 3; the slope −${fr(A, B)} = ${fr('3', '4')}.`,
    say: 'Set the other to zero: to read off intercepts.',
  },

  // ── Topic 03 · Distance Formulas ──
  // pp. 819–822, 826
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the distance of P(x₁, y₁) from the line Ax + By + C = 0, and why?',
    a: `<i>d</i> = ${fr(`|<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + ${C}|`, ROOTAB)}, with the line in general form (rewrite ${y} = <i>mx</i> + ${c} as <i>mx</i> − ${y} + ${c} = 0 first). Proof: (${A}, ${B}) is normal to the line, so project <i>RP⃗</i> for any point <i>R</i>(<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) of the line onto the unit normal; <i>Ax</i><sub>0</sub> + <i>By</i><sub>0</sub> = −${C} turns the numerator into <i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + ${C}. The modulus makes <i>d</i> ≥ 0; without it, the signed value tells you which side ${P} is on`,
    why: `(3, −4) from 4${x} + 3${y} − 5 = 0: ${fr('|12 − 12 − 5|', '√25')} = 1.`,
    say: 'Modulus on top, root-sum-squares below.',
  },
  // pp. 819, 821–823, 826
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the distance between two parallel lines, and what must you do first?',
    a: `<i>d</i> = ${fr(`|${C1} − ${C2}|`, ROOTAB)}, valid only once both lines show identical ${A} and ${B}: rescale one line first. Proof: parallel lines are the same distance apart everywhere, so take one point of the first line and use the point-line distance to the second`,
    why: `3${x} − 4${y} + 7 = 0 and 6${x} − 8${y} − 5 = 0: halve the second to 3${x} − 4${y} − 2.5 = 0, so <i>d</i> = ${fr('|7 − (−2.5)|', '5')} = 1.9.`,
    say: 'Normalize, then subtract: for parallel lines.',
  },
  // pp. 819, 821, 823, 826
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the symmetric (distance) form of a line, and what does its parameter measure?',
    a: `Through ${P}(${x1}, ${y1}) with inclination ${th}: ${fr(`${x} − ${x1}`, `cos ${th}`)} = ${fr(`${y} − ${y1}`, `sin ${th}`)} = ${r}, i.e. ${x} = ${x1} + ${r} cos ${th}, ${y} = ${y1} + ${r} sin ${th} (the form to use when sin ${th} or cos ${th} is 0). Because (cos ${th}, sin ${th}) is a unit vector, ${r} is the signed distance from ${P} along the line (${r} > 0 in the direction of ${th}, ${r} < 0 opposite); with non-unit direction numbers ${r} is no longer the distance`,
    why: `On the line through (1, 2) at 30°, the points 4 away are (1 + 2√3, 4) and (1 − 2√3, 0).`,
    say: '<i>r</i> is the ruler: in the symmetric form the parameter is the distance.',
  },
  // pp. 819, 823–824
  {
    topic: 3,
    kind: 'mixup',
    q: 'The distance of P from a line, or the distance from P along a given line through it to where that line meets another: which formula?',
    a: `The point-line formula gives the perpendicular (shortest) distance. The distance along a given line through ${P} is the slant distance ${r} of the symmetric form: substitute ${x1} + ${r} cos ${th}, ${y1} + ${r} sin ${th} into the other line and solve for ${r}, with no need to find the meeting point first`,
    why: `From ${P}(1, 1) at 60° to 2${x} + ${y} = 8: ${r}(1 + ${fr('√3', '2')}) = 5, so <i>PQ</i> = 10(2 − √3) ≈ 2.68.`,
    say: null,
  },
  // pp. 823, 825–826
  {
    topic: 3,
    kind: 'mistake',
    q: `Is the distance between 4${x} + 3${y} − 5 = 0 and 8${x} + 6${y} + 10 = 0 equal to 3?`,
    a: `No: 2. Normalise first: 8${x} + 6${y} + 10 = 0 is 4${x} + 3${y} + 5 = 0, so <i>d</i> = ${fr('|−5 − 5|', '5')} = 2. 3 uses the un-normalised constant, 1.5 the un-normalised constant and denominator √(64 + 36) = 10. The other listed slips: dropping the modulus, the wrong denominator (it is ${ROOTAB}, not ${sq(A)} + ${sq(B)} and not |${A}| + |${B}|), and a non-unit direction in the symmetric form`,
    why: `The origin from 3${x} − 4${y} + 10 = 0: ${fr('10', '5')} = 2; dividing by |${A}| + |${B}| = 7 gives ${fr('10', '7')}.`,
    say: null,
  },
  // pp. 819, 826
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Do two points lie on the same side of a line? Decide without a figure.',
    a: `Compare the signs of <i>Ax</i> + <i>By</i> + ${C} at the two points (the signed distance without its modulus): the same sign ⇒ the same side; opposite signs ⇒ the line separates them. It also answers “is the origin inside this triangle?” with no extra construction`,
    why: `2${x} + 3${y} − 12 at (1, 2) is −4 and at (5, 6) is 16: opposite sides.`,
    say: null,
  },

  // ── Topic 04 · Point of Intersection, Concurrency & Family of Lines ──
  // pp. 827–828, 832
  {
    topic: 4,
    kind: 'remember',
    q: 'Where do a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 meet, and when are they parallel or coincident?',
    a: `${x} = ${fr(`${b1}${c2} − ${b2}${c1}`, `${a1}${b2} − ${a2}${b1}`)}, ${y} = ${fr(`${c1}${a2} − ${c2}${a1}`, `${a1}${b2} − ${a2}${b1}`)} (Cramer’s rule), a unique point when ${a1}${b2} − ${a2}${b1} ≠ 0. ${fr(a1, a2)} ≠ ${fr(b1, b2)}: intersecting; ${fr(a1, a2)} = ${fr(b1, b2)} ≠ ${fr(c1, c2)}: parallel and distinct (no point); all three ratios equal: coincident (infinitely many). When a coefficient is 0, cross-multiply: parallel or coincident ⟺ ${a1}${b2} = ${a2}${b1}`,
    why: `2${x} + 3${y} − 8 = 0 and ${x} − ${y} + 1 = 0: ${x} = ${y} − 1 gives 5${y} − 10 = 0, the point (1, 2).`,
    say: null,
  },
  // pp. 827–830, 832
  {
    topic: 4,
    kind: 'remember',
    q: `What does ${L1} + ${lam}${L2} = 0 represent, and which line does it miss?`,
    a: `For every ${lam}, a line through the junction <i>J</i> of ${L1} = 0 and ${L2} = 0: at <i>J</i> both are zero, so the combination is too. It gives every line through <i>J</i> except ${L2} = 0 itself (that would need ${lam} → ∞): test ${L2} separately when it might be the answer. Procedure: write ${L1} + ${lam}${L2} = 0 in the form <i>Ax</i> + <i>By</i> + ${C} = 0, impose the extra condition (a point, a slope, perpendicularity), solve for ${lam}, substitute back. <i>J</i> is never computed`,
    why: `Through ${x} + 2${y} − 5 = 0, 3${x} − ${y} + 1 = 0 and (2, 1): −1 + 6${lam} = 0, ${lam} = ${fr('1', '6')}, giving 9${x} + 11${y} − 29 = 0.`,
    say: 'Both zero ⇒ sum zero: why the family passes through the junction.',
  },
  // pp. 827–829, 831–832
  {
    topic: 4,
    kind: 'remember',
    q: 'How does the determinant of the coefficients test three lines for concurrency?',
    a: `If the lines <i>a</i><sub><i>i</i></sub>${x} + <i>b</i><sub><i>i</i></sub>${y} + <i>c</i><sub><i>i</i></sub> = 0 are concurrent at (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>), the system has the non-zero solution (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>, 1), so ${a1}(${b2}<i>c</i><sub>3</sub> − <i>b</i><sub>3</sub>${c2}) − ${b1}(${a2}<i>c</i><sub>3</sub> − <i>a</i><sub>3</sub>${c2}) + ${c1}(${a2}<i>b</i><sub>3</sub> − <i>a</i><sub>3</sub>${b2}) = 0. The converse (determinant 0 ⇒ concurrent) needs no two of the lines parallel: three mutually parallel lines also make it vanish, so after det = 0 check that no two are parallel`,
    why: `<i>ax</i> + 2${y} + 1 = 0, 2${x} + <i>ay</i> + 2 = 0, ${x} + ${y} − 1 = 0: det = 0 gives ${a} = −5 or 2, but at ${a} = 2 all three lines are parallel (the third, ${x} + ${y} − 1 = 0, too), so only ${a} = −5.`,
    say: 'Determinant dies ⇒ they meet (with the no-two-parallel caveat).',
  },
  // p. 831
  {
    topic: 4,
    kind: 'mixup',
    q: 'Parallel and distinct: a₁b₂ − a₂b₁ ≠ 0, all three ratios equal, or a₁a₂ + b₁b₂ = 0?',
    a: `None of them: ${fr(a1, a2)} = ${fr(b1, b2)} ≠ ${fr(c1, c2)}, equal direction ratios with a different constant ratio (cross-multiply when a coefficient is 0). ${a1}${b2} − ${a2}${b1} ≠ 0 is the intersecting condition, all three ratios equal is coincident, and ${a1}${a2} + ${b1}${b2} = 0 is the perpendicular condition`,
    why: `${x} − ${y} = 0 and ${x} + ${y} − 4 = 0 have ${a1}${b2} − ${a2}${b1} = 2 ≠ 0 and meet at (2, 2).`,
    say: null,
  },
  // pp. 829, 831
  {
    topic: 4,
    kind: 'mistake',
    q: `Are ${x} + ${y} − 2 = 0, 2${x} − ${y} − 1 = 0 and 4${x} − ${y} − 5 = 0 concurrent?`,
    a: `No: the determinant is 1[5 − 1] − 1[−10 + 4] − 2[−2 + 4] = 4 − (−6) − 4 = 6 ≠ 0. The trap is the sign of the middle term of the cofactor expansion: keep + − + explicit across the row. The other listed slips: skipping the parallel-check after det = 0, forgetting that the family misses ${L2} = 0, and solving for the intersection point when the family trick is faster`,
    why: 'The first two meet at (1, 1), and 4 − 1 − 5 = −2 ≠ 0: the third line misses that point.',
    say: null,
  },
  // pp. 830–831
  {
    topic: 4,
    kind: 'shortcut',
    q: `Find the line through the intersection of 2${x} − 3${y} + 4 = 0 and ${x} + ${y} − 3 = 0 that is parallel to the x-axis, fast.`,
    a: `Reach for the family at once: (2${x} − 3${y} + 4) + ${lam}(${x} + ${y} − 3) = 0. Parallel to the x-axis needs the ${x}-coefficient 2 + ${lam} = 0, so ${lam} = −2 and −5${y} + 10 = 0: ${y} = 2. Whenever a question says “line through the intersection of … and …”, finding the point first is almost always the slower path`,
    why: `Perpendicular to ${x} − 2${y} + 5 = 0 through the intersection of ${x} + 2${y} + 3 = 0 and 3${x} + 4${y} + 7 = 0: 2${x} + ${y} + 3 = 0.`,
    say: null,
  },

  // ── Topic 05 · Angle Bisectors of Two Lines ──
  // pp. 833–835, 838
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the equations of the angle bisectors of two intersecting lines, and why?',
    a: `${fr(`${a1}${x} + ${b1}${y} + ${c1}`, `√(${sq(a1)} + ${sq(b1)})`)} = ±${fr(`${a2}${x} + ${b2}${y} + ${c2}`, `√(${sq(a2)} + ${sq(b2)})`)}. A point is on a bisector exactly when it is equidistant from the two lines; removing the moduli gives the ±, and each sign gives a line. Each line keeps its own √(${sq(a)} + ${sq(b)})`,
    why: `3${x} − 4${y} + 7 = 0 and 5${x} + 12${y} − 2 = 0: ${fr(`3${x} − 4${y} + 7`, '5')} = ±${fr(`5${x} + 12${y} − 2`, '13')} gives 14${x} − 112${y} + 101 = 0 and 64${x} + 8${y} + 81 = 0.`,
    say: 'Equidistant = on the bisector.',
  },
  // pp. 833–835, 838
  {
    topic: 5,
    kind: 'remember',
    q: 'Which bisector contains the origin, and which is the acute-angle bisector?',
    a: `First rewrite both lines with positive constants, ${c1}, ${c2} > 0 (multiply by −1 where needed; the origin rule needs neither line through the origin). Then the “+” bisector is the one of the angle containing the origin, because forcing ${c1}, ${c2} > 0 puts the origin on the positive side of both. With those forms, ${a1}${a2} + ${b1}${b2} > 0 ⇒ “+” is the obtuse-angle bisector; ${a1}${a2} + ${b1}${b2} < 0 ⇒ “+” is the acute-angle bisector. If ${a1}${a2} + ${b1}${b2} = 0 the lines are perpendicular and acute or obtuse does not arise`,
    why: `${x} + ${y} − 2 = 0 as −${x} − ${y} + 2 = 0, with 7${x} − ${y} + 3 = 0: ${a1}${a2} + ${b1}${b2} = −6 < 0, so “+” is acute: 12${x} + 4${y} − 7 = 0.`,
    say: 'Positive constants first, then plus is the origin’s side.',
  },
  // pp. 833–837
  {
    topic: 5,
    kind: 'remember',
    q: 'How are the two bisectors of a pair of intersecting lines related?',
    a: `They are perpendicular: they bisect the two supplementary angles at the crossing, 2<i>α</i> and 2(90° − <i>α</i>), so their directions differ by exactly 90°. When both bisectors have slopes, ${m1}${m2} = −1; when one is vertical (the other then horizontal) there is no product to take. A free check on every bisector computation`,
    why: `14${x} − 112${y} + 101 = 0 (slope ${fr('1', '8')}) and 64${x} + 8${y} + 81 = 0 (slope −8): product −1. The bisectors of ${x} + ${y} = 0 and ${x} − ${y} = 0 are the axes, a perpendicular pair with one slope undefined.`,
    say: 'Bisectors cross at right angles (free check).',
  },
  // pp. 836–838
  {
    topic: 5,
    kind: 'mixup',
    q: 'With positive constants and a₁a₂ + b₁b₂ < 0, is the “+” bisector the obtuse one?',
    a: `No: the acute one. ${a1}${a2} + ${b1}${b2} > 0 ⇒ “+” obtuse; < 0 ⇒ “+” acute: write the rule down before deciding. The origin’s bisector is the “+” one either way; the sign of ${a1}${a2} + ${b1}${b2} only labels it acute or obtuse, which also says whether the origin lies in the acute or the obtuse angle`,
    why: `3${x} − 4${y} + 1 = 0 and 12${x} + 5${y} − 2 = 0 (rewritten −12${x} − 5${y} + 2 = 0): ${a1}${a2} + ${b1}${b2} = −16 < 0, so the origin lies in the acute angle.`,
    say: null,
  },
  // pp. 835, 837
  {
    topic: 5,
    kind: 'mistake',
    q: `For 4${x} + 3${y} − 6 = 0 and 5${x} + 12${y} + 9 = 0, is the “+” bisector, taken as written, the origin’s?`,
    a: `No: the first constant is −6. Rewrite it as −4${x} − 3${y} + 6 = 0, then take “+”: ${fr(`−4${x} − 3${y} + 6`, '5')} = ${fr(`5${x} + 12${y} + 9`, '13')}, giving 7${x} + 9${y} − 3 = 0. Skipping that normalisation is the single most common error here. The other listed slips: reversing the acute/obtuse rule, skipping the perpendicularity check, and sharing one denominator across both lines`,
    why: `13(−4${x} − 3${y} + 6) = 5(5${x} + 12${y} + 9) gives 77${x} + 99${y} − 33 = 0, i.e. 11(7${x} + 9${y} − 3) = 0.`,
    say: null,
  },
  // pp. 836–837
  {
    topic: 5,
    kind: 'shortcut',
    q: 'In a bisector question, what do you compute first?',
    a: `Make both constants positive and take “+” for the origin’s angle: memorise that single anchor. Use ${a1}${a2} + ${b1}${b2} only when the question asks acute versus obtuse: compute what is asked, not everything`,
    why: `${x} − 2${y} + 1 = 0 and 2${x} + ${y} − 3 = 0 (as −2${x} − ${y} + 3 = 0): “+” gives ${x} − 2${y} + 1 = −2${x} − ${y} + 3, i.e. 3${x} − ${y} − 2 = 0.`,
    say: null,
  },

  // ── Topic 06 · Foot of Perpendicular, Image & Reflection ──
  // pp. 839–840, 842, 845
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the foot Q of the perpendicular from P(x₁, y₁) to ax + by + c = 0?',
    a: `${P}${Q} runs along the normal (${a}, ${b}), so ${Q} = (${x1} + <i>ta</i>, ${y1} + <i>tb</i>), and putting ${Q} on the line gives ${t} = −${fr(`<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + ${c}`, `${sq(a)} + ${sq(b)}`)}. As ratios (for ${a}, ${b} ≠ 0), ${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${t}. The denominator is ${sq(a)} + ${sq(b)} with no square root; ${t} is the signed step along the normal, and the distance is |${t}|√(${sq(a)} + ${sq(b)})`,
    why: `${P}(2, 3) and ${x} + ${y} − 1 = 0: ${t} = −${fr('4', '2')} = −2, so ${Q} = (0, 1).`,
    say: 'One step to the foot, two steps to the mirror.',
  },
  // pp. 839–840, 842–843, 845
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the image P′ of P in the line, and how is it related to the foot?',
    a: `The foot ${Q} is the midpoint of ${P} and ${P}′, so ${P}′ = 2${Q} − ${P} = ${P} + 2${t}(${a}, ${b}): ${fr(`<i>x</i>′ − ${x1}`, a)} = ${fr(`<i>y</i>′ − ${y1}`, b)} = −${fr(`2(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + ${c})`, `${sq(a)} + ${sq(b)}`)}, exactly double the foot’s step. ${P}${P}′ is perpendicular to the line, and ${P}′ sits as far behind it as ${P} is in front`,
    why: `${P}(1, 1) in 3${x} − 4${y} + 5 = 0: 2${t} = −${fr('8', '25')}, so ${P}′ = (${fr('1', '25')}, ${fr('57', '25')}), and both points are 0.8 from the line.`,
    say: 'Foot uses <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>; distance uses the square root.',
  },
  // pp. 839–840, 842–843, 845
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the images in y = x and in the axes, and how do you reflect a line in a line?',
    a: `In ${y} = ${x}: (${x}, ${y}) → (${y}, ${x}); in the x-axis: (${x}, −${y}); in the y-axis: (−${x}, ${y}); in ${x} + ${y} = 0: (−${y}, −${x}). For these, use the swap or sign shortcut, not the general formula. To reflect a line ${m} in a line ℓ: reflect two of its points (its intercepts, say) and join the images; if ${m} meets ℓ, the reflection passes through that meeting point too, so one image point plus the intersection suffices`,
    why: `The image of (4, −1) in ${y} = ${x} is (−1, 4); the reflection of 2${x} − ${y} + 3 = 0 in ${y} = ${x} is ${x} − 2${y} − 3 = 0.`,
    say: '<i>y</i> = <i>x</i>? Just swap.',
  },
  // pp. 844–845
  {
    topic: 6,
    kind: 'mixup',
    q: 'Foot or image: which carries the factor 2, and which is the midpoint?',
    a: `The image uses −${fr(`2(<i>ax</i><sub>1</sub> + <i>by</i><sub>1</sub> + ${c})`, `${sq(a)} + ${sq(b)}`)}, twice the foot’s step: drop the 2 and you land on the line instead of behind it. The foot is the midpoint of the point and its image (not twice the image); the two coincide only when ${P} is on the line`,
    why: `Foot from (1, 2) to 4${x} − 3${y} − 1 = 0: ${t} = ${fr('3', '25')}, foot (${fr('37', '25')}, ${fr('41', '25')}).`,
    say: null,
  },
  // pp. 839, 844–845
  {
    topic: 6,
    kind: 'mistake',
    q: 'To reflect a line m in a line ℓ, can you negate m’s equation, add the two equations, or swap x and y?',
    a: `No: negating and adding are meaningless here, and swapping ${x} and ${y} works only for the mirror ${y} = ${x}. Reflect points and rejoin, the safe default; guessing at coefficients fails, but substituting the reflection map into the equation of ${m} is valid for any mirror (for the axes, ${y} → −${y} or ${x} → −${x}). The other listed slips: dropping the factor 2 for the image, grinding the general formula for a special mirror, and ${sq(a)} + ${sq(b)} confused with √(${sq(a)} + ${sq(b)})`,
    why: `The image of (3, 4) in ${x} + ${y} = 0 is (−4, −3), by (${x}, ${y}) → (−${y}, −${x}).`,
    say: null,
  },
  // pp. 843, 845
  {
    topic: 6,
    kind: 'shortcut',
    q: 'How do you reflect a line in a mirror it crosses with only one image point?',
    a: 'The reflected line passes through the intersection point and through the image of any single point of the original: join those two. That halves the work of reflecting two points',
    why: `Ray ${x} − 2${y} + 5 = 0 on the mirror 3${x} − 4${y} + 4 = 0: incidence <i>I</i>(6, ${fr('11', '2')}); ${A}(−5, 0) reflects to (−${fr('59', '25')}, −${fr('88', '25')}); the reflected ray is 41${x} − 38${y} − 37 = 0.`,
    say: null,
  },

  // ── Topic 07 · Triangle Centres in Coordinates ──
  // pp. 847–849, 859
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the centroid and the incentre of a triangle, and what are a, b, c in the incentre formula?',
    a: `${G} = (${fr(`${x1} + ${x2} + ${x3}`, '3')}, ${fr(`${y1} + ${y2} + ${y3}`, '3')}), where the medians meet; it divides each median 2 ∶ 1 from the vertex. ${In} = (${fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `${a} + ${b} + ${c}`)}, ${fr(`<i>ay</i><sub>1</sub> + <i>by</i><sub>2</sub> + <i>cy</i><sub>3</sub>`, `${a} + ${b} + ${c}`)}), where the internal bisectors meet, with ${a} = <i>BC</i>, ${b} = <i>CA</i>, ${c} = <i>AB</i>, the sides opposite ${A}, ${B}, ${C} (${a} is not the side that starts at ${A}). Inradius ${r} = ${fr('Δ', s)}, ${s} = ${fr(`${a} + ${b} + ${c}`, '2')}. ${G} and ${In} are always inside`,
    why: `${A}(0, 0), ${B}(4, 0), ${C}(0, 3): ${a} = 5, ${b} = 3, ${c} = 4, ${In} = (${fr('12', '12')}, ${fr('12', '12')}) = (1, 1), and ${r} = ${fr('6', '6')} = 1.`,
    say: 'Opposite, always opposite: the incentre weight <i>a</i> sits opposite vertex <i>A</i>.',
  },
  // pp. 849, 852–853, 859
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you get the excentre opposite A, and its radius?',
    a: `Flip the sign of the weight ${a}, top and bottom: ${IA} = ${fr(`−<i>a</i><b>A</b> + <i>b</i><b>B</b> + <i>c</i><b>C</b>`, `−${a} + ${b} + ${c}`)} coordinate by coordinate (cyclically <i>I</i><sub>B</sub>, <i>I</i><sub>C</sub>), radius ${rA} = ${fr('Δ', `${s} − ${a}`)}. ${IA} is where the internal bisector at ${A} meets the external bisectors at ${B} and ${C}. The denominators are 2(${s} − ${a}), 2(${s} − ${b}), 2(${s} − ${c}), positive by the triangle inequality, so the excentres always exist, and each lies outside`,
    why: `${A}(0, 0), ${B}(4, 0), ${C}(0, 3): ${IA} = (${fr('12', '2')}, ${fr('12', '2')}) = (6, 6), at distance 6 from all three side-lines, and ${rA} = ${fr('6', '1')} = 6.`,
    say: null,
  },
  // pp. 849, 853, 859
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you find the circumcentre and the orthocentre from three vertices?',
    a: `Circumcentre ${O}, equidistant from the vertices: write <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup> and <i>OB</i><sup>2</sup> = <i>OC</i><sup>2</sup>; the ${sq(x)} and ${sq(y)} terms cancel, leaving two linear equations; then <i>R</i><sup>2</sup> = <i>OA</i><sup>2</sup>, and <i>R</i> = ${fr('<i>abc</i>', '4Δ')}. Orthocentre ${H}: intersect two altitudes, each perpendicular to the opposite side (slope −${fr('1', m)} for a side of slope ${m}); the third passes through by concurrency. A horizontal side has a vertical altitude and a vertical side a horizontal one: by inspection. Check for a right angle first`,
    why: `${A}(5, 7), ${B}(−2, 6), ${C}(2, −2): 7${x} + ${y} = 17 and ${x} − 2${y} = −4 give ${O} = (2, 3), <i>R</i> = 5.`,
    say: 'Square it, don’t root it: the circumcentre from <i>OA</i><sup>2</sup> = <i>OB</i><sup>2</sup>.',
  },
  // pp. 847, 849, 852, 859
  {
    topic: 7,
    kind: 'remember',
    q: 'How are the circumcentre O, the centroid G and the orthocentre H related?',
    a: `${H} = 3${G} − 2${O} = ${A} + ${B} + ${C} − 2${O}: with ${O} as origin, |${A}| = |${B}| = |${C}| = <i>R</i> puts ${A} + ${B} + ${C} on every altitude, and ${G} = ${fr('1', '3')}${H}. For a non-equilateral triangle ${O}, ${G}, ${H} lie on the Euler line with <i>OG</i> ∶ <i>GH</i> = 1 ∶ 2, ${G} next to ${O}; in an equilateral triangle all four centres coincide and no line is determined. The incentre is on the Euler line only in an isosceles (not equilateral) triangle, by symmetry`,
    why: `${O} = (1, 2), ${G} = (2, 3): ${H} = (6 − 2, 9 − 4) = (4, 5).`,
    say: '<i>O</i>, <i>G</i>, <i>H</i>: one, two: <i>G</i> is the near neighbour of <i>O</i> on the Euler line.',
  },
  // pp. 847, 853, 857–859
  {
    topic: 7,
    kind: 'remember',
    q: 'Which centres lie inside the triangle, and where are H and O in a right triangle?',
    a: `${G} and ${In} always inside; ${O} and ${H} inside only for an acute triangle, both outside for an obtuse one; every excentre outside. Right angle at ${C}: ${H} = ${C} (two of the altitudes are the legs) and ${O} is the midpoint of the hypotenuse <i>AB</i>`,
    why: `${A}(0, 0), ${B}(6, 0), ${C}(0, 8) is right-angled at ${A}: ${H} = ${A}, ${O} = (3, 4), <i>R</i> = 5.`,
    say: 'Right angle? Orthocentre’s already there.',
  },
  // pp. 855–856, 858–859
  {
    topic: 7,
    kind: 'mixup',
    q: 'On the Euler line, is OG ∶ GH equal to 2 ∶ 1, like the median?',
    a: `No: <i>OG</i> ∶ <i>GH</i> = 1 ∶ 2, the short piece next to ${O}. The 2 ∶ 1 of the median is measured from the vertex. Nor is ${G} the midpoint of <i>OH</i>: that would need ${H} = 2${G} − ${O}`,
    why: `${A}(0, 0), ${B}(4, 0), ${C}(1, 3): ${H} = (1, 1), ${G} = (${fr('5', '3')}, 1), ${O} = (2, 1), so <i>HG</i> = ${fr('2', '3')} and <i>GO</i> = ${fr('1', '3')}.`,
    say: null,
  },
  // pp. 855, 858–859
  {
    topic: 7,
    kind: 'mistake',
    q: `Is the incentre of ${A}(0, 0), ${B}(12, 0), ${C}(0, 5) the point (${fr('26', '5')}, ${fr('5', '6')})?`,
    a: `No: (2, 2). That point pairs each vertex with the side that starts at it (${a} = <i>AB</i> = 12, ${b} = <i>BC</i> = 13, ${c} = <i>CA</i> = 5), and it still lands inside the triangle. With ${a} = <i>BC</i> = 13, ${b} = <i>CA</i> = 5, ${c} = <i>AB</i> = 12: ${In} = (${fr('60', '30')}, ${fr('60', '30')}). With two sides on the axes, ${In} = (${r}, ${r}): unequal coordinates expose the slip. The other listed slips: negating only the numerator for an excentre, taking square roots for the circumcentre, computing the third altitude, assuming every centre is inside, and hunting for the Euler line of an equilateral triangle`,
    why: `${r} = ${fr('Δ', s)} = ${fr('30', '15')} = 2; Δ over the whole perimeter is the inradius slip.`,
    say: null,
  },
  // pp. 853, 856, 859
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How do you avoid computing both the circumcentre and the orthocentre?',
    a: `${G} is free (one addition): compute ${G} and whichever of ${O} and ${H} is cheaper, then get the third from ${H} = 3${G} − 2${O}; if two centres are given, that relation is the whole solution. Screen first for a right angle with one dot product per vertex (<i>CA⃗</i> · <i>CB⃗</i> = 0 at ${C}): then ${H} and ${O} are known at once`,
    why: `${A}(5, 7), ${B}(−2, 6), ${C}(2, −2): ${O} = (2, 3), ${G} = (${fr('5', '3')}, ${fr('11', '3')}), so ${H} = (5 − 4, 11 − 6) = (1, 5), and the Euler line is 2${x} + ${y} − 7 = 0.`,
    say: null,
  },

  // ── Topic 08 · Pair of Straight Lines ──
  // pp. 877–879, 881, 893–894
  {
    topic: 8,
    kind: 'remember',
    q: 'What does ax² + 2hxy + by² = 0 represent, and what decides its nature?',
    a: `A pair of lines through the origin, ${y} = ${m1}${x} and ${y} = ${m2}${x}, their slopes the roots of <i>bm</i><sup>2</sup> + 2<i>hm</i> + ${a} = 0: ${m1} + ${m2} = −${fr(`2${h}`, b)}, ${m1}${m2} = ${fr(a, b)} (${b} ≠ 0; if ${b} = 0 the equation is ${x}(<i>ax</i> + 2<i>hy</i>) = 0 and one line is ${x} = 0). ${h} is half the coefficient of <i>xy</i>. ${sq(h)} > <i>ab</i>: real and distinct; ${sq(h)} = <i>ab</i>: coincident (a perfect square); ${sq(h)} < <i>ab</i>: the graph is the origin alone`,
    why: `${sq(x)} − 5<i>xy</i> + 6${sq(y)} = (${x} − 2${y})(${x} − 3${y}): ${h} = −${fr('5', '2')}, ${H2AB} = ${fr('25', '4')} − 6 = ${fr('1', '4')} > 0, slopes ${fr('1', '2')} and ${fr('1', '3')}.`,
    say: 'Halve the odd ones out: <i>h</i>, <i>g</i>, <i>f</i> carry a hidden 2; <i>a</i>, <i>b</i>, <i>c</i> do not.',
  },
  // pp. 878–879, 881–882, 893
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the angle between the lines of ax² + 2hxy + by² = 0, and when are they perpendicular or coincident?',
    a: `tan ${th} = |${fr(`2√(${H2AB})`, `${a} + ${b}`)}| (Vieta in tan ${th} = |${fr(`${m1} − ${m2}`, `1 + ${m1}${m2}`)}|; the ${b} cancels). ${a} + ${b} = 0 ⟺ perpendicular; ${sq(h)} = <i>ab</i> ⟺ coincident. The pair through the origin perpendicular to it is <i>bx</i><sup>2</sup> − 2<i>hxy</i> + <i>ay</i><sup>2</sup> = 0 (swap ${a} and ${b}, flip the sign of ${h}). For a general pair the linear terms do not change the angle`,
    why: `3${sq(x)} + 8<i>xy</i> − 3${sq(y)} = 0: ${a} + ${b} = 0, so the lines 3${x} − ${y} = 0 and ${x} + 3${y} = 0 are perpendicular.`,
    say: '<i>h</i><sup>2</sup> versus <i>ab</i> decides whether; <i>a</i> + <i>b</i> decides what angle.',
  },
  // pp. 880, 882, 888, 893
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the bisectors of the angles between the lines ax² + 2hxy + by² = 0?',
    a: `${fr(`${sq(x)} − ${sq(y)}`, `${a} − ${b}`)} = ${fr('<i>xy</i>', h)}, i.e. <i>hx</i><sup>2</sup> − (${a} − ${b})<i>xy</i> − <i>hy</i><sup>2</sup> = 0; the cross-multiplied form also covers ${a} = ${b} (${sq(x)} − ${sq(y)} = 0) and ${h} = 0 (<i>xy</i> = 0). Its ${sq(x)} and ${sq(y)} coefficients sum to 0, so the bisectors are perpendicular, and they are real for every pair except ${a} = ${b} with ${h} = 0, where the equation is ${a}(${sq(x)} + ${sq(y)}) = 0 and there is nothing to bisect. The formula is about pairs through the origin: for a pair meeting at (<i>α</i>, <i>β</i>), write ${x} − <i>α</i>, ${y} − <i>β</i> in place of ${x}, ${y}`,
    why: `6${sq(x)} + 5<i>xy</i> − 6${sq(y)} = 0: ${fr(`${sq(x)} − ${sq(y)}`, '12')} = ${fr('2<i>xy</i>', '5')} gives 5${sq(x)} − 24<i>xy</i> − 5${sq(y)} = 0.`,
    say: 'Bisectors: swap the <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> block over <i>a</i> − <i>b</i>, the <i>xy</i> over <i>h</i>, and they always cross at 90°.',
  },
  // pp. 880, 882–883, 893–894
  {
    topic: 8,
    kind: 'remember',
    q: 'When does ax² + 2hxy + by² + 2gx + 2fy + c = 0 represent a pair of lines, and where do they meet?',
    a: `With ${h}, ${g}, ${f} the halves of the <i>xy</i>, ${x}, ${y} coefficients: Δ ≡ <i>abc</i> + 2<i>fgh</i> − <i>af</i><sup>2</sup> − <i>bg</i><sup>2</sup> − <i>ch</i><sup>2</sup> = 0 (for lines meeting at (<i>α</i>, <i>β</i>), a shift there makes the equation homogeneous, so <i>ax</i> + <i>hy</i> + ${g} = 0, <i>hx</i> + <i>by</i> + ${f} = 0 and <i>gx</i> + <i>fy</i> + ${c} = 0 are concurrent). Δ = 0 means degenerate, not real: check ${sq(h)} ≥ <i>ab</i> as well (and, for a parallel pair, ${sq(g)} ≥ <i>ac</i> and ${sq(f)} ≥ <i>bc</i>). They meet at (${fr(`<i>hf</i> − <i>bg</i>`, `<i>ab</i> − ${sq(h)}`)}, ${fr(`<i>gh</i> − <i>af</i>`, `<i>ab</i> − ${sq(h)}`)}) when <i>ab</i> ≠ ${sq(h)}; ${sq(h)} = <i>ab</i> gives a parallel (or coincident) pair`,
    why: `2${sq(x)} + 5<i>xy</i> + 3${sq(y)} + 6${x} + 7${y} + ${lam} = 0 (${h} = ${fr('5', '2')}, ${g} = 3, ${f} = ${fr('7', '2')}): Δ = 0 gives ${lam} = 4, the lines 2${x} + 3${y} + 4 = 0 and ${x} + ${y} + 1 = 0, meeting at (1, −2).`,
    say: 'Δ = 0 means degenerate, not real: check <i>h</i><sup>2</sup> ≥ <i>ab</i> too.',
  },
  // pp. 880, 884, 886–887, 893–894
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you get the joint equation of the lines joining the origin to the points where lx + my + n = 0 meets S = 0?',
    a: `Homogenise. It needs ${n} ≠ 0 (a line through the origin makes the question degenerate). Write the line as ${fr(`<i>lx</i> + <i>my</i>`, `−${n}`)} = 1; in ${S} multiply the linear terms 2<i>gx</i> + 2<i>fy</i> by it and the constant ${c} by its square, leave the second-degree terms alone, and clear denominators. The result <i>Ax</i><sup>2</sup> + 2<i>Hxy</i> + <i>By</i><sup>2</sup> = 0 is the pair <i>OP</i>, <i>OQ</i>: perpendicular at ${O} iff ${A} + ${B} = 0, and ∠<i>POQ</i> = ${ATAN}|${fr(`2√(${sq(H)} − <i>AB</i>)`, `${A} + ${B}`)}|`,
    why: `${y} = 2${x} + ${c} and ${sq(x)} + ${sq(y)} = 5: (${sq(c)} − 20)${sq(x)} + 20<i>xy</i> + (${sq(c)} − 5)${sq(y)} = 0, and a right angle at ${O} needs 2${sq(c)} = 25, ${c} = ±${fr('5', '√2')}.`,
    say: 'Make the line equal one, then make the curve homogeneous.',
  },
  // pp. 880, 889, 894
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the area of the triangle formed by ax² + 2hxy + by² = 0 and lx + my + n = 0, and the distance between a parallel pair?',
    a: `Area = ${fr(`<i>n</i><sup>2</sup>√(${H2AB})`, `|<i>am</i><sup>2</sup> − 2<i>hlm</i> + <i>bl</i><sup>2</sup>|`)}. Product of the perpendicular distances from (${x1}, ${y1}) to the pair: ${fr(`|<i>ax</i><sub>1</sub><sup>2</sup> + 2<i>hx</i><sub>1</sub><i>y</i><sub>1</sub> + <i>by</i><sub>1</sub><sup>2</sup>|`, `√((${a} − ${b})<sup>2</sup> + 4${sq(h)})`)}. A parallel pair (${sq(h)} = <i>ab</i>, Δ = 0) has its lines 2√(${fr(`${sq(g)} − <i>ac</i>`, `${a}(${a} + ${b})`)}) apart (2√(${fr(`${sq(f)} − <i>bc</i>`, `${b}(${a} + ${b})`)}) when ${a} = 0)`,
    why: `${sq(x)} − 4<i>xy</i> + ${sq(y)} = 0 with ${x} + ${y} = 1: area ${fr('√3', '6')}. 9${sq(x)} + 24<i>xy</i> + 16${sq(y)} − 12${x} − 16${y} − 12 = 0: lines 3${x} + 4${y} + 2 = 0 and 3${x} + 4${y} − 6 = 0, ${fr('8', '5')} apart.`,
    say: null,
  },
  // pp. 878, 890–891, 893
  {
    topic: 8,
    kind: 'mixup',
    q: 'For a pair of lines, which condition is perpendicular, which coincident, and which real and distinct?',
    a: `${a} + ${b} = 0 (coefficient of ${sq(x)} plus coefficient of ${sq(y)}): perpendicular, a statement about the angle. ${sq(h)} = <i>ab</i>: coincident (for the general equation, parallel or coincident). ${sq(h)} > <i>ab</i>: real and distinct; ${sq(h)} < <i>ab</i>: the origin only. A zero denominator ${a} + ${b} in tan ${th} is information, not failure: ${th} = 90°`,
    why: `3${sq(x)} + 8<i>xy</i> − 3${sq(y)} = 0: ${H2AB} = 16 + 9 = 25 > 0, and ${a} + ${b} = 0, so perpendicular, not 45°.`,
    say: null,
  },
  // pp. 885–886, 892
  {
    topic: 8,
    kind: 'mistake',
    q: `For 2${sq(x)} + 5<i>xy</i> + 3${sq(y)} + 6${x} + 7${y} + ${lam} = 0 to be a pair, is ${lam} = 16?`,
    a: `No: ${lam} = 4. 16 comes from feeding Δ the raw ${g} = 6 and ${f} = 7 instead of their halves 3 and ${fr('7', '2')}: the one slip that corrupts Δ, the angle, the meeting point and the bisectors at once. Write the six numbers ${a}, ${b}, ${c}, ${h}, ${g}, ${f} in a labelled row, halving as you go. The other listed slips: Δ = 0 taken as proof of real lines (${sq(x)} + ${sq(y)} = 0 and ${sq(x)} + 1 = 0 both have Δ = 0), dividing by zero in the bisector formula (cross-multiply first), homogenising with a line not written as “= 1” or through the origin, using ${m1} + ${m2} = −${fr(`2${h}`, b)} when ${b} = 0, and a “pair through the origin” with linear or constant terms`,
    why: `The factorisation (2${x} + 3${y} + ${p})(${x} + ${y} + <i>q</i>) forces ${p} = 4, <i>q</i> = 1, so the constant can only be <i>pq</i> = 4.`,
    say: null,
  },
  // pp. 888, 892
  {
    topic: 8,
    kind: 'mistake',
    q: `Are the bisectors of the pair 3${sq(x)} + 5<i>xy</i> − 2${sq(y)} − 16${x} + 3${y} + 5 = 0 given by ${sq(x)} − 2<i>xy</i> − ${sq(y)} = 0?`,
    a: `No: that applies the origin formula to a pair that does not pass through the origin, and gives lines parallel to the true bisectors but not equal to them. The pair meets at (1, 2): with ${X} = ${x} − 1, ${Y} = ${y} − 2 the bisectors are ${sq(X)} − 2<i>XY</i> − ${sq(Y)} = 0, i.e. ${sq(x)} − 2<i>xy</i> − ${sq(y)} + 2${x} + 6${y} − 7 = 0`,
    why: `The same answer comes from separating the lines, 3${x} − ${y} − 1 = 0 and ${x} + 2${y} − 5 = 0, and using the two-line bisector formula.`,
    say: null,
  },
  // pp. 892–893
  {
    topic: 8,
    kind: 'shortcut',
    q: 'Are the lines of a second-degree equation perpendicular, and where do they meet? Answer both fast.',
    a: `Perpendicular ⟺ coefficient of ${sq(x)} plus coefficient of ${sq(y)} = 0, for a homogeneous pair, a general pair or a homogenised one. Meeting point: differentiate ${S} with respect to ${x} (treating ${y} as constant) and to ${y}, set both to zero and solve the linear pair, instead of recalling the formula with its sign traps. Factorise only as the final check`,
    why: `2${sq(x)} + 5<i>xy</i> + 3${sq(y)} + 6${x} + 7${y} + 4 = 0: ${fr(`∂${S}`, `∂${x}`)} = 4${x} + 5${y} + 6 = 0 and ${fr(`∂${S}`, `∂${y}`)} = 5${x} + 6${y} + 7 = 0 give (1, −2).`,
    say: null,
  },

  // ── Additional topic A · Areas: a line with the axes, and three lines together ──
  // p. 860
  {
    topic: 9,
    kind: 'remember',
    q: 'What area does the line Ax + By + C = 0 cut off with the coordinate axes?',
    a: `With ${A}, ${B}, ${C} all non-zero it meets the axes at (−${fr(C, A)}, 0) and (0, −${fr(C, B)}), and with the origin bounds a right triangle whose legs are the intercepts: Δ = ${HALF}|${a}||${b}| = ${fr(sq(C), `2|<i>AB</i>|`)}. If ${C} = 0 the line passes through the origin, and if ${A} = 0 or ${B} = 0 it is parallel to an axis: no triangle in either case`,
    why: `${HALF} · ${fr(`|${C}|`, `|${A}|`)} · ${fr(`|${C}|`, `|${B}|`)} = ${fr(sq(C), `2|<i>AB</i>|`)}.`,
    say: 'Read the intercepts by setting <i>y</i> = 0 and then <i>x</i> = 0: the signs take care of themselves and the modulus finishes the job.',
  },
  // pp. 860–861
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you find the area of the triangle formed by three given lines?',
    a: `Solve the three pairs of lines for the three vertices, then use Δ = ${HALF}|${x1}(${y2} − ${y3}) + ${x2}(${y3} − ${y1}) + ${x3}(${y1} − ${y2})|`,
    why: `${y} = ${x}, ${y} = 2${x}, ${x} + ${y} = 6: vertices (0, 0), (3, 3), (2, 4), and Δ = ${HALF}|0 + 12 − 6| = 3.`,
    say: null,
  },
  // p. 860
  {
    topic: 9,
    kind: 'mixup',
    q: 'Three concurrent lines, or three lines two of which are parallel: why is there no triangle in each case?',
    a: 'Concurrent lines: the three “vertices” are one point, and the area formula returns 0, which is the correct answer, not an error. Two parallel lines: that pair never meets, so a vertex is missing and the method stops before the area step',
    why: `${y} = ${x} + 1, ${y} = −${x} + 5 and ${y} = 0 have no two parallel and are not concurrent: vertices (2, 3), (−1, 0), (5, 0), area 9.`,
    say: null,
  },
  // pp. 860–861
  {
    topic: 9,
    kind: 'mistake',
    q: `For 3${x} − 4${y} + 12 = 0, is the area with the axes ${HALF}(−4)(3) = −6?`,
    a: `No: 6. The intercepts are −4 and 3, but the legs are their lengths, |−4| = 4 and |3| = 3, so Δ = ${HALF}(4)(3) = 6. In ${fr(sq(C), `2|<i>AB</i>|`)} the modulus sits on <i>AB</i>`,
    why: `${fr('12<sup>2</sup>', '2 · |3 × (−4)|')} = ${fr('144', '24')} = 6.`,
    say: null,
  },
  // p. 861
  {
    topic: 9,
    kind: 'shortcut',
    q: `Find the area of the triangle formed by 5${x} + 3${y} − 15 = 0 and the axes in one line.`,
    a: `${fr(sq(C), `2|<i>AB</i>|`)} = ${fr('15<sup>2</sup>', '2 · 15')} = 7.5 square units, with no intercepts to find`,
    why: `Check: the intercepts are 3 and 5, and ${HALF}(3)(5) = ${fr('15', '2')}.`,
    say: null,
  },

  // ── Additional topic B · The fixed point of a one-parameter family of lines ──
  // p. 862
  {
    topic: 10,
    kind: 'remember',
    q: `How do you find the fixed point of the family (${a1} + ${lam}${a2})${x} + (${b1} + ${lam}${b2})${y} + (${c1} + ${lam}${c2}) = 0?`,
    a: `Regroup by powers of ${lam}: (${a1}${x} + ${b1}${y} + ${c1}) + ${lam}(${a2}${x} + ${b2}${y} + ${c2}) = 0, i.e. ${L1} + ${lam}${L2} = 0. For one point to satisfy this for every ${lam}, both brackets must vanish: solve ${L1} = 0 and ${L2} = 0 together. The fixed point is the junction of the two base lines`,
    why: `(2 + ${lam})${x} + (1 − 3${lam})${y} + (${lam} − 5) = 0 is (2${x} + ${y} − 5) + ${lam}(${x} − 3${y} + 1) = 0: the fixed point is (2, 1).`,
    say: 'For a point to satisfy this for every value of <i>λ</i>, the coefficient of <i>λ</i> and the <i>λ</i>-free part must vanish separately.',
  },
  // pp. 862–863
  {
    topic: 10,
    kind: 'remember',
    q: 'What must hold for the fixed-point method, and what if two parameters appear?',
    a: `${L1} and ${L2} must meet in one point: if they are proportional every member is the same line, and if they are parallel every member is parallel to them, with no fixed point. With two parameters, group by each in turn and set every group to zero`,
    why: `(2${a} + ${b})${x} + (${a} + 3${b})${y} + (2${b} − ${a}) = 0 is ${a}(2${x} + ${y} − 1) + ${b}(${x} + 3${y} + 2) = 0: the fixed point is (1, −1).`,
    say: null,
  },
  // pp. 862, 870
  {
    topic: 10,
    kind: 'mixup',
    q: 'The family theorem forwards and backwards: what is given, and what is found?',
    a: `Forwards: given two base lines, ${L1} + ${lam}${L2} = 0 sweeps out every line through their junction. Backwards: given one line whose coefficients are linear in a parameter, regroup to uncover ${L1} and ${L2}; their junction is the fixed point every member passes through`,
    why: `${x} + <i>my</i> = 1 is (${x} − 1) + ${m}(${y}) = 0: every member passes through (1, 0).`,
    say: null,
  },
  // p. 862
  {
    topic: 10,
    kind: 'mistake',
    q: 'Once L₁ = 0 and L₂ = 0 are solved, is the fixed point certain?',
    a: `Only if ${L1} and ${L2} are genuine lines that meet (neither proportional nor parallel). Then verify by putting the point back into the original equation: the ${lam} terms must cancel identically, for every ${lam}, not just for one or two values`,
    why: `(2, 1) in (2 + ${lam})${x} + (1 − 3${lam})${y} + (${lam} − 5): 4 + 2${lam} + 1 − 3${lam} + ${lam} − 5 = 0 for all ${lam}.`,
    say: null,
  },
  // pp. 862–863
  {
    topic: 10,
    kind: 'shortcut',
    q: `Show that (2 + ${lam})${x} + (1 − ${lam})${y} + (${lam} − 4) = 0 always passes through a fixed point, fast.`,
    a: `Regroup: (2${x} + ${y} − 4) + ${lam}(${x} − ${y} + 1) = 0. Solving 2${x} + ${y} = 4 and ${x} − ${y} = −1 gives (1, 2): no need to draw two members and intersect them`,
    why: `Check: (2 + ${lam})(1) + (1 − ${lam})(2) + (${lam} − 4) = 0 for all ${lam}.`,
    say: null,
  },

  // ── Additional topic C · Ratio in which a line divides a segment, and the side test ──
  // p. 863
  {
    topic: 11,
    kind: 'remember',
    q: 'How does L(x, y) = Ax + By + C tell you whether the line L = 0 cuts the segment PQ?',
    a: `${L} is positive on one side of the line and negative on the other (the signed distance before the modulus). ${L}(${P}) and ${L}(${Q}) of the same sign: same side, the line misses ${P}${Q}; opposite signs: the line separates them and cuts ${P}${Q}; either value zero: that point is on the line`,
    why: `2${x} + 3${y} − 12 at ${A}(1, 2) is −4 and at ${B}(5, 6) is 16: opposite sides.`,
    say: null,
  },
  // p. 863
  {
    topic: 11,
    kind: 'remember',
    q: 'In what ratio does the line L = 0 divide the segment PQ?',
    a: `${fr(`<i>PX</i>`, `<i>XQ</i>`)} = −${fr(`${L}(${P})`, `${L}(${Q})`)}, ${X} the point of division. ${L} is first-degree, so if ${X} divides ${P}${Q} in ${m} ∶ ${n}, ${L}(${X}) = ${fr(`<i>m</i><i>L</i>(${Q}) + <i>n</i><i>L</i>(${P})`, `${m} + ${n}`)}, the section formula’s weighted average; ${L}(${X}) = 0 gives ${m} ∶ ${n} = −${L}(${P}) ∶ ${L}(${Q})`,
    why: `${A}(1, 2), ${B}(5, 6) and 2${x} + 3${y} − 12 = 0: −${fr('−4', '16')} = ${fr('1', '4')}, and ${X} = (${fr('9', '5')}, ${fr('14', '5')}) lies on the line.`,
    say: 'Read the sign of the answer, do not discard it.',
  },
  // pp. 863–865
  {
    topic: 11,
    kind: 'mixup',
    q: 'A positive or a negative ratio −L(P) ∶ L(Q): what does each say?',
    a: 'Positive: internal division, so the points are on opposite sides (the side test and the ratio always agree). Negative: external division, same side. −1: external division in the ratio 1 ∶ 1, the point at infinity: the line is parallel to the segment and never meets it',
    why: `4${x} − 3${y} + 2 at (2, −1) and (5, 3) is 13 both times: ratio −1, and the segment’s direction (3, 4) is perpendicular to the normal (4, −3).`,
    say: 'Positive ratio ⇒ internal division ⇒ the points are on opposite sides.',
  },
  // pp. 863–864
  {
    topic: 11,
    kind: 'mistake',
    q: 'To show the origin is inside a triangle, is it enough that L(O) has the same sign for all three side-lines?',
    a: `No: the sign of ${L} depends on how each line is written. For each side, compare the sign of ${L} at the origin with its sign at the opposite vertex: if all three comparisons agree, the origin is inside; a single disagreement puts it outside, and a zero puts it on that side. “Inside” means on the same side of each side-line as the remaining vertex`,
    why: `${P}(3, 1), ${Q}(−2, 2), ${R}(0, −3): ${x} + 5${y} − 8 gives −23 at ${R} and −8 at ${O}; 5${x} + 2${y} + 6 gives 23 at ${P} and 6 at ${O}; 4${x} − 3${y} − 9 gives −23 at ${Q} and −9 at ${O}: inside.`,
    say: null,
  },
  // pp. 864–865
  {
    topic: 11,
    kind: 'shortcut',
    q: `In what ratio does ${x} + 3${y} − 6 = 0 divide the segment from ${A}(−2, 1) to ${B}(4, 3), and are ${A} and ${B} on the same side?`,
    a: `${L}(${A}) = −5 and ${L}(${B}) = 7: opposite signs, so opposite sides, and the ratio is −${fr('−5', '7')} = ${fr('5', '7')}, internal division in 5 ∶ 7. One evaluation per point answers both questions`,
    why: `Check: the dividing point (${fr('1', '2')}, ${fr('11', '6')}) gives ${fr('1', '2')} + ${fr('11', '2')} − 6 = 0.`,
    say: null,
  },

  // ── Additional topic D · Shifting the origin inside an equation ──
  // pp. 865–866
  {
    topic: 12,
    kind: 'remember',
    q: 'When the origin is shifted to (h, k), how do a point’s coordinates and a curve’s equation change?',
    a: `A point relabels as ${X} = ${x} − ${h}, ${Y} = ${y} − ${k}. To transform an equation, substitute the other way, ${x} = ${X} + ${h}, ${y} = ${Y} + ${k}, then expand and collect. The axes stay parallel: slopes, distances, angles and areas are unchanged, only labels move`,
    why: `Origin at (2, −1): the point (5, 3) becomes (3, 4), and 4${x} + 3${y} − 7 = 0 becomes 4${X} + 3${Y} − 2 = 0.`,
    say: 'The shift moves the origin, it never rotates the axes.',
  },
  // pp. 865–866
  {
    topic: 12,
    kind: 'remember',
    q: 'What does a shift of origin do to a line, and what can it do to a circle’s first-degree terms?',
    a: `On a line it changes only the constant term: the coefficients of ${x} and ${y}, and so the slope, are untouched, and the new constant is 0 exactly when the new origin lies on the line. On a circle, and on any curve with a centre (an ellipse, a hyperbola), choosing ${h} and ${k} to make the ${X} and ${Y} coefficients zero removes the first-degree terms and refers the curve to its own centre; a parabola has no centre, and its first-degree terms cannot all be removed this way`,
    why: `${sq(x)} + ${sq(y)} − 4${x} + 6${y} − 3 = 0: 2${h} − 4 = 0, 2${k} + 6 = 0 give (2, −3), and the equation becomes ${sq(X)} + ${sq(Y)} = 16.`,
    say: null,
  },
  // p. 865
  {
    topic: 12,
    kind: 'mixup',
    q: 'X = x − h or x = X + h: which do you substitute into an equation?',
    a: `${x} = ${X} + ${h}, ${y} = ${Y} + ${k}: the equation is written in the old variables, so they are the ones you replace. ${X} = ${x} − ${h} gives a single point’s new coordinates`,
    why: `3${x} − 4${y} + 5 = 0 with the origin at (1, 2): 3(${X} + 1) − 4(${Y} + 2) + 5 = 3${X} − 4${Y}, so the new origin lies on the line.`,
    say: null,
  },
  // pp. 865–866
  {
    topic: 12,
    kind: 'mistake',
    q: `Shifting the origin to (2, −3) in ${sq(x)} + ${sq(y)} − 4${x} + 6${y} − 3 = 0: is the new equation ${sq(X)} + ${sq(Y)} − 3 = 0?`,
    a: `No: ${sq(X)} + ${sq(Y)} − 16 = 0. The new constant is the old left side evaluated at (${h}, ${k}): ${sq(h)} + ${sq(k)} − 4${h} + 6${k} − 3 = 4 + 9 − 8 − 18 − 3 = −16, not the old constant`,
    why: `Completing the square: (${x} − 2)<sup>2</sup> + (${y} + 3)<sup>2</sup> = 16, a circle of centre (2, −3) and radius 4.`,
    say: null,
  },
  // p. 866
  {
    topic: 12,
    kind: 'shortcut',
    q: `Where must the origin go so that ${sq(x)} + ${sq(y)} + 8${x} − 10${y} + 5 = 0 has no first-degree terms?`,
    a: `Set the first-degree coefficients 2${h} + 8 and 2${k} − 10 to zero: (−4, 5). The constant becomes 16 + 25 − 32 − 50 + 5 = −36, so ${sq(X)} + ${sq(Y)} = 36. For a circle, the point is its centre`,
    why: `A circle of centre (−4, 5) and radius 6.`,
    say: null,
  },

  // ── Additional topic E · Locus by introducing and eliminating a parameter ──
  // pp. 868–869
  {
    topic: 13,
    kind: 'remember',
    q: 'How do you find a locus when the point is tied to a moving line or a moving auxiliary point?',
    a: `Name the moving point ${P}(${h}, ${k}), never (${x}, ${y}). Name the parameter: the slope ${m}, an intercept ${a} or ${b}, an inclination ${th}, or an auxiliary point. Write ${h}, ${k} in terms of it; write the constraint it satisfies; eliminate it (solve and substitute; square and add when cos ${th} and sin ${th} appear; add or subtract when it cancels). Replace (${h}, ${k}) by (${x}, ${y}) and state any restriction`,
    why: `The midpoint of <i>AB</i>, for a line through <i>R</i>(3, 4) meeting the positive axes: ${a} = 2${h}, ${b} = 2${k} and ${fr('3', a)} + ${fr('4', b)} = 1 give 4${x} + 3${y} = 2<i>xy</i>, for ${x} > 0, ${y} > 0.`,
    say: 'You cannot translate the rule until you have named the thing that is varying.',
  },
  // pp. 868–871
  {
    topic: 13,
    kind: 'remember',
    q: 'What checks keep a parametric locus right?',
    a: `The parameter may not survive into the answer: if ${m} or ${th} is still there, it is a family of curves, not a locus. Eliminate the parameter, not ${h} and ${k}. Test one concrete member of the family against the answer. And state restrictions: a point reached only as a limit (no member of the family gives it) is not on the locus`,
    why: `${x} + <i>my</i> = 1 and <i>mx</i> − ${y} = 1 meet on ${sq(x)} + ${sq(y)} − ${x} + ${y} = 0, the circle on (1, 0) and (0, −1) as diameter, less the origin, reached only as ${m} → ∞.`,
    say: 'The parameter may not survive into the answer.',
  },
  // pp. 869–870, 873
  {
    topic: 13,
    kind: 'mixup',
    q: 'A variable line through a fixed point meets the axes at A and B: midpoint of AB, or centroid of OAB?',
    a: `Only the inversion step differs: the midpoint gives intercepts 2${h} and 2${k}, the centroid 3${h} and 3${k}, because a centroid is one third of the way out to the intercepts and a midpoint one half. Through (${a}, ${b}): ${fr(a, x)} + ${fr(b, y)} = 2 for the midpoint and ${fr(a, x)} + ${fr(b, y)} = 3 (<i>bx</i> + <i>ay</i> = 3<i>xy</i>) for the centroid`,
    why: `${a} = 3, ${b} = 4 and 4${x} + 3${y} = 24: the centroid is (2, ${fr('8', '3')}), and 4(2) + 3(${fr('8', '3')}) = 16 = 3(2)(${fr('8', '3')}).`,
    say: null,
  },
  // pp. 869–870
  {
    topic: 13,
    kind: 'mistake',
    q: `Is the locus of the midpoint of <i>AB</i>, for a line through <i>R</i>(3, 4) meeting the positive axes, ${fr('3', x)} + ${fr('4', y)} = 1?`,
    a: `No: ${fr('3', x)} + ${fr('4', y)} = 2. The wrong answer writes the line as ${fr(x, h)} + ${fr(y, k)} = 1, as though the midpoint were the intercept point; the intercepts are twice the midpoint’s coordinates. Whenever the moving point is a midpoint or section point, first write the auxiliary point in terms of (${h}, ${k})`,
    why: `Test the member ${x} + ${y} = 7: its midpoint (${fr('7', '2')}, ${fr('7', '2')}) gives ${fr('6', '7')} + ${fr('8', '7')} = 2, not 1.`,
    say: null,
  },
  // pp. 871–872
  {
    topic: 13,
    kind: 'shortcut',
    q: `As ${th} varies, find the locus of the meeting point of ${x} cos ${th} + ${y} sin ${th} = ${a} and ${x} sin ${th} − ${y} cos ${th} = ${b}, fast.`,
    a: `Square and add: the cross terms cancel and cos<sup>2</sup> ${th} + sin<sup>2</sup> ${th} = 1, leaving ${sq(x)} + ${sq(y)} = ${sq(a)} + ${sq(b)}. Geometrically, the lines are perpendicular for every ${th} and the origin is |${a}| and |${b}| from them, so <i>OP</i><sup>2</sup> = ${sq(a)} + ${sq(b)}`,
    why: `The normals (cos ${th}, sin ${th}) and (sin ${th}, −cos ${th}) have dot product 0, so the lines are perpendicular for every ${th}.`,
    say: null,
  },

  // ── Additional topic F · Reflecting a line in a line: the substitution map, and the parallel mirror ──
  // pp. 873–874
  {
    topic: 14,
    kind: 'remember',
    q: 'What is the substitution map for reflecting a line in a line, and why does it work?',
    a: `Reflection in a fixed line is its own inverse, so if it sends (${x}, ${y}) to (${X}, ${Y}), substituting ${X} and ${Y} for ${x} and ${y} in the equation of ${m} gives the reflected line. For <i>ax</i> + <i>by</i> + ${c} = 0 the map is (${x}, ${y}) ↦ (${x} − ${fr(`2${a}(<i>ax</i> + <i>by</i> + ${c})`, `${sq(a)} + ${sq(b)}`)}, ${y} − ${fr(`2${b}(<i>ax</i> + <i>by</i> + ${c})`, `${sq(a)} + ${sq(b)}`)}). Mirrors to know: the x-axis, ${y} → −${y}; the y-axis, ${x} → −${x}; ${y} = ${x}, swap; ${y} = −${x}, ${x} → −${y} and ${y} → −${x}; ${x} = ${h}, ${x} → 2${h} − ${x}; ${y} = ${k}, ${y} → 2${k} − ${y}`,
    why: `${x} − 2${y} + 4 = 0 in ${x} = 3: (6 − ${x}) − 2${y} + 4 = 0, i.e. ${x} + 2${y} − 10 = 0.`,
    say: 'Reflect twice and you are back where you started.',
  },
  // pp. 874–875
  {
    topic: 14,
    kind: 'remember',
    q: `What is the image of <i>ax</i> + <i>by</i> + ${c1} = 0 in the parallel line <i>ax</i> + <i>by</i> + ${c} = 0?`,
    a: `<i>ax</i> + <i>by</i> + (2${c} − ${c1}) = 0, with both lines written with the same ${a} and ${b} (rescale one first): only the constant term moves. The mirror’s constant is the average of the other two, so the mirror runs midway, at ${fr(`|${c} − ${c1}|`, `√(${sq(a)} + ${sq(b)})`)} from each`,
    why: `3${x} − 4${y} + 7 = 0 in 3${x} − 4${y} − 2 = 0: 2(−2) − 7 = −11, so the image is 3${x} − 4${y} − 11 = 0, each ${fr('9', '5')} from the mirror.`,
    say: 'The mirror’s constant is the average of the other two.',
  },
  // pp. 873–875
  {
    topic: 14,
    kind: 'mixup',
    q: 'Reflecting a line: which route when it meets the mirror, and which when it is parallel to it?',
    a: 'Reflecting two points and joining the images always works. If the line meets the mirror, the reflection passes through the meeting point, so one image point suffices; substituting the map is quicker still. If it is parallel, there is no meeting point to use: with the same <i>a</i> and <i>b</i> in both, move only the constant, to 2<i>c</i> − <i>c</i><sub>1</sub>',
    why: `2${x} − 3${y} + 4 = 0 in ${x} + ${y} − 1 = 0: the map (1 − ${y}, 1 − ${x}) gives 3${x} − 2${y} + 3 = 0, which passes through the meeting point (−${fr('1', '5')}, ${fr('6', '5')}).`,
    say: null,
  },
  // pp. 874–875
  {
    topic: 14,
    kind: 'mistake',
    q: `Is the image of 3${x} − ${y} = 2 in the line ${y} = ${x} − 1 found by swapping ${x} and ${y}?`,
    a: `No: the mirror is ${y} = ${x} shifted. Written ${x} − ${y} − 1 = 0, its map is (${x}, ${y}) ↦ (${y} + 1, ${x} − 1), the swap with the shift attached; substituting gives ${x} − 3${y} = 2. What genuinely fails is negating the equation, adding the two equations, or swapping ${x} and ${y} for a mirror that is not ${y} = ${x}`,
    why: `(1, 1) on 3${x} − ${y} = 2 maps to (2, 0), and 2 − 0 = 2; the slope 3 becomes ${fr('1', '3')}.`,
    say: null,
  },
  // p. 875
  {
    topic: 14,
    kind: 'shortcut',
    q: `Reflect 5${x} − 12${y} + 13 = 0 in the parallel line 5${x} − 12${y} − 26 = 0, and say how far the line is from its image.`,
    a: `Image constant 2(−26) − 13 = −65: 5${x} − 12${y} − 65 = 0. The mirror is ${fr('|13 + 26|', '13')} = 3 from the original, so the original and its image are 6 apart`,
    why: `${fr('|13 − (−65)|', '13')} = ${fr('78', '13')} = 6.`,
    say: null,
  },
];
