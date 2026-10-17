/**
 * KEY POINTS for Physics Class 11, Chapter 1 (Units and Measurements).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has one or two points for its
 * central result. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's Memory aids, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Systems of Units and SI Units ──
  // p. 16
  {
    topic: 0,
    kind: 'remember',
    q: 'How many SI base units are there, and which are they?',
    a: 'Seven: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)',
    why: 'Plus 2 supplementary units, radian (rad) and steradian (sr), both dimensionless.',
    say: null,
  },
  // p. 16
  {
    topic: 0,
    kind: 'remember',
    q: 'Since 2019, what fixes each SI base unit?',
    a: 'A constant of nature: <i>c</i>, Δ<i>ν</i><sub>Cs</sub>, <i>h</i>, <i>e</i>, <i>k</i><sub>B</sub>, <i>N</i><sub>A</sub>, <i>K</i><sub>cd</sub>',
    why: 'Permanent, reproducible, artifact-free.',
    say: null,
  },
  // p. 15
  {
    topic: 0,
    kind: 'mixup',
    q: 'K or k: which is kelvin and which is kilo?',
    a: 'K is kelvin; k is the prefix kilo',
    why: 'And it is kg, not Kg or kgs; s, not sec.',
    say: null,
  },
  // p. 15
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is charge a base quantity?',
    a: 'No. Only electric current is the electrical base quantity',
    why: 'The coulomb is a derived unit, C = A s.',
    say: 'Current is king; charge is its child (C = A·s).',
  },
  // p. 16
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Your first step in any unit conversion?',
    a: 'Write the dimensional formula, then plug into <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>',
    why: 'Finish with the direction check: smaller unit ⟹ bigger number.',
    say: 'Smaller unit, bigger number.',
  },

  // ── Topic 02 · Dimensional Analysis and Formulas ──
  // p. 25
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the three uses of dimensional analysis?',
    a: 'Check correctness, derive power-law relations, convert units via <i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub>',
    why: 'It cannot find dimensionless constants (½, 2π), handle more than 3 variables, produce sums of terms, or tell same-dimension quantities apart.',
    say: null,
  },
  // p. 25
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the dimensional formulas of <i>G</i> and <i>h</i>?',
    a: '<i>G</i> is [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]; <i>h</i> is [M L<sup>2</sup> T<sup>−1</sup>]',
    why: 'Power is [M L<sup>2</sup> T<sup>−3</sup>]; pressure and stress, [M L<sup>−1</sup> T<sup>−2</sup>].',
    say: null,
  },
  // p. 24
  {
    topic: 1,
    kind: 'mixup',
    q: 'Work and torque have the same dimensions. Are they the same quantity?',
    a: 'No. Both are [M L<sup>2</sup> T<sup>−2</sup>], but they are physically distinct',
    why: 'Dimensions cannot tell them apart.',
    say: 'Same recipe, different dish',
  },
  // p. 24
  {
    topic: 1,
    kind: 'mistake',
    q: 'If an equation is dimensionally correct, is it correct?',
    a: 'Not necessarily: dimensionally correct ⇏ physically correct, but dimensionally wrong ⇒ definitely wrong',
    why: 'The real formula may differ by a numerical factor or contain extra same-dimension terms.',
    say: 'Dimensions catch the liar, not the sloppy',
  },
  // p. 25
  {
    topic: 1,
    kind: 'shortcut',
    q: 'In <i>y</i> = <i>A</i> sin(<i>kx</i> − <i>ωt</i>), what are [<i>k</i>] and [<i>ω</i>]?',
    a: '[<i>k</i>] = [L<sup>−1</sup>] and [<i>ω</i>] = [T<sup>−1</sup>]',
    why: '<i>kx</i> and <i>ωt</i> must be pure numbers.',
    say: null,
  },

  // ── Topic 03 · Errors in Measurement ──
  // pp. 33–34
  {
    topic: 2,
    kind: 'remember',
    q: 'In <i>x</i> = <i>a</i> − <i>b</i>, how do the absolute errors combine?',
    a: 'They add: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>, for a sum and a difference alike',
    why: 'For a product or a quotient, relative errors add.',
    say: 'Plus or minus, errors always add',
  },
  // p. 34
  {
    topic: 2,
    kind: 'remember',
    q: 'For <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>, what is Δ<i>x</i>/<i>x</i>?',
    a: 'Δ<i>x</i>/<i>x</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>',
    why: 'All formulas give the worst-case maximum error.',
    say: 'Powers come down to multiply',
  },
  // p. 34
  {
    topic: 2,
    kind: 'mixup',
    q: 'Precision and accuracy: what does each mean?',
    a: 'Precision: readings agree with each other. Accuracy: readings close to the true value',
    why: 'Random error kills precision; systematic error kills accuracy.',
    say: null,
  },
  // p. 33
  {
    topic: 2,
    kind: 'mistake',
    q: 'How much of <i>a</i>’s relative error does √<i>a</i> carry?',
    a: 'Half. A squared term contributes twice its relative error; a square root, half',
    why: 'Dropping the power factor is the most frequent JEE/NEET mistake in this topic.',
    say: null,
  },
  // p. 34
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Fastest way to the maximum percentage error in <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>?',
    a: '<i>δx</i> = <i>p</i> <i>δa</i> + <i>q</i> <i>δb</i> + <i>r</i> <i>δc</i>: add percentage errors with their exponents',
    why: 'Never compute absolute errors first.',
    say: null,
  },

  // ── Topic 04 · Significant Figures ──
  // p. 42
  {
    topic: 3,
    kind: 'remember',
    q: 'Which zeros are significant?',
    a: 'Sandwiched zeros and trailing zeros after a decimal point; leading zeros never',
    why: 'Trailing zeros in a bare whole number are ambiguous: use scientific notation.',
    say: 'Leading zeros lead nowhere; trailing decimals tell the truth.',
  },
  // pp. 37, 42
  {
    topic: 3,
    kind: 'remember',
    q: 'Rounding off: what if the dropped digit is exactly 5?',
    a: 'Round half to even: keep the last digit if it is even, raise it if it is odd',
    why: '6.250 → 6.2; 6.350 → 6.4.',
    say: null,
  },
  // pp. 36, 42
  {
    topic: 3,
    kind: 'mixup',
    q: 'Multiplying or adding: what limits the answer?',
    a: '×, ÷: the least number of significant figures. +, −: the least number of decimal places',
    why: 'The most heavily tested point in the whole subtopic.',
    say: 'Times-divide → figures; plus-minus → places.',
  },
  // p. 42
  {
    topic: 3,
    kind: 'mistake',
    q: 'How many significant figures does 0.0042 have?',
    a: 'Two, not four',
    why: 'Leading zeros are pure scaffolding.',
    say: null,
  },
  // p. 42
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A number’s zeros make you unsure of the count. What do you do?',
    a: 'Rewrite it in scientific notation: the mantissa reveals the count',
    why: 'In a multi-step calculation, round exactly once, at the end.',
    say: null,
  },

  // ── Topic 05 · Measuring Instruments (Vernier Callipers & Screw Gauge) ──
  // pp. 46, 52
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the least count of a vernier callipers?',
    a: 'LC = 1 MSD − 1 VSD = (value of 1 main division)/(number of vernier divisions)',
    why: 'If <i>n</i> vernier divisions span (<i>n</i> − 1) main divisions, LC = MSD/<i>n</i>.',
    say: 'Main minus vernier',
  },
  // p. 52
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the least count of a screw gauge?',
    a: 'LC = pitch/(circular divisions), where pitch = linear distance moved/number of rotations',
    why: 'Typical least counts: metre scale 1 mm; vernier 0.1 mm; screw gauge 0.01 mm.',
    say: 'Pitch over circle',
  },
  // p. 46
  {
    topic: 4,
    kind: 'mixup',
    q: 'Positive or negative zero error: subtract it or add it?',
    a: 'Positive: subtract it. Negative: add its magnitude',
    why: 'One rule covers both: corrected = observed − zero error, sign included.',
    say: null,
  },
  // p. 51
  {
    topic: 4,
    kind: 'mistake',
    q: 'The 45th circular division coincides. Is that 45 mm?',
    a: 'No. It is 45 × LC: for LC = 0.01 mm, only 0.45 mm',
    why: 'Multiply the coinciding division by the least count before adding.',
    say: null,
  },
  // p. 51
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The fixed sequence for any vernier or screw-gauge reading?',
    a: 'LC first; then MSR + (coinciding division × LC); then corrected = observed − zero error',
    why: 'The answer’s last meaningful decimal place should match the least count.',
    say: null,
  },

  // ── Topic 06 · Measurement of Length, Mass and Time ──
  // p. 60
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you find the distance to a far object by parallax?',
    a: '<i>D</i> = <i>b</i>/<i>θ</i>, with <i>θ</i> in radians',
    why: 'For stars the basis is <i>b</i> = 2 AU. Bigger parallax → closer object.',
    say: 'Two eyes, one distance',
  },
  // p. 54
  {
    topic: 5,
    kind: 'remember',
    q: 'Distance from an echo that returns after a round-trip time <i>t</i>?',
    a: '<i>D</i> = <i>vt</i>/2',
    why: '<i>v</i> = <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup> for radio or laser pulses; <i>v</i> ≈ 1500 m s<sup>−1</sup> for sound in water.',
    say: 'There and back, so halve the track',
  },
  // p. 59
  {
    topic: 5,
    kind: 'mixup',
    q: 'Which is bigger, a light year or a parsec?',
    a: 'The parsec: 1 pc ≈ 3.26 ly ≈ 3.08 × 10<sup>16</sup> m',
    why: 'Smallest to largest: AU < ly < pc.',
    say: null,
  },
  // p. 59
  {
    topic: 5,
    kind: 'mistake',
    q: 'Can <i>θ</i> go into <i>D</i> = <i>b</i>/<i>θ</i> in degrees?',
    a: 'No. Both <i>D</i> = <i>b</i>/<i>θ</i> and <i>d</i> = <i>αD</i> need the angle in radians',
    why: '1° = π/180 rad; 1″ = 4.85 × 10<sup>−6</sup> rad.',
    say: null,
  },
  // p. 59
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A question says “film”, “drop” or “monolayer”. Which formula?',
    a: '<i>t</i> = <i>V</i>/<i>A</i>: the film thickness is the molecule’s size',
    why: 'Name the method from the clue word, then convert every angle to radians.',
    say: null,
  },

  // ── Additional A · Dimensions Through Calculus ──
  // p. 62
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the dimensions of d<sup><i>n</i></sup><i>y</i>/d<i>x</i><sup><i>n</i></sup>?',
    a: '[<i>Y</i>][<i>X</i>]<sup>−<i>n</i></sup>',
    why: 'An integral runs the arrow backwards: [∫ <i>y</i> d<i>x</i>] = [<i>Y</i>][<i>X</i>].',
    say: null,
  },
  // pp. 62–63
  {
    topic: 6,
    kind: 'shortcut',
    q: 'How do you find an unknown coefficient in a differential equation?',
    a: 'Demand homogeneity term by term: each coefficient is then a one-step division',
    why: 'In <i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>b</i> d<i>x</i>/d<i>t</i> + <i>kx</i> = 0: [<i>b</i>] = M T<sup>−1</sup>, [<i>k</i>] = M T<sup>−2</sup>.',
    say: null,
  },

  // ── Additional B · Percentage Errors in Sums, Differences and Reciprocals ──
  // p. 64
  {
    topic: 7,
    kind: 'remember',
    q: 'Percentage error of a sum, when the inputs come as percentages?',
    a: 'Convert each to an absolute error, add the absolute errors, convert back: <i>δx</i> = (Δ<i>x</i>/<i>x</i>) × 100%',
    why: 'Percentages of different bases never add.',
    say: null,
  },
  // p. 65
  {
    topic: 7,
    kind: 'remember',
    q: 'Absolute error in <i>x</i> when 1/<i>x</i> = 1/<i>a</i> + 1/<i>b</i>?',
    a: 'Δ<i>x</i> = <i>x</i><sup>2</sup>(Δ<i>a</i>/<i>a</i><sup>2</sup> + Δ<i>b</i>/<i>b</i><sup>2</sup>)',
    why: 'Differentiate the reciprocal relation, taking every contribution positive.',
    say: null,
  },

  // ── Additional C · Dimensional Formulae from Physical Laws ──
  // p. 68
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the dimensional formula of <i>ε</i><sub>0</sub>?',
    a: 'M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup> (farad per metre)',
    why: 'From Coulomb’s law, <i>F</i> = <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/(4π<i>ε</i><sub>0</sub><i>r</i><sup>2</sup>).',
    say: null,
  },
  // pp. 68–69
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the dimensional formula of <i>μ</i><sub>0</sub>?',
    a: 'M L T<sup>−2</sup> A<sup>−2</sup> (henry per metre)',
    why: 'Check: 1/√(<i>ε</i><sub>0</sub><i>μ</i><sub>0</sub>) comes out as L T<sup>−1</sup>, a speed.',
    say: null,
  },

  // ── Additional D · Dimensionless Groups and Estimation ──
  // p. 71
  {
    topic: 9,
    kind: 'remember',
    q: 'Four variables, three equations: what can dimensional analysis still give?',
    a: '<i>Q</i> = (a fully determined power-law product) × Φ(a dimensionless combination)',
    why: 'It fixes everything except the dimensionless function Φ.',
    say: null,
  },
  // p. 71
  {
    topic: 9,
    kind: 'shortcut',
    q: 'How do you check a Fermi-style estimate?',
    a: 'Audit it against the range tables: lengths 10<sup>−15</sup> to 10<sup>26</sup> m; masses 10<sup>−30</sup> to 10<sup>55</sup> kg',
    why: 'A landing inside the expected decade is the estimate’s certificate.',
    say: null,
  },
];
