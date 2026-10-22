import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional Topics A to E, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 314, set at
 * the head of Addendum A), then A The Helmholtz Coil Pair (pp. 314 to 318),
 * B Force on a Dipole and Magnetic Energy (pp. 318 to 321), C The Compass
 * Needle and Relativistic Cyclotron (pp. 321 to 324), D Three Things the
 * Chapter Names but Never Computes (pp. 324 to 326) and E The Magnetic Scalar
 * Potential (pp. 327 to 329). Each addendum prints its own practice problems
 * and answers. These pages print no drawings. The book's errata for Addendum E
 * (vectors printed without arrow or hat) are applied: B is written B⃗ and θ is
 * written θ̂ in those displays.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 314–318 ─────────────────────────
  {
    n: 'A',
    title: 'The Helmholtz Coil Pair and Uniform Field Region',
    extra: true,
    kalam:
      'Addendum A takes Topic 01’s Biot–Savart and Topic 02’s symmetry arguments to their logical conclusion: the Helmholtz coil pair.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the Biot–Savart law, Ampère’s circuital law, the Lorentz force, torque on current loops, galvanometer conversion, and the magnetic dipole. Five JEE patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A takes Topic 01’s Biot–Savart and Topic 02’s symmetry arguments to their logical conclusion: the Helmholtz coil pair, which produces a genuinely uniform field over a measurable region and appears in JEE Advanced’s mass spectrometer and velocity selector context. Addendum B marries Topic 03’s Lorentz force with Topic 05’s magnetic dipole moment: the force on a dipole in a non-uniform field and the energy stored in a magnetic field. Addendum C deepens Topic 03’s torque analysis to cover the compass-needle oscillation (the magnetic analogue of the torsional pendulum) and the relativistic correction to the cyclotron that the chapter states but does not derive. Addendum D tackles three things the chapter names but never computes: the exact field at the centre of a current-carrying ring (not just the loop result but a disc of current), the force between two current loops, and the torque on a magnetic dipole in a rotating field. Addendum E is the “prove it from scratch” laboratory: building the magnetic scalar potential from ∇ × <i>B⃗</i> = 0 in current-free regions (with ∇ · <i>B⃗</i> = 0 then giving Laplace’s equation), using it to solve for <i>B</i> in geometries where the Biot–Savart integral is intractable, and matching boundary conditions at interfaces.<br><br>Numbering continues from the chapter’s Topic 05. Nothing here is new theory. Every method below is the Biot–Savart law, Ampère’s circuital law, or the Lorentz force, applied one step earlier or one dimension wider.',
      },
      {
        t: 'p',
        html: 'Topic 02 derives the ideal solenoid field μ<sub>0</sub><i>nI</i> using a rectangular Amperian loop and shows it is uniform inside. But a solenoid of finite length produces a uniform field only over a limited region near its centre, and its ends introduce fringing. JEE Advanced regularly needs a uniform field region that is open and easy to reach, which the inside of a solenoid is not, and the standard laboratory solution is the Helmholtz coil pair — two identical circular loops separated by a distance equal to their radius, driven in the same sense. This configuration produces a field that is uniform to one part in 10<sup>4</sup> within about <i>R</i>/10 of the midpoint, and it is a standard field source in <i>e</i>/<i>m</i> (charge-to-mass) experiments, velocity-selector demonstrations and NMR demonstrations.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Helmholtz coil geometry.</b> Two identical coils, each with <i>N</i> turns, radius <i>R</i>, carrying current <i>I</i> in the same direction. Their centres are separated by distance <i>d</i>. The midpoint between them is the field point of interest.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Field from one coil on the axis.</b> From Topic 01, the field on the axis of a single circular loop at distance <i>x</i> from its centre is:<br><i>B</i><sub>single</sub>(<i>x</i>) = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Superpose two coils.</b> With the second coil centred at <i>x</i> = <i>d</i>, its contribution at the midpoint (<i>x</i> = <i>d</i>/2 from the first coil’s centre) is:<br><i>B</i><sub>pair</sub> = (μ<sub>0</sub><i>NIR</i><sup>2</sup>/2) [1/(<i>R</i><sup>2</sup> + (<i>d</i>/2)<sup>2</sup>)<sup>3/2</sup> + 1/(<i>R</i><sup>2</sup> + (<i>d</i>/2)<sup>2</sup>)<sup>3/2</sup>] = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(<i>R</i><sup>2</sup> + <i>d</i><sup>2</sup>/4)<sup>3/2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Uniformity condition.</b> Differentiate <i>B</i>(<i>x</i>) with respect to the field-point coordinate <i>x</i> (measured from the midpoint) and set the second derivative to zero at <i>x</i> = 0. This identifies the separation that makes the field as flat as possible at the centre. Carrying units through:<br><i>B</i>(<i>x</i>) = (μ<sub>0</sub><i>NIR</i><sup>2</sup>/2) [(<i>R</i><sup>2</sup> + (<i>d</i>/2 − <i>x</i>)<sup>2</sup>)<sup>−3/2</sup> + (<i>R</i><sup>2</sup> + (<i>d</i>/2 + <i>x</i>)<sup>2</sup>)<sup>−3/2</sup>].<br>d<i>B</i>/d<i>x</i> = 0 at <i>x</i> = 0 by symmetry. The second derivative at the centre is:<br>d<sup>2</sup><i>B</i>/d<i>x</i><sup>2</sup> (at <i>x</i> = 0) = 3μ<sub>0</sub><i>NIR</i><sup>2</sup>(<i>d</i><sup>2</sup> − <i>R</i><sup>2</sup>)/[(<i>R</i><sup>2</sup> + <i>d</i><sup>2</sup>/4)<sup>3</sup> · √(<i>R</i><sup>2</sup> + <i>d</i><sup>2</sup>/4)]<br>Setting this to zero for maximum flatness:<br><i>d</i><sup>2</sup> − <i>R</i><sup>2</sup> = 0 ⟹ <i>d</i> = <i>R</i>.',
      },
      {
        t: 'p',
        html: 'At <i>d</i> = <i>R</i> the second derivative vanishes, and by symmetry so do all the odd derivatives, so the field departs from its midpoint value only at fourth order, <i>B</i> ≈ <i>B</i><sub>0</sub>[1 − (144/125)(<i>x</i>/<i>R</i>)<sup>4</sup>]: it is uniform to about 0.01% within roughly <i>R</i>/10 of the midpoint.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> μ<sub>0</sub> in T m A<sup>−1</sup>, <i>N</i> dimensionless, <i>I</i> in A, <i>R</i><sup>2</sup> in m<sup>2</sup>. Numerator: T m A<sup>−1</sup> × A × m<sup>2</sup> = T m<sup>3</sup>. Denominator: (m<sup>2</sup> + m<sup>2</sup>) to the power 3/2 = m<sup>3</sup>. Result: T. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Field at the Centre of a Helmholtz Pair',
        q: 'Two circular coils, each of radius <i>R</i> = 10 cm, have <i>N</i> = 100 turns, carry current <i>I</i> = 2.0 A, and are separated by <i>d</i> = 10 cm (the standard configuration). Find the field at the midpoint and compare it with the field at the centre of a single solenoid of the same radius with <i>n</i> = 1000 turns per metre.',
        steps: [
          '<b>Step 1 — Apply the two-coil formula.</b><br><i>B</i><sub>Helmholtz</sub> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(<i>R</i><sup>2</sup> + <i>d</i><sup>2</sup>/4)<sup>3/2</sup> = (4π × 10<sup>−7</sup>)(100)(2.0)(0.10)<sup>2</sup>/((0.10)<sup>2</sup> + (0.10)<sup>2</sup>/4)<sup>3/2</sup>.',
          'Numerator: 4π × 10<sup>−7</sup> × 100 × 2.0 × 0.01 = 2.513 × 10<sup>−6</sup> T m<sup>3</sup>.',
          'Denominator base: 0.01 + 0.0025 = 0.0125 m<sup>2</sup>. Raise to 3/2: (0.0125)<sup>3/2</sup> = (0.0125)√0.0125 = 0.0125 × 0.1118 = 1.397 × 10<sup>−3</sup> m<sup>3</sup>.<br><i>B</i> = 2.513 × 10<sup>−6</sup>/(1.397 × 10<sup>−3</sup>) = 1.80 × 10<sup>−3</sup> T.',
          '<b>Step 2 — Single solenoid comparison.</b> For the solenoid: <i>B</i><sub>sol</sub> = μ<sub>0</sub><i>nI</i> = (4π × 10<sup>−7</sup>)(1000)(2.0) = 2.51 × 10<sup>−3</sup> T = 2.5 mT.',
          '<b>Result.</b> The Helmholtz pair gives about 0.72 times the solenoid field at its centre (1.8 mT against 2.5 mT), but crucially its field is uniform over an extended region. This is why Helmholtz coils are preferred for precision experiments.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Uniformity Deviation',
        q: 'For the standard Helmholtz pair (<i>d</i> = <i>R</i>), show that the field at a point <i>x</i> = <i>R</i>/2 from the midpoint is lower than the centre field by approximately 5.4%.',
        steps: [
          '<b>Step 1 — Centre field with <i>d</i> = <i>R</i>.</b><br><i>B</i><sub>0</sub> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>/4)<sup>3/2</sup> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(5<i>R</i><sup>2</sup>/4)<sup>3/2</sup> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/((5/4)<sup>3/2</sup><i>R</i><sup>3</sup>) = 8μ<sub>0</sub><i>NI</i>/(5√5 <i>R</i>).',
          '<b>Step 2 — Field at <i>x</i> = <i>R</i>/2.</b> Using the two-coil axial formula with <i>d</i> = <i>R</i>:<br><i>B</i>(<i>x</i>) = (μ<sub>0</sub><i>NIR</i><sup>2</sup>/2) [(<i>R</i><sup>2</sup> + (<i>R</i>/2 − <i>x</i>)<sup>2</sup>)<sup>−3/2</sup> + (<i>R</i><sup>2</sup> + (<i>R</i>/2 + <i>x</i>)<sup>2</sup>)<sup>−3/2</sup>].',
          'Put <i>x</i> = <i>R</i>/2: the left term has (<i>R</i>/2 − <i>R</i>/2) = 0, so it contributes μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(<i>R</i><sup>2</sup>)<sup>3/2</sup>) = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2<i>R</i><sup>3</sup>) = μ<sub>0</sub><i>NI</i>/(2<i>R</i>).<br>The right term has (<i>R</i>/2 + <i>R</i>/2) = <i>R</i>, contributing μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>) = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(2(2<i>R</i><sup>2</sup>)<sup>3/2</sup>) = μ<sub>0</sub><i>NI</i>/(2√8 <i>R</i>) = μ<sub>0</sub><i>NI</i>/(4√2 <i>R</i>).<br><i>B</i>(<i>R</i>/2) = (μ<sub>0</sub><i>NI</i>/<i>R</i>)(1/2 + 1/(4√2)) = (μ<sub>0</sub><i>NI</i>/<i>R</i>)(0.500 + 0.177) = 0.677μ<sub>0</sub><i>NI</i>/<i>R</i>.',
          '<b>Step 3 — Ratio.</b> Using <i>B</i><sub>0</sub> = 0.716 μ<sub>0</sub><i>NI</i>/<i>R</i> from Step 1, written out below:<br><i>B</i><sub>0</sub> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>/4)<sup>3/2</sup> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(5<i>R</i><sup>2</sup>/4)<sup>3/2</sup> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/((5<sup>3/2</sup>/8)<i>R</i><sup>3</sup>) = 8μ<sub>0</sub><i>NI</i>/(5√5 <i>R</i>) = 0.716μ<sub>0</sub><i>NI</i>/<i>R</i>.',
          'Now <i>B</i>(<i>R</i>/2)/<i>B</i><sub>0</sub> = 0.677/0.716 = 0.946. So the field at <i>R</i>/2 is 0.946<i>B</i><sub>0</sub>, lower by 5.4% — this is the exact value, obtained directly from the closed-form axial-field expression rather than an approximation. It is consistent with the earlier uniformity claim: for <i>d</i> = <i>R</i>, the field stays within 0.01% of <i>B</i><sub>0</sub> only over the tighter region |<i>x</i>| < <i>R</i>/10, so a 5.4% deviation at the more distant point <i>x</i> = <i>R</i>/2 is expected.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Current Direction and Field Polarity',
        q: 'Two Helmholtz coils are to produce a field pointing upward. State the direction of current in each coil and explain why the currents must be in the same sense (not opposite).',
        steps: [
          'By the right-hand grip rule, each coil’s current must circulate so that the field at the midpoint points upward — equivalent to the north pole of a bar magnet facing upward. If the two currents were opposite, the axial fields would cancel exactly at the midpoint (<i>B</i> = 0) and the field would be highly non-uniform. Only same-sense currents superpose constructively to give twice one coil’s field at the midpoint, 2<i>B</i><sub>single</sub>(<i>d</i>/2), and the desired flatness condition.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two identical coils of 50 turns each, radius 8.0 cm, carry 1.5 A in the same direction and are separated by 8.0 cm. Find the field at the midpoint.',
            a: 'Here <i>R</i><sup>2</sup> + <i>d</i><sup>2</sup>/4 = 8.0 × 10<sup>−3</sup> m<sup>2</sup>, so its power 3/2 is 7.16 × 10<sup>−4</sup> m<sup>3</sup>. The numerator is (4π × 10<sup>−7</sup>)(50)(1.5)(0.08)<sup>2</sup> = 6.03 × 10<sup>−7</sup>, giving <i>B</i> = 8.4 × 10<sup>−4</sup> T = 0.84 mT.',
          },
          {
            q: '[JEE Main] Show that for a Helmholtz pair with <i>d</i> = <i>R</i>, the magnetic field at the midpoint is <i>B</i> = (8/(5√5))(μ<sub>0</sub><i>NI</i>/<i>R</i>).',
            a: 'With <i>d</i> = <i>R</i>: <i>B</i> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>/4)<sup>3/2</sup> = μ<sub>0</sub><i>NIR</i><sup>2</sup>/((5<i>R</i><sup>2</sup>/4)<sup>3/2</sup>) = μ<sub>0</sub><i>NIR</i><sup>2</sup>/((5√5/8)<i>R</i><sup>3</sup>) = (8/(5√5))(μ<sub>0</sub><i>NI</i>/<i>R</i>). (Checks out.)',
          },
          {
            q: '[JEE Advanced] Derive the condition <i>d</i> = <i>R</i> for maximum flatness of <i>B</i>(<i>x</i>) at the centre of a Helmholtz pair.',
            a: 'From d<sup>2</sup><i>B</i>/d<i>x</i><sup>2</sup> ∝ (<i>d</i><sup>2</sup> − <i>R</i><sup>2</sup>) = 0 ⟹ <i>d</i> = <i>R</i>. (As derived in the method.)',
          },
          {
            q: '[JEE Advanced] A particle of charge <i>q</i> passes through the uniform field region of a Helmholtz pair (radius <i>R</i>, <i>N</i> turns, current <i>I</i>) along the axis. Show that it undergoes no deflection regardless of its velocity, and explain the physical reason.',
            a: 'On the axis of the coils, <i>B⃗</i> is parallel to the axis. A charge moving along the axis has <i>v⃗</i> ∥ <i>B⃗</i>, so <i>F⃗</i> = <i>q</i>(<i>v⃗</i> × <i>B⃗</i>) = 0. No deflection.',
          },
          {
            q: '[JEE Advanced] Show that the field at the centre of a single turn of radius <i>R</i> is μ<sub>0</sub><i>I</i>/(2<i>R</i>). Two such turns, separated by <i>R</i> (Helmholtz configuration), produce <i>B</i> = 8μ<sub>0</sub><i>I</i>/(5√5 <i>R</i>) at the midpoint. Verify numerically that this is less than twice the single-turn field.',
            a: 'Single turn: <i>B</i><sub>1</sub> = μ<sub>0</sub><i>I</i>/(2<i>R</i>). Two-turn Helmholtz (<i>d</i> = <i>R</i>): <i>B</i><sub>2</sub> = (8/(5√5))(μ<sub>0</sub><i>I</i>/<i>R</i>) = (16/(5√5))<i>B</i><sub>1</sub> ≈ 1.43<i>B</i><sub>1</sub>. This is less than 2<i>B</i><sub>1</sub> because the two coils are not at the same point — their fields don’t add perfectly at the midpoint. (Checks out: 16/(5 × 2.236) ≈ 1.43.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 318–321 ─────────────────────────
  {
    n: 'B',
    title: 'Force on a Magnetic Dipole in a Non-Uniform Field and Energy in a Magnetic Field',
    extra: true,
    kalam: 'Addendum B marries Topic 03’s Lorentz force with Topic 05’s magnetic dipole moment.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 derives the force on a current-carrying conductor (<i>F⃗</i> = <i>I</i> <i>L⃗</i> × <i>B⃗</i>) and the torque on a magnetic dipole (<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>). But the chapter only touches two critical follow-ons: (i) the force on a dipole when the field itself is non-uniform (Topic 03 works one case, a loop beside a long wire, from the forces on its sides), and (ii) the energy stored in a magnetic field, which is the magnetic analogue of the ½ε<sub>0</sub><i>E</i><sup>2</sup> energy density in an electric field. Both are JEE Advanced staples.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>B1 — Force on a magnetic dipole in a non-uniform field.</b> The potential energy of a dipole is <i>U</i> = −<i>m⃗</i> · <i>B⃗</i>. The force is the negative gradient of this energy:<br><i>F⃗</i> = ∇(<i>m⃗</i> · <i>B⃗</i>).<br>For a dipole aligned with the field (so <i>m⃗</i> · <i>B⃗</i> = <i>mB</i>) in a one-dimensional field <i>B</i>(<i>x</i>):<br><i>F</i><sub><i>x</i></sub> = <i>m</i> d<i>B</i>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: 'Physical reading: the dipole is pulled toward the region of stronger field (if <i>m</i> and <i>B</i> are aligned), because d<i>B</i>/d<i>x</i> > 0 means <i>F</i><sub><i>x</i></sub> > 0. This is why paramagnetic materials are attracted into a magnetic field — each atomic dipole experiences a force toward higher <i>B</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>m</i> in A m<sup>2</sup>, <i>B</i> in T = N A<sup>−1</sup> m<sup>−1</sup>. So <i>m</i> d<i>B</i>/d<i>x</i> has units (A m<sup>2</sup>) × (N A<sup>−1</sup> m<sup>−2</sup>) = N. Correct.',
      },
      {
        t: 'p',
        html: '<b>B2 — Energy stored in a magnetic field.</b> Consider an inductor of inductance <i>L</i> carrying current <i>I</i>. The emf across it is ℰ = −<i>L</i> d<i>I</i>/d<i>t</i>. The power supplied to the inductor is <i>P</i> = −<i>I</i>ℰ = <i>LI</i> d<i>I</i>/d<i>t</i>. Integrating from 0 to <i>I</i>:<br><i>W</i> = ∫<sub>0</sub><sup><i>I</i></sup> <i>LI</i>′ d<i>I</i>′ = ½<i>LI</i><sup>2</sup>.<br>This is the total energy stored. For a solenoid of length <i>l</i> with <i>n</i> turns per unit length and cross-section <i>A</i>, <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i>, and <i>B</i> = μ<sub>0</sub><i>nI</i>, so:<br><i>W</i> = ½<i>LI</i><sup>2</sup> = ½(μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i>)(<i>B</i>/(μ<sub>0</sub><i>n</i>))<sup>2</sup> = (<i>B</i><sup>2</sup>/(2μ<sub>0</sub>))<i>Al</i>.<br>Energy per unit volume:<br><i>W</i>/<i>V</i> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>).',
      },
      {
        t: 'p',
        html: 'This is the magnetic analogue of ½ε<sub>0</sub><i>E</i><sup>2</sup>. The factor of ½ appears in both cases because the energy builds up as the field grows from zero.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force on a Compass Needle Near a Wire',
        q: 'A small compass needle of magnetic moment <i>m</i> = 5.0 × 10<sup>−2</sup> A m<sup>2</sup> is placed at a distance <i>r</i> = 5.0 cm from a long straight wire carrying <i>I</i> = 20 A. The needle is aligned with the wire’s field (stable equilibrium). Find the net force on the needle.',
        steps: [
          '<b>Step 1 — Field from the wire at distance <i>r</i>.</b><br><i>B</i>(<i>r</i>) = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) = (4π × 10<sup>−7</sup> × 20)/(2π × 0.050) = (8 × 10<sup>−6</sup>)/0.10 = 8.0 × 10<sup>−5</sup> T.',
          '<b>Step 2 — Field gradient.</b> The wire field falls as <i>B</i>(<i>r</i>) ∝ 1/<i>r</i>, so:<br>d<i>B</i>/d<i>r</i> = −<i>B</i>/<i>r</i> = −(8.0 × 10<sup>−5</sup>)/(0.050) = −1.6 × 10<sup>−3</sup> T m<sup>−1</sup>.',
          '<b>Step 3 — Force.</b> Since <i>F</i> = <i>m</i> d<i>B</i>/d<i>r</i> (taking magnitude and direction from d<i>B</i>/d<i>r</i> < 0 means force is toward the wire):<br><i>F</i> = (5.0 × 10<sup>−2</sup>)(1.6 × 10<sup>−3</sup>) = 8.0 × 10<sup>−5</sup> N.',
          '<b>Direction:</b> attractive, toward the wire. The needle is pulled into the region of stronger field.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Energy Stored in a Solenoid',
        q: 'A solenoid of length <i>l</i> = 30 cm has <i>N</i> = 500 turns and cross-sectional area <i>A</i> = 4.0 × 10<sup>−4</sup> m<sup>2</sup>. It carries <i>I</i> = 3.0 A. Find (a) the magnetic field, (b) the total energy stored, and (c) the energy density.',
        steps: [
          '<b>(a) Field.</b> <i>n</i> = <i>N</i>/<i>l</i> = 500/0.30 = 1667 turns m<sup>−1</sup>.<br><i>B</i> = μ<sub>0</sub><i>nI</i> = (4π × 10<sup>−7</sup>)(1667)(3.0) = 2π × 10<sup>−3</sup> ≈ 6.28 × 10<sup>−3</sup> T = 6.3 mT.',
          '<b>(b) Total energy.</b> Volume <i>V</i> = <i>Al</i> = (4.0 × 10<sup>−4</sup>)(0.30) = 1.2 × 10<sup>−4</sup> m<sup>3</sup>.<br><i>W</i> = (<i>B</i><sup>2</sup>/(2μ<sub>0</sub>))<i>V</i> = ((6.28 × 10<sup>−3</sup>)<sup>2</sup>/(2 × 4π × 10<sup>−7</sup>))(1.2 × 10<sup>−4</sup>) = ((3.95 × 10<sup>−5</sup>)/(2.51 × 10<sup>−6</sup>))(1.2 × 10<sup>−4</sup>) = 15.7 × 1.2 × 10<sup>−4</sup> = 1.9 × 10<sup>−3</sup> J.',
          'Check via <i>W</i> = ½<i>LI</i><sup>2</sup>: <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> = (4π × 10<sup>−7</sup>)(500)<sup>2</sup>(4.0 × 10<sup>−4</sup>)/0.30 = 4.19 × 10<sup>−4</sup> H. Then <i>W</i> = ½(4.19 × 10<sup>−4</sup>)(9.0) = 1.89 × 10<sup>−3</sup> J. (Matches.)',
          '<b>(c) Energy density.</b><br><i>u</i> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) = (6.28 × 10<sup>−3</sup>)<sup>2</sup>/(2 × 4π × 10<sup>−7</sup>) = (3.95 × 10<sup>−5</sup>)/(2.51 × 10<sup>−6</sup>) = 15.7 J m<sup>−3</sup>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force on a Dipole in a Solenoid Field',
        q: 'A magnetic dipole of moment <i>m</i> is placed at the open end of a long solenoid (where the field drops from <i>B</i><sub>inside</sub> = μ<sub>0</sub><i>nI</i> to approximately <i>B</i><sub>end</sub> = ½μ<sub>0</sub><i>nI</i>). Estimate the force pulling it into the solenoid.',
        steps: [
          'At the end face, the field changes over a distance of order the solenoid radius <i>R</i>. Taking d<i>B</i>/d<i>x</i> ∼ (<i>B</i><sub>inside</sub> − <i>B</i><sub>end</sub>)/<i>R</i> = (μ<sub>0</sub><i>nI</i>/2)/<i>R</i>, the entry force is approximately:<br><i>F</i> ∼ <i>m</i> · μ<sub>0</sub><i>nI</i>/(2<i>R</i>).',
          'This is the principle behind magnetic tweezers used in biophysics to trap and manipulate single molecules.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A solenoid 20 cm long has 1000 turns and carries 2.0 A. Its cross-section is 2.0 × 10<sup>−4</sup> m<sup>2</sup>. Find the energy stored in its magnetic field.',
            a: '<i>B</i> = μ<sub>0</sub><i>nI</i> = (4π × 10<sup>−7</sup>)(5000)(2.0) = 1.26 × 10<sup>−2</sup> T. <i>V</i> = (2.0 × 10<sup>−4</sup>)(0.20) = 4.0 × 10<sup>−5</sup> m<sup>3</sup>. <i>W</i> = <i>B</i><sup>2</sup><i>V</i>/(2μ<sub>0</sub>) = (1.58 × 10<sup>−4</sup>)(4.0 × 10<sup>−5</sup>)/(2.51 × 10<sup>−6</sup>) = 2.5 × 10<sup>−3</sup> J. (Check: <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> = (4π × 10<sup>−7</sup>)(1000)<sup>2</sup>(2.0 × 10<sup>−4</sup>)/0.20 = 1.26 × 10<sup>−3</sup> H, so <i>W</i> = ½<i>LI</i><sup>2</sup> = ½(1.26 × 10<sup>−3</sup>)(4.0) = 2.5 × 10<sup>−3</sup> J.)',
          },
          {
            q: '[JEE Main] A magnetic dipole <i>m</i> = 0.10 A m<sup>2</sup>, aligned with the field, is placed in a field <i>B</i>(<i>x</i>) = 0.50(1 + <i>x</i>/0.10) T, where <i>x</i> is in metres. Find the force on the dipole.',
            a: 'd<i>B</i>/d<i>x</i> = 0.50/0.10 = 5.0 T/m. <i>F</i> = <i>m</i> d<i>B</i>/d<i>x</i> = (0.10)(5.0) = 0.50 N, directed toward increasing <i>x</i>.',
          },
          {
            q: '[JEE Advanced] Show that the force between two parallel wires carrying equal currents <i>I</i> in the same direction, separated by distance <i>d</i>, can be interpreted as arising from the magnetic energy of one wire in the field of the other. Specifically, show that <i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sup>2</sup>/(2π<i>d</i>).',
            a: 'Wire 1 creates <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>d</i>) at wire 2, so a length <i>L</i> of wire 2 feels <i>F</i> = <i>BIL</i>, i.e. <i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sup>2</sup>/(2π<i>d</i>). In energy terms, the work needed to pull wire 2 from a reference separation <i>d</i><sub>0</sub> out to <i>d</i> against this attraction is <i>W</i> = ∫ <i>F</i> d<i>r</i> = (μ<sub>0</sub><i>I</i><sup>2</sup><i>L</i>/(2π)) ln(<i>d</i>/<i>d</i><sub>0</sub>), so the interaction energy per unit length is <i>U</i>/<i>L</i> = (μ<sub>0</sub><i>I</i><sup>2</sup>/(2π)) ln(<i>d</i>/<i>d</i><sub>0</sub>). The force is <i>F</i>/<i>L</i> = −d(<i>U</i>/<i>L</i>)/d<i>d</i> = −μ<sub>0</sub><i>I</i><sup>2</sup>/(2π<i>d</i>): its magnitude is μ<sub>0</sub><i>I</i><sup>2</sup>/(2π<i>d</i>) and the minus sign says it points towards smaller <i>d</i>, so the wires attract. A different <i>d</i><sub>0</sub> only shifts <i>U</i> by a constant and does not change the force.',
          },
          {
            q: '[JEE Advanced] A current loop of area <i>A</i> and magnetic moment <i>m</i> = <i>NIA</i> is placed in a non-uniform field that varies as <i>B</i>(<i>x</i>) = <i>B</i><sub>0</sub> + <i>cx</i> over a region of length small compared to the field’s spatial scale. Find the net force and torque on the loop.',
            a: 'Net force: <i>F</i><sub><i>x</i></sub> = <i>m</i> d<i>B</i>/d<i>x</i> = <i>mc</i> for <i>m⃗</i> aligned with <i>B⃗</i> (<i>mc</i> cos <i>θ</i> in general). Net torque: <i>τ</i> = <i>mB</i> sin <i>θ</i>, where <i>θ</i> is the angle between <i>m⃗</i> and <i>B⃗</i>. The force arises from the gradient of <i>B</i>; the torque depends on the local <i>B</i>.',
          },
          {
            q: '[JEE Advanced] Compare the energy densities of the Earth’s magnetic field (<i>B</i> ≈ 5 × 10<sup>−5</sup> T) and a typical laboratory solenoid field (<i>B</i> ≈ 0.1 T).',
            a: '<i>u</i> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>). Earth: <i>u</i><sub>E</sub> = (5 × 10<sup>−5</sup>)<sup>2</sup>/(2 × 4π × 10<sup>−7</sup>) = (2.5 × 10<sup>−9</sup>)/(2.51 × 10<sup>−6</sup>) ≈ 1.0 × 10<sup>−3</sup> J m<sup>−3</sup>. Solenoid: <i>u</i><sub>S</sub> = (0.1)<sup>2</sup>/(2 × 4π × 10<sup>−7</sup>) = 0.01/(2.51 × 10<sup>−6</sup>) ≈ 4.0 × 10<sup>3</sup> J m<sup>−3</sup>. Ratio: <i>u</i><sub>S</sub>/<i>u</i><sub>E</sub> ≈ 4 × 10<sup>6</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 321–324 ─────────────────────────
  {
    n: 'C',
    title: 'The Compass Needle as a Magnetic Oscillator and Relativistic Cyclotron Correction',
    extra: true,
    kalam: 'Addendum C deepens Topic 03’s torque analysis to cover the compass-needle oscillation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 derives that a magnetic dipole in a uniform field has potential energy <i>U</i> = −<i>mB</i> cos <i>θ</i> and reaches stable equilibrium with <i>m⃗</i> ∥ <i>B⃗</i>. It also gives the dipole far-field and the gyromagnetic ratio. This addendum develops: (i) the SHM analysis of a compass needle oscillating in a uniform field (worked once for a current loop in Topic 05’s worked example 4; the direct analogue of the torsional pendulum from Class 11), which JEE Advanced has asked as a multi-step problem; and (ii) the relativistic correction to the cyclotron period, which the chapter only states, which limits the maximum achievable energy and is a known JEE Advanced extension.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>C1 — Compass needle (torsional magnetic oscillator).</b> A compass needle of magnetic moment <i>m</i>, moment of inertia <i>I</i> about its suspension axis, is placed in a uniform horizontal field <i>B</i>. It is displaced by small angle <i>θ</i> from alignment and released.',
      },
      {
        t: 'p',
        html: '<b>Equation of motion.</b> Restoring torque: <i>τ</i> = −<i>mB</i> sin <i>θ</i> ≈ −<i>mBθ</i> (small <i>θ</i>). Newton’s second law for rotation: <i>Iθ̈</i> = <i>τ</i>.<br><i>Iθ̈</i> = −<i>mBθ</i> ⟹ <i>θ̈</i> + (<i>mB</i>/<i>I</i>)<i>θ</i> = 0.<br>Angular frequency:<br><i>ω</i> = √(<i>mB</i>/<i>I</i>),   <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)).<br>This is the magnetic analogue of the torsional pendulum (<i>ω</i> = √(<i>κ</i>/<i>I</i>)), with the product <i>mB</i> playing the role of the torsional constant <i>κ</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>m</i> in A m<sup>2</sup>, <i>B</i> in T = N A<sup>−1</sup> m<sup>−1</sup>, so <i>mB</i> has units (A m<sup>2</sup>)(N A<sup>−1</sup> m<sup>−1</sup>) = N m, which is torque. <i>I</i> in kg m<sup>2</sup>. <i>ω</i><sup>2</sup> = N m/kg m<sup>2</sup> = s<sup>−2</sup>. Correct.',
      },
      {
        t: 'p',
        html: '<b>C2 — Relativistic cyclotron correction.</b> The cyclotron period derived in Topic 03 is <i>T</i> = 2π<i>m</i>/(<i>qB</i>), which is speed-independent. This relied on Newton’s second law <i>F</i> = <i>ma</i> with constant mass. At relativistic speeds, the effective inertial mass increases — the particle becomes heavier as it gains kinetic energy, so <i>T</i> grows and the accelerating voltage falls out of step.',
      },
      {
        t: 'p',
        html: 'The relativistic momentum is <i>p</i> = <i>γm</i><sub>0</sub><i>v</i>, where <i>γ</i> = 1/√(1 − <i>v</i><sup>2</sup>/<i>c</i><sup>2</sup>). The centripetal force equation becomes:<br><i>pv</i>/<i>r</i> = <i>qvB</i> ⟹ <i>p</i> = <i>qBr</i>.<br>The period is:<br><i>T</i> = 2π<i>r</i>/<i>v</i> = 2π<i>γm</i><sub>0</sub>/(<i>qB</i>) (using <i>r</i> = <i>γm</i><sub>0</sub><i>v</i>/(<i>qB</i>))',
      },
      {
        t: 'p',
        html: 'As <i>v</i> → <i>c</i>, <i>γ</i> → ∞, so <i>T</i> grows without limit — each circle takes longer than the last, and the fixed-frequency accelerating voltage soon falls out of step and misses it entirely.<br><br>The practical consequence: synchrocyclotrons vary the frequency downward as the particle accelerates; synchrotrons vary both <i>B</i> and the RF frequency together.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Compass Needle Oscillation',
        q: 'A compass needle has magnetic moment <i>m</i> = 9.27 × 10<sup>−4</sup> A m<sup>2</sup> and moment of inertia <i>I</i> = 2.0 × 10<sup>−8</sup> kg m<sup>2</sup> about its pivot. It is placed in the Earth’s horizontal field <i>B</i> = 5.0 × 10<sup>−5</sup> T and set oscillating. Find the period.',
        steps: [
          '<i>ω</i> = √(<i>mB</i>/<i>I</i>) = √((9.27 × 10<sup>−4</sup>)(5.0 × 10<sup>−5</sup>)/(2.0 × 10<sup>−8</sup>)) = √((4.64 × 10<sup>−8</sup>)/(2.0 × 10<sup>−8</sup>)) = √2.32 = 1.52 rad s<sup>−1</sup>.<br><i>T</i> = 2π/1.52 = 4.1 s.',
          'A compass needle swings with a period of several seconds — consistent with everyday observation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Relativistic Cyclotron Frequency',
        q: 'A proton cyclotron has <i>B</i> = 1.0 T and dee radius <i>R</i> = 0.50 m. (a) What is the non-relativistic cyclotron frequency? (b) At what kinetic energy does the relativistic correction change the frequency by 1%?',
        steps: [
          '<b>(a) Non-relativistic frequency.</b><br><i>f</i><sub>0</sub> = <i>qB</i>/(2π<i>m</i><sub>p</sub>) = (1.6 × 10<sup>−19</sup>)(1.0)/(2π(1.67 × 10<sup>−27</sup>)) = 1.6 × 10<sup>−19</sup>/(1.05 × 10<sup>−26</sup>) ≈ 1.5 × 10<sup>7</sup> Hz = 15 MHz.',
          '<b>(b) Energy at which <i>f</i> = 0.99<i>f</i><sub>0</sub>.</b><br>Since <i>f</i> ∝ 1/<i>γ</i>, we need <i>γ</i> = 1/0.99 ≈ 1.01.<br><i>γ</i> = 1/√(1 − <i>β</i><sup>2</sup>) ⟹ <i>β</i> = √(1 − 1/<i>γ</i><sup>2</sup>) = √(1 − (0.99)<sup>2</sup>) = √0.0199 ≈ 0.141.',
          'Relativistic kinetic energy: <i>K</i> = (<i>γ</i> − 1)<i>m</i><sub>0</sub><i>c</i><sup>2</sup> = (0.0101)(938 MeV) ≈ 9.5 MeV.',
          'So at only about 10 MeV (roughly 1% of the rest energy), the cyclotron frequency has already shifted by 1%. For a 200 MeV proton synchrotron, <i>γ</i> ≈ 1.21 and the correction is 18%.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Magnetic Moment from Oscillation Period',
        q: 'A bar magnet oscillates in the Earth’s magnetic field with period <i>T</i> = 4.0 s. When a uniform field <i>B</i><sub>0</sub> = 1.5 × 10<sup>−4</sup> T is added parallel to the Earth’s field, the period becomes <i>T</i>′ = 2.0 s. Find the ratio <i>I</i>/<i>m</i> for the magnet.',
        steps: [
          'From <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)):<br><i>T</i><sup>2</sup> = 4π<sup>2</sup><i>I</i>/(<i>mB</i>) ⟹ <i>I</i>/<i>m</i> = <i>T</i><sup>2</sup><i>B</i>/(4π<sup>2</sup>).',
          'For Earth alone: <i>T</i><sup>2</sup>/<i>T</i>′<sup>2</sup> = (<i>B</i><sub>E</sub> + <i>B</i><sub>0</sub>)/<i>B</i><sub>E</sub> = 4 gives <i>B</i> = <i>B</i><sub>E</sub> = <i>B</i><sub>0</sub>/3 = 5.0 × 10<sup>−5</sup> T.<br>(4.0)<sup>2</sup> = 4π<sup>2</sup>(<i>I</i>/<i>m</i>)/(5 × 10<sup>−5</sup>) ⟹ <i>I</i>/<i>m</i> = (16 × 5 × 10<sup>−5</sup>)/(4π<sup>2</sup>) = (8.0 × 10<sup>−4</sup>)/39.5 = 2.0 × 10<sup>−5</sup> kg m<sup>2</sup> A<sup>−1</sup> m<sup>−2</sup>.',
          'With the added field: total field = 5.0 × 10<sup>−5</sup> + 1.5 × 10<sup>−4</sup> = 2.0 × 10<sup>−4</sup> T.<br>(2.0)<sup>2</sup> = 4π<sup>2</sup>(<i>I</i>/<i>m</i>)/(2.0 × 10<sup>−4</sup>) ⟹ <i>I</i>/<i>m</i> = (4 × 2.0 × 10<sup>−4</sup>)/(4π<sup>2</sup>) = (8.0 × 10<sup>−4</sup>)/39.5 = 2.0 × 10<sup>−5</sup>.',
          'Both measurements give the same ratio, <i>I</i>/<i>m</i> ≈ 2.0 × 10<sup>−5</sup> kg m<sup>2</sup> A<sup>−1</sup> m<sup>−2</sup>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A magnetic needle with <i>m</i> = 1.0 × 10<sup>−3</sup> A m<sup>2</sup> and <i>I</i> = 5.0 × 10<sup>−9</sup> kg m<sup>2</sup> oscillates in a field of 1.0 × 10<sup>−4</sup> T. Find its period.',
            a: '<i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)) = 2π√(5.0 × 10<sup>−9</sup>/(1.0 × 10<sup>−3</sup> × 1.0 × 10<sup>−4</sup>)) = 2π√(5.0 × 10<sup>−2</sup>) = 2π × 0.224 = 1.4 s.',
          },
          {
            q: '[JEE Main] Two identical compass needles A and B (each of moment <i>m</i>) are placed in fields <i>B</i> and 2<i>B</i> respectively. A oscillates with period <i>T</i><sub>1</sub> and B with period <i>T</i><sub>2</sub>. Find <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
            a: '<i>T</i> ∝ 1/√<i>B</i>, so <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = √(<i>B</i>/(2<i>B</i>)) = 1/√2.',
          },
          {
            q: '[JEE Advanced] In a synchrocyclotron, the frequency is varied as <i>f</i> = <i>f</i><sub>0</sub>/<i>γ</i>, where <i>f</i><sub>0</sub> is the non-relativistic frequency. Show that if the frequency is swept too slowly, the particle will fall out of phase with the accelerating voltage. Estimate the fractional change in <i>γ</i> per revolution for a proton at 100 MeV in a synchrocyclotron.',
            a: 'The accelerating voltage has frequency <i>f</i>(<i>t</i>). The particle arrives at the gap with revolution frequency <i>f</i><sub>rev</sub> = <i>f</i><sub>0</sub>/<i>γ</i>. For phase stability, <i>f</i>(<i>t</i>) must decrease at the same rate as the revolution frequency, which falls as <i>γ</i> grows. Per revolution the fractional change is Δ<i>γ</i>/<i>γ</i> = Δ<i>K</i>/(<i>γm</i><sub>0</sub><i>c</i><sup>2</sup>), with Δ<i>K</i> the energy gained per revolution (two gap crossings). For an assumed Δ<i>K</i> = 20 keV and <i>γ</i> = 1.11 (100 MeV, <i>m</i><sub>0</sub><i>c</i><sup>2</sup> = 938 MeV): Δ<i>γ</i>/<i>γ</i> ≈ 0.020/1038 ≈ 2 × 10<sup>−5</sup>, so the sweep is slow and smooth — but it must keep pace with the falling revolution frequency. If the sweep is too slow, <i>f</i>(<i>t</i>) stays above <i>f</i><sub>rev</sub>, so the particle reaches the gap a little later in the voltage cycle on every turn and drifts out of the accelerating phase.',
          },
          {
            q: '[JEE Advanced] A magnetic dipole <i>m</i> with moment of inertia <i>I</i> executes small oscillations in a uniform field <i>B</i>. Show that its total energy is <i>E</i> = ½<i>Iθ̇</i><sup>2</sup> + ½(<i>mB</i>)<i>θ</i><sup>2</sup>, and identify the terms as kinetic and potential. (This mirrors the SHM energy analysis from Class 11.)',
            a: '<i>E</i> = ½<i>Iθ̇</i><sup>2</sup> + <i>U</i>(<i>θ</i>). For small <i>θ</i>, <i>U</i> = −<i>mB</i> cos <i>θ</i> ≈ −<i>mB</i>(1 − <i>θ</i><sup>2</sup>/2) = const + ½<i>mBθ</i><sup>2</sup>. The constant is irrelevant for dynamics. So <i>E</i> = ½<i>Iθ̇</i><sup>2</sup> + ½<i>mBθ</i><sup>2</sup>. This is exactly the energy of a harmonic oscillator with “spring constant” <i>k</i><sub>eff</sub> = <i>mB</i>.',
          },
          {
            q: '[JEE Advanced] A rotating magnetic dipole (a spinning electron, say) precesses in an external field. Show that the precession frequency is <i>ω</i><sub>p</sub> = <i>mB</i>/<i>L</i>, where <i>L</i> is the angular momentum. This is the Larmor precession frequency. (Apply the torque equation <i>τ⃗</i> = d<i>L⃗</i>/d<i>t</i> to a dipole at angle <i>θ</i> to the field.)',
            a: 'Torque <i>τ</i> = <i>mB</i> sin <i>θ</i> is perpendicular to both <i>m⃗</i> and <i>B⃗</i>. It causes <i>L⃗</i> to precess around <i>B⃗</i> at rate <i>ω</i><sub>p</sub> such that d<i>L</i>/d<i>t</i> = <i>τ</i> = <i>Lω</i><sub>p</sub> sin <i>θ</i>. So <i>ω</i><sub>p</sub> = <i>mB</i>/<i>L</i>. For an electron, <i>m</i> = 9.27 × 10<sup>−24</sup> A m<sup>2</sup> and <i>L</i> = ℏ/2 (spin), giving <i>ω</i><sub>p</sub> = 2<i>mB</i>/ℏ, the Larmor frequency, which governs electron spin resonance (ESR).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 324–326 ─────────────────────────
  {
    n: 'D',
    title: 'Three Things the Chapter Names but Never Computes',
    extra: true,
    kalam: 'Addendum D tackles three things the chapter names but never computes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>D1 — Field at the centre of a current ring of finite cross-section.</b> Topic 01 gives <i>B</i> = μ<sub>0</sub><i>I</i>/(2<i>R</i>) for a single thin loop. But a real coil has turns distributed over a finite radial width Δ<i>R</i>. What is the field at the centre of a disc of current, such as a charged disc spinning about its axis?',
      },
      {
        t: 'p',
        html: '<b>D2 — Force between two current loops.</b> Topic 03 gives the force between two parallel wires. What about two complete current loops facing each other? This is the force between two magnetic dipoles — relevant to magnetic levitation and the interaction of atomic orbitals.',
      },
      {
        t: 'p',
        html: '<b>D3 — Torque on a dipole in a rotating field.</b> Topic 03 derives torque <i>τ</i> = <i>mB</i> sin <i>θ</i> for a dipole in a static field. What happens when the field rotates — for example, in electron spin resonance where a static field makes the spin precess and an oscillating transverse field tips it? The average torque over a period is not zero if the field frequency matches the Larmor frequency.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>D1 — Disc of current (a rotating charged disc).</b> Consider a uniformly charged disc of radius <i>R</i>, rotating at angular speed <i>ω</i>, with surface charge density <i>σ</i>. The motion of the surface charge constitutes a surface current <i>K</i> = <i>σωr</i> (A m<sup>−1</sup>) at radius <i>r</i>. Each annular ring of width d<i>r</i> at radius <i>r</i> carries current d<i>I</i> = <i>K</i> d<i>r</i> = <i>σωr</i> d<i>r</i> and contributes d<i>B</i> = μ<sub>0</sub> d<i>I</i>/(2<i>r</i>) = μ<sub>0</sub><i>σω</i> d<i>r</i>/2 to the axial field at the centre. Integrating from 0 to <i>R</i>:<br><i>B</i><sub>disc</sub> = ∫<sub>0</sub><sup><i>R</i></sup> (μ<sub>0</sub><i>σω</i>/2) d<i>r</i> = μ<sub>0</sub><i>σωR</i>/2.<br>(For a flat coil of <i>N</i> turns spread uniformly from radius <i>R</i><sub>1</sub> to <i>R</i><sub>2</sub>, the same ring-by-ring sum gives <i>B</i> = μ<sub>0</sub><i>NI</i> ln(<i>R</i><sub>2</sub>/<i>R</i><sub>1</sub>)/(2(<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>)), which tends to μ<sub>0</sub><i>NI</i>/(2<i>R</i>) as the width shrinks.)',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>σ</i> in C m<sup>−2</sup>, <i>ω</i> in rad s<sup>−1</sup>, so <i>σω</i> in C m<sup>−2</sup> s<sup>−1</sup> = A m<sup>−2</sup>. Multiply by μ<sub>0</sub> (T m A<sup>−1</sup>) and by <i>R</i> (m): result in T. Correct.',
      },
      {
        t: 'p',
        html: '<b>D2 — Force between two magnetic dipoles.</b> Two coaxial magnetic dipoles <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub>, separated by distance <i>x</i> along their common axis. Dipole 1 creates an axial field <i>B</i><sub>1</sub>(<i>x</i>) = μ<sub>0</sub><i>m</i><sub>1</sub>/(2π<i>x</i><sup>3</sup>) at the location of dipole 2. The force on dipole 2 in this non-uniform field is:<br><i>F</i> = <i>m</i><sub>2</sub> d<i>B</i><sub>1</sub>/d<i>x</i> = <i>m</i><sub>2</sub> (d/d<i>x</i>)(μ<sub>0</sub><i>m</i><sub>1</sub>/(2π<i>x</i><sup>3</sup>)) = <i>m</i><sub>2</sub>(−3μ<sub>0</sub><i>m</i><sub>1</sub>/(2π<i>x</i><sup>4</sup>)) = −3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(2π<i>x</i><sup>4</sup>).<br>The negative sign indicates attraction (for aligned dipoles). The force falls as 1/<i>x</i><sup>4</sup> — much faster than the 1/<i>d</i> dependence of the force per unit length between two parallel wires, because each dipole field falls as 1/<i>x</i><sup>3</sup> and the force is the gradient of that.',
      },
      {
        t: 'p',
        html: '<b>D3 — Torque in a rotating field.</b> A magnetic dipole <i>m⃗</i> (with angular momentum <i>L⃗</i> along <i>m⃗</i>) sits in a static field <i>B</i><sub>0</sub><i>ẑ</i> plus a field <i>B</i><sub>1</sub> cos <i>ωt</i> <i>x̂</i> + <i>B</i><sub>1</sub> sin <i>ωt</i> <i>ŷ</i> rotating in the <i>xy</i>-plane at angular frequency <i>ω</i>. The instantaneous torque is <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>. The torque is always perpendicular to <i>m⃗</i>, so it turns <i>m⃗</i> without changing its magnitude: the static field alone makes <i>m⃗</i> precess about <i>ẑ</i>.<br><br>For resonance (when <i>ω</i> matches the precession frequency <i>ω</i><sub>0</sub> = <i>mB</i><sub>0</sub>/<i>L</i>), the energy transfer is maximal — this is the basis of electron spin resonance and nuclear magnetic resonance.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force Between Two Coils',
        q: 'Two circular coils of radius <i>R</i> = 10 cm, each with <i>N</i> = 50 turns, carry current <i>I</i> = 5.0 A in the same direction and are coaxial, separated by <i>x</i> = 20 cm. Find the force between them.',
        steps: [
          'Each coil has magnetic moment <i>m</i> = <i>NIA</i> = <i>NI</i>π<i>R</i><sup>2</sup> = 50 × 5.0 × π × (0.10)<sup>2</sup> = 7.85 A m<sup>2</sup>.',
          'Using the dipole-force formula (an approximation here, since <i>x</i> is only 2<i>R</i>):<br><i>F</i> = 3μ<sub>0</sub><i>m</i><sup>2</sup>/(2π<i>x</i><sup>4</sup>) = 3(4π × 10<sup>−7</sup>)(7.85)<sup>2</sup>/[2π(0.20)<sup>4</sup>] = 2.3 × 10<sup>−2</sup> N.',
          'The force is about 23 mN — small, but easily measurable. It is attractive (same-sense currents) and falls rapidly with distance.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Disc of Rotating Charge',
        q: 'A uniformly charged disc of radius <i>R</i> = 5.0 cm, carrying total charge <i>Q</i> = 1.0 × 10<sup>−6</sup> C, rotates at <i>n</i> = 1200 rpm. Find the magnetic field at its centre.',
        steps: [
          '<i>σ</i> = <i>Q</i>/(π<i>R</i><sup>2</sup>) = (1.0 × 10<sup>−6</sup>)/(π(0.05)<sup>2</sup>) = 1.27 × 10<sup>−4</sup> C m<sup>−2</sup>. <i>ω</i> = 2π × 1200/60 = 2π × 20 = 126 rad s<sup>−1</sup>.',
          '<i>B</i> = μ<sub>0</sub><i>σωR</i>/2 = (4π × 10<sup>−7</sup>)(1.27 × 10<sup>−4</sup>)(126)(0.05)/2 = 4π × 10<sup>−7</sup> × 7.98 × 10<sup>−4</sup>/2 = 5.0 × 10<sup>−10</sup> T.',
          'This is much smaller than typical laboratory fields. The magnetic effect of rotating charge is significant only for atomic-scale systems (where <i>R</i> ∼ 10<sup>−10</sup> m and <i>ω</i> is determined by quantum mechanics), giving the atomic magnetic moments studied in Topic 05.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Torque from Rotating Field',
        q: 'A proton precesses in a static field <i>B</i><sub>0</sub> = 1.0 T along <i>z</i>. An oscillating transverse field <i>B</i><sub>1</sub> = 1.0 × 10<sup>−4</sup> T at frequency <i>ω</i> is applied along <i>x</i>. At what frequency does maximum energy transfer occur, and what torque does this field exert on the proton spin?',
        steps: [
          'Maximum transfer occurs at the Larmor frequency:<br><i>ω</i><sub>0</sub> = <i>mB</i><sub>0</sub>/<i>L</i> = <i>γ</i><sub>p</sub><i>B</i><sub>0</sub>,<br>where the proton gyromagnetic ratio is <i>γ</i><sub>p</sub> = 2.675 × 10<sup>8</sup> rad s<sup>−1</sup> T<sup>−1</sup>.',
          'So <i>ω</i><sub>0</sub> = (2.675 × 10<sup>8</sup>)(1.0) = 2.675 × 10<sup>8</sup> rad s<sup>−1</sup>, or <i>f</i><sub>0</sub> = 42.6 MHz.',
          'At resonance the transverse field stays in step with the precessing spin and keeps tipping it, so energy flows in steadily. With the proton’s magnetic moment <i>m</i> = 1.41 × 10<sup>−26</sup> A m<sup>2</sup>, the torque from <i>B</i><sub>1</sub> is at most <i>mB</i><sub>1</sub> = (1.41 × 10<sup>−26</sup>)(1.0 × 10<sup>−4</sup>) = 1.4 × 10<sup>−30</sup> N m — vanishingly small for a single proton, but coherent across 10<sup>23</sup> protons in a sample, giving measurable NMR signals.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Two coaxial magnetic dipoles <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are aligned along the axis, separated by distance <i>x</i>. Show that the force between them is <i>F</i> = 3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(2π<i>x</i><sup>4</sup>) (attractive if both moments point the same way).',
            a: '(See derivation in method section. The key is <i>B</i><sub>1</sub> = μ<sub>0</sub><i>m</i><sub>1</sub>/(2π<i>x</i><sup>3</sup>) on axis; d<i>B</i><sub>1</sub>/d<i>x</i> = −3μ<sub>0</sub><i>m</i><sub>1</sub>/(2π<i>x</i><sup>4</sup>); <i>F</i> = <i>m</i><sub>2</sub> d<i>B</i><sub>1</sub>/d<i>x</i> = −3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(2π<i>x</i><sup>4</sup>).)',
          },
          {
            q: '[JEE Advanced] Show that if two parallel dipoles are both perpendicular to the line joining them (side by side), the force is <i>F</i> = 3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(4π<i>x</i><sup>4</sup>) (repulsive if aligned).',
            a: 'For perpendicular alignment, the field from dipole 1 at the location of dipole 2 falls as μ<sub>0</sub><i>m</i><sub>1</sub>/(4π<i>x</i><sup>3</sup>) (equatorial, not axial), and the gradient is different. The force works out to <i>F</i> = +3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(4π<i>x</i><sup>4</sup>), repulsive. This is a JEE Advanced “show that” problem.',
          },
          {
            q: '[JEE Advanced] A rotating disc of radius <i>R</i> has surface charge density <i>σ</i> and angular velocity <i>ω</i>. Show that the magnetic moment of the disc is <i>m</i> = <i>σω</i>π<i>R</i><sup>4</sup>/4. (Integrate the magnetic moments of all annular rings.)',
            a: 'Annular ring at radius <i>r</i>, width d<i>r</i>: area d<i>A</i> = 2π<i>r</i> d<i>r</i>, charge d<i>q</i> = <i>σ</i> d<i>A</i> = 2π<i>σr</i> d<i>r</i>. Current d<i>i</i> = d<i>q</i>/<i>T</i> = <i>σωr</i> d<i>r</i>. Magnetic moment of ring: d<i>m</i> = (d<i>i</i>)(π<i>r</i><sup>2</sup>) = π<i>σωr</i><sup>3</sup> d<i>r</i>. Integrate: <i>m</i> = ∫<sub>0</sub><sup><i>R</i></sup> π<i>σωr</i><sup>3</sup> d<i>r</i> = π<i>σωR</i><sup>4</sup>/4.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 327–329 ─────────────────────────
  {
    n: 'E',
    title: 'The Magnetic Scalar Potential and Current-Free Regions',
    extra: true,
    kalam:
      'The scalar potential method is powerful for finding fields near magnetised bodies (where no free currents exist) and for matching boundary conditions.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 computes magnetic fields by integrating the Biot–Savart law over current distributions. Topic 02 uses Ampère’s circuital law for symmetric current distributions. But there is a third method, related to the fact that ∇ × <i>B⃗</i> = μ<sub>0</sub><i>J⃗</i> (in free space) — where <i>J⃗</i> = 0 (no current), we have ∇ × <i>B⃗</i> = 0, which means <i>B⃗</i> can be written as the gradient of a scalar potential in current-free regions:<br><i>B⃗</i> = −∇<i>φ</i><sub>m</sub>,   <i>φ</i><sub>m</sub> = magnetic scalar potential.<br>This is exactly analogous to electrostatics where ∇ × <i>E⃗</i> = 0 at all points in space and <i>E⃗</i> = −∇<i>V</i>. The scalar potential method is powerful for finding fields near magnetised bodies (where no free currents exist) and for matching boundary conditions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Magnetic scalar potential in current-free space.</b> In a region where <i>J⃗</i> = 0 (no free currents), Ampère’s law gives ∇ × <i>B⃗</i> = 0. This means <i>B⃗</i> is irrotational, so:<br><i>B⃗</i> = −∇<i>φ</i><sub>m</sub>.<br>Taking the divergence of both sides and using ∇ · <i>B⃗</i> = 0 (no magnetic monopoles):<br>∇ · <i>B⃗</i> = −∇ · ∇<i>φ</i><sub>m</sub> = −∇<sup>2</sup><i>φ</i><sub>m</sub> = 0.<br>So <i>φ</i><sub>m</sub> satisfies Laplace’s equation, just like the electrostatic potential in charge-free space. The solutions are the same mathematical functions — Legendre polynomials, image charges, and so on — but with different physical interpretations.',
      },
      {
        t: 'p',
        html: '<b>Boundary condition at a surface current sheet.</b> At a sheet of surface current density <i>K⃗</i> (A m<sup>−1</sup>), the tangential component of <i>B⃗</i> jumps:<br>(<i>B⃗</i><sub>2</sub> − <i>B⃗</i><sub>1</sub>) × <i>n̂</i> = −μ<sub>0</sub><i>K⃗</i>,<br>where <i>n̂</i> is the unit normal from region 1 to region 2. This is the magnetic analogue of the discontinuity in the normal electric field at a surface charge.',
      },
      {
        t: 'p',
        html: '<b>Normal component.</b> The normal component of <i>B⃗</i> is always continuous (since ∇ · <i>B⃗</i> = 0):<br><i>B</i><sub>2n</sub> = <i>B</i><sub>1n</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Field Near a Current Sheet',
        q: 'An infinite sheet in the <i>xy</i>-plane carries surface current density <i>K⃗</i> = <i>Kx̂</i> (current per unit width along <i>y</i>, flowing in the +<i>x</i> direction). Find <i>B⃗</i> on both sides.',
        steps: [
          'Apply the boundary condition to a small rectangular Amperian loop straddling the sheet. For a current sheet, the result is:<br><i>B⃗</i>(<i>z</i> > 0) − <i>B⃗</i>(<i>z</i> < 0) = −μ<sub>0</sub><i>K</i> <i>ŷ</i>',
          'By symmetry the field is parallel to the sheet but perpendicular to the current, so it points along the <i>y</i>-axis:<br><i>B⃗</i> = −(μ<sub>0</sub><i>K</i>/2) <i>ŷ</i> (<i>z</i> > 0), <i>B⃗</i> = +(μ<sub>0</sub><i>K</i>/2) <i>ŷ</i> (<i>z</i> < 0).',
          'This is the magnetic analogue of the electric field near a charged sheet.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Scalar Potential for a Magnetic Dipole',
        q: 'In the current-free region outside a magnetic dipole at the origin, the scalar potential is <i>φ</i><sub>m</sub> = μ<sub>0</sub><i>m</i> cos <i>θ</i>/(4π<i>r</i><sup>2</sup>). Find <i>B⃗</i>.',
        steps: [
          '<i>B⃗</i> = −∇<i>φ</i><sub>m</sub> = −<i>r̂</i> ∂<i>φ</i><sub>m</sub>/∂<i>r</i> − <i>θ̂</i> (1/<i>r</i>) ∂<i>φ</i><sub>m</sub>/∂<i>θ</i><br>= (μ<sub>0</sub>/(4π)) [(2<i>m</i> cos <i>θ</i>/<i>r</i><sup>3</sup>) <i>r̂</i> + (<i>m</i> sin <i>θ</i>/<i>r</i><sup>3</sup>) <i>θ̂</i>].',
          'On the axis (<i>θ</i> = 0) the field is radial and equals <i>B</i> = 2μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>) (<i>r</i> = <i>z</i>), that is μ<sub>0</sub><i>m</i>/(2π<i>z</i><sup>3</sup>). This matches the dipole field from Topic 05.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Field in a Gap Between Magnetic Poles',
        q: 'Two semi-infinite iron pole pieces (permeability <i>μ</i> ≫ μ<sub>0</sub>) are separated by a small gap <i>d</i> and carry surface current density <i>K</i> in opposite directions on their facing surfaces. Show that the field in the gap is approximately <i>B</i> ≈ μ<sub>0</sub><i>K</i>.',
        steps: [
          'In the iron, <i>B</i> = <i>μH</i> with <i>μ</i> ≫ μ<sub>0</sub>, so for a given <i>B</i> the field <i>H</i> = <i>B</i>/<i>μ</i> is tiny. Apply Ampère’s law for <i>H</i>, ∮ <i>H</i>·d<i>l</i> = <i>I</i>, to a rectangle with one long side (length <i>w</i>) in the gap and the other deep inside the iron, where <i>H</i> is negligible. It encloses the surface current <i>Kw</i>, so <i>Hw</i> = <i>Kw</i> in the gap, i.e. <i>H</i> = <i>K</i> there, and <i>B</i> = μ<sub>0</sub><i>H</i> = μ<sub>0</sub><i>K</i>.',
          'This is the principle of the magnetic circuit: the magnetomotive force ℱ = <i>NI</i> drives flux through a reluctance ℛ = <i>l</i>/(<i>μA</i>).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] Show that the magnetic scalar potential <i>φ</i><sub>m</sub> satisfies Laplace’s equation ∇<sup>2</sup><i>φ</i><sub>m</sub> = 0 in any current-free region (one not threaded by a current).',
            a: 'From ∇ · <i>B⃗</i> = 0 and <i>B⃗</i> = −∇<i>φ</i><sub>m</sub> (valid when <i>J⃗</i> = 0, so ∇ × <i>B⃗</i> = 0): ∇ · ∇<i>φ</i><sub>m</sub> = ∇<sup>2</sup><i>φ</i><sub>m</sub> = 0. (The key step is establishing that ∇ × <i>B⃗</i> = 0 requires <i>B⃗</i> to be a gradient; this follows from Ampère’s law with <i>J⃗</i> = 0.)',
          },
          {
            q: '[JEE Advanced] A magnetic dipole <i>m</i> is placed at the origin. Use the scalar potential method to show that the equatorial field (at <i>θ</i> = 90°) is <i>B</i> = μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>).',
            a: 'From <i>φ</i><sub>m</sub> = μ<sub>0</sub><i>m</i> cos <i>θ</i>/(4π<i>r</i><sup>2</sup>), at <i>θ</i> = 90° (cos <i>θ</i> = 0, sin <i>θ</i> = 1): <i>B⃗</i> = −∇<i>φ</i><sub>m</sub> has no radial component and its <i>θ</i>-component is −(1/<i>r</i>)(∂<i>φ</i><sub>m</sub>/∂<i>θ</i>) = −(1/<i>r</i>)(−μ<sub>0</sub><i>m</i> sin <i>θ</i>/(4π<i>r</i><sup>2</sup>)) = μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>). This is perpendicular to the line from the dipole, so the field is purely transverse, <i>B</i>⊥ = μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>). (Matches Topic 05’s equatorial field.)',
          },
          {
            q: '[JEE Main] A surface current sheet <i>K⃗</i> = <i>Kx̂</i> lies in the <i>xz</i>-plane. Find <i>B⃗</i> on both sides of the sheet.',
            a: 'The field is parallel to the sheet and perpendicular to <i>K</i>, i.e. along <i>z</i>: <i>B</i> = +μ<sub>0</sub><i>K</i>/2 for <i>y</i> > 0 and −μ<sub>0</sub><i>K</i>/2 for <i>y</i> < 0 (same logic as worked example 1, current along <i>x</i>).',
          },
          {
            q: '[JEE Advanced] Two current sheets with <i>K⃗</i><sub>1</sub> = <i>Kx̂</i> at <i>z</i> = +<i>d</i>/2 and <i>K⃗</i><sub>2</sub> = −<i>Kx̂</i> at <i>z</i> = −<i>d</i>/2 create a uniform field between them. Find the field in the region |<i>z</i>| < <i>d</i>/2.',
            a: 'In the region between the sheets (|<i>z</i>| < <i>d</i>/2): the two sheets both contribute <i>B</i> = μ<sub>0</sub><i>K</i>/2 in the same direction (say +<i>y</i>), so <i>B</i> = μ<sub>0</sub><i>K</i> uniform. Outside (|<i>z</i>| > <i>d</i>/2): the contributions cancel, giving <i>B</i> = 0. This is the field of a solenoid with surface current density <i>K</i> — effectively a sheet-wound solenoid.',
          },
        ],
      },
    ],
  },
];
