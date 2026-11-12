import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional topics D–G, pp. 658–674 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the "Additional Topics" part's
 * Addenda D–G, with the book's letters (decision 29). Chapter 8 starts on p. 675.
 * The part's p. 658 opening and its table (heading "Chapter 7: Binomial Theorem —
 * Additional Topics" not copied) open D's "Introduction"; each addendum's italic
 * "Extends …" line is its Introduction, then its Exam relevance, Method, worked
 * examples and Practice (answers set against their questions). The part numbers its
 * own figures: "Figure 1" (p. 659) m11-07-D-d1, "Figure 2" (p. 663) m11-07-E-d1,
 * "Figure 3" (p. 668) m11-07-F-d1, each at the end of its Method part, where the book
 * prints it. ⁿCᵣ with an italic C, as the page sets it. Every fraction is stacked
 * (<frac>), except inside a raised run; no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** Italicise the letters of a plain index such as "2n−1". */
const M = (s: string) => s.replace(/[a-z]/g, (c) => `<i>${c}</i>`);
const C = (a: string, b: string) => `<sup>${M(a)}</sup><i>C</i><sub>${M(b)}</sub>`;
const Cs = (b: string) => `<i>C</i><sub>${M(b)}</sub>`;
const Cq = (b: string) => `<i>C</i><sub>${M(b)}</sub><sup>2</sup>`;
const T = (s: string) => `<i>T</i><sub>${M(s)}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${M(lo)}</sub><sup>${M(hi)}</sup>`;
const S1 = (lo: string) => `∑<sub>${M(lo)}</sub>`;
const pw = (base: string, e: string) => `${base}<sup>${M(e)}</sup>`;

