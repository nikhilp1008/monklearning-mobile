import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 05–07, pp. 82–101 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 05
 * Standard Real Functions and Their Graphs (pp. 82–89), Subtopic 06 Even,
 * Odd, and Periodic Functions (pp. 90–95) and Subtopic 07 Algebra of
 * Functions and Functional Equations (pp. 96–101). Each topic opens with its
 * "Exam Relevance:" box as a part of its own, then is split at its Sections 1
 * to 8. Topic 05's unnumbered "Atlas of Standard Real Functions" (p. 83, six
 * small graphs) stands right after the book's "[See the atlas of standard
 * functions below.]" line; Figure 1.6 (caption p. 85, drawn p. 86) stands
 * where its caption is printed, after the worked construction of
 * y = |x − 2| + 1. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const f = I('f');
const g = I('g');
const h = I('h');
const x = I('x');
const y = I('y');
const a = I('a');
const b = I('b');
const e = I('e');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const T = I('T');
const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const fmx = `${f}(−${x})`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cu = (s: string) => `${s}<sup>3</sup>`;
const x2 = sq(x);
const x3 = cu(x);
/** Greatest integer (floor) [s] and fractional part {s}, as printed. */
const fl = (s: string) => `[${s}]`;
const fp = (s: string) => `{${s}}`;
const sgn = (s: string) => `sgn(${s})`;
const pw = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const ax = pw(a, x);
const ex = pw(e, x);
const emx = pw(e, `−${x}`);
const loga = (s: string) => `log<sub>${a}</sub>${NB}${s}`;
const sinx = `sin${NB}${x}`;
const cosx = `cos${NB}${x}`;
const PI2 = fr('π', '2');
const HALF = fr('1', '2');
const ONE_X = fr('1', x);
const fOne = `${f}(${ONE_X})`;
const FG = fr(f, g);
const Df = `${I('D')}<sub>${f}</sub>`;
const Dg = `${I('D')}<sub>${g}</sub>`;
const T1 = `${T}<sub>1</sub>`;
const T2 = `${T}<sub>2</sub>`;
const EVEN = fr(`${fx} + ${fmx}`, '2');
const ODD = fr(`${fx} − ${fmx}`, '2');
const TA = fr(T, `|${a}|`);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 05 · pp. 82–89 ────────────────
  {
    n: '05',
    title: 'Standard Real Functions and Their Graphs',
    kalam: 'The graph is the fastest summary of a function.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Recognising standard functions on sight is assumed knowledge across every exam that tests mathematics. JEE Main and Advanced lean hard on the <b>greatest-integer</b>, <b>fractional-part</b>, <b>modulus</b>, and <b>signum</b> functions (and graph transformations). CUET tests definitions and values. CBSE Boards use these graphs in continuity/differentiability later. (Not in NEET: no mathematics section.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Before you can analyse functions, you need a <b>toolkit of named machines</b> you recognise instantly, the way a mechanic knows every tool by its shape. Each standard function has a characteristic rule, a characteristic graph, and a characteristic personality.',
      },
      {
        t: 'p',
        html: `• <b>Modulus (absolute value)</b> |${x}| strips the sign: it reports distance from zero, so it is never negative. Its graph is a “V” sitting on the origin.<br>• <b>Signum</b> ${sgn(x)} is the opposite idea: it throws away the size and keeps only the sign, outputting just −1, 0, or +1. Its graph is two flat shelves with a single dot at the origin.<br>• <b>Greatest integer (floor)</b> ${fl(x)} rounds down to the nearest integer: the “step” or “staircase” function. Crucially, it rounds down even for negatives, so [−2.3] = −3, not −2.<br>• <b>Fractional part</b> ${fp(x)} = ${x} − ${fl(x)} keeps only what’s left after the floor (always in [0, 1)), producing a repeating “sawtooth.”<br>• <b>Exponential</b> ${ax} is explosive, controlled growth (for ${a} > 1; for 0 < ${a} < 1 it decays); it is always positive and never touches the ${x}-axis.<br>• <b>Logarithm</b> ${loga(x)} is the exponential run backwards: defined only for positive inputs, growing ever more slowly (for ${a} > 1).`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The graph is the fastest summary of a function. One glance tells you the domain (how far left–right it extends), the range (how far up–down), where it breaks, and whether it is increasing or decreasing. Memorising these six shapes is like memorising multiplication tables: it makes everything downstream automatic.',
      },
      { t: 'p', html: '[See the atlas of standard functions below.]' },
      { t: 'fig', id: 'm12-01-05-d1' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The floor and fractional-part functions are <b>discontinuous at every integer</b> (they jump). The logarithm exists only for ${x}${NB}>${NB}0; the exponential output is only ever > 0. Always state the base for ${ax} and ${loga(x)} with ${a}${NB}>${NB}0, ${a}${NB}≠${NB}1.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'table',
        title: null,
        head: ['Function', 'Definition', 'Domain', 'Range'],
        rows: [
          [`Modulus |${x}|`, `${x} if ${x}${NB}≥${NB}0, else −${x}`, 'ℝ', '[0, ∞)'],
          [`Signum ${sgn(x)}`, `${fr(x, `|${x}|`)} for ${x}${NB}≠${NB}0, 0 at ${x} = 0`, 'ℝ', '{−1, 0, 1}'],
          [`Greatest integer ${fl(x)}`, `greatest integer ≤${NB}${x}`, 'ℝ', 'ℤ'],
          [`Fractional part ${fp(x)}`, `${x} − ${fl(x)}`, 'ℝ', '[0, 1)'],
          [`Exponential ${ax}`, `${a}${NB}>${NB}0, ${a}${NB}≠${NB}1`, 'ℝ', '(0, ∞)'],
          [`Logarithm ${loga(x)}`, `inverse of ${ax}`, '(0, ∞)', 'ℝ'],
        ],
      },
      {
        t: 'p',
        html: `<b>Key identities</b><br>• |${x}|<sup>2</sup> = ${x2}, |${I('xy')}| = |${x}| |${y}|, triangle inequality<br>||${x}| − |${y}|| ≤ |${x} ± ${y}| ≤ |${x}| + |${y}|.<br>• ${sgn(x)} · |${x}| = ${x}.<br>• ${fl(`${x} + ${n}`)} = ${fl(x)} + ${n} for integer ${n}; ${x} − 1 < ${fl(x)} ≤ ${x};<br>${fl(x)} + ${fl(`−${x}`)} = 0 for ${x} ∈ ℤ, −1 for ${x} ∉ ℤ.<br>• ${fp(x)} has period 1; ${fp(`${x} + ${n}`)} = ${fp(x)}.<br>• log<sub>${a}</sub>(${I('xy')}) = ${loga(x)} + ${loga(y)};<br><br>${loga(x)} = ${fr(`log<sub>${b}</sub>${NB}${x}`, `log<sub>${b}</sub>${NB}${a}`)} (change of base);<br><br>${a}<sup>log<sub>${a}</sub>${NB}${x}</sup> = ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Notation lock:</b> |${x}| modulus, ${sgn(x)} signum, ${fl(x)} or ⌊${x}⌋ floor, ${fp(x)} fractional part.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `<b>Procedure A: Graphing by transformation.</b> Start from a base graph and apply, in order: reflection ${fmx} (about ${y}-axis) if needed, horizontal shift ${f}(${x} − ${h}), stretch/compression ${I('af')}(${x}), reflection −${fx} (about ${x}-axis), and last the vertical shift ${fx} + ${k} (up by ${k} when ${k} > 0). <b>Reasoning:</b> each algebraic operation moves the picture in a predictable, decoupled way, so a complicated graph is just the base shape relocated.`,
      },
      {
        t: 'p',
        html: `<b>Procedure B: The two modulus transformations (a frequent JEE distinction).</b><br>• ${y} = |${fx}|: take the graph of ${f} and <b>flip everything below the ${x}-axis upward</b>. <b>Reasoning:</b> negative outputs become their positive mirror.<br>• ${y} = ${f}(|${x}|): <b>keep the right half (${x}${NB}≥${NB}0) and mirror it to the left</b>. <b>Reasoning:</b> the input’s sign is erased, so left and right inputs share outputs: the graph becomes symmetric about the ${y}-axis.`,
      },
      {
        t: 'p',
        html: 'These are different operations and produce different graphs; confusing them is a classic error.',
      },
      {
        t: 'p',
        html: `<b>Worked construction: graph of</b> ${y} = |${x} − 2| + 1<b>.</b> Begin with ${y} = |${x}| (a V at the origin). Replace ${x} by ${x} − 2: the V slides <b>right</b> by 2, vertex now at (2,${NB}0). Add 1: the whole V lifts <b>up</b> by 1, vertex at (2,${NB}1). The result is a V opening upward with its lowest point at (2,${NB}1), so the minimum value of the function is 1.`,
      },
      { t: 'fig', id: 'm12-01-fig-1.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate: [2.7], [−2.3], {3.6}, sgn(−5), |−4|.`,
        steps: [
          '[2.7] = 2 (greatest integer ≤ 2.7).',
          '[−2.3] = −3 (greatest integer ≤ −2.3: round <b>down</b>, past zero).',
          '{3.6} = 3.6 − [3.6] = 3.6 − 3 = 0.6.',
          'sgn(−5) = −1.',
          '|−4| = 4.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `Solve ${fl(x)} = 3, and separately find all ${x} with ${fp(x)} = 0.5.`,
        steps: [
          `${fl(x)} = 3<b>:</b> the floor equals 3 for every ${x} from 3 (inclusive) up to but not including 4. So ${x} ∈ [3, 4). <b>Trap:</b> the answer is an interval, not the single value ${x} = 3.`,
          `${fp(x)} = 0.5<b>:</b> the fractional part is 0.5 whenever ${x} is “half-past” an integer: ${x} = ${n} + 0.5 for any ${n} ∈ ℤ, i.e. ${x} ∈ {…, −1.5, −0.5, 0.5, 1.5, …}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the range of ${fx} = ${fl(x)} + ${fp(`−${x}`)} over ℝ.`,
        steps: [
          `Split into cases. <b>If ${x} ∈ ℤ:</b> ${fl(x)} = ${x} and ${fp(`−${x}`)} = 0, so ${fx} = ${x}, an integer. <b>If ${x} ∉ ℤ:</b> write ${x} = ${n} + ${r} with ${n} = ${fl(x)} and ${r} = ${fp(x)} ∈ (0, 1). Then −${x} = −${n} − ${r}, and ${fl(`−${x}`)} = −${n} − 1, so<br>${fp(`−${x}`)} = −${x} − ${fl(`−${x}`)}<br>= (−${n} − ${r}) − (−${n} − 1) = 1 − ${r}.<br>Thus<br>${fx} = ${n} + (1 − ${r}) = ${fl(x)} + 1 − ${fp(x)}.`,
          `As ${r} ∈ (0, 1), 1 − ${r} ∈ (0, 1), so ${fx} ∈ (${n},${NB}${n} + 1): every non-integer real. Combined with the integer case, the <b>range is all of</b> ℝ.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the domain of ${fx} = ${fr('1', `√${fp(x)}`)} + log(1 − ${fl(x)}) on (−3, 3).`,
        steps: [
          `<b>Term 1</b> needs ${fp(x)} > 0 (it’s under a root in a denominator), which fails exactly when ${x} ∈ ℤ. So exclude all integers.`,
          `<b>Term 2</b> needs 1 − ${fl(x)} > 0 ⇒ ${fl(x)} < 1 ⇒ ${fl(x)} ≤ 0 ⇒ ${x} < 1.`,
          `On the interval (−3, 3), combine: ${x} < 1 <b>and</b> ${x} ∉ ℤ. The integers in range to remove are −2, −1, 0 (note −3 and 3 are already outside the open interval, and integers ≥ 1 are excluded by ${x} < 1 anyway). Therefore<br>Dom(${f}) = (−3, 1) ∖ {−2, −1, 0}<br>= (−3, −2) ∪ (−2, −1) ∪ (−1, 0) ∪ (0, 1).`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Evaluate [−0.5], {−0.5}, and sgn(0).',
            a: '[−0.5] = −1; {−0.5} = 0.5; sgn(0) = 0.',
          },
          {
            q: `<b>[CUET]</b> Sketch (describe) the graph of ${y} = |${x}| − 2 and state its range.`,
            a: `A V with vertex at (0,${NB}−2); range [−2, ∞).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the range of ${fx} = ${fr(`|${x}|`, x)} for ${x}${NB}≠${NB}0.`,
            a: `{−1, 1} (it equals ${sgn(x)} for ${x}${NB}≠${NB}0).`,
          },
          {
            q: `<b>[JEE Main]</b> Solve ${fl(x)}<sup>2</sup> − 5${fl(x)} + 6 = 0.`,
            a: `${fl(x)} = 2 or 3 ⇒ ${x} ∈ [2, 4).`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the number of solutions of ${fp(x)} = ${fr(x, '5')} in [0, 5].`,
            a: `4 solutions: ${x} = 0, ${fr('5', '4')}, ${fr('5', '2')}, ${fr('15', '4')} (on [${n},${NB}${n} + 1) the crossing is ${x} = ${fr(`5${n}`, '4')}, valid only for ${n} = 0, 1, 2, 3; ${x} = 5 fails since {5} = 0${NB}≠${NB}1).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: '[−3.7] + [3.7] equals:',
        opts: [
          { label: '0', nudge: `<b>(a)</b> assumes ${fl(`−${x}`)} = −${fl(x)} (false off the integers).` },
          { label: '−1', nudge: null },
          { label: '−7', nudge: '<b>(c)</b> mishandles the sign of the floor: −4 − 3 = −7.' },
          { label: '7', nudge: '<b>(d)</b> mishandles the sign of the floor: 4 + 3 = 7.' },
        ],
        correct: 1,
        solution: `[−3.7] = −4 and [3.7] = 3; sum = −1. (Consistent with ${fl(x)} + ${fl(`−${x}`)} = −1 for non-integers.)`,
      },
      {
        t: 'mcq',
        q: `The range of ${fx} = 2 + ${sgn(x)} is:`,
        opts: [
          { label: '{1, 2, 3}', nudge: null },
          { label: '[1, 3]', nudge: '<b>(b)</b> treats a 3-value set as a continuous interval.' },
          { label: '{2}', nudge: '<b>(c)</b> forgets sgn varies.' },
          { label: 'ℝ', nudge: '<b>(d)</b> ignores that signum is bounded.' },
        ],
        correct: 0,
        solution: `${sgn(x)} ∈ {−1, 0, 1}, so 2 + ${sgn(x)} ∈ {1, 2, 3}.`,
      },
      {
        t: 'mcq',
        q: `Which is the graph of ${y} = ${f}(|${x}|) obtained from ${y} = ${fx}?`,
        opts: [
          {
            label: `flip the part below the ${x}-axis upward`,
            nudge: `<b>(a)</b> is the rule for ${y} = |${fx}|: the commonly swapped pair.`,
          },
          { label: `keep ${x}${NB}≥${NB}0 and mirror it to ${x}${NB}<${NB}0`, nudge: null },
          { label: 'shift right', nudge: '<b>(c)</b> is a translation.' },
          { label: `reflect about ${y} = ${x}`, nudge: '<b>(d)</b> is the inverse-function reflection.' },
        ],
        correct: 1,
        solution: `${f}(|${x}|) erases the input’s sign, making the graph symmetric about the ${y}-axis by mirroring the right half.`,
      },
      {
        t: 'mcq',
        q: `The domain of ${fx} = log<sub>2</sub>(log<sub>3</sub>${NB}${x}) is:`,
        opts: [
          {
            label: `${x} > 0`,
            nudge: '<b>(a)</b> stops at the inner log’s condition and forgets the outer one.',
          },
          { label: `${x} > 1`, nudge: null },
          { label: `${x} > 3`, nudge: '<b>(c)</b> misreads the threshold as 3<sup>1</sup> instead of 3<sup>0</sup>.' },
          {
            label: `${x} ≥ 1`,
            nudge: `<b>(d)</b> wrongly includes ${x} = 1, where log<sub>3</sub>${NB}1 = 0 and the outer log is undefined.`,
          },
        ],
        correct: 1,
        solution: `Work outward. The outer log<sub>2</sub> requires its argument positive: log<sub>3</sub>${NB}${x} > 0, which means ${x} > 3<sup>0</sup> = 1. (This automatically satisfies the inner log’s own requirement ${x} > 0.) So the domain is ${x} > 1.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Floor of a negative.</b> [−2.3] = −3, <b>not</b> −2. The floor always rounds down (more negative). This is the single biggest source of lost marks here.',
          `<b>|${fx}| vs ${f}(|${x}|).</b> They are different transformations: flip-up versus mirror-right. Keep them straight.`,
          `<b>Treating discrete ranges as intervals.</b> sgn and ${fl(x)} output specific values/integers, not continuous bands.`,
          `<b>Forgetting log/exponential domains.</b> log needs ${x}${NB}>${NB}0; ${ax} > 0 always (it never equals 0).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> For any floor/fractional problem, immediately split into “${x} integer” vs “${x} non-integer” cases: almost every such problem cracks open that way. For ${fp(x)} = (line) counting problems, sketch the sawtooth against the line and count crossings.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `|${x}|`, note: `V-shape, range [0, ∞); |${x}|<sup>2</sup> = ${x2}, |${I('xy')}| = |${x}||${y}|.` },
          { f: `${sgn(x)} ∈ {−1, 0, 1}; ${sgn(x)}|${x}| = ${x}.`, note: '' },
          {
            f: `${fl(x)} = floor (round <b>down</b>, even for negatives); ${x} − 1 < ${fl(x)} ≤ ${x}; ${fl(x)} + ${fl(`−${x}`)} = −1 off ℤ, 0 on ℤ.`,
            note: '',
          },
          { f: `${fp(x)} = ${x} − ${fl(x)} ∈ [0, 1), period 1.`, note: '' },
          { f: `${ax} : (0, ∞) range, never 0; ${loga(x)} : (0, ∞) domain, ℝ range.`, note: '' },
          { f: '<b>Transforms</b>', note: `|${fx}| flips below-axis up; ${f}(|${x}|) mirrors right half to left.` },
        ],
        aids: [
          '“<b>Floor falls</b> (rounds down, negatives too).”',
          `“|${f}| <b>f</b>lips, ${f}(|${x}|) <b>m</b>irrors.”`,
          '“Log lives on the <b>positive</b> side; exp stays <b>above</b> the axis.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 06 · pp. 90–95 ────────────────
  {
    n: '06',
    title: 'Even, Odd, and Periodic Functions',
    kalam: 'Some functions have a hidden symmetry that, once spotted, halves your work.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A staple of JEE Main and Advanced: symmetry and periodicity questions appear directly and as time-savers inside integration and graphing problems. CUET includes definition/classification items. CBSE Boards touch it lightly. (Not in NEET: no mathematics section.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Some functions have a hidden symmetry that, once spotted, halves your work. There are two kinds.',
      },
      {
        t: 'p',
        html: `An <b>even function</b> has <b>mirror symmetry about the ${y}-axis</b>: whatever happens at ${x} happens identically at −${x}. Picture a butterfly, or the parabola ${y} = ${x2}: fold the graph along the vertical axis and the two halves coincide. Formally, ${fmx} = ${fx}.`,
      },
      {
        t: 'p',
        html: `An <b>odd function</b> has <b>rotational symmetry about the origin</b>: flip it left–right and up–down and it lands on itself. Think of ${y} = ${x3} or ${y} = ${sinx}. Formally, ${fmx} = −${fx}. A neat consequence: if an odd function is defined at 0, it must pass through the origin, since ${f}(0) = −${f}(0) forces ${f}(0) = 0.`,
      },
      {
        t: 'p',
        html: 'Most functions are <b>neither</b>, and that’s fine. In fact, every function (on a symmetric domain) splits uniquely into an even piece plus an odd piece, the way any number splits into “average plus deviation.”',
      },
      {
        t: 'p',
        html: `Separately, a function is <b>periodic</b> if its graph <b>repeats at regular intervals</b>, like a heartbeat trace, the seasons, or a tabla rhythm cycling every few beats. If the pattern repeats every ${T} units, then ${f}(${x} + ${T}) = ${fx} for all ${x}, and the smallest such positive ${T} is the <b>fundamental period</b>.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Symmetry and periodicity are both forms of redundancy: the function tells you the same thing more than once. An even function only needs to be understood on [0, ∞) (the left half is a mirror). A periodic function only needs to be understood on one period (everything else is a copy). Exploiting that redundancy is where the marks (and the speed) come from.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Even/odd classification requires a <b>domain symmetric about</b> 0 (so that −${x} is allowed whenever ${x} is). For periodicity, a <b>constant</b> function technically satisfies ${f}(${x} + ${T}) = ${fx} for every ${T}, so it is periodic but has <b>no fundamental period</b>. And when you add two periodic functions, a common period exists only if their individual periods are <b>commensurable</b> (their ratio is rational).`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Even / Odd',
        main: `Even: ${fmx} = ${fx}<br>Odd: ${fmx} = −${fx}`,
        legend: [`${f} = a function on a domain symmetric about 0`],
        note: null,
      },
      {
        t: 'p',
        html: `Examples: even: ${x2}, |${x}|, ${cosx}, constants. Odd: ${x}, ${x3}, ${sinx}, sgn${NB}${x}, tan${NB}${x}.`,
      },
      {
        t: 'table',
        title: 'Combination rules',
        head: ['Operation', 'Result'],
        rows: [
          ['even ± even', 'even'],
          ['odd ± odd', 'odd'],
          ['even × even', 'even'],
          ['odd × odd', 'even'],
          ['even × odd', 'odd'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Unique decomposition (domain symmetric about 0)',
        main: `${fx} = ${EVEN} + ${ODD}`,
        legend: [`${EVEN} = the even part`, `${ODD} = the odd part`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Periodic',
        main: `${f}(${x} + ${T}) = ${fx} ∀${NB}${x}<br>fundamental period = smallest such ${T}${NB}>${NB}0`,
        legend: [`${T} = a period of ${f}`],
        note: null,
      },
      {
        t: 'p',
        html: `Standard periods:<br>${sinx}, ${cosx} : 2π;<br>tan${NB}${x}, cot${NB}${x} : π;<br>|${sinx}|, |${cosx}| : π;<br>${fp(x)} : 1.`,
      },
      {
        t: 'p',
        html: `<b>Period rules</b><br>• ${f}(${I('ax')} + ${b}) has period ${TA} if ${f} has period ${T}.<br><br>• ${fx} ± ${gx} with periods ${T1}, ${T2} is periodic with period LCM(${T1}, ${T2}), provided ${fr(T1, T2)} is rational.<br><br>• Taking |${f}| often (not always) <b>halves</b> the period (e.g. |${sinx}|: π instead of 2π).`,
      },
      {
        t: 'formula',
        kicker: 'Period rules',
        main: `${f}(${a}${x} + ${b}) has period ${TA}<br>${f} ± ${g} has period LCM(${T1}, ${T2}), if ${fr(T1, T2)} is rational`,
        legend: [`${T} = a period of ${f}`, `${T1}, ${T2} = periods of ${f} and ${g}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation lock:</b> ${T} for period; “even/odd part” as above.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Procedure A: Test for even/odd.</b> Compute ${fmx} and compare: equals ${fx} → even; equals −${fx} → odd; neither → neither. <b>Reasoning:</b> the definitions are pointwise identities, so a direct substitution settles it.`,
      },
      {
        t: 'p',
        html: `<b>Procedure B: Find the fundamental period.</b> Identify the period of each piece, apply ${TA} for internal coefficients, then take the LCM across a sum/difference; finally check whether a smaller value also works (especially after a modulus). <b>Reasoning:</b> the LCM is the smallest length over which every component has completed a whole number of cycles.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 1: product of two odd functions is even.</b> Let ${f}, ${g} be odd, so ${fmx} = −${fx} and ${g}(−${x}) = −${gx}. Then<br>(${I('fg')})(−${x}) = ${fmx} ${g}(−${x})<br>= (−${fx})(−${gx})<br>= ${fx} ${gx} = (${I('fg')})(${x}).`,
      },
      { t: 'p', html: 'The two sign flips cancel, so the product is <b>even</b>.\u00a0■' },
      {
        t: 'p',
        html: `<b>Derivation 2: fundamental period of</b> ${fx} = |${sinx}| + |${cosx}|<b>.</b> Each of |${sinx}| and |${cosx}| has period π, so π is a period. But test the smaller candidate ${PI2}:<br><br>${f}(${x} + ${PI2}) = |sin(${x} + ${PI2})| + |cos(${x} + ${PI2})|<br><br>= |${cosx}| + |${sinx}| = ${fx}.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> the shift by ${PI2} swaps sine and cosine (up to sign), and the moduli erase the sign, so the sum is unchanged. No positive value smaller than ${PI2} works, so the fundamental period is<br><br>${T} = ${PI2}. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Classify as even, odd, or neither: (a) ${fx} = ${x3} − ${x}; (b) ${gx} = ${x2} + ${cosx}; (c) ${h}(${x}) = ${x} + ${x2}.`,
        steps: [
          `<b>(a)</b> ${fmx} = (−${x})<sup>3</sup> − (−${x}) = −${x3} + ${x}<br>= −(${x3} − ${x}) = −${fx} → <b>odd</b>.`,
          `<b>(b)</b> ${g}(−${x}) = (−${x})<sup>2</sup> + cos(−${x})<br>= ${x2} + ${cosx} = ${gx} → <b>even</b>.`,
          `<b>(c)</b> ${h}(−${x}) = −${x} + ${x2}, which equals neither ${h}(${x}) = ${x} + ${x2} nor −${h}(${x}) = −${x} − ${x2} → <b>neither</b>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `Which of these is an even function: ${sinx}, ${x}|${x}|, ${cosx} + ${x2}, ${x3}?`,
        steps: [
          `<b>Speed:</b> scan for symmetry. ${sinx} is odd; ${x}|${x}| is odd (odd × even = odd); ${x3} is odd. Only ${cosx} + ${x2} is even (even + even).`,
          `<b>Trap:</b> ${x}|${x}| looks even because of the modulus, but the lone ${x} factor makes the whole thing odd.`,
        ],
        ans: `${cosx} + ${x2}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the fundamental period of ${fx} = sin${NB}3${x} + cos${NB}2${x}.`,
        steps: [
          `Period of sin${NB}3${x} is ${fr('2π', '3')};<br><br>period of cos${NB}2${x} is ${fr('2π', '2')} = π.<br><br>The overall period is the smallest ${T} that is a whole-number multiple of both. Testing ${T} = 2π: it equals 3 × ${fr('2π', '3')} and 2 × π (a whole multiple of each) and nothing smaller works. So the fundamental period is`,
        ],
        ans: '2π',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Express ${fx} = ${ex} as the sum of an even and an odd function, and identify the two parts.`,
        steps: [
          `Using the decomposition formula:<br>even part = ${fr(`${ex} + ${emx}`, '2')} = cosh${NB}${x},<br><br>odd part = ${fr(`${ex} − ${emx}`, '2')} = sinh${NB}${x}.`,
          `So ${ex} = cosh${NB}${x} + sinh${NB}${x}. <b>Verification:</b> cosh(−${x}) = cosh${NB}${x} (even) ✓ and sinh(−${x}) = −sinh${NB}${x} (odd) ✓, and their sum reconstructs ${ex}. This is exactly why the hyperbolic functions are the canonical even/odd halves of the exponential: a structural fact JEE Advanced likes to probe.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Classify ${fx} = ${x}<sup>4</sup> + 3${x2} + 7 as even, odd, or neither.`,
            a: 'Even (all even powers + constant).',
          },
          {
            q: `<b>[CUET]</b> Is ${fx} = ${fr(`${ex} − 1`, `${ex} + 1`)} even, odd, or neither?`,
            a: `Odd (${fmx} = ${fr(`${emx} − 1`, `${emx} + 1`)} = ${fr(`1 − ${ex}`, `1 + ${ex}`)} = −${fx}).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the fundamental period of ${fx} = sin(${fr(x, '2')}) + cos(${fr(x, '3')}).`,
            a: 'LCM(4π, 6π) = 12π.',
          },
          {
            q: `<b>[JEE Main]</b> Find the odd part of ${fx} = ${x2} + 2${x} + 1.`,
            a: `Odd part = ${ODD}<br><br>= ${fr(`(${x2} + 2${x} + 1) − (${x2} − 2${x} + 1)`, '2')}<br><br>= 2${x}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the fundamental period of ${fx} = |${sinx}| + |${cosx}| + ${fp(x)} … if it exists; justify.`,
            a: `No fundamental period: |${sinx}| + |${cosx}| has period ${PI2} while ${fp(x)} has period 1; since the ratio ${PI2} ÷ 1 = ${PI2} is irrational, the periods are incommensurable and no common period exists.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The function ${fx} = ${x}${NB}${cosx} is:`,
        opts: [
          { label: 'even', nudge: '<b>(a)</b> assumes the cos dominates.' },
          { label: 'odd', nudge: null },
          { label: 'neither', nudge: '<b>(c)</b> misapplies the product rule.' },
          {
            label: 'periodic with period π',
            nudge: `<b>(d)</b> ${f} is not periodic: the growing ${x} factor breaks repetition.`,
          },
        ],
        correct: 1,
        solution: `${x} is odd, ${cosx} is even, and odd × even = odd. Check: ${fmx} = (−${x})${NB}cos(−${x}) = −${x}${NB}${cosx} = −${fx}.`,
      },
      {
        t: 'mcq',
        q: `For an odd function ${f} defined at 0, the value ${f}(0) is:`,
        opts: [
          { label: '1', nudge: '<b>(a)</b> ignores the forcing identity.' },
          { label: 'undefined', nudge: '<b>(b)</b> confuses “defined at 0” with undefined.' },
          { label: '0', nudge: null },
          { label: 'cannot be determined', nudge: '<b>(d)</b> ignores the forcing identity.' },
        ],
        correct: 2,
        solution: `Setting ${x} = 0 in ${fmx} = −${fx} gives ${f}(0) = −${f}(0) ⇒ 2${f}(0) = 0 ⇒ ${f}(0) = 0.`,
      },
      {
        t: 'mcq',
        q: `The fundamental period of ${fx} = sin<sup>2</sup>${NB}${x} is:`,
        opts: [
          { label: '2π', nudge: `<b>(a)</b> is the period of ${sinx} before squaring.` },
          { label: 'π', nudge: null },
          { label: PI2, nudge: `<b>(c)</b> halves once too often: ${PI2} is the period of cos${NB}4${x}, not cos${NB}2${x}.` },
          { label: '4π', nudge: '<b>(d)</b> multiplies 2π by 2 instead of dividing: 4π.' },
        ],
        correct: 1,
        solution: `Using sin<sup>2</sup>${NB}${x} = ${fr(`1 − cos${NB}2${x}`, '2')}, the period is that of cos${NB}2${x}, namely ${fr('2π', '2')} = π.`,
      },
      {
        t: 'mcq',
        q: `Which is the even part of ${fx} = ${x3} + ${x2} + ${x} + 1?`,
        opts: [
          { label: `${x3} + ${x}`, nudge: '<b>(a)</b> is the odd part.' },
          { label: `${x2} + 1`, nudge: null },
          { label: x2, nudge: '<b>(c)</b> drops a term from the even part.' },
          { label: '1', nudge: '<b>(d)</b> drops a term from the even part.' },
        ],
        correct: 1,
        solution: `Even part = ${EVEN}<br><br>= ${fr(`(${x3} + ${x2} + ${x} + 1) + (−${x3} + ${x2} − ${x} + 1)`, '2')}<br><br>= ${fr(`2${x2} + 2`, '2')} = ${x2} + 1.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Assuming every function is even or odd.</b> Most are neither; always actually compute ${fmx}.`,
          '<b>Mishandling products.</b> odd × odd = <b>even</b>, not odd. Track sign flips carefully.',
          `<b>Forgetting the modulus can shrink the period.</b> |${sinx}| has period π, not 2π: always test the half-period after a modulus.`,
          `<b>Taking LCM of incommensurable periods.</b> If ${fr(T1, T2)} is irrational (e.g. π and 1), no common period exists: the sum is not periodic.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> A polynomial is even iff it has <b>only even powers</b>, odd iff <b>only odd powers</b> (no constant): read it off instantly. For periods, convert powers of sin/cos to double angles first (even powers such as sin<sup>2</sup>, cos<sup>2</sup> → period halves; odd powers keep 2π). And remember odd functions force ${f}(0) = 0: a free check.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<b>Even:</b> ${fmx} = ${fx} (${y}-axis mirror). <b>Odd:</b> ${fmx} = −${fx} (origin symmetry; forces ${f}(0) = 0).`,
            note: '',
          },
          { f: '<b>Products</b>', note: 'even·even = even, odd·odd = <b>even</b>, even·odd = odd.' },
          { f: '<b>Decompose</b>', note: `even part = ${EVEN},<br><br>odd part = ${ODD}.` },
          { f: '<b>Periodic</b>', note: `${f}(${x} + ${T}) = ${fx}; fundamental ${T} = smallest such.` },
          { f: `sin, cos : 2π · tan, cot : π · |sin|, |cos| : π · ${fp(x)} : 1.`, note: '' },
          { f: `${f}(${I('ax')} + ${b}) → period ${TA}; sum → LCM (only if ratio rational).`, note: '' },
        ],
        aids: [
          '“<b>Even = mirror, Odd = origin.</b>”',
          '“Only-even-powers ⇒ even; only-odd-powers ⇒ odd.”',
          '“Modulus may <b>halve</b> the period.”',
          '“<b>Irrational ratio ⇒ not periodic.</b>”',
        ],
      },
    ],
  },

  // ──────────────── Topic 07 · pp. 96–101 ────────────────
  {
    n: '07',
    title: 'Algebra of Functions and Functional Equations',
    kalam: 'Solving a functional equation is detective work, and the detective’s main tool is clever substitution.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Algebra of functions is light but examinable (CBSE, CUET). <b>Functional equations</b> are a JEE Advanced signature: the “replace ${x} by something clever and solve” trick appears most years ${ESTIMATE}, and JEE Main includes the easier substitution types. (Not in NEET: no mathematics section.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Two ideas live here, and both are about building or discovering functions.',
      },
      {
        t: 'p',
        html: `<b>Algebra of functions</b> is the obvious part: just as you add and multiply numbers, you can add and multiply functions, point by point. (${f} + ${g})(${x}) simply means “evaluate ${f} at ${x}, evaluate ${g} at ${x}, add the results.” The only subtlety is the <b>domain</b>: a combined function is defined only where both ingredients are defined (and, for a quotient, where the divider isn’t zero).`,
      },
      {
        t: 'p',
        html: `<b>Functional equations</b> are the deeper, more exciting part. Instead of being handed a formula, you’re handed a rule the function obeys (for example, “${f}(${x} + ${y}) = ${fx} + ${f}(${y}) for all ${x},${NB}${y}”) and asked to discover which function(s) could possibly behave that way. It’s reverse-engineering: you know how the machine responds, and you must deduce the machine.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Solving a functional equation is detective work, and the detective’s main tool is <b>clever substitution</b>. Plug in ${x} = ${y} = 0 to learn ${f}(0). Plug in ${y} = 1, or ${y} = −${x}, or ${x} → ${ONE_X}, to generate a second equation. With two equations relating ${fx} and (say) ${fOne}, you can eliminate the unknown the same way you solve simultaneous linear equations, and out pops the formula for ${f}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> For combinations, never forget the <b>intersection of domains</b> (and ${g}${NB}≠${NB}0 for ${FG}). For functional equations, a unique answer usually requires an extra regularity assumption (typically <b>continuity</b>); at the school/exam level we take the “nice” solution that the standard substitutions produce, which is what the famous equations are designed to yield.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Algebra of functions.</b> For ${f}, ${g} real functions with domains ${Df}, ${Dg}:`,
      },
      {
        t: 'formula',
        kicker: 'Algebra of functions',
        main: `(${f} ± ${g})(${x}) = ${fx} ± ${gx}<br>(${I('fg')})(${x}) = ${fx} ${gx}<br>(${FG})(${x}) = ${fr(fx, gx)}<br>Domain: ${Df} ∩ ${Dg}, and ${gx} ≠ 0 for ${FG}`,
        legend: [`${f}, ${g} = real functions`, `${Df}, ${Dg} = their domains`],
        note: null,
      },
      {
        t: 'p',
        html: `Domains: ${f} ± ${g} and ${I('fg')} are defined on ${Df} ∩ ${Dg}; the quotient ${FG} on ${Df} ∩ ${Dg} ∩ {${x} ∶ ${gx}${NB}≠${NB}0}.`,
      },
      {
        t: 'table',
        title: 'Standard functional equations and their (regular) solutions',
        head: ['Functional equation', 'Solution'],
        rows: [
          [`${f}(${x} + ${y}) = ${fx} + ${f}(${y}) (Cauchy)`, `${fx} = ${I('kx')}`],
          [`${f}(${x} + ${y}) = ${fx} ${f}(${y})`, `${fx} = ${ax}`],
          [`${f}(${I('xy')}) = ${fx} + ${f}(${y})`, `${fx} = ${k}${NB}log${NB}${x}`],
          [`${f}(${I('xy')}) = ${fx} ${f}(${y})`, `${fx} = ${pw(x, n)}`],
          [`${fx} ${fOne} = ${fx} + ${fOne}`, `${fx} = 1 ± ${pw(x, n)}`],
        ],
      },
      {
        t: 'p',
        html: `<b>Useful first moves:</b> ${x} = ${y} = 0 (find ${f}(0)); ${x} = ${y} = 1 (find ${f}(1) or constraints); ${y} = 1; ${y} = −${x}; ${x} → ${ONE_X}; ${x} → 1 − ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Notation lock:</b> ${Df}, ${Dg} for domains; functional-equation unknown kept as ${f}.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Procedure A: Domain of a combination.</b> Find ${Df} and ${Dg} separately, intersect them, and for a quotient additionally delete the zeros of ${g}. <b>Reasoning:</b> a value must be legal for both functions to be legal for their combination.`,
      },
      {
        t: 'p',
        html: `<b>Procedure B: Solving by substitution / elimination.</b> (1) Substitute special values to extract anchors like ${f}(0) or ${f}(1). (2) Substitute a transformation of ${x} (commonly ${x} → ${ONE_X} or ${x} → 1 − ${x}) to get a second equation in ${fx} and ${f}(transformed). (3) Treat the two as simultaneous linear equations and eliminate the unwanted term. <b>Reasoning:</b> one equation has two unknown function-values; a second independent equation lets you solve for ${fx} algebraically.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: the Cauchy equation</b> ${f}(${x} + ${y}) = ${fx} + ${f}(${y}) <b>gives</b> ${fx} = ${I('kx')}<b>.</b>`,
      },
      {
        t: 'p',
        html: `Set ${x} = ${y} = 0: ${f}(0) = ${f}(0) + ${f}(0) ⇒ ${f}(0) = 0. Let ${k} = ${f}(1). Putting ${y} = ${x} repeatedly (or induction) gives ${f}(2${x}) = 2${fx}, and generally ${f}(${I('nx')}) = ${I('nf')}(${x}) for positive integers ${n}; in particular ${f}(${n}) = ${I('nk')}. Replacing ${x} by ${fr(x, n)} shows<br><br>${f}(${fr(x, n)}) = ${fr('1', n)}${fx},<br><br>so for any rational ${fr(p, q)},<br><br>${f}(${fr(p, q)}) = ${fr(p, q)}${k}.<br><br>Putting ${y} = −${x} gives ${f}(−${x}) = −${fx}, so this holds for negative rationals too.<br><br><b>Reasoning:</b> additivity transfers integer and then rational scaling directly onto the function. Assuming ${f} is continuous, this extends from the rationals to all reals:<br>${fx} = ${I('kx')}, ${k} = ${f}(1). ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Let ${fx} = ${x2} and ${gx} = 2${x} + 1 on ℝ. Find (${f} + ${g}), (${I('fg')}), and (${FG}) with its domain.`,
        steps: [
          `(${f} + ${g})(${x}) = ${x2} + 2${x} + 1,<br>(${I('fg')})(${x}) = ${x2}(2${x} + 1) = 2${x3} + ${x2},<br><br>(${FG})(${x}) = ${fr(x2, `2${x} + 1`)}, domain ℝ${NB}∖${NB}{−${HALF}} (since 2${x} + 1 = 0 at ${x} = −${HALF}).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `A function satisfies ${f}(${x} + ${y}) = ${fx} ${f}(${y}) for all ${x},${NB}${y}, with ${f}(1) = 3. Find ${f}(3).`,
        steps: [
          `<b>Speed:</b> this is the exponential pattern ${fx} = ${ax}, and ${f}(1) = ${a} = 3, so ${fx} = ${pw('3', x)} and ${f}(3) = 27. Or directly: ${f}(3) = ${f}(1 + 1 + 1) = ${f}(1)<sup>3</sup> = 3<sup>3</sup> = 27.`,
          `<b>Trap:</b> treating it like the additive Cauchy equation (which would give ${f}(3) = 3${f}(1) = 9): wrong, because the right side is a product, not a sum.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${fx} given 2${fx} + ${f}(1 − ${x}) = ${x2} for all real ${x}.`,
        steps: [
          `Call this equation (i). Replace ${x} by 1 − ${x}:<br>2${f}(1 − ${x}) + ${fx} = (1 − ${x})<sup>2</sup>. (ii)`,
          `Multiply (i) by 2: 4${fx} + 2${f}(1 − ${x}) = 2${x2}. Subtract (ii):<br>3${fx} = 2${x2} − (1 − ${x})<sup>2</sup><br>= 2${x2} − (1 − 2${x} + ${x2})<br>= ${x2} + 2${x} − 1.`,
        ],
        ans: `${fx} = ${fr(`${x2} + 2${x} − 1`, '3')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find ${fx}, ${x}${NB}≠${NB}0, satisfying ${fx} + 2${fOne} = 3${x}.`,
        steps: [
          `Call this (i). Replace ${x} by ${ONE_X}:<br><br>${fOne} + 2${fx} = ${fr('3', x)}. (ii)`,
          `Now eliminate ${fOne}. Multiply (ii) by 2: 2${fOne} + 4${fx} = ${fr('6', x)}. Subtract (i):<br><br>3${fx} = ${fr('6', x)} − 3${x} ⟹ ${fx} = ${fr('2', x)} − ${x}.`,
          `<b>Verification:</b> ${fx} + 2${fOne} = (${fr('2', x)} − ${x}) + 2(2${x} − ${ONE_X})<br><br>= ${fr('2', x)} − ${x} + 4${x} − ${fr('2', x)} = 3${x} ✓: the substitution-and-eliminate method delivers, and the check confirms it.`,
        ],
        ans: `${fx} = ${fr('2', x)} − ${x}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> For ${fx} = √${x} (domain ${x}${NB}≥${NB}0) and ${gx} = ${x} − 4, state the domain of (${FG})(${x}).`,
            a: '[0, ∞) ∖ {4} = [0, 4) ∪ (4, ∞).',
          },
          {
            q: `<b>[CUET]</b> If ${f}(${x} + ${y}) = ${fx} + ${f}(${y}) and ${f}(1) = 5, find ${f}(4).`,
            a: `${fx} = 5${x} ⇒ ${f}(4) = 20.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${f}(${I('xy')}) = ${fx} ${f}(${y}) for all ${x},${NB}${y} > 0 and ${f}(2) = 4, find ${f}(8).`,
            a: `${fx} = ${x2} ⇒ ${f}(8) = 64.`,
          },
          {
            q: `<b>[JEE Main]</b> Solve for ${f}: 3${fx} − ${fmx} = 2${x} + 4.`,
            a: `Replace ${x} → −${x}: 3${fmx} − ${fx} = −2${x} + 4; solving the pair gives ${fx} = ${fr(`${x} + 4`, '2')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> If ${fx} + 2${f}(1 − ${x}) = ${x2} for all real ${x}, find ${fx} and hence ${f}(2).`,
            a: `Replace ${x} → 1 − ${x} to get ${f}(1 − ${x}) + 2${fx} = (1 − ${x})<sup>2</sup>; eliminating ${f}(1 − ${x}) gives<br><br>${fx} = ${fr(`${x2} − 4${x} + 2`, '3')},<br><br>so ${f}(2) = −${fr('2', '3')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For ${fx} = ${ONE_X} and ${gx} = √${x}, the domain of (${f} · ${g})(${x}) is:`,
        opts: [
          { label: `${x} ≥ 0`, nudge: `<b>(a)</b> keeps ${x} = 0 where ${f} blows up.` },
          { label: `${x} > 0`, nudge: null },
          { label: `${x} ≠ 0`, nudge: `<b>(c)</b> allows negatives where ${g} fails.` },
          { label: 'ℝ', nudge: '<b>(d)</b> ignores both constraints.' },
        ],
        correct: 1,
        solution: `${g} needs ${x}${NB}≥${NB}0; ${f} needs ${x}${NB}≠${NB}0. Intersection: ${x}${NB}>${NB}0.`,
      },
      {
        t: 'mcq',
        q: `If ${f}(${x} + ${y}) = ${fx} + ${f}(${y}) for all real ${x},${NB}${y}, then ${f}(0) equals:`,
        opts: [
          {
            label: '1',
            nudge: `<b>(a)</b> confuses additive with multiplicative (where ${f}(0) = 1 can arise).`,
          },
          { label: '0', nudge: null },
          { label: `${f}(1)`, nudge: '<b>(c)</b> has no basis.' },
          { label: 'undefined', nudge: `<b>(d)</b> the equation defines ${f}(0) perfectly.` },
        ],
        correct: 1,
        solution: `Put ${x} = ${y} = 0: ${f}(0) = 2${f}(0) ⇒ ${f}(0) = 0.`,
      },
      {
        t: 'mcq',
        q: `A function satisfies ${f}(${I('xy')}) = ${fx} + ${f}(${y}) for all ${x},${NB}${y} > 0. Then ${f} is of the form:`,
        opts: [
          { label: I('kx'), nudge: '<b>(a)</b> solves the additive Cauchy equation.' },
          { label: pw(x, n), nudge: `<b>(b)</b> solves ${f}(${I('xy')}) = ${fx}${f}(${y}).` },
          { label: `${k}${NB}log${NB}${x}`, nudge: null },
          { label: ax, nudge: `<b>(d)</b> solves ${f}(${x} + ${y}) = ${fx}${f}(${y}).` },
        ],
        correct: 2,
        solution: `Turning products into sums is the defining property of the logarithm, so ${fx} = ${k}${NB}log${NB}${x}. Each is a different pattern: matching the structure is the whole skill.`,
      },
      {
        t: 'mcq',
        q: `If 2${fx} + ${fmx} = 3${x} + 9 for all real ${x}, then ${f}(2) equals:`,
        opts: [
          { label: '9', nudge: null },
          {
            label: '15',
            nudge: `<b>(b)</b> reads off ${fx} = 3${x} + 9 directly, ignoring the ${fmx} term.`,
          },
          {
            label: '5',
            nudge: `<b>(c)</b> wrongly collapses 2${fx} + ${fmx} to 3${fx}, giving 3${f}(2) = 15 ⇒ ${f}(2) = 5.`,
          },
          { label: '−3', nudge: `<b>(d)</b> is ${f}(−2), the wrong evaluation point.` },
        ],
        correct: 0,
        solution: `Replace ${x} → −${x}: 2${fmx} + ${fx} = −3${x} + 9. Solve the pair: multiply the first by 2 and subtract the second:<br>3${fx} = 2(3${x} + 9) − (−3${x} + 9)<br>= 9${x} + 9,<br>so ${fx} = 3${x} + 3. Hence ${f}(2) = 9. (Check: 2${f}(2) + ${f}(−2) = 2(9) + (−3) = 15 = 3(2) + 9 ✓.)`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping the domain in combinations.</b> (${FG}) excludes zeros of ${g} and respects both original domains: intersect, then delete.`,
          `<b>Matching the wrong functional-equation pattern.</b> Sum-to-sum is linear (${I('kx')}); sum-to-product is exponential; product-to-sum is logarithmic; product-to-product is a power. Read the structure before solving.`,
          `<b>Forgetting the second substitution.</b> One functional equation in ${fx} and ${f}(something) needs a partner equation: generate it with ${x} → ${ONE_X} or ${x} → 1 − ${x}.`,
          '<b>Assuming uniqueness without continuity.</b> State the regularity assumption; the standard solution is the continuous one.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> Memorise the five standard patterns and their solutions: many “find ${f}” questions are instantly recognised, no work needed. For the elimination type, the partner substitution is almost always ${x} → ${ONE_X} (when ${ONE_X} appears) or ${x} → 1 − ${x} (when 1 − ${x} appears). Always <b>verify</b> the final ${f} by plugging back: it catches sign slips.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `(${f} ± ${g}), (${I('fg')}) on ${Df} ∩ ${Dg};<br>${FG} on ${Df} ∩ ${Dg} ∩ {${g}${NB}≠${NB}0}.`,
            note: '',
          },
          { f: `<b>Cauchy</b> ${f}(${x} + ${y}) = ${fx} + ${f}(${y}) ⇒ ${fx} = ${I('kx')}.`, note: '' },
          {
            f: `${f}(${x} + ${y}) = ${fx}${f}(${y}) ⇒ ${ax};<br>${f}(${I('xy')}) = ${fx} + ${f}(${y}) ⇒ ${k}${NB}log${NB}${x};<br>${f}(${I('xy')}) = ${fx}${f}(${y}) ⇒ ${pw(x, n)}.`,
            note: '',
          },
          {
            f: '<b>Method</b>',
            note: `substitute special values (0, 1); make a 2nd equation via ${x} → ${ONE_X} or ${x} → 1 − ${x}; eliminate.`,
          },
          { f: 'Always <b>verify</b> by back-substitution.', note: '' },
        ],
        aids: [
          '“<b>Sum→sum: line. Sum→product: exp. Product→sum: log. Product→product: power.</b>”',
          '“One equation, two unknowns ⇒ <b>substitute to get a twin</b>.”',
          '“Combinations live on the <b>overlap</b>.”',
        ],
      },
    ],
  },
];
