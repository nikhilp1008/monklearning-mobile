/**
 * KEY POINTS for Physics Class 12, Chapter 4 (Moving Charges and Magnetism).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 are 0–4; Additional topics A–E are 5–9.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word. Additional topics: the Supplement's
 * addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. μ<sub>0</sub>
 * and ε<sub>0</sub> are upright, μ<sub>0</sub>/(4π) bracketed. Subscripts
 * that are words or labels stay upright (<i>I</i><sub>enc</sub>,
 * <i>B</i><sub>axial</sub>, <i>μ</i><sub>B</sub>, <i>φ</i><sub>m</sub>); a
 * subscript that is a variable stays italic (<i>F</i><sub><i>x</i></sub>,
 * <i>S</i><sub><i>I</i></sub>); vectors keep their arrows (<i>B⃗</i>,
 * d<i>l⃗</i>, <i>m⃗</i>) and unit vectors their hats (<i>r̂</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Magnetic Field and the Biot–Savart Law ──
  // pp. 258, 260, 268
  {
    topic: 0,
    kind: 'remember',
    q: 'The Biot–Savart law for the field of a current element, and which way does d<i>B⃗</i> point?',
    a: 'd<i>B⃗</i> = (μ<sub>0</sub>/(4π))<i>I</i> d<i>l⃗</i> × <i>r̂</i>/<i>r</i><sup>2</sup>, of magnitude (μ<sub>0</sub>/(4π))<i>I</i> d<i>l</i> sin <i>θ</i>/<i>r</i><sup>2</sup>, perpendicular to the plane of d<i>l⃗</i> and <i>r⃗</i>',
    why: 'With μ<sub>0</sub> = 4π × 10<sup>−7</sup> T m A<sup>−1</sup>. In this form it holds for steady currents in a non-magnetic medium (vacuum or air).',
    say: null,
  },
  // pp. 260, 267–268
  {
    topic: 0,
    kind: 'remember',
    q: 'The field at the centre of a circular loop of radius <i>R</i>, and on its axis at a distance <i>x</i> from the centre?',
    a: 'Centre: <i>B</i> = μ<sub>0</sub><i>I</i>/(2<i>R</i>). Axis: <i>B</i> = μ<sub>0</sub><i>IR</i><sup>2</sup>/(2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>). For a coil of <i>N</i> closely wound turns, multiply by <i>N</i>',
    why: '“A loop” is one turn; a “coil” multiplies by <i>N</i>. On the axis the field falls to one-eighth of its centre value at <i>x</i> = √3<i>R</i>.',
    say: null,
  },
  // pp. 260, 263, 268
  {
    topic: 0,
    kind: 'mixup',
    q: 'At a perpendicular distance <i>a</i> from a straight wire: the field of an infinite wire, and of a finite one?',
    a: 'Infinite: <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>a</i>). Finite: <i>B</i> = (μ<sub>0</sub><i>I</i>/(4π<i>a</i>))(sin <i>θ</i><sub>1</sub> + sin <i>θ</i><sub>2</sub>), with <i>θ</i><sub>1</sub>, <i>θ</i><sub>2</sub> the angles at <i>P</i> between the perpendicular and the lines to the two ends',
    why: 'For a very long wire both ends recede, <i>θ</i><sub>1</sub> = <i>θ</i><sub>2</sub> = 90°, and the finite result becomes μ<sub>0</sub><i>I</i>/(2π<i>a</i>).',
    say: null,
  },
  // p. 268
  {
    topic: 0,
    kind: 'mistake',
    q: 'A circuit has straight leads lying along a line through the point where you want <i>B</i>. What do they contribute?',
    a: 'Nothing: for them d<i>l⃗</i> ∥ <i>r⃗</i>, so sin <i>θ</i> = 0. Don’t waste time computing them',
    why: 'Every other contribution must be added as a vector: two equal-magnitude fields can give anything from zero to their sum.',
    say: 'Add the swirls, not the numbers — every contribution is a vector, and straight bits aimed at the point add nothing.',
  },
  // pp. 267–268
  {
    topic: 0,
    kind: 'shortcut',
    q: 'The field at the centre of an arc, or of a polygon of straight wires. The fast way?',
    a: 'Never integrate. An arc of angle <i>φ</i> is the fraction <i>φ</i>/(2π) of the full-loop value μ<sub>0</sub><i>I</i>/(2<i>R</i>), giving μ<sub>0</sub><i>Iφ</i>/(4π<i>R</i>); a polygon is a sum of finite wires',
    why: '<i>φ</i> is in radians. Three-quarters of a loop gives (3/4)(μ<sub>0</sub><i>I</i>/(2<i>R</i>)) = 3μ<sub>0</sub><i>I</i>/(8<i>R</i>).',
    say: null,
  },

  // ── Topic 02 · Ampère’s Circuital Law and Its Applications ──
  // pp. 271, 280
  {
    topic: 1,
    kind: 'remember',
    q: 'Ampère’s circuital law, and when can it give you <i>B</i>?',
    a: '∮<i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub><i>I</i><sub>enc</sub> for any closed loop, with steady currents. It yields <i>B</i> only when you can find a loop on which <i>B</i> is constant and parallel or perpendicular to the path',
    why: 'So it gives the long straight wire, the long cylinder, the ideal solenoid and the toroid, but not a single circular loop’s centre field: there, though true, it is useless.',
    say: 'True for any loop, solvable only for the symmetric few.',
  },
  // pp. 271, 279–280
  {
    topic: 1,
    kind: 'remember',
    q: 'The field inside and outside a thick wire of radius <i>R</i> carrying a uniform current <i>I</i>?',
    a: 'Inside: <i>B</i> = μ<sub>0</sub><i>Ir</i>/(2π<i>R</i><sup>2</sup>), rising as <i>r</i>. Outside: <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>), falling as 1/<i>r</i>. It peaks at the surface',
    why: 'Inside, only the fraction <i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> of the current is enclosed: using μ<sub>0</sub><i>I</i>/(2π<i>r</i>) there is a classic slip.',
    say: null,
  },
  // pp. 271, 279–280
  {
    topic: 1,
    kind: 'mixup',
    q: 'The field inside an ideal solenoid and inside a toroid: which uses <i>n</i>, and which <i>N</i>?',
    a: 'Solenoid: <i>B</i> = μ<sub>0</sub><i>nI</i>, with <i>n</i> turns per unit length, uniform inside and 0 outside. Toroid: <i>B</i> = μ<sub>0</sub><i>NI</i>/(2π<i>r</i>), with <i>N</i> total turns, inside the windings, and 0 in the hole and outside',
    why: 'Plugging total turns into μ<sub>0</sub><i>nI</i> is a frequent disaster. Doubling both <i>N</i> and <i>r</i> of a toroid leaves its field unchanged.',
    say: null,
  },
  // pp. 278–280
  {
    topic: 1,
    kind: 'mistake',
    q: 'A wire runs just outside your Amperian loop and bends the field strongly. Does its current count in <i>I</i><sub>enc</sub>?',
    a: 'No: only currents that actually thread the loop count. An outside current alters <i>B⃗</i> at points on the loop, but its contributions to the closed integral cancel exactly',
    why: 'The loop’s shape does not matter either: distort it, keeping the same enclosed current, and the integral is unchanged.',
    say: 'Thread it or forget it.',
  },
  // p. 280
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Choosing the Amperian loop. The rule?',
    a: 'Match the field’s symmetry: a circle for wires, cylinders and toroids; a rectangle with one side along the axis for solenoids',
    why: 'Pick a loop on which <i>B⃗</i> · d<i>l⃗</i> is either <i>B</i> d<i>l</i> or 0 on every segment, so the integral collapses to <i>B</i> × (length) in one line.',
    say: null,
  },

  // ── Topic 03 · Force on Charged Particles and Torque on Current Loops ──
  // pp. 282, 294–295
  {
    topic: 2,
    kind: 'remember',
    q: 'The force on a charge in electric and magnetic fields, and does the magnetic part do work?',
    a: '<i>F⃗</i> = <i>q</i>(<i>E⃗</i> + <i>v⃗</i> × <i>B⃗</i>). The magnetic part, of magnitude <i>qvB</i> sin <i>θ</i>, is perpendicular to <i>v⃗</i> and does no work: speed and kinetic energy never change',
    why: 'It is zero for <i>v⃗</i> ∥ <i>B⃗</i>, where the charge coasts straight through, and largest for <i>v⃗</i> ⊥ <i>B⃗</i>.',
    say: 'Magnetic force only steers, never speeds.',
  },
  // pp. 282–283, 294–295
  {
    topic: 2,
    kind: 'remember',
    q: 'A charge <i>q</i> of mass <i>m</i> is fired perpendicular to a uniform field <i>B</i>. Its radius and period, and a cyclotron’s maximum energy?',
    a: '<i>r</i> = <i>mv</i>/(<i>qB</i>) = <i>p</i>/(<i>qB</i>) and <i>T</i> = 2π<i>m</i>/(<i>qB</i>), independent of the speed. A cyclotron of exit radius <i>R</i> gives <i>K</i><sub>max</sub> = <i>q</i><sup>2</sup><i>B</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>m</i>)',
    why: 'This assumes non-relativistic speeds: near light speed the particle’s effective mass grows and the cyclotron’s timing drifts out of step.',
    say: null,
  },
  // pp. 282–283, 294–295
  {
    topic: 2,
    kind: 'mixup',
    q: 'Two long parallel wires carry currents in the same direction. Do they attract or repel, and with what force?',
    a: 'They attract: like currents attract, the opposite of like charges. <i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>); antiparallel currents repel',
    why: 'For long, thin, straight wires a distance <i>d</i> apart.',
    say: 'Like currents cuddle (parallel attract).',
  },
  // pp. 282–283, 294
  {
    topic: 2,
    kind: 'mistake',
    q: 'A coil’s plane makes an angle <i>α</i> with a uniform field <i>B</i>. Is the torque <i>NIAB</i> sin <i>α</i>?',
    a: 'No: in <i>τ</i> = <i>NIAB</i> sin <i>θ</i>, <i>θ</i> is the angle between the normal <i>m⃗</i> and <i>B⃗</i>, so <i>θ</i> = 90° − <i>α</i>',
    why: 'The torque is largest when the plane contains <i>B⃗</i>, and zero when the plane is perpendicular to it.',
    say: 'Theta is to the normal, not the plane.',
  },
  // p. 295
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Comparing the circle radii of different charges in the same field. The fast way?',
    a: 'First ask what was held constant. Same momentum: <i>r</i> ∝ 1/<i>q</i>. Accelerated from rest through the same voltage: <i>r</i> ∝ √<i>m</i>/√<i>q</i>',
    why: 'Both follow from <i>r</i> = <i>mv</i>/(<i>qB</i>) = <i>p</i>/(<i>qB</i>), and turn a messy numerical into a one-line ratio.',
    say: null,
  },

  // ── Topic 04 · Galvanometers and Their Conversion ──
  // pp. 297, 304–305
  {
    topic: 3,
    kind: 'remember',
    q: 'A galvanometer (coil resistance <i>G</i>, full-scale current <i>I</i><sub>g</sub>) is converted into an ammeter of range <i>I</i>. The shunt?',
    a: 'In parallel: <i>S</i> = <i>I</i><sub>g</sub><i>G</i>/(<i>I</i> − <i>I</i><sub>g</sub>) = <i>G</i>/(<i>n</i> − 1), with <i>n</i> = <i>I</i>/<i>I</i><sub>g</sub>. The ammeter’s resistance, <i>GS</i>/(<i>G</i> + <i>S</i>), is small',
    why: 'Only the excess current <i>I</i> − <i>I</i><sub>g</sub> bypasses the coil, so a bigger range needs a smaller shunt.',
    say: null,
  },
  // pp. 297, 305
  {
    topic: 3,
    kind: 'remember',
    q: 'The current sensitivity, voltage sensitivity and figure of merit of a moving-coil galvanometer?',
    a: 'From <i>NIAB</i> = <i>kφ</i>: <i>S</i><sub><i>I</i></sub> = <i>φ</i>/<i>I</i> = <i>NAB</i>/<i>k</i> and <i>S</i><sub><i>V</i></sub> = <i>φ</i>/<i>V</i> = <i>NAB</i>/(<i>kG</i>) = <i>S</i><sub><i>I</i></sub>/<i>G</i>. Figure of merit = 1/<i>S</i><sub><i>I</i></sub>, the current for one division',
    why: 'A smaller figure of merit means a more sensitive galvanometer. The linear scale, <i>φ</i> ∝ <i>I</i>, needs the radial field.',
    say: null,
  },
  // pp. 296–297, 304–305
  {
    topic: 3,
    kind: 'mixup',
    q: 'An ammeter and a voltmeter: how is each connected in a circuit, and what is its ideal resistance?',
    a: 'Ammeter: low resistance, in series, ideally 0. Voltmeter: very high resistance, in parallel, ideally ∞',
    why: 'To build them, an ammeter takes a small shunt in parallel with the galvanometer; a voltmeter takes a large multiplier in series with it.',
    say: 'Ammeter = A low, in series; Voltmeter = Very high, parallel.',
  },
  // pp. 297, 304
  {
    topic: 3,
    kind: 'mistake',
    q: 'To make a voltmeter of range <i>V</i>, is the series resistance <i>V</i>/<i>I</i><sub>g</sub>?',
    a: 'No: <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub> − <i>G</i>. The coil resistance is part of the series chain',
    why: 'The whole voltmeter then has resistance <i>R</i><sub>V</sub> = <i>G</i> + <i>R</i> = <i>V</i>/<i>I</i><sub>g</sub>, which is large.',
    say: null,
  },
  // pp. 304–305
  {
    topic: 3,
    kind: 'shortcut',
    q: 'You have computed a shunt or a multiplier. The one-glance check?',
    a: 'A shunt should come out small (milliohms to ohms) and a multiplier large (kilohms). A 3000 Ω “shunt” or a 0.02 Ω “multiplier” means you swapped the formulas',
    why: 'For a multirange voltmeter, each added series resistor = (range increment)/<i>I</i><sub>g</sub>.',
    say: 'Shunt is small, multiplier is mighty.',
  },

  // ── Topic 05 · The Magnetic Dipole: Current Loop, Revolving Electron & Bohr Magneton ──
  // pp. 306–307, 313
  {
    topic: 4,
    kind: 'remember',
    q: 'The magnetic moment of a current loop, and its torque and energy in a uniform field?',
    a: '<i>m⃗</i> = <i>NIA⃗</i> (A m<sup>2</sup>), along the normal by the right-hand rule. <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>, <i>τ</i> = <i>mB</i> sin <i>θ</i>; <i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>',
    why: 'Rotating it from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub> takes <i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>): positive away from alignment, released toward it.',
    say: 'Current loop = baby bar magnet.',
  },
  // pp. 306–307, 312–313
  {
    topic: 4,
    kind: 'remember',
    q: 'The orbital magnetic moment of a revolving electron, and the Bohr magneton?',
    a: '<i>μ</i><sub><i>l</i></sub> = <i>evr</i>/2 = <i>eL</i>/(2<i>m</i>), so <i>μ</i><sub><i>l</i></sub>/<i>L</i> = <i>e</i>/(2<i>m</i>) ≈ 8.8 × 10<sup>10</sup> C kg<sup>−1</sup>. The smallest orbit, <i>L</i> = <i>h</i>/(2π), gives <i>μ</i><sub>B</sub> = <i>eh</i>/(4π<i>m</i>) ≈ 9.27 × 10<sup>−24</sup> A m<sup>2</sup>',
    why: 'In the classical (Bohr) orbit model this is the orbital contribution only, not the electron’s spin. Dropping the ½ is the most common slip.',
    say: 'Moment to momentum is e-over-two-m.',
  },
  // pp. 306–307, 312–313
  {
    topic: 4,
    kind: 'mixup',
    q: 'The far fields of a magnetic dipole on its axis and on its equator, at the same distance <i>x</i>?',
    a: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π))(2<i>m</i>/<i>x</i><sup>3</sup>) and <i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π))(<i>m</i>/<i>x</i><sup>3</sup>): a 2 ∶ 1 ratio, as for the electric dipole',
    why: 'Valid only for <i>x</i> much larger than the loop; close up, use the exact loop field.',
    say: 'Axial beats equatorial, two to one.',
  },
  // pp. 306, 313
  {
    topic: 4,
    kind: 'mistake',
    q: 'An electron orbits a nucleus. Does its magnetic moment point along its angular momentum?',
    a: 'No, opposite to it: <i>μ⃗</i><sub><i>l</i></sub> = −(<i>e</i>/(2<i>m</i>))<i>L⃗</i>, because the electron’s charge is negative',
    why: 'For any current loop, <i>m⃗</i> lies along the normal to the loop, not along the current or in its plane.',
    say: null,
  },
  // p. 313
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Any magnetic-dipole question. The fast way?',
    a: 'Map it onto the electric dipole you already know: swap <i>p</i> → <i>m</i> and 1/(4πε<sub>0</sub>) → μ<sub>0</sub>/(4π)',
    why: 'Same 2 ∶ 1 axial-to-equatorial ratio, same <i>τ</i> = <i>mB</i> sin <i>θ</i>, same <i>U</i> = −<i>mB</i> cos <i>θ</i>: no new physics to learn.',
    say: null,
  },

  // ── Additional A · The Helmholtz Coil Pair and Uniform Field Region ──
  // pp. 314–317
  {
    topic: 5,
    kind: 'remember',
    q: 'Two identical coaxial coils (<i>N</i> turns, radius <i>R</i>, the same current in the same sense) a distance <i>R</i> apart: a Helmholtz pair. The field at the midpoint?',
    a: '<i>B</i> = (8/(5√5))μ<sub>0</sub><i>NI</i>/<i>R</i> ≈ 0.716μ<sub>0</sub><i>NI</i>/<i>R</i>, uniform to about 0.01% within roughly <i>R</i>/10 of the midpoint',
    why: 'The spacing <i>d</i> = <i>R</i> makes d<sup>2</sup><i>B</i>/d<i>x</i><sup>2</sup> = 0 at the centre, so the field departs from its midpoint value only at fourth order.',
    say: null,
  },
  // pp. 317–318
  {
    topic: 5,
    kind: 'remember',
    q: 'Why must the currents in a Helmholtz pair run in the same sense?',
    a: 'Opposite currents make the axial fields cancel exactly at the midpoint (<i>B</i> = 0), and the field is highly non-uniform; only same-sense currents add',
    why: 'Even so, two single turns give (16/(5√5))<i>B</i><sub>1</sub> ≈ 1.43<i>B</i><sub>1</sub> at the midpoint, less than twice one turn’s centre field <i>B</i><sub>1</sub> = μ<sub>0</sub><i>I</i>/(2<i>R</i>): the coils are not at the same point.',
    say: null,
  },

  // ── Additional B · Force on a Magnetic Dipole in a Non-Uniform Field and Energy in a Magnetic Field ──
  // pp. 318, 321
  {
    topic: 6,
    kind: 'remember',
    q: 'The force on a magnetic dipole aligned with a non-uniform field <i>B</i>(<i>x</i>)?',
    a: '<i>F</i><sub><i>x</i></sub> = <i>m</i> d<i>B</i>/d<i>x</i>, from <i>F⃗</i> = ∇(<i>m⃗</i> · <i>B⃗</i>): it pulls the dipole toward the stronger field',
    why: 'That is why paramagnetic materials are drawn into a field. The force comes from the gradient of <i>B</i>; the torque, <i>mB</i> sin <i>θ</i>, from the local <i>B</i>.',
    say: null,
  },
  // pp. 318–319
  {
    topic: 6,
    kind: 'remember',
    q: 'The energy stored in a magnetic field, per unit volume?',
    a: '<i>u</i> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>), the magnetic analogue of ½ε<sub>0</sub><i>E</i><sup>2</sup>. An inductor stores <i>W</i> = ½<i>LI</i><sup>2</sup> in all',
    why: 'For a solenoid, <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> and <i>B</i> = μ<sub>0</sub><i>nI</i> turn ½<i>LI</i><sup>2</sup> into (<i>B</i><sup>2</sup>/(2μ<sub>0</sub>))<i>Al</i>. The ½ appears because the energy builds up as the field grows from zero.',
    say: null,
  },

  // ── Additional C · The Compass Needle as a Magnetic Oscillator and Relativistic Cyclotron Correction ──
  // pp. 321, 323
  {
    topic: 7,
    kind: 'remember',
    q: 'A compass needle (magnetic moment <i>m</i>, moment of inertia <i>I</i>) makes small oscillations in a uniform field <i>B</i>. Its period?',
    a: '<i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)), with <i>ω</i> = √(<i>mB</i>/<i>I</i>): the restoring torque −<i>mB</i> sin <i>θ</i> ≈ −<i>mBθ</i> gives SHM',
    why: 'It is the magnetic analogue of the torsional pendulum, with <i>mB</i> in the role of <i>κ</i>. Since <i>T</i> ∝ 1/√<i>B</i>, a field twice as strong divides the period by √2.',
    say: null,
  },
  // pp. 321–322
  {
    topic: 7,
    kind: 'remember',
    q: 'How does relativity change a cyclotron’s period as the particle gains energy?',
    a: '<i>T</i> = 2π<i>γm</i><sub>0</sub>/(<i>qB</i>) grows with <i>γ</i>, so the revolution frequency falls as <i>f</i> ∝ 1/<i>γ</i> and the fixed-frequency accelerating voltage falls out of step',
    why: 'For a proton the frequency has already shifted by 1% at only about 10 MeV. Synchrocyclotrons sweep the frequency downward; synchrotrons vary both <i>B</i> and the RF frequency together.',
    say: null,
  },

  // ── Additional D · Three Things the Chapter Names but Never Computes ──
  // pp. 324, 326
  {
    topic: 8,
    kind: 'remember',
    q: 'A uniformly charged disc (surface charge density <i>σ</i>, radius <i>R</i>) spins at angular speed <i>ω</i>. The field at its centre, and its magnetic moment?',
    a: '<i>B</i> = μ<sub>0</sub><i>σωR</i>/2 and <i>m</i> = π<i>σωR</i><sup>4</sup>/4',
    why: 'Each ring of radius <i>r</i> and width d<i>r</i> carries d<i>I</i> = <i>σωr</i> d<i>r</i>: it adds μ<sub>0</sub> d<i>I</i>/(2<i>r</i>) to the field and π<i>r</i><sup>2</sup> d<i>I</i> to the moment.',
    say: null,
  },
  // pp. 325–326
  {
    topic: 8,
    kind: 'remember',
    q: 'The force between two coaxial magnetic dipoles <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub>, a distance <i>x</i> apart along their common axis?',
    a: '<i>F</i> = 3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(2π<i>x</i><sup>4</sup>), attractive if both moments point the same way',
    why: 'It falls as 1/<i>x</i><sup>4</sup>, much faster than the 1/<i>d</i> force per unit length between parallel wires. Side by side, both perpendicular to the line joining them, it is 3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(4π<i>x</i><sup>4</sup>), repulsive if aligned.',
    say: null,
  },

  // ── Additional E · The Magnetic Scalar Potential and Current-Free Regions ──
  // p. 327
  {
    topic: 9,
    kind: 'remember',
    q: 'Why can <i>B⃗</i> be written as the gradient of a scalar potential in a current-free region, and what equation does that potential obey?',
    a: 'With <i>J⃗</i> = 0, Ampère’s law gives ∇ × <i>B⃗</i> = 0, so <i>B⃗</i> = −∇<i>φ</i><sub>m</sub>. Since ∇ · <i>B⃗</i> = 0, ∇<sup>2</sup><i>φ</i><sub>m</sub> = 0: Laplace’s equation',
    why: 'Just like the electrostatic potential in charge-free space. The normal component of <i>B⃗</i> is always continuous across a surface.',
    say: null,
  },
  // pp. 327–329
  {
    topic: 9,
    kind: 'remember',
    q: 'The field on either side of an infinite sheet carrying a surface current density <i>K</i>?',
    a: '<i>B</i> = μ<sub>0</sub><i>K</i>/2 on each side, parallel to the sheet and perpendicular to the current, pointing opposite ways on the two sides: it jumps by μ<sub>0</sub><i>K</i> across the sheet',
    why: 'Two parallel sheets with opposite currents give a uniform μ<sub>0</sub><i>K</i> between them and zero outside: a sheet-wound solenoid.',
    say: null,
  },
];
