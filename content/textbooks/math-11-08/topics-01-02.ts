import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 01–02: the book's Units 1–2, pp. 677–693 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 * pp. 675–676 (title and contents) are not copied. Topic 01 runs pp. 677–682,
 * Topic 02 pp. 683–693; Unit 3 starts on p. 694. Each unit's numbered sections
 * ("1. Exam Relevance" … "8. Common Pitfalls, Pro-Tips & Cheat Sheet") are its
 * parts, Section 8 split into "Common pitfalls and pro-tips" and "Cheat sheet".
 * Figures: 8.1 (caption p. 677, drawn p. 678) after Topic 01's Indian-context
 * anchors; 8.2 (caption p. 684, drawn p. 685) after Topic 02's "deep idea"
 * paragraph. Neither topic has an unnumbered drawing. Every fraction is stacked
 * (<frac>); no em dashes.
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
const l = I('l');
const m = I('m');
const n = I('n');
const x = I('x');
const u = I('u');
const A = I('A');
const B = I('B');
const an = sb('a', n);
const ak = sb('a', k);
const bk = sb('b', k);
const a1 = sb('a', '1');
const a2 = sb('a', '2');
const a3 = sb('a', '3');
const am = sb('a', m);
const Sn = sb('S', n);
const Ak = sb('A', k);
const anPrime = `<i>a</i>′<sub><i>n</i></sub>`;
const anm1 = `<i>a</i><sub><i>n</i>−1</sub>`;
const akm1 = `<i>a</i><sub><i>k</i>−1</sub>`;
const SK1N = SUM(`${k}=1`, n);
const N2 = `${n}<sup>2</sup>`;
const HALF_N = fr(n, '2');
const SUM_FORM = `${HALF_N}[2${a} + (${n} − 1)${d}]`;
const AN_FORM = `${a} + (${n} − 1)${d}`;
const AB2 = fr(`${a} + ${b}`, '2');
const AC2 = fr(`${a} + ${c}`, '2');
const BA_M1 = fr(`${b} − ${a}`, `${m} + 1`);
const X2 = `2<sup>${x}</sup>`;
const LOG10 = 'log<sub>10</sub>';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 677–682 ────────────────
  {
    n: '01',
    title: 'Foundations: Sequences and Series',
    kalam: 'Sequences are about the terms; series are about the running total.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the vocabulary and notation that the entire chapter is built on. It is rarely tested directly in JEE ${ESTIMATE}, but every later question silently assumes it.<br>• <b>CBSE Boards:</b> Direct questions on writing the first few terms from a general term ${an}, or finding ${an} from a pattern, are common 1–2 mark items ${ESTIMATE}.<br>• <b>JEE Main / Advanced:</b> Almost never asked in isolation ${ESTIMATE}, but the language (“general term,” “∑,” “finite/infinite series”) and the habit of writing a general term before summing are prerequisites for AP, GP, AGP, and special-series problems. A student weak here makes silent errors everywhere downstream.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A <b>sequence</b> is just an ordered list of numbers that follows a rule: like house numbers along one side of a street, or the dates of every Sunday this year. Order matters: the 1st term, 2nd term, 3rd term each have a fixed position.',
      },
      {
        t: 'p',
        html: `Formally, a sequence is a <b>function whose inputs are the counting numbers</b> 1, 2, 3, … and whose output is the term at that position. Feed in ${n}, get out ${an}, the ${n}th term. That is the single most important habit in this chapter: think of the term as a function of its position.`,
      },
      {
        t: 'p',
        html: 'A <b>series</b> is what you get when you stop listing the terms and start <b>adding them up</b>. The sequence 1, 2, 3, 4 becomes the series 1 + 2 + 3 + 4. Sequences are about the terms; series are about the running total.',
      },
      {
        t: 'p',
        html: `Indian-context anchors:<br>• <b>Cricket over-by-over score:</b> the runs in each over form a sequence; the cumulative score after ${n} overs is the series.<br>• <b>A staircase’s step numbers</b> 1, 2, 3, …: a sequence; the total number of steps climbed: a series.<br>• <b>The Fibonacci pattern</b> 1, 1, 2, 3, 5, 8, … (each term the sum of the previous two) appears in flower petals and the spirals of a sunflower: a recursively defined sequence, studied in India by Pingala centuries before Fibonacci, and by Hemachandra a few decades before him.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Sequence.</b> A function ${a} ∶ ℕ → ℝ (or from {1, 2, …, ${m}} for a finite sequence). Its values ${a1}, ${a2}, ${a3}, … are the <b>terms</b>; ${an} is the <b>general term</b> (or ${n}th term).<br>• <b>Finite sequence:</b> finitely many terms, ${a1}, ${a2}, …, ${am}.<br>• <b>Infinite sequence:</b> unending, ${a1}, ${a2}, ${a3}, …<br>• <b>Two ways to define a sequence:</b><br>1. <b>Explicit:</b> a formula for ${an} directly (e.g. ${an} = 2${n} − 1 gives 1, 3, 5, 7, …).<br>2. <b>Recursive:</b> each term from earlier ones plus seed value(s) (e.g. Fibonacci ${a1} = ${a2} = 1, ${an} = ${anm1} + <i>a</i><sub><i>n</i>−2</sub>).`,
      },
      { t: 'p', html: '<b>Series.</b> The sum of the terms of a sequence:' },
      {
        t: 'formula',
        kicker: 'Series',
        main: `${a1} + ${a2} + ⋯ + ${an} = ${SK1N} ${ak}`,
        legend: [`${ak} = the ${k}th term`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: 'Finite series (sum of finitely many terms) or infinite series (sum continued without end).',
      },
      { t: 'p', html: '<b>Sigma (summation) notation and its properties:</b>' },
      {
        t: 'formula',
        kicker: 'Sigma (summation) notation and its properties',
        main: `${SK1N}(${ak} + ${bk}) = ${SK1N} ${ak} + ${SK1N} ${bk}<br>${SK1N} ${c}${ak} = ${c} ${SK1N} ${ak}<br>${SK1N} ${c} = <i>cn</i>`,
        legend: [`${ak}, ${bk} = the ${k}th terms of two sequences`, `${c} = a constant`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>The index is a positive integer.</b> ${SK1N} runs over ${k} = 1, 2, …, ${n}; the lower limit need not be 1 (e.g. ${SUM(`${k}=3`, n)}), and the sum from ${k} = ${m} to ${n} is ${SUM('1', n)} − ${SUM('1', `${m}−1`)}.<br>2. <b>A sequence is not its set of values.</b> Order and repetition matter: 1, 1, 2 is a valid sequence; as a set it would collapse to {1, 2}.<br>3. <b>“General term” must hold for all ${n}</b>, not just the first few. A pattern fitting ${a1}, ${a2}, ${a3} is a conjecture until the rule is stated.`,
      },

      { t: 'part', title: 'Key procedures' },
      {
        t: 'p',
        html: `<b>Procedure 1: from general term to terms.</b> Substitute ${n} = 1, 2, 3, … into ${an}.<br>Example: ${an} = ${fr(n, `${n} + 1`)} gives ${fr('1', '2')}, ${fr('2', '3')}, ${fr('3', '4')}, …`,
      },
      {
        t: 'p',
        html: `<b>Procedure 2: from a pattern to the general term.</b> Inspect how each term relates to its position ${n}. Linear pattern → ${an} = <i>An</i> + ${B}; differences constant → AP-type; ratios constant → GP-type; differences-of-differences constant → quadratic ${an}.`,
      },
      {
        t: 'p',
        html: `<b>Procedure 3: expanding sigma notation.</b> ${SUM(`${k}=1`, '4')}(2${k} − 1) = 1 + 3 + 5 + 7 = 16. Read the index range, substitute, add.`,
      },
      {
        t: 'p',
        html: '<b>Procedure 4: recursive to explicit (when possible).</b> For simple recursions, unfold a few terms to spot the closed form; for AP/GP recursions, this is the nth-term formula derived in later topics.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'p',
        html: 'Ladder: CBSE Board → JEE Main → JEE Advanced. (Standard curriculum problems.)',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Write the first four terms of the sequence ${an} = ${fr(`2${n} − 3`, '4')}.`,
        steps: [
          `${a1} = ${fr('−1', '4')}, ${a2} = ${fr('1', '4')}, ${a3} = ${fr('3', '4')}, <i>a</i><sub>4</sub> = ${fr('5', '4')}.`,
          `(Note the terms themselves form an AP with ${d} = ${fr('1', '2')}, a preview of Topic 02.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Find the general term of 3, 8, 15, 24, 35, …',
        steps: [
          `First differences 5, 7, 9, 11 form an AP, so ${an} is quadratic. Observe ${an} = ${N2} + 2${n} = ${n}(${n} + 2) (check: 1 ⋅ 3 = 3, 2 ⋅ 4 = 8, 3 ⋅ 5 = 15 ✓).`,
        ],
        ans: `${an} = ${n}(${n} + 2)`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Write the first five terms of the recursive sequence ${a1} = 2, ${an} = 3${anm1} + 1.`,
        steps: [
          `${a1} = 2, ${a2} = 3(2) + 1 = 7, ${a3} = 3(7) + 1 = 22, <i>a</i><sub>4</sub> = 67, <i>a</i><sub>5</sub> = 202.`,
          'Recursive sequences need not be AP or GP: here neither differences nor ratios are constant.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Evaluate ${SK1N}(3${k}<sup>2</sup> − 2${k} + 1) using sigma linearity (formulas from Topic 07).`,
        steps: [
          `By linearity, 3∑${k}<sup>2</sup> − 2∑${k} + ∑1<br>= 3 ⋅ ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')} − 2 ⋅ ${fr(`${n}(${n} + 1)`, '2')} + ${n}.`,
          `Simplifying:<br>${fr(`${n}(${n} + 1)(2${n} + 1)`, '2')} − ${n}(${n} + 1) + ${n}<br>= ${n}<sup>3</sup> + ${fr('1', '2')}${N2} + ${fr('1', '2')}${n} (i.e. ${fr(`${n}(2${N2} + ${n} + 1)`, '2')}).`,
          'This is the foundational habit (split the sum, apply known sums), formalised in Topic 07.',
        ],
        ans: `${n}<sup>3</sup> + ${fr('1', '2')}${N2} + ${fr('1', '2')}${n}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>(Board)</b> Write the first three terms of ${an} = (−1)<sup>${n}−1</sup> 5<sup>${n}+1</sup>.`,
            a: '25, −125, 625',
          },
          { q: '<b>(Board)</b> Find the general term of 1, 4, 9, 16, 25, …', a: `${an} = ${N2}` },
          {
            q: `<b>(Main)</b> A sequence is defined by ${a1} = 3, <i>a</i><sub><i>n</i>+1</sub> = 2${an} − 1. Find <i>a</i><sub>4</sub>.`,
            a: '<i>a</i><sub>4</sub> = 17',
          },
          {
            q: `<b>(Main)</b> Expand and evaluate ${SUM(`${k}=2`, '5')}(${k}<sup>2</sup> − 1).`,
            a: '3 + 8 + 15 + 24 = 50',
          },
          {
            q: `<b>(Adv)</b> If ${an} = ${fr(`${N2} − 1`, `${N2} + 1`)}, find the value approached by ${an} as ${n} grows large, and explain in terms of the sequence-as-function idea.`,
            a: `approaches 1 (numerator and denominator both grow like ${N2}).`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The general term of 2, 5, 10, 17, 26, … is:',
        opts: [
          { label: `${N2} + 1`, nudge: null },
          {
            label: `2${n} + 1`,
            nudge: '<b>(B)</b> is linear (would give constant differences; here differences 3, 5, 7, 9 grow).',
          },
          { label: `${N2} + ${n}`, nudge: `<b>(C)</b> gives 2, 6, 12, …: fails at ${n} = 2.` },
          {
            label: `3${n} − 1`,
            nudge: '<b>(D)</b> is linear (would give constant differences; here differences 3, 5, 7, 9 grow).',
          },
        ],
        correct: 0,
        solution: `Terms are 1 + 1, 4 + 1, 9 + 1, ⋯ = ${N2} + 1. Tests differences-of-differences reasoning.`,
      },
      {
        t: 'mcq',
        q: `Which is the correct expansion of ${SUM(`${k}=1`, '3')} ${k}(${k} + 1)?`,
        opts: [
          { label: '2 + 6 + 12 = 20', nudge: null },
          { label: '1 + 2 + 3 = 6', nudge: `<b>(B)</b> sums only ${k}.` },
          { label: '2 + 6 + 12 + 20 = 40', nudge: `<b>(C)</b> runs to ${k} = 4.` },
          { label: '1 + 4 + 9 = 14', nudge: `<b>(D)</b> sums ${k}<sup>2</sup>.` },
        ],
        correct: 0,
        solution: '1 ⋅ 2 + 2 ⋅ 3 + 3 ⋅ 4 = 20. Tests reading the index range and the summand exactly.',
      },
      {
        t: 'mcq',
        q: `A sequence defined by ${an} = ${anm1} + <i>a</i><sub><i>n</i>−2</sub> with ${a1} = ${a2} = 1 is:`,
        opts: [
          { label: 'an AP', nudge: '<b>(A)</b> fails: neither differences nor ratios are constant.' },
          { label: 'a GP', nudge: '<b>(B)</b> fails: neither differences nor ratios are constant.' },
          { label: 'the Fibonacci sequence', nudge: null },
          {
            label: 'constant',
            nudge: '<b>(D)</b> fails: the terms 1, 1, 2, 3, 5, … are not all equal; the third term is already 2.',
          },
        ],
        correct: 2,
        solution:
          'Each term is the sum of the two before it, starting from 1, 1: 1, 1, 2, 3, 5, 8, …, the Fibonacci sequence. Recognises a recursively-defined sequence.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Term versus sum:</b> Confusing the ${n}th term ${an} with the sum ${Sn}: the root error behind countless AP/GP slips later.`,
          `<b>Trusting a pattern:</b> Declaring a general term from 3 terms without verifying a 4th (a pattern is a conjecture until the rule holds for all ${n}).`,
          '<b>Misread limits:</b> Misreading the limits of ∑ (starting at 1 when it starts at 2, etc.).',
          '<b>Order thrown away:</b> Treating a sequence as an unordered set, losing order/repetition.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• Always <b>write the general term ${an} first</b>, then decide what to do with it (list, sum, test for AP/GP).<br>• To find ${an} from a pattern: check <b>differences</b> (constant ⇒ linear), <b>second differences</b> (constant ⇒ quadratic), <b>ratios</b> (constant ⇒ exponential/GP).<br>• Sigma is just shorthand for addition: expand it whenever you’re unsure.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Sequence', note: `function ${a} ∶ ℕ → ℝ; terms ${a1}, ${a2}, …; general term ${an}` },
          { f: 'Finite vs infinite', note: 'finitely many terms vs unending' },
          { f: 'Explicit definition', note: `formula for ${an} (e.g. ${an} = 2${n} − 1)` },
          { f: 'Recursive definition', note: 'each term from earlier ones + seeds (e.g. Fibonacci)' },
          { f: 'Series', note: `${SK1N} ${ak} = ${a1} + ⋯ + ${an}` },
          {
            f: 'Sigma linearity',
            note: `∑(${ak} + ${bk}) = ∑ ${ak} + ∑ ${bk}; ∑ ${c}${ak} = ${c} ∑ ${ak}; ∑ ${c} = <i>cn</i>`,
          },
          { f: 'Partial range', note: `${SUM(m, n)} = ${SUM('1', n)} − ${SUM('1', `${m}−1`)}` },
          { f: 'Golden habit', note: `position → general term ${an} → then list or sum.` },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 683–693 ────────────────
  {
    n: '02',
    title: 'Arithmetic Progression (AP)',
    kalam: 'An arithmetic progression is the mathematics of adding the same step, over and over.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Arithmetic progressions are the <b>foundational unit of the entire Sequences and Series chapter</b>: every later idea (GP, special series ∑${n}, ∑${N2}, ∑${n}<sup>3</sup>, AGP, telescoping) leans on the counting and summation reflexes you build here.<br>• <b>CBSE Boards:</b> AP is almost guaranteed to appear ${ESTIMATE}. Expect one short-answer question (find a term, find ${n}, find the sum) worth 2–3 marks and frequently one long-answer “word problem” (savings, seating, production) worth 5 marks ${ESTIMATE}. The derivation of ${Sn} is a named board derivation and is directly askable.<br>• <b>JEE Main:</b> Typically <b>1–2 questions per paper</b> ${ESTIMATE}, blending AP with GP/HP (e.g. “if ${a}, ${b}, ${c} are in AP and ${a}<sup>2</sup>, ${b}<sup>2</sup>, ${c}<sup>2</sup> are in HP”), ratio-of-sums setups, and the ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> characterization.<br>• <b>JEE Advanced:</b> AP rarely stands alone ${ESTIMATE}: it appears fused with logarithms, trigonometry, coordinate geometry, or as the scaffolding of a multi-concept problem (e.g. a JEE Advanced paper: intersection of three APs as sets). Mastery is assumed, not tested in isolation.`,
      },
      {
        t: 'p',
        html: '<b>Why it’s a high-leverage diagnostic topic:</b> AP errors are almost always procedural slips on a tiny formula set, not conceptual gaps. That makes it the cleanest place in the chapter to separate a student who “knows the formula” from one who can choose the right form of the formula under exam pressure.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'An arithmetic progression is the mathematics of <b>adding the same step, over and over</b>.',
      },
      {
        t: 'p',
        html: `Picture a <b>staircase where every step is exactly the same height.</b> Start at floor level ${a}. Each step lifts you by the same amount ${d}. After 1 step you’re at ${a} + ${d}; after 2 steps, ${a} + 2${d}; after (${n} − 1) steps, ${AN_FORM}. That last expression is the nth-term formula: you’ve already derived it just by climbing.`,
      },
      {
        t: 'p',
        html: `The single defining property: <b>the gap between consecutive terms never changes.</b> That constant gap is the common difference ${d}.<br>${d} = ${a2} − ${a1} = ${a3} − ${a2} = ⋯ = ${ak} − ${akm1}`,
      },
      {
        t: 'p',
        html: `A few everyday Indian-context anchors that are APs:<br>• <b>Rising monthly savings:</b> You save ₹500 in month 1, then ₹50 more each month: ₹550, ₹600, ₹650, … The monthly amounts form an AP with ${a} = 500, ${d} = 50. (Compare the old AIEEE savings problem in the fifth worked example of this topic.)<br>• <b>Cinema / stadium seating:</b> Row 1 has 20 seats, each row behind has 2 more. Rows form an AP; total seating is the sum of the AP.<br>• <b>Auto-rickshaw fare:</b> ₹25 for the first kilometre, then a fixed ₹15 per additional km. Fare-after-${n}-km is an AP.<br>• <b>Stacked logs / water-tank steps:</b> The classic “balls arranged in rows” Olympiad-flavoured problem.`,
      },
      {
        t: 'p',
        html: `The deep idea worth installing early: <b>an AP is “linear.”</b> Plot ${an} against ${n} and you get points on a straight line of slope ${d}. This single mental image explains almost every property below (equidistant terms averaging out, the sum being a quadratic, three-term symmetry) because all of them are just facts about straight lines in disguise.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.2' },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'Notation is used throughout this chapter (carried into Topic 03 onward):' },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning'],
        rows: [
          [a, `first term (${a1})`],
          [d, 'common difference'],
          [an, `nth term (general term); JEE texts also write ${sb('t', n)} or ${sb('T', n)}`],
          [Sn, `sum of the first ${n} terms`],
          [l, 'last term'],
          [`${A}, ${sb('A', '1')}, ${sb('A', '2')}, …, ${sb('A', m)}`, 'arithmetic mean(s) inserted between two numbers'],
        ],
      },
      {
        t: 'p',
        html: `<b>Definition.</b> A sequence ${a1}, ${a2}, ${a3}, … is an AP if ${ak} − ${akm1} = ${d} (a constant) for all ${k} ≥ 2.`,
      },
      { t: 'p', html: '<b>Core formulas:</b>' },
      {
        t: 'formula',
        kicker: 'nth term from the beginning',
        main: `${an} = ${AN_FORM}`,
        legend: [`${an} = the ${n}th term`, `${a} = first term`, `${d} = common difference`, `${n} = the term’s position`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'nth term from the end of an AP',
        main: `${anPrime} = ${l} − (${n} − 1)${d}`,
        legend: [`${anPrime} = the ${n}th term from the end`, `${l} = last term`, `${d} = common difference`, `${n} = the position from the end`],
        note: null,
      },
      {
        t: 'formula',
        kicker: `Sum of ${n} terms of an AP`,
        main: `${Sn} = ${SUM_FORM}<br>= ${HALF_N}(${a} + ${l})`,
        legend: [`${Sn} = sum of the first ${n} terms`, `${a} = first term`, `${d} = common difference`, `${l} = last term`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Arithmetic Mean (AM).</b> If ${a}, ${b}, ${c} are in AP, then ${b} is the AM of ${a} and ${c}:`,
      },
      {
        t: 'formula',
        kicker: 'Arithmetic Mean (AM)',
        main: `${b} = ${AC2}`,
        legend: [`${b} = the AM of ${a} and ${c}`, `${a}, ${c} = the two numbers`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Inserting ${m} AMs between ${a} and ${b}.</b> If ${sb('A', '1')}, …, ${sb('A', m)} are ${m} AMs between ${a} and ${b}, the common difference of the extended AP is ${d} = ${BA_M1}, and`,
      },
      {
        t: 'formula',
        kicker: `Inserting ${m} AMs between ${a} and ${b}`,
        main: `${Ak} = ${a} + ${k} ⋅ ${BA_M1}<br>${SUM(`${k}=1`, m)} ${Ak} = ${m}(${AB2})`,
        legend: [`${Ak} = the ${k}th mean`, `${a}, ${b} = the two end numbers`, `${m} = the number of means`],
        note: null,
      },
      { t: 'p', html: `(the sum of ${m} AMs equals ${m} times the single AM of the endpoints).` },
      {
        t: 'p',
        html: '<b>Characterization</b> (powerful, a JEE favourite by the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'formula',
        kicker: 'Characterization of an AP by its sum',
        main: `${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> ⟺ the sequence is an AP<br>${d} = 2${A}, ${a1} = ${A} + ${B}`,
        legend: [`${Sn} = sum of the first ${n} terms`, `${A}, ${B} = constants`, `${d} = common difference`, `${a1} = first term`],
        note: null,
      },
      {
        t: 'p',
        html: `with first term ${A} + ${B} and common difference 2${A}. Equivalently: a sequence is an AP <b>iff</b> ${an} is linear in ${n} (i.e. ${an} = <i>pn</i> + <i>q</i>, where the coefficient <i>p</i> is the common difference).`,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions</b> (the AP analogue of dimensional checks: always state these in solutions):<br>1. <b>${n} ∈ ℕ.</b> Every formula above assumes a positive-integer term count. A non-integer or negative ${n} from algebra signals an error or a “no such term” answer.<br>2. <b>${d} may be any real constant</b>: positive (increasing AP), zero (constant AP), or negative (decreasing AP). Do not assume ${d} > 0.<br>3. <b>The “${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i>” test requires the constant term to be zero.</b> If ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> + ${c} with ${c} ≠ 0, the sequence is not an AP (only the terms from the 2nd onward are). This is the single most common trap on this formula.<br>4. <b>Three-term symmetry</b> (${a1}, ${a2}, ${a3} in AP ⇔ 2${a2} = ${a1} + ${a3}) holds for any three consecutive terms: a clean test that needs no knowledge of ${a} or ${d}.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      { t: 'p', html: 'These are the board-derivable results. Reproduce them line-by-line in exams.' },
      {
        t: 'p',
        html: `<b>Derivation 1: nth term, ${an} = ${AN_FORM}.</b> By definition each term exceeds its predecessor by ${d}:<br>${a2} = ${a1} + ${d},<br>${a3} = ${a2} + ${d},<br>…,<br>${an} = ${anm1} + ${d}.<br>Adding these (${n} − 1) equations, all intermediate terms cancel telescopically:<br>${an} = ${a1} + (${n} − 1)${d} = ${AN_FORM}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: sum of ${n} terms, ${Sn} = ${SUM_FORM} (the “Gauss reversal”).</b> This is the trick the 10-year-old Gauss reputedly used to sum 1 to 100 in seconds. Write the sum forwards and backwards:<br>${Sn} = ${a} + (${a} + ${d}) + ⋯ + (${a} + (${n} − 1)${d})<br>${Sn} = (${a} + (${n} − 1)${d}) + ⋯ + (${a} + ${d}) + ${a}<br>Add column by column. <b>Each of the ${n} columns sums to the same value</b> 2${a} + (${n} − 1)${d} (the first-plus-last identity):<br>2${Sn} = ${n}[2${a} + (${n} − 1)${d}]<br>⟹ ${Sn} = ${SUM_FORM}.<br>Since ${AN_FORM} = ${l}, this is also ${Sn} = ${HALF_N}(${a} + ${l}). ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: the characterization ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> ⇔ AP.</b> <b>(⇐)</b> From ${Sn} = ${SUM_FORM} = ${fr(d, '2')}${N2} + (${a} − ${fr(d, '2')})${n}, which has the form <i>An</i><sup>2</sup> + <i>Bn</i> with ${A} = ${fr(d, '2')}, ${B} = ${a} − ${fr(d, '2')}, and zero constant term. <b>(⇒)</b> Given ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i>, recover the nth term via ${an} = ${Sn} − <i>S</i><sub><i>n</i>−1</sub>:<br>${an} = (<i>An</i><sup>2</sup> + <i>Bn</i>) − (${A}(${n} − 1)<sup>2</sup> + ${B}(${n} − 1))<br>= ${A}(2${n} − 1) + ${B}.<br>Then ${an} − ${anm1} = 2${A}, a constant, so it’s an AP with common difference 2${A} and first term ${a1} = ${A} + ${B}. ■`,
      },
      {
        t: 'p',
        html: `<b>Key Procedure: symmetric selection of terms.</b> When a problem gives the sum of terms in an AP, choose terms symmetrically about the middle so the ${d}’s cancel:<br>• 3 terms: ${a} − ${d}, ${a}, ${a} + ${d} (sum = 3${a})<br>• 4 terms: ${a} − 3${d}, ${a} − ${d}, ${a} + ${d}, ${a} + 3${d} (sum = 4${a}, common difference 2${d})<br>• 5 terms: ${a} − 2${d}, ${a} − ${d}, ${a}, ${a} + ${d}, ${a} + 2${d} (sum = 5${a})<br>This converts a two-unknown system into a one-unknown system instantly. (Note the even case uses common difference 2${d}, a frequent slip.)`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Difficulty ladder: CBSE Board → JEE Main → JEE Advanced.' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find the 28th term and the first negative term of the AP 20, 19${fr('1', '4')}, 18${fr('1', '2')}, 17${fr('3', '4')}, …`,
        steps: [
          `Here ${a} = 20, ${d} = 19${fr('1', '4')} − 20 = −${fr('3', '4')}.`,
          `<i>a</i><sub>28</sub> = 20 + 27(−${fr('3', '4')}) = 20 − ${fr('81', '4')} = −${fr('1', '4')}.`,
          `First negative term needs ${an} < 0:<br>20 + (${n} − 1)(−${fr('3', '4')}) < 0<br>⇒ 80 − 3(${n} − 1) < 0<br>⇒ ${n} > 27${fr('2', '3')}.`,
          `Smallest integer: ${n} = 28. So the <b>28th term is the first negative term</b>, equal to −${fr('1', '4')}. (Note ${n} ∈ ℕ forced us to round up.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `The sum of the first 24 terms of an AP is needed, given ${a1} + <i>a</i><sub>5</sub> + <i>a</i><sub>10</sub> + <i>a</i><sub>15</sub> + <i>a</i><sub>20</sub> + <i>a</i><sub>24</sub> = 225.`,
        steps: [
          `Use the equidistant property ${a1} + <i>a</i><sub>24</sub> = <i>a</i><sub>5</sub> + <i>a</i><sub>20</sub> = <i>a</i><sub>10</sub> + <i>a</i><sub>15</sub>. The six given terms pair into three equal sums:<br>3(${a1} + <i>a</i><sub>24</sub>) = 225 ⇒ ${a1} + <i>a</i><sub>24</sub> = 75.`,
          `Then <i>S</i><sub>24</sub> = ${fr('24', '2')}(${a1} + <i>a</i><sub>24</sub>) = 12 × 75 = 900.`,
          `No need for ${a} or ${d} individually: the linearity of an AP does the work.`,
        ],
        ans: '900',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `The sums of ${n} terms of two APs are in the ratio (7${n} + 1) ∶ (4${n} + 17). Find the ratio of their 24th terms.`,
        steps: [
          `For ratio-of-sums problems, the standard device: the ratio of the <b>mth terms</b> equals the ratio of ${Sn} evaluated at ${n} = 2${m} − 1.<br>${fr(`${am}<sup>(1)</sup>`, `${am}<sup>(2)</sup>`)} = ${fr(`<i>S</i><sub>2<i>m</i>−1</sub><sup>(1)</sup>`, `<i>S</i><sub>2<i>m</i>−1</sub><sup>(2)</sup>`)}.`,
          `For the 24th terms, ${m} = 24 ⇒ ${n} = 2(24) − 1 = 47:<br>${fr('<i>a</i><sub>24</sub><sup>(1)</sup>', '<i>a</i><sub>24</sub><sup>(2)</sup>')} = ${fr('7(47) + 1', '4(47) + 17')} = ${fr('330', '205')} = ${fr('66', '41')}.`,
          `<b>Why ${n} = 2${m} − 1?</b> Because ${fr(am, `<i>a</i>′<sub><i>m</i></sub>`)} = ${fr(`${a} + (${m} − 1)${d}`, `<i>a</i>′ + (${m} − 1)<i>d</i>′`)}, and<br>${fr('<i>S</i><sub>2<i>m</i>−1</sub>', '<i>S</i>′<sub>2<i>m</i>−1</sub>')} = ${fr(`${fr(`2${m} − 1`, '2')}[2${a} + (2${m} − 2)${d}]`, `${fr(`2${m} − 1`, '2')}[2<i>a</i>′ + (2${m} − 2)<i>d</i>′]`)}<br>= ${fr(`${a} + (${m} − 1)${d}`, `<i>a</i>′ + (${m} − 1)<i>d</i>′`)}: identical.`,
        ],
        ans: fr('66', '41'),
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Insert 11 AMs between 28 and 10, and find the three middle inserted means.',
        steps: [
          `With ${m} = 11 means, the extended AP 28, ${sb('A', '1')}, …, ${sb('A', '11')}, 10 has 12 gaps:<br>${d} = ${fr('10 − 28', '11 + 1')} = ${fr('−18', '12')} = −${fr('3', '2')}.`,
          `Eleven means is odd, so the three middle ones are ${sb('A', '5')}, ${sb('A', '6')}, ${sb('A', '7')}:<br>${sb('A', '5')} = 28 + 5${d} = 28 − ${fr('15', '2')} = ${fr('41', '2')},<br>${sb('A', '6')} = 28 + 6${d} = 19,<br>${sb('A', '7')} = 28 + 7${d} = ${fr('35', '2')}.`,
          `(and note ${sb('A', '6')} = 19 is itself the AM of 28 and 10, as it must be: it’s the centre of a symmetric AP).`,
        ],
        ans: `${fr('41', '2')}, 19, ${fr('35', '2')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main (AIEEE-style word problem)',
        q: 'A man saves ₹200 in each of the first three months of service. In each subsequent month his saving increases by ₹40 over the previous month. After how many months will his total savings be ₹11040?',
        steps: [
          `The first three months give ₹600; from month 4 the savings ₹240, ₹280, … form an AP (${a} = 240, ${d} = 40).`,
          `With ${m} = ${n} − 3 such months,<br>600 + ${fr(m, '2')}[2(240) + (${m}−1)(40)] = 11040,<br>i.e. 20${m}<sup>2</sup> + 220${m} = 10440<br>⟹ ${m}<sup>2</sup> + 11${m} − 522 = 0<br>⟹ (${m}−18)(${m}+29) = 0.`,
          `So ${m} = 18.`,
        ],
        ans: `The number of months is ${n} = 21 months`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (AP + logarithms)',
        q: `If ${LOG10} 2, ${LOG10}(${X2} − 1), ${LOG10}(${X2} + 3) are in AP, find ${x}.`,
        steps: [
          `Three terms in AP ⇒ middle is the AM:<br>2 ${LOG10}(${X2} − 1) = ${LOG10} 2 + ${LOG10}(${X2} + 3)<br>⇒ (${X2} − 1)<sup>2</sup> = 2(${X2} + 3).`,
          `Let ${u} = ${X2}: ${u}<sup>2</sup> − 2${u} + 1 = 2${u} + 6<br>⇒ ${u}<sup>2</sup> − 4${u} − 5 = 0<br>⇒ (${u} − 5)(${u} + 1) = 0.`,
          `Since ${u} = ${X2} > 0, reject ${u} = −1. So ${X2} = 5 ⇒ ${x} = log<sub>2</sub> 5.`,
          `The validity condition (${X2} > 0) is what kills the extraneous root: never skip it.`,
        ],
        ans: `${x} = log<sub>2</sub> 5`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Suppose all terms of an AP are natural numbers. The ratio of the sum of the first seven terms to the sum of the first eleven terms is 6 ∶ 11, and the seventh term lies between 130 and 140. Find the common difference. (JEE Main)',
        steps: [
          `${fr('<i>S</i><sub>7</sub>', '<i>S</i><sub>11</sub>')} = ${fr(`${fr('7', '2')}(2${a} + 6${d})`, `${fr('11', '2')}(2${a} + 10${d})`)}<br>= ${fr(`7(${a} + 3${d})`, `11(${a} + 5${d})`)} = ${fr('6', '11')}.`,
          `The 11’s cancel against the 11 in the ratio: 7(${a} + 3${d}) = 6(${a} + 5${d}) ⇒ ${a} = 9${d}. Seventh term <i>a</i><sub>7</sub> = ${a} + 6${d} = 9${d} + 6${d} = 15${d}. Given 130 < 15${d} < 140:<br>8.67 < ${d} < 9.33 ⇒ ${d} = 9 (integer, since terms are natural).`,
          `The natural-number constraint is doing essential work: without it ${d} wouldn’t be pinned down.`,
        ],
        ans: `${d} = 9`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (sets / multi-AP)',
        q: `Let AP(${a}; ${d}) denote the set of all terms of the infinite AP with first term ${a} and common difference ${d} > 0. If<br>AP(1; 3) ∩ AP(2; 5) ∩ AP(3; 7) = AP(${a}; ${d}),<br>find ${a} + ${d}. (JEE Advanced)`,
        steps: [
          `A number lies in all three sets iff it satisfies three congruences:<br>${x} ≡ 1 (mod 3), ${x} ≡ 2 (mod 5), ${x} ≡ 3 (mod 7).`,
          `By CRT the common solutions themselves form an AP with common difference ${d} = lcm(3, 5, 7) = 105. The smallest positive solution: checking ${x} = 52 gives 52 = 3(17)+1 ✓, 52 = 5(10)+2 ✓, 52 = 7(7)+3 ✓. So ${a} = 52, ${d} = 105, and ${a} + ${d} = 157.`,
          `This is the AP-as-residue-class viewpoint that Advanced loves ${ESTIMATE}.`,
        ],
        ans: `${a} + ${d} = 157`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '<b>(Board)</b> Find the sum of all three-digit natural numbers divisible by 7.', a: '70336' },
          {
            q: '<b>(Board)</b> The 17th term of an AP exceeds its 10th term by 7. Find the common difference.',
            a: `${d} = 1`,
          },
          {
            q: '<b>(Board)</b> How many terms of the AP 9, 17, 25, … must be taken to give a sum of 636?',
            a: `${n} = 12`,
          },
          {
            q: `<b>(Main)</b> If the <i>p</i>th, <i>q</i>th, <i>r</i>th terms of an AP are ${a}, ${b}, ${c} respectively, find the value of ${a}(<i>q</i> − <i>r</i>) + ${b}(<i>r</i> − <i>p</i>) + ${c}(<i>p</i> − <i>q</i>).`,
            a: '0',
          },
          {
            q: '<b>(Main)</b> In an AP, 5 times the 5th term equals 8 times the 8th term. Find its 13th term.',
            a: '<i>a</i><sub>13</sub> = 0',
          },
          {
            q: `<b>(Main)</b> If ${Sn} = <i>cn</i><sup>2</sup> is the sum of the first ${n} terms of an AP, find the sum of the squares of these ${n} terms (in terms of ${c}, ${n}).`,
            a: fr(`${n}(4${N2} − 1)${c}<sup>2</sup>`, '3'),
          },
          {
            q: `<b>(Adv)</b> If ${a}, ${b}, ${c} are in AP, prove that ${a}<sup>2</sup>(${b} + ${c}) + ${b}<sup>2</sup>(${c} + ${a}) + ${c}<sup>2</sup>(${a} + ${b}) = ${fr('2', '9')}(${a} + ${b} + ${c})<sup>3</sup>.`,
            a: `(identity: verify via ${b} = ${AC2})`,
          },
          {
            q: `<b>(Adv)</b> The first term of an AP is unity and the common difference is ${d} ≠ 0. For what value of ${d} is ${a1}${a3} + ${a2}${a3} minimum?`,
            a: `${d} = −${fr('5', '4')} (minimum value −${fr('9', '8')}).`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `If ${Sn} = 3${N2} + 5${n} is the sum of ${n} terms of an AP, its common difference is:`,
        opts: [
          { label: '3', nudge: `<b>(A)</b> picks the coefficient of ${N2} raw: forgetting the factor of 2.` },
          {
            label: '5',
            nudge: `<b>(B)</b> picks the coefficient of ${n} (that gives ${B}, related to the first term, not ${d}).`,
          },
          { label: '6', nudge: null },
          { label: '8', nudge: `<b>(D)</b> computes ${a1} = ${A} + ${B} = 8 and mislabels it as ${d}.` },
        ],
        correct: 2,
        solution: `${d} = 2${A} = 2(3) = 6. This single question discriminates students who memorised “${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i>” from those who know what each constant means.`,
      },
      {
        t: 'mcq',
        q: 'If the 9th term of an AP is zero, the ratio of its 29th term to its 19th term is:',
        opts: [
          { label: '1 ∶ 2', nudge: '<b>(A)</b> inverts the ratio: 1 ∶ 2 is <i>a</i><sub>19</sub> ∶ <i>a</i><sub>29</sub>.' },
          { label: '2 ∶ 1', nudge: null },
          {
            label: '1 ∶ 3',
            nudge: `<b>(C)</b> 1 ∶ 3 cannot come from <i>a</i><sub>9</sub> = 0: ${a} = −8${d} gives <i>a</i><sub>29</sub> = 20${d} and <i>a</i><sub>19</sub> = 10${d}, so the 29th term is the larger, and the ratio is 2 ∶ 1.`,
          },
          {
            label: '3 ∶ 1',
            nudge: `<b>(D)</b> 3 ∶ 1 is roughly 29 ∶ 9, the ratio of the positions: it treats each term as proportional to its position. Here the zero term is the 9th, so each term is proportional to its distance from position 9: 20${d} ∶ 10${d} = 2 ∶ 1.`,
          },
        ],
        correct: 1,
        solution: `<i>a</i><sub>9</sub> = ${a} + 8${d} = 0 ⇒ ${a} = −8${d}. Then <i>a</i><sub>29</sub> = ${a} + 28${d} = 20${d}, <i>a</i><sub>19</sub> = ${a} + 18${d} = 10${d}, ratio = 2 ∶ 1.`,
      },
      {
        t: 'mcq',
        q: 'Three numbers in AP have sum −3 and product 8. The sum of their squares is:',
        opts: [
          {
            label: '9',
            nudge: `<b>(A)</b> 9 is ${d}<sup>2</sup> itself: it stops at ${d}<sup>2</sup> = 9 and never forms 3${a}<sup>2</sup> + 2${d}<sup>2</sup>.`,
          },
          {
            label: '10',
            nudge: `<b>(B)</b> 10 is ${a}<sup>2</sup> + ${d}<sup>2</sup> = 1 + 9: it drops the 3 and the 2 from 3${a}<sup>2</sup> + 2${d}<sup>2</sup>.`,
          },
          {
            label: '12',
            nudge: `<b>(C)</b> 12 is 3${a}<sup>2</sup> + ${d}<sup>2</sup> = 3 + 9: it forgets that ${d}<sup>2</sup> appears twice, once from (${a} − ${d})<sup>2</sup> and once from (${a} + ${d})<sup>2</sup>.`,
          },
          { label: '21', nudge: null },
        ],
        correct: 3,
        solution: `Take terms ${a} − ${d}, ${a}, ${a} + ${d}. Sum = 3${a} = −3 ⇒ ${a} = −1. Product (${a}<sup>2</sup> − ${d}<sup>2</sup>)${a} = 8 ⇒ (1 − ${d}<sup>2</sup>)(−1) = 8 ⇒ ${d}<sup>2</sup> = 9. Sum of squares = (${a} − ${d})<sup>2</sup> + ${a}<sup>2</sup> + (${a} + ${d})<sup>2</sup> = 3${a}<sup>2</sup> + 2${d}<sup>2</sup> = 3 + 18 = 21. The signature trap here is forgetting the −1 from the product equation’s sign: that gives ${d}<sup>2</sup> = −7, which has no real solution.`,
      },
      {
        t: 'mcq',
        q: `If 100 times the 100th term of an AP (with ${d} ≠ 0) equals 50 times its 50th term, then its 150th term is:`,
        opts: [
          {
            label: '150',
            nudge: `<b>(A)</b> 150 is the term’s position, not its value: ${a} = −149${d} gives <i>a</i><sub>150</sub> = −149${d} + 149${d} = 0.`,
          },
          {
            label: '−150',
            nudge: `<b>(B)</b> −150 is the position with a sign slip: the term itself is ${a} + 149${d} = −149${d} + 149${d} = 0.`,
          },
          { label: '0', nudge: null },
          {
            label: '150 × <i>a</i><sub>50</sub>',
            nudge: '<b>(D)</b> tempts pattern-matchers who recall “term equals multiple of another term” results from similar problems.',
          },
        ],
        correct: 2,
        solution: `100(${a} + 99${d}) = 50(${a} + 49${d}) ⇒ 2${a} + 198${d} = ${a} + 49${d} ⇒ ${a} = −149${d}. Then <i>a</i><sub>150</sub> = ${a} + 149${d} = 0. (AIEEE.)`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Off-by-one in the term:</b> Using ${a} + <i>nd</i> instead of ${AN_FORM}. The single most frequent AP error. Always say “n minus one.”`,
          `<b>A stray constant:</b> Treating ${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> + ${c} (with ${c} ≠ 0) as an AP. It isn’t: only terms from the 2nd onward are.`,
          `<b>Even symmetric spacing:</b> Using common difference ${d} (not 2${d}) when picking an even count of symmetric terms (${a} − 3${d}, ${a} − ${d}, ${a} + ${d}, ${a} + 3${d}).`,
          `<b>Sign of ${d}:</b> Assuming ${d} > 0 and dropping the decreasing-AP / negative-term cases (kills “first negative term” and inequality problems).`,
          `<b>A non-integer ${n}:</b> Accepting a non-integer or negative ${n} as a valid term count instead of reading it as “no such term.”`,
          `<b>Extraneous roots:</b> In AP-with-logs/quadratics problems, forgetting the domain condition (e.g. ${X2} > 0) that rejects an extraneous root.`,
          `<b>Ratio-of-sums index:</b> Forgetting the ${n} = 2${m} − 1 substitution and instead trying to recover ${a}, ${d} separately.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• When a problem gives a <b>sum</b>, switch to symmetric terms (${a} − ${d}, ${a}, ${a} + ${d}): it halves the unknowns.<br>• When it gives <b>specific terms</b>, stay with ${AN_FORM}.<br>• The <b>equidistant identity</b> (${a1} + ${an} = ${a2} + ${anm1} = …) collapses many “sum of scattered terms” problems in one line: reach for it before grinding algebra.<br>• To test whether a sequence is an AP fast: check if ${an} is <b>linear in</b> ${n}, or ${Sn} is <b>quadratic with zero constant</b>.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Condition'],
        rows: [
          ['nth term', `${an} = ${AN_FORM}`, `${n} ∈ ℕ`],
          ['nth term from end', `${anPrime} = ${l} − (${n} − 1)${d}`, `${n} ∈ ℕ`],
          [`Sum of ${n} terms`, `${Sn} = ${SUM_FORM} = ${HALF_N}(${a} + ${l})`, ''],
          [`AM of ${a}, ${c}`, `${b} = ${AC2}`, `${a}, ${b}, ${c} in AP`],
          [`${m} AMs between ${a}, ${b}`, `${Ak} = ${a} + ${k}${BA_M1};<br>∑ ${Ak} = ${m}${AB2}`, ''],
          ['AP test (term)', `${an} = <i>An</i> + ${B} linear<br>⇒ ${d} = ${A}`, ''],
          ['AP test (sum)', `${Sn} = <i>An</i><sup>2</sup> + <i>Bn</i> ⟹<br>${d} = 2${A}, ${a1} = ${A} + ${B}`, 'zero constant term'],
          ['Symmetric pick (odd)', `${a} − ${d}, ${a}, ${a} + ${d}`, `sum = 3${a}`],
          ['Symmetric pick (even)', `${a} − 3${d}, ${a} − ${d}, ${a} + ${d}, ${a} + 3${d}`, `common difference = 2${d}`],
          ['Equidistant identity', `${a1} + ${an} = ${a2} + ${anm1} = …`, 'finite AP'],
        ],
      },
      {
        t: 'p',
        html: `<b>Three-term AP test:</b> 2${a2} = ${a1} + ${a3}.<br><b>Ratio of mth terms</b> = <i>S</i><sub>2<i>m</i>−1</sub> ratio.`,
      },
    ],
  },
];
