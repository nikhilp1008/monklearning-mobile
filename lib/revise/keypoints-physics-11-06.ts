/**
 * KEY POINTS for Physics Class 11, Chapter 6 (System of Particles and
 * Rotational Motion).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aid, word for word. Chapter Foundations has a cheat sheet
 * but no pitfalls, pro-tip or memory aid, so it has three points.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. A vector
 * carries its arrow (<i>τ⃗</i>), as in the chapter; î, ĵ, k̂ are the axis
 * unit vectors. Subscripts are italic where the book sets them italic
 * (<i>cm</i>, <i>ext</i> in the topics) and upright where it does not (the
 * Additional topics).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Chapter Foundations: Rigid Bodies & Types of Motion ──
  // pp. 364, 367
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a rigid body?',
    a: 'An idealised object in which the distance between any two particles stays exactly the same, whatever forces act on it',
    why: 'It never stretches, compresses, or bends.',
    say: null,
  },
  // pp. 365, 367
  {
    topic: 0,
    kind: 'remember',
    q: 'The three types of motion of a rigid body?',
    a: 'Pure translation, pure rotation about a fixed axis, and general (combined) motion',
    why: 'General motion is translation of the CoM + rotation about the CoM, e.g. rolling.',
    say: null,
  },
  // pp. 365, 367
  {
    topic: 0,
    kind: 'mixup',
    q: 'Pure translation or pure rotation: in which do all particles share the same velocity?',
    a: 'Pure translation. In pure rotation they share the same angular speed, but <i>v</i> = <i>rω</i>',
    why: 'In rotation, particles farther from the axis move faster.',
    say: null,
  },

  // ── Topic 02 · Center of Mass ──
  // pp. 369, 377
  {
    topic: 1,
    kind: 'remember',
    q: 'The centre of mass of two particles on a line?',
    a: '<i>x</i><sub><i>cm</i></sub> = (<i>m</i><sub>1</sub><i>x</i><sub>1</sub> + <i>m</i><sub>2</sub><i>x</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'In general <i>r⃗</i><sub><i>cm</i></sub> = (1/<i>M</i>) ∑ <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub>; for a continuous body, (1/<i>M</i>) ∫ <i>r⃗</i> d<i>m</i>.',
    say: null,
  },
  // pp. 370–371, 377
  {
    topic: 1,
    kind: 'remember',
    q: 'The law that governs the motion of a system’s centre of mass?',
    a: '<i>F⃗</i><sub><i>ext</i></sub> = <i>Ma⃗</i><sub><i>cm</i></sub>: internal forces never move the CoM',
    why: 'With zero external force, <i>v⃗</i><sub><i>cm</i></sub> is constant: the total momentum <i>Mv⃗</i><sub><i>cm</i></sub> is conserved.',
    say: 'Internal can’t move it: explosions, recoils, walking-on-boat → freeze the CoM first.',
  },
  // pp. 377–378
  {
    topic: 1,
    kind: 'mixup',
    q: 'Semicircular wire or semicircular disc: how far from the centre is the centre of mass?',
    a: 'Wire (arc): 2<i>R</i>/<i>π</i>. Filled disc: 4<i>R</i>/(3<i>π</i>)',
    why: 'Examiners deliberately offer both as options.',
    say: 'WAR: Wire is 2<i>R</i>/<i>π</i>, Area (disc) is 4<i>R</i>/3<i>π</i>.',
  },
  // pp. 377–378
  {
    topic: 1,
    kind: 'mistake',
    q: 'A piece is cut out of a body. How does it enter the CoM formula?',
    a: 'As a negative mass, in both the numerator and the denominator',
    why: 'Drop a sign and your CoM flips to the wrong side.',
    say: null,
  },
  // p. 377
  {
    topic: 1,
    kind: 'shortcut',
    q: '“Removed portion” problem: which way does the CoM shift?',
    a: 'Always away from the hole',
    why: 'A quick direction check before computing catches half of all sign mistakes.',
    say: null,
  },

  // ── Topic 03 · Vector Product of Two Vectors ──
  // pp. 380, 385
  {
    topic: 2,
    kind: 'remember',
    q: 'The magnitude and direction of <i>A⃗</i> × <i>B⃗</i>?',
    a: '<i>AB</i> sin <i>θ</i>, along <i>n̂</i>: perpendicular to both <i>A⃗</i> and <i>B⃗</i>, by the right-hand rule',
    why: 'Its magnitude is the area of the parallelogram on <i>A⃗</i>, <i>B⃗</i>; the triangle is ½|<i>A⃗</i> × <i>B⃗</i>|.',
    say: null,
  },
  // pp. 380, 385
  {
    topic: 2,
    kind: 'remember',
    q: 'The cross products of the unit vectors?',
    a: '<i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i>; the reverse order gives −',
    why: '<i>î</i> × <i>î</i> = <i>ĵ</i> × <i>ĵ</i> = <i>k̂</i> × <i>k̂</i> = 0⃗.',
    say: 'i, j, k go round in a ring: forward around the ring is positive; going backward picks up a minus sign.',
  },
  // p. 385
  {
    topic: 2,
    kind: 'mixup',
    q: 'Dot and cross product: which uses sin <i>θ</i>, and when is each largest?',
    a: 'Cross: sin <i>θ</i>, largest when perpendicular. Dot: cos <i>θ</i>, largest when parallel',
    why: 'Dot gives a scalar; cross gives a vector.',
    say: 'Cross is perpendicular, sine of the angle.',
  },
  // p. 384
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is <i>A⃗</i> × <i>B⃗</i> = <i>B⃗</i> × <i>A⃗</i>?',
    a: 'No: <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; reversing the order flips the sign',
    why: 'A costly slip in torque problems, where direction decides clockwise vs anticlockwise.',
    say: null,
  },
  // p. 385
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A five-second check after any cross-product calculation?',
    a: 'Dot the result with one of the original vectors: you must get zero',
    why: 'For two vectors in the <i>xy</i>-plane, only the <i>k̂</i> component (<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>y</i></sub> − <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>x</i></sub>) is non-zero.',
    say: null,
  },

  // ── Topic 04 · Torque and Angular Momentum ──
  // pp. 387, 396
  {
    topic: 3,
    kind: 'remember',
    q: 'The torque of a force about a point, and its magnitude?',
    a: '<i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i>, |<i>τ⃗</i>| = <i>rF</i> sin <i>θ</i> = <i>r</i><sub>⊥</sub><i>F</i>',
    why: '<i>r</i><sub>⊥</sub> = <i>r</i> sin <i>θ</i> is the moment arm: only the perpendicular force turns things.',
    say: 'Same point, every step: pick one reference point at the start of a torque/<i>L</i> problem and never switch.',
  },
  // pp. 387–388, 396
  {
    topic: 3,
    kind: 'remember',
    q: 'The rotational form of Newton’s second law, and when is angular momentum conserved?',
    a: '<i>τ⃗</i><sub><i>net</i></sub> = <i>Iα⃗</i> = d<i>L⃗</i>/d<i>t</i>; <i>L⃗</i> is constant when <i>τ⃗</i><sub><i>ext</i></sub> = 0⃗',
    why: 'Then <i>I</i><sub>1</sub><i>ω</i><sub>1</sub> = <i>I</i><sub>2</sub><i>ω</i><sub>2</sub>: skater, planets, coupling wheels.',
    say: null,
  },
  // pp. 388, 395
  {
    topic: 3,
    kind: 'mixup',
    q: 'Torque and energy both come out as N · m. How is each reported?',
    a: 'Torque, a vector, in N · m; energy, a scalar, in joules',
    why: 'Never write torque in joules.',
    say: null,
  },
  // pp. 395–396
  {
    topic: 3,
    kind: 'mistake',
    q: 'A skater pulls in her arms and spins faster. Are angular momentum and kinetic energy both conserved?',
    a: 'No: <i>L</i> is conserved, but kinetic energy is not',
    why: 'Reach for energy conservation only when the process is genuinely lossless.',
    say: null,
  },
  // p. 395
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A bullet hits a pivoted rod. About which point do you take angular momentum?',
    a: 'Always about the pivot or hinge',
    why: 'The unknown impulsive reaction there has zero moment arm, so it drops out automatically.',
    say: null,
  },

  // ── Topic 05 · Equilibrium of a Rigid Body ──
  // pp. 398, 406
  {
    topic: 4,
    kind: 'remember',
    q: 'The two conditions for equilibrium of a rigid body?',
    a: '∑<i>F⃗</i><sub><i>ext</i></sub> = 0⃗ (translational) and ∑<i>τ⃗</i><sub><i>ext</i></sub> = 0⃗ (rotational)',
    why: 'In two dimensions: ∑<i>F</i><sub><i>x</i></sub> = 0, ∑<i>F</i><sub><i>y</i></sub> = 0, ∑<i>τ</i> = 0.',
    say: 'Slide and spin, kill them both.',
  },
  // pp. 398, 406
  {
    topic: 4,
    kind: 'remember',
    q: 'The mechanical advantage of a lever?',
    a: 'M.A. = Load/Effort = Effort arm/Load arm',
    why: 'From the principle of moments, <i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub>. M.A. is dimensionless.',
    say: null,
  },
  // pp. 399, 406
  {
    topic: 4,
    kind: 'mixup',
    q: 'Stable, unstable or neutral equilibrium: what does the CG do on a small disturbance?',
    a: 'Stable: the CG rises. Unstable: it falls. Neutral: it stays at the same height',
    why: 'A cone on its base, on its apex, on its side.',
    say: null,
  },
  // p. 406
  {
    topic: 4,
    kind: 'mistake',
    q: 'A rod or plank has appreciable weight. Can you leave it out of the torque equation?',
    a: 'No: its weight acts at its centre of gravity and must enter the torque equation',
    why: 'Especially when the pivot is off-centre.',
    say: null,
  },
  // p. 406
  {
    topic: 4,
    kind: 'shortcut',
    q: '“Find the reaction” problem: about which point do you take torques?',
    a: 'The point where the unknown you care least about acts: it disappears',
    why: 'You then solve for the one you want in a single step.',
    say: 'Pivot on the unknown.',
  },

  // ── Topic 06 · Moment of Inertia ──
  // pp. 408, 417
  {
    topic: 5,
    kind: 'remember',
    q: 'The theorems of parallel and perpendicular axes?',
    a: 'Parallel (any body): <i>I</i> = <i>I</i><sub><i>cm</i></sub> + <i>Md</i><sup>2</sup>. Perpendicular (laminae only): <i>I</i><sub><i>z</i></sub> = <i>I</i><sub><i>x</i></sub> + <i>I</i><sub><i>y</i></sub>',
    why: '<i>d</i> is the distance between the two parallel axes; <i>x</i> and <i>y</i> lie in the plane of the lamina.',
    say: 'Perpendicular = Pancake.',
  },
  // pp. 408, 417
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the radius of gyration?',
    a: '<i>k</i> = √(<i>I</i>/<i>M</i>), so <i>I</i> = <i>Mk</i><sup>2</sup>',
    why: 'The single distance at which the whole mass could be concentrated to give the same <i>I</i>.',
    say: null,
  },
  // pp. 409, 417
  {
    topic: 5,
    kind: 'mixup',
    q: 'A disc about its centre and about a diameter; a solid sphere and a shell?',
    a: 'Disc: ½<i>MR</i><sup>2</sup> about the centre, ¼<i>MR</i><sup>2</sup> about a diameter. Solid sphere: (2/5)<i>MR</i><sup>2</sup>; shell: (2/3)<i>MR</i><sup>2</sup>',
    why: 'Build a clean mental table and rehearse it.',
    say: 'Far mass is costly: ring beats disc, hollow beats solid.',
  },
  // p. 417
  {
    topic: 5,
    kind: 'mistake',
    q: 'A square rotates about its centre. Is <i>r</i> for a corner mass half the side?',
    a: 'No: it is half the diagonal, the perpendicular distance from the axis',
    why: 'Never the distance from the centre of mass or from a random point.',
    say: null,
  },
  // p. 417
  {
    topic: 5,
    kind: 'shortcut',
    q: 'An MOI about an off-centre axis: integrate?',
    a: 'Don’t: reach for the parallel axis theorem (<i>I</i><sub><i>cm</i></sub> + <i>Md</i><sup>2</sup>) first',
    why: 'Most “hard” MOI problems are one standard formula plus one theorem.',
    say: null,
  },

  // ── Topic 07 · Rotational Kinematics and Dynamics ──
  // pp. 419, 428
  {
    topic: 6,
    kind: 'remember',
    q: 'The kinematic equations for constant angular acceleration?',
    a: '<i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i>, <i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup>, <i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i>',
    why: 'Only for constant <i>α</i>: if the torque varies, integrate <i>α</i> = d<i>ω</i>/d<i>t</i> instead.',
    say: 'Same letters, new alphabet: <i>s</i> → <i>θ</i>, <i>v</i> → <i>ω</i>, <i>a</i> → <i>α</i>, <i>m</i> → <i>I</i>, <i>F</i> → <i>τ</i>.',
  },
  // pp. 419–420, 428
  {
    topic: 6,
    kind: 'remember',
    q: 'The work–energy theorem for rotation?',
    a: '<i>W</i> = Δ<i>K</i><sub><i>rot</i></sub> = ½<i>Iω</i><sup>2</sup> − ½<i>Iω</i><sub>0</sub><sup>2</sup>',
    why: 'For a constant torque <i>W</i> = <i>τθ</i>, and the power is <i>P</i> = <i>τω</i>.',
    say: null,
  },
  // pp. 418, 428
  {
    topic: 6,
    kind: 'mixup',
    q: 'On a rotating rigid body, which quantities do all particles share, and which differ?',
    a: 'All share <i>ω</i> and <i>α</i>; the linear speed <i>v</i> = <i>rω</i> grows with distance from the axis',
    why: '“Angular is shared, linear is not.”',
    say: 'Shared spin, personal speed.',
  },
  // p. 427
  {
    topic: 6,
    kind: 'mistake',
    q: 'Can you put <i>ω</i> in rpm straight into <i>v</i> = <i>rω</i>?',
    a: 'No: every formula here assumes radians. <i>ω</i>(rad/s) = 2<i>πN</i>/60 for <i>N</i> rpm',
    why: '1 rev = 2<i>π</i> rad.',
    say: null,
  },
  // pp. 427–428
  {
    topic: 6,
    kind: 'shortcut',
    q: 'The fastest way into any rotational problem?',
    a: 'Translate it to its linear twin, then swap symbols using the analogy table',
    why: 'For connected bodies, the energy method (½<i>Iω</i><sup>2</sup> + ½<i>mv</i><sup>2</sup> = lost PE) is often faster when you only need final speeds.',
    say: null,
  },

  // ── Topic 08 · Rolling Motion ──
  // pp. 430, 439
  {
    topic: 7,
    kind: 'remember',
    q: 'The acceleration of a body rolling without slipping down an incline of angle <i>θ</i>?',
    a: '<i>a</i> = <i>g</i> sin <i>θ</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)',
    why: 'Its speed at the bottom: <i>v</i><sub><i>bottom</i></sub> = √(2<i>gh</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)).',
    say: null,
  },
  // pp. 430, 439
  {
    topic: 7,
    kind: 'remember',
    q: 'The total kinetic energy of a rolling body, and how it splits?',
    a: '½<i>mv</i><sup>2</sup>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>); <i>K</i><sub><i>trans</i></sub> : <i>K</i><sub><i>rot</i></sub> = 1 : <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>',
    why: '<i>k</i> in <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> is the radius of gyration; pure rolling means <i>v</i><sub><i>cm</i></sub> = <i>Rω</i>.',
    say: null,
  },
  // pp. 431, 439
  {
    topic: 7,
    kind: 'mixup',
    q: 'A solid sphere, a disc, a spherical shell and a ring roll down the same incline. The order, fastest first?',
    a: 'Sphere (<i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/5), disc (1/2), shell (2/3), ring (1)',
    why: 'Mass and radius cancel: only the shape, through <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>, decides.',
    say: 'Compact wins: sphere beats disc beats shell beats ring — mass and radius never matter.',
  },
  // pp. 438–439
  {
    topic: 7,
    kind: 'mistake',
    q: 'Does static friction do work on a body rolling without slipping?',
    a: 'No: the contact point is at rest, so static friction does zero work',
    why: 'It supplies the torque for <i>v</i> = <i>Rω</i>, but energy is conserved.',
    say: 'Bottom is frozen, top flies: in pure rolling the contact point is momentarily at rest (0) and the top moves at 2<i>v</i>.',
  },
  // p. 439
  {
    topic: 7,
    kind: 'shortcut',
    q: '“Sliding becomes rolling”: the one-line route to the final speed?',
    a: 'Take angular momentum about a point on the surface: it is conserved',
    why: 'Friction acts there, so its torque is zero (gravity and the normal reaction cancel): you never touch <i>μ</i> or time.',
    say: null,
  },

  // ── Additional A · Velocity and Acceleration of Every Point on a Rolling Body ──
  // p. 441
  {
    topic: 8,
    kind: 'remember',
    q: 'A wheel rolls without slipping at centre speed <i>v</i>. The speed of the rim point at angle <i>θ</i> from the top?',
    a: '|<i>v⃗</i><sub><i>P</i></sub>| = 2<i>v</i> cos(<i>θ</i>/2), at <i>θ</i>/2 below the horizontal',
    why: 'The leading point (<i>θ</i> = <i>π</i>/2) moves at √2 <i>v</i> at 45° below the horizontal.',
    say: null,
  },
  // pp. 441, 443
  {
    topic: 8,
    kind: 'remember',
    q: 'A wheel rolls steadily. The acceleration of its contact point?',
    a: '<i>v</i><sup>2</sup>/<i>R</i>, directed vertically upward, toward the centre',
    why: 'Zero velocity but non-zero acceleration: the instantaneous axis of rotation is legitimate for velocities only.',
    say: null,
  },

  // ── Additional B · Massive Pulleys: Connected Systems Done Completely ──
  // pp. 443–444
  {
    topic: 9,
    kind: 'remember',
    q: 'An Atwood machine with a disc pulley of mass <i>M</i> (<i>m</i><sub>1</sub> > <i>m</i><sub>2</sub>): the acceleration?',
    a: '<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + <i>M</i>/2)',
    why: 'The pulley behaves like an extra mass <i>M</i>/2; a thin ring pulley makes the denominator <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + <i>M</i>.',
    say: null,
  },
  // p. 443
  {
    topic: 9,
    kind: 'remember',
    q: 'Over a pulley with mass, are the two string tensions equal?',
    a: 'No: <i>T</i><sub>1</sub> ≠ <i>T</i><sub>2</sub>; their difference provides the pulley’s torque',
    why: 'For a disc pulley, <i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = ½<i>Ma</i>. Writing <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub> is the fatal error.',
    say: null,
  },

  // ── Additional C · Slipping into Rolling: Time, Distance and Heat ──
  // p. 446
  {
    topic: 10,
    kind: 'remember',
    q: 'A solid sphere is thrown without spin at <i>v</i><sub>0</sub> onto a rough floor. When does pure rolling begin, and at what speed?',
    a: '<i>t</i><sup>∗</sup> = 2<i>v</i><sub>0</sub>/(7<i>μg</i>), <i>v</i><sup>∗</sup> = 5<i>v</i><sub>0</sub>/7',
    why: 'By then it has travelled <i>s</i><sup>∗</sup> = 12<i>v</i><sub>0</sub><sup>2</sup>/(49<i>μg</i>).',
    say: null,
  },
  // p. 446
  {
    topic: 10,
    kind: 'remember',
    q: 'How much of the thrown sphere’s kinetic energy becomes heat before it rolls?',
    a: 'Exactly two-sevenths: <i>H</i> = <i>mv</i><sub>0</sub><sup>2</sup>/7 = (2/7) · ½<i>mv</i><sub>0</sub><sup>2</sup>',
    why: '<i>v</i><sup>∗</sup> and the energy split contain no <i>μ</i>: friction sets the schedule, not the destination.',
    say: null,
  },

  // ── Additional D · Collisions on a Free Rigid Body and the Centre of Percussion ──
  // p. 448
  {
    topic: 11,
    kind: 'remember',
    q: 'A rod pivoted at one end is struck. Where is its centre of percussion?',
    a: 'At two-thirds of its length from the pivot: <i>x</i> = 2<i>L</i>/3',
    why: 'Struck there, the pivot feels nothing; struck anywhere else, the hinge jerks.',
    say: null,
  },
  // pp. 447–448
  {
    topic: 11,
    kind: 'remember',
    q: 'A particle strikes a free rod (no pivot) and sticks. What do you conserve?',
    a: 'Both: linear momentum, <i>mv</i> = (<i>M</i> + <i>m</i>)<i>V</i>, and angular momentum about the system’s centre of mass',
    why: 'About that one point the final state is pure rotation, <i>L</i><sub><i>f</i></sub> = <i>I</i><sub>cm</sub><i>ω</i>.',
    say: null,
  },

  // ── Additional E · The Physical Pendulum: When a Rigid Body Oscillates ──
  // p. 450
  {
    topic: 12,
    kind: 'remember',
    q: 'The period of a physical pendulum pivoted a distance <i>d</i> from its centre of mass?',
    a: '<i>T</i> = 2<i>π</i>√((<i>k</i><sup>2</sup> + <i>d</i><sup>2</sup>)/(<i>gd</i>))',
    why: '<i>k</i> is the radius of gyration about the centre of mass; in general <i>T</i> = 2<i>π</i>√(<i>I</i><sub>pivot</sub>/(<i>Mgd</i>)).',
    say: null,
  },
  // p. 451
  {
    topic: 12,
    kind: 'remember',
    q: 'For which <i>d</i> is the period least, and what is it?',
    a: '<i>d</i> = <i>k</i>, giving <i>T</i><sub>min</sub> = 2<i>π</i>√(2<i>k</i>/<i>g</i>)',
    why: 'The equivalent length <i>ℓ</i><sub>eq</sub> = <i>d</i> + <i>k</i><sup>2</sup>/<i>d</i> is least there.',
    say: null,
  },

  // ── Additional F · Over a Step: Torque About the Corner and the Minimum Force ──
  // p. 453
  {
    topic: 13,
    kind: 'remember',
    q: 'A roller of radius <i>R</i> rests against a step of height <i>h</i>. The least horizontal force at its top to mount the step?',
    a: '<i>F</i><sub>min</sub> = <i>mg</i>√(2<i>Rh</i> − <i>h</i><sup>2</sup>)/(2<i>R</i> − <i>h</i>)',
    why: 'Take torques about the step corner: at liftoff the floor normal is zero.',
    say: null,
  },
  // pp. 454–455
  {
    topic: 13,
    kind: 'remember',
    q: 'Same roller, but the force at the top may point in any direction. The true minimum?',
    a: '<i>F</i><sub>min</sub> = <i>mga</i>/|<i>OT</i>|, perpendicular to the corner-to-top line, with |<i>OT</i>| = √(2<i>R</i>(2<i>R</i> − <i>h</i>))',
    why: '<i>a</i> = √(2<i>Rh</i> − <i>h</i><sup>2</sup>) is the weight’s lever arm about the corner <i>O</i>.',
    say: null,
  },
];
