/**
 * KEY POINTS for Mathematics Class 11, Chapter 10 (Conic Sections).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–09 and Additional topics A–D each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 02, the general form, the nature test, the diameter
 * form and S₁; Topic 05, the focal radii on each branch and the rectangular
 * hyperbola; Topic 07, the tangency conditions, the counting table, the
 * director circles and the parabola’s parametric tangents, with two Exam
 * shortcuts; Topic 08, the parabola’s normals, the three-normals cubic, the
 * ellipse and hyperbola normals and the reflection property; Topic 09, one
 * point per model and two Common mistakes): 95 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the first
 * two of each topic.
 *
 * `topic`: Topics 01–09 are 0–8 (01–05 the main chapter’s five sections,
 * 06–09 the supplement’s four units), Additional topics A–D are 9–12 (the
 * Additional Topics part’s Addenda A–D). No point refers to another topic by
 * number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic’s key
 * formulas and definitions, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps (Topic 09 and
 * A–D, which have no MCQs or pitfall lists: their Speed Trap examples, their
 * practice answers and their limiting conditions). Exam shortcuts: its
 * Pro-Tips and Speed notes, with a worked example or practice answer. `say`:
 * the book’s own mnemonics, word for word without their quotation marks, from
 * each cheat sheet (Topics 01–09: thirty-one), and for A–D, which share one
 * closing cheat sheet, its six mnemonics shared out by subject (A: the “four
 * jobs” and “Inside gives T = S₁” lines and the diameter line; B: “Focus and
 * directrix are pole and polar.”; C: “One, zero, minus one”; D: “Subtract two
 * circles”), with the book’s own one-line sentences beside the single ones
 * (B: “The polar exists even when no tangent does.”; C: “The hyperbola and
 * its pair of asymptotes differ only in the constant term.”; D: the cheat
 * sheet’s “S + λS′ = 0 passes through every common point …” line):
 * forty in all, twenty-six of them memory lines.
 *
 * Where the book over-stated a rule, the chapter now prints it with its true
 * condition (the reviews of decision 35), and so does the point: “e = 0 gives
 * a circle” (the circle is the limit e → 0; taken literally, e = 0 leaves only
 * the focus); the A, C sign rules with no xy
 * term (for a non-degenerate curve: x² + y² + 1 = 0, x² + y² = 0, x² + 2x = 0
 * and x² − y² = 0 are no curve, a point, two lines and a line pair); g = ½(the
 * coefficient of x) and the tangent length √S₁ (with the x², y² coefficients
 * made 1); equal x²,
 * y² coefficients with an xy term “a rotated ellipse” (only when B² < 4A²);
 * the hyperbola’s focal radii PS = ex − a, PS′ = ex + a (the right branch;
 * on the left, a − ex and −ex − a); “e ≤ 1 means a sign error” (an error
 * somewhere, most often that sign); “always a quadratic” for tangency (a line
 * parallel to a parabola’s axis or a hyperbola’s asymptote gives a linear
 * equation); “two tangents from a point outside” (for a hyperbola the S₁ test
 * is reversed, a point on an asymptote gives one and the centre none); “lines
 * flatter than an asymptote” (or parallel to one); “expect two answers”
 * for the hyperbola’s tangent of slope m (only when |m| is greater than
 * b over a); the director circle of a hyperbola for a ≤ b (at a = b it shrinks
 * to the centre); the normal of a circle as “any line through the centre” (the
 * one line through the centre and the point); y = mx − 2am “not a normal” (it is
 * at m = 0); the normal “always lands a long way round” (not at the vertex);
 * (a cos θ, b sin θ) “never” on a hyperbola (it is at θ = 0 and π); PQ =
 * (a − b) sin θ (a length: (a − b)|sin θ|); “every point inside is the
 * midpoint of exactly one chord” (not the centre of a circle or ellipse);
 * “interior S₁ < 0” for a hyperbola (S₁ > 0); “diameter” and “chord through
 * the centre” the same thing (for the circle and the ellipse; a hyperbola’s
 * steep diameters meet it nowhere); “every diameter of a parabola goes along
 * the axis” (parallel to it; only the axis itself, for chords perpendicular to
 * it, lies along it); “a width is always twice a coordinate” (with the origin
 * on the axis of symmetry); and the arch bridge’s “origin at the apex” for
 * x² = −4a(y − 5) (its origin is at ground level). Two mnemonics carried such a
 * rule, and the chapter now prints them corrected: Topic 07’s “T = 0 on the
 * curve is a tangent, outside the curve a chord of contact” (it was “off the
 * curve”) and the cheat sheet’s “every diameter of a parabola runs parallel to
 * the axis” (it was “goes along”); each `say` quotes the corrected line word
 * for word, on a later point of its topic, so neither is a memory line. The
 * Ellipse’s “if e ≥ 1, you used the wrong form” guard is given with what it
 * misses (the wrong form b over a also lies below 1). Additional topic C’s
 * determinant is written as its expansion, abc + 2fgh − af² − bg² − ch² with
 * C + λ for c (decision 34), and its conjugate hyperbola as S + 2λ = 0.
 *
 * Markup is the chapter’s own: variables and Greek letters italic, sin, cos,
 * tan upright, subscripts as <sub>; − (U+2212) for minus; every fraction
 * stacked, <frac><num>…</num><den>…</den></frac>; no em dashes; and always a
 * space after "<" (as the book prints it), so it is never read as a tag.
 * Exam-frequency claims would keep the label "(the book’s estimate from past
 * papers, not official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const sb = (base: string, s: string) => `<i>${base}</i><sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const e = '<i>e</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const r = '<i>r</i>';
const t = '<i>t</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const A = '<i>A</i>';
const B = '<i>B</i>';
const C = '<i>C</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const S = '<i>S</i>';
const T = '<i>T</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const th = '<i>θ</i>';
const ph = '<i>φ</i>';
const lam = '<i>λ</i>';
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const t1 = sb('t', '1');
const t2 = sb('t', '2');
const t3 = sb('t', '3');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const th1 = sb('θ', '1');
const th2 = sb('θ', '2');
const S1 = sb('S', '1');
const mp = `${m}′`;
const X2 = sq(x);
const Y2 = sq(y);
const A2 = sq(a);
const B2 = sq(b);
const ELL = `${fr(X2, A2)} + ${fr(Y2, B2)} = 1`;
const HYP = `${fr(X2, A2)} − ${fr(Y2, B2)} = 1`;
const GFC = `${sq(g)} + ${sq(f)} − ${c}`;
const BA = fr(b, a);
const DISC = `${sq(B)} − 4<i>AC</i>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Introduction: Sections of a Cone & the Conic Family ──
  // pp. 897–898, 900, 902
  {
    topic: 0,
    kind: 'remember',
    q: `How does the angle ${be} of the cutting plane, compared with the cone’s semi-vertical angle ${al}, decide the conic?`,
    a: `Both are measured to the axis. ${be} = 90° (plane perpendicular to the axis): circle; ${al} < ${be} < 90°: ellipse; ${be} = ${al} (plane parallel to a generator): parabola, the single boundary case; 0 ≤ ${be} < ${al}: hyperbola, the plane cutting both nappes, which is why it has two branches. All of this assumes the plane misses the vertex`,
    why: `Semi-vertical angle 30°, plane at 50° to the axis: 30° < 50° < 90°, an ellipse; at exactly 30° it would be a parabola.`,
    say: 'Parabola is the hinge: <i>β</i> = <i>α</i>, <i>e</i> = 1, <i>B</i><sup>2</sup> = 4<i>AC</i>.',
  },
  // pp. 897–898, 902–903
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the focus–directrix (eccentricity) definition of a conic, and which values of e give which curve?',
    a: `A conic is the set of points whose distance to a fixed focus divided by distance to a fixed directrix equals a constant ${e}, with the focus off the directrix (a focus on it degenerates the locus). 0 < ${e} < 1: ellipse; ${e} = 1: parabola, the single boundary between the bounded ellipse and the unbounded hyperbola; ${e} > 1: hyperbola. The circle is the limiting ellipse, ${e} → 0, its two foci merged at the centre: taken literally, ${e} = 0 in the definition leaves only the focus itself`,
    why: `4${X2} − 9${Y2} + 8${x} + 36${y} − 68 = 0 is a hyperbola, so its ${e} > 1: the discriminant and the eccentricity scale are two languages for the same fact.`,
    say: null,
  },
  // pp. 898, 900–902
  {
    topic: 0,
    kind: 'remember',
    q: 'How does the discriminant of the general second-degree equation classify a conic?',
    a: `Every conic is ${A}${X2} + <i>Bxy</i> + ${C}${Y2} + <i>Dx</i> + <i>Ey</i> + <i>F</i> = 0, with ${A}, ${B}, ${C} not all zero. For a non-degenerate curve, ${DISC} < 0: ellipse (a circle if also ${A} = ${C} and ${B} = 0); = 0: parabola; > 0: hyperbola. A nonzero ${B} only rotates the conic, and ${DISC} is unchanged by rotating the axes, so you never need to remove the <i>xy</i> term to name the curve`,
    why: `5${X2} − 4<i>xy</i> + 8${Y2} − 16${x} − 14${y} + 5 = 0: ${DISC} = 16 − 160 = −144 < 0, an ellipse, rotated.`,
    say: null,
  },
  // pp. 900–902
  {
    topic: 0,
    kind: 'remember',
    q: 'With no xy term, how do the signs of A and C name the curve, and when does the rule fail?',
    a: `With ${B} = 0 the discriminant is −4<i>AC</i>, so the product <i>AC</i> decides: ${A} = ${C} gives a circle, the same sign but unequal an ellipse, one of ${A}, ${C} zero a parabola, opposite signs a hyperbola. This names a non-degenerate curve only: ${X2} + ${Y2} + 1 = 0 is no real curve, ${X2} + ${Y2} = 0 a single point, ${X2} + 2${x} = 0 two parallel lines and ${X2} − ${Y2} = 0 a pair of lines`,
    why: `3${X2} + 3${Y2} − 12${x} + 6${y} − 4 = 0 has ${A} = ${C} = 3: a circle at a glance (divided by 3, ${GFC} = ${fr('19', '3')} > 0, so a real one).`,
    say: 'Same sign closes, opposite opens.',
  },
  // pp. 897, 902
  {
    topic: 0,
    kind: 'mixup',
    q: 'A plane through the vertex, tangent to the cone along one generator: a parabola, or a degenerate conic?',
    a: 'A degenerate conic: the single straight line along that generator. A plane through the vertex never gives a normal curve: meeting the vertex only gives a point, cutting through both nappes at the vertex (through the axis) a pair of intersecting lines. A parabola needs the plane parallel to a generator and missing the vertex',
    why: 'A plane perpendicular to the axis, not through the vertex, gives a circle; through the vertex along the axis, a pair of intersecting straight lines.',
    say: 'Through the vertex means degenerate.',
  },
  // p. 902
  {
    topic: 0,
    kind: 'mistake',
    q: `${X2} + 4<i>xy</i> + ${Y2} = 1 has equal ${X2} and ${Y2} coefficients and an <i>xy</i> term. Is it a rotated ellipse?`,
    a: `No: ${DISC} = 16 − 4 = 12 > 0, a hyperbola. Equal ${X2}, ${Y2} coefficients with an <i>xy</i> term are never a circle, but they give an ellipse only when ${sq(B)} < 4${sq(A)}; ${sq(B)} = 4${sq(A)} gives a parabola and ${sq(B)} > 4${sq(A)} a hyperbola. The other listed slips: forgetting the degenerate cases, lumping the parabola (a single boundary, ${be} = ${al} and ${e} = 1) in with the ellipse, and rotating before classifying`,
    why: `${X2} + 2<i>xy</i> + ${Y2} + ${x} = 0 has ${DISC} = 4 − 4 = 0: a parabola.`,
    say: null,
  },
  // pp. 900–902
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Name the conic in five seconds: what do you look at?',
    a: `From geometry: compare ${be} with ${al}, and check whether the plane passes through the vertex. From an equation with no <i>xy</i> term: the signs of ${A} and ${C} (same and equal circle, same and unequal ellipse, one missing parabola, opposite hyperbola). With an <i>xy</i> term: the sign of ${DISC}`,
    why: `${X2} + 4<i>xy</i> + 4${Y2} + 3${x} − 2 = 0: ${DISC} = 16 − 16 = 0, a parabola; ${Y2} − 8${x} + 6${y} + 1 = 0 has only ${Y2}: a parabola, ${e} = 1.`,
    say: null,
  },

  // ── Topic 02 · The Circle ──
  // pp. 903–904, 909
  {
    topic: 1,
    kind: 'remember',
    q: 'What is a circle, and how does its standard equation come from the definition?',
    a: `The locus of a point at a constant distance ${r} (the radius) from a fixed point (the centre). With centre ${C}(${h}, ${k}) and ${P}(${x}, ${y}) on it, <i>CP</i> = ${r} gives √((${x} − ${h})<sup>2</sup> + (${y} − ${k})<sup>2</sup>) = ${r}; both sides are non-negative, so squaring adds no false points: (${x} − ${h})<sup>2</sup> + (${y} − ${k})<sup>2</sup> = ${sq(r)}, and ${X2} + ${Y2} = ${sq(r)} for the centre at the origin. In eccentricity terms it is the limiting ellipse (${e} → 0), with no focus or directrix to compute`,
    why: `Centre (2, −1) through (5, 3): ${r} = √(9 + 16) = 5, so (${x} − 2)<sup>2</sup> + (${y} + 1)<sup>2</sup> = 25, i.e. ${X2} + ${Y2} − 4${x} + 2${y} − 20 = 0.`,
    say: null,
  },
  // pp. 904, 909
  {
    topic: 1,
    kind: 'remember',
    q: `How do you read the centre and radius of ${X2} + ${Y2} + 2<i>gx</i> + 2<i>fy</i> + c = 0?`,
    a: `Complete both squares: (${x} + ${g})<sup>2</sup> + (${y} + ${f})<sup>2</sup> = ${GFC}. Matching the standard form, the centre is (−${g}, −${f}) and the radius √(${GFC}). Any real circle has equal ${X2}, ${Y2} coefficients and no <i>xy</i> term: if the common coefficient is not 1, divide through first`,
    why: `${X2} + ${Y2} − 6${x} + 8${y} − 11 = 0: ${g} = −3, ${f} = 4, ${c} = −11, so the centre is (3, −4) and the radius √(9 + 16 + 11) = 6.`,
    say: 'Centre is minus-<i>g</i>, minus-<i>f</i>.',
  },
  // pp. 903–904, 908–909
  {
    topic: 1,
    kind: 'remember',
    q: 'When does the general form describe a real circle, a point circle, or no real circle?',
    a: `${GFC} is ${sq(r)} when it is positive: a real circle; zero: a point circle, the single point (−${g}, −${f}); negative: no real circle (an imaginary one). Check it before announcing a radius`,
    why: `${X2} + ${Y2} − 4${x} − 6${y} + 13 = 0: 4 + 9 − 13 = 0, a point circle, just the point (2, 3).`,
    say: 'Check <i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> − <i>c</i> before you trust the radius.',
  },
  // pp. 904–905, 909
  {
    topic: 1,
    kind: 'remember',
    q: `What is the circle on the segment joining <i>A</i>(${x1}, ${y1}) and <i>B</i>(${x2}, ${y2}) as diameter, and why?`,
    a: `(${x} − ${x1})(${x} − ${x2}) + (${y} − ${y1})(${y} − ${y2}) = 0. For any other point ${P} of the circle, ∠<i>APB</i> = 90° (the angle in a semicircle), so <i>PA</i> and <i>PB</i> are perpendicular; clearing the slope condition of fractions gives the equation. The slopes fail if <i>PA</i> or <i>PB</i> is vertical; Pythagoras, <i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = <i>AB</i><sup>2</sup>, gives the same equation for every point, ${A} and ${B} included. Given the ends of a diameter, this one line beats finding the midpoint and half the distance`,
    why: `<i>A</i>(1, 2), <i>B</i>(5, 6): (${x} − 1)(${x} − 5) + (${y} − 2)(${y} − 6) = 0, i.e. ${X2} + ${Y2} − 6${x} − 8${y} + 17 = 0.`,
    say: null,
  },
  // pp. 904, 907, 909
  {
    topic: 1,
    kind: 'remember',
    q: `What does ${S1} tell you about a point ${P}(${x1}, ${y1}) and a circle?`,
    a: `${S1} = ${sq(x1)} + ${sq(y1)} + 2<i>g</i>${x1} + 2<i>f</i>${y1} + ${c}, the circle’s left side at ${P}, with its ${X2}, ${Y2} coefficients made 1. ${P} is outside, on or inside as ${S1} is positive, zero or negative, and from an outside point the tangent length is √${S1}`,
    why: `The circle through <i>O</i>(0, 0), (6, 0), (0, 8) is ${X2} + ${Y2} − 6${x} − 8${y} = 0; from (7, 9), ${S1} = 49 + 81 − 42 − 72 = 16, so the tangent length is 4.`,
    say: 'Same number plugged in: sign locates, root measures.',
  },
  // pp. 904, 908
  {
    topic: 1,
    kind: 'mixup',
    q: 'The length of the tangent from a point, or its distance to the centre: which is √S₁?',
    a: `The tangent length is √${S1}; the distance to the centre is longer, since the tangent, the radius and that distance make a right triangle: ${sq('<i>ℓ</i>')} = <i>d</i><sup>2</sup> − ${sq(r)}`,
    why: `From (0, 0) to ${X2} + ${Y2} − 4${x} − 6${y} + 12 = 0: √${S1} = √12 = 2√3, while √13 is the distance to the centre (2, 3) (and 13 − 1 = 12).`,
    say: null,
  },
  // pp. 908–909
  {
    topic: 1,
    kind: 'mistake',
    q: `Is the centre of ${X2} + ${Y2} + 8${x} − 6${y} + 9 = 0 the point (4, −3)?`,
    a: `No: (−4, 3). Halve the linear coefficients and flip the sign: 2${g} = 8, 2${f} = −6, centre (−${g}, −${f}). (4, −3) takes (${g}, ${f}), (8, −6) reads (2${g}, 2${f}) and (−8, 6) takes (−2${g}, −2${f}). The other listed slips: skipping the ${GFC} check, forcing the general form when the ends of a diameter are given, and ${X2}, ${Y2} coefficients other than 1 (equal: divide through by that number; unequal: it is not a circle)`,
    why: `${X2} + ${Y2} + 4${x} − 10${y} + 13 = 0: centre (−2, 5), radius √(4 + 25 − 13) = 4.`,
    say: null,
  },
  // p. 909
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you reduce any general-form circle, and place a point, in one pass?',
    a: `With the ${X2}, ${Y2} coefficients made 1, ${g} = ${fr('1', '2')}(coefficient of ${x}), ${f} = ${fr('1', '2')}(coefficient of ${y}); then centre (−${g}, −${f}) and radius √(${GFC}). For a point, plug it into the left side once: the sign of ${S1} places it, and its square root is the tangent length. One quantity, two jobs`,
    why: `(1, 1) and ${X2} + ${Y2} − 2${x} − 4${y} + 3 = 0: ${S1} = 1 + 1 − 2 − 4 + 3 = −1 < 0, inside.`,
    say: null,
  },

  // ── Topic 03 · The Parabola ──
  // pp. 910–912, 917
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a parabola, and how is y² = 4ax derived?',
    a: `The locus of a point whose distance from a fixed point (the focus ${S}) equals its distance from a fixed line (the directrix): ${e} = 1, with the focus off the directrix (on it, the locus is a line). Vertex at the origin, focus ${S}(${a}, 0), so the directrix is ${x} = −${a} (the vertex is midway). <i>SP</i> = <i>PM</i>: √((${x} − ${a})<sup>2</sup> + ${Y2}) = |${x} + ${a}|; squaring is reversible, ${X2} and ${A2} cancel, and ${Y2} = 4<i>ax</i> remains`,
    why: `Vertex at the origin, axis along the ${x}-axis, through (2, −6): 36 = 4<i>a</i>(2), so 4${a} = 18 and ${Y2} = 18${x}.`,
    say: null,
  },
  // pp. 911–912, 917
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the four standard parabolas, with focus, directrix and latus rectum (a > 0)?',
    a: `${Y2} = 4<i>ax</i>: opens right, focus (${a}, 0), directrix ${x} = −${a}. ${Y2} = −4<i>ax</i>: left, (−${a}, 0), ${x} = ${a}. ${X2} = 4<i>ay</i>: up, (0, ${a}), ${y} = −${a}. ${X2} = −4<i>ay</i>: down, (0, −${a}), ${y} = ${a}. The latus rectum (the focal chord perpendicular to the axis) is 4${a} in every case: for ${Y2} = 4<i>ax</i>, ${x} = ${a} gives ${y} = ±2${a}, ends (${a}, ±2${a})`,
    why: `${Y2} = −12${x}: 4${a} = 12, ${a} = 3; vertex (0, 0), focus (−3, 0), axis ${y} = 0, directrix ${x} = 3, latus rectum 12.`,
    say: 'Coefficient over four is <i>a</i>; the coefficient itself is the latus rectum.',
  },
  // pp. 911, 914, 917
  {
    topic: 2,
    kind: 'remember',
    q: `On ${Y2} = 4ax, what are the focal distance of P(x, y), the parametric point, and the position test?`,
    a: `<i>SP</i> = ${x} + ${a}, the distance to the directrix (for ${X2} = 4<i>ay</i>, ${y} + ${a}: the un-squared coordinate plus ${a}). Parametric point (<i>at</i><sup>2</sup>, 2<i>at</i>), ${t} any real number. (${x1}, ${y1}) is outside, on or inside as ${sq(y1)} − 4<i>a</i>${x1} is positive, zero or negative`,
    why: `${X2} = 16${y} (${a} = 4): the focal distance of (8, 4) is 4 + 4 = 8, and (3, 1) gives 9 − 16 = −7 < 0, inside.`,
    say: null,
  },
  // pp. 915, 917
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the focal-chord condition on y² = 4ax, and the harmonic property of a focal chord PQ?',
    a: `The ends ${t1}, ${t2} of a focal chord satisfy ${t1}${t2} = −1. With <i>SP</i> = ${a}(1 + ${sq(t1)}) and <i>SQ</i> = ${a}(1 + ${sq(t2)}), ${fr('1', '<i>SP</i>')} + ${fr('1', '<i>SQ</i>')} = ${fr('1', a)}: the semi-latus rectum 2${a} is the harmonic mean of the two focal radii`,
    why: `<i>SP</i> = 3${a}: ${fr('1', '<i>SQ</i>')} = ${fr('1', a)} − ${fr('1', `3${a}`)} = ${fr('2', `3${a}`)}, so <i>SQ</i> = ${fr(`3${a}`, '2')} and <i>PQ</i> = ${fr(`9${a}`, '2')}.`,
    say: null,
  },
  // pp. 916–917
  {
    topic: 2,
    kind: 'mixup',
    q: `${Y2} = 4ax or ${X2} = 4ay: along which axis does each open, and what does the sign do?`,
    a: `Read which variable is squared: the un-squared one names the axis it opens along. ${Y2} = …: along the ${x}-axis; ${X2} = …: along the ${y}-axis. A minus sign flips the opening (left or down): decide the direction before placing the focus and directrix`,
    why: `${X2} = −16${y}: opens down, 4${a} = 16, focus (0, −4); (0, 4) ignores the sign, (±4, 0) puts it on the wrong axis.`,
    say: 'The lonely variable points the way it opens.',
  },
  // pp. 916–917
  {
    topic: 2,
    kind: 'mistake',
    q: `Is the latus rectum of ${Y2} = 7${x} equal to ${fr('7', '4')}?`,
    a: `No: 7. The latus rectum is the coefficient 4${a} itself; ${fr('7', '4')} is ${a} (the “${a} versus 4${a}” slip, the biggest mark-loser here), 28 multiplies by 4 again and ${fr('7', '2')} is the semi-latus rectum 2${a}. The other listed slips: the directrix on the same side as the focus (they straddle the vertex, each at distance ${a}), the axis swapped, and the sign ignored`,
    why: `${Y2} = −4<i>ax</i> has its focus at (−${a}, 0), so its directrix is ${x} = ${a}, not ${x} = −${a}.`,
    say: 'Focus and directrix straddle the vertex.',
  },
  // p. 917
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Read every feature of a standard parabola in under ten seconds.',
    a: `Three steps: the un-squared variable names the axis it opens along; the coefficient divided by 4 is ${a}, the focus-to-vertex and directrix-to-vertex distance; the coefficient itself is the latus rectum`,
    why: `${X2} = 20${y}: focus (0, 5), axis ${x} = 0, directrix ${y} = −5, latus rectum 20.`,
    say: null,
  },

  // ── Topic 04 · The Ellipse ──
  // pp. 918–920, 925
  {
    topic: 3,
    kind: 'remember',
    q: 'What is an ellipse, and how is its standard equation derived?',
    a: `The locus of a point whose distances from two foci add to a constant 2${a}, with 2${a} > 2${c} (if they were equal it would collapse onto the segment joining the foci). Foci ${S}(${c}, 0), ${S}′(−${c}, 0): √((${x} − ${c})<sup>2</sup> + ${Y2}) + √((${x} + ${c})<sup>2</sup> + ${Y2}) = 2${a}. Isolate one radical before squaring, square twice, and name ${A2} − ${sq(c)} = ${B2} (positive since ${a} > ${c}): ${ELL}`,
    why: `Centre at the origin, major axis along the ${x}-axis of length 10, ${e} = ${fr('3', '5')}: ${a} = 5, ${c} = 3, ${B2} = 16, so ${fr(X2, '25')} + ${fr(Y2, '16')} = 1.`,
    say: null,
  },
  // pp. 919–921, 925
  {
    topic: 3,
    kind: 'remember',
    q: `What are the relationships and features of ${fr(X2, A2)} + ${fr(Y2, B2)} = 1 (a > b)?`,
    a: `${c} = <i>ae</i>, ${sq(c)} = ${A2} − ${B2}, ${B2} = ${A2}(1 − ${sq(e)}), ${e} = ${fr(c, a)} = √(1 − ${fr(B2, A2)}), 0 < ${e} < 1. Vertices (±${a}, 0), minor-axis ends (0, ±${b}), foci (±<i>ae</i>, 0), directrices ${x} = ±${fr(a, e)}, axes 2${a} and 2${b}, latus rectum ${fr(`2${B2}`, a)} (put ${x} = <i>ae</i>: ${y} = ±${fr(B2, a)})`,
    why: `${fr(X2, '25')} + ${fr(Y2, '9')} = 1: ${sq(c)} = 16, ${e} = ${fr('4', '5')}, foci (±4, 0), axes 10 and 6, latus rectum ${fr('18', '5')}.`,
    say: 'Ellipse minus, hyperbola plus.',
  },
  // pp. 918–919, 925
  {
    topic: 3,
    kind: 'remember',
    q: 'Which axis is the major axis, and where are the foci when the larger denominator is under y²?',
    a: `The major axis lies under the larger denominator, and the foci always lie on it. For ${fr(X2, B2)} + ${fr(Y2, A2)} = 1 with ${a} > ${b}, the major axis is the ${y}-axis, the foci are (0, ±<i>ae</i>) and the directrices ${y} = ±${fr(a, e)}; everything else mirrors`,
    why: `${fr(X2, '16')} + ${fr(Y2, '36')} = 1: ${sq(c)} = 20, foci (0, ±2√5), ${e} = ${fr('√5', '3')}, latus rectum ${fr('32', '6')} = ${fr('16', '3')}.`,
    say: 'Bigger denominator points to the foci.',
  },
  // pp. 919, 921, 925
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the focal radii of a point P(x, y) on the ellipse, and how far is a focus from an end of the minor axis?',
    a: `<i>SP</i> = ${a} − <i>ex</i>, <i>S</i>′<i>P</i> = ${a} + <i>ex</i>; their sum is always 2${a}, a free check. A focus to an end ${B} of the minor axis: <i>SB</i> = √(${sq('(<i>ae</i>)')} + ${B2}) = ${a}, the semi-major axis`,
    why: `${fr(X2, '49')} + ${fr(Y2, '24')} = 1 at ${x} = 3: ${e} = ${fr('5', '7')}, <i>SP</i> = ${fr('34', '7')}, <i>S</i>′<i>P</i> = ${fr('64', '7')}, sum 14 = 2${a}.`,
    say: null,
  },
  // pp. 918, 924–925
  {
    topic: 3,
    kind: 'mixup',
    q: 'The foci of an ellipse merge, or the constant sum equals the distance between them: what does each give?',
    a: `Merged foci: ${c} = 0, so ${a} = ${b}: a circle, the limiting ellipse as ${e} → 0. 2${a} = 2${c}: the curve collapses onto the line segment joining the foci. And as ${e} → 1 the ellipse opens towards a parabola, the boundary`,
    why: `Distance between the foci equal to the minor axis: ${c} = ${b}, so 2${sq(c)} = ${A2} and ${e} = ${fr('1', '√2')}.`,
    say: null,
  },
  // pp. 924–925
  {
    topic: 3,
    kind: 'mistake',
    q: `Is the eccentricity of ${fr(X2, '4')} + ${fr(Y2, '3')} = 1 equal to ${fr('√3', '2')}?`,
    a: `No: ${fr('1', '2')}. ${sq(c)} = 4 − 3 = 1, ${e} = ${fr(c, a)} = ${fr('1', '2')}. ${fr('√3', '2')} is ${fr(b, a)}, ${fr('1', '√3')} is ${fr(c, b)}, ${fr('1', '4')} is ${fr(sq(c), A2)}. The guard “an ellipse must give 0 < ${e} < 1” catches the plus sign (the hyperbola’s), not this: ${fr(b, a)} is below 1 too, so work from ${sq(c)} = ${A2} − ${B2}. The other listed slips: the major axis assumed horizontal, and the latus rectum with the 2 dropped or divided by 2${a}`,
    why: `${fr(X2, '36')} + ${fr(Y2, '16')} = 1: the latus rectum is ${fr('32', '6')} = ${fr('16', '3')}; ${fr('8', '3')} forgets the 2, ${fr('32', '3')} doubles it, 8 is the minor axis.`,
    say: 'Latus rectum: two-bee-squared over <i>a</i>.',
  },
  // pp. 923, 925
  {
    topic: 3,
    kind: 'shortcut',
    q: 'S, S′ are the foci and B an end of the minor axis. If triangle SBS′ is equilateral, find e fast.',
    a: `Use <i>SB</i> = <i>S</i>′<i>B</i> = ${a}: then <i>SS</i>′ = 2<i>ae</i> = ${a} gives ${e} = ${fr('1', '2')}, and the latus rectum is ${fr(`2${B2}`, a)} = ${fr(`3${a}`, '2')}. With the four-step reflex (bigger denominator gives the foci; ${sq(c)} = ${A2} − ${B2}; ${e} = ${fr(c, a)}; latus rectum ${fr(`2${B2}`, a)}), focus to minor-axis tip = ${a} collapses such triangle questions to one line`,
    why: `A right angle at ${B} instead: 2${A2} = 4${A2}${sq(e)}, so ${e} = ${fr('1', '√2')}.`,
    say: null,
  },

  // ── Topic 05 · The Hyperbola ──
  // pp. 926–928, 933
  {
    topic: 4,
    kind: 'remember',
    q: 'What is a hyperbola, and how is its standard equation derived?',
    a: `The locus of a point the difference of whose distances from two foci is a constant 2${a}, with 2${a} < 2${c} (equal would give two rays). On the branch nearer ${S}(${c}, 0): <i>S</i>′<i>P</i> − <i>SP</i> = 2${a}; the ellipse derivation with a sign changed gives ${HYP}, naming ${sq(c)} − ${A2} = ${B2} (positive since ${c} > ${a}). Two branches that never join, nothing between the vertices, ${e} > 1`,
    why: `Foci (±5, 0) and transverse axis 6: ${c} = 5, ${a} = 3, ${B2} = 25 − 9 = 16, so ${fr(X2, '9')} − ${fr(Y2, '16')} = 1.`,
    say: null,
  },
  // pp. 927–929, 933–934
  {
    topic: 4,
    kind: 'remember',
    q: `What are the relationships, features and asymptotes of ${HYP}?`,
    a: `${c} = <i>ae</i>, ${sq(c)} = ${A2} + ${B2}, ${B2} = ${A2}(${sq(e)} − 1), ${e} = ${fr(c, a)} = √(1 + ${fr(B2, A2)}) > 1. Vertices (±${a}, 0), foci (±<i>ae</i>, 0), directrices ${x} = ±${fr(a, e)}, axes 2${a} and 2${b} (no need for ${a} > ${b}), latus rectum ${fr(`2${B2}`, a)}, as for the ellipse. Asymptotes ${y} = ±${BA}${x}: the gap between curve and line shrinks to 0, since on the upper right arm ${BA}${x} − ${y} = ${fr('<i>ab</i>', `${x} + √(${X2} − ${A2})`)} → 0`,
    why: `${fr(X2, '16')} − ${fr(Y2, '9')} = 1: ${c} = 5, ${e} = ${fr('5', '4')}, foci (±5, 0), latus rectum ${fr('9', '2')}, asymptotes ${y} = ±${fr('3', '4')}${x}.`,
    say: 'Hyperbola plus, ellipse minus.',
  },
  // pp. 927, 932–933
  {
    topic: 4,
    kind: 'remember',
    q: 'What decides the transverse axis of a hyperbola?',
    a: `The positive term, not the larger denominator. For ${fr(Y2, A2)} − ${fr(X2, B2)} = 1 the transverse axis is the ${y}-axis, the foci are (0, ±<i>ae</i>) and the asymptotes ${y} = ±${fr(a, b)}${x}`,
    why: `${fr(Y2, '9')} − ${fr(X2, '16')} = 1: the transverse axis is the ${y}-axis, even though 16 > 9.`,
    say: 'Positive term points to the foci.',
  },
  // pp. 927, 931, 934
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the focal radii of a point P(x, y) on the hyperbola, on each branch?',
    a: `On the right branch (${x} ≥ ${a}): <i>PS</i> = <i>ex</i> − ${a}, <i>PS</i>′ = <i>ex</i> + ${a}. On the left branch both change sign: <i>PS</i> = ${a} − <i>ex</i>, <i>PS</i>′ = −<i>ex</i> − ${a}. Either way |<i>PS</i>′ − <i>PS</i>| = 2${a}, a free check`,
    why: `${fr(X2, '16')} − ${fr(Y2, '9')} = 1 at (−8, −3√3): <i>PS</i> = 4 + 10 = 14 and <i>PS</i>′ = 10 − 4 = 6 (<i>ex</i> − ${a} would give −14); at ${x} = 6 on ${fr(X2, '4')} − ${fr(Y2, '5')} = 1, 7 and 11.`,
    say: null,
  },
  // pp. 926, 929, 931, 933–934
  {
    topic: 4,
    kind: 'remember',
    q: 'What is a rectangular hyperbola, and what is its eccentricity?',
    a: `Equal axes, ${a} = ${b}: the asymptotes ${y} = ±${x} are perpendicular, and ${sq(e)} = 1 + 1 gives ${e} = √2. Equal axes, perpendicular asymptotes, rectangular (equilateral) and ${e} = √2 are one fact`,
    why: `${e} = √2 forces ${fr(B2, A2)} = ${sq(e)} − 1 = 1, so ${a} = ${b}.`,
    say: 'Rectangular means root-two.',
  },
  // pp. 931, 933
  {
    topic: 4,
    kind: 'mixup',
    q: `The angle between the asymptotes is 60°: is ${e} = ${fr('2', '√3')} or 2?`,
    a: `It depends on which angle: the asymptotes make 60° and 120°. Each makes <i>α</i> with the ${x}-axis, tan <i>α</i> = ${BA}, and the angle across the transverse axis is 2<i>α</i>. If 60° contains the transverse axis, ${BA} = tan 30° and ${e} = ${fr('2', '√3')}; if that angle is 120°, ${BA} = tan 60° = √3 and ${e} = 2. Give both when the question does not say`,
    why: `${sq(e)} = 1 + ${fr('1', '3')} = ${fr('4', '3')}, or 1 + 3 = 4.`,
    say: null,
  },
  // pp. 926, 932–933
  {
    topic: 4,
    kind: 'mistake',
    q: `Is the eccentricity of ${fr(X2, '16')} − ${fr(Y2, '9')} = 1 equal to ${fr('√7', '4')}?`,
    a: `No: ${fr('5', '4')}, from ${sq(c)} = 16 + 9 = 25. ${fr('√7', '4')} imports the ellipse’s minus sign (the most destructive error), ${fr('3', '4')} is ${BA}, ${fr('4', '5')} is ${fr(a, c)}. An ${e} ≤ 1 is impossible for a hyperbola: it means an error somewhere, most often this sign. The other listed slips: the larger denominator picking the axis, ${fr(a, b)} for the asymptote slope, and only one of the two asymptote angles`,
    why: `${fr(X2, '25')} − ${fr(Y2, '16')} = 1: the asymptotes are ${y} = ±${fr('4', '5')}${x}, not ±${fr('5', '4')}${x} or ±${fr('16', '25')}${x}.`,
    say: 'Asymptote slope is bee-over-ay.',
  },
  // p. 933
  {
    topic: 4,
    kind: 'shortcut',
    q: 'What is the hyperbola reflex that contrasts with the ellipse?',
    a: `Positive term gives the transverse axis and the foci; ${sq(c)} = ${A2} + ${B2} (plus); ${e} = ${fr(c, a)}, and confirm ${e} > 1; asymptotes ${y} = ±${BA}${x}; latus rectum ${fr(`2${B2}`, a)}. And ${e} = √2 ⟺ rectangular, at once`,
    why: `${fr(X2, '9')} − ${fr(Y2, '27')} = 1: ${c} = 6, foci (±6, 0), ${e} = 2, latus rectum 18, asymptotes ${y} = ±√3${x}.`,
    say: null,
  },

  // ── Topic 06 · Parametric Forms and the Auxiliary Circle ──
  // pp. 935–937, 939, 947
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the auxiliary circle and the eccentric angle of a point of an ellipse?',
    a: `The auxiliary circle is the circle on the major axis as diameter, ${X2} + ${Y2} = ${A2}. Drop the perpendicular <i>PN</i> from ${P} to the major axis and produce it to meet the circle at ${Q}, on the same side: ${th} = ∠<i>QON</i> is the eccentric angle, ${Q} = (${a} cos ${th}, ${a} sin ${th}) and ${P} = (${a} cos ${th}, ${b} sin ${th}). The ellipse is the circle with every ordinate shrunk by ${BA}: ${fr('<i>PN</i>', '<i>QN</i>')} = ${BA}, and the length <i>PQ</i> = (${a} − ${b})|sin ${th}|: a length, so the modulus, since sin ${th} < 0 for π < ${th} < 2π`,
    why: `${fr(X2, '25')} + ${fr(Y2, '9')} = 1, ${th} = ${fr('π', '3')}: auxiliary circle ${X2} + ${Y2} = 25, ${P} = (${fr('5', '2')}, ${fr('3√3', '2')}), ${Q} = (${fr('5', '2')}, ${fr('5√3', '2')}).`,
    say: 'Auxiliary means major axis as diameter: radius <i>a</i>, nothing else.',
  },
  // pp. 936–939, 941, 947
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the parametric points of the circle, parabola, ellipse, hyperbola and xy = c²?',
    a: `Circle (${r} cos ${th}, ${r} sin ${th}), shifted (${h} + ${r} cos ${th}, ${k} + ${r} sin ${th}), ${th} the true central angle; parabola (<i>at</i><sup>2</sup>, 2<i>at</i>); ellipse (${a} cos ${th}, ${b} sin ${th}); hyperbola (${a} sec ${th}, ${b} tan ${th}), from sec<sup>2</sup> ${th} − tan<sup>2</sup> ${th} = 1, with ${th} ≠ ${fr('π', '2')}, ${fr('3π', '2')}; <i>xy</i> = ${sq(c)}: (<i>ct</i>, ${fr(c, t)}), ${t} ≠ 0. For the hyperbola the tangent to the auxiliary circle at ${Q} meets the axis at (${a} sec ${th}, 0), and |sec ${th}| ≥ 1 keeps every point out of −${a} < ${x} < ${a}: cos ${th} > 0 is the right branch, cos ${th} < 0 the left`,
    why: `<i>xy</i> = 16: (4${t}, ${fr('4', t)}), at ${t} = 2 the point (8, 2); ${fr(X2, '9')} − ${fr(Y2, '16')} = 1 at ${th} = ${fr('π', '4')}: (3√2, 4), right branch.`,
    say: 'Plus takes cos-sin, minus takes sec-tan.',
  },
  // pp. 937–938, 943–944, 947
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the chord joining eccentric angles θ₁, θ₂ of an ellipse, and when does it pass through the focus (ae, 0)?',
    a: `${fr(x, a)} cos ${fr(`${th1} + ${th2}`, '2')} + ${fr(y, b)} sin ${fr(`${th1} + ${th2}`, '2')} = cos ${fr(`${th1} − ${th2}`, '2')}. Putting (<i>ae</i>, 0) in: ${e} cos ${fr(`${th1} + ${th2}`, '2')} = cos ${fr(`${th1} − ${th2}`, '2')}, i.e. tan ${fr(th1, '2')} tan ${fr(th2, '2')} = ${fr(`${e} − 1`, `${e} + 1`)}`,
    why: `${fr(X2, '4')} + ${fr(Y2, '3')} = 1 (${e} = ${fr('1', '2')}), ${th1} = ${fr('π', '3')}: tan ${fr(th2, '2')} = −${fr('1', '√3')}, ${th2} = −${fr('π', '3')}; the ends (1, ±${fr('3', '2')}) make the latus rectum, length 3.`,
    say: null,
  },
  // pp. 936–937, 939, 942, 946–947
  {
    topic: 5,
    kind: 'mixup',
    q: `The eccentric angle θ of P, or the angle φ that OP makes with the ${x}-axis: how is each found?`,
    a: `${th} comes from cos ${th} = ${fr(x1, a)} and sin ${th} = ${fr(y1, b)} together (both signs fix the quadrant); ${ph} from tan ${ph} = ${fr(y1, x1)} = ${BA} tan ${th}. They agree only at the four axis ends (for ${a} ≠ ${b}); with ${a} > ${b}, ${ph} < ${th} strictly inside the first quadrant, since the squash pulls ${P} towards the major axis`,
    why: `(2√2, √2) on ${fr(X2, '16')} + ${fr(Y2, '4')} = 1: cos ${th} = sin ${th} = ${fr('1', '√2')}, ${th} = ${fr('π', '4')}; tan<sup>−1</sup> ${fr('1', '2')} is ${ph}, the trap answer.`,
    say: 'The eccentric angle lives on the circle, not on the ellipse.',
  },
  // pp. 942–943, 946–947
  {
    topic: 5,
    kind: 'mistake',
    q: `Is the point of ${fr(X2, '16')} − ${fr(Y2, '9')} = 1 with parameter ${fr('2π', '3')} the point (−2, ${fr('3√3', '2')})?`,
    a: `No: that is the ellipse form (${a} cos ${th}, ${b} sin ${th}), and it gives ${fr('1', '4')} − ${fr('3', '4')} = −${fr('1', '2')} ≠ 1. The hyperbola needs (${a} sec ${th}, ${b} tan ${th}) = (−8, −3√3), on the left branch since cos ${fr('2π', '3')} < 0. The ellipse form lands on the hyperbola only at ${th} = 0 and π, the vertices. The other listed slips: sin ${th} = ${fr(y1, a)} (each coordinate goes over its own semi-axis), ${X2} + ${Y2} = ${A2} + ${B2} called the auxiliary circle (it is the director circle), and ${th} from cos ${th} alone`,
    why: `Check: ${fr('64', '16')} − ${fr('27', '9')} = 4 − 3 = 1.`,
    say: null,
  },
  // pp. 941, 945, 947
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A question says “a variable point on the ellipse”. What do you write first?',
    a: `(${a} cos ${th}, ${b} sin ${th}): two unknowns become one, the constraint disappears, and the problem becomes trigonometry; (<i>at</i><sup>2</sup>, 2<i>at</i>) and (${a} sec ${th}, ${b} tan ${th}) likewise. For “eccentric angle versus actual angle”, tan ${ph} = ${BA} tan ${th} is a five-second substitution`,
    why: `${P} at ${th} = ${fr('π', '6')} on ${fr(X2, '25')} + ${fr(Y2, '9')} = 1, ${Q} its auxiliary point: <i>PQ</i> = (5 − 3) · ${fr('1', '2')} = 1.`,
    say: null,
  },

  // ── Topic 07 · Tangents to a Conic ──
  // pp. 948–949, 951–952
  {
    topic: 6,
    kind: 'remember',
    q: `What makes a line a tangent, and how does that give the parabola’s condition ${c} = ${fr(a, m)}?`,
    a: `A tangent meets the conic in two coincident points: substituting the line gives a quadratic with zero discriminant. ${y} = <i>mx</i> + ${c} in ${Y2} = 4<i>ax</i> (${m} ≠ 0): <i>my</i><sup>2</sup> − 4<i>ay</i> + 4<i>ac</i> = 0, and 16${A2} − 16<i>amc</i> = 0 gives ${c} = ${fr(a, m)}, contact (${fr(a, sq(m))}, ${fr(`2${a}`, m)}). The quadratic needs a line not parallel to a parabola’s axis or to a hyperbola’s asymptote: such a line gives a linear equation and meets the curve once, crossing it`,
    why: `${y} = ${c} meets ${Y2} = 4<i>ax</i> only at (${fr(sq(c), `4${a}`)}, ${c}), and crosses it there: no tangent of slope 0.`,
    say: 'Tangent means equal roots.',
  },
  // pp. 949–950, 952, 960–961
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the condition for y = mx + c to touch each conic?',
    a: `Circle ${X2} + ${Y2} = ${sq(r)}: ${sq(c)} = ${sq(r)}(1 + ${sq(m)}). Parabola: ${c} = ${fr(a, m)}, ${m} ≠ 0. Ellipse: ${sq(c)} = ${A2}${sq(m)} + ${B2}, contact (−${fr(`${A2}${m}`, c)}, ${fr(B2, c)}). Hyperbola: ${sq(c)} = ${A2}${sq(m)} − ${B2}, contact (−${fr(`${A2}${m}`, c)}, −${fr(B2, c)}), real only for |${m}| > ${BA}: lines flatter than an asymptote, or parallel to one, never touch (|${m}| = ${BA} gives ${c} = 0, the asymptote itself). So a given slope gives two tangents to a circle or an ellipse, one to a parabola, and two or none to a hyperbola`,
    why: `${y} = 2${x} + ${c} and ${fr(X2, '9')} − ${fr(Y2, '4')} = 1: ${sq(c)} = 36 − 4 = 32, ${c} = ±4√2 (2 > ${fr('2', '3')}).`,
    say: 'Tangency flips the sign: ellipse plus, hyperbola minus.',
  },
  // pp. 948–951, 960–961
  {
    topic: 6,
    kind: 'remember',
    q: 'What is T, what is T = 0, and how many tangents come from a point?',
    a: `Write the conic as ${S} = 0 and substitute ${X2} → <i>xx</i><sub>1</sub>, ${Y2} → <i>yy</i><sub>1</sub>, <i>xy</i> → ${fr('1', '2')}(<i>xy</i><sub>1</sub> + ${x1}${y}), ${x} → ${fr('1', '2')}(${x} + ${x1}), ${y} → ${fr('1', '2')}(${y} + ${y1}). ${T} = 0 is the tangent at a point on the conic, and the chord of contact from a point outside it; the pair of tangents is <i>SS</i><sub>1</sub> = ${sq(T)}. Circle, parabola, ellipse: ${S1} > 0 two tangents, = 0 one, < 0 none. Hyperbola, reversed: ${S1} < 0 two (outside the curve), = 0 one, > 0 none (inside a branch); from a point on an asymptote only one, and from the centre none`,
    why: `(1, 1) and ${X2} + ${Y2} − 2${x} − 4${y} + 3 = 0: ${S1} = −1 < 0, inside, no tangent; from (2, 3) to ${X2} + ${Y2} = 4 the chord of contact is 2${x} + 3${y} = 4.`,
    say: '<i>T</i> = 0 on the curve is a tangent, outside the curve a chord of contact.',
  },
  // pp. 950, 952–953, 957–958
  {
    topic: 6,
    kind: 'remember',
    q: 'What is the director circle, and where do perpendicular tangents meet for each conic?',
    a: `The locus of the meeting point of two perpendicular tangents. A line through ${P}(${h}, ${k}) has ${c} = ${k} − <i>mh</i>; tangency gives ${sq(m)}(${sq(h)} − ${A2}) − 2<i>hkm</i> + (${sq(k)} − ${B2}) = 0, and ${m1}${m2} = −1 gives ${sq(h)} + ${sq(k)} = ${A2} + ${B2}. Ellipse ${X2} + ${Y2} = ${A2} + ${B2}; circle ${X2} + ${Y2} = 2${sq(r)}; hyperbola ${X2} + ${Y2} = ${A2} − ${B2}, real when ${a} > ${b} (at ${a} = ${b} it shrinks to the centre, where the asymptotes, the limiting tangents, are perpendicular); parabola: the directrix ${x} = −${a}`,
    why: `${fr(X2, '8')} + ${fr(Y2, '2')} = 1 and ${P}(3, 1): 9 + 1 = 10 = 8 + 2, the slopes 3 ± √10 multiply to −1, and the chord of contact is 3${x} + 4${y} = 8.`,
    say: null,
  },
  // pp. 950, 958, 961
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the parametric tangents of the parabola and xy = c², and where do the tangents at t₁, t₂ meet?',
    a: `${Y2} = 4<i>ax</i>: at (<i>at</i><sup>2</sup>, 2<i>at</i>), <i>ty</i> = ${x} + <i>at</i><sup>2</sup>, slope ${fr('1', t)} (${t} = 0 gives ${x} = 0); the tangents at ${t1}, ${t2} meet at (<i>a</i>${t1}${t2}, ${a}(${t1} + ${t2})). Ellipse: ${fr(`${x} cos ${th}`, a)} + ${fr(`${y} sin ${th}`, b)} = 1; hyperbola: ${fr(`${x} sec ${th}`, a)} − ${fr(`${y} tan ${th}`, b)} = 1; <i>xy</i> = ${sq(c)} at (<i>ct</i>, ${fr(c, t)}): ${x} + ${sq(t)}${y} = 2<i>ct</i>`,
    why: `${Y2} = 4${x}, ${t1} = 1 and ${t2} = 3: ${y} = ${x} + 1 and 3${y} = ${x} + 9 meet at (3, 4).`,
    say: null,
  },
  // pp. 949, 952, 959–960
  {
    topic: 6,
    kind: 'mixup',
    q: 'Ellipse tangency: c² = a²m² + b², or a²m² − b²?',
    a: `Plus for the ellipse, minus for the hyperbola: the opposite pairing to ${sq(c)} = ${A2} − ${B2} (ellipse) and ${A2} + ${B2} (hyperbola). Write the two pairs side by side once. The director circles follow the tangency sign: ${A2} + ${B2} for the ellipse, ${A2} − ${B2} for the hyperbola`,
    why: `Slope ${fr('2', '3')} on ${fr(X2, '9')} + ${fr(Y2, '4')} = 1: ${sq(c)} = 9 · ${fr('4', '9')} + 4 = 8, so ${y} = ${fr('2', '3')}${x} ± 2√2; the director circle of ${fr(X2, '16')} + ${fr(Y2, '9')} = 1 is ${X2} + ${Y2} = 25, not 7.`,
    say: null,
  },
  // pp. 957, 960
  {
    topic: 6,
    kind: 'mistake',
    q: `Is the tangent of slope 2 to ${Y2} = 16${x} the line ${y} = 2${x} + 8?`,
    a: `No: ${y} = 2${x} + 2, touching at (1, 4). 4${a} = 16, so ${a} = 4 and ${c} = ${fr(a, m)} = 2; ${y} = 2${x} + 8 used 16 as ${a}, and gives ${Y2} − 8${y} + 64 = 0, discriminant −192: it misses the curve. The other listed slips: ${T} = 0 called a tangent from a point not on the conic, a vertical tangent missed by the slope form, a hyperbola tangent flatter than the asymptotes, and two tangents assumed from a positive ${S1} on a hyperbola`,
    why: `From (0, 4) to ${Y2} = 4${x}: the slope form gives only ${y} = ${fr(x, '4')} + 4; the second tangent is ${x} = 0, the tangent at the vertex.`,
    say: null,
  },
  // pp. 955, 960
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Does a line touch a circle? Decide without a discriminant.',
    a: 'A line touches a circle exactly when its perpendicular distance from the centre equals the radius: one use of the distance formula',
    why: `${y} = 3${x} + ${c} and ${X2} + ${Y2} = 9: ${fr(`|${c}|`, '√10')} = 3, so ${c} = ±3√10; 3${x} + 4${y} − 19 = 0 is ${fr('|6 − 12 − 19|', '5')} = 5 from (2, −3), the radius.`,
    say: 'Circle? Distance equals radius, never a discriminant.',
  },
  // pp. 955, 958, 960
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Are the two tangents from a point perpendicular? Answer without finding them.',
    a: `Put ${y} − ${y1} = ${m}(${x} − ${x1}) into the tangency condition and stop at the quadratic in ${m}: ${m1} + ${m2} = −${fr(B, A)} and ${m1}${m2} = ${fr(C, A)} answer angle and perpendicularity questions without a square root`,
    why: `(3, 1) and ${fr(X2, '8')} + ${fr(Y2, '2')} = 1: (1 − 3${m})<sup>2</sup> = 8${sq(m)} + 2 gives ${sq(m)} − 6${m} − 1 = 0, product −1: perpendicular.`,
    say: null,
  },

  // ── Topic 08 · Normals to a Conic ──
  // pp. 961–963, 973
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the normal to a conic, and what is the normal to a circle?',
    a: `The line through the point ${P} perpendicular to the tangent there: <i>m</i><sub><i>N</i></sub> = −${fr('1', '<i>m</i><sub><i>T</i></sub>')}; a horizontal tangent has a vertical normal and a vertical tangent a horizontal one. For a circle the normal is the radius produced, the line through ${P} and the centre: for ${X2} + ${Y2} = ${sq(r)} at (${x1}, ${y1}), ${x1}${y} − ${y1}${x} = 0, i.e. ${y} = ${fr(y1, x1)}${x}, one line through the centre (not any line through it)`,
    why: `${X2} + ${Y2} − 4${x} + 6${y} − 12 = 0 at (5, 1): the line through (5, 1) and (2, −3), 4${x} − 3${y} = 17.`,
    say: 'Circle normal? Head for the centre.',
  },
  // pp. 963–964, 966, 973
  {
    topic: 7,
    kind: 'remember',
    q: `What are the normals to ${Y2} = 4ax at (x₁, y₁), at the point t, and of slope m?`,
    a: `At (${x1}, ${y1}): ${y} − ${y1} = −${fr(y1, `2${a}`)}(${x} − ${x1}), ${y1} ≠ 0 (at the vertex the normal is ${y} = 0). At (<i>at</i><sup>2</sup>, 2<i>at</i>): the tangent’s slope is ${fr('1', t)}, so the normal’s is −${t}: ${y} + <i>tx</i> = 2<i>at</i> + <i>at</i><sup>3</sup>. Put ${t} = −${m}: slope form ${y} = <i>mx</i> − 2<i>am</i> − <i>am</i><sup>3</sup>, foot (<i>am</i><sup>2</sup>, −2<i>am</i>)`,
    why: `${Y2} = 8${x}, slope 2: ${y} = 2${x} − 8 − 16 = 2${x} − 24, foot (8, −8).`,
    say: 'Tangent two terms, normal three.',
  },
  // pp. 961, 963–964, 970, 974
  {
    topic: 7,
    kind: 'remember',
    q: 'How many normals pass through a point (h, k) to a parabola, and where does the normal at t₁ meet it again?',
    a: `The normal through (${h}, ${k}): <i>am</i><sup>3</sup> + ${m}(2${a} − ${h}) + ${k} = 0, a cubic with up to three real roots and no ${sq(m)} term, so ${m}<sub>1</sub> + ${m2} + ${m}<sub>3</sub> = 0 and ${t1} + ${t2} + ${t3} = 0. The normal at ${t1} ≠ 0 meets the curve again at ${t2} = −${t1} − ${fr('2', t1)} (factor out ${t2} − ${t1}), and then |${t2}| ≥ 2√2, nearest the vertex when ${t1} = ±√2. At the vertex (${t1} = 0) the normal is the axis, which meets the parabola only there`,
    why: `${Y2} = 4${x}, ${t1} = 1: ${t2} = −3, ${Q}(9, −6), on the normal ${x} + ${y} = 3.`,
    say: null,
  },
  // pp. 963, 966, 973–974
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the normals to the ellipse and the hyperbola at (x₁, y₁) and at a parametric point?',
    a: `Ellipse: ${fr(`${A2}${x}`, x1)} − ${fr(`${B2}${y}`, y1)} = ${A2} − ${B2}; at (${a} cos ${th}, ${b} sin ${th}): <i>ax</i> sec ${th} − <i>by</i> csc ${th} = ${A2} − ${B2}, undefined at ${th} = 0, ${fr('π', '2')}, π, ${fr('3π', '2')}, where the normal is simply the major or minor axis. Hyperbola: ${fr(`${A2}${x}`, x1)} + ${fr(`${B2}${y}`, y1)} = ${A2} + ${B2}; at (${a} sec ${th}, ${b} tan ${th}): <i>ax</i> cos ${th} + <i>by</i> cot ${th} = ${A2} + ${B2}. <i>xy</i> = ${sq(c)} at (<i>ct</i>, ${fr(c, t)}): ${t}<sup>3</sup>${x} − <i>ty</i> = ${c}(${t}<sup>4</sup> − 1)`,
    why: `(4, ${fr('9', '5')}) on ${fr(X2, '25')} + ${fr(Y2, '9')} = 1: 25${x} − 20${y} = 64; (3√2, 2) on ${fr(X2, '9')} − ${fr(Y2, '4')} = 1: 3√2${x} + 4${y} = 26.`,
    say: 'Ellipse minus-minus, hyperbola plus-plus.',
  },
  // pp. 962, 964, 974
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the reflection (optical) property of each conic?',
    a: `Parabola: the tangent at ${P} makes equal angles with the focal radius <i>SP</i> and with the line through ${P} parallel to the axis, so rays parallel to the axis reflect through the focus (a dish, a headlight). Ellipse: the normal at ${P} bisects ∠<i>SPS</i>′, so anything from one focus converges on the other (the whispering gallery, lithotripsy). Hyperbola: the tangent at ${P} bisects ∠<i>SPS</i>′, so a ray aimed at one focus reflects off the curve towards the other focus`,
    why: 'A whispering gallery 100 m long and 50 m wide: the two listeners stand at the foci, 2√(2500 − 625) = 50√3 ≈ 86.60 m apart.',
    say: null,
  },
  // pp. 964, 973
  {
    topic: 7,
    kind: 'mixup',
    q: 'Ellipse or hyperbola: is it the normal or the tangent that bisects ∠SPS′?',
    a: 'Ellipse: the normal bisects the interior angle ∠<i>SPS</i>′ (equivalently, the tangent makes equal angles with <i>SP</i> and <i>S</i>′<i>P</i>). Hyperbola: the tangent bisects ∠<i>SPS</i>′. For a reflection, whispering-gallery or headlight question about the ellipse, reach for the normal',
    why: `And for the circle the normal always passes through the centre (a circle has no focus distinct from it): through the origin only when the centre is there.`,
    say: null,
  },
  // pp. 969, 972–973
  {
    topic: 7,
    kind: 'mistake',
    q: `Is the normal of slope 2 to ${Y2} = 8${x} the line ${y} = 2${x} − 8?`,
    a: `No: ${y} = 2${x} − 24, foot (8, −8). ${y} = 2${x} − 8 drops the cubic term (${y} = <i>mx</i> − 2<i>am</i> is a normal only at ${m} = 0, the axis): it cuts the curve at (8, 8) and (2, −4) and is normal at neither. The other listed slips: the tangent given for the normal (check that the slopes multiply to −1), the raw coefficient used as ${a}, the ellipse and hyperbola signs mixed (minus-and-minus, plus-and-plus), and the parametric normal forced at the axis ends`,
    why: `At (8, −8) the tangent’s slope is ${fr('4', y)} = −${fr('1', '2')}, and 2 × (−${fr('1', '2')}) = −1.`,
    say: null,
  },
  // pp. 971, 973
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How do you check any normal in seconds?',
    a: `Verify the foot twice: once in the conic, once in the line. The two substitutions catch every sign, cubing and ${a}-versus-4${a} error. For a circle, skip the formulas: join the point to the centre`,
    why: `${Y2} = 16${x}, slope −1: ${a} = 4, ${y} = −${x} + 12, foot (4, 8): 64 = 16 × 4 and 4 + 8 = 12.`,
    say: 'Check the foot twice: in the curve and in the line.',
  },

  // ── Topic 09 · Applied Problems: Conics in the Real World ──
  // pp. 974–975, 986
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the recipe for an applied conic problem?',
    a: `Put the origin on the curve’s own symmetry feature: the vertex of a parabola, the centre of an ellipse or a hyperbola (a dish: the bottom of the bowl; a cable: its lowest point; an arch: the centre of the base; a cooling tower: the throat). Turn each measurement into a coordinate: with the origin on the axis of symmetry, a diameter or width is twice a coordinate. Use one point to find the missing constant, then answer, then check against the stated extremes. Each model is a two-dimensional cross-section, and a cable is a parabola only under a uniform horizontal load (hanging freely, a catenary)`,
    why: 'A cooling tower is a hyperboloid: its vertical cross-section through the axis is the hyperbola you model.',
    say: 'Origin on the symmetry, always.',
  },
  // pp. 975–977, 985–986
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you model a parabolic reflector, dish or solar cooker?',
    a: `Origin at the vertex, axis along the ${x}-axis: ${Y2} = 4<i>ax</i>. The rim point is (depth, ${fr('1', '2')} × diameter), which fixes ${a}; the bulb, receiver or vessel goes at the focus (${a}, 0), a distance ${a} from the vertex`,
    why: `20 cm across, 5 cm deep: (5, 10) gives 100 = 20${a}, ${a} = 5, ${Y2} = 20${x}; made 45 cm deep with the same focus, ${Y2} = 900, rim diameter 60 cm.`,
    say: 'Diameter is two coordinates, never one.',
  },
  // pp. 977–979, 986
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you model a semi-elliptical arch?',
    a: `Origin at the centre of the base: ${ELL}, ${y} ≥ 0, with ${a} = ${fr('1', '2')} × width and ${b} = the height at the centre. A point a distance <i>d</i> from one end is at |${x}| = ${a} − <i>d</i>; take the positive root`,
    why: `8 m wide, 2 m high, 1.5 m from one end: ${x} = 2.5, ${fr('6.25', '16')} + ${fr(Y2, '4')} = 1, ${y} = ${fr('√39', '4')} ≈ 1.56 m (between 0 and 2, nearer 2).`,
    say: null,
  },
  // pp. 981–983, 986
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you model a hyperbolic cooling tower?',
    a: `Origin at the centre of the throat, the narrowest ring, where the vertices are: ${HYP}, ${a} = ${fr('1', '2')} × throat diameter. The base is at negative ${y}, the top at positive ${y}; find ${B2} from the base point, then substitute the top’s ${y}. The answers are radii: double them for diameters`,
    why: `150 m tall, base 100 m, throat 60 m at 100 m up: (50, −100) gives ${B2} = 5625; at ${y} = 50, ${X2} = 1300, a top diameter of 20√13 ≈ 72.11 m (60 < 72.11 < 100).`,
    say: 'Answer in radii, report in diameters.',
  },
  // pp. 985–986
  {
    topic: 8,
    kind: 'remember',
    q: 'A planet’s nearest and farthest distances from the Sun are given. How do you find its orbit?',
    a: `The Sun is at a focus: nearest = ${a} − ${c}, farthest = ${a} + ${c}. So ${a} = ${fr('1', '2')}(near + far), ${c} = ${fr('1', '2')}(far − near), ${e} = ${fr(c, a)}, ${B2} = ${A2} − ${sq(c)}`,
    why: `2 and 6 astronomical units: ${a} = 4, ${c} = 2, ${e} = ${fr('1', '2')}, ${B2} = 12, ${fr(X2, '16')} + ${fr(Y2, '12')} = 1.`,
    say: null,
  },
  // pp. 979–981, 986
  {
    topic: 8,
    kind: 'mixup',
    q: 'A suspension bridge: “18 m from the middle” or “18 m from the end”, and the cable’s height or the wire’s length?',
    a: `From the middle is ${x} = 18; from the end would be ${x} = 50 − 18 = 32, a different question. The origin is the cable’s lowest point, the shortest wire above the roadway, so a wire’s length is the shortest wire + ${y}, never ${y} alone`,
    why: `Roadway 100 m, wires 30 m and 6 m: (50, 24) gives ${X2} = ${fr('625', '6')}${y}; at ${x} = 18, ${y} ≈ 3.11 and the wire is 9.11 m; ${x} = 32 would give 15.83 m.`,
    say: 'The cable’s zero is not the roadway’s zero.',
  },
  // pp. 981, 986
  {
    topic: 8,
    kind: 'mistake',
    q: 'In that bridge, is the wire 18 m from the middle 3.11 m long?',
    a: 'No: 9.11 m. 3.11 m is the cable’s height above the origin, which is 6 m above the roadway. It is impossible on inspection: the shortest wire in the bridge is 6 m, so any answer below 6 is wrong before the arithmetic is checked',
    why: `Wire length = 6 + ${fr('1944', '625')} = 6 + 3.1104 ≈ 9.11 m.`,
    say: null,
  },
  // pp. 975, 985
  {
    topic: 8,
    kind: 'mistake',
    q: `A parabolic arch of span 20 m and height 5 m is modelled as ${X2} = −20(${y} − 5). Is its origin at the apex?`,
    a: `No: that curve has its apex at (0, 5), so its origin is at the centre of the base, on the ground, and ${y} is the height above the ground. A point 4 m from one end is at ${x} = −6: 36 = −20(${y} − 5), ${y} = 3.2 m. With the origin at the apex instead the arch is ${X2} = −20${y}, and the height is 5 − 1.8 = 3.2 m: either frame works if you say which one you are in`,
    why: `(10, 0) on ${X2} = −4${a}(${y} − 5) gives 100 = 20${a}, so 4${a} = 20.`,
    say: null,
  },
  // pp. 979, 981, 983
  {
    topic: 8,
    kind: 'shortcut',
    q: 'How do you catch a wrong answer in an applied conic problem before checking the arithmetic?',
    a: 'Compare it with the stated extremes: an arch height lies between 0 at the ends and the centre height; a wire is at least the shortest wire; a tower’s diameter above the throat lies between the throat and the base, and flares less nearer the throat. It costs nothing and catches the traps',
    why: 'The tower’s top (50 m above the throat) flares by 12.11 m of diameter, the base (100 m below) by 40 m.',
    say: null,
  },

  // ── Additional topic A · The chord bisected at a given point, and the diameter of a conic ──
  // pp. 987–988, 990, 1007
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the chord of S = 0 bisected at (x₁, y₁), and what are the jobs of T?',
    a: `${T} = ${S1}: substitute the line through (${x1}, ${y1}) into ${S} = 0 and make the sum of the roots put the midpoint there; the halving in the substitution rule is that sum. ${T} = 0 with the point on the conic is the tangent, ${T} = 0 with it outside is the chord of contact, ${T} = ${S1} with it inside is the bisected chord, and for any point ${T} = 0 is the polar`,
    why: `${fr(X2, '25')} + ${fr(Y2, '9')} = 1 bisected at (2, 1): ${S1} = −${fr('164', '225')} < 0, and ${fr(`2${x}`, '25')} + ${fr(y, '9')} − 1 = −${fr('164', '225')} gives 18${x} + 25${y} = 61.`,
    say: '<i>T</i> has four jobs; the point’s position picks which.',
  },
  // pp. 988, 990
  {
    topic: 9,
    kind: 'remember',
    q: 'Where must (x₁, y₁) be for T = S₁ to be a genuine chord?',
    a: `The line must meet the conic in two real points. Circle, parabola, ellipse: a point inside (${S1} < 0); each such point is the midpoint of exactly one chord except the centre of a circle or ellipse, which bisects every chord through it (there ${T} = ${S1} becomes 0 = 0). Hyperbola: inside a branch (${S1} > 0), a chord on that branch; between the branches (${fr(sq(x1), A2)} < ${fr(sq(y1), B2)}), a chord joining them; on an asymptote or between a branch and its asymptotes (0 ≤ ${fr(sq(x1), A2)} − ${fr(sq(y1), B2)} < 1), no chord, except the centre, which bisects every chord through it`,
    why: `${fr(X2, '16')} − ${fr(Y2, '9')} = 1 at (6, 2): ${S1} = ${fr('29', '36')} > 0, inside a branch, and the chord is 27${x} − 16${y} = 130.`,
    say: 'Inside gives <i>T</i> = <i>S</i><sub>1</sub>, outside gives <i>T</i> = 0.',
  },
  // pp. 989–991, 1007–1008
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the diameter of a conic for chords of slope m, for each conic?',
    a: `The locus of the midpoints of the parallel chords. Circle: ${x} + <i>my</i> = 0. Ellipse: ${y} = −${fr(B2, `${A2}${m}`)}${x}; hyperbola: ${y} = ${fr(B2, `${A2}${m}`)}${x}; both through the centre, as every diameter of a central conic is. Parabola ${Y2} = 4<i>ax</i>: ${y} = ${fr(`2${a}`, m)} (${m} ≠ 0), a line parallel to the axis; the axis itself is the diameter only of the chords perpendicular to it`,
    why: `${Y2} = 12${x}, chords of slope 3: ${y} = ${fr('6', '3')} = 2, since ${y} = 3${x} + ${c} gives ${Y2} − 4${y} + 4${c} = 0, roots summing to 4 for every ${c}.`,
    say: 'Every diameter of a central conic goes through the centre; every diameter of a parabola runs parallel to the axis.',
  },
  // pp. 989–991, 1007
  {
    topic: 9,
    kind: 'remember',
    q: 'When are two diameters conjugate, and what are the equi-conjugate diameters?',
    a: `${y} = ${mp}${x} bisects chords of slope ${m}, and ${y} = <i>mx</i> bisects chords of slope ${mp}: ellipse <i>mm</i>′ = −${fr(B2, A2)}, hyperbola <i>mm</i>′ = ${fr(B2, A2)}, circle <i>mm</i>′ = −1 (conjugate diameters of a circle are perpendicular). The axes are the only perpendicular conjugate pair of an ellipse (${a} ≠ ${b}). The equal pair, ${y} = ±${BA}${x}, are the diagonals of the rectangle ${x} = ±${a}, ${y} = ±${b}, each of semi-length √(${fr(`${A2} + ${B2}`, '2')})`,
    why: `${fr(X2, '16')} + ${fr(Y2, '9')} = 1: slopes ${fr('3', '4')} and −${fr('3', '4')}, semi-length √(${fr('25', '2')}) = ${fr('5', '√2')}, and not perpendicular.`,
    say: null,
  },
  // pp. 989, 1007
  {
    topic: 9,
    kind: 'mixup',
    q: 'Is a diameter of a conic the same as a chord through its centre?',
    a: `For a circle or an ellipse, yes; a hyperbola’s diameters also pass through the centre, but those steeper than the asymptotes meet the curve nowhere. A parabola has no centre: its diameters are a family of parallel lines ${y} = ${fr(`2${a}`, m)}, parallel to its axis. That is where the two definitions part company`,
    why: `${Y2} = 20${x}, chords of slope −${fr('5', '2')}: ${a} = 5 and the diameter is ${y} = −4.`,
    say: null,
  },
  // p. 992
  {
    topic: 9,
    kind: 'mistake',
    q: `Is ${x} + ${y} = 8 the chord of ${X2} + ${Y2} = 25 bisected at (4, 4)?`,
    a: `No: there is none. ${S1} = 16 + 16 − 25 = 7 > 0, so (4, 4) is outside, and ${T} = ${S1} hands you a line that misses the circle (its distance from the origin is 4√2 ≈ 5.66 > 5). Check the sign of ${S1} first: the algebra always returns a line, only ${S1} says whether it is a chord`,
    why: `(2, 3) instead: ${S1} = −12 < 0, inside, and the chord is 2${x} + 3${y} = 13.`,
    say: null,
  },
  // pp. 990–992
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Find the chord bisected at a given point without finding its ends.',
    a: `Write ${T} = ${S1} at the point: one line. Solving for the ends and averaging is three times the work, and the ends are usually ugly while the chord is clean`,
    why: `${fr(X2, '36')} + ${fr(Y2, '9')} = 1 at (4, 1): ${fr(`4${x}`, '36')} + ${fr(y, '9')} − 1 = −${fr('4', '9')}, i.e. ${x} + ${y} = 5.`,
    say: null,
  },

  // ── Additional topic B · Pole and polar: what T = 0 means for any point ──
  // pp. 993–995, 1007
  {
    topic: 10,
    kind: 'remember',
    q: 'What is the polar of a point, and what is it for each position of the point?',
    a: `For any point ${P}(${x1}, ${y1}) and conic ${S} = 0, ${T} = 0 is the polar of ${P}, and ${P} the pole of that line. On the conic: the tangent at ${P}. Outside (${S1} > 0; for a hyperbola ${S1} < 0): the chord of contact of the tangents from ${P} (for a hyperbola, from a point on an asymptote other than the centre only one tangent exists). Inside (${S1} < 0; for a hyperbola ${S1} > 0): a real line that misses the conic. At the centre of a central conic: no polar`,
    why: `(3, 4) and ${X2} + ${Y2} = 9: ${S1} = 16 > 0, so the polar 3${x} + 4${y} = 9 is the chord of contact (1.8 from the centre, less than 3).`,
    say: 'The polar exists even when no tangent does.',
  },
  // pp. 993–995, 1008
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you find the pole of lx + my + n = 0?',
    a: `Write ${T} = 0 with unknown (${x1}, ${y1}) and match the coefficients of ${x}, of ${y} and the constant, up to a common multiplier. The results: circle ${X2} + ${Y2} = ${sq(r)}: (−${fr(`<i>l</i>${sq(r)}`, '<i>n</i>')}, −${fr(`${m}${sq(r)}`, '<i>n</i>')}); parabola ${Y2} = 4<i>ax</i>: (${fr('<i>n</i>', '<i>l</i>')}, −${fr(`2<i>am</i>`, '<i>l</i>')}); ellipse: (−${fr(`${A2}<i>l</i>`, '<i>n</i>')}, −${fr(`${B2}${m}`, '<i>n</i>')}); hyperbola: (−${fr(`${A2}<i>l</i>`, '<i>n</i>')}, ${fr(`${B2}${m}`, '<i>n</i>')})`,
    why: `3${x} + 4${y} = 12 and ${X2} + ${Y2} = 25: ${x1} = 3<i>μ</i>, ${y1} = 4<i>μ</i>, 25 = 12<i>μ</i>, so the pole is (${fr('25', '4')}, ${fr('25', '3')}).`,
    say: null,
  },
  // pp. 994, 996, 1008
  {
    topic: 10,
    kind: 'remember',
    q: 'What are La Hire’s theorem, conjugate points and lines, and the polar of a focus?',
    a: `If the polar of ${P} passes through ${Q}, the polar of ${Q} passes through ${P}: for the ellipse the condition ${fr(`${x1}${x2}`, A2)} + ${fr(`${y1}${y2}`, B2)} = 1 is symmetric. Such points are conjugate (circle: ${x1}${x2} + ${y1}${y2} = ${sq(r)}); lines are conjugate when the pole of each lies on the other (circle: ${sq(r)}(<i>l</i><sub>1</sub><i>l</i><sub>2</sub> + ${m1}${m2}) = <i>n</i><sub>1</sub><i>n</i><sub>2</sub>). The polar of a focus is the corresponding directrix: (<i>ae</i>, 0) gives ${x} = ${fr(a, e)} for the ellipse, (${a}, 0) gives ${x} = −${a} for ${Y2} = 4<i>ax</i>`,
    why: `${fr(X2, '25')} + ${fr(Y2, '16')} = 1: the polar of the focus (3, 0) is ${fr(`3${x}`, '25')} = 1, i.e. ${x} = ${fr('25', '3')} = ${fr(a, e)}.`,
    say: 'Focus and directrix are pole and polar.',
  },
  // pp. 993–996
  {
    topic: 10,
    kind: 'mixup',
    q: 'The polar of a point inside a conic: is it a chord of contact?',
    a: `No: from an inside point there are no real tangents, so its polar is a real line and nothing more. For a hyperbola “inside” (a point within a branch) means ${S1} > 0, and a point outside it (${S1} < 0, off the asymptotes) has two tangents, its polar their chord of contact`,
    why: `(2, −1) and ${fr(X2, '9')} − ${fr(Y2, '4')} = 1: ${S1} = −${fr('29', '36')} < 0, outside the curve, so the polar 8${x} + 9${y} = 36 is a chord of contact.`,
    say: null,
  },
  // pp. 994, 996
  {
    topic: 10,
    kind: 'mistake',
    q: `What is the pole of 2${x} − 3${y} = 0 with respect to ${fr(X2, '4')} + ${fr(Y2, '9')} = 1?`,
    a: `There is no finite pole: the line passes through the centre, so <i>n</i> = 0 and the formula divides by zero (the pole is at infinity). The same holds for the axes, the asymptotes and every diameter of a central conic, and for a line parallel to a parabola’s axis (<i>l</i> = 0)`,
    why: `${x} − 2${y} + 3 = 0 and ${Y2} = 8${x} do have one: ${a} = 2 gives (3, 8), whose polar 8${y} = 4(${x} + 3) is the line.`,
    say: null,
  },
  // p. 995
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Chords of y² = 4ax subtend a right angle at the vertex. Find the locus of their poles in one line.',
    a: `The chords satisfy ${t1}${t2} = −4, so each is 2${x} − (${t1} + ${t2})${y} − 8${a} = 0, through the fixed point (4${a}, 0). The poles of all lines through a fixed point fill that point’s polar (La Hire): the polar of (4${a}, 0) is ${x} = −4${a}`,
    why: `The pole formula gives (−4${a}, ${a}(${t1} + ${t2})): the abscissa never changes.`,
    say: null,
  },

  // ── Additional topic C · Asymptotes as an object, and the conjugate hyperbola ──
  // pp. 997–998, 1008
  {
    topic: 11,
    kind: 'remember',
    q: `What are the pair of asymptotes and the conjugate hyperbola of ${HYP}, and how are the three related?`,
    a: `The asymptotes <i>bx</i> − <i>ay</i> = 0 and <i>bx</i> + <i>ay</i> = 0 multiply to ${fr(X2, A2)} − ${fr(Y2, B2)} = 0; the conjugate hyperbola is ${fr(X2, A2)} − ${fr(Y2, B2)} = −1, i.e. ${fr(Y2, B2)} − ${fr(X2, A2)} = 1, its transverse and conjugate axes swapped. One left side, right sides 1, 0, −1: with the three polynomials ${S}, ${A}, ${S}″, ${S} + ${S}″ = 2${A}`,
    why: `9${X2} − 16${Y2} = 144: asymptotes 9${X2} − 16${Y2} = 0, i.e. 3${x} ± 4${y} = 0; conjugate 9${X2} − 16${Y2} = −144.`,
    say: 'One, zero, minus one: hyperbola, asymptotes, conjugate.',
  },
  // pp. 998, 1008
  {
    topic: 11,
    kind: 'remember',
    q: 'How does the conjugate hyperbola compare with the original?',
    a: `Transverse axis the ${y}-axis, length 2${b}; vertices (0, ±${b}); the same ${c} = √(${A2} + ${B2}), foci (0, ±${c}); ${e}′ = √(1 + ${fr(A2, B2)}); directrices ${y} = ±${fr(b, `${e}′`)}; latus rectum ${fr(`2${A2}`, b)}; the same asymptotes. Hence ${fr('1', sq(e))} + ${fr('1', `${e}′<sup>2</sup>`)} = 1, and the four foci lie on ${X2} + ${Y2} = ${A2} + ${B2}`,
    why: `${e} = ${fr('13', '12')}: ${fr('1', `${e}′<sup>2</sup>`)} = 1 − ${fr('144', '169')} = ${fr('25', '169')}, so ${e}′ = ${fr('13', '5')}.`,
    say: 'The hyperbola and its pair of asymptotes differ only in the constant term.',
  },
  // pp. 998, 1008
  {
    topic: 11,
    kind: 'remember',
    q: 'What facts about the asymptotes are worth carrying?',
    a: `The angle across the transverse axis is 2${th}, ${th} = tan<sup>−1</sup> ${BA}, and ${e} = sec ${th}; the axes bisect the angles between them. For any point of the hyperbola the product of its distances to the two asymptotes is ${fr(`${A2}${B2}`, `${A2} + ${B2}`)}. Any tangent’s portion between the asymptotes is bisected at the point of contact, and its triangle with them has area <i>ab</i>. The asymptotes are the only diameters that are their own conjugates (${m} = ±${BA})`,
    why: `${fr(X2, '9')} − ${fr(Y2, '16')} = 1: product ${fr('144', '25')}; for ${fr(X2, '16')} − ${fr(Y2, '9')} = 1 every such triangle has area 12.`,
    say: null,
  },
  // pp. 999–1001
  {
    topic: 11,
    kind: 'remember',
    q: 'How do you find the asymptotes of a hyperbola not centred at the origin?',
    a: `The curve and its asymptotes differ only in the constant: choose ${lam} so that ${S} + ${lam} = 0 is a pair of lines: for ${A}${X2} + 2<i>Hxy</i> + ${B}${Y2} + 2<i>Gx</i> + 2<i>Fy</i> + ${C} = 0, <i>AB</i>(${C} + ${lam}) + 2<i>FGH</i> − <i>AF</i><sup>2</sup> − <i>BG</i><sup>2</sup> − (${C} + ${lam})<i>H</i><sup>2</sup> = 0 (exactly one ${lam}). Factorise; where the asymptotes meet is the centre, and the conjugate hyperbola is ${S} + 2${lam} = 0`,
    why: `<i>xy</i> − 3${y} − 2${x} = 0: ${lam} = 6, (${x} − 3)(${y} − 2) = 0, asymptotes ${x} = 3 and ${y} = 2, the curve <i>XY</i> = 6 about (3, 2), its conjugate <i>xy</i> − 2${x} − 3${y} + 12 = 0.`,
    say: null,
  },
  // p. 999
  {
    topic: 11,
    kind: 'mixup',
    q: 'Conjugate hyperbola or rectangular hyperbola: is one a kind of the other?',
    a: `No: they are unrelated conditions. Every hyperbola has a conjugate; only ${a} = ${b} makes one rectangular. Since ${fr('1', sq(e))} + ${fr('1', `${e}′<sup>2</sup>`)} = 1, both eccentricities exceed 1 and at least one is at most √2; both equal √2 only for the rectangular hyperbola`,
    why: `9${X2} − 16${Y2} = 144: ${e} = ${fr('5', '4')} and ${e}′ = ${fr('5', '3')}, with ${fr('16', '25')} + ${fr('9', '25')} = 1.`,
    say: null,
  },
  // p. 1001
  {
    topic: 11,
    kind: 'mistake',
    q: 'Asymptotes 3x − 4y = 0 and 3x + 4y = 0, through (8, 3√3): is the hyperbola 9x² − 16y² = 1?',
    a: `No: the curve is 9${X2} − 16${Y2} = <i>K</i>, the asymptotes’ left side with a constant still to find; the point gives <i>K</i> = 576 − 432 = 144, so ${fr(X2, '16')} − ${fr(Y2, '9')} = 1. The asymptotes fix the left side, never the constant`,
    why: `A constant of 0 would give the asymptotes themselves, and −144 the conjugate.`,
    say: null,
  },
  // pp. 998, 1001
  {
    topic: 11,
    kind: 'shortcut',
    q: 'The angle between the asymptotes, across the transverse axis, is 60°. Find e in one line.',
    a: `${e} = sec ${th}, with 2${th} the angle: ${th} = 30°, ${e} = sec 30° = ${fr('2', '√3')}. If the angle across the transverse axis is 120°, ${e} = sec 60° = 2. No need for tan ${th} = ${BA} and ${sq(e)} = 1 + ${fr(B2, A2)}`,
    why: `${a} = ${b}: ${th} = 45° and ${e} = sec 45° = √2, the rectangular hyperbola.`,
    say: null,
  },

  // ── Additional topic D · Families of conics: S + λS′ = 0 ──
  // pp. 1002–1003, 1008
  {
    topic: 12,
    kind: 'remember',
    q: 'Why does S + λS′ = 0 pass through the common points of S = 0 and S′ = 0, and what families does it give?',
    a: `At a common point ${P}, ${S}(${P}) = 0 and ${S}′(${P}) = 0, so ${S}(${P}) + ${lam}${S}′(${P}) = 0 for every ${lam}: one unknown, fixed by one more condition. Circles through two circles’ meeting points: ${S} + ${lam}${S}′ = 0, ${lam} ≠ −1; through a circle and a line: ${S} + ${lam}<i>L</i> = 0; through two points ${A}, ${B}: the diameter form + ${lam}<i>L</i><sub><i>AB</i></sub> = 0; touching <i>L</i> = 0 at (${x1}, ${y1}): (${x} − ${x1})<sup>2</sup> + (${y} − ${y1})<sup>2</sup> + ${lam}<i>L</i> = 0; conics through four meeting points: ${S} + ${lam}${S}′ = 0`,
    why: `Through the meeting points of ${X2} + ${Y2} − 4${x} − 6${y} + 8 = 0 and ${X2} + ${Y2} − 2${x} − 4${y} + 4 = 0 and (3, 3): −4 + 4${lam} = 0, ${lam} = 1, ${X2} + ${Y2} − 3${x} − 5${y} + 6 = 0.`,
    say: '<i>S</i> + <i>λS</i>′ = 0 passes through every common point of <i>S</i> = 0 and <i>S</i>′ = 0.',
  },
  // pp. 1003–1004, 1006, 1008
  {
    topic: 12,
    kind: 'remember',
    q: 'What does λ = −1 give for two circles?',
    a: `With both written with ${X2} + ${Y2} of coefficient 1, those terms cancel: ${S} − ${S}′ = 0 is the line 2(<i>g</i><sub>1</sub> − <i>g</i><sub>2</sub>)${x} + 2(<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)${y} + (<i>c</i><sub>1</sub> − <i>c</i><sub>2</sub>) = 0, the radical axis: the common chord when the circles meet in two points (when they touch, their common tangent), and for non-concentric circles that do not meet still a line, the points with equal tangent lengths to both`,
    why: `${X2} + ${Y2} = 4 and ${X2} + ${Y2} − 6${x} + 8 = 0: 6${x} − 12 = 0, ${x} = 2, meeting ${X2} + ${Y2} = 4 only at (2, 0): the circles touch there.`,
    say: 'Subtract two circles and the curvature falls out.',
  },
  // pp. 1003, 1005–1006
  {
    topic: 12,
    kind: 'remember',
    q: 'How do you show that the four meeting points of two conics are concyclic?',
    a: `Ask for a circle in the family: in ${S} + ${lam}${S}′ = 0, coefficient of ${X2} = coefficient of ${Y2} and coefficient of <i>xy</i> = 0. If one ${lam} meets both conditions, the four points lie on that circle`,
    why: `2${X2} + 3${Y2} = 6 and 3${X2} + 2${Y2} = 6: 2 + 3${lam} = 3 + 2${lam} gives ${lam} = 1 and ${X2} + ${Y2} = ${fr('12', '5')}; ${lam} = −1 gives ${y} = ±${x}.`,
    say: null,
  },
  // pp. 1003–1004
  {
    topic: 12,
    kind: 'mixup',
    q: 'Reading centre and radius from S + λS′ = 0 for two circles: divide by what first?',
    a: `By 1 + ${lam}, the coefficient of ${X2} and ${Y2}, before using (−${g}, −${f}). And before subtracting for the radical axis, give both circles the same leading coefficient: a circle written 2${X2} + 2${Y2} + … is divided by 2 first`,
    why: `${S} + ${S}′ = 2${X2} + 2${Y2} − 6${x} − 10${y} + 12 = 0, divided by 2: centre (${fr('3', '2')}, ${fr('5', '2')}), radius ${fr('√10', '2')}.`,
    say: null,
  },
  // pp. 1004, 1006
  {
    topic: 12,
    kind: 'mistake',
    q: 'Can S + λS′ = 0 give every curve through the common points?',
    a: `All but one: never ${S}′ = 0 itself, which would need ${lam} → ∞. When the answer might be ${S}′, use <i>μS</i> + ${lam}${S}′ = 0, with (<i>μ</i>, ${lam}) ≠ (0, 0), which holds both ${S} = 0 (${lam} = 0) and ${S}′ = 0 (<i>μ</i> = 0)`,
    why: `The family also passes through common points that are not real: two circles that do not meet still have a radical axis.`,
    say: null,
  },
  // pp. 1004, 1006
  {
    topic: 12,
    kind: 'shortcut',
    q: 'Find the common chord of two circles in one line.',
    a: `Subtract: ${S} − ${S}′ = 0. And a circle through two circles’ meeting points and a third point takes one linear equation in ${lam}, against three simultaneous equations in ${g}, ${f}, ${c} by the three-point method`,
    why: `${X2} + ${Y2} − 4${x} − 6${y} + 4 = 0 and ${X2} + ${Y2} − 2${x} − 8${y} + 4 = 0: −2${x} + 2${y} = 0, i.e. ${y} = ${x}.`,
    say: null,
  },
];
