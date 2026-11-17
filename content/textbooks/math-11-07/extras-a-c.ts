import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional topics A–C, pp. 624–645 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the supplement's Addenda A, B, C
 * "to Subtopic 01/02/06", lettered A–C (decision 29). The supplement's p. 624 opening
 * and its table (heading not copied) are A's "Introduction"; each topic then opens with
 * one line saying which topic it extends (new wording), its Exam Relevance box, then the
 * book's run-in headings: The idea, Key results (with its Procedures), Worked examples,
 * Practice exercises, Crack the MCQ, pitfalls and pro-tips, and the Cheat Sheet Box.
 * C's last two pro-tips and its cheat sheet run onto the top of p. 645; the
 * supplement's Subtopic 08 (Topic 08, another file) starts below them.
 * Figures 7.2 and 7.3 (captions p. 625, drawn p. 626) close A's "The idea"; Figure 7.4
 * (caption p. 632, drawn p. 633) closes B's. No unnumbered drawings. ⁿCᵣ with an italic
 * C, as the page sets it; a k-th root as a raised k before √. Every fraction is stacked
 * (<frac>), except inside a raised run; no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const T = (s: string) => `<i>T</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const P = (base: string, e: string) => `${base}<sup>${e}</sup>`;
const rt = (k: string, v: string) => `<sup>${k}</sup>√${v}`;

const a = '<i>a</i>';
const b = '<i>b</i>';
const n = '<i>n</i>';
const r = '<i>r</i>';
const x = '<i>x</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const N = '<i>N</i>';
const K = '<i>K</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const d = '<i>d</i>';
const M = '<i>M</i>';
const I = '<i>I</i>';
const f = '<i>f</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const r0 = '<i>r</i><sub>0</sub>';

const TR1 = T('<i>r</i>+1');
const nCr = C(n, r);
const NCr = C(N, r);
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

// Additional topic A
const APB = (e: string) => P(`(${a} + ${b})`, e);
const AMB = (e: string) => P(`(${a} − ${b})`, e);
const XPA = (e: string) => P(`(${x} + ${a})`, e);
const XMA = (e: string) => P(`(${x} − ${a})`, e);
const ANR = `${a}<sup><i>n</i>−<i>r</i></sup>${b}<sup><i>r</i></sup>`;
const S32 = (e: string) => P('(√3 + √2)', e);
const M32 = (e: string) => P('(√3 − √2)', e);
const SUM_EVEN = `2[${C(n, '0')}${a}<sup>${n}</sup> + ${C(n, '2')}${a}<sup><i>n</i>−2</sup>${b}<sup>2</sup> + ${C(n, '4')}${a}<sup><i>n</i>−4</sup>${b}<sup>4</sup> + ⋯]`;
const SUM_ODD = `2[${C(n, '1')}${a}<sup><i>n</i>−1</sup>${b} + ${C(n, '3')}${a}<sup><i>n</i>−3</sup>${b}<sup>3</sup> + ${C(n, '5')}${a}<sup><i>n</i>−5</sup>${b}<sup>5</sup> + ⋯]`;
const HALFN = fr(n, '2');
const OPX = P(`(1 + ${x})`, n);

// Additional topic B
const GTB = `${TR1} = ${NCr} ${p}<sup>(<i>N</i>−<i>r</i>)/<i>α</i></sup>${q}<sup><i>r</i>/<i>β</i></sup>`;
const LCM = `lcm(${al}, ${be})`;
const COUNT = `⌊${fr(`${N} − ${r0}`, LCM)}⌋ + 1`;
const R2_5 = P(`(√2 + ${rt('5', '3')})`, '10');
const T10 = `${TR1} = ${C('10', r)}(2<sup>1/2</sup>)<sup>10−<i>r</i></sup>(3<sup>1/5</sup>)<sup><i>r</i></sup><br>= ${C('10', r)} 2<sup>(10−<i>r</i>)/2</sup>3<sup><i>r</i>/5</sup>`;

// Additional topic C
const K2 = `${K}<sup>2</sup>`;
const K3 = `${K}<sup>3</sup>`;
const OPK = P(`(1 + ${K})`, n);
const MODK2 = `(mod ${K2})`;
const E9 = '9<sup><i>n</i>+1</sup>';
const E3 = '3<sup>2<i>n</i>+2</sup>';
const FLAG = `${E9} − 8${n} − 9`;
const N1CR = C('<i>n</i>+1', r);
const SUMN1 = SUM(`${r}=2`, '<i>n</i>+1');
const TAIL64 = `64 ${SUMN1} ${N1CR} 8<sup><i>r</i>−2</sup>`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 624–631 ────────────────
  {
    n: 'A',
    title: 'Conjugate-Pair Expansions and Exact Evaluation',
    extra: true,
    kalam: 'The sum keeps exactly the even values of r (including r = 0); the difference keeps exactly the odd values of r.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This supplement adds four pieces of machinery that the main chapter’s seven topics state at most in passing and never drill. Three of them are short addenda that clip onto existing topics: read each one immediately after the topic it names. The fourth is a full new topic (Topic 08), because the technique it teaches (multisection by roots of unity) appears nowhere in Topic 01 to Topic 07 and is a genuine JEE Advanced tool in its own right.',
      },
      {
        t: 'table',
        title: null,
        head: ['Piece', 'Attaches to', 'What it gives you'],
        rows: [
          ['Additional topic A', 'Topic 01', `Conjugate-pair expansions ${APB(n)} ± ${AMB(n)}, surd evaluation, exact numerical powers`],
          ['Additional topic B', 'Topic 02', 'Counting rational and integral terms in an expansion of surds'],
          ['Additional topic C', 'Topic 06', `Divisibility proofs that need <b>two</b> surviving terms: the mod ${K2} machinery`],
          ['Topic 08', 'new (extends Topic 04)', `Multisection: sums of every ${k}th binomial coefficient, via <i>ω</i> and <i>i</i>`],
        ],
      },
      {
        t: 'p',
        html: `Throughout, notation follows the main chapter: ${nCr} for the binomial coefficient, ${TR1} = ${nCr} ${ANR} for the general term, and <i>C</i><sub><i>r</i></sub> as shorthand for ${nCr} wherever a single fixed ${n} is in play.`,
      },
      { t: 'p', html: 'This additional topic extends Topic 01.' },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is a guaranteed NCERT exercise family and a standard CBSE Class 11 short-answer question at 2–3 marks: “find ${APB('4')} − ${AMB('4')} and hence evaluate ${S32('4')} − ${M32('4')}”, or “evaluate (102)<sup>5</sup> using the binomial theorem”. JEE Main recycles the same identity as a term-counting question, “the number of terms in ${XPA('53')} + ${XMA('53')}”, which is pure bookkeeping and free marks if you know the rule. JEE Advanced uses the same cancellation as a step inside integral/fractional-part problems, which is exactly where Topic 06 met it.`,
      },

      { t: 'part', title: 'The idea' },
      {
        t: 'p',
        html: `Topic 06 used the cancellation between (${p} + √${q})<sup>${n}</sup> and (${p} − √${q})<sup>${n}</sup> as one line inside a larger proof. It deserves to be a technique of its own, because on its own it turns ugly-looking surd arithmetic into a two-line calculation.`,
      },
      {
        t: 'p',
        html: `Think about it this way. Write the two expansions one above the other:<br>${APB(n)} = ${SUM(`${r}=0`, n)} ${nCr} ${ANR},<br>${AMB(n)} = ${SUM(`${r}=0`, n)}(−1)<sup>${r}</sup> ${nCr} ${ANR}.`,
      },
      {
        t: 'p',
        html: `They are the same list of terms; the only difference is that the second list flips the sign of every odd-${r} entry. So when you <b>add</b> the lists, the odd-${r} entries destroy each other and the even-${r} entries double. When you <b>subtract</b>, the reverse happens. <b>You never lose the terms you keep: you double them.</b> That factor of 2 is the single most-forgotten thing in this whole additional topic.`,
      },
      { t: 'fig', id: 'm11-07-fig-7.2' },
      { t: 'fig', id: 'm11-07-fig-7.3' },

      { t: 'part', title: 'Key results' },
      { t: 'p', html: `<b>The two conjugate identities.</b> For ${n} ∈ ℕ,` },
      {
        t: 'formula',
        kicker: 'The two conjugate identities',
        main: `${APB(n)} + ${AMB(n)}<br>= ${SUM_EVEN},<br>${APB(n)} − ${AMB(n)}<br>= ${SUM_ODD}.`,
        legend: [`${a}, ${b} = the two parts of the binomial`, `${n} = the index (${n} ∈ ℕ)`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${a}, ${b}: the two parts of the binomial; they may be numbers, surds or algebraic expressions.<br>• The sum keeps exactly the <b>even</b> values of ${r} (including ${r} = 0); the difference keeps exactly the <b>odd</b> values of ${r}.<br>• Both sums stop at ${r} = ${n}, so the last surviving index is ${n} or ${n} − 1 according to parity.`,
      },
      { t: 'p', html: `<b>Number of terms.</b> The full expansion has ${n} + 1 terms; each combination takes a share of them.` },
      {
        t: 'table',
        title: null,
        head: ['', `${XPA(n)} + ${XMA(n)}`, `${XPA(n)} − ${XMA(n)}`],
        rows: [
          [`${n} even`, `${HALFN} + 1`, HALFN],
          [`${n} odd`, fr('<i>n</i>+1', '2'), fr('<i>n</i>+1', '2')],
          ['unified', `⌊${HALFN}⌋ + 1`, `⌈${HALFN}⌉`],
        ],
      },
      {
        t: 'p',
        html: `Validity: ${x} ≠ 0, ${a} ≠ 0, ${n} ∈ ℕ. The two counts always add to ${n} + 1, which is your instant check.`,
      },
      {
        t: 'p',
        html: `<b>Why this evaluates surds cleanly.</b> Put ${a} = √${p} and ${b} = √${q} with ${p}, ${q} positive rationals. In the <b>sum</b>, every surviving ${b}<sup>${r}</sup> has even ${r}, so ${b}<sup>${r}</sup> = ${q}<sup><i>r</i>/2</sup> is rational. In the <b>difference</b>, every surviving ${b}<sup>${r}</sup> has odd ${r}, so ${b}<sup>${r}</sup> = ${q}<sup>(<i>r</i>−1)/2</sup>√${q} carries exactly one √${q}. Combined with the parity of ${n} − ${r} on the ${a} side, the outcome is always one of two clean shapes:<br>a rational number, or (a rational number) × (a single surd).`,
      },
      {
        t: 'p',
        html: `<b>The truncation bound (for size comparisons).</b> For ${x} > 0 and ${n} ≥ 2, every term of ${OPX} after the first two is strictly positive, so`,
      },
      {
        t: 'formula',
        kicker: 'The truncation bound (for size comparisons)',
        main: `${OPX} > 1 + ${n}${x}`,
        legend: [`${x} = a positive number (${x} > 0)`, `${n} = the index (${n} ≥ 2)`],
        note: null,
      },
      {
        t: 'p',
        html: 'That one inequality settles “which is larger” questions without any computation. For instance<br>(1.1)<sup>10000</sup> > 1 + 10000(0.1)<br>= 1001 > 1000,<br>so (1.1)<sup>10000</sup> is the larger of (1.1)<sup>10000</sup> and 1000.',
      },
      {
        t: 'proc',
        title: 'Procedure A1: evaluating a conjugate sum or difference',
        steps: [
          `<b>Match the pattern.</b> Write both brackets with the same ${a} and ${b}; check that they differ only in the sign of ${b}. <b>Why:</b> if the two brackets are not genuine conjugates, nothing cancels.`,
          `<b>Choose the half.</b> Adding keeps even ${r}; subtracting keeps odd ${r}. <b>Why:</b> the sign flip in ${AMB(n)} is (−1)<sup>${r}</sup>.`,
          '<b>Write the surviving half with the factor 2 out front.</b> <b>Why:</b> the kept terms appear once in each bracket.',
          `<b>Count the surviving terms</b> using the table and confirm it against ${n} + 1. <b>Why:</b> a five-second guard against dropping a term.`,
          '<b>Substitute the numerical values.</b> Every surviving power is now easy, because Step 2 already guaranteed the parities are convenient.',
          `<b>Sanity check the shape.</b> A sum-with-even-${n} must come out rational; a difference must come out as a rational multiple of one surd. An answer of the wrong shape means a lost term.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure A2: exact numerical evaluation by expansion',
        steps: [
          '<b>Split the base against the nearest round number</b>: 102 = 100 + 2, 96 = 100 − 4, 99 = 100 − 1. <b>Why:</b> powers of 100 are just shifts, so all the arithmetic becomes trivial.',
          '<b>Write the full expansion</b>: every term, because you want the exact value, not an approximation.',
          '<b>Evaluate each term separately and line the digits up</b> by place value before adding. <b>Why:</b> almost every mistake here is a misaligned zero, not a wrong binomial coefficient.',
          '<b>Watch the signs</b> when the split is a subtraction: signs alternate +, −, +, −.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'A1: CBSE Board Level',
        q: `Find ${APB('4')} − ${AMB('4')}, and hence evaluate ${S32('4')} − ${M32('4')}.`,
        steps: [
          `Here ${n} = 4, so the difference keeps the odd indices ${r} = 1 and ${r} = 3:<br>${APB('4')} − ${AMB('4')}<br>= 2[${C('4', '1')}${a}<sup>3</sup>${b} + ${C('4', '3')}${a}${b}<sup>3</sup>]<br>= 2[4${a}<sup>3</sup>${b} + 4${a}${b}<sup>3</sup>] = 8${a}${b}(${a}<sup>2</sup> + ${b}<sup>2</sup>).`,
          `Term count check: ${n} = 4 is even, so the difference should have ${HALFN} = 2 terms. It does.`,
          `Now put ${a} = √3, ${b} = √2, so ${a}${b} = √6, ${a}<sup>2</sup> = 3, ${b}<sup>2</sup> = 2:<br>${S32('4')} − ${M32('4')}<br>= 8√6(3 + 2) = 40√6.`,
          'Shape check: a difference of conjugate surds, so the answer should be a rational multiple of a single surd. It is.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A2: CBSE Board Level',
        q: `Find ${P(`(${x} + 1)`, '6')} + ${P(`(${x} − 1)`, '6')}, and hence evaluate ${P('(√2 + 1)', '6')} + ${P('(√2 − 1)', '6')}.`,
        steps: [
          `Here ${n} = 6, and the sum keeps the even indices ${r} = 0, 2, 4, 6:<br>${P(`(${x} + 1)`, '6')} + ${P(`(${x} − 1)`, '6')}<br>= 2[${C('6', '0')}${x}<sup>6</sup> + ${C('6', '2')}${x}<sup>4</sup> + ${C('6', '4')}${x}<sup>2</sup> + ${C('6', '6')}]<br>= 2[${x}<sup>6</sup> + 15${x}<sup>4</sup> + 15${x}<sup>2</sup> + 1].`,
          `Term count check: ${n} = 6 even, sum should have ${fr('6', '2')} + 1 = 4 terms. It does.`,
          `Put ${x} = √2, so ${x}<sup>2</sup> = 2, ${x}<sup>4</sup> = 4, ${x}<sup>6</sup> = 8:<br>2[8 + 15(4) + 15(2) + 1]<br>= 2[8 + 60 + 30 + 1] = 2(99) = 198.`,
          'Notice what happened: an expression built entirely out of irrational numbers collapsed to a whole number. That is the cancellation of Topic 06 doing its work, and it is exactly why this identity is the engine behind integral-part problems.',
        ],
        ans: `${P('(√2 + 1)', '6')} + ${P('(√2 − 1)', '6')} = 198.`,
      },
      {
        t: 'ex',
        tag: 'A3: JEE Main: Speed Trap',
        q: `Find the number of terms in the expansion of ${XPA('100')} + ${XMA('100')}, and in ${XPA('100')} − ${XMA('100')}.`,
        steps: [
          `The trap: the phrase “number of terms” makes students reach for ${n} + 1 = 101, or, having remembered that half the terms die, for ${fr('101', '2')} rounded to 50 or 51 at random. Both halves cannot be 51, and neither can be 101.`,
          `The correct move is to count indices, not to divide blindly. The surviving indices are:<br>• Sum: ${r} = 0, 2, 4, …, 100: that is ${fr('100', '2')} + 1 = 51 terms.<br>• Difference: ${r} = 1, 3, 5, …, 99: that is ${fr('100', '2')} = 50 terms.`,
          `Check: 51 + 50 = 101 = ${n} + 1. The seductive wrong answer here is 51 for <b>both</b>, which fails this check instantly.`,
        ],
        ans: '51 and 50.',
      },
      {
        t: 'ex',
        tag: 'A4: JEE Advanced Level',
        q: `Evaluate ${P('(2 + √3)', '5')} + ${P('(2 − √3)', '5')} exactly, and use the result to find the integral part of ${P('(2 + √3)', '5')}.`,
        steps: [
          `Take ${a} = 2, ${b} = √3, ${n} = 5. The sum keeps the even indices ${r} = 0, 2, 4 (three terms, as ⌊${fr('5', '2')}⌋ + 1 = 3):<br>${P('(2 + √3)', '5')} + ${P('(2 − √3)', '5')}<br>= 2[${C('5', '0')} 2<sup>5</sup> + ${C('5', '2')} 2<sup>3</sup>(√3)<sup>2</sup> + ${C('5', '4')} 2(√3)<sup>4</sup>].`,
          `Term by term: ${C('5', '0')} 2<sup>5</sup> = 32; ${C('5', '2')} 2<sup>3</sup>(3) = 10 ⋅ 8 ⋅ 3 = 240; ${C('5', '4')} 2(9) = 5 ⋅ 2 ⋅ 9 = 90. Hence<br>${P('(2 + √3)', '5')} + ${P('(2 − √3)', '5')}<br>= 2(32 + 240 + 90) = 2(362) = 724.`,
          `Now the integral part. Since √3 ≈ 1.732, we have 0 < 2 − √3 ≈ 0.268 < 1, so 0 < ${P('(2 − √3)', '5')} < 1, the conjugate check demanded by Topic 06. Write ${P('(2 + √3)', '5')} = ${I} + ${f} with ${I} ∈ ℤ and 0 ≤ ${f} < 1, and ${f}′ = ${P('(2 − √3)', '5')} ∈ (0, 1). Then ${I} + ${f} + ${f}′ = 724 is an integer, and since ${f} + ${f}′ ∈ (0, 2) it must equal 1. Therefore<br>${I} = 724 − 1 = 723.`,
          `The integral part of ${P('(2 + √3)', '5')} is 723, and its fractional part is 1 − ${P('(2 − √3)', '5')}. Note how the conjugate identity did all the work: it produced the integer 724, and the smallness of the conjugate did the rest.`,
        ],
        ans: `${I} = 724 − 1 = 723.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE Board] Find ${APB('4')} + ${AMB('4')} and hence evaluate ${S32('4')} + ${M32('4')}.`,
            a: `2(${a}<sup>4</sup> + 6${a}<sup>2</sup>${b}<sup>2</sup> + ${b}<sup>4</sup>); value = 2(9 + 36 + 4) = 98.`,
          },
          { q: '[CBSE Board] Evaluate (101)<sup>4</sup> exactly using the binomial theorem.', a: '104060401.' },
          { q: '[CBSE Board] Evaluate (99)<sup>5</sup> exactly using the binomial theorem.', a: '9509900499.' },
          { q: '[CBSE Board] Evaluate (102)<sup>5</sup> exactly using the binomial theorem.', a: '11040808032.' },
          {
            q: `[JEE Main] Find the number of terms in the expansion of ${XPA('53')} + ${XMA('53')}.`,
            a: `27 (the even indices ${r} = 0, 2, …, 52).`,
          },
          { q: `[JEE Main] Evaluate ${P('(√5 + 1)', '5')} − ${P('(√5 − 1)', '5')}.`, a: '352.' },
          { q: `[JEE Advanced] Evaluate ${S32('6')} + ${M32('6')}.`, a: '970.' },
          {
            q: '[JEE Advanced] Which is larger, (1.01)<sup>1000</sup> or 10? Justify with a truncation bound.',
            a: '(1.01)<sup>1000</sup> is larger: (1.01)<sup>1000</sup> > 1 + 1000(0.01) = 11 > 10.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The number of terms in the expansion of ${XPA('47')} − ${XMA('47')} is:`,
        opts: [
          {
            label: '23',
            nudge: `<b>(a)</b> 23 comes from applying the even-${n} rule ${HALFN} and truncating ${fr('47', '2')} downwards: the rule for a difference splits by parity and ${n} here is odd.`,
          },
          { label: '24', nudge: null },
          { label: '47', nudge: `<b>(c)</b> 47 is ${n} itself, the chapter’s signature off-by-one, now transplanted into a halved count.` },
          {
            label: '48',
            nudge: `<b>(d)</b> 48 is ${n} + 1, the count for the full expansion, from a student who forgot that half the terms cancel.`,
          },
        ],
        correct: 1,
        solution: `With ${n} = 47 odd, the difference keeps the odd indices ${r} = 1, 3, …, 47, which is ${fr('47+1', '2')} = 24 values.`,
      },
      {
        t: 'mcq',
        q: `${P('(√5 + √2)', '4')} + ${P('(√5 − √2)', '4')} equals:`,
        opts: [
          {
            label: '89',
            nudge: '<b>(a)</b> 89 drops the factor of 2: the single most common error in this additional topic, because the surviving terms are doubled, not merely kept.',
          },
          { label: '178', nudge: null },
          {
            label: '89 + 28√10',
            nudge: `<b>(c)</b> 89 + 28√10 is the value of ${P('(√5 + √2)', '4')} alone; the student expanded one bracket and forgot to add the conjugate, which is precisely what kills the surd.`,
          },
          {
            label: '56√10',
            nudge: '<b>(d)</b> 56√10 is what you get by keeping the <b>odd</b> indices, i.e. by applying the difference rule to a sum.',
          },
        ],
        correct: 1,
        solution: `The sum keeps ${r} = 0, 2, 4:<br>2[${a}<sup>4</sup> + 6${a}<sup>2</sup>${b}<sup>2</sup> + ${b}<sup>4</sup>] = 2[25 + 6(10) + 4]<br>= 2(89) = 178.`,
      },
      {
        t: 'mcq',
        q: `${S32('4')} − ${M32('4')} equals:`,
        opts: [
          { label: '40√6', nudge: null },
          { label: '98', nudge: '<b>(b)</b> 98 is the conjugate <b>sum</b>, not the difference: the student picked the wrong identity from the pair.' },
          {
            label: '20√6',
            nudge: `<b>(c)</b> 20√6 is the factor-of-2 slip again: 4${a}<sup>3</sup>${b} + 4${a}${b}<sup>3</sup> evaluated without doubling.`,
          },
          { label: '0', nudge: '<b>(d)</b> 0 is the student who assumes conjugates always annihilate completely; only half the terms do.' },
        ],
        correct: 0,
        solution: 'From Example A1.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the factor 2.</b> The surviving terms appear in both brackets, so they double. If your answer for a conjugate sum is exactly half of the right one, this is why.',
          `<b>Keeping the wrong half.</b> Adding kills the odd-${r} terms; subtracting kills the even-${r} terms. Memory hook: <b>“add and the odd ones go”</b>.`,
          `<b>Counting terms as ${fr('<i>n</i>+1', '2')} always.</b> That is only right for odd ${n}. For even ${n} the two counts differ by one: check that they add to ${n} + 1.`,
          '<b>Expanding both brackets in full and then subtracting.</b> Half your work is guaranteed to be discarded. Write only the surviving half from the start.',
          `<b>Losing ${r} = 0.</b> The sum’s first surviving term is ${C(n, '0')}${a}<sup>${n}</sup>, at ${r} = 0. It is easy to start counting at ${r} = 2.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: read the shape before you compute.</b> A conjugate sum with even ${n} and pure-surd parts is a rational number; a conjugate difference is a rational multiple of one surd. If your working produces a mixture like 5 + 3√6, you have kept a term that should have cancelled. This catches errors before you finish the arithmetic.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: pair with Topic 06.</b> Whenever a question hands you (${p} + √${q})<sup>${n}</sup> and asks for an integral or fractional part, your first written line should be the conjugate sum or difference. It converts the problem into an integer plus a provably tiny remainder.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${APB(n)} + ${AMB(n)}<br>= 2[${C(n, '0')}${a}<sup>${n}</sup> + ${C(n, '2')}${a}<sup><i>n</i>−2</sup>${b}<sup>2</sup> + ⋯]`, note: `keeps <b>even</b> ${r}.` },
          { f: `${APB(n)} − ${AMB(n)}<br>= 2[${C(n, '1')}${a}<sup><i>n</i>−1</sup>${b} + ${C(n, '3')}${a}<sup><i>n</i>−3</sup>${b}<sup>3</sup> + ⋯]`, note: `keeps <b>odd</b> ${r}.` },
          { f: 'Term counts', note: `sum = ⌊${HALFN}⌋ + 1; difference = ⌈${HALFN}⌉; they add to ${n} + 1.` },
          { f: 'Surd shape', note: `conjugate sums go rational for even ${n} (or a rational first part); conjugate differences go (rational) × (one surd).` },
          { f: 'Exact powers', note: 'split against a round number, e.g. (102)<sup>5</sup> = (100 + 2)<sup>5</sup>, and expand fully.' },
          { f: `Truncation bound (${x} > 0, ${n} ≥ 2)`, note: `${OPX} > 1 + ${n}${x}: settles size comparisons instantly.` },
        ],
        aids: ['“Add and the odd ones go.”', '“Keep half, double it.”', `“Counts must add to ${n} + 1.”`],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 631–639 ────────────────
  {
    n: 'B',
    title: 'Rational and Integral Terms in a Surd Expansion',
    extra: true,
    kalam: 'The binomial coefficient is always a whole number, so the only thing that can make a term irrational is a leftover root.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'This additional topic extends Topic 02.' },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A reliable JEE Main pattern (“the number of rational terms in (√2 + 3<sup>1/5</sup>)<sup>10</sup>”, “the number of integral terms in (5<sup>1/2</sup> + 7<sup>1/8</sup>)<sup>1024</sup>”, “the sum of the rational terms in …”), appearing most years in one form or another ${ESTIMATE}. JEE Advanced raises it by choosing an index that makes the two divisibility conditions genuinely interact, so that the qualifying values of ${r} do not start at ${r} = 0. It is beyond the rationalised CBSE Class 11 core, but it is nothing more than Topic 02’s “specific term” algorithm with an integrality condition bolted on, so it costs you almost nothing to learn.`,
      },

      { t: 'part', title: 'The idea' },
      {
        t: 'p',
        html: `Topic 02’s whole engine was: write the general term, collect ${x} into one power <i>E</i>(${r}), impose a condition on <i>E</i>(${r}), solve for ${r}, and check that ${r} is a valid integer. This additional topic runs the same engine with a different condition.`,
      },
      { t: 'p', html: `Think about it this way. Take ${R2_5}. The general term is<br>${T10}.` },
      {
        t: 'p',
        html: `The binomial coefficient is always a whole number, so the only thing that can make a term irrational is a leftover root. <b>A term is rational exactly when both fractional exponents clear at the same time</b>: when ${fr(`10 − ${r}`, '2')} and ${fr(r, '5')} are simultaneously non-negative integers. That is two divisibility conditions on one unknown ${r}, and solving them together is the entire problem.`,
      },
      {
        t: 'p',
        html: `The word “simultaneously” is where marks are lost. Clearing one exponent is easy; students count the ${r} that clear the harder-looking exponent, forget the other condition, and hand in a count that is far too big.`,
      },
      { t: 'fig', id: 'm11-07-fig-7.4' },

      { t: 'part', title: 'Key results' },
      {
        t: 'p',
        html: `<b>The setting.</b> Let ${p} and ${q} be <b>distinct primes</b> (the standard exam setting), and let ${al}, ${be} be positive integers. Consider<br>(${p}<sup>1/<i>α</i></sup> + ${q}<sup>1/<i>β</i></sup>)<sup>${N}</sup>, ${N} ∈ ℕ.<br>The general term is`,
      },
      {
        t: 'formula',
        kicker: 'General term of a surd expansion',
        main: `${GTB},<br>${r} = 0, 1, …, ${N}.`,
        legend: [
          `${p}<sup>1/<i>α</i></sup>, ${q}<sup>1/<i>β</i></sup> = the two surd parts`,
          `${p}, ${q} = distinct primes`,
          `${al}, ${be} = the root orders`,
          `${N} = the index`,
          `${r} = the term index (an integer in [0, ${N}])`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${p}<sup>1/<i>α</i></sup>, ${q}<sup>1/<i>β</i></sup>: the two surd parts.<br>• ${al}, ${be}: the root orders (the denominators of the exponents).<br>• ${N}: the index; ${r}: the term index, an integer in [0, ${N}].`,
      },
      {
        t: 'p',
        html: `<b>Rationality criterion.</b> Because ${p} and ${q} are distinct primes, ${TR1} is rational if and only if`,
      },
      {
        t: 'formula',
        kicker: 'Rationality criterion',
        main: `${al} ∣ (${N} − ${r}) and ${be} ∣ ${r}`,
        legend: [`${p}, ${q} = distinct primes (the bases)`, `${al}, ${be} = the root orders`, `${N} = the index`, `${r} = the term index`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Rational means integral here.</b> When those two conditions hold, both exponents are non-negative integers and ${NCr} is a positive integer, so ${TR1} is a positive <b>integer</b>. In this family of problems “number of rational terms” and “number of integral terms” are therefore the same count: a question may ask either.`,
      },
      {
        t: 'p',
        html: `<b>Structure of the solution set.</b> The qualifying values of ${r} form an arithmetic progression with common difference ${LCM}, starting at the smallest ${r0} ∈ [0, ${N}] that satisfies both conditions. Hence`,
      },
      {
        t: 'formula',
        kicker: 'Number of rational terms',
        main: `number of rational terms<br>= ${COUNT}`,
        legend: [`${r0} = the smallest qualifying ${r} (the count is 0 if none exists)`, `${N} = the index`, `${al}, ${be} = the root orders`],
        note: null,
      },
      { t: 'p', html: `provided such an ${r0} exists; if no ${r} satisfies both conditions, the count is 0.` },
      {
        t: 'p',
        html: `<b>Special case worth memorising.</b> If ${al} ∣ ${N}, then ${al} ∣ (${N} − ${r}) ⟺ ${al} ∣ ${r}, so the criterion collapses to ${LCM} ∣ ${r}, and the qualifying ${r} start at ${r0} = 0. This is the easy case that most textbook problems use, but do not assume it. When ${al} ∤ ${N}, the progression starts somewhere in the middle, and it may not exist at all.`,
      },
      { t: 'p', html: `<b>Irrational terms.</b> The expansion has ${N} + 1 terms in total, so` },
      {
        t: 'formula',
        kicker: 'Irrational terms',
        main: `number of irrational terms<br>= (${N} + 1) − (number of rational terms)`,
        legend: [`${N} = the index`],
        note: null,
      },
      {
        t: 'proc',
        title: 'Procedure B1: counting rational or integral terms',
        steps: [
          `<b>Write the general term</b> and push both bases into single fractional powers: ${GTB}. <b>Why:</b> the conditions are conditions on exponents, so the exponents must be visible.`,
          `<b>Write down both integrality conditions</b>: ${al} ∣ (${N} − ${r}) and ${be} ∣ ${r}. <b>Why:</b> the binomial coefficient is always an integer, so the surd parts are the only obstruction.`,
          `<b>Convert to congruences</b>: ${r} ≡ ${N} (mod ${al}) and ${r} ≡ 0 (mod ${be}). <b>Why:</b> this form makes the interaction between the two conditions explicit instead of hoping they are compatible.`,
          `<b>Find the smallest ${r0} ∈ [0, ${N}] satisfying both.</b> If none exists, the answer is “no rational terms” and you stop. <b>Why:</b> the same non-existence discipline Topic 02 demands: do not force an answer.`,
          `<b>Step by</b> ${LCM} from ${r0} up to ${N} and count, remembering to include ${r0} itself. <b>Why:</b> the two congruences together have period ${LCM}.`,
          `<b>Answer what was asked.</b> Count of rational terms; count of irrational terms = (${N} + 1) − that count; or the sum of the rational terms, then evaluate each qualifying ${TR1}.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'B1: CBSE Board Level',
        q: `Find all rational terms in the expansion of ${R2_5}, and their sum.`,
        steps: [
          `General term:<br>${T10}.`,
          `Conditions: 2 ∣ (10 − ${r}), i.e. ${r} is even; and 5 ∣ ${r}.`,
          `From 5 ∣ ${r} with 0 ≤ ${r} ≤ 10: ${r} ∈ {0, 5, 10}. Of these, the even ones are ${r} = 0 and ${r} = 10; ${r} = 5 fails because 10 − 5 = 5 is odd, leaving a stray √2.`,
          `• ${r} = 0: ${T('1')} = ${C('10', '0')} 2<sup>5</sup> 3<sup>0</sup> = 32.<br>• ${r} = 10: ${T('11')} = ${C('10', '10')} 2<sup>0</sup> 3<sup>2</sup> = 9.`,
          'So there are exactly <b>two</b> rational terms, 32 and 9, and their sum is<br>32 + 9 = 41.',
          '(There are 11 − 2 = 9 irrational terms.)',
        ],
        ans: '32 + 9 = 41.',
      },
      {
        t: 'ex',
        tag: 'B2: JEE Main Level',
        q: 'Find the number of rational terms in the expansion of (3<sup>1/2</sup> + 5<sup>1/8</sup>)<sup>256</sup>.',
        steps: [
          `${TR1} = ${C('256', r)} 3<sup>(256−<i>r</i>)/2</sup>5<sup><i>r</i>/8</sup>.`,
          `Conditions: 8 ∣ ${r}, and 2 ∣ (256 − ${r}), i.e. ${r} even. Since 8 ∣ ${r} already forces ${r} to be even, the second condition is automatic here, but you must check that, not assume it.`,
          `So the qualifying values are ${r} = 0, 8, 16, …, 256, an AP with common difference 8. The count is<br>${fr('256 − 0', '8')} + 1 = 32 + 1 = 33.`,
          'The “+1” is the entire difficulty of this question. There are 32 steps of size 8 from 0 to 256, but 33 landing points.',
        ],
        ans: '33',
      },
      {
        t: 'ex',
        tag: 'B3: JEE Main: Speed Trap',
        q: `Find the number of rational terms in the expansion of ${P(`(√3 + ${rt('4', '5')})`, '101')}.`,
        steps: [
          `The trap: the shape looks identical to Example B2, so the reflex is to write “multiples of 4 from 0 to 100”, giving ${fr('100', '4')} + 1 = 26, and move on. That is the seductive wrong answer, and it is wrong because the index 101 is odd.`,
          `Do it properly:<br>${TR1} = ${C('101', r)} 3<sup>(101−<i>r</i>)/2</sup>5<sup><i>r</i>/4</sup>.`,
          `• Condition from the √3 part: 2 ∣ (101 − ${r}), so ${r} must be <b>odd</b>.<br>• Condition from the ${rt('4', '5')} part: 4 ∣ ${r}, so ${r} must be a multiple of 4, hence <b>even</b>.`,
          'No integer is both odd and even. The two conditions are incompatible, so<br>there is no rational term in the expansion.',
          `This is the same discipline as Topic 02’s Crack the MCQ part, question 4: when the condition on ${r} has no admissible solution, the honest answer is that the term does not exist. <b>The moment ${al} ∤ ${N}, check compatibility before counting anything.</b>`,
        ],
        ans: 'there is no rational term in the expansion.',
      },
      {
        t: 'ex',
        tag: 'B4: JEE Advanced Level',
        q: `Find the number of irrational terms in the expansion of ${P(`(${rt('8', '5')} + ${rt('6', '2')})`, '100')}.`,
        steps: [
          `${TR1} = ${C('100', r)} 5<sup>(100−<i>r</i>)/8</sup>2<sup><i>r</i>/6</sup>.`,
          `Conditions: 8 ∣ (100 − ${r}) and 6 ∣ ${r}. As congruences,<br>${r} ≡ 100 ≡ 4 (mod 8), ${r} ≡ 0 (mod 6).`,
          `Here 8 ∤ 100, so this is the awkward case: the qualifying ${r} do <b>not</b> start at 0. Write ${r} = 6${k} and impose the first congruence:<br>6${k} ≡ 4 (mod 8) ⟹ 3${k} ≡ 2 (mod 4).`,
          `Since 3 ⋅ 3 = 9 ≡ 1 (mod 4), multiply both sides by 3: ${k} ≡ 6 ≡ 2 (mod 4). So ${k} ∈ {2, 6, 10, 14, …}, giving<br>${r} = 12, 36, 60, 84, 108, …<br>and the constraint 0 ≤ ${r} ≤ 100 keeps ${r} ∈ {12, 36, 60, 84}: four values, spaced by lcm(8, 6) = 24, exactly as the structure result predicts.`,
          `Verify one of them: at ${r} = 36, the exponents are ${fr('100 − 36', '8')} = 8 and ${fr('36', '6')} = 6, both integers, so ${T('37')} = ${C('100', '36')} 5<sup>8</sup> 2<sup>6</sup> is an integer.`,
          'So there are 4 rational terms out of 101, and therefore',
        ],
        ans: 'number of irrational terms = 101 − 4 = 97.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Find the number of integral terms in the expansion of (5<sup>1/2</sup> + 7<sup>1/8</sup>)<sup>1024</sup>.',
            a: `129 (qualifying ${r} = 0, 8, …, 1024).`,
          },
          {
            q: `[JEE Main] Find the number of rational terms in the expansion of ${P(`(√2 + ${rt('4', '3')})`, '100')}.`,
            a: `26 (qualifying ${r} = 0, 4, …, 100).`,
          },
          {
            q: `[JEE Main] Find the sum of the rational terms in the expansion of ${P(`(√3 + ${rt('4', '2')})`, '8')}.`,
            a: `1345 (the terms are 81 at ${r} = 0, 1260 at ${r} = 4, 4 at ${r} = 8).`,
          },
          {
            q: `[JEE Main] In the expansion of ${P(`(${rt('5', '3')} + ${rt('10', '7')})`, '45')}, find how many terms are rational and how many are irrational.`,
            a: `5 rational (at ${r} = 0, 10, 20, 30, 40) and 41 irrational.`,
          },
          {
            q: `[JEE Advanced] Find the number of rational terms in the expansion of ${P(`(${rt('4', '2')} + ${rt('6', '3')})`, '36')}.`,
            a: `4 (qualifying ${r} = 0, 12, 24, 36).`,
          },
          {
            q: `[JEE Advanced] Find the number of integral terms in the expansion of ${P(`(${rt('3', '5')} + ${rt('7', '2')})`, '100')}.`,
            a: `5 (qualifying ${r} = 7, 28, 49, 70, 91).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The number of rational terms in the expansion of ${P(`(√3 + ${rt('8', '5')})`, '256')} is:`,
        opts: [
          {
            label: '32',
            nudge: `<b>(a)</b> 32 is ${fr('256', '8')}: the off-by-one that forgets ${r} = 0 is itself a valid, rational term.`,
          },
          { label: '33', nudge: null },
          {
            label: '129',
            nudge: `<b>(c)</b> 129 counts only the √3 condition (${r} even gives ${r} = 0, 2, …, 256, i.e. 129 values) and never imposes the ${rt('8', '5')} condition: the “one filter only” error.`,
          },
          {
            label: '257',
            nudge: `<b>(d)</b> 257 is ${N} + 1, the total number of terms, from a student who read the question as “how many terms are there”.`,
          },
        ],
        correct: 1,
        solution: `Need 8 ∣ ${r} and 256 − ${r} even; the first implies the second, so ${r} = 0, 8, …, 256, giving ${fr('256', '8')} + 1 = 33.`,
      },
      {
        t: 'mcq',
        q: 'In the expansion of (√2 + 3<sup>1/5</sup>)<sup>10</sup>, the number of irrational terms is:',
        opts: [
          { label: '2', nudge: '<b>(a)</b> 2 is the count of rational terms: reading the question backwards.' },
          { label: '9', nudge: null },
          { label: '10', nudge: '<b>(c)</b> 10 is the index itself, the term-count off-by-one from Topic 01.' },
          { label: '11', nudge: '<b>(d)</b> 11 is the total term count, i.e. forgetting to subtract the rational ones.' },
        ],
        correct: 1,
        solution: 'There are 11 terms in all and 2 of them are rational (Example B1), leaving 9.',
      },
      {
        t: 'mcq',
        q: `With ${p}, ${q} distinct primes, the term ${NCr} ${p}<sup>(<i>N</i>−<i>r</i>)/<i>α</i></sup>${q}<sup><i>r</i>/<i>β</i></sup> is rational precisely when:`,
        opts: [
          {
            label: `${al} ∣ ${r} and ${be} ∣ (${N} − ${r})`,
            nudge: `<b>(a)</b> swaps the two root orders: a pure bookkeeping slip that nonetheless changes the answer whenever ${al} ≠ ${be}.`,
          },
          { label: `${be} ∣ ${r} and ${al} ∣ (${N} − ${r})`, nudge: null },
          {
            label: `${al}${be} ∣ ${r}`,
            nudge: `<b>(c)</b> is wrong both ways. When ${al} ∣ ${N} it is too strong: ${al}${be} is a multiple of ${LCM} and discards genuine rational terms whenever ${al} and ${be} share a factor. When ${al} ∤ ${N} it keeps only irrational terms: in Example B4, 48 ∣ ${r} gives ${r} = 0, 48, 96, and none of them is rational.`,
          },
          {
            label: `${LCM} ∣ ${r}`,
            nudge: `<b>(d)</b> is the trap for students who only ever meet the friendly case ${al} ∣ ${N}; there it happens to be equivalent to <b>(b)</b>, but when ${al} ∤ ${N} (as in Example B4, where the qualifying ${r} start at 12, not 0) it is simply false.`,
          },
        ],
        correct: 1,
        solution: `The exponent of ${p} is ${fr(`${N} − ${r}`, al)}, so ${al} must divide ${N} − ${r}; the exponent of ${q} is ${fr(r, be)}, so ${be} must divide ${r}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Imposing only one condition.</b> Both exponents must clear together. Counting the multiples of ${be} alone usually over-counts.`,
          `<b>The off-by-one in an AP count.</b> From ${r0} to ${N} in steps of ${d} there are ⌊${fr(`${N} − ${r0}`, d)}⌋ + 1 terms, not ${fr(`${N} − ${r0}`, d)}. The endpoint ${r0} counts.`,
          `<b>Assuming the run starts at ${r} = 0.</b> It starts at 0 only when ${al} ∣ ${N}. Check that first; if it fails, solve the congruence pair properly.`,
          '<b>Assuming a rational term must exist.</b> As Example B3 shows, the two conditions can be flatly incompatible. Non-existence is a legitimate final answer, exactly as in Topic 02.',
          `<b>Confusing “rational” with “integral”.</b> In this standard setting they coincide, because the surviving exponents are non-negative integers and ${NCr} is an integer. Say so in a proof rather than silently switching words.`,
          '<b>Ignoring the distinct-primes hypothesis.</b> With bases like 2 and 8, or 3 and 9, extra terms can turn rational because the two bases share a prime. Exam problems use distinct primes; if a problem does not, check by hand.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: convert to congruences immediately.</b> Writing ${r} ≡ ${N} (mod ${al}) and ${r} ≡ 0 (mod ${be}) turns a guessing game into a two-line solve, and it tells you at once whether any solution exists.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the period is ${LCM}.</b> Once you have found one qualifying ${r}, every other is that many steps away. You never need to test values one by one.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Setting',
            note: `(${p}<sup>1/<i>α</i></sup> + ${q}<sup>1/<i>β</i></sup>)<sup>${N}</sup>, ${p} ≠ ${q} primes. General term ${GTB}.`,
          },
          { f: `<b>Rational</b> ⟺ ${al} ∣ (${N} − ${r}) <b>and</b> ${be} ∣ ${r} (both at once).`, note: '' },
          { f: 'Rational terms here are automatically <b>integers</b>.', note: '' },
          { f: `Qualifying ${r} form an AP with common difference ${LCM}, starting at the smallest valid ${r0}.`, note: '' },
          { f: `Count = ${COUNT}`, note: `if no valid ${r0} exists, the count is 0.` },
          { f: `If ${al} ∣ ${N}`, note: `the condition collapses to ${LCM} ∣ ${r} and ${r0} = 0.` },
          { f: `Irrational count = (${N} + 1) − rational count.`, note: '' },
        ],
        aids: [
          '“Both exponents must clear, or the term is out.”',
          '“Endpoints count: remember the +1.”',
          `“${al} ∤ ${N} means the run does not start at zero.”`,
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 639–645 ────────────────
  {
    n: 'C',
    title: 'Two-Term Divisibility and the mod K² Formula',
    extra: true,
    kalam: 'K² is the best guarantee, not K³: taking n = 2 gives (1 + K)² − 1 − 2K = K² exactly.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'This additional topic extends Topic 06.' },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Show that ${FLAG} is divisible by 64” is an NCERT exercise and a standard CBSE Class 11 3–4 mark proof; the identical problem appears as ${E3} − 8${n} − 9. JEE Main converts it into objective form: “the largest integer dividing … for every ${n}”, or a remainder modulo a perfect square such as 36, 64 or 225. JEE Advanced hides it inside last-two-digit problems where the linear term genuinely survives. Topic 06 already prints the formula ${OPK} ≡ 1 + ${n}${K} ${MODK2}; this additional topic is the training that turns it from a memorised line into a tool.`,
      },

      { t: 'part', title: 'The idea' },
      {
        t: 'p',
        html: `Every remainder example in Topic 06 collapsed to a single surviving term, because every term carrying a ${K} vanished modulo the divisor (in its last-two-digit example even the linear term, ${C('100', '1')} · 80 = 8000, is a multiple of 100). That habit is dangerous, because it teaches you to throw away the term you most need.`,
      },
      {
        t: 'p',
        html: `Think about it this way. Suppose your Mumbai local runs on a 64-minute cycle and you are told a journey takes ${E9} minutes. Splitting 9 = 1 + 8 tells you the journey is 1 minute plus a whole number of 8-minute blocks: useful modulo 8, useless modulo 64, because 8-minute blocks are not invisible on a 64-minute clock. To work modulo 64 = 8<sup>2</sup>, you must keep track of how many single blocks there are as well. <b>The rule is: to reduce modulo ${K}<sup>${m}</sup>, keep the first ${m} terms of the expansion of ${OPK} and discard the rest.</b> Topic 06’s worked examples always had ${m} = 1; this additional topic is the ${m} = 2 case.`,
      },
      {
        t: 'p',
        html: `Written out, the expansion says it all:<br>${OPK} = 1 (survives mod ${K})<br>+ ${n}${K} (survives mod ${K2})<br>+ ${C(n, '2')}${K2} + ${C(n, '3')}${K3} + ⋯ (all divisible by ${K2}).`,
      },
      {
        t: 'p',
        html: `Where this fails: if the divisor does not divide ${K2} for the ${K} you split with, the two-term formula gives you nothing. Match ${K} to the divisor first: ${K} = √divisor, or a ${K} whose square is a multiple of the divisor (${K} = 80 for 100, as in Example C4).`,
      },

      { t: 'part', title: 'Key results' },
      { t: 'p', html: `<b>The two-term identity.</b> For ${n} ∈ ℕ and any integer ${K},` },
      {
        t: 'formula',
        kicker: 'The two-term identity',
        main: `${OPK} = 1 + ${n}${K} + ${K2} ${SUM(`${r}=2`, n)} ${nCr} ${K}<sup><i>r</i>−2</sup>`,
        legend: [`${K} = the chosen split (any integer)`, `${n} = the exponent (a positive integer)`, `${r} = the summation index`],
        note: null,
      },
      {
        t: 'p',
        html: `where the sum is an integer (and is empty, hence zero, when ${n} ≤ 1). Consequently<br>${OPK} ≡ 1 + ${n}${K} ${MODK2}.`,
      },
      {
        t: 'p',
        html: `• ${K}: the chosen split, so that the base is 1 + ${K}; choose ${K} so that the <b>divisor equals ${K2}</b>.<br>• ${n}: the exponent, a positive integer.<br>• The congruence also holds modulo any divisor of ${K2}, which is what lets you use it for last-two-digit work with ${K} = 80 and modulus 100.`,
      },
      { t: 'p', html: `<b>The divisibility corollary.</b> For every ${n} ∈ ℕ,` },
      {
        t: 'formula',
        kicker: 'The divisibility corollary',
        main: `${K2} ∣ [${OPK} − 1 − ${n}${K}]`,
        legend: [`${K} = the chosen split`, `${n} = the exponent (${n} ∈ ℕ)`],
        note: null,
      },
      {
        t: 'p',
        html: `This is the exact shape of the NCERT problem: ${FLAG} is (1 + 8)<sup><i>n</i>+1</sup> − 1 − 8(${n} + 1), so it is divisible by 8<sup>2</sup> = 64.`,
      },
      {
        t: 'p',
        html: `<b>How much is guaranteed.</b> ${K2} is the best guarantee, not ${K3}: taking ${n} = 2 gives (1 + ${K})<sup>2</sup> − 1 − 2${K} = ${K2} exactly. So do not claim more than the formula gives.`,
      },
      {
        t: 'table',
        title: 'Comparison with the single-term case (the Topic 06 tools, extended)',
        head: ['Divisor', 'Terms to keep', 'Result'],
        rows: [
          [K, '1 term', `${OPK} ≡ 1 (mod ${K})`],
          [K2, '2 terms', `${OPK} ≡ 1 + ${n}${K} ${MODK2}`],
          [K3, '3 terms', `${OPK} ≡ 1 + ${n}${K} + ${C(n, '2')}${K2} (mod ${K3})`],
        ],
      },
      { t: 'p', html: `The general pattern: modulo ${K}<sup>${m}</sup>, keep the terms up to ${r} = ${m} − 1.` },
      {
        t: 'proc',
        title: 'Procedure C1: proving divisibility by a perfect square K²',
        steps: [
          `<b>Read the divisor and take its square root</b>: for 64, ${K} = 8; for 225, ${K} = 15; for 9, ${K} = 3. <b>Why:</b> the whole method rests on the divisor being ${K2} for the ${K} you are about to split with.`,
          `<b>Rewrite the power so its base is</b> 1 + ${K}. For example ${E9} = (1 + 8)<sup><i>n</i>+1</sup>; ${E3} = ${E9} = (1 + 8)<sup><i>n</i>+1</sup>; 16<sup>${n}</sup> = (1 + 15)<sup>${n}</sup>; 4<sup>${n}</sup> = (1 + 3)<sup>${n}</sup>. <b>Why:</b> only a base of the form 1 + ${K} produces the clean two-term head.`,
          `<b>Expand and write the head explicitly</b>, keeping the ${r} = 0 and ${r} = 1 terms and bundling the rest: (1 + ${K})<sup>${N}</sup> = 1 + ${N}${K} + ${SUM(`${r}=2`, N)} ${NCr}${K}<sup>${r}</sup>. <b>Why:</b> the tail is what you will hand to the divisor.`,
          `<b>Cancel the head against the linear part of the expression.</b> <b>Why:</b> the problem’s −8${n} − 9 (or −15${n} − 1, or −3${n} − 1) exists precisely to delete 1 + ${N}${K}. If it does not cancel exactly, re-check Step 2.`,
          `<b>Factor ${K2} out of every remaining term</b>, since each carries ${K}<sup>${r}</sup> with ${r} ≥ 2. <b>Why:</b> this is the conclusion: every survivor is a multiple of ${K2}.`,
          `<b>State the conclusion for all</b> ${n} ∈ ℕ, and, if the question asks for the largest such divisor, test the smallest ${n} that gives a non-zero value (${n} = 1 for ${FLAG}; ${n} = 2 for 4<sup>${n}</sup> − 3${n} − 1, where ${n} = 1 gives 0) to confirm you cannot do better.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C2: remainders modulo a perfect square',
        steps: [
          `<b>Identify the modulus</b> ${M} and find ${K} with ${M} ∣ ${K2} (usually ${M} = ${K2}; for last-two-digit work, ${M} = 100 with ${K} = 80, since 100 ∣ 6400, or ${K} = 10, since 100 = 10<sup>2</sup>).`,
          `<b>Adjust the exponent</b> so the base becomes 1 + ${K}: e.g. 3<sup>2018</sup> = 3<sup>2</sup>(3<sup>4</sup>)<sup>504</sup> = 9(1 + 80)<sup>504</sup>. <b>Why:</b> you get to choose which power of the base you split.`,
          `<b>Apply</b> ${OPK} ≡ 1 + ${n}${K} and reduce ${n}${K} modulo ${M}. <b>Why:</b> ${n}${K} is the term Topic 06’s examples always threw away, and it is usually nonzero here.`,
          '<b>Multiply back any leftover factor</b> from Step 2 and reduce again.',
          `<b>Shift the answer into 0 to ${M} − 1.</b>`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'C1: CBSE Board Level',
        q: `Show that ${FLAG} is divisible by 64 for every positive integer ${n}.`,
        steps: [
          `The divisor is 64 = 8<sup>2</sup>, so take ${K} = 8 and write 9 = 1 + 8:<br>${E9} = (1 + 8)<sup><i>n</i>+1</sup> = ${SUM(`${r}=0`, '<i>n</i>+1')} ${N1CR} 8<sup><i>r</i></sup><br>= 1 + (${n} + 1)8 + ${SUMN1} ${N1CR} 8<sup><i>r</i></sup>.`,
          `The head is 1 + 8${n} + 8 = 8${n} + 9. Therefore<br>${FLAG}<br>= (8${n} + 9) + ${SUMN1} ${N1CR} 8<sup><i>r</i></sup> − 8${n} − 9<br>= ${SUMN1} ${N1CR} 8<sup><i>r</i></sup>.`,
          `Every term of the remaining sum has ${r} ≥ 2, so it carries 8<sup><i>r</i></sup> = 64 ⋅ 8<sup><i>r</i>−2</sup> with 8<sup><i>r</i>−2</sup> a non-negative integer power. Factoring:<br>${FLAG} = ${TAIL64},<br>and the sum is an integer. Hence 64 divides ${FLAG} for every ${n} ∈ ℕ.`,
          `Spot check: ${n} = 1 gives 81 − 8 − 9 = 64; ${n} = 2 gives 729 − 16 − 9 = 704 = 64 × 11; ${n} = 3 gives 6561 − 24 − 9 = 6528 = 64 × 102.`,
          `Note that ${E3} = (3<sup>2</sup>)<sup><i>n</i>+1</sup> = ${E9}, so the frequently-set problem “show ${E3} − 8${n} − 9 is divisible by 64” is this identical proof after one line of index arithmetic.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C2: JEE Main Level',
        q: 'Find the remainder when 7<sup>100</sup> is divided by 36.',
        steps: [
          `The modulus 36 = 6<sup>2</sup> is a perfect square, so take ${K} = 6 and note 7 = 1 + 6:<br>7<sup>100</sup> = (1 + 6)<sup>100</sup><br>= 1 + 100(6) + ${SUM(`${r}=2`, '100')} ${C('100', r)} 6<sup><i>r</i></sup>.`,
          `Every term with ${r} ≥ 2 carries 6<sup>2</sup> = 36, so the whole tail vanishes modulo 36:<br>7<sup>100</sup> ≡ 1 + 600 = 601 (mod 36).`,
          'Reduce: 601 = 36 × 16 + 25, so<br>remainder = 25.',
          'Had you kept only the first term (the reflex Topic 06’s examples build), you would have said 7<sup>100</sup> ≡ 1, which is the right answer modulo 6 and the wrong answer modulo 36.',
        ],
        ans: 'remainder = 25.',
      },
      {
        t: 'ex',
        tag: 'C3: JEE Main: Speed Trap',
        q: `Find the largest positive integer that divides ${E3} − 8${n} − 9 for every positive integer ${n}.`,
        steps: [
          `The trap: ${E3} = ${E9} = (1 + 8)<sup><i>n</i>+1</sup>, and a student who keeps only the leading 1 gets ${E9} ≡ 1 (mod 8), concludes that ${E9} − 1 is a multiple of 8, and answers <b>8</b>. That answer is true but not largest, and in a single-answer objective it scores zero.`,
          `The fix is Procedure C1. Keeping two terms, Example C1 showed<br>${E3} − 8${n} − 9 = ${TAIL64},<br>so 64 divides the expression for every ${n}. Can anything larger work? Test the smallest case: ${n} = 1 gives the value 81 − 8 − 9 = 64. Any universal divisor must divide 64, so nothing larger than 64 is possible.`,
          `<b>Name the trap: keeping one term when the divisor is a square.</b> Whenever the expression has the form ${OPK} − 1 − ${n}${K}, or a rewrite of it such as ${FLAG}, assume the intended answer is ${K2}, and verify with the smallest ${n} that gives a non-zero value: ${n} = 1 for ${FLAG} (value 64), but ${n} = 2 for ${OPK} − 1 − ${n}${K} itself (value ${K2}), since ${n} = 1 gives 0.`,
        ],
        ans: 'Largest divisor = 64.',
      },
      {
        t: 'ex',
        tag: 'C4: JEE Advanced Level',
        q: 'Find the last two digits of 3<sup>2018</sup>.',
        steps: [
          `Last two digits means the value modulo 100. Choose the split by looking for a power of 3 that is one more than a multiple of 10: 3<sup>4</sup> = 81 = 1 + 80. So take ${K} = 80, and note ${K2} = 6400, which is a multiple of 100: that is what licenses the two-term formula here.`,
          'Write the exponent to expose 3<sup>4</sup>:<br>3<sup>2018</sup> = 3<sup>2</sup> ⋅ 3<sup>2016</sup> = 9(3<sup>4</sup>)<sup>504</sup><br>= 9(1 + 80)<sup>504</sup>.',
          'Apply the two-term identity modulo 6400, and hence modulo 100:<br>(1 + 80)<sup>504</sup> ≡ 1 + 504(80)<br>= 1 + 40320 (mod 100).',
          'Now 40320 ≡ 20 (mod 100), so (1 + 80)<sup>504</sup> ≡ 21 (mod 100). Multiply back the factor 9:<br>3<sup>2018</sup> ≡ 9 × 21 = 189 ≡ 89 (mod 100).',
          'This is the example that shows why the linear term matters: had you dropped 504 ⋅ 80, you would have answered 9, and the true answer is 89. Independent check: 3<sup>20</sup> ends in 01, and 2018 = 20(100) + 18, so 3<sup>2018</sup> ends in the same two digits as 3<sup>18</sup>; since 3<sup>10</sup> ends in 49 and 3<sup>8</sup> ends in 61, and 49 × 61 = 2989, 3<sup>18</sup> ends in 89.',
        ],
        ans: 'Last two digits = 89.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE Board] Show that ${E3} − 8${n} − 9 is divisible by 64 for all ${n} ∈ ℕ.`,
            a: `${E3} = ${E9} = (1 + 8)<sup><i>n</i>+1</sup>; head 1 + 8(${n} + 1) = 8${n} + 9 cancels, leaving ${TAIL64}.`,
          },
          {
            q: `[CBSE Board] Show that 4<sup>${n}</sup> − 3${n} − 1 is divisible by 9 for all ${n} ∈ ℕ.`,
            a: `4<sup>${n}</sup> = (1 + 3)<sup>${n}</sup>; head 1 + 3${n} cancels, leaving 9 ${SUM(`${r}=2`, n)} ${nCr} 3<sup><i>r</i>−2</sup>.`,
          },
          {
            q: '[JEE Main] Find the remainder when 9<sup>50</sup> is divided by 64.',
            a: '17 (since 9<sup>50</sup> = (1 + 8)<sup>50</sup> ≡ 1 + 400 = 401 ≡ 17 (mod 64)).',
          },
          {
            q: `[JEE Main] Find the largest integer that divides 10<sup>${n}</sup> + 3 ⋅ 4<sup><i>n</i>+2</sup> + 5 for every ${n} ∈ ℕ.`,
            a: `9 (mod 9: 10<sup>${n}</sup> ≡ 1, and 4<sup><i>n</i>+2</sup> = (1 + 3)<sup><i>n</i>+2</sup> ≡ 1 + 3(${n} + 2), so 3 ⋅ 4<sup><i>n</i>+2</sup> ≡ 9${n} + 21 ≡ 3; total 1 + 3 + 5 = 9 ≡ 0; and ${n} = 1 gives 207 = 9 × 23, ${n} = 2 gives 873 = 9 × 97, whose gcd is 9).`,
          },
          {
            q: `[JEE Advanced] Show that 2<sup>4<i>n</i></sup> − 15${n} − 1 is divisible by 225 for all ${n} ∈ ℕ.`,
            a: `2<sup>4<i>n</i></sup> = 16<sup>${n}</sup> = (1 + 15)<sup>${n}</sup> ≡ 1 + 15${n} (mod 225), so 2<sup>4<i>n</i></sup> − 15${n} − 1 is a multiple of 15<sup>2</sup> = 225.`,
          },
          {
            q: '[JEE Advanced] Find the last two digits of 3<sup>2014</sup>.',
            a: '69 (since 3<sup>2014</sup> = 9(1 + 80)<sup>503</sup> ≡ 9(1 + 40240) ≡ 9 × 41 = 369 ≡ 69 (mod 100)).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The largest positive integer that divides ${FLAG} for every positive integer ${n} is:`,
        opts: [
          {
            label: '8',
            nudge: '<b>(a)</b> 8 is what you get by keeping only the leading 1 of the expansion: true, but not the largest, and therefore wrong here.',
          },
          {
            label: '9',
            nudge: `<b>(b)</b> 9 comes from fixating on the base 9 rather than on the split ${K} = 8; it fails already at ${n} = 1, since 64 is not a multiple of 9.`,
          },
          { label: '64', nudge: null },
          { label: '72', nudge: '<b>(d)</b> 72 is 8 × 9, manufactured by multiplying the split by the base; 64 is not a multiple of 72.' },
        ],
        correct: 2,
        solution: `Example C1 proves 64 always divides it, and ${n} = 1 gives the value 64 exactly, so nothing larger can.`,
      },
      {
        t: 'mcq',
        q: `For an integer ${K} and ${n} ∈ ℕ, the highest power of ${K} that is guaranteed to divide ${OPK} − 1 − ${n}${K} is:`,
        opts: [
          { label: K, nudge: `<b>(a)</b> ${K} is a true but weaker statement: it discards the whole point of subtracting ${n}${K}.` },
          { label: K2, nudge: null },
          {
            label: K3,
            nudge: `<b>(c)</b> ${K3} over-claims: at ${n} = 2 the expression is exactly ${K2}, which is not a multiple of ${K3} in general.`,
          },
          {
            label: `${K}<sup>${n}</sup>`,
            nudge: `<b>(d)</b> ${K}<sup>${n}</sup> confuses the power of ${K} in the last term with what the whole expression is guaranteed to carry; the guarantee is set by the smallest surviving power, not the largest.`,
          },
        ],
        correct: 1,
        solution: `Every remaining term carries ${K}<sup>${r}</sup> with ${r} ≥ 2.`,
      },
      {
        t: 'mcq',
        q: `To prove that ${FLAG} is divisible by 64, the correct first move is to write:`,
        opts: [
          { label: `${E9} = (1 + 8)<sup><i>n</i>+1</sup> and keep the terms up to ${r} = 1`, nudge: null },
          {
            label: `${E9} = 9 ⋅ 9<sup>${n}</sup> and use 9<sup>${n}</sup> ≡ 1 (mod 8)`,
            nudge: '<b>(b)</b> reduces modulo 8, which proves divisibility by 8 only: the exact failure this additional topic exists to fix.',
          },
          {
            label: `${E9} = (10 − 1)<sup><i>n</i>+1</sup> and reduce modulo 10`,
            nudge: `<b>(c)</b> splits against 10, a number with no relationship to 64; the divisor must appear as ${K2} inside the bracket.`,
          },
          {
            label: `8${n} + 9 = 8(${n} + 1) + 1 and factor the expression directly`,
            nudge: '<b>(d)</b> rearranges the linear part, which is a useful bookkeeping step after the expansion but proves nothing on its own: the factor 64 has to come out of 9<sup><i>n</i>+1</sup>, and writing 9 = 1 + 8 is the most direct way to get it.',
          },
        ],
        correct: 0,
        solution: `The divisor is 8<sup>2</sup>, so split with ${K} = 8 and retain two terms.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Keeping one term when the divisor is a square.</b> Modulo ${K2} you must keep 1 + ${n}${K}. Dropping ${n}${K} is the single error this additional topic targets.`,
          `<b>Splitting with the wrong ${K}.</b> For divisor 64, split with ${K} = 8, not ${K} = 64. The rule is ${K} = √divisor (or a ${K} whose square is a multiple of the divisor, as ${K} = 80 for 100), not ${K} = divisor.`,
          `<b>Not checking that the head cancels.</b> In ${FLAG}, the head is 1 + 8(${n} + 1) = 8${n} + 9 and it must delete −8${n} − 9 exactly. If it leaves a remainder, your base or your exponent is misaligned.`,
          `<b>Answering “true divisor” instead of “largest divisor”.</b> When an objective asks for the largest, verify with the smallest ${n} that gives a non-zero value (${n} = 1 for ${FLAG}): any universal divisor must divide that value.`,
          '<b>Forgetting to multiply back.</b> In Procedure C2 you often split off a factor (the 9 in Example C4). Reducing the bracket and forgetting the factor is a classic lost mark.',
          `<b>Claiming ${K3}.</b> The guarantee stops at ${K2} unless you keep a third term.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: read the divisor first, then choose the split.</b> Divisor 64 ⇒ ${K} = 8; divisor 225 ⇒ ${K} = 15; divisor 9 ⇒ ${K} = 3; divisor 36 ⇒ ${K} = 6. The base you are given must then be forced into the form 1 + ${K}, adjusting the exponent if necessary.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: for last-two-digit problems, hunt for a power ending in 1.</b> 3<sup>4</sup> = 81, 7<sup>4</sup> = 2401, 9<sup>2</sup> = 81: each gives a ${K} that is a multiple of 10, and then ${K2} is a multiple of 100, so the two-term formula applies modulo 100.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `${OPK} = 1 + ${n}${K} + ${K2} ${SUM(`${r}=2`, n)} ${nCr} ${K}<sup><i>r</i>−2</sup>`,
            note: `hence ${OPK} ≡ 1 + ${n}${K} ${MODK2}.`,
          },
          { f: 'Corollary', note: `${K2} ∣ [${OPK} − 1 − ${n}${K}] for every ${n} ∈ ℕ. Guarantee stops at ${K2}.` },
          { f: 'Terms to keep', note: `1 term for modulus ${K}, 2 terms for ${K2}, 3 terms for ${K3}.` },
          {
            f: 'Flagship result',
            note: `${FLAG} = ${E3} − 8${n} − 9<br>= 64 ∑<sub><i>r</i>≥2</sub> ${N1CR} 8<sup><i>r</i>−2</sup>, divisible by 64; and 64 is the largest such divisor.`,
          },
          { f: 'Companions', note: `4<sup>${n}</sup> − 3${n} − 1 divisible by 9; 16<sup>${n}</sup> − 15${n} − 1 divisible by 225.` },
          {
            f: 'Last two digits',
            note: `split so ${K} is a multiple of 10 (e.g. 3<sup>4</sup> = 1 + 80); then 100 ∣ ${K2} and ${OPK} ≡ 1 + ${n}${K} (mod 100).`,
          },
          { f: '“Largest divisor” questions', note: `prove ${K2} works, then substitute the smallest ${n} with a non-zero value (${n} = 1 for ${FLAG}, ${n} = 2 for ${OPK} − 1 − ${n}${K}) to show nothing bigger can.` },
        ],
        aids: [
          '“Square divisor, two terms.”',
          `“${K} is the square root of the divisor, not the divisor.”`,
          `“The linear part of the expression exists to cancel 1 + ${n}${K}.”`,
        ],
      },
    ],
  },
];
