import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Additional topics A–D, pp. 1215–1237 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word (decision 40): the
 * supplement's Addenda 14.1 "Probability with Permutation Counts" (pp. 1215–1220)
 * and 14.2 "Inequality Bounds from the Axioms" (pp. 1220–1226), and the Additional
 * Topics part's Addenda 14.3 "Selection and Arrangement in the Same Problem"
 * (pp. 1227–1232) and 14.4 "The Matching Problem, and Inclusion–Exclusion Past
 * Three Events" (pp. 1232–1237), lettered A–D. The supplement's p. 1215 opening is
 * A's "Introduction"; its "Cheat Sheet Box" (pp. 1225–1226) is B's last part. The
 * Additional Topics part's p. 1227 opening and its table are C's "Introduction";
 * "Cheat Sheet Additions" and the closing "Beyond the syllabus: geometric
 * probability" (pp. 1236–1237) are D's last parts. Headings not copied.
 * Figures: 14.6 (caption p. 1216, drawn p. 1217) closes A's method; 14.7 (caption
 * p. 1221, drawn p. 1222) closes B's method; the part's own "Figure 1" (p. 1229)
 * is m11-14-C-d1 and "Figure 2" (p. 1234) is m11-14-D-d1, each closing its
 * method, where the book prints it. The tables inside Examples S1 and S7 are
 * written as labelled lines, one line per row. The book's empty set is φ (as
 * printed, as Topics 01–03). ⁿCᵣ and ⁿPᵣ with an italic C and P, as the page
 * sets them. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
/** The empty set, as the book prints it. */
const EMPTY = 'φ';

