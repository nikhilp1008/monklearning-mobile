import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics A to C, word for word from the Class 12
 * Physics Master Reference, pages 60 to 70: the Supplement's shared opening
 * (p. 60, set at the head of Addendum A), then A Continuous Distributions:
 * Beyond Ring, Disc, Arc (pp. 60 to 64), B Conductors: Boundary Conditions,
 * Pressure, Images (pp. 64 to 68) and C Dipoles in Non-Uniform Fields &
 * Dipole–Dipole Interaction (pp. 68 to 70; its practice and answers sit at
 * the top of p. 70). Each addendum prints its own practice problems and
 * answers, which are its Practice part. These pages print no drawings; A's
 * "Standard Results" grid is a table block.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Continuous Distributions: Beyond Ring, Disc, Arc',
    extra: true,
    kalam: 'Addendum A completes the continuous-distribution toolkit.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you charge quantisation, Coulomb’s law, dipole fields, the three standard continuous distributions (ring, disc, arc), and the three classic Gauss’s law applications (line, sheet, shell). Six JEE patterns remain that combine these pieces in ways the chapter does not explicitly assemble. Addendum A completes the continuous-distribution toolkit: finite lines at arbitrary points, general arcs, hemispheres, and the superposition trick for cavities. Addendum B covers conductor physics the chapter only hints at — boundary conditions, electrostatic pressure, energy density, induced charges, and the image-charge method for a point charge near a grounded plane. Addendum C extends dipoles to non-uniform fields: the force formula <i>F</i> = (<i>p</i> · ∇)<i>E</i>, dipole–dipole interaction energy and torque, and the quadrupole field. Addendum D pushes Gauss’s law into a non-uniform density (<i>ρ</i> = <i>kr</i>), coaxial cables, slabs of finite thickness, and cavities inside conductors. Addendum E introduces electrostatic energy density <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>, the self-energy of charged spheres and shells, and the electrostatic pressure <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) that drives soap-bubble expansion. Addendum F is a pattern laboratory: spring–block–charge equilibrium, charge sharing between unequal spheres, and three-charge equilibria on rings and lines.<br><br>Numbering continues from the chapter’s Topic 05. Every method below is Coulomb integration, Gauss’s law, superposition, or energy differentiation — applied one step wider.',
      },
      {
        t: 'p',
        html: 'The chapter derives the field on the axis of a ring, on the axis of a disc, and at the centre of a semicircular arc. JEE Advanced routinely asks for fields at <b>off-axis</b> points of a finite line, at the centre of an arc of arbitrary angle, at the centre of a hemispherical shell, and inside a sphere with a spherical cavity. All reduce to the same recipe: choose d<i>q</i>, write d<i>E⃗</i>, exploit symmetry to kill components, integrate in one variable.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Universal integration recipe for 1-D and 2-D distributions',
        steps: [
          '<b>Parameterise the element.</b> Line: d<i>q</i> = <i>λ</i> d<i>l</i> = <i>λ</i> d<i>x</i> (or <i>λR</i> d<i>θ</i> for arc). Surface: d<i>q</i> = <i>σ</i> d<i>A</i> = <i>σ</i> 2π<i>r</i> d<i>r</i> (disc ring) or <i>σR</i><sup>2</sup> sin <i>θ</i> d<i>θ</i> d<i>φ</i> (sphere).',
          '<b>Write the vector contribution.</b> d<i>E⃗</i> = (1/(4πε<sub>0</sub>))(d<i>q</i>/<i>r</i><sup>2</sup>) <i>r̂</i> where <i>r⃗</i> points <b>from</b> d<i>q</i> <b>to</b> the field point.',
          '<b>Resolve and cancel.</b> Identify the symmetry axis. Components perpendicular to it cancel in pairs; only the axial component survives.',
          '<b>Express everything in the integration variable.</b> Eliminate <i>r</i>, cos <i>α</i>, etc. in favour of <i>x</i>, <i>θ</i>, or <i>φ</i>.',
          '<b>Integrate.</b> Check limits. Verify limiting cases: <i>x</i> → 0, <i>x</i> → ∞, <i>L</i> → ∞, <i>θ</i><sub>0</sub> → π.',
        ],
      },
      {
        t: 'p',
        html: '<b>Superposition for cavities.</b> A sphere with a spherical cavity is <b>not</b> a new integral. Treat it as a solid sphere of density <i>ρ</i> <b>plus</b> a smaller sphere of density −<i>ρ</i> centred at the cavity. The field inside the cavity is uniform — a favourite Advanced result.',
      },

      { t: 'part', title: 'Standard results (to keep alongside the chapter’s table)' },
      {
        t: 'table',
        title: null,
        head: ['Configuration', 'Field Point', 'Magnitude & Direction'],
        rows: [
          [
            'Finite line, uniform <i>λ</i>, length <i>L</i>',
            'Perpendicular bisector, distance <i>d</i>',
            '<i>E</i> = (<i>λ</i>/(2πε<sub>0</sub>))(<i>L</i>/(<i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>))), ⊥ to line, away if <i>λ</i> > 0',
          ],
          [
            'Finite line, uniform <i>λ</i>',
            'On axis, distance <i>x</i> from near end',
            '<i>E</i> = (<i>λ</i>/(4πε<sub>0</sub>))(1/<i>x</i> − 1/(<i>x</i> + <i>L</i>)), along line away if <i>λ</i> > 0',
          ],
          [
            'Arc of radius <i>R</i>, angle 2<i>θ</i><sub>0</sub>, uniform <i>λ</i>',
            'Centre of arc',
            '<i>E</i> = (<i>λ</i>/(2πε<sub>0</sub><i>R</i>)) sin <i>θ</i><sub>0</sub>, along symmetry axis, away from arc',
          ],
          [
            'Hemispherical shell, radius <i>R</i>, uniform <i>σ</i>',
            'Centre of base',
            '<i>E</i> = <i>σ</i>/(4ε<sub>0</sub>), perpendicular to base, away from shell',
          ],
          [
            'Solid sphere, radius <i>R</i>, uniform <i>ρ</i> with off-centre spherical cavity',
            'Inside cavity',
            '<i>E⃗</i> = (<i>ρ</i>/(3ε<sub>0</sub>)) <i>a⃗</i> where <i>a⃗</i> = vector from big centre to cavity centre (uniform!)',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Finite Line Charge at Perpendicular Bisector',
        q: 'A thin rod of length <i>L</i> = 0.40 m carries uniform linear charge density <i>λ</i> = 2.0 μC/m. Find the electric field at a point on the perpendicular bisector, distance <i>d</i> = 0.30 m from the rod.',
        steps: [
          '<b>Step 1 — Geometry.</b> Place rod on <i>x</i>-axis from −<i>L</i>/2 to +<i>L</i>/2. Field point <i>P</i> at (0, <i>d</i>). Element at (<i>x</i>, 0) has d<i>q</i> = <i>λ</i> d<i>x</i>. Distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>).',
          '<b>Step 2 — Vector contribution.</b> d<i>E⃗</i> points from (<i>x</i>, 0) to (0, <i>d</i>). Its <i>x</i>-component: d<i>E</i><sub><i>x</i></sub> = −d<i>E</i> <i>x</i>/<i>r</i> (cancels by symmetry). Its <i>y</i>-component: d<i>E</i><sub><i>y</i></sub> = d<i>E</i> <i>d</i>/<i>r</i> = (1/(4πε<sub>0</sub>))(<i>λ</i> d<i>x</i>/(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)) · <i>d</i>/√(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>).',
          '<b>Step 3 — Integrate.</b> Symmetry ⇒ integrate <i>x</i> = 0 → <i>L</i>/2 and double.<br><i>E</i><sub><i>y</i></sub> = 2 ∫<sub>0</sub><sup><i>L</i>/2</sup> (1/(4πε<sub>0</sub>))(<i>λd</i> d<i>x</i>/(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup>) = (<i>λd</i>/(2πε<sub>0</sub>)) ∫<sub>0</sub><sup><i>L</i>/2</sup> d<i>x</i>/(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup>',
          'Substitute <i>x</i> = <i>d</i> tan <i>θ</i>, d<i>x</i> = <i>d</i> sec<sup>2</sup> <i>θ</i> d<i>θ</i>, (<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup> = <i>d</i><sup>3</sup> sec<sup>3</sup> <i>θ</i>. Limits: <i>x</i> = 0 → <i>θ</i> = 0; <i>x</i> = <i>L</i>/2 → <i>θ</i> = tan<sup>−1</sup>(<i>L</i>/(2<i>d</i>)).<br>∫ <i>d</i> sec<sup>2</sup> <i>θ</i> d<i>θ</i>/(<i>d</i><sup>3</sup> sec<sup>3</sup> <i>θ</i>) = (1/<i>d</i><sup>2</sup>) ∫ cos <i>θ</i> d<i>θ</i> = (1/<i>d</i><sup>2</sup>) sin <i>θ</i>|<sub>0</sub><sup>tan⁻¹(<i>L</i>/(2<i>d</i>))</sup> = (1/<i>d</i><sup>2</sup>)((<i>L</i>/(2<i>d</i>))/√(1 + (<i>L</i>/(2<i>d</i>))<sup>2</sup>)) = <i>L</i>/(<i>d</i><sup>2</sup>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>))<br><i>E</i> = (<i>λd</i>/(2πε<sub>0</sub>)) · <i>L</i>/(<i>d</i><sup>2</sup>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>)) = <i>λL</i>/(2πε<sub>0</sub><i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>)) = (<i>λ</i>/(2πε<sub>0</sub>))(<i>L</i>/(<i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>)))',
          '<b>Step 4 — Numbers.</b> <i>λ</i> = 2.0 × 10<sup>−6</sup> C/m, <i>L</i> = 0.40 m, <i>d</i> = 0.30 m, <i>k</i> = 9 × 10<sup>9</sup> N·m<sup>2</sup>/C<sup>2</sup>.<br><i>E</i> = 2<i>kλ</i>(<i>L</i>/(<i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>))) = 2(9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)(0.40/(0.30√(0.16 + 0.36))) = 36 × 10<sup>3</sup> (0.40/(0.30√0.52))<br>√0.52 ≈ 0.7211 ⇒ <i>E</i> ≈ (14.4 × 10<sup>3</sup>)/0.2163 ≈ 6.66 × 10<sup>4</sup> N/C',
          '<b>Check limits.</b> <i>L</i> → ∞: <i>E</i> → <i>λ</i>/(2πε<sub>0</sub><i>d</i>) (infinite line). <i>d</i> → ∞: <i>E</i> → <i>λL</i>/(4πε<sub>0</sub><i>d</i><sup>2</sup>) = <i>kQ</i>/<i>d</i><sup>2</sup> (point charge). Both correct.',
        ],
        ans: '<i>E</i> ≈ 6.66 × 10<sup>4</sup> N/C, directed perpendicularly away from the rod.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Centre of a Hemispherical Shell',
        q: 'A thin hemispherical shell of radius <i>R</i> carries uniform surface charge density <i>σ</i>. Find the electric field at the centre <i>O</i> of the base circle.',
        steps: [
          '<b>Step 1 — Element.</b> Use spherical coordinates: ring at angle <i>θ</i> from symmetry axis (vertical), width <i>R</i> d<i>θ</i>. Ring radius <i>r</i> = <i>R</i> sin <i>θ</i>, area d<i>A</i> = 2π<i>r</i> · <i>R</i> d<i>θ</i> = 2π<i>R</i><sup>2</sup> sin <i>θ</i> d<i>θ</i>. Charge d<i>q</i> = <i>σ</i> d<i>A</i> = 2π<i>σR</i><sup>2</sup> sin <i>θ</i> d<i>θ</i>.',
          '<b>Step 2 — Field of ring at centre.</b> Distance from ring to <i>O</i> is <i>R</i>.',
          'Every point of the shell is at the same distance <i>R</i> from <i>O</i>, so each element contributes a field of magnitude <i>k</i> d<i>q</i>/<i>R</i><sup>2</sup> at <i>O</i>. For <i>σ</i> > 0 the field of an element points away from the element, that is, from the element toward <i>O</i>, radially inward. The horizontal components cancel in pairs by symmetry, so only the component along the symmetry axis survives.',
          '<b>Why not use the full sphere?</b> A complete spherical shell gives zero field at its centre only because its upper and lower hemispheres produce equal and opposite fields there. Each hemisphere on its own therefore gives a non-zero field at <i>O</i>, so we integrate.',
          '<b>Geometry of the axial component.</b> The ring at angle <i>θ</i> from the symmetry axis lies on a radius through <i>O</i>, so the field of each of its elements makes angle <i>θ</i> with the axis. The component along the axis therefore carries the factor cos <i>θ</i>.',
          'd<i>E</i> (magnitude) at <i>O</i> from ring: d<i>E</i> = <i>k</i> d<i>q</i>/<i>R</i><sup>2</sup> (since every point on shell is distance <i>R</i> from <i>O</i>).<br>Direction: radially inward (toward <i>O</i> from the shell). Vertical component (downward, toward base): d<i>E</i><sub><i>z</i></sub> = d<i>E</i> cos <i>θ</i> (since the inward radial vector makes angle <i>θ</i> with the downward vertical axis).<br>d<i>E</i><sub><i>z</i></sub> = (1/(4πε<sub>0</sub>))(d<i>q</i>/<i>R</i><sup>2</sup>) cos <i>θ</i> = (1/(4πε<sub>0</sub>))(2π<i>σR</i><sup>2</sup> sin <i>θ</i> d<i>θ</i>/<i>R</i><sup>2</sup>) cos <i>θ</i> = (<i>σ</i>/(2ε<sub>0</sub>)) sin <i>θ</i> cos <i>θ</i> d<i>θ</i>',
          'Integrate <i>θ</i> = 0 (top of hemisphere) to π/2 (rim):<br><i>E</i><sub><i>z</i></sub> = (<i>σ</i>/(2ε<sub>0</sub>)) ∫<sub>0</sub><sup>π/2</sup> sin <i>θ</i> cos <i>θ</i> d<i>θ</i> = (<i>σ</i>/(2ε<sub>0</sub>)) [sin<sup>2</sup> <i>θ</i>/2]<sub>0</sub><sup>π/2</sup> = <i>σ</i>/(4ε<sub>0</sub>)',
          '<b>Direction:</b> downward along the symmetry axis, away from the hemispherical shell (towards the open side of the base). For <i>σ</i> > 0 the field at <i>O</i> points away from the shell.',
          '<b>Check.</b> The two hemispheres of a full shell give equal and opposite fields <i>σ</i>/(4ε<sub>0</sub>) at the centre, so the total is zero, as it must be.',
        ],
        ans: '<i>E</i> = <i>σ</i>/(4ε<sub>0</sub>), directed along the symmetry axis, away from the shell.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Sphere with Spherical Cavity (Superposition)',
        q: 'A solid sphere of radius <i>R</i> has uniform volume charge density <i>ρ</i>. A spherical cavity of radius <i>R</i>/2 is carved out, its centre at distance <i>R</i>/2 from the big sphere’s centre. Find the electric field <b>inside the cavity</b>.',
        steps: [
          '<b>Step 1 — Superposition.</b> The cavity is equivalent to: (i) full solid sphere radius <i>R</i>, density <i>ρ</i>; (ii) smaller sphere radius <i>R</i>/2, density −<i>ρ</i>, centred at cavity centre <i>C</i>. Let <i>O</i> be the big sphere’s centre. Vector <i>a⃗</i> = <i>OC⃗</i>, |<i>a⃗</i>| = <i>R</i>/2.',
          '<b>Step 2 — Field in solid sphere.</b> At any point <i>P</i> inside a uniform sphere, <i>E⃗</i><sub>1</sub> = (<i>ρ</i>/(3ε<sub>0</sub>)) <i>r⃗</i><sub>1</sub> where <i>r⃗</i><sub>1</sub> = <i>OP⃗</i>. (Derived in chapter: <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>) radially outward.)',
          '<b>Step 3 — Field in negative sphere.</b> At the same point <i>P</i>, the cavity sphere (centre <i>C</i>) contributes <i>E⃗</i><sub>2</sub> = (−<i>ρ</i>/(3ε<sub>0</sub>)) <i>r⃗</i><sub>2</sub> where <i>r⃗</i><sub>2</sub> = <i>CP⃗</i>.',
          '<b>Step 4 — Total field in cavity.</b> <i>E⃗</i> = <i>E⃗</i><sub>1</sub> + <i>E⃗</i><sub>2</sub> = (<i>ρ</i>/(3ε<sub>0</sub>))(<i>r⃗</i><sub>1</sub> − <i>r⃗</i><sub>2</sub>) = (<i>ρ</i>/(3ε<sub>0</sub>)) <i>a⃗</i>. Since <i>r⃗</i><sub>1</sub> − <i>r⃗</i><sub>2</sub> = <i>OC⃗</i> = <i>a⃗</i> is <b>constant</b> (independent of <i>P</i>), the field inside the cavity is <b>uniform</b>.',
          '<b>Step 5 — Magnitude.</b> |<i>a⃗</i>| = <i>R</i>/2 ⇒ <i>E</i> = (<i>ρ</i>/(3ε<sub>0</sub>)) · (<i>R</i>/2) = <i>ρR</i>/(6ε<sub>0</sub>). Direction: from <i>O</i> toward <i>C</i> (i.e. from big centre to cavity centre).',
          '<b>Check.</b> If cavity is concentric (<i>a⃗</i> = 0), <i>E</i> = 0 — correct. If cavity touches surface (<i>a</i> = <i>R</i> − <i>R</i>/2 = <i>R</i>/2), field is non-zero — correct.',
        ],
        ans: '<i>E⃗</i> = (<i>ρ</i>/(3ε<sub>0</sub>)) <i>a⃗</i> (uniform), magnitude <i>ρR</i>/(6ε<sub>0</sub>), directed from the big sphere’s centre toward the cavity centre.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A finite line charge <i>λ</i>, length <i>L</i>, lies on the <i>x</i>-axis from <i>x</i> = 0 to <i>x</i> = <i>L</i>. Find the electric field at a point on the <i>x</i>-axis at <i>x</i> = −<i>d</i> (<i>d</i> > 0, to the left of the near end).',
            a: 'Point is left of rod. All d<i>E⃗</i> point left (away from rod if <i>λ</i> > 0). Distance from element at <i>x</i> to point is <i>x</i> + <i>d</i>. <i>E</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>kλ</i> d<i>x</i>/(<i>x</i> + <i>d</i>)<sup>2</sup> = <i>kλ</i>[1/<i>d</i> − 1/(<i>d</i> + <i>L</i>)] = <i>kλL</i>/(<i>d</i>(<i>d</i> + <i>L</i>)) directed in −<i>x̂</i> (away from the rod, since <i>λ</i> > 0 and the point lies to its left). Magnitude (<i>λ</i>/(4πε<sub>0</sub>))(1/<i>d</i> − 1/(<i>d</i> + <i>L</i>)).',
          },
          {
            q: 'A wire bent into an arc of radius <i>R</i> subtends angle 120° at the centre. Uniform <i>λ</i>. Find <i>E⃗</i> at the centre.',
            a: 'Arc angle 2<i>θ</i><sub>0</sub> = 120° ⇒ <i>θ</i><sub>0</sub> = 60°. <i>E</i> = (<i>λ</i>/(2πε<sub>0</sub><i>R</i>)) sin 60° = √3<i>λ</i>/(4πε<sub>0</sub><i>R</i>) along symmetry axis, away from arc.',
          },
          {
            q: 'A thin hemispherical shell of radius <i>R</i> has uniform <i>σ</i>. Find the field at a point on the symmetry axis, distance <i>z</i> from the centre of the base. (Set up the integral; do not evaluate.)',
            a: 'Ring at angle <i>θ</i>: d<i>q</i> = <i>σ</i>2π<i>R</i><sup>2</sup> sin <i>θ</i> d<i>θ</i>. Distance to point at <i>z</i> on axis: <i>s</i> = √(<i>R</i><sup>2</sup> + <i>z</i><sup>2</sup> − 2<i>Rz</i> cos <i>θ</i>). Axial component d<i>E</i><sub><i>z</i></sub> = <i>k</i> d<i>q</i> (<i>z</i> − <i>R</i> cos <i>θ</i>)/<i>s</i><sup>3</sup>. <i>E</i><sub><i>z</i></sub> = 2π<i>kσR</i><sup>2</sup> ∫<sub>0</sub><sup>π/2</sup> (<i>z</i> − <i>R</i> cos <i>θ</i>) sin <i>θ</i> d<i>θ</i>/(<i>R</i><sup>2</sup> + <i>z</i><sup>2</sup> − 2<i>Rz</i> cos <i>θ</i>)<sup>3/2</sup>.',
          },
          {
            q: 'A solid sphere radius <i>R</i>, uniform <i>ρ</i>, has a spherical cavity radius <i>R</i>/3 whose centre is at distance <i>R</i>/3 from the big centre. Find <i>E⃗</i> inside the cavity.',
            a: '<i>a⃗</i> magnitude <i>R</i>/3. <i>E⃗</i> = (<i>ρ</i>/(3ε<sub>0</sub>)) <i>a⃗</i> uniform. Magnitude <i>ρR</i>/(9ε<sub>0</sub>), direction <i>O</i> → <i>C</i>.',
          },
          {
            q: 'An infinite line charge <i>λ</i> runs parallel to an infinite conducting plane at distance <i>d</i>. Using the image method, find the surface charge density induced on the plane as a function of distance <i>x</i> along the plane from the foot of the perpendicular.',
            a: 'Image: line −<i>λ</i> at distance <i>d</i> behind plane. At point on plane distance <i>x</i> from foot, field from real line: <i>E</i><sub>real,⊥</sub> = (<i>λ</i>/(2πε<sub>0</sub>√(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>))) · <i>d</i>/√(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>) = <i>λd</i>/(2πε<sub>0</sub>(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)) (downward into plane). Image line gives same perpendicular component. Total <i>E</i><sub>⊥</sub> = <i>λd</i>/(πε<sub>0</sub>(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)) into plane. Boundary condition: <i>σ</i> = −ε<sub>0</sub><i>E</i><sub>⊥</sub> (since field lines terminate on negative induced charge). <i>σ</i>(<i>x</i>) = −<i>λd</i>/(π(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)).',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Conductors: Boundary Conditions, Pressure, Images',
    extra: true,
    kalam: 'Addendum B covers conductor physics the chapter only hints at.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states “field inside a conductor is zero” and “charge resides on the surface”. JEE Advanced demands the quantitative consequences: the exact boundary condition at a conductor surface, the electrostatic pressure that tries to blow a charged conductor apart, the energy density in the field, the charge distribution when conductors of different sizes are connected, and the method of images for a point charge near a grounded plane.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Boundary conditions at a conductor surface (electrostatics)',
        steps: [
          '<b>Tangential E is zero:</b> <i>E⃗</i><sub>tan</sub> = 0. If not, surface charges would move until it is.',
          '<b>Normal E just outside:</b> <i>E</i><sub>⊥</sub> = <i>σ</i>/ε<sub>0</sub>. Proof: Gaussian pillbox straddling the surface. Flux = <i>E</i><sub>⊥</sub><i>A</i> = <i>σA</i>/ε<sub>0</sub>. (Contrast with non-conducting sheet: <i>E</i> = <i>σ</i>/(2ε<sub>0</sub>) on each side. The conductor’s field is <b>double</b> because the interior field is zero, so all flux exits through the outer cap.)',
          '<b>Potential is constant</b> throughout the conductor.',
        ],
      },
      {
        t: 'p',
        html: '<b>Electrostatic pressure (force per unit area on surface charge).</b> A surface charge <i>σ</i> sits in the field of <b>all other charges</b>. The field just outside is <i>E</i> = <i>σ</i>/ε<sub>0</sub>, but half of this comes from the local patch itself. The patch feels only the field of the <b>rest</b> of the conductor, <i>E</i><sub>other</sub> = <i>E</i>/2 = <i>σ</i>/(2ε<sub>0</sub>). Force on area d<i>A</i>: d<i>F</i> = <i>σ</i> d<i>A</i> · <i>E</i><sub>other</sub> = (<i>σ</i><sup>2</sup>/(2ε<sub>0</sub>)) d<i>A</i>. Pressure <i>P</i> = d<i>F</i>/d<i>A</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>), directed <b>outward</b> (repulsion).',
      },
      {
        t: 'p',
        html: '<b>Energy density in electric field.</b> <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>. Total energy <i>U</i> = ∫ <i>u</i> d<i>V</i> = ½ ∫ ε<sub>0</sub><i>E</i><sup>2</sup> d<i>V</i>. For a charged conductor, <i>U</i> = ½<i>QV</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>).',
      },
      {
        t: 'p',
        html: '<b>Charge sharing between unequal spheres.</b> Two conducting spheres radii <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, connected by a thin wire (so same potential <i>V</i>). <i>Q</i><sub>1</sub> = 4πε<sub>0</sub><i>R</i><sub>1</sub><i>V</i>, <i>Q</i><sub>2</sub> = 4πε<sub>0</sub><i>R</i><sub>2</sub><i>V</i>. <i>Q</i><sub>1</sub>/<i>Q</i><sub>2</sub> = <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub>. Surface charge densities: <i>σ</i><sub>1</sub> = <i>Q</i><sub>1</sub>/(4π<i>R</i><sub>1</sub><sup>2</sup>) = ε<sub>0</sub><i>V</i>/<i>R</i><sub>1</sub>, <i>σ</i><sub>2</sub> = ε<sub>0</sub><i>V</i>/<i>R</i><sub>2</sub>. <i>σ</i><sub>1</sub>/<i>σ</i><sub>2</sub> = <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> — <b>smaller sphere has higher surface charge density</b> (and higher surface field <i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>V</i>/<i>R</i>).',
      },
      {
        t: 'p',
        html: '<b>Method of images — point charge near grounded plane.</b> A point charge <i>q</i> at distance <i>d</i> from an infinite grounded conducting plane. The plane is an equipotential <i>V</i> = 0. Replace the plane by an image charge −<i>q</i> at distance <i>d</i> behind the plane. The potential in the region <i>z</i> > 0 (where the real charge lives) is exactly <i>V</i> = (1/(4πε<sub>0</sub>))(<i>q</i>/<i>r</i><sub>+</sub> − <i>q</i>/<i>r</i><sub>−</sub>) where <i>r</i><sub>±</sub> are distances to ±<i>q</i>. This satisfies <i>V</i> = 0 on the plane and Poisson’s equation with the correct source. The induced surface charge density on the plane: <i>σ</i>(<i>x</i>, <i>y</i>) = −<i>qd</i>/(2π(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup>). Total induced charge = −<i>q</i>. Force on <i>q</i>: attraction toward plane, <i>F</i> = (1/(4πε<sub>0</sub>))(<i>q</i><sup>2</sup>/(2<i>d</i>)<sup>2</sup>) = <i>q</i><sup>2</sup>/(16πε<sub>0</sub><i>d</i><sup>2</sup>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force Between Hemispheres of a Charged Sphere',
        q: 'A thin conducting spherical shell of radius <i>R</i> carries total charge <i>Q</i>. Find the electrostatic force trying to separate the two hemispheres (the “repulsion force” between them).',
        steps: [
          '<b>Step 1 — Surface charge density.</b> <i>σ</i> = <i>Q</i>/(4π<i>R</i><sup>2</sup>).',
          '<b>Step 2 — Electrostatic pressure.</b> Just outside the conductor, <i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>Q</i>/(4πε<sub>0</sub><i>R</i><sup>2</sup>). Pressure <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = <i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>), directed radially outward.',
          '<b>Step 3 — Force on a hemisphere.</b> The pressure acts normal to the surface. To find the net force separating the hemispheres, project the pressure onto the axis. Consider the upper hemisphere. The <i>z</i>-component of force on area element d<i>A</i> is d<i>F</i><sub><i>z</i></sub> = <i>P</i> d<i>A</i> cos <i>θ</i> (where <i>θ</i> is from +<i>z</i> axis). Integrate over the upper hemisphere: d<i>A</i> = <i>R</i><sup>2</sup> sin <i>θ</i> d<i>θ</i> d<i>φ</i>, <i>θ</i> : 0 → π/2.<br><i>F</i><sub><i>z</i></sub> = ∫<sub>0</sub><sup>2π</sup> d<i>φ</i> ∫<sub>0</sub><sup>π/2</sup> <i>P R</i><sup>2</sup> sin <i>θ</i> cos <i>θ</i> d<i>θ</i> = 2π<i>PR</i><sup>2</sup> [sin<sup>2</sup> <i>θ</i>/2]<sub>0</sub><sup>π/2</sup> = π<i>PR</i><sup>2</sup>',
          '<b>Step 4 — Substitute <i>P</i>.</b><br><i>F</i> = π<i>R</i><sup>2</sup> · <i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>) = <i>Q</i><sup>2</sup>/(32πε<sub>0</sub><i>R</i><sup>2</sup>) = (1/(4πε<sub>0</sub>))(<i>Q</i><sup>2</sup>/(8<i>R</i><sup>2</sup>)) = <i>kQ</i><sup>2</sup>/(8<i>R</i><sup>2</sup>)',
          '<b>Energy check.</b> For a shell of fixed charge <i>Q</i> the field energy is <i>U</i> = <i>kQ</i><sup>2</sup>/(2<i>R</i>). Expanding the radius by d<i>R</i> changes it by d<i>U</i> = −<i>kQ</i><sup>2</sup> d<i>R</i>/(2<i>R</i><sup>2</sup>), so the net outward force on the shell is <i>kQ</i><sup>2</sup>/(2<i>R</i><sup>2</sup>). This equals pressure times area, <i>P</i> · 4π<i>R</i><sup>2</sup> = <i>kQ</i><sup>2</sup>/(2<i>R</i><sup>2</sup>), which confirms <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>).',
        ],
        ans: '<i>F</i> = <i>Q</i><sup>2</sup>/(32πε<sub>0</sub><i>R</i><sup>2</sup>) = <i>kQ</i><sup>2</sup>/(8<i>R</i><sup>2</sup>), repulsive (hemispheres push apart).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Two Unequal Spheres Connected by Wire',
        q: 'Two conducting spheres of radii <i>R</i><sub>1</sub> = 10 cm and <i>R</i><sub>2</sub> = 20 cm are initially neutral. They are connected by a long thin wire. A total charge <i>Q</i> = 3.0 μC is deposited on the system (e.g., by touching a charged rod to one sphere). Find the final charge on each sphere and the surface charge density on each.',
        steps: [
          '<b>Step 1 — Same potential.</b> <i>V</i><sub>1</sub> = <i>V</i><sub>2</sub> = <i>V</i>. <i>Q</i><sub>1</sub> = <i>C</i><sub>1</sub><i>V</i>, <i>Q</i><sub>2</sub> = <i>C</i><sub>2</sub><i>V</i>. Capacitance of isolated sphere: <i>C</i> = 4πε<sub>0</sub><i>R</i>. So <i>Q</i><sub>1</sub>/<i>Q</i><sub>2</sub> = <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = 1/2.',
          '<b>Step 2 — Charge conservation.</b> <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> = <i>Q</i> = 3.0 μC. <i>Q</i><sub>1</sub> = <i>Q</i>/3 = 1.0 μC, <i>Q</i><sub>2</sub> = 2<i>Q</i>/3 = 2.0 μC.',
          '<b>Step 3 — Surface charge densities.</b> <i>σ</i><sub>1</sub> = <i>Q</i><sub>1</sub>/(4π<i>R</i><sub>1</sub><sup>2</sup>) = (1.0 × 10<sup>−6</sup>)/(4π(0.10)<sup>2</sup>) = 10<sup>−6</sup>/(0.04π) ≈ 7.96 × 10<sup>−6</sup> C/m<sup>2</sup>.<br><i>σ</i><sub>2</sub> = <i>Q</i><sub>2</sub>/(4π<i>R</i><sub>2</sub><sup>2</sup>) = (2.0 × 10<sup>−6</sup>)/(4π(0.20)<sup>2</sup>) = (2 × 10<sup>−6</sup>)/(0.16π) ≈ 3.98 × 10<sup>−6</sup> C/m<sup>2</sup>.',
          'Ratio <i>σ</i><sub>1</sub>/<i>σ</i><sub>2</sub> = 2 = <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub>. Smaller sphere has higher <i>σ</i>.',
        ],
        ans: '<i>Q</i><sub>1</sub> = 1.0 μC, <i>Q</i><sub>2</sub> = 2.0 μC; <i>σ</i><sub>1</sub> ≈ 7.96 μC/m<sup>2</sup>, <i>σ</i><sub>2</sub> ≈ 3.98 μC/m<sup>2</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Point Charge Near Grounded Plane (Image Method)',
        q: 'A point charge <i>q</i> = 2.0 μC is placed at distance <i>d</i> = 10 cm from an infinite grounded conducting plane. Find (a) the force on <i>q</i>, (b) the surface charge density on the plane at the point nearest to <i>q</i>, and (c) the total induced charge on the plane.',
        steps: [
          '<b>Step 1 — Image charge.</b> Replace plane by image charge <i>q</i>′ = −<i>q</i> at distance <i>d</i> behind the plane (i.e. at <i>z</i> = −<i>d</i> if plane is <i>z</i> = 0 and real charge at <i>z</i> = +<i>d</i>).',
          '<b>Step 2 — Force on <i>q</i>.</b> Force is attraction toward the image charge. Separation = 2<i>d</i>.<br><i>F</i> = (1/(4πε<sub>0</sub>))(<i>q</i> · <i>q</i>/(2<i>d</i>)<sup>2</sup>) = <i>q</i><sup>2</sup>/(16πε<sub>0</sub><i>d</i><sup>2</sup>)',
          'Numerically: <i>q</i> = 2 × 10<sup>−6</sup> C, <i>d</i> = 0.10 m, <i>k</i> = 9 × 10<sup>9</sup>.<br><i>F</i> = 9 × 10<sup>9</sup> ((2 × 10<sup>−6</sup>)<sup>2</sup>/(4(0.10)<sup>2</sup>)) = 9 × 10<sup>9</sup> ((4 × 10<sup>−12</sup>)/0.04) = 9 × 10<sup>−1</sup> = 0.9 N<br>Directed toward the plane.',
          '<b>Step 3 — Surface charge density at nearest point (<i>x</i> = <i>y</i> = 0).</b> Formula: <i>σ</i>(<i>ρ</i>) = −<i>qd</i>/(2π(<i>ρ</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup>) where <i>ρ</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). At <i>ρ</i> = 0:<br><i>σ</i>(0) = −<i>qd</i>/(2π<i>d</i><sup>3</sup>) = −<i>q</i>/(2π<i>d</i><sup>2</sup>) = −(2 × 10<sup>−6</sup>)/(2π(0.01)) = −10<sup>−4</sup>/π ≈ −3.18 × 10<sup>−5</sup> C/m<sup>2</sup>',
          '<b>Step 4 — Total induced charge.</b> By Gauss’s law, flux through a hemisphere just above the plane equals <i>q</i>/ε<sub>0</sub> (enclosed charge is <i>q</i>). The field in the region is exactly that of <i>q</i> and −<i>q</i>. The total induced charge on the plane must be −<i>q</i> to make the total charge in the half-space zero (since field lines from <i>q</i> all terminate on the plane). Formally: ∫ <i>σ</i> d<i>A</i> = −<i>q</i>.',
        ],
        ans: '(a) <i>F</i> = 0.9 N toward the plane. (b) <i>σ</i>(0) ≈ −3.18 × 10<sup>−5</sup> C/m<sup>2</sup>. (c) <i>Q</i><sub>induced</sub> = −<i>q</i> = −2.0 μC.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A conducting sphere of radius <i>R</i> carries charge <i>Q</i>. Find the electrostatic pressure on its surface and the total force trying to expand the sphere (integrate pressure over hemisphere).',
            a: 'Pressure <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = <i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>). Force on hemisphere <i>F</i> = π<i>R</i><sup>2</sup><i>P</i> = <i>Q</i><sup>2</sup>/(32πε<sub>0</sub><i>R</i><sup>2</sup>) = <i>kQ</i><sup>2</sup>/(8<i>R</i><sup>2</sup>).',
          },
          {
            q: 'Two conducting spheres of radii <i>R</i> and 2<i>R</i>, far apart, have charges <i>Q</i> and 2<i>Q</i> respectively. They are connected by a wire. Find the final charges and the charge that flows through the wire.',
            a: 'Initial: <i>Q</i><sub>1</sub> = <i>Q</i>, <i>Q</i><sub>2</sub> = 2<i>Q</i>. Total = 3<i>Q</i>. After connection: <i>Q</i>′<sub>1</sub> = 3<i>Q</i>·<i>R</i>/(3<i>R</i>) = <i>Q</i>, <i>Q</i>′<sub>2</sub> = 2<i>Q</i>. No charge flows! (They were already at same potential: <i>V</i><sub>1</sub> = <i>kQ</i>/<i>R</i>, <i>V</i><sub>2</sub> = <i>k</i>(2<i>Q</i>)/(2<i>R</i>) = <i>kQ</i>/<i>R</i>.)',
          },
          {
            q: 'A point charge <i>q</i> is placed at distance <i>d</i> from the centre of a grounded conducting sphere of radius <i>R</i> (<i>d</i> > <i>R</i>). Using the image method (image charge <i>q</i>′ = −<i>qR</i>/<i>d</i> at distance <i>R</i><sup>2</sup>/<i>d</i> from centre), find the force on <i>q</i>.',
            a: 'Image: <i>q</i>′ = −<i>qR</i>/<i>d</i> at <i>a</i> = <i>R</i><sup>2</sup>/<i>d</i> from centre. Distance from <i>q</i> to image: <i>d</i> − <i>a</i> = <i>d</i> − <i>R</i><sup>2</sup>/<i>d</i> = (<i>d</i><sup>2</sup> − <i>R</i><sup>2</sup>)/<i>d</i>. <i>F</i> = <i>kqq</i>′/(<i>d</i> − <i>a</i>)<sup>2</sup> = <i>kq</i>(−<i>qR</i>/<i>d</i>)/((<i>d</i><sup>2</sup> − <i>R</i><sup>2</sup>)/<i>d</i>)<sup>2</sup> = −<i>kq</i><sup>2</sup><i>Rd</i>/(<i>d</i><sup>2</sup> − <i>R</i><sup>2</sup>)<sup>2</sup> (attractive, toward sphere).',
          },
          {
            q: 'A parallel-plate capacitor has plate area <i>A</i>, separation <i>d</i>, charge <i>Q</i>. Find the force of attraction between the plates using (i) pressure on one plate, (ii) energy differentiation <i>F</i> = −d<i>U</i>/d<i>x</i>.',
            a: '(i) Field between plates <i>E</i> = <i>σ</i>/ε<sub>0</sub> = <i>Q</i>/(ε<sub>0</sub><i>A</i>). Pressure on negative plate: <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i><sup>2</sup>). Force <i>F</i> = <i>PA</i> = <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>). (ii) Energy <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = <i>Q</i><sup>2</sup><i>d</i>/(2ε<sub>0</sub><i>A</i>). <i>F</i> = −∂<i>U</i>/∂<i>d</i> = −<i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>) (magnitude <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>), attractive).',
          },
          {
            q: 'A conducting spherical shell has a point charge <i>q</i> at its centre. The shell carries net charge <i>Q</i>. Find the surface charge densities on the inner and outer surfaces.',
            a: 'Inner surface: Gaussian sphere inside conductor encloses <i>q</i>, so <i>Q</i><sub>inner</sub> = −<i>q</i>, <i>σ</i><sub>inner</sub> = −<i>q</i>/(4π<i>R</i><sub>inner</sub><sup>2</sup>). Outer surface: <i>Q</i><sub>outer</sub> = <i>Q</i> + <i>q</i>, <i>σ</i><sub>outer</sub> = (<i>Q</i> + <i>q</i>)/(4π<i>R</i><sub>outer</sub><sup>2</sup>).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Dipoles in Non-Uniform Fields & Dipole–Dipole Interaction',
    extra: true,
    kalam: 'Addendum C extends dipoles to non-uniform fields.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the dipole field (∝ 1/<i>r</i><sup>3</sup>) and the torque <i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i> and energy <i>U</i> = −<i>p⃗</i> · <i>E⃗</i> in a <b>uniform</b> field. JEE Advanced asks for: (i) the <b>net force</b> on a dipole in a non-uniform field, (ii) the interaction energy and force between two dipoles, (iii) the quadrupole field (∝ 1/<i>r</i><sup>4</sup>).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Force on a dipole in a non-uniform field.</b> The dipole consists of +<i>q</i> at <i>r⃗</i> + <i>a⃗</i> and −<i>q</i> at <i>r⃗</i> − <i>a⃗</i> (centre at <i>r⃗</i>, separation 2<i>a⃗</i>). <i>p⃗</i> = 2<i>qa⃗</i>. Net force:<br><i>F⃗</i> = <i>qE⃗</i>(<i>r⃗</i> + <i>a⃗</i>) − <i>qE⃗</i>(<i>r⃗</i> − <i>a⃗</i>) ≈ <i>q</i>[<i>E⃗</i>(<i>r⃗</i>) + (<i>a⃗</i> · ∇)<i>E⃗</i> − <i>E⃗</i>(<i>r⃗</i>) + (<i>a⃗</i> · ∇)<i>E⃗</i>] = 2<i>q</i>(<i>a⃗</i> · ∇)<i>E⃗</i> = (<i>p⃗</i> · ∇)<i>E⃗</i>',
      },
      {
        t: 'p',
        html: 'In components: <i>F</i><sub><i>i</i></sub> = <i>p</i><sub><i>j</i></sub>∂<sub><i>j</i></sub><i>E</i><sub><i>i</i></sub>. For a dipole aligned with the field gradient (<i>p</i> ∥ <i>E</i> along <i>x</i>): <i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Potential energy.</b> <i>U</i> = −<i>p⃗</i> · <i>E⃗</i> still holds <b>locally</b> if the field varies slowly over the dipole. The force is then <i>F⃗</i> = −∇<i>U</i> = ∇(<i>p⃗</i> · <i>E⃗</i>). For constant <i>p⃗</i>, this gives <i>F⃗</i> = (<i>p⃗</i> · ∇)<i>E⃗</i> — consistent.',
      },
      {
        t: 'p',
        html: '<b>Dipole–dipole interaction.</b> Two dipoles <i>p⃗</i><sub>1</sub>, <i>p⃗</i><sub>2</sub> separated by <i>r⃗</i>. The energy of <i>p⃗</i><sub>2</sub> in the field of <i>p⃗</i><sub>1</sub>:<br><i>U</i> = −<i>p⃗</i><sub>2</sub> · <i>E⃗</i><sub>1</sub> = −<i>p⃗</i><sub>2</sub> · [(1/(4πε<sub>0</sub>))((3(<i>p⃗</i><sub>1</sub> · <i>r̂</i>)<i>r̂</i> − <i>p⃗</i><sub>1</sub>)/<i>r</i><sup>3</sup>)] = (1/(4πε<sub>0</sub>))((<i>p⃗</i><sub>1</sub> · <i>p⃗</i><sub>2</sub> − 3(<i>p⃗</i><sub>1</sub> · <i>r̂</i>)(<i>p⃗</i><sub>2</sub> · <i>r̂</i>))/<i>r</i><sup>3</sup>)<br>Force: <i>F⃗</i> = −∇<i>U</i>. Torque on <i>p⃗</i><sub>2</sub>: <i>τ⃗</i><sub>2</sub> = <i>p⃗</i><sub>2</sub> × <i>E⃗</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: '<b>Quadrupole field.</b> A linear quadrupole: +<i>q</i>, −2<i>q</i>, +<i>q</i> equally spaced by <i>a</i>. Dipole moment zero. Field on axis at <i>r</i> ≫ <i>a</i>: <i>E</i> ≈ (1/(4πε<sub>0</sub>))(6<i>qa</i><sup>2</sup>/<i>r</i><sup>4</sup>) (∝ 1/<i>r</i><sup>4</sup>). General quadrupole moment tensor <i>Q</i><sub><i>ij</i></sub> = ∑ <i>q</i><sub><i>k</i></sub>(3<i>x</i><sub><i>i</i></sub><i>x</i><sub><i>j</i></sub> − <i>r</i><sup>2</sup><i>δ</i><sub><i>ij</i></sub>). Field falls as 1/<i>r</i><sup>4</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force on a Dipole in a Point Charge Field',
        q: 'A dipole <i>p⃗</i> = <i>p</i> <i>ẑ</i> is placed on the <i>z</i>-axis at distance <i>z</i> from a point charge <i>Q</i> at the origin. Find the force on the dipole. Assume <i>p</i> is small enough that the dipole approximation holds.',
        steps: [
          '<b>Step 1 — Field of <i>Q</i>.</b> <i>E⃗</i>(<i>z</i>) = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>z</i><sup>2</sup>) <i>ẑ</i> (if <i>Q</i> > 0, field points outward).',
          '<b>Step 2 — Force formula.</b> <i>p⃗</i> ∥ <i>E⃗</i>, so <i>F⃗</i> = <i>p</i> d<i>E</i>/d<i>z</i> <i>ẑ</i>.<br>d<i>E</i>/d<i>z</i> = (<i>Q</i>/(4πε<sub>0</sub>))(−2)<i>z</i><sup>−3</sup> = −2<i>Q</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>)<br><i>F⃗</i> = <i>p</i>(−2<i>Q</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>)) <i>ẑ</i> = −2<i>pQ</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>) <i>ẑ</i>',
          '<b>Step 3 — Direction check.</b> If <i>Q</i> > 0 and <i>p</i> > 0 (dipole points away from <i>Q</i>), the force is <b>negative</b> <i>z</i> — toward <i>Q</i>. The dipole is pulled toward the point charge. If the dipole were anti-aligned (<i>p</i> < 0), it would be repelled.',
          '<b>Alternative via energy.</b> <i>U</i> = −<i>pE</i> = −<i>pQ</i>/(4πε<sub>0</sub><i>z</i><sup>2</sup>). <i>F</i><sub><i>z</i></sub> = −d<i>U</i>/d<i>z</i> = −2<i>pQ</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>). Same.',
        ],
        ans: '<i>F⃗</i> = −2<i>pQ</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>) <i>ẑ</i> (attractive if <i>p</i> and <i>Q</i> have same sign).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Two Dipoles on a Line',
        q: 'Two identical dipoles <i>p⃗</i><sub>1</sub> = <i>p⃗</i><sub>2</sub> = <i>p</i> <i>ẑ</i> are placed on the <i>z</i>-axis separated by distance <i>r</i>. Find (a) the interaction energy, (b) the force between them.',
        steps: [
          '<b>Step 1 — Energy formula.</b> <i>r⃗</i> = <i>r</i> <i>ẑ</i>, <i>r̂</i> = <i>ẑ</i>. <i>p⃗</i><sub>1</sub> · <i>p⃗</i><sub>2</sub> = <i>p</i><sup>2</sup>. <i>p⃗</i><sub>1</sub> · <i>r̂</i> = <i>p</i>, <i>p⃗</i><sub>2</sub> · <i>r̂</i> = <i>p</i>.<br><i>U</i> = (1/(4πε<sub>0</sub>))((<i>p</i><sup>2</sup> − 3<i>pp</i>)/<i>r</i><sup>3</sup>) = −2<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>3</sup>)',
          '<b>Step 2 — Force.</b> <i>F⃗</i> = −∇<i>U</i> = −d<i>U</i>/d<i>r</i> <i>r̂</i>.<br>d<i>U</i>/d<i>r</i> = −(2<i>p</i><sup>2</sup>/(4πε<sub>0</sub>))(−3)<i>r</i><sup>−4</sup> = 6<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>)<br><i>F⃗</i> = −6<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>) <i>ẑ</i>',
          'Negative sign means force is <b>attractive</b> (pulls dipoles together).',
          '<b>Check orientation.</b> Two dipoles aligned head-to-tail attract. Side-by-side (<i>p⃗</i> ⊥ <i>r⃗</i>) repel. Here they are head-to-tail on axis, so attraction is correct.',
        ],
        ans: '(a) <i>U</i> = −2<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>3</sup>). (b) <i>F⃗</i> = −6<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>) <i>ẑ</i> (attractive).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A dipole <i>p⃗</i> = <i>p</i> <i>x̂</i> is placed in a field <i>E⃗</i> = <i>E</i><sub>0</sub>(1 + <i>αx</i>) <i>x̂</i> (<i>α</i> > 0). Find the force on the dipole.',
            a: '<i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i> = <i>pE</i><sub>0</sub><i>α</i>, in +<i>x</i> direction.',
          },
          {
            q: 'Two dipoles <i>p⃗</i><sub>1</sub> = <i>p</i> <i>ẑ</i>, <i>p⃗</i><sub>2</sub> = <i>p</i> <i>x̂</i> are placed at (0, 0, 0) and (<i>r</i>, 0, 0) respectively. Find the torque on <i>p⃗</i><sub>2</sub>.',
            a: 'Field of <i>p⃗</i><sub>1</sub> at <i>p⃗</i><sub>2</sub> location (<i>r⃗</i> = <i>rx̂</i>): <i>E⃗</i><sub>1</sub> = (<i>k</i>/<i>r</i><sup>3</sup>)(3(<i>pẑ</i> · <i>x̂</i>)<i>x̂</i> − <i>pẑ</i>) = −(<i>kp</i>/<i>r</i><sup>3</sup>)<i>ẑ</i>. Torque <i>τ⃗</i><sub>2</sub> = <i>p⃗</i><sub>2</sub> × <i>E⃗</i><sub>1</sub> = (<i>px̂</i>) × (−<i>kp</i>/<i>r</i><sup>3</sup> <i>ẑ</i>) = (<i>kp</i><sup>2</sup>/<i>r</i><sup>3</sup>)<i>ŷ</i>.',
          },
          {
            q: 'A linear quadrupole consists of charges +<i>q</i> at <i>z</i> = +<i>a</i>, −2<i>q</i> at <i>z</i> = 0, +<i>q</i> at <i>z</i> = −<i>a</i>. Derive the electric field on the <i>z</i>-axis at <i>z</i> ≫ <i>a</i>.',
            a: '<i>E</i>(<i>z</i>) = <i>kq</i>[1/(<i>z</i> − <i>a</i>)<sup>2</sup> − 2/<i>z</i><sup>2</sup> + 1/(<i>z</i> + <i>a</i>)<sup>2</sup>]. Expand for <i>z</i> ≫ <i>a</i>: 1/(<i>z</i> ∓ <i>a</i>)<sup>2</sup> ≈ (1/<i>z</i><sup>2</sup>)(1 ± 2<i>a</i>/<i>z</i> + 3<i>a</i><sup>2</sup>/<i>z</i><sup>2</sup>). Sum: 1/<i>z</i><sup>2</sup>[1 + 2<i>a</i>/<i>z</i> + 3<i>a</i><sup>2</sup>/<i>z</i><sup>2</sup> − 2 + 1 − 2<i>a</i>/<i>z</i> + 3<i>a</i><sup>2</sup>/<i>z</i><sup>2</sup>] = 6<i>a</i><sup>2</sup>/<i>z</i><sup>4</sup>. <i>E</i> = 6<i>kqa</i><sup>2</sup>/<i>z</i><sup>4</sup>.',
          },
          {
            q: 'A dipole <i>p⃗</i> is placed at the centre of a uniformly charged ring (radius <i>R</i>, charge <i>Q</i>). The dipole is aligned with the ring axis. Find the force on the dipole.',
            a: 'Ring field on axis: <i>E</i>(<i>z</i>) = <i>kQz</i>/(<i>z</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>. At centre <i>z</i> = 0, <i>E</i> = 0, but d<i>E</i>/d<i>z</i> ≠ 0. d<i>E</i>/d<i>z</i>|<sub><i>z</i>=0</sub> = <i>kQ</i>/<i>R</i><sup>3</sup>. <i>F</i> = <i>p</i> d<i>E</i>/d<i>z</i> = <i>kpQ</i>/<i>R</i><sup>3</sup> along axis. Direction: if <i>p</i> points along +<i>z</i> and <i>Q</i> > 0, <i>F</i> is +<i>z</i> (along <i>p⃗</i>).',
          },
          {
            q: 'Two dipoles <i>p⃗</i><sub>1</sub> = <i>p⃗</i><sub>2</sub> = <i>p</i> <i>ẑ</i> are placed side by side on the <i>x</i>-axis, separated by <i>r</i>. Find the interaction energy and force.',
            a: '<i>r⃗</i> = <i>rx̂</i>, <i>r̂</i> = <i>x̂</i>. <i>p⃗</i><sub>1</sub> · <i>p⃗</i><sub>2</sub> = <i>p</i><sup>2</sup>, <i>p⃗</i><sub>1</sub> · <i>r̂</i> = 0, <i>p⃗</i><sub>2</sub> · <i>r̂</i> = 0. <i>U</i> = (1/(4πε<sub>0</sub>))(<i>p</i><sup>2</sup>/<i>r</i><sup>3</sup>). <i>F</i> = −d<i>U</i>/d<i>r</i> = 3<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>) <b>repulsive</b> (push apart).',
          },
        ],
      },
    ],
  },
];
