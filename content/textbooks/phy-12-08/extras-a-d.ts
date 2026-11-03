import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional Topics A to D, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 542, set at
 * the head of Addendum A), then A Radiation Pressure on Moving and Rotating
 * Bodies (pp. 542 to 545; its practice answers sit at the top of p. 545),
 * B Poynting Vector and Energy Flow in Circuits (pp. 545 to 549; its answers
 * end at the top of p. 549), C Polarization: Malus’s Law and Brewster’s Angle
 * (pp. 549 to 552; its answers end at the top of p. 552) and D Standing
 * Electromagnetic Waves and Resonant Cavities (pp. 552 to 554). Each addendum
 * prints its own practice problems and answers, which are its Practice part.
 * These pages print no drawings: every equation is typeset. In D, the
 * bracketed paragraph after "Standing wave formation" is the clarification
 * from the book's Errata (Chapter 8, "Remaining known issues"), added as the
 * brief instructs; it is not in the printed text.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 542–545 ─────────────────────────
  {
    n: 'A',
    title: 'Radiation Pressure on Moving and Rotating Bodies',
    extra: true,
    kalam: 'A photon of energy U carries momentum p = U/c.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This addendum covers four JEE-critical patterns the chapter does not develop: radiation pressure on moving bodies (Addendum A), the Poynting-vector picture of energy flow in circuits (Addendum B), quantitative polarization including Malus’s law and Brewster’s angle (Addendum C), and standing EM waves in resonant cavities (Addendum D). Each section derives the method cleanly, works two to four tiered examples, and closes with five practice problems and full solutions.',
      },
      {
        t: 'p',
        html: 'Topic 03 gives the radiation pressure formulas for a stationary surface: <i>P</i><sub>rad</sub> = <i>I</i>/<i>c</i> for a perfect absorber and 2<i>I</i>/<i>c</i> for a perfect reflector. JEE Advanced extends this to bodies that are already moving, rotating, or being illuminated at changing angles — and to problems where the changing force itself causes acceleration. The method is a direct application of momentum conservation for photons, but the algebra must track the intensity at the body’s location, its area, and whether the surface absorbs or reflects.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Momentum-per-photon picture.</b> A photon of energy <i>U</i> carries momentum <i>p</i> = <i>U</i>/<i>c</i>. When it is absorbed by a surface, the surface gains momentum <i>U</i>/<i>c</i>. When it is reflected, the photon’s momentum reverses, so the surface gains momentum 2<i>U</i>/<i>c</i>.',
      },
      {
        t: 'p',
        html: '<b>General radiation pressure on a surface at angle <i>θ</i> to the beam.</b> If the beam arrives at incidence angle <i>θ</i> (measured from the normal), the projected area is <i>A</i> cos <i>θ</i> and only the normal component of momentum transfer matters. For a surface with reflectance <i>R</i>:<br>Radiation pressure = (<i>I</i>/<i>c</i>) cos<sup>2</sup><i>θ</i> (1 + <i>R</i>).<br>For normal incidence (<i>θ</i> = 0): <i>P</i><sub>rad</sub> = (<i>I</i>/<i>c</i>)(1 + <i>R</i>), recovering <i>I</i>/<i>c</i> (absorber, <i>R</i> = 0) and 2<i>I</i>/<i>c</i> (perfect reflector, <i>R</i> = 1).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>I</i> is W m<sup>−2</sup> = J s<sup>−1</sup> m<sup>−2</sup>. <i>I</i>/<i>c</i> is J s<sup>−1</sup> m<sup>−2</sup> / (m s<sup>−1</sup>) = J m<sup>−3</sup> = N m<sup>−2</sup> = Pa. Correct.',
      },
      {
        t: 'p',
        html: '<b>Force on a moving body.</b> If the body moves and the distance from the source changes, the intensity at its location is <i>I</i>(<i>r</i>) = <i>P</i><sub>source</sub>/(4π<i>r</i><sup>2</sup>) for an isotropic point source. The force <i>F</i> = <i>P</i><sub>rad</sub> <i>A</i><sub>eff</sub> changes with <i>r</i>, so acceleration is not constant — use differential equations or energy arguments.',
      },
      {
        t: 'p',
        html: '<b>Torque on a rotating mirror.</b> A mirror of area <i>A</i> whose normal makes an angle <i>φ</i> with the beam experiences a normal force <i>F</i> = 2<i>IA</i> cos<sup>2</sup><i>φ</i>/<i>c</i> (perfect reflection), giving torque <i>τ</i> = <i>Fr</i> about a rotation axis in the mirror’s plane, where <i>r</i> is the distance from that axis to the line of action of <i>F</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Solar Sail Acceleration',
        q: 'A perfectly reflecting solar sail of area <i>A</i> = 2000 m<sup>2</sup> and total mass <i>m</i> = 50 kg is deployed at a distance <i>r</i> = 1.5 × 10<sup>11</sup> m from the Sun (solar intensity <i>I</i><sub>0</sub> = 1360 W m<sup>−2</sup> at Earth orbit). Find the initial acceleration of the sail.',
        steps: [
          '<b>Step 1 — Intensity at sail.</b> Treating the Sun as an isotropic point source with power <i>P</i><sub>Sun</sub> = 4π<i>R</i><sub>SE</sub><sup>2</sup><i>I</i><sub>0</sub>, the intensity at the sail is the same <i>I</i><sub>0</sub> (at Earth’s orbit by definition). So <i>I</i> = 1360 W m<sup>−2</sup>.',
          '<b>Step 2 — Radiation force.</b> Perfect reflection: <i>F</i> = 2<i>IA</i>/<i>c</i>.<br><i>F</i> = 2(1360)(2000)/(3 × 10<sup>8</sup>) = (5.44 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 1.81 × 10<sup>−2</sup> N.',
          '<b>Step 3 — Acceleration.</b><br><i>a</i> = <i>F</i>/<i>m</i> = (1.81 × 10<sup>−2</sup>)/50 = 3.6 × 10<sup>−4</sup> m s<sup>−2</sup>.',
          '<b>Check.</b> Tiny but sustained — over one year at constant force (an overestimate, since the sail moves outward), the sail gains <i>v</i> = <i>at</i> = 3.6 × 10<sup>−4</sup> × 3.15 × 10<sup>7</sup> ≈ 1.1 × 10<sup>4</sup> m s<sup>−1</sup>. Actual mission designs use this principle. Direction is outward from the Sun.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Radiation Torque on a Rotating Disc',
        q: 'A disc of radius <i>R</i> = 5.0 cm and mass <i>m</i> = 0.10 kg is pivoted so that it can rotate freely about a fixed axis along one of its diameters (moment of inertia <i>I</i><sub>disc</sub> = ¼<i>mR</i><sup>2</sup>). A laser beam of power <i>P</i> = 1.0 W and spot diameter <i>d</i> = 1.0 mm strikes the disc normally at a distance <i>r</i> = 3.0 cm from that axis. The disc absorbs 80% of the light and reflects 20%. Find the initial angular acceleration.',
        steps: [
          '<b>Step 1 — Intensity at the disc.</b> Spot area: <i>A</i><sub>spot</sub> = π(<i>d</i>/2)<sup>2</sup> = π(5 × 10<sup>−4</sup>)<sup>2</sup> = 7.85 × 10<sup>−7</sup> m<sup>2</sup>.<br><i>I</i> = <i>P</i>/<i>A</i><sub>spot</sub> = 1.0/(7.85 × 10<sup>−7</sup>) = 1.27 × 10<sup>6</sup> W m<sup>−2</sup>.',
          '<b>Step 2 — Radiation pressure and force.</b> Absorbed fraction: 0.80. Reflected fraction (reflectance): 0.20. Normal pressure: <i>P</i><sub>rad</sub> = (<i>I</i>/<i>c</i>)(1 + 0.20) = 1.20<i>I</i>/<i>c</i>.<br><i>P</i><sub>rad</sub> = (1.20 × 1.27 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 5.08 × 10<sup>−3</sup> Pa.',
          'Force on the spot (normal to surface, normal incidence):<br><i>F</i> = <i>P</i><sub>rad</sub> <i>A</i><sub>spot</sub> = (5.08 × 10<sup>−3</sup>)(7.85 × 10<sup>−7</sup>) = 3.99 × 10<sup>−9</sup> N.',
          '<b>Step 3 — Torque and angular acceleration.</b><br><i>τ</i> = <i>F r</i> = (3.99 × 10<sup>−9</sup>)(0.030) = 1.20 × 10<sup>−10</sup> N m.<br><i>I</i><sub>disc</sub> = ¼(0.10)(0.05)<sup>2</sup> = 6.25 × 10<sup>−5</sup> kg m<sup>2</sup>.<br><i>α</i> = <i>τ</i>/<i>I</i><sub>disc</sub> = (1.20 × 10<sup>−10</sup>)/(6.25 × 10<sup>−5</sup>) = 1.9 × 10<sup>−6</sup> rad s<sup>−2</sup>.',
          '<b>Check.</b> The laser photons carry momentum <i>p</i> = <i>U</i>/<i>c</i>. The absorbed portion delivers <i>p</i><sub>abs</sub> = (0.80<i>U</i>)/<i>c</i>; the reflected portion delivers <i>p</i><sub>ref</sub> = 2(0.20<i>U</i>)/<i>c</i> = 0.40<i>U</i>/<i>c</i>. Total momentum per photon energy: (0.80 + 0.40)<i>U</i>/<i>c</i> = 1.20<i>U</i>/<i>c</i>, consistent with the (1 + <i>R</i>) factor. The torque is tiny but measurable with sensitive instruments — this is the principle behind optical manipulation (optical tweezers) of microscopic particles.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Spacecraft Powered by Laser Beam',
        q: 'A spacecraft of mass <i>m</i> = 500 kg is propelled by a ground-based laser of power <i>P</i> = 10 kW directed at a perfectly reflecting sail that intercepts the whole beam (initially <i>L</i> = 10 km away). The sail area is <i>A</i> = 100 m<sup>2</sup>. (a) Find the thrust. (b) If the spacecraft starts from rest, how long does it take to reach a speed of 1.0 km s<sup>−1</sup>?',
        steps: [
          '(a) At distance <i>L</i>, beam intensity (assuming uniform illumination over area <i>A</i>) is approximately:<br><i>I</i> = <i>P</i>/<i>A</i> = (10 × 10<sup>3</sup>)/100 = 100 W m<sup>−2</sup>.',
          'Thrust for perfect reflection: <i>F</i> = 2<i>IA</i>/<i>c</i>.<br><i>F</i> = 2(100)(100)/(3 × 10<sup>8</sup>) = (2 × 10<sup>4</sup>)/(3 × 10<sup>8</sup>) = 6.7 × 10<sup>−5</sup> N.',
          '(b) Assuming constant force (the whole beam keeps landing on the sail, so the thrust 2<i>IA</i>/<i>c</i> = 2<i>P</i>/<i>c</i> does not depend on distance):<br><i>a</i> = <i>F</i>/<i>m</i> = (6.7 × 10<sup>−5</sup>)/500 = 1.34 × 10<sup>−7</sup> m s<sup>−2</sup>.',
          'Time to reach <i>v</i> = 1000 m s<sup>−1</sup>:<br><i>t</i> = <i>v</i>/<i>a</i> = 1000/(1.34 × 10<sup>−7</sup>) ≈ 7.5 × 10<sup>9</sup> s ≈ 240 years.',
          'This illustrates that laser propulsion requires either much higher power, larger sails, or sustained acceleration over very long times — but it requires no fuel, which is its fundamental advantage.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A perfectly absorbing surface of area 2 m<sup>2</sup> faces a laser beam of intensity 500 W m<sup>−2</sup>. Find the radiation force on the surface.',
            a: '<i>F</i> = <i>IA</i>/<i>c</i> = (500)(2)/(3 × 10<sup>8</sup>) = 3.3 × 10<sup>−6</sup> N.',
          },
          {
            q: '[JEE Main] The intensity of sunlight at Earth’s orbit is 1360 W m<sup>−2</sup>. Find the force on a perfectly reflecting solar sail of area 500 m<sup>2</sup> in Earth orbit.',
            a: '<i>F</i> = 2<i>IA</i>/<i>c</i> = 2(1360)(500)/(3 × 10<sup>8</sup>) = 4.5 × 10<sup>−3</sup> N.',
          },
          {
            q: '[JEE Main] A mirror reflects a beam of light normally. If the light intensity is <i>I</i> and the mirror area is <i>A</i>, show that the force on the mirror is <i>F</i> = 2<i>IA</i>/<i>c</i>.',
            a: 'Each photon of energy <i>U</i> delivers momentum <i>U</i>/<i>c</i> when absorbed and 2<i>U</i>/<i>c</i> when reflected. For <i>N</i> photons per second, power = <i>NU</i>, force = 2<i>NU</i>/<i>c</i> = 2<i>IA</i>/<i>c</i>.',
          },
          {
            q: '[JEE Advanced] A perfectly reflecting sail of area <i>A</i> = 100 m<sup>2</sup> and mass <i>m</i> = 20 kg is pushed by sunlight of intensity <i>I</i> = 1360 W m<sup>−2</sup>, facing the Sun head-on. After starting from rest, how far does it travel in 1 hour? (Neglect gravity.)',
            a: '<i>a</i> = 2<i>IA</i>/(<i>mc</i>) = 2(1360)(100)/(20 × 3 × 10<sup>8</sup>) = 4.53 × 10<sup>−5</sup> m s<sup>−2</sup>. In 1 hour: <i>s</i> = (1/2)<i>at</i><sup>2</sup> = (1/2)(4.53 × 10<sup>−5</sup>)(3600)<sup>2</sup> ≈ 2.9 × 10<sup>2</sup> m ≈ 290 m.',
          },
          {
            q: '[JEE Advanced] Two laser beams of power <i>P</i><sub>1</sub> = 5 W and <i>P</i><sub>2</sub> = 3 W strike a small perfectly absorbing sphere from opposite directions (each beam falls entirely on the sphere; beam 1 travels rightward). The sphere cross-section area is <i>A</i> = 1 cm<sup>2</sup>. Find the net force on the sphere.',
            a: '<i>F</i><sub>1</sub> = <i>P</i><sub>1</sub>/<i>c</i> = 5/(3 × 10<sup>8</sup>) = 1.67 × 10<sup>−8</sup> N (rightward). <i>F</i><sub>2</sub> = <i>P</i><sub>2</sub>/<i>c</i> = 3/(3 × 10<sup>8</sup>) = 1.0 × 10<sup>−8</sup> N (leftward). Net force = 6.7 × 10<sup>−9</sup> N rightward (the area <i>A</i> = 1 cm<sup>2</sup> is not needed).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 545–549 ─────────────────────────
  {
    n: 'B',
    title: 'Poynting Vector and Energy Flow in Circuits',
    extra: true,
    kalam: 'The energy dissipated in the wire arrives through the surrounding fields.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 defines the Poynting vector <i>S⃗</i> = (1/μ<sub>0</sub>)<i>E⃗</i> × <i>B⃗</i> as the energy flux of an EM wave and uses it to find intensity <i>I</i> = ⟨<i>S</i>⟩. What JEE Advanced adds — and the chapter never shows — is the circuit interpretation: energy flows into a resistor from the surrounding space, not through the wire. The wire’s fields guide the energy in along the Poynting vector, and the Joule-heating picture of the current is a consequence, not the cause.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Poynting vector near a current-carrying wire.</b> For a straight cylindrical wire carrying current <i>I</i> at steady state: the electric field <i>E</i> is along the wire (causing the current); the magnetic field <i>B</i> is azimuthal around the wire, <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) at distance <i>r</i>; and <i>S⃗</i> = (1/μ<sub>0</sub>) <i>E⃗</i> × <i>B⃗</i> points radially inward toward the wire.',
      },
      {
        t: 'p',
        html: 'The power entering a length <i>l</i> of wire is:<br><i>P</i> = ∫ <i>S⃗</i> · d<i>A⃗</i> = <i>S</i> · (2π<i>rl</i>) = (<i>EB</i>/μ<sub>0</sub>)(2π<i>rl</i>).<br>Substituting <i>E</i> = <i>ρJ</i> = <i>ρI</i>/<i>A</i><sub>w</sub> = <i>ρI</i>/(π<i>r</i><sup>2</sup>) and <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>):<br><i>P</i> = (<i>ρI</i>/(π<i>r</i><sup>2</sup>)) · (μ<sub>0</sub><i>I</i>/(2π<i>r</i>)) · (1/μ<sub>0</sub>) · 2π<i>rl</i> = <i>ρI</i><sup>2</sup><i>l</i>/(π<i>r</i><sup>2</sup>) = <i>I</i><sup>2</sup><i>R</i>,<br>where <i>R</i> = <i>ρl</i>/<i>A</i><sub>w</sub> is the wire’s resistance. The energy entering the wire from the fields becomes Joule heat.',
      },
      {
        t: 'p',
        html: '<b>For a charging capacitor.</b> Energy flows into the capacitor gap via the Poynting vector between the plates, not through the wires. The fields between the plates carry the energy.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>S</i> = <i>EB</i>/μ<sub>0</sub>: [<i>E</i>] = V m<sup>−1</sup>, [<i>B</i>] = T = N A<sup>−1</sup> m<sup>−1</sup>, [μ<sub>0</sub>] = N A<sup>−2</sup>. So [<i>EB</i>/μ<sub>0</sub>] = (V m<sup>−1</sup>)(N A<sup>−1</sup> m<sup>−1</sup>)/N A<sup>−2</sup> = V A m<sup>−2</sup> = W m<sup>−2</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Energy Flow into a Resistor',
        q: 'A wire of radius <i>r</i> = 1.0 mm, resistivity <i>ρ</i> = 1.7 × 10<sup>−8</sup> Ωm, and length <i>l</i> = 1.0 m carries a current <i>I</i> = 5.0 A. (a) Find the electric field inside the wire. (b) Find the magnetic field at its surface. (c) Find the magnitude and direction of the Poynting vector at the wire surface. (d) Verify that the power entering the wire equals <i>I</i><sup>2</sup><i>R</i>.',
        steps: [
          '(a) Current density: <i>J</i> = <i>I</i>/<i>A</i> = <i>I</i>/(π<i>r</i><sup>2</sup>) = 5/(π × 10<sup>−6</sup>) = 1.59 × 10<sup>6</sup> A m<sup>−2</sup>.<br><i>E</i> = <i>ρJ</i> = (1.7 × 10<sup>−8</sup>)(1.59 × 10<sup>6</sup>) = 2.7 × 10<sup>−2</sup> V m<sup>−1</sup>.',
          '(b) At the wire surface (<i>r</i> = 10<sup>−3</sup> m):<br><i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) = (4π × 10<sup>−7</sup> × 5)/(2π × 10<sup>−3</sup>) = 1.0 × 10<sup>−3</sup> T.',
          '(c) <i>E⃗</i> is axial (along the wire), <i>B⃗</i> is azimuthal. <i>S⃗</i> = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub> is radial inward (toward the axis).<br>|<i>S</i>| = <i>EB</i>/μ<sub>0</sub> = (2.7 × 10<sup>−2</sup>)(1.0 × 10<sup>−3</sup>)/(4π × 10<sup>−7</sup>) = 21.5 W m<sup>−2</sup>.<br>Direction: radially inward.',
          '(d) Wire resistance: <i>R</i> = <i>ρl</i>/<i>A</i> = (1.7 × 10<sup>−8</sup>)(1)/(π × 10<sup>−6</sup>) = 5.4 × 10<sup>−3</sup> Ω. Power dissipated: <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = 25 × 5.4 × 10<sup>−3</sup> = 0.135 W.',
          'Poynting flux entering: surface area = 2π<i>rl</i> = 2π × 10<sup>−3</sup> × 1 = 6.28 × 10<sup>−3</sup> m<sup>2</sup>.<br><i>P</i> = <i>S</i> × <i>A</i> = (21.5)(6.28 × 10<sup>−3</sup>) = 0.135 W.',
          'This equals the Joule power <i>I</i><sup>2</sup><i>R</i> = 25 × 5.4 × 10<sup>−3</sup> = 0.135 W, as required. Equivalently, the power per unit length flowing in radially is <i>S</i> · (2π<i>r</i>) = (<i>EB</i>/μ<sub>0</sub>)(2π<i>r</i>) = <i>EI</i> (since <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>)), that is (2.7 × 10<sup>−2</sup>)(5) = 0.135 W per metre, so for <i>l</i> = 1 m the total power entering is 0.135 W = <i>I</i><sup>2</sup><i>R</i>. The energy dissipated in the wire arrives through the surrounding fields.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Energy Flow into a Charging Capacitor',
        q: 'A parallel-plate capacitor with plate area <i>A</i> = 100 cm<sup>2</sup>, plate separation <i>d</i> = 2.0 mm, and voltage <i>V</i> = 220 V is being charged by a current <i>I</i> = 0.50 A. Find the magnitude and direction of the Poynting vector in the region between the plates near the edge, and verify that the energy increase rate of the capacitor equals the Poynting flux into the gap.',
        steps: [
          '<b>Step 1 — Fields at the plate edge (<i>r</i> = <i>R</i>).</b> Capacitance: <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(100 × 10<sup>−4</sup>)/(2 × 10<sup>−3</sup>) = 4.43 × 10<sup>−11</sup> F. Charge: <i>q</i> = <i>CV</i> = (4.43 × 10<sup>−11</sup>)(220) = 9.74 × 10<sup>−9</sup> C. Electric field: <i>E</i> = <i>V</i>/<i>d</i> = 220/(2 × 10<sup>−3</sup>) = 1.10 × 10<sup>5</sup> V m<sup>−1</sup> (equivalently <i>σ</i>/ε<sub>0</sub>, with <i>σ</i> = <i>q</i>/<i>A</i> = 9.74 × 10<sup>−7</sup> C m<sup>−2</sup> — the two routes agree, as they must).',
          'Displacement current equals the conduction current, <i>I</i><sub>d</sub> = <i>I</i> = 0.50 A, so the circulating magnetic field between the plates is the same as it would be around a straight wire carrying <i>I</i>, evaluated at the plate’s edge <i>r</i> = <i>R</i>:<br><i>B</i>(<i>R</i>) = μ<sub>0</sub><i>I</i>/(2π<i>R</i>).',
          'Treating the plates as circular (radius <i>R</i> = √(<i>A</i>/π) = √(10<sup>−2</sup>/π) = 0.0564 m, so that the given area matches):<br><i>B</i>(<i>R</i>) = (4π × 10<sup>−7</sup>)(0.50)/(2π(0.0564)) = (1 × 10<sup>−7</sup>)/0.0564 = 1.77 × 10<sup>−6</sup> T.',
          '<b>Step 2 — Poynting vector at the edge.</b> <i>S⃗</i> = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub>: <i>E⃗</i> is perpendicular to the plates, <i>B⃗</i> circulates around the axis, so <i>S⃗</i> points radially inward — energy flows into the gap from the surrounding space, not along the wires.<br>|<i>S</i>| = <i>E B</i>(<i>R</i>)/μ<sub>0</sub> = (1.10 × 10<sup>5</sup>)(1.77 × 10<sup>−6</sup>)/(4π × 10<sup>−7</sup>) = (1.95 × 10<sup>−1</sup>)/(1.257 × 10<sup>−6</sup>) = 1.55 × 10<sup>5</sup> W m<sup>−2</sup>.',
          '<b>Step 3 — Verify power into capacitor.</b> Energy in capacitor: <i>U</i> = ½<i>CV</i><sup>2</sup> = ½(4.43 × 10<sup>−11</sup>)(220)<sup>2</sup> = 1.07 × 10<sup>−6</sup> J. Rate of energy increase: d<i>U</i>/d<i>t</i> = ½<i>C</i>(2<i>V</i> d<i>V</i>/d<i>t</i>) = <i>VC</i> d<i>V</i>/d<i>t</i> = <i>VI</i> (using <i>I</i> = <i>C</i> d<i>V</i>/d<i>t</i> for a charging capacitor) = (220)(0.50) = 110 W.',
          'Poynting flux into the gap = <i>S</i> × <i>A</i><sub>edge</sub>, where <i>A</i><sub>edge</sub> = 2π<i>R d</i> is the cylindrical strip around the rim through which the energy enters:<br><i>A</i><sub>edge</sub> = 2π(0.0564)(2 × 10<sup>−3</sup>) = 7.08 × 10<sup>−4</sup> m<sup>2</sup>,<br><i>P</i><sub>flux</sub> = <i>S</i> × <i>A</i><sub>edge</sub> = (1.55 × 10<sup>5</sup>)(7.08 × 10<sup>−4</sup>) = 110 W.',
          'This matches d<i>U</i>/d<i>t</i> = 110 W <b>exactly</b>, not approximately — and the match is not a coincidence: writing <i>E</i> = <i>V</i>/<i>d</i> and <i>B</i>(<i>R</i>) = μ<sub>0</sub><i>I</i>/(2π<i>R</i>) symbolically,<br><i>P</i><sub>flux</sub> = (<i>E B</i>(<i>R</i>)/μ<sub>0</sub>) × 2π<i>Rd</i> = (<i>V</i>/<i>d</i>) · (<i>I</i>/(2π<i>R</i>)) · 2π<i>Rd</i> = <i>VI</i>,<br>independent of the plate radius <i>R</i> or gap <i>d</i>. The energy delivered to a charging capacitor genuinely flows in through the surrounding field, not along the wires — the Poynting vector picture and the circuit picture (<i>P</i> = <i>VI</i>) are the same physics seen two ways.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Energy Flow into an Inductor',
        q: 'A solenoid of length <i>l</i> = 20 cm, radius <i>R</i> = 2.0 cm, with <i>n</i> = 1000 turns/m carries current <i>I</i> = 2.0 A increasing at d<i>I</i>/d<i>t</i> = 100 A s<sup>−1</sup>. Find the Poynting vector at the solenoid surface and verify it equals the rate of energy increase in the magnetic field.',
        steps: [
          '<b>Step 1 — Fields inside the solenoid.</b> Magnetic field (ideal solenoid): <i>B</i> = μ<sub>0</sub><i>nI</i> = (4π × 10<sup>−7</sup>)(1000)(2) = 2.51 × 10<sup>−3</sup> T. This field is along the solenoid axis.',
          'Electric field induced by changing <i>B</i> (Faraday’s law): the changing flux induces a circulating <i>E⃗</i> field. For a solenoid, <i>E</i><sub>induced</sub>(<i>r</i>) = −½(μ<sub>0</sub><i>n</i> d<i>I</i>/d<i>t</i>) <i>r</i> for <i>r</i> < <i>R</i>. At the surface (<i>r</i> = <i>R</i> = 0.02 m):<br><i>E</i> = (1/2)(μ<sub>0</sub><i>n</i> d<i>I</i>/d<i>t</i>)<i>R</i> = (1/2)(4π × 10<sup>−7</sup> × 10<sup>3</sup> × 100)(0.02) = (1/2)(4π × 10<sup>−2</sup>)(0.02) = 1.26 × 10<sup>−3</sup> V m<sup>−1</sup>.',
          'The induced <i>E⃗</i> is azimuthal (circulating). The magnetic field is axial. <i>S⃗</i> = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub> points radially inward — energy flows into the solenoid from the surrounding space.',
          '<b>Step 2 — Poynting vector magnitude.</b><br>|<i>S</i>| = <i>EB</i>/μ<sub>0</sub> = (1.26 × 10<sup>−3</sup>)(2.51 × 10<sup>−3</sup>)/(4π × 10<sup>−7</sup>) = (3.16 × 10<sup>−6</sup>)/(1.26 × 10<sup>−6</sup>) = 2.5 W m<sup>−2</sup>.',
          '<b>Step 3 — Power entering the solenoid.</b> Surface area of solenoid: <i>A</i><sub>surf</sub> = 2π<i>Rl</i> = 2π(0.02)(0.20) = 2.51 × 10<sup>−2</sup> m<sup>2</sup>.<br><i>P</i> = <i>S</i> × <i>A</i> = 2.5 × 2.51 × 10<sup>−2</sup> = 6.3 × 10<sup>−2</sup> W.',
          '<b>Step 4 — Energy increase rate in the solenoid.</b> Magnetic energy in solenoid: <i>U</i><sub>B</sub> = ½<i>LI</i><sup>2</sup>. Inductance per unit length: ℒ = μ<sub>0</sub><i>n</i><sup>2</sup><i>A</i> = (4π × 10<sup>−7</sup>)(10<sup>6</sup>)(π × 4 × 10<sup>−4</sup>) = 1.58 × 10<sup>−3</sup> H m<sup>−1</sup>. Total inductance: <i>L</i> = ℒ<i>l</i> = (1.58 × 10<sup>−3</sup>)(0.20) = 3.16 × 10<sup>−4</sup> H. Rate of energy increase: d<i>U</i>/d<i>t</i> = (1/2)<i>L</i>(2<i>I</i> d<i>I</i>/d<i>t</i>) = <i>LI</i> d<i>I</i>/d<i>t</i> = (3.16 × 10<sup>−4</sup>)(2)(100) = 6.3 × 10<sup>−2</sup> W. This equals the side-surface Poynting flux of 0.063 W found in Step 3, as required: the energy enters the solenoid from the surrounding fields, not through the wire.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the direction of the Poynting vector for (i) a DC current in a wire, (ii) a charging capacitor.',
            a: '(i) Radially inward toward the wire axis. (ii) Radially inward toward the gap between plates.',
          },
          {
            q: '[JEE Main] A wire carries current <i>I</i> = 10 A. Show that the Poynting vector at the wire surface points radially inward and has magnitude <i>S</i> = <i>ρI</i><sup>2</sup>/(2π<sup>2</sup><i>r</i><sup>3</sup>).',
            a: '<i>E</i> = <i>ρI</i>/(π<i>r</i><sup>2</sup>) (along wire), <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) (azimuthal). <i>S⃗</i> = <i>E⃗</i> × <i>B⃗</i>/μ<sub>0</sub> points radially inward with magnitude <i>S</i> = (<i>ρI</i>/(π<i>r</i><sup>2</sup>))(μ<sub>0</sub><i>I</i>/(2π<i>r</i>))/μ<sub>0</sub> = <i>ρI</i><sup>2</sup>/(2π<sup>2</sup><i>r</i><sup>3</sup>).',
          },
          {
            q: '[JEE Main] A 100 W bulb operates at 220 V. Estimate the magnitude of the Poynting vector near the filament, and comment on why the filament glows. (Take the filament as a black body at about 2800 K.)',
            a: 'Filament temperature ≈ 2800 K, emissivity ≈ 1. Stefan–Boltzmann: flux emitted = <i>σT</i><sup>4</sup> ≈ 5.67 × 10<sup>−8</sup> × (2.8 × 10<sup>3</sup>)<sup>4</sup> ≈ 3.5 × 10<sup>6</sup> W m<sup>−2</sup>. The Poynting vector delivers this power from the fields around the filament to sustain the temperature against radiative losses.',
          },
          {
            q: '[JEE Advanced] A parallel-plate capacitor is being charged. Show that the Poynting flux into the capacitor gap equals <i>VI</i>, the power supplied by the battery.',
            a: 'For a parallel-plate capacitor with uniform fields: <i>E</i> = <i>V</i>/<i>d</i>, <i>B</i> = μ<sub>0</sub><i>Ir</i>/(2π<i>R</i><sup>2</sup>) (circulating, <i>r</i> ≤ <i>R</i>). At the rim <i>r</i> = <i>R</i>: <i>E</i> = <i>V</i>/<i>d</i>, <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>R</i>), so <i>S</i> = <i>EB</i>/μ<sub>0</sub> = <i>VI</i>/(2π<i>Rd</i>), directed inward. The power through the cylindrical surface of area 2π<i>Rd</i> is <i>P</i> = <i>S</i>(2π<i>Rd</i>) = <i>VI</i>.',
          },
          {
            q: '[JEE Advanced] An inductor stores magnetic energy. Using the Poynting vector, explain physically why energy flows into the inductor when the current increases.',
            a: 'When current increases, a back-emf is induced (Faraday’s law), producing a circulating electric field. This <i>E</i> and the axial <i>B</i> give a radial Poynting vector pointing inward, carrying energy from the surrounding fields into the inductor core. The energy stored in the magnetic field grows as (1/2)<i>LI</i><sup>2</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 549–552 ─────────────────────────
  {
    n: 'C',
    title: 'Polarization: Malus’s Law and Brewster’s Angle',
    extra: true,
    kalam: 'Unpolarized light has random electric field directions.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 states that EM waves are transverse and can therefore be polarized, but gives no quantitative treatment. JEE Main and Advanced routinely ask: what fraction of unpolarized light passes through two polarizers at an angle? What is the intensity after three polarizers? At what angle does reflected light become fully polarized (Brewster’s angle)? The methods are straightforward applications of vector decomposition and the photon picture.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Polarized and unpolarized light.</b> Unpolarized light has random electric field directions. When it passes through a polarizer, only the component along the transmission axis survives:<br>• Unpolarized → polarizer: <i>I</i> = ½<i>I</i><sub>0</sub>.<br>• Polarized → polarizer at angle <i>θ</i>: <i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i> (Malus’s law).',
      },
      {
        t: 'p',
        html: '<b>Brewster’s angle (polarization by reflection).</b> When light reflects off a dielectric surface, reflected light is completely polarized perpendicular to the plane of incidence when the reflected and refracted rays are at 90°. From Snell’s law and geometry:<br>tan <i>θ</i><sub>B</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>.<br>At <i>θ</i><sub>B</sub>, the reflected intensity for light polarized in the plane of incidence is zero.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Angles are dimensionless (or in degrees/radians). Intensities are in W m<sup>−2</sup>. The ratios are dimensionless. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Two Polarizers',
        q: 'Unpolarized light of intensity <i>I</i><sub>0</sub> = 100 W m<sup>−2</sup> passes through a polarizer, then through an analyzer whose axis makes an angle of 60° with the polarizer’s axis. Find the intensity after the analyzer.',
        steps: [
          '<b>Step 1 — After the first polarizer.</b> Unpolarized light loses half its intensity:<br><i>I</i><sub>1</sub> = ½<i>I</i><sub>0</sub> = 50 W m<sup>−2</sup>.',
          '<b>Step 2 — After the analyzer.</b> The light is now polarized along the polarizer axis at 60° to the analyzer. Malus’s law:<br><i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup>(60°) = 50 × (½)<sup>2</sup> = 50 × ¼ = 12.5 W m<sup>−2</sup>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Three Polarizers',
        q: 'Light passes through three polarizers with axes at 0°, 30°, and 60° relative to the first. Unpolarized incident intensity is <i>I</i><sub>0</sub>. Find the final intensity.',
        steps: [
          '<b>Step 1 — After first polarizer:</b> <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2.',
          '<b>Step 2 — After second polarizer (30° to first):</b> <i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup>(30°) = <i>I</i><sub>0</sub>/2 × ¾ = 3<i>I</i><sub>0</sub>/8.',
          '<b>Step 3 — After third polarizer (60° − 30° = 30° to second, or 60° to first):</b><br><i>I</i><sub>3</sub> = <i>I</i><sub>2</sub> cos<sup>2</sup>(30°) = 3<i>I</i><sub>0</sub>/8 × ¾ = 9<i>I</i><sub>0</sub>/32 ≈ 0.281 <i>I</i><sub>0</sub>.',
          '<b>Comparison (middle polarizer removed):</b> from first directly to third the angle is 60°, so <i>I</i><sub>3</sub> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>(60°) = <i>I</i><sub>0</sub>/8. Going through the middle polarizer at 30° gives more transmission because the intermediate polarization state is achievable. This is the key insight: inserting a polarizer at an intermediate angle can increase transmission.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Brewster’s Angle and Reflection',
        q: 'Light of wavelength <i>λ</i> = 589 nm (sodium light) in air strikes a glass surface (refractive index <i>n</i> = 1.50) at an arbitrary angle. (a) Find Brewster’s angle. (b) At Brewster’s angle, what fraction of incident unpolarized light is reflected? (c) At 45° incidence, what are the reflected intensities for the two polarization components?',
        steps: [
          '(a) tan <i>θ</i><sub>B</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = 1.50/1.00 = 1.50. <i>θ</i><sub>B</sub> = arctan(1.50) = 56.3°.',
          '(b) For unpolarized light at any angle: the component perpendicular to the plane of incidence is partially reflected, while the parallel component is zero at Brewster’s angle. Half the incident light (perpendicular component) has reflectance <i>R</i><sub>⟂</sub> ≠ 0 at Brewster’s angle; the parallel component has <i>R</i><sub>∥</sub> = 0. So the reflected fraction is not zero for unpolarized light — only for light polarized with its electric field in the plane of incidence.',
          'For unpolarized light: reflectance for perpendicular component at <i>θ</i><sub>B</sub>: from Fresnel equations, <i>R</i><sub>⟂</sub> = sin<sup>2</sup>(<i>θ</i><sub>B</sub> − <i>θ</i><sub>t</sub>). At Brewster’s angle, <i>θ</i><sub>t</sub> = 90° − <i>θ</i><sub>B</sub> (since <i>θ</i><sub>B</sub> + <i>θ</i><sub>t</sub> = 90°), so <i>R</i><sub>⟂</sub> = sin<sup>2</sup>(2<i>θ</i> − 90°) = cos<sup>2</sup>(2<i>θ</i>), where <i>θ</i> is Brewster’s angle. With tan <i>θ</i> = 1.50, <i>θ</i> = 56.3°, so 2<i>θ</i> = 112.6° and cos(112.6°) = −0.385, hence <i>R</i><sub>⟂</sub> = (0.385)<sup>2</sup> = 0.148. Half the incident unpolarized light is the perpendicular component, so the reflected fraction is (1/2)<i>R</i><sub>⟂</sub> = 0.074 (about 7%). The rest transmits.',
          '(c) At <i>θ</i> = 45° (not Brewster’s angle):<br>From Fresnel equations for air-to-glass (<i>n</i> = 1.50):<br><i>r</i><sub>∥</sub> = tan(<i>θ</i> − <i>θ</i><sub>t</sub>)/tan(<i>θ</i> + <i>θ</i><sub>t</sub>),   <i>r</i><sub>⟂</sub> = −sin(<i>θ</i> − <i>θ</i><sub>t</sub>)/sin(<i>θ</i> + <i>θ</i><sub>t</sub>).',
          'At <i>θ</i> = 45°, sin <i>θ</i><sub>t</sub> = sin(45°)/1.50 = 0.471, <i>θ</i><sub>t</sub> = 28.1°. <i>r</i><sub>⟂</sub> = −sin(16.9°)/sin(73.1°) = −0.291/0.956 = −0.304, <i>R</i><sub>⟂</sub> = <i>r</i><sub>⟂</sub><sup>2</sup> = 0.092. <i>r</i><sub>∥</sub> = tan(16.9°)/tan(73.1°) = 0.304/3.30 = 0.092, <i>R</i><sub>∥</sub> = <i>r</i><sub>∥</sub><sup>2</sup> = 0.0085.',
          'For unpolarized light: reflected intensity fraction = ½(<i>R</i><sub>⟂</sub> + <i>R</i><sub>∥</sub>) = ½(0.092 + 0.0085) = 0.050 (5%). The perpendicular component reflects more strongly, so reflected light is partially polarized.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Polarization of Laser Light',
        q: 'A He-Ne laser (<i>λ</i> = 633 nm) emits linearly polarized light of intensity <i>I</i><sub>0</sub> = 10 mW cm<sup>−2</sup>. It passes through a polarizer with its axis at 30° to the laser’s polarization direction, then through an identical polarizer with axis at −30°. (a) Find the final intensity. (b) By what angle should the second polarizer be rotated to maximize transmission, and what is that maximum?',
        steps: [
          '(a) First polarizer: <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub> cos<sup>2</sup>(30°) = <i>I</i><sub>0</sub> × 0.75. Second polarizer: angle between first and second = 60°, so <i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup>(60°) = 0.75 <i>I</i><sub>0</sub> × 0.25 = 0.1875 <i>I</i><sub>0</sub>. <i>I</i><sub>2</sub> = (0.1875)(10) = 1.875 mW cm<sup>−2</sup>.',
          '(b) Let <i>φ</i> be the angle between the axes of the two polarizers, so <i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup><i>φ</i> with <i>I</i><sub>1</sub> = 0.75 <i>I</i><sub>0</sub> = 7.5 mW cm<sup>−2</sup>. This is maximum at <i>φ</i> = 0, i.e., when the second polarizer is rotated from −30° to +30° (a rotation of 60°) so that it is parallel to the first. The maximum final intensity is then <i>I</i><sub>1</sub> = 7.5 mW cm<sup>−2</sup> (it cannot exceed the intensity <i>I</i><sub>1</sub> reaching the second polarizer).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Unpolarized light of intensity <i>I</i><sub>0</sub> passes through a polarizer. What is the transmitted intensity? State Malus’s law.',
            a: '<i>I</i> = <i>I</i><sub>0</sub>/2. Malus’s law: <i>I</i> = <i>I</i><sub>in</sub> cos<sup>2</sup> <i>θ</i> where <i>θ</i> is the angle between the light’s polarization and the polarizer axis.',
          },
          {
            q: '[JEE Main] Light passes through two polarizers with axes at 0° and 45°. If the incident light is unpolarized with intensity <i>I</i><sub>0</sub> = 80 W m<sup>−2</sup>, find the intensity after each polarizer.',
            a: 'After first: <i>I</i><sub>1</sub> = 40 W m<sup>−2</sup>. After second: <i>I</i><sub>2</sub> = 40 cos<sup>2</sup>(45°) = 40 × 0.5 = 20 W m<sup>−2</sup>.',
          },
          {
            q: '[JEE Main] Light is reflected from a glass surface (<i>n</i> = 1.6) in air. Find Brewster’s angle.',
            a: 'tan <i>θ</i><sub>B</sub> = 1.6, <i>θ</i><sub>B</sub> = arctan(1.6) = 58.0°.',
          },
          {
            q: '[JEE Advanced] Three polarizers are placed in sequence. The first and third are crossed (90° to each other). A polarizer is inserted between them at 45° to each. If the incident unpolarized intensity is <i>I</i><sub>0</sub>, find the transmitted intensity. What is it without the middle polarizer?',
            a: 'Without middle polarizer: crossed polarizers give <i>I</i> = 0. With middle polarizer at 45°: after first <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2, after middle <i>I</i><sub>2</sub> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>(45°) = <i>I</i><sub>0</sub>/4, after third <i>I</i><sub>3</sub> = (<i>I</i><sub>0</sub>/4) cos<sup>2</sup>(45°) = <i>I</i><sub>0</sub>/8.',
          },
          {
            q: '[JEE Advanced] A beam of unpolarized light of intensity <i>I</i><sub>0</sub> is incident on a stack of <i>N</i> polarizers, each rotated by <i>α</i>/<i>N</i> relative to the previous one. Show that the transmitted intensity is <i>I</i>(<i>N</i>) = (<i>I</i><sub>0</sub>/2) cos<sup>2<i>n</i></sup>(<i>α</i>/<i>N</i>), where <i>n</i> = <i>N</i> − 1 is the number of rotations (the initial ½ comes from the unpolarized light meeting the first polarizer), and that for large <i>N</i> this approaches <i>I</i><sub>0</sub>/2 with vanishing additional loss from the rotation itself.',
            a: 'Derivation: after the first polarizer <i>I</i> = <i>I</i><sub>0</sub>/2; each of the remaining <i>n</i> = <i>N</i> − 1 polarizers multiplies it by cos<sup>2</sup>(<i>α</i>/<i>N</i>), so <i>I</i>(<i>N</i>) = (<i>I</i><sub>0</sub>/2) cos<sup>2<i>n</i></sup>(<i>α</i>/<i>N</i>). For large <i>N</i>, cos(<i>α</i>/<i>N</i>) ≈ 1 − <i>α</i><sup>2</sup>/(2<i>N</i><sup>2</sup>), so ln <i>I</i>(<i>N</i>) ≈ ln(<i>I</i><sub>0</sub>/2) − <i>α</i><sup>2</sup>(<i>N</i> − 1)/<i>N</i><sup>2</sup> → ln(<i>I</i><sub>0</sub>/2). The transmitted intensity approaches <i>I</i><sub>0</sub>/2, the only loss being the initial unpolarized-to-polarized halving, none from the rotation.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 552–554 ─────────────────────────
  {
    n: 'D',
    title: 'Standing Electromagnetic Waves and Resonant Cavities',
    extra: true,
    kalam: 'JEE Advanced asks about standing EM waves — formed when a travelling wave reflects from a conductor and interferes with itself.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Apart from Hertz’s standing waves (Topic 02), the chapter treats only travelling waves. JEE Advanced asks about standing EM waves — formed when a travelling wave reflects from a conductor and interferes with itself. The tangential electric field must be zero at a conducting boundary (since <i>E</i><sub>∥</sub> = 0 at a perfect conductor), creating nodes; the magnetic field has antinodes at the walls. This has direct applications to resonant cavities, microwave waveguides, and the laser.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Standing wave formation.</b> Consider a wave travelling in the +<i>x</i> direction that reflects at <i>x</i> = 0 from a perfect conductor, where the boundary condition requires the tangential electric field to vanish for all <i>t</i> (a fixed end, since <i>E</i><sub>∥</sub> = 0 at a perfect conductor). Incident: <i>E</i> = <i>E</i><sub>0</sub> sin(<i>ωt</i> − <i>kx</i>); reflected (inverted by the boundary condition): <i>E</i> = −<i>E</i><sub>0</sub> sin(<i>ωt</i> + <i>kx</i>); sum: <i>E</i> = <i>E</i><sub>0</sub>[sin(<i>ωt</i> − <i>kx</i>) − sin(<i>ωt</i> + <i>kx</i>)] = −2<i>E</i><sub>0</sub> cos <i>ωt</i> sin <i>kx</i>.',
      },
      {
        t: 'p',
        html: 'At <i>x</i> = 0: <i>E</i><sub><i>y</i></sub> = −2<i>E</i><sub>0</sub> cos(<i>ωt</i>) sin(0) = 0 for all <i>t</i>, so the boundary condition is satisfied. Electric field nodes are at <i>kx</i> = <i>n</i>π, i.e., <i>x</i> = <i>nλ</i>/2 (including the wall itself). Electric antinodes are at <i>kx</i> = (<i>n</i> + ½)π, i.e., <i>x</i> = (<i>n</i> + ½)<i>λ</i>/2.',
      },
      {
        t: 'p',
        html: '(Here the wave arrives from the region <i>x</i> < 0 and the conductor occupies <i>x</i> ≥ 0; in the cavity 0 < <i>x</i> < <i>L</i> below, the incident wave travels in the −<i>x</i> direction. The node and antinode positions and <i>f</i><sub><i>n</i></sub> = <i>nc</i>/(2<i>L</i>) are the same either way.)',
      },
      {
        t: 'p',
        html: '<b>Magnetic field from Maxwell’s equations.</b> The standing <i>E</i> field induces a standing <i>B</i> field. From Faraday’s law in 1D: ∂<i>E</i><sub><i>y</i></sub>/∂<i>x</i> = −∂<i>B</i><sub><i>z</i></sub>/∂<i>t</i>.<br>∂/∂<i>x</i> (−2<i>E</i><sub>0</sub> cos <i>ωt</i> sin <i>kx</i>) = −2<i>E</i><sub>0</sub> cos <i>ωt</i> · <i>k</i> cos <i>kx</i> = −∂<i>B</i><sub><i>z</i></sub>/∂<i>t</i>.<br>Integrating: <i>B</i><sub><i>z</i></sub> = (2<i>E</i><sub>0</sub><i>k</i>/<i>ω</i>) sin <i>ωt</i> cos <i>kx</i> = 2<i>B</i><sub>0</sub> sin <i>ωt</i> cos <i>kx</i>.<br><br>At the conducting wall (<i>x</i> = 0): <i>B</i><sub><i>z</i></sub> = 2<i>B</i><sub>0</sub> sin <i>ωt</i> (maximum). Magnetic field antinodes at conductors, electric field nodes at conductors.',
      },
      {
        t: 'p',
        html: '<b>Resonant cavity.</b> For a cavity of length <i>L</i> with conducting walls at <i>x</i> = 0 and <i>x</i> = <i>L</i>, boundary conditions give standing waves with <i>k</i><sub><i>n</i></sub> = <i>n</i>π/<i>L</i>, <i>f</i><sub><i>n</i></sub> = <i>nc</i>/(2<i>L</i>).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>k</i> = 2π/<i>λ</i>, units m<sup>−1</sup>. <i>f</i> = <i>ω</i>/(2π) = <i>c</i>/<i>λ</i>, units s<sup>−1</sup>. <i>L</i> in m, <i>c</i> in m s<sup>−1</sup>, so <i>f</i><sub><i>n</i></sub> in s<sup>−1</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Electromagnetic Oscillations in a Cavity',
        q: 'A pair of large parallel conducting plates <i>d</i> = 4.0 cm apart forms a cavity. Find the three lowest longitudinal standing-wave frequencies along <i>d</i> (a one-dimensional model).',
        steps: [
          '<b>Step 1 — Standing wave condition.</b> For a cavity of length <i>d</i> with conducting ends, the standing wave has nodes at both ends for <i>E</i> and antinodes at both ends for <i>B</i>. The allowed wavelengths satisfy:<br><i>d</i> = <i>nλ</i><sub><i>n</i></sub>/2   ⇒   <i>λ</i><sub><i>n</i></sub> = 2<i>d</i>/<i>n</i>.',
          '<b>Step 2 — Frequencies.</b><br><i>f</i><sub><i>n</i></sub> = <i>c</i>/<i>λ</i><sub><i>n</i></sub> = <i>nc</i>/(2<i>d</i>).<br>With <i>d</i> = 4.0 cm = 4.0 × 10<sup>−2</sup> m, <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>:<br><i>f</i><sub>1</sub> = (3 × 10<sup>8</sup>)/(2(4 × 10<sup>−2</sup>)) = (3 × 10<sup>8</sup>)/(8 × 10<sup>−2</sup>) = 3.75 × 10<sup>9</sup> Hz = 3.75 GHz.<br><i>f</i><sub>2</sub> = 2<i>f</i><sub>1</sub> = 7.50 GHz.<br><i>f</i><sub>3</sub> = 3<i>f</i><sub>1</sub> = 11.25 GHz.',
          'These are all microwave frequencies (<i>f</i><sub>1</sub> in the S-band, <i>f</i><sub>2</sub> in the C-band, <i>f</i><sub>3</sub> in the X-band).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Energy Density Oscillation in a Standing Wave',
        q: 'In a standing EM wave between two conducting plates separated by <i>L</i> = 15 cm, in its fundamental mode, each of the two travelling waves that form it has amplitude <i>E</i><sub>0</sub> = 100 V m<sup>−1</sup>. (a) Find the positions of the electric and magnetic field nodes and antinodes. (b) Find the maximum energy density and the total energy per unit area between the plates.',
        steps: [
          '(a) From the standing wave form <i>E</i> = −2<i>E</i><sub>0</sub> sin(<i>kx</i>) cos <i>ωt</i> and <i>B</i> = (2<i>E</i><sub>0</sub>/<i>c</i>) cos(<i>kx</i>) sin <i>ωt</i>:',
          'Electric field nodes: <i>kx</i> = <i>n</i>π, i.e., <i>x</i> = <i>nλ</i>/2. At <i>x</i> = 0 (wall), <i>x</i> = <i>λ</i>/2, <i>x</i> = <i>λ</i>, etc. Electric field antinodes: <i>kx</i> = (<i>n</i> + ½)π, i.e., <i>x</i> = (<i>n</i> + ½)<i>λ</i>/2. At <i>x</i> = <i>λ</i>/4, 3<i>λ</i>/4, etc.',
          'Magnetic field nodes: <i>kx</i> = (<i>n</i> + ½)π, i.e., <i>x</i> = (<i>n</i> + ½)<i>λ</i>/2 (at the <i>E</i> antinodes). Magnetic field antinodes: <i>kx</i> = <i>n</i>π, i.e., <i>x</i> = <i>nλ</i>/2 (at the walls).',
          'For <i>L</i> = 15 cm, the fundamental mode (<i>n</i> = 1): <i>λ</i> = 2<i>L</i> = 30 cm. Between the plates (0 ≤ <i>x</i> ≤ 15 cm): electric nodes at <i>x</i> = 0 and 15 cm; electric antinode at <i>x</i> = 7.5 cm; magnetic node at <i>x</i> = 7.5 cm; magnetic antinodes at <i>x</i> = 0 and 15 cm.',
          '(b) At an electric antinode (<i>x</i> = <i>λ</i>/4): <i>E</i><sub>max</sub> = 2<i>E</i><sub>0</sub> = 200 V m<sup>−1</sup>, <i>B</i> = 0. Energy density: <i>u</i><sub>E</sub> = ½ε<sub>0</sub><i>E</i><sup>2</sup> = ½(8.85 × 10<sup>−12</sup>)(200)<sup>2</sup> = 1.77 × 10<sup>−7</sup> J m<sup>−3</sup>.',
          'At a magnetic antinode (at the wall): <i>E</i> = 0, <i>B</i><sub>max</sub> = 2<i>E</i><sub>0</sub>/<i>c</i> = 2(100)/(3 × 10<sup>8</sup>) = 6.67 × 10<sup>−7</sup> T. Energy density: <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) = (6.67 × 10<sup>−7</sup>)<sup>2</sup>/(2(4π × 10<sup>−7</sup>)) = (4.45 × 10<sup>−13</sup>)/(2.51 × 10<sup>−6</sup>) = 1.77 × 10<sup>−7</sup> J m<sup>−3</sup>.',
          'Total energy per unit area (integrate over half a wavelength from node to node, or use the fact that the standing wave stores equal <i>E</i> and <i>B</i> energy on average):',
          'The electric and magnetic energy densities are (1/2)ε<sub>0</sub><i>E</i><sup>2</sup> = 2ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> sin<sup>2</sup>(<i>kx</i>) cos<sup>2</sup><i>ωt</i> and <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) = 2ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> cos<sup>2</sup>(<i>kx</i>) sin<sup>2</sup><i>ωt</i> respectively. Averaged over a wave period (⟨cos<sup>2</sup><i>ωt</i>⟩ = ⟨sin<sup>2</sup><i>ωt</i>⟩ = (1/2)) and over a half-wavelength in <i>x</i> (⟨sin<sup>2</sup><i>kx</i>⟩ = ⟨cos<sup>2</sup><i>kx</i>⟩ = (1/2)), each averages to (1/2)ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup>, so ⟨<i>u</i>⟩ = ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> = (8.85 × 10<sup>−12</sup>)(100)<sup>2</sup> = 8.85 × 10<sup>−8</sup> J m<sup>−3</sup>. Energy per unit area between the plates: <i>U</i>/<i>A</i> = ⟨<i>u</i>⟩<i>L</i> = (8.85 × 10<sup>−8</sup>)(0.15) = 1.33 × 10<sup>−8</sup> J m<sup>−2</sup>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the boundary conditions for <i>E</i> and <i>B</i> at a perfect conductor. Why does a reflected EM wave undergo a 180° phase change?',
            a: 'At a perfect conductor: <i>E</i><sub>∥</sub> = 0 and <i>B</i><sub>⟂</sub> = 0 (tangential electric and normal magnetic must vanish). A reflected wave undergoes 180° phase change because the boundary condition <i>E</i><sub>∥</sub> = 0 requires the reflected wave to cancel the incident wave at the surface.',
          },
          {
            q: '[JEE Main] Two parallel conducting plates are separated by <i>L</i> = 6.0 cm. Find the wavelength and frequency of the fundamental standing wave mode.',
            a: 'For fundamental: <i>λ</i> = 2<i>L</i> = 12 cm. <i>f</i> = <i>c</i>/<i>λ</i> = (3 × 10<sup>8</sup>)/(0.12) = 2.5 × 10<sup>9</sup> Hz = 2.5 GHz.',
          },
          {
            q: '[JEE Main] In a standing EM wave between conducting walls, where is the electric field maximum? Where is the magnetic field maximum?',
            a: 'Electric field is maximum at the midpoint between the walls in the fundamental mode (in general at the electric antinodes, <i>x</i> = (<i>n</i> + ½)<i>λ</i>/2). Magnetic field is maximum at the walls (magnetic antinodes).',
          },
          {
            q: '[JEE Advanced] A resonant cavity has conducting walls at <i>x</i> = 0 and <i>x</i> = <i>d</i>. Write the standing wave form for <i>E</i> and <i>B</i>. Show that the boundary conditions are satisfied.',
            a: 'Superposing the incident and reflected waves, <i>E</i><sub><i>y</i></sub> = <i>E</i><sub>0</sub>[sin(<i>ωt</i> − <i>kx</i>) − sin(<i>ωt</i> + <i>kx</i>)] = −2<i>E</i><sub>0</sub> cos(<i>ωt</i>) sin(<i>kx</i>), which gives <i>E</i><sub><i>y</i></sub>(0, <i>t</i>) = 0 for all <i>t</i> — satisfying the boundary condition at the conducting wall, with nodes at <i>x</i> = <i>nλ</i>/2. The corresponding magnetic field is <i>B</i><sub><i>z</i></sub> = (2<i>E</i><sub>0</sub>/<i>c</i>) sin(<i>ωt</i>) cos(<i>kx</i>), which is maximum at <i>x</i> = 0 (a magnetic antinode at the wall, as required). At <i>x</i> = <i>d</i>, <i>E</i><sub><i>y</i></sub>(<i>d</i>, <i>t</i>) = 0 for all <i>t</i> requires sin(<i>kd</i>) = 0, i.e. <i>k</i> = <i>n</i>π/<i>d</i> (<i>λ</i> = 2<i>d</i>/<i>n</i>); <i>B</i><sub><i>z</i></sub> is then maximum at <i>x</i> = <i>d</i> too.',
          },
          {
            q: '[JEE Advanced] Standing EM waves are set up, in the fundamental mode, in a cavity of length <i>L</i> = 10 cm. The peak magnetic field at the walls is <i>B</i><sub>wall</sub> = 1.0 × 10<sup>−6</sup> T. Find (a) the frequency of the wave, (b) the peak electric field, and (c) the average energy density in the cavity.',
            a: '(a) For the fundamental mode (<i>n</i> = 1), <i>f</i> = <i>c</i>/(2<i>L</i>) = (3 × 10<sup>8</sup>)/(2(0.10)) = 1.5 × 10<sup>9</sup> Hz = 1.5 GHz. (b) The wall amplitude <i>B</i><sub>wall</sub> = 2<i>E</i><sub>0</sub>/<i>c</i> gives <i>E</i><sub>0</sub> = <i>B</i><sub>wall</sub><i>c</i>/2 = (1.0 × 10<sup>−6</sup>)(3 × 10<sup>8</sup>)/2 = 150 V m<sup>−1</sup>, so the peak electric field in the cavity (at an antinode) is 2<i>E</i><sub>0</sub> = 300 V m<sup>−1</sup>. (c) The electric and magnetic parts each average (1/2)ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup>, so ⟨<i>u</i>⟩ = ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> = (8.85 × 10<sup>−12</sup>)(150)<sup>2</sup> = 1.99 × 10<sup>−7</sup> J m<sup>−3</sup>.',
          },
        ],
      },
    ],
  },
];