const n = '<i>n</i>';
const p = '<i>p</i>';
const r = '<i>r</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const j = '<i>j</i>';
const d = '<i>d</i>';
const S = '<i>S</i>';
const AB = `(${a} + ${b})<sup>${n}</sup>`;
const BA = `(${b} + ${a})<sup>${n}</sup>`;
const opx = (e: string) => `(1 + ${x})<sup>${M(e)}</sup>`;
const C2N = C('2n', 'n');
const nCr = C('n', 'r');
const CBRT2 = '<sup>3</sup>√2';
const CBRT3 = '<sup>3</sup>√3';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
const NB = ' ';
/** Between a factor and the raised index of the coefficient after it (r ⁿCᵣ, 2 ²ⁿ⁻¹Cₙ₋₁): the book’s plain space, held and widened so the factor does not read as carrying that index as its power. */
const GAP = '\u00a0\u2009';

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic D · pp. 658–662 ────────────────
  {
    n: 'D',
    title: 'The pth Term From the End',
    extra: true,
    kalam: 'The safer route is to reverse the binomial instead of the counting.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01–07, Topic 08 and Additional topics A, B and C between them cover the NCERT syllabus and the standard JEE toolkit, with four exceptions. Three of them are stated-but-never-used results: the chapter prints a formula once, puts it in the cheat sheet, and then never asks you to do anything with it (for the central coefficient, the closed form is never written). A printed formula you have never executed is not a tool you own, and NCERT examines two of them directly (the ${p}th term from the end and ${C2N}). The fourth is a missing general method: Topic 04 hands you two weighted sums, ∑ ${r} ${Cs('r')} and ∑ ${r}<sup>2</sup>${Cs('r')}, as finished answers, but never the machine that produces them for an arbitrary weight.<br><br>None of these warrants a new topic; each is a short method plus drill. The lettering continues from Additional topic C.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Subject', 'Read after'],
        rows: [
          ['D', `The ${p}th term from the end, and beginning-to-end ratios`, 'Topic 02'],
          ['E', 'Vandermonde’s identity and products of coefficients', 'Topic 04'],
          ['F', 'Arbitrary polynomial weights: the absorption identity', 'Topic 04'],
          ['G', `The central binomial coefficient ${C2N}`, 'Topic 03'],
        ],
      },
      {
        t: 'p',
        html: 'Extends Topic 02’s Key formulas and definitions part (where the rule is stated) and its Practice exercises part.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `NCERT devotes Example 14 of the chapter to deriving this rule, and Miscellaneous Exercise Question 8 is built entirely on it, a 4-mark CBSE-style question that reappears almost verbatim in JEE Main every few years ${ESTIMATE}. Topic 02 prints the rule in its formula list and its cheat sheet, but no worked example, exercise or MCQ in the chapter ever uses it, so it is the most likely single line in the chapter to be read and forgotten.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `The expansion of ${AB} has ${n} + 1 terms, ${T('1')}, ${T('2')}, …, ${T('n+1')}. Counting from the far end reverses the list, so<br>${p}th term from the end = ${T('n−p+2')}<br>(the (${n} − ${p} + 2)th from the beginning).`,
      },
      {
        t: 'p',
        html: `That is the form Topic 02’s cheat sheet gives you, and it is correct, but it invites two stacked off-by-one errors, because after finding the term number ${n} − ${p} + 2 you must still drop to the index ${r} = ${n} − ${p} + 1 before using ${T('r+1')} = ${nCr}${pw(a, 'n−r')}${pw(b, 'r')}. The safer route is to reverse the binomial instead of the counting:`,
      },
      {
        t: 'p',
        html: `<b>The ${p}th term from the end of ${AB} is the ${p}th term from the beginning of ${BA}.</b>`,
      },
      {
        t: 'p',
        html: `Reversing the two parts reverses the whole list of terms, so the two statements say the same thing. Now you use the familiar index ${r} = ${p} − 1 and never touch ${n} − ${p} + 2 at all:`,
      },
      {
        t: 'formula',
        kicker: `The ${p}th term from the end`,
        main: `${p}th term from the end of ${AB}<br>= ${C('n', 'p−1')} ${pw(b, 'n−p+1')}${pw(a, 'p−1')}.`,
        legend: [
          `${n} = the index of ${AB}`,
          `${p} = the position counted from the end`,
          `${a}, ${b} = the two parts of the binomial`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Three consequences worth carrying:<br>1. <b>The two ${p}th terms share a binomial coefficient.</b> The ${p}th from the beginning is ${C('n', 'p−1')}${pw(a, 'n−p+1')}${pw(b, 'p−1')} and the ${p}th from the end is ${C('n', 'p−1')}${pw(b, 'n−p+1')}${pw(a, 'p−1')}. Same ${C('n', 'p−1')}, with ${a} and ${b} swapped.<br>2. <b>Hence the ratio is coefficient-free.</b> Dividing one by the other,`,
      },
      {
        t: 'formula',
        kicker: `Ratio of the two ${p}th terms`,
        main: `${fr(`${T('p')} from the beginning`, `${T('p')} from the end`)} = (${fr(a, b)})<sup><i>n</i>−2<i>p</i>+2</sup>.`,
        legend: [
          `${T('p')} = the ${p}th term`,
          `${n} = the index of ${AB}`,
          `${a}, ${b} = the two parts of the binomial`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Every “ratio of the ${p}th term from the beginning to the ${p}th term from the end” problem collapses into this one line. You never compute either term.<br>3. <b>Equal ends.</b> The two are equal exactly when ${n} = 2${p} − 2, provided ${a},${NB}${b}${NB}≠${NB}0 and ${a}${NB}≠${NB}±${b} (if ${a} = −${b} the ratio is (−1)<sup><i>n</i></sup>, which is 1 for every even ${n}). That is another way of saying that ${T('p')} is the middle term of an even-power expansion. For even ${n} the middle term is its own mirror image: the fixed point of the reversal.`,
      },
      { t: 'fig', id: 'm11-07-D-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'D1: CBSE Board Level',
        q: `Find the 4th term from the end in the expansion of (${fr(`${x}<sup>3</sup>`, '2')} − ${fr('2', `${x}<sup>2</sup>`)})<sup>9</sup>.`,
        steps: [
          `Reverse the binomial and take ${p} = 4, so ${r} = ${p} − 1 = 3:<br>${T('4')} of (−${fr('2', `${x}<sup>2</sup>`)} + ${fr(`${x}<sup>3</sup>`, '2')})<sup>9</sup><br>= ${C('9', '3')} (−${fr('2', `${x}<sup>2</sup>`)})<sup>6</sup> (${fr(`${x}<sup>3</sup>`, '2')})<sup>3</sup><br>= 84 · ${fr('64', `${x}<sup>12</sup>`)} · ${fr(`${x}<sup>9</sup>`, '8')}.`,
          `The power of ${x} is −12 + 9 = −3 and the numbers give 84 × 64 ÷ 8 = 672, so the required term is ${fr('672', `${x}<sup>3</sup>`)}.`,
          `Cross-check by the other route: ${n} − ${p} + 2 = 9 − 4 + 2 = 7, so this should also be ${T('7')}, which uses ${r} = 6:<br>${C('9', '6')} (${fr(`${x}<sup>3</sup>`, '2')})<sup>3</sup> (−${fr('2', `${x}<sup>2</sup>`)})<sup>6</sup><br>= 84 · ${fr(`${x}<sup>9</sup>`, '8')} · ${fr('64', `${x}<sup>12</sup>`)},<br>the same thing, as ${C('9', '6')} = ${C('9', '3')}. Note the even power 6 on the negative part, which is why the answer came out positive.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'D2: JEE Main Level',
        q: `Find ${n} if the ratio of the 5th term from the beginning to the 5th term from the end in the expansion of (<sup>4</sup>√2 + ${fr('1', '<sup>4</sup>√3')})<sup>${n}</sup> is √6 ∶ 1.`,
        steps: [
          `Do not write either term. Use consequence 2 with ${a} = 2<sup>1/4</sup>, ${b} = 3<sup>−1/4</sup> and ${p} = 5:<br>${fr(a, b)} = 2<sup>1/4</sup> · 3<sup>1/4</sup> = 6<sup>1/4</sup>,<br>${n} − 2${p} + 2 = ${n} − 8,<br>ratio = (6<sup>1/4</sup>)<sup><i>n</i>−8</sup> = 6<sup>(<i>n</i>−8)/4</sup>.`,
          `Set this equal to √6 = 6<sup>1/2</sup>. Since 6 ≠ 1, the exponents must match:<br>${fr(`${n} − 8`, '4')} = ${fr('1', '2')} ⟹ ${n} − 8 = 2 ⟹ ${n} = 10.`,
          'The whole NCERT Miscellaneous problem is three lines once you know that the binomial coefficients cancel. Solving it by writing out both terms takes half a page and usually produces an arithmetic slip in the surd exponents.',
        ],
        ans: `${n} = 10`,
      },
      {
        t: 'ex',
        tag: 'D3: JEE Main: Speed Trap',
        q: `Find the 3rd term from the end in the expansion of (${x} + ${y})<sup>10</sup>.`,
        steps: [
          `<b>The trap.</b> The rule in Topic 02’s cheat sheet is “${p}th from the end = (${n} − ${p} + 2)th from the beginning”. A student computes ${n} − ${p} + 2 = 10 − 3 + 2 = 9 and then, on autopilot, feeds 9 into ${T('r+1')} = ${nCr}${pw(a, 'n−r')}${pw(b, 'r')} as ${r} = 9, or, worse, computes ${n} − ${p} = 7 and answers ${T('8')} = ${C('10', '7')}${x}<sup>3</sup>${y}<sup>7</sup> = 120 ${x}<sup>3</sup>${y}<sup>7</sup>. That 120 ${x}<sup>3</sup>${y}<sup>7</sup> is the seductive wrong answer, because it is a genuine term of the expansion and looks perfectly respectable.`,
          `<b>The fix.</b> Reverse instead of counting. The 3rd term from the end of (${x} + ${y})<sup>10</sup> is the 3rd term from the beginning of (${y} + ${x})<sup>10</sup>, so ${r} = 2:<br>${T('3')} = ${C('10', '2')}${y}<sup>8</sup>${x}<sup>2</sup> = 45 ${x}<sup>2</sup>${y}<sup>8</sup>.`,
          `Sanity check with the other route: ${T('n−p+2')} = ${T('9')}, which uses ${r} = 8, giving ${C('10', '8')}${x}<sup>2</sup>${y}<sup>8</sup> = 45 ${x}<sup>2</sup>${y}<sup>8</sup>. Agreed.`,
          `<b>Name the trap: two off-by-ones stacked.</b> “${p}th from the end” converts to a term number, and every term number must still be reduced by one to reach the index ${r}. Reversing the binomial removes the first conversion entirely, so there is only ever one subtraction to get wrong.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'D4: JEE Advanced Level',
        q: `If the 7th term from the beginning and the 7th term from the end in the expansion of (${CBRT2} + ${fr('1', CBRT3)})<sup>${n}</sup> are equal, find ${n}.`,
        steps: [
          `By consequence 2, with ${a} = 2<sup>1/3</sup>, ${b} = 3<sup>−1/3</sup> and ${p} = 7,<br>${fr(`${T('7')} (beginning)`, `${T('7')} (end)`)} = (${fr(a, b)})<sup><i>n</i>−12</sup><br>= (6<sup>1/3</sup>)<sup><i>n</i>−12</sup>.`,
          `Equality means this ratio is 1. Since 6<sup>1/3</sup> ≠ 1, the exponent must vanish: ${n} − 12 = 0, so ${n} = 12.`,
          `Read the answer structurally rather than as a number. ${n} = 2${p} − 2 = 12 says that ${T('7')} sits at the centre of a 13-term list: it is the middle term, and the middle term of an even-power expansion is unchanged when you reverse the binomial. The surds were decoration; the only thing that mattered was that ${fr(a, b)}${NB}≠${NB}±1.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the 5th term from the end in the expansion of (${fr('3', `${x}<sup>2</sup>`)} − ${fr(`${x}<sup>3</sup>`, '6')})<sup>9</sup>.`,
            a: `−${fr('21', '16')}${x}<sup>7</sup>.`,
          },
          {
            q: `Find the 6th term from the end in the expansion of (${x} − 2${y})<sup>12</sup>.`,
            a: `−101376 ${x}<sup>5</sup>${y}<sup>7</sup>.`,
          },
          {
            q: `Find ${n} if the ratio of the 4th term from the beginning to the 4th term from the end in (${CBRT2} + ${fr('1', CBRT3)})<sup>${n}</sup> is <sup>3</sup>√6 ∶ 1.`,
            a: `${n} = 7.`,
          },
          {
            q: `Write down, in terms of ${n} and ${p}, the ${p}th term from the end of ${AB}, and verify that setting ${p} = 1 returns ${b}<sup>${n}</sup> and setting ${p} = ${n} + 1 returns ${a}<sup>${n}</sup>.`,
            a: `${C('n', 'p−1')} ${pw(b, 'n−p+1')}${pw(a, 'p−1')}; at ${p} = 1 it is ${C('n', '0')}${b}<sup>${n}</sup> = ${b}<sup>${n}</sup> (the last term), at ${p} = ${n} + 1 it is ${C('n', 'n')}${b}<sup>0</sup>${a}<sup>${n}</sup> = ${a}<sup>${n}</sup> (the first term).`,
          },
          {
            q: `For which ${n} is the 5th term from the beginning of ${AB} equal to the 5th term from the end, given ${a}${NB}≠${NB}±${b}, ${a},${NB}${b}${NB}≠${NB}0? State the answer as a condition on ${n} and say what that term is.`,
            a: `${n} = 2(5) − 2 = 8; the term is the single middle term ${T('5')} = ${C('8', '4')}${a}<sup>4</sup>${b}<sup>4</sup> = 70 ${a}<sup>4</sup>${b}<sup>4</sup>.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 662–666 ────────────────
  {
    n: 'E',
    title: 'Vandermonde’s Identity',
    extra: true,
    kalam: 'Vandermonde applies only when the two lower indices in each term add to a constant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 04’s Key formulas and definitions part and its Proofs, theorems and standard techniques part.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 04 lists Vandermonde’s identity in its formula table and repeats it in the cheat sheet, and its Proofs, theorems and standard techniques part remarks that the multiply-and-compare technique “proves Vandermonde’s identity”, but the chapter never proves it, never works an example with it and never sets a question on it. It is the parent of the two product-sums the chapter does drill, ∑ ${Cq('r')} = ${C2N} and ∑ ${Cs('r')}${Cs('r+k')} = ${C('2n', 'n−k')}, so learning it turns two memorised results into one understood one. JEE Main sets it directly as “evaluate ∑ ${C('10', 'r')} ${C('20', '5−r')}”; JEE Advanced hides it inside committee-counting problems and inside sums that also carry a weight in ${r}.`,
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: `For non-negative integers ${m}, ${n} and ${p},` },
      {
        t: 'formula',
        kicker: 'Vandermonde’s identity',
        main: `${S1('k')} ${C('m', 'k')} ${C('n', 'p−k')} = ${C('m+n', 'p')}.`,
        legend: [`${m}, ${n}, ${p} = non-negative integers`, `${k} = the summation index`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The convention that makes the sum safe.</b> Read ${C('n', 'j')} = 0 whenever ${j} < 0 or ${j} > ${n}. With that convention you may let ${k} run over all integers, or over 0 to ${p}, and the out-of-range terms simply contribute nothing. Without it you must restrict the sum by hand to max(0, ${p} − ${n}) ≤ ${k} ≤ min(${m}, ${p}), which is where most marks are lost.`,
      },
      {
        t: 'p',
        html: `<b>Counting proof.</b> A committee of ${p} people is to be chosen from ${m} women and ${n} men. Split the count by the number ${k} of women chosen: there are ${C('m', 'k')} ways to pick the women and ${C('n', 'p−k')} ways to pick the remaining ${p} − ${k} men. Summing over ${k} counts every committee exactly once, and the total number of committees is ${C('m+n', 'p')}.`,
      },
      {
        t: 'p',
        html: `<b>Coefficient-comparison proof.</b> This is Topic 04’s Technique D at full strength. In<br>${opx('m')}${opx('n')} = ${opx('m+n')},<br>the coefficient of ${x}<sup><i>p</i></sup> on the right is ${C('m+n', 'p')}. On the left, an ${x}<sup><i>p</i></sup> arises as ${x}<sup><i>k</i></sup> from the first bracket times ${x}<sup><i>p</i>−<i>k</i></sup> from the second, contributing ${C('m', 'k')} ${C('n', 'p−k')}; sum over ${k}.`,
      },
      {
        t: 'table',
        title: 'The three specialisations you already met',
        head: ['Take', 'You get', 'Where it appears'],
        rows: [
          [`${m} = ${n} = ${p}, then ${C('n', 'n−r')} = ${C('n', 'r')}`, `${SUM('r=0', 'n')} ${Cq('r')} = ${C2N}`, 'Topic 04, worked example 4'],
          [
            `${m} = ${n}, ${p} = ${n} − ${k}, then symmetry`,
            `${S1('r')} ${Cs('r')}${Cs('r+k')} = ${C('2n', 'n−k')}`,
            'Topic 04, Key formulas and definitions',
          ],
          [`${m}, ${n} different, one factor flipped`, `${S1('r')} ${C('m', 'r')} ${C('n', 'r')} = ${C('m+n', 'm')}`, 'new here'],
        ],
      },
      {
        t: 'p',
        html: `<b>The one precondition.</b> Vandermonde applies only when <b>the two lower indices in each term add to a constant</b>. In ${C('m', 'k')} ${C('n', 'p−k')} they add to ${p} for every ${k}, which is exactly what lets the product be read as “coefficient of ${x}<sup><i>p</i></sup>”. In a sum like ∑ ${C('m', 'r')} ${C('n', 'r')} the lower indices add to 2${r}, which is not constant, so the identity does not apply as written: you must first flip one factor by symmetry (${C('m', 'r')} = ${C('m', 'm−r')}), after which the indices add to the constant ${m}.`,
      },
      {
        t: 'p',
        html: `<b>The alternating companion.</b> Multiplying (1 − ${x})<sup>${n}</sup> by ${opx('n')} instead gives (1 − ${x}<sup>2</sup>)<sup>${n}</sup>, whose expansion contains only even powers. Comparing coefficients of ${x}<sup>${n}</sup>:`,
      },
      {
        t: 'formula',
        kicker: 'The alternating companion',
        main: `${SUM('r=0', 'n')} (−1)<sup><i>r</i></sup>${Cq('r')}<br>= 0, ${n} odd;<br>= (−1)<sup><i>n</i>/2</sup> ${C('n', 'n/2')}, ${n} even.`,
        legend: [`${n} = the index of ${opx('n')}`, `${Cs('r')} = the binomial coefficient ${nCr}`],
        note: null,
      },
      {
        t: 'p',
        html: `The odd case vanishes because (1 − ${x}<sup>2</sup>)<sup>${n}</sup> has no odd powers at all: there is nothing on the right to match.`,
      },
      { t: 'fig', id: 'm11-07-E-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'E1: CBSE Board Level',
        q: `Evaluate ${SUM('r=0', '5')} ${C('10', 'r')} ${C('20', '5−r')}.`,
        steps: [
          `The lower indices are ${r} and 5 − ${r}, adding to the constant 5 in every term, so Vandermonde applies with ${m} = 10, ${n} = 20, ${p} = 5:<br>${SUM('r=0', '5')} ${C('10', 'r')} ${C('20', '5−r')} = ${C('30', '5')}<br>= ${fr('30 · 29 · 28 · 27 · 26', '120')} = 142506.`,
          'In committee language: choosing 5 people from a group of 10 and a group of 20, split by how many come from the first group.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'E2: JEE Main Level',
        q: `For ${opx('8')}, evaluate ${Cs('0')}${Cs('2')} + ${Cs('1')}${Cs('3')} + ${Cs('2')}${Cs('4')} + ⋯ + ${Cs('6')}${Cs('8')}.`,
        steps: [
          `The general term is ${Cs('r')}${Cs('r+2')}, whose lower indices add to 2${r} + 2: not constant. Flip the first factor by symmetry, ${Cs('r')} = ${C('8', '8−r')}, so the term becomes ${C('8', '8−r')} ${C('8', 'r+2')} with indices adding to 10 for every ${r}. Vandermonde with ${m} = ${n} = 8, ${p} = 10 gives<br>${S1('r')} ${C('8', 'r')} ${C('8', 'r+2')} = ${C('16', '10')}<br>= ${C('16', '6')} = 8008.`,
          `This matches Topic 04’s stored result ∑ ${Cs('r')}${Cs('r+k')} = ${C('2n', 'n−k')} with ${n} = 8, ${k} = 2: ${C('16', '6')} = 8008. The point of redoing it from Vandermonde is that you now do not need to have memorised the stored form.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'E3: JEE Main: Speed Trap',
        q: `Evaluate ${SUM('r=0', '5')} ${C('5', 'r')} ${C('7', 'r')}.`,
        steps: [
          `<b>The trap.</b> The expression has the look of Vandermonde, so the reflex is to add the upper indices and write ${C('12', 'r')} (which is not even a number, it still has an ${r} in it) or to patch that by answering ${C('12', '0')} = 1 or ${C('12', '5')} = 792 for the wrong reason. The error is skipping the precondition: here the lower indices are ${r} and ${r}, adding to 2${r}, which changes from term to term. Vandermonde is simply not applicable to the expression as printed.`,
          `<b>The fix.</b> Make the indices add to a constant first. By symmetry ${C('5', 'r')} = ${C('5', '5−r')}:<br>${SUM('r=0', '5')} ${C('5', 'r')} ${C('7', 'r')}<br>= ${SUM('r=0', '5')} ${C('5', '5−r')} ${C('7', 'r')}<br>= ${C('12', '5')} = 792.`,
          `Now the indices 5 − ${r} and ${r} add to 5 in every term, so ${m} = 5, ${n} = 7, ${p} = 5.`,
          'Direct check: 1 · 1 + 5 · 7 + 10 · 21 + 10 · 35 + 5 · 35 + 1 · 21<br>= 1 + 35 + 210 + 350 + 175 + 21 = 792.',
          `<b>Name the trap: applying Vandermonde before checking that the lower indices add to a constant.</b> The reflex answer ${C('12', '5')} happens to be right here, which is exactly why the habit is dangerous: shift one index and the same reflex fails. In ${SUM('r=0', '5')} ${C('5', 'r')} ${C('7', 'r+1')} the reflex again says ${C('12', '5')} = 792, but flipping the first factor, ${C('5', 'r')} = ${C('5', '5−r')}, makes the lower indices add to 6, so the true value is ${C('12', '6')} = 924. Direct check: 7 + 105 + 350 + 350 + 105 + 7 = 924.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'E4: JEE Advanced Level',
        q: `Prove that ${SUM('r=1', 'n')} ${r} (${nCr})<sup>2</sup> = ${n}${GAP}${C('2n−1', 'n−1')}, and evaluate it for ${n} = 5.`,
        steps: [
          `This needs two tools at once: the absorption identity of Additional topic F to deal with the weight ${r}, then Vandermonde to deal with the product.`,
          `<b>Step 1: absorb the weight.</b> By ${r}${GAP}${nCr} = ${n}${GAP}${C('n−1', 'r−1')} (proved in Additional topic F),<br>${SUM('r=1', 'n')} ${r}${GAP}${nCr} · ${nCr}<br>= ${n} ${SUM('r=1', 'n')} ${C('n−1', 'r−1')} ${nCr}.`,
          `<b>Step 2: fix the indices.</b> The lower indices ${r} − 1 and ${r} add to 2${r} − 1, not a constant. Flip the second factor: ${nCr} = ${C('n', 'n−r')}, so the term is ${C('n−1', 'r−1')} ${C('n', 'n−r')} and the indices add to (${r} − 1) + (${n} − ${r}) = ${n} − 1 for every ${r}.`,
          `<b>Step 3: apply Vandermonde</b> with upper indices ${n} − 1 and ${n}, and ${p} = ${n} − 1:<br>${n} ${S1('r')} ${C('n−1', 'r−1')} ${C('n', 'n−r')}<br>= ${n}${GAP}${C('2n−1', 'n−1')}.${NB}■`,
          `<b>Evaluation at ${n} = 5:</b> 5${NB}· ${C('9', '4')} = 5 × 126 = 630.`,
          'Direct check: 1(25) + 2(100) + 3(100) + 4(25) + 5(1)<br>= 25 + 200 + 300 + 100 + 5 = 630.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: `Evaluate ${SUM('r=0', '4')} ${C('6', 'r')} ${C('8', '4−r')}.`, a: `${C('14', '4')} = 1001.` },
          {
            q: `For ${opx('7')}, evaluate ${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq('7')} using Vandermonde rather than the stored formula.`,
            a: `${C('14', '7')} = 3432.`,
          },
          {
            q: `For ${opx('9')}, evaluate ${Cs('0')}${Cs('3')} + ${Cs('1')}${Cs('4')} + ⋯ + ${Cs('6')}${Cs('9')}.`,
            a: `${C('18', '6')} = 18564.`,
          },
          { q: `Evaluate ${SUM('r=0', '6')} ${C('6', 'r')} ${C('9', 'r')}.`, a: `${C('15', '6')} = 5005 (flip one factor first).` },
          {
            q: `Evaluate ${S1('r')} ${C('15', 'r')} ${C('10', '12−r')}, stating which values of ${r} actually contribute.`,
            a: `${C('25', '12')} = 5200300; only ${r} = 2 to ${r} = 12 contribute, since ${C('10', '12−r')} = 0 for ${r} < 2.`,
          },
          {
            q: `For ${opx('8')}, evaluate ${Cq('0')} − ${Cq('1')} + ${Cq('2')} − ⋯ + ${Cq('8')}.`,
            a: `(−1)<sup>4</sup> · ${C('8', '4')} = 1 × 70 = 70.`,
          },
          {
            q: `Prove Vandermonde’s identity by the committee argument, and deduce ${SUM('r=0', 'n')} ${Cq('r')} = ${C2N} as the case ${m} = ${n} = ${p}.`,
            a: `As in the Method part; with ${m} = ${n} = ${p} the sum is ${S1('r')} ${nCr} ${C('n', 'n−r')} = ${S1('r')} ${Cq('r')} by symmetry, and the right-hand side is ${C2N}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 666–670 ────────────────
  {
    n: 'F',
    title: 'Arbitrary Polynomial Weights: the Absorption Identity',
    extra: true,
    kalam: 'This additional topic replaces two memorised answers with one method that generates all of them, using no calculus at all.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 04’s Key formulas and definitions part and its Proofs, theorems and standard techniques part (Technique B).',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 04 gives you ∑ ${r} ${Cs('r')} = ${n}2<sup><i>n</i>−1</sup> and ∑ ${r}<sup>2</sup>${Cs('r')} = ${n}(${n} + 1)2<sup><i>n</i>−2</sup> as two remembered results, obtained by differentiating. That is enough for the two weights it lists and nothing else. JEE Main routinely sets a weight the chapter has not stored (3${r} + 2, or ${r}(${r} − 1), or ${r}<sup>3</sup>) ${ESTIMATE}, and JEE Advanced attaches a sign or an ${x}<sup><i>r</i></sup> that makes differentiation clumsy. This additional topic replaces two memorised answers with one method that generates all of them, using no calculus at all.`,
      },

      { t: 'part', title: 'Method: the absorption identity' },
      { t: 'p', html: `For 1 ≤ ${r} ≤ ${n},` },
      {
        t: 'formula',
        kicker: 'The absorption identity',
        main: `${r}${GAP}${nCr} = ${n}${GAP}${C('n−1', 'r−1')};<br>${r}(${r} − 1) ⋯ (${r} − ${k} + 1) ${nCr}<br>= ${n}(${n} − 1) ⋯ (${n} − ${k} + 1) ${C('n−k', 'r−k')}.`,
        legend: [`${n} = the index`, `${r} = the term index (${k} ≤ ${r} ≤ ${n})`, `${k} = the number of factors absorbed`],
        note: null,
      },
      {
        t: 'p',
        html: `because<br>${r} · ${fr(`${n}!`, `${r}! (${n} − ${r})!`)} = ${fr(`${n}!`, `(${r} − 1)! (${n} − ${r})!`)}<br>= ${n} · ${fr(`(${n} − 1)!`, `(${r} − 1)! ((${n} − 1) − (${r} − 1))!`)}.<br>Read it as: a factor of ${r} in front can be swallowed by the coefficient, at the price of dropping both indices by one and pulling out an ${n}. Applying it twice, and then ${k} times,<br>${r}(${r} − 1) ${nCr} = ${n}(${n} − 1) ${C('n−2', 'r−2')},<br>${r}(${r} − 1) ⋯ (${r} − ${k} + 1) ${nCr}<br>= ${n}(${n} − 1) ⋯ (${n} − ${k} + 1) ${C('n−k', 'r−k')}.`,
      },
      {
        t: 'p',
        html: `The weight that absorbs cleanly is the <b>falling factorial</b> ${r}(${r} − 1) ⋯ (${r} − ${k} + 1), not the power ${r}<sup><i>k</i></sup>. So the procedure is:<br>1. <b>Rewrite the weight in falling factorials,</b> for example ${r}<sup>2</sup> = ${r}(${r} − 1) + ${r} (the table below also gives ${r}<sup>3</sup>). A linear weight ${a} + <i>rd</i> needs no rewriting.<br>2. <b>Absorb each piece,</b> turning ∑(weight) ${nCr} into a combination of plain coefficient sums with smaller upper index.<br>3. <b>Substitute</b> whatever value of ${x} the problem carries: ${x} = 1 gives 2<sup><i>n</i>−<i>k</i></sup>, ${x} = −1 gives 0 (for ${n} > ${k}), a general ${x} gives ${x}<sup><i>k</i></sup>${opx('n−k')}.`,
      },
      { t: 'p', html: `The standard results fall out immediately at ${x} = 1:` },
      {
        t: 'table',
        title: null,
        head: ['Weight', 'Absorbed form', `Sum over all ${r}`],
        rows: [
          [r, `${n}${GAP}${C('n−1', 'r−1')}`, `${n} 2<sup><i>n</i>−1</sup>`],
          [`${r}(${r} − 1)`, `${n}(${n} − 1) ${C('n−2', 'r−2')}`, `${n}(${n} − 1) 2<sup><i>n</i>−2</sup>`],
          [`${r}<sup>2</sup> = ${r}(${r} − 1) + ${r}`, '–', `${n}(${n} + 1) 2<sup><i>n</i>−2</sup>`],
          [
            `${r}<sup>3</sup> = ${r}(${r} − 1)(${r} − 2) + 3${r}(${r} − 1) + ${r}`,
            '–',
            `${n}<sup>2</sup>(${n} + 3) 2<sup><i>n</i>−3</sup>`,
          ],
          [`${a} + <i>rd</i>`, '–', `(2${a} + <i>nd</i>) 2<sup><i>n</i>−1</sup>`],
        ],
      },
      {
        t: 'p',
        html: `<b>A calculus warning worth one line.</b> Differentiating ${opx('n')} twice produces the weight ${r}(${r} − 1), <b>not</b> ${r}<sup>2</sup>. The operator that manufactures ${r}<sup><i>k</i></sup> is (${x}${fr('d', 'd<i>x</i>')})<sup><i>k</i></sup>: you must multiply by ${x} between the differentiations. If you differentiate twice and quote ${n}(${n} + 1)2<sup><i>n</i>−2</sup> you have mixed the two up; the honest output of the second derivative at ${x} = 1 is ${n}(${n} − 1)2<sup><i>n</i>−2</sup>, and the difference between them is exactly ∑ ${r} ${Cs('r')} = ${n}2<sup><i>n</i>−1</sup>. Absorption sidesteps the whole question.`,
      },
      {
        t: 'p',
        html: `<b>The reversal trick for linear weights.</b> For ${S} = ${SUM('r=0', 'n')} (${a} + <i>rd</i>) ${nCr}, write the sum a second time with ${r} replaced by ${n} − ${r} (legitimate because ${Cs('n−r')} = ${Cs('r')}) and add:<br>2${S} = ${SUM('r=0', 'n')} [(${a} + <i>rd</i>) + (${a} + (${n} − ${r})${d})]${Cs('r')}<br>= (2${a} + <i>nd</i>) ${SUM('r=0', 'n')} ${Cs('r')}<br>= (2${a} + <i>nd</i>)2<sup><i>n</i></sup>,<br>so ${S} = (2${a} + <i>nd</i>)2<sup><i>n</i>−1</sup>. The bracket is constant because the two weights are the two ends of an arithmetic progression, and an AP’s terms pair up to a constant total. This is a second independent route to the linear case and a very fast one under exam pressure.`,
      },
      {
        t: 'p',
        html: `<b>Signs.</b> With ${x} = −1 the plain sums collapse to zero, so ∑(−1)<sup><i>r</i></sup>${r} ${Cs('r')} = 0 for ${n} ≥ 2 and ∑(−1)<sup><i>r</i></sup>${r}<sup>2</sup>${Cs('r')} = 0 for ${n} ≥ 3. Check the small cases separately rather than assuming: at ${n} = 1 the first sum is −1, and at ${n} = 2 the second is 2. Absorption tells you why: the reduced sum ∑(−1)<sup><i>j</i></sup> ${C('n−k', 'j')} vanishes only when its upper index ${n} − ${k} is at least 1.`,
      },
      { t: 'fig', id: 'm11-07-F-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'F1: CBSE Board Level',
        q: `Prove ${r}${GAP}${nCr} = ${n}${GAP}${C('n−1', 'r−1')} and use it to evaluate ${Cs('1')} + 2${Cs('2')} + 3${Cs('3')} + ⋯ + ${n}${Cs('n')} without differentiating.`,
        steps: [
          `<b>Proof.</b> For 1 ≤ ${r} ≤ ${n},<br>${r}${GAP}${nCr} = ${r} · ${fr(`${n}!`, `${r}! (${n} − ${r})!`)}<br>= ${fr(`${n}!`, `(${r} − 1)! (${n} − ${r})!`)}<br>= ${n} · ${fr(`(${n} − 1)!`, `(${r} − 1)! (${n} − ${r})!`)}<br>= ${n}${GAP}${C('n−1', 'r−1')},<br>since (${n} − ${r})! = ((${n} − 1) − (${r} − 1))!.${NB}■`,
          `<b>Use.</b> Substituting and then re-labelling ${j} = ${r} − 1,<br>${SUM('r=1', 'n')} ${r}${GAP}${nCr} = ${n} ${SUM('r=1', 'n')} ${C('n−1', 'r−1')}<br>= ${n} ${SUM('j=0', 'n−1')} ${C('n−1', 'j')} = ${n} 2<sup><i>n</i>−1</sup>.`,
          `The re-labelling is the step to write out in a board answer: after absorption the sum is a complete row of Pascal’s triangle for index ${n} − 1, which is why it totals 2<sup><i>n</i>−1</sup>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'F2: JEE Main Level',
        q: `Evaluate ${SUM('r=0', '10')} (3${r} + 2) ${C('10', 'r')}.`,
        steps: [
          `The weight is linear, ${a} = 2 and ${d} = 3, so the reversal trick applies directly:<br>${SUM('r=0', '10')} (3${r} + 2) ${C('10', 'r')} = (2${a} + <i>nd</i>) 2<sup><i>n</i>−1</sup><br>= (4 + 30) 2<sup>9</sup> = 34 × 512 = 17408.`,
          `Check by splitting instead: 3 ∑ ${r} ${Cs('r')} + 2 ∑ ${Cs('r')} = 3(10 · 2<sup>9</sup>) + 2(2<sup>10</sup>)<br>= 15360 + 2048 = 17408. Two routes, one answer: worth doing once so you trust the shortcut afterwards.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'F3: JEE Main: Speed Trap',
        q: `For ${opx('10')}, evaluate ${SUM('r=0', '10')} ${r}(${r} − 1) ${Cs('r')}.`,
        steps: [
          `<b>The trap.</b> The weight looks like a lightly disguised ${r}<sup>2</sup>, so the reflex is to reach for the stored result ${n}(${n} + 1)2<sup><i>n</i>−2</sup> = 10 · 11 · 256 = 28160. A second version of the same error: “differentiate twice and substitute ${x} = 1”, which the student believes produces ∑ ${r}<sup>2</sup>${Cs('r')} and therefore also answers 28160. Both give the seductive wrong answer.`,
          `<b>The fix.</b> ${r}(${r} − 1) is already a falling factorial, so absorb it twice:<br>${SUM('r=0', '10')} ${r}(${r} − 1) ${C('10', 'r')} = 10 · 9 ${SUM('r=2', '10')} ${C('8', 'r−2')}<br>= 90 · 2<sup>8</sup> = 90 × 256 = 23040.`,
          `<b>The self-check that exposes the trap.</b> Since ${r}<sup>2</sup> = ${r}(${r} − 1) + ${r},<br>∑ ${r}<sup>2</sup>${Cs('r')} − ∑ ${r}(${r} − 1)${Cs('r')} = ∑ ${r} ${Cs('r')},<br>28160 − 23040 = 5120 = 10 · 2<sup>9</sup>. ✓`,
          `<b>Name the trap: treating ${r}(${r} − 1) and ${r}<sup>2</sup> as the same weight.</b> They differ by exactly ∑ ${r} ${Cs('r')} = ${n}2<sup><i>n</i>−1</sup>, which is never zero for ${n} ≥ 1. Whenever a question hands you ${r}(${r} − 1), it is testing precisely whether you know that the second derivative delivers the falling factorial and not the square.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'F4: JEE Advanced Level',
        q: `Prove that ${SUM('r=0', 'n')} ${r}<sup>3</sup> ${nCr} = ${n}<sup>2</sup>(${n} + 3) 2<sup><i>n</i>−3</sup> for ${n} ≥ 3, and evaluate it for ${n} = 6.`,
        steps: [
          `<b>Step 1: falling-factorial basis.</b> Expand ${r}(${r} − 1)(${r} − 2) = ${r}<sup>3</sup> − 3${r}<sup>2</sup> + 2${r} and ${r}(${r} − 1) = ${r}<sup>2</sup> − ${r}, then solve upwards:<br>${r}<sup>3</sup> = ${r}(${r} − 1)(${r} − 2) + 3 ${r}(${r} − 1) + ${r}.<br>(Check at ${r} = 2: 0 + 3(2) + 2 = 8 = 2<sup>3</sup>.)`,
          `<b>Step 2: absorb each piece,</b> summing over all ${r} and using ${S1('j')} ${C('m', 'j')} = 2<sup><i>m</i></sup>:<br>∑ ${r}(${r} − 1)(${r} − 2)${Cs('r')} = ${n}(${n} − 1)(${n} − 2)2<sup><i>n</i>−3</sup>,<br>∑ ${r}(${r} − 1)${Cs('r')} = ${n}(${n} − 1)2<sup><i>n</i>−2</sup>,<br>∑ ${r} ${Cs('r')} = ${n} 2<sup><i>n</i>−1</sup>.`,
          `<b>Step 3: recombine over the common factor 2<sup><i>n</i>−3</sup>:</b><br>∑ ${r}<sup>3</sup>${Cs('r')}<br>= 2<sup><i>n</i>−3</sup>[${n}(${n} − 1)(${n} − 2) + 3 · 2 ${n}(${n} − 1) + 4${n}]<br>= 2<sup><i>n</i>−3</sup> ${n}[(${n} − 1)(${n} − 2) + 6(${n} − 1) + 4].`,
          `The bracket is ${n}<sup>2</sup> − 3${n} + 2 + 6${n} − 6 + 4 = ${n}<sup>2</sup> + 3${n} = ${n}(${n} + 3), so<br>${SUM('r=0', 'n')} ${r}<sup>3</sup> ${nCr} = ${n}<sup>2</sup>(${n} + 3) 2<sup><i>n</i>−3</sup>.${NB}■`,
          `<b>Evaluation at ${n} = 6:</b> 36 · 9 · 2<sup>3</sup> = 36 × 9 × 8 = 2592.`,
          'The same three steps handle any polynomial weight; only the falling-factorial rewrite in Step 1 changes.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${SUM('r=0', '9')} (2${r} + 5) ${C('9', 'r')}.`,
            a: `7168 (from (2${a} + <i>nd</i>)2<sup><i>n</i>−1</sup> = (10 + 18)2<sup>8</sup>).`,
          },
          { q: `Evaluate ${SUM('r=0', '8')} ${r}(${r} − 1) ${C('8', 'r')}.`, a: '3584 (from 8 · 7 · 2<sup>6</sup>).' },
          { q: `Evaluate ${SUM('r=0', '7')} ${r}<sup>3</sup> ${C('7', 'r')}.`, a: '7840 (from 7<sup>2</sup> · 10 · 2<sup>4</sup>).' },
          {
            q: `Evaluate ${SUM('r=0', 'n')} (−1)<sup><i>r</i></sup>${r}<sup>2</sup> ${nCr} for ${n} = 2 and for ${n} = 6, and say for which ${n} the answer is 0.`,
            a: `2 at ${n} = 2; 0 at ${n} = 6; the answer is 0 for every ${n} ≥ 3.`,
          },
          {
            q: `Evaluate ${SUM('r=0', '5')} ${fr(r, `${r} + 1`)} ${C('5', 'r')}, and give the general closed form. (Hint: ${fr(r, `${r} + 1`)} = 1 − ${fr('1', `${r} + 1`)}, then use Topic 04’s integration result.)`,
            a: `${fr('43', '2')}; in general 2<sup><i>n</i></sup> − ${fr('2<sup><i>n</i>+1</sup> − 1', `${n} + 1`)}.`,
          },
          {
            q: `Evaluate ${SUM('r=0', '6')} ${r}${GAP}${C('6', 'r')} 2<sup><i>r</i></sup>, and state the general form of ${S1('r')} ${r}${GAP}${nCr}${x}<sup><i>r</i></sup>.`,
            a: `2916; in general ${S1('r')} ${r}${GAP}${nCr}${x}<sup><i>r</i></sup> = ${n} ${x} (1 + ${x})<sup><i>n</i>−1</sup>, here 6 · 2 · 3<sup>5</sup>.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic G · pp. 670–674 ────────────────
  {
    n: 'G',
    title: 'The Central Binomial Coefficient 2nCn',
    extra: true,
    kalam: 'Each central coefficient is a little less than four times the previous one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 03’s Key formulas and definitions part and its Worked examples part, and connects to Additional topic E.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 03 tells you the greatest binomial coefficient is the middle one and evaluates it numerically (${C('12', '6')} = 924), but never writes it in closed form. NCERT does: its Example 6 is a full derivation of the middle term of ${opx('2n')}, Exercise 8.2 Question 11 and Miscellaneous Example 12 both turn on relations between ${C2N} and the coefficients of ${opx('2n−1')}. Those are 3–4 mark CBSE proof questions. JEE Main reuses the same object as the constant term of (${x} + ${fr('1', x)})<sup>2<i>n</i></sup> and as ∑ ${Cq('r')}; JEE Advanced uses its size.`,
      },

      { t: 'part', title: 'Method: three faces of the same number' },
      {
        t: 'formula',
        kicker: 'The factorial form and the odd-product form',
        main: `${C2N} = ${fr('(2<i>n</i>)!', `${n}! ${n}!`)}<br>= ${fr('2<sup><i>n</i></sup> [1 · 3 · 5 ⋯ (2<i>n</i> − 1)]', `${n}!`)}.`,
        legend: [`${C2N} = the central binomial coefficient`, `${n} = a natural number`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Split (2${n})! into its odd and even factors. The even factors are 2, 4, 6, …, 2${n}, and there are ${n} of them, so their product is 2<sup><i>n</i></sup>(1 · 2 ⋯ ${n}) = 2<sup><i>n</i></sup> ${n}!. Hence (2${n})! = [1 · 3 · 5 ⋯ (2${n} − 1)] · 2<sup><i>n</i></sup> ${n}!, and dividing by ${n}! ${n}! gives the stated form. Equivalently, the middle term of ${opx('2n')} is<br>${T('n+1')} = ${fr(`1 · 3 · 5 ⋯ (2${n} − 1)`, `${n}!`)} 2<sup><i>n</i></sup> ${x}<sup><i>n</i></sup>,<br>which is NCERT’s Example 6 verbatim.`,
      },
      {
        t: 'p',
        html: `<b>The Pascal form.</b> Because ${C('2n−1', 'n−1')} = ${C('2n−1', 'n')} (symmetry, since (${n} − 1) + ${n} = 2${n} − 1), Pascal’s rule collapses to`,
      },
      {
        t: 'formula',
        kicker: 'The Pascal form',
        main: `${C2N} = ${C('2n−1', 'n−1')} + ${C('2n−1', 'n')}<br>= 2${GAP}${C('2n−1', 'n−1')}.`,
        legend: [`${C2N} = the central binomial coefficient`, `${n} = a natural number`],
        note: null,
      },
      {
        t: 'p',
        html: `In words: the middle coefficient of ${opx('2n')} is twice either middle coefficient of ${opx('2n−1')}, and equals their sum. That single sentence answers NCERT Exercise 8.2 Q11 and Miscellaneous Example 12 together.`,
      },
      {
        t: 'p',
        html: `<b>The sum-of-squares form.</b> From Additional topic E, ${C2N} = ${SUM('r=0', 'n')} (${nCr})<sup>2</sup>. It is also the constant term of (${x} + ${fr('1', x)})<sup>2<i>n</i></sup>, which is how NCERT introduces it in Section 8.3.`,
      },
      {
        t: 'p',
        html: '<b>Size: the exact ratio, and the bounds you may quote.</b> Successive central coefficients satisfy',
      },
      {
        t: 'formula',
        kicker: 'The exact ratio',
        main: `${fr(C2N, C('2n−2', 'n−1'))} = ${fr(`2(2${n} − 1)`, n)} = 4 − ${fr('2', n)}.`,
        legend: [`${C2N} = the central binomial coefficient`, `${n} = a natural number`],
        note: null,
      },
      {
        t: 'p',
        html: `So each central coefficient is a little less than four times the previous one. That “little less” accumulates, and it is why ${C2N} is not 4<sup><i>n</i></sup>. The two bounds worth carrying are`,
      },
      {
        t: 'formula',
        kicker: 'The bounds you may quote',
        main: `${fr('4<sup><i>n</i></sup>', `2${n} + 1`)} ≤ ${C2N} < 4<sup><i>n</i></sup> (${n} ≥ 1).`,
        legend: [`${C2N} = the central binomial coefficient`, `${n} = a natural number`],
        note: null,
      },
      {
        t: 'p',
        html: `Both are proved in one line from ${SUM('k=0', '2n')} ${C('2n', 'k')} = 2<sup>2<i>n</i></sup> = 4<sup><i>n</i></sup>: the sum has 2${n} + 1 terms of which ${C2N} is the largest, giving the lower bound; and all the other terms are strictly positive, giving the strict upper bound.`,
      },
      {
        t: 'p',
        html: `<b>Scope note.</b> Sharper asymptotics (the Stirling estimate ${C2N} ∼ ${fr('4<sup><i>n</i></sup>', '√(π<i>n</i>)')}) are not part of either the CBSE syllabus or the JEE syllabus, and JEE questions are set so that they are not needed. Do not quote them in a paper. The elementary bounds above are enough for the usual “estimate the size” and “which is larger” questions, and they are provable from material already in this chapter.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'G1: CBSE Board Level',
        q: `Show that the middle term in the expansion of ${opx('2n')} is ${fr(`1 · 3 · 5 ⋯ (2${n} − 1)`, `${n}!`)} 2<sup><i>n</i></sup> ${x}<sup><i>n</i></sup>, and verify for ${n} = 3.`,
        steps: [
          `Since 2${n} is even, there is exactly one middle term, the (${n} + 1)th, with ${r} = ${n}:<br>${T('n+1')} = ${C2N} ${x}<sup><i>n</i></sup> = ${fr('(2<i>n</i>)!', `${n}! ${n}!`)} ${x}<sup><i>n</i></sup>.`,
          `Now separate the even factors of (2${n})!:<br>(2${n})! = [1 · 3 · 5 ⋯ (2${n} − 1)] (${n} odd factors)<br>· [2 · 4 · 6 ⋯ 2${n}] (${n} even factors)<br>= [1 · 3 ⋯ (2${n} − 1)] · 2<sup><i>n</i></sup> ${n}!,<br>because pulling a 2 out of each of the ${n} even factors leaves 1 · 2 ⋯ ${n} = ${n}!.`,
          `Substituting and cancelling one ${n}!,<br>${T('n+1')} = ${fr(`1 · 3 · 5 ⋯ (2${n} − 1)`, `${n}!`)} 2<sup><i>n</i></sup> ${x}<sup><i>n</i></sup>.${NB}■`,
          `<b>Verification at ${n} = 3:</b> the formula gives ${fr('1 · 3 · 5', '3!')} · 2<sup>3</sup> = ${fr('15', '6')} × 8 = 20, and directly ${C('6', '3')} = 20.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'G2: JEE Main Level',
        q: `Prove that the coefficient of ${x}<sup><i>n</i></sup> in ${opx('2n')} is twice the coefficient of ${x}<sup><i>n</i></sup> in ${opx('2n−1')}.`,
        steps: [
          `The two coefficients are ${C2N} and ${C('2n−1', 'n')}. By Pascal’s rule,<br>${C2N} = ${C('2n−1', 'n−1')} + ${C('2n−1', 'n')}.`,
          `Now ${C('2n−1', 'n−1')} = ${C('2n−1', '(2n−1)−(n−1)')} = ${C('2n−1', 'n')}, so the two terms on the right are equal and<br>${C2N} = 2${GAP}${C('2n−1', 'n')}.${NB}■`,
          `The load-bearing observation is that (${n} − 1) + ${n} = 2${n} − 1, which is exactly the symmetry condition: the two middle coefficients of an odd-index row are always equal, which is what Topic 03 means when it says an odd index gives two tied greatest coefficients.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'G3: JEE Main: Speed Trap',
        q: `Find the value of ${fr(C('10', '5'), C('8', '4'))}, and say whether the ratio ${fr(C2N, C('2n−2', 'n−1'))} can ever equal 4.`,
        steps: [
          `<b>The trap.</b> “Central binomial coefficients grow like 4<sup><i>n</i></sup>” is a slogan students collect, and it makes 4 look like the obvious answer: going from ${C('8', '4')} to ${C('10', '5')} raises ${n} by one, so surely the ratio is 4. That gives 70 × 4 = 280, and the seductive part is that the true value 252 is close enough to make the error survive a rough sanity check.`,
          `<b>The fix.</b> Compute the ratio exactly:<br>${fr(C2N, C('2n−2', 'n−1'))} = ${fr('(2<i>n</i>)!', `${n}! ${n}!`)} · ${fr(`(${n} − 1)! (${n} − 1)!`, `(2${n} − 2)!`)}<br>= ${fr(`2${n}(2${n} − 1)`, `${n} · ${n}`)} = ${fr(`2(2${n} − 1)`, n)} = 4 − ${fr('2', n)}.`,
          `At ${n} = 5 this is 4 − ${fr('2', '5')} = ${fr('18', '5')} = 3.6, so ${C('10', '5')} = 3.6 × 70 = 252. And since ${fr('2', n)} > 0 for every ${n}, the ratio is <b>strictly less than</b> 4 <b>for all</b> ${n}: it approaches 4 but never reaches it.`,
          `<b>Name the trap: reading an asymptotic slogan as an exact identity.</b> The gap is what makes ${C2N} strictly smaller than 4<sup><i>n</i></sup>; if the ratio really were 4 every time, the two would be equal.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'G4: JEE Advanced Level',
        q: `Prove that ${fr('4<sup><i>n</i></sup>', `2${n} + 1`)} ≤ ${C2N} < 4<sup><i>n</i></sup> for every ${n} ≥ 1, and use it to bracket ${C('40', '20')}.`,
        steps: [
          `<b>Setup.</b> Put ${x} = 1 in ${opx('2n')}:<br>${SUM('k=0', '2n')} ${C('2n', 'k')} = 2<sup>2<i>n</i></sup> = 4<sup><i>n</i></sup>.<br>This is a sum of exactly 2${n} + 1 positive terms.`,
          `<b>Upper bound.</b> ${C2N} is one of those terms and the remaining 2${n} terms are all strictly positive (each is a positive integer, so at least 1), so ${C2N} < 4<sup><i>n</i></sup> whenever ${n} ≥ 1.`,
          `<b>Lower bound.</b> By Topic 03, ${C2N} is the largest of the 2${n} + 1 terms. A sum of 2${n} + 1 terms cannot exceed 2${n} + 1 copies of its largest term, so 4<sup><i>n</i></sup> ≤ (2${n} + 1) ${C2N}, that is, ${C2N} ≥ ${fr('4<sup><i>n</i></sup>', `2${n} + 1`)}.${NB}■`,
          `<b>Application with ${n} = 20.</b> Here 4<sup>20</sup> = 1099511627776, so the bounds read<br>${fr('1099511627776', '41')} ≈ 2.68 × 10<sup>10</sup><br>≤ ${C('40', '20')} < 1.10 × 10<sup>12</sup>.`,
          `The true value is ${C('40', '20')} = 137846528820 ≈ 1.38 × 10<sup>11</sup>, comfortably inside. The bracket spans a factor of 41, which is coarse but entirely sufficient for the order-of-magnitude and “which is larger” questions these bounds are set for, and, unlike Stirling’s formula, every step is inside your syllabus.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Write ${C('10', '5')} in the form ${fr(`2<sup><i>n</i></sup> [1 · 3 ⋯ (2${n} − 1)]`, `${n}!`)} and confirm the value.`,
            a: `${fr('2<sup>5</sup>(1 · 3 · 5 · 7 · 9)', '5!')} = ${fr('32 × 945', '120')} = 252.`,
          },
          {
            q: `Evaluate ${fr(C('12', '6'), C('10', '5'))} using the ratio formula, and check against the actual values.`,
            a: `4 − ${fr('2', '6')} = ${fr('11', '3')}; check ${fr('924', '252')} = ${fr('11', '3')}.`,
          },
          {
            q: `Find the term independent of ${x} in (${x} + ${fr('1', x)})<sup>14</sup>.`,
            a: `${C('14', '7')} = 3432 (the central binomial coefficient with ${n} = 7).`,
          },
          {
            q: `Prove that ${C2N} = 2${GAP}${C('2n−1', 'n−1')}, and state which NCERT result this is.`,
            a: `Pascal’s rule plus ${C('2n−1', 'n−1')} = ${C('2n−1', 'n')}; this is NCERT Exercise 8.2 Q11 and Miscellaneous Example 12.`,
          },
          {
            q: `Use the bounds of Example G4 to bracket ${C('30', '15')}, and compare with the true value 155117520.`,
            a: `4<sup>15</sup> = 1073741824, so 34636833 ≤ ${C('30', '15')} < 1073741824; the true value 155117520 lies inside.`,
          },
          {
            q: `Using Additional topic E, express ${C2N} as a sum of squares and verify the identity for ${n} = 4.`,
            a: `${C2N} = ${SUM('r=0', 'n')} (${nCr})<sup>2</sup>; at ${n} = 4, 1 + 16 + 36 + 16 + 1 = 70 = ${C('8', '4')}.`,
          },
        ],
      },
    ],
  },
];
