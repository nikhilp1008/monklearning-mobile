/**
 * KEY POINTS for Mathematics Class 12, Chapter 4 (Determinants).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–06 each have four or five Remember points, at least one of each
 * other kind and one Exam shortcut (Topic 02 carries two Common mistakes,
 * Topic 05 two Exam shortcuts); Additional topics A–E have two Remember
 * points and one of each other kind; Additional P, the past-paper analysis,
 * has five points (three archetypes as Remember and Exam shortcuts, two
 * traps): 78 points in all. Memory lines are a fifth, short section of their
 * own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 are 0–5 (the chapter's Parts 1–6); Additional
 * topics A–E are 6–10 (Addenda A–E) and Additional P is 11 (Addendum P,
 * What JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, properties, theorems and its Cheat sheet. Common mistakes: its
 * Common student pitfalls and its MCQ traps (A–E, which print neither: the
 * slips their worked examples and practice answers warn about; P: its
 * traps). Exam shortcuts: its Pro-Tip, Speed / Elimination Traps and worked
 * examples. `say`: the book's own memory aids, word for word without their
 * quotation marks: Topics 01–06 print one, two, one, three, three and one;
 * ten are here, eight of them memory lines. The eleventh, Topic 02's "Logical
 * chain to remember: P5 (split) + P4 (scalar) + P3 (identical → 0) ⟹ P6
 * (row operation is harmless).", is left out: the points never name the
 * properties by number. Topic 02's first aid drops its lead "The four
 * moves:". Topic 05's "Delta zero, hopes alive: check the side-determinants
 * to know none-or-infinite." over-states (see below), so it rides on the
 * third `say` of its topic and is not shown as a memory line. A–E and P
 * print no aids, so each has two of the book's own one-line sentences (A:
 * "A sum of squares vanishes only term-by-term.", cut and capitalised, and
 * "Two routes, one answer."; B: "Expand along the zero-richest line, then
 * burn the Pythagorean identity.", its strategy heading, and "All four are
 * old tools pointed at new shapes.", cut; C: "Brute expansion dies; two
 * structural methods live." and "One specialisation per unknown
 * coefficient."; D: "Always glance for parallelism before believing a zero."
 * and "No intersection coordinates ever need to be computed.", cut and
 * capitalised; E: "Any nonzero Δᵢ certifies inconsistency immediately." and
 * "Elimination is the judge; the Δᵢ are only the bailiff.", its "Moral:"
 * dropped; P: "Never assume which." and "Never pull one global factor."):
 * twenty-two in all, twenty of them memory lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: "Δ = 0 and all Δᵢ = 0 ⇒ infinitely many solutions" (true when
 * some 2 × 2 minor of the coefficient matrix is non-zero; with all rows
 * proportional the system can still be inconsistent, as the book itself
 * shows in Additional E), and the sensitivity identity ∂Δ/∂aᵢⱼ = Cᵢⱼ (the
 * entries treated as independent variables). The Exam relevance claims, the
 * past-paper distribution and its shares, the CBSE, NCERT and syllabus
 * remarks (the cofactor's other name is given without the textbook), the
 * history note and the paper names in P are left out.
 *
 * Markup is the chapter's own: <i> for every matrix, entry and scalar
 * letter, |A| with a word joiner, Δ upright, adj upright, <sup>T</sup> and
 * <sup>−1</sup>, <sub> for indices, − (U+2212) for minus. A short
 * determinant is drawn with <vmat> and a short matrix with <bmat> (rows <r>,
 * cells <c>), as the chapter draws them. Every fraction is stacked,
 * <frac><num>…</num><den>…</den></frac>, and never a fraction inside a
 * numerator; no em dashes; and always a space after "<", so it is never read
 * as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant between two bars: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A matrix in square brackets. */
