import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 01–02, pp. 581–596 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopics 01
 * Binomial Expansion and Pascal’s Triangle (pp. 581–589) and 02 General,
 * Middle and Independent Terms (pp. 590–596). Subtopic 03 starts on p. 597.
 * Each topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figure 7.1 (caption p. 582, drawn p. 583) stands after the Pascal’s Triangle
 * paragraph of Topic 01’s Concept intuition. No unnumbered drawings.
 * ⁿCᵣ with an italic C, as the page sets it. Every fraction is stacked
 * (<frac>), n over r as a stacked binomial (<binom>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const T = (s: string) => `<i>T</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const E = (s: string) => `<i>E</i>(${s})`;

const a = '<i>a</i>';
const b = '<i>b</i>';
const n = '<i>n</i>';
const r = '<i>r</i>';
const k = '<i>k</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const m = '<i>m</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const NB = ' ';

const nCr = C(n, r);
const nCnr = C(n, '<i>n</i>−<i>r</i>');
const nCr1 = C(n, '<i>r</i>−1');
const n1Cr = C('<i>n</i>+1', r);
const AB = `(${a} + ${b})`;
const ABn = `${AB}<sup>${n}</sup>`;
const ANR = `${a}<sup><i>n</i>−<i>r</i></sup>${b}<sup><i>r</i></sup>`;
const GT = `${T('<i>r</i>+1')} = ${nCr} ${ANR}`;
const THEOREM = `${ABn} = ${SUM(`${r}=0`, n)} ${nCr} ${ANR}`;
const XQ = `${x}<sup>${q}</sup>`;
const STD = `(${al}${x}<sup>${p}</sup> + ${fr(be, XQ)})<sup>${n}</sup>`;
const EXP = `${E(r)} = ${p}(${n} − ${r}) − <i>qr</i>`;
const MID_EVEN = T('<i>n</i>/2+1');
const MID_ODD1 = T('(<i>n</i>+1)/2');
const MID_ODD3 = T('(<i>n</i>+3)/2');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 581–589 ────────────────
  {
    n: '01',
    title: 'Binomial Expansion and Pascal’s Triangle',
    kalam: 'This is why the coefficients are called binomial coefficients: they are literally combination counts.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the foundation slab of the whole chapter: every later idea (general term, middle term, greatest coefficient, coefficient-summation problems) is built on it. JEE Main almost always carries 1 direct question rooted here (number of terms, a coefficient, sum of coefficients) ${ESTIMATE}, and JEE Advanced uses it as scaffolding inside harder multi-concept problems. It is also a standard CBSE Class 11 short-answer/expansion question and a prerequisite for Probability and for Sequences & Series (Chapter 8).`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Suppose your local kirana shop sells two kinds of snacks: ${a} and ${b}. You want to make a “combo packet” by picking one snack from each of ${n} identical boxes, where every box contains exactly one ${a} and one ${b}. From each box you choose either an ${a} or a ${b}. How many kinds of combo packets can you build, and how many of each kind?`,
      },
      {
        t: 'p',
        html: `That, secretly, is the entire binomial theorem. When you multiply out<br>${AB}${AB}${AB} ⋯ ${AB} (${n} brackets),<br>every term in the final answer is made by walking through the ${n} brackets and picking either the ${a} or the ${b} from each one. If you pick ${b} from exactly ${r} brackets (and therefore ${a} from the remaining ${n} − ${r}), you get the product ${ANR}. The <b>number of different ways</b> to choose which ${r} brackets give you the ${b} is exactly ${nCr}: the count of ways to choose ${r} things out of ${n}. So the term ${ANR} shows up ${nCr} times, and its coefficient is ${nCr}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the powers and the counting are the same story told twice. The power of ${b} (“how many boxes gave a ${b}”) and the coefficient (“how many ways that could happen”) are joined at the hip. This is why the coefficients are called <b>binomial coefficients</b>: they are literally combination counts. It also instantly explains two facts students otherwise memorise blindly:<br>• In every term, the powers of ${a} and ${b} add up to ${n} (you made exactly ${n} choices, so (${n} − ${r}) + ${r} = ${n}). The expansion is homogeneous of degree ${n}.<br>• The coefficients are symmetric: ${nCr} = ${nCnr}, because choosing which ${r} brackets give ${b} is the same as choosing which ${n} − ${r} brackets give ${a}.`,
      },
      {
        t: 'p',
        html: `<b>Pascal’s Triangle</b> is just a lazy, beautiful way to read off these counts without computing factorials. Write 1 at the top, then each new row starts and ends with 1, and every interior number is the sum of the two numbers diagonally above it. Each row hands you the coefficients of ${ABn} directly.`,
      },
      { t: 'fig', id: 'm11-07-fig-7.1' },
      {
        t: 'p',
        html: `The reason the addition rule works is again pure counting: a term in ${ABn} comes either from multiplying an ${a} into a term of ${AB}<sup><i>n</i>−1</sup> or a ${b} into a term of ${AB}<sup><i>n</i>−1</sup>. Those two “parents” are the two numbers sitting above. This is <b>Pascal’s rule</b>, ${C('<i>n</i>−1', '<i>r</i>−1')} + ${C('<i>n</i>−1', r)} = ${nCr}, which is the algebraic skeleton of the triangle.`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> In this topic, the index ${n} is a <b>positive integer</b> (${n} ∈ ℕ). Only then does the expansion terminate after a clean ${n} + 1 terms with whole-number combination coefficients. If ${n} is negative or fractional (e.g. (1 + ${x})<sup>−1</sup> or (1 + ${x})<sup>1/2</sup>), the story changes completely: the expansion becomes an infinite series, used only for |${x}| < 1. That generalisation is a separate topic; do not apply Pascal’s triangle there.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Binomial Theorem (positive integral index)',
        main: `For ${n} ∈ ℕ:<br>${THEOREM}<br>= ${C(n, '0')} ${a}<sup><i>n</i></sup> + ${C(n, '1')} ${a}<sup><i>n</i>−1</sup>${b} + ⋯ + ${C(n, n)} ${b}<sup><i>n</i></sup>.`,
        legend: [
          `${n} = the index (a positive integer)`,
          `${a}, ${b} = the two terms of the binomial`,
          `${r} = the term index (0 ≤ ${r} ≤ ${n})`,
          `${nCr} = the binomial coefficient`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: `The same theorem in the form most exams use (powers of a single variable ${x})`,
        main: `(1 + ${x})<sup>${n}</sup> = ${SUM(`${r}=0`, n)} ${nCr} ${x}<sup>${r}</sup><br>= 1 + ${C(n, '1')} ${x} + ${C(n, '2')} ${x}<sup>2</sup> + ⋯ + ${C(n, n)} ${x}<sup>${n}</sup>.`,
        legend: [
          `${x} = the single variable`,
          `${n} = the index (a positive integer)`,
          `${r} = the term index (0 ≤ ${r} ≤ ${n})`,
          `${nCr} = the binomial coefficient`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Binomial coefficient',
        main: `${nCr} = ${bn(n, r)} = ${fr(`${n}!`, `${r}! (${n} − ${r})!`)},<br>0 ≤ ${r} ≤ ${n}, ${n}, ${r} ∈ ℤ<sub>≥0</sub>.`,
        legend: [`${nCr} = the count of ways to choose ${r} things out of ${n}`, `${n}, ${r} = non-negative integers (0 ≤ ${r} ≤ ${n})`],
        note: null,
      },
      { t: 'p', html: `(We use ${nCr} throughout; ${bn(n, r)} is the same object.)` },
      {
        t: 'formula',
        kicker: `General term (the (${r} + 1)th term, counting from the start)`,
        main: `${GT}, ${r} = 0, 1, 2, …, ${n}.`,
        legend: [
          `${T('<i>r</i>+1')} = the (${r} + 1)th term from the beginning`,
          `${n} = the index (a positive integer)`,
          `${a}, ${b} = the two terms of the binomial`,
          `${r} = the term index (0 ≤ ${r} ≤ ${n})`,
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Core properties (each valid for n ∈ ℕ, 0 ≤ r ≤ n)',
        head: ['Property', 'Statement', 'Validity / constraint'],
        rows: [
          ['Number of terms', `${n} + 1`, `${n} ∈ ℕ`],
          ['Sum of indices', `power of ${a} + power of ${b} = ${n} in every term`, 'always'],
          ['Symmetry', `${nCr} = ${nCnr}`, `0 ≤ ${r} ≤ ${n}`],
          ['Pascal’s rule', `${nCr} + ${nCr1} = ${n1Cr}`, `1 ≤ ${r} ≤ ${n}`],
          ['End coefficients', `${C(n, '0')} = ${C(n, n)} = 1`, 'always'],
          ['Sum of all coefficients', `put ${a} = ${b} = 1:<br>${SUM(`${r}=0`, n)} ${nCr} = 2<sup>${n}</sup>`, `${n} ∈ ℕ`],
          ['Alternating sum', `put ${a} = 1, ${b} = −1:<br>${SUM(`${r}=0`, n)} (−1)<sup>${r}</sup> ${nCr} = 0`, `${n} ≥ 1`],
        ],
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Proof of the Binomial Theorem by Mathematical Induction.</b><br><b>Claim:</b> ${THEOREM} for all ${n} ∈ ℕ.<br><b>Base case (${n} = 1):</b><br>RHS${NB}=${NB}${C('1', '0')}${NB}${a}${NB}+${NB}${C('1', '1')}${NB}${b}<br>=${NB}${a}${NB}+${NB}${b}${NB}=${NB}(${a}${NB}+${NB}${b})<sup>1</sup>. True.<br><b>Inductive step:</b> Assume the result holds for ${n} = ${k}, i.e.<br>${AB}<sup>${k}</sup> = ${SUM(`${r}=0`, k)} ${C(k, r)} ${a}<sup><i>k</i>−<i>r</i></sup>${b}<sup><i>r</i></sup>.`,
      },
      {
        t: 'p',
        html: `We must show it holds for ${n} = ${k} + 1. Multiply both sides by ${AB}; the simple reason is that ${AB}<sup><i>k</i>+1</sup> is just one more factor of ${AB} acting on the previous expansion:<br>${AB}<sup><i>k</i>+1</sup> = ${AB} ${SUM(`${r}=0`, k)} ${C(k, r)} ${a}<sup><i>k</i>−<i>r</i></sup>${b}<sup><i>r</i></sup><br>= ${SUM(`${r}=0`, k)} ${C(k, r)} ${a}<sup><i>k</i>−<i>r</i>+1</sup>${b}<sup><i>r</i></sup><br>+ ${SUM(`${r}=0`, k)} ${C(k, r)} ${a}<sup><i>k</i>−<i>r</i></sup>${b}<sup><i>r</i>+1</sup>.`,
      },
      {
        t: 'p',
        html: `In the second sum, shift the index (${r} → ${r} − 1) so both sums carry the same power ${a}<sup><i>k</i>+1−<i>r</i></sup>${b}<sup><i>r</i></sup>. Collecting the coefficient of ${a}<sup><i>k</i>+1−<i>r</i></sup>${b}<sup><i>r</i></sup> gives ${C(k, r)} + ${C(k, '<i>r</i>−1')}, which by <b>Pascal’s rule</b> equals ${C('<i>k</i>+1', r)}. Hence<br>${AB}<sup><i>k</i>+1</sup> = ${SUM(`${r}=0`, '<i>k</i>+1')} ${C('<i>k</i>+1', r)} ${a}<sup><i>k</i>+1−<i>r</i></sup>${b}<sup><i>r</i></sup>.<br>By induction the theorem holds for all ${n} ∈ ℕ.${NB}■`,
      },
      {
        t: 'p',
        html: 'The single load-bearing fact in that proof was Pascal’s rule, so let us prove it too, because it is the engine of the triangle.',
      },
      {
        t: 'p',
        html: `<b>Proof of Pascal’s rule, ${nCr} + ${nCr1} = ${n1Cr}.</b><br>${nCr} + ${nCr1}<br>= ${fr(`${n}!`, `${r}! (${n} − ${r})!`)} + ${fr(`${n}!`, `(${r} − 1)! (${n} − ${r} + 1)!`)}.<br>Take LCM ${r}! (${n} − ${r} + 1)!:<br>= ${fr(`${n}! (${n} − ${r} + 1) + ${n}! ${r}`, `${r}! (${n} − ${r} + 1)!`)}<br>= ${fr(`${n}! (${n} + 1)`, `${r}! (${n} + 1 − ${r})!`)}<br>= ${fr(`(${n} + 1)!`, `${r}! (${n} + 1 − ${r})!`)} = ${n1Cr}.${NB}■`,
      },
      {
        t: 'proc',
        title: 'Standard technique: constructing Pascal’s triangle (and using it)',
        steps: [
          `Start row 0 with a single 1 (this is ${AB}<sup>0</sup> = 1).`,
          'Begin and end every new row with 1.',
          'Fill each interior entry as the sum of the two entries diagonally above it.',
          `To expand ${ABn}, read off row ${n} as the coefficients, attach ${a}<sup>${n}</sup>, ${a}<sup><i>n</i>−1</sup>${b}, …, ${b}<sup>${n}</sup> with powers of ${a} falling and powers of ${b} rising.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Worked illustration of the read-off:</b> row 4 is 1 4 6 4 1, so<br>${AB}<sup>4</sup> = ${a}<sup>4</sup> + 4${a}<sup>3</sup>${b} + 6${a}<sup>2</sup>${b}<sup>2</sup> + 4<i>ab</i><sup>3</sup> + ${b}<sup>4</sup>.<br>Pascal’s triangle is fastest for small ${n} (say ${n} ≤ 6); for large ${n}, use ${nCr} directly: building the whole triangle up to row 15 just to read one coefficient is a waste of time.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Expand (2${x} + 3)<sup>4</sup> using the binomial theorem.`,
        steps: [
          `Here ${a} = 2${x}, ${b} = 3, ${n} = 4. The coefficients are row 4 of Pascal’s triangle: 1, 4, 6, 4, 1.<br>(2${x} + 3)<sup>4</sup> = ${C('4', '0')}(2${x})<sup>4</sup> + ${C('4', '1')}(2${x})<sup>3</sup>(3)<br>+ ${C('4', '2')}(2${x})<sup>2</sup>(3)<sup>2</sup> + ${C('4', '3')}(2${x})(3)<sup>3</sup><br>+ ${C('4', '4')}(3)<sup>4</sup>.`,
          `Compute each term carefully, raising the <b>whole</b> quantity 2${x} to its power:<br>= 1 · 16${x}<sup>4</sup> + 4 · 8${x}<sup>3</sup> · 3 + 6 · 4${x}<sup>2</sup> · 9<br>+ 4 · 2${x} · 27 + 1 · 81.`,
          `<b>Sanity check (Pro-Tip in action):</b> put ${x} = 1. LHS = (2 + 3)<sup>4</sup> = 625. RHS = 16 + 96 + 216 + 216 + 81 = 625. ✓`,
        ],
        ans: `(2${x} + 3)<sup>4</sup> = 16${x}<sup>4</sup> + 96${x}<sup>3</sup> + 216${x}<sup>2</sup><br>+ 216${x} + 81.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the number of dissimilar terms in the expansion of (1 + 2${x} + ${x}<sup>2</sup>)<sup>10</sup>.`,
        steps: [
          `<b>The trap:</b> a student sees a three-term base raised to the 10th power and reaches for the trinomial count ${bn(`${n}+2`, '2')} = ${bn('12', '2')} = 66, or panics and guesses 2(10) + 1 = 21 for the wrong reason.`,
          `<b>The fast, correct move:</b> recognise the base as a <b>perfect square</b>:<br>1 + 2${x} + ${x}<sup>2</sup> = (1 + ${x})<sup>2</sup><br>⇒ (1 + 2${x} + ${x}<sup>2</sup>)<sup>10</sup> = ((1 + ${x})<sup>2</sup>)<sup>10</sup><br>= (1 + ${x})<sup>20</sup>.`,
          `(1 + ${x})<sup>20</sup> has 20 + 1 = 21 terms.`,
          'The whole problem collapses the instant you factor. <b>Lesson:</b> before counting terms of a “trinomial”, always check whether the base is secretly a perfect power.',
        ],
        ans: '21',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `Find the coefficient of ${x}<sup>3</sup> in (1 + ${x})(1 − 2${x})<sup>5</sup>.`,
        steps: [
          `This links two ideas: distributing a linear factor, and the general term of a binomial. Write<br>(1 + ${x})(1 − 2${x})<sup>5</sup> = (1 − 2${x})<sup>5</sup> + ${x}(1 − 2${x})<sup>5</sup>.`,
          `So the coefficient of ${x}<sup>3</sup> in the product = [coeff of ${x}<sup>3</sup> in (1 − 2${x})<sup>5</sup>] + [coeff of ${x}<sup>2</sup> in (1 − 2${x})<sup>5</sup>] (the second factor’s ${x} shifts the index down by one).`,
          `General term of (1 − 2${x})<sup>5</sup>: ${T('<i>r</i>+1')} = ${C('5', r)}(−2${x})<sup>${r}</sup> = ${C('5', r)}(−2)<sup>${r}</sup>${x}<sup>${r}</sup>.`,
          `• Coeff of ${x}<sup>3</sup> (${r} = 3): ${C('5', '3')}(−2)<sup>3</sup> = 10 · (−8) = −80.<br>• Coeff of ${x}<sup>2</sup> (${r} = 2): ${C('5', '2')}(−2)<sup>2</sup> = 10 · 4 = 40.`,
          `Therefore the coefficient of ${x}<sup>3</sup> is −80 + 40 = −40.`,
        ],
        ans: '−40',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `The coefficients of three consecutive terms in the expansion of (1 + ${x})<sup>${n}</sup> are in the ratio 1 ∶ 3 ∶ 5. Find ${n} and the position of these terms.`,
        steps: [
          `Let the three consecutive coefficients be ${nCr1}, ${nCr}, ${C(n, '<i>r</i>+1')}. The key technique is the <b>ratio of consecutive binomial coefficients</b>, which avoids factorials entirely:<br>${fr(nCr1, nCr)} = ${fr(r, `${n} − ${r} + 1`)},<br>${fr(nCr, C(n, '<i>r</i>+1'))} = ${fr(`${r} + 1`, `${n} − ${r}`)}.`,
          `From the first ratio = ${fr('1', '3')}:<br>${fr(r, `${n} − ${r} + 1`)} = ${fr('1', '3')}<br>⇒ 3${r} = ${n} − ${r} + 1<br>⇒ ${n} = 4${r} − 1. (i)`,
          `From the second ratio = ${fr('3', '5')}:<br>${fr(`${r} + 1`, `${n} − ${r}`)} = ${fr('3', '5')}<br>⇒ 5(${r} + 1) = 3(${n} − ${r})<br>⇒ 8${r} + 5 = 3${n}. (ii)`,
          `Substitute (i) into (ii):<br>8${r} + 5 = 3(4${r} − 1) = 12${r} − 3<br>⇒ 4${r} = 8 ⇒ ${r} = 2, and then<br>${n} = 4(2) − 1 = 7.`,
          `So ${n} = 7, and the three terms are ${T('2')}, ${T('3')}, ${T('4')} (coefficients ${C('7', '1')}, ${C('7', '2')}, ${C('7', '3')}).`,
          `<b>Verify:</b> ${C('7', '1')} ∶ ${C('7', '2')} ∶ ${C('7', '3')} = 7 ∶ 21 ∶ 35 = 1 ∶ 3 ∶ 5. ✓`,
        ],
        ans: `${n} = 7`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE / School] Expand (${x} − 2${y})<sup>5</sup> completely using the binomial theorem.`,
            a: `${x}<sup>5</sup> − 10${x}<sup>4</sup>${y} + 40${x}<sup>3</sup>${y}<sup>2</sup> − 80${x}<sup>2</sup>${y}<sup>3</sup><br>+ 80<i>xy</i><sup>4</sup> − 32${y}<sup>5</sup>`,
          },
          {
            q: `[JEE Main] Find the number of dissimilar terms in the expansion of (1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup>)<sup>8</sup>.`,
            a: '25',
          },
          { q: `[JEE Main] Find the coefficient of ${x}<sup>4</sup> in (1 + ${x})<sup>2</sup>(1 − ${x})<sup>6</sup>.`, a: '−10' },
          {
            q: `[JEE Advanced] If ${C(n, '0')} + ${C(n, '1')} + ${C(n, '2')} + ⋯ + ${C(n, n)} = 4096, find ${n} and the value of ${C(n, '0')} − ${C(n, '1')} + ${C(n, '2')} − ⋯ + (−1)<sup>${n}</sup> ${C(n, n)}.`,
            a: `${n} = 12; alternating sum = 0`,
          },
          {
            q: `[JEE Advanced] The coefficients of three consecutive terms in (1 + ${x})<sup><i>n</i>+5</sup> are in the ratio 5 ∶ 10 ∶ 14. Find ${n}.`,
            a: `${n} = 6`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The number of terms in the expansion of (2${x} − 3${y})<sup>15</sup> is:`,
        opts: [
          { label: '14', nudge: `<b>(a)</b> 14 is ${n} − 1, an over-correction.` },
          { label: '15', nudge: `<b>(b)</b> 15 comes from using ${n} instead of ${n} + 1: the single most common slip in the whole chapter.` },
          { label: '16', nudge: null },
          {
            label: '30',
            nudge: `<b>(d)</b> 30 is 2${n}: doubling the index out of habit; the count is ${n} + 1 = 16.`,
          },
        ],
        correct: 2,
        solution: `The number of terms is ${n} + 1 = 15 + 1 = 16.`,
      },
      {
        t: 'mcq',
        q: `The sum of all the binomial coefficients in the expansion of (1 + ${x})<sup>12</sup> is:`,
        opts: [
          {
            label: '144',
            nudge: '<b>(a)</b> 144 = 12<sup>2</sup>: a student who confuses the sum of coefficients with the square of the index, or who simply squares the index.',
          },
          { label: '2048', nudge: `<b>(b)</b> 2048 = 2<sup>11</sup>: an off-by-one in the exponent (used ${n} − 1).` },
          { label: '4096', nudge: null },
          { label: '8192', nudge: `<b>(d)</b> 8192 = 2<sup>13</sup>: off-by-one the other way (${n} + 1).` },
        ],
        correct: 2,
        solution: `Put ${x} = 1: sum = 2<sup>12</sup> = 4096.`,
      },
      {
        t: 'mcq',
        q: `In the expansion of (${x} + ${y})<sup>6</sup>, the third binomial coefficient (i.e. the coefficient of the third term) is:`,
        opts: [
          {
            label: '6',
            nudge: `<b>(a)</b> 6 is ${C('6', '1')}, the classic <b>off-by-one</b>: it takes ${r} = 1, the coefficient of the second term ${T('2')}, for the third.`,
          },
          { label: '15', nudge: null },
          {
            label: '20',
            nudge: `<b>(c)</b> 20 is ${C('6', '3')}: reading ${r} = 3 for “third term” instead of ${r} = 2 (forgetting that ${T('<i>r</i>+1')} shifts the index).`,
          },
          { label: '21', nudge: `<b>(d)</b> 21 is ${C('7', '2')}: using the wrong Pascal row (${n} = 7 instead of ${n} = 6).` },
        ],
        correct: 1,
        solution: `Terms are numbered ${T('1')}, ${T('2')}, ${T('3')}, … with coefficients ${C('6', '0')}, ${C('6', '1')}, ${C('6', '2')}, …. The third term carries ${C('6', '2')} = 15.`,
      },
      {
        t: 'mcq',
        q: `The coefficient of ${x}<sup>2</sup> in the expansion of (1 + 2${x})<sup>6</sup> is:`,
        opts: [
          { label: '15', nudge: `<b>(a)</b> 15 is ${C('6', '2')} alone: forgetting to raise the coefficient 2 of ${x} to the power.` },
          { label: '30', nudge: `<b>(b)</b> 30 is ${C('6', '2')} · 2: raising 2 to the power 1 instead of 2.` },
          { label: '60', nudge: null },
          { label: '240', nudge: `<b>(d)</b> 240 is ${C('6', '2')} · 2<sup>4</sup> = 15 · 16: applying the wrong power 4 to the coefficient.` },
        ],
        correct: 2,
        solution: `${T('<i>r</i>+1')} = ${C('6', r)}(2${x})<sup>${r}</sup>; for ${x}<sup>2</sup> take ${r} = 2: ${C('6', '2')}${NB}· 2<sup>2</sup> = 15${NB}· 4 = 60. All three traps share one root error: not raising the entire term (2${x}) to its power.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Off-by-one on the number of terms.</b> ${ABn} has ${n} + 1 terms, not ${n}. Burn this in: a degree-${n} expansion runs from power 0 to power ${n}, which is ${n} + 1 values.`,
          `<b>Raising only part of a term.</b> In (2${x})<sup>3</sup> you must cube both the 2 and the ${x}: (2${x})<sup>3</sup> = 8${x}<sup>3</sup>, never 2${x}<sup>3</sup>. This single error silently wrecks coefficient questions (see question 4 of the Crack the MCQ part).`,
          `<b>Sign mistakes in (${a} − ${b})<sup>${n}</sup>.</b> Signs alternate +, −, +, − …; the ${r}th-from-zero term carries (−1)<sup>${r}</sup>. Even powers of ${b} stay positive, odd powers go negative.`,
          `<b>Term-number vs. index confusion.</b> The (${r} + 1)th term uses ${nCr}. “Third term” ⇒ ${r} = 2, not ${r} = 3. Also: Pascal’s rows start at ${n} = 0, so the row for ${ABn} is the (${n} + 1)th row.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (the ${x} = 1 sanity check).</b> After any expansion of (1 + ${x})<sup>${n}</sup>, substitute ${x} = 1: the coefficients must sum to 2<sup>${n}</sup>. For ${ABn}, plug ${a} = ${b} = 1 and confirm you get 2<sup>${n}</sup>, or plug the actual values to confirm you recover the original number. It takes five seconds and catches almost every arithmetic and off-by-one slip. A second free check: the binomial coefficients must be <b>symmetric</b> (${nCr} = ${nCnr}), so the row of ${nCr} should read the same forwards and backwards (the full coefficients need not: 16, 96, 216, 216, 81 in Example 1).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `Theorem (${n} ∈ ℕ)`, note: THEOREM },
          { f: 'General term', note: `${GT}: the “(${r} + 1)th” term uses ${nCr}` },
          { f: 'Number of terms', note: `${n} + 1. <b>Sum of powers</b> in each term: ${n}.` },
          { f: 'Symmetry', note: `${nCr} = ${nCnr}. <b>Pascal’s rule:</b> ${nCr} + ${nCr1} = ${n1Cr}` },
          { f: 'Sum of coefficients', note: `set ${x} = 1 ⇒ ∑ ${nCr} = 2<sup>${n}</sup>. <b>Alternating sum</b> = 0 (${n} ≥ 1).` },
          { f: 'Pascal’s triangle', note: `edges all 1; each interior = sum of the two above; row ${n} starts at ${n} = 0.` },
        ],
        aids: [
          `“Powers seesaw”: power of ${a} falls ${n} → 0 while power of ${b} rises 0 → ${n}; they always add to ${n}.`,
          `“${n} + 1, not ${n}”: for the term count.`,
          `“Raise the whole bracket”: (2${x})<sup>3</sup> = 8${x}<sup>3</sup>, cube everything inside.`,
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 590–596 ────────────────
  {
    n: '02',
    title: 'General, Middle and Independent Terms',
    kalam: 'Every “find the term …” question is, at heart, the same two-step move: figure out which r you need, then plug it in.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the most heavily examined slice of the chapter ${ESTIMATE}. “Find the term independent of ${x}” and “find the coefficient of ${x}<sup>${k}</sup>” are near-guaranteed in JEE Main (often 1–2 questions) ${ESTIMATE}, and middle-term/specific-term machinery threads through most JEE Advanced binomial problems. CBSE Class 11 routinely asks for the middle term or a stated term as a 2–3 mark question. Master the general term here and three-quarters of the chapter becomes mechanical.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01 we learned to expand ${ABn} into all ${n} + 1 terms. But exams rarely want the whole expansion; they want <b>one specific term</b>: the 7th term, the middle one, the one with no ${x} in it, or the one carrying ${x}<sup>12</sup>. Writing out all 51 terms of a degree-50 expansion to find one of them would be madness. So we need a way to jump straight to the term we want.`,
      },
      {
        t: 'p',
        html: `That tool is the <b>general term</b>, ${GT}, which we already met in Topic 01. Think of it as the <b>catalogue lookup</b> of the expansion. The index ${r} is like a page number in a railway timetable: feed in the right ${r} and the formula hands you that exact term (coefficient, powers, and all) without printing the whole timetable. Every “find the term …” question is, at heart, the same two-step move: figure out which ${r} you need, then plug it in.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the three named special terms are just three different ways of choosing which ${r} to ask for:<br>• <b>General term:</b> ${r} is given to you directly (“find the 6th term” ⇒ the 6th term is ${T('6')} = ${T('5+1')}, so ${r} = 5).<br>• <b>Middle term:</b> ${r} is the balance point of the row. The expansion has ${n} + 1 terms laid out like seats in a row. If ${n} + 1 is odd (i.e. ${n} even), there is exactly <b>one</b> centre seat. If ${n} + 1 is even (i.e. ${n} odd), there is <b>no single centre</b>: two seats share the middle, so there are <b>two</b> middle terms.<br>• <b>Term independent of ${x}:</b> ${r} is whatever makes the net power of ${x} collapse to zero. Picture a tug-of-war: a factor like ${x}<sup>${p}</sup> pulls the exponent up, a factor like ${fr('1', XQ)} = ${x}<sup>−<i>q</i></sup> pulls it down. The independent term is the one where the two pulls exactly cancel and ${x} vanishes, leaving a pure number (a constant).`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> The index ${r} that you solve for must be a non-negative integer with 0 ≤ ${r} ≤ ${n}. This is not a formality: it is a genuine yes/no test. If the exponent equation gives you ${r} = ${fr('16', '5')} or ${r} = −2 or ${r} = ${n} + 3, then <b>the term you are looking for simply does not exist.</b> A binomial expansion of a positive integral power need not contain a constant term, nor a term of every power. Do not “round ${r} to the nearest integer” to force an answer: that is one of the most punished mistakes in this topic.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `<b>General term</b> (the (${r} + 1)th term from the beginning): ${GT}, ${r} = 0, 1, 2, …, ${n}.` },
      {
        t: 'formula',
        kicker: 'Working form for the standard exam binomial',
        main: `For ${STD}:<br>${T('<i>r</i>+1')} = ${nCr} (${al}${x}<sup>${p}</sup>)<sup><i>n</i>−<i>r</i></sup> (${fr(be, XQ)})<sup>${r}</sup><br>= ${nCr} ${al}<sup><i>n</i>−<i>r</i></sup>${be}<sup><i>r</i></sup> ${x}<sup><i>p</i>(<i>n</i>−<i>r</i>)−<i>qr</i></sup>.`,
        legend: [
          `${al}, ${be} = the numerical/algebraic multipliers`,
          `${p}, ${q} = the (positive) powers of ${x} in the two parts`,
          `${n} = the index (${n} ∈ ℕ)`,
          `${r} = the term index (0 ≤ ${r} ≤ ${n})`,
        ],
        note: null,
      },
      { t: 'p', html: `The <b>net exponent of</b> ${x} is therefore<br>${EXP}.` },
      { t: 'p', html: 'This single expression powers every “specific term” question:' },
      {
        t: 'table',
        title: null,
        head: ['You want…', 'Set the condition', 'Then'],
        rows: [
          [`the term with ${x}<sup>${k}</sup>`, `${E(r)} = ${k}`, `solve for ${r} (must be a valid integer)`],
          [`the term independent of ${x}`, `${E(r)} = 0`, `solve for ${r} (must be a valid integer)`],
        ],
      },
      { t: 'p', html: `The expansion of ${ABn} has ${n} + 1 terms.` },
      {
        t: 'formula',
        kicker: 'Middle term(s)',
        main: `${n} even: ${MID_EVEN} (one middle term)<br>${n} odd: ${MID_ODD1} and ${MID_ODD3} (two middle terms)`,
        legend: [`${n} = the index of (${a} + ${b})<sup>${n}</sup>`, `${T(k)} = the ${k}th term from the beginning`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Term from the end.</b> The ${p}th term from the end of ${ABn} equals the (${n} − ${p} + 2)th term from the beginning; equivalently, it is the ${p}th term from the beginning of the reversed binomial (${b} + ${a})<sup>${n}</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Definitions.</b> ${al}, ${be} are the numerical/algebraic multipliers; ${p}, ${q} are the (positive) powers of ${x} in the two parts; ${n} ∈ ℕ is the index; ${r} ∈ {0, 1, …, ${n}} is the term index.`,
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Why ${n} even gives one middle term and ${n} odd gives two.</b> The terms are ${T('1')}, ${T('2')}, …, ${T('<i>n</i>+1')}, a list of length ${n} + 1.<br>• If ${n} is <b>even</b>, then ${n} + 1 is <b>odd</b>, and an odd-length list has a unique central element: the (${fr('<i>n</i>+1+1', '2')}) = (${fr(n, '2')} + 1)th term. Hence one middle term, ${MID_EVEN}.<br>• If ${n} is <b>odd</b>, then ${n} + 1 is <b>even</b>, and an even-length list has no single centre; the two central elements are the ${fr('<i>n</i>+1', '2')}th and the (${fr('<i>n</i>+1', '2')} + 1) = ${fr('<i>n</i>+3', '2')}th terms. Hence two middle terms.${NB}■`,
      },
      {
        t: 'p',
        html: `This one procedure answers find the term with ${x}<sup>${k}</sup>, find the term independent of ${x}, find the coefficient of ${x}<sup>${k}</sup>, and find a stated term:`,
      },
      {
        t: 'proc',
        title: 'Standard technique: the “specific term” algorithm',
        steps: [
          `<b>Write the general term</b> ${T('<i>r</i>+1')} for the given binomial and simplify all powers, collecting ${x} into a single power.`,
          `<b>Read off the net exponent</b> ${E(r)} of ${x}.`,
          `<b>Impose the condition:</b> ${E(r)} = ${k} for an ${x}<sup>${k}</sup> term, or ${E(r)} = 0 for the independent term.`,
          `<b>Solve for</b> ${r} <b>and validate</b>: is ${r} an integer with 0 ≤ ${r} ≤ ${n}? If not, the term does not exist: say so and stop.`,
          `<b>Back-substitute</b> the valid ${r} into ${T('<i>r</i>+1')} to get the term (or just its coefficient, if that is all that is asked).`,
        ],
      },
      {
        t: 'p',
        html: `The reasoning behind Step 4 is the whole point: a positive-integral-index expansion produces only the powers ${E('0')}, ${E('1')}, …, ${E(n)}, an arithmetic-style set of values. A power that is not in that set has no term; there is nothing to compute.`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: middle term.</b> First check the parity of ${n}, then read the position(s) straight off the boxed result in the Key formulas and definitions part, then apply the general term at the corresponding ${r} (${r} = ${fr(n, '2')} for even ${n}; ${r} = ${fr('<i>n</i>−1', '2')} and ${r} = ${fr('<i>n</i>+1', '2')} for odd ${n}). Do <b>not</b> hunt for “the middle” by expanding.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Find the 6th term in the expansion of (2${x} + ${fr('3', x)})<sup>9</sup>.`,
        steps: [
          `The 6th term is ${T('6')} = ${T('5+1')}, so ${r} = 5 (mind the off-by-one: “6th term” means ${r} = 5).`,
          `${T('6')} = ${C('9', '5')}(2${x})<sup>9−5</sup>(${fr('3', x)})<sup>5</sup><br>= ${C('9', '5')}(2${x})<sup>4</sup> · ${fr('3<sup>5</sup>', `${x}<sup>5</sup>`)}<br>= 126 · 16${x}<sup>4</sup> · ${fr('243', `${x}<sup>5</sup>`)}<br>= 126 · 16 · 243 · ${x}<sup>4−5</sup><br>= ${fr('489888', x)}.`,
          `Notice the whole bracket 2${x} was raised to the 4th power (giving 16${x}<sup>4</sup>, not 2${x}<sup>4</sup>) and the whole ${fr('3', x)} to the 5th: the recurring “raise the entire term” discipline from Topic 01.`,
        ],
        ans: `${T('6')} = ${fr('489888', x)}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the term independent of ${x} in (${x}<sup>2</sup> − ${fr('1', x)})<sup>9</sup>.`,
        steps: [
          `<b>The fast move:</b> you do <b>not</b> need the whole term yet; first find ${r}. General term:<br>${T('<i>r</i>+1')} = ${C('9', r)}(${x}<sup>2</sup>)<sup>9−<i>r</i></sup>(−${fr('1', x)})<sup>${r}</sup><br>= ${C('9', r)}(−1)<sup>${r}</sup>${x}<sup>2(9−<i>r</i>)−<i>r</i></sup><br>= ${C('9', r)}(−1)<sup>${r}</sup>${x}<sup>18−3<i>r</i></sup>.`,
          `Independent of ${x} ⇒ 18 − 3${r} = 0 ⇒ ${r} = 6 (a valid integer in [0, 9], so the term exists). Now plug in:<br>${T('7')} = ${C('9', '6')}(−1)<sup>6</sup> = 84.`,
          `<b>The trap it is built around:</b> the −${fr('1', x)} factor contributes ${x}<sup>−<i>r</i></sup>, so the net exponent is 2(9 − ${r})−${r}. Students who write 2(9 − ${r})+${r} get 18 − ${r} = 0 ⇒ ${r} = 18, which is out of range, and then either force a wrong term or wrongly declare “no such term.” Get the sign of the ${fr('1', x)} contribution right and the problem is ten seconds of work.`,
        ],
        ans: `Term independent of ${x} = 84.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `Find the middle term in the expansion of (${fr(`3${x}`, '2')} − ${fr('1', `3${x}`)})<sup>6</sup>.`,
        steps: [
          `This combines parity-checking, the general term, and fraction/sign handling. Here ${n} = 6 is <b>even</b>, so there is <b>one</b> middle term: ${T('6/2+1')} = ${T('4')}, i.e. ${r} = 3.`,
          `${T('4')} = ${C('6', '3')}(${fr(`3${x}`, '2')})<sup>3</sup>(−${fr('1', `3${x}`)})<sup>3</sup><br>= 20 · ${fr(`27${x}<sup>3</sup>`, '8')} · (−${fr('1', `27${x}<sup>3</sup>`)}).`,
          `The ${x}<sup>3</sup> cancels against ${x}<sup>−3</sup> and the 27 cancels:<br>= 20 · ${fr('27', '8')} · (−${fr('1', '27')})<br>= 20 · (−${fr('1', '8')}) = −${fr('5', '2')}.`,
          `(Here the middle term happened to also be independent of ${x}: a coincidence of the chosen powers, not a rule.)`,
        ],
        ans: `${T('4')} = −${fr('5', '2')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If the coefficient of ${x}<sup>7</sup> in (${a}${x}<sup>2</sup> + ${fr('1', `<i>bx</i>`)})<sup>11</sup> equals the coefficient of ${x}<sup>−7</sup> in (<i>ax</i> − ${fr('1', `<i>bx</i><sup>2</sup>`)})<sup>11</sup>, find the relation between ${a} and ${b} (${a} ≠ 0).`,
        steps: [
          `<b>First expansion.</b> General term:<br>${T('<i>r</i>+1')} = ${C('11', r)}(${a}${x}<sup>2</sup>)<sup>11−<i>r</i></sup>(${fr('1', '<i>bx</i>')})<sup>${r}</sup><br>= ${C('11', r)} ${a}<sup>11−<i>r</i></sup>${b}<sup>−<i>r</i></sup>${x}<sup>2(11−<i>r</i>)−<i>r</i></sup><br>= ${C('11', r)} ${a}<sup>11−<i>r</i></sup>${b}<sup>−<i>r</i></sup>${x}<sup>22−3<i>r</i></sup>.`,
          `For ${x}<sup>7</sup>: 22 − 3${r} = 7 ⇒ ${r} = 5. Coefficient = ${C('11', '5')} ${a}<sup>6</sup>${b}<sup>−5</sup>.`,
          `<b>Second expansion.</b> General term:<br>${T('<i>k</i>+1')} = ${C('11', k)}(<i>ax</i>)<sup>11−<i>k</i></sup>(−${fr('1', '<i>bx</i><sup>2</sup>')})<sup>${k}</sup><br>= ${C('11', k)} ${a}<sup>11−<i>k</i></sup>(−1)<sup>${k}</sup>${b}<sup>−<i>k</i></sup>${x}<sup>11−3<i>k</i></sup>.`,
          `For ${x}<sup>−7</sup>: 11 − 3${k} = −7 ⇒ ${k} = 6. Coefficient = ${C('11', '6')} ${a}<sup>5</sup>(−1)<sup>6</sup>${b}<sup>−6</sup> = ${C('11', '6')} ${a}<sup>5</sup>${b}<sup>−6</sup>.`,
          `<b>Equate.</b> The elegant step is the <b>symmetry</b> ${C('11', '5')} = ${C('11', '6')} (from Topic 01), so the binomial coefficients cancel:<br>${a}<sup>6</sup>${b}<sup>−5</sup> = ${a}<sup>5</sup>${b}<sup>−6</sup><br>⇒ ${fr(`${a}<sup>6</sup>`, `${a}<sup>5</sup>`)} = ${fr(`${b}<sup>−6</sup>`, `${b}<sup>−5</sup>`)}<br>⇒ ${a} = ${b}<sup>−1</sup><br>⇒ <i>ab</i> = 1.`,
          `The problem looks intimidating but collapses the moment you spot that ${C('11', '5')} and ${C('11', '6')} are equal.`,
        ],
        ans: '<i>ab</i> = 1',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE / School] Find the middle term in the expansion of (${fr(x, '3')} + 3${y})<sup>8</sup>.`,
            a: `70${NB}${x}<sup>4</sup>${y}<sup>4</sup> (middle term ${T('5')})`,
          },
          { q: `[JEE Main] Find the term independent of ${x} in (2${x}<sup>2</sup> + ${fr('1', x)})<sup>12</sup>.`, a: `7920 (at ${r} = 8)` },
          { q: `[JEE Main] Find the coefficient of ${x}<sup>5</sup> in (${x} − ${fr('2', `${x}<sup>2</sup>`)})<sup>8</sup>.`, a: `−16 (at ${r} = 1)` },
          {
            q: `[JEE Advanced] If the term independent of ${x} in (√${x} − ${fr(k, `${x}<sup>2</sup>`)})<sup>10</sup> equals 405, find the value of ${k}.`,
            a: `${k} = ±3 (at ${r} = 2)`,
          },
          {
            q: `[JEE Advanced] If the coefficients of ${x}<sup>2</sup> and ${x}<sup>3</sup> in the expansion of (3 + <i>ax</i>)<sup>9</sup> are equal, find ${a} (${a}${NB}≠${NB}0).`,
            a: `${a} = ${fr('9', '7')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The 7th term in the expansion of (${x} − ${fr('1', x)})<sup>10</sup> is:`,
        opts: [
          { label: fr('210', `${x}<sup>2</sup>`), nudge: null },
          {
            label: `−${fr('210', `${x}<sup>2</sup>`)}`,
            nudge: `<b>(b)</b> flips the sign, but (−${fr('1', x)})<sup>6</sup> is an even power, so it is positive; this catches students who assume “minus base ⇒ minus term.”`,
          },
          {
            label: `210${x}<sup>2</sup>`,
            nudge: `<b>(c)</b> reverses the exponent sign (${x}<sup>+2</sup> instead of ${x}<sup>−2</sup>), forgetting the ${fr('1', x)} pulls the power down.`,
          },
          { label: '252', nudge: `<b>(d)</b> is ${C('10', '5')} = 252, the off-by-one error of taking ${r} = 5 for the “7th” term.` },
        ],
        correct: 0,
        solution: `7th term ⇒ ${r} = 6: ${T('7')} = ${C('10', '6')} ${x}<sup>4</sup>(−${fr('1', x)})<sup>6</sup> = 210${NB}${x}<sup>4</sup> · ${x}<sup>−6</sup> = 210${x}<sup>−2</sup>.`,
      },
      {
        t: 'mcq',
        q: `How many middle terms does the expansion of (${x} + ${y})<sup>15</sup> have?`,
        opts: [
          { label: '1', nudge: `<b>(a)</b> assumes every expansion has a single middle term (true only for even ${n}).` },
          { label: '2', nudge: null },
          { label: '8', nudge: '<b>(c)</b> reports the position (8th) instead of the count.' },
          { label: '0', nudge: '<b>(d)</b> confuses “no single middle” with “no middle term at all.”' },
        ],
        correct: 1,
        solution: `${n} = 15 is odd, so ${n} + 1 = 16 terms: an even-length list with two central terms (${T('8')} and ${T('9')}).`,
      },
      {
        t: 'mcq',
        q: `The term independent of ${x} in (${x} − ${fr('2', `${x}<sup>2</sup>`)})<sup>9</sup> is:`,
        opts: [
          { label: '−672', nudge: null },
          { label: '672', nudge: '<b>(b)</b> drops the sign of (−2)<sup>3</sup>.' },
          {
            label: '−84',
            nudge: `<b>(c)</b> is −${C('9', '3')} = −84: it keeps the sign of (−2)<sup>3</sup> but drops the 2 altogether; (−2)<sup>3</sup> = −8, not −1.`,
          },
          { label: 'there is no such term', nudge: `<b>(d)</b> is the over-cautious student who miscomputed ${r} as non-integer.` },
        ],
        correct: 0,
        solution: `Net exponent = (9 − ${r}) − 2${r} = 9 − 3${r} = 0 ⇒ ${r} = 3. Then ${T('4')} = ${C('9', '3')}(−2)<sup>3</sup> = 84${NB}· (−8) = −672.`,
      },
      {
        t: 'mcq',
        q: `The expansion of (${x}<sup>2</sup> + ${fr('1', `${x}<sup>3</sup>`)})<sup>8</sup> has a term independent of ${x} equal to:`,
        opts: [
          {
            label: C('8', '3'),
            nudge: `<b>(a)</b> ${C('8', '3')} comes from forcing ${r} = ${fr('16', '5')} down to 3; that term is ${C('8', '3')}${x}, which still contains ${x}.`,
          },
          {
            label: C('8', '4'),
            nudge: `<b>(b)</b> ${C('8', '4')} comes from forcing ${r} = ${fr('16', '5')} up to 4; that term is ${fr(C('8', '4'), `${x}<sup>4</sup>`)}, which still contains ${x}.`,
          },
          {
            label: '1',
            nudge: `<b>(c)</b> 1 is the constant term of (1 + ${x})<sup>${n}</sup> carried over by habit; here the end terms are ${x}<sup>16</sup> and ${fr('1', `${x}<sup>24</sup>`)}, and no term is free of ${x}.`,
          },
          { label: `there is no term independent of ${x}`, nudge: null },
        ],
        correct: 3,
        solution: `Net exponent = 2(8 − ${r}) − 3${r} = 16 − 5${r}. Setting 16 − 5${r} = 0 gives ${r} = ${fr('16', '5')}, which is <b>not</b> an integer, so no term is independent of ${x}. This is the single most important conceptual check in the topic: a non-integer or out-of-range ${r} means the term is absent.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Off-by-one in term position.</b> The (${r} + 1)th term uses ${nCr}, so “the ${m}th term” means ${r} = ${m} − 1. “7th term” ⇒ ${r} = 6, never ${r} = 7. (Same off-by-one family as the Pascal-row indexing in Topic 01.)`,
          `<b>Forgetting the second middle term.</b> Odd ${n} gives <b>two</b> middle terms; a question saying “the middle term” of an odd-power expansion is often a deliberate trap: there are two.`,
          `<b>Sign/exponent slips from ${fr('1', x)} factors.</b> A factor (${fr('1', XQ)})<sup>${r}</sup> contributes −<i>qr</i> to the exponent of ${x} and may carry a sign; both are routinely dropped. Always write the net exponent as ${p}(${n} − ${r}) − <i>qr</i> explicitly.`,
          `<b>Forcing a term that doesn’t exist.</b> If solving the exponent equation gives a non-integer ${r} or ${r} ∉ [0, ${n}], the term is genuinely absent. Do not round.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (solve for ${r} first).</b> For independent / specific-power / coefficient questions, never expand and never compute the full term until you have ${r}. Form the net exponent ${E(r)}, set the condition, solve for ${r}, and validate it. Only then substitute. In objective papers this is the difference between a 15-second solve and a two-minute one, and it instantly catches the “no such term” cases.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'General term (master tool)', note: `${GT}. The ${m}th term ⇒ ${r} = ${m} − 1.` },
          { f: `Net exponent for ${STD}`, note: `${EXP}.` },
          {
            f: `Term with ${x}<sup>${k}</sup>`,
            note: `set ${E(r)} = ${k}. <b>Term independent of</b> ${x}<b>:</b> set ${E(r)} = 0. Solve for ${r}; it <b>must</b> be an integer in [0, ${n}], else no such term.`,
          },
          { f: 'Middle term', note: `${n} even ⇒ one term ${MID_EVEN}; ${n} odd ⇒ two terms ${MID_ODD1}, ${MID_ODD3}.` },
          { f: `${p}th from end`, note: `= (${n} − ${p} + 2)th from beginning.` },
        ],
        aids: [
          `“Set the power, solve for ${r}, check it’s whole and in range.”`,
          '“Odd power → two middles; even power → one middle.”',
          `“${fr('1', XQ)} pulls the exponent down by <i>qr</i>”: keep that minus sign.`,
        ],
      },
    ],
  },
];
