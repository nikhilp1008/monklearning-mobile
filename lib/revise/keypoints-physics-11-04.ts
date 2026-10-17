/**
 * KEY POINTS for Physics Class 11, Chapter 4 (Laws of Motion).
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
 * sheet's memory aid, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. A vector is
 * its italic letter with no arrow (the app's fonts carry no combining arrow),
 * as in the Class 12 vector chapter.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Newton's Laws and Impulse ──
  // pp. 197, 204
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the impulse–momentum theorem?',
    a: '<i>J</i> = Δ<i>p</i> = <i>mv</i><sub><i>f</i></sub> − <i>mv</i><sub><i>i</i></sub>',
    why: 'Impulse = ∫ <i>F</i> d<i>t</i> = the area under the force–time graph.',
    say: 'Big force, short time, same total kick.',
  },
  // pp. 197, 204
  {
    topic: 0,
    kind: 'remember',
    q: 'The average force during an impact?',
    a: '<i>F</i><sub>avg</sub> = Δ<i>p</i>/Δ<i>t</i>',
    why: 'Use impulse whenever a force is large, brief, or unknown.',
    say: null,
  },
  // p. 203
  {
    topic: 0,
    kind: 'mixup',
    q: 'Inertia and weight: which one changes on the Moon?',
    a: 'Weight, the gravitational force, changes with <i>g</i>; inertia depends only on mass and stays the same',
    why: 'A heavy crate is hard to push in space too: that’s inertia, not weight.',
    say: 'Inertia In, Force Changes, Pairs Push back',
  },
  // p. 203
  {
    topic: 0,
    kind: 'mistake',
    q: 'A ball hits a wall at speed <i>v</i> and rebounds at the same speed. Is its change in momentum zero?',
    a: 'No: its velocity changes sign, so Δ<i>p</i> = 2<i>mv</i>',
    why: 'Momentum and impulse are vectors: fix a positive direction before substituting numbers.',
    say: null,
  },
  // p. 204
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Your “impulse” comes out in joules or newtons. What does that tell you?',
    a: 'You have made an algebra error: impulse is in N s = kg m s<sup>−1</sup>, [M L T<sup>−1</sup>]',
    why: 'Impulse and momentum share the same unit, your built-in error detector.',
    say: null,
  },

  // ── Topic 02 · Momentum Conservation ──
  // pp. 206, 213
  {
    topic: 1,
    kind: 'remember',
    q: 'Two bodies collide and stick together. Their common velocity?',
    a: '<i>v</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'This is the perfectly inelastic case, <i>e</i> = 0.',
    say: null,
  },
  // pp. 206, 213
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the coefficient of restitution?',
    a: '<i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>): velocity of separation over velocity of approach',
    why: 'Dimensionless, 0 ≤ <i>e</i> ≤ 1: <i>e</i> = 1 perfectly elastic, <i>e</i> = 0 perfectly inelastic.',
    say: null,
  },
  // pp. 212–213
  {
    topic: 1,
    kind: 'mixup',
    q: 'In a collision with no external force: is momentum conserved? Kinetic energy?',
    a: 'Momentum in every collision; kinetic energy only when the collision is perfectly elastic',
    why: 'When a bullet embeds or clay sticks, KE is lost: use momentum for the impact.',
    say: 'Momentum Many, Energy Elastic',
  },
  // pp. 212–213
  {
    topic: 1,
    kind: 'mistake',
    q: 'A ball dropped from <i>h</i><sub>drop</sub> bounces back to <i>h</i><sub>rebound</sub>. Is <i>e</i> = <i>h</i><sub>rebound</sub>/<i>h</i><sub>drop</sub>?',
    a: 'No: <i>e</i> = √(<i>h</i><sub>rebound</sub>/<i>h</i><sub>drop</sub>), note the square root',
    why: '<i>e</i> compares speeds of separation and approach, not heights and not energies.',
    say: 'separate over approach.',
  },
  // p. 212
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A quick check on any collision or explosion answer?',
    a: 'Compute <i>v</i><sub>cm</sub> before and after: it must be identical',
    why: 'Internal forces can’t move the centre of mass; a mismatch means a sign or arithmetic error.',
    say: null,
  },

  // ── Topic 03 · Concurrent Forces and Equilibrium ──
  // pp. 215, 224
  {
    topic: 2,
    kind: 'remember',
    q: 'Lami’s theorem for three concurrent forces <i>P</i>, <i>Q</i>, <i>R</i> in equilibrium?',
    a: '<i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i>, with <i>α</i> the angle between <i>Q</i> and <i>R</i>',
    why: 'Each force pairs with the angle between the other two; <i>α</i> + <i>β</i> + <i>γ</i> = 360°.',
    say: 'each force loves the angle across from it.',
  },
  // pp. 215, 223–224
  {
    topic: 2,
    kind: 'remember',
    q: 'The pseudo-force in a frame accelerating at <i>a</i><sub>0</sub>?',
    a: '<i>F</i><sub>pseudo</sub> = −<i>ma</i><sub>0</sub>: magnitude <i>ma</i><sub>0</sub>, opposite to the frame’s acceleration',
    why: 'Add it only in a non-inertial (accelerating) frame, never in the ground frame.',
    say: null,
  },
  // pp. 215, 223
  {
    topic: 2,
    kind: 'mixup',
    q: 'A scale in a lift: its reading when the lift moves up at constant velocity, and when it accelerates upward?',
    a: 'Constant velocity: <i>R</i> = <i>mg</i>. Accelerating upward: <i>R</i> = <i>m</i>(<i>g</i> + <i>a</i>)',
    why: 'Accelerating downward, <i>R</i> = <i>m</i>(<i>g</i> − <i>a</i>); in free fall, <i>R</i> = 0.',
    say: 'Up adds, Down subtracts, Free-fall floats.',
  },
  // p. 223
  {
    topic: 2,
    kind: 'mistake',
    q: 'Your equilibrium algebra gives a negative tension. Do you report it?',
    a: 'No: that string would be slack, so the assumed configuration is impossible',
    why: 'Strings can only pull: rethink the geometry.',
    say: null,
  },
  // p. 223
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Exactly three forces in equilibrium: the fastest route?',
    a: 'Lami’s theorem, before grinding through components: usually a one-line solution',
    why: 'On an incline, resolve along and perpendicular to the slope.',
    say: null,
  },

  // ── Topic 04 · Friction ──
  // pp. 226, 234–235
  {
    topic: 3,
    kind: 'remember',
    q: 'The acceleration of a block sliding down a rough incline of angle <i>θ</i>?',
    a: '<i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ</i><sub><i>k</i></sub> cos <i>θ</i>)',
    why: 'Only if it actually slides: a block stays put if tan <i>θ</i> ≤ <i>μ</i><sub><i>s</i></sub>.',
    say: null,
  },
  // pp. 226, 235
  {
    topic: 3,
    kind: 'remember',
    q: 'The least force to drag a body on a rough horizontal floor, and its angle?',
    a: '<i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i>, applied at <i>θ</i> = <i>λ</i> = tan<sup>−1</sup> <i>μ</i>',
    why: 'The optimal drag angle equals the angle of friction <i>λ</i>.',
    say: null,
  },
  // pp. 226, 234–235
  {
    topic: 3,
    kind: 'mixup',
    q: 'Static or kinetic friction: which one is self-adjusting?',
    a: 'Static: it equals the applied force, up to <i>μ</i><sub><i>s</i></sub><i>N</i>. Kinetic is <i>μ</i><sub><i>k</i></sub><i>N</i> while sliding',
    why: '<i>μ</i><sub><i>s</i></sub> ≥ <i>μ</i><sub><i>k</i></sub>; static friction equals <i>μ</i><sub><i>s</i></sub><i>N</i> only at the verge of sliding.',
    say: 'Static is shy and self-adjusting; kinetic is constant and a little weaker.',
  },
  // p. 234
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does friction always oppose the motion of a body?',
    a: 'No: it opposes relative sliding between surfaces',
    why: 'Static friction is what lets you walk and what drives a car’s tyres forward.',
    say: null,
  },
  // pp. 234–235
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A body “just begins to slide” on an incline of angle <i>θ</i>. Its <i>μ</i><sub><i>s</i></sub>?',
    a: '<i>μ</i><sub><i>s</i></sub> = tan <i>θ</i>: no force resolution required',
    why: 'On any incline, first compare tan <i>θ</i> with <i>μ</i>: it tells you static or kinetic.',
    say: 'Repose = friction = tan<sup>−1</sup> <i>μ</i>.',
  },

  // ── Topic 05 · Circular Motion Dynamics (Banking) ──
  // pp. 237, 245
  {
    topic: 4,
    kind: 'remember',
    q: 'The maximum speed round a level, unbanked curve, with friction alone?',
    a: '<i>v</i><sub>max</sub> = √(<i>μ</i><sub><i>s</i></sub><i>rg</i>), independent of the vehicle’s mass',
    why: 'From <i>mv</i><sup>2</sup>/<i>r</i> ≤ <i>μ</i><sub><i>s</i></sub><i>mg</i>.',
    say: null,
  },
  // pp. 237, 246
  {
    topic: 4,
    kind: 'remember',
    q: 'Which one relation governs frictionless banking, a leaning cyclist and a conical pendulum?',
    a: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/(<i>rg</i>)',
    why: 'For banking it gives the design speed <i>v</i><sub>design</sub> = √(<i>rg</i> tan <i>θ</i>).',
    say: 'tan <i>θ</i> equals v-squared over r-g.',
  },
  // p. 246
  {
    topic: 4,
    kind: 'mixup',
    q: 'Is centrifugal force the reaction to centripetal force?',
    a: 'No: it is an outward pseudo-force, valid only in the rotating frame',
    why: 'Centripetal force is a role, not a new force: identify the real inward force.',
    say: 'The centre pulls, inertia flings.',
  },
  // p. 245
  {
    topic: 4,
    kind: 'mistake',
    q: 'Banking with friction: where do +<i>μ</i> and −<i>μ</i> tan <i>θ</i> go in <i>v</i><sub>max</sub>?',
    a: '+<i>μ</i> on top, −<i>μ</i> tan <i>θ</i> below: <i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))',
    why: 'The minimum flips both signs; setting <i>μ</i> = 0 should recover tan <i>θ</i> = <i>v</i><sup>2</sup>/(<i>rg</i>).',
    say: null,
  },
  // p. 245
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A quick check on a banking-with-friction speed range?',
    a: 'It must straddle the design speed √(<i>rg</i> tan <i>θ</i>): <i>v</i><sub>max</sub> larger, <i>v</i><sub>min</sub> smaller',
    why: 'If it doesn’t, you’ve made a sign error in the friction direction.',
    say: null,
  },

  // ── Topic 06 · Common Forces in Mechanics & Free-Body Diagrams ──
  // p. 249
  {
    topic: 5,
    kind: 'remember',
    q: 'Hooke’s law, and the dimensions of the spring constant?',
    a: '<i>F</i> = −<i>kx</i>, |<i>F</i>| = <i>kx</i>; [<i>k</i>] = N m<sup>−1</sup> = [M T<sup>−2</sup>]',
    why: 'Valid within the elastic limit only.',
    say: null,
  },
  // pp. 249–250, 254
  {
    topic: 5,
    kind: 'remember',
    q: 'A block is pulled by a rope at angle <i>θ</i> above the horizontal. The normal reaction?',
    a: '<i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i>, less than <i>mg</i>',
    why: 'Pushed at <i>θ</i> below the horizontal, <i>N</i> = <i>mg</i> + <i>F</i> sin <i>θ</i>.',
    say: '<i>N</i> is whatever balance demands — never assume <i>mg</i>.',
  },
  // pp. 249–250, 253
  {
    topic: 5,
    kind: 'mixup',
    q: 'Springs in series and in parallel: the equivalent constant?',
    a: 'Series: 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer). Parallel: <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer)',
    why: 'Quick check: more springs side by side must be harder to stretch.',
    say: null,
  },
  // p. 253
  {
    topic: 5,
    kind: 'mistake',
    q: 'An ideal string runs over an ideal pulley. Is the tension larger on the heavier side?',
    a: 'No: for a massless string and frictionless pulley, tension is one number throughout',
    why: 'It differs across a pulley only if the pulley has mass or friction.',
    say: null,
  },
  // p. 254
  {
    topic: 5,
    kind: 'shortcut',
    q: 'The first ten seconds of any mechanics problem?',
    a: 'Draw one clean free-body diagram per body, weight arrow first',
    why: 'Almost every wrong answer traces back to a missing or misdirected arrow.',
    say: 'Gravity pulls, surfaces push, strings tug, springs snap back.',
  },

  // ── Topic 07 · Connected Bodies, Pulleys & Constraint Relations ──
  // pp. 256, 261
  {
    topic: 6,
    kind: 'remember',
    q: 'Atwood machine (<i>m</i><sub>1</sub> > <i>m</i><sub>2</sub>): acceleration and tension?',
    a: '<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'Inside a frame accelerating at <i>a</i><sub>0</sub>, replace <i>g</i> by <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub>.',
    say: null,
  },
  // pp. 256, 261
  {
    topic: 6,
    kind: 'remember',
    q: 'Block <i>m</i><sub>1</sub> on a smooth table, <i>m</i><sub>2</sub> hanging: acceleration and tension?',
    a: '<i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'In general, with no friction, <i>a</i> = net driving force/total mass.',
    say: null,
  },
  // pp. 256, 260
  {
    topic: 6,
    kind: 'mixup',
    q: 'Single fixed pulley or movable pulley: the constraint?',
    a: 'Fixed: <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> (equal magnitudes). Movable: <i>a</i><sub>free end</sub> = 2<i>a</i><sub>load</sub>',
    why: 'A load on a movable pulley moves at half the free-end speed.',
    say: null,
  },
  // pp. 256, 260
  {
    topic: 6,
    kind: 'mistake',
    q: '<i>F</i> pushes <i>m</i><sub>1</sub>, which pushes <i>m</i><sub>2</sub>, on a smooth floor. Is the contact force <i>F</i>?',
    a: 'No: <i>N</i><sub>contact</sub> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'The internal force at a junction accelerates only the mass beyond that junction.',
    say: null,
  },
  // pp. 260–261
  {
    topic: 6,
    kind: 'shortcut',
    q: 'The fastest way to the acceleration of two connected bodies?',
    a: 'Write ∑<i>F</i> = <i>ma</i> for each, with consistent signs, and add them: the tension cancels',
    why: 'Then back-substitute for <i>T</i>.',
    say: 'Cut, draw, add — tension falls out.',
  },

  // ── Topic 08 · Vertical Circular Motion ──
  // pp. 263, 267–268
  {
    topic: 7,
    kind: 'remember',
    q: 'A vertical circle on a string: the tension at the bottom and at the top?',
    a: '<i>T</i><sub>bottom</sub> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>r</i> + <i>mg</i>; <i>T</i><sub>top</sub> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i> − <i>mg</i>',
    why: 'For a body completing the circle, <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>.',
    say: null,
  },
  // pp. 263, 267–268
  {
    topic: 7,
    kind: 'remember',
    q: 'How are the speeds at the bottom and the top of a vertical circle linked?',
    a: '<i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>, by energy conservation',
    why: 'The speed changes continuously: fastest at the bottom, slowest at the top.',
    say: null,
  },
  // pp. 263, 267–268
  {
    topic: 7,
    kind: 'mixup',
    q: 'String or rigid rod: the minimum speeds at the top and at the bottom?',
    a: 'String: <i>v</i><sub>top</sub> = √(<i>gr</i>), <i>v</i><sub>bottom</sub> = √(5<i>gr</i>). Rod: <i>v</i><sub>top</sub> = 0, <i>v</i><sub>bottom</sub> = 2√(<i>gr</i>)',
    why: 'A rod can push outward and support the body at the top.',
    say: 'Top needs root-<i>gr</i>, bottom needs root-5<i>gr</i>; the difference in tension is six <i>mg</i>.',
  },
  // pp. 267–268
  {
    topic: 7,
    kind: 'mistake',
    q: 'A body slides from the top of a smooth sphere. Where does it leave the surface?',
    a: 'At cos <i>θ</i> = 2/3 from the top: not at the top, and not at 90°',
    why: 'Found by <i>N</i> = 0 plus energy conservation; there <i>v</i> = √(2<i>gR</i>/3).',
    say: 'it lets go when the push hits zero.',
  },
  // p. 268
  {
    topic: 7,
    kind: 'shortcut',
    q: 'Which two equations crack every vertical-circle problem?',
    a: 'Newton’s law toward the centre at the point of interest, and energy conservation between two points',
    why: 'Toward the centre, combine the connector force with gravity’s radial component.',
    say: null,
  },

  // ── Additional A · Constraint Relations Beyond the Single Pulley ──
  // p. 270
  {
    topic: 8,
    kind: 'remember',
    q: 'A load hangs from a moving pulley held by <i>n</i> string segments. Its speed, and the force supporting it?',
    a: '<i>v</i><sub>load</sub> = <i>v</i><sub>string</sub>/<i>n</i>; the string supports it with a force <i>nT</i>',
    why: 'For <i>n</i> = 2 this is the movable pulley’s factor of two.',
    say: null,
  },
  // pp. 269–270
  {
    topic: 8,
    kind: 'shortcut',
    q: 'The reliable way to find the constraint in any pulley rig?',
    a: 'Write the string’s total length as a sum of its segments and differentiate twice: d<sup>2</sup><i>L</i>/d<i>t</i><sup>2</sup> = 0',
    why: 'Check with the power audit: ∑ <i>T</i><sub><i>j</i></sub> · <i>v</i><sub><i>j</i></sub> = 0.',
    say: null,
  },

  // ── Additional B · Stacked Blocks: When Does Friction Say "Together"? ──
  // p. 273
  {
    topic: 9,
    kind: 'remember',
    q: 'Block <i>m</i> on block <i>M</i>, smooth floor, force on the lower block: the largest <i>F</i> with no slipping?',
    a: '<i>F</i><sub>max</sub> = (<i>M</i> + <i>m</i>)<i>μ</i><sub>s</sub><i>g</i>',
    why: 'Slip begins at <i>a</i> = <i>μ</i><sub>s</sub><i>g</i>: the mass of the top block cancels.',
    say: null,
  },
  // pp. 272–273
  {
    topic: 9,
    kind: 'shortcut',
    q: 'Stacked blocks: how do you decide whether they move together?',
    a: 'Assume “together”, find the common <i>a</i>, work out the friction the driven block needs, and test <i>f</i><sub>req</sub> ≤ <i>μ</i><sub>s</sub><i>N</i>',
    why: 'If the test fails, they slip: use kinetic <i>μ</i><sub>k</sub><i>N</i> on each block.',
    say: null,
  },

  // ── Additional C · The Complete Force Budget on a Rough Incline ──
  // p. 275
  {
    topic: 10,
    kind: 'remember',
    q: 'A rough incline: the range of forces parallel to it that hold a block still?',
    a: '<i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>) ≤ <i>F</i> ≤ <i>mg</i>(sin <i>θ</i> + <i>μ</i><sub>s</sub> cos <i>θ</i>)',
    why: 'If tan <i>θ</i> ≤ <i>μ</i><sub>s</sub>, the block holds itself and the range opens at 0.',
    say: null,
  },
  // p. 276
  {
    topic: 10,
    kind: 'remember',
    q: 'The least force, at any angle, to hold a block on an incline, and to haul it up?',
    a: 'Hold: <i>mg</i> sin(<i>θ</i> − <i>λ</i>) (for <i>θ</i> > <i>λ</i>). Haul up: <i>mg</i> sin(<i>θ</i> + <i>λ</i>). Here tan <i>λ</i> = <i>μ</i><sub>s</sub>',
    why: 'The holding force presses into the plane at <i>λ</i>; the hauling force tilts away from it.',
    say: null,
  },

  // ── Additional D · Chains and Rockets: Variable Mass Done Exactly ──
  // p. 279
  {
    topic: 11,
    kind: 'remember',
    q: 'A chain of mass per length <i>λ</i> falls from rest onto a scale pan. The reading when a length <i>x</i> has landed?',
    a: '<i>R</i> = 3<i>λxg</i>: the pile’s weight <i>λxg</i> plus 2<i>λxg</i> for stopping the arrivals',
    why: 'Each link lands at <i>v</i> = √(2<i>gx</i>), so the flux term is <i>λv</i><sup>2</sup>.',
    say: null,
  },
  // p. 280
  {
    topic: 11,
    kind: 'remember',
    q: 'A rocket with exhaust speed <i>v</i><sub>rel</sub>, starting from rest, rises in uniform gravity (thrust > weight). Its speed a time <i>t</i> after launch, once its mass has dropped from <i>m</i><sub>0</sub> to <i>m</i>?',
    a: '<i>v</i> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>) − <i>gt</i>',
    why: 'Ignoring gravity, it is just <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>).',
    say: null,
  },
];