const bm = (...rows: string[][]) => grid('bmat', rows);
const NB = ' ';
const WJ = '⁠';
/** |…| as a determinant or modulus, the opening bar glued to what it holds. */
const bar = (s: string) => `|${WJ}${s}|`;
const A = I('A');
const B = I('B');
const M = I('M');
const O = I('O');
const X = I('X');
const ID = I('I');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const al = I('α');
const be = I('β');
const ga = I('γ');
const de = I('δ');
const lam = I('λ');
const w = I('ω');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const cu = (s: string) => sup(s, '3');
const D = 'Δ';
const Di = sb(D, i);
const D1 = sb(D, '1');
const Cc = (s: string) => sb(I('C'), s);
const Mm = (s: string) => sb(I('M'), s);
const Rr = (s: string) => sb(I('R'), s);
const Cl = (s: string) => sb(I('C'), s);
const aij = sb(a, I('ij'));
const Cij = Cc(I('ij'));
const Ckj = Cc(I('kj'));
const Mij = Mm(I('ij'));
const AT = sup(A, 'T');
const AI = sup(A, '−1');
const DA = bar(A);
const ADJ = `adj${NB}${A}`;
const SIGN = `(−1)<sup>${i}+${j}</sup>`;
const CYC = `${cu(a)} + ${cu(b)} + ${cu(c)} − 3${I('abc')}`;
const V3 = `(${a} − ${b})(${b} − ${c})(${c} − ${a})`;
const tf = (fn: string, s: string) => `${fn}${NB}${s}`;
/** Half the modulus of the area determinant. */
const HALFBAR = `${fr('1', '2')}|${WJ}${D}|`;
const AREA = vm([sb(x, '1'), sb(y, '1'), '1'], [sb(x, '2'), sb(y, '2'), '1'], [sb(x, '3'), sb(y, '3'), '1']);

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Determinant: Meaning, Definition & Expansion ──
  // pp. 244–245, 247
  {
    topic: 0,
    kind: 'remember',
    q: 'For which matrices is a determinant defined, and what are the order-1 and order-2 values?',
    a: `Square matrices only. Order 1: ${bar(a)} = ${a}, the entry itself, not its modulus. Order 2: ${vm([a, b], [c, d])} = ${I('ad')} − ${I('bc')}. An order-${n} determinant expands into ${n}! signed product terms`,
    why: `As a determinant ${bar('−7')} = −7; an order-4 determinant has 4! = 24 terms.`,
    say: 'Plus, minus, plus: march along the zeros.',
  },
  // pp. 245, 248
  {
    topic: 0,
    kind: 'remember',
    q: 'How is a 3 × 3 determinant expanded?',
    a: `Along any row or column: each entry times the 2 × 2 determinant left when its row and column are deleted, with the checkerboard sign ${SIGN}, ${bm(['+', '−', '+'], ['−', '+', '−'], ['+', '−', '+'])}, then added. Every line gives the same value, so pick the line with the most zeros`,
    why: `${vm(['2', '1', '3'], ['0', '4', '1'], ['5', '2', '1'])} = 2(4 − 2) − 1(0 − 5) + 3(0 − 20) = −51.`,
    say: null,
  },
  // pp. 245–246, 248
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the Sarrus rule, and where does it apply?',
    a: 'Order 3 only: write the first two columns again to the right, add the three full down-right diagonal products and subtract the three full down-left ones. It is fast but mechanical: it skips no zeros and does not generalise',
    why: `${vm(['1', '2', '1'], ['0', '3', '2'], ['2', '1', '1'])}: (3 + 8 + 0) − (6 + 2 + 0) = 3.`,
    say: null,
  },
  // pp. 244, 250
  {
    topic: 0,
    kind: 'remember',
    q: 'What does a determinant measure?',
    a: 'A 2 × 2 determinant is the signed area of the parallelogram drawn by its two rows; a 3 × 3 one is the signed volume of the box drawn by its three rows. Non-zero means the rows pull in independent directions; zero means they collapse onto each other',
    why: 'That is why a non-zero determinant signals a set of equations with a clean unique answer.',
    say: null,
  },
  // pp. 245–246
  {
    topic: 0,
    kind: 'mixup',
    q: 'Can the Sarrus diagonals be used on a 2 × 2 or a 4 × 4 determinant?',
    a: 'No: the diagonal trick is valid for 3 × 3 only and gives nonsense on a 4 × 4. For order 4 and up, use cofactor expansion',
    why: `For 2 × 2 the rule is simply ${I('ad')} − ${I('bc')}.`,
    say: null,
  },
  // p. 248
  {
    topic: 0,
    kind: 'mistake',
    q: `Expanding along row 1, what sign does the ${sb(a, '12')} term carry?`,
    a: `Minus: −${sb(a, '12')}(…), since (−1)<sup>1+2</sup> = −1. Dropping that middle sign is the commonest 3 × 3 error`,
    why: 'The other listed slips: reading an order-1 determinant as a modulus, Sarrus on the wrong size, and expanding along a dense line when a zero-rich one exists.',
    say: null,
  },
  // pp. 246, 248
  {
    topic: 0,
    kind: 'shortcut',
    q: `Solve ${vm([x, '1', '1'], ['1', x, '1'], ['1', '1', x])} = 0 fast.`,
    a: `${x} = −2 or ${x} = 1. Every row sums to ${x} + 2, so ${Cl('1')} → ${Cl('1')} + ${Cl('2')} + ${Cl('3')} pulls out (${x} + 2); then ${Rr('2')} → ${Rr('2')} − ${Rr('1')}, ${Rr('3')} → ${Rr('3')} − ${Rr('1')} leave a triangular form: (${x} + 2)(${x} − 1)<sup>2</sup>`,
    why: 'Scan for the zero-richest line or a shared row or column sum before any expansion: it routinely halves the work.',
    say: null,
  },

  // ── Topic 02 · Properties of Determinants ──
  // pp. 251–252, 256–257
  {
    topic: 1,
    kind: 'remember',
    q: 'What do a transpose, a swap and two equal rows do to a determinant?',
    a: `${bar(AT)} = ${DA}, so every row rule is also a column rule. Swapping two rows (or columns) reverses the sign. Two identical or proportional rows (or columns) make it 0: swapping two identical rows changes nothing yet flips the sign, so ${D} = −${D}`,
    why: 'Geometrically: a swap turns the box inside out; two edges pointing the same way squash it flat.',
    say: 'Swap → flip, Same → zero, Scale → pulls out, Shear → safe.',
  },
  // pp. 251–252, 257
  {
    topic: 1,
    kind: 'remember',
    q: 'What do scaling, splitting and adding rows do?',
    a: `A factor ${k} of one row comes out as ${k}. A row whose entries are sums splits the determinant into two. ${Rr(i)} → ${Rr(i)} + ${k}${Rr(j)} with ${i} ≠ ${j} leaves it unchanged. A triangular or diagonal determinant is the product of its diagonal entries, and a zero row or column gives 0`,
    why: 'Shear a stack of papers sideways: base and height stay, so the volume stays.',
    say: null,
  },
  // p. 252
  {
    topic: 1,
    kind: 'remember',
    q: `Why is ${Rr('1')} → ${Rr('1')} + ${k}${Rr('2')} harmless?`,
    a: `Split the new first row: ${vm([`${Rr('1')} + ${k}${Rr('2')}`], [Rr('2')], [Rr('3')])} = ${D} + ${k}${vm([Rr('2')], [Rr('2')], [Rr('3')])} = ${D} + ${k} · 0. The added part lands in a determinant with two identical rows`,
    why: 'This one argument is the backbone of every “prove without expanding” question.',
    say: null,
  },
  // pp. 252–253
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the routine for “prove without expanding”?',
    a: `Scan for equal row or column sums (then ${Cl('1')} → ${Cl('1')} + ${Cl('2')} + ${Cl('3')}); pull out common factors; create zeros with row operations; then spot two identical or proportional lines (0) or reduce to triangular form`,
    why: `${vm([`${a} − ${b}`, `${b} − ${c}`, `${c} − ${a}`], [`${b} − ${c}`, `${c} − ${a}`, `${a} − ${b}`], [`${c} − ${a}`, `${a} − ${b}`, `${b} − ${c}`])} = 0: the column sum makes a zero column. Name the operation used; it earns a method mark.`,
    say: null,
  },
  // pp. 252, 255, 257
  {
    topic: 1,
    kind: 'remember',
    q: `What are ${bar(I('AB'))}, ${bar(I('kA'))} and ${bar(AI)}?`,
    a: `${bar(I('AB'))} = ${DA}${NB}${bar(B)}; ${bar(I('kA'))} = ${sup(k, n)}${DA} for order ${n}; ${bar(AI)} = ${fr('1', DA)} when ${DA} ≠ 0`,
    why: `A 3 × 3 matrix with ${DA} = 4: ${bar(`3${A}`)} + ${bar(AT)} = 108 + 4 = 112.`,
    say: null,
  },
  // pp. 251, 255–256
  {
    topic: 1,
    kind: 'mixup',
    q: `${k} times one row against ${k} times the whole matrix?`,
    a: `One row: the determinant is multiplied by ${k}. The whole ${n} × ${n} matrix: by ${sup(k, n)}, since every one of the ${n} rows carries a ${k}`,
    why: `${DA} = 5 for a 3 × 3 matrix: ${bar(`2${A}`)} = 2<sup>3</sup> × 5 = 40, not 10.`,
    say: null,
  },
  // p. 256
  {
    topic: 1,
    kind: 'mistake',
    q: `Can you do ${Rr('1')} → ${Rr('1')} + ${Rr('2')} and ${Rr('2')} → ${Rr('2')} + ${Rr('1')} in one step?`,
    a: 'No: the second must use the original rows, so the pair silently changes the value. Perform operations one at a time',
    why: 'And every swap costs a factor −1: an even number of swaps returns the sign, an odd number leaves it reversed.',
    say: null,
  },
  // pp. 253, 256
  {
    topic: 1,
    kind: 'mistake',
    q: `Is ${vm(['2', '4', '6'], ['1', '2', '3'], ['5', '7', '9'])} worth expanding?`,
    a: `No: ${Rr('1')} = 2${Rr('2')}, two proportional rows, so it is 0. Proportional rows or columns kill a determinant just as equal ones do; check ratios, not only equality`,
    why: 'Expanding burns a minute and risks an arithmetic slip to reach a zero one glance reveals.',
    say: null,
  },
  // pp. 254–255
  {
    topic: 1,
    kind: 'shortcut',
    q: `${p}, ${q}, ${r} are in AP: why is ${vm([`${x} + 1`, `${x} + 2`, `${x} + ${p}`], [`${x} + 2`, `${x} + 3`, `${x} + ${q}`], [`${x} + 3`, `${x} + 4`, `${x} + ${r}`])} = 0?`,
    a: `${Rr('1')} − 2${Rr('2')} + ${Rr('3')} = 0 column by column (the last because 2${q} = ${p} + ${r}): dependent rows give 0 for every ${x}`,
    why: `The same move gives ${vm(['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'])} = 0: rows in AP.`,
    say: null,
  },

  // ── Topic 03 · Area of a Triangle, Collinearity & Equation of a Line ──
  // pp. 259, 262
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the area of a triangle from the coordinates of its vertices?',
    a: `${HALFBAR}, where the determinant has rows (${sb(x, '1')}, ${sb(y, '1')}, 1), (${sb(x, '2')}, ${sb(y, '2')}, 1), (${sb(x, '3')}, ${sb(y, '3')}, 1). Expanded: ${fr('1', '2')}|${WJ}${sb(x, '1')}(${sb(y, '2')} − ${sb(y, '3')}) + ${sb(x, '2')}(${sb(y, '3')} − ${sb(y, '1')}) + ${sb(x, '3')}(${sb(y, '1')} − ${sb(y, '2')})|`,
    why: `Vertices (1, 2), (3, 5), (−2, 4): the determinant is 13 and the area ${fr('13', '2')}.`,
    say: 'Coordinates left, ones on the right; half the size, take it positive.',
  },
  // pp. 259, 261
  {
    topic: 2,
    kind: 'remember',
    q: 'When are three points collinear?',
    a: `Exactly when ${AREA} = 0: collinear points bound a flat triangle of zero area`,
    why: `(${k}, 2), (−3, 4), (7, −1): 5${k} − 5 = 0, so ${k} = 1.`,
    say: null,
  },
  // pp. 259, 261
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you write the line through two points with a determinant?',
    a: `Keep a general point as the first row and set the determinant to 0: ${vm([x, y, '1'], [sb(x, '1'), sb(y, '1'), '1'], [sb(x, '2'), sb(y, '2'), '1'])} = 0. The point (${x}, ${y}) must be collinear with the two given points`,
    why: `Through (2, 3) and (−1, 5): 2${x} + 3${y} − 13 = 0.`,
    say: null,
  },
  // pp. 258–259
  {
    topic: 2,
    kind: 'remember',
    q: 'Why the half, the modulus and the column of 1s?',
    a: 'The determinant is twice the signed area (a triangle is half a parallelogram): positive for vertices listed anticlockwise, negative for clockwise. The column of 1s brings the positions of the points in; expanding along it gives the shoelace sum',
    why: 'Drop the column of 1s and the determinant no longer represents area.',
    say: null,
  },
  // pp. 258, 261–262
  {
    topic: 2,
    kind: 'mixup',
    q: 'The bare determinant or half its modulus: which do you use when?',
    a: 'Area needs both the half and the modulus. Collinearity and the equation of a line use the bare determinant set to 0',
    why: 'A negative determinant only means the vertices were listed clockwise.',
    say: null,
  },
  // pp. 260, 262
  {
    topic: 2,
    kind: 'mistake',
    q: `The triangle with vertices ${I('P')}(${x}, ${y}), (1, 0), (0, 1) has area 2: is the locus one line?`,
    a: `No: two. The determinant is −${x} − ${y} + 1, and ${fr('1', '2')}|${WJ}${x} + ${y} − 1| = 2 gives ${x} + ${y} − 1 = ±4: the parallel lines ${x} + ${y} = 5 and ${x} + ${y} = −3. Forgetting the modulus loses a branch`,
    why: `Likewise (${lam}, 2), (1, 3), (4, −1) with area ${fr('11', '2')} gives ${lam} = ${fr('9', '2')} or ${lam} = −1.`,
    say: null,
  },
  // pp. 260, 262
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Are (1, 1), (2, 3), (3, 5) collinear?',
    a: 'Yes, in five seconds: both slopes are 2. With clean integer coordinates compare slopes; keep the determinant for messy coordinates or a parameter',
    why: `The determinant agrees: ${vm(['1', '1', '1'], ['2', '3', '1'], ['3', '5', '1'])} = −2 + 1 + 1 = 0.`,
    say: null,
  },

  // ── Topic 04 · Minors and Cofactors ──
  // pp. 263–264, 269
  {
    topic: 3,
    kind: 'remember',
    q: 'What are a minor and a cofactor?',
    a: `The minor ${Mij} of ${aij} is the determinant left after deleting row ${i} and column ${j}. The cofactor is the minor with its checkerboard sign: ${Cij} = ${SIGN}${Mij}. Some books write the cofactor as ${sb(A, I('ij'))}`,
    why: `${Cc('23')} = (−1)<sup>5</sup>${Mm('23')} = −${Mm('23')}.`,
    say: 'Cover to find the Minor, sign the board for the coFactor.',
  },
  // pp. 264–266
  {
    topic: 3,
    kind: 'remember',
    q: 'What do the entries of a row times cofactors give?',
    a: `With their own cofactors, the determinant: ${D} = ∑<sub>${j}</sub>${NB}${aij}${Cij} along any row ${i} (or any column). With the cofactors of a different row, 0: ∑<sub>${j}</sub>${NB}${aij}${Ckj} = 0 for ${i} ≠ ${k}. Together, ∑<sub>${j}</sub>${NB}${aij}${Ckj} = ${D}${NB}${sb(de, I('ik'))}`,
    why: `Cross sums vanish: replace row ${k} by a copy of row ${i}; the cofactors of row ${k} do not change, and the new determinant has two identical rows.`,
    say: 'Same row → Δ, cross row → 0.',
  },
  // pp. 264–265, 269
  {
    topic: 3,
    kind: 'remember',
    q: `What is ${bar(ADJ)} for an order-${n} matrix, and why?`,
    a: `${bar(ADJ)} = ${bar(I('C'))} = ${sup(DA, `${n}−1`)}, with ${I('C')} the cofactor matrix. Take determinants of ${A}(${ADJ}) = ${DA}${NB}${sb(ID, n)}: ${DA}${NB}${bar(ADJ)} = ${sup(DA, n)}. Iterated, ${bar(`adj(${ADJ})`)} = ${sup(DA, `(${n}−1)<sup>2</sup>`)}`,
    why: `A 3 × 3 matrix with ${DA} = 2: ${bar(I('C'))} = 4 and ${bar(`adj(${ADJ})`)} = 2<sup>4</sup> = 16.`,
    say: 'adj drops the power by one.',
  },
  // pp. 266, 268
  {
    topic: 3,
    kind: 'remember',
    q: `For ${bm(['3', '1', '2'], ['0', '2', '−1'], ['4', '1', '5'])}, how do the second-row cofactors give the determinant?`,
    a: `${Cc('21')} = −3, ${Cc('22')} = 7, ${Cc('23')} = 1, so ${DA} = 0(−3) + 2(7) + (−1)(1) = 13. Strike the row and column, read the 2 × 2, then stamp the sign from the + − + board`,
    why: 'Expanding along row 1 instead gives 33 − 4 − 16 = 13: the line does not matter.',
    say: null,
  },
  // pp. 264, 269
  {
    topic: 3,
    kind: 'remember',
    q: 'What does a cofactor measure?',
    a: `The sensitivity of the determinant to that entry: ${fr(`∂${D}`, `∂${aij}`)} = ${Cij}, with the entries treated as independent. A small entry paired with a large cofactor can still move the determinant a lot`,
    why: `Expanding along row ${i} shows it: ${aij} appears only in the term ${aij}${Cij}.`,
    say: null,
  },
  // pp. 264, 268
  {
    topic: 3,
    kind: 'mixup',
    q: `Is the cofactor of ${aij} its minor?`,
    a: `Only when ${i} + ${j} is even. Reporting the minor as the cofactor, dropping ${SIGN}, is the commonest error: always finish by stamping the checkerboard sign`,
    why: 'The indices start at 1: an off-by-one in the exponent flips every sign.',
    say: null,
  },
  // pp. 267–268
  {
    topic: 3,
    kind: 'mistake',
    q: `${A} is 3 × 3 with ${DA} = −5: is ${bar(ADJ)} = (−5)<sup>3</sup>?`,
    a: `No: ${sup(DA, `${n}−1`)} = (−5)<sup>2</sup> = 25. The power is one less than the order. And a row’s entries against another row’s cofactors give 0, not ${DA}`,
    why: `${bar(`adj(${ADJ})`)} = 81 means ${sup(DA, '4')} = 81, so ${DA} = ±3.`,
    say: null,
  },
  // pp. 266, 268
  {
    topic: 3,
    kind: 'shortcut',
    q: `Evaluate ${vm(['7', '0', '0'], ['2', '5', '3'], ['9', '−1', '4'])} fast.`,
    a: `161: row 1 has two zeros, so only 7${Cc('11')} survives, 7(20 + 3)`,
    why: `${vm(['2', '1', '0'], ['3', '−1', '0'], ['5', '4', '2'])} = 2${Cc('33')} = 2(−2 − 3) = −10: column 3 is the zero-rich line.`,
    say: null,
  },

  // ── Topic 05 · Inverse of a Matrix & System of Linear Equations ──
  // pp. 270–271, 276
  {
    topic: 4,
    kind: 'remember',
    q: 'When does a matrix have an inverse, and what is it?',
    a: `Exactly when ${DA} ≠ 0 (non-singular): ${AI} = ${fr('1', DA)}${NB}${ADJ}, where ${ADJ} is the transpose of the cofactor matrix. ${DA} = 0 squashes space flat, so there is no unique way back`,
    why: `${bm(['2', '5'], ['1', '3'])} has determinant 1 and inverse ${bm(['3', '−5'], ['−1', '2'])}.`,
    say: 'No determinant, no inverse.',
  },
  // pp. 271–272, 276
  {
    topic: 4,
    kind: 'remember',
    q: `Why is ${A}(${ADJ}) = ${DA}${NB}${ID}?`,
    a: `The (${i}, ${k}) entry of the product is ∑<sub>${j}</sub>${NB}${aij}${Ckj}: a true cofactor expansion, ${DA}, when ${i} = ${k}, and a cross sum, 0, otherwise. Divide by ${DA} ≠ 0 and the inverse formula follows`,
    why: `The same holds as (${ADJ})${A} = ${DA}${NB}${ID}.`,
    say: 'adj = transpose of cofactors.',
  },
  // pp. 271–272, 276
  {
    topic: 4,
    kind: 'remember',
    q: `What is Cramer’s rule for ${A}${X} = ${B}?`,
    a: `${x} = ${fr(D1, D)}, ${y} = ${fr(sb(D, '2'), D)}, ${z} = ${fr(sb(D, '3'), D)}, where ${Di} is ${D} with its ${i}-th column replaced by the constants. Valid only when ${D} ≠ 0. Equivalently ${X} = ${AI}${B}`,
    why: `∑<sub>${i}</sub>${NB}${sb(b, i)}${Cc(`${i}1`)} is the expansion down column 1 of ${D1}.`,
    say: null,
  },
  // pp. 271, 276, 295
  {
    topic: 4,
    kind: 'remember',
    q: `How do ${D} and the ${Di} classify a system of three equations?`,
    a: `${D} ≠ 0: unique solution. ${D} = 0 with some ${Di} ≠ 0: no solution. ${D} = 0 with all ${Di} = 0: infinitely many when some 2 × 2 minor of the coefficient matrix is non-zero; if all its rows are proportional the system can still have no solution, so eliminate to be sure`,
    why: `${x} + ${y} + ${z} = 1, 2${x} + 2${y} + 2${z} = 3, 3${x} + 3${y} + 3${z} = 4: every ${Di} is 0, yet there is no solution.`,
    say: 'Delta zero, hopes alive: check the side-determinants to know none-or-infinite.',
  },
  // pp. 271, 274–275
  {
    topic: 4,
    kind: 'remember',
    q: `When does a homogeneous system ${A}${X} = ${O} have a non-trivial solution?`,
    a: `It always has the trivial one, ${X} = ${O}. It has a non-trivial one exactly when ${D} = 0`,
    why: `${k}${x} + 2${y} − ${z} = 0, 2${x} − ${y} + 3${z} = 0, ${x} + ${y} + ${z} = 0: non-trivial only for ${k} = −${fr('1', '4')}.`,
    say: null,
  },
  // p. 273
  {
    topic: 4,
    kind: 'mixup',
    q: `${k}${x} + ${y} + ${z} = 1, ${x} + ${k}${y} + ${z} = 1, ${x} + ${y} + ${k}${z} = 1 has ${D} = (${k} − 1)<sup>2</sup>(${k} + 2): are both roots “infinitely many”?`,
    a: `No. At ${k} = 1 all three equations are ${x} + ${y} + ${z} = 1: infinitely many. At ${k} = −2 adding them gives 0 = 3: no solution. ${D} = 0 only says “not unique”; the right-hand side decides which`,
    why: `For every other ${k} the solution is unique.`,
    say: null,
  },
  // pp. 272, 275
  {
    topic: 4,
    kind: 'mistake',
    q: 'Which step of the matrix method loses marks most often?',
    a: `Skipping the transpose: ${ADJ} is the transpose of the cofactor matrix, not the cofactor matrix itself. The other listed slips: scrambling the three consistency branches, forgetting the trivial solution of a homogeneous system, and using Cramer when ${D} = 0`,
    why: `${x} + ${y} + ${z} = 6, ${x} − ${y} + ${z} = 2, 2${x} + ${y} − ${z} = 1: ${D} = 6 and the solution is (1, 2, 3).`,
    say: null,
  },
  // pp. 273, 275
  {
    topic: 4,
    kind: 'shortcut',
    q: `${x} + 2${y} + 3${z} = 4, 2${x} + 4${y} + 6${z} = 9, ${x} − ${y} + ${z} = 2: classify in one glance.`,
    a: 'No solution: the second left side is exactly twice the first, so its right side should be 8, not 9. Scan for proportional coefficient rows before computing anything',
    why: `Grinding ${D}, ${D1}, ${sb(D, '2')}, ${sb(D, '3')} reaches the same verdict two minutes later.`,
    say: null,
  },
  // pp. 274–276
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A system with a parameter: where do you start?',
    a: 'Factor Δ as a polynomial in the parameter: its roots are the only interesting values, and everywhere else the solution is unique. Then test each root separately for none against infinitely many',
    why: `${x} + ${y} + ${z} = 6, ${x} + 2${y} + 3${z} = 14, 2${x} + 5${y} + ${lam}${z} = ${I('μ')}: unique exactly when ${lam} ≠ 8, for any ${I('μ')}.`,
    say: null,
  },

  // ── Topic 06 · Advanced Techniques: Multiplication, Differentiation & Special Determinants ──
  // pp. 277–278, 281
  {
    topic: 5,
    kind: 'remember',
    q: 'Why is the determinant called multiplicative?',
    a: `${DA}${NB}${bar(B)} = ${bar(I('AB'))} for square ${A}, ${B} of the same order, so ${bar(sup(A, n))} = ${sup(DA, n)} and ${bar(I('kA'))} = ${sup(k, n)}${DA}. It turns matrix products into ordinary number products`,
    why: `3 × 3 with ${DA} = 3, ${bar(B)} = −2: ${bar(`2${I('AB')}`)} = 8(3)(−2) = −48 and ${bar(`${sq(A)}${B}`)} = 9(−2) = −18.`,
    say: 'Multiply the dets, differentiate row-by-row, reverse the adj, and zero the odd skew.',
  },
  // pp. 278–280
  {
    topic: 5,
    kind: 'remember',
    q: `How do you differentiate a determinant whose entries are functions of ${x}?`,
    a: 'One row (or column) at a time, leaving the others fixed, and add the resulting determinants: the product rule, since every term is a product of one entry from each row',
    why: `${vm([x, sq(x), cu(x)], ['1', `2${x}`, `3${sq(x)}`], ['0', '2', `6${x}`])} = 2${cu(x)}: differentiating rows 1 and 2 copies the row below, so only the last term survives, 6${sq(x)}.`,
    say: null,
  },
  // pp. 278, 280–281
  {
    topic: 5,
    kind: 'remember',
    q: `What are the adjoint identities for order ${n}?`,
    a: `adj(${I('AB')}) = (adj${NB}${B})(${ADJ}), reversed like the inverse; adj(${I('kA')}) = ${sup(k, `${n}−1`)}${NB}${ADJ}; adj(${ADJ}) = ${sup(DA, `${n}−2`)}${A}; ${bar(ADJ)} = ${sup(DA, `${n}−1`)}; ${bar(`adj(${ADJ})`)} = ${sup(DA, `(${n}−1)<sup>2</sup>`)}`,
    why: `3 × 3 with ${DA} = 2 and ${bar(B)} = 5: ${bar(`adj(${I('AB')})`)} = ${sq(bar(I('AB')))} = 100.`,
    say: null,
  },
  // pp. 278–279
  {
    topic: 5,
    kind: 'remember',
    q: 'Why is a skew-symmetric determinant of odd order zero?',
    a: `${AT} = −${A} gives ${DA} = ${bar(AT)} = ${bar(`−${A}`)} = (−1)<sup>${n}</sup>${DA}; for odd ${n} that is −${DA}, so ${DA} = 0. For even order the equation says nothing`,
    why: `${vm(['0', p, `−${q}`], [`−${p}`, '0', r], [q, `−${r}`, '0'])} = 0 for every ${p}, ${q}, ${r}.`,
    say: null,
  },
  // pp. 278–279
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the Vandermonde and cyclic determinants?',
    a: `${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} = ${V3}, exactly. ${vm([a, b, c], [b, c, a], [c, a, b])} = −(${CYC}) = −(${a} + ${b} + ${c})(${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')}): ${Cl('1')} → ${Cl('1')} + ${Cl('2')} + ${Cl('3')} pulls out ${a} + ${b} + ${c}`,
    why: `Check the cyclic one at ${a}, ${b}, ${c} = 1, 2, 3: −18 = −(1 + 8 + 27 − 18).`,
    say: null,
  },
  // pp. 278, 281
  {
    topic: 5,
    kind: 'mixup',
    q: `For a 3 × 3 matrix, the powers in ${bar(I('kA'))}, ${bar(ADJ)} and ${bar(`adj(${ADJ})`)}?`,
    a: `3, 2 and 4: ${sup(k, n)}, ${sup(DA, `${n}−1`)} and ${sup(DA, `(${n}−1)<sup>2</sup>`)}. Track ${n}, ${n} − 1 and (${n} − 1)<sup>2</sup> separately`,
    why: `${DA} = 2: ${bar(`adj(${ADJ})`)} = 16.`,
    say: null,
  },
  // p. 281
  {
    topic: 5,
    kind: 'mistake',
    q: 'Is a skew-symmetric determinant of order 4 zero?',
    a: `Not in general: the zero result is for odd order only. Likewise adj(${I('AB')}) is (adj${NB}${B})(${ADJ}), not (${ADJ})(adj${NB}${B})`,
    why: `${vm(['0', a], [`−${a}`, '0'])} = ${sq(a)}, not 0.`,
    say: null,
  },
  // pp. 279, 281
  {
    topic: 5,
    kind: 'shortcut',
    q: `Evaluate ${vm(['0', '3', '−5'], ['−3', '0', '2'], ['5', '−2', '0'])}.`,
    a: '0 on sight: the diagonal is zero and each entry is minus its mirror image, so it is skew-symmetric of odd order',
    why: 'The three instant zeros of the chapter: a zero row or column, two proportional rows or columns, an odd-order skew-symmetric matrix.',
    say: null,
  },

  // ── Additional A · Circulant Determinants and the Cube Roots of Unity ──
  // pp. 282–284
  {
    topic: 6,
    kind: 'remember',
    q: `When is ${CYC} zero?`,
    a: `${CYC} = (${a} + ${b} + ${c})${NB}·${NB}${fr('1', '2')}[(${a} − ${b})<sup>2</sup> + (${b} − ${c})<sup>2</sup> + (${c} − ${a})<sup>2</sup>], so it vanishes exactly when ${a} + ${b} + ${c} = 0 or ${a} = ${b} = ${c}`,
    why: `For positive ${a}, ${b}, ${c} not all equal, the left-shift circulant is therefore negative.`,
    say: 'A sum of squares vanishes only term-by-term.',
  },
  // pp. 282–284
  {
    topic: 6,
    kind: 'remember',
    q: `How does ${w} factor the circulant ${vm([a, b, c], [b, c, a], [c, a, b])}?`,
    a: `Into three linear factors: −(${a} + ${b} + ${c})(${a} + ${w}${b} + ${sq(w)}${c})(${a} + ${sq(w)}${b} + ${w}${c}), with ${cu(w)} = 1 and 1 + ${w} + ${sq(w)} = 0. The last two multiply back to ${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')}`,
    why: `${vm(['1', '5', '7'], ['5', '7', '1'], ['7', '1', '5'])} = −(1 + 125 + 343 − 105) = −364, which Sarrus confirms.`,
    say: 'Two routes, one answer.',
  },
  // pp. 282, 285
  {
    topic: 6,
    kind: 'mixup',
    q: 'Left-shift or right-shift rows: which sign?',
    a: `Rows (${a}, ${b}, ${c}), (${b}, ${c}, ${a}), (${c}, ${a}, ${b}) give −(${CYC}); rows (${a}, ${b}, ${c}), (${c}, ${a}, ${b}), (${b}, ${c}, ${a}) give +(${CYC}). If unsure, evaluate the pattern at (1, 2, 3): −18 or +18`,
    why: `${vm(['2', '4', '6'], ['6', '2', '4'], ['4', '6', '2'])} is right-shift: +(8 + 64 + 216 − 144) = 144.`,
    say: null,
  },
  // pp. 284–285
  {
    topic: 6,
    kind: 'mistake',
    q: `Does ${cu(a)} + ${cu(b)} + ${cu(c)} = 3${I('abc')} force ${a} = ${b} = ${c}?`,
    a: `Only when ${a} + ${b} + ${c} ≠ 0. The real solutions are the plane ${a} + ${b} + ${c} = 0 together with the line ${a} = ${b} = ${c}`,
    why: `With ${a} + ${b} + ${c} ≠ 0 the sum of squares must vanish, and that forces equality.`,
    say: null,
  },
  // pp. 284–285
  {
    topic: 6,
    kind: 'shortcut',
    q: `For which real ${k} has ${k}${x} + 3${y} + 2${z} = 0, 2${x} + ${k}${y} + 3${z} = 0, 3${x} + 2${y} + ${k}${z} = 0 a non-trivial solution?`,
    a: `${k} = −5 only. The rows are right-shift, so ${D} = ${cu(k)} − 18${k} + 35 = (${k} + 5)(${sq(k)} − 5${k} + 7), and the quadratic has no real root. At ${k} = −5 every row sums to 0, so (1, 1, 1) is a solution`,
    why: `Recognise the circulant before expanding: ${D} arrives pre-factored.`,
    say: null,
  },

  // ── Additional B · Trigonometric Determinants ──
  // pp. 286, 288
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the first two strategies for a trigonometric determinant?',
    a: `Combination scan: expand compound angles; if a column becomes a combination of the others, subtract it off and a zero column remains. Substitution: entries 1, ${tf('cos', I('θ'))}, cos<sup>2</sup>${NB}${I('θ')} across three angles form a Vandermonde in the cosines`,
    why: `In ${vm([tf('sin', al), tf('cos', al), `sin(${al} + ${de})`], [tf('sin', be), tf('cos', be), `sin(${be} + ${de})`], [tf('sin', ga), tf('cos', ga), `sin(${ga} + ${de})`])} the third column is ${tf('cos', de)}${NB}${Cl('1')} + ${tf('sin', de)}${NB}${Cl('2')}: the value is 0 for every ${de}.`,
    say: 'Expand along the zero-richest line, then burn the Pythagorean identity.',
  },
  // pp. 286–287
  {
    topic: 7,
    kind: 'remember',
    q: 'And the other two?',
    a: `Difference and factor: ${Rr(i)} → ${Rr(i)} − ${Rr('1')}, turn each difference into a product (sin ${I('u')} − sin ${I('v')} = 2 cos ${fr(`${I('u')} + ${I('v')}`, '2')} sin ${fr(`${I('u')} − ${I('v')}`, '2')}), pull out the sine factors and close with a compound-angle formula. Zero-rich line: expand along it, then use sin<sup>2</sup> + cos<sup>2</sup> = 1`,
    why: `${vm(['1', tf('sin', al), tf('cos', al)], ['1', tf('sin', be), tf('cos', be)], ['1', tf('sin', ga), tf('cos', ga)])} = −4 sin ${fr(`${be} − ${al}`, '2')} sin ${fr(`${ga} − ${al}`, '2')} sin ${fr(`${ga} − ${be}`, '2')}.`,
    say: 'All four are old tools pointed at new shapes.',
  },
  // p. 287
  {
    topic: 7,
    kind: 'mixup',
    q: `Does that three-sine factorisation care about the order of ${al}, ${be}, ${ga}?`,
    a: 'Yes: swapping any two angles swaps two rows and flips the sign, as it must. Check the sign with numbers',
    why: `${al} = 0°, ${be} = 90°, ${ga} = 180°: directly −2, and −4 sin 45° sin 90° sin 45° = −2.`,
    say: null,
  },
  // p. 287
  {
    topic: 7,
    kind: 'mistake',
    q: 'Expanding along a row with a zero, which sign does the (2, 1) cofactor take?',
    a: `Minus: (−1)<sup>2+1</sup>. In the rotation-product determinant with row (−${tf('sin', be)}, ${tf('cos', be)}, 0), ${Mm('21')} = ${tf('sin', be)}, so ${Cc('21')} = −${tf('sin', be)} and ${D} = (−${tf('sin', be)})(−${tf('sin', be)}) + ${tf('cos', be)}${NB}${tf('cos', be)} = 1. Drop the sign and the identity is lost`,
    why: `The value is 1 for every ${al}, ${be}: the determinant is a product of two rotations.`,
    say: null,
  },
  // p. 288
  {
    topic: 7,
    kind: 'shortcut',
    q: `Evaluate ${vm([`sin<sup>2</sup>${NB}${al}`, `cos<sup>2</sup>${NB}${al}`, `cos 2${al}`], [`sin<sup>2</sup>${NB}${be}`, `cos<sup>2</sup>${NB}${be}`, `cos 2${be}`], [`sin<sup>2</sup>${NB}${ga}`, `cos<sup>2</sup>${NB}${ga}`, `cos 2${ga}`])}.`,
    a: `0 on sight: cos 2${I('θ')} = cos<sup>2</sup>${NB}${I('θ')} − sin<sup>2</sup>${NB}${I('θ')} makes the third column ${Cl('2')} − ${Cl('1')}`,
    why: 'Scan for a combination before any expansion.',
    say: null,
  },

  // ── Additional C · Alternants with a Missing Power ──
  // pp. 289–290
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you factor an alternant?',
    a: `Swapping two variables swaps two columns, so the determinant ${D} and the Vandermonde ${I('V')} both change sign: ${D} = ${I('V')} × ${I('Q')} with ${I('Q')} symmetric of degree deg ${D} − deg ${I('V')}. Write ${I('Q')} with unknown coefficients and specialise to fix them`,
    why: `${vm(['1', '1', '1'], [a, b, c], [I('bc'), I('ca'), I('ab')])} has degree 3, as does ${I('V')}, so it is a constant times ${V3}; at (1, 2, 3) both are 2.`,
    say: 'Brute expansion dies; two structural methods live.',
  },
  // pp. 289–291
  {
    topic: 8,
    kind: 'remember',
    q: 'What does “pad with x” do?',
    a: `When one power is missing, add a column headed by a new variable ${x} to make a full Vandermonde. Read it two ways (as a product, and expanded down the new column) and compare one coefficient`,
    why: `Rows 1, ${a}, ${sq(a)}, ${sup(a, '4')} in four variables give (${a} + ${b} + ${c} + ${d}) times their Vandermonde; at 1, 2, 3, 4 that is 10 × 12 = 120.`,
    say: 'One specialisation per unknown coefficient.',
  },
  // p. 291
  {
    topic: 8,
    kind: 'mixup',
    q: `Rows 1, ${a}, ${cu(a)} against rows 1, ${sq(a)}, ${cu(a)}: which symmetric factor?`,
    a: `Missing the square: (${a} + ${b} + ${c})${V3}. Missing the first power: (${I('ab')} + ${I('bc')} + ${I('ca')})${V3}`,
    why: 'At (2, 3, 5) the first is 10 × 6 = 60; at (1, 2, 3) the second is 11 × 2 = 22.',
    say: null,
  },
  // p. 291
  {
    topic: 8,
    kind: 'mistake',
    q: `Is the quotient for rows 1, ${a}, ${sup(a, '4')} just (${a} + ${b} + ${c})<sup>2</sup>?`,
    a: `No: the quotient has degree 2, a general symmetric ${I('A')}${sq(sb(I('e'), '1'))} + ${I('B')}${sb(I('e'), '2')} needing two specialisations; it comes out ${sq(a)} + ${sq(b)} + ${sq(c)} + ${I('ab')} + ${I('bc')} + ${I('ca')}`,
    why: `A quotient of degree 1 is a constant times ${a} + ${b} + ${c}, and one specialisation fixes it; degree 2 needs two.`,
    say: null,
  },
  // p. 291
  {
    topic: 8,
    kind: 'shortcut',
    q: `Evaluate ${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} at ${a} = 2, ${b} = 4, ${c} = 5.`,
    a: '6, straight from the Vandermonde product (4 − 2)(5 − 2)(5 − 4), with no expansion',
    why: 'Recognise the named form first.',
    say: null,
  },

  // ── Additional D · Concurrency, the Family of Lines, and Polygon Areas ──
  // pp. 292–293
  {
    topic: 9,
    kind: 'remember',
    q: `When are the lines ${sb(a, i)}${x} + ${sb(b, i)}${y} + ${sb(c, i)} = 0 (${i} = 1, 2, 3) concurrent?`,
    a: `If the first two are not parallel: exactly when ${vm([sb(a, '1'), sb(b, '1'), sb(c, '1')], [sb(a, '2'), sb(b, '2'), sb(c, '2')], [sb(a, '3'), sb(b, '3'), sb(c, '3')])} = 0. Substituting the first two lines’ intersection into the third gives the expansion along row 3`,
    why: `${x} + 2${y} − 4 = 0, 2${x} + ${y} − 5 = 0, 3${x} + 3${y} − 9 = 0: the determinant is 0 and the point is (2, 1).`,
    say: 'Always glance for parallelism before believing a zero.',
  },
  // pp. 293–294
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the family of lines through an intersection, and the area of a polygon?',
    a: `${sb(I('L'), '1')} + ${lam}${sb(I('L'), '2')} = 0 is a line through the meeting point of ${sb(I('L'), '1')} = 0 and ${sb(I('L'), '2')} = 0 for every ${lam}; substitute a further point to find ${lam}. Polygon with vertices in order round the boundary: ${fr('1', '2')}|(${sb(x, '1')}${sb(y, '2')} − ${sb(x, '2')}${sb(y, '1')}) + ⋯ + (${sb(x, n)}${sb(y, '1')} − ${sb(x, '1')}${sb(y, n)})|`,
    why: '(1, 2), (5, 5), (4, 8), (0, 7): the cyclic sum is 36, area 18.',
    say: 'No intersection coordinates ever need to be computed.',
  },
  // pp. 259, 292
  {
    topic: 9,
    kind: 'mixup',
    q: 'The concurrency determinant and the collinearity determinant: what goes in the rows?',
    a: `Concurrency: each row is a line’s coefficients (${sb(a, i)}, ${sb(b, i)}, ${sb(c, i)}). Collinearity: each row is a point (${sb(x, i)}, ${sb(y, i)}, 1). Both are set to 0`,
    why: `The family ${sb(I('L'), '1')} + ${lam}${sb(I('L'), '2')} = 0 gives every line through the point except ${sb(I('L'), '2')} itself.`,
    say: null,
  },
  // pp. 293–294
  {
    topic: 9,
    kind: 'mistake',
    q: `${x} + ${y} − 1 = 0, ${x} + ${y} − 2 = 0, 2${x} + 2${y} − 5 = 0 have determinant 0: are they concurrent?`,
    a: 'No: they are parallel, with no common point. The determinant is 0 because two columns are proportional; zero means concurrency only when the lines are pairwise non-parallel',
    why: `2${x} − 3${y} + 5 = 0, 4${x} − 6${y} + 9 = 0, 2${x} − 2${y} + 3 = 0 have determinant 2: not concurrent, and the first two are parallel anyway.`,
    say: null,
  },
  // p. 294
  {
    topic: 9,
    kind: 'shortcut',
    q: `The line through the intersection of ${x} + 2${y} − 3 = 0 and 2${x} − ${y} − 4 = 0 and the origin?`,
    a: `2${x} − 11${y} = 0: the family (${x} + 2${y} − 3) + ${lam}(2${x} − ${y} − 4) = 0 through (0, 0) needs −3 − 4${lam} = 0, ${lam} = −${fr('3', '4')}`,
    why: 'The intersection point itself was never found.',
    say: null,
  },

  // ── Additional E · What to Actually Do When Δ = 0 ──
  // p. 294
  {
    topic: 10,
    kind: 'remember',
    q: `What do you do when ${D} = 0 for three equations in three unknowns?`,
    a: `Screen with the ${Di}: any non-zero one means no solution. If all are 0, row-reduce [${A} ∣ ${B}], find the ${r} independent equations, give each of the ${n} − ${r} free variables a parameter and back-substitute. For ${A}${X} = ${O} the solution space has dimension ${n} − ${r}`,
    why: `${x} + ${y} + ${z} = 6, ${x} + 2${y} + 3${z} = 14, 2${x} + 3${y} + 4${z} = 20: all four determinants are 0, and the solutions are (${t} − 2, 8 − 2${t}, ${t}).`,
    say: `Any nonzero ${Di} certifies inconsistency immediately.`,
  },
  // pp. 295–296
  {
    topic: 10,
    kind: 'remember',
    q: `When is “all ${Di} = 0” enough for infinitely many solutions?`,
    a: `When ${D} = 0 but some 2 × 2 minor of ${A} is non-zero (rank exactly 2): then the system is consistent iff ${sb(D, '1')} = ${sb(D, '2')} = ${sb(D, '3')} = 0, with infinitely many solutions. If all rows of ${A} are proportional (rank 1), the screen can read zero and the system still be inconsistent`,
    why: `${x} + ${y} + ${z} = 1, 2${x} + 2${y} + 2${z} = 3, 3${x} + 3${y} + 3${z} = 4: every ${Di} is 0, yet it asks ${x} + ${y} + ${z} to be 1, ${fr('3', '2')} and ${fr('4', '3')} at once.`,
    say: `Elimination is the judge; the ${Di} are only the bailiff.`,
  },
  // p. 297
  {
    topic: 10,
    kind: 'mixup',
    q: 'Infinitely many solutions: a line or a plane?',
    a: `Count the free parameters, ${n} − ${r}. One independent equation leaves a plane (two parameters); two leave a line (one parameter)`,
    why: `${x} + ${y} + ${z} = 0, ${x} − ${y} + ${z} = 0, 2${x} + 2${z} = 0: ${r} = 2, the line (${t}, 0, −${t}).`,
    say: null,
  },
  // p. 296
  {
    topic: 10,
    kind: 'mistake',
    q: `${x} + ${y} + ${z} = 6, ${x} + 2${y} + 3${z} = 14, 2${x} + 3${y} + 4${z} = 21: infinitely many again, since ${D} = 0?`,
    a: `No: ${D1} = 1 ≠ 0, so there is no solution. Elimination agrees: the pairs give ${y} + 2${z} = 8 and ${y} + 2${z} = 9`,
    why: 'The same left sides with right side 20 give a one-parameter family: the constants decide.',
    say: null,
  },
  // p. 296
  {
    topic: 10,
    kind: 'shortcut',
    q: `${x} + ${y} + ${z} = 6, ${x} + 2${y} + 3${z} = 10, ${x} + 2${y} + ${lam}${z} = ${I('μ')}: the full discussion?`,
    a: `${D} = ${lam} − 3. ${lam} ≠ 3: unique. ${lam} = 3: the last two left sides agree, so consistent iff ${I('μ')} = 10, then infinitely many, (2 + ${t}, 4 − 2${t}, ${t}); for ${I('μ')} ≠ 10, none`,
    why: `Factor ${D}, test the critical value, then count the family instead of merely asserting “infinitely many”.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 298
  {
    topic: 11,
    kind: 'shortcut',
    q: `For which ${al} does ${al}${x} + 2${y} + 2${z} = 5, 2${al}${x} + 3${y} + 5${z} = 8, 4${x} + ${al}${y} + 6${z} = 10 fail to have a unique solution?`,
    a: `${al} = 2 and ${al} = −8, the roots of ${D} = −(${al} + 8)(${al} − 2). Test a ${Di} at each: ${D1} = 16 at ${al} = 2 and 106 at ${al} = −8, so both give no solution`,
    why: `Roots of ${D} are only candidates for trouble; one ${Di} at each root settles none against infinitely many.`,
    say: 'Never assume which.',
  },
  // p. 299
  {
    topic: 11,
    kind: 'remember',
    q: `${sb(b, I('ij'))} = 3<sup>${i}+${j}−2</sup>${aij} and ${bar(B)} = 81: what is ${DA}?`,
    a: `${fr('1', '9')}. Split the factor into a row part and a column part, 3<sup>${i}−1</sup> × 3<sup>${j}−1</sup>: ${B} = diag(1, 3, 9)${NB}${A}${NB}diag(1, 3, 9), so ${bar(B)} = 3<sup>6</sup>${DA}`,
    why: `${sb(b, I('ij'))} = 2<sup>${i}+${j}</sup>${aij} costs 2<sup>12</sup>, not 2<sup>36</sup>: pulling out all nine entry factors is the trap.`,
    say: 'Never pull one global factor.',
  },
  // pp. 299–300
  {
    topic: 11,
    kind: 'shortcut',
    q: `${M} is 3 × 3 and invertible with ${sup(M, '−1')} = adj(adj${NB}${M}): what follows?`,
    a: `adj(adj${NB}${M}) = ${bar(M)}${M}, so ${sq(M)} = ${fr('1', bar(M))}${ID}; taking determinants, (det${NB}${M})<sup>5</sup> = 1, so det${NB}${M} = 1, ${sq(M)} = ${ID} and (adj${NB}${M})<sup>2</sup> = adj(${sq(M)}) = ${ID}`,
    why: `For order 3: ${bar(ADJ)} = ${sq(DA)}, ${bar(`adj(${ADJ})`)} = ${sup(DA, '4')}, adj(${ADJ}) = ${DA}${A}.`,
    say: null,
  },
  // pp. 302–303
  {
    topic: 11,
    kind: 'mistake',
    q: `(${k} + 1)${x} + 8${y} = 4${k}, ${k}${x} + (${k} + 3)${y} = 3${k} − 1: for how many ${k} is there no solution?`,
    a: `One. ${D} = (${k} − 1)(${k} − 3), but at ${k} = 1 the equations are the same line (infinitely many); only ${k} = 3 is inconsistent. “Both” is the waiting distractor`,
    why: 'A linear system has exactly 0, 1 or infinitely many solutions: “more than two solutions” means infinitely many.',
    say: null,
  },
  // p. 302
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which adjoint and skew-symmetric statements are traps?',
    a: `${bar(ADJ)} = ${sup(DA, n)} (it is ${sup(DA, `${n}−1`)}); adj(${I('AB')}) = (${ADJ})(adj${NB}${B}) (it is reversed); adj(${ADJ}) = ${DA}(${ADJ})<sup>−1</sup> (it is ${sup(DA, `${n}−2`)}${A}); and any premise of a non-singular 3 × 3 skew-symmetric matrix, which cannot exist`,
    why: 'Homogeneous systems: the option “always has a non-trivial solution” is false; only the trivial one always exists.',
    say: null,
  },
];
