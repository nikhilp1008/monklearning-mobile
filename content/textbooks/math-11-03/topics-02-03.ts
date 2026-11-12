import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 02 and 03 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word:
 * Topic 02 "Trigonometric Functions and Quadrant Signs", pp. 192–202;
 * Topic 03 "Standard Values, Even-Odd Nature & Allied Angles", pp. 203–211.
 * Each sub-topic's numbered sections 1 to 8 are its parts ("1. Exam Relevance"
 * is the first); section 8 "Common Pitfalls, Pro-Tips & Cheat Sheet" is two
 * parts, "Common pitfalls and pro-tips" and "Cheat sheet".
 * Figures 3.4 (p. 193) and 3.5 (p. 195) are placed where Topic 02 calls them
 * (pp. 192, 194); Figures 3.6 (p. 204) and 3.7 (p. 206) where Topic 03 calls
 * them (pp. 203, 205). No unnumbered drawing on these pages.
 * Every fraction is stacked (<frac>); no em dashes (repunctuated).
 */
export const TOPICS: Topic[] = [
  // ──────────────── Topic 02 · pp. 192–202 ────────────────
  {
    n: '02',
    title: 'Trigonometric Functions and Quadrant Signs',
    kalam: 'Once an angle can be anything, you must know the sign the function takes in each quadrant.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'In earlier classes you met sin, cos, tan only as ratios of sides in a right triangle, and a right triangle can only hold angles between 0° and 90°. This topic performs the single most important upgrade in the chapter: it <b>extends the trigonometric ratios into trigonometric functions defined for every angle</b> (obtuse, reflex, negative, beyond 360°) using the unit circle. Once an angle can be anything, you must know the <b>sign</b> the function takes in each quadrant. That sign question is where most marks are won or lost.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards:</b> The classic 2–3 mark question: “If sin <i>x</i> = <frac><num>3</num><den>5</den></frac> and <i>x</i> lies in the second quadrant, find the other five trigonometric functions.” It is almost impossible to sit a board paper without a sign-determination question (the book’s estimate from past papers, not official figures). Domain/range also appears in 1-markers.<br>• <b>NEET:</b> Sign work is embedded in evaluating expressions at large or negative angles (cos 1170°, csc(−1410°)) and in physics (phase angles, projectile components) where a dropped sign flips a vector.<br>• <b>JEE Main:</b> Range constraints become a filter: “for how many real <i>x</i> does sin <i>x</i> = <frac><num><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></num><den>2<i>ab</i></den></frac> hold?” rewards the student who knows |sin <i>x</i>| ≤ 1 instantly and ignores the algebra.<br>• <b>JEE Advanced:</b> Sign + domain + range combine inside multi-step identity and equation problems; the trig here is a silent prerequisite, and a single sign error propagates to a wrong final answer.',
      },
      {
        t: 'p',
        html: 'This topic is the <b>load-bearing bridge</b> to everything after it: identities, equations, graphs, and Class 12 calculus all assume you can place a function in the right quadrant with the right sign without thinking.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>From triangle to circle: why we change the picture.</b> A right triangle caps the angle at 90°. To talk about sin 210° or cos(−40°), we need a frame with no such cap. That frame is the <b>unit circle</b>: a circle of radius 1 centred at the origin. Stand a ray from the origin, rotate it to angle <i>θ</i> (anticlockwise positive, as fixed in Topic 01), and look at where its tip <i>P</i> lands.',
      },
      { t: 'fig', id: 'm11-03-fig-3.4' },
      {
        t: 'p',
        html: '<b>The single idea that runs the whole topic:</b> for a point <i>P</i>(<i>a</i>, <i>b</i>) on the unit circle at angle <i>θ</i>,<br>cos <i>θ</i> = <i>a</i> (the <i>x</i>-coordinate),   sin <i>θ</i> = <i>b</i> (the <i>y</i>-coordinate).',
      },
      {
        t: 'p',
        html: 'Everything (signs, ranges, quadrantal values, the Pythagorean identity) falls out of “cosine is the across-coordinate, sine is the up-coordinate.”',
      },
      {
        t: 'p',
        html: '<b>Indian-context analogy: the ceiling fan blade.</b> Picture a mark on the tip of a slowly rotating ceiling fan, with the centre at the origin. As the blade sweeps round:<br>• its <b>height above/below centre</b> is sin <i>θ</i>: positive in the top half (Quadrants I, II), negative in the bottom half (III, IV);<br>• its <b>left/right position</b> is cos <i>θ</i>: positive on the right half (I, IV), negative on the left half (II, III).',
      },
      {
        t: 'p',
        html: 'You don’t memorise these signs; you read them off the fan. The blade tip never goes more than one radius from the centre, which is exactly why |sin <i>θ</i>| ≤ 1 and |cos <i>θ</i>| ≤ 1: a physical impossibility becomes a mathematical range.',
      },
      {
        t: 'p',
        html: '<b>The signs, organised: “All Silver Tea Cups.”</b> Going anticlockwise through Quadrants I → II → III → IV, the functions that are <b>positive</b> are:<br>• <b>Q I: All</b> are positive.<br>• <b>Q II: Silver (Sine)</b> and its reciprocal cosec are positive.<br>• <b>Q III: Tea (Tangent)</b> and its reciprocal cot are positive.<br>• <b>Q IV: Cups (Cosine)</b> and its reciprocal sec are positive.',
      },
      { t: 'fig', id: 'm11-03-fig-3.5' },
      {
        t: 'p',
        html: 'This is the most-used mnemonic in Indian classrooms (“All Silver Tea Cups,” equivalently “Add Sugar To Coffee”). The logic underneath it: a reciprocal has the <b>same sign</b> as its parent (csc shares sin’s sign, sec shares cos’s), and tan = <frac><num>sin</num><den>cos</den></frac> is positive exactly when sine and cosine share a sign (Q I and Q III).',
      },
      {
        t: 'p',
        html: '<b>Second analogy: the compass / clock face.</b> 0° points East (right), 90° North (up), 180° West, 270° South. The up-down reading is sine; the east-west reading is cosine. At the four “corner” directions, one coordinate is 0 and the other is ±1; these are the <b>quadrantal values</b> you must know cold.',
      },

      { t: 'part', title: 'Definitions, domain and range' },
      {
        t: 'p',
        html: '<b>General definition (any radius).</b> Take any point <i>P</i>(<i>x</i>, <i>y</i>) on the terminal side of angle <i>θ</i>, at distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) > 0 from the origin. The six functions are:',
      },
      {
        t: 'formula',
        kicker: 'General definition (any radius)',
        main: 'sin <i>θ</i> = <frac><num><i>y</i></num><den><i>r</i></den></frac><br>cos <i>θ</i> = <frac><num><i>x</i></num><den><i>r</i></den></frac><br>tan <i>θ</i> = <frac><num><i>y</i></num><den><i>x</i></den></frac><br>csc <i>θ</i> = <frac><num><i>r</i></num><den><i>y</i></den></frac><br>sec <i>θ</i> = <frac><num><i>r</i></num><den><i>x</i></den></frac><br>cot <i>θ</i> = <frac><num><i>x</i></num><den><i>y</i></den></frac>',
        legend: [
          '<i>θ</i> = the angle, measured from the positive <i>x</i>-axis',
          '<i>x</i>, <i>y</i> = coordinates of a point <i>P</i> on its terminal side',
          '<i>r</i> = distance of <i>P</i> from the origin, √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) > 0',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Because <i>r</i> > 0 always, the <b>sign</b> of each function is fixed entirely by the signs of <i>x</i> and <i>y</i>, i.e. by the quadrant. This is the whole engine of quadrant signs.',
      },
      { t: 'p', html: '<b>Reciprocal and quotient relations (memorise the pairings).</b>' },
      {
        t: 'formula',
        kicker: 'Reciprocal and quotient relations',
        main: 'csc <i>θ</i> = <frac><num>1</num><den>sin <i>θ</i></den></frac><br>sec <i>θ</i> = <frac><num>1</num><den>cos <i>θ</i></den></frac><br>cot <i>θ</i> = <frac><num>1</num><den>tan <i>θ</i></den></frac><br>tan <i>θ</i> = <frac><num>sin <i>θ</i></num><den>cos <i>θ</i></den></frac><br>cot <i>θ</i> = <frac><num>cos <i>θ</i></num><den>sin <i>θ</i></den></frac>',
        legend: ['<i>θ</i> = any angle at which both sides are defined'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Pairing trap:</b> cosec pairs with <b>sine</b> (not cosine, despite the “co”), and sec pairs with <b>cosine</b>. Read the third letter: cosec → <b>s</b> → sine; sec → <b>c</b> → cosine.',
      },
      { t: 'p', html: '<b>Pythagorean identities (the three).</b>' },
      {
        t: 'formula',
        kicker: 'Pythagorean identities',
        main: 'sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1<br>1 + tan<sup>2</sup> <i>θ</i> = sec<sup>2</sup> <i>θ</i><br>1 + cot<sup>2</sup> <i>θ</i> = csc<sup>2</sup> <i>θ</i>',
        legend: ['<i>θ</i> = any angle at which both sides are defined'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Domain & Range: a built-in sanity check.</b> In physics we run dimensional analysis; in trigonometry the range sanity check catches a huge fraction of errors. A value outside the range is as impossible as a negative mass.',
      },
      {
        t: 'table',
        title: null,
        head: ['Function', 'Domain (all real <i>θ</i> except…)', 'Range'],
        rows: [
          ['sin <i>θ</i>', 'all <i>θ</i> ∈ ℝ', '[−1, 1]'],
          ['cos <i>θ</i>', 'all <i>θ</i> ∈ ℝ', '[−1, 1]'],
          ['tan <i>θ</i>', '<i>θ</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>', '(−∞, ∞)'],
          ['cot <i>θ</i>', '<i>θ</i> ≠ <i>n</i>π', '(−∞, ∞)'],
          ['sec <i>θ</i>', '<i>θ</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>', '(−∞, −1] ∪ [1, ∞)'],
          ['csc <i>θ</i>', '<i>θ</i> ≠ <i>n</i>π', '(−∞, −1] ∪ [1, ∞)'],
        ],
      },
      {
        t: 'p',
        html: '(<i>n</i> ∈ ℤ.) Two ideas to lock: <b>sine and cosine are bounded in</b> [−1, 1] (the blade can’t leave the circle), and <b>sec and cosec can never lie strictly between −1 and</b> 1 (they’re reciprocals of things ≤ 1 in magnitude, so they’re ≥ 1 in magnitude). tan and cot sweep all real numbers.',
      },
      { t: 'p', html: '<b>Signs by quadrant (the master table).</b>' },
      {
        t: 'table',
        title: null,
        head: ['Quadrant', 'sin / csc', 'cos / sec', 'tan / cot'],
        rows: [
          ['I', '+', '+', '+'],
          ['II', '+', '−', '−'],
          ['III', '−', '−', '+'],
          ['IV', '−', '+', '−'],
        ],
      },
      { t: 'p', html: '<b>Quadrantal values (angles on the axes).</b>' },
      {
        t: 'table',
        title: null,
        head: ['<i>θ</i>', '0', '<frac><num>π</num><den>2</den></frac>', 'π', '<frac><num>3π</num><den>2</den></frac>', '2π'],
        rows: [
          ['sin <i>θ</i>', '0', '1', '0', '−1', '0'],
          ['cos <i>θ</i>', '1', '0', '−1', '0', '1'],
          ['tan <i>θ</i>', '0', 'undef.', '0', 'undef.', '0'],
        ],
      },

      { t: 'part', title: 'Derivations of the core relations' },
      {
        t: 'p',
        html: '<b>(a) Extending ratios to functions via the unit circle.</b><br>Place <i>P</i>(<i>a</i>, <i>b</i>) on the unit circle (<i>r</i> = 1) at angle <i>x</i> measured anticlockwise from the positive <i>x</i>-axis. By the general definition with <i>r</i> = 1,<br>cos <i>x</i> = <frac><num><i>a</i></num><den>1</den></frac> = <i>a</i>,   sin <i>x</i> = <frac><num><i>b</i></num><den>1</den></frac> = <i>b</i>.<br>For an acute angle in Quadrant I this reproduces the old right-triangle ratios exactly (the perpendicular from <i>P</i> to the <i>x</i>-axis builds a right triangle with hypotenuse 1). But now <i>x</i> may be any real number: the definition no longer needs a triangle, so obtuse, reflex, and negative angles are all admitted. This is the conceptual leap of the topic.',
      },
      {
        t: 'p',
        html: '<b>(b) The first Pythagorean identity: straight from the circle.</b><br><i>P</i>(<i>a</i>, <i>b</i>) lies on the unit circle, so it satisfies the circle’s equation <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 1. Substituting <i>a</i> = cos <i>x</i>, <i>b</i> = sin <i>x</i>:<br>sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1.<br>No memorisation required: it is the equation of the circle, rewritten.',
      },
      {
        t: 'p',
        html: '<b>(c) The other two Pythagorean identities: by division.</b><br>Divide sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1 throughout by cos<sup>2</sup> <i>x</i> (valid where cos <i>x</i> ≠ 0):<br><frac><num>sin<sup>2</sup> <i>x</i></num><den>cos<sup>2</sup> <i>x</i></den></frac> + <frac><num>cos<sup>2</sup> <i>x</i></num><den>cos<sup>2</sup> <i>x</i></den></frac> = <frac><num>1</num><den>cos<sup>2</sup> <i>x</i></den></frac> ⟹ tan<sup>2</sup> <i>x</i> + 1 = sec<sup>2</sup> <i>x</i>.<br>Divide instead by sin<sup>2</sup> <i>x</i> (where sin <i>x</i> ≠ 0):<br>1 + cot<sup>2</sup> <i>x</i> = csc<sup>2</sup> <i>x</i>.<br>So all three identities descend from the one circle equation. <b>Memory hook:</b> tan goes with sec, and cot goes with csc: 1 + tan<sup>2</sup> <i>θ</i> = sec<sup>2</sup> <i>θ</i>, 1 + cot<sup>2</sup> <i>θ</i> = csc<sup>2</sup> <i>θ</i> (the two “co” functions stay together).',
      },
      {
        t: 'p',
        html: '<b>(d) Why the signs are what they are.</b><br>From the general definition, <i>r</i> > 0 always, so:<br>sign(sin <i>θ</i>) = sign(<i>y</i>),   sign(cos <i>θ</i>) = sign(<i>x</i>),   sign(tan <i>θ</i>) = sign(<frac><num><i>y</i></num><den><i>x</i></den></frac>).<br>• Q I: <i>x</i> > 0, <i>y</i> > 0 → all +.<br>• Q II: <i>x</i> < 0, <i>y</i> > 0 → sin +, cos −, tan −.<br>• Q III: <i>x</i> < 0, <i>y</i> < 0 → sin −, cos −, tan + (two negatives divide to +).<br>• Q IV: <i>x</i> > 0, <i>y</i> < 0 → sin −, cos +, tan −.<br>Reciprocals inherit their parent’s sign. This derives “All Silver Tea Cups” rather than relying on the mnemonic blind.',
      },
      {
        t: 'p',
        html: '<b>(e) Variation across quadrants (how values move, not just their sign).</b><br>• sin <i>x</i>: rises 0 → 1 in Q I, falls 1 → 0 in Q II, falls 0 → −1 in Q III, rises −1 → 0 in Q IV.<br>• cos <i>x</i>: falls 1 → 0 in Q I, falls 0 → −1 in Q II, rises −1 → 0 in Q III, rises 0 → 1 in Q IV.<br>This “rise/fall” pattern is the seed of the sine and cosine graphs in Topic 04.',
      },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level (the signature problem)',
        q: 'If sin <i>x</i> = <frac><num>3</num><den>5</den></frac> and <i>x</i> lies in the second quadrant, find the values of the other five functions.',
        steps: [
          'Use sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1:<br>cos<sup>2</sup> <i>x</i> = 1 − (<frac><num>3</num><den>5</den></frac>)<sup>2</sup> = 1 − <frac><num>9</num><den>25</den></frac> = <frac><num>16</num><den>25</den></frac> ⟹ cos <i>x</i> = ±<frac><num>4</num><den>5</den></frac>.',
          '<b>The sign decision is the whole question.</b> <i>x</i> is in Quadrant II, where cosine is <b>negative</b>:<br>cos <i>x</i> = −<frac><num>4</num><den>5</den></frac>.',
          'Then:<br>tan <i>x</i> = <frac><num>sin <i>x</i></num><den>cos <i>x</i></den></frac> = <frac><num><frac><num>3</num><den>5</den></frac></num><den>−<frac><num>4</num><den>5</den></frac></den></frac> = −<frac><num>3</num><den>4</den></frac>,   cot <i>x</i> = −<frac><num>4</num><den>3</den></frac>,   sec <i>x</i> = −<frac><num>5</num><den>4</den></frac>,   csc <i>x</i> = <frac><num>5</num><den>3</den></frac>.',
          '(Writing cos <i>x</i> = +<frac><num>4</num><den>5</den></frac> here is the single most common board mistake.)',
        ],
        ans: 'cos <i>x</i> = −<frac><num>4</num><den>5</den></frac>, tan <i>x</i> = −<frac><num>3</num><den>4</den></frac>, cot <i>x</i> = −<frac><num>4</num><den>3</den></frac>, sec <i>x</i> = −<frac><num>5</num><den>4</den></frac>, csc <i>x</i> = <frac><num>5</num><den>3</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level (quadrantal + reduction)',
        q: 'Find the value of sin <frac><num>3π</num><den>2</den></frac> + cos π − tan π.',
        steps: [
          'From the quadrantal table: sin <frac><num>3π</num><den>2</den></frac> = −1, cos π = −1, tan π = 0.',
        ],
        ans: '−1 + (−1) − 0 = −2.',
      },
      {
        t: 'ex',
        tag: 'NEET level (sign at a large angle)',
        q: 'Determine the sign of cos 1170°.',
        steps: [
          'Reduce modulo 360°: 1170° = 3(360°) + 90°, and since 3 × 360° = 1080° we have 1170° − 1080° = 90°. The terminal side is at 90° (positive <i>y</i>-axis), a quadrantal angle: cos 90° = 0. So cos 1170° = 0: neither positive nor negative.',
          '(The lesson: always reduce first; the answer here is the boundary value 0, which traps students who guess a sign from “it’s a big angle.”)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (sign chosen from quadrant, then evaluate)',
        q: 'If cot <i>θ</i> = −<frac><num>4</num><den>3</den></frac> and <i>θ</i> lies in the second quadrant, find <frac><num>2 cos <i>θ</i> − 3 sin <i>θ</i></num><den>4 sin <i>θ</i> − 9 cos <i>θ</i></den></frac>.',
        steps: [
          'In Q II: sin <i>θ</i> > 0, cos <i>θ</i> < 0, and indeed cot <i>θ</i> = <frac><num>cos</num><den>sin</den></frac> < 0 ✓ (consistent). From cot <i>θ</i> = −<frac><num>4</num><den>3</den></frac>, build the reference: |cos| ∶ |sin| = 4 ∶ 3, hypotenuse 5. With Q II signs:<br>cos <i>θ</i> = −<frac><num>4</num><den>5</den></frac>,   sin <i>θ</i> = +<frac><num>3</num><den>5</den></frac>.',
          'Substitute:<br><frac><num>2(−<frac><num>4</num><den>5</den></frac>) − 3(<frac><num>3</num><den>5</den></frac>)</num><den>4(<frac><num>3</num><den>5</den></frac>) − 9(−<frac><num>4</num><den>5</den></frac>)</den></frac> = <frac><num>−<frac><num>8</num><den>5</den></frac> − <frac><num>9</num><den>5</den></frac></num><den><frac><num>12</num><den>5</den></frac> + <frac><num>36</num><den>5</den></frac></den></frac> = <frac><num>−<frac><num>17</num><den>5</den></frac></num><den><frac><num>48</num><den>5</den></frac></den></frac>',
        ],
        ans: '−<frac><num>17</num><den>48</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (range as a constraint)',
        q: 'Find the range of <i>f</i>(<i>x</i>) = 5 sin <i>x</i> − 12 cos <i>x</i> + 3.',
        steps: [
          'Write 5 sin <i>x</i> − 12 cos <i>x</i> = <i>R</i> sin(<i>x</i> − <i>ϕ</i>) with <i>R</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13. Since sin(·) ∈ [−1, 1]:<br>5 sin <i>x</i> − 12 cos <i>x</i> ∈ [−13, 13] ⟹ <i>f</i>(<i>x</i>) ∈ [−13 + 3, 13 + 3] = [−10, 16].',
          '(Uses the bounded-range fact |<i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) as the engine.)',
        ],
        ans: 'Range = [−10, 16].',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (range impossibility / AM–GM)',
        q: 'For non-zero reals <i>a</i>, <i>b</i>, find all real <i>x</i> satisfying sin <i>x</i> = <frac><num><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></num><den>2<i>ab</i></den></frac>, and state the condition on <i>a</i>, <i>b</i>.',
        steps: [
          'Since (<i>a</i> − <i>b</i>)<sup>2</sup> ≥ 0, <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ≥ 2<i>ab</i> for all real <i>a</i>, <i>b</i>; for <i>a</i>, <i>b</i> of the same sign (2<i>ab</i> > 0) this gives <frac><num><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></num><den>2<i>ab</i></den></frac> ≥ 1, with equality iff <i>a</i> = <i>b</i>. But sin <i>x</i> ≤ 1 for all real <i>x</i>. Hence a solution exists <b>only when</b> <frac><num><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></num><den>2<i>ab</i></den></frac> = 1, i.e. <i>a</i> = <i>b</i>, giving<br>sin <i>x</i> = 1 ⟹ <i>x</i> = <frac><num>π</num><den>2</den></frac> + 2<i>n</i>π,   <i>n</i> ∈ ℤ.',
          'If <i>a</i> ≠ <i>b</i> (same sign) the RHS exceeds 1 and <b>no real <i>x</i> exists</b>. (If <i>a</i>, <i>b</i> have opposite signs, the RHS is ≤ −1 by the same argument, again forcing <i>a</i> = −<i>b</i> and sin <i>x</i> = −1, so <i>x</i> = −<frac><num>π</num><den>2</den></frac> + 2<i>n</i>π, <i>n</i> ∈ ℤ.)',
          '(The “advanced” step is recognising that |sin <i>x</i>| ≤ 1 turns the trigonometric equation into an inequality constraint on <i>a</i> and <i>b</i>.)',
        ],
        ans: 'Solutions exist iff |<i>a</i>| = |<i>b</i>|: <i>x</i> = <frac><num>π</num><den>2</den></frac> + 2<i>n</i>π if <i>a</i> = <i>b</i>, and <i>x</i> = −<frac><num>π</num><den>2</den></frac> + 2<i>n</i>π if <i>a</i> = −<i>b</i> (<i>n</i> ∈ ℤ).',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'If cos <i>x</i> = −<frac><num>1</num><den>2</den></frac> and <i>x</i> is in the third quadrant, find sin <i>x</i> and tan <i>x</i>.',
            a: 'Q III: both sin, cos negative. sin <i>x</i> = −√(1 − <frac><num>1</num><den>4</den></frac>) = −<frac><num>√3</num><den>2</den></frac>; tan <i>x</i> = <frac><num>−<frac><num>√3</num><den>2</den></frac></num><den>−<frac><num>1</num><den>2</den></frac></den></frac> = √3.',
          },
          {
            q: 'State the sign of each: (a) sin 200°, (b) tan 300°, (c) sec(−120°), (d) cot 100°.',
            a: '(a) 200° in Q III → sin −. (b) 300° in Q IV → tan −. (c) −120° ≡ 240° in Q III → cos −, so sec −. (d) 100° in Q II → cot −.',
          },
          {
            q: 'Find cos <frac><num>π</num><den>2</den></frac> + sin π − cos 2π + sin <frac><num>3π</num><den>2</den></frac>.',
            a: '0 + 0 − 1 + (−1) = −2.',
          },
          {
            q: 'If sec <i>x</i> = <frac><num>13</num><den>12</den></frac> and <i>x</i> is in the fourth quadrant, find the other five functions.',
            a: 'Q IV: cos +, sin −. cos <i>x</i> = <frac><num>12</num><den>13</den></frac>, sin <i>x</i> = −<frac><num>5</num><den>13</den></frac>, tan <i>x</i> = −<frac><num>5</num><den>12</den></frac>, cot <i>x</i> = −<frac><num>12</num><den>5</den></frac>, csc <i>x</i> = −<frac><num>13</num><den>5</den></frac>.',
          },
          {
            q: 'Find the range of <i>g</i>(<i>x</i>) = 3 cos <i>x</i> + 4 sin <i>x</i> − 5.',
            a: '<i>R</i> = √(3<sup>2</sup> + 4<sup>2</sup>) = 5, so 3 cos <i>x</i> + 4 sin <i>x</i> ∈ [−5, 5]; range = [−10, 0].',
          },
          {
            q: 'Show that tan <i>x</i> = <frac><num>4</num><den>3</den></frac> cannot hold with sin <i>x</i> > 0 and cos <i>x</i> < 0 simultaneously, and identify the only quadrant consistent with tan <i>x</i> = <frac><num>4</num><den>3</den></frac> <b>and</b> cos <i>x</i> < 0.',
            a: 'tan <i>x</i> = <frac><num>4</num><den>3</den></frac> > 0 requires sin <i>x</i>, cos <i>x</i> to share a sign (Q I or Q III). sin <i>x</i> > 0, cos <i>x</i> < 0 is Q II, where tan < 0: contradiction. With cos <i>x</i> < 0 the only quadrant giving tan > 0 is <b>Quadrant III</b>.',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'If tan <i>θ</i> = <frac><num>5</num><den>12</den></frac> and <i>θ</i> lies in the third quadrant, then sin <i>θ</i> =',
        opts: [
          { label: '<frac><num>5</num><den>13</den></frac>', nudge: '<b>(A)</b> drops the quadrant sign: the trap.' },
          { label: '−<frac><num>5</num><den>13</den></frac>', nudge: null },
          {
            label: '−<frac><num>12</num><den>13</den></frac>',
            nudge: '<b>(C)</b> and <b>(D)</b> compute cos instead of sin (using 12 as the opposite side).',
          },
          {
            label: '<frac><num>12</num><den>13</den></frac>',
            nudge: '<b>(C)</b> and <b>(D)</b> compute cos instead of sin (using 12 as the opposite side).',
          },
        ],
        correct: 1,
        solution: 'Reference triangle 5-12-13; in Q III, sin <i>θ</i> < 0, so sin <i>θ</i> = −<frac><num>5</num><den>13</den></frac>.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> possible for any real <i>θ</i>?',
        opts: [
          { label: 'sin <i>θ</i> = −0.9', nudge: '<b>(A)</b> is fine (|sin| ≤ 1).' },
          { label: 'sec <i>θ</i> = 0.5', nudge: null },
          { label: 'tan <i>θ</i> = 1000', nudge: '<b>(C)</b> is fine (tan is unbounded).' },
          { label: 'cos <i>θ</i> = 0', nudge: '<b>(D)</b> is fine (cos <frac><num>π</num><den>2</den></frac> = 0).' },
        ],
        correct: 1,
        solution: 'sec <i>θ</i> ∈ (−∞, −1] ∪ [1, ∞), so |sec <i>θ</i>| ≥ 1; 0.5 is impossible. Students who forget that sec/cosec avoid (−1, 1) see nothing wrong with (B) and pick (A) or (D) by reflex.',
      },
      {
        t: 'mcq',
        q: 'cos <i>θ</i> is positive and sin <i>θ</i> is negative. The angle <i>θ</i> lies in:',
        opts: [
          { label: 'Q I', nudge: '<b>(A)</b> has both positive.' },
          { label: 'Q II', nudge: '<b>(B)</b> has cos −.' },
          { label: 'Q III', nudge: '<b>(C)</b> has both negative.' },
          { label: 'Q IV', nudge: null },
        ],
        correct: 3,
        solution: 'cos + (right half: Q I, IV) and sin − (bottom half: Q III, IV) → intersection is <b>Q IV</b>.',
      },
      {
        t: 'mcq',
        q: 'The value of sin<sup>2</sup> 30° + sin<sup>2</sup> 60° is:',
        opts: [
          {
            label: '<frac><num>1</num><den>2</den></frac>',
            nudge: '<b>(A)</b> and <b>(C)</b> come from arithmetic on <frac><num>1</num><den>4</den></frac> + <frac><num>3</num><den>4</den></frac> mis-added.',
          },
          { label: '1', nudge: null },
          {
            label: '<frac><num>3</num><den>2</den></frac>',
            nudge: '<b>(A)</b> and <b>(C)</b> come from arithmetic on <frac><num>1</num><den>4</den></frac> + <frac><num>3</num><den>4</den></frac> mis-added.',
          },
          { label: '2', nudge: '<b>(D)</b> double-counts.' },
        ],
        correct: 1,
        solution: 'sin 60° = cos 30°, so sin<sup>2</sup> 30° + sin<sup>2</sup> 60° = sin<sup>2</sup> 30° + cos<sup>2</sup> 30° = 1. The elegant route is spotting the complementary pair, not grinding values.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the quadrant sign when taking a square root.</b> cos <i>x</i> = ±√(1 − sin<sup>2</sup> <i>x</i>): the ± is decided by the quadrant, never defaulted to +. This is the highest-yield error in the entire topic.',
          '<b>Claiming sin or cos outside [−1, 1], or sec / csc inside (−1, 1).</b> Any such value signals an upstream slip. Make “is this in range?” an automatic final check.',
          '<b>Reciprocal mis-pairing.</b> sec = <frac><num>1</num><den>cos</den></frac> and csc = <frac><num>1</num><den>sin</den></frac>, <b>not</b> the other way. Use the third-letter rule: co<b>s</b>ec ↔ <b>s</b>ine.',
          '<b>Wrong Pythagorean identity.</b> It is 1 + tan<sup>2</sup> = sec<sup>2</sup> and 1 + cot<sup>2</sup> = csc<sup>2</sup>. Swapping them (1 + tan<sup>2</sup> = csc<sup>2</sup>) is common; the “tan pairs with sec” pairing prevents it.',
          '<b>Evaluating a function where it’s undefined.</b> tan <frac><num>π</num><den>2</den></frac>, sec <frac><num>π</num><den>2</den></frac>, cot 0, csc 0 are <b>undefined</b>, not ∞ or 0. Watch domain exclusions.',
          '<b>Guessing a sign from “the angle is large.”</b> Always reduce modulo 360° (or 2π) to find the terminal quadrant first, then read the sign.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• Always solve a “find the other functions” problem in two stages: (1) magnitudes from the identity/reference triangle, (2) signs from the quadrant. Keep them separate so the sign step never gets skipped.<br>• “All Silver Tea Cups” gives which are positive; the rest are negative. Reciprocals always match their parent’s sign.<br>• For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i>, the range is [−√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)]: memorise this; it converts many “range” questions into one square root.<br>• Sanity reflex: if a final sin or cos exceeds 1 in magnitude, you have an error: stop and recheck.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Unit circle',
            note: 'cos <i>θ</i> = <i>x</i>-coord, sin <i>θ</i> = <i>y</i>-coord; general sin = <frac><num><i>y</i></num><den><i>r</i></den></frac>, cos = <frac><num><i>x</i></num><den><i>r</i></den></frac>, tan = <frac><num><i>y</i></num><den><i>x</i></den></frac> (<i>r</i> > 0).',
          },
          {
            f: 'Reciprocals',
            note: 'csc = <frac><num>1</num><den>sin</den></frac>, sec = <frac><num>1</num><den>cos</den></frac>, cot = <frac><num>1</num><den>tan</den></frac>. (co<b>s</b>ec ↔ <b>s</b>ine.)',
          },
          {
            f: 'Pythagorean',
            note: 'sin<sup>2</sup> + cos<sup>2</sup> = 1; 1 + tan<sup>2</sup> = sec<sup>2</sup>; 1 + cot<sup>2</sup> = csc<sup>2</sup>.',
          },
          { f: 'Signs: All Silver Tea Cups', note: 'QI all +; QII sin, csc; QIII tan, cot; QIV cos, sec.' },
          { f: 'Ranges', note: 'sin, cos ∈ [−1, 1]; sec, csc ∈ (−∞, −1] ∪ [1, ∞); tan, cot ∈ ℝ.' },
          {
            f: 'Undefined',
            note: 'tan, sec at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; cot, csc at <i>n</i>π.',
          },
          {
            f: 'Quadrantal',
            note: 'sin(0, <frac><num>π</num><den>2</den></frac>, π, <frac><num>3π</num><den>2</den></frac>) = 0, 1, 0, −1; cos = 1, 0, −1, 0.',
          },
          {
            f: '<i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> range',
            note: '[−√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)].',
          },
          { f: 'Golden rule', note: 'magnitude from the identity, <b>sign from the quadrant</b>: always two steps.' },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 203–211 ────────────────
  {
    n: '03',
    title: 'Standard Values, Even-Odd Nature & Allied Angles',
    kalam: 'The strategic payoff: there are exactly five standard angles to memorise and one reduction rule to master.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'If the unit circle is the definition and identities are the machinery, then standard values and allied-angle reductions are the <b>operating skills</b>: the things your hand must do automatically. Almost every trigonometric calculation, in every later topic and in physics, begins by either recalling a standard value or reducing an awkward angle to one. A student slow or shaky here is slow at everything downstream.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards:</b> Direct evaluation questions (sin 210°, cos 765°) and 1-mark value recalls are guaranteed (the book’s estimate from past papers, not official figures). Allied-angle simplification appears in 3-mark “prove/simplify” problems.<br>• <b>NEET:</b> Speed-critical. Reducing sin 1230° to a standard value in seconds is the difference between finishing the paper and not.<br>• <b>JEE Main:</b> Long allied-angle products that collapse to ±1 are a favourite (the book’s estimate from past papers, not official figures); they reward the student who applies the reduction rule cleanly instead of expanding everything.<br>• <b>JEE Advanced:</b> Reductions are embedded silently inside multi-step problems; a single wrong sign propagates to a wrong final answer.',
      },
      {
        t: 'p',
        html: 'The strategic payoff: there are exactly <b>five standard angles</b> to memorise and <b>one reduction rule</b> to master. Together they let you evaluate every angle that reduces to one of them (every multiple of 30° and of 45°).',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Why only a handful of angles have “nice” values.</b> The values sin 30° = <frac><num>1</num><den>2</den></frac>, sin 45° = <frac><num>1</num><den>√2</den></frac>, sin 60° = <frac><num>√3</num><den>2</den></frac> are not magic; they come from two special triangles you already know: the <b>45–45–90</b> (half of a square) and the <b>30–60–90</b> (half of an equilateral triangle). Every “standard value” is just a side ratio in one of these two triangles, read off and placed on the unit circle.',
      },
      { t: 'fig', id: 'm11-03-fig-3.6' },
      {
        t: 'p',
        html: '<b>Allied angles = the unit circle’s built-in symmetry.</b> Once you can evaluate an acute angle <i>θ</i>, the unit circle hands you for free the values at 90° ± <i>θ</i>, 180° ± <i>θ</i>, 270° ± <i>θ</i>, 360° ± <i>θ</i>, because those points are just <b>reflections and rotations</b> of the point at <i>θ</i>. You never compute them afresh; you reduce them back to <i>θ</i> with a sign and (sometimes) a function-swap.',
      },
      { t: 'p', html: 'To evaluate any sin / cos / tan of (<i>n</i> · 90° ± <i>θ</i>):' },
      {
        t: 'proc',
        title: 'The one rule that does all reductions: “90° flips, 180° doesn’t.”',
        steps: [
          '<b>Function change?</b> If <i>n</i> is <b>odd</b> (the 90° and 270° cases), the function changes to its <b>co-function</b> (sin ↔ cos, tan ↔ cot, sec ↔ csc). If <i>n</i> is <b>even</b> (180°, 360°), the function <b>stays the same</b>.',
          '<b>Sign?</b> Look at which quadrant (<i>n</i> · 90° ± <i>θ</i>) lands in (for small <i>θ</i>), and apply <b>ASTC</b>: give the result the sign that the original function has in that quadrant.',
        ],
      },
      { t: 'fig', id: 'm11-03-fig-3.7' },
      {
        t: 'p',
        html: '<b>Indian-context analogy: a Ferris wheel’s mirror positions.</b> A cabin at angle <i>θ</i> has a “mirror twin” directly across the vertical axis (same height, opposite side) at 180° − <i>θ</i>, and another straight down at 360° − <i>θ</i>. Their heights (sines) and sideways positions (cosines) are the same magnitudes as the original; only the signs flip depending on which side and half they’re on. Allied angles are just naming these mirror positions.',
      },
      {
        t: 'p',
        html: '<b>Even and odd: the mirror across the <i>x</i>-axis.</b> Replacing <i>θ</i> by −<i>θ</i> reflects the point across the <i>x</i>-axis: the <i>x</i>-coordinate (cosine) is unchanged, the <i>y</i>-coordinate (sine) flips sign. Hence <b>cosine is even, sine is odd</b>, and their reciprocals inherit this.',
      },

      { t: 'part', title: 'Reference tables: standard values, even/odd and allied angles' },
      { t: 'p', html: '<b>(A) Standard-angle values</b> (memorise cold: these are non-negotiable):' },
      {
        t: 'table',
        title: null,
        head: ['<i>θ</i>', '0°', '30°', '45°', '60°', '90°'],
        rows: [
          ['sin <i>θ</i>', '0', '<frac><num>1</num><den>2</den></frac>', '<frac><num>1</num><den>√2</den></frac>', '<frac><num>√3</num><den>2</den></frac>', '1'],
          ['cos <i>θ</i>', '1', '<frac><num>√3</num><den>2</den></frac>', '<frac><num>1</num><den>√2</den></frac>', '<frac><num>1</num><den>2</den></frac>', '0'],
          ['tan <i>θ</i>', '0', '<frac><num>1</num><den>√3</den></frac>', '1', '√3', 'undef.'],
          ['csc <i>θ</i>', 'undef.', '2', '√2', '<frac><num>2</num><den>√3</den></frac>', '1'],
          ['sec <i>θ</i>', '1', '<frac><num>2</num><den>√3</den></frac>', '√2', '2', 'undef.'],
          ['cot <i>θ</i>', 'undef.', '√3', '1', '<frac><num>1</num><den>√3</den></frac>', '0'],
        ],
      },
      {
        t: 'p',
        html: '<b>Memory aid for the sine row:</b> sin of 0°, 30°, 45°, 60°, 90° is <frac><num>√0</num><den>2</den></frac>, <frac><num>√1</num><den>2</den></frac>, <frac><num>√2</num><den>2</den></frac>, <frac><num>√3</num><den>2</den></frac>, <frac><num>√4</num><den>2</den></frac>.<br>The cosine row is the same list <b>reversed</b>.',
      },
      { t: 'p', html: '<b>(B) Even/odd nature.</b>' },
      {
        t: 'formula',
        kicker: 'Even/odd nature',
        main: 'cos(−<i>θ</i>) = cos <i>θ</i>, sec(−<i>θ</i>) = sec <i>θ</i> (<b>even</b>)<br>sin(−<i>θ</i>) = −sin <i>θ</i>, csc(−<i>θ</i>) = −csc <i>θ</i>, tan(−<i>θ</i>) = −tan <i>θ</i>, cot(−<i>θ</i>) = −cot <i>θ</i> (<b>odd</b>)',
        legend: ['<i>θ</i> = any angle at which both sides are defined'],
        note: null,
      },
      { t: 'p', html: 'Only <b>cosine and secant are even</b>; the other four are odd.' },
      { t: 'p', html: '<b>(C) Allied-angle (reduction) formulas.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Angle', 'sin', 'cos', 'tan'],
        rows: [
          ['90° − <i>θ</i>', 'cos <i>θ</i>', 'sin <i>θ</i>', 'cot <i>θ</i>'],
          ['90° + <i>θ</i>', 'cos <i>θ</i>', '−sin <i>θ</i>', '−cot <i>θ</i>'],
          ['180° − <i>θ</i>', 'sin <i>θ</i>', '−cos <i>θ</i>', '−tan <i>θ</i>'],
          ['180° + <i>θ</i>', '−sin <i>θ</i>', '−cos <i>θ</i>', 'tan <i>θ</i>'],
          ['270° − <i>θ</i>', '−cos <i>θ</i>', '−sin <i>θ</i>', 'cot <i>θ</i>'],
          ['270° + <i>θ</i>', '−cos <i>θ</i>', 'sin <i>θ</i>', '−cot <i>θ</i>'],
          ['360° − <i>θ</i>', '−sin <i>θ</i>', 'cos <i>θ</i>', '−tan <i>θ</i>'],
          ['360° + <i>θ</i>', 'sin <i>θ</i>', 'cos <i>θ</i>', 'tan <i>θ</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>The master rule (replaces memorising the table):</b> for <i>f</i>(<i>n</i> · 90° ± <i>θ</i>), <b><i>n</i> odd ⇒ co-function; <i>n</i> even ⇒ same function; sign from the quadrant via ASTC.</b> Memorised once, this generates every row above.',
      },

      { t: 'part', title: 'Derivations' },
      {
        t: 'p',
        html: '<b>(a) Standard values from the two special triangles.</b><br><b>45–45–90:</b> an isosceles right triangle with equal legs 1 has hypotenuse √(1<sup>2</sup> + 1<sup>2</sup>) = √2. So sin 45° = <frac><num>opp</num><den>hyp</den></frac> = <frac><num>1</num><den>√2</den></frac>, cos 45° = <frac><num>1</num><den>√2</den></frac>, tan 45° = 1.<br><b>30–60–90:</b> drop an altitude in an equilateral triangle of side 2; it splits into two right triangles with hypotenuse 2, base 1, height √(2<sup>2</sup> − 1<sup>2</sup>) = √3. The 30° angle faces the side 1: sin 30° = <frac><num>1</num><den>2</den></frac>, cos 30° = <frac><num>√3</num><den>2</den></frac>. The 60° angle faces √3: sin 60° = <frac><num>√3</num><den>2</den></frac>, cos 60° = <frac><num>1</num><den>2</den></frac>.<br><b>0° and 90°:</b> read straight off the unit circle: at 0° the point is (1, 0) so cos 0° = 1, sin 0° = 0; at 90° it is (0, 1) so cos 90° = 0, sin 90° = 1.',
      },
      {
        t: 'p',
        html: '<b>(b) Even/odd from the unit circle.</b> The angle −<i>θ</i> is the reflection of <i>θ</i> across the <i>x</i>-axis: (cos <i>θ</i>, sin <i>θ</i>) ↦ (cos <i>θ</i>, −sin <i>θ</i>). The <i>x</i>-coordinate is unchanged ⇒ cos(−<i>θ</i>) = cos <i>θ</i> (even); the <i>y</i>-coordinate flips ⇒ sin(−<i>θ</i>) = −sin <i>θ</i> (odd). Dividing, tan(−<i>θ</i>) = −tan <i>θ</i>.',
      },
      {
        t: 'p',
        html: '<b>(c) Allied formulas from the unit circle (sample: 180° − <i>θ</i>).</b> The point at 180° − <i>θ</i> is the reflection of the point at <i>θ</i> across the <i>y</i>-axis: (cos <i>θ</i>, sin <i>θ</i>) ↦ (−cos <i>θ</i>, sin <i>θ</i>). Hence cos(180° − <i>θ</i>) = −cos <i>θ</i> and sin(180° − <i>θ</i>) = sin <i>θ</i>. The same reflection-and-rotation argument gives every row of the table. (Each is also a one-line consequence of the compound-angle formulas you formalise in Topic 05, e.g. sin(90° + <i>θ</i>) = sin 90° cos <i>θ</i> + cos 90° sin <i>θ</i> = cos <i>θ</i>.)',
      },
      {
        t: 'p',
        html: '<b>(d) Why “odd ⇒ co-function.”</b> Odd multiples of 90° (90°, 270°, …) sit on the <b>vertical</b> axis. The point at 90° ± <i>θ</i> is the point at ±<i>θ</i> turned through a quarter turn, and a quarter turn moves the horizontal coordinate into the vertical place and the vertical into the horizontal (for 90° + <i>θ</i>: (cos <i>θ</i>, sin <i>θ</i>) ↦ (−sin <i>θ</i>, cos <i>θ</i>)), which is exactly swapping cos ↔ sin (and so tan ↔ cot). Even multiples (180°, 360°) sit on the <b>horizontal</b> axis: a half or full turn only changes signs, so the function is unchanged.',
      },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Evaluate sin 210°.',
        steps: ['210° = 180° + 30°, which lies in Quadrant III where sine is <b>negative</b>. With <i>n</i> = 2 (even, function unchanged):'],
        ans: 'sin 210° = −sin 30° = −<frac><num>1</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level (even function + reduction)',
        q: 'Evaluate cos(−300°).',
        steps: ['Cosine is even: cos(−300°) = cos 300°. Now 300° = 360° − 60°, in Quadrant IV where cosine is <b>positive</b>:'],
        ans: 'cos(−300°) = cos 300° = +cos 60° = <frac><num>1</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'NEET level (large angle)',
        q: 'Evaluate sin 1230°.',
        steps: ['Subtract full turns: 1230° − 3(360°) = 1230° − 1080° = 150°. Then 150° = 180° − 30°, Quadrant II, sine positive:'],
        ans: 'sin 1230° = sin 150° = sin 30° = <frac><num>1</num><den>2</den></frac>.',
      },
      {
        t: 'ex',
        tag: 'NEET level (co-function case)',
        q: 'Evaluate tan 135°.',
        steps: [
          '135° = 90° + 45° (<i>n</i> = 1, odd ⇒ tan → cot) in Quadrant II where tangent is <b>negative</b>:',
          '(Equivalently 135° = 180° − 45°, Q II, tan(180° − 45°) = −tan 45° = −1: both routes agree.)',
        ],
        ans: 'tan 135° = −cot 45° = −1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (simplify to a constant)',
        q: 'Simplify sin(90° + <i>θ</i>) cos(180° − <i>θ</i>) + cos(90° − <i>θ</i>) sin(180° + <i>θ</i>).',
        steps: [
          'Reduce each: sin(90° + <i>θ</i>) = cos <i>θ</i>; cos(180° − <i>θ</i>) = −cos <i>θ</i>; cos(90° − <i>θ</i>) = sin <i>θ</i>; sin(180° + <i>θ</i>) = −sin <i>θ</i>. So',
        ],
        ans: '(cos <i>θ</i>)(−cos <i>θ</i>) + (sin <i>θ</i>)(−sin <i>θ</i>) = −cos<sup>2</sup> <i>θ</i> − sin<sup>2</sup> <i>θ</i> = −1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (prove a reduction)',
        q: 'Prove cos(270° + <i>θ</i>) = sin <i>θ</i>.',
        steps: ['270° + <i>θ</i> is in Quadrant IV (for small <i>θ</i>), where cosine is <b>positive</b>; <i>n</i> = 3 is odd ⇒ cos → sin:'],
        ans: 'cos(270° + <i>θ</i>) = +sin <i>θ</i>. ■',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (long product collapses)',
        q: 'Simplify<br><frac><num>cos(90° + <i>θ</i>) sec(−<i>θ</i>) tan(180° − <i>θ</i>)</num><den>sec(360° − <i>θ</i>) sin(180° + <i>θ</i>) cot(90° − <i>θ</i>)</den></frac>.',
        steps: [
          'Reduce term by term. <b>Numerator:</b> cos(90° + <i>θ</i>) = −sin <i>θ</i>; sec(−<i>θ</i>) = sec <i>θ</i>; tan(180° − <i>θ</i>) = −tan <i>θ</i>. Product = (−sin <i>θ</i>)(sec <i>θ</i>)(−tan <i>θ</i>) = sin <i>θ</i> sec <i>θ</i> tan <i>θ</i> = <frac><num>sin<sup>2</sup> <i>θ</i></num><den>cos<sup>2</sup> <i>θ</i></den></frac> = tan<sup>2</sup> <i>θ</i>.',
          '<b>Denominator:</b> sec(360° − <i>θ</i>) = sec <i>θ</i>; sin(180° + <i>θ</i>) = −sin <i>θ</i>; cot(90° − <i>θ</i>) = tan <i>θ</i>. Product = sec <i>θ</i>(−sin <i>θ</i>) tan <i>θ</i> = −<frac><num>sin<sup>2</sup> <i>θ</i></num><den>cos<sup>2</sup> <i>θ</i></den></frac> = −tan<sup>2</sup> <i>θ</i>.',
          '(The whole problem rewards clean reduction; expanding nothing, every term collapses by the rule.)',
        ],
        ans: '<frac><num>tan<sup>2</sup> <i>θ</i></num><den>−tan<sup>2</sup> <i>θ</i></den></frac> = −1.',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Evaluate: (a) cos 120°, (b) tan 240°, (c) sin(−45°), (d) sec 300°.',
            a: '(a) 120° = 180° − 60°, Q II, cos neg → −<frac><num>1</num><den>2</den></frac>. (b) 240° = 180° + 60°, Q III, tan pos → +√3. (c) odd → −sin 45° = −<frac><num>1</num><den>√2</den></frac>. (d) 300° = 360° − 60°, Q IV, sec pos → +2.',
          },
          {
            q: 'Evaluate cos 765°.',
            a: '765° − 2(360°) = 45° → cos 45° = <frac><num>1</num><den>√2</den></frac>.',
          },
          {
            q: 'Find the value of sin 150° cos 120° + cos 330° sin 660°.',
            a: 'sin 150° = <frac><num>1</num><den>2</den></frac>, cos 120° = −<frac><num>1</num><den>2</den></frac>, cos 330° = <frac><num>√3</num><den>2</den></frac>, sin 660° = sin(660° − 360°) = sin 300° = −<frac><num>√3</num><den>2</den></frac>. So <frac><num>1</num><den>2</den></frac>(−<frac><num>1</num><den>2</den></frac>) + <frac><num>√3</num><den>2</den></frac>(−<frac><num>√3</num><den>2</den></frac>) = −<frac><num>1</num><den>4</den></frac> − <frac><num>3</num><den>4</den></frac> = −1.',
          },
          {
            q: 'Prove tan(90° + <i>θ</i>) · cot(90° − <i>θ</i>) = −1.',
            a: 'tan(90° + <i>θ</i>) = −cot <i>θ</i> and cot(90° − <i>θ</i>) = tan <i>θ</i>, so the product is exactly (−cot <i>θ</i>)(tan <i>θ</i>) = −1. Note that tan(90° + <i>θ</i>) · tan(90° − <i>θ</i>) = (−cot <i>θ</i>)(cot <i>θ</i>) = −cot<sup>2</sup> <i>θ</i> instead, which equals −1 only when <i>θ</i> = 45° + 90°<i>n</i>; that is why the second factor must be cot(90° − <i>θ</i>).',
          },
          {
            q: 'Simplify <frac><num>sin(180° + <i>θ</i>) cos(90° − <i>θ</i>)</num><den>cos(180° − <i>θ</i>) sin(270° − <i>θ</i>)</den></frac>.',
            a: '<frac><num>(−sin <i>θ</i>)(sin <i>θ</i>)</num><den>(−cos <i>θ</i>)(−cos <i>θ</i>)</den></frac> = <frac><num>−sin<sup>2</sup> <i>θ</i></num><den>cos<sup>2</sup> <i>θ</i></den></frac> = −tan<sup>2</sup> <i>θ</i>.',
          },
          {
            q: 'If cos <i>θ</i> = <frac><num>3</num><den>5</den></frac> and <i>θ</i> ∈ Q I, find cos(180° + <i>θ</i>) and sin(90° + <i>θ</i>).',
            a: 'cos(180° + <i>θ</i>) = −cos <i>θ</i> = −<frac><num>3</num><den>5</den></frac>; sin(90° + <i>θ</i>) = cos <i>θ</i> = <frac><num>3</num><den>5</den></frac>.',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'sin 120° =',
        opts: [
          {
            label: '−<frac><num>√3</num><den>2</den></frac>',
            nudge: '<b>(A)</b> gets the value but wrong sign (treats Q II sine as negative).',
          },
          { label: '<frac><num>√3</num><den>2</den></frac>', nudge: null },
          { label: '−<frac><num>1</num><den>2</den></frac>', nudge: '<b>(C)</b>/<b>(D)</b> use sin 30°: wrong reference angle.' },
          { label: '<frac><num>1</num><den>2</den></frac>', nudge: '<b>(C)</b>/<b>(D)</b> use sin 30°: wrong reference angle.' },
        ],
        correct: 1,
        solution: '120° = 180° − 60°, Q II, sine <b>positive</b>, function unchanged → +sin 60° = <frac><num>√3</num><den>2</den></frac>.',
      },
      {
        t: 'mcq',
        q: 'cos(90° + <i>θ</i>) =',
        opts: [
          { label: 'sin <i>θ</i>', nudge: '<b>(A)</b> switches function but drops the sign.' },
          { label: '−sin <i>θ</i>', nudge: null },
          { label: 'cos <i>θ</i>', nudge: '<b>(C)</b>/<b>(D)</b> fail to switch to the co-function: the trap.' },
          { label: '−cos <i>θ</i>', nudge: '<b>(C)</b>/<b>(D)</b> fail to switch to the co-function: the trap.' },
        ],
        correct: 1,
        solution: '<i>n</i> = 1 odd ⇒ co-function (cos → sin); 90° + <i>θ</i> is Q II where cosine is negative → −sin <i>θ</i>.',
      },
      {
        t: 'mcq',
        q: 'Which trigonometric functions are even?',
        opts: [
          { label: 'sin and csc', nudge: '<b>(A)</b> sin(−<i>θ</i>) = −sin <i>θ</i>: sine is odd, and so is its reciprocal csc.' },
          { label: 'tan and cot', nudge: '<b>(B)</b> tan(−<i>θ</i>) = −tan <i>θ</i>: tan and cot are odd.' },
          { label: 'cos and sec', nudge: null },
          { label: 'all six', nudge: '<b>(D)</b> only two of the six are even; sin, csc, tan and cot are odd.' },
        ],
        correct: 2,
        solution: 'Only cosine and secant satisfy <i>f</i>(−<i>θ</i>) = <i>f</i>(<i>θ</i>).',
      },
      {
        t: 'mcq',
        q: 'tan 225° =',
        opts: [
          { label: '−1', nudge: '<b>(A)</b> wrongly makes Q III tangent negative.' },
          { label: '1', nudge: null },
          { label: '−√3', nudge: '<b>(C)</b> −√3 is tan 120°: a 60° reference angle and the wrong sign; 225° − 180° = 45°.' },
          {
            label: '<frac><num>1</num><den>√3</den></frac>',
            nudge: '<b>(D)</b> <frac><num>1</num><den>√3</den></frac> is tan 30°: the wrong reference angle; 225° = 180° + 45°.',
          },
        ],
        correct: 1,
        solution: '225° = 180° + 45°, Q III where tangent is <b>positive</b> → +tan 45° = 1.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong sign in a reduction.</b> The sign comes from the quadrant of the whole allied angle via ASTC, applied to the <b>original</b> function. Always identify the quadrant first.',
          '<b>Forgetting to switch to the co-function at 90°/270°.</b> Odd multiples of 90° flip sin ↔ cos; even multiples (180°, 360°) do not.',
          '<b>Misremembering a standard value.</b> Use the pattern <frac><num>√0</num><den>2</den></frac>, <frac><num>√1</num><den>2</den></frac>, <frac><num>√2</num><den>2</den></frac>, <frac><num>√3</num><den>2</den></frac>, <frac><num>√4</num><den>2</den></frac> for sine and reverse it for cosine; never guess.',
          '<b>Even/odd slip.</b> Only cos and sec are even. Pulling a minus out of cos(−<i>θ</i>) is wrong.',
          '<b>Not reducing large angles first.</b> For angles > 360° (or < 0°), subtract/add multiples of 360° before applying the rule.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• One rule beats eight formulas: <b>odd · 90° ⇒ co-function; sign from ASTC.</b> Drill it until automatic.<br>• Two routes to most reductions (135° = 90° + 45° = 180° − 45°): use whichever is faster, and they cross-check each other.<br>• Long allied-angle products almost always collapse to ±1; if yours doesn’t, recheck a sign.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Sine row (0°–90°)',
            note: '<frac><num>√0</num><den>2</den></frac>, <frac><num>√1</num><den>2</den></frac>, <frac><num>√2</num><den>2</den></frac>, <frac><num>√3</num><den>2</den></frac>, <frac><num>√4</num><den>2</den></frac>; <b>cosine</b> = reverse.',
          },
          {
            f: 'tan = <frac><num>sin</num><den>cos</den></frac>',
            note: '0, <frac><num>1</num><den>√3</den></frac>, 1, √3, undefined.',
          },
          { f: 'Even', note: 'cos, sec. <b>Odd:</b> sin, csc, tan, cot.' },
          {
            f: 'Reduction rule',
            note: '<i>f</i>(<i>n</i> · 90° ± <i>θ</i>) → <i>n</i> odd ⇒ co-function, <i>n</i> even ⇒ same; <b>sign from quadrant (ASTC)</b>.',
          },
          {
            f: 'sin(180° − <i>θ</i>) = sin <i>θ</i>; cos(180° − <i>θ</i>) = −cos <i>θ</i>; sin(180° + <i>θ</i>) = −sin <i>θ</i>.',
            note: '',
          },
          { f: 'sin(90° + <i>θ</i>) = cos <i>θ</i>; cos(90° + <i>θ</i>) = −sin <i>θ</i>.', note: '' },
          { f: '<b>Reduce large angles</b> mod 360° first.', note: '' },
          { f: 'Golden rule', note: 'quadrant → sign; odd-90° → swap function.' },
        ],
        aids: [],
      },
    ],
  },
];
