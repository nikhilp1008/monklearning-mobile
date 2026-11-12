import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 03–04: the book's Units 3–4, pp. 694–711 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 * Topic 03 runs pp. 694–704, Topic 04 pp. 705–711; Unit 5 starts on p. 712.
 * Each unit's numbered sections ("1. Exam Relevance" … "8. Common Pitfalls,
 * Pro-Tips & Cheat Sheet") are its parts, Section 8 split into "Common pitfalls
 * and pro-tips" and "Cheat sheet".
 * Figures: 8.3 (caption p. 695, drawn p. 696) at the end of Topic 03's Concept
 * intuition; 8.4 (caption p. 706, drawn p. 707) at the end of Topic 04's
 * Concept intuition. Neither topic has an unnumbered drawing. Every fraction is
 * stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const l = I('l');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const A = I('A');
const G = I('G');
const H = I('H');
const D = I('D');
const an = sb('a', n);
const a1 = sb('a', '1');
const a2 = sb('a', '2');
const a3 = sb('a', '3');
const Sn = sb('S', n);
const SINF = sb('S', '∞');
const Gk = sb('G', k);
const Hk = sb('H', k);
const G1 = sb('G', '1');
const Gn = sb('G', n);
const H1 = sb('H', '1');
const Hn = sb('H', n);
const A0 = sb('A', '0');
const R2 = `${r}<sup>2</sup>`;
const R3 = `${r}<sup>3</sup>`;
const RN1 = `${r}<sup>${n}−1</sup>`;
const ARN1 = `<i>ar</i><sup>${n}−1</sup>`;
const AR2 = `<i>ar</i><sup>2</sup>`;
const AR3 = `<i>ar</i><sup>3</sup>`;
const A2 = `${a}<sup>2</sup>`;
const A3 = `${a}<sup>3</sup>`;
const G2 = `${G}<sup>2</sup>`;
const B2 = `${b}<sup>2</sup>`;
const anPrime = `<i>a</i>′<sub><i>n</i></sub>`;
const RAB = '√(<i>ab</i>)';
const RAC = '√(<i>ac</i>)';
const AB2 = fr(`${a} + ${b}`, '2');
const HM2 = fr('2<i>ab</i>', `${a} + ${b}`);
const HMAC = fr('2<i>ac</i>', `${a} + ${c}`);
const SN_RM1 = fr(`${a}(${r}<sup>${n}</sup> − 1)`, `${r} − 1`);
const SN_1MR = fr(`${a}(1 − ${r}<sup>${n}</sup>)`, `1 − ${r}`);
const S_INF = fr(a, `1 − ${r}`);
const BA = fr(b, a);
const PROD_K = `∏<sub>${k}=1</sub><sup>${n}</sup>`;
const HP_NTH = fr('1', `${fr('1', a)} + (${n} − 1)${d}`);
const D_HM = fr(`${a} − ${b}`, `(${n} + 1)<i>ab</i>`);
const PQN = fr('<i>pq</i>', n);
const PQPQ = fr('<i>pq</i>', `${p} + ${q}`);
const RINV = `${fr('1', a1)}, ${fr('1', a2)}`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 694–704 ────────────────
  {
    n: '03',
    title: 'Geometric Progression (GP)',
    kalam: 'A geometric progression is the mathematics of repeated multiplication: of things that scale rather than step.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A geometric progression is the multiplicative twin of the AP: where an AP adds a fixed step, a GP multiplies by a fixed factor. It is one of the two most heavily tested ideas in the chapter ${ESTIMATE}.<br>• <b>CBSE Boards:</b> Reliably one short-answer question (nth term, sum, GM) and frequently a 5-mark application ${ESTIMATE}: compound-growth, repaying-loan, or bacterial-doubling word problems. The ${Sn} derivation and the sum-to-infinity formula are both named, directly askable results.<br>• <b>JEE Main:</b> Typically <b>1–2 questions</b> ${ESTIMATE}, often fusing GP with AP/HP, recurring decimals, or the ${B2} = <i>ac</i> GM condition. Sum-to-infinity and the AM–GM inequality are perennial ${ESTIMATE}.<br>• <b>JEE Advanced:</b> GP underpins a large fraction of “three-numbers-in-progression” problems, AM–GM optimisation, infinite-geometric-figure problems (areas of nested squares/triangles), and recurring-decimal-to-fraction conversions ${ESTIMATE}. As with AP, it rarely stands alone: it’s load-bearing scaffolding.`,
      },
      {
        t: 'p',
        html: `<b>Why it’s high-leverage diagnostically:</b> GP errors cluster around three precise decision points: the <b>sign of</b> ${r}, the <b>convergence condition</b> |${r}| < 1 for ${SINF}, and the ± <b>ambiguity of the GM</b>. Each is a clean, single-decision discriminator between rote recall and genuine understanding.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A geometric progression is the mathematics of <b>repeated multiplication</b>: of things that scale rather than step.',
      },
      {
        t: 'p',
        html: `The classic Indian anchor is the <b>chessboard and the grains of wheat.</b> Legend says the inventor of chess, Sissa Ben Dhair, asked King Shirham for one grain on the first square, two on the second, four on the third: doubling each time. The king laughed at so modest a request. He shouldn’t have: the squares hold 1, 2, 4, 8, …, 2<sup>63</sup> grains (a GP with ${a} = 1, ${r} = 2), and the total (2<sup>64</sup> − 1) exceeds all the wheat that has ever existed. <b>Geometric growth feels small at the start and detonates at the end.</b> That single intuition explains compound interest, viral spread, and Moore’s law.`,
      },
      {
        t: 'p',
        html: `The defining property: <b>the ratio between consecutive terms never changes.</b><br>${r} = ${fr(a2, a1)} = ${fr(a3, a2)} = ⋯ = ${fr(sb('a', k), `<i>a</i><sub><i>k</i>−1</sub>`)}`,
      },
      {
        t: 'p',
        html: `Everyday Indian-context GPs:<br>• <b>Compound interest / SIP growth:</b> ₹10,000 growing at 10% per year → ₹11,000, ₹12,100, ₹13,310, … a GP with ${r} = 1.1.<br>• <b>Depreciation:</b> A bike worth ₹80,000 losing 20% of its current value yearly → ₹64,000, ₹51,200, … a GP with ${r} = 0.8 (a shrinking GP, 0 < ${r} < 1).<br>• <b>Nested squares:</b> Join the midpoints of a square’s sides to get a new square of half the area; repeat forever. The areas form a GP with ${r} = ${fr('1', '2')}, and their infinite sum is finite (the fifth worked example of this topic).`,
      },
      {
        t: 'p',
        html: `The deep idea, mirroring AP’s “linearity”: <b>a GP is “exponential.”</b> Plot ${an} against ${n} and you get points on an exponential curve ${a} ⋅ ${RN1}; plot log ${an} and you get a straight line, which is exactly why <b>logs convert a GP into an AP</b> (a property we’ll use repeatedly). Two contrasts to install early:<br>• ${r} > 1: explosive growth. 0 < ${r} < 1: decay toward zero. ${r} < 0: terms <b>alternate in sign</b>, neither increasing nor decreasing.<br>• An infinite AP diverges unless every term is 0; an infinite GP <b>converges</b> precisely when |${r}| < 1. This is the single most important structural difference between the two.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.3' },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'Notation (as in Topic 02, with new GP symbols added):' },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning'],
        rows: [
          [a, `first term (${a} ≠ 0)`],
          [r, `common ratio (${r} ≠ 0)`],
          [an, `nth term; JEE texts also write ${sb('t', n)}, ${sb('T', n)}`],
          [Sn, `sum of first ${n} terms`],
          [SINF, `sum to infinity (only when |${r}| < 1)`],
          [l, 'last term'],
          [`${G}, ${G1}, …, ${Gn}`, 'geometric mean(s) inserted between two numbers'],
        ],
      },
      {
        t: 'p',
        html: `<b>Definition.</b> A sequence ${a1}, ${a2}, … of <b>non-zero</b> terms is a GP if ${fr(sb('a', k), `<i>a</i><sub><i>k</i>−1</sub>`)} = ${r} (a constant) for all ${k} ≥ 2.`,
      },
      { t: 'p', html: '<b>Core formulas:</b>' },
      {
        t: 'formula',
        kicker: 'nth term of a GP',
        main: `${an} = ${a} ${RN1}`,
        legend: [`${an} = the ${n}th term`, `${a} = first term`, `${r} = common ratio`, `${n} = the term’s position`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'nth term from the end of a GP',
        main: `${anPrime} = ${fr(l, RN1)}`,
        legend: [`${anPrime} = the ${n}th term from the end`, `${l} = last term`, `${r} = common ratio`, `${n} = the position from the end`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Sum of ${n} terms of a GP`,
        main: `${Sn} = ${SN_RM1}<br>= ${SN_1MR} (${r} ≠ 1)<br>${Sn} = <i>na</i> (${r} = 1)`,
        legend: [`${Sn} = sum of the first ${n} terms`, `${a} = first term`, `${r} = common ratio`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Sum to infinity of a GP',
        main: `${SINF} = ${S_INF} (valid only when |${r}| < 1)`,
        legend: [`${SINF} = sum to infinity`, `${a} = first term`, `${r} = common ratio`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Geometric Mean (GM).</b> If ${a}, ${b}, ${c} are in GP, then ${b} is the GM of ${a} and ${c}:`,
      },
      {
        t: 'formula',
        kicker: 'Geometric Mean (GM)',
        main: `${B2} = <i>ac</i> ⟺ ${b} = ±${RAC}`,
        legend: [`${b} = the GM of ${a} and ${c}`, `${a}, ${c} = the two numbers (<i>ac</i> > 0)`],
        note: null,
      },
      { t: 'p', html: `For two positive numbers, the single GM is ${G} = ${RAB}.` },
      {
        t: 'p',
        html: `<b>Inserting ${n} GMs between ${a} and ${b}.</b> If ${G1}, …, ${Gn} are ${n} GMs between ${a} and ${b}, the common ratio of the extended GP is ${r} = (${BA})<sup>1/(${n}+1)</sup>, and`,
      },
      {
        t: 'formula',
        kicker: `Inserting ${n} GMs between ${a} and ${b}`,
        main: `${Gk} = ${a}(${BA})<sup>${k}/(${n}+1)</sup><br>${PROD_K} ${Gk} = (${RAB})<sup>${n}</sup> = (single GM)<sup>${n}</sup>`,
        legend: [
          `${Gk} = the ${k}th mean`,
          `${a}, ${b} = the two end numbers (both positive, positive ratio taken)`,
          `${n} = the number of means`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>AM–GM inequality (carried into every optimisation problem).</b> For positive reals ${a1}, …, ${an},`,
      },
      {
        t: 'formula',
        kicker: 'AM–GM inequality',
        main: `${fr(`${a1} + ⋯ + ${an}`, n)} ≥ (${a1}${a2} ⋯ ${an})<sup>1/${n}</sup><br>equality iff all ${sb('a', I('i'))} are equal`,
        legend: [`${a1}, …, ${an} = positive reals`, `${n} = how many numbers`],
        note: null,
      },
      {
        t: 'p',
        html: `For two positive numbers: ${AB2} ≥ ${RAB}, i.e. AM ≥ GM, with the further chain AM ≥ GM ≥ HM and the identity AM × HM = GM<sup>2</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions</b> (the GP analogue of dimensional checks: state these explicitly):<br>1. <b>No term is ever zero</b>, and ${r} ≠ 0. A GP cannot contain 0; if algebra forces a term to 0, the assumption was wrong.<br>2. <b>Sign of ${r} matters.</b> ${r} > 0 → all terms share the first term’s sign (monotone). ${r} < 0 → terms <b>alternate</b> in sign (neither increasing nor decreasing). Never silently assume ${r} > 0.<br>3. <b>${SINF} exists iff |${r}| < 1.</b> For |${r}| ≥ 1 the infinite sum diverges (oscillating when ${r} ≤ −1). Writing ${S_INF} without checking |${r}| < 1 is the chapter’s most punished error.<br>4. <b>GM sign.</b> ${b} = ±${RAC}: choose the sign that keeps the three terms a genuine GP. For real GMs you also need <i>ac</i> > 0 (same-sign endpoints).`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: nth term, ${an} = ${ARN1}.</b> Each term is the previous one times ${r}: ${a2} = <i>ar</i>, ${a3} = ${a2}${r} = ${AR2}, … Telescoping the multiplications, ${an} = ${ARN1}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: sum of ${n} terms (the “multiply-by-${r} and subtract” trick).</b><br>${Sn} = ${a} + <i>ar</i> + ${AR2} + ⋯ + ${ARN1} (i)<br>Multiply through by ${r}:<br>${r}${Sn} = <i>ar</i> + ${AR2} + ⋯ + ${ARN1} + <i>ar</i><sup>${n}</sup> (ii)<br>Subtract (ii) from (i). <b>Every interior term cancels</b>, leaving only the first term of (i) and the last of (ii):<br>${Sn} − ${r}${Sn} = ${a} − <i>ar</i><sup>${n}</sup><br>⟹ ${Sn}(1 − ${r}) = ${a}(1 − ${r}<sup>${n}</sup>)<br>⟹ ${Sn} = ${SN_1MR} (${r} ≠ 1). ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: sum to infinity, ${SINF} = ${S_INF} for |${r}| < 1.</b> Start from ${Sn} = ${S_INF} − ${fr(`<i>ar</i><sup>${n}</sup>`, `1 − ${r}`)}. When |${r}| < 1, the term ${r}<sup>${n}</sup> → 0 as ${n} → ∞ (each multiplication shrinks it). Therefore<br>${SINF} = lim<sub>${n}→∞</sub> ${Sn} = ${S_INF}. ■<br>(If |${r}| ≥ 1, ${r}<sup>${n}</sup> does not vanish, so the limit fails to exist: this is the proof of the convergence condition, not a side note.)`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: product of ${n} GMs equals (single GM)<sup>${n}</sup>.</b> With ${Gk} = <i>ar</i><sup>${k}</sup> and ${r} = (${BA})<sup>1/(${n}+1)</sup>,<br>${PROD_K} ${Gk} = ${a}<sup>${n}</sup> ${r}<sup>1+2+⋯+${n}</sup><br>= ${a}<sup>${n}</sup> ${r}<sup>${n}(${n}+1)/2</sup><br>= ${a}<sup>${n}</sup> (${BA})<sup>1/(${n}+1) ⋅ ${n}(${n}+1)/2</sup><br>= ${a}<sup>${n}</sup> (${BA})<sup>${n}/2</sup><br>= (<i>ab</i>)<sup>${n}/2</sup> = (${RAB})<sup>${n}</sup>. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 5: AM ≥ GM for two positives.</b> For ${a}, ${b} > 0, (√${a} − √${b})<sup>2</sup> ≥ 0<br>⇒ ${a} + ${b} − 2${RAB} ≥ 0<br>⇒ ${AB2} ≥ ${RAB}, with equality iff √${a} = √${b}, i.e. ${a} = ${b}. ■`,
      },
      {
        t: 'p',
        html: `<b>Key Procedure: symmetric selection.</b> When a problem gives the product of GP terms, choose them symmetrically so the ${r}’s cancel:<br>• 3 terms: ${fr(a, r)}, ${a}, <i>ar</i> (product = ${A3})<br>• 4 terms: ${fr(a, R3)}, ${fr(a, r)}, <i>ar</i>, ${AR3} (product = ${a}<sup>4</sup>, common ratio ${R2})<br>• 5 terms: ${fr(a, R2)}, ${fr(a, r)}, ${a}, <i>ar</i>, ${AR2} (product = ${a}<sup>5</sup>)<br>(Note the even case uses ratio ${R2} between the symmetric terms: the GP analogue of the AP’s “2${d}” trap.)`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Difficulty ladder: CBSE Board → JEE Main → JEE Advanced.' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'The product of three numbers in GP is 216 and the sum of their pairwise products is 156. Find the numbers.',
        steps: [
          `Take the terms symmetrically as ${fr(a, r)}, ${a}, <i>ar</i>. Product:<br>${fr(a, r)} ⋅ ${a} ⋅ <i>ar</i> = ${A3} = 216 ⇒ ${a} = 6.`,
          `Sum of pairwise products:<br>${fr(a, r)} ⋅ ${a} + ${a} ⋅ <i>ar</i> + ${fr(a, r)} ⋅ <i>ar</i><br>= ${A2}(${fr('1', r)} + ${r} + 1) = 156<br>⇒ 36(${fr('1', r)} + ${r} + 1) = 156.`,
          `So ${fr('1', r)} + ${r} = ${fr('156', '36')} − 1 = ${fr('10', '3')}<br>⇒ 3${R2} − 10${r} + 3 = 0<br>⇒ (3${r} − 1)(${r} − 3) = 0<br>⇒ ${r} = 3 or ${r} = ${fr('1', '3')}. Either way the numbers are 2, 6, 18 (order reversed for ${r} = ${fr('1', '3')}).`,
          'Symmetric selection turned two unknowns into one.',
        ],
        ans: '2, 6, 18',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Express the recurring decimal 0.3̅ = 0.3333… as a fraction.',
        steps: [
          `Write it as an infinite GP:<br>0.3 + 0.03 + 0.003 + ⋯<br>= ${fr('3', '10')} + ${fr('3', '100')} + ${fr('3', '1000')} + …`,
          `with ${a} = ${fr('3', '10')}, ${r} = ${fr('1', '10')} (and |${r}| < 1 ✓). Then<br>${SINF} = ${S_INF} = ${fr(fr('3', '10'), `1 − ${fr('1', '10')}`)} = ${fr(fr('3', '10'), fr('9', '10'))} = ${fr('1', '3')}.`,
          `The convergence check (|${r}| = ${fr('1', '10')} < 1) is what licenses the formula: every recurring decimal is secretly a convergent GP.`,
        ],
        ans: fr('1', '3'),
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'The sum of an infinite GP is 2 and the sum of the cubes of its terms is 24. Find the first term and common ratio.',
        steps: [
          `The terms ${a}, <i>ar</i>, ${AR2}, … have ${SINF} = ${S_INF} = 2, so ${a} = 2(1 − ${r}). Their cubes ${A3}, ${A3}${R3}, … form a GP with ratio ${R3}:<br>${fr(A3, `1 − ${R3}`)} = 24.`,
          `Substitute ${A3} = 8(1 − ${r})<sup>3</sup> from the first relation:<br>${fr(`8(1 − ${r})<sup>3</sup>`, `1 − ${R3}`)} = 24<br>⇒ ${fr(`(1 − ${r})<sup>3</sup>`, `1 − ${R3}`)} = 3<br>⇒ ${fr(`(1 − ${r})<sup>2</sup>`, `1 + ${r} + ${R2}`)} = 3,<br>using 1 − ${R3} = (1 − ${r})(1 + ${r} + ${R2}).`,
          `Expanding: 1 − 2${r} + ${R2} = 3(1 + ${r} + ${R2})<br>⇒ 2${R2} + 5${r} + 2 = 0<br>⇒ (2${r} + 1)(${r} + 2) = 0<br>⇒ ${r} = −${fr('1', '2')} or ${r} = −2. The convergence condition |${r}| < 1 rejects ${r} = −2, leaving ${r} = −${fr('1', '2')}, hence ${a} = 2(1 + ${fr('1', '2')}) = 3.`,
          `<b>Check:</b> ${fr('27', `1 − (−${fr('1', '8')})`)} = ${fr('27', fr('9', '8'))} = 24 ✓. (The convergence condition is what discriminates the two roots: a textbook trap.)`,
        ],
        ans: `${a} = 3, ${r} = −${fr('1', '2')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main (AIEEE)',
        q: 'The first two terms of a GP add to 12 and the third and fourth terms add to 48. If the terms are alternately positive and negative, find the first term.',
        steps: [
          `${a} + <i>ar</i> = 12 and ${AR2} + ${AR3} = 48. Divide:<br>${fr(`${AR2}(1 + ${r})`, `${a}(1 + ${r})`)} = ${fr('48', '12')}<br>⇒ ${R2} = 4 ⇒ ${r} = ±2.`,
          `“Alternately positive and negative” forces ${r} < 0, so ${r} = −2. Then ${a}(1 + ${r}) = ${a}(−1) = 12 ⇒ ${a} = −12.`,
          `The qualitative phrase “alternately positive and negative” is the entire constraint that selects ${r} = −2 over ${r} = +2.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (infinite geometric figure)',
        q: 'A square has side 16 cm. A second square is drawn by joining the midpoints of its sides, a third inside the second the same way, and so on forever. Find the sum of the areas of all the squares.',
        steps: [
          `Joining midpoints halves the area each time. First area = 16<sup>2</sup> = 256. Each successive square has area ${fr('1', '2')} the previous, so the areas form a GP: 256, 128, 64, … with ${a} = 256, ${r} = ${fr('1', '2')} (|${r}| < 1 ✓).`,
          `Total = ${S_INF} = ${fr('256', `1 − ${fr('1', '2')}`)} = 512 cm<sup>2</sup>.`,
          'The infinite nesting has a finite total area: the signature payoff of a convergent GP.',
        ],
        ans: '512 cm<sup>2</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (AM–GM optimisation)',
        q: `If ${a}, ${b}, ${c} are three positive numbers, prove that (${a} + ${b} + ${c})(${fr('1', a)} + ${fr('1', b)} + ${fr('1', c)}) ≥ 9.`,
        steps: [
          `Apply AM ≥ GM separately to each triple:<br>${a} + ${b} + ${c} ≥ 3(<i>abc</i>)<sup>1/3</sup>,<br>${fr('1', a)} + ${fr('1', b)} + ${fr('1', c)} ≥ 3(<i>abc</i>)<sup>−1/3</sup>.`,
          `Multiplying the two inequalities (both sides positive):<br>(${a} + ${b} + ${c})(${fr('1', a)} + ${fr('1', b)} + ${fr('1', c)})<br>≥ 9(<i>abc</i>)<sup>1/3</sup>(<i>abc</i>)<sup>−1/3</sup> = 9,<br>with equality iff ${a} = ${b} = ${c}. ■`,
          'This “multiply two AM–GMs” move is one of the highest-yield Advanced techniques in the whole chapter.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'In a GP of positive terms, each term equals the sum of the next two terms. Find the common ratio.',
        steps: [
          `“Each term = sum of the next two”: ${a} = <i>ar</i> + ${AR2} ⇒ 1 = ${r} + ${R2} ⇒ ${R2} + ${r} − 1 = 0.`,
          `So ${r} = ${fr('−1 + √5', '2')} (rejecting the negative root, since terms are positive). Answer: ${r} = ${fr('√5 − 1', '2')}, the reciprocal of the golden ratio.`,
          'The positivity condition kills the extraneous root.',
        ],
        ans: `${r} = ${fr('√5 − 1', '2')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (chess-grains, closed form)',
        q: 'A grain of wheat is placed on the first square of a chessboard, two on the second, four on the third, doubling to the 64th. Find the total number of grains.',
        steps: [
          `The counts 1, 2, 4, …, 2<sup>63</sup> form a GP with ${a} = 1, ${r} = 2, ${n} = 64:<br><i>S</i><sub>64</sub> = ${SN_RM1} = ${fr('1 ⋅ (2<sup>64</sup> − 1)', '2 − 1')}<br>= 2<sup>64</sup> − 1 ≈ 1.8 × 10<sup>19</sup>.`,
          `A concrete demonstration of why ${r} > 1 geometric growth “detonates.”`,
        ],
        ans: '2<sup>64</sup> − 1',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>(Board)</b> Find the 9th term and the sum of the first 9 terms of the GP 2, 6, 18, …',
            a: '<i>a</i><sub>9</sub> = 13122, <i>S</i><sub>9</sub> = 19682',
          },
          { q: '<b>(Board)</b> Insert three GMs between 1 and 256.', a: '4, 16, 64 (or −4, 16, −64, with ratio −4)' },
          {
            q: '<b>(Board)</b> Express 0.4̅2̅ as a fraction using an infinite GP.',
            a: `${fr('42', '99')} = ${fr('14', '33')}`,
          },
          {
            q: '<b>(Main)</b> If the 4th, 7th and last terms of a GP are 10, 80 and 2560, find the first term and the number of terms.',
            a: `${a} = ${fr('5', '4')}, ${n} = 12`,
          },
          {
            q: `<b>(Main)</b> The (<i>m</i> + ${n})th term of a GP is ${p} and the (<i>m</i> − ${n})th term is ${q}. Show that the <i>m</i>th term is √(<i>pq</i>).`,
            a: '(prove via <i>a</i><sub><i>m</i>+<i>n</i></sub> ⋅ <i>a</i><sub><i>m</i>−<i>n</i></sub> = <i>a</i><sub><i>m</i></sub><sup>2</sup>)',
          },
          {
            q: `<b>(Main)</b> If ${sb('S', '1')}, ${sb('S', '2')}, ${sb('S', '3')} are the sums of the first ${n}, 2${n}, 3${n} terms of a GP, prove that ${sb('S', '1')}(${sb('S', '3')} − ${sb('S', '2')}) = (${sb('S', '2')} − ${sb('S', '1')})<sup>2</sup>.`,
            a: '(identity)',
          },
          {
            q: `<b>(Adv)</b> Three distinct numbers ${x}, <i>y</i>, <i>z</i> are in GP and ${x} + <i>y</i>, <i>y</i> + <i>z</i>, <i>z</i> + ${x} are in AP. Find the common ratio.`,
            a: `${r} = −2`,
          },
          {
            q: `<b>(Adv)</b> If one GM ${G} and two AMs ${p}, ${q} are inserted between two positive numbers, prove that ${G2} = (2${p} − ${q})(2${q} − ${p}).`,
            a: `(use ${G2} = <i>ab</i> with ${a} = 2${p} − ${q}, ${b} = 2${q} − ${p})`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `The sum to infinity of 1 + ${fr('3', '4')} + ${fr('9', '16')} + ${fr('27', '64')} + … is:`,
        opts: [
          {
            label: '3',
            nudge: `<b>(A)</b> comes from ${fr('1', `1 − ${r}`)} with ${r} = ${fr('2', '3')} (misreading the ratio).`,
          },
          { label: '4', nudge: null },
          {
            label: fr('7', '4'),
            nudge: `<b>(C)</b> is ${a} + <i>ar</i> = 1 + ${fr('3', '4')}, summing only two terms.`,
          },
          {
            label: 'does not exist',
            nudge: `<b>(D)</b> is the lure for a student who wrongly thinks ${r} = ${fr('3', '4')} is “too big” to converge.`,
          },
        ],
        correct: 1,
        solution: `${a} = 1, ${r} = ${fr('3', '4')}, |${r}| < 1 ✓, so ${SINF} = ${fr('1', `1 − ${fr('3', '4')}`)} = 4. Discriminates whether the student knows the exact convergence threshold.`,
      },
      {
        t: 'mcq',
        q: `If ${x}, 2${x} + 2, 3${x} + 3 are in GP, the fourth term is:`,
        opts: [
          {
            label: '27',
            nudge: `<b>(A)</b> 27 is −9 × 3 with the sign dropped: it uses the ratio 3 instead of ${fr('3', '2')} and also loses the minus sign of the terms −4, −6, −9.`,
          },
          { label: '−27', nudge: `<b>(B)</b> uses ratio 3 instead of ${fr('3', '2')}.` },
          {
            label: '13.5',
            nudge: `<b>(C)</b> 13.5 has the right size but the wrong sign: the terms −4, −6, −9 are all negative, so the fourth term is −9 × ${fr('3', '2')} = −13.5.`,
          },
          { label: '−13.5', nudge: null },
        ],
        correct: 3,
        solution: `GP condition: (2${x} + 2)<sup>2</sup> = ${x}(3${x} + 3)<br>⇒ 4${x}<sup>2</sup> + 8${x} + 4 = 3${x}<sup>2</sup> + 3${x}<br>⇒ ${x}<sup>2</sup> + 5${x} + 4 = 0<br>⇒ ${x} = −1 or ${x} = −4. ${x} = −1 makes terms −1, 0, 0: invalid (no zero in a GP). So ${x} = −4: terms −4, −6, −9, ratio ${fr('3', '2')}, fourth term −9 ⋅ ${fr('3', '2')} = −13.5. The signature trap: failing to reject ${x} = −1 on the “no zero term” rule.`,
      },
      {
        t: 'mcq',
        q: 'Three numbers are in AP. If 8 is added to the first, the result is a GP whose terms sum to 26. The common ratio of that GP (ascending order) is:',
        opts: [
          { label: '3', nudge: null },
          { label: fr('1', '3'), nudge: '<b>(B)</b> is the descending-order ratio.' },
          {
            label: '2',
            nudge: '<b>(C)</b> 2 fails the check: a GP with middle term 6 and ratio 2 is 3, 6, 12, which sums to 21, not 26.',
          },
          {
            label: fr('1', '2'),
            nudge: `<b>(D)</b> ${fr('1', '2')} fails the same check: 12, 6, 3 sums to 21, not 26, and a ratio below 1 is not the ascending order.`,
          },
        ],
        correct: 0,
        solution: `Let AP be ${a} − ${d}, ${a}, ${a} + ${d}. Then ${a} − ${d} + 8, ${a}, ${a} + ${d} is a GP summing to 26, so 3${a} + 8 = 26 ⇒ ${a} = 6. GM condition: ${A2} = (${a} − ${d} + 8)(${a} + ${d})<br>⇒ −${d}<sup>2</sup> + 8${a} + 8${d} = 0<br>⇒ ${d}<sup>2</sup> − 8${d} − 48 = 0<br>⇒ ${d} = 12 or −4. Both give the GP {2, 6, 18}; in ascending order ${r} = 3.`,
      },
      {
        t: 'mcq',
        q: `If ${a}, ${b}, ${c} are positive and in GP, then log ${a}, log ${b}, log ${c} are in:`,
        opts: [
          { label: 'GP', nudge: '<b>(A)</b> is the reflexive wrong guess (GP in → GP out).' },
          { label: 'AP', nudge: null },
          { label: 'HP', nudge: '<b>(C)</b> misses the log–exponential duality entirely.' },
          { label: 'none', nudge: '<b>(D)</b> misses the log–exponential duality entirely.' },
        ],
        correct: 1,
        solution: `${B2} = <i>ac</i> ⇒ 2 log ${b} = log ${a} + log ${c}, which is the AP condition. <b>Logs turn a GP into an AP</b> (and the converse holds too). A one-line conceptual discriminator for the GP↔AP bridge.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Convergence condition:</b> Writing ${SINF} = ${S_INF} without checking |${r}| < 1. The single most punished GP error.`,
          `<b>Sign of ${r}:</b> Dropping the ${r} < 0 (alternating) case, or picking the wrong sign of ${r} when two roots survive.`,
          `<b>Sign of ${G}:</b> Taking ${b} = +${RAC} blindly; the GM can be negative, and a real GM needs <i>ac</i> > 0.`,
          '<b>A zero term:</b> Accepting a solution that forces a term to 0 (no term of a GP may be zero).',
          `<b>Even symmetric ratio:</b> Using ratio ${r} (not ${R2}) when picking an even number of symmetric terms (${fr(a, R3)}, ${fr(a, r)}, <i>ar</i>, ${AR3}).`,
          `<b>Dividing by ${r} − 1:</b> Applying ${SN_RM1} when ${r} = 1 (division by zero); the sum is then simply <i>na</i>.`,
          '<b>Extraneous roots:</b> Forgetting positivity/range conditions that reject an extraneous root (golden-ratio problem, etc.).',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• Given a <b>product</b>, switch to symmetric terms (${fr(a, r)}, ${a}, <i>ar</i>): it collapses two unknowns to one.<br>• Given specific <b>terms</b>, stay with ${ARN1}.<br>• For “${a}, ${b}, ${c} in GP” use ${B2} = <i>ac</i> directly: far faster than introducing ${a}, ${r}.<br>• For a GP of positive terms, <b>take logs</b> to convert the problem into the (often easier) AP toolkit, and vice versa.<br>• Every <b>recurring decimal</b> is a convergent GP: recognise it on sight.<br>• For inequalities/optimisation with positive terms, reach for <b>AM ≥ GM</b> before calculus.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Condition'],
        rows: [
          ['nth term', `${an} = ${ARN1}`, `${a} ≠ 0, ${r} ≠ 0`],
          ['nth term from end', `${anPrime} = ${fr(l, RN1)}`, ''],
          [`Sum of ${n} terms`, `${Sn} = ${SN_RM1}<br>= ${SN_1MR}`, `${r} ≠ 1`],
          [`Sum (${r} = 1)`, `${Sn} = <i>na</i>`, `${r} = 1`],
          ['Sum to infinity', `${SINF} = ${S_INF}`, `|${r}| < 1`],
          [`GM of ${a}, ${c}`, `${B2} = <i>ac</i>, ${b} = ±${RAC}`, `${a}, ${b}, ${c} in GP`],
          [
            `${n} GMs between ${a}, ${b}`,
            `${Gk} = ${a}(${BA})<sup>${k}/(${n}+1)</sup>;<br>∏ ${Gk} = (${RAB})<sup>${n}</sup>`,
            '',
          ],
          ['AM–GM', `${AB2} ≥ ${RAB};<br>AM ⋅ HM = GM<sup>2</sup>`, `${a}, ${b} > 0`],
          ['Symmetric pick (odd)', `${fr(a, r)}, ${a}, <i>ar</i>`, `product = ${A3}`],
          ['Symmetric pick (even)', `${fr(a, R3)}, ${fr(a, r)}, <i>ar</i>, ${AR3}`, `ratio = ${R2}`],
          ['GP ↔ AP bridge', `${a}, ${b}, ${c} in GP<br>⇔ log ${a}, log ${b}, log ${c} in AP`, 'terms > 0'],
        ],
      },
      {
        t: 'p',
        html: `<b>3-term GP test:</b> ${B2} = <i>ac</i>.<br>${r} < 0 ⟹ alternating signs.<br><b>Recurring decimal = convergent GP.</b>`,
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 705–711 ────────────────
  {
    n: '04',
    title: 'Harmonic Progression (HP) and Harmonic Mean',
    kalam: 'A sequence is in HP exactly when the reciprocals of its terms are in AP.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The third classical progression. A sequence is in HP exactly when the <b>reciprocals</b> of its terms are in AP, so HP inherits all of AP’s machinery, applied upside-down.<br>• <b>CBSE Boards:</b> Lighter than AP/GP, but HM of two numbers and simple HP term-finding appear in some boards and in the means triad ${ESTIMATE}.<br>• <b>JEE Main:</b> A reliable source of questions ${ESTIMATE}: “the ${p}th term of an HP is ${q}, the ${q}th is ${p}, find …”, HM computations, and HP fused with AP/GP (“${a}, ${b}, ${c} in AP and ${b}, ${c}, ${d} in HP”).<br>• <b>JEE Advanced:</b> HP rarely stands alone ${ESTIMATE}; it appears inside the ${A} ≥ ${G} ≥ ${H} machinery, in optimisation, and in mixed-progression algebra. The identity <i>AH</i> = ${G2} (Topic 05) connects all three means.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A harmonic progression is the mathematics of <b>rates over a fixed amount of work</b>: the place where “average” stops meaning the arithmetic mean.',
      },
      {
        t: 'p',
        html: `The classic anchor: <b>average speed for a round trip.</b> Drive to a town at 40 km/h and back along the same road at 60 km/h. The average speed is not ${fr('40 + 60', '2')} = 50; it’s the <b>harmonic mean</b>, ${fr('2 ⋅ 40 ⋅ 60', '40 + 60')} = 48 km/h. Why? Because equal distances (not equal times) are covered at each speed, so the rates combine harmonically. Any time you average rates over a fixed task (speed over fixed distance, work-rate over a fixed job, unit price when the same sum is spent each time), the HM is the honest average.`,
      },
      {
        t: 'p',
        html: `The defining move is pure reciprocity: ${a1}, ${a2}, ${a3}, … are in <b>HP</b> if and only if ${RINV}, ${fr('1', a3)}, … are in <b>AP</b>. So every HP question becomes an AP question the instant you flip the terms over.`,
      },
      {
        t: 'p',
        html: 'A crucial structural fact, in contrast to AP and GP: <b>HP has no neat formula for the sum of its terms.</b> You sum an HP only in special cases (often by telescoping: Topic 08). This is not a gap in your knowledge; it is a genuine feature of the topic.',
      },
      {
        t: 'p',
        html: `For positive numbers, the three means always line up in the same order (${A} ≥ ${G} ≥ ${H}), coinciding only when all the numbers are equal (developed fully in Topic 05).`,
      },
      { t: 'fig', id: 'm11-08-fig-8.4' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Notation (in use): ${H} = harmonic mean; ${H1}, …, ${Hn} = inserted HMs. The reciprocal AP has first term ${fr('1', a)} and common difference ${d}.`,
      },
      {
        t: 'p',
        html: `<b>Definition.</b> ${a1}, ${a2}, … (all non-zero) are in <b>HP</b> ⟺ ${RINV}, … are in <b>AP</b>.`,
      },
      {
        t: 'p',
        html: `<b>nth term of an HP.</b> If the reciprocal AP has first term ${fr('1', a)} and common difference ${d},`,
      },
      {
        t: 'formula',
        kicker: 'nth term of an HP',
        main: `${an} = ${HP_NTH}`,
        legend: [
          `${an} = the ${n}th term of the HP`,
          `${a} = first term of the HP (so ${fr('1', a)} is the first term of the reciprocal AP)`,
          `${d} = common difference of the reciprocal AP`,
          `${n} = the term’s position`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Harmonic mean.</b> If ${a}, ${b}, ${c} are in HP, then ${b} is the HM of ${a} and ${c}:`,
      },
      {
        t: 'formula',
        kicker: 'Harmonic mean',
        main: `${b} = ${HMAC} (two numbers)<br>HM of ${a1}, …, ${an} = ${fr(n, `${fr('1', a1)} + ⋯ + ${fr('1', an)}`)}`,
        legend: [`${b} = the HM of ${a} and ${c}`, `${a}, ${c} = the two numbers`, `${a1}, …, ${an} = the ${n} numbers (none of them 0)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Inserting ${n} HMs between ${a} and ${b}.</b> Insert ${n} AMs between ${fr('1', a)} and ${fr('1', b)}, then reciprocate. The reciprocal AP has common difference`,
      },
      {
        t: 'formula',
        kicker: `Inserting ${n} HMs between ${a} and ${b}`,
        main: `${D} = ${fr(`${fr('1', b)} − ${fr('1', a)}`, `${n} + 1`)} = ${D_HM}<br>${fr('1', Hk)} = ${fr('1', a)} + <i>kD</i>, ${k} = 1, …, ${n}`,
        legend: [
          `${D} = common difference of the reciprocal AP`,
          `${Hk} = the ${k}th HM`,
          `${a}, ${b} = the two end numbers (both non-zero)`,
          `${n} = the number of means`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Relationship among the means</b> (two positive numbers: full treatment in Topic 05): ${A} = ${AB2}, ${G} = ${RAB}, ${H} = ${HM2}; <i>AH</i> = ${G2}; ${A} ≥ ${G} ≥ ${H}.`,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>No term of an HP can be zero</b> (its reciprocal would be undefined). Positivity is required for the ${A} ≥ ${G} ≥ ${H} chain.<br>2. <b>There is no general closed form for the sum of an HP.</b> Do not invent one; sum termwise or telescope (Topic 08).<br>3. <b>HM of two numbers</b> uses ${HMAC}: note the 2 in the numerator (a frequent slip is writing ${fr('<i>ac</i>', `${a} + ${c}`)}).<br>4. <b>Reciprocate first.</b> Every HP computation should begin by converting to the reciprocal AP.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: HM of two numbers.</b> If ${a}, ${H}, ${b} are in HP, then ${fr('1', a)}, ${fr('1', H)}, ${fr('1', b)} are in AP, so ${fr('1', H)} is the AM of ${fr('1', a)} and ${fr('1', b)}:<br>${fr('1', H)} = ${fr('1', '2')}(${fr('1', a)} + ${fr('1', b)}) = ${fr(`${a} + ${b}`, '2<i>ab</i>')}<br>⟹ ${H} = ${HM2}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: the classic “${p}th term = ${q}, ${q}th term = ${p}” result.</b> Let the reciprocal AP have first term ${A0} and common difference ${d}. Then ${A0} + (${p} − 1)${d} = ${fr('1', q)} and ${A0} + (${q} − 1)${d} = ${fr('1', p)}. Subtracting, (${p} − ${q})${d} = ${fr('1', q)} − ${fr('1', p)} = ${fr(`${p} − ${q}`, '<i>pq</i>')}, so ${d} = ${fr('1', '<i>pq</i>')}. Back-substituting, ${A0} = ${fr('1', '<i>pq</i>')}. Hence the ${n}th reciprocal is ${fr('1', '<i>pq</i>')} + (${n} − 1)${fr('1', '<i>pq</i>')} = ${fr(n, '<i>pq</i>')}, giving<br>${an} = ${PQN}. ■<br>In particular the (${p} + ${q})th term is ${PQPQ}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: <i>AH</i> = ${G2} (link to Topic 05).</b> <i>AH</i> = ${AB2} ⋅ ${HM2} = <i>ab</i> = ${G2}, so ${A}, ${G}, ${H} are in GP. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: ${G} ≥ ${H}.</b> Since <i>AH</i> = ${G2} and ${A} ≥ ${G} (AM ≥ GM, Topic 05), ${H} = ${fr(G2, A)} ≤ ${fr(G2, G)} = ${G}. Combined with ${A} ≥ ${G}: the chain ${A} ≥ ${G} ≥ ${H}. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Ladder: CBSE Board → JEE Main → JEE Advanced. (Standard curriculum problems.)' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find the HM of 4 and 12, and verify <i>AH</i> = ${G2}.`,
        steps: [
          `${H} = ${fr('2 ⋅ 4 ⋅ 12', '4 + 12')} = ${fr('96', '16')} = 6.`,
          `Also ${A} = 8, ${G} = √48 = 4√3.`,
          `<b>Check:</b> <i>AH</i> = 48 = (4√3)<sup>2</sup> = ${G2} ✓.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `The 3rd term of an HP is ${fr('1', '7')} and the 7th term is ${fr('1', '15')}. Find the 10th term.`,
        steps: [
          `Reciprocals form an AP (writing ${sb('b', n)} = ${fr('1', an)}): ${sb('b', '3')} = 7, ${sb('b', '7')} = 15. Common difference ${d} = ${fr('15 − 7', '7 − 3')} = 2, first term ${sb('b', '1')} = 7 − 2(2) = 3. Tenth reciprocal = 3 + 9(2) = 21.`,
          'So the 10th HP term is',
        ],
        ans: fr('1', '21'),
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `If the ${p}th term of an HP is ${q} and the ${q}th term is ${p}, find the (${p} + ${q})th term and the ${n}th term.`,
        steps: [
          `By Derivation 2, ${an} = ${PQN}, so the (${p} + ${q})th term is ${PQPQ}.`,
          '(Reciprocate-first turns a messy HP problem into one line of AP algebra.)',
        ],
        ans: PQPQ,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Insert 4 harmonic means between 1 and ${fr('1', '6')}.`,
        steps: [
          `Insert 4 AMs between ${fr('1', '1')} = 1 and ${fr('1', fr('1', '6'))} = 6: common difference ${D} = ${fr('6 − 1', '4 + 1')} = 1.`,
          'The reciprocal AP is 1, 2, 3, 4, 5, 6, so the HMs are the reciprocals of the interior terms:',
        ],
        ans: `${fr('1', '2')}, ${fr('1', '3')}, ${fr('1', '4')}, ${fr('1', '5')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If the AM of two numbers is 9 and their HM is 4, find the numbers (using ${A}, ${G}, ${H}).`,
        steps: [
          `${A} = 9, ${H} = 4, so ${G2} = <i>AH</i> = 36 ⇒ ${G} = 6.`,
          `The numbers have ${a} + ${b} = 2${A} = 18 and <i>ab</i> = ${G2} = 36, so they are roots of ${x}<sup>2</sup> − 18${x} + 36 = 0<br>⇒ ${x} = 9 ± √(81 − 36) = 9 ± √45 = 9 ± 3√5. So 9 + 3√5, 9 − 3√5.`,
          'The three means together pin the numbers without ever solving the HM equation directly.',
        ],
        ans: '9 + 3√5, 9 − 3√5',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If ${a}, ${b}, ${c} are in HP, prove that ${fr(a, `${b} + ${c}`)}, ${fr(b, `${c} + ${a}`)}, ${fr(c, `${a} + ${b}`)} are in HP.`,
        steps: [
          `${a}, ${b}, ${c} in HP<br>⇒ ${fr('1', a)}, ${fr('1', b)}, ${fr('1', c)} in AP<br>⇒ ${fr(`${a} + ${b} + ${c}`, a)}, ${fr(`${a} + ${b} + ${c}`, b)}, ${fr(`${a} + ${b} + ${c}`, c)} in AP (multiply by constant ${a} + ${b} + ${c})<br>⇒ ${fr(`${a} + ${b} + ${c}`, a)} − 1, … in AP<br>⇒ ${fr(`${b} + ${c}`, a)}, ${fr(`${c} + ${a}`, b)}, ${fr(`${a} + ${b}`, c)} in AP<br>⇒ their reciprocals ${fr(a, `${b} + ${c}`)}, ${fr(b, `${c} + ${a}`)}, ${fr(c, `${a} + ${b}`)} are in HP. ■`,
          'The reciprocate-and-manipulate chain is the signature HP proof technique.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '<b>(Board)</b> Find the HM of 3 and 7.', a: `${fr('21', '5')} = 4.2` },
          {
            q: `<b>(Board)</b> The 2nd term of an HP is ${fr('1', '5')} and the 5th term is ${fr('1', '11')}. Find the 1st term.`,
            a: `${fr('1', '3')} (reciprocal AP: 3, 5, …)`,
          },
          {
            q: `<b>(Main)</b> Insert 3 HMs between 2 and ${fr('1', '2')}.`,
            a: `reciprocal AP ${fr('1', '2')}, ${fr('7', '8')}, ${fr('5', '4')}, ${fr('13', '8')}, 2 → HMs ${fr('8', '7')}, ${fr('4', '5')}, ${fr('8', '13')}`,
          },
          { q: `<b>(Main)</b> If ${a}, ${b}, ${c} are in HP, show that ${b} = ${HMAC}.`, a: '(reciprocate)' },
          {
            q: '<b>(Adv)</b> If the AM and GM of two numbers are 10 and 8, find their HM.',
            a: `${H} = ${fr(G2, A)} = ${fr('64', '10')} = 6.4`,
          },
          {
            q: `<b>(Adv)</b> If ${a}, ${b}, ${c} are in HP, prove ${fr('1', `${b} − ${a}`)} + ${fr('1', `${b} − ${c}`)} = ${fr('1', a)} + ${fr('1', c)}.`,
            a: `(use ${fr('2', b)} = ${fr('1', a)} + ${fr('1', c)}).`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `The HM of two numbers ${a} and ${b} is:`,
        opts: [
          { label: AB2, nudge: '<b>(A)</b> is the AM.' },
          { label: RAB, nudge: '<b>(B)</b> is the GM.' },
          { label: HM2, nudge: null },
          {
            label: fr('<i>ab</i>', `${a} + ${b}`),
            nudge: '<b>(D)</b> is the classic trap: dropping the factor of 2 in the numerator (a very common slip).',
          },
        ],
        correct: 2,
        solution: `${fr('1', H)} is the AM of ${fr('1', a)} and ${fr('1', b)}: ${fr('1', H)} = ${fr('1', '2')}(${fr('1', a)} + ${fr('1', b)}) = ${fr(`${a} + ${b}`, '2<i>ab</i>')}, so ${H} = ${HM2}. Tests the exact HM formula.`,
      },
      {
        t: 'mcq',
        q: `If ${a1}, ${a2}, … are in HP, then ${RINV}, … are in:`,
        opts: [
          {
            label: 'HP',
            nudge: `<b>(A)</b> is the reflexive wrong guess: for the HP 1, ${fr('1', '2')}, ${fr('1', '3')}, the reciprocals 1, 2, 3 are not an HP, because their own reciprocals 1, ${fr('1', '2')}, ${fr('1', '3')} are not in AP.`,
          },
          { label: 'AP', nudge: null },
          {
            label: 'GP',
            nudge: `<b>(C)</b> fails: the reciprocals have a constant gap, not a constant ratio. For the HP 1, ${fr('1', '2')}, ${fr('1', '3')}, the reciprocals 1, 2, 3 have gap 1 but ratios 2 and ${fr('3', '2')}.`,
          },
          {
            label: 'none',
            nudge: '<b>(D)</b> fails: the reciprocals of an HP always form an AP; that is what being an HP means.',
          },
        ],
        correct: 1,
        solution: `By definition, ${a1}, ${a2}, … are in HP exactly when ${RINV}, … are in AP. One-line check of the defining property.`,
      },
      {
        t: 'mcq',
        q: `For two distinct positive numbers, ${A}, ${G}, ${H} satisfy:`,
        opts: [
          { label: `${A} < ${G} < ${H}`, nudge: '<b>(A)</b> reverses the chain (the order is fixed, not free).' },
          { label: `${A} > ${G} > ${H}`, nudge: null },
          {
            label: `${G} > ${A} > ${H}`,
            nudge: `<b>(C)</b> puts ${G} above ${A}, but for positive numbers ${A} ≥ ${G} always, since (√${a} − √${b})<sup>2</sup> ≥ 0. Check with 4 and 16: ${A} = 10, ${G} = 8, ${H} = 6.4.`,
          },
          { label: `${A} = ${G} = ${H}`, nudge: '<b>(D)</b> holds only when the numbers are equal.' },
        ],
        correct: 1,
        solution: `For distinct positive ${a}, ${b}: ${A} − ${G} = ${fr(`(√${a} − √${b})<sup>2</sup>`, '2')} > 0, so ${A} > ${G}; and ${H} = ${fr(G2, A)} < ${fr(G2, G)} = ${G}. So ${A} > ${G} > ${H} (4 and 16 give 10 > 8 > 6.4). Tests the ordering of the three means.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to flip:</b> Attacking HP terms directly instead of converting to the reciprocal AP. The dominant HP error.',
          `<b>Missing factor of 2:</b> Writing ${fr('<i>ab</i>', `${a} + ${b}`)} instead of ${HM2}.`,
          '<b>Inventing a sum rule:</b> Assuming a closed-form sum for an HP: there is none in general.',
          '<b>A zero term:</b> Allowing a zero term (its reciprocal is undefined).',
          `<b>Order of the three means</b> (shared with Topic 05): reversing ${A} ≥ ${G} ≥ ${H}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• <b>Reciprocate first, always.</b> Then use the full AP toolkit and flip back at the end.<br>• For “${p}th term = ${q}, ${q}th term = ${p},” the answer is ${an} = ${PQN}: memorise it.<br>• Use <i>AH</i> = ${G2} to jump between means without re-deriving.<br>• For positive numbers, remember HM ≤ GM ≤ AM: the HM is never larger than the other two, and it is pulled toward the smaller number.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Condition'],
        rows: [
          ['HP definition', `${an} in HP ⟺ ${fr('1', an)} in AP`, 'no zero terms'],
          ['nth term', `${an} = ${HP_NTH}`, `${d} = CD of reciprocal AP`],
          ['HM (two numbers)', `${H} = ${HM2}`, `${a}, ${b} > 0`],
          [`HM (${n} numbers)`, fr(n, `∑ ${fr('1', sb('a', I('i')))}`), ''],
          [`${n} HMs between ${a}, ${b}`, `${fr('1', Hk)} = ${fr('1', a)} + <i>kD</i>,<br>${D} = ${D_HM}`, ''],
          ['Means identity', `<i>AH</i> = ${G2}; ${A} ≥ ${G} ≥ ${H}`, `${a}, ${b} > 0`],
          [`“${p}th = ${q}, ${q}th = ${p}”`, `${an} = ${PQN}`, ''],
          ['Sum of HP', 'no general closed form', ''],
        ],
      },
      { t: 'p', html: '<b>One-liner:</b> flip to reciprocals → it’s an AP → solve → flip back.' },
    ],
  },
];
