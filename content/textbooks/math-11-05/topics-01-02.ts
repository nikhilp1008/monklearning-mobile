import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 01–02: the book's Units 1–2, pp. 415–435 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 * p. 414 (title and contents) is not copied. Topic 01 runs pp. 415–424, Topic 02
 * pp. 425–435; Unit 3 starts on p. 436. Each topic opens with its "Exam
 * Relevance:" box as a part of its own, then is split at its Sections 1 to 8.
 * Figures: 5.1 (caption p. 416, drawn p. 417) after the milestone bullets of
 * Topic 01's Concept intuition; 5.2 (caption p. 419, drawn p. 420) on Topic 01's
 * first worked example; 5.3 (caption p. 427, drawn p. 428) after the Setup of
 * Topic 02's derivation; 5.4 (caption p. 429, drawn p. 430) on Topic 02's first
 * worked example; 5.5 (caption p. 431, drawn p. 432) on its third. Neither topic
 * has an unnumbered drawing. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const x = '<i>x</i>';
const y = '<i>y</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const BA = fr(b, a);
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 415–424 ────────────────
  {
    n: '01',
    title: 'Linear Inequalities in One Variable',
    kalam: 'The solution of a linear equation is a point; the solution of a linear inequality is an interval.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed scorer on the CBSE Boards: expect a 1–2 mark solve-and-represent question, plus a 3–5 mark word problem from the chapter ${ESTIMATE}. In <b>JEE Main</b> it rarely stands alone but is the silent workhorse inside domain, range, and parameter problems ${ESTIMATE}. <b>JEE Advanced</b> never asks it directly ${ESTIMATE}, yet every sign-analysis and “find all values of ${a}” question rests on it. (No NEET relevance: Mathematics is not part of the NEET syllabus.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You have spent years solving equations. An equation like 2${x} + 1 = 7 is a demand for <b>exact balance</b>: picture a two-pan weighing scale at the sabzi mandi resting perfectly level. There is one weight, ${x} = 3, that makes it balance, and that single number is your answer.`,
      },
      {
        t: 'p',
        html: `An <b>inequality</b> drops the demand for exact balance. It only asks which side is heavier. 2${x} + 1 > 7 does not want the one value that balances the scale; it wants every value that tips it to the heavier side. So the answer is no longer a single number; it is a whole <b>range</b> of numbers, a stretch of the number line.`,
      },
      {
        t: 'p',
        html: 'This is the single biggest mental shift. The solution of a linear equation is a point; the solution of a linear inequality is an interval.',
      },
      {
        t: 'p',
        html: 'Inequalities are everywhere in daily life, far more than equations are. A railway ticket counter says your luggage must weigh at most 15 kg (<i>w</i> ≤ 15). You need at least 33 marks to pass (<i>m</i> ≥ 33). You must be 18 or older to vote (age ≥ 18). A shopkeeper promises mangoes “under ₹80 a kilo” (<i>p</i> < 80). None of these is a single number; each describes a band of acceptable values. That band is exactly what we compute.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the number line as a long straight highway and 0 as your town. Solving an inequality means painting a stretch of this highway to mark “all the acceptable spots.” Two kinds of milestone matter at the edges of your painted stretch:<br>• A <b>hollow circle</b> (∘) means get infinitely close, but this exact milestone is not allowed: it marks a strict inequality < or >.<br>• A <b>filled circle</b> (•) means this milestone is allowed too: it marks ≤ or ≥.',
      },
      { t: 'fig', id: 'm11-05-fig-5.1' },
      {
        t: 'p',
        html: 'Now the one rule that makes inequalities genuinely different from equations, and the source of more lost marks than any other idea in this chapter. With an equation, you may multiply both sides by any non-zero number and nothing changes. With an inequality, <b>multiplying or dividing by a negative number flips the direction of the sign.</b> Watch:<br>−2 < 3 (true)<br>Multiply both sides by −1:<br>2 ? −3<br>We get 2 > −3: the symbol reversed. Geometrically, multiplying by −1 reflects every point across 0, and a reflection swaps left and right, so “smaller” and “larger” trade places. Hold on to that picture; it is the whole game.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Linear means the variable appears only to the first power: no ${x}<sup>2</sup>, no ${fr('1', x)}, no |${x}| unless it can be unwound into linear pieces. The manipulation rules below are safe only within these guardrails:<br>• You may <b>add or subtract</b> any quantity from both sides freely.<br>• You may <b>multiply or divide by a positive number</b> freely.<br>• Multiplying or dividing by a <b>negative</b> number forces a flip.<br>• You <b>must not cross-multiply</b> by an expression whose sign you do not know (e.g. multiplying through by ${x} + 3, which may be positive or negative). This is where rational inequalities break beginners.<br>• You <b>must not square</b> both sides unless you are certain both are non-negative.`,
      },

      { t: 'part', title: 'Key definitions and rules' },
      {
        t: 'p',
        html: 'A statement linking two real expressions by one of <, >, ≤, ≥ is an <b>inequality</b>. With < or > it is <b>strict</b>; with ≤ or ≥ it is <b>non-strict</b> (slack). The set of all values of the variable that make it true is the <b>solution set</b>.',
      },
      { t: 'p', html: `<b>The order axioms (your “formulas”).</b> For all real ${a}, ${b}, ${c}:` },
      {
        t: 'formula',
        kicker: 'The order axioms',
        main: `${a} < ${b} ⟹ ${a} + ${c} < ${b} + ${c}<br>(add or subtract any ${c})<br>${a} < ${b}, ${c} > 0 ⟹ <i>ac</i> < <i>bc</i> and ${fr(a, c)} < ${fr(b, c)}<br>${a} < ${b}, ${c} < 0 ⟹ <i>ac</i> > <i>bc</i> and ${fr(a, c)} > ${fr(b, c)}<br>(sign flips)<br>${a} < ${b} and ${b} < ${c} ⟹ ${a} < ${c}<br>(transitivity)`,
        legend: [`${a}, ${b}, ${c} = real numbers`],
        note: null,
      },
      { t: 'p', html: `<b>General linear inequality.</b> For ${a} ≠ 0:` },
      {
        t: 'formula',
        kicker: 'General linear inequality',
        main: `<i>ax</i> + ${b} > 0 ⟹<br>${x} > −${BA}, ${a} > 0<br>${x} < −${BA}, ${a} < 0`,
        legend: [`${x} = the unknown (a real number)`, `${a} = the coefficient of ${x} (${a} ≠ 0)`, `${b} = the constant term`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation: the three equivalent languages.</b> Every answer should be expressible in all three:',
      },
      {
        t: 'table',
        title: null,
        head: ['Number line', 'Set-builder', 'Interval'],
        rows: [
          [`• at ${a}, shaded right`, `{${x} ∶ ${x} ≥ ${a}}`, `[${a}, ∞)`],
          [`∘ at ${a}, shaded right`, `{${x} ∶ ${x} > ${a}}`, `(${a}, ∞)`],
          [`• at ${a} and ${b}, shaded between`, `{${x} ∶ ${a} ≤ ${x} ≤ ${b}}`, `[${a}, ${b}]`],
          [`∘ at ${a}, • at ${b}`, `{${x} ∶ ${a} < ${x} ≤ ${b}}`, `(${a}, ${b}]`],
        ],
      },
      {
        t: 'p',
        html: '<b>Bracket conventions (the math-rigor checkpoints for writing every interval correctly):</b><br>• A <b>square bracket</b> [ ] includes the endpoint (non-strict, filled circle); a <b>round bracket</b> ( ) excludes it (strict, hollow circle).<br>• ∞ and −∞ are <b>not real numbers</b>: they always take a round bracket. Writing [3, ∞] is always wrong.<br>• An empty solution set is written ∅; “all reals” is (−∞, ∞) or ℝ.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'A linear inequality in one variable has no single “derivation”: it has an <b>algorithm</b>, and the reasoning behind each step is what stops you from losing marks.',
      },
      {
        t: 'proc',
        title: 'The standard procedure',
        steps: [
          '<b>Clear all fractions</b> by multiplying every term by the LCM of the denominators. <b>Why it’s safe:</b> an LCM of positive integers is positive, so by the order axioms no flip occurs.',
          '<b>Remove brackets</b> by distributing.',
          '<b>Collect the variable terms on one side, constants on the other</b>, using only addition and subtraction. <b>Why:</b> adding/subtracting never disturbs the inequality direction, so this stage is risk-free.',
          `<b>Reduce to the form</b> <i>ax</i> ≶ ${b}.`,
          `<b>Divide by the coefficient</b> ${a}, and here is the only dangerous step. <b>If ${a} < 0, reverse the inequality symbol.</b> <b>Why:</b> see the proof below.`,
          '<b>Write the solution set</b> in interval notation.',
          '<b>Represent on a number line</b>, choosing hollow (<, >) or filled (≤, ≥) circles.',
        ],
      },
      {
        t: 'p',
        html: `<b>Proof of the sign-flip rule (why Step 5 reverses).</b> Start from the definition of order: ${a} < ${b} means precisely that ${b} − ${a} is a positive number, i.e. ${b} − ${a} > 0. Now take any negative ${c} < 0. A positive number multiplied by a negative number is negative, so<br>${c}(${b} − ${a}) < 0.<br>Distribute:<br><i>cb</i> − <i>ca</i> < 0 ⟹ <i>cb</i> < <i>ca</i><br>⟹ <i>ca</i> > <i>cb</i>.<br>We began with ${a} < ${b} and ended with <i>ca</i> > <i>cb</i>. The direction genuinely flipped; this is not a trick or a convention to memorise, it follows from what “less than” means. ■`,
      },
      {
        t: 'p',
        html: '<b>Procedure for a double (compound) inequality</b>, e.g. <i>p</i> ≤ expression ≤ <i>q</i>: treat it as <b>one object with three parts</b> and apply every operation to all three simultaneously. Whatever you do to the middle, do identically to both ends. If a step requires multiplying by a negative, the <b>entire chain reverses</b>, and crucially, the two endpoints swap their roles, so <i>p</i> ≤ ⋯ ≤ <i>q</i> becomes ⋯ ≥ ⋯ ≥ ⋯, which you then re-read left-to-right. (The most common error is operating on only the middle and one end.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        fig: 'm11-05-fig-5.2',
        q: `Solve 3(2${x} − 1) ≥ 2(${x} + 3) − 5 and represent the solution on a number line.`,
        steps: [
          `<b>Given:</b> 3(2${x} − 1) ≥ 2(${x} + 3) − 5.`,
          `Remove brackets:<br>6${x} − 3 ≥ 2${x} + 6 − 5<br>⟹ 6${x} − 3 ≥ 2${x} + 1.`,
          `Collect terms (add 3, subtract 2${x}, both safe):<br>6${x} − 2${x} ≥ 1 + 3 ⟹ 4${x} ≥ 4.`,
          `Divide by +4 (positive: no flip):<br>${x} ≥ 1.`,
        ],
        ans: '[1, ∞).',
      },
      {
        t: 'ex',
        tag: 'JEE Main / Speed Trap',
        q: `Solve the double inequality −7 ≤ ${fr(`3 − 2${x}`, '4')} < 5.`,
        steps: [
          'The trap is twofold: it is a compound inequality and it forces a divide-by-negative. Move fast but flip carefully.',
          `Multiply all three parts by 4 (positive: directions hold):<br>−28 ≤ 3 − 2${x} < 20.`,
          `Subtract 3 from all three parts:<br>−31 ≤ −2${x} < 17.`,
          `Divide all three parts by −2: <b>flip both symbols</b>, and the chain reverses:<br>${fr('31', '2')} ≥ ${x} > −${fr('17', '2')}.`,
          `Re-read left-to-right:<br>−${fr('17', '2')} < ${x} ≤ ${fr('31', '2')}.`,
          '<b>Speed check:</b> the strict < rode in on the 5 side and the non-strict ≤ on the −7 side; after the flip they correctly attach to the lower (strict) and upper (filled) bounds respectively. If your brackets came out the other way, you forgot to swap inclusivity along with the symbols.',
        ],
        ans: `(−${fr('17', '2')}, ${fr('31', '2')}].`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept: inequalities + integer counting',
        q: `Find the number of integer values of ${x} satisfying both 3${x} − 2 > 4 and 2(${x} − 1) ≤ ${x} + 3, and find their sum.`,
        steps: [
          `First inequality:<br>3${x} − 2 > 4 ⟹ 3${x} > 6<br>⟹ ${x} > 2.`,
          `Second inequality:<br>2${x} − 2 ≤ ${x} + 3 ⟹ ${x} ≤ 5.`,
          `The system requires <b>both</b>, so intersect the solution sets:<br>${x} > 2 and ${x} ≤ 5 ⟹ ${x} ∈ (2, 5].`,
          'The integers in (2, 5] are 3, 4, 5.',
          '<b>The multi-concept move:</b> solving each inequality is routine; the marks live in correctly <b>intersecting</b> the two solution sets and then translating a continuous interval into a discrete integer count: note 2 is excluded (strict) but 5 is included (non-strict).',
        ],
        ans: '<b>Count</b> = 3; <b>sum</b> = 3 + 4 + 5 = 12.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find all real values of the parameter ${a} for which the inequality ${a}(${x} − 1) < 2${x} + 3 holds for every real number ${x}.`,
        steps: [
          `Expand and gather ${x}-terms on one side:<br><i>ax</i> − ${a} < 2${x} + 3<br>⟹ (${a} − 2)${x} < ${a} + 3.`,
          `Everything now hinges on the <b>coefficient of ${x}</b>, namely (${a} − 2), and the deep step is realising it can vanish.`,
          `• <b>If</b> ${a} − 2 > 0 (i.e. ${a} > 2): dividing gives ${x} < ${fr(`${a} + 3`, `${a} − 2`)}, a half-line: not all of ℝ. Rejected.<br>• <b>If</b> ${a} − 2 < 0 (i.e. ${a} < 2): dividing flips the sign, ${x} > ${fr(`${a} + 3`, `${a} − 2`)}, again only a half-line. Rejected.<br>• <b>If</b> ${a} − 2 = 0 (i.e. ${a} = 2): the inequality collapses to 0 ⋅ ${x} < 5, that is 0 < 5: <b>true for every</b> ${x}, independent of ${x}.`,
          `So the inequality is satisfied by all real ${x} <b>only when</b> ${a} <b>= 2.</b>`,
          '<b>Why it’s Advanced-level:</b> the uncommon insight is that a “linear” inequality stops being linear the instant its leading coefficient is zero, and that degenerate case (usually a nuisance) is the only case that gives the required universal solution.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Solve ${fr(x, '2')} + 3 < ${fr(x, '4')} + 5 and show the solution on a number line.`,
            a: `${x} < 8, i.e. (−∞, 8).`,
          },
          {
            q: `[CBSE] Solve 5(2 − ${x}) ≥ 3(4 − ${x}) + 2 and write the answer in interval notation.`,
            a: '(−∞, −2].',
          },
          {
            q: `[JEE Main] Find the number of integers satisfying −5 < ${fr(`3 − 2${x}`, '2')} ≤ 4.`,
            a: '9 integers (−2 through 6).',
          },
          {
            q: `[JEE Main] Solve the system 2${x} − 1 > ${x} + 2 and 3 − ${x} ≥ 2${x} − 9; give the solution set.`,
            a: '(3, 4].',
          },
          {
            q: `[JEE Advanced] Find all real values of ${a} for which the inequality (${a} − 1)${x} > 3 has <b>no</b> solution.`,
            a: `${a} = 1.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The solution set of ${fr(`2 − 3${x}`, '5')} ≤ −4 is`,
        opts: [
          {
            label: `(−∞, ${fr('22', '3')}]`,
            nudge: '<b>(a)</b> forgets the flip when dividing by −3: the signature error.',
          },
          { label: `[${fr('22', '3')}, ∞)`, nudge: null },
          {
            label: `(−∞, −${fr('22', '3')}]`,
            nudge: `<b>(c)</b> drops a negative sign while isolating ${x}, landing on the wrong side of 0.`,
          },
          {
            label: `(${fr('22', '3')}, ∞)`,
            nudge: `<b>(d)</b> flips the direction but drops the equality: ≥ becomes >, so ${fr('22', '3')} is wrongly excluded.`,
          },
        ],
        correct: 1,
        solution: `Multiply by 5: 2 − 3${x} ≤ −20 ⇒ −3${x} ≤ −22. Divide by −3 and <b>flip</b>: ${x} ≥ ${fr('22', '3')}.`,
      },
      {
        t: 'mcq',
        q: `Which interval equals {${x} ∶ −3 < ${x} ≤ 4}?`,
        opts: [
          { label: '[−3, 4]', nudge: '<b>(a)</b> includes both ends: wrongly admits −3.' },
          { label: '(−3, 4)', nudge: '<b>(b)</b> excludes both: wrongly drops 4.' },
          { label: '(−3, 4]', nudge: null },
          { label: '[−3, 4)', nudge: '<b>(d)</b> has the brackets exactly reversed.' },
        ],
        correct: 2,
        solution: 'Strict at −3 ⇒ round bracket; non-strict at 4 ⇒ square bracket. All three wrong options are interval-notation errors.',
      },
      {
        t: 'mcq',
        q: `The solution of −2 ≤ 2${x} − 4 ≤ 6 is`,
        opts: [
          { label: '[1, 5]', nudge: null },
          { label: '[−1, 5]', nudge: '<b>(b)</b> added 4 to the middle and right but not to the left: −2 ÷ 2 = −1.' },
          { label: '[1, 10]', nudge: '<b>(c)</b> forgot to divide the right end by 2.' },
          { label: '[−3, 1]', nudge: '<b>(d)</b> subtracted instead of added 4.' },
        ],
        correct: 0,
        solution: `Add 4 to all three parts: 2 ≤ 2${x} ≤ 10; divide all by 2: 1 ≤ ${x} ≤ 5.`,
      },
      {
        t: 'mcq',
        q: `If |3 − ${x}| ≤ 5, then ${x} belongs to`,
        opts: [
          { label: '[−2, 8]', nudge: null },
          { label: '[−8, 2]', nudge: `<b>(b)</b> is the range of −${x}, not ${x}: it drops the minus sign instead of multiplying −8 ≤ −${x} ≤ 2 by −1 and flipping.` },
          {
            label: '[2, 8]',
            nudge: `<b>(c)</b> mishandles the sign on the lower end, getting ${x} ≥ 2 instead of ${x} ≥ −2.`,
          },
          { label: '(−2, 8)', nudge: '<b>(d)</b> used strict brackets although the inequality is ≤.' },
        ],
        correct: 0,
        solution: `|3 − ${x}| ≤ 5 ⇒ −5 ≤ 3 − ${x} ≤ 5<br>⇒ −8 ≤ −${x} ≤ 2; multiply by −1 and flip the chain: −2 ≤ ${x} ≤ 8.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to flip on a negative.</b> By far the costliest mistake. Any time you multiply or divide by a negative number, the symbol must reverse. Build the reflex: see a negative coefficient → flip before you write the next line.',
          `<b>Cross-multiplying by a variable expression.</b> Writing ${fr(`${x} + 1`, `${x} + 3`)} < 2 and “multiplying both sides by ${x} + 3” is illegal: ${x} + 3 may be negative, so you cannot know whether to flip. Bring everything to one side and combine into a single fraction instead.`,
          '<b>Mixing up hollow and filled circles / round and square brackets.</b> < and > are always hollow/round; ≤ and ≥ are always filled/square; ∞ is always round.',
          '<b>Breaking a double inequality apart wrongly.</b> Operate on all three parts together; never leave one end behind.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the 10-second sanity check.</b> After finding an interval, pick any number inside it and substitute it into the <b>original</b> inequality. If it satisfies, your direction and brackets are almost certainly right; if it fails, you most likely missed a flip. For Example 2, test ${x} = 0 ∈ (−${fr('17', '2')}, ${fr('31', '2')}]: ${fr('3 − 0', '4')} = 0.75, and indeed −7 ≤ 0.75 < 5. ✓`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Solution is a range, not a point', note: 'answer in interval form.' },
          { f: 'Safe moves', note: 'add/subtract anything; multiply/divide by a <b>positive</b> number.' },
          {
            f: 'Danger move',
            note: `multiply/divide by a <b>negative</b> ⇒ <b>reverse the sign.</b><br>${a} < ${b}, ${c} < 0 ⟹ <i>ca</i> > <i>cb</i>`,
          },
          {
            f: 'General form',
            note: `<i>ax</i> + ${b} > 0 ⇒ ${x} > −${BA} if ${a} > 0, and ${x} < −${BA} if ${a} < 0.`,
          },
          {
            f: 'Brackets',
            note: '[ ] includes (filled •, for ≤ ≥); ( ) excludes (hollow ∘, for < >); ∞ <b>is always round.</b>',
          },
          { f: 'Compound inequality', note: 'operate on all three parts at once; a negative flips the whole chain.' },
          {
            f: '<b>Never</b> cross-multiply by an unknown-sign expression; <b>never</b> square unless both sides are non-negative.',
            note: '',
          },
        ],
        aids: ['“Negative flips, positive sticks.”', '“Infinity never gets a hug (square bracket).”'],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 425–435 ────────────────
  {
    n: '02',
    title: 'Linear Inequalities in Two Variables',
    kalam: 'A two-variable inequality always answers with a region, never a point.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A reliable CBSE Boards earner: a 3-mark “solve graphically” or a 5-mark “system of inequalities” question appears almost every year ${ESTIMATE}, and the reverse problem (write the inequalities for a shaded region) shows up in the Exemplar. <b>JEE Main</b> treats it as the conceptual seed of Linear Programming (Class 12), so the half-plane and feasible-region ideas matter more than the marks suggest. <b>JEE Advanced</b> never asks it directly ${ESTIMATE} but leans on the region-and-vertex reasoning inside optimisation problems. (No NEET relevance: Mathematics is outside the NEET syllabus.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'In Topic 01, a linear inequality in one variable carved out a stretch of the one-dimensional number line. Now we add a second variable, and something beautiful happens: the answer grows a dimension. The solution of a linear inequality in <b>two</b> variables is no longer a stretch of a line; it is an entire <b>flat region</b> of the two-dimensional plane.',
      },
      {
        t: 'p',
        html: `Here is the picture to hold in your head. Draw the line ${x} + ${y} = 4 on graph paper. That single line slices the whole plane cleanly into two pieces, like a knife through a roti. Each piece is called a <b>half-plane</b>. Every point in the plane is now in exactly one of three places: on the line, in the half-plane on one side, or in the half-plane on the other side. A linear inequality such as ${x} + ${y} < 4 simply asks: “give me all the points on a particular one of those two sides.”`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Suppose you have ₹120 to spend at a stationery shop, where a register costs ₹40 and a pen costs ₹20. If you buy ${x} registers and ${y} pens, your spending is 40${x} + 20${y}, and staying within budget means<br>40${x} + 20${y} ≤ 120.<br>There is no single answer here. Buy 3 registers and no pens (₹120, exactly at the limit). Or 2 registers and 1 pen (₹100, comfortably under). Or 1 register and 3 pens (₹100). Or nothing at all (₹0). Every one of these is a valid (${x}, ${y}) pair, and if you plotted all of them, they would dot a whole triangular patch of the plane (and fill it, once fractions of a register or pen are allowed). That patch, the <b>solution region</b>, is the answer. A two-variable inequality always answers with a region, never a point.`,
      },
      {
        t: 'p',
        html: 'The genius of the method is that you do not have to test infinitely many points. Because a straight line divides the plane into just two sides, and because a linear expression keeps the same sign throughout each side, you only need to test <b>one</b> point to learn the fate of an entire half-plane. Pick a convenient point not on the line (the origin (0, 0) is usually easiest), substitute it, and ask whether it satisfies the inequality. If yes, the origin’s side is the answer; if no, the other side is. One substitution decides everything.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b><br>• The expression must be genuinely <b>two-variable and linear</b>: of the form <i>ax</i> + <i>by</i> (≶) ${c} with ${a}, ${b} not both zero. No ${x}<sup>2</sup>, no <i>xy</i>, no ${fr('1', x)}.<br>• An inequality like ${x} ≥ 2, when asked for “in the plane,” is still two-variable: it describes a vertical half-plane, not a single point on the number line. Watch for this shift of context: the same symbols mean a stretch of line in 1-D and a half-plane in 2-D.<br>• The convenient test point (0, 0) <b>fails whenever the boundary line passes through the origin</b> (because then the origin lies on the line and cannot tell the two sides apart). In that case you must choose a different test point. This single oversight is the most common mistake in the whole topic.`,
      },

      { t: 'part', title: 'Key definitions and rules' },
      {
        t: 'p',
        html: `A line <i>ax</i> + <i>by</i> = ${c} (with ${a}, ${b} not both zero) divides the Cartesian plane into two <b>half-planes</b>. The set of all points satisfying a linear inequality in two variables is its <b>solution region</b>.`,
      },
      {
        t: 'p',
        html: `<b>Core rules (your “formulas” for this topic):</b><br>• <b>Boundary line.</b> Replace the inequality sign with = and draw <i>ax</i> + <i>by</i> = ${c}.<br>• <b>Line style (strictness):</b><br>– ≥ or ≤ ⇒ the boundary is <b>included</b>: draw it as a <b>solid</b> line.<br>– > or < ⇒ the boundary is <b>excluded</b>: draw it as a <b>dotted/broken</b> line.<br>• <b>Test-point rule.</b> Choose any point <i>P</i> not on the line. If <i>P</i> satisfies the inequality, shade the half-plane containing <i>P</i>; otherwise shade the other half-plane.<br>• <b>System of inequalities.</b> The solution is the <b>intersection</b> (overlap) of all the individual solution regions: the area satisfying every inequality at once.<br>• <b>Non-negativity in real problems.</b> Quantities like units produced or articles bought cannot be negative, so ${x} ≥ 0, ${y} ≥ 0 are added, confining the region to the <b>first quadrant</b>.`,
      },
      {
        t: 'p',
        html: '<b>Region rigor (the checkpoints for bounded or unbounded regions, empty systems and vertices):</b><br>• A solution region may be <b>bounded</b> (enclosed on all sides, finite area, e.g. a triangle) or <b>unbounded</b> (extending infinitely in some direction).<br>• A system can have an <b>empty</b> solution set ∅ when the half-planes share no common point.<br>• The <b>corner points (vertices)</b> of a bounded region are found by solving the boundary lines two at a time; these vertices become decisive in Class 12 Linear Programming.<br>• Solid line ⇔ filled circle in one variable; dotted line ⇔ hollow circle. The strictness convention is one idea wearing two costumes.',
      },

      { t: 'part', title: 'CBSE board derivation: why an inequality is a half-plane' },
      {
        t: 'p',
        html: 'The procedure in the Key definitions and rules part (“test a point, shade a side”) works, but a CBSE long-answer question may ask why a linear inequality corresponds to an entire half-plane. Here is the rigorous reason.',
      },
      {
        t: 'p',
        html: `<b>Claim.</b> Every point (${x}, ${y}) satisfying <i>ax</i> + <i>by</i> > ${c} (take ${b} > 0 for definiteness) lies entirely in one of the two half-planes determined by the line <i>ax</i> + <i>by</i> = ${c}, and conversely every point of that half-plane satisfies the inequality.`,
      },
      {
        t: 'p',
        html: `<b>Setup.</b> Consider the line <i>ax</i> + <i>by</i> = ${c} with ${b} > 0. Pick any point <i>P</i>(<i>α</i>, <i>β</i>) that lies <b>on</b> the line, so<br><i>aα</i> + <i>bβ</i> = ${c}. (1)`,
      },
      { t: 'fig', id: 'm11-05-fig-5.3' },
      {
        t: 'p',
        html: `<b>Forward direction.</b> Now take a point <i>Q</i>(<i>α</i>, <i>γ</i>) directly above <i>P</i>: same ${x}-coordinate <i>α</i>, but higher up, so <i>γ</i> > <i>β</i>. Because ${b} > 0, multiplying this inequality by ${b} preserves its direction:<br><i>bγ</i> > <i>bβ</i>.<br>Add <i>aα</i> to both sides (addition never disturbs an inequality):<br><i>aα</i> + <i>bγ</i> > <i>aα</i> + <i>bβ</i>.<br>But by (1) the right-hand side is exactly ${c}, so<br><i>aα</i> + <i>bγ</i> > ${c}.<br>That is, <i>Q</i> satisfies <i>ax</i> + <i>by</i> > ${c}. Since <i>Q</i> was any point lying above the line, <b>every</b> point in the upper half-plane satisfies the inequality.`,
      },
      {
        t: 'p',
        html: `<b>Converse direction.</b> Suppose instead we start with a point <i>Q</i>(<i>α</i>, <i>γ</i>) satisfying <i>aα</i> + <i>bγ</i> > ${c}. Using (1) to replace ${c},<br><i>aα</i> + <i>bγ</i> > <i>aα</i> + <i>bβ</i><br>⟹ <i>bγ</i> > <i>bβ</i><br>⟹ <i>γ</i> > <i>β</i> (since ${b} > 0),<br>which says <i>Q</i> lies above the line. So every solution point lives in the upper half-plane.`,
      },
      {
        t: 'p',
        html: `<b>Conclusion.</b> The two directions together prove that the solution set of <i>ax</i> + <i>by</i> > ${c} is precisely the upper half-plane (when ${b} > 0). If ${b} < 0, the identical argument with the inequality reversed shows the solution is the lower half-plane instead; if ${b} = 0, the line is vertical and the same argument, moving across in ${x}, gives a right or left half-plane. Either way, the graph of a linear inequality in two variables is exactly one half-plane. ■`,
      },
      {
        t: 'p',
        html: `<b>The practical pay-off.</b> This is why a single test point suffices: the sign of <i>ax</i> + <i>by</i> − ${c} is constant throughout each half-plane, so one specimen point reports for its entire side.`,
      },
      {
        t: 'proc',
        title: 'Working procedure (distilled)',
        steps: [
          `Write the boundary line <i>ax</i> + <i>by</i> = ${c} and plot it using its intercepts (${fr(c, a)}, 0) and (0, ${fr(c, b)}) (when ${a}, ${b}, ${c} are all non-zero; otherwise plot any two points of the line).`,
          'Draw it <b>solid</b> for ≤ / ≥, <b>dotted</b> for < / >.',
          'Choose a test point off the line: use (0, 0) unless the line passes through the origin.',
          'Substitute; shade the test point’s side if it satisfies the inequality, otherwise the other side.',
          'For a system, repeat for each inequality and keep only the <b>common</b> (overlapping) shaded region.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        fig: 'm11-05-fig-5.4',
        q: `Solve 2${x} + 3${y} ≤ 12 graphically.`,
        steps: [
          `<b>Boundary line:</b> 2${x} + 3${y} = 12. Intercepts: put ${y} = 0 ⇒ ${x} = 6, giving (6, 0); put ${x} = 0 ⇒ ${y} = 4, giving (0, 4). Since the inequality is ≤, draw the line <b>solid</b> (boundary included).`,
          '<b>Test point:</b> the line does not pass through the origin, so use (0, 0):<br>2(0) + 3(0) = 0 ≤ 12: true.',
          'So shade the half-plane <b>containing the origin</b> (the side below-left of the line).',
        ],
        ans: `All points on or below the line 2${x} + 3${y} = 12, including the boundary.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main / Speed Trap',
        q: `Solve ${y} > 2${x} graphically.`,
        steps: [
          `<b>The trap:</b> rewrite as −2${x} + ${y} > 0. The boundary ${y} = 2${x} <b>passes through the origin</b>, so (0, 0) lies on the line and is useless as a test point: substituting it gives 0 > 0, false, but that tells you nothing about either side. Reaching for (0, 0) on autopilot is the classic error here.`,
          '<b>Fix:</b> pick any other off-line point, say (1, 0):<br>0 > 2(1) = 2: false.',
          'So (1, 0) is <b>not</b> in the region; shade the <b>other</b> side. A quick confirmation with (0, 1): 1 > 0: true, and (0, 1) lies on that other side. Draw the line <b>dotted</b> (strict >).',
          `<b>Speed lesson:</b> before testing (0, 0), glance at the constant term. If ${c} = 0, the line runs through the origin: skip (0, 0) and grab (1, 0) or (0, 1) instead.`,
        ],
        ans: `The open half-plane above the line ${y} = 2${x}, boundary excluded.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, multi-concept: inequalities + coordinate geometry',
        fig: 'm11-05-fig-5.5',
        q: `Find the corner points (vertices) of the region defined by ${x} + ${y} ≤ 4, ${x} ≥ 1, ${y} ≥ 0.`,
        steps: [
          `Each constraint is a half-plane:<br>• ${x} + ${y} ≤ 4: on/below the line ${x} + ${y} = 4.<br>• ${x} ≥ 1: on/right of the vertical line ${x} = 1.<br>• ${y} ≥ 0: on/above the ${x}-axis.`,
          `The feasible region is their overlap: a bounded triangle. Its vertices are the pairwise intersections of the boundary lines (this is where the coordinate-geometry skill enters: solving simultaneous linear equations):<br>• ${x} = 1 and ${y} = 0 ⇒ (1, 0).<br>• ${x} + ${y} = 4 and ${y} = 0 ⇒ (4, 0).<br>• ${x} + ${y} = 4 and ${x} = 1 ⇒ (1, 3).`,
          'The region is bounded (a finite triangle).',
        ],
        ans: '(1, 0), (4, 0), (1, 3).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find the area of the region defined by ${x} + ${y} ≤ 6, ${x} + 2${y} ≤ 8, ${x} ≥ 0, ${y} ≥ 0.`,
        steps: [
          'This needs careful vertex hunting: the subtle step is deciding which constraint binds along each edge.',
          `The non-negativity conditions confine us to the first quadrant. Now find the vertices:<br>• <b>Origin:</b> (0, 0) satisfies all four: a vertex.<br>• <b>On the ${x}-axis (${y} = 0):</b> ${x} + ${y} ≤ 6 gives ${x} ≤ 6; ${x} + 2${y} ≤ 8 gives ${x} ≤ 8. The tighter bound is ${x} ≤ 6, so the boundary meets the axis at (6, 0), and (6, 0) satisfies 6 + 0 ≤ 8. Vertex (6, 0).<br>• <b>Intersection of the two slant lines:</b> subtract ${x} + ${y} = 6 from ${x} + 2${y} = 8 to get ${y} = 2, hence ${x} = 4. Vertex (4, 2) (both coordinates ≥ 0 ✓).<br>• <b>On the ${y}-axis (${x} = 0):</b> ${x} + ${y} ≤ 6 gives ${y} ≤ 6; ${x} + 2${y} ≤ 8 gives ${y} ≤ 4. The tighter bound is ${y} ≤ 4, so vertex (0, 4).`,
          'So the feasible region is the quadrilateral with vertices, in order,<br>(0, 0) → (6, 0) → (4, 2) → (0, 4).',
          `Apply the <b>shoelace formula</b>, Area = ${fr('1', '2')}|∑(<i>x</i><sub><i>i</i></sub><i>y</i><sub><i>i</i>+1</sub> − <i>x</i><sub><i>i</i>+1</sub><i>y</i><sub><i>i</i></sub>)|:<br>(0 ⋅ 0 − 6 ⋅ 0) + (6 ⋅ 2 − 4 ⋅ 0)<br>+ (4 ⋅ 4 − 0 ⋅ 2) + (0 ⋅ 0 − 0 ⋅ 4)<br>= 0 + 12 + 16 + 0 = 28.`,
          `Area = ${fr('1', '2')} × 28.`,
          '<b>Why it’s Advanced-level:</b> the work is not in graphing but in correctly identifying which of two competing constraints clips each axis, and then assembling the four vertices in cyclic order before the shoelace step. A single mis-assigned vertex throws off the entire area.',
        ],
        ans: '14 square units.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Solve 3${x} + 2${y} ≥ 6 graphically.`,
            a: 'Solid line through (2, 0), (0, 3); shade the side <b>not</b> containing the origin (since 0 ≥ 6 is false).',
          },
          {
            q: `[CBSE] Solve ${x} − 2${y} < 4 graphically.`,
            a: 'Dotted line through (4, 0), (0, −2); shade the side <b>containing</b> the origin.',
          },
          {
            q: `[JEE Main] Find the vertices of the region ${x} + ${y} ≤ 5, ${x} ≥ 0, ${y} ≥ 0.`,
            a: '(0, 0), (5, 0), (0, 5).',
          },
          {
            q: `[JEE Main] Determine whether the solution region of 2${x} + ${y} ≥ 4, ${x} + ${y} ≥ 3, ${x} ≥ 0, ${y} ≥ 0 is bounded or unbounded.`,
            a: 'Unbounded.',
          },
          {
            q: `[JEE Advanced] Find the area enclosed by ${x} + ${y} ≤ 4, ${y} ≤ ${x}, ${x} ≥ 0, ${y} ≥ 0.`,
            a: '4 square units (triangle with vertices (0, 0), (4, 0), (2, 2)).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `While solving 2${x} − ${y} > 0 graphically, which of the following points <b>cannot</b> be used as a test point?`,
        opts: [
          {
            label: '(1, 1)',
            nudge: `<b>(a)</b> gives 2(1) − 1 = 1 ≠ 0: (1, 1) lies off the line, so it is a valid test point.`,
          },
          {
            label: '(0, 2)',
            nudge: `<b>(b)</b> gives 2(0) − 2 = −2 ≠ 0: (0, 2) lies off the line, so it is a valid test point.`,
          },
          { label: '(2, 4)', nudge: null },
          {
            label: '(3, 1)',
            nudge: `<b>(d)</b> gives 2(3) − 1 = 5 ≠ 0: (3, 1) lies off the line, so it is a valid test point.`,
          },
        ],
        correct: 2,
        solution: `The boundary line is 2${x} − ${y} = 0, i.e. ${y} = 2${x}. A test point must not lie on this line. Check (2, 4): 2(2) − 4 = 0: it sits exactly on the line, so it cannot distinguish the two half-planes. A student who never checks whether the chosen point lies on the boundary can pick (2, 4) blindly.`,
      },
      {
        t: 'mcq',
        q: `The boundary line for the inequality ${x} + 2${y} ≤ 5 should be drawn as`,
        opts: [
          {
            label: 'dotted, boundary excluded',
            nudge: '<b>(a)</b> confuses ≤ with < (dotted is only for strict inequalities).',
          },
          { label: 'solid, boundary included', nudge: null },
          {
            label: 'solid, boundary excluded',
            nudge: '<b>(c)</b> pairs a solid line with an excluded boundary; a solid line means included.',
          },
          {
            label: 'dotted, boundary included',
            nudge: '<b>(d)</b> pairs a dotted line with an included boundary; a dotted line means excluded.',
          },
        ],
        correct: 1,
        solution: 'The sign is ≤, which includes equality, so the boundary points belong to the solution: drawn as a solid line. All three wrong options are line-style slips (the two-variable cousin of the open/closed-circle error).',
      },
      {
        t: 'mcq',
        q: `The solution region of the system ${x} ≥ 0, ${y} ≥ 0, ${x} + ${y} ≤ 1 is`,
        opts: [
          { label: 'the entire first quadrant', nudge: '<b>(a)</b> ignores the third inequality entirely.' },
          { label: 'a triangle with vertices (0, 0), (1, 0), (0, 1)', nudge: null },
          {
            label: 'an unbounded region',
            nudge: `<b>(c)</b> forgets that ${x} + ${y} ≤ 1 caps the region, making it finite.`,
          },
          {
            label: 'the empty set',
            nudge: '<b>(d)</b> wrongly treats the three half-planes as having no overlap (a system-intersection error: confusing intersection with contradiction).',
          },
        ],
        correct: 1,
        solution: `The first two constraints give the first quadrant; ${x} + ${y} ≤ 1 then clips it to the triangle below the line ${x} + ${y} = 1, whose corners are (0, 0), (1, 0), (0, 1).`,
      },
      {
        t: 'mcq',
        q: `A shaded region lies <b>below</b> the line ${x} + ${y} = 2, <b>contains the origin</b>, and <b>includes</b> the boundary line itself. The inequality representing it is`,
        opts: [
          {
            label: `${x} + ${y} > 2`,
            nudge: '<b>(a)</b> is strict and points away from the origin: 0 > 2 is false.',
          },
          {
            label: `${x} + ${y} < 2`,
            nudge: '<b>(b)</b> has the right side but a strict sign, which would exclude the boundary the question says is included.',
          },
          { label: `${x} + ${y} ≤ 2`, nudge: null },
          {
            label: `${x} + ${y} ≥ 2`,
            nudge: '<b>(d)</b> includes the boundary but points away from the origin: 0 ≥ 2 is false.',
          },
        ],
        correct: 2,
        solution: `Test the origin: 0 + 0 = 0, and since the origin must satisfy the inequality, we need 0 ≤ 2: true for ≤. The boundary is included, so the sign is non-strict: ${x} + ${y} ≤ 2.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Testing (0, 0) on a line through the origin.</b> When ${c} = 0, the boundary passes through the origin, so (0, 0) is on the line and cannot decide the side. Always glance at the constant term first; if it is zero, pick (1, 0) or (0, 1) instead.`,
          '<b>Wrong line style.</b> Strict inequalities (<, >) get a <b>dotted</b> line; non-strict (≤, ≥) get a <b>solid</b> line. Mixing these up is the two-variable version of the open/closed-circle mistake and costs presentation marks on the Boards.',
          '<b>Shading the wrong half-plane.</b> After the test point gives “false,” remember to shade the opposite side, not the side you tested. Read your own conclusion carefully.',
          '<b>Union instead of intersection for a system.</b> A system demands all inequalities hold simultaneously, so the answer is the <b>common overlap</b>, never the combined shading. Only the doubly- (or triply-) shaded patch counts.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the one-point audit.</b> After shading, pick any point clearly inside your final region and substitute it into <b>every</b> original inequality. If it satisfies all of them, your region and line styles are almost certainly right; if it fails even one, you shaded a wrong side or mishandled a constraint. For Example 4, test (1, 1): 1 + 1 = 2 ≤ 6 ✓, 1 + 2 = 3 ≤ 8 ✓, ${x}, ${y} ≥ 0 ✓: region confirmed.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `A line <i>ax</i> + <i>by</i> = ${c} splits the plane into two <b>half-planes</b>; the solution of a linear inequality is <b>one entire half-plane</b>.`,
            note: '',
          },
          { f: 'Line style', note: '≤, ≥ ⇒ <b>solid</b> (included); <, > ⇒ <b>dotted</b> (excluded).' },
          {
            f: 'Test-point rule',
            note: 'substitute a point off the line: use (0, 0) <b>unless the line passes through the origin</b> (then use (1, 0) or (0, 1)). Satisfies ⇒ shade that side; fails ⇒ shade the other.',
          },
          { f: 'System ⇒ intersection.', note: 'Keep only the region common to all inequalities.' },
          {
            f: `<b>Real-world constraints</b> add ${x} ≥ 0, ${y} ≥ 0, restricting the region to the <b>first quadrant</b>.`,
            note: '',
          },
          {
            f: 'Regions are <b>bounded</b> (finite, has area) or <b>unbounded</b>, and a system can be empty (∅); corner points come from solving boundary lines in pairs.',
            note: '',
          },
        ],
        aids: [
          '“Solid includes, dotted excludes.”',
          '“Origin on the line? Then origin is no spy: pick another.”',
          '“System means overlap, not pile-up.”',
        ],
      },
    ],
  },
];
