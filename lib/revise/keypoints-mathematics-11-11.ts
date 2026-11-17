/**
 * KEY POINTS for Mathematics Class 11, Chapter 11 (Introduction to Three
 * Dimensional Geometry).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 and Additional topics A–H each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the equidistant-planes locus and the zero
 * coordinate, with two Common mistakes; Topic 02, the section formula, the
 * k ∶ 1 form and the equidistant-points plane, with two Common mistakes;
 * Topic 03, the centroid, collinearity, the locus surfaces, the incentre and
 * the type of figure, with two Don't mix ups; Additional A, the nearest point
 * of an axis; Additional H, the same method for a nonzero target): 67 points
 * in all. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the main chapter's Subtopics 01–03);
 * Additional topics A–H (the book's Patterns 1–8: A–F the supplement's
 * "Missing Problem Patterns", G–H the "Additional Topics" part) are 3–10. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, formulas, derivations and procedures, and its Cheat sheet.
 * Common mistakes: its Common pitfalls and its MCQ traps (A–H, which have no
 * MCQs or pitfall lists: their Speed Trap example, their presentation notes
 * and their warnings). Exam shortcuts: its Pro-Tips and Speed Trap solutions,
 * with a worked example or practice answer. `say`: the book's own mnemonics,
 * word for word without their quotation marks, from each cheat sheet (Topics
 * 01–03: eight, every one the book prints; Topic 01's second takes a colon for
 * its em dash, as the chapter prints it). A–H have no mnemonics (F's and H's
 * cheat sheets print none), so each has the book's own one-line sentences
 * instead (A: the plane-versus-axis line and the plane, sphere, cylinder line;
 * B: "Internal adds, external subtracts …" and "m always multiplies the far
 * point …"; C: the shared-midpoint line; D: "Each equidistance condition …" and
 * "Always square both sides first."; E: the 2 ∶ 1 and 3 ∶ 1 family line; F: the
 * far-side line and the cheat sheet's "Midpoint of the far side first, distance
 * formula second."; G: its "Exactly one squared term survives …" line and "A
 * single distance condition keeps its square."; H: "Do not report the ratio as
 * negative …" and "Solve for k, read its sign, then translate.", its colon a
 * full stop): twenty-two in all, twenty of them memory lines (C and E have
 * one each).
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: "an equidistant condition is always linear" (equidistant from two
 * points; equidistant from two planes gives |x| = |z|, i.e. x² = z², a pair of
 * planes); "equidistant-from-two-points … gives one answer" for a point on an
 * axis (it can give none, when the bisector plane is parallel to the axis, or
 * every point, when the axis lies in it); the centroid derivation, which takes
 * the 2 ∶ 1 point as known before showing the medians meet (what the working
 * proves is that the point dividing each median 2 ∶ 1 from its vertex is the
 * same for all three medians, which is the concurrency); the locus x = y = z
 * with x, y, z > 0 (a ray from the origin, origin excluded, not a whole line);
 * a sphere "real only if" its radius-squared is positive (zero gives a single
 * point, negative nothing); the box's "four corners" (O and the three points
 * on the axes are four of its eight corners, and the sphere passes through all
 * eight); "same sign ⇒ external" for a coordinate plane (with equal values the
 * line is parallel to the plane and never meets it); an axis distance "never
 * longer" than OP (equal when P's coordinate along that axis is 0); three
 * fourth vertices (for three points not collinear); and a unique point from
 * three given points "on the y-axis" (the line of equidistant points can miss
 * an axis). The writers' "k never comes out negative" remark, the circular
 * wording of the concurrency sentence, the "promised" extensions and the
 * Class 12 preview are left out.
 *
 * Markup is the chapter's own: variables italic, plane names <i>XY</i>-plane,
 * subscripts as <sub>; − (U+2212) for minus; every fraction stacked,
 * <frac><num>…</num><den>…</den></frac>; ratios with ∶ (U+2236); no em
 * dashes; and always a space after "<" (as the book prints it), so it is never
 * read as a tag. Exam-frequency claims would keep the label "(the book's
 * estimate from past papers, not official figures)"; none of these points
 * makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const sb = (base: string, s: string) => `<i>${base}</i><sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const d = '<i>d</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const r = '<i>r</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const z = '<i>z</i>';
const A = '<i>A</i>';
const B = '<i>B</i>';
const C = '<i>C</i>';
const D = '<i>D</i>';
const G = '<i>G</i>';
const In = '<i>I</i>';
const O = '<i>O</i>';
const P = '<i>P</i>';
const Q = '<i>Q</i>';
const R = '<i>R</i>';
const S = '<i>S</i>';
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const x3 = sb('x', '3');
const y1 = sb('y', '1');
const y2 = sb('y', '2');
const z1 = sb('z', '1');
const z2 = sb('z', '2');
const G1 = sb('G', '1');
const HALF = fr('1', '2');
const XY = '<i>XY</i>-plane';
const YZ = '<i>YZ</i>-plane';
const ZX = '<i>ZX</i>-plane';
const X2 = sq(x);
const Y2 = sq(y);
const Z2 = sq(z);
const DMIN = `${d}<sub>min</sub>`;
const KX = fr(`<i>kx</i><sub>2</sub> + ${x1}`, `${k} + 1`);
const SIX = fr(`<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>`, `${m} + ${n}`);
const SEX = fr(`<i>mx</i><sub>2</sub> − <i>nx</i><sub>1</sub>`, `${m} − ${n}`);

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Coordinate Axes, Planes, and Octants ──
  // pp. 1010, 1012, 1018
  {
    topic: 0,
    kind: 'remember',
    q: 'What do the coordinates (x, y, z) of a point P measure?',
    a: `Each is the signed perpendicular distance of ${P} from a coordinate plane: ${x} from the ${YZ}, ${y} from the ${ZX}, ${z} from the ${XY}; the sign records which side of the plane ${P} is on. So the distance of ${P} from a coordinate plane is the absolute value of the matching coordinate: |${x}|, |${y}|, |${z}|`,
    why: `(2, −6, 3) is 2 from the ${YZ}, 6 from the ${ZX} and 3 from the ${XY}.`,
    say: null,
  },
  // pp. 1012, 1018
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the equations of the coordinate planes and axes, and the standard forms of points on them?',
    a: `A plane sets one coordinate to zero: ${XY}: ${z} = 0, ${YZ}: ${x} = 0, ${ZX}: ${y} = 0. An axis sets two: ${x}-axis ${y} = ${z} = 0, ${y}-axis ${x} = ${z} = 0, ${z}-axis ${x} = ${y} = 0. So a point on the ${x}-axis is (${x}, 0, 0), on the ${XY} (${x}, ${y}, 0), on the ${YZ} (0, ${y}, ${z}), and the origin is (0, 0, 0)`,
    why: `(−3, 0, 5) has ${y} = 0: it lies on the ${ZX}.`,
    say: null,
  },
  // pp. 1010, 1012–1013, 1018–1019
  {
    topic: 0,
    kind: 'remember',
    q: 'How do the signs of (x, y, z) decide the octant?',
    a: `Three perpendicular planes cut space into 2<sup>3</sup> = 8 octants, one per sign pattern; the sizes of the coordinates never matter. NCERT numbering: I–IV lie above the floor (${z} > 0) and cycle the (${x}, ${y}) signs like the four quadrants: I (+, +, +), II (−, +, +), III (−, −, +), IV (+, −, +); V–VIII are their mirror images below it (${z} < 0): V (+, +, −), VI (−, +, −), VII (−, −, −), VIII (+, −, −)`,
    why: `${P}(−7, 3, −2) has the pattern (−, +, −): octant VI, and the 7 and 2 played no role.`,
    say: 'I am all positive; VII is all negative; the rest you read off the table.',
  },
  // p. 1013
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the foot of the perpendicular and the image of P(x, y, z) in a coordinate plane, an axis and the origin?',
    a: `Foot on a coordinate plane: zero the coordinate that plane kills (on the ${XY}, (${x}, ${y}, 0)); foot on an axis: keep only that axis’s coordinate (on the ${x}-axis, (${x}, 0, 0)). Image in a plane: flip the one coordinate perpendicular to it (in the ${XY}, (${x}, ${y}, −${z})); in an axis: flip the two perpendicular to it (in the ${x}-axis, (${x}, −${y}, −${z})); in the origin: flip all three`,
    why: `From (6, −2, 5): the foot on the ${y}-axis is (0, −2, 0) and on the ${XY} (6, −2, 0).`,
    say: null,
  },
  // pp. 1013, 1015–1016, 1018
  {
    topic: 0,
    kind: 'mixup',
    q: 'Reflection in a plane, in an axis or in the origin: how many signs flip, and which?',
    a: `A plane is two directions wide, so only the one coordinate perpendicular to it flips (the ${YZ} flips ${x}). An axis is one direction wide, so the two coordinates perpendicular to it flip (the ${x}-axis flips ${y} and ${z}). The origin flips all three. Plane 1, axis 2, origin 3: count before you flip`,
    why: `(7, −2, −4) in the ${x}-axis is (7, 2, 4); (−7, −2, −4) is its image in the ${YZ}, (7, −2, 4) in the ${XY}, (−7, 2, 4) in the origin.`,
    say: null,
  },
  // pp. 1010, 1016, 1018
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does the point (−3, 0, 5) lie in octant II or octant III?',
    a: `Neither: ${y} = 0, so it lies on the ${ZX} and in no octant. One zero coordinate puts a point on a coordinate plane, two on an axis, three at the origin; such points sit on the boundaries between octants, so “which octant?” is fair only when none of ${x}, ${y}, ${z} is zero. It is not on the ${z}-axis either: that needs ${x} = 0 and ${y} = 0`,
    why: `The other listed slips: the distance of (−5, 1, 2) from the ${YZ} is 5, not −5, and recalling octant names instead of the sign table.`,
    say: null,
  },
  // pp. 1015–1016
  {
    topic: 0,
    kind: 'mistake',
    q: `Is the locus of points equidistant from the ${XY} and the ${YZ} the plane ${x} = ${z}?`,
    a: `Only half of it: the distances are |${z}| and |${x}|, so |${x}| = |${z}|, i.e. ${X2} = ${Z2}, (${x} − ${z})(${x} + ${z}) = 0: the pair of planes ${x} = ${z} and ${x} = −${z}, each containing the whole ${y}-axis (${y} is free), the planes bisecting the angles between the two coordinate planes. Dropping the modulus throws one plane away. Equidistance from two planes is not linear the way equidistance from two points is`,
    why: `Equidistant from all three planes with ${x}, ${y}, ${z} > 0: ${x} = ${y} = ${z} with all three positive, the ray from the origin (not included) along the space diagonal into the first octant, not the whole line.`,
    say: null,
  },
  // pp. 1015, 1018–1019
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Place a point, or count points below the floor, without the full table.',
    a: `Anchor on the only two all-same octants, I (all +) and VII (all −), then read the ${z}-sign: ${z} > 0 ⇒ I–IV, behaving like the plane’s quadrants; ${z} < 0 ⇒ V–VIII, the same pattern below the floor. For “below the ${XY}” scan the ${z}-signs only`,
    why: `${A}(−1, −2, −3), ${B}(2, −5, 4), ${C}(−6, 7, −1), ${D}(3, 8, −2): ${z} = −3, 4, −1, −2, so three lie below the ${XY}.`,
    say: 'Top four (I–IV) above the floor, bottom four (V–VIII) below: same quadrant dance, one upstairs, one down.',
  },

  // ── Topic 02 · Distance and Section Formulas in 3D ──
  // pp. 1020, 1022–1023, 1028
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the distance between P(x₁, y₁, z₁) and Q(x₂, y₂, z₂), and why?',
    a: `<i>PQ</i> = √((${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup> + (${z2} − ${z1})<sup>2</sup>), and from the origin <i>OP</i> = √(${X2} + ${Y2} + ${Z2}). Pythagoras used twice: the box with edges parallel to the axes has <i>PQ</i> as its space diagonal, <i>PQ</i><sup>2</sup> = <i>PA</i><sup>2</sup> + <i>AQ</i><sup>2</sup> with the vertical edge <i>AQ</i> = |${z2} − ${z1}|, and the floor leg <i>PA</i> is itself a 2D hypotenuse; the squares erase the absolute values`,
    why: `${A}(0, 7, 10), ${B}(−1, 6, 6), ${C}(−4, 9, 6): <i>AB</i><sup>2</sup> = <i>BC</i><sup>2</sup> = 18 and <i>CA</i><sup>2</sup> = 36 = 18 + 18, a right-angled isosceles triangle, right angle at ${B}.`,
    say: null,
  },
  // pp. 1020, 1022–1023, 1028
  {
    topic: 1,
    kind: 'remember',
    q: 'What does the section formula give for internal and external division in the ratio m ∶ n?',
    a: `With <i>PR</i> ∶ <i>RQ</i> = ${m} ∶ ${n}: internally ${R} = (${SIX}, …, …), the same form for ${y} and ${z}; externally the numerators and the denominator subtract, ${SEX}, defined only for ${m} ≠ ${n} (equal external parts push the point to infinity). The midpoint is the 1 ∶ 1 internal case. Each coordinate is its own 1D split, because parallel projection keeps ratios`,
    why: `(−2, 3, 5) and (1, −4, 6) in the ratio 2 ∶ 3: internally (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}), externally (−8, 17, 3).`,
    say: 'Internal adds, external subtracts.',
  },
  // pp. 1022, 1024, 1028
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the k ∶ 1 form of a point on the line PQ, and what does the sign of k say?',
    a: `With ${m} ∶ ${n} = ${k} ∶ 1 the point is (${KX}, …, …), one unknown instead of two (${k} ≠ −1). ${k} > 0: internal division; ${k} < 0: external, since external ${m} ∶ ${n} is internal ${m} ∶ (−${n}), i.e. ${k} = −${fr(m, n)}. For “where does a coordinate plane cut <i>PQ</i>”, set the plane’s coordinate to 0 and solve for ${k}`,
    why: `The ${XY} and ${P}(2, −3, 5), ${Q}(4, 6, −10): ${fr(`−10${k} + 5`, `${k} + 1`)} = 0 gives ${k} = ${HALF}, so 1 ∶ 2 internally.`,
    say: null,
  },
  // pp. 1024–1025, 1028
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the locus of points equidistant from two fixed points A and B?',
    a: `Write <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup>: every ${X2}, ${Y2}, ${Z2} term cancels and a linear equation is left, the perpendicular bisector plane of <i>AB</i>, through its midpoint and perpendicular to it. Recognise it before expanding`,
    why: `${A}(1, 2, 3), ${B}(3, 2, −1): ${x} − 2${z} = 0, and the midpoint (2, 2, 1) lies on it.`,
    say: 'Equidistant from two points ⇒ a flat plane (the perpendicular bisector).',
  },
  // pp. 1020, 1022, 1026
  {
    topic: 1,
    kind: 'mixup',
    q: 'Internal or external division: where does the point lie, and what does each say about k?',
    a: `Internal: between ${P} and ${Q}, the ratio parts add (${m} + ${n}), ${k} > 0. External: on the line <i>PQ</i> beyond ${P} or beyond ${Q}, the parts subtract (${m} − ${n}), ${k} < 0. The sign of ${k} already gives the answer: no separate case analysis`,
    why: `The ${XY} and (1, 2, −3), (3, 4, 5): ${fr(`5${k} − 3`, `${k} + 1`)} = 0, ${k} = ${fr('3', '5')} > 0, so 3 ∶ 5 internally, not externally.`,
    say: null,
  },
  // pp. 1022, 1026–1027
  {
    topic: 1,
    kind: 'mistake',
    q: 'In what ratio does the XY-plane divide the join of (1, 2, −3) and (3, 4, 5): 5 ∶ 3?',
    a: `No: 3 ∶ 5 internally. ${m} ∶ ${n} means <i>PR</i> ∶ <i>RQ</i>, so ${m} pairs with the second point ${Q} in the numerator (<i>mx</i><sub>2</sub> + <i>nx</i><sub>1</sub>); swapping ${P} and ${Q} silently inverts the ratio. The other listed slips: internal and external signs mixed, forgetting to square or to take the root, and assuming a triangle without checking collinearity`,
    why: `The distance of (1, −2, 2) from the origin is √9 = 3: 9 forgets the root, √5 drops a term. (2, 4, −1), (3, 6, −1), (4, 8, −1) are collinear, not a triangle.`,
    say: '<i>m</i> goes with the far point (<i>x</i><sub>2</sub>).',
  },
  // pp. 1015–1016, 1024–1025
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is every “equidistant” condition linear?',
    a: `No: only equidistance from two points, where <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> cancels the squared terms. Equidistance from two coordinate planes gives |${x}| = |${z}|, i.e. ${X2} = ${Z2}, a pair of planes, and a fixed distance from one point keeps its square`,
    why: `${R}(0, ${y}, 0) equidistant from ${A}(3, 1, 2) and ${B}(−1, 5, −4): 9 + (${y} − 1)<sup>2</sup> + 4 = 1 + (${y} − 5)<sup>2</sup> + 16, the ${Y2} terms cancel, 8${y} = 28 and ${y} = ${fr('7', '2')}.`,
    say: null,
  },
  // pp. 1024–1025, 1027–1028
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Find the ratio in which a coordinate plane divides a segment in one line.',
    a: `Go straight to the ${k} ∶ 1 form and set only the plane’s coordinate to zero (${XY}: ${z} = 0, ${YZ}: ${x} = 0, ${ZX}: ${y} = 0), ignoring the other two; the sign of ${k} hands you internal or external for free`,
    why: `The ${YZ} and (−2, 4, 7), (3, −5, 8): ${fr(`3${k} − 2`, `${k} + 1`)} = 0, ${k} = ${fr('2', '3')}, so 2 ∶ 3 internally.`,
    say: null,
  },

  // ── Topic 03 · Applications: Centroid, Collinearity & Locus ──
  // pp. 1029–1031, 1035
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the centroid of a triangle, and how does the section formula give it?',
    a: `${G} = (${fr(`${x1} + ${x2} + ${x3}`, '3')}, …, …), the plain average of the three vertices, and it divides each median 2 ∶ 1 from the vertex. From ${A} to the midpoint of <i>BC</i>, the point dividing that median 2 ∶ 1 from ${A} is this average; the medians from ${B} and ${C} give the same point, so all three medians pass through it`,
    why: `${A}(2, −1, 4), ${B}(6, 3, −2), ${C}(1, 4, 5): ${G} = (3, 2, ${fr('7', '3')}).`,
    say: 'Centroid = plain average; incentre = weighted average.',
  },
  // pp. 1029–1031, 1035
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the two tests for three points to be collinear?',
    a: `Distance: the largest of <i>AB</i>, <i>BC</i>, <i>CA</i> equals the sum of the other two (<i>AB</i> + <i>BC</i> = <i>AC</i> puts ${B} between ${A} and ${C}). Section ratio: solve ${k} for ${B} dividing <i>AC</i> in ${k} ∶ 1 from one coordinate, then check the same ${k} reproduces the other two; if all three agree the points are collinear and the ratio comes free`,
    why: `${A}(2, 1, −1), ${B}(4, 4, 3), ${C}(8, 10, 11): ${fr(`8${k} + 2`, `${k} + 1`)} = 4 gives ${k} = ${HALF}, and ${fr(`10${k} + 1`, `${k} + 1`)} = 4, ${fr(`11${k} − 1`, `${k} + 1`)} = 3 check: collinear, 1 ∶ 2.`,
    say: 'Collinear needs all three coordinates to agree on one ratio.',
  },
  // pp. 1029–1030, 1032–1033, 1035
  {
    topic: 2,
    kind: 'remember',
    q: 'Which surfaces do the three standard distance conditions carve out?',
    a: `Equidistant from two points: the perpendicular bisector plane (linear). At distance ${r} from a centre (${a}, ${b}, ${c}): the sphere (${x} − ${a})<sup>2</sup> + (${y} − ${b})<sup>2</sup> + (${z} − ${c})<sup>2</sup> = ${sq(r)}. A constant sum 2${a} of distances from two points 2${c} apart: an ellipsoid of revolution with ${sq(b)} = ${sq(a)} − ${sq(c)}, real only when the sum exceeds the distance between the points. Kill the double radical by isolating and squaring one root at a time`,
    why: `Sum 12 from (±5, 0, 0): ${fr(X2, '36')} + ${fr(Y2, '11')} + ${fr(Z2, '11')} = 1, since 36 − 25 = 11.`,
    say: 'Two points → plane, one point → sphere.',
  },
  // pp. 1030, 1035
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the incentre of a triangle in coordinates, and the centroid of a tetrahedron?',
    a: `The incentre is the vertices’ average weighted by the opposite side lengths: ${In} = (${fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `${a} + ${b} + ${c}`)}, …, …), with ${a} = |<i>BC</i>|, ${b} = |<i>CA</i>|, ${c} = |<i>AB</i>|. The centroid of a tetrahedron is the plain average of its four vertices, denominator 4. Both are JEE extensions, beyond CBSE`,
    why: 'All three weights equal to 1 give the centroid back.',
    say: null,
  },
  // pp. 1032, 1035
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you decide the type of a quadrilateral ABCD from coordinates?',
    a: `First prove a parallelogram: the diagonals bisect each other, or both pairs of opposite side vectors are equal. Then equal adjacent sides ⇒ rhombus, equal diagonals ⇒ rectangle, both ⇒ square`,
    why: `${A}(1, 0, 2), ${B}(4, 2, 3), ${C}(5, 7, 2), ${D}(2, 5, 1): <i>AB</i> and <i>DC</i> are both (3, 2, 1), <i>AD</i> and <i>BC</i> both (1, 5, −1), a parallelogram; <i>AC</i><sup>2</sup> = 65 ≠ <i>BD</i><sup>2</sup> = 17, not a rectangle.`,
    say: null,
  },
  // pp. 1033, 1035
  {
    topic: 2,
    kind: 'mixup',
    q: 'Centroid, midpoint or incentre: what do you divide by, and in what ratio does G cut a median?',
    a: `Centroid: the sum over 3 (a triangle) or over 4 (a tetrahedron); midpoint: over 2; incentre: a weighted average by the side lengths, never a plain average. ${G} divides each median 2 ∶ 1 from the vertex: 1 ∶ 2 reverses it, 1 ∶ 1 is the midpoint of the median`,
    why: `(2, 3, −1), (4, −1, 3), (0, 4, 1): the centroid is (2, 2, 1); (6, 6, 3) forgets to divide, (3, 3, 1.5) divides by 2.`,
    say: null,
  },
  // pp. 1025, 1029
  {
    topic: 2,
    kind: 'mixup',
    q: 'A sphere’s computed radius-squared comes out positive, zero or negative: what is the locus?',
    a: 'Positive: a real sphere. Zero: a single point, the centre. Negative: the empty set. Check it before announcing a radius',
    why: `<i>PA</i><sup>2</sup> + <i>PB</i><sup>2</sup> = 2${k}<sup>2</sup> for ${A}(3, 4, 5), ${B}(−1, 3, −7): centre (1, ${fr('7', '2')}, −1), radius<sup>2</sup> = ${k}<sup>2</sup> − ${fr('161', '4')}: a sphere when ${k}<sup>2</sup> > ${fr('161', '4')}, the centre alone when equal.`,
    say: null,
  },
  // pp. 1031, 1035
  {
    topic: 2,
    kind: 'mistake',
    q: 'The x-coordinate gives a clean k for B dividing AC. Are A, B, C collinear?',
    a: `Not yet: the same ${k} must reproduce ${y2} and ${z2} too. A single coordinate can match by coincidence, so stopping after ${x} is the classic false positive. The other listed slips: forgetting the ×3 in reverse centroid problems (the sum of the vertices is 3${G}), averaging the incentre, and squaring a sum of two radicals in one go`,
    why: `Vertices (2, −1, 4), (6, 3, −2) and centroid (3, 2, ${fr('7', '3')}): the third is (9 − 8, 6 − 2, 7 − 2) = (1, 4, 5).`,
    say: null,
  },
  // pp. 1031, 1033, 1035
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Are these points collinear, and in what ratio? Answer fast.',
    a: `Section-ratio method: solve ${k} from one coordinate, verify across the other two. It beats three distance computations and hands you the dividing ratio as a bonus`,
    why: `${A}(−2, 3, 5), ${B}(1, 2, 3), ${C}(7, 0, −1): ${fr(`7${k} − 2`, `${k} + 1`)} = 1 gives ${k} = ${HALF}, and ${fr('3', `${k} + 1`)} = 2, ${fr(`5 − ${k}`, `${k} + 1`)} = 3 check: collinear, 1 ∶ 2.`,
    say: null,
  },

  // ── Additional topic A · Distance of a Point from a Coordinate Axis ──
  // pp. 1037–1038, 1051
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the distance of P(x, y, z) from each coordinate axis?',
    a: `The foot of the perpendicular on the ${z}-axis is <i>N</i>(0, 0, ${z}), and the distance formula gives <i>PN</i> = √(${X2} + ${Y2}): the coordinate along the axis cancels. From the ${x}-axis √(${Y2} + ${Z2}), from the ${y}-axis √(${Z2} + ${X2}), from the ${z}-axis √(${X2} + ${Y2})`,
    why: `${P}(3, −4, 12): 4√10 from the ${x}-axis, 3√17 from the ${y}-axis, 5 from the ${z}-axis, and <i>OP</i> = 13.`,
    say: 'Distance from a coordinate plane uses one coordinate; distance from a coordinate axis uses the other two.',
  },
  // pp. 1038, 1040, 1051
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the locus of points at a constant distance c from the z-axis?',
    a: `√(${X2} + ${Y2}) = ${c} (${c} > 0), i.e. ${X2} + ${Y2} = ${sq(c)} with ${z} free: a right circular cylinder of radius ${c} with the ${z}-axis as its axis. The free coordinate is the giveaway: the circle of radius ${c} in the ${XY} is swept along the axis into a tube`,
    why: `Distance 4 from the ${x}-axis: ${Y2} + ${Z2} = 16, ${x} free, a cylinder of radius 4 about the ${x}-axis.`,
    say: 'Equidistant from two points gives a plane, fixed distance from a point gives a sphere, fixed distance from a line gives a cylinder.',
  },
  // p. 1038
  {
    topic: 3,
    kind: 'remember',
    q: 'Why is the distance of P from an axis never more than OP?',
    a: `The foot of the perpendicular is the nearest point of the axis to ${P}, and the origin is a point of that axis, so the perpendicular is never longer than <i>OP</i>: equal only when ${P}’s coordinate along that axis is 0`,
    why: `${P}(3, −4, 12): 5, 4√10 and 3√17 are all less than 13.`,
    say: null,
  },
  // pp. 1037–1038, 1051
  {
    topic: 3,
    kind: 'mixup',
    q: 'Distance from a coordinate plane or from a coordinate axis: how many coordinates does each use?',
    a: `A plane kills one coordinate, so its distance is one coordinate’s absolute value (|${x}| from the ${YZ}). An axis kills two, so its distance is a two-term root of the other two coordinates (√(${Y2} + ${Z2}) from the ${x}-axis). Mixing them is the commonest slip on this one-marker`,
    why: `(2, −6, 3) is 2 from the ${YZ} but √(36 + 9) = √45 from the ${x}-axis.`,
    say: null,
  },
  // pp. 1038, 1040
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is the distance of (1, 2, 3) from the y-axis equal to √(1 + 4) = √5?',
    a: `No: √10. Discard the coordinate along the axis (${y} = 2) and keep the other two: √(${Z2} + ${X2}) = √(9 + 1). √5 keeps ${x} and ${y}, √13 keeps ${y} and ${z}, and 2 is the distance from the ${ZX}`,
    why: `From the ${y}-axis the foot is (0, 2, 0), and the distance to it is √(1 + 0 + 9) = √10.`,
    say: null,
  },
  // pp. 1038–1039
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A question asks for more than one axis distance. What free check do you have?',
    a: `The squares of the three axis distances add to 2<i>OP</i><sup>2</sup>: each of ${X2}, ${Y2}, ${Z2} appears in exactly two of them, so the sum is 2(${X2} + ${Y2} + ${Z2})`,
    why: `${P}(2, −3, 6): 45 + 40 + 13 = 98 and <i>OP</i><sup>2</sup> = 49, so 98 = 2(49).`,
    say: null,
  },

  // ── Additional topic B · Substituting into the Section Formula to Produce a Point ──
  // pp. 1040, 1051
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the three habits that make the section formula error-proof?',
    a: `Write down which point is ${P} and which is ${Q} first: ${m} always multiplies the far point (${x2}, ${y2}, ${z2}). Internal adds and external subtracts in the numerator and the denominator together: ${SIX} and ${SEX}. Then check the external point’s side: for ${m}, ${n} > 0, ${m} > ${n} puts it beyond ${Q}, ${m} < ${n} beyond ${P}, and ${m} = ${n} has none (the denominator vanishes)`,
    why: `${A}(1, −2, 3), ${B}(3, 4, −5), 3 ∶ 1: internally (${fr('5', '2')}, ${fr('5', '2')}, −3), three-quarters of the way from ${A}; externally (4, 7, −9), beyond ${B}.`,
    say: 'Internal adds, external subtracts: in the numerator and the denominator, together.',
  },
  // p. 1042
  {
    topic: 4,
    kind: 'remember',
    q: 'How is external division in m ∶ n written in the k ∶ 1 form?',
    a: `External ${m} ∶ ${n} is internal ${m} ∶ (−${n}), i.e. ${k} = −${fr(m, n)} in (${KX}, …, …)`,
    why: `${P}(−2, 3, 5), ${Q}(1, −4, 6), externally 2 ∶ 3: ${k} = −${fr('2', '3')}, ${k} + 1 = ${fr('1', '3')} and ${k}(1) − 2 = −${fr('8', '3')}, so ${x} = −8, as the external formula gives.`,
    say: '<i>m</i> always multiplies the far point (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>).',
  },
  // pp. 1040–1041
  {
    topic: 4,
    kind: 'mixup',
    q: 'P and Q swapped in the section formula: what happens?',
    a: `The ratio silently inverts: ${m} ∶ ${n} from ${P} becomes ${m} ∶ ${n} from ${Q}, the point for ${n} ∶ ${m}. Fix which point is “first” before substituting`,
    why: `${P}(−2, 3, 5), ${Q}(1, −4, 6), 2 ∶ 3 internally: (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}); swapped, the same numbers give (−${fr('1', '5')}, −${fr('6', '5')}, ${fr('28', '5')}), the 3 ∶ 2 point.`,
    say: null,
  },
  // pp. 1040–1041
  {
    topic: 4,
    kind: 'mistake',
    q: `Dividing ${P}(−2, 3, 5), ${Q}(1, −4, 6) externally in 2 ∶ 3: is x = ${fr('2(1) − 3(−2)', '2 + 3')} = ${fr('8', '5')}?`,
    a: `No: −8. The denominator subtracts too: ${m} − ${n} = −1, so ${x} = ${fr('8', '−1')} = −8, and the point is (−8, 17, 3), beyond ${P} since ${m} < ${n}. Changing one sign but not the other is the classic wreck`,
    why: `Check: (−2, 3, 5) − 2(3, −7, 1) = (−8, 17, 3), two full steps back from ${P}.`,
    say: null,
  },
  // pp. 1041–1042
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Check a section-formula answer in one line.',
    a: `Walk along the step ${Q} − ${P}: the internal point is ${P} + ${fr(m, `${m} + ${n}`)}(${Q} − ${P}), and the external point lands beyond ${Q} when ${m} > ${n}, beyond ${P} when ${m} < ${n}`,
    why: `(−2, 3, 5) + ${fr('2', '5')}(3, −7, 1) = (−${fr('4', '5')}, ${fr('1', '5')}, ${fr('27', '5')}), the 2 ∶ 3 internal point.`,
    say: null,
  },

  // ── Additional topic C · The Fourth Vertex of a Parallelogram ──
  // pp. 1043, 1051
  {
    topic: 5,
    kind: 'remember',
    q: 'Three vertices A, B, C of a parallelogram ABCD are given. What is D?',
    a: `The diagonals <i>AC</i> and <i>BD</i> bisect each other, so they share a midpoint: ${fr(`${A} + ${C}`, '2')} = ${fr(`${B} + ${D}`, '2')}, i.e. ${D} = ${A} + ${C} − ${B}, coordinate by coordinate, with the vertices named in order round the figure`,
    why: `${A}(3, −1, 2), ${B}(1, 2, −4), ${C}(−1, 1, 2): ${D} = (1, −2, 8).`,
    say: 'The diagonals of a parallelogram bisect each other, so the two diagonals share a midpoint.',
  },
  // pp. 1043–1045, 1051
  {
    topic: 5,
    kind: 'remember',
    q: 'Three vertices of a parallelogram are given with no order. How many fourth vertices are there?',
    a: `Three (for three points not on one line): the new vertex ${S} is opposite exactly one given point, and ${S} = (sum of the two adjacent to it) − (the one opposite it). A question wanting one answer must name the vertices in cyclic order (“<i>ABCD</i>”) or add a condition`,
    why: `${P}(1, 2, 3), ${Q}(3, −1, 5), ${R}(4, 0, −3): ${S} = (2, 3, −5), (6, −3, −1) or (0, 1, 11).`,
    say: null,
  },
  // pp. 1043, 1045
  {
    topic: 5,
    kind: 'mixup',
    q: 'In ABCD, is the fourth vertex A + C − B or A + B − C?',
    a: `${A} + ${C} − ${B}: ${B} and ${D} are the opposite vertices, so ${B} carries the minus sign. ${A} + ${B} − ${C} is the vertex opposite ${C}, the fourth vertex of a different parallelogram`,
    why: `${A}(2, −1, 3), ${B}(4, 3, −1), ${C}(0, 5, 2): ${D} = (−2, 1, 6); ${A} + ${B} − ${C} = (6, −3, 0) is not it.`,
    say: null,
  },
  // pp. 1043–1044
  {
    topic: 5,
    kind: 'mistake',
    q: '“Three vertices of a parallelogram are P, Q, R.” Is P + R − Q the answer?',
    a: 'It is one of three: with the order unspecified, each choice of the given point opposite the new vertex gives a different parallelogram. Use only the opposite-vertex rule when the paper says “ABCD”; otherwise expect three answers unless a further condition is imposed',
    why: `${A}(1, 2, 3), ${B}(−1, −2, −1), ${C}(2, 3, 2) consecutive: ${D} = (4, 7, 6), and <i>ABCD</i> is not a rhombus, since <i>AB</i> = 6 but <i>BC</i> = √43.`,
    say: null,
  },
  // pp. 1043, 1045
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Verify a fourth vertex in ten seconds.',
    a: `Compare the steps: ${B} − ${A} must equal ${C} − ${D}, so <i>AB</i> and <i>DC</i> are equal in length and parallel, the defining property of the parallelogram <i>ABCD</i>`,
    why: `${A}(3, −1, 2), ${B}(1, 2, −4), ${C}(−1, 1, 2), ${D}(1, −2, 8): both steps are (−2, 3, −6).`,
    say: null,
  },

  // ── Additional topic D · A Point Equidistant from Three or Four Given Points ──
  // pp. 1045, 1051
  {
    topic: 6,
    kind: 'remember',
    q: 'How many given points pin down a point equidistant from all of them?',
    a: `Each condition <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> is linear (the squares cancel), so count equations against three unknowns. Two points: a plane, the perpendicular bisector plane. Three points not collinear: a line, so one more restriction is needed (a coordinate plane usually gives one point; an axis can miss that line). Four points not coplanar: a unique point, the circumcentre of their tetrahedron`,
    why: `In the ${XY}, equidistant from ${A}(2, 0, 3), ${B}(0, 3, 2), ${C}(0, 0, 1): (3, 2, 0), every squared distance 14.`,
    say: 'Each equidistance condition costs you one linear equation, and the problem becomes simultaneous linear equations.',
  },
  // pp. 1045–1046, 1051
  {
    topic: 6,
    kind: 'remember',
    q: 'Which point is equidistant from O, (a, 0, 0), (0, b, 0) and (0, 0, c)?',
    a: `(${fr(a, '2')}, ${fr(b, '2')}, ${fr(c, '2')}): each coordinate is half its intercept. It is the centre of the rectangular box built on those three edges, which has these four points among its eight corners, so it is the centre of the sphere through all eight`,
    why: `${O}, (2, 0, 0), (0, 3, 0), (0, 0, 4): (1, ${fr('3', '2')}, 2), common distance ${fr('√29', '2')}.`,
    say: 'Always square both sides first.',
  },
  // pp. 1045, 1048
  {
    topic: 6,
    kind: 'mixup',
    q: 'The point equidistant from four vertices of a tetrahedron, or its centroid: are they the same?',
    a: 'No: the equidistant point is the circumcentre, found from three linear equations; the centroid is the plain average of the four vertices',
    why: `${O}, (2, 0, 0), (0, 3, 0), (0, 0, 4): the circumcentre is (1, ${fr('3', '2')}, 2), the centroid (${fr('1', '2')}, ${fr('3', '4')}, 1).`,
    say: null,
  },
  // pp. 1045–1046
  {
    topic: 6,
    kind: 'mistake',
    q: 'A quadratic term survives in an equidistant-point problem. What went wrong?',
    a: `An algebra slip: with <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> every ${X2}, ${Y2}, ${Z2} term cancels, so go back before going forward. And write <i>PA</i><sup>2</sup> = <i>PB</i><sup>2</sup> from the start, never <i>PA</i> = <i>PB</i> with radicals standing`,
    why: `<i>PA</i><sup>2</sup> = <i>PC</i><sup>2</sup> for ${P}(${x}, ${y}, 0), ${A}(2, 0, 3), ${C}(0, 0, 1): (${x} − 2)<sup>2</sup> + 9 = ${X2} + 1, so −4${x} + 13 = 1 and ${x} = 3.`,
    say: null,
  },
  // pp. 1046–1047
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Find the point equidistant from O, (4, 0, 0), (0, −6, 0) and (0, 0, 2) in one line.',
    a: `Halve the intercepts: (2, −3, 1). A four-line question becomes a one-line answer`,
    why: 'The common distance is √(4 + 9 + 1) = √14.',
    say: null,
  },

  // ── Additional topic E · Incentre in 3D and the Centroid of a Tetrahedron ──
  // pp. 1047, 1051
  {
    topic: 7,
    kind: 'remember',
    q: 'How is the incentre of a triangle found in 3D?',
    a: `Find the side lengths opposite the vertices, ${a} = |<i>BC</i>|, ${b} = |<i>CA</i>|, ${c} = |<i>AB</i>| (square before rooting), then weight and average: <i>x</i><sub><i>I</i></sub> = ${fr(`<i>ax</i><sub>1</sub> + <i>bx</i><sub>2</sub> + <i>cx</i><sub>3</sub>`, `${a} + ${b} + ${c}`)}, and the same for ${y} and ${z}. The centroid is the same expression with all three weights 1. Nothing past the section formula is needed`,
    why: `${A}(1, 2, 3), ${B}(4, 8, −3), ${C}(9, 6, 11): ${a} = 15, ${b} = 12, ${c} = 9, sum 36, and ${In}(4, 5, 3).`,
    say: null,
  },
  // pp. 1048–1049, 1051
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the centroid of a tetrahedron, and how does it divide a median?',
    a: `${G} = the plain average of the four vertices (denominator 4). A median joins a vertex to the centroid ${G1} of the opposite face, ${G1} = ${fr('1', '3')}(${B} + ${C} + ${D}); the point dividing <i>AG</i><sub>1</sub> 3 ∶ 1 from ${A} is ${fr(`(${B} + ${C} + ${D}) + ${A}`, '4')} = ${G}, and the same holds from every vertex, so all four medians pass through ${G}`,
    why: `${A}(0, 0, 0), ${B}(4, 0, 0), ${C}(0, 8, 0), ${D}(0, 0, 12): ${G} = (1, 2, 3), ${G1} = (${fr('4', '3')}, ${fr('8', '3')}, 4), and the 3 ∶ 1 point of <i>AG</i><sub>1</sub> is (1, 2, 3).`,
    say: 'A triangle’s medians split 2 ∶ 1 with denominator 3; a tetrahedron’s split 3 ∶ 1 with denominator 4.',
  },
  // p. 1047
  {
    topic: 7,
    kind: 'mixup',
    q: 'In the incentre formula, which side length sits next to A’s coordinates?',
    a: `${a} = |<i>BC</i>|, the side opposite ${A}, not a side through ${A}: this order is the one students get wrong`,
    why: `In the 9–12–15 triangle ${A}(1, 2, 3), ${B}(4, 8, −3), ${C}(9, 6, 11), the right angle is at ${A} (81 + 144 = 225), so ${A}’s weight is the hypotenuse <i>BC</i> = 15.`,
    say: null,
  },
  // pp. 1047, 1035
  {
    topic: 7,
    kind: 'mistake',
    q: 'Is the incentre of A(1, 2, 3), B(4, 8, −3), C(9, 6, 11) the plain average of the vertices?',
    a: `No: the plain average is the centroid, (${fr('14', '3')}, ${fr('16', '3')}, ${fr('11', '3')}). The incentre weights each vertex by the opposite side: (${fr('15(1) + 12(4) + 9(9)', '36')}, …, …) = (4, 5, 3)`,
    why: `Check: the triangle is right-angled at ${A}, its inradius is ${HALF}(9 + 12 − 15) = 3, and <i>IA</i> = √18 = 3√2 = ${r}√2, as for any right triangle.`,
    say: null,
  },
  // p. 1050
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Three vertices of a tetrahedron and its centroid are given. Find the fourth vertex fast.',
    a: `The four vertices add to 4${G}, so ${D} = 4${G} − (${A} + ${B} + ${C})`,
    why: `${A}(2, −1, 3), ${B}(4, 3, −2), ${C}(0, 5, 1), ${G}(1, 2, 1): ${D} = (4, 8, 4) − (6, 7, 2) = (−2, 1, 2).`,
    say: null,
  },

  // ── Additional topic F · The Length of a Median ──
  // pp. 1050–1051
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you find the length of the median through A in triangle ABC?',
    a: `The midpoint formula, then the distance formula: find ${D}, the midpoint of the opposite side <i>BC</i>, by averaging ${B} and ${C}, then compute <i>AD</i>`,
    why: `${A}(0, 0, 6), ${B}(0, 4, 0), ${C}(6, 0, 0): ${D} = (3, 2, 0) and <i>AD</i> = √(9 + 4 + 36) = 7.`,
    say: 'The median from a vertex always runs to the midpoint of the side not containing that vertex.',
  },
  // p. 1050
  {
    topic: 8,
    kind: 'remember',
    q: 'When must two medians of a triangle be equal?',
    a: `When the triangle is isosceles: the medians to the two equal sides match`,
    why: `${A}(0, 0, 6), ${B}(0, 4, 0), ${C}(6, 0, 0): <i>AB</i> = <i>BC</i> = √52, and the medians are 7, √34 and 7.`,
    say: 'Midpoint of the far side first, distance formula second.',
  },
  // pp. 1050–1051
  {
    topic: 8,
    kind: 'mixup',
    q: 'The midpoint of AB: whose median does it end?',
    a: `The median from ${C}, the vertex not on <i>AB</i>. The median through a vertex never uses the midpoint of a side that touches it`,
    why: `${A}(2, −3, 3), ${B}(4, 1, −1), ${C}(0, 5, 3): the midpoint of <i>AB</i> is (3, −1, 1), and the median through ${C} is √(9 + 36 + 4) = 7.`,
    say: null,
  },
  // pp. 1050–1051
  {
    topic: 8,
    kind: 'mistake',
    q: 'For the median through A, can you average A with a neighbouring vertex?',
    a: `No: that is haste, the one thing that goes wrong here. Average the other two vertices, ${B} and ${C}, and measure from ${A}`,
    why: `${A}(5, 6, 8), ${B}(4, 0, 3), ${C}(−2, 4, −1): the midpoint of <i>BC</i> is (1, 2, 1), and the median is √(16 + 16 + 49) = 9.`,
    say: null,
  },
  // p. 1050
  {
    topic: 8,
    kind: 'shortcut',
    q: 'Asked for all three medians, how do you save work?',
    a: 'If two sides are equal (often visible from the coordinates), the medians to them are equal, and only two medians need working',
    why: `<i>AB</i> = <i>BC</i> = √52 for ${A}(0, 0, 6), ${B}(0, 4, 0), ${C}(6, 0, 0): the medians from ${A} and ${C} are both 7.`,
    say: null,
  },

  // ── Additional topic G · A Point on an Axis at a Given Distance from a Fixed Point ──
  // pp. 1052–1054, 1058
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you find the points on an axis at a given distance d from a point P?',
    a: `Write the axis form first, ${R}(0, ${y}, 0) on the ${y}-axis (one unknown, not three); square before anything else, <i>RP</i><sup>2</sup> = ${sq(d)}; then solve the quadratic and keep every real root, each a genuine point`,
    why: `The ${y}-axis at distance 5√2 from ${P}(3, −2, 5): 9 + (${y} + 2)<sup>2</sup> + 25 = 50, (${y} + 2)<sup>2</sup> = 16, so (0, 2, 0) and (0, −6, 0).`,
    say: 'Exactly one squared term survives, the equation is a genuine quadratic, and the honest answer is usually two points, not one.',
  },
  // pp. 1053–1055, 1058
  {
    topic: 9,
    kind: 'remember',
    q: 'How many such points should you expect?',
    a: `Compare ${d} with the distance ${DMIN} of ${P} from the axis (for the ${y}-axis √(${Z2} + ${X2})): ${d} > ${DMIN} gives two points, one either side of the foot of the perpendicular and symmetric about it; ${d} = ${DMIN} gives one, the foot itself (a repeated root); ${d} < ${DMIN} gives none`,
    why: `The ${z}-axis at distance 5 from (3, 4, 7): ${DMIN} = 5, one point (0, 0, 7); the ${x}-axis at distance 3 from (1, 2, 5): ${DMIN} = √29, none, since (${x} − 1)<sup>2</sup> = −20.`,
    say: 'A single distance condition keeps its square.',
  },
  // pp. 1052, 1055, 1059
  {
    topic: 9,
    kind: 'mixup',
    q: 'A point on an axis equidistant from two points, or at a fixed distance from one: how many answers?',
    a: `Equidistant from two points is linear (the squares cancel): usually one answer, but none when the bisector plane is parallel to the axis, and every point when the axis lies in it. A fixed distance from one point is quadratic (nothing cancels): two, one or none`,
    why: `On the ${y}-axis, (1, 0, 0) and (1, 0, 2) give 1 + ${Y2} = 5 + ${Y2}: no point; (1, 0, 0) and (−1, 0, 0) give every point of the axis.`,
    say: null,
  },
  // pp. 1054–1055, 1058
  {
    topic: 9,
    kind: 'mistake',
    q: `Points on the ${y}-axis at distance 5√2 from (3, −2, 5): is (0, 2, 0) the answer?`,
    a: `Only half of it: (${y} + 2)<sup>2</sup> = 16 gives ${y} + 2 = ±4, so (0, 2, 0) and (0, −6, 0); write ±4 on the same line. And a negative right-hand side is not an arithmetic slip to be fixed: it is the answer, an empty locus`,
    why: `Before solving, ${DMIN} = √34 < √50 = 5√2 said to expect two points.`,
    say: null,
  },
  // p. 1055
  {
    topic: 9,
    kind: 'shortcut',
    q: 'For which d does the y-axis hold exactly one point at distance d from (6, −1, 8)?',
    a: `Only at ${d} = ${DMIN} = √(${Z2} + ${X2}) = √(64 + 36) = 10, and the point is the foot of the perpendicular, (0, −1, 0). Compute ${DMIN} first and the answer count is known in advance`,
    why: `The ${z}-axis at distance 13 from (3, 4, 7): ${DMIN} = 5 < 13, so two roots, ${z} = 19 and ${z} = −5, 12 either side of the foot (0, 0, 7).`,
    say: null,
  },

  // ── Additional topic H · When a Coordinate Plane Divides a Segment Externally ──
  // pp. 1055–1056, 1059
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you predict whether a coordinate plane divides PQ internally or externally?',
    a: `Compare the endpoints’ values of the plane’s coordinate. Opposite signs: they straddle the plane, internal, ${k} > 0. The same sign: both on one side, the plane meets only the extended line, external, ${k} < 0, provided the two values differ (equal values make the line parallel to the plane, which it never meets). One value zero: that endpoint is on the plane`,
    why: `The ${YZ} and ${A}(4, 8, 10), ${B}(6, 10, −8): ${x} = 4 and 6, so external; 6${k} + 4 = 0, ${k} = −${fr('2', '3')}: externally 2 ∶ 3, at (0, 4, 46), beyond ${A}.`,
    say: 'Do not report the ratio as negative and do not drop the word “externally”: both cost the mark.',
  },
  // pp. 1056–1057, 1059
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you report the ratio once k is found?',
    a: `${k} > 0: internally ${k} ∶ 1. ${k} < 0: externally |${k}| ∶ 1; with ${k} = −${fr(m, n)}, externally ${m} ∶ ${n}, beyond ${Q} if ${m} > ${n} and beyond ${P} if ${m} < ${n}. For the point itself, substitute ${k} back or use the external formula with that ${m} and ${n}`,
    why: `The ${ZX} and ${A}(3, −4, 5), ${B}(1, −2, 7): ${k} = −2, externally 2 ∶ 1, at (−1, 0, 9), beyond ${B}.`,
    say: 'Solve for <i>k</i>, read its sign, then translate.',
  },
  // pp. 1057–1059
  {
    topic: 10,
    kind: 'remember',
    q: 'Which point of PQ has a given coordinate value other than zero?',
    a: `The same machinery: set that coordinate of the ${k} ∶ 1 point equal to the required value, solve the single linear equation for ${k}, and read internal or external from its sign. “Where does ${z} = 0 cut <i>PQ</i>” and “which point has ${x} = 4” are one question`,
    why: `${P}(2, −3, 4), ${Q}(8, 0, 10) and ${x} = 4: 8${k} + 2 = 4(${k} + 1), ${k} = ${HALF}, internal 1 ∶ 2, and ${R}(4, −2, 6).`,
    say: null,
  },
  // pp. 1056–1058
  {
    topic: 10,
    kind: 'mixup',
    q: 'The YZ-plane divides two segments both in 2 ∶ 3. Can one be internal and the other external?',
    a: 'Yes: the numbers alone never decide it; whether the endpoints straddle the plane does',
    why: `(−2, 4, 7) and (3, −5, 8): ${x} = −2 and 3, opposite signs, internally 2 ∶ 3. (4, 8, 10) and (6, 10, −8): ${x} = 4 and 6, the same sign, externally 2 ∶ 3.`,
    say: null,
  },
  // p. 1057
  {
    topic: 10,
    kind: 'mistake',
    q: 'The ZX-plane and A(3, −4, 5), B(1, −2, 7) give k = −2. Is the answer 2 ∶ 1 internally, or −2 ∶ 1?',
    a: `Neither: externally 2 ∶ 1. Reporting 2 ∶ 1 without reading the sign does all the algebra right and still loses the mark, and a ratio of division is never written negative`,
    why: `${y} = −4 and −2, both negative, said external before a single equation.`,
    say: null,
  },
  // pp. 1056, 1058
  {
    topic: 10,
    kind: 'shortcut',
    q: 'What is the fastest sanity check on a plane-cuts-segment answer?',
    a: `The sign prediction: a same-sign prediction with a positive ${k} on the page means an algebra slip`,
    why: `The ${XY} and ${A}(2, −3, 4), ${B}(−1, −2, 1): ${z} = 4 and 1, external; ${fr(`${k} + 4`, `${k} + 1`)} = 0, ${k} = −4, externally 4 ∶ 1.`,
    say: null,
  },
];
