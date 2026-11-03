/**
 * KEY POINTS for Physics Class 11, Chapter 2 (Motion in a Straight Line).
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
 * sheet's memory aid or mnemonic, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Kinematic Quantities ──
  // p. 82
  {
    topic: 0,
    kind: 'remember',
    q: 'Which is always at least as large: distance or |displacement|?',
    a: 'Distance ≥ |displacement|, and average speed ≥ |average velocity|',
    why: 'Equal only for unidirectional straight-line motion.',
    say: 'Distance is how far you walked; displacement is how far you ended up.',
  },
  // p. 82
  {
    topic: 0,
    kind: 'remember',
    q: 'Instantaneous velocity and acceleration, as derivatives?',
    a: '<i>v</i><sub>inst</sub> = d<i>x</i>/d<i>t</i>; <i>a</i> = d<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup>',
    why: '<i>v</i><sub>inst</sub> is the slope of the <i>x</i>–<i>t</i> tangent.',
    say: null,
  },
  // pp. 77, 82
  {
    topic: 0,
    kind: 'mixup',
    q: 'Average speed at <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub>: equal distances vs equal times?',
    a: 'Equal distances: 2<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>), harmonic. Equal times: (<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)/2, arithmetic',
    why: 'Two equal stretches at 40 and 60 km/h average 48 km/h, not 50.',
    say: null,
  },
  // pp. 76, 82
  {
    topic: 0,
    kind: 'mistake',
    q: 'If <i>v</i> = 0 at an instant, is <i>a</i> = 0?',
    a: 'No. At a turning point the body is momentarily at rest yet still accelerating',
    why: 'At the top of a thrown ball’s flight, acceleration is still <i>g</i> downward.',
    say: null,
  },
  // p. 82
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Fastest way to the average velocity over a wiggly path?',
    a: '(<i>x</i><sub>final</sub> − <i>x</i><sub>initial</sub>)/total time: endpoints only',
    why: 'For distance, split the time axis where <i>v</i> changes sign before integrating.',
    say: null,
  },

  // ── Topic 02 · Graphical Analysis ──
  // p. 94
  {
    topic: 1,
    kind: 'remember',
    q: 'What do the slope and the area of a <i>v</i>–<i>t</i> graph give?',
    a: 'Slope = acceleration; area = displacement (with signs)',
    why: 'Sum of |each area| = distance; a line crossing the time axis means direction reversal.',
    say: null,
  },
  // p. 94
  {
    topic: 1,
    kind: 'remember',
    q: 'On an <i>x</i>–<i>t</i> graph, what does each shape mean?',
    a: 'Slope = velocity. Flat → at rest; straight slope → uniform velocity; concave up → +<i>a</i>; concave down → −<i>a</i>',
    why: 'On an <i>a</i>–<i>t</i> graph, area = change in velocity Δ<i>v</i>.',
    say: null,
  },
  // p. 94
  {
    topic: 1,
    kind: 'mixup',
    q: 'A rising line on an <i>x</i>–<i>t</i> graph and on a <i>v</i>–<i>t</i> graph: same meaning?',
    a: 'No. Rising <i>x</i>–<i>t</i>: moving in the + direction. Rising <i>v</i>–<i>t</i>: accelerating',
    why: 'Same shape, different meaning.',
    say: null,
  },
  // pp. 85, 94
  {
    topic: 1,
    kind: 'mistake',
    q: 'You add every area under a <i>v</i>–<i>t</i> graph as positive. What have you found?',
    a: 'Distance, not displacement',
    why: 'Area below the time axis is negative for displacement.',
    say: null,
  },
  // p. 94
  {
    topic: 1,
    kind: 'shortcut',
    q: 'What is the one ladder for motion graphs?',
    a: 'Slope steps down (<i>x</i> → <i>v</i> → <i>a</i>); area climbs up (<i>a</i> → <i>v</i> → <i>x</i>)',
    why: 'Going up the ladder needs the initial value.',
    say: 'Slope steps Down, Area climbs Up.',
  },

  // ── Topic 03 · Equations of Motion and Free Fall ──
  // p. 102
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the three equations of motion?',
    a: '<i>v</i> = <i>u</i> + <i>at</i>, <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>',
    why: 'Constant <i>a</i> only.',
    say: null,
  },
  // p. 102
  {
    topic: 2,
    kind: 'remember',
    q: 'Thrown up with speed <i>u</i>: maximum height, time to the top, flight time?',
    a: '<i>H</i><sub>max</sub> = <i>u</i><sup>2</sup>/(2<i>g</i>), <i>t</i><sub>up</sub> = <i>u</i>/<i>g</i>, <i>t</i><sub>flight</sub> = 2<i>u</i>/<i>g</i>',
    why: 'It returns with the same speed <i>u</i>.',
    say: null,
  },
  // p. 101
  {
    topic: 2,
    kind: 'mixup',
    q: 'Falling from rest: distances in the 1st, 2nd, 3rd seconds, and in the first 1, 2, 3 seconds?',
    a: 'In each second: 1 : 3 : 5 (Galileo). Up to 1, 2, 3 seconds: 1 : 4 : 9 (∝ <i>n</i><sup>2</sup>)',
    why: 'Distance in the <i>n</i>th second vs up to <i>n</i> seconds is the most common error here.',
    say: null,
  },
  // p. 101
  {
    topic: 2,
    kind: 'mistake',
    q: 'In a vertical-motion problem, how do you sign <i>u</i>, <i>a</i> and <i>s</i>?',
    a: 'Pick one positive direction and apply it to every quantity in the problem',
    why: 'Mixing the signs of <i>u</i>, <i>a</i> and <i>s</i> wrecks vertical-motion problems.',
    say: null,
  },
  // p. 101
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Same braking, speed tripled: what happens to the stopping distance?',
    a: 'It becomes 9 times: <i>d</i> = <i>v</i><sub>0</sub><sup>2</sup>/(2<i>a</i>) ∝ <i>v</i><sub>0</sub><sup>2</sup>',
    why: 'Reach for <i>d</i> ∝ <i>v</i><sup>2</sup> instead of recomputing from scratch.',
    say: null,
  },

  // ── Topic 04 · Relative Velocity ──
  // pp. 104, 110
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the velocity of A relative to B, along a line?',
    a: '<i>v</i><sub><i>AB</i></sub> = <i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>, with signs; and <i>v</i><sub><i>AB</i></sub> = −<i>v</i><sub><i>BA</i></sub>',
    why: 'It is the velocity of A as seen from B.',
    say: null,
  },
  // pp. 104, 110
  {
    topic: 3,
    kind: 'remember',
    q: 'Two trains crossing each other: what distance must be covered?',
    a: 'The sum of their lengths, at the relative speed',
    why: 'A train passing a point covers one length.',
    say: null,
  },
  // pp. 104, 110
  {
    topic: 3,
    kind: 'mixup',
    q: 'Same direction or opposite: subtract or add the speeds?',
    a: 'Same direction → subtract; opposite directions → add',
    why: 'Relative speed = |<i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>| or <i>v</i><sub><i>A</i></sub> + <i>v</i><sub><i>B</i></sub>.',
    say: 'Same way, subtract; opposite, add.',
  },
  // p. 109
  {
    topic: 3,
    kind: 'mistake',
    q: 'Two stones fall with the same <i>g</i>. Does the gap between them stay constant?',
    a: 'No. Equal accelerations keep the relative velocity constant, so the separation changes linearly',
    why: 'A constant relative velocity makes the separation grow steadily.',
    say: null,
  },
  // p. 109
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Two bodies in free fall: how long before they meet?',
    a: '<i>a</i><sub>rel</sub> = 0, so time to meet = (initial separation) ÷ (relative speed of approach)',
    why: 'No quadratic required.',
    say: null,
  },

  // ── Topic 05 · Motion with Variable Acceleration (Calculus) ──
  // p. 118
  {
    topic: 4,
    kind: 'remember',
    q: 'If <i>a</i> = <i>f</i>(<i>t</i>), how do you find <i>v</i> and <i>x</i>?',
    a: '<i>v</i> = <i>v</i><sub>0</sub> + ∫ <i>a</i> d<i>t</i>, then <i>x</i> = <i>x</i><sub>0</sub> + ∫ <i>v</i> d<i>t</i>',
    why: 'Every integration needs an initial condition; prefer definite integrals with limits.',
    say: null,
  },
  // p. 118
  {
    topic: 4,
    kind: 'remember',
    q: 'If <i>a</i> = <i>f</i>(<i>x</i>), how do you find <i>v</i>?',
    a: '<i>v</i> d<i>v</i> = <i>f</i>(<i>x</i>) d<i>x</i>, so (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = ∫ <i>f</i>(<i>x</i>) d<i>x</i>',
    why: 'Constant <i>a</i> in <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i> gives back <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>.',
    say: null,
  },
  // pp. 117–118
  {
    topic: 4,
    kind: 'mixup',
    q: '<i>v</i> is given as <i>v</i>(<i>x</i>). Is the acceleration d<i>v</i>/d<i>x</i>?',
    a: 'No: <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>, not d<i>v</i>/d<i>x</i>',
    why: 'Forgetting the factor of <i>v</i> is the most common single slip here.',
    say: null,
  },
  // p. 117
  {
    topic: 4,
    kind: 'mistake',
    q: '<i>a</i> depends on <i>t</i>. Can you use <i>v</i> = <i>u</i> + <i>at</i>?',
    a: 'No. Once <i>a</i> depends on <i>t</i>, <i>v</i> or <i>x</i>, the three equations are invalid: integrate from the definitions',
    why: 'This is the defining error of the sub-topic.',
    say: null,
  },
  // p. 118
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The first question to ask in any variable-acceleration problem?',
    a: 'Does <i>a</i> depend on <i>t</i>, <i>v</i> or <i>x</i>?',
    why: '<i>t</i> ⇒ integrate <i>a</i> d<i>t</i>; <i>v</i> with time ⇒ ∫ d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>t</i>; <i>v</i> or <i>x</i> without time ⇒ <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>.',
    say: 'Diagnose the dependence (<i>t</i>, <i>v</i>, or <i>x</i>), then integrate. Position-dependent? <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>.',
  },

  // ── Additional A · Averaging Speeds ──
  // p. 119
  {
    topic: 5,
    kind: 'remember',
    q: 'Average speed over <i>n</i> equal distances at <i>v</i><sub>1</sub>, …, <i>v</i><sub><i>n</i></sub>?',
    a: 'The harmonic mean: <i>n</i>/(1/<i>v</i><sub>1</sub> + ⋯ + 1/<i>v</i><sub><i>n</i></sub>)',
    why: 'There is exactly one law: average speed is total distance over total time.',
    say: null,
  },
  // p. 120
  {
    topic: 5,
    kind: 'remember',
    q: 'Does a halt count in the average speed?',
    a: 'Yes. It adds zero distance but nonzero time: total time must include every stop',
    why: 'Forgetting this is the single most common error in board-level journey problems.',
    say: null,
  },

  // ── Additional B · Two Averages of Velocity ──
  // p. 122
  {
    topic: 6,
    kind: 'remember',
    q: 'Constant acceleration from <i>u</i> to <i>v</i>: the time-average and the space-average of velocity?',
    a: 'Time-average (<i>u</i> + <i>v</i>)/2; space-average 2(<i>v</i><sup>2</sup> + <i>uv</i> + <i>u</i><sup>2</sup>)/(3(<i>u</i> + <i>v</i>))',
    why: 'The space-average is always the larger, and it is not the average velocity of a journey.',
    say: null,
  },
  // p. 123
  {
    topic: 6,
    kind: 'remember',
    q: 'From rest at constant acceleration: times for successive equal distances?',
    a: '1 : (√2 − 1) : (√3 − √2) : …',
    why: 'Equal times give successive distances 1 : 3 : 5 : 7 : … (Galileo).',
    say: null,
  },

  // ── Additional C · Vertical Flight ──
  // p. 125
  {
    topic: 7,
    kind: 'remember',
    q: 'Thrown up at <i>u</i>, a ball is at height <i>h</i> at <i>t</i><sub>1</sub> and <i>t</i><sub>2</sub>. Their product and sum?',
    a: '<i>t</i><sub>1</sub><i>t</i><sub>2</sub> = 2<i>h</i>/<i>g</i>; <i>t</i><sub>1</sub> + <i>t</i><sub>2</sub> = 2<i>u</i>/<i>g</i> = <i>T</i>',
    why: 'The product is independent of <i>u</i>: the favourite MCQ payoff.',
    say: null,
  },
  // p. 125
  {
    topic: 7,
    kind: 'remember',
    q: 'One ball dropped from a tower of height <i>H</i> as another is thrown up from its foot at <i>u</i>. When do they meet, and in mid-air?',
    a: '<i>t</i><sub>meet</sub> = <i>H</i>/<i>u</i>; they meet in mid-air only if <i>u</i><sup>2</sup> ≥ <i>gH</i>/2',
    why: 'Both accelerate at <i>g</i>, so <i>a</i><sub>rel</sub> = 0 and the gap closes at the constant rate <i>u</i>.',
    say: null,
  },

  // ── Additional D · Pursuit, Crossing Under Acceleration, and the Catch Condition ──
  // p. 127
  {
    topic: 8,
    kind: 'remember',
    q: 'A chaser has <i>a</i><sub>rel</sub> > 0. Does it catch up?',
    a: 'Always, however negative <i>u</i><sub>rel</sub>: the gap may widen first, but not forever',
    why: 'With <i>a</i><sub>rel</sub> = 0 it catches only if <i>u</i><sub>rel</sub> > 0, at <i>t</i> = <i>s</i><sub>0</sub>/<i>u</i><sub>rel</sub>.',
    say: null,
  },
  // p. 127
  {
    topic: 8,
    kind: 'remember',
    q: 'Two bodies approach head-on at <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub>, gap <i>d</i>, each braking at <i>a</i>. When do they collide?',
    a: 'If and only if (<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>)/(2<i>a</i>) > <i>d</i>',
    why: 'The sum of the stopping distances exceeds the gap.',
    say: null,
  },

  // ── Additional E · Velocity-Dependent Drag ──
  // pp. 130–131
  {
    topic: 9,
    kind: 'remember',
    q: 'Under which drag law does a body travel a finite total distance?',
    a: 'Linear drag, <i>a</i> = −<i>kv</i>: <i>x</i> → <i>u</i>/<i>k</i>',
    why: 'Quadratic drag: <i>x</i> = (1/<i>k</i>) ln(1 + <i>ukt</i>) → ∞, growing only logarithmically.',
    say: null,
  },
  // p. 129
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Terminal speed for a fall with <i>a</i> = <i>g</i> − <i>kv</i>?',
    a: 'Set <i>a</i> = 0: <i>v</i><sub>term</sub> = <i>g</i>/<i>k</i>',
    why: 'No integration needed.',
    say: null,
  },
];
