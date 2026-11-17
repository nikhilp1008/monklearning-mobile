import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 01–02: the book's Subtopics 01–02, pp. 491–512 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 * pp. 490–491 top (title and contents) are not copied. Topic 01 runs
 * pp. 491–501, Topic 02 pp. 502–512; Subtopic 03 starts on p. 513. Each topic
 * opens with its "Exam Relevance:" box as a part of its own, then is split at
 * its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figures (each placed where the book prints its caption, "(see next page)"):
 * 6.1 (caption p. 492, drawn p. 493) after "Think about it this way…" in
 * Topic 01's Concept intuition; 6.2 (caption p. 495, drawn p. 496) in 3.1;
 * 6.3 (caption p. 504, drawn p. 505) in Topic 02's 3.1; 6.4 (caption p. 506,
 * drawn p. 507) under 3.4; 6.5 (caption p. 509, drawn p. 510) on Topic 02's
 * fourth worked example. Neither topic has an unnumbered drawing.
 * ⁿPᵣ and ⁿCᵣ are set with an italic P and C, as the page prints them.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const n = '<i>n</i>';
const r = '<i>r</i>';
const m = '<i>m</i>';
const p = '<i>p</i>';
const q = '<i>q</i>';
const s = '<i>s</i>';
const PR = (a: string, b: string) => `<sup>${a}</sup><i>P</i><sub>${b}</sub>`;
const CR = (a: string, b: string) => `<sup>${a}</sup><i>C</i><sub>${b}</sub>`;
const nPr = PR(n, r);
const nCr = CR(n, r);
const NR = `(${n} − ${r})!`;
const POW = `${n}<sup>${r}</sup>`;
const NPR_F = fr(`${n}!`, NR);
const ALIKE = fr(`${n}!`, `${p}! ${q}! ⋯`);
const CIRC2 = fr(`(${n} − 1)!`, '2');
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 491–501 ────────────────
  {
    n: '01',
    title: 'Fundamental Principle of Counting and Factorial',
    kalam: 'Factorial is simply the multiplication principle applied to a full arrangement.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the foundation the entire chapter stands on. JEE Main almost always hides 1 problem here ${ESTIMATE}, often disguised as a digit/number-formation question, and it silently powers every later P&C, Probability, and Binomial problem. JEE Advanced tests it through multi-constraint counting and complementary counting. CBSE Boards asks a direct 2–4 mark FPC or factorial-simplification question ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine you walk into a small thali restaurant near a railway station. The menu is simple: pick <b>one</b> sabzi (there are 4), <b>one</b> type of roti (there are 3), and <b>one</b> sweet (there are 2). The owner proudly says, “Sir, so many combinations are possible!”, and you, being a P&C student now, want to know exactly how many, without sitting and writing out every plate.',
      },
      {
        t: 'p',
        html: 'Here is the key realisation. For <b>every</b> choice of sabzi, you still have all 3 rotis available. And for every (sabzi, roti) pair, you still have both sweets. So the choices stack up by multiplying:<br>4 × 3 × 2 = 24 distinct thalis.',
      },
      {
        t: 'p',
        html: 'That single idea (<b>when you make a sequence of independent choices, you multiply the number of options at each stage</b>) is the <b>Multiplication Principle</b>, the heart of the Fundamental Principle of Counting (FPC). It lets us count enormous collections without listing them, which is the whole spirit of this chapter.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a tree growing left to right. From the root, 4 branches sprout (one per sabzi). From the tip of each of those, 3 more branches grow (the rotis). From each of those tips, 2 final twigs appear (the sweets). The number of leaves at the far right is the number of complete thalis, and counting leaves is just multiplying the branching factors: 4 × 3 × 2. The tree never lies.',
      },
      { t: 'fig', id: 'm11-06-fig-6.1' },
      {
        t: 'p',
        html: 'You might wonder: why not just list everything and count? Because the lists explode. A 4-wheel number lock with digits 0–9 has 10<sup>4</sup> = 10,000 settings; a 6-character password from letters and digits has over two billion. No human lists those. The genius of the FPC is that it hands you the size of a collection while you stay blissfully ignorant of its members: you count the leaves without ever walking the tree. That “count without listing” mindset is the single skill this entire chapter trains.',
      },
      {
        t: 'p',
        html: 'Now change the story. Suppose the owner instead says: “Today you may take <b>either</b> one of 4 sabzis <b>or</b> one of 2 sweets, but not both.” These are mutually exclusive options; you make a single choice from one pile or the other. Here you don’t multiply; you <b>add</b>: 4 + 2 = 6 ways. This is the <b>Addition Principle</b>.',
      },
      {
        t: 'p',
        html: 'The entire distinction lives in two tiny English words:<br>• <b>“AND” (do this and then that)</b> → the choices combine → <b>multiply</b>.<br>• <b>“OR” (do this or instead that)</b> → the choices are alternatives → <b>add</b>.<br>Burn that in: <b>AND multiplies, OR adds.</b>',
      },
      {
        t: 'p',
        html: 'Where does the <b>factorial</b> come in? Suppose you want to arrange 5 different trophies in a row on a shelf. The first position can be filled by any of 5 trophies, the next by any of the remaining 4, then 3, then 2, then the last 1, a pure multiplication-principle chain: 5 × 4 × 3 × 2 × 1 = 120. That descending product of natural numbers is so common that mathematicians gave it a shorthand: 5! = 120, read “5 factorial.” Factorial is simply the multiplication principle applied to a full arrangement.',
      },
      {
        t: 'p',
        html: `<b>Conditions & Assumptions (when this reasoning needs care):</b><br>• The multiplication principle assumes each stage’s count is <b>independent</b> of the specific earlier choices. If the number of options at a later stage changes depending on what you picked earlier, you must split into cases.<br>• The addition principle requires the options to be <b>mutually exclusive</b> (no overlap). If they can overlap, naive addition double-counts.<br>• Factorial ${n}! is defined only for <b>non-negative integers</b>. You cannot take the factorial of a negative number or a fraction at this level. And 0! = 1, not 0, a definition we will justify shortly, not just memorise.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Multiplication Principle (Fundamental Principle of Counting).</b> If a task is completed by performing stage 1 in ${m} ways <b>and</b> stage 2 in ${n} ways (stage 2’s count not depending on which option was chosen in stage 1), the whole task can be done in`,
      },
      {
        t: 'formula',
        kicker: 'Multiplication Principle (Fundamental Principle of Counting)',
        main: `${m} × ${n} ways.<br>any finite number of stages: ${m}<sub>1</sub> × ${m}<sub>2</sub> × ⋯ × ${m}<sub><i>k</i></sub>.`,
        legend: [
          `${m} = the number of ways for stage 1`,
          `${n} = the number of ways for stage 2 (the same for every stage-1 choice)`,
          `${m}<sub><i>i</i></sub> = the number of ways for stage <i>i</i>`,
          '<i>k</i> = the number of stages',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `This extends to any finite number of stages: ${m}<sub>1</sub> × ${m}<sub>2</sub> × ⋯ × ${m}<sub><i>k</i></sub>.`,
      },
      {
        t: 'p',
        html: `<b>Addition Principle.</b> If a task is completed by choosing <b>either</b> an option of type A (available in ${m} ways) <b>or</b> a mutually exclusive option of type B (available in ${n} ways), the number of ways is`,
      },
      {
        t: 'formula',
        kicker: 'Addition Principle',
        main: `${m} + ${n}.`,
        legend: [`${m} = the number of options of type A`, `${n} = the number of options of type B (no option of both types)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Factorial.</b> For a positive integer ${n}, the factorial of ${n} is the product of the first ${n} natural numbers:`,
      },
      {
        t: 'formula',
        kicker: 'Factorial',
        main: `${n}! = ${n} × (${n} − 1) × (${n} − 2) × ⋯ × 3 × 2 × 1 (${n} ≥ 1),<br>with the special definition: 0! = 1.`,
        legend: [`${n} = a non-negative integer (${n} ∈ ℤ, ${n} ≥ 0)`, `${n}! = “${n} factorial” (a pure count)`],
        note: null,
      },
      {
        t: 'p',
        html: `• ${n}: a <b>non-negative integer</b> (${n} ∈ ℤ, ${n} ≥ 0).<br>• ${n}!: read “${n} factorial”; it is a pure (dimensionless) count, so it carries <b>no units</b>.`,
      },
      {
        t: 'p',
        html: `<b>Counting with repetition allowed.</b> If ${r} slots are each filled independently from the same set of ${n} options (repetition permitted), the count is`,
      },
      {
        t: 'formula',
        kicker: 'Counting with repetition allowed',
        main: `${n} × ${n} × ⋯ × ${n} (${r} factors) = ${POW}.`,
        legend: [`${n} = the number of options for each slot`, `${r} = the number of slots`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Forward reference (formalised in Topic 02 / Topic 03).</b> Arranging ${r} distinct objects out of ${n} in order, without repetition, gives ${nPr} = ${NPR_F}; selecting ${r} out of ${n} ignoring order gives ${nCr} = ${fr(`${n}!`, `${r}!(${n} − ${r})!`)}.`,
      },
      {
        t: 'p',
        html: `<b>Conditions of validity & sanity-checks:</b><br>• Domain: ${n}! exists only for ${n} ∈ {0, 1, 2, 3, …}. Undefined for negatives and fractions here.<br>• Boundary values: 0! = 1, 1! = 1.<br>• Recursion (your most-used identity): ${n}! = ${n} · (${n} − 1)! for ${n} ≥ 1.<br>• Growth check: factorials explode: 5! = 120 but 10! = 3,628,800. If an exam answer comes out as, say, 20!, you <b>leave it as</b> 20! rather than computing it.`,
      },
      {
        t: 'p',
        html: '<b>One table to never confuse again.</b> Three structures recur all chapter; keep them straight:',
      },
      {
        t: 'table',
        title: null,
        head: ['Situation', `${r} slots, each from ${n} options`, 'Count'],
        rows: [
          ['Repetition <b>allowed</b>', `every slot sees all ${n}`, POW],
          ['Repetition <b>not allowed</b>, order matters', 'slots lose one option each', `${n}(${n} − 1) ⋯ (${n} − ${r} + 1) = ${nPr}`],
          [`Arrange <b>all</b> ${n} distinct objects`, `special case ${r} = ${n}`, `${n}!`],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'The FPC is a self-evident counting principle, not a theorem proved from deeper axioms, but we can still <b>justify it rigorously</b> and then derive the factorial and repetition formulas from it. That derivation is what an examiner rewards.',
      },
      { t: 'p', html: '<b>3.1: Why the multiplication principle is true (the box-filling argument).</b>' },
      { t: 'p', html: 'Think of the task as filling a sequence of boxes left to right.' },
      { t: 'fig', id: 'm11-06-fig-6.2' },
      {
        t: 'p',
        html: `Box 1 can be filled in ${m} ways. Fix any one of those ${m} choices. With that choice locked, Box 2 can still be filled in ${n} ways, and crucially, this ${n} is the same regardless of which Box-1 option we fixed (the independence assumption). So each of the ${m} Box-1 choices spawns exactly ${n} complete outcomes. Grouping the outcomes by their Box-1 choice gives ${m} groups of ${n} each, which is ${m} × ${n} outcomes: no overlaps, none missed. Extending box by box gives the general product.`,
      },
      { t: 'p', html: '<b>3.2: Why the addition principle is true.</b>' },
      {
        t: 'p',
        html: `If the outcomes split into two <b>disjoint</b> piles (one of size ${m}, one of size ${n}, with nothing belonging to both), then counting the union is just ${m} + ${n}. The disjointness is essential: if some outcome sat in both piles, it would be counted twice and we would need to subtract the overlap (this repair is the inclusion–exclusion idea you will meet later).`,
      },
      { t: 'p', html: `<b>3.3: Deriving the factorial from the FPC (arranging ${n} distinct objects).</b>` },
      { t: 'p', html: `<b>Claim:</b> The number of ways to arrange ${n} distinct objects in a row is ${n}!.` },
      {
        t: 'p',
        html: `<b>Reasoning:</b> Treat the ${n} positions as ${n} boxes.<br>• Position 1 can take any of the ${n} objects → ${n} ways.<br>• Position 2 can take any object except the one already placed → (${n} − 1) ways.<br>• Position 3 → (${n} − 2) ways, and so on.<br>• The last position has just 1 object left → 1 way.`,
      },
      {
        t: 'p',
        html: `By the multiplication principle, the total is<br>${n} × (${n} − 1) × (${n} − 2) × ⋯ × 2 × 1<br>= ${n}!.<br>So ${n}! is the answer to “in how many orders can ${n} distinct things be lined up?” That is the meaning to keep in your head, not the symbol.`,
      },
      { t: 'p', html: '<b>3.4: Why we define 0! = 1 (two independent justifications).</b>' },
      {
        t: 'p',
        html: `<b>Justification by recursion:</b> The identity ${n}! = ${n} · (${n} − 1)! should keep working at ${n} = 1:<br>1! = 1 · 0! ⟹ 1 = 1 · 0! ⟹ 0! = 1.`,
      },
      {
        t: 'p',
        html: `<b>Justification by meaning:</b> 0! should count the number of ways to arrange <b>zero</b> objects in a row. There is exactly <b>one</b> such arrangement: the empty arrangement (do nothing). So 0! = 1. Defining it as anything else would break both the recursion and every later formula (e.g. ${CR(n, n)} = ${fr(`${n}!`, `${n}!0!`)} must equal 1).`,
      },
      { t: 'p', html: `<b>3.5: Deriving the repetition count ${POW}.</b>` },
      {
        t: 'p',
        html: `If ${r} slots are filled, each independently from ${n} options with repetition allowed, then every slot sees the full ${n} options regardless of earlier choices. The multiplication principle gives ${n} × ${n} × ⋯ (${r} times) = ${POW}. Notice the contrast with the factorial-style falling product, where each new slot loses one option: repetition vs. no-repetition is the single most important fork in this whole chapter.`,
      },
      { t: 'p', html: '<b>3.6: When independence fails: split into cases.</b>' },
      {
        t: 'p',
        html: 'The multiplication principle’s fine print, that a later stage’s count must not depend on which earlier option was picked, is exactly where Advanced problems set traps. Watch it break.',
      },
      {
        t: 'p',
        html: '<b>Problem:</b> How many 3-digit numbers (no leading zero, all digits distinct) can be formed from {0, 1, 2, 3}?',
      },
      {
        t: 'p',
        html: 'A reflex answer of “4 × 3 × 2 = 24” is wrong, because the first slot cannot use 0 while later slots can; the clean symmetry is gone. Handle it by <b>fixing the constrained slot first</b>: slot 1 in 3 ways (digits 1, 2, 3), then slots 2 and 3 draw from the 3 remaining digits (which now include 0) in 3 × 2 = 6 ways, giving 3 × 6 = 18. The lesson generalises: <b>when a stage’s options depend on earlier choices, either reorder so the constrained stage comes first, or break the problem into disjoint cases and add them</b> (addition principle). Casework plus the FPC together handle a great many of the counting problems you will meet.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (clean multiplication principle)',
        q: 'A school issues ID codes of the form: one letter (A–Z) followed by three digits (0–9), and repetition of digits is allowed. How many distinct ID codes are possible?',
        steps: [
          'We fill four slots in order:<br>• Slot 1 (letter): 26 ways.<br>• Slots 2, 3, 4 (digits, repetition allowed): 10 ways each.',
          'By the Fundamental Principle of Counting,<br>Total = 26 × 10 × 10 × 10<br>= 26 × 1000 = 26,000 codes.',
          '(Note the clean structure: identify slots → count each slot’s options → multiply → state the count.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (AND vs OR)',
        q: 'A canteen lets you order breakfast in one of two ways: take a single ready plate (there are 3 ready plates), <b>or</b> build a combo of one paratha (4 types) <b>and</b> one chutney (5 types). How many distinct breakfast orders are possible?',
        steps: [
          'Spot the two English signals.<br>• The ready plate is <b>one</b> of 3: that’s 3 ways.<br>• The combo is “paratha <b>AND</b> chutney”: multiply → 4 × 5 = 20 ways.<br>• The overall order is “ready plate <b>OR</b> combo”: these are mutually exclusive, so add → 3 + 20 = 23 ways.',
          '<b>The traps it’s built to catch:</b> A panicking student multiplies everything (3 × 4 × 5 = 60) or adds everything (3 + 4 + 5 = 12). Both are wrong because they ignore the AND/OR structure. The fix is mechanical: <b>bracket each “AND” group with ×, then join independent alternatives with +.</b>',
        ],
        ans: '3 + 4 × 5 = 23.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (FPC + place-value + a parity constraint)',
        q: 'How many 4-digit numbers are even? (Repetition of digits is allowed.)',
        steps: [
          'A 4-digit number cannot start with 0. We fill the thousands, hundreds, tens, units in turn, but it pays to handle the <b>most constrained slots first</b>: here the first digit (no zero) and the last digit (must be even).<br>• Thousands place: any of 1–9 → 9 ways.<br>• Units place (even, so from {0, 2, 4, 6, 8}): 5 ways.<br>• Hundreds place: any of 0–9 → 10 ways.<br>• Tens place: any of 0–9 → 10 ways.',
          'These constraints are independent, so multiply:<br>9 × 10 × 10 × 5 = 4500 even 4-digit numbers.',
          '(Two ideas combined: the leading-zero restriction <b>and</b> the parity restriction, stitched together by the FPC.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (complementary counting done carefully)',
        q: 'How many 5-digit numbers contain the digit 9 at least once? (No leading zero; repetition allowed.)',
        steps: [
          '“At least one 9” is awkward to count directly: you’d have to add the cases of exactly one, two, three, four, or five nines, watching for overcounting. The clean route is the <b>complement</b>:<br>#(at least one 9)<br>= #(all 5-digit numbers)<br>− #(5-digit numbers with no 9).',
          '<b>Total 5-digit numbers:</b> first digit from 1–9 (9 ways), the other four from 0–9 (10 each):<br>9 × 10<sup>4</sup> = 90,000.',
          '<b>5-digit numbers with no 9 anywhere:</b> first digit from {1, …, 8}, that is 8 ways (we drop both 0 for the leading rule and 9 for the no-nine rule); each remaining digit from {0, …, 8}, 9 ways:<br>8 × 9<sup>4</sup> = 8 × 6561 = 52,488.',
          '<b>Therefore:</b><br>90,000 − 52,488 = 37,512.',
          '<b>Why this is the rigorous move:</b> the leading digit obeys two exclusions at once (≠ 0 and ≠ 9, giving 8), while interior digits obey only one (≠ 9, giving 9). Mixing those up is the classic Advanced-level slip. Complementary counting also dodges the inclusion–exclusion bookkeeping that direct counting would force.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A boutique stocks 4 kurtas, 3 leggings, and 2 dupattas, all distinct. How many distinct three-piece outfits (one of each) can be assembled?',
            a: '24',
          },
          {
            q: `[CBSE] Find the positive integer ${n} such that (${n} + 1)! = 12 × (${n} − 1)!.`,
            a: `${n} = 3`,
          },
          {
            q: '[JEE Main] How many 3-digit numbers (no leading zero, repetition allowed) are divisible by 5?',
            a: '180',
          },
          {
            q: '[JEE Main] A password is exactly 4 characters long, each character chosen from the 26 uppercase letters and the 10 digits (36 symbols, repetition allowed). How many passwords contain <b>at least one digit</b>?',
            a: '36<sup>4</sup> − 26<sup>4</sup> = 1,222,640',
          },
          {
            q: '[JEE Advanced] How many 6-digit numbers (no leading zero) have <b>no two adjacent digits equal</b>?',
            a: '9 × 9<sup>5</sup> = 9<sup>6</sup> = 531,441',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A combination lock has 3 dials, each showing digits 0–9. How many distinct codes are possible?',
        opts: [
          {
            label: '30',
            nudge: '<b>(A)</b> 30 comes from adding (10 + 10 + 10): treating dials as OR-alternatives instead of an AND-sequence.',
          },
          {
            label: '720',
            nudge: '<b>(B)</b> 720 is 10 × 9 × 8: wrongly assuming digits cannot repeat. On a lock they certainly can.',
          },
          {
            label: '999',
            nudge: '<b>(C)</b> 999 is the off-by-one trap: codes run from 000 to 999, which is 1000 values, not 999.',
          },
          { label: '1000', nudge: null },
        ],
        correct: 3,
        solution: 'Each dial is filled independently from 10 digits with repetition allowed, so 10 × 10 × 10 = 1000.',
      },
      {
        t: 'mcq',
        q: 'A student must submit one project. They may choose <b>either</b> one of 3 ready-made topics <b>or</b> design a custom topic by pairing one theme (2 available) with one method (4 available). In how many ways can the project be chosen?',
        opts: [
          {
            label: '9',
            nudge: '<b>(A)</b> 9 adds everything blindly (3 + 2 + 4), ignoring that theme and method form an AND-pair.',
          },
          { label: '11', nudge: null },
          { label: '14', nudge: '<b>(C)</b> 14 comes from (3 + 4) × 2, applying the OR before the AND.' },
          {
            label: '24',
            nudge: '<b>(D)</b> 24 multiplies everything (3 × 2 × 4), forcing an OR-structure into a product.',
          },
        ],
        correct: 1,
        solution: 'Ready-made: 3 ways. Custom (theme <b>AND</b> method): 2 × 4 = 8. The two routes are mutually exclusive, so add: 3 + 8 = 11.',
      },
      {
        t: 'mcq',
        q: `If ${fr(`${n}!`, `(${n} − 3)!`)} = 120, then ${n} =`,
        opts: [
          {
            label: '5',
            nudge: `<b>(A)</b> 5 is the headline trap: the student notices 5! = 120 and blurts ${n} = 5, but ${fr(`${n}!`, `(${n} − 3)!`)} is a product of 3 terms, not ${n}!.`,
          },
          { label: '6', nudge: null },
          {
            label: '8',
            nudge: '<b>(C)</b> 8 is a guess made without expanding the falling product: 8 · 7 · 6 = 336, not 120.',
          },
          {
            label: '10',
            nudge: '<b>(D)</b> 10 is a guess made without expanding the falling product: 10 · 9 · 8 = 720, not 120.',
          },
        ],
        correct: 1,
        solution: `Using ${fr(`${n}!`, `(${n} − 3)!`)} = ${n}(${n} − 1)(${n} − 2), we need three consecutive integers multiplying to 120: 6 × 5 × 4 = 120, so ${n} = 6.`,
      },
      {
        t: 'mcq',
        q: 'How many 3-letter codes can be formed from the letters {<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>, <i>E</i>} (repetition allowed) that contain <b>at least one vowel</b> (vowels are <i>A</i>, <i>E</i>)?',
        opts: [
          {
            label: '27',
            nudge: '<b>(A)</b> 27 is the consonant-only count: the student found the complement but forgot to subtract it from the total.',
          },
          {
            label: '50',
            nudge: '<b>(B)</b> 50 counts only codes whose first letter is a vowel (2 × 5 × 5), missing codes where the vowel sits in slot 2 or 3.',
          },
          { label: '75', nudge: '<b>(C)</b> 75 is 125 − 50, compounding the slot-1-only error.' },
          { label: '98', nudge: null },
        ],
        correct: 3,
        solution: 'Total codes: 5<sup>3</sup> = 125. Codes with <b>no</b> vowel (only <i>B</i>, <i>C</i>, <i>D</i>): 3<sup>3</sup> = 27. At least one vowel = 125 − 27 = 98.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing AND with OR.</b> The single most frequent error: multiplying mutually-exclusive alternatives or adding sequential stages. Always translate the problem into AND/OR first, then assign ×/+.',
          `<b>Assuming “no repetition” by default.</b> Many students reflexively write falling products (${n}, ${n} − 1, ${n} − 2, …). Read the problem: locks, number plates, and passwords usually <b>allow</b> repetition (${POW}); seating distinct people does not. The fork between ${POW} and the falling product decides everything.`,
          '<b>Forgetting boundary constraints.</b> In digit problems, the leading digit usually cannot be 0, and a digit may face two exclusions at once (e.g. “≠ 0 and ≠ 9” leaves 8 options, not 9). Slot the most-constrained position first.',
          '<b>Mishandling 0!.</b> 0! = 1, never 0. Treating it as 0 collapses later combination formulas to nonsense (division by zero or zero counts).',
          '<b>Adding overlapping “OR” cases.</b> The addition principle needs the cases to be mutually exclusive. If your two piles share members (e.g. “numbers divisible by 2 OR by 3”), naive addition double-counts the overlap, and you must subtract it back: the seed of inclusion–exclusion.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: “at least one” means complement.</b> Whenever you see “at least one,” resist direct casework. Compute total − none. It converts a messy sum of cases into two clean FPC products almost every time.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Multiplication Principle (AND)', note: `stages combine → ${m} × ${n} × ⋯` },
          { f: 'Addition Principle (OR, mutually exclusive)', note: `alternatives → ${m} + ${n}` },
          { f: 'Translate first', note: 'AND → multiply, OR → add.' },
          { f: 'Factorial', note: `${n}! = ${n}(${n} − 1)(${n} − 2) ⋯ 2 · 1, with 0! = 1` },
          { f: 'Recursion (use constantly)', note: `${n}! = ${n} · (${n} − 1)!` },
          { f: 'Domain', note: `${n}! defined only for non-negative integers; undefined for negatives/fractions at this level.` },
          { f: `With repetition (${r} slots, ${n} options each)`, note: POW },
          { f: 'Without repetition / full arrangement', note: `falling product → ${nPr} = ${NPR_F} (Topic 02)` },
          { f: '“At least one” → complement', note: '#(at least one) = Total − #(none)' },
        ],
        aids: ['“AND multiply, OR add.”', `“Repetition ⇒ powers (${POW}); no repetition ⇒ falling product.”`],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 502–512 ────────────────
  {
    n: '02',
    title: 'Permutations',
    kalam: 'A permutation is just a special, supremely common kind of counting: arranging objects in a definite order.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A heavyweight topic. JEE Main reliably carries 1–2 questions (word arrangements, digit-formation, restricted seating) ${ESTIMATE}; CBSE Boards asks the ${nPr} derivation, alike-object counts, and 2–4 mark applications ${ESTIMATE}; JEE Advanced pushes into restricted and circular permutations with layered constraints. Master this and Probability becomes far easier downstream.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In the previous topic you learned to count outcomes with the multiplication principle. A <b>permutation</b> is just a special, supremely common kind of counting: <b>arranging objects in a definite order</b>. The defining feature, the one word you must tattoo on your brain, is <b>order matters</b>.',
      },
      {
        t: 'p',
        html: 'Picture the medal ceremony after a 100 m final. Three athletes finish on the podium: gold, silver, bronze. If Ravi–Meera–Sara take the three medals, that is a different outcome from Meera–Ravi–Sara, even though the same three people are involved. The positions are distinguishable. That is the soul of a permutation: rearranging the same objects produces a brand-new arrangement.',
      },
      {
        t: 'p',
        html: 'Contrast that with picking 3 students to form a study group. Here Ravi–Meera–Sara is the same group as Meera–Ravi–Sara: order is irrelevant. That second kind of counting is a combination, the subject of Topic 03. Right now, hold onto the difference: <b>permutation = positions; combination = committee.</b>',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> imagine ${r} empty chairs in a row and a crowd of ${n} distinct people. Chair 1 can be taken by any of the ${n} people. Once someone sits, chair 2 has only ${n} − 1 candidates left, chair 3 has ${n} − 2, and so on. By the Fundamental Principle of Counting (which you already trust from Topic 01), the chairs fill in<br>${n} × (${n} − 1) × (${n} − 2)<br>× ⋯ × (${n} − ${r} + 1)<br>ways. That descending product is exactly what we will package as ${nPr}.`,
      },
      {
        t: 'p',
        html: 'To see it concretely with tiny numbers, list every arrangement of the three letters <i>A</i>, <i>B</i>, <i>C</i> taken all at a time: <i>ABC</i>, <i>ACB</i>, <i>BAC</i>, <i>BCA</i>, <i>CAB</i>, <i>CBA</i>; exactly 6 = 3! of them, and not one is a repeat. Notice that <i>ABC</i> and <i>ACB</i> are counted separately: the same three letters in a different order are a different permutation. If instead we had only asked “which three letters did you pick?”, all six would collapse into a single answer, and that collapse is precisely the gap between a permutation and a combination. Holding that distinction firmly now will save you from the single most common error in the entire chapter.',
      },
      {
        t: 'p',
        html: `Permutations come in a few important flavours, and recognising which one you’re in is half the battle:<br>1. <b>All objects distinct, no repetition</b>: the medal-podium case, where each object is used at most once and every position is genuinely different. Counted by ${nPr}.<br>2. <b>Repetition allowed</b>: like number-plate digits or a PIN, where the same digit can reappear in several slots. Here every slot sees all ${n} options afresh, giving ${POW} (this is the FPC result from Topic 01, now living inside permutations).<br>3. <b>Some objects identical</b>: arranging the letters of a word like SAMOSA, where the two S’s are interchangeable. Swapping the two S’s doesn’t create a new word, so we must divide out that redundancy and the plain ${nPr} no longer applies.<br>4. <b>Arranged in a circle</b>: guests around a round dining table, where rotating everyone one seat over gives the same arrangement. The circle quietly removes one degree of freedom, which is why, for two or more objects, its count is smaller than the linear one.`,
      },
      {
        t: 'p',
        html: `<b>Conditions & Assumptions (when to be careful):</b><br>• The clean ${nPr} formula assumes the objects are <b>all distinct</b> and <b>repetition is not allowed</b>. The moment repetition is permitted, switch to ${POW}; the moment objects repeat, switch to the alike-objects formula.<br>• ${nPr} requires 0 ≤ ${r} ≤ ${n}. You cannot arrange more objects than you have.<br>• The circular count (${n} − 1)! applies to genuinely rotatable arrangements; a row of chairs bolted to the floor is still linear even if curved.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: `<b>Permutation of ${n} distinct objects, taken ${r} at a time (no repetition):</b>` },
      {
        t: 'formula',
        kicker: `Permutation of ${n} distinct objects, taken ${r} at a time`,
        main: `${nPr} = ${n}(${n} − 1)(${n} − 2) ⋯ (${n} − ${r} + 1)<br>= ${NPR_F}, 0 ≤ ${r} ≤ ${n}.`,
        legend: [
          `${n} = total number of distinct available objects`,
          `${r} = number of positions to be filled`,
          `${nPr} = a pure count (dimensionless)`,
        ],
        note: null,
      },
      { t: 'p', html: '<b>Useful special cases:</b>' },
      {
        t: 'formula',
        kicker: `Useful special cases of ${nPr}`,
        main: `${PR(n, n)} = ${n}!<br>${PR(n, '0')} = 1<br>${PR(n, '1')} = ${n}.`,
        legend: [`${n} = total number of distinct available objects`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Repetition allowed</b> (${r} slots, each from ${n} options): ${n} × ${n} × ⋯ × ${n} (${r} factors) = ${POW}.`,
      },
      {
        t: 'p',
        html: `<b>Permutations of ${n} objects, not all distinct</b> (with ${p} alike of one kind, ${q} alike of another, ${s} alike of a third, and ${p} + ${q} + ${s} + ⋯ = ${n}):`,
      },
      {
        t: 'formula',
        kicker: `Permutations of ${n} objects, not all distinct`,
        main: `${fr(`${n}!`, `${p}! ${q}! ${s}! ⋯`)}.`,
        legend: [`${n} = the total number of objects`, `${p}, ${q}, ${s} = the sizes of the groups of alike objects (${p} + ${q} + ${s} + ⋯ = ${n}, a single distinct object counting as a group of 1)`],
        note: null,
      },
      { t: 'p', html: `<b>Circular permutations of ${n} distinct objects (all at a time):</b>` },
      {
        t: 'formula',
        kicker: `Circular permutations of ${n} distinct objects`,
        main: `(${n} − 1)!`,
        legend: [`${n} = the number of distinct objects`],
        note: null,
      },
      {
        t: 'p',
        html: 'and if clockwise and anticlockwise arrangements are regarded as identical (necklaces, garlands, bracelets, key-rings):',
      },
      {
        t: 'formula',
        kicker: 'Circular permutations, clockwise and anticlockwise identical',
        main: `${CIRC2}.`,
        legend: [`${n} = the number of distinct objects (${n} ≥ 3)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Conditions of validity & sanity-checks:</b><br>• ${nPr} is always a positive integer for 0 ≤ ${r} ≤ ${n}; if your “permutation count” comes out fractional, you’ve erred.<br>• Bridge to combinations (Topic 03): ${nPr} = ${r}! · ${nCr}, since arranging equals selecting then ordering. This single identity ties the two halves of the chapter together.<br>• Boundary check: ${PR(n, '0')} = 1 (one way to arrange nothing: the empty arrangement), consistent with 0! = 1 from Topic 01.<br>• Monotonicity check: for fixed ${n}, ${nPr} never decreases as ${r} grows; a larger answer for fewer positions signals a mistake.`,
      },

      { t: 'part', title: 'CBSE board proofs / key procedures' },
      { t: 'p', html: `<b>3.1: Deriving ${nPr} from the Fundamental Principle of Counting.</b>` },
      {
        t: 'p',
        html: `We want the number of ways to fill ${r} ordered positions using ${n} distinct objects, no repetition.`,
      },
      { t: 'fig', id: 'm11-06-fig-6.3' },
      {
        t: 'p',
        html: `• Position 1: any of the ${n} objects → ${n} ways.<br>• Position 2: any object except the one already used → (${n} − 1) ways.<br>• Position 3: (${n} − 2) ways, and so on.<br>• Position ${r}: by now (${r} − 1) objects are used, so ${n} − (${r} − 1) = (${n} − ${r} + 1) ways.`,
      },
      {
        t: 'p',
        html: `By the multiplication principle,<br>${nPr} = ${n}(${n} − 1)(${n} − 2) ⋯ (${n} − ${r} + 1).<br>To compress this, multiply and divide by the “missing tail” (${n} − ${r})(${n} − ${r} − 1) ⋯ 2 · 1 = ${NR}:<br>${nPr} = ${fr(`${n}(${n} − 1) ⋯ (${n} − ${r} + 1) · ${NR}`, NR)}<br>= ${NPR_F}. ■`,
      },
      { t: 'p', html: '<b>3.2: Deriving the alike-objects formula.</b>' },
      {
        t: 'p',
        html: `<b>Claim:</b> ${n} objects with ${p} identical of one type (the rest distinct) arrange in ${fr(`${n}!`, `${p}!`)} distinct ways.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning (the over-counting argument):</b> Pretend, for a moment, that the ${p} identical objects are secretly labelled and therefore all distinct. Then there are ${n}! arrangements. But in reality those ${p} labels are invisible: the ${p} identical objects can be permuted among themselves in ${p}! ways without changing the visible arrangement. So every genuinely-distinct arrangement has been counted ${p}! times. Dividing removes the redundancy:<br>Distinct arrangements = ${fr(`${n}!`, `${p}!`)}.`,
      },
      {
        t: 'p',
        html: `With several repeated groups (${p} of one kind, ${q} of another, …), each group contributes its own over-count, giving ${ALIKE}. The mental model: <b>start from ${n}!, then quotient out every group of look-alikes.</b>`,
      },
      { t: 'p', html: `<b>3.3: Deriving the circular formula (${n} − 1)!.</b>` },
      {
        t: 'p',
        html: `<b>Reasoning:</b> Take any one circular arrangement of ${n} distinct objects. Reading it off starting from each of the ${n} objects produces ${n} different linear arrangements, yet they all correspond to the same circle (rotating the table doesn’t reseat anyone). So each circular arrangement maps to exactly ${n} linear ones. Since there are ${n}! linear arrangements in total,<br>Circular arrangements = ${fr(`${n}!`, n)} = (${n} − 1)!.`,
      },
      {
        t: 'p',
        html: `If, in addition, a mirror flip is considered identical (a necklace turned over), each circle of three or more objects is double-counted (it and its mirror image are two different circles), so we divide by a further 2: ${CIRC2}.`,
      },
      {
        t: 'p',
        html: '<b>Concrete check:</b> seat 3 friends <i>X</i>, <i>Y</i>, <i>Z</i> around a round table. The formula predicts (3 − 1)! = 2 distinct arrangements. Indeed, fixing <i>X</i> at the top, the only genuinely different circles are “<i>Y</i> on <i>X</i>’s left, <i>Z</i> on the right” and its mirror “<i>Z</i> on the left, <i>Y</i> on the right”: exactly 2. Every other seating you can write down is just one of these two rotated around the table.',
      },
      { t: 'p', html: '<b>3.4: Procedure: restricted permutations (the three reflexes).</b>' },
      { t: 'fig', id: 'm11-06-fig-6.4' },
      {
        t: 'p',
        html: `• <b>“Must be together”:</b> glue the must-stay-together objects into a single <b>block</b>, arrange the block among the others, then multiply by the internal arrangements of the block. (If the block holds <i>k</i> distinct objects, multiply by <i>k</i>!.) <b>Quick illustration:</b> arrange <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>, <i>E</i> in a row with <i>A</i> and <i>B</i> together. Glue them as (<i>AB</i>), giving 4 units to arrange in 4! = 24 ways; the block itself flips in 2! = 2 ways; total 24 × 2 = 48.<br>• <b>“Must not be together” (no two of them side by side):</b> arrange the other objects first; they create gaps (including the two ends); then drop the restricted objects into those gaps, one per gap, using ${nPr} on the gaps (${n} gaps, ${r} restricted objects). <b>Quick illustration:</b> for the same five letters with <i>A</i> and <i>B</i> apart, seat <i>C</i>, <i>D</i>, <i>E</i> first (3! = 6 ways), creating 4 gaps _ <i>C</i> _ <i>D</i> _ <i>E</i> _ ; place <i>A</i>, <i>B</i> into 2 of those 4 gaps in ${PR('4', '2')} = 12 ways; total 6 × 12 = 72. (Sanity check: 48 + 72 = 120 = 5!, the unrestricted total: together and not-together must partition everything.) With three or more restricted objects, “not all together” is a different question: count it as Total − (all together).<br>• <b>“Fixed position”:</b> lock the constrained object(s) in place first, then freely permute whatever remains.`,
      },
      { t: 'p', html: `<b>3.5: The bridge to combinations: ${nPr} = ${r}! · ${nCr}.</b>` },
      {
        t: 'p',
        html: `This identity is worth deriving once, because it unifies the whole chapter. To arrange ${r} objects out of ${n}, you can think of it as a two-stage job: first <b>select</b> which ${r} objects to use (that is ${nCr} ways, the Topic 03 quantity), then <b>order</b> those chosen ${r} objects among themselves (that is ${r}! ways). By the multiplication principle,`,
      },
      {
        t: 'p',
        html: `${nPr} = ${nCr} × ${r}! ⟹ ${nCr} = ${fr(nPr, `${r}!`)}.`,
      },
      {
        t: 'p',
        html: `Read it as: a permutation is a combination that has been put in order. Every time you feel unsure whether a problem wants <i>P</i> or <i>C</i>, ask whether the final ordering is part of what you’re counting: if it is, you’re paying the extra ${r}!.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (nPr, order matters)',
        q: 'A club has 8 members. In how many ways can the distinct posts of President, Secretary, and Treasurer be filled (no member holds two posts)?',
        steps: [
          `Three distinct posts → order matters → this is ${PR('8', '3')}:<br>${PR('8', '3')} = ${fr('8!', '(8 − 3)!')} = ${fr('8!', '5!')}<br>= 8 × 7 × 6 = 336.`,
        ],
        ans: 'There are 336 ways.',
      },
      {
        t: 'ex',
        tag: 'Conceptual Trap (alike objects)',
        q: 'How many distinct arrangements can be made of all the letters of the word <b>SAMOSA</b>?',
        steps: [
          'First, count the letters and spot the repeats: S, A, M, O, S, A; that’s 6 letters, with <b>S appearing twice</b> and <b>A appearing twice</b> (M and O once each).',
          `If all six letters were distinct, the answer would be 6! = 720. But the two S’s are interchangeable (so divide by 2!) and the two A’s are interchangeable (divide by another 2!):<br>${fr('6!', '2! 2!')} = ${fr('720', '4')} = 180.`,
          '<b>The trap:</b> a hurried student writes 6! = 720, forgetting that swapping the identical letters produces no new word. Always scan for repeats before reaching for a factorial.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (nPr + a parity constraint)',
        q: 'Using the digits 1, 2, 3, 4, 5 without repetition, how many 4-digit even numbers can be formed?',
        steps: [
          `“Even” pins down the <b>units place</b>: handle the most constrained slot first.<br>• Units digit must be even → from {2, 4} → 2 choices.<br>• The remaining three positions (thousands, hundreds, tens) are filled from the 4 unused digits, order mattering: ${PR('4', '3')} = 4 × 3 × 2 = 24.`,
          'By the multiplication principle:<br>2 × 24 = 48 even 4-digit numbers.',
          `(Two ideas stitched together: the parity restriction fixes one slot, and ${nPr} arranges the rest.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (circular + gap method)',
        fig: 'm11-06-fig-6.5',
        q: 'In how many ways can 5 boys and 3 girls be seated around a circular table so that no two girls sit next to each other?',
        steps: [
          'Build the arrangement in the order that respects the constraint.',
          '<b>Step 1: seat the boys first (circular).</b> The 5 boys around the table:<br>(5 − 1)! = 4! = 24 ways.',
          '<b>Step 2: identify the gaps.</b> Five seated boys create 5 gaps between consecutive boys.',
          `<b>Step 3: place the girls in distinct gaps.</b> To keep girls apart, each girl goes into a separate gap. Choosing and ordering 3 girls into 5 gaps:<br>${PR('5', '3')} = 5 × 4 × 3 = 60 ways.`,
          '<b>Total (multiplication principle):</b><br>24 × 60 = 1440.',
          '<b>Why “boys first” is the rigorous move:</b> seating the constrained group (girls) directly would tangle the no-adjacency condition into the circular count. Anchoring the unconstrained group first turns the restriction into a clean gap-filling step: the circular analogue of the linear gap method.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In how many ways can 4 different books be arranged on a shelf, chosen from a collection of 9 different books?',
            a: `${PR('9', '4')} = 3024`,
          },
          {
            q: '[CBSE] Find the number of distinct arrangements of all the letters of the word <b>KOLKATA</b>.',
            a: `${fr('7!', '2! 2!')} = 1260`,
          },
          {
            q: '[JEE Main] Using the digits 1, 2, 3, 4, 5, 6 without repetition, how many 6-digit numbers can be formed in which the digits 1 and 2 are <b>never adjacent</b>?',
            a: '6! − 5! · 2! = 480',
          },
          {
            q: '[JEE Main] How many 4-letter codes (from the 26 English letters, no repetition) <b>begin and end with a vowel</b> (vowels: <i>a</i>, <i>e</i>, <i>i</i>, <i>o</i>, <i>u</i>)?',
            a: `${PR('5', '2')} × ${PR('24', '2')} = 20 × 552 = 11040`,
          },
          {
            q: '[JEE Advanced] In how many ways can 7 people be seated around a circular table if 3 specified people insist on sitting <b>together</b>?',
            a: '(5 − 1)! × 3! = 24 × 6 = 144',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Using the digits 1, 2, 3, 4, 5, 6, how many 3-digit numbers can be formed <b>if repetition is not allowed</b>?',
        opts: [
          { label: '18', nudge: '<b>(A)</b> 18 is 6 × 3: a meaningless mix of “objects” and “slots.”' },
          { label: '120', nudge: null },
          {
            label: '216',
            nudge: `<b>(C)</b> 216 is 6<sup>3</sup>: the repetition-allowed count. The classic fork error: applying ${POW} when the problem forbids repetition.`,
          },
          { label: '729', nudge: '<b>(D)</b> 729 is 9<sup>3</sup>: all nine digits 1 to 9 with repetition, but only the six digits 1 to 6 are offered and none may repeat.' },
        ],
        correct: 1,
        solution: `Order matters and no repetition → ${PR('6', '3')} = 6 × 5 × 4 = 120.`,
      },
      {
        t: 'mcq',
        q: 'The number of distinct arrangements of all the letters of the word <b>GANGA</b> is',
        opts: [
          { label: '20', nudge: `<b>(A)</b> 20 is ${fr('5!', '3!')}: it divides by 3! as if three letters were alike, but GANGA has two G’s and two A’s.` },
          { label: '30', nudge: null },
          {
            label: '60',
            nudge: '<b>(C)</b> 60 divides by only one 2!: catches the G’s but forgets the A’s (or vice versa).',
          },
          { label: '120', nudge: '<b>(D)</b> 120 is 5!: ignores both repeats.' },
        ],
        correct: 1,
        solution: `GANGA has 5 letters with G twice and A twice: ${fr('5!', '2! 2!')} = ${fr('120', '4')} = 30.`,
      },
      {
        t: 'mcq',
        q: 'In how many distinct ways can 5 different keys be arranged on a circular key-ring?',
        opts: [
          { label: '12', nudge: null },
          {
            label: '24',
            nudge: '<b>(B)</b> 24 is (5 − 1)!: correct for a fixed round table, but forgets that a ring flips (the signature necklace/bracelet trap).',
          },
          {
            label: '60',
            nudge: `<b>(C)</b> 60 is ${fr('5!', '2')}: it makes the flip correction (÷2) but not the rotation correction (÷5).`,
          },
          { label: '120', nudge: '<b>(D)</b> 120 is 5!: treats the ring as a straight line.' },
        ],
        correct: 0,
        solution: `A key-ring can be <b>flipped over</b>, so clockwise and anticlockwise arrangements are identical: ${fr('(5 − 1)!', '2')} = ${fr('24', '2')} = 12.`,
      },
      {
        t: 'mcq',
        q: `If ${PR(n, '3')} = 2 · ${PR(n, '2')}, then ${n} =`,
        opts: [
          { label: '4', nudge: null },
          {
            label: '5',
            nudge: `<b>(B)</b> 5 typically results from an arithmetic slip when cancelling, e.g. solving ${n} − 2 = 3.`,
          },
          {
            label: '6',
            nudge: `<b>(C)</b> 6 is a guess made without expanding the falling products: ${PR('6', '3')} = 120 but 2 · ${PR('6', '2')} = 60.`,
          },
          {
            label: '8',
            nudge: `<b>(D)</b> 8 is a guess made without expanding the falling products: ${PR('8', '3')} = 336 but 2 · ${PR('8', '2')} = 112.`,
          },
        ],
        correct: 0,
        solution: `Write each side as a falling product: ${n}(${n} − 1)(${n} − 2) = 2${n}(${n} − 1). Cancelling ${n}(${n} − 1) (nonzero) gives ${n} − 2 = 2, so ${n} = 4. <b>Check:</b> ${PR('4', '3')} = 24 and 2 · ${PR('4', '2')} = 2 × 12 = 24. ✓`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Order confusion (the big one).</b> Using ${nPr} when order does not matter (it should be ${nCr}, Topic 03). Test yourself: “If I swap two chosen objects, is it a new outcome?” Yes → permutation; No → combination.`,
          `<b>Forgetting to divide for alike objects.</b> Writing ${n}! for a word with repeated letters. Always scan for repeats and quotient them out.`,
          `<b>Circular slips.</b> Using ${n}! instead of (${n} − 1)! for a round arrangement, or forgetting the extra ÷2 for necklaces/bracelets/key-rings that can be flipped.`,
          `<b>Repetition fork.</b> Defaulting to ${nPr} when the problem allows repetition: that case is ${POW}, not a falling product.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the two restriction reflexes.</b> For <b>“together,”</b> glue the group into one block, arrange, then multiply by the block’s internal arrangements. For <b>“no two together,”</b> seat everyone else first and drop the restricted items into the gaps. And on a circle, <b>fix one object</b> to kill the rotational symmetry: the problem instantly collapses to a familiar linear one on the remaining (${n} − 1) objects.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: 'arrangement where <b>order matters</b>. Permutation = Position.' },
          { f: `No repetition, ${r} of ${n}`, note: `${nPr} = ${NPR_F} (${PR(n, n)} = ${n}!, ${PR(n, '0')} = 1)` },
          { f: 'Repetition allowed', note: POW },
          { f: `Not all distinct (${p}, ${q}, … alike)`, note: `${ALIKE}: start from ${n}!, divide out the look-alikes.` },
          { f: `Circular (all ${n})`, note: `(${n} − 1)! | flippable (necklace/ring, ${n} ≥ 3): ${CIRC2}` },
          { f: 'Bridge to combinations', note: `${nPr} = ${r}! · ${nCr}` },
          {
            f: 'Restrictions',
            note: 'together → block (× internal); no two together → gap method; circle → fix one to go linear.',
          },
        ],
        aids: ['“Order matters ⇒ Permutation.”', '“Repeats? Divide them out.”', `“Circle loses one: (${n} − 1)!; flip loses half.”`],
      },
    ],
  },
];
