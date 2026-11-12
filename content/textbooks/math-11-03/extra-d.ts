import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional topic D: "Topic D: Boundedness Equations and Simultaneous
 * Trigonometric Equations", pp. 330–336 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word: the closing topic of the "Additional
 * Topics" part, begun on p. 330 below Subtopic 12's cheat sheet and ending on
 * p. 336 (Chapter 4 starts on p. 337). Its examples keep the book's labels D1–D4.
 * Parts follow its headings: Introduction, the two method statements, Worked
 * examples, Practice exercises, Pitfalls specific to these two patterns, Cheat sheet.
 * No drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const PI2 = half('π');
const PI4 = fr('π', '4');
const PI6 = fr('π', '6');
const R3 = fr('1', '√3');
const MH = `−${fr('1', '2')}`;
const T06 = 'Topic 06’s Solution-set reference and root-validity check part';
const RHS4 = '2<sup>1−1/√2</sup>';
const LHS4 = '2<sup>sin <i>x</i></sup> + 2<sup>cos <i>x</i></sup>';
const AMGM = '2<sup>1+(sin <i>x</i>+cos <i>x</i>)/2</sup>';
const ODD2 = (k: string) => `(2<i>${k}</i> + 1)${PI2}`;

export const TOPICS: Topic[] = [
  {
    n: 'D',
    title: 'Boundedness Equations and Simultaneous Trigonometric Equations',
    extra: true,
    kalam: 'When the two sides of an equation are different in kind, stop solving and start bounding.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 06 built the three master general-solution formulas and the root-validity checklist, and Procedure B of Topic 07 added the <i>t</i> = tan ${half('<i>θ</i>')} route for <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>. Two examinable patterns go beyond that machinery: boundedness equations and simultaneous trigonometric equations (Topic 06’s Solution-set reference and root-validity check part, item (F), settles only the pair sin <i>θ</i> = sin <i>α</i>, cos <i>θ</i> = cos <i>α</i>). Each is treated below in a shorter form: method statement, worked examples (labelled D1–D4), and practice with answers.`,
      },

      { t: 'part', title: 'Method statement 1: the boundedness (extreme-value) argument' },
      {
        t: 'p',
        html: `<b>When to reach for it.</b> The two sides of the equation are different in kind: one side is a bounded trigonometric expression and the other is bounded the opposite way, or is algebraic. Typical fingerprints: high even powers such as sin<sup>6</sup> <i>x</i> or tan<sup>8</sup> <i>x</i>; a sum of two functions each of which is separately capped; an algebraic side such as <i>x</i><sup>2</sup> + ${fr('1', '<i>x</i><sup>2</sup>')}. If factoring and the general-solution formulas both look hopeless, this is the method to reach for.`,
      },
      {
        t: 'p',
        html: '<b>The principle.</b> If <i>f</i>(<i>x</i>) ≤ <i>M</i> for all <i>x</i> in the domain, and <i>g</i>(<i>x</i>) ≥ <i>M</i> for all <i>x</i> in the domain, then',
      },
      {
        t: 'formula',
        kicker: 'The boundedness principle',
        main: '<i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) ⟺ <i>f</i>(<i>x</i>) = <i>M</i> <b>and</b> <i>g</i>(<i>x</i>) = <i>M</i>',
        legend: [
          '<i>f</i>(<i>x</i>) = the side bounded above (<i>f</i>(<i>x</i>) ≤ <i>M</i> on the domain)',
          '<i>g</i>(<i>x</i>) = the side bounded below (<i>g</i>(<i>x</i>) ≥ <i>M</i> on the domain)',
          '<i>M</i> = the common bound where the two meet',
          '<i>x</i> = the variable (any point of the domain)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'One equation has become two, each of which is an extremum condition, and extremum conditions are rigid, so each pins the variable down to a narrow family. The solution set of the original is the <b>intersection</b> of the two families, which is frequently empty.',
      },
      {
        t: 'proc',
        title: 'The three steps',
        steps: [
          `Bound each side separately, and find the common value <i>M</i> where the two bounds meet. State the bound you are using: |sin <i>x</i>| ≤ 1, sec<sup>2</sup> <i>z</i> ≥ 1, <i>u</i> + ${fr('1', '<i>u</i>')} ≥ 2 for <i>u</i> > 0, or AM–GM.`,
          `Write down the family of <i>x</i> achieving each bound, using ${T06}.`,
          '<b>Intersect the families.</b> Convert both to a common shape and ask which integers make them agree. If they cannot agree, the honest answer is “no solution”, and that is frequently the intended one (the book’s estimate from past papers, not official figures).',
        ],
      },
      {
        t: 'p',
        html: '<b>Where it breaks down.</b> The method proves nothing unless both bounds are genuine and they meet. If <i>f</i> ≤ 2 and <i>g</i> ≥ 1, the equation may have ordinary solutions and boundedness tells you nothing. Check that the two bounds are the same number before using the argument.',
      },

      { t: 'part', title: 'Method statement 2: simultaneous trigonometric equations' },
      {
        t: 'p',
        html: `<b>When to reach for it.</b> Two conditions are imposed on the same angle, for example sin <i>θ</i> = ${MH} together with tan <i>θ</i> = ${R3}. Solving them separately and then “combining” the two general solutions is the standard route and the standard way to lose the question.`,
      },
      {
        t: 'p',
        html: '<b>The principle. Do not generalise first.</b> Each equation, taken alone, usually has two solutions in [0, 2π) (sin <i>θ</i> = ±1 and cos <i>θ</i> = ±1 have one); the pair of conditions is satisfied by the common principal value, and usually by exactly one. Generalise only at the very end, and with period 2π, because two independent conditions on the same angle <i>θ</i> fix the quadrant, and only a whole turn preserves both. (If the conditions involve a multiple such as 2<i>θ</i>, first solve for 2<i>θ</i> with period 2π and then divide by 2; the period in <i>θ</i> can then be smaller.)',
      },
      {
        t: 'proc',
        title: 'The four steps',
        steps: [
          'Solve each equation separately <b>within</b> [0, 2π) <b>only</b>, listing the principal solutions.',
          'Take the intersection of the two lists.',
          'If the intersection is empty, the system has no solution.',
          'Add 2<i>n</i>π to each surviving value. Never <i>n</i>π: that would flip the quadrant and break one of the two conditions. (If a given value is 0, the list may hold two values π apart; adding 2<i>n</i>π to each still gives every solution.)',
        ],
      },
      {
        t: 'p',
        html: `<b>Why 2<i>n</i>π and not <i>n</i>π.</b> Knowing sin <i>θ</i> alone leaves two quadrants open; knowing cos <i>θ</i> or tan <i>θ</i> as well closes it to one. A shift of π moves the terminal side to the opposite quadrant, where at least one of the two given values changes sign. This is the same principle as ${T06}, item (F), applied to any pair of conditions rather than to sine and cosine alone. (This needs a given sine or cosine value that is not 0: sin <i>θ</i> = 0 with tan <i>θ</i> = 0 holds at every <i>θ</i> = <i>n</i>π.)`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'D1: JEE Main Level (Boundedness)',
        q: 'Solve sin<sup>6</sup> <i>x</i> = 1 + cos<sup>4</sup> 3<i>x</i>.',
        steps: [
          '<b>Step 1: bound each side.</b> Since |sin <i>x</i>| ≤ 1, we have sin<sup>6</sup> <i>x</i> ≤ 1. Since cos<sup>4</sup> 3<i>x</i> ≥ 0, we have 1 + cos<sup>4</sup> 3<i>x</i> ≥ 1. The two bounds meet at <i>M</i> = 1.',
          '<b>Step 2: force both to the meeting value.</b> Equality is possible only if<br>sin<sup>6</sup> <i>x</i> = 1 <b>and</b> cos<sup>4</sup> 3<i>x</i> = 0.',
          `<b>Step 3: solve each.</b> From sin<sup>6</sup> <i>x</i> = 1 we get sin<sup>2</sup> <i>x</i> = 1, i.e. cos <i>x</i> = 0, i.e.<br><i>x</i> = ${ODD2('m')},   <i>m</i> ∈ ℤ.<br>From cos 3<i>x</i> = 0 we get 3<i>x</i> = ${ODD2('n')}, i.e.<br><i>x</i> = (2<i>n</i> + 1)${PI6},   <i>n</i> ∈ ℤ.`,
          `<b>Step 4: intersect the two families.</b> We need ${ODD2('m')} = (2<i>n</i> + 1)${PI6}, i.e. 3(2<i>m</i> + 1) = 2<i>n</i> + 1, i.e. 6<i>m</i> + 3 = 2<i>n</i> + 1, i.e. <i>n</i> = 3<i>m</i> + 1. Since 3<i>m</i> + 1 is an integer for every integer <i>m</i>, <b>every</b> member of the first family already lies in the second. The intersection is the whole first family.`,
          `<b>Step 5: verify.</b> At <i>x</i> = ${PI2}: sin<sup>6</sup> ${PI2} = 1, and 1 + cos<sup>4</sup> ${fr('3π', '2')} = 1 + 0 = 1. Equal. At <i>x</i> = ${fr('3π', '2')}: (−1)<sup>6</sup> = 1 and 1 + cos<sup>4</sup> ${fr('9π', '2')} = 1 + 0 = 1. Equal.`,
          `<b>The point of the intersection step.</b> It is not decoration. Had the second condition been cos 2<i>x</i> = 0 instead, the families would have been <i>x</i> = ${ODD2('m')} and <i>x</i> = (2<i>n</i> + 1)${PI4}. These are disjoint: ${ODD2('m')} = (4<i>m</i> + 2)${PI4} is an even multiple of ${PI4}, whereas (2<i>n</i> + 1)${PI4} is an odd multiple, so the equation would have had no solution at all. In D1 the first family happens to lie inside the second; whether the families overlap has to be checked, not assumed. And in Example D2 the intersection is empty.`,
        ],
        ans: `<i>x</i> = ${ODD2('n')},   <i>n</i> ∈ ℤ.`,
      },
      {
        t: 'ex',
        tag: 'D2: JEE Main: Speed Trap (Boundedness)',
        q: 'Solve sin<sup>4</sup> <i>x</i> = 1 + tan<sup>8</sup> <i>x</i>.',
        steps: [
          `<b>The trap.</b> The structure looks identical to D1, so the hand runs the same steps and reaches sin<sup>4</sup> <i>x</i> = 1 and tan<sup>8</sup> <i>x</i> = 0. It then writes the first family, <i>x</i> = ${ODD2('n')}, and stops, because in D1 that was the answer. Here it is not merely incomplete; it is a set of points at which the equation is not even defined.`,
          '<b>The correct work.</b><br><b>Step 1: bound.</b> sin<sup>4</sup> <i>x</i> ≤ 1 and 1 + tan<sup>8</sup> <i>x</i> ≥ 1, so equality forces<br>sin<sup>4</sup> <i>x</i> = 1 and tan<sup>8</sup> <i>x</i> = 0.',
          `<b>Step 2: solve each.</b> sin<sup>2</sup> <i>x</i> = 1 gives <i>x</i> = ${ODD2('m')}. tan <i>x</i> = 0 gives <i>x</i> = <i>n</i>π.`,
          `<b>Step 3: intersect.</b> An odd multiple of ${PI2} is never a multiple of π. The two families are disjoint. Equivalently and more sharply: sin <i>x</i> = ±1 forces cos <i>x</i> = 0, at which point tan <i>x</i> is <b>undefined</b>, so the right-hand side does not exist there at all.`,
          '<b>Step 4: confirm.</b> Scanning <i>x</i> over [−10, 10] (excluding points where cos <i>x</i> ≈ 0), the smallest value of |sin<sup>4</sup> <i>x</i> − 1 − tan<sup>8</sup> <i>x</i>| is about 0.94: the two sides never come close to meeting.',
          `<b>Seductive wrong answer: <i>x</i> = ${ODD2('n')}.</b> It fails on two counts at once: the second condition is not satisfied there, and the equation is not defined there. <b>The rule to carry away: the boundedness argument does not end when you have written the two families. It ends when you have intersected them and checked that the common points lie in the domain of both sides.</b>`,
        ],
        ans: 'The equation has no solution.',
      },
      {
        t: 'ex',
        tag: 'D3: CBSE Board Level (Simultaneous)',
        q: `Find the general solution of the system sin <i>θ</i> = ${MH} and tan <i>θ</i> = ${R3}.`,
        steps: [
          `<b>Step 1: the first equation, in [0, 2π) only.</b> sin <i>θ</i> = ${MH} is negative, so <i>θ</i> is in Quadrant III or IV with reference angle ${PI6}:<br><i>θ</i> = π + ${PI6} = ${fr('7π', '6')}   or   <i>θ</i> = 2π − ${PI6} = ${fr('11π', '6')}.`,
          `<b>Step 2: the second equation, in [0, 2π) only.</b> tan <i>θ</i> = ${R3} is positive, so <i>θ</i> is in Quadrant I or III with reference angle ${PI6}:<br><i>θ</i> = ${PI6}   or   <i>θ</i> = ${fr('7π', '6')}.`,
          `<b>Step 3: intersect.</b> The only value on both lists is <i>θ</i> = ${fr('7π', '6')}. Note that this is precisely the Quadrant III value: sine negative and tangent positive together pin the quadrant, which neither condition does alone.`,
          `<b>Step 4: generalise with period 2π.</b><br><i>θ</i> = 2<i>n</i>π + ${fr('7π', '6')},   <i>n</i> ∈ ℤ.`,
          `<b>Step 5: verify.</b> sin ${fr('7π', '6')} = ${MH} and tan ${fr('7π', '6')} = ${R3}. Both hold.`,
          `<b>Why <i>n</i>π would be wrong.</b> Adding π gives ${PI6} (modulo 2π), where tan <i>θ</i> = ${R3} still holds (the tangent has period π) but sin ${PI6} = +${fr('1', '2')}, so the first condition fails. <b>The period of a system is the period of its most restrictive condition; with two independent conditions on sin <i>θ</i>, cos <i>θ</i> or tan <i>θ</i> of the same angle <i>θ</i>, that period is 2π (unless every given sine or cosine value is 0).</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'D4: JEE Advanced Level (Boundedness with AM–GM)',
        q: `Solve ${LHS4} = ${RHS4}.`,
        steps: [
          `<b>Step 1: bound the left side from below by AM–GM.</b> Both terms are positive, so<br>${LHS4} ≥ 2√(2<sup>sin <i>x</i></sup> · 2<sup>cos <i>x</i></sup>) = 2 · 2<sup>(sin <i>x</i>+cos <i>x</i>)/2</sup> = ${AMGM},<br>with equality if and only if 2<sup>sin <i>x</i></sup> = 2<sup>cos <i>x</i></sup>, i.e. sin <i>x</i> = cos <i>x</i>.`,
          `<b>Step 2: bound the exponent from below.</b> By the amplitude rule (Topic 05’s Identity master reference part, item (I)), sin <i>x</i> + cos <i>x</i> = √2 sin(<i>x</i> + ${PI4}) ≥ −√2. Since 2<sup><i>u</i></sup> is an increasing function of <i>u</i>,<br>${AMGM} ≥ 2<sup>1−√2/2</sup> = ${RHS4}.`,
          `<b>Step 3: the chain is tight.</b> Combining Steps 1 and 2,<br>${LHS4} ≥ ${RHS4},<br>and the right-hand side of the given equation is exactly that lower bound. So the equation holds precisely when <b>both</b> inequalities are equalities.`,
          `<b>Step 4: impose both equality conditions.</b><br>• Step 1 equality: sin <i>x</i> = cos <i>x</i>.<br>• Step 2 equality: sin <i>x</i> + cos <i>x</i> = −√2.<br>Together these give 2 sin <i>x</i> = −√2, so sin <i>x</i> = cos <i>x</i> = −${fr('1', '√2')}.`,
          `<b>Step 5: solve.</b> Sine and cosine are both negative and equal in Quadrant III at <i>x</i> = ${fr('5π', '4')}. Hence<br><i>x</i> = 2<i>n</i>π + ${fr('5π', '4')},   <i>n</i> ∈ ℤ.<br>Note that this is a simultaneous condition on sin <i>x</i> and cos <i>x</i>, so by Method statement 2 the period is 2π, not π.`,
          `<b>Step 6: verify numerically.</b> At <i>x</i> = ${fr('5π', '4')}: sin <i>x</i> = cos <i>x</i> = −0.7071068, so the left side is 2 · 2<sup>−0.7071068</sup> = 1.2250947; and ${RHS4} = 2<sup>0.2928932</sup> = 1.2250947. A scan over [0, 2π] confirms that 1.2250947 is the global minimum of the left side and that it occurs only at <i>x</i> ≈ 3.926991 = ${fr('5π', '4')}.`,
          `<b>What made this Advanced.</b> Two bounds had to be chained, and the chain had to be tight: each inequality achieving equality at the same <i>x</i>. A student who applies AM–GM and stops has ${LHS4} ≥ ${AMGM}, which still contains <i>x</i> and so is not yet a number. The second bound is what converts it into a constant, and the recognition that the given right-hand side is that constant is what tells you the equation is an equality case rather than an ordinary equation. Nothing here can be pattern-matched; the shape ${RHS4} on the right is the deliberate signal.`,
        ],
        ans: `<i>x</i> = 2<i>n</i>π + ${fr('5π', '4')},   <i>n</i> ∈ ℤ.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'Solve cos<sup>2</sup> <i>x</i> + sec<sup>2</sup> <i>x</i> = 2.',
            a: `Put <i>u</i> = cos<sup>2</sup> <i>x</i> > 0. Then <i>u</i> + ${fr('1', '<i>u</i>')} ≥ 2 with equality only at <i>u</i> = 1. So cos<sup>2</sup> <i>x</i> = 1, giving <i>x</i> = <i>n</i>π, <i>n</i> ∈ ℤ.`,
          },
          {
            q: 'Solve sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>y</i> = 2 sec<sup>2</sup> <i>z</i>.',
            a: `sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>y</i> ≤ 2 and 2 sec<sup>2</sup> <i>z</i> ≥ 2, so all three must be extreme: sin<sup>2</sup> <i>x</i> = 1, cos<sup>2</sup> <i>y</i> = 1, sec<sup>2</sup> <i>z</i> = 1. Hence <i>x</i> = ${ODD2('m')}, <i>y</i> = <i>n</i>π, <i>z</i> = <i>t</i>π, with <i>m</i>, <i>n</i>, <i>t</i> ∈ ℤ.`,
          },
          {
            q: 'Solve sin<sup>4</sup> <i>x</i> = 1 + tan<sup>8</sup> <i>x</i>.',
            a: '(This is Example D2 again.) No solution. sin<sup>4</sup> <i>x</i> = 1 needs cos <i>x</i> = 0, exactly where tan <i>x</i> is undefined; the two required families are disjoint.',
          },
          {
            q: `Find the general solution of the system sin <i>x</i> = ${MH}, cos <i>x</i> = −${fr('√3', '2')}.`,
            a: `Both are negative, so <i>x</i> is in Quadrant III with reference angle ${PI6}: the common principal value is ${fr('7π', '6')}, and <i>x</i> = 2<i>n</i>π + ${fr('7π', '6')}, <i>n</i> ∈ ℤ.`,
          },
          {
            q: 'Solve (sin <i>x</i> + cos <i>x</i>)<sup>1+sin 2<i>x</i></sup> = 2 for −π ≤ <i>x</i> ≤ π.',
            a: `The base satisfies |sin <i>x</i> + cos <i>x</i>| ≤ √2 and the exponent satisfies 0 ≤ 1 + sin 2<i>x</i> ≤ 2, so |base|<sup>exponent</sup> ≤ (√2)<sup>2</sup> = 2, and equality needs both extreme: sin <i>x</i> + cos <i>x</i> = ±√2 and sin 2<i>x</i> = 1. On [−π, π] this gives <i>x</i> = ${PI4} (base +√2) and <i>x</i> = −${fr('3π', '4')} (base −√2; the exponent there is exactly the integer 2, so the power is defined and equals 2). (If, as is usual for a power with a variable exponent, the base must be positive, only <i>x</i> = ${PI4} remains.)`,
          },
          {
            q: `Show that 2 cos<sup>2</sup> ${half('<i>x</i>')} sin<sup>2</sup> <i>x</i> = <i>x</i><sup>2</sup> + ${fr('1', '<i>x</i><sup>2</sup>')} has no solution for 0 < <i>x</i> ≤ ${PI2}.`,
            a: `Left side: 2 cos<sup>2</sup> ${half('<i>x</i>')} = 1 + cos <i>x</i> ≤ 2 and sin<sup>2</sup> <i>x</i> ≤ 1, so the left side is at most 2. Right side: <i>x</i><sup>2</sup> + ${fr('1', '<i>x</i><sup>2</sup>')} ≥ 2 by AM–GM, with equality only at <i>x</i> = 1. So a solution would need both sides to equal 2, requiring cos <i>x</i> = 1 and sin<sup>2</sup> <i>x</i> = 1 simultaneously: impossible. (Numerically, on (0, ${PI2}] the left side never exceeds about 1.185 while the right side never falls below 2.)`,
          },
          {
            q: `Find the general solution of the system tan <i>θ</i> = −1, cos <i>θ</i> = ${fr('1', '√2')}.`,
            a: `tan <i>θ</i> = −1 in [0, 2π) gives ${fr('3π', '4')} and ${fr('7π', '4')}; cos <i>θ</i> = ${fr('1', '√2')} gives ${PI4} and ${fr('7π', '4')}. The common value is ${fr('7π', '4')}, so <i>θ</i> = 2<i>n</i>π + ${fr('7π', '4')}, <i>n</i> ∈ ℤ (equivalently 2<i>n</i>π − ${PI4}).`,
          },
          {
            q: 'Solve sin<sup>6</sup> <i>x</i> + cos<sup>6</sup> <i>x</i> = 1.',
            a: `Write <i>s</i> = sin<sup>2</sup> <i>x</i> ∈ [0, 1], so cos<sup>2</sup> <i>x</i> = 1 − <i>s</i> and the equation is <i>s</i><sup>3</sup> + (1 − <i>s</i>)<sup>3</sup> = 1, i.e. 3<i>s</i><sup>2</sup> − 3<i>s</i> = 0, i.e. <i>s</i>(<i>s</i> − 1) = 0. Hence sin <i>x</i> = 0 or cos <i>x</i> = 0, and the two families combine into <i>x</i> = ${fr('<i>n</i>π', '2')}, <i>n</i> ∈ ℤ. (Boundedness route: sin<sup>6</sup> <i>x</i> ≤ sin<sup>2</sup> <i>x</i> and cos<sup>6</sup> <i>x</i> ≤ cos<sup>2</sup> <i>x</i>, so the sum is at most 1 with equality only when each of sin<sup>2</sup> <i>x</i>, cos<sup>2</sup> <i>x</i> is 0 or 1.)`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls specific to these two patterns' },
      {
        t: 'mistakes',
        items: [
          '<b>Stopping after one family.</b> The boundedness argument produces two conditions; the answer is their intersection, and the intersection may be empty. Always write both, then compare.',
          '<b>Ignoring the domain at the extreme points.</b> sin<sup>2</sup> <i>x</i> = 1 and “tan <i>x</i> appears in the equation” are incompatible. Check that the candidate points lie in the domain of both sides.',
          '<b>Using bounds that do not meet.</b> <i>f</i> ≤ 2 with <i>g</i> ≥ 1 proves nothing. The argument requires max <i>f</i> = min <i>g</i>; confirm the two numbers are equal before invoking it.',
          '<b>Generalising a simultaneous system too early.</b> Solve each equation in [0, 2π) first, intersect, and only then add 2<i>n</i>π. Combining two general solutions algebraically is error-prone and unnecessary.',
          '<b>Using period <i>n</i>π for a system.</b> Two independent conditions on sin <i>θ</i>, cos <i>θ</i> or tan <i>θ</i> fix the quadrant, so the period is 2π (unless every given sine or cosine value is 0), even when one of the conditions involves tan, whose period alone is π. (For conditions on multiples such as 2<i>θ</i>, solve for 2<i>θ</i> first and then divide.)',
          `<b>Forgetting that an even exponent rescues a negative base.</b> In Practice 5, (−√2)<sup>2</sup> = 2, so <i>x</i> = −${fr('3π', '4')} is a genuine solution; discarding it because the base is negative loses half the answer.`,
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Boundedness principle',
            note: 'if <i>f</i> ≤ <i>M</i> and <i>g</i> ≥ <i>M</i> everywhere, then <i>f</i> = <i>g</i> forces <i>f</i> = <i>M</i> <b>and</b> <i>g</i> = <i>M</i>. Solve both, then <b>intersect</b>, then check the domain.',
          },
          {
            f: 'Standard bounds',
            note: `|sin|, |cos| ≤ 1; |sec|, |csc| ≥ 1; <i>u</i> + ${fr('1', '<i>u</i>')} ≥ 2 for <i>u</i> > 0; <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> ∈ [−√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)]; AM–GM <i>p</i> + <i>q</i> ≥ 2√(<i>pq</i>) for <i>p</i>, <i>q</i> > 0.`,
          },
          {
            f: 'Empty intersection is a valid answer.',
            note: 'sin<sup>4</sup> <i>x</i> = 1 + tan<sup>8</sup> <i>x</i> has no solution, because sin<sup>2</sup> <i>x</i> = 1 and tan <i>x</i> = 0 cannot hold together.',
          },
          { f: 'Even powers rescue negative bases', note: '(−√2)<sup>2</sup> = 2.' },
          {
            f: 'Simultaneous systems',
            note: 'solve each equation <b>inside</b> [0, 2π) <b>only</b>, intersect the two principal lists, then add 2<i>n</i>π. Never <i>n</i>π.',
          },
          {
            f: 'Two conditions on the same angle fix the quadrant',
            note: 'which is why the period of such a system in sin <i>θ</i>, cos <i>θ</i>, tan <i>θ</i> is 2π, whatever the individual periods, unless every given sine or cosine value is 0. (Conditions on 2<i>θ</i> need 2<i>θ</i> solved first.)',
          },
          {
            f: 'Worked anchors',
            note: `sin<sup>6</sup> <i>x</i> = 1 + cos<sup>4</sup> 3<i>x</i> ⇒ <i>x</i> = ${ODD2('n')}; sin <i>θ</i> = ${MH} with tan <i>θ</i> = ${R3} ⇒ <i>θ</i> = 2<i>n</i>π + ${fr('7π', '6')}; ${LHS4} = ${RHS4} ⇒ <i>x</i> = 2<i>n</i>π + ${fr('5π', '4')} (<i>n</i> ∈ ℤ throughout).`,
          },
          {
            f: 'Golden rule',
            note: 'when the two sides of an equation are different in kind, stop solving and start bounding.',
          },
        ],
        aids: [],
      },
    ],
  },
];
