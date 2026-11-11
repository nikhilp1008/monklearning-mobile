import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 04: Graphs and Periodicity of Trigonometric Functions,
 * pp. 212–221 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word. The topic opens with its "1. Exam Relevance"
 * section as a part of its own, then is split at its Sections 2 to 8; the
 * "CHEAT SHEET BOX" inside Section 8 is a part of its own, "Cheat sheet".
 * Figures 3.8 (p. 213), 3.9 (p. 215), 3.10 and 3.11 (p. 218) stand where the
 * book prints their captions in the text (pp. 212, 214, 217); all are redrawn
 * in lib/diagrams/mathematics-11-03.ts. The topic has no unnumbered drawing.
 * Every fraction is stacked (<frac>); no em dashes.
 */
export const TOPICS: Topic[] = [
  // ──────────────── Topic 04 · pp. 212–221 ────────────────
  {
    n: '04',
    title: 'Graphs and Periodicity of Trigonometric Functions',
    kalam: 'A graph is the unit circle, unrolled.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'A graph turns trigonometry from algebra you compute into behaviour you can see: at a glance it shows the domain, the range, where the function is positive or negative, where it climbs or falls, and, crucially, <b>how often it repeats</b>. That last property, periodicity, is what makes trig the language of repeating phenomena in physics (waves, oscillations, AC current). Graphs also give the fastest route to “how many solutions does this equation have?”: you simply count crossings.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards:</b> Sketching sin <i>x</i>, cos <i>x</i>, tan <i>x</i> and stating period/domain/range are direct syllabus items (NCERT §3.3). Period questions (“find the period of sin 3<i>x</i>”) are common 1-markers (the book’s estimate from past papers, not official figures).<br>• <b>NEET:</b> Periodicity and amplitude feed straight into SHM and wave physics; range questions (3 + 2 sin <i>x</i>) appear frequently (the book’s estimate from past papers, not official figures).<br>• <b>JEE Main:</b> Period of composite functions (|sin <i>x</i>| + |cos <i>x</i>|), number-of-solutions-by-graph, and range problems are recurring (the book’s estimate from past papers, not official figures).<br>• <b>JEE Advanced:</b> Graphical reasoning (intersections of a trig graph with a line or parabola to count roots, and inequalities read off the curve) separates students who visualise from those who only manipulate.',
      },
      {
        t: 'p',
        html: 'The strategic point: master <b>two base periods</b> (2π for sin / cos / sec / csc, π for tan / cot) and <b>one scaling rule</b> (period = <frac><num>base</num><den>|<i>b</i>|</den></frac>), and you can read or sketch any trig graph.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>A graph is the unit circle, unrolled.</b> Imagine walking anticlockwise around the unit circle and, at each angle <i>x</i>, plotting your height (sin <i>x</i>) against the distance walked. The height rises to 1 at <i>x</i> = <frac><num>π</num><den>2</den></frac>, falls to 0 at π, dips to −1 at <frac><num>3π</num><den>2</den></frac>, returns to 0 at 2π, and then, because you start another lap, the whole pattern <b>repeats</b>. The sin graph is literally the unit circle’s <i>y</i>-coordinate unrolled along a line.',
      },
      { t: 'fig', id: 'm11-03-fig-3.8' },
      {
        t: 'p',
        html: '<b>Periodicity = “the pattern that repeats.”</b> A function is periodic if <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for all <i>x</i>, for some positive number <i>T</i>; any such <i>T</i> is <b>a</b> period, and the smallest such positive number is <b>the</b> period (the fundamental period), which is what “period” means in this topic. Sine and cosine repeat every full turn, <i>T</i> = 2π. Tangent repeats every half turn, <i>T</i> = π, because tan depends on the line through the origin (direction), and a line points “the same way” after 180°.',
      },
      {
        t: 'p',
        html: '<b>Indian-context analogy: the tide and the AC mains.</b> The sea level at a harbour rises and falls in a smooth, repeating swell: a sine wave with a period of about 12 hours. The voltage in your wall socket is a sine wave repeating 50 times a second. “How high?” is the <b>amplitude</b>; “how often?” is governed by the <b>period</b>. Reading a tide chart is reading a sine graph.',
      },
      {
        t: 'p',
        html: '<b>Stretching and shifting: what <i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> do.</b> For <i>y</i> = <i>a</i> sin(<i>bx</i> + <i>c</i>) + <i>d</i>:<br>• |<i>a</i>| stretches it vertically: the <b>amplitude</b> (how tall the wave is).<br>• <i>b</i> squeezes it horizontally: bigger |<i>b</i>| means <b>more oscillations</b> in the same space, so a <b>shorter period</b> <frac><num>2π</num><den>|<i>b</i>|</den></frac>.<br>• <i>c</i> slides it left/right: a <b>phase shift</b> of −<frac><num><i>c</i></num><den><i>b</i></den></frac> (to the left when <frac><num><i>c</i></num><den><i>b</i></den></frac> > 0), not of −<i>c</i>.<br>• <i>d</i> lifts the whole wave up/down.',
      },
      { t: 'fig', id: 'm11-03-fig-3.9' },
      {
        t: 'p',
        html: '<b>Reading inequalities off the graph.</b> To solve sin <i>x</i> ≥ <frac><num>1</num><den>2</den></frac>, draw the horizontal line <i>y</i> = <frac><num>1</num><den>2</den></frac> and shade where the sine curve sits on or above it: the answer is the set of <i>x</i>-intervals, read directly from the picture. Graphs make trig inequalities visual instead of algebraic guesswork.',
      },

      { t: 'part', title: 'Reference: periods and graph features' },
      {
        t: 'table',
        title: '(A) Periods of the six functions',
        head: ['Function', 'Period'],
        rows: [
          ['sin <i>x</i>, cos <i>x</i>', '2π'],
          ['csc <i>x</i>, sec <i>x</i>', '2π'],
          ['tan <i>x</i>, cot <i>x</i>', 'π'],
        ],
      },
      { t: 'p', html: '<b>Scaling rule:</b>' },
      {
        t: 'formula',
        kicker: 'Scaling rule',
        main: 'period of sin(<i>bx</i> + <i>c</i>), cos(<i>bx</i> + <i>c</i>), sec(<i>bx</i> + <i>c</i>), csc(<i>bx</i> + <i>c</i>) = <frac><num>2π</num><den>|<i>b</i>|</den></frac><br>period of tan(<i>bx</i> + <i>c</i>), cot(<i>bx</i> + <i>c</i>) = <frac><num>π</num><den>|<i>b</i>|</den></frac>',
        legend: [
          '<i>b</i> = the coefficient of <i>x</i> inside the bracket (<i>b</i> ≠ 0)',
          '<i>c</i> = the constant inside the bracket (it shifts the graph, not the period)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Special composites:</b> |sin <i>x</i>| and |cos <i>x</i>| have period π; sin<sup>2</sup> <i>x</i> and cos<sup>2</sup> <i>x</i> have period π (since sin<sup>2</sup> <i>x</i> = <frac><num>1 − cos 2<i>x</i></num><den>2</den></frac>); the LCM of the individual periods, when it exists, is a period of a sum, but not always the least one (e.g. |sin <i>x</i>| + |cos <i>x</i>| has least period <frac><num>π</num><den>2</den></frac>).',
      },
      {
        t: 'table',
        title: '(B) Graph features of each function',
        head: ['<i>y</i> =', 'Domain', 'Range', 'Period', 'Key features'],
        rows: [
          [
            'sin <i>x</i>',
            'ℝ',
            '[−1, 1]',
            '2π',
            'odd (origin-symmetric); 0 at <i>n</i>π; max +1 at <frac><num>π</num><den>2</den></frac> + 2<i>n</i>π',
          ],
          [
            'cos <i>x</i>',
            'ℝ',
            '[−1, 1]',
            '2π',
            'even (<i>y</i>-axis symmetric); max +1 at 2<i>n</i>π; 0 at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>',
          ],
          [
            'tan <i>x</i>',
            '<i>x</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>',
            'ℝ',
            'π',
            'increasing branches; vertical asymptotes at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>',
          ],
          ['cot <i>x</i>', '<i>x</i> ≠ <i>n</i>π', 'ℝ', 'π', 'decreasing branches; asymptotes at <i>n</i>π'],
          [
            'sec <i>x</i>',
            '<i>x</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>',
            '(−∞, −1] ∪ [1, ∞)',
            '2π',
            'U-shapes opening from the cosine extremes; asymptotes at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>',
          ],
          [
            'csc <i>x</i>',
            '<i>x</i> ≠ <i>n</i>π',
            '(−∞, −1] ∪ [1, ∞)',
            '2π',
            'U-shapes from the sine extremes; asymptotes at <i>n</i>π',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>(C) Transformation summary</b> for <i>y</i> = <i>a</i> sin(<i>bx</i> + <i>c</i>) + <i>d</i> (same for cos):',
      },
      {
        t: 'formula',
        kicker: 'Transformation summary',
        main: '<i>y</i> = <i>a</i> sin(<i>bx</i> + <i>c</i>) + <i>d</i> (same for cos)<br>amplitude = |<i>a</i>|<br>period = <frac><num>2π</num><den>|<i>b</i>|</den></frac><br>phase shift = −<frac><num><i>c</i></num><den><i>b</i></den></frac><br>vertical shift = <i>d</i><br>range = [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|]',
        legend: [
          '<i>a</i> = the factor in front of sin (or cos)',
          '<i>b</i> = the coefficient of <i>x</i> inside the bracket',
          '<i>c</i> = the constant inside the bracket',
          '<i>d</i> = the constant added outside',
        ],
        note: null,
      },

      { t: 'part', title: 'Derivations and constructions' },
      {
        t: 'p',
        html: '<b>(a) Why sin and cos have period 2π.</b> A point on the unit circle returns to the same location only after a whole turn, i.e. after adding 2π to the angle: sin(<i>x</i> + 2π) = sin <i>x</i>, cos(<i>x</i> + 2π) = cos <i>x</i>, and no smaller positive shift works. Hence <i>T</i> = 2π.',
      },
      {
        t: 'p',
        html: '<b>(b) Why tan has period π.</b> tan <i>x</i> = <frac><num>sin <i>x</i></num><den>cos <i>x</i></den></frac>. Adding π flips the signs of both sine and cosine (sin(<i>x</i> + π) = −sin <i>x</i>, cos(<i>x</i> + π) = −cos <i>x</i>), and the two minus signs cancel in the ratio: tan(<i>x</i> + π) = <frac><num>−sin <i>x</i></num><den>−cos <i>x</i></den></frac> = tan <i>x</i>. So tangent already repeats after π.',
      },
      {
        t: 'p',
        html: '<b>(c) The scaling rule.</b> If sin <i>x</i> repeats every 2π, then sin(<i>bx</i>) completes one cycle when <i>bx</i> increases by 2π, i.e. when <i>x</i> increases by <frac><num>2π</num><den>|<i>b</i>|</den></frac>. Hence period = <frac><num>2π</num><den>|<i>b</i>|</den></frac>. (The constant <i>c</i> only shifts the graph; it does not change the period.)',
      },
      {
        t: 'p',
        html: '<b>(d) Constructing <i>y</i> = sin <i>x</i> from the value table.</b> Plot the standard/quadrantal points (0, 0), (<frac><num>π</num><den>6</den></frac>, <frac><num>1</num><den>2</den></frac>), (<frac><num>π</num><den>2</den></frac>, 1), (π, 0), (<frac><num>3π</num><den>2</den></frac>, −1), (2π, 0) and join with a smooth wave; then repeat left and right by periodicity. Cosine is the same wave shifted left by <frac><num>π</num><den>2</den></frac> (since cos <i>x</i> = sin(<i>x</i> + <frac><num>π</num><den>2</den></frac>)).',
      },
      { t: 'fig', id: 'm11-03-fig-3.10' },
      {
        t: 'p',
        html: '<b>(e) Why sec/csc have the gap (−1, 1).</b> sec <i>x</i> = <frac><num>1</num><den>cos <i>x</i></den></frac>; since |cos <i>x</i>| ≤ 1, its reciprocal has |sec <i>x</i>| ≥ 1, and where cos <i>x</i> → 0 the secant shoots to ±∞ (vertical asymptotes). The graph is a series of U-shapes sitting in the “caps” of the cosine wave.',
      },
      { t: 'fig', id: 'm11-03-fig-3.11' },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level (periods)',
        q: 'Find the period of (a) sin 3<i>x</i>, (b) tan 2<i>x</i>, (c) cos <frac><num><i>x</i></num><den>2</den></frac>.',
        steps: [],
        ans: '(a) <frac><num>2π</num><den>3</den></frac>, (b) <frac><num>π</num><den>2</den></frac>, (c) <frac><num>2π</num><den><frac><num>1</num><den>2</den></frac></den></frac> = 4π.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level (range from transformation)',
        q: 'Find the range and period of <i>f</i>(<i>x</i>) = 3 + 2 sin <i>x</i>.',
        steps: [
          'Amplitude 2, vertical shift 3: range = [3 − 2, 3 + 2] = [1, 5]. The sin <i>x</i> is unscaled in <i>x</i>, so period = 2π.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level (amplitude/period)',
        q: 'State the amplitude and period of <i>y</i> = −4 cos(<frac><num><i>x</i></num><den>3</den></frac>).',
        steps: [
          'Amplitude = |−4| = 4; period = <frac><num>2π</num><den><frac><num>1</num><den>3</den></frac></den></frac> = 6π. (The minus flips the graph vertically but does not change amplitude or period.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (composite period)',
        q: 'Find the period of <i>f</i>(<i>x</i>) = |sin <i>x</i>| + |cos <i>x</i>|.',
        steps: [
          'Each of |sin <i>x</i>|, |cos <i>x</i>| has period π. But |cos <i>x</i>| = |sin(<i>x</i> + <frac><num>π</num><den>2</den></frac>)|, and the sum repeats after only <frac><num>π</num><den>2</den></frac>: <i>f</i>(<i>x</i> + <frac><num>π</num><den>2</den></frac>) = |sin(<i>x</i> + <frac><num>π</num><den>2</den></frac>)| + |cos(<i>x</i> + <frac><num>π</num><den>2</den></frac>)| = |cos <i>x</i>| + |sin <i>x</i>| = <i>f</i>(<i>x</i>). No smaller period works, so',
        ],
        ans: '<i>T</i> = <frac><num>π</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (period via identity)',
        q: 'Find the period of <i>f</i>(<i>x</i>) = sin<sup>2</sup> <i>x</i>.',
        steps: [
          'sin<sup>2</sup> <i>x</i> = <frac><num>1 − cos 2<i>x</i></num><den>2</den></frac>, and cos 2<i>x</i> has period <frac><num>2π</num><den>2</den></frac> = π. So <i>T</i> = π (not 2π).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (count solutions graphically)',
        q: 'How many solutions does |sin <i>x</i>| = |cos <i>x</i>| have in [0, 2π]?',
        steps: [
          '|sin <i>x</i>| = |cos <i>x</i>| ⟺ |tan <i>x</i>| = 1 ⟺ <i>x</i> = <frac><num>π</num><den>4</den></frac>, <frac><num>3π</num><den>4</den></frac>, <frac><num>5π</num><den>4</den></frac>, <frac><num>7π</num><den>4</den></frac>: the four points in [0, 2π] where the two “tent” graphs intersect.',
        ],
        ans: '4 solutions.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (inequality off the graph)',
        q: 'Solve sin <i>x</i> ≥ <frac><num>1</num><den>2</den></frac> for <i>x</i> ∈ [0, 2π], and give the general solution.',
        steps: [
          'On [0, 2π] the sine curve is on or above <frac><num>1</num><den>2</den></frac> between its two crossings <frac><num>π</num><den>6</den></frac> and <frac><num>5π</num><den>6</den></frac>:<br><i>x</i> ∈ [<frac><num>π</num><den>6</den></frac>, <frac><num>5π</num><den>6</den></frac>].',
          'By periodicity, the general solution is <i>x</i> ∈ [2<i>n</i>π + <frac><num>π</num><den>6</den></frac>, 2<i>n</i>π + <frac><num>5π</num><den>6</den></frac>], <i>n</i> ∈ ℤ.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the period of: (a) cos 4<i>x</i>, (b) cot <frac><num><i>x</i></num><den>2</den></frac>, (c) sin(2<i>x</i> + 1).',
            a: '(a) <frac><num>2π</num><den>4</den></frac> = <frac><num>π</num><den>2</den></frac>; (b) <frac><num>π</num><den><frac><num>1</num><den>2</den></frac></den></frac> = 2π; (c) <frac><num>2π</num><den>2</den></frac> = π.',
          },
          {
            q: 'State domain and range of <i>y</i> = 2 sec <i>x</i>.',
            a: 'Domain <i>x</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; range (−∞, −2] ∪ [2, ∞) (the factor 2 widens the gap to (−2, 2)).',
          },
          {
            q: 'Find the amplitude, period and range of <i>y</i> = 5 sin(2<i>x</i> − <frac><num>π</num><den>3</den></frac>) + 1.',
            a: 'Amplitude 5; period <frac><num>2π</num><den>2</den></frac> = π; range [1 − 5, 1 + 5] = [−4, 6].',
          },
          {
            q: 'Find the period of <i>f</i>(<i>x</i>) = cos<sup>2</sup> <i>x</i> + sin <i>x</i>. (Hint: combine periods by LCM.)',
            a: 'cos<sup>2</sup> <i>x</i> has period π, sin <i>x</i> has period 2π; LCM = 2π.',
          },
          {
            q: 'Solve cos <i>x</i> ≤ −<frac><num>1</num><den>2</den></frac> for <i>x</i> ∈ [0, 2π].',
            a: 'cos <i>x</i> ≤ −<frac><num>1</num><den>2</den></frac> between <frac><num>2π</num><den>3</den></frac> and <frac><num>4π</num><den>3</den></frac>: <i>x</i> ∈ [<frac><num>2π</num><den>3</den></frac>, <frac><num>4π</num><den>3</den></frac>].',
          },
          {
            q: 'How many solutions does sin <i>x</i> = <frac><num><i>x</i></num><den>10</den></frac> have for <i>x</i> ≥ 0? (Reason graphically.)',
            a: 'The line <i>y</i> = <frac><num><i>x</i></num><den>10</den></frac> rises slowly; it meets the sine wave while <frac><num><i>x</i></num><den>10</den></frac> ≤ 1, i.e. up to <i>x</i> = 10. Counting intersections of the line with the positive humps of sin <i>x</i> in [0, 10] gives <b>4</b> solutions (including <i>x</i> = 0). (Standard graphical count.)',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The period of sin 5<i>x</i> is:',
        opts: [
          { label: '5 · 2π', nudge: '<b>(A)</b> multiplies by <i>b</i> instead of dividing: the trap.' },
          { label: '<frac><num>2π</num><den>5</den></frac>', nudge: null },
          { label: '2π', nudge: '<b>(C)</b> is the period of sin <i>x</i>: it ignores the 5 inside.' },
          { label: '<frac><num>π</num><den>5</den></frac>', nudge: '<b>(D)</b> uses the tan base π for a sine.' },
        ],
        correct: 1,
        solution: 'Period = <frac><num>2π</num><den>|<i>b</i>|</den></frac> = <frac><num>2π</num><den>5</den></frac>.',
      },
      {
        t: 'mcq',
        q: 'The range of <i>y</i> = 3 cos <i>x</i> − 2 is:',
        opts: [
          { label: '[−2, 3]', nudge: '<b>(A)</b> takes the shift −2 and the amplitude 3 as the two ends, instead of −2 − 3 and −2 + 3.' },
          { label: '[−5, 1]', nudge: null },
          { label: '[−1, 5]', nudge: '<b>(C)</b> gets the sign of the shift wrong.' },
          { label: '[−3, 3]', nudge: '<b>(D)</b> ignores the shift.' },
        ],
        correct: 1,
        solution: 'Amplitude 3, shift −2: range [−2 − 3, −2 + 3] = [−5, 1].',
      },
      {
        t: 'mcq',
        q: '<i>y</i> = tan <i>x</i> has vertical asymptotes at:',
        opts: [
          {
            label: '<i>x</i> = <i>n</i>π',
            nudge: '<b>(A)</b> are the zeros of tan <i>x</i>, not its asymptotes (that’s cot <i>x</i>’s asymptotes).',
          },
          { label: '<i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>', nudge: null },
          {
            label: '<i>x</i> = 2<i>n</i>π',
            nudge: '<b>(C)</b> at <i>x</i> = 2<i>n</i>π, cos <i>x</i> = 1 and tan <i>x</i> = 0: zeros, not asymptotes.',
          },
          {
            label: 'nowhere',
            nudge: '<b>(D)</b> tan <i>x</i> = <frac><num>sin <i>x</i></num><den>cos <i>x</i></den></frac> blows up wherever cos <i>x</i> = 0.',
          },
        ],
        correct: 1,
        solution: 'Where cos <i>x</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'The period of tan 3<i>x</i> is:',
        opts: [
          { label: '<frac><num>2π</num><den>3</den></frac>', nudge: '<b>(A)</b> uses the sine/cosine base 2π: the trap.' },
          { label: '<frac><num>π</num><den>3</den></frac>', nudge: null },
          {
            label: '2π',
            nudge: '<b>(C)</b> is the period of sin <i>x</i> and cos <i>x</i>: it ignores both the 3 and tangent’s base π.',
          },
          { label: '3π', nudge: '<b>(D)</b> multiplies the base π by 3 instead of dividing.' },
        ],
        correct: 1,
        solution: 'Tangent base period is π, scaled by <frac><num>1</num><den>|<i>b</i>|</den></frac>: <frac><num>π</num><den>3</den></frac>.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Multiplying instead of dividing for the period.</b> sin(<i>bx</i>) has period <frac><num>2π</num><den>|<i>b</i>|</den></frac>, not 2π · <i>b</i>. Bigger |<i>b</i>| ⇒ shorter period.',
          '<b>Using 2π for tangent.</b> tan and cot have base period π.',
          '<b>Period of a sum.</b> The LCM of the parts (when it exists) is a period of the sum; check for a smaller one, e.g. |sin <i>x</i>| + |cos <i>x</i>| has period <frac><num>π</num><den>2</den></frac>, not π.',
          '<b>Forgetting the vertical shift in range.</b> Range of <i>a</i> sin <i>x</i> + <i>d</i> is [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|], not [−|<i>a</i>|, |<i>a</i>|].',
          '<b>Swapping asymptote locations.</b> tan, sec blow up where cos = 0 (odd <frac><num>π</num><den>2</den></frac>); cot, csc where sin = 0 (<i>n</i>π).',
          '<b>Inequality endpoints.</b> Decide open vs closed by whether the inequality is strict; read both crossing points carefully.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• Sketch lightly from five points per period (the quadrantal values) and join smoothly: faster and less error-prone than plotting many points.<br>• Amplitude and vertical shift are read off instantly; period needs the <frac><num>base</num><den>|<i>b</i>|</den></frac> rule; phase needs −<frac><num><i>c</i></num><den><i>b</i></den></frac>.<br>• For “number of solutions,” graph both sides and <b>count intersections</b>: far faster than solving algebraically.<br>• For trig inequalities, draw the horizontal cut line and shade; never guess intervals.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Base periods', note: 'sin, cos, sec, csc ⇒ 2π; tan, cot ⇒ π.' },
          {
            f: 'Scaling',
            note: 'period of <i>f</i>(<i>bx</i> + <i>c</i>) = <frac><num>base</num><den>|<i>b</i>|</den></frac>; <i>c</i> only shifts.',
          },
          {
            f: 'Special',
            note: '|sin <i>x</i>|, |cos <i>x</i>|, sin<sup>2</sup> <i>x</i>, cos<sup>2</sup> <i>x</i> ⇒ π; sum ⇒ LCM (when it exists; may not be least).',
          },
          {
            f: 'Transform <i>a</i> sin(<i>bx</i> + <i>c</i>) + <i>d</i>',
            note: 'amplitude |<i>a</i>|, period <frac><num>2π</num><den>|<i>b</i>|</den></frac>, phase −<frac><num><i>c</i></num><den><i>b</i></den></frac>, shift <i>d</i>, range [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|].',
          },
          { f: 'Asymptotes', note: 'tan, sec at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; cot, csc at <i>n</i>π.' },
          { f: 'Ranges', note: 'sin, cos ∈ [−1, 1]; sec, csc ∈ (−∞, −1] ∪ [1, ∞); tan, cot ∈ ℝ.' },
          { f: 'Inequalities/roots', note: 'draw the cut line / second curve and read intervals or count crossings.' },
          { f: 'Golden rule', note: 'divide (don’t multiply) for period; tan’s period is π.' },
        ],
        aids: [],
      },
    ],
  },
];
