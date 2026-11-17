import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 0, Additional topic A, pp. 23 to 24 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word: the book's "Addendum P:
 * Where Logarithms Actually Show Up in JEE & NEET". It starts at the top of p. 23
 * (p. 22 ends with the main chapter's Pro-Tips, Topic 01) and runs to the end of
 * the chapter on p. 24. One Additional topic, lettered A; the book's own run-in
 * headings (Chemistry, Physics, Mathematics settings) are its parts, after an
 * "Introduction" part. No drawings. Every fraction is stacked (<frac>); no em
 * dashes. Wording of ours is marked [NEW].
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';

const E = '<i>E</i>';
const Q = '<i>Q</i>';
const N = '<i>N</i>';
const N0 = '<i>N</i><sub>0</sub>';
const T = '<i>T</i>';
const x = '<i>x</i>';
const log10 = 'log<sub>10</sub>';
const HP = '[H<sup>+</sup>]';
const HALF = fr('1', '2');
const D = fr('<i>d</i>', '<i>dx</i>');
const DYDX = fr('<i>dy</i>', '<i>dx</i>');

export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Where Logarithms Actually Show Up in JEE and NEET',
    extra: true,
    kalam: 'Logarithms are not confined to algebra chapters.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Logarithms are not confined to algebra chapters. They appear, unannounced, across chemistry, physics, and the rest of mathematics, wearing subject-specific clothing that can make them hard to recognise at first glance, and JEE assumes you recognise them on sight in every one of these settings, with no reminder that a logarithm is even present.',
      },
      {
        t: 'p',
        html: '<b>[NEW]</b> NEET has no Mathematics paper, so the two Mathematics settings at the end of this addendum (limits and derivatives, and AP/GP problems) are not tested as Mathematics in NEET. The pH, Nernst equation, decibel and half-life settings are chemistry and physics. Questions often supply the needed logarithm values (for example log 2 = 0.3010), so recognising where a logarithm is hidden matters more than memorising its values.',
      },

      { t: 'part', title: 'Chemistry: pH' },
      {
        t: 'p',
        html: `The pH of a solution is defined as pH = −${log10}${HP}, where ${HP} is the hydrogen-ion concentration in mol/L. The minus sign exists purely for convenience: hydrogen-ion concentrations in ordinary solutions span many powers of ten (10<sup>−1</sup> to 10<sup>−14</sup> M), and the logarithm compresses that huge range into the familiar small numbers 1 to 14.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `A solution has ${HP} = 10<sup>−3</sup> M. Find its pH. If instead a solution has pH = 4.3, find ${HP}.`,
        steps: [
          `First part: pH = −${log10}(10<sup>−3</sup>) = 3 directly, by the definition of a logarithm. Second part: pH = 4.3 means ${HP} = 10<sup>−4.3</sup> = 10<sup>−5</sup> × 10<sup>0.7</sup>. Since ${log10}${NB}5 ≈ 0.699 ≈ 0.7, it follows that 10<sup>0.7</sup> ≈ 5.0, so ${HP} ≈ 5.0 × 10<sup>−5</sup> M.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Chemistry: the Nernst equation' },
      {
        t: 'p',
        html: `At 298 K, the Nernst equation is usually quoted as<br>${E} = ${E}° − ${fr('0.0591', '<i>n</i>')} ${log10}${NB}${Q},<br>where the constant 0.0591 comes from ${fr('<i>RT</i> ln 10', '<i>F</i>')} with <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, <i>T</i> = 298 K, and <i>F</i> = 96485 C mol<sup>−1</sup>, a substitution worth doing once so the constant stops looking arbitrary:<br>${fr('8.314 × 298 × 2.303', '96485')} ≈ 0.0591.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `For a cell with <i>n</i> = 2, ${E}° = 1.10 V, and reaction quotient ${Q} = 0.01, find the cell potential ${E}.`,
        steps: [
          `${E} = 1.10 − ${fr('0.0591', '2')} ${log10}(0.01) = 1.10 − (0.02955)(−2) = 1.10 + 0.0591 = 1.1591 V. The negative log of the small quotient ${Q} <i>raises</i> the potential above the standard value: exactly the sign behaviour the Nernst equation is built to capture.`,
        ],
        ans: '',
      },
      {
        t: 'p',
        html: `<b>[NEW]</b> ${E} and ${E}° are cell potentials in volt, so the constant 0.0591 is in volt too, and <i>n</i> is the number of electrons transferred in the cell reaction. The data are given to two decimal places (1.10 V), so the result is better quoted as 1.16 V than as 1.1591 V.`,
      },

      { t: 'part', title: 'Physics: sound intensity in decibels' },
      {
        t: 'p',
        html: `Sound intensity level is <i>β</i> = 10 ${log10}(${fr('<i>I</i>', '<i>I</i><sub>0</sub>')}), where <i>I</i><sub>0</sub> = 10<sup>−12</sup> W/m<sup>2</sup> is the reference intensity at the threshold of human hearing. As with pH, the logarithm exists to compress an enormous physical range (audible intensities span about twelve orders of magnitude) into a scale a few tens of units wide.`,
      },
      {
        t: 'p',
        html: `<b>[NEW]</b> Twelve orders of magnitude is 10 × 12 = 120 units on this scale: it runs from 0 dB at <i>I</i> = <i>I</i><sub>0</sub> (because ${log10}${NB}1 = 0) to about 120 dB at <i>I</i> = 1 W/m<sup>2</sup>, so it is about 120 units wide, not “a few tens”.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `Find the sound level in decibels for <i>I</i> = 10<sup>−2</sup> W/m<sup>2</sup> (roughly the intensity at a loud rock concert).`,
        steps: [
          `<i>β</i> = 10 ${log10}(${fr('10<sup>−2</sup>', '10<sup>−12</sup>')}) = 10 ${log10}(10<sup>10</sup>) = 10 × 10 = 100 dB.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Physics: radioactive decay and half-life' },
      {
        t: 'p',
        html: `A radioactive sample follows ${N} = ${N0}(${HALF})<sup><i>t</i>/<i>T</i></sup>, where ${T} is the half-life, the time for the activity to fall to exactly half its value. Any question asking for a fraction other than a clean power of ${HALF} forces a logarithm.`,
      },
      {
        t: 'p',
        html: `<b>[NEW]</b> Here ${N} is the number of undecayed nuclei. The activity is proportional to ${N}, so it falls by the same factor in the same time, and ${fr(N, N0)} is also the ratio of the activity to its initial value.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `In terms of the half-life ${T}, how long does a sample take to decay to 10% of its initial activity?`,
        steps: [
          `Set ${fr(N, N0)} = 0.1 in ${N} = ${N0}(${HALF})<sup><i>t</i>/<i>T</i></sup> and take ${log10} of both sides:<br>${log10}(0.1) = ${fr('<i>t</i>', T)} ${log10}(0.5),<br>so ${fr('<i>t</i>', T)} = ${fr(`${log10}${NB}0.1`, `${log10}${NB}0.5`)} = ${fr('−1', '−0.3010')} ≈ 3.32.<br>A sample takes about 3.32 half-lives, a little over three full halvings, to fall to 10% of its original activity.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Mathematics: limits and derivatives' },
      {
        t: 'p',
        html: `The standard limit lim<sub>${x}→0</sub> ${fr(`ln(1 + ${x})`, x)} = 1 underlies the derivative ${D}(ln ${x}) = ${fr('1', x)}, both used repeatedly from Chapter 12 onward, and both depend on treating ln correctly as <i>the</i> inverse of <i>e</i><sup>${x}</sup> rather than as an arbitrary “log-shaped” function. <b>Logarithmic differentiation</b> then uses the laws of this chapter to differentiate expressions with variable exponents, which ordinary power and exponential rules cannot handle on their own.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `Differentiate <i>y</i> = ${x}<sup>${x}</sup> (${x}${NB}>${NB}0) with respect to ${x}.`,
        steps: [
          `Take ln of both sides: ln <i>y</i> = ${x} ln ${x}. Differentiate implicitly, using the product rule on the right:<br>${fr('1', '<i>y</i>')} ${DYDX} = ln ${x} + ${x} · ${fr('1', x)} = ln ${x} + 1.<br>Multiply back by <i>y</i> = ${x}<sup>${x}</sup>:<br>${DYDX} = ${x}<sup>${x}</sup>(ln ${x} + 1).<br>Without first taking a logarithm, a variable base and a variable exponent sitting together have no direct differentiation rule at all: the logarithm is what converts the problem into one algebra already knows how to solve.`,
        ],
        ans: '',
      },
      {
        t: 'p',
        html: `<b>[NEW]</b> Writing ${x}<sup>${x}</sup> = <i>e</i><sup>${x} ln ${x}</sup> and using the chain rule gives the same derivative, ${x}<sup>${x}</sup>(ln ${x} + 1), and that route also uses the logarithm. So the logarithm is needed either way; what is missing is a rule that handles a variable base and a variable exponent without rewriting the expression first. The same derivative also comes from treating the base and the exponent one at a time and adding: varying the base with the exponent held fixed gives ${x}·${x}<sup>${x}−1</sup> = ${x}<sup>${x}</sup>, varying the exponent with the base held fixed gives ${x}<sup>${x}</sup> ln ${x}, and the sum is ${x}<sup>${x}</sup>(1 + ln ${x}).`,
      },

      { t: 'part', title: 'Mathematics: AP/GP problems' },
      {
        t: 'p',
        html: `If positive numbers <i>a</i>, <i>b</i>, <i>c</i> are in geometric progression, then <i>b</i><sup>2</sup> = <i>ac</i>, and taking ${log10} of both sides (legitimate since all three are positive, so the laws in Topic 01’s part on the laws of logarithms apply cleanly) gives 2 log <i>b</i> = log <i>a</i> + log <i>c</i>, so log <i>a</i>, log <i>b</i>, log <i>c</i> are automatically in arithmetic progression. This single fact is the bridge examiners use to convert a GP question into a logarithmic-equation question, and it is exactly the machinery built in Topic 01’s parts from the definition and domain of a logarithm through logarithmic equations that is needed to finish such a problem.`,
      },
      {
        t: 'ex',
        tag: 'Representative question',
        q: `The 3rd, 6th and 12th terms of an arithmetic progression are, in that order, three consecutive terms of a geometric progression. If the common difference of the AP is non-zero, show that the terms of the GP form an equation solvable using the laws of this chapter, and state which law is used.`,
        steps: [
          `Let the AP have first term <i>A</i> and common difference <i>d</i> ≠ 0. Its 3rd, 6th, and 12th terms are <i>A</i>+2<i>d</i>, <i>A</i>+5<i>d</i>, <i>A</i>+11<i>d</i>. These form a GP exactly when (<i>A</i>${NB}+${NB}5<i>d</i>)<sup>2</sup> = (<i>A</i>${NB}+${NB}2<i>d</i>)(<i>A</i>${NB}+${NB}11<i>d</i>): an ordinary algebraic condition, not yet a logarithmic one. But the moment the question instead states the <i>values</i> of these three GP terms and asks, say, “after how many further terms does the GP first exceed <i>N</i>”, the condition becomes <i>ar</i><sup><i>n</i>−1</sup> > <i>N</i> for the GP’s first term <i>a</i> and common ratio <i>r</i>; taking ${log10} of both sides and using the product and power laws of Topic 01’s part on the laws of logarithms converts this directly into a linear inequality in <i>n</i>, which the base-direction rule of Topic 01’s part on logarithmic inequalities then solves. This is the standard route by which an AP/GP chapter question becomes, in its final step, a one-line logarithm problem.`,
        ],
        ans: '',
      },
      {
        t: 'p',
        html: `<b>[NEW]</b> The algebraic condition can be finished: (<i>A</i>${NB}+${NB}5<i>d</i>)<sup>2</sup> = (<i>A</i>${NB}+${NB}2<i>d</i>)(<i>A</i>${NB}+${NB}11<i>d</i>) gives <i>A</i><sup>2</sup> + 10<i>Ad</i> + 25<i>d</i><sup>2</sup> = <i>A</i><sup>2</sup> + 13<i>Ad</i> + 22<i>d</i><sup>2</sup>, so 3<i>d</i>(<i>d</i> − <i>A</i>) = 0, and since <i>d</i> ≠ 0 we get <i>d</i> = <i>A</i>: the three terms are 3<i>A</i>, 6<i>A</i>, 12<i>A</i>, a GP of common ratio 2. As printed, the question asks for a logarithmic equation that its data do not produce; the answer above works a follow-up question instead. No logarithm is needed for the printed question itself, and the printed answer states no law for it; the product and power laws enter only in the further question about exceeding <i>N</i>. In that inequality, taking ${log10} keeps the direction because the base 10 is greater than 1, and dividing by ${log10}${NB}<i>r</i> keeps it only when <i>r</i> > 1 (here <i>r</i> = 2) and reverses it when 0 < <i>r</i> < 1; the logarithm also needs <i>a</i>, <i>r</i> and <i>N</i> positive, and <i>r</i> ≠ 1 is needed before dividing by ${log10}${NB}<i>r</i>.`,
      },
    ],
  },
];
