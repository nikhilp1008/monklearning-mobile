import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional Topics D to G, word for word from the Class 12
 * Physics Master Reference Supplement: D The BLV Chain: Inversions and
 * Extensions (pp. 447 to 449), E Quantitative Eddy Currents and Magnetic
 * Damping (pp. 449 to 452), F Flux Linkage Method for Complex Geometries
 * (pp. 453 to 456) and G The Dot Convention and Combined Inductor Circuits
 * (pp. 456 to 458). Each addendum prints its own practice problems and
 * answers. These pages print no drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 447–449 ─────────────────────────
  {
    n: 'D',
    title: 'The BLV Chain: Inversions and Extensions',
    extra: true,
    kalam:
      'JEE Advanced routinely inverts this chain — given F find v; given P find B; given F and v find R — and extends the geometry to non-perpendicular cases.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 gives the forward chain for a sliding rod: <i>B</i>, <i>ℓ</i>, <i>v</i> → <i>ε</i> = <i>Bℓv</i> → <i>I</i> = <i>ε</i>/<i>R</i> → <i>F</i> = <i>BIℓ</i> → <i>P</i> = <i>Fv</i> = <i>I</i><sup>2</sup><i>R</i>. JEE Advanced routinely inverts this chain — given <i>F</i> find <i>v</i>; given <i>P</i> find <i>B</i>; given <i>F</i> and <i>v</i> find <i>R</i> — and extends the geometry to non-perpendicular cases. This addendum closes those gaps.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The full BLV chain (mutually perpendicular case).</b><br>Starting from <i>B</i>, <i>ℓ</i>, <i>v</i> and the circuit resistance <i>R</i>, you can find the rest:<br><i>ε</i> = <i>Bℓv</i>, <i>I</i> = <i>Bℓv</i>/<i>R</i>,<br><i>F</i> = <i>BIℓ</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i>, <i>P</i> = <i>Fv</i> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>.<br>At terminal velocity (falling rod): <i>mg</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub>/<i>R</i>, so <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Non-perpendicular geometry.</b> The motional emf is the line integral of (<i>v⃗</i> × <i>B⃗</i>) · d<i>ℓ⃗</i>. If the angle between <i>v⃗</i> and <i>B⃗</i> is <i>θ</i>, and the rod, lying in the plane perpendicular to <i>B⃗</i>, makes angle <i>φ</i> with the projection of <i>v⃗</i> on that plane, then:<br><i>ε</i> = <i>Bvℓ</i> sin <i>θ</i> sin <i>φ</i>.<br>For a rod at angle <i>α</i> to its direction of travel along rails: only the velocity component perpendicular to the rod produces charge separation. If the plane of the rails is perpendicular to <i>B⃗</i>, the effective length for motional emf is <i>ℓ</i> sin <i>α</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Every expression reduces to T · m<sup>2</sup> · s<sup>−1</sup> = V for emf, A for current, N for force, and W for power. All consistent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Inverting the Chain: Given Power, Find Velocity',
        q: 'A rod of length <i>ℓ</i> = 0.50 m and mass <i>m</i> = 0.20 kg slides on horizontal rails of resistance <i>R</i> = 0.80 Ω in a uniform vertical magnetic field <i>B</i> = 0.40 T. An external agent pulls the rod so that the power dissipated in the resistor is <i>P</i> = 2.0 W. Find the speed of the rod and the force the external agent must apply.',
        steps: [
          'From the BLV chain:<br><i>P</i> = <i>I</i><sup>2</sup><i>R</i> = (<i>Bℓv</i>/<i>R</i>)<sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>.',
          'Solve for <i>v</i>:<br><i>v</i> = √(<i>PR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>)) = √((2.0)(0.80)/((0.40)<sup>2</sup>(0.50)<sup>2</sup>)) = √(1.60/0.040) = √40 = 6.32 m/s.',
          'The current: <i>I</i> = √(<i>P</i>/<i>R</i>) = √(2.0/0.80) = √2.5 = 1.58 A.',
          'The magnetic force: <i>F</i><sub>mag</sub> = <i>BIℓ</i> = (0.40)(1.58)(0.50) = 0.316 N.',
          'The external agent must pull with <i>F</i><sub>ext</sub> = 0.316 N at <i>v</i> = 6.32 m/s, giving <i>P</i><sub>ext</sub> = (0.316)(6.32) = 2.0 W — confirmed.',
          '<b>Check units:</b> √(W · Ω)/(T · m) = √((kg · m<sup>2</sup> · s<sup>−3</sup>)(Ω))/(kg · s<sup>−2</sup> · A<sup>−1</sup> · m) = ... reduces to m/s. Correct.',
        ],
        ans: '<i>v</i> = 6.32 m/s; <i>F</i> = 0.316 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Non-Perpendicular Geometry',
        q: 'A conducting rod of length <i>ℓ</i> = 0.60 m makes an angle <i>α</i> = 30° with the direction of motion as it slides along rails at speed <i>v</i> = 4.0 m/s. The magnetic field is perpendicular to the plane of the rails. Find (a) the effective length for motional emf, (b) the emf if <i>B</i> = 0.50 T, and (c) the magnetic force on the rod.',
        steps: [
          '<b>(a) Effective length.</b> Only the component of velocity perpendicular to the rod produces charge separation. The rod moves at speed <i>v</i> along the rails and its axis is at 30° to this direction, so the perpendicular component is <i>v</i> sin <i>α</i> = 4.0 × sin 30° = 4.0 × 0.50 = 2.0 m/s. This is equivalent to a rod of length <i>ℓ</i> moving with speed <i>v</i>′ = <i>v</i> sin <i>α</i> perpendicular to its length, so:<br><i>ε</i> = <i>B</i>(<i>v</i> sin <i>α</i>)<i>ℓ</i> = <i>Bℓv</i> sin <i>α</i>.',
          'Alternatively: the component of the vector <i>v</i> × <i>B</i> along the rod is <i>Bv</i> sin <i>α</i>, and integrating along the rod gives the same result.',
          '<b>(b) Emf.</b><br><i>ε</i> = (0.50)(0.60)(4.0) sin 30° = 1.20 × 0.50 = 0.60 V.',
          '<b>(c) Magnetic force.</b> The force on a current-carrying conductor is <i>F</i> = <i>BIℓ</i> sin <i>θ</i>, where <i>θ</i> is the angle between <i>I</i> and <i>B</i>. The current flows along the rod, which lies in the plane of the rails (perpendicular to <i>B</i>). So <i>θ</i> = 90°, and:<br><i>F</i> = <i>BIℓ</i> = (0.50)(<i>I</i>)(0.60).',
          'If <i>R</i> is known, <i>I</i> = <i>ε</i>/<i>R</i> = 0.60/<i>R</i>. The force on the rod is perpendicular to the rod and to <i>B</i>; its component along the rails, <i>F</i> sin <i>α</i>, opposes the motion.',
          '<b>Key insight.</b> The “effective length” for motional emf is <i>ℓ</i> sin <i>α</i> when the rod is oblique to its direction of motion. The magnetic force formula <i>F</i> = <i>BIℓ</i> uses the full <i>ℓ</i> because the current flows along the full rod regardless of its angle to the motion.',
        ],
        ans: '(a) <i>ℓ</i> sin <i>α</i> = 0.30 m; (b) <i>ε</i> = 0.60 V; (c) <i>F</i> = <i>BIℓ</i> = (0.50)(<i>I</i>)(0.60) N, perpendicular to the rod; its component along the rails opposes the motion.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A rod 0.40 m long falls at <i>v</i> = 3.0 m/s in <i>B</i> = 0.25 T. Find the emf generated. (All mutually perpendicular.)',
            a: '<i>ε</i> = <i>Bℓv</i> = 0.25 × 0.40 × 3.0 = 0.30 V.',
          },
          {
            q: '[JEE Main] A rod on rails dissipates <i>P</i> = 1.8 W in the resistor. Given <i>B</i> = 0.50 T, <i>ℓ</i> = 0.30 m, <i>R</i> = 1.0 Ω, find the speed of the rod.',
            a: '<i>P</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> ⇒ <i>v</i> = √(<i>PR</i>)/(<i>Bℓ</i>) = √(1.8 × 1.0)/(0.50 × 0.30) = √1.8/0.15 = 1.34/0.15 = 8.9 m/s.',
          },
          {
            q: '[JEE Advanced] A rod of length <i>ℓ</i> rotates about one end in a plane perpendicular to a uniform field <i>B</i>, at angular speed <i>ω</i>. Derive the emf expression <i>ε</i> = ½<i>Bωℓ</i><sup>2</sup> using the motional emf integral <i>ε</i> = ∫(<i>v⃗</i> × <i>B⃗</i>) · d<i>ℓ⃗</i>, showing every step with units.',
            a: 'Rod rotates about one end. Take element at distance <i>x</i> from pivot, length d<i>x</i>. Its speed: <i>v</i> = <i>ωx</i> (perpendicular to <i>B</i> throughout). Motional emf of element: d<i>ε</i> = <i>B</i>(<i>ωx</i>) d<i>x</i>. Integrate <i>x</i> from 0 to <i>ℓ</i>: <i>ε</i> = ∫<sub>0</sub><sup><i>ℓ</i></sup> <i>Bωx</i> d<i>x</i> = <i>Bω</i>[½<i>x</i><sup>2</sup>]<sub>0</sub><sup><i>ℓ</i></sup> = ½<i>Bωℓ</i><sup>2</sup>. Units: <i>B</i> (T) × <i>ω</i> (rad/s) × <i>ℓ</i><sup>2</sup> (m<sup>2</sup>) = T·rad·s<sup>−1</sup>·m<sup>2</sup>. Since rad is dimensionless: T·m<sup>2</sup>·s<sup>−1</sup> = (kg·s<sup>−2</sup>·A<sup>−1</sup>)(m<sup>2</sup>·s<sup>−1</sup>) = kg·m<sup>2</sup>·s<sup>−3</sup>·A<sup>−1</sup> = V. Correct.',
          },
          {
            q: '[JEE Advanced] Two identical rods slide in opposite directions with speeds <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> on parallel rails (separation <i>ℓ</i>, field <i>B</i> perpendicular to their plane, circuit resistance <i>R</i>). Find the emf of the resulting circuit and comment on the effect on the induced current direction.',
            a: 'If the rods slide in opposite directions with speeds <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> on the same parallel rails, the loop area changes at the rate <i>ℓ</i>(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>), so the emfs add: <i>ε</i> = <i>Bℓ</i>(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>) and <i>I</i> = <i>ε</i>/<i>R</i>. The current has one sense around the loop, the one that opposes the change in flux (Lenz’s law). If the rods move in the same direction the emfs oppose and the net emf is <i>Bℓ</i>|<i>v</i><sub>1</sub> − <i>v</i><sub>2</sub>|.',
          },
          {
            q: '[JEE Advanced] A rod of mass <i>m</i> and length <i>ℓ</i> is pulled at constant velocity <i>v</i> on rails of resistance <i>R</i> in a field <i>B</i>. Show that the power dissipated can also be written as <i>P</i> = (<i>F</i><sub>mag</sub>)<sup>2</sup><i>R</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). Use this to find <i>v</i> if the applied force is <i>F</i>.',
            a: '<i>F</i><sub>mag</sub> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i> ⇒ <i>v</i> = <i>F</i><sub>mag</sub><i>R</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). But <i>F</i><sub>mag</sub> = <i>F</i><sub>ext</sub> at constant velocity. So <i>v</i> = <i>FR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). Then <i>P</i> = <i>Fv</i> = <i>F</i><sup>2</sup><i>R</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). Also <i>P</i> = (<i>F</i><sub>mag</sub><sup>2</sup><i>R</i>)/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) by substituting <i>F</i><sub>mag</sub>: (<i>B</i><sup>4</sup><i>ℓ</i><sup>4</sup><i>v</i><sup>2</sup>/<i>R</i><sup>2</sup>) × <i>R</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>, which equals <i>I</i><sup>2</sup><i>R</i>. Checks out.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 449–452 ─────────────────────────
  {
    n: 'E',
    title: 'Quantitative Eddy Currents and Magnetic Damping',
    extra: true,
    kalam:
      'Addendum E goes quantitative on eddy currents: the magnetic time constant, power loss density, and the lamination argument rebuilt from dimensions instead of hand-waving.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces eddy currents qualitatively: they oppose the change that creates them (Lenz’s law), they cause unwanted heating in transformer cores, and they are reduced by lamination. But it gives no formula beyond the qualitative scaling with <i>B</i><sup>2</sup> and the square of the frequency. This addendum rebuilds the eddy current argument from dimensions and shows where the <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) time constant comes from — the same structure as the falling rod, applied to a bulk conductor.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Eddy current magnitude (order-of-magnitude estimate).</b><br>Consider a conducting slab of thickness <i>d</i>, conductivity <i>σ</i> = 1/<i>ρ</i> (resistivity <i>ρ</i>), in a perpendicular magnetic field that changes at rate d<i>B</i>/d<i>t</i>. The induced electric field around a loop of characteristic size <i>L</i> is <i>E</i> ∼ (<i>L</i>/4)(d<i>B</i>/d<i>t</i>) (from Faraday’s law for a square loop of side <i>L</i>: ∮<i>E</i> · d<i>ℓ</i> = 4<i>LE</i> ≈ <i>L</i><sup>2</sup>(d<i>B</i>/d<i>t</i>) in magnitude). The current density is <i>J</i> = <i>σE</i>, and the power density (power per unit volume, up to numerical factors) is:<br><i>P</i><sub>vol</sub> = <i>J</i><sup>2</sup>/<i>σ</i> = <i>σE</i><sup>2</sup> ∼ <i>σL</i><sup>2</sup>(d<i>B</i>/d<i>t</i>)<sup>2</sup>.<br>For a laminar core of thickness <i>t</i> (with laminations perpendicular to the plane of the eddy currents), the characteristic loop size is ∼ <i>t</i>, so:<br><i>P</i><sub>loss</sub> ∼ <i>σt</i><sup>2</sup>(d<i>B</i>/d<i>t</i>)<sup>2</sup> × (volume).<br>This is the basis of the standard result: eddy current loss per unit mass scales as (<i>B</i><sub>max</sub><sup>2</sup><i>f</i><sup>2</sup><i>t</i><sup>2</sup>)/<i>ρ</i>, where <i>f</i> is the frequency of the alternating field. Halving the lamination thickness quarters the loss — the quantitative form of the chapter’s lamination argument.',
      },
      {
        t: 'p',
        html: '<b>Magnetic damping time constant.</b> A conducting plate of mass <i>m</i>, width <i>ℓ</i> (perpendicular to its motion) and eddy-current resistance <i>R</i> falls into a uniform field <i>B</i>. The magnetic drag force is <i>F</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i> (the same formula as a rod). The equation of motion is:<br><i>m</i> d<i>v</i>/d<i>t</i> = <i>mg</i> − (<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>/<i>R</i>)<i>v</i>.<br>This is a first-order linear ODE with solution:<br><i>v</i>(<i>t</i>) = <i>v</i><sub>t</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>),<br>where <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) is the magnetic time constant of the fall.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>): kg × Ω / [(T<sup>2</sup>)(m<sup>2</sup>)]. Since T<sup>2</sup> = kg<sup>2</sup> A<sup>−2</sup> s<sup>−4</sup> and Ω = kg m<sup>2</sup> A<sup>−2</sup> s<sup>−3</sup>, the numerator is kg<sup>2</sup> m<sup>2</sup> A<sup>−2</sup> s<sup>−3</sup> and the denominator is kg<sup>2</sup> m<sup>2</sup> A<sup>−2</sup> s<sup>−4</sup>. Ratio = s. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Magnetic Damping: Time to Reach 90% of Terminal Velocity',
        q: 'A square copper plate (<i>m</i> = 50 g, side <i>a</i> = 5.0 cm, thickness <i>t</i> = 1.0 mm) falls into a region of uniform horizontal field <i>B</i> = 0.40 T perpendicular to its face. While it is entering, the flux through it changes; the effective resistance of the eddy-current paths is <i>R</i> = 0.80 μΩ (an idealised eddy-path resistance; a real plate’s is far larger, so it would fall faster). Find (a) the terminal velocity, (b) the time constant, and (c) the time to reach 0.90 <i>v</i><sub>t</sub>.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.050 kg, <i>a</i> = 0.050 m, <i>ℓ</i> = <i>a</i> = 0.050 m (the width perpendicular to the motion), <i>B</i> = 0.40 T, <i>R</i> = 8.0 × 10<sup>−7</sup> Ω.',
          '<b>(a) Terminal velocity.</b> <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>).<br><i>v</i><sub>t</sub> = (0.050)(9.8)(8.0 × 10<sup>−7</sup>)/((0.40)<sup>2</sup>(0.050)<sup>2</sup>) = (3.92 × 10<sup>−7</sup>)/(0.16 × 0.0025) = (3.92 × 10<sup>−7</sup>)/(4.0 × 10<sup>−4</sup>) = 9.8 × 10<sup>−4</sup> m/s ≈ 1.0 mm/s.',
          'The plate falls extremely slowly — magnetic damping is very strong for a large, conducting plate.',
          '<b>(b) Time constant.</b> <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) = (0.050)(8.0 × 10<sup>−7</sup>)/[(0.40)<sup>2</sup>(0.050)<sup>2</sup>] = (4.0 × 10<sup>−8</sup>)/[0.16 × 0.0025] = (4.0 × 10<sup>−8</sup>)/(4.0 × 10<sup>−4</sup>) = 1.0 × 10<sup>−4</sup> s = 0.10 ms.',
          '<b>(c) Time to reach 0.90 <i>v</i><sub>t</sub>.</b> From <i>v</i>/<i>v</i><sub>t</sub> = 1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>:<br>0.90 = 1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup> ⇒ <i>e</i><sup>−<i>t</i>/<i>τ</i></sup> = 0.10 ⇒ <i>t</i> = <i>τ</i> ln(10) = (0.10 ms)(2.303) = 0.23 ms.',
          'The plate approaches terminal velocity very rapidly (in about 0.2 ms), but the terminal velocity itself is tiny (1 mm/s). The plate falls as if through very thick honey.',
        ],
        ans: '(a) <i>v</i><sub>t</sub> ≈ 1.0 mm/s; (b) <i>τ</i> = 0.10 ms; (c) <i>t</i> ≈ 0.23 ms.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Eddy Current Power Loss in a Laminated Core',
        q: 'A transformer core is made of laminations of thickness <i>t</i> = 0.50 mm, resistivity <i>ρ</i> = 1.0 × 10<sup>−6</sup> Ω·m, subjected to a sinusoidal flux density <i>B</i>(<i>t</i>) = <i>B</i><sub>max</sub> sin <i>ωt</i> with <i>B</i><sub>max</sub> = 1.2 T and <i>f</i> = 50 Hz. (a) Estimate the power loss per unit mass due to eddy currents. (b) By what factor would the loss change if the lamination thickness were halved to 0.25 mm?',
        steps: [
          '<b>(a) Eddy current power loss.</b> The power loss per unit volume for a thin lamination is, from the dimensional argument:<br><i>P</i><sub>vol</sub> ∼ (1/<i>ρ</i>)(d<i>B</i>/d<i>t</i>)<sup>2</sup><i>t</i><sup>2</sup>.',
          'For sinusoidal <i>B</i>: d<i>B</i>/d<i>t</i> = <i>B</i><sub>max</sub><i>ω</i> cos <i>ωt</i>, so (d<i>B</i>/d<i>t</i>)<sup>2</sup><sub>avg</sub> = ½<i>B</i><sub>max</sub><sup>2</sup><i>ω</i><sup>2</sup>.<br><i>P̄</i><sub>vol</sub> ∼ <i>B</i><sub>max</sub><sup>2</sup><i>ω</i><sup>2</sup><i>t</i><sup>2</sup>/(2<i>ρ</i>).',
          'With <i>ω</i> = 2π<i>f</i> = 314 rad/s, <i>t</i> = 0.50 mm = 5.0 × 10<sup>−4</sup> m:<br><i>P̄</i><sub>vol</sub> ∼ [(1.2)<sup>2</sup>(314)<sup>2</sup>(5.0 × 10<sup>−4</sup>)<sup>2</sup>]/[2(1.0 × 10<sup>−6</sup>)] = [(1.44)(9.86 × 10<sup>4</sup>)(2.5 × 10<sup>−7</sup>)]/(2 × 10<sup>−6</sup>)<br>= [(1.44)(9.86 × 10<sup>4</sup>)(2.5 × 10<sup>−7</sup>)]/(2 × 10<sup>−6</sup>) = (3.55 × 10<sup>−2</sup>)/(2 × 10<sup>−6</sup>) = 1.78 × 10<sup>4</sup> W/m<sup>3</sup>.',
          'Taking iron density <i>ρ</i><sub>m</sub> ≈ 7800 kg/m<sup>3</sup>:<br><i>P̄</i><sub>mass</sub> = (1.78 × 10<sup>4</sup>)/7800 ≈ 2.3 W/kg.',
          'This is an order-of-magnitude estimate: for a thin lamination the exact average is <i>B</i><sub>max</sub><sup>2</sup><i>ω</i><sup>2</sup><i>t</i><sup>2</sup>/(24<i>ρ</i>), twelve times smaller (about 0.19 W/kg here); the <i>t</i><sup>2</sup> scaling, which part (b) uses, is exact.',
          '<b>(b) Effect of halving thickness.</b> Since <i>P</i> ∝ <i>t</i><sup>2</sup>, halving <i>t</i> reduces <i>P</i> by a factor of 2<sup>2</sup> = 4. The lamination thickness is the single most effective design parameter for controlling eddy current loss.',
        ],
        ans: '(a) ≈ 2.3 W/kg (order of magnitude); (b) loss reduced by factor of 4.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A copper plate falls through a magnetic field. If the field strength is doubled (all else equal), by what factor does the terminal velocity change?',
            a: '<i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) ∝ 1/<i>B</i><sup>2</sup>. Doubling <i>B</i> reduces <i>v</i><sub>t</sub> by factor 1/4.',
          },
          {
            q: '[JEE Main] Why are transformer cores laminated? State the dependence of eddy current loss on lamination thickness.',
            a: 'Eddy current loss per unit volume ∝ <i>t</i><sup>2</sup> (lamination thickness squared). Laminations break current paths, raising effective resistance and reducing loss. Halving <i>t</i> quarters the loss.',
          },
          {
            q: '[JEE Advanced] A thin conducting disc of radius <i>r</i>, thickness <i>t</i>, and resistivity <i>ρ</i> rotates with angular velocity <i>ω</i> in a perpendicular field <i>B</i> that covers only part of the disc (for example, between the poles of a small magnet). Estimate the torque opposing rotation due to eddy currents.',
            a: 'For a disc rotating at <i>ω</i>, a small element at radius <i>r</i>′ has speed <i>v</i> = <i>ωr</i>′. It experiences motional emf <i>ε</i> ∼ <i>Bωr</i>′<sup>2</sup> (integrating along the element). Eddy currents flow in closed loops of size ∼ <i>r</i>′. Current <i>I</i> ∼ <i>ε</i>/<i>R</i><sub>loop</sub>, where <i>R</i><sub>loop</sub> ∼ <i>ρ</i>/<i>t</i>. The magnetic force on the current loop ∼ <i>BIℓ</i> gives a torque contribution. Integrating the torque density <i>r</i>′<i>JB</i>, with <i>J</i> ∼ <i>σBωr</i>′, over the disc gives the torque <i>τ</i> ∼ (π/2)<i>tB</i><sup>2</sup><i>ωr</i><sup>4</sup>/<i>ρ</i>. (Order-of-magnitude estimate; the exact factor depends on the geometry of the current paths.)',
          },
          {
            q: '[JEE Advanced] Show that the magnetic time constant <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) for a falling plate has the same form as the time constant <i>R</i><sub>e</sub><i>C</i> of a capacitor <i>C</i> fed by a constant current through a parallel resistor <i>R</i><sub>e</sub> (<i>m</i> ↔ <i>C</i>, <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>/<i>R</i> ↔ 1/<i>R</i><sub>e</sub>, <i>mg</i> ↔ the constant current).',
            a: 'The falling-plate equation <i>m</i> d<i>v</i>/d<i>t</i> = <i>mg</i> − (<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>/<i>R</i>)<i>v</i> has the same form as <i>C</i> d<i>V</i>/d<i>t</i> = <i>I</i> − <i>V</i>/<i>R</i><sub>e</sub> for a capacitor fed by a constant current <i>I</i> with a resistor <i>R</i><sub>e</sub> in parallel, with <i>m</i> ↔ <i>C</i>, <i>v</i> ↔ <i>V</i>, <i>mg</i> ↔ <i>I</i> and <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>/<i>R</i> ↔ 1/<i>R</i><sub>e</sub>. Both are first-order linear ODEs; their solutions approach a steady state with time constant <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) ↔ <i>R</i><sub>e</sub><i>C</i>.',
          },
          {
            q: '[JEE Advanced] A magnet is dropped through a copper ring of resistance <i>R</i>. Explain why the induced current is zero when the magnet is at the centre of the ring, and where the retarding force on the magnet is greatest. (Hint: the flux is maximum at the centre.)',
            a: 'Treat the magnet as a small dipole on the axis of a ring of radius <i>a</i>, at height <i>z</i> above the plane of the ring. The flux through the ring, Φ ∝ <i>a</i><sup>2</sup>/(<i>a</i><sup>2</sup> + <i>z</i><sup>2</sup>)<sup>3/2</sup>, is maximum at <i>z</i> = 0 and falls off on either side, so <i>ε</i> = −dΦ/d<i>t</i> = −(dΦ/d<i>z</i>)<i>v</i> is zero at the centre (dΦ/d<i>z</i> = 0) and reverses sign as the magnet passes through. The induced current <i>I</i> = <i>ε</i>/<i>R</i>, and hence the retarding force, is greatest where |dΦ/d<i>z</i>| is largest, at <i>z</i> = ±<i>a</i>/2. By Lenz’s law the force on the magnet is upward both before and after it passes; it varies with height, so a magnet falling through a single ring never settles to a terminal speed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 453–456 ─────────────────────────
  {
    n: 'F',
    title: 'Flux Linkage Method for Complex Geometries',
    extra: true,
    kalam:
      'Addendum F chains flux integration with differentiation on multi-step geometries (flux linkage).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 gives <i>ε</i> = −<i>N</i> dΦ/d<i>t</i> and the integration formula Φ = ∫ <i>B⃗</i> · d<i>A⃗</i> for non-uniform fields. Topic 03 gives mutual inductance as <i>M</i> = <i>N</i><sub>2</sub>Φ<sub>2</sub>/<i>I</i><sub>1</sub>. This addendum shows how to chain these tools on the multi-step geometry problems that constitute the hardest JEE Advanced EMI questions: a loop near a wire, a rotating frame, a coil inside a solenoid — each requiring flux integration followed by differentiation with respect to time.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: 'For any geometry where the flux changes with time:' },
      {
        t: 'proc',
        title: 'The flux-linkage problem template',
        steps: [
          '<b>Set up the flux integral.</b> Choose coordinates; identify <i>B⃗</i>(<i>r⃗</i>) and the surface <i>S</i>(<i>t</i>) whose boundary is the circuit. Write Φ(<i>t</i>) = ∫<sub><i>S</i></sub> <i>B⃗</i> · d<i>A⃗</i>.',
          '<b>Simplify the geometry.</b> If the field is non-uniform, look for a symmetry that makes one spatial coordinate the only variable in <i>B</i>. For a long straight wire: <i>B</i>(<i>r</i>) = μ<sub>0</sub><i>I</i>/(2π<i>r</i>). For a solenoid on axis: <i>B</i>(<i>z</i>) ≈ μ<sub>0</sub><i>nI</i> for <i>z</i> well inside.',
          '<b>Perform the spatial integration.</b> This gives Φ as a function of the geometric parameters (distance, angle, current, number of turns).',
          '<b>Differentiate with respect to time.</b> If the time-dependence enters through a distance <i>x</i>(<i>t</i>), velocity <i>v</i> = d<i>x</i>/d<i>t</i>, current <i>I</i>(<i>t</i>), or angle <i>θ</i>(<i>t</i>) with <i>ω</i> = d<i>θ</i>/d<i>t</i>, then dΦ/d<i>t</i> follows by the chain rule.',
          '<b>Apply Faraday’s law.</b> <i>ε</i> = −<i>N</i> dΦ/d<i>t</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Units check at every step.</b> Flux: Wb = T·m<sup>2</sup>. Differentiating with respect to time: V. Every intermediate and final quantity must have dimensions you can verify.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Flux Through a Rotating Rectangular Loop',
        q: 'A rectangular loop of sides <i>a</i> and <i>b</i> rotates about one of its sides of length <i>b</i> (which lies along the <i>x</i>-axis) with angular velocity <i>ω</i>. The rotation is in a uniform magnetic field <i>B⃗</i> that points along the <i>z</i>-axis. Find the emf induced in the loop as a function of time.',
        steps: [
          'The loop rotates about the side <i>b</i>, which lies along the <i>x</i>-axis, so the area vector <i>A</i> rotates in the <i>y</i>–<i>z</i> plane (a circle) at angular speed <i>ω</i>.',
          '<b>Step 1 — Flux at time <i>t</i>.</b> At time <i>t</i>, the normal to the loop makes angle <i>θ</i> = <i>ωt</i> with <i>B⃗</i> (taking the normal along <i>B⃗</i> at <i>t</i> = 0; the side <i>b</i> is the axis of rotation). The flux is:<br>Φ(<i>t</i>) = <i>B⃗</i> · <i>A⃗</i> = <i>BA</i> cos <i>θ</i> = <i>Bab</i> cos <i>ωt</i>.',
          '<b>Step 2 — Differentiate.</b><br>dΦ/d<i>t</i> = −<i>Babω</i> sin <i>ωt</i>.',
          '<b>Step 3 — Faraday’s law (single turn).</b><br><i>ε</i>(<i>t</i>) = −dΦ/d<i>t</i> = <i>Babω</i> sin <i>ωt</i>.',
          '<b>Step 4 — Check dimensions.</b> <i>Babω</i>: <i>a</i> (m) × <i>b</i> (m) × <i>B</i> (T) × <i>ω</i> (s<sup>−1</sup>) = m<sup>2</sup>·T·s<sup>−1</sup> = Wb·s<sup>−1</sup> = V. Correct.',
          '<b>Step 5 — <i>N</i> turns.</b> If the loop has <i>N</i> turns, <i>ε</i><sub><i>N</i></sub> = <i>N</i> <i>Babω</i> sin <i>ωt</i>.',
          '<b>Comparison with the AC generator formula.</b> The chapter’s generator uses a coil of area <i>A</i> rotating in a uniform field. Here the loop has the same area <i>A</i> = <i>ab</i>, and the formula is identical: <i>ε</i> = <i>NABω</i> sin <i>ωt</i>. The difference is that this loop rotates about a side, not about its centre — but the area vector still sweeps at angular velocity <i>ω</i>, so the result is the same.',
        ],
        ans: '<i>ε</i>(<i>t</i>) = <i>Babω</i> sin <i>ωt</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Mutual Inductance via Flux Integration',
        q: 'A long solenoid of radius <i>r</i> = 2.0 cm, turns per unit length <i>n</i> = 500 m<sup>−1</sup>, carries a current <i>I</i>. A single circular loop of wire of radius <i>R</i> = 5.0 cm is placed coaxially with the solenoid, with its plane perpendicular to the solenoid’s axis. The loop is outside the solenoid (so the solenoid’s field is not uniform over the loop’s area). Find the mutual inductance <i>M</i>.',
        steps: [
          'The loop is larger than the solenoid and encloses it, so the easiest route is to drive the current <i>I</i> through the solenoid and find the flux that links the loop. (The mutual inductance is the same in either direction.)',
          '<b>Step 1 — Field of the solenoid.</b> Inside a long solenoid the field is uniform and axial, <i>B</i> = μ<sub>0</sub><i>nI</i>. Outside, it is negligible in comparison, because the return flux is spread over a very large area.',
          '<b>Step 2 — Flux through the loop.</b> The loop (<i>R</i> > <i>r</i>) encloses the whole cross-section of the solenoid, so the flux linking it is the flux through the solenoid, whose area is π<i>r</i><sup>2</sup>: Φ = <i>B</i> · π<i>r</i><sup>2</sup> = μ<sub>0</sub><i>nI</i> · π<i>r</i><sup>2</sup>. The part of the loop’s area outside the solenoid contributes nothing, since <i>B</i> ≈ 0 there; hence Φ does not depend on <i>R</i>.',
          '<b>Step 3 — Mutual inductance.</b> For a single-turn loop, <i>M</i> = Φ/<i>I</i> = μ<sub>0</sub><i>n</i>π<i>r</i><sup>2</sup>. Units: (H/m)(m<sup>−1</sup>)(m<sup>2</sup>) = H, as required.',
          '<b>Step 4 — Numbers.</b> <i>M</i> = μ<sub>0</sub><i>n</i>π<i>r</i><sup>2</sup> = (4π × 10<sup>−7</sup>)(500)π(0.020)<sup>2</sup> = 4π<sup>2</sup> × 10<sup>−7</sup> × 500 × 4 × 10<sup>−4</sup> = 4π<sup>2</sup> × 2 × 10<sup>−8</sup> = 4(9.87)(2 × 10<sup>−8</sup>) = 7.9 × 10<sup>−7</sup> H ≈ 0.79 μH.',
          '<b>Remark.</b> <i>M</i> = μ<sub>0</sub><i>n</i>π<i>r</i><sup>2</sup> involves only the solenoid’s own cross-section, not the loop radius <i>R</i>: enlarging a loop that already encloses the solenoid adds area only where <i>B</i> ≈ 0. A loop of radius <i>a</i> < <i>r</i> placed coaxially inside the solenoid would link only μ<sub>0</sub><i>nI</i> · π<i>a</i><sup>2</sup>, giving <i>M</i> = μ<sub>0</sub><i>n</i>π<i>a</i><sup>2</sup> (compare practice question 3).',
        ],
        ans: '<i>M</i> = μ<sub>0</sub><i>n</i>π<i>r</i><sup>2</sup> ≈ 0.79 μH (independent of the loop radius <i>R</i>, since <i>R</i> > <i>r</i>).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A rectangular loop of 100 turns, area 20 cm<sup>2</sup>, rotates at 600 rpm about an axis in its plane perpendicular to a 0.30 T field. Find the peak emf.',
            a: '<i>ω</i> = 600 × 2π/60 = 20π rad/s = 62.8 rad/s. <i>A</i> = 20 × 10<sup>−4</sup> m<sup>2</sup>. <i>ε</i><sub>0</sub> = <i>NABω</i> = 100 × 0.30 × 20 × 10<sup>−4</sup> × 62.8 = 100 × 0.30 × 1.26 × 10<sup>−1</sup> = 3.8 V.',
          },
          {
            q: '[JEE Advanced] A straight wire carries current <i>I</i> = <i>I</i><sub>0</sub> cos <i>ωt</i>. A rectangular loop of height <i>h</i> has one side, parallel to the wire, at distance <i>a</i> and the opposite side at distance <i>b</i> (<i>b</i> > <i>a</i>), in the same plane. Find the induced emf as a function of time.',
            a: 'Wire at <i>x</i> = 0, loop sides at <i>x</i> = <i>a</i> and <i>x</i> = <i>b</i>. Field at distance <i>x</i>: <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>x</i>). Flux through strip d<i>x</i> at <i>x</i>: dΦ = <i>B</i> <i>h</i> d<i>x</i>, where <i>h</i> is the length of the sides parallel to the wire. Φ(<i>t</i>) = (μ<sub>0</sub><i>I</i><sub>0</sub> cos <i>ωt</i>)/(2π) × <i>h</i> × ln(<i>b</i>/<i>a</i>). Differentiate: <i>ε</i> = −dΦ/d<i>t</i> = (μ<sub>0</sub><i>I</i><sub>0</sub><i>ω</i> sin <i>ωt</i>)/(2π) × <i>h</i> × ln(<i>b</i>/<i>a</i>).',
          },
          {
            q: '[JEE Advanced] Show that for a single-turn loop of radius <i>r</i> placed coaxially inside a long solenoid of radius <i>R</i> > <i>r</i>, with <i>n</i> turns per unit length, the mutual inductance is <i>M</i> = μ<sub>0</sub>π<i>r</i><sup>2</sup><i>n</i>. Use the fact that the solenoid’s field is uniform over the small loop’s area.',
            a: 'Solenoid field (uniform inside): <i>B</i> = μ<sub>0</sub><i>nI</i>. Area of loop: π<i>r</i><sup>2</sup>. Flux per turn: μ<sub>0</sub><i>nI</i> × π<i>r</i><sup>2</sup>. <i>M</i> = μ<sub>0</sub>π<i>r</i><sup>2</sup><i>n</i>.',
          },
          {
            q: '[JEE Advanced] A toroid of <i>N</i><sub>1</sub> turns, mean radius <i>R</i> and cross-sectional area <i>A</i> (<i>A</i> much smaller than <i>R</i><sup>2</sup>) carries current <i>I</i>. A small coil of <i>N</i><sub>2</sub> turns is wound on the toroid. Find the flux through the small coil and the mutual inductance <i>M</i>.',
            a: 'The toroid’s field is <i>B</i> = μ<sub>0</sub><i>N</i><sub>1</sub><i>I</i>/(2π<i>R</i>), uniform over the small cross-section <i>A</i>. The flux through each turn of the small coil is <i>BA</i> = μ<sub>0</sub><i>N</i><sub>1</sub><i>IA</i>/(2π<i>R</i>), so <i>M</i> = <i>N</i><sub>2</sub><i>BA</i>/<i>I</i> = μ<sub>0</sub><i>N</i><sub>1</sub><i>N</i><sub>2</sub><i>A</i>/(2π<i>R</i>).',
          },
          {
            q: '[JEE Advanced] A circular loop of radius <i>a</i> is placed inside a long solenoid of radius <i>b</i> > <i>a</i>, with its plane perpendicular to the solenoid’s axis. The solenoid has <i>n</i> turns per metre and carries current <i>I</i>(<i>t</i>) = <i>I</i><sub>0</sub> sin <i>ωt</i>. Find the induced emf in the loop. (This is the most common JEE configuration for the “flux integration + differentiation” type.)',
            a: 'Solenoid field (inside): <i>B</i> = μ<sub>0</sub><i>nI</i>(<i>t</i>) = μ<sub>0</sub><i>nI</i><sub>0</sub> sin <i>ωt</i>. This field is uniform over the small loop’s area π<i>a</i><sup>2</sup>. Flux through loop: Φ = <i>B</i> × π<i>a</i><sup>2</sup> = μ<sub>0</sub><i>nI</i><sub>0</sub>π<i>a</i><sup>2</sup> sin <i>ωt</i>. Differentiate: <i>ε</i> = −dΦ/d<i>t</i> = −μ<sub>0</sub><i>n</i>π<i>a</i><sup>2</sup><i>I</i><sub>0</sub><i>ω</i> cos <i>ωt</i>. Magnitude: <i>ε</i><sub>max</sub> = μ<sub>0</sub><i>n</i>π<i>a</i><sup>2</sup><i>I</i><sub>0</sub><i>ω</i>. Units: μ<sub>0</sub> (H/m) × <i>n</i> (1/m) × <i>a</i><sup>2</sup> (m<sup>2</sup>) × <i>I</i><sub>0</sub> (A) × <i>ω</i> (1/s) = H·A·s<sup>−1</sup> = V. Correct.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 456–458 ─────────────────────────
  {
    n: 'G',
    title: 'The Dot Convention and Combined Inductor Circuits',
    extra: true,
    kalam:
      'The chapter gives L and M as formulas but never addresses what happens when two or more inductors — with mutual coupling — are connected in series or parallel.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives <i>L</i> and <i>M</i> as formulas but never addresses what happens when two or more inductors — with mutual coupling — are connected in series or parallel. This is a standard JEE Advanced topic that requires the dot convention to determine whether the mutual inductance adds or subtracts.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Dot convention.</b> When two coupled inductors are wound on the same core, a dot is placed at one end of each winding. Current <b>entering the dotted terminal</b> of one inductor produces a flux that aids the flux in the other inductor (positive mutual inductance). Current entering the undotted terminal produces opposing flux.<br>• Series aiding: current enters both dotted terminals; total inductance <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i>.<br>• Series opposing: the dotted ends are joined; total inductance <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> − 2<i>M</i>.<br>• Parallel aiding: equivalent inductance (<i>L</i><sub>1</sub><i>L</i><sub>2</sub> − <i>M</i><sup>2</sup>)/(<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> − 2<i>M</i>); opposing: (<i>L</i><sub>1</sub><i>L</i><sub>2</sub> − <i>M</i><sup>2</sup>)/(<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i>). For <i>L</i><sub>1</sub> = <i>L</i><sub>2</sub> = <i>L</i> and perfect coupling (<i>k</i> = 1) this tends to <i>L</i> for aiding (as <i>k</i> → 1; at <i>k</i> = 1 the formula is 0/0) and 0 for opposing.',
      },
      {
        t: 'p',
        html: '<b>Derivation of series formula.</b> In series, the same current <i>I</i> flows through both inductors. The total voltage is:<br><i>V</i> = <i>L</i><sub>1</sub> d<i>I</i>/d<i>t</i> ± <i>M</i> d<i>I</i>/d<i>t</i> + <i>L</i><sub>2</sub> d<i>I</i>/d<i>t</i> ± <i>M</i> d<i>I</i>/d<i>t</i> = (<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> ± 2<i>M</i>) d<i>I</i>/d<i>t</i>.<br>The sign depends on whether the induced emfs from mutual inductance aid or oppose self-induction.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Series Combination of Two Coupled Inductors',
        q: 'Two coils with self-inductances <i>L</i><sub>1</sub> = 20 mH and <i>L</i><sub>2</sub> = 30 mH are wound on the same core so that their mutual inductance is <i>M</i> = 15 mH. (a) Find the total inductance when connected in series aiding. (b) Find the total inductance when connected in series opposing. (c) Find the coupling coefficient <i>k</i>.',
        steps: [
          '<b>(a) Series aiding.</b> <i>L</i><sub>eq</sub> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i> = 20 + 30 + 30 = 80 mH.',
          '<b>(b) Series opposing.</b> <i>L</i><sub>eq</sub> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> − 2<i>M</i> = 20 + 30 − 30 = 20 mH.',
          '<b>(c) Coupling coefficient.</b> <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) ⇒ <i>k</i> = <i>M</i>/√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) = 15/√(20 × 30) = 15/√600 = 15/24.5 = 0.612.',
          'The coupling is moderately strong (<i>k</i> = 0.61 < 1), which is physically realistic for adjacent coils on the same core without interleaving.',
          '<b>Energy check.</b> For aiding connection, more energy is stored for the same current: <i>U</i> = ½<i>L</i><sub>eq</sub><i>I</i><sup>2</sup> = ½(80 mH)<i>I</i><sup>2</sup>. For opposing: <i>U</i> = ½(20 mH)<i>I</i><sup>2</sup>. The difference 30 mH × <i>I</i><sup>2</sup> is 2<i>MI</i><sup>2</sup>: the mutual energy <i>MI</i><sup>2</sup> = (15 mH)<i>I</i><sup>2</sup> adds in the aiding connection and subtracts in the opposing one.',
        ],
        ans: '(a) <i>L</i> = 80 mH; (b) <i>L</i> = 20 mH; (c) <i>k</i> = 0.61.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Mutual Inductance from Series Test',
        q: 'Two coils are connected in series. When the series combination is measured with an LCR meter, the aiding connection gives 120 mH and the opposing connection (dotted ends joined) gives 40 mH. Find <i>M</i> and <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub>. Can <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> be found separately?',
        steps: [
          'From the series formulas:<br><i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i> = 120 mH (1)<br><i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> − 2<i>M</i> = 40 mH (2)',
          'Adding: 2(<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub>) = 160 ⇒ <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> = 80 mH. Subtracting: 4<i>M</i> = 80 ⇒ <i>M</i> = 20 mH.',
          'To find individual values, we need one more piece of information (e.g., the coefficient of coupling <i>k</i> or one self-inductance). Using <i>k</i> = <i>M</i>/√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) and <i>L</i><sub>1</sub><i>L</i><sub>2</sub> = (<i>L</i><sub>1</sub>(80 − <i>L</i><sub>1</sub>)):<br><i>k</i><sup>2</sup> = <i>M</i><sup>2</sup>/(<i>L</i><sub>1</sub>(80 − <i>L</i><sub>1</sub>)) ⇒ <i>L</i><sub>1</sub>(80 − <i>L</i><sub>1</sub>) = <i>M</i><sup>2</sup>/<i>k</i><sup>2</sup>.',
          'Without <i>k</i> we know only the sum <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> and <i>M</i> (the product <i>L</i><sub>1</sub><i>L</i><sub>2</sub> = <i>M</i><sup>2</sup>/<i>k</i><sup>2</sup> needs <i>k</i>). The individual values are not uniquely determined from the two measurements alone — a third measurement (e.g., each coil measured separately) is needed.',
        ],
        ans: '<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> = 80 mH, <i>M</i> = 20 mH. Individual <i>L</i><sub>1</sub>, <i>L</i><sub>2</sub> require additional information.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Two coils with <i>L</i><sub>1</sub> = 5 mH, <i>L</i><sub>2</sub> = 10 mH, <i>M</i> = 3 mH are connected in series. Find the effective inductance for both connections.',
            a: 'Aiding: <i>L</i> = 5 + 10 + 2(3) = 21 mH. Opposing: <i>L</i> = 5 + 10 − 2(3) = 9 mH.',
          },
          {
            q: '[JEE Advanced] Show that for two identical inductors <i>L</i> with mutual inductance <i>M</i>, the series aiding effective inductance is 4<i>L</i>(1 + <i>k</i>)/2 and the series opposing is 4<i>L</i>(1 − <i>k</i>)/2 when expressed in terms of the coupling coefficient <i>k</i>. What happens as <i>k</i> → 1 in each case?',
            a: '<i>L</i><sub>aid</sub> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>). For <i>L</i><sub>1</sub> = <i>L</i><sub>2</sub> = <i>L</i>: <i>L</i><sub>aid</sub> = 2<i>L</i> + 2<i>kL</i> = 2<i>L</i>(1 + <i>k</i>). <i>L</i><sub>opp</sub> = 2<i>L</i> − 2<i>kL</i> = 2<i>L</i>(1 − <i>k</i>). As <i>k</i> → 1: <i>L</i><sub>aid</sub> → 4<i>L</i>, <i>L</i><sub>opp</sub> → 0. Zero effective inductance for opposing means the induced emfs exactly cancel — the pair has no net inductance.',
          },
          {
            q: '[JEE Advanced] Two coils are placed far apart, with no common core, so the coupling is negligible (<i>k</i> ≈ 0). Show that the effective inductance for series connection is simply <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> regardless of dot orientation.',
            a: 'With <i>k</i> = 0, <i>M</i> = 0, so <i>L</i><sub>eq</sub> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> regardless of dots. Physically: no flux from one coil links the other, so they behave as independent inductors in series.',
          },
          {
            q: '[JEE Advanced] Prove that the maximum possible value of <i>M</i> for two inductors <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> is <i>M</i><sub>max</sub> = √(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>) (i.e., <i>k</i> = 1). Hint: consider the energy stored in the coupled system.',
            a: 'Total energy: <i>U</i> = ½<i>L</i><sub>1</sub><i>I</i><sub>1</sub><sup>2</sup> + ½<i>L</i><sub>2</sub><i>I</i><sub>2</sub><sup>2</sup> + <i>MI</i><sub>1</sub><i>I</i><sub>2</sub>. For real coils, <i>U</i> ≥ 0 for all <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>. This requires <i>M</i><sup>2</sup> ≤ <i>L</i><sub>1</sub><i>L</i><sub>2</sub>. Equality (<i>M</i><sup>2</sup> = <i>L</i><sub>1</sub><i>L</i><sub>2</sub>, i.e. <i>k</i> = 1) is the limit of perfect coupling — all flux from one coil links the other.',
          },
          {
            q: '[JEE Advanced] Three inductors <i>L</i><sub>1</sub>, <i>L</i><sub>2</sub>, <i>L</i><sub>3</sub> are connected in a delta configuration with mutual couplings <i>M</i><sub>12</sub>, <i>M</i><sub>23</sub>, <i>M</i><sub>31</sub>. State (without detailed derivation) how you would find the equivalent inductance between two nodes. What additional information is needed?',
            a: 'For a delta of inductors with mutual coupling, the equivalent inductance between any two nodes is found by: (a) writing KVL equations for each loop including all self and mutual terms, (b) solving the resulting simultaneous equations for the currents given an applied voltage between the two nodes, (c) computing <i>L</i><sub>eq</sub> = <i>V</i>/(d<i>I</i>/d<i>t</i>) from the solution. Additional information needed: the signs of all mutual terms (dot orientations) and the coupling coefficients <i>k</i><sub><i>ij</i></sub>. For <i>n</i> coupled inductors, <i>n</i>(<i>n</i> − 1)/2 mutual inductances are needed in general.',
          },
        ],
      },
    ],
  },
];