const A = I('A');
const B = I('B');
const Cv = I('C');
const S = I('S');
const E = I('E');
const X = I('X');
const n = I('n');
const r = I('r');
const k = I('k');
const m = I('m');
const p = I('p');
const i = I('i');
const j = I('j');
const e = I('e');
const P = I('P');
const pr = (s: string) => `<i>P</i>(${s})`;
const nn = (s: string) => `<i>n</i>(${s})`;
const NC = (x: string, y: string) => `<sup>${x}</sup><i>C</i><sub>${y}</sub>`;
const NP = (x: string, y: string) => `<sup>${x}</sup><i>P</i><sub>${y}</sub>`;
const sb = (b: string, s: string) => `${b}<sub>${s}</sub>`;
const As = (s: string) => sb(A, s);
const D = (s: string) => sb(I('D'), s);
const pw = (b: string, x: string) => `${b}<sup>${x}</sup>`;
const NEG = (x: string) => `(−1)<sup>${x}</sup>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const eq = (l: string, rt: string) => `${l}${NB}=${NB}${rt}`;

const nS = nn(S);
const nE = nn(E);
const nCr = NC(n, r);
const nPr = NP(n, r);
const nCk = NC(n, k);
const AuB = `${A}${NB}∪${NB}${B}`;
const AnB = `${A}${NB}∩${NB}${B}`;
const PA = pr(A);
const PB = pr(B);
const PAuB = pr(AuB);
const PAnB = pr(AnB);
const SUMAB = `${PA} + ${PB}`;
const BONF = `${SUMAB} − 1`;
const MINAB = `min(${PA}, ${PB})`;
const MAXAB = `max(${PA}, ${PB})`;
const Ai = As(i);
const Aj = As(j);
const Ak = As(k);
const A1 = As('1');
const A2 = As('2');
const An = As(n);
const N4 = eq(n, '4');
const N3 = eq(n, '3');
const EINV = `1 − ${e}<sup>−1</sup>`;
const nEnS = fr(nE, nS);
const PERM = fr(`${n}!`, `(${n} − ${r})!`);
const REP = fr(`${n}!`, `${sb(p, '1')}! ${sb(p, '2')}! ⋯`);
const REPR = fr(`${r}!`, `${sb(p, '1')}! ${sb(p, '2')}! ⋯`);
const F = (k1: string) => fr('1', `${k1}!`);

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 1215–1220 ────────────────
  {
    n: 'A',
    title: 'Probability with Permutation Counts',
    extra: true,
    kalam: 'An outcome is one complete arrangement: one specific number, one specific word-arrangement, one specific line-up.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Additional topics A and B add two topics that complete Chapter 14. The first is ordered counting: permutations are defined in Topic 03 and named in Procedure A, and here they are put to work on probability problems. The second is the family of inequality bounds on probabilities, derived from the axioms, which Topic 02’s Exam relevance blurb flags for JEE Advanced readers.',
      },
      {
        t: 'p',
        html: `<b>A note on scope.</b> Everything here stays inside Class 11. Conditional probability ${pr(`${A} ∣ ${B}`)}, independence and the multiplication rule are Class 12 material and the chapter is right to defer them. Nothing below uses them, and one worked example below shows you concretely why reaching for them early produces a wrong number.`,
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `JEE Main asks at least one ordered-counting probability almost every session ${ESTIMATE}: digits forming a number under a divisibility or size condition, letters of a word arranged with a separation or togetherness condition, people in a queue or in ranked positions. CBSE Boards asks the gentler versions (two particular people together in a row). The counting itself is Chapter 6 material you already own; what is new is the discipline of counting ${nE} and ${nS} <b>the same way</b>, which is exactly what Topic 03’s Pitfall 1 warns about. JEE Advanced layers a second condition on top and expects you to count without listing.`,
      },

      { t: 'part', title: 'The method' },
      { t: 'p', html: 'This is Procedure A of Topic 03 with the “order matters” branch actually taken.' },
      {
        t: 'proc',
        title: 'Procedure A-P: Ordered-counting probability',
        steps: [
          '<b>Decide what one outcome is, and fix a counting convention.</b> An outcome is one complete arrangement: one specific number, one specific word-arrangement, one specific line-up. <b>Why this matters:</b> “the numbers formed” and “the arrangements of the letters” are different sample spaces from “the sets of digits chosen,” and they have different sizes.',
          `<b>Count ${nS} as an arrangement count.</b><br>• ${r} positions filled from ${n} distinct objects, no repetition: ${nPr} = ${PERM}.<br><br>• All ${n} objects in a row, with repeats ${sb(p, '1')}, ${sb(p, '2')}, … of identical objects: ${REP}.<br><br>• Digits with a leading-zero restriction: count the whole thing and subtract the arrangements that start with 0, or fill the leading position first.`,
          '<b>Count <i>n</i>(<i>E</i>) under the same convention.</b> Fill the constrained positions first. If the condition is on the last digit, choose the last digit before anything else; if it is on the first digit, choose that first; if two conditions collide on the same digit, split into cases.',
          `<b>For separation conditions (“no two ${X} together”), use the gap method.</b> Arrange the non-${X} objects first, then choose gaps for the ${X} objects from the (number of non-${X} + 1) available gaps. <b>Why:</b> placing the ${X}’s into distinct gaps makes adjacency impossible by construction, so no messy subtraction is needed.`,
          `<b>Divide and sanity-check:</b> ${pr(E)} = ${nEnS} ∈ [0, 1]. Where you can, re-count by a second convention (all objects treated as distinct, or via the complement) and confirm the ratio is unchanged.`,
        ],
      },
      {
        t: 'p',
        html: `<b>The consistency principle, stated plainly.</b> As long as ${nE} and ${nS} are counted in the same currency (both ordered, or both unordered, or both “all letters distinct”), the ratio is correct. Mixing currencies (${nPr} upstairs, ${nCr} downstairs) is the single most expensive error in this topic, because the answer still looks like a probability.`,
      },
      { t: 'fig', id: 'm11-14-fig-14.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S1: JEE Main Level',
        q: 'Four-digit numbers with no repeated digit are formed using the digits 1, 2, 3, 4, 5, 6, 7. One such number is chosen at random. Find the probability that it is (a) even, (b) divisible by 5, (c) both even and greater than 4000.',
        steps: [
          `An outcome is one four-digit number, so order matters and every number is equally likely.<br>${nS} = ${NP('7', '4')} = 7 × 6 × 5 × 4 = 840.`,
          `<b>(a) Even.</b> A number is even exactly when its units digit is even, so fill the units place first: it must be 2, 4 or 6 (three choices). The remaining three places are then filled from the six unused digits in ${NP('6', '3')} = 6 × 5 × 4 = 120 ways.<br>${nE} = 3 × 120 = 360,<br>${pr('even')} = ${fr('360', '840')} = ${fr('3', '7')}.`,
          `<b>Second method (symmetry).</b> Every one of the seven digits is equally likely to land in the units place, because the digits play symmetric roles in ${NP('7', '4')}. Three of the seven digits are even, so ${P} = ${fr('3', '7')} directly. ✓`,
          `<b>(b) Divisible by 5.</b> Only 5 is available as a terminal digit, so the units place is forced: 1 choice, then ${NP('6', '3')} = 120.<br>${pr('divisible by 5')} = ${fr('120', '840')} = ${fr('1', '7')}.<br><br>Consistent with the symmetry argument: one favourable digit out of seven.`,
          `<b>(c) Even and greater than 4000.</b> Now two positions are constrained at once (the units digit must lie in {2, 4, 6} and the thousands digit in {4, 5, 6, 7}), and these sets overlap, so split into cases on the units digit.`,
          `(Units digit; choices for thousands digit; middle two places; count):<br>• 2: 4, 5, 6, 7 (all four available); ${NP('5', '2')} = 20; 4 × 20 = 80<br>• 4: 5, 6, 7 (4 is used up); ${NP('5', '2')} = 20; 3 × 20 = 60<br>• 6: 4, 5, 7 (6 is used up); ${NP('5', '2')} = 20; 3 × 20 = 60<br>• Total: 200<br><br>${P} = ${fr('200', '840')} = ${fr('5', '21')}.`,
          `<b>Second method.</b> Count the valid (thousands, units) ordered pairs directly: 4 + 3 + 3 = 10 pairs, each completed by ${NP('5', '2')} = 20 ways of filling the middle two places, giving 10 × 20 = 200. ✓`,
          `<b>Read this before you move on.</b> Part (c) is not ${pr('even')} × ${pr('>' + NB + '4000')}. That product would be<br>${fr('3', '7')} × ${fr('4', '7')} = ${fr('12', '49')} ≈ 0.2449,<br><br>whereas the true answer is<br>${fr('5', '21')} ≈ 0.2381.<br><br>Multiplying probabilities of two events is a Class 12 move that requires a justification this chapter has not given you, and here it would also give the wrong number, because the two conditions compete for the digits 4 and 6. <b>Count, do not multiply probabilities.</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'S2: JEE Advanced Level',
        q: 'The letters of the word <b>ASSASSIN</b> are arranged at random in a row. Find the probability that (a) no two S’s are adjacent, (b) all four S’s occur together.',
        steps: [
          `ASSASSIN has 8 letters: A twice, S four times, I once, N once.<br>${nS} = ${fr('8!', '2! 4!')} = ${fr('40320', '48')} = 840.<br><br>Every distinguishable arrangement is equally likely, since the underlying random shuffle of the eight letter-tiles treats all tiles alike.`,
          `<b>(a) No two S’s adjacent: the gap method.</b> First arrange the four non-S letters A, A, I, N:<br>${fr('4!', '2!')} = 12 arrangements.<br><br>Four letters in a row create 5 gaps (one before, three between, one after). Dropping each S into a <b>different</b> gap makes adjacency impossible, and since all four S’s are identical we only choose which gaps:<br>${NC('5', '4')} = 5 ways.<br>${nE} = 12 × 5 = 60,<br>${P} = ${fr('60', '840')} = ${fr('1', '14')}.`,
          `<b>Second method (treat all eight letters as distinct tiles).</b> Label the tiles A<sub>1</sub>, A<sub>2</sub>, S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>, S<sub>4</sub>, I, N; then ${nS} = 8! = 40320. The number of ways to choose 4 pairwise non-adjacent positions out of 8 in a row is ${NC('8−4+1', '4')} = ${NC('5', '4')} = 5. Place the four S tiles in those positions (4! ways) and the other four tiles in the remaining positions (4! ways):<br>${nE} = 5 × 24 × 24 = 2880,<br>${P} = ${fr('2880', '40320')} = ${fr('1', '14')}. ✓`,
          'Two entirely different sample spaces, one answer, which is the consistency principle of Step 5 doing its job.',
          `<b>(b) All four S’s together.</b> Glue the four S’s into a single block SSSS. You are now arranging 5 objects (the block, A, A, I, N) with A repeated:<br>${nE} = ${fr('5!', '2!')} = 60,<br><br>${P} = ${fr('60', '840')} = ${fr('1', '14')}.<br><br>The S’s are identical, so the block has no internal arrangements to count: do <b>not</b> multiply by 4! here.`,
          `<b>Why (a) and (b) came out equal.</b> It is not a fluke of arithmetic: both events reduce to choosing one of exactly 5 position-patterns for the S’s (${NC('5', '4')} = 5 gap-choices in (a); 5 possible starting positions for a block of four in (b)), each combined with the same 12 arrangements of A, A, I, N.`,
          `<b>Sanity check.</b> Both answers lie in [0, 1], and<br>${fr('1', '14')} + ${fr('1', '14')} = ${fr('1', '7')} < 1:<br><br>consistent, since “no two together” and “all four together” are mutually exclusive events (with 8 letters and 4 S’s, they cannot both hold) and the remaining ${fr('6', '7')} covers all the partially-clumped arrangements.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'Five-digit numbers with no repeated digit are formed using all of the digits 0, 1, 2, 3, 4 (the number may not begin with 0). One is chosen at random. Find the probability that it is even.',
            a: `${nS} = 4 × 4! = 96. Favourable = 60 (units digit 0: 4! = 24; units digit 2: 3 × 3! = 18; units digit 4: 18).<br>${P} = ${fr('60', '96')} = ${fr('5', '8')}.`,
          },
          {
            q: 'Four boys and three girls stand in a row in random order. Find the probability that no two girls stand next to each other.',
            a: `${nS} = 7! = 5040. Favourable = 4! × ${NC('5', '3')} × 3! = 24 × 10 × 6 = 1440.<br>${P} = ${fr('1440', '5040')} = ${fr('2', '7')}.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          `<b>Do not mix ${nPr} and ${nCr} across the fraction bar.</b> In Example S1, using ${NC('7', '4')} = 35 for ${nS} while counting ${nE} as ordered arrangements gives a “probability” above 1: the fastest possible sign that the currencies do not match.`,
          '<b>Fill the constrained position first.</b> Filling the thousands place before the units place in Example S1(a) forces you into needless cases.',
          `<b>Identical objects have no internal arrangements.</b> The four S’s in Example S2(b) contribute a factor of 1, not 4!. Multiplying by 4! would give ${P} = ${fr('24', '14')} > 1.`,
          `<b>“All together” and “no two together” are complements only for exactly two objects.</b> With three or more S’s, “all together” and “no two together” leave a large middle ground, so ${pr('no two together')} ≠ 1 − ${pr('all together')}.`,
          '<b>Never convert an “and” condition into a product of probabilities.</b> Count the joint arrangements, as Example S1(c) does.',
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 1220–1226 ────────────────
  {
    n: 'B',
    title: 'Inequality Bounds from the Axioms',
    extra: true,
    kalam: 'Everything below follows from the three axioms alone: no new machinery, no Class 12 concepts.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 02 promised you this and it is time to deliver. JEE Advanced asks it as “find the greatest and least values of ${PAnB}”, and as a consistency test: given some probabilities, is the data even possible? JEE Main uses the same bounds as a silent filter in multi-part questions: an option that violates ${PAnB} ≥ ${BONF} can be discarded without any work. CBSE Boards rarely asks the bounds directly ${ESTIMATE} but does ask the special case “can ${A} and ${B} be mutually exclusive?”, which is the Bonferroni bound in disguise. Everything below follows from the three axioms alone: no new machinery, no Class 12 concepts.`,
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: `Everything rests on two facts you already have from Topic 02: <b>Axiom 1</b> (${P}${NB}≥${NB}0) and <b>Result 3</b> (${P}${NB}≤${NB}1).`,
      },
      { t: 'p', html: `<b>Result 6: Monotonicity.</b> If ${A} ⊆ ${B} then ${PA} ≤ ${PB}.` },
      {
        t: 'p',
        html: `<b>Proof.</b> Carve ${B} into two disjoint slabs, ${B} = ${A}${NB}∪${NB}(${B} − ${A}) with ${A}${NB}∩${NB}(${B} − ${A}) = ${EMPTY}. By Axiom 3, ${PB} = ${PA} + ${pr(`${B} − ${A}`)}, and ${pr(`${B} − ${A}`)} ≥ 0 by Axiom 1. Hence ${PB} ≥ ${PA}. ■<br><br><b>Reading it in sand:</b> a bigger heap cannot hold less sand.`,
      },
      { t: 'p', html: '<b>Result 7: Boole’s inequality (the union is never worse than the sum).</b>' },
      {
        t: 'formula',
        kicker: 'Boole’s inequality',
        main: `${PAuB} ≤ ${SUMAB}`,
        legend: [`${A}, ${B} = any two events`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> From the general addition rule, ${PAuB} = ${SUMAB} − ${PAnB}, and ${PAnB} ≥ 0 by Axiom 1. ■`,
      },
      {
        t: 'p',
        html: `More generally, for events ${A1}, ${A2}, …, ${An}:<br>${pr(`${A1}${NB}∪${NB}${A2}${NB}∪${NB}⋯${NB}∪${NB}${An}`)}<br>≤ ${pr(A1)} + ${pr(A2)} + ⋯ + ${pr(An)}<br>(apply the two-event case repeatedly). Equality holds when the events are pairwise mutually exclusive (and only then, if every outcome has positive probability).`,
      },
      { t: 'p', html: '<b>Result 8: Bonferroni’s inequality (the overlap cannot be too small).</b>' },
      {
        t: 'formula',
        kicker: 'Bonferroni’s inequality',
        main: `${PAnB} ≥ ${BONF}`,
        legend: [`${A}, ${B} = any two events`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Rearrange the addition rule as ${PAnB} = ${SUMAB} − ${PAuB}, then use ${PAuB} ≤ 1 from Result 3. ■`,
      },
      {
        t: 'p',
        html: `More generally,<br>${pr(`${A1}${NB}∩${NB}⋯${NB}∩${NB}${An}`)}<br>≥ ${pr(A1)} + ⋯ + ${pr(An)} − (${n} − 1),<br>obtained by applying Boole’s inequality to the complements and using De Morgan.`,
      },
      { t: 'p', html: `<b>Result 9: The four bounds, assembled.</b> Given only ${PA} and ${PB}:` },
      {
        t: 'formula',
        kicker: 'The four bounds',
        main: `max(0, ${BONF})<br>≤ ${PAnB} ≤ ${MINAB}<br>${MAXAB}<br>≤ ${PAuB} ≤ min(1, ${SUMAB})`,
        legend: [`${A}, ${B} = any two events`],
        note: null,
      },
      {
        t: 'table',
        title: 'Where each piece comes from',
        head: ['Bound', 'Source'],
        rows: [
          [`${PAnB} ≥ 0`, 'Axiom 1'],
          [`${PAnB} ≥ ${BONF}`, 'Result 8 (Bonferroni)'],
          [`${PAnB} ≤ ${MINAB}`, `Result 6, since ${AnB} ⊆ ${A} and ${AnB} ⊆ ${B}`],
          [`${PAuB} ≥ ${MAXAB}`, `Result 6, since ${A} ⊆ ${AuB} and ${B} ⊆ ${AuB}`],
          [`${PAuB} ≤ ${SUMAB}`, 'Result 7 (Boole)'],
          [`${PAuB} ≤ 1`, 'Result 3'],
        ],
      },
      {
        t: 'p',
        html: `<b>The lever that ties the two lines together.</b> The addition rule can be written as<br>${PAuB} + ${PAnB}<br>= ${SUMAB},<br>a constant. So the union and the intersection are locked in a see-saw: <b>every unit of probability you push into the overlap comes straight out of the union.</b> Find the interval for one and you get the interval for the other by subtracting from ${SUMAB}, and reversing the endpoints.`,
      },
      {
        t: 'p',
        html: `<b>Attainability.</b> Both endpoints of each interval are genuinely reachable in a suitable sample space, so “greatest value” and “least value” questions have the endpoints as their answers:<br>• The <b>maximum</b> overlap occurs when the smaller event sits entirely inside the larger, i.e. ${A} ⊆ ${B} or ${B} ⊆ ${A}.<br>• The <b>minimum</b> overlap occurs when the events are pushed as far apart as the sample space allows: mutually exclusive if ${SUMAB} ≤ 1, otherwise overlapping by exactly the forced amount ${BONF} and covering all of ${S} between them.`,
      },
      { t: 'fig', id: 'm11-14-fig-14.7' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S3: JEE Advanced Level',
        q: `For two events ${A} and ${B}, ${PA} = 0.6 and ${PB} = 0.8. Find (a) the greatest and least possible values of ${PAnB}, (b) the greatest and least possible values of ${PAuB}, and (c) an explicit sample space realising each extreme.`,
        steps: [
          `<b>(a) Bounds on ${PAnB}.</b><br>Lower bound. By Bonferroni, ${PAnB} ≥ ${BONF} = 0.6 + 0.8 − 1 = 0.4. Since 0.4 > 0, this beats the trivial bound ${P}${NB}≥${NB}0, so<br>${PAnB} ≥ 0.4.`,
          `Upper bound. ${AnB} ⊆ ${A} and ${AnB} ⊆ ${B}, so by monotonicity ${PAnB} ≤ min(0.6,${NB}0.8) = 0.6.`,
          'Least value 0.4, greatest value 0.6.',
          `<b>(b) Bounds on ${PAuB}.</b> Use the see-saw rather than repeating the argument. Since ${PAuB} = ${SUMAB} − ${PAnB} = 1.4 − ${PAnB}, and ${PAnB} ranges over [0.4, 0.6]:<br>${PAuB} ranges over<br>[1.4 − 0.6, 1.4 − 0.4] = [0.8, 1.0].`,
          `Cross-check against the direct bounds: ${PAuB} ≥ max(0.6, 0.8) = 0.8 ✓, and ${PAuB} ≤ min(1, 1.4) = 1 ✓. Note that Boole’s bound 1.4 is useless here: the ceiling ${P}${NB}≤${NB}1 is the binding constraint.`,
          `<b>(c) Explicit realisations.</b> Take ${S} = {1, 2, 3, …, 10} with all ten outcomes equally likely, so each carries probability 0.1.`,
          `<b>Maximum overlap.</b> Let ${A} = {1, 2, 3, 4, 5, 6} and ${B} = {1, 2, …, 8}. Then ${PA} = 0.6, ${PB} = 0.8, and since ${A} ⊆ ${B} we get ${AnB} = ${A} and ${AuB} = ${B}:<br>${PAnB} = 0.6,<br>${PAuB} = 0.8.<br>Both extremes of the “maximum overlap / minimum union” corner are hit simultaneously, as the see-saw guarantees.`,
          `<b>Minimum overlap.</b> Let ${A} = {1, 2, 3, 4, 5, 6} and ${B} = {3, 4, 5, …, 10}. Then ${PA} = 0.6, ${PB} = 0.8, ${AnB} = {3, 4, 5, 6} and ${AuB} = ${S}:<br>${PAnB} = 0.4,<br>${PAuB} = 1.<br>Notice that ${A} and ${B} <b>cannot</b> be made mutually exclusive: 0.6 + 0.8 = 1.4 > 1, so they are forced to share at least 0.4 of the sand.`,
        ],
        ans: `(a) 0.4 ≤ ${PAnB} ≤ 0.6;<br>(b) 0.8 ≤ ${PAuB} ≤ 1`,
      },
      {
        t: 'ex',
        tag: 'S4: JEE Main Speed Trap: is the data even possible?',
        q: 'A survey report claims that 80% of students in a coaching batch attend the morning session, 70% attend the evening session, and 40% attend both. A student is picked at random. Is the report consistent?',
        steps: [
          `Let ${A} = “attends morning”, ${B} = “attends evening”, so ${PA} = 0.8, ${PB} = 0.7, and the report asserts ${PAnB} = 0.4.`,
          `Bonferroni gives the floor:<br>${PAnB} ≥ ${BONF}<br>= 0.8 + 0.7 − 1 = 0.5.`,
          'The claimed 0.4 is below that floor, so <b>the report is inconsistent</b>: no sample space can produce those three numbers.',
          `<b>The trap.</b> The seductive move is to check only ${PAnB} ≤ min(0.8, 0.7) = 0.7, see that 0.4 ≤ 0.7, and declare the data fine. The upper bound is satisfied; it is the lower bound that fails, and the lower bound is the one students never check.`,
          `<b>Confirmation from the other side.</b> If ${PAnB} really were 0.4, then<br>${PAuB} = 0.8 + 0.7 − 0.4<br>= 1.1 > 1,<br>which violates Result 3 outright. The two checks are the same check, seen through the see-saw identity.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `For two events ${A} and ${B}, ${PA} = 0.4 and ${PB} = 0.75. Find the least and greatest possible values of (i) ${PAnB} and (ii) ${PAuB}.`,
            a: `(i) least = max(0, 0.4 + 0.75 − 1) = 0.15, greatest = min(0.4, 0.75) = 0.4.<br>(ii) least = max(0.4, 0.75) = 0.75, greatest = min(1, 1.15) = 1.<br>Check: ${PAuB} = 1.15 − ${PAnB} maps [0.15, 0.4] onto [0.75, 1].`,
          },
          {
            q: `(a) Three events ${A}, ${B}, ${Cv} each have probability 0.75. Find the least possible value of ${pr(`${A}${NB}∩${NB}${B}${NB}∩${NB}${Cv}`)}.<br>(b) Events ${A} and ${B} satisfy ${A} ⊆ ${B}, with ${PA} = 0.35 and ${PB} = 0.62. Find ${PAnB}, ${PAuB} and ${pr(`${B} − ${A}`)}.`,
            a: `(a) By the ${n}-event Bonferroni inequality, ${pr(`${A}${NB}∩${NB}${B}${NB}∩${NB}${Cv}`)} ≥ 0.75 × 3 − 2 = 0.25; least value 0.25.<br>(b) ${A} ⊆ ${B} gives ${AnB} = ${A} and ${AuB} = ${B}, so ${PAnB} = 0.35 and ${PAuB} = 0.62; then ${pr(`${B} − ${A}`)} = ${PB} − ${PAnB} = 0.62 − 0.35 = 0.27.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Check both ends of the interval.</b> The upper bound ${MINAB} is the one students remember and the lower bound is the one exams attack. Whenever ${SUMAB} > 1, the events are forced to overlap.`,
          `<b>max(0, ⋅) is not decoration.</b> When ${SUMAB} ≤ 1, the Bonferroni floor is negative (zero when the sum is exactly 1) and therefore useless; the real floor is 0, attained by making ${A} and ${B} mutually exclusive.`,
          `<b>Boole’s inequality can be slack.</b> In Example S3 it gave ${PAuB} ≤ 1.4, which says nothing. Always intersect it with ${P}${NB}≤${NB}1.`,
          `<b>Monotonicity needs a genuine subset.</b> ${PA} ≤ ${PB} does not imply ${A} ⊆ ${B}: the implication runs one way only.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-tip: one identity, two answers.</b> Compute the interval for ${PAnB}, then get the interval for ${PAuB} for free as [${SUMAB} − upper, ${SUMAB} − lower], capped at 1. In an MCQ this halves the work.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-tip: bounds as an option filter.</b> Before computing anything, discard options that violate 0 ≤ ${P} ≤ 1, ${PAnB} ≤ ${MINAB} or ${PAuB} ≥ ${MAXAB}. On a four-option question this often leaves one survivor.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      { t: 'p', html: '<b>Ordered counting in probability.</b>' },
      {
        t: 'snapshot',
        rows: [
          { f: `${nS} and ${nE} must be counted in the same currency`, note: 'both ordered or both unordered.' },
          { f: `${r} from ${n}, no repetition, order matters`, note: `${nPr} = ${PERM}. All ${n} with repeats: ${REP}.` },
          { f: 'Constrained position (units digit, leading digit) is filled <b>first</b>; overlapping constraints split into cases.', note: '' },
          { f: `“No two ${X} together”`, note: `arrange the ${m} non-${X} objects, then choose ${X}-positions from the ${m} + 1 gaps.` },
          { f: `“${k} identical objects together”`, note: `glue into one block; identical objects contribute <b>no</b> internal ${k}!.` },
          { f: 'Never replace a joint count by a product of probabilities.', note: '' },
        ],
        aids: [],
      },
      {
        t: 'p',
        html: `<b>Bounds from the axioms</b> (all provable from ${P}${NB}≥${NB}0, ${pr(S)}${NB}=${NB}1, additivity):`,
      },
      {
        t: 'table',
        title: null,
        head: ['Name', 'Statement'],
        rows: [
          ['Monotonicity', `${A} ⊆ ${B} ⇒ ${PA} ≤ ${PB}`],
          ['Boole', `${PAuB} ≤ ${SUMAB}; in general<br>${pr(`⋃ ${Ai}`)} ≤ ∑ ${pr(Ai)}`],
          ['Bonferroni', `${PAnB} ≥ ${BONF}; in general<br>${pr(`⋂<sub>${i}=1</sub><sup>${n}</sup> ${Ai}`)} ≥ ∑ ${pr(Ai)} − (${n} − 1)`],
          ['Intersection range', `max(0, ${BONF})<br>≤ ${PAnB} ≤ ${MINAB}`],
          ['Union range', `${MAXAB}<br>≤ ${PAuB} ≤ min(1, ${SUMAB})`],
          ['See-saw identity', `${PAuB} + ${PAnB} = ${SUMAB}`],
        ],
      },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Maximum overlap ⇔ one event contained in the other. Minimum overlap ⇔ events pushed apart (mutually exclusive when ${SUMAB} ≤ 1).`,
            note: '',
          },
          { f: `${A} and ${B} can be mutually exclusive <b>only if</b> ${SUMAB} ≤ 1.`, note: '' },
          {
            f: 'Consistency test for supplied data',
            note: `reject if ${PAnB} < ${BONF}, or ${PAnB} > ${MINAB}, or ${PAuB} > 1.`,
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 1227–1232 ────────────────
  {
    n: 'C',
    title: 'Selection and Arrangement in the Same Problem',
    extra: true,
    kalam: 'The counting is Chapter 6 material you own; what is new is seeing that the two tools live in one multiplication.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01–03 and Additional topics A and B (Examples S1–S4, Results 6–9) between them cover this chapter properly, and the chapter is right to be short: NCERT Chapter 14 has only three main blocks, and everything past them (conditional probability, the multiplication theorem, independence, Bayes) is Class 12.',
      },
      {
        t: 'p',
        html: 'Two question shapes remain that the chapter’s own tools already answer and that neither the chapter nor Additional topics A and B demonstrate. Both are grounded in NCERT items the chapter passes over, and both sit strictly inside Class 11.',
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'NCERT source', 'Read after'],
        rows: [
          [
            'C',
            `Problems where one outcome is a <b>selection and an arrangement at once</b> (${nCr} and ${nPr} in the same count)`,
            'Misc. Examples 15, 17; Misc. Exercise Q9',
            'Topic 03’s Worked examples part; Additional topic A',
          ],
          [
            'D',
            `The <b>matching problem</b>: inclusion–exclusion past three events, where the count itself mixes ${nCk} with (${n} − ${k})!`,
            'Misc. Exercise Q6; Solved Example 16',
            'Topic 03’s Key procedures and logical framework part, Procedure C',
          ],
        ],
      },
      {
        t: 'p',
        html: `<b>A note on scope.</b> Nothing below uses conditional probability ${pr(`${A} ∣ ${B}`)}, independence, or the multiplication rule. Every count is a direct count of equally likely outcomes, and Additional topic D makes a point of showing an intersection whose probability is not the product of the two individual probabilities, which is exactly why inclusion–exclusion, and not multiplication, is the Class 11 tool. Geometric probability lies outside the syllabus for this chapter; the closing section explains why.`,
      },
      {
        t: 'p',
        html: 'Numbering continues from Additional topics A and B: Examples S5–S7, Results 10–11.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 03 counts committees and hands with ${nCr}; Additional topic A counts numbers and word-arrangements with ${nPr}. JEE Main’s favourite shape ${ESTIMATE} is neither; it is the one where a single outcome is both: a team is picked <b>and</b> given ranked roles, letters are <b>chosen</b> from a word and then <b>arranged</b>, books are <b>selected</b> and then <b>shelved</b>. The JEE Advanced probability syllabus names “computation of probability of events using permutations and combinations” in one breath, and this is what that phrase means in practice. CBSE Boards asks the two-letter and two-digit versions for 2–3 marks. The counting is Chapter 6 material you own; what is new is seeing that the two tools live in one multiplication.`,
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: 'This is Procedure A of Topic 03 and Procedure A-P of Additional topic A run together, one after the other.',
      },
      {
        t: 'proc',
        title: 'Procedure A-M: mixed selection-and-arrangement probability',
        steps: [
          '<b>Split one outcome into its two acts.</b> Ask which objects (a selection) and then in what order (an arrangement). An outcome of “a team of 4 chosen from 9 and given four distinct roles” is a pair: the set of four people, and the assignment of roles to them.',
          `<b>Multiply the two counts.</b><br>${nS} = ${nCr} (which) × ${r}! (in what order)<br>and when the chosen objects are not all distinct, the arrangement factor is<br>${REPR}<br>instead of ${r}!.`,
          `<b>Cross-check with the free identity ${nCr} × ${r}! = ${nPr}.</b> If your two-stage count of distinct objects does not reproduce ${nPr}, one of the two stages is wrong (with repeated objects, Step 5, the total is smaller). This is the cheapest sanity check in the topic.`,
          `<b>Count ${nE} in the same two acts.</b> Selection conditions (“exactly two girls”) are applied at stage one; position conditions (“the captain is a girl”, “the three maths books stand together”) are applied at stage two. Apply each at its own stage and multiply: do not try to handle both in one sweep.`,
          `<b>If the pool contains repeated objects, the selection splits into cases.</b> Choosing three letters from a word with doubled letters is not a single ${NC('8', '3')}: the case “all three different” and the case “one letter twice” have different arrangement factors (3! against ${fr('3!', '2!')}), so they must be counted separately and added.`,
          `<b>If repetition is allowed, the arrangement stage is ${pw(n, r)}, not ${nPr}.</b> Additional topic A’s Procedure A-P covered only the no-repetition case. “Four-digit numbers formed from five digits, repetition allowed” has 5<sup>4</sup> raw arrangements before any restriction: a different sample space from the ${NP('5', '4')} of the no-repetition version, and NCERT’s Miscellaneous Exercise Q9 asks you for both in one question.`,
        ],
      },
      {
        t: 'formula',
        kicker: 'Selection then arrangement',
        main: `${nS} = ${nCr} × ${r}! = ${nPr}`,
        legend: [`${n} = the number of distinct objects in the pool`, `${r} = the number chosen and then arranged`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>When the roles cancel.</b> If the event’s wording never mentions the positions (“the team has exactly two girls” says nothing about who is captain), then every arrangement of a favourable selection is favourable, the factor ${r}! appears in ${nE} and ${nS} alike, and it cancels. You may then drop to the pure-selection model and use ${nCr} throughout. <b>Recognising the cancellation is worth more marks than performing it</b>, because it tells you when the harder model was never needed. Example S5 shows both halves of this.`,
      },
      {
        t: 'p',
        html: '<b>State the experiment before you count.</b> “One of the distinct words that can be formed is chosen at random” and “three letter-tiles are drawn from a bag and laid in a row” are different experiments with different correct answers, because the second one does not make the distinct words equally likely. Example S6 is built on exactly this.',
      },
      { t: 'fig', id: 'm11-14-C-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S5: JEE Main Level',
        q: 'A team of 4 is chosen at random from 5 boys and 4 girls, and the four chosen are then assigned the four distinct roles of captain, vice-captain, secretary and treasurer. Find the probability that (a) the team contains exactly two girls, (b) the team contains exactly two girls <b>and</b> the captain is a girl.',
        steps: [
          `An outcome is a filled role-sheet: four named people in four named posts. Counting the two stages,<br>${nS} = ${NC('9', '4')} × 4! = 126 × 24 = 3024,<br>and the identity of Step 3 confirms it: ${NP('9', '4')} = 9 × 8 × 7 × 6 = 3024. Every filled role-sheet is equally likely.`,
          `<b>(a) Exactly two girls.</b> This is a pure stage-one condition. Choose 2 of the 4 girls and 2 of the 5 boys, then let the roles fall as they may:<br>${nE} = ${NC('4', '2')} × ${NC('5', '2')} (which) × 4! (in what order)<br>= (6 × 10) × 24 = 1440,<br><br>${P} = ${fr('1440', '3024')} = ${fr('10', '21')}.`,
          `<b>Second method (the roles cancel).</b> The condition never mentions a post, so the factor 4! sits in both ${nE} and ${nS} and cancels. Drop to the selection-only model:<br>${P} = ${fr(`${NC('4', '2')} × ${NC('5', '2')}`, NC('9', '4'))} = ${fr('60', '126')} = ${fr('10', '21')}. ✓<br><br>Two sample spaces, one answer: the consistency principle of Step 5 (in Additional topic A) doing its job.`,
          `<b>(b) Exactly two girls and a girl as captain.</b> Now there is a stage-two condition as well, so handle the stages in order. Stage one is unchanged: ${NC('4', '2')} × ${NC('5', '2')} = 60 favourable teams. Stage two: of the four team members, choose which of the <b>two girls</b> takes the captaincy (2 ways), then fill the remaining three posts with the remaining three members (3! = 6 ways):<br>${nE} = 60 × 2 × 6 = 720,<br>${P} = ${fr('720', '3024')} = ${fr('5', '21')}.`,
          `<b>Sanity check by symmetry.</b> Every favourable team has 4 members of whom 2 are girls, and the 4! role-sheets for that team put each member in the captain’s chair equally often. So exactly half of part (a)’s 1440 sheets have a girl as captain, and<br>${fr('1', '2')} × ${fr('10', '21')} = ${fr('5', '21')}. ✓<br><br>This is a counting argument about 4! orderings, not a multiplication of two probabilities. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'S6: JEE Main Speed Trap',
        q: 'All the <b>distinct</b> three-letter arrangements (meaningful or not) that can be formed from the letters of the word MATHEMATICS are written out, and one of them is chosen at random. Find the probability that its three letters are all different.',
        steps: [
          `MATHEMATICS has 11 letters over 8 distinct symbols {${I('M')}, ${A}, ${I('T')}, ${I('H')}, ${E}, ${I('I')}, ${Cv}, ${S}}, of which ${I('M')}, ${A} and ${I('T')} each occur twice and the other five occur once. No letter occurs three times. By Step 5, the sample space splits into cases.`,
          `<b>All three letters different.</b> Choose 3 of the 8 distinct symbols and arrange them:<br>${NC('8', '3')} × 3! = 56 × 6 = 336.`,
          `<b>Exactly two letters the same.</b> The doubled letter must be ${I('M')}, ${A} or ${I('T')} (3 choices); the third letter is any of the remaining 7 symbols; the arrangement factor is ${fr('3!', '2!')} = 3 because two of the three letters are identical:<br>3 × 7 × 3 = 63.`,
          '<b>All three the same.</b> Impossible: no symbol has three copies.',
          `${nS} = 336 + 63 = 399,<br>${nE} = 336,<br>${P} = ${fr('336', '399')} = ${fr('16', '19')}.`,
          `<b>The trap.</b> The seductive move is to write ${nS} = ${NP('11', '3')} = 990 (“eleven letters, pick three in order”) while leaving ${nE} = 336, giving<br>${fr('336', '990')} = ${fr('56', '165')}.<br><br>That number answers no question at all. It is Additional topic A’s mixed-currency error in a new costume: 990 counts <b>tile-sequences</b> (the two ${I('M')} tiles treated as different objects) while 336 counts <b>words</b> (the two ${I('M')} tiles treated as the same symbol).`,
          `<b>Both currencies are legal: they just describe different experiments.</b> Suppose instead you put the eleven letter-tiles in a bag, draw three, and lay them in a row. Now ${nS} = ${NP('11', '3')} = 990 equally likely tile-sequences, and you must recount ${nE} in tiles too: pick three distinct symbols and one tile for each, then arrange. Splitting on how many of the three symbols come from the doubled set {${I('M')}, ${A}, ${I('T')}}:<br>(${NC('5', '3')} · 1) + (3 · ${NC('5', '2')} · 2)<br>+ (${NC('3', '2')} · 5 · 4) + (1 · 8)<br>= 10 + 60 + 60 + 8 = 138,<br>${nE} = 138 × 3! = 828,<br>${P} = ${fr('828', '990')} = ${fr('46', '55')}.`,
          `And ${fr('16', '19')} = 0.8421… while ${fr('46', '55')} = 0.8363…: genuinely different numbers, both right for their own experiment. The reason they differ is worth holding onto: in the bag-of-tiles experiment the 399 words are <b>not</b> equally likely. The word ${I('MAT')} arises from 2 × 2 × 2 = 8 tile-sequences, the word ${I('MAM')} from only 4, and the word ${I('HEI')} from just 1. Whenever repeated objects are physically distinct, “pick a word at random” and “draw the objects at random” are two different experiments, and the question’s wording, not your preference, decides which one you are in. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] All the distinct three-letter arrangements formable from the letters of the word LEVEL are listed and one is chosen at random. Find the probability that its three letters are all different.',
            a: `LEVEL has 5 letters over 3 symbols, ${I('L')} and ${E} doubled. All different: 3! = 6. One letter doubled: 2 × 2 × ${fr('3!', '2!')} = 12. So ${nS} = 18, ${nE} = 6,<br>${P} = ${fr('6', '18')} = ${fr('1', '3')}.`,
          },
          {
            q: '[JEE Main] From 6 men and 4 women, three people are chosen and assigned the posts of chairperson, secretary and treasurer. Find the probability that the chairperson is a woman and the panel contains exactly one woman.',
            a: `${nS} = ${NC('10', '3')} × 3! = ${NP('10', '3')} = 720. Choose the woman chairperson (4 ways), then fill the other two posts from the 6 men in ${NP('6', '2')} = 30 ways: ${nE} = 120,<br>${P} = ${fr('120', '720')} = ${fr('1', '6')}.`,
          },
          {
            q: '[JEE Main] From 4 mathematics books and 3 physics books (all different), five are chosen at random and arranged in a row on a shelf. Find the probability that exactly three mathematics books are chosen and that they stand together.',
            a: `${nS} = ${NC('7', '5')} × 5! = ${NP('7', '5')} = 2520. Stage one: ${NC('4', '3')} × ${NC('3', '2')} = 4 × 3 = 12 selections. Stage two: glue the three mathematics books into one block, so you arrange 3 objects (block plus two physics books) in 3! = 6 ways, and the three different mathematics books inside the block in 3! = 6 ways; here the block <b>does</b> carry an internal 3!, because these three objects are distinct, unlike the identical S’s of Additional topic A’s Example S2(b). ${nE} = 12 × 6 × 6 = 432,<br>${P} = ${fr('432', '2520')} = ${fr('6', '35')}.`,
          },
          {
            q: '[JEE Main: NCERT Miscellaneous Exercise] Four-digit numbers greater than 5000 are formed at random from the digits 0, 1, 3, 5, 7. Find the probability that such a number is divisible by 5 when (i) repetition of digits is allowed, (ii) repetition is not allowed.',
            a: `(i) The leading digit must be 5 or 7, giving 2 × 5<sup>3</sup> = 250 numbers, but 5000 itself is not greater than 5000, so ${nS} = 249. Divisible by 5 means the units digit is 0 or 5: 2 × 5 × 5 × 2 = 100, again less the number 5000, so ${nE} = 99 and<br>${P} = ${fr('99', '249')} = ${fr('33', '83')}.<br><br>(ii) ${nS} = 2 × ${NP('4', '3')} = 48, and no repetition means 5000 never arises. Units digit 0: leading digit 5 or 7 and the middle two from the remaining three digits, 2 × ${NP('3', '2')} = 12. Units digit 5: the leading digit is forced to 7, giving 1 × ${NP('3', '2')} = 6. So ${nE} = 18 and<br>${P} = ${fr('18', '48')} = ${fr('3', '8')}.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          '<b>Do not apply a position condition at the selection stage.</b> “The captain is a girl” is not a statement about which four people were picked. Pick first, then place; the two conditions multiply because they act on different stages of one outcome, not because of any independence argument.',
          `<b>Check whether the roles cancel before you build the bigger sample space.</b> If the event never names a position, the arrangement factor divides out and ${nCr} alone suffices. Building the ${nPr} model anyway is not wrong, only slower, but forgetting the factor in ${nE} while keeping it in ${nS} is wrong.`,
          `<b>A pool with repeated objects never gives a single ${nCr}.</b> Split into cases by how many repeats you took, because each case carries its own ${fr(`${r}!`, `${sb(p, '1')}! ⋯`)}.`,
          `<b>A block of distinct objects carries an internal ${r}!; a block of identical objects does not.</b> Additional topic A’s Example S2(b) glued four identical S’s and multiplied by 1; Practice 3 above glues three different books and multiplies by 3!. The rule is about the objects, not the gluing.`,
          `<b>Repetition allowed changes the sample space, not just the answer.</b> 5<sup>4</sup> and ${NP('5', '4')} are different denominators; read the question for the word “repeated”.`,
          '<b>Read the experiment, not the objects.</b> “A word is chosen from the list” and “the tiles are drawn from a bag” need different denominators, as Example S6 shows.',
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 1232–1237 ────────────────
  {
    n: 'D',
    title: 'The Matching Problem, and Inclusion–Exclusion Past Three Events',
    extra: true,
    kalam: 'Intersections get counted, never multiplied.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 03’s Procedure C stops at three events, and NCERT’s Solved Example 16 proves exactly that case. But NCERT’s own Miscellaneous Exercise Q6 (three letters into three addressed envelopes, find ${pr('at least one is correct')}) is the first term of a family that JEE Main asks with four or five letters and JEE Advanced asks with ${n}, or asks for exactly ${r} correct. CBSE Boards asks the ${N3} case verbatim. The whole family needs nothing beyond the addition theorem and Chapter 6 counting, which is why it belongs in Class 11, and it is the cleanest problem in the chapter in which ${nCk} and a factorial appear inside a single count.`,
      },

      { t: 'part', title: 'The method' },
      { t: 'p', html: `<b>Result 10: Inclusion–exclusion for ${n} events.</b> For any events ${A1}, ${A2}, …, ${An},` },
      {
        t: 'formula',
        kicker: `Inclusion–exclusion for ${n} events`,
        main: `${pr(`⋃<sub>${i}=1</sub><sup>${n}</sup> ${Ai}`)}<br>= ∑<sub>${i}</sub> ${pr(Ai)} − ∑<sub>${i} < ${j}</sub> ${pr(`${Ai}${NB}∩${NB}${Aj}`)}<br>+ ∑<sub>${i} < ${j} < ${k}</sub> ${pr(`${Ai}${NB}∩${NB}${Aj}${NB}∩${NB}${Ak}`)} − ⋯<br>+ ${NEG(`${n}+1`)} ${pr(`${A1}${NB}∩${NB}⋯${NB}∩${NB}${An}`)}`,
        legend: [`${A1}, …, ${An} = any events`, `${n} = the number of events`, `${i}, ${j}, ${k} = indices from 1 to ${n}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof (induction on ${n}, from the two-event rule alone).</b> The case ${eq(n, '2')} is the general addition rule of Topic 02, Result 4. Assume the formula for ${n} − 1 events and write ${B} = ${A1}${NB}∪${NB}⋯${NB}∪${NB}${As(`${n}−1`)}. The two-event rule gives<br>${pr(`${B}${NB}∪${NB}${An}`)}<br>= ${pr(B)} + ${pr(An)} − ${pr(`${B}${NB}∩${NB}${An}`)}.<br>By distributivity, ${B}${NB}∩${NB}${An} = ⋃<sub>${i}=1</sub><sup>${n}−1</sup> (${Ai}${NB}∩${NB}${An}), which is a union of ${n} − 1 events. Apply the induction hypothesis to ${pr(B)} and to ${pr(`${B}${NB}∩${NB}${An}`)} separately and collect terms by size: every ${k}-fold intersection appears with sign ${NEG(`${k}+1`)}. This is precisely the route NCERT’s Solved Example 16 takes for ${N3}, run one step further. ■`,
      },
      {
        t: 'p',
        html: 'Nothing here is new machinery: it is the addition rule applied repeatedly, so it rests on the three axioms exactly as Additional topic B’s Results 6–9 do.',
      },
      {
        t: 'p',
        html: `<b>Result 11: The matching probability.</b> Suppose ${n} distinct letters are placed at random into ${n} correspondingly addressed envelopes, one letter per envelope. Then`,
      },
      {
        t: 'formula',
        kicker: 'The matching probability',
        main: `${pr('at least one match')}<br>= ${SUM(`${k}=1`, n)} ${fr(NEG(`${k}+1`), `${k}!`)}<br>= 1 − ${F('2')} + ${F('3')} − ⋯ + ${fr(NEG(`${n}+1`), `${n}!`)}<br>${pr('no match')}<br>= ${SUM(`${k}=0`, n)} ${fr(NEG(k), `${k}!`)}`,
        legend: [
          `${n} = the number of letters (and of envelopes)`,
          'a match = a letter in its own envelope',
          `${k} = the summation index (the number of letters required correct)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> An outcome is one of the ${n}! equally likely arrangements, so ${nS} = ${n}!. Let ${Ai} be the event “letter ${i} lands in envelope ${i}”. Fix any ${k} of the indices. Requiring those ${k} letters to be correct pins down ${k} envelopes and leaves the other ${n} − ${k} letters free to be arranged in (${n} − ${k})! ways, so<br>${pr(`${As(`${i}₁`)}${NB}∩${NB}⋯${NB}∩${NB}${As(`${i}ₖ`)}`)} = ${fr(`(${n} − ${k})!`, `${n}!`)}.<br><br>There are ${nCk} such choices of indices, so the ${k}-th sum in Result 10 is<br>${nCk} · ${fr(`(${n} − ${k})!`, `${n}!`)}<br><br>= ${fr(`${n}!`, `${k}! (${n} − ${k})!`)} · ${fr(`(${n} − ${k})!`, `${n}!`)}<br><br>= ${F(k)},<br><br>and Result 10 gives the stated alternating sum. The second line is its complement. ■`,
      },
      {
        t: 'p',
        html: `<b>This is the mixing of Additional topic C in its purest form:</b> a combination ${nCk} choosing which letters are correct, multiplied by a permutation count (${n} − ${k})! arranging the rest, and the whole thing sitting over a permutation sample space ${n}!. Notice how cleanly the two cancel into ${F(k)}: that cancellation is the reason this problem has a memorable answer at all.`,
      },
      {
        t: 'p',
        html: `<b>Attend to this: it is why we are not in Class 12.</b> With ${N4} you have<br>${pr(A1)} = ${fr('3!', '4!')} = ${fr('1', '4')} and ${pr(A2)} = ${fr('1', '4')}, but<br><br>${pr(`${A1}${NB}∩${NB}${A2}`)} = ${fr('2!', '4!')} = ${fr('1', '12')},<br><br>while ${pr(A1)}${NB}${pr(A2)} = ${fr('1', '16')}.<br><br>The events are <b>not</b> independent, and ${fr('1', '12')} ≠ ${fr('1', '16')} would make any multiplication shortcut give a wrong answer. Inclusion–exclusion never asks for the product: it asks you to count the intersection, which you just did. This is Additional topic A’s Example S1(c) lesson in a second setting: <b>count the joint event, do not multiply the probabilities.</b>`,
      },
      { t: 'fig', id: 'm11-14-D-d1' },

      { t: 'part', title: 'Worked example' },
      {
        t: 'ex',
        tag: 'S7: JEE Advanced Level',
        q: 'Four letters are written and four envelopes are correspondingly addressed. The letters are inserted into the envelopes at random, one letter per envelope. Find (a) the probability that at least one letter reaches its correct envelope, (b) the probability that no letter does, and (c) the answer to the same question with three letters, so as to recover the NCERT case.',
        steps: [
          `<b>(a)</b> With ${nS} = 4! = 24 equally likely insertions, apply Result 10 to ${A1}, ${A2}, ${As('3')}, ${As('4')}, computing each sum by counting rather than multiplying.`,
          `(${k}; number of ${k}-subsets; ${P} of each ${k}-fold intersection; signed contribution ${fr(`${NC('4', k)}(4 − ${k})!`, '24')}):<br><br>• 1: ${NC('4', '1')} = 4; ${fr('3!', '4!')} = ${fr('6', '24')}; + ${fr('24', '24')}<br><br>• 2: ${NC('4', '2')} = 6; ${fr('2!', '4!')} = ${fr('2', '24')}; − ${fr('12', '24')}<br><br>• 3: ${NC('4', '3')} = 4; ${fr('1!', '4!')} = ${fr('1', '24')}; + ${fr('4', '24')}<br><br>• 4: ${NC('4', '4')} = 1; ${fr('0!', '4!')} = ${fr('1', '24')}; − ${fr('1', '24')}`,
          `${pr('at least one match')}<br>= ${fr('24 − 12 + 4 − 1', '24')} = ${fr('15', '24')} = ${fr('5', '8')}.<br><br>Equivalently, by Result 11,<br>1 − ${F('2')} + ${F('3')} − ${F('4')} = ${fr('5', '8')}.`,
          `<b>(b)</b> By the complement law (Topic 02, Result 2),<br>${pr('no match')} = 1 − ${fr('5', '8')} = ${fr('3', '8')},<br>so exactly 9 of the 24 arrangements are match-free. A direct listing confirms 9; these are the derangements of four objects, and ${D('4')} = 9.`,
          `<b>(c)</b> For ${N3}:<br>1 − ${F('2')} + ${F('3')} = 1 − ${fr('1', '2')} + ${fr('1', '6')} = ${fr('2', '3')},<br><br>which is NCERT’s Miscellaneous Exercise Q6. Checking by hand, ${nS} = 3! = 6 and the match-free arrangements are just the two cyclic shifts, so<br>${pr('at least one')} = 1 − ${fr('2', '6')} = ${fr('2', '3')}. ✓`,
          `<b>A remark worth carrying.</b> The answers for ${n} = 3, 4, 5 are<br>${fr('2', '3')} = 0.667, ${fr('5', '8')} = 0.625, ${fr('19', '30')} = 0.633:<br><br>they barely move. The alternating series of Result 11 converges to ${EINV} ≈ 0.632 almost immediately, so with 100 letters the probability that at least one reaches the right envelope is still about 0.632. Adding more letters does not help. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE: NCERT Miscellaneous Exercise] Three letters are dictated to three persons and an envelope is addressed to each of them. The letters are inserted into the envelopes at random, one per envelope. Find the probability that at least one letter is in its proper envelope.',
            a: `1 − ${F('2')} + ${F('3')} = ${fr('2', '3')}.`,
          },
          {
            q: '[JEE Main] Five letters are placed at random into five correspondingly addressed envelopes, one per envelope. Find (i) the probability that no letter is in its correct envelope, (ii) the probability that exactly one letter is.',
            a: `(i) ${SUM(`${k}=0`, '5')} ${fr(NEG(k), `${k}!`)}<br>= 1 − 1 + ${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')} − ${fr('1', '120')}<br><br>= ${fr('44', '120')} = ${fr('11', '30')},<br><br>so ${D('5')} = 44.<br>(ii) Choose the one correct letter in ${NC('5', '1')} = 5 ways and derange the other four in ${D('4')} = 9 ways:<br>${fr('5 × 9', '120')} = ${fr('45', '120')} = ${fr('3', '8')}.`,
          },
          {
            q: `[JEE Advanced] Show that the number of arrangements of ${n} letters into ${n} addressed envelopes with <b>exactly</b> ${r} correct is ${nCr}${NB}${D(`${n}−${r}`)}, where ${D(m)} is the number of match-free arrangements of ${m} letters, and use it to find ${pr('exactly two correct')} for ${eq(n, '5')}. Verify that your probabilities over ${r} = 0, 1, …, 5 sum to 1.`,
            a: `Choose which ${r} letters are correct in ${nCr} ways; the remaining ${n} − ${r} must <b>all</b> be wrong, which is ${D(`${n}−${r}`)} ways: the word “exactly” is what forces the derangement factor, and omitting it (writing ${nCr}(${n} − ${r})!) is the standard error, since that counts the arrangements with at least ${r} correct, and counts those with more than ${r} correct several times over. For ${eq(n, '5')}, ${eq(r, '2')}: ${NC('5', '2')}${NB}${D('3')} = 10 × 2 = 20, so<br>${P} = ${fr('20', '120')} = ${fr('1', '6')}.<br><br>The full distribution is 44, 45, 20, 10, 0, 1 over 120 (note the 0 at ${eq(r, '4')}, since four correct forces the fifth) and 44 + 45 + 20 + 10 + 0 + 1 = 120. ✓`,
          },
          {
            q: '[JEE Main] Using Result 10 with four events, find the probability that a number chosen at random from 1 to 1000 is divisible by at least one of 2, 3, 5 or 7.',
            a: `With ${A}, ${B}, ${Cv}, ${I('D')} the events “divisible by 2, 3, 5, 7”, the counts are 500 + 333 + 200 + 142 = 1175 singles; pairs 166 + 100 + 71 + 66 + 47 + 28 = 478 (divisors 6, 10, 14, 15, 21, 35); triples 33 + 23 + 14 + 9 = 79 (divisors 30, 42, 70, 105); quadruple 4 (divisor 210). So ${nE} = 1175 − 478 + 79 − 4 = 772 and<br>${P} = ${fr('772', '1000')} = ${fr('193', '250')}.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“At least one” here does not yield to a single complement count.</b> Topic 03’s Procedure B works when “none” is one clean case. Here “no letter correct” is itself the hard count, so inclusion–exclusion is what produces it, and then the complement gives you the other answer for free. Know which direction is the cheap one.',
          `<b>Do not multiply ${pr(Ai)} together.</b> ${pr(`${A1}${NB}∩${NB}${A2}`)} = ${fr('1', '12')}, not ${fr('1', '16')}. The intersections in Result 10 must be <b>counted</b>.`,
          `<b>Caution: the “chance of none” shortcut needs independent trials.</b> The tempting product form ${pr('at least one')} = 1 − (chance of none)<sup>number of trials</sup> is the independence formula, which belongs to Class 12, and it holds only when the trials are independent: repeated tosses of a coin, repeated throws of a die. It is false for dependent situations; the matching problem is a counterexample sitting inside NCERT’s own exercise set. The two places the chapter applies the shortcut are fine, but only because they are really counts, not products (Topic 03’s closing Pro-Tip states the shortcut as just such a count): Topic 03’s fourth MCQ gets ${pr('no six on two dice')} = ${fr('25', '36')} because 25 of the 36 equally likely ordered pairs avoid a six;<br>its third MCQ gets ${pr('no head')} = ${fr('1', '8')} because one of the 8 equally likely triples is ${I('TTT')}. <b>Treat the shortcut as a way of counting equally likely outcomes in a product sample space, never as a licence to multiply probabilities of events.</b> Additional topic A’s rule applies here too: never convert an and condition into a product of probabilities.`,
          `<b>“Exactly ${r}” needs a derangement, “at least ${r}” needs a factorial.</b> ${nCr}(${n} − ${r})! counts arrangements with at least ${r} correct, with multiplicity; ${nCr}${NB}${D(`${n}−${r}`)} counts exactly ${r}. Mixing them is the standard slip in Practice 3.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-tip: the sums shrink fast.</b> In Result 11 the ${k}-th term is ${F(k)}, so by ${eq(k, '5')} you are adding ${fr('1', '120')}. For an MCQ, the first five terms already pin the answer to within 1% of ${EINV} ≈ 0.632 (the first three give 0.667, within about 6%), which is usually enough to eliminate three options.`,
      },

      { t: 'part', title: 'Cheat sheet additions' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Mixed selection-and-arrangement',
            note: `${nS} = ${nCr} × ${r}! = ${nPr}. Apply selection conditions at stage one, position conditions at stage two, and multiply. With repetition allowed the arrangement stage is ${pw(n, r)} instead.`,
          },
          {
            f: `<b>Roles cancel when the event ignores them.</b> “Exactly two girls” needs only ${fr(`${NC('4', '2')}${NB}${NC('5', '2')}`, NC('9', '4'))}; “and the captain is a girl” does not.`,
            note: '',
          },
          {
            f: `<b>Pool with repeats ⇒ split the selection into cases</b>, each with its own ${REPR}. MATHEMATICS three-letter words: 336 + 63 = 399, not ${NC('8', '3')} and not ${NP('11', '3')}.`,
            note: '',
          },
          { f: 'Blocks', note: `distinct objects glued together carry an internal ${r}!; identical objects carry 1.` },
          {
            f: `<b>“Word chosen at random” ≠ “tiles drawn at random”</b> when letters repeat: different experiments, different denominators, different correct answers (${fr('16', '19')} against ${fr('46', '55')} for Example S6).`,
            note: '',
          },
          {
            f: `Inclusion–exclusion, ${n} events (Result 10)`,
            note: `alternate the sums of ${k}-fold intersections with sign ${NEG(`${k}+1`)}. Provable from the two-event addition rule by induction; no new axioms.`,
          },
          {
            f: 'Matching problem (Result 11)',
            note: `${pr('at least one match')} = ${SUM(`${k}=1`, n)} ${fr(NEG(`${k}+1`), `${k}!`)};<br><br>${pr('no match')} = ${SUM(`${k}=0`, n)} ${fr(NEG(k), `${k}!`)}.<br><br>Memorise ${D('2')} = 1, ${D('3')} = 2, ${D('4')} = 9, ${D('5')} = 44. Exactly ${r} correct: ${fr(`${nCr}${NB}${D(`${n}−${r}`)}`, `${n}!`)}. The limit is ${EINV} ≈ 0.632.`,
          },
          {
            f: `<b>Intersections get counted, never multiplied.</b> ${pr(`${A1}${NB}∩${NB}${A2}`)} = ${fr('2!', '4!')} = ${fr('1', '12')} ≠ ${fr('1', '16')} in the four-letter matching problem.`,
            note: '',
          },
        ],
        aids: [],
      },

      { t: 'part', title: 'Beyond the syllabus: geometric probability' },
      {
        t: 'p',
        html: '<b>Geometric probability</b> (“a point is chosen at random inside a square / on a segment; find the probability that …”, answered by a ratio of lengths, areas or volumes) is deliberately not treated in this chapter, for three reasons.',
      },
      {
        t: 'p',
        html: '1. <b>It has no axiom to stand on in this chapter.</b> Topic 02 states Kolmogorov’s axioms in their finite-sample-space form, and says so explicitly in its “Limiting conditions”. A length-ratio or area-ratio probability is a statement about an uncountably infinite sample space in which every individual outcome has probability zero, which the additivity axiom as given here cannot reach. Presenting it would mean asserting a measure the book has not built.',
      },
      {
        t: 'p',
        html: `2. <b>NCERT does not have it, at either level.</b> Class 11 Chapter 14 goes no further than the coin-tossed-until-a-head sample space {${I('H')}, ${I('TH')}, ${I('TTH')}, …}, which is infinite but discrete, and it never assigns probabilities to it. Its Introduction names infinite sample spaces as a case the classical ratio “cannot be applied to”, and then never returns. The Class 12 chapter is conditional probability, Bayes and distributions, not continuous sample spaces.`,
      },
      {
        t: 'p',
        html: '3. <b>Neither examination syllabus lists it.</b> The JEE Advanced probability syllabus lists, among its items, the addition and multiplication rules, conditional probability, Bayes’ theorem, independence of events, and “computation of probability of events using permutations and combinations”: that final clause is what Additional topics A, C and D serve, and there is no continuous or measure-theoretic clause anywhere in it. The JEE Main list has no such clause either. Geometric probability is a genuine topic, but at this level it is enrichment rather than examinable content.',
      },
      {
        t: 'p',
        html: '<b>Conditional probability, independence, the multiplication theorem, Bayes’ theorem, random variables and their distributions, binomial trials (in older syllabi)</b>: Class 12, as Additional topic A also notes and as Topic 03’s closing “Looking ahead” note signposts. Additional topic D strengthens the boundary rather than crossing it, by exhibiting a natural pair of events whose intersection probability is not the product.',
      },
      {
        t: 'p',
        html: '<b>Bertrand-style paradoxes and the ambiguity of “at random” over continuous sets</b>: follow geometric probability out, for the same reason. The finite analogue of that lesson is already taught, and taught honestly, by Example S6’s two experiments.',
      },
    ],
  },
];
