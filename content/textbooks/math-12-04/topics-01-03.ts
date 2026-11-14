import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 01–03, pp. 244–262 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Part 1
 * Determinant: Meaning, Definition & Expansion (pp. 244–249; its heading sits
 * on p. 244 under the chapter's contents), Part 2 Properties of Determinants
 * (pp. 250–257) and Part 3 Area of a Triangle, Collinearity & Equation of a
 * Line (pp. 258–262). The chapter's title page and contents (pp. 243–244) are
 * not copied. Each topic opens with its "Exam Relevance:" box as a part of its
 * own, then is split at its Sections 1 to 8. No drawings on these pages (the
 * vector shapes are rules, fraction bars and two answer boxes).
 * Every determinant is a <vmat> (rows <r>, cells <c>); every fraction is
 * stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant between two bars: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A grid in square brackets. */
const bm = (...rows: string[][]) => grid('bmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** |…| as a determinant or modulus, the opening bar glued to what it holds. */
const bar = (s: string) => `|⁠${s}|`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const P = I('P');
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
const x = I('x');
const y = I('y');
const z = I('z');
const lam = I('λ');
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const aa = (s: string) => sb(a, s);
const aij = sb(a, I('ij'));
const aii = sb(a, I('ii'));
const ann = sb(a, I('nn'));
const R = (s: string) => sb(I('R'), s);
const Cc = (s: string) => sb(C, s);
const M = (s: string) => sb(I('M'), s);
const Ri = R(i);
const Rj = R(j);
const Ci = Cc(i);
const Cj = Cc(j);
const SIGN = `(−1)<sup>${i}+${j}</sup>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const AT = `${A}<sup>T</sup>`;
const DET_A = bar(A);
const D = 'Δ';
const DP = 'Δ′';
const IJ = `${i}${NB}≠${NB}${j}`;
const x1 = sb(x, '1');
const x2 = sb(x, '2');
const x3 = sb(x, '3');
const y1 = sb(y, '1');
const y2 = sb(y, '2');
const y3 = sb(y, '3');
const pair = (u: string, v: string) => `(${u},${NB}${v})`;
const HALF = fr('1', '2');
const ABC = I('abc');
/** (a − b)(b − c)(c − a), the Vandermonde product. */
const VDM = `(${a}${NB}−${NB}${b})(${b}${NB}−${NB}${c})(${c}${NB}−${NB}${a})`;
/** The 3 × 3 area determinant with rows (x₁, y₁, 1), (x₂, y₂, 1), (x₃, y₃, 1). */
const AREA_DET = vm([x1, y1, '1'], [x2, y2, '1'], [x3, y3, '1']);
const AREA_EXP = `${x1}(${y2} − ${y3}) + ${x2}(${y3} − ${y1}) + ${x3}(${y1} − ${y2})`;
const C123 = `${Cc('1')} → ${Cc('1')} + ${Cc('2')} + ${Cc('3')}`;
const KA = bar(I('kA'));
/** log to a base, glued to its argument. */
const LOG = (base: string, arg: string) => `log<sub>${base}</sub>${NB}${arg}`;
/** A triple (u, v, w), kept on one line. */
const TRIPLE = (u: string, v: string, w: string) => `(${u},${NB}${v},${NB}${w})`;
/** Topic 02 MCQ 4: the book explains (b), (c) and (d) together; true of each. */
const LOOKALIKE = '<b>(b), (c), (d)</b> are look-alikes: no row operation produces them, and each is nonzero for generic entries.';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 244–249 ────────────────
  {
    n: '01',
    title: 'Determinant: Meaning, Definition & Expansion',
    kalam: 'A determinant is a single number squeezed out of a square arrangement of numbers.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the bedrock of the entire chapter: you cannot attempt a single determinant question without it. CBSE Boards ask direct 1–2 mark evaluations and “solve the determinant equation” problems. Every JEE Main/Advanced determinant question silently depends on fluent, error-free expansion.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A <b>determinant</b> is a single number squeezed out of a square arrangement of numbers. Give it a square grid and it hands you back one value that captures the grid’s “essence”: in particular, whether the rows pull in genuinely independent directions (non-zero) or secretly collapse onto each other (zero).',
      },
      {
        t: 'p',
        html: `You have met its smallest version already. For a 2 × 2 array, the determinant is the <b>cross-difference</b>:<br>${vm([a, b], [c, d])} = ${I('ad')} − ${I('bc')}.`,
      },
      {
        t: 'p',
        html: 'Geometrically this is the signed area of the parallelogram drawn by the two rows, a fact we lean on throughout Topic 02. The determinant of a 3 × 3 array is the signed volume of the box drawn by its three rows.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Just as net run rate compresses an entire cricket season into one number that tells you something real about a team, a determinant compresses a whole square table into one number that tells you something real about the system it represents: most importantly, whether a related set of equations has a clean unique answer.',
      },
      {
        t: 'p',
        html: `Two pieces of notation and history worth fixing in memory: the value is written det${NB}${A}, or with vertical bars ${DET_A}, or denoted ${D}. The vertical-bar notation was introduced by <b>Arthur Cayley</b> in 1841; the idea goes back to Seki and Leibniz in the late 1600s and was made famous by <b>Gabriel Cramer’s</b> 1750 rule for solving simultaneous equations. A determinant of order ${n} expands into ${n}! signed product terms (2 terms for order 2, 6 for order 3), which is exactly why we hunt for shortcuts (zeros, properties) instead of expanding blindly.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> A determinant is defined <b>only for a square matrix</b>. The order-1 determinant ${bar(a)} = ${a} is not the modulus: |⁠−5| = −5 as a determinant, even though −5’s absolute value is 5. The Sarrus shortcut (below) works for 3 × 3 <b>only</b>: never apply it to 2 × 2 or 4 × 4.`,
      },

      { t: 'part', title: 'Key definitions and formulas' },
      { t: 'p', html: 'A determinant is a <b>scalar</b> (dimensionless number).' },
      {
        t: 'formula',
        kicker: 'Order 1',
        main: `For ${A} = [${a}]: ${DET_A} = ${a}`,
        legend: [`${a} = the single entry of ${A}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Order 2',
        main: `${vm([aa('11'), aa('12')], [aa('21'), aa('22')])} = ${aa('11')}${aa('22')} − ${aa('12')}${aa('21')}`,
        legend: [`${aij} = the entry in row ${i}, column ${j}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Order 3: expansion along the first row',
        main: `${vm([aa('11'), aa('12'), aa('13')], [aa('21'), aa('22'), aa('23')], [aa('31'), aa('32'), aa('33')])} =<br>${aa('11')}${vm([aa('22'), aa('23')], [aa('32'), aa('33')])} − ${aa('12')}${vm([aa('21'), aa('23')], [aa('31'), aa('33')])}<br>+ ${aa('13')}${vm([aa('21'), aa('22')], [aa('31'), aa('32')])}`,
        legend: [`${aij} = the entry in row ${i}, column ${j}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Sign rule.</b> Each term carries the sign ${SIGN}: the checkerboard ${bm(['+', '−', '+'], ['−', '+', '−'], ['+', '−', '+'])}. A determinant may be expanded along <b>any</b> row or column with these signs; the answer is identical (the formal machinery is developed in Topic 04, Minors & Cofactors).`,
      },
      {
        t: 'p',
        html: '<b>Sarrus rule (order 3 only).</b> Rewrite the first two columns to the right of the determinant. Add the three full “↘” diagonals and subtract the three full “↙” diagonals:',
      },
      {
        t: 'formula',
        kicker: 'Sarrus rule (order 3 only)',
        main: `${DET_A} = (${aa('11')}${aa('22')}${aa('33')} + ${aa('12')}${aa('23')}${aa('31')} + ${aa('13')}${aa('21')}${aa('32')})<br>− (${aa('13')}${aa('22')}${aa('31')} + ${aa('11')}${aa('23')}${aa('32')} + ${aa('12')}${aa('21')}${aa('33')})`,
        legend: [`${aij} = the entry in row ${i}, column ${j}`],
        note: null,
      },
      { t: 'p', html: `<b>Number of terms.</b> An order-${n} determinant expands into ${n}! terms.` },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure: Expanding a 3 × 3 along a row/column',
        steps: [
          '<b>Choose the line</b> (row or column) with the most zeros: every zero entry removes a whole 2 × 2 evaluation.',
          '<b>Walk along that line.</b> For each entry, multiply it by the 2 × 2 determinant left after deleting its row and column (its minor).',
          `<b>Attach the checkerboard sign</b> ${SIGN} to each term.`,
          '<b>Add the signed terms.</b>',
        ],
      },
      {
        t: 'p',
        html: '<b>Why the alternating sign?</b> It is what makes the expansion consistent no matter which line you pick: the signs encode the orientation flips that occur as you “skip over” rows and columns.',
      },
      {
        t: 'p',
        html: '<b>Procedure: Sarrus (a 3 × 3 speed tool).</b> Augment with the first two columns, sum the down-right diagonal products, subtract the down-left diagonal products. It is fast but <b>mechanical</b>: it does not generalise and offers no zero-skipping, so for sparse determinants, row/column expansion is faster.',
      },
      {
        t: 'p',
        html: `<b>Procedure: Solving a “determinant equation”.</b> When a determinant containing an unknown ${x} is set equal to a value, expand fully to get a polynomial in ${x}, then solve. Wherever possible, <b>simplify with row/column operations first</b> (Topic 02) so the resulting polynomial is low-degree.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${vm(['3', '−2'], ['5', '4'])} and ${vm(['2', '1', '3'], ['0', '4', '1'], ['5', '2', '1'])}.`,
        steps: [
          'The 2 × 2: (3)(4) − (−2)(5) = 12 + 10 = 22.',
          `The 3 × 3, expanded along row 1:<br>2${vm(['4', '1'], ['2', '1'])} − 1${vm(['0', '1'], ['5', '1'])} + 3${vm(['0', '4'], ['5', '2'])}<br>= 2(4 − 2) − 1(0 − 5) + 3(0 − 20)<br>= 4 + 5 − 60 = −51.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap (Sarrus)',
        q: `Evaluate ${vm(['1', '2', '1'], ['0', '3', '2'], ['2', '1', '1'])} using Sarrus.`,
        steps: [
          'Down-right products: (1 · 3 · 1) + (2 · 2 · 2) + (1 · 0 · 1) = 3 + 8 + 0 = 11.',
          'Down-left products: (1 · 3 · 2) + (1 · 2 · 1) + (2 · 0 · 1) = 6 + 2 + 0 = 8.',
          `So ${DET_A} = 11 − 8 = 3.`,
          '<b>The trap:</b> Sarrus is only valid here because it’s 3 × 3. Students who memorise the “diagonal trick” sometimes try it on a 4 × 4: it gives nonsense. For 4 × 4 and up, you <b>must</b> use cofactor expansion (Topic 04).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (determinant equation)',
        q: `Find all ${x} satisfying ${vm([x, '1', '1'], ['1', x, '1'], ['1', '1', x])} = 0.`,
        steps: [
          `Use the symmetry: ${C123} gives a common factor (${x} + 2) in column 1:<br>${vm([`${x} + 2`, '1', '1'], [`${x} + 2`, x, '1'], [`${x} + 2`, '1', x])}<br>= (${x} + 2)${vm(['1', '1', '1'], ['1', x, '1'], ['1', '1', x])}.`,
          `Then ${R('2')} → ${R('2')} − ${R('1')}, ${R('3')} → ${R('3')} − ${R('1')} yields a triangular form with diagonal 1, (${x} − 1), (${x} − 1):<br>= (${x} + 2)(${x} − 1)<sup>2</sup>.`,
          `So ${DET_A} = 0 ⟺ ${x} = −2 or ${x} = 1. (This is the determinant behind the famous ${I('kx')} + ${y} + ${z} system of Topic 05.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (symbolic factorisation)',
        q: `Prove that ${vm(['1', '1', '1'], [a, b, c], [cube(a), cube(b), cube(c)])} = ${VDM}(${a} + ${b} + ${c}).`,
        steps: [
          `Treat the left side as a polynomial. If ${a} = ${b}, columns 1 and 2 coincide, so the determinant vanishes ⇒ (${a} − ${b}) is a factor; likewise (${b} − ${c}) and (${c} − ${a}). That is degree 3. But the determinant’s terms (e.g. ${I('bc')}<sup>3</sup>) are degree 4; since both the determinant and ${VDM} alternate, the quotient is symmetric of degree 1: it is ${k}(${a} + ${b} + ${c}).`,
          `Fixing the constant with ${a} = 0, ${b} = 1, ${c} = 2:<br>${vm(['1', '1', '1'], ['0', '1', '2'], ['0', '1', '8'])} = 1(8 − 2) = 6,<br>${VDM}(${a} + ${b} + ${c})<br>= (−1)(−1)(2)(3) = 6,<br>so the constant is 1 and the identity holds. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Evaluate ${vm(['4', '7'], ['−2', '5'])}.`, a: '34.' },
          { q: `<b>[CBSE]</b> Evaluate ${vm(['1', '0', '2'], ['3', '−1', '4'], ['2', '5', '1'])}.`, a: '13.' },
          { q: `<b>[JEE Main]</b> Solve ${vm([x, '3'], ['2', `${x} − 1`])} = 0.`, a: `${x} = −2, 3.` },
          {
            q: `<b>[JEE Main]</b> Evaluate ${vm(['0', '2', '0'], ['3', '1', '4'], ['0', '5', '0'])}.`,
            a: '0 (column 1 and column 3 each hold a single nonzero entry, and the surviving 2 × 2 has a zero column).',
          },
          {
            q: `<b>[JEE Advanced]</b> Show that ${vm(['1', a, sq(a)], ['1', b, sq(b)], ['1', c, sq(c)])} = ${VDM} (the Vandermonde determinant).`,
            a: 'Proved.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The value of the order-1 determinant |⁠−7| is:',
        opts: [
          { label: '7', nudge: '<b>(a)</b> is the absolute-value trap.' },
          { label: '−7', nudge: null },
          { label: '0', nudge: '<b>(c)</b> misreads the definition.' },
          { label: 'undefined', nudge: '<b>(d)</b> misreads the definition.' },
        ],
        correct: 1,
        solution: 'An order-1 determinant equals the entry itself, −7: it is <b>not</b> the modulus.',
      },
      {
        t: 'mcq',
        q: `${vm(['2', '4'], ['3', '6'])} equals:`,
        opts: [
          { label: '24', nudge: '<b>(a)</b> adds instead of subtracting the cross terms.' },
          { label: '0', nudge: null },
          { label: '−12', nudge: '<b>(c)</b> keeps only the second product, −4 · 3.' },
          { label: '12', nudge: '<b>(d)</b> keeps only the first product, 2 · 6.' },
        ],
        correct: 1,
        solution: '2 · 6 − 4 · 3 = 12 − 12 = 0 (the rows are proportional).',
      },
      {
        t: 'mcq',
        q: 'Expanding a 3 × 3 determinant along any row or column gives:',
        opts: [
          {
            label: 'different values for different rows',
            nudge: '<b>(a), (c), (d):</b> all three invent dependencies that don’t exist; the checkerboard signs guarantee consistency.',
          },
          { label: 'the same value always', nudge: null },
          {
            label: 'zero unless along row 1',
            nudge: '<b>(a), (c), (d):</b> all three invent dependencies that don’t exist; the checkerboard signs guarantee consistency.',
          },
          {
            label: 'twice the value along a column',
            nudge: '<b>(a), (c), (d):</b> all three invent dependencies that don’t exist; the checkerboard signs guarantee consistency.',
          },
        ],
        correct: 1,
        solution: 'The determinant is well-defined independent of the expansion line.',
      },
      {
        t: 'mcq',
        q: 'An order-4 determinant, fully expanded, has how many terms?',
        opts: [
          { label: '4', nudge: `<b>(a)</b> is ${n}.` },
          { label: '16', nudge: `<b>(b)</b> is ${sq(n)} (the entry count).` },
          { label: '24', nudge: null },
          { label: '12', nudge: '<b>(d)</b> is a guess.' },
        ],
        correct: 2,
        solution: `${n}! = 4! = 24.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Order-1 modulus confusion.</b> ${bar(a)} as a determinant is ${a}, not its absolute value.`,
          `<b>Dropping the middle sign.</b> In row-1 expansion the middle term carries a <b>minus</b>: −${aa('12')}(…). Forgetting it is the most common 3 × 3 error.`,
          '<b>Sarrus on the wrong size.</b> The diagonal trick is 3 × 3 only.',
          '<b>Brute-forcing sparse determinants.</b> Expanding along a dense line when a zero-rich line exists wastes time.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Before expanding, always scan for the zero-richest row/column and expand there; and for symbolic determinants, look for a column/row whose entries share a sum (apply ${C123}) to pull out a factor before any expansion. A two-second scan routinely halves the work.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Order 1</b>', note: `${bar(a)} = ${a} (not modulus). <b>Order 2:</b> ${I('ad')} − ${I('bc')}.` },
          { f: '<b>Order 3 (row 1)</b>', note: `${aa('11')}${M('11')} − ${aa('12')}${M('12')} + ${aa('13')}${M('13')}, signs ${SIGN}.` },
          { f: '<b>Expand along any line</b>', note: 'answer is invariant; pick the zero-richest.' },
          { f: '<b>Sarrus</b> (3 × 3 only)', note: 'sum ↘ diagonals − sum ↙ diagonals.' },
          { f: '<b>Term count</b>', note: `order ${n} ⇒ ${n}! terms.` },
          { f: '<b>Determinant equation</b>', note: 'simplify with row/column ops first, then solve the polynomial.' },
        ],
        aids: ['“Plus, minus, plus: march along the zeros.”'],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 250–257 ────────────────
  {
    n: '02',
    title: 'Properties of Determinants',
    kalam: 'Properties are the single most-used tool in the entire chapter: you simplify before you expand.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Properties are the single most-used tool in the entire chapter: you simplify before you expand. CBSE Boards no longer set “prove without expanding” questions (the rationalised NCERT book dropped the properties section), but the properties still make every Board evaluation faster. JEE Main poses 1–2 questions per paper, usually property-based factoring or fast evaluation ${ESTIMATE}. JEE Advanced folds properties into multi-step manipulations, often combined with algebra, sequences, or matrices.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you run a small electronics shop in a busy market. Every square array of numbers, a matrix, is like a fully-loaded inventory sheet. The <b>determinant</b> is a single number that squeezes out of that sheet and tells you something deep about it: whether the rows are “genuinely independent” or secretly repeating each other, and (geometrically) how much “space” the rows enclose.',
      },
      {
        t: 'p',
        html: 'Here is the cleanest way to see a determinant. Take the three rows of a 3 × 3 array and treat each as an arrow (a vector) in 3D space. Those three arrows form the edges of a slanted box: a parallelepiped. <b>The determinant is the signed volume of that box.</b> For a 2 × 2 array it’s the signed area of the parallelogram made by its two rows. Once you hold this picture, every property of determinants stops being a rule to memorise and becomes something obvious.',
      },
      {
        t: 'p',
        html: `Watch:<br>• <b>Swap two rows → the sign flips.</b> Swapping two edges of the box turns it “inside out” (reverses orientation), so the volume picks up a minus sign. Same box, opposite sign.<br>• <b>Two rows identical → determinant is zero.</b> If two edges of your box point the exact same way, the box is squashed flat. A flat box has zero volume. (Same thing if two rows are proportional: still flat.)<br>• <b>Multiply one row by ${k} → determinant multiplies by ${k}.</b> Stretch one edge to ${k} times its length and the box’s volume stretches by exactly ${k}.<br>• <b>Add a multiple of one row to another → determinant doesn’t change.</b> This is the magic one. Picture a stack of papers (a box). Push the top sheet sideways: a shear. The base is unchanged and the height is unchanged, so the volume is unchanged. That sideways push is precisely ${Ri} → ${Ri} + ${k}${Rj}.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A shopkeeper rearranging the order in which he lists his stock categories doesn’t change his total wealth: he might just flip a sign in his own bookkeeping convention (swap rule). But if he accidentally writes the same category twice, his ledger collapses into nonsense: the determinant goes to zero, signalling “these rows carry no new information.”',
      },
      {
        t: 'p',
        html: `<b>The transpose property</b> (that ${DET_A} = ${bar(AT)}, i.e. rows and columns are completely interchangeable) is the least visual but the most powerful. It means <b>every single property you learn for rows works identically for columns.</b> Learn six row rules and you’ve secretly learned twelve.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions</b><br>• Determinants exist <b>only for square matrices</b>. There is no determinant of a 2 × 3 array.<br>• “Pull a factor ${k} out of one row” (multiplies ${D} by ${k}) is <b>not</b> the same as multiplying the whole matrix: ${KA} = ${k}<sup>${n}</sup>${NB}${DET_A} for order ${n}. Mixing these up is the #1 exam error.<br>• The operation ${Ri} → ${Ri} + ${k}${Rj} must use a <b>different</b> row (${IJ}). You cannot add a multiple of a row to itself in one step.<br>• Zero shows up for <b>identical OR proportional</b> rows/columns: proportionality is enough; they need not be exactly equal.`,
      },

      { t: 'part', title: 'Key properties and definitions' },
      {
        t: 'p',
        html: `A determinant is a <b>scalar</b> (a pure number: dimensionless, no units) assigned to a square matrix. Let ${A} be of order ${n} and ${D} = ${DET_A}.`,
      },
      { t: 'p', html: '<b>P1: Transpose invariance.</b>' },
      {
        t: 'formula',
        kicker: 'Transpose invariance',
        main: `${bar(AT)} = ${DET_A}`,
        legend: [`${A} = a square matrix of order ${n}`, `${AT} = the transpose of ${A}`],
        note: null,
      },
      {
        t: 'p',
        html: 'Interchanging all rows with the corresponding columns leaves the value unchanged. <b>Consequence:</b> every property holds equally for rows and columns.',
      },
      {
        t: 'p',
        html: '<b>P2: Interchange (sign) property.</b> If any two rows (or two columns) are interchanged, the sign of the determinant reverses:',
      },
      {
        t: 'formula',
        kicker: 'Interchange (sign) property',
        main: `${Ri} ↔ ${Rj} ⇒ ${D} → −${D}`,
        legend: [`${Ri}, ${Rj} = two rows of the determinant`, `${D} = the determinant, ${DET_A}`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>P3: Zero property.</b> If any two rows (or columns) are <b>identical or proportional</b>, then',
      },
      {
        t: 'formula',
        kicker: 'Zero property',
        main: `${R(i)} = ${k}${R(j)} ⇒ ${D} = 0`,
        legend: [`${R(i)}, ${R(j)} = two rows (or two columns), ${IJ}`, `${k} = a constant (${k} = 1: identical rows)`, `${D} = the determinant, ${DET_A}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>P4: Scalar multiple property.</b> If every element of one row (or column) is multiplied by ${k}, the determinant is multiplied by ${k}:`,
      },
      {
        t: 'formula',
        kicker: 'Scalar multiple property',
        main: `${vm([`${k}${R('1')}`], [R('2')], [R('3')])} = ${k}${vm([R('1')], [R('2')], [R('3')])}<br>and for the whole matrix ${KA} = ${k}<sup>${n}</sup>${NB}${DET_A}`,
        legend: [`${R('1')}, ${R('2')}, ${R('3')} = the rows`, `${k} = a scalar`, `${n} = the order of ${A}`],
        note: null,
      },
      { t: 'p', html: 'A common factor of any row/column can be taken outside the bar.' },
      {
        t: 'p',
        html: '<b>P5: Sum (linearity) property.</b> If each element of one row is a sum of two terms, the determinant splits:',
      },
      {
        t: 'formula',
        kicker: 'Sum (linearity) property',
        main: `${vm([`${aa('1')} + ${x1}`, `${aa('2')} + ${x2}`, `${aa('3')} + ${x3}`], [sb(b, '1'), sb(b, '2'), sb(b, '3')], [sb(c, '1'), sb(c, '2'), sb(c, '3')])}<br>= ${vm([aa('1'), aa('2'), aa('3')], [sb(b, '1'), sb(b, '2'), sb(b, '3')], [sb(c, '1'), sb(c, '2'), sb(c, '3')])} + ${vm([x1, x2, x3], [sb(b, '1'), sb(b, '2'), sb(b, '3')], [sb(c, '1'), sb(c, '2'), sb(c, '3')])}`,
        legend: [`${aa('1')}, ${aa('2')}, ${aa('3')} = first terms of the split row`, `${x1}, ${x2}, ${x3} = second terms of the split row`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>P6: Row/Column operation property (invariance).</b> Adding to one row a constant multiple of another row leaves the value unchanged:',
      },
      {
        t: 'formula',
        kicker: 'Row/Column operation property (invariance)',
        main: `${Ri} → ${Ri} + ${k}${Rj} (${IJ}) ⇒ ${D} is unchanged`,
        legend: [`${Ri}, ${Rj} = two different rows`, `${k} = a constant`],
        note: null,
      },
      { t: 'p', html: 'This is the workhorse for creating zeros and common factors.' },
      {
        t: 'p',
        html: '<b>P7: Triangular determinant.</b> For an upper- or lower-triangular (or diagonal) matrix, the determinant is the product of the diagonal entries:',
      },
      {
        t: 'formula',
        kicker: 'Triangular determinant',
        main: `${D} = ${aa('11')}${aa('22')}${aa('33')} ⋯ ${ann}`,
        legend: [`${D} = the determinant of an upper- or lower-triangular (or diagonal) matrix`, `${aii} = the diagonal entries`],
        note: null,
      },
      { t: 'p', html: 'A determinant with an <b>all-zero row or column is 0.</b>' },
      { t: 'p', html: '<b>Bonus identities</b> (used later in the chapter):' },
      {
        t: 'p',
        html: `${bar(I('AB'))} = ${DET_A} ${bar(B)}<br>${bar(`${A}<sup>−1</sup>`)} = ${fr('1', DET_A)} (${DET_A}${NB}≠${NB}0)`,
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      {
        t: 'p',
        html: 'Most properties are not independent: they fall out of one another in a tidy chain. Understanding the chain is what separates a student who applies properties from one who merely recites them.',
      },
      { t: 'p', html: `<b>Theorem A: Identical rows force ${D} = 0 (P3 from P2)</b>` },
      { t: 'p', html: `<b>Claim:</b> If two rows of ${D} are identical, then ${D} = 0.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Suppose rows ${Ri} and ${Rj} are identical. Interchange them. By <b>P2</b>, the value becomes −${D}. But because the two rows were identical, the matrix after the swap is <b>exactly the same matrix</b>, so its determinant is still ${D}. Equating the two descriptions of the same object:<br>${D} = −${D} ⇒ 2${D} = 0 ⇒ ${D} = 0. ■`,
      },
      {
        t: 'p',
        html: '<b>Why the step works:</b> we counted the same number two different ways: once by “nothing changed” and once by “P2 changed the sign.” Only 0 can equal its own negative.',
      },
      { t: 'p', html: `<b>Theorem B: The operation ${R('1')} → ${R('1')} + ${k}${R('2')} is harmless (P6 from P5, P4, P3)</b>` },
      { t: 'p', html: `<b>Claim:</b> Adding a multiple of one row to another does not change ${D}.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Apply the sum property <b>P5</b> to split the modified first row, then the scalar property <b>P4</b>, then Theorem A (<b>P3</b>):<br>${vm([`${R('1')} + ${k}${R('2')}`], [R('2')], [R('3')])}<br>= ${vm([R('1')], [R('2')], [R('3')])} + ${vm([`${k}${R('2')}`], [R('2')], [R('3')])} (P5)<br>= ${D} + ${k}${vm([R('2')], [R('2')], [R('3')])} (P4; two identical rows)<br>= ${D} + ${k} · 0 = ${D} (P3). ■`,
      },
      {
        t: 'p',
        html: `<b>Read the logic:</b> the “damage” you add (the ${k}${R('2')} row) lands in a determinant that already has ${R('2')} sitting below it (two identical rows), which is automatically zero. So the addition is invisible. This single argument is the backbone of every “prove without expanding” question.`,
      },
      { t: 'p', html: 'A repeatable four-move algorithm:' },
      {
        t: 'proc',
        title: 'The “Prove Without Expanding” Procedure',
        steps: [
          `<b>Scan for symmetry.</b> If row-sums or column-sums are equal, do ${C123} (or the row version) to manufacture a common factor instantly.`,
          '<b>Pull out common factors</b> from any row/column using <b>P4</b>: this shrinks the numbers.',
          `<b>Create zeros</b> with ${Ri} → ${Ri} + ${k}${Rj} (<b>P6</b>) so the eventual expansion is trivial.`,
          '<b>Spot a kill.</b> If two rows/columns become identical or proportional, write 0 by <b>P3</b>. Otherwise reduce to triangular form and multiply the diagonal (<b>P7</b>).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: `Prove, without expanding, that<br>${D} = ${vm([`${a} − ${b}`, `${b} − ${c}`, `${c} − ${a}`], [`${b} − ${c}`, `${c} − ${a}`, `${a} − ${b}`], [`${c} − ${a}`, `${a} − ${b}`, `${b} − ${c}`])} = 0.`,
        steps: [
          `Notice every row (and column) of this determinant is built from the same three differences. Apply the column operation ${C123}. Each new first-column entry becomes:<br>(${a} − ${b}) + (${b} − ${c}) + (${c} − ${a}) = 0.`,
          `So:<br>${D} = ${vm(['0', `${b} − ${c}`, `${c} − ${a}`], ['0', `${c} − ${a}`, `${a} − ${b}`], ['0', `${a} − ${b}`, `${b} − ${c}`])}.`,
          `A determinant with an entire column of zeros is 0 (the zero-row/column rule after P7). Hence ${D} = 0. ■`,
          `<b>Presentation note for Boards:</b> state the operation used (here ${C123}) explicitly: examiners award a method mark for naming it.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap',
        q: `Evaluate as fast as you can:<br>${vm(['2', '4', '6'], ['1', '2', '3'], ['5', '7', '9'])}.`,
        steps: [
          `<b>Fast solution.</b> Don’t expand! Look at the first two rows: ${R('1')} = (2, 4, 6) = 2 × (1, 2, 3) = 2${R('2')}. Two <b>proportional</b> rows ⇒ determinant = 0 by P3. Answer in under five seconds: 0.`,
          '<b>The trap:</b> a student who jumps straight into cofactor expansion burns a full minute and risks an arithmetic slip, all to reach a zero that a single glance reveals. <b>Always scan for proportional/identical rows and column-sum symmetry before computing.</b>',
        ],
        ans: '0',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Determinants × Arithmetic Progressions)',
        q: `If ${p}, ${q}, ${r} are in arithmetic progression, show that<br>${D} = ${vm([`${x} + 1`, `${x} + 2`, `${x} + ${p}`], [`${x} + 2`, `${x} + 3`, `${x} + ${q}`], [`${x} + 3`, `${x} + 4`, `${x} + ${r}`])} = 0 for every ${x}.`,
        steps: [
          `This problem rewards spotting a linear dependence among the rows. Compute the combination ${R('1')} − 2${R('2')} + ${R('3')} column by column:<br>• Column 1: (${x} + 1) − 2(${x} + 2) + (${x} + 3) = 0.<br>• Column 2: (${x} + 2) − 2(${x} + 3) + (${x} + 4) = 0.<br>• Column 3: (${x} + ${p}) − 2(${x} + ${q}) + (${x} + ${r}) = (${p} + ${r}) − 2${q} = 0, because ${p}, ${q}, ${r} in AP ⇒ 2${q} = ${p} + ${r}.`,
          `Every column gives 0, so ${R('1')} − 2${R('2')} + ${R('3')} = <b>0</b>: the rows are linearly dependent. A determinant whose rows are linearly dependent is 0. Hence ${D} = 0 for all ${x}. ■`,
          `<b>The two concepts fused:</b> the AP condition (2${q} = ${p} + ${r}) and the determinant property that a dependent row set kills the determinant. Recognising “the third column is also in AP” is the whole game.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Factor-theorem reasoning)',
        q: `Prove that<br>${D} = ${vm([a, b, c], [sq(a), sq(b), sq(c)], [cube(a), cube(b), cube(c)])} = ${ABC}${NB}${VDM}.`,
        steps: [
          `First, extract the common factor from each column (P4): column 1 has factor ${a}, column 2 has ${b}, column 3 has ${c}:<br>${D} = ${ABC}${vm(['1', '1', '1'], [a, b, c], [sq(a), sq(b), sq(c)])} = ${ABC}${NB}${DP},<br>where ${DP} is the classic <b>Vandermonde</b> determinant. Now we evaluate ${DP} by root reasoning rather than brute expansion: the hallmark Advanced move.`,
          `Treat ${DP} as a polynomial in ${a}, ${b} and ${c}.<br>• If ${a} = ${b}, columns 1 and 2 of ${DP} become identical ⇒ ${DP} = 0. So (${a} − ${b}) is a factor.<br>• By the same argument (${b} = ${c} makes columns 2 and 3 identical, ${c} = ${a} columns 3 and 1), (${b} − ${c}) and (${c} − ${a}) are factors.`,
          `That accounts for a degree-3 polynomial ${VDM}. Counting the highest-degree term of ${DP} (expanding, the term ${b} · ${sq(c)} etc. shows the total degree is also 3), the remaining cofactor must be a pure constant ${lam}:<br>${DP} = ${lam}${NB}${VDM}.`,
          `Fix ${lam} by substituting convenient values ${a} = 0, ${b} = 1, ${c} = 2:<br>${DP} = ${vm(['1', '1', '1'], ['0', '1', '2'], ['0', '1', '4'])} = 1 · (4 − 2) = 2,<br>${VDM} = (−1)(−1)(2) = 2.`,
          `So ${lam} = 1, giving ${DP} = ${VDM} and finally<br>${D} = ${ABC}${NB}${VDM}. ■`,
          '<b>Why this is “Advanced”:</b> the factor theorem converts an ugly 3 × 3 expansion into a clean argument about roots and degree: a technique that generalises to far larger Vandermonde-type (alternating) determinants where direct expansion is hopeless.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE, older papers]</b> Evaluate using properties: ${vm(['3', '6', '9'], ['1', '2', '4'], ['2', '4', '8'])}.`,
            a: `0 (rows ${R('2')}, ${R('3')} proportional).`,
          },
          {
            q: `<b>[CBSE, older papers]</b> Prove without expanding: ${vm(['1', a, sq(a)], ['1', b, sq(b)], ['1', c, sq(c)])} = ${VDM}.`,
            a: 'Identity proved (Vandermonde).',
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${vm(['1', LOG(x, y), LOG(x, z)], [LOG(y, x), '1', LOG(y, z)], [LOG(z, x), LOG(z, y), '1'])}.`,
            a: '0.',
          },
          {
            q: `<b>[JEE Main]</b> If ${A} is a 3 × 3 matrix with ${DET_A} = 4, find the value of ${bar(`3${A}`)} + ${bar(AT)}.`,
            a: '112.',
          },
          {
            q: `<b>[JEE Advanced]</b> Prove that ${vm([`${b} + ${c}`, a, a], [b, `${c} + ${a}`, b], [c, c, `${a} + ${b}`])} = 4${ABC}.`,
            a: `4${ABC}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If two columns of a third-order determinant are interchanged, the new value equals the original value:',
        opts: [
          { label: 'multiplied by 2', nudge: '<b>(a)</b> wrongly imports the scalar-multiple idea.' },
          {
            label: 'unchanged',
            nudge: `<b>(b)</b> is the trap for students who confuse interchange with the operation ${Ci} → ${Ci} + ${k}${Cj} (which <b>is</b> harmless).`,
          },
          { label: 'multiplied by −1', nudge: null },
          { label: 'made zero', nudge: '<b>(d)</b> confuses interchange with the identical-column rule.' },
        ],
        correct: 2,
        solution: 'One interchange flips the sign (P2).',
      },
      {
        t: 'mcq',
        q: `The value of ${vm(['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'])} is:`,
        opts: [
          { label: '1', nudge: '<b>(d)</b> and <b>(a)</b> are arithmetic-error landing spots.' },
          { label: '0', nudge: null },
          {
            label: '−3',
            nudge: '<b>(c)</b> is what you get from a sign slip during a rushed expansion (−3 + 12 − 9 mis-added).',
          },
          { label: '24', nudge: '<b>(d)</b> and <b>(a)</b> are arithmetic-error landing spots.' },
        ],
        correct: 1,
        solution: `The rows are in AP, so ${R('1')} − 2${R('2')} + ${R('3')} = <b>0</b>: dependent rows ⇒ 0. The lesson: spot the AP pattern and skip the expansion entirely.`,
      },
      {
        t: 'mcq',
        q: `If ${A} is a 3 × 3 matrix with ${DET_A} = 5, then ${bar(`2${A}`)} equals:`,
        opts: [
          { label: '10', nudge: `<b>(a)</b> = 2 × 5: the classic error of treating 2${A} as scaling a single row.` },
          { label: '20', nudge: `<b>(b)</b> = 4 × 5 uses ${sq(k)} (forgot it’s order 3).` },
          { label: '40', nudge: null },
          { label: '80', nudge: '<b>(d)</b> over-corrects to 2<sup>4</sup>.' },
        ],
        correct: 2,
        solution: `${KA} = ${k}<sup>${n}</sup>${DET_A} = 2<sup>3</sup> × 5 = 40.`,
      },
      {
        t: 'mcq',
        q: `Without expanding, ${vm([a, b, c], [`${a} + 2${x}`, `${b} + 2${y}`, `${c} + 2${z}`], [x, y, z])} equals:`,
        opts: [
          { label: '0', nudge: null },
          { label: `2(${I('ax')} + ${I('by')} + ${I('cz')})`, nudge: LOOKALIKE },
          { label: `(${a} + ${b} + ${c})(${x} + ${y} + ${z})`, nudge: LOOKALIKE },
          { label: ABC, nudge: LOOKALIKE },
        ],
        correct: 0,
        solution: `Apply ${R('2')} → ${R('2')} − 2${R('3')}: the middle row becomes ${TRIPLE(a, b, c)}, identical to ${R('1')} ⇒ determinant 0 (P3).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Confusing ${I('kR')} with ${I('kA')}.</b> Pulling ${k} from one row multiplies ${D} by ${k}; multiplying the whole ${n} × ${n} matrix multiplies it by ${k}<sup>${n}</sup>. Exam-killer in scaling questions.`,
          `<b>Illegal simultaneous operations.</b> Doing ${R('1')} → ${R('1')} + ${R('2')} <b>and</b> ${R('2')} → ${R('2')} + ${R('1')} in the same step is invalid: both would use the original rows, the two new rows would be identical, and the determinant would wrongly become 0. Perform operations one at a time, so the second uses the updated ${R('1')}.`,
          '<b>Forgetting the sign on interchange.</b> Every single row/column swap costs a factor of −1. Two swaps return you to +; an odd number leaves −.',
          `<b>Thinking only equal rows give zero.</b> <b>Proportional</b> rows/columns also force ${D} = 0. Always check ratios, not just equality.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Before touching a determinant, glance for (i) a zero row/column, (ii) two proportional rows/columns, and (iii) equal row-sums or column-sums. The first two hand you 0 instantly; the third invites the ${C123} trick that pulls out a common factor in one move. This 5-second scan defeats most JEE/Board determinant questions before any real work begins.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${bar(AT)} = ${DET_A} → every row rule is also a column rule.`, note: '' },
          { f: `${Ri} ↔ ${Rj} ⇒ ${D} → −${D} (one swap = one sign flip).`, note: '' },
          { f: `Two identical <b>or proportional</b> rows/columns ⇒ ${D} = 0.`, note: '' },
          { f: `${k}${Ri} pulls out ${k}; for the whole matrix ${KA} = ${k}<sup>${n}</sup>${DET_A}.`, note: '' },
          { f: `${Ri} → ${Ri} + ${k}${Rj} (${IJ}) leaves ${D} <b>unchanged</b>`, note: 'the simplification workhorse.' },
          { f: `Triangular/diagonal ⇒ ${D} = ∏${NB}${aii}; a zero row/column ⇒ ${D} = 0.`, note: '' },
          { f: `${bar(I('AB'))} = ${DET_A}${bar(B)}, and ${bar(`${A}<sup>−1</sup>`)} = ${fr('1', DET_A)}.`, note: '' },
        ],
        aids: [
          '<b>The four moves: Swap → flip, Same → zero, Scale → pulls out, Shear → safe.</b>',
          '<b>Logical chain to remember:</b> P5 (split) + P4 (scalar) + P3 (identical → 0) ⟹ P6 (row operation is harmless).',
        ],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 258–262 ────────────────
  {
    n: '03',
    title: 'Area of a Triangle, Collinearity & Equation of a Line',
    kalam: 'A triangle is exactly half a parallelogram, so determinants are the natural tool for triangle area from coordinates.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed CBSE scorer: 1–2 mark area or collinearity questions appear almost every year, and “find ${k} so that the points are collinear” is a perennial ${ESTIMATE}. JEE Main uses it inside coordinate-geometry problems and loci; it is the cleanest real-world bridge between determinants and geometry.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 02 we saw that a 2 × 2 determinant is the signed area of a parallelogram. A triangle is exactly half a parallelogram, so determinants are the natural tool for triangle area from coordinates.',
      },
      {
        t: 'p',
        html: `Suppose a surveyor marks three corner pegs of a triangular plot at ${pair(x1, y1)}, ${pair(x2, y2)}, ${pair(x3, y3)}. Instead of measuring sides and angles, she can drop the three coordinate pairs into a single determinant and read off the area. The determinant does all the trigonometry silently.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The determinant returns a <b>signed</b> number: positive if the vertices are listed anticlockwise, negative if clockwise. Area can’t be negative, so we take the modulus and halve it. And here is the beautiful special case: if the three points are <b>collinear</b>, the “triangle” is squashed flat (zero height, zero area), so the determinant is exactly 0. That single fact turns a determinant into a collinearity detector, and (pushed one step further) into the equation of the line through two points.',
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> This applies to points in the <b>2-D plane</b>. The third column of 1’s is essential: it encodes the affine (position, not just direction) nature of the points; dropping it changes the meaning entirely. The result is an area only after taking ${HALF} and the modulus; the bare determinant is a signed quantity used directly for collinearity and line equations.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `For vertices ${A}${pair(x1, y1)}, ${B}${pair(x2, y2)}, ${C}${pair(x3, y3)}:` },
      { t: 'p', html: '<b>Area of the triangle.</b>' },
      {
        t: 'formula',
        kicker: 'Area of the triangle',
        main: `Area = ${HALF}|⁠${D}|,<br>${D} = ${AREA_DET}<br>Expanded: Area = ${HALF}|⁠${AREA_EXP}|`,
        legend: [
          `${x1}, ${y1} = the coordinates of ${A}`,
          `${x2}, ${y2} = the coordinates of ${B}`,
          `${x3}, ${y3} = the coordinates of ${C}`,
        ],
        note: null,
      },
      { t: 'p', html: '<b>Collinearity condition.</b> The three points are collinear ⟺' },
      {
        t: 'formula',
        kicker: 'Collinearity condition',
        main: `${AREA_DET} = 0`,
        legend: [`${sb(x, i)}, ${sb(y, i)} = the coordinates of the ${i}th point`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Equation of the line through ${pair(x1, y1)} and ${pair(x2, y2)}.</b> A general point ${pair(x, y)} lies on the line iff it is collinear with the two given points:`,
      },
      {
        t: 'formula',
        kicker: `Equation of the line through ${pair(x1, y1)} and ${pair(x2, y2)}`,
        main: `${vm([x, y, '1'], [x1, y1, '1'], [x2, y2, '1'])} = 0`,
        legend: [`${x}, ${y} = the coordinates of a general point`, `${x1}, ${y1} = the first given point`, `${x2}, ${y2} = the second given point`],
        note: null,
      },
      {
        t: 'p',
        html: 'All quantities are pure numbers (areas in square units of the coordinate system); no dimensional formula applies.',
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      { t: 'p', html: '<b>Theorem: The determinant area formula</b>' },
      { t: 'p', html: `<b>Claim.</b> The area of triangle ${I('ABC')} is ${HALF}|⁠${D}| with ${D} as above.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Place the triangle and compute the area as the trapezoidal difference under its edges (the “shoelace” idea). The signed area is<br>${HALF}[(${x1}${y2} − ${x2}${y1}) + (${x2}${y3} − ${x3}${y2}) + (${x3}${y1} − ${x1}${y3})].<br>Now expand ${D} along its third column:<br>${D} = (${x2}${y3} − ${x3}${y2}) − (${x1}${y3} − ${x3}${y1})<br>+ (${x1}${y2} − ${x2}${y1}),<br>which is precisely the bracketed sum, that is, twice the signed area. Hence signed area = ${HALF}${D}, and the geometric (unsigned) area is ${HALF}|⁠${D}|. ■`,
      },
      {
        t: 'p',
        html: '<b>Why the third column of 1’s?</b> It is what injects the positions of the points (not merely their differences) into a single determinant; algebraically it is the device that turns three coordinate pairs into the shoelace sum automatically.',
      },
      { t: 'p', html: '<b>Corollary: collinearity and the line equation</b>' },
      {
        t: 'p',
        html: `Collinear points bound a degenerate triangle of zero area, so ${D} = 0. Replacing one vertex by a variable point ${pair(x, y)} and demanding ${D} = 0 forces ${pair(x, y)} to be collinear with the two fixed points, i.e. to lie on the line through them. Expanding that determinant gives the familiar<br>${y} − ${y1} = ${fr(`${y2} − ${y1}`, `${x2} − ${x1}`)}(${x} − ${x1}) (for ${x1}${NB}≠${NB}${x2}; the determinant form also covers the vertical line).`,
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          'Write the 3 × 3 with coordinates in the first two columns and 1’s in the third.',
          'Expand (easiest along column 3).',
          `For <b>area</b>: take ${HALF}× the modulus. For <b>collinearity</b>: set the determinant to 0. For a <b>line</b>: keep one row as ${TRIPLE(x, y, '1')} and set the determinant to 0.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the area of the triangle with vertices ${pair('1', '2')}, ${pair('3', '5')}, ${pair('−2', '4')}.`,
        steps: [
          `${D} = ${vm(['1', '2', '1'], ['3', '5', '1'], ['−2', '4', '1'])}<br>= 1(5 − 4) − 2(3 + 2) + 1(12 + 10)<br>= 1 − 10 + 22 = 13.`,
          `Area = ${HALF}|⁠13| = ${fr('13', '2')} = 6.5 square units.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Speed / Elimination Trap (collinearity)',
        q: `Are ${pair('1', '1')}, ${pair('2', '3')}, ${pair('3', '5')} collinear?`,
        steps: [
          `<b>Fast solution.</b> Slope from the first to the second is ${fr('3 − 1', '2 − 1')} = 2;<br><br>from the second to the third, ${fr('5 − 3', '3 − 2')} = 2.<br><br>Equal slopes ⇒ <b>collinear</b>: no determinant needed.`,
          `(Confirm: the determinant ${vm(['1', '1', '1'], ['2', '3', '1'], ['3', '5', '1'])} = −2 + 1 + 1 = 0.)`,
          '<b>The trap:</b> setting up and expanding the full determinant when a 5-second slope comparison settles a collinearity question. Use the determinant when coordinates are messy or a parameter is involved; use slopes when the numbers are clean.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (solve for a parameter)',
        q: `Find ${k} so that ${pair(k, '2')}, ${pair('−3', '4')}, ${pair('7', '−1')} are collinear.`,
        steps: [
          `Collinear ⇒ determinant = 0:<br>${vm([k, '2', '1'], ['−3', '4', '1'], ['7', '−1', '1'])}<br>= ${k}(4 + 1) − 2(−3 − 7) + 1(3 − 28)<br>= 5${k} + 20 − 25 = 5${k} − 5 = 0 ⇒ ${k} = 1.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (locus via area)',
        q: `Find the locus of a point ${P}${pair(x, y)} such that the area of the triangle formed by ${P}, ${pair('1', '0')} and ${pair('0', '1')} is always 2 square units.`,
        steps: [
          `${vm([x, y, '1'], ['1', '0', '1'], ['0', '1', '1'])}<br>= ${x}(0 − 1) − ${y}(1 − 0) + 1(1 − 0)<br>= −${x} − ${y} + 1.`,
          `Area = ${HALF}|⁠−${x} − ${y} + 1| = 2<br>⇒ |⁠${x} + ${y} − 1| = 4<br>⇒ ${x} + ${y} − 1 = ±4.`,
          `So the locus is the <b>pair of parallel lines</b> ${x} + ${y} = 5 and ${x} + ${y} = −3: every point on either line gives a triangle of area 2. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the area of the triangle with vertices ${pair('0', '0')}, ${pair('4', '0')}, ${pair('0', '6')}.`,
            a: '12 sq units.',
          },
          {
            q: `<b>[CBSE]</b> Show that ${pair('2', '3')}, ${pair('4', '7')}, ${pair('6', '11')} are collinear.`,
            a: 'Determinant = 0, collinear.',
          },
          {
            q: `<b>[JEE Main]</b> The triangle with vertices ${pair(lam, '2')}, ${pair('1', '3')}, ${pair('4', '−1')} has area ${fr('11', '2')}. Find ${lam}.`,
            a: `${lam} = ${fr('9', '2')} or ${lam} = −1.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the equation of the line through ${pair('2', '3')} and ${pair('−1', '5')} using a determinant.`,
            a: `2${x} + 3${y} − 13 = 0.`,
          },
          {
            q: `<b>[JEE Advanced]</b> If ${pair(a, '0')}, ${pair('0', b)}, ${pair('1', '1')} are collinear (with ${a}, ${b}${NB}≠${NB}0), prove that ${fr('1', a)} + ${fr('1', b)} = 1.`,
            a: 'Proved.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The area of the triangle with vertices ${pair('0', '0')}, ${pair('3', '0')}, ${pair('0', '4')} is:`,
        opts: [
          { label: '12', nudge: `<b>(a)</b> forgets the factor ${HALF}.` },
          { label: '6', nudge: null },
          { label: '7', nudge: '<b>(c)</b> adds the legs.' },
          { label: '24', nudge: `<b>(d)</b> doubles the determinant instead of halving it.` },
        ],
        correct: 1,
        solution: `${HALF}|⁠12| = 6<br>(or simply ${HALF} · base · height = ${HALF} · 3 · 4).`,
      },
      {
        t: 'mcq',
        q: 'Three points are collinear if and only if the area determinant equals:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> confuses “zero area” with specific nonzero values.' },
          { label: HALF, nudge: '<b>(b)</b> confuses “zero area” with specific nonzero values.' },
          { label: '0', nudge: null },
          { label: 'any positive number', nudge: '<b>(d)</b> confuses “zero area” with a nonzero area.' },
        ],
        correct: 2,
        solution: 'Collinearity = degenerate (zero-area) triangle ⇒ determinant 0.',
      },
      {
        t: 'mcq',
        q: `If ${pair('2', '−3')}, ${pair(lam, '1')}, ${pair('0', '4')} are collinear, then ${lam} equals:`,
        opts: [
          { label: fr('6', '7'), nudge: null },
          { label: `−${fr('6', '7')}`, nudge: '<b>(b)</b> flips a sign in the expansion.' },
          { label: fr('7', '6'), nudge: '<b>(c)</b> inverts the final fraction.' },
          { label: fr('2', '7'), nudge: `<b>(d)</b> slips in the first term: taking 2(1 − 4) as −2 gives 7${lam} − 2 = 0.` },
        ],
        correct: 0,
        solution: `Set the determinant to zero and expand along row 1:<br>${vm(['2', '−3', '1'], [lam, '1', '1'], ['0', '4', '1'])}<br>= 2(1 − 4) + 3(${lam} − 0) + 1(4${lam} − 0)<br>= −6 + 3${lam} + 4${lam} = 7${lam} − 6 = 0 ⇒ ${lam} = ${fr('6', '7')}.`,
      },
      {
        t: 'mcq',
        q: `The factor of ${HALF} in the area formula is present because:`,
        opts: [
          { label: 'a determinant is always halved', nudge: '<b>(a)</b> is false in general.' },
          { label: 'a triangle is half its bounding parallelogram', nudge: null },
          { label: 'of the modulus', nudge: '<b>(c)</b> explains the modulus, not the half.' },
          { label: 'there are 3 vertices', nudge: '<b>(d)</b> is irrelevant.' },
        ],
        correct: 1,
        solution: 'The 3 × 3 area determinant equals ± twice the triangle’s area; halving recovers the triangle.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping the ${HALF} or the modulus.</b> The bare determinant is twice the signed area. Area needs both ${HALF} and |${NB}·${NB}|.`,
          '<b>Reporting a negative area.</b> A negative determinant just means clockwise vertex order; take the modulus.',
          '<b>Omitting the column of 1’s.</b> Without it the determinant no longer represents area.',
          '<b>Using area = 0 blindly.</b> A zero determinant means collinear (no triangle); don’t then “find an area.”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For collinearity with clean integer coordinates, compare slopes: it’s faster than a determinant. Reserve the determinant for messy coordinates or parameter problems, where setting it to 0 gives a clean linear/quadratic equation in the unknown.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Area</b>', note: `${HALF}|⁠${D}|, ${D} = ${AREA_DET}<br>= ${HALF}|⁠${AREA_EXP}|.` },
          { f: '<b>Collinear</b> ⟺ that determinant = 0.', note: '' },
          { f: '<b>Line through two points</b>', note: `put ${TRIPLE(x, y, '1')} as the first row and set the determinant = 0.` },
          { f: `The <b>column of 1’s</b> is mandatory; the ${HALF} <b>and modulus</b> are mandatory for area.`, note: '' },
        ],
        aids: ['“Coordinates left, ones on the right; half the size, take it positive.”'],
      },
    ],
  },
];
