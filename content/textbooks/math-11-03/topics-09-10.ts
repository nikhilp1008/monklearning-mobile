import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 09 and 10, from the "Additional Topics" part of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word:
 * Topic 09 "Trigonometric Inequalities" (pp. 277–289) and Topic 10 "Maximum,
 * Minimum and Range of Trigonometric Expressions" (pp. 289–301; its cheat sheet
 * runs onto the top of p. 301).
 * The part heading "Chapter 3: Trigonometric Functions — Additional Topics"
 * (p. 277) is not copied; its two opening paragraphs open Topic 09's Exam
 * relevance part, with "Subtopic" → "Topic" and the closing topic named
 * Additional topic D (decision 12). Each topic opens with its "Exam Relevance:"
 * box as a part of its own, then is split at its Sections 1 to 8.
 * Each topic's own unnumbered "Figure 1" (p. 278) and "Figure 2" (p. 290) are
 * m11-03-09-d1 and m11-03-10-d1, placed where the book prints them; both are
 * redrawn in lib/diagrams/mathematics-11-03.ts.
 * Every fraction is stacked (<frac>); no em dashes.
 */

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const H = fr('1', '2');
const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P8 = fr('π', '8');
const P5_6 = fr('5π', '6');
const P2_3 = fr('2π', '3');
const P4_3 = fr('4π', '3');
const P3_2 = fr('3π', '2');
const T3_2 = fr('3', '2');
const ROOT = '√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)';
const S2 = 'sin<sup>2</sup> <i>x</i>';
const C2 = 'cos<sup>2</sup> <i>x</i>';
const RATIO = fr('sin 3<i>x</i>', 'sin <i>x</i>');
const AC2 = fr('<i>a</i> + <i>c</i>', '2');
const HALFROOT = '√(<i>b</i><sup>2</sup> + (<i>a</i> − <i>c</i>)<sup>2</sup>)';
const VERTEX = `−${fr('<i>q</i>', '2<i>p</i>')}`;
const T09 = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 09 · pp. 277–289 ────────────────
  {
    n: '09',
    title: 'Trigonometric Inequalities',
    kalam:
      'Every trigonometric inequality is solved by the same two-step picture: find the boundary, then decide which side of it you want.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Topics 09 to 12 (the book’s “Additional Topics” part) extend Chapter 3 with four further topics: <b>Topic 09</b> (trigonometric inequalities), <b>Topic 10</b> (maximum, minimum and range of trigonometric expressions), <b>Topic 11</b> (trigonometric series: sums in AP and telescoping products) and <b>Topic 12</b> (higher multiple angles and the sum of three or more angles). Additional topic D, with examples labelled <b>D1–D4</b>, treats boundedness equations and simultaneous trigonometric equations.',
      },
      {
        t: 'p',
        html: 'These topics are ones that NCERT Class 11 Chapter 3 itself demands or that the standard JEE syllabus assumes. Cross-references such as “Topic 05’s Identity master reference part, item (G)” point back into Topics 01–08.',
      },
      {
        t: 'p',
        html: `CBSE Boards touch this only lightly: a 1–2 mark “find the values of <i>x</i> in [0, 2π] for which sin <i>x</i> ≥ ${H}” is about the ceiling ${T09}, and Topic 04 already showed one such reading-off-the-graph example. JEE Main, by contrast, asks for the complete general solution set of an inequality at least once most years ${T09}, usually after a disguising step (a quadratic in sin <i>x</i>, or an <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> combination). JEE Advanced pushes into cubic and higher polynomial inequalities in tan <i>x</i> solved by a sign scheme, into inequalities whose bound is exactly the amplitude so that the “inequality” collapses to an equation, and into counting solutions in a stated interval. (NEET does not test mathematics.) An inequality is not an equation with a different symbol: an equation returns isolated points, an inequality returns intervals, and the machinery for generating those intervals is what this topic installs.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>The Mumbai monsoon warning.</b> The weather office does not tell you the exact instant the rainfall crosses 100 mm. It tells you the window: “heavy rain between 2 p.m. and 7 p.m., every day this week.” That is an inequality answer: a repeating band of time, not a list of moments. Equations in Topic 06 gave you moments; inequalities give you bands, and the bands repeat with exactly the same period as the function.',
      },
      {
        t: 'p',
        html: '<b>Every trigonometric inequality is solved by the same two-step picture: find the boundary, then decide which side of it you want.</b> The boundary is where equality holds, and you already know how to find that: it is a Topic 06 equation. What is new is only the second step: sweeping through one full period and asking, on each stretch between consecutive boundary points, whether the inequality is true or false. Once you have the answer over one period, periodicity hands you every other period for free.',
      },
      {
        t: 'p',
        html: `Think about it this way. Draw <i>y</i> = sin <i>x</i> over [0, 2π] and draw the horizontal line <i>y</i> = ${H}. The two curves cross at <i>x</i> = ${P6} and <i>x</i> = ${P5_6}. Between those crossings the wave sits above the line; outside them it sits below. So sin <i>x</i> > ${H} on (${P6}, ${P5_6}), and the general answer is that same open interval slid along by every multiple of 2π. No formula was memorised; the picture was read.`,
      },
      { t: 'fig', id: 'm11-03-09-d1' },
      {
        t: 'p',
        html: `<b>The asymmetry that trips everyone.</b> For sine and cosine the band is not centred where you expect. The set cos <i>x</i> > ${H} is symmetric about <i>x</i> = 0, giving (−${P3}, ${P3}): cosine is even, so its bands straddle the even multiples of π. The set sin <i>x</i> > ${H} is symmetric about <i>x</i> = ${P2}, not about <i>x</i> = ${P6}. <b>Cosine inequalities are naturally written as 2<i>n</i>π ± something; sine inequalities are not, and forcing them into that shape is the commonest structural error in the topic.</b>`,
      },
      {
        t: 'p',
        html: '<b>Second idea: the sign scheme is the same tool you use in algebra.</b> An inequality such as tan<sup>3</sup> <i>x</i> + 3 > 3 tan <i>x</i> + tan<sup>2</sup> <i>x</i> has nothing trigonometric about its hard part. Put <i>y</i> = tan <i>x</i>, factor the cubic, mark the roots on a number line, read off where the product is positive, and only then translate each <i>y</i>-band back into an <i>x</i>-band. Trigonometry enters at the start (the substitution) and at the end (the translation); the middle is ordinary algebra (the sign scheme of a polynomial inequality). Keeping those three stages separate is the whole technique.',
      },
      {
        t: 'p',
        html: `<b>Where the picture breaks down.</b> For tan and cot the “band” can run into a vertical asymptote, and the endpoint is then never included even when the inequality is non-strict: tan <i>x</i> > 1 gives (<i>n</i>π + ${P4}, <i>n</i>π + ${P2}) with the right endpoint permanently open, because tan is undefined there. And for a combination such as <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i>, if the bound you are asked to beat equals ${ROOT} exactly, the “inequality” has no interior at all: the solution set is the discrete family of points where the maximum is attained. Both of these are examined deliberately.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Trigonometric inequality',
        html: 'An inequality in which the unknown appears inside a trigonometric function. Its solution set is usually a union of intervals, described in general form using an integer <i>n</i> ∈ ℤ.',
      },
      {
        t: 'p',
        html: 'Throughout, <i>n</i> ∈ ℤ. In each master result the reference angle is chosen from the principal range of the relevant inverse function, which is what makes the answer unique.',
      },
      {
        t: 'p',
        html: `<b>(A) The four master inequalities for sine and cosine.</b> Let −1 < <i>k</i> < 1.<br>Write <i>k</i> = sin <i>α</i> with <i>α</i> ∈ [−${P2}, ${P2}] (that is, <i>α</i> = sin<sup>−1</sup> <i>k</i>). Then`,
      },
      {
        t: 'formula',
        kicker: 'Master inequalities for sine',
        main: 'sin <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (2<i>n</i>π + <i>α</i>, 2<i>n</i>π + π − <i>α</i>)<br>sin <i>x</i> < <i>k</i> ⟺ <i>x</i> ∈ (2<i>n</i>π + π − <i>α</i>, 2<i>n</i>π + 2π + <i>α</i>)',
        legend: [
          '<i>k</i> = the bound, −1 < <i>k</i> < 1',
          '<i>α</i> = the reference angle, sin<sup>−1</sup> <i>k</i>',
          '<i>x</i> = the unknown angle',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Write <i>k</i> = cos <i>β</i> with <i>β</i> ∈ [0, π] (that is, <i>β</i> = cos<sup>−1</sup> <i>k</i>). Then',
      },
      {
        t: 'formula',
        kicker: 'Master inequalities for cosine',
        main: 'cos <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (2<i>n</i>π − <i>β</i>, 2<i>n</i>π + <i>β</i>)<br>cos <i>x</i> < <i>k</i> ⟺ <i>x</i> ∈ (2<i>n</i>π + <i>β</i>, 2<i>n</i>π + 2π − <i>β</i>)',
        legend: [
          '<i>k</i> = the bound, −1 < <i>k</i> < 1',
          '<i>β</i> = the reference angle, cos<sup>−1</sup> <i>k</i>',
          '<i>x</i> = the unknown angle',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• For ≥ and ≤, close the intervals; the endpoints are genuine solutions.<br>• The sine bands have length π − 2<i>α</i> and π + 2<i>α</i> respectively; the two lengths add to 2π, which is the arithmetic check that you have not mis-copied a bound.<br>• If <i>k</i> ≥ 1 then sin <i>x</i> > <i>k</i> and cos <i>x</i> > <i>k</i> are impossible; if <i>k</i> < −1 they are satisfied by every real <i>x</i>. Test the boundary cases before applying any formula.',
      },
      {
        t: 'p',
        html: `<b>(B) Tangent and cotangent.</b> Let <i>k</i> ∈ ℝ, and write <i>k</i> = tan <i>γ</i> with <i>γ</i> ∈ (−${P2}, ${P2}).`,
      },
      {
        t: 'formula',
        kicker: 'Tangent inequalities',
        main: `tan <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (<i>n</i>π + <i>γ</i>, <i>n</i>π + ${P2})<br>tan <i>x</i> < <i>k</i> ⟺ <i>x</i> ∈ (<i>n</i>π − ${P2}, <i>n</i>π + <i>γ</i>)`,
        legend: [
          '<i>k</i> = the bound (any real number)',
          '<i>γ</i> = the reference angle, tan<sup>−1</sup> <i>k</i>',
          '<i>x</i> = the unknown angle',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Period π, not 2π: the single most frequent slip in this family.<br>• The endpoint <i>n</i>π ± ${P2} is always excluded: tan is undefined there.<br>• For cot, use cot <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (<i>n</i>π, <i>n</i>π + <i>δ</i>) where <i>δ</i> = cot<sup>−1</sup> <i>k</i> ∈ (0, π), and reverse for <.`,
      },
      { t: 'p', html: '<b>(C) Absolute-value forms.</b>' },
      {
        t: 'formula',
        kicker: 'Absolute-value forms',
        main: `|sin <i>x</i>| ≥ ${H} ⟺ <i>x</i> ∈ [<i>n</i>π + ${P6}, <i>n</i>π + ${P5_6}]<br>|tan <i>x</i>| < 1 ⟺ <i>x</i> ∈ (<i>n</i>π − ${P4}, <i>n</i>π + ${P4})`,
        legend: ['<i>x</i> = the unknown angle', '<i>n</i> = any integer (<i>n</i> ∈ ℤ)'],
        note: null,
      },
      {
        t: 'p',
        html: '• Both have period π, because |sin| and |tan| do. Solving them with period 2π gives a correct but redundant answer; solving them with the wrong reference angle does not.',
      },
      {
        t: 'p',
        html: '<b>(D) Reduction targets.</b> Every examinable inequality is pushed into one of three shapes.',
      },
      {
        t: 'table',
        title: null,
        head: ['Shape of the given inequality', 'Reduce by', 'Land on'],
        rows: [
          [
            `Quadratic/cubic in one function, e.g. 4 ${S2} − 8 sin <i>x</i> + 3 < 0`,
            'substitute <i>t</i> = sin <i>x</i>, factor, sign scheme',
            'sin <i>x</i> > <i>k</i> or sin <i>x</i> < <i>k</i>',
          ],
          [
            'Mixed sin<sup>2</sup>, sin <i>x</i> cos <i>x</i>, cos<sup>2</sup>',
            `divide by ${C2} (noting cos <i>x</i> ≠ 0), or use double angle`,
            'tan <i>x</i> band, or cos 2<i>x</i>/sin 2<i>x</i> band',
          ],
          [
            '<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> ≷ <i>c</i>',
            `amplitude form <i>R</i> cos(<i>x</i> − <i>α</i>), <i>R</i> = ${ROOT}`,
            `cos(<i>x</i> − <i>α</i>) ≷ ${fr('<i>c</i>', '<i>R</i>')}`,
          ],
        ],
      },
      {
        t: 'p',
        html: '• In the third row, if |<i>c</i>| > <i>R</i> the inequality is either impossible or universally true; if |<i>c</i>| = <i>R</i> the solution set degenerates: it is no solution, just those isolated points, every real <i>x</i> except those points, or every real <i>x</i>, depending on the inequality sign (see Procedure B, Step 3). Check |<i>c</i>| against <i>R</i> first.',
      },
      {
        t: 'p',
        html: `<b>(E) The degenerate case (examined, and usually missed).</b> For all real <i>x</i>, |<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i>| ≤ ${ROOT}. Hence`,
      },
      {
        t: 'formula',
        kicker: 'The degenerate case',
        main: `|<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i>| ≥ ${ROOT} ⟺ <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = ±${ROOT}`,
        legend: [
          '<i>a</i> = the coefficient of cos <i>x</i>',
          '<i>b</i> = the coefficient of sin <i>x</i>',
          '<i>x</i> = the unknown angle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `an equation, whose solution is the discrete family <i>x</i> = <i>n</i>π + <i>α</i> where tan <i>α</i> = ${fr('<i>b</i>', '<i>a</i>')} is chosen so that <i>a</i> = <i>R</i> cos <i>α</i>, <i>b</i> = <i>R</i> sin <i>α</i>.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: the general solution set of sin <i>x</i> > <i>k</i></b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Let <i>α</i> = sin<sup>−1</sup> <i>k</i> ∈ [−${P2}, ${P2}], so that sin <i>α</i> = <i>k</i>. <b>Reason:</b> fixing <i>α</i> in the principal range makes the reference angle unique, which is what lets a single formula describe the whole set.`,
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Work on one full period, and choose the period [<i>α</i>, <i>α</i> + 2π) rather than [0, 2π). <b>Reason:</b> any interval of length 2π is a period, and this one starts exactly at the left end of the solution band, so the band is not split across the two ends of the window: the choice that removes all the case work. (A window such as [0, 2π) would split the band whenever <i>α</i> < 0.)',
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> On that interval sin <i>x</i> = <i>k</i> exactly twice: once at <i>x</i> = <i>α</i> and once at <i>x</i> = π − <i>α</i>. <b>Reason:</b> these are the two principal solutions of sin <i>x</i> = sin <i>α</i> (Topic 06’s Solution-set reference and root-validity check part, item (B)), and no third solution can lie in a single period. Because |<i>k</i>| < 1 forces −${P2} < <i>α</i> < ${P2}, the two crossings are in the order <i>α</i> < π − <i>α</i> < <i>α</i> + 2π, so both lie inside the window.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Between the two crossings the sine curve rises to its maximum +1 at <i>x</i> = ${P2}, which exceeds <i>k</i>; on the rest of the window, from π − <i>α</i> to <i>α</i> + 2π, it falls to its minimum −1 at <i>x</i> = ${P3_2} and returns, staying below <i>k</i>. <b>Reason:</b> sine is continuous, so its sign relative to the line <i>y</i> = <i>k</i> can change only at a crossing; testing one interior point per stretch settles the whole stretch.`,
      },
      {
        t: 'p',
        html: '<b>Step 5.</b> Therefore, on this period, sin <i>x</i> > <i>k</i> ⟺ <i>α</i> < <i>x</i> < π − <i>α</i>. Adding 2<i>n</i>π gives<br><i>x</i> ∈ (2<i>n</i>π + <i>α</i>, 2<i>n</i>π + π − <i>α</i>), <i>n</i> ∈ ℤ.<br><b>Reason:</b> sin(<i>x</i> + 2<i>n</i>π) = sin <i>x</i>, so the truth of the inequality is unchanged by a whole number of turns.',
      },
      {
        t: 'p',
        html: '<b>Step 6: the complement, for free.</b> Since exactly one of sin <i>x</i> > <i>k</i>, sin <i>x</i> = <i>k</i>, sin <i>x</i> < <i>k</i> holds at each <i>x</i>, the set for sin <i>x</i> < <i>k</i> is the complement of the closed band, namely (2<i>n</i>π + π − <i>α</i>, 2<i>n</i>π + 2π + <i>α</i>). <b>Reason:</b> removing a closed interval of length π − 2<i>α</i> from a period of length 2π leaves an open interval of length π + 2<i>α</i>, which is exactly what is written.',
      },
      { t: 'p', html: '<b>Derivation: why the tangent family has period π and one open end</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Let <i>γ</i> = tan<sup>−1</sup> <i>k</i> ∈ (−${P2}, ${P2}). <b>Reason:</b> every real <i>k</i> is the tangent of exactly one such <i>γ</i>, since tan is a bijection from that open interval onto ℝ.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> On the single branch (−${P2}, ${P2}), tan is strictly increasing from −∞ to +∞. <b>Reason:</b> the branch behaviour recorded in Topic 04’s Reference: periods and graph features part, item (B).`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> A strictly increasing function exceeds <i>k</i> exactly to the right of the point where it equals <i>k</i>. Hence on this branch tan <i>x</i> > <i>k</i> ⟺ <i>γ</i> < <i>x</i> < ${P2}. <b>Reason:</b> monotonicity converts an inequality on values into an inequality on inputs, with no case work.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> tan has period π (Topic 04’s Derivations and constructions part, item (b)), so translate by <i>n</i>π: <i>x</i> ∈ (<i>n</i>π + <i>γ</i>, <i>n</i>π + ${P2}). <b>Reason:</b> the branch structure repeats every π, and each branch contributes exactly one band.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> The right endpoint is excluded permanently. <b>Reason:</b> tan is not defined at <i>n</i>π + ${P2}, so that point cannot belong to any solution set, whatever the inequality sign.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: solving a trigonometric inequality in one function',
        steps: [
          `<b>Isolate a single trigonometric function.</b> Use identities to remove every function but one: typically ${C2} = 1 − ${S2} to make everything a polynomial in sin <i>x</i>. <b>Why:</b> the master results of the Key formulas and definitions part apply to one function at a time.`,
          '<b>Substitute <i>t</i> for that function and record its range.</b> Write <i>t</i> = sin <i>x</i> with <i>t</i> ∈ [−1, 1], or <i>t</i> = tan <i>x</i> with <i>t</i> ∈ ℝ. <b>Why:</b> the range is a genuine constraint and will discard whole factors later.',
          '<b>Factor and run a sign scheme in <i>t</i>.</b> Mark the real roots on a number line, and mark the sign of the product on each stretch. <b>Why:</b> this is exactly the algebra of polynomial inequalities; nothing trigonometric is happening yet.',
          '<b>Discard any <i>t</i>-band that lies outside the range from Step 2.</b> <b>Why:</b> a factor such as 2 sin <i>x</i> − 3 is negative for every real <i>x</i>, so it can be replaced by the constant sign − and dropped from the case work entirely.',
          '<b>Translate each surviving <i>t</i>-band into an <i>x</i>-band</b> using the Key formulas and definitions part, item (A) or (B). Translate the endpoints one at a time and keep strict/non-strict exactly as the algebra left it. <b>Why:</b> the endpoint convention is where marks are lost, and doing it mechanically avoids thinking about it under pressure.',
          '<b>State the union over <i>n</i> ∈ ℤ, and sanity-test one interior point.</b> Pick a convenient <i>x</i> inside a claimed band and evaluate the original inequality numerically. <b>Why:</b> a single test catches a flipped inequality sign, which is otherwise invisible.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: solving a cos x + b sin x ≷ c',
        steps: [
          `Compute <i>R</i> = ${ROOT} and compare |<i>c</i>| with <i>R</i>. <b>Why:</b> this decides between “no solution”, “all real <i>x</i>”, “isolated points”, and “genuine bands” before any work.`,
          'If |<i>c</i>| > <i>R</i>: the inequality is either impossible or holds for all <i>x</i>. Decide by testing which side the whole range [−<i>R</i>, <i>R</i>] lies on. <b>Why:</b> the range of the left-hand side is [−<i>R</i>, <i>R</i>] and nothing else needs checking.',
          'If |<i>c</i>| = <i>R</i>: the inequality degenerates, and the answer depends on the sign. With <i>c</i> = <i>R</i>: ≥ <i>R</i> holds only where the maximum is attained, the discrete family <i>x</i> = <i>α</i> + 2<i>n</i>π; > <i>R</i> has no solution; ≤ <i>R</i> holds for every real <i>x</i>; < <i>R</i> holds for every real <i>x</i> except <i>x</i> = <i>α</i> + 2<i>n</i>π. With <i>c</i> = −<i>R</i> the roles reverse, and the isolated points are <i>x</i> = <i>α</i> + (2<i>n</i> + 1)π. <b>Why:</b> the Key formulas and definitions part, item (E).',
          `Otherwise write <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>R</i> cos(<i>x</i> − <i>α</i>) with cos <i>α</i> = ${fr('<i>a</i>', '<i>R</i>')}, sin <i>α</i> = ${fr('<i>b</i>', '<i>R</i>')}, so the inequality becomes cos(<i>x</i> − <i>α</i>) ≷ ${fr('<i>c</i>', '<i>R</i>')}. <b>Why:</b> Topic 05’s Identity master reference part, item (I); and note that <i>α</i> is fixed by both of cos <i>α</i> and sin <i>α</i>, not by tan <i>α</i> alone, which only determines <i>α</i> up to π.`,
          'Apply the Key formulas and definitions part, item (A), to cos(<i>x</i> − <i>α</i>), then add <i>α</i> to every endpoint. <b>Why:</b> shifting the variable shifts the bands rigidly; it changes no lengths.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Solve cos <i>x</i> ≥ −${H}, first for <i>x</i> ∈ [0, 2π] and then in general.`,
        steps: [
          `<b>Step 1: the boundary.</b> cos <i>x</i> = −${H} has principal solutions <i>x</i> = ${P2_3} and <i>x</i> = ${P4_3} (Topic 06’s Solution-set reference and root-validity check part, item (B), with reference angle <i>β</i> = cos<sup>−1</sup>(−${H}) = ${P2_3}).`,
          `<b>Step 2: test one point in each stretch.</b> The two boundary points cut [0, 2π] into three stretches.<br>• On (0, ${P2_3}): test <i>x</i> = ${P3}, cos ${P3} = ${H} ≥ −${H}. True.<br>• On (${P2_3}, ${P4_3}): test <i>x</i> = π, cos π = −1 ≥ −${H} is false.<br>• On (${P4_3}, 2π): test <i>x</i> = ${fr('5π', '3')}, cos ${fr('5π', '3')} = ${H} ≥ −${H}. True.`,
          `<b>Step 3: assemble.</b> The inequality is non-strict, so both boundary points are included:<br><i>x</i> ∈ [0, ${P2_3}] ∪ [${P4_3}, 2π].`,
          `<b>Step 4: the general solution.</b> The two true stretches are the two halves of one band that straddles <i>x</i> = 0; re-centring gives −${P2_3} ≤ <i>x</i> ≤ ${P2_3}, so<br><i>x</i> ∈ [2<i>n</i>π − ${P2_3}, 2<i>n</i>π + ${P2_3}], <i>n</i> ∈ ℤ.<br>This matches the Key formulas and definitions part, item (A), directly with <i>β</i> = ${P2_3}.`,
          'Notice the shape of the answer: writing the restricted answer as two pieces and the general answer as one piece is not a contradiction. The band is one interval; the window [0, 2π] happens to cut it in two.',
        ],
        ans: `On [0, 2π]: [0, ${P2_3}] ∪ [${P4_3}, 2π]; in general [2<i>n</i>π − ${P2_3}, 2<i>n</i>π + ${P2_3}].`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve 4 ${S2} − 8 sin <i>x</i> + 3 < 0.`,
        steps: [
          '<b>Step 1: substitute.</b> Put <i>t</i> = sin <i>x</i>, with the range constraint <i>t</i> ∈ [−1, 1]. The inequality reads 4<i>t</i><sup>2</sup> − 8<i>t</i> + 3 < 0.',
          `<b>Step 2: factor.</b> 4<i>t</i><sup>2</sup> − 8<i>t</i> + 3 = (2<i>t</i> − 1)(2<i>t</i> − 3), so the roots are <i>t</i> = ${H} and <i>t</i> = ${T3_2}, and the product must be negative:<br>(2<i>t</i> − 1)(2<i>t</i> − 3) < 0 ⟺ ${H} < <i>t</i> < ${T3_2}.`,
          `<b>Step 3: apply the range constraint.</b> Since <i>t</i> = sin <i>x</i> ≤ 1 < ${T3_2}, the factor 2<i>t</i> − 3 is negative for every real <i>x</i>. So the product is negative precisely when 2<i>t</i> − 1 > 0, i.e. sin <i>x</i> > ${H}. The upper bound <i>t</i> < ${T3_2} is automatic and carries no information.`,
          `<b>Step 4: translate.</b> With <i>α</i> = sin<sup>−1</sup> ${H} = ${P6}, the Key formulas and definitions part, item (A), gives<br><i>x</i> ∈ (2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P5_6}), <i>n</i> ∈ ℤ.`,
          `<b>Step 5: test.</b> Take <i>x</i> = ${P2} (inside the band): 4(1) − 8(1) + 3 = −1 < 0. True. Take <i>x</i> = 0 (outside): 0 − 0 + 3 = 3 ≮ 0. Correctly excluded.`,
          `The whole difficulty was Step 3. A student who solves ${H} < sin <i>x</i> < ${T3_2} as a two-sided condition and then hunts for the <i>x</i> satisfying sin <i>x</i> < ${T3_2} has not made an error, but has wasted two minutes; a student who reverses the factor signs gets the complement and loses the question.`,
        ],
        ans: `<i>x</i> ∈ (2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P5_6}).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'Find all <i>x</i> ∈ [0, 4π] satisfying |√3 cos <i>x</i> − sin <i>x</i>| ≥ 2.',
        steps: [
          '<b>The trap.</b> The eye sees ≥, the hand reaches for a band, and the pen writes something of the form “<i>x</i> lies between two angles”. Every such answer is wrong, and it is wrong for a reason no amount of care about endpoints will fix.',
          '<b>Why.</b> Compute the amplitude first, as Procedure B insists. Here <i>a</i> = √3, <i>b</i> = −1, so<br><i>R</i> = √((√3)<sup>2</sup> + (−1)<sup>2</sup>) = √4 = 2.<br>The maximum of |√3 cos <i>x</i> − sin <i>x</i>| over all real <i>x</i> is 2. The inequality therefore does not ask for the region where the expression is large; it asks for the instants where it is at its absolute extreme. <b>The inequality has collapsed into an equation.</b>',
          `<b>The correct work.</b><br><b>Step 1: amplitude form.</b> With √3 = 2 cos ${P6} and −1 = −2 sin ${P6},<br>√3 cos <i>x</i> − sin <i>x</i> = 2(cos ${P6} cos <i>x</i> − sin ${P6} sin <i>x</i>) = 2 cos(<i>x</i> + ${P6}).`,
          `<b>Step 2: impose the condition.</b> |2 cos(<i>x</i> + ${P6})| ≥ 2 forces |cos(<i>x</i> + ${P6})| = 1, hence <i>x</i> + ${P6} = <i>n</i>π, i.e.<br><i>x</i> = <i>n</i>π − ${P6}, <i>n</i> ∈ ℤ.`,
          `<b>Step 3: restrict to [0, 4π].</b> Taking <i>n</i> = 1, 2, 3, 4:<br><i>x</i> = ${P5_6}, ${fr('11π', '6')}, ${fr('17π', '6')}, ${fr('23π', '6')}.<br>(<i>n</i> = 0 gives −${P6} < 0; <i>n</i> = 5 gives ${fr('29π', '6')} > 4π.)`,
          `<b>Step 4: verify.</b> At <i>x</i> = ${P5_6}: √3 cos ${P5_6} − sin ${P5_6} = √3(−${fr('√3', '2')}) − ${H} = −${T3_2} − ${H} = −2, and |−2| = 2 ≥ 2. Correct. The four values alternate between −2 and +2.`,
          `<b>Seductive wrong answer:</b> any interval answer at all, and in particular “${P5_6} ≤ <i>x</i> ≤ ${fr('11π', '6')}”, which comes from treating the two smallest solutions as the ends of a band. The band contains <i>x</i> = ${P4_3}, where the expression equals √3(−${H}) − (−${fr('√3', '2')}) = 0: as far from ±2 as it is possible to get. One substitution kills the wrong answer, which is why Procedure B puts the |<i>c</i>|-versus-<i>R</i> comparison at Step 1 and not at the end.`,
        ],
        ans: `Exactly four solutions: <i>x</i> = ${P5_6}, ${fr('11π', '6')}, ${fr('17π', '6')}, ${fr('23π', '6')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Solve tan<sup>3</sup> <i>x</i> + 3 > 3 tan <i>x</i> + tan<sup>2</sup> <i>x</i>.',
        steps: [
          '<b>Step 1: collect and factor.</b> Move everything to the left:<br>tan<sup>3</sup> <i>x</i> − tan<sup>2</sup> <i>x</i> − 3 tan <i>x</i> + 3 > 0.<br>Group in pairs: tan<sup>2</sup> <i>x</i> (tan <i>x</i> − 1) − 3(tan <i>x</i> − 1) > 0, so<br>(tan <i>x</i> − 1)(tan<sup>2</sup> <i>x</i> − 3) > 0 ⟹ (tan <i>x</i> + √3)(tan <i>x</i> − 1)(tan <i>x</i> − √3) > 0.',
          '<b>Step 2: sign scheme in <i>y</i> = tan <i>x</i>.</b> The three roots, in increasing order, are −√3 < 1 < √3. A cubic with positive leading coefficient and three simple real roots is negative, positive, negative, positive across the four stretches:<br><i>y</i> and sign of product:<br>• (−∞, −√3): −<br>• (−√3, 1): +<br>• (1, √3): −<br>• (√3, ∞): +<br>So the condition is −√3 < tan <i>x</i> < 1 <b>or</b> tan <i>x</i> > √3. Note that <i>y</i> ranges over all of ℝ here, so no band is discarded: the contrast with the second worked example is deliberate.',
          `<b>Step 3: translate each band.</b> Work inside one branch (−${P2}, ${P2}), where tan increases strictly:<br>• −√3 < tan <i>x</i> < 1 ⟺ −${P3} < <i>x</i> < ${P4}.<br>• tan <i>x</i> > √3 ⟺ ${P3} < <i>x</i> < ${P2}.`,
          `<b>Step 4: add the period.</b> Both bands repeat every π:<br><i>x</i> ∈ (<i>n</i>π − ${P3}, <i>n</i>π + ${P4}) ∪ (<i>n</i>π + ${P3}, <i>n</i>π + ${P2}), <i>n</i> ∈ ℤ.`,
          `<b>Step 5: verify at three points.</b> At <i>x</i> = 0: tan <i>x</i> = 0, and 0 + 3 > 0 + 0 is true, and 0 lies in the first band. Just to the right of <i>x</i> = ${P4}, say where tan <i>x</i> = 1.2: 1.728 + 3 = 4.728 versus 3.6 + 1.44 = 5.04: false, and indeed tan <i>x</i> = 1.2 lies in the excluded stretch (1, √3). At tan <i>x</i> = 2: 8 + 3 = 11 > 6 + 4 = 10: true, and 2 > √3. All three agree.`,
          `<b>What made this Advanced.</b> Nothing in the trigonometry. The examiner is testing whether you will (a) recognise a factorable cubic rather than reaching for a substitution, (b) run a sign scheme correctly on three roots instead of two, and (c) translate two disjoint <i>y</i>-bands into <i>x</i>-bands with the correct period π and the correct open endpoint at ${P2}. Each of the three is elementary; doing all three without a slip is not.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve sin <i>x</i> ≤ −${H}, giving the general solution.`,
            a: `<i>x</i> ∈ [2<i>n</i>π + ${fr('7π', '6')}, 2<i>n</i>π + ${fr('11π', '6')}].`,
          },
          {
            q: 'Solve 2 cos <i>x</i> ≤ √3 for <i>x</i> ∈ [−π, π].',
            a: `<i>x</i> ∈ [−π, −${P6}] ∪ [${P6}, π].`,
          },
          {
            q: `Solve 2 ${S2} − 3 sin <i>x</i> + 1 ≥ 0 for <i>x</i> ∈ [0, π]. (Read the endpoint case carefully.)`,
            a: `Factors as (2 sin <i>x</i> − 1)(sin <i>x</i> − 1) ≥ 0, so sin <i>x</i> ≤ ${H} or sin <i>x</i> ≥ 1. On [0, π] that is [0, ${P6}] ∪ {${P2}} ∪ [${P5_6}, π]: the isolated point ${P2} is a genuine part of the answer, since sin <i>x</i> ≥ 1 forces sin <i>x</i> = 1.`,
          },
          {
            q: 'Solve tan<sup>2</sup> <i>x</i> ≤ 3, giving the general solution.',
            a: `<i>x</i> ∈ [<i>n</i>π − ${P3}, <i>n</i>π + ${P3}].`,
          },
          {
            q: 'Solve cos <i>x</i> − sin <i>x</i> ≥ 1 for <i>x</i> ∈ [0, 2π].',
            a: `General solution [2<i>n</i>π − ${P2}, 2<i>n</i>π]; intersecting with [0, 2π] gives {0} ∪ [${P3_2}, 2π].`,
          },
          {
            q: 'Solve sin <i>x</i> + √3 cos <i>x</i> > 1, giving the general solution.',
            a: `sin <i>x</i> + √3 cos <i>x</i> = 2 sin(<i>x</i> + ${P3}) > 1, so sin(<i>x</i> + ${P3}) > ${H}, giving <i>x</i> ∈ (2<i>n</i>π − ${P6}, 2<i>n</i>π + ${P2}).`,
          },
          {
            q: 'Solve sin<sup>2</sup> <i>θ</i> > cos<sup>2</sup> <i>θ</i>.',
            a: `sin<sup>2</sup> <i>θ</i> − cos<sup>2</sup> <i>θ</i> > 0 ⇒ cos 2<i>θ</i> < 0 ⇒ 2<i>n</i>π + ${P2} < 2<i>θ</i> < 2<i>n</i>π + ${P3_2}, i.e. <i>θ</i> ∈ (<i>n</i>π + ${P4}, <i>n</i>π + ${fr('3π', '4')}).`,
          },
          {
            q: `Solve sin 2<i>x</i> > √2 ${S2} + (2 − √2) ${C2}.`,
            a: `Divide throughout by ${C2} (permitted, since cos <i>x</i> = 0 makes the right side √2 and the left side 0, which fails): 2 tan <i>x</i> > √2 tan<sup>2</sup> <i>x</i> + 2 − √2, i.e. (tan <i>x</i> − 1)(tan <i>x</i> − (√2 − 1)) < 0, so √2 − 1 < tan <i>x</i> < 1 and <i>x</i> ∈ (<i>n</i>π + ${P8}, <i>n</i>π + ${P4}) (using tan ${P8} = √2 − 1).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The solution set of cos <i>x</i> > ${H} is`,
        opts: [
          { label: `(2<i>n</i>π − ${P3}, 2<i>n</i>π + ${P3})`, nudge: null },
          {
            label: `(2<i>n</i>π + ${P3}, 2<i>n</i>π + ${fr('5π', '3')})`,
            nudge: `<b>(B)</b> is the solution set of cos <i>x</i> < ${H}: the inequality read backwards. Test <i>x</i> = 0: cos 0 = 1 > ${H}, and 0 is not in <b>(B)</b>. One substitution refutes it.`,
          },
          {
            label: `(<i>n</i>π − ${P3}, <i>n</i>π + ${P3})`,
            nudge: '<b>(C)</b> uses period π instead of 2π. Test <i>x</i> = π: it lies in <b>(C)</b> with <i>n</i> = 1, but cos π = −1. Cosine’s period is 2π; <i>n</i>π belongs to functions of period π, such as tan, cot, |cos <i>x</i>| and cos<sup>2</sup> <i>x</i>.',
          },
          {
            label: `(2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P5_6})`,
            nudge: `<b>(D)</b> is the sine answer for sin <i>x</i> > ${H}, imported wholesale. The tell is the asymmetry: cosine bands are symmetric about 2<i>n</i>π, sine bands are not.`,
          },
        ],
        correct: 0,
        solution: `With <i>β</i> = cos<sup>−1</sup> ${H} = ${P3}, the Key formulas and definitions part, item (A), gives (2<i>n</i>π − <i>β</i>, 2<i>n</i>π + <i>β</i>).`,
      },
      {
        t: 'mcq',
        q: 'The number of <i>x</i> ∈ [0, 4π] with |√3 cos <i>x</i> − sin <i>x</i>| ≥ 2 is',
        opts: [
          {
            label: '0',
            nudge: '<b>(A)</b> comes from reasoning “the maximum is 2, so the strict inequality fails, so there is nothing”: correct for >, wrong for ≥. Read the sign.',
          },
          {
            label: '2',
            nudge: '<b>(B)</b> counts only one period, [0, 2π], and forgets that the window is twice that long.',
          },
          { label: '4', nudge: null },
          {
            label: 'infinitely many',
            nudge: '<b>(D)</b> is the answer a student writes after concluding the solution set is an interval. It is the third worked example’s trap in multiple-choice clothing.',
          },
        ],
        correct: 2,
        solution: `The amplitude is exactly 2, so the condition forces equality and gives <i>x</i> = <i>n</i>π − ${P6}; four such values lie in [0, 4π].`,
      },
      {
        t: 'mcq',
        q: `4 ${S2} − 8 sin <i>x</i> + 3 < 0 is equivalent to`,
        opts: [
          {
            label: `sin <i>x</i> < ${H}`,
            nudge: '<b>(A)</b> flips the sign of the surviving factor: the single most common slip once the always-negative factor has been spotted.',
          },
          { label: `sin <i>x</i> > ${H}`, nudge: null },
          {
            label: `sin <i>x</i> < ${T3_2}`,
            nudge: `<b>(C)</b> keeps only the upper bound sin <i>x</i> < ${T3_2} and drops the lower bound sin <i>x</i> > ${H}. Since sin <i>x</i> ≤ 1 < ${T3_2}, it holds for every real <i>x</i>, so it cannot be equivalent (at <i>x</i> = 0 the given inequality fails but <b>(C)</b> holds). Choosing it signals that the lower bound was lost along the way.`,
          },
          {
            label: `sin <i>x</i> > ${T3_2}`,
            nudge: '<b>(D)</b> is impossible for every real <i>x</i>, since |sin <i>x</i>| ≤ 1. It is picked by students who take the outer stretch of the sign scheme without checking the range.',
          },
        ],
        correct: 1,
        solution: '(2 sin <i>x</i> − 1)(2 sin <i>x</i> − 3) < 0, and 2 sin <i>x</i> − 3 < 0 always, so the first factor must be positive.',
      },
      {
        t: 'mcq',
        q: `The general solution of sin <i>x</i> > ${H} is`,
        opts: [
          {
            label: `<i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup>${P6}`,
            nudge: `<b>(A)</b> is the general solution of the equation sin <i>x</i> = ${H} (Topic 06’s Solution-set reference and root-validity check part, item (B)). It is a set of isolated points, and an inequality can never have that as its full answer unless the bound is extreme. This is the structural error the topic exists to prevent.`,
          },
          { label: `<i>x</i> ∈ (2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P5_6})`, nudge: null },
          {
            label: `<i>x</i> ∈ (2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P2})`,
            nudge: `<b>(C)</b> stops the band at the maximum <i>x</i> = ${P2} instead of continuing to the second crossing. Test <i>x</i> = ${P2_3}: sin <i>x</i> = ${fr('√3', '2')} > ${H}, but ${P2_3} ∉ <b>(C)</b>.`,
          },
          {
            label: `<i>x</i> ∈ (<i>n</i>π + ${P6}, <i>n</i>π + ${P5_6})`,
            nudge: `<b>(D)</b> uses period π. Test <i>x</i> = π + ${P4}: it lies in <b>(D)</b> with <i>n</i> = 1, but sin <i>x</i> = −${fr('1', '√2')} < ${H}.`,
          },
        ],
        correct: 1,
        solution: `With <i>α</i> = sin<sup>−1</sup> ${H} = ${P6}, the Key formulas and definitions part, item (A), gives (2<i>n</i>π + <i>α</i>, 2<i>n</i>π + π − <i>α</i>) = (2<i>n</i>π + ${P6}, 2<i>n</i>π + ${P5_6}).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Answering an inequality with an equation’s solution family.</b> Writing <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i> where an interval is required. <b>Correction:</b> the answer to an inequality is usually a union of intervals; if your answer has no intervals in it, either you have mis-read the question or the bound is extreme (the Key formulas and definitions part, item (E)), and you should say so explicitly.',
          '<b>Using period 2π for tan or cot, or period π for sin or cos.</b> <b>Correction:</b> the band repeats with the fundamental period of the function, which is π for tan, cot, |sin|, |cos|, sin<sup>2</sup>, cos<sup>2</sup>, and 2π for sin, cos, sec and cosec themselves.',
          '<b>Forcing a sine band into the 2<i>n</i>π ± <i>α</i> shape.</b> Only cosine bands are symmetric about 2<i>n</i>π. <b>Correction:</b> for sine, the band runs from <i>α</i> to π − <i>α</i>, and those two are not negatives of each other.',
          `<b>Not checking |<i>c</i>| against <i>R</i> in <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> ≷ <i>c</i>.</b> <b>Correction:</b> compute <i>R</i> = ${ROOT} as the first line, always. It decides whether you are about to write an interval, a point set, “no solution”, or “all real <i>x</i>”.`,
          '<b>Keeping a factor that cannot change sign.</b> In (2 sin <i>x</i> − 1)(2 sin <i>x</i> − 3) < 0, the second factor is negative for every <i>x</i>. <b>Correction:</b> before running the sign scheme, delete every factor whose sign is constant on the range of the substituted variable, and flip the inequality once for each deleted negative factor.',
          '<b>Losing an isolated solution at the boundary.</b> sin <i>x</i> ≥ 1 has solutions; it is just that they form a discrete set. <b>Correction:</b> when a factor gives <i>t</i> ≥ <i>t</i><sub>max</sub> or <i>t</i> ≤ <i>t</i><sub>min</sub>, the answer is the equality case, not the empty set.',
          `<b>Including an endpoint where the function is undefined.</b> tan <i>x</i> ≥ <i>k</i> never includes <i>n</i>π + ${P2}. <b>Correction:</b> the domain exclusions of Topic 02’s Definitions, domain and range part override the inequality sign, every time.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Sketch the graph and the cut line even when you intend to solve algebraically. Thirty seconds of picture tells you how many bands to expect per period, which is a strong check on the algebra.<br>• Test one interior point of every band you claim, and one point of every gap you exclude. Two substitutions cost fifteen seconds and catch a reversed inequality, which is otherwise undetectable.<br>• For anything homogeneous of degree two in sin <i>x</i> and cos <i>x</i>, divide by ${C2} and work in tan <i>x</i>. It converts the problem into a polynomial inequality with period π and no case work, but first confirm that cos <i>x</i> = 0 is not itself a solution.<br>• The lengths of the bands for <i>f</i>(<i>x</i>) > <i>k</i> and <i>f</i>(<i>x</i>) < <i>k</i> must add to one full period. Use it as an arithmetic check on both answers at once.<br>• When an inequality asks the expression to exceed its own maximum, or to fall below its own minimum (for example <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> > ${ROOT}), the answer is “no solution”. Say it in one line rather than grinding.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Throughout', note: '<i>n</i> ∈ ℤ.' },
          {
            f: `Sine (<i>α</i> = sin<sup>−1</sup> <i>k</i> ∈ [−${P2}, ${P2}])`,
            note: 'sin <i>x</i> > <i>k</i> ⇒ (2<i>n</i>π + <i>α</i>, 2<i>n</i>π + π − <i>α</i>); sin <i>x</i> < <i>k</i> ⇒ (2<i>n</i>π + π − <i>α</i>, 2<i>n</i>π + 2π + <i>α</i>).',
          },
          {
            f: 'Cosine (<i>β</i> = cos<sup>−1</sup> <i>k</i> ∈ [0, π])',
            note: 'cos <i>x</i> > <i>k</i> ⇒ (2<i>n</i>π − <i>β</i>, 2<i>n</i>π + <i>β</i>); cos <i>x</i> < <i>k</i> ⇒ (2<i>n</i>π + <i>β</i>, 2<i>n</i>π + 2π − <i>β</i>).',
          },
          {
            f: 'Tangent (<i>γ</i> = tan<sup>−1</sup> <i>k</i>)',
            note: `tan <i>x</i> > <i>k</i> ⇒ (<i>n</i>π + <i>γ</i>, <i>n</i>π + ${P2}); tan <i>x</i> < <i>k</i> ⇒ (<i>n</i>π − ${P2}, <i>n</i>π + <i>γ</i>). Period π; right/left ends always open.`,
          },
          {
            f: 'Close the interval for ≥ and ≤',
            note: 'except at a point where the function is undefined, which is excluded regardless.',
          },
          {
            f: 'Absolute values',
            note: `|sin <i>x</i>| ≥ ${H} ⇒ [<i>n</i>π + ${P6}, <i>n</i>π + ${P5_6}]; |tan <i>x</i>| < 1 ⇒ (<i>n</i>π − ${P4}, <i>n</i>π + ${P4}).`,
          },
          {
            f: 'Polynomial in one function',
            note: 'substitute <i>t</i>, factor, sign scheme, discard bands outside the range of <i>t</i>, translate.',
          },
          { f: 'Homogeneous degree two', note: `divide by ${C2}, solve in tan <i>x</i>, period π.` },
          {
            f: '<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> ≷ <i>c</i>',
            note: `compute <i>R</i> = ${ROOT} first. |<i>c</i>| > <i>R</i> ⇒ all-or-nothing; |<i>c</i>| = <i>R</i> ⇒ isolated points (<i>x</i> = <i>α</i> + 2<i>n</i>π where the maximum <i>R</i> is attained, <i>x</i> = <i>α</i> + (2<i>n</i> + 1)π where the minimum −<i>R</i> is attained), no solution, or all real <i>x</i> (possibly minus those points), according to the sign of the inequality; |<i>c</i>| < <i>R</i> ⇒ genuine bands via cos(<i>x</i> − <i>α</i>) ≷ ${fr('<i>c</i>', '<i>R</i>')}.`,
          },
          { f: 'Check', note: 'band length for > plus band length for < equals one period.' },
          {
            f: 'Golden rule',
            note: 'find the boundary with Topic 06, then decide the side by testing one point per stretch. Never guess which side.',
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 10 · pp. 289–301 ────────────────
  {
    n: '10',
    title: 'Maximum, Minimum and Range of Trigonometric Expressions',
    kalam: 'You never search for a maximum; you rewrite the expression until its maximum is written on its face.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards ask the easy half of this: “find the maximum value of 3 sin <i>x</i> + 4 cos <i>x</i>” is a standard 1–2 marker ${T09}, and Topic 05’s Identity master reference part, item (I), already supplies the ${ROOT} rule that answers it. JEE Main asks the same question after one layer of disguise: a homogeneous quadratic in sin <i>x</i> and cos <i>x</i>, a quadratic in cos <i>x</i> alone, or a reciprocal pair such as <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i>, and it asks it reliably, roughly once a paper ${T09}. JEE Advanced combines the methods and, more importantly, tests whether you know when the amplitude rule does not apply: expressions in ${S2} and ${C2}, expressions whose variable is confined to a sub-interval, and expressions where a domain exclusion opens a hole in the range. (NEET does not test mathematics.) The whole topic is calculus-free by design; every result here is available to a Class 11 student and arrives faster than differentiation would.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>The tailor with a fixed length of cloth.</b> A tailor in Surat has a strip of cloth of fixed length and can cut it into a rectangle of any shape. He cannot make the area arbitrarily large (the perimeter constrains him), and the best he can do turns out to be a square. He never differentiates anything. He recognises that the quantity he is maximising is constrained, and finds the shape where the constraint bites hardest.',
      },
      {
        t: 'p',
        html: 'Every problem in this topic works the same way. <b>You never search for a maximum; you rewrite the expression until its maximum is written on its face.</b> There are exactly four rewritings worth knowing, and each one ends with a quantity whose range you already know cold from Topic 02:<br>• rewrite as <i>R</i> sin(angle) or <i>R</i> cos(angle), whose range is [−<i>R</i>, <i>R</i>];<br>• rewrite as a quadratic in a single bounded variable <i>t</i> = sin <i>x</i> or <i>t</i> = cos <i>x</i>, whose range you read off a parabola on [−1, 1];<br>• rewrite as a sum of a quantity and its reciprocal, whose minimum comes from AM–GM;<br>• rewrite so that the only surviving trigonometric object is sin<sup>2</sup> or cos<sup>2</sup>, whose range is [0, 1].',
      },
      {
        t: 'p',
        html: '<b>Indian-context analogy: the pressure cooker whistle.</b> The whistle lifts at one pressure and no higher; the safety valve caps it. When you write <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> = <i>R</i> sin(<i>x</i> + <i>α</i>) you have installed exactly such a cap: the bracket cannot exceed 1 no matter what <i>x</i> does, so the expression cannot exceed <i>R</i>. The rewriting is not cosmetic. It moves all the variability into a single sine, and a single sine has a valve on it.',
      },
      {
        t: 'p',
        html: `<b>The trap this topic exists to kill.</b> Students learn ${ROOT} so well that they apply it to <i>a</i> ${S2} + <i>b</i> ${C2}. That is wrong, and badly wrong. Write<br>3 ${S2} + 4 ${C2} = 3(${S2} + ${C2}) + ${C2} = 3 + ${C2},<br>whose range is [3, 4]. The amplitude rule would have claimed 5, a value the expression never comes near. <b>The rule ${ROOT} applies to a linear combination of sin <i>x</i> and cos <i>x</i> (first powers, same angle) and to nothing else.</b> The reason is structural: sin <i>x</i> and cos <i>x</i> can never be large at the same time, so their linear combination is capped at ${ROOT}, which is less than |<i>a</i>| + |<i>b</i>| whenever <i>a</i> and <i>b</i> are both non-zero; but ${S2} and ${C2} add to exactly 1, so their combination is trapped between <i>a</i> and <i>b</i>, not around ${ROOT}.`,
      },
      {
        t: 'p',
        html: '<b>Second idea: a bounded variable makes a parabola behave.</b> For cos 2<i>x</i> + cos <i>x</i>, substitute <i>t</i> = cos <i>x</i> and the expression becomes 2<i>t</i><sup>2</sup> + <i>t</i> − 1, a parabola. On the whole real line this parabola (it opens upwards) has no maximum; on <i>t</i> ∈ [−1, 1] it has both a maximum and a minimum, and they sit either at the vertex or at an endpoint. Checking three candidates (the two endpoints and the vertex, if the vertex lies inside) is the entire method.',
      },
      {
        t: 'p',
        html: `<b>Where it breaks down.</b> Two ways, both examined. First, if the argument is restricted, say <i>x</i> ∈ [0, ${P4}], the amplitude may simply not be attainable and the extremes move to the endpoints of the restriction. Second, if the expression is undefined somewhere, as ${RATIO} is at <i>x</i> = <i>n</i>π, the range can be a half-open interval with a value missing at one end. Neither is exotic; both are how JEE Advanced turns a Main-level question into an Advanced one.`,
      },
      { t: 'fig', id: 'm11-03-10-d1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'Throughout, <i>x</i> ranges over all real numbers unless a restriction is stated, and <i>a</i>, <i>b</i>, <i>c</i> are real constants.',
      },
      {
        t: 'p',
        html: '<b>(A) Linear combination: the anchor result</b> (Topic 05’s Identity master reference part, item (I), restated for reference):',
      },
      {
        t: 'formula',
        kicker: 'Linear combination: the anchor result',
        main: `−${ROOT} ≤ <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> ≤ ${ROOT}<br>max(<i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i>) = <i>c</i> + ${ROOT}<br>min(<i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i>) = <i>c</i> − ${ROOT}`,
        legend: [
          '<i>a</i> = the coefficient of sin <i>x</i>',
          '<i>b</i> = the coefficient of cos <i>x</i>',
          '<i>c</i> = the constant term',
          '<i>x</i> = any real angle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Requires first powers of sin <i>x</i> and cos <i>x</i>, with the same argument <i>x</i>.<br>• Both bounds are attained, because <i>x</i> − <i>α</i> sweeps all of ℝ.<br>• It extends to different-looking arguments once they are expanded: 5 cos <i>θ</i> + 3 cos(<i>θ</i> + ${P3}) becomes ${fr('13', '2')} cos <i>θ</i> − ${fr('3√3', '2')} sin <i>θ</i>, with <i>R</i> = √(${fr('169', '4')} + ${fr('27', '4')}) = 7.`,
      },
      {
        t: 'p',
        html: `<b>(B) Homogeneous quadratic: the general formula.</b> For<br><i>f</i>(<i>x</i>) = <i>a</i> ${S2} + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> ${C2},<br>use ${S2} = ${fr('1 − cos 2<i>x</i>', '2')}, ${C2} = ${fr('1 + cos 2<i>x</i>', '2')}, sin <i>x</i> cos <i>x</i> = ${fr('sin 2<i>x</i>', '2')} to get<br><i>f</i>(<i>x</i>) = ${AC2} + ${fr('<i>b</i>', '2')} sin 2<i>x</i> + ${fr('<i>c</i> − <i>a</i>', '2')} cos 2<i>x</i>,<br>so that`,
      },
      {
        t: 'formula',
        kicker: 'Homogeneous quadratic: the general formula',
        main: `<i>f</i>(<i>x</i>) ∈ [${AC2} − ${fr(HALFROOT, '2')}, ${AC2} + ${fr(HALFROOT, '2')}]`,
        legend: [
          `<i>f</i>(<i>x</i>) = the homogeneous quadratic, <i>a</i> ${S2} + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> ${C2}`,
          '<i>a</i> = the coefficient of sin<sup>2</sup> <i>x</i>',
          '<i>b</i> = the coefficient of sin <i>x</i> cos <i>x</i>',
          '<i>c</i> = the coefficient of cos<sup>2</sup> <i>x</i>',
          '<i>x</i> = any real angle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• Special case <i>b</i> = 0: the range collapses to [min(<i>a</i>, <i>c</i>), max(<i>a</i>, <i>c</i>)], which is the anti-amplitude fact from the Concept intuition part.<br>• Every bound is attained, since 2<i>x</i> also sweeps all of ℝ.',
      },
      {
        t: 'p',
        html: '<b>(C) Quadratic in a single bounded function.</b> If <i>f</i>(<i>x</i>) = <i>pt</i><sup>2</sup> + <i>qt</i> + <i>r</i> with <i>t</i> = sin <i>x</i> or <i>t</i> = cos <i>x</i>, so <i>t</i> ∈ [−1, 1]:',
      },
      {
        t: 'formula',
        kicker: 'Quadratic in a single bounded function',
        main: `extremes of <i>f</i> occur at <i>t</i> = −1, <i>t</i> = +1, or <i>t</i> = ${VERTEX} (the last only if ${VERTEX} ∈ [−1, 1])`,
        legend: [
          '<i>f</i> = the expression, <i>pt</i><sup>2</sup> + <i>qt</i> + <i>r</i>',
          '<i>t</i> = the bounded variable, sin <i>x</i> or cos <i>x</i>',
          '<i>p</i> = the coefficient of <i>t</i><sup>2</sup>',
          '<i>q</i> = the coefficient of <i>t</i>',
          '<i>r</i> = the constant term',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• Evaluate at all admissible candidates and take the largest and smallest. There is never anything else to check, because a parabola is monotone on either side of its vertex.<br>• If <i>t</i> = tan <i>x</i> the range is ℝ and no endpoint candidates exist; only the vertex matters, and only for the appropriate one of max/min.',
      },
      {
        t: 'p',
        html: `<b>(D) Reciprocal pairs: AM–GM without calculus.</b> For real <i>u</i> > 0 and <i>k</i> > 0, <i>u</i> + ${fr('<i>k</i>', '<i>u</i>')} ≥ 2√<i>k</i>, with equality when <i>u</i> = √<i>k</i>. The two trigonometric consequences that appear constantly:`,
      },
      {
        t: 'formula',
        kicker: 'Reciprocal pairs: AM–GM without calculus',
        main: 'tan<sup>2</sup> <i>x</i> + cot<sup>2</sup> <i>x</i> ≥ 2<br><i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> ≥ (<i>a</i> + <i>b</i>)<sup>2</sup> (<i>a</i>, <i>b</i> > 0)',
        legend: [
          '<i>a</i> = a positive constant',
          '<i>b</i> = a positive constant',
          '<i>x</i> = an angle where the functions are defined',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Proof of the second: <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i> ≥ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + 2<i>ab</i> = (<i>a</i> + <i>b</i>)<sup>2</sup>, with equality when <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> = <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i>, i.e. tan<sup>2</sup> <i>x</i> = ${fr('<i>b</i>', '<i>a</i>')}: always achievable.<br>• Setting <i>a</i> = <i>b</i> = 1 gives sec<sup>2</sup> <i>x</i> + csc<sup>2</sup> <i>x</i> ≥ 4, equivalently ${fr('4', 'sin<sup>2</sup> 2<i>x</i>')} ≥ 4.<br>• These have a minimum but <b>no maximum</b>: as <i>x</i> → 0 the expression is unbounded above.`,
      },
      {
        t: 'p',
        html: '<b>(E) Substitution <i>t</i> = sin <i>x</i> + cos <i>x</i>.</b> Since <i>t</i><sup>2</sup> = 1 + 2 sin <i>x</i> cos <i>x</i>,',
      },
      {
        t: 'formula',
        kicker: 'Substitution <i>t</i> = sin <i>x</i> + cos <i>x</i>',
        main: `sin <i>x</i> cos <i>x</i> = ${fr('<i>t</i><sup>2</sup> − 1', '2')}, <i>t</i> ∈ [−√2, √2]`,
        legend: ['<i>t</i> = the sum sin <i>x</i> + cos <i>x</i>', '<i>x</i> = any real angle'],
        note: null,
      },
      {
        t: 'p',
        html: `• This converts any symmetric polynomial in sin <i>x</i> and cos <i>x</i> into a polynomial in the single bounded variable <i>t</i>, at which point the Key formulas and definitions part, item (C), finishes the job.<br>• The companion substitution <i>u</i> = sin <i>x</i> − cos <i>x</i> ∈ [−√2, √2] with sin <i>x</i> cos <i>x</i> = ${fr('1 − <i>u</i><sup>2</sup>', '2')} handles antisymmetric cases.`,
      },
      { t: 'p', html: '<b>(F) The two ways the range is not a closed interval.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Cause', 'Example', 'Range'],
        rows: [
          [
            'Domain exclusion removes an attained value',
            `${RATIO} = 3 − 4 ${S2}, <i>x</i> ≠ <i>n</i>π`,
            `[−1, 3), since ${S2} ∈ (0, 1]`,
          ],
          [
            'Argument restricted to a sub-interval',
            `sin <i>x</i> + cos <i>x</i> on [0, ${P6}]`,
            `[1, ${fr('1 + √3', '2')}], not [−√2, √2]`,
          ],
        ],
      },
      {
        t: 'p',
        html: `• In the first row the value 3 would need sin <i>x</i> = 0, which the domain forbids, so 3 is a supremum, not a maximum, and the bracket is round.<br>• In the second row the amplitude √2 is attained only at <i>x</i> = ${P4} + 2<i>n</i>π, none of them in the permitted window; the extremes migrate to the endpoints.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: the range of a homogeneous quadratic in sin <i>x</i> and cos <i>x</i></b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Start from <i>f</i>(<i>x</i>) = <i>a</i> ${S2} + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> ${C2}. <b>Reason:</b> this is the general degree-two homogeneous form; any such expression, however written, reduces to it.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Replace each degree-two object by its double-angle equivalent, using the power-reduction identities of Topic 05’s Identity master reference part, item (D), and the double-angle formula of its item (C):<br>${S2} = ${fr('1 − cos 2<i>x</i>', '2')},<br>${C2} = ${fr('1 + cos 2<i>x</i>', '2')},<br>sin <i>x</i> cos <i>x</i> = ${fr('sin 2<i>x</i>', '2')}.<br><b>Reason:</b> every term is degree two, so every term becomes a constant plus a first-power term in the angle 2<i>x</i>, which is precisely the shape the Key formulas and definitions part, item (A), can handle.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Substitute and collect:<br><i>f</i>(<i>x</i>) = ${fr('<i>a</i>(1 − cos 2<i>x</i>)', '2')} + ${fr('<i>b</i> sin 2<i>x</i>', '2')} + ${fr('<i>c</i>(1 + cos 2<i>x</i>)', '2')} = ${AC2} + ${fr('<i>b</i>', '2')} sin 2<i>x</i> + ${fr('<i>c</i> − <i>a</i>', '2')} cos 2<i>x</i>.<br><b>Reason:</b> pure algebra; the constant pieces gather and the cos 2<i>x</i> pieces combine with coefficient ${fr('<i>c</i> − <i>a</i>', '2')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Apply the amplitude rule to the two first-power terms, with angle 2<i>x</i>:<br><i>R</i> = √((${fr('<i>b</i>', '2')})<sup>2</sup> + (${fr('<i>c</i> − <i>a</i>', '2')})<sup>2</sup>) = ${H}${HALFROOT}.<br><b>Reason:</b> (<i>c</i> − <i>a</i>)<sup>2</sup> = (<i>a</i> − <i>c</i>)<sup>2</sup>, so the formula is symmetric in <i>a</i> and <i>c</i> as it must be.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Conclude <i>f</i>(<i>x</i>) ∈ [${AC2} − <i>R</i>, ${AC2} + <i>R</i>], both ends attained. <b>Reason:</b> 2<i>x</i> ranges over all reals as <i>x</i> does, so the inner sine reaches ±1.`,
      },
      {
        t: 'p',
        html: `<b>Step 6: the sanity check.</b> Put <i>b</i> = 0 and <i>a</i> = <i>c</i>. Then <i>R</i> = 0 and the range is the single point <i>a</i>. Indeed <i>a</i> ${S2} + <i>a</i> ${C2} = <i>a</i>. <b>Reason:</b> a formula that survives its own degenerate case is far more likely to have been derived correctly.`,
      },
      {
        t: 'p',
        html: '<b>Derivation: <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> ≥ (<i>a</i> + <i>b</i>)<sup>2</sup> for <i>a</i>, <i>b</i> > 0</b>',
      },
      {
        t: 'p',
        html: '<b>Step 1.</b> Write sec<sup>2</sup> <i>x</i> = 1 + tan<sup>2</sup> <i>x</i> and csc<sup>2</sup> <i>x</i> = 1 + cot<sup>2</sup> <i>x</i>. <b>Reason:</b> the Pythagorean identities of Topic 02’s Definitions, domain and range part, which convert the expression into a constant plus a reciprocal pair.',
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Expand: <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i>. <b>Reason:</b> the two constants come out and the two variable terms are reciprocal in tan<sup>2</sup> <i>x</i>, since cot<sup>2</sup> <i>x</i> = ${fr('1', 'tan<sup>2</sup> <i>x</i>')}.`,
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Apply AM–GM to the two positive variable terms:<br><i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i> ≥ 2√(<i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> · <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i>) = 2<i>ab</i>.<br><b>Reason:</b> tan<sup>2</sup> <i>x</i> · cot<sup>2</sup> <i>x</i> = 1, so the geometric mean is the constant <i>ab</i>: the whole point of pairing a quantity with its reciprocal.',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> Add: <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + 2<i>ab</i> = (<i>a</i> + <i>b</i>)<sup>2</sup>. <b>Reason:</b> the algebraic identity, which is why the answer is a perfect square and not something ugly.',
      },
      {
        t: 'p',
        html: `<b>Step 5: confirm attainability.</b> Equality in AM–GM needs <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> = <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i>, i.e. tan<sup>4</sup> <i>x</i> = ${fr('<i>b</i><sup>2</sup>', '<i>a</i><sup>2</sup>')}, i.e. tan<sup>2</sup> <i>x</i> = ${fr('<i>b</i>', '<i>a</i>')}. Since ${fr('<i>b</i>', '<i>a</i>')} > 0 and tan<sup>2</sup> <i>x</i> takes every positive value, such an <i>x</i> exists. <b>Reason:</b> a bound that cannot be reached is not a minimum, and examiners award the mark for saying why it can.`,
      },
      {
        t: 'p',
        html: '<b>Step 6: note the asymmetry.</b> There is no maximum: as <i>x</i> → 0<sup>+</sup>, csc<sup>2</sup> <i>x</i> → ∞. <b>Reason:</b> the expression is unbounded above, so “find the maximum and minimum” would be a badly posed question here: only the minimum exists.',
      },
      {
        t: 'proc',
        title: 'Procedure A: finding the range of a trigonometric expression',
        steps: [
          '<b>Classify the expression by degree and by how many distinct angles appear.</b> <b>Why:</b> the method is determined entirely by this. Degree one in one angle goes to the Key formulas and definitions part, item (A); degree two homogeneous goes to item (B); a quadratic in a single function goes to item (C).',
          `<b>Reduce every angle to a common one.</b> Expand cos(<i>θ</i> + ${P3}) and similar before doing anything else. <b>Why:</b> the amplitude rule is false if the two terms carry different arguments.`,
          '<b>Reduce to a single trigonometric object.</b> After Step 2 you should be looking at exactly one of: <i>R</i> sin(·), a polynomial in <i>t</i> ∈ [−1, 1], or a reciprocal pair. <b>Why:</b> if two independent objects remain, you have not finished reducing and any bound you write will be too generous.',
          '<b>Read off the range of that object, then undo the arithmetic.</b> Add the constant, multiply by the coefficient, and reverse the interval if you multiplied by a negative number. <b>Why:</b> multiplying [−1, 1] by −4 gives [−4, 4], but multiplying [0, 1] by −4 gives [−4, 0]: the order flips, and it is easy to write the endpoints backwards.',
          '<b>Check attainability at both ends.</b> Solve for the <i>x</i> that achieves each bound and confirm it is in the domain and inside any stated restriction. <b>Why:</b> this is the step that turns [−1, 3] into [−1, 3), and it is the only step that distinguishes an Advanced answer from a Main one.',
          `<b>Test numerically at one or two convenient angles.</b> <b>Why:</b> substituting <i>x</i> = 0 and <i>x</i> = ${P4} takes fifteen seconds and must produce values inside your claimed range. If one does not, the range is wrong.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: extremes on a restricted interval',
        steps: [
          'Write the expression in amplitude form <i>R</i> sin(<i>x</i> + <i>α</i>) + <i>c</i> (or the cos version). <b>Why:</b> it identifies exactly where the unrestricted extremes live.',
          `Find where the unrestricted maximum and minimum occur: <i>x</i> + <i>α</i> = ${P2} + 2<i>n</i>π and <i>x</i> + <i>α</i> = −${P2} + 2<i>n</i>π. <b>Why:</b> these are the only interior candidates.`,
          'Keep only those candidate points that lie inside the permitted interval. <b>Why:</b> a maximum outside the window is irrelevant, however large.',
          'Add the two endpoints of the interval to the candidate list. <b>Why:</b> on a closed interval a continuous function attains its extremes either at a turning point or at an endpoint, and there is no third possibility.',
          'Evaluate at every surviving candidate and take the largest and smallest values. <b>Why:</b> with a finite candidate list, comparison replaces optimisation entirely.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the maximum and minimum values of 3 sin <i>x</i> + 4 cos <i>x</i> + 7.',
        steps: [
          '<b>Step 1: identify the shape.</b> First powers of sin <i>x</i> and cos <i>x</i>, same angle, plus a constant. This is exactly the Key formulas and definitions part, item (A).',
          '<b>Step 2: amplitude.</b> <i>R</i> = √(3<sup>2</sup> + 4<sup>2</sup>) = √25 = 5, so 3 sin <i>x</i> + 4 cos <i>x</i> ∈ [−5, 5].',
          '<b>Step 3: shift.</b> Adding 7 shifts the whole interval:<br>3 sin <i>x</i> + 4 cos <i>x</i> + 7 ∈ [−5 + 7, 5 + 7] = [2, 12].',
          `<b>Step 4: attainability.</b> Write 3 sin <i>x</i> + 4 cos <i>x</i> = 5 sin(<i>x</i> + <i>α</i>) with cos <i>α</i> = ${fr('3', '5')}, sin <i>α</i> = ${fr('4', '5')}. The maximum occurs when <i>x</i> + <i>α</i> = ${P2}, which has solutions; likewise the minimum. Both bounds are genuinely reached.`,
          `<b>Sanity check.</b> At <i>x</i> = 0 the value is 0 + 4 + 7 = 11, comfortably inside [2, 12]. At <i>x</i> = ${P2} it is 3 + 0 + 7 = 10. Both consistent.`,
        ],
        ans: 'Maximum = 12, minimum = 2.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the maximum and minimum values of cos<sup>2</sup> <i>θ</i> − 6 sin <i>θ</i> cos <i>θ</i> + 3 sin<sup>2</sup> <i>θ</i> + 2.',
        steps: [
          '<b>Step 1: separate the homogeneous part.</b> The constant +2 rides along untouched. The rest is homogeneous of degree two with <i>a</i> = 3 (the sin<sup>2</sup> coefficient), <i>b</i> = −6, <i>c</i> = 1.',
          `<b>Step 2: convert to the double angle.</b> Using the substitutions of the Key formulas and definitions part, item (B):<br>3 sin<sup>2</sup> <i>θ</i> − 6 sin <i>θ</i> cos <i>θ</i> + cos<sup>2</sup> <i>θ</i> = ${fr('3 + 1', '2')} + ${fr('−6', '2')} sin 2<i>θ</i> + ${fr('1 − 3', '2')} cos 2<i>θ</i> = 2 − 3 sin 2<i>θ</i> − cos 2<i>θ</i>.`,
          '<b>Step 3: amplitude of the variable part.</b> For −3 sin 2<i>θ</i> − cos 2<i>θ</i>,<br><i>R</i> = √((−3)<sup>2</sup> + (−1)<sup>2</sup>) = √10.<br>So the homogeneous part lies in [2 − √10, 2 + √10].',
          '<b>Step 4: restore the constant.</b> Adding the original +2:<br>expression ∈ [4 − √10, 4 + √10] ≈ [0.8377, 7.1623].',
          `<b>Step 5: cross-check against the general formula.</b> The Key formulas and definitions part, item (B), with <i>a</i> = 3, <i>b</i> = −6, <i>c</i> = 1 predicts centre ${AC2} = 2 and half-width ${H}√(36 + 4) = ${H}√40 = √10. Same answer, arrived at without re-deriving. Two routes, one result.`,
          `<b>Step 6: numerical spot-check.</b> At <i>θ</i> = 0 the expression is 1 − 0 + 0 + 2 = 3; at <i>θ</i> = ${P4} it is ${H} − 3 + ${T3_2} + 2 = 1. Both lie in [0.8377, 7.1623], and 1 sits close to the lower end, as it should for an angle near where the −6 sin <i>θ</i> cos <i>θ</i> term is most negative.`,
        ],
        ans: 'Maximum = 4 + √10, minimum = 4 − √10.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Find the maximum value of 3 ${S2} + 4 ${C2}.`,
        steps: [
          '<b>The trap.</b> The coefficients 3 and 4 are the coefficients of the most-drilled example in the chapter, 3 sin <i>x</i> + 4 cos <i>x</i>. The hand writes √(3<sup>2</sup> + 4<sup>2</sup>) = 5 before the eye has registered the squares. The answer 5 is not merely wrong; the expression never exceeds 4, so 5 is not even close.',
          `<b>Why the amplitude rule cannot apply.</b> That rule exists because sin <i>x</i> and cos <i>x</i> cannot both be near 1 at the same time: they trade off, and the trade-off produces ${ROOT}. But ${S2} and ${C2} do not merely trade off: they satisfy the exact constraint ${S2} + ${C2} = 1. A weighted average of two numbers that sum to one is trapped between the two weights.`,
          `<b>The correct work.</b><br><b>Step 1.</b> Write the smaller coefficient out:<br>3 ${S2} + 4 ${C2} = 3(${S2} + ${C2}) + ${C2} = 3 + ${C2}.`,
          `<b>Step 2.</b> Since ${C2} ∈ [0, 1],<br>3 + ${C2} ∈ [3, 4].`,
          `<b>Step 3: where the ends are reached.</b> The maximum 4 occurs when ${C2} = 1, i.e. <i>x</i> = <i>n</i>π; the minimum 3 when cos <i>x</i> = 0, i.e. <i>x</i> = (2<i>n</i> + 1)${P2}. Both are attained, so the range is the closed interval [3, 4].`,
          `<b>Step 4: cross-check with the Key formulas and definitions part, item (B).</b> Here <i>a</i> = 3, <i>b</i> = 0, <i>c</i> = 4: centre ${fr('3 + 4', '2')} = ${fr('7', '2')}, half-width ${H}√(0 + 1) = ${H}, giving [3, 4]. Agreed.`,
          `<b>Seductive wrong answer:</b> 5. It survives no test at all (substituting <i>x</i> = 0 gives 4, <i>x</i> = ${P2} gives 3, <i>x</i> = ${P4} gives ${fr('7', '2')}), but it is chosen anyway, because the pattern-match happens faster than the check. <b>The general rule worth carrying: for <i>a</i> ${S2} + <i>b</i> ${C2} the range is [min(<i>a</i>, <i>b</i>), max(<i>a</i>, <i>b</i>)], and the square root never appears.</b>`,
        ],
        ans: 'Maximum = 4, minimum = 3.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the minimum value of 9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i>, and state where it is attained. Then find the range of ${RATIO} and explain why it is not a closed interval.`,
        steps: [
          '<b>Part 1: the reciprocal pair.</b><br><b>Step 1.</b> Split off the constants using the Pythagorean identities:<br>9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> = 9(1 + tan<sup>2</sup> <i>x</i>) + 16(1 + cot<sup>2</sup> <i>x</i>) = 25 + 9 tan<sup>2</sup> <i>x</i> + 16 cot<sup>2</sup> <i>x</i>.',
          '<b>Step 2.</b> The two variable terms are positive (where defined) and their product is the constant 9 · 16 = 144, since tan<sup>2</sup> <i>x</i> cot<sup>2</sup> <i>x</i> = 1. By AM–GM,<br>9 tan<sup>2</sup> <i>x</i> + 16 cot<sup>2</sup> <i>x</i> ≥ 2√144 = 24.',
          '<b>Step 3.</b> Hence 9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> ≥ 25 + 24 = 49 = (3 + 4)<sup>2</sup>, matching the Key formulas and definitions part, item (D), with <i>a</i> = 3, <i>b</i> = 4.',
          `<b>Step 4: attainability.</b> Equality needs 9 tan<sup>2</sup> <i>x</i> = 16 cot<sup>2</sup> <i>x</i>, i.e. tan<sup>4</sup> <i>x</i> = ${fr('16', '9')}, i.e. tan<sup>2</sup> <i>x</i> = ${fr('4', '3')}. Such <i>x</i> exist: for instance <i>x</i> = tan<sup>−1</sup> √(${fr('4', '3')}) ≈ 0.8571 radians. Substituting confirms the value 49 exactly.`,
          '<b>Step 5: no maximum.</b> As <i>x</i> → 0<sup>+</sup>, csc<sup>2</sup> <i>x</i> → +∞, so the expression is unbounded above. The honest answer is “minimum 49; no maximum”.',
          `<b>Part 2: the half-open range.</b><br><b>Step 6.</b> By the triple-angle formula (Topic 05’s Identity master reference part, item (F)), sin 3<i>x</i> = 3 sin <i>x</i> − 4 sin<sup>3</sup> <i>x</i>, which factors as sin <i>x</i>(3 − 4 ${S2}). So for sin <i>x</i> ≠ 0<br>${RATIO} = 3 − 4 ${S2}.`,
          `<b>Step 7: the domain matters.</b> The expression is undefined at <i>x</i> = <i>n</i>π, which are precisely the points where ${S2} = 0. So the admissible values of ${S2} form the half-open set (0, 1], not [0, 1].`,
          `<b>Step 8: map the interval.</b> The map <i>s</i> ↦ 3 − 4<i>s</i> is decreasing, so it sends (0, 1] to [3 − 4, 3) = [−1, 3). The endpoint −1 is attained (at <i>x</i> = ${P2}, where ${fr(`sin(${P3_2})`, `sin(${P2})`)} = ${fr('−1', '1')} = −1); the value 3 is approached as <i>x</i> → <i>n</i>π but never reached.`,
          '<b>What made this Advanced.</b> Part 1 rewards recognising a reciprocal pair hiding behind two Pythagorean identities: the constant 25 has to be extracted before AM–GM becomes usable, and a student who applies AM–GM directly to 9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> gets the useless bound 2√(144 sec<sup>2</sup> <i>x</i> csc<sup>2</sup> <i>x</i>), which is not a constant. Part 2 rewards noticing that a removable-looking simplification changes nothing about the domain: cancelling sin <i>x</i> is legitimate as an identity for sin <i>x</i> ≠ 0, but the excluded points are still excluded, and the bracket at 3 must therefore be round. Writing [−1, 3] loses the mark.',
        ],
        ans: `min(9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i>) = 49 at tan<sup>2</sup> <i>x</i> = ${fr('4', '3')}; ${RATIO} ∈ [−1, 3).`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the maximum and minimum values of 5 sin <i>x</i> − 12 cos <i>x</i> + 4.',
            a: '<i>R</i> = √(25 + 144) = 13; maximum 17, minimum −9.',
          },
          {
            q: `Find the range of 2 ${S2} + 3 ${C2}.`,
            a: `2(${S2} + ${C2}) + ${C2} = 2 + ${C2}, so the range is [2, 3]. (The amplitude rule would wrongly suggest √13.)`,
          },
          {
            q: 'Find the minimum value of 4 sec<sup>2</sup> <i>x</i> + 9 csc<sup>2</sup> <i>x</i>.',
            a: `(2 + 3)<sup>2</sup> = 25, attained when tan<sup>2</sup> <i>x</i> = ${T3_2}.`,
          },
          {
            q: `Find the range of sin <i>x</i> cos <i>x</i> + ${C2}.`,
            a: `${H} sin 2<i>x</i> + ${fr('1 + cos 2<i>x</i>', '2')} = ${H} + ${H}(sin 2<i>x</i> + cos 2<i>x</i>), so the range is [${fr('1 − √2', '2')}, ${fr('1 + √2', '2')}] ≈ [−0.2071, 1.2071].`,
          },
          {
            q: `Show that ${C2} + cos<sup>2</sup>(<i>x</i> + ${P3}) + cos<sup>2</sup>(<i>x</i> − ${P3}) is constant, and find its value.`,
            a: `Using cos<sup>2</sup> <i>ϕ</i> = ${fr('1 + cos 2<i>ϕ</i>', '2')}, the sum is ${T3_2} + ${H}[cos 2<i>x</i> + cos(2<i>x</i> + ${P2_3}) + cos(2<i>x</i> − ${P2_3})], and the bracket is cos 2<i>x</i> + 2 cos 2<i>x</i> cos ${P2_3} = cos 2<i>x</i> − cos 2<i>x</i> = 0. The value is ${T3_2}.`,
          },
          {
            q: 'Find the maximum and minimum values of sin <i>x</i> + cos <i>x</i> + sin <i>x</i> cos <i>x</i>.',
            a: `Put <i>t</i> = sin <i>x</i> + cos <i>x</i> ∈ [−√2, √2], so sin <i>x</i> cos <i>x</i> = ${fr('<i>t</i><sup>2</sup> − 1', '2')} and the expression is ${fr('<i>t</i><sup>2</sup> + 2<i>t</i> − 1', '2')}. The vertex is at <i>t</i> = −1, inside the interval, giving the minimum ${fr('1 − 2 − 1', '2')} = −1; the maximum is at <i>t</i> = √2, giving ${fr('2 + 2√2 − 1', '2')} = ${fr('1 + 2√2', '2')} ≈ 1.9142.`,
          },
          {
            q: 'Find the minimum value of cos 2<i>x</i> + cos <i>x</i>.',
            a: `2 ${C2} + cos <i>x</i> − 1 with <i>t</i> = cos <i>x</i> ∈ [−1, 1]; vertex at <i>t</i> = −${fr('1', '4')}, inside, giving 2(${fr('1', '16')}) − ${fr('1', '4')} − 1 = −${fr('9', '8')}. (Maximum 2 at <i>t</i> = 1.)`,
          },
          {
            q: `Find the maximum and minimum of 5 cos <i>θ</i> + 3 cos(<i>θ</i> + ${P3}) + 3.`,
            a: `Expanding, 5 cos <i>θ</i> + ${T3_2} cos <i>θ</i> − ${fr('3√3', '2')} sin <i>θ</i> = ${fr('13', '2')} cos <i>θ</i> − ${fr('3√3', '2')} sin <i>θ</i>, with <i>R</i> = √(${fr('169', '4')} + ${fr('27', '4')}) = √49 = 7. Maximum 10, minimum −4.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The maximum value of 3 ${S2} + 4 ${C2} is`,
        opts: [
          {
            label: '3',
            nudge: '<b>(A)</b> is the minimum, obtained at cos <i>x</i> = 0. Choosing it means the direction of the inequality was reversed.',
          },
          { label: '4', nudge: null },
          {
            label: '5',
            nudge: `<b>(C)</b> is √(3<sup>2</sup> + 4<sup>2</sup>): the amplitude rule applied to squares. This is the classic error of the topic, and writing it as 3 + ${C2} ≤ 4 refutes it in one line.`,
          },
          {
            label: '7',
            nudge: `<b>(D)</b> is 3 + 4, the “add the coefficients” guess. It would require ${S2} and ${C2} both to equal 1, which the Pythagorean identity forbids.`,
          },
        ],
        correct: 1,
        solution: `3 ${S2} + 4 ${C2} = 3 + ${C2} ≤ 4.`,
      },
      {
        t: 'mcq',
        q: 'The minimum value of 9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> is',
        opts: [
          {
            label: '25',
            nudge: '<b>(A)</b> is 9 + 16: the value you would get by setting tan<sup>2</sup> <i>x</i> = cot<sup>2</sup> <i>x</i> = 0 simultaneously, which is impossible since their product is 1. It is the bound you reach by dropping the variable terms instead of minimising them.',
          },
          { label: '49', nudge: null },
          {
            label: '12',
            nudge: '<b>(C)</b> is √(9 · 16) = 12, the geometric mean on its own. The AM–GM step contributes twice the geometric mean, 2√144 = 24, and the constant 25 must still be added on top of that. Dropping both the factor 2 and the constant lands here.',
          },
          {
            label: '7',
            nudge: '<b>(D)</b> is 3 + 4, the square root of the right answer. Note the general result is (<i>a</i> + <i>b</i>)<sup>2</sup> = 49, not <i>a</i> + <i>b</i>.',
          },
        ],
        correct: 1,
        solution: '9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> = 25 + 9 tan<sup>2</sup> <i>x</i> + 16 cot<sup>2</sup> <i>x</i> ≥ 25 + 24 = 49.',
      },
      {
        t: 'mcq',
        q: `The range of ${RATIO}, <i>x</i> ≠ <i>n</i>π, is`,
        opts: [
          {
            label: '[−1, 3]',
            nudge: '<b>(A)</b> includes 3, which needs sin <i>x</i> = 0: exactly the excluded point. This is the answer of a student who simplified correctly and then forgot the domain.',
          },
          { label: '[−1, 3)', nudge: null },
          {
            label: '(−1, 3)',
            nudge: `<b>(C)</b> additionally excludes −1, which is attained at <i>x</i> = ${P2} (${fr(`sin ${P3_2}`, `sin ${P2}`)} = −1). Overcaution costs the same mark as carelessness.`,
          },
          {
            label: '[−3, 3]',
            nudge: `<b>(D)</b> treats the expression as though it were a sine of something and quotes a symmetric range. Substituting <i>x</i> = ${P2} gives −1 and <i>x</i> = ${P6} gives 2; nothing suggests −3.`,
          },
        ],
        correct: 1,
        solution: `${RATIO} = 3 − 4 ${S2} with ${S2} ∈ (0, 1].`,
      },
      {
        t: 'mcq',
        q: 'The minimum value of cos 2<i>x</i> + cos <i>x</i> over all real <i>x</i> is',
        opts: [
          {
            label: '−2',
            nudge: '<b>(A)</b> adds the two individual minima, −1 and −1. They cannot occur together: cos <i>x</i> = −1 forces cos 2<i>x</i> = +1. The minimum of a sum equals the sum of the minima only when both are reached at the same <i>x</i>.',
          },
          {
            label: '−1',
            nudge: `<b>(B)</b> is −1, the value at <i>t</i> = 0: an arbitrary interior point, neither an endpoint nor the vertex. Since −${fr('9', '8')} < −1, this is a genuine miss.`,
          },
          { label: `−${fr('9', '8')}`, nudge: null },
          {
            label: '0',
            nudge: `<b>(D)</b> is 0, which is the value at the endpoint <i>t</i> = −1 (and also at <i>t</i> = ${H}): the answer you get by checking only the endpoints <i>t</i> = ±1 and never the vertex, since <i>f</i>(−1) = 0 and <i>f</i>(1) = 2. The value 0 also appears because 2<i>t</i><sup>2</sup> + <i>t</i> − 1 = (2<i>t</i> − 1)(<i>t</i> + 1) vanishes at its roots <i>t</i> = −1 and <i>t</i> = ${H}; solving the quadratic instead of minimising it is a reflex worth breaking.`,
          },
        ],
        correct: 2,
        solution: `With <i>t</i> = cos <i>x</i> ∈ [−1, 1] the expression is 2<i>t</i><sup>2</sup> + <i>t</i> − 1, whose vertex sits at <i>t</i> = −${fr('1', '4')}, inside the interval, giving −${fr('9', '8')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying ${ROOT} to squares.</b> The most common error in this topic. For <i>a</i> ${S2} + <i>b</i> ${C2} the range is [min(<i>a</i>, <i>b</i>), max(<i>a</i>, <i>b</i>)]. <b>Correction:</b> the amplitude rule needs first powers of sin <i>x</i> and cos <i>x</i> at the same angle, and nothing else qualifies.`,
          `<b>Applying the amplitude rule across different angles.</b> 5 cos <i>θ</i> + 3 cos(<i>θ</i> + ${P3}) does not have amplitude √34. <b>Correction:</b> expand the shifted term into sin <i>θ</i> and cos <i>θ</i> first, then collect, then take the square root. Here the true amplitude is 7.`,
          `<b>Checking only the endpoints of a quadratic in <i>t</i>.</b> If the vertex <i>t</i> = ${VERTEX} lies in [−1, 1], it is a candidate and frequently the answer. <b>Correction:</b> list all three candidates before comparing.`,
          '<b>Adding individual extremes.</b> The minimum of <i>f</i> + <i>g</i> is generally larger than min <i>f</i> + min <i>g</i>, because the two minima occur at different <i>x</i>. <b>Correction:</b> combine first, minimise once.',
          `<b>Ignoring a domain exclusion when reporting the range.</b> Cancelling sin <i>x</i> from ${RATIO} is valid as an identity but does not restore the excluded points. <b>Correction:</b> after simplifying, ask which values of the inner variable are now unreachable, and open the corresponding bracket.`,
          '<b>Reporting a maximum for an expression that has none.</b> <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> is unbounded above. <b>Correction:</b> whenever sec, csc, tan or cot survives into the final expression, check for unboundedness before writing “maximum”.',
          `<b>Forgetting the restriction on <i>x</i>.</b> On [0, ${P6}], sin <i>x</i> + cos <i>x</i> does not reach √2. <b>Correction:</b> run Procedure B: turning points inside the window plus the two endpoints, and nothing else.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Before choosing a method, count the powers. Degree one goes to the amplitude rule; degree two goes to the double angle; a quadratic in a single function goes to the bounded-parabola method. Ninety per cent of questions are decided by that one glance ${T09}.<br>• For <i>a</i> ${S2} + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> ${C2}, memorise the finished formula: centre ${AC2}, half-width ${H}${HALFROOT}. It converts a two-minute derivation into a ten-second substitution, and it degenerates correctly when <i>b</i> = 0.<br>• Whenever you see a quantity added to its reciprocal (tan<sup>2</sup> with cot<sup>2</sup>, sec<sup>2</sup> with cos<sup>2</sup>), reach for AM–GM immediately. The product is a constant, so the bound is a constant, and no calculus is needed.<br>• The substitution <i>t</i> = sin <i>x</i> + cos <i>x</i> with sin <i>x</i> cos <i>x</i> = ${fr('<i>t</i><sup>2</sup> − 1', '2')} turns any symmetric polynomial into a one-variable polynomial on [−√2, √2]. It is the single most useful substitution in the topic after the double angle.<br>• Finish every range question by naming the <i>x</i> at which each bound is attained. It costs one line, it converts [−1, 3] into the correct [−1, 3) when a bound is not attained, and it is exactly the line Advanced marking schemes reward.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Linear (first powers, same angle)',
            note: `<i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i> ∈ [<i>c</i> − ${ROOT}, <i>c</i> + ${ROOT}]. Expand shifted angles before applying this.`,
          },
          {
            f: 'Pure squares',
            note: `<i>a</i> ${S2} + <i>b</i> ${C2} ∈ [min(<i>a</i>, <i>b</i>), max(<i>a</i>, <i>b</i>)]. <b>No square root.</b>`,
          },
          {
            f: 'Homogeneous quadratic',
            note: `<i>a</i> ${S2} + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> ${C2} has centre ${AC2} and half-width ${H}${HALFROOT}.`,
          },
          {
            f: 'Quadratic in a bounded function',
            note: `<i>t</i> = sin <i>x</i> or cos <i>x</i>, <i>t</i> ∈ [−1, 1]. Candidates are <i>t</i> = −1, <i>t</i> = 1, and <i>t</i> = ${VERTEX} if it lies inside.`,
          },
          {
            f: 'Reciprocal pairs (AM–GM)',
            note: `tan<sup>2</sup> <i>x</i> + cot<sup>2</sup> <i>x</i> ≥ 2; <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> ≥ (<i>a</i> + <i>b</i>)<sup>2</sup> for <i>a</i>, <i>b</i> > 0, equality at tan<sup>2</sup> <i>x</i> = ${fr('<i>b</i>', '<i>a</i>')}; sec<sup>2</sup> <i>x</i> + csc<sup>2</sup> <i>x</i> ≥ 4. <b>Minimum only: these have no maximum.</b>`,
          },
          {
            f: 'Symmetric substitution',
            note: `<i>t</i> = sin <i>x</i> + cos <i>x</i> ∈ [−√2, √2], sin <i>x</i> cos <i>x</i> = ${fr('<i>t</i><sup>2</sup> − 1', '2')}.`,
          },
          {
            f: 'Power reduction for the conversion',
            note: `${S2} = ${fr('1 − cos 2<i>x</i>', '2')}, ${C2} = ${fr('1 + cos 2<i>x</i>', '2')}, sin <i>x</i> cos <i>x</i> = ${fr('sin 2<i>x</i>', '2')}.`,
          },
          {
            f: 'Open brackets',
            note: `a bound that is approached but never attained (a domain exclusion, or an open window) gets a round bracket. Example: ${RATIO} ∈ [−1, 3).`,
          },
          {
            f: 'Restricted interval',
            note: 'candidates are the turning points inside the window plus both endpoints.',
          },
          {
            f: 'Golden rule',
            note: 'rewrite until only one trigonometric object remains, read its range, then undo the arithmetic, and always name the <i>x</i> where each bound is reached.',
          },
        ],
        aids: [],
      },
    ],
  },
];
