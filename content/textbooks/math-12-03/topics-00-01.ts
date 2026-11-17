import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 00–01, pp. 186–199 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 00
 * Foundations & Representation (pp. 186–189; its heading sits on p. 186 under
 * the end of the contents) and Subtopic 01 Matrix Algebra & Operations
 * (pp. 190–199). The chapter's title and contents (pp. 185–186) are not
 * copied. Each topic opens with its "Exam Relevance:" box as a part of its
 * own, then is split at its Sections (Topic 00 has six, Topic 01 eight).
 * Figures stand where their captions are printed: 3.1 (caption p. 190, drawn
 * p. 191) after the paragraph that defines the order; 3.2 (caption p. 193,
 * drawn p. 194) after Procedure B. No unnumbered drawings.
 * Every grid is a <bmat> (rows <r>, cells <c>); every fraction is stacked
 * (<frac>); no em dashes.
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
const S = I('S');
const N = I('N');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const i = I('i');
const j = I('j');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const p = I('p');
const r = I('r');
const x = I('x');
const y = I('y');
const z = I('z');
const AB = I('AB');
const BA = I('BA');
const BC = I('BC');
const kA = I('kA');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const aij = sb(a, I('ij'));
const bij = sb(b, I('ij'));
const air = sb(a, I('ir'));
const brj = sb(b, I('rj'));
const aii = sb(a, I('ii'));
const mxn = `${m} × ${n}`;
const KMN = `${k}<sup>${I('mn')}</sup>`;
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const SUM_R = `∑<sub>${r}</sub> ${air}${brj}`;
const SUM_R1N = `∑<sub>${r}=1</sub><sup>${n}</sup> ${air}${brj}`;
const TRACE = `tr(${A}) = ∑<sub>${i}=1</sub><sup>${n}</sup> ${aii}`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const col = (u: string, v: string) => bm([u], [v]);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 00 · pp. 186–189 ────────────────
  {
    n: '00',
    title: 'Foundations & Representation',
    kalam: '“Order” is an ordered pair: a 2 × 3 matrix and a 3 × 2 matrix are different even though both have 6 elements.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Almost every <b>CBSE</b> paper opens the matrices section with a “construct the matrix” or “find the order / number of elements” question (1–2 marks): easy marks that students lose only through carelessness ${ESTIMATE}. <b>JEE Main</b> turns the counting idea into quick objective questions (“how many matrices…”). This is the launch pad for the whole chapter. (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Before you can add, multiply, or invert matrices, you have to be fluent in two very basic skills: <b>building</b> a matrix when someone hands you a rule, and <b>counting</b> how many matrices a description allows. Both sound trivial, and both are quietly examined every single year ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `A matrix is just a filled-in grid, so if someone gives you a recipe for each cell (a formula ${aij} that depends on the row number ${i} and column number ${j}) you simply walk the grid cell by cell and apply the recipe. It is exactly like filling a cinema seating chart where the ticket price depends on the row and the seat: row 1 seat 1 has one price, row 2 seat 3 another, all from the same pricing rule.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> The order ${mxn} tells you the grid has ${mxn} cells: no more, no fewer. So a matrix with, say, 12 elements could be a 1 × 12 strip, a 3 × 4 block, a 4 × 3 block, a 2 × 6, and so on: every way of writing 12 as (rows)×(columns). Counting matrices is therefore really counting arrangements, and that is pure logic, not computation.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• ${i} always indexes the <b>row</b> and ${j} the <b>column</b>: never swap them, or every entry lands in the wrong place.<br>• The number of elements equals ${mxn} exactly; a matrix cannot be partially filled.<br>• “Order” is an ordered pair: a 2 × 3 matrix and a 3 × 2 matrix are <b>different</b> even though both have 6 elements.`,
      },

      { t: 'part', title: 'Key definitions and procedures' },
      {
        t: 'p',
        html: '<b>Math note:</b> no dimensional formula applies. The governing facts are the indexing convention and two counting principles.',
      },
      {
        t: 'p',
        html: `<b>Construction from a rule.</b> Given ${A} = [${aij}]<sub>${m}×${n}</sub> with ${aij} = ${f}${pair(i, j)}, the entry in row ${i}, column ${j} is obtained by substituting those values of ${i} and ${j} into ${f}.`,
      },
      {
        t: 'p',
        html: `<b>Counting principle 1: possible orders.</b> A matrix with exactly ${N} elements can have order ${mxn} for <b>every</b> factor pair with ${I('mn')} = ${N}. The number of possible orders equals the <b>number of divisors</b> of ${N}. (If ${N} is prime, only 2 orders exist: 1 × ${N} and ${N} × 1.)`,
      },
      {
        t: 'p',
        html: `<b>Counting principle 2: number of matrices.</b> The number of distinct matrices of order ${mxn} whose entries are chosen from a set of ${k} values is<br>${KMN},<br>because each of the ${I('mn')} cells is filled independently in ${k} ways.`,
      },
      {
        t: 'formula',
        kicker: 'Counting orders and matrices',
        main: `Possible orders: the number of divisors of ${N}<br>Matrices of order ${mxn} over a ${k}-set: ${KMN}`,
        legend: [`${N} = the number of elements`, `${m}, ${n} = the numbers of rows and columns`, `${k} = the number of values each entry can take`],
        note: null,
      },

      { t: 'part', title: 'Key procedures (worked examples)' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Construct the 2 × 3 matrix ${A} = [${aij}] where ${aij} = 2${i} + 3${j}.`,
        steps: [
          'Apply the rule to each of the 6 cells:',
          `${sb(a, '11')} = 2(1) + 3(1) = 5,<br>${sb(a, '12')} = 2(1) + 3(2) = 8,<br>${sb(a, '13')} = 2(1) + 3(3) = 11,<br>${sb(a, '21')} = 2(2) + 3(1) = 7,<br>${sb(a, '22')} = 2(2) + 3(2) = 10,<br>${sb(a, '23')} = 2(2) + 3(3) = 13.`,
          `${A} = ${bm(['5', '8', '11'], ['7', '10', '13'])}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level (piecewise rule)',
        q: `Construct the 2 × 2 matrix ${A} = [${aij}] where ${aij} = ${i} + ${j} if ${i}${NB}≤${NB}${j}; ${aij} = ${i} − ${j} if ${i}${NB}>${NB}${j}.`,
        steps: [
          `Decide each cell by comparing ${i} and ${j}:<br>• ${sb(a, '11')}: ${i} = ${j}, so use ${i} + ${j} = 2.<br>• ${sb(a, '12')}: ${i} < ${j}, so use ${i} + ${j} = 3.<br>• ${sb(a, '21')}: ${i} > ${j}, so use ${i} − ${j} = 1.<br>• ${sb(a, '22')}: ${i} = ${j}, so use ${i} + ${j} = 4.`,
          `${A} = ${bm(['2', '3'], ['1', '4'])}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (counting orders)',
        q: 'A matrix has 18 elements. How many possible orders does it have? What if it had 7 elements?',
        steps: [
          'List factor pairs of 18: 1 × 18, 2 × 9, 3 × 6, 6 × 3, 9 × 2, 18 × 1: that is <b>6 orders</b> (equivalently, 18 = 2 × 3<sup>2</sup> has (1+1)(2+1) = 6 divisors).',
          'For 7 (prime): only 1 × 7 and 7 × 1, <b>2 orders</b>.',
        ],
        ans: '6 orders for 18; 2 orders for 7.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (counting matrices)',
        q: 'How many distinct 3 × 3 matrices can be formed using only the entries 0 and 1? How many 2 × 2 matrices using entries from {1, 2, 3}?',
        steps: [
          'Each cell is filled independently.',
          `• 3 × 3 with ${k} = 2 choices: 2<sup>9</sup> = 512.<br>• 2 × 2 with ${k} = 3 choices: 3<sup>4</sup> = 81.`,
        ],
        ans: '512 and 81.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Construct the 3 × 2 matrix ${A} = [${aij}] with ${aij} = ${fr(`(${i} + 2${j})<sup>2</sup>`, '2')}.`,
            a: `${bm([fr('9', '2'), fr('25', '2')], [fr('16', '2'), fr('36', '2')], [fr('25', '2'), fr('49', '2')])} = ${bm(['4.5', '12.5'], ['8', '18'], ['12.5', '24.5'])}.`,
          },
          {
            q: '<b>[CBSE]</b> A matrix has 24 elements. Write all possible orders. If it had 13 elements, how many orders are possible?',
            a: '24 elements → 1×24, 2×12, 3×8, 4×6, 6×4, 8×3, 12×2, 24×1 = <b>8 orders</b>; 13 → <b>2 orders</b>.',
          },
          {
            q: '<b>[JEE Main]</b> How many 2 × 3 matrices can be formed with entries from {0, 1, 2}?',
            a: '3<sup>6</sup> = 729.',
          },
          {
            q: `<b>[JEE Main]</b> Construct the 2 × 2 matrix ${A} = [${aij}] where ${aij} = |⁠−3${i} + ${j}|.`,
            a: `${bm(['2', '1'], ['5', '4'])}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of all possible matrices of order 3 × 3 with each entry 0 or 2 is',
        opts: [
          { label: '27', nudge: '<b>(a)</b> 27 = 3<sup>3</sup> uses the order 3 as both base and exponent, instead of 2 choices in each of 9 cells.' },
          { label: '18', nudge: '<b>(b)</b> 18 = 2 × 9 multiplies the choices by the number of cells instead of raising to the power.' },
          { label: '81', nudge: '<b>(c)</b> 81 = 3<sup>4</sup> uses the 2 × 2 count or the wrong base.' },
          { label: '512', nudge: null },
        ],
        correct: 3,
        solution: 'Nine cells, each filled in 2 ways: 2<sup>9</sup> = 512.',
      },
      {
        t: 'mcq',
        q: 'If a matrix has 5 elements, the number of possible orders is',
        opts: [
          { label: '1', nudge: '<b>(a)</b> 1 forgets order is an ordered pair.' },
          { label: '2', nudge: null },
          { label: '5', nudge: '<b>(c)</b> 5 counts elements, not orders.' },
          { label: '10', nudge: '<b>(d)</b> 10 doubles incorrectly.' },
        ],
        correct: 1,
        solution: '5 is prime, so only 1 × 5 and 5 × 1.',
      },

      { t: 'part', title: 'Pitfalls and pro-tips' },
      {
        t: 'p',
        html: `<b>Pitfalls.</b> Swapping ${i} and ${j} while constructing; forgetting that ${mxn} and ${n} × ${m} are different orders; counting divisors wrong for the order question; using the wrong base or exponent in ${KMN}.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> For “possible orders,” just count divisors of ${N}: factor ${N} into primes and multiply (exponent+1)s. For “number of matrices,” it is always (choices per cell)<sup>(number of cells)</sup>.`,
      },
      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Construct</b>', note: `${aij} = ${f}${pair(i, j)}, row ${i} then column ${j}.` },
          { f: `<b>Possible orders of ${N}-element matrix</b> = number of divisors of ${N}.`, note: '' },
          { f: `<b>Number of ${mxn} matrices over a ${k}-set</b> = ${KMN}.`, note: '' },
        ],
        aids: ['“<b>i</b> before <b>j</b>: <b>r</b>ow before <b>c</b>olumn.”'],
      },
    ],
  },

  // ──────────────── Topic 01 · pp. 190–199 ────────────────
  {
    n: '01',
    title: 'Matrix Algebra & Operations',
    kalam: 'A matrix is simply a rectangular arrangement of numbers in rows and columns.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is near-guaranteed marks on <b>CBSE Boards</b>, where equality of matrices and the three operations show up as 1–3 mark questions almost every year, frequently as “find the unknowns” from a matrix equation ${ESTIMATE}. <b>JEE Main</b> usually carries one question on matrix multiplication, powers, or the properties (especially non-commutativity) ${ESTIMATE}. <b>JEE Advanced</b> rarely tests this alone: it is woven into larger problems with determinants or inverses. (NEET does not test mathematics, so this topic does not apply to NEET aspirants.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you walk up to a railway reservation board at a busy station like New Delhi. Down the left side you have a list of trains: Rajdhani, Shatabdi, Duronto. Across the top you have the travel classes: 1A, 2A, 3A, SL. Inside the grid, every cell holds one number: the fare for that train in that class. That grid, stripped down to just the numbers, <b>is a matrix</b>.',
      },
      {
        t: 'p',
        html: `A matrix is simply a rectangular arrangement of numbers in rows and columns. But here is the idea that everything else hangs on: <b>position carries meaning</b>. The number sitting in row 2, column 3 is not interchangeable with the number in row 3, column 2: one might be the 3A fare of the Shatabdi, the other the 2A fare of the Duronto. We write the entry in the ${i}-th row and ${j}-th column as ${aij}, and the whole matrix as ${A} = [${aij}]<sub>${m}×${n}</sub>, where ${m} is the number of rows and ${n} the number of columns. The pair ${mxn} is called the <b>order</b> of the matrix.`,
      },
      { t: 'fig', id: 'm12-03-fig-3.1' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose the railways announce a flat festival surcharge: a second board with exactly the same trains and classes, holding the extra rupees per cell. To get the new fare board, you just add the two boards cell by cell. That is <b>matrix addition</b>, and notice the hidden condition: it only works because both boards have the same layout. You could never add a 3-train board to a 5-train board: there would be cells with no partner. Now suppose every fare goes up by 10%. You multiply every single cell by 1.1. That is <b>scalar multiplication</b>: one ordinary number stretching the entire grid uniformly.',
      },
      {
        t: 'p',
        html: 'The third operation, <b>matrix multiplication</b>, is the one that trips students up, because it is not done cell by cell. Picture a sweet shop: one matrix lists how many kilos of each mithai a customer buys, another lists the price per kilo, and multiplying them correctly combines a row of quantities with a column of prices to produce a total bill. That “row meets column” handshake is the heart of matrix multiplication, and it is why the operation cares so much about dimensions lining up.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions, when the rules bite:</b><br>• <b>Addition and subtraction</b> demand identical order. Different orders → the operation is simply undefined, not zero.<br>• <b>Multiplication</b> demands <b>conformability</b>: the number of columns of the first matrix must equal the number of rows of the second. ${AB} can be perfectly well-defined while ${BA} does not exist at all.<br>• Matrix multiplication is <b>non-commutative</b>: in general ${AB} ≠ ${BA}, even when both exist.<br>• A genuine shock from ordinary algebra: ${AB} = ${O} does <b>not</b> force ${A} = ${O} or ${B} = ${O}. Two non-zero matrices can multiply to the zero matrix.<br>• <b>Cancellation fails</b>: ${AB} = ${I('AC')} does <b>not</b> let you conclude ${B} = ${C}.<br>Hold on to that last cluster: most exam traps live there.`,
      },

      { t: 'part', title: 'Key definitions and conditions' },
      {
        t: 'p',
        html: '<b>Math note:</b> matrices are not physical quantities, so there is no dimensional formula to attach. The genuine “sanity check” for a matrix operation is its <b>order/conformability condition</b>, listed below for every operation.',
      },
      {
        t: 'p',
        html: `<b>Types of matrices</b><br>• <b>Row matrix:</b> one row, order 1 × ${n}. <b>Column matrix:</b> one column, order ${m} × 1.<br>• <b>Square matrix:</b> equal rows and columns, order ${n} × ${n}.<br>• <b>Diagonal matrix:</b> square, with every off-diagonal entry zero: ${aij} = 0 for ${i}${NB}≠${NB}${j}.<br>• <b>Scalar matrix:</b> a diagonal matrix whose diagonal entries are all equal.<br>• <b>Identity matrix</b> ${sb(I('I'), n)}: a scalar matrix with every diagonal entry 1.<br>• <b>Null / zero matrix</b> ${O}: every entry zero (any order).<br>• <b>Triangular matrix:</b> square, upper (zeros below the diagonal) or lower (zeros above).<br>• <b>Trace</b> of a square matrix: ${TRACE} (sum of diagonal entries).`,
      },
      {
        t: 'p',
        html: `<b>Equality of matrices:</b> ${A} = ${B} <b>iff</b> (i) they have the same order, <b>and</b> (ii) ${aij} = ${bij} for every ${i}, ${j}.`,
      },
      {
        t: 'table',
        title: 'The three operations',
        head: ['Operation', 'Defined when', 'Order of result', 'Rule'],
        rows: [
          [`${A} + ${B}`, `same order ${mxn}`, mxn, `(${A} + ${B})<sub>${I('ij')}</sub> = ${aij} + ${bij}`],
          [`${kA} (scalar ${k})`, 'always', mxn, `(${kA})<sub>${I('ij')}</sub> = ${k}${NB}${aij}`],
          [AB, `cols(${A}) = rows(${B})`, `${m} × ${p}`, `(${AB})<sub>${I('ij')}</sub> = ${SUM_R1N}`],
        ],
      },
      {
        t: 'p',
        html: `(For ${AB}: ${A} is ${mxn} and ${B} is ${n} × ${p}.)`,
      },
      {
        t: 'formula',
        kicker: 'Matrix operations',
        main: `(${A} + ${B})<sub>${I('ij')}</sub> = ${aij} + ${bij}<br>(${kA})<sub>${I('ij')}</sub> = ${k}${NB}${aij}<br>(${AB})<sub>${I('ij')}</sub> = ${SUM_R1N}`,
        legend: [
          `${A}, ${B} = matrices of the same order (for a sum) or of orders ${mxn} and ${n} × ${p} (for a product, which is ${m} × ${p})`,
          `${aij}, ${bij} = the entries in row ${i}, column ${j}`,
          `${k} = a scalar`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Properties, and their conditions</b><br>• <b>Addition:</b> commutative ${A} + ${B} = ${B} + ${A}; associative (${A} + ${B}) + ${C} = ${A} + (${B} + ${C}); additive identity ${A} + ${O} = ${A}; additive inverse ${A} + (−${A}) = ${O}. (All require equal orders.)<br>• <b>Scalar multiplication:</b> ${k}(${A} + ${B}) = ${kA} + ${I('kB')}; (${k} + ${l})${A} = ${kA} + ${I('lA')}; (${I('kl')})${A} = ${k}(${I('lA')}).<br>• <b>Matrix multiplication:</b> associative ${A}(${BC}) = (${AB})${C}; distributive ${A}(${B} + ${C}) = ${AB} + ${I('AC')} and (${A} + ${B})${C} = ${I('AC')} + ${BC}; identity ${sb(I('I'), m)}${A} = ${A} = ${A}${sb(I('I'), n)}. <b>Not commutative.</b> And crucially, ${AB} = ${O} ⇏ ${A} = ${O} or ${B} = ${O}.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Matrix operations are procedural, so instead of a derivation, here is the reasoning behind each procedure.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Solving a matrix equation (the CBSE bread-and-butter)',
        steps: [
          'Confirm both sides have the same order (otherwise no solution exists).',
          '<b>Equate corresponding entries</b>: equality of matrices turns one matrix equation into a system of ordinary scalar equations.',
          'Solve the scalar system. <b>Why this works:</b> equality is defined entry-by-entry, so a single 2 × 2 equation is secretly four scalar equations bundled together.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Multiplying two matrices',
        steps: [
          `<b>Conformability check.</b> Write the orders side by side: (${mxn})(${n} × ${p}). The two inner numbers must match; if they do, the outer numbers give the result’s order, ${m} × ${p}.`,
          `To get the entry (${AB})<sub>${I('ij')}</sub>, take <b>row</b> ${i} <b>of</b> ${A} and <b>column</b> ${j} <b>of</b> ${B}, multiply them term by term, and add: ${SUM_R}.`,
          'Repeat for every cell.',
        ],
      },
      { t: 'fig', id: 'm12-03-fig-3.2' },
      {
        t: 'p',
        html: `<b>Why row-times-column, and not cell-by-cell?</b> Because matrix multiplication encodes the <b>chaining of two processes</b>: first apply ${B}, then apply ${A}. The ${pair(i, j)} entry must gather every path that connects input ${j} to output ${i}, which is exactly the sum over the shared middle index ${r}. That shared index is why the inner dimensions must agree.`,
      },
      {
        t: 'p',
        html: `<b>Why multiplication is non-commutative.</b> Two reasons, one weaker and one stronger.<br>• <b>Dimensional:</b> if ${A} is 2 × 3 and ${B} is 3 × 2, then ${AB} is 2 × 2 but ${BA} is 3 × 3: they cannot even be compared.<br>• <b>Entry-level:</b> even for square matrices where both exist, the numbers differ. Take<br>${A} = ${bm(['1', '1'], ['0', '1'])}, ${B} = ${bm(['1', '0'], ['1', '1'])}.<br>Then ${AB} = ${bm(['2', '1'], ['1', '1'])} but ${BA} = ${bm(['1', '1'], ['1', '2'])}. Different matrices: order of operation matters.`,
      },
      {
        t: 'p',
        html: `<b>Why ${AB} = ${O} without either being zero.</b> Consider<br>${A} = ${bm(['1', '0'], ['0', '0'])}, ${B} = ${bm(['0', '0'], ['0', '1'])}, ${AB} = ${bm(['0', '0'], ['0', '0'])} = ${O}.<br>Geometrically, ${A} keeps only the first coordinate and ${B} keeps only the second; chaining them throws everything away. Neither matrix is zero, yet their product is, so the familiar “if a product is zero, a factor is zero” rule is false for matrices.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find ${a}, ${b}, ${c}, ${d} if<br>2${bm([a, b], [c, d])} + 3${bm(['1', '−1'], ['0', '2'])} = ${bm(['5', '1'], ['6', '16'])}.`,
        steps: [
          `First carry out the scalar multiplication and addition on the left:<br>${bm([`2${a}`, `2${b}`], [`2${c}`, `2${d}`])} + ${bm(['3', '−3'], ['0', '6'])} = ${bm([`2${a} + 3`, `2${b} − 3`], [`2${c}`, `2${d} + 6`])}.`,
          `Equating corresponding entries with the right-hand side:<br>2${a} + 3 = 5 ⇒ ${a} = 1,<br>2${b} − 3 = 1 ⇒ ${b} = 2,<br>2${c} = 6 ⇒ ${c} = 3,<br>2${d} + 6 = 16 ⇒ ${d} = 5.`,
        ],
        ans: `${a} = 1, ${b} = 2, ${c} = 3, ${d} = 5.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Speed Trap',
        q: `Let ${A} be 3 × 2, ${B} be 2 × 4, ${C} be 4 × 3. Which of ${AB}, ${BA}, ${BC}, (${AB})${C}, ${A}(${BC}) are defined, and what are their orders?`,
        steps: [
          '<b>The slow way</b> is to start computing entries, a waste. <b>The fast way</b> is to chain orders and check inner matches only:',
          `• ${AB}: (3 × 2)(2 × 4) ⇒ 3 × 4${NB}✓<br>• ${BA}: (2 × 4)(3 × 2) ⇒ 4 ≠ 3, <b>not defined</b>${NB}✗<br>• ${BC}: (2 × 4)(4 × 3) ⇒ 2 × 3${NB}✓<br>• (${AB})${C}: (3 × 4)(4 × 3) ⇒ 3 × 3${NB}✓<br>• ${A}(${BC}): (3 × 2)(2 × 3) ⇒ 3 × 3${NB}✓`,
          'Note they agree in order, as associativity requires.',
          '<b>Trap:</b> candidates who reflexively “compute” lose a full minute; conformability is settled by dimensions alone.',
        ],
        ans: `${AB} is 3 × 4, ${BA} is undefined, ${BC} is 2 × 3, and both (${AB})${C} and ${A}(${BC}) are 3 × 3.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multiplication + pattern/equality)',
        q: `If ${A} = ${bm(['1', '1'], ['0', '1'])} and ${A}<sup>${n}</sup> = ${bm(['1', '2026'], ['0', '1'])}, find ${n}.`,
        steps: [
          'Build the pattern from the bottom up.',
          `${sq(A)} = ${bm(['1', '1'], ['0', '1'])}${bm(['1', '1'], ['0', '1'])} = ${bm(['1', '2'], ['0', '1'])},<br>${A}<sup>3</sup> = ${sq(A)}${A} = ${bm(['1', '3'], ['0', '1'])}.`,
          `The top-right entry counts up by one each time, so we conjecture<br>${A}<sup>${n}</sup> = ${bm(['1', n], ['0', '1'])}.`,
          `<b>Verify by induction:</b> if ${A}<sup>${k}</sup> = ${bm(['1', k], ['0', '1'])}, then ${A}<sup>${k}+1</sup> = ${A}<sup>${k}</sup>${A} = ${bm(['1', `${k} + 1`], ['0', '1'])}, completing the step. Now equate with the given matrix.`,
        ],
        ans: `${n} = 2026.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${A} = ${bm(['2', '−1'], ['3', '−2'])}. Evaluate ${S} = ${A} + ${sq(A)} + ${A}<sup>3</sup> + ⋯ + ${A}<sup>2025</sup>.`,
        steps: [
          `First probe the structure of ${A} by squaring it:<br>${sq(A)} = ${bm(['2', '−1'], ['3', '−2'])}${bm(['2', '−1'], ['3', '−2'])}<br>= ${bm(['4 − 3', '−2 + 2'], ['6 − 6', '−3 + 4'])}<br>= ${bm(['1', '0'], ['0', '1'])} = ${I('I')}.`,
          `So ${sq(A)} = ${I('I')}: the matrix is its own “square root of identity.” This collapses every power into one of two values:<br>${A}<sup>even</sup> = ${I('I')},${NB}${NB}${NB}${A}<sup>odd</sup> = ${A}.`,
          `Among the exponents 1, 2, …, 2025 there are 1013 odd values (1, 3, …, 2025) and 1012 even values. Therefore<br>${S} = 1013${NB}${A} + 1012${NB}${I('I')}<br>= 1013${bm(['2', '−1'], ['3', '−2'])} + 1012${bm(['1', '0'], ['0', '1'])}.`,
          `Computing entrywise:<br>${S} = ${bm(['2026 + 1012', '−1013'], ['3039', '−2026 + 1012'])}.`,
          `The whole problem turns on spotting ${sq(A)} = ${I('I')} early: brute force over 2025 powers is hopeless.`,
        ],
        ans: `${S} = ${bm(['3038', '−1013'], ['3039', '−1014'])}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> If ${bm([`${x} + ${y}`, '2'], ['5', `${z} − 1`])} = ${bm(['7', '2'], ['5', '4'])} and ${x} − ${y} = 1, find ${x}, ${y}, ${z}.`,
            a: `${x} = 4, ${y} = 3, ${z} = 5.`,
          },
          {
            q: `<b>[CBSE]</b> Given ${A} = ${bm(['1', '2'], ['−1', '3'])} and ${B} = ${bm(['0', '1'], ['2', '−1'])}, compute 2${A} − 3${B}.`,
            a: `${bm(['2', '1'], ['−8', '9'])}.`,
          },
          {
            q: `<b>[JEE Main]</b> ${A} is 2 × 3, ${B} is 3 × 3, ${C} is 3 × 1. State the order of ${I('ABC')}, and say whether ${I('CAB')} is defined.`,
            a: `${I('ABC')} is 2 × 1; ${I('CAB')} is <b>not</b> defined (inner mismatch 1${NB}≠${NB}2).`,
          },
          {
            q: `<b>[JEE Main]</b> If ${A} = ${bm(['3', '0'], ['0', '2'])}, find ${A}<sup>5</sup>.`,
            a: `${bm(['243', '0'], ['0', '32'])}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find a non-zero 2 × 2 matrix ${B} such that ${bm(['1', '2'], ['2', '4'])}${B} = ${O}.`,
            a: `Any ${B} whose columns are multiples of ${col('−2', '1')}, e.g. ${B} = ${bm(['−2', '−4'], ['1', '2'])}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${A} is of order 3 × 4 and ${B} is of order 4 × 2, then ${AB} has order`,
        opts: [
          { label: '3 × 2', nudge: null },
          {
            label: '4 × 4',
            nudge: '<b>(b)</b> 4 × 4: picked by multiplying the two “4”s, confusing the inner (shared) dimension with the result.',
          },
          { label: '2 × 3', nudge: `<b>(c)</b> 2 × 3: the order of ${BA}-type thinking, i.e. reading the result backwards.` },
          {
            label: 'not defined',
            nudge: '<b>(d)</b> not defined: the trap for a student who checked the outer numbers (3 vs 2) instead of the inner ones.',
          },
        ],
        correct: 0,
        solution: `Inner dimensions 4 = 4 match, so ${AB} exists with the outer order 3 × 2.`,
      },
      {
        t: 'mcq',
        q: `For two square matrices ${A} and ${B} of the same order, which is <b>always</b> true?`,
        opts: [
          { label: `${AB} = ${BA}`, nudge: '<b>(a)</b>: not always true; multiplication is non-commutative.' },
          {
            label: `(${A} + ${B})<sup>2</sup> = ${sq(A)} + 2${AB} + ${sq(B)}`,
            nudge: `<b>(b)</b>: the classic error of writing ${AB} + ${BA} = 2${AB}, which assumes ${AB} = ${BA}.`,
          },
          { label: `(${A} + ${B})<sup>2</sup> = ${sq(A)} + ${AB} + ${BA} + ${sq(B)}`, nudge: null },
          {
            label: `(${AB})<sup>2</sup> = ${sq(A)}${sq(B)}`,
            nudge: `<b>(d)</b>: (${AB})<sup>2</sup> = ${I('ABAB')}, which is not ${sq(A)}${sq(B)} in general: equating them assumes ${BA} = ${AB}, again the commutativity assumption.`,
          },
        ],
        correct: 2,
        solution: `Expanding honestly,<br>(${A} + ${B})<sup>2</sup> = (${A} + ${B})(${A} + ${B})<br>= ${sq(A)} + ${AB} + ${BA} + ${sq(B)},<br>with ${AB} and ${BA} kept separate.`,
      },
      {
        t: 'mcq',
        q: `If ${A} = ${bm(['1', '2'], ['2', '4'])} and ${B}${NB}≠${NB}${O} satisfies ${AB} = ${O}, then the columns of ${B} are proportional to`,
        opts: [
          {
            label: col('1', '1'),
            nudge: `<b>(a), (c), (d):</b> substituting each into ${x} + 2${y} gives 3, 5, 4 respectively: none zero, so none lands in the required set. They tempt students who guess a “nice” vector instead of solving ${AB} = ${O} column by column.`,
          },
          { label: col('−2', '1'), nudge: null },
          {
            label: col('1', '2'),
            nudge: `<b>(a), (c), (d):</b> substituting each into ${x} + 2${y} gives 3, 5, 4 respectively: none zero, so none lands in the required set. They tempt students who guess a “nice” vector instead of solving ${AB} = ${O} column by column.`,
          },
          {
            label: col('2', '1'),
            nudge: `<b>(a), (c), (d):</b> substituting each into ${x} + 2${y} gives 3, 5, 4 respectively: none zero, so none lands in the required set. They tempt students who guess a “nice” vector instead of solving ${AB} = ${O} column by column.`,
          },
        ],
        correct: 1,
        solution: `Each column ${col(x, y)} of ${B} must satisfy ${A}${col(x, y)} = ${col('0', '0')}, i.e. ${x} + 2${y} = 0 ⇒ ${x} = −2${y}, giving the direction ${col('−2', '1')}.`,
      },
      {
        t: 'mcq',
        q: `If ${bm([`${a} + ${b}`, '6'], ['8', `${a} − ${b}`])} = ${bm(['5', '6'], ['8', '1'])}, then ${pair(a, b)} =`,
        opts: [
          { label: pair('3', '2'), nudge: null },
          { label: pair('2', '3'), nudge: `<b>(b)</b> ${pair('2', '3')}: the swapped answer, gives ${a} − ${b} = −1, not 1.` },
          {
            label: pair('4', '1'),
            nudge: `<b>(c)</b> ${pair('4', '1')}: satisfies ${a} + ${b} = 5 but ${a} − ${b} = 3${NB}≠${NB}1; the student solved only one equation.`,
          },
          {
            label: pair('5', '1'),
            nudge: `<b>(d)</b> ${pair('5', '1')}: gives ${a} + ${b} = 6${NB}≠${NB}5; the student matched the wrong cell.`,
          },
        ],
        correct: 0,
        solution: `Equating entries: ${a} + ${b} = 5 and ${a} − ${b} = 1, so ${a} = 3, ${b} = 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Multiplying element-by-element.</b> ${AB} is not [${aij}${bij}]. It is the row-times-column sum. Element-wise multiplication is a different (non-syllabus) operation entirely.`,
          `<b>Assuming ${AB} = ${BA}.</b> This silently corrupts (${A} + ${B})<sup>2</sup>, (${A} − ${B})(${A} + ${B}), and (${AB})<sup>2</sup>. Always keep ${AB} and ${BA} as distinct objects.`,
          `<b>“Product is zero, so a factor is zero.”</b> False for matrices: ${AB} = ${O} with ${A}, ${B}${NB}≠${NB}${O} is routine. Never “cancel” a matrix out of an equation.`,
          `<b>Adding matrices of different orders</b>, or declaring ${AB} “not defined” by checking outer instead of inner dimensions.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (conformability in 2 seconds):</b> write the orders touching: (${mxn})(${n} × ${p}). If the two middle numbers kiss, the product lives and inherits the outer pair ${m} × ${p}.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (powers):</b> for diagonal or triangular matrices, never brute-force ${A}<sup>${n}</sup>: diagonal entries just raise to the ${n}, and 2 × 2 unitriangular matrices follow a clean linear pattern (the third worked example of this topic). And always test whether ${sq(A)} = ${I('I')} or ${sq(A)} = ${A} first; it can collapse an entire summation (the fourth worked example of this topic).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Order</b> ${mxn}`, note: `rows first, columns second. Entry ${aij} = row ${i}, column ${j}.` },
          { f: '<b>Equality</b>', note: 'same order <b>and</b> every entry equal → splits into scalar equations.' },
          { f: '<b>Addition / subtraction</b>', note: 'same order only; done entrywise. Commutative & associative.' },
          { f: '<b>Scalar</b>', note: `${kA} = [${k}${aij}]: stretches every entry.` },
          {
            f: '<b>Multiplication</b>',
            note: `${AB} defined iff cols(${A}) = rows(${B}); (${AB})<sub>${I('ij')}</sub> = ${SUM_R}; result ${m} × ${p}. <b>Non-commutative.</b> ${I('IA')} = ${A} = ${I('AI')}. ${AB} = ${O} ⇏ ${A} = ${O} or ${B} = ${O}.`,
          },
          { f: '<b>Key formulas</b>', note: '' },
          { f: `(${A} + ${B})<sub>${I('ij')}</sub> = ${aij} + ${bij},`, note: '' },
          { f: `(${kA})<sub>${I('ij')}</sub> = ${k}${NB}${aij},`, note: '' },
          { f: `(${AB})<sub>${I('ij')}</sub> = ${SUM_R1N},`, note: '' },
          { f: `tr(${A}) = ∑<sub>${i}</sub> ${aii}.`, note: '' },
        ],
        aids: [
          '“Inner match, outer survive”: conformability + result order in four words.',
          `“Rows are Roman, columns are Catholic” (R before C): fixes the order of indices ${aij}.`,
          `“Matrices don’t swap”: ${AB} ≠ ${BA}, so never assume the binomial 2${AB} shortcut.`,
        ],
      },
    ],
  },
];
