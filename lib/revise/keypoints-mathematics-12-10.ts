/**
 * KEY POINTS for Mathematics Class 12, Chapter 10 (Vector Algebra).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 each have five Remember points and one of each other kind;
 * Additional topics A–D have two Remember points and one of each other kind;
 * Additional P, the past-paper analysis, has five points (three archetypes as
 * Remember and Exam shortcuts, two traps): 49 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the chapter's Subtopics 01–03); Additional
 * topics A–D are 3–6 (Addenda A–D) and Additional P is 7 (Addendum P, What
 * JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio; the addenda print "Page n of 21" beside it) is
 * above each point. Remember: the topic's key definitions, theorems and its
 * Cheat sheet. Common mistakes: its Common pitfalls and its MCQ traps (A–D,
 * which print neither: the slips their worked examples and practice answers
 * warn about; P: its traps). Exam shortcuts: its Pro-Tips, Conceptual Traps
 * and worked examples. `say`: the book's own memory aids, word for word
 * without their quotation marks or the gloss after them: Topic 01 prints
 * three, Topics 02 and 03 four each; all are used, the first two as the
 * topic's memory lines and the rest on later `say`s, which are not shown as
 * memory lines: eleven in all, six of them memory lines. Topic 02's "Dot =
 * aligned, Cross = crossed" takes a full stop. A–D and P print no aids, so
 * each has two of the book's own one-line sentences (A: "Each is a short
 * derivation from the definitions you already have." and "This is Cramer’s
 * rule wearing vector clothing.", cut; B: "Every magnitude becomes a
 * square.", cut, and "Recognising which aggregate is determined is the entire
 * marks-earning move."; C: "Both skills are two applications of what you
 * already own." and "The square erases the orientation of the original
 * triad.", cut; D: "All of it is the section formula and the cross-product
 * area formula, chained." and "Chain two section formulas."; P: "One 3 × 3
 * determinant decides everything.", capitalised, and "Mass points gives the
 * ratio in seconds.", cut): ten more, all memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: the bisector directions are for vectors that are not
 * parallel (the book's own card); a × (b × c) is "a combination of b and
 * c", not "in their plane", which fails when b ∥ c; the area ratios carry
 * their bars unless every weight is positive. The trap "square-and-add kills
 * two options of any DC question" is not used. The Exam relevance claims,
 * the past-paper distribution and its counts, the CBSE, NCERT and syllabus
 * remarks, the difficulty tags and the paper names in P are left out.
 *
 * Markup is the chapter's own: a vector's arrow inside its italic (the
 * letter, then an escaped U+20D7, in one <i>), the unit vectors i, j and k
 * with their hats, italic (k takes an escaped U+0302), "·" and "×" between vectors held by no-break spaces, [a b c] for the box
 * product, m ∶ n with the ratio sign, |…| with a word joiner, − (U+2212)
 * for minus. Every fraction is stacked, <frac><num>…</num><den>…</den></frac>,
 * and never a fraction inside a fraction; no em dashes; and always a space
 * after "<", so it is never read as a tag.
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
const hat = (s: string) => I(`${s}${HAT}`);
const dot = (u: string, w: string) => `${u}${NB}·${NB}${w}`;
const crs = (u: string, w: string) => `${u}${NB}×${NB}${w}`;
const box = (...v: string[]) => `[${v.join(NB)}]`;
const ratio = (u: string, w: string) => `${u}${NB}∶${NB}${w}`;
const AR = (t: string) => `[△${I(t)}]`;

const va = V('a');
const vb = V('b');
const vc = V('c');
const vd = V('d');
const vh = V('h');
const vp = V('p');
const vr = V('r');
const vx = V('x');
const ZERO = `0${ARW}`;
const ii = I('î');
const jj = I('ĵ');
const kk = hat('k');
const ah = hat('a');
const nh = hat('n');
const vAB = V('AB');
const vBA = V('BA');
const vAC = V('AC');
const vAD = V('AD');
const vAR = V('AR');
const vRB = V('RB');
const vPQ = V('PQ');
const vPS = V('PS');
const vRS = V('RS');
const vOA = V('OA');
const vOB = V('OB');

const a = I('a');
const b = I('b');
const c = I('c');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const H = I('H');
const O = I('O');
const P = I('P');
const al = I('α');
const be = I('β');
const ga = I('γ');
const th = I('θ');
const la = I('λ');
const cmp = (s: string, i: string) => sb(I(s), i);
const ABC = box(va, vb, vc);
const ADOTB = dot(va, vb);
const ABSA = bar(va);
const ABSB = bar(vb);
const AXB = crs(va, vb);
const COS = (s: string) => `cos${NB}${s}`;
const SIN = (s: string) => `sin${NB}${s}`;
const sgn = (s: string) => (s === '+' || s === '−' ? `${s} ` : s);
const ijk = (u: string, w: string, t: string) => `${u}${ii} ${sgn(w)}${jj} ${sgn(t)}${kk}`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Vector Operations & Components ──
  // pp. 640, 643, 647
  {
    topic: 0,
    kind: 'remember',
    q: `What are the magnitude of ${vr} = ${x}${ii} + ${y}${jj} + ${z}${kk} and the unit vector along ${va}?`,
    a: `${bar(vr)} = √(${sq(x)} + ${sq(y)} + ${sq(z)}); ${ah} = ${fr(va, ABSA)}, defined only for ${va} ≠ ${ZERO}. The vector of magnitude ${k} along ${va} is ${k}${ah}`,
    why: `${va} = ${ijk('6', '− 2', '+ 3')}: ${ABSA} = 7, and 35${ah} = ${ijk('30', '− 10', '+ 15')}.`,
    say: null,
  },
  // pp. 640, 643, 646–647
  {
    topic: 0,
    kind: 'remember',
    q: `What is ${vAB} for ${A}(${va}) and ${B}(${vb}), and when are three points collinear?`,
    a: `${vAB} = ${vb} − ${va}, head minus tail, and ${vAB} = −${vBA}. Distinct ${A}, ${B}, ${C} are collinear exactly when ${vAB} = ${la}${vAC} for some scalar ${la}`,
    why: `${P}(1, 2, 3), ${I('Q')}(3, 6, 9), ${I('S')}(2, 4, 6): ${vPQ} = 2${vPS}, so they are collinear.`,
    say: null,
  },
  // pp. 640–642, 644–645, 647
  {
    topic: 0,
    kind: 'remember',
    q: `What is the section formula for ${ratio(m, n)}?`,
    a: `Internal: ${fr(`${m}${vb} + ${n}${va}`, `${m} + ${n}`)}; external: ${fr(`${m}${vb} − ${n}${va}`, `${m} − ${n}`)}, ${m} ≠ ${n}; midpoint ${fr(`${va} + ${vb}`, '2')}. It comes from ${n}${vAR} = ${m}${vRB}`,
    why: `The centroid ${fr(`${va} + ${vb} + ${vc}`, '3')} is the ${ratio('2', '1')} point of every median: all three medians meet there.`,
    say: 'Internal adds, external subtracts.',
  },
  // pp. 640–641, 647
  {
    topic: 0,
    kind: 'remember',
    q: 'What are direction cosines and direction ratios?',
    a: `Direction cosines: ${l} = ${COS(al)} = ${fr(x, r)}, ${m} = ${COS(be)} = ${fr(y, r)}, ${n} = ${COS(ga)} = ${fr(z, r)}, unique up to an overall sign. Direction ratios: any triple proportional to them, so not unique; the components themselves are one`,
    why: '(2, −1, 2) and (4, −2, 4) are direction ratios of the same direction.',
    say: 'DC means Divided-by-magnitude; DR means Ratio-only.',
  },
  // pp. 641, 645, 647
  {
    topic: 0,
    kind: 'remember',
    q: 'What identity do direction cosines satisfy?',
    a: `${sq(l)} + ${sq(m)} + ${sq(n)} = 1, since ${fr(`${sq(x)} + ${sq(y)} + ${sq(z)}`, sq(r))} = 1: three cosines are a direction only if their squares sum to 1`,
    why: `Magnitude 14, direction ratios 2, 3, −6, acute with the ${x}-axis: direction cosines (${fr('2', '7')}, ${fr('3', '7')}, −${fr('6', '7')}), and ${vr} = ${ijk('4', '+ 6', '− 12')}.`,
    say: 'Squares of DCs always sum to one.',
  },
  // pp. 645–646
  {
    topic: 0,
    kind: 'mixup',
    q: `Are the direction cosines of ${ijk('', '− 2', '+ 2')} (1, −2, 2)?`,
    a: `No: those are direction ratios. Divide by the magnitude 3: (${fr('1', '3')}, −${fr('2', '3')}, ${fr('2', '3')})`,
    why: `Dividing by ${sq(bar(vr))} = 9 instead of ${bar(vr)} = 3 is the other planted slip.`,
    say: null,
  },
  // pp. 645–646
  {
    topic: 0,
    kind: 'mistake',
    q: `${I('R')} divides ${A}(${va}), ${B}(${vb}) externally in ${ratio('3', '1')}: is it ${fr(`3${vb} − ${va}`, '4')}?`,
    a: `No: external division has a minus on top and ${m} − ${n} below, so ${fr(`3${vb} − ${va}`, '2')}`,
    why: `External division puts ${I('R')} outside the segment, beyond ${A} or ${B}.`,
    say: null,
  },
  // pp. 643, 646
  {
    topic: 0,
    kind: 'shortcut',
    q: 'An option claims to be a set of direction cosines or a unit vector. The fastest check?',
    a: 'Square the three numbers and add: anything other than 1 is out, with no further work',
    why: `(${fr('1', '√5')}, −${fr('2', '√5')}, ${fr('2', '√5')}): the squares add to ${fr('9', '5')}, so it is out.`,
    say: null,
  },

  // ── Topic 02 · Product of Two Vectors ──
  // pp. 649–651, 655
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the dot product?',
    a: `${ADOTB} = ${ABSA}${NB}${ABSB}${NB}${COS(th)} = ${cmp('a', '1')}${cmp('b', '1')} + ${cmp('a', '2')}${cmp('b', '2')} + ${cmp('a', '3')}${cmp('b', '3')}, a scalar; ${COS(th)} = ${fr(ADOTB, `${ABSA}${NB}${ABSB}`)}`,
    why: `${ijk('2', '+ 3', '+')} and ${ijk('', '− 2', '+ 2')}: the dot product is −2, so the angle is obtuse.`,
    say: 'Dot = aligned, Cross = crossed.',
  },
  // pp. 649–650, 655
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the cross product?',
    a: `${AXB} = ${ABSA}${NB}${ABSB}${NB}${SIN(th)}${NB}${nh}, a vector perpendicular to both by the right-hand rule: (${cmp('a', '2')}${cmp('b', '3')} − ${cmp('a', '3')}${cmp('b', '2')})${ii} − (${cmp('a', '1')}${cmp('b', '3')} − ${cmp('a', '3')}${cmp('b', '1')})${jj} + (${cmp('a', '1')}${cmp('b', '2')} − ${cmp('a', '2')}${cmp('b', '1')})${kk}. Order matters: ${AXB} = −${crs(vb, va)}`,
    why: `${crs(ii, jj)} = ${kk}, ${crs(jj, kk)} = ${ii}, ${crs(kk, ii)} = ${jj}; the reverse order flips each sign.`,
    say: 'Dot zero = perpendicular; Cross zero = parallel.',
  },
  // pp. 649, 654–655
  {
    topic: 1,
    kind: 'remember',
    q: `What is the projection of ${va} on ${vb}?`,
    a: `As a number, ${fr(ADOTB, ABSB)}; as a vector, ${fr(ADOTB, sq(ABSB))}${NB}${vb}. Divide by the magnitude of the vector projected onto`,
    why: `${ijk('4', '− 3', '+')} on ${ijk('2', '+', '− 2')}: ${fr('3', '3')} = 1.`,
    say: 'Project? Divide by the one you land ON.',
  },
  // pp. 650, 652, 654–655
  {
    topic: 1,
    kind: 'remember',
    q: 'Which areas does the cross product give?',
    a: `The parallelogram on ${va}, ${vb}: ${bar(AXB)}; the triangle: ${fr('1', '2')}${bar(AXB)}. The unit vectors perpendicular to both: ±${fr(AXB, bar(AXB))}`,
    why: `${O}, ${A}(1, 2, 2), ${B}(2, 1, −2): ${crs(vOA, vOB)} = ${ijk('−6', '+ 6', '− 3')}, of magnitude 9, so the area is ${fr('9', '2')}.`,
    say: null,
  },
  // pp. 650, 652, 655
  {
    topic: 1,
    kind: 'remember',
    q: 'What is Lagrange’s identity?',
    a: `(${ADOTB})<sup>2</sup> + ${sq(bar(AXB))} = ${sq(ABSA)}${sq(ABSB)}, from cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1: one product gives the other with no angle found`,
    why: `${ABSA} = 5, ${ABSB} = 4, ${ADOTB} = 10: ${sq(bar(AXB))} = 400 − 100, so ${bar(AXB)} = 10√3.`,
    say: null,
  },
  // pp. 652, 654
  {
    topic: 1,
    kind: 'mixup',
    q: `${ADOTB} = 0 or ${AXB} = ${ZERO}: which means perpendicular?`,
    a: `For non-zero vectors, ${ADOTB} = 0 means perpendicular; ${AXB} = ${ZERO} means parallel`,
    why: `${la}${ii} + 2${jj} − 3${kk} and ${ijk('3', '−', '+ 2')}: perpendicular at ${la} = ${fr('8', '3')}, parallel for no ${la}, since ${fr('2', '−1')} ≠ ${fr('−3', '2')}.`,
    say: null,
  },
  // pp. 652, 654–655
  {
    topic: 1,
    kind: 'mistake',
    q: `The sign of the ${jj} term in a cross product?`,
    a: `Minus: the expansion along the top row runs +, −, +, and the middle cofactor is the commonest slip`,
    why: `(${ijk('3', '+', '− 2')})${NB}×${NB}(${ijk('', '− 3', '+ 4')}) = ${ijk('−2', '− 14', '− 10')}.`,
    say: 'Middle sign of the determinant is minus.',
  },
  // p. 654
  {
    topic: 1,
    kind: 'shortcut',
    q: `${ADOTB} = ${bar(AXB)}: the angle?`,
    a: `45°: ${COS(th)} = ${SIN(th)}, so tan${NB}${th} = 1`,
    why: `The sign of ${ADOTB} reads the angle at once: positive acute, zero right, negative obtuse.`,
    say: null,
  },

  // ── Topic 03 · Product of Three Vectors & Vector Applications ──
  // pp. 656–657, 659, 663
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the scalar triple product?',
    a: `${ABC} = ${dot(va, `(${crs(vb, vc)})`)}, the determinant of the three rows of components: a scalar, whose absolute value is the volume of the box on ${va}, ${vb}, ${vc}`,
    why: `${ijk('2', '+', '−')}, ${ijk('', '+ 2', '+ 3')}, ${ijk('−', '+', '+ 2')}: −6, so the box has volume 6.`,
    say: 'Box product = volume of the box.',
  },
  // pp. 657–658, 660, 663
  {
    topic: 2,
    kind: 'remember',
    q: 'What do the volumes and the coplanarity test read?',
    a: `Parallelepiped ${bar(ABC)}; tetrahedron ${fr('1', '6')}${bar(ABC)}. ${ABC} = 0 exactly when ${va}, ${vb}, ${vc} are coplanar (linearly dependent); four points are coplanar when ${box(vAB, vAC, vAD)} = 0`,
    why: `${A}(1, 1, 1), ${B}(3, 2, 1), ${C}(2, 4, 3), ${D}(4, 3, 5): the box product is 18, so the tetrahedron has volume 3.`,
    say: 'Flat box = zero = coplanar.',
  },
  // pp. 657–659, 663
  {
    topic: 2,
    kind: 'remember',
    q: `Which rearrangements keep ${ABC}?`,
    a: `Cyclic shifts, ${ABC} = ${box(vb, vc, va)} = ${box(vc, va, vb)}, and trading dot and cross: ${dot(va, `(${crs(vb, vc)})`)} = ${dot(`(${AXB})`, vc)}. One swap flips the sign, a repeated or parallel pair gives 0, and a scalar factor comes out`,
    why: 'A cyclic shift is two row swaps of the determinant, and (−1)<sup>2</sup> = 1.',
    say: null,
  },
  // pp. 657–658, 661, 663
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the vector triple product?',
    a: `${crs(va, `(${crs(vb, vc)})`)} = (${dot(va, vc)})${vb} − (${ADOTB})${vc}, a combination of the two inside the bracket. (${AXB})${NB}×${NB}${vc} = (${dot(va, vc)})${vb} − (${dot(vb, vc)})${va} is different: the product is not associative`,
    why: `The cyclic sum ${crs(va, `(${crs(vb, vc)})`)} + ${crs(vb, `(${crs(vc, va)})`)} + ${crs(vc, `(${AXB})`)} is ${ZERO}.`,
    say: 'BAC minus CAB: middle vector first, first sign plus.',
  },
  // p. 657
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the reciprocal system?',
    a: `For ${ABC} ≠ 0: ${va}′ = ${fr(crs(vb, vc), ABC)}, ${vb}′ = ${fr(crs(vc, va), ABC)}, ${vc}′ = ${fr(AXB, ABC)}. Then ${dot(va, `${va}′`)} = 1 and so on, the mixed dot products are 0, and ${ABC}${box(`${va}′`, `${vb}′`, `${vc}′`)} = 1`,
    why: `Three non-coplanar vectors form a basis: every ${vr} = ${x}${va} + ${y}${vb} + ${z}${vc}, uniquely.`,
    say: null,
  },
  // p. 662
  {
    topic: 2,
    kind: 'mixup',
    q: `${ABC} = 0 for non-zero vectors: collinear?`,
    a: 'Coplanar, which is weaker: collinear vectors are coplanar, but coplanar ones need not be collinear',
    why: 'Mutually perpendicular vectors give the fullest box, not a flat one.',
    say: null,
  },
  // pp. 662–663
  {
    topic: 2,
    kind: 'mistake',
    q: `The tetrahedron on the edges ${ii} + ${jj}, ${jj} + ${kk}, ${kk} + ${ii}?`,
    a: `${fr('1', '3')}: the box product is 2 and a tetrahedron takes ${fr('1', '6')} of it. 2 is the whole box; 1 halves it like a triangle`,
    why: 'A box product may be negative: a volume is its absolute value.',
    say: 'Tetra takes a sixth.',
  },
  // p. 661
  {
    topic: 2,
    kind: 'shortcut',
    q: `${va} + ${vb} + ${vc} = ${ZERO}: what of ${AXB}, ${crs(vb, vc)}, ${crs(vc, va)}?`,
    a: `All equal: cross the equation with ${va} to get ${AXB} = ${crs(vc, va)}, then with ${vb} to get ${crs(vb, vc)} = ${AXB}`,
    why: 'Equal magnitudes say the products of two sides and the sine between them agree: the sine rule.',
    say: null,
  },

  // ── Additional A · Resolution Along Oblique Directions and Angle Bisectors ──
  // pp. 664–666
  {
    topic: 3,
    kind: 'remember',
    q: `How is ${vr} split along a non-zero ${va}?`,
    a: `Parallel part ${fr(dot(vr, va), sq(ABSA))}${NB}${va}; perpendicular part ${vr} − ${fr(dot(vr, va), sq(ABSA))}${NB}${va}. The split is unique`,
    why: `${vr} = ${ijk('2', '+ 3', '+ 6')} along ${ijk('', '+ 2', '+ 2')}: the coefficient is ${fr('20', '9')}, and ${fr('400', '9')} + ${fr('41', '9')} = 49 = ${sq(bar(vr))}.`,
    say: 'Each is a short derivation from the definitions you already have.',
  },
  // pp. 665–666
  {
    topic: 3,
    kind: 'remember',
    q: `The coordinates of ${vr} = ${x}${va} + ${y}${vb} + ${z}${vc}, for ${ABC} ≠ 0?`,
    a: `${x} = ${fr(box(vr, vb, vc), ABC)}, ${y} = ${fr(box(va, vr, vc), ABC)}, ${z} = ${fr(box(va, vb, vr), ABC)}: ${vr} takes the place of the vector whose coefficient is wanted`,
    why: `${ijk('', '+ 2', '+ 3')} = 2(${jj} + ${kk}) + (${kk} + ${ii}): the coefficient of ${ii} + ${jj} is 0.`,
    say: 'This is Cramer’s rule wearing vector clothing.',
  },
  // pp. 665–667
  {
    topic: 3,
    kind: 'mixup',
    q: `The internal or the external bisector of non-parallel ${va}, ${vb}?`,
    a: `Internal along ${fr(va, ABSA)} + ${fr(vb, ABSB)}; external along ${fr(va, ABSA)} − ${fr(vb, ABSB)}, which bisects the supplementary angle. The two are perpendicular`,
    why: `The internal one makes equal angles with ${va} and ${vb}; the external one with ${va} and −${vb}.`,
    say: null,
  },
  // pp. 665–666
  {
    topic: 3,
    kind: 'mistake',
    q: `The parallel part of ${vr} along ${va} = ${ijk('', '+ 2', '+ 2')}: (${dot(vr, va)})${va}?`,
    a: `No: divide by ${sq(ABSA)} = 9. The form (${dot(vr, ah)})${NB}${ah} is the same thing, written with the unit vector`,
    why: `Check: the perpendicular part must have dot product 0 with ${va}.`,
    say: null,
  },
  // pp. 666–667
  {
    topic: 3,
    kind: 'shortcut',
    q: `The bisectors of ${ijk('', '+ 2', '+ 2')} and ${ijk('2', '+', '− 2')}?`,
    a: `Both have magnitude 3, so use ${va} ± ${vb}: internal ${fr('1', '√2')}(${ii} + ${jj}), external ${fr('1', '3√2')}(${ijk('−', '+', '+ 4')})`,
    why: 'Their dot product is 0, as for any two non-parallel vectors.',
    say: null,
  },

  // ── Additional B · Magnitude Algebra and Constraint Problems ──
  // pp. 668–669
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the fundamental expansions?',
    a: `${sq(bar(`${va} ± ${vb}`))} = ${sq(ABSA)} + ${sq(ABSB)} ± 2${ADOTB}, and (${va} + ${vb})${NB}·${NB}(${va} − ${vb}) = ${sq(ABSA)} − ${sq(ABSB)}`,
    why: `${ABSA} = 3, ${ABSB} = 4, ${ADOTB} = 6: ${bar(`${va} + ${vb}`)} = √37, ${bar(`${va} − ${vb}`)} = √13.`,
    say: 'Every magnitude becomes a square.',
  },
  // pp. 668–670
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the parallelogram law and its partner?',
    a: `${sq(bar(`${va} + ${vb}`))} + ${sq(bar(`${va} − ${vb}`))} = 2(${sq(ABSA)} + ${sq(ABSB)}); ${sq(bar(`${va} + ${vb}`))} − ${sq(bar(`${va} − ${vb}`))} = 4${ADOTB}. Equal diagonals: a rectangle; perpendicular diagonals: a rhombus`,
    why: `Unit ${va}, ${vb} with ${bar(`${va} + ${vb}`)} = √3: 3 + ${sq(bar(`${va} − ${vb}`))} = 4, so ${bar(`${va} − ${vb}`)} = 1.`,
    say: 'Recognising which aggregate is determined is the entire marks-earning move.',
  },
  // pp. 669, 671
  {
    topic: 4,
    kind: 'mixup',
    q: 'Cauchy–Schwarz, or the triangle inequality?',
    a: `(${ADOTB})<sup>2</sup> ≤ ${sq(ABSA)}${sq(ABSB)}, equal exactly when the vectors are parallel; ${bar(`${ABSA} − ${ABSB}`)} ≤ ${bar(`${va} + ${vb}`)} ≤ ${ABSA} + ${ABSB}, the upper bound reached exactly when they point the same way`,
    why: `Perpendicular unit ${va}, ${vb} and any unit ${vc}: ${bar(`${va} + ${vb} + ${vc}`)} runs over [√2 − 1, √2 + 1].`,
    say: null,
  },
  // p. 670
  {
    topic: 4,
    kind: 'mistake',
    q: `Unit ${va}, ${vb}, ${vc}, ${va} ⟂ ${vb}, ${bar(`${va} + ${vb} + ${vc}`)} = 1: is the angle between ${vc} and ${va} + ${vb} undetermined?`,
    a: `No, it is 135°: squaring gives ${dot(vc, `(${va} + ${vb})`)} = −1, and ${bar(`${va} + ${vb}`)} = √2, so the cosine is −${fr('1', '√2')}`,
    why: `The separate angles with ${va} and with ${vb} are not fixed, but the aggregate is.`,
    say: null,
  },
  // pp. 670–671
  {
    topic: 4,
    kind: 'shortcut',
    q: `The least value of ${sq(bar(`${vx} − ${va}`))} + ${sq(bar(`${vx} − ${vb}`))}?`,
    a: `${fr(sq(bar(`${va} − ${vb}`)), '2')}, at the midpoint ${vx} = ${fr(`${va} + ${vb}`, '2')}: completing the square leaves twice the squared distance to the midpoint plus that constant`,
    why: `${ABSA} = 2, ${ABSB} = 4, angle 60°: ${sq(bar(`${va} − ${vb}`))} = 12, so the least value is 6.`,
    say: null,
  },

  // ── Additional C · Nested Cross Products and Vector Equations ──
  // pp. 671–672, 674
  {
    topic: 5,
    kind: 'remember',
    q: `What is (${AXB})${NB}×${NB}(${crs(vc, vd)})?`,
    a: `${box(va, vb, vd)}${NB}${vc}${NB}−${NB}${ABC}${NB}${vd}, by BAC–CAB on ${vp} = ${AXB}; equally ${box(va, vc, vd)}${NB}${vb}${NB}−${NB}${box(vb, vc, vd)}${NB}${va}. It points along the line where the plane of ${va}, ${vb} meets the plane of ${vc}, ${vd}`,
    why: `(${crs(ii, jj)})${NB}×${NB}(${crs(jj, kk)}) = ${crs(kk, ii)} = ${jj}, and ${box(ii, jj, kk)}${jj} − ${box(ii, jj, jj)}${kk} = ${jj}.`,
    say: 'Both skills are two applications of what you already own.',
  },
  // pp. 672–673
  {
    topic: 5,
    kind: 'remember',
    q: `How is ${crs(va, vx)} = ${vb} solved?`,
    a: `Solutions exist only when ${ADOTB} = 0; then, for ${va} ≠ ${ZERO}, ${vx} = ${fr(crs(vb, va), sq(ABSA))} + ${la}${va} for any real ${la}: a whole line of solutions`,
    why: `${va} = ${ijk('', '+', '+')}, ${vb} = ${ii} − ${jj}: ${vx} = ${fr('1', '3')}(${ijk('−', '−', '+ 2')}) + ${la}(${ijk('', '+', '+')}).`,
    say: 'The square erases the orientation of the original triad.',
  },
  // pp. 673–674
  {
    topic: 5,
    kind: 'mixup',
    q: `[${AXB}, ${crs(vb, vc)}, ${crs(vc, va)}]: ${ABC}, or its square?`,
    a: `Its square, ${ABC}<sup>2</sup>: so the crossed triad of a non-coplanar triad is non-coplanar, and its box product is never negative`,
    why: 'Mutually perpendicular unit vectors give exactly 1, whatever their handedness.',
    say: null,
  },
  // pp. 672–673
  {
    topic: 5,
    kind: 'mistake',
    q: `${crs(va, vx)} = ${vb} with ${ADOTB} ≠ 0?`,
    a: `No solution: the left side is perpendicular to ${va}, so dotting with ${va} forces ${ADOTB} = 0. And when ${ADOTB} = 0 the answer is a line, not one vector: keep the ${la}${va}`,
    why: `${crs(va, vh)} = ${ZERO} forces ${vh} to be parallel to ${va}.`,
    say: null,
  },
  // p. 674
  {
    topic: 5,
    kind: 'shortcut',
    q: `(${va} − ${vb})${NB}×${NB}(${va} + ${vb})?`,
    a: `2${AXB}: ${crs(va, va)} and ${crs(vb, vb)} vanish, and −${crs(vb, va)} = ${AXB}. The parallelogram on the diagonals has twice the area`,
    why: `Likewise (${AXB})${NB}×${NB}(${crs(vc, va)}) = −${ABC}${NB}${va}, since ${box(va, vb, va)} = 0.`,
    say: null,
  },

  // ── Additional D · Position-Vector Geometry of the Triangle ──
  // pp. 675–677
  {
    topic: 6,
    kind: 'remember',
    q: `What is the incenter of triangle ${I('ABC')}?`,
    a: `${fr(`${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} + ${b} + ${c}`)}, with ${a}, ${b}, ${c} the sides opposite ${A}, ${B}, ${C}: the side lengths are the weights`,
    why: `${A}(0, 0), ${B}(4, 0), ${C}(0, 3): sides 5, 3, 4, so ${fr('(12, 12)', '12')} = (1, 1).`,
    say: 'All of it is the section formula and the cross-product area formula, chained.',
  },
  // pp. 676–677
  {
    topic: 6,
    kind: 'remember',
    q: 'With the circumcenter at the origin, where is the orthocenter?',
    a: `At ${vh} = ${va} + ${vb} + ${vc}, since (${vh} − ${va})${NB}·${NB}(${vb} − ${vc}) = ${sq(ABSB)} − ${sq(bar(vc))} = 0. The centroid is ${fr(vh, '3')}, so ${O}, ${G}, ${H} are collinear with ${ratio(I('OG'), I('GH'))} = ${ratio('1', '2')}`,
    why: `${A}(5, 0), ${B}(0, 5), ${C}(−3, −4) on ${sq(x)} + ${sq(y)} = 25: ${H} = (2, 1).`,
    say: 'Chain two section formulas.',
  },
  // pp. 675–676
  {
    topic: 6,
    kind: 'mixup',
    q: 'Incenter weights: the sides opposite the vertices, or adjacent to them?',
    a: `Opposite: ${A} carries ${a} = ${bar(V('BC'))}. The excentre opposite ${A} flips the sign of ${a}: ${fr(`−${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `−${a} + ${b} + ${c}`)}`,
    why: `The bisector from ${A} meets ${I('BC')} in the ratio ${ratio(c, b)}.`,
    say: null,
  },
  // p. 677
  {
    topic: 6,
    kind: 'mistake',
    q: `${vp} = ${fr(`${l}${NB}${va} + ${m}${NB}${vb} + ${n}${NB}${vc}`, `${l} + ${m} + ${n}`)}: is ${fr(AR('PBC'), AR('ABC'))} = ${fr(l, `${l} + ${m} + ${n}`)}?`,
    a: `In general it is ${fr(bar(l), bar(`${l} + ${m} + ${n}`))}; the bars can be dropped when ${l}, ${m}, ${n} are all positive, with ${P} inside the triangle`,
    why: 'For a point inside, the three ratios add up to 1.',
    say: null,
  },
  // pp. 677–678
  {
    topic: 6,
    kind: 'shortcut',
    q: `${P} on the median ${I('AD')} with ${ratio(I('AP'), I('PD'))} = ${ratio('3', '1')}: ${fr(AR('PBC'), AR('ABC'))}?`,
    a: `${fr('1', '4')}: ${vp} = ${fr(`2${va} + 3${vb} + 3${vc}`, '8')}, and the weight of ${va} is 2 of 8`,
    why: `In general ${ratio(m, '1')} gives ${fr('1', `${m} + 1`)}; ${m} = 2, the centroid, gives ${fr('1', '3')}.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 680
  {
    topic: 7,
    kind: 'shortcut',
    q: `A vector of magnitude 12 perpendicular to ${ijk('2', '+', '− 2')} and ${ijk('', '+ 2', '+ 2')}?`,
    a: `±(${ijk('8', '− 8', '+ 4')}): the cross product ${ijk('6', '− 6', '+ 3')} has magnitude 9, so ${la} = ±${fr('4', '3')}`,
    why: 'Expect a ± pair.',
    say: 'One 3 × 3 determinant decides everything.',
  },
  // pp. 680–681
  {
    topic: 7,
    kind: 'remember',
    q: 'The projection of the segment from (1, −1, 3) to (2, −4, 11) on the line from (−1, 2, 3) to (3, −2, 10)?',
    a: `8: ${vPQ} = ${ijk('', '− 3', '+ 8')}, ${vRS} = ${ijk('4', '− 4', '+ 7')}, ${dot(vPQ, vRS)} = 72 and ${bar(vRS)} = 9`,
    why: 'Divide by the magnitude of the vector you land on.',
    say: 'Mass points gives the ratio in seconds.',
  },
  // pp. 680–681
  {
    topic: 7,
    kind: 'shortcut',
    q: `Three non-coplanar vectors are chosen from the eight (±1, ±1, ±1) in 2<sup>${I('p')}</sup> ways. Find ${I('p')}`,
    a: `5: the eight are the four body diagonals of a cube and their negatives; choose 3 of the 4 lines and a sign on each, 4 × 2<sup>3</sup> = 32`,
    why: 'Two vectors from one diagonal line are dependent; three from different lines never are.',
    say: null,
  },
  // pp. 680, 682
  {
    topic: 7,
    kind: 'mistake',
    q: `${la}${ii} + 2${jj} − ${kk} parallel to 3${ii} − ${jj} + ${la}${kk}: which ${la}?`,
    a: `None: ${fr(la, '3')} = −2 needs ${la} = −6, but −${fr('1', la)} = −2 needs ${la} = ${fr('1', '2')}`,
    why: `Perpendicular is a different condition: 2${la} − 2 = 0 gives ${la} = 1.`,
    say: null,
  },
  // pp. 682, 684
  {
    topic: 7,
    kind: 'mistake',
    q: `For which ${c} do −${x}${ii} + 2${jj} + ${c}${kk} and ${x}${ii} + ${c}${x}${jj} + ${kk} make an obtuse angle for every real ${x}?`,
    a: `${c} in (−1, 0): the dot product −${sq(x)} + 2${c}${x} + ${c} must be negative for all ${x}, so its maximum ${sq(c)} + ${c} < 0, endpoints excluded`,
    why: `“Obtuse for all ${x}” needs both conditions: a downward parabola and a negative discriminant.`,
    say: null,
  },
];
