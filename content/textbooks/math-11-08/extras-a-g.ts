import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional topics A–G, pp. 758–787 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word. The letters are the book's.
 * A–E are the supplement's addenda (pp. 758–771): A starts at its heading partway
 * down p. 758 (the Unit 9 cheat-sheet rows above it are Topic 09's); the supplement's
 * closing table "Where This Material Belongs" (pp. 770–771) is E's last part.
 * F–G are the "Additional Topics" part (pp. 772–787): its p. 772 opening, table and
 * notation paragraph (heading not copied) open F's Introduction; its closing table
 * "How the Addendum Connects to the Chapter" and "Cheat sheet for this addendum"
 * (pp. 785–787) are G's last two parts. p. 788 is Chapter 9's title page.
 * Figures: 8.11 (caption p. 761, drawn p. 762) at the end of B's Method; the
 * Additional Topics part's own "Figure 1" (p. 774) is m11-08-F-d1 (Method 2, after the
 * boxed closed form) and "Figure 2" (p. 781) is m11-08-G-d1 (Method, after Rule 3).
 * Every fraction is stacked (<frac>), except inside a raised run; no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const PROD = (lo: string, hi: string) => `∏<sub>${lo}</sub><sup>${hi}</sup>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cu = (s: string) => `${s}<sup>3</sup>`;

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const f = I('f');
const g = I('g');
const i = I('i');
const j = I('j');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const y = I('y');
const L = I('L');
const P = I('P');
const S = I('S');
const D = I('D');
const α = I('α');
const β = I('β');
const ai = sb('a', i);
const aj = sb('a', j);
const a1 = sb('a', '1');
const an = sb('a', n);
const an1 = sb('a', `${n}+1`);
const anm1 = sb('a', `${n}−1`);
const bn = sb('b', n);
const tn = sb('t', n);
const tr = sb('t', r);
const t1 = sb('t', '1');
const dk = sb('d', k);
const Sn = sb('S', n);
const S1 = sb('S', '1');
const Snm1 = sb('S', `${n}−1`);
const S2m = sb('S', `2${m}`);
const Sinf = sb('S', '∞');
const x1 = sb('x', '1');
const x2 = sb('x', '2');
const Sg = (s: string) => `Σ<sub>${s}</sub>`;
const N1 = `${n}(${n} + 1)`;
const N1_2N1 = `${n}(${n} + 1)(2${n} + 1)`;
const SR = SUM(`${r}=1`, n);
const SI = SUM(`${i}=1`, n);
const SK1 = SUM(`${k}=1`, `${n}−1`);
const PK1 = PROD(`${k}=1`, `${n}−1`);
const SIJ = `∑<sub>1≤${i} < ${j}≤${n}</sub>`;
const SIJ0 = `∑<sub>${i} < ${j}</sub>`;
const ALT = `(−1)<sup>${r}−1</sup>`;
const NEST = (s: string) => `√(${s} + √(${s} + √(${s} + ⋯)))`;
const CF = (s: string) => `${s} + ${fr('1', `${s} + ${fr('1', `${s} + ⋯`)}`)}`;
const AFFINE = `${an} = (${a1} − ${L}) ${p}<sup>${n}−1</sup> + ${L}`;
const LFIX = `${L} = ${fr(q, `1 − ${p}`)}`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 758–760 ────────────────
  {
    n: 'A',
    title: 'Mixed AP–GP–HP Chain Problems',
    extra: true,
    kalam: 'The technique is uniform and mechanical: replace every progression statement by its middle-term equation, then eliminate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '(Extends Topic 04: the mixed AP–GP–HP problems named in Topic 04’s Exam relevance part.)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A “chain” problem gives you three or four letters and a different progression condition on each overlapping triple. The technique is uniform and mechanical: <b>replace every progression statement by its middle-term equation, then eliminate.</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Statement', 'Middle-term equation', 'Solved for the middle term'],
        rows: [
          [`${a}, ${b}, ${c} in AP`, `2${b} = ${a} + ${c}`, `${b} = ${fr(`${a} + ${c}`, '2')}`],
          [`${a}, ${b}, ${c} in GP`, `${sq(b)} = <i>ac</i>`, `${b} = ±√(<i>ac</i>)`],
          [`${a}, ${b}, ${c} in HP`, `${fr('2', b)} = ${fr('1', a)} + ${fr('1', c)}`, `${b} = ${fr('2<i>ac</i>', `${a} + ${c}`)}`],
        ],
      },
      {
        t: 'p',
        html: `Three rules make the elimination fast:<br>1. <b>Choose the letter that appears in two conditions and eliminate it.</b> In the chain ${a}, ${b}, ${c} (AP), ${b}, ${c}, ${d} (GP), ${c}, ${d}, ${e} (HP), the letters ${b} and ${d} each appear in exactly two conditions; eliminating them leaves a relation among ${a}, ${c}, ${e} alone.<br>2. <b>Write the HP condition in the reciprocal form ${fr('2', b)} = ${fr('1', a)} + ${fr('1', c)} when the letters are in denominators, and in the product form ${b} = ${fr('2<i>ac</i>', `${a} + ${c}`)} when you are about to cross-multiply.</b> They are the same statement; picking the convenient shape halves the algebra.<br>3. <b>Never expand more than you must.</b> Chain identities almost always collapse through a single cancellation, and expanding early buries it.`,
      },
      {
        t: 'p',
        html: `Scope conditions: no letter may be zero (an HP forbids it outright, and a GP forbids it too), and for the HP relation you additionally need ${a} + ${c} ≠ 0.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'A1: JEE Main Level (The classic three-progression chain)',
        q: `If ${a}, ${b}, ${c} are in AP, ${b}, ${c}, ${d} are in GP, and ${c}, ${d}, ${e} are in HP, prove that ${a}, ${c}, ${e} are in GP.`,
        steps: [
          `Write each condition in middle-term form:<br>AP: 2${b} = ${a} + ${c} ⇒ ${b} = ${fr(`${a} + ${c}`, '2')};<br>GP: ${sq(c)} = <i>bd</i> ⇒ ${d} = ${fr(sq(c), b)};<br>HP: ${d} = ${fr('2<i>ce</i>', `${c} + ${e}`)}.`,
          `The letter ${d} appears in two of them, so eliminate it (rule 1):<br>${fr(sq(c), b)} = ${fr('2<i>ce</i>', `${c} + ${e}`)}.`,
          `Cancel one factor of ${c} (legal: ${c} ≠ 0, since ${c} is a term of a GP):<br>${fr(c, b)} = ${fr(`2${e}`, `${c} + ${e}`)} ⟹ ${c}(${c} + ${e}) = 2<i>be</i>.`,
          `Now eliminate ${b} using 2${b} = ${a} + ${c}:<br>${c}(${c} + ${e}) = (${a} + ${c})${e}<br>⟹ ${sq(c)} + <i>ce</i> = <i>ae</i> + <i>ce</i><br>⟹ ${sq(c)} = <i>ae</i>.`,
          `By the GP condition of Topic 03, ${sq(c)} = <i>ae</i> is exactly the statement that ${a}, ${c}, ${e} are in GP. ■`,
          '<b>What to notice.</b> The whole proof is two eliminations and one cancellation of <i>ce</i>. Nothing was expanded that did not have to be. Note also the pleasing symmetry of the result: an AP, a GP and an HP chained together produce a GP: the middle progression survives, an echo of Topic 05’s AM–GM–HM relation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A2: JEE Main Level (AP fused with HP)',
        q: `If ${a}, ${b}, ${c} are in AP and ${b}, ${c}, ${d} are in HP, prove that <i>ad</i> = <i>bc</i>.`,
        steps: [
          `The two conditions are<br>2${b} = ${a} + ${c} and ${fr('2', c)} = ${fr('1', b)} + ${fr('1', d)}.`,
          `Clear the second (rule 2, product form): ${fr('2', c)} = ${fr(`${b} + ${d}`, '<i>bd</i>')}, so<br>2<i>bd</i> = ${c}(${b} + ${d}) = <i>bc</i> + <i>cd</i>.`,
          `From the first condition, ${a} = 2${b} − ${c}. Therefore<br><i>ad</i> = (2${b} − ${c})${d} = 2<i>bd</i> − <i>cd</i><br>= (<i>bc</i> + <i>cd</i>) − <i>cd</i> = <i>bc</i>. ■`,
          `<b>Numerical check.</b> Take ${a} = 1, ${b} = 2, ${c} = 3 (an AP). The HP condition on 2, 3, ${d} gives ${fr('2', '3')} = ${fr('1', '2')} + ${fr('1', d)}, so ${fr('1', d)} = ${fr('1', '6')} and ${d} = 6. Then <i>ad</i> = 6 and <i>bc</i> = 6, as claimed.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Let ${a}, ${b}, ${c} be in AP, ${b}, ${c}, ${d} in GP and ${c}, ${d}, ${e} in HP, with ${a} = 1 and ${b} = 3. Find ${c}, ${d} and ${e}.`,
            a: `${c} = 5, ${d} = ${fr('25', '3')}, ${e} = 25. (From ${c} = 2${b} − ${a}, ${d} = ${fr(sq(c), b)}, and then ${e} = ${fr(sq(c), a)} by Example A1.)`,
          },
          {
            q: `Let ${a}, ${b}, ${c} be in AP and ${b}, ${c}, ${d} in HP, with ${a} = 3 and ${b} = 5. Find ${d}.`,
            a: `${d} = ${fr('35', '3')}. (Here ${c} = 2${b} − ${a} = 7, and <i>ad</i> = <i>bc</i> = 35 by Example A2.)`,
          },
          {
            q: `If ${a}, ${b}, ${c} are in HP, prove that ${fr(`${b} + ${a}`, `${b} − ${a}`)} + ${fr(`${b} + ${c}`, `${b} − ${c}`)} = 2.`,
            a: `Identity. (Reciprocate first, as Topic 04 always advises. Since ${fr('1', a)}, ${fr('1', b)}, ${fr('1', c)} are in AP, write ${fr('1', a)} = ${x} − ${D}, ${fr('1', b)} = ${x}, ${fr('1', c)} = ${x} + ${D}. Then ${b} + ${a} = ${fr(`2${x} − ${D}`, `${x}(${x} − ${D})`)} and ${b} − ${a} = ${fr(`−${D}`, `${x}(${x} − ${D})`)}, so ${fr(`${b} + ${a}`, `${b} − ${a}`)} = ${fr(`2${x} − ${D}`, `−${D}`)}. Likewise ${fr(`${b} + ${c}`, `${b} − ${c}`)} = ${fr(`2${x} + ${D}`, D)}. Adding, the 2${x} terms cancel and the sum is ${fr(`2${D}`, D)} = 2.)`,
          },
          {
            q: `If ${fr(`${b} + ${c}`, a)}, ${fr(`${c} + ${a}`, b)}, ${fr(`${a} + ${b}`, c)} are in AP and ${a} + ${b} + ${c} ≠ 0, prove that ${a}, ${b}, ${c} are in HP.`,
            a: `Add 1 to each of the three terms. Each becomes ${fr(`${a} + ${b} + ${c}`, a)}, ${fr(`${a} + ${b} + ${c}`, b)}, ${fr(`${a} + ${b} + ${c}`, c)}, still in AP because adding a constant to every term of an AP leaves an AP. Dividing through by ${a} + ${b} + ${c} ≠ 0 shows ${fr('1', a)}, ${fr('1', b)}, ${fr('1', c)} are in AP, i.e. ${a}, ${b}, ${c} are in HP.`,
          },
          {
            q: 'The arithmetic mean of two positive numbers is twice their harmonic mean. Find the ratio of the numbers.',
            a: `${a} ∶ ${b} = 3 + 2√2 ∶ 1, equivalently (√2 + 1)<sup>2</sup> ∶ 1. (From ${fr(`${a} + ${b}`, '2')} = 2 ⋅ ${fr('2<i>ab</i>', `${a} + ${b}`)} we get (${a} + ${b})<sup>2</sup> = 8<i>ab</i>, i.e. ${sq(a)} − 6<i>ab</i> + ${sq(b)} = 0; the other root 3 − 2√2 is the same ratio inverted.)`,
          },
          {
            q: `If ${a}, ${b}, ${c} are in AP and ${sq(a)}, ${sq(b)}, ${sq(c)} are in HP, prove that either ${a} = ${b} = ${c}, or ${a}, ${b}, −${fr(c, '2')} are in GP.`,
            a: `The two conditions are 2${b} = ${a} + ${c} and ${fr('2', sq(b))} = ${fr('1', sq(a))} + ${fr('1', sq(c))}, i.e. 2${sq(a)}${sq(c)} = ${sq(b)}(${sq(a)} + ${sq(c)}). Substituting ${b} = ${fr(`${a} + ${c}`, '2')} and clearing denominators gives 8${sq(a)}${sq(c)} = (${a} + ${c})<sup>2</sup>(${sq(a)} + ${sq(c)}), which rearranges and factors as<br>(${a} − ${c})<sup>2</sup>(${sq(a)} + 4<i>ac</i> + ${sq(c)}) = 0.<br>If ${a} = ${c} then ${b} = ${a} too, so ${a} = ${b} = ${c}. Otherwise ${sq(a)} + 4<i>ac</i> + ${sq(c)} = 0, i.e. (${a} + ${c})<sup>2</sup> = −2<i>ac</i>, i.e. 4${sq(b)} = −2<i>ac</i>, i.e. ${sq(b)} = ${a} ⋅ (−${fr(c, '2')}): the GP condition for ${a}, ${b}, −${fr(c, '2')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 761–764 ────────────────
  {
    n: 'B',
    title: 'Alternating-Sign Series',
    extra: true,
    kalam: 'The alternating sum of the first n squares is the ordinary sum of the first n naturals, with a sign.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '(Extends Topic 07: the alternating-sign square sums that Topic 07’s Exam relevance part names as JEE Advanced content.)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `An alternating series ${SR}${ALT}${tr} cannot be attacked with the standard ∑ ${r}, ∑ ${sq(r)}, ∑ ${cu(r)} formulas of Topic 07, because the sign factor ${ALT} is not a polynomial in ${r}. The correct technique has three steps:<br>1. <b>Pair the terms from the front:</b> (${t1} − ${sb('t', '2')}) + (${sb('t', '3')} − ${sb('t', '4')}) + ⋯. Each bracket is a single term of a new series indexed by ${k}, where the ${k}th bracket is ${sb('t', `2${k}−1`)} − ${sb('t', `2${k}`)}.<br>2. <b>Simplify the bracket.</b> If ${tr} is a polynomial of degree ${p}, the bracket is a polynomial in ${k} of degree ${p} − 1: the pairing has bought you one degree. Sum it with the ordinary Topic 07 formulas.<br>3. <b>Split on the parity of ${n}.</b> If ${n} is even, say ${n} = 2${m}, the pairing is exact and you are done. If ${n} is odd, apply the even result to ${n} − 1 terms and add the last term ${tn} separately.`,
      },
      {
        t: 'p',
        html: `<b>The one thing that decides marks here is step 3.</b> An answer that does not distinguish odd ${n} from even ${n} is incomplete. When the two cases differ only in sign, as for the squares, a single closed form using (−1)<sup>${n}−1</sup> covers both and is the neatest answer; otherwise give the two cases.`,
      },
      { t: 'p', html: 'The three standard results, each proved below or by the identical argument:' },
      {
        t: 'formula',
        kicker: 'Alternating sums',
        main: `${SR}${ALT}${r} = ${fr(`${n} + 1`, '2')} (${n} odd), −${fr(n, '2')} (${n} even)<br>${SR}${ALT}${sq(r)} = (−1)<sup>${n}−1</sup> ${fr(N1, '2')}<br>${SUM(`${r}=1`, `2${m}`)}${ALT}${cu(r)} = −${sq(m)}(4${m} + 3)`,
        legend: [`${n} = the number of terms`, `${r} = the index of summation`, `${m} = half an even number of terms (${n} = 2${m})`],
        note: null,
      },
      {
        t: 'p',
        html: `The middle one is worth committing to memory in exactly the boxed form: <b>the alternating sum of the first ${n} squares is the ordinary sum of the first ${n} naturals, with a sign.</b> It is one of the prettiest identities in the chapter.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.11' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'B1: JEE Advanced Level (Alternating squares)',
        q: `Find ${Sn} = 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − 4<sup>2</sup> + ⋯ to ${n} terms, treating both parities of ${n}, and then evaluate ${sb('S', '15')} and ${sb('S', '20')}.`,
        steps: [
          `<b>Case 1: ${n} even, say ${n} = 2${m}.</b> Pair from the front (step 1):<br>${S2m} = (1<sup>2</sup> − 2<sup>2</sup>) + (3<sup>2</sup> − 4<sup>2</sup>) + ⋯<br>+ ((2${m} − 1)<sup>2</sup> − (2${m})<sup>2</sup>).`,
          `The ${k}th bracket is (step 2)<br>(2${k} − 1)<sup>2</sup> − (2${k})<sup>2</sup><br>= [(2${k} − 1) − (2${k})][(2${k} − 1) + (2${k})]<br>= (−1)(4${k} − 1) = −(4${k} − 1),<br>using the difference of squares rather than expanding: much faster.`,
          `Summing for ${k} = 1 to ${m} with the Topic 07 formulas:<br>${S2m} = −${SUM(`${k}=1`, m)}(4${k} − 1)<br>= −[4 ⋅ ${fr(`${m}(${m} + 1)`, '2')} − ${m}]<br>= −[2${sq(m)} + 2${m} − ${m}] = −${m}(2${m} + 1).`,
          `Writing this back in terms of ${n} = 2${m}, so that ${m} = ${fr(n, '2')} and 2${m} + 1 = ${n} + 1:<br>${Sn} = −${fr(n, '2')}(${n} + 1) = −${fr(N1, '2')} (${n} even).`,
          `<b>Case 2: ${n} odd.</b> Then ${n} − 1 is even, and the ${n}th term +${sq(n)} carries a plus sign (odd position). Applying Case 1 to ${n} − 1 terms (step 3):<br>${Sn} = ${Snm1} + ${sq(n)} = −${fr(`(${n} − 1)${n}`, '2')} + ${sq(n)}<br>= ${n}[${n} − ${fr(`${n} − 1`, '2')}] = ${n} ⋅ ${fr(`2${n} − ${n} + 1`, '2')}<br>= ${fr(N1, '2')}.`,
          `<b>Combined.</b> The two cases differ only in sign, so<br>${Sn} = (−1)<sup>${n}−1</sup> ${fr(N1, '2')}.`,
          `<b>Evaluations.</b> ${sb('S', '15')} = (+1)${fr('15 × 16', '2')} = 120, since 15 is odd. ${sb('S', '20')} = (−1)${fr('20 × 21', '2')} = −210, since 20 is even.`,
          `<b>Check.</b> ${sb('S', '4')} = 1 − 4 + 9 − 16 = −10 and −${fr('4 × 5', '2')} = −10. ${sb('S', '5')} = −10 + 25 = 15 and ${fr('5 × 6', '2')} = 15. Both agree.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'B2: JEE Advanced Level (Alternating cubes)',
        q: 'Evaluate 1<sup>3</sup> − 2<sup>3</sup> + 3<sup>3</sup> − 4<sup>3</sup> + ⋯ − 10<sup>3</sup>.',
        steps: [
          `There are 10 terms, an even count, so pairing is exact with ${m} = 5. The ${k}th bracket is<br>(2${k} − 1)<sup>3</sup> − (2${k})<sup>3</sup><br>= (8${cu(k)} − 12${sq(k)} + 6${k} − 1) − 8${cu(k)}<br>= −12${sq(k)} + 6${k} − 1.`,
          `Summing for ${k} = 1 to ${m} using ∑ ${sq(k)} and ∑ ${k} from Topic 07:<br>${SUM(`${k}=1`, m)}(−12${sq(k)} + 6${k} − 1)<br>= −12 ⋅ ${fr(`${m}(${m} + 1)(2${m} + 1)`, '6')} + 6 ⋅ ${fr(`${m}(${m} + 1)`, '2')} − ${m}<br>= −2${m}(${m} + 1)(2${m} + 1) + 3${m}(${m} + 1) − ${m}.`,
          `Take out ${m} and simplify the bracket:<br>= ${m}[−2(2${sq(m)} + 3${m} + 1) + 3${m} + 3 − 1]<br>= ${m}[−4${sq(m)} − 6${m} − 2 + 3${m} + 2]<br>= ${m}(−4${sq(m)} − 3${m}) = −${sq(m)}(4${m} + 3).`,
          `With ${m} = 5:<br>1<sup>3</sup> − 2<sup>3</sup> + ⋯ − 10<sup>3</sup> = −25 × 23 = −575.`,
          `<b>Check on a small case.</b> For ${m} = 1 the formula gives −1 × 7 = −7, and indeed 1 − 8 = −7. For ${m} = 2 it gives −4 × 11 = −44, and 1 − 8 + 27 − 64 = −44.`,
        ],
        ans: '−575.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Evaluate 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − ⋯ + 15<sup>2</sup>.',
            a: `120. (15 is odd, so the sum is +${fr('15 ⋅ 16', '2')}.)`,
          },
          {
            q: 'Evaluate 1<sup>2</sup> − 2<sup>2</sup> + 3<sup>2</sup> − ⋯ − 100<sup>2</sup>.',
            a: `−5050. (100 is even, so the sum is −${fr('100 ⋅ 101', '2')}.)`,
          },
          {
            q: `Find a closed form for 1 − 2 + 3 − 4 + ⋯ to ${n} terms, distinguishing the parities of ${n}.`,
            a: `${fr(`${n} + 1`, '2')} if ${n} is odd, −${fr(n, '2')} if ${n} is even. (Each front-pair contributes exactly −1.)`,
          },
          {
            q: 'Evaluate 1<sup>3</sup> − 2<sup>3</sup> + 3<sup>3</sup> − ⋯ − 8<sup>3</sup>.',
            a: `−304. (Here 2${m} = 8, so ${m} = 4 and the sum is −${sq(m)}(4${m} + 3) = −16 × 19.)`,
          },
          {
            q: `Find the sum of 2${n} terms of the series 2<sup>2</sup> − 4<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup> + ⋯.`,
            a: `−4${n}(2${n} + 1). (The ${r}th term is ${ALT}(2${r})<sup>2</sup> = 4${ALT}${sq(r)}, so the sum is 4 times the alternating-square sum at 2${n} terms, namely 4 × (−${fr(`2${n}(2${n} + 1)`, '2')}).)`,
          },
          {
            q: 'Evaluate 1 − 3 + 5 − 7 + ⋯ to 100 terms.',
            a: '−100. (Fifty front-pairs, each equal to −2.)',
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 764–766 ────────────────
  {
    n: 'C',
    title: 'Sum of Products Taken Two at a Time',
    extra: true,
    kalam: 'The procedure is always the same: compute the square of the sum, subtract the sum of the squares, halve.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: '(Extends Topic 07, whose Key Formulas and cheat sheet print this identity.)' },

      { t: 'part', title: 'Method' },
      { t: 'p', html: `For any numbers ${a1}, ${sb('a', '2')}, …, ${an},` },
      // Identical to Topic 07's card on purpose: the Formula sheet shows it once.
      {
        t: 'formula',
        kicker: 'Sum of products taken two at a time',
        main: `(${SI} ${ai})<sup>2</sup> = ${SI} ${ai}<sup>2</sup> + 2 ${SIJ} ${ai}${aj}<br>⟹ ${SIJ0} ${ai}${aj} = ${fr(`(∑ ${ai})<sup>2</sup> − ∑ ${ai}<sup>2</sup>`, '2')}`,
        legend: [`${ai}, ${aj} = the terms`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `The reason is a counting argument, not an algebraic trick: expanding (${a1} + ⋯ + ${an})<sup>2</sup> produces every ordered pair (${i}, ${j}) exactly once. The ${n} pairs with ${i} = ${j} give ∑ ${ai}<sup>2</sup>; every unordered pair with ${i} ≠ ${j} appears twice, once as ${ai}${aj} and once as ${aj}${ai}, which is where the factor 2 comes from.`,
      },
      {
        t: 'p',
        html: '<b>The procedure is therefore always the same:</b> compute the square of the sum, subtract the sum of the squares, halve. You never enumerate the pairs.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'C1: JEE Main Level',
        q: `Find ${SIJ} ${i} ${j}, the sum of the products of the first ${n} natural numbers taken two at a time.`,
        steps: [
          `Apply the method with ${ai} = ${i}, using the two standard sums of Topic 07:<br>${SI} ${i} = ${fr(N1, '2')},<br>${SI} ${sq(i)} = ${fr(N1_2N1, '6')}.`,
          `Hence<br>${SIJ0} ${i} ${j} = ${fr('1', '2')}[${fr(`${sq(n)}(${n} + 1)<sup>2</sup>`, '4')} − ${fr(N1_2N1, '6')}].`,
          `Take out the common factor ${N1} before combining; this is what keeps the algebra short:<br>= ${fr(N1, '2')}[${fr(N1, '4')} − ${fr(`2${n} + 1`, '6')}]<br>= ${fr(N1, '2')} ⋅ ${fr(`3${N1} − 2(2${n} + 1)`, '12')}<br>= ${fr(`${N1}(3${sq(n)} − ${n} − 2)`, '24')}.`,
          `Factorise the quadratic: 3${sq(n)} − ${n} − 2 = (3${n} + 2)(${n} − 1). Therefore<br>${SIJ} ${i} ${j} = ${fr(`${N1}(${n} − 1)(3${n} + 2)`, '24')}.`,
          `<b>Check.</b> For ${n} = 3 the pairs are 1 ⋅ 2, 1 ⋅ 3, 2 ⋅ 3, summing to 11; the formula gives ${fr('3 ⋅ 4 ⋅ 2 ⋅ 11', '24')} = 11. For ${n} = 4 the six pairs sum to 2 + 3 + 4 + 6 + 8 + 12 = 35; the formula gives ${fr('4 ⋅ 5 ⋅ 3 ⋅ 14', '24')} = 35.`,
          `Note the factor (${n} − 1): at ${n} = 1 there are no pairs at all, and the formula correctly returns 0.`,
        ],
        ans: `${SIJ} ${i} ${j} = ${fr(`${N1}(${n} − 1)(3${n} + 2)`, '24')}`,
      },
      {
        t: 'ex',
        tag: 'C2: CBSE Board / JEE Main Level',
        q: `For a list of ${n} numbers, ∑ ${ai} = 20 and ∑ ${ai}<sup>2</sup> = 150. Find ${SIJ0} ${ai}${aj}.`,
        steps: [
          `No information about the individual numbers is needed, and none is given; the identity uses only the two aggregates:<br>${SIJ0} ${ai}${aj} = ${fr('20<sup>2</sup> − 150', '2')} = ${fr('400 − 150', '2')} = 125.`,
          '<b>The point of this example</b> is that the identity is aggregate-to-aggregate. Whenever a problem supplies a sum and a sum of squares, the sum of pairwise products is already determined, and no amount of extra information about the individual terms is required.',
        ],
        ans: '125.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ∑<sub>1≤${i} < ${j}≤10</sub> ${i} ${j}.`,
            a: `1320. (Either from the boxed formula with ${n} = 10, or directly as ${fr('55<sup>2</sup> − 385', '2')} = ${fr('3025 − 385', '2')}.)`,
          },
          {
            q: `For six numbers, ∑ ${ai} = 24 and ∑ ${ai}<sup>2</sup> = 130. Find ${SIJ0} ${ai}${aj}.`,
            a: `223. (From ${fr('576 − 130', '2')}.)`,
          },
          {
            q: `Evaluate ∑<sub>1≤${i} < ${j}≤4</sub> ${sq(i)}${sq(j)}.`,
            a: `273. (Apply the method to ${ai} = ${sq(i)}: ${fr(`(∑ ${sq(i)})<sup>2</sup> − ∑ ${i}<sup>4</sup>`, '2')} = ${fr('30<sup>2</sup> − 354', '2')}, where ${SUM(`${i}=1`, '4')} ${i}<sup>4</sup> = 354 by Additional topic D.)`,
          },
          {
            q: `If ${a}, ${b}, ${c} satisfy ${a} + ${b} + ${c} = 9 and ${sq(a)} + ${sq(b)} + ${sq(c)} = 35, find <i>ab</i> + <i>bc</i> + <i>ca</i>.`,
            a: `23. (From ${fr('81 − 35', '2')}.)`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 766–768 ────────────────
  {
    n: 'D',
    title: 'The Sum ∑ r⁴: Derivation and Use',
    extra: true,
    kalam: 'The telescoping identity of Topic 07 generalises one power at a time.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `(Extends Topic 07, Derivation 2: the ∑${n}<sup>4</sup> case of the same telescoping machinery, carried out in full.)`,
      },

      { t: 'part', title: 'Derivation' },
      {
        t: 'p',
        html: `The telescoping identity of Topic 07 generalises one power at a time. For ∑ ${sq(n)} the engine was ${cu(k)} − (${k} − 1)<sup>3</sup>; for ∑ ${cu(n)} it was (${k} + 1)<sup>4</sup> − ${k}<sup>4</sup>. For ∑ ${n}<sup>4</sup> it is ${k}<sup>5</sup> − (${k} − 1)<sup>5</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Step 1.</b> Expand (${k} − 1)<sup>5</sup> = ${k}<sup>5</sup> − 5${k}<sup>4</sup> + 10${cu(k)} − 10${sq(k)} + 5${k} − 1, so<br>${k}<sup>5</sup> − (${k} − 1)<sup>5</sup> = 5${k}<sup>4</sup> − 10${cu(k)} + 10${sq(k)} − 5${k} + 1.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Sum both sides for ${k} = 1, 2, …, ${n}. The left side telescopes to ${n}<sup>5</sup> − 0<sup>5</sup> = ${n}<sup>5</sup>. Writing ${Sg(m)} = ${SUM(`${k}=1`, n)} ${k}<sup>${m}</sup>:<br>${n}<sup>5</sup> = 5${Sg('4')} − 10${Sg('3')} + 10${Sg('2')} − 5${Sg('1')} + ${n}.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Substitute the three known sums from Topic 07 and solve for ${Sg('4')}:<br>5${Sg('4')} = ${n}<sup>5</sup> + 10 ⋅ ${fr(`${sq(n)}(${n} + 1)<sup>2</sup>`, '4')}<br>− 10 ⋅ ${fr(N1_2N1, '6')} + 5 ⋅ ${fr(N1, '2')} − ${n}.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Multiply through by 6 to clear denominators:<br>30${Sg('4')} = 6${n}<sup>5</sup> + 15${sq(n)}(${n} + 1)<sup>2</sup><br>− 10${n}(${n} + 1)(2${n} + 1) + 15${N1} − 6${n}.<br>Expanding the three middle products gives 15${n}<sup>4</sup> + 30${cu(n)} + 15${sq(n)}, 20${cu(n)} + 30${sq(n)} + 10${n} and 15${sq(n)} + 15${n} respectively, so<br>30${Sg('4')} = 6${n}<sup>5</sup> + 15${n}<sup>4</sup> + 10${cu(n)} − ${n}.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Factorise. Taking out ${n} and then (${n} + 1):<br>6${n}<sup>5</sup> + 15${n}<sup>4</sup> + 10${cu(n)} − ${n}<br>= ${N1_2N1}(3${sq(n)} + 3${n} − 1),<br>which you may verify by expanding the right-hand side. Therefore`,
      },
      {
        t: 'formula',
        kicker: 'Sum of fourth powers',
        main: `${SR} ${r}<sup>4</sup> = ${fr(`${N1_2N1}(3${sq(n)} + 3${n} − 1)`, '30')}`,
        legend: [`${n} = the number of terms`, `${r} = the index of summation`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Check.</b> At ${n} = 3: ${fr('3 ⋅ 4 ⋅ 7 ⋅ 35', '30')} = 98, and 1 + 16 + 81 = 98. At ${n} = 4: ${fr('4 ⋅ 5 ⋅ 9 ⋅ 59', '30')} = 354, and 98 + 256 = 354.`,
      },
      {
        t: 'p',
        html: `Note the structure: the first three factors ${N1_2N1} are exactly the numerator of ∑ ${sq(r)}, which makes the formula far easier to recall than it looks. Every one of ∑ ${r}, ∑ ${sq(r)}, ∑ ${cu(r)}, ∑ ${r}<sup>4</sup> carries the factor ${N1}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'D1: JEE Advanced Level',
        q: 'Find the sum to <i>n</i> terms of the series 1<sup>2</sup> ⋅ 2<sup>2</sup> + 2<sup>2</sup> ⋅ 3<sup>2</sup> + 3<sup>2</sup> ⋅ 4<sup>2</sup> + ⋯',
        steps: [
          `The general term is ${tr} = ${sq(r)}(${r} + 1)<sup>2</sup>. This is a polynomial in ${r} of degree 4, so the master technique of Topic 07 applies once ∑ ${r}<sup>4</sup> is available. Expand first:<br>${tr} = ${sq(r)}(${sq(r)} + 2${r} + 1) = ${r}<sup>4</sup> + 2${cu(r)} + ${sq(r)}.`,
          `By linearity of ∑,<br>${Sn} = ${Sg('4')} + 2${Sg('3')} + ${Sg('2')}<br>= ${fr(`6${n}<sup>5</sup> + 15${n}<sup>4</sup> + 10${cu(n)} − ${n}`, '30')}<br>+ ${fr(`${sq(n)}(${n} + 1)<sup>2</sup>`, '2')} + ${fr(N1_2N1, '6')}.`,
          `Put everything over 30. The second term contributes 15${sq(n)}(${n} + 1)<sup>2</sup> = 15${n}<sup>4</sup> + 30${cu(n)} + 15${sq(n)} and the third contributes 5${n}(${n} + 1)(2${n} + 1) = 10${cu(n)} + 15${sq(n)} + 5${n}, so the numerator is<br>6${n}<sup>5</sup> + 30${n}<sup>4</sup> + 50${cu(n)} + 30${sq(n)} + 4${n}<br>= 2${n}(3${n}<sup>4</sup> + 15${cu(n)} + 25${sq(n)} + 15${n} + 2).`,
          `The quartic factors as (${n} + 1)(${n} + 2)(3${sq(n)} + 6${n} + 1), which you can confirm by expanding. Hence<br>${Sn} = ${fr(`2${N1}(${n} + 2)(3${sq(n)} + 6${n} + 1)`, '30')}<br>= ${fr(`${N1}(${n} + 2)(3${sq(n)} + 6${n} + 1)`, '15')}.`,
          `<b>Check.</b> At ${n} = 2: ${fr('2 ⋅ 3 ⋅ 4 ⋅ 25', '15')} = 40, and 1 ⋅ 4 + 4 ⋅ 9 = 4 + 36 = 40. At ${n} = 3: ${fr('3 ⋅ 4 ⋅ 5 ⋅ 46', '15')} = 184, and 40 + 9 ⋅ 16 = 184.`,
          `<b>Pitfall to avoid.</b> Do not try to telescope ${sq(r)}(${r} + 1)<sup>2</sup> by the Topic 08 method. It is a polynomial, not a reciprocal of a product, so the Topic 07 machinery is the right tool; reaching for partial fractions here wastes five minutes and produces nothing.`,
        ],
        ans: `${Sn} = ${fr(`${N1}(${n} + 2)(3${sq(n)} + 6${n} + 1)`, '15')}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${SUM(`${r}=1`, '10')} ${r}<sup>4</sup>.`,
            a: `25,333. (From ${fr('10 ⋅ 11 ⋅ 21 ⋅ 329', '30')} = 77 × 329.)`,
          },
          {
            q: `Find ${SR} ${sq(r)}(${sq(r)} − 1) in closed form.`,
            a: `${fr(`${n}(${n} − 1)(${n} + 1)(${n} + 2)(2${n} + 1)`, '10')}. (Expand to ${Sg('4')} − ${Sg('2')} and factorise; the factor (${n} − 1) is correct because the ${r} = 1 term is zero. Check at ${n} = 3: ${fr('3 ⋅ 2 ⋅ 4 ⋅ 5 ⋅ 7', '10')} = 84, and 0 + 12 + 72 = 84.)`,
          },
          {
            q: `Evaluate ${SUM(`${r}=11`, '20')} ${r}<sup>4</sup>.`,
            a: `697,333. (Compute ${SUM(`${r}=1`, '20')} ${r}<sup>4</sup> = ${fr('20 ⋅ 21 ⋅ 41 ⋅ 1259', '30')} = 574 × 1259 = 722,666 and subtract the answer to question 1.)`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 768–771 ────────────────
  {
    n: 'E',
    title: 'Method of Differences When the Differences Form a GP',
    extra: true,
    kalam: 'The method of differences is the same telescoping argument whether the differences form an AP or a GP.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '(Extends Topic 07, “Method of differences”: the case where the first differences form a GP.)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 07 shows that when the first differences of a series form an <b>AP</b>, the general term ${tn} is a quadratic in ${n}. The companion case, a standard JEE Main variant ${ESTIMATE}, is when the first differences form a <b>GP</b>. Then ${tn} contains an exponential term, and no polynomial fit will ever work.`,
      },
      {
        t: 'p',
        html: `The procedure is the same telescoping argument in both cases:<br>1. <b>Write down the first differences</b> ${dk} = ${sb('t', `${k}+1`)} − ${sb('t', k)} and identify what kind of progression they form. Constant difference between the ${dk} means AP; constant ratio between the ${dk} means GP.<br>2. <b>Telescope.</b> Since ${tn} = ${t1} + (${sb('t', '2')} − ${t1}) + (${sb('t', '3')} − ${sb('t', '2')}) + ⋯ + (${tn} − ${sb('t', `${n}−1`)}),<br>${tn} = ${t1} + ${SK1} ${dk}.<br>3. <b>Sum the ${n} − 1 differences</b> with the appropriate formula: the AP sum if they are in AP, the GP sum if they are in GP.<br>4. <b>Verify on two given terms</b>, one of which was not used to build the formula.<br>5. <b>Then sum the series</b> by applying ∑ termwise to the closed form of ${tn}.`,
      },
      {
        t: 'p',
        html: `<b>The diagnostic that decides everything is step 1.</b> Differences 4, 6, 8, 10 have a constant difference of 2: AP, quadratic ${tn}. Differences 2, 4, 8, 16 have a constant ratio of 2: GP, and ${tn} contains 2<sup>${n}</sup>. Fitting a quadratic to the second case will match three terms and fail at the fourth, which is exactly how the trap is set.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'E1: JEE Main Level',
        q: 'Find the general term and the sum to <i>n</i> terms of the series 5 + 7 + 11 + 19 + 35 + ⋯',
        steps: [
          '<b>Step 1.</b> The first differences are 2, 4, 8, 16, …: a constant ratio of 2, so they form a GP with first term 2 and ratio 2, not an AP.',
          `<b>Steps 2 and 3.</b> Telescoping, and summing ${n} − 1 terms of that GP:<br>${tn} = ${t1} + ${SK1} 2 ⋅ 2<sup>${k}−1</sup> = 5 + 2 ⋅ ${fr(`2<sup>${n}−1</sup> − 1`, '2 − 1')}<br>= 5 + 2<sup>${n}</sup> − 2 = 2<sup>${n}</sup> + 3.`,
          `<b>Step 4 (verify).</b> ${t1} = 2 + 3 = 5, ${sb('t', '2')} = 4 + 3 = 7, ${sb('t', '3')} = 8 + 3 = 11, ${sb('t', '4')} = 16 + 3 = 19, ${sb('t', '5')} = 32 + 3 = 35. All five terms are reproduced; and ${sb('t', '6')} = 2<sup>6</sup> + 3 = 67 = 35 + 32 continues the GP of differences.`,
          `<b>Step 5.</b> Sum termwise, splitting into a GP and a constant series:<br>${Sn} = ${SR}(2<sup>${r}</sup> + 3) = (2 + 4 + ⋯ + 2<sup>${n}</sup>) + 3${n}<br>= 2 ⋅ ${fr(`2<sup>${n}</sup> − 1`, '2 − 1')} + 3${n} = 2<sup>${n}+1</sup> − 2 + 3${n}.`,
          `<b>Check.</b> ${sb('S', '3')} = 16 − 2 + 9 = 23, and 5 + 7 + 11 = 23.`,
        ],
        ans: `${Sn} = 2<sup>${n}+1</sup> − 2 + 3${n}`,
      },
      {
        t: 'ex',
        tag: 'E2: JEE Main Level',
        q: 'Find the general term and the sum to <i>n</i> terms of the series 2 + 5 + 14 + 41 + 122 + ⋯',
        steps: [
          `The first differences are 3, 9, 27, 81: a GP with first term 3 and ratio 3. Telescoping,<br>${tn} = 2 + ${SK1} 3 ⋅ 3<sup>${k}−1</sup> = 2 + 3 ⋅ ${fr(`3<sup>${n}−1</sup> − 1`, '3 − 1')}<br>= 2 + ${fr(`3<sup>${n}</sup> − 3`, '2')} = ${fr(`4 + 3<sup>${n}</sup> − 3`, '2')} = ${fr(`3<sup>${n}</sup> + 1`, '2')}.`,
          `Verify: ${t1} = ${fr('4', '2')} = 2, ${sb('t', '3')} = ${fr('28', '2')} = 14, ${sb('t', '5')} = ${fr('244', '2')} = 122. Correct.`,
          `Summing termwise,<br>${Sn} = ${SR} ${fr(`3<sup>${r}</sup> + 1`, '2')} = ${fr('1', '2')}[3 ⋅ ${fr(`3<sup>${n}</sup> − 1`, '3 − 1')} + ${n}]<br>= ${fr(`3<sup>${n}+1</sup> − 3`, '4')} + ${fr(n, '2')}.`,
          `<b>Check.</b> ${sb('S', '3')} = ${fr('81 − 3', '4')} + ${fr('3', '2')} = 19.5 + 1.5 = 21, and 2 + 5 + 14 = 21.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      { t: 'p', html: `For each series, find ${tn} and ${Sn}.` },
      {
        t: 'practice',
        items: [
          {
            q: '1, 3, 7, 15, 31, …',
            a: `Differences 2, 4, 8, 16 (GP, ratio 2): ${tn} = 2<sup>${n}</sup> − 1, ${Sn} = 2<sup>${n}+1</sup> − 2 − ${n}.`,
          },
          {
            q: '4, 5, 7, 11, 19, …',
            a: `Differences 1, 2, 4, 8 (GP, ratio 2): ${tn} = 2<sup>${n}−1</sup> + 3, ${Sn} = 2<sup>${n}</sup> − 1 + 3${n}.`,
          },
          {
            q: '2, 6, 12, 20, 30, …',
            a: `Differences 4, 6, 8, 10 (AP, not GP: this is the Topic 07 case): ${tn} = ${N1}, ${Sn} = ${fr(`${N1}(${n} + 2)`, '3')}.`,
          },
          {
            q: '1, 2, 5, 12, 27, 58, … (Look at the differences of the differences.)',
            a: `Differences 1, 3, 7, 15, 31, whose own differences 2, 4, 8, 16 form a GP; hence ${dk} = 2<sup>${k}</sup> − 1 and<br>${tn} = 1 + ${SK1}(2<sup>${k}</sup> − 1) = 1 + (2<sup>${n}</sup> − 2) − (${n} − 1) = 2<sup>${n}</sup> − ${n},<br>${Sn} = (2<sup>${n}+1</sup> − 2) − ${fr(N1, '2')}.<br>(Check: ${sb('t', '6')} = 64 − 6 = 58; ${sb('S', '3')} = 16 − 2 − 6 = 8 = 1 + 2 + 5.)`,
          },
        ],
      },

      { t: 'part', title: 'Where this material belongs' },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Reads as an extension of', 'What it delivers'],
        rows: [
          [
            'Topic 09, Concept intuition to Worked examples (growth half)',
            'Topic 03, Exam relevance and Concept intuition',
            'The compound-interest, depreciation, doubling and loan-repayment problems that follow from Topic 03',
          ],
          [
            'Topic 09, Key formulas and definitions to Worked examples (product half)',
            'Topic 03, Key formulas and definitions part and Derivation 4',
            `${P} = ${a}<sup>${n}</sup>${r}<sup>${n}(${n}−1)/2</sup> = (<i>al</i>)<sup>${n}/2</sup> and ${P}<sup>2</sup><i>R</i><sup>${n}</sup> = ${S}<sup>${n}</sup>`,
          ],
          ['Additional topic A', 'Topic 04, Worked examples', 'The mixed AP–GP–HP chain problems named in Topic 04’s Exam relevance part'],
          ['Additional topic B', 'Topic 07, Key formulas and definitions to Worked examples', 'Alternating-sign square and cube sums, with the parity split'],
          ['Additional topic C', 'Topic 07, Key formulas and definitions', 'A worked use of the pairwise-product identity'],
          ['Additional topic D', 'Topic 07, Derivation 2', `The ∑ ${r}<sup>4</sup> derivation and an application`],
          ['Additional topic E', 'Topic 07, Method of differences', 'The differences-in-GP variant'],
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 772–779 ────────────────
  {
    n: 'F',
    title: 'Recovering the nth term: from the sum, from a recurrence, and in the limit',
    extra: true,
    kalam: 'An affine recurrence is a GP in disguise, seen from the wrong origin.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01–09 and Additional topics A to E cover the whole NCERT syllabus and the standard JEE problem types for this chapter. These two additional topics develop two techniques that those topics introduce and that JEE questions then build on.<br><br>The first is turning a recurrence into a closed form. Topic 01, Procedure 4 (“recursive to explicit (when possible)”) advises unfolding a few terms to spot the closed form, and Topic 01’s third worked example unfolds five terms of ${a1} = 2, ${an} = 3${anm1} + 1. Here you will see the method that reaches the closed form directly, without guessing. The companion move, recovering ${an} from a formula for ${Sn}, appears twice already (Topic 02, Derivation 3 and Topic 07’s fifth worked example); here it is stated as a technique in its own right, together with the ${n} = 1 trap that comes with it. Standard JEE algebra texts treat “finding the general term from the summation formula” as a topic in its own right, for exactly this reason.<br><br>The second is AM-GM as an optimisation tool. Topic 03 and Topic 05 state AM-GM for ${n} positive numbers with its equality condition, and their uses are two-number bounds (${x} + ${fr('9', x)} ≥ 6 in Topic 05’s second worked example, ${fr(a, b)} + ${fr(b, a)} ≥ 2 in its practice) and the three-number product of Topic 03’s sixth worked example. The optimisation technique that JEE Advanced actually asks for is to split a constraint into equal parts so that the geometric mean becomes a constant. Alongside it comes the trap that costs marks on these questions: an AM-GM bound is worthless if the equality point lies outside the domain.<br><br>These additional topics are two items, continuing the lettering of Additional topics A to E. Each is a method statement, worked examples on the usual ladder, and practice with answers.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['F', `Recovering ${an}: from ${Sn}, from a recurrence, and in the limit`, 'Topic 01, Procedure 4'],
          ['G', 'AM-GM as an optimisation engine', 'Topic 05’s fourth worked example'],
        ],
      },
      {
        t: 'p',
        html: `Notation follows Topics 01–09: ${a} is a first term, ${d} a common difference, ${r} a common ratio, ${an} (or ${tn}) an ${n}th term, ${Sn} the sum of the first ${n} terms, and <i>A</i>, <i>G</i>, <i>H</i> the arithmetic, geometric and harmonic means.`,
      },
      {
        t: 'p',
        html: `Extends Topic 01, Procedure 4 and Topic 01’s third worked example. Also names the ${an} = ${Sn} − ${Snm1} move that Topic 02, Derivation 3 and Topic 07’s fifth worked example both use.<br><br>A sequence can be handed to you in three indirect ways: through its running total ${Sn}, through a recurrence that ties each term to the one before, or through an infinite process (a nested radical, a continued fraction) whose value is the limit of a recursive sequence. Each has one clean technique. All three are in this additional topic.`,
      },

      { t: 'part', title: 'Method 1: from the sum to the nth term' },
      {
        t: 'p',
        html: `The whole idea is one subtraction. The sum of the first ${n} terms minus the sum of the first ${n} − 1 terms leaves exactly the ${n}th term:`,
      },
      {
        t: 'formula',
        kicker: `From ${Sn} to ${an}`,
        main: `${a1} = ${S1}<br>${an} = ${Sn} − ${Snm1} (${n} ≥ 2)`,
        legend: [`${an} = the ${n}th term`, `${Sn} = the sum of the first ${n} terms`],
        note: null,
      },
      {
        t: 'p',
        html: `Three rules govern its use.<br>1. <b>The subtraction formula is only legal for ${n} ≥ 2.</b> There is no ${sb('S', '0')} in the definition of a series, so ${a1} must be read off as ${S1} separately. This is not pedantry; it is where the marks are.<br>2. <b>Always test the ${n} ≥ 2 formula at ${n} = 1.</b> If it reproduces ${S1}, one formula covers every term and you may write it as a single answer. If it does not, the sequence is genuinely two-piece: ${a1} on its own, and the formula from the second term onward. This is exactly the ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> + ${c} with ${c} ≠ 0 trap flagged in Topic 02’s Key formulas and definitions part, now stated in its general form, for any ${Sn} at all.<br>3. <b>${Sn} need not be a polynomial.</b> The subtraction works on ${Sn} = 3<sup>${n}</sup> − 1, on ${Sn} = ${fr(n, `${n} + 1`)}, on anything. Topic 02 and Topic 07 only ever apply it to quadratic ${Sn}, which makes it look like an AP-only device. It is not.`,
      },
      {
        t: 'p',
        html: `A useful diagnostic falls straight out of rule 2: the sequence is an AP from the first term if and only if ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i>, quadratic (or, when ${d} = 0, linear) in ${n} with zero constant term, and it is a GP with ratio ${r} ≠ 1 from the first term if and only if ${Sn} has the shape <i>λ</i>(${r}<sup>${n}</sup> − 1) with <i>λ</i> ≠ 0, again with the constant arranged so that ${S1} comes out right. (A GP with ${r} = 1 has ${Sn} = <i>na</i>, the AP case with ${d} = 0.)`,
      },

      { t: 'part', title: 'Method 2: from a recurrence to a closed form' },
      { t: 'p', html: `Three shapes cover almost everything Class 11 and JEE Main ask. In each case ${a1} is given.` },
      {
        t: 'p',
        html: `<b>Shape (i): ${an1} = ${an} + ${f}(${n}), additive.</b> Telescope. Writing out ${sb('a', '2')} − ${a1} = ${f}(1), ${sb('a', '3')} − ${sb('a', '2')} = ${f}(2), …, ${an} − ${anm1} = ${f}(${n} − 1) and adding, every interior term cancels:<br>${an} = ${a1} + ${SK1} ${f}(${k}).<br>Sum the right-hand side with the Topic 07 formulas if ${f} is a polynomial, with the Topic 03 formula if ${f} is geometric. This is the same telescoping argument as Topic 02, Derivation 1 and as Additional topic E; the method of differences is this shape.`,
      },
      {
        t: 'p',
        html: `<b>Shape (ii): ${an1} = ${an} ⋅ ${g}(${n}), multiplicative.</b> Telescope the products the same way:<br>${an} = ${a1} ${PK1} ${g}(${k}).<br>When ${g}(${k}) = ${r} is constant this is the GP ${n}th term; when ${g}(${k}) = ${r}<sup>${k}</sup> you recover the exponent ${fr(`${n}(${n} − 1)`, '2')} of the GP product formula from Topic 09, Derivation 3.`,
      },
      {
        t: 'p',
        html: `<b>Shape (iii): ${an1} = ${p} ${an} + ${q} with ${p} ≠ 1, linear with constant coefficients.</b> This is the case behind Topic 01’s third worked example, and it has a trick worth learning properly. Look for the <b>fixed point</b> ${L}, the value that the recurrence leaves alone:<br>${L} = <i>pL</i> + ${q} ⟹ ${LFIX}.`,
      },
      {
        t: 'p',
        html: `Now measure every term from ${L} instead of from zero. Put ${bn} = ${an} − ${L}. Then<br>${sb('b', `${n}+1`)} = ${an1} − ${L} = (${p} ${an} + ${q}) − (<i>pL</i> + ${q})<br>= ${p}(${an} − ${L}) = ${p} ${bn},<br>so ${bn} is a plain GP with first term ${a1} − ${L} and common ratio ${p}. Therefore`,
      },
      {
        t: 'formula',
        kicker: `Closed form of ${an1} = ${p}${an} + ${q}`,
        main: `${AFFINE}<br>${LFIX}`,
        legend: [`${an} = the ${n}th term`, `${a1} = the first term`, `${p} = the multiplier (${p} ≠ 1)`, `${q} = the added constant`, `${L} = the fixed point`],
        note: null,
      },
      {
        t: 'p',
        html: `Read that formula: <b>an affine recurrence is a GP in disguise, seen from the wrong origin.</b> Shifting the origin to the fixed point removes the +${q} and leaves nothing but Topic 03.`,
      },
      { t: 'fig', id: 'm11-08-F-d1' },

      { t: 'part', title: 'Method 3: the limit of a recursive sequence' },
      {
        t: 'p',
        html: `If ${an1} = ${f}(${an}), the terms settle down to a limit ${L}, and ${f} is continuous, then letting ${n} → ∞ on both sides gives<br>${L} = ${f}(${L}).`,
      },
      {
        t: 'p',
        html: 'Solve that equation, then discard every root that the terms themselves rule out: a sequence of positive terms cannot converge to a negative number, and a sequence bounded above by 3 cannot converge to 7. This is the standard route to nested radicals and infinite continued fractions:',
      },
      {
        t: 'table',
        title: null,
        head: ['Object', 'Recursion', 'Fixed-point equation', 'Value'],
        rows: [
          [NEST(c), `${an1} = √(${c} + ${an})`, `${sq(L)} = ${c} + ${L}`, `${L} = ${fr(`1 + √(1 + 4${c})`, '2')}`],
          [`√(${c}√(${c}√${c} ⋯))`, `${an1} = √(${c} ${an})`, `${sq(L)} = <i>cL</i>`, `${L} = ${c}`],
          [`${CF(c)}<br>`, `${an1} = ${c} + ${fr('1', an)}`, `${sq(L)} = <i>cL</i> + 1`, `${L} = ${fr(`${c} + √(${sq(c)} + 4)`, '2')}`],
        ],
      },
      {
        t: 'p',
        html: `<b>Where the method breaks down, and it costs the whole question.</b> The equation ${L} = ${f}(${L}) is a conditional statement: it says what the limit must be <b>if a limit exists</b>. It says nothing about whether one does. A fixed point can be a value the sequence runs away from rather than towards, and then ${L} = ${f}(${L}) has a perfectly good root and the sequence still diverges. Example F3 below is built on precisely this.`,
      },
      {
        t: 'p',
        html: `For the affine case the test is exact, because Method 2 hands you the closed form: ${an} − ${L} = ${p}<sup>${n}−1</sup>(${a1} − ${L}), so ${an} → ${L} <b>if and only if</b> |${p}| < 1 or ${a1} = ${L}. For a nested radical ${an1} = √(${c} + ${an}) with ${a1} = √${c} and ${c} > 0, the licence is a two-line induction that is worth writing out in an Advanced answer: if ${an} < ${L} then ${an1} = √(${c} + ${an}) < √(${c} + ${L}) = ${L}, so the sequence stays below ${L}; and ${an1} > ${an} exactly when ${an}<sup>2</sup> − ${an} − ${c} < 0, which holds for every positive ${an} < ${L}. Increasing and bounded above, so it converges, and then ${L} = ${f}(${L}) finishes it.`,
      },
      {
        t: 'proc',
        title: 'Procedure F: which of the three you are looking at',
        steps: [
          `<b>If the question gives ${Sn}</b>, subtract: ${an} = ${Sn} − ${Snm1} for ${n} ≥ 2, then compute ${a1} = ${S1} separately and test the formula at ${n} = 1. <b>Why:</b> skipping the test is the single most common way to lose a mark on this topic, and it takes five seconds.`,
          `<b>If the question gives ${an1} in terms of ${an} and ${n}</b>, classify: is the change added (shape i), multiplied (shape ii), or is it ${p} ${an} + ${q} (shape iii)? <b>Why:</b> the three shapes need three different moves, and only shape (iii) needs the fixed point.`,
          `<b>If the question is an infinite radical, fraction or product</b>, build the recursion first, then set ${L} = ${f}(${L}). <b>Why:</b> writing ${x} = √(6 + ${x}) directly is the same equation, but building the recursion is what lets you justify convergence and reject the spurious root.`,
          '<b>Reject roots by inspecting the terms, not by taste.</b> Positivity, an upper bound, or monotonicity: name the reason. <b>Why:</b> the fixed-point equations of nested radicals and continued fractions are usually quadratics with two roots, and the mark is for killing the wrong one on grounds.',
          `<b>Check the closed form on two terms you did not use to build it.</b> <b>Why:</b> an off-by-one in the exponent of ${p}<sup>${n}−1</sup> is the commonest error with this method, and it shows up instantly at ${n} = 3.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'F1: CBSE Board Level',
        q: `The sum of the first ${n} terms of a series is ${Sn} = ${sq(n)} + 2${n} + 3. Find ${a1}, find ${an} for ${n} ≥ 2, and say whether the series is an AP.`,
        steps: [
          `First term, straight from the definition:<br>${a1} = ${S1} = 1 + 2 + 3 = 6.`,
          `Now for ${n} ≥ 2, subtract (Procedure F, step 1):<br>${an} = ${Sn} − ${Snm1}<br>= (${sq(n)} + 2${n} + 3) − [(${n} − 1)<sup>2</sup> + 2(${n} − 1) + 3]<br>= (${sq(n)} + 2${n} + 3) − (${sq(n)} + 2)<br>= 2${n} + 1.`,
          `Test at ${n} = 1: the formula gives 2(1) + 1 = 3, but ${a1} = 6. <b>They disagree</b>, so the answer is genuinely two-piece:<br>${a1} = 6, ${an} = 2${n} + 1 (${n} ≥ 2).`,
          `The series is 6 + 5 + 7 + 9 + 11 + ⋯. It is <b>not</b> an AP: the first gap is 5 − 6 = −1 and every later gap is 2. The terms from the second onward do form an AP with ${d} = 2. The culprit is the constant 3 in ${Sn}: exactly the scope condition of Topic 02’s Key formulas and definitions part, now visible as an instance of a general rule.`,
          `<b>Check.</b> ${sb('S', '2')} = 6 + 5 = 11 and 2<sup>2</sup> + 2(2) + 3 = 11. ${sb('S', '3')} = 11 + 7 = 18 and 3<sup>2</sup> + 2(3) + 3 = 18. Both agree.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'F2: JEE Main Level',
        q: `(a) A series has ${Sn} = 3<sup>${n}</sup> − 1. Find ${an} and identify the progression.<br>(b) Find the closed form of the sequence of Topic 01’s third worked example: ${a1} = 2, ${an} = 3${anm1} + 1.`,
        steps: [
          `<b>(a)</b> ${Sn} is not a polynomial, but nothing in the method cares. For ${n} ≥ 2,<br>${an} = (3<sup>${n}</sup> − 1) − (3<sup>${n}−1</sup> − 1)<br>= 3<sup>${n}−1</sup>(3 − 1) = 2 ⋅ 3<sup>${n}−1</sup>.`,
          `Test at ${n} = 1: the formula gives 2 ⋅ 3<sup>0</sup> = 2, and ${a1} = ${S1} = 3 − 1 = 2. <b>They agree</b>, so the single formula ${an} = 2 ⋅ 3<sup>${n}−1</sup> covers every term. That is a GP with ${a} = 2, ${r} = 3, and indeed ${Sn} = ${fr(`2(3<sup>${n}</sup> − 1)`, '3 − 1')} = 3<sup>${n}</sup> − 1, the Topic 03 sum formula read backwards.`,
          `<b>(b)</b> This is shape (iii) with ${p} = 3, ${q} = 1. Fixed point:<br>${L} = ${fr(q, `1 − ${p}`)} = ${fr('1', '1 − 3')} = −${fr('1', '2')}.`,
          `By the boxed formula, with ${a1} = 2 so that ${a1} − ${L} = 2 + ${fr('1', '2')} = ${fr('5', '2')}:<br>${an} = ${fr('5', '2')} ⋅ 3<sup>${n}−1</sup> − ${fr('1', '2')} = ${fr(`5 ⋅ 3<sup>${n}−1</sup> − 1`, '2')}.`,
          `<b>Check on terms Topic 01 already listed.</b> ${n} = 1: ${fr('5 − 1', '2')} = 2. ${n} = 2: ${fr('15 − 1', '2')} = 7. ${n} = 3: ${fr('45 − 1', '2')} = 22. ${n} = 4: ${fr('135 − 1', '2')} = 67. ${n} = 5: ${fr('405 − 1', '2')} = 202. All five match the terms Topic 01’s third worked example unfolded by hand; this is the closed form of that sequence.`,
          'Notice the shape of the answer: a GP term plus a constant. <b>Every affine recurrence with <i>p</i> ≠ 1 produces exactly that</b>, and if a JEE Main option list contains no such option, you have misread the recurrence.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'F3: JEE Main: Speed Trap',
        q: `Let ${a1} = 3 and ${an1} = 3${an} − 4. Find lim<sub>${n}→∞</sub> ${an}.`,
        steps: [
          `<b>The trap: a fixed point you run away from.</b> The seductive answer is one line. Let the limit be ${L}; pass to the limit on both sides:<br>${L} = 3${L} − 4 ⟹ 2${L} = 4 ⟹ ${L} = 2: wrong. Not the arithmetic; the arithmetic is perfect. What is wrong is that the limit does not exist, so there was never an ${L} to pass to.`,
          `<b>Correct solution.</b> Build the closed form first (Method 2, shape iii). Here ${p} = 3, ${q} = −4, so ${L} = ${fr('−4', '1 − 3')} = 2, and ${a1} − ${L} = 3 − 2 = 1:<br>${an} = 1 ⋅ 3<sup>${n}−1</sup> + 2 = 3<sup>${n}−1</sup> + 2.`,
          `<b>Check:</b> ${a1} = 3, ${sb('a', '2')} = 3(3) − 4 = 5 = 3 + 2, ${sb('a', '3')} = 3(5) − 4 = 11 = 9 + 2, ${sb('a', '4')} = 29 = 27 + 2. Correct. And 3<sup>${n}−1</sup> → ∞, so<br>${an} → ∞; <b>the limit does not exist.</b>`,
          'The value 2 is a genuine fixed point (feed 2 into the recurrence and 2 comes back out), but the sequence started at distance 1 from it and that distance is multiplied by 3 every step. The fixed point repels.',
          `<b>How to never fall for it.</b> For ${an1} = ${p} ${an} + ${q} the distance to the fixed point obeys ${an} − ${L} = ${p}<sup>${n}−1</sup>(${a1} − ${L}) exactly. So before you quote ${L} as a limit, look at |${p}|: convergence happens <b>only</b> when |${p}| < 1 (or when you start exactly at ${L} and never move). Here |${p}| = 3. Compare Topic 03’s |${r}| < 1 condition for ${Sinf}: it is the same condition, in the same disguise, and it is the same mark.`,
        ],
        ans: `${an} → ∞; the limit does not exist.`,
      },
      {
        t: 'ex',
        tag: 'F4: JEE Advanced Level',
        q: `Evaluate<br>${x} = ${NEST('6')},<br>${y} = ${CF('1')},<br>justifying in each case that the value exists and that the root you keep is the right one.`,
        steps: [
          `<b>The radical.</b> Define ${a1} = √6 and ${an1} = √(6 + ${an}), so that ${x} is the limit of ${an}. Let ${L} be the positive root of ${sq(L)} = 6 + ${L}, i.e. of ${sq(L)} − ${L} − 6 = (${L} − 3)(${L} + 2) = 0, so ${L} = 3.`,
          `<b>Existence.</b> Every term is positive. If ${an} < 3 then ${an1} = √(6 + ${an}) < √9 = 3, and ${a1} = √6 < 3, so by induction ${an} < 3 for all ${n}: the sequence is bounded above. It is also increasing, because ${an1} > ${an} is equivalent to 6 + ${an} > ${an}<sup>2</sup>, i.e. to (${an} − 3)(${an} + 2) < 0, which holds for every ${an} with 0 < ${an} < 3. An increasing sequence bounded above converges.`,
          `<b>The root.</b> Passing to the limit, ${sq(L)} = 6 + ${L}, whose roots are 3 and −2. Every term is positive, so −2 is rejected on grounds. Hence<br>${x} = 3.`,
          '<b>Numerical check.</b> √6 = 2.449, √8.449 = 2.907, √8.907 = 2.984, √8.984 = 2.997: climbing to 3, from below, exactly as the argument predicted.',
          `<b>The continued fraction.</b> Define ${a1} = 1 and ${an1} = 1 + ${fr('1', an)}. Assuming the limit ${y} exists (the convergents 1, 2, ${fr('3', '2')}, ${fr('5', '3')}, ${fr('8', '5')}, … oscillate about it with shrinking amplitude), passing to the limit gives<br>${y} = 1 + ${fr('1', y)}<br>⟹ ${sq(y)} − ${y} − 1 = 0<br>⟹ ${y} = ${fr('1 ± √5', '2')}.`,
          `Every term is at least 1, so the negative root is rejected and<br>${y} = ${fr('1 + √5', '2')},<br>the golden ratio. <b>This is the quadratic of Topic 03’s seventh worked example in disguise.</b> There, a GP in which each term equals the sum of the next two forced ${sq(r)} + ${r} − 1 = 0 and gave ${r} = ${fr('√5 − 1', '2')}; substituting ${r} = ${fr('1', y)} turns that equation into ${sq(y)} − ${y} − 1 = 0. The two answers are therefore reciprocals of one another, which is the golden ratio’s defining property, ${fr('1', 'φ')} = φ − 1, and the reappearance is not a coincidence: both problems are the statement “this object is its own successor” written in different notation. Note also the numerators 1, 2, 3, 5, 8 of the convergents: Fibonacci, from Topic 01’s Concept intuition part.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `(Board) The sum of ${n} terms of a series is ${Sn} = 5${sq(n)} + 3${n}. Find ${an}, and state whether the series is an AP from its first term.`,
            a: `${an} = 10${n} − 2 for every ${n} (the ${n} ≥ 2 formula also gives ${a1} = 8 = ${S1}). Yes: an AP with ${a} = 8, ${d} = 10; consistent with ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> having zero constant term.`,
          },
          {
            q: `(Board) A series has ${Sn} = 2<sup>${n}+1</sup> − 2. Find ${an} and identify the progression.`,
            a: `${an} = 2<sup>${n}</sup> for every ${n}; a GP with ${a} = 2, ${r} = 2. (${a1} = ${S1} = 2 agrees with the formula.)`,
          },
          {
            q: `(Board) A series has ${Sn} = ${sq(n)} + 5. Find ${a1} and ${an} for ${n} ≥ 2, and write out the first four terms.`,
            a: `${a1} = 6; ${an} = 2${n} − 1 for ${n} ≥ 2. First four terms 6, 3, 5, 7. Not an AP; the constant 5 in ${Sn} is what breaks it.`,
          },
          {
            q: `(Main) Find the closed form of ${a1} = 1, ${an1} = 4${an} + 3, and hence ${sb('a', '5')}.`,
            a: `${L} = ${fr('3', '1 − 4')} = −1, so ${an} = 2 ⋅ 4<sup>${n}−1</sup> − 1 and ${sb('a', '5')} = 2(256) − 1 = 511.`,
          },
          {
            q: `(Main) Find the closed form of ${a1} = 2, ${an1} = ${an} + 3${n} + 1.`,
            a: `${an} = 2 + ${SK1}(3${k} + 1) = ${fr(`3${sq(n)} − ${n} + 2`, '2')}. (Check ${n} = 4: 23, and 2 → 6 → 13 → 23.)`,
          },
          {
            q: `(Main) A series has ${Sn} = ${fr(n, `${n} + 1`)}. Find ${an}, and connect the answer to Topic 08.`,
            a: `${an} = ${fr(n, `${n} + 1`)} − ${fr(`${n} − 1`, n)} = ${fr('1', N1)}, valid at ${n} = 1 too. This is the telescoping series of Topic 08, Derivation 1 run backwards: ${Sn} = ${fr(n, `${n} + 1`)} is precisely what that derivation produces.`,
          },
          {
            q: `(Main) Evaluate ${NEST('12')}.`,
            a: `4. (${sq(L)} = 12 + ${L}, so (${L} − 4)(${L} + 3) = 0; reject −3 for positivity.)`,
          },
          {
            q: `(Main) Evaluate<br>${CF('3')}.`,
            a: `${fr('3 + √13', '2')}. (${L} = 3 + ${fr('1', L)}, so ${sq(L)} − 3${L} − 1 = 0; reject the negative root.)`,
          },
          {
            q: `(Adv) Let ${a1} = 5 and ${an1} = 2${an} − 3. A student writes ${L} = 2${L} − 3, gets ${L} = 3, and reports 3 as the limit. Find the closed form of ${an} and say what is wrong.`,
            a: `${L} = ${fr('−3', '1 − 2')} = 3 and ${a1} − ${L} = 2, so ${an} = 2 ⋅ 2<sup>${n}−1</sup> + 3 = 2<sup>${n}</sup> + 3, which tends to infinity. The limit does not exist. The student’s equation is only valid given that a limit exists; here |${p}| = 2 > 1, so the fixed point repels.`,
          },
          {
            q: `(Adv) Find the closed form of ${a1} = 1, ${an1} = 2<sup>${n}</sup>${an}, and relate the exponent you obtain to Topic 09, Derivation 3.`,
            a: `${an} = ${PK1} 2<sup>${k}</sup> = 2<sup>1+2+⋯+(${n}−1)</sup> = 2<sup>${n}(${n}−1)/2</sup>. The exponent ${fr(`${n}(${n} − 1)`, '2')} is the same one that appears in ${P} = ${a}<sup>${n}</sup>${r}<sup>${n}(${n}−1)/2</sup>: a product of ${n} terms always collects the exponents 0, 1, …, ${n} − 1.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic G · pp. 780–787 ────────────────
  {
    n: 'G',
    title: 'AM-GM as an optimisation engine',
    extra: true,
    kalam: 'An AM-GM bound is only useful if the right-hand side is free of the variable.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Extends Topic 05’s Worked examples part (which uses AM-GM only on two numbers) and Topic 03’s sixth worked example. Topic 03 and Topic 05 both print AM-GM for ${n} positive numbers with its equality condition; this additional topic puts it to work.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'One sentence carries the whole topic:<br><b>For positive numbers, fixing the sum caps the product, and fixing the product floors the sum, and both bounds are reached exactly when all the numbers are equal.</b>',
      },
      {
        t: 'p',
        html: `Written out, from ${fr(`${a1} + ⋯ + ${an}`, n)} ≥ (${a1}${sb('a', '2')} ⋯ ${an})<sup>1/${n}</sup>:`,
      },
      {
        t: 'formula',
        kicker: 'The AM-GM engine',
        main: `∑ ${ai} = ${S} fixed ⟹ ∏ ${ai} ≤ (${fr(S, n)})<sup>${n}</sup><br>∏ ${ai} = ${P} fixed ⟹ ∑ ${ai} ≥ <i>nP</i><sup>1/${n}</sup>`,
        legend: [`${ai} = the positive numbers`, `${n} = how many numbers`, `${S} = the fixed sum`, `${P} = the fixed product`],
        note: null,
      },
      {
        t: 'p',
        html: `with equality in each case if and only if ${a1} = ${sb('a', '2')} = ⋯ = ${an}. Everything below is this statement plus bookkeeping.<br><br>Three rules turn it into a technique.`,
      },
      {
        t: 'p',
        html: `<b>Rule 1: choose the terms so that the geometric mean is a constant.</b> This is the whole art, and it is where students who “know AM-GM” still lose the question. An AM-GM bound is only useful if the right-hand side is free of the variable. Applying AM-GM to 2${x} + ${fr('3', sq(x))} as two terms gives 2√(${fr('6', x)}), which still contains ${x} and bounds nothing. Split it as ${x} + ${x} + ${fr('3', sq(x))} and the product is ${x} ⋅ ${x} ⋅ ${fr('3', sq(x))} = 3, a constant, and the bound follows immediately.`,
      },
      {
        t: 'p',
        html: `<b>Rule 2: split unequal weights into equal parts.</b> To bound a product with exponents, break the constraint into as many pieces as the exponents demand. To maximise ${x}<sup>${p}</sup>${y}<sup>${q}</sup> subject to ${α}${x} + ${β}${y} = ${k} (all quantities positive, ${p}, ${q} positive integers), apply AM-GM to the ${p} + ${q} numbers<br>${fr(`${α}${x}`, p)}, …, ${fr(`${α}${x}`, p)} (${p} copies),<br>${fr(`${β}${y}`, q)}, …, ${fr(`${β}${y}`, q)} (${q} copies),<br>whose sum is exactly ${α}${x} + ${β}${y} = ${k}. Then<br>${fr(k, `${p} + ${q}`)} ≥ [(${fr(`${α}${x}`, p)})<sup>${p}</sup>(${fr(`${β}${y}`, q)})<sup>${q}</sup>]<sup>1/(${p}+${q})</sup><br>⟹ ${x}<sup>${p}</sup>${y}<sup>${q}</sup> ≤ ${fr(`${p}<sup>${p}</sup>${q}<sup>${q}</sup>`, `${α}<sup>${p}</sup>${β}<sup>${q}</sup>`)}(${fr(k, `${p} + ${q}`)})<sup>${p}+${q}</sup>,<br>with equality if and only if ${fr(`${α}${x}`, p)} = ${fr(`${β}${y}`, q)}. The same recipe extends to any number of variables. <b>The exponent tells you how many copies to make; the coefficient tells you what to divide by.</b>`,
      },
      {
        t: 'p',
        html: '<b>Rule 3: check that the equality point lies in the domain.</b> AM-GM produces a number that the expression can never go below. Whether the expression ever reaches that number is a separate question, settled by the equality condition “all terms equal”. If solving that condition throws up a value of the variable outside the permitted range, the bound is true but not attained, and for one-variable expressions like these, which rise steadily away from the equality point, the real extremum sits on the boundary of the range nearest it. This is the speed trap of Example G3 and it is worth more marks than the algebra.',
      },
      { t: 'fig', id: 'm11-08-G-d1' },
      {
        t: 'proc',
        title: 'Procedure G: running the engine',
        steps: [
          '<b>Name what is fixed.</b> A sum, a product, or a linear constraint. <b>Why:</b> the fixed quantity is the one that becomes the constant in the bound; if nothing is fixed, AM-GM has nothing to work with.',
          '<b>Split the expression until the geometric mean is variable-free.</b> Use Rule 2 if the target carries exponents. <b>Why:</b> a bound that still contains the variable is not a bound.',
          '<b>Write the inequality and read off the bound.</b> <b>Why:</b> one line, no calculus.',
          '<b>Solve “all terms equal” together with the constraint to locate the optimiser.</b> <b>Why:</b> the marks are usually split between the bound and the point where it is attained.',
          '<b>Confirm the optimiser is allowed.</b> If the domain is restricted, test it; if it is excluded, go to the boundary. <b>Why:</b> Rule 3.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'G1: JEE Main Level',
        q: `For ${x} > 0, find the least value of 2${x} + ${fr('3', sq(x))}.`,
        steps: [
          `The two-term attempt fails first, and it is worth seeing why:<br>2${x} + ${fr('3', sq(x))} ≥ 2√(2${x} ⋅ ${fr('3', sq(x))}) = 2√(${fr('6', x)}),<br>which is a true statement and a useless one: the right-hand side still depends on ${x} (Rule 1).`,
          `Split the first term into two equal halves so that the powers of ${x} cancel:<br>2${x} + ${fr('3', sq(x))} = ${x} + ${x} + ${fr('3', sq(x))}.`,
          `The product of these three positive numbers is ${x} ⋅ ${x} ⋅ ${fr('3', sq(x))} = 3, a constant. AM-GM on three numbers gives<br>${fr(`${x} + ${x} + ${fr('3', sq(x))}`, '3')} ≥ (3)<sup>1/3</sup><br>⟹ 2${x} + ${fr('3', sq(x))} ≥ 3 ⋅ 3<sup>1/3</sup> = 3<sup>4/3</sup>.`,
          `Equality needs all three terms equal: ${x} = ${fr('3', sq(x))}, i.e. ${cu(x)} = 3, i.e. ${x} = 3<sup>1/3</sup>, which is a legitimate positive value. Hence the least value is<br>3<sup>4/3</sup> = 3 ⋅ <sup>3</sup>√3 ≈ 4.327 attained at ${x} = 3<sup>1/3</sup>.`,
          `<b>Check.</b> At ${x} = 1.4422: 2${x} = 2.8844 and ${fr('3', sq(x))} = 1.4423, total 4.3267, and 3<sup>4/3</sup> = 4.3267. Agreed.`,
          `<b>The transferable move.</b> To handle <i>λ</i>${x}<sup>${m}</sup> + <i>μ</i>${x}<sup>−${k}</sup> (<i>λ</i>, <i>μ</i>, ${x} > 0), split the first term into ${k} equal pieces and the second into ${m} equal pieces; the powers of ${x} then cancel in the product automatically. Counting the pieces is the entire skill.`,
        ],
        ans: `3<sup>4/3</sup> = 3 ⋅ <sup>3</sup>√3 ≈ 4.327 attained at ${x} = 3<sup>1/3</sup>.`,
      },
      {
        t: 'ex',
        tag: 'G2: JEE Advanced Level',
        q: `If ${a}, ${b}, ${c} are positive and ${a} + ${b} + ${c} = 1, prove that <i>ab</i><sup>2</sup>${cu(c)} ≤ ${fr('1', '432')}, and find the values of ${a}, ${b}, ${c} at which equality holds.`,
        steps: [
          `The exponents are 1, 2, 3, so cut the constraint into 1 + 2 + 3 = 6 pieces (Rule 2):<br>${a} + ${fr(b, '2')} + ${fr(b, '2')} + ${fr(c, '3')} + ${fr(c, '3')} + ${fr(c, '3')} = ${a} + ${b} + ${c} = 1.`,
          `Apply AM-GM to those six positive numbers:<br>${fr('1', '6')} ≥ [${a}(${fr(b, '2')})<sup>2</sup>(${fr(c, '3')})<sup>3</sup>]<sup>1/6</sup><br>= [${fr(`<i>ab</i><sup>2</sup>${cu(c)}`, '4 ⋅ 27')}]<sup>1/6</sup> = [${fr(`<i>ab</i><sup>2</sup>${cu(c)}`, '108')}]<sup>1/6</sup>.`,
          `Raise both sides to the sixth power (both sides are positive, so the direction is safe):<br>${fr('1', '6<sup>6</sup>')} ≥ ${fr(`<i>ab</i><sup>2</sup>${cu(c)}`, '108')}<br>⟹ <i>ab</i><sup>2</sup>${cu(c)} ≤ ${fr('108', '46656')} = ${fr('1', '432')}. ■`,
          `Equality needs all six pieces equal, each therefore ${fr('1', '6')}:<br>${a} = ${fr(b, '2')} = ${fr(c, '3')} = ${fr('1', '6')}<br>⟹ ${a} = ${fr('1', '6')}, ${b} = ${fr('1', '3')}, ${c} = ${fr('1', '2')}.`,
          `<b>Check.</b> ${a} + ${b} + ${c} = ${fr('1', '6')} + ${fr('2', '6')} + ${fr('3', '6')} = 1, and <i>ab</i><sup>2</sup>${cu(c)} = ${fr('1', '6')} ⋅ ${fr('1', '9')} ⋅ ${fr('1', '8')} = ${fr('1', '432')}. Both confirmed.`,
          '<b>What to notice.</b> The coefficients 2 and 3 that you divide by are exactly the exponents, and they reappear in the constant 2<sup>2</sup> ⋅ 3<sup>3</sup> = 108. Nothing here needs calculus, and a Lagrange-multiplier solution would take three times as long.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'G3: JEE Main: Speed Trap',
        q: `Find the minimum value of ${f}(${x}) = ${x} + ${fr('4', x)} for ${x} ≥ 3.`,
        steps: [
          `<b>The trap: an equality point outside the domain.</b> The seductive answer is instant. Both ${x} and ${fr('4', x)} are positive, so by AM-GM<br>${x} + ${fr('4', x)} ≥ 2√(${x} ⋅ ${fr('4', x)}) = 2√4 = 4,<br>“so the minimum is 4”: wrong. The inequality is perfectly true. It is the word “minimum” that is false, because a minimum must be <b>attained</b>.`,
          `Equality in AM-GM requires the two terms to be equal: ${x} = ${fr('4', x)}, i.e. ${sq(x)} = 4, i.e. ${x} = 2 for positive ${x}. But the domain is ${x} ≥ 3, and 2 is not in it. So 4 is a lower bound that ${f} never reaches on this domain.`,
          `<b>Correct solution.</b> On ${x} ≥ 3 the function is increasing. You can see this without calculus: for 3 ≤ ${x1} < ${x2},<br>${f}(${x2}) − ${f}(${x1}) = (${x2} − ${x1}) − 4(${fr('1', x1)} − ${fr('1', x2)})<br>= (${x2} − ${x1})(1 − ${fr('4', `${x1}${x2}`)}) > 0,<br>since ${x1}${x2} > 9 > 4. An increasing function on [3, ∞) takes its least value at the left endpoint:<br>min<sub>${x}≥3</sub>(${x} + ${fr('4', x)}) = 3 + ${fr('4', '3')} = ${fr('13', '3')} ≈ 4.333, at ${x} = 3.`,
          `<b>Check.</b> ${f}(3) = 4.333, ${f}(3.5) = 4.643, ${f}(4) = 5: rising, as claimed, and every value is comfortably above the unattained bound 4.`,
          `<b>How to never fall for it.</b> After writing any AM-GM bound, solve the equality condition and look at the answer. If it satisfies every restriction in the question, the bound is the extremum. If it does not, the bound is only a bound; for a function like this one, which falls to the equality point and rises after it, the extremum has moved to the nearest boundary. Topic 05’s second worked example (${x} + ${fr('9', x)} ≥ 6, minimum 6 at ${x} = 3) is safe only because the question said ${x} > 0 and ${x} = 3 was allowed.`,
        ],
        ans: `min<sub>${x}≥3</sub>(${x} + ${fr('4', x)}) = 3 + ${fr('4', '3')} = ${fr('13', '3')} ≈ 4.333, at ${x} = 3.`,
      },
      {
        t: 'ex',
        tag: 'G4: JEE Advanced Level',
        q: `If ${a}, ${b}, ${c} > 0 and 4${a} + 3${b} + 2${c} = 5, find the greatest value of ${sq(a)}${cu(b)}${c}<sup>4</sup> and the values of ${a}, ${b}, ${c} that achieve it.`,
        steps: [
          `Exponents 2, 3, 4 give 2 + 3 + 4 = 9 pieces. The coefficient attached to each variable rides along into its piece (Rule 2): split 4${a} into two copies of 2${a}, split 3${b} into three copies of ${b}, and split 2${c} into four copies of ${fr(c, '2')}. The nine pieces sum to 4${a} + 3${b} + 2${c} = 5, so their arithmetic mean is ${fr('5', '9')}, and AM-GM gives<br>${fr('5', '9')} ≥ [(2${a})<sup>2</sup>(${b})<sup>3</sup>(${fr(c, '2')})<sup>4</sup>]<sup>1/9</sup><br>= [${fr(`4${sq(a)} ⋅ ${cu(b)} ⋅ ${c}<sup>4</sup>`, '16')}]<sup>1/9</sup><br>= [${fr(`${sq(a)}${cu(b)}${c}<sup>4</sup>`, '4')}]<sup>1/9</sup>.`,
          `Raising to the ninth power,<br>${sq(a)}${cu(b)}${c}<sup>4</sup> ≤ 4(${fr('5', '9')})<sup>9</sup>.`,
          `Equality needs the nine pieces equal, each to their common mean ${fr('5', '9')}:<br>2${a} = ${b} = ${fr(c, '2')} = ${fr('5', '9')}<br>⟹ ${a} = ${fr('5', '18')}, ${b} = ${fr('5', '9')}, ${c} = ${fr('10', '9')}.`,
          `<b>Check the constraint.</b><br>4(${fr('5', '18')}) + 3(${fr('5', '9')}) + 2(${fr('10', '9')})<br>= ${fr('10', '9')} + ${fr('15', '9')} + ${fr('20', '9')} = ${fr('45', '9')} = 5.`,
          `<b>Check the value.</b><br>(${fr('5', '18')})<sup>2</sup>(${fr('5', '9')})<sup>3</sup>(${fr('10', '9')})<sup>4</sup><br>= ${fr('25', '324')} ⋅ ${fr('125', '729')} ⋅ ${fr('10000', '6561')}<br>= ${fr('31 250 000', '1 549 681 956')},<br>4(${fr('5', '9')})<sup>9</sup> = ${fr('4 ⋅ 1 953 125', '387 420 489')}<br>= ${fr('7 812 500', '387 420 489')}<br>= ${fr('31 250 000', '1 549 681 956')}.<br>Identical.`,
          `So the greatest value is 4(${fr('5', '9')})<sup>9</sup>.`,
          `<b>The general statement worth carrying away.</b> For ${sb('α', '1')}${x1} + ⋯ + ${sb('α', m)}${sb('x', m)} = ${k} with all quantities positive,<br>${x1}<sup>${p}₁</sup> ⋯ ${sb('x', m)}<sup>${p}<sub>${m}</sub></sup><br>≤ (∏<sub>${i}</sub> ${fr(`${sb('p', i)}<sup>${p}<sub>${i}</sub></sup>`, `${sb('α', i)}<sup>${p}<sub>${i}</sub></sup>`)})(${fr(k, `${sb('p', '1')} + ⋯ + ${sb('p', m)}`)})<sup>${p}<sub>1</sub>+⋯+${p}<sub>${m}</sub></sup>,<br>with equality when ${fr(`${sb('α', '1')}${x1}`, sb('p', '1'))} = ⋯ = ${fr(`${sb('α', m)}${sb('x', m)}`, sb('p', m))}. Do not memorise it; rebuild it from the splitting each time, which takes fifteen seconds and never misremembers a coefficient.`,
        ],
        ans: `4(${fr('5', '9')})<sup>9</sup>.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '(Board) Three positive numbers <i>x</i>, <i>y</i>, <i>z</i> have sum 12. Find the greatest possible value of their product. Then, if instead their product is 64, find the least possible value of their sum.',
            a: `Greatest product (${fr('12', '3')})<sup>3</sup> = 64, at ${x} = ${y} = <i>z</i> = 4. Least sum 3 ⋅ 64<sup>1/3</sup> = 12, at ${x} = ${y} = <i>z</i> = 4. The same point answers both: that is the fixed-sum / fixed-product duality.`,
          },
          {
            q: `(Board) If ${a}, ${b}, ${c} > 0 and <i>abc</i> = 1, prove that (1 + ${a})(1 + ${b})(1 + ${c}) ≥ 8.`,
            a: `Apply AM-GM to each bracket: 1 + ${a} ≥ 2√${a}, and similarly for ${b} and ${c}. Multiplying, (1 + ${a})(1 + ${b})(1 + ${c}) ≥ 8√(<i>abc</i>) = 8. Equality at ${a} = ${b} = ${c} = 1.`,
          },
          {
            q: `(Main) For ${x} > 0, find the least value of 3${x} + ${fr('12', sq(x))}.`,
            a: `9, at ${x} = 2. (Split as ${fr(`3${x}`, '2')} + ${fr(`3${x}`, '2')} + ${fr('12', sq(x))}; the product is 27, so the sum is at least 3 ⋅ 3 = 9, with equality when ${fr(`3${x}`, '2')} = ${fr('12', sq(x))}, i.e. ${cu(x)} = 8.)`,
          },
          {
            q: `(Main) If ${x}, ${y} > 0 and ${x} + ${y} = 10, find the greatest value of ${cu(x)}${sq(y)}.`,
            a: `3456, at ${x} = 6, ${y} = 4. (Five pieces, namely three copies of ${fr(x, '3')} and two copies of ${fr(y, '2')}, summing to 10; so [${fr(`${cu(x)}${sq(y)}`, '108')}]<sup>1/5</sup> ≤ 2 and ${cu(x)}${sq(y)} ≤ 108 ⋅ 32.)`,
          },
          {
            q: `(Main) Find the least value of ${x} + ${fr('9', x)} for ${x} ≥ 4.`,
            a: `${fr('25', '4')}, at ${x} = 4. <b>Not</b> 6. AM-GM gives ${x} + ${fr('9', x)} ≥ 6 with equality at ${x} = 3, which is outside [4, ∞); the function is increasing there, so the least value sits at the left endpoint.`,
          },
          {
            q: `(Main) If ${a}, ${b}, ${c} > 0 and ${a} + ${b} + ${c} = 3, find the greatest value of ${sq(a)}${sq(b)}${sq(c)}.`,
            a: `1, at ${a} = ${b} = ${c} = 1. (AM-GM gives <i>abc</i> ≤ (${fr('3', '3')})<sup>3</sup> = 1; squaring preserves the direction since <i>abc</i> > 0.)`,
          },
          {
            q: `(Adv) If ${a}, ${b}, ${c}, ${d} > 0 and <i>abcd</i> = 1, prove that (1 + ${a})(1 + ${b})(1 + ${c})(1 + ${d}) ≥ 16.`,
            a: `Same move as Q2 with four brackets. From 1 + ${a} ≥ 2√${a} and its three companions, multiplying gives (1 + ${a})(1 + ${b})(1 + ${c})(1 + ${d}) ≥ 16√(<i>abcd</i>) = 16. Equality at ${a} = ${b} = ${c} = ${d} = 1.`,
          },
          {
            q: `(Adv) Prove that ${n}! < (${fr(`${n} + 1`, '2')})<sup>${n}</sup> for every integer ${n} ≥ 2.`,
            a: `Apply AM-GM to the ${n} distinct positive numbers 1, 2, …, ${n}. They are not all equal for ${n} ≥ 2, so the inequality is strict:<br>(${n}!)<sup>1/${n}</sup> < ${fr(`1 + 2 + ⋯ + ${n}`, n)}<br><br>= ${fr(N1, `2${n}`)}<br><br>= ${fr(`${n} + 1`, '2')}, using the Topic 07 sum. Raising to the ${n}th power gives the result. (At ${n} = 4: 24 < 2.5<sup>4</sup> = 39.06.)`,
          },
        ],
      },

      { t: 'part', title: 'How Additional topics F and G connect to the chapter' },
      {
        t: 'table',
        title: null,
        head: ['Additional topic item', 'Extends', 'What it adds'],
        rows: [
          [
            'Additional topic F, Method 1',
            'Topic 01, Key procedures; Topic 02, Derivation 3; Topic 07’s fifth worked example',
            `${an} = ${Sn} − ${Snm1} as a named technique, with the ${n} = 1 test and non-polynomial ${Sn}`,
          ],
          [
            'Additional topic F, Method 2',
            'Topic 01, Procedure 4 and third worked example',
            'The three recurrence shapes and the fixed-point substitution that turns a recurrence into a closed form',
          ],
          [
            'Additional topic F, Method 3',
            'Topic 01, Concept intuition; Topic 03’s seventh worked example',
            'Nested radicals and continued fractions, with the convergence licence and the repelling-fixed-point trap',
          ],
          [
            'Additional topic G',
            'Topic 05, Worked examples; Topic 03’s sixth worked example',
            `The ${n}-number AM-GM put to work: fixed-sum / fixed-product duality, the splitting rule for weighted products, and the domain check`,
          ],
        ],
      },

      { t: 'part', title: 'Cheat sheet: Additional topics F and G' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `From ${Sn}`,
            note: `${a1} = ${S1}; ${an} = ${Sn} − ${Snm1} for ${n} ≥ 2. <b>Always test the formula at ${n} = 1.</b> If it fails, the answer is two-piece. Works for any ${Sn}, not just polynomials.`,
          },
          {
            f: 'Diagnostics',
            note: `AP from the first term ⟺ ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> (no constant); GP with ${r} ≠ 1 from the first term ⟺ ${Sn} = <i>λ</i>(${r}<sup>${n}</sup> − 1), <i>λ</i> ≠ 0 (for ${r} = 1, ${Sn} = <i>na</i>).`,
          },
          { f: `Additive recurrence ${an1} = ${an} + ${f}(${n})`, note: `${an} = ${a1} + ${SK1} ${f}(${k}).` },
          { f: `Multiplicative recurrence ${an1} = ${an} ${g}(${n})`, note: `${an} = ${a1} ${PK1} ${g}(${k}).` },
          {
            f: `Affine recurrence ${an1} = ${p} ${an} + ${q} with ${p} ≠ 1`,
            note: `fixed point ${LFIX}, and ${AFFINE}. <b>An affine recurrence is a GP measured from ${L}.</b>`,
          },
          {
            f: 'Limit',
            note: `${an} → ${L} ⇒ ${L} = ${f}(${L}), never the converse. For the affine case, ${an} → ${L} <b>iff</b> |${p}| < 1 (or ${a1} = ${L}): the same threshold as ${Sinf} in Topic 03.`,
          },
          {
            f: 'Nested radicals and continued fractions',
            note: `(reject the unwanted root on grounds, the negative one or, for the product form, 0, and say what the grounds are):<br>• √(${c} + √(${c} + ⋯)) = ${fr(`1 + √(1 + 4${c})`, '2')}<br>• √(${c}√(${c}√${c} ⋯)) = ${c}<br>• ${CF(c)} = ${fr(`${c} + √(${sq(c)} + 4)`, '2')}`,
          },
          {
            f: 'AM-GM engine',
            note: `sum fixed at ${S} ⇒ product ≤ (${fr(S, n)})<sup>${n}</sup>; product fixed at ${P} ⇒ sum ≥ <i>nP</i><sup>1/${n}</sup>; equality iff all terms equal.`,
          },
          { f: 'Rule 1', note: 'split until the geometric mean is a constant. A bound containing the variable is not a bound.' },
          {
            f: 'Rule 2 (weighted split)',
            note: `for ${x}<sup>${p}</sup>${y}<sup>${q}</sup> under ${α}${x} + ${β}${y} = ${k}, use ${p} copies of ${fr(`${α}${x}`, p)} and ${q} copies of ${fr(`${β}${y}`, q)}; equality iff ${fr(`${α}${x}`, p)} = ${fr(`${β}${y}`, q)}. <b>Exponents give the number of copies; coefficients give the divisor.</b>`,
          },
          {
            f: 'Rule 3 (the trap)',
            note: 'an AM-GM bound is a minimum only if the equality point lies in the domain. Solve “all terms equal”, then check it is allowed. If not, go to the boundary.',
          },
          {
            f: 'Two benchmark results',
            note: `• ${a} + ${b} + ${c} = 1 ⇒ <i>ab</i><sup>2</sup>${cu(c)} ≤ ${fr('1', '432')} (at ${a}, ${b}, ${c} = ${fr('1', '6')}, ${fr('1', '3')}, ${fr('1', '2')});<br>• <i>abc</i> = 1 ⇒ (1 + ${a})(1 + ${b})(1 + ${c}) ≥ 8.`,
          },
        ],
        aids: [],
      },
    ],
  },
];
