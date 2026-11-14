import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 02–04, pp. 200–221 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 02
 * Symmetric & Skew-Symmetric Matrices (pp. 200–207), Subtopic 03 Invertible
 * Matrices & Row Operations (pp. 208–215) and Subtopic 04 Special Square
 * Matrices & Chapter Synthesis (pp. 216–221). Each topic opens with its
 * "Exam Relevance:" box as a part of its own, then is split at its Sections.
 * Figures stand where their captions are printed: 3.3 (caption p. 200, drawn
 * p. 201) after the paragraph that defines a symmetric matrix; 3.4 (caption
 * p. 208, drawn p. 209) after the paragraph on A = IA; 3.5 (caption p. 219,
 * drawn p. 220). No unnumbered drawings.
 * Every grid is a <bmat> (rows <r>, cells <c>); every fraction is stacked
 * (<frac>); no em dashes. The book's underbraces are written as brackets.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A matrix in square brackets: one array per row, one string per cell. */
const bm = (...rows: string[][]) => `<bmat>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</bmat>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const O = I('O');
const P = I('P');
const Q = I('Q');
const ID = I('I');
const a = I('a');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const p = I('p');
const x = I('x');
const y = I('y');
const z = I('z');
const AB = I('AB');
const BA = I('BA');
const ABA = I('ABA');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const T = (s: string) => `${s}<sup>T</sup>`;
const inv = (s: string) => `${s}<sup>−1</sup>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const aij = sb(a, I('ij'));
const aji = sb(a, I('ji'));
const aii = sb(a, I('ii'));
const AT = T(A);
const BT = T(B);
const AI = inv(A);
const BI = inv(B);
const HALF = fr('1', '2');
const PLUS = `${HALF}(${A} + ${AT})`;
const MINUS = `${HALF}(${A} − ${AT})`;
const SYMN = fr(`${n}(${n} + 1)`, '2');
const SKEWN = fr(`${n}(${n} − 1)`, '2');
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const Rr = (s: string) => sb(I('R'), s);
const Cc = (s: string) => sb(I('C'), s);
const E = I('E');
const Ek = sb(E, k);
const E1 = sb(E, '1');
const E2 = sb(E, '2');
const ABS_A = '|⁠<i>A</i>|';
/** An augmented block [L | R]: the two blocks' rows side by side, a bar between them. */
const aug = (...rows: [string[], string[]][]) => bm(...rows.map(([l, r]) => [...l, '|', ...r]));
/** A row operation written before the arrow that carries one block to the next. */
const op = (s: string) => `(${s})${NB}⟶`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 02 · pp. 200–207 ────────────────
  {
    n: '02',
    title: 'Symmetric & Skew-Symmetric Matrices',
    kalam: 'Every square matrix is secretly a blend of a “balanced” part and an “anti-balanced” part.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A perennial <b>CBSE Board</b> favourite: “express a matrix as the sum of a symmetric and a skew-symmetric matrix” is almost a fixed 3–4 mark question, and short 1-mark identifications appear too ${ESTIMATE}. <b>JEE Main</b> reliably asks one property-based question (nature of ${AB}${NB}±${NB}${BA}, powers of a skew matrix, counting distinct elements) ${ESTIMATE}. <b>JEE Advanced</b> folds these properties into larger problems with transpose and (later) inverse/determinant. (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Think of a distance chart printed on the back of an old Indian road atlas, the kind that lists cities down the side and the same cities across the top, with each cell holding the road distance between them. Delhi to Jaipur reads the same whether you look it up as “Delhi row, Jaipur column” or “Jaipur row, Delhi column.” The chart is perfectly <b>mirror-balanced across its diagonal</b>. A matrix with exactly this balance, where the entry at ${pair(i, j)} equals the entry at ${pair(j, i)}, is called a <b>symmetric matrix</b>.`,
      },
      { t: 'fig', id: 'm12-03-fig-3.3' },
      {
        t: 'p',
        html: `Now imagine a different kind of chart: a “who owes whom” ledger in a group of friends splitting a trip. If Ravi owes Sita Rs. 500, then from Sita’s side the entry is −500. The cell ${pair(i, j)} is the exact negative of ${pair(j, i)}. And what does the diagonal mean? “How much Ravi owes Ravi”: necessarily zero. A matrix where ${aij} = −${aji} (which forces every diagonal entry to be 0) is a <b>skew-symmetric matrix</b>.`,
      },
      {
        t: 'p',
        html: `The tool that makes both ideas precise is the <b>transpose</b>. The transpose of ${A}, written ${AT} (or ${A}′), is the matrix you get by turning rows into columns, reflecting ${A} across its main diagonal. With it the definitions become crisp:<br>${A} is symmetric ⟺ ${AT} = ${A},<br>${A} is skew-symmetric ⟺ ${AT} = −${A}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Every square matrix is secretly a blend of these two pure types, a “balanced” part and an “anti-balanced” part, just as any function on a domain symmetric about 0 can be split into an even-function-like and odd-function-like piece. Squeeze out the symmetric part with ${PLUS} and the skew part with ${MINUS}, and they add back to ${A} exactly. That single idea powers the most-asked board question in this entire chapter.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• Symmetric and skew-symmetric matrices are <b>defined only for square matrices</b> (a non-square matrix can never equal its own transpose: the orders wouldn’t match).<br>• The diagonal of a skew-symmetric matrix is <b>always</b> zero. A “skew” matrix with a non-zero diagonal entry is impossible.<br>• The <b>product</b> of two symmetric matrices is symmetric <b>only if they commute</b> (${AB} = ${BA}), not in general.<br>• The transpose <b>reverses order</b> under multiplication: ${T(`(${AB})`)} = ${BT}${AT}, not ${AT}${BT}. Forgetting the reversal is the silent killer in proofs.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: '<b>Math note:</b> matrices carry no dimensional formula. The governing conditions here are <b>squareness</b> and the <b>transpose relation</b>, stated for every result.',
      },
      {
        t: 'p',
        html: `<b>Transpose: the foundation</b> (for conformable matrices and scalar ${k}):<br>${T(`(${AT})`)} = ${A},<br>${T(`(${A} + ${B})`)} = ${AT} + ${BT},<br>${T(`(${I('kA')})`)} = ${k}${AT},<br>${T(`(${AB})`)} = ${BT}${AT},<br>${T(ID)} = ${ID}.`,
      },
      {
        t: 'formula',
        kicker: 'Transpose laws',
        main: `${T(`(${AT})`)} = ${A}<br>${T(`(${A} + ${B})`)} = ${AT} + ${BT}<br>${T(`(${I('kA')})`)} = ${k}${AT}<br>${T(`(${AB})`)} = ${BT}${AT}`,
        legend: [`${A}, ${B} = conformable matrices`, `${AT} = the transpose of ${A} (rows turned into columns)`, `${k} = a scalar`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Definitions</b> (square matrix ${A} = [${aij}]<sub>${n}×${n}</sub>):<br>• <b>Symmetric:</b> ${AT} = ${A}, i.e. ${aij} = ${aji} for all ${i}, ${j}.<br>• <b>Skew-symmetric:</b> ${AT} = −${A}, i.e. ${aij} = −${aji}; consequently ${aii} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Core properties</b><br>• For any square ${A}: ${A} + ${AT} is symmetric, and ${A} − ${AT} is skew-symmetric.<br>• For any matrix ${A} (any order): ${A}${AT} and ${AT}${A} are symmetric (and square).<br>• <b>Powers of a symmetric matrix</b> are symmetric.<br>• <b>Powers of a skew-symmetric matrix:</b> even powers are symmetric, odd powers are skew-symmetric.<br>• If ${A}, ${B} are symmetric: ${A}${NB}±${NB}${B} and ${AB} + ${BA} are symmetric; ${AB} − ${BA} is skew-symmetric; ${AB} is symmetric <b>iff</b> ${AB} = ${BA}.<br>• If ${A}, ${B} are skew-symmetric: ${A}${NB}±${NB}${B} and ${AB} − ${BA} are skew-symmetric; ${AB} + ${BA} is symmetric.<br>• The <b>only</b> matrix that is both symmetric and skew-symmetric is the null matrix ${O}.<br>• <b>Counting distinct elements</b> (order ${n}): a symmetric matrix has at most ${SYMN} free entries; a skew-symmetric matrix has at most ${SKEWN} (the diagonal is forced to 0).`,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'This topic carries three results worth deriving in full: they are exactly what the reasoning marks reward.',
      },
      {
        t: 'p',
        html: `<b>Derivation 1: The diagonal of a skew-symmetric matrix is zero.</b> Let ${A} be skew-symmetric, so ${aij} = −${aji} for all ${i}, ${j}. Put ${i} = ${j}:<br>${aii} = −${aii} ⇒ 2${aii} = 0 ⇒ ${aii} = 0.<br>Every diagonal entry must vanish. (The converse fails: a zero diagonal alone does not make a matrix skew-symmetric.)`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: Every square matrix is uniquely the sum of a symmetric and a skew-symmetric matrix.</b> <b>Existence.</b> Let ${A} be any square matrix. Define<br>${P} = ${PLUS},${NB}${NB}${NB}${Q} = ${MINUS}.<br>Check ${P} is symmetric, using the transpose laws (note ${T(`(${AT})`)} = ${A}):<br>${T(P)} = ${HALF}${T(`(${A} + ${AT})`)} = ${HALF}(${AT} + ${A}) = ${P}.${NB}✓<br>Check ${Q} is skew-symmetric:<br>${T(Q)} = ${HALF}${T(`(${A} − ${AT})`)} = ${HALF}(${AT} − ${A})<br>= −${MINUS} = −${Q}.${NB}✓<br>And clearly ${P} + ${Q} = ${PLUS} + ${MINUS} = ${A}. So a decomposition exists.`,
      },
      {
        t: 'p',
        html: `<b>Uniqueness.</b> Suppose ${A} = ${sb(P, '1')} + ${sb(Q, '1')} with ${sb(P, '1')} symmetric and ${sb(Q, '1')} skew-symmetric. Transposing: ${AT} = ${sb(P, '1')}<sup>T</sup> + ${sb(Q, '1')}<sup>T</sup> = ${sb(P, '1')} − ${sb(Q, '1')}. Adding and subtracting these two equations gives ${sb(P, '1')} = ${PLUS} = ${P} and ${sb(Q, '1')} = ${MINUS} = ${Q}. The pieces are forced: the decomposition is unique.`,
      },
      {
        t: 'formula',
        kicker: 'Symmetric and skew-symmetric parts',
        main: `Symmetric: ${AT} = ${A}<br>Skew-symmetric: ${AT} = −${A}<br>${A} = ${PLUS} + ${MINUS}`,
        legend: [`${A} = a square matrix`, `${PLUS} = its symmetric part ${P}`, `${MINUS} = its skew-symmetric part ${Q}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: Maximum number of distinct entries.</b> A symmetric matrix of order ${n} is fully determined by its diagonal (${n} entries) plus the entries strictly above the diagonal (${SKEWN} of them); everything below is a mirror copy. Total:<br>${n} + ${SKEWN} = ${SYMN}.<br>For a skew-symmetric matrix the diagonal is fixed at 0, so only the ${SKEWN} above-diagonal entries are free.`,
      },
      {
        t: 'formula',
        kicker: 'Free entries (order n)',
        main: `Symmetric: ${SYMN}<br>Skew-symmetric: ${SKEWN}`,
        legend: [`${n} = the order of the square matrix`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Express ${A} = ${bm(['2', '4', '−6'], ['0', '1', '5'], ['2', '−3', '4'])} as the sum of a symmetric and a skew-symmetric matrix.`,
        steps: [
          `First write the transpose:<br>${AT} = ${bm(['2', '0', '2'], ['4', '1', '−3'], ['−6', '5', '4'])}.`,
          `<b>Symmetric part</b> ${P} = ${PLUS}:<br>${A} + ${AT} = ${bm(['4', '4', '−4'], ['4', '2', '2'], ['−4', '2', '8'])}<br>⇒ ${P} = ${bm(['2', '2', '−2'], ['2', '1', '1'], ['−2', '1', '4'])}.`,
          `<b>Skew-symmetric part</b> ${Q} = ${MINUS}:<br>${A} − ${AT} = ${bm(['0', '4', '−8'], ['−4', '0', '8'], ['8', '−8', '0'])}<br>⇒ ${Q} = ${bm(['0', '2', '−4'], ['−2', '0', '4'], ['4', '−4', '0'])}.`,
          `<b>Check:</b> ${P} + ${Q} = ${A} ✓, ${T(P)} = ${P} ✓, ${T(Q)} = −${Q} ✓ (diagonal of ${Q} all zero).`,
        ],
        ans: `${A} = ${bm(['2', '2', '−2'], ['2', '1', '1'], ['−2', '1', '4'])} + ${bm(['0', '2', '−4'], ['−2', '0', '4'], ['4', '−4', '0'])}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Speed Trap',
        q: `${A} and ${B} are symmetric matrices of the same order. Without computing entries, classify ${AB} − ${BA} and ${ABA} as symmetric, skew-symmetric, or neither.`,
        steps: [
          `The fast tool is the <b>transpose-flip</b>: transpose the expression, push the T inside using the reversal law, and use ${AT} = ${A}, ${BT} = ${B}.`,
          `For ${AB} − ${BA}:<br>${T(`(${AB} − ${BA})`)} = ${T(`(${AB})`)} − ${T(`(${BA})`)}<br>= ${BT}${AT} − ${AT}${BT}<br>= ${BA} − ${AB} = −(${AB} − ${BA}).<br>It equals its own negative → <b>skew-symmetric</b>.`,
          `For ${ABA}:<br>${T(`(${ABA})`)} = ${AT}${BT}${AT} = ${ABA}.<br>It equals itself → <b>symmetric</b>.`,
          `<b>Trap:</b> students who try to expand ${AB} and ${BA} in coordinates burn time and risk arithmetic slips; the transpose-flip settles it in two lines.`,
        ],
        ans: `${AB} − ${BA} is skew-symmetric; ${ABA} is symmetric.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (classification condition + solving)',
        q: `Find ${x}, ${y}, ${z} so that ${A} = ${bm(['0', `2${x} − 3`, '4'], ['−1', '0', `${y} + 2`], ['−4', '−7', z])} is skew-symmetric.`,
        steps: [
          `A skew-symmetric matrix needs ${aij} = −${aji} for all pairs, and zero on the diagonal.`,
          `• Diagonal: ${sb(a, '33')} = ${z} must be 0 ⇒ <b>${z} = 0</b> (the other diagonal entries are already 0).<br>• Pair ${pair('1', '2')} vs ${pair('2', '1')}: ${sb(a, '12')} = −${sb(a, '21')} ⇒ 2${x} − 3 = −(−1) = 1 ⇒ 2${x} = 4 ⇒ <b>${x} = 2</b>.<br>• Pair ${pair('2', '3')} vs ${pair('3', '2')}: ${sb(a, '23')} = −${sb(a, '32')} ⇒ ${y} + 2 = −(−7) = 7 ⇒ <b>${y} = 5</b>.<br>• Consistency on ${pair('1', '3')}: ${sb(a, '13')} = −${sb(a, '31')} ⇒ 4 = −(−4) = 4 ✓, already satisfied.`,
        ],
        ans: `${x} = 2, ${y} = 5, ${z} = 0.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Show that the square of every 2 × 2 skew-symmetric matrix is a scalar matrix of the form −${sq(a)}${ID}, and hence find all 2 × 2 skew-symmetric matrices ${A} satisfying ${sq(A)} = −9${ID}.`,
        steps: [
          `A 2 × 2 skew-symmetric matrix has zero diagonal and opposite off-diagonals, so the general form is<br>${A} = ${bm(['0', a], [`−${a}`, '0'])},${NB}${NB}${a} ∈ ℝ.`,
          `Square it:<br>${sq(A)} = ${bm(['0', a], [`−${a}`, '0'])}${bm(['0', a], [`−${a}`, '0'])}<br>= ${bm([`−${sq(a)}`, '0'], ['0', `−${sq(a)}`])} = −${sq(a)}${ID}.`,
          `This proves the claim for every such ${A}. Now impose ${sq(A)} = −9${ID}:<br>−${sq(a)}${ID} = −9${ID} ⇒ ${sq(a)} = 9 ⇒ ${a} = ±3.`,
          `Notice the elegance: a skew-symmetric 2 × 2 matrix behaves like an “imaginary unit scaled by ${a}”: its square is a negative multiple of identity, mirroring ${sq(`(${I('ai')})`)} = −${sq(a)}.`,
        ],
        ans: `Exactly two matrices,<br>${A} = ${bm(['0', '3'], ['−3', '0'])} or ${A} = ${bm(['0', '−3'], ['3', '0'])}.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Express ${A} = ${bm(['1', '5'], ['−3', '2'])} as the sum of a symmetric and a skew-symmetric matrix.`,
            a: `${P} = ${bm(['1', '1'], ['1', '2'])}, ${Q} = ${bm(['0', '4'], ['−4', '0'])}.`,
          },
          {
            q: `<b>[CBSE]</b> For what value of ${x} is ${bm(['0', `${x} − 2`], ['4', '0'])} skew-symmetric?`,
            a: `${x} = −2.`,
          },
          {
            q: '<b>[JEE Main]</b> Find the maximum number of independent entries of (i) a symmetric and (ii) a skew-symmetric matrix of order 5.',
            a: `(i) ${fr('5 · 6', '2')} = 15; (ii) ${fr('5 · 4', '2')} = 10.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${A} is a skew-symmetric matrix of order 3, state the nature (symmetric / skew-symmetric) of ${A}<sup>4</sup> and of ${A}<sup>7</sup>.`,
            a: `${A}<sup>4</sup> symmetric, ${A}<sup>7</sup> skew-symmetric.`,
          },
          {
            q: `<b>[JEE Advanced]</b> ${A} and ${B} are symmetric matrices of the same order. Prove that ${AB} is symmetric <b>if and only if</b> ${AB} = ${BA}.`,
            a: `(Proof, forward:) ${T(`(${AB})`)} = ${BT}${AT} = ${BA}; symmetric means ${T(`(${AB})`)} = ${AB}, so ${AB} = ${BA}. (Reverse:) if ${AB} = ${BA} then ${T(`(${AB})`)} = ${BA} = ${AB}, so ${AB} is symmetric.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The diagonal entries of a skew-symmetric matrix are',
        opts: [
          { label: 'all equal to 1', nudge: '<b>(a)</b>: confuses skew-symmetric with the identity matrix.' },
          { label: 'all equal to 0', nudge: null },
          {
            label: 'all equal to one another but non-zero',
            nudge: '<b>(c)</b>: a half-memory: “diagonal entries are equal” is true (all are 0) but the “non-zero” wrecks it.',
          },
          { label: 'impossible to determine', nudge: '<b>(d)</b>: the entries are fully forced, not undetermined.' },
        ],
        correct: 1,
        solution: `Setting ${i} = ${j} in ${aij} = −${aji} gives ${aii} = −${aii} ⇒ ${aii} = 0.`,
      },
      {
        t: 'mcq',
        q: 'A matrix that is both symmetric and skew-symmetric must be',
        opts: [
          {
            label: 'the identity matrix',
            nudge: '<b>(a), (d)</b>: the identity/scalar matrices are symmetric but <b>not</b> skew (non-zero diagonal).',
          },
          {
            label: 'non-zero diagonal',
            nudge: '<b>(b)</b>: a non-zero diagonal matrix is symmetric but not skew; only the zero matrix qualifies.',
          },
          { label: 'the null matrix', nudge: null },
          {
            label: 'non-zero scalar',
            nudge: '<b>(a), (d)</b>: the identity/scalar matrices are symmetric but <b>not</b> skew (non-zero diagonal).',
          },
        ],
        correct: 2,
        solution: `Both conditions give ${AT} = ${A} and ${AT} = −${A}, so ${A} = −${A} ⇒ 2${A} = ${O} ⇒ ${A} = ${O}.`,
      },
      {
        t: 'mcq',
        q: `For any square matrix ${A}, the matrix ${A} − ${AT} is always`,
        opts: [
          { label: 'symmetric', nudge: `<b>(a)</b>: the symmetric companion is ${A} + ${AT}, not ${A} − ${AT}.` },
          { label: 'skew-symmetric', nudge: null },
          {
            label: 'the null matrix',
            nudge: `<b>(c)</b>: ${A} − ${AT} = ${O} only when ${A} is already symmetric, not “always.”`,
          },
          { label: 'the identity matrix', nudge: `<b>(d)</b>: no reason for it to be ${ID}.` },
        ],
        correct: 1,
        solution: `${T(`(${A} − ${AT})`)} = ${AT} − ${A} = −(${A} − ${AT}).`,
      },
      {
        t: 'mcq',
        q: 'The maximum number of distinct entries in a symmetric matrix of order 4 is',
        opts: [
          {
            label: '16',
            nudge: `<b>(a)</b> 16: counts all ${sq(n)} entries, ignoring that symmetry duplicates the off-diagonal pairs.`,
          },
          { label: '10', nudge: null },
          {
            label: '6',
            nudge: `<b>(c)</b> 6: uses ${SKEWN}, the strictly-above-diagonal count, forgetting the 4 diagonal entries.`,
          },
          { label: '12', nudge: '<b>(d)</b> 12: a partial mix with no consistent reasoning.' },
        ],
        correct: 1,
        solution: `${SYMN} = ${fr('4 · 5', '2')} = 10.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the diagonal is zero</b> for skew-symmetric matrices, then misclassifying a matrix or losing an easy mark on “find ${x}.”`,
          `<b>Dropping the reversal in the transpose law.</b> It is ${T(`(${AB})`)} = ${BT}${AT}, never ${AT}${BT}. This single slip corrupts almost every property proof.`,
          `<b>Assuming the product of two symmetric matrices is symmetric.</b> It is symmetric only when ${A} and ${B} commute; otherwise use ${AB} + ${BA} (symmetric) and ${AB} − ${BA} (skew).`,
          `<b>Losing the ${HALF} factor</b> in the decomposition, or swapping ${P} and ${Q}, so the parts no longer add back to ${A}. Always verify ${P} + ${Q} = ${A} at the end.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (classify by flipping):</b> to decide the nature of any product expression, transpose it, reverse the order, substitute ${AT} = ±${A}, and read off whether you recover the expression (⇒ symmetric) or its negative (⇒ skew).`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (counting):</b> distinct entries are ${SYMN} (symmetric) and ${SKEWN} (skew): memorise the pair. <b>Sanity check:</b> after a decomposition, glance at ${Q}’s diagonal; if any entry there is non-zero, you have made an arithmetic error.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Symmetric:</b>',
            note: `${AT} = ${A} (${aij} = ${aji}). <b>Skew-symmetric:</b> ${AT} = −${A} (${aij} = −${aji}, diagonal = 0). Both require <b>square</b> matrices.`,
          },
          {
            f: '<b>Transpose laws:</b>',
            note: `${T(`(${AT})`)} = ${A}, ${T(`(${A} + ${B})`)} = ${AT} + ${BT}, ${T(`(${I('kA')})`)} = ${k}${AT}, ${T(`(${AB})`)} = ${BT}${AT} (reversal!).`,
          },
          {
            f: '<b>Decomposition (unique):</b>',
            note: `${A} = ${PLUS} (symmetric ${P}) + ${MINUS} (skew ${Q}).`,
          },
          {
            f: '<b>Products:</b>',
            note: `symmetric ${A}, ${B} → ${AB} + ${BA} symmetric, ${AB} − ${BA} skew; ${AB} symmetric iff ${AB} = ${BA}.`,
          },
          { f: `<b>Powers of skew ${A}:</b>`, note: 'even power → symmetric, odd power → skew.' },
          { f: `<b>Counting (order ${n}):</b>`, note: `symmetric ${SYMN}, skew ${SKEWN}.` },
        ],
        aids: [
          `“Symmetric adds, skew subtracts”: ${P} uses ${A} + ${AT}, ${Q} uses ${A} − ${AT} (both over 2).`,
          '“Skew’s diagonal is always asleep”: every diagonal entry is 0.',
          `“Transpose a product, turn it around”: the order reverses: ${T(`(${AB})`)} = ${BT}${AT}.`,
          'Both symmetric and skew → null. No exceptions.',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 208–215 ────────────────
  {
    n: '03',
    title: 'Invertible Matrices & Row Operations',
    kalam: 'Start from A = IA, and chip away at the left-hand A using row operations until it becomes I.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Find the inverse using elementary row operations” was long a standard <b>CBSE Board</b> 4-mark question (sometimes 6 for a 3×3); the current NCERT book has dropped elementary operations, so CBSE students should check this year’s syllabus. <b>JEE Main</b> tests invertibility conditions, the reversal law, and expressing ${AI} from a matrix equation. <b>JEE Advanced</b> uses these structurally inside larger algebra problems. (NEET does not test mathematics.) Note: a faster invertibility test, the <b>determinant</b>, arrives in the next chapter; here we build the method that needs no determinant at all.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In ordinary arithmetic, “dividing by 5” really means “multiplying by ${fr('1', '5')}”, and ${fr('1', '5')} is the number that undoes 5: 5 × ${fr('1', '5')} = 1. Matrices have no division, but they have the next best thing: a matrix that <b>undoes</b> another. If multiplying by ${A} scrambles a vector, then multiplying by its <b>inverse</b> ${AI} unscrambles it perfectly, landing you back where you started. The “doing nothing” matrix is the identity ${ID}, so the inverse is defined by exactly the property you’d hope for:<br>${A}${AI} = ${AI}${A} = ${ID}.`,
      },
      {
        t: 'p',
        html: `A square matrix that has such a partner is called <b>invertible</b> (or <b>non-singular</b>). Not every matrix has one: just as 0 has no reciprocal, some non-zero matrices simply cannot be undone.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a UPI transaction reversal. You send Rs. 2000; an exact refund of Rs. 2000 returns the account to its original balance. The refund is the “inverse” of the payment. But now imagine a transaction that merges two separate accounts into one total: there is no single reversal that can recover which rupees came from where. Information was destroyed. That irreversibility is exactly what makes a matrix <b>non-invertible</b>: it collapses distinct inputs onto the same output, and no matrix can un-collapse them.',
      },
      {
        t: 'p',
        html: `How do we actually find ${AI} without any notion of determinant? With <b>elementary row operations</b>, the same three legal moves you already use to solve linear equations:<br>1. <b>Swap</b> two rows: ${Rr(i)} ↔ ${Rr(j)}.<br>2. <b>Scale</b> a row by a non-zero constant: ${Rr(i)} → ${k}${Rr(i)}, ${k}${NB}≠${NB}0.<br>3. <b>Combine</b>: add a multiple of one row to another: ${Rr(i)} → ${Rr(i)} + ${k}${Rr(j)}.`,
      },
      {
        t: 'p',
        html: `The idea is beautifully direct: start from ${A} = ${I('IA')}, and chip away at the left-hand ${A} using row operations until it becomes ${ID}. Whatever those same operations do to the ${ID} on the right turns it into ${AI}.`,
      },
      { t: 'fig', id: 'm12-03-fig-3.4' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• Only <b>square</b> matrices can be invertible.<br>• The inverse, when it exists, is <b>unique</b>.<br>• If, while row-reducing, a <b>full row of zeros</b> appears on the left block, ${A} has <b>no inverse</b>: stop.<br>• You must apply each operation to <b>both</b> blocks (or, in ${A} = ${I('IA')} form, to the left ${A} and the prefactor matrix), never to one alone.<br>• Stick to <b>one type</b> throughout: row operations with ${A} = ${I('IA')}, or column operations with ${A} = ${I('AI')}; do not mix the two in a single computation.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Math note:</b> no dimensional formula applies. The governing conditions are <b>squareness</b> and the defining relation ${A}${AI} = ${AI}${A} = ${ID}.`,
      },
      {
        t: 'p',
        html: `<b>Invertible matrix:</b> a square matrix ${A} of order ${n} is invertible if there exists a square matrix ${B} of order ${n} with ${AB} = ${BA} = ${sb(ID, n)}. Then ${B} is the inverse, written ${AI}.`,
      },
      {
        t: 'p',
        html: `<b>Elementary row operations</b> (the only legal moves):<br>${Rr(i)} ↔ ${Rr(j)},${NB}${NB}${NB}${Rr(i)} → ${k}${Rr(i)} (${k}${NB}≠${NB}0),${NB}${NB}${NB}${Rr(i)} → ${Rr(i)} + ${k}${Rr(j)}.<br>(Column operations ${Cc(i)} ↔ ${Cc(j)}, etc., are the mirror set.)`,
      },
      {
        t: 'p',
        html: `<b>Structural properties of the inverse</b> (these need no determinant):<br>• <b>Uniqueness:</b> an invertible matrix has exactly one inverse.<br>• <b>Double inverse:</b> ${inv(`(${AI})`)} = ${A}.<br>• <b>Reversal law:</b> ${inv(`(${AB})`)} = ${BI}${AI}, and more generally ${inv(`(${I('ABC')} ⋯ ${I('Z')})`)} = ${inv(I('Z'))} ⋯ ${inv(C)}${BI}${AI}.<br>• <b>Transpose:</b> ${inv(`(${AT})`)} = ${T(`(${AI})`)}.<br>• <b>Powers:</b> ${inv(`(${A}<sup>${k}</sup>)`)} = (${AI})<sup>${k}</sup> for ${k} ∈ ℕ.`,
      },
      {
        t: 'formula',
        kicker: 'Properties of the inverse',
        main: `${inv(`(${AI})`)} = ${A}<br>${inv(`(${AB})`)} = ${BI}${AI}<br>${inv(`(${AT})`)} = ${T(`(${AI})`)}<br>${inv(`(${A}<sup>${k}</sup>)`)} = (${AI})<sup>${k}</sup>`,
        legend: [`${A}, ${B} = invertible matrices of the same order`, `${k} = a natural number`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Deferred to Ch. 4 (Determinants):</b> the quick test “${A} is invertible ⟺ ${ABS_A}${NB}≠${NB}0”, the adjoint formula ${AI} = ${fr('1', ABS_A)} adj${NB}${A}, and |⁠${AI}| = ${fr('1', ABS_A)}. We do <b>not</b> use them here.`,
      },

      { t: 'part', title: 'Derivation and key procedure' },
      {
        t: 'p',
        html: `<b>Derivation: the inverse is unique.</b> Suppose ${B} and ${C} are both inverses of ${A}, so ${AB} = ${BA} = ${ID} and ${I('AC')} = ${I('CA')} = ${ID}. Then<br>${B} = ${I('BI')} = ${B}(${I('AC')}) = (${BA})${C} = ${I('IC')} = ${C}.<br>The two supposed inverses are equal: there is only one. (This is why the notation ${AI} is unambiguous.)`,
      },
      {
        t: 'p',
        html: `<b>Why the ${A} = ${I('IA')} method works.</b> Every elementary row operation is the same as <b>pre-multiplying</b> by a corresponding elementary matrix ${E} (the matrix obtained by doing that operation to ${ID}). So a chain of row operations on ${A} is really ${Ek} ⋯ ${E2}${E1}${A}. We perform operations until this product equals ${ID}:<br>${Ek} ⋯ ${E1}${A} = ${ID}.<br>But that product ${Ek} ⋯ ${E1} is, by definition, a left-inverse of ${A}, and for square matrices a left-inverse is the inverse. Now apply the <b>identical</b> chain to the right side of ${A} = ${I('IA')}:<br>${Ek} ⋯ ${E1}${A} (= ${ID}) = (${Ek} ⋯ ${E1}${ID}) (= ${AI}) ${A}<br>⇒ ${ID} = ${AI}${A}.<br>So whatever the operations turn the prefactor ${ID} into <b>is</b> ${AI}.`,
      },
      {
        t: 'proc',
        title: 'The procedure (row-operation inverse)',
        steps: [
          `Write ${A} = ${I('IA')} (equivalently, form the augmented block [${A} ∣ ${ID}]).`,
          `Use row operations to convert the left block from ${A} to ${ID}, applying <b>each</b> operation to <b>both</b> blocks.`,
          `When the left block is ${ID}, the right block is ${AI}.`,
          `<b>If a zero row appears</b> in the left block at any stage, the reduction to ${ID} is impossible: ${A} is <b>not invertible</b> and has no inverse.`,
        ],
      },
      {
        t: 'p',
        html: '<b>Why a zero row kills invertibility:</b> a zero row means one row was a combination of the others: the matrix collapses inputs (the “merged accounts” of the Concept intuition part), so no undo exists.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Find the inverse of ${A} = ${bm(['2', '5'], ['1', '3'])} using elementary row operations.`,
        steps: [
          `Write [${A} ∣ ${ID}] and reduce the left block:<br>${aug([['2', '5'], ['1', '0']], [['1', '3'], ['0', '1']])}`,
          `${op(`${Rr('1')} ↔ ${Rr('2')}`)} ${aug([['1', '3'], ['0', '1']], [['2', '5'], ['1', '0']])}`,
          `${op(`${Rr('2')} → ${Rr('2')} − 2${Rr('1')}`)} ${aug([['1', '3'], ['0', '1']], [['0', '−1'], ['1', '−2']])}`,
          `${op(`${Rr('2')} → −${Rr('2')}`)} ${aug([['1', '3'], ['0', '1']], [['0', '1'], ['−1', '2']])}`,
          `${op(`${Rr('1')} → ${Rr('1')} − 3${Rr('2')}`)} ${aug([['1', '0'], ['3', '−5']], [['0', '1'], ['−1', '2']])}.`,
          `The left block is ${ID}, so ${AI} = ${bm(['3', '−5'], ['−1', '2'])}.`,
          `<b>Check:</b> ${A}${AI} = ${bm(['2', '5'], ['1', '3'])}${bm(['3', '−5'], ['−1', '2'])} = ${bm(['1', '0'], ['0', '1'])}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Speed Trap',
        q: `Determine whether ${A} = ${bm(['1', '−3'], ['−2', '6'])} is invertible.`,
        steps: [
          `<b>Slow way, for proof.</b> Start reducing:<br>${aug([['1', '−3'], ['1', '0']], [['−2', '6'], ['0', '1']])}<br>${op(`${Rr('2')} → ${Rr('2')} + 2${Rr('1')}`)} ${aug([['1', '−3'], ['1', '0']], [['0', '0'], ['2', '1']])}.`,
          `A <b>zero row</b> has appeared in the left block → the left block can never become ${ID} → <b>${A} is not invertible.</b>`,
          `<b>Speed way.</b> Glance at the rows: ${pair('−2', '6')} = −2${NB}${pair('1', '−3')}. One row is a scalar multiple of the other: the matrix is <b>singular</b>, no inverse.`,
          '<b>Trap:</b> students grind the full reduction; spotting proportional rows (or columns) answers it in one look.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (row-operation inverse + transpose property)',
        q: `For ${A} = ${bm(['1', '2', '3'], ['0', '1', '4'], ['0', '0', '1'])}, find ${AI} by elementary row operations, then write ${inv(`(${AT})`)}.`,
        steps: [
          `Form [${A} ∣ ${ID}] and clear the upper entries from the bottom up:<br>${aug([['1', '2', '3'], ['1', '0', '0']], [['0', '1', '4'], ['0', '1', '0']], [['0', '0', '1'], ['0', '0', '1']])}`,
          `(${Rr('2')} → ${Rr('2')} − 4${Rr('3')}, ${Rr('1')} → ${Rr('1')} − 3${Rr('3')})${NB}⟶<br>${aug([['1', '2', '0'], ['1', '0', '−3']], [['0', '1', '0'], ['0', '1', '−4']], [['0', '0', '1'], ['0', '0', '1']])}`,
          `${op(`${Rr('1')} → ${Rr('1')} − 2${Rr('2')}`)}<br>${aug([['1', '0', '0'], ['1', '−2', '5']], [['0', '1', '0'], ['0', '1', '−4']], [['0', '0', '1'], ['0', '0', '1']])}.`,
          `So ${AI} = ${bm(['1', '−2', '5'], ['0', '1', '−4'], ['0', '0', '1'])}.`,
          `Now use the property ${inv(`(${AT})`)} = ${T(`(${AI})`)}: no fresh computation needed, just transpose:<br>${inv(`(${AT})`)} = ${T(`(${AI})`)} = ${bm(['1', '0', '0'], ['−2', '1', '0'], ['5', '−4', '1'])}.`,
        ],
        ans: `${AI} as above, and ${inv(`(${AT})`)} = ${bm(['1', '0', '0'], ['−2', '1', '0'], ['5', '−4', '1'])}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A square matrix ${A} satisfies ${A}<sup>3</sup> − 3${A} + 2${ID} = ${O}. Show ${A} is invertible and express ${AI} as a polynomial in ${A}.`,
        steps: [
          `Isolate a term that exposes a factor of ${A}:<br>${A}<sup>3</sup> − 3${A} + 2${ID} = ${O}<br>⇒ ${A}<sup>3</sup> − 3${A} = −2${ID}<br>⇒ ${A}${NB}(${sq(A)} − 3${ID}) = −2${ID}.`,
          `Divide through by −2 (a legal scalar operation):<br>${A}${NB}[−${HALF}(${sq(A)} − 3${ID})] = ${ID}.`,
          `For square matrices, ${AB} = ${ID} already forces ${B} = ${AI} (and ${BA} = ${ID} too). Hence ${A} is invertible and<br><b>${AI} = −${HALF}(${sq(A)} − 3${ID}) = ${HALF}(3${ID} − ${sq(A)}).</b>`,
          `<b>Why this is powerful:</b> the inverse is recovered purely from the matrix’s own algebra: no row reduction, no determinant. Whenever a matrix satisfies a polynomial equation with a non-zero constant term, the same trick expresses its inverse as a polynomial in ${A}.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE, older papers]</b> Using elementary row operations, find the inverse of ${bm(['3', '1'], ['2', '1'])}.`,
            a: `${bm(['1', '−1'], ['−2', '3'])}.`,
          },
          {
            q: `<b>[CBSE, older papers]</b> Using elementary row operations, find the inverse of ${bm(['1', '2'], ['2', '−1'])}.`,
            a: `${bm([fr('1', '5'), fr('2', '5')], [fr('2', '5'), `−${fr('1', '5')}`])}.`,
          },
          {
            q: `<b>[JEE Main]</b> Show, using row operations, that ${bm(['2', '−4'], ['−1', '2'])} has no inverse.`,
            a: `Reduction yields a zero row (rows are proportional: ${pair('−1', '2')} = −${HALF}${pair('2', '−4')}), so no inverse exists.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${AI} = ${bm(['2', '−1'], ['−3', '2'])}, find ${A}.`,
            a: `${A} = ${inv(`(${AI})`)} = ${bm(['2', '1'], ['3', '2'])}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> A matrix ${A} satisfies ${sq(A)} − 4${A} + 3${ID} = ${O}. Express ${AI} as a polynomial in ${A}.`,
            a: `${AI} = ${fr('1', '3')}(4${ID} − ${A}).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is NOT an elementary row operation?',
        opts: [
          { label: `${Rr('1')} ↔ ${Rr('2')}`, nudge: '<b>(a)</b>: swapping rows is the first elementary operation.' },
          { label: `${Rr('2')} → 3${Rr('2')}`, nudge: `<b>(b)</b>: scaling by 3${NB}≠${NB}0 is legal.` },
          { label: `${Rr('2')} → 0${NB}·${NB}${Rr('2')}`, nudge: null },
          {
            label: `${Rr('1')} → ${Rr('1')} + 2${Rr('3')}`,
            nudge: '<b>(d)</b>: adding a multiple of one row to another is the third elementary operation.',
          },
        ],
        correct: 2,
        solution: 'Scaling a row is allowed only by a <b>non-zero</b> constant; multiplying by 0 wipes the row out and is not reversible.',
      },
      {
        t: 'mcq',
        q: `To find ${AI} by row operations we write ${A} = ${I('IA')} and reduce the left ${A} to ${ID}. The prefactor ${ID} then becomes`,
        opts: [
          { label: AT, nudge: '<b>(a)</b>: transpose is unrelated to row reduction.' },
          { label: AI, nudge: null },
          { label: ID, nudge: `<b>(c)</b>: if it stayed ${ID}, then ${A} = ${ID}: only true for the identity itself.` },
          { label: sq(A), nudge: '<b>(d)</b>: no operation squares the matrix.' },
        ],
        correct: 1,
        solution: `The operations multiply both sides on the left by the same product ${Ek} ⋯ ${E1} = ${AI}; turning the left ${A} into ${ID} turns the prefactor ${ID} into ${AI}.`,
      },
      {
        t: 'mcq',
        q: 'While computing an inverse by elementary row operations, a row of all zeros appears in the left block. This means',
        opts: [
          { label: `${AI} = ${O}`, nudge: `<b>(a)</b>: the zero matrix is not an inverse of anything (${I('AO')} = ${O}${NB}≠${NB}${ID}).` },
          { label: `${AI} = ${ID}`, nudge: `<b>(b)</b>: there is no reason the inverse would be ${ID}.` },
          { label: `${A} is not invertible`, nudge: null },
          {
            label: 'you must restart using column operations',
            nudge: '<b>(d)</b>: switching to columns will not rescue a genuinely singular matrix.',
          },
        ],
        correct: 2,
        solution: `A zero row makes reaching ${ID} impossible; the matrix is singular and has no inverse.`,
      },
      {
        t: 'mcq',
        q: `If ${A} and ${B} are invertible matrices of the same order, then ${inv(`(${AB})`)} =`,
        opts: [
          {
            label: `${AI}${BI}`,
            nudge: `<b>(a)</b>: the most common error: keeping the original order; ${AI}${BI} generally is <b>not</b> the inverse.`,
          },
          { label: `${BI}${AI}`, nudge: null },
          { label: BA, nudge: '<b>(c), (d)</b>: products, not inverses; dimensionally plausible but algebraically wrong.' },
          { label: AB, nudge: '<b>(c), (d)</b>: products, not inverses; dimensionally plausible but algebraically wrong.' },
        ],
        correct: 1,
        solution: `Reversal law: (${AB})(${BI}${AI}) = ${A}(${B}${BI})${AI} = ${A}${AI} = ${ID}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Operating on one block only.</b> Every row operation must hit <b>both</b> the left block and the prefactor/right block. Touching just one breaks the equation ${A} = ${I('IA')}.`,
          `<b>Mixing row and column operations</b> in a single inverse computation. Choose row (${A} = ${I('IA')}) or column (${A} = ${I('AI')}) and stay with it throughout.`,
          '<b>Scaling a row by</b> 0, or believing a matrix with proportional rows/columns can still be inverted. Proportional rows ⇒ singular ⇒ no inverse.',
          `<b>Dropping the reversal</b> in ${inv(`(${AB})`)} = ${BI}${AI}: writing ${AI}${BI} instead.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (singularity at a glance):</b> before reducing, check if any row is a scalar multiple of another (or a sum of others). If so, stop: the matrix is singular.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (always verify):</b> confirm your answer with ${A}${AI} = ${ID}; it costs one multiplication and catches sign slips.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (matrix-equation inverses):</b> if ${A} satisfies a polynomial equation with a non-zero constant term, factor out ${A} to read off ${AI} directly: far faster than reduction (the fourth worked example of this topic).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Invertible:</b>', note: `square ${A} with ${A}${AI} = ${AI}${A} = ${ID}. Inverse is <b>unique</b>.` },
          {
            f: '<b>Three elementary row operations:</b>',
            note: `${Rr(i)} ↔ ${Rr(j)}; ${Rr(i)} → ${k}${Rr(i)} (${k}${NB}≠${NB}0); ${Rr(i)} → ${Rr(i)} + ${k}${Rr(j)}.`,
          },
          {
            f: '<b>Method:</b>',
            note: `[${A} ∣ ${ID}] ⟶ [${ID} ∣ ${AI}] (row ops on both) (equivalently ${A} = ${I('IA')} → ${ID} = ${AI}${A}).`,
          },
          { f: '<b>No-inverse signal:</b>', note: `a zero row appears in the left block ⇒ ${A} is singular.` },
          {
            f: '<b>Key identities:</b>',
            note: `${inv(`(${AI})`)} = ${A}; ${inv(`(${AB})`)} = ${BI}${AI} (reversal!); ${inv(`(${AT})`)} = ${T(`(${AI})`)}.`,
          },
          {
            f: '<b>Matrix-equation trick:</b>',
            note: `from ${A}(poly in ${A}) = ${I('cI')}, divide by ${I('c')} to get ${AI}.`,
          },
        ],
        aids: [
          '“Whatever I do to A, I do to I”: apply each operation to both blocks.',
          `“Inverse flips the order”: ${inv(`(${AB})`)} = ${BI}${AI}, socks-and-shoes.`,
          '“Zero row, no go”: a zero row means no inverse.',
        ],
      },
      {
        t: 'p',
        html: `<b>Coming in Ch. 4:</b> a one-shot invertibility test (${ABS_A}${NB}≠${NB}0) and the adjoint formula ${AI} = ${fr('1', ABS_A)} adj${NB}${A}.`,
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 216–221 ────────────────
  {
    n: '04',
    title: 'Special Square Matrices & Chapter Synthesis',
    kalam: 'Every square matrix satisfies a polynomial equation of its own.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The special matrix types here are <b>JEE Main and Advanced</b> favourites: idempotent, involutory, nilpotent, and orthogonal matrices appear directly and inside multi-step problems. <b>CBSE</b> tests the real-life application of matrix operations (a 4–6 mark question) and the matrix-polynomial identity ${I('f')}(${A}) = ${O}. This topic also ties the whole chapter together. (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Special types of square matrices' },
      {
        t: 'p',
        html: `(Beyond NCERT core: essential JEE enrichment. CBSE-only students may treat this as optional reading, except the matrix-polynomial idea in the Matrix polynomials and the equation ${I('f')}(${A}) = ${O} part, which CBSE does test.)`,
      },
      {
        t: 'p',
        html: 'Some square matrices have a self-referential personality: squaring them, or multiplying them by their own transpose, returns something remarkably simple. Four types matter:',
      },
      {
        t: 'p',
        html: `<b>Idempotent:</b> ${sq(A)} = ${A}. Such a matrix is “absorbed” by repetition: once you apply it, applying it again changes nothing, so ${A}<sup>${n}</sup> = ${A} for every ${n}${NB}≥${NB}1. (Think of a projection: shining a shadow twice gives the same shadow.)`,
      },
      {
        t: 'p',
        html: `<b>Involutory:</b> ${sq(A)} = ${ID}. The matrix is its own inverse, ${AI} = ${A}. Applying it twice undoes it, like a mirror flip.`,
      },
      {
        t: 'p',
        html: `<b>Nilpotent:</b> ${A}<sup>${k}</sup> = ${O} for some positive integer ${k}; the smallest such ${k} is the <b>index</b>. A nilpotent matrix eventually annihilates everything; it can never be invertible.`,
      },
      {
        t: 'p',
        html: `<b>Orthogonal:</b> ${A}${AT} = ${AT}${A} = ${ID}, i.e. ${AI} = ${AT}. Its rows (and columns) form a set of mutually perpendicular unit vectors: rotations are the classic example.`,
      },
      {
        t: 'p',
        html: `<b>Key consequences</b><br>• Idempotent ${A}: ${ID} − ${A} is also idempotent; the only invertible idempotent matrix is ${ID} itself.<br>• Involutory ${A}: even powers give ${ID}, odd powers give ${A}.<br>• Nilpotent ${A}: never invertible (no inverse exists).<br>• Orthogonal ${A}: ${AI} = ${AT} makes inverses free to compute.`,
      },
      {
        t: 'formula',
        kicker: 'Special square matrices',
        main: `Idempotent: ${sq(A)} = ${A}<br>Involutory: ${sq(A)} = ${ID}<br>Nilpotent: ${A}<sup>${k}</sup> = ${O}<br>Orthogonal: ${A}${AT} = ${AT}${A} = ${ID}`,
        legend: [`${A} = a square matrix`, `${k} = a positive integer (the smallest is the index)`, `${ID} = the identity matrix`, `${O} = the zero matrix`],
        note: null,
      },

      { t: 'part', title: 'Trace of a matrix' },
      {
        t: 'p',
        html: `The <b>trace</b> of a square matrix is the sum of its diagonal entries: tr(${A}) = ∑<sub>${i}=1</sub><sup>${n}</sup> ${aii}. It obeys clean rules (for square ${A}, ${B} of the same order and scalar ${k}):<br>tr(${A} + ${B}) = tr(${A}) + tr(${B}),<br>tr(${I('kA')}) = ${k}${NB}tr(${A}),<br>tr(${AT}) = tr(${A}),<br>tr(${AB}) = tr(${BA}).`,
      },
      {
        t: 'formula',
        kicker: 'Trace',
        main: `tr(${A}) = ∑<sub>${i}=1</sub><sup>${n}</sup> ${aii}<br>tr(${A} + ${B}) = tr(${A}) + tr(${B})<br>tr(${I('kA')}) = ${k}${NB}tr(${A})<br>tr(${AT}) = tr(${A})<br>tr(${AB}) = tr(${BA})`,
        legend: [`${A}, ${B} = square matrices of the same order ${n}`, `${aii} = the diagonal entries`, `${k} = a scalar`],
        note: null,
      },
      {
        t: 'p',
        html: `The last identity is the surprising one: even though ${AB} ≠ ${BA} in general, their traces always agree. It is a favourite JEE trap precisely because the products themselves differ.`,
      },

      { t: 'part', title: 'Matrix polynomials and the equation f(A) = O' },
      {
        t: 'p',
        html: `Just as we evaluate ${I('f')}(${x}) at a number, we can evaluate a polynomial <b>at a matrix</b>: replace ${x} by ${A} and the constant term ${I('c')} by ${I('cI')}. Every square matrix <b>satisfies a polynomial equation of its own</b> (of degree at most its order), and that single fact unlocks both high powers and the inverse without heavy computation.`,
      },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: `For ${A} = ${bm(['1', '2'], ['2', '1'])}, show that ${sq(A)} − 2${A} − 3${ID} = ${O}, and hence find ${AI}.`,
        steps: [
          `Compute the pieces:<br>${sq(A)} = ${bm(['1', '2'], ['2', '1'])}${bm(['1', '2'], ['2', '1'])} = ${bm(['5', '4'], ['4', '5'])},<br>2${A} = ${bm(['2', '4'], ['4', '2'])},${NB}${NB}${NB}3${ID} = ${bm(['3', '0'], ['0', '3'])}.`,
          `Then<br>${sq(A)} − 2${A} − 3${ID} = ${bm(['5 − 2 − 3', '4 − 4 − 0'], ['4 − 4 − 0', '5 − 2 − 3'])}<br>= ${bm(['0', '0'], ['0', '0'])} = ${O}. ✓`,
          `Now exploit this to invert. From ${sq(A)} − 2${A} − 3${ID} = ${O}:<br>${sq(A)} − 2${A} = 3${ID}<br>⇒ ${A}(${A} − 2${ID}) = 3${ID}<br>⇒ ${A}${NB}·${NB}${fr('1', '3')}(${A} − 2${ID}) = ${ID}.`,
          `Hence<br>${AI} = ${fr('1', '3')}(${A} − 2${ID}) = ${fr('1', '3')}${bm(['−1', '2'], ['2', '−1'])}<br>= ${bm([`−${fr('1', '3')}`, fr('2', '3')], [fr('2', '3'), `−${fr('1', '3')}`])}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${A} is idempotent (${sq(A)} = ${A}). Simplify (${ID} + ${A})<sup>3</sup> − 7${A}.`,
        steps: [
          `Expand using ${sq(A)} = ${A} (so every power of ${A} collapses to ${A}, and ${ID} commutes with everything):<br>(${ID} + ${A})<sup>3</sup> = ${ID} + 3${A} + 3${sq(A)} + ${A}<sup>3</sup><br>= ${ID} + 3${A} + 3${A} + ${A} = ${ID} + 7${A}.`,
          `Therefore (${ID} + ${A})<sup>3</sup> − 7${A} = ${ID} + 7${A} − 7${A} = ${ID}.`,
        ],
        ans: `${ID}.`,
      },

      { t: 'part', title: 'Real-life application of matrix operations' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A stationery seller records two months of sales (in units) of three products (pens (P), notebooks (N), erasers (E)) as the matrix ${I('M')}, where rows are months and columns are products. The selling prices (Rs./unit) form the vector ${p}:<br>${I('M')} = ${bm(['40', '25', '30'], ['35', '30', '20'])},${NB}${NB}${NB}${p} = ${bm(['50'], ['20'], ['10'])}.<br>(i) Find the total units sold of each product. (ii) Find the revenue of each month and the grand total.`,
        steps: [
          `<b>(i) Total units per product:</b> add the two month-rows:<br>${bm(['40', '25', '30'])} + ${bm(['35', '30', '20'])} = ${bm(['75', '55', '50'])}.<br>So 75 pens, 55 notebooks, 50 erasers.`,
          `<b>(ii) Revenue per month:</b> multiply ${I('M')} (units) by ${p} (prices):<br>${I('Mp')} = ${bm(['40', '25', '30'], ['35', '30', '20'])}${bm(['50'], ['20'], ['10'])}<br>= ${bm(['2000 + 500 + 300'], ['1750 + 600 + 200'])} = ${bm(['2800'], ['2550'])}.`,
          'Month 1 revenue Rs. 2800, Month 2 revenue Rs. 2550; <b>grand total Rs.</b> 5350.',
          'Notice how addition handled “totals” and multiplication handled “units × price”: the operations are not decorative, they are the model.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Mixed chapter-spanning problems' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Construct the 2 × 2 matrix ${aij} = 2${i} − ${j}, then express it as the sum of a symmetric and a skew-symmetric matrix.`,
            a: `${A} = ${bm(['1', '0'], ['3', '2'])}; symmetric part ${bm(['1', '1.5'], ['1.5', '2'])}, skew part ${bm(['0', '−1.5'], ['1.5', '0'])}.`,
          },
          {
            q: `<b>[CBSE]</b> If ${A} = ${bm(['3', '1'], ['7', '5'])}, find ${x}, ${y} such that ${sq(A)} − ${x}${A} + ${y}${ID} = ${O}, and hence find ${AI}.`,
            a: `${x} = 8, ${y} = 8 (since ${sq(A)} = ${bm(['16', '8'], ['56', '32'])} gives ${sq(A)} − 8${A} + 8${ID} = ${O}), so ${AI} = ${fr('1', '8')}(8${ID} − ${A}) = ${fr('1', '8')}${bm(['5', '−1'], ['−7', '3'])}.`,
          },
          {
            q: `<b>[JEE Main]</b> ${A} is a 3 × 3 matrix with tr(${A}) = 6. Find tr(2${AT} − 3${ID}).`,
            a: `tr(2${AT} − 3${ID}) = 2${NB}tr(${A}) − 3(3) = 12 − 9 = 3.`,
          },
          {
            q: `<b>[JEE Main]</b> Show that ${A} = ${bm(['0', '1'], ['0', '0'])} is nilpotent and state its index.`,
            a: `${sq(A)} = ${O}, so nilpotent of index 2.`,
          },
          {
            q: `<b>[JEE Advanced]</b> ${A} is involutory. Evaluate ${sq(A)} + ${A}<sup>4</sup> + ${A}<sup>6</sup> + ⋯ + ${A}<sup>2024</sup>.`,
            a: `There are 1012 terms, all even powers = ${ID}, so the sum is 1012${NB}${ID}.`,
          },
        ],
      },

      { t: 'part', title: 'Chapter synthesis' },
      { t: 'fig', id: 'm12-03-fig-3.5' },
      { t: 'p', html: '<b>Master Formula & Definition Sheet (whole chapter)</b>' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Representation</b>',
            note: `Order ${I('m')}×${n}; entry ${aij} (row ${i}, column ${j}). Possible orders of an ${I('N')}-element matrix = number of divisors of ${I('N')}. Number of ${I('m')} × ${n} matrices over a ${k}-set = ${k}<sup>${I('mn')}</sup>.`,
          },
          { f: '<b>Equality:</b>', note: `same order <b>and</b> ${aij} = ${sb(I('b'), I('ij'))} for all ${i}, ${j}.` },
          {
            f: '<b>Operations</b>',
            note: `(${A}+${B})<sub>${I('ij')}</sub> = ${aij}+${sb(I('b'), I('ij'))} (same order), (${I('kA')})<sub>${I('ij')}</sub> = ${I('k')}${aij}, (${AB})<sub>${I('ij')}</sub> = ∑<sub>${I('r')}</sub> ${sb(a, I('ir'))}${sb(I('b'), I('rj'))} (cols(${A}) = rows(${B})).<br>Non-commutative (${AB} ≠ ${BA}); associative; distributive; ${I('IA')} = ${I('AI')} = ${A}; ${AB} = ${O} ⇏ ${A} = ${O} or ${B} = ${O}.`,
          },
          {
            f: '<b>Transpose:</b>',
            note: `${T(`(${AT})`)} = ${A}, ${T(`(${A} + ${B})`)} = ${AT} + ${BT}, ${T(`(${I('kA')})`)} = ${k}${AT}, ${T(`(${AB})`)} = ${BT}${AT}.`,
          },
          {
            f: '<b>Symmetric / skew-symmetric:</b>',
            note: `${AT} = ${A}; ${AT} = −${A} (skew diagonal = 0). Unique split<br>${A} = ${PLUS} (symmetric) + ${MINUS} (skew).`,
          },
          { f: '<b>Free entries:</b>', note: `symmetric ${SYMN}, skew ${SKEWN}.` },
          {
            f: '<b>Special square types:</b>',
            note: `idempotent ${sq(A)} = ${A}; involutory ${sq(A)} = ${ID} (${AI} = ${A}); nilpotent ${A}<sup>${k}</sup> = ${O} (singular); orthogonal ${A}${AT} = ${ID} (${AI} = ${AT}).`,
          },
          {
            f: '<b>Trace:</b>',
            note: `tr(${A}) = ∑ ${aii}; tr(${A} + ${B}) = tr${NB}${A} + tr${NB}${B}; tr(${I('kA')}) = ${k}${NB}tr${NB}${A}; tr(${AB}) = tr(${BA}).`,
          },
          {
            f: '<b>Inverse (by elementary row operations):</b>',
            note: `[${A} ∣ ${ID}] → [${ID} ∣ ${AI}]; a zero row ⇒ no inverse. Identities: ${inv(`(${AI})`)} = ${A}, ${inv(`(${AB})`)} = ${BI}${AI}, ${inv(`(${AT})`)} = ${T(`(${AI})`)}. Matrix-polynomial trick: from ${A}(poly in ${A}) = ${I('cI')}, divide by ${I('c')} to read off ${AI}.`,
          },
          {
            f: '<b>Deferred to Ch. 4 (Determinants):</b>',
            note: `invertibility test ${ABS_A}${NB}≠${NB}0; adjoint formula ${AI} = ${fr('1', ABS_A)} adj${NB}${A}; |⁠${AI}| = ${fr('1', ABS_A)}.`,
          },
        ],
        aids: [
          `Row before column (${aij}); inner match, outer survive (multiplication); transpose turns the order around; symmetric adds, skew subtracts; zero row, no inverse.`,
        ],
      },
    ],
  },
];
