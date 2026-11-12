import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 03 and 04: pp. 436–450 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Units 3 and 4,
 * each split at its Exam Relevance box and its Sections 1 to 8.
 *
 *   Topic 03  Applications & Word Problems of Linear Inequalities  pp. 436–442
 *   Topic 04  Non-Linear Inequalities: The Wavy-Curve Method       pp. 443–450
 *
 * Topic 03's Practice exercises part ends with the supplement's "Unit 3,
 * Section 5, Practice Exercise 3 — a boundary re-test" (p. 451, decision 22),
 * after the book's answers, under a bold run-in heading.
 * Figure 5.6, the sign walk of the fourth worked example of Topic 04 (caption
 * p. 447, drawn p. 448), is shown inside that example. No other page of
 * 436–451 holds a drawing. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';
const X = '<i>x</i>';
const Y = '<i>y</i>';
const A = '<i>a</i>';
const QUAD = '<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>';
const L_X = '<i>x</i> = a real number';
const L_A = '<i>a</i> = a positive real number (<i>a</i> > 0)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 436–442 (+ p. 451) ─────────────────────────
  {
    n: '03',
    title: 'Applications & Word Problems of Linear Inequalities',
    kalam: 'Your job is translation, then solution, then interpretation back into the real world.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where the chapter earns its marks on the <b>CBSE Boards</b>: the Miscellaneous Exercise is almost entirely word problems, and a 3–5 mark “form and solve” question (mixtures, marks, lengths, temperature ranges) is near-guaranteed ${ESTIMATE}. <b>JEE Main</b> embeds the same modeling inside multi-step problems. <b>JEE Advanced</b> treats constraint-modeling as the gateway to optimisation (Linear Programming). (No NEET relevance: Mathematics is outside the NEET syllabus.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Solving an inequality is the easy half. The hard half, and the part that actually decides marks, is <b>turning a sentence in English into an inequality in mathematics</b>. A word problem hands you a real situation (“a student must average at least 80,” “the mixture must stay below 40% acid,” “the perimeter is more than 60 cm”) and asks you to find the range of possibilities. Your job is translation, then solution, then interpretation back into the real world.',
      },
      {
        t: 'p',
        html: 'The single most important skill here is reading the comparison words correctly. English has a dozen ways of saying “≥” and a dozen ways of saying “<,” and a careless reading flips the entire answer. “At least 80” means ≥ 80 (80 is allowed). “More than 80” means > 80 (80 is not allowed). “No more than 80” means ≤ 80. These tiny distinctions are the difference between a correct and an incorrect solution set.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine you are the manager of a small sweet shop during Diwali. Every real constraint you face is an inequality, never an equation. You have at most ₹5,000 to spend on ingredients (cost ≤ 5000). You must make at least 200 boxes to meet pre-orders (boxes ≥ 200). Your storage holds fewer than 60 kg of sugar (sugar < 60). Notice that none of these pins you to a single number: each leaves you a range of legal choices, and the art of the business is operating inside the overlap of all of them. A word problem is just this situation written down: translate each phrase into a symbol, then find the overlap.',
      },
      {
        t: 'p',
        html: `There is a second, quieter skill: spotting the <b>hidden constraints</b> the problem does not state out loud. If ${X} is “the number of chairs produced,” then ${X} must be a whole number and cannot be negative, even though the sentence never says so. If ${X} is “the length of a side,” then ${X} > 0. Forgetting these silent conditions is how a perfectly solved inequality still earns the wrong final answer.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• A variable representing a <b>count</b> (chairs, students, boxes) must be a <b>non-negative integer</b>: solve over the reals, then keep only the integers.<br>• A variable representing a <b>physical measurement</b> (length, time, volume) must be <b>positive</b>.<br>• “<b>Between</b> ${A} and <i>b</i>” is usually strict (${A} < ${X} < <i>b</i>) unless the problem says “between ${A} and <i>b</i>, inclusive”; read carefully.<br>• The translation only works once: after solving, you must <b>interpret</b> the mathematical answer back into the situation (e.g. “the minimum length is 10 cm,” not merely “${X} ≥ 10”).`,
      },

      { t: 'part', title: 'The translation dictionary and modeling rules' },
      { t: 'p', html: 'The heart of this topic is a reliable phrase-to-symbol map. Commit it to memory.' },
      {
        t: 'table',
        title: null,
        head: ['English phrase', 'Symbol'],
        rows: [
          ['at least / no less than / a minimum of / not below', '≥'],
          ['at most / no more than / a maximum of / not above', '≤'],
          ['more than / greater than / exceeds / over', '>'],
          ['less than / fewer than / below / under / short of', '<'],
          [`between ${A} and <i>b</i> (exclusive)`, `${A} < ${X} < <i>b</i>`],
          [`between ${A} and <i>b</i>, inclusive`, `${A} ≤ ${X} ≤ <i>b</i>`],
        ],
      },
      {
        t: 'p',
        html: `<b>Modeling rules (the “formulas” of this topic):</b><br>• <b>Define the variable explicitly</b>, with units: “Let ${X} = the length of the shortest side, in cm.”<br>• <b>One condition → one inequality.</b> Each separate requirement in the problem becomes its own inequality; a problem with several requirements becomes a <b>system</b>, whose answer is the intersection.<br>• <b>Attach the hidden domain:</b> ${X} ∈ ℤ, ${X} ≥ 0 for counts; ${X} > 0 for measurements.<br>• <b>Average condition:</b> “the average of <i>n</i> quantities is at least <i>A</i>” becomes ${fr('sum', '<i>n</i>')} ≥ <i>A</i>.<br>• <b>Mixture condition:</b> in a mixture, ${fr('amount of pure component', 'total amount')} gives the concentration; bound it as required.`,
      },
      {
        t: 'p',
        html: `<b>Rigor checkpoints:</b><br>• Always state the <b>units</b> of the variable and carry them into the final answer.<br>• After solving, <b>discard infeasible values</b> (negative lengths, non-integer counts) before writing the conclusion.<br>• Distinguish the mathematical solution set from the contextual answer: ${X} ≥ ${fr('39', '7')} may become “the shortest side must be at least 6 cm” once integer side-lengths are required.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Word problems have no derivation: they have a disciplined <b>modeling routine</b>. Following it in order is what prevents lost marks.',
      },
      {
        t: 'proc',
        title: 'The five-step modeling routine',
        steps: [
          `<b>Name the unknown.</b> Write “Let ${X} = …” with units. <b>Why first:</b> every later inequality must refer to the same clearly-defined quantity; vague variables produce vague answers.`,
          '<b>Translate each requirement</b> into an inequality using the dictionary in the Translation dictionary and modeling rules part. <b>Why:</b> the comparison word fixes the symbol; choosing it now, deliberately, avoids the reflexive sign error.',
          `<b>Record the hidden domain</b> (${X} > 0, or ${X} a non-negative integer). <b>Why:</b> the real situation silently restricts ${X}, and the final answer must respect that restriction.`,
          '<b>Solve</b> the inequality or system using the algebra from Topics 01 and 02. For a system, take the <b>intersection</b> of the solution sets.',
          '<b>Interpret</b> the result in the words of the problem. <b>Why:</b> a solution set is not yet an answer; “the minimum number of complete boxes is 201” is the answer a marker rewards.',
        ],
      },
      {
        t: 'p',
        html: `<b>Worked illustration of the routine (mixture set-up).</b> “A tank holds <i>V</i> litres of an ${A}% solution; we add ${Y} litres of a <i>b</i>% solution.” The pure-acid balance is`,
      },
      {
        t: 'formula',
        kicker: 'Concentration of mixture (as a decimal)',
        main: `concentration of mixture<br>= ${fr(`${fr(A, '100')}<i>V</i> + ${fr('<i>b</i>', '100')}${Y}`, `<i>V</i> + ${Y}`)}`,
        legend: [
          '<i>V</i> = the litres of solution in the tank',
          `${A} = the tank’s strength (per cent)`,
          `${Y} = the litres of solution added`,
          '<i>b</i> = the added strength (per cent)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Bounding this between two target percentages gives a <b>double inequality in ${Y}</b>, which you clear of fractions (multiplying by the positive quantity <i>V</i> + ${Y}) and solve as in Topic 01. The hidden domain is ${Y} ≥ 0 (you cannot add a negative volume).`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'The longest side of a triangle is twice the shortest side, and the third side is 2 cm longer than the shortest. If the perimeter is at least 42 cm, find the minimum length of the shortest side.',
        steps: [
          `<b>Step 1 (name):</b> let ${X} = length of the shortest side, in cm. Then the longest side is 2${X} and the third side is ${X} + 2.`,
          `<b>Step 2 (translate):</b> “perimeter at least 42” means<br>${X} + 2${X} + (${X} + 2) ≥ 42.`,
          `<b>Step 3 (domain):</b> ${X} > 0 (a length).`,
          `<b>Step 4 (solve):</b><br>4${X} + 2 ≥ 42 ⟹ 4${X} ≥ 40 ⟹ ${X} ≥ 10.`,
          '<b>Step 5 (interpret):</b> the shortest side must be at least 10 cm, so its <b>minimum length is 10 cm</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main / Speed Trap',
        q: 'Find all pairs of consecutive odd natural numbers, both greater than 10, whose sum is less than 40.',
        steps: [
          '<b>The trap is twofold:</b> the comparison words, and the hidden domain (odd integers). Translate carefully.',
          `Let the smaller odd number be ${X}; the next consecutive odd number is ${X} + 2.<br>• “both greater than 10”: since ${X} is the smaller, ${X} > 10 guarantees both.<br>• “sum less than 40”: ${X} + (${X} + 2) < 40 ⇒ 2${X} + 2 < 40 ⇒ ${X} < 19.`,
          `So 10 < ${X} < 19. Now apply the <b>hidden domain</b> (${X} must be an odd natural number):<br>${X} ∈ {11, 13, 15, 17}.`,
          'The pairs are (11, 13), (13, 15), (15, 17), (17, 19).',
          `<b>Speed lesson:</b> the continuous solution 10 < ${X} < 19 is not the answer; a student who stops there loses the marks. The odd-integer restriction is the whole point. Verify the boundary: ${X} = 17 gives sum 36 < 40 ✓, but ${X} = 19 gives sum 40 ≮ 40, correctly excluded.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept: inequalities + percentage mixture',
        q: 'A chemist has 600 mL of a 20% acid solution. How many millilitres of a 50% acid solution must be added so that the resulting mixture is more than 30% but less than 40% acid?',
        steps: [
          `Let ${Y} = millilitres of the 50% solution added; ${Y} ≥ 0.`,
          `Pure acid after mixing = 0.20(600) + 0.50${Y} = 120 + 0.5${Y} mL, in a total of 600 + ${Y} mL. The concentration condition is the double inequality<br>0.30 < ${fr(`120 + 0.5${Y}`, `600 + ${Y}`)} < 0.40.`,
          `Since 600 + ${Y} > 0, multiply throughout by it (no sign flip):<br>0.30(600 + ${Y}) < 120 + 0.5${Y} < 0.40(600 + ${Y}).`,
          `<b>Left inequality:</b> 180 + 0.3${Y} < 120 + 0.5${Y} ⇒ 60 < 0.2${Y} ⇒ ${Y} > 300. <b>Right inequality:</b> 120 + 0.5${Y} < 240 + 0.4${Y} ⇒ 0.1${Y} < 120 ⇒ ${Y} < 1200.`,
          `Intersecting, 300 < ${Y} < 1200.`,
          '<b>The multi-concept move:</b> the percentage model produces a rational double inequality, which only becomes linear after multiplying by the positive total volume, and the two halves must then be intersected.',
        ],
        ans: 'The chemist must add between 300 mL and 1200 mL of the 50% solution.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced: constraint modeling → optimisation bridge',
        q: `A small workshop makes ${X} chairs and ${Y} tables per day. Each chair needs 2 hours of carpentry and 1 hour of finishing; each table needs 3 hours of carpentry and 2 hours of finishing. At most 36 carpentry-hours and 22 finishing-hours are available daily. If the profit is ₹30 per chair and ₹50 per table, find the production plan that maximises profit.`,
        steps: [
          `<b>Model the constraints</b> (each “at most” → ≤; counts → ${X}, ${Y} ≥ 0):<br>2${X} + 3${Y} ≤ 36 (carpentry),<br>${X} + 2${Y} ≤ 22 (finishing),<br>${X} ≥ 0, ${Y} ≥ 0.`,
          `This is a system of linear inequalities; its solution region (from Topic 02) is a bounded polygon. Find the <b>corner points</b> by solving the boundary lines pairwise:<br>• (0, 0).<br>• ${Y} = 0 with 2${X} = 36 ⇒ (18, 0) (and 18 ≤ 22, feasible).<br>• ${X} = 0 with 2${Y} = 22 ⇒ (0, 11) (and 33 ≤ 36, feasible).<br>• Intersection of 2${X} + 3${Y} = 36 and ${X} + 2${Y} = 22: from the second, ${X} = 22 − 2${Y}; substitute: 2(22 − 2${Y}) + 3${Y} = 36 ⇒ 44 − ${Y} = 36 ⇒ ${Y} = 8, ${X} = 6, giving (6, 8).`,
          `Evaluate profit <i>Z</i> = 30${X} + 50${Y} at each corner (on a bounded feasible region, a linear objective is always maximised at a vertex):<br><i>Z</i>(0, 0) = 0,<br><i>Z</i>(18, 0) = 540,<br><i>Z</i>(0, 11) = 550,<br><i>Z</i>(6, 8) = 180 + 400 = 580.`,
          '<b>Why it’s Advanced-level:</b> this is precisely the Linear Programming you will formalise in Class 12: the inequality system is the feasible region, and the optimum sits at a corner. Recognising that the joint constraint vertex (6, 8) beats the axis vertices is the non-obvious step.',
        ],
        ans: 'Maximum profit ₹580 per day, at 6 chairs and 8 tables.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Ravi scored 68 and 74 in his first two unit tests. Find the minimum marks he must score in the third test to have an average of at least 75 across the three tests.',
            a: 'At least 83 marks.',
          },
          {
            q: '[CBSE] The length of a rectangle is 3 cm more than twice its breadth. If the perimeter is at most 54 cm, find the maximum possible breadth.',
            a: 'Maximum breadth 8 cm.',
          },
          {
            q: '[JEE Main] Find all pairs of consecutive even natural numbers, both larger than 5, whose sum is less than 24.',
            a: '(6, 8), (8, 10), (10, 12), i.e. smaller number ∈ {6, 8, 10}.',
          },
          {
            q: '[JEE Main] A solution of 480 mL is 15% alcohol. How many millilitres of water must be added so that the alcohol concentration falls below 12%?',
            a: 'More than 120 mL of water.',
          },
          {
            q: `[JEE Advanced] A trader stocks ${X} kg of tea and ${Y} kg of coffee. Storage allows at most 80 kg total, capital allows at most ₹24,000 where tea costs ₹200/kg and coffee ₹400/kg. Write the constraint system and find its corner points.`,
            a: `${X} + ${Y} ≤ 80, 200${X} + 400${Y} ≤ 24000 (i.e. ${X} + 2${Y} ≤ 120), ${X}, ${Y} ≥ 0; corners (0, 0), (80, 0), (40, 40), (0, 60).`,
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Practice exercise 3: a boundary re-test.</b> The question asks for all pairs of consecutive even natural numbers, both larger than 5, whose sum is less than 24.',
      },
      {
        t: 'p',
        html: `Let ${X} be the smaller number. Then ${X} is even, ${X} > 5 (so ${X} ≥ 6), and<br>${X} + (${X} + 2) < 24 ⟹ 2${X} < 22 ⟹ ${X} < 11.<br>So ${X} ∈ {6, 8, 10}.`,
      },
      {
        t: 'p',
        html: '<b>Answer.</b> (6, 8), (8, 10), (10, 12), that is, the smaller number belongs to {6, 8, 10}.<br>Check the largest pair: 10 + 12 = 22 < 24, and both 10 and 12 exceed 5, so (10, 12) genuinely qualifies.',
      },
      {
        t: 'p',
        html: `Why this matters: it is the failure mode behind the “verify the boundary” habit of this topic: the algebra can be right and the last valid pair still get dropped, if the boundary is never re-tested. <b>Whenever you finish a discrete word problem, substitute the largest admissible value back in.</b> Here, testing ${X} = 10 takes four seconds and catches the whole mistake.`,
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `“A number ${X} is no more than 7 and at least −2.” The correct inequality is`,
        opts: [
          { label: `−2 < ${X} < 7`, nudge: '<b>(a)</b> wrongly reads both phrases as strict.' },
          { label: `−2 ≤ ${X} ≤ 7`, nudge: null },
          { label: `−2 ≤ ${X} < 7`, nudge: '<b>(c)</b> makes the 7 end strict, but “no more than 7” includes 7.' },
          { label: `−2 < ${X} ≤ 7`, nudge: '<b>(d)</b> makes the −2 end strict, but “at least −2” includes −2.' },
        ],
        correct: 1,
        solution: `“At least −2” ⇒ ${X} ≥ −2 (inclusive); “no more than 7” ⇒ ${X} ≤ 7 (inclusive). Both ends are included.`,
      },
      {
        t: 'mcq',
        q: `A factory makes ${X} toys, where the count must satisfy 5${X} − 3 > 32. The least number of toys is`,
        opts: [
          { label: '7', nudge: `<b>(a)</b> takes ${X} = 7, but 7 ≯ 7.` },
          { label: '8', nudge: null },
          { label: '7.4', nudge: '<b>(c)</b> gives a non-integer value, ignoring that a count must be a whole number.' },
          { label: '6', nudge: '<b>(d)</b> fails the inequality: 5(6) − 3 = 27, which is not greater than 32.' },
        ],
        correct: 1,
        solution: `5${X} − 3 > 32 ⇒ ${X} > 7. But ${X} counts toys, so ${X} must be a positive <b>integer</b> greater than 7: the least is 8.`,
      },
      {
        t: 'mcq',
        q: 'A 200 mL solution is 30% salt. To make it more than 40% salt by adding <i>s</i> mL of pure salt-equivalent (treat added salt as 100%), the inequality is',
        opts: [
          { label: `${fr('60 + <i>s</i>', '200 + <i>s</i>')} > 0.40`, nudge: null },
          { label: `${fr('60', '200 + <i>s</i>')} > 0.40`, nudge: '<b>(b)</b> forgets the added salt in the numerator.' },
          {
            label: `${fr('60 + <i>s</i>', '200')} > 0.40`,
            nudge: '<b>(c)</b> forgets that the total volume also grows by <i>s</i> (a mixture-setup slip).',
          },
          { label: `${fr('0.30 + <i>s</i>', '200')} > 0.40`, nudge: '<b>(d)</b> writes the original salt as the fraction 0.30 instead of 0.30 × 200 = 60 mL, and also keeps the old total 200.' },
        ],
        correct: 0,
        solution: 'Original salt = 0.30 × 200 = 60 mL; after adding <i>s</i>, salt = 60 + <i>s</i> in a total of 200 + <i>s</i>. Concentration > 0.40 gives option (a).',
      },
      {
        t: 'mcq',
        q: `“${X} lies between 3 and 9” (standard reading) translates to`,
        opts: [
          { label: `3 ≤ ${X} ≤ 9`, nudge: '<b>(a)</b> adds inclusivity the wording does not state.' },
          { label: `3 < ${X} < 9`, nudge: null },
          { label: `${X} < 3 or ${X} > 9`, nudge: '<b>(c)</b> describes outside the interval: the opposite region.' },
          { label: `${X} ≤ 3 or ${X} ≥ 9`, nudge: '<b>(d)</b> describes outside the interval (the opposite region) and even includes 3 and 9.' },
        ],
        correct: 1,
        solution: '“Between,” with no “inclusive,” is read as strict on both ends.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Misreading the comparison word.</b> “More than” is strict (>); “at least” is inclusive (≥). Underline the phrase and write its symbol before building the inequality.',
          '<b>Forgetting the hidden domain.</b> A count is a non-negative integer; a length is positive. Solve over the reals, then restrict, and state the restricted answer.',
          `<b>Stopping at the inequality instead of the answer.</b> “${X} ≥ 10” is not a sentence a marker rewards; “the minimum length is 10 cm” is. Always interpret back.`,
          '<b>Mishandling “between.”</b> Treat it as strict unless the problem says “inclusive.” Many students reflexively write ≤.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: translate, then test one value.</b> After forming the inequality, plug a clearly-valid scenario from the problem back in to confirm your symbols point the right way. For the first worked example, test ${X} = 10: perimeter = 10 + 20 + 12 = 42 ≥ 42 ✓, confirming the boundary is included and “at least” was correctly read as ≥.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Translate the comparison word first</b>',
            note: 'at least/at most ⇒ ≥ / ≤ (inclusive); more/less than ⇒ > / < (strict).',
          },
          {
            f: '<b>Five-step routine</b>',
            note: 'name the variable (with units) → translate each condition → note the hidden domain → solve (intersect, for systems) → interpret in context.',
          },
          { f: '<b>Hidden domains</b>', note: 'counts are non-negative integers; measurements are positive.' },
          {
            f: '<b>Average</b>',
            note: `${fr('sum', '<i>n</i>')} ≶ <i>A</i>. <b>Mixture:</b> ${fr('pure component', 'total')}, bounded as required; clear fractions by the positive total.`,
          },
          { f: '<b>“Between” is strict</b> unless stated inclusive.', note: '' },
          { f: '<b>Finish by interpreting</b>', note: 'a solution set is not yet an answer.' },
        ],
        aids: ['“Read the word, then write the sign.”', '“Count? Then whole and non-negative.”', `“Don’t stop at ${X} ≥ 10; say what it means.”`],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 443–450 ─────────────────────────
  {
    n: '04',
    title: 'Non-Linear Inequalities: The Wavy-Curve Method',
    kalam: 'Odd powers cross; even powers bounce.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: '<b>This topic goes beyond the CBSE syllabus</b>: modulus, quadratic, polynomial, and rational inequalities are not in the NCERT Linear Inequalities chapter, so Board-only students may treat it as optional. It is, however, <b>core to JEE</b>: <b>JEE Main</b> asks modulus and quadratic/rational inequalities directly, and <b>JEE Advanced</b> tests the full wavy-curve method with repeated roots and multiple moduli. We include it so this chapter is a complete reference on inequalities, not just linear ones. (No NEET relevance.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Linear inequalities had one comforting feature: a single sign-flip rule handled everything, because <i>ax</i> + <i>b</i> (<i>a</i> ≠ 0) changes sign exactly once. The moment the expression becomes non-linear (a product of several factors, a square, a quotient), that simplicity ends. You <b>cannot</b> solve ${X}<sup>2</sup> > 4 by “taking the square root of both sides,” and you <b>cannot</b> solve ${fr(`${X} − 1`, `${X} + 2`)} ≥ 0 by “cross-multiplying,” because the sign of what you multiply by is unknown. A completely different, and rather beautiful, idea is needed.`,
      },
      {
        t: 'p',
        html: 'That idea rests on one fact: <b>a continuous expression can only switch between positive and negative by passing through zero.</b> So if you mark on the number line every point where the expression equals zero (or blows up to infinity), those <b>critical points</b> chop the line into intervals, and inside each interval the expression keeps one constant sign. You then only need to determine the sign in one interval and let a simple rule propagate it across the rest. This is the <b>method of intervals</b>, and its visual form, a single squiggle threading above and below the axis, is the <b>wavy curve</b>.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture walking left-to-right along the number line while tracking the sign of a product like (${X} − 1)(${X} − 3)(${X} + 2). Far to the right (say ${X} = 100), every factor is positive, so the product is positive: you are “above the axis.” Now walk leftward. Each time you cross a root, one factor flips its sign, so the whole product flips: above the axis becomes below, below becomes above. The curve <b>crosses</b> the axis at each simple root, weaving like a stitch. The wavy curve is just a picture of this sign-flipping walk.`,
      },
      {
        t: 'p',
        html: `But there is a crucial exception. If a factor is squared, like (${X} − 1)<sup>2</sup>, then crossing ${X} = 1 flips both copies of (${X} − 1), so the squared factor does not change sign (it is (something)<sup>2</sup> ≥ 0 always), so the product’s sign does <b>not</b> change. The curve merely <b>touches</b> the axis at ${X} = 1 and bounces back to the same side. Odd powers cross; even powers bounce. This single rule about multiplicity is what separates a correct JEE solution from a wrong one.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• Every factor must first be written as (${X} − <i>r</i>) with a <b>positive coefficient on ${X}</b>; a factor like (3 − ${X}) must be rewritten as −(${X} − 3), and the stray minus sign tracked.<br>• <b>Even-multiplicity</b> roots (squared, fourth-power, …) are touch-and-bounce points: the sign does not flip there.<br>• For a <b>quotient</b>, the points where the <b>denominator is zero</b> are critical points too, but they are <b>never included</b> in the solution (the expression is undefined there): always open circles, regardless of ≤ or ≥.<br>• You may include a numerator root in the solution only for a <b>non-strict</b> (≤, ≥) inequality, and never if it also makes the denominator zero.`,
      },

      { t: 'part', title: 'Key standard results' },
      { t: 'p', html: `<b>Modulus (absolute value) inequalities</b>, for ${A} > 0:` },
      {
        t: 'formula',
        kicker: 'Modulus (absolute value) inequalities',
        main: `|${X}| < ${A} ⟺ −${A} < ${X} < ${A}<br>|${X}| ≤ ${A} ⟺ −${A} ≤ ${X} ≤ ${A}<br>|${X}| > ${A} ⟺ ${X} < −${A} or ${X} > ${A}<br>|${X}| ≥ ${A} ⟺ ${X} ≤ −${A} or ${X} ≥ ${A}`,
        legend: [L_X, L_A],
        note: null,
      },
      {
        t: 'p',
        html: `In words: <b>“less than” traps you inside one interval; “greater than” throws you outside into a union of two.</b> More generally |<i>f</i>(${X})| < ${A} ⇔ −${A} < <i>f</i>(${X}) < ${A}, and ${A} < |${X}| < <i>b</i> ⇔ ${X} ∈ (−<i>b</i>, −${A}) ∪ (${A}, <i>b</i>).`,
      },
      { t: 'p', html: '<b>Equivalent squared forms</b> (useful because squares are sign-free):' },
      {
        t: 'formula',
        kicker: 'Equivalent squared forms',
        main: `${X}<sup>2</sup> < ${A}<sup>2</sup> ⟺ |${X}| < ${A}<br>${X}<sup>2</sup> > ${A}<sup>2</sup> ⟺ |${X}| > ${A}`,
        legend: [L_X, L_A],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Quadratic inequalities</b>, for ${QUAD} with ${A} > 0 and real roots <i>α</i> < <i>β</i>:`,
      },
      {
        t: 'formula',
        kicker: 'Quadratic inequalities',
        main: `${QUAD} < 0 ⟺ <i>α</i> < ${X} < <i>β</i><br>(negative between the roots)<br>${QUAD} > 0 ⟺ ${X} < <i>α</i> or ${X} > <i>β</i><br>(positive outside the roots)`,
        legend: [
          '<i>a</i>, <i>b</i>, <i>c</i> = the coefficients (<i>a</i> > 0)',
          '<i>α</i>, <i>β</i> = the real roots (<i>α</i> < <i>β</i>)',
          L_X,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `If the discriminant is negative (no real roots) and ${A} > 0, the expression is positive for all ${X}.`,
      },
      {
        t: 'p',
        html: `<b>Rigor checkpoints:</b><br>• A <b>denominator root is always excluded</b> (open circle); a <b>numerator root is included</b> only under ≤ or ≥.<br>• Before applying the quadratic rule, <b>make the coefficient of ${X}<sup>2</sup> positive</b> (multiply by −1 and flip the sign if needed).<br>• <b>Never cross-multiply</b> a rational inequality by a variable denominator whose sign is unknown.`,
      },

      { t: 'part', title: 'Key procedure: the wavy-curve algorithm' },
      { t: 'p', html: `To solve any polynomial or rational inequality <i>f</i>(${X}) (≶) 0:` },
      {
        t: 'proc',
        title: 'The wavy-curve algorithm',
        steps: [
          '<b>Move everything to one side</b> so the other side is 0. <b>Why:</b> the method reads the sign of a single expression against zero; comparing two non-zero sides is meaningless for sign analysis.',
          `<b>Combine into one quotient and factor completely</b> into linear factors (${X} − <i>r</i>) (and irreducible quadratics, which keep a constant sign). <b>Make each ${X}-coefficient positive.</b> <b>Why:</b> the crossing/bouncing rule is stated for factors of the form (${X} − <i>r</i>); a hidden −1 silently inverts every sign.`,
          '<b>Mark all critical points</b> on the number line: numerator zeros (filled if the inequality is ≤ / ≥, hollow if strict) and denominator zeros (<b>always hollow</b>). <b>Why:</b> these are the only places the sign can change, and the denominator zeros are forbidden values.',
          `<b>Fix the rightmost sign.</b> For ${X} larger than every critical point, all positive-coefficient factors are positive, so the expression is <b>positive</b> on the far-right interval, unless a negative constant factor is left over (as in ${fr('−5', `${X} + 1`)}), when it is negative there. Start the wavy curve above the axis there (below it in that case).`,
          '<b>Draw the curve leftward</b>, obeying multiplicity: <b>cross</b> the axis at odd-multiplicity roots, <b>touch and bounce</b> at even-multiplicity roots. <b>Why:</b> an odd power flips a factor’s sign once (net flip); an even power flips it twice (no net change).',
          '<b>Read off</b> the intervals where the curve lies on the required side (> 0 above, < 0 below), then <b>adjust endpoints</b>: include numerator roots for non-strict inequalities, exclude all denominator roots.',
        ],
      },
      {
        t: 'p',
        html: `<b>Why “outside vs between” for quadratics falls out of this.</b> A quadratic ${QUAD} with ${A} > 0 and roots <i>α</i> < <i>β</i> factors as ${A}(${X} − <i>α</i>)(${X} − <i>β</i>). On the far right both factors are positive (+); crossing <i>β</i> gives one flip (− on (<i>α</i>, <i>β</i>)); crossing <i>α</i> flips again (+ on (−∞, <i>α</i>)). Hence positive outside, negative between: exactly the standard result, now seen as a one-line wavy curve.`,
      },
      {
        t: 'p',
        html: '<b>Modulus strategy.</b> Either (a) apply the standard results of the Key standard results part directly, (b) <b>case-split</b> on the sign of each expression inside a modulus and solve each case on its interval, or (c) when both sides are non-negative, <b>square</b> to remove the modulus (valid only when both sides are ≥ 0, else squaring corrupts the sign).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'Foundational',
        q: `Solve ${X}<sup>2</sup> − ${X} − 6 > 0.`,
        steps: [
          `Factor: ${X}<sup>2</sup> − ${X} − 6 = (${X} − 3)(${X} + 2). The roots are ${X} = −2 and ${X} = 3, and the coefficient of ${X}<sup>2</sup> is positive. By the quadratic rule, “> 0” means <b>outside</b> the roots:<br>${X} < −2 or ${X} > 3,<br>i.e. ${X} ∈ (−∞, −2) ∪ (3, ∞).`,
          '(Both endpoints excluded, since the inequality is strict.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main / Speed Trap',
        q: `Solve |2${X} − 3| ≥ 5.`,
        steps: [
          `<b>The trap:</b> the “≥” form throws you <b>outside</b> into a union, the opposite of the “≤” form. A student who writes −5 ≤ 2${X} − 3 ≤ 5 (the less-than template) gets exactly the wrong region.`,
          `Apply |<i>f</i>| ≥ ${A} ⇔ <i>f</i> ≤ −${A} or <i>f</i> ≥ ${A}:<br>2${X} − 3 ≤ −5 or 2${X} − 3 ≥ 5.<br>2${X} ≤ −2 ⇒ ${X} ≤ −1,<br>2${X} ≥ 8 ⇒ ${X} ≥ 4.`,
          '<b>Speed lesson:</b> read the modulus direction first: <b>“<” means inside one interval, “>” means outside, two intervals.</b> Endpoints are included here because the inequality is non-strict.',
        ],
        ans: `${X} ∈ (−∞, −1] ∪ [4, ∞).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Solve ${fr(`${X} − 4`, `${X} + 1`)} < 1.`,
        steps: [
          `Do not cross-multiply: the sign of ${X} + 1 is unknown. Instead, bring everything to one side:<br>${fr(`${X} − 4`, `${X} + 1`)} − 1 < 0<br>⟹ ${fr(`(${X} − 4) − (${X} + 1)`, `${X} + 1`)} < 0<br>⟹ ${fr('−5', `${X} + 1`)} < 0.`,
          `The numerator −5 is a negative constant, so ${fr('−5', `${X} + 1`)} < 0 requires ${X} + 1 > 0 (negative over positive is negative):<br>${X} + 1 > 0 ⟹ ${X} > −1,<br>i.e. ${X} ∈ (−1, ∞).`,
          `(${X} = −1 is excluded: the original expression is undefined there.)`,
          `<b>The lesson:</b> the single most common rational-inequality error is cross-multiplying by ${X} + 1; bringing to one side and combining is the safe route every time.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        fig: 'm11-05-fig-5.6',
        q: `Solve ${fr(`(${X} + 3)(${X} − 1)<sup>2</sup>(${X} − 4)`, `${X} + 2`)} ≥ 0.`,
        steps: [
          'This combines every wrinkle: a repeated root, a denominator restriction, and an isolated solution point.',
          `<b>Critical points</b> (left to right): ${X} = −3 (numerator, multiplicity 1), ${X} = −2 (<b>denominator</b>, always excluded), ${X} = 1 (numerator, multiplicity 2), ${X} = 4 (numerator, multiplicity 1).`,
          `<b>Sign walk</b> (start positive on the far right):<br>• (4, ∞): all factors positive ⇒ +.<br>• cross ${X} = 4 (odd) ⇒ − on (1, 4).<br>• ${X} = 1 has even multiplicity ⇒ <b>bounce</b>, sign stays − on (−2, 1).<br>• cross ${X} = −2 (denominator, odd) ⇒ + on (−3, −2).<br>• cross ${X} = −3 (odd) ⇒ − on (−∞, −3).`,
          `We need “≥ 0”, the curve on or above the axis:<br>• (−3, −2) is positive; include ${X} = −3 (numerator zero, non-strict) but exclude ${X} = −2 (denominator): gives [−3, −2).<br>• ${X} = 1 makes the expression 0 (numerator zero, non-strict) ⇒ include the isolated point {1}.<br>• (4, ∞) is positive; include ${X} = 4 (numerator zero): gives [4, ∞).`,
          `<b>Why it’s Advanced-level:</b> three traps fire at once: the bounce at the squared root ${X} = 1 (which also survives as a lone solution because the inequality is non-strict), the open exclusion of the denominator root ${X} = −2, and the inclusion of the simple numerator roots. Miss any one and the answer is wrong.`,
        ],
        ans: `${X} ∈ [−3, −2) ∪ {1} ∪ [4, ∞).`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[Foundational] Solve ${X}<sup>2</sup> − 7${X} + 12 ≤ 0.`, a: '[3, 4].' },
          { q: `[JEE Main] Solve |3${X} + 1| < 8.`, a: `(−3, ${fr('7', '3')}).` },
          { q: `[JEE Main] Solve ${fr(`${X} − 2`, `${X} + 5`)} ≥ 0.`, a: '(−∞, −5) ∪ [2, ∞).' },
          { q: `[JEE Main] Solve (${X} − 1)(${X} + 4)(${X} − 6) < 0.`, a: '(−∞, −4) ∪ (1, 6).' },
          {
            q: `[JEE Advanced] Solve ${fr(`(${X} − 2)<sup>2</sup>(${X} + 1)`, `${X} − 5`)} ≤ 0.`,
            a: `[−1, 5): the squared factor (${X} − 2)<sup>2</sup> only touches zero at ${X} = 2 (which lies inside the negative region), and the denominator root ${X} = 5 is excluded.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The solution of |${X} − 2| > 3 is`,
        opts: [
          { label: '(−1, 5)', nudge: '<b>(a)</b> applies the “<” (inside) template to a “>” inequality.' },
          { label: '(−∞, −1) ∪ (5, ∞)', nudge: null },
          { label: '[−1, 5]', nudge: '<b>(c)</b> takes the “<” (inside) region, and closes its endpoints although the inequality is strict.' },
          { label: '(−∞, −1] ∪ [5, ∞)', nudge: `<b>(d)</b> has the right outside region but closed endpoints; at ${X} = −1 and 5, |${X} − 2| = 3, which is not > 3.` },
        ],
        correct: 1,
        solution: `“>” sends you outside: ${X} − 2 < −3 or ${X} − 2 > 3, i.e. ${X} < −1 or ${X} > 5; strict, so open.`,
      },
      {
        t: 'mcq',
        q: `For ${A} > 0 with <i>b</i><sup>2</sup> − 4<i>ac</i> < 0, the inequality ${QUAD} < 0 has solution`,
        opts: [
          { label: `all real ${X}`, nudge: '<b>(a)</b> confuses this with the “> 0” case.' },
          { label: `no real ${X}`, nudge: null },
          { label: `only ${X} > 0`, nudge: `<b>(c)</b> ties the answer to the sign of ${X}, but with ${A} > 0 and no real roots the expression is positive for every ${X}, so no ${X} works.` },
          { label: 'the interval between the roots', nudge: '<b>(d)</b> assumes real roots exist.' },
        ],
        correct: 1,
        solution: `With ${A} > 0 and no real roots, the parabola lies entirely above the axis, so ${QUAD} > 0 for every ${X}: it is never negative.`,
      },
      {
        t: 'mcq',
        q: `The solution of ${fr(`${X} + 1`, `${X} − 3`)} ≤ 0 is`,
        opts: [
          { label: '[−1, 3]', nudge: `<b>(a)</b> wrongly includes ${X} = 3, where the expression is undefined.` },
          { label: '[−1, 3)', nudge: null },
          { label: '(−1, 3)', nudge: `<b>(c)</b> wrongly excludes the valid numerator root ${X} = −1.` },
          { label: '(−∞, −1] ∪ (3, ∞)', nudge: '<b>(d)</b> picks the “outside” region: wrong sign.' },
        ],
        correct: 1,
        solution: `Critical points ${X} = −1 (numerator) and ${X} = 3 (denominator). The quotient is ≤ 0 between them; include ${X} = −1 (numerator, non-strict) but <b>exclude</b> ${X} = 3 (denominator).`,
      },
      {
        t: 'mcq',
        q: `The solution set of (${X} − 2)<sup>2</sup>(${X} − 5) > 0 is`,
        opts: [
          { label: `${X} > 5`, nudge: null },
          {
            label: `${X} > 2`,
            nudge: `<b>(b)</b> treats (${X} − 2)<sup>2</sup> as if it were (${X} − 2), a sign-changing factor: the even-multiplicity error.`,
          },
          { label: `${X} > 5 or ${X} = 2`, nudge: `<b>(c)</b> wrongly adds ${X} = 2, where the product equals 0, not a positive value.` },
          { label: `all ${X} ≠ 2`, nudge: `<b>(d)</b> ignores the (${X} − 5) factor entirely.` },
        ],
        correct: 0,
        solution: `Since (${X} − 2)<sup>2</sup> ≥ 0, the product’s sign is decided by (${X} − 5), but the product is 0 (not > 0) at ${X} = 2 and at ${X} = 5. So “> 0” needs (${X} − 2)<sup>2</sup> > 0 <b>and</b> ${X} − 5 > 0, giving ${X} > 5 (which already excludes ${X} = 2). The teaching point: an <b>even-multiplicity</b> factor never flips the sign; it only contributes its own root as a point where the product is zero (excluded here, since the inequality is strict).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Cross-multiplying a rational inequality.</b> Multiplying ${fr(`${X} − 4`, `${X} + 1`)} < 1 by ${X} + 1 is illegal: its sign is unknown. Always bring to one side and combine into a single quotient first.`,
          `<b>Wrong modulus direction.</b> |<i>f</i>| < ${A} traps you inside (−${A}, ${A}); |<i>f</i>| > ${A} throws you outside into a union. Mixing these is the top modulus error.`,
          '<b>Including a denominator zero.</b> A value making the denominator 0 is never in the solution: open circle always, even under ≤ / ≥.',
          '<b>Forgetting the even-multiplicity bounce.</b> At a squared (or any even-power) root, the curve touches and returns; the sign does not flip. Treating it as a normal crossing inverts the sign of every interval to its left.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: fix the far-right sign, then walk left.</b> Anchor the wavy curve as positive on the far-right interval (after making all ${X}-coefficients positive and checking that no negative constant factor is left over), then flip at odd roots and bounce at even ones. One test substitution in the far-right interval (e.g. a large ${X}) confirms the anchor before you propagate.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Modulus</b>',
            note: `|${X}| < ${A} ⇔ −${A} < ${X} < ${A} (inside); |${X}| > ${A} ⇔ ${X} < −${A} or ${X} > ${A} (outside).`,
          },
          {
            f: `<b>Quadratic</b> (${A} > 0, roots <i>α</i> < <i>β</i>)`,
            note: '< 0 <b>between</b> (<i>α</i>, <i>β</i>); > 0 <b>outside</b> (−∞, <i>α</i>) ∪ (<i>β</i>, ∞). No real roots ⇒ always positive.',
          },
          {
            f: '<b>Wavy curve</b>',
            note: `one side = 0 → factor, ${X}-coeffs positive → mark critical points → anchor <b>positive on far right</b> (negative if a negative constant is left over) → <b>cross at odd, bounce at even</b> multiplicity → read the required sign.`,
          },
          {
            f: '<b>Endpoints</b>',
            note: 'numerator roots included for ≤ / ≥; <b>denominator roots always excluded</b>.',
          },
          {
            f: '<b>Never cross-multiply</b> by a denominator of unknown sign; <b>never square</b> unless both sides are ≥ 0.',
            note: '',
          },
        ],
        aids: ['“Less-than locks you in, greater-than lets you out.”', '“Odd crosses, even bounces.”', '“Denominators get a hole, never a dot.”'],
      },
    ],
  },
];
