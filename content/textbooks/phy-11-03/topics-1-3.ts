import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 01 to 03: pp. 132–156 of the Class 11 Physics Master
 * Reference, word for word. (p. 132 is the chapter opener: title and contents,
 * then Sub-topic 01 begins on the same page; the chapter has no introduction
 * of its own.) Pages 135, 144 and 152 are the book's figure pages for Figures
 * 3.1, 3.2 and 3.3; each figure is placed where the book prints its caption.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 132–140 ─────────────────────────
  {
    n: '01',
    title: 'Vector Algebra and Resolution',
    kalam: 'Every vector sum is just this: how do two arrows, pointing different ways, combine into one?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the mathematical toolkit for all of two-dimensional physics — projectiles, forces, fields, everything downstream depends on it. CBSE Boards ask the parallelogram-law derivation (2–3 marks) and component resolution. JEE Main reliably carries 1–2 questions on resultants, dot/cross products, or unit vectors. NEET tests quick conceptual MCQs (scalar vs vector, resultant range, perpendicularity). JEE Advanced folds vector algebra silently into mechanics and electromagnetism, so fluency here pays off across the whole syllabus.',
      },
      {
        t: 'p',
        html: 'Some quantities are fully described by a single number with a unit — the temperature in Jaipur today, the mass of a cricket ball, the time for a train journey. Tell me “35 °C” and there’s nothing left to ask. These are <b>scalars</b>: magnitude only. But other quantities are useless without a direction. If a friend says “the metro station is 500 m away,” your next question is which way? Quantities that need both a magnitude <b>and</b> a direction — and that combine by a special geometric rule — are <b>vectors</b>: displacement, velocity, acceleration, force, momentum.<br><br>That “special rule” is the whole reason vectors deserve their own algebra. Two scalars just add: 2 kg + 3 kg = 5 kg, always. But two vectors do <b>not</b> simply add their magnitudes unless they point the same way. Walk 3 km east then 4 km north and you are not 7 km from home — you are 5 km away, along a slanted line. Direction changes the arithmetic. Vectors add <b>head-to-tail</b> (the triangle law) or as the diagonal of a parallelogram (the parallelogram law), and that geometry is what we’re really learning.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture two people pushing a stalled auto-rickshaw. If both push from behind in the same direction, their efforts add fully — a 300 N and 200 N push gives 500 N. If one pushes from behind and the other from the side, the rickshaw lurches off at an angle, and the effective combined push is less than 500 N and points somewhere between the two. The cart instinctively “computes” the parallelogram law for them. Every vector sum is just this: how do two arrows, pointing different ways, combine into one?',
      },
      {
        t: 'p',
        html: 'The reverse operation is just as important: <b>resolution</b>. Any single vector can be split into pieces along chosen directions — almost always the perpendicular <i>x</i> and <i>y</i> axes. A force pulling a sledge at an angle has one part dragging it forward (the <i>x</i>-component) and one part lifting it (the <i>y</i>-component). Resolving turns an awkward slanted vector into two clean, independent, perpendicular vectors that we can handle with ordinary arithmetic — and then recombine. Resolution is the single most powerful problem-solving move in this entire chapter.<br><br>Finally, vectors can be multiplied in two distinct ways, each capturing a different physical idea. The <b>dot (scalar) product</b> measures “how much of one vector lies along another” — it produces a scalar and underlies work and power. The <b>cross (vector) product</b> measures “how much two vectors are perpendicular” — it produces a new vector and underlies torque and angular momentum.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• Vector addition is <b>not</b> ordinary addition of magnitudes unless the vectors are <b>collinear</b> (same or opposite direction). The default is the parallelogram/component method.<br>• The angle <i>θ</i> in the addition and product formulas is the angle between the two vectors when drawn <b>tail-to-tail</b> (0 ≤ <i>θ</i> ≤ 180°); in the resolution formulas <i>θ</i> is the angle the vector makes with the <i>x</i>-axis.<br>• A vector’s <b>components depend on the chosen axes</b>, but the vector itself does not — choose axes to make the problem easy.<br>• A <b>unit vector is dimensionless</b> (pure direction); a null vector has zero magnitude and undefined direction.<br>• The dot product yields a <b>scalar</b>; the cross product yields a <b>vector</b>. Never write one as the other.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Unit vector',
        main: '<i>Â</i> = <i>A⃗</i>/|<i>A⃗</i>|',
        legend: [],
        note: 'magnitude 1, dimensionless. Axis unit vectors: <i>î</i>, <i>ĵ</i>, <i>k̂</i>.',
      },
      {
        t: 'formula',
        kicker: 'Component (Cartesian) form',
        main: '<i>A⃗</i> = <i>A</i><sub><i>x</i></sub><i>î</i> + <i>A</i><sub><i>y</i></sub><i>ĵ</i> + <i>A</i><sub><i>z</i></sub><i>k̂</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resolution of a vector A⃗ making angle θ with the x-axis',
        main: '<i>A</i><sub><i>x</i></sub> = <i>A</i> cos <i>θ</i><br><i>A</i><sub><i>y</i></sub> = <i>A</i> sin <i>θ</i><br><i>A</i> = √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup>)<br>tan <i>θ</i> = <i>A</i><sub><i>y</i></sub>/<i>A</i><sub><i>x</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Addition (parallelogram law)',
        main: 'resultant of <i>A⃗</i> and <i>B⃗</i> with angle <i>θ</i> between them:<br><i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i>)<br>tan <i>α</i> = <i>B</i> sin <i>θ</i>/(<i>A</i> + <i>B</i> cos <i>θ</i>)',
        legend: ['<i>α</i> = the angle <i>R⃗</i> makes with <i>A⃗</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Range of resultant',
        main: '|<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Component addition',
        main: '<i>R⃗</i> = <i>A⃗</i> + <i>B⃗</i> ⇒ <i>R</i><sub><i>x</i></sub> = <i>A</i><sub><i>x</i></sub> + <i>B</i><sub><i>x</i></sub>, <i>R</i><sub><i>y</i></sub> = <i>A</i><sub><i>y</i></sub> + <i>B</i><sub><i>y</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Scalar (dot) product',
        main: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub> (a scalar)<br>cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>AB</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Properties: commutative (<i>A⃗</i> · <i>B⃗</i> = <i>B⃗</i> · <i>A⃗</i>); <i>î</i> · <i>î</i> = 1, <i>î</i> · <i>ĵ</i> = 0; <i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup>; perpendicular ⇒ <i>A⃗</i> · <i>B⃗</i> = 0.',
      },
      {
        t: 'formula',
        kicker: 'Vector (cross) product',
        main: '<i>A⃗</i> × <i>B⃗</i> = (<i>AB</i> sin <i>θ</i>) <i>n̂</i> (a vector)<br>|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Direction <i>n̂</i> is perpendicular to the plane of <i>A⃗</i>, <i>B⃗</i> by the right-hand rule. Anticommutative: <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; <i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i>; <i>A⃗</i> × <i>A⃗</i> = 0⃗. Its magnitude equals the <b>area of the parallelogram</b> spanned by <i>A⃗</i> and <i>B⃗</i>.',
      },

      { t: 'part', title: 'CBSE board derivation — Parallelogram law of vector addition' },
      {
        t: 'p',
        html: '<b>Statement:</b> If two vectors are represented in magnitude and direction by the two adjacent sides of a parallelogram drawn from a point, their resultant is represented by the diagonal of the parallelogram drawn from that same point.',
      },
      {
        t: 'p',
        html: '<b>Derivation of the magnitude and direction.</b> Let <i>A⃗</i> and <i>B⃗</i> be the two vectors, drawn head-to-tail as <i>OP</i> and <i>PQ</i> (<i>PQ</i> is equal and parallel to the parallelogram’s second side), with <i>θ</i> the angle between <i>PQ</i> and <i>OP</i> extended, so the resultant is <i>OQ</i> = <i>R⃗</i>.',
      },
      { t: 'fig', id: 'p11-03-fig-3.1' },
      {
        t: 'p',
        html: 'Drop a perpendicular from <i>Q</i> to the line <i>OP</i> extended, meeting it at <i>S</i>. In the right triangle <i>PQS</i>:<br><i>PS</i> = <i>B</i> cos <i>θ</i>, <i>QS</i> = <i>B</i> sin <i>θ</i>.<br>Now in the right triangle <i>OQS</i>, with <i>OS</i> = <i>OP</i> + <i>PS</i> = <i>A</i> + <i>B</i> cos <i>θ</i>:<br><i>OQ</i><sup>2</sup> = <i>OS</i><sup>2</sup> + <i>QS</i><sup>2</sup> = (<i>A</i> + <i>B</i> cos <i>θ</i>)<sup>2</sup> + (<i>B</i> sin <i>θ</i>)<sup>2</sup>.<br>Expand:<br><i>R</i><sup>2</sup> = <i>A</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i> + <i>B</i><sup>2</sup> cos<sup>2</sup> <i>θ</i> + <i>B</i><sup>2</sup> sin<sup>2</sup> <i>θ</i> = <i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i>,<br>using cos<sup>2</sup> <i>θ</i> + sin<sup>2</sup> <i>θ</i> = 1. Therefore<br><i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i>).',
      },
      {
        t: 'p',
        html: 'Why each step: the perpendicular splits <i>B⃗</i> into a part along <i>A⃗</i> (<i>B</i> cos <i>θ</i>, which lengthens the base) and a part across it (<i>B</i> sin <i>θ</i>, the height); Pythagoras on the resulting right triangle then assembles the diagonal.',
      },
      {
        t: 'p',
        html: '<b>Direction.</b> The resultant makes angle <i>α</i> with <i>A⃗</i>, where<br>tan <i>α</i> = <i>QS</i>/<i>OS</i> = <i>B</i> sin <i>θ</i>/(<i>A</i> + <i>B</i> cos <i>θ</i>).',
      },
      {
        t: 'p',
        html: '<b>Useful special cases (read straight off the formula):</b><br>• <i>θ</i> = 0°: <i>R</i> = <i>A</i> + <i>B</i> (maximum) — vectors aligned.<br>• <i>θ</i> = 180°: <i>R</i> = |<i>A</i> − <i>B</i>| (minimum) — vectors opposed.<br>• <i>θ</i> = 90°: <i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>) — the Pythagorean case.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A child pulls a toy cart with a string, applying a force of 20 N directed at 60° above the horizontal. Find the horizontal and vertical components of this force.',
        steps: [
          '<b>Given:</b> <i>F</i> = 20 N, <i>θ</i> = 60° to the horizontal.',
          '<b>Solution:</b> Resolve along the horizontal (<i>x</i>) and vertical (<i>y</i>) axes:<br><i>F</i><sub><i>x</i></sub> = <i>F</i> cos <i>θ</i> = 20 cos 60° = 20 × 0.5 = 10 N,<br><i>F</i><sub><i>y</i></sub> = <i>F</i> sin <i>θ</i> = 20 sin 60° = 20 × √3/2 = 10√3 ≈ 17.3 N.',
          'The horizontal part drags the cart forward; the vertical part tends to lift it. A quick check: √(<i>F</i><sub><i>x</i></sub><sup>2</sup> + <i>F</i><sub><i>y</i></sub><sup>2</sup>) = √(100 + 300) = √400 = 20 N, recovering the original force. ✓',
        ],
        ans: '<i>F</i><sub><i>x</i></sub> = 10 N (horizontal), <i>F</i><sub><i>y</i></sub> ≈ 17.3 N (vertical)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two forces of magnitudes 3 N and 4 N act at a point. Which of the following can <b>not</b> be the magnitude of their resultant?<br>(A) 1 N (B) 5 N (C) 7 N (D) 8 N',
        steps: [
          '<b>The trap:</b> students compute one specific case (often the perpendicular √(3<sup>2</sup> + 4<sup>2</sup>) = 5) and stop, never checking the allowed range.',
          '<b>Fast solution:</b> The resultant of two vectors always lies in the band<br>|<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i> ⇒ |4 − 3| ≤ <i>R</i> ≤ 4 + 3 ⇒ 1 ≤ <i>R</i> ≤ 7.<br>So 1, 5 (90° case), and 7 (aligned) are all achievable, but 8 > 7 is impossible.',
          'Speed cue: for any “which value of the resultant is possible/impossible” question, immediately write the range [ |<i>A</i> − <i>B</i>|, <i>A</i> + <i>B</i> ] and test against it — usually no real calculation is needed.',
        ],
        ans: '(D) 8 N',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A person walks 6 m due east, then 8 m in a direction 60° north of east. Find the magnitude and direction of the net displacement, and verify it by two methods.',
        steps: [
          '<b>Why it’s multi-concept:</b> it links component resolution, the Pythagorean magnitude, and the parallelogram-law formula as an independent cross-check.',
          '<b>Method 1 — components.</b> Take east as +<i>x</i>, north as +<i>y</i>.<br><i>A⃗</i> = (6, 0), <i>B⃗</i> = (8 cos 60°, 8 sin 60°) = (4, 4√3).<br><i>R⃗</i> = (6 + 4, 0 + 4√3) = (10, 4√3).<br><i>R</i> = √(10<sup>2</sup> + (4√3)<sup>2</sup>) = √(100 + 48) = √148 ≈ 12.2 m.<br>tan <i>α</i> = 4√3/10 = 6.93/10 = 0.693 ⇒ <i>α</i> ≈ 34.7° north of east.',
          '<b>Method 2 — parallelogram law</b> (angle between the two legs is 60°):<br><i>R</i> = √(6<sup>2</sup> + 8<sup>2</sup> + 2(6)(8) cos 60°) = √(36 + 64 + 96(0.5)) = √148 ≈ 12.2 m. ✓',
          'Both routes agree — the component method is usually faster for three or more vectors, while the parallelogram formula is handy for exactly two.',
        ],
        ans: '<i>R</i> ≈ 12.2 m at 34.7° north of east',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Given <i>A⃗</i> = 2<i>î</i> + 3<i>ĵ</i> − <i>k̂</i> and <i>B⃗</i> = <i>î</i> − <i>ĵ</i> + 2<i>k̂</i>, find (a) <i>A⃗</i> · <i>B⃗</i>, (b) the angle between them, (c) <i>A⃗</i> × <i>B⃗</i>, (d) a unit vector perpendicular to both, and (e) the area of the parallelogram they span.',
        steps: [
          '<b>Solution:</b> (a) <i>A⃗</i> · <i>B⃗</i> = (2)(1) + (3)(−1) + (−1)(2) = 2 − 3 − 2 = −3.',
          '(b) |<i>A⃗</i>| = √(4 + 9 + 1) = √14, |<i>B⃗</i>| = √(1 + 1 + 4) = √6.<br>cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/(|<i>A⃗</i>||<i>B⃗</i>|) = −3/√84 = −3/(2√21) ≈ −0.327 ⇒ <i>θ</i> ≈ 109°.<br>(The negative dot product already told us the angle is obtuse.)',
          '(c) Using the determinant:<br><i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; 2 3 −1 ; 1 −1 2| = <i>î</i>(6 − 1) − <i>ĵ</i>(4 + 1) + <i>k̂</i>(−2 − 3) = 5<i>î</i> − 5<i>ĵ</i> − 5<i>k̂</i>.',
          '(d) |<i>A⃗</i> × <i>B⃗</i>| = √(25 + 25 + 25) = 5√3, so a unit normal is<br><i>n̂</i> = (5<i>î</i> − 5<i>ĵ</i> − 5<i>k̂</i>)/(5√3) = (<i>î</i> − <i>ĵ</i> − <i>k̂</i>)/√3.',
          '(e) Area of the parallelogram = |<i>A⃗</i> × <i>B⃗</i>| = 5√3 ≈ 8.66 square units.',
          'Sanity check via |<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i> = √14√6 sin 109° = √84(0.946) ≈ 8.67. ✓',
        ],
        ans: '<i>A⃗</i> · <i>B⃗</i> = −3, <i>θ</i> ≈ 109°, <i>A⃗</i> × <i>B⃗</i> = 5<i>î</i> − 5<i>ĵ</i> − 5<i>k̂</i>, <i>n̂</i> = (<i>î</i> − <i>ĵ</i> − <i>k̂</i>)/√3, Area = 5√3',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A velocity of 100 m/s is directed 30° above the horizontal. Find its horizontal and vertical components.',
            a: '<i>v</i><sub><i>x</i></sub> = 50√3 ≈ 86.6 m/s, <i>v</i><sub><i>y</i></sub> = 50 m/s',
          },
          {
            q: '[NEET] Two forces of 5 N and 12 N act at a point. Find the maximum and minimum possible magnitudes of their resultant.',
            a: 'max 17 N, min 7 N',
          },
          {
            q: '[JEE Main] For <i>A⃗</i> = 3<i>î</i> + 4<i>ĵ</i>, find |<i>A⃗</i>| and the unit vector along <i>A⃗</i>.',
            a: '|<i>A⃗</i>| = 5, <i>Â</i> = 0.6<i>î</i> + 0.8<i>ĵ</i>',
          },
          {
            q: '[JEE Main] Find the angle that <i>A⃗</i> = <i>î</i> + <i>ĵ</i> + <i>k̂</i> makes with the <i>x</i>-axis.',
            a: 'cos <i>θ</i> = 1/√3, <i>θ</i> ≈ 54.7°',
          },
          {
            q: '[JEE Advanced] Given <i>A⃗</i> = <i>î</i> + 2<i>ĵ</i> + 3<i>k̂</i> and <i>B⃗</i> = 3<i>î</i> + 2<i>ĵ</i> + <i>k̂</i>, find <i>A⃗</i> × <i>B⃗</i> and the area of the parallelogram they span.',
            a: '<i>A⃗</i> × <i>B⃗</i> = −4<i>î</i> + 8<i>ĵ</i> − 4<i>k̂</i>, area = 4√6 ≈ 9.8 square units.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a vector quantity?',
        opts: [
          { label: 'work', nudge: '(A) work and (D) energy are scalars (work is itself a dot product, which yields a scalar).' },
          { label: 'speed', nudge: '(B) speed is the magnitude of velocity — the direction is exactly what speed throws away, making it scalar.' },
          { label: 'displacement', nudge: null },
          { label: 'energy', nudge: '(A) work and (D) energy are scalars (work is itself a dot product, which yields a scalar).' },
        ],
        correct: 2,
        solution: 'Displacement has both magnitude and direction and obeys the parallelogram law. The trap is associating “physics-y” quantities with vectors by default.',
      },
      {
        t: 'mcq',
        q: 'Two vectors have magnitudes 3 and 4 units. The magnitude of their resultant <b>cannot</b> be:',
        opts: [
          { label: '1', nudge: '(A) is the minimum (antiparallel), (C) the maximum (parallel), and (B) the perpendicular case √(3<sup>2</sup> + 4<sup>2</sup>) = 5.' },
          { label: '5', nudge: '(A) is the minimum (antiparallel), (C) the maximum (parallel), and (B) the perpendicular case √(3<sup>2</sup> + 4<sup>2</sup>) = 5.' },
          { label: '7', nudge: '(A) is the minimum (antiparallel), (C) the maximum (parallel), and (B) the perpendicular case √(3<sup>2</sup> + 4<sup>2</sup>) = 5.' },
          { label: '8', nudge: null },
        ],
        correct: 3,
        solution: 'The resultant is bounded by |4 − 3| = 1 and 4 + 3 = 7. 8 lies outside this range. Students who only check the perpendicular value miss that 8 exceeds the maximum.',
      },
      {
        t: 'mcq',
        q: 'The scalar product of two non-zero vectors is zero. The vectors must be:',
        opts: [
          { label: 'parallel', nudge: '(A) parallel gives cos 0° = 1 (maximum dot product), (B) antiparallel gives cos 180° = −1, and (D) identical vectors give <i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup> ≠ 0.' },
          { label: 'antiparallel', nudge: '(A) parallel gives cos 0° = 1 (maximum dot product), (B) antiparallel gives cos 180° = −1, and (D) identical vectors give <i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup> ≠ 0.' },
          { label: 'perpendicular', nudge: null },
          { label: 'identical', nudge: '(A) parallel gives cos 0° = 1 (maximum dot product), (B) antiparallel gives cos 180° = −1, and (D) identical vectors give <i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup> ≠ 0.' },
        ],
        correct: 2,
        solution: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = 0 with <i>A</i>, <i>B</i> ≠ 0 forces cos <i>θ</i> = 0, i.e. <i>θ</i> = 90°. Only perpendicularity zeroes the dot product.',
      },
      {
        t: 'mcq',
        q: 'For two vectors, the magnitude of <i>A⃗</i> × <i>B⃗</i> equals <i>A⃗</i> · <i>B⃗</i> when the angle between them is:',
        opts: [
          { label: '0°', nudge: '(A) 0°: cross product is zero, dot is maximum.' },
          { label: '45°', nudge: null },
          { label: '90°', nudge: '(C) 90°: dot is zero, cross is maximum — they’re opposite extremes.' },
          { label: '180°', nudge: '(D) 180°: cross is zero again.' },
        ],
        correct: 1,
        solution: 'Setting <i>AB</i> sin <i>θ</i> = <i>AB</i> cos <i>θ</i> gives tan <i>θ</i> = 1, so <i>θ</i> = 45°. Only at 45° do the sin and cos contributions match.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding magnitudes arithmetically.</b> |<i>A⃗</i> + <i>B⃗</i>| ≠ <i>A</i> + <i>B</i> in general — that equality holds only when the vectors are parallel. For everything else, use components or the parallelogram law.',
          '<b>Swapping sin and cos in resolution.</b> When <i>θ</i> is measured from the <i>x</i>-axis, the <i>x</i>-component uses cos and the <i>y</i>-component uses sin. If the angle is measured from the <i>y</i>-axis instead, they switch — always note which axis the angle is from.',
          '<b>Mixing up the two products.</b> The dot product is a <b>scalar</b> (write a number); the cross product is a <b>vector</b> (write components). Writing <i>A⃗</i> · <i>B⃗</i> as a vector, or <i>A⃗</i> × <i>B⃗</i> as a number, loses marks instantly.',
          '<b>Forgetting the cross product is anticommutative.</b> <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i> — order matters, and the sign carries physical meaning (e.g. torque direction).',
          '<b>Giving a unit vector units.</b> A unit vector is pure direction, magnitude 1, dimensionless.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> When in doubt, <b>resolve into components</b> — it converts every messy geometry problem into clean axis-by-axis arithmetic, and it scales effortlessly to three or more vectors where the parallelogram law gets clumsy. Keep two instant sanity checks handy: the resultant must satisfy |<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>, and after resolving, √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup>) must return the original magnitude. And remember the physical meaning to pick the right product: <b>dot = “how much along” (cos); cross = “how much across” (sin).</b>',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Scalar', note: 'magnitude only. <b>Vector:</b> magnitude + direction; adds by the parallelogram/triangle law.' },
          { f: 'Unit vector', note: '<i>Â</i> = <i>A⃗</i>/|<i>A⃗</i>| (dimensionless); axis vectors <i>î</i>, <i>ĵ</i>, <i>k̂</i>.' },
          {
            f: 'Resolution',
            note: '<i>A</i><sub><i>x</i></sub> = <i>A</i> cos <i>θ</i>, <i>A</i><sub><i>y</i></sub> = <i>A</i> sin <i>θ</i>; <i>A</i> = √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup>), tan <i>θ</i> = <i>A</i><sub><i>y</i></sub>/<i>A</i><sub><i>x</i></sub>.',
          },
          {
            f: 'Resultant',
            note: '<i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i>); tan <i>α</i> = <i>B</i> sin <i>θ</i>/(<i>A</i> + <i>B</i> cos <i>θ</i>); range |<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>.',
          },
          {
            f: 'Dot product',
            note: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub> (scalar); ⊥ ⇒ 0.',
          },
          {
            f: 'Cross product',
            note: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>; <i>A⃗</i> × <i>B⃗</i> is ⊥ to both (right-hand rule); <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; equals parallelogram area.',
          },
        ],
        aids: ['Mnemonic: <b>“cos for components and dot; sin for cross.”</b>'],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 141–148 ─────────────────────────
  {
    n: '02',
    title: 'Vector Products (Dot and Cross)',
    kalam: 'That single contrast — cos versus sin, scalar versus vector — is the heart of this sub-topic.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Vector multiplication is a workhorse that resurfaces across mechanics, electromagnetism, and modern physics. CBSE Boards ask the definitions, properties, and a work-done (dot product) numerical. JEE Main reliably carries a question on angle-between-vectors, projection, area, or the determinant form of the cross product. NEET tests quick conceptual MCQs (which quantity is a dot/cross product, perpendicularity). JEE Advanced exploits the scalar and vector triple products and uses these operations inside torque, angular momentum, and Biot–Savart problems.',
      },
      {
        t: 'p',
        html: 'We already know how to add vectors. But multiplication is where vectors get genuinely interesting — because there are <b>two</b> completely different ways to multiply them, each answering a different physical question.<br><br>The first asks: “how much do these two vectors agree — how much does one point along the other?” This is the <b>dot product</b> (also called the scalar product). It’s largest when the vectors are parallel, shrinks as they turn apart, and is exactly <b>zero when they’re perpendicular</b>. The answer it returns is a plain number — a scalar — because “how much do they agree” is a quantity without direction. The physical archetype is <b>work</b>: only the part of a force that lies along the displacement does any work. Push a loaded thela (handcart) horizontally and the horizontal effort moves it; the vertical part of your push does nothing useful. Work is force “dotted” with displacement.<br><br>The second asks the opposite: “how much do these two vectors disagree — how much does one point across the other?” This is the <b>cross product</b> (vector product). It’s <b>zero when the vectors are parallel</b> and largest when they’re perpendicular — the mirror image of the dot product. And its answer is itself a vector, pointing perpendicular to both originals. The physical archetype is <b>torque</b>: a force applied along a spanner does nothing; a force applied across it, at right angles to the handle, turns the bolt most effectively. The “turning” lives in a direction perpendicular to both the lever arm and the force — which is exactly where the cross product points.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Two cricketers pulling a heavy roller with ropes. The <b>dot product</b> is about cooperation along the motion — how much of each pull actually drags the roller forward (use cos <i>θ</i>: full when aligned, nothing when sideways). The <b>cross product</b> is about twisting — if their pulls aren’t aligned, there’s a turning tendency, strongest when the pulls are at right angles (use sin <i>θ</i>: nothing when aligned, full when perpendicular). One product measures “togetherness,” the other measures “crossness.” That single contrast — cos versus sin, scalar versus vector — is the heart of this sub-topic.',
      },
      {
        t: 'p',
        html: 'A neat consequence worth carrying: for the same two vectors, <i>A⃗</i> · <i>B⃗</i> and |<i>A⃗</i> × <i>B⃗</i>| are like a seesaw. When one is at its maximum (parallel → dot maximal, cross zero), the other is at its minimum, and vice versa (perpendicular → dot zero, cross maximal). Together they fully capture the geometric relationship between two vectors.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The angle <i>θ</i> is always the angle between the vectors drawn <b>tail-to-tail</b> (0 ≤ <i>θ</i> ≤ 180°).<br>• The dot product is a <b>scalar</b> (write a number); the cross product is a <b>vector</b> (write components/direction). They are never interchangeable.<br>• The cross product is meaningfully defined in <b>three dimensions</b> (its result needs a perpendicular direction); in 2-D it’s treated as pointing out of/into the plane.<br>• <i>A⃗</i> · <i>B⃗</i> = 0 (with <i>A</i>, <i>B</i> ≠ 0) means <b>perpendicular</b>; <i>A⃗</i> × <i>B⃗</i> = 0⃗ (with <i>A</i>, <i>B</i> ≠ 0) means <b>parallel or antiparallel</b> — opposite conditions, easy to confuse.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Scalar (dot) product',
        main: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub> (scalar)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '• Commutative: <i>A⃗</i> · <i>B⃗</i> = <i>B⃗</i> · <i>A⃗</i>; distributive: <i>A⃗</i> · (<i>B⃗</i> + <i>C⃗</i>) = <i>A⃗</i> · <i>B⃗</i> + <i>A⃗</i> · <i>C⃗</i>.<br>• <i>î</i> · <i>î</i> = <i>ĵ</i> · <i>ĵ</i> = <i>k̂</i> · <i>k̂</i> = 1; <i>î</i> · <i>ĵ</i> = <i>ĵ</i> · <i>k̂</i> = <i>k̂</i> · <i>î</i> = 0; <i>A⃗</i> · <i>A⃗</i> = <i>A</i><sup>2</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Angle',
        main: 'cos <i>θ</i> = (<i>A⃗</i> · <i>B⃗</i>)/<i>AB</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Projection (scalar component) of A⃗ along B⃗',
        main: '(<i>A⃗</i> · <i>B⃗</i>)/<i>B</i> = <i>A</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vector (cross) product',
        main: '<i>A⃗</i> × <i>B⃗</i> = (<i>AB</i> sin <i>θ</i>) <i>n̂</i> (vector)<br>|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>',
        legend: [],
        note: 'with <i>n̂</i> perpendicular to the plane of <i>A⃗</i>, <i>B⃗</i> by the right-hand rule.',
      },
      {
        t: 'p',
        html: '• Anticommutative: <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; distributive over addition; <i>A⃗</i> × <i>A⃗</i> = 0⃗.<br>• <i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i> (cyclic); reverse order flips the sign.',
      },
      {
        t: 'formula',
        kicker: 'Determinant form',
        main: '<i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; <i>A</i><sub><i>x</i></sub> <i>A</i><sub><i>y</i></sub> <i>A</i><sub><i>z</i></sub> ; <i>B</i><sub><i>x</i></sub> <i>B</i><sub><i>y</i></sub> <i>B</i><sub><i>z</i></sub>|',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Geometric meaning',
        main: '|<i>A⃗</i> × <i>B⃗</i>| equals the area of the parallelogram with sides <i>A⃗</i>, <i>B⃗</i>; the triangle’s area is ½|<i>A⃗</i> × <i>B⃗</i>|.',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Scalar triple product',
        main: '<i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) = |<i>A</i><sub><i>x</i></sub> <i>A</i><sub><i>y</i></sub> <i>A</i><sub><i>z</i></sub> ; <i>B</i><sub><i>x</i></sub> <i>B</i><sub><i>y</i></sub> <i>B</i><sub><i>z</i></sub> ; <i>C</i><sub><i>x</i></sub> <i>C</i><sub><i>y</i></sub> <i>C</i><sub><i>z</i></sub>|<br>|<i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>)| = volume of the parallelepiped<br><i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) = 0 ⇔ <b>the three vectors are coplanar.</b>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vector triple product (BAC–CAB rule)',
        main: '<i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) = <i>B⃗</i>(<i>A⃗</i> · <i>C⃗</i>) − <i>C⃗</i>(<i>A⃗</i> · <i>B⃗</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Physical applications:</b> dot — work <i>W</i> = <i>F⃗</i> · <i>d⃗</i>, power <i>P</i> = <i>F⃗</i> · <i>v⃗</i>, flux Φ = <i>E⃗</i> · <i>A⃗</i>; cross — torque <i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i>, angular momentum <i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i>, magnetic force <i>F⃗</i> = <i>q</i> <i>v⃗</i> × <i>B⃗</i>.',
      },

      { t: 'part', title: 'CBSE board derivation — Component forms of the products' },
      {
        t: 'p',
        html: 'Both component formulas come from one idea: <b>multiply out using the distributive law, then use the known products of the unit vectors.</b>',
      },
      {
        t: 'p',
        html: '<b>Dot product in component form.</b> Write <i>A⃗</i> = <i>A</i><sub><i>x</i></sub><i>î</i> + <i>A</i><sub><i>y</i></sub><i>ĵ</i> + <i>A</i><sub><i>z</i></sub><i>k̂</i> and <i>B⃗</i> = <i>B</i><sub><i>x</i></sub><i>î</i> + <i>B</i><sub><i>y</i></sub><i>ĵ</i> + <i>B</i><sub><i>z</i></sub><i>k̂</i>. Distribute:<br><i>A⃗</i> · <i>B⃗</i> = (<i>A</i><sub><i>x</i></sub><i>î</i> + <i>A</i><sub><i>y</i></sub><i>ĵ</i> + <i>A</i><sub><i>z</i></sub><i>k̂</i>) · (<i>B</i><sub><i>x</i></sub><i>î</i> + <i>B</i><sub><i>y</i></sub><i>ĵ</i> + <i>B</i><sub><i>z</i></sub><i>k̂</i>).<br>Expanding gives nine terms. Now apply <i>î</i> · <i>î</i> = <i>ĵ</i> · <i>ĵ</i> = <i>k̂</i> · <i>k̂</i> = 1 (parallel unit vectors) and <i>î</i> · <i>ĵ</i> = <i>ĵ</i> · <i>k̂</i> = <i>k̂</i> · <i>î</i> = 0 (perpendicular ones). Every “mixed” term dies, and only the three “like” terms survive:<br><i>A⃗</i> · <i>B⃗</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>.',
      },
      {
        t: 'p',
        html: 'Why it works: perpendicular directions contribute nothing to “agreement,” so only matching components multiply through.',
      },
      {
        t: 'p',
        html: '<b>Cross product in component form.</b> Distribute the same way, but now use <i>î</i> × <i>î</i> = 0⃗ (parallel) and the cyclic rules <i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i> (with a sign flip when reversed). Collecting terms:<br><i>A⃗</i> × <i>B⃗</i> = (<i>A</i><sub><i>y</i></sub><i>B</i><sub><i>z</i></sub> − <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>y</i></sub>)<i>î</i> + (<i>A</i><sub><i>z</i></sub><i>B</i><sub><i>x</i></sub> − <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>z</i></sub>)<i>ĵ</i> + (<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>y</i></sub> − <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>x</i></sub>)<i>k̂</i>,<br>which is exactly the expansion of the determinant<br><i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; <i>A</i><sub><i>x</i></sub> <i>A</i><sub><i>y</i></sub> <i>A</i><sub><i>z</i></sub> ; <i>B</i><sub><i>x</i></sub> <i>B</i><sub><i>y</i></sub> <i>B</i><sub><i>z</i></sub>|.',
      },
      {
        t: 'p',
        html: 'Why it works: the “self” products vanish (a vector has no component perpendicular to itself), and the cyclic unit-vector products bookkeep exactly the alternating-sign pattern of a determinant.',
      },
      { t: 'fig', id: 'p11-03-fig-3.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A constant force <i>F⃗</i> = (3<i>î</i> + 4<i>ĵ</i>) N acts on a body that undergoes a displacement <i>d⃗</i> = (2<i>î</i> + 3<i>ĵ</i>) m. Find the work done.',
        steps: [
          '<b>Given:</b> Work is the dot product <i>W</i> = <i>F⃗</i> · <i>d⃗</i>.',
          '<b>Solution:</b><br><i>W</i> = <i>F⃗</i> · <i>d⃗</i> = (3)(2) + (4)(3) = 6 + 12 = 18 J.',
          'Work is a scalar (joules), and the dot product is what automatically picks out the part of the force that acts along the displacement — no need to find the angle separately.',
        ],
        ans: '<i>W</i> = 18 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A force of 5 N is applied at the end of a spanner of length 0.2 m, at 30° to the handle. The magnitude of the torque about the bolt is:<br>(A) 0.5 N·m (B) 0.87 N·m (C) 1.0 N·m (D) 0 N·m',
        steps: [
          '<b>The trap:</b> torque is a <b>cross</b> product, so it uses sin <i>θ</i> — but under pressure students reach for cos <i>θ</i> (the work/dot habit), giving the wrong 0.87.',
          '<b>Fast solution:</b> <i>τ</i> = <i>rF</i> sin <i>θ</i> = (0.2)(5) sin 30° = (0.2)(5)(0.5) = 0.5 N·m.',
          'Speed cue: turning effects (torque, area, angular momentum, magnetic force) are cross products → use sin; “along” effects (work, power, flux) are dot products → use cos. Option (B) is the cos 30° trap; only the sin form is physical for torque.',
        ],
        ans: '(A) 0.5 N·m',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For <i>A⃗</i> = 2<i>î</i> + 2<i>ĵ</i> + <i>k̂</i> and <i>B⃗</i> = 6<i>î</i> − 3<i>ĵ</i> + 2<i>k̂</i>, find (a) the angle between them, (b) the projection of <i>A⃗</i> on <i>B⃗</i>, and (c) the magnitude of the component of <i>A⃗</i> perpendicular to <i>B⃗</i>.',
        steps: [
          '<b>Why it’s multi-concept:</b> it uses the dot product (angle, projection) and the cross product (perpendicular component) on the same pair of vectors.',
          '<b>Solution:</b><br><i>A⃗</i> · <i>B⃗</i> = (2)(6) + (2)(−3) + (1)(2) = 12 − 6 + 2 = 8.<br>|<i>A⃗</i>| = √(4 + 4 + 1) = 3, |<i>B⃗</i>| = √(36 + 9 + 4) = 7.',
          '(a) cos <i>θ</i> = 8/((3)(7)) = 8/21 ≈ 0.381 ⇒ <i>θ</i> ≈ 67.6°.',
          '(b) Projection of <i>A⃗</i> on <i>B⃗</i> = (<i>A⃗</i> · <i>B⃗</i>)/|<i>B⃗</i>| = 8/7 ≈ 1.14 units.',
          '(c) Perpendicular component magnitude = <i>A</i> sin <i>θ</i> = |<i>A⃗</i> × <i>B⃗</i>|/|<i>B⃗</i>|. Compute the cross product:<br><i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; 2 2 1 ; 6 −3 2| = <i>î</i>(4 + 3) − <i>ĵ</i>(4 − 6) + <i>k̂</i>(−6 − 12) = 7<i>î</i> + 2<i>ĵ</i> − 18<i>k̂</i>.<br>|<i>A⃗</i> × <i>B⃗</i>| = √(49 + 4 + 324) = √377 ≈ 19.4, <i>A</i> sin <i>θ</i> = 19.4/7 ≈ 2.77 units.',
          'Cross-check: √((proj)<sup>2</sup> + (perp)<sup>2</sup>) = √(1.14<sup>2</sup> + 2.77<sup>2</sup>) = √(1.30 + 7.67) = √8.97 ≈ 3 = |<i>A⃗</i>|. ✓ — the along and across parts reassemble the original magnitude.',
        ],
        ans: '<i>θ</i> ≈ 67.6°, proj ≈ 1.14, perp comp ≈ 2.77',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Given <i>A⃗</i> = <i>î</i> + 2<i>ĵ</i> − <i>k̂</i>, <i>B⃗</i> = 2<i>î</i> − <i>ĵ</i> + <i>k̂</i>, <i>C⃗</i> = 3<i>î</i> + <i>ĵ</i> + 2<i>k̂</i>, find (a) the scalar triple product <i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) and state the volume of the parallelepiped and whether the three are coplanar, and (b) the vector triple product <i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) using the BAC–CAB rule.',
        steps: [
          '<b>Solution:</b> (a) The scalar triple product is the determinant of the components:<br><i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) = |1 2 −1 ; 2 −1 1 ; 3 1 2|.',
          'Expand along the first row:<br>= 1[(−1)(2) − (1)(1)] − 2[(2)(2) − (1)(3)] + (−1)[(2)(1) − (−1)(3)]<br>= 1(−2 − 1) − 2(4 − 3) + (−1)(2 + 3) = −3 − 2 − 5 = −10.<br>The volume of the parallelepiped is |−10| = 10 cubic units. Since the scalar triple product is <b>non-zero</b>, the three vectors are <b>not coplanar</b>.',
          '(b) Apply <i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) = <i>B⃗</i>(<i>A⃗</i> · <i>C⃗</i>) − <i>C⃗</i>(<i>A⃗</i> · <i>B⃗</i>).<br><i>A⃗</i> · <i>C⃗</i> = (1)(3) + (2)(1) + (−1)(2) = 3 + 2 − 2 = 3,<br><i>A⃗</i> · <i>B⃗</i> = (1)(2) + (2)(−1) + (−1)(1) = 2 − 2 − 1 = −1.<br><i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) = 3<i>B⃗</i> − (−1)<i>C⃗</i> = 3<i>B⃗</i> + <i>C⃗</i> = 3(2<i>î</i> − <i>ĵ</i> + <i>k̂</i>) + (3<i>î</i> + <i>ĵ</i> + 2<i>k̂</i>).<br>= (6<i>î</i> − 3<i>ĵ</i> + 3<i>k̂</i>) + (3<i>î</i> + <i>ĵ</i> + 2<i>k̂</i>) = 9<i>î</i> − 2<i>ĵ</i> + 5<i>k̂</i>.',
          'The BAC–CAB rule sidesteps computing <i>B⃗</i> × <i>C⃗</i> first — recognising that the triple product collapses to a combination of <i>B⃗</i> and <i>C⃗</i> is the time-saving insight.',
        ],
        ans: '<i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) = −10 (volume 10, not coplanar), <i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) = 9<i>î</i> − 2<i>ĵ</i> + 5<i>k̂</i>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the work done by a force <i>F⃗</i> = (5<i>î</i> + 2<i>ĵ</i>) N in producing a displacement <i>d⃗</i> = (3<i>î</i> + 4<i>ĵ</i>) m.',
            a: '23 J',
          },
          {
            q: '[NEET] Two vectors have magnitudes 4 and 5 units with 30° between them. Find the magnitude of their cross product.',
            a: '10 units',
          },
          {
            q: '[JEE Main] Find the angle between <i>A⃗</i> = <i>î</i> + 2<i>ĵ</i> and <i>B⃗</i> = 2<i>î</i> + <i>ĵ</i>.',
            a: 'cos <i>θ</i> = 4/5, <i>θ</i> ≈ 36.9°',
          },
          {
            q: '[JEE Main] Find the projection of <i>A⃗</i> = 2<i>î</i> + 3<i>ĵ</i> + <i>k̂</i> on <i>B⃗</i> = <i>î</i> + <i>ĵ</i> + <i>k̂</i>.',
            a: '6/√3 = 2√3 ≈ 3.46',
          },
          {
            q: '[JEE Advanced] Determine whether <i>A⃗</i> = <i>î</i> + <i>ĵ</i> + <i>k̂</i>, <i>B⃗</i> = <i>î</i> + 2<i>ĵ</i> + 3<i>k̂</i>, <i>C⃗</i> = <i>î</i> + 4<i>ĵ</i> + 9<i>k̂</i> are coplanar, using the scalar triple product.',
            a: 'scalar triple product = 2 ≠ 0, so <b>not</b> coplanar (volume 2).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The scalar product <i>A⃗</i> · <i>B⃗</i> is maximum when the angle between the vectors is:',
        opts: [
          { label: '0°', nudge: null },
          { label: '90°', nudge: '(B) 90° makes the dot product zero.' },
          {
            label: '180°',
            nudge: '(C) 180° gives the most negative value (−<i>AB</i>), a minimum, not maximum. Students sometimes confuse “maximum magnitude” with the antiparallel case (C) — but that’s the minimum (most negative).',
          },
          { label: '45°', nudge: '(D) 45° gives an intermediate value.' },
        ],
        correct: 0,
        solution: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> is largest when cos <i>θ</i> = 1, i.e. <i>θ</i> = 0° (parallel).',
      },
      {
        t: 'mcq',
        q: 'Which of the following physical quantities is defined as a cross product?',
        opts: [
          { label: 'work', nudge: '(A) work <i>F⃗</i> · <i>d⃗</i> and (C) power <i>F⃗</i> · <i>v⃗</i> are dot products (scalars).' },
          { label: 'torque', nudge: null },
          { label: 'power', nudge: '(A) work <i>F⃗</i> · <i>d⃗</i> and (C) power <i>F⃗</i> · <i>v⃗</i> are dot products (scalars).' },
          { label: 'kinetic energy', nudge: '(D) kinetic energy is a scalar not formed from any vector product.' },
        ],
        correct: 1,
        solution: 'Torque <i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i> is a vector (cross) product. The cross-product giveaway is that the result has a direction (torque points along the axis of rotation).',
      },
      {
        t: 'mcq',
        q: 'For two non-zero vectors, <i>A⃗</i> × <i>B⃗</i> = 0⃗. The vectors must be:',
        opts: [
          { label: 'perpendicular', nudge: '(A) perpendicular is the condition for the dot product to vanish — the exact opposite case, and the most common mix-up.' },
          { label: 'parallel or antiparallel', nudge: null },
          { label: 'at 45°', nudge: '(C) and (D) place no such constraint on the cross product.' },
          { label: 'equal in magnitude', nudge: '(C) and (D) place no such constraint on the cross product.' },
        ],
        correct: 1,
        solution: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i> = 0 with <i>A</i>, <i>B</i> ≠ 0 forces sin <i>θ</i> = 0, i.e. <i>θ</i> = 0° or 180°.',
      },
      {
        t: 'mcq',
        q: 'If the scalar triple product <i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) = 0 for three non-zero vectors, then the vectors are:',
        opts: [
          { label: 'mutually perpendicular', nudge: '(A) mutually perpendicular vectors give a non-zero volume (a rectangular box).' },
          { label: 'coplanar', nudge: null },
          {
            label: 'identical',
            nudge: '(C) identical and (D) all-parallel are special sub-cases that happen to be coplanar, but they are not what “= 0” implies in general; the precise, complete condition is coplanarity.',
          },
          {
            label: 'all parallel to one axis',
            nudge: '(C) identical and (D) all-parallel are special sub-cases that happen to be coplanar, but they are not what “= 0” implies in general; the precise, complete condition is coplanarity.',
          },
        ],
        correct: 1,
        solution: 'The scalar triple product’s magnitude is the volume of the parallelepiped they span; zero volume means they lie in a single plane — they are coplanar.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using cos where sin belongs (and vice versa).</b> Dot products take cos <i>θ</i>; cross products take sin <i>θ</i>. Reaching for the wrong one is the single most common slip — especially writing torque with cos.',
          '<b>Treating the dot as a vector or the cross as a scalar.</b> <i>A⃗</i> · <i>B⃗</i> is a number; <i>A⃗</i> × <i>B⃗</i> is a vector with components and a direction. Mislabelling loses marks even when the arithmetic is right.',
          '<b>Forgetting anticommutativity of the cross product.</b> <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i> — order matters, and the sign carries the physical direction (e.g. which way a torque turns).',
          '<b>Sign error in the 3 × 3 determinant.</b> The middle (<i>ĵ</i>) term carries a <b>minus</b> sign in the cofactor expansion; dropping it is a frequent error.',
          '<b>Confusing the two “zero” conditions.</b> <i>A⃗</i> · <i>B⃗</i> = 0 ⇒ perpendicular; <i>A⃗</i> × <i>B⃗</i> = 0⃗ ⇒ parallel or antiparallel. They are opposites.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Decide which product you need from the physics, not the algebra: “how much <b>along</b>” (work, power, flux, projection) → <b>dot, use</b> cos; “how much <b>across</b> / turning / area” (torque, angular momentum, magnetic force) → <b>cross, use</b> sin. Two instant checks: the <b>sign</b> of <i>A⃗</i> · <i>B⃗</i> tells you whether the angle is acute (+) or obtuse (−); and for three vectors, a zero scalar triple product is the fastest possible <b>coplanarity test</b> — no need to draw anything.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Dot',
            note: '<i>A⃗</i> · <i>B⃗</i> = <i>AB</i> cos <i>θ</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub> (scalar); proj of <i>A⃗</i> on <i>B⃗</i> = <i>A⃗</i> · <i>B⃗</i>/<i>B</i>; ⊥ ⇒ 0; max at <i>θ</i> = 0°.',
          },
          {
            f: 'Cross',
            note: '<i>A⃗</i> × <i>B⃗</i> = (<i>AB</i> sin <i>θ</i>) <i>n̂</i> (vector, right-hand rule); |<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>; determinant form; <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; parallel or antiparallel (<i>θ</i> = 0° or 180°) ⇒ 0⃗; = parallelogram area (½ for a triangle).',
          },
          { f: 'Unit vectors', note: '<i>î</i> · <i>î</i> = 1, <i>î</i> · <i>ĵ</i> = 0; <i>î</i> × <i>ĵ</i> = <i>k̂</i> (cyclic), <i>î</i> × <i>î</i> = 0⃗.' },
          { f: 'Scalar triple', note: '|<i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>)| = volume of the parallelepiped; = 0 ⇒ coplanar.' },
          { f: 'Vector triple', note: '<i>A⃗</i> × (<i>B⃗</i> × <i>C⃗</i>) = <i>B⃗</i>(<i>A⃗</i> · <i>C⃗</i>) − <i>C⃗</i>(<i>A⃗</i> · <i>B⃗</i>) (<b>BAC–CAB</b>).' },
          {
            f: 'Applications',
            note: '<i>W</i> = <i>F⃗</i> · <i>d⃗</i>, <i>P</i> = <i>F⃗</i> · <i>v⃗</i>, Φ = <i>E⃗</i> · <i>A⃗</i> (dot); <i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i>, <i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i>, <i>F⃗</i> = <i>q</i><i>v⃗</i> × <i>B⃗</i> (cross).',
          },
        ],
        aids: ['Mnemonic: <b>“Dot agrees (cos); cross turns (sin).”</b>'],
      },
    ],
  },
  // ───────────────────────── Topic 03 · pp. 149–156 ─────────────────────────
  {
    n: '03',
    title: 'Motion in a Plane — Two-Dimensional Kinematics',
    kalam: 'Resolve any 2-D motion into its x and y stories, solve each as an ordinary 1-D problem, then recombine the answers with vector addition.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the general framework that projectile and circular motion are special cases of. CBSE Boards ask the vector form of the equations of motion and position/velocity in component form (2–3 marks). JEE Main carries questions on 2-D constant-acceleration motion, velocity/position vectors, and trajectory shape. NEET tests the independence-of-motions concept and quick component-magnitude MCQs. JEE Advanced uses it for radius-of-curvature and time-of-closest-approach problems.',
      },
      {
        t: 'p',
        html: 'In a straight line, a single number with a sign told us everything: position <i>x</i>, velocity <i>v</i>, acceleration <i>a</i>. But the moment a body can move sideways as well as forward — a footballer curling across the pitch, a boat angling across a river, a charged particle drifting in a field — one number is no longer enough. We need <b>vectors</b>: a position vector <i>r⃗</i> that points from the origin to the particle, a velocity vector <i>v⃗</i> tangent to its path, and an acceleration vector <i>a⃗</i> that can point in any direction at all.<br><br>Here is the single most powerful idea of the whole chapter, and it’s deceptively simple: <b>motion in a plane is just two independent one-dimensional motions happening at once.</b> The <i>x</i>-part of the motion evolves entirely on its own, governed only by the <i>x</i>-components of velocity and acceleration; the <i>y</i>-part does likewise. They never interfere. They share exactly one thing — the clock, <i>t</i>. This is the <b>principle of independence of perpendicular motions</b>, and it’s what lets us take every tool from straight-line kinematics and apply it twice, once per axis.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a carrom striker sliding across the board while you separately nudge it sideways with a steady puff of air. Its forward glide and its sideways drift don’t argue with each other — the forward distance after two seconds is whatever the forward motion alone would give, and the sideways distance is whatever the sideways push alone would give. The actual path you see is just these two simple motions superposed. Resolve any 2-D motion into its <i>x</i> and <i>y</i> stories, solve each as an ordinary 1-D problem, then recombine the answers with vector addition. That recipe never fails.',
      },
      {
        t: 'p',
        html: 'Because vectors carry direction, the familiar equations of motion get a vector upgrade. For <b>constant acceleration in a plane</b>,<br><i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i>, <i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup>.<br>These look identical to the 1-D versions — because they are, just promoted to vectors. Split each into components and you get two independent sets of scalar equations. Projectile motion is simply the special case where <i>a⃗</i> = −<i>gĵ</i> (gravity, vertical only); uniform circular motion is the case where <i>a⃗</i> always points to a centre (not a constant-<i>a⃗</i> case: <i>a⃗</i> keeps turning, so the constant-<i>a⃗</i> equations do not apply). Master the general framework and the special cases become effortless.<br><br>One subtlety worth flagging early: in two dimensions, <b>speed and the magnitude of velocity are equal, but average speed and the magnitude of average velocity are not</b> — because average velocity uses the straight-line displacement while average speed uses the actual (possibly curved) path length, exactly as in Chapter 2.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The vector equations of motion above require <b>constant acceleration</b>. If <i>a⃗</i> varies, return to <i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> and <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i> and integrate, axis by axis. (Resolving into separate <i>x</i>- and <i>y</i>-equations always works; the two motions stay truly independent as long as <i>a</i><sub><i>x</i></sub> does not depend on the <i>y</i>-motion and vice versa.)<br>• Components are taken along a chosen set of perpendicular axes; the vector is independent of that choice, but pick axes that simplify the problem (often along and across the acceleration).<br>• “Independence” means the <i>x</i> and <i>y</i> motions don’t influence each other’s components — they are still tied together through the common time <i>t</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Position, displacement, velocity, acceleration in the plane',
        main: '<i>r⃗</i> = <i>xî</i> + <i>yĵ</i><br>Δ<i>r⃗</i> = Δ<i>x</i> <i>î</i> + Δ<i>y</i> <i>ĵ</i><br><i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> = <i>v</i><sub><i>x</i></sub><i>î</i> + <i>v</i><sub><i>y</i></sub><i>ĵ</i><br><i>a⃗</i> = d<i>v⃗</i>/d<i>t</i> = <i>a</i><sub><i>x</i></sub><i>î</i> + <i>a</i><sub><i>y</i></sub><i>ĵ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Magnitudes and directions',
        main: '|<i>v⃗</i>| = √(<i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup>), tan <i>θ</i><sub><i>v</i></sub> = <i>v</i><sub><i>y</i></sub>/<i>v</i><sub><i>x</i></sub><br>|<i>r⃗</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), tan <i>θ</i><sub><i>r</i></sub> = <i>y</i>/<i>x</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Average vs instantaneous',
        main: '<i>v⃗</i><sub>avg</sub> = Δ<i>r⃗</i>/Δ<i>t</i><br><i>a⃗</i><sub>avg</sub> = Δ<i>v⃗</i>/Δ<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equations of motion (constant a⃗) in vector and component form',
        main: '<i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i> ⇒ <i>v</i><sub><i>x</i></sub> = <i>v</i><sub>0<i>x</i></sub> + <i>a</i><sub><i>x</i></sub><i>t</i>, <i>v</i><sub><i>y</i></sub> = <i>v</i><sub>0<i>y</i></sub> + <i>a</i><sub><i>y</i></sub><i>t</i><br><i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup> ⇒ <i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0<i>x</i></sub><i>t</i> + ½<i>a</i><sub><i>x</i></sub><i>t</i><sup>2</sup>, <i>y</i> = <i>y</i><sub>0</sub> + <i>v</i><sub>0<i>y</i></sub><i>t</i> + ½<i>a</i><sub><i>y</i></sub><i>t</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Special cases:</b> projectile (<i>a</i><sub><i>x</i></sub> = 0, <i>a</i><sub><i>y</i></sub> = −<i>g</i>); uniform circular motion (<i>a⃗</i> of constant magnitude <i>v</i><sup>2</sup>/<i>r</i>, always toward the centre) (not a constant-<i>a⃗</i> case: <i>a⃗</i> keeps turning, so the constant-<i>a⃗</i> equations do not apply). All quantities SI: m, m/s, m/s<sup>2</sup>.',
      },

      { t: 'part', title: 'CBSE board derivation — Equations of motion in a plane' },
      {
        t: 'p',
        html: 'Start from the definition of acceleration as a vector, assumed <b>constant</b>: <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i>. Integrating from the initial velocity <i>v⃗</i><sub>0</sub> at <i>t</i> = 0 to <i>v⃗</i> at time <i>t</i>:<br>∫<sub><i>v⃗</i>₀</sub><sup><i>v⃗</i></sup> d<i>v⃗</i> = ∫<sub>0</sub><sup><i>t</i></sup> <i>a⃗</i> d<i>t</i> ⇒ <i>v⃗</i> − <i>v⃗</i><sub>0</sub> = <i>a⃗t</i> ⇒ <i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i>.',
      },
      {
        t: 'p',
        html: 'Next use <i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> and substitute the expression just found:<br>∫<sub><i>r⃗</i>₀</sub><sup><i>r⃗</i></sup> d<i>r⃗</i> = ∫<sub>0</sub><sup><i>t</i></sup> <i>v⃗</i> d<i>t</i> = ∫<sub>0</sub><sup><i>t</i></sup> (<i>v⃗</i><sub>0</sub> + <i>a⃗t</i>) d<i>t</i> = <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup>,<br><i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Why this proves independence.</b> A vector equation is really two scalar equations, one per axis. Reading off the <i>î</i> and <i>ĵ</i> parts:<br><i>v</i><sub><i>x</i></sub> = <i>v</i><sub>0<i>x</i></sub> + <i>a</i><sub><i>x</i></sub><i>t</i>, <i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0<i>x</i></sub><i>t</i> + ½<i>a</i><sub><i>x</i></sub><i>t</i><sup>2</sup>,<br><i>v</i><sub><i>y</i></sub> = <i>v</i><sub>0<i>y</i></sub> + <i>a</i><sub><i>y</i></sub><i>t</i>, <i>y</i> = <i>y</i><sub>0</sub> + <i>v</i><sub>0<i>y</i></sub><i>t</i> + ½<i>a</i><sub><i>y</i></sub><i>t</i><sup>2</sup>.<br>Notice the <i>x</i>-equations contain <b>only</b> <i>x</i>-quantities and the <i>y</i>-equations contain <b>only</b> <i>y</i>-quantities. Neither set mentions the other. That is the mathematical statement of the <b>independence of perpendicular motions</b>: each axis runs its own 1-D show, coupled to the other solely through the shared time <i>t</i>.',
      },
      { t: 'fig', id: 'p11-03-fig-3.3' },
      {
        t: 'p',
        html: '<b>Eliminating time on each axis</b> also lets you reuse <i>v</i><sub><i>x</i></sub><sup>2</sup> = <i>v</i><sub>0<i>x</i></sub><sup>2</sup> + 2<i>a</i><sub><i>x</i></sub> Δ<i>x</i> and <i>v</i><sub><i>y</i></sub><sup>2</sup> = <i>v</i><sub>0<i>y</i></sub><sup>2</sup> + 2<i>a</i><sub><i>y</i></sub> Δ<i>y</i> when time isn’t wanted — again, one independent relation per direction.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A particle starts from the origin with velocity <i>v⃗</i><sub>0</sub> = 4<i>î</i> m/s and moves with constant acceleration <i>a⃗</i> = 3<i>ĵ</i> m/s<sup>2</sup>. Find its velocity and position after 2 s, and the magnitude of each.',
        steps: [
          '<b>Given:</b> <i>r⃗</i><sub>0</sub> = 0⃗, <i>v⃗</i><sub>0</sub> = 4<i>î</i>, <i>a⃗</i> = 3<i>ĵ</i>, <i>t</i> = 2 s.',
          '<b>Solution:</b><br><i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i> = 4<i>î</i> + (3<i>ĵ</i>)(2) = 4<i>î</i> + 6<i>ĵ</i> m/s, |<i>v⃗</i>| = √(4<sup>2</sup> + 6<sup>2</sup>) = √52 ≈ 7.2 m/s.<br><i>r⃗</i> = <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup> = (4)(2)<i>î</i> + ½(3)(2)<sup>2</sup><i>ĵ</i> = 8<i>î</i> + 6<i>ĵ</i> m, |<i>r⃗</i>| = √(8<sup>2</sup> + 6<sup>2</sup>) = 10 m.',
          'The <i>x</i>-motion (uniform, 4 m/s) and the <i>y</i>-motion (accelerating from rest) were solved separately and then combined.',
        ],
        ans: '<i>v⃗</i> = 4<i>î</i> + 6<i>ĵ</i> m/s (≈ 7.2 m/s), <i>r⃗</i> = 8<i>î</i> + 6<i>ĵ</i> m (10 m)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At an instant a particle’s velocity is <i>v⃗</i> = 6<i>î</i> + 8<i>ĵ</i> m/s. Its speed is:<br>(A) 10 m/s (B) 14 m/s (C) 2 m/s (D) 48 m/s',
        steps: [
          '<b>The trap:</b> adding the components (6 + 8 = 14) — but perpendicular components combine by Pythagoras, not by simple addition.',
          '<b>Fast solution:</b> |<i>v⃗</i>| = √(6<sup>2</sup> + 8<sup>2</sup>) = √(36 + 64) = √100 = 10 m/s.',
          'Speed cue: spot the 6–8–10 (and 3–4–5, 5–12–13) right-triangle families instantly. Option (B) is the add-the-components trap; (C) subtracts them; (D) multiplies — all signs of forgetting that the components are perpendicular.',
        ],
        ans: '(A) 10 m/s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle is launched with velocity <i>v⃗</i><sub>0</sub> = 2<i>î</i> + 4<i>ĵ</i> m/s and experiences a constant acceleration <i>a⃗</i> = −2<i>ĵ</i> m/s<sup>2</sup>. Find (a) the time at which its velocity is directed purely along the <i>x</i>-axis, and (b) its speed at that instant.',
        steps: [
          '<b>Why it’s multi-concept:</b> it requires tracking both velocity components and recognising the geometric condition “velocity along <i>x</i>” as <i>v</i><sub><i>y</i></sub> = 0.',
          '<b>Solution:</b><br><i>v</i><sub><i>x</i></sub> = 2 m/s (constant), <i>v</i><sub><i>y</i></sub> = 4 + (−2)<i>t</i> = 4 − 2<i>t</i>.',
          '(a) Velocity is along the <i>x</i>-axis when <i>v</i><sub><i>y</i></sub> = 0: 4 − 2<i>t</i> = 0 ⇒ <i>t</i> = 2 s.',
          '(b) At <i>t</i> = 2 s: <i>v</i><sub><i>x</i></sub> = 2, <i>v</i><sub><i>y</i></sub> = 0, so the speed is |<i>v⃗</i>| = 2 m/s.',
          'This is also the instant of <b>minimum speed</b>, since the speed √(2<sup>2</sup> + (4 − 2<i>t</i>)<sup>2</sup>) is smallest exactly when the <i>y</i>-component vanishes — the same logic as a projectile being slowest (horizontal) at the top of its arc.',
        ],
        ans: '<i>t</i> = 2 s, speed = 2 m/s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle is projected with velocity <i>v⃗</i><sub>0</sub> = 10<i>î</i> m/s and moves under constant acceleration <i>a⃗</i> = −10<i>ĵ</i> m/s<sup>2</sup> (a horizontal launch under gravity). Find the radius of curvature of its path at <i>t</i> = 1 s (<i>g</i> = 10 m/s<sup>2</sup>).',
        steps: [
          '<b>Reasoning:</b> Radius of curvature relates to the component of acceleration <b>perpendicular</b> to the velocity: <i>R</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>⊥</sub>. So we need the speed and the perpendicular slice of <i>a⃗</i> at that instant.',
          '<b>Solution:</b> At <i>t</i> = 1 s:<br><i>v</i><sub><i>x</i></sub> = 10 m/s, <i>v</i><sub><i>y</i></sub> = 0 + (−10)(1) = −10 m/s, |<i>v⃗</i>| = √(10<sup>2</sup> + 10<sup>2</sup>) = 10√2 m/s.',
          'The velocity points at 45° below the horizontal. The acceleration <i>a⃗</i> = −10<i>ĵ</i> (straight down) makes 45° with this velocity, so its perpendicular component is<br><i>a</i><sub>⊥</sub> = <i>a</i> sin 45° = 10 × 1/√2 = 10/√2 = 5√2 m/s<sup>2</sup>.',
          'Therefore<br><i>R</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>⊥</sub> = (10√2)<sup>2</sup>/(5√2) = 200/(5√2) = 40/√2 = 20√2 ≈ 28.3 m.',
          'The trick is splitting <i>a⃗</i> into a part along the velocity (which changes speed) and a part across it (which curves the path); only the across-part sets the radius of curvature.',
        ],
        ans: '<i>R</i> = 20√2 ≈ 28.3 m',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A particle starts from the origin with <i>v⃗</i><sub>0</sub> = 5<i>î</i> m/s and constant acceleration <i>a⃗</i> = 2<i>ĵ</i> m/s<sup>2</sup>. Find its position vector after 3 s.',
            a: '<i>r⃗</i> = 15<i>î</i> + 9<i>ĵ</i> m',
          },
          {
            q: '[NEET] A particle’s velocity is <i>v⃗</i> = 9<i>î</i> + 12<i>ĵ</i> m/s. Find its speed.',
            a: '15 m/s',
          },
          {
            q: '[JEE Main] A body has initial velocity <i>v⃗</i><sub>0</sub> = 3<i>î</i> + 4<i>ĵ</i> m/s and acceleration <i>a⃗</i> = 0.4<i>î</i> + 0.3<i>ĵ</i> m/s<sup>2</sup>. Find its velocity after 10 s and its magnitude.',
            a: '<i>v⃗</i> = 7<i>î</i> + 7<i>ĵ</i> m/s, |<i>v⃗</i>| = 7√2 ≈ 9.9 m/s',
          },
          {
            q: '[JEE Main] A particle moves so that <i>x</i> = 3<i>t</i> and <i>y</i> = 4<i>t</i> − 5<i>t</i><sup>2</sup> (SI units). Find its velocity vector at <i>t</i> = 1 s and the acceleration.',
            a: '<i>v⃗</i> = 3<i>î</i> − 6<i>ĵ</i> m/s, <i>a⃗</i> = −10<i>ĵ</i> m/s<sup>2</sup>',
          },
          {
            q: '[JEE Advanced] A particle is projected horizontally at 20 m/s under gravity (<i>g</i> = 10 m/s<sup>2</sup>). Find the radius of curvature of its path at the instant of projection (<i>t</i> = 0).',
            a: 'at <i>t</i> = 0 velocity is horizontal (20 m/s) and <i>g</i> is fully perpendicular, so <i>R</i> = <i>v</i><sup>2</sup>/<i>g</i> = 400/10 = 40 m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For a particle moving in a plane with constant acceleration, the horizontal and vertical components of its motion are:',
        opts: [
          { label: 'always equal', nudge: '(A) and (C) impose relationships that don’t generally hold.' },
          { label: 'independent of each other', nudge: null },
          { label: 'always opposite', nudge: '(A) and (C) impose relationships that don’t generally hold.' },
          {
            label: 'coupled through acceleration',
            nudge: '(D) is the common misconception: the two motions are not coupled through acceleration; the <i>x</i> and <i>y</i> accelerations act separately on their own components.',
          },
        ],
        correct: 1,
        solution: 'The component equations contain only their own axis’s quantities, so each axis evolves independently — linked only by the shared time.',
      },
      {
        t: 'mcq',
        q: 'A particle has velocity components <i>v</i><sub><i>x</i></sub> = 3 m/s and <i>v</i><sub><i>y</i></sub> = 4 m/s. Its speed is:',
        opts: [
          { label: '7 m/s', nudge: '(A) adds the components, (B) subtracts them, (D) multiplies — all ignore that perpendicular components combine by Pythagoras, not arithmetic.' },
          { label: '1 m/s', nudge: '(A) adds the components, (B) subtracts them, (D) multiplies — all ignore that perpendicular components combine by Pythagoras, not arithmetic.' },
          { label: '5 m/s', nudge: null },
          { label: '12 m/s', nudge: '(A) adds the components, (B) subtracts them, (D) multiplies — all ignore that perpendicular components combine by Pythagoras, not arithmetic.' },
        ],
        correct: 2,
        solution: '|<i>v⃗</i>| = √(3<sup>2</sup> + 4<sup>2</sup>) = 5 m/s.',
      },
      {
        t: 'mcq',
        q: 'The position of a particle is <i>r⃗</i> = (3<i>t</i>)<i>î</i> + (2<i>t</i><sup>2</sup>)<i>ĵ</i> (SI units). Its acceleration is:',
        opts: [
          { label: '3<i>î</i> m/s<sup>2</sup>', nudge: '(A) is the (constant) velocity’s <i>x</i>-part, not acceleration.' },
          { label: '4<i>ĵ</i> m/s<sup>2</sup>', nudge: null },
          { label: '2<i>ĵ</i> m/s<sup>2</sup>', nudge: '(C) forgets the factor of 2 from differentiating 2<i>t</i><sup>2</sup> twice.' },
          { label: '0', nudge: '(D) wrongly assumes constant velocity — the <i>y</i>-motion is accelerated.' },
        ],
        correct: 1,
        solution: '<i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> = 3<i>î</i> + 4<i>tĵ</i>, so <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i> = 4<i>ĵ</i> m/s<sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'A particle moving in a plane with constant acceleration that is <b>not</b> parallel to its initial velocity follows a path that is:',
        opts: [
          { label: 'a straight line', nudge: '(A) a straight line results only when <i>a⃗</i> is parallel (or antiparallel) to <i>v⃗</i><sub>0</sub>.' },
          { label: 'a circle', nudge: '(B) a circle needs an acceleration that constantly changes direction toward a centre, not a constant one.' },
          { label: 'a parabola', nudge: null },
          { label: 'a spiral', nudge: '(D) a spiral needs an acceleration whose direction keeps turning and a radius that keeps changing — a constant acceleration can only give a parabola (or a straight line).' },
        ],
        correct: 2,
        solution: 'Constant acceleration with a velocity component across it produces a parabolic path (projectile motion is the everyday example).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding velocity components arithmetically.</b> <i>v</i><sub><i>x</i></sub> and <i>v</i><sub><i>y</i></sub> are perpendicular; the speed is √(<i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup>), never <i>v</i><sub><i>x</i></sub> + <i>v</i><sub><i>y</i></sub>.',
          '<b>Coupling the two axes.</b> A change in the <i>x</i>-motion does not alter the <i>y</i>-motion. Solve each axis as a separate 1-D problem; the only shared variable is time.',
          '<b>Forgetting the equations of motion are now vectors.</b> <i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i> must be applied component-by-component when <i>v⃗</i><sub>0</sub> and <i>a⃗</i> point in different directions.',
          '<b>Confusing average speed with the magnitude of average velocity.</b> In 2-D these differ whenever the path is curved — average velocity uses straight-line displacement, average speed uses path length.',
          '<b>Differentiation slips on position functions.</b> When given <i>x</i>(<i>t</i>) and <i>y</i>(<i>t</i>), differentiate each once for velocity and twice for acceleration; don’t forget the chain-rule factors.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Treat every plane-motion problem as <b>two 1-D problems sharing a clock.</b> Resolve along convenient perpendicular axes (often along and across the acceleration), write the four scalar equations, solve each axis with ordinary kinematics, then recombine with vector addition at the end. Recognising a problem as “constant acceleration in a plane” instantly unlocks <i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i> and <i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup> — the same equations you already trust from straight-line motion.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Vectors',
            note: '<i>r⃗</i> = <i>xî</i> + <i>yĵ</i>, <i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> = <i>v</i><sub><i>x</i></sub><i>î</i> + <i>v</i><sub><i>y</i></sub><i>ĵ</i>, <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i> = <i>a</i><sub><i>x</i></sub><i>î</i> + <i>a</i><sub><i>y</i></sub><i>ĵ</i>.',
          },
          { f: 'Magnitude/direction', note: '|<i>v⃗</i>| = √(<i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup>), tan <i>θ</i> = <i>v</i><sub><i>y</i></sub>/<i>v</i><sub><i>x</i></sub>.' },
          {
            f: 'Constant-<i>a⃗</i> equations',
            note: '<i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i>; <i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup> (apply per component).',
          },
          { f: 'Independence', note: '<i>x</i>-motion uses only <i>x</i>-quantities, <i>y</i>-motion only <i>y</i>-quantities; shared variable = time.' },
          {
            f: 'Special cases',
            note: 'projectile <i>a</i><sub><i>x</i></sub> = 0, <i>a</i><sub><i>y</i></sub> = −<i>g</i>; uniform circular motion <i>a⃗</i> toward centre, magnitude <i>v</i><sup>2</sup>/<i>r</i> (not a constant-<i>a⃗</i> case: <i>a⃗</i> keeps turning, so the constant-<i>a⃗</i> equations do not apply).',
          },
          { f: 'Radius of curvature', note: '<i>R</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>⊥</sub> (perpendicular component of acceleration).' },
        ],
        aids: ['Mnemonic: <b>“Two motions, one clock — resolve, solve, recombine.”</b>'],
      },
    ],
  },
];
