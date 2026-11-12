import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 06–07 (pp. 614–623) and Topic 08, the supplement’s
 * Subtopic 08 (pp. 645–657), of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word: the book’s Subtopics 06 Applications
 * (Divisibility, Remainders, Last Digits & Integral/Fractional Parts),
 * 07 The Multinomial Theorem and 08 Multisection of Binomial Series: Roots of
 * Unity and Complex Substitution. Each topic opens with its "Exam Relevance:"
 * box as a part of its own, then is split at its Sections 1 to 8; the "Cheat
 * Sheet Box" is the part "Cheat sheet". Figure 7.5 (caption p. 646, drawn
 * p. 647) stands at the end of Topic 08’s Concept intuition, where its caption
 * is printed. No unnumbered drawings. ⁿCᵣ with an italic C, as the page sets
 * it; Cᵣ is the supplement’s shorthand for ⁿCᵣ. Every fraction is stacked
 * (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const Cs = (s: string) => `<i>C</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const SUMR = (lo: string) => `∑<sub>${lo}</sub>`;
const W = (s: string) => `<i>ω</i><sub><i>k</i></sub><sup>${s}</sup>`;

const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const n = '<i>n</i>';
const r = '<i>r</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const z = '<i>z</i>';
const K = '<i>K</i>';
const I = '<i>I</i>';
const f = '<i>f</i>';
const fp = '<i>f</i>′';
const ii = '<i>i</i>';
const w = '<i>ω</i>';
const WK = '<i>ω</i><sub><i>k</i></sub>';
const NB = ' ';

const nCr = C(n, r);
const SQ = `√${q}`;
const PLUS = `(${p} + ${SQ})<sup><i>n</i></sup>`;
const MINUS = `(${p} − ${SQ})<sup><i>n</i></sup>`;
const NTERMS = C('<i>n</i>+<i>k</i>−1', '<i>k</i>−1');
const x1 = '<i>x</i><sub>1</sub>';
const x2 = '<i>x</i><sub>2</sub>';
const xk = '<i>x</i><sub><i>k</i></sub>';
const xi = '<i>x</i><sub><i>i</i></sub>';
const n1 = '<i>n</i><sub>1</sub>';
const n2 = '<i>n</i><sub>2</sub>';
const n3 = '<i>n</i><sub>3</sub>';
const nk = '<i>n</i><sub><i>k</i></sub>';
const ni = '<i>n</i><sub><i>i</i></sub>';
const XSUM = `(${x1} + ⋯ + ${xk})<sup><i>n</i></sup>`;
const MONO = `${x1}<sup><i>n</i>₁</sup> ⋯ ${xk}<sup><i>n</i>ₖ</sup>`;
const MC = fr(`${n}!`, `${n1}! ${n2}! ⋯ ${nk}!`);
const MCS = fr(`${n}!`, `${n1}! ⋯ ${nk}!`);
const ABC = fr(`${n}!`, `${a}!${b}!${c}!`);
const GEOM = fr(`1 − ${x}<sup><i>t</i>+1</sup>`, `1 − ${x}`);
const C0 = Cs('0');
const C1 = Cs('1');
const C2 = Cs('2');
const C3 = Cs('3');
const C4 = Cs('4');
const C5 = Cs('5');
const C6 = Cs('6');
const C7 = Cs('7');
const C8 = Cs('8');
const C9 = Cs('9');
const Cr = Cs(r);
const OPI = `(1 + ${ii})<sup><i>n</i></sup>`;
const OMI = `(1 − ${ii})<sup><i>n</i></sup>`;
const EP = (s: string) => `<i>e</i><sup>${s}</sup>`;
const NPI3 = fr('<i>n</i>π', '3');
const NPI4 = fr('<i>n</i>π', '4');
const P3 = (s: string) => `${fr('1', '3')}[2<sup><i>n</i></sup> + 2 cos ${s}]`;
const P4 = `${fr('1', '4')}[2<sup><i>n</i></sup> + 2<sup>(<i>n</i>+2)/2</sup> cos ${fr('(<i>n</i> − 2<i>a</i>)π', '4')}]`;
const P40 = `${fr('1', '2')}[2<sup><i>n</i>−1</sup> + 2<sup><i>n</i>/2</sup> cos ${NPI4}]`;
const FILTER = `${fr('1', k)} ${SUM('<i>j</i>=0', '<i>k</i>−1')} ${W('<i>jm</i>')}`;
const MSEC = `${fr('1', k)} ${SUM('<i>j</i>=0', '<i>k</i>−1')} ${W('−<i>ja</i>')}(1 + ${W('<i>j</i>')})<sup><i>n</i></sup>`;
const CR_LEG = `${Cr} = the binomial coefficient ${nCr}`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 614–618 ────────────────
  {
    n: '06',
    title: 'Applications: Divisibility, Remainders, Last Digits & Integral/Fractional Parts',
    kalam: 'The trick is always the same: rewrite the base so it is almost a multiple of the divisor.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A high-yield JEE application class. “Remainder when ${a}<sup><i>n</i></sup> is divided by ${m},” “last two digits of ${a}<sup><i>n</i></sup>,” and integral/fractional-part problems on ${PLUS} recur in JEE Main and Advanced ${ESTIMATE}. Beyond rationalised CBSE core, but a reliable source of marks for competitive aspirants.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Why would a chapter on expansions help you find the remainder of 7<sup>103</sup> ÷ 25, a question with no ${x} in sight? Because the binomial theorem lets you <b>split a number into “a big clean piece plus a tiny piece.”</b>`,
      },
      {
        t: 'p',
        html: 'The trick is always the same: rewrite the base so it is almost a multiple of the divisor. To handle 7<sup>103</sup> mod 25, notice 7<sup>2</sup> = 49 = 50 − 1, and 50 is a multiple of 25. So 7<sup>103</sup> = 7 · (50 − 1)<sup>51</sup>, and when you expand (50 − 1)<sup>51</sup> by the binomial theorem, <b>every term containing</b> 50 <b>is divisible by</b> 25: they all vanish mod 25, leaving only the last term (−1)<sup>51</sup> to determine the remainder.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> a binomial expansion of (<i>km</i> ± 1)<sup><i>n</i></sup> is a list of terms, and all but the very last carry a factor of ${m} (often ${m}<sup>2</sup> or higher). Modulo ${m} those terms are invisible (modulo ${m}<sup>2</sup>, all but the last two are). So divisibility, remainder, and last-digit questions all reduce to “which few terms survive when I throw away everything divisible by the modulus?”, usually just one or two terms.`,
      },
      {
        t: 'p',
        html: 'The integral/fractional-part problems use a sister idea: a number like (7 + 4√3)<sup><i>n</i></sup> is irrational, but if you <b>add its conjugate</b> (7 − 4√3)<sup><i>n</i></sup>, the irrational parts cancel and you get a whole number. Since the conjugate is a tiny positive number (less than 1), it must equal the fractional part’s complement, and that pins down both the integer and fractional parts exactly.',
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> The base-splitting works whenever you can write the base as (multiple of the modulus) ± (something small, ideally ±1). The conjugate trick for fractional parts requires that the conjugate ${MINUS} genuinely lies strictly between 0 and 1: always verify 0 < ${p} − ${SQ} < 1 before using it.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `For divisibility/remainder/last-digit problems, write the base as ${a} = ${K} ± 1 where ${K} is a multiple of the divisor (or its square), then`,
      },
      {
        t: 'formula',
        kicker: 'Base-splitting identity',
        main: `(${K} ± 1)<sup><i>n</i></sup> = ${SUM('<i>r</i>=0', n)} ${nCr} ${K}<sup><i>r</i></sup>(±1)<sup><i>n</i>−<i>r</i></sup>.`,
        legend: [
          `${K} = a multiple of the divisor (or of its square)`,
          `${n} = the power (${n} ∈ ℕ)`,
          `${r} = the term index`,
        ],
        note: null,
      },
      { t: 'p', html: `Modulo ${K} (or ${K}<sup>2</sup>), only the lowest-power terms in ${K} survive.` },
      {
        t: 'formula',
        kicker: `Useful consequences (mod ${K}<sup>2</sup> and divisibility)`,
        main: `(1 + ${K})<sup><i>n</i></sup> = 1 + <i>nK</i> + ${C(n, '2')} ${K}<sup>2</sup> + ⋯,<br>so (1 + ${K})<sup><i>n</i></sup> ≡ 1 + <i>nK</i> (mod ${K}<sup>2</sup>).<br>${a}<sup><i>n</i></sup> − 1 is divisible by (${a} − 1);<br>${a}<sup><i>n</i></sup> − ${b}<sup><i>n</i></sup> is divisible by (${a} − ${b}).`,
        legend: [`${K} = an integer`, `${n} = the power (${n} ∈ ℕ)`, `${a}, ${b} = integers`],
        note: null,
      },
      {
        t: 'p',
        html: `Let ${PLUS} = ${I} + ${f} with ${I} ∈ ℤ and 0 ≤ ${f} < 1. Define the conjugate ${fp} = ${MINUS} with 0 < ${fp} < 1. Then ${I} + ${f} + ${fp} is an <b>integer</b>, forcing ${fp} = 1 − ${f}, and`,
      },
      {
        t: 'formula',
        kicker: 'Integral & fractional part (conjugate trick)',
        main: `${fp} = 1 − ${f} (when 0 < ${p} − √${q} < 1),<br>(${I} + ${f}) ${fp} = ${PLUS}${MINUS}<br>= (${p}<sup>2</sup> − ${q})<sup><i>n</i></sup>.`,
        legend: [
          `${I} = the integer part`,
          `${f} = the fractional part (0 ≤ ${f} < 1)`,
          `${fp} = the conjugate ${MINUS}`,
          `${p}, ${q} = positive integers (${q} not a perfect square)`,
          `${n} = the power (${n} ∈ ℕ)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${n} ∈ ℕ; ${K}, ${a}, ${b}, ${p}, ${q} are integers; ${I} integer part, ${f} fractional part. Pure numbers.`,
      },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      { t: 'p', html: `<b>Standard technique: remainder of ${a}<sup><i>n</i></sup> mod ${m}.</b>` },
      {
        t: 'p',
        html: `1. Express ${a} (or a convenient power of ${a}) as ${K} ± 1 with ${K} a multiple of ${m} (or of ${m}<sup>2</sup> for last-two-digit work).<br>2. Expand (${K} ± 1)<sup><i>n</i></sup> by the binomial theorem.<br>3. Reduce mod ${m}: drop every term containing ${K} (they are ≡ 0), keeping only the surviving low-order terms.<br>4. The leftover is the remainder (adjust to the range 0 to ${m} − 1).`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: last two digits.</b> “Last two digits” = value mod 100. Choose ${K} a multiple of 100 (or arrange so ${K}<sup>2</sup> is a multiple of 100), expand, and keep terms up to the one that first becomes divisible by 100.`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: divisibility proof.</b> To show ${m} ∣ (expression), expand the relevant power as (${K} ± 1)<sup><i>n</i></sup> and show that after cancellation every surviving term carries the factor ${m}.`,
      },
      {
        t: 'proc',
        title: 'Standard technique: integral/fractional part',
        steps: [
          `Set ${I} + ${f} = ${PLUS} and ${fp} = ${MINUS}.`,
          `Verify 0 < ${fp} < 1 (check 0 < ${p} − ${SQ} < 1).`,
          `Add: odd powers of ${SQ} cancel for every ${n}, so ${I} + ${f} + ${fp} is an integer; hence ${fp} = 1 − ${f}. (If ${fp} = (${SQ} − ${p})<sup><i>n</i></sup> with ${n} odd, subtract: ${fp} = ${f}).`,
          `Use (${I} + ${f})${fp} = (${p}<sup>2</sup> − ${q})<sup><i>n</i></sup> to evaluate products, or solve for ${I}.${NB}■`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Show that 9<sup><i>n</i></sup> − 1 is divisible by 8 for every positive integer ${n}.`,
        steps: [
          `Write 9 = 8 + 1:<br>9<sup><i>n</i></sup> = (1 + 8)<sup><i>n</i></sup><br>= 1 + ${C(n, '1')} 8 + ${C(n, '2')} 8<sup>2</sup> + ⋯ + 8<sup><i>n</i></sup>.`,
          `Subtract 1:<br>9<sup><i>n</i></sup> − 1 = ${C(n, '1')} 8 + ${C(n, '2')} 8<sup>2</sup> + ⋯ + 8<sup><i>n</i></sup><br>= 8 (${C(n, '1')} + ${C(n, '2')} 8 + ⋯).`,
          `Every term has a factor of 8, so 8 ∣ (9<sup><i>n</i></sup> − 1).${NB}■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: 'Find the remainder when 7<sup>103</sup> is divided by 25.',
        steps: [
          'Note 7<sup>2</sup> = 49 = 50 − 1 and 50 is a multiple of 25. So<br>7<sup>103</sup> = 7 · 7<sup>102</sup> = 7 (7<sup>2</sup>)<sup>51</sup><br>= 7 (50 − 1)<sup>51</sup>.',
          'Expanding (50 − 1)<sup>51</sup>, every term except the last contains a factor of 50 (hence of 25):<br>(50 − 1)<sup>51</sup> ≡ (−1)<sup>51</sup> = −1 (mod 25).',
          'Therefore 7<sup>103</sup> ≡ 7 · (−1) = −7 ≡ 18 (mod 25).',
          '<b>The trap:</b> trying to compute powers of 7 directly. The fast move is spotting 7<sup>2</sup> = 50 − 1 so the modulus appears inside the bracket.',
        ],
        ans: 'Remainder = 18.',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: 'Find the last two digits of 3<sup>400</sup>.',
        steps: [
          `Last two digits = value mod 100. Note 3<sup>4</sup> = 81 = 80 + 1, so<br>3<sup>400</sup> = (3<sup>4</sup>)<sup>100</sup> = 81<sup>100</sup> = (80 + 1)<sup>100</sup>:<br>(80 + 1)<sup>100</sup> = 1 + ${C('100', '1')} 80 + ${C('100', '2')} 80<sup>2</sup> + ⋯`,
          `Modulo 100: the term ${C('100', '1')} · 80 = 100 · 80 = 8000 ≡ 0, and 80<sup>2</sup> = 6400 ≡ 0, so every term from ${r} ≥ 1 vanishes mod 100. Only the first term survives:<br>3<sup>400</sup> ≡ 1 (mod 100).`,
        ],
        ans: 'Last two digits = 01.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If (7 + 4√3)<sup><i>n</i></sup> = ${I} + ${f}, where ${I} is an integer and 0 ≤ ${f} < 1, prove that (${I} + ${f})(1 − ${f}) = 1.`,
        steps: [
          `Let ${fp} = (7 − 4√3)<sup><i>n</i></sup>. Since 7 − 4√3 ≈ 7 − 6.928 = 0.072, we have 0 < ${fp} < 1.`,
          `Adding the two conjugate expansions, every term containing an <b>odd</b> power of √3 cancels, leaving an integer:<br>(7 + 4√3)<sup><i>n</i></sup> + (7 − 4√3)<sup><i>n</i></sup><br>= 2(${C(n, '0')} 7<sup><i>n</i></sup> + ${C(n, '2')} 7<sup><i>n</i>−2</sup>(48) + ⋯)<br>= an integer.`,
          `So ${I} + ${f} + ${fp} is an integer. Since 0 ≤ ${f} < 1 and 0 < ${fp} < 1, their sum ${f} + ${fp} lies in (0, 2) and must be the integer 1. Hence ${fp} = 1 − ${f}. Finally,<br>(${I} + ${f})(1 − ${f}) = (${I} + ${f}) ${fp}<br>= (7 + 4√3)<sup><i>n</i></sup>(7 − 4√3)<sup><i>n</i></sup><br>= (49 − 48)<sup><i>n</i></sup> = 1<sup><i>n</i></sup> = 1.`,
        ],
        ans: `(${I} + ${f})(1 − ${f}) = 1.${NB}■`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE / School] Show that 6<sup><i>n</i></sup> − 1 is divisible by 5 for all ${n} ∈ ℕ.`,
            a: `6 = 5 + 1 ⇒ 6<sup><i>n</i></sup> − 1 = (5 + 1)<sup><i>n</i></sup> − 1 = ${C(n, '1')} 5 + ${C(n, '2')} 5<sup>2</sup> + ⋯ + 5<sup><i>n</i></sup>, a sum of terms each divisible by 5.`,
          },
          {
            q: '[JEE Main] Find the remainder when 2<sup>50</sup> is divided by 7.',
            a: '4 (since 2<sup>3</sup> = 8 ≡ 1, 2<sup>50</sup> = 2<sup>48</sup> · 2<sup>2</sup> ≡ 1 · 4 = 4): <b>remainder 4</b>',
          },
          { q: '[JEE Main] Find the last digit of 7<sup>300</sup>.', a: '1 (7<sup>4</sup> ≡ 1 mod 10, 300 = 4 · 75)' },
          {
            q: '[JEE Advanced] Find the remainder when 15<sup>40</sup> is divided by 11.',
            a: '1 (15 ≡ 4, 4<sup>40</sup> = (4<sup>5</sup>)<sup>8</sup>; 4<sup>5</sup> = 1024 ≡ 1 mod 11)',
          },
          {
            q: `[JEE Advanced] If (5 + 2√6)<sup><i>n</i></sup> = ${I} + ${f} with 0 ≤ ${f} < 1, find the value of (${I} + ${f})(1 − ${f}).`,
            a: '1 ((5 + 2√6)(5 − 2√6) = 25 − 24 = 1)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'To find 8<sup>20</sup> mod 7, the best split of the base is:',
        opts: [
          { label: '8 = 7 + 1', nudge: null },
          { label: '8 = 2<sup>3</sup>', nudge: '<b>(b)</b>, <b>(d)</b> don’t expose the modulus 7.' },
          { label: '8 = 9 − 1', nudge: '<b>(c)</b> uses 9, unrelated to mod 7.' },
          { label: '8 = 4 · 2', nudge: '<b>(b)</b>, <b>(d)</b> don’t expose the modulus 7.' },
        ],
        correct: 0,
        solution: 'Then 8<sup>20</sup> = (7 + 1)<sup>20</sup> ≡ 1 (mod 7).',
      },
      {
        t: 'mcq',
        q: 'The remainder when (101)<sup>50</sup> is divided by 100 is:',
        opts: [
          { label: '0', nudge: '<b>(a)</b> 0 drops the last term: every term of (100 + 1)<sup>50</sup> except 1 carries 100, but that 1 survives.' },
          { label: '1', nudge: null },
          { label: '50', nudge: `<b>(c)</b> misreads ${C('50', '1')} · 100 mod 100.` },
          { label: '51', nudge: `<b>(d)</b> 51 is 1 + ${C('50', '1')}, forgetting that the term is ${C('50', '1')} · 100 = 5000, a multiple of 100.` },
        ],
        correct: 1,
        solution: `(100 + 1)<sup>50</sup> = 1 + ${C('50', '1')} 100 + ⋯ ≡ 1 (mod 100) (all other terms carry 100).`,
      },
      {
        t: 'mcq',
        q: `For (3 + √8)<sup><i>n</i></sup> = ${I} + ${f}, the conjugate used is:`,
        opts: [
          { label: '(3 − √8)<sup><i>n</i></sup>', nudge: null },
          { label: '(√8 − 3)<sup><i>n</i></sup>', nudge: `<b>(b)</b> is negative for odd ${n}.` },
          { label: '(3 + √8)<sup><i>n</i></sup>', nudge: `<b>(c)</b> is ${I} + ${f} itself.` },
          { label: '(8 − 3)<sup><i>n</i></sup>', nudge: '<b>(d)</b> is unrelated.' },
        ],
        correct: 0,
        solution: `It satisfies 0 < 3 − √8 < 1 (√8 ≈ 2.83), so it equals 1 − ${f}.`,
      },
      {
        t: 'mcq',
        q: `${a}<sup><i>n</i></sup> − ${b}<sup><i>n</i></sup> is always divisible by:`,
        opts: [
          { label: `${a} + ${b}`, nudge: `<b>(a)</b> ${a} + ${b} divides ${a}<sup><i>n</i></sup> − ${b}<sup><i>n</i></sup> for every even ${n}, but not always for odd ${n}: 2<sup>3</sup> − 1<sup>3</sup> = 7 is not divisible by 2 + 1 = 3.` },
          { label: `${a} − ${b}`, nudge: null },
          { label: '<i>ab</i>', nudge: '<b>(c)</b> <i>ab</i> need not divide it: 2<sup>2</sup> − 1<sup>2</sup> = 3 is not divisible by <i>ab</i> = 2.' },
          { label: n, nudge: `<b>(d)</b> ${n} need not divide it: 2<sup>2</sup> − 1<sup>2</sup> = 3 is not divisible by ${n} = 2.` },
        ],
        correct: 1,
        solution: `Writing ${a} = ${b} + (${a} − ${b}) and expanding shows every surviving term carries (${a} − ${b}).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Choosing the wrong split.</b> Match the bracket to the modulus: for mod 25 use a multiple of 25 (like 50); for last-two-digits use a multiple of 100. A split that doesn’t expose the modulus wastes the method.',
          `<b>Stopping reduction too early.</b> Keep reducing until only modulus-free terms remain; a lingering ${K}-term means more cancellation is available.`,
          `<b>Negative remainders.</b> −7 mod 25 is 18, not −7. Always shift into 0 to ${m} − 1.`,
          `<b>Skipping the 0 < ${fp} < 1 check.</b> The conjugate trick only works if the conjugate truly lies in (0, 1): verify 0 < ${p} − ${SQ} < 1 first.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Find the smallest power of the base that is ≡ ±1 modulo the divisor; that power sets a short cycle, and the exponent reduced modulo that cycle gives the answer fast. (E.g. 2<sup>3</sup> ≡ 1 mod 7, so powers of 2 cycle with period 3 mod 7.)',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Core move',
            note: `write base = ${K} ± 1 with ${K} a multiple of the modulus; expand (${K} ± 1)<sup><i>n</i></sup>; drop all terms containing ${K}.`,
          },
          { f: `(1 + ${K})<sup><i>n</i></sup> ≡ 1 + <i>nK</i> (mod ${K}<sup>2</sup>).`, note: '' },
          { f: 'Last two digits', note: '= value mod 100; <b>last digit</b> = mod 10.' },
          { f: `(${a} − 1) ∣ (${a}<sup><i>n</i></sup> − 1); (${a} − ${b}) ∣ (${a}<sup><i>n</i></sup> − ${b}<sup><i>n</i></sup>).`, note: '' },
          {
            f: 'Integral/fractional part',
            note: `${I} + ${f} = ${PLUS}, ${fp} = ${MINUS} ∈ (0, 1), ${fp} = 1 − ${f}, and (${I} + ${f})${fp} = (${p}<sup>2</sup> − ${q})<sup><i>n</i></sup>.`,
          },
        ],
        aids: ['“Make the divisor appear inside the bracket, then everything with it disappears.”'],
      },
    ],
  },

  // ──────────────── Topic 07 · pp. 619–623 ────────────────
  {
    n: '07',
    title: 'The Multinomial Theorem',
    kalam: 'The same “count the ways to distribute the n choices” logic carries straight over.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A JEE Advanced extension of the binomial theorem to three or more terms. Appears as “number of terms in (${a} + ${b} + ${c})<sup><i>n</i></sup>” and “coefficient of ${x}<sup><i>a</i></sup>${y}<sup><i>b</i></sup>${z}<sup><i>c</i></sup>” questions, and underpins counting problems. Beyond the CBSE/NCERT core; include if you are targeting JEE Advanced.`,
      },
      {
        t: 'p',
        html: `<b>Scope note:</b> This generalises Topic 01’s (${a} + ${b})<sup><i>n</i></sup> to (${x1} + ${x2} + ⋯ + ${xk})<sup><i>n</i></sup>: two parts become ${k} parts. The same “count the ways to distribute the ${n} choices” logic carries straight over.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `The binomial theorem answered: multiply (${a} + ${b}) by itself ${n} times, what comes out? Each of the ${n} brackets donated either an ${a} or a ${b}, and we counted the ways. The <b>multinomial theorem</b> asks the identical question when each bracket offers more than two choices: in (${a} + ${b} + ${c})<sup><i>n</i></sup>, each of the ${n} brackets donates an ${a}, a ${b}, <b>or</b> a ${c}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> a single term of (${a} + ${b} + ${c})<sup><i>n</i></sup> looks like ${a}<sup><i>n</i>₁</sup>${b}<sup><i>n</i>₂</sup>${c}<sup><i>n</i>₃</sup>, where ${n1} brackets gave ${a}, ${n2} gave ${b}, ${n3} gave ${c}, and of course ${n1} + ${n2} + ${n3} = ${n} (every bracket donated exactly once). The coefficient counts <b>how many ways</b> the ${n} brackets can be split into those three groups, which is the multinomial count ${fr(`${n}!`, `${n1}! ${n2}! ${n3}!`)} (the same arrangements-with-repetition idea from Permutations & Combinations). With two parts this collapses to ${fr(`${n}!`, `${r}!(${n} − ${r})!`)} = ${nCr}, recovering the binomial coefficient, so the binomial theorem is just the ${k} = 2 case.`,
      },
      {
        t: 'p',
        html: `Counting the <b>number of distinct terms</b> is also a P&C question in disguise: a term is fixed by the exponents (${n1}, ${n2}, …, ${nk}) with ${n1} + ⋯ + ${nk} = ${n}, ${ni} ≥ 0. The number of such non-negative integer solutions is the classic stars-and-bars count ${NTERMS}.`,
      },
      {
        t: 'p',
        html: `<b>Validity conditions & constraints.</b> ${n} ∈ ℕ; the exponents ${n1}, …, ${nk} are non-negative integers summing to ${n}. “Number of terms” assumes the ${xi} are independent variables (no hidden relations like ${x2} = ${x1}<sup>2</sup> that would merge terms; if such a relation exists, the count drops, as in the perfect-power tricks of Topic 01).`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Multinomial theorem',
        main: `For ${n} ∈ ℕ:<br>(${x1} + ${x2} + ⋯ + ${xk})<sup><i>n</i></sup><br>= ∑ ${MC} ${x1}<sup><i>n</i>₁</sup>${x2}<sup><i>n</i>₂</sup> ⋯ ${xk}<sup><i>n</i>ₖ</sup>.`,
        legend: [
          `${n} = the index (${n} ∈ ℕ)`,
          `${k} = the number of parts`,
          `${x1}, …, ${xk} = the ${k} parts`,
          `${n1}, …, ${nk} = the exponents (every non-negative choice summing to ${n})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The sum is taken over all non-negative integers ${n1}, …, ${nk} with ${n1} + ${n2} + ⋯ + ${nk} = ${n}.`,
      },
      {
        t: 'formula',
        kicker: `Multinomial coefficient (the coefficient of ${MONO})`,
        main: `${MC}.`,
        legend: [`${n} = the index (${n} ∈ ℕ)`, `${n1}, …, ${nk} = the exponents (summing to ${n})`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Number of distinct terms in ${XSUM}`,
        main: NTERMS,
        legend: [`${n} = the index (${n} ∈ ℕ)`, `${k} = the number of parts`],
        note: null,
      },
      {
        t: 'p',
        html: `In particular, a <b>trinomial</b> (${a} + ${b} + ${c})<sup><i>n</i></sup> has ${C('<i>n</i>+2', '2')} = ${fr(`(${n} + 1)(${n} + 2)`, '2')} terms.`,
      },
      { t: 'p', html: `<b>Total sum of all coefficients:</b> set every ${xi} = 1, giving ${k}<sup><i>n</i></sup>.` },
      { t: 'p', html: `Here ${n} is the index, ${k} the number of parts, ${ni} the exponents. Pure numbers.` },

      { t: 'part', title: 'Proofs, theorems and standard techniques' },
      {
        t: 'p',
        html: `<b>Why the coefficient is ${MCS}.</b> Expanding (${x1} + ⋯ + ${xk})<sup><i>n</i></sup> means choosing one ${xi} from each of the ${n} factors and multiplying. A term ${MONO} arises every time we pick ${x1} from some ${n1} of the factors, ${x2} from ${n2} of them, and so on. The number of ways to assign the ${n} factors into labelled groups of sizes ${n1}, …, ${nk} is the arrangements-of-multiset count ${MC}. Summing over all valid exponent-tuples gives the theorem.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Why the term count is ${NTERMS}.</b> Each distinct term corresponds to one solution of ${n1} + ${n2} + ⋯ + ${nk} = ${n} in non-negative integers. By stars and bars (distributing ${n} identical “units” among ${k} “slots”), the number of solutions is ${NTERMS}.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: coefficient of a specified monomial.</b> To find the coefficient of ${x1}<sup><i>a</i></sup>${x2}<sup><i>b</i></sup> ⋯ in (${x1} + ⋯ + ${xk})<sup><i>n</i></sup>: check ${a} + ${b} + ⋯ = ${n} (else the coefficient is 0), then write ${fr(`${n}!`, `${a}! ${b}! ⋯`)}.`,
      },
      {
        t: 'p',
        html: `<b>Standard technique: coefficient of ${x}<sup><i>m</i></sup> in (1 + ${x} + ${x}<sup>2</sup> + ⋯ + ${x}<sup><i>t</i></sup>)<sup><i>k</i></sup>.</b> Either (i) expand as a product and collect, or (ii) use the substitution 1 + ${x} + ⋯ + ${x}<sup><i>t</i></sup> = ${GEOM} and combine with the any-index series (1 − ${x})<sup>−<i>k</i></sup> from Topic 05, extracting the coefficient of ${x}<sup><i>m</i></sup>.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / School Level',
        q: `Find the number of distinct terms in the expansion of (${a} + ${b} + ${c})<sup>12</sup>.`,
        steps: [
          `Using ${NTERMS} with ${n} = 12, ${k} = 3:<br>${C('12+3−1', '3−1')} = ${C('14', '2')} = ${fr('14 · 13', '2')} = 91.`,
        ],
        ans: '91',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `Find the coefficient of ${x}<sup>2</sup>${y}<sup>3</sup>${z}<sup>4</sup> in the expansion of (${x} + ${y} + ${z})<sup>9</sup>.`,
        steps: [
          `First check the exponents sum to the index: 2 + 3 + 4 = 9 = ${n}. ✓ The multinomial coefficient is<br>${fr('9!', '2! 3! 4!')} = ${fr('362880', '2 · 6 · 24')}<br>= ${fr('362880', '288')} = 1260.`,
          `<b>The trap:</b> using ${C('9', '2')} or some binomial coefficient. With three variables you need the full multinomial ${ABC}, not a single ${nCr}.`,
        ],
        ans: '1260',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept',
        q: `Find the coefficient of ${x}<sup>4</sup> in the expansion of (1 + ${x} + ${x}<sup>2</sup>)<sup>3</sup>.`,
        steps: [
          `Method (direct multinomial): we need 1<sup><i>n</i>₁</sup>${x}<sup><i>n</i>₂</sup>(${x}<sup>2</sup>)<sup><i>n</i>₃</sup> with ${n1} + ${n2} + ${n3} = 3 and total ${x}-power ${n2} + 2${n3} = 4. Solving: (${n1}, ${n2}, ${n3}) = (0, 2, 1) or (1, 0, 2).<br>${fr('3!', '0! 2! 1!')} + ${fr('3!', '1! 0! 2!')} = 3 + 3 = 6.`,
          `<b>Check (alternative):</b> (1 + ${x} + ${x}<sup>2</sup>)<sup>3</sup> expands to 1 + 3${x} + 6${x}<sup>2</sup> + 7${x}<sup>3</sup> + 6${x}<sup>4</sup> + 3${x}<sup>5</sup> + ${x}<sup>6</sup>: the coefficient of ${x}<sup>4</sup> is indeed 6 (note the palindromic coefficients).`,
        ],
        ans: '6',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the coefficient of ${x}<sup>7</sup> in the expansion of (1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup> + ⋯)<sup>3</sup>, |${x}| < 1.`,
        steps: [
          `The bracket is the geometric series 1 + ${x} + ${x}<sup>2</sup> + ⋯ = (1 − ${x})<sup>−1</sup>, so the whole expression is (1 − ${x})<sup>−3</sup>. From Topic 05, the coefficient of ${x}<sup><i>r</i></sup> in (1 − ${x})<sup>−3</sup> is ${C('3+<i>r</i>−1', r)} = ${C('<i>r</i>+2', r)} = ${C('<i>r</i>+2', '2')}. For ${r} = 7:<br>${C('9', '2')} = ${fr('9 · 8', '2')} = 36.`,
          `This is also the number of non-negative integer solutions of ${n1} + ${n2} + ${n3} = 7: the multinomial and stars-and-bars viewpoints agree.`,
        ],
        ans: '36',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE / School] Find the number of distinct terms in (${p} + ${q} + ${r} + <i>s</i>)<sup>10</sup>.`, a: `${C('13', '3')} = 286` },
          { q: `[JEE Main] Find the coefficient of ${a}<sup>3</sup>${b}<sup>2</sup>${c}<sup>2</sup> in (${a} + ${b} + ${c})<sup>7</sup>.`, a: `${fr('7!', '3! 2! 2!')} = 210` },
          {
            q: `[JEE Main] Find the sum of all coefficients in (2${x} − 3${y} + ${z})<sup>8</sup>.`,
            a: `0 (put ${x} = ${y} = ${z} = 1: (2 − 3 + 1)<sup>8</sup> = 0)`,
          },
          {
            q: `[JEE Advanced] Find the coefficient of ${x}<sup>5</sup> in (1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup>)<sup>4</sup>.`,
            a: `40 (coefficient of ${x}<sup>5</sup> in (1 + ${x} + ${x}<sup>2</sup> + ${x}<sup>3</sup>)<sup>4</sup>; via (1 − ${x}<sup>4</sup>)<sup>4</sup>(1 − ${x})<sup>−4</sup>: ${C('8', '3')} − 4${NB}· ${C('4', '3')} = 56 − 16)`,
          },
          {
            q: `[JEE Advanced] Find the number of terms in (${x} + ${y} + ${z})<sup>20</sup> that contain ${x} (i.e. with ${x}-exponent ≥ 1).`,
            a: `${C('21', '2')} = 210 (set ${x}-exponent ≥ 1: solutions of <i>n</i>′<sub>1</sub> + ${n2} + ${n3} = 19; equivalently 231 − 21)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The number of distinct terms in (${a} + ${b} + ${c})<sup><i>n</i></sup> is:`,
        opts: [
          { label: `${n} + 1`, nudge: `<b>(a)</b> is the binomial (${k} = 2) count.` },
          { label: `3${n}`, nudge: `<b>(b)</b> 3${n} is linear; the term count is quadratic.` },
          { label: C('<i>n</i>+2', '2'), nudge: null },
          { label: '3<sup><i>n</i></sup>', nudge: `<b>(d)</b> 3<sup><i>n</i></sup> counts the products before like terms are collected (one of 3 choices from each of the ${n} brackets), which is also the sum of the coefficients; the distinct terms number ${C('<i>n</i>+2', '2')}.` },
        ],
        correct: 2,
        solution: `Stars and bars with ${k} = 3: ${C('<i>n</i>+3−1', '3−1')}.`,
      },
      {
        t: 'mcq',
        q: `The coefficient of <i>xyz</i> in (${x} + ${y} + ${z})<sup>3</sup> is:`,
        opts: [
          { label: '1', nudge: '<b>(a)</b> forgets the arrangement count.' },
          { label: '3', nudge: `<b>(b)</b> uses ${C('3', '1')}.` },
          { label: '6', nudge: null },
          { label: '9', nudge: `<b>(d)</b> 9 is 3<sup>2</sup>, which counts nothing here; the coefficient is the number of orders of ${x}, ${y}, ${z}, 3! = 6.` },
        ],
        correct: 2,
        solution: `${fr('3!', '1! 1! 1!')} = 6.`,
      },
      {
        t: 'mcq',
        q: `The sum of all coefficients in (${x} + ${y} + ${z})<sup><i>n</i></sup> is:`,
        opts: [
          { label: '3<sup><i>n</i></sup>', nudge: null },
          { label: '2<sup><i>n</i></sup>', nudge: '<b>(b)</b> is the binomial sum.' },
          { label: `${n}<sup>3</sup>`, nudge: `<b>(c)</b> ${n}<sup>3</sup> does not arise here.` },
          { label: C('<i>n</i>+2', '2'), nudge: '<b>(d)</b> is the number of terms, not the sum of coefficients.' },
        ],
        correct: 0,
        solution: `Put ${x} = ${y} = ${z} = 1.`,
      },
      {
        t: 'mcq',
        q: `For the coefficient of ${x}<sup>2</sup>${y}<sup>2</sup>${z}<sup>2</sup> in (${x} + ${y} + ${z})<sup><i>n</i></sup> to be non-zero, ${n} must equal:`,
        opts: [
          { label: '2', nudge: `<b>(a)</b>, <b>(b)</b> give exponent sums exceeding ${n} (coefficient 0).` },
          { label: '3', nudge: `<b>(a)</b>, <b>(b)</b> give exponent sums exceeding ${n} (coefficient 0).` },
          { label: '6', nudge: null },
          { label: `any ${n} ≥ 2`, nudge: `<b>(d)</b> ignores the sum-to-${n} requirement.` },
        ],
        correct: 2,
        solution: `The exponents must sum to ${n}: 2 + 2 + 2 = 6.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Using a binomial coefficient for three+ variables.</b> The coefficient of ${x}<sup><i>a</i></sup>${y}<sup><i>b</i></sup>${z}<sup><i>c</i></sup> is ${ABC}, not ${C(n, a)} or any single binomial coefficient.`,
          `<b>Forgetting the sum-to-${n} check.</b> A monomial’s coefficient is zero unless its exponents add up to exactly ${n}.`,
          `<b>Confusing “number of terms” with “sum of coefficients.”</b> Terms = ${NTERMS}; sum of coefficients = ${k}<sup><i>n</i></sup> (set all variables 1). They are different questions.`,
          `<b>Hidden relations merge terms.</b> “Number of terms” assumes independent variables; if the bracket is a perfect power or the variables are related, distinct terms collapse (recall the (1 + 2${x} + ${x}<sup>2</sup>)<sup>10</sup> = (1 + ${x})<sup>20</sup> trick from Topic 01).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip.</b> For “coefficient of ${x}<sup><i>m</i></sup> in (1 + ${x} + ⋯ + ${x}<sup><i>t</i></sup>)<sup><i>k</i></sup>,” convert the bracket to ${GEOM} and pair it with the any-index expansion of (1 − ${x})<sup>−<i>k</i></sup>: this turns a messy multinomial collection into two clean binomial-coefficient lookups.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Theorem', note: `(${x1} + ⋯ + ${xk})<sup><i>n</i></sup> = ∑ ${MCS} ${MONO}, with ∑ ${ni} = ${n}.` },
          { f: `Coefficient of ${MONO}`, note: `${MCS} (needs ∑ ${ni} = ${n}).` },
          { f: 'Number of terms', note: `${NTERMS}; trinomial ⇒ ${C('<i>n</i>+2', '2')} = ${fr(`(${n} + 1)(${n} + 2)`, '2')}.` },
          { f: 'Sum of all coefficients', note: `${k}<sup><i>n</i></sup> (set every variable = 1).` },
          { f: `${k} = 2 recovers the ordinary binomial theorem.`, note: '' },
        ],
        aids: [`“Spread ${n} choices over ${k} boxes: coefficient is ${n}! over the factorials of the box-sizes.”`],
      },
    ],
  },

  // ──────────────── Topic 08 · pp. 645–657 (the supplement’s Subtopic 08) ────────────────
  {
    n: '08',
    title: 'Multisection of Binomial Series: Roots of Unity and Complex Substitution',
    kalam: 'A period-2 filter cannot produce a period-3 pattern, no matter how you combine the two answers.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the fifth tool for the coefficient-summation toolkit of Topic 04, and it is the one CBSE Boards do not ask for: the Class 11 syllabus stops at ${x} = ±1, so treat the Concept intuition part’s non-unit substitutions as the board-level content here and the rest as competitive material. JEE Main asks the substitution ${x} = 3 or ${x} = 2 form directly (“prove ∑ 3<sup><i>r</i></sup> ${nCr} = 4<sup><i>n</i></sup>”) and occasionally the ${x} = ${ii} pair-sum ${ESTIMATE}. JEE Advanced is where multisection earns its place: sums such as ${C0} + ${C3} + ${C6} + ⋯, ${C0} + ${C4} + ${C8} + ⋯ and ${C0} − ${C2} + ${C4} − ⋯ are unreachable by any of Topic 04’s four tools, and they turn up disguised as counting problems (“how many subsets have size divisible by 3?”). NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Topic 04 described (1 + ${x})<sup><i>n</i></sup> = ${C0} + ${C1}${x} + ${C2}${x}<sup>2</sup> + ⋯ + ${Cs(n)}${x}<sup><i>n</i></sup> as a machine with a dial. It then turned the dial to exactly two settings, ${x} = 1 and ${x} = −1. Both settings are legal, but so is every other number, and the interesting ones are not real.`,
      },
      {
        t: 'p',
        html: `Start with the settings you already own. <b>The dial is not restricted to</b> ±1<b>.</b> Turn it to ${x} = 3 and the identity reads ∑<sub><i>r</i></sub> 3<sup><i>r</i></sup>${Cr} = 4<sup><i>n</i></sup>; turn it to ${x} = 2 and it reads ∑<sub><i>r</i></sub> 2<sup><i>r</i></sup>${Cr} = 3<sup><i>n</i></sup>. Nothing new is needed: any value of ${x} you substitute gives you a true statement about a weighted coefficient sum, because a polynomial identity holds at every point.`,
      },
      {
        t: 'p',
        html: `Now the real question. Setting ${x} = 1 adds all the coefficients. Setting ${x} = −1 flips the sign of every alternate one, and combining the two results (add and halve, or subtract and halve) isolates the even-position coefficients or the odd-position ones. <b>That combination is a filter with period 2.</b> So here is the natural question: what if you want every third coefficient, ${C0} + ${C3} + ${C6} + ⋯? A period-2 filter cannot produce a period-3 pattern, no matter how you combine the two answers.`,
      },
      {
        t: 'p',
        html: `Think about it this way. Picture a traffic signal at a Bengaluru junction cycling green, amber, red, green, amber, red, once per second, and a counter that records the value of whatever passes. If you want the total of only the green seconds, you need a device whose own rhythm repeats every three seconds and which, averaged over one full cycle, cancels everything except green. Real numbers give you rhythms of period 1 (${x} = 1) and period 2 (${x} = −1) and nothing else. <b>The complex cube root of unity ${w} is exactly the device with rhythm 3</b>: its powers march 1, ${w}, ${w}<sup>2</sup>, 1, ${w}, ${w}<sup>2</sup>, …, and the three of them sum to zero. Adding the results at ${x} = 1, ${x} = ${w} and ${x} = ${w}<sup>2</sup> therefore kills two out of every three coefficients and keeps the third, tripled.`,
      },
      {
        t: 'p',
        html: `The same logic with the fourth roots of unity 1, ${ii}, −1, −${ii} gives you a period-4 filter, which is what produces ${C0} − ${C2} + ${C4} − ${C6} + ⋯. That sum looks like an alternating sum, and students reach for ${x} = −1; but the sign pattern +, −, +, − sitting on the even positions only is a period-4 pattern in disguise, and ${x} = −1 cannot make it.`,
      },
      { t: 'fig', id: 'm11-07-fig-7.5' },
      {
        t: 'p',
        html: `<b>Validity conditions and constraints.</b> Multisection needs the expansion to be a genuine polynomial identity, so ${n} must be a positive integer: everything here inherits Topic 01’s restriction and none of it applies to the any-index series of Topic 05. Two edge cases matter. First, (1 + (−1))<sup><i>n</i></sup> = 0 requires ${n} ≥ 1; at ${n} = 0 that bracket is 1 and the formulas need separate reading. Second, the closed forms below use cos, so the angle must be reduced modulo 2π before evaluation. The technique itself never fails for ${n} ∈ ℕ: the filter is exact, not an approximation.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Cube roots of unity and 1 + <i>i</i>',
        main: `${w} = ${EP('2π<i>i</i>/3')} = ${fr(`−1 + ${ii}√3`, '2')},<br>${w}<sup>3</sup> = 1, 1 + ${w} + ${w}<sup>2</sup> = 0, ${w}<sup>2</sup> = ${w}̅.<br>1 + ${w} = −${w}<sup>2</sup> = ${EP('<i>i</i>π/3')},<br>1 + ${w}<sup>2</sup> = −${w} = ${EP('−<i>i</i>π/3')},<br>1 + ${ii} = √2 ${EP('<i>i</i>π/4')}, (1 + ${ii})<sup>2</sup> = 2${ii}.`,
        legend: [`${w} = a primitive (non-real) cube root of unity`, `${ii} = the imaginary unit`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${w}: a primitive (non-real) cube root of unity.<br>• ${ii}: the imaginary unit, a primitive fourth root of unity, ${ii}<sup>2</sup> = −1, ${ii}<sup>4</sup> = 1.<br>• ${WK} = ${EP('2π<i>i</i>/<i>k</i>')}: a primitive ${k}th root of unity, used below for general ${k}.`,
      },
      {
        t: 'formula',
        kicker: 'Substitution at values other than ±1',
        main: `For any number ${y} and ${n} ∈ ℕ:<br>${SUM('<i>r</i>=0', n)} ${nCr} ${y}<sup><i>r</i></sup> = (1 + ${y})<sup><i>n</i></sup>.`,
        legend: [`${y} = any number`, `${n} = the index (${n} ∈ ℕ)`, `${nCr} = the binomial coefficient`],
        note: null,
      },
      {
        t: 'p',
        html: `In particular ∑<sub><i>r</i></sub> 3<sup><i>r</i></sup> ${nCr} = 4<sup><i>n</i></sup>, ∑<sub><i>r</i></sub> 2<sup><i>r</i></sup> ${nCr} = 3<sup><i>n</i></sup>, and ∑<sub><i>r</i></sub> (−2)<sup><i>r</i></sup> ${nCr} = (−1)<sup><i>n</i></sup>.`,
      },
      {
        t: 'formula',
        kicker: 'The root-of-unity filter',
        main: `For a primitive ${k}th root of unity ${WK} and any integer ${m}:<br>${FILTER} = 1, ${k} ∣ ${m},<br>= 0, ${k} ∤ ${m}.`,
        legend: [`${WK} = a primitive ${k}th root of unity`, `${k} = the period of the filter`, `${m} = any integer`],
        note: null,
      },
      { t: 'p', html: `Applying this to (1 + ${x})<sup><i>n</i></sup> gives the <b>multisection formula</b>:` },
      {
        t: 'formula',
        kicker: 'Multisection formula',
        main: `For 0 ≤ ${a} ≤ ${k} − 1:<br>${SUMR(`0≤<i>r</i>≤<i>n</i>, <i>r</i>≡<i>a</i> (mod <i>k</i>)`)} ${nCr}<br>= ${MSEC}.`,
        legend: [
          `${k} = the period of the filter`,
          `${a} = the residue class you want`,
          `${WK} = a primitive ${k}th root of unity`,
          `${n} = the index (${n} ∈ ℕ)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${k}: the period of the filter (how far apart the coefficients you want are).<br>• ${a}: the residue class you want (which coefficients: ${r} ≡ ${a}).<br>• The same formula works for any polynomial <i>f</i>(${x}) = ∑ <i>a</i><sub><i>r</i></sub>${x}<sup><i>r</i></sup>, with <i>f</i>(${W('<i>j</i>')}) in place of (1 + ${W('<i>j</i>')})<sup><i>n</i></sup>.`,
      },
      { t: 'p', html: '<b>Standard closed forms</b>' },
      {
        t: 'p',
        html: `<b>Period 2</b> (${k} = 2, ${n} ≥ 1): ${C0} + ${C2} + ${C4} + ⋯ = ${C1} + ${C3} + ${C5} + ⋯ = 2<sup><i>n</i>−1</sup>.`,
      },
      {
        t: 'formula',
        kicker: `Period 3 (${k} = 3), for ${a} = 0, 1, 2`,
        main: `${Cs(a)} + ${Cs('<i>a</i>+3')} + ${Cs('<i>a</i>+6')} + ⋯<br>= ${P3(fr('(<i>n</i> − 2<i>a</i>)π', '3'))}.`,
        legend: [CR_LEG, `${a} = the residue (0, 1 or 2)`, `${n} = the index (${n} ∈ ℕ)`],
        note: null,
      },
      { t: 'p', html: `Written out, with <i>S</i><sub><i>a</i></sub> denoting the sum for residue ${a}:` },
      {
        t: 'table',
        title: null,
        head: ['Sum', 'Closed form'],
        rows: [
          [`<i>S</i><sub>0</sub> = ${C0} + ${C3} + ${C6} + ⋯`, P3(NPI3)],
          [`<i>S</i><sub>1</sub> = ${C1} + ${C4} + ${C7} + ⋯`, P3(fr('(<i>n</i> − 2)π', '3'))],
          [`<i>S</i><sub>2</sub> = ${C2} + ${C5} + ${C8} + ⋯`, P3(fr('(<i>n</i> − 4)π', '3'))],
        ],
      },
      {
        t: 'p',
        html: `and <i>S</i><sub>0</sub> + <i>S</i><sub>1</sub> + <i>S</i><sub>2</sub> = 2<sup><i>n</i></sup>, which is your check.`,
      },
      { t: 'p', html: `The two “component” sums come straight from ${OPI}:` },
      {
        t: 'formula',
        kicker: `Period 4 (${k} = 4, ${n} ≥ 1)`,
        main: `${C0} − ${C2} + ${C4} − ${C6} + ⋯<br>= Re [${OPI}] = 2<sup><i>n</i>/2</sup> cos ${NPI4},<br>${C1} − ${C3} + ${C5} − ${C7} + ⋯<br>= Im [${OPI}] = 2<sup><i>n</i>/2</sup> sin ${NPI4}.`,
        legend: [CR_LEG, `${n} = the index (${n} ≥ 1)`],
        note: null,
      },
      { t: 'p', html: 'The full period-4 sums are' },
      {
        t: 'formula',
        kicker: 'Full period-4 sums',
        main: `${SUMR('<i>r</i>≡<i>a</i> (mod 4)')} ${nCr}<br>= ${P4},<br>${a} = 0, 1, 2, 3.`,
        legend: [`${a} = the residue (0, 1, 2 or 3)`, `${n} = the index (${n} ≥ 1)`],
        note: null,
      },
      {
        t: 'p',
        html: `In particular ${C0} + ${C4} + ${C8} + ⋯ = ${P40}, and the four sums add to 2<sup><i>n</i></sup>.`,
      },
      {
        t: 'p',
        html: `All quantities here are pure numbers; there are no units or dimensions. The only constraints are ${n} ∈ ℕ and 0 ≤ ${a} ≤ ${k} − 1.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: the root-of-unity filter</b>' },
      {
        t: 'p',
        html: `<b>Claim.</b> For a primitive ${k}th root of unity ${WK} and any integer ${m}, ${SUM('<i>j</i>=0', '<i>k</i>−1')} ${W('<i>jm</i>')} equals ${k} if ${k} ∣ ${m} and 0 otherwise.`,
      },
      {
        t: 'p',
        html: `1. <b>Case ${k} ∣ ${m}.</b> Then ${W(m)} = (${W(k)})<sup><i>m</i>/<i>k</i></sup> = 1, so every one of the ${k} summands is 1. <b>Reason:</b> ${W(k)} = 1 by definition of a ${k}th root of unity. The sum is ${k}.`,
      },
      {
        t: 'p',
        html: `2. <b>Case ${k} ∤ ${m}.</b> Then ${W(m)} ≠ 1, because ${WK} is primitive: its powers return to 1 only at multiples of ${k}.`,
      },
      {
        t: 'p',
        html: `3. The sum is a geometric progression with first term 1 and ratio ${W(m)} ≠ 1, so it equals ${fr(`(${W(m)})<sup><i>k</i></sup> − 1`, `${W(m)} − 1`)}. <b>Reason:</b> the standard GP sum, valid because the ratio is not 1.`,
      },
      {
        t: 'p',
        html: `4. The numerator is (${W(k)})<sup><i>m</i></sup> − 1 = 1<sup><i>m</i></sup> − 1 = 0, and the denominator is nonzero, so the sum is 0.${NB}■`,
      },
      { t: 'p', html: '<b>Derivation: the multisection formula</b>' },
      {
        t: 'p',
        html: `1. Start from (1 + ${x})<sup><i>n</i></sup> = ${SUM('<i>r</i>=0', n)} ${Cr}${x}<sup><i>r</i></sup> and substitute ${x} = ${W('<i>j</i>')} for each <i>j</i> = 0, 1, …, ${k} − 1. <b>Reason:</b> a polynomial identity holds at every complex value.`,
      },
      {
        t: 'p',
        html: `2. Multiply the <i>j</i>th equation by ${W('−<i>ja</i>')} and add all ${k} of them:<br>${SUM('<i>j</i>=0', '<i>k</i>−1')} ${W('−<i>ja</i>')}(1 + ${W('<i>j</i>')})<sup><i>n</i></sup><br>= ${SUM('<i>j</i>=0', '<i>k</i>−1')} ${SUM('<i>r</i>=0', n)} ${Cr} ${W('<i>j</i>(<i>r</i>−<i>a</i>)')}<br>= ${SUM('<i>r</i>=0', n)} ${Cr} ${SUM('<i>j</i>=0', '<i>k</i>−1')} ${W('<i>j</i>(<i>r</i>−<i>a</i>)')}.<br><b>Reason:</b> the sums are finite, so the order of summation may be exchanged freely.`,
      },
      {
        t: 'p',
        html: `3. By the filter, the inner sum is ${k} when ${k} ∣ (${r} − ${a}) and 0 otherwise. So only the coefficients with ${r} ≡ ${a} (mod ${k}) survive, each multiplied by ${k}.`,
      },
      { t: 'p', html: `4. Divide by ${k}.${NB}■` },
      { t: 'p', html: `<b>Derivation: ${C0} + ${C3} + ${C6} + ⋯ using ${w}</b>` },
      {
        t: 'p',
        html: `1. Substitute ${x} = 1, ${x} = ${w}, ${x} = ${w}<sup>2</sup> into (1 + ${x})<sup><i>n</i></sup> = ∑ ${Cr}${x}<sup><i>r</i></sup> and add:<br>2<sup><i>n</i></sup> + (1 + ${w})<sup><i>n</i></sup> + (1 + ${w}<sup>2</sup>)<sup><i>n</i></sup><br>= ${SUM('<i>r</i>=0', n)} ${Cr}(1 + ${w}<sup><i>r</i></sup> + ${w}<sup>2<i>r</i></sup>).`,
      },
      {
        t: 'p',
        html: `2. The bracket is 3 when 3 ∣ ${r} (all three powers equal 1) and 0 otherwise (it is 1 + ${w} + ${w}<sup>2</sup> re-ordered). <b>Reason:</b> this is the ${k} = 3 filter written out by hand.`,
      },
      {
        t: 'p',
        html: `3. Hence ${C0} + ${C3} + ${C6} + ⋯<br>= ${fr('1', '3')}[2<sup><i>n</i></sup> + (1 + ${w})<sup><i>n</i></sup> + (1 + ${w}<sup>2</sup>)<sup><i>n</i></sup>].`,
      },
      {
        t: 'p',
        html: `4. Now evaluate the two complex powers. Since ${w} = −${fr('1', '2')} + ${ii}${fr('√3', '2')}, we get 1 + ${w} = ${fr('1', '2')} + ${ii}${fr('√3', '2')} = ${EP('<i>i</i>π/3')} and, taking conjugates, 1 + ${w}<sup>2</sup> = ${EP('−<i>i</i>π/3')}. <b>Reason:</b> 1 + ${w} has modulus 1 and argument ${fr('π', '3')}.`,
      },
      {
        t: 'p',
        html: `5. Therefore (1 + ${w})<sup><i>n</i></sup> + (1 + ${w}<sup>2</sup>)<sup><i>n</i></sup><br>= ${EP('<i>in</i>π/3')} + ${EP('−<i>in</i>π/3')} = 2 cos ${NPI3}, giving<br>${C0} + ${C3} + ${C6} + ⋯ = ${P3(NPI3)}.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Sanity check at ${n} = 4:</b> the formula gives ${fr('1', '3')}[16 + 2 cos ${fr('4π', '3')}] = ${fr('1', '3')}[16 − 1] = 5, and directly ${C0} + ${C3} = 1 + 4 = 5.`,
      },
      { t: 'p', html: `<b>Derivation: ${C0} − ${C2} + ${C4} − ⋯ using ${x} = ${ii}</b>` },
      { t: 'p', html: `1. Substitute ${x} = ${ii}: ${OPI} = ∑<sub><i>r</i></sub> ${Cr} ${ii}<sup><i>r</i></sup>.` },
      {
        t: 'p',
        html: `2. The powers of ${ii} cycle 1, ${ii}, −1, −${ii} with period 4. So the terms with ${r} even contribute ±${Cr} to the <b>real</b> part with signs +, −, +, − as ${r} = 0, 2, 4, 6, …, and the terms with ${r} odd contribute ±${Cr} to the <b>imaginary</b> part with the same alternating pattern.`,
      },
      {
        t: 'p',
        html: `3. Equating real and imaginary parts on both sides:<br>Re [${OPI}] = ${C0} − ${C2} + ${C4} − ⋯,<br>Im [${OPI}] = ${C1} − ${C3} + ${C5} − ⋯.<br><b>Reason:</b> two complex numbers are equal exactly when their real and imaginary parts agree, and ${Cr} are real.`,
      },
      {
        t: 'p',
        html: `4. Write 1 + ${ii} = √2 (cos ${fr('π', '4')} + ${ii} sin ${fr('π', '4')}) and apply De Moivre’s theorem:<br>${OPI} = 2<sup><i>n</i>/2</sup> (cos ${NPI4} + ${ii} sin ${NPI4}).${NB}■`,
      },
      {
        t: 'proc',
        title: 'Procedure A: the k-way filter, executed',
        steps: [
          `<b>Read off ${k} and ${a}.</b> “Every third coefficient starting from ${C0}” means ${k} = 3, ${a} = 0; “${C1} + ${C4} + ${C7} + ⋯” means ${k} = 3, ${a} = 1. <b>Why:</b> the whole formula is determined by these two numbers.`,
          `<b>List the ${k} substitution points</b> ${x} = ${W('0')}, ${W('1')}, …, ${W('<i>k</i>−1')}. For ${k} = 3 these are 1, ${w}, ${w}<sup>2</sup>; for ${k} = 4 they are 1, ${ii}, −1, −${ii}. <b>Why:</b> you need one equation per residue class to separate ${k} classes.`,
          `<b>Evaluate (1 + ${W('<i>j</i>')})<sup><i>n</i></sup> for each <i>j</i>.</b> Convert each base to polar form first. <b>Why:</b> raising ${EP('<i>iθ</i>')} to the ${n} is trivial; multiplying out (${fr('1', '2')} + ${ii}${fr('√3', '2')})<sup><i>n</i></sup> is not.`,
          `<b>Weight by ${W('−<i>ja</i>')}, add, divide by ${k}.</b> <b>Why:</b> the weight is what selects residue ${a} rather than residue 0.`,
          `<b>Reduce every angle modulo</b> 2π <b>before taking a cosine.</b> <b>Why:</b> cos ${fr('10π', '3')} is not something you should evaluate directly; it is cos ${fr('4π', '3')} = −${fr('1', '2')}.`,
          `<b>Check that the ${k} sums add to</b> 2<sup><i>n</i></sup><b>.</b> <b>Why:</b> the residue classes partition all ${n} + 1 coefficients, whose total is 2<sup><i>n</i></sup>. This catches sign and angle errors instantly.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: the x = i route for alternating even or odd sums',
        steps: [
          '<b>Identify which component you need.</b> Signs alternating on the <b>even</b>-indexed coefficients means the real part; on the <b>odd</b>-indexed coefficients means the imaginary part.',
          `<b>Compute ${OPI} the fast way</b> using (1 + ${ii})<sup>2</sup> = 2${ii}: for even ${n}, ${OPI} = (2${ii})<sup><i>n</i>/2</sup>. <b>Why:</b> this is pure arithmetic on powers of ${ii} and avoids trigonometry entirely.`,
          `<b>For odd ${n}</b>, write ${OPI} = (1 + ${ii}) (2${ii})<sup>(<i>n</i>−1)/2</sup> and expand once.`,
          '<b>Read off the required component</b> and state it as a real number.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: substitution at a value other than ±1',
        steps: [
          `<b>Look at the weights.</b> A factor ${y}<sup><i>r</i></sup> attached to ${Cr} means the dial should be set to ${x} = ${y}.`,
          `<b>Substitute and simplify</b> (1 + ${y})<sup><i>n</i></sup>.`,
          `<b>Check with a tiny case</b> (${n} = 1 or ${n} = 2) before committing. <b>Why:</b> it costs five seconds and catches a misread weight.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Prove that ${SUM('<i>r</i>=0', n)} 3<sup><i>r</i></sup> ${nCr} = 4<sup><i>n</i></sup>, and evaluate the sum for ${n} = 5.`,
        steps: [
          `The weight attached to ${nCr} is 3<sup><i>r</i></sup>, which is exactly what substituting ${x} = 3 produces. Start from the binomial theorem with ${a} = 1, ${b} = ${x}:<br>(1 + ${x})<sup><i>n</i></sup> = ${SUM('<i>r</i>=0', n)} ${nCr} ${x}<sup><i>r</i></sup>.`,
          `This is a polynomial identity, so it holds for every value of ${x}. Put ${x} = 3:<br>${SUM('<i>r</i>=0', n)} 3<sup><i>r</i></sup> ${nCr} = (1 + 3)<sup><i>n</i></sup> = 4<sup><i>n</i></sup>.${NB}■`,
          `For ${n} = 5: the sum equals 4<sup>5</sup> = 1024.`,
          'Direct check, since this is the first time the dial has been turned away from ±1:<br>1 + 5(3) + 10(9) + 10(27) + 5(81) + 243<br>= 1 + 15 + 90 + 270 + 405 + 243 = 1024.',
          `The same move with ${x} = 2 gives ∑<sub><i>r</i></sub> 2<sup><i>r</i></sup> ${nCr} = 3<sup><i>n</i></sup>, and with ${x} = −2 gives ∑<sub><i>r</i></sub> (−2)<sup><i>r</i></sup> ${nCr} = (−1)<sup><i>n</i></sup>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `For (1 + ${x})<sup>10</sup>, evaluate ${C0} + ${C3} + ${C6} + ${C9}.`,
        steps: [
          `This is every third coefficient starting at ${C0}: ${k} = 3, ${a} = 0. Use the derived closed form with ${n} = 10:<br>${C0} + ${C3} + ${C6} + ${C9}<br>= ${fr('1', '3')}[2<sup>10</sup> + 2 cos ${fr('10π', '3')}].`,
          `Reduce the angle first, as Procedure A Step 5 insists: ${fr('10π', '3')} − 2π = ${fr('4π', '3')}, and cos ${fr('4π', '3')} = −${fr('1', '2')}. Hence<br>= ${fr('1', '3')}[1024 + 2(−${fr('1', '2')})] = ${fr('1024 − 1', '3')}<br>= ${fr('1023', '3')} = 341.`,
          `<b>Verification by direct addition:</b> ${C('10', '0')} + ${C('10', '3')} + ${C('10', '6')} + ${C('10', '9')} = 1 + 120 + 210 + 10 = 341.`,
          `<b>Check against the partition rule:</b> the other two sums are <i>S</i><sub>1</sub> = ${C('10', '1')} + ${C('10', '4')} + ${C('10', '7')} + ${C('10', '10')} = 10 + 210 + 120 + 1 = 341 and <i>S</i><sub>2</sub> = ${C('10', '2')} + ${C('10', '5')} + ${C('10', '8')} = 45 + 252 + 45 = 342. Total 341 + 341 + 342 = 1024 = 2<sup>10</sup>.`,
        ],
        ans: `${C0} + ${C3} + ${C6} + ${C9} = 341.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main · Speed Trap',
        q: `For (1 + ${x})<sup>8</sup>, evaluate ${C0} − ${C2} + ${C4} − ${C6} + ${C8}.`,
        steps: [
          `<b>The trap.</b> The word “alternating” fires a reflex, and the reflex reaches for ${x} = −1. Two wrong answers follow. A student who thinks “alternating sum of all coefficients” writes 0. A student who notices the sum only involves even indices reaches instead for the even-index total ${C0} + ${C2} + ${C4} + ${C6} + ${C8} = 2<sup><i>n</i>−1</sup> = 2<sup>7</sup> = <b>128</b> and hands that in. Both are traps, and 128 is the seductive one because it is a genuine, correct identity, just not for this sum.`,
          `<b>Why ${x} = −1 cannot work.</b> Substituting ${x} = −1 attaches the sign (−1)<sup><i>r</i></sup> to ${Cr}, which is a pattern of period 2. The sum asked for attaches +, −, +, − to ${C0}, ${C2}, ${C4}, ${C6}: that is, the sign changes once every two indices, which is a pattern of period 4. No combination of the two real substitutions can produce it.`,
          `<b>The correct move.</b> Substitute ${x} = ${ii}, whose powers have period 4:<br>(1 + ${ii})<sup>8</sup> = ${SUM('<i>r</i>=0', '8')} ${C('8', r)} ${ii}<sup><i>r</i></sup>,<br>and the real part of the right-hand side is exactly ${C0} − ${C2} + ${C4} − ${C6} + ${C8}. Evaluate the left side using (1 + ${ii})<sup>2</sup> = 2${ii}:<br>(1 + ${ii})<sup>8</sup> = [(1 + ${ii})<sup>2</sup>]<sup>4</sup> = (2${ii})<sup>4</sup> = 16 ${ii}<sup>4</sup> = 16.`,
          'This is real, so its imaginary part is 0 and its real part is 16.',
          `<b>Direct check:</b> 1 − 28 + 70 − 28 + 1 = 16. (As a bonus, the imaginary part gives ${C1} − ${C3} + ${C5} − ${C7} = 8 − 56 + 56 − 8 = 0, matching Im(16) = 0.)`,
          `<b>Name the trap: period-2 thinking on a period-4 pattern.</b> Count how many indices pass between sign changes. One index means ${x} = −1; two means ${x} = ${ii}. Picking every third coefficient, with no signs at all, means ${w}.`,
        ],
        ans: `${C0} − ${C2} + ${C4} − ${C6} + ${C8} = 16.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that for (1 + ${x})<sup><i>n</i></sup> with ${n} ≥ 1,<br>${C0} + ${C4} + ${C8} + ⋯ = ${P40},<br>and hence evaluate the sum for ${n} = 12.`,
        steps: [
          `This is the period-4 filter at ${a} = 0, so substitute all four fourth roots of unity ${x} = 1, ${ii}, −1, −${ii} and average.`,
          `<b>Step 1: write the four substitutions.</b><br>(1 + 1)<sup><i>n</i></sup> = ∑<sub><i>r</i></sub> ${Cr},<br>${OPI} = ∑<sub><i>r</i></sub> ${Cr}${ii}<sup><i>r</i></sup>,<br>(1 − 1)<sup><i>n</i></sup> = ∑<sub><i>r</i></sub> ${Cr}(−1)<sup><i>r</i></sup>,<br>${OMI} = ∑<sub><i>r</i></sub> ${Cr}(−${ii})<sup><i>r</i></sup>.`,
          `<b>Step 2: add all four.</b> The coefficient of ${Cr} in the total is 1 + ${ii}<sup><i>r</i></sup> + (−1)<sup><i>r</i></sup> + (−${ii})<sup><i>r</i></sup>, which by the filter equals 4 when 4 ∣ ${r} and 0 otherwise. Hence<br>${C0} + ${C4} + ${C8} + ⋯<br>= ${fr('1', '4')}[2<sup><i>n</i></sup> + ${OPI} + 0<sup><i>n</i></sup> + ${OMI}].`,
          `Note (1 − 1)<sup><i>n</i></sup> = 0 because ${n} ≥ 1; this is the edge case flagged in the Concept intuition part.`,
          `<b>Step 3: evaluate the complex powers.</b> Since 1 + ${ii} = √2 ${EP('<i>i</i>π/4')} and 1 − ${ii} = √2 ${EP('−<i>i</i>π/4')}, De Moivre gives<br>${OPI} + ${OMI}<br>= 2<sup><i>n</i>/2</sup>(${EP('<i>in</i>π/4')} + ${EP('−<i>in</i>π/4')})<br>= 2<sup><i>n</i>/2</sup> · 2 cos ${NPI4}.`,
          `<b>Step 4: assemble.</b><br>${C0} + ${C4} + ${C8} + ⋯<br>= ${fr('1', '4')}[2<sup><i>n</i></sup> + 2<sup>(<i>n</i>+2)/2</sup> cos ${NPI4}]<br>= ${P40}.${NB}■`,
          `<b>Step 5: evaluate at ${n} = 12.</b> Here 2<sup><i>n</i>−1</sup> = 2<sup>11</sup> = 2048, 2<sup><i>n</i>/2</sup> = 2<sup>6</sup> = 64, and ${fr('12π', '4')} = 3π, so cos 3π = −1. Therefore<br>${C0} + ${C4} + ${C8} + ${Cs('12')}<br>= ${fr('1', '2')}[2048 + 64(−1)] = ${fr('1984', '2')} = 992.`,
          `<b>Verification:</b> ${C('12', '0')} + ${C('12', '4')} + ${C('12', '8')} + ${C('12', '12')} = 1 + 495 + 495 + 1 = 992.`,
          `A useful reading of the result: 2<sup><i>n</i>−2</sup> = 1024 is the “fair share” of the four residue classes, and the cosine term is the small correction that redistributes it. The answer is always within ${fr('2<sup><i>n</i>/2</sup>', '2')} of 2<sup><i>n</i>−2</sup>.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE Board] Prove that ${SUM('<i>r</i>=0', n)} 2<sup><i>r</i></sup> ${nCr} = 3<sup><i>n</i></sup>, and evaluate for ${n} = 6.`, a: '3<sup>6</sup> = 729.' },
          { q: `[CBSE Board] For (1 + ${x})<sup>9</sup>, evaluate ${C0} + ${C2} + ${C4} + ${C6} + ${C8} using the period-2 filter.`, a: '2<sup>8</sup> = 256.' },
          { q: `[JEE Main] For (1 + ${x})<sup>9</sup>, evaluate ${C0} + ${C3} + ${C6} + ${C9}.`, a: '170.' },
          { q: `[JEE Main] For (1 + ${x})<sup>10</sup>, evaluate ${C1} + ${C4} + ${C7} + ${Cs('10')}.`, a: '341.' },
          { q: `[JEE Main] For (1 + ${x})<sup>10</sup>, evaluate ${C1} − ${C3} + ${C5} − ${C7} + ${C9}.`, a: '32.' },
          { q: `[JEE Advanced] For (1 + ${x})<sup>10</sup>, evaluate ${C0} + ${C4} + ${C8}.`, a: '256.' },
          {
            q: `[JEE Advanced] For (1 + ${x})<sup>15</sup>, evaluate ${C0} + ${C3} + ${C6} + ${C9} + ${Cs('12')} + ${Cs('15')}.`,
            a: '10922.',
          },
          {
            q: '[JEE Advanced] How many subsets of {1, 2, 3, …, 9} have a size divisible by 3 (counting the empty set)?',
            a: `170 (the count is ${C('9', '0')} + ${C('9', '3')} + ${C('9', '6')} + ${C('9', '9')}, which is practice question 3).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For (1 + ${x})<sup>12</sup>, the value of ${C0} + ${C3} + ${C6} + ${C9} + ${Cs('12')} is:`,
        opts: [
          {
            label: '1365',
            nudge: `<b>(a)</b> 1365 is ${fr('1', '3')}[4096 − 1]: the value you get by using the cosine correction −1 instead of +2, i.e. by not reducing ${fr('12π', '3')} = 4π to cos 4π = 1 and instead assuming the generic “2<sup><i>n</i></sup> minus one over three” shortcut. The correction depends on ${n} mod 6; it cannot be memorised as a single number.`,
          },
          { label: '1366', nudge: null },
          {
            label: '2048',
            nudge: '<b>(c)</b> 2048 is 2<sup><i>n</i>−1</sup>, the answer to the period-2 filter: a student who knows “half the coefficients” but not “a third of them”.',
          },
          { label: '4096', nudge: '<b>(d)</b> 4096 is 2<sup>12</sup>, the sum of all the coefficients, from ignoring the filter entirely.' },
        ],
        correct: 1,
        solution: `Using <i>S</i><sub>0</sub> = ${fr('1', '3')}[2<sup>12</sup> + 2 cos ${fr('12π', '3')}] = ${fr('1', '3')}[4096 + 2 cos 4π] = ${fr('1', '3')}[4096 + 2] = 1366. Direct check: 1 + 220 + 924 + 220 + 1 = 1366.`,
      },
      {
        t: 'mcq',
        q: `For (1 + ${x})<sup>6</sup>, the value of ${C0} − ${C2} + ${C4} − ${C6} is:`,
        opts: [
          { label: '0', nudge: null },
          {
            label: '8',
            nudge: `<b>(b)</b> 8 and <b>(c)</b> −8 both come from reading the imaginary part instead of the real part: Im [(1 + ${ii})<sup>6</sup>] = −8, which is the value of ${C1} − ${C3} + ${C5} = 6 − 20 + 6 = −8, with <b>(b)</b> additionally losing the sign. Even-indexed sums live in the real part; odd-indexed sums live in the imaginary part.`,
          },
          {
            label: '−8',
            nudge: `<b>(b)</b> 8 and <b>(c)</b> −8 both come from reading the imaginary part instead of the real part: Im [(1 + ${ii})<sup>6</sup>] = −8, which is the value of ${C1} − ${C3} + ${C5} = 6 − 20 + 6 = −8, with <b>(b)</b> additionally losing the sign. Even-indexed sums live in the real part; odd-indexed sums live in the imaginary part.`,
          },
          {
            label: '32',
            nudge: `<b>(d)</b> 32 is 2<sup><i>n</i>−1</sup> = 2<sup>5</sup>, the non-alternating even-index sum ${C0} + ${C2} + ${C4} + ${C6}: the period-2 answer to a period-4 question.`,
          },
        ],
        correct: 0,
        solution: `(1 + ${ii})<sup>6</sup> = [(1 + ${ii})<sup>2</sup>]<sup>3</sup> = (2${ii})<sup>3</sup> = −8${ii}, whose real part is 0. Direct check: 1 − 15 + 15 − 1 = 0.`,
      },
      {
        t: 'mcq',
        q: `The set of substitutions that isolates ${C0} + ${C4} + ${C8} + ⋯ from (1 + ${x})<sup><i>n</i></sup> is:`,
        opts: [
          {
            label: `${x} = 1 and ${x} = −1 only`,
            nudge: `<b>(a)</b> is the period-2 filter; it can separate even indices from odd ones but cannot split the even indices further into ${r} ≡ 0 and ${r} ≡ 2 (mod 4).`,
          },
          { label: `${x} = 1, −1, ${ii}, −${ii}`, nudge: null },
          {
            label: `${x} = 1, ${w}, ${w}<sup>2</sup>`,
            nudge: `<b>(c)</b> is the period-3 filter, which selects ${C0} + ${C3} + ${C6} + ⋯: the right idea applied with the wrong period.`,
          },
          {
            label: `${x} = 1, −1, ${w}`,
            nudge: `<b>(d)</b> mixes a period-2 set with a single cube root; the substitution points must be all the ${k}th roots of unity for one fixed ${k}, otherwise the inner sum in the derivation does not collapse to 0 or ${k}.`,
          },
        ],
        correct: 1,
        solution: 'Selecting one residue class modulo 4 requires all four fourth roots of unity.',
      },
      {
        t: 'mcq',
        q: `If ${w} is a non-real cube root of unity, then${NB}(1 + ${w})<sup><i>n</i></sup> + (1 + ${w}<sup>2</sup>)<sup><i>n</i></sup> equals:`,
        opts: [
          { label: `2 cos ${NPI3}`, nudge: null },
          {
            label: '2<sup><i>n</i></sup>',
            nudge: '<b>(b)</b> 2<sup><i>n</i></sup> is (1 + 1)<sup><i>n</i></sup>, the <i>j</i> = 0 term of the filter (<i>x</i> = 1); the question asks for the <i>j</i> = 1, 2 terms, <i>x</i> = <i>ω</i> and <i>x</i> = <i>ω</i><sup>2</sup>.',
          },
          {
            label: '−1',
            nudge: `<b>(c)</b> −1 is the value of ${w}<sup><i>n</i></sup> + ${w}<sup>2<i>n</i></sup> when 3 ∤ ${n}: a genuine and useful identity, but about the roots themselves, not about 1 + ${w}.`,
          },
          { label: '0', nudge: `<b>(d)</b> 0 is 1 + ${w} + ${w}<sup>2</sup> misremembered; note in particular that 1 + ${w} ≠ 0.` },
        ],
        correct: 0,
        solution: `1 + ${w} = ${EP('<i>i</i>π/3')} and 1 + ${w}<sup>2</sup> = ${EP('−<i>i</i>π/3')}, so the sum is ${EP('<i>in</i>π/3')} + ${EP('−<i>in</i>π/3')} = 2 cos ${NPI3}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Believing 1 + ${w} = 0.</b> It is not. The identity that vanishes is 1 + ${w} + ${w}<sup>2</sup> = 0, from which 1 + ${w} = −${w}<sup>2</sup> and 1 + ${w}<sup>2</sup> = −${w}. Both have modulus 1, not 0.`,
          `<b>Dividing by 2 out of habit.</b> The ${k}-way filter divides by ${k}. For ${C0} + ${C3} + ${C6} + ⋯ you divide by 3, not 2.`,
          `<b>Leaving an ${ii} in the final answer.</b> These sums are sums of integers (some with minus signs), so they are real. If your answer carries an ${ii}, you dropped one of the conjugate substitutions: the conjugate terms <i>j</i> and ${k} − <i>j</i> pair up into a cosine (the term <i>j</i> = 0, and for even ${k} the term <i>j</i> = ${fr(k, '2')}, are real already).`,
          `<b>Not reducing the angle.</b> cos ${fr('10π', '3')} must first become cos ${fr('4π', '3')} = −${fr('1', '2')}. Reducing modulo 2π is not optional; guessing the cosine of a large multiple of ${fr('π', '3')} is where most numerical errors enter.`,
          `<b>Confusing “every third coefficient” with “alternating”.</b> Alternating is period 2 and needs ${x} = −1; every third is period 3 and needs ${w}; alternating signs on the even indices is period 4 and needs ${ii}. Count the indices between sign changes before choosing a tool.`,
          `<b>Forgetting that (1 − 1)<sup><i>n</i></sup> = 0 only for ${n} ≥ 1.</b> At ${n} = 0 that bracket is 1, and every period-4 formula shifts.`,
          `<b>Applying multisection to Topic 05’s any-index series.</b> Every derivation here needs a finite polynomial. For |${x}| < 1 infinite series the substitutions ${x} = ${w} or ${x} = ${ii} do not even satisfy the convergence condition, since |${w}| = |${ii}| = 1.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the partition check.</b> For period ${k}, the ${k} sums must add to 2<sup><i>n</i></sup>. Compute ${k} − 1 of them and get the last by subtraction, which is faster; or compute all ${k} and check that they add to 2<sup><i>n</i></sup>, which catches sign and angle errors.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the “fair share” estimate.</b> For ${k} = 3 each sum is within ${fr('2', '3')} of ${fr('2<sup><i>n</i></sup>', '3')}, so it is always one of the two integers straddling ${fr('2<sup><i>n</i></sup>', '3')}. For ${n} = 10 that is 341.33, so the three sums must be 341 or 342, which is exactly what the second worked example of this topic found. Use this to reject a badly wrong answer in three seconds.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: powers of (1 + ${ii}) without trigonometry.</b> (1 + ${ii})<sup>2</sup> = 2${ii}, so for even ${n}, ${OPI} = (2${ii})<sup><i>n</i>/2</sup>, and powers of ${ii} cycle with period 4. This is faster and less error-prone than De Moivre under exam pressure.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: recognise the counting disguise.</b> “How many subsets have size divisible by 3” and “how many ways to pick a committee whose size leaves remainder 1 on division by 4” are multisection questions wearing a Chapter 6 costume. The moment a count is restricted by a residue condition on the size, reach for the filter.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'The dial is free',
            note: `∑<sub><i>r</i></sub> ${nCr} ${y}<sup><i>r</i></sup> = (1 + ${y})<sup><i>n</i></sup> for every ${y}. So ∑ 3<sup><i>r</i></sup>${Cr} = 4<sup><i>n</i></sup>, ∑ 2<sup><i>r</i></sup>${Cr} = 3<sup><i>n</i></sup>.`,
          },
          { f: 'Filter', note: `${FILTER} = 1 if ${k} ∣ ${m}, else 0, where ${WK} = ${EP('2π<i>i</i>/<i>k</i>')}.` },
          { f: 'Multisection', note: `${SUMR('<i>r</i>≡<i>a</i> (mod <i>k</i>)')} ${nCr} = ${MSEC}.` },
          {
            f: 'Cube roots',
            note: `${w}<sup>3</sup> = 1, 1 + ${w} + ${w}<sup>2</sup> = 0, 1 + ${w} = ${EP('<i>i</i>π/3')}, 1 + ${w}<sup>2</sup> = ${EP('−<i>i</i>π/3')}.`,
          },
          { f: 'Period 2', note: `${C0} + ${C2} + ⋯ = ${C1} + ${C3} + ⋯ = 2<sup><i>n</i>−1</sup> (${n} ≥ 1).` },
          {
            f: 'Period 3',
            note: `${SUMR('<i>r</i>≡<i>a</i> (mod 3)')} ${Cr} = ${P3(fr('(<i>n</i> − 2<i>a</i>)π', '3'))}; the three sums add to 2<sup><i>n</i></sup>.`,
          },
          {
            f: 'Period 4 components',
            note: `${C0} − ${C2} + ${C4} − ⋯ = 2<sup><i>n</i>/2</sup> cos ${NPI4}; ${C1} − ${C3} + ${C5} − ⋯ = 2<sup><i>n</i>/2</sup> sin ${NPI4}.`,
          },
          { f: 'Period 4 classes', note: `${SUMR('<i>r</i>≡<i>a</i> (mod 4)')} ${Cr} = ${P4}.` },
          { f: 'Fast powers', note: `(1 + ${ii})<sup>2</sup> = 2${ii} ⇒ ${OPI} = (2${ii})<sup><i>n</i>/2</sup> for even ${n}.` },
          {
            f: 'Trigger conditions',
            note: `every ${k}th coefficient ⇒ ${k}th roots of unity. Signs flipping every index ⇒ ${x} = −1. Signs flipping every two indices ⇒ ${x} = ${ii}. A count restricted by a remainder on the size ⇒ multisection.`,
          },
        ],
        aids: [
          `“Period 2 is −1, period 3 is ${w}, period 4 is ${ii}.”`,
          `“Divide by ${k}, not by 2.”`,
          `“The ${k} pieces must rebuild 2<sup><i>n</i></sup>.”`,
          `“1 + ${w} ≠ 0; it is −${w}<sup>2</sup>.”`,
        ],
      },
    ],
  },
];
