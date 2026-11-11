/**
 * KEY POINTS for Mathematics Class 11, Chapter 3 (Trigonometric Functions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–12 each have two or more Remember points, at least one of each
 * other kind and one Exam shortcut; the long ones carry more (Topic 05, the
 * identity master reference, Topic 06, the general solutions, Topic 07, the
 * half-angle family, and Topic 08, the triangle): 89 points in all. Additional topic C, a set of exercises, has two points and
 * Additional topic D three, for their central results. Memory lines are a
 * fifth, short section of their own, read rather than tested: the first two
 * of each topic.
 *
 * `topic`: Topics 01–12 are 0–11 (01–06 the main chapter, 07–08 the
 * supplement, 09–12 the "Additional Topics" part); Additional topic C (the
 * product-to-sum and triple-angle exercises printed after Topic 08) is 12 and
 * Additional topic D is 13. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions or formulas, its derivations and procedures, and its Cheat
 * sheet. Common mistakes: its Common pitfalls and its MCQ traps. Exam
 * shortcuts: its Pro-Tips, with a worked example or practice answer. `say`:
 * this chapter's cheat sheets print no memory aids, so the memory lines are
 * the book's own memory hooks and mnemonics printed in the text, word for
 * word, without quotation marks or bold (no em dashes in Mathematics), a
 * first letter capitalised where the hook starts mid-sentence: Topic 01's
 * "Memory hook", Topic 02's "All Silver Tea Cups" cheat-sheet row and its
 * "tan goes with sec" hook, Topic 03's one rule "90° flips, 180° doesn’t"
 * and its memory aid for the sine row, Topic 05's sign mnemonic and Topic
 * 11's memory hook: seven lines in all. Additional topics: their methods,
 * worked examples and practice answers.
 *
 * Markup is the chapter's own: function names upright with the argument
 * italic (sin <i>x</i>, cos 2<i>θ</i>), a power on the function name
 * (sin<sup>2</sup> <i>x</i>), Greek letters italic, π upright, − (U+2212) for
 * minus, ′ and ″ for minutes and seconds; the cosecant is csc, as the
 * chapter writes it, and “cosec” only where a point repeats the chapter’s
 * words about the name. Every fraction is stacked,
 * <frac><num>…</num><den>…</den></frac>, an angle as a fraction included
 * (sin <frac><num><i>A</i></num><den>2</den></frac>), except inside a raised
 * run, which keeps the chapter's form; a binomial coefficient is
 * <sup>n</sup>C<sub>r</sub>. Exam-frequency claims keep the label "(the
 * book’s estimate from past papers, not official figures)".
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Angle Measurement and Radians ──
  // pp. 181–183, 191
  {
    topic: 0,
    kind: 'remember',
    q: 'What is one radian, and why is a radian a pure number?',
    a: 'The angle subtended at the centre of a circle by an arc whose length equals the radius is one radian: walk along the rim a distance equal to the radius, and the angle swept out at the centre is 1 radian. For an arc of length <i>s</i> on a circle of radius <i>r</i>, <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> (<i>θ</i> in radians), the cornerstone definition. Both <i>s</i> and <i>r</i> are lengths, so [<i>θ</i>] = <frac><num>[length]</num><den>[length]</den></frac> = 1: a radian carries no physical dimension, which is why the unit word can be dropped and why <i>ω</i> = <frac><num><i>θ</i></num><den><i>t</i></den></frac> comes out in s<sup>−1</sup>. A bare number in this chapter is always radians. Anticlockwise rotation is a positive angle, clockwise a negative one',
    why: 'A full turn sweeps the whole circumference 2π<i>r</i>, so <i>θ</i> = <frac><num>2π<i>r</i></num><den><i>r</i></den></frac> = 2π radian: one full revolution is 2π radians, half a turn π.',
    say: null,
  },
  // pp. 183–184, 191
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the one conversion relation, and what are the benchmarks to know cold?',
    a: '2π radian = 360°, so π radian = 180°: everything scales from this. Radian measure = <frac><num>π</num><den>180</den></frac> × Degree measure, and Degree measure = <frac><num>180</num><den>π</den></frac> × Radian measure; there is exactly one relation to remember, the two factors being reciprocals of each other. 1 radian = <frac><num>180°</num><den>π</den></frac> ≈ 57°17′45″ ≈ 57.2958°, and 1° = <frac><num>π</num><den>180</den></frac> radian ≈ 0.01745 radian. The workhorses: 30° = <frac><num>π</num><den>6</den></frac>, 45° = <frac><num>π</num><den>4</den></frac>, 60° = <frac><num>π</num><den>3</den></frac>, 90° = <frac><num>π</num><den>2</den></frac>, 180° = π, 360° = 2π. Degrees and minutes are base-60: 1° = 60′ and 1′ = 60″',
    why: '75° × <frac><num>π</num><den>180</den></frac> = <frac><num>75π</num><den>180</den></frac> = <frac><num>5π</num><den>12</den></frac>; and 1 radian is a bit less than 60°.',
    say: null,
  },
  // pp. 184, 187, 191
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the arc length and the area of a sector, and why must <i>θ</i> be in radians?',
    a: 'Arc length is proportional to the angle: the whole circumference 2π<i>r</i> goes with the whole angle 2π, so <frac><num><i>s</i></num><den>2π<i>r</i></den></frac> = <frac><num><i>θ</i></num><den>2π</den></frac> and <i>s</i> = <i>rθ</i>. A sector is the same fraction of the disc as its angle is of the full turn: <frac><num><i>A</i><sub>sect</sub></num><den>π<i>r</i><sup>2</sup></den></frac> = <frac><num><i>θ</i></num><den>2π</den></frac>, so <i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i> = <frac><num>1</num><den>2</den></frac><i>rs</i>. The 2π cancels cleanly only because <i>θ</i> is in radians; in degrees you would be forced to write <i>s</i> = <frac><num>π<i>rθ</i></num><den>180</den></frac>. The perimeter of a sector is two radii plus the arc, 2<i>r</i> + <i>s</i>',
    why: 'A sector of perimeter 16 cm and area 16 cm<sup>2</sup>: <i>r</i><sup>2</sup><i>θ</i> = 32 gives 2<i>r</i> + <frac><num>32</num><den><i>r</i></den></frac> = 16, (<i>r</i> − 4)<sup>2</sup> = 0, so <i>r</i> = 4 cm, <i>s</i> = 8 cm and <i>θ</i> = 2 radian.',
    say: null,
  },
  // pp. 188–190
  {
    topic: 0,
    kind: 'mixup',
    q: 'Degree to radian or radian to degree: which factor is <frac><num>π</num><den>180</den></frac> and which <frac><num>180</num><den>π</den></frac>?',
    a: 'Degree→radian uses <frac><num>π</num><den>180</den></frac>; radian→degree uses <frac><num>180</num><den>π</den></frac>. Going to the bigger-looking number (degrees, since 57 > 1) means multiplying by the bigger factor <frac><num>180</num><den>π</den></frac>. Flipping the factor turns <frac><num>5π</num><den>12</den></frac> into its reciprocal <frac><num>12</num><den>5π</den></frac>, the direction-inversion distractor. Sanity check: 1 radian ≈ 57°, so if your “radian” answer for a small angle is huge, you flipped the factor',
    why: 'Converting <frac><num>5π</num><den>3</den></frac> radian: <frac><num>5π</num><den>3</den></frac> × <frac><num>180</num><den>π</den></frac> = 300°.',
    say: 'Going to the bigger-looking number (degrees, since 57 > 1) means multiplying by the bigger factor <frac><num>180</num><den>π</den></frac>.',
  },
  // pp. 186, 189–190
  {
    topic: 0,
    kind: 'mistake',
    q: 'For <i>r</i> = 6 cm and a 30° angle, is the arc <i>s</i> = 6 × 30 = 180 cm?',
    a: 'No: <i>s</i> = 6 × <frac><num>π</num><den>6</den></frac> = π ≈ 3.14 cm. <i>s</i> = <i>rθ</i> and <i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i> are defined with <i>θ</i> in radians, so convert first; using degrees is the signature trap of the whole topic, and a wrong answer roughly 57× too big is its fingerprint. The partner slip is base-60 arithmetic: 0.5° is 30′, not 50′, and 20′ = <frac><num>20</num><den>60</den></frac>° = <frac><num>1</num><den>3</den></frac>°, not 0.20°, so convert minutes and seconds to fractions of a degree before multiplying',
    why: '40°20′ = 40<frac><num>1</num><den>3</den></frac>° = <frac><num>121</num><den>3</den></frac>°, and <frac><num>121</num><den>3</den></frac> × <frac><num>π</num><den>180</den></frac> = <frac><num>121π</num><den>540</den></frac> radian.',
    say: null,
  },
  // pp. 187, 190
  {
    topic: 0,
    kind: 'shortcut',
    q: 'In two circles, arcs of the same length subtend 60° and 75° at the centres. The ratio of the radii, fast?',
    a: 'When an angle appears only as a ratio of two angles, you may leave both in degrees: the conversion factor cancels. Equal arcs give <i>r</i><sub>1</sub><i>θ</i><sub>1</sub> = <i>r</i><sub>2</sub><i>θ</i><sub>2</sub>, so <frac><num><i>r</i><sub>1</sub></num><den><i>r</i><sub>2</sub></den></frac> = <frac><num><i>θ</i><sub>2</sub></num><den><i>θ</i><sub>1</sub></den></frac> = <frac><num>75</num><den>60</den></frac> = <frac><num>5</num><den>4</den></frac>, <i>r</i><sub>1</sub> ∶ <i>r</i><sub>2</sub> = 5 ∶ 4. A bigger angle on the same arc means a smaller radius, a tighter curve; students who never internalised <i>s</i> = <i>rθ</i> often write 4 ∶ 5. Memorise the definition <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac>, not the consequences',
    why: 'A central angle of 60° on an arc of 37.4 cm: <i>r</i> = <frac><num><i>s</i></num><den><i>θ</i></den></frac> = <frac><num>37.4 × 3</num><den>π</den></frac> = 35.7 cm with π = <frac><num>22</num><den>7</den></frac>, the angle converted first because here it is not a ratio.',
    say: null,
  },

  // ── Topic 02 · Trigonometric Functions and Quadrant Signs ──
  // pp. 192, 194–196, 202
  {
    topic: 1,
    kind: 'remember',
    q: 'How are the six trigonometric functions defined for any angle, and what fixes their signs?',
    a: 'On the unit circle, a circle of radius 1 centred at the origin, a point <i>P</i>(<i>a</i>, <i>b</i>) at angle <i>θ</i> gives cos <i>θ</i> = <i>a</i> (the <i>x</i>-coordinate) and sin <i>θ</i> = <i>b</i> (the <i>y</i>-coordinate). For any point <i>P</i>(<i>x</i>, <i>y</i>) on the terminal side, at distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) > 0 from the origin: sin <i>θ</i> = <frac><num><i>y</i></num><den><i>r</i></den></frac>, cos <i>θ</i> = <frac><num><i>x</i></num><den><i>r</i></den></frac>, tan <i>θ</i> = <frac><num><i>y</i></num><den><i>x</i></den></frac>, csc <i>θ</i> = <frac><num><i>r</i></num><den><i>y</i></den></frac>, sec <i>θ</i> = <frac><num><i>r</i></num><den><i>x</i></den></frac>, cot <i>θ</i> = <frac><num><i>x</i></num><den><i>y</i></den></frac>. The definition no longer needs a triangle, so obtuse, reflex and negative angles are all admitted. Because <i>r</i> > 0 always, the sign of each function is fixed entirely by the signs of <i>x</i> and <i>y</i>, that is by the quadrant, and a reciprocal has the same sign as its parent',
    why: 'Since tan = <frac><num>sin</num><den>cos</den></frac>, it is positive exactly when sine and cosine share a sign, in Q I and Q III: hence All, Silver (sine), Tea (tangent), Cups (cosine) going anticlockwise.',
    say: 'All Silver Tea Cups: QI all +; QII sin, csc; QIII tan, cot; QIV cos, sec.',
  },
  // pp. 196–198
  {
    topic: 1,
    kind: 'remember',
    q: 'Where do the three Pythagorean identities come from?',
    a: '<i>P</i>(cos <i>x</i>, sin <i>x</i>) lies on the unit circle, so it satisfies <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 1: sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1 is the equation of the circle, rewritten. Divide it by cos<sup>2</sup> <i>x</i> (valid where cos <i>x</i> ≠ 0) to get tan<sup>2</sup> <i>x</i> + 1 = sec<sup>2</sup> <i>x</i>, and by sin<sup>2</sup> <i>x</i> (where sin <i>x</i> ≠ 0) to get 1 + cot<sup>2</sup> <i>x</i> = csc<sup>2</sup> <i>x</i>: all three descend from the one circle equation. With them come the reciprocal relations csc <i>θ</i> = <frac><num>1</num><den>sin <i>θ</i></den></frac>, sec <i>θ</i> = <frac><num>1</num><den>cos <i>θ</i></den></frac>, cot <i>θ</i> = <frac><num>1</num><den>tan <i>θ</i></den></frac> and the quotients tan <i>θ</i> = <frac><num>sin <i>θ</i></num><den>cos <i>θ</i></den></frac>, cot <i>θ</i> = <frac><num>cos <i>θ</i></num><den>sin <i>θ</i></den></frac>',
    why: 'sin<sup>2</sup> 30° + sin<sup>2</sup> 60° = sin<sup>2</sup> 30° + cos<sup>2</sup> 30° = 1: spot the complementary pair rather than grinding values.',
    say: 'tan goes with sec, and cot goes with csc: 1 + tan<sup>2</sup> <i>θ</i> = sec<sup>2</sup> <i>θ</i>, 1 + cot<sup>2</sup> <i>θ</i> = csc<sup>2</sup> <i>θ</i> (the two “co” functions stay together).',
  },
  // pp. 196–198, 202
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the domains and ranges of the six functions, and their values on the axes?',
    a: 'sin and cos: every real <i>θ</i>, range [−1, 1], since the tip never goes more than one radius from the centre. tan and sec: <i>θ</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; cot and csc: <i>θ</i> ≠ <i>n</i>π (<i>n</i> ∈ ℤ). tan and cot sweep all real numbers; sec and csc range over (−∞, −1] ∪ [1, ∞), never strictly between −1 and 1, being reciprocals of things ≤ 1 in magnitude. On the axes, sin of 0, <frac><num>π</num><den>2</den></frac>, π, <frac><num>3π</num><den>2</den></frac> is 0, 1, 0, −1 and cos is 1, 0, −1, 0. sin rises 0 → 1 in Q I, falls 1 → 0 in Q II, falls 0 → −1 in Q III and rises −1 → 0 in Q IV; cos falls 1 → 0, falls 0 → −1, rises −1 → 0, rises 0 → 1',
    why: 'sec <i>θ</i> = 0.5 is impossible for any real <i>θ</i>, since |sec <i>θ</i>| ≥ 1, while sin <i>θ</i> = −0.9, tan <i>θ</i> = 1000 and cos <i>θ</i> = 0 are all fine.',
    say: null,
  },
  // pp. 196, 201
  {
    topic: 1,
    kind: 'mixup',
    q: 'Does cosec pair with sine or with cosine? And is it 1 + tan<sup>2</sup> = sec<sup>2</sup> or csc<sup>2</sup>?',
    a: 'cosec pairs with sine, not cosine, despite the “co”, and sec pairs with cosine: sec = <frac><num>1</num><den>cos</den></frac> and csc = <frac><num>1</num><den>sin</den></frac>. Read the third letter: cosec → s → sine; sec → c → cosine. The Pythagorean pairs follow the same pairing: 1 + tan<sup>2</sup> = sec<sup>2</sup> and 1 + cot<sup>2</sup> = csc<sup>2</sup>; swapping them to 1 + tan<sup>2</sup> = csc<sup>2</sup> is common, and “tan pairs with sec” prevents it',
    why: 'tan <frac><num>π</num><den>2</den></frac>, sec <frac><num>π</num><den>2</den></frac>, cot 0 and csc 0 are undefined, not ∞ or 0.',
    say: null,
  },
  // pp. 198–199, 201
  {
    topic: 1,
    kind: 'mistake',
    q: 'If sin <i>x</i> = <frac><num>3</num><den>5</den></frac> and <i>x</i> lies in the second quadrant, is cos <i>x</i> = <frac><num>4</num><den>5</den></frac>?',
    a: 'No: cos <i>x</i> = −<frac><num>4</num><den>5</den></frac>. cos<sup>2</sup> <i>x</i> = 1 − <frac><num>9</num><den>25</den></frac> = <frac><num>16</num><den>25</den></frac> gives cos <i>x</i> = ±<frac><num>4</num><den>5</den></frac>, and the ± is decided by the quadrant, never defaulted to +: in Quadrant II cosine is negative. Writing +<frac><num>4</num><den>5</den></frac> here is the single most common board mistake. The rest follow: tan <i>x</i> = −<frac><num>3</num><den>4</den></frac>, cot <i>x</i> = −<frac><num>4</num><den>3</den></frac>, sec <i>x</i> = −<frac><num>5</num><den>4</den></frac>, csc <i>x</i> = <frac><num>5</num><den>3</den></frac>. The partner slip is guessing a sign because “the angle is large”: always reduce modulo 360° first',
    why: '1170° = 3(360°) + 90°: the terminal side is on the positive <i>y</i>-axis, so cos 1170° = 0, neither positive nor negative.',
    say: null,
  },
  // pp. 199, 202
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Find the range of <i>f</i>(<i>x</i>) = 5 sin <i>x</i> − 12 cos <i>x</i> + 3. The fast way?',
    a: 'For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> the range is [−√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)]: memorise it, and many range questions become one square root. Here √(5<sup>2</sup> + 12<sup>2</sup>) = 13, so 5 sin <i>x</i> − 12 cos <i>x</i> ∈ [−13, 13] and <i>f</i>(<i>x</i>) ∈ [−10, 16]. For “find the other functions”, work in two stages: magnitudes from the identity or reference triangle, then signs from the quadrant, kept separate so the sign step never gets skipped. And if a final sin or cos exceeds 1 in magnitude, you have an error: stop and recheck',
    why: 'sin <i>x</i> = <frac><num><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></num><den>2<i>ab</i></den></frac> has a solution only if |<i>a</i>| = |<i>b</i>|, since <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ≥ 2|<i>ab</i>| makes the right side at least 1 in magnitude, with equality only then; then sin <i>x</i> = ±1.',
    say: null,
  },


  // ── Topic 03 · Standard Values, Even-Odd Nature & Allied Angles ──
  // pp. 205, 207, 210–211
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the one rule that reduces sin, cos or tan of any allied angle <i>n</i> · 90° ± <i>θ</i>?',
    a: 'Two questions. Function change? If <i>n</i> is odd (the 90° and 270° cases), the function changes to its co-function (sin ↔ cos, tan ↔ cot, sec ↔ csc); if <i>n</i> is even (180°, 360°), the function stays the same. Sign? Look at which quadrant <i>n</i> · 90° ± <i>θ</i> lands in (for small <i>θ</i>) and give the result the sign that the original function has in that quadrant, by ASTC. Memorised once, this generates every row of the allied-angle table. Odd multiples of 90° sit on the vertical axis, and a quarter turn swaps the horizontal and vertical coordinates, cos ↔ sin; even multiples sit on the horizontal axis, and a half or full turn changes only signs. For angles above 360° or below 0°, subtract or add multiples of 360° first',
    why: 'sin 1230°: 1230° − 3(360°) = 150° = 180° − 30°, Quadrant II, sine positive, so sin 1230° = sin 30° = <frac><num>1</num><den>2</den></frac>.',
    say: '90° flips, 180° doesn’t.',
  },
  // pp. 203, 205, 207, 211
  {
    topic: 2,
    kind: 'remember',
    q: 'Where do the standard values at 0°, 30°, 45°, 60° and 90° come from, and how do you recall them?',
    a: 'From two special triangles. The 45–45–90, half of a square, with legs 1 and hypotenuse √2: sin 45° = cos 45° = <frac><num>1</num><den>√2</den></frac>, tan 45° = 1. The 30–60–90, half of an equilateral triangle of side 2, with hypotenuse 2, base 1 and height √3: sin 30° = cos 60° = <frac><num>1</num><den>2</den></frac>, sin 60° = cos 30° = <frac><num>√3</num><den>2</den></frac>. 0° and 90° are read off the unit circle, (1, 0) and (0, 1). The sine row is <frac><num>√0</num><den>2</den></frac>, <frac><num>√1</num><den>2</den></frac>, <frac><num>√2</num><den>2</den></frac>, <frac><num>√3</num><den>2</den></frac>, <frac><num>√4</num><den>2</den></frac>; the cosine row is the same list reversed; tan runs 0, <frac><num>1</num><den>√3</den></frac>, 1, √3 and is undefined at 90°. Five standard angles and one reduction rule give the value at every multiple of 30° and of 45°',
    why: 'sin 150° cos 120° + cos 330° sin 660° = <frac><num>1</num><den>2</den></frac>(−<frac><num>1</num><den>2</den></frac>) + <frac><num>√3</num><den>2</den></frac>(−<frac><num>√3</num><den>2</den></frac>) = −1.',
    say: 'sin of 0°, 30°, 45°, 60°, 90° is <frac><num>√0</num><den>2</den></frac>, <frac><num>√1</num><den>2</den></frac>, <frac><num>√2</num><den>2</den></frac>, <frac><num>√3</num><den>2</den></frac>, <frac><num>√4</num><den>2</den></frac>. The cosine row is the same list reversed.',
  },
  // pp. 205–207, 210
  {
    topic: 2,
    kind: 'remember',
    q: 'Which trigonometric functions are even and which odd, and why?',
    a: 'Replacing <i>θ</i> by −<i>θ</i> reflects the point across the <i>x</i>-axis, (cos <i>θ</i>, sin <i>θ</i>) ↦ (cos <i>θ</i>, −sin <i>θ</i>): the <i>x</i>-coordinate is unchanged, so cos(−<i>θ</i>) = cos <i>θ</i> (even), and the <i>y</i>-coordinate flips, so sin(−<i>θ</i>) = −sin <i>θ</i> (odd); dividing, tan(−<i>θ</i>) = −tan <i>θ</i>. Reciprocals inherit this: only cosine and secant are even, and sin, csc, tan and cot are odd. Pulling a minus out of cos(−<i>θ</i>) is wrong',
    why: 'cos(−300°) = cos 300° = cos(360° − 60°), Quadrant IV, cosine positive: +cos 60° = <frac><num>1</num><den>2</den></frac>.',
    say: null,
  },
  // p. 209
  {
    topic: 2,
    kind: 'mixup',
    q: 'tan(90° + <i>θ</i>) · cot(90° − <i>θ</i>) or tan(90° + <i>θ</i>) · tan(90° − <i>θ</i>): which one is −1?',
    a: 'The first. tan(90° + <i>θ</i>) = −cot <i>θ</i> and cot(90° − <i>θ</i>) = tan <i>θ</i>, so the product is exactly (−cot <i>θ</i>)(tan <i>θ</i>) = −1. The tan · tan pairing gives (−cot <i>θ</i>)(cot <i>θ</i>) = −cot<sup>2</sup> <i>θ</i> instead, which equals −1 only when <i>θ</i> = 45° + 90°<i>n</i>; that is why the second factor must be cot(90° − <i>θ</i>)',
    why: 'tan(90° + <i>θ</i>): <i>n</i> = 1 is odd, so tan → cot, and 90° + <i>θ</i> is in Quadrant II, where tangent is negative.',
    say: null,
  },
  // pp. 209–210
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is cos(90° + <i>θ</i>) equal to −cos <i>θ</i>? And is sin 120° = −<frac><num>√3</num><den>2</den></frac>?',
    a: 'No to both. cos(90° + <i>θ</i>) = −sin <i>θ</i>: <i>n</i> = 1 is odd, so cosine switches to sine, and 90° + <i>θ</i> is in Quadrant II, where cosine is negative. Failing to switch to the co-function at 90° or 270° is the trap; switching but dropping the sign gives sin <i>θ</i>, the other wrong option. sin 120° = +sin 60° = <frac><num>√3</num><den>2</den></frac>: 120° = 180° − 60° is in Quadrant II, where sine is positive. The sign comes from the quadrant of the whole allied angle via ASTC, applied to the original function, so always identify the quadrant first',
    why: 'tan 225° = +tan 45° = 1: 225° = 180° + 45° is in Quadrant III, where tangent is positive, not −1.',
    say: null,
  },
  // pp. 208, 210
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Simplify <frac><num>cos(90° + <i>θ</i>) sec(−<i>θ</i>) tan(180° − <i>θ</i>)</num><den>sec(360° − <i>θ</i>) sin(180° + <i>θ</i>) cot(90° − <i>θ</i>)</den></frac>. The fast way?',
    a: 'Reduce term by term and expand nothing. Numerator: (−sin <i>θ</i>)(sec <i>θ</i>)(−tan <i>θ</i>) = tan<sup>2</sup> <i>θ</i>. Denominator: sec <i>θ</i>(−sin <i>θ</i>) tan <i>θ</i> = −tan<sup>2</sup> <i>θ</i>. The answer is −1. Long allied-angle products that collapse to ±1 are a JEE Main favourite (the book’s estimate from past papers, not official figures): when a product is built to collapse and yours does not, recheck a sign. Most reductions have two routes, 135° = 90° + 45° = 180° − 45°: use whichever is faster, and they cross-check each other',
    why: 'sin(90° + <i>θ</i>) cos(180° − <i>θ</i>) + cos(90° − <i>θ</i>) sin(180° + <i>θ</i>) = (cos <i>θ</i>)(−cos <i>θ</i>) + (sin <i>θ</i>)(−sin <i>θ</i>) = −1.',
    say: null,
  },


  // ── Topic 04 · Graphs and Periodicity of Trigonometric Functions ──
  // pp. 212, 214, 216–217, 221
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the period of each trigonometric function, and of sin(<i>bx</i> + <i>c</i>)?',
    a: 'A function is periodic with period <i>T</i> if <i>f</i>(<i>x</i> + <i>T</i>) = <i>f</i>(<i>x</i>) for all <i>x</i>, <i>T</i> being the smallest such positive number (any such <i>T</i> is a period; the smallest is the period). sin, cos, sec and csc have period 2π: a point on the unit circle returns to the same location only after a whole turn. tan and cot have period π: adding π flips the signs of both sine and cosine, and the two minus signs cancel in the ratio, tan(<i>x</i> + π) = <frac><num>−sin <i>x</i></num><den>−cos <i>x</i></den></frac> = tan <i>x</i>. Scaling: sin(<i>bx</i>) completes one cycle when <i>bx</i> increases by 2π, so the period of sin(<i>bx</i> + <i>c</i>), cos, sec and csc is <frac><num>2π</num><den>|<i>b</i>|</den></frac>, and of tan(<i>bx</i> + <i>c</i>) and cot <frac><num>π</num><den>|<i>b</i>|</den></frac>; the constant <i>c</i> only shifts the graph. |sin <i>x</i>|, |cos <i>x</i>|, sin<sup>2</sup> <i>x</i> and cos<sup>2</sup> <i>x</i> have period π',
    why: 'sin 3<i>x</i> has period <frac><num>2π</num><den>3</den></frac>, tan 2<i>x</i> has <frac><num>π</num><den>2</den></frac>, and cos <frac><num><i>x</i></num><den>2</den></frac> has <frac><num>2π</num><den><frac><num>1</num><den>2</den></frac></den></frac> = 4π.',
    say: null,
  },
  // pp. 214–215, 217, 219, 221
  {
    topic: 3,
    kind: 'remember',
    q: 'For <i>y</i> = <i>a</i> sin(<i>bx</i> + <i>c</i>) + <i>d</i>, what are the amplitude, period, phase shift and range?',
    a: '|<i>a</i>| stretches the wave vertically: amplitude |<i>a</i>|. <i>b</i> squeezes it horizontally: bigger |<i>b</i>| means more oscillations in the same space, so a shorter period <frac><num>2π</num><den>|<i>b</i>|</den></frac>. <i>c</i> slides it left or right: phase shift −<frac><num><i>c</i></num><den><i>b</i></den></frac>. <i>d</i> lifts the whole wave up or down: vertical shift <i>d</i>. Range [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|]; the same holds for cos. A minus on <i>a</i> flips the graph vertically but does not change amplitude or period',
    why: '<i>y</i> = 5 sin(2<i>x</i> − <frac><num>π</num><den>3</den></frac>) + 1 has amplitude 5, period <frac><num>2π</num><den>2</den></frac> = π and range [1 − 5, 1 + 5] = [−4, 6].',
    say: null,
  },
  // pp. 215, 217, 221
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the key features of the six graphs?',
    a: 'A graph is the unit circle, unrolled: the sin graph is the <i>y</i>-coordinate plotted against the angle walked. sin <i>x</i>: domain ℝ, range [−1, 1], odd (origin-symmetric), 0 at <i>n</i>π, max +1 at <frac><num>π</num><den>2</den></frac> + 2<i>n</i>π. cos <i>x</i>: even (<i>y</i>-axis symmetric), max +1 at 2<i>n</i>π, 0 at (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; it is the sine wave shifted left by <frac><num>π</num><den>2</den></frac>, since cos <i>x</i> = sin(<i>x</i> + <frac><num>π</num><den>2</den></frac>). tan <i>x</i>: increasing branches, range ℝ; cot <i>x</i>: decreasing branches. sec <i>x</i> and csc <i>x</i>: U-shapes opening from the cosine and sine extremes, range (−∞, −1] ∪ [1, ∞): since |cos <i>x</i>| ≤ 1, |sec <i>x</i>| ≥ 1, and where cos <i>x</i> → 0 the secant shoots to ±∞',
    why: '<i>y</i> = 2 sec <i>x</i> has domain <i>x</i> ≠ (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac> and range (−∞, −2] ∪ [2, ∞): the factor 2 widens the gap to (−2, 2).',
    say: null,
  },
  // pp. 220–221
  {
    topic: 3,
    kind: 'mixup',
    q: 'Where are the vertical asymptotes of tan and sec, and where those of cot and csc?',
    a: 'tan and sec blow up where cos = 0, at the odd multiples of <frac><num>π</num><den>2</den></frac>, <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; cot and csc where sin = 0, at <i>x</i> = <i>n</i>π. <i>x</i> = <i>n</i>π are the zeros of tan <i>x</i>, not its asymptotes: they are cot <i>x</i>’s asymptotes. Swapping the two is the trap',
    why: 'The base periods follow the same split: sin, cos, sec, csc ⇒ 2π; tan, cot ⇒ π.',
    say: null,
  },
  // pp. 217, 219–220
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is the period of sin 5<i>x</i> equal to 5 · 2π, and is the period of |sin <i>x</i>| + |cos <i>x</i>| equal to π?',
    a: 'No to both. sin(<i>bx</i>) has period <frac><num>2π</num><den>|<i>b</i>|</den></frac>, not 2π · <i>b</i>: <frac><num>2π</num><den>5</den></frac>, since bigger |<i>b</i>| means a shorter period; and tan 3<i>x</i> has <frac><num>π</num><den>3</den></frac>, not <frac><num>2π</num><den>3</den></frac>, the base being π. The LCM of the parts, when it exists, is a period of a sum, but check for a smaller one: |cos <i>x</i>| = |sin(<i>x</i> + <frac><num>π</num><den>2</den></frac>)|, so <i>f</i>(<i>x</i> + <frac><num>π</num><den>2</den></frac>) = |cos <i>x</i>| + |sin <i>x</i>| = <i>f</i>(<i>x</i>) and the period is <frac><num>π</num><den>2</den></frac>. Likewise sin<sup>2</sup> <i>x</i> = <frac><num>1 − cos 2<i>x</i></num><den>2</den></frac> has period π, not 2π. And the range of <i>a</i> sin <i>x</i> + <i>d</i> keeps the shift: [<i>d</i> − |<i>a</i>|, <i>d</i> + |<i>a</i>|], not [−|<i>a</i>|, |<i>a</i>|]',
    why: '<i>y</i> = 3 cos <i>x</i> − 2 has range [−2 − 3, −2 + 3] = [−5, 1]; [−1, 5] gets the sign of the shift wrong.',
    say: null,
  },
  // pp. 214, 219, 221
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Solve sin <i>x</i> ≥ <frac><num>1</num><den>2</den></frac> on [0, 2π], and count the solutions of |sin <i>x</i>| = |cos <i>x</i>| there. The fast way?',
    a: 'Graph it. Draw the cut line <i>y</i> = <frac><num>1</num><den>2</den></frac> and shade where the sine curve sits on or above it: between its two crossings, <i>x</i> ∈ [<frac><num>π</num><den>6</den></frac>, <frac><num>5π</num><den>6</den></frac>], and by periodicity [2<i>n</i>π + <frac><num>π</num><den>6</den></frac>, 2<i>n</i>π + <frac><num>5π</num><den>6</den></frac>], <i>n</i> ∈ ℤ; the brackets are closed because the inequality is not strict. For “number of solutions”, graph both sides and count intersections, far faster than solving: |sin <i>x</i>| = |cos <i>x</i>| ⟺ |tan <i>x</i>| = 1, the four points <frac><num>π</num><den>4</den></frac>, <frac><num>3π</num><den>4</den></frac>, <frac><num>5π</num><den>4</den></frac>, <frac><num>7π</num><den>4</den></frac> where the two “tent” graphs meet. Sketch from five points per period, the quadrantal values',
    why: 'cos <i>x</i> ≤ −<frac><num>1</num><den>2</den></frac> on [0, 2π] between its crossings: <i>x</i> ∈ [<frac><num>2π</num><den>3</den></frac>, <frac><num>4π</num><den>3</den></frac>].',
    say: null,
  },


  // ── Topic 05 · Trigonometric Identities and Compound Angle Formulas ──
  // pp. 222–223, 226–227, 233
  {
    topic: 4,
    kind: 'remember',
    q: 'Which one identity do all the compound-angle formulas descend from, and how is it proved?',
    a: 'The cosine difference formula, the master key: cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>. On the unit circle take <i>P</i><sub>1</sub> = (cos <i>A</i>, sin <i>A</i>), <i>P</i><sub>2</sub> = (cos <i>B</i>, sin <i>B</i>), <i>P</i><sub>3</sub> = (cos(<i>A</i> − <i>B</i>), sin(<i>A</i> − <i>B</i>)) and <i>P</i><sub>4</sub> = (1, 0). The chords <i>P</i><sub>1</sub><i>P</i><sub>2</sub> and <i>P</i><sub>3</sub><i>P</i><sub>4</sub> both subtend <i>A</i> − <i>B</i> at the centre, so they are equal; their squares are 2 − 2(cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>) and 2 − 2 cos(<i>A</i> − <i>B</i>). Then: <i>B</i> → −<i>B</i> gives cos(<i>A</i> + <i>B</i>); the cofunction shift sin <i>θ</i> = cos(<frac><num>π</num><den>2</den></frac> − <i>θ</i>) gives sin(<i>A</i> ± <i>B</i>); <i>B</i> = <i>A</i> gives the double angles; halving gives the half angles; adding and subtracting pairs gives product-to-sum. One idea wearing eight costumes',
    why: 'sin does not distribute over +: with <i>A</i> = <i>B</i> = 30°, sin 60° = <frac><num>√3</num><den>2</den></frac> ≈ 0.87, but sin 30° + sin 30° = 1.',
    say: null,
  },
  // pp. 224–225, 227, 233
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the sum and difference formulas for sin, cos and tan?',
    a: 'cos(<i>A</i> ± <i>B</i>) = cos <i>A</i> cos <i>B</i> ∓ sin <i>A</i> sin <i>B</i>; sin(<i>A</i> ± <i>B</i>) = sin <i>A</i> cos <i>B</i> ± cos <i>A</i> sin <i>B</i>; tan(<i>A</i> ± <i>B</i>) = <frac><num>tan <i>A</i> ± tan <i>B</i></num><den>1 ∓ tan <i>A</i> tan <i>B</i></den></frac>, got by dividing sin(<i>A</i> + <i>B</i>) by cos(<i>A</i> + <i>B</i>) and then top and bottom by cos <i>A</i> cos <i>B</i>. Also cot(<i>A</i> + <i>B</i>) = <frac><num>cot <i>A</i> cot <i>B</i> − 1</num><den>cot <i>B</i> + cot <i>A</i></den></frac>, and the useful products sin(<i>A</i> + <i>B</i>) sin(<i>A</i> − <i>B</i>) = sin<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i> and cos(<i>A</i> + <i>B</i>) cos(<i>A</i> − <i>B</i>) = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i>',
    why: 'cos 15° = cos(45° − 30°) = <frac><num>1</num><den>√2</den></frac> · <frac><num>√3</num><den>2</den></frac> + <frac><num>1</num><den>√2</den></frac> · <frac><num>1</num><den>2</den></frac> = <frac><num>√6 + √2</num><den>4</den></frac>, and tan 75° = tan(45° + 30°) = 2 + √3.',
    say: 'For cosine the sign flips (cos(<i>A</i> + <i>B</i>) takes the −); for sine the sign follows (sin(<i>A</i> + <i>B</i>) takes the +); for tangent the denominator sign is opposite the numerator’s.',
  },
  // pp. 225, 227, 232–233
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the double-angle formulas, and which form of cos 2<i>A</i> do you use when?',
    a: 'Set <i>B</i> = <i>A</i>: sin 2<i>A</i> = 2 sin <i>A</i> cos <i>A</i> = <frac><num>2 tan <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac>; cos 2<i>A</i> = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>A</i> = 2 cos<sup>2</sup> <i>A</i> − 1 = 1 − 2 sin<sup>2</sup> <i>A</i> = <frac><num>1 − tan<sup>2</sup> <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac>, the alternatives coming from sin<sup>2</sup> <i>A</i> + cos<sup>2</sup> <i>A</i> = 1; tan 2<i>A</i> = <frac><num>2 tan <i>A</i></num><den>1 − tan<sup>2</sup> <i>A</i></den></frac>. If given sin <i>A</i>, use 1 − 2 sin<sup>2</sup> <i>A</i>; if given cos <i>A</i>, use 2 cos<sup>2</sup> <i>A</i> − 1; if given tan <i>A</i>, use <frac><num>1 − tan<sup>2</sup> <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac>',
    why: '<frac><num>sin 2<i>A</i></num><den>1 + cos 2<i>A</i></den></frac> = <frac><num>2 sin <i>A</i> cos <i>A</i></num><den>2 cos<sup>2</sup> <i>A</i></den></frac> = tan <i>A</i>.',
    say: null,
  },
  // pp. 225, 227, 229, 233
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the half-angle, the <i>t</i> = tan <frac><num><i>A</i></num><den>2</den></frac> and the triple-angle formulas?',
    a: 'Rearranging the double angles: cos<sup>2</sup> <i>A</i> = <frac><num>1 + cos 2<i>A</i></num><den>2</den></frac> and sin<sup>2</sup> <i>A</i> = <frac><num>1 − cos 2<i>A</i></num><den>2</den></frac>, so 1 + cos <i>A</i> = 2 cos<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac>, 1 − cos <i>A</i> = 2 sin<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac>, and tan <frac><num><i>A</i></num><den>2</den></frac> = <frac><num>sin <i>A</i></num><den>1 + cos <i>A</i></den></frac> = <frac><num>1 − cos <i>A</i></num><den>sin <i>A</i></den></frac>. With <i>t</i> = tan <frac><num><i>A</i></num><den>2</den></frac>: sin <i>A</i> = <frac><num>2<i>t</i></num><den>1 + <i>t</i><sup>2</sup></den></frac>, cos <i>A</i> = <frac><num>1 − <i>t</i><sup>2</sup></num><den>1 + <i>t</i><sup>2</sup></den></frac>, tan <i>A</i> = <frac><num>2<i>t</i></num><den>1 − <i>t</i><sup>2</sup></den></frac>, turning any rational trig expression into a rational function of <i>t</i>. From 3<i>A</i> = 2<i>A</i> + <i>A</i>: sin 3<i>A</i> = 3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i>, cos 3<i>A</i> = 4 cos<sup>3</sup> <i>A</i> − 3 cos <i>A</i>, tan 3<i>A</i> = <frac><num>3 tan <i>A</i> − tan<sup>3</sup> <i>A</i></num><den>1 − 3 tan<sup>2</sup> <i>A</i></den></frac>',
    why: 'sin 3<i>A</i> = 2 sin <i>A</i> cos<sup>2</sup> <i>A</i> + (1 − 2 sin<sup>2</sup> <i>A</i>) sin <i>A</i> = 2 sin <i>A</i>(1 − sin<sup>2</sup> <i>A</i>) + sin <i>A</i> − 2 sin<sup>3</sup> <i>A</i> = 3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i>.',
    say: null,
  },
  // pp. 223, 226, 229, 233
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the product-to-sum and sum-to-product formulas, and how is one got from the other?',
    a: 'Product to sum, from adding and subtracting the sine and cosine sum and difference formulas: 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>), 2 cos <i>A</i> sin <i>B</i> = sin(<i>A</i> + <i>B</i>) − sin(<i>A</i> − <i>B</i>), 2 cos <i>A</i> cos <i>B</i> = cos(<i>A</i> + <i>B</i>) + cos(<i>A</i> − <i>B</i>), 2 sin <i>A</i> sin <i>B</i> = cos(<i>A</i> − <i>B</i>) − cos(<i>A</i> + <i>B</i>). Sum to product: set <i>C</i> = <i>A</i> + <i>B</i>, <i>D</i> = <i>A</i> − <i>B</i>, so <i>A</i> = <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> and <i>B</i> = <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>: sin <i>C</i> + sin <i>D</i> = 2 sin <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> cos <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>, sin <i>C</i> − sin <i>D</i> = 2 cos <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> sin <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>, cos <i>C</i> + cos <i>D</i> = 2 cos <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> cos <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>, cos <i>C</i> − cos <i>D</i> = −2 sin <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> sin <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>. So two tones add to a single tone at the average frequency, amplitude-modulated at the difference frequency: literally why a slightly-detuned tanpura “beats”',
    why: '<frac><num>sin 3<i>A</i> + sin <i>A</i></num><den>cos 3<i>A</i> + cos <i>A</i></den></frac> = <frac><num>2 sin 2<i>A</i> cos <i>A</i></num><den>2 cos 2<i>A</i> cos <i>A</i></den></frac> = tan 2<i>A</i>: convert top and bottom to products and the common factor cancels.',
    say: null,
  },
  // pp. 223, 226, 229–230, 232–233
  {
    topic: 4,
    kind: 'remember',
    q: 'How is <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> written as one wave, and what are its maximum and minimum?',
    a: 'Expand <i>R</i> cos(<i>x</i> − <i>α</i>) = <i>R</i> cos <i>x</i> cos <i>α</i> + <i>R</i> sin <i>x</i> sin <i>α</i> and match: <i>R</i> cos <i>α</i> = <i>a</i>, <i>R</i> sin <i>α</i> = <i>b</i>. Square and add: <i>R</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), and tan <i>α</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac>. Since cos(<i>x</i> − <i>α</i>) ∈ [−1, 1], the expression ranges over [−<i>R</i>, <i>R</i>]: two component oscillations always collapse into one of amplitude √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), which gives the maximum and minimum without calculus. For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i>, the extremes are <i>c</i> ± √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)',
    why: '7 cos <i>x</i> + 24 sin <i>x</i> + 5: <i>R</i> = √(7<sup>2</sup> + 24<sup>2</sup>) = 25, so the maximum is 30 and the minimum −20.',
    say: null,
  },
  // pp. 226, 230–232
  {
    topic: 4,
    kind: 'remember',
    q: 'If <i>A</i> + <i>B</i> + <i>C</i> = π, why is tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>?',
    a: 'From <i>A</i> + <i>B</i> = π − <i>C</i>: tan(<i>A</i> + <i>B</i>) = tan(π − <i>C</i>) = −tan <i>C</i>, so <frac><num>tan <i>A</i> + tan <i>B</i></num><den>1 − tan <i>A</i> tan <i>B</i></den></frac> = −tan <i>C</i>; cross-multiplying, tan <i>A</i> + tan <i>B</i> = −tan <i>C</i> + tan <i>A</i> tan <i>B</i> tan <i>C</i>. The condition is used at the very first step: drop it and the identity is false. The other conditional identities, for the angles of a triangle: cot <i>A</i> cot <i>B</i> + cot <i>B</i> cot <i>C</i> + cot <i>C</i> cot <i>A</i> = 1, sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i> = 4 sin <i>A</i> sin <i>B</i> sin <i>C</i>, sin <i>A</i> + sin <i>B</i> + sin <i>C</i> = 4 cos <frac><num><i>A</i></num><den>2</den></frac> cos <frac><num><i>B</i></num><den>2</den></frac> cos <frac><num><i>C</i></num><den>2</den></frac> and cos <i>A</i> + cos <i>B</i> + cos <i>C</i> = 1 + 4 sin <frac><num><i>A</i></num><den>2</den></frac> sin <frac><num><i>B</i></num><den>2</den></frac> sin <frac><num><i>C</i></num><den>2</den></frac>',
    why: 'For the cosine sum, pair cos <i>A</i> + cos <i>B</i> = 2 cos <frac><num><i>A</i> + <i>B</i></num><den>2</den></frac> cos <frac><num><i>A</i> − <i>B</i></num><den>2</den></frac> and use cos <frac><num><i>A</i> + <i>B</i></num><den>2</den></frac> = sin <frac><num><i>C</i></num><den>2</den></frac>.',
    say: null,
  },
  // pp. 223, 231–232
  {
    topic: 4,
    kind: 'mixup',
    q: 'cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i> or cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>?',
    a: 'The minus: cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>. The plus is cos(<i>A</i> − <i>B</i>): the sign-flip trap, the single most common error. Cosine “disagrees” with the angle sign; sine “agrees”. Likewise tan(<i>A</i> + <i>B</i>) has 1 − tan <i>A</i> tan <i>B</i> below and tan(<i>A</i> − <i>B</i>) has 1 +. The error is structural, not arithmetic: it means the formula was memorised rather than understood, so re-derive it from cos(<i>A</i> − <i>B</i>)',
    why: 'tan <i>A</i> = <frac><num>1</num><den>2</den></frac> and tan <i>B</i> = <frac><num>1</num><den>3</den></frac> give tan(<i>A</i> + <i>B</i>) = <frac><num><frac><num>5</num><den>6</den></frac></num><den>1 − <frac><num>1</num><den>6</den></frac></den></frac> = 1, so <i>A</i> + <i>B</i> = <frac><num>π</num><den>4</den></frac>; the wrong sign below breaks the clean answer.',
    say: null,
  },
  // pp. 230–232
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the maximum of 5 sin <i>x</i> + 12 cos <i>x</i> equal to 17?',
    a: 'No: 13. For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> the amplitude is √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) = √(5<sup>2</sup> + 12<sup>2</sup>), not <i>a</i> + <i>b</i> (the two agree only when one coefficient is 0), and not √(<i>a</i> + <i>b</i>) either. The other slips that cost marks here: dropping the leading 2 in product-to-sum, since 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>); dropping the minus in cos <i>C</i> − cos <i>D</i> = −2 sin <frac><num><i>C</i> + <i>D</i></num><den>2</den></frac> sin <frac><num><i>C</i> − <i>D</i></num><den>2</den></frac>; and missing the sign from the quadrant inside a compound angle',
    why: 'sin <i>A</i> = <frac><num>3</num><den>5</den></frac> with <i>A</i> acute and cos <i>B</i> = −<frac><num>12</num><den>13</den></frac> with <i>B</i> obtuse: sin <i>B</i> = +<frac><num>5</num><den>13</den></frac>, so sin(<i>A</i> + <i>B</i>) = <frac><num>−36 + 20</num><den>65</den></frac> = −<frac><num>16</num><den>65</den></frac>.',
    say: null,
  },
  // pp. 230, 232
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Prove cos 20° cos 40° cos 80° = <frac><num>1</num><den>8</den></frac>. The fast way?',
    a: 'Multiply and divide by 2 sin 20°, the sine of the smallest angle, and cascade 2 sin <i>θ</i> cos <i>θ</i> = sin 2<i>θ</i>: <frac><num>sin 40° cos 40° cos 80°</num><den>2 sin 20°</den></frac> = <frac><num>sin 80° cos 80°</num><den>4 sin 20°</den></frac> = <frac><num>sin 160°</num><den>8 sin 20°</den></frac> = <frac><num>1</num><den>8</den></frac>, since sin 160° = sin 20°. The deliberate × <frac><num>2 sin 20°</num><den>2 sin 20°</den></frac> is a signature JEE technique that does not appear by pattern-matching. For exact angles, decompose into 30°, 45° and 60°: 15° = 45° − 30°, 75° = 45° + 30°, <frac><num>7π</num><den>12</den></frac> = <frac><num>π</num><den>4</den></frac> + <frac><num>π</num><den>3</den></frac>',
    why: 'sin <frac><num>7π</num><den>12</den></frac> = sin(<frac><num>π</num><den>4</den></frac> + <frac><num>π</num><den>3</den></frac>) = <frac><num>1</num><den>√2</den></frac> · <frac><num>1</num><den>2</den></frac> + <frac><num>1</num><den>√2</den></frac> · <frac><num>√3</num><den>2</den></frac> = <frac><num>√2 + √6</num><den>4</den></frac>.',
    say: null,
  },


  // ── Topic 06 · Trigonometric Equations and Solutions ──
  // pp. 234, 236, 238, 242
  {
    topic: 5,
    kind: 'remember',
    q: 'What is a principal solution, what is a general solution, and when is sin, cos or tan zero?',
    a: 'Trig functions repeat forever, so the answer to a trigonometric equation is almost never a single number but an infinite family captured by one formula with an integer <i>n</i>. A principal solution lies in [0, 2π), the “first lap” answers: sin <i>θ</i> = <frac><num>1</num><den>2</den></frac> has two, <frac><num>π</num><den>6</den></frac> and <frac><num>5π</num><den>6</den></frac>. A general solution packages every solution using <i>n</i> ∈ ℤ: here <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac>. The zero cases: sin <i>θ</i> = 0 ⟺ <i>θ</i> = <i>n</i>π; cos <i>θ</i> = 0 ⟺ <i>θ</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>; tan <i>θ</i> = 0 ⟺ <i>θ</i> = <i>n</i>π. The integer <i>n</i> is mandatory in a general solution',
    why: 'tan <i>x</i> = √3 = tan <frac><num>π</num><den>3</den></frac> has principal solutions <frac><num>π</num><den>3</den></frac> and <frac><num>4π</num><den>3</den></frac>, tangent being positive in Q I and Q III.',
    say: null,
  },
  // pp. 236–238, 242
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the three master general solutions, and where does the sine one come from?',
    a: 'sin <i>θ</i> = sin <i>α</i> ⟺ <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>; cos <i>θ</i> = cos <i>α</i> ⟺ <i>θ</i> = 2<i>n</i>π ± <i>α</i>; tan <i>θ</i> = tan <i>α</i> ⟺ <i>θ</i> = <i>n</i>π + <i>α</i>. Each falls out of sum-to-product: sin <i>θ</i> − sin <i>α</i> = 2 cos <frac><num><i>θ</i> + <i>α</i></num><den>2</den></frac> sin <frac><num><i>θ</i> − <i>α</i></num><den>2</den></frac> = 0, and a product is zero iff a factor is zero, giving <i>θ</i> = 2<i>m</i>π + <i>α</i> (an even multiple of π, plus <i>α</i>) or <i>θ</i> = (2<i>m</i> + 1)π − <i>α</i> (an odd multiple, minus <i>α</i>), which combine into <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>. Cosine is even, which is why both signs appear with the full-turn period; tangent has period π, which is why a single <i>n</i>π appears. The whole topic becomes: reduce the equation to one of these three, then quote the formula',
    why: 'cos <i>x</i> = −<frac><num>1</num><den>2</den></frac> = cos <frac><num>2π</num><den>3</den></frac>, so <i>x</i> = 2<i>n</i>π ± <frac><num>2π</num><den>3</den></frac>, <i>n</i> ∈ ℤ.',
    say: null,
  },
  // pp. 236–238, 242
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the general solutions of the squared, extreme-value and simultaneous cases?',
    a: 'Squared: sin<sup>2</sup> <i>θ</i> = sin<sup>2</sup> <i>α</i>, cos<sup>2</sup> <i>θ</i> = cos<sup>2</sup> <i>α</i> and tan<sup>2</sup> <i>θ</i> = tan<sup>2</sup> <i>α</i> all give <i>θ</i> = <i>n</i>π ± <i>α</i>: sin<sup>2</sup> <i>θ</i> = sin<sup>2</sup> <i>α</i> turns into cos 2<i>θ</i> = cos 2<i>α</i>, so 2<i>θ</i> = 2<i>n</i>π ± 2<i>α</i>. Extremes: sin <i>θ</i> = 1 ⟺ <i>θ</i> = (4<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>, sin <i>θ</i> = −1 ⟺ (4<i>n</i> − 1)<frac><num>π</num><den>2</den></frac>, cos <i>θ</i> = 1 ⟺ 2<i>n</i>π, cos <i>θ</i> = −1 ⟺ (2<i>n</i> + 1)π. Simultaneous: if sin <i>θ</i> = sin <i>α</i> and cos <i>θ</i> = cos <i>α</i> hold together, <i>θ</i> = 2<i>n</i>π + <i>α</i>, since both the value and the quadrant must match and only the +<i>α</i> branch survives',
    why: '2 sin<sup>2</sup> <i>x</i> + sin<sup>2</sup> 2<i>x</i> = 2 with <i>s</i> = sin<sup>2</sup> <i>x</i> becomes (2<i>s</i> − 1)(<i>s</i> − 1) = 0: <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>4</den></frac> or <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>.',
    say: null,
  },
  // pp. 237, 239–240, 242
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you solve <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>, and when does it have no solution?',
    a: 'Write <i>a</i> = <i>R</i> cos <i>α</i>, <i>b</i> = <i>R</i> sin <i>α</i> with <i>R</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) and tan <i>α</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac>: the equation becomes <i>R</i> cos(<i>θ</i> − <i>α</i>) = <i>c</i>, so cos(<i>θ</i> − <i>α</i>) = <frac><num><i>c</i></num><den><i>R</i></den></frac>. It is solvable only if |<i>c</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), the maximum of the left side; otherwise there is no solution. Always convert to this form first: it gives both the solvability test and the clean general solution',
    why: '√3 cos <i>x</i> + sin <i>x</i> = 1: <i>R</i> = 2 and <i>α</i> = <frac><num>π</num><den>6</den></frac>, so cos(<i>x</i> − <frac><num>π</num><den>6</den></frac>) = <frac><num>1</num><den>2</den></frac> and <i>x</i> = 2<i>n</i>π + <frac><num>π</num><den>2</den></frac> or <i>x</i> = 2<i>n</i>π − <frac><num>π</num><den>6</den></frac>.',
    say: null,
  },
  // p. 237
  {
    topic: 5,
    kind: 'remember',
    q: 'What does the root-validity checklist ask before you finalise an answer?',
    a: 'Five questions. Did I keep the integer <i>n</i>? Principal-only answers are incomplete when “general” is asked. Did I divide by something that can be zero? If so, restore the lost factor’s roots. Did I square anywhere? Back-substitute every candidate and discard those that fail. Is each root in the domain? Drop any where tan, sec, cot or csc is undefined. For <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>: is |<i>c</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)? If not, “no solution”',
    why: 'tan <i>x</i> tan 2<i>x</i> = 1 reduces to cos 3<i>x</i> = 0, <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>6</den></frac>, excluding the values where tan <i>x</i> or tan 2<i>x</i> is undefined: <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>6</den></frac>.',
    say: null,
  },
  // pp. 241–242
  {
    topic: 5,
    kind: 'mixup',
    q: '<i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>, 2<i>n</i>π ± <i>α</i>, <i>n</i>π + <i>α</i>, 2<i>n</i>π + <i>α</i>: which equation does each solve?',
    a: 'Sine: sin <i>θ</i> = sin <i>α</i> ⟺ <i>θ</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><i>α</i>. Cosine: 2<i>n</i>π ± <i>α</i>. Tangent: <i>n</i>π + <i>α</i>. 2<i>n</i>π + <i>α</i> is the simultaneous case, sin and cos both matching. Using the cosine family for sine is the signature error: each function has its own form, so never borrow another’s. The squared cases share one form, <i>n</i>π ± <i>α</i>',
    why: 'sin <i>x</i> = −<frac><num>√3</num><den>2</den></frac> = sin(−<frac><num>π</num><den>3</den></frac>) gives <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup>(−<frac><num>π</num><den>3</den></frac>) = <i>n</i>π − (−1)<sup><i>n</i></sup><frac><num>π</num><den>3</den></frac>.',
    say: null,
  },
  // pp. 236, 239, 241
  {
    topic: 5,
    kind: 'mistake',
    q: 'Solving sin 2<i>x</i> = sin <i>x</i>, may you divide both sides by sin <i>x</i>?',
    a: 'No: factor, do not divide. 2 sin <i>x</i> cos <i>x</i> − sin <i>x</i> = sin <i>x</i>(2 cos <i>x</i> − 1) = 0, so sin <i>x</i> = 0 or cos <i>x</i> = <frac><num>1</num><den>2</den></frac>: <i>x</i> = <i>n</i>π or <i>x</i> = 2<i>n</i>π ± <frac><num>π</num><den>3</den></frac>. Dividing by sin <i>x</i> would lose the entire <i>x</i> = <i>n</i>π family, the signature trap: cancelling assumes the factor is non-zero, which is exactly the case you must not drop. Set each factor to zero instead',
    why: 'Dividing tan <i>x</i> = sin <i>x</i> by sin <i>x</i> gives sec <i>x</i> = 1, <i>x</i> = 2<i>n</i>π, and misses <i>x</i> = <i>n</i>π, where tan <i>x</i> = sin <i>x</i> = 0.',
    say: null,
  },
  // pp. 236, 239–241
  {
    topic: 5,
    kind: 'mistake',
    q: 'Squaring sin <i>x</i> + cos <i>x</i> = 1 gives sin 2<i>x</i> = 0, <i>x</i> = <frac><num><i>n</i>π</num><den>2</den></frac>. Are these all solutions?',
    a: 'No: squaring imported false roots. <i>x</i> = π and <i>x</i> = <frac><num>3π</num><den>2</den></frac> are extraneous, since sin π + cos π = −1 and sin <frac><num>3π</num><den>2</den></frac> + cos <frac><num>3π</num><den>2</den></frac> = −1, not 1; squaring can make a false equation look true, as (−1)<sup>2</sup> = 1<sup>2</sup>. Every candidate from a squared step must be checked in the original. The amplitude form avoids squaring: √2 sin(<i>x</i> + <frac><num>π</num><den>4</den></frac>) = 1 gives <i>x</i> = 2<i>n</i>π or <i>x</i> = 2<i>n</i>π + <frac><num>π</num><den>2</den></frac>',
    why: '2 cos<sup>2</sup> <i>x</i> + 3 sin <i>x</i> = 0 gives (2 sin <i>x</i> + 1)(sin <i>x</i> − 2) = 0, and sin <i>x</i> = 2 is rejected by the range.',
    say: null,
  },
  // pp. 239, 241–242
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Solve sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> = 0. The fast way?',
    a: 'Pair the outermost terms for sum-to-product, and the middle term becomes a common factor: sin <i>x</i> + sin 5<i>x</i> = 2 sin 3<i>x</i> cos 2<i>x</i>, so sin 3<i>x</i>(2 cos 2<i>x</i> + 1) = 0. Then sin 3<i>x</i> = 0 gives <i>x</i> = <frac><num><i>n</i>π</num><den>3</den></frac>, and cos 2<i>x</i> = −<frac><num>1</num><den>2</den></frac> gives <i>x</i> = <i>n</i>π ± <frac><num>π</num><den>3</den></frac>, already inside the first family: <i>x</i> = <frac><num><i>n</i>π</num><den>3</den></frac>. The strategy ladder: reduce to a single function, factor to a product = 0, match each factor to a master form, quote the formula, run the checklist. For “the number of solutions in an interval”, solve generally, then count the integer values of <i>n</i> that land inside',
    why: '5 sin <i>x</i> + 12 cos <i>x</i> = 15 has no solution: √(5<sup>2</sup> + 12<sup>2</sup>) = 13 < 15.',
    say: null,
  },


  // ── Topic 07 · Sub-Multiple Angles and the Half-Angle Family ──
  // pp. 243–244, 247–248, 257
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the ± radical forms for sin, cos and tan of <frac><num><i>A</i></num><den>2</den></frac>, and why is the ± there?',
    a: 'sin <frac><num><i>A</i></num><den>2</den></frac> = ±√(<frac><num>1 − cos <i>A</i></num><den>2</den></frac>), cos <frac><num><i>A</i></num><den>2</den></frac> = ±√(<frac><num>1 + cos <i>A</i></num><den>2</den></frac>), tan <frac><num><i>A</i></num><den>2</den></frac> = ±√(<frac><num>1 − cos <i>A</i></num><den>1 + cos <i>A</i></den></frac>), the tan form requiring cos <i>A</i> ≠ −1. They are the double-angle formulas reversed: from cos <i>A</i> = 1 − 2 sin<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac>, sin<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac> = <frac><num>1 − cos <i>A</i></num><den>2</den></frac>, and the square root recovers the size of sin <frac><num><i>A</i></num><den>2</den></frac> and nothing else. Squaring destroyed the sign; the ± is an honest admission that the algebra has run out and the sign must come from geometry, the quadrant in which <frac><num><i>A</i></num><den>2</den></frac> lands. The sign in each formula is chosen independently from the quadrant of <frac><num><i>A</i></num><den>2</den></frac>: not from the quadrant of <i>A</i>, and not the same sign in all three',
    why: 'If cos <i>θ</i> = <frac><num>3</num><den>5</den></frac> and 270° < <i>θ</i> < 360°, then 135° < <frac><num><i>θ</i></num><den>2</den></frac> < 180°, Quadrant II: sin <frac><num><i>θ</i></num><den>2</den></frac> = <frac><num>1</num><den>√5</den></frac>, cos <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>2</num><den>√5</den></frac>, tan <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>1</num><den>2</den></frac>.',
    say: null,
  },
  // pp. 244, 246, 249, 257
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you find the quadrant of <frac><num><i>A</i></num><den>2</den></frac>, and when is sin <frac><num><i>A</i></num><den>2</den></frac> sure to be positive?',
    a: 'Halve the interval, not the quadrant label. Write the interval for <i>A</i> as an explicit inequality, divide every part by 2, read the quadrant of <frac><num><i>A</i></num><den>2</den></frac>, and write the three signs down before computing anything. 180° < <i>A</i> < 270° gives 90° < <frac><num><i>A</i></num><den>2</den></frac> < 135°, Quadrant II: +, −, − for sin, cos, tan. For any <i>A</i> in (0°, 360°), 0° < <frac><num><i>A</i></num><den>2</den></frac> < 180°, so sin <frac><num><i>A</i></num><den>2</den></frac> > 0 always; but the shortcut fails past one revolution: 540° < <i>A</i> < 630° is still loosely “the third quadrant”, yet 270° < <frac><num><i>A</i></num><den>2</den></frac> < 315° is Quadrant IV, where sin <frac><num><i>A</i></num><den>2</den></frac> is negative. If cos <i>A</i> was not given, compute it using the quadrant of <i>A</i>, not of <frac><num><i>A</i></num><den>2</den></frac>',
    why: 'If sin <i>x</i> = <frac><num>1</num><den>4</den></frac> with <i>x</i> in Quadrant II, then 45° < <frac><num><i>x</i></num><den>2</den></frac> < 90° and all three half-angle values are positive: cos <i>x</i> = −<frac><num>√15</num><den>4</den></frac>, sin <frac><num><i>x</i></num><den>2</den></frac> = <frac><num>√5 + √3</num><den>4</den></frac>.',
    say: null,
  },
  // pp. 244, 246, 248, 257
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the sign-free forms of tan <frac><num><i>A</i></num><den>2</den></frac>, and what does <i>t</i> = tan <frac><num><i>A</i></num><den>2</den></frac> give?',
    a: 'tan <frac><num><i>A</i></num><den>2</den></frac> = <frac><num>sin <i>A</i></num><den>1 + cos <i>A</i></den></frac> (cos <i>A</i> ≠ −1) = <frac><num>1 − cos <i>A</i></num><den>sin <i>A</i></den></frac> (sin <i>A</i> ≠ 0), got by dividing 1 − cos <i>A</i> = 2 sin<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac> by sin <i>A</i> = 2 sin <frac><num><i>A</i></num><den>2</den></frac> cos <frac><num><i>A</i></num><den>2</den></frac>. No square root was taken, so no ± is needed: the sign is already carried by sin <i>A</i>, and wherever tan <frac><num><i>A</i></num><den>2</den></frac> is defined, at least one of the two is usable. With <i>t</i> = tan <frac><num><i>A</i></num><den>2</den></frac>: sin <i>A</i> = <frac><num>2<i>t</i></num><den>1 + <i>t</i><sup>2</sup></den></frac>, cos <i>A</i> = <frac><num>1 − <i>t</i><sup>2</sup></num><den>1 + <i>t</i><sup>2</sup></den></frac>, tan <i>A</i> = <frac><num>2<i>t</i></num><den>1 − <i>t</i><sup>2</sup></den></frac>, one dial instead of three: any expression built from sin <i>A</i> and cos <i>A</i> by adding, multiplying and dividing becomes a rational function of <i>t</i>. It is valid for all <i>A</i> ≠ (2<i>n</i> + 1)π, where tan <frac><num><i>A</i></num><den>2</den></frac> is undefined',
    why: 'If tan <frac><num><i>θ</i></num><den>2</den></frac> = <frac><num>5</num><den>12</den></frac>: sin <i>θ</i> = <frac><num>120</num><den>169</den></frac>, cos <i>θ</i> = <frac><num>119</num><den>169</den></frac>, tan <i>θ</i> = <frac><num>120</num><den>119</den></frac>.',
    say: null,
  },
  // pp. 244, 247–249, 254, 257
  {
    topic: 6,
    kind: 'remember',
    q: 'How is sin 18° found exactly, and what are the pentagon values?',
    a: 'Let <i>θ</i> = 18°, so 5<i>θ</i> = 90° and 2<i>θ</i> = 90° − 3<i>θ</i>; taking sines, sin 2<i>θ</i> = cos 3<i>θ</i>, so 2 sin <i>θ</i> cos <i>θ</i> = cos <i>θ</i>(4 cos<sup>2</sup> <i>θ</i> − 3). cos 18° ≠ 0, so cancel it: 2 sin <i>θ</i> = 1 − 4 sin<sup>2</sup> <i>θ</i>, the quadratic 4 sin<sup>2</sup> <i>θ</i> + 2 sin <i>θ</i> − 1 = 0, with sin <i>θ</i> = <frac><num>−1 ± √5</num><den>4</den></frac>. 18° is in Quadrant I, so the negative root is rejected: sin 18° = cos 72° = <frac><num>√5 − 1</num><den>4</den></frac> ≈ 0.30902. Then cos 36° = 1 − 2 sin<sup>2</sup> 18° = sin 54° = <frac><num>√5 + 1</num><den>4</den></frac> ≈ 0.80902, cos 18° = sin 72° = <frac><num>√(10 + 2√5)</num><den>4</den></frac> and sin 36° = cos 54° = <frac><num>√(10 − 2√5)</num><den>4</den></frac>. The consequences: sin 18° · cos 36° = <frac><num>1</num><den>4</den></frac>, the surds being conjugates, and cos 36° − sin 18° = <frac><num>1</num><den>2</den></frac>',
    why: 'The same trick with 7<i>θ</i> = 180° leads to a cubic, not a quadratic, which is precisely why sin 18° is a standard value and sin(<frac><num>180°</num><den>7</den></frac>) is not.',
    say: null,
  },
  // pp. 251–252, 255, 257
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you solve <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i> by the <i>t</i>-substitution, and which roots can it miss?',
    a: 'Set <i>t</i> = tan <frac><num><i>θ</i></num><den>2</den></frac>, substitute, and multiply through by 1 + <i>t</i><sup>2</sup>, which is never zero, so no roots are gained or lost: (<i>a</i> + <i>c</i>)<i>t</i><sup>2</sup> − 2<i>bt</i> + (<i>c</i> − <i>a</i>) = 0. Its discriminant is 4(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>), so real roots exist exactly when <i>c</i><sup>2</sup> ≤ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, the same solvability condition as the amplitude method. Invert: <i>θ</i> = 2<i>n</i>π + 2 tan<sup>−1</sup> <i>t</i>, <i>n</i> ∈ ℤ. Then test <i>θ</i> = (2<i>n</i> + 1)π separately: there <i>t</i> is undefined and the substitution cannot see them; direct substitution gives −<i>a</i>, so they are solutions if and only if <i>c</i> = −<i>a</i>. That is the one place the method silently loses roots',
    why: '3 cos <i>x</i> + 4 sin <i>x</i> = 5 gives 4<i>t</i><sup>2</sup> − 4<i>t</i> + 1 = (2<i>t</i> − 1)<sup>2</sup> = 0, a repeated root <i>t</i> = <frac><num>1</num><den>2</den></frac>: <i>c</i> = 5 = √(3<sup>2</sup> + 4<sup>2</sup>) sits exactly at the boundary of solvability.',
    say: null,
  },
  // pp. 247, 255–256
  {
    topic: 6,
    kind: 'mixup',
    q: 'Which is sin 18° and which is cos 36°: <frac><num>√5 − 1</num><den>4</den></frac> or <frac><num>√5 + 1</num><den>4</den></frac>?',
    a: 'sin 18° = <frac><num>√5 − 1</num><den>4</den></frac> ≈ 0.309 and cos 36° = <frac><num>√5 + 1</num><den>4</den></frac> ≈ 0.809. The two headline values differ only in one sign, and that is the whole memory load: minus for the smaller angle’s sine. 18° is a small angle, so its sine must be small, about 0.31, not 0.81. <frac><num>1 − √5</num><den>4</den></frac> is −sin 18°, the right magnitude with the wrong sign, and <frac><num>√5 − 1</num><den>2</den></frac> ≈ 0.618 is twice the correct value, from dividing the numerator of <frac><num>−2 + 2√5</num><den>8</den></frac> by 2 but the denominator by 4',
    why: 'sin 18° + cos 36° = <frac><num>2√5</num><den>4</den></frac> = <frac><num>√5</num><den>2</den></frac> ≈ 1.11803.',
    say: null,
  },
  // pp. 252–253, 256
  {
    topic: 6,
    kind: 'mistake',
    q: 'Given cos <i>θ</i> = −<frac><num>7</num><den>25</den></frac> with 180° < <i>θ</i> < 270°, is sin <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>4</num><den>5</den></frac>, since sine is negative in Quadrant III?',
    a: 'No: +<frac><num>4</num><den>5</den></frac>. That reasoning applies the quadrant of <i>θ</i> to a question about <frac><num><i>θ</i></num><den>2</den></frac>, the single most common error in this pattern, worth zero marks although the magnitude is right. Halving gives 90° < <frac><num><i>θ</i></num><den>2</den></frac> < 135°, Quadrant II, where sine is positive: sin <frac><num><i>θ</i></num><den>2</den></frac> = √(<frac><num>16</num><den>25</den></frac>) = <frac><num>4</num><den>5</den></frac>, and cos <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>3</num><den>5</den></frac>. The wrong −<frac><num>4</num><den>5</den></frac> survives the Pythagorean check, because squares are blind to the sign: verify with sin <i>θ</i> = 2 sin <frac><num><i>θ</i></num><den>2</den></frac> cos <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>24</num><den>25</den></frac>, correctly negative for Quadrant III. Taking the same sign for all three functions is the partner slip',
    why: 'With 540° < <i>θ</i> < 630° and the same cos <i>θ</i>, halving gives Quadrant IV and sin <frac><num><i>θ</i></num><den>2</den></frac> = −<frac><num>4</num><den>5</den></frac> genuinely is the answer: the interval decides, not the quadrant name.',
    say: null,
  },
  // pp. 249–251, 256
  {
    topic: 6,
    kind: 'shortcut',
    q: 'If cos <i>x</i> = −<frac><num>1</num><den>3</den></frac> and <i>x</i> lies in the third quadrant, find tan <frac><num><i>x</i></num><den>2</den></frac>. The fast way?',
    a: 'When sin <i>A</i> is available, prefer the sign-free forms: they eliminate the sign decision for the tangent entirely. Here sin <i>x</i> = −<frac><num>2√2</num><den>3</den></frac> (Quadrant III), so tan <frac><num><i>x</i></num><den>2</den></frac> = <frac><num>sin <i>x</i></num><den>1 + cos <i>x</i></den></frac> = <frac><num>−<frac><num>2√2</num><den>3</den></frac></num><den><frac><num>2</num><den>3</den></frac></den></frac> = −√2. By the radicals, π < <i>x</i> < <frac><num>3π</num><den>2</den></frac> puts <frac><num><i>x</i></num><den>2</den></frac> in Quadrant II: sin <frac><num><i>x</i></num><den>2</den></frac> = <frac><num>√6</num><den>3</den></frac>, cos <frac><num><i>x</i></num><den>2</den></frac> = −<frac><num>√3</num><den>3</den></frac>, and their ratio agrees, −√2. The check 2 sin <frac><num><i>A</i></num><den>2</den></frac> cos <frac><num><i>A</i></num><den>2</den></frac> = sin <i>A</i> takes eight seconds and catches a sign mismatch; the halved interval catches a wrong quadrant',
    why: 'Reach for the <i>t</i>-substitution whenever an equation is a rational combination of sin <i>θ</i> and cos <i>θ</i> with no obvious factorisation: it never requires insight, only algebra.',
    say: null,
  },


  // ── Topic 08 · Properties of Triangles: Sine Rule, Cosine Rule and Area ──
  // pp. 258, 260, 262, 271
  {
    topic: 7,
    kind: 'remember',
    q: 'What does the sine rule say, and why is the common ratio 2<i>R</i>?',
    a: 'With <i>a</i> = <i>BC</i>, <i>b</i> = <i>CA</i>, <i>c</i> = <i>AB</i>, each side named by the opposite vertex: <frac><num><i>a</i></num><den>sin <i>A</i></den></frac> = <frac><num><i>b</i></num><den>sin <i>B</i></den></frac> = <frac><num><i>c</i></num><den>sin <i>C</i></den></frac> = 2<i>R</i>, <i>R</i> the circumradius, so <i>a</i> = 2<i>R</i> sin <i>A</i>, <i>b</i> = 2<i>R</i> sin <i>B</i>, <i>c</i> = 2<i>R</i> sin <i>C</i>. The altitude <i>h</i> from <i>C</i> is both <i>b</i> sin <i>A</i> and <i>a</i> sin <i>B</i>, which gives the equal ratios. For the constant: the chord <i>BC</i> subtends <i>A</i> at the circumference and 2<i>A</i> at the centre, and the perpendicular from the centre bisects it, so <frac><num><i>a</i></num><den>2</den></frac> = <i>R</i> sin <i>A</i>. It is valid in every triangle, acute, right or obtuse, and it pairs each side with the angle opposite it: use it when the data come in an opposite pair. Its limitation: since sin <i>θ</i> = sin(π − <i>θ</i>), solving for an angle leaves an acute/obtuse ambiguity the rule cannot settle',
    why: '<i>A</i> = 45°, <i>B</i> = 60°, <i>a</i> = 6: <i>C</i> = 75° and 2<i>R</i> = <frac><num>6</num><den>sin 45°</den></frac> = 6√2, so <i>b</i> = 6√2 sin 60° = 3√6.',
    say: null,
  },
  // pp. 258, 260–263, 271
  {
    topic: 7,
    kind: 'remember',
    q: 'What does the cosine rule say, and what does the sign of cos <i>A</i> tell you?',
    a: '<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i>, and cyclically; rearranged, cos <i>A</i> = <frac><num><i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>a</i><sup>2</sup></num><den>2<i>bc</i></den></frac>, “the other two squared, minus the opposite one squared”, over twice the product of the other two. Placing <i>A</i> at the origin, <i>B</i> = (<i>c</i>, 0) and <i>C</i> = (<i>b</i> cos <i>A</i>, <i>b</i> sin <i>A</i>), the distance formula proves it. It is Pythagoras with a correction term: at <i>A</i> = 90° it collapses to <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>. Its sign is decisive: cos <i>A</i> < 0 ⟺ <i>a</i><sup>2</sup> > <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> ⟺ <i>A</i> is obtuse, which is why the cosine rule can tell an obtuse angle from an acute one and the sine rule cannot. Use it with all three sides, or two sides and the angle between them. The projection formulae follow from it: <i>a</i> = <i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i>, and cyclically',
    why: '<i>a</i> = 2, <i>b</i> = 3, <i>C</i> = 60°: <i>c</i><sup>2</sup> = 4 + 9 − 2(2)(3) cos 60° = 7, so <i>c</i> = √7.',
    say: null,
  },
  // pp. 258, 261, 271
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the area formulas of a triangle, and how do you get <i>R</i> and <i>r</i>?',
    a: 'All five give the same number; choosing the right one is the entire skill. Δ = <frac><num>1</num><den>2</den></frac><i>ab</i> sin <i>C</i> = <frac><num>1</num><den>2</den></frac><i>bc</i> sin <i>A</i> = <frac><num>1</num><den>2</den></frac><i>ca</i> sin <i>B</i> for two sides and the included angle; Heron’s Δ = √(<i>s</i>(<i>s</i> − <i>a</i>)(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)), <i>s</i> = <frac><num><i>a</i> + <i>b</i> + <i>c</i></num><den>2</den></frac>, for all three sides; Δ = <frac><num><i>abc</i></num><den>4<i>R</i></den></frac> for three sides and the circumradius; Δ = <i>rs</i> for the inradius; Δ = 2<i>R</i><sup>2</sup> sin <i>A</i> sin <i>B</i> sin <i>C</i> for the three angles and <i>R</i>. Δ = <frac><num><i>abc</i></num><den>4<i>R</i></den></frac> rearranges to <i>R</i> = <frac><num><i>abc</i></num><den>4Δ</den></frac>, the fastest way to the circumradius once Heron has given the area; and <i>r</i> = <frac><num>Δ</num><den><i>s</i></den></frac>',
    why: 'The 13–14–15 triangle, the test bed to keep in memory: <i>s</i> = 21, Δ = √(21 · 8 · 7 · 6) = 84, <i>R</i> = <frac><num>65</num><den>8</den></frac>, cos <i>A</i> = <frac><num>3</num><den>5</den></frac>.',
    say: null,
  },
  // pp. 261, 263–264, 270–271
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the half-angle formulae of a triangle, and where does Heron’s formula come from?',
    a: 'sin <frac><num><i>A</i></num><den>2</den></frac> = √(<frac><num>(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)</num><den><i>bc</i></den></frac>), cos <frac><num><i>A</i></num><den>2</den></frac> = √(<frac><num><i>s</i>(<i>s</i> − <i>a</i>)</num><den><i>bc</i></den></frac>), tan <frac><num><i>A</i></num><den>2</den></frac> = √(<frac><num>(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)</num><den><i>s</i>(<i>s</i> − <i>a</i>)</den></frac>) = <frac><num><i>r</i></num><den><i>s</i> − <i>a</i></den></frac>. No ± is needed, unlike the general half-angle formulas: 0 < <frac><num><i>A</i></num><den>2</den></frac> < <frac><num>π</num><den>2</den></frac>, so all three are positive. They come from sin<sup>2</sup> <frac><num><i>A</i></num><den>2</den></frac> = <frac><num>1 − cos <i>A</i></num><den>2</den></frac> with the cosine rule substituted, the numerator <i>a</i><sup>2</sup> − (<i>b</i> − <i>c</i>)<sup>2</sup> factorising as 4(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>). Heron then falls out of Δ = <frac><num>1</num><den>2</den></frac><i>bc</i> · 2 sin <frac><num><i>A</i></num><den>2</den></frac> cos <frac><num><i>A</i></num><den>2</den></frac>, the two radicals’ denominator <i>bc</i> cancelling the leading <i>bc</i>: Heron is the half-angle formulae in disguise',
    why: '<i>a</i> = 5, <i>b</i> = 6, <i>c</i> = 7: <i>s</i> = 9, so tan <frac><num><i>A</i></num><den>2</den></frac> = √(<frac><num>3 · 2</num><den>9 · 4</den></frac>) = <frac><num>1</num><den>√6</den></frac> and Δ = √(9 · 4 · 3 · 2) = 6√6.',
    say: null,
  },
  // pp. 264, 271
  {
    topic: 7,
    kind: 'remember',
    q: 'Given three parts of a triangle, which rule do you use first in each case?',
    a: 'Count what you are given. SSS: cosine rule, and find the largest angle first, the only one that can be obtuse; once it is known, every remaining angle is acute and the sine rule is safe. SAS: cosine rule for the third side, the case where it delivers the missing length in one step, then proceed as SSS. ASA or AAS: the third angle by <i>A</i> + <i>B</i> + <i>C</i> = π, then the sine rule for the remaining sides, with no ambiguity because the angles are already fixed. SSA: treat as ambiguous until proved otherwise, the one configuration that can admit two different triangles. Finish with the area, computed two ways, as your check. Existence test: each of <i>s</i> − <i>a</i>, <i>s</i> − <i>b</i>, <i>s</i> − <i>c</i> must be positive, and |cos <i>A</i>| > 1 means no such triangle',
    why: '<i>a</i> = 3, <i>b</i> = 5, <i>c</i> = 7: the largest angle first, cos <i>C</i> = <frac><num>9 + 25 − 49</num><den>2(3)(5)</den></frac> = −<frac><num>1</num><den>2</den></frac>, so <i>C</i> = 120° and Δ = <frac><num>15√3</num><den>4</den></frac> by either route.',
    say: null,
  },
  // pp. 261, 269
  {
    topic: 7,
    kind: 'mixup',
    q: 'Is the common value of <frac><num><i>a</i></num><den>sin <i>A</i></den></frac> = <frac><num><i>b</i></num><den>sin <i>B</i></den></frac> = <frac><num><i>c</i></num><den>sin <i>C</i></den></frac> equal to <i>R</i>, 2<i>R</i> or 4<i>R</i>?',
    a: '2<i>R</i>, the diameter of the circumcircle: the perpendicular from the circumcentre gives the half-chord <frac><num><i>a</i></num><den>2</den></frac> = <i>R</i> sin <i>A</i>. Answering <i>R</i> forgets that it is the half-chord, not the full chord, that equals <i>R</i> sin <i>A</i>. The 4<i>R</i> belongs to Δ = <frac><num><i>abc</i></num><den>4<i>R</i></den></frac>, where the 4 has an entirely different origin',
    why: 'The equilateral triangle checks it: <i>R</i> = <frac><num><i>a</i></num><den>√3</den></frac>, and 2<i>R</i> sin 60° = <frac><num>2<i>a</i></num><den>√3</den></frac> · <frac><num>√3</num><den>2</den></frac> = <i>a</i>.',
    say: null,
  },
  // pp. 267, 269–270
  {
    topic: 7,
    kind: 'mistake',
    q: 'In triangle <i>ABC</i>, <i>a</i> = 7, <i>b</i> = 8, <i>c</i> = 13, and the sine rule gives sin <i>C</i> = <frac><num>√3</num><den>2</den></frac>. Is <i>C</i> = 60°?',
    a: 'No: 120°. sin <i>C</i> = <frac><num>√3</num><den>2</den></frac> is satisfied by 60° and by 120°, and the sine rule cannot tell them apart. The wrong branch is detectably absurd: <i>c</i> = 13 is the longest side, so <i>C</i> must be the largest angle, yet <i>C</i> = 60° would make <i>B</i> ≈ 92.2° the largest. The cosine rule reads the sign: cos <i>C</i> = <frac><num>49 + 64 − 169</num><den>2(7)(8)</den></frac> = −<frac><num>1</num><den>2</den></frac>. Never determine an angle of a triangle from sin alone when that angle could be obtuse: use the cosine rule, or find the two smallest angles by the sine rule (they are guaranteed acute) and the largest by subtraction from 180°',
    why: 'Check: Δ = <frac><num>1</num><den>2</den></frac>(7)(8) sin 120° = 14√3, and Heron with <i>s</i> = 14 gives √(14 · 7 · 6 · 1) = 14√3.',
    say: null,
  },
  // pp. 269–270
  {
    topic: 7,
    kind: 'mistake',
    q: 'Is the area of a triangle with sides 13, 14, 15 equal to <frac><num>1</num><den>2</den></frac>(14)(15) = 105?',
    a: 'No: 84. That treats two of the sides as perpendicular legs, and 13<sup>2</sup> + 14<sup>2</sup> = 365 ≠ 225 = 15<sup>2</sup>, so the triangle is not right-angled; Heron with <i>s</i> = 21 gives √(21 · 8 · 7 · 6) = 84. The partner slips: <frac><num>1</num><den>2</den></frac><i>ab</i> sin <i>C</i> needs the angle between the two sides named, so <frac><num>1</num><den>2</den></frac><i>ab</i> sin <i>A</i> is not the area; using the perimeter where <i>s</i> belongs in Heron; pairing <i>a</i> with <i>B</i> in the sine rule instead of with the opposite angle <i>A</i>; and attaching a ± to the triangle half-angle formulae',
    why: 'In the cosine rule the subtracted square is the one opposite the angle you want: getting it wrong flips acute and obtuse.',
    say: null,
  },
  // pp. 265–268, 270
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Prove <i>a</i> cos <i>A</i> + <i>b</i> cos <i>B</i> + <i>c</i> cos <i>C</i> = 4<i>R</i> sin <i>A</i> sin <i>B</i> sin <i>C</i>. The fast way?',
    a: 'For any identity mixing sides and angles, substitute <i>a</i> = 2<i>R</i> sin <i>A</i> on sight: everything goes into one language. LHS = 2<i>R</i>(sin <i>A</i> cos <i>A</i> + sin <i>B</i> cos <i>B</i> + sin <i>C</i> cos <i>C</i>) = <i>R</i>(sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i>), and since <i>A</i> + <i>B</i> + <i>C</i> = π, the conditional identity gives 4 sin <i>A</i> sin <i>B</i> sin <i>C</i>. Then test on the equilateral triangle (<i>R</i> = <frac><num><i>a</i></num><den>√3</den></frac>): both sides are <frac><num>3<i>a</i></num><den>2</den></frac>, a thirty-second check that can refute an identity but not prove one. With numbers, compute 2<i>R</i> = <frac><num><i>a</i></num><den>sin <i>A</i></den></frac> early: every other side becomes one multiplication, <i>x</i> = 2<i>R</i> sin <i>X</i>',
    why: '<i>A</i> = 30°, <i>B</i> = 45°, <i>a</i> = 10: 2<i>R</i> = <frac><num>10</num><den>sin 30°</den></frac> = 20, so <i>b</i> = 20 sin 45° = 10√2 and <i>c</i> = 20 sin 105° = 5(√6 + √2).',
    say: null,
  },


  // ── Topic 09 · Trigonometric Inequalities ──
  // pp. 277, 279–280, 288
  {
    topic: 8,
    kind: 'remember',
    q: 'How is a sine or cosine inequality solved, and what are the master results for sin <i>x</i> > <i>k</i> and cos <i>x</i> > <i>k</i>?',
    a: 'Find the boundary, then decide which side of it you want. The boundary is where equality holds, an ordinary trigonometric equation; then sweep one full period, test one point on each stretch between consecutive boundary points, and let periodicity hand you every other period. An inequality returns intervals, not isolated points. For −1 < <i>k</i> < 1, with <i>α</i> = sin<sup>−1</sup> <i>k</i> ∈ [−<frac><num>π</num><den>2</den></frac>, <frac><num>π</num><den>2</den></frac>] and <i>β</i> = cos<sup>−1</sup> <i>k</i> ∈ [0, π] (<i>n</i> ∈ ℤ): sin <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (2<i>n</i>π + <i>α</i>, 2<i>n</i>π + π − <i>α</i>) and sin <i>x</i> < <i>k</i> ⟺ (2<i>n</i>π + π − <i>α</i>, 2<i>n</i>π + 2π + <i>α</i>); cos <i>x</i> > <i>k</i> ⟺ (2<i>n</i>π − <i>β</i>, 2<i>n</i>π + <i>β</i>) and cos <i>x</i> < <i>k</i> ⟺ (2<i>n</i>π + <i>β</i>, 2<i>n</i>π + 2π − <i>β</i>). For ≥ and ≤, close the intervals. If <i>k</i> ≥ 1, sin <i>x</i> > <i>k</i> and cos <i>x</i> > <i>k</i> are impossible; if <i>k</i> < −1, every real <i>x</i> satisfies them. The bands for > and < add to one full period, a check on both answers at once',
    why: 'cos <i>x</i> ≥ −<frac><num>1</num><den>2</den></frac>: <i>β</i> = <frac><num>2π</num><den>3</den></frac>, so <i>x</i> ∈ [2<i>n</i>π − <frac><num>2π</num><den>3</den></frac>, 2<i>n</i>π + <frac><num>2π</num><den>3</den></frac>]; on [0, 2π] the one band is cut in two, [0, <frac><num>2π</num><den>3</den></frac>] ∪ [<frac><num>4π</num><den>3</den></frac>, 2π].',
    say: null,
  },
  // pp. 278–279, 281, 287–288
  {
    topic: 8,
    kind: 'remember',
    q: 'What changes for tan <i>x</i> > <i>k</i>, and for |sin <i>x</i>| and |tan <i>x</i>|?',
    a: 'With <i>γ</i> = tan<sup>−1</sup> <i>k</i> ∈ (−<frac><num>π</num><den>2</den></frac>, <frac><num>π</num><den>2</den></frac>): tan <i>x</i> > <i>k</i> ⟺ <i>x</i> ∈ (<i>n</i>π + <i>γ</i>, <i>n</i>π + <frac><num>π</num><den>2</den></frac>) and tan <i>x</i> < <i>k</i> ⟺ (<i>n</i>π − <frac><num>π</num><den>2</den></frac>, <i>n</i>π + <i>γ</i>). On one branch tan is strictly increasing, so it exceeds <i>k</i> exactly to the right of the point where it equals <i>k</i>. The period is π, not 2π, and the endpoint <i>n</i>π ± <frac><num>π</num><den>2</den></frac> is always excluded, even for ≥ or ≤, because tan is undefined there. A band repeats with the fundamental period of the function: π for tan, cot, |sin|, |cos|, sin<sup>2</sup> and cos<sup>2</sup>, and 2π for sin, cos, sec and csc themselves. So |sin <i>x</i>| ≥ <frac><num>1</num><den>2</den></frac> ⟺ <i>x</i> ∈ [<i>n</i>π + <frac><num>π</num><den>6</den></frac>, <i>n</i>π + <frac><num>5π</num><den>6</den></frac>] and |tan <i>x</i>| < 1 ⟺ <i>x</i> ∈ (<i>n</i>π − <frac><num>π</num><den>4</den></frac>, <i>n</i>π + <frac><num>π</num><den>4</den></frac>)',
    why: 'tan<sup>2</sup> <i>x</i> ≤ 3 gives <i>x</i> ∈ [<i>n</i>π − <frac><num>π</num><den>3</den></frac>, <i>n</i>π + <frac><num>π</num><den>3</den></frac>].',
    say: null,
  },
  // pp. 280, 282, 289
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you solve <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> ≷ <i>c</i>?',
    a: 'Compute <i>R</i> = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) first and compare |<i>c</i>| with it. If |<i>c</i>| > <i>R</i>, the inequality is either impossible or true for all <i>x</i>, since the left side ranges over [−<i>R</i>, <i>R</i>] and nothing else. If |<i>c</i>| = <i>R</i>, it degenerates: with <i>c</i> = <i>R</i>, ≥ holds only where the maximum is attained, the discrete family <i>x</i> = <i>α</i> + 2<i>n</i>π; > has no solution; ≤ holds for every real <i>x</i>; < for every real <i>x</i> except those points. Otherwise write it as <i>R</i> cos(<i>x</i> − <i>α</i>) with cos <i>α</i> = <frac><num><i>a</i></num><den><i>R</i></den></frac>, sin <i>α</i> = <frac><num><i>b</i></num><den><i>R</i></den></frac> (not tan <i>α</i> alone, which fixes <i>α</i> only up to π), solve cos(<i>x</i> − <i>α</i>) ≷ <frac><num><i>c</i></num><den><i>R</i></den></frac>, and add <i>α</i> to every endpoint. A polynomial in one function: substitute <i>t</i>, factor, run a sign scheme, discard bands outside the range of <i>t</i>, translate. Homogeneous of degree two: divide by cos<sup>2</sup> <i>x</i> and work in tan <i>x</i>, after confirming cos <i>x</i> = 0 is not itself a solution',
    why: 'sin <i>x</i> + √3 cos <i>x</i> = 2 sin(<i>x</i> + <frac><num>π</num><den>3</den></frac>) > 1 gives <i>x</i> ∈ (2<i>n</i>π − <frac><num>π</num><den>6</den></frac>, 2<i>n</i>π + <frac><num>π</num><den>2</den></frac>).',
    say: null,
  },
  // pp. 278, 286–287
  {
    topic: 8,
    kind: 'mixup',
    q: 'Is cos <i>x</i> > <frac><num>1</num><den>2</den></frac> solved by (2<i>n</i>π − <frac><num>π</num><den>3</den></frac>, 2<i>n</i>π + <frac><num>π</num><den>3</den></frac>), and sin <i>x</i> > <frac><num>1</num><den>2</den></frac> by the same 2<i>n</i>π ± shape?',
    a: 'Cosine yes, sine no. Cosine is even, so its bands straddle the even multiples of π: cos <i>x</i> > <frac><num>1</num><den>2</den></frac> ⟺ (2<i>n</i>π − <frac><num>π</num><den>3</den></frac>, 2<i>n</i>π + <frac><num>π</num><den>3</den></frac>). The sine band is symmetric about <frac><num>π</num><den>2</den></frac>: sin <i>x</i> > <frac><num>1</num><den>2</den></frac> ⟺ (2<i>n</i>π + <frac><num>π</num><den>6</den></frac>, 2<i>n</i>π + <frac><num>5π</num><den>6</den></frac>), running from <i>α</i> to π − <i>α</i>, which are not negatives of each other. Forcing a sine band into the 2<i>n</i>π ± shape is the commonest structural error in the topic; importing the sine answer for a cosine question, or using period π for either, are the other traps',
    why: '(<i>n</i>π − <frac><num>π</num><den>3</den></frac>, <i>n</i>π + <frac><num>π</num><den>3</den></frac>) is wrong for cos <i>x</i> > <frac><num>1</num><den>2</den></frac>: it contains <i>x</i> = π, where cos π = −1.',
    say: null,
  },
  // pp. 283, 286–287
  {
    topic: 8,
    kind: 'mistake',
    q: '4 sin<sup>2</sup> <i>x</i> − 8 sin <i>x</i> + 3 < 0 factors as (2 sin <i>x</i> − 1)(2 sin <i>x</i> − 3) < 0. Is the answer <i>x</i> = <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac>, or sin <i>x</i> < <frac><num>1</num><den>2</den></frac>?',
    a: 'Neither: sin <i>x</i> > <frac><num>1</num><den>2</den></frac>, so <i>x</i> ∈ (2<i>n</i>π + <frac><num>π</num><den>6</den></frac>, 2<i>n</i>π + <frac><num>5π</num><den>6</den></frac>). Since sin <i>x</i> ≤ 1 < <frac><num>3</num><den>2</den></frac>, the factor 2 sin <i>x</i> − 3 is negative for every real <i>x</i>: delete a factor whose sign is constant on the range, and flip the inequality once for each deleted negative factor. The product is then negative exactly when 2 sin <i>x</i> − 1 > 0; flipping the sign of the surviving factor is the most common slip. <i>n</i>π + (−1)<sup><i>n</i></sup><frac><num>π</num><den>6</den></frac> solves the equation sin <i>x</i> = <frac><num>1</num><den>2</den></frac>: an inequality’s answer is a union of intervals, and if yours has none, either you misread the question or the bound is extreme',
    why: 'Test <i>x</i> = <frac><num>π</num><den>2</den></frac> inside the band: 4 − 8 + 3 = −1 < 0, true; and <i>x</i> = 0 outside it: 3 ≮ 0, correctly excluded.',
    say: null,
  },
  // pp. 283–284, 286, 288
  {
    topic: 8,
    kind: 'shortcut',
    q: 'Find all <i>x</i> ∈ [0, 4π] with |√3 cos <i>x</i> − sin <i>x</i>| ≥ 2. The fast way?',
    a: 'Compute the amplitude first: <i>R</i> = √((√3)<sup>2</sup> + (−1)<sup>2</sup>) = 2, the maximum of the expression. The inequality has collapsed into an equation: it asks for the instants of the absolute extreme, not a band. √3 cos <i>x</i> − sin <i>x</i> = 2 cos(<i>x</i> + <frac><num>π</num><den>6</den></frac>), so |cos(<i>x</i> + <frac><num>π</num><den>6</den></frac>)| = 1 and <i>x</i> = <i>n</i>π − <frac><num>π</num><den>6</den></frac>: exactly four values in [0, 4π], <frac><num>5π</num><den>6</den></frac>, <frac><num>11π</num><den>6</den></frac>, <frac><num>17π</num><den>6</den></frac>, <frac><num>23π</num><den>6</den></frac>. Any interval answer is wrong: the band [<frac><num>5π</num><den>6</den></frac>, <frac><num>11π</num><den>6</den></frac>] contains <frac><num>4π</num><den>3</den></frac>, where the expression is 0. And when an inequality asks an expression to exceed its own maximum, the answer is “no solution”, in one line',
    why: 'Test one interior point of every band you claim and one point of every gap you exclude: two substitutions catch a reversed inequality, which is otherwise undetectable.',
    say: null,
  },


  // ── Topic 10 · Maximum, Minimum and Range of Trigonometric Expressions ──
  // pp. 289–291, 294, 299–301
  {
    topic: 9,
    kind: 'remember',
    q: 'How is any max/min question in this topic answered without calculus, and when does the √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) rule apply?',
    a: 'You never search for a maximum; you rewrite the expression until its maximum is written on its face. Four rewritings, each ending in a quantity whose range you know: <i>R</i> sin(angle) or <i>R</i> cos(angle), range [−<i>R</i>, <i>R</i>]; a quadratic in a single bounded variable <i>t</i> = sin <i>x</i> or cos <i>x</i>; a sum of a quantity and its reciprocal, by AM–GM; or an expression whose only trigonometric object is sin<sup>2</sup> or cos<sup>2</sup>, range [0, 1]. The anchor: −√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) ≤ <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), so <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i> has max <i>c</i> + √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) and min <i>c</i> − √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), both attained. It requires first powers of sin <i>x</i> and cos <i>x</i> with the same argument: expand a shifted angle first. Then read the range, undo the arithmetic (multiplying by a negative number reverses the interval), and name the <i>x</i> where each bound is reached',
    why: '5 cos <i>θ</i> + 3 cos(<i>θ</i> + <frac><num>π</num><den>3</den></frac>) = <frac><num>13</num><den>2</den></frac> cos <i>θ</i> − <frac><num>3√3</num><den>2</den></frac> sin <i>θ</i>, so <i>R</i> = √(<frac><num>169</num><den>4</den></frac> + <frac><num>27</num><den>4</den></frac>) = 7, not √34.',
    say: null,
  },
  // pp. 291–292, 295, 300
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the range of <i>a</i> sin<sup>2</sup> <i>x</i> + <i>b</i> sin <i>x</i> cos <i>x</i> + <i>c</i> cos<sup>2</sup> <i>x</i>?',
    a: 'Replace each degree-two object by its double angle: sin<sup>2</sup> <i>x</i> = <frac><num>1 − cos 2<i>x</i></num><den>2</den></frac>, cos<sup>2</sup> <i>x</i> = <frac><num>1 + cos 2<i>x</i></num><den>2</den></frac>, sin <i>x</i> cos <i>x</i> = <frac><num>sin 2<i>x</i></num><den>2</den></frac>. The expression becomes <frac><num><i>a</i> + <i>c</i></num><den>2</den></frac> + <frac><num><i>b</i></num><den>2</den></frac> sin 2<i>x</i> + <frac><num><i>c</i> − <i>a</i></num><den>2</den></frac> cos 2<i>x</i>, and the amplitude rule at angle 2<i>x</i> gives centre <frac><num><i>a</i> + <i>c</i></num><den>2</den></frac> and half-width <frac><num>1</num><den>2</den></frac>√(<i>b</i><sup>2</sup> + (<i>a</i> − <i>c</i>)<sup>2</sup>), both ends attained since 2<i>x</i> sweeps all of ℝ. With <i>b</i> = 0 the range collapses to [min(<i>a</i>, <i>c</i>), max(<i>a</i>, <i>c</i>)]; with <i>b</i> = 0 and <i>a</i> = <i>c</i> it is the single point <i>a</i>, the sanity check',
    why: 'cos<sup>2</sup> <i>θ</i> − 6 sin <i>θ</i> cos <i>θ</i> + 3 sin<sup>2</sup> <i>θ</i> + 2: <i>a</i> = 3, <i>b</i> = −6, <i>c</i> = 1, centre 2, half-width <frac><num>1</num><den>2</den></frac>√40 = √10, so with the +2 the range is [4 − √10, 4 + √10].',
    say: null,
  },
  // pp. 290–292, 294, 297, 301
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you find the extremes of a quadratic in sin <i>x</i> or cos <i>x</i>, or of an expression on a restricted interval?',
    a: 'For <i>f</i> = <i>pt</i><sup>2</sup> + <i>qt</i> + <i>r</i> with <i>t</i> = sin <i>x</i> or cos <i>x</i>, <i>t</i> ∈ [−1, 1], the extremes occur at <i>t</i> = −1, <i>t</i> = +1, or the vertex <i>t</i> = −<frac><num><i>q</i></num><den>2<i>p</i></den></frac> (only if it lies in [−1, 1]): evaluate the admissible candidates and compare, since a parabola is monotone on either side of its vertex. A symmetric polynomial in sin <i>x</i> and cos <i>x</i> becomes such a polynomial through <i>t</i> = sin <i>x</i> + cos <i>x</i> ∈ [−√2, √2], with sin <i>x</i> cos <i>x</i> = <frac><num><i>t</i><sup>2</sup> − 1</num><den>2</den></frac>. On a restricted interval, write the amplitude form, keep only the turning points inside the window, add the two endpoints, and compare: there is no third possibility. A bound approached but never attained gets a round bracket',
    why: 'sin <i>x</i> + cos <i>x</i> + sin <i>x</i> cos <i>x</i> = <frac><num><i>t</i><sup>2</sup> + 2<i>t</i> − 1</num><den>2</den></frac>: the vertex <i>t</i> = −1 gives the minimum −1, and <i>t</i> = √2 the maximum <frac><num>1 + 2√2</num><den>2</den></frac>.',
    say: null,
  },
  // pp. 291–292, 296, 298, 300
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the minimum of <i>a</i><sup>2</sup> sec<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> csc<sup>2</sup> <i>x</i> (<i>a</i>, <i>b</i> > 0), and its maximum?',
    a: 'Minimum (<i>a</i> + <i>b</i>)<sup>2</sup>; no maximum. Write sec<sup>2</sup> <i>x</i> = 1 + tan<sup>2</sup> <i>x</i> and csc<sup>2</sup> <i>x</i> = 1 + cot<sup>2</sup> <i>x</i>: the expression is <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i>, and since tan<sup>2</sup> <i>x</i> · cot<sup>2</sup> <i>x</i> = 1, AM–GM gives <i>a</i><sup>2</sup> tan<sup>2</sup> <i>x</i> + <i>b</i><sup>2</sup> cot<sup>2</sup> <i>x</i> ≥ 2<i>ab</i>. Equality needs tan<sup>2</sup> <i>x</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac>, always achievable. As <i>x</i> → 0<sup>+</sup>, csc<sup>2</sup> <i>x</i> → ∞, so the expression is unbounded above. Likewise tan<sup>2</sup> <i>x</i> + cot<sup>2</sup> <i>x</i> ≥ 2 and sec<sup>2</sup> <i>x</i> + csc<sup>2</sup> <i>x</i> ≥ 4. Whenever sec, csc, tan or cot survives into the final expression, check for unboundedness before writing “maximum”',
    why: '9 sec<sup>2</sup> <i>x</i> + 16 csc<sup>2</sup> <i>x</i> = 25 + 9 tan<sup>2</sup> <i>x</i> + 16 cot<sup>2</sup> <i>x</i> ≥ 25 + 2√144 = 49, at tan<sup>2</sup> <i>x</i> = <frac><num>4</num><den>3</den></frac>; not 25, 12 or 7.',
    say: null,
  },
  // pp. 289, 295–296, 298, 300
  {
    topic: 9,
    kind: 'mixup',
    q: 'Is the maximum of 3 sin<sup>2</sup> <i>x</i> + 4 cos<sup>2</sup> <i>x</i> the same as that of 3 sin <i>x</i> + 4 cos <i>x</i>?',
    a: 'No: 4, not 5. The rule √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) applies to a linear combination of sin <i>x</i> and cos <i>x</i> (first powers, same angle) and to nothing else. sin <i>x</i> and cos <i>x</i> cannot both be near 1 at the same time, but sin<sup>2</sup> <i>x</i> and cos<sup>2</sup> <i>x</i> satisfy the exact constraint sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1, so their combination is trapped between the two weights: 3 sin<sup>2</sup> <i>x</i> + 4 cos<sup>2</sup> <i>x</i> = 3 + cos<sup>2</sup> <i>x</i> ∈ [3, 4]. For <i>a</i> sin<sup>2</sup> <i>x</i> + <i>b</i> cos<sup>2</sup> <i>x</i> the range is [min(<i>a</i>, <i>b</i>), max(<i>a</i>, <i>b</i>)], and the square root never appears. Applying the amplitude rule to squares is the most common error in the topic',
    why: '3 sin<sup>2</sup> <i>x</i> + 4 cos<sup>2</sup> <i>x</i> = 3 + cos<sup>2</sup> <i>x</i> ≤ 4 for every <i>x</i>, so 5 is never reached.',
    say: null,
  },
  // pp. 297–300
  {
    topic: 9,
    kind: 'mistake',
    q: 'Is the minimum of cos 2<i>x</i> + cos <i>x</i> equal to −1 + (−1) = −2? And is the range of <frac><num>sin 3<i>x</i></num><den>sin <i>x</i></den></frac> the interval [−1, 3]?',
    a: 'No to both. The two minima cannot occur together: cos <i>x</i> = −1 forces cos 2<i>x</i> = +1, and the minimum of a sum equals the sum of the minima only when both are reached at the same <i>x</i>, so combine first and minimise once. With <i>t</i> = cos <i>x</i> the expression is 2<i>t</i><sup>2</sup> + <i>t</i> − 1, whose vertex <i>t</i> = −<frac><num>1</num><den>4</den></frac> lies inside [−1, 1] and gives −<frac><num>9</num><den>8</den></frac>; checking only the endpoints gives 0, a miss. <frac><num>sin 3<i>x</i></num><den>sin <i>x</i></den></frac> = 3 − 4 sin<sup>2</sup> <i>x</i>, but the points <i>x</i> = <i>n</i>π stay excluded after cancelling, so sin<sup>2</sup> <i>x</i> ∈ (0, 1] and the range is [−1, 3): 3 is approached, never reached, while −1 is attained at <i>x</i> = <frac><num>π</num><den>2</den></frac>',
    why: '2 sin<sup>2</sup> <i>x</i> + 3 cos<sup>2</sup> <i>x</i> = 2 + cos<sup>2</sup> <i>x</i> has range [2, 3]; the amplitude rule would wrongly suggest √13.',
    say: null,
  },
  // pp. 292, 294, 300
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Find the range of sin <i>x</i> + cos <i>x</i> on [0, <frac><num>π</num><den>6</den></frac>]. The fast way?',
    a: 'Count the powers first: degree one goes to the amplitude rule, degree two to the double angle, a quadratic in a single function goes to the bounded-parabola method; that one glance decides ninety per cent of questions (the book’s estimate from past papers, not official figures). Here sin <i>x</i> + cos <i>x</i> = √2 sin(<i>x</i> + <frac><num>π</num><den>4</den></frac>), whose maximum √2 is attained only at <i>x</i> = <frac><num>π</num><den>4</den></frac> + 2<i>n</i>π, none of them in the permitted window, so the extremes migrate to the endpoints: [1, <frac><num>1 + √3</num><den>2</den></frac>], not [−√2, √2]. Then test at one or two convenient angles: the values must fall inside your claimed range',
    why: '3 sin <i>x</i> + 4 cos <i>x</i> + 7: <i>R</i> = 5, so the range is [2, 12]; at <i>x</i> = 0 the value is 11, comfortably inside.',
    say: null,
  },



  // ── Topic 11 · Trigonometric Series: Sums in AP and Telescoping Products ──
  // pp. 301, 303, 305, 315
  {
    topic: 10,
    kind: 'remember',
    q: 'What is the sum of <i>n</i> sines or cosines whose angles are in AP, and how is it found?',
    a: 'Never term by term: multiply by 2 sin <frac><num><i>β</i></num><den>2</den></frac>, <i>β</i> the common difference. Product-to-sum turns each term into a difference of neighbouring sines, 2 sin <frac><num><i>β</i></num><den>2</den></frac> cos(<i>a</i> + <i>rβ</i>) = sin(<i>a</i> + <i>rβ</i> + <frac><num><i>β</i></num><den>2</den></frac>) − sin(<i>a</i> + <i>rβ</i> − <frac><num><i>β</i></num><den>2</den></frac>), so the sum telescopes and only the two ends survive. Result, for sin <frac><num><i>β</i></num><den>2</den></frac> ≠ 0: ∑<sub><i>r</i>=0</sub><sup><i>n</i>−1</sup> sin(<i>a</i> + <i>rβ</i>) = <frac><num>sin(<frac><num><i>nβ</i></num><den>2</den></frac>)</num><den>sin(<frac><num><i>β</i></num><den>2</den></frac>)</den></frac> sin(<i>a</i> + <frac><num>(<i>n</i> − 1)<i>β</i></num><den>2</den></frac>), and the same with cos for the cosines; <i>a</i> + <frac><num>(<i>n</i> − 1)<i>β</i></num><den>2</den></frac> is the average of the first and last angles. If <i>β</i> = 2<i>m</i>π, every term equals the first and the sum is <i>n</i> sin <i>a</i> or <i>n</i> cos <i>a</i>: the formula must not be quoted. If <frac><num><i>nβ</i></num><den>2</den></frac> is a multiple of π but <frac><num><i>β</i></num><den>2</den></frac> is not, the sum is zero: ∑<sub><i>r</i>=0</sub><sup><i>n</i>−1</sup> cos(<i>a</i> + <frac><num>2π<i>r</i></num><den><i>n</i></den></frac>) = 0 for <i>n</i> ≥ 2, the same for sine',
    why: 'cos <i>θ</i> + cos 3<i>θ</i> + ⋯ + cos(2<i>n</i> − 1)<i>θ</i>: <i>a</i> = <i>θ</i>, <i>β</i> = 2<i>θ</i>, the mean angle is <i>nθ</i>, so the sum is <frac><num>sin <i>nθ</i> cos <i>nθ</i></num><den>sin <i>θ</i></den></frac> = <frac><num>sin 2<i>nθ</i></num><den>2 sin <i>θ</i></den></frac>.',
    say: 'The answer is a scaled sine (or cosine) of the mean angle.',
  },
  // pp. 302, 304–305, 315
  {
    topic: 10,
    kind: 'remember',
    q: 'What is cos <i>θ</i> · cos 2<i>θ</i> · cos 4<i>θ</i> ⋯ cos(2<sup><i>n</i>−1</sup><i>θ</i>)?',
    a: '<frac><num>sin(2<sup><i>n</i></sup><i>θ</i>)</num><den>2<sup><i>n</i></sup> sin <i>θ</i></den></frac>, for sin <i>θ</i> ≠ 0. Multiply by 2 sin <i>θ</i> and cascade 2 sin <i>ϕ</i> cos <i>ϕ</i> = sin 2<i>ϕ</i>: each cosine is consumed by the sine that the previous step produced, and after <i>n</i> steps a single sin(2<sup><i>n</i></sup><i>θ</i>) is left standing. There are <i>n</i> factors, angles doubling each time, and the exponent in 2<sup><i>n</i></sup> counts the factors, not the last angle. The sign is decided by <frac><num>sin(2<sup><i>n</i></sup><i>θ</i>)</num><den>sin <i>θ</i></den></frac> and is not always positive; nothing in the derivation forces a sign',
    why: 'cos 20° cos 40° cos 80° = <frac><num>sin 160°</num><den>8 sin 20°</den></frac> = +<frac><num>1</num><den>8</den></frac>, since 160° = 180° − 20° leaves sine positive.',
    say: null,
  },
  // pp. 312–313
  {
    topic: 10,
    kind: 'mixup',
    q: 'In the AP-sum formula, is the trailing angle <i>a</i> + <frac><num>(<i>n</i> − 1)<i>β</i></num><den>2</den></frac> or <i>a</i> + <frac><num><i>nβ</i></num><den>2</den></frac>? And is the scaling factor <frac><num>sin(<frac><num><i>nβ</i></num><den>2</den></frac>)</num><den>sin(<frac><num><i>β</i></num><den>2</den></frac>)</den></frac> or <frac><num>sin <i>nβ</i></num><den>sin <i>β</i></den></frac>?',
    a: 'The trailing angle is <i>a</i> + <frac><num>(<i>n</i> − 1)<i>β</i></num><den>2</den></frac>, the mean of the first and last angles, not <i>a</i> + <frac><num><i>nβ</i></num><den>2</den></frac>; the factor keeps both halvings, <frac><num>sin(<frac><num><i>nβ</i></num><den>2</den></frac>)</num><den>sin(<frac><num><i>β</i></num><den>2</den></frac>)</den></frac>, and has a sine, not a cosine, on top. Test any version at <i>n</i> = 1: it must return the single term sin <i>a</i> or cos <i>a</i>. The version that forgets both halvings survives <i>n</i> = 1 by accident, so use <i>n</i> = 2 on it. The formula sums <i>r</i> = 0 to <i>n</i> − 1: count the terms, then set <i>a</i> to the first angle',
    why: 'The shape to reconstruct it from: <frac><num>sin(half the total span + half a step)</num><den>sin(half a step)</den></frac> × (same function of the mean angle).',
    say: null,
  },
  // pp. 308–309, 312–313
  {
    topic: 10,
    kind: 'mistake',
    q: 'Since cos 20° cos 40° cos 80° = <frac><num>1</num><den>8</den></frac>, is cos <frac><num>π</num><den>7</den></frac> cos <frac><num>2π</num><den>7</den></frac> cos <frac><num>4π</num><den>7</den></frac> = <frac><num>1</num><den>8</den></frac> too?',
    a: 'No: −<frac><num>1</num><den>8</den></frac>. The magnitude is right and the sign is wrong. The cascade gives <frac><num>sin <frac><num>8π</num><den>7</den></frac></num><den>8 sin <frac><num>π</num><den>7</den></frac></den></frac>, and <frac><num>8π</num><den>7</den></frac> = π + <frac><num>π</num><den>7</den></frac> lies in the third quadrant, so sin <frac><num>8π</num><den>7</den></frac> = −sin <frac><num>π</num><den>7</den></frac>. The two problems differ by nothing except which quadrant 2<sup><i>n</i></sup><i>θ</i> lands in. The defence takes three seconds: before quoting the cascade, ask which quadrant each factor lies in and count the negative ones. Here <frac><num>4π</num><den>7</den></frac> exceeds <frac><num>π</num><den>2</den></frac>, so exactly one factor is negative and the product must be negative',
    why: 'cos <frac><num>π</num><den>7</den></frac> cos <frac><num>2π</num><den>7</den></frac> cos <frac><num>3π</num><den>7</den></frac> = <frac><num>1</num><den>8</den></frac>, since cos <frac><num>3π</num><den>7</den></frac> = −cos <frac><num>4π</num><den>7</den></frac>.',
    say: null,
  },
  // pp. 304, 307, 309–310, 314
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Evaluate tan <frac><num>π</num><den>16</den></frac> + 2 tan <frac><num>π</num><den>8</den></frac> + 4 tan <frac><num>π</num><den>4</den></frac>. The fast way?',
    a: 'The coefficients 1, 2, 4 announce the tangent bridge: cot <i>ϕ</i> − tan <i>ϕ</i> = 2 cot 2<i>ϕ</i>, so tan <i>ϕ</i> = cot <i>ϕ</i> − 2 cot 2<i>ϕ</i>, and 2<sup><i>r</i></sup> tan(2<sup><i>r</i></sup><i>θ</i>) = 2<sup><i>r</i></sup> cot(2<sup><i>r</i></sup><i>θ</i>) − 2<sup><i>r</i>+1</sup> cot(2<sup><i>r</i>+1</sup><i>θ</i>) telescopes to cot <i>θ</i> − 2<sup><i>n</i></sup> cot(2<sup><i>n</i></sup><i>θ</i>). With <i>θ</i> = <frac><num>π</num><den>16</den></frac> and <i>n</i> = 3, 2<sup><i>n</i></sup><i>θ</i> = <frac><num>π</num><den>2</den></frac> and cot <frac><num>π</num><den>2</den></frac> = 0 kills the tail: the sum is cot <frac><num>π</num><den>16</den></frac> ≈ 5.02734. Whenever a parameter is free, ask whether it can annihilate the tail. The other two bridges: the secant bridge, tan(<i>r</i> + 1)<i>θ</i> − tan <i>rθ</i> = <frac><num>sin <i>θ</i></num><den>cos(<i>r</i> + 1)<i>θ</i> cos <i>rθ</i></den></frac>; and for four terms or fewer, pair the outermost with sum-to-product',
    why: 'sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> + sin 7<i>x</i> = 2 sin 4<i>x</i>(cos 3<i>x</i> + cos <i>x</i>) = 4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i>, done in two lines by pairing.',
    say: null,
  },


  // ── Topic 12 · Higher Multiple Angles and the Sum of Three or More Angles ──
  // pp. 315–317, 319–320, 330
  {
    topic: 11,
    kind: 'remember',
    q: 'How do you get cos 4<i>x</i>, tan 4<i>x</i>, cos 5<i>x</i> and cos 6<i>x</i>?',
    a: 'Multiple-angle formulas are not a list to be learnt; they are a single recursion run the required number of times. Double a double for 4, 8, 16: cos 4<i>x</i> = 2 cos<sup>2</sup> 2<i>x</i> − 1 with cos 2<i>x</i> = 2 cos<sup>2</sup> <i>x</i> − 1 gives 8 cos<sup>4</sup> <i>x</i> − 8 cos<sup>2</sup> <i>x</i> + 1, and the sin-only route gives 1 − 8 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i> = 1 − 8 sin<sup>2</sup> <i>x</i> + 8 sin<sup>4</sup> <i>x</i>; decide the target function first and pick the matching double-angle form at both rungs. tan 4<i>x</i> = <frac><num>4 tan <i>x</i>(1 − tan<sup>2</sup> <i>x</i>)</num><den>1 − 6 tan<sup>2</sup> <i>x</i> + tan<sup>4</sup> <i>x</i></den></frac>. Double a triple for 6: cos 6<i>x</i> = 2 cos<sup>2</sup> 3<i>x</i> − 1 = 32 cos<sup>6</sup> <i>x</i> − 48 cos<sup>4</sup> <i>x</i> + 18 cos<sup>2</sup> <i>x</i> − 1. Add a triple to a double for 5: sin 5<i>x</i> = 16 sin<sup>5</sup> <i>x</i> − 20 sin<sup>3</sup> <i>x</i> + 5 sin <i>x</i>, and cos 5<i>x</i> has the same coefficients in cos <i>x</i>',
    why: 'tan <i>θ</i> = <frac><num>1</num><den>3</den></frac>: by the ladder, tan 2<i>θ</i> = <frac><num>3</num><den>4</den></frac> and tan 4<i>θ</i> = <frac><num><frac><num>3</num><den>2</den></frac></num><den><frac><num>7</num><den>16</den></frac></den></frac> = <frac><num>24</num><den>7</den></frac>, two easy fractions instead of one messy quartic.',
    say: null,
  },
  // pp. 316, 318, 322, 328–329
  {
    topic: 11,
    kind: 'remember',
    q: 'What four structural checks must cos <i>nx</i>, written in powers of cos <i>x</i>, pass?',
    a: 'It is a polynomial of degree <i>n</i>; its leading coefficient is 2<sup><i>n</i>−1</sup>; it contains only powers of the same parity as <i>n</i>; and its coefficients sum to 1, since putting cos <i>x</i> = 1 gives cos(<i>n</i> · 0) = 1. So cos 4<i>x</i> must start 8 cos<sup>4</sup> <i>x</i> with only even powers, and cos 5<i>x</i> must start 16 cos<sup>5</sup> <i>x</i> with only odd powers. A wrong leading coefficient or a term of the wrong parity is wrong before you check a single algebra step. Four free checks; they cannot detect two compensating errors, so spot-check numerically at one angle too',
    why: 'cos 6<i>x</i>: 32 − 48 + 18 − 1 = 1; cos 4<i>x</i>: 8 − 8 + 1 = 1.',
    say: null,
  },
  // pp. 316, 318–319, 321, 330
  {
    topic: 11,
    kind: 'remember',
    q: 'What is tan(<i>A</i> + <i>B</i> + <i>C</i>), and how does a cubic hand it to you?',
    a: 'With <i>S</i><sub>1</sub> = tan <i>A</i> + tan <i>B</i> + tan <i>C</i>, <i>S</i><sub>2</sub> = tan <i>A</i> tan <i>B</i> + tan <i>B</i> tan <i>C</i> + tan <i>C</i> tan <i>A</i> and <i>S</i><sub>3</sub> = tan <i>A</i> tan <i>B</i> tan <i>C</i>: tan(<i>A</i> + <i>B</i> + <i>C</i>) = <frac><num><i>S</i><sub>1</sub> − <i>S</i><sub>3</sub></num><den>1 − <i>S</i><sub>2</sub></den></frac>, got by bracketing (<i>A</i> + <i>B</i>) + <i>C</i> and clearing; the result is symmetric, so the bracketing did not matter. It requires cos <i>A</i>, cos <i>B</i>, cos <i>C</i> and cos(<i>A</i> + <i>B</i> + <i>C</i>) non-zero; the expanded forms sin(<i>A</i> + <i>B</i> + <i>C</i>) = ∑ sin <i>A</i> cos <i>B</i> cos <i>C</i> − sin <i>A</i> sin <i>B</i> sin <i>C</i> and cos(<i>A</i> + <i>B</i> + <i>C</i>) = cos <i>A</i> cos <i>B</i> cos <i>C</i> − ∑ cos <i>A</i> sin <i>B</i> sin <i>C</i> hold for all real angles. For <i>n</i> angles: <frac><num><i>S</i><sub>1</sub> − <i>S</i><sub>3</sub> + <i>S</i><sub>5</sub> − ⋯</num><den>1 − <i>S</i><sub>2</sub> + <i>S</i><sub>4</sub> − ⋯</den></frac>. If tan <i>A</i>, tan <i>B</i>, tan <i>C</i> are the roots of <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0, Vieta gives <i>S</i><sub>1</sub> = <i>p</i>, <i>S</i><sub>2</sub> = <i>q</i>, <i>S</i><sub>3</sub> = <i>r</i>, so tan(<i>A</i> + <i>B</i> + <i>C</i>) = <frac><num><i>p</i> − <i>r</i></num><den>1 − <i>q</i></den></frac> without solving the cubic',
    why: 'Put <i>C</i> = 0: <i>S</i><sub>3</sub> = 0 and the formula returns <frac><num>tan <i>A</i> + tan <i>B</i></num><den>1 − tan <i>A</i> tan <i>B</i></den></frac>; a three-angle formula that does not collapse to the two-angle one has a sign error.',
    say: null,
  },
  // pp. 319, 327–328, 330
  {
    topic: 11,
    kind: 'mixup',
    q: 'If <i>A</i> + <i>B</i> + <i>C</i> = π, which identity follows, and which if <i>A</i> + <i>B</i> + <i>C</i> = <frac><num>π</num><den>2</den></frac>?',
    a: 'Sum π: tan(<i>A</i> + <i>B</i> + <i>C</i>) = 0, so the numerator dies, <i>S</i><sub>1</sub> = <i>S</i><sub>3</sub>: ∑ tan <i>A</i> = ∏ tan <i>A</i>. Sum <frac><num>π</num><den>2</den></frac>: the tangent is undefined, so the denominator dies, <i>S</i><sub>2</sub> = 1: ∑ tan <i>A</i> tan <i>B</i> = 1. Ask whether the target tangent is 0 or undefined, and let that pick the equation; confusing “undefined” with “zero” gives 0, and a sign slip in 1 − <i>S</i><sub>2</sub> = 0 gives −1. The deduction fails if any angle is an odd multiple of <frac><num>π</num><den>2</den></frac> (in a triangle, a right angle): in a right-angled triangle ∑ tan <i>A</i> = ∏ tan <i>A</i> is vacuous, not false',
    why: 'In a triangle the half-angles sum to <frac><num>π</num><den>2</den></frac>, so tan <frac><num><i>A</i></num><den>2</den></frac> tan <frac><num><i>B</i></num><den>2</den></frac> + tan <frac><num><i>B</i></num><den>2</den></frac> tan <frac><num><i>C</i></num><den>2</den></frac> + tan <frac><num><i>C</i></num><den>2</den></frac> tan <frac><num><i>A</i></num><den>2</den></frac> = 1 in one line.',
    say: null,
  },
  // pp. 324, 327–328
  {
    topic: 11,
    kind: 'mistake',
    q: 'Is tan(<i>A</i> + <i>B</i> + <i>C</i>) = <frac><num><i>S</i><sub>1</sub></num><den>1 − <i>S</i><sub>2</sub></den></frac>, the two-angle pattern extended?',
    a: 'No: <frac><num><i>S</i><sub>1</sub> − <i>S</i><sub>3</sub></num><den>1 − <i>S</i><sub>2</sub></den></frac>. Dropping <i>S</i><sub>3</sub> is the classic error, and it is dangerous because the missing term is a small subtraction and the answer still looks plausible. With <i>A</i> = <i>B</i> = <i>C</i> = 15° (tan 15° = 2 − √3): <i>S</i><sub>1</sub> ≈ 0.803848, <i>S</i><sub>2</sub> ≈ 0.215390, <i>S</i><sub>3</sub> ≈ 0.019238, so the correct formula gives <frac><num>0.784610</num><den>0.784610</den></frac> = 1 = tan 45°, while the wrong one gives ≈ 1.02452, close enough to be mistaken for rounding. The defence: count the degrees, odd degrees above, even below, signs alternating from the start',
    why: '<frac><num><i>S</i><sub>1</sub> + <i>S</i><sub>3</sub></num><den>1 − <i>S</i><sub>2</sub></den></frac> gets the degrees right and the sign wrong; <frac><num><i>S</i><sub>1</sub> − <i>S</i><sub>3</sub></num><den>1 + <i>S</i><sub>2</sub></den></frac> fails the <i>C</i> = 0 test.',
    say: null,
  },
  // pp. 325, 327–329
  {
    topic: 11,
    kind: 'shortcut',
    q: 'tan <i>A</i>, tan <i>B</i>, tan <i>C</i> are the roots of <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 11<i>x</i> − 6 = 0, with <i>A</i>, <i>B</i>, <i>C</i> in (0, <frac><num>π</num><den>2</den></frac>). Find <i>A</i> + <i>B</i> + <i>C</i>. The fast way?',
    a: 'Write <i>S</i><sub>1</sub>, <i>S</i><sub>2</sub>, <i>S</i><sub>3</sub> by Vieta before reading further: 6, 11, 6, so tan(<i>A</i> + <i>B</i> + <i>C</i>) = <frac><num>6 − 6</num><den>1 − 11</den></frac> = 0, and the roots are never needed. tan <i>θ</i> = 0 only says <i>θ</i> = <i>n</i>π: bound the sum from the sizes of the angles, 0 < <i>A</i> + <i>B</i> + <i>C</i> < <frac><num>3π</num><den>2</den></frac>, and the only multiple of π there is π. That bounding step is the whole difficulty: “<i>A</i> + <i>B</i> + <i>C</i> = 0” has every calculation right and the answer wrong. The roots are 1, 2, 3, so tan<sup>−1</sup> 1 + tan<sup>−1</sup> 2 + tan<sup>−1</sup> 3 = π',
    why: 'tan<sup>−1</sup> <frac><num>1</num><den>2</den></frac> + tan<sup>−1</sup> <frac><num>1</num><den>5</den></frac> + tan<sup>−1</sup> <frac><num>1</num><den>8</den></frac>: <i>S</i><sub>1</sub> = <frac><num>33</num><den>40</den></frac>, <i>S</i><sub>2</sub> = <frac><num>3</num><den>16</den></frac>, <i>S</i><sub>3</sub> = <frac><num>1</num><den>80</den></frac>, tangent of the sum 1, and the sum lies in (0, <frac><num>3π</num><den>4</den></frac>), so it is <frac><num>π</num><den>4</den></frac>.',
    say: null,
  },


  // ── Additional C · Exercises for Product-to-Sum and Triple-Angle ──
  // pp. 271–275
  {
    topic: 12,
    kind: 'remember',
    q: 'When do you reach for product-to-sum, and when for the triple angle? And what is sin <i>A</i> sin(60° − <i>A</i>) sin(60° + <i>A</i>)?',
    a: 'Reach for product-to-sum when you face a product of two sines or cosines whose arguments are unequal and the target is a sum or difference, or when a chain of products needs terms to cancel against each other: flatten first, look for cancellation second. Reach for the triple angle when an expression contains a cube of a sine or cosine, or when three angles sit in the pattern <i>θ</i>, 60° − <i>θ</i>, 60° + <i>θ</i>: that trio is a triple-angle formula in disguise. sin(60° − <i>A</i>) sin(60° + <i>A</i>) = sin<sup>2</sup> 60° − sin<sup>2</sup> <i>A</i> = <frac><num>3</num><den>4</den></frac> − sin<sup>2</sup> <i>A</i>, so the product is <frac><num>3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i></num><den>4</den></frac> = <frac><num>1</num><den>4</den></frac> sin 3<i>A</i>; likewise cos <i>A</i> cos(60° − <i>A</i>) cos(60° + <i>A</i>) = <frac><num>1</num><den>4</den></frac> cos 3<i>A</i>',
    why: '{20°, 40°, 80°} is {<i>A</i>, 60° − <i>A</i>, 60° + <i>A</i>} with <i>A</i> = 20°: sin 20° sin 40° sin 80° = <frac><num>sin 60°</num><den>4</den></frac> = <frac><num>√3</num><den>8</den></frac>, and cos 20° cos 40° cos 80° = <frac><num>cos 60°</num><den>4</den></frac> = <frac><num>1</num><den>8</den></frac>.',
    say: null,
  },
  // pp. 274–275
  {
    topic: 12,
    kind: 'remember',
    q: 'How does reading the triple-angle formulas right to left help, as in cos 3<i>x</i> cos<sup>3</sup> <i>x</i> + sin 3<i>x</i> sin<sup>3</sup> <i>x</i> = cos<sup>3</sup> 2<i>x</i>?',
    a: 'A cube of a sine or cosine is always a disguised combination of the single and triple angles: cos<sup>3</sup> <i>θ</i> = <frac><num>cos 3<i>θ</i> + 3 cos <i>θ</i></num><den>4</den></frac> and sin<sup>3</sup> <i>θ</i> = <frac><num>3 sin <i>θ</i> − sin 3<i>θ</i></num><den>4</den></frac>, power reduction for cubes. Substituting both, the left side becomes <frac><num>cos<sup>2</sup> 3<i>x</i> − sin<sup>2</sup> 3<i>x</i> + 3(cos 3<i>x</i> cos <i>x</i> + sin 3<i>x</i> sin <i>x</i>)</num><den>4</den></frac> = <frac><num>cos 6<i>x</i> + 3 cos 2<i>x</i></num><den>4</den></frac>, and the same cube formula with <i>θ</i> = 2<i>x</i> gives exactly that for cos<sup>3</sup> 2<i>x</i>. Most students know the triple-angle formulas only left to right, as a way of expanding cos 3<i>A</i>; this reading makes the proof three lines instead of thirty',
    why: 'cos 3<i>x</i> = cos <i>x</i>: 4 cos <i>x</i>(cos<sup>2</sup> <i>x</i> − 1) = 0, so cos <i>x</i> = 0 or sin <i>x</i> = 0, the single family <i>x</i> = <frac><num><i>n</i>π</num><den>2</den></frac>.',
    say: null,
  },

  // ── Additional D · Boundedness Equations and Simultaneous Trigonometric Equations ──
  // pp. 330, 332, 335–336
  {
    topic: 13,
    kind: 'remember',
    q: 'When and how is the boundedness argument used to solve an equation?',
    a: 'When the two sides are different in kind: high even powers such as sin<sup>6</sup> <i>x</i>, a sum of two separately capped functions, or an algebraic side such as <i>x</i><sup>2</sup> + <frac><num>1</num><den><i>x</i><sup>2</sup></den></frac>. If <i>f</i>(<i>x</i>) ≤ <i>M</i> and <i>g</i>(<i>x</i>) ≥ <i>M</i> on the domain, then <i>f</i>(<i>x</i>) = <i>g</i>(<i>x</i>) ⟺ <i>f</i>(<i>x</i>) = <i>M</i> and <i>g</i>(<i>x</i>) = <i>M</i>. Three steps: bound each side and find the common value <i>M</i>; write the family of <i>x</i> achieving each bound; intersect the families, and check the common points lie in the domain of both sides. The intersection is frequently empty, and then the answer is “no solution”. The method proves nothing unless the bounds meet: <i>f</i> ≤ 2 with <i>g</i> ≥ 1 tells you nothing',
    why: 'sin<sup>6</sup> <i>x</i> = 1 + cos<sup>4</sup> 3<i>x</i>: both sides must be 1, so <i>x</i> = (2<i>m</i> + 1)<frac><num>π</num><den>2</den></frac> and <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>6</den></frac>; the first family lies inside the second (<i>n</i> = 3<i>m</i> + 1), so <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>.',
    say: null,
  },
  // pp. 331, 333, 335
  {
    topic: 13,
    kind: 'remember',
    q: 'How do you solve two conditions on the same angle, such as sin <i>θ</i> = −<frac><num>1</num><den>2</den></frac> and tan <i>θ</i> = <frac><num>1</num><den>√3</den></frac>?',
    a: 'Do not generalise first. Solve each equation within [0, 2π) only, take the intersection of the two lists (empty means no solution), and only then add 2<i>n</i>π, never <i>n</i>π. Here sin <i>θ</i> = −<frac><num>1</num><den>2</den></frac> gives <frac><num>7π</num><den>6</den></frac> or <frac><num>11π</num><den>6</den></frac>, tan <i>θ</i> = <frac><num>1</num><den>√3</den></frac> gives <frac><num>π</num><den>6</den></frac> or <frac><num>7π</num><den>6</den></frac>, so <i>θ</i> = 2<i>n</i>π + <frac><num>7π</num><den>6</den></frac>. Two independent conditions on the same angle fix the quadrant, and a shift of π moves the terminal side to the opposite quadrant, where at least one of the given values changes sign; so the period is 2π even when one condition involves tan (unless every given sine or cosine value is 0). For conditions on a multiple such as 2<i>θ</i>, solve for 2<i>θ</i> first and then divide',
    why: 'Adding π to <frac><num>7π</num><den>6</den></frac> gives <frac><num>π</num><den>6</den></frac> (modulo 2π), where tan is still <frac><num>1</num><den>√3</den></frac> but sin <frac><num>π</num><den>6</den></frac> = +<frac><num>1</num><den>2</den></frac>.',
    say: null,
  },
  // pp. 332–333, 335
  {
    topic: 13,
    kind: 'mistake',
    q: 'Solving sin<sup>4</sup> <i>x</i> = 1 + tan<sup>8</sup> <i>x</i> by boundedness, is the answer <i>x</i> = (2<i>n</i> + 1)<frac><num>π</num><den>2</den></frac>?',
    a: 'No: the equation has no solution. Equality forces sin<sup>4</sup> <i>x</i> = 1 and tan<sup>8</sup> <i>x</i> = 0, that is <i>x</i> = (2<i>m</i> + 1)<frac><num>π</num><den>2</den></frac> and <i>x</i> = <i>n</i>π, and an odd multiple of <frac><num>π</num><den>2</den></frac> is never a multiple of π: the families are disjoint. More sharply, sin <i>x</i> = ±1 forces cos <i>x</i> = 0, where tan <i>x</i> is undefined, so the right side does not even exist there. Stopping after one family is the trap: the argument ends only when you have intersected the families and checked the common points lie in the domain of both sides',
    why: 'cos<sup>2</sup> <i>x</i> + sec<sup>2</sup> <i>x</i> = 2: with <i>u</i> = cos<sup>2</sup> <i>x</i> > 0, <i>u</i> + <frac><num>1</num><den><i>u</i></den></frac> ≥ 2 with equality only at <i>u</i> = 1, so <i>x</i> = <i>n</i>π.',
    say: null,
  },
];
