import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 04–06, pp. 263–281 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Part 4 Minors
 * and Cofactors (pp. 263–269), Part 5 Inverse of a Matrix & System of Linear
 * Equations (pp. 270–276) and Part 6 Advanced Techniques: Multiplication,
 * Differentiation & Special Determinants (pp. 277–281). Each topic opens with
 * its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8. No drawings on these pages (the vector shapes are rules,
 * fraction bars, one boxed formula per topic, the table rules on p. 271 and
 * white patches under re-set text).
 * Every determinant is a <vmat>, every matrix a <pmat> (round brackets, as
 * printed) or <bmat>, rows <r>, cells <c>; the sign checkerboard is a <bmat>
 * (DECISIONS-M12 item 18); every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant between two bars: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A grid in square brackets. */
const bm = (...rows: string[][]) => grid('bmat', rows);
/** A matrix in round brackets, as the book prints its matrices here. */
const pm = (...rows: string[][]) => grid('pmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** |…| as a determinant or modulus, the opening bar glued to what it holds. */
const bar = (s: string) => `|⁠${s}|`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const O = I('O');
const X = I('X');
const ID = I('I');
const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const lam = I('λ');
const mu = I('μ');
const sb = (base: string, sub: string) => `${base}<sub>${sub}</sub>`;
const sq = (e: string) => `${e}<sup>2</sup>`;
const cube = (e: string) => `${e}<sup>3</sup>`;
const aa = (sub: string) => sb(a, sub);
const aij = sb(a, I('ij'));
const aji = sb(a, I('ji'));
const Cc = (sub: string) => sb(C, sub);
const M = (sub: string) => sb(I('M'), sub);
const R = (sub: string) => sb(I('R'), sub);
const Cij = Cc(I('ij'));
const Ckj = Cc(I('kj'));
const Mij = M(I('ij'));
const Aij = sb(A, I('ij'));
const dik = sb(I('δ'), I('ik'));
const SIGN = `(−1)<sup>${i}+${j}</sup>`;
const D = 'Δ';
const Di = sb(D, i);
const D1 = sb(D, '1');
const D2 = sb(D, '2');
const D3 = sb(D, '3');
const AT = `${A}<sup>T</sup>`;
const AI = `${A}<sup>−1</sup>`;
const DET_A = bar(A);
const DET_AI = bar(AI);
const ADJ = `adj${NB}${A}`;
const ADJ_B = `adj${NB}${B}`;
const DET_ADJ = bar(ADJ);
const ADJ2 = `adj(${ADJ})`;
const DET_ADJ2 = bar(ADJ2);
const In = sb(ID, n);
const POW_N1 = `${DET_A}<sup>${n}−1</sup>`;
/** |A| to the power (n − 1)², a raised power inside a raised power, as printed. */
const POW_SQ = `${DET_A}<sup>(${n}−1)<sup>2</sup></sup>`;
const INV_DET = fr('1', DET_A);
/** ∑ with its lower index only. */
const SUM = (lo: string) => `∑<sub>${lo}</sub>`;
/** ∑ from lo to n. */
const SUMN = (lo: string) => `∑<sub>${lo}</sub><sup>${n}</sup>`;
const C123 = `${Cc('1')} → ${Cc('1')} + ${Cc('2')} + ${Cc('3')}`;
/** The + − + sign checkerboard (bare in the book, brackets ours: DECISIONS-M12 item 18). */
const CHECKER = bm(['+', '−', '+'], ['−', '+', '−'], ['+', '−', '+']);
const DDA = fr('∂Δ', `∂${aij}`);
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const TRIPLE = (u: string, v: string, w: string) => `(${u},${NB}${v},${NB}${w})`;
const xv = '<b>x</b>';
const ABC = I('abc');
const VDM = `(${a}${NB}−${NB}${b})(${b}${NB}−${NB}${c})(${c}${NB}−${NB}${a})`;
const CYC = `−(${cube(a)} + ${cube(b)} + ${cube(c)} − 3${ABC})`;
const CYC_FULL = `−(${a} + ${b} + ${c})(${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')})`;
const fp = (e: string) => `${e}′`;
const opt = (l: string) => `<b>(${l})</b>`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 04 · pp. 263–269 ────────────────
  {
    n: '04',
    title: 'Minors and Cofactors',
    kalam: 'A cofactor is a minor with a sign stuck on it.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the machinery the rest of the chapter runs on: cofactors drive Laplace expansion and are the bridge to the adjoint and inverse (Topic 05). CBSE Boards regularly ask a direct 1–2 mark “find the minor/cofactor of ${aij}” or “expand using cofactors” ${ESTIMATE}. JEE Main leans on cofactor expansion, the cross-cofactor-zero trick, and ${DET_ADJ} shortcuts. JEE Advanced pushes the power-cofactor formula ${bar(C)} = ${POW_N1} into multi-step problems.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Picture a 3 × 3 scoreboard at a gully-cricket tournament: three teams down the side, three match-stats across the top, nine cells in all. Now you want to judge the “weight” of one particular cell, say the entry in row 2, column 3. The trick the determinant uses is beautifully simple: <b>cover up that entire row and that entire column, and look only at the smaller grid that survives.</b> What’s left of a 3 × 3 is a tidy 2 × 2. The determinant of that surviving little grid is called the <b>minor</b> of the entry you covered, written ${M('23')}.`,
      },
      {
        t: 'p',
        html: 'So a minor is just “the determinant of what’s left after you hide one row and one column.” Every entry of the matrix has its own minor. For a 3 × 3 matrix, each minor is a 2 × 2 determinant; for a 4 × 4, each minor is a 3 × 3 determinant, and so on.',
      },
      {
        t: 'p',
        html: `A <b>cofactor</b> is a minor with a sign stuck on it. The sign follows a checkerboard pattern, exactly like the black-and-white squares of a carrom board or a chessboard:<br>${CHECKER}<br>Mathematically the “colour” of position ${pair(i, j)} is captured by ${SIGN}: when ${i} + ${j} is even you sit on a + square, when it’s odd you sit on a − square. The cofactor is<br>${Cij} = ${SIGN}${Mij}.`,
      },
      {
        t: 'p',
        html: '<b>Why bother attaching a sign?</b> Because when you expand a determinant, the terms naturally alternate in sign. Baking that alternation into the minor, turning it into a cofactor, lets you write one clean, sign-free rule: the determinant equals the sum of (each element × its own cofactor) along any single row or column. The signs are already handled inside the cofactors.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> A cofactor answers the question: “If I nudge this one entry up by a tiny amount, how much does the whole determinant change?” In fact ${DDA} = ${Cij} exactly. The cofactor is the sensitivity of the determinant to that single entry. That is why a row of small entries paired with large cofactors can still produce a big determinant: each entry’s “leverage” is its cofactor.`,
      },
      {
        t: 'p',
        html: 'Two facts fall straight out of this picture, and they govern almost every exam question:<br>1. <b>Expand along any row or column and you get the same determinant.</b> This freedom is a gift: always choose the row or column carrying the most zeros, because a zero entry kills its whole cofactor term and saves you a 2 × 2 evaluation.<br>2. <b>Pair a row’s entries with another row’s cofactors and you get exactly zero.</b> Intuitively you’d be computing a determinant in which one row has been secretly duplicated, and a determinant with two identical rows is zero (Property P3 from Topic 02).',
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> Minors and cofactors are defined only for <b>square</b> matrices, because the surviving sub-grid must itself be square. The position indices ${i}, ${j} start at 1 (an off-by-one in the sign exponent flips every sign). For a 1 × 1 matrix the notion degenerates: there is nothing left after you cover the only row and column, and the cofactor expansion bottoms out at the single entry itself.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'p',
        html: 'A determinant, minor, and cofactor are all <b>scalars</b>: pure numbers, dimensionless, carrying no units.',
      },
      {
        t: 'p',
        html: `<b>Minor.</b> The minor ${Mij} of entry ${aij} in an ${n} × ${n} matrix is the determinant of the (${n} − 1) × (${n} − 1) matrix obtained by deleting row ${i} and column ${j}.`,
      },
      {
        t: 'formula',
        kicker: 'Cofactor',
        main: `${Cij} = ${SIGN}${Mij}`,
        legend: [`${Cij} = the cofactor of ${aij} (also written ${Aij})`, `${Mij} = the minor of ${aij}`, `${i}, ${j} = the row and column of the entry`],
        note: null,
      },
      { t: 'p', html: `<b>Cofactor (Laplace) expansion</b>, along row ${i} or column ${j}:` },
      {
        t: 'formula',
        kicker: 'Cofactor (Laplace) expansion',
        main: `${D} = ${SUMN(`${j}=1`)} ${aij}${Cij} (row ${i})<br>= ${SUMN(`${i}=1`)} ${aij}${Cij} (column ${j})`,
        legend: [`${aij} = the entry in row ${i} and column ${j}`, `${Cij} = its cofactor`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Cross-orthogonality</b>: entries of one row with cofactors of a different row sum to zero:',
      },
      {
        t: 'formula',
        kicker: 'Cross-orthogonality',
        main: `${SUMN(`${j}=1`)} ${aij}${Ckj} = 0 (${i}${NB}≠${NB}${k})`,
        legend: [`${aij} = the entries of row ${i}`, `${Ckj} = the cofactors of row ${k}`],
        note: null,
      },
      {
        t: 'p',
        html: `Combining both results compactly, with ${dik} the Kronecker delta (1 if ${i} = ${k}, else 0):`,
      },
      {
        t: 'formula',
        kicker: 'Same row and cross row together',
        main: `${SUMN(`${j}=1`)} ${aij}${Ckj} = ${D}${NB}${dik}`,
        legend: [`${aij} = the entries of row ${i}`, `${Ckj} = the cofactors of row ${k}`, `${dik} = the Kronecker delta (1 if ${i} = ${k} and 0 otherwise)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Determinant of the cofactor matrix (power-cofactor formula).</b> If ${C} = [${Cij}] is the matrix of cofactors (note ${ADJ} = ${C}<sup>T</sup>), then for an order-${n} matrix`,
      },
      {
        t: 'formula',
        kicker: 'Determinant of the cofactor matrix (power-cofactor formula)',
        main: `${bar(C)} = ${DET_ADJ} = ${POW_N1}<br>(for ${n} = 3${NB}∶ ${bar(C)} = ${sq(DET_A)})`,
        legend: [`${C} = the matrix of cofactors`, `${n} = the order of ${A}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Sensitivity identity',
        main: `${DDA} = ${Cij}`,
        legend: [`${aij} = an entry of the determinant (entries treated as independent)`, `${Cij} = its cofactor`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symbol-collision note.</b> We reserve uppercase ${A} for the matrix and write cofactors as ${Cij}. CBSE/NCERT writes the same object as ${Aij}: recognise both; they are identical.`,
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      { t: 'p', html: '<b>Theorem A: Cross-cofactor sum is zero</b>' },
      { t: 'p', html: `<b>Claim.</b> For ${i}${NB}≠${NB}${k}, ${SUM(j)} ${aij}${Ckj} = 0.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Build a new matrix ${A}′ identical to ${A} except that its row ${k} is <b>replaced by a copy of row</b> ${i}. Crucially, replacing row ${k} does <b>not</b> change the cofactors ${Ckj}: those cofactors are computed by deleting row ${k}, so they never “see” what row ${k} contains. Now expand ${bar(`${A}′`)} along its (new) row ${k}:<br>${bar(`${A}′`)} = ${SUM(j)} ${a}′<sub>${I('kj')}</sub>${C}′<sub>${I('kj')}</sub> = ${SUM(j)} ${aij}${Ckj},<br>since ${a}′<sub>${I('kj')}</sub> = ${aij} (we copied row ${i} in) and ${C}′<sub>${I('kj')}</sub> = ${Ckj} (cofactors unchanged). But ${A}′ now has <b>two identical rows</b> (${i} and ${k}), so by Property <b>P3</b> of Topic 02, ${bar(`${A}′`)} = 0. Therefore ${SUM(j)} ${aij}${Ckj} = 0. ■`,
      },
      {
        t: 'p',
        html: 'This is the cleanest demonstration of why the chapter’s properties form a toolkit: a result about cofactors collapses instantly once you reuse the “two identical rows ⇒ 0” fact.',
      },
      { t: 'p', html: `<b>Theorem B: The power-cofactor formula ${DET_ADJ} = ${POW_N1}</b>` },
      { t: 'p', html: `<b>Claim.</b> For an order-${n} matrix ${A}, ${DET_ADJ} = ${POW_N1}.` },
      {
        t: 'p',
        html: `<b>Proof.</b> The fundamental adjoint relation (proved in full in Topic 05) is<br>${A}(${ADJ}) = ${DET_A}${NB}${In}.<br>Take determinants of both sides. Using the multiplicative property ${bar(I('XY'))} = ${bar(X)}${bar(I('Y'))} and ${bar(`${k}${In}`)} = ${k}<sup>${n}</sup>:<br>${DET_A} · ${DET_ADJ} = ${bar(`${DET_A}${NB}${In}`)} = ${DET_A}<sup>${n}</sup>.<br>If ${DET_A}${NB}≠${NB}0, divide by ${DET_A} to get ${DET_ADJ} = ${POW_N1}. Since ${ADJ} = ${C}<sup>T</sup> and ${bar(`${C}<sup>T</sup>`)} = ${bar(C)} (Property P1), we also have ${bar(C)} = ${POW_N1}. (The ${DET_A} = 0 case follows by a continuity/limiting argument.) ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Computing minors and cofactors of a 3 × 3 systematically',
        steps: [
          `<b>Fix the entry</b> ${aij}. Mentally strike out its row ${i} and column ${j}.`,
          `<b>Read off the surviving</b> 2 × 2 in its natural order and compute its determinant: that is the minor ${Mij}.`,
          `<b>Attach the checkerboard sign</b> ${SIGN} to get ${Cij}. Don’t recompute the sign from scratch each time: memorise the + − + / − + − / + − + board.`,
          `<b>To find ${D}:</b> pick the row or column with the most zeros, then ${D} = ∑(entry × its cofactor) along that line.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `For ${A} = ${pm(['3', '1', '2'], ['0', '2', '−1'], ['4', '1', '5'])}, find the cofactors of the second-row entries and hence evaluate ${DET_A}.`,
        steps: [
          'Strike out row 2 each time.',
          `${M('21')} = ${vm(['1', '2'], ['1', '5'])} = 5 − 2 = 3,<br>${Cc('21')} = (−1)<sup>2+1</sup>(3) = −3.`,
          `${M('22')} = ${vm(['3', '2'], ['4', '5'])} = 15 − 8 = 7,<br>${Cc('22')} = (−1)<sup>2+2</sup>(7) = 7.`,
          `${M('23')} = ${vm(['3', '1'], ['4', '1'])} = 3 − 4 = −1,<br>${Cc('23')} = (−1)<sup>2+3</sup>(−1) = 1.`,
          `Expanding along row 2:<br>${DET_A} = ${aa('21')}${Cc('21')} + ${aa('22')}${Cc('22')} + ${aa('23')}${Cc('23')}<br>= (0)(−3) + (2)(7) + (−1)(1)<br>= 14 − 1 = 13.`,
          '<b>Check</b> (direct expansion along row 1):<br>3(10 + 1) − 1(0 + 4) + 2(0 − 8)<br>= 33 − 4 − 16 = 13. ✓',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap',
        q: `Evaluate as fast as possible: ${vm(['7', '0', '0'], ['2', '5', '3'], ['9', '−1', '4'])}.`,
        steps: [
          `<b>Fast solution.</b> Don’t grind all nine cofactors. Row 1 has <b>two zeros</b>, so two of the three expansion terms vanish:<br>${D} = 7${Cc('11')} = 7(−1)<sup>2</sup>${vm(['5', '3'], ['−1', '4'])}<br>= 7(20 + 3) = 7 × 23 = 161.`,
          '<b>The trap:</b> expanding along column 2 or 3 (which have only one zero each) forces you through more 2 × 2 evaluations and more sign bookkeeping. <b>Always scan for the zero-richest line first</b>: one well-chosen expansion line can cut the work by two-thirds.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (cofactor expansion × cross-orthogonality)',
        q: `For ${A} = ${pm(['1', '2', '3'], ['2', '0', '1'], ['1', '1', '1'])}, evaluate both<br>(i) ${aa('11')}${Cc('11')} + ${aa('12')}${Cc('12')} + ${aa('13')}${Cc('13')} and<br>(ii) ${aa('11')}${Cc('21')} + ${aa('12')}${Cc('22')} + ${aa('13')}${Cc('23')}.`,
        steps: [
          `Expression (i) pairs row-1 entries with row-1 cofactors: that is the Laplace expansion along row 1, so it equals ${DET_A}:<br>${DET_A} = 1(0 · 1 − 1 · 1) − 2(2 · 1 − 1 · 1)<br>+ 3(2 · 1 − 0 · 1)<br>= (−1) − 2(1) + 3(2) = −1 − 2 + 6 = 3.<br>So (i) = 3.`,
          'Expression (ii) pairs row-1 entries with <b>row-2</b> cofactors: a cross sum. By Theorem A it is exactly 0, no computation needed. So (ii) = 0.',
          `<b>The two concepts fused:</b> recognising that “same row” ⇒ ${D} while “different row” ⇒ 0 turns a scary-looking pair of sums into one short expansion and one instant zero.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (iterated power-cofactor)',
        q: `Let ${A} be a 3 × 3 matrix with ${DET_A} = 2. Let ${C} be its cofactor matrix and ${B} = ${ADJ2}. Find ${bar(C)} and ${bar(B)}.`,
        steps: [
          `With ${n} = 3, the power-cofactor formula gives ${DET_ADJ} = ${POW_N1} = ${sq(DET_A)}, and since ${ADJ} = ${C}<sup>T</sup>,<br>${bar(C)} = ${DET_ADJ} = 2<sup>2</sup> = 4.`,
          `Now apply the formula <b>twice</b>. First ${DET_ADJ} = ${sq(DET_A)} = 4. Then treat ${ADJ} as the input matrix:<br>${bar(B)} = ${DET_ADJ2} = ${DET_ADJ}<sup>${n}−1</sup><br>= (${sq(DET_A)})<sup>2</sup> = ${DET_A}<sup>4</sup> = 2<sup>4</sup> = 16.`,
          `General pattern worth remembering: ${DET_ADJ2} = ${POW_SQ}, which for ${n} = 3 is ${DET_A}<sup>4</sup>. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the cofactor of ${aa('32')} in ${pm(['2', '3', '1'], ['4', '0', '5'], ['1', '−2', '3'])}.`,
            a: '−6.',
          },
          {
            q: `<b>[CBSE]</b> Evaluate by expanding along the line with the most zeros: ${vm(['5', '0', '2'], ['3', '0', '1'], ['4', '7', '6'])}.`,
            a: '7 (expand along column 2).',
          },
          {
            q: `<b>[JEE Main]</b> For ${A} = ${pm(['1', '−1', '2'], ['3', '0', '1'], ['2', '4', '−2'])}, find ${aa('21')}${Cc('11')} + ${aa('22')}${Cc('12')} + ${aa('23')}${Cc('13')}.`,
            a: '0 (cross-cofactor sum).',
          },
          { q: `<b>[JEE Main]</b> A 3 × 3 matrix has ${DET_A} = −5. Find ${DET_ADJ}.`, a: '25.' },
          {
            q: `<b>[JEE Advanced]</b> A 3 × 3 matrix satisfies ${DET_ADJ2} = 81. Find all possible values of ${DET_A}.`,
            a: `${DET_A} = ±3 (since ${DET_A}<sup>4</sup> = 81).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The cofactor ${Cc('23')} of an entry ${aa('23')} is related to its minor ${M('23')} by:`,
        opts: [
          {
            label: `${Cc('23')} = ${M('23')}`,
            nudge: `${opt('a')} is the universal beginner error: quoting the minor as the cofactor and forgetting the sign.`,
          },
          { label: `${Cc('23')} = −${M('23')}`, nudge: null },
          { label: `${Cc('23')} = 0`, nudge: `${opt('c')} confuses the cofactor with the cross-cofactor sum (which is zero).` },
          { label: `${Cc('23')} = 2${M('23')}`, nudge: `${opt('d')} is a meaningless doubling.` },
        ],
        correct: 1,
        solution: 'The sign is (−1)<sup>2+3</sup> = (−1)<sup>5</sup> = −1.',
      },
      {
        t: 'mcq',
        q: `The value of ${vm(['2', '1', '0'], ['3', '−1', '0'], ['5', '4', '2'])} is:`,
        opts: [
          { label: '−10', nudge: null },
          { label: '10', nudge: `${opt('b')} is a sign slip on the 2 × 2.` },
          { label: '−5', nudge: `${opt('c')} forgets to multiply the minor by the entry ${aa('33')} = 2.` },
          {
            label: '0',
            nudge: `${opt('d')} is the trap for a student who sees two zeros and wrongly concludes the whole determinant is zero.`,
          },
        ],
        correct: 0,
        solution: `Column 3 has two zeros, so expand there:<br>${D} = 2${Cc('33')} = 2(−1)<sup>6</sup>${vm(['2', '1'], ['3', '−1'])}<br>= 2(−2 − 3) = −10.`,
      },
      {
        t: 'mcq',
        q: `If ${A} is a 3 × 3 matrix with ${DET_A} = ${k}, then ${DET_ADJ} equals:`,
        opts: [
          { label: k, nudge: `${opt('a')} assumes ${DET_ADJ} = ${DET_A}.` },
          { label: sq(k), nudge: null },
          {
            label: cube(k),
            nudge: `${opt('c')} uses the exponent ${n} instead of ${n} − 1: the single most common power-cofactor mistake.`,
          },
          {
            label: fr('1', k),
            nudge: `${opt('d')} confuses the adjoint with the inverse, whose determinant is ${fr('1', k)}.`,
          },
        ],
        correct: 1,
        solution: `${DET_ADJ} = ${POW_N1} = ${k}<sup>3−1</sup> = ${sq(k)}.`,
      },
      {
        t: 'mcq',
        q: `For a 3 × 3 matrix, the sum ${aa('11')}${Cc('21')} + ${aa('12')}${Cc('22')} + ${aa('13')}${Cc('23')} equals:`,
        opts: [
          {
            label: DET_A,
            nudge: `${opt('a')} is the headline trap: students memorise “entries × cofactors = ${DET_A}” but forget the cofactors must come from the <b>same</b> row.`,
          },
          { label: '0', nudge: null },
          { label: `−${DET_A}`, nudge: `${opt('c')} and ${opt('d')} are sign/squaring guesses with no basis.` },
          { label: sq(DET_A), nudge: `${opt('c')} and ${opt('d')} are sign/squaring guesses with no basis.` },
        ],
        correct: 1,
        solution: 'Row-1 entries are paired with row-2 cofactors: a cross sum, which is 0 by cross-orthogonality.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reporting the minor as the cofactor.</b> Forgetting the ${SIGN} sign is the #1 error. Always finish by stamping the checkerboard sign.`,
          `<b>Cross-cofactor confusion.</b> Pairing a row’s entries with a different row’s cofactors and expecting ${DET_A}. That sum is 0, not ${DET_A}. Same row ⇒ ${DET_A}; different row ⇒ 0.`,
          `<b>Wrong power in ${DET_ADJ}.</b> Writing ${DET_A}<sup>${n}</sup> instead of ${POW_N1}. For 3 × 3 it is ${sq(DET_A)}, not ${cube(DET_A)}.`,
          '<b>Expanding along a dense line.</b> Choosing a row/column with no zeros wastes time and multiplies error chances. Scan for zeros first.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Two one-liners win most of these questions. (i) “adj drops the power by one”: ${DET_ADJ} = ${POW_N1}, and iterating gives ${POW_SQ}. (ii) “same row sums to ${D}, cross row sums to zero.” Internalise these and you skip the algebra entirely on a large fraction of JEE/Board cofactor problems.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Minor</b> ${Mij}`, note: `determinant left after deleting row ${i}, column ${j}.` },
          { f: `<b>Cofactor</b> ${Cij}`, note: `${Cij} = ${SIGN}${Mij} (NCERT: ${Aij}). Sign board ${CHECKER}.` },
          {
            f: '<b>Laplace expansion</b>',
            note: `${D} = ${SUM(j)} ${aij}${Cij} along any row (or column): pick the zero-richest line.`,
          },
          {
            f: '<b>Cross-orthogonality</b>',
            note: `${SUM(j)} ${aij}${Ckj} = ${D}${NB}${dik}; same row gives ${D}, different row gives 0.`,
          },
          { f: '<b>Power-cofactor</b>', note: `${DET_ADJ} = ${bar(C)} = ${POW_N1}; iterated, ${DET_ADJ2} = ${POW_SQ}.` },
          { f: '<b>Sensitivity</b>', note: `${DDA} = ${Cij}.` },
        ],
        aids: [
          '“Cover to find the <b>M</b>inor, sign the board for the co<b>F</b>actor.”',
          `“Same row → ${D}, cross row → 0.”`,
          '“adj drops the power by one.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 270–276 ────────────────
  {
    n: '05',
    title: 'Inverse of a Matrix & System of Linear Equations',
    kalam: 'This topic has two faces that turn out to be the same coin: the inverse of a matrix and solving a system of equations.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the payoff topic of the chapter and a guaranteed scorer. CBSE Boards almost always carry a <b>5–6 mark</b> “solve the system by matrix method” question ${ESTIMATE}. JEE Main poses 1–2 questions per paper on consistency conditions and parameter values (${D} = 0 cases) ${ESTIMATE}. JEE Advanced favours homogeneous systems, the dimension of the solution space, and parameter-rich consistency analysis.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'This topic has two faces that turn out to be the same coin: <b>the inverse of a matrix</b> and <b>solving a system of equations.</b>',
      },
      { t: 'p', html: '<b>The inverse as an “undo” button</b>' },
      {
        t: 'p',
        html: `A matrix ${A} takes a vector and transforms it: stretches, rotates, shears. The <b>inverse</b> ${AI} is simply the operation that undoes that transformation, returning you to where you started: ${AI}(${A}${xv}) = ${xv}.`,
      },
      {
        t: 'p',
        html: `Think of a money-changer at the airport. Converting rupees to dollars is multiplying by an exchange matrix; converting back is the inverse. The catch: <b>you can only undo a transformation that didn’t destroy information.</b> Recall from Topic 02 that ${DET_A} is the signed volume of the box spanned by the rows. If ${DET_A} = 0, the transformation has squashed space flat: a 3D box collapsed onto a plane or a line. Once flattened, you cannot un-flatten: infinitely many starting points got mapped to the same place, so there is no unique way back. <b>That is exactly why a matrix has an inverse if and only if</b> ${DET_A}${NB}≠${NB}0 (such a matrix is called non-singular; ${DET_A} = 0 is singular).`,
      },
      { t: 'p', html: '<b>A system of equations as intersecting planes</b>' },
      {
        t: 'p',
        html: `A linear system in three unknowns is three planes in space. A solution is a point lying on all three. Three geometric outcomes are possible:<br>• <b>One common point</b>: the planes meet at a single spot. <b>Unique solution</b> (${D}${NB}≠${NB}0).<br>• <b>A whole line or plane in common</b>: the planes hinge along a line, or two/three coincide. <b>Infinitely many solutions.</b><br>• <b>No common point</b>: e.g. two parallel offset planes, or three planes meeting pairwise in parallel lines. <b>No solution (inconsistent).</b>`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> ${D}${NB}≠${NB}0 is the algebraic fingerprint of “the three planes are tilted independently enough to pin down exactly one crossing point.” The moment ${D} = 0, the planes have lost that independence, they’ve gone parallel or hinged, and you’ve tipped into either the infinite-solution or the no-solution world. Which of those two you land in is decided by the right-hand side.`,
      },
      {
        t: 'p',
        html: `For a <b>homogeneous</b> system (${I('AX')} = ${O}, all constants zero), every plane passes through the origin, so ${xv} = <b>0</b>, the trivial solution, always works. The interesting question is whether they share <b>more</b> than just the origin (a whole line or plane of solutions). They do exactly when ${D} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> An inverse exists only for a <b>square, non-singular</b> matrix. Cramer’s rule (below) is valid <b>only when</b> ${D}${NB}≠${NB}0: it cannot, by itself, resolve the ${D} = 0 cases. And one honest caveat the textbooks gloss over: “all ${Di} = 0” does <b>not</b> rigorously guarantee infinitely many solutions (a rank subtlety); it is a reliable exam rule, not a theorem. For example, ${x} + ${y} + ${z} = 1, ${x} + ${y} + ${z} = 2, ${x} + ${y} + ${z} = 3 has ${D} = ${D1} = ${D2} = ${D3} = 0 and no solution.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'All quantities here are real scalars or matrices; determinants are dimensionless.' },
      { t: 'p', html: `<b>Inverse via adjoint.</b> For a non-singular square matrix (${DET_A}${NB}≠${NB}0):` },
      {
        t: 'formula',
        kicker: 'Inverse via adjoint',
        main: `${AI} = ${INV_DET} ${ADJ}<br>${ADJ} = [${Cij}]<sup>T</sup> (transpose of the cofactor matrix)`,
        legend: [`${DET_A} = the determinant of ${A} (nonzero)`, `${Cij} = the cofactor of ${aij}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fundamental adjoint relation',
        main: `${A}(${ADJ}) = (${ADJ})${A} = ${DET_A}${NB}${ID}`,
        legend: [`${ID} = the identity matrix of the same order`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Determinant of an inverse',
        main: `${DET_AI} = ${INV_DET}`,
        legend: [`${A} = an invertible matrix, ${DET_A}${NB}≠${NB}0`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Matrix method</b> for ${I('AX')} = ${B} (with ${A} the coefficient matrix, ${X} = ${bm([x, y, z])}<sup>T</sup>, ${B} the constants):`,
      },
      {
        t: 'formula',
        kicker: 'Matrix method',
        main: `${X} = ${AI}${B} = ${INV_DET}(${ADJ})${B} (requires ${DET_A}${NB}≠${NB}0)`,
        legend: [`${A} = the coefficient matrix`, `${X} = the column of unknowns`, `${B} = the column of constants`],
        note: null,
      },
      { t: 'p', html: `<b>Cramer’s rule</b> for ${I('AX')} = ${B}:` },
      {
        t: 'formula',
        kicker: 'Cramer’s rule',
        main: `${x} = ${fr(D1, D)}, ${y} = ${fr(D2, D)}, ${z} = ${fr(D3, D)}`,
        legend: [`${x}, ${y}, ${z} = the unknowns`, `${D} = ${DET_A}, the coefficient determinant, nonzero`, `${Di} = ${D} with its ${i}-th column replaced by the constants ${B}`],
        note: null,
      },
      {
        t: 'p',
        html: `where ${Di} is ${D} with its ${i}-th column replaced by the constants ${B}. Valid only when ${D}${NB}≠${NB}0.`,
      },
      { t: 'p', html: `<b>Consistency criterion (non-homogeneous ${I('AX')} = ${B}).</b>` },
      {
        t: 'table',
        title: null,
        head: ['Condition', 'Nature of system'],
        rows: [
          [`${D}${NB}≠${NB}0`, '<b>Unique</b> solution (consistent)'],
          [`${D} = 0 and at least one ${Di}${NB}≠${NB}0`, '<b>No</b> solution (inconsistent)'],
          [`${D} = 0 and all ${Di} = 0`, '<b>Infinitely many</b> (usually; check rank)'],
        ],
      },
      {
        t: 'p',
        html: `<b>Homogeneous system</b> ${I('AX')} = ${O}<b>.</b> Always consistent (${X} = ${O} is the trivial solution). A <b>non-trivial</b> solution exists ⟺ ${D} = 0.`,
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      { t: 'p', html: `<b>Theorem A: The adjoint relation ${A}(${ADJ}) = ${DET_A}${NB}${ID}</b>` },
      { t: 'p', html: `<b>Claim.</b> ${A}(${ADJ}) = ${DET_A}${NB}${ID}.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Write (${ADJ})<sub>${I('jk')}</sub> = ${Ckj} (the adjoint is the transpose of the cofactor matrix). The ${pair(i, k)} entry of the product is<br>[${A}(${ADJ})]<sub>${I('ik')}</sub> = ${SUM(j)} ${aij}(${ADJ})<sub>${I('jk')}</sub><br>= ${SUM(j)} ${aij}${Ckj}.<br>By the <b>cross-orthogonality identity</b> from Topic 04, ${SUM(j)} ${aij}${Ckj} = ${DET_A}${NB}${dik}: it equals ${DET_A} when ${i} = ${k} (a genuine cofactor expansion) and 0 when ${i}${NB}≠${NB}${k} (a cross sum). Therefore every diagonal entry is ${DET_A} and every off-diagonal entry is 0:<br>${A}(${ADJ}) = ${DET_A}${NB}${ID}. ■`,
      },
      {
        t: 'p',
        html: `<b>Corollary (the inverse formula).</b> If ${DET_A}${NB}≠${NB}0, divide both sides by ${DET_A}:<br>${A}(${INV_DET} ${ADJ}) = ${ID}<br><br>⇒ ${AI} = ${INV_DET} ${ADJ}.`,
      },
      {
        t: 'p',
        html: 'This is the entire justification for the inverse formula, and it rests directly on a cofactor fact proved in the previous topic (Topic 04). That is derivational chaining.',
      },
      { t: 'p', html: '<b>Theorem B: Cramer’s rule</b>' },
      { t: 'p', html: `<b>Claim.</b> If ${D}${NB}≠${NB}0, then ${x} = ${fr(D1, D)} (and similarly ${y}, ${z}).` },
      {
        t: 'p',
        html: `<b>Proof sketch.</b> From ${X} = ${AI}${B} = ${INV_DET}(${ADJ})${B}, the first component is<br>${x} = ${INV_DET} ${SUM(i)} (${ADJ})<sub>1${i}</sub>${sb(b, i)}<br><br>= ${INV_DET} ${SUM(i)} ${Cc(`${i}1`)}${sb(b, i)}.<br>But ${SUM(i)} ${sb(b, i)}${Cc(`${i}1`)} is precisely the cofactor expansion (along column 1) of the determinant in which column 1 of ${A} has been replaced by ${B}: that is ${D1}. Hence ${x} = ${fr(D1, D)}. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: Matrix method for AX = B (CBSE 5-mark template)',
        steps: [
          `Write ${A}, ${X}, ${B} and compute ${D} = ${DET_A}. If ${D}${NB}≠${NB}0, a unique solution exists.`,
          `Find all nine cofactors ${Cij}; assemble the cofactor matrix.`,
          `<b>Transpose</b> it to get ${ADJ}. (Skipping the transpose is the classic lost-mark.)`,
          `Form ${AI} = ${fr('1', D)} ${ADJ}.`,
          `Compute ${X} = ${AI}${B} and read off ${x}, ${y}, ${z}. Verify by substitution.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure: Classifying any system</b><br>• Compute ${D}. If ${D}${NB}≠${NB}0: <b>unique</b>, solve by Cramer or matrix method, done.<br>• If ${D} = 0: compute the ${Di}. If <b>any</b> ${Di}${NB}≠${NB}0 → <b>no solution</b>. If <b>all</b> ${Di} = 0 → <b>infinitely many</b> (exam rule: usually; check rank).<br>• For homogeneous systems: ${D}${NB}≠${NB}0 → only trivial; ${D} = 0 → non-trivial solutions exist.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (matrix method)',
        q: `Solve by matrix method:<br>${x} + ${y} + ${z} = 6,<br>${x} − ${y} + ${z} = 2,<br>2${x} + ${y} − ${z} = 1.`,
        steps: [
          `Here ${A} = ${pm(['1', '1', '1'], ['1', '−1', '1'], ['2', '1', '−1'])}, ${B} = ${pm(['6'], ['2'], ['1'])}. First,<br>${D} = 1(1 − 1) − 1(−1 − 2) + 1(1 + 2)<br>= 0 + 3 + 3 = 6${NB}≠${NB}0, so a unique solution exists.`,
          `Cofactors:<br>${C} = ${pm(['0', '3', '3'], ['2', '−3', '1'], ['2', '0', '−2'])}<br>⇒ ${ADJ} = ${C}<sup>T</sup> = ${pm(['0', '2', '2'], ['3', '−3', '0'], ['3', '1', '−2'])}.`,
          `Then ${AI} = ${fr('1', '6')} ${ADJ}, and<br>${X} = ${AI}${B} = ${fr('1', '6')}${pm(['0', '2', '2'], ['3', '−3', '0'], ['3', '1', '−2'])}${pm(['6'], ['2'], ['1'])}<br>= ${fr('1', '6')}${pm(['6'], ['12'], ['18'])} = ${pm(['1'], ['2'], ['3'])}.`,
          `So ${x} = 1, ${y} = 2, ${z} = 3. <b>Check:</b> 1 + 2 + 3 = 6 ✓, 1 − 2 + 3 = 2 ✓, 2 + 2 − 3 = 1 ✓.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap (spot inconsistency)',
        q: `Classify, as fast as possible:<br>${x} + 2${y} + 3${z} = 4,<br>2${x} + 4${y} + 6${z} = 9,<br>${x} − ${y} + ${z} = 2.`,
        steps: [
          `<b>Fast solution.</b> Look at the first two equations before computing anything. The left side of equation 2 is exactly twice the left side of equation 1: 2${x} + 4${y} + 6${z} = 2(${x} + 2${y} + 3${z}). So the left sides demand 2(4) = 8 on the right, but equation 2 says 9. Contradiction. The system is <b>inconsistent: no solution</b>, in one glance.`,
          `<b>The trap:</b> setting up Cramer and grinding ${D}, ${D1}, ${D2}, ${D3} wastes two minutes to reach the same “no solution.” <b>Always scan for proportional coefficient rows; if the constants don’t match the ratio, it’s inconsistent immediately.</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (parameter case-analysis)',
        q: `For what value(s) of ${k} does<br>${I('kx')} + ${y} + ${z} = 1,<br>${x} + ${I('ky')} + ${z} = 1,<br>${x} + ${y} + ${I('kz')} = 1<br>have (i) a unique solution, (ii) no solution, (iii) infinitely many solutions?`,
        steps: [
          `Compute and factor the coefficient determinant:<br>${D} = ${vm([k, '1', '1'], ['1', k, '1'], ['1', '1', k])} = ${cube(k)} − 3${k} + 2<br>= (${k} − 1)<sup>2</sup>(${k} + 2).`,
          `<b>(i)</b> ${D}${NB}≠${NB}0 ⟺ ${k}${NB}≠${NB}1 and ${k}${NB}≠${NB}−2 → <b>unique solution.</b> <b>(ii) & (iii)</b> Examine the two roots:<br>• ${k} = 1: all three equations collapse to ${x} + ${y} + ${z} = 1, the same plane thrice → <b>infinitely many solutions.</b><br>• ${k} = −2: adding all three equations gives 0 = 3, a contradiction → <b>no solution.</b>`,
          `<b>The two concepts fused:</b> factoring ${D} as a polynomial in ${k} isolates the special cases, and then a quick algebraic test (“collapse to one plane” vs “sum to a contradiction”) decides infinite-vs-none. This is the single most common JEE Main system template.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (dimension of the solution space)',
        q: `Find all ${lam} for which the homogeneous system<br>${x} + ${y} + ${lam}${z} = 0,<br>${x} + ${lam}${y} + ${z} = 0,<br>${lam}${x} + ${y} + ${z} = 0<br>has a non-trivial solution, and <b>describe the solution space</b> in each case.`,
        steps: [
          `A homogeneous system has a non-trivial solution iff ${D} = 0. Expanding,<br>${D} = ${vm(['1', '1', lam], ['1', lam, '1'], [lam, '1', '1'])} = −(${lam} − 1)<sup>2</sup>(${lam} + 2).`,
          `So non-trivial solutions exist iff ${lam} = 1 or ${lam} = −2.`,
          `• <b>${lam} = 1:</b> every equation becomes ${x} + ${y} + ${z} = 0, a single constraint. The solution set is an entire <b>plane</b> through the origin: a <b>two-parameter</b> family, e.g. ${TRIPLE(x, y, z)} = ${TRIPLE(s, t, `−${s} − ${t}`)}.<br>• <b>${lam} = −2:</b> the equations are ${x} + ${y} − 2${z} = 0, ${x} − 2${y} + ${z} = 0, −2${x} + ${y} + ${z} = 0. Subtracting the first two gives 3${y} − 3${z} = 0 ⇒ ${y} = ${z}; back-substituting gives ${x} = ${z}. The solution set is the <b>line</b> ${x} = ${y} = ${z}: a <b>one-parameter</b> family ${TRIPLE(t, t, t)}.`,
          `So the geometry of the solution space distinguishes the two singular cases: a plane (rank 1) at ${lam} = 1, a line (rank 2) at ${lam} = −2. This rank-and-dimension reasoning is the hallmark of an Advanced treatment. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Solve using the inverse: 2${x} − ${y} = 3, ${x} + ${y} = 3.`,
            a: `${x} = 2, ${y} = 1.`,
          },
          {
            q: `<b>[CBSE]</b> Find ${AI} for ${A} = ${pm(['2', '5'], ['1', '3'])}.`,
            a: `${AI} = ${pm(['3', '−5'], ['−1', '2'])} (since ${DET_A} = 1).`,
          },
          {
            q: `<b>[JEE Main]</b> Find ${k} for which ${I('kx')} + 2${y} − ${z} = 0, 2${x} − ${y} + 3${z} = 0, ${x} + ${y} + ${z} = 0 has a non-trivial solution.`,
            a: `${k} = −${fr('1', '4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> The system ${x} + ${y} + ${z} = 6, ${x} + 2${y} + 3${z} = 14, 2${x} + 5${y} + ${lam}${z} = ${mu} has a unique solution. Find the condition on ${lam}.`,
            a: `${lam}${NB}≠${NB}8 (for any ${mu}).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find all ${k} for which ${x} + ${y} + ${z} = 1, ${x} + 2${y} + 4${z} = ${k}, ${x} + 4${y} + 10${z} = ${sq(k)} is consistent.`,
            a: `${k} = 1 or ${k} = 2.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `A square matrix ${A} has an inverse if and only if:`,
        opts: [
          {
            label: `${A} is symmetric`,
            nudge: `${opt('a')} and ${opt('d')} are irrelevant properties; symmetry and order have no bearing on invertibility.`,
          },
          { label: `${DET_A} = 0`, nudge: `${opt('b')} is the precise opposite: a singular matrix has <b>no</b> inverse.` },
          { label: `${DET_A}${NB}≠${NB}0`, nudge: null },
          {
            label: `${A} is of order 3`,
            nudge: `${opt('a')} and ${opt('d')} are irrelevant properties; symmetry and order have no bearing on invertibility.`,
          },
        ],
        correct: 2,
        solution: `An inverse exists exactly when ${A} is non-singular.`,
      },
      {
        t: 'mcq',
        q: `A homogeneous system ${I('AX')} = ${O} of three equations has a non-trivial solution if and only if:`,
        opts: [
          { label: `${D}${NB}≠${NB}0`, nudge: `${opt('a')} gives <b>only</b> the trivial solution.` },
          { label: `${D} = 0`, nudge: null },
          { label: `${D} > 0`, nudge: `${opt('c')} invents a sign condition that doesn’t exist.` },
          {
            label: 'it always does',
            nudge: `${opt('d')} is the seductive trap: the trivial solution always exists, but a non-trivial one needs ${D} = 0.`,
          },
        ],
        correct: 1,
        solution: 'Non-trivial solutions require the coefficient determinant to vanish.',
      },
      {
        t: 'mcq',
        q: `For ${I('AX')} = ${B} (three equations), ${D} = 0 and ${D1}${NB}≠${NB}0. The system has:`,
        opts: [
          { label: 'a unique solution', nudge: `${opt('a')} needs ${D}${NB}≠${NB}0.` },
          { label: 'infinitely many solutions', nudge: `${opt('b')} needs <b>all</b> ${Di} = 0, not one of them nonzero.` },
          { label: 'no solution', nudge: null },
          {
            label: 'only the trivial solution',
            nudge: `${opt('d')} “trivial solution” is a homogeneous-system notion and doesn’t apply to a general ${B}.`,
          },
        ],
        correct: 2,
        solution: `${D} = 0 with some ${Di}${NB}≠${NB}0 is the inconsistency signature.`,
      },
      {
        t: 'mcq',
        q: `If ${A} is a 3 × 3 matrix with ${DET_A} = 2, then ${DET_AI} equals:`,
        opts: [
          { label: '2', nudge: `${opt('a')} forgets to reciprocate.` },
          { label: fr('1', '2'), nudge: null },
          {
            label: fr('1', '8'),
            nudge: `${opt('c')} is ${fr('1', cube(DET_A))}: it applies the order-3 power to ${fr('1', DET_A)} in ${AI} = ${INV_DET} ${ADJ} but forgets the factor ${DET_ADJ} = 4.`,
          },
          { label: '8', nudge: `${opt('d')} is ${cube(DET_A)}, the wrong direction entirely.` },
        ],
        correct: 1,
        solution: `${DET_AI} = ${INV_DET} = ${fr('1', '2')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Scrambling the three consistency branches.</b> Lock this down: ${D}${NB}≠${NB}0 ⇒ unique; ${D} = 0 with some ${Di}${NB}≠${NB}0 ⇒ no solution; ${D} = 0 with all ${Di} = 0 ⇒ infinitely many (usually; it can still be inconsistent, so check).`,
          `<b>Forgetting “trivial always exists.”</b> For homogeneous systems, ${X} = ${O} is automatic. The exam asks about non-trivial solutions, which need ${D} = 0.`,
          `<b>Skipping the transpose in ${ADJ}.</b> The adjoint is the <b>transpose</b> of the cofactor matrix. This step is mark-bearing.`,
          `<b>Using Cramer when ${D} = 0.</b> Cramer’s rule is undefined there; switch to the consistency criterion instead.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For any parameter problem, <b>factor ${D} as a polynomial in the parameter first.</b> Its roots are the only “interesting” values; everything else gives a unique solution. Then test each root separately for no-solution vs infinite: never assume which one it is. And remember the honest caveat: “all ${Di} = 0” is the exam shortcut for “infinitely many,” but rigorously it can still be inconsistent in degenerate cases, so on a high-stakes Advanced problem, verify by back-substitution.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Inverse</b>',
            note: `${AI} = ${INV_DET} ${ADJ}, exists ⟺ ${DET_A}${NB}≠${NB}0 (non-singular).<br>${DET_AI} = ${INV_DET}.`,
          },
          { f: '<b>Adjoint relation</b>', note: `${A}(${ADJ}) = ${DET_A}${NB}${ID}: the engine behind the inverse formula.` },
          { f: '<b>Matrix method</b>', note: `${X} = ${AI}${B} (needs ${DET_A}${NB}≠${NB}0).` },
          {
            f: '<b>Cramer</b>',
            note: `${x} = ${fr(D1, D)}, ${y} = ${fr(D2, D)}, ${z} = ${fr(D3, D)}<br>(${Di} = replace ${i}-th column with ${B}); valid only if ${D}${NB}≠${NB}0.`,
          },
          {
            f: '<b>Consistency (non-homogeneous)</b>',
            note: `${D}${NB}≠${NB}0 → unique; ${D} = 0, some ${Di}${NB}≠${NB}0 → none; ${D} = 0, all ${Di} = 0 → infinite (usually; check rank).`,
          },
          { f: `<b>Homogeneous</b> ${I('AX')} = ${O}`, note: `trivial always; non-trivial ⟺ ${D} = 0.` },
        ],
        aids: [
          `“No determinant, no inverse” (${DET_A} = 0 ⇒ singular).`,
          '“Delta zero, hopes alive: check the side-determinants to know none-or-infinite.”',
          '“adj = transpose of cofactors.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 06 · pp. 277–281 ────────────────
  {
    n: '06',
    title: 'Advanced Techniques: Multiplication, Differentiation & Special Determinants',
    kalam: 'This capstone gathers four power-tools that the earlier topics hinted at but didn’t develop.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Pure JEE territory (Main and especially Advanced): these tools rarely appear in CBSE but are decisive in competitive papers ${ESTIMATE}. Multiplication and adjoint identities power 1-mark “find ${bar(`2${I('AB')}`)}” traps; differentiation of a determinant and cyclic/Vandermonde factorisation appear as full Advanced problems. Mastering these is the difference between a good score and a top percentile.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'This capstone gathers four power-tools that the earlier topics hinted at but didn’t develop.',
      },
      {
        t: 'p',
        html: `<b>(1) Multiplication.</b> Two determinants of the same order can be multiplied into a single determinant, because ${DET_A}${NB}${bar(B)} = ${bar(I('AB'))}. The determinant is multiplicative: it turns matrix products into ordinary number products. This is why ${bar(`${A}<sup>${n}</sup>`)} = ${DET_A}<sup>${n}</sup> and ${bar(I('kA'))} = ${k}<sup>${n}</sup>${DET_A}.`,
      },
      {
        t: 'p',
        html: `<b>(2) Differentiation.</b> When a determinant’s entries are functions of ${x}, its derivative <b>need not</b> be found by expanding first. Instead, differentiate <b>one row (or column) at a time</b>, leaving the others fixed, and add the resulting determinants. It mirrors the product rule, and for good reason, since a determinant is a sum of products of entries.`,
      },
      {
        t: 'p',
        html: '<b>(3) Adjoint identities.</b> The adjoint (Topic 05) obeys a small algebra of its own: it reverses order under products, scales predictably, and “squares back” toward the original matrix.',
      },
      {
        t: 'p',
        html: `<b>(4) Special determinants.</b> Certain shapes recur so often that recognising them saves enormous time: the <b>Vandermonde</b> (powers stacked in rows), the <b>skew-symmetric of odd order</b> (always zero), and <b>cyclic</b> determinants (which factor through ${a} + ${b} + ${c}).`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Up to now you computed determinants. Here you manipulate them as algebraic objects (multiplying, differentiating, and pattern-matching), exactly as you’d manipulate polynomials once you stop plugging in numbers.',
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> Multiplication ${DET_A}${bar(B)} = ${bar(I('AB'))} requires ${A}, ${B} <b>square and of the same order</b>. The skew-symmetric “= 0” result holds only for <b>odd</b> order (even-order skew determinants are generally nonzero). The differentiation rule assumes the entries are differentiable functions of the variable.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Multiplication of determinants',
        main: `${DET_A}${NB}${bar(B)} = ${bar(I('AB'))}<br>${bar(`${A}<sup>${n}</sup>`)} = ${DET_A}<sup>${n}</sup>`,
        legend: [`${A}, ${B} = square matrices of the same order`, `${n} = any positive integer`],
        note: null,
      },
      {
        t: 'p',
        html: `Two determinants are multiplied <b>row-by-row</b> (or row-by-column): the ${pair(i, j)} entry of the product is the dot product of row ${i} of the first with row ${j} of the second. (Row-by-row gives ${bar(`${I('AB')}<sup>T</sup>`)} and row-by-column gives ${bar(I('AB'))}; both equal ${DET_A}${bar(B)}.)`,
      },
      {
        t: 'formula',
        kicker: 'Differentiation of a determinant',
        main: `For Δ(${x}) = ${vm([sb(f, '1'), sb(f, '2'), sb(f, '3')], [sb(g, '1'), sb(g, '2'), sb(g, '3')], [sb(h, '1'), sb(h, '2'), sb(h, '3')])},<br>Δ′(${x}) = ${vm([sb(fp(f), '1'), sb(fp(f), '2'), sb(fp(f), '3')], [sb(g, '1'), sb(g, '2'), sb(g, '3')], [sb(h, '1'), sb(h, '2'), sb(h, '3')])}<br>+ ${vm([sb(f, '1'), sb(f, '2'), sb(f, '3')], [sb(fp(g), '1'), sb(fp(g), '2'), sb(fp(g), '3')], [sb(h, '1'), sb(h, '2'), sb(h, '3')])}<br>+ ${vm([sb(f, '1'), sb(f, '2'), sb(f, '3')], [sb(g, '1'), sb(g, '2'), sb(g, '3')], [sb(fp(h), '1'), sb(fp(h), '2'), sb(fp(h), '3')])}`,
        legend: [
          `${sb(f, i)}, ${sb(g, i)}, ${sb(h, i)} = the entries of rows 1, 2 and 3 (functions of ${x})`,
          `${sb(fp(f), i)}, ${sb(fp(g), i)}, ${sb(fp(h), i)} = their derivatives`,
        ],
        note: null,
      },
      { t: 'p', html: `<b>Adjoint identities</b> (order ${n}):` },
      {
        t: 'formula',
        kicker: 'Adjoint identities',
        main: `adj(${I('AB')}) = (${ADJ_B})(${ADJ})<br>adj(${I('kA')}) = ${k}<sup>${n}−1</sup> ${ADJ}<br>${ADJ2} = ${DET_A}<sup>${n}−2</sup>${A}<br>${DET_ADJ2} = ${POW_SQ}`,
        legend: [`${A}, ${B} = square matrices of order ${n}`, `${k} = a scalar`],
        note: null,
      },
      { t: 'p', html: '<b>Special determinants.</b>' },
      {
        t: 'formula',
        kicker: 'Vandermonde',
        main: `${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} = ${VDM}`,
        legend: [`${a}, ${b}, ${c} = the entries of the second row`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Skew-symmetric, odd order',
        main: `${AT} = −${A}, ${n} odd ⇒ ${DET_A} = 0`,
        legend: [`${A} = a skew-symmetric matrix`, `${n} = its order`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cyclic',
        main: `${vm([a, b, c], [b, c, a], [c, a, b])} = ${CYC}<br>= ${CYC_FULL}`,
        legend: [`${a}, ${b}, ${c} = the entries of the first row`],
        note: null,
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      { t: 'p', html: '<b>Theorem A: A skew-symmetric determinant of odd order is zero</b>' },
      { t: 'p', html: `<b>Claim.</b> If ${AT} = −${A} and ${A} is ${n} × ${n} with ${n} odd, then ${DET_A} = 0.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Take determinants of ${AT} = −${A}. Using ${bar(AT)} = ${DET_A} (Topic 02) and ${bar(`−${A}`)} = (−1)<sup>${n}</sup>${DET_A} (the scalar rule with ${k} = −1):<br>${DET_A} = (−1)<sup>${n}</sup>${DET_A}.<br>For odd ${n}, (−1)<sup>${n}</sup> = −1, so ${DET_A} = −${DET_A} ⇒ 2${DET_A} = 0 ⇒ ${DET_A} = 0. (For even ${n} the equation is vacuous, so no conclusion.) ■`,
      },
      { t: 'p', html: '<b>Theorem B: The differentiation rule</b>' },
      {
        t: 'p',
        html: '<b>Sketch.</b> A 3 × 3 determinant is a sum of terms, each a product of three entries, one from each row. Differentiating such a product by the ordinary product rule gives three pieces: one with the first factor differentiated, one with the second, one with the third. Collecting all “first-row-differentiated” pieces reconstitutes the first determinant in the rule, and similarly for the others. Hence the derivative is the sum of the three row-differentiated determinants. ■',
      },
      {
        t: 'proc',
        title: 'Procedure: Multiplying two determinants by hand',
        steps: [
          'Confirm both are square and the same order.',
          `Form the product matrix ${I('AB')} using <b>row-of-${A} dotted with column-of-${B}</b>.`,
          `Evaluate ${bar(I('AB'))}: it equals ${DET_A}${bar(B)}. (Often the reverse is useful: recognise a messy determinant as a product ${DET_A}${bar(B)} to factor it.)`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure: Cyclic factorisation</b><br>For a determinant whose rows (or columns) are cyclic shifts, apply ${C123}. The first column becomes constant (here ${a} + ${b} + ${c}), which factors out, collapsing the problem.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level (multiplication shortcuts)',
        q: `Let ${A}, ${B} be 3 × 3 matrices with ${DET_A} = 3 and ${bar(B)} = −2. Find ${bar(`2${I('AB')}`)} and ${bar(`${sq(A)}${B}`)}.`,
        steps: [
          `Using ${bar(I('kA'))} = ${k}<sup>${n}</sup>${DET_A} with ${n} = 3, and multiplicativity:<br>${bar(`2${I('AB')}`)} = 2<sup>3</sup>${NB}${DET_A}${NB}${bar(B)} = 8(3)(−2) = −48,<br>${bar(`${sq(A)}${B}`)} = ${sq(DET_A)}${bar(B)} = 9(−2) = −18.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap (skew-symmetric)',
        q: `Evaluate ${vm(['0', '3', '−5'], ['−3', '0', '2'], ['5', '−2', '0'])}.`,
        steps: [
          `<b>Fast solution.</b> Notice ${aij} = −${aji} and the diagonal is all zeros: this is a <b>skew-symmetric</b> matrix of order 3 (odd). By Theorem A its determinant is 0, no computation needed.`,
          '<b>The trap:</b> expanding all six Sarrus terms wastes a minute and risks a sign error; recognising “odd-order skew-symmetric ⇒ zero” is instant.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (differentiation of a determinant)',
        q: `For ${f}(${x}) = ${vm([`1 + ${x}`, '1', '1'], ['1', `1 + ${x}`, '1'], ['1', '1', `1 + ${x}`])}, find ${fp(f)}(${x}).`,
        steps: [
          `First, the determinant itself simplifies (${C123} gives factor (${x} + 3), then reduce) to ${f}(${x}) = ${sq(x)}(${x} + 3) = ${cube(x)} + 3${sq(x)}, so directly ${fp(f)}(${x}) = 3${sq(x)} + 6${x}.`,
          `To demonstrate the rule, differentiate one row at a time. Each row’s derivative is ${TRIPLE('1', '0', '0')}, ${TRIPLE('0', '1', '0')}, ${TRIPLE('0', '0', '1')} respectively, so<br>${fp(f)}(${x}) = ${vm(['1', '0', '0'], ['1', `1 + ${x}`, '1'], ['1', '1', `1 + ${x}`])}<br>+ ${vm([`1 + ${x}`, '1', '1'], ['0', '1', '0'], ['1', '1', `1 + ${x}`])}<br>+ ${vm([`1 + ${x}`, '1', '1'], ['1', `1 + ${x}`, '1'], ['0', '0', '1'])}.`,
          `Each is easy: the first = (1 + ${x})<sup>2</sup> − 1, the second = (1 + ${x})<sup>2</sup> − 1, the third = (1 + ${x})<sup>2</sup> − 1. Summing:<br>3[(1 + ${x})<sup>2</sup> − 1] = 3(${sq(x)} + 2${x}) = 3${sq(x)} + 6${x}. ✓ Both routes agree. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (cyclic factorisation)',
        q: `Prove that ${vm([a, b, c], [b, c, a], [c, a, b])} = ${CYC}.`,
        steps: [
          `Apply ${C123}; every entry of the new first column becomes ${a} + ${b} + ${c}:<br>${D} = (${a} + ${b} + ${c})${vm(['1', b, c], ['1', c, a], ['1', a, b])}.`,
          `Now ${R('2')} → ${R('2')} − ${R('1')} and ${R('3')} → ${R('3')} − ${R('1')}:<br>= (${a} + ${b} + ${c})${vm(['1', b, c], ['0', `${c} − ${b}`, `${a} − ${c}`], ['0', `${a} − ${b}`, `${b} − ${c}`])}<br>= (${a} + ${b} + ${c})[(${c} − ${b})(${b} − ${c}) − (${a} − ${c})(${a} − ${b})].`,
          `Expanding the bracket: (${c} − ${b})(${b} − ${c}) = −(${b} − ${c})<sup>2</sup> and (${a} − ${c})(${a} − ${b}) = ${sq(a)} − (${b} + ${c})${a} + ${I('bc')}, giving (after simplification) −(${sq(a)} + ${sq(b)} + ${sq(c)} − ${I('ab')} − ${I('bc')} − ${I('ca')}). Hence<br>${D} = ${CYC_FULL}<br>= ${CYC}.`,
          `(Quick check ${a} = 1, ${b} = 2, ${c} = 3: ${D} = −18 and −(1 + 8 + 27 − 18) = −18.) ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> If ${DET_A} = 4 for a 3 × 3 matrix, find ${bar(`3${A}`)} and ${DET_AI}.`,
            a: `${bar(`3${A}`)} = 108, ${DET_AI} = ${fr('1', '4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> For 3 × 3 matrices with ${DET_A} = 2, ${bar(B)} = 5, find ${bar(`adj(${I('AB')})`)}.`,
            a: `${bar(`adj(${I('AB')})`)} = ${sq(bar(I('AB')))} = (10)<sup>2</sup> = 100.`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${vm(['0', p, `−${q}`], [`−${p}`, '0', r], [q, `−${r}`, '0'])}.`,
            a: '0 (odd-order skew-symmetric).',
          },
          {
            q: `<b>[JEE Advanced]</b> If ${f}(${x}) = ${vm([x, sq(x), cube(x)], ['1', `2${x}`, `3${sq(x)}`], ['0', '2', `6${x}`])}, find ${fp(f)}(${x}) at a general ${x} (use the row rule).`,
            a: `${f}(${x}) = 2${cube(x)}, so ${fp(f)}(${x}) = 6${sq(x)} (differentiating rows 1 and 2 produces duplicate rows → 0; only the last term survives).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Factorise ${vm([a, b, c], [sq(a), sq(b), sq(c)], [I('bc'), I('ca'), I('ab')])}.`,
            a: `${VDM}(${I('ab')} + ${I('bc')} + ${I('ca')}).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For 3 × 3 matrices, ${bar(`2${A}`)} in terms of ${DET_A} is:`,
        opts: [
          { label: `2${DET_A}`, nudge: `${opt('a')} treats it as a single-row scaling.` },
          { label: `6${DET_A}`, nudge: `${opt('b')} uses 2${n}.` },
          { label: `8${DET_A}`, nudge: null },
          { label: DET_A, nudge: `${opt('d')} ignores the scalar.` },
        ],
        correct: 2,
        solution: `${bar(I('kA'))} = ${k}<sup>${n}</sup>${DET_A} = 2<sup>3</sup>${DET_A} = 8${DET_A}.`,
      },
      {
        t: 'mcq',
        q: 'A skew-symmetric matrix of order 3 has determinant:',
        opts: [
          { label: 'always 0', nudge: null },
          { label: 'always 1', nudge: `${opt('b')} ignores the theorem.` },
          {
            label: 'always negative',
            nudge: `${opt('c')} invents a sign; the determinant is 0 for every choice of entries.`,
          },
          { label: 'always positive', nudge: `${opt('d')} ignores the theorem.` },
        ],
        correct: 0,
        solution: `Odd-order skew-symmetric ⇒ ${DET_A} = 0.`,
      },
      {
        t: 'mcq',
        q: `adj(${I('AB')}) equals:`,
        opts: [
          { label: `(${ADJ})(${ADJ_B})`, nudge: `${opt('a')} keeps the order (the classic error).` },
          { label: `(${ADJ_B})(${ADJ})`, nudge: null },
          { label: `${ADJ} + ${ADJ_B}`, nudge: `${opt('c')} treats adjoint as additive.` },
          { label: `adj(${I('BA')})`, nudge: `${opt('d')} confuses with commutativity, which fails in general.` },
        ],
        correct: 1,
        solution: `The adjoint reverses order, just like the inverse: adj(${I('AB')}) = (${ADJ_B})(${ADJ}).`,
      },
      {
        t: 'mcq',
        q: `If ${A} is 3 × 3 with ${DET_A} = 2, then ${DET_ADJ2} equals:`,
        opts: [
          { label: '2', nudge: `${opt('a')} ignores the powers.` },
          { label: '4', nudge: `${opt('b')} uses ${POW_N1} (one adjoint, not two).` },
          { label: '8', nudge: `${opt('c')} uses ${DET_A}<sup>${n}</sup>.` },
          { label: '16', nudge: null },
        ],
        correct: 3,
        solution: `${DET_ADJ2} = ${POW_SQ} = 2<sup>4</sup> = 16.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Differentiating after expanding.</b> For function-valued determinants, use the row-at-a-time rule; expanding first is often slower and error-prone.',
          `<b>Keeping order in adj(${I('AB')}).</b> It is (${ADJ_B})(${ADJ}), reversed, like the inverse.`,
          '<b>Applying “skew ⇒ 0” to even order.</b> The result is <b>odd-order only</b>.',
          `<b>Power slips in adjoint identities.</b> Track ${n} vs ${n} − 1 vs (${n} − 1)<sup>2</sup> carefully; for 3 × 3 these are 3, 2, 4.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Build a reflex for the three “instant-zero” patterns across the whole chapter: a zero row/column, two proportional rows/columns, and an odd-order skew-symmetric matrix. Any one of them lets you write 0 on sight, saving the entire expansion. For symbolic determinants, the column-sum trick (${C123}) is a natural first move.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Multiplicative</b>',
            note: `${bar(I('AB'))} = ${DET_A}${bar(B)}, ${bar(`${A}<sup>${n}</sup>`)} = ${DET_A}<sup>${n}</sup>, ${bar(I('kA'))} = ${k}<sup>${n}</sup>${DET_A}.`,
          },
          { f: '<b>Differentiation</b>', note: 'differentiate one row (or column) at a time; sum the resulting determinants.' },
          {
            f: '<b>Adjoint algebra</b>',
            note: `adj(${I('AB')}) = (${ADJ_B})(${ADJ}), adj(${I('kA')}) = ${k}<sup>${n}−1</sup> ${ADJ}, ${ADJ2} = ${DET_A}<sup>${n}−2</sup>${A}.`,
          },
          { f: '<b>Adjoint determinants</b>', note: `${DET_ADJ} = ${POW_N1}, ${DET_ADJ2} = ${POW_SQ}.` },
          {
            f: '<b>Special</b>',
            note: `Vandermonde → ∏(differences); odd-order skew-symmetric → 0; cyclic → (${a} + ${b} + ${c})(…).`,
          },
        ],
        aids: ['“Multiply the dets, differentiate row-by-row, reverse the adj, and zero the odd skew.”'],
      },
    ],
  },
];
