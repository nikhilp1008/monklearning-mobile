/**
 * KEY POINTS for Mathematics Class 12, Chapter 3 (Matrices).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topic 00 has three Remember points and one of each other kind; Topics
 * 01–04 each have four or five Remember points, at least one of each other
 * kind and one Exam shortcut (Topic 01 carries two shortcuts: conformability
 * and powers); Additional topics A–E have two Remember points and one of
 * each other kind; Additional P, the past-paper analysis, has five points
 * (three archetypes as Remember and Exam shortcuts, two traps): 69 points in
 * all. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topic 00 is 0 (the chapter's Subtopic 00, with the book's
 * number); Topics 01–04 are 1–4; Additional topics A–E are 5–9 (Addenda
 * A–E) and Additional P is 10 (Addendum P, What JEE Actually Asks). No point
 * refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, properties, derivations and its Cheat sheet. Common mistakes:
 * its Common student pitfalls and its MCQ traps (Topics 00 and 04, A–E, which
 * print none or few: the slips their worked examples and practice answers
 * warn about; P: its traps). Exam shortcuts: its Pro-Tips, Speed Traps and
 * worked examples. `say`: the book's own memory aids, word for word without
 * their quotation marks and the gloss after them (": conformability + result
 * order in four words", …): Topic 00 prints one, Topic 01 three, Topic 02
 * four and Topic 03 three; ten are here, seven of them memory lines. The
 * eleventh, Topic 01's "Rows are Roman, columns are Catholic", is left out:
 * it is listed for the founder as a brand call (decision 19), and "Row before
 * column" says the same. Topic 04 prints only the chapter's summary line of
 * the earlier aids, so it takes two of its own sentences ("Shining a shadow
 * twice gives the same shadow.", cut from "Think of a projection: …", and
 * "Applying it twice undoes it, like a mirror flip."). A–E and P print no
 * aids, so each has two of the book's own one-line sentences (A: "Compute
 * the powers before trusting any formula." and "Verify directly, never
 * assert."; B: "The inverse must strike from the side A occupies." and "The
 * entire skill is one rule applied with discipline."; C: "Once you know how
 * many cells are free, the count is one exponentiation." and "Impose the
 * constraint on the coupled cells first.", cut and capitalised; D: "For
 * square matrices a one-sided inverse is the inverse." and "Impose the
 * defining equation cell by cell, let the constraints cascade.", from its
 * bracket, capitalised; E: "Finite sums commute with reordering." and "Equal
 * traces, different matrices.", cut; P: "Before multiplying anything, test
 * A².", cut, and "Never multiply the matrix out: rotate."): twenty-four in
 * all, twenty-one of them memory lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: "unitriangular matrices follow a clean linear pattern" (only the
 * 2 × 2 ones: the corner of a 3 × 3 unitriangular power grows like
 * n(n + 1)/2, review rm123a R3). The Exam relevance claims, the CBSE, NCERT
 * and syllabus remarks (among them the row-operation "4-mark question",
 * rm123a R4), the past-paper distribution, the forward references to the
 * Determinants chapter and the years inside worked examples (the points use
 * the book's method with general exponents, or its other values) are left
 * out.
 *
 * Markup is the chapter's own: <i> for every matrix, entry and scalar
 * letter, <sup>T</sup> for a transpose, <sup>−1</sup> for an inverse,
 * <sub> for indices, tr upright, − (U+2212) for minus. Short matrices are
 * drawn with <bmat> (rows <r>, cells <c>), as the chapter draws them. Every
 * fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a
 * fraction inside a numerator; no em dashes; and always a space after "<",
 * so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const bn = (t: string, b: string) => `<binom><num>${t}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A matrix in square brackets: one array per row, one string per cell. */
