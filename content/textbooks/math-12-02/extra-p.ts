import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional topic P, pp. 178–184 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 178, after Addendum E's answers, and
 * ends on p. 184; Chapter 3 starts on p. 185. The opening paragraph (in italics in
 * print) is the "Introduction"; the numbered headings "P.1 The distribution" …
 * "P.5 What the chapter text under-serves" are the parts, without their numbers.
 * The marks table is a table block. Each archetype A1–A6 is a worked example tagged
 * with its heading: its "Looks like / Method" paragraph and its "Representative"
 * problem are the question, the working the steps, its "Answer:" or boxed result
 * (where printed) the answer box. The traps are one mistakes block; the graded
 * practice set P1–P12 is one practice block, each question's working its answer.
 * Exam years, dates and shift numbers are dropped from every question tag ("in the
 * style of Main Jan 12, 2019 (I)" → "in the style of Main"; a bare "1981" → "JEE"),
 * and every share or count of past questions carries the estimate label. These
 * pages print no drawing and no formula card. Every fraction is stacked (<frac>);
 * a fraction over a fraction is written with ÷ (decision 5); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const y = '<i>y</i>';
const z = '<i>z</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const k = '<i>k</i>';
const n = '<i>n</i>';
const t = '<i>t</i>';
const f = '<i>f</i>';
const N = '<i>N</i>';
const S = '<i>S</i>';
const th = '<i>θ</i>';
const al = '<i>α</i>';
const be = '<i>β</i>';
const x2 = `${x}<sup>2</sup>`;
/** |x|, the U+2060 keeping the opening bar with its letter. */
const ABSX = `|⁠${x}|`;

const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
/** An inverse function and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;

const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P3_2 = fr('3π', '2');
const P3_4 = fr('3π', '4');
const P5_6 = fr('5π', '6');
const P13_6 = fr('13π', '6');
const H = fr('1', '2');
const R3_2 = fr('√3', '2');
const SQ = `√(1 + ${x2})`;
/** 2x over 1 + x², the double-angle argument. */
const DBL = fr(`2${x}`, `1 + ${x2}`);

/** An interval, its comma glued: [a, b]. */
const iv = (p: string, q: string, o = '[', c = ']') => `${o}${p},${NB}${q}${c}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');
const COTB = iv('0', 'π', '(', ')');
const LOWQ = iv('−π', `−${P2}`, '(', ')');

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 178–184 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The patterns below are drawn from JEE questions of previous years (JEE Main, JEE Advanced and the JEE papers before them). Each representative problem is worked out in full, and its tag shows the paper whose style it follows.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: `<b>Volume.</b> The papers span four decades: Main sessions in six different years (sixteen sittings in all), plus Advanced papers in four different years (five papers) ${ESTIMATE}. The steady signal: <b>one inverse-trig question per JEE Main paper almost every year</b> ${ESTIMATE}, and Advanced visits the chapter in bursts preferring multi-correct, matching-list and numerical-answer formats over single-option MCQs.`,
      },
      { t: 'p', html: `<b>Where the marks concentrate</b> ${ESTIMATE}<b>:</b>` },
      {
        t: 'table',
        title: null,
        head: ['Block', 'Weight', 'Papers cited'],
        rows: [
          ['Arctangent sums, conditional domains, telescoping series', 'heaviest', '5 (JEE 2, Main 2, Adv 1)'],
          ['Equations, inequalities, counting solutions', 'heavy', '6 (JEE 2, Main 3, Adv 1)'],
          ['Composite evaluation & triangle-substitution', 'steady', '4 (JEE 2, Main 2)'],
          ['Principal-value folding', 'mostly older papers + Advanced fill-ins', '4 (JEE 2, Main 1, Adv 1)'],
          ['Multi-angle identities with validity windows', 'Advanced-flavoured', '3 (Main 1, Adv 2)'],
        ],
      },
      {
        t: 'p',
        html: `Two format facts worth internalising: Advanced likes this chapter as a <b>multi-correct</b> or <b>column-matching</b> item worth a lot of marks, and Main increasingly hides the chapter inside <b>set-cardinality / number-of-solutions</b> language (“the set … is a singleton”) rather than naked “evaluate” commands ${ESTIMATE}.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'A1: The conditional arctangent sum (“compute xy first”)',
        q: `<b>Looks like:</b> ${TAN}(algebraic) + ${TAN}(algebraic) set equal to something; a set or an equation is asked. <b>Method:</b> take tan of both sides, solve the resulting quadratic, then <b>reject roots whose branch behaviour contradicts the original equation</b>.<br><br><b>Representative (in the style of Main).</b> Find the set {${x} ∶ ${TAN}(2${x}) + ${TAN}(3${x}) = ${P4}}.`,
        steps: [
          `Take the tangent of both sides (and audit the roots afterwards):<br>${TAN}(${fr(`5${x}`, `1 − 6${x2}`)}) = ${P4}<br>⇒ ${fr(`5${x}`, `1 − 6${x2}`)} = 1<br>⇒ 6${x2} + 5${x} − 1 = 0.`,
          `Roots: ${x} = ${fr('1', '6')} and ${x} = −1. Reject ${x} = −1: then 2${x} · 3${x} = 6 > 1 with both entries negative, so the left side lies in ${LOWQ}: it cannot equal ${P4}. Indeed ${TAN}(−2) + ${TAN}(−3) = −${P3_4}.`,
          `The set is {${fr('1', '6')}}: <b>a singleton</b>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A2: The telescoping arctangent series',
        q: `<b>Looks like:</b> ∑${NB}${TAN}(${fr('1', 'quadratic')}) or ∑${NB}${COT}(quadratic), finite or infinite. <b>Method:</b> engineer the term into ${fr(`${a} − ${b}`, `1 + ${a}${b}`)} = tan(${of(TAN, a)} − ${of(TAN, b)}); consecutive terms cancel; read the limit off the endpoints.<br><br><b>Representative (in the style of Adv).</b> Evaluate ∑<sub>${n}=1</sub><sup>∞</sup>${COT}(1 + ${n} + ${n}<sup>2</sup>).`,
        steps: [
          `Since 1 + ${n} + ${n}<sup>2</sup> > 0, ${COT}(1 + ${n} + ${n}<sup>2</sup>) = ${TAN}${NB}${fr('1', `${n}<sup>2</sup> + ${n} + 1`)}, and<br>${fr('1', `${n}<sup>2</sup> + ${n} + 1`)} = ${fr(`(${n} + 1) − ${n}`, `1 + ${n}(${n} + 1)`)}<br>⟹ ${COT}(1 + ${n} + ${n}<sup>2</sup>)<br>= ${TAN}(${n} + 1) − ${TAN}(${n}).`,
          `Partial sums telescope to ${TAN}(${N} + 1) − ${of(TAN, '1')} → ${P2} − ${P4} =`,
        ],
        ans: P4,
      },
      {
        t: 'ex',
        tag: 'A3: Piecewise double-angle wrappers (“for which x is the identity legal?”)',
        q: `<b>Looks like:</b> 2${NB}${of(TAN, x)} wearing a ${SIN}, ${COS} or ${TAN} costume; often evaluated at a large ${x}. <b>Method:</b> put ${th} = ${of(TAN, x)}, apply the double-angle formula, then ask whether 2${th} is inside the outer branch. If not, fold: the answer changes formula.<br><br><b>Representative (in the style of Main online).</b> Let<br>${f}(${x}) = 2${NB}${of(TAN, x)} + ${SIN}(${DBL});<br>find ${f}(5).`,
        steps: [
          `Let ${th} = ${of(TAN, x)}; then sin${NB}2${th} = ${DBL}. For ${x} = 5, ${th} = ${of(TAN, '5')} ≈ 78.7°, so 2${th} > ${P2}: outside the ${SIN} cage. The cage returns π − 2${th}, hence<br>${f}(5) = 2${th} + (π − 2${th}) = π.`,
          `(In fact ${f}(${x}) = π for all ${x} > 1, ${f}(${x}) = −π for all ${x} < −1, and ${f}(${x}) = 4${NB}${of(TAN, x)} for ${ABSX}${NB}≤${NB}1.) The whole question is the branch check; anyone who cancels blindly gets 4${NB}${of(TAN, '5')} ≠ π.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A4: Triangle-method composites and simplifications',
        q: `<b>Looks like:</b> cos(${TAN}(⋯)), sin(${COT}(⋯)), or an expression whose radical screams for ${x} = tan${NB}${th}. <b>Method:</b> name the inner angle, build the right triangle, read the ratio; or substitute per the radical signature.<br><br><b>Representative (in the style of JEE).</b> For 0 < ${x} < 1, simplify [{${x}${NB}cos(${of(COT, x)}) + sin(${of(COT, x)})}<sup>2</sup> − 1]<sup>1/2</sup>.`,
        steps: [
          `With ${of(COT, x)} = ${th}: opposite 1, adjacent ${x}, hypotenuse ${SQ}, so<br>cos(${of(COT, x)}) = ${fr(x, SQ)},<br>sin(${of(COT, x)}) = ${fr('1', SQ)}.`,
          `The bracket becomes ${fr(`${x2} + 1`, SQ)} = ${SQ}; squaring and subtracting 1 leaves ${x2}, and the root is`,
        ],
        ans: `${x} (positive since 0 < ${x} < 1)`,
      },
      {
        t: 'ex',
        tag: 'A5: The sign-and-range audit (Advanced multi-correct)',
        q: `<b>Looks like:</b> ${al} = ${k}${NB}${SIN}(·), ${be} = ${k}${NB}${COS}(·) with multiplier ${k} ≥ 3; four inequalities offered. <b>Method:</b> bracket each multiple angle between neighbouring special angles; never evaluate numerically without a sandwich proof.<br><br><b>Representative (Advanced type, with simpler numbers).</b> Let ${al} = 3${NB}${SIN}${NB}${fr('2', '3')} and ${be} = 3${NB}${COS}${NB}${fr('1', '3')} (principal values). Which hold: (a) cos${NB}${be} > 0 (b) sin${NB}${be} < 0 (c) cos(${al} + ${be}) > 0 (d) cos${NB}${al} < 0?`,
        steps: [
          `Sandwiches:<br>${P6} < ${SIN}${NB}${fr('2', '3')} < ${P4} ⇒ ${P2} < ${al} < ${P3_4},<br><br>${P3} < ${COS}${NB}${fr('1', '3')} < ${P2} ⇒ π < ${be} < ${P3_2}.`,
          `Hence cos${NB}${al} < 0: <b>(d)</b>; ${be} sits in the third quadrant, so sin${NB}${be} < 0 and cos${NB}${be} < 0: <b>(b)</b> yes, (a) no. Finally ${P3_2} < ${al} + ${be} < 2π (lower bound from the sandwiches; upper bound since ${SIN}${NB}${fr('2', '3')} < ${P4} and ${COS}${NB}${fr('1', '3')} < ${fr('5π', '12')}), so ${al} + ${be} is in the fourth quadrant: cos(${al} + ${be}) > 0, <b>(c)</b>.`,
        ],
        ans: '(b), (c), (d)',
      },
      {
        t: 'ex',
        tag: 'A6: Inequalities and solution-counting under the branch',
        q: `<b>Looks like:</b> “${of(SIN, x)} > ${of(COS, x)}”, “number of solutions of …”, “the set … is”. <b>Method:</b> replace one function using the complementary law, convert to an ordinary inequality/equation, then count <b>including endpoint cases</b>.<br><br><b>Representative (in the style of Main online).</b> Find all ${x} ∈ ${iv('0', '1', '(', ')')} with ${of(SIN, x)} > ${of(COS, x)}.`,
        steps: [
          `Using ${of(COS, x)} = ${P2} − ${of(SIN, x)}:<br>${of(SIN, x)} > ${P2} − ${of(SIN, x)}<br>⟺ ${of(SIN, x)} > ${P4} ⟺ ${x} > ${fr('1', '√2')}.`,
        ],
        ans: `${x} ∈ ${iv(fr('1', '√2'), '1', '(', ')')}`,
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'p',
        html: 'These are the error patterns that the wrong options in JEE questions are built around, visible both in the distractors and in the roots that official solutions reject:',
      },
      {
        t: 'mistakes',
        items: [
          `<b>The missing ±π.</b> For ${of(TAN, x)} + ${of(TAN, y)} with ${x}${y}${NB}>${NB}1, the uncorrected formula is off by exactly π. Distractor sets routinely contain both the corrected and uncorrected values ${ESTIMATE}. Compute ${x}${y} before touching the formula.`,
          `<b>Blind cancellation of ${f}<sup>−1</sup> ∘ ${f}.</b> Every folding question (an Adv fill-in; JEE, Main) offers the unfolded angle as the tempting option ${ESTIMATE}. Check the branch first.`,
          `<b>Identity outside its window.</b> 3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) fails loudly at ${x} = ${R3_2} (π ≠ 0). Advanced items test exactly this habit of quoting multiple-angle forms unconditionally.`,
          `<b>Extraneous roots after taking tan or squaring.</b> The singleton question (A1) produces the bogus root ${x} = −1; the official solution rejects it on branch grounds. Every converted equation must be audited against the original branches.`,
          `<b>Odd-versus-π− confusion.</b> ${COT}(−·) and ${SEC}(−·) reflect, they do not negate; and ${TAN}${NB}${fr('1', x)} = ${of(COT, x)} holds only for ${x}${NB}>${NB}0.`,
          `<b>Endpoint blindness.</b> In solution-counting, ${x} = ±1 sit exactly on the branch boundaries and do count: see practice question 5 below. Students who “feel” endpoints are excluded miscount.`,
          `<b>Piecewise laziness.</b> Expressions like ${SIN}${NB}${DBL} change formula across ${x} = 1; a single-formula answer is wrong on part of the domain (A3).`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ${COS}(cos${NB}${P13_6}) + ${TAN}(tan${NB}${P5_6}).`,
            a: `${P13_6} ≡ ${P6} (mod 2π) and ${P6} ∈ ${iv('0', 'π')}, so the first term is ${P6}. Next, tan${NB}${P5_6} = tan(−${P6}) and −${P6} ∈ ${TANB}, so the second term is −${P6}. <b>Sum = 0.</b>`,
          },
          {
            q: `Evaluate cos(2${NB}${TAN}${NB}${fr('1', '4')}).`,
            a: `cos${NB}2${th} = ${fr(`1 − tan<sup>2</sup>${NB}${th}`, `1 + tan<sup>2</sup>${NB}${th}`)}<br>= (1 − ${fr('1', '16')}) ÷ (1 + ${fr('1', '16')})<br>= ${fr('15', '17')}.`,
          },
          {
            q: `If ${of(COS, x)} + ${of(COS, y)} = ${P2}, show ${x2} + ${y}<sup>2</sup> = 1.`,
            a: `Then ${of(COS, x)} = ${P2} − ${of(COS, y)}; taking cosines, ${x} = cos(${P2} − ${of(COS, y)}) = sin(${of(COS, y)}) = √(1 − ${y}<sup>2</sup>), giving ${x2} + ${y}<sup>2</sup> = 1.`,
          },
          {
            q: `(JEE, repeated in JEE Main online) Solve sin[${COT}(1 + ${x})] = cos(${of(TAN, x)}).`,
            a: `Triangle readings: sin(${COT}(1 + ${x})) = ${fr('1', `√(1 + (1 + ${x})<sup>2</sup>)`)} and cos(${of(TAN, x)}) = ${fr('1', SQ)}. Equating and squaring:<br>1 + (1 + ${x})<sup>2</sup> = 1 + ${x2}<br>⇒ 2${x} + 1 = 0 ⇒ ${x} = −${H}.<br>No root-audit needed: both readings are valid for every real input.`,
          },
          {
            q: `How many real solutions does ${of(SIN, x)} = 2${NB}${of(TAN, x)} have?`,
            a: `For 0 < ${x} < 1: both sides lie in ${iv('0', P2)} where sin is injective, and sin(2${NB}${of(TAN, x)}) = ${DBL} > ${x}, so 2${NB}${of(TAN, x)} > ${of(SIN, x)} strictly: no interior roots. Checking the boundaries: ${x} = 0 works; ${x} = 1 gives ${P2} = ${P2}; by oddness ${x} = −1 works. <b>Exactly three solutions:</b> ${x} = −1, 0, 1. (Endpoint discipline: trap 6.)`,
          },
          {
            q: `State precisely when 3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${x}<sup>3</sup>) holds, and demonstrate the failure at ${x} = ${R3_2}.`,
            a: `Writing ${th} = ${of(SIN, x)}, the right side is ${SIN}(sin${NB}3${th}), which equals 3${th} only when 3${th} ∈ ${SINB}, i.e. ${ABSX}${NB}≤${NB}${H}. At ${x} = ${R3_2}: left side = 3 · ${P3} = π; right side = ${SIN}(0) = 0. <b>Fails, as predicted.</b>`,
          },
          {
            q: `(JEE Main) If ${S} is the sum of the first ten terms of ∑${NB}${TAN}${NB}${fr('1', `2${n}<sup>2</sup>`)}, find tan${NB}${S}.`,
            a: `Since ${fr('1', `2${n}<sup>2</sup>`)} = ${fr(`(2${n} + 1) − (2${n} − 1)`, `1 + (2${n} + 1)(2${n} − 1)`)},<br><br>${S} = ∑<sub>${n}=1</sub><sup>10</sup>[${TAN}(2${n} + 1) − ${TAN}(2${n} − 1)]<br>= ${of(TAN, '21')} − ${of(TAN, '1')},<br>so tan${NB}${S} = ${fr('21 − 1', '1 + 21 · 1')} = ${fr('10', '11')}.`,
          },
          {
            q: `Arrange in increasing order: 2${NB}${TAN}${NB}${fr('1', '5')}, ${TAN}${NB}${H}, ${P4}.`,
            a: `2${NB}${TAN}${NB}${fr('1', '5')} = ${TAN}(${fr('2', '5')} ÷ (1 − ${fr('1', '25')}))<br>= ${TAN}${NB}${fr('5', '12')}.<br>Since ${fr('5', '12')} < ${H} < 1 and arctan is increasing,<br>2${NB}${TAN}${NB}${fr('1', '5')} < ${TAN}${NB}${H} < ${P4}.<br>(Comparison-by-single-arctan is exactly the skill behind the JEE “greater of two angles” item.)`,
          },
          {
            q: `(Adapted from Main) Evaluate cot(∑<sub>${n}=1</sub><sup>19</sup>${TAN}${NB}${fr('1', `1 + ${n} + ${n}<sup>2</sup>`)}).`,
            a: `Each term = ${TAN}(${n} + 1) − ${of(TAN, n)} (same engineering as A2), so the sum is ${of(TAN, '20')} − ${of(TAN, '1')}. Then<br>cot(${of(TAN, '20')} − ${of(TAN, '1')})<br>= ${fr('20 · 1 + 1', '20 − 1')} = ${fr('21', '19')}.`,
          },
          {
            q: `(JEE Main) ${x}, ${y}, ${z} are in A.P. and ${of(TAN, x)}, ${of(TAN, y)}, ${of(TAN, z)} are also in A.P. Show that ${x} = ${y} = ${z} in the non-degenerate case.`,
            a: `Taking tangent of 2${NB}${of(TAN, y)} = ${of(TAN, x)} + ${of(TAN, z)}:<br>${fr(`2${y}`, `1 − ${y}<sup>2</sup>`)} = ${fr(`${x} + ${z}`, `1 − ${x}${z}`)} = ${fr(`2${y}`, `1 − ${x}${z}`)}.<br>If ${y} ≠ 0, cancel: ${x}${z} = ${y}<sup>2</sup>. Together with ${x} + ${z} = 2${y}, the numbers ${x}, ${z} are roots of ${t}<sup>2</sup> − 2${y}${t} + ${y}<sup>2</sup> = 0, forcing ${x} = ${z} = ${y}. (Degenerate case: ${y} = 0, ${z} = −${x} also satisfies both progressions, so the question is meant generically, with ${x} = ${y} = ${z}.)`,
          },
          {
            q: `(JEE, 5-marker) Prove cos[${TAN}(sin(${of(COT, x)}))] = √(${fr(`1 + ${x2}`, `2 + ${x2}`)}).`,
            a: `Let ${th} = ${of(COT, x)}, so ${th} ∈ ${COTB} and sin${NB}${th} = ${fr('1', SQ)}: valid for <b>every</b> real ${x}, since sine is positive throughout ${COTB}. Then<br>cos[${TAN}${NB}${fr('1', SQ)}]<br>= 1 ÷ √(1 + ${fr('1', `1 + ${x2}`)})<br>= √(${fr(`1 + ${x2}`, `2 + ${x2}`)}). ■`,
          },
          {
            q: `Solve ${TAN}(${x} + 1) + ${TAN}(${x} − 1) = ${TAN}${NB}${fr('8', '31')}.`,
            a: `Product test: (${x} + 1)(${x} − 1) = ${x2} − 1. Taking tangent,<br>${fr(`2${x}`, `2 − ${x2}`)} = ${fr('8', '31')} ⇒ 62${x} = 16 − 8${x2}<br>⇒ 4${x2} + 31${x} − 8 = 0<br>⇒ ${x} = ${fr('1', '4')} or ${x} = −8.<br>Audit: ${x} = −8 gives both entries negative with product 63 > 1, putting the sum in ${LOWQ}, impossible for a positive target. ${x} = ${fr('1', '4')}: product = −${fr('15', '16')} < 1, so the direct formula applies, and indeed (${fr('5', '4')} − ${fr('3', '4')}) ÷ (1 + ${fr('15', '16')}) = ${fr('8', '31')}. <b>Only ${x} = ${fr('1', '4')}.</b>`,
          },
        ],
      },

      { t: 'part', title: 'What the chapter text under-serves' },
      {
        t: 'p',
        html: `The chapter drills branch-folding and identity manipulation to board-and-CUET depth, but recent JEE papers spend most of their marks on three things ${ESTIMATE}: <b>solving equations and inequalities in inverse functions with explicit root-auditing</b>, which the text barely touches, <b>telescoping arctangent/cotangent series</b>, and <b>piecewise-defined composites</b> like 2${NB}${of(TAN, x)} + ${SIN}${NB}${DBL} that demand case analysis rather than a single quoted identity. A student who finishes this chapter should spend extra practice hours on those three formats specifically.`,
      },
    ],
  },
];
