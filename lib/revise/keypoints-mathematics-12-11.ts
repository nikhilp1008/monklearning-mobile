/**
 * KEY POINTS for Mathematics Class 12, Chapter 11 (Three Dimensional Geometry).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 00–05 each have five Remember points and one of each other kind;
 * Additional topics A–E have two Remember points and one of each other kind;
 * Additional P, the past-paper analysis, has five points (three archetypes as
 * Remember and Exam shortcuts, two traps): 78 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 00–05 are 0–5 (the chapter's Subtopics 00–05); Additional
 * topics A–E are 6–10 (Addenda A–E) and Additional P is 11 (Addendum P, What
 * JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio; the addenda print "Page n of 20" beside it) is
 * above each point. Remember: the topic's key definitions, theorems and its
 * Cheat sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–E,
 * which print neither: the slips their worked examples and practice answers
 * warn about; P: its traps). Exam shortcuts: its Pro-Tips, Speed Traps and
 * worked examples. `say`: the book's own memory aids, word for word without
 * their quotation marks or the gloss after them, with a full stop: Topic 00
 * prints four, Topic 01 four, Topic 02 four, Topic 03 four, Topic 04 five and
 * Topic 05 four. All are used but one, the first two of each topic as its
 * memory lines and the rest on later `say`s, which are not shown as memory
 * lines; Topic 01's fourth aid and Topic 03's fourth are whole sentences with
 * no quoted part, used as printed. Topic 02's "Zero volume, they meet" is
 * left out: without its gloss ("unless they are parallel") it states the
 * over-wide version. Twenty-four in all, twelve of them memory lines. A–E
 * and P print no aids, so each has two of the book's own one-line sentences
 * (A: "The direction is the crossed normals.", cut and capitalised, and
 * "Testing membership never requires the parametrisation at all."; B: "The
 * fix is to go back to first principles and minimise directly." and "The
 * critical point automatically builds the common perpendicular.", cut; C:
 * "Four points are coplanar if and only if their triple product dies." and
 * "One computation, no special cases."; D: "These are instant: no t, no
 * formula." and "Reflect, join, read the crossing point.", cut; E: "Square
 * both sides and cancel the quadratic terms." and "Complete the square to
 * report it in standard form."; P: "The normal is always the cross product
 * of two vectors lying in the plane." and "Never stop at b · n = 0; the
 * point test is mandatory."): twelve more, all memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: a zero scalar triple product means the lines are coplanar,
 * so they meet unless they are parallel; the mirror trick is for two points
 * on the same side of the plane; equating raw plane expressions gives a
 * bisector only when the normals have equal lengths. The Exam relevance
 * claims, the past-paper distribution and its counts, the CBSE, NCERT and
 * syllabus remarks, the difficulty tags and the paper names in P are left
 * out.
 *
 * Markup is the chapter's own: a vector's arrow inside its italic (the
 * letter, then an escaped U+20D7, in one <i>), n with an escaped U+0302 hat
 * for the unit normal, "·" and "×" between vectors held by no-break spaces,
 * m ∶ n with the ratio sign, |…| with a word joiner, − (U+2212) for minus;
 * points and direction ratios as number triples, as the chapter writes them.
 * Every fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never
 * a fraction inside a fraction; no em dashes; and always a space after "<",
 * so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = '\u00a0';
const WJ = '\u2060';
const ARW = '\u20d7';
const HAT = '\u0302';
const bar = (s: string) => `|${WJ}${s}|`;
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const V = (s: string) => I(`${s}${ARW}`);
const dot = (u: string, w: string) => `${u}${NB}·${NB}${w}`;
const crs = (u: string, w: string) => `${u}${NB}×${NB}${w}`;
const ratio = (u: string, w: string) => `${u}${NB}∶${NB}${w}`;
const rt = (s: string) => `√(${s})`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const p = I('p');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const F = I('F');
const G = I('G');
const M = I('M');
const P = I('P');
const Q = I('Q');
const al = I('α');
const be = I('β');
const ga = I('γ');
const th = I('θ');
const ph = I('φ');
const la = I('λ');
const mu = I('μ');
const va = V('a');
const vb = V('b');
const vc = V('c');
const vd = V('d');
const vm = V('m');
const vn = V('n');
const vp = V('p');
const vr = V('r');
const vD = V('D');
const vN = V('N');
const vP = V('P');
const nh = I(`n${HAT}`);
const ZERO = `0${ARW}`;
const vAB = V('AB');
const vAC = V('AC');
const vAD = V('AD');
const vAP = V('AP');
const vPF = V('PF');
const a1 = sb(va, '1');
const a2 = sb(va, '2');
const b1 = sb(vb, '1');
const b2 = sb(vb, '2');
const n1 = sb(vn, '1');
const n2 = sb(vn, '2');
const P1 = sb(P, '1');
const P2 = sb(P, '2');
const x1 = sb(x, '1');
const x2 = sb(x, '2');
const y1 = sb(y, '1');
const y2 = sb(y, '2');
const z1 = sb(z, '1');
const z2 = sb(z, '2');
const COS = (s: string) => `cos${NB}${s}`;
const SIN = (s: string) => `sin${NB}${s}`;
const STP = dot(`(${a2} − ${a1})`, `(${crs(b1, b2)})`);
const PLANE = `${a}${x1} + ${b}${y1} + ${c}${z1} + ${d}`;
const NORM = rt(`${sq(a)} + ${sq(b)} + ${sq(c)}`);
const NORM2 = `${sq(a)} + ${sq(b)} + ${sq(c)}`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Foundations of 3D Coordinate Geometry ──
  // pp. 688, 691, 694
  {
    topic: 0,
    kind: 'remember',
    q: `What is the distance between ${P}(${x1}, ${y1}, ${z1}) and ${Q}(${x2}, ${y2}, ${z2})?`,
    a: `${I('PQ')} = ${rt(`(${x2} − ${x1})<sup>2</sup> + (${y2} − ${y1})<sup>2</sup> + (${z2} − ${z1})<sup>2</sup>`)}: Pythagoras used twice, once across the floor and once up the height. From the origin it is ${rt(`${sq(x1)} + ${sq(y1)} + ${sq(z1)}`)}`,
    why: `${A}(1, −2, 3), ${B}(4, 2, −1): ${rt('9 + 16 + 16')} = √41; write 2 − (−2) = 4 in full.`,
    say: 'Pythagoras, twice.',
  },
  // pp. 688–689, 692, 694
  {
    topic: 0,
    kind: 'remember',
    q: `What is the section formula for ${ratio(m, n)} from ${A}?`,
    a: `Internal: ${fr(`${m}${x2} + ${n}${x1}`, `${m} + ${n}`)}, and the same for ${y} and ${z}; external: ${fr(`${m}${x2} − ${n}${x1}`, `${m} − ${n}`)}. The weight ${m} rides the far endpoint ${B}; ${m} = ${n} gives the midpoint`,
    why: `(2, −1, 4) and (4, 3, 2) in ${ratio('1', '3')}: (${fr('5', '2')}, 0, ${fr('7', '2')}), which leans toward ${A}, as it should.`,
    say: 'Far weight first.',
  },
  // pp. 688–689, 693–694
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the centroids of a triangle and of a tetrahedron?',
    a: `The plain average of the vertices: divide the sum by 3 for a triangle, by 4 for a tetrahedron. The triangle’s centroid cuts each median in ${ratio('2', '1')} from the vertex`,
    why: `${G}(2, 2, 2), ${A}(1, 3, 2), ${B}(2, 1, 4): ${C} = 3${G} − ${A} − ${B} = (3, 2, 0).`,
    say: null,
  },
  // pp. 688, 692, 694
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the area of a triangle and the volume of a tetrahedron?',
    a: `Area ${fr('1', '2')}${bar(crs(vAB, vAC))}; volume ${fr('1', '6')}${bar(dot(vAB, `(${crs(vAC, vAD)})`))}, with the modulus, since a triple product can come out negative`,
    why: `${A}(1, 1, 1), ${B}(3, 2, 1), ${C}(2, 4, 2), ${D}(1, 2, 5): the triple product is 18, so the volume is 3.`,
    say: null,
  },
  // pp. 688–689, 693–694
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you test three points for collinearity?',
    a: `The direction ratios of ${vAB} and ${vAC} are proportional, or ${crs(vAB, vAC)} = ${ZERO} (zero area). ${I('AB')} + ${I('BC')} = ${I('AC')} works only when ${B} really is the middle point`,
    why: `${A}(2, 3, 4), ${B}(−1, 2, −3), ${C}(5, 4, 11): ${vAC} = (3, 1, 7) = −${vAB}, so they are collinear.`,
    say: null,
  },
  // pp. 687–688, 694
  {
    topic: 0,
    kind: 'mixup',
    q: `${P}(${x}, ${y}, ${z}): which is ${bar(x)}, the distance from the ${x}-axis or from the ${I('yz')}-plane?`,
    a: `From the ${I('yz')}-plane. From the ${x}-axis it is ${rt(`${sq(y)} + ${sq(z)}`)}: an axis drops the coordinate it shares, a plane keeps only the one it sets to zero`,
    why: `(3, 4, 12) is 5 from the ${z}-axis and 12 from the ${I('xy')}-plane.`,
    say: 'Axis drops one, plane keeps one.',
  },
  // pp. 689, 692, 694
  {
    topic: 0,
    kind: 'mistake',
    q: `Solving for the ratio ${ratio(k, '1')} in which a coordinate plane cuts a segment gives ${k} = −${fr('2', '3')}. A slip?`,
    a: `No: a negative ${k} means external division, here externally in ${ratio('2', '3')}`,
    why: `${A}(2, 4, 5), ${B}(3, 5, −4) and the ${I('yz')}-plane: both ${x}-coordinates are positive, so the plane meets the line outside the segment.`,
    say: 'Negative ratio = outside.',
  },
  // pp. 693–694
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Internal or external cut, before any algebra?',
    a: `Look at the signs of the coordinate the plane sets to zero: opposite signs straddle the plane (internal), equal signs do not (external)`,
    why: `(2, 3, 5), (4, 1, −3) and the ${I('xy')}-plane: ${z} = 5 and −3, so internal, ${ratio('5', '3')}.`,
    say: null,
  },

  // ── Topic 01 · Direction Cosines, Direction Ratios & Equations of a Line ──
  // pp. 697–699, 704
  {
    topic: 1,
    kind: 'remember',
    q: 'What are direction cosines, and what identity do they satisfy?',
    a: `${l} = ${COS(al)}, ${m} = ${COS(be)}, ${n} = ${COS(ga)}, the angles with the positive axes, and ${sq(l)} + ${sq(m)} + ${sq(n)} = 1: the components of the unit vector along the line`,
    why: `Each cos<sup>2</sup> is 1 − sin<sup>2</sup>, so sin<sup>2</sup>${NB}${al} + sin<sup>2</sup>${NB}${be} + sin<sup>2</sup>${NB}${ga} = 3 − 1 = 2.`,
    say: 'Cosines on a unit budget.',
  },
  // pp. 697, 699, 701, 704
  {
    topic: 1,
    kind: 'remember',
    q: `How do direction ratios ${a}, ${b}, ${c} become direction cosines?`,
    a: `Divide each by ${rt(`${sq(a)} + ${sq(b)} + ${sq(c)}`)}, with one ± for all three. Direction ratios are any triple proportional to the cosines, so never unique, and never (0, 0, 0)`,
    why: `2, −3, 6: the root is 7, so (${fr('2', '7')}, −${fr('3', '7')}, ${fr('6', '7')}).`,
    say: 'Ratios are a recipe, cosines are the dish.',
  },
  // pp. 697–698, 701, 704
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the vector and Cartesian equations of a line?',
    a: `${vr} = ${va} + ${la}${vb}, ${va} the point and ${vb} the direction; ${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${fr(`${z} − ${z1}`, c)}. ${la} is a true length only when ${vb} is a unit vector`,
    why: `Through (1, 4, −2) with direction ratios 2, −3, 6: ${fr(`${x} − 1`, '2')} = ${fr(`${y} − 4`, '−3')} = ${fr(`${z} + 2`, '6')}.`,
    say: null,
  },
  // pp. 698–699, 703–704
  {
    topic: 1,
    kind: 'remember',
    q: `What are the direction ratios and cosines of the line through ${P}(${x1}, ${y1}, ${z1}) and ${Q}(${x2}, ${y2}, ${z2})?`,
    a: `Direction ratios (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}); divide by ${I('PQ')} for the cosines`,
    why: `${P}(2, 3, 5), ${Q}(−1, 3, 2): (−3, 0, −3) over 3√2 gives (−${fr('1', '√2')}, 0, −${fr('1', '√2')}).`,
    say: null,
  },
  // pp. 697, 699, 703
  {
    topic: 1,
    kind: 'remember',
    q: 'Which special directions are worth knowing outright?',
    a: `Along the ${x}-axis, (1, 0, 0); equally inclined to all three axes, ${l} = ${m} = ${n} = ±${fr('1', '√3')}; one direction cosine 0 means perpendicular to that axis, parallel to a coordinate plane. Lines are parallel exactly when their direction ratios are proportional`,
    why: `A line equally inclined to the axes and one with direction ratios 1, −1, 0 are perpendicular: 1 − 1 + 0 = 0.`,
    say: null,
  },
  // pp. 697, 704
  {
    topic: 1,
    kind: 'mixup',
    q: `The angle with the ${z}-axis and the angle with the ${I('xy')}-plane: equal?`,
    a: 'No: they are complementary, adding to 90°. Direction cosines use the angle with the axis itself',
    why: `A line in the ${I('xy')}-plane makes 90° with the ${z}-axis, so ${n} = ${COS('90°')} = 0.`,
    say: null,
  },
  // pp. 703–704
  {
    topic: 1,
    kind: 'mistake',
    q: `Are the direction ratios of ${fr(`${x} − 1`, '2')} = ${fr(`3 − ${y}`, '4')} = ${fr(`2${z} − 5`, '6')} 2, 4, 6?`,
    a: `No: put it in standard form first. ${fr(`3 − ${y}`, '4')} = ${fr(`${y} − 3`, '−4')} and ${fr(`2${z} − 5`, '6')} = ${fr(`${z} − 2.5`, '3')}, so 2, −4, 3`,
    why: 'Every numerator must read “variable minus constant” with a coefficient of 1 before the denominators mean anything.',
    say: 'Standardise, then read.',
  },
  // pp. 701–702, 704
  {
    topic: 1,
    kind: 'shortcut',
    q: `A line makes 60° with the ${x}-axis and 45° with the ${y}-axis. Its angle with the ${z}-axis?`,
    a: `60° or 120°: cos<sup>2</sup>${NB}${ga} = 1 − ${fr('1', '4')} − ${fr('1', '2')} = ${fr('1', '4')}, and both signs of ${COS(ga)} count`,
    why: 'Go straight to the squares; then square any cosine answer and check that the three add to 1.',
    say: 'DC sets always come in a ± pair: one line, two directions.',
  },

  // ── Topic 02 · Shortest Distance & Angle Between Two Lines ──
  // pp. 707, 711, 715
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the angle between two lines?',
    a: `${COS(th)} = ${fr(bar(dot(b1, b2)), `${bar(b1)}${bar(b2)}`)} = ${bar(`${sb(l, '1')}${sb(l, '2')} + ${sb(m, '1')}${sb(m, '2')} + ${sb(n, '1')}${sb(n, '2')}`)}: the modulus makes it the acute angle`,
    why: `Direction ratios (2, −1, 2) and (1, 2, 2): ${fr('4', '3 · 3')}, so the angle is cos<sup>−1</sup>${NB}${fr('4', '9')}.`,
    say: 'Acute by modulus.',
  },
  // pp. 707–708, 711–712, 715
  {
    topic: 2,
    kind: 'remember',
    q: `What is the shortest distance between skew lines ${vr} = ${a1} + ${la}${b1} and ${vr} = ${a2} + ${mu}${b2}?`,
    a: `${d} = ${fr(bar(STP), bar(crs(b1, b2)))}: the joining vector projected on the common perpendicular ${crs(b1, b2)}`,
    why: `(1, 2, −1) + ${la}(2, 1, −2) and (3, −1, 1) + ${mu}(1, 2, 2): ${crs(b1, b2)} = (6, −6, 3), of length 9, and the triple product is 36, so ${d} = 4.`,
    say: 'Cross to bridge, dot to project.',
  },
  // pp. 707–708, 712
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the Cartesian determinant in the shortest-distance formula?',
    a: `The scalar triple product as a 3 × 3 array: rows (${x2} − ${x1}, ${y2} − ${y1}, ${z2} − ${z1}), the first line’s ratios, the second’s. Its absolute value over ${bar(crs(b1, b2))} is the distance; set to 0, it is the coplanarity test`,
    why: `${fr(`${x} − 2`, '1')} = ${fr(`${y} − 1`, '2')} = ${fr(`${z} + 1`, '3')} and ${fr(`${x} − 1`, '3')} = ${fr(`${y} − ${k}`, '2')} = ${fr(`${z} − 2`, '1')}: the determinant is 8${k} − 16, so they are coplanar at ${k} = 2.`,
    say: null,
  },
  // pp. 707–709, 714–715
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the distance between parallel lines?',
    a: `${d} = ${fr(bar(crs(vb, `(${a2} − ${a1})`)), bar(vb))}, with ${vb} the shared direction`,
    why: `The skew formula fails here: ${crs(b1, b2)} = ${ZERO}, so it reads ${fr('0', '0')}.`,
    say: 'Parallel? cross dies.',
  },
  // pp. 707, 709, 711, 714
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you test two lines for perpendicular and parallel?',
    a: `Perpendicular: ${sb(a, '1')}${sb(a, '2')} + ${sb(b, '1')}${sb(b, '2')} + ${sb(c, '1')}${sb(c, '2')} = 0. Parallel: ${fr(sb(a, '1'), sb(a, '2'))} = ${fr(sb(b, '1'), sb(b, '2'))} = ${fr(sb(c, '1'), sb(c, '2'))}. They are the two extreme values of one cosine`,
    why: `(2, −1, 1) and (1, 1, −1): 2 − 1 − 1 = 0, perpendicular. (3, ${p}, 2) is parallel to (6, −4, 4) at ${p} = −2.`,
    say: null,
  },
  // pp. 707–708, 713, 715
  {
    topic: 2,
    kind: 'mixup',
    q: `${dot(b1, b2)} = 0, ${crs(b1, b2)} = ${ZERO}, ${STP} = 0: which means coplanar?`,
    a: `The last: the lines lie in one plane, so they meet unless they are parallel. The first means perpendicular, the second parallel`,
    why: '“Show the lines intersect” means: the determinant is zero and the lines are not parallel.',
    say: null,
  },
  // pp. 713–714
  {
    topic: 2,
    kind: 'mistake',
    q: `Shortest distance between (2, −1, 0) + ${la}(1, −1, 1) and (3, 0, 1) + ${mu}(2, 1, −1): 6, or 3√2?`,
    a: `Neither: the triple product 6 must be divided by ${bar(crs(b1, b2))} = 3√2, so ${d} = √2`,
    why: `${crs(b1, b2)} = (0, 3, 3) and ${a2} − ${a1} = (1, 1, 1).`,
    say: null,
  },
  // pp. 714–715
  {
    topic: 2,
    kind: 'shortcut',
    q: 'In a shortest-distance problem, what do you compute first?',
    a: `${crs(b1, b2)}: its length is the denominator and its being ${ZERO} says the lines are parallel. A zero triple product next means distance 0; stop there`,
    why: 'Every distance is ≥ 0: a negative answer means a missing modulus.',
    say: null,
  },

  // ── Topic 03 · Planes in Space ──
  // pp. 716–718, 721, 724
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the point–normal equation of a plane?',
    a: `${dot(`(${vr} − ${va})`, vn)} = 0, that is ${dot(vr, vn)} = ${d}; in coordinates ${a}(${x} − ${x1}) + ${b}(${y} − ${y1}) + ${c}(${z} − ${z1}) = 0, where (${a}, ${b}, ${c}) is the normal and (${x1}, ${y1}, ${z1}) the point`,
    why: `Through (2, −1, 3) with normal (1, 2, −2): ${x} + 2${y} − 2${z} + 6 = 0, at distance ${fr('6', '3')} = 2 from the origin.`,
    say: 'A point and a normal make a plane.',
  },
  // pp. 717–718, 720, 724
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the other forms of a plane?',
    a: `Three points: normal (${vb} − ${va})${NB}×${NB}(${vc} − ${va}), the determinant form. Intercepts: ${fr(x, a)} + ${fr(y, b)} + ${fr(z, c)} = 1. Normal form: ${dot(vr, nh)} = ${p}, where ${p} is the distance from the origin only if ${nh} is a unit vector`,
    why: `All are ${dot(vr, vn)} = ${d} in disguise; they differ only in the data you start from.`,
    say: null,
  },
  // pp. 717–718, 723–724
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the angle, parallel and perpendicular tests for two planes?',
    a: `${COS(th)} = ${fr(bar(dot(n1, n2)), `${bar(n1)}${bar(n2)}`)}, the angle between the normals; parallel when ${n1} ∥ ${n2}, perpendicular when ${dot(n1, n2)} = 0`,
    why: `Through (1, 2, 3), parallel to 2${x} − 3${y} + 4${z} = 10: keep the normal, so 2${x} − 3${y} + 4${z} = 8.`,
    say: null,
  },
  // pp. 718, 723–724
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the point–plane and plane–plane distances?',
    a: `${fr(bar(PLANE), NORM)}; between parallel planes, ${fr(bar(`${sb(d, '1')} − ${sb(d, '2')}`), NORM)}, with both written with the same ${a}, ${b}, ${c}`,
    why: `(3, −2, 1) from 2${x} − 2${y} + ${z} + 3 = 0: ${fr(bar('6 + 4 + 1 + 3'), '3')} = ${fr('14', '3')}.`,
    say: null,
  },
  // pp. 717–718, 721, 724
  {
    topic: 3,
    kind: 'remember',
    q: `How do you find a plane through the line where ${P1} = 0 and ${P2} = 0 meet?`,
    a: `Write ${P1} + ${la}${P2} = 0 and fix ${la} with the one extra condition; the line itself is never needed`,
    why: `Through ${x} + ${y} + ${z} = 6 and 2${x} + 3${y} + 4${z} + 5 = 0 and the point (1, 1, 1): ${la} = ${fr('3', '14')}, so 20${x} + 23${y} + 26${z} − 69 = 0.`,
    say: 'Family first, line never.',
  },
  // pp. 718, 721, 723–724
  {
    topic: 3,
    kind: 'mixup',
    q: 'The angle between a line and a plane: sine or cosine?',
    a: `Sine: ${SIN(ph)} = ${fr(bar(dot(vb, vn)), `${bar(vb)}${bar(vn)}`)}. The cosine gives the angle with the normal, its complement`,
    why: `${fr(`${x} − 1`, '2')} = ${fr(y, '−1')} = ${fr(`${z} + 2`, '2')} and 3${x} − 6${y} + 2${z} = 7: ${SIN(ph)} = ${fr('16', '3 · 7')} = ${fr('16', '21')}.`,
    say: 'Plane-to-plane cosine, line-to-plane sine.',
  },
  // pp. 722–723
  {
    topic: 3,
    kind: 'mistake',
    q: `Distance between 2${x} − ${y} + 2${z} = 6 and 4${x} − 2${y} + 4${z} = 9: subtract 6 from 9 at once?`,
    a: `No: match the normals first. 4${x} − 2${y} + 4${z} = 12 against 9 gives ${fr('3', '6')} = ${fr('1', '2')}`,
    why: `The formula ${fr(bar(`${sb(d, '1')} − ${sb(d, '2')}`), NORM)} assumes identical ${a}, ${b}, ${c}.`,
    say: null,
  },
  // pp. 717, 724
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Are two points on the same side of a plane?',
    a: `Substitute both into ${a}${x} + ${b}${y} + ${c}${z} + ${d}: same sign, same side; opposite signs, the plane cuts the segment between them`,
    why: 'No work beyond the distance numerator you were already evaluating.',
    say: `The sign of ${PLANE} tells you which side of the plane the point is on.`,
  },

  // ── Topic 04 · The Perpendicular Toolkit ──
  // pp. 726–727, 729, 733
  {
    topic: 4,
    kind: 'remember',
    q: `What is the foot of the perpendicular from ${P} to the line ${vr} = ${va} + ${la}${vb}?`,
    a: `${F} = ${va} + ${sb(la, '0')}${vb}, with ${sb(la, '0')} = ${fr(dot(vAP, vb), sq(bar(vb)))} and ${vAP} = ${vp} − ${va}`,
    why: `${P}(2, 4, 1) and (1, 2, 3) + ${la}(1, −1, 1): ${sb(la, '0')} = ${fr('1 − 2 − 2', '3')} = −1, so ${F} = (0, 3, 2).`,
    say: 'Dot for the foot, cross for the gap.',
  },
  // pp. 726–727, 729, 733
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the distance from a point to a line?',
    a: `${fr(bar(crs(vAP, vb)), bar(vb))}, with no foot needed; or ${I('PF')} once the foot is known`,
    why: `The same ${P} and line: ${crs(vAP, vb)} = (0, −3, −3), so ${fr('3√2', '√3')} = √6.`,
    say: null,
  },
  // pp. 726–727, 730, 733
  {
    topic: 4,
    kind: 'remember',
    q: `What do the foot, the image and the distance from ${P}(${x1}, ${y1}, ${z1}) to ${a}${x} + ${b}${y} + ${c}${z} + ${d} = 0 come to?`,
    a: `With ${t} = ${fr(PLANE, NORM2)}: foot ${P} − ${t}${vn}, image ${P} − 2${t}${vn}, distance ${bar(t)}${bar(vn)}. ${t} = 0 means ${P} is on the plane`,
    why: `${P}(4, 1, 3) and ${x} − 2${y} + 2${z} − 5 = 0: ${t} = ${fr('1', '3')}, foot (${fr('11', '3')}, ${fr('5', '3')}, ${fr('7', '3')}), image (${fr('10', '3')}, ${fr('7', '3')}, ${fr('5', '3')}), distance 1.`,
    say: 'The normal is the perpendicular.',
  },
  // pp. 727, 730–731, 733
  {
    topic: 4,
    kind: 'remember',
    q: `How do you get the image of ${P} from the foot ${F}?`,
    a: `${P}′ = 2${F} − ${P}, in a line or in a plane: the foot is the midpoint of ${P} and its image`,
    why: `${P}(1, 6, 3) and (0, 1, 2) + ${la}(1, 2, 3): ${sb(la, '0')} = 1, ${F} = (1, 3, 5), image (1, 0, 7).`,
    say: 'Foot is the midpoint.',
  },
  // pp. 732–733
  {
    topic: 4,
    kind: 'remember',
    q: 'The shortest path between two points on the same side of a plane that must touch the plane?',
    a: 'Reflect one endpoint in the plane and join it to the other with a straight segment: its length is the minimum, and its crossing point is the contact point',
    why: 'An image computation in disguise.',
    say: 'Reflect to straighten a bent path.',
  },
  // pp. 726, 731, 733
  {
    topic: 4,
    kind: 'mixup',
    q: `${t} = ${fr(PLANE, NORM2)} or the distance: which divides by ${sq(bar(vn))}?`,
    a: `${t} divides by ${sq(bar(vn))}; the distance divides by ${bar(vn)}. They differ by a factor of ${bar(vn)}`,
    why: `${P}(1, 2, −1) and 2${x} − ${y} + 2${z} + 1 = 0: ${t} = −${fr('1', '9')}, distance ${fr('1', '3')}.`,
    say: `${t} over ${sq(bar(vn))}, distance over ${bar(vn)}.`,
  },
  // pp. 730, 732
  {
    topic: 4,
    kind: 'mistake',
    q: `Distance of (1, 0, 2) from the line through (3, 1, 1) with direction (2, 2, 1): ${fr('√29', '9')}?`,
    a: `No: ${fr('√29', '3')}. The cross product already carries one ${bar(vb)}, so divide by ${bar(vb)} exactly once`,
    why: `${crs(vAP, vb)} = (−3, 4, −2), of length √29, and ${bar(vb)} = 3.`,
    say: null,
  },
  // pp. 729, 732
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A one-line check on a foot on a line?',
    a: `${dot(vPF, vb)} = 0: a wrong ${sb(la, '0')} gives a plausible ${F} that fails it`,
    why: `${P}(2, 4, 1), ${F}(0, 3, 2): ${vPF} = (−2, −1, 1), and (−2, −1, 1)${NB}·${NB}(1, −1, 1) = 0.`,
    say: null,
  },

  // ── Topic 05 · Line–Plane & Plane–Plane Configurations ──
  // pp. 735–736, 738, 741
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you find where a line meets a plane?',
    a: `Substitute the line’s moving point into the plane and solve for ${la}. ${dot(vb, vn)} ≠ 0 gives one point; a contradiction means parallel, 0 = 0 means the line lies in the plane`,
    why: `${fr(`${x} − 2`, '1')} = ${fr(`${y} + 1`, '−1')} = ${fr(`${z} − 3`, '2')} and 2${x} + ${y} − ${z} = 1: ${la} = −1, the point (1, 0, 1).`,
    say: 'Dot decides.',
  },
  // pp. 735–736, 739, 741
  {
    topic: 5,
    kind: 'remember',
    q: 'Which normal for a plane containing given lines or points?',
    a: `The cross product of two vectors in the plane: ${crs(b1, b2)} for two intersecting lines, ${crs(vb, `(${vP} − ${va})`)} for a line and a point, ${crs(vb, `(${a2} − ${a1})`)} for two parallel lines; then point–normal form`,
    why: `(1, −1, 3) + ${la}(2, 3, 1) and (2, 1, 0): ${vN} = (−11, 7, 1), so 11${x} − 7${y} − ${z} = 15.`,
    say: 'Plane through anything = a cross product.',
  },
  // pp. 735–736, 739, 741
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the planes bisecting the angles between two planes?',
    a: `${fr(P1, bar(n1))} = ±${NB}${fr(P2, bar(n2))}: equidistant points, two bisector planes, perpendicular to each other`,
    why: `2${x} − ${y} + 2${z} + 3 = 0 and 3${x} − 2${y} + 6${z} − 8 = 0: 5${x} − ${y} − 4${z} + 45 = 0 and 23${x} − 13${y} + 32${z} − 3 = 0.`,
    say: 'Bisect = normalise, then ±.',
  },
  // pp. 735–736, 741
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you reflect a line in a plane?',
    a: `Keep the meeting point ${M}, which is fixed; reflect a second point ${Q} of the line to ${Q}′; the image is the line ${I('MQ')}′. A line parallel to the plane keeps its direction`,
    why: `(0, 0, 1) + ${la}(1, 0, 1) in ${z} = 0: ${M}(−1, 0, 0) and ${Q}′(0, 0, −1), so (−1, 0, 0) + ${mu}(1, 0, −1).`,
    say: 'Reflect and project reuse old tools.',
  },
  // pp. 735, 738, 741
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the projection of a line on a plane?',
    a: `The line where the plane meets the plane through the line perpendicular to it, whose normal is ${crs(vb, vn)}; or join the feet of perpendiculars from two points of the line`,
    why: `If ${crs(vb, vn)} = ${ZERO}, the line is perpendicular to the plane and projects to a single point, the foot.`,
    say: null,
  },
  // pp. 738, 740–741
  {
    topic: 5,
    kind: 'mixup',
    q: `${dot(vb, vn)} = 0: does the line lie in the plane?`,
    a: 'Not yet known: it is parallel. Test one point of the line; on the plane means contained, off it means strictly parallel',
    why: `Through (1, 0, 2) with direction (1, 2, 1), and ${x} + ${y} − 3${z} + 2 = 0: the dot product is 0, the point gives −3, so strictly parallel.`,
    say: null,
  },
  // pp. 740–741
  {
    topic: 5,
    kind: 'mistake',
    q: `Are the bisector planes ${P1} = ±${P2}?`,
    a: `Only when ${bar(n1)} = ${bar(n2)}. Otherwise divide each by the length of its own normal first, or you get a plane through the line of intersection that is not a bisector`,
    why: 'Equidistant means equal normalised distances.',
    say: null,
  },
  // pp. 739, 741
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Which bisector plane bisects the acute angle?',
    a: 'Compute both, then find the angle each makes with one original plane: the smaller angle marks the acute-angle bisector',
    why: `Never assume the + sign gives it: that depends on the constants and on the sign of ${dot(n1, n2)}.`,
    say: null,
  },

  // ── Additional A · The Line Where Two Planes Meet ──
  // pp. 743–744
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you write down the line where two planes meet?',
    a: `Direction ${vd} = ${crs(n1, n2)}; a point by setting one variable, usually ${z}, to 0 and solving the two equations left`,
    why: `${x} + ${y} + ${z} = 6 and 2${x} − ${y} + ${z} = 3: ${vd} = (2, 1, −3) and ${z} = 0 gives (3, 3, 0).`,
    say: 'The direction is the crossed normals.',
  },
  // pp. 743, 745
  {
    topic: 6,
    kind: 'remember',
    q: 'Does a point lie on the line where two planes meet?',
    a: 'Exactly when it satisfies both plane equations: no parametrisation needed',
    why: `For ${x} + ${y} + ${z} = 6 and 2${x} − ${y} + ${z} = 3: (5, 4, −3) satisfies both; (4, 4, −3) gives 5 in the first, so it is off the line.`,
    say: 'Testing membership never requires the parametrisation at all.',
  },
  // pp. 743, 745
  {
    topic: 6,
    kind: 'mixup',
    q: 'The direction of the line has a zero component: symmetric form?',
    a: `No: a zero denominator makes it illegal. Write that coordinate as a constant and the other two as one equation`,
    why: `2${x} + ${y} − ${z} = 3 and ${x} − ${y} + ${z} = 1: direction (0, 1, 1), so ${x} = ${fr('4', '3')} together with ${y} − ${z} = ${fr('1', '3')}.`,
    say: null,
  },
  // p. 743
  {
    topic: 6,
    kind: 'mistake',
    q: `Setting ${z} = 0 leaves two equations with no solution. Is something wrong?`,
    a: `No: the line just never meets the ${I('xy')}-plane. Set a different variable to 0 instead`,
    why: 'The point can come from any coordinate plane the line actually crosses.',
    say: null,
  },
  // p. 745
  {
    topic: 6,
    kind: 'shortcut',
    q: `The angle between the line where ${x} + 2${y} + 2${z} = 5 meets 2${x} + ${y} + 2${z} = 7 and the ${I('xy')}-plane?`,
    a: `${SIN(ph)} = ${fr('3', '√17')}: the direction is (2, 2, −3), and against a plane use sine with its normal (0, 0, 1)`,
    why: 'Once the direction is crossed out, every angle and distance is the ordinary line work.',
    say: null,
  },

  // ── Additional B · Closest Points on Skew Lines ──
  // pp. 745–747
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you find the two closest points on skew lines?',
    a: `Join general points: ${vD} = ${vc} + ${mu}${b2} − ${la}${b1}, with ${vc} = ${a2} − ${a1}. Make ${vD} perpendicular to both lines: ${dot(vD, b1)} = 0 and ${dot(vD, b2)} = 0, a 2 × 2 system in ${la} and ${mu}`,
    why: `${la}(1, 1, 0) and (1, 0, 2) + ${mu}(0, 1, 1): 2${la} − ${mu} = 1 and ${la} − 2${mu} = 2 give (0, 0, 0) and (1, −1, 1), √3 apart.`,
    say: 'The fix is to go back to first principles and minimise directly.',
  },
  // pp. 745–747
  {
    topic: 7,
    kind: 'remember',
    q: 'Why is the solution of that system the minimum, and how do you check it?',
    a: `For lines that are not parallel the system has one solution, and it is the global minimum. Its length ${bar(vD)} must equal the triple-product distance`,
    why: `In the last example, ${crs(b1, b2)} = (1, −1, 1) and ${dot(vc, '(1, −1, 1)')} = 3, so ${fr('3', '√3')} = √3 again.`,
    say: 'The critical point automatically builds the common perpendicular.',
  },
  // pp. 745, 747
  {
    topic: 7,
    kind: 'mixup',
    q: 'The same system for two parallel lines?',
    a: 'No unique solution: both equations carry the same information, and every transversal perpendicular to the shared direction has the same length. Use the parallel-lines formula',
    why: `${fr(bar(crs(vb, `(${a2} − ${a1})`)), bar(vb))}.`,
    say: null,
  },
  // pp. 746–747
  {
    topic: 7,
    kind: 'mistake',
    q: 'Closest points found: done?',
    a: `Check first: ${dot(vD, b1)} = 0 and ${dot(vD, b2)} = 0, and the length against the triple-product value`,
    why: `${la}(1, 1, 0) and (1, 0, 2) + ${mu}(0, 1, 1): ${vD} = (1, −1, 1), and 1 − 1 = 0, −1 + 1 = 0.`,
    say: null,
  },
  // p. 746
  {
    topic: 7,
    kind: 'shortcut',
    q: `${dot(b1, b2)} = 0: what happens to the system?`,
    a: `It splits: ${la}${sq(bar(b1))} = ${dot(vc, b1)} and −${mu}${sq(bar(b2))} = ${dot(vc, b2)}, one unknown each`,
    why: `(1, 2, −1) + ${la}(2, 1, −2) and (3, −1, 1) + ${mu}(1, 2, 2): 9${la} = −3 and −9${mu} = 0, so (${fr('1', '3')}, ${fr('5', '3')}, −${fr('1', '3')}) and (3, −1, 1), 4 apart.`,
    say: null,
  },

  // ── Additional C · Four Points, One Plane ──
  // pp. 748–749
  {
    topic: 8,
    kind: 'remember',
    q: 'When are four points coplanar?',
    a: `Exactly when ${dot(`(${crs(vAB, vAC)})`, vAD)} = 0. If ${A}, ${B}, ${C} are collinear it holds automatically, correctly`,
    why: `(1, 2, 3), (3, 2, 1), (2, 3, 1), (6, 0, 0): ${crs(vAB, vAC)} = (2, 2, 2) and (2, 2, 2)${NB}·${NB}(5, −2, −3) = 0; the plane is ${x} + ${y} + ${z} = 6.`,
    say: 'Four points are coplanar if and only if their triple product dies.',
  },
  // pp. 748–749
  {
    topic: 8,
    kind: 'remember',
    q: `What is the plane through a line (${va}, ${vb}) parallel to a direction ${vm}?`,
    a: `Normal ${crs(vb, vm)}: ${dot(`(${vr} − ${va})`, `(${crs(vb, vm)})`)} = 0, for ${vm} not parallel to ${vb}`,
    why: `Through (1, 0, 1) + ${la}(1, 1, 0), parallel to (0, 1, 1): normal (1, −1, 1), plane ${x} − ${y} + ${z} = 2.`,
    say: null,
  },
  // pp. 748–749
  {
    topic: 8,
    kind: 'mixup',
    q: `A plane through a line, perpendicular to a given plane, or parallel to it?`,
    a: `Perpendicular: normal ${crs(vb, vn)}. Parallel: it exists only when ${dot(vb, vn)} = 0, and is then ${dot(`(${vr} − ${va})`, vn)} = 0`,
    why: `Through (1, 1, 1) + ${la}(2, −1, 1), perpendicular to ${x} + 2${y} − ${z} = 0: normal (−1, 3, 5), plane ${x} − 3${y} − 5${z} + 7 = 0.`,
    say: null,
  },
  // p. 748
  {
    topic: 8,
    kind: 'mistake',
    q: `The normal ${crs(vb, vm)} comes out ${ZERO}. An arithmetic slip?`,
    a: `Not necessarily: ${vm} ∥ ${vb}, so every plane through the line qualifies and the answer is “not unique”. The same holds for ${crs(vb, vn)} = ${ZERO}`,
    why: 'The zero vector is the diagnosis.',
    say: 'One computation, no special cases.',
  },
  // p. 749
  {
    topic: 8,
    kind: 'shortcut',
    q: `For which ${k} are (1, 0, 0), (0, 1, 0), (0, 0, 1), (1, 1, ${k}) coplanar?`,
    a: `${k} = −1: the triple product is 1 + ${k}`,
    why: `Equivalently, the fourth point must sit on the plane ${x} + ${y} + ${z} = 1 of the first three.`,
    say: null,
  },

  // ── Additional D · Mirror Shortcuts ──
  // pp. 749–750
  {
    topic: 9,
    kind: 'remember',
    q: `What is the foot of the perpendicular from the origin to ${a}${x} + ${b}${y} + ${c}${z} = ${d}?`,
    a: `${F} = ${fr(d, NORM2)}(${a}, ${b}, ${c}): along the normal, and on the plane`,
    why: `2${x} + 3${y} + 6${z} = 42: ${fr('42', '49')}(2, 3, 6) = (${fr('12', '7')}, ${fr('18', '7')}, ${fr('36', '7')}), at distance 6.`,
    say: null,
  },
  // pp. 749–751
  {
    topic: 9,
    kind: 'remember',
    q: `The foot from the origin is (${al}, ${be}, ${ga}). The plane?`,
    a: `${al}${x} + ${be}${y} + ${ga}${z} = ${sq(al)} + ${sq(be)} + ${sq(ga)}: the foot is both a point of it and its normal`,
    why: `Foot (1, 2, 2): ${x} + 2${y} + 2${z} = 9, at distance ${fr('9', '3')} = 3 from the origin, the length of (1, 2, 2).`,
    say: null,
  },
  // pp. 750–751
  {
    topic: 9,
    kind: 'mixup',
    q: 'The image of a point in a coordinate plane, and in an axis?',
    a: `In a coordinate plane, flip one sign: (${x}, ${y}, −${z}) in the ${I('xy')}-plane. In an axis, flip the other two: (${x}, −${y}, −${z}) in the ${x}-axis`,
    why: `(3, −4, 5): in the ${I('yz')}-plane (−3, −4, 5); in the ${x}-axis (3, 4, −5).`,
    say: `These are instant: no ${t}, no formula.`,
  },
  // p. 750
  {
    topic: 9,
    kind: 'mistake',
    q: `The mirror trick for a shortest path ${A} to ${M} to ${B}: for any ${A} and ${B}?`,
    a: `No: for ${A} and ${B} on the same side of the plane. Reflect ${B} to ${B}′; then ${I('AM')} + ${I('MB')} = ${I('AM')} + ${I('MB')}′ ≥ ${I('AB')}′`,
    why: `Every point of the mirror is equidistant from ${B} and ${B}′.`,
    say: null,
  },
  // pp. 750–751
  {
    topic: 9,
    kind: 'shortcut',
    q: `A ray goes from ${A}(1, 1, 2) to the ${I('xy')}-plane and on to ${B}(3, 4, 6). Contact point and length?`,
    a: `Reflect ${B} to (3, 4, −6) and join: ${M} = (${fr('3', '2')}, ${fr('7', '4')}, 0), and the path is √77`,
    why: `The segment (1 + 2${t}, 1 + 3${t}, 2 − 8${t}) meets ${z} = 0 at ${t} = ${fr('1', '4')}.`,
    say: 'Reflect, join, read the crossing point.',
  },

  // ── Additional E · Locus Problems ──
  // pp. 751–752
  {
    topic: 10,
    kind: 'remember',
    q: `What is the locus of points equidistant from ${A}(${va}) and ${B}(${vb})?`,
    a: `The plane 2${dot(vp, `(${vb} − ${va})`)} = ${sq(bar(vb))} − ${sq(bar(va))}: normal along ${I('AB')}, through the midpoint`,
    why: `(1, 2, 3) and (3, 4, 5): 2(2${x} + 2${y} + 2${z}) = 36, so ${x} + ${y} + ${z} = 9, through (2, 3, 4).`,
    say: 'Square both sides and cancel the quadratic terms.',
  },
  // p. 752
  {
    topic: 10,
    kind: 'remember',
    q: `Planes pass through a fixed point ${P}(${sb(x, '0')}, ${sb(y, '0')}, ${sb(z, '0')}). The locus of the feet of perpendiculars from the origin?`,
    a: `${sq(x)} + ${sq(y)} + ${sq(z)} = ${sb(x, '0')}${x} + ${sb(y, '0')}${y} + ${sb(z, '0')}${z}: the sphere on ${I('OP')} as diameter`,
    why: `${P}(2, 4, 4): (${x} − 1)<sup>2</sup> + (${y} − 2)<sup>2</sup> + (${z} − 2)<sup>2</sup> = 9, centre (1, 2, 2), radius 3.`,
    say: 'Complete the square to report it in standard form.',
  },
  // pp. 752–753
  {
    topic: 10,
    kind: 'mixup',
    q: 'Equidistant from two planes: one locus or two?',
    a: `Two intersecting planes give the two bisector planes; two parallel planes give one mid-plane, ${a}${x} + ${b}${y} + ${c}${z} + ${fr(`${sb(d, '1')} + ${sb(d, '2')}`, '2')} = 0`,
    why: `${x} + ${y} + ${z} = 1 and ${x} + ${y} + ${z} = 7: the mid-plane ${x} + ${y} + ${z} = 4.`,
    say: null,
  },
  // p. 753
  {
    topic: 10,
    kind: 'mistake',
    q: `Points at distance 2 from ${x} + 2${y} + 2${z} − 9 = 0: one plane?`,
    a: `Two: ${fr(bar(`${x} + 2${y} + 2${z} − 9`), '3')} = 2 splits into ${x} + 2${y} + 2${z} = 15 and ${x} + 2${y} + 2${z} = 3`,
    why: 'The modulus opens both ways.',
    say: null,
  },
  // p. 751
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Which surface does a locus equation describe?',
    a: 'Linear: a plane. Quadratic with equal squared coefficients and no cross terms: a sphere, once the completed square leaves a positive number on the right',
    why: `Name a generic point (${x}, ${y}, ${z}), translate the condition, then recognise the surface.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 759
  {
    topic: 11,
    kind: 'remember',
    q: `Distance of (1, −5, 9) from ${x} − ${y} + ${z} = 5, measured along the line ${x} = ${y} = ${z}?`,
    a: `10√3: run the line through the point with direction (1, 1, 1), meet the plane at (−9, −15, −1), and measure`,
    why: `(1 + ${t}) − (−5 + ${t}) + (9 + ${t}) = 5 gives ${t} = −10.`,
    say: null,
  },
  // p. 758
  {
    topic: 11,
    kind: 'shortcut',
    q: `The plane through (1, 2, 1) and (2, 1, 2), parallel to the line 2${x} = 3${y}, ${z} = 1?`,
    a: `2${x} − 3${y} − 5${z} + 9 = 0: normal ${crs(vAB, vb)} = (1, −1, 1)${NB}×${NB}(3, 2, 0) = (−2, 3, 5)`,
    why: 'It also passes through (−2, 0, 1): −4 − 0 − 5 + 9 = 0.',
    say: 'The normal is always the cross product of two vectors lying in the plane.',
  },
  // pp. 756–757
  {
    topic: 11,
    kind: 'shortcut',
    q: `Shortest distance between ${fr(`${x} + 2`, '1')} = ${fr(y, '−1')} = ${fr(`${z} − 1`, '2')} and the line where ${x} + ${y} + ${z} + 1 = 0 meets 2${x} − ${y} + ${z} + 3 = 0?`,
    a: `0: setting ${y} = 0 in the planes gives (−2, 0, 1), the first line’s own point, so the lines meet`,
    why: `${crs(b1, b2)} = (1, 7, 3) ≠ ${ZERO}: not parallel, so a shared point means they intersect.`,
    say: null,
  },
  // pp. 758, 760
  {
    topic: 11,
    kind: 'mistake',
    q: `A line has ${dot(vb, vn)} = 0 with a plane: “it lies in the plane”?`,
    a: `Not from that alone: it is parallel. Strictly parallel needs a point off the plane too, ${dot(va, vn)} ≠ ${d}`,
    why: 'One condition fixes the orientation, the other the position.',
    say: `Never stop at ${dot(vb, vn)} = 0; the point test is mandatory.`,
  },
  // pp. 756, 760
  {
    topic: 11,
    kind: 'mistake',
    q: `The answer to a “plane through the line where ${P1} = 0 meets ${P2} = 0” question is ${P2} itself. Will ${P1} + ${la}${P2} = 0 find it?`,
    a: `No: no finite ${la} gives ${P2}. Use ${mu}${P1} + ${P2} = 0 to avoid missing it`,
    why: `${mu} = 0 gives ${P2}.`,
    say: null,
  },
];