const bm = (...rows: string[][]) => `<bmat>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</bmat>`;
const NB = ' ';
const A = I('A');
const B = I('B');
const C = I('C');
const M = I('M');
const N = I('N');
const O = I('O');
const P = I('P');
const Q = I('Q');
const R = I('R');
const X = I('X');
const Y = I('Y');
const Z = I('Z');
const ID = I('I');
const a = I('a');
const b = I('b');
const d = I('d');
const f = I('f');
const i = I('i');
const j = I('j');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const r = I('r');
const x = I('x');
const y = I('y');
const th = I('θ');
const al = I('α');
const lam = I('λ');
const AB = I('AB');
const BA = I('BA');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const T = (s: string) => sup(s, 'T');
const inv = (s: string) => sup(s, '−1');
const AT = T(A);
const BT = T(B);
const AI = inv(A);
const BI = inv(B);
const aij = sb(a, I('ij'));
const aji = sb(a, I('ji'));
const aii = sb(a, I('ii'));
const bij = sb(b, I('ij'));
const In = sb(ID, n);
const HALF = fr('1', '2');
const SYMN = fr(`${n}(${n} + 1)`, '2');
const SKEWN = fr(`${n}(${n} − 1)`, '2');
const mxn = `${m} × ${n}`;
const Rr = (s: string) => sb(R, s);
const tr = (s: string) => `tr(${s})`;
const U = bm(['1', '1'], ['0', '1']);

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Foundations & Representation ──
  // pp. 187, 189
  {
    topic: 0,
    kind: 'remember',
    q: `How do you build ${A} = [${aij}] from a rule ${aij} = ${f}(${i}, ${j})?`,
    a: `Walk the grid cell by cell: the entry in row ${i}, column ${j} is ${f}(${i}, ${j}). ${i} always indexes the row and ${j} the column: swap them and every entry lands in the wrong place`,
    why: `${aij} = 2${i} + 3${j} for a 2 × 3 matrix gives ${bm(['5', '8', '11'], ['7', '10', '13'])}.`,
    say: `${i} before ${j}: row before column.`,
  },
  // p. 187
  {
    topic: 0,
    kind: 'remember',
    q: `How many orders can a matrix with exactly ${N} elements have?`,
    a: `One for each factor pair ${m}${n} = ${N}: the number of orders is the number of divisors of ${N}. If ${N} is prime, only two: 1 × ${N} and ${N} × 1`,
    why: `18 = 2 × 3<sup>2</sup> has (1 + 1)(2 + 1) = 6 divisors, so 6 orders; 7 has only 2.`,
    say: null,
  },
  // p. 187
  {
    topic: 0,
    kind: 'remember',
    q: `How many ${mxn} matrices have entries chosen from a set of ${k} values?`,
    a: `${k}<sup>${I('mn')}</sup>: each of the ${I('mn')} cells is filled independently in ${k} ways`,
    why: `3 × 3 matrices with entries 0 or 1: 2<sup>9</sup> = 512; 2 × 2 with entries from {1, 2, 3}: 3<sup>4</sup> = 81.`,
    say: null,
  },
  // pp. 186, 188
  {
    topic: 0,
    kind: 'mixup',
    q: 'Is a 2 × 3 matrix of the same order as a 3 × 2 matrix?',
    a: 'No: the order is an ordered pair, rows first. Both have 6 elements, but they are different matrices, and both count when you list possible orders',
    why: 'A matrix with 5 elements has 2 possible orders, 1 × 5 and 5 × 1, not 1.',
    say: null,
  },
  // pp. 188–189
  {
    topic: 0,
    kind: 'mistake',
    q: 'How many 3 × 3 matrices have every entry 0 or 2?',
    a: `512 = 2<sup>9</sup>: the base is the number of choices per cell, the exponent the number of cells. 27 = 3<sup>3</sup> uses the order 3 as both; 18 = 2 × 9 multiplies instead of raising to the power; 81 = 3<sup>4</sup> uses the wrong base or the 2 × 2 count`,
    why: `The listed slips: swapping ${i} and ${j}, forgetting that ${mxn} and ${n} × ${m} differ, miscounting divisors, and the wrong base or exponent in ${k}<sup>${I('mn')}</sup>.`,
    say: null,
  },
  // pp. 188–189
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you count the possible orders fast?',
    a: 'Count the divisors of the number of elements: factor it into primes and multiply the (exponent + 1)s',
    why: '24 = 2<sup>3</sup> × 3 gives (3 + 1)(1 + 1) = 8 orders, from 1 × 24 to 24 × 1; 13 gives 2.',
    say: null,
  },

  // ── Topic 01 · Matrix Algebra & Operations ──
  // pp. 192–193, 198
  {
    topic: 1,
    kind: 'remember',
    q: 'When is each operation defined, and what is the order of the result?',
    a: `${A} + ${B}: same order only, done entrywise, result ${mxn}. ${I('kA')}: always, every entry times ${k}. ${AB}: when cols(${A}) = rows(${B}); with ${A} of order ${mxn} and ${B} of order ${n} × ${p}, ${AB} is ${m} × ${p} and (${AB})<sub>${I('ij')}</sub> = ∑<sub>${r}</sub>${NB}${sb(a, I('ir'))}${sb(b, I('rj'))}: row ${i} of ${A} against column ${j} of ${B}`,
    why: 'Different orders make addition undefined, not zero.',
    say: 'Inner match, outer survive.',
  },
  // pp. 193–194
  {
    topic: 1,
    kind: 'remember',
    q: 'Why is matrix multiplication not commutative?',
    a: `For two reasons. Dimensional: with ${A} of order 2 × 3 and ${B} of order 3 × 2, ${AB} is 2 × 2 but ${BA} is 3 × 3. Entry-level, even for square matrices: ${A} = ${U}, ${B} = ${bm(['1', '0'], ['1', '1'])} give ${AB} = ${bm(['2', '1'], ['1', '1'])} but ${BA} = ${bm(['1', '1'], ['1', '2'])}`,
    why: `Multiplication encodes chaining: first apply ${B}, then ${A}. The shared middle index is why the inner dimensions must agree.`,
    say: 'Matrices don’t swap.',
  },
  // pp. 192–194
  {
    topic: 1,
    kind: 'remember',
    q: 'Which laws of ordinary algebra still hold for matrices, and which fail?',
    a: `Hold: ${A}(${B}${C}) = (${AB})${C}, ${A}(${B} + ${C}) = ${AB} + ${A}${C}, (${A} + ${B})${C} = ${A}${C} + ${B}${C}, ${sb(ID, m)}${A} = ${A} = ${A}${In}. Fail: ${AB} = ${BA}; “${AB} = ${O} ⇒ ${A} = ${O} or ${B} = ${O}”; and cancellation, ${AB} = ${A}${C} ⇒ ${B} = ${C}`,
    why: `${bm(['1', '0'], ['0', '0'])}${bm(['0', '0'], ['0', '1'])} = ${O}, with neither factor zero.`,
    say: null,
  },
  // pp. 192–193
  {
    topic: 1,
    kind: 'remember',
    q: 'When are two matrices equal, and what does a matrix equation turn into?',
    a: `${A} = ${B} iff they have the same order and ${aij} = ${bij} for every ${i}, ${j}. So one matrix equation is a bundle of scalar equations: check both sides have the same order, equate corresponding entries, solve`,
    why: `2${bm([a, b], [I('c'), d])} + 3${bm(['1', '−1'], ['0', '2'])} = ${bm(['5', '1'], ['6', '16'])} gives ${a} = 1, ${b} = 2, ${I('c')} = 3, ${d} = 5.`,
    say: null,
  },
  // p. 192
  {
    topic: 1,
    kind: 'remember',
    q: 'What are a diagonal, a scalar and an identity matrix, and the trace?',
    a: `Diagonal: square, every off-diagonal entry zero. Scalar: diagonal with all diagonal entries equal. Identity ${In}: scalar with every diagonal entry 1. Triangular: zeros below (upper) or above (lower) the diagonal. Trace: ${tr(A)} = ∑${NB}${aii}, the sum of the diagonal entries of a square matrix`,
    why: `A row matrix is 1 × ${n}, a column matrix ${m} × 1; the null matrix ${O} may have any order.`,
    say: null,
  },
  // pp. 197–198
  {
    topic: 1,
    kind: 'mixup',
    q: `For square ${A}, ${B} of the same order, is (${A} + ${B})<sup>2</sup> = ${sq(A)} + 2${AB} + ${sq(B)}?`,
    a: `No: (${A} + ${B})<sup>2</sup> = ${sq(A)} + ${AB} + ${BA} + ${sq(B)}, with ${AB} and ${BA} kept separate. 2${AB} assumes ${AB} = ${BA}; likewise (${AB})<sup>2</sup> = ${I('ABAB')}, which is ${sq(A)}${sq(B)} only when they commute`,
    why: `The same slip corrupts (${A} − ${B})(${A} + ${B}).`,
    say: null,
  },
  // pp. 197–198
  {
    topic: 1,
    kind: 'mistake',
    q: `Can ${bm(['1', '2'], ['2', '4'])}${B} = ${O} with ${B} ≠ ${O}?`,
    a: `Yes: any ${B} whose columns are multiples of ${bm(['−2'], ['1'])}, such as ${bm(['−2', '−4'], ['1', '2'])}. “A product is zero, so a factor is zero” is false for matrices: never cancel a matrix out of an equation`,
    why: `Each column ${bm([x], [y])} of ${B} must satisfy ${x} + 2${y} = 0. The other listed slips: multiplying element by element, assuming ${AB} = ${BA}, and checking outer instead of inner dimensions.`,
    say: null,
  },
  // pp. 195, 198
  {
    topic: 1,
    kind: 'shortcut',
    q: `${A} is 3 × 2, ${B} is 2 × 4, ${C} is 4 × 3: which of ${AB}, ${BA}, ${B}${C}, (${AB})${C} exist?`,
    a: `Chain the orders and check only the inner pair: ${AB} is 3 × 4; ${BA} is not defined (4 ≠ 3); ${B}${C} is 2 × 3; (${AB})${C} and ${A}(${B}${C}) are both 3 × 3. Never compute entries to settle conformability`,
    why: `For ${A} of order 3 × 4 and ${B} of order 4 × 2, ${AB} is 3 × 2: “not defined” comes from checking the outer numbers.`,
    say: null,
  },
  // pp. 196–198
  {
    topic: 1,
    kind: 'shortcut',
    q: `${A} = ${bm(['2', '−1'], ['3', '−2'])}: how do you sum many powers of ${A}?`,
    a: `Square it first: ${sq(A)} = ${ID}, so every odd power is ${A} and every even power is ${ID}. The sum is (number of odd exponents)${NB}${A} + (number of even exponents)${NB}${ID}. Always test ${sq(A)} = ${ID} or ${sq(A)} = ${A} before multiplying`,
    why: `Diagonal powers raise each entry: ${bm(['3', '0'], ['0', '2'])}<sup>5</sup> = ${bm(['243', '0'], ['0', '32'])}. Only the 2 × 2 unitriangular pattern is linear: ${U}<sup>${n}</sup> = ${bm(['1', n], ['0', '1'])}.`,
    say: null,
  },

  // ── Topic 02 · Symmetric & Skew-Symmetric Matrices ──
  // pp. 202, 207
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the transpose laws?',
    a: `${T(`(${AT})`)} = ${A}, ${T(`(${A} + ${B})`)} = ${AT} + ${BT}, ${T(`(${I('kA')})`)} = ${k}${AT}, ${T(`(${AB})`)} = ${BT}${AT}, ${T(ID)} = ${ID}. The transpose reverses the order of a product`,
    why: `Writing ${AT}${BT} for ${T(`(${AB})`)} is the silent killer in proofs.`,
    say: 'Transpose a product, turn it around.',
  },
  // pp. 201–202
  {
    topic: 2,
    kind: 'remember',
    q: 'What makes a matrix symmetric or skew-symmetric, and what does skew force on the diagonal?',
    a: `Symmetric: ${AT} = ${A}, i.e. ${aij} = ${aji}. Skew-symmetric: ${AT} = −${A}, i.e. ${aij} = −${aji}; putting ${i} = ${j} gives ${aii} = −${aii}, so every diagonal entry is 0. Both are defined only for square matrices`,
    why: 'The converse fails: a zero diagonal alone does not make a matrix skew-symmetric.',
    say: 'Skew’s diagonal is always asleep.',
  },
  // pp. 202–203
  {
    topic: 2,
    kind: 'remember',
    q: 'How is a square matrix split into symmetric and skew-symmetric parts, and why is the split unique?',
    a: `${A} = ${P} + ${Q} with ${P} = ${HALF}(${A} + ${AT}) symmetric and ${Q} = ${HALF}(${A} − ${AT}) skew-symmetric. If ${A} = ${sb(P, '1')} + ${sb(Q, '1')} is any such split, transposing gives ${AT} = ${sb(P, '1')} − ${sb(Q, '1')}; adding and subtracting forces ${sb(P, '1')} = ${P} and ${sb(Q, '1')} = ${Q}`,
    why: `${bm(['1', '5'], ['−3', '2'])} = ${bm(['1', '1'], ['1', '2'])} + ${bm(['0', '4'], ['−4', '0'])}.`,
    say: 'Symmetric adds, skew subtracts.',
  },
  // p. 202
  {
    topic: 2,
    kind: 'remember',
    q: 'Which sums, products and powers are symmetric, and which skew?',
    a: `For square ${A}: ${A} + ${AT} symmetric, ${A} − ${AT} skew. For any ${A}: ${A}${AT} and ${AT}${A} symmetric. Powers of a symmetric matrix are symmetric; of a skew one, even powers symmetric, odd powers skew. ${A}, ${B} symmetric: ${AB} + ${BA} symmetric, ${AB} − ${BA} skew, ${AB} symmetric iff ${AB} = ${BA}. ${A}, ${B} skew: ${AB} − ${BA} skew, ${AB} + ${BA} symmetric`,
    why: `The only matrix both symmetric and skew-symmetric is ${O}: ${AT} = ${A} and ${AT} = −${A} give 2${A} = ${O}.`,
    say: 'Both symmetric and skew → null. No exceptions.',
  },
  // pp. 202–203
  {
    topic: 2,
    kind: 'remember',
    q: `How many entries of an order-${n} symmetric or skew-symmetric matrix can be chosen freely?`,
    a: `Symmetric: ${SYMN}, the ${n} diagonal entries plus the ${SKEWN} above the diagonal (everything below is a mirror copy). Skew-symmetric: ${SKEWN}, since its diagonal is fixed at 0`,
    why: 'Order 4: a symmetric matrix has at most 10 distinct entries, not 16 (all cells) or 6 (above the diagonal only).',
    say: null,
  },
  // pp. 202, 206
  {
    topic: 2,
    kind: 'mixup',
    q: `${A} + ${AT} and ${A} − ${AT}: which is symmetric, which skew?`,
    a: `${A} + ${AT} is symmetric; ${A} − ${AT} is always skew-symmetric, since ${T(`(${A} − ${AT})`)} = ${AT} − ${A}. ${A} − ${AT} is the null matrix only when ${A} is already symmetric`,
    why: `So ${P} carries the plus and ${Q} the minus, both over 2.`,
    say: null,
  },
  // p. 206
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the product of two symmetric matrices symmetric?',
    a: `Only when they commute: ${T(`(${AB})`)} = ${BT}${AT} = ${BA}, so ${AB} is symmetric iff ${AB} = ${BA}. In general use ${AB} + ${BA} (symmetric) and ${AB} − ${BA} (skew)`,
    why: `The other listed slips: forgetting the zero diagonal of a skew matrix, dropping the reversal in ${T(`(${AB})`)}, and losing the ${HALF} or swapping ${P} and ${Q}; verify ${P} + ${Q} = ${A} and that ${Q}’s diagonal is all zero.`,
    say: null,
  },
  // pp. 204–205, 207
  {
    topic: 2,
    kind: 'shortcut',
    q: `${A}, ${B} symmetric: are ${AB} − ${BA} and ${I('ABA')} symmetric or skew, without entries?`,
    a: `Flip: transpose, reverse the order, substitute ${AT} = ${A}, ${BT} = ${B}. ${T(`(${AB} − ${BA})`)} = ${BA} − ${AB}: skew. ${T(`(${I('ABA')})`)} = ${I('ABA')}: symmetric. Recovering the expression means symmetric, its negative means skew`,
    why: `Every 2 × 2 skew matrix squares to a scalar matrix: ${bm(['0', a], [`−${a}`, '0'])}<sup>2</sup> = −${sq(a)}${ID}, so ${sq(A)} = −9${ID} gives ${a} = ±3.`,
    say: null,
  },

  // ── Topic 03 · Invertible Matrices & Row Operations ──
  // pp. 208, 210, 215
  {
    topic: 3,
    kind: 'remember',
    q: 'When is a matrix invertible, and why is its inverse unique?',
    a: `A square ${A} of order ${n} is invertible if some ${B} of order ${n} has ${AB} = ${BA} = ${In}; then ${B} = ${AI}. If ${B} and ${C} both work, ${B} = ${B}${ID} = ${B}(${A}${C}) = (${BA})${C} = ${ID}${C} = ${C}`,
    why: 'Only square matrices can be invertible, and, as 0 has no reciprocal, some non-zero matrices have no inverse.',
    say: null,
  },
  // pp. 209–210, 213
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the three elementary row operations?',
    a: `${Rr(i)} ↔ ${Rr(j)} (swap two rows); ${Rr(i)} → ${k}${Rr(i)} with ${k} ≠ 0 (scale a row); ${Rr(i)} → ${Rr(i)} + ${k}${Rr(j)} (add a multiple of another row). Column operations are the mirror set`,
    why: `${sb(R, '2')} → 0 · ${sb(R, '2')} is not one: it wipes the row out and cannot be undone.`,
    say: null,
  },
  // pp. 209–211, 215
  {
    topic: 3,
    kind: 'remember',
    q: 'How do row operations give the inverse, and why does it work?',
    a: `Write [${A} ∣ ${ID}] and reduce the left block to ${ID}, applying each operation to both blocks: you reach [${ID} ∣ ${AI}]. Each operation is premultiplication by an elementary matrix ${I('E')}, so ${sb(I('E'), k)} ⋯ ${sb(I('E'), '1')}${A} = ${ID} makes ${sb(I('E'), k)} ⋯ ${sb(I('E'), '1')} = ${AI}, and the same chain turns the ${ID} on the right into ${AI}. A zero row in the left block means no inverse`,
    why: `Use rows throughout (${A} = ${ID}${A}) or columns throughout (${A} = ${A}${ID}), never both in one computation.`,
    say: `Whatever I do to ${A}, I do to ${ID}.`,
  },
  // pp. 210, 213, 215
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the structural properties of the inverse?',
    a: `${inv(`(${AI})`)} = ${A}; ${inv(`(${AB})`)} = ${BI}${AI}, and in general the inverse of a product is the product of the inverses in reverse order; ${inv(`(${AT})`)} = ${T(`(${AI})`)}; ${inv(`(${sup(A, k)})`)} = ${sup(`(${AI})`, k)}`,
    why: `(${AB})(${BI}${AI}) = ${A}(${B}${BI})${AI} = ${A}${AI} = ${ID}. So if ${AI} = ${bm(['2', '−1'], ['−3', '2'])}, then ${A} = ${bm(['2', '1'], ['3', '2'])}.`,
    say: 'Inverse flips the order.',
  },
  // pp. 212–213, 215
  {
    topic: 3,
    kind: 'remember',
    q: `${A} satisfies ${sup(A, '3')} − 3${A} + 2${ID} = ${O}: how do you get ${AI} with no row reduction?`,
    a: `Factor out ${A}: ${A}(${sq(A)} − 3${ID}) = −2${ID}, so ${A}${NB}·${NB}${HALF}(3${ID} − ${sq(A)}) = ${ID} and ${AI} = ${HALF}(3${ID} − ${sq(A)}). For square matrices ${AB} = ${ID} already forces ${B} = ${AI}. It works whenever the polynomial has a non-zero constant term`,
    why: `${sq(A)} − 4${A} + 3${ID} = ${O} gives ${AI} = ${fr('1', '3')}(4${ID} − ${A}).`,
    say: null,
  },
  // p. 213
  {
    topic: 3,
    kind: 'mixup',
    q: `A row of zeros appears in the left block: is ${AI} = ${O}?`,
    a: `No: ${A} has no inverse at all; it is singular. ${O} is the inverse of nothing (${A}${O} = ${O} ≠ ${ID}), and switching to column operations will not rescue a singular matrix`,
    why: 'A zero row means one row was a combination of the others: the matrix collapses inputs, so no undo exists.',
    say: null,
  },
  // pp. 213–214
  {
    topic: 3,
    kind: 'mistake',
    q: `For invertible ${A}, ${B} of the same order, is ${inv(`(${AB})`)} = ${AI}${BI}?`,
    a: `No: ${BI}${AI}, reversed. ${AI}${BI} is the commonest error. The other listed slips: operating on one block only, mixing row and column operations, and scaling a row by 0`,
    why: `Every row operation must hit both blocks, or the equation ${A} = ${ID}${A} breaks.`,
    say: null,
  },
  // pp. 212, 214
  {
    topic: 3,
    kind: 'shortcut',
    q: `Is ${bm(['1', '−3'], ['−2', '6'])} invertible?`,
    a: `No, at a glance: (−2, 6) = −2(1, −3). If one row is a multiple of another (or a sum of others), the matrix is singular: stop before reducing`,
    why: `Reduction confirms it: ${sb(R, '2')} → ${sb(R, '2')} + 2${sb(R, '1')} leaves a zero row. And always check an inverse with ${A}${AI} = ${ID}: one multiplication catches sign slips.`,
    say: 'Zero row, no go.',
  },

  // ── Topic 04 · Special Square Matrices & Chapter Synthesis ──
  // p. 216
  {
    topic: 4,
    kind: 'remember',
    q: 'What are idempotent, involutory, nilpotent and orthogonal matrices?',
    a: `Idempotent: ${sq(A)} = ${A}, so ${sup(A, n)} = ${A} for every ${n} ≥ 1. Involutory: ${sq(A)} = ${ID}, so ${AI} = ${A}. Nilpotent: ${sup(A, k)} = ${O} for some positive integer ${k}; the smallest such ${k} is the index. Orthogonal: ${A}${AT} = ${AT}${A} = ${ID}, so ${AI} = ${AT}`,
    why: 'An orthogonal matrix has mutually perpendicular unit rows (and columns): rotations are the classic example.',
    say: 'Shining a shadow twice gives the same shadow.',
  },
  // pp. 216, 218
  {
    topic: 4,
    kind: 'remember',
    q: 'What follows from each of the four types?',
    a: `Idempotent ${A}: ${ID} − ${A} is idempotent too, and the only invertible idempotent matrix is ${ID}. Involutory: even powers ${ID}, odd powers ${A}. Nilpotent: never invertible. Orthogonal: the inverse is free, it is the transpose`,
    why: `An involutory ${A} gives ${sq(A)} + ${sup(A, '4')} + ⋯ to ${k} even powers = ${k}${ID}.`,
    say: 'Applying it twice undoes it, like a mirror flip.',
  },
  // p. 216
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the trace rules?',
    a: `For square ${A}, ${B} of the same order and scalar ${k}: ${tr(`${A} + ${B}`)} = ${tr(A)} + ${tr(B)}, ${tr(I('kA'))} = ${k}${NB}${tr(A)}, ${tr(AT)} = ${tr(A)}, ${tr(AB)} = ${tr(BA)}`,
    why: `A 3 × 3 matrix with ${tr(A)} = 6: ${tr(`2${AT} − 3${ID}`)} = 12 − 9 = 3.`,
    say: null,
  },
  // pp. 217–218
  {
    topic: 4,
    kind: 'remember',
    q: `How do you evaluate a polynomial at a matrix, and what does ${f}(${A}) = ${O} give you?`,
    a: `Replace ${x} by ${A} and the constant ${I('c')} by ${I('c')}${ID}. For ${A} = ${bm(['1', '2'], ['2', '1'])}, ${sq(A)} − 2${A} − 3${ID} = ${O}, so ${A}(${A} − 2${ID}) = 3${ID} and ${AI} = ${fr('1', '3')}(${A} − 2${ID})`,
    why: `${bm(['3', '1'], ['7', '5'])} satisfies ${sq(A)} − 8${A} + 8${ID} = ${O}, so ${AI} = ${fr('1', '8')}(8${ID} − ${A}).`,
    say: null,
  },
  // pp. 217–218
  {
    topic: 4,
    kind: 'remember',
    q: 'How do addition and multiplication model a shop’s sales and revenue?',
    a: `With months as rows and products as columns of ${M}, adding the month rows gives the units sold of each product; multiplying ${M} by the price column ${p} gives the revenue of each month`,
    why: `${bm(['40', '25', '30'], ['35', '30', '20'])}${bm(['50'], ['20'], ['10'])} = ${bm(['2800'], ['2550'])}: Rs. 2800 and Rs. 2550, Rs. 5350 in all.`,
    say: null,
  },
  // p. 216
  {
    topic: 4,
    kind: 'mixup',
    q: `${tr(AB)} = ${tr(BA)}: does that make ${AB} = ${BA}?`,
    a: `No: the products differ in general; only their traces agree. That is why it is a favourite trap`,
    why: `The identity needs both products to exist: square matrices of the same order.`,
    say: null,
  },
  // p. 218
  {
    topic: 4,
    kind: 'mistake',
    q: `${sq(A)} = ${O}: must ${A} be the zero matrix?`,
    a: `No: ${bm(['0', '1'], ['0', '0'])}<sup>2</sup> = ${O}, so it is nilpotent of index 2 without being zero. And a nilpotent matrix can never be invertible`,
    why: 'A nilpotent matrix eventually annihilates everything.',
    say: null,
  },
  // p. 217
  {
    topic: 4,
    kind: 'shortcut',
    q: `${A} is idempotent: simplify (${ID} + ${A})<sup>3</sup> − 7${A}.`,
    a: `${ID}. Every power of ${A} collapses to ${A}, and ${ID} commutes with everything, so (${ID} + ${A})<sup>3</sup> = ${ID} + 3${A} + 3${sq(A)} + ${sup(A, '3')} = ${ID} + 7${A}`,
    why: `The binomial expansion is legal here only because ${ID} commutes with ${A}.`,
    say: null,
  },

  // ── Additional A · Near-Diagonal Powers: the Binomial Theorem for Matrices ──
  // pp. 222–223
  {
    topic: 5,
    kind: 'remember',
    q: `How do you raise ${A} = ${lam}${ID} + ${N} to the power ${n}, when ${sup(N, k)} = ${O}?`,
    a: `By the binomial theorem, stopped at ${r} = ${k} − 1: (${lam}${ID} + ${N})<sup>${n}</sup> = ∑${NB}${bn(n, r)}${sup(lam, `${n}−${r}`)}${sup(N, r)}. It applies because ${lam}${ID} commutes with every matrix. For ${sq(N)} = ${O}: ${sup(lam, n)}${ID} + ${n}${sup(lam, `${n}−1`)}${N}`,
    why: `${bm(['1', '2'], ['0', '1'])}<sup>100</sup> = ${ID} + 100${N} = ${bm(['1', '200'], ['0', '1'])}, with ${N} = ${bm(['0', '2'], ['0', '0'])}.`,
    say: 'Compute the powers before trusting any formula.',
  },
  // p. 223
  {
    topic: 5,
    kind: 'remember',
    q: `What is (${ID} + ${N})<sup>−1</sup> when ${sup(N, k)} = ${O}?`,
    a: `${ID} − ${N} + ${sq(N)} − ⋯ + (−1)<sup>${k}−1</sup>${sup(N, `${k}−1`)}: the product with ${ID} + ${N} telescopes to ${ID} ± ${sup(N, k)} = ${ID}. For ${sq(N)} = ${O} it is ${ID} − ${N}: (${ID} + ${N})(${ID} − ${N}) = ${ID} − ${sq(N)} = ${ID}`,
    why: `(${ID} − ${N})<sup>−1</sup> = ${ID} + ${N} + ${sq(N)} + ⋯: replacing ${N} by −${N} makes every sign positive.`,
    say: 'Verify directly, never assert.',
  },
  // p. 224
  {
    topic: 5,
    kind: 'mixup',
    q: `${A} = ${bm(['1', '1', '1'], ['0', '1', '1'], ['0', '0', '1'])}: is ${N} = ${A} − ${ID} of index 2?`,
    a: `No: ${sq(N)} = ${bm(['0', '0', '1'], ['0', '0', '0'], ['0', '0', '0'])} ≠ ${O} and ${sup(N, '3')} = ${O}, index 3. So ${sup(A, '3')} = ${ID} + 3${N} + 3${sq(N)} = ${bm(['1', '3', '6'], ['0', '1', '3'], ['0', '0', '1'])}`,
    why: `And ${AI} = ${ID} − ${N} + ${sq(N)} = ${bm(['1', '−1', '0'], ['0', '1', '−1'], ['0', '0', '1'])}.`,
    say: null,
  },
  // p. 222
  {
    topic: 5,
    kind: 'mistake',
    q: `Does the binomial theorem hold for (${B} + ${C})<sup>${n}</sup> with any matrices ${B}, ${C}?`,
    a: `No: (${B} + ${C})<sup>2</sup> = ${sq(B)} + ${B}${C} + ${C}${B} + ${sq(C)}, and the cross terms collect only when ${B}${C} = ${C}${B}. Split off a scalar multiple of ${ID}, which commutes with everything`,
    why: 'The naive guess that the nilpotent part squares to zero must be checked by squaring it.',
    say: null,
  },
  // p. 225
  {
    topic: 5,
    kind: 'shortcut',
    q: `${A} = ${bm(['3', '1'], ['0', '3'])}: ${sup(A, '7')} fast?`,
    a: `${A} = 3${ID} + ${N} with ${sq(N)} = ${O}: ${sup(A, '7')} = 3<sup>7</sup>${ID} + 7${NB}·${NB}3<sup>6</sup>${N} = ${bm(['2187', '5103'], ['0', '2187'])}`,
    why: `${bm(['1', '5'], ['0', '1'])}<sup>50</sup> = ${ID} + 50${N} = ${bm(['1', '250'], ['0', '1'])}.`,
    say: null,
  },

  // ── Additional B · Matrix Equations and Systems Through the Inverse ──
  // p. 226
  {
    topic: 6,
    kind: 'remember',
    q: `How do you solve ${A}${X} = ${B} and ${X}${A} = ${B} for invertible ${A}?`,
    a: `${A}${X} = ${B}: premultiply both sides by ${AI}, so ${X} = ${AI}${B}. ${X}${A} = ${B}: postmultiply, so ${X} = ${B}${AI}. The inverse goes on the side ${A} occupies`,
    why: `${AI}(${A}${X}) = (${AI}${A})${X} = ${ID}${X} = ${AI}${B}.`,
    say: `The inverse must strike from the side ${A} occupies.`,
  },
  // pp. 226–227
  {
    topic: 6,
    kind: 'remember',
    q: `How is a linear system written as ${A}${X} = ${B}, and when is its solution unique?`,
    a: `${A} holds the coefficients (one row per equation), ${X} the column of unknowns, ${B} the column of constants. If ${A} is invertible the solution exists and is unique for every ${B}: ${A}${X} = ${B} = ${A}${X}′ gives ${A}(${X} − ${X}′) = ${O}, and premultiplying by ${AI} gives ${X} = ${X}′`,
    why: `2${x} + ${y} = 5, 3${x} + 2${y} = 11: ${AI} = ${bm(['2', '−1'], ['−3', '2'])}, so ${x} = −1, ${y} = 7.`,
    say: 'The entire skill is one rule applied with discipline.',
  },
  // p. 226
  {
    topic: 6,
    kind: 'mixup',
    q: `${A}${X} = ${B}: what happens if you multiply on the right by ${AI}?`,
    a: `You get ${A}${X}${AI} = ${B}${AI}, which isolates nothing: ${X} is trapped between two factors. Premultiplying is the move for ${A}${X} = ${B}; postmultiplying is the move only for ${X}${A} = ${B}`,
    why: `Ask first: which side of ${X} is ${A} on?`,
    say: null,
  },
  // p. 228
  {
    topic: 6,
    kind: 'mistake',
    q: `${A} = ${U}, ${B} = ${bm(['1', '2'], ['3', '4'])} and ${X}${A} = ${B}: is ${X} = ${AI}${B}?`,
    a: `No: ${A} is on the right, so ${X} = ${B}${AI} = ${B}${bm(['1', '−1'], ['0', '1'])} = ${bm(['1', '1'], ['3', '1'])}. The reflex ${AI}${B} = ${bm(['−2', '−2'], ['3', '4'])} is a different matrix`,
    why: `The check ${X}${A} = ${B} catches the slip in seconds.`,
    say: null,
  },
  // p. 227
  {
    topic: 6,
    kind: 'shortcut',
    q: `${x} − ${y} + ${I('z')} = 4, 2${x} + ${y} − 3${I('z')} = 0, ${x} + ${y} + ${I('z')} = 2: how do you keep the inverse method safe?`,
    a: `Spot-check ${AI} with one row of ${A} against its columns (you must get a row of ${ID}) before using it; then substitute the solution in the original equations. Here ${AI} = ${fr('1', '10')}${bm(['4', '2', '2'], ['−5', '0', '5'], ['1', '−2', '3'])} and ${x} = 2, ${y} = −1, ${I('z')} = 1`,
    why: 'If the pivots land in the wrong rows at the end of the reduction, interchange those rows.',
    say: null,
  },

  // ── Additional C · Counting Structured Matrices ──
  // pp. 229–230
  {
    topic: 7,
    kind: 'remember',
    q: `How many structured matrices of order ${n} have entries from a set of ${k} values?`,
    a: `${k}<sup>${f}</sup>, where ${f} is the number of free cells: arbitrary ${sq(n)}, symmetric ${SYMN}, skew-symmetric ${SKEWN}, diagonal ${n}, scalar 1`,
    why: 'Symmetric matrices of order 3 with entries from {0, 1}: 2<sup>6</sup> = 64; of order 4: 2<sup>10</sup> = 1024.',
    say: 'Once you know how many cells are free, the count is one exponentiation.',
  },
  // pp. 229–230
  {
    topic: 7,
    kind: 'remember',
    q: 'What do the table’s counts assume about the allowed set?',
    a: `The skew-symmetric, diagonal and scalar counts need 0 in the set (the skew diagonal and every off-diagonal cell of a diagonal or scalar matrix read 0). The skew count also needs the set closed under negation, since each free cell carries a pair (${a}, −${a}); otherwise the honest count is smaller than ${k}<sup>${f}</sup>`,
    why: 'Over {−1, 0, 1}: 3<sup>3</sup> = 27 of order 3, 3<sup>6</sup> = 729 of order 4. Over {0, 1}: only the zero matrix, so 1.',
    say: 'Impose the constraint on the coupled cells first.',
  },
  // p. 230
  {
    topic: 7,
    kind: 'mixup',
    q: 'Entries from {0, 1, …, 9}: how many diagonal and how many scalar matrices of order 3?',
    a: 'Diagonal: 10<sup>3</sup> = 1000, three free diagonal cells (every off-diagonal 0, which is allowed). Scalar: 10, one shared diagonal value',
    why: 'A scalar matrix has a single free cell, however large its order.',
    say: null,
  },
  // p. 229
  {
    topic: 7,
    kind: 'mistake',
    q: 'How many 2 × 2 matrices with entries from {0, 1} have trace 1?',
    a: 'Eight, not 2<sup>4</sup> = 16: the trace couples the diagonal cells, so count them jointly, (1, 0) or (0, 1), then multiply by the 2<sup>2</sup> = 4 free off-diagonal fillings',
    why: 'Equal diagonal entries, entries from {0, 1, 2}: 3 × 3<sup>2</sup> = 27.',
    say: null,
  },
  // p. 229
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How do you sanity-check a skew-symmetric count?',
    a: `Choose the above-diagonal entries and watch the rest be forced: ${sb(a, '12')} = 1, ${sb(a, '13')} = 0, ${sb(a, '23')} = −1 fixes the zero diagonal and the lower half (−1, 0, 1). One choice of three numbers, one matrix: 3<sup>3</sup> choices`,
    why: 'Free cells are exactly the choices that determine the whole matrix.',
    say: null,
  },

  // ── Additional D · Inversion Meets Symmetry; Orthogonal Matrices ──
  // p. 231
  {
    topic: 8,
    kind: 'remember',
    q: 'How does inversion interact with the transpose and with symmetry?',
    a: `${inv(`(${AT})`)} = ${T(`(${AI})`)}: transposing ${AI}${A} = ${ID} gives ${AT}${T(`(${AI})`)} = ${ID}. Hence the inverse of an invertible symmetric matrix is symmetric, and of an invertible skew-symmetric matrix is skew-symmetric: ${T(`(${AI})`)} = ${inv(`(−${A})`)} = −${AI}`,
    why: 'Only even-order skew-symmetric matrices can be invertible.',
    say: 'For square matrices a one-sided inverse is the inverse.',
  },
  // pp. 231–232
  {
    topic: 8,
    kind: 'remember',
    q: 'What does orthogonality mean entrywise, and what is closed under it?',
    a: `${A}${AT} = ${AT}${A} = ${ID} says the columns (and the rows) are mutually perpendicular unit vectors. ${ID} is orthogonal; so are ${AT} and ${AI} when ${A} is; and so is ${AB}: ${T(`(${AB})`)}(${AB}) = ${BT}${AT}${A}${B} = ${BT}${B} = ${ID}`,
    why: `The rotation ${bm([`cos ${th}`, `−sin ${th}`], [`sin ${th}`, `cos ${th}`])} is orthogonal for every ${th}, so its inverse is its transpose, the rotation by −${th}.`,
    say: 'Impose the defining equation cell by cell, let the constraints cascade.',
  },
  // pp. 232–233
  {
    topic: 8,
    kind: 'mixup',
    q: 'Orthogonal and involutory: the same thing?',
    a: `No: orthogonal means ${AI} = ${AT}, involutory means ${AI} = ${A}. They coincide for a symmetric matrix: orthogonal and symmetric give ${AI} = ${AT} = ${A}, so ${sq(A)} = ${ID}`,
    why: 'The four diagonal sign matrices are both.',
    say: null,
  },
  // p. 232
  {
    topic: 8,
    kind: 'mistake',
    q: `Can a 2 × 2 upper triangular matrix ${bm([a, b], ['0', d])} with ${b} ≠ 0 be orthogonal?`,
    a: `No: ${AT}${A} = ${ID} gives ${sq(a)} = 1, ${I('ab')} = 0 and ${sq(b)} + ${sq(d)} = 1; ${a} = ±1 forces ${b} = 0, then ${d} = ±1. Exactly four survive: ${bm(['±1', '0'], ['0', '±1'])}`,
    why: 'Impose the defining equation cell by cell and let the constraints cascade.',
    say: null,
  },
  // p. 233
  {
    topic: 8,
    kind: 'shortcut',
    q: `Is ${fr('1', '3')}${bm(['1', '2', '2'], ['2', '1', '−2'], ['−2', '2', '−1'])} orthogonal, and what is its inverse?`,
    a: `Yes: each row has squared length ${fr('1 + 4 + 4', '9')} = 1 and the pairwise row products are 0, so ${A}${AT} = ${ID} and ${AI} = ${AT}. No row reduction needed`,
    why: 'Check rows (or columns) for unit length and perpendicularity.',
    say: null,
  },

  // ── Additional E · Trace: From Assertion to Tool ──
  // p. 234
  {
    topic: 9,
    kind: 'remember',
    q: `Why is ${tr(AB)} = ${tr(BA)}?`,
    a: `Both are the double sum of ${sb(a, I('ir'))}${sb(b, I('ri'))} over ${i} and ${r}, added in a different order: ${tr(AB)} = ∑<sub>${i}</sub>∑<sub>${r}</sub>${NB}${sb(a, I('ir'))}${sb(b, I('ri'))}, ${tr(BA)} = ∑<sub>${r}</sub>∑<sub>${i}</sub>${NB}${sb(b, I('ri'))}${sb(a, I('ir'))}. Linearity is entrywise: ${tr(`${A} + ${B}`)} = ${tr(A)} + ${tr(B)}, ${tr(I('kA'))} = ${k}${NB}${tr(A)}`,
    why: `${AB} = ${bm(['5', '2'], ['11', '4'])} and ${BA} = ${bm(['1', '2'], ['5', '8'])} for ${A} = ${bm(['1', '2'], ['3', '4'])}, ${B} = ${bm(['1', '0'], ['2', '1'])}: both traces are 9.`,
    say: 'Finite sums commute with reordering.',
  },
  // pp. 234–235
  {
    topic: 9,
    kind: 'remember',
    q: `What do traces prove about ${AB} − ${BA} and about ${AT}${A}?`,
    a: `${AB} − ${BA} = ${In} is impossible for every ${n} ≥ 1: the left side has trace 0, the right side ${n}. For a real matrix the diagonal of ${AT}${A} is sums of squares, so ${tr(`${AT}${A}`)} is the sum of the squares of all entries: ${AT}${A} = ${O} forces ${A} = ${O}`,
    why: `${AB} − ${BA} = 2${sb(ID, '3')} is impossible too: 0 against 6.`,
    say: 'Equal traces, different matrices.',
  },
  // p. 235
  {
    topic: 9,
    kind: 'mixup',
    q: `Do ${AB} and ${BA} at least have the same diagonal?`,
    a: `No: the diagonals differ too, (5, 4) against (1, 8) in the standard example; only the diagonal sums agree`,
    why: 'The identity is about the trace alone.',
    say: null,
  },
  // p. 236
  {
    topic: 9,
    kind: 'mistake',
    q: `${A} is 3 × 3 with ${tr(A)} = 4: is ${tr(`3${A} − 2${ID}`)} = 12 − 2?`,
    a: `No: ${tr(`2${ID}`)} = 2 × 3 = 6, since ${ID} has three diagonal 1s, so ${tr(`3${A} − 2${ID}`)} = 6. And ${tr(`${A} + ${AT}`)} = 8, because ${tr(AT)} = ${tr(A)}`,
    why: `In general ${tr(`${k}${In}`)} = ${k}${n}.`,
    say: null,
  },
  // pp. 235–236
  {
    topic: 9,
    kind: 'shortcut',
    q: 'What is the trace of a skew-symmetric matrix?',
    a: `0, with no computation: ${aii} = −${aii} forces every diagonal entry to 0`,
    why: 'So a skew-symmetric matrix can never equal a matrix of non-zero trace.',
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 237
  {
    topic: 10,
    kind: 'shortcut',
    q: `${A} = ${bm(['1', '0', '0'], ['1', '1', '0'], ['1', '1', '1'])} and ${B} = ${sup(A, '20')}: the sum of the first column of ${B}?`,
    a: `231. ${A} = ${ID} + ${N} with ${sup(N, '3')} = ${O}, so ${sup(A, '20')} = ${ID} + 20${N} + ${bn('20', '2')}${sq(N)}; its first column is (1, 20, 20 + 190)`,
    why: 'Twenty 3 × 3 multiplications are never done: the planted structure is the question.',
    say: `Before multiplying anything, test ${sq(A)}.`,
  },
  // p. 238
  {
    topic: 10,
    kind: 'remember',
    q: `How many 3 × 3 matrices with entries from {−1, 0, 1} have ${tr(`${A}${AT}`)} = 3?`,
    a: `672. ${tr(`${A}${AT}`)} is the sum of the squares of all nine entries, so exactly three cells are non-zero: ${bn('9', '3')} = 84 placements times 2<sup>3</sup> = 8 sign choices`,
    why: `Over {0, 1, 2} with ${tr(`${T(M)}${M}`)} = 5: five 1s give ${bn('9', '4')} = 126, one 2 with one 1 gives 9 × 8 = 72; 198 in all, and the 2<sup>2</sup> = 4 case is the designed miss.`,
    say: null,
  },
  // pp. 238, 241
  {
    topic: 10,
    kind: 'shortcut',
    q: `${A} = ${bm([`cos ${al}`, `−sin ${al}`], [`sin ${al}`, `cos ${al}`])}: how do you handle a condition on ${sup(A, n)}?`,
    a: `Rotate: ${sup(A, n)} is the rotation by ${n}${al}, so the matrix condition becomes ${n}${al} ≡ (target angle) (mod 2π)`,
    why: `With ${al} = ${fr('π', '9')}, the least positive ${n} with ${sup(A, n)} = ${ID} is 18.`,
    say: 'Never multiply the matrix out: rotate.',
  },
  // pp. 239–240
  {
    topic: 10,
    kind: 'mistake',
    q: `${X}, ${Y} skew-symmetric, ${Z} symmetric: are ${sup(X, '4')}${sup(Z, '3')} − ${sup(Z, '3')}${sup(X, '4')} and ${sup(X, '44')} + ${sup(Y, '44')} symmetric or skew?`,
    a: `The first is skew: its transpose is ${sup(Z, '3')}${sup(X, '4')} − ${sup(X, '4')}${sup(Z, '3')}. The second is symmetric: even powers of a skew matrix are symmetric, while ${sup(X, '23')} + ${sup(Y, '23')} is skew. Options are built on mis-tracking which factor picks up the minus sign`,
    why: 'Drop the reversal in a transpose and you land exactly on the wrong option of the pair.',
    say: null,
  },
  // pp. 239–240
  {
    topic: 10,
    kind: 'mistake',
    q: `${A} = ${bm(['1', '2'], ['2', '4'])}: should you compute ${sup(A, '5')} by multiplying?`,
    a: `No: ${sq(A)} = 5${A}, so ${sup(A, n)} = 5<sup>${n}−1</sup>${A} and ${sup(A, '5')} = 625${A}. Once a power is high, a structure has been planted (${sq(A)} = ${ID}, nilpotence, a rotation angle); brute force is the intended wrong path`,
    why: `The other traps: (${A} + ${B})<sup>2</sup> with 2${AB}, ${inv(`(${AB})`)} = ${AI}${BI}, and reading ${tr(`${A}${AT}`)} as (${tr(A)})<sup>2</sup>.`,
    say: null,
  },
];
