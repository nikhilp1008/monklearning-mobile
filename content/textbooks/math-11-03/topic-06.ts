import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 06: Trigonometric Equations and Solutions, pp. 234–242 of
 * the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word. The book numbers this sub-topic's sections 1 to 8, the first being
 * "Exam Relevance"; each is a part, titled from the book's own section name in
 * sentence case ("&" as "and"). Section 8 ("Common Pitfalls, Pro-Tips & Cheat
 * Sheet") is two parts: "Common pitfalls and pro-tips" and "Cheat sheet".
 * Figure 3.14 (caption p. 234, drawn p. 235) stands where its caption is
 * printed; it is redrawn in lib/diagrams/mathematics-11-03.ts. The topic has
 * no unnumbered drawing. The master general-solution formulas of the
 * "Solution-set reference and root-validity check" part are formula blocks
 * (later topics cite them). Every fraction is stacked (<frac>); no em dashes.
 */
export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 234–242 ────────────────
  {
    n: '06',
    title: 'Trigonometric Equations and Solutions',
    kalam: 'A trigonometric equation asks: for which angles does this trig statement hold?',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A trigonometric equation asks: for which angles does this trig statement hold? Because trig functions repeat forever, the answer is almost never a single number: it is an <b>infinite family</b> captured by one formula with an integer <i>n</i>. Learning to produce that family correctly, completely, and without spurious extras is the skill this topic builds, and it is the natural payoff of everything before it: you use identities (Topic 05) to simplify, signs (Topic 02) to pick valid roots, and radians (Topic 01) throughout.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards:</b> A near-certain question. Typically “find the principal solutions” (1–2 marks) and “find the general solution” (3 marks) (the book’s estimate from past papers, not official figures). NCERT §3.5 / Exercise 3.4 is the source.<br>• <b>NEET:</b> No mathematics paper; the method appears only inside physics (SHM phase, equilibrium angles).<br>• <b>JEE Main:</b> Reliable 1–2 questions (the book’s estimate from past papers, not official figures): number of solutions in an interval, <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> = <i>c</i> form, or counting roots.<br>• <b>JEE Advanced:</b> The hard versions hinge on <b>not losing or gaining roots</b>: dividing by a factor that can be zero, or squaring and importing extraneous solutions. These are exactly the traps that separate careful solvers from the rest.',
      },
      {
        t: 'p',
        html: 'The strategic point: there is a short, fixed list of <b>general-solution formulas</b>. Memorise those three master forms and the entire topic becomes “reduce the equation to sin <i>θ</i> = sin <i>α</i>, cos <i>θ</i> = cos <i>α</i>, or tan <i>θ</i> = tan <i>α</i>, then quote the formula.”',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Why one equation has infinitely many answers.</b> Ask “where is the hour hand pointing at 3 o’clock?” and the honest answer is “the same place at 3, again at 15:00, and every 12 hours forever.” Trig functions are periodic, so if one angle solves sin <i>θ</i> = <frac><num>1</num><den>2</den></frac>, then adding any whole number of full turns gives another solution, and so does the angle’s “mirror” partner. The job is never to find a solution; it is to describe <b>all</b> of them in one stroke.',
      },
      { t: 'fig', id: 'm11-03-fig-3.14' },
      {
        t: 'p',
        html: '<b>Two layers of answer.</b><br>• A <b>principal solution</b> is a solution lying in [0, 2π): the “first lap” answers. sin <i>θ</i> = <frac><num>1</num><den>2</den></frac> has two: <frac><num>π</num><den>6</den></frac> and <frac><num>5π</num><den>6</den></frac>.<br>• A <b>general solution</b> packages every solution using an integer <i>n</i>. For sin <i>θ</i> = <frac><num>1</num><den>2</den></frac> it is <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac>.',
      },
      {
        t: 'p',
        html: '<b>Indian-context analogy: train arrivals.</b> A local train reaches your platform at 6:10 and 6:50, then the pattern repeats every hour. “When is a train here?” is answered not by one time but by a timetable formula: 6∶10 + <i>n</i> hr and 6∶50 + <i>n</i> hr. The general solution of a trig equation is exactly that timetable: the recurring schedule of when the equation is “satisfied,” with <i>n</i> counting the laps.',
      },
      {
        t: 'p',
        html: '<b>The one idea behind all three master formulas.</b> Solve <i>f</i>(<i>θ</i>) = <i>f</i>(<i>α</i>) by moving everything to one side and <b>factorising with sum-to-product</b> (Topic 05). sin <i>θ</i> − sin <i>α</i> = 0 becomes a product = 0, and a product is zero exactly when a factor is zero, which hands you the periodic families directly. So the general-solution formulas are not arbitrary; they fall straight out of the identities you already have.',
      },
      {
        t: 'p',
        html: '<b>The two great dangers (and why they are conceptual, not careless).</b><br>• <b>Losing roots by dividing.</b> If you “cancel” cos <i>θ</i> from both sides of sin <i>θ</i> cos <i>θ</i> = cos <i>θ</i>, you silently throw away every solution where cos <i>θ</i> = 0. Cancelling assumes the thing you cancel is non-zero, and here it can be zero. Factor instead of divide.<br>• <b>Gaining roots by squaring.</b> Squaring both sides can make a false equation look true (since (−1)<sup>2</sup> = 1<sup>2</sup>). Every solution from a squared equation must be <b>checked back</b> in the original.',
      },
      {
        t: 'p',
        html: 'These two are the classic traps: each is a specific, fixable slip, so check for both every time you solve an equation.',
      },

      { t: 'part', title: 'Solution-set reference and root-validity check' },
      { t: 'p', html: 'Throughout this section, <i>n</i> ∈ ℤ.' },
      { t: 'p', html: '<b>(A) Zero cases.</b>' },
      {
        t: 'formula',
        kicker: 'Zero cases',
        main: 'sin <i>θ</i> = 0 ⟺ <i>θ</i> = <i>n</i>π<br>cos <i>θ</i> = 0 ⟺ <i>θ</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac><br>tan <i>θ</i> = 0 ⟺ <i>θ</i> = <i>n</i>π',
        legend: ['<i>θ</i> = the unknown angle', '<i>n</i> = any integer (<i>n</i> ∈ ℤ)'],
        note: null,
      },
      { t: 'p', html: '<b>(B) The three master general solutions.</b>' },
      {
        t: 'formula',
        kicker: 'General solution of sin <i>θ</i> = sin <i>α</i>',
        main: 'sin <i>θ</i> = sin <i>α</i> ⟺ <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>',
        legend: [
          '<i>θ</i> = the unknown angle',
          '<i>α</i> = a known angle with the same sine',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General solution of cos <i>θ</i> = cos <i>α</i>',
        main: 'cos <i>θ</i> = cos <i>α</i> ⟺ <i>θ</i> = 2<i>n</i>π ± <i>α</i>',
        legend: [
          '<i>θ</i> = the unknown angle',
          '<i>α</i> = a known angle with the same cosine',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'General solution of tan <i>θ</i> = tan <i>α</i>',
        main: 'tan <i>θ</i> = tan <i>α</i> ⟺ <i>θ</i> = <i>n</i>π + <i>α</i>',
        legend: [
          '<i>θ</i> = the unknown angle',
          '<i>α</i> = a known angle with the same tangent',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      { t: 'p', html: '<b>(C) Squared cases (one formula covers all three).</b>' },
      {
        t: 'formula',
        kicker: 'Squared cases (one formula covers all three)',
        main: 'sin<sup>2</sup> <i>θ</i> = sin<sup>2</sup> <i>α</i>, cos<sup>2</sup> <i>θ</i> = cos<sup>2</sup> <i>α</i>, tan<sup>2</sup> <i>θ</i> = tan<sup>2</sup> <i>α</i> ⟺ <i>θ</i> = <i>n</i>π ± <i>α</i>',
        legend: [
          '<i>θ</i> = the unknown angle',
          '<i>α</i> = a known angle',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      { t: 'p', html: '<b>(D) Extreme-value cases.</b>' },
      {
        t: 'formula',
        kicker: 'Extreme-value cases',
        main: 'sin <i>θ</i> = 1 ⟺ <i>θ</i> = (4<i>n</i> + 1)<frac><num>π</num><den>2</den></frac><br>sin <i>θ</i> = −1 ⟺ <i>θ</i> = (4<i>n</i> − 1)<frac><num>π</num><den>2</den></frac><br>cos <i>θ</i> = 1 ⟺ <i>θ</i> = 2<i>n</i>π<br>cos <i>θ</i> = −1 ⟺ <i>θ</i> = (2<i>n</i> + 1)π',
        legend: ['<i>θ</i> = the unknown angle', '<i>n</i> = any integer (<i>n</i> ∈ ℤ)'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(E) Linear form <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>.</b> Write <i>a</i> = <i>R</i> cos <i>α</i>, <i>b</i> = <i>R</i> sin <i>α</i> with <i>R</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), tan <i>α</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac>. Then',
      },
      {
        t: 'formula',
        kicker: 'Linear form <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>',
        main: '<i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i> ⟺ <i>R</i> cos(<i>θ</i> − <i>α</i>) = <i>c</i> ⟺ cos(<i>θ</i> − <i>α</i>) = <frac><num><i>c</i></num><den><i>R</i></den></frac>',
        legend: [
          '<i>a</i> = the coefficient of cos <i>θ</i>',
          '<i>b</i> = the coefficient of sin <i>θ</i>',
          '<i>c</i> = the constant on the right',
          '<i>R</i> = the amplitude, √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)',
          '<i>α</i> = the angle with cos <i>α</i> = <frac><num><i>a</i></num><den><i>R</i></den></frac> and sin <i>α</i> = <frac><num><i>b</i></num><den><i>R</i></den></frac>',
          '<i>θ</i> = the unknown angle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Solvable only if</b> |<i>c</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) (otherwise no solution: the max of the LHS is √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)). The maximum and minimum of <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> are +√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) and −√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>(F) Simultaneous equations.</b> If sin <i>θ</i> = sin <i>α</i> <b>and</b> cos <i>θ</i> = cos <i>α</i> hold together, then',
      },
      {
        t: 'formula',
        kicker: 'Simultaneous equations',
        main: '<i>θ</i> = 2<i>n</i>π + <i>α</i>',
        legend: [
          '<i>θ</i> = an angle with sin <i>θ</i> = sin <i>α</i> and cos <i>θ</i> = cos <i>α</i>',
          '<i>α</i> = a known angle',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '(both the value and the quadrant must match, so only the +<i>α</i> branch survives).',
      },
      {
        t: 'proc',
        title: 'Root-validity checklist (run before finalising any answer)',
        steps: [
          '<b>Did I keep the integer <i>n</i>?</b> Principal-only answers are incomplete when “general” is asked.',
          '<b>Did I divide by something that can be zero?</b> If so, restore the lost factor’s roots.',
          '<b>Did I square anywhere?</b> Back-substitute every candidate; discard those that fail.',
          '<b>Is each root in the domain?</b> Drop any where tan / sec / cot / csc is undefined.',
          '<b>For <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>: is |<i>c</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)?</b> If not, “no solution.”',
        ],
      },

      { t: 'part', title: 'Derivations of the master formulas' },
      {
        t: 'p',
        html: '<b>(a) sin <i>θ</i> = sin <i>α</i> ⇒ <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>.</b><br>Move to one side and apply sum-to-product (Topic 05):<br>sin <i>θ</i> − sin <i>α</i> = 0 ⟹ 2 cos <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> sin <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = 0.<br>A product is zero iff a factor is zero:<br>• sin <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = 0 ⇒ <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = <i>m</i>π ⇒ <i>θ</i> = 2<i>m</i>π + <i>α</i> (even multiple of π, plus <i>α</i>).<br>• cos <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> = 0 ⇒ <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> = (2<i>m</i> + 1)<frac><num>π</num><den>2</den></frac> ⇒ <i>θ</i> = (2<i>m</i> + 1)π − <i>α</i> (odd multiple of π, minus <i>α</i>).',
      },
      {
        t: 'p',
        html: 'The two cases, “even multiple +<i>α</i>” and “odd multiple −<i>α</i>”, combine compactly: when <i>n</i> is even the sign is +, when <i>n</i> is odd the sign is − and there is a π shift. That is precisely <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>.',
      },
      {
        t: 'p',
        html: '<b>(b) cos <i>θ</i> = cos <i>α</i> ⇒ <i>θ</i> = 2<i>n</i>π ± <i>α</i>.</b><br>cos <i>θ</i> − cos <i>α</i> = 0 ⟹ −2 sin <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> sin <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = 0.<br>• sin <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = 0 ⇒ <i>θ</i> = 2<i>m</i>π + <i>α</i>.<br>• sin <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> = 0 ⇒ <i>θ</i> = 2<i>m</i>π − <i>α</i>.<br>Together: <i>θ</i> = 2<i>n</i>π ± <i>α</i>. (Cosine is even, cos(−<i>α</i>) = cos <i>α</i>, which is why both signs appear with the same full-turn period.)',
      },
      {
        t: 'p',
        html: '<b>(c) tan <i>θ</i> = tan <i>α</i> ⇒ <i>θ</i> = <i>n</i>π + <i>α</i>.</b><br>tan <i>θ</i> − tan <i>α</i> = 0 ⟹ <frac><num>sin <i>θ</i> cos <i>α</i> − cos <i>θ</i> sin <i>α</i></num><den>cos <i>θ</i> cos <i>α</i></den></frac> = 0 ⟹ sin(<i>θ</i> − <i>α</i>) = 0<br>(numerator must vanish). Hence <i>θ</i> − <i>α</i> = <i>n</i>π, i.e. <i>θ</i> = <i>n</i>π + <i>α</i>. (Tangent has period π, not 2π, which is why a single <i>n</i>π, not 2<i>n</i>π, appears.)',
      },
      {
        t: 'p',
        html: '<b>(d) Why the squared case gives <i>n</i>π ± <i>α</i>.</b> sin<sup>2</sup> <i>θ</i> = sin<sup>2</sup> <i>α</i> ⇒ cos 2<i>θ</i> = cos 2<i>α</i> (using cos 2<i>x</i> = 1 − 2 sin<sup>2</sup> <i>x</i>). By (b), 2<i>θ</i> = 2<i>n</i>π ± 2<i>α</i>, so <i>θ</i> = <i>n</i>π ± <i>α</i>.',
      },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level (principal solutions)',
        q: 'Find the principal solutions of sin <i>x</i> = <frac><num>1</num><den>2</den></frac>.',
        steps: [
          'sin <i>x</i> = <frac><num>1</num><den>2</den></frac> at <i>x</i> = <frac><num>π</num><den>6</den></frac> (Q I) and, since sine is also positive in Q II, at <i>x</i> = π − <frac><num>π</num><den>6</den></frac> = <frac><num>5π</num><den>6</den></frac>. Both lie in [0, 2π).',
        ],
        ans: '<i>x</i> = <frac><num>π</num><den>6</den></frac>, <frac><num>5π</num><den>6</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level (general solution)',
        q: 'Find the general solution of cos <i>x</i> = −<frac><num>1</num><den>2</den></frac>.',
        steps: [
          'cos <i>x</i> = −<frac><num>1</num><den>2</den></frac> = cos <frac><num>2π</num><den>3</den></frac> (the angle in [0, π] whose cosine is −<frac><num>1</num><den>2</den></frac>; its reference angle is <frac><num>π</num><den>3</den></frac>). By the cosine formula,',
        ],
        ans: '<i>x</i> = 2<i>n</i>π ± <frac><num>2π</num><den>3</den></frac>, <i>n</i> ∈ ℤ.',
      },
      {
        t: 'ex',
        tag: 'NEET level (quadratic in sin x)',
        q: 'Solve 2 sin<sup>2</sup> <i>x</i> + sin <i>x</i> − 1 = 0.',
        steps: [
          'Factor as a quadratic in sin <i>x</i>: (2 sin <i>x</i> − 1)(sin <i>x</i> + 1) = 0, so sin <i>x</i> = <frac><num>1</num><den>2</den></frac> or sin <i>x</i> = −1.',
          '• sin <i>x</i> = <frac><num>1</num><den>2</den></frac> = sin <frac><num>π</num><den>6</den></frac> ⇒ <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac>.<br>• sin <i>x</i> = −1 ⇒ <i>x</i> = (4<i>n</i> − 1)<frac><num>π</num><den>2</den></frac>.',
        ],
        ans: '<i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac> or <i>x</i> = (4<i>n</i> − 1)<frac><num>π</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (linear form)',
        q: 'Solve √3 cos <i>x</i> + sin <i>x</i> = 1.',
        steps: [
          'Here <i>a</i> = √3, <i>b</i> = 1, so <i>R</i> = √(3 + 1) = 2 and tan <i>α</i> = <frac><num>1</num><den>√3</den></frac> ⇒ <i>α</i> = <frac><num>π</num><den>6</den></frac>. Rewrite:',
          '2 cos(<i>x</i> − <frac><num>π</num><den>6</den></frac>) = 1 ⟹ cos(<i>x</i> − <frac><num>π</num><den>6</den></frac>) = <frac><num>1</num><den>2</den></frac> = cos <frac><num>π</num><den>3</den></frac>.',
          '<i>x</i> − <frac><num>π</num><den>6</den></frac> = 2<i>n</i>π ± <frac><num>π</num><den>3</den></frac> ⟹ <i>x</i> = 2<i>n</i>π + <frac><num>π</num><den>6</den></frac> ± <frac><num>π</num><den>3</den></frac>.',
          '(Check |<i>c</i>| = 1 ≤ <i>R</i> = 2, so solutions exist: the solvability test from the Solution-set reference and root-validity check part.)',
        ],
        ans: '<i>x</i> = 2<i>n</i>π + <frac><num>π</num><den>2</den></frac> or <i>x</i> = 2<i>n</i>π − <frac><num>π</num><den>6</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (factor, don’t divide)',
        q: 'Solve sin 2<i>x</i> = sin <i>x</i>.',
        steps: [
          'sin 2<i>x</i> − sin <i>x</i> = 0 ⟹ 2 sin <i>x</i> cos <i>x</i> − sin <i>x</i> = 0 ⟹ sin <i>x</i>(2 cos <i>x</i> − 1) = 0.',
          '<b>Factor, do not divide by</b> sin <i>x</i>. Then sin <i>x</i> = 0 <b>or</b> cos <i>x</i> = <frac><num>1</num><den>2</den></frac>: <i>x</i> = <i>n</i>π or <i>x</i> = 2<i>n</i>π ± <frac><num>π</num><den>3</den></frac>.',
          '(Dividing by sin <i>x</i> would lose the entire <i>x</i> = <i>n</i>π family: the signature trap.)',
        ],
        ans: '<i>x</i> = <i>n</i>π or <i>x</i> = 2<i>n</i>π ± <frac><num>π</num><den>3</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (sum-to-product)',
        q: 'Solve sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> = 0.',
        steps: [
          'Group the outer terms: sin <i>x</i> + sin 5<i>x</i> = 2 sin 3<i>x</i> cos 2<i>x</i>. So',
          '2 sin 3<i>x</i> cos 2<i>x</i> + sin 3<i>x</i> = 0 ⟹ sin 3<i>x</i> (2 cos 2<i>x</i> + 1) = 0.',
          '• sin 3<i>x</i> = 0 ⇒ 3<i>x</i> = <i>n</i>π ⇒ <i>x</i> = <frac><num><i>n</i>π</num><den>3</den></frac>.<br>• cos 2<i>x</i> = −<frac><num>1</num><den>2</den></frac> = cos <frac><num>2π</num><den>3</den></frac> ⇒ 2<i>x</i> = 2<i>n</i>π ± <frac><num>2π</num><den>3</den></frac> ⇒ <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>3</den></frac>.',
        ],
        ans: '<i>x</i> = <frac><num><i>n</i>π</num><den>3</den></frac>, <i>n</i> ∈ ℤ (it includes the roots <i>n</i>π ± <frac><num>π</num><den>3</den></frac>).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (the squaring trap, done right)',
        q: 'Solve sin <i>x</i> + cos <i>x</i> = 1.',
        steps: [
          'Convert to amplitude form (avoids squaring): sin <i>x</i> + cos <i>x</i> = √2 sin(<i>x</i> + <frac><num>π</num><den>4</den></frac>), so<br>√2 sin(<i>x</i> + <frac><num>π</num><den>4</den></frac>) = 1 ⟹ sin(<i>x</i> + <frac><num>π</num><den>4</den></frac>) = <frac><num>1</num><den>√2</den></frac> = sin <frac><num>π</num><den>4</den></frac>.',
          '<i>x</i> + <frac><num>π</num><den>4</den></frac> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>4</den></frac>.',
          '• <i>n</i> even: <i>x</i> + <frac><num>π</num><den>4</den></frac> = 2<i>m</i>π + <frac><num>π</num><den>4</den></frac> ⇒ <i>x</i> = 2<i>m</i>π.<br>• <i>n</i> odd: <i>x</i> + <frac><num>π</num><den>4</den></frac> = (2<i>m</i> + 1)π − <frac><num>π</num><den>4</den></frac> ⇒ <i>x</i> = 2<i>m</i>π + <frac><num>π</num><den>2</den></frac>.',
          '<b>Contrast with squaring:</b> if instead you square sin <i>x</i> + cos <i>x</i> = 1 to get 1 + sin 2<i>x</i> = 1, i.e. sin 2<i>x</i> = 0, you obtain <i>x</i> = <frac><num><i>n</i>π</num><den>2</den></frac>, which includes <i>x</i> = π and <i>x</i> = <frac><num>3π</num><den>2</den></frac>. Both are <b>extraneous:</b> sin π + cos π = −1 and sin(<frac><num>3π</num><den>2</den></frac>) + cos(<frac><num>3π</num><den>2</den></frac>) = −1, not 1. Squaring imported false roots; only back-checking removes them.',
        ],
        ans: '<i>x</i> = 2<i>n</i>π or <i>x</i> = 2<i>n</i>π + <frac><num>π</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (quadratic in s)',
        q: 'Solve 2 sin<sup>2</sup> <i>x</i> + sin<sup>2</sup> 2<i>x</i> = 2.',
        steps: [
          'Use sin<sup>2</sup> 2<i>x</i> = 4 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i> and let <i>s</i> = sin<sup>2</sup> <i>x</i> (so cos<sup>2</sup> <i>x</i> = 1 − <i>s</i>):',
          '2<i>s</i> + 4<i>s</i>(1 − <i>s</i>) = 2 ⟹ 2<i>s</i> + 4<i>s</i> − 4<i>s</i><sup>2</sup> = 2 ⟹ 4<i>s</i><sup>2</sup> − 6<i>s</i> + 2 = 0 ⟹ 2<i>s</i><sup>2</sup> − 3<i>s</i> + 1 = 0.',
          '(2<i>s</i> − 1)(<i>s</i> − 1) = 0 ⇒ <i>s</i> = <frac><num>1</num><den>2</den></frac> or <i>s</i> = 1.',
          '• sin<sup>2</sup> <i>x</i> = <frac><num>1</num><den>2</den></frac> = sin<sup>2</sup> <frac><num>π</num><den>4</den></frac> ⇒ <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>4</den></frac>.<br>• sin<sup>2</sup> <i>x</i> = 1 ⇒ cos <i>x</i> = 0 ⇒ <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>.',
        ],
        ans: '<i>x</i> = <i>n</i>π ± <frac><num>π</num><den>4</den></frac> or <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>.',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the principal solutions of tan <i>x</i> = √3.',
            a: 'tan <i>x</i> = √3 = tan <frac><num>π</num><den>3</den></frac> → principal solutions <i>x</i> = <frac><num>π</num><den>3</den></frac>, <frac><num>4π</num><den>3</den></frac> (tangent positive in Q I and Q III).',
          },
          {
            q: 'Find the general solution of sin <i>x</i> = −<frac><num>√3</num><den>2</den></frac>.',
            a: 'sin <i>x</i> = −<frac><num>√3</num><den>2</den></frac> = sin(−<frac><num>π</num><den>3</den></frac>) → <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup>(−<frac><num>π</num><den>3</den></frac>) = <i>n</i>π − (−1)<sup><i>n</i></sup><frac><num>π</num><den>3</den></frac>.',
          },
          {
            q: 'Solve 2 cos<sup>2</sup> <i>x</i> + 3 sin <i>x</i> = 0. (Hint: write cos<sup>2</sup> <i>x</i> = 1 − sin<sup>2</sup> <i>x</i>.)',
            a: '2(1 − sin<sup>2</sup> <i>x</i>) + 3 sin <i>x</i> = 0 ⇒ 2 sin<sup>2</sup> <i>x</i> − 3 sin <i>x</i> − 2 = 0 ⇒ (2 sin <i>x</i> + 1)(sin <i>x</i> − 2) = 0. sin <i>x</i> = 2 rejected (range!); sin <i>x</i> = −<frac><num>1</num><den>2</den></frac> ⇒ <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup>(−<frac><num>π</num><den>6</den></frac>).',
          },
          {
            q: 'Solve cos <i>x</i> − sin <i>x</i> = 1.',
            a: 'Amplitude form √2 cos(<i>x</i> + <frac><num>π</num><den>4</den></frac>) = 1; <i>x</i> = 2<i>n</i>π or <i>x</i> = 2<i>n</i>π − <frac><num>π</num><den>2</den></frac> (no squaring was done; both families satisfy the original equation).',
          },
          {
            q: 'Solve tan <i>x</i> tan 2<i>x</i> = 1. (Watch the domain.)',
            a: 'tan <i>x</i> tan 2<i>x</i> = 1 ⇒ cos <i>x</i> cos 2<i>x</i> − sin <i>x</i> sin 2<i>x</i> = 0 ⇒ cos 3<i>x</i> = 0 ⇒ 3<i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac> ⇒ <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>6</den></frac>, excluding values where tan <i>x</i> or tan 2<i>x</i> is undefined. When 2<i>n</i> + 1 is a multiple of 3 this gives <i>x</i> = (2<i>k</i> + 1)<frac><num>π</num><den>2</den></frac>, where tan <i>x</i> is undefined (tan 2<i>x</i> never is on this family); so <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>6</den></frac>, <i>n</i> ∈ ℤ.',
          },
          {
            q: 'Find the general solution of sin 3<i>x</i> + sin <i>x</i> = 0.',
            a: 'sin 3<i>x</i> + sin <i>x</i> = 2 sin 2<i>x</i> cos <i>x</i> = 0 ⇒ sin 2<i>x</i> = 0 or cos <i>x</i> = 0 ⇒ <i>x</i> = <frac><num><i>n</i>π</num><den>2</den></frac> (the cos <i>x</i> = 0 family is contained in sin 2<i>x</i> = 0).',
          },
          {
            q: 'For what real <i>k</i> does 3 cos <i>x</i> + 4 sin <i>x</i> = <i>k</i> have a solution?',
            a: 'Solvable iff |<i>k</i>| ≤ √(3<sup>2</sup> + 4<sup>2</sup>) = 5, i.e. −5 ≤ <i>k</i> ≤ 5.',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The general solution of sin <i>θ</i> = sin <i>α</i> is:',
        opts: [
          {
            label: '<i>θ</i> = 2<i>n</i>π ± <i>α</i>',
            nudge: '<b>(A)</b> is the <b>cosine</b> family: using it for sine is the signature error.',
          },
          { label: '<i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>', nudge: null },
          { label: '<i>θ</i> = <i>n</i>π + <i>α</i>', nudge: '<b>(C)</b> is the <b>tangent</b> family.' },
          { label: '<i>θ</i> = 2<i>n</i>π + <i>α</i>', nudge: '<b>(D)</b> is the simultaneous case.' },
        ],
        correct: 1,
        solution:
          'Sine takes the same value at <i>α</i> and π − <i>α</i>; the families 2<i>m</i>π + <i>α</i> and (2<i>m</i> + 1)π − <i>α</i> combine as <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>.',
      },
      {
        t: 'mcq',
        q: 'The number of solutions of sin <i>x</i> = <frac><num>1</num><den>2</den></frac> in [0, 2π) is:',
        opts: [
          { label: '1', nudge: '<b>(A)</b> forgets the Q II partner.' },
          { label: '2', nudge: null },
          {
            label: '3',
            nudge:
              '<b>(C)</b> invents a third root: sine equals <frac><num>1</num><den>2</den></frac> only once in Q I and once in Q II per lap.',
          },
          {
            label: 'infinite',
            nudge: '<b>(D)</b> confuses principal with general (infinite over all ℝ, but two in one lap).',
          },
        ],
        correct: 1,
        solution: '<i>x</i> = <frac><num>π</num><den>6</den></frac>, <frac><num>5π</num><den>6</den></frac>: two principal solutions.',
      },
      {
        t: 'mcq',
        q: '5 sin <i>x</i> + 12 cos <i>x</i> = 15 has:',
        opts: [
          {
            label: 'two solutions in [0, 2π)',
            nudge: '<b>(A)</b>/<b>(D)</b> ignore the solvability bound and try to solve mechanically.',
          },
          {
            label: 'one solution',
            nudge:
              '<b>(B)</b> one root per lap needs 15 to equal the maximum 13 exactly; 15 exceeds it, so there is none.',
          },
          { label: 'no solution', nudge: null },
          {
            label: 'infinitely many',
            nudge: '<b>(A)</b>/<b>(D)</b> ignore the solvability bound and try to solve mechanically.',
          },
        ],
        correct: 2,
        solution: '√(5<sup>2</sup> + 12<sup>2</sup>) = 13 < 15, so |<i>c</i>| > <i>R</i>: impossible.',
      },
      {
        t: 'mcq',
        q: 'A student solves tan <i>x</i> = sin <i>x</i> by dividing both sides by sin <i>x</i> to get sec <i>x</i> = 1, then <i>x</i> = 2<i>n</i>π. What is missing?',
        opts: [
          {
            label: 'Nothing',
            nudge: '<b>(A)</b> <i>x</i> = π also solves it (tan π = sin π = 0), and 2<i>n</i>π misses it.',
          },
          { label: 'The roots from sin <i>x</i> = 0', nudge: null },
          {
            label: 'An extraneous root must be removed',
            nudge: '<b>(C)</b> nothing was squared, so nothing extraneous came in: roots were lost, not gained.',
          },
          {
            label: 'The cosine family',
            nudge: '<b>(D)</b> sec <i>x</i> = 1 already gives the only cosine family here, cos <i>x</i> = 1.',
          },
        ],
        correct: 1,
        solution:
          'Dividing by sin <i>x</i> discards the case sin <i>x</i> = 0 (i.e. <i>x</i> = <i>n</i>π), which does solve the original (tan <i>x</i> = sin <i>x</i> = 0). Factor instead: tan <i>x</i> − sin <i>x</i> = sin <i>x</i>(<frac><num>1</num><den>cos <i>x</i></den></frac> − 1) = 0.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dividing by a trig factor and losing roots.</b> Never cancel sin <i>x</i>, cos <i>x</i>, etc.; <b>factor</b> and set each factor to zero. Cancelling assumes the factor is non-zero, which is exactly the case you must not drop.',
          '<b>Squaring and keeping extraneous roots.</b> Squaring can manufacture false solutions. Every candidate from a squared step <b>must</b> be checked in the original equation.',
          '<b>Mixing the solution families.</b> Sine: <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>. Cosine: 2<i>n</i>π ± <i>α</i>. Tangent: <i>n</i>π + <i>α</i>. Each function has its own form; never borrow another’s.',
          '<b>Giving only principal solutions when “general” is asked.</b> The integer <i>n</i> is mandatory in a general solution; dropping it loses infinitely many answers.',
          '<b>Ignoring solvability of <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>c</i>.</b> If |<i>c</i>| > √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), declare “no solution” rather than grinding.',
          '<b>Keeping out-of-domain roots.</b> Discard any solution where the equation’s functions (tan, sec, cot, csc) are undefined.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• Strategy ladder: (1) reduce everything to a single function if possible (use identities); (2) factor to a product = 0; (3) match each factor to sin <i>θ</i> = sin <i>α</i> / cos <i>θ</i> = cos <i>α</i> / tan <i>θ</i> = tan <i>α</i>; (4) quote the formula; (5) run the root-validity checklist of the Solution-set reference and root-validity check part.<br>• For <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>c</i>, always convert to <i>R</i> cos(<i>x</i> − <i>α</i>) = <i>c</i> first; it gives both the solvability test and the clean general solution.<br>• For sums like sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i>, pair the outermost terms for sum-to-product: the middle term becomes a common factor.<br>• When a problem says “find the number of solutions in an interval,” solve generally, then count the integer values of <i>n</i> that land inside the interval.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Zeros',
            note: 'Throughout, <i>n</i> ∈ ℤ. sin <i>θ</i> = 0 ⇒ <i>θ</i> = <i>n</i>π; cos <i>θ</i> = 0 ⇒ <i>θ</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; tan <i>θ</i> = 0 ⇒ <i>θ</i> = <i>n</i>π.',
          },
          { f: 'Sine', note: 'sin <i>θ</i> = sin <i>α</i> ⇒ <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>.' },
          { f: 'Cosine', note: 'cos <i>θ</i> = cos <i>α</i> ⇒ <i>θ</i> = 2<i>n</i>π ± <i>α</i>.' },
          { f: 'Tangent', note: 'tan <i>θ</i> = tan <i>α</i> ⇒ <i>θ</i> = <i>n</i>π + <i>α</i>.' },
          { f: 'Squared', note: 'sin<sup>2</sup> <i>θ</i> = sin<sup>2</sup> <i>α</i> (etc.) ⇒ <i>θ</i> = <i>n</i>π ± <i>α</i>.' },
          {
            f: 'Extremes',
            note: 'sin <i>θ</i> = 1 ⇒ (4<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; sin <i>θ</i> = −1 ⇒ (4<i>n</i> − 1)<frac><num>π</num><den>2</den></frac>; cos <i>θ</i> = 1 ⇒ 2<i>n</i>π; cos <i>θ</i> = −1 ⇒ (2<i>n</i> + 1)π.',
          },
          {
            f: 'Linear',
            note: '<i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i> → <i>R</i> cos(<i>θ</i> − <i>α</i>) = <i>c</i>, <i>R</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>); <b>needs</b> |<i>c</i>| ≤ <i>R</i>.',
          },
          {
            f: 'Simultaneous',
            note: 'sin <i>θ</i> = sin <i>α</i> AND cos <i>θ</i> = cos <i>α</i> ⇒ <i>θ</i> = 2<i>n</i>π + <i>α</i>.',
          },
          { f: 'Golden rules', note: 'factor (never divide); back-check after squaring; keep the <i>n</i>; match the right family.' },
        ],
        aids: [],
      },
    ],
  },
];
