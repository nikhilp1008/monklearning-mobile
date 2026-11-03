/**
 * KEY POINTS for Physics Class 11, Chapter 7 (Gravitation).
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
 * sheet's memory aid, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. A vector
 * carries its arrow (<i>E⃗</i>), as in the chapter; r̂ is a unit vector.
 * Subscripts are italic where the book sets them italic (<i>g</i><sub><i>h</i></sub>,
 * <i>v</i><sub><i>o</i></sub>) and upright where it does not (<i>V</i><sub>surface</sub>).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Newton's Law of Gravitation ──
  // pp. 460–461, 468
  {
    topic: 0,
    kind: 'remember',
    q: 'The value and the dimensions of <i>G</i>?',
    a: '<i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup> kg<sup>−2</sup>; [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]',
    why: 'A universal scalar: its value does not depend on the masses, the medium, time, place, or temperature.',
    say: null,
  },
  // pp. 460, 467–468
  {
    topic: 0,
    kind: 'remember',
    q: 'For which bodies can you use <i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> directly?',
    a: 'Point masses, uniform spheres, and a sphere with a point mass; for anything else (a rod, a ring, an arc) you must integrate',
    why: 'After any extended-body integration, set the distance ≫ the body’s size: the answer must reduce to <i>GMm</i>/<i>r</i><sup>2</sup>.',
    say: 'Far away, everything’s a point.',
  },
  // p. 461
  {
    topic: 0,
    kind: 'mixup',
    q: 'Gravitational mass or inertial mass: which one is in Newton’s law of gravitation, and which in <i>F</i> = <i>ma</i>?',
    a: 'Gravitational mass <i>m</i><sub><i>g</i></sub> in the law of gravitation; inertial mass <i>m</i><sub><i>i</i></sub> in <i>F</i> = <i>m</i><sub><i>i</i></sub><i>a</i>',
    why: 'Experiment shows they are equal to about one part in 10<sup>15</sup>: that is why all bodies fall with the same <i>g</i>.',
    say: null,
  },
  // pp. 467–468
  {
    topic: 0,
    kind: 'mistake',
    q: 'The distance between two masses is halved. Does the force double?',
    a: 'No: it quadruples. When the distance changes by a factor <i>k</i>, the force changes by 1/<i>k</i><sup>2</sup>, not 1/<i>k</i>',
    why: 'This single slip causes more wrong answers in ratio problems than anything else.',
    say: 'Product up, distance squared down.',
  },
  // p. 467
  {
    topic: 0,
    kind: 'shortcut',
    q: '“What happens to <i>F</i> if the masses or the distance change?” The fast way?',
    a: 'Write <i>F</i> ∝ <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> and multiply the separate factors in your head',
    why: 'You finish in seconds and never touch 6.67 × 10<sup>−11</sup>.',
    say: null,
  },

  // ── Topic 02 · Gravitational Field Intensity ──
  // pp. 471–472, 480
  {
    topic: 1,
    kind: 'remember',
    q: 'Gravitational field intensity: its definition, unit and dimensions?',
    a: '<i>E⃗</i><sub><i>g</i></sub> = <i>F⃗</i>/<i>m</i><sub>0</sub>, force per unit test mass; N/kg = m/s<sup>2</sup>; [L T<sup>−2</sup>]',
    why: 'At the Earth’s surface <i>E</i><sub><i>g</i></sub> = <i>g</i>: the field and the acceleration due to gravity are the same quantity.',
    say: null,
  },
  // pp. 471, 481
  {
    topic: 1,
    kind: 'remember',
    q: 'The field on the axis of a uniform ring (mass <i>M</i>, radius <i>a</i>) at a distance <i>x</i> from its centre?',
    a: '<i>E</i><sub><i>g</i></sub> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>, toward the ring',
    why: 'It is zero at the centre (<i>x</i> = 0) and maximum at <i>x</i> = <i>a</i>/√2.',
    say: 'Ring field peaks at <i>a</i>/√2.',
  },
  // pp. 471–472, 480–481
  {
    topic: 1,
    kind: 'mixup',
    q: 'The field inside a uniform shell, and inside a uniform solid sphere?',
    a: 'Shell: zero everywhere inside. Solid sphere: <i>GMr</i>/<i>R</i><sup>3</sup>, rising linearly to <i>GM</i>/<i>R</i><sup>2</sup> at the surface',
    why: 'Outside both, <i>GM</i>/<i>r</i><sup>2</sup>: only the mass within your radius pulls you.',
    say: 'Outside, a sphere is a point; inside, only what’s beneath you counts.',
  },
  // p. 480
  {
    topic: 1,
    kind: 'mistake',
    q: 'The field at the centre of a ring is zero. Is the potential there zero too?',
    a: 'No: it is −<i>GM</i>/<i>a</i>. Field is the slope of potential, not its value',
    why: 'Inside a shell, too, the field is zero but the potential is a constant −<i>GM</i>/<i>R</i>.',
    say: null,
  },
  // pp. 477–478, 480–481
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A uniform sphere has a spherical cavity. The field inside the cavity, the fast way?',
    a: 'Full sphere minus the sphere that fills the hole, using <i>E⃗</i><sub><i>g</i></sub> = −(4/3)π<i>Gρr⃗</i>: a uniform field of magnitude (4/3)π<i>Gρd</i>',
    why: '<i>d</i> is the distance between the two centres; the field is directed toward the big sphere’s centre.',
    say: null,
  },

  // ── Topic 03 · Acceleration due to Gravity (g) ──
  // pp. 483, 490–491
  {
    topic: 2,
    kind: 'remember',
    q: '<i>g</i> at a small height <i>h</i>, and at a depth <i>d</i> (uniform density)?',
    a: '<i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>) for <i>h</i> ≪ <i>R</i>; <i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>), zero at the centre',
    why: 'So, for equal small changes in <i>g</i>, <i>d</i> = 2<i>h</i>.',
    say: 'Height has the 2, depth does not.',
  },
  // pp. 483, 491
  {
    topic: 2,
    kind: 'remember',
    q: 'The effective <i>g</i> at latitude <i>λ</i>, with the Earth’s rotation?',
    a: '<i>g</i><sub><i>λ</i></sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i> cos<sup>2</sup> <i>λ</i>: least at the equator, unchanged at the poles',
    why: 'The poles feel heavier for two reasons: no rotation effect, and a smaller polar radius.',
    say: null,
  },
  // pp. 483, 490–491
  {
    topic: 2,
    kind: 'mixup',
    q: 'Comparing two planets: how does <i>g</i> scale with <i>R</i> at the same density, and at the same mass?',
    a: 'Same density: <i>g</i> ∝ <i>R</i>, from <i>g</i> = (4/3)π<i>GRρ</i>. Same mass: <i>g</i> ∝ 1/<i>R</i><sup>2</sup>, from <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>',
    why: 'Just track how <i>M</i>, <i>R</i> or <i>ρ</i> scale; never plug in 6.67 × 10<sup>−11</sup>.',
    say: 'Same density? <i>g</i> tracks <i>R</i>. Same mass? <i>g</i> fights <i>R</i><sup>2</sup>.',
  },
  // p. 490
  {
    topic: 2,
    kind: 'mistake',
    q: 'A satellite is at a height comparable to <i>R</i>. Can you use <i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>)?',
    a: 'No: that is a small-height shortcut only. Use the exact <i>g</i><sub><i>h</i></sub> = <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>',
    why: 'Mixing these up is the single biggest source of wrong answers here.',
    say: null,
  },
  // pp. 490–491
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which three motions share the period 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min?',
    a: 'A ball oscillating in a tunnel through the Earth, a satellite skimming the surface, and the day-length for equatorial weightlessness',
    why: 'Recognising it instantly cracks several “famous-number” questions.',
    say: null,
  },

  // ── Topic 04 · Gravitational Potential and Energy ──
  // pp. 494–495, 503
  {
    topic: 3,
    kind: 'remember',
    q: 'The potential energy of two masses, and how many pairs a system of <i>n</i> particles sums over?',
    a: '<i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>, zero at infinity; <i>n</i>(<i>n</i> − 1)/2 pairs',
    why: '<i>U</i> and <i>V</i> are negative for attractive gravity, most negative when the masses are closest.',
    say: 'Attractive ⇒ negative; closer ⇒ more negative.',
  },
  // pp. 495, 503
  {
    topic: 3,
    kind: 'remember',
    q: 'The escape velocity from a planet’s surface?',
    a: '<i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>) = √(2<i>gR</i>)',
    why: 'It is independent of the body’s mass and the launch angle.',
    say: null,
  },
  // pp. 494–495, 502–503
  {
    topic: 3,
    kind: 'mixup',
    q: 'Potential <i>V</i> or potential energy <i>U</i>: which is per unit mass?',
    a: '<i>V</i> = −<i>GM</i>/<i>r</i>, in J/kg, is per unit mass; <i>U</i> = <i>mV</i> is the total energy, in J',
    why: 'Mixing their units or forgetting the factor of <i>m</i> loses marks instantly.',
    say: '<i>V</i> is per-kilo, <i>U</i> = <i>mV</i> is the whole bill.',
  },
  // pp. 494, 502
  {
    topic: 3,
    kind: 'mistake',
    q: 'A mass is raised to a height comparable to <i>R</i>. Is Δ<i>U</i> = <i>mgh</i>?',
    a: 'No: <i>mgh</i> is the change in PE only for <i>h</i> ≪ <i>R</i>. Use Δ<i>U</i> = −<i>GMm</i>(1/<i>r</i><sub><i>f</i></sub> − 1/<i>r</i><sub><i>i</i></sub>)',
    why: 'Exactly, raising a mass <i>m</i> by <i>h</i> gives Δ<i>U</i> = <i>mgh</i>/(1 + <i>h</i>/<i>R</i>).',
    say: null,
  },
  // p. 502
  {
    topic: 3,
    kind: 'shortcut',
    q: 'You know the speed of a surface-skimming satellite. The escape velocity?',
    a: 'Multiply by √2: <i>v</i><sub><i>e</i></sub> = √(2<i>gR</i>) is exactly √2 times <i>v</i><sub><i>o</i></sub> = √(<i>gR</i>)',
    why: 'For Earth: <i>v</i><sub><i>o</i></sub> ≈ 7.9 km/s, <i>v</i><sub><i>e</i></sub> ≈ 11.2 km/s.',
    say: null,
  },

  // ── Topic 05 · Kepler's Laws and Satellites ──
  // pp. 506, 514
  {
    topic: 4,
    kind: 'remember',
    q: 'Kepler’s three laws?',
    a: 'Orbits: an ellipse with the Sun at one focus. Areas: equal areas in equal times. Periods: <i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup>',
    why: 'Equal areas is angular-momentum conservation: the areal velocity d<i>A</i>/d<i>t</i> = <i>L</i>/(2<i>m</i>) = constant.',
    say: 'Areas = angular momentum.',
  },
  // pp. 506–507, 513–514
  {
    topic: 4,
    kind: 'remember',
    q: 'The orbital velocity and the period of a satellite at radius <i>r</i>?',
    a: '<i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>), <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>GM</i>)); both independent of the satellite’s mass',
    why: 'So <i>T</i> ∝ <i>r</i><sup>3/2</sup>: quadrupling the radius multiplies the period by 8, not 4.',
    say: '<i>T</i> goes as <i>r</i>-to-the-three-halves.',
  },
  // pp. 506, 513–514
  {
    topic: 4,
    kind: 'mixup',
    q: 'A satellite in a circular orbit: its kinetic, potential and total energy?',
    a: '<i>K</i> = <i>GMm</i>/(2<i>r</i>), <i>U</i> = −<i>GMm</i>/<i>r</i>, <i>E</i> = −<i>GMm</i>/(2<i>r</i>): so <i>K</i> = −<i>E</i> and <i>U</i> = 2<i>E</i>',
    why: 'Writing <i>E</i> = −<i>GMm</i>/<i>r</i> (that’s <i>U</i>, not <i>E</i>) is a frequent and costly slip.',
    say: null,
  },
  // p. 513
  {
    topic: 4,
    kind: 'mistake',
    q: 'An astronaut in an orbiting station feels weightless. Is there no gravity there?',
    a: 'No: astronaut and station are in shared free fall, with nearly full gravity acting',
    why: 'Gravity at the ISS’s altitude is roughly 90% of its surface value; it supplies the centripetal acceleration.',
    say: 'Weightless = falling together, not gravity-free.',
  },
  // pp. 513–514
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The chapter’s magic numbers for a near-surface orbit and a geostationary orbit?',
    a: 'Near surface: <i>v</i><sub><i>o</i></sub> ≈ 7.9 km/s, <i>T</i> ≈ 84.6 min. Geostationary: <i>T</i> = 24 h, <i>h</i> ≈ 36,000 km, <i>v</i><sub><i>o</i></sub> ≈ 3.1 km/s',
    why: 'A geostationary satellite is circular, in the equatorial plane, moving west-to-east.',
    say: null,
  },

  // ── Topic 06 · The Gravitational Constant & Two-Body Systems ──
  // pp. 516, 525
  {
    topic: 5,
    kind: 'remember',
    q: 'The Cavendish torsion balance: <i>G</i> from the angle of twist?',
    a: '<i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>): at equilibrium the gravitational torque (<i>GMm</i>/<i>d</i><sup>2</sup>) · <i>L</i> equals the fibre torque <i>κθ</i>',
    why: '<i>d</i> is the centre-to-centre distance of a near pair, <i>L</i> the length of the suspended rod, <i>κ</i> the fibre’s torsion constant.',
    say: null,
  },
  // pp. 516, 524–525
  {
    topic: 5,
    kind: 'remember',
    q: 'Two stars, <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub>, a distance <i>r</i> apart, orbit their centre of mass. Their period?',
    a: '<i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))), the same for both stars',
    why: 'This is Kepler’s third law with the total mass in place of a single central mass.',
    say: 'Binary Kepler uses the sum of the masses.',
  },
  // pp. 516, 524–525
  {
    topic: 5,
    kind: 'mixup',
    q: 'What can planetary and satellite orbits measure: <i>G</i>, <i>M</i>, or <i>GM</i>?',
    a: 'Only the product <i>GM</i>; <i>G</i> itself must come from a lab experiment between known masses (Cavendish)',
    why: 'With <i>G</i> measured, the Earth’s mass follows from <i>g</i> and <i>R</i>: <i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i> ≈ 6 × 10<sup>24</sup> kg.',
    say: 'Orbits weigh the product <i>GM</i>; Cavendish weighs <i>G</i> itself.',
  },
  // pp. 516, 524–525
  {
    topic: 5,
    kind: 'mistake',
    q: 'In a binary, does the heavier star orbit on the bigger circle?',
    a: 'No: the heavier star orbits on the smaller circle, <i>r</i> ∝ 1/<i>m</i>',
    why: '<i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), since <i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub>.',
    say: 'Heavier star, smaller circle.',
  },
  // pp. 524–525
  {
    topic: 5,
    kind: 'shortcut',
    q: 'How do you weigh a planet or a star?',
    a: 'Find something that orbits it: <i>M</i> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>)',
    why: 'The Sun’s mass from Earth’s orbit, Earth’s mass from the Moon’s orbit, a binary’s total mass from its period.',
    say: 'To weigh anything, watch what orbits it: <i>M</i> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>).',
  },

  // ── Additional A · Potentials You Can Finally Derive, Not Just Quote ──
  // p. 530
  {
    topic: 6,
    kind: 'remember',
    q: 'The potential inside a uniform solid sphere, at a distance <i>r</i> from its centre?',
    a: '<i>V</i>(<i>r</i>) = −<i>GM</i>(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>)/(2<i>R</i><sup>3</sup>), for <i>r</i> ≤ <i>R</i>',
    why: 'It is −<i>GM</i>/<i>R</i> at the surface and −3<i>GM</i>/(2<i>R</i>) at the centre, the deepest point.',
    say: null,
  },
  // p. 531
  {
    topic: 6,
    kind: 'remember',
    q: 'The self-energy of a uniform sphere of mass <i>M</i> and radius <i>R</i>?',
    a: '<i>U</i><sub>self</sub> = −3<i>GM</i><sup>2</sup>/(5<i>R</i>)',
    why: 'Halve <i>R</i> at fixed <i>M</i> and the binding doubles in magnitude: squeeze a body tighter and it binds harder.',
    say: null,
  },

  // ── Additional B · One Equation for Every Elliptical Orbit: Vis-Viva ──
  // p. 534
  {
    topic: 7,
    kind: 'remember',
    q: 'The vis-viva equation, and the total energy of an elliptical orbit?',
    a: '<i>v</i><sup>2</sup> = <i>GM</i>(2/<i>r</i> − 1/<i>a</i>), valid at every point of the orbit; <i>E</i> = −<i>GMm</i>/(2<i>a</i>)',
    why: '<i>a</i> = <i>r</i> gives the circular speed, <i>v</i><sup>2</sup> = <i>GM</i>/<i>r</i>; <i>a</i> → ∞ gives the escape condition, <i>v</i><sup>2</sup> = 2<i>GM</i>/<i>r</i>.',
    say: null,
  },
  // pp. 534–535
  {
    topic: 7,
    kind: 'shortcut',
    q: 'A single burn gives a satellite at radius <i>r</i> a tangential speed <i>v</i>. How do you find the other apsis?',
    a: 'Compute <i>ε</i> = <i>v</i><sup>2</sup>/2 − <i>GM</i>/<i>r</i>, get <i>a</i> = −<i>GM</i>/(2<i>ε</i>), then the other apsis from <i>r</i><sub><i>p</i></sub> + <i>r</i><sub><i>a</i></sub> = 2<i>a</i>',
    why: 'If <i>r</i> > <i>a</i>, the burn point is the apogee; and if <i>r</i><sub><i>p</i></sub> < <i>R</i>, the ellipse dips into the planet.',
    say: null,
  },

  // ── Additional C · Planets That Are Not Uniform: Fields from Piecewise and Graded Density ──
  // p. 537
  {
    topic: 8,
    kind: 'remember',
    q: 'The field inside a planet whose density <i>ρ</i>(<i>r</i>) varies with radius?',
    a: '|<i>E</i>(<i>r</i>)| = <i>GM</i><sub>enc</sub>(<i>r</i>)/<i>r</i><sup>2</sup>, inward, with <i>M</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> 4π<i>r</i>′<sup>2</sup><i>ρ</i>(<i>r</i>′) d<i>r</i>′',
    why: '<i>E</i>(<i>r</i>) is continuous across any density jump; only its slope jumps.',
    say: null,
  },
  // p. 539
  {
    topic: 8,
    kind: 'remember',
    q: 'A planet’s density falls linearly to zero at its surface, <i>ρ</i> = <i>ρ</i><sub>0</sub>(1 − <i>r</i>/<i>R</i>). Where is <i>g</i> largest?',
    a: 'Inside, at <i>r</i> = 2<i>R</i>/3, where <i>g</i><sub>max</sub> is 4/3 of the surface value',
    why: 'So the uniform sphere’s “peak at the surface” is a special case, not a law.',
    say: null,
  },

  // ── Additional D · Off the Axes: Arcs at Their Centres, and Tunnels That Miss the Centre ──
  // p. 541
  {
    topic: 9,
    kind: 'remember',
    q: 'The field at the centre of a uniform arc (linear density <i>λ</i>, radius <i>R</i>) spanning −<i>α</i> to +<i>α</i> from its bisector?',
    a: '<i>E</i> = 2<i>Gλ</i> sin <i>α</i>/<i>R</i>, pointing from the centre toward the midpoint of the arc',
    why: 'A semicircle of mass <i>M</i> gives 2<i>GM</i>/(π<i>R</i><sup>2</sup>); a full ring gives zero.',
    say: null,
  },
  // pp. 542–543
  {
    topic: 9,
    kind: 'remember',
    q: 'A bead slides in a straight tunnel that misses the centre of a uniform, non-rotating planet. Its period?',
    a: '<i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min, the same for every chord; any crossing takes <i>T</i>/2 ≈ 42.3 min',
    why: 'The amplitude is half the chord: <i>A</i> = √(<i>R</i><sup>2</sup> − <i>d</i><sup>2</sup>), with <i>d</i> the tunnel’s closest approach to the centre.',
    say: null,
  },
];
