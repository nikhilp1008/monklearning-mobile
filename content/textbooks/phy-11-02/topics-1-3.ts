import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 01 to 03: pp. 75–102 of the Class 11 Physics Master
 * Reference, word for word. (p. 75 is the chapter opener: title and contents
 * only, so the chapter has no introduction of its own.)
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 75–83 ─────────────────────────
  {
    n: '01',
    title: 'Kinematic Quantities',
    kalam: 'Distance is a plain number (a scalar); displacement carries a direction (a vector).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the bedrock of all mechanics. CBSE Boards ask 1–2 marks on the distance-vs-displacement distinction or a clean average-speed calculation. JEE Main reliably carries 1 question — typically an “average speed” trap or a calculus-based position/velocity numerical. NEET loves the equal-distance vs equal-time average-speed trap as a fast MCQ. JEE Advanced rarely tests these definitions alone but builds every harder kinematics and dynamics problem on top of them, so a shaky foundation here costs marks everywhere downstream.',
      },
      {
        t: 'p',
        html: 'Picture a local train pulling out of Dadar station, looping along the Mumbai coast, and stopping at Bandra. If you asked the motorman, “How far did we travel?” he’d point to the odometer — every metre of track the train rolled over. But if you stood at Dadar with a measuring tape and stretched it straight to Bandra, you’d get a much shorter, straight-line gap. These are two genuinely different questions, and physics gives them two different names.<br><br>The odometer reading — the <b>total length of the actual path</b> covered — is called <b>distance</b>. It only ever grows; it cannot shrink, and it doesn’t care which way you went. The straight tape from start to finish — the <b>shortest gap from the initial position to the final position, together with the direction</b> — is called <b>displacement</b>. Distance is a plain number (a scalar); displacement carries a direction (a vector). This single split is the seed from which the whole topic grows.<br><br>From this pair, two more pairs sprout. <b>Speed</b> is how fast distance piles up: rate of change of distance. <b>Velocity</b> is how fast displacement changes, with direction: rate of change of displacement. So speed is the scalar twin and velocity is the vector twin — same units (m/s), same dimensions, but velocity also tells you which way. A car’s speedometer shows speed (always positive); it never shows velocity, because it doesn’t know your direction.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a cricketer taking a quick single. He sprints from one crease to the other (that’s his displacement — a fixed 17.68 m down the pitch) but if he has to scramble back because the call was cancelled, his distance keeps growing while his displacement shrinks back toward zero. Run there and back, and his displacement is <b>zero</b> even though he’s gasping for breath from all the distance covered. This is the famous result: <b>a round trip has zero displacement but plenty of distance.</b> That gap is the heart of kinematics.',
      },
      {
        t: 'p',
        html: 'Now zoom in on time. Over a whole journey we talk about <b>average</b> values — total distance over total time (average speed), or net displacement over total time (average velocity). But at a single instant — the exact moment the speed gun clocks a bowler’s delivery — we need the <b>instantaneous</b> value. Instantaneous velocity is what you get when you shrink the time interval down to nearly nothing: mathematically, the derivative of position with respect to time. And the magnitude of instantaneous velocity is the instantaneous speed — at a single instant, there’s no path left to bend, so the scalar and vector twins finally agree exactly.<br><br>Finally, <b>acceleration</b> is the rate of change of velocity. Crucially, velocity can change in <b>magnitude</b> (speeding up / slowing down) or in <b>direction</b>, so acceleration is not just “speeding up.” When acceleration points opposite to velocity, the body slows — this is <b>retardation</b> (deceleration).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• All of this sub-topic, as taught here, lives in <b>one dimension</b> — motion along a straight line — so a direction reduces to a simple <b>+ or − sign</b> once you fix a positive direction. Choosing that positive direction first is non-negotiable.<br>• <b>Distance ≥ |displacement|</b> always; they are equal only when the motion is along a straight line <b>without reversing direction</b>.<br>• Consequently <b>average speed ≥ |average velocity|</b> always, with equality under the same no-reversal condition.<br>• “Zero velocity” does <b>not</b> mean “zero acceleration” — at the top of a thrown ball’s flight, velocity is momentarily zero but acceleration is still <i>g</i> downward.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Definition', 'Symbol & SI unit', 'Dimensional formula'],
        rows: [
          ['Distance', 'total path length (scalar, ≥ 0)', '<i>s</i>, m', '[L]'],
          ['Displacement', 'change in position (vector)', 'Δ<i>x</i> = <i>x</i><sub><i>f</i></sub> − <i>x</i><sub><i>i</i></sub>, m', '[L]'],
          ['Average speed', '(total distance)/(total time)', 'm/s', '[L T<sup>−1</sup>]'],
          ['Average velocity', 'displacement/(time interval)', 'm/s', '[L T<sup>−1</sup>]'],
          ['Instantaneous velocity', 'd<i>x</i>/d<i>t</i>', 'm/s', '[L T<sup>−1</sup>]'],
          ['Instantaneous speed', '|d<i>x</i>/d<i>t</i>|', 'm/s', '[L T<sup>−1</sup>]'],
          ['Acceleration', 'd<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup>', 'm/s<sup>2</sup>', '[L T<sup>−2</sup>]'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Core relations',
        main: '<i>v</i><sub>avg</sub> = (<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)/(<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>)<br><i>v</i><sub>inst</sub> = lim<sub>Δ<i>t</i>→0</sub> Δ<i>x</i>/Δ<i>t</i> = d<i>x</i>/d<i>t</i><br><i>a</i><sub>avg</sub> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>)<br><i>a</i><sub>inst</sub> = d<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two special-case averaging results',
        main: 'Equal <b>distances</b> at <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>: <i>v</i><sub>avg</sub> = 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) (harmonic mean)<br>Equal <b>times</b> at <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>: <i>v</i><sub>avg</sub> = (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)/2 (arithmetic mean)',
        legend: [],
        note: '(memorise the distinction — it is the single most-tested trap)',
      },
      {
        t: 'formula',
        kicker: 'Key inequalities',
        main: 'distance ≥ |displacement| and average speed ≥ |average velocity|',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single grand “derivation” for these definitions, but one piece of genuine reasoning matters — why instantaneous velocity is a derivative — plus two procedures you must perform without hesitation.',
      },
      {
        t: 'p',
        html: '<b>The logic of instantaneous velocity (from average to instantaneous).</b> Start with average velocity over an interval Δ<i>t</i>: <i>v</i><sub>avg</sub> = Δ<i>x</i>/Δ<i>t</i>.<br>1. On a position–time (<i>x</i>–<i>t</i>) graph, this ratio is the <b>slope of the secant line</b> (chord) joining the two points. Reasoning: rise (Δ<i>x</i>) over run (Δ<i>t</i>) is slope.<br>2. Now squeeze the interval: let <i>t</i><sub>2</sub> slide toward <i>t</i><sub>1</sub>, so Δ<i>t</i> → 0. The chord pivots and rotates until it just kisses the curve — it becomes the <b>tangent</b> at that point.<br>3. The slope of that tangent is the instantaneous velocity:<br><i>v</i> = lim<sub>Δ<i>t</i>→0</sub> Δ<i>x</i>/Δ<i>t</i> = d<i>x</i>/d<i>t</i>.<br>This is why we use calculus: velocity at an instant is the limiting slope as the measuring window collapses to a point.',
      },
      { t: 'fig', id: 'p11-02-fig-2.1' },
      {
        t: 'proc',
        title: 'Procedure A — Distance vs displacement for a 1-D trip with reversals',
        steps: [
          'Fix a positive direction (say, rightward = +).',
          'Split the journey into legs where the direction of motion does not change.',
          '<b>Displacement</b> = algebraic sum of the legs (respect + / − signs); equivalently <i>x</i><sub>final</sub> − <i>x</i><sub>initial</sub>.',
          '<b>Distance</b> = sum of the magnitudes of all legs (drop the signs).',
          'Sanity check: distance must be ≥ |displacement|; if not, you slipped a sign.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Average speed when the data is “by distance” vs “by time”',
        steps: [
          'Identify whether the equal pieces are equal <b>distances</b> or equal <b>times</b> — this decides everything.',
          'Always return to first principles: <i>v</i><sub>avg</sub> = (total distance)/(total time).',
          'For equal distances, total time is ∑ <i>d</i>/<i>v</i><sub><i>i</i></sub> (small speeds dominate the time, dragging the average down → harmonic mean). For equal times, total distance is ∑ <i>v</i><sub><i>i</i></sub><i>t</i> (→ arithmetic mean).',
          'Quick reasonableness check: the average must lie <b>between</b> the smallest and largest speed, and for equal distances it sits <b>closer to the slower</b> speed.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A jogger runs 300 m due east in 100 s, then turns and runs 100 m due west in 50 s. Find (a) total distance, (b) displacement, (c) average speed, (d) average velocity.',
        steps: [
          '<b>Given:</b> Leg 1: 300 m east, 100 s. Leg 2: 100 m west, 50 s. Take east as positive.',
          '<b>Solution:</b> (a) Total distance = 300 + 100 = 400 m (magnitudes added). (b) Displacement = (+300) + (−100) = +200 m, i.e. 200 m <b>east</b>. (c) Total time = 100 + 50 = 150 s.<br>Average speed = 400 m/150 s ≈ 2.67 m/s.',
          '(d)<br>Average velocity = 200 m/150 s ≈ 1.33 m/s, east.',
        ],
        ans: 'Notice average speed > |average velocity| — exactly as the inequality promises, because the jogger reversed direction.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A bus covers the first half of a route at 40 km/h and the second half (equal distance) at 60 km/h. Its average speed for the whole route is:<br>(A) 50 km/h (B) 48 km/h (C) 52 km/h (D) 24 km/h',
        steps: [
          '<b>The trap:</b> the eye jumps to (40 + 60)/2 = 50 — option (A) — but that arithmetic mean is <b>wrong for equal distances</b>.',
          '<b>Fast solution:</b> Equal distances ⇒ harmonic mean:<br><i>v</i><sub>avg</sub> = 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) = 2(40)(60)/(40 + 60) = 4800/100 = 48 km/h.',
          'Speed cue: the harmonic mean is <b>always less than</b> the arithmetic mean, so the instant you see “equal distances, two speeds,” eliminate the simple average and pick the slightly smaller value. You barely need to compute.',
        ],
        ans: '(B) 48 km/h',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle moving along the x-axis has position <i>x</i>(<i>t</i>) = <i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i> + 5 (metres, <i>t</i> in seconds). (a) Find the instants when it is momentarily at rest. (b) Find its velocity at the instant its acceleration is zero. (c) Find the distance and displacement between <i>t</i> = 0 and <i>t</i> = 3 s.',
        steps: [
          '<b>Why it’s multi-concept:</b> it fuses differentiation with the distance-vs-displacement distinction.',
          '<b>Solution:</b><br><i>v</i> = d<i>x</i>/d<i>t</i> = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3), <i>a</i> = d<i>v</i>/d<i>t</i> = 6<i>t</i> − 12.',
          '(a) At rest ⇒ <i>v</i> = 0 ⇒ <i>t</i> = 1 s and <i>t</i> = 3 s.',
          '(b) <i>a</i> = 0 ⇒ 6<i>t</i> − 12 = 0 ⇒ <i>t</i> = 2 s. Then<br><i>v</i>(2) = 3(2 − 1)(2 − 3) = 3(1)(−1) = −3 m/s.<br>The negative sign means it is moving in the −<i>x</i> direction at that instant.',
          '(c) Positions: <i>x</i>(0) = 5, <i>x</i>(1) = 9, <i>x</i>(3) = 5.<br>• From <i>t</i> = 0 to <i>t</i> = 1: velocity positive, moves +4 m.<br>• From <i>t</i> = 1 to <i>t</i> = 3: velocity negative, moves back −4 m.',
          'The particle ends where it started (zero displacement) yet covered 8 m of path — the reversal at <i>t</i> = 1 s is exactly what makes the two disagree.',
        ],
        ans: 'Displacement = <i>x</i>(3) − <i>x</i>(0) = 5 − 5 = 0, Distance = |+4| + |−4| = 8 m.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle moves along a straight line with velocity <i>v</i>(<i>t</i>) = <i>t</i><sup>2</sup> − 6<i>t</i> + 8 (m/s) over the interval 0 ≤ <i>t</i> ≤ 5 s. Find (a) the instants it reverses direction, (b) the total displacement, (c) the total distance, and (d) the average speed and average velocity, verifying <i>v̄</i><sub>speed</sub> ≥ |<i>v̄</i><sub>vel</sub>|.',
        steps: [
          '<b>Reasoning:</b> Direction reverses wherever <i>v</i> changes sign. Distance needs ∫ |<i>v</i>| d<i>t</i> piecewise, while displacement is the plain ∫ <i>v</i> d<i>t</i>.',
          '<b>Solution:</b> Factor: <i>v</i> = (<i>t</i> − 2)(<i>t</i> − 4), so <i>v</i> = 0 at <i>t</i> = 2 s and <i>t</i> = 4 s. Sign of <i>v</i>: positive on [0, 2], negative on [2, 4], positive on [4, 5] → <b>two reversals</b>, at <i>t</i> = 2 and <i>t</i> = 4 s.',
          'Let the antiderivative be <i>F</i>(<i>t</i>) = <i>t</i><sup>3</sup>/3 − 3<i>t</i><sup>2</sup> + 8<i>t</i>. Then:<br><i>F</i>(0) = 0, <i>F</i>(2) = 20/3, <i>F</i>(4) = 16/3, <i>F</i>(5) = 20/3.',
          '(b) <b>Displacement</b> = <i>F</i>(5) − <i>F</i>(0) = 20/3 ≈ 6.67 m.',
          '(c) <b>Distance</b> = |<i>F</i>(2) − <i>F</i>(0)| + |<i>F</i>(4) − <i>F</i>(2)| + |<i>F</i>(5) − <i>F</i>(4)|<br>= 20/3 + |16/3 − 20/3| + |20/3 − 16/3| = 20/3 + 4/3 + 4/3 = 28/3 ≈ 9.33 m.',
          '(d) Over total time 5 s:<br><i>v̄</i><sub>vel</sub> = (20/3)/5 = 4/3 ≈ 1.33 m/s, <i>v̄</i><sub>speed</sub> = (28/3)/5 = 28/15 ≈ 1.87 m/s.',
        ],
        ans: 'Indeed 1.87 ≥ 1.33 — the inequality holds, and the gap is precisely the “wasted” back-tracking between <i>t</i> = 2 and <i>t</i> = 4 s.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A hiker walks 4 km north, then 3 km east, taking 30 min in all. Find the distance, the magnitude of displacement, the average speed, and the magnitude of average velocity.',
            a: 'distance 7 km, displacement 5 km, avg speed 14 km/h, avg velocity 10 km/h',
          },
          {
            q: '[NEET] A drone covers two equal-distance stretches at 30 km/h and 20 km/h. What is its average speed?',
            a: '24 km/h',
          },
          {
            q: '[JEE Main] A particle moves with <i>x</i>(<i>t</i>) = 5 + 3<i>t</i> + 2<i>t</i><sup>2</sup> (m). Find its initial velocity, its acceleration, and its velocity at <i>t</i> = 2 s.',
            a: '<i>u</i> = 3 m/s, <i>a</i> = 4 m/s<sup>2</sup>, <i>v</i>(2) = 11 m/s',
          },
          {
            q: '[JEE Main] Position is <i>x</i>(<i>t</i>) = 4<i>t</i> − <i>t</i><sup>2</sup> (m). Find the velocity at <i>t</i> = 1 s and the instant at which the particle is momentarily at rest.',
            a: '<i>v</i>(1) = 2 m/s, at rest at <i>t</i> = 2 s',
          },
          {
            q: '[JEE Advanced] A particle has velocity <i>v</i>(<i>t</i>) = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 (m/s) for 0 ≤ <i>t</i> ≤ 4 s. Find the total distance travelled.',
            a: '12 m (displacement is only 4 m).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For any moving body, which relation is always correct?',
        opts: [
          { label: 'displacement ≥ distance', nudge: '(A) reverses the true inequality.' },
          { label: 'distance ≥ |displacement|', nudge: null },
          { label: 'distance = |displacement|', nudge: '(C) holds only for straight-line motion with no reversal — true sometimes, not always, so it fails “always.”' },
          { label: 'distance < |displacement|', nudge: '(D) is impossible; if a student picks it they’ve confused which quantity is the shortcut route.' },
        ],
        correct: 1,
        solution: 'The path can only be longer than (or equal to) the straight-line gap, never shorter.',
      },
      {
        t: 'mcq',
        q: 'A runner runs one full lap of a track of radius <i>R</i>. Distance and |displacement| are:',
        opts: [
          { label: '2π<i>R</i>, 2π<i>R</i>', nudge: '(A) wrongly equates the two — the classic round-trip error.' },
          { label: '2π<i>R</i>, 0', nudge: null },
          { label: '0, 2π<i>R</i>', nudge: '(C) swaps them.' },
          { label: 'π<i>R</i>, 2<i>R</i>', nudge: '(D) is the half-lap answer (distance π<i>R</i>, displacement = diameter 2<i>R</i>); picked by students who misread “full” as “half.”' },
        ],
        correct: 1,
        solution: 'Distance is the full circumference 2π<i>R</i>; but the runner ends exactly where they began, so displacement is 0.',
      },
      {
        t: 'mcq',
        q: 'The magnitude of a particle’s average velocity equals its average speed <b>only</b> when the particle:',
        opts: [
          { label: 'moves on a circular path', nudge: '(A) maximises the gap between them, the opposite case.' },
          { label: 'moves along a straight line without reversing direction', nudge: null },
          { label: 'has constant acceleration', nudge: '(C) constant acceleration still allows a turnaround (e.g. a ball thrown up), so they can differ.' },
          { label: 'returns to its starting point', nudge: '(D) gives <b>zero</b> average velocity but non-zero average speed — they’re maximally unequal, the trap for hasty readers.' },
        ],
        correct: 1,
        solution: 'Equality of distance and |displacement| requires an unbent, one-way path — that’s exactly straight-line motion with no reversal.',
      },
      {
        t: 'mcq',
        q: 'A particle’s position is <i>x</i>(<i>t</i>) = 2<i>t</i><sup>2</sup> (m). Its instantaneous velocity at <i>t</i> = 3 s is:',
        opts: [
          { label: '6 m/s', nudge: '(A) comes from differentiating 2<i>t</i><sup>2</sup> as 2<i>t</i> (forgetting the power rule’s factor of 2).' },
          { label: '12 m/s', nudge: null },
          { label: '18 m/s', nudge: '(C) is the position <i>x</i>(3) = 2(9) = 18 m — answering the wrong question.' },
          { label: '4 m/s', nudge: '(D) reports just the coefficient 4 without substituting <i>t</i> = 3.' },
        ],
        correct: 1,
        solution: '<i>v</i> = d<i>x</i>/d<i>t</i> = 4<i>t</i>, so <i>v</i>(3) = 12 m/s.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating distance and displacement as interchangeable.</b> They coincide only for straight, one-way motion. The moment direction reverses (or the path curves), distance pulls ahead. Always ask: did the body turn around?',
          '<b>Arithmetic-averaging speeds over equal distances.</b> Two equal stretches at 40 and 60 km/h is <b>not</b> 50 — it’s the harmonic mean 48. Arithmetic mean is correct only for equal times.',
          '<b>Assuming <i>v</i> = 0 ⇒ <i>a</i> = 0.</b> At a turning point the body is instantaneously at rest yet still accelerating (think of the topmost point of a vertical throw). Velocity and acceleration are independent at an instant.',
          '<b>Forgetting to fix a positive direction in 1-D.</b> Without a chosen sign convention, “−3 m/s” is meaningless and sign errors cascade through the whole solution.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lock in one phrase — “same distance → harmonic, same time → arithmetic.” And for average velocity, never integrate the wiggly path: it is simply (<i>x</i><sub>final</sub> − <i>x</i><sub>initial</sub>)/(total time), endpoints only. When a velocity function changes sign, split the time axis at the roots <b>before</b> integrating for distance, or you’ll silently cancel the back-tracking and report distance as displacement.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Distance</b> = total path length (scalar, never decreases); <b>Displacement</b> = <i>x</i><sub><i>f</i></sub> − <i>x</i><sub><i>i</i></sub> (vector, sign matters).', note: '' },
          { f: '<b>Instantaneous speed</b> = |velocity|; units m/s, [LT<sup>−1</sup>]; speed scalar, velocity vector.', note: '' },
          { f: '<i>v</i><sub>avg (speed)</sub> = (total distance)/(total time), <i>v</i><sub>avg (velocity)</sub> = displacement/time.', note: '' },
          { f: '<i>v</i><sub>inst</sub> = d<i>x</i>/d<i>t</i> = slope of the <i>x</i>–<i>t</i> tangent; <i>a</i> = d<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> (m/s<sup>2</sup>, [L T<sup>−2</sup>]).', note: '' },
          { f: 'Always', note: 'distance ≥ |displacement| and average speed ≥ |average velocity|; equal only for unidirectional straight-line motion.' },
          { f: '<b>Equal distances → harmonic mean</b> 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>); <b>equal times → arithmetic mean</b> (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)/2.', note: '' },
        ],
        aids: ['“Distance is how far you walked; displacement is how far you ended up.”'],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 84–94 ─────────────────────────
  {
    n: '02',
    title: 'Graphical Analysis',
    kalam: 'A motion graph is a story told without words.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Motion graphs are a perennial favourite. CBSE Boards often ask a 2–3 mark “find displacement from this v–t graph” or “what does the slope represent.” JEE Main almost guarantees 1 question, usually reading acceleration (slope) and displacement (area) off a piecewise graph. NEET leans on conceptual graph-interpretation MCQs (slope = velocity, area = displacement) where one wrong reading sinks the answer. JEE Advanced uses graphs as a reasoning tool inside multi-part problems and loves the a–t → v–t → x–t conversion chain.',
      },
      {
        t: 'p',
        html: 'A motion graph is a story told without words. Instead of describing where an object is and how fast it moves in sentences, we draw a picture and let its <b>shape</b> do the talking. The trick — and the entire skill of this sub-topic — is learning to read two features of any motion graph: its <b>slope</b> (how steeply it rises or falls) and the <b>area</b> trapped between the curve and the time axis. Master those two readings and almost every graph question collapses into something easy.<br><br>Start with the <b>position–time (<i>x</i>–<i>t</i>) graph</b>, where the vertical axis is position and the horizontal axis is time. Its slope answers “how fast is the position changing?” — which is exactly velocity. A steep line means high velocity; a gentle line means slow; a flat horizontal line means the position isn’t changing at all, i.e. the body is <b>at rest</b>. If the graph is a straight slanted line, the slope is constant, so the velocity is constant (uniform motion). If it curves, the slope is changing, so the velocity is changing — that’s <b>acceleration</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the live train-tracker app for a Rajdhani Express, plotting the train’s position against time. While the train sits at a platform, the line is flat. When it races between stations, the line shoots up steeply. When it slows for a junction, the line bends and flattens. You never see the actual tracks — yet from the shape of the line alone you can tell exactly when the train was stopped, sprinting, or braking. That is graphical analysis: the trajectory may be a dead-straight railway line, but the graph’s curve encodes the changing speed, not a curving path. A common beginner error is to think a curved <i>x</i>–<i>t</i> graph means the train turned a corner — it doesn’t; the motion is still in a straight line.',
      },
      {
        t: 'p',
        html: 'Next, the <b>velocity–time (<i>v</i>–<i>t</i>) graph</b>. Here the slope answers “how fast is velocity changing?” — which is acceleration. But the <i>v</i>–<i>t</i> graph has a second, even more useful reading: the <b>area</b> between the curve and the time axis equals the <b>displacement</b>. Why? Over a tiny sliver of time Δ<i>t</i>, the strip of area is (velocity × Δ<i>t</i>) = a little bit of displacement; add up all the slivers and you get the total. Crucially, area below the time axis (where velocity is negative) counts as <b>negative</b> displacement. So the net signed area gives displacement, while the total area ignoring sign gives distance.<br><br>Finally, the <b>acceleration–time (<i>a</i>–<i>t</i>) graph</b>: the area under it gives the <b>change in velocity</b> Δ<i>v</i>, by the same slicing logic.',
      },
      {
        t: 'p',
        html: 'So the chain runs: <b>slope takes you one step “down”</b> (<i>x</i> → <i>v</i> → <i>a</i>), and <b>area takes you one step “up”</b> (<i>a</i> → <i>v</i> → <i>x</i>).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• An <i>x</i>–<i>t</i> graph can <b>never be vertical</b> — that would mean the body is in two places at once (infinite velocity). For the same reason, the graph can’t fold back over a single time value.<br>• “Slope” means the slope of the <b>tangent</b> for an instantaneous reading; the slope of a <b>chord</b> gives the average over that interval.<br>• Reading area as displacement assumes you respect signs. Forgetting this is the No. 1 graph mistake.<br>• These tools are for one-dimensional (rectilinear) motion; sign (+/−) stands in for direction.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: 'The “formulas” here are really reading rules. Commit this table to memory:' },
      {
        t: 'table',
        title: null,
        head: ['Graph', 'What the slope gives', 'What the area gives'],
        rows: [
          ['Position–time (<i>x</i>–<i>t</i>)', 'velocity <i>v</i> = d<i>x</i>/d<i>t</i>', '— (not standard)'],
          ['Velocity–time (<i>v</i>–<i>t</i>)', 'acceleration <i>a</i> = d<i>v</i>/d<i>t</i>', 'displacement (signed) / distance (unsigned)'],
          ['Acceleration–time (<i>a</i>–<i>t</i>)', 'jerk (rarely needed)', 'change in velocity Δ<i>v</i>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Slope (instantaneous vs average)',
        main: '<i>v</i><sub>inst</sub> = (d<i>x</i>/d<i>t</i>)<sub>tangent</sub><br><i>v</i><sub>avg</sub> = (Δ<i>x</i>/Δ<i>t</i>)<sub>chord</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Area as integral',
        main: 'Displacement = ∫<sub><i>t</i>₁</sub><sup><i>t</i>₂</sup> <i>v</i> d<i>t</i> = (net signed area under <i>v</i>–<i>t</i>)<br>Δ<i>v</i> = ∫<sub><i>t</i>₁</sub><sup><i>t</i>₂</sup> <i>a</i> d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Shape dictionary for the <i>x</i>–<i>t</i> graph:</b><br>• Horizontal line → at rest (<i>v</i> = 0).<br>• Straight slanted line → uniform velocity (<i>a</i> = 0).<br>• Concave-up curve → velocity increasing → <b>positive</b> acceleration.<br>• Concave-down curve → velocity decreasing → <b>negative</b> acceleration.',
      },
      {
        t: 'p',
        html: '<b>Shape dictionary for the <i>v</i>–<i>t</i> graph:</b><br>• Horizontal line → uniform velocity (<i>a</i> = 0).<br>• Straight slanted line → uniform acceleration.<br>• Line crossing the time axis → particle <b>reverses direction</b> at the crossing.',
      },
      { t: 'fig', id: 'p11-02-fig-2.2' },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: 'No formal derivation here — the skill is procedural reading. Two procedures cover almost everything.' },
      {
        t: 'proc',
        title: 'Procedure A — Extracting motion data from a single graph',
        steps: [
          '<b>Identify the axes first.</b> Is the vertical axis <i>x</i>, <i>v</i>, or <i>a</i>? Every rule depends on this. Most wrong answers come from applying <i>v</i>–<i>t</i> rules to an <i>x</i>–<i>t</i> graph.',
          '<b>Need a rate (velocity or acceleration)? Take the slope.</b> For an instant, draw the tangent and compute rise/run; for an average, use the straight chord between the two endpoints.',
          '<b>Need displacement or Δ<i>v</i>? Take the area.</b> Break the shape into triangles, rectangles, and trapezia. Compute each area.',
          '<b>Apply signs.</b> Area below the time axis is negative. For <b>displacement</b>, add areas with their signs; for <b>distance</b>, add the magnitudes.',
          '<b>Sanity check.</b> Distance ≥ |displacement|; a reasonable acceleration; velocity continuous (no instantaneous jumps unless idealised).',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Converting between graph types (the reasoning chain).</b> The graphs are linked like a ladder: <i>x</i> —slope→ <i>v</i> —slope→ <i>a</i>, and back up by area <i>a</i> —area→ <i>v</i> —area→ <i>x</i>.<br>1. <b>Going down (differentiate / take slope):</b> to get <i>v</i>–<i>t</i> from <i>x</i>–<i>t</i>, plot the slope of <i>x</i>–<i>t</i> at each instant. A straight <i>x</i>–<i>t</i> line (constant slope) becomes a horizontal <i>v</i>–<i>t</i> line. A parabola becomes a sloped line.<br>2. <b>Going up (integrate / accumulate area):</b> to get <i>v</i>–<i>t</i> from <i>a</i>–<i>t</i>, start from the known initial velocity and add the running area under <i>a</i>–<i>t</i>. To then get position, add the running area under <i>v</i>–<i>t</i>.<br>3. <b>The reasoning behind it:</b> slope is the derivative (instantaneous rate of change), and area is the integral (accumulated total). Differentiation and integration are inverse operations, which is precisely why the ladder works both ways.<br>4. <b>Anchor the constants.</b> Going up, you always need the starting value (<i>v</i><sub>0</sub> or <i>x</i><sub>0</sub>); area gives the change, not the absolute value.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        fig: 'p11-02-fig-2.3',
        tag: 'CBSE Board Level',
        q: 'A scooter starts from rest and speeds up uniformly to 20 m/s in 4 s, cruises at 20 m/s for the next 6 s, then brakes uniformly to rest in 5 s. Using its <i>v</i>–<i>t</i> graph, find (a) the acceleration in each phase and (b) the total displacement.',
        steps: [
          '<b>Solution:</b> (a) Acceleration = slope of each segment.<br>• Phase 1: <i>a</i><sub>1</sub> = (20 − 0)/4 = 5 m/s<sup>2</sup>.<br>• Phase 2: <i>a</i><sub>2</sub> = 0 (flat line).<br>• Phase 3: <i>a</i><sub>3</sub> = (0 − 20)/5 = −4 m/s<sup>2</sup> (deceleration).',
          '(b) Displacement = area under the graph:<br>• Triangle: ½(4)(20) = 40 m.<br>• Rectangle: (6)(20) = 120 m.<br>• Triangle: ½(5)(20) = 50 m.',
          'All area is above the axis, so distance equals displacement here.',
        ],
        ans: 'Total displacement = 40 + 120 + 50 = 210 m',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The position–time graph of a body is a straight line inclined at a fixed angle to the time axis. The body is:<br>(A) speeding up (B) moving with uniform velocity (C) uniformly accelerating (D) at rest',
        steps: [
          '<b>The trap:</b> “the line goes up, so the body must be speeding up.” That instinct treats every rising graph alike — but on an <i>x</i>–<i>t</i> graph, rising only means moving forward, not speeding up.',
          '<b>Fast solution:</b> On an <i>x</i>–<i>t</i> graph, slope = velocity. A straight line has <b>constant slope</b>, so velocity is constant → uniform velocity, zero acceleration.',
          'Speed cue: memorise the one-line rule — “straight <i>x</i>–<i>t</i> line = steady speed; only a <b>curved</b> <i>x</i>–<i>t</i> line means acceleration.” (A) and (C) describe a curved graph; (D) would be a flat horizontal line. Eliminate in two seconds.',
        ],
        ans: '(B) moving with uniform velocity',
      },
      {
        t: 'ex',
        fig: 'p11-02-fig-2.4',
        tag: 'JEE Main Level',
        q: 'A particle’s <i>v</i>–<i>t</i> graph is piecewise linear: it rises from 0 to 12 m/s during 0 ≤ <i>t</i> ≤ 3 s, stays at 12 m/s until <i>t</i> = 5 s, then falls steadily to −4 m/s at <i>t</i> = 9 s. Find (a) the instant the particle reverses direction, (b) the total displacement, and (c) the total distance, over 0 to 9 s.',
        steps: [
          '<b>Why it’s multi-concept:</b> it combines slope (acceleration), signed-area (displacement), and the distance-vs-displacement idea from Sub-topic 1.',
          '<b>Solution:</b> The falling segment goes from 12 m/s to −4 m/s over 4 s, slope = −4 m/s<sup>2</sup>. It crosses zero when 12 − 4(<i>t</i> − 5) = 0 ⇒ <i>t</i> = 8 s.',
          '(a) The velocity changes sign at <i>t</i> = 8 s → <b>reverses direction there.</b>',
          'Now the areas:<br>• 0−3 s (triangle): ½(3)(12) = 18 m<br>• 3−5 s (rectangle): (2)(12) = 24 m<br>• 5−8 s (triangle, above axis): ½(3)(12) = 18 m<br>• 8−9 s (triangle, below axis): ½(1)(4) = 2 m → contributes −2 m',
          '(b) Displacement = 18 + 24 + 18 − 2 = 58 m',
          'The 4 m gap between distance and displacement is exactly twice the back-tracked area — the body crept 2 m backward after <i>t</i> = 8 s.',
        ],
        ans: '(c) Distance = 18 + 24 + 18 + 2 = 62 m',
      },
      {
        t: 'ex',
        fig: 'p11-02-fig-2.5',
        tag: 'JEE Advanced Level',
        q: 'A particle starts from rest at the origin. Its acceleration–time graph is: <i>a</i> = +6 m/s<sup>2</sup> (constant) for 0 ≤ <i>t</i> ≤ 2 s, then <i>a</i> = −3 m/s<sup>2</sup> (constant) for 2 ≤ <i>t</i> ≤ 8 s. Find (a) the maximum velocity and when it occurs, (b) the instant the particle reverses direction, (c) the total displacement and (d) the total distance over 0 to 8 s.',
        steps: [
          '<b>Reasoning:</b> Climb the ladder. Area under <i>a</i>–<i>t</i> gives Δ<i>v</i>, building the <i>v</i>–<i>t</i> graph; area under that <i>v</i>–<i>t</i> graph then gives displacement.',
          '<b>Solution — build the <i>v</i>–<i>t</i> graph (start from <i>v</i><sub>0</sub> = 0):</b><br>• Phase 1: Δ<i>v</i> = (6)(2) = +12 m/s, so <i>v</i>(2) = 12 m/s, rising linearly.<br>• Phase 2: slope −3, so <i>v</i>(<i>t</i>) = 12 − 3(<i>t</i> − 2). Then <i>v</i>(6) = 0 and <i>v</i>(8) = −6 m/s.',
          '(a) Velocity peaks where acceleration switches from + to −: <b><i>v</i><sub>max</sub> = 12 m/s at <i>t</i> = 2 s.</b>',
          '(b) <i>v</i> = 0 at <i>t</i> = 6 s → <b>reverses direction at <i>t</i> = 6 s.</b>',
          '(c)/(d) Areas of the <i>v</i>–<i>t</i> graph:<br>• 0−2 s (triangle): ½(2)(12) = 12 m<br>• 2−6 s (triangle, above): ½(4)(12) = 24 m<br>• 6−8 s (triangle, below): ½(2)(6) = 6 m → −6 m',
          'The subtlety that separates strong students: even while the acceleration turns negative at <i>t</i> = 2 s, the particle keeps moving <b>forward</b> until <i>t</i> = 6 s — negative acceleration first slows it, and only then drives it backward. Reading “negative acceleration” as “moving backward” is the classic Advanced-level trap.',
        ],
        ans: 'Displacement = 12 + 24 − 6 = 30 m, Distance = 12 + 24 + 6 = 42 m',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A car moves at a constant 8 m/s for 5 s, then decelerates uniformly to rest in 4 s. From the <i>v</i>–<i>t</i> graph, find the total displacement.',
            a: '56 m',
          },
          {
            q: '[NEET] A body’s position–time graph is a horizontal straight line parallel to the time axis. State what kind of motion this represents.',
            a: 'at rest (zero velocity)',
          },
          {
            q: '[JEE Main] A <i>v</i>–<i>t</i> graph is a straight line rising from (0, 4 m/s) to (5 s, 14 m/s). Find the acceleration and the displacement in this interval.',
            a: '<i>a</i> = 2 m/s<sup>2</sup>, displacement = 45 m',
          },
          {
            q: '[JEE Main] At a certain instant, the slope of a particle’s <i>x</i>–<i>t</i> graph is negative. What does this tell you about its motion at that instant?',
            a: 'moving in the negative direction (velocity is negative) at that instant',
          },
          {
            q: '[JEE Advanced] A particle starts from rest with an acceleration that varies as <i>a</i> = 2<i>t</i> m/s<sup>2</sup> for 0 ≤ <i>t</i> ≤ 3 s. Find its velocity and displacement at <i>t</i> = 3 s.',
            a: '<i>v</i>(3) = 9 m/s, <i>x</i>(3) = 9 m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The area enclosed between a velocity–time graph and the time axis represents the:',
        opts: [
          { label: 'acceleration', nudge: '(A) is the slope of the <i>v</i>–<i>t</i> graph, not its area.' },
          { label: 'displacement', nudge: null },
          { label: 'distance, always', nudge: '(C) is a tempting half-truth: total area ignoring sign gives distance, but with the sign convention the area gives displacement — “always distance” is wrong whenever the curve dips below the axis.' },
          { label: 'velocity', nudge: '(D) confuses the curve’s height with the region beneath it.' },
        ],
        correct: 1,
        solution: 'Net signed area under <i>v</i>–<i>t</i> is displacement.',
      },
      {
        t: 'mcq',
        q: 'The slope of the tangent to a position–time graph at a point gives the:',
        opts: [
          { label: 'acceleration', nudge: '(A) would be the slope of a <i>v</i>–<i>t</i> graph, one rung down the ladder.' },
          { label: 'instantaneous velocity', nudge: null },
          { label: 'total distance', nudge: '(C) is unrelated to slope.' },
          { label: 'average velocity', nudge: '(D) comes from the slope of a <b>chord</b>, not a tangent — the trap for students who don’t distinguish the two.' },
        ],
        correct: 1,
        solution: 'Slope of <i>x</i>–<i>t</i> is velocity, and the tangent (single point) makes it the instantaneous value.',
      },
      {
        t: 'mcq',
        q: 'A particle’s position–time graph is a parabola that is concave up (opens upward). The motion has:',
        opts: [
          { label: 'zero acceleration', nudge: '(A) and (D) describe a straight line, not a curve.' },
          { label: 'constant positive acceleration', nudge: null },
          { label: 'negative acceleration', nudge: '(C) describes a concave-<b>down</b> curve, where velocity decreases — picked by students who don’t link concavity to the sign of acceleration.' },
          { label: 'constant velocity', nudge: '(A) and (D) describe a straight line, not a curve.' },
        ],
        correct: 1,
        solution: 'A concave-up parabola in <i>x</i>–<i>t</i> means the slope (velocity) steadily increases → constant positive acceleration.',
      },
      {
        t: 'mcq',
        q: 'A particle’s <i>v</i>–<i>t</i> graph is a horizontal line at <i>v</i> = −3 m/s. Over 4 s, its displacement and distance are respectively:',
        opts: [
          { label: '−12 m, 12 m', nudge: null },
          { label: '12 m, 12 m', nudge: '(B) drops the negative sign on displacement — the body genuinely moved backward.' },
          { label: '−12 m, −12 m', nudge: '(C) reports a negative distance, which is impossible by definition.' },
          { label: '0, 12 m', nudge: '(D) wrongly assumes constant negative velocity gives zero net displacement.' },
        ],
        correct: 0,
        solution: 'Displacement = signed area = (−3)(4) = −12 m; distance = magnitude = 12 m.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Applying the wrong graph’s rule.</b> “Slope = velocity” is true for <i>x</i>–<i>t</i>, but on a <i>v</i>–<i>t</i> graph slope is acceleration. Always read the vertical axis label <b>before</b> reaching for a rule.',
          '<b>Reading “rising graph” as “speeding up.”</b> A rising <i>x</i>–<i>t</i> line just means moving in the + direction (at steady speed only if the line is straight); a rising <i>v</i>–<i>t</i> line means accelerating. Same shape, different meaning.',
          '<b>Ignoring signed area.</b> Area below the time axis is negative for displacement. Students who add all areas as positive get distance and mislabel it displacement.',
          '<b>Confusing negative acceleration with backward motion.</b> A body can have negative acceleration while still moving forward (it’s merely slowing) — it only goes backward once velocity actually crosses zero.',
          '<b>Thinking a curved <i>x</i>–<i>t</i> graph means a curved path.</b> The motion is along a straight line; the curve in the graph encodes changing velocity, not a bend in the road.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Carry one mental ladder — <b>slope steps down (<i>x</i> → <i>v</i> → <i>a</i>), area climbs up (<i>a</i> → <i>v</i> → <i>x</i>).</b> Before summing any <i>v</i>–<i>t</i> area, shade the pieces with + and − signs first; then “all magnitudes” gives distance and “with signs” gives displacement, in one pass. For graph MCQs, the fastest filter is almost always: straight line or curve? — it instantly separates the constant-rate options from the changing-rate ones.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<i>x</i>–<i>t</i> graph', note: 'slope = velocity. Flat → at rest; straight slope → uniform velocity; concave up → +<i>a</i>; concave down → −<i>a</i>.' },
          { f: '<i>v</i>–<i>t</i> graph', note: 'slope = acceleration; <b>area = displacement</b> (with signs); sum of |each area| = distance; a line crossing the time axis → direction reversal' },
          { f: '<i>a</i>–<i>t</i> graph', note: 'area = change in velocity Δ<i>v</i>.' },
          { f: 'The ladder', note: '<i>x</i> —slope→ <i>v</i> —slope→ <i>a</i>; <i>a</i> —area→ <i>v</i> —area→ <i>x</i> (going up needs the initial value).' },
          { f: 'Forbidden', note: 'a vertical <i>x</i>–<i>t</i> segment (infinite velocity); a graph that loops back over one time value.' },
        ],
        aids: ['“Slope steps Down, Area climbs Up.”'],
      },
    ],
  },
  // ───────────────────────── Topic 03 · pp. 95–102 ────────────────────────
  {
    n: '03',
    title: 'Equations of Motion and Free Fall',
    kalam: 'Treat the three equations as a trusted shortcut with a clearly stamped expiry condition: “constant a only.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the most heavily examined slice of the whole chapter. CBSE Boards regularly ask for a derivation of one of the three equations (2–3 marks) plus a free-fall numerical. JEE Main carries 1–2 questions every year — free fall, stopping distance, or the “distance in the nth second” formula. NEET asks fast plug-in numericals and the Galileo odd-number ratio. JEE Advanced rarely tests the bare equations but threads them through multi-body and last-second free-fall problems where sign convention and setup are everything.',
      },
      {
        t: 'p',
        html: 'Everything so far has described motion. Now we get the <b>tools to predict it</b>. If a body moves with uniform acceleration — acceleration that stays constant in size and direction — then three compact equations let you connect its initial velocity, final velocity, acceleration, time, and displacement. Give any three of these, and the equations hand you the rest. That predictive power is why they’re called the <b>equations of motion</b>.<br><br>The catch — and it is the single most important sentence in this sub-topic — is the phrase uniform acceleration. These equations are <b>not</b> universal laws of motion; they are the special-case solution that appears only when acceleration doesn’t change. The moment acceleration varies with time or position, you must return to calculus. Treat the three equations as a trusted shortcut with a clearly stamped expiry condition: “constant <i>a</i> only.”',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture an auto-rickshaw pulling away from a red light. If the driver presses the accelerator by exactly the same amount the whole time, the speed climbs in a perfectly steady, predictable way — gain the same chunk of speed every second. That steadiness is uniform acceleration, and it’s what makes the future calculable. But the instant he eases off, then floors it again, the neat pattern breaks and the three equations no longer apply to the whole trip. They describe the disciplined driver, not the erratic one.',
      },
      {
        t: 'p',
        html: 'The most important real-world case of uniform acceleration is <b>free fall</b> — motion under gravity alone, with air resistance ignored. Near Earth’s surface, every object, regardless of mass, accelerates downward at the same rate <i>g</i> ≈ 9.8 m/s<sup>2</sup> (often rounded to 10 for quick work). A feather and a cricket ball fall identically in a vacuum — Galileo’s famous insight. Because <i>g</i> is constant, the three equations apply directly to anything thrown, dropped, or launched vertically, provided you fix a sign convention and keep it.',
      },
      {
        t: 'p',
        html: 'A clean consequence worth feeling in your bones: a ball thrown straight up rises, slows, stops for an instant at the top, and falls back — and by symmetry it returns to the launch point with the <b>same speed</b> it left with, taking <b>equal time</b> up and down. At the very top, its velocity is momentarily zero, but its acceleration is still a full <i>g</i> downward (gravity never switches off).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• All three equations require <b>constant acceleration</b>. Variable <i>a</i> → use <i>v</i> = d<i>x</i>/d<i>t</i>, <i>a</i> = d<i>v</i>/d<i>t</i> and integrate instead.<br>• Free fall assumes <b>no air resistance</b>, <i>g</i> effectively constant (valid near the surface), and the body treated as a point mass.<br>• You must <b>fix a positive direction first</b>; a sign slip on <i>u</i>, <i>a</i>, or <i>s</i> is the most common source of wrong answers here.<br>• <i>g</i> is an acceleration (≈ 9.8 m/s<sup>2</sup>), not a force; the gravitational force on a mass <i>m</i> is <i>mg</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'The three equations of motion (uniform acceleration a)',
        main: '<i>v</i> = <i>u</i> + <i>at</i> (1)<br><i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup> (2)<br><i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> (3)',
        legend: [
          '<i>u</i> = initial velocity',
          '<i>v</i> = final velocity',
          '<i>a</i> = (constant) acceleration',
          '<i>t</i> = time elapsed',
          '<i>s</i> = displacement',
        ],
        note: 'All SI: m/s, m/s<sup>2</sup>, s, m.',
      },
      {
        t: 'formula',
        kicker: 'Useful companions',
        main: '<i>s</i> = ((<i>u</i> + <i>v</i>)/2)<i>t</i> (average-velocity form)<br><i>s</i><sub><i>n</i>th</sub> = <i>u</i> + (<i>a</i>/2)(2<i>n</i> − 1) (displacement during the <i>n</i><sup>th</sup> second)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Free fall (substitute a = ±g, with a chosen sign convention)',
        main: 'Dropped from rest (taking down as positive): <i>v</i> = <i>gt</i>, <i>h</i> = ½<i>gt</i><sup>2</sup>, <i>v</i><sup>2</sup> = 2<i>gh</i>.<br>Thrown up with speed <i>u</i> (taking up as positive, <i>a</i> = −<i>g</i>):<br>max height <i>H</i> = <i>u</i><sup>2</sup>/(2<i>g</i>),<br>time to top = <i>u</i>/<i>g</i>,<br>total flight time (back to start) = 2<i>u</i>/<i>g</i>.',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Galileo’s law of odd numbers',
        main: 'for a body starting from rest under constant acceleration, the displacements in successive equal time intervals are in the ratio<br>1 ∶ 3 ∶ 5 ∶ 7 ∶ …',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Stopping distance',
        main: 'with final velocity 0 and deceleration of magnitude <i>a</i>, equation (3) gives<br><i>d</i> = <i>v</i><sub>0</sub><sup>2</sup>/(2<i>a</i>), so stopping distance ∝ <i>v</i><sub>0</sub><sup>2</sup>.',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'Take a body moving with constant acceleration <i>a</i>, initial velocity <i>u</i>, and let its velocity be <i>v</i> after time <i>t</i>, having covered displacement <i>s</i>.',
      },
      {
        t: 'p',
        html: '<b>Derivation 1 — <i>v</i> = <i>u</i> + <i>at</i> (from the definition of acceleration).</b> Constant acceleration means <i>a</i> = d<i>v</i>/d<i>t</i> is fixed. Rearranging and integrating from the start (<i>v</i> = <i>u</i> at <i>t</i> = 0) to time <i>t</i>:<br>∫<sub><i>u</i></sub><sup><i>v</i></sup> d<i>v</i> = ∫<sub>0</sub><sup><i>t</i></sup> <i>a</i> d<i>t</i> ⇒ <i>v</i> − <i>u</i> = <i>at</i> ⇒ <i>v</i> = <i>u</i> + <i>at</i>.<br>Why this step: acceleration is the rate of change of velocity; if that rate is constant, velocity grows linearly with time, gaining exactly <i>a</i> each second.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup> (from the area under the <i>v</i>–<i>t</i> graph).</b> Since velocity rises linearly from <i>u</i> to <i>v</i>, the <i>v</i>–<i>t</i> graph is a straight line, and displacement is the area beneath it — a rectangle of height <i>u</i> under a triangle: <i>s</i> = <i>ut</i> + (<i>v</i> − <i>u</i>)<i>t</i>/2 = <i>ut</i> + <i>at</i><sup>2</sup>/2, as <i>v</i> − <i>u</i> = <i>at</i>.',
      },
      { t: 'fig', id: 'p11-02-fig-2.6' },
      {
        t: 'p',
        html: '<b>Derivation 3 — <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> (eliminating time).</b> This time-independent form is what you reach for when <i>t</i> is neither given nor wanted. Use <i>v</i> d<i>v</i> = <i>a</i> d<i>s</i> (obtained from <i>a</i> = d<i>v</i>/d<i>t</i> = (d<i>v</i>/d<i>s</i>) · (d<i>s</i>/d<i>t</i>) = <i>v</i> d<i>v</i>/d<i>s</i>) and integrate:<br>∫<sub><i>u</i></sub><sup><i>v</i></sup> <i>v</i> d<i>v</i> = ∫<sub>0</sub><sup><i>s</i></sup> <i>a</i> d<i>s</i> ⇒ (<i>v</i><sup>2</sup> − <i>u</i><sup>2</sup>)/2 = <i>as</i> ⇒ <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>.<br>Why this step: it links velocities directly to displacement, sidestepping time entirely — perfect for stopping-distance problems.',
      },
      {
        t: 'p',
        html: '<b>Bonus — Galileo’s odd-number law.</b> For a body starting from rest (<i>u</i> = 0), the displacement in the <i>n</i><sup>th</sup> second is <i>s</i><sub><i>n</i>th</sub> = (<i>a</i>/2)(2<i>n</i> − 1), which is proportional to (2<i>n</i> − 1). So successive seconds give 1 ∶ 3 ∶ 5 ∶ 7 ∶ … — exactly the pattern Galileo measured for falling bodies four centuries ago.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A ball is dropped from rest from the top of a 45 m tall building. Taking <i>g</i> = 10 m/s<sup>2</sup> and ignoring air resistance, find (a) the time it takes to reach the ground and (b) its velocity just before impact.',
        steps: [
          '<b>Given:</b> <i>u</i> = 0, <i>h</i> = 45 m, <i>g</i> = 10 m/s<sup>2</sup> (take downward as positive).',
          '<b>Solution:</b> (a) Using <i>h</i> = <i>ut</i> + ½<i>gt</i><sup>2</sup> with <i>u</i> = 0:<br>45 = ½(10)<i>t</i><sup>2</sup> = 5<i>t</i><sup>2</sup> ⇒ <i>t</i><sup>2</sup> = 9 ⇒ <i>t</i> = 3 s.',
          '(b) Using <i>v</i> = <i>u</i> + <i>gt</i>:<br><i>v</i> = 0 + (10)(3) = 30 m/s (downward).',
        ],
        ans: '<i>t</i> = 3 s, <i>v</i> = 30 m/s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A car braking at a fixed deceleration stops in a distance <i>d</i> from a speed <i>v</i>. If it instead approaches at speed 2<i>v</i> (same deceleration), its stopping distance is:<br>(A) <i>d</i> (B) 2<i>d</i> (C) 3<i>d</i> (D) 4<i>d</i>',
        steps: [
          '<b>The trap:</b> “double the speed → double the distance,” so 2<i>d</i>. That linear instinct is wrong because braking distance grows with the <b>square</b> of speed.',
          '<b>Fast solution:</b> From <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> with final velocity 0, stopping distance <i>d</i> = <i>v</i><sup>2</sup>/(2<i>a</i>) ∝ <i>v</i><sup>2</sup>. Doubling <i>v</i> multiplies <i>d</i> by 2<sup>2</sup> = 4.',
          'Speed cue: whenever you see “speed doubled/tripled, same braking,” jump straight to the ratio <i>d</i> ∝ <i>v</i><sup>2</sup> — no numbers needed. This is also why highway speed limits matter so much: a small speed rise inflates stopping distance disproportionately.',
        ],
        ans: '(D) 4<i>d</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'From the top of a 25 m tower, a stone is thrown vertically upward with a speed of 20 m/s. Taking <i>g</i> = 10 m/s<sup>2</sup>, find (a) the maximum height the stone reaches above the ground, (b) the total time before it hits the ground, and (c) its speed on impact.',
        steps: [
          '<b>Why it’s multi-concept:</b> the stone rises above the launch point, then falls past it to the ground — you must handle the sign convention and a quadratic carefully.',
          '<b>Solution:</b> Take <b>up as positive</b>, with the origin at the launch point (top of tower). Then <i>u</i> = +20, <i>a</i> = −10, and the ground is at <i>s</i> = −25 m.',
          '(a) Maximum height above the launch point: at the top <i>v</i> = 0, so by <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>:<br>0 = 20<sup>2</sup> − 2(10)<i>H</i> ⇒ <i>H</i> = 400/20 = 20 m above the tower top.<br>Height above the ground = 25 + 20 = 45 m.',
          '(b) Position: <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup> = 20<i>t</i> − 5<i>t</i><sup>2</sup>. Set <i>s</i> = −25 (ground):<br>20<i>t</i> − 5<i>t</i><sup>2</sup> = −25 ⇒ <i>t</i><sup>2</sup> − 4<i>t</i> − 5 = 0 ⇒ (<i>t</i> − 5)(<i>t</i> + 1) = 0 ⇒ <i>t</i> = 5 s.',
          '(c) <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> = 20<sup>2</sup> − 2(10)(−25) = 400 + 500 = 900 ⇒ <i>v</i> = 30 m/s (downward).',
          'The negative root <i>t</i> = −1 s is discarded as unphysical (it’s the “time before launch” the math politely offers).',
        ],
        ans: '<i>H</i><sub>ground</sub> = 45 m, <i>t</i> = 5 s, <i>v</i> = 30 m/s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A ball is dropped from rest from a height <i>H</i>. During the <b>last second</b> of its fall it covers 9/25 of the total height <i>H</i>. Taking <i>g</i> = 10 m/s<sup>2</sup>, find the total time of fall and the height <i>H</i>.',
        steps: [
          '<b>Reasoning:</b> “Last second” means the interval from (<i>T</i> − 1) to <i>T</i>, where <i>T</i> is the total fall time. Express that interval’s distance as a fraction of the whole.',
          '<b>Solution:</b> From rest, distance fallen in time <i>t</i> is ½<i>gt</i><sup>2</sup>. So<br>(distance in last second)/<i>H</i> = (½<i>gT</i><sup>2</sup> − ½<i>g</i>(<i>T</i> − 1)<sup>2</sup>)/(½<i>gT</i><sup>2</sup>) = (<i>T</i><sup>2</sup> − (<i>T</i> − 1)<sup>2</sup>)/<i>T</i><sup>2</sup> = (2<i>T</i> − 1)/<i>T</i><sup>2</sup>.',
          'Set this equal to 9/25:<br>25(2<i>T</i> − 1) = 9<i>T</i><sup>2</sup> ⇒ 9<i>T</i><sup>2</sup> − 50<i>T</i> + 25 = 0.<br><i>T</i> = (50 ± √(2500 − 900))/18 = (50 ± 40)/18 ⇒ <i>T</i> = 5 s (or 5/9 s, rejected as < 1).',
          'Then <i>H</i> = ½<i>gT</i><sup>2</sup> = ½(10)(25) = 125 m.',
          'The rejected root is smaller than 1 s, so “the last second” wouldn’t even exist — a neat reminder to always test roots against the physics, not just the algebra.',
        ],
        ans: '<i>T</i> = 5 s, <i>H</i> = 125 m',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A car speeds up uniformly from 10 m/s to 25 m/s in 5 s. Find its acceleration and the distance covered.',
            a: '<i>a</i> = 3 m/s<sup>2</sup>, <i>s</i> = 87.5 m',
          },
          {
            q: '[NEET] A ball thrown vertically upward takes 2 s to reach its highest point (<i>g</i> = 10 m/s<sup>2</sup>). Find its initial speed and the maximum height.',
            a: '<i>u</i> = 20 m/s, <i>H</i> = 20 m',
          },
          {
            q: '[JEE Main] A body starts from rest with constant acceleration. Find the ratio of the distance it covers in the 3<sup>rd</sup> second to that in the 5<sup>th</sup> second.',
            a: '5 ∶ 9',
          },
          {
            q: '[JEE Main] A stone dropped from a cliff reaches the ground in 4 s (<i>g</i> = 10 m/s<sup>2</sup>). Find the height of the cliff and the stone’s speed on impact.',
            a: 'height 80 m, impact speed 40 m/s',
          },
          {
            q: '[JEE Advanced] A ball is thrown vertically upward from the ground with 30 m/s (<i>g</i> = 10 m/s<sup>2</sup>). For how long is the ball at a height of 40 m or more above the ground?',
            a: '2 s (from <i>t</i> = 2 s to <i>t</i> = 4 s).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The equation <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> can be applied only when:',
        opts: [
          { label: 'the acceleration varies with time', nudge: '(A) is the exact case where they fail.' },
          { label: 'the acceleration is uniform', nudge: null },
          { label: 'the initial velocity is zero', nudge: '(C) is unnecessary — <i>u</i> can be any value.' },
          { label: 'the motion is vertical', nudge: '(D) confuses the general equation with the special free-fall application; horizontal uniform acceleration works just as well.' },
        ],
        correct: 1,
        solution: 'All three equations of motion are derived assuming constant acceleration.',
      },
      {
        t: 'mcq',
        q: 'A body falling freely from rest covers distances in the 1<sup>st</sup>, 2<sup>nd</sup>, and 3<sup>rd</sup> seconds in the ratio:',
        opts: [
          { label: '1 ∶ 2 ∶ 3', nudge: '(A) is the ratio of the speeds (or times).' },
          { label: '1 ∶ 3 ∶ 5', nudge: null },
          { label: '1 ∶ 4 ∶ 9', nudge: '(C) is the seductive trap — that’s the ratio of total distances after 1, 2, 3 seconds (∝ <i>n</i><sup>2</sup>), not the distance in each second.' },
          { label: '1 ∶ 2 ∶ 4', nudge: '(D) fits no kinematic pattern.' },
        ],
        correct: 1,
        solution: 'By Galileo’s law, distances in successive seconds go as (2<i>n</i> − 1): 1, 3, 5. The (B)-vs-(C) confusion (distance in the nth second vs up to n seconds) is the most common error here.',
      },
      {
        t: 'mcq',
        q: 'A ball is thrown vertically upward with speed <i>u</i> and returns to the thrower’s hand (ignore air resistance). Which statement is correct?',
        opts: [
          { label: 'it returns with speed greater than <i>u</i>', nudge: '(A) violates energy conservation.' },
          { label: 'it returns with speed equal to <i>u</i>', nudge: null },
          { label: 'the time going up exceeds the time coming down', nudge: '(C) is false — the up and down times are equal.' },
          { label: 'its acceleration is zero at the highest point', nudge: '(D) is the classic trap: at the top the velocity is zero, but the acceleration is still <i>g</i> downward — gravity never turns off.' },
        ],
        correct: 1,
        solution: 'By symmetry (and energy conservation), it returns with the same speed <i>u</i>.',
      },
      {
        t: 'mcq',
        q: 'A car travelling at speed <i>v</i> stops in a distance <i>d</i> when the brakes are applied. If it travels at 3<i>v</i> with the same braking deceleration, the stopping distance becomes:',
        opts: [
          { label: '3<i>d</i>', nudge: '(A) assumes linear scaling — the standard mistake.' },
          { label: '6<i>d</i>', nudge: '(B) has no basis.' },
          { label: '9<i>d</i>', nudge: null },
          { label: '<i>d</i>/3', nudge: '(D) inverts the relationship entirely.' },
        ],
        correct: 2,
        solution: 'Stopping distance ∝ <i>v</i><sup>2</sup>, so tripling the speed gives 3<sup>2</sup> = 9 times the distance.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the equations when acceleration isn’t constant.</b> This is the cardinal error. If <i>a</i> depends on <i>t</i> or position, the three equations are simply invalid — go back to calculus.',
          '<b>Sign-convention chaos in free fall.</b> Mixing the signs of <i>u</i>, <i>a</i>, and <i>s</i> wrecks vertical-motion problems. Pick one positive direction and apply it to every quantity in the problem.',
          '<b>Confusing “distance in the <i>n</i><sup>th</sup> second” with “distance in <i>n</i> seconds.”</b> The first is <i>s</i><sub><i>n</i>th</sub> = <i>u</i> + (<i>a</i>/2)(2<i>n</i> − 1); the second is <i>s</i> = <i>un</i> + ½<i>an</i><sup>2</sup>. They are not the same number.',
          '<b>Believing acceleration is zero at the top of a throw.</b> Velocity is zero there; acceleration is still <i>g</i>. The ball doesn’t hang weightless — it’s about to fall.',
          '<b>Mixing <i>g</i> = 9.8 and <i>g</i> = 10 within one problem.</b> Read which value the question intends and use it consistently.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lock in “up = positive, <i>a</i> = −<i>g</i>” for every vertical problem and never re-decide mid-solution. For “speed doubled/tripled” braking questions, reach for the proportionality <i>d</i> ∝ <i>v</i><sup>2</sup> instead of recomputing from scratch. And when you need to find when a body is at a given height, set up the quadratic in <i>t</i> — the <b>two roots</b> are usually the moment it passes that height going up and again coming down, which is often the whole point of the question.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Three equations (constant <i>a</i> only)', note: '<i>v</i> = <i>u</i> + <i>at</i>, <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>, <i>s</i> = ((<i>u</i> + <i>v</i>)/2)<i>t</i>.' },
          { f: 'Distance in the <i>n</i><sup>th</sup> second', note: '<i>s</i><sub><i>n</i>th</sub> = <i>u</i> + (<i>a</i>/2)(2<i>n</i> − 1).' },
          { f: 'Free fall from rest', note: '<i>v</i> = <i>gt</i>, <i>h</i> = ½<i>gt</i><sup>2</sup>, <i>v</i><sup>2</sup> = 2<i>gh</i>.' },
          { f: 'Thrown up with <i>u</i>', note: '<i>H</i><sub>max</sub> = <i>u</i><sup>2</sup>/(2<i>g</i>), <i>t</i><sub>up</sub> = <i>u</i>/<i>g</i>, <i>t</i><sub>flight</sub> = 2<i>u</i>/<i>g</i>; returns with the same speed <i>u</i>.' },
          { f: 'Galileo’s odd numbers (from rest)', note: 'successive-second distances 1 ∶ 3 ∶ 5 ∶ 7 ∶ …' },
          { f: 'Stopping distance', note: '<i>d</i> = <i>v</i><sub>0</sub><sup>2</sup>/(2<i>a</i>) ∝ <i>v</i><sub>0</sub><sup>2</sup>.' },
          { f: 'Key reminders', note: '<i>g</i> ≈ 9.8 m/s<sup>2</sup> (use 10 for speed); at the top of a throw <i>v</i> = 0 but <i>a</i> = <i>g</i>; equations need <b>constant acceleration</b>.' },
        ],
        aids: [],
      },
    ],
  },
];
