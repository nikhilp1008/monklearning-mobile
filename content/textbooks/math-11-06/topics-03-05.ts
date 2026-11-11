import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 03–05, pp. 513–536 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopics 03
 * Combinations (pp. 513–521), 04 Total Selections, Grouping & Distribution
 * (Stars and Bars) (pp. 522–529) and 05 Counting Applications & Advanced Tools
 * (pp. 530–536). The supplement starts on p. 537.
 * Each topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figure 6.6 (caption p. 515, drawn p. 516) stands after the heading "3.4:
 * Procedure: selection under constraints" in Topic 03; Figures 6.7 and 6.8
 * (captions p. 524, drawn p. 525) after the 3.1 lead-in and the 3.4 heading in
 * Topic 04; Figure 6.9 (caption p. 532, drawn p. 533) after 3.1 in Topic 05.
 * No unnumbered drawings. ⁿCᵣ and ⁿPᵣ with an italic C and P, as the page
 * sets them. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const C = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const P = (a: string, b: string) => `<sup>${a}</sup><i>P</i><sub>${b}</sub>`;

const n = '<i>n</i>';
const r = '<i>r</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const g = '<i>g</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const d = '<i>d</i>';
const nCr = C(n, r);
const nPr = P(n, r);
const nCnr = C(n, '<i>n</i>−<i>r</i>');
const nCr1 = C(n, '<i>r</i>−1');
const n1Cr = C('<i>n</i>+1', r);
const CFORM = fr(`${n}!`, `${r}! (${n} − ${r})!`);
const xi = '<i>x</i><sub><i>i</i></sub>';
const yi = '<i>y</i><sub><i>i</i></sub>';
const mi = '<i>m</i><sub><i>i</i></sub>';
const ai = '<i>a</i><sub><i>i</i></sub>';
const pi = '<i>p</i><sub><i>i</i></sub>';
const sb = (l: string, s: string) => `<i>${l}</i><sub>${s}</sub>`;
const Dn = sb('D', '<i>n</i>');
const NREP = C('<i>n</i>+<i>r</i>−1', r);
const NREP1 = C('<i>n</i>+<i>r</i>−1', '<i>n</i>−1');
const NONNEG = C('<i>n</i>+<i>k</i>−1', '<i>k</i>−1');
const POS = C('<i>n</i>−1', '<i>k</i>−1');
const DIVIDE = fr(`${n}!`, `∏ ${mi}!`);
const NPRIME = `<i>N</i> = <i>p</i><sub>1</sub><sup><i>a</i>₁</sup> <i>p</i><sub>2</sub><sup><i>a</i>₂</sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>a</i>ₖ</sup>`;
const SUMDIV = `∏<sub><i>i</i>=1</sub><sup><i>k</i></sup> ${fr(`${pi}<sup><i>a</i>ᵢ+1</sup> − 1`, `${pi} − 1`)}`;
const REPUNIT = fr(`10<sup><i>n</i></sup> − 1`, '9');
const FLOOR = (a: string, b: string) => `⌊${fr(a, b)}⌋`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 513–521 ────────────────
  {
    n: '03',
    title: 'Combinations',
    kalam: 'Think about it this way… a combination is simply a permutation with the ordering stripped away.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The chapter’s payoff and a true workhorse. JEE Main and CBSE Boards lean heavily on committee/team-selection problems and the ${nCr} properties ${ESTIMATE}; JEE Advanced layers constraints (“at least,” “at most,” grouping). Beyond this chapter, ${nCr} is the backbone of the Binomial Theorem and of a great many Probability problems, so the time you invest here pays dividends for the rest of the syllabus.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 02 you arranged objects, and the watchword was order matters. A <b>combination</b> is the mirror image: you only <b>select</b> a group of objects, and <b>order is irrelevant</b>. The watchword flips to order doesn’t matter.',
      },
      {
        t: 'p',
        html: 'Picture the selectors of a cricket squad choosing 11 players from a pool of 16. Once the eleven names are on the team sheet, it makes no difference whether a selector wrote them top-to-bottom or in any other sequence: the team is the same set of eleven people. Nobody says “this is a different team because I listed the wicketkeeper first.” That indifference to order is the entire idea of a combination.',
      },
      {
        t: 'p',
        html: 'Contrast it sharply with a permutation. If, instead, the selectors had to name a captain, a vice-captain, and a wicketkeeper (three distinct roles), then order would suddenly matter, and we’d be back in permutation territory. <b>Selection alone → combination. Selection plus roles/positions/order → permutation.</b> Keep repeating the test: if I shuffle the chosen objects, is it a new outcome? If no, it’s a combination.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> a combination is simply a permutation with the ordering stripped away. Recall from Topic 02 the bridge we derived: ${nPr} = ${r}! · ${nCr}. Read it backwards. To list arrangements (${nPr}), you first choose the ${r} objects (${nCr} ways) and then order them (${r}! ways). So combinations are fewer than permutations by exactly a factor of ${r}!: the number of ways the chosen group can be internally rearranged. That single observation hands us the combination formula almost for free, as we’ll see in the CBSE board proofs / key procedures part.`,
      },
      {
        t: 'p',
        html: `Make the collapse concrete with a tiny case. From four objects <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>, the selections of size 2 are: <i>AB</i>, <i>AC</i>, <i>AD</i>, <i>BC</i>, <i>BD</i>, <i>CD</i>, exactly 6 of them. Notice <i>AB</i> and <i>BA</i> are not listed twice; as a selection they are the same pair. The corresponding permutations would be twice as many (12 = 6 × 2!), because each pair can be ordered in 2! ways. That factor of 2! is the bookkeeping that separates ${C('4', '2')} from ${P('4', '2')}.`,
      },
      {
        t: 'p',
        html: `This idea powers a huge range of real questions: handshakes in a room (each handshake is a pair, order-free), chords joining points on a circle (each chord is a pair of points), forming committees, dealing hands of cards, choosing toppings for a pizza. As a quick taste: if 9 people at a gathering each shake hands once with every other person, the number of handshakes is just the number of pairs, ${C('9', '2')} = 36, not ${P('9', '2')} = 72, because “<i>A</i> shakes with <i>B</i>” and “<i>B</i> shakes with <i>A</i>” are the same handshake. The factor-of-2 gap between 72 and 36 is precisely the order you must strip away.`,
      },
      {
        t: 'p',
        html: `<b>Conditions & Assumptions (when to be careful):</b><br>• ${nCr} assumes the ${n} objects are <b>distinct</b> and you are selecting <b>without repetition</b>, with order ignored.<br>• The count is valid for 0 ≤ ${r} ≤ ${n}; if ${r} > ${n}, then ${nCr} = 0 (you cannot choose more objects than exist).<br>• The instant the problem attaches positions, ranks, or sequence to the chosen objects, stop: it has become a permutation, and you owe an extra factor of ${r}!.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Combination of <i>n</i> distinct objects, taken <i>r</i> at a time',
        main: `${nCr} = ${CFORM} = ${fr(nPr, `${r}!`)}, 0 ≤ ${r} ≤ ${n}.`,
        legend: [
          `${n} = total number of distinct available objects`,
          `${r} = size of the group being selected`,
          `${nCr} = a pure count (dimensionless)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${n}: total number of distinct available objects.<br>• ${r}: size of the group being selected.<br>• ${nCr}: a pure count (dimensionless); also written <i>C</i>(${n}, ${r}) or <binom><num>${n}</num><den>${r}</den></binom>.`,
      },
      {
        t: 'formula',
        kicker: 'Core properties (all examinable)',
        main: [
          `${C(n, '0')} = ${C(n, n)} = 1, ${C(n, '1')} = ${n}`,
          `${nCr} = ${nCnr} (symmetry: choosing ${r} to keep = choosing ${n} − ${r} to reject)`,
          `${nCr} + ${nCr1} = ${n1Cr} (Pascal’s rule, 1 ≤ ${r} ≤ ${n})`,
          `if ${nCr} = ${C(n, '<i>s</i>')} (0 ≤ ${r}, <i>s</i> ≤ ${n}), then ${r} = <i>s</i> or ${r} + <i>s</i> = ${n}.`,
        ].join('<br>'),
        legend: [`${n} = total number of distinct available objects`, `${r}, <i>s</i> = sizes of the groups being selected`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Conditions of validity & sanity-checks:</b><br>• ${nCr} is always a <b>positive integer</b> for 0 ≤ ${r} ≤ ${n}; a fractional “combination count” means you’ve slipped.<br>• ${nCr} = 0 whenever ${r} > ${n}.<br>• Symmetry shortcut: to compute ${C('12', '10')}, use ${C('12', '10')} = ${C('12', '2')} = 66; never grind the large factorial.<br>• Order check (the master sanity test): if the answer should not change when the chosen objects are reshuffled, you want ${nCr}, not ${nPr}.`,
      },

      { t: 'part', title: 'CBSE board proofs / key procedures' },
      {
        t: 'p',
        html: `<b>3.1: Deriving ${nCr} (reusing the Topic 02 bridge).</b> We do <b>not</b> re-derive the bridge ${nPr} = ${r}! · ${nCr}; that was established in Topic 02’s CBSE board proofs / key procedures part, item 3.5, by the “select then order” argument. We simply use it.`,
      },
      {
        t: 'p',
        html: `To arrange ${r} objects out of ${n} in order is a two-stage job: first <b>select</b> the ${r} objects (${nCr} ways), then <b>order</b> them (${r}! ways). Hence<br>${nPr} = ${nCr} × ${r}!.<br>Solving for ${nCr} and substituting ${nPr} = ${fr(`${n}!`, `(${n} − ${r})!`)} (also from Topic 02):<br>${nCr} = ${fr(nPr, `${r}!`)} = ${CFORM}. ■<br>So the whole combination formula is just the permutation formula with the internal orderings divided out.`,
      },
      {
        t: 'p',
        html: `<b>3.2: Proving the symmetry ${nCr} = ${nCnr}.</b> <b>Combinatorial (bijection) proof, the elegant one:</b> every time you <b>choose</b> a group of ${r} objects to keep, you simultaneously <b>leave behind</b> a group of ${n} − ${r} objects. Choosing the keepers and choosing the rejects are two descriptions of the same act, so they must be equinumerous:<br>${nCr} = ${nCnr}.<br>(<b>Algebraic check:</b> ${fr(`${n}!`, `${r}!(${n} − ${r})!`)} is unchanged when ${r} and ${n} − ${r} swap, but the choose-or-reject story is the one to remember.) For a quick numeric feel: ${C('7', '5')} = ${C('7', '2')} = 21; choosing 5 to keep is the same act as choosing 2 to leave out.`,
      },
      {
        t: 'p',
        html: `<b>3.3: Proving Pascal’s rule ${nCr} + ${nCr1} = ${n1Cr}.</b> <b>Combinatorial proof, by a single yes/no question.</b> We want the number of ways to choose ${r} objects from ${n} + 1 objects, i.e. ${n1Cr}. Single out one special object, call it ⋆, and ask: <b>is ⋆ in our chosen group or not?</b> The two cases are mutually exclusive and exhaustive:<br>• <b>⋆ is in:</b> then we still need ${r} − 1 more from the remaining ${n} objects → ${nCr1} ways.<br>• <b>⋆ is out:</b> then all ${r} come from the remaining ${n} objects → ${nCr} ways.<br>By the addition principle,<br>${n1Cr} = ${nCr1} + ${nCr}. ■<br>This “does the special object get included?” split is not just a proof trick: it is the master template for constraint problems below.`,
      },
      { t: 'p', html: '<b>3.4: Procedure: selection under constraints.</b>' },
      { t: 'fig', id: 'm11-06-fig-6.6' },
      {
        t: 'p',
        html: `• <b>“Must include” ${k} specific objects:</b> lock them in, then choose the remaining ${r} − ${k} from the other ${n} − ${k}: ${C('<i>n</i>−<i>k</i>', '<i>r</i>−<i>k</i>')}. <b>Illustration:</b> a 5-member team from 9 players that <b>must</b> contain the captain → fix the captain, choose 4 more from 8: ${C('8', '4')} = 70.<br>• <b>“Must exclude” ${k} specific objects:</b> drop them from the pool, then choose all ${r} from the remaining ${n} − ${k}: ${C('<i>n</i>−<i>k</i>', r)}. <b>Illustration:</b> the same team that <b>must not</b> include a suspended player → choose 5 from the other 8: ${C('8', '5')} = 56.<br>• <b>“At least / at most”:</b> either <b>add</b> the qualifying cases, or, usually faster, take <b>Total − complement</b>. <b>Illustration:</b> “a team of 5 from 9 players with at least 1 of 2 named players” is cleanest as ${C('9', '5')} − ${C('7', '5')} = 126 − 21 = 105 (complement: neither named player is chosen).`,
      },
      {
        t: 'p',
        html: `<b>3.5: Deriving “division into equal unlabelled groups.”</b> <b>Claim:</b> the number of ways to split 2${m} distinct objects into <b>two unlabelled groups of</b> ${m} <b>each</b> is ${fr('1', '2!')} · ${C('2<i>m</i>', m)}, and into ${g} unlabelled groups of equal size ${m} (with <i>gm</i> = ${n}) is<br>${fr(`${n}!`, `(${m}!)<sup><i>g</i></sup> ${g}!`)}.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> First treat the groups as <b>labelled</b> (Group 1, Group 2, …). Then we are just handing out objects: ${C(n, m)} ways to fill the first group, ${C('<i>n</i>−<i>m</i>', m)} for the second, and so on, whose product telescopes to ${fr(`${n}!`, `(${m}!)<sup><i>g</i></sup>`)}. But the groups are actually <b>unlabelled</b>: relabelling the ${g} equal groups among themselves (${g}! ways) produces the same division. So we have over-counted by exactly ${g}!, and must divide it out:<br>${fr(`${n}!`, `(${m}!)<sup><i>g</i></sup> ${g}!`)}.<br>This is why question 5 of the Practice exercises part carries that extra ÷3!. The rule generalises: <b>divide by the factorial of the number of groups that are interchangeable</b> (i.e. equal in size and unlabelled).`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (clean selection)',
        q: 'A cricket squad has 11 players. In how many ways can a sub-committee of 4 players be chosen to meet the coach?',
        steps: [
          `A sub-committee is a selection (order of the four names is irrelevant), so we use ${C('11', '4')}:<br>${C('11', '4')} = ${fr('11!', '4! 7!')}<br>= ${fr('11 × 10 × 9 × 8', '4 × 3 × 2 × 1')}<br>= ${fr('7920', '24')} = 330.`,
        ],
        ans: 'There are 330 possible sub-committees.',
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (permutation vs combination, same scenario)',
        q: 'From 6 eligible students, count the number of ways to (a) choose 3 for a quiz <b>team</b>, and (b) appoint 3 to the <b>distinct posts</b> of leader, scribe, and timekeeper.',
        steps: [
          `<b>(a) Team: order irrelevant → combination:</b> ${C('6', '3')} = ${fr('6!', '3! 3!')} = 20.`,
          `<b>(b) Distinct posts: order matters → permutation:</b> ${P('6', '3')} = 6 × 5 × 4 = 120.`,
          `Notice 120 = 20 × 3!: the appointments are just the teams with the 3! = 6 internal orderings restored. <b>The trap:</b> students who don’t pause to ask “do the chosen objects have roles?” use ${nPr} for a plain selection (overcounting by ${r}!) or ${nCr} for a role-assignment (undercounting). This single discrimination is the most heavily tested idea in the chapter ${ESTIMATE}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (selection across two categories)',
        q: 'A committee of 4 is to be formed from 7 boys and 5 girls such that it contains <b>exactly</b> 2 <b>boys and</b> 2 <b>girls</b>. In how many ways can this be done?',
        steps: [
          `The two choices are independent, so make each selection and combine by the multiplication principle.<br>• Choose 2 boys from 7: ${C('7', '2')} = 21.<br>• Choose 2 girls from 5: ${C('5', '2')} = 10.`,
          '(Two combinations stitched together by “AND” → multiply, exactly the FPC reflex from Topic 01.)',
        ],
        ans: `Total = ${C('7', '2')} × ${C('5', '2')}<br>= 21 × 10 = 210.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (“at least” by casework)',
        q: 'From 8 men and 6 women, a committee of 5 is formed containing <b>at least</b> 3 <b>women</b>. How many committees are possible?',
        steps: [
          `“At least 3 women” with a committee of 5 allows 3, 4, or 5 women. These cases are mutually exclusive, so count each and add (addition principle).<br>• 3 <b>women,</b> 2 <b>men:</b> ${C('6', '3')} × ${C('8', '2')} = 20 × 28 = 560.<br>• 4 <b>women,</b> 1 <b>man:</b> ${C('6', '4')} × ${C('8', '1')} = 15 × 8 = 120.<br>• 5 <b>women,</b> 0 <b>men:</b> ${C('6', '5')} × ${C('8', '0')} = 6 × 1 = 6.`,
          '<b>Why casework here (and not complement):</b> the complement of “at least 3 women” is “0, 1, or 2 women”: three cases, no fewer than the direct count. Complementary counting wins only when the complement is shorter; here the cases tie, so the direct sum is cleaner. Recognising which route is shorter is the Advanced-level judgement being tested.',
        ],
        ans: 'Total = 560 + 120 + 6 = 686.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] In how many ways can 3 toppings be chosen from a menu of 8 distinct toppings?', a: `${C('8', '3')} = 56` },
          { q: `[CBSE] Find the positive integer ${n} for which ${C(n, '2')} = 15.`, a: `${n} = 6` },
          {
            q: '[JEE Main] A team of 5 is to be selected from 9 men and 6 women so that it has <b>exactly</b> 3 <b>men and</b> 2 <b>women</b>. In how many ways?',
            a: `${C('9', '3')} × ${C('6', '2')} = 84 × 15 = 1260`,
          },
          {
            q: '[JEE Main] From 10 players (including 2 star players), a squad of 4 is chosen. How many squads include <b>at least one</b> of the two star players?',
            a: `${C('10', '4')} − ${C('8', '4')} = 210 − 70 = 140`,
          },
          {
            q: '[JEE Advanced] In how many ways can 12 distinct books be divided into <b>three unlabelled groups of</b> 4 <b>each</b>?',
            a: `${fr('12!', '(4!)<sup>3</sup> 3!')} = 5775`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In how many ways can 3 identical prize certificates be distributed among 10 students (no student gets more than one)?',
        opts: [
          { label: '30', nudge: '<b>(A)</b> 30 is 10 × 3: multiplying students by certificates counts nothing; only which 3 students get one matters.' },
          { label: '120', nudge: null },
          {
            label: '720',
            nudge: `<b>(C)</b> 720 is ${P('10', '3')}, treating the certificates as distinct/ordered. The signature combination-vs-permutation trap.`,
          },
          {
            label: '1000',
            nudge: '<b>(D)</b> 1000 is 10<sup>3</sup>: it sends each certificate to any of the 10 students on its own, so it treats the certificates as distinct and lets one student get several.',
          },
        ],
        correct: 1,
        solution: `The certificates are identical, so only which 3 students are chosen matters, a selection: ${C('10', '3')} = 120.`,
      },
      {
        t: 'mcq',
        q: `If ${C(n, '8')} = ${C(n, '12')}, then ${C(n, '2')} =`,
        opts: [
          { label: '190', nudge: null },
          { label: '20', nudge: `<b>(B)</b> 20 stops at finding ${n} and forgets to compute ${C(n, '2')}.` },
          {
            label: '90',
            nudge: `<b>(C)</b> 90 is a slip in working out ${fr('20 × 19', '2')}: 20 × 19 = 380, and half of it is 190.`,
          },
          {
            label: '380',
            nudge: `<b>(D)</b> 380 is 20 × 19 without halving: that is ${P('20', '2')}, not ${C('20', '2')}.`,
          },
        ],
        correct: 0,
        solution: `Since 8 ≠ 12, the property ${nCr} = ${C(n, '<i>s</i>')} ⇒ ${r} + <i>s</i> = ${n} gives ${n} = 8 + 12 = 20. Then ${C('20', '2')} = ${fr('20 × 19', '2')} = 190.`,
      },
      {
        t: 'mcq',
        q: 'A committee of 3 is chosen from 4 men and 3 women. How many committees contain <b>at least one woman</b>?',
        opts: [
          {
            label: '18',
            nudge: `<b>(A)</b> 18 counts only the “exactly one woman” case (${C('3', '1')} × ${C('4', '2')} = 3 × 6), missing the two- and three-women committees.`,
          },
          { label: '30', nudge: '<b>(B)</b> 30 drops the all-men count incorrectly (e.g. subtracts 5 instead of 4).' },
          { label: '31', nudge: null },
          { label: '35', nudge: `<b>(D)</b> 35 is the unrestricted total ${C('7', '3')}: forgets the constraint entirely.` },
        ],
        correct: 2,
        solution: `Use Total − (no women): ${C('7', '3')} − ${C('4', '3')} = 35 − 4 = 31.`,
      },
      {
        t: 'mcq',
        q: `The value of ${C('15', '13')} is`,
        opts: [
          { label: '105', nudge: null },
          { label: '195', nudge: '<b>(B)</b> 195 is 15 × 13: it multiplies the two numbers in the symbol, which counts nothing.' },
          {
            label: '2730',
            nudge: `<b>(C)</b> 2730 is 15 × 14 × 13 = ${P('15', '3')}: three factors and no division; by symmetry ${C('15', '13')} = ${C('15', '2')} needs only 15 × 14, divided by 2!.`,
          },
          { label: '32760', nudge: `<b>(D)</b> 32760 is ${P('15', '4')} = 15 × 14 × 13 × 12, a permutation, not a selection.` },
        ],
        correct: 0,
        solution: `Use symmetry: ${C('15', '13')} = ${C('15', '2')} = ${fr('15 × 14', '2')} = 105.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Order confusion (the cross-cutting error).</b> Using ${nCr} when the problem assigns roles/positions (needs ${nPr}), or ${nPr} for a plain selection (needs ${nCr}). Always run the master test: would reshuffling the chosen objects create a new outcome?`,
          `<b>Forgetting to divide by ${r}!.</b> Computing ${nPr} when ${nCr} is wanted: the answer comes out ${r}! times too large.`,
          '<b>Mishandling “at least / at most.”</b> Either missing a case in the sum, or using the complement when it isn’t actually shorter. Count the cases on each side first, then pick the shorter route.',
          '<b>Grouping without de-labelling.</b> When dividing objects into <b>equal, unlabelled</b> groups, you must divide by (number of equal groups)! to kill the over-count from swapping identical-sized groups (e.g. the extra ÷3! in the Practice exercises part, question 5). Forgetting this is the classic grouping slip.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: symmetry and the include/exclude split.</b> Use ${nCr} = ${nCnr} to shrink the arithmetic (${C('50', '48')} = ${C('50', '2')} in one line). And for constraint problems, deploy the Pascal-style question “is this specific object in or out?” to break the count into clean, addable cases.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: 'a <b>selection</b> where <b>order does NOT matter</b>. Combination = Committee.' },
          { f: 'Formula', note: `${nCr} = ${CFORM} = ${fr(nPr, `${r}!`)} (0 ≤ ${r} ≤ ${n})` },
          { f: 'Boundary', note: `${C(n, '0')} = ${C(n, n)} = 1, ${C(n, '1')} = ${n}, ${nCr} = 0 if ${r} > ${n}` },
          { f: 'Symmetry', note: `${nCr} = ${nCnr} (choose = reject)` },
          { f: 'Pascal’s rule', note: `${nCr} + ${nCr1} = ${n1Cr} (1 ≤ ${r} ≤ ${n})` },
          { f: `If ${nCr} = ${C(n, '<i>s</i>')} (0 ≤ ${r}, <i>s</i> ≤ ${n})`, note: `${r} = <i>s</i> or ${r} + <i>s</i> = ${n}` },
          {
            f: 'Constraints',
            note: `include ${k} → ${C('<i>n</i>−<i>k</i>', '<i>r</i>−<i>k</i>')}; exclude ${k} → ${C('<i>n</i>−<i>k</i>', r)}; “at least” → cases <b>or</b> Total − complement`,
          },
          { f: 'Equal unlabelled groups', note: 'divide by (number of equal groups)!' },
        ],
        aids: [`“Order out ⇒ divide by ${r}!.”`, `“Choose ${r} = reject ${n} − ${r}.”`, '“Roles? → Permutation. Just a group? → Combination.”'],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 522–529 ────────────────
  {
    n: '04',
    title: 'Total Selections, Grouping & Distribution (Stars and Bars)',
    kalam: 'Every arrangement of stars and bars is one valid selection, so you are just choosing positions for the bars among r + (n − 1) slots.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where JEE separates students. JEE Main and Advanced lean heavily on <b>stars-and-bars</b> (integer solutions, distributing identical objects), <b>total-selection</b> counts, and <b>grouping/distribution</b> problems ${ESTIMATE}, and these ideas reappear throughout Probability. CBSE Boards touches only the simplest selection counts. If you have mastered ${nCr}, this topic upgrades it into a complete counting toolkit.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `So far you have chosen exactly ${r} objects. Real problems ask broader questions: How many subsets are there altogether? In how many ways can identical sweets be shared? How many integer solutions does an equation have? This topic builds the three big tools that answer them.`,
      },
      {
        t: 'p',
        html: `<b>Tool 1: Total selections (the “yes/no on each object” idea).</b> Suppose you stand before ${n} distinct objects and decide, for each one independently, “take it” or “leave it.” Each object offers 2 choices, so by the Fundamental Principle of Counting there are 2<sup><i>n</i></sup> outcomes, i.e. 2<sup><i>n</i></sup> subsets, including the empty one. If you must take at least one, drop the empty selection: 2<sup><i>n</i></sup> − 1.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> a selection is just a binary string of length ${n}: a 1 for “in,” a 0 for “out.” There are 2<sup><i>n</i></sup> such strings, which is why an ${n}-element set has 2<sup><i>n</i></sup> subsets. This single picture also handles <b>alike</b> objects: if you have ${p} identical chocolates, a selection only records how many you take, anything from 0 to ${p}, which is ${p} + 1 choices, not 2<sup><i>p</i></sup>. Multiply across groups.`,
      },
      {
        t: 'p',
        html: `<b>Tool 2: Combinations with repetition (stars and bars).</b> Now selection with repetition: choosing ${r} items from ${n} types, where you may repeat a type (like buying 5 pastries from 4 available flavours). Order doesn’t matter, repeats are allowed; this is not ${nCr} and not <i>n</i><sup><i>r</i></sup>. The clever model: lay down ${r} identical <b>stars</b> (the items you pick) and separate them into ${n} type-groups using ${n} − 1 <b>bars</b>. Every arrangement of stars and bars is one valid selection, so you are just choosing positions for the bars among ${r} + (${n} − 1) slots.`,
      },
      {
        t: 'p',
        html: `<b>Tool 3: Grouping vs. distribution.</b> “Divide 12 books into three bundles” and “give the 12 books to three children” sound similar but differ by whether the groups are <b>labelled</b>. Unlabelled equal-size groups force a division by (number of equal groups)! (you met this in Topic 03’s CBSE board proofs / key procedures part, item 3.5); labelled groups (distinct recipients) do not, and converting between them is a frequent exam pivot ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `<b>Conditions & Assumptions:</b><br>• 2<sup><i>n</i></sup> counts subsets of <b>distinct</b> objects; for alike objects use the ∏(${pi} + 1) rule instead.<br>• Stars and bars assumes the ${r} chosen items are <b>identical in role</b> (only counts matter) and the ${n} types/boxes are <b>distinct</b>.<br>• The empty selection is included in 2<sup><i>n</i></sup> and in the basic stars-and-bars count; subtract or constrain when the problem says “at least one.”`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Total selections from <i>n</i> distinct objects',
        main: 'subsets (incl. empty) = 2<sup><i>n</i></sup>,<br>at least one = 2<sup><i>n</i></sup> − 1.',
        legend: [`${n} = number of distinct objects`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total selections when objects are alike',
        main: `(${p} alike of type 1, ${q} alike of type 2, …, plus ${d} all-distinct objects):<br>(incl. empty) = (${p} + 1)(${q} + 1) ⋯ × 2<sup><i>d</i></sup>,<br>at least one = (${p} + 1)(${q} + 1) ⋯ 2<sup><i>d</i></sup> − 1.`,
        legend: [
          `${p} = number of alike objects of type 1`,
          `${q} = number of alike objects of type 2`,
          `${d} = number of all-distinct objects`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Combinations with repetition',
        main: `selecting ${r} from ${n} types, repetition allowed, order ignored:<br>${NREP} = ${NREP1}.`,
        legend: [`${n} = number of types`, `${r} = number of items selected`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Stars and bars: integer solutions of <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯ + <i>x</i><sub><i>k</i></sub> = <i>n</i>',
        main: `non-negative solutions (${xi} ≥ 0): ${NONNEG},<br>positive solutions (${xi} ≥ 1): ${POS}.`,
        legend: [
          `${n} = the total on the right-hand side (the number of identical objects)`,
          `${k} = number of variables (the number of distinct boxes)`,
          `${xi} = the <i>i</i>th variable`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `(These are identical to distributing ${n} <b>identical</b> objects into ${k} <b>distinct</b> boxes: empty allowed, or each non-empty, respectively.)`,
      },
      {
        t: 'formula',
        kicker: 'Division of <i>n</i> distinct objects into groups',
        main: `Into groups of <b>unequal</b> sizes <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, … , <i>m</i><sub><i>k</i></sub> (with ∑ ${mi} = ${n}):<br>${fr(`${n}!`, `<i>m</i><sub>1</sub>! <i>m</i><sub>2</sub>! ⋯ <i>m</i><sub><i>k</i></sub>!`)}.<br>if some groups have equal size and are unlabelled, divide further by ${g}! for each set of ${g} equal groups.`,
        legend: [
          `${n} = number of distinct objects`,
          `<i>m</i><sub>1</sub>, … , <i>m</i><sub><i>k</i></sub> = the group sizes`,
          `${g} = the number of equal-sized unlabelled groups in a set`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• If some groups have <b>equal size and are unlabelled</b>, divide further by ${g}! for each set of ${g} equal groups.<br>• <b>Distribution</b> to ${k} distinct recipients: if recipient <i>i</i> is to get exactly ${mi} objects, the count is the bare ${DIVIDE} (equal sizes included, so no ÷ ${g}!). If the groups may go to any recipient, multiply the unlabelled division count (after any ÷ ${g}!) by ${k}!.`,
      },
      {
        t: 'formula',
        kicker: 'Distribution of <i>n</i> distinct objects into <i>k</i> distinct boxes (no restriction)',
        main: '<i>k</i><sup><i>n</i></sup>.',
        legend: [`${n} = number of distinct objects`, `${k} = number of distinct boxes`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Conditions & sanity-checks:</b> every count is a whole number (it can be 0, e.g. positive solutions when ${n} < ${k}); for stars and bars confirm “identical items, distinct boxes”; for “at least one” in ${k} boxes use the substitution ${yi} = ${xi} − 1 to convert to the non-negative case.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>3.1: Why combinations-with-repetition is ${NREP} (the stars-and-bars proof).</b> We select ${r} items from ${n} types, repetition allowed, order irrelevant. Represent the selection by ${r} identical stars laid in a line, partitioned into ${n} type-blocks by inserting ${n} − 1 bars:`,
      },
      { t: 'fig', id: 'm11-06-fig-6.7' },
      {
        t: 'p',
        html: `Reading left to right, the stars before the first bar belong to type 1, those between the first and second bar to type 2, and so on. Every distinct selection corresponds to exactly one star/bar pattern, and vice-versa. We have ${r} + (${n} − 1) symbols in total and must choose which ${n} − 1 of those positions are bars (equivalently, which ${r} are stars):<br>${NREP1} = ${NREP}. ■<br>Because “choose ${r} from ${n} types with repetition” is identical to “place ${r} identical objects into ${n} distinct boxes,” the same formula counts non-negative integer solutions of <i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub><i>n</i></sub> = ${r}.`,
      },
      {
        t: 'p',
        html: `<b>3.2: Non-negative vs. positive solutions.</b> For <i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub><i>k</i></sub> = ${n} with each ${xi} ≥ 0, the stars-and-bars count is ${NONNEG} directly. For each ${xi} ≥ 1, first hand one unit to every variable: set ${yi} = ${xi} − 1 ≥ 0, so <i>y</i><sub>1</sub> + ⋯ + <i>y</i><sub><i>k</i></sub> = ${n} − ${k}, giving ${C('(<i>n</i>−<i>k</i>)+<i>k</i>−1', '<i>k</i>−1')} = ${POS}. The “give one to everybody first” trick is the master move for lower-bound constraints, and it works for any bounds, not just 1.`,
      },
      {
        t: 'p',
        html: `<b>3.3: Total selections, derived.</b> Each of ${n} distinct objects is independently in or out: 2 × 2 × ⋯ = 2<sup><i>n</i></sup> subsets (FPC). For an alike group of size ${p}, a selection is fully described by how many you take, 0 through ${p}, that is ${p} + 1 options, so groups multiply: (${p} + 1)(${q} + 1) ⋯. Distinct objects contribute their own factor of 2 each, i.e. 2<sup><i>d</i></sup>. Subtract 1 to forbid the empty choice.`,
      },
      { t: 'p', html: '<b>3.4: Grouping vs. distribution procedure.</b>' },
      { t: 'fig', id: 'm11-06-fig-6.8' },
      {
        t: 'p',
        html: `• Write the <b>division</b> count ${DIVIDE}.<br>• If ${g} of the groups are <b>equal-sized and unlabelled</b>, divide by ${g}!.<br>• If the groups are then <b>handed to distinct recipients</b>, multiply by the number of ways to assign groups to recipients.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'Foundational (total selections)',
        q: 'A gift shop displays 5 distinct keychains. In how many ways can a customer buy <b>at least one</b> keychain?',
        steps: ['Each keychain is independently bought or not: 2<sup>5</sup> = 32 subsets, including buying nothing. Forbid the empty purchase:'],
        ans: '2<sup>5</sup> − 1 = 31.',
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (alike vs. distinct selections)',
        q: 'A basket holds 3 identical red apples, 2 identical green apples, and 1 orange. In how many ways can you pick <b>at least one</b> fruit?',
        steps: [
          'Selections from alike groups are counted by how many you take, not which:<br>• Red apples: 0, 1, 2, 3 → 4 choices.<br>• Green apples: 0, 1, 2 → 3 choices.<br>• Orange (single distinct item): in or out → 2 choices.',
          '<b>The trap:</b> treating all 6 fruits as distinct gives 2<sup>6</sup> − 1 = 63, badly over-counting, because swapping two identical red apples is not a new selection. Always ask which objects are genuinely interchangeable.',
        ],
        ans: 'total (incl. empty) = 4 × 3 × 2 = 24,<br>at least one = 24 − 1 = 23.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (non-negative integer solutions)',
        q: 'How many non-negative integer solutions does <i>a</i> + <i>b</i> + <i>c</i> + <i>d</i> = 12 have?',
        steps: [`This is 12 identical units distributed among 4 distinct variables (empty allowed), stars and bars with ${n} = 12, ${k} = 4:`],
        ans: `${C('12+4−1', '4−1')} = ${C('15', '3')}<br>= ${fr('15 × 14 × 13', '6')} = 455.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (distribution with lower bounds)',
        q: 'In how many ways can 15 identical chocolates be distributed among 4 children so that <b>each child gets at least</b> 2?',
        steps: [
          `Give each child 2 chocolates up front (8 used), then freely distribute the remaining 15 − 8 = 7 with no restriction. Let ${yi} ≥ 0 be the extra each child receives: <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub> + <i>y</i><sub>4</sub> = 7. By stars and bars: ${C('7+4−1', '4−1')} = ${C('10', '3')} = ${fr('10 × 9 × 8', '6')} = 120.`,
          '<b>Why the pre-allocation works:</b> subtracting the guaranteed minimum converts a bounded problem into the clean non-negative case: the single most useful manoeuvre in distribution problems.',
        ],
        ans: `${C('7+4−1', '4−1')} = ${C('10', '3')}<br>= ${fr('10 × 9 × 8', '6')} = 120.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[Foundational] How many subsets does a set of 6 distinct elements have, and how many of them are non-empty?',
            a: '2<sup>6</sup> = 64 subsets; 63 non-empty',
          },
          {
            q: '[Foundational] In how many ways can 10 distinct books be divided into three groups of sizes 2, 3, and 5?',
            a: `${fr('10!', '2! 3! 5!')} = 2520`,
          },
          { q: '[JEE Main] Find the number of positive integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 10.', a: `${C('9', '2')} = 36` },
          {
            q: '[JEE Main] A fruit seller has 4 identical apples, 3 identical oranges, 1 mango, and 1 banana. In how many ways can a customer select at least one fruit?',
            a: '(4 + 1)(3 + 1) 2<sup>2</sup> − 1 = 79',
          },
          {
            q: '[JEE Advanced] In how many ways can 20 identical balls be placed into 5 distinct boxes such that <b>no box is empty</b>?',
            a: `${C('19', '4')} = 3876`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of non-negative integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 7 is',
        opts: [
          { label: '28', nudge: `<b>(A)</b> 28 is ${C('8', '2')}: using ${n} + ${k} − 2 by miscounting the bars.` },
          { label: '36', nudge: null },
          { label: '21', nudge: `<b>(C)</b> 21 is ${C('7', '2')}: forgetting to add the bars to the slot count.` },
          { label: '343', nudge: '<b>(D)</b> 343 = 7<sup>3</sup> treats it as ordered placement with repetition, the wrong model.' },
        ],
        correct: 1,
        solution: `Stars and bars: ${C('7+3−1', '3−1')} = ${C('9', '2')} = 36.`,
      },
      {
        t: 'mcq',
        q: 'In how many ways can 6 distinct toys be divided into <b>two unlabelled groups of</b> 3?',
        opts: [
          { label: '10', nudge: null },
          {
            label: '20',
            nudge: '<b>(B)</b> 20 forgets the ÷2!: it counts distribution to two labelled recipients, not division into unlabelled groups.',
          },
          { label: '36', nudge: `<b>(C)</b> 36 is 3! × 3!, the denominator taken as the answer; the count is ${fr('6!', '3! 3! 2!')} = 10.` },
          { label: '720', nudge: '<b>(D)</b> 720 = 6! ignores grouping entirely.' },
        ],
        correct: 0,
        solution: `${fr('6!', '3! 3! 2!')} = ${fr('720', '72')} = 10; or in two steps: ${fr('6!', '3! 3!')} = 20 for labelled groups, then ÷2! for the interchangeable equal groups = 10.`,
      },
      {
        t: 'mcq',
        q: 'In how many ways can 12 identical pens be distributed among 3 students if a student may receive none?',
        opts: [
          {
            label: '36',
            nudge: `<b>(A)</b> 36 is ${C('9', '2')}: it takes the 3 students away from 12 instead of adding the 2 bars; there are 12 + 2 = 14 places.`,
          },
          { label: '55', nudge: `<b>(B)</b> 55 is ${C('11', '2')}: the “each student at least one” count, wrongly applied.` },
          { label: '91', nudge: null },
          { label: '3<sup>12</sup>', nudge: '<b>(D)</b> 3<sup>12</sup> treats the pens as distinct.' },
        ],
        correct: 2,
        solution: `Identical pens, distinct students, empty allowed: ${C('12+3−1', '3−1')} = ${C('14', '2')} = 91.`,
      },
      {
        t: 'mcq',
        q: 'From 4 identical marbles and 1 distinct coin, the number of ways to select <b>one or more</b> objects is',
        opts: [
          { label: '5', nudge: '<b>(A)</b> 5 counts only the marbles, forgetting the coin.' },
          { label: '9', nudge: null },
          { label: '31', nudge: '<b>(C)</b> 31 = 2<sup>5</sup> − 1 wrongly treats the 4 marbles as distinct.' },
          { label: '10', nudge: '<b>(D)</b> 10 forgets to exclude the empty selection.' },
        ],
        correct: 1,
        solution: 'Marbles: 0–4 → 5 choices; coin: in/out → 2 choices; total 5 × 2 = 10, minus the empty selection = 9.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Distinct vs. alike confusion.</b> Using 2<sup><i>n</i></sup> when objects are identical (use ∏(${pi} + 1)) or vice-versa. Ask: would swapping two of these objects create a new selection?`,
          `<b>Wrong counting model for repetition.</b> Selecting with repetition is ${NREP}: neither ${nCr} (no repetition) nor <i>n</i><sup><i>r</i></sup> (that’s ordered placement). Identify “identical items into distinct boxes.”`,
          `<b>Division vs. distribution.</b> Forgetting the ÷${g}! for equal unlabelled groups, or wrongly applying it when the groups are actually labelled recipients.`,
          '<b>Forgetting the empty case.</b> 2<sup><i>n</i></sup> and the basic stars-and-bars count both include “choose nothing”/“boxes left empty.” Adjust for “at least one.”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: pre-allocate to clear lower bounds.</b> For “each box at least <i>c</i>,” hand out <i>c</i> to every box first, then solve the leftover as a clean non-negative stars-and-bars problem. This one substitution dissolves most distribution constraints.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `Subsets of ${n} distinct`, note: '2<sup><i>n</i></sup> (incl. empty); <b>at least one:</b> 2<sup><i>n</i></sup> − 1' },
          { f: `Alike groups ${p}, ${q}, … (+ ${d} distinct)`, note: `(${p} + 1)(${q} + 1) ⋯ 2<sup><i>d</i></sup>; minus 1 for “at least one”` },
          { f: `Choose ${r} from ${n} types, repetition allowed`, note: NREP },
          { f: `<i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub><i>k</i></sub> = ${n}`, note: `non-negative → ${NONNEG}; positive → ${POS}` },
          { f: `Divide ${n} distinct into sizes <i>m</i><sub>1</sub>, …`, note: `${DIVIDE}; ÷${g}! per set of ${g} equal unlabelled groups` },
          { f: `${n} distinct objects into ${k} distinct boxes (free)`, note: '<i>k</i><sup><i>n</i></sup>' },
          { f: 'Lower bounds', note: 'pre-give the minimum, then non-negative stars-and-bars on the rest' },
        ],
        aids: ['“Identical-into-distinct ⇒ stars and bars.”', '“In-or-out ⇒ 2<sup><i>n</i></sup>.”', '“Unlabelled equal groups ⇒ divide by their factorial.”'],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 530–536 ────────────────
  {
    n: '05',
    title: 'Counting Applications & Advanced Tools',
    kalam: 'Most “hard” P&C questions are not new mathematics: they are familiar selections wearing a costume.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The “named techniques” examiners love. Geometric counting (triangles, diagonals, rectangles), number of divisors, sum of numbers formed, rank of a word, derangements, and the exponent of a prime in ${n}! appear repeatedly in JEE Main and Advanced ${ESTIMATE} and reward students who recognise the pattern instantly. CBSE occasionally asks divisors or a simple geometric count ${ESTIMATE}. This topic converts your combination skills into fast, recognisable problem types.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Most “hard” P&C questions are not new mathematics: they are familiar selections wearing a costume. Learn to see through the costume.',
      },
      {
        t: 'p',
        html: `<b>Geometry as selection.</b> Through points with no three on a line, a <b>straight line</b> is just a choice of 2 points, so the number of lines is ${C(n, '2')}. A <b>triangle</b> is a choice of 3 points, ${C(n, '3')}. The only complication is <b>collinear points</b>: if some points lie on a common line, the pairs among them yield one line, not many, and triples among them yield no triangle, so we correct by subtracting. <b>Think about it this way…</b> counting shapes is counting the vertices that define them; the shape is determined by the selection.`,
      },
      {
        t: 'p',
        html: `<b>Divisors as selection.</b> Write <i>N</i> = <i>p</i><sub>1</sub><sup><i>a</i>₁</sup><i>p</i><sub>2</sub><sup><i>a</i>₂</sup> ⋯. Every divisor is built by choosing an exponent for each prime: anything from 0 to ${ai} for prime ${pi}, i.e. ${ai} + 1 independent choices. By the FPC, the number of divisors is ∏(${ai} + 1). A divisor is a selection of exponents.`,
      },
      {
        t: 'p',
        html: '<b>Arrangements in disguise.</b> “Sum of all numbers formed” and “rank of a word” are permutation problems viewed through place-value and dictionary order. In any complete set of arrangements, <b>each digit lands in each place equally often</b>, which makes the total sum computable without listing.',
      },
      {
        t: 'p',
        html: '<b>Derangements.</b> Sometimes we must count permutations with a forbidden position for every object: letters into envelopes so that none matches. These are <b>derangements</b>, counted by inclusion–exclusion (or its recurrence), not by a plain factorial.',
      },
      {
        t: 'p',
        html: `<b>Exponent of a prime in ${n}!.</b> To find how many times a prime ${p} divides ${n}!, count multiples of ${p}, then of <i>p</i><sup>2</sup> (which contribute an extra factor), and so on: Legendre’s neat staircase sum.`,
      },
      {
        t: 'p',
        html: '<b>Conditions & Assumptions:</b> geometric formulas assume “general position” (no three collinear, no two parallel) unless stated, then corrected; the divisor formula needs the complete prime factorisation; the sum-of-numbers formula below assumes distinct non-zero digits used without repetition (zero needs a small adjustment).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Geometric counting',
        main: [
          `(from ${n} points, no 3 collinear unless noted):`,
          `lines = ${C(n, '2')},`,
          `triangles = ${C(n, '3')}.`,
          `If ${m} of the points are collinear, correct:`,
          `lines = ${C(n, '2')} − ${C(m, '2')} + 1,`,
          `triangles = ${C(n, '3')} − ${C(m, '3')}.`,
        ].join('<br>'),
        legend: [`${n} = number of points`, `${m} = number of collinear points (all on one line; no other three collinear)`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Diagonals of a convex <i>n</i>-gon',
        main: `${C(n, '2')} − ${n} = ${fr(`${n}(${n} − 3)`, '2')}.`,
        legend: [`${n} = number of vertices`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rectangles or parallelograms from two families of parallel lines',
        main: `${C('<i>a</i>', '2')} · ${C('<i>b</i>', '2')}.`,
        legend: [
          '<i>a</i> = number of lines in the first family (the horizontal lines of a grid)',
          '<i>b</i> = number of lines in the second family (the vertical lines of a grid)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Divisors of ${NPRIME}`,
        main: `number of positive divisors = (<i>a</i><sub>1</sub> + 1)(<i>a</i><sub>2</sub> + 1) ⋯ (<i>a</i><sub><i>k</i></sub> + 1),<br>sum of divisors = ${SUMDIV}.`,
        legend: [
          '<i>N</i> = the number being factorised',
          `${pi} = the distinct primes`,
          `${ai} = their exponents`,
          '<i>k</i> = the number of distinct primes',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Sum of all numbers',
        main: `formed using ${n} distinct non-zero digits, all at a time, without repetition:<br>sum = (sum of the digits) × (${n} − 1)! × 111 … 1 (${n} ones)<br>= (∑ ${d}) (${n} − 1)! ${REPUNIT}.`,
        legend: [`${n} = number of digits`, `∑ ${d} = the sum of the digits`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Rank of a word:</b> position in the dictionary-ordered list of all arrangements of its letters (procedure in the Key procedures and logical framework part).',
      },
      {
        t: 'formula',
        kicker: 'Derangements of <i>n</i> objects (no object in its own place)',
        main: `${Dn} = ${n}! (1 − ${fr('1', '1!')} + ${fr('1', '2!')} − ⋯ + ${fr('(−1)<sup><i>n</i></sup>', `${n}!`)}),<br>${Dn} = (${n} − 1)(${sb('D', '<i>n</i>−1')} + ${sb('D', '<i>n</i>−2')}) (${n} ≥ 3).`,
        legend: [
          `${Dn} = number of derangements of ${n} objects`,
          `${n} = number of objects (the recurrence for ${n} ≥ 3, with ${sb('D', '1')} = 0, ${sb('D', '2')} = 1)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Small values: ${sb('D', '1')} = 0, ${sb('D', '2')} = 1, ${sb('D', '3')} = 2, ${sb('D', '4')} = 9, ${sb('D', '5')} = 44.`,
      },
      {
        t: 'formula',
        kicker: 'Exponent of prime <i>p</i> in <i>n</i>! (Legendre)',
        main: `${sb('E', '<i>p</i>')}(${n}!) = ${FLOOR(n, p)} + ${FLOOR(n, '<i>p</i><sup>2</sup>')} + ${FLOOR(n, '<i>p</i><sup>3</sup>')} + ⋯<br>Trailing zeros of ${n}! = ${sb('E', '5')}(${n}!).`,
        legend: [
          `${sb('E', '<i>p</i>')}(${n}!) = the exponent of ${p} in ${n}!`,
          `${n} = a positive integer`,
          `${p} = a prime`, '⌊ ⌋ = the greatest integer (floor)'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Sanity-checks:</b> geometric counts must be non-negative after corrections; ∏(${ai} + 1) uses every prime; ${Dn} < ${n}! for ${n} ≥ 1 and ${fr(Dn, `${n}!`)} → ${fr('1', '<i>e</i>')} ≈ 0.3679.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>3.1: Lines and triangles with collinear points.</b> Start as if no three points were collinear: ${C(n, '2')} lines, ${C(n, '3')} triangles. Now suppose ${m} points are collinear. Those ${m} points would have contributed ${C(m, '2')} separate lines, but they actually lie on a single line, so subtract ${C(m, '2')} and add 1 back for that one line. For triangles, any 3 of those ${m} collinear points form a degenerate (zero-area) “triangle,” so subtract ${C(m, '3')} outright.`,
      },
      { t: 'fig', id: 'm11-06-fig-6.9' },
      {
        t: 'p',
        html: `<b>3.2: Why ∏(${ai} + 1) counts divisors.</b> A divisor ${d} of <i>N</i> = <i>p</i><sub>1</sub><sup><i>a</i>₁</sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>a</i>ₖ</sup> must look like <i>p</i><sub>1</sub><sup><i>e</i>₁</sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>e</i>ₖ</sup> with 0 ≤ <i>e</i><sub><i>i</i></sub> ≤ ${ai}. Choosing each exponent <i>e</i><sub><i>i</i></sub> is independent and offers ${ai} + 1 values, so by the FPC the number of divisors is (<i>a</i><sub>1</sub> + 1)(<i>a</i><sub>2</sub> + 1) ⋯ (<i>a</i><sub><i>k</i></sub> + 1). (The sum-of-divisors formula is the product of geometric series 1 + ${pi} + ⋯ + ${pi}<sup><i>a</i>ᵢ</sup>.)`,
      },
      {
        t: 'p',
        html: `<b>3.3: Sum of all numbers formed.</b> With ${n} distinct digits used once each, fix any digit in the units place; the remaining ${n} − 1 digits permute freely in (${n} − 1)! ways. So <b>each digit appears in the units place exactly</b> (${n} − 1)! <b>times</b>, and by symmetry in every place. The total contributed to the units column is (∑ ${d})(${n} − 1)!, to the tens column (∑ ${d})(${n} − 1)! × 10, and so on, summing to<br>(∑ ${d})(${n} − 1)! (1 + 10 + ⋯ + 10<sup><i>n</i>−1</sup>)<br>= (∑ ${d})(${n} − 1)! ${REPUNIT}.`,
      },
      {
        t: 'p',
        html: `<b>3.4: Rank of a word (dictionary order).</b> To rank a word of distinct letters: scan left to right. At each position, count how many unused letters are alphabetically smaller than the current letter; multiply that count by the factorial of the number of positions still to its right; accumulate. Add 1 at the end (the word itself). For words with repeated letters, take each <b>distinct</b> unused letter smaller than the current one in turn, put it in this position, and count the arrangements of the letters then left, ${fr('(remaining)!', '∏(repeats)!')} with the repeat counts of what is left; add these counts.`,
      },
      {
        t: 'p',
        html: `<b>3.5: Derangements by inclusion–exclusion.</b> Of all ${n}! permutations, subtract those fixing at least one object. Fixing a chosen set of <i>i</i> objects leaves (${n} − <i>i</i>)! arrangements, and there are ${C(n, '<i>i</i>')} such sets; inclusion–exclusion gives<br>${Dn} = ∑<sub><i>i</i>=0</sub><sup><i>n</i></sup> (−1)<sup><i>i</i></sup> ${C(n, '<i>i</i>')} (${n} − <i>i</i>)!<br>= ${n}! ∑<sub><i>i</i>=0</sub><sup><i>n</i></sup> ${fr('(−1)<sup><i>i</i></sup>', '<i>i</i>!')}.`,
      },
      {
        t: 'p',
        html: `<b>3.6: Exponent of a prime in ${n}!.</b> Among 1, 2, … , ${n}, exactly ${FLOOR(n, p)} are multiples of ${p}; of those, ${FLOOR(n, '<i>p</i><sup>2</sup>')} carry a second factor of ${p}; and so on. Summing these counts every factor of ${p} once, giving Legendre’s formula.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'Foundational (number of divisors)',
        q: 'How many positive divisors does 360 have?',
        steps: ['Factorise: 360 = 2<sup>3</sup> × 3<sup>2</sup> × 5<sup>1</sup>. Each divisor chooses an exponent for each prime:'],
        ans: '(3 + 1)(2 + 1)(1 + 1)<br>= 4 × 3 × 2 = 24 divisors.',
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (triangles with collinear points)',
        q: 'There are 10 points in a plane, of which 4 are collinear. How many triangles can be formed with these points as vertices?',
        steps: [
          `Without restriction, any 3 points make a triangle: ${C('10', '3')} = 120. But the 4 collinear points yield ${C('4', '3')} = 4 degenerate (flat) “triangles” that must be removed: 120 − 4 = 116.`,
          `<b>The trap:</b> writing ${C('10', '3')} = 120 and stopping. Three collinear points have zero area: never a triangle. Always scan for collinear subsets and subtract their ${C(m, '3')}.`,
        ],
        ans: '120 − 4 = 116.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (sum of all numbers formed)',
        q: 'Find the sum of all 4-digit numbers formed using the digits 2, 3, 4, 5 exactly once each.',
        steps: ['There are 4! = 24 such numbers. Each digit occupies each place (4 − 1)! = 6 times. Sum of digits = 2 + 3 + 4 + 5 = 14. The place-value repunit is 1111:'],
        ans: 'sum = 14 × 6 × 1111<br>= 84 × 1111 = 93,324.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (derangements)',
        q: 'Five distinct letters are to be placed into five addressed envelopes (one per envelope). In how many ways can this be done so that <b>no letter</b> goes into its correct envelope?',
        steps: [
          `This is the derangement count ${sb('D', '5')}:<br>${sb('D', '5')} = 5! (1 − ${fr('1', '1!')} + ${fr('1', '2!')} − ${fr('1', '3!')} + ${fr('1', '4!')} − ${fr('1', '5!')})<br>= 120 (${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')} − ${fr('1', '120')}).`,
          `Compute inside: ${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')} − ${fr('1', '120')} = ${fr('11', '30')}, and 120 × ${fr('11', '30')} = 44. So`,
          `(Cross-check with the recurrence ${sb('D', '5')} = 4(${sb('D', '4')} + ${sb('D', '3')}) = 4(9 + 2) = 44.)`,
        ],
        ans: `${sb('D', '5')} = 44.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[Foundational] How many diagonals does a convex decagon (10-gon) have?', a: `${fr('10(10 − 3)', '2')} = 35` },
          {
            q: '[Foundational] Find the number of positive divisors of 1200.',
            a: '1200 = 2<sup>4</sup> · 3 · 5<sup>2</sup> ⇒ (4 + 1)(1 + 1)(2 + 1) = 30',
          },
          {
            q: '[JEE Main] In a rectangular grid formed by 5 horizontal lines and 6 vertical lines, how many rectangles can be formed?',
            a: `${C('5', '2')} · ${C('6', '2')} = 10 × 15 = 150`,
          },
          {
            q: '[JEE Main] Find the rank of the word <b>MATHS</b> in the dictionary-ordered list of all permutations of its letters.',
            a: '53',
          },
          { q: '[JEE Advanced] How many trailing zeros does 100! have?', a: `${FLOOR('100', '5')} + ${FLOOR('100', '25')} = 20 + 4 = 24` },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of positive divisors of 72 is',
        opts: [
          { label: '6', nudge: '<b>(A)</b> 6 multiplies the exponents (3 × 2) instead of the incremented exponents.' },
          { label: '8', nudge: '<b>(B)</b> 8 is (3 + 1)(1 + 1): it treats 3<sup>2</sup> as if its exponent were 1.' },
          { label: '12', nudge: null },
          {
            label: '36',
            nudge: `<b>(D)</b> 36 is ${fr('72', '2')}, half of 72 itself; the count comes from the exponents, (3 + 1)(2 + 1) = 12.`,
          },
        ],
        correct: 2,
        solution: '72 = 2<sup>3</sup> × 3<sup>2</sup>, so (3 + 1)(2 + 1) = 12.',
      },
      {
        t: 'mcq',
        q: 'From 8 points in a plane, no three collinear, how many triangles can be formed?',
        opts: [
          {
            label: '24',
            nudge: `<b>(A)</b> 24 is 8 × 3, points times vertices; the count is ${C('8', '3')} = ${fr('8 × 7 × 6', '6')} = 56.`,
          },
          { label: '56', nudge: null },
          { label: '336', nudge: `<b>(C)</b> 336 is ${P('8', '3')}: ordering the vertices, which doesn’t create new triangles.` },
          { label: '512', nudge: '<b>(D)</b> 512 = 8<sup>3</sup> allows repetition and order, both wrong.' },
        ],
        correct: 1,
        solution: `A triangle is a choice of 3 points: ${C('8', '3')} = 56.`,
      },
      {
        t: 'mcq',
        q: 'The number of derangements of 4 distinct objects is',
        opts: [
          {
            label: '6',
            nudge: '<b>(A)</b> 6 is 3!, as if sending object 1 elsewhere left the other three free; the full sum is 24 − 24 + 12 − 4 + 1 = 9.',
          },
          { label: '9', nudge: null },
          {
            label: '12',
            nudge: '<b>(C)</b> 12 stops the inclusion–exclusion sum after three terms: 4! − 4·3! + 6·2! = 12.',
          },
          { label: '24', nudge: '<b>(D)</b> 24 = 4! counts all permutations, not just the no-fixed-point ones.' },
        ],
        correct: 1,
        solution: `${sb('D', '4')} = 4! (1 − 1 + ${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')}) = 24 × ${fr('9', '24')} = 9 (or ${sb('D', '4')} = 3(${sb('D', '3')} + ${sb('D', '2')}) = 3(2 + 1) = 9).`,
      },
      {
        t: 'mcq',
        q: 'The exponent of 3 in 30! is',
        opts: [
          { label: '10', nudge: '<b>(A)</b> 10 stops at the first term, forgetting that 9 and 27 contribute extra factors.' },
          { label: '13', nudge: `<b>(B)</b> 13 includes ${FLOOR('30', '9')} but drops ${FLOOR('30', '27')}.` },
          { label: '14', nudge: null },
          {
            label: '15',
            nudge: `<b>(D)</b> 15 adds a term too many: ${FLOOR('30', '81')} = 0, so the sum stops at ${FLOOR('30', '27')} = 1.`,
          },
        ],
        correct: 2,
        solution: `${FLOOR('30', '3')} + ${FLOOR('30', '9')} + ${FLOOR('30', '27')} = 10 + 3 + 1 = 14.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Ignoring collinear corrections.</b> Writing ${C(n, '3')} for triangles or ${C(n, '2')} for lines without subtracting collinear cases. Always hunt for points/lines in special position.`,
          `<b>Incomplete prime factorisation.</b> The divisor formula needs every prime with its full exponent: a dropped prime silently divides your answer by (${ai} + 1).`,
          `<b>Permutation vs. arrangement-sum confusion.</b> In “sum of numbers formed,” students multiply by ${n}! instead of (${n} − 1)! (the count of times each digit sits in a fixed place). Remember: it’s (${n} − 1)!, not ${n}!.`,
          `<b>Derangement as factorial.</b> Treating “none in correct place” as a plain ${n}! or a single subtraction. Use the full alternating inclusion–exclusion sum, or the recurrence ${Dn} = (${n} − 1)(${sb('D', '<i>n</i>−1')} + ${sb('D', '<i>n</i>−2')}).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: recognise the costume.</b> Most application problems reduce to a one-line ${nCr} once you ask what is being chosen: points for shapes, exponents for divisors, positions for arrangements. Name the underlying selection first; the formula follows. For “at least one correct/none correct” flavours, reach straight for inclusion–exclusion.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `From ${n} points (no 3 collinear)`,
            note: `lines ${C(n, '2')}, triangles ${C(n, '3')}; subtract ${C(m, '2')} − 1 /<br>${C(m, '3')} for ${m} collinear`,
          },
          {
            f: `Convex ${n}-gon diagonals`,
            note: `${fr(`${n}(${n} − 3)`, '2')} | <b>rectangles from</b> <i>a</i> × <i>b</i> <b>lines:</b> ${C('<i>a</i>', '2')} ${C('<i>b</i>', '2')}`,
          },
          { f: `Divisors of ∏ ${pi}<sup><i>a</i>ᵢ</sup>`, note: `∏(${ai} + 1); <b>sum:</b> ∏ ${fr(`${pi}<sup><i>a</i>ᵢ+1</sup> − 1`, `${pi} − 1`)}` },
          { f: `Sum of all numbers (${n} distinct digits)`, note: `(∑ ${d})(${n} − 1)! ${REPUNIT}` },
          { f: 'Rank of word (distinct letters)', note: '∑(smaller unused letters) × (remaining)! + 1' },
          {
            f: 'Derangements',
            note: `${Dn} = ${n}! ∑<sub><i>i</i>=0</sub><sup><i>n</i></sup> ${fr('(−1)<sup><i>i</i></sup>', '<i>i</i>!')}; ${Dn} = (${n} − 1)(${sb('D', '<i>n</i>−1')} + ${sb('D', '<i>n</i>−2')}); ${sb('D', '4')} = 9, ${sb('D', '5')} = 44`,
          },
          { f: `Prime ${p} in ${n}!`, note: `∑<sub><i>k</i>≥1</sub>${FLOOR(n, '<i>p</i><sup><i>k</i></sup>')}; trailing zeros of ${n}! = ${sb('E', '5')}(${n}!)` },
        ],
        aids: ['“Shapes = choosing vertices.”', '“Divisor = pick an exponent per prime.”', '“None-correct ⇒ derangement ⇒ inclusion–exclusion.”'],
      },
    ],
  },
];
