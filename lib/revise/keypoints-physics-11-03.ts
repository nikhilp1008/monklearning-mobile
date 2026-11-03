/**
 * KEY POINTS for Physics Class 11, Chapter 3 (Motion in a Plane).
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
 * sheet's mnemonic, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. A vector is
 * its italic letter with no arrow (the app's fonts carry no combining arrow),
 * as in the Class 12 vector chapter; î, ĵ, k̂ are the axis unit vectors.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Vector Algebra and Resolution ──
  // pp. 133–134, 140
  {
    topic: 0,
    kind: 'remember',
    q: 'Vectors <i>A⃗</i> and <i>B⃗</i> at angle <i>θ</i>: the magnitude and direction of their resultant?',
    a: '<i>R</i> = √(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup> + 2<i>AB</i> cos <i>θ</i>), tan <i>α</i> = <i>B</i> sin <i>θ</i>/(<i>A</i> + <i>B</i> cos <i>θ</i>)',
    why: '<i>α</i> is the angle <i>R⃗</i> makes with <i>A⃗</i>; <i>θ</i> is taken with the vectors drawn tail-to-tail.',
    say: null,
  },
  // pp. 133, 140
  {
    topic: 0,
    kind: 'remember',
    q: 'A vector <i>A⃗</i> makes angle <i>θ</i> with the <i>x</i>-axis. Its components?',
    a: '<i>A</i><sub><i>x</i></sub> = <i>A</i> cos <i>θ</i>, <i>A</i><sub><i>y</i></sub> = <i>A</i> sin <i>θ</i>',
    why: 'And back: <i>A</i> = √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup>), tan <i>θ</i> = <i>A</i><sub><i>y</i></sub>/<i>A</i><sub><i>x</i></sub>.',
    say: null,
  },
  // pp. 133, 139
  {
    topic: 0,
    kind: 'mixup',
    q: 'Dot product or cross product: which gives a scalar, which a vector?',
    a: 'Dot gives a scalar (write a number); cross gives a vector (write components)',
    why: 'Dot = “how much along” (cos); cross = “how much across” (sin).',
    say: 'cos for components and dot; sin for cross.',
  },
  // p. 139
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is |<i>A⃗</i> + <i>B⃗</i>| = <i>A</i> + <i>B</i>?',
    a: 'Only when the vectors are parallel',
    why: 'For everything else, use components or the parallelogram law.',
    say: null,
  },
  // p. 139
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Two instant sanity checks after adding or resolving vectors?',
    a: '|<i>A</i> − <i>B</i>| ≤ <i>R</i> ≤ <i>A</i> + <i>B</i>; and √(<i>A</i><sub><i>x</i></sub><sup>2</sup> + <i>A</i><sub><i>y</i></sub><sup>2</sup>) must return the original magnitude',
    why: 'When in doubt, resolve into components: it scales to three or more vectors.',
    say: null,
  },

  // ── Topic 02 · Vector Products (Dot and Cross) ──
  // pp. 142, 148
  {
    topic: 1,
    kind: 'remember',
    q: 'The projection (scalar component) of <i>A⃗</i> along <i>B⃗</i>?',
    a: '<i>A⃗</i> · <i>B⃗</i>/<i>B</i> = <i>A</i> cos <i>θ</i>',
    why: 'The angle between them: cos <i>θ</i> = <i>A⃗</i> · <i>B⃗</i>/(<i>AB</i>).',
    say: null,
  },
  // pp. 142, 148
  {
    topic: 1,
    kind: 'remember',
    q: 'What does |<i>A⃗</i> × <i>B⃗</i>| equal geometrically?',
    a: 'The area of the parallelogram with sides <i>A⃗</i> and <i>B⃗</i>; the triangle’s area is ½|<i>A⃗</i> × <i>B⃗</i>|',
    why: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>; the direction is perpendicular to both, by the right-hand rule.',
    say: null,
  },
  // pp. 142, 147–148
  {
    topic: 1,
    kind: 'mixup',
    q: 'For non-zero vectors, which means perpendicular and which parallel: <i>A⃗</i> · <i>B⃗</i> = 0 or <i>A⃗</i> × <i>B⃗</i> = 0⃗?',
    a: '<i>A⃗</i> · <i>B⃗</i> = 0 ⇒ perpendicular; <i>A⃗</i> × <i>B⃗</i> = 0⃗ ⇒ parallel or antiparallel',
    why: 'Opposite conditions, easy to confuse.',
    say: 'Dot agrees (cos); cross turns (sin).',
  },
  // p. 147
  {
    topic: 1,
    kind: 'mistake',
    q: 'Expanding the 3 × 3 determinant for <i>A⃗</i> × <i>B⃗</i>: which term carries a minus sign?',
    a: 'The middle (<i>ĵ</i>) term',
    why: 'Dropping it is a frequent error.',
    say: null,
  },
  // p. 148
  {
    topic: 1,
    kind: 'shortcut',
    q: 'The fastest test that three vectors are coplanar?',
    a: 'Their scalar triple product <i>A⃗</i> · (<i>B⃗</i> × <i>C⃗</i>) is zero',
    why: 'And the sign of <i>A⃗</i> · <i>B⃗</i> tells you whether the angle is acute (+) or obtuse (−).',
    say: null,
  },

  // ── Topic 03 · Motion in a Plane — Two-Dimensional Kinematics ──
  // pp. 150, 155
  {
    topic: 2,
    kind: 'remember',
    q: 'Constant acceleration in a plane: the two equations of motion?',
    a: '<i>v⃗</i> = <i>v⃗</i><sub>0</sub> + <i>a⃗t</i> and <i>r⃗</i> = <i>r⃗</i><sub>0</sub> + <i>v⃗</i><sub>0</sub><i>t</i> + ½<i>a⃗t</i><sup>2</sup>, applied per component',
    why: 'If <i>a⃗</i> varies, return to <i>v⃗</i> = d<i>r⃗</i>/d<i>t</i> and <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i> and integrate.',
    say: null,
  },
  // pp. 155–156
  {
    topic: 2,
    kind: 'remember',
    q: 'The radius of curvature of a path at a point?',
    a: '<i>R</i> = <i>v</i><sup>2</sup>/<i>a</i><sub>⊥</sub>, where <i>a</i><sub>⊥</sub> is the perpendicular component of acceleration',
    why: 'In uniform circular motion, <i>a</i> points toward the centre with magnitude <i>v</i><sup>2</sup>/<i>r</i>.',
    say: null,
  },
  // p. 155
  {
    topic: 2,
    kind: 'mixup',
    q: 'In 2-D, average speed or the magnitude of average velocity: which uses the path length?',
    a: 'Average speed uses path length; average velocity uses straight-line displacement',
    why: 'They differ whenever the path is curved.',
    say: null,
  },
  // p. 155
  {
    topic: 2,
    kind: 'mistake',
    q: 'Velocity components <i>v</i><sub><i>x</i></sub> and <i>v</i><sub><i>y</i></sub>: what is the speed?',
    a: '√(<i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup>), never <i>v</i><sub><i>x</i></sub> + <i>v</i><sub><i>y</i></sub>',
    why: '<i>v</i><sub><i>x</i></sub> and <i>v</i><sub><i>y</i></sub> are perpendicular.',
    say: null,
  },
  // pp. 155–156
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you treat every plane-motion problem?',
    a: 'As two 1-D problems sharing a clock: resolve, solve each axis, then recombine',
    why: 'Resolve along convenient perpendicular axes, often along and across the acceleration.',
    say: 'Two motions, one clock — resolve, solve, recombine.',
  },

  // ── Topic 04 · Projectile Motion ──
  // pp. 158, 164
  {
    topic: 3,
    kind: 'remember',
    q: 'Launched at <i>u</i>, angle <i>θ</i>, from ground level: time of flight, maximum height and range?',
    a: '<i>T</i> = 2<i>u</i> sin <i>θ</i>/<i>g</i>, <i>H</i> = <i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>/(2<i>g</i>), <i>R</i> = <i>u</i><sup>2</sup> sin 2<i>θ</i>/<i>g</i>',
    why: '<i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/<i>g</i> at <i>θ</i> = 45°.',
    say: null,
  },
  // pp. 158, 164
  {
    topic: 3,
    kind: 'remember',
    q: 'The equation of a projectile’s trajectory?',
    a: '<i>y</i> = <i>x</i> tan <i>θ</i> − <i>gx</i><sup>2</sup>/(2<i>u</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>), a parabola',
    why: 'The horizontal velocity <i>u</i> cos <i>θ</i> is constant throughout.',
    say: null,
  },
  // p. 164
  {
    topic: 3,
    kind: 'mixup',
    q: 'At the top of the flight: the velocity and the acceleration?',
    a: 'Velocity <i>u</i> cos <i>θ</i>, horizontal (only <i>v</i><sub><i>y</i></sub> = 0); acceleration still <i>g</i> downward',
    why: 'Velocity and acceleration are independent: one can be (partly) zero while the other isn’t.',
    say: null,
  },
  // pp. 158, 164
  {
    topic: 3,
    kind: 'mistake',
    q: 'A body is fired horizontally from a height. Its initial vertical velocity?',
    a: 'Zero: its fall is identical to a dropped object',
    why: 'So <i>T</i> = √(2<i>h</i>/<i>g</i>) and <i>R</i> = <i>u</i>√(2<i>h</i>/<i>g</i>).',
    say: null,
  },
  // pp. 158, 164
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Launch angles <i>θ</i> and 90° − <i>θ</i> at the same speed: what do they share?',
    a: 'The same range; and <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = <i>u</i><sup>2</sup>/(2<i>g</i>)',
    why: 'Also <i>R</i> = 4<i>H</i> cot <i>θ</i>; at 45°, <i>R</i><sub>max</sub> = 4<i>H</i>.',
    say: 'Horizontal coasts, vertical falls — time ties them together.',
  },

  // ── Topic 05 · Relative Velocity in Two Dimensions ──
  // pp. 166, 172
  {
    topic: 4,
    kind: 'remember',
    q: 'River width <i>d</i>, boat speed <i>v</i><sub><i>b</i></sub>, current <i>v</i><sub><i>r</i></sub>. Aimed straight across: time and drift?',
    a: '<i>t</i><sub>min</sub> = <i>d</i>/<i>v</i><sub><i>b</i></sub>; drift = <i>v</i><sub><i>r</i></sub><i>d</i>/<i>v</i><sub><i>b</i></sub>',
    why: 'Ground speed √(<i>v</i><sub><i>b</i></sub><sup>2</sup> + <i>v</i><sub><i>r</i></sub><sup>2</sup>).',
    say: null,
  },
  // pp. 166, 172
  {
    topic: 4,
    kind: 'remember',
    q: 'To land directly opposite: where do you aim, and how long does the crossing take?',
    a: 'Upstream at sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub> from straight across; <i>t</i> = <i>d</i>/√(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>)',
    why: 'Possible only if <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>.',
    say: null,
  },
  // p. 171
  {
    topic: 4,
    kind: 'mixup',
    q: '“Minimum time” or “shortest path”: which heading for each?',
    a: 'Minimum time: aim straight across (but drift). Shortest path: aim upstream for zero drift (but take longer)',
    why: 'They need different headings: decide which the question asks.',
    say: 'Straight across = least time; angle upstream = no drift; umbrella tilts forward.',
  },
  // pp. 166, 171
  {
    topic: 4,
    kind: 'mistake',
    q: 'Walking at <i>v</i><sub><i>m</i></sub> through rain falling vertically at <i>v</i><sub>rain</sub>: which way does the umbrella tilt, and by how much?',
    a: 'Forward, at tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub> from the vertical',
    why: 'Walking over rain, not the reverse.',
    say: null,
  },
  // p. 172
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The fastest route to the closest approach of two moving bodies?',
    a: 'Jump into one body’s frame: the other moves in a straight line at the relative velocity; take the perpendicular distance',
    why: 'Then it’s pure geometry.',
    say: null,
  },

  // ── Topic 06 · Circular Motion Dynamics ──
  // pp. 174, 181
  {
    topic: 5,
    kind: 'remember',
    q: 'Centripetal acceleration and centripetal force?',
    a: '<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i> = <i>vω</i>, toward the centre; <i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i>',
    why: 'In uniform circular motion, <i>ω</i> = 2π/<i>T</i> = 2π<i>f</i> and <i>v</i> = <i>ωr</i>.',
    say: null,
  },
  // pp. 174, 181
  {
    topic: 5,
    kind: 'remember',
    q: 'In non-uniform circular motion, which two accelerations act?',
    a: 'Tangential <i>a</i><sub><i>t</i></sub> = <i>αr</i> (changes speed) and radial <i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> (changes direction)',
    why: 'They are perpendicular: net <i>a</i> = √(<i>a</i><sub><i>t</i></sub><sup>2</sup> + <i>a</i><sub><i>c</i></sub><sup>2</sup>).',
    say: null,
  },
  // pp. 180–181
  {
    topic: 5,
    kind: 'mixup',
    q: 'Centripetal or centrifugal: which belongs in a free-body diagram drawn from the ground?',
    a: 'Only the centripetal force, which points inward',
    why: '“Centrifugal force” is a pseudo-force that appears solely in the rotating frame.',
    say: null,
  },
  // pp. 180–181
  {
    topic: 5,
    kind: 'mistake',
    q: 'The string of a whirled stone breaks. Which way does it fly off?',
    a: 'Along the tangent, not along the radius',
    why: 'The inward force simply stops acting.',
    say: null,
  },
  // p. 181
  {
    topic: 5,
    kind: 'shortcut',
    q: 'The first question to ask in every circular-motion problem?',
    a: 'What real force is supplying the centripetal requirement? Set it equal to <i>mv</i><sup>2</sup>/<i>r</i>',
    why: '<i>a</i><sub><i>c</i></sub> ∝ <i>v</i><sup>2</sup>, so speed changes hit hard; always work angles in radians.',
    say: 'Speed steady, direction never — that’s why it accelerates inward.',
  },

  // ── Additional A · Projectiles That Do Not Land Where They Started ──
  // p. 183
  {
    topic: 6,
    kind: 'remember',
    q: 'Thrown at speed <i>u</i>, landing a depth <i>h</i> below the launch point: the impact speed?',
    a: '<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>gh</i>, whatever the launch angle',
    why: 'Energy alone; the horizontal range is still <i>R</i> = (<i>u</i> cos <i>θ</i>)<i>t</i>.',
    say: null,
  },
  // pp. 183–184
  {
    topic: 6,
    kind: 'remember',
    q: 'Up an incline of angle <i>β</i>: the launch angle for maximum range, and that range?',
    a: '<i>θ</i> = 45° + <i>β</i>/2 above the horizontal; <i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/[<i>g</i>(1 + sin <i>β</i>)]',
    why: 'Flight time on the incline: <i>T</i> = 2<i>u</i> sin(<i>θ</i> − <i>β</i>)/(<i>g</i> cos <i>β</i>).',
    say: null,
  },

  // ── Additional B · The Vertical Circle, Done Properly ──
  // pp. 186–187
  {
    topic: 7,
    kind: 'remember',
    q: 'A mass on a string of length <i>l</i>: the least speed at the lowest point to complete the vertical circle?',
    a: '<i>u</i><sub>min</sub> = √(5<i>gl</i>), since the top needs <i>v</i><sub>top</sub> ≥ √(<i>gl</i>)',
    why: 'With the loop completed, the tension at the bottom exceeds that at the top by 6<i>mg</i>.',
    say: null,
  },
  // p. 187
  {
    topic: 7,
    kind: 'remember',
    q: 'Launched from the bottom with 2<i>gl</i> < <i>u</i><sup>2</sup> < 5<i>gl</i>: what happens?',
    a: 'The string goes slack before the top: the particle leaves the circle and becomes a projectile',
    why: 'Below √(2<i>gl</i>) it merely oscillates; above √(5<i>gl</i>) it completes the loop.',
    say: null,
  },

  // ── Additional C · Banking With Friction: The Complete Safe-Speed Band ──
  // p. 189
  {
    topic: 8,
    kind: 'remember',
    q: 'A banked curve with friction <i>μ</i>: when is a car safe even at rest?',
    a: 'When tan <i>θ</i> ≤ <i>μ</i>: the legal band is then 0 ≤ <i>v</i> ≤ <i>v</i><sub>max</sub>',
    why: 'The bank is rough enough, for its slope, to hold a stationary car.',
    say: null,
  },
  // p. 189
  {
    topic: 8,
    kind: 'remember',
    q: 'How much friction does a car need at the design speed <i>v</i><sub>0</sub> = √(<i>rg</i> tan <i>θ</i>)?',
    a: 'None: the required friction there is zero, however slippery the road',
    why: 'With <i>μ</i> = 0, both <i>v</i><sub>max</sub> and <i>v</i><sub>min</sub> collapse to <i>v</i><sub>0</sub>.',
    say: null,
  },

  // ── Additional D · When the Current Wins, and Closest Approach by Geometry ──
  // pp. 191–192
  {
    topic: 9,
    kind: 'remember',
    q: 'The current beats the boat (<i>v</i><sub><i>b</i></sub> < <i>v</i><sub><i>r</i></sub>): the heading for least drift, and that drift?',
    a: 'Upstream of straight across at sin <i>θ</i> = <i>v</i><sub><i>b</i></sub>/<i>v</i><sub><i>r</i></sub>; <i>x</i><sub>min</sub> = <i>d</i>√(<i>v</i><sub><i>r</i></sub><sup>2</sup> − <i>v</i><sub><i>b</i></sub><sup>2</sup>)/<i>v</i><sub><i>b</i></sub>',
    why: 'Zero drift is impossible when <i>v</i><sub><i>b</i></sub> < <i>v</i><sub><i>r</i></sub>.',
    say: null,
  },
  // p. 192
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Relative position <i>r</i><sub>0</sub>, constant relative velocity <i>v</i>: the closest distance, without calculus?',
    a: '<i>s</i><sub>min</sub> = |<i>r⃗</i><sub>0</sub> × <i>v⃗</i>|/|<i>v⃗</i>|, reached at <i>t</i><sub>∗</sub> = −(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)/|<i>v⃗</i>|<sup>2</sup>',
    why: 'If <i>r⃗</i><sub>0</sub> · <i>v⃗</i> > 0, the bodies are separating: the closest approach is at <i>t</i> = 0.',
    say: null,
  },
];
