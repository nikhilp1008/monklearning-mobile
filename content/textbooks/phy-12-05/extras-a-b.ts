import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional Topics A and B, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 372, set at
 * the head of Addendum A), then A Force on a Magnetic Dipole in a Non-Uniform
 * Field (pp. 372 to 376) and B Time Period via Energy Conservation (pp. 376 to
 * 379). Each addendum prints its own practice problems and answers. These
 * pages print no drawings (Addendum B's shortcut list is a table). Lines the
 * book patched in place in a different typeface are set in the chapter's own
 * notation.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 372–376 ─────────────────────────
  {
    n: 'A',
    title: 'Force on a Magnetic Dipole in a Non-Uniform Field',
    extra: true,
    kalam: 'Addendum A marries the potential-energy definition of Topic 01 to the “find force from energy” calculus trick.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you bar-magnet fields, Earth’s three elements, the three magnetic families and their hysteresis, Gauss’s law, and the soft/hard material choice for permanent magnets and electromagnets. Five JEE patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A marries the potential-energy definition of Topic 01 to the “find force from energy” calculus trick: the energy-gradient method resolves non-uniform-field force problems that are algebraically opaque if you try to track the two pole forces directly. Addendum B takes the oscillation formula <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)) from Topic 01 and derives it from energy conservation — a method that generalises to systems where the torque is not immediately written in angular form. Addendum C opens magnetic circuits, which the chapter does not mention at all despite their central role in every electromagnet and transformer: the formal analogy (MMF, reluctance, flux) lets you solve air-gap problems that the simple <i>B</i> = μ<sub>0</sub><i>nI</i> formula cannot touch. Addendum D goes back to Topic 02’s neutral-point formula and adds the superposition geometry that JEE Advanced demands: two magnets interacting with Earth’s field, magnets at angles, and the exact perpendicular-bisector result. Addendum E deepens Topic 03’s hysteresis picture into the quantitative power-absorption formula that decides transformer core selection, and Topic 03’s shielding mention into the exact cylindrical-shielding formula.<br><br>Numbering continues from the chapter’s Topic 05. Nothing here is new physics. Every method below is the energy method, the magnetic-circuit analogy, or the field-superposition geometry, applied one step further than the chapter takes it.',
      },
      {
        t: 'p',
        html: 'Topic 01 Derivation (D) gives the net force on a dipole in a non-uniform field as <i>F</i> = <i>m</i> d<i>B</i>/d<i>x</i>, but only for the special case where the dipole is aligned along the field direction. JEE regularly asks for forces when the dipole is perpendicular to the field, or at an arbitrary angle — cases where tracking the two pole forces algebraically becomes messy. The energy-gradient method solves all of them in one line: if the potential energy of a dipole in a field is <i>U</i> = −<i>m⃗</i> · <i>B⃗</i>, then the force is <i>F⃗</i> = −∇<i>U</i> = ∇(<i>m⃗</i> · <i>B⃗</i>). For a translating dipole with fixed orientation, this reduces to an ordinary derivative along the direction of motion.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Energy-gradient recipe (for a dipole of fixed orientation translating in a non-uniform field)',
        steps: [
          'Write the total field at the dipole’s centre as a function of position <i>r⃗</i>. Keep only the dominant non-uniform component.',
          'Write the potential energy <i>U</i> = −<i>m⃗</i> · <i>B⃗</i>.',
          'Differentiate: <i>F</i><sub><i>x</i></sub> = −∂<i>U</i>/∂<i>x</i>, <i>F</i><sub><i>y</i></sub> = −∂<i>U</i>/∂<i>y</i>, etc.',
          'Read off the force component.',
        ],
      },
      {
        t: 'p',
        html: '<b>Special case — dipole aligned along the <i>x</i>-axis in a field varying along <i>x</i>:</b><br><i>U</i> = −<i>mB</i><sub><i>x</i></sub>(<i>x</i>),   <i>F</i><sub><i>x</i></sub> = −d<i>U</i>/d<i>x</i> = <i>m</i> d<i>B</i><sub><i>x</i></sub>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Special case — dipole perpendicular to a field varying along <i>x</i> (broadside-on):</b><br>If <i>m⃗</i> points along <i>y</i> and <i>B⃗</i> is along <i>x</i> (a perpendicular configuration), then <i>m⃗</i> · <i>B⃗</i> = 0 at the dipole’s centre, but the field still varies with position. The full expression requires expanding the field at an off-axis point and taking the gradient — the result has both an axial and a lateral component. In general <i>F⃗</i> = ∇(<i>m⃗</i> · <i>B⃗</i>). For <i>m⃗</i> = <i>mŷ</i> only the <i>y</i>-component of the field (called <i>B</i> below) matters, and the force components are <i>m</i> ∂<i>B</i>/∂<i>x</i> along <i>x</i> and <i>m</i> ∂<i>B</i>/∂<i>y</i> along <i>y</i>. Worked example 2 applies the same formula to a case where the force is perpendicular to the dipole (there the wire’s field at the dipole is antiparallel to <i>m⃗</i>).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>U</i> has units J. ∂<i>U</i>/∂<i>x</i> has units J m<sup>−1</sup> = N. The formula <i>m</i> d<i>B</i>/d<i>x</i> gives A m<sup>2</sup> × (T/m) = A m<sup>2</sup> T m<sup>−1</sup> = A m<sup>2</sup> (V s m<sup>−2</sup>) m<sup>−1</sup> = A V s m<sup>−1</sup> = (A s)(V) m<sup>−1</sup> = J m<sup>−1</sup> = N. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Axial Force on a Bar Magnet in a Non-Uniform Field',
        q: 'A bar magnet of moment <i>m</i> = 2.0 A m<sup>2</sup> lies along the <i>x</i>-axis with its centre at <i>x</i> = 0.10 m, with its moment along the field direction. The field of a second magnet at position <i>x</i> on the axis is approximately <i>B</i>(<i>x</i>) = <i>B</i><sub>0</sub> + <i>kx</i>, where <i>B</i><sub>0</sub> = 50 mT and <i>k</i> = 0.80 T/m. Find the force on the first magnet.',
        steps: [
          '<b>Step 1 — Energy.</b> <i>U</i> = −<i>mB</i>(<i>x</i>) = −<i>m</i>(<i>B</i><sub>0</sub> + <i>kx</i>).',
          '<b>Step 2 — Force.</b> <i>F</i><sub><i>x</i></sub> = −d<i>U</i>/d<i>x</i> = −(d/d<i>x</i>)[−<i>m</i>(<i>B</i><sub>0</sub> + <i>kx</i>)] = <i>mk</i>.',
          '<b>Step 3 — Plug in.</b> <i>F</i><sub><i>x</i></sub> = (2.0)(0.80) = 1.6 N.',
          '<b>Direction.</b> Positive <i>F</i><sub><i>x</i></sub> means the force acts in the +<i>x</i> direction, toward increasing field strength: a dipole aligned with the field is pulled into the region of stronger field.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Perpendicular Force — The General Formula',
        q: 'A magnetic dipole of moment <i>m</i> = 0.50 A m<sup>2</sup> is placed at the origin with its axis along the <i>y</i>-direction. It sits in the non-uniform field of a long straight wire carrying current <i>I</i> = 20 A along the <i>z</i>-axis. The wire is at <i>x</i> = <i>d</i> = 5.0 cm from the dipole. Find the force on the dipole.',
        steps: [
          'The field of a long straight wire at distance <i>r</i> from the wire is:<br><i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>).',
          'The wire sits at (<i>d</i>, 0, 0), so the origin lies along −<i>x̂</i> from the wire. By the right-hand rule (thumb along +<i>z</i>, fingers curling from +<i>x̂</i> toward +<i>ŷ</i>), the field circles the wire in the sense +<i>x̂</i> → +<i>ŷ</i> → −<i>x̂</i> → −<i>ŷ</i>; at the −<i>x̂</i> side of the wire this gives a field along −<i>ŷ</i>.',
          'So at the dipole’s centre: <i>B⃗</i><sub>wire</sub>(0) = −(μ<sub>0</sub><i>I</i>/(2π<i>d</i>)) <i>ŷ</i>.',
          'The dipole moment is <i>m⃗</i> = <i>mŷ</i>. Therefore <i>m⃗</i> · <i>B⃗</i> = <i>mB</i><sub><i>y</i></sub> = <i>m</i>(−μ<sub>0</sub><i>I</i>/(2π<i>d</i>)) = −<i>m</i>μ<sub>0</sub><i>I</i>/(2π<i>d</i>).',
          'But this is the value at the dipole’s centre only. The field varies with position: the wire’s field at point (<i>x</i>, <i>y</i>) is <i>B⃗</i> = (μ<sub>0</sub><i>I</i>/(2π))(−<i>y x̂</i> + (<i>x</i> − <i>d</i>) <i>ŷ</i>)/((<i>x</i> − <i>d</i>)<sup>2</sup> + <i>y</i><sup>2</sup>).',
          'At the dipole (which extends from −<i>a</i> to +<i>a</i> along <i>y</i> with 2<i>a</i> being its length, small compared to <i>d</i>):<br>For a point (0, <i>y</i>) on the dipole’s axis, the distance to the wire is <i>r</i> = √(<i>d</i><sup>2</sup> + <i>y</i><sup>2</sup>), and the field is:<br><i>y</i>-component: <i>B</i>(0, <i>y</i>) = −(μ<sub>0</sub><i>I</i>/(2π)) <i>d</i>/(<i>d</i><sup>2</sup> + <i>y</i><sup>2</sup>).',
          'The dominant variation is in <i>y</i> (along the dipole axis). Expand for <i>y</i> ≪ <i>d</i>:<br><i>B</i>(0, <i>y</i>) ≈ −(μ<sub>0</sub><i>I</i>/(2π<i>d</i>))(1 − <i>y</i><sup>2</sup>/<i>d</i><sup>2</sup>).',
          'The linear term in <i>y</i> vanishes — the field has no linear variation along the dipole’s axis. The leading non-uniformity is second order. Therefore the force along <i>y</i> is zero to first order.',
          'What about the force in the <i>x</i> direction (perpendicular to both the wire and the dipole)? At point (<i>x</i>, 0) (along the perpendicular bisector):<br><i>x</i>-component = 0; <i>y</i>-component: <i>B</i>(<i>x</i>, 0) = −μ<sub>0</sub><i>I</i>/(2π(<i>d</i> − <i>x</i>)).',
          'Since <i>m⃗</i> = <i>mŷ</i>, the energy is <i>U</i> = −<i>mB</i><sub><i>y</i></sub>. The force along <i>x</i> is:<br><i>F</i><sub><i>x</i></sub> = −∂<i>U</i>/∂<i>x</i> = <i>m</i> ∂<i>B</i>/∂<i>x</i> = −<i>m</i>μ<sub>0</sub><i>I</i>/(2π(<i>d</i> − <i>x</i>)<sup>2</sup>).',
          'At the dipole’s centre <i>x</i> = 0:<br><i>F</i><sub><i>x</i></sub> = −<i>m</i>μ<sub>0</sub><i>I</i>/(2π<i>d</i><sup>2</sup>).',
          'Plug in: μ<sub>0</sub>/(2π) = 2 × 10<sup>−7</sup>, <i>m</i> = 0.50, <i>I</i> = 20, <i>d</i> = 0.050:<br><i>F</i><sub><i>x</i></sub> = −(0.50)(2 × 10<sup>−7</sup>)(20)/(0.050)<sup>2</sup> = −2 × 10<sup>−6</sup>/(2.5 × 10<sup>−3</sup>) = −8 × 10<sup>−4</sup> N = −0.80 mN.',
          '<b>Direction.</b> <i>F</i><sub><i>x</i></sub> < 0 means the dipole is pushed away from the wire (toward decreasing <i>x</i>, since the wire is at <i>x</i> = +<i>d</i>). This makes sense: <i>m⃗</i> is along +<i>y</i> while the wire’s field at the origin is along −<i>y</i>, so the dipole is antiparallel to the field and is repelled from the region of stronger field near the wire.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A bar magnet of moment <i>m</i> = 3.0 A m<sup>2</sup> is placed with its moment along +<i>x</i> at <i>x</i> = 0 in a non-uniform field <i>B</i><sub><i>x</i></sub>(<i>x</i>) = (0.20 + 5<i>x</i>) × 10<sup>−3</sup> T, where <i>x</i> is in metres. Find the force on the magnet.',
            a: '<i>F</i><sub><i>x</i></sub> = <i>m</i>(5 × 10<sup>−3</sup>) = 1.5 × 10<sup>−2</sup> N, directed toward increasing <i>x</i>.',
          },
          {
            q: 'A magnetic dipole <i>m⃗</i> = <i>mẑ</i> is placed at the centre of a circular loop of radius <i>R</i> carrying current <i>I</i> (circulating so that the loop’s field at the centre is along +<i>z</i>). Find the force on the dipole. (Hint: the loop’s field on its axis at distance <i>z</i> from the centre is <i>B</i><sub><i>z</i></sub> = μ<sub>0</sub><i>IR</i><sup>2</sup>/(2(<i>R</i><sup>2</sup> + <i>z</i><sup>2</sup>)<sup>3/2</sup>).)',
            a: 'On the axis, <i>B</i>(<i>z</i>) = μ<sub>0</sub><i>IR</i><sup>2</sup>/[2(<i>R</i><sup>2</sup> + <i>z</i><sup>2</sup>)<sup>3/2</sup>], along <i>z</i>. With <i>m⃗</i> = <i>mẑ</i>, <i>U</i> = −<i>mB</i>, so the force along <i>z</i> is <i>F</i> = −∂<i>U</i>/∂<i>z</i> = <i>m</i> ∂<i>B</i>/∂<i>z</i> = −3μ<sub>0</sub><i>mIR</i><sup>2</sup><i>z</i>/[2(<i>R</i><sup>2</sup> + <i>z</i><sup>2</sup>)<sup>5/2</sup>]. At <i>z</i> = 0: <i>F</i> = 0 (for <i>z</i> ≠ 0 the force points back toward the centre). The dipole feels no axial force at the centre of the loop (the field is maximum there, but the gradient is zero).',
          },
          {
            q: 'A short bar magnet is placed at the centre of a Helmholtz pair (two coaxial coils carrying current in the same direction). Show that the force on the magnet is zero at the midpoint between the coils.',
            a: 'At the midpoint, d<i>B</i>/d<i>x</i> = 0 by symmetry, so <i>F</i> = <i>m</i> d<i>B</i>/d<i>x</i> = 0.',
          },
          {
            q: 'A dipole <i>m⃗</i> = <i>m x̂</i> is placed at a point (<i>x</i>, 0, 0), <i>x</i> > 0, in the field <i>B⃗</i> = <i>B</i><sub>0</sub>(<i>x x̂</i> − <i>y ŷ</i>)/<i>r</i><sub>0</sub> (a field with ∇ · <i>B⃗</i> = 0). Find the force on the dipole.',
            a: '<i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i><sub>0</sub><i>x</i>/<i>r</i><sub>0</sub>, so <i>F</i><sub><i>x</i></sub> = −∂<i>U</i>/∂<i>x</i> = <i>mB</i><sub>0</sub>/<i>r</i><sub>0</sub> and <i>F</i><sub><i>y</i></sub> = <i>F</i><sub><i>z</i></sub> = 0: a constant force along +<i>x</i>, toward the stronger field.',
          },
          {
            q: 'Two bar magnets are placed colinearly with their axes along the <i>x</i>-axis, with their centres a distance <i>d</i> apart (<i>d</i> much larger than their lengths). Magnet 1 has moment <i>m</i><sub>1</sub>, magnet 2 has moment <i>m</i><sub>2</sub>. Find the force on magnet 2 due to magnet 1, for the case where both N poles face each other.',
            a: 'Put magnet 1 at the origin with <i>m⃗</i><sub>1</sub> along +<i>x</i> and magnet 2 at <i>x</i> = <i>d</i> with its N pole facing magnet 1, so <i>m⃗</i><sub>2</sub> is along −<i>x</i>. On the axis the field of magnet 1 points along +<i>x</i> (away from magnet 1) with magnitude <i>B</i> = (μ<sub>0</sub>/(4π))(2<i>m</i><sub>1</sub>/<i>x</i><sup>3</sup>). Then <i>m⃗</i><sub>2</sub> · <i>B⃗</i> = −<i>m</i><sub>2</sub><i>B</i> and <i>F</i><sub><i>x</i></sub> = −<i>m</i><sub>2</sub> d<i>B</i>/d<i>x</i>. Since <i>B</i> ∝ 1/<i>x</i><sup>3</sup>, d<i>B</i>/d<i>x</i> = −3<i>B</i>/<i>d</i>, so <i>F</i><sub><i>x</i></sub> = +3<i>m</i><sub>2</sub><i>B</i>/<i>d</i> = 3μ<sub>0</sub><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(2π<i>d</i><sup>4</sup>) > 0: the force on magnet 2 points away from magnet 1, i.e. repulsion, as expected for like poles.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 376–379 ─────────────────────────
  {
    n: 'B',
    title: 'Time Period via Energy Conservation',
    extra: true,
    kalam: 'Addendum B takes the oscillation formula T = 2π√(I/(mB)) from Topic 01 and derives it from energy conservation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 gives the oscillation formula <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)) as a result. This addendum derives it from energy conservation — a method that generalises when the restoring torque is not immediately written as −<i>kθ</i> but energy is accessible. It also handles systems where the “effective” <i>I</i> or <i>m</i> changes during motion (e.g., a body rotating while translating).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Energy conservation recipe for oscillation problems',
        steps: [
          'Choose a generalised coordinate <i>q</i> (displacement <i>x</i>, angle <i>θ</i>, height <i>y</i>, etc.).',
          'Write kinetic energy <i>K</i>(<i>q</i>, <i>q̇</i>).',
          'Write potential energy <i>U</i>(<i>q</i>).',
          'Total energy <i>E</i> = <i>K</i> + <i>U</i> = constant. Differentiate: d<i>E</i>/d<i>t</i> = 0.',
          'The resulting equation contains <i>q̇</i> and <i>q̈</i>. Factor out <i>q̇</i> (which is non-zero during motion).',
          'The bracket gives the equation of motion. Identify the effective angular frequency <i>ω</i>.',
          'Read <i>T</i> = 2π/<i>ω</i>.',
        ],
      },
      {
        t: 'table',
        title: 'Shortcuts for standard systems',
        head: ['System', 'K', 'U', 'ω²'],
        rows: [
          ['Bar magnet oscillating in uniform <i>B</i>', '½<i>Iθ̇</i><sup>2</sup>', '−<i>mB</i> cos <i>θ</i>', '<i>mB</i>/<i>I</i>'],
          ['Floating magnet oscillating vertically', '½<i>mẏ</i><sup>2</sup>', '½(<i>ρAg</i>)<i>y</i><sup>2</sup>', '<i>ρAg</i>/<i>m</i>'],
          ['Magnet swinging in Earth’s field', '½<i>Iθ̇</i><sup>2</sup>', '−<i>mB</i><sub>E</sub> cos(<i>θ</i> − <i>δ</i>)', '<i>mB</i><sub>E</sub>/<i>I</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>K</i> has units J = kg m<sup>2</sup> s<sup>−2</sup>. <i>U</i> for a magnetic dipole in field has units A m<sup>2</sup> × T = (A m<sup>2</sup>)(N A<sup>−1</sup> m<sup>−1</sup>) = N m = J. Correct. For the harmonic approximation <i>U</i> ≈ ½<i>k</i><sub>eff</sub><i>q</i><sup>2</sup>, the coefficient <i>k</i><sub>eff</sub> has units J m<sup>−2</sup> = N m<sup>−1</sup>, so <i>ω</i><sup>2</sup> = <i>k</i><sub>eff</sub>/<i>m</i><sub>eff</sub> has units (N m<sup>−1</sup>)/(kg) = (kg m s<sup>−2</sup> m<sup>−1</sup>)/kg = s<sup>−2</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Deriving T = 2π√(I/(mB)) from Energy',
        q: 'A bar magnet of moment of inertia <i>I</i> and magnetic moment <i>m</i> is placed in a uniform horizontal field <i>B</i>. It is displaced by a small angle <i>θ</i> from alignment with the field and released. Derive the time period.',
        steps: [
          '<b>Step 1 — Coordinate.</b> Let <i>θ</i> be the angle between <i>m⃗</i> and <i>B⃗</i>. Clockwise positive for convenience.',
          '<b>Step 2 — Kinetic energy.</b><br><i>K</i> = ½<i>Iθ̇</i><sup>2</sup>.',
          '<b>Step 3 — Potential energy.</b><br><i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>.',
          '<b>Step 4 — Total energy and differentiation.</b><br><i>E</i> = ½<i>Iθ̇</i><sup>2</sup> − <i>mB</i> cos <i>θ</i> = constant.<br>d<i>E</i>/d<i>t</i> = <i>Iθ̇θ̈</i> + <i>mB</i> sin <i>θ</i> · <i>θ̇</i> = 0.',
          '<b>Step 5 — Factor out <i>θ̇</i> (non-zero during motion).</b><br><i>Iθ̈</i> + <i>mB</i> sin <i>θ</i> = 0.',
          '<b>Step 6 — Small-angle approximation.</b> For <i>θ</i> ≪ 1, sin <i>θ</i> ≈ <i>θ</i>:<br><i>θ̈</i> + (<i>mB</i>/<i>I</i>)<i>θ</i> = 0.',
          '<b>Step 7 — Read off.</b><br><i>ω</i> = √(<i>mB</i>/<i>I</i>),   <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)).',
          'This matches the formula in Topic 01. The derivation shows that the oscillation is simple harmonic only for small angles — the linearisation sin <i>θ</i> ≈ <i>θ</i> is the key step.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Floating Magnet Oscillating',
        q: 'A short bar magnet of mass <i>m</i> = 50 g floats upright in water, held up partly by magnetic repulsion from a second magnet fixed below it. It oscillates vertically with small amplitude. The effective restoring force per unit displacement is <i>k</i><sub>eff</sub> = 2.0 N m<sup>−1</sup> (magnetic plus buoyancy). Find the time period.',
        steps: [
          'The energy method applies directly.',
          '<b>Step 1 — Coordinate.</b> Let <i>y</i> be the vertical displacement of the floating magnet from its equilibrium position.',
          '<b>Step 2 — Kinetic energy.</b><br><i>K</i> = ½<i>mẏ</i><sup>2</sup>.',
          '<b>Step 3 — Potential energy.</b> The total restoring force is <i>F</i> = −<i>k</i><sub>eff</sub><i>y</i>, so <i>U</i> = ½<i>k</i><sub>eff</sub><i>y</i><sup>2</sup> (the magnetic and buoyancy potentials add).',
          '<b>Step 4 — Equation of motion.</b><br><i>E</i> = ½<i>mẏ</i><sup>2</sup> + ½<i>k</i><sub>eff</sub><i>y</i><sup>2</sup> = constant.<br>d<i>E</i>/d<i>t</i> = <i>mẏÿ</i> + <i>k</i><sub>eff</sub><i>yẏ</i> = 0 ⟹ <i>mÿ</i> + <i>k</i><sub>eff</sub><i>y</i> = 0.',
          '<b>Step 5 — Read off.</b><br><i>ω</i> = √(<i>k</i><sub>eff</sub>/<i>m</i>) = √(2.0/0.050) = √40 = 6.32 rad s<sup>−1</sup>.<br><i>T</i> = 2π/<i>ω</i> = 2π/6.32 = 0.99 s ≈ 1.0 s.',
          '<b>Check.</b> The mass is 50 g, the effective spring constant is 2 N/m. The period of a mass-spring system is <i>T</i> = 2π√(<i>m</i>/<i>k</i>). This is exactly what we have. The magnetic and buoyancy forces combine to give an effective spring constant — the energy method handles this without needing to separate the individual force contributions.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A bar magnet with <i>I</i> = 8.0 × 10<sup>−5</sup> kg m<sup>2</sup> and <i>m</i> = 1.5 A m<sup>2</sup> oscillates in Earth’s horizontal field <i>B</i><sub>H</sub> = 0.40 G. Find the time period.',
            a: '<i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)) = 2π√(8.0 × 10<sup>−5</sup>/(1.5 × 4.0 × 10<sup>−5</sup>)) = 2π√(8/6) = 2π√1.333 = 2π(1.155) ≈ 7.3 s.',
          },
          {
            q: 'A magnet is hung from a thread and oscillates in the Earth’s magnetic field. Show that the period is independent of the thread’s length. (Treat the thread as exerting no twisting torque.)',
            a: 'The restoring torque is <i>τ</i> = −<i>mB</i><sub>H</sub> sin <i>θ</i> ≈ −<i>mB</i><sub>H</sub><i>θ</i> for small <i>θ</i>. This depends only on <i>m</i> and <i>B</i><sub>H</sub>, not on the thread length. The thread provides the suspension point but does not appear in the equation of motion.',
          },
          {
            q: 'A small magnet (moment <i>m</i>) is held at rest at distance <i>d</i> from a fixed coaxial magnet (moment <i>m</i>′, like poles facing) by a constant horizontal force. Find the spring constant for small oscillations along the line.',
            a: 'The force on the first magnet is <i>F</i>(<i>x</i>) = 3μ<sub>0</sub><i>mm</i>′/(2π<i>x</i><sup>4</sup>), repulsive (as found in practice question 5 of Additional topic A). The constant holding force does not depend on <i>x</i>, so for a small displacement <i>y</i> from <i>x</i> = <i>d</i> the net force is <i>F</i>(<i>d</i> + <i>y</i>) − <i>F</i>(<i>d</i>) ≈ (d<i>F</i>/d<i>x</i> at <i>x</i> = <i>d</i>) <i>y</i> = −[6μ<sub>0</sub><i>mm</i>′/(π<i>d</i><sup>5</sup>)] <i>y</i>. Hence <i>k</i> = 6μ<sub>0</sub><i>mm</i>′/(π<i>d</i><sup>5</sup>).',
          },
          {
            q: 'A magnet of moment <i>m</i> and moment of inertia <i>I</i> is pivoted at its centre and can rotate in the horizontal plane. A second short magnet of moment <i>m</i>′ is fixed in the same horizontal plane at distance <i>d</i> from the pivot, with its axis along the line joining their centres. Neglecting the Earth’s field, find the period of small oscillation of the first magnet.',
            a: 'The pivot lies on the axial line of the fixed magnet, so the field there points along the line joining the centres, with <i>B</i> = (μ<sub>0</sub>/(4π))(2<i>m</i>′/<i>d</i><sup>3</sup>) = μ<sub>0</sub><i>m</i>′/(2π<i>d</i><sup>3</sup>), and the pivoted magnet’s equilibrium axis lies along this line. The torque on the pivoted magnet is <i>τ</i> = −<i>mB</i> sin <i>θ</i> ≈ −[μ<sub>0</sub><i>mm</i>′/(2π<i>d</i><sup>3</sup>)] <i>θ</i>, so <i>ω</i><sup>2</sup> = μ<sub>0</sub><i>mm</i>′/(2π<i>Id</i><sup>3</sup>) and <i>T</i> = 2π√(2π<i>Id</i><sup>3</sup>/(μ<sub>0</sub><i>mm</i>′)).',
          },
          {
            q: 'A magnetic dipole <i>m</i>, of moment of inertia <i>I</i>, is placed in a uniform field <i>B</i> at a small angle <i>θ</i><sub>0</sub> to the field and released. Find the period of oscillation.',
            a: 'The equation of motion is <i>I</i>(d<sup>2</sup><i>θ</i>/d<i>t</i><sup>2</sup>) + <i>mB</i> sin <i>θ</i> = 0, with <i>θ</i> measured from the equilibrium direction (along <i>B</i>). For small amplitude <i>θ</i><sub>0</sub>, <i>ω</i> = √(<i>mB</i>/<i>I</i>) and <i>T</i> = 2π√(<i>I</i>/(<i>mB</i>)), independent of the amplitude <i>θ</i><sub>0</sub>. For large <i>θ</i><sub>0</sub> the motion is still periodic about <i>θ</i> = 0 but is no longer simple harmonic, and the period increases with <i>θ</i><sub>0</sub>.',
          },
        ],
      },
    ],
  },
];
