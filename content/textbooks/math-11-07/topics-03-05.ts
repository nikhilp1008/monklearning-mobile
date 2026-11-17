import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 03–05, pp. 597–613 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopics 03
 * Greatest Term and Greatest Binomial Coefficient (pp. 597–601; p. 602 is a
 * blank page, listed in the errata), 04 Properties of Binomial Coefficients and
 * Summation of Series (pp. 603–608) and 05 Binomial Theorem for Any Index and
 * Approximations (pp. 609–613). Subtopic 06 starts on p. 614.
 * Each topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * No figures and no drawings on these pages. ⁿCᵣ with an italic C, as the page
 * sets it. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const Cs = (b: string) => `<i>C</i><sub>${b}</sub>`;
const Cq = (b: string) => `<i>C</i><sub>${b}</sub><sup>2</sup>`;
const T = (b: string) => `<i>T</i><sub>${b}</sub>`;
const cc = (b: string) => `<i>c</i><sub>${b}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;

const n = '<i>n</i>';
const r = '<i>r</i>';
const x = '<i>x</i>';
const k = '<i>k</i>';
const y = '<i>y</i>';
const p = '<i>p</i>';
const ab = (pow: string) => `(<i>a</i> + <i>b</i>)<sup>${pow}</sup>`;
const amb = (pow: string) => `(<i>a</i> − <i>b</i>)<sup>${pow}</sup>`;
const opx = (pow: string) => `(1 + <i>x</i>)<sup>${pow}</sup>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A thin space: sets a stacked fraction off the letter after it. */
const THIN = '\u2009';
const omx = (pow: string) => `(1 − <i>x</i>)<sup>${pow}</sup>`;
const HALF = fr('1', '2');
const nCr = C(n, r);
const r0 = SUM('<i>r</i>=0', n);
const r1 = SUM('<i>r</i>=1', n);
const FLOORK = '⌊<i>k</i>⌋';
const TR1 = T('<i>r</i>+1');
const TR = T(r);
const RATIO = `|${fr(TR1, TR)}|`;
const NR1 = fr('<i>n</i> − <i>r</i> + 1', r);
const BA = `|${fr('<i>b</i>', '<i>a</i>')}|`;
const KSHORT = fr('(<i>n</i> + 1) |<i>x</i>|', '1 + |<i>x</i>|');
const KSHORT2 = fr('(<i>n</i> + 1)|<i>x</i>|', '1 + |<i>x</i>|');
const LAMBDA = `${fr('<i>n</i> − <i>r</i>', '<i>r</i> + 1')} |<i>λ</i>|`;
const C0 = Cs('0');
const C1 = Cs('1');
const C2 = Cs('2');
const C3 = Cs('3');
const C4 = Cs('4');
const C5 = Cs('5');
const Cn = Cs(n);
const Crr = Cs(r);
const INTW = fr('2<sup><i>n</i>+1</sup> − 1', '<i>n</i> + 1');
const ALTW = fr('1', '<i>n</i> + 1');
const R1W = fr('1', '<i>r</i> + 1');
const CR1 = fr(Crr, '<i>r</i> + 1');
const ALTCR1 = fr(`(−1)<sup><i>r</i></sup>${Crr}`, '<i>r</i> + 1');
const C2N = C('2<i>n</i>', n);
const FALL = fr('<i>n</i>(<i>n</i> − 1)(<i>n</i> − 2) ⋯ (<i>n</i> − <i>r</i> + 1)', '<i>r</i>!');
const FALL2 = fr('<i>n</i>(<i>n</i> − 1) ⋯ (<i>n</i> − <i>r</i> + 1)', '<i>r</i>!');
const Q2 = fr('<i>n</i>(<i>n</i> − 1)', '2!');
const Q3 = fr('<i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)', '3!');
const Q2Y = fr('<i>n</i>(<i>n</i>−1)', '2!');
const Q2H = fr('<i>n</i>(<i>n</i>−1)', '2');
const BOA = `(1 + ${fr('<i>b</i>', '<i>a</i>')})<sup><i>n</i></sup>`;
const BOAABS = `|${fr('<i>b</i>', '<i>a</i>')}|`;
const PR1 = C('<i>p</i>+<i>r</i>−1', r);
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 597–601 ────────────────
  {
    n: '03',
    title: 'Greatest Term and Greatest Binomial Coefficient',
    kalam: 'Two different “biggest” questions live in this topic, and students constantly confuse them.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Find the numerically greatest term” is a recurring JEE Main question and a frequent JEE Advanced sub-step ${ESTIMATE}. The greatest binomial coefficient (always the middle one) is a quick conceptual MCQ. Not part of the rationalised CBSE Class 11 core, but standard in JEE preparation and coaching modules.`,
      },

      { t: 'part', title: 'Concept intuition' },
      { t: 'p', html: 'Two different “biggest” questions live in this topic, and students constantly confuse them.' },
      {
        t: 'p',
        html: `The <b>greatest binomial coefficient</b> asks: among ${C(n, '0')}, ${C(n, '1')}, … , ${C(n, n)}, which is largest? This depends only on ${n}, not on any value of ${x}. From Pascal’s triangle the rows rise to a peak in the middle and fall symmetrically, so the largest coefficient is always the <b>middle</b> one: the coefficient of the middle term we found in Topic 02.`,
      },
      {
        t: 'p',
        html: `The <b>numerically greatest term</b> asks something harder: in an actual expansion like ${ab(n)} evaluated at given numbers, which term (coefficient times the powers) has the largest magnitude? This depends on <i>a</i>, <i>b</i>, and ${n} together, because a large coefficient can be dragged down by a small power of <i>b</i>, or a modest coefficient lifted by a large power.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> walk along the terms ${T('1')}, ${T('2')}, ${T('3')}, … and watch the ratio of each term to the previous one, ${RATIO}. While this ratio is bigger than 1, the terms are still growing; the moment it drops below 1, they start shrinking. The greatest term sits right at the turning point. So instead of computing all ${n} + 1 terms, we just find where the ratio crosses 1.`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> This ratio test works for any finite binomial expansion (positive integral ${n}). For the algebraically greatest term in ${amb(n)}, remember the terms alternate in sign: the numerically greatest term may be negative, in which case the algebraically greatest term is a neighbouring positive term, and you must compare those neighbours explicitly.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: `Greatest binomial coefficient of ${opx(n)} (equivalently, the largest ${nCr})`,
        main: `${n} even ∶ ${C(n, '<i>n</i>/2')} (unique);<br>${n} odd ∶ ${C(n, '(<i>n</i>−1)/2')} = ${C(n, '(<i>n</i>+1)/2')} (two equal).`,
        legend: [`${n} = the index (${n} ∈ ℕ)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Numerically greatest term: ratio method',
        main: `For ${ab(n)}, the consecutive-term ratio is:<br>${RATIO} = ${NR1} ${BA}.`,
        legend: [
          `<i>a</i>, <i>b</i> = the two parts of the binomial`,
          `${n} = the index (${n} ∈ ℕ)`,
          `${r} = the term index`,
          `${TR} = the ${r}th term (${TR1} = ${nCr} <i>a</i><sup><i>n</i>−<i>r</i></sup><i>b</i><sup><i>r</i></sup>)`,
        ],
        note: null,
      },
      { t: 'p', html: `Set this ≥ 1 and solve for ${r}.` },
      {
        t: 'formula',
        kicker: `Greatest term of ${opx(n)}: the shortcut`,
        main: `${k} = ${KSHORT};<br>${k} not an integer: the greatest term is ${T(`${FLOORK}+1`)};<br>${k} an integer: ${T(k)} = ${T('<i>k</i>+1')}, both greatest.`,
        legend: [
          `${x} = the variable’s value`,
          `${n} = the index (${n} ∈ ℕ)`,
          `${k} = the crossing point (the ratio is ≥ 1 exactly when ${r} ≤ ${k})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• If ${k} is <b>not</b> an integer, the greatest term is ${T(`${FLOORK}+1`)} (i.e. ${r} = ${FLOORK}).<br>• If ${k} <b>is</b> an integer, then ${T(k)} and ${T('<i>k</i>+1')} are <b>equal</b> and both greatest.`,
      },
      {
        t: 'formula',
        kicker: 'Greatest coefficient (numerical) of (1 + <i>λx</i>)<sup><i>n</i></sup>',
        main: `${cc(r)} = ${nCr} <i>λ</i><sup><i>r</i></sup>;<br>|${fr(cc('<i>r</i>+1'), cc(r))}| = ${LAMBDA} ≥ 1.`,
        legend: [
          `${cc(r)} = the coefficient of ${x}<sup><i>r</i></sup>`,
          '<i>λ</i> = the fixed multiplier of <i>x</i> (a non-zero constant)',
          `${n} = the index (${n} ∈ ℕ)`,
          `${r} = the term index`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Here <i>a</i>, <i>b</i> are the two parts of the binomial, ${x} the variable’s value, ${n} ∈ ℕ the index, ${r} the term index.`,
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Why the middle binomial coefficient is greatest.</b> Consider the ratio of consecutive coefficients:<br>${fr(nCr, C(n, '<i>r</i>−1'))} = ${NR1}.<br>This exceeds 1 exactly when ${n} − ${r} + 1 > ${r}, i.e. ${r} < ${fr('<i>n</i>+1', '2')}. So the coefficients <b>increase</b> while ${r} < ${fr('<i>n</i>+1', '2')} and <b>decrease</b> after: they peak at the middle. For even ${n} the peak is the single value ${C(n, '<i>n</i>/2')}; for odd ${n} two central coefficients tie. ■`,
      },
      {
        t: 'proc',
        title: 'Numerically greatest term: the algorithm',
        steps: [
          `Write the magnitude ratio ${RATIO} = ${NR1} ${BA}.`,
          `Solve the inequality ${NR1} ${BA} ≥ 1 for ${r}, getting ${r} ≤ ${k} for some number ${k}.`,
          `The terms increase up to ${r} = ${FLOORK} and decrease after, so the greatest term is ${T(`${FLOORK}+1`)}. If ${k} is an exact integer, ${T(k)} = ${T('<i>k</i>+1')} are jointly greatest.`,
          `For ${amb(n)}, decide the <b>sign</b> of that term; if it is negative and the question asks for the algebraically greatest, compare the adjacent positive terms.`,
        ],
      },
      {
        t: 'p',
        html: 'The reasoning: a single ratio crossing 1 marks the unique turning point of a sequence that rises then falls, so locating that crossing locates the maximum without evaluating every term.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Find the greatest binomial coefficient in the expansion of ${opx('12')}.`,
        steps: [`${n} = 12 is even, so the greatest coefficient is the unique middle one:<br>${C('12', '12/2')} = ${C('12', '6')}.`],
        ans: '924',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the numerically greatest term in (1 + 4${x})<sup>8</sup> when ${x} = ${HALF}.`,
        steps: [
          `At ${x} = ${HALF}, term magnitude ∝ ${C('8', r)} (4 · ${HALF})<sup><i>r</i></sup> = ${C('8', r)} 2<sup><i>r</i></sup>. Ratio:<br>${fr(TR1, TR)} = ${fr('8 − <i>r</i> + 1', r)} · 2 = ${fr('2(9 − <i>r</i>)', r)} ≥ 1<br>⇒ 18 − 2${r} ≥ ${r}<br>⇒ ${r} ≤ 6.`,
          `So the ratio stays ≥ 1 up to ${r} = 6, and at ${r} = 6 it equals <b>exactly</b> 1 (check: ${fr('2(9−6)', '6')} = 1), the integer-crossing case from the Key formulas and definitions part. That means ${T('6')} and ${T('7')} are <b>equal and jointly greatest</b>:<br>${T('6')} = ${C('8', '5')} (4${x})<sup>5</sup> = 56 · 2<sup>5</sup> = 1792,<br>${T('7')} = ${C('8', '6')} (4${x})<sup>6</sup> = 28 · 2<sup>6</sup> = 1792.`,
          `<b>The trap:</b> forgetting the coefficient 4 inside (4${x}): students use |${x}| = ${HALF} in the ratio instead of |4${x}| = 2, getting the wrong ${r}. The “${fr('<i>b</i>', '<i>a</i>')}” factor must include the full second part of the binomial.`,
        ],
        ans: `${T('6')} = ${T('7')} = 1792 (two equal greatest terms).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `Find the greatest coefficient in the expansion of (1 + 2${x})<sup>6</sup>.`,
        steps: [
          `Coefficients are ${cc(r)} = ${C('6', r)} 2<sup><i>r</i></sup>. Ratio:<br>${fr(cc('<i>r</i>+1'), cc(r))} = ${fr('6 − <i>r</i>', '<i>r</i> + 1')} · 2 ≥ 1<br>⇒ 2(6 − ${r}) ≥ ${r} + 1<br>⇒ 11 ≥ 3${r}<br>⇒ ${r} ≤ ${fr('11', '3')} ≈ 3.67.`,
          `So ${cc(r)} increases up to ${r} = 4 (check: ${fr(cc('4'), cc('3'))} = ${fr('3', '4')}${NB}· 2 = 1.5 > 1, ${fr(cc('5'), cc('4'))} = ${fr('2', '5')}${NB}· 2 = 0.8 < 1). Greatest coefficient:<br>${cc('4')} = ${C('6', '4')} 2<sup>4</sup> = 15 · 16 = 240.`,
          `Note this is the coefficient of ${x}<sup>4</sup>, <b>not</b> the middle term, because the factor 2<sup><i>r</i></sup> shifts the peak rightward.`,
        ],
        ans: '240',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the numerically greatest term in (4 − 3${x})<sup>8</sup> when ${x} = 1, and state the algebraically greatest term.`,
        steps: [
          `General-term magnitude: |${C('8', r)} 4<sup>8−<i>r</i></sup>(−3${x})<sup><i>r</i></sup>| = ${C('8', r)} 4<sup>8−<i>r</i></sup> 3<sup><i>r</i></sup> (since |3${x}| = 3 at ${x} = 1). The consecutive-term magnitude ratio is<br>${fr(`|${TR1}|`, `|${TR}|`)} = ${fr('8 − <i>r</i> + 1', r)} · ${fr('3', '4')}<br>= ${fr('9 − <i>r</i>', r)} · ${fr('3', '4')} ≥ 1<br>⇒ 3(9 − ${r}) ≥ 4${r}<br>⇒ 27 ≥ 7${r}<br>⇒ ${r} ≤ ${fr('27', '7')} ≈ 3.86.`,
          `So the magnitude increases up to ${r} = 3, giving the numerically greatest term ${T('4')}:<br>|${T('4')}| = ${C('8', '3')} 4<sup>5</sup> 3<sup>3</sup><br>= 56 · 1024 · 27 = 1,548,288.`,
          `But ${T('4')} carries (−3${x})<sup>3</sup>, an <b>odd</b> power, so ${T('4')} = −1,548,288 is <b>negative</b>. The <b>algebraically</b> greatest term is therefore the larger of its positive neighbours ${T('3')} and ${T('5')}:<br>${T('3')} = ${C('8', '2')} 4<sup>6</sup> 3<sup>2</sup> = +1,032,192,<br>${T('5')} = ${C('8', '4')} 4<sup>4</sup> 3<sup>4</sup> = +1,451,520.`,
          `Since ${T('5')} > ${T('3')}, the algebraically greatest term is ${T('5')}.`,
        ],
        ans: `Numerically greatest: ${T('4')} = −1,548,288; algebraically greatest: ${T('5')} = +1,451,520.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE / School] Find the greatest binomial coefficient in ${opx('15')}.`,
            a: `${C('15', '7')} = ${C('15', '8')} = 6435 (two equal, ${n} odd)`,
          },
          {
            q: `[JEE Main] Find the numerically greatest term in ${opx('10')} when ${x} = ${fr('2', '3')}.`,
            a: `${T('5')} (at ${r} = 4), value ${C('10', '4')}(${fr('2', '3')})<sup>4</sup> = 210 · ${fr('16', '81')} = ${fr('1120', '27')}`,
          },
          {
            q: `[JEE Main] Find the greatest coefficient in (2 + 3${x})<sup>5</sup>.`,
            a: `1080 (coefficient of ${x}<sup>3</sup>: ${C('5', '3')} 2<sup>2</sup>3<sup>3</sup> = 10${NB}· 4${NB}· 27)`,
          },
          {
            q: `[JEE Advanced] In (3 + 2${x})<sup>9</sup> with ${x} = 1, find the numerically greatest term.`,
            a: `${T('4')} = ${T('5')} = 489888 (the magnitude ratio equals 1 at ${r} = 4, so two equal greatest terms; ${C('9', '3')} 3<sup>6</sup> 2<sup>3</sup> = ${C('9', '4')} 3<sup>5</sup> 2<sup>4</sup>)`,
          },
          {
            q: `[JEE Advanced] For what value(s) of ${x} does ${opx('20')} have ${T('10')} and ${T('11')} as equal greatest terms?`,
            a: `${x} = ${fr('10', '11')} (from ${k} = ${KSHORT2} = 10 ⇒ integer case, so |${x}| = ${fr('10', '11')}; ${x} must be positive, since at ${x} = −${fr('10', '11')} the two terms are equal in size but opposite in sign)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The greatest binomial coefficient in ${opx('11')} is:`,
        opts: [
          { label: `${C('11', '5')} only`, nudge: '<b>(a)</b>, <b>(b)</b> pick only one of the tied pair.' },
          { label: `${C('11', '6')} only`, nudge: '<b>(a)</b>, <b>(b)</b> pick only one of the tied pair.' },
          { label: `${C('11', '5')} = ${C('11', '6')}`, nudge: null },
          { label: C('11', '0'), nudge: '<b>(d)</b> confuses largest coefficient with the first/edge coefficient.' },
        ],
        correct: 2,
        solution: `${n} = 11 is odd, so the two central coefficients ${C('11', '5')} and ${C('11', '6')} are equal and jointly greatest.`,
      },
      {
        t: 'mcq',
        q: 'The greatest binomial coefficient is always:',
        opts: [
          { label: C(n, '1'), nudge: '<b>(a)</b>, <b>(c)</b> are edge or near-edge coefficients.' },
          { label: 'the middle one(s)', nudge: null },
          { label: C(n, n), nudge: '<b>(a)</b>, <b>(c)</b> are edge or near-edge coefficients.' },
          {
            label: `it depends on ${x}`,
            nudge: `<b>(d)</b> confuses the greatest coefficient (independent of ${x}) with the greatest term (which does depend on ${x}).`,
          },
        ],
        correct: 1,
        solution: 'Coefficients rise to the middle and fall symmetrically.',
      },
      {
        t: 'mcq',
        q: `In ${opx(n)} with ${x} > 0, the numerically greatest term is found by solving:`,
        opts: [
          { label: `${NR1}${THIN}${x} ≥ 1`, nudge: null },
          { label: `${fr(r, '<i>n</i> − <i>r</i> + 1')}${THIN}${x} ≥ 1`, nudge: '<b>(b)</b> inverts the ratio.' },
          { label: `${nCr} maximum`, nudge: `<b>(c)</b> finds the greatest coefficient, ignoring ${x}.` },
          {
            label: `${n}${x} ≥ 1`,
            nudge: `<b>(d)</b> ${n}${x} ≥ 1 is only the first ratio, ${fr(T('2'), T('1'))} = ${n}${x}: it says whether the terms start by rising, not where they stop.`,
          },
        ],
        correct: 0,
        solution: 'This is the consecutive-term ratio set ≥ 1.',
      },
      {
        t: 'mcq',
        q: `For ${ab(n)} at given values, if the ratio crossing point ${k} comes out an exact integer, then:`,
        opts: [
          { label: 'there is no greatest term', nudge: '<b>(a)</b> false: a finite sum always has a greatest term.' },
          {
            label: `${T(k)} alone is greatest`,
            nudge: `<b>(b)</b> misses the tie: at ${r} = ${k} the ratio |${fr(T('<i>k</i>+1'), T(k))}| equals 1, so ${T('<i>k</i>+1')} is as large as ${T(k)}.`,
          },
          { label: `${T(k)} = ${T('<i>k</i>+1')} are jointly greatest`, nudge: null },
          {
            label: `${T('<i>k</i>−1')} is greatest`,
            nudge: `<b>(d)</b> stops one term early: for ${r} < ${k} the ratio |${fr(TR1, TR)}| is greater than 1, so ${T(k)} is larger than ${T('<i>k</i>−1')}.`,
          },
        ],
        correct: 2,
        solution: `An integer ${k} means the ratio equals exactly 1 at that step, so two adjacent terms tie.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Confusing the two “greatest” questions.</b> Greatest binomial coefficient = middle, independent of ${x}. Greatest term = depends on <i>a</i>, <i>b</i>, ${x} via the ratio test. Read the question carefully.`,
          `<b>Dropping the coefficient inside the bracket.</b> In (1 + 4${x})<sup><i>n</i></sup> the ratio uses |4${x}|, not |${x}|. The full second part <i>b</i> enters the ratio.`,
          `<b>The integer-${k} tie.</b> If the crossing point is an exact integer, two terms are jointly greatest: don’t report just one.`,
          `<b>Numerical vs algebraic for ${amb(n)}.</b> The numerically greatest term can be negative; the algebraically greatest is then a neighbouring positive term. Compare neighbours explicitly.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> For ${opx(n)}, memorise ${k} = ${KSHORT2} and read off ${r} = ${FLOORK}. It collapses the whole inequality into one division: ideal for objective papers.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Greatest binomial coefficient',
            note: `middle. ${n} even ⇒ ${C(n, '<i>n</i>/2')}; ${n} odd ⇒ ${C(n, '(<i>n</i>±1)/2')} (two equal).`,
          },
          { f: 'Numerically greatest term', note: `solve ${NR1} ${BA} ≥ 1.` },
          {
            f: `Shortcut for ${opx(n)}`,
            note: `${k} = ${KSHORT2}; greatest is ${T(`${FLOORK}+1`)}. Integer ${k} ⇒ ${T(k)} = ${T('<i>k</i>+1')}.`,
          },
          { f: 'Greatest coefficient of (1 + <i>λx</i>)<sup><i>n</i></sup>', note: `ratio ${LAMBDA} ≥ 1.` },
          { f: amb(n), note: 'numerically greatest may be negative; compare neighbours for algebraically greatest.' },
        ],
        aids: ['“Coefficient peak = middle; term peak = where ratio crosses 1.”'],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 603–608 ────────────────
  {
    n: '04',
    title: 'Properties of Binomial Coefficients and Summation of Series',
    kalam: 'Four reusable techniques (substitution, differentiation, integration, coefficient-comparison) crack almost every problem in this topic.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is among the most heavily examined areas of the chapter at JEE level: sums like ∑ ${r} ${Crr}, ∑ ${CR1}, and ∑ ${Cq(r)} appear almost every year in JEE Main and Advanced ${ESTIMATE}. Four reusable techniques (substitution, differentiation, integration, coefficient-comparison) crack almost every problem in this topic. Beyond rationalised CBSE core, but indispensable for competitive exams.`,
      },
      { t: 'p', html: `(Throughout, write ${Crr} for ${nCr}.)` },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `The expansion ${opx(n)} = ${C0} + ${C1}${x} + ${C2}${x}<sup>2</sup> + ⋯ + ${Cn}${x}<sup><i>n</i></sup> is not just a formula: it is a <b>machine with a dial</b>, the dial being ${x}. Turn the dial to different values, or operate on the whole identity (differentiate it, integrate it, multiply two copies together), and out drop exact closed forms for sums that look impossible to add directly.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b><br>• Want ${C0} + ${C1} + ⋯ + ${Cn}? Turn the dial to ${x} = 1: the left side becomes 2<sup><i>n</i></sup>. Done, no term-by-term addition.<br>• Want the alternating sum ${C0} − ${C1} + ${C2} − …? Turn the dial to ${x} = −1: the left side becomes 0.<br>• Want ${C1} + 2${C2} + 3${C3} + … (each coefficient weighted by its index)? That weighting is exactly what <b>differentiation</b> does (${fr('d', 'd<i>x</i>')}${x}<sup><i>r</i></sup> = ${r}${x}<sup><i>r</i>−1</sup>), so differentiate the identity, then set ${x} = 1.<br>• Want ${C0} + ${fr(C1, '2')} + ${fr(C2, '3')} + … (each weighted by ${R1W})? That is what <b>integration</b> does (∫ ${x}<sup><i>r</i></sup> d${x} = ${fr(`${x}<sup><i>r</i>+1</sup>`, '<i>r</i> + 1')}), so integrate from 0 to 1.<br>• Want ${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq(n)} (products of coefficients)? Multiply two expansions together and read off a single coefficient on each side.`,
      },
      {
        t: 'p',
        html: 'So you never “sum the series” by brute force. You recognise which operation produces the weights you see, apply it to the master identity, and substitute.',
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> Substitution (${x} = ±1) is always valid (the expansion is a finite polynomial). Differentiation and integration are term-by-term operations on that polynomial, always legitimate here. The only care needed is bookkeeping: after differentiating, the running index and limits shift, so re-read which sum you have actually produced before substituting.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `With ${Crr} = ${nCr}:` },
      {
        t: 'formula',
        kicker: 'Basic identities (substitution)',
        main: `${r0} ${Crr} = 2<sup><i>n</i></sup><br>${r0} (−1)<sup><i>r</i></sup>${Crr} = 0 (${n} ≥ 1)<br>${C0} + ${C2} + ${C4} + ⋯ = ${C1} + ${C3} + ${C5} + ⋯ = 2<sup><i>n</i>−1</sup>.`,
        legend: [`${n} = the index (${n} ∈ ℕ)`, `${r} = the term index`, `${Crr} = the binomial coefficient ${nCr} (a pure number)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Index/ratio identities',
        main: `${fr(Crr, Cs('<i>r</i>−1'))} = ${NR1}<br>${r} · ${nCr} = ${n} · ${C('<i>n</i>−1', '<i>r</i>−1')}<br>${CR1} = ${ALTW} ${C('<i>n</i>+1', '<i>r</i>+1')}.`,
        legend: [
          `${n} = the index (${n} ∈ ℕ)`,
          `${r} = the term index (1 ≤ ${r} ≤ ${n} in the first two lines)`,
          `${Crr} = the binomial coefficient ${nCr} (a pure number)`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Weighted sums (differentiation / integration)',
        main: `${r1} ${r} ${Crr} = ${n} 2<sup><i>n</i>−1</sup><br>${r1} ${r}<sup>2</sup> ${Crr} = ${n}(${n} + 1) 2<sup><i>n</i>−2</sup><br>${r0} ${CR1} = ${INTW}<br>${r0} ${ALTCR1} = ${ALTW}.`,
        legend: [`${n} = the index (${n} ∈ ℕ)`, `${r} = the term index`, `${Crr} = the binomial coefficient ${nCr} (a pure number)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Products of coefficients (coefficient-comparison)',
        main: `${r0} ${Cq(r)} = ${C2N}<br>${SUM('<i>r</i>=0', '<i>n</i>−<i>k</i>')} ${Crr} ${Cs('<i>r</i>+<i>k</i>')} = ${C('2<i>n</i>', '<i>n</i>−<i>k</i>')}.`,
        legend: [
          `${n} = the index (${n} ∈ ℕ)`,
          `${r} = the term index`,
          `${Crr} = the binomial coefficient ${nCr} (a pure number)`,
          `${k} = the fixed gap between the two lower indices (0 ≤ ${k} ≤ ${n})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Vandermonde’s identity:</b> ∑<sub><i>k</i></sub> ${C('<i>m</i>', k)} ${C(n, '<i>p</i>−<i>k</i>')} = ${C('<i>m</i>+<i>n</i>', p)} (<i>m</i>, ${n}, ${p} non-negative integers; proved in Additional topic E).`,
      },
      {
        t: 'p',
        html: `Here ${n} ∈ ℕ, ${r} is the term index, ${Crr} are the binomial coefficients (pure numbers).`,
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Technique A: Substitution.</b> Put chosen values of ${x} into ${opx(n)} = ∑ ${Crr}${x}<sup><i>r</i></sup>.<br>• ${x} = 1: ∑ ${Crr} = 2<sup><i>n</i></sup>.<br>• ${x} = −1: ∑(−1)<sup><i>r</i></sup>${Crr} = 0 (${n} ≥ 1).<br>• Adding these two results and halving isolates the even-indexed coefficients: ${C0} + ${C2} + ⋯ = ${fr('2<sup><i>n</i></sup> + 0', '2')} = 2<sup><i>n</i>−1</sup>; subtracting gives the odd-indexed sum = 2<sup><i>n</i>−1</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Technique B: Differentiation.</b> Differentiate ${opx(n)} = ${r0} ${Crr}${x}<sup><i>r</i></sup>:<br>${n}${opx('<i>n</i>−1')} = ${r1} ${r} ${Crr} ${x}<sup><i>r</i>−1</sup>.<br>Put ${x} = 1: ${r1} ${r} ${Crr} = ${n} 2<sup><i>n</i>−1</sup>. (Multiplying by ${x}, differentiating again and substituting gives ∑ ${r}<sup>2</sup>${Crr}.) The reason this works: differentiation multiplies the ${x}<sup><i>r</i></sup> term by ${r}, manufacturing exactly the weight ${r} on each coefficient.`,
      },
      {
        t: 'p',
        html: `<b>Technique C: Integration.</b> Integrate ${opx(n)} = ∑ ${Crr}${x}<sup><i>r</i></sup> from 0 to 1:<br>${INT('0', '1')} ${opx(n)} d${x} = ${INTW},<br>${INT('0', '1')} ∑ ${Crr}${x}<sup><i>r</i></sup> d${x} = ∑ ${CR1}.<br>Hence ${r0} ${CR1} = ${INTW}. Integrating from −1 to 0 (or using ${x} = −1 limits) yields the alternating version ${ALTW}.`,
      },
      {
        t: 'p',
        html: `<b>Technique D: Coefficient comparison (for products like ∑ ${Cq(r)}).</b> Start from<br>${opx(n)}${opx(n)} = ${opx('2<i>n</i>')}.<br>Write both factors as ∑ ${Crr}${x}<sup><i>r</i></sup>. An ${x}<sup><i>n</i></sup> on the left comes from ${x}<sup><i>r</i></sup> in the first factor times ${x}<sup><i>n</i>−<i>r</i></sup> in the second, so the coefficient of ${x}<sup><i>n</i></sup> on the left is ∑<sub><i>r</i></sub> ${Crr}${Cs('<i>n</i>−<i>r</i>')} = ∑<sub><i>r</i></sub> ${Cq(r)} (using symmetry, ${Cs('<i>n</i>−<i>r</i>')} = ${Crr}). On the right, the coefficient of ${x}<sup><i>n</i></sup> in ${opx('2<i>n</i>')} is ${C2N}. Equate:<br>${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq(n)} = ${C2N}.<br>The same “multiply two expansions, compare one coefficient” move proves Vandermonde’s identity and all ∑ ${Crr}${Cs('<i>r</i>+<i>k</i>')} sums. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Show that ${C0} + ${C2} + ${C4} + ⋯ = 2<sup><i>n</i>−1</sup> for ${opx(n)}, ${n} ≥ 1.`,
        steps: [
          `Put ${x} = 1: ${C0} + ${C1} + ${C2} + ⋯ + ${Cn} = 2<sup><i>n</i></sup>. Put ${x} = −1: ${C0} − ${C1} + ${C2} − ⋯ = 0. <b>Add</b> the two equations: the odd-indexed terms cancel, the even-indexed terms double:<br>2(${C0} + ${C2} + ${C4} + …) = 2<sup><i>n</i></sup><br>⇒ ${C0} + ${C2} + ${C4} + ⋯ = 2<sup><i>n</i>−1</sup>.`,
          `Subtracting instead gives ${C1} + ${C3} + ⋯ = 2<sup><i>n</i>−1</sup> as well: the even and odd families are equal.`,
        ],
        ans: '2<sup><i>n</i>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Evaluate ${C1} + 2${C2} + 3${C3} + ⋯ + ${n}${Cn} for ${opx('10')}.`,
        steps: [
          `Recognise the weights 1, 2, 3, …: that is the differentiation signature. Using ${r1} ${r}${Crr} = ${n} 2<sup><i>n</i>−1</sup> directly with ${n} = 10:<br>${SUM('<i>r</i>=1', '10')} ${r} ${Crr} = 10 · 2<sup>9</sup><br>= 10 · 512 = 5120.`,
          `<b>The trap:</b> trying to compute each ${r}${Crr} and add (slow, error-prone). The instant you see index-weights, reach for ${n} 2<sup><i>n</i>−1</sup>: no expansion needed.`,
        ],
        ans: '5120',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `Evaluate ${C0} + ${fr(C1, '2')} + ${fr(C2, '3')} + ⋯ + ${fr(Cn, '<i>n</i> + 1')} for ${n} = 5.`,
        steps: [
          `The weights ${R1W} are the integration signature. Using ${r0} ${CR1} = ${INTW} with ${n} = 5:<br>${SUM('<i>r</i>=0', '5')} ${CR1} = ${fr('2<sup>6</sup> − 1', '6')} = ${fr('63', '6')} = ${fr('21', '2')}.`,
          'This blends the integration technique with clean arithmetic: the kind of two-step Main problem that rewards recognising the weight pattern instantly.',
        ],
        ans: fr('21', '2'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that ${Cq('0')} + ${Cq('1')} + ${Cq('2')} + ⋯ + ${Cq(n)} = ${C2N}, and hence evaluate ${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq('4')} for ${n} = 4.`,
        steps: [
          `<b>Proof.</b> Consider ${opx(n)}${opx(n)} = ${opx('2<i>n</i>')}. Expand the first factor as ∑<sub><i>r</i></sub> ${Crr}${x}<sup><i>r</i></sup> and the second as ∑<sub><i>s</i></sub> ${Cs('<i>s</i>')}${x}<sup><i>s</i></sup>; the coefficient of ${x}<sup><i>n</i></sup> on the left is ∑<sub><i>r</i></sub> ${Crr} ${Cs('<i>n</i>−<i>r</i>')}. By symmetry ${Cs('<i>n</i>−<i>r</i>')} = ${Crr}, so this equals ∑<sub><i>r</i></sub> ${Cq(r)}. On the right, the coefficient of ${x}<sup><i>n</i></sup> in ${opx('2<i>n</i>')} is ${C2N}. Equating coefficients of ${x}<sup><i>n</i></sup>:<br>${r0} ${Cq(r)} = ${C2N}.`,
          `<b>Evaluation (${n} = 4):</b> the coefficients of ${opx('4')} are 1, 4, 6, 4, 1, so<br>1<sup>2</sup> + 4<sup>2</sup> + 6<sup>2</sup> + 4<sup>2</sup> + 1<sup>2</sup><br>= 1 + 16 + 36 + 16 + 1 = 70 = ${C('8', '4')}.`,
        ],
        ans: '70',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE / School] Find ${C0} + ${C1} + ${C2} + ⋯ + ${Cn} and ${C0} − ${C1} + ${C2} − … for ${opx('8')}.`,
            a: '256 and 0',
          },
          { q: `[JEE Main] Evaluate ${SUM('<i>r</i>=0', '12')} ${r} ${Crr} for ${opx('12')}.`, a: '12 · 2<sup>11</sup> = 24576' },
          {
            q: `[JEE Main] Evaluate ${C0} + ${fr(C1, '2')} + ⋯ + ${fr(Cn, '<i>n</i> + 1')} for ${n} = 6.`,
            a: `${fr('2<sup>7</sup> − 1', '7')} = ${fr('127', '7')}`,
          },
          { q: `[JEE Advanced] Evaluate ${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq('6')} for ${n} = 6.`, a: `${C('12', '6')} = 924` },
          {
            q: `[JEE Advanced] Evaluate ${r0} ${r}<sup>2</sup> ${Crr} for ${n} = 5.`,
            a: `${n}(${n} + 1)2<sup><i>n</i>−2</sup> = 5 · 6 · 2<sup>3</sup> = 240`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${C0} + ${C1} + ${C2} + ⋯ + ${Cn} equals:`,
        opts: [
          { label: '2<sup><i>n</i>−1</sup>', nudge: '<b>(a)</b> is the even-only (or odd-only) half-sum.' },
          { label: '2<sup><i>n</i></sup>', nudge: null },
          {
            label: `${n}<sup>2</sup>`,
            nudge: `<b>(c)</b> ${n}<sup>2</sup> has no link to the expansion: putting ${x} = 1 in ${opx(n)} gives 2<sup><i>n</i></sup>.`,
          },
          {
            label: '2<sup><i>n</i>+1</sup>',
            nudge: `<b>(d)</b> 2<sup><i>n</i>+1</sup> is the sum for ${opx('<i>n</i>+1')}: an off-by-one in the exponent.`,
          },
        ],
        correct: 1,
        solution: `Put ${x} = 1 in ${opx(n)}.`,
      },
      {
        t: 'mcq',
        q: `${C1} + 2${C2} + 3${C3} + ⋯ + ${n}${Cn} equals:`,
        opts: [
          { label: '2<sup><i>n</i></sup>', nudge: '<b>(a)</b> ignores the index weights.' },
          { label: `${n} 2<sup><i>n</i></sup>`, nudge: '<b>(b)</b> forgets to drop the exponent by one after differentiating.' },
          { label: `${n} 2<sup><i>n</i>−1</sup>`, nudge: null },
          { label: `(${n} − 1)2<sup><i>n</i></sup>`, nudge: '<b>(d)</b> does not follow from any step of the differentiation.' },
        ],
        correct: 2,
        solution: `Differentiate ${opx(n)}, then set ${x} = 1.`,
      },
      {
        t: 'mcq',
        q: `${Cq('0')} + ${Cq('1')} + ⋯ + ${Cq(n)} equals:`,
        opts: [
          {
            label: '2<sup>2<i>n</i></sup>',
            nudge: `<b>(a)</b> is (∑ ${Crr})<sup>2</sup> = 4<sup><i>n</i></sup>, the square of the sum, not the sum of squares.`,
          },
          { label: C2N, nudge: null },
          { label: '2<sup><i>n</i>−1</sup>', nudge: '<b>(c)</b> is the even-indexed half-sum.' },
          { label: C('2<i>n</i>', '<i>n</i>−1'), nudge: '<b>(d)</b> is the central coefficient’s neighbour.' },
        ],
        correct: 1,
        solution: `Coefficient of ${x}<sup><i>n</i></sup> in ${opx(n)}${opx(n)} = ${opx('2<i>n</i>')}.`,
      },
      {
        t: 'mcq',
        q: `${C0} − ${fr(C1, '2')} + ${fr(C2, '3')} − ⋯ + ${fr(`(−1)<sup><i>n</i></sup>${Cn}`, '<i>n</i> + 1')} equals:`,
        opts: [
          { label: '0', nudge: '<b>(a)</b> confuses it with the alternating coefficient sum.' },
          { label: ALTW, nudge: null },
          { label: INTW, nudge: '<b>(c)</b> is the non-alternating integral.' },
          { label: '2<sup><i>n</i></sup>', nudge: `<b>(d)</b> ignores the ${R1W} weights.` },
        ],
        correct: 1,
        solution: `Integrate ${opx(n)} over [−1, 0] (the alternating-weight version).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Sum of squares ≠ square of sum.</b> ∑ ${Cq(r)} = ${C2N}, not (2<sup><i>n</i></sup>)<sup>2</sup>. The product-then-compare technique is mandatory.`,
          `<b>Forgetting to drop the exponent after differentiating.</b> ${fr('d', 'd<i>x</i>')}${opx(n)} = ${n}${opx('<i>n</i>−1')}, giving ${n} 2<sup><i>n</i>−1</sup> at ${x} = 1: the exponent becomes ${n} − 1.`,
          `<b>Wrong limits of integration.</b> ${INT('0', '1')} gives ${INTW}; the alternating version needs ${INT('−1', '0')} (or ${x} = −1). Mixing them flips the answer.`,
          `<b>Index-shift bookkeeping.</b> After differentiating, the sum runs from ${r} = 1 (the ${r} = 0 term vanishes). Re-check which sum you produced before substituting.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: read the weights, pick the tool.</b> Constant weights ⇒ substitute ${x} = ±1. Weights ${r} (or ${r}<sup>2</sup>) ⇒ differentiate (once or twice). Weights ${R1W} ⇒ integrate. Squared/product coefficients ⇒ multiply two expansions and compare one coefficient. Matching the weight pattern to the operation is most of the work in these problems.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${Crr} = ${nCr}`, note: '' },
          { f: `∑ ${Crr} = 2<sup><i>n</i></sup>; ∑(−1)<sup><i>r</i></sup>${Crr} = 0; ${C0} + ${C2} + ⋯ = ${C1} + ${C3} + ⋯ = 2<sup><i>n</i>−1</sup>.`, note: '' },
          { f: `${r} · ${nCr} = ${n} · ${C('<i>n</i>−1', '<i>r</i>−1')}; ${CR1} = ${fr(C('<i>n</i>+1', '<i>r</i>+1'), '<i>n</i> + 1')}.`, note: '' },
          { f: `∑ ${r}${Crr} = ${n} 2<sup><i>n</i>−1</sup>; ∑ ${r}<sup>2</sup>${Crr} = ${n}(${n} + 1)2<sup><i>n</i>−2</sup>.`, note: '' },
          { f: `∑ ${CR1} = ${INTW}; ∑ ${ALTCR1} = ${ALTW}.`, note: '' },
          {
            f: `∑ ${Cq(r)} = ${C2N}; ∑ ${Crr}${Cs('<i>r</i>+<i>k</i>')} = ${C('2<i>n</i>', '<i>n</i>−<i>k</i>')};<br>Vandermonde ∑ ${C('<i>m</i>', k)}${NB}${C(n, '<i>p</i>−<i>k</i>')} = ${C('<i>m</i>+<i>n</i>', p)}.`,
            note: '',
          },
        ],
        aids: [`The four tools: substitute for constants, differentiate for ${r}, integrate for ${R1W}, multiply-and-compare for squares.`],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 609–613 ────────────────
  {
    n: '05',
    title: 'Binomial Theorem for Any Index and Approximations',
    kalam: 'This topic generalises to any index n (negative or fractional).',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A standard JEE Main/Advanced topic (expansions of (1 ± ${x})<sup>−1</sup>, (1 ± ${x})<sup>−2</sup>, fractional powers, and series-identification problems). <b>Beyond the rationalised CBSE Class 11 core</b>: included here for JEE completeness. If you are sitting boards only, this topic is optional; for JEE it is essential.`,
      },
      {
        t: 'p',
        html: `<b>Scope note:</b> Everything in Topics 01 to 04 needed ${n} to be a positive integer. This topic generalises to <b>any index</b> ${n} (negative or fractional). The price: the series becomes <b>infinite</b> and only valid for |${x}| < 1.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `What could ${opx('1/2')} or ${opx('−3')} possibly “expand” to? There is no last term to stop at: you cannot choose ${r} things from “half a thing.” Yet there is a beautiful continuation: the same shape of expansion keeps going <b>forever</b>, with the combination coefficients replaced by a product pattern that no longer terminates.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> look at the positive-integer expansion’s coefficients written the long way:<br>${nCr} = ${FALL}.<br>For a positive integer ${n}, this product eventually hits the factor (${n} − ${n}) = 0 and every later coefficient vanishes: that is why the series stops at ${r} = ${n}. But if ${n} is, say, −3 or ${HALF}, the product ${n}(${n} − 1) ⋯ <b>never hits zero</b>, so the series never stops. That single observation is the whole generalisation: keep the same coefficient pattern, just don’t expect it to terminate.`,
      },
      {
        t: 'p',
        html: `Because it is now an infinite series, it only <b>converges</b> (adds up to the true value of ${opx(n)}) when |${x}| < 1. For |${x}| > 1 the terms grow without bound and the “expansion” is meaningless (at |${x}| = 1 it depends on ${n}, and school work avoids it). This convergence condition is not a technicality you can skip: using the series for |${x}| > 1 gives nonsense.`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> The any-index expansion of ${opx(n)} is valid <b>only for</b> |${x}| < 1 (and the expansion must be arranged so the smaller quantity plays the role of ${x}). There are no ${nCr} symbols here, because ${nCr} is undefined for non-integer or negative ${n}. To expand ${ab(n)} for general ${n}, first factor out the larger term: ${ab(n)} = <i>a</i><sup><i>n</i></sup> ${BOA}, valid when ${BOAABS} < 1.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'General binomial series (any index <i>n</i>, |<i>x</i>| < 1)',
        main: `${opx(n)} = 1 + ${n}${x} + ${Q2}${x}<sup>2</sup> + ${Q3}${x}<sup>3</sup> + ⋯`,
        legend: [`${n} = any rational (indeed any real) index`, `${x} = the variable (|${x}| < 1)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General term (any index)',
        main: `${TR1} = ${FALL} ${x}<sup><i>r</i></sup>, ${r} = 0, 1, 2, …`,
        legend: [`${n} = any rational (indeed any real) index`, `${x} = the variable (|${x}| < 1)`, `${r} = the (now unbounded) term index`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Key special expansions (all for |<i>x</i>| < 1)',
        main: [
          `${omx('−1')} = 1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup> + ⋯ (geometric series)`,
          `${opx('−1')} = 1 − ${x} + ${x}<sup>2</sup> − ${x}<sup>3</sup> + ⋯`,
          `${omx('−2')} = 1 + 2${x} + 3${x}<sup>2</sup> + 4${x}<sup>3</sup> + ⋯ (general term (${r} + 1)${x}<sup><i>r</i></sup>)`,
          `${opx('−2')} = 1 − 2${x} + 3${x}<sup>2</sup> − 4${x}<sup>3</sup> + ⋯`,
          `${omx('−<i>p</i>')} = ${SUM('<i>r</i>=0', '∞')} ${PR1} ${x}<sup><i>r</i></sup> (${p} ∈ ℕ); general term ${PR1} ${x}<sup><i>r</i></sup>.`,
        ].join('<br>'),
        legend: [`${x} = the variable (|${x}| < 1)`, `${r} = the (now unbounded) term index`, `${p} = a natural number`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'First-order approximation',
        main: `If |${x}| is very small, all terms beyond the linear one are negligible:<br>${opx(n)} ≈ 1 + ${n}${x}.`,
        legend: [`${n} = any rational (indeed any real) index`, `${x} = the variable (|${x}| < 1)`],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${n} is any rational index, ${x} the variable with |${x}| < 1, ${r} the (now unbounded) term index. Pure numbers throughout.`,
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Why the series continues (heuristic derivation).</b> Write the positive-integer general term in falling-factorial form ${FALL2}${x}<sup><i>r</i></sup>. This expression is defined for any real ${n}, not just positive integers. The general binomial theorem asserts that for |${x}| < 1 this same expression, summed over all ${r} ≥ 0, converges to ${opx(n)}. (A full proof uses Taylor’s theorem; the falling-factorial coefficient is precisely ${fr('1', '<i>r</i>!')} ${fr('d<sup><i>r</i></sup>', `d${x}<sup><i>r</i></sup>`)}(1${NB}+${NB}<i>x</i>)<sup>${n}</sup>|<sub><i>x</i>=0</sub>.) The termination for positive integer ${n} is the special case where the factor (${n} − ${n}) kills all terms past ${r} = ${n}. ■`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: expanding ${ab(n)} for general ${n}.</b><br>1. Factor out the dominant term so the bracket has leading 1: ${ab(n)} = <i>a</i><sup><i>n</i></sup> ${BOA} (choose <i>a</i> as the larger so ${BOAABS} < 1).<br>2. Apply the any-index series to ${BOA}.<br>3. Multiply back by <i>a</i><sup><i>n</i></sup>.`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: identifying a numeric series as a binomial expansion.</b> Given a series of numbers, match it to (1 + ${y})<sup><i>n</i></sup> = 1 + ${n}${y} + ${Q2Y}${y}<sup>2</sup> + ⋯:<br>• The first term is 1 (factor out if not).<br>• The <b>second</b> term gives ${n}${y}.<br>• The <b>third</b> term gives ${Q2Y}${y}<sup>2</sup>. Form the ratio of these two equations to solve for ${n} and ${y} simultaneously, then the series sums to (1 + ${y})<sup><i>n</i></sup>.`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: approximation.</b> For small |${x}|, truncate after the linear term: ${opx(n)} ≈ 1 + ${n}${x}. Keep the quadratic term ${Q2H}${x}<sup>2</sup> if higher accuracy is required.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'Foundation Level',
        q: `Write the first four terms of ${opx('−2')} and state the validity condition.`,
        steps: [
          `Using the general series with ${n} = −2:<br>${opx('−2')} = 1 + (−2)${x}<br>+ ${fr('(−2)(−3)', '2!')}${x}<sup>2</sup> + ${fr('(−2)(−3)(−4)', '3!')}${x}<sup>3</sup> + ⋯<br>= 1 − 2${x} + 3${x}<sup>2</sup> − 4${x}<sup>3</sup> + ⋯`,
        ],
        ans: `${opx('−2')} = 1 − 2${x} + 3${x}<sup>2</sup> − 4${x}<sup>3</sup> + ⋯ , |${x}| < 1.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the coefficient of ${x}<sup>4</sup> in the expansion of (1 − 2${x})<sup>−3</sup>, |${x}| < ${HALF}.`,
        steps: [
          `Use (1 − ${y})<sup>−<i>p</i></sup> = ∑ ${PR1} ${y}<sup><i>r</i></sup> with ${p} = 3, ${y} = 2${x}. The coefficient of ${y}<sup>4</sup> is ${C('3+4−1', '4')} = ${C('6', '4')} = 15, and ${y}<sup>4</sup> = (2${x})<sup>4</sup> = 16${x}<sup>4</sup>:<br>coefficient of ${x}<sup>4</sup> = ${C('6', '4')} · 2<sup>4</sup><br>= 15 · 16 = 240.`,
          `<b>The trap:</b> writing ${C('−3', '4')} (undefined!) or forgetting that ${y} = 2${x} contributes the factor 2<sup>4</sup>. For negative integer powers, switch to the clean ${PR1} form.`,
        ],
        ans: '240',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: 'Use the binomial approximation to estimate (255)<sup>1/4</sup>.',
        steps: [
          `Write 255 = 256 − 1 = 256 (1 − ${fr('1', '256')}), and note 256 = 4<sup>4</sup>:<br>(255)<sup>1/4</sup> = (4<sup>4</sup>)<sup>1/4</sup> (1 − ${fr('1', '256')})<sup>1/4</sup><br>= 4 (1 − ${fr('1', '256')})<sup>1/4</sup>.`,
          `Since ${fr('1', '256')} is tiny, use ${opx(n)} ≈ 1 + ${n}${x} with ${n} = ${fr('1', '4')}, ${x} = −${fr('1', '256')}:<br>≈ 4 (1 − ${fr('1', '4')} · ${fr('1', '256')})<br>= 4 − ${fr('4', '1024')}<br>= 4 − ${fr('1', '256')} ≈ 3.99609.`,
        ],
        ans: '(255)<sup>1/4</sup> ≈ 3.9961',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the sum of the infinite series 1 + ${fr('3', '4')} + ${fr('3 · 5', '4 · 8')} + ${fr('3 · 5 · 7', '4 · 8 · 12')} + ⋯`,
        steps: [
          `Match to (1 + ${y})<sup><i>n</i></sup> = 1 + ${n}${y} + ${Q2}${y}<sup>2</sup> + ⋯.<br>• Second term: ${n}${y} = ${fr('3', '4')}.<br>• Third term: ${Q2}${y}<sup>2</sup> = ${fr('3 · 5', '4 · 8')} = ${fr('15', '32')}.`,
          `Divide the third equation by the square of the second to eliminate scaling:<br>${fr(`${Q2H}${y}<sup>2</sup>`, `(${n}${y})<sup>2</sup>`)} = ${fr('<i>n</i> − 1', '2<i>n</i>')}<br><br>= ${fr(fr('15', '32'), `(${fr('3', '4')})<sup>2</sup>`)}<br><br>= ${fr(fr('15', '32'), fr('9', '16'))}<br><br>= ${fr('15', '32')} · ${fr('16', '9')} = ${fr('5', '6')}.`,
          `So ${fr('<i>n</i> − 1', '2<i>n</i>')} = ${fr('5', '6')}<br>⇒ 6(${n} − 1) = 10${n}<br>⇒ −6 = 4${n}<br>⇒ ${n} = −${fr('3', '2')}.<br>Then from ${n}${y} = ${fr('3', '4')}: −${fr('3', '2')}${y} = ${fr('3', '4')} ⇒ ${y} = −${HALF}. The series sums to<br>(1 + ${y})<sup><i>n</i></sup> = (1 − ${HALF})<sup>−3/2</sup> = (${HALF})<sup>−3/2</sup><br>= 2<sup>3/2</sup>.`,
        ],
        ans: '2√2',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[Foundation] Write the first four terms of ${omx('−1')} and of ${opx('−1')}, stating validity.`,
            a: `1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup> + ⋯ and 1 − ${x} + ${x}<sup>2</sup> − ${x}<sup>3</sup> + ⋯; both |${x}| < 1`,
          },
          { q: `[JEE Main] Find the coefficient of ${x}<sup>3</sup> in (1 − 3${x})<sup>−2</sup>.`, a: `${C('4', '3')} · 3<sup>3</sup> = 4 · 27 = 108` },
          {
            q: '[JEE Main] Approximate (1.02)<sup>8</sup> to two decimal places using the first three terms of the binomial expansion.',
            a: '≈ 1 + 8(0.02) + 28(0.02)<sup>2</sup> = 1.1712 ≈ 1.17 (to 2 d.p.)',
          },
          { q: `[JEE Advanced] Find the coefficient of ${x}<sup><i>n</i></sup> in the expansion of ${omx('−5')}.`, a: C('<i>n</i>+4', '4') },
          {
            q: `[JEE Advanced] Find the coefficient of ${x}<sup>4</sup> in the expansion of ${fr('1', `(1 − ${x})(1 − 2${x})`)} (for |${x}| < ${HALF}).`,
            a: `31 (partial fractions: ${fr('1', `(1−${x})(1−2${x})`)} = ${fr('−1', `1−${x}`)} + ${fr('2', `1−2${x}`)}, so coeff of ${x}<sup>4</sup> is −1 + 2 · 2<sup>4</sup> = 31)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The expansion of ${opx(n)} for non-integer ${n} is valid only when:`,
        opts: [
          { label: `${x} > 0`, nudge: `<b>(a)</b> sign of ${x} is irrelevant; magnitude matters.` },
          { label: `|${x}| < 1`, nudge: null },
          { label: `${n} > 0`, nudge: `<b>(c)</b> any-index includes negative ${n}.` },
          { label: 'always', nudge: `<b>(d)</b> false: the series diverges for |${x}| > 1.` },
        ],
        correct: 1,
        solution: 'The infinite series converges only in this range.',
      },
      {
        t: 'mcq',
        q: `The coefficient of ${x}<sup><i>r</i></sup> in ${omx('−1')} is:`,
        opts: [
          {
            label: r,
            nudge: `<b>(a)</b> ${r} is the coefficient of ${x}<sup><i>r</i>−1</sup> in ${omx('−2')}, one place out; in ${omx('−1')} every coefficient is 1.`,
          },
          { label: '1', nudge: null },
          { label: '(−1)<sup><i>r</i></sup>', nudge: `<b>(c)</b> belongs to ${opx('−1')}.` },
          { label: `${r} + 1`, nudge: `<b>(d)</b> ${r} + 1 is the coefficient of ${x}<sup><i>r</i></sup> in ${omx('−2')}, not in ${omx('−1')}.` },
        ],
        correct: 1,
        solution: `${omx('−1')} = 1 + ${x} + ${x}<sup>2</sup> + ⋯, all coefficients 1.`,
      },
      {
        t: 'mcq',
        q: `Using ${opx(n)} ≈ 1 + ${n}${x}, the value of (0.998)<sup>−1</sup> is approximately:`,
        opts: [
          { label: '0.998', nudge: '<b>(a)</b> is the base itself.' },
          { label: '1.002', nudge: null },
          {
            label: '0.502',
            nudge: `<b>(c)</b> 0.502 is less than 1, but the reciprocal of a number just below 1 is just above 1: with ${x} = −0.002, 1 + ${n}${x} = 1 + (−1)(−0.002) = 1.002.`,
          },
          {
            label: '1.998',
            nudge: `<b>(d)</b> 1.998 is 1 + 0.998: it takes the whole base as ${x}; write 0.998 = 1 − 0.002, so ${x} = −0.002.`,
          },
        ],
        correct: 1,
        solution: '(1 − 0.002)<sup>−1</sup> ≈ 1 + (−1)(−0.002) = 1.002.',
      },
      {
        t: 'mcq',
        q: `Which expansion has general term (${r} + 1)${x}<sup><i>r</i></sup>?`,
        opts: [
          { label: opx('−1'), nudge: `<b>(a)</b> ${opx('−1')} has coefficients (−1)<sup><i>r</i></sup>, that is ±1.` },
          { label: omx('−1'), nudge: `<b>(b)</b> ${omx('−1')} has every coefficient 1.` },
          { label: omx('−2'), nudge: null },
          { label: opx('2'), nudge: '<b>(d)</b> is a finite 3-term expansion.' },
        ],
        correct: 2,
        solution: `Its terms are 1 + 2${x} + 3${x}<sup>2</sup> + ⋯, i.e. coefficient ${r} + 1.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Ignoring |${x}| < 1.</b> The any-index series is only valid for |${x}| < 1; applying it outside is meaningless. Always arrange the binomial so the smaller part is the “${x}.”`,
          `<b>Writing ${nCr} for non-integer ${n}.</b> ${nCr} is undefined when ${n} is negative or fractional. Use the falling-factorial general term, or the ${PR1} form for ${omx('−<i>p</i>')}.`,
          `<b>Forgetting to factor out the leading term.</b> For ${ab(n)}, factor as <i>a</i><sup><i>n</i></sup>${BOA} first; expanding ${ab(n)} directly with the series is wrong unless the leading term is 1.`,
          `<b>Over-truncating approximations.</b> 1 + ${n}${x} is first-order only; if the question demands more precision, keep the ${Q2H}${x}<sup>2</sup> term.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: series identification.</b> When asked to sum a numeric series, match first three terms to 1, ${n}${y}, ${Q2H}${y}<sup>2</sup> and divide the third by the square of the second: this single ratio gives ${fr('<i>n</i>−1', '2<i>n</i>')}, from which ${n} (then ${y}) falls out immediately.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Series', note: `${opx(n)} = 1 + ${n}${x} + ${Q2}${x}<sup>2</sup> + ⋯, infinite, no ${nCr}; valid for |${x}| < 1.` },
          {
            f: 'Must-knows',
            note: `${omx('−1')} = ∑ ${x}<sup><i>r</i></sup>; ${opx('−1')} = ∑(−${x})<sup><i>r</i></sup>;<br>${omx('−2')} = ∑(${r} + 1)${x}<sup><i>r</i></sup>; ${omx('−<i>p</i>')} = ∑ ${PR1}${x}<sup><i>r</i></sup>.`,
          },
          { f: 'Approximation', note: `small |${x}| ⇒ ${opx(n)} ≈ 1 + ${n}${x}.` },
          { f: `General ${ab(n)}`, note: `factor as <i>a</i><sup><i>n</i></sup>${BOA}, need ${BOAABS} < 1.` },
          { f: 'Sum-the-series', note: `match to 1, ${n}${y}, ${Q2H}${y}<sup>2</sup>; ratio ${fr('<i>n</i>−1', '2<i>n</i>')} gives ${n}, then ${y}.` },
        ],
        aids: [`“Non-integer power → infinite series, only if |${x}| < 1, and never write ${nCr}.”`],
      },
    ],
  },
];
