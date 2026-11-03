/**
 * KEY POINTS for Physics Class 12, Chapter 5 (Magnetism and Matter).
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
 * is upright, μ<sub>0</sub>/(4π) bracketed. Subscripts that are words or
 * labels stay upright (<i>B</i><sub>H</sub>, <i>B</i><sub>axial</sub>,
 * <i>μ</i><sub>r</sub>, <i>T</i><sub>c</sub>, <i>q</i><sub>m</sub>); a
 * subscript that is a variable stays italic (<i>F</i><sub><i>x</i></sub>);
 * vectors keep their arrows (<i>m⃗</i>, <i>B⃗</i>, d<i>A⃗</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Bar Magnet, Magnetic Field Lines and Dipole Moment ──
  // pp. 332, 339
  {
    topic: 0,
    kind: 'remember',
    q: 'The torque and potential energy of a magnetic dipole in a uniform field, and where is each extreme?',
    a: '<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>, |<i>τ⃗</i>| = <i>mB</i> sin <i>θ</i>: maximum at 90°, zero at 0° or 180°. <i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>: minimum (stable) at 0°, maximum (unstable) at 180°',
    why: '<i>θ</i> is the angle between <i>m⃗</i> and <i>B⃗</i>, with <i>U</i> = 0 chosen at 90°. Rotating it from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub> takes <i>W</i> = <i>mB</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>).',
    say: 'Torque turns, energy stores — torque peaks sideways (90°), energy bottoms out when aligned.',
  },
  // pp. 331–332, 339
  {
    topic: 0,
    kind: 'remember',
    q: 'The magnetic dipole moment of a bar magnet, and which way does it point?',
    a: '<i>m</i> = <i>q</i><sub>m</sub>(2<i>l</i>) in the pole model (<i>m⃗</i> = <i>NIA⃗</i> for a coil), in A m<sup>2</sup> or J T<sup>−1</sup>, pointing from S to N inside the magnet',
    why: 'Its field lines are closed loops: N to S outside, S to N inside, never crossing, crowded where <i>B</i> is strong. Monopoles don’t exist, so the pole model is a calculational convenience only.',
    say: null,
  },
  // pp. 332, 338–339
  {
    topic: 0,
    kind: 'mixup',
    q: 'The field of a short bar magnet at a distance <i>r</i> on its axis and on its equatorial line: size and direction?',
    a: '<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π))(2<i>m</i>/<i>r</i><sup>3</sup>), along <i>m⃗</i>. <i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/(4π))(<i>m</i>/<i>r</i><sup>3</sup>), opposite to <i>m⃗</i>. At the same distance, 2 ∶ 1',
    why: 'Valid for a short magnet, <i>r</i> ≫ <i>l</i> (<i>l</i> the half-length). Up close use the full forms, (μ<sub>0</sub>/(4π))2<i>mr</i>/(<i>r</i><sup>2</sup> − <i>l</i><sup>2</sup>)<sup>2</sup> and (μ<sub>0</sub>/(4π))<i>m</i>/(<i>r</i><sup>2</sup> + <i>l</i><sup>2</sup>)<sup>3/2</sup>.',
    say: 'Axial is Ahead (along <i>m⃗</i>), Equatorial is Against (opposite <i>m⃗</i>).',
  },
  // pp. 332, 335, 339
  {
    topic: 0,
    kind: 'mistake',
    q: 'A bar magnet sits in a uniform magnetic field. Is there a net force pushing it?',
    a: 'No: the forces on its two poles are equal and opposite, so the net force is exactly zero and only a torque acts',
    why: 'A net translational force needs a non-uniform field: aligned with the field, a dipole feels <i>F</i> = <i>m</i> d<i>B</i>/d<i>x</i>, pulled toward the stronger field. No gradient, no pull.',
    say: null,
  },
  // pp. 337–339
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A bar magnet is bent or cut. The fast way to its new moment?',
    a: 'Ask only what happens to pole strength and to pole separation. Bent into a semicircle, the poles are a diameter 2<i>L</i>/π apart, so <i>M</i> → 2<i>M</i>/π. Cut in half across its length, <i>m</i> → <i>m</i>/2',
    why: 'In <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)) the half magnet also has <i>I</i>/8, so its period is <i>T</i>/2. For comparing fields at the same distance, never plug numbers: axial ∶ equatorial = 2 ∶ 1.',
    say: null,
  },

  // ── Topic 02 · Earth’s Magnetism ──
  // pp. 341, 343, 348
  {
    topic: 1,
    kind: 'remember',
    q: 'The Earth’s total field <i>B</i><sub>E</sub> at a place has dip <i>δ</i>. Its horizontal and vertical components?',
    a: '<i>B</i><sub>H</sub> = <i>B</i><sub>E</sub> cos <i>δ</i> and <i>B</i><sub>V</sub> = <i>B</i><sub>E</sub> sin <i>δ</i>, so tan <i>δ</i> = <i>B</i><sub>V</sub>/<i>B</i><sub>H</sub> and <i>B</i><sub>E</sub> = √(<i>B</i><sub>H</sub><sup>2</sup> + <i>B</i><sub>V</sub><sup>2</sup>)',
    why: 'Dip is measured from the horizontal, so cosine pairs with <i>B</i><sub>H</sub>. Declination <i>α</i>, dip <i>δ</i> and <i>B</i><sub>H</sub> together fix the field vector.',
    say: 'Cos for the Crawling (horizontal), Sin for the Sinking (vertical).',
  },
  // pp. 340–341, 343, 348
  {
    topic: 1,
    kind: 'remember',
    q: 'In the centred-dipole model, how is the dip <i>δ</i> related to the magnetic latitude <i>λ</i>, and how does the total field vary?',
    a: 'tan <i>δ</i> = 2 tan <i>λ</i>, and <i>B</i><sub>E</sub> = (μ<sub>0</sub>/(4π))(<i>M</i>/<i>r</i><sup>3</sup>)√(1 + 3 sin<sup>2</sup> <i>λ</i>): least at the magnetic equator (dip 0°), twice that at the magnetic poles (dip 90°)',
    why: '<i>λ</i> is the magnetic latitude: the dipole is tilted about 11.3° from the rotation axis, and local anomalies bend the relation. The pole near geographic North is a magnetic South pole.',
    say: 'Dip Doubles the tangent — tan <i>δ</i> = 2 tan <i>λ</i>.',
  },
  // pp. 340–341, 348
  {
    topic: 1,
    kind: 'mixup',
    q: 'Isogonic, agonic, isoclinic and aclinic lines: what does each join?',
    a: 'Isogonic: places of equal declination. Agonic: zero declination. Isoclinic: equal dip. Aclinic: zero dip, which is the magnetic equator',
    why: 'Declination is the angle between true (geographic) north and magnetic north, in the horizontal plane; dip is the field’s tilt below the horizontal.',
    say: 'AGonic = A Goose-egg of declination (zero); isoGONIC = equal anGle (declination).',
  },
  // pp. 343–344, 347
  {
    topic: 1,
    kind: 'mistake',
    q: 'A dip circle whose plane is turned by <i>β</i> from the magnetic meridian reads an apparent dip <i>δ</i>′. Is the true dip larger?',
    a: 'No, smaller: tan <i>δ</i>′ = tan <i>δ</i>/cos <i>β</i> ≥ tan <i>δ</i>, because the needle feels only <i>B</i><sub>H</sub> cos <i>β</i> while <i>B</i><sub>V</sub> is unchanged',
    why: 'Perpendicular to the meridian it stands straight down, at 90°. Readings in two perpendicular vertical planes give the true dip from cot<sup>2</sup> <i>δ</i> = cot<sup>2</sup> <i>δ</i><sub>1</sub> + cot<sup>2</sup> <i>δ</i><sub>2</sub>.',
    say: null,
  },
  // pp. 347–348
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Given two of <i>B</i><sub>E</sub>, <i>B</i><sub>H</sub>, <i>B</i><sub>V</sub> and <i>δ</i>, find the rest. The fast way?',
    a: 'Draw the single right triangle, <i>B</i><sub>E</sub> as hypotenuse and <i>δ</i> from the horizontal, and read everything off it: no formula memorisation needed',
    why: 'Keep the two anchor facts in your pocket: equator → dip 0°, field weakest; pole → dip 90°, field strongest (twice equatorial).',
    say: null,
  },

  // ── Topic 03 · Magnetic Properties of Materials ──
  // pp. 350, 352, 357
  {
    topic: 2,
    kind: 'remember',
    q: 'How are <i>B</i>, <i>H</i>, the magnetisation <i>M</i>, the susceptibility <i>χ</i> and the relative permeability <i>μ</i><sub>r</sub> related?',
    a: '<i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>), <i>M</i> = <i>χH</i>, so <i>μ</i><sub>r</sub> = 1 + <i>χ</i>, <i>μ</i> = μ<sub>0</sub><i>μ</i><sub>r</sub> and <i>B</i> = <i>μH</i>. <i>H</i> and <i>M</i> are both in A m<sup>−1</sup>',
    why: '<i>M</i> = <i>χH</i> with a constant <i>χ</i> holds only for linear materials, dia and para. Ferromagnets are non-linear: <i>χ</i> depends on <i>H</i> and on past history (hysteresis).',
    say: '<i>μ</i><sub>r</sub> = 1 + <i>χ</i> — never forget the 1.',
  },
  // pp. 350, 353, 357
  {
    topic: 2,
    kind: 'remember',
    q: 'How does the susceptibility of a paramagnet depend on temperature, and what happens to a ferromagnet above its Curie temperature <i>T</i><sub>c</sub>?',
    a: 'Paramagnet, far from saturation: Curie’s law, <i>χ</i> = <i>C</i>/<i>T</i>. Above <i>T</i><sub>c</sub> a ferromagnet’s domains dissolve and it becomes paramagnetic, with <i>χ</i> = <i>C</i>/(<i>T</i> − <i>T</i><sub>c</sub>) (Curie–Weiss)',
    why: 'Using the wrong one near a transition is a classic JEE trap. Representative <i>T</i><sub>c</sub>: iron ≈ 1043 K, nickel ≈ 631 K.',
    say: null,
  },
  // pp. 349, 352, 357
  {
    topic: 2,
    kind: 'mixup',
    q: 'Diamagnetic, paramagnetic and ferromagnetic: the sign and size of <i>χ</i>, and <i>μ</i><sub>r</sub>?',
    a: 'Dia: <i>χ</i> small and negative (∼ −10<sup>−5</sup>), <i>μ</i><sub>r</sub> slightly < 1, feebly repelled. Para: small and positive (∼ +10<sup>−5</sup>), <i>μ</i><sub>r</sub> slightly > 1, feebly attracted. Ferro: large and positive (∼ 10<sup>3</sup>), <i>μ</i><sub>r</sub> ≫ 1, strongly attracted',
    why: 'Diamagnetism is present in every material, masked when para or ferro effects coexist. A superconductor is a perfect diamagnet: <i>χ</i> = −1, <i>μ</i><sub>r</sub> = 0.',
    say: 'Dia Dodges, Para Pulls in a little, Ferro Forces.',
  },
  // p. 356
  {
    topic: 2,
    kind: 'mistake',
    q: 'A material has susceptibility <i>χ</i>. Is its relative permeability <i>μ</i><sub>r</sub> = <i>χ</i>?',
    a: 'No: <i>μ</i><sub>r</sub> = 1 + <i>χ</i>. The “+1” matters enormously for dia and para, where <i>χ</i> is tiny',
    why: 'Keep the sign too: a diamagnet’s <i>χ</i> is negative, which is the whole reason its <i>μ</i><sub>r</sub> < 1 and it is repelled.',
    say: null,
  },
  // p. 356
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Classifying any material in one glance. The fast way?',
    a: 'Look only at <i>χ</i> (or <i>μ</i><sub>r</sub> against 1): sign first, size second. Negative → dia; small positive → para; huge → ferro',
    why: 'For applications: “needs to stay magnetised” → hard, high coercivity → permanent magnet; “needs to switch cheaply” → soft, low coercivity → transformer or electromagnet.',
    say: null,
  },

  // ── Topic 04 · Magnetism and Gauss’s Law ──
  // pp. 359, 364
  {
    topic: 3,
    kind: 'remember',
    q: 'Gauss’s law for magnetism, and what does it say about magnetic poles?',
    a: '∮<i>B⃗</i> · d<i>A⃗</i> = 0 for every closed surface: there are no magnetic monopoles, and field lines are continuous closed loops',
    why: 'Compare the electric law, ∮<i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub>: electric fields have sources (charges), magnetic fields have none. It is one of Maxwell’s four equations.',
    say: 'Closed surface? Flux is zero — full stop.',
  },
  // pp. 359, 364
  {
    topic: 3,
    kind: 'remember',
    q: 'The magnetic flux through a flat area <i>A</i> in a uniform field, and its unit?',
    a: 'Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i>, with <i>θ</i> between <i>B⃗</i> and the area’s normal; in general Φ<sub>B</sub> = ∫<i>B⃗</i> · d<i>A⃗</i>. Unit: weber, 1 Wb = 1 T m<sup>2</sup> = 1 V s',
    why: 'Flux is a signed scalar: outward positive, inward negative. That is why <i>B⃗</i> is also called magnetic flux density, 1 T = 1 Wb m<sup>−2</sup>.',
    say: 'Weber = Tesla × Area — flux is field caught by an area.',
  },
  // pp. 359–361, 364
  {
    topic: 3,
    kind: 'mixup',
    q: 'The flux through a closed surface, and through an open one such as a coil?',
    a: 'Closed surface: always zero. Open surface (a coil, one face of a box): generally nonzero, and a change in that flux is what drives electromagnetic induction',
    why: 'Two open surfaces on the same boundary loop link the same flux: the flux through a loop depends only on the loop, not on the surface spanning it.',
    say: null,
  },
  // pp. 358, 362–364
  {
    topic: 3,
    kind: 'mistake',
    q: 'A closed surface is sealed around the north pole of a bar magnet. Is the net flux out of it positive?',
    a: 'No, zero: the lines that leave near the pole curve round and re-enter, and inside the magnet they run S to N to close the loop',
    why: 'No isolated pole, no net source: there is no “magnetic charge” term like <i>q</i>/ε<sub>0</sub>.',
    say: null,
  },
  // pp. 362, 364
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Net flux through a closed surface, or an unknown flux through one face of it. The fast way?',
    a: 'For the net flux, write 0, never integrate. For a split surface, enforce “signed fluxes sum to zero” and solve for the unknown',
    why: '8.0 mWb entering one end-cap of a cylinder and 3.0 mWb leaving the curved side means −8.0 + 3.0 + Φ<sub>2</sub> = 0: 5.0 mWb out through the other cap.',
    say: null,
  },

  // ── Topic 05 · Permanent Magnets and Electromagnets ──
  // pp. 365–366, 371
  {
    topic: 4,
    kind: 'remember',
    q: 'The field inside a long solenoid with a core, and when does the formula hold?',
    a: '<i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> = <i>μnI</i>, with <i>n</i> = <i>N</i>/<i>L</i> turns per unit length. An air core has <i>μ</i><sub>r</sub> = 1; soft iron multiplies the field by hundreds to thousands',
    why: 'It assumes the core is unsaturated with <i>μ</i><sub>r</sub> roughly constant; near saturation <i>μ</i><sub>r</sub> drops and the field stops rising in proportion to current.',
    say: null,
  },
  // pp. 365–366, 368, 371
  {
    topic: 4,
    kind: 'remember',
    q: 'What hysteresis properties does a permanent magnet need, and the core of an electromagnet?',
    a: 'Permanent magnet (steel, Alnico, ferrite, Nd–Fe–B): high retentivity and high coercivity, a wide loop. Electromagnet core (soft iron): high permeability, low retentivity and low coercivity, a thin loop',
    why: 'The loop area is the energy dissipated per unit volume per cycle, so a transformer or AC electromagnet, cycled many times a second, needs a thin loop to avoid overheating.',
    say: 'Soft for Switching, Hard for Holding.',
  },
  // pp. 366, 371
  {
    topic: 4,
    kind: 'mixup',
    q: 'Retentivity and coercivity: what does each measure?',
    a: 'Retentivity: the <i>B</i> (or <i>M</i>) left when <i>H</i> is brought back to zero, how much magnetism it keeps. Coercivity: the reverse <i>H</i> needed to drive <i>B</i> back to zero, how hard it is to erase',
    why: 'Permanent magnets need both high, but coercivity is the make-or-break property.',
    say: 'Retentivity = what’s Retained; Coercivity = force to Cancel.',
  },
  // pp. 366, 371
  {
    topic: 4,
    kind: 'mistake',
    q: 'A horseshoe electromagnet grips an armature with two pole faces, each of area <i>A</i>. Is the force <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>)?',
    a: 'No, that is per pole face. With two faces, <i>F</i><sub>total</sub> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub>',
    why: 'Both assume the pole faces and the load are in flush, gap-free contact: even a thin air gap slashes the force dramatically.',
    say: null,
  },
  // pp. 369, 371
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A lifting-force numerical gives the pole faces in cm<sup>2</sup>. The two checks before you plug in?',
    a: 'Check whether the magnet has one pole face or two, and convert the area from cm<sup>2</sup> to m<sup>2</sup>, a factor of 10<sup>−4</sup> that students routinely drop',
    why: '1.5 T at two faces of 8.0 cm<sup>2</sup> each gives <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub> ≈ 1.4 × 10<sup>3</sup> N, enough to hold about 146 kg.',
    say: null,
  },

  // ── Additional A · Force on a Magnetic Dipole in a Non-Uniform Field ──
  // pp. 372–373, 375
  {
    topic: 5,
    kind: 'remember',
    q: 'The force on a magnetic dipole of fixed orientation in a non-uniform field, by the energy-gradient method?',
    a: '<i>U</i> = −<i>m⃗</i> · <i>B⃗</i>, so <i>F⃗</i> = −∇<i>U</i> = ∇(<i>m⃗</i> · <i>B⃗</i>). For a dipole aligned along <i>x</i> in a field varying along <i>x</i>, <i>F</i><sub><i>x</i></sub> = <i>m</i> d<i>B</i><sub><i>x</i></sub>/d<i>x</i>, toward the stronger field',
    why: '<i>m</i> = 2.0 A m<sup>2</sup> in a field rising at 0.80 T/m feels 1.6 N toward increasing field. A dipole antiparallel to the field is pushed toward the weaker field instead.',
    say: null,
  },
  // pp. 375–376
  {
    topic: 5,
    kind: 'remember',
    q: 'A small magnet sits at the centre of a current loop, or at the midpoint of a Helmholtz pair. The force on it?',
    a: 'Zero: the field is strongest there but its gradient is zero, and the force follows the gradient of <i>B</i>, not <i>B</i> itself',
    why: 'Off-centre on the loop’s axis, with <i>m⃗</i> along the field, the force points back toward the centre.',
    say: null,
  },

  // ── Additional B · Time Period via Energy Conservation ──
  // pp. 376–377
  {
    topic: 6,
    kind: 'remember',
    q: 'Derive the period of a bar magnet (moment of inertia <i>I</i>, moment <i>m</i>) oscillating in a uniform field <i>B</i> from energy conservation.',
    a: '<i>E</i> = ½<i>Iθ̇</i><sup>2</sup> − <i>mB</i> cos <i>θ</i> = constant. d<i>E</i>/d<i>t</i> = 0 and factoring out <i>θ̇</i> give <i>Iθ̈</i> + <i>mB</i> sin <i>θ</i> = 0; for small angles <i>ω</i> = √(<i>mB</i>/<i>I</i>), <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>))',
    why: 'The motion is simple harmonic only for small angles: the linearisation sin <i>θ</i> ≈ <i>θ</i> is the key step.',
    say: null,
  },
  // pp. 377–378
  {
    topic: 6,
    kind: 'remember',
    q: 'In the energy method, how do you read <i>ω</i> once the potential energy is harmonic?',
    a: 'Write <i>U</i> ≈ ½<i>k</i><sub>eff</sub><i>q</i><sup>2</sup>; then <i>ω</i><sup>2</sup> = <i>k</i><sub>eff</sub>/<i>m</i><sub>eff</sub>, just like a spring',
    why: 'A 50 g floating magnet with <i>k</i><sub>eff</sub> = 2.0 N m<sup>−1</sup> (magnetic plus buoyancy) has <i>T</i> = 2π√(<i>m</i>/<i>k</i><sub>eff</sub>) ≈ 1.0 s, without separating the two forces.',
    say: null,
  },

  // ── Additional C · Magnetic Circuits ──
  // p. 379
  {
    topic: 7,
    kind: 'remember',
    q: 'In the magnetic-circuit analogy, what plays the part of emf, current and resistance?',
    a: 'MMF ℱ = <i>NI</i> (ampere-turns) for emf, flux Φ for current, reluctance ℛ = <i>l</i>/(<i>μA</i>) (H<sup>−1</sup>) for resistance, with Φ = ℱ/ℛ',
    why: 'Reluctances add like resistances: in series ℛ = Σℛ<sub><i>i</i></sub>, in parallel 1/ℛ = Σ1/ℛ<sub><i>i</i></sub>.',
    say: null,
  },
  // pp. 380, 382
  {
    topic: 7,
    kind: 'remember',
    q: 'The flux in a toroid (mean radius <i>r</i>, cross-section <i>A</i>, <i>N</i> turns) with an air gap of length <i>δ</i>?',
    a: 'Φ = <i>NI</i>/(ℛ<sub>core</sub> + ℛ<sub>gap</sub>) = <i>NI</i>/((2π<i>r</i>)/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>) + <i>δ</i>/(μ<sub>0</sub><i>A</i>)): the two reluctances add in series',
    why: 'A 1.0 mm gap can rival a 50 cm iron path of <i>μ</i><sub>r</sub> = 600 (2.65 × 10<sup>6</sup> against 2.22 × 10<sup>6</sup> H<sup>−1</sup>). When the gap dominates, <i>B</i> ≈ μ<sub>0</sub><i>NI</i>/<i>δ</i>.',
    say: null,
  },

  // ── Additional D · Neutral Points and Field Superposition ──
  // pp. 382–383, 385
  {
    topic: 8,
    kind: 'remember',
    q: 'On the axial line of a short magnet, which way does its field point beyond the S pole?',
    a: 'Along <i>m⃗</i>, as everywhere on the axis: beyond the N pole it points away from the N pole, beyond the S pole toward the S pole. On the equatorial line it points opposite to <i>m⃗</i>',
    why: 'So two magnets on one axis with both moments the same way have no null point anywhere on that axis: their fields always add (Earth’s field neglected).',
    say: null,
  },
  // pp. 382–383
  {
    topic: 8,
    kind: 'remember',
    q: 'Two identical short magnets lie a distance <i>d</i> apart on the <i>x</i>-axis, moments the same way. Where on the perpendicular bisector is the net field zero (Earth’s field neglected)?',
    a: 'At <i>y</i> = ±<i>d</i>/√2, on either side of the midpoint, where 3 cos<sup>2</sup> <i>α</i> − 1 = 0, i.e. cos <i>α</i> = 1/√3',
    why: 'Each magnet’s <i>x</i>-component there is (μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>))(3 cos<sup>2</sup> <i>α</i> − 1); the <i>y</i>-components cancel by symmetry. For <i>d</i> = 20 cm, |<i>y</i>| ≈ 14.1 cm.',
    say: null,
  },

  // ── Additional E · Magnetic Shielding and Hysteresis Energy ──
  // p. 386
  {
    topic: 9,
    kind: 'remember',
    q: 'A long cylindrical shell (radii <i>r</i><sub>1</sub> < <i>r</i><sub>2</sub>, relative permeability <i>μ</i><sub>r</sub>) sits in a transverse field <i>B</i><sub>0</sub>. The field in its bore?',
    a: '<i>B</i><sub>in</sub>/<i>B</i><sub>0</sub> = 4<i>μ</i><sub>r</sub><i>r</i><sub>2</sub><sup>2</sup>/[(<i>μ</i><sub>r</sub> + 1)<sup>2</sup><i>r</i><sub>2</sub><sup>2</sup> − (<i>μ</i><sub>r</sub> − 1)<sup>2</sup><i>r</i><sub>1</sub><sup>2</sup>]; for a thin wall <i>t</i>, ≈ 1/(1 + <i>μ</i><sub>r</sub><i>t</i>/(2<i>r</i><sub>2</sub>))',
    why: 'Radii 3.0 and 3.5 cm with <i>μ</i><sub>r</sub> = 1000 cut the field by a factor of about 67. A long open tube gives almost no shielding against a field along its axis.',
    say: null,
  },
  // pp. 386–387
  {
    topic: 9,
    kind: 'remember',
    q: 'The power lost to hysteresis in a core of volume <i>V</i> cycled at frequency <i>f</i>?',
    a: '<i>P</i> = <i>f</i> × (loop area) × <i>V</i>: the <i>B</i>–<i>H</i> loop area is the energy lost per unit volume per cycle',
    why: 'The loss scales linearly with frequency: a 200 J m<sup>−3</sup> loop in 1.5 × 10<sup>−6</sup> m<sup>3</sup> of ferrite at 1.0 MHz loses 300 W.',
    say: null,
  },
];
