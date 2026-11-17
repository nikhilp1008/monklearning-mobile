import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional topics A–E, pp. 222–236 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 3:
 * Matrices — Additional Topics" part's Addenda A to E, with the book's letters.
 * Its heading is not copied; its p. 222 opening paragraphs are the first
 * paragraphs of A's "Introduction". Each addendum's opening text is its
 * "Introduction" part, then its own headings: Method, the run of "Example X.N"
 * worked examples (one part, "Worked examples"), and "Practice — Addendum X"
 * ("Practice", answers set against their questions). The closing paragraph
 * printed after E's answers (p. 236, before Addendum P) is E's last part,
 * "Closing note". The book's example numbers in running text are reworded to
 * what the reader shows. The book's displayed equations stay in the prose (no
 * formula cards, as the other Chapter 3 files). Every grid is a <bmat> (rows
 * <r>, cells <c>); an augmented block [A | I] is one <bmat> with a "|" cell; a
 * row operation is written before the arrow that carries one block to the next.
 * The book's brace (D) is written one line per piece, its underbrace (E.2) as
 * a bracket. No drawings on these pages. Every fraction is stacked (<frac>);
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A matrix in square brackets: one array per row, one string per cell. */
const bm = (...rows: string[][]) => `<bmat>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</bmat>`;
/** An augmented block [L | R]: the two blocks' rows side by side, a bar between them. */
const aug = (...rows: [string[], string[]][]) => bm(...rows.map(([l, r]) => [...l, '|', ...r]));
/** A row operation written before the arrow that carries one block to the next. */
const op = (s: string) => `(${s})${NB}⟶`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const N = I('N');
const O = I('O');
const X = I('X');
const ID = I('I');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const lam = I('λ');
const th = I('θ');
const AB = I('AB');
const BA = I('BA');
const AX = I('AX');
const XA = I('XA');

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sp = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const T = (s: string) => `${s}<sup>T</sup>`;
const inv = (s: string) => `${s}<sup>−1</sup>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cu = (s: string) => `${s}<sup>3</sup>`;
const AI = inv(A);
const AT = T(A);
const BT = T(B);
const N2 = sq(N);
const N3 = cu(N);
const Nk = sp(N, k);
const lI = `${lam}${ID}`;
/** A short pair or triple kept on one line. */
const pr = (...s: string[]) => `(${s.join(`,${NB}`)})`;
/** A short set kept on one line. */
const set = (...s: string[]) => `{${s.join(`,${NB}`)}}`;
const R = (s: string) => sb(I('R'), s);
const R1 = R('1');
const R2 = R('2');
const R3 = R('3');
const tr = (s: string) => `tr(${s})`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const In = sb(ID, n);
const I3 = sb(ID, '3');
const Rt = sb(I('R'), th);
const RtT = `${Rt}<sup>T</sup>`;
const RtI = `${Rt}<sup>−1</sup>`;
const COS = `cos${NB}${th}`;
const SIN = `sin${NB}${th}`;
const ABS_A = `|${WJ}${A}|`;
const ar = (s: string) => sb(a, I(s));
const aii = ar('ii');
const ari2 = `${a}<sup>2</sup><sub>${I('ri')}</sub>`;
const AXB = `${AX} = ${B}`;
const H = fr('1', '2');
const mH = `−${fr('1', '2')}`;
const TEN = fr('1', '10');

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 222–225 ────────────────
  {
    n: 'A',
    title: 'Near-Diagonal Powers: the Binomial Theorem for Matrices',
    extra: true,
    kalam: 'Every method below is the entry-by-entry equality of Topic 00, the transpose-flip of Topic 02, or the row-operation engine of Topic 03, applied one layer deeper.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter taught you to build matrices, operate on them, split them into symmetric and skew parts, and invert them by row operations. Five examinable patterns still stand outside the door. Additional topic A computes high powers and inverses of near-diagonal matrices by nilpotency: the binomial theorem for matrices, which turns a 2025th power into three terms. Additional topic B solves matrix equations and linear systems through the inverse, with strict side discipline. Additional topic C counts structured matrices, the objective-question favourite. Additional topic D derives how inversion interacts with symmetry and works through orthogonal matrices. Additional topic E proves the trace identities the chapter asserts, and uses them to settle an impossibility that JEE Advanced loves.<br><br>Nothing here is new theory. Every method below is the entry-by-entry equality of Topic 00, the transpose-flip of Topic 02, or the row-operation engine of Topic 03, applied one layer deeper.`,
      },
      {
        t: 'p',
        html: `Topic 01 handles powers by pattern-spotting (${sq(A)} = ${ID} collapse, unitriangular counting) and Topic 04 handles matrix polynomials. What neither does is the general tool behind both: if a matrix splits as a scalar multiple of ${ID} plus a nilpotent piece, every power and the inverse come from two truncated series. JEE Main asks for ${sp(A, '100')} this way almost yearly ${ESTIMATE}; JEE Advanced hides the same structure inside inverses and summations.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Setup.</b> Write the square matrix as<br>${A} = ${lI} + ${N},<br>where ${lam} is the repeated diagonal value and ${N} = ${A} − ${lI}. Check whether some power of ${N} vanishes: if ${Nk} = ${O}, call ${k} the index of ${N}.`,
      },
      {
        t: 'p',
        html: `<b>Why the ordinary binomial theorem applies.</b> Expanding honestly,<br>${sq(`(${B} + ${C})`)} = ${sq(B)} + ${B}${C} + ${C}${B} + ${sq(C)},<br>and the cross terms collect only when ${I('BC')} = ${I('CB')}. Here ${C} = ${N} and ${B} = ${lI}, and a scalar multiple of the identity commutes with every matrix: (${lI})${N} = ${lam}${N} = ${N}(${lI}). So the usual binomial expansion is valid term for term:<br>${sp(`(${lI} + ${N})`, n)} = ${sp(lam, n)}${ID} + ${bn(n, '1')}${sp(lam, `${n}−1`)}${N}<br>+ ${bn(n, '2')}${sp(lam, `${n}−2`)}${N2} + ⋯ + ${sp(N, n)}.`,
      },
      {
        t: 'p',
        html: `<b>Truncation.</b> Every term with ${r}${NB}≥${NB}${k} contains ${sp(N, r)} = ${O}, so the infinite-looking sum stops at ${r} = ${k} − 1:<br>${sp(`(${lI} + ${N})`, n)} = ${SUM(`${r}=0`, `${k}−1`)} ${bn(n, r)}${sp(lam, `${n}−${r}`)}${sp(N, r)}.`,
      },
      {
        t: 'formula',
        kicker: 'Binomial theorem for matrices',
        main: `${sp(`(${lI} + ${N})`, n)} = ${SUM(`${r}=0`, `${k}−1`)} ${bn(n, r)}${sp(lam, `${n}−${r}`)}${sp(N, r)}<br>If ${N2} = ${O}: ${sp(`(${lI} + ${N})`, n)} = ${sp(lam, n)}${ID} + ${n}${sp(lam, `${n}−1`)}${N}`,
        legend: [`${N} = a matrix with ${Nk} = ${O} (${k} = its index)`, `${lam} = the repeated diagonal value`, `${n} = a positive integer`],
        note: null,
      },
      {
        t: 'table',
        title: 'The two workhorse cases',
        head: ['Structure', 'Power formula'],
        rows: [
          [`${N2} = ${O}`, `${sp(`(${lI} + ${N})`, n)} = ${sp(lam, n)}${ID} + ${n}${sp(lam, `${n}−1`)}${N}`],
          [`${N3} = ${O}`, `${sp(`(${lI} + ${N})`, n)} = ${sp(lam, n)}${ID} + ${n}${sp(lam, `${n}−1`)}${N} + ${bn(n, '2')}${sp(lam, `${n}−2`)}${N2}`],
        ],
      },
      {
        t: 'p',
        html: `<b>Inverses from the same structure.</b> For ${N2} = ${O}, claim ${inv(`(${ID} + ${N})`)} = ${ID} − ${N}. Verify directly, never assert:<br>(${ID} + ${N})(${ID} − ${N}) = ${ID} − ${N} + ${N} − ${N2}<br>= ${ID} − ${O} = ${ID}.`,
      },
      {
        t: 'p',
        html: `In general, for ${Nk} = ${O}, the finite alternating series works:<br>${inv(`(${ID} + ${N})`)} = ${ID} − ${N} + ${N2} − ⋯ + ${sp('(−1)', `${k}−1`)}${sp(N, `${k}−1`)},<br>because the product telescopes:<br>(${ID} + ${N})(${ID} − ${N} + ${N2} − ⋯) = ${ID} ± ${Nk} = ${ID}.`,
      },
      {
        t: 'formula',
        kicker: 'Inverse of I + N',
        main: `${inv(`(${ID} + ${N})`)} = ${ID} − ${N} + ${N2} − ⋯ + ${sp('(−1)', `${k}−1`)}${sp(N, `${k}−1`)}<br>If ${N2} = ${O}: ${inv(`(${ID} + ${N})`)} = ${ID} − ${N}`,
        legend: [`${N} = a matrix with ${Nk} = ${O} (${k} = its index)`],
        note: null,
      },
      {
        t: 'p',
        html: 'This recovers Topic 04’s polynomial trick from a pattern, and works even when no polynomial equation for <i>A</i> has been handed to you.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${sp(A, '100')} for ${A} = ${bm(['1', '2'], ['0', '1'])}.`,
        steps: [
          `Split: ${A} = ${ID} + ${N} with ${N} = ${bm(['0', '2'], ['0', '0'])}. Square it:<br>${N2} = ${bm(['0', '2'], ['0', '0'])}${bm(['0', '2'], ['0', '0'])} = ${bm(['0', '0'], ['0', '0'])} = ${O}.`,
          `Index 2, so with ${lam} = 1:<br>${sp(A, '100')} = ${ID} + 100${N} = ${bm(['1', '200'], ['0', '1'])}.`,
          `Compare with the chapter’s induction pattern for ${bm(['1', '1'], ['0', '1'])}: same method, no guessing, and the top-right entry 100 × 2 = 200 comes straight from the formula.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `For ${A} = ${bm(['1', '1', '1'], ['0', '1', '1'], ['0', '0', '1'])}, find ${cu(A)} and ${AI}.`,
        steps: [
          `Here ${lam} = 1 and<br>${N} = ${A} − ${ID} = ${bm(['0', '1', '1'], ['0', '0', '1'], ['0', '0', '0'])}.`,
          `Compute the powers before trusting any formula. Row 1 of ${N} is ${pr('0', '1', '1')}; against column 2 of ${N}, ${pr('1', '0', '0')}, it gives 0, and against column 3, ${pr('1', '1', '0')}, it gives 1:<br>${N2} = ${bm(['0', '0', '1'], ['0', '0', '0'], ['0', '0', '0'])},<br>${N3} = ${N} ⋅ ${N2} = ${O}.`,
          `So the index is 3: the naive guess ${N2} = ${O} would have been wrong, which is exactly why the squaring step is not optional.`,
          `<b>Power.</b> With ${n} = 3:<br>${cu(A)} = ${ID} + 3${N} + 3${N2} = ${bm(['1', '3', '6'], ['0', '1', '3'], ['0', '0', '1'])}.`,
          `Spot-check the corner entry by hand. First<br>${sq(A)} = ${ID} + 2${N} + ${N2} = ${bm(['1', '2', '3'], ['0', '1', '2'], ['0', '0', '1'])}.<br>Then the ${pr('1', '3')} entry of ${cu(A)} = ${sq(A)}${A} is row 1 of ${sq(A)} dotted with column 3 of ${A}: ${pr('1', '2', '3')} ⋅ ${pr('1', '1', '1')} = 6. The formula agrees: 3${N} contributes 3 ⋅ 1 and 3${N2} contributes 3 ⋅ 1, total 6.`,
          `<b>Inverse.</b> By the alternating series with ${k} = 3:<br>${AI} = ${ID} − ${N} + ${N2} = ${bm(['1', '−1', '0'], ['0', '1', '−1'], ['0', '0', '1'])}.`,
          `Verify one full row against ${A}. Row 1 of ${A} is ${pr('1', '1', '1')}; dotted with the three columns of the candidate gives 1, then −1 + 1 = 0, then 0 − 1 + 1 = 0. Correct. Three row-operation moves saved.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find ${sp(A, '50')} for ${A} = ${bm(['1', '5'], ['0', '1'])}.`,
            a: `${N2} = ${O}, so ${sp(A, '50')} = ${ID} + 50${N} = ${bm(['1', '250'], ['0', '1'])}.`,
          },
          {
            q: `Find ${sp(A, '7')} for ${A} = ${bm(['3', '1'], ['0', '3'])}.`,
            a: `${A} = 3${ID} + ${N} with ${N2} = ${O}, so<br>${sp(A, '7')} = ${sp('3', '7')}${ID} + 7 ⋅ ${sp('3', '6')}${N} = ${bm(['2187', '5103'], ['0', '2187'])}.`,
          },
          {
            q: `Show that ${N} = ${bm(['0', '1', '0'], ['0', '0', '1'], ['0', '0', '0'])} has index 3, and hence find ${inv(`(${ID} − ${N})`)}.`,
            a: `Direct multiplication gives ${N2} = ${bm(['0', '0', '1'], ['0', '0', '0'], ['0', '0', '0'])} and ${N3} = ${O}, index 3. Then<br>${inv(`(${ID} − ${N})`)} = ${ID} + ${N} + ${N2} = ${bm(['1', '1', '1'], ['0', '1', '1'], ['0', '0', '1'])}.<br>(Replacing ${N} by −${N} in the alternating series for ${inv(`(${ID} + ${N})`)} makes every sign positive.)`,
          },
          {
            q: `For ${A} = ${bm(['1', '1'], ['0', '1'])}, evaluate ${sp(A, '2025')} − 2025${A} + 2024${ID} without multiplying anything out beyond one power.`,
            a: `${A} = ${ID} + ${N} with ${N2} = ${O}, so ${sp(A, '2025')} = ${ID} + 2025${N}. Then<br>${sp(A, '2025')} − 2025${A} + 2024${ID}<br>= (${ID} + 2025${N}) − 2025(${ID} + ${N}) + 2024${ID} = ${O}.`,
          },
          {
            q: `For ${A} = ${bm(['2', '1', '1'], ['0', '2', '1'], ['0', '0', '2'])}, write ${A} = 2${ID} + ${N}, find ${N2} and ${N3}, and express ${sp(A, '10')} as a combination of ${ID}, ${N}, ${N2}.`,
            a: `${N} = ${bm(['0', '1', '1'], ['0', '0', '1'], ['0', '0', '0'])}, so ${N2} = ${bm(['0', '0', '1'], ['0', '0', '0'], ['0', '0', '0'])} and ${N3} = ${O}. Hence<br>${sp(A, '10')} = ${sp('2', '10')}${ID} + 10 ⋅ ${sp('2', '9')}${N} + 45 ⋅ ${sp('2', '8')}${N2}<br>= 1024${NB}${ID} + 5120${NB}${N} + 11520${NB}${N2}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 226–229 ────────────────
  {
    n: 'B',
    title: 'Matrix Equations and Systems Through the Inverse',
    extra: true,
    kalam: 'The entire skill is one rule applied with discipline.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 builds ${AI} but never spends it. On the CBSE board, spending it is the question: “express the system as ${AXB} and solve” is a fixed 4–6 mark item ${ESTIMATE}, and JEE Main tests the same mechanics with the side of multiplication swapped. The entire skill is one rule applied with discipline.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The governing rule.</b> If ${A} is invertible and<br>${AXB},${NB}${NB}then ${X} = ${AI}${B}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Multiply both sides of ${AXB} by ${AI} <b>on the left</b>:<br>${AI}(${AX}) = ${AI}${B}<br>⟹ (${AI}${A})${X} = ${AI}${B}<br>⟹ ${ID}${X} = ${AI}${B}.`,
      },
      {
        t: 'p',
        html: `<b>Side discipline.</b> Multiplying ${AXB} on the right by ${AI} gives<br>${AX}${AI} = ${B}${AI},<br>which isolates nothing: ${X} is trapped between two factors. The inverse must strike from the side ${A} occupies:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Equation', 'Solve by', 'Result'],
        rows: [
          [AXB, 'premultiply both sides', `${X} = ${AI}${B}`],
          [`${XA} = ${B}`, 'postmultiply both sides', `${X} = ${B}${AI}`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Solving matrix equations',
        main: `${AXB} ⇒ ${X} = ${AI}${B}<br>${XA} = ${B} ⇒ ${X} = ${B}${AI}`,
        legend: [`${A} = an invertible matrix`, `${X} = the unknown matrix`, `${B} = the known matrix`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Uniqueness.</b> If ${A}${sb(X, '1')} = ${B} and ${A}${sb(X, '2')} = ${B}, subtract: ${A}(${sb(X, '1')} − ${sb(X, '2')}) = ${O}. Premultiply by ${AI}: ${sb(X, '1')} − ${sb(X, '2')} = ${O}. So when ${A} is invertible, the solution exists and is unique for every ${B}: no consistency check needed. (What happens when ${A} is singular waits for Chapter 4’s determinant test.)`,
      },
      {
        t: 'p',
        html: `<b>Encoding a linear system.</b> The system<br>${sb(a, '1')}${x} + ${sb(b, '1')}${y} + ${sb(c, '1')}${z} = ${sb(d, '1')},<br>${sb(a, '2')}${x} + ${sb(b, '2')}${y} + ${sb(c, '2')}${z} = ${sb(d, '2')},<br>${sb(a, '3')}${x} + ${sb(b, '3')}${y} + ${sb(c, '3')}${z} = ${sb(d, '3')}<br>is exactly ${AXB} with ${A} built from coefficients (rows = equations), ${X} the column of unknowns, ${B} the column of constants. The product rule guarantees the match: entry ${i} of ${AX} is the dot product of equation-row ${i} with ${pr(x, y, z)}, which is the left side of equation ${i}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Express the following system as ${AXB}, find ${AI} by elementary row operations, and hence solve it.<br>${x} − ${y} + ${z} = 4,${NB}${NB}2${x} + ${y} − 3${z} = 0,${NB}${NB}${x} + ${y} + ${z} = 2.`,
        steps: [
          `<b>Encoding.</b><br>${A} = ${bm(['1', '−1', '1'], ['2', '1', '−3'], ['1', '1', '1'])},${NB}${NB}${X} = ${bm([x], [y], [z])},${NB}${NB}${B} = ${bm(['4'], ['0'], ['2'])}.`,
          `<b>Inverting.</b> Reduce [${A} ∣ ${ID}]:<br>${aug([['1', '−1', '1'], ['1', '0', '0']], [['2', '1', '−3'], ['0', '1', '0']], [['1', '1', '1'], ['0', '0', '1']])}<br>${op(`${R2} → ${R2} − 2${R1}, ${R3} → ${R3} − ${R1}`)}<br>${aug([['1', '−1', '1'], ['1', '0', '0']], [['0', '3', '−5'], ['−2', '1', '0']], [['0', '2', '0'], ['−1', '0', '1']])}`,
          `${op(`${R3} → ${H}${R3}`)}<br>${aug([['1', '−1', '1'], ['1', '0', '0']], [['0', '3', '−5'], ['−2', '1', '0']], [['0', '1', '0'], [mH, '0', H]])}<br>${op(`${R1} → ${R1} + ${R3}, ${R2} → ${R2} − 3${R3}`)}<br>${aug([['1', '0', '1'], [H, '0', H]], [['0', '0', '−5'], [mH, '1', `−${fr('3', '2')}`]], [['0', '1', '0'], [mH, '0', H]])}`,
          `${op(`${R2} → −${fr('1', '5')}${R2}`)}<br>${aug([['1', '0', '1'], [H, '0', H]], [['0', '0', '1'], [TEN, `−${fr('1', '5')}`, fr('3', '10')]], [['0', '1', '0'], [mH, '0', H]])}<br>${op(`${R1} → ${R1} − ${R2}`)}<br>${aug([['1', '0', '0'], [fr('2', '5'), fr('1', '5'), fr('1', '5')]], [['0', '0', '1'], [TEN, `−${fr('1', '5')}`, fr('3', '10')]], [['0', '1', '0'], [mH, '0', H]])}`,
          `The pivots in rows 2 and 3 sit in the wrong columns, so interchange the last two rows:<br>${op(`${R2} ↔ ${R3}`)}<br>${aug([['1', '0', '0'], [fr('2', '5'), fr('1', '5'), fr('1', '5')]], [['0', '1', '0'], [mH, '0', H]], [['0', '0', '1'], [TEN, `−${fr('1', '5')}`, fr('3', '10')]])}<br>= [${ID} ∣ ${AI}].`,
          `Reading off and clearing denominators:<br>${AI} = ${TEN}${bm(['4', '2', '2'], ['−5', '0', '5'], ['1', '−2', '3'])}.`,
          `<b>Verification (one multiplication, always).</b> Row 2 of ${A} against column 1 of the bracketed matrix: 2(4) + 1(−5) − 3(1) = 0; against column 2: 2(2) + 0 − 3(−2) = 10; against column 3: 2(2) + 5 − 9 = 0. Divided by 10, that is ${pr('0', '1', '0')}, the second row of ${ID}. Spot-checks pass.`,
          `<b>Solving.</b><br>${X} = ${AI}${B}<br>= ${TEN}${bm(['4', '2', '2'], ['−5', '0', '5'], ['1', '−2', '3'])}${bm(['4'], ['0'], ['2'])}<br>= ${TEN}${bm(['16 + 0 + 4'], ['−20 + 0 + 10'], ['4 + 0 + 6'])} = ${bm(['2'], ['−1'], ['1'])}.`,
          `So ${x} = 2, ${y} = −1, ${z} = 1. <b>Check in the original system:</b> equation 1 gives 2 + 1 + 1 = 4; equation 2 gives 4 − 1 − 3 = 0; equation 3 gives 2 − 1 + 1 = 2. All hold.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Speed Trap',
        q: `Given ${A} = ${bm(['1', '1'], ['0', '1'])} and ${XA} = ${B} where ${B} = ${bm(['1', '2'], ['3', '4'])}, find ${X}.`,
        steps: [
          `${A} sits on the <b>right</b> of ${X}, so postmultiply: ${X} = ${B}${AI}. From Additional topic A (or one row reduction), ${AI} = ${bm(['1', '−1'], ['0', '1'])}. Then<br>${X} = ${B}${AI} = ${bm(['1', '2'], ['3', '4'])}${bm(['1', '−1'], ['0', '1'])} = ${bm(['1', '1'], ['3', '1'])}.`,
          `<b>Why the reflex answer fails.</b> The reflex is ${X} = ${AI}${B}: right equation shape, wrong side. Compute it to see the damage:<br>${AI}${B} = ${bm(['1', '−1'], ['0', '1'])}${bm(['1', '2'], ['3', '4'])} = ${bm(['−2', '−2'], ['3', '4'])} ≠ ${X}.`,
          `Different matrix entirely. The check ${XA} = ${B} catches the slip in seconds; the habit of asking “which side is ${A} on?” prevents it.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve by the inverse method: 2${x} + ${y} = 5, 3${x} + 2${y} = 11.`,
            a: `${A} = ${bm(['2', '1'], ['3', '2'])}, ${AI} = ${bm(['2', '−1'], ['−3', '2'])}, so<br>${X} = ${AI}${B} = ${bm(['10 − 11'], ['−15 + 22'])} = ${bm(['−1'], ['7'])},<br>giving ${x} = −1, ${y} = 7. Check: −2 + 7 = 5 and −3 + 14 = 11.`,
          },
          {
            q: `Solve ${XA} = ${B} for ${A} = ${bm(['2', '1'], ['1', '1'])}, ${B} = ${bm(['3', '5'], ['2', '4'])}.`,
            a: `${AI} = ${bm(['1', '−1'], ['−1', '2'])}, and ${X} = ${B}${AI} = ${bm(['−2', '7'], ['−2', '6'])}. Check row 1: (−2)(2) + 7(1) = 3 and (−2)(1) + 7(1) = 5. Correct.`,
          },
          {
            q: `Explain in two lines why, when ${A} is invertible, ${AXB} cannot have two different solutions.`,
            a: `Suppose ${A}${sb(X, '1')} = ${B} and ${A}${sb(X, '2')} = ${B}. Subtracting, ${A}(${sb(X, '1')} − ${sb(X, '2')}) = ${O}. Premultiplying by ${AI} gives ${sb(X, '1')} − ${sb(X, '2')} = ${O}, so ${sb(X, '1')} = ${sb(X, '2')}.`,
          },
          {
            q: `A student solves ${XA} = ${B} as ${X} = ${AI}${B}. Using the matrices of this topic’s second worked example, show numerically that this fails, and identify the exact step where the logic breaks.`,
            a: `The true answer is ${X} = ${bm(['1', '1'], ['3', '1'])}; the student’s ${AI}${B} = ${bm(['−2', '−2'], ['3', '4'])} differs. The broken step is the direction of multiplication: cancelling ${A} requires multiplying by ${AI} from the side ${A} occupies, and here ${A} is on the right of ${X}, so the correct move is ${X} = ${B}${AI}.`,
          },
          {
            q: `Write the system ${x} + ${y} + ${z} = 6, ${x} − ${y} + ${z} = 2, 2${x} + ${y} − ${z} = 1 in the form ${AXB}, naming ${A}, ${X}, ${B}. (No need to solve.)`,
            a: `${A} = ${bm(['1', '1', '1'], ['1', '−1', '1'], ['2', '1', '−1'])}, ${X} = ${bm([x], [y], [z])}, ${B} = ${bm(['6'], ['2'], ['1'])}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 229–231 ────────────────
  {
    n: 'C',
    title: 'Counting Structured Matrices',
    extra: true,
    kalam: 'Once you know how many cells are free, the count is one exponentiation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 00 counts all matrices (${sp(k, I('mn'))}) and Topic 02 counts entries available in symmetric and skew matrices, but neither combines the two ideas, which is precisely what JEE Main asks. Once you know how many cells are free, the count is one exponentiation.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The principle.</b> A structured matrix is completely determined by its free cells, and the free cells are filled independently. If there are ${f} free cells and each accepts ${k} values, the number of such matrices is<br>${sp(k, f)}.`,
      },
      {
        t: 'p',
        html: '<b>Free-cell counts</b> (from Topic 02, Derivation 3, extended to other structures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Structure (order n)', 'Free cells f', 'Count over a k-set'],
        rows: [
          ['arbitrary', sq(n), sp(k, sq(n))],
          ['symmetric', fr(`${n}(${n} + 1)`, '2'), sp(k, `${n}(${n}+1)/2`)],
          ['skew-symmetric', fr(`${n}(${n} − 1)`, '2'), sp(k, `${n}(${n}−1)/2`)],
          ['diagonal', n, sp(k, n)],
          ['scalar', '1', k],
        ],
      },
      {
        t: 'formula',
        kicker: 'Counting structured matrices',
        main: `Number of matrices = ${sp(k, f)}`,
        legend: [`${f} = the number of free cells`, `${k} = the number of values each cell accepts`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Two cautions the table hides.</b><br>First, the skew, diagonal and scalar counts assume 0 belongs to the allowed set (the skew diagonal, and every off-diagonal cell of a diagonal or scalar matrix, must read 0). Second, for skew-symmetric matrices each free cell really carries a pair ${pr(a, `−${a}`)}, so the allowed set must be closed under negation; otherwise the honest count is smaller than ${sp(k, f)}. Practice question 5 below tests the closure caveat.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(i) How many symmetric matrices of order 3 have entries from ${set('0', '1')}? (ii) How many skew-symmetric matrices of order 3 have entries from ${set('−1', '0', '1')}?`,
        steps: [
          `<b>(i)</b> Free cells: ${f} = ${fr('3 ⋅ 4', '2')} = 6 (three diagonal, three above it), each independently 0 or 1:<br>${sp('2', '6')} = 64.`,
          `<b>(ii)</b> Free cells: ${f} = ${fr('3 ⋅ 2', '2')} = 3: the three above-diagonal positions, since the diagonal is forced to 0. Each pair reads ${pr(a, `−${a}`)}, and choosing ${a} ∈ ${set('−1', '0', '1')} automatically places −${a} in the allowed set too. So<br>${sp('3', '3')} = 27.`,
          `Sanity check on the structure: pick ${sb(a, '12')} = 1, ${sb(a, '13')} = 0, ${sb(a, '23')} = −1; the matrix is then forced everywhere else, with diagonal 0 and lower half ${pr(sb(a, '21'), sb(a, '31'), sb(a, '32'))} = ${pr('−1', '0', '1')}. One choice of three numbers, whole matrix determined: consistent with ${sp('3', '3')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `How many 2 × 2 matrices with entries from ${set('0', '1')} have trace equal to 1?`,
        steps: [
          'The trace condition couples the diagonal cells, so they cannot be counted independently; handle them jointly, then release the rest.',
          `Diagonal pairs ${pr(sb(a, '11'), sb(a, '22'))} from ${sp(set('0', '1'), '2')} with ${sb(a, '11')} + ${sb(a, '22')} = 1: exactly two, namely ${pr('1', '0')} and ${pr('0', '1')}. The off-diagonal cells ${sb(a, '12')}, ${sb(a, '21')} remain unconstrained: ${sp('2', '2')} = 4 ways. Total:<br>2 × 4 = 8.`,
          'The lesson generalises: impose the constraint on the coupled cells first, count their joint possibilities, then multiply by the free cells.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `How many symmetric matrices of order 4 have entries from ${set('0', '1')}?`,
            a: `${f} = 10, so ${sp('2', '10')} = 1024.`,
          },
          {
            q: `How many skew-symmetric matrices of order 4 have entries from ${set('−1', '0', '1')}?`,
            a: `${f} = 6, and each pair ${pr(a, `−${a}`)} has 3 choices, so ${sp('3', '6')} = 729.`,
          },
          {
            q: `How many 2 × 2 matrices with entries from ${set('0', '1', '2')} have equal diagonal entries?`,
            a: `Diagonal pair: 3 common values; off-diagonal cells: ${sp('3', '2')} = 9; total 27.`,
          },
          {
            q: `With entries from ${set('0', '1', '2', '…', '9')}, how many matrices of order 3 are (i) diagonal, (ii) scalar?`,
            a: `(i) The three diagonal cells are free and every off-diagonal cell must be 0, which is available: ${sp('10', '3')} = 1000. (ii) A scalar matrix is fixed by its single shared diagonal value: 10.`,
          },
          {
            q: `Explain why the only skew-symmetric matrix of order ${n}${NB}≥${NB}2 with all entries from ${set('0', '1')} is the zero matrix, and state the resulting count.`,
            a: `Each off-diagonal pair is ${pr(a, `−${a}`)} with both entries in ${set('0', '1')}; the only element whose negative also lies in ${set('0', '1')} is ${a} = 0. So every entry is 0, and the count is 1.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 231–233 ────────────────
  {
    n: 'D',
    title: 'Inversion Meets Symmetry; Orthogonal Matrices',
    extra: true,
    kalam: 'Is the product of orthogonal matrices orthogonal?',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 lists ${inv(`(${AT})`)} = ${T(`(${AI})`)} as a bullet and defines orthogonality in Topic 04, but neither derives the consequences. JEE Main asks those consequences directly: does inversion preserve symmetry? Is the product of orthogonal matrices orthogonal? Both answers fall out of one verification template you already own.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The bridge identity.</b> For invertible ${A},<br>${inv(`(${AT})`)} = ${T(`(${AI})`)}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Transposing the defining equation ${AI}${A} = ${ID} gives<br>${T(`(${AI}${A})`)} = ${AT}${T(`(${AI})`)} = ${T(ID)} = ${ID},<br>using the reversal law. So ${T(`(${AI})`)} is a right inverse of ${AT}; for square matrices a one-sided inverse is the inverse. Done.`,
      },
      {
        t: 'p',
        html: `<b>Corollary 1: inversion preserves symmetry.</b> If ${AT} = ${A}, then<br>${T(`(${AI})`)} = ${inv(`(${AT})`)} = ${AI},<br>so ${AI} is symmetric.`,
      },
      {
        t: 'p',
        html: `<b>Corollary 2: inversion preserves skewness.</b> If ${AT} = −${A}, then<br>${T(`(${AI})`)} = ${inv(`(${AT})`)} = ${inv(`(−${A})`)} = −${AI},<br>so ${AI} is skew-symmetric. (Only even-order skew matrices can be invertible: the reason arrives with determinants in Chapter 4.)`,
      },
      {
        t: 'p',
        html: `<b>Orthogonal matrices.</b> ${A} is orthogonal when<br>${A}${AT} = ${AT}${A} = ${ID},${NB}${NB}i.e. ${AI} = ${AT}.`,
      },
      {
        t: 'p',
        html: `Three closure facts, each proved by the same transpose-flip:<br>• ${ID} is orthogonal: ${ID}${T(ID)} = ${ID}.<br>• If ${A} is orthogonal, so are ${AT} and ${AI}: they are the same matrix.<br>• If ${A} and ${B} are orthogonal, then ${AB} is orthogonal:<br>${T(`(${AB})`)}(${AB}) = ${BT}${AT}${AB}<br>= ${BT}${ID}${B} = ${BT}${B} = ${ID}.<br>The reversal law is what makes the middle collapse possible: the same flip that powered Topic 02’s classifications.`,
      },
      {
        t: 'p',
        html: `<b>Entrywise meaning.</b> Writing columns of ${A} as ${sb(c, '1')}, …, ${sb(c, n)}, the equation ${AT}${A} = ${ID} reads<br>${sb(c, i)} ⋅ ${sb(c, j)} = 1,${NB}${NB}${i} = ${j}<br>${sb(c, i)} ⋅ ${sb(c, j)} = 0,${NB}${NB}${i} ≠ ${j}:<br>the columns are mutually perpendicular unit vectors, exactly as the chapter promised. The same holds for rows, via ${A}${AT} = ${ID}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that ${Rt} = ${bm([COS, `−${SIN}`], [SIN, COS])} is orthogonal for every angle ${th}, and deduce ${RtI}.`,
        steps: [
          `Transpose and multiply:<br>${RtT}${Rt} = ${bm([COS, SIN], [`−${SIN}`, COS])}${bm([COS, `−${SIN}`], [SIN, COS])}.`,
          `Entry by entry, using cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1:<br>${pr('1', '1')} ∶ cos<sup>2</sup>${NB}${th} + sin<sup>2</sup>${NB}${th} = 1,<br>${pr('1', '2')} ∶ −${COS}${NB}${SIN} + ${SIN}${NB}${COS} = 0,<br>${pr('2', '1')} ∶ −${SIN}${NB}${COS} + ${COS}${NB}${SIN} = 0,<br>${pr('2', '2')} ∶ sin<sup>2</sup>${NB}${th} + cos<sup>2</sup>${NB}${th} = 1.`,
          `So ${RtT}${Rt} = ${ID}: orthogonal. Hence<br>${RtI} = ${RtT} = ${bm([COS, SIN], [`−${SIN}`, COS])} = ${sb(I('R'), `−${th}`)}.`,
          `Geometrically perfect: the inverse of a rotation by ${th} is the rotation by −${th}, and it cost no row operations at all.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Find all 2 × 2 upper triangular orthogonal matrices.',
        steps: [
          `Write ${A} = ${bm([a, b], ['0', d])} and impose ${AT}${A} = ${ID} entry by entry:<br>${AT}${A} = ${bm([a, '0'], [b, d])}${bm([a, b], ['0', d])} = ${bm([sq(a), I('ab')], [I('ab'), `${sq(b)} + ${sq(d)}`])}.`,
          `Matching against ${ID}:<br>${sq(a)} = 1,${NB}${NB}${I('ab')} = 0,${NB}${NB}${sq(b)} + ${sq(d)} = 1.`,
          `From ${sq(a)} = 1 we get ${a} = ±1, so ${I('ab')} = 0 forces ${b} = 0. Then ${sq(d)} = 1, so ${d} = ±1 independently. Exactly four matrices survive:<br>${A} = ${bm(['±1', '0'], ['0', '±1'])}.`,
          'Each is its own inverse and its own transpose: diagonal sign matrices, orthogonal by inspection. The technique (impose the defining equation cell by cell, let the constraints cascade) is the same one the chapter used for skew-symmetric unknown-hunting, pointed at a stronger condition.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Show that ${A} = ${fr('1', '3')}${bm(['1', '2', '2'], ['2', '1', '−2'], ['−2', '2', '−1'])} is orthogonal, and write down ${AI}.`,
            a: `Each row has squared length ${fr('1 + 4 + 4', '9')} = 1, and the three pairwise row dots are 2 + 2 − 4 = 0, −2 + 4 − 2 = 0, −4 + 2 + 2 = 0. So ${A}${AT} = ${ID}, and<br>${AI} = ${AT} = ${fr('1', '3')}${bm(['1', '2', '−2'], ['2', '1', '2'], ['2', '−2', '−1'])}.`,
          },
          {
            q: `If ${A} is orthogonal, prove by induction that ${sp(A, n)} is orthogonal for every natural number ${n}.`,
            a: `Base: ${n} = 1, ${A} is orthogonal. Step: assume ${sp(A, k)} orthogonal; then by the closure fact for products (with ${B} = ${sp(A, k)}),<br>${T(`(${sp(A, `${k}+1`)})`)}${sp(A, `${k}+1`)} = ${T(`(${sp(A, k)})`)}${AT}${A}${sp(A, k)}<br>= ${T(`(${sp(A, k)})`)}${ID}${sp(A, k)} = ${T(`(${sp(A, k)})`)}${sp(A, k)} = ${ID}.<br>So ${sp(A, `${k}+1`)} is orthogonal.`,
          },
          {
            q: `Prove: if ${A} is symmetric and invertible, then ${AI} is symmetric.`,
            a: `${T(`(${AI})`)} = ${inv(`(${AT})`)} = ${AI}, using the bridge identity and ${AT} = ${A}.`,
          },
          {
            q: `Prove: if ${A} is skew-symmetric and invertible, then ${AI} is skew-symmetric.`,
            a: `${T(`(${AI})`)} = ${inv(`(${AT})`)} = ${inv(`(−${A})`)} = −${AI}.`,
          },
          {
            q: `If ${A} is both orthogonal and symmetric, show that ${sq(A)} = ${ID}, and conclude that ${A} is involutory.`,
            a: `Orthogonal gives ${AI} = ${AT}; symmetric gives ${AT} = ${A}; so ${AI} = ${A}, i.e. ${AI}${A} = ${sq(A)} = ${ID}. An involutory matrix is exactly one with ${sq(A)} = ${ID}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 234–236 ────────────────
  {
    n: 'E',
    title: 'Trace: From Assertion to Tool',
    extra: true,
    kalam: 'The identity is about the trace alone.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 04 states ${tr(AB)} = ${tr(BA)} and calls it “the surprising one,” then moves on. JEE rewards exactly that identity, because it settles questions that brute computation cannot touch, including a genuine impossibility proof. Here are the derivations and the payoff.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Definition.</b> For square ${A} of order ${n}:<br>${tr(A)} = ${SUM(`${i}=1`, n)} ${aii}.`,
      },
      {
        t: 'p',
        html: `<b>Linearity (one-line proofs, worth having ready).</b> Entrywise:<br>${tr(`${A} + ${B}`)} = ∑<sub>${i}</sub>(${aii} + ${sb(b, I('ii'))})<br>= ${tr(A)} + ${tr(B)},<br>${tr(I('kA'))} = ∑<sub>${i}</sub> ${k}${aii} = ${k}${NB}${tr(A)}.`,
      },
      {
        t: 'p',
        html: `<b>The reversal identity.</b> Claim: ${tr(AB)} = ${tr(BA)} for square ${A}, ${B} of the same order (it holds whenever both products exist, even for rectangular ${A} and ${B}; the proof below takes the square case).`,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Expand the diagonal of the product with the multiplication rule:<br>${tr(AB)} = ${SUM(`${i}=1`, n)}${sb(`(${AB})`, I('ii'))}<br>= ${SUM(`${i}=1`, n)} ${SUM(`${r}=1`, n)} ${ar('ir')}${NB}${sb(b, I('ri'))}.<br>Now look at ${tr(BA)}:<br>${tr(BA)} = ${SUM(`${r}=1`, n)} ${SUM(`${i}=1`, n)} ${sb(b, I('ri'))}${NB}${ar('ir')}.`,
      },
      {
        t: 'p',
        html: `These are the same double sum: identical terms ${ar('ir')}${sb(b, I('ri'))} added in a different order, ${i}-outer/${r}-inner versus ${r}-outer/${i}-inner. Finite sums commute with reordering, so<br>${tr(AB)} = ${tr(BA)}.`,
      },
      {
        t: 'p',
        html: 'Note what the proof does not claim: the matrices themselves differ in general. The diagonals differ too; only the diagonal sums (the traces) agree.',
      },
      {
        t: 'p',
        html: `<b>Consequence 1: the commutator obstruction.</b> Define ${AB} − ${BA} (the commutator). Taking traces:<br>${tr(`${AB} − ${BA}`)} = ${tr(AB)} − ${tr(BA)} = 0.<br>But ${tr(In)} = ${n}${NB}≠${NB}0. Therefore:<br>${AB} − ${BA} = ${In} is impossible, for every ${n}${NB}≥${NB}1.`,
      },
      {
        t: 'p',
        html: `<b>Consequence 2: a non-negativity test.</b> For real matrices, the diagonal of ${AT}${A} is made of squares:<br>${sb(`(${AT}${A})`, I('ii'))} = ${SUM(`${r}=1`, n)} ${ari2} ≥ 0,<br>so ${tr(`${AT}${A}`)} = ${SUM(`${i}=1`, n)} ${SUM(`${r}=1`, n)} ${ari2} ≥ 0,<br>with equality iff every entry of ${A} is 0. Hence:<br>${AT}${A} = ${O} ⟹ ${A} = ${O}.`,
      },
      {
        t: 'formula',
        kicker: 'What the trace rules out',
        main: `${tr(`${AB} − ${BA}`)} = 0, so ${AB} − ${BA} ≠ ${In}<br>${tr(`${AT}${A}`)} = ∑${NB}${sq(ar('ij'))} ≥ 0, so ${AT}${A} = ${O} ⇒ ${A} = ${O}`,
        legend: [`${A}, ${B} = real square matrices of order ${n}`, `${ar('ij')} = the entries of ${A}`, `${In} = the identity matrix of order ${n}`],
        note: null,
      },
      {
        t: 'p',
        html: `(Recall from Topic 02 that ${AT}${A} is always symmetric and square; here we extract its trace.)`,
      },
      {
        t: 'p',
        html: `<b>Consequence 3: trace of a skew-symmetric matrix.</b> Its diagonal is all zeros (Derivation 1 of Topic 02), so ${tr(A)} = 0 immediately: no computation needed.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Verify ${tr(AB)} = ${tr(BA)} for ${A} = ${bm(['1', '2'], ['3', '4'])}, ${B} = ${bm(['1', '0'], ['2', '1'])}, and confirm the products themselves differ.`,
        steps: [
          `Products first:<br>${AB} = ${bm(['1 + 4', '2'], ['3 + 8', '4'])} = ${bm(['5', '2'], ['11', '4'])},${NB}${NB}${BA} = ${bm(['1', '2'], ['5', '8'])}.`,
          `Clearly ${AB}${NB}≠${NB}${BA}. Yet<br>${tr(AB)} = 5 + 4 = 9,${NB}${NB}${tr(BA)} = 1 + 8 = 9.`,
          `Equal traces, different matrices: even the diagonals differ, ${pr('5', '4')} against ${pr('1', '8')}; only their sum is the same. The identity is about the trace alone.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that there are no ${n} × ${n} matrices ${A}, ${B} satisfying ${AB} − ${BA} = ${In}, for any ${n}${NB}≥${NB}1.`,
        steps: [
          `Suppose such ${A}, ${B} existed. Take the trace of both sides. Left side, by linearity and the reversal identity:<br>${tr(`${AB} − ${BA}`)} = ${tr(AB)} − ${tr(BA)} = 0.`,
          `Right side:<br>${tr(In)} = 1 + 1 + ⋯ + 1 (${n} terms) = ${n} ≥ 1.`,
          `So 0 = ${n}, a contradiction. No such pair exists, for any ${n}.`,
          `<b>Why this is Advanced-level.</b> Nothing in the hypothesis mentions traces, sizes, or entries. The winning move is noticing that the equation is destroyed by applying a quantity invariant under reversal: the same philosophy as Topic 02’s second worked example, where transposing settled a classification without touching a single entry.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Compute ${tr(AB)} and ${tr(BA)} for ${A} = ${bm(['2', '0'], ['1', '3'])}, ${B} = ${bm(['1', '4'], ['0', '2'])}.`,
            a: `${AB} = ${bm(['2', '8'], ['1', '10'])}, ${BA} = ${bm(['6', '12'], ['2', '6'])}; traces 12 and 12.`,
          },
          {
            q: `Prove that no matrices ${A}, ${B} satisfy ${AB} − ${BA} = 2${I3}.`,
            a: `Taking traces: left side 0, right side ${tr(`2${I3}`)} = 2 ⋅ 3 = 6; contradiction.`,
          },
          {
            q: `If ${A} is 3 × 3 with ${tr(A)} = 4, find ${tr(`${A} + ${AT}`)} and ${tr(`3${A} − 2${ID}`)}.`,
            a: `${tr(AT)} = ${tr(A)} = 4, so ${tr(`${A} + ${AT}`)} = 8; and ${tr(`3${A} − 2${ID}`)} = 12 − 6 = 6.`,
          },
          {
            q: 'Prove that the trace of any skew-symmetric matrix is 0, in one line.',
            a: `For skew-symmetric ${A}, ${aii} = −${aii} on the diagonal forces every ${aii} = 0, so ${tr(A)} = ∑<sub>${i}</sub> 0 = 0.`,
          },
          {
            q: `Prove: if ${AT}${A} = ${O} for a real matrix ${A}, then ${A} = ${O}.`,
            a: `The diagonal entries of ${AT}${A} are ∑<sub>${r}</sub> ${ari2}. If ${AT}${A} = ${O}, each such sum is 0, and a sum of squares of real numbers vanishes only when every term does; hence all ${ar('ri')} = 0, i.e. ${A} = ${O}.`,
          },
        ],
      },

      { t: 'part', title: 'Closing note' },
      {
        t: 'p',
        html: `Everything above runs on three engines you already own (entry-by-entry equality, the transpose-flip, and row operations), pushed one layer past where the chapter stopped. When a Chapter 4 problem hands you ${ABS_A}${NB}≠${NB}0 as the invertibility test, recognise it as the determinant finally paying off the debt these additional topics have been carrying.`,
      },
    ],
  },
];
