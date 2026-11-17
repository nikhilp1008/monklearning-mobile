import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 05–07: the book's Units 5–7, pp. 712–733 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 * Topic 05 runs pp. 712–718, Topic 06 pp. 719–725, Topic 07 pp. 726–733;
 * Unit 8 starts on p. 734. Each unit's numbered sections ("1. Exam Relevance"
 * … "8. Common Pitfalls, Pro-Tips & Cheat Sheet") are its parts, Section 8
 * split into "Common pitfalls and pro-tips" and "Cheat sheet".
 * Figures: 8.5 (caption p. 713, drawn p. 714) at the end of Topic 05's Concept
 * intuition; 8.6 (caption p. 720, drawn p. 721) at the end of Topic 06's;
 * 8.7 (caption p. 727, drawn p. 728) at the end of Topic 07's. No unnumbered
 * drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const m = I('m');
const n = I('n');
const r = I('r');
const x = I('x');
const A = I('A');
const B = I('B');
const G = I('G');
const H = I('H');
const N = I('N');
const AH = I('AH');
const G2 = `${G}<sup>2</sup>`;
const an = sb('a', n);
const ai = sb('a', I('i'));
const tn = sb('t', n);
const tr = sb('t', r);
const ur = sb('u', r);
const Sn = sb('S', n);
const Sinf = `<i>S</i><sub>∞</sub>`;
const SQ = (s: string) => `√(${s})`;
const ROOT_AG = SQ(`${A}<sup>2</sup> − ${G2}`);
const SR = SUM(`${r}=1`, n);
const SK = SUM(`${k}=1`, n);
const N1 = `${n}(${n} + 1)`;
const N1_2N1 = `${n}(${n} + 1)(2${n} + 1)`;
const ONE_R = `1 − ${r}`;
const ONE_R2 = `(1 − ${r})<sup>2</sup>`;
const AGP_SN_1 = `${fr(a, ONE_R)} + ${fr(`<i>dr</i>(1 − ${r}<sup>${n}−1</sup>)`, ONE_R2)}`;
const AGP_SN_2 = `− ${fr(`[${a} + (${n} − 1)${d}]${r}<sup>${n}</sup>`, ONE_R)}`;
const AGP_SINF = `${fr(a, ONE_R)} + ${fr('<i>dr</i>', ONE_R2)}`;
const AGP_TN = `${tn} = [${a} + (${n} − 1)${d}] ${r}<sup>${n}−1</sup>`;
const HALF = fr('1', '2');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 05 · pp. 712–718 ────────────────
  {
    n: '05',
    title: 'Relationship Between AM, GM and HM',
    kalam: 'There is more than one honest way to “average” two positive numbers, and the three means answer three different questions.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic ties the three classical means (<b>arithmetic (A), geometric (G), harmonic (H)</b>) into two compact, heavily examined facts ${ESTIMATE}: the chain ${A} ≥ ${G} ≥ ${H} and the identity ${AH} = ${G2}.<br>• <b>CBSE Boards:</b> The signature board question is “the AM of two numbers is ___ and their GM is ___; find the numbers,” solved via a quadratic. Reliable 2–3 mark item ${ESTIMATE}.<br>• <b>JEE Main:</b> ${A} ≥ ${G} (and ${A} ≥ ${G} ≥ ${H}) is a perennial <b>inequality and optimisation workhorse</b> ${ESTIMATE}: minimum/maximum of expressions like ${x} + ${fr('1', x)}, or proving symmetric inequalities.<br>• <b>JEE Advanced:</b> The full chain ${A} ≥ ${G} ≥ ${H} with the equality condition, plus ${AH} = ${G2}, appears fused into multi-mean problems and “which of A, G, H are in progression” questions.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `There is more than one honest way to “average” two positive numbers, and the three means answer three different questions:<br>• <b>AM</b> = ${fr(`${a} + ${b}`, '2')}: average when quantities add (marks, costs, distances).<br>• <b>GM</b> = ${SQ('<i>ab</i>')}: average when quantities multiply (growth rates, CAGR of an investment, ratios). The “average” yearly return that turns ₹1 into the same final corpus is the GM, not the AM.<br>• <b>HM</b> = ${fr('2<i>ab</i>', `${a} + ${b}`)}: average of rates over a fixed task (the classic “go at 40 km/h, return at 60 km/h: average speed for the round trip is the HM = 48, not 50”).`,
      },
      {
        t: 'p',
        html: `The deep result is that these three are <b>always ordered the same way</b> for two distinct positive numbers:<br>${A} > ${G} > ${H},<br>collapsing to a single point ${A} = ${G} = ${H} exactly when ${a} = ${b}. And they are <b>locked together</b> by ${AH} = ${G2}, meaning ${G} is itself the geometric mean of ${A} and ${H} (so ${A}, ${G}, ${H} form a GP).`,
      },
      { t: 'fig', id: 'm11-08-fig-8.5' },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `Notation: ${A} = AM, ${G} = GM, ${H} = HM` },
      { t: 'p', html: `<b>For two positive reals ${a}, ${b}:</b>` },
      {
        t: 'formula',
        kicker: 'AM, GM and HM of two positive numbers',
        main: `${A} = ${fr(`${a} + ${b}`, '2')}<br>${G} = ${SQ('<i>ab</i>')}<br>${H} = ${fr('2<i>ab</i>', `${a} + ${b}`)}`,
        legend: [`${A} = AM`, `${G} = GM`, `${H} = HM`, `${a}, ${b} = the two positive numbers`],
        note: null,
      },
      { t: 'p', html: '<b>The two central results</b>:' },
      {
        t: 'formula',
        kicker: 'The means identity and their order',
        main: `${AH} = ${G2} ⟺ ${A}, ${G}, ${H} are in GP<br>${A} ≥ ${G} ≥ ${H} (equality iff ${a} = ${b})`,
        legend: [`${A} = AM`, `${G} = GM`, `${H} = HM`, `${a}, ${b} = the two positive numbers`],
        note: null,
      },
      { t: 'p', html: `with equality throughout <b>iff</b> ${a} = ${b}.` },
      {
        t: 'p',
        html: `<b>Recovering the numbers from their means</b>: Given ${A} and ${G}, the two numbers satisfy ${a} + ${b} = 2${A} and <i>ab</i> = ${G2}, so they are the roots of`,
      },
      {
        t: 'formula',
        kicker: 'Recovering the numbers from their means',
        main: `${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0<br>⟹ ${a}, ${b} = ${A} ± ${ROOT_AG}`,
        legend: [`${x} = either number (a root)`, `${a}, ${b} = the two numbers`, `${A} = their AM (real numbers need ${A} ≥ ${G})`, `${G} = their GM`],
        note: null,
      },
      { t: 'p', html: `<b>For ${n} positive reals ${sb('a', '1')}, …, ${an}:</b>` },
      {
        t: 'formula',
        kicker: `AM, GM and HM of ${n} positive numbers`,
        main: `AM = ${fr(`${sb('a', '1')} + ⋯ + ${an}`, n)}<br>GM = (${sb('a', '1')}${sb('a', '2')} ⋯ ${an})<sup>1/${n}</sup><br>HM = ${fr(n, `${fr('1', sb('a', '1'))} + ⋯ + ${fr('1', an)}`)}<br>AM ≥ GM ≥ HM (equality iff all ${ai} are equal)`,
        legend: [`${sb('a', '1')}, …, ${an} = the positive reals`, `${n} = how many there are`],
        note: null,
      },
      { t: 'p', html: `with AM ≥ GM ≥ HM, equality iff all ${ai} are equal.` },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>Positivity is mandatory</b> for ${G} (real) and for the ${A} ≥ ${G} ≥ ${H} chain. The relationship is stated for positive reals; ${AH} = ${G2} alone (read as ${AH} = <i>ab</i>) needs only ${a} + ${b} ≠ 0, but the inequality chain needs ${a}, ${b} > 0.<br>2. <b>${A} ≥ ${G} is exactly the real-roots condition</b> for ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0: the discriminant is 4${A}<sup>2</sup> − 4${G2} = 4(${A}<sup>2</sup> − ${G2}) ≥ 0 ⇔ ${A} ≥ ${G}. If a problem hands you ${A} < ${G}, no such real numbers exist.<br>3. <b>Equality only at ${a} = ${b}</b>: the means coincide nowhere else.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: ${AH} = ${G2}.</b><br>${AH} = ${fr(`${a} + ${b}`, '2')} · ${fr('2<i>ab</i>', `${a} + ${b}`)} = <i>ab</i> = ${G2}. ■<br>So ${fr(A, G)} = ${fr(G, H)}, i.e. ${A}, ${G}, ${H} are in GP with ${G} as the geometric mean of ${A} and ${H}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: ${A} ≥ ${G}.</b> For ${a}, ${b} > 0, (√${a} − √${b})<sup>2</sup> ≥ 0 ⇒ ${a} + ${b} ≥ 2${SQ('<i>ab</i>')} ⇒ ${fr(`${a} + ${b}`, '2')} ≥ ${SQ('<i>ab</i>')}, equality iff ${a} = ${b}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: ${G} ≥ ${H}.</b> Since ${AH} = ${G2}, we have ${H} = ${fr(G2, A)}. As ${A} ≥ ${G} > 0, dividing gives ${fr(G2, A)} ≤ ${fr(G2, G)} = ${G}, i.e. ${H} ≤ ${G}. Chaining with Derivation 2: ${A} ≥ ${G} ≥ ${H}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: numbers from their means</b>. If ${A} and ${G} are the AM and GM of ${a}, ${b}, then ${a} + ${b} = 2${A} and <i>ab</i> = ${G2}. By Vieta, ${a} and ${b} are the roots of ${x}<sup>2</sup> − (${a} + ${b})${x} + <i>ab</i> = 0, i.e. ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0, giving ${a}, ${b} = ${A} ± ${ROOT_AG}. Real (and positive) iff ${A} ≥ ${G}. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Ladder: Board → JEE Main → JEE Advanced.' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'The AM of two positive numbers is 10 and their GM is 8. Find the numbers.',
        steps: [
          `${a} + ${b} = 2${A} = 20, <i>ab</i> = ${G2} = 64. The numbers are roots of<br>${x}<sup>2</sup> − 20${x} + 64 = 0<br>⇒ (${x} − 4)(${x} − 16) = 0<br>⇒ ${a} = 4, ${b} = 16.`,
          `Equivalently ${a}, ${b} = 10 ± √(100 − 64) = 10 ± 6. (Note ${A} = 10 > ${G} = 8, so real roots exist: the check is automatic.)`,
        ],
        ans: `${a} = 4, ${b} = 16`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `For ${x} > 0, find the minimum value of ${x} + ${fr('9', x)}.`,
        steps: [
          `Apply ${A} ≥ ${G} to the two positive numbers ${x} and ${fr('9', x)}:<br>${fr(`${x} + ${fr('9', x)}`, '2')} ≥ ${SQ(`${x} · ${fr('9', x)}`)} = 3<br>⇒ ${x} + ${fr('9', x)} ≥ 6,<br>with equality when ${x} = ${fr('9', x)}, i.e. ${x} = 3. Minimum value 6.`,
          `The AM–GM minimum is attained exactly at the equality point ${a} = ${b}.`,
        ],
        ans: '6',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If ${A}, ${G}, ${H} are the AM, GM, HM of two distinct positive numbers, arrange them in order and state which three quantities form a GP.`,
        steps: [
          `By the chain, ${A} > ${G} > ${H} (strict, since the numbers are distinct). By ${AH} = ${G2}, the triple ${A}, ${G}, ${H} is a <b>GP</b> (common ratio ${fr(G, A)} = ${fr(H, G)} < 1). So ${A}, ${G}, ${H} is a decreasing GP whose geometric mean is ${G}: the same ${G} that is the GM of the original two numbers. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Two positive numbers have AM = ${A} and GM = ${G}. Express the numbers in terms of ${A} and ${G}, and find their ratio.`,
        steps: [
          `From Derivation 4, ${a}, ${b} = ${A} ± ${ROOT_AG}. Their ratio:<br>${fr(a, b)} = ${fr(`${A} + ${ROOT_AG}`, `${A} − ${ROOT_AG}`)}.`,
          `A common Advanced form: if ${a} ∶ ${b} = ${m} ∶ ${n}, then ${A} ∶ ${G} = (${m} + ${n}) ∶ 2${SQ('<i>mn</i>')}; the key takeaway is that the ratio is fixed entirely by ${fr(A, G)} and the numbers are real iff ${A} ≥ ${G}. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '<b>(Board)</b> The AM and GM of two positive numbers are 15 and 9. Find the numbers.', a: '3 and 27' },
          {
            q: `<b>(Board)</b> Verify ${AH} = ${G2} for ${a} = 4, ${b} = 9.`,
            a: `${A} = 6.5, ${H} = ${fr('72', '13')}, ${AH} = 36 = ${G2} ✓`,
          },
          { q: `<b>(Main)</b> For ${x} > 0, find the minimum of 4${x} + ${fr('1', x)}.`, a: `4 (at ${x} = ${HALF})` },
          {
            q: '<b>(Main)</b> If the AM of two positive numbers exceeds their GM by 2 and the numbers differ by 8, find them.',
            a: '9 and 1',
          },
          {
            q: `<b>(Adv)</b> If ${a}, ${b} > 0, prove ${fr(a, b)} + ${fr(b, a)} ≥ 2.`,
            a: `(AM–GM on ${fr(a, b)}, ${fr(b, a)})`,
          },
          {
            q: '<b>(Adv)</b> The AM of two positive numbers is to their GM as 5 ∶ 4. Find the ratio of the numbers.',
            a: `4 ∶ 1 (i.e. numbers in ratio 4 ∶ 1, since ${A} ∶ ${G} = 5 ∶ 4 ⇒ ${a} ∶ ${b} = 4 ∶ 1).`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `If ${A} and ${G} are the AM and GM of two positive numbers, then the numbers are:`,
        opts: [
          { label: `${A} ± ${ROOT_AG}`, nudge: null },
          {
            label: `${A} ± ${SQ(`${G2} − ${A}<sup>2</sup>`)}`,
            nudge: `<b>(B)</b> flips the discriminant (gives imaginary numbers whenever ${A} > ${G}).`,
          },
          { label: `${G} ± ${ROOT_AG}`, nudge: `<b>(C)</b> centres on ${G} instead of ${A}.` },
          { label: fr(`${A} ± ${G}`, '2'), nudge: `<b>(D)</b> halves the sum and the difference of the means instead of solving ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0: with ${A} = 10, ${G} = 8 it gives 9 and 1, but the numbers are 4 and 16.` },
        ],
        correct: 0,
        solution: `Roots of ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0. Tests whether the student knows which mean centres the quadratic.`,
      },
      {
        t: 'mcq',
        q: 'For two distinct positive numbers, which is true?',
        opts: [
          {
            label: `${H} ≥ ${G} ≥ ${A}`,
            nudge: '<b>(A)</b> reverses the chain: the single most common error (the order is fixed, not free).',
          },
          { label: `${A} ≥ ${G} ≥ ${H}`, nudge: null },
          {
            label: `${G} ≥ ${A} ≥ ${H}`,
            nudge: `<b>(C)</b> misplaces ${G}, which must sit between the other two as their GM.`,
          },
          {
            label: `${A} ≥ ${H} ≥ ${G}`,
            nudge: `<b>(D)</b> misplaces ${G}, which must sit between the other two as their GM.`,
          },
        ],
        correct: 1,
        solution: `For distinct positive numbers, Derivations 2 and 3 give ${A} > ${G} > ${H}, so ${A} ≥ ${G} ≥ ${H} holds; ${G} always sits in the middle because ${AH} = ${G2}.`,
      },
      {
        t: 'mcq',
        q: `${A}, ${G}, ${H} of two positive numbers always form:`,
        opts: [
          { label: 'an AP', nudge: '<b>(A)</b> confuses “arithmetic mean” with “in AP.”' },
          { label: 'a GP', nudge: null },
          { label: 'an HP', nudge: `<b>(C)</b> An HP would need ${fr('1', A)}, ${fr('1', G)}, ${fr('1', H)} in AP; for ${a} = 4, ${b} = 16 they are ${fr('1', '10')}, ${fr('1', '8')}, ${fr('5', '32')}, with gaps ${fr('1', '40')} and ${fr('1', '32')}, so not an HP.` },
          { label: 'none', nudge: `<b>(D)</b> is wrong: ${AH} = ${G2} holds for every pair of positive numbers, so ${A}, ${G}, ${H} always form a GP.` },
        ],
        correct: 1,
        solution: `From ${AH} = ${G2}, the triple is a GP. One-line check of the ${AH} = ${G2} identity.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Order of the three means:</b> Writing the chain backwards (${H} ≥ ${G} ≥ ${A}). Signature trap of this topic.`,
          `<b>Condition for real numbers:</b> Forgetting that ${A} ≥ ${G} is required for the numbers to be real (board quadratic). Shares discriminant-logic with quadratics.`,
          `<b>Sign of the GM</b> (also in Topic 03): mishandling the sign of ${G}.`,
          `<b>Centred on the wrong mean:</b> Centring the recovery quadratic on ${G} instead of ${A}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• To <b>find two numbers from their means</b>, jump straight to ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0.<br>• For <b>min/max of ${x} + ${fr(k, x)}-type</b> expressions, AM–GM gives the answer in one line; equality ${a} = ${b} locates the optimiser.<br>• Remember ${G} is the middle term of the GP ${A}, ${G}, ${H}: a fast sanity check on any ordering.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: [`Quantity (two numbers ${a}, ${b} > 0)`, 'Formula'],
        rows: [
          ['Arithmetic mean', `${A} = ${fr(`${a} + ${b}`, '2')}`],
          ['Geometric mean', `${G} = ${SQ('<i>ab</i>')}`],
          ['Harmonic mean', `${H} = ${fr('2<i>ab</i>', `${a} + ${b}`)}`],
          ['Core identity', `${AH} = ${G2} ⟹ ${A}, ${G}, ${H} in GP`],
          ['Ordering', `${A} ≥ ${G} ≥ ${H}, equality iff ${a} = ${b}`],
          ['Numbers from means', `roots of ${x}<sup>2</sup> − 2<i>Ax</i> + ${G2} = 0;<br>${a}, ${b} = ${A} ± ${ROOT_AG}`],
          ['Reality condition', `${A} ≥ ${G}`],
          [`${n} numbers`, 'AM ≥ GM ≥ HM, equality iff all equal'],
        ],
      },
      { t: 'p', html: `<b>One-liner:</b> ${G} is the GM of both {${a}, ${b}} <b>and</b> of {${A}, ${H}}.` },
    ],
  },

  // ──────────────── Topic 06 · pp. 719–725 ────────────────
  {
    n: '06',
    title: 'Arithmetico-Geometric Progression (AGP)',
    kalam: 'An AGP is a term-by-term product of an AP and a GP: each term is “(an arithmetic part) × (a geometric part).”',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `An AGP is a term-by-term <b>product of an AP and a GP</b>: each term is “(an arithmetic part) × (a geometric part).” It is a JEE-syllabus topic in its own right (distinct from special-series summation) and a favourite source of medium-hard problems ${ESTIMATE}.<br>• <b>CBSE Boards:</b> Not part of the core NCERT Class 11 syllabus, so board exposure is minimal, but included here for completeness and because the technique (multiply-by-${r}) reinforces GP.<br>• <b>JEE Main:</b> A recurring topic ${ESTIMATE}: sum of ${n} terms or sum to infinity of series like 1 + 2${x} + 3${x}<sup>2</sup> + 4${x}<sup>3</sup> + …<br>• <b>JEE Advanced:</b> AGP appears in infinite-sum problems, in series that must be recognised as AGP after manipulation, and fused with binomial or calculus ideas (the sum ∑<i>nx</i><sup>${n}</sup> also arises from differentiating a GP).`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Think of an AGP as a <b>GP whose terms are being steadily re-weighted by a growing counter.</b> A plain GP is ${a}, <i>ar</i>, <i>ar</i><sup>2</sup>, … An AGP attaches an arithmetic “label” 1, 2, 3, … (or any AP) to each: ${a} · 1, (${a} + ${d})${r}, (${a} + 2${d})${r}<sup>2</sup>, …: the geometric decay/growth of ${r}<sup>${k}</sup> multiplied by the linear march of the AP.`,
      },
      {
        t: 'p',
        html: 'A concrete picture: imagine <b>interest-bearing deposits of steadily increasing size</b>, each discounted by a fixed factor for the time it sits. The increasing deposit sizes are the AP part; the fixed discount factor compounding over time is the GP part; their product, summed, is an AGP sum. Many present-value and expected-value calculations in finance are exactly AGP sums.',
      },
      {
        t: 'p',
        html: `The defining feature for summation: because each term carries both an additive and a multiplicative pattern, neither the AP sum formula nor the GP sum formula works alone. But the <b>GP trick still works</b>: multiply the whole sum ${Sn} by ${r}, line it up shifted by one position, and subtract. The arithmetic part collapses the differences into a constant ${d}, turning the leftover into an ordinary GP. One subtraction does the job.`,
      },
      {
        t: 'p',
        html: `Crucially, when |${r}| < 1, the AGP <b>sum to infinity converges</b>: the geometric decay eventually overwhelms the linear growth of the AP label, so the infinite sum is finite.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.6' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Notation (in use): ${a} = first term of the AP part, ${d} = its common difference, ${r} = the GP ratio.`,
      },
      { t: 'p', html: '<b>Definition.</b> An arithmetico-geometric progression has general term' },
      {
        t: 'formula',
        kicker: 'General term of an AGP',
        main: AGP_TN,
        legend: [
          `${tn} = the general term`,
          `${a} = first term of the AP part`,
          `${d} = the AP part’s common difference`,
          `${r} = the GP ratio`,
        ],
        note: `The product of the AP term ${a} + (${n} − 1)${d} and the GP term ${r}<sup>${n}−1</sup>.`,
      },
      { t: 'p', html: `<b>Sum of ${n} terms</b> (for ${r} ≠ 1):` },
      {
        t: 'formula',
        kicker: `Sum of ${n} terms of an AGP`,
        main: `${Sn} = ${AGP_SN_1}<br>${AGP_SN_2}`,
        legend: [
          `${Sn} = sum of the first ${n} terms`,
          `${a} = first term of the AP part`,
          `${d} = the AP part’s common difference`,
          `${r} = the GP ratio (not 1)`,
        ],
        note: null,
      },
      { t: 'p', html: `<b>Sum to infinity</b> (valid only when |${r}| < 1):` },
      {
        t: 'formula',
        kicker: 'Sum to infinity of an AGP',
        main: `${Sinf} = ${AGP_SINF}`,
        legend: [
          `${Sinf} = sum to infinity`,
          `${a} = first term of the AP part`,
          `${d} = the AP part’s common difference`,
          `${r} = the GP ratio (|${r}| < 1)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>The formulas require ${r} ≠ 1.</b> If ${r} = 1 the AGP is just an AP, summed by the AP formula.<br>2. <b>${Sinf} exists only when |${r}| < 1.</b> As ${n} → ∞, both ${r}<sup>${n}</sup> → 0 and ${n}${r}<sup>${n}</sup> → 0 (geometric decay beats linear growth): that is why the infinite sum converges; for |${r}| ≥ 1 it diverges.<br>3. <b>Identify the two parts first.</b> Confirm the term is genuinely (linear in ${n}) × (${r}<sup>${n}−1</sup>) before applying the formula: don’t memorise the formula blindly; the multiply-by-${r} method is safer under pressure.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation: sum of an AGP (the multiply-by-${r} method).</b><br>${Sn} = ${a} + (${a} + ${d})${r} + (${a} + 2${d})${r}<sup>2</sup> + ⋯<br>+ [${a} + (${n} − 1)${d}]${r}<sup>${n}−1</sup>   (i)<br>Multiply by ${r} and shift one place:<br><i>rS</i><sub>${n}</sub> = <i>ar</i> + (${a} + ${d})${r}<sup>2</sup> + ⋯<br>+ [${a} + (${n} − 2)${d}]${r}<sup>${n}−1</sup><br>+ [${a} + (${n} − 1)${d}]${r}<sup>${n}</sup>   (ii)<br>Subtract (ii) from (i). The first column gives ${a}; every middle column leaves a clean <i>dr</i><sup>${k}</sup> (the AP differences collapse to the constant ${d}); the last term of (ii) is subtracted whole:<br>(1 − ${r})${Sn} = ${a} + ${d}(${r} + ${r}<sup>2</sup> + ⋯ + ${r}<sup>${n}−1</sup>)<br>− [${a} + (${n} − 1)${d}]${r}<sup>${n}</sup>.<br>The bracket is a GP sum, ${r} + ${r}<sup>2</sup> + ⋯ + ${r}<sup>${n}−1</sup> = ${fr(`${r}(1 − ${r}<sup>${n}−1</sup>)`, ONE_R)}. Hence<br>${Sn} = ${AGP_SN_1}<br>${AGP_SN_2}. ■<br>Letting ${n} → ∞ with |${r}| < 1 kills both ${r}<sup>${n}−1</sup> and ${r}<sup>${n}</sup> terms, leaving ${Sinf} = ${AGP_SINF}. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Ladder: CBSE Board → JEE Main → JEE Advanced. (Standard curriculum problems.)' },
      {
        t: 'ex',
        tag: 'Board/Main (technique)',
        q: `Sum to ${n} terms: 1 + 2${x} + 3${x}<sup>2</sup> + 4${x}<sup>3</sup> + … (for ${x} ≠ 1).`,
        steps: [
          `Here ${a} = 1, ${d} = 1, ${r} = ${x}. By the multiply-by-${x} method:<br>${Sn} = 1 + 2${x} + 3${x}<sup>2</sup> + ⋯ + <i>nx</i><sup>${n}−1</sup>,<br><i>xS</i><sub>${n}</sub> = ${x} + 2${x}<sup>2</sup> + ⋯ + <i>nx</i><sup>${n}</sup>.`,
          `Subtracting:<br>(1 − ${x})${Sn} = 1 + ${x} + ${x}<sup>2</sup> + ⋯ + ${x}<sup>${n}−1</sup> − <i>nx</i><sup>${n}</sup><br>= ${fr(`1 − ${x}<sup>${n}</sup>`, `1 − ${x}`)} − <i>nx</i><sup>${n}</sup>. So`,
        ],
        ans: `${Sn} = ${fr(`1 − ${x}<sup>${n}</sup>`, `(1 − ${x})<sup>2</sup>`)} − ${fr(`<i>nx</i><sup>${n}</sup>`, `1 − ${x}`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find the sum to infinity of 1 + ${fr('2', '3')} + ${fr('3', '3<sup>2</sup>')} + ${fr('4', '3<sup>3</sup>')} + …`,
        steps: [
          `${a} = 1, ${d} = 1, ${r} = ${fr('1', '3')} (and |${r}| < 1 ✓). Using ${Sinf} = ${AGP_SINF}:<br><br>${Sinf} = ${fr('1', `1 − ${fr('1', '3')}`)} + ${fr(fr('1', '3'), `(1 − ${fr('1', '3')})<sup>2</sup>`)}<br><br>= ${fr('3', '2')} + ${fr(fr('1', '3'), fr('4', '9'))} = ${fr('3', '2')} + ${fr('3', '4')}`,
        ],
        ans: fr('9', '4'),
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find the sum to infinity of ${fr('3', '1')} + ${fr('5', '2')} + ${fr('7', '4')} + ${fr('9', '8')} + …`,
        steps: [
          `Numerators 3, 5, 7, 9 form an AP (${a} = 3, ${d} = 2); the factors 1, ${HALF}, ${fr('1', '4')}, ${fr('1', '8')} (the reciprocals of the denominators 1, 2, 4, 8) are a GP with ${r} = ${HALF}. So ${r} = ${HALF}, |${r}| < 1 ✓:<br><br>${Sinf} = ${fr('3', `1 − ${HALF}`)} + ${fr(`2 · ${HALF}`, `(1 − ${HALF})<sup>2</sup>`)}<br><br>= ${fr('3', HALF)} + ${fr('1', fr('1', '4'))} = 6 + 4`,
        ],
        ans: '10',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find the sum to ${n} terms of 1 + 3${x} + 5${x}<sup>2</sup> + 7${x}<sup>3</sup> + … (for ${x} ≠ 1).`,
        steps: [
          `${a} = 1, ${d} = 2, ${r} = ${x}. Multiply-by-${x}:<br>(1 − ${x})${Sn} = 1 + 2(${x} + ${x}<sup>2</sup> + ⋯ + ${x}<sup>${n}−1</sup>)<br>− (2${n} − 1)${x}<sup>${n}</sup><br>= 1 + ${fr(`2${x}(1 − ${x}<sup>${n}−1</sup>)`, `1 − ${x}`)} − (2${n} − 1)${x}<sup>${n}</sup>.<br>Therefore`,
        ],
        ans: `${Sn} = ${fr('1', `1 − ${x}`)} + ${fr(`2${x}(1 − ${x}<sup>${n}−1</sup>)`, `(1 − ${x})<sup>2</sup>`)}<br>− ${fr(`(2${n} − 1)${x}<sup>${n}</sup>`, `1 − ${x}`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Evaluate ${SUM(`${n}=1`, '∞')} ${fr(`${n}<sup>2</sup>`, `2<sup>${n}</sup>`)}. (An AGP-adjacent sum, handled by applying the AGP idea twice.)`,
        steps: [
          `First note ∑ ${fr(n, `2<sup>${n}</sup>`)} = ${fr(HALF, `(1 − ${HALF})<sup>2</sup>`)} = 2<br><br>(that is, ∑<i>nr</i><sup>${n}</sup> = ${fr(r, ONE_R2)}, ${r} = ${HALF}). For ${n}<sup>2</sup>, use ${n}<sup>2</sup> = ${n}(${n} − 1) + ${n} and the standard results ∑${n}(${n} − 1)${r}<sup>${n}</sup> = ${fr(`2${r}<sup>2</sup>`, `(1 − ${r})<sup>3</sup>`)} and ∑<i>nr</i><sup>${n}</sup> = ${fr(r, ONE_R2)}:<br><br>∑ ${fr(`${n}<sup>2</sup>`, `2<sup>${n}</sup>`)} = ${fr(`2(${HALF})<sup>2</sup>`, `(${HALF})<sup>3</sup>`)} + 2<br><br>= ${fr(`2 · ${fr('1', '4')}`, fr('1', '8'))} + 2 = 4 + 2 = 6.`,
          'The AGP machinery, iterated, sums these “polynomial-times-geometric” series.',
        ],
        ans: '6',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>(Main)</b> Sum to <i>n</i> terms: 1 + 2 · 2 + 3 · 2<sup>2</sup> + 4 · 2<sup>3</sup> + …',
            a: `${Sn} = 1 + (${n} − 1)2<sup>${n}</sup>`,
          },
          {
            q: `<b>(Main)</b> Sum to infinity: 1 + ${fr('3', '4')} + ${fr('5', '16')} + ${fr('7', '64')} + …`,
            a: `${a} = 1, ${d} = 2, ${r} = ${fr('1', '4')}: ${Sinf} = ${fr('4', '3')} + ${fr(`2 · ${fr('1', '4')}`, `(${fr('3', '4')})<sup>2</sup>`)}<br>= ${fr('4', '3')} + ${fr('8', '9')} = ${fr('20', '9')}`,
          },
          {
            q: `<b>(Main)</b> Sum to infinity: ${SUM(`${n}=1`, '∞')} ${fr(n, `5<sup>${n}−1</sup>`)}.`,
            a: `${fr('1', `(1 − ${fr('1', '5')})<sup>2</sup>`)} = ${fr('25', '16')}`,
          },
          {
            q: `<b>(Adv)</b> Sum to ${n} terms: 2 + 5${x} + 8${x}<sup>2</sup> + 11${x}<sup>3</sup> + … (for ${x} ≠ 1).`,
            a: `${Sn} = ${fr('2', `1 − ${x}`)} + ${fr(`3${x}(1 − ${x}<sup>${n}−1</sup>)`, `(1 − ${x})<sup>2</sup>`)}<br>− ${fr(`(3${n} − 1)${x}<sup>${n}</sup>`, `1 − ${x}`)}`,
          },
          {
            q: `<b>(Adv)</b> Evaluate ${SUM(`${n}=1`, '∞')} ${fr(`2${n} − 1`, `2<sup>${n}</sup>`)}.`,
            a: `∑ ${fr(`2${n} − 1`, `2<sup>${n}</sup>`)} = 2∑ ${fr(n, `2<sup>${n}</sup>`)} − ∑ ${fr('1', `2<sup>${n}</sup>`)} = 2(2) − 1 = 3.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `The sum to infinity of 1 + 2${r} + 3${r}<sup>2</sup> + 4${r}<sup>3</sup> + … for |${r}| < 1 is:`,
        opts: [
          { label: fr('1', ONE_R), nudge: '<b>(A)</b> is the plain GP sum (forgets the AP weighting).' },
          { label: fr('1', ONE_R2), nudge: null },
          { label: fr(r, ONE_R2), nudge: `<b>(C)</b> is ∑<i>nr</i><sup>${n}</sup> (off by one power of ${r}).` },
          { label: fr('1', `1 − ${r}<sup>2</sup>`), nudge: `<b>(D)</b> ${fr('1', `1 − ${r}<sup>2</sup>`)} is the sum of the GP 1 + ${r}<sup>2</sup> + ${r}<sup>4</sup> + ⋯, not of this series: at ${r} = ${HALF} it gives ${fr('4', '3')}, but the sum is ${fr('1', `(1 − ${HALF})<sup>2</sup>`)} = 4.` },
        ],
        correct: 1,
        solution: `Here ${a} = 1, ${d} = 1: ${Sinf} = ${fr('1', ONE_R)} + ${fr(r, ONE_R2)} = ${fr(`(1 − ${r}) + ${r}`, ONE_R2)} = ${fr('1', ONE_R2)}. Tests the AGP infinite-sum formula.`,
      },
      {
        t: 'mcq',
        q: `To sum the series 1 + 4${x} + 7${x}<sup>2</sup> + …, the correct method is:`,
        opts: [
          { label: 'AP sum formula', nudge: '<b>(A)</b> handles only one part.' },
          { label: 'GP sum formula', nudge: '<b>(B)</b> handles only one part.' },
          { label: `multiply by ${x} and subtract`, nudge: null },
          {
            label: '∑-polynomial method',
            nudge: `<b>(D)</b> (the sum-of-powers method) fails because the term is not polynomial in ${n}.`,
          },
        ],
        correct: 2,
        solution: `The term is (linear) × (${x}<sup>${n}−1</sup>): an AGP. Tests technique selection.`,
      },
      {
        t: 'mcq',
        q: `The AGP series ${a} + (${a} + ${d})${r} + (${a} + 2${d})${r}<sup>2</sup> + … converges (has a finite sum to infinity) when:`,
        opts: [
          { label: `${d} < 1`, nudge: '<b>(A)</b> is irrelevant.' },
          { label: `${a} < 1`, nudge: '<b>(B)</b> is irrelevant.' },
          { label: `|${r}| < 1`, nudge: null },
          { label: 'always', nudge: `<b>(D)</b> is false for |${r}| ≥ 1.` },
        ],
        correct: 2,
        solution: 'Convergence is governed entirely by the geometric ratio. Tests the convergence condition.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong method:</b> Trying the AP or GP sum formula alone, or the ∑-polynomial method, on an AGP. The dominant error.',
          `<b>Sum to infinity:</b> Writing ${Sinf} without checking |${r}| < 1 (exactly the trap met in the GP sum to infinity).`,
          `<b>When ${r} = 1:</b> Applying the ${r} ≠ 1 formula when ${r} = 1 (the series is then a plain AP).`,
          `<b>Which part is which:</b> Mis-reading which factor is the AP part and which the GP part (e.g. swapping ${d} and ${r} roles).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• <b>Don’t memorise the messy ${Sn} formula</b>: re-derive with the multiply-by-${r} subtraction every time; it’s faster and error-proof under exam pressure.<br>• For ${Sinf}, the compact ${AGP_SINF} is worth memorising.<br>• Recognise AGP by the shape: each term = (something linear in ${n}) × (${r}<sup>${n}−1</sup>).<br>• The related sums ∑<i>nr</i><sup>${n}</sup> = ${fr(r, ONE_R2)} and ∑${n}<sup>2</sup>${r}<sup>${n}</sup> = ${fr(`${r}(1 + ${r})`, `(1 − ${r})<sup>3</sup>`)} (for |${r}| < 1, summing from ${n} = 1 to ∞) follow from the same idea (or from differentiating the GP sum).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Condition'],
        rows: [
          ['General term', AGP_TN, ''],
          [`Sum of ${n} terms`, `${Sn} = ${AGP_SN_1}<br>${AGP_SN_2}`, `${r} ≠ 1`],
          ['Sum to infinity', `${Sinf} = ${AGP_SINF}`, `|${r}| < 1`],
          ['Method', `multiply ${Sn} by ${r}, shift, subtract`, `every ${r} ≠ 1`],
          [
            'Useful relatives',
            `∑<i>nr</i><sup>${n}</sup> = ${fr(r, ONE_R2)};<br>∑${n}<sup>2</sup>${r}<sup>${n}</sup> = ${fr(`${r}(1 + ${r})`, `(1 − ${r})<sup>3</sup>`)}`,
            `|${r}| < 1`,
          ],
        ],
      },
      {
        t: 'p',
        html: `<b>One-liner:</b> AGP = AP × GP, term by term; sum it the way you sum a GP: multiply by ${r} and subtract.`,
      },
    ],
  },

  // ──────────────── Topic 07 · pp. 726–733 ────────────────
  {
    n: '07',
    title: 'Special Series Summation',
    kalam: 'The whole topic rests on one move: break a complicated sum into simple sums you already know.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `“Special series” means the closed-form sums of ∑${n}, ∑${n}<sup>2</sup>, ∑${n}<sup>3</sup> (and occasionally ∑${n}<sup>4</sup>), plus the techniques that reduce any polynomially-generated series to these building blocks. It is the <b>computational engine</b> of the chapter.<br>• <b>CBSE Boards:</b> Direct application is common ${ESTIMATE}: sum a series like 3 + 7 + 13 + 21 + … or 2 · 4 + 4 · 6 + 6 · 8 + … to ${n} terms (5-mark). The derivations of ∑${n}<sup>2</sup> and ∑${n}<sup>3</sup> are named, askable results.<br>• <b>JEE Main:</b> A reliable 1-question topic ${ESTIMATE}: find ${Sn} for a series whose general term is a polynomial or a product, or evaluate a nested ∑. A JEE Main paper directly asked ${SUM(`${k}=1`, '20')}(1 + 2 + ⋯ + ${k}).<br>• <b>JEE Advanced:</b> Special series fuse into harder setups: the identity 9<i>S</i><sub>2</sub><sup>2</sup> = <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>), alternating-sign square sums, and series requiring the method of differences. The ${Sn} = <i>cn</i><sup>2</sup> PYQ (JEE) is a recurring template ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'The whole topic rests on one move: <b>break a complicated sum into simple sums you already know.</b>',
      },
      {
        t: 'p',
        html: `If you can write the general term of a series as a combination of ${n}<sup>3</sup>, ${n}<sup>2</sup>, ${n}, 1, then by the linearity of ∑, the sum of the series is just the matching combination of the four standard sums. So the entire game is: find ${tn}, express it in powers of ${n}, then apply the standard formulas.`,
      },
      {
        t: 'p',
        html: `The standard sums themselves come from a beautiful <b>telescoping trick</b>: to find ∑${n}<sup>2</sup>, you exploit the identity ${k}<sup>3</sup> − (${k} − 1)<sup>3</sup> = 3${k}<sup>2</sup> − 3${k} + 1. Add it up for ${k} = 1, …, ${n} and the left side collapses to just ${n}<sup>3</sup> (everything in between cancels), leaving an equation you solve for ∑${n}<sup>2</sup>. The same idea with (${k} + 1)<sup>4</sup> − ${k}<sup>4</sup> gives ∑${n}<sup>3</sup>, and ${k}<sup>5</sup> − (${k} − 1)<sup>5</sup> gives ∑${n}<sup>4</sup>. One trick, a whole family of formulas.`,
      },
      {
        t: 'p',
        html: `<b>Historical note:</b> Aryabhata stated rules for ∑${n}<sup>2</sup> and ∑${n}<sup>3</sup> in his Aryabhatiya (499 CE), and Brahmagupta (born 598), Mahavira (c. 850) and Bhaskara II (1114–1185) all extended this work. When you sum squares of natural numbers, you are using formulas that Indian mathematicians were already stating some 1,500 years ago.`,
      },
      {
        t: 'p',
        html: `A second intuition worth installing: ∑${n}<sup>3</sup> = (∑${n})<sup>2</sup>. The sum of the first ${n} cubes is the square of the sum of the first ${n} naturals: a startling, memorable identity, true for every ${n} (e.g. 1 + 8 + 27 = 36 = 6<sup>2</sup> = (1 + 2 + 3)<sup>2</sup>).`,
      },
      { t: 'fig', id: 'm11-08-fig-8.7' },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>The standard sums</b>:' },
      {
        t: 'formula',
        kicker: 'The standard sums',
        main: `${SR} 1 = ${n}<br>${SR} ${r} = ${fr(N1, '2')}<br>${SR} ${r}<sup>2</sup> = ${fr(N1_2N1, '6')}<br>${SR} ${r}<sup>3</sup> = [${fr(N1, '2')}]<sup>2</sup> = (${SR} ${r})<sup>2</sup>`,
        legend: [`${n} = the number of terms`, `${r} = the index of summation`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Sum of fourth powers</b> (rarely needed; JEE Advanced only): ${SR} ${r}<sup>4</sup> = ${fr(`${N1_2N1}(3${n}<sup>2</sup> + 3${n} − 1)`, '30')}.`,
      },
      {
        t: 'p',
        html: `<b>Linearity of sigma</b>: ${SR}(${a} ${tr} + ${b} ${ur}) = ${a}${SR} ${tr} + ${b}${SR} ${ur}; ${SR} ${c} = <i>cn</i>.`,
      },
      { t: 'p', html: '<b>Master technique</b>. If the general term is a polynomial,' },
      {
        t: 'formula',
        kicker: 'Master technique (polynomial general term)',
        main: `${tn} = <i>an</i><sup>3</sup> + <i>bn</i><sup>2</sup> + <i>cn</i> + ${d}<br>⟹ ${Sn} = ${a}∑${n}<sup>3</sup> + ${b}∑${n}<sup>2</sup> + ${c}∑${n} + ${d} · ${n}`,
        legend: [`${tn} = the general term`, `${Sn} = sum of the first ${n} terms`, `${a}, ${b}, ${c}, ${d} = the coefficients`],
        note: null,
      },
      { t: 'p', html: '<b>Sum of products taken two at a time</b>:' },
      {
        t: 'formula',
        kicker: 'Sum of products taken two at a time',
        main: `(${SUM('<i>i</i>=1', n)} ${ai})<sup>2</sup> = ${SUM('<i>i</i>=1', n)} ${ai}<sup>2</sup> + 2 ∑<sub>1≤<i>i</i> < <i>j</i>≤${n}</sub> ${ai}${sb('a', '<i>j</i>')}<br>⟹ ∑<sub><i>i</i> < <i>j</i></sub> ${ai}${sb('a', '<i>j</i>')} = ${fr(`(∑ ${ai})<sup>2</sup> − ∑ ${ai}<sup>2</sup>`, '2')}`,
        legend: [`${ai}, ${sb('a', '<i>j</i>')} = the terms`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>Index range ${r} ∈ ℕ</b>, and every formula above is for the first ${n} terms starting at ${r} = 1. For a sum from ${r} = ${m} to ${n}, use ∑<sub>1</sub><sup>${n}</sup> − ∑<sub>1</sub><sup>${m}−1</sup>.<br>2. <b>Linearity needs the same index range</b> on every piece: a frequent slip when splitting a term.<br>3. <b>The master technique only applies when ${tn} is a polynomial in ${n}</b> (or reducible to one). For products like ${r}(${r} + 1)(${r} + 2), expand first, then apply ∑. For genuinely non-polynomial ${tn} (e.g. ${fr('1', `${r}(${r} + 1)`)} or AGP terms), use telescoping (Topic 08) or the AGP formula (Topic 06) instead.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: ∑${n}<sup>2</sup> via the telescoping identity</b>. Use ${k}<sup>3</sup> − (${k} − 1)<sup>3</sup> = 3${k}<sup>2</sup> − 3${k} + 1. Sum both sides for ${k} = 1, 2, …, ${n}. The left telescopes to ${n}<sup>3</sup> − 0<sup>3</sup> = ${n}<sup>3</sup>:<br>${n}<sup>3</sup> = 3${SK} ${k}<sup>2</sup> − 3${SK} ${k} + ${n}.<br>Substitute ∑${k} = ${fr(N1, '2')} and solve:<br>3∑${k}<sup>2</sup> = ${n}<sup>3</sup> + ${fr(`3${N1}`, '2')} − ${n}<br>⟹ ${SK} ${k}<sup>2</sup> = ${fr(N1_2N1, '6')}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: ∑${n}<sup>3</sup> via (${k} + 1)<sup>4</sup> − ${k}<sup>4</sup></b>. Use (${k} + 1)<sup>4</sup> − ${k}<sup>4</sup> = 4${k}<sup>3</sup> + 6${k}<sup>2</sup> + 4${k} + 1. Summing for ${k} = 1, …, ${n}, the left telescopes to (${n} + 1)<sup>4</sup> − 1. Substituting the now-known ∑${k}<sup>2</sup> and ∑${k} and solving gives<br>${SK} ${k}<sup>3</sup> = [${fr(N1, '2')}]<sup>2</sup>. ■<br>(The same machinery with ${k}<sup>5</sup> − (${k} − 1)<sup>5</sup> produces ∑${n}<sup>4</sup>.)`,
      },
      {
        t: 'p',
        html: `<b>Method: sum of a series by recognising ${tn}</b>. For a series like 2 · 4 + 4 · 6 + 6 · 8 + …, write the general term, expand to a polynomial, then apply ∑:<br>${tn} = (2${n})(2${n} + 2) = 4${n}<sup>2</sup> + 4${n}<br>⟹ ${Sn} = 4∑${n}<sup>2</sup> + 4∑${n}.`,
      },
      {
        t: 'p',
        html: `<b>Method of differences</b>. When the differences of consecutive terms form a recognisable progression, the general term is one degree higher. For 3, 7, 13, 21, 31, … the first differences are 4, 6, 8, 10 (an AP), so ${tn} is quadratic: solving gives ${tn} = ${n}<sup>2</sup> + ${n} + 1, after which ∑ applies termwise.`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Difficulty ladder: CBSE Board → JEE Main → JEE Advanced.' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find the sum to ${n} terms of 2 · 4 + 4 · 6 + 6 · 8 + …`,
        steps: [
          `General term ${tr} = (2${r})(2${r} + 2) = 4${r}<sup>2</sup> + 4${r}. So<br>${Sn} = 4${SR} ${r}<sup>2</sup> + 4${SR} ${r}<br>= 4 · ${fr(N1_2N1, '6')} + 4 · ${fr(N1, '2')}<br>= ${fr(`2${N1_2N1}`, '3')} + 2${N1}.`,
          `Factor 2${N1}:<br>${Sn} = 2${N1}[${fr(`2${n} + 1`, '3')} + 1]<br>= ${fr(`2${N1}(2${n} + 4)`, '3')} = ${fr(`4${N1}(${n} + 2)`, '3')}.`,
          `(The 20th term alone is 4 · 20 · 21 = 1680.)`,
        ],
        ans: `${fr(`2${N1}(2${n} + 4)`, '3')} = ${fr(`4${N1}(${n} + 2)`, '3')}`,
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find ${Sn} for 3 + 7 + 13 + 21 + 31 + …`,
        steps: [
          `First differences 4, 6, 8, 10 form an AP, so ${tn} is quadratic. Fitting ${sb('t', '1')} = 3, ${sb('t', '2')} = 7, ${sb('t', '3')} = 13 gives ${tn} = ${n}<sup>2</sup> + ${n} + 1 (check: ${sb('t', '4')} = 16 + 4 + 1 = 21 ✓). Then<br>${Sn} = ∑${n}<sup>2</sup> + ∑${n} + ∑1<br>= ${fr(N1_2N1, '6')} + ${fr(N1, '2')} + ${n}.`,
          `Combining over a common factor: ${Sn} = ${fr(`${n}(${n}<sup>2</sup> + 3${n} + 5)`, '3')} (verify ${sb('S', '3')} = 3 + 7 + 13 = 23 = ${fr('3(9 + 9 + 5)', '3')} ✓).`,
        ],
        ans: `${Sn} = ${fr(`${n}(${n}<sup>2</sup> + 3${n} + 5)`, '3')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Evaluate ${SUM(`${k}=1`, '20')}(1 + 2 + 3 + ⋯ + ${k}).`,
        steps: [
          `The inner sum is 1 + 2 + ⋯ + ${k} = ${fr(`${k}(${k} + 1)`, '2')}, so<br>${SUM(`${k}=1`, '20')} ${fr(`${k}(${k} + 1)`, '2')} = ${HALF}(${SUM(`${k}=1`, '20')} ${k}<sup>2</sup> + ${SUM(`${k}=1`, '20')} ${k})<br>= ${HALF}(${fr('20 · 21 · 41', '6')} + ${fr('20 · 21', '2')})<br>= ${HALF}(2870 + 210)`,
        ],
        ans: '1540',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find ${Sn} for the series 5 + 55 + 555 + …`,
        steps: [
          `Each term is a repunit times 5: ${tr} = 5 · 11…1 (${r} ones) = 5 · ${fr(`10<sup>${r}</sup> − 1`, '9')}. So<br>${Sn} = ${fr('5', '9')}${SR}(10<sup>${r}</sup> − 1)<br>= ${fr('5', '9')}(${fr(`10(10<sup>${n}</sup> − 1)`, '9')} − ${n})<br>= ${fr('5', '81')}(10<sup>${n}+1</sup> − 9${n} − 10).`,
          `A GP-based special series: the geometric piece is summed, the constant piece is −${n}.`,
        ],
        ans: `${fr('5', '81')}(10<sup>${n}+1</sup> − 9${n} − 10)`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If the sum of the first ${n} terms of an AP is <i>cn</i><sup>2</sup>, find the sum of the squares of these ${n} terms.`,
        steps: [
          `${Sn} = <i>cn</i><sup>2</sup> has the form <i>An</i><sup>2</sup> + <i>Bn</i> with ${B} = 0, so it’s an AP; the ${n}th term is<br>${an} = ${Sn} − <i>S</i><sub>${n}−1</sub> = ${c}(${n}<sup>2</sup> − (${n} − 1)<sup>2</sup>) = ${c}(2${n} − 1). Then<br>${SUM(`${n}=1`, N)} ${an}<sup>2</sup> = ${c}<sup>2</sup>${SUM(`${n}=1`, N)}(2${n} − 1)<sup>2</sup><br>= ${c}<sup>2</sup>∑(4${n}<sup>2</sup> − 4${n} + 1)<br>= ${c}<sup>2</sup>[${fr(`2${N}(${N} + 1)(2${N} + 1)`, '3')} − 2${N}(${N} + 1) + ${N}].`,
          `Factor ${N} and simplify the bracket to ${fr(`4${N}<sup>2</sup> − 1`, '3')}:`,
        ],
        ans: `∑${an}<sup>2</sup> = ${fr(`${N}(4${N}<sup>2</sup> − 1)${c}<sup>2</sup>`, '3')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find ${Sn} for ${fr('1<sup>3</sup>', '1')} + ${fr('1<sup>3</sup> + 2<sup>3</sup>', '1 + 3')} + ${fr('1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup>', '1 + 3 + 5')} + …`,
        steps: [
          `The ${r}th term has numerator ${SUM(`${k}=1`, r)} ${k}<sup>3</sup> = [${fr(`${r}(${r} + 1)`, '2')}]<sup>2</sup> and denominator 1 + 3 + ⋯ + (2${r} − 1) = ${r}<sup>2</sup>. So<br>${tr} = ${fr(`[${fr(`${r}(${r} + 1)`, '2')}]<sup>2</sup>`, `${r}<sup>2</sup>`)} = ${fr(`(${r} + 1)<sup>2</sup>`, '4')}.`,
          `Then ${Sn} = ${fr('1', '4')}${SR}(${r} + 1)<sup>2</sup><br>= ${fr('1', '4')}${SR}(${r}<sup>2</sup> + 2${r} + 1)<br>= ${fr('1', '4')}[${fr(N1_2N1, '6')} + ${N1} + ${n}],<br>which simplifies to ${Sn} = ${fr(`${n}(2${n}<sup>2</sup> + 9${n} + 13)`, '24')}.`,
          `The sum of cubes and the sum of odd numbers collapse each term to the clean quadratic ${fr(`(${r} + 1)<sup>2</sup>`, '4')} before summation: the signature special-series move.`,
        ],
        ans: `${Sn} = ${fr(`${n}(2${n}<sup>2</sup> + 9${n} + 13)`, '24')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>(Board)</b> Find ${SR} ${r}(${r} + 1).`, a: fr(`${N1}(${n} + 2)`, '3') },
          { q: '<b>(Board)</b> Find the sum of all numbers between 200 and 400 divisible by 7.', a: '8729' },
          { q: '<b>(Main)</b> Find the 20th term of 2 · 4 + 4 · 6 + 6 · 8 + …', a: '1680' },
          {
            q: `<b>(Main)</b> Find ${Sn} for .6 + .66 + .666 + …`,
            a: `${fr('6', '81')}(9${n} − 1 + 10<sup>−${n}</sup>)<br>= ${fr('2', '27')}(9${n} − 1 + 10<sup>−${n}</sup>)`,
          },
          {
            q: `<b>(Adv)</b> If ${sb('S', '1')}, ${sb('S', '2')}, ${sb('S', '3')} are the sums of the first ${n} natural numbers, their squares, and their cubes, show that 9<i>S</i><sub>2</sub><sup>2</sup> = ${sb('S', '3')}(1 + 8${sb('S', '1')}).`,
            a: `(identity: use ${sb('S', '1')} = ${fr(N1, '2')}, ${sb('S', '2')} = ${fr(N1_2N1, '6')}, ${sb('S', '3')} = <i>S</i><sub>1</sub><sup>2</sup>)`,
          },
          {
            q: `<b>(Adv)</b> Find ${SR} ${r}(${r} + 1)(${r} + 2) and identify the telescoping form.`,
            a: `${fr(`${N1}(${n} + 2)(${n} + 3)`, '4')}, since ${r}(${r} + 1)(${r} + 2) = ${fr('1', '4')}[${r}(${r} + 1)(${r} + 2)(${r} + 3) − (${r} − 1)${r}(${r} + 1)(${r} + 2)], which telescopes.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `${SR} ${r}<sup>3</sup> equals:`,
        opts: [
          {
            label: fr(N1_2N1, '6'),
            nudge: `<b>(A)</b> is ∑${r}<sup>2</sup>: the classic mix-up of the square and cube formulas.`,
          },
          { label: `[${fr(N1, '2')}]<sup>2</sup>`, nudge: null },
          { label: fr(`${n}<sup>2</sup>(${n} + 1)`, '2'), nudge: `<b>(C)</b> squares only ${n}, not the whole fraction.` },
          { label: fr(N1, '2'), nudge: `<b>(D)</b> is ∑${r}.` },
        ],
        correct: 1,
        solution: 'Discriminates whether the three formulas are kept apart.',
      },
      {
        t: 'mcq',
        q: 'The general term of 1 · 2 + 2 · 3 + 3 · 4 + … is:',
        opts: [
          { label: `${n}<sup>2</sup>`, nudge: '<b>(A)</b> forgets the second factor.' },
          { label: N1, nudge: null },
          { label: `${n}(${n} − 1)`, nudge: '<b>(C)</b> shifts the index (that’s the previous product).' },
          { label: `2${n}`, nudge: `<b>(D)</b> fits only ${n} = 1: at ${n} = 2 it gives 4, not 6.` },
        ],
        correct: 1,
        solution: 'The term-recognition step is where special-series problems are won or lost.',
      },
      {
        t: 'mcq',
        q: `If ${SR} ${r} = 78, then ${SR} ${r}<sup>3</sup> equals:`,
        opts: [
          { label: '6084', nudge: null },
          { label: '234', nudge: '<b>(B)</b> is 3 × 78.' },
          { label: '608', nudge: '<b>(C)</b> 608 is 6084 with its last digit dropped, a copying slip: 78<sup>2</sup> = 6084.' },
          { label: '156', nudge: `<b>(D)</b> 156 is 2 × 78, as if ∑${r}<sup>3</sup> were twice ∑${r}; the identity squares: (∑${r})<sup>2</sup> = 78<sup>2</sup> = 6084.` },
        ],
        correct: 0,
        solution: `Since ∑${r}<sup>3</sup> = (∑${r})<sup>2</sup> = 78<sup>2</sup> = 6084. Pure test of the ∑${n}<sup>3</sup> = (∑${n})<sup>2</sup> identity: no need to even find ${n} (it’s 12).`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>The wrong standard sum:</b> Swapping ∑${n}<sup>2</sup> and ∑${n}<sup>3</sup> (the ${fr(`(2${n} + 1)`, '6')} form vs the squared form). The dominant error of this topic.`,
          `<b>No general term found:</b> Failing to find ${tn} as a polynomial before summing: trying to sum a product like ${r}(${r} + 1) without expanding.`,
          `<b>Wrong index range:</b> Applying ∑<sub>1</sub><sup>${n}</sup> formulas to a sum that doesn’t start at 1, without the ∑<sub>1</sub><sup>${n}</sup> − ∑<sub>1</sub><sup>${m}−1</sup> correction.`,
          `<b>Wrong degree for the term:</b> Mis-degree-ing the general term (treating a quadratic ${tn} as linear because only first differences were checked).`,
          '<b>An AGP is not polynomial:</b> Trying the ∑-polynomial method on an AGP term (which is not polynomial) instead of the AGP formula.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• <b>Always find ${tn} first</b>, expand it to powers of ${n}, then sum. This single habit solves the majority of board and Main problems ${ESTIMATE}.<br>• Remember the telescoping origin: if you forget ∑${n}<sup>2</sup>, re-derive it in 4 lines from ${k}<sup>3</sup> − (${k} − 1)<sup>3</sup>.<br>• ∑${n}<sup>3</sup> = (∑${n})<sup>2</sup> is the fastest shortcut in the chapter; recognise cubes on sight.<br>• For series like 5 + 55 + 555, peel off the GP (10<sup>${r}</sup>) and the constant separately.<br>• For “differences in AP/GP,” reach for the <b>method of differences</b>, not brute force.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${SR} 1`, note: n },
          { f: `${SR} ${r}`, note: fr(N1, '2') },
          { f: `${SR} ${r}<sup>2</sup>`, note: fr(N1_2N1, '6') },
          { f: `${SR} ${r}<sup>3</sup>`, note: `[${fr(N1, '2')}]<sup>2</sup> = (∑ ${r})<sup>2</sup>` },
          { f: `${SR} ${r}<sup>4</sup>`, note: fr(`${N1_2N1}(3${n}<sup>2</sup> + 3${n} − 1)`, '30') },
          {
            f: 'Linearity',
            note: `∑(${a} ${tr} + ${b} ${ur}) = ${a}∑ ${tr} + ${b}∑ ${ur}; ∑ ${c} = <i>cn</i>`,
          },
          {
            f: 'Master method',
            note: `${tn} = <i>an</i><sup>3</sup> + <i>bn</i><sup>2</sup> + <i>cn</i> + ${d} ⇒ ${Sn} = ${a}∑${n}<sup>3</sup> + ${b}∑${n}<sup>2</sup> + ${c}∑${n} + <i>dn</i>`,
          },
          {
            f: 'Products two-at-a-time',
            note: `∑<sub><i>i</i> < <i>j</i></sub> ${ai}${sb('a', '<i>j</i>')} = ${fr(`(∑ ${ai})<sup>2</sup> − ∑ ${ai}<sup>2</sup>`, '2')}`,
          },
          { f: 'Partial range', note: `∑<sub>${m}</sub><sup>${n}</sup> = ∑<sub>1</sub><sup>${n}</sup> − ∑<sub>1</sub><sup>${m}−1</sup>` },
        ],
        aids: [],
      },
      {
        t: 'p',
        html: `<b>Workflow:</b> find ${tn} → expand to powers of ${n} → apply standard sums. <b>Shortcut:</b> ∑${n}<sup>3</sup> = (∑${n})<sup>2</sup>.`,
      },
    ],
  },
];
