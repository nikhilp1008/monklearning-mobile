import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional Topics A to C, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 436, set at
 * the head of Addendum A), then A Energy Method for Motional EMF Problems
 * (pp. 436 to 440), B LR Circuits: Growth and Decay (pp. 441 to 443; its
 * practice problems and answers sit at the top of p. 443) and C LC
 * Oscillations: The Electromagnetic Spring-Mass Analogue (pp. 443 to 446).
 * Each addendum prints its own practice problems and answers, which are its
 * Practice part. These pages print no drawings: the boxed equations and the
 * spring-mass / LC table are typeset, not drawn. Lines the book patched in a
 * different typeface (plain "l" for ℓ, Unicode subscripts) are normalised to
 * the notation of the surrounding text.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 436–440 ─────────────────────────
  {
    n: 'A',
    title: 'Energy Method for Motional EMF Problems',
    extra: true,
    kalam: 'Addendum A marries the energy conservation of Topic 01 to the motional emf of Topic 02.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you Faraday’s law, motional emf, self and mutual inductance, the AC generator, and the energy formula <i>U</i> = ½<i>LI</i><sup>2</sup>. Seven JEE patterns still stand outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A marries the energy conservation of Topic 01 to the motional emf of Topic 02: the energy method resolves the “falling rod vs pulled rod” confusion that costs more JEE marks than any other single idea in the chapter. Addendum B opens the LR circuit, which the chapter never sets up or solves — growth and decay of current with the time constant <i>τ</i> = <i>L</i>/<i>R</i>. Addendum C takes the two energy-storage formulas (magnetic and electric) and puts them together: LC oscillations are the electromagnetic analogue of spring-mass SHM, and every JEE trick about one maps directly onto the other. Addendum D extends the BLV chain beyond its textbook form — given power, find velocity; non-perpendicular geometries; multiple conductors — the algebraic inverses that Advanced loves to spring. Addendum E goes quantitative on eddy currents: the magnetic time constant, power loss density, and the lamination argument rebuilt from dimensions instead of hand-waving.<br><br>Addendum F chains flux integration with differentiation on multi-step geometries (flux linkage), and Addendum G treats coupled inductors through the dot convention. Numbering continues from the chapter’s Topic 04. Nothing here is new physics: every method below is Faraday’s law, the Lorentz force, or energy conservation.',
      },
      {
        t: 'p',
        html: 'Topic 02 gives the chain <i>I</i> = <i>Bvℓ</i>/<i>R</i> → <i>F</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i> → <i>P</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>. That chain works perfectly for a rod sliding at speed <i>v</i>. But JEE traps live in two questions students get wrong even with the chain in hand: <b>“What happens when the rod falls?”</b> (gravity changes <i>v</i>, so <i>I</i> and <i>F</i> both change until a terminal velocity is reached) and <b>“What power does an external agent supply when pulling a rod at constant velocity?”</b> (the counter-intuitive answer: external power equals <i>I</i><sup>2</sup><i>R</i>, not <i>mgv</i>). The energy method — track every energy term, apply d<i>E</i>/d<i>t</i> = 0, and read off the answer — resolves both at a stroke.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Energy recipe for a moving conductor in a magnetic field',
        steps: [
          '<b>Identify all energy terms.</b> For a rod of mass <i>m</i> moving at speed <i>v</i> on rails of resistance <i>R</i>:<br>• Kinetic energy: <i>K</i> = ½<i>mv</i><sup>2</sup><br>• Potential energy: <i>U</i><sub>g</sub> = <i>mgy</i> (if vertical motion under gravity)<br>• Electrical energy in the circuit: <i>E</i><sub>el</sub> = ½<i>LI</i><sup>2</sup> + <i>Q</i><sup>2</sup>/(2<i>C</i>) (if the circuit has <i>L</i> or <i>C</i>)<br>• Thermal energy dissipated: <i>E</i><sub>th</sub> = ∫ <i>I</i><sup>2</sup><i>R</i> d<i>t</i>',
          '<b>Apply</b> d<i>E</i><sub>total</sub>/d<i>t</i> = 0 (system is isolated; external work enters as a source term if an agent pulls the rod).',
          '<b>For a falling rod:</b> d<i>E</i><sub>mech</sub>/d<i>t</i> + d<i>E</i><sub>th</sub>/d<i>t</i> = 0, where <i>E</i><sub>mech</sub> = <i>K</i> + <i>U</i><sub>g</sub>. The falling rod has d<i>K</i>/d<i>t</i> = 0 at terminal velocity, so d<i>U</i><sub>g</sub>/d<i>t</i> + d<i>E</i><sub>th</sub>/d<i>t</i> = 0, i.e.<br><i>mg v</i><sub>t</sub> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i>.',
          '<b>For a rod pulled at constant velocity by an external agent:</b> <i>K</i> is constant, so d<i>K</i>/d<i>t</i> = 0. The external agent does power <i>P</i><sub>ext</sub> = <i>F</i><sub>ext</sub> <i>v</i>. Energy balance:<br><i>P</i><sub>ext</sub> = d<i>E</i><sub>th</sub>/d<i>t</i> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>.<br>The external power equals the electrical power dissipated, <i>I</i><sup>2</sup><i>R</i>. It is not <i>mgv</i>: for a horizontal rod gravity does no work, and for a falling rod <i>mgv</i> is supplied by gravity, not by an external agent.',
          '<b>Units check.</b> <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> has units (T<sup>2</sup>)(m<sup>2</sup>)(m<sup>2</sup> s<sup>−2</sup>)/Ω = (kg<sup>2</sup> s<sup>−4</sup> A<sup>−2</sup>)(m<sup>4</sup> s<sup>−2</sup>)/Ω, which reduces to kg m<sup>2</sup> s<sup>−3</sup> = W. Correct.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Falling Rod: Terminal Velocity and Power Dissipated',
        q: 'A conducting rod of mass <i>m</i> = 40 g and length <i>ℓ</i> = 0.40 m slides without friction down two vertical conducting rails connected at the bottom by a resistor <i>R</i> = 0.20 Ω. A uniform horizontal magnetic field <i>B</i> = 0.50 T is perpendicular to the plane of the rails. The rod starts from rest and falls. Find (a) its terminal velocity, (b) the power dissipated as heat at terminal velocity, and (c) confirm the energy flow.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.040 kg, <i>ℓ</i> = 0.40 m, <i>R</i> = 0.20 Ω, <i>B</i> = 0.50 T, <i>g</i> = 10 m/s<sup>2</sup>.',
          '<b>(a) Terminal velocity.</b> At terminal velocity the rod’s acceleration is zero, so magnetic drag equals gravity:<br><i>mg</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub>/<i>R</i>   ⟹   <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>).',
          'Substituting:<br><i>v</i><sub>t</sub> = (0.040)(10)(0.20)/((0.50)<sup>2</sup>(0.40)<sup>2</sup>) = 0.080/(0.25 × 0.16) = 0.080/0.040',
          '<b>(b) Power dissipated.</b> At terminal velocity <i>K</i> is constant (d<i>K</i>/d<i>t</i> = 0) and the electromagnetic energy is also constant (d<i>E</i><sub>el</sub>/d<i>t</i> = 0). The only energy change is gravitational potential decreasing and thermal energy increasing:<br><i>P</i><sub>th</sub> = −d<i>U</i><sub>g</sub>/d<i>t</i> = <i>mg v</i><sub>t</sub> = (0.040)(10)(2.0)',
          'Check via <i>I</i><sup>2</sup><i>R</i>:<br><i>I</i><sub>t</sub> = <i>Bℓv</i><sub>t</sub>/<i>R</i> = (0.50)(0.40)(2.0)/0.20 = 0.40/0.20 = 2.0 A,<br><i>P</i><sub>th</sub> = <i>I</i><sub>t</sub><sup>2</sup><i>R</i> = (2.0)<sup>2</sup>(0.20) = 0.80 W.<br>Both agree.',
          '<b>(c) Energy flow.</b> Gravitational potential energy at rate <i>mgv</i><sub>t</sub> = 0.80 W pours into the circuit and is dissipated as heat at exactly that rate. The falling rod is a <b>gravity-fed generator</b>: gravity provides the mechanical work, the magnetic field provides the emf, and the resistor converts the electrical energy to thermal energy. No external agent is needed.',
        ],
        ans: '(a) <i>v</i><sub>t</sub> = 2.0 m/s; (b) <i>P</i> = 0.80 W',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Pulled Rod at Constant Velocity: The External Power Trap',
        q: 'A rod of mass <i>m</i> = 0.40 kg and length <i>ℓ</i> = 0.40 m slides on horizontal rails (<i>R</i> = 0.20 Ω) in a vertical field <i>B</i> = 0.50 T. An external agent pulls the rod so it moves at the constant speed <i>v</i> = 2.0 m/s. Find (a) the magnetic retarding force, (b) the power dissipated in the resistor, and (c) the power supplied by the external agent.',
        steps: [
          'This is the trap version of worked example 1. Students write <i>P</i> = <i>mgv</i> (gravity is absent on a horizontal surface!) or <i>P</i> = ½<i>I</i><sup>2</sup><i>R</i> (the factor of ½ comes from nowhere).',
          '<b>(a) Magnetic force.</b> The induced current is<br><i>I</i> = <i>Bℓv</i>/<i>R</i> = (0.50)(0.40)(2.0)/0.20 = 2.0 A.<br>The magnetic drag force on the current-carrying rod is<br><i>F</i><sub>mag</sub> = <i>BIℓ</i> = (0.50)(2.0)(0.40) = 0.40 N,<br>opposing the motion. The external agent must pull forward with <i>F</i><sub>ext</sub> = 0.40 N.',
          '<b>(b) Power dissipated in the resistor.</b><br><i>P</i><sub>th</sub> = <i>I</i><sup>2</sup><i>R</i> = (2.0)<sup>2</sup>(0.20)',
          '<b>(c) Power supplied by the external agent.</b><br><i>P</i><sub>ext</sub> = <i>F</i><sub>ext</sub> <i>v</i> = (0.40)(2.0)',
          '<b>The key result:</b> <i>P</i><sub>ext</sub> = <i>P</i><sub>th</sub> = 0.80 W. At constant velocity, <b>all the mechanical power supplied by the external agent is delivered to the circuit and dissipated as heat.</b> The external agent is not fighting gravity (the motion is horizontal) — it is doing work directly against the magnetic drag. The mechanical work becomes electrical energy and then thermal energy, with no kinetic energy change.',
          '<b>Why the trap exists.</b> Students remember that <i>P</i> = <i>Fv</i> for a force, so they compute <i>P</i> = <i>mgv</i> = 0 (no gravity) or <i>P</i> = (<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>) × <i>v</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>3</sup>/<i>R</i>, which is three powers of <i>v</i> and gives a nonsense number. The correct chain is: the external agent supplies <i>F</i><sub>ext</sub> <i>v</i>, and <i>F</i><sub>ext</sub> = <i>F</i><sub>mag</sub>, so <i>P</i><sub>ext</sub> = <i>F</i><sub>mag</sub> <i>v</i> = (<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i>) × <i>v</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> = <i>I</i><sup>2</sup><i>R</i>. The power dissipated is proportional to <i>v</i><sup>2</sup>, not <i>v</i><sup>3</sup>.',
          '<b>Check units:</b> <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> has units W. <i>I</i><sup>2</sup><i>R</i> has units A<sup>2</sup>·Ω = W. Both reduce to kg·m<sup>2</sup>·s<sup>−3</sup>. Correct.',
        ],
        ans: '(a) <i>F</i> = 0.40 N; (b) <i>P</i><sub>th</sub> = 0.80 W; (c) <i>P</i><sub>ext</sub> = 0.80 W',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Time-Varying Field on a Stationary Rod',
        q: 'A rod of length <i>ℓ</i> = 0.30 m is held fixed with its ends on two parallel rails joined by a resistor 0.10 m away (loop resistance <i>R</i> = 4.0 Ω). A magnetic field perpendicular to the plane of the rails increases uniformly from <i>B</i><sub>i</sub> = 0 to <i>B</i><sub>f</sub> = 0.80 T in Δ<i>t</i> = 0.10 s. (a) Find the total charge that flows. (b) Find the total thermal energy dissipated. (c) Does the magnetic force on the rod do any work? Where does the heat come from?',
        steps: [
          '<b>(a) Total charge.</b> From Topic 01, the total induced charge depends only on the net flux change and resistance — not on the time taken:<br><i>q</i> = <i>N</i>|ΔΦ|/<i>R</i> = |Δ(<i>BA</i>)|/<i>R</i> = <i>B</i><sub>f</sub><i>ℓa</i>/<i>R</i>,<br>where <i>a</i> is the rod-to-resistor distance (the loop’s other dimension). Taking <i>a</i> = 0.10 m:<br><i>q</i> = (0.80)(0.30)(0.10)/4.0 = 0.024/4.0',
          '<b>(b) Thermal energy dissipated.</b> The emf is constant because d<i>B</i>/d<i>t</i> is constant:<br><i>ε</i> = dΦ/d<i>t</i> = <i>ℓa</i> d<i>B</i>/d<i>t</i> = (0.30)(0.10)(0.80/0.10) = 0.24 V.',
          'Current: <i>I</i> = <i>ε</i>/<i>R</i> = 0.24/4.0 = 0.060 A.<br>Energy dissipated: <i>W</i><sub>th</sub> = <i>I</i><sup>2</sup><i>R</i> Δ<i>t</i> = (0.060)<sup>2</sup>(4.0)(0.10)',
          'Check via <i>W</i> = <i>qε</i>:<br><i>W</i> = <i>qε</i> = (6.0 × 10<sup>−3</sup>)(0.24) = 1.44 × 10<sup>−3</sup> J.<br>Both agree.',
          '<b>(c) Work done by the magnetic force.</b> The rod does not move, d<i>x</i> = 0, so the magnetic force on it does no work. The induced emf <i>ε</i> = 0.24 V does work <i>qε</i> = 1.44 mJ on the charge <i>q</i> = 6.0 mC that circulates, and the resistor converts all of it to heat.',
          'The 1.44 mJ is supplied by the agent that changes the field (for instance, the source winding up the current in an electromagnet). All induced electrical energy has a source: either a moving conductor or the agent changing the field.',
        ],
        ans: '(a) <i>q</i> = 6.0 mC; (b) <i>W</i> = 1.44 mJ',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A rod of length 0.50 m and mass 80 g falls between vertical rails (total circuit resistance <i>R</i> = 0.40 Ω) in a horizontal field <i>B</i> = 0.60 T perpendicular to the plane of the rails. Find its terminal velocity and the power dissipated. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) = (0.080)(10)(0.40)/[(0.60)<sup>2</sup>(0.50)<sup>2</sup>] = 0.32/0.090 = 3.6 m/s. <i>P</i> = <i>mgv</i><sub>t</sub> = 0.80 × 3.56 = 2.8 W (also <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i> = 2.8 W).',
          },
          {
            q: '[JEE Main] A 0.40 m rod on horizontal rails (<i>R</i> = 1.0 Ω) is pulled at 3.0 m/s in a vertical field <i>B</i> = 0.25 T. Find the external power and confirm it equals the power dissipated.',
            a: '<i>ε</i> = <i>Bℓv</i> = (0.25)(0.40)(3.0) = 0.30 V, so <i>I</i> = <i>ε</i>/<i>R</i> = 0.30 A. The external power equals the power dissipated: <i>P</i> = <i>F</i><sub>ext</sub> <i>v</i> = <i>BIℓv</i> = (0.25)(0.30)(0.40)(3.0) = 0.090 W = <i>I</i><sup>2</sup><i>R</i> = (0.30)<sup>2</sup>(1.0) = 0.090 W.',
          },
          {
            q: '[JEE Advanced] In a falling-rod problem, the rod reaches terminal velocity <i>v</i><sub>t</sub>. Show by energy conservation that the power dissipated equals <i>mg v</i><sub>t</sub>, and that this also equals <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i>.',
            a: 'At terminal velocity d<i>K</i>/d<i>t</i> = 0, so d<i>U</i><sub>g</sub>/d<i>t</i> + d<i>E</i><sub>th</sub>/d<i>t</i> = 0. d<i>U</i><sub>g</sub>/d<i>t</i> = −<i>mgv</i><sub>t</sub>, d<i>E</i><sub>th</sub>/d<i>t</i> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i>. Setting equal: <i>mgv</i><sub>t</sub> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i> gives <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). Substituting back: <i>mgv</i><sub>t</sub> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>(<i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>))<sup>2</sup>/<i>R</i> = <i>m</i><sup>2</sup><i>g</i><sup>2</sup><i>R</i><sup>2</sup>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>R</i>) = <i>m</i><sup>2</sup><i>g</i><sup>2</sup><i>R</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). Checks out dimensionally and algebraically.',
          },
          {
            q: '[JEE Advanced] Two identical rods fall side by side on the same rails (resistance <i>R</i> for the whole circuit). Compare their terminal velocities and power dissipation with the single-rod case. Explain using the energy method.',
            a: 'Both rods are in parallel across the same rails, so each has emf <i>Bℓv</i> and the total current is <i>I</i> = <i>Bℓv</i>/<i>R</i> (each rod carries <i>I</i>/2). The total magnetic drag is <i>BIℓ</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i>/<i>R</i>, the same as for one rod, but the weight to be balanced is 2<i>mg</i>. Terminal velocity: 2<i>mg</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub>/<i>R</i>, so <i>v</i><sub>t</sub> = 2<i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>), twice the single-rod value. Power dissipated: <i>P</i> = (<i>Bℓv</i><sub>t</sub>)<sup>2</sup>/<i>R</i> = 2<i>mgv</i><sub>t</sub>, four times the single-rod power.',
          },
          {
            q: '[JEE Advanced] A rod of length <i>ℓ</i> and mass <i>m</i> falls on vertical rails (total circuit resistance <i>R</i>) in a horizontal field <i>B</i> perpendicular to the plane of the rails. Show that the terminal velocity is independent of the initial conditions and depends only on <i>m</i>, <i>g</i>, <i>B</i>, <i>ℓ</i>, and <i>R</i>.',
            a: 'From <i>mg</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub>/<i>R</i>, <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>). No initial conditions appear. A consequence of terminal velocity being a force-balance condition, not a kinematics condition.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 441–443 ─────────────────────────
  {
    n: 'B',
    title: 'LR Circuits: Growth and Decay',
    extra: true,
    kalam:
      'Addendum B opens the LR circuit, which the chapter never sets up or solves — growth and decay of current with the time constant τ = L/R.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter derives <i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Aℓ</i> and <i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i>, but never solves the differential equation that results when a real inductor is connected to a real resistor. This is the LR circuit — the electromagnetic analogue of the RC circuit — and it appears in JEE Advanced every few years, usually fused with energy or with a second inductor.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>LR circuit: switch-on (growth).</b> At <i>t</i> = 0 a battery of emf <i>ε</i><sub>0</sub> is connected across a series <i>LR</i> circuit. Apply Kirchhoff’s voltage law:<br><i>ε</i><sub>0</sub> = <i>L</i> d<i>I</i>/d<i>t</i> + <i>IR</i>.<br>Rearrange:<br>d<i>I</i>/d<i>t</i> = −(<i>R</i>/<i>L</i>)(<i>I</i> − <i>ε</i><sub>0</sub>/<i>R</i>).<br>Define the <b>time constant</b> <i>τ</i> = <i>L</i>/<i>R</i>. The solution, with initial condition <i>I</i>(0) = 0, is:<br><i>I</i>(<i>t</i>) = (<i>ε</i><sub>0</sub>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>).',
      },
      {
        t: 'p',
        html: 'The voltage across the inductor decays as <i>V</i><sub>L</sub> = <i>ε</i><sub>0</sub> <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>; across the resistor it grows as <i>V</i><sub>R</sub> = <i>ε</i><sub>0</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>).<br>At <i>t</i> = <i>τ</i>: <i>I</i> = (<i>ε</i><sub>0</sub>/<i>R</i>)(1 − <i>e</i><sup>−1</sup>) = 0.632 (<i>ε</i><sub>0</sub>/<i>R</i>) — the current reaches 63.2% of its final value.',
      },
      {
        t: 'p',
        html: '<b>LR circuit: switch-off (decay).</b> At <i>t</i> = 0 the battery is removed and the inductor is shorted through the resistor. The equation is:<br><i>L</i> d<i>I</i>/d<i>t</i> + <i>RI</i> = 0,<br>with solution <i>I</i>(<i>t</i>) = <i>I</i><sub>0</sub> <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>, where <i>I</i><sub>0</sub> is the current at the moment of switching.',
      },
      {
        t: 'p',
        html: '<b>Energy check.</b> Once the current reaches <i>I</i><sub>max</sub> = <i>ε</i><sub>0</sub>/<i>R</i>, the inductor stores a fixed energy <i>U</i><sub>L</sub> = ½<i>LI</i><sub>max</sub><sup>2</sup> = ½<i>L</i>(<i>ε</i><sub>0</sub>/<i>R</i>)<sup>2</sup>. From then on the battery power <i>ε</i><sub>0</sub><i>I</i><sub>max</sub> = <i>I</i><sub>max</sub><sup>2</sup><i>R</i> is dissipated entirely as heat in the resistor and keeps adding up; only ½<i>LI</i><sub>max</sub><sup>2</sup> is ever stored. The 50–50 split is a property of RC charging, not of LR growth.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>τ</i> = <i>L</i>/<i>R</i>: henry/ohm = (V·s/A)/(V/A) = s. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — LR Growth: Current and Energy at a Given Time',
        q: 'A battery of emf 12 V is connected to a series combination of <i>L</i> = 40 mH and <i>R</i> = 6.0 Ω. (a) Find the time constant. (b) Find the maximum current. (c) Find the current at <i>t</i> = 10 ms. (d) Find the energy stored in the inductor at <i>t</i> = 10 ms. (e) Find the energy dissipated in the resistor in the first 10 ms.',
        steps: [
          '<b>Given:</b> <i>ε</i><sub>0</sub> = 12 V, <i>L</i> = 0.040 H, <i>R</i> = 6.0 Ω.',
          '<b>(a) Time constant.</b> <i>τ</i> = <i>L</i>/<i>R</i> = 0.040/6.0',
          '<b>(b) Maximum current.</b> <i>I</i><sub>max</sub> = <i>ε</i><sub>0</sub>/<i>R</i> = 12/6.0',
          '<b>(c) Current at <i>t</i> = 10 ms.</b> <i>t</i>/<i>τ</i> = 10/6.67 = 1.50.<br><i>I</i> = <i>I</i><sub>max</sub>(1 − <i>e</i><sup>−1.50</sup>) = 2.0(1 − 0.223) = 2.0 × 0.777',
          '<b>(d) Energy stored at <i>t</i> = 10 ms.</b> <i>U</i> = ½<i>LI</i><sup>2</sup> = ½(0.040)(1.55)<sup>2</sup> = 0.020 × 2.40',
          '<b>(e) Energy dissipated in the first 10 ms.</b> The battery delivers <i>ε</i><sub>0</sub><i>I</i><sub>max</sub>[<i>t</i> − <i>τ</i>(1 − exp(−<i>t</i>/<i>τ</i>))] = (12)(2.0)[10 − 6.67(0.777)] ms = 24 × 4.82 ms = 0.1157 J. Of this, 0.0483 J is stored in the inductor, so <i>W</i><sub>th</sub> = 0.1157 − 0.0483 = 0.0674 J ≈ 67 mJ (direct integration of <i>I</i><sup>2</sup><i>R</i> gives the same value). In the steady state the resistor dissipates <i>I</i><sub>max</sub><sup>2</sup><i>R</i> = 24 W continuously, so the heat produced “after a long time” has no finite limit; only ½<i>LI</i><sub>max</sub><sup>2</sup> = 0.080 J is stored.',
        ],
        ans: '(a) <i>τ</i> = 6.67 ms; (b) <i>I</i><sub>max</sub> = 2.0 A; (c) <i>I</i> = 1.55 A; (d) <i>U</i> = 48 mJ; (e) <i>W</i><sub>th</sub> ≈ 67 mJ',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — LR Decay with Energy Tracking',
        q: 'A series <i>LR</i> circuit carries a steady current <i>I</i><sub>0</sub> = 5.0 A when the battery is suddenly removed and the inductor is connected across the resistor only. Given <i>L</i> = 0.20 H and <i>R</i> = 10 Ω, find (a) the initial energy stored in the inductor, (b) the time constant, (c) the current at <i>t</i> = 20 ms, and (d) the total energy finally dissipated in the resistor.',
        steps: [
          '<b>(a) Initial energy.</b> <i>U</i><sub>i</sub> = ½<i>LI</i><sub>0</sub><sup>2</sup> = ½(0.20)(5.0)<sup>2</sup> = 0.10 × 25',
          '<b>(b) Time constant.</b> <i>τ</i> = <i>L</i>/<i>R</i> = 0.20/10',
          '<b>(c) Current at <i>t</i> = 20 ms.</b> <i>t</i>/<i>τ</i> = 1, so <i>I</i> = <i>I</i><sub>0</sub><i>e</i><sup>−1</sup> = 5.0 × 0.368',
          '<b>(d) Total energy dissipated.</b> All the initial magnetic energy ends up as heat in the resistor (the inductor eventually goes to zero current). <i>W</i><sub>th</sub> = ½<i>LI</i><sub>0</sub><sup>2</sup>',
          '<b>Check via integration:</b><br><i>W</i><sub>th</sub> = ∫<sub>0</sub><sup>∞</sup> <i>I</i><sup>2</sup><i>R</i> d<i>t</i> = <i>I</i><sub>0</sub><sup>2</sup><i>R</i> ∫<sub>0</sub><sup>∞</sup> <i>e</i><sup>−2<i>t</i>/<i>τ</i></sup> d<i>t</i> = <i>I</i><sub>0</sub><sup>2</sup><i>R</i> [<i>τ</i>/2] = <i>I</i><sub>0</sub><sup>2</sup><i>R</i>(<i>L</i>/(2<i>R</i>)) = ½<i>LI</i><sub>0</sub><sup>2</sup>.<br>Matches.',
        ],
        ans: '(a) <i>U</i><sub>i</sub> = 2.5 J; (b) <i>τ</i> = 20 ms; (c) <i>I</i> = 1.84 A; (d) <i>W</i> = 2.5 J',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] An <i>LR</i> circuit with <i>L</i> = 50 mH and <i>R</i> = 25 Ω is connected to a 10 V battery. Find the time constant and the maximum current.',
            a: '<i>τ</i> = <i>L</i>/<i>R</i> = 0.050/25 = 2.0 ms; <i>I</i><sub>max</sub> = 10/25 = 0.40 A.',
          },
          {
            q: '[JEE Main] In the above circuit, how long does it take for the current to reach 90% of its maximum value?',
            a: '<i>I</i>/<i>I</i><sub>max</sub> = 0.90 = 1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup> ⇒ <i>e</i><sup>−<i>t</i>/<i>τ</i></sup> = 0.10 ⇒ <i>t</i> = <i>τ</i> ln(10) = 2.0 × 2.303 = 4.61 ms.',
          },
          {
            q: '[JEE Advanced] A battery <i>ε</i><sub>0</sub>, resistor <i>R</i>, and inductor <i>L</i> are connected in series. Show that at any time <i>t</i> during growth, the sum of the energy stored in the inductor plus the energy dissipated in the resistor equals the energy delivered by the battery, <i>ε</i><sub>0</sub><i>I</i><sub>max</sub>[<i>t</i> − <i>τ</i>(1 − exp(−<i>t</i>/<i>τ</i>))]. Describe what happens as <i>t</i> → ∞.',
            a: '<i>U</i><sub>L</sub>(<i>t</i>) + <i>W</i><sub>th</sub>(<i>t</i>) equals the energy delivered by the battery, ∫ <i>ε</i><sub>0</sub><i>I</i> d<i>t</i> = <i>ε</i><sub>0</sub><i>I</i><sub>max</sub>[<i>t</i> − <i>τ</i>(1 − exp(−<i>t</i>/<i>τ</i>))], with <i>U</i><sub>L</sub> = ½<i>L</i>[<i>I</i>(<i>t</i>)]<sup>2</sup>. As <i>t</i> → ∞, <i>U</i><sub>L</sub> stays at ½<i>LI</i><sub>max</sub><sup>2</sup> while the heat grows as <i>I</i><sub>max</sub><sup>2</sup><i>Rt</i> without bound.',
          },
          {
            q: '[JEE Advanced] Two inductors <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> (with no mutual coupling) are connected in series with a resistor <i>R</i>. A battery <i>ε</i><sub>0</sub> is connected across this combination. Find the effective time constant of the circuit.',
            a: 'Effective <i>L</i><sub>eq</sub> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> for series inductors (no mutual coupling). <i>τ</i><sub>eq</sub> = (<i>L</i><sub>1</sub> + <i>L</i><sub>2</sub>)/<i>R</i>.',
          },
          {
            q: '[JEE Advanced] An <i>LR</i> circuit has time constant <i>τ</i>. Show that the power delivered by the battery at any time is <i>P</i><sub>bat</sub>(<i>t</i>) = (<i>ε</i><sub>0</sub><sup>2</sup>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)<i>e</i><sup>−<i>t</i>/<i>τ</i></sup> + (<i>ε</i><sub>0</sub><sup>2</sup>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)<sup>2</sup>. Identify the two terms physically.',
            a: '<i>P</i><sub>bat</sub> = <i>ε</i><sub>0</sub><i>I</i> = (<i>ε</i><sub>0</sub><sup>2</sup>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>). This splits into (<i>ε</i><sub>0</sub><sup>2</sup>/<i>R</i>)<i>e</i><sup>−<i>t</i>/<i>τ</i></sup>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>) (power going into the inductor, <i>V</i><sub>L</sub><i>I</i>) and (<i>ε</i><sub>0</sub><sup>2</sup>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>)<sup>2</sup> (power going into the resistor, <i>V</i><sub>R</sub><i>I</i>). Near <i>t</i> = 0 almost all of the (small) power goes to the inductor (the fraction is <i>e</i><sup>−<i>t</i>/<i>τ</i></sup> → 1); as <i>t</i> → ∞, all power goes to the resistor.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 443–446 ─────────────────────────
  {
    n: 'C',
    title: 'LC Oscillations: The Electromagnetic Spring-Mass Analogue',
    extra: true,
    kalam: 'Addendum C takes the two energy-storage formulas (magnetic and electric) and puts them together.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the energy stored in an inductor (<i>U</i> = ½<i>LI</i><sup>2</sup>) and in a capacitor (<i>U</i> = ½<i>CV</i><sup>2</sup>), but never puts them together. An inductor connected to a pre-charged capacitor will oscillate — charge sloshing back and forth between <i>L</i> and <i>C</i> — and the mathematics maps exactly onto the spring-mass system. This is the electromagnetic analogue of SHM, and JEE Advanced tests it often.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>LC circuit equation.</b> For a capacitor <i>C</i> with charge <i>q</i> and voltage <i>V</i> = <i>q</i>/<i>C</i>, Kirchhoff’s voltage law around a loop with an inductor <i>L</i> gives:<br><i>L</i> d<i>I</i>/d<i>t</i> + <i>q</i>/<i>C</i> = 0.<br>Since <i>I</i> = d<i>q</i>/d<i>t</i>:<br>d<sup>2</sup><i>q</i>/d<i>t</i><sup>2</sup> + (1/(<i>LC</i>)) <i>q</i> = 0.<br>This is the SHM equation with the substitution:',
      },
      {
        t: 'defgrid',
        title: 'Spring-mass (mechanical) — LC circuit (electromagnetic)',
        rows: [
          { k: 'Displacement <i>x</i>', v: 'Charge <i>q</i>' },
          { k: 'Velocity <i>v</i> = d<i>x</i>/d<i>t</i>', v: 'Current <i>I</i> = d<i>q</i>/d<i>t</i>' },
          { k: 'Spring constant <i>k</i>', v: '1/<i>C</i>' },
          { k: 'Mass <i>m</i>', v: 'Inductance <i>L</i>' },
          { k: 'Angular frequency <i>ω</i> = √(<i>k</i>/<i>m</i>)', v: '<i>ω</i> = √(1/(<i>LC</i>))' },
        ],
      },
      {
        t: 'p',
        html: '<b>Solution.</b> With initial charge <i>q</i><sub>0</sub> and zero current at <i>t</i> = 0:<br><i>q</i>(<i>t</i>) = <i>q</i><sub>0</sub> cos <i>ωt</i>,<br><i>I</i>(<i>t</i>) = −<i>q</i><sub>0</sub><i>ω</i> sin <i>ωt</i> = −<i>I</i><sub>0</sub> sin <i>ωt</i>,<br>where <i>I</i><sub>0</sub> = <i>q</i><sub>0</sub><i>ω</i> = <i>q</i><sub>0</sub>/√(<i>LC</i>).',
      },
      {
        t: 'p',
        html: '<b>Energy at any instant.</b> Total electromagnetic energy is conserved:<br><i>E</i> = <i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>LI</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) = ½<i>LI</i><sub>0</sub><sup>2</sup> = constant.<br>When <i>q</i> is maximum, <i>I</i> = 0 (all energy is electric). When <i>q</i> = 0, |<i>I</i>| = <i>I</i><sub>0</sub> (all energy is magnetic). The energy oscillates between the capacitor and the inductor at frequency 2<i>ω</i> — the same doubling you see in the kinetic and potential energy of a spring-mass system.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>ω</i><sup>2</sup> = 1/(<i>LC</i>). <i>L</i> has units H = V·s/A = Ω·s; <i>C</i> has units F = C/V. <i>LC</i> has units (V·s/A)(C/V) = C·s/A = A·s<sup>2</sup>/A = s<sup>2</sup>. So 1/(<i>LC</i>) has units s<sup>−2</sup>. √(1/(<i>LC</i>)) has units s<sup>−1</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — LC Oscillations: Finding ω and Energy',
        q: 'A 2.0 μF capacitor is charged to 200 V and then disconnected from the battery. It is connected across an inductor of 50 mH. (a) Find the angular frequency of oscillation. (b) Find the maximum current. (c) Find the total energy. (d) Find the charge on the capacitor when the current is half its maximum value.',
        steps: [
          '<b>Given:</b> <i>C</i> = 2.0 × 10<sup>−6</sup> F, <i>V</i><sub>0</sub> = 200 V, <i>L</i> = 50 × 10<sup>−3</sup> H.',
          '<b>(a) Angular frequency.</b><br><i>ω</i> = 1/√(<i>LC</i>) = 1/√((50 × 10<sup>−3</sup>)(2.0 × 10<sup>−6</sup>)) = 1/√(1.0 × 10<sup>−7</sup>) = 1/10<sup>−3.5</sup> = 10<sup>3.5</sup> = 3162 rad/s.<br>(More precisely: <i>ω</i> = 1/√(10<sup>−7</sup>) = 10<sup>3.5</sup> ≈ 3.16 × 10<sup>3</sup> rad/s.)',
          '<b>(b) Maximum current.</b> Initial charge: <i>q</i><sub>0</sub> = <i>CV</i><sub>0</sub> = (2.0 × 10<sup>−6</sup>)(200) = 4.0 × 10<sup>−4</sup> C.<br><i>I</i><sub>0</sub> = <i>q</i><sub>0</sub><i>ω</i> = (4.0 × 10<sup>−4</sup>)(3.16 × 10<sup>3</sup>)',
          '<b>(c) Total energy.</b> <i>E</i> = ½<i>CV</i><sub>0</sub><sup>2</sup> = ½(2.0 × 10<sup>−6</sup>)(200)<sup>2</sup> = (1.0 × 10<sup>−6</sup>)(40000)',
          'Check via the inductor: <i>E</i> = ½<i>LI</i><sub>0</sub><sup>2</sup> = ½(50 × 10<sup>−3</sup>)(1.26)<sup>2</sup> = 25 × 10<sup>−3</sup> × 1.59 = 3.98 × 10<sup>−2</sup> J. Matches.',
          '<b>(d) Charge when <i>I</i> = <i>I</i><sub>0</sub>/2.</b> Energy conservation: <i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>LI</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>).<br><i>q</i><sup>2</sup>/<i>C</i> + <i>LI</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/<i>C</i>.<br>When <i>I</i> = <i>I</i><sub>0</sub>/2: <i>I</i><sup>2</sup> = <i>I</i><sub>0</sub><sup>2</sup>/4 = <i>q</i><sub>0</sub><sup>2</sup><i>ω</i><sup>2</sup>/4 = <i>q</i><sub>0</sub><sup>2</sup>/(4<i>LC</i>). Substituting:<br><i>q</i><sup>2</sup>/<i>C</i> + <i>L</i>(<i>q</i><sub>0</sub><sup>2</sup>/(4<i>LC</i>)) = <i>q</i><sub>0</sub><sup>2</sup>/<i>C</i> ⇒ <i>q</i><sup>2</sup>/<i>C</i> + <i>q</i><sub>0</sub><sup>2</sup>/(4<i>C</i>) = <i>q</i><sub>0</sub><sup>2</sup>/<i>C</i> ⇒ <i>q</i><sup>2</sup> = (3/4)<i>q</i><sub>0</sub><sup>2</sup> ⇒ <i>q</i> = (√3/2) <i>q</i><sub>0</sub> ≈ 0.866 <i>q</i><sub>0</sub>.',
          'So when the current is half its maximum, the charge is 0.866 <i>q</i><sub>0</sub> (the symmetric result: <i>I</i> and <i>q</i> are 90° out of phase, so (<i>I</i>/<i>I</i><sub>0</sub>)<sup>2</sup> + (<i>q</i>/<i>q</i><sub>0</sub>)<sup>2</sup> = 1).',
        ],
        ans: '(a) <i>ω</i> = 3.16 × 10<sup>3</sup> rad/s; (b) <i>I</i><sub>0</sub> = 1.26 A; (c) <i>E</i> = 40 mJ; (d) <i>q</i> = 0.866 <i>q</i><sub>0</sub> = 3.46 × 10<sup>−4</sup> C',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — LC with a Resistor: Damped Oscillations',
        q: 'A series LC circuit has <i>L</i> = 1.0 H and <i>C</i> = 1.0 μF. A resistor <i>R</i> = 10 Ω is added in series. (a) Is the circuit oscillatory? (b) Find the angular frequency of oscillation (if any) and the time constant.',
        steps: [
          'The equation: <i>L</i> d<i>I</i>/d<i>t</i> + <i>RI</i> + <i>q</i>/<i>C</i> = 0. Substituting <i>I</i> = d<i>q</i>/d<i>t</i>:<br>d<sup>2</sup><i>q</i>/d<i>t</i><sup>2</sup> + (<i>R</i>/<i>L</i>) d<i>q</i>/d<i>t</i> + (1/(<i>LC</i>)) <i>q</i> = 0.<br>This is the damped SHM equation with damping constant <i>β</i> = <i>R</i>/(2<i>L</i>).',
          '<b>(a) Oscillatory criterion.</b> The circuit is oscillatory (underdamped) if <i>β</i> < <i>ω</i><sub>0</sub>, i.e. <i>R</i>/(2<i>L</i>) < 1/√(<i>LC</i>).<br><i>R</i><sub>cr</sub> = 2√(<i>L</i>/<i>C</i>) = 2√(1.0/(1.0 × 10<sup>−6</sup>)) = 2 × 10<sup>3</sup> = 2000 Ω.<br>With <i>R</i> = 10 Ω ≪ 2000 Ω, the circuit is <b>strongly underdamped</b> — it oscillates many times before the oscillations die out.',
          '<b>(b) Frequency and time constant.</b><br>Natural frequency without damping: <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(10<sup>−6</sup>) = 10<sup>3</sup> rad/s.<br>Damped frequency:<br><i>ω</i><sub>d</sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>β</i><sup>2</sup>) = √(1/(<i>LC</i>) − <i>R</i><sup>2</sup>/(4<i>L</i><sup>2</sup>)) = √(10<sup>6</sup> − 100/4) ≈ √(10<sup>6</sup> − 25) ≈ 999.987 rad/s.',
          'The oscillation period is <i>T</i><sub>d</sub> = 2π/<i>ω</i><sub>d</sub> ≈ 6.28 ms.<br>Time constant of the envelope: <i>τ</i><sub>env</sub> = 2<i>L</i>/<i>R</i> = 2(1.0)/10',
          'The amplitude decays as <i>e</i><sup>−<i>t</i>/<i>τ</i><sub>env</sub></sup>; it takes roughly 5<i>τ</i><sub>env</sub> = 1.0 s for the oscillations to become negligible. In that time, about 1.0/0.00628 ≈ 160 oscillations occur before the circuit is effectively dead.',
        ],
        ans: '(a) Yes, underdamped; (b) <i>ω</i><sub>d</sub> ≈ 999.99 rad/s (nearly the undamped value), <i>τ</i><sub>env</sub> = 0.20 s',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A 5.0 μF capacitor is charged to 100 V and discharged through a 20 mH inductor. Find the oscillation frequency.',
            a: '<i>f</i> = 1/(2π√(<i>LC</i>)) = 1/(2π√((20 × 10<sup>−3</sup>)(5 × 10<sup>−6</sup>))) = 1/(2π√(10<sup>−7</sup>)) = 1/(2π × 3.16 × 10<sup>−4</sup>) ≈ 503 Hz.',
          },
          {
            q: '[JEE Main] An LC circuit has maximum current 0.50 A, maximum charge 50 μC and maximum capacitor voltage 100 V. Find <i>L</i> and <i>C</i>.',
            a: '<i>I</i><sub>0</sub> = <i>q</i><sub>0</sub><i>ω</i> = <i>q</i><sub>0</sub>/√(<i>LC</i>), so <i>ω</i> = <i>I</i><sub>0</sub>/<i>q</i><sub>0</sub> = 0.50/(50 × 10<sup>−6</sup>) = 1.0 × 10<sup>4</sup> rad/s and √(<i>LC</i>) = 1.0 × 10<sup>−4</sup> s. The capacitance is <i>C</i> = <i>q</i><sub>0</sub>/<i>V</i><sub>0</sub> = (50 × 10<sup>−6</sup>)/100 = 0.50 μF, and then <i>L</i> = 1/(<i>ω</i><sup>2</sup><i>C</i>) = 1/[(1.0 × 10<sup>8</sup>)(0.50 × 10<sup>−6</sup>)] = 0.020 H = 20 mH.',
          },
          {
            q: '[JEE Advanced] In an LC circuit, the total energy is <i>E</i>. Show that at any instant the energy stored in the inductor equals the energy stored in the capacitor when <i>q</i> = <i>q</i><sub>0</sub>/√2.',
            a: 'Set <i>q</i><sup>2</sup>/(2<i>C</i>) = ½<i>LI</i><sup>2</sup> = ½(<i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>)) ⇒ <i>q</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/2 ⇒ <i>q</i> = <i>q</i><sub>0</sub>/√2.',
          },
          {
            q: '[JEE Advanced] A capacitor <i>C</i><sub>1</sub> charged to voltage <i>V</i><sub>0</sub> is connected to an uncharged capacitor <i>C</i><sub>2</sub> through an inductor <i>L</i> (no resistance). Find the maximum current and the common voltage of the two capacitors at that instant.',
            a: 'Equal voltage <i>V</i><sub>f</sub> = <i>C</i><sub>1</sub><i>V</i><sub>0</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) (charge conservation). Maximum current: initial energy <i>E</i><sub>i</sub> = ½<i>C</i><sub>1</sub><i>V</i><sub>0</sub><sup>2</sup>. At maximum current, capacitors have equal voltage <i>V</i><sub>f</sub>, so <i>E</i><sub>f</sub> = ½(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)<i>V</i><sub>f</sub><sup>2</sup> = ½(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)(<i>C</i><sub>1</sub><i>V</i><sub>0</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>))<sup>2</sup> = <i>C</i><sub>1</sub><sup>2</sup><i>V</i><sub>0</sub><sup>2</sup>/(2(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)). The difference <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub> = ½<i>LI</i><sub>max</sub><sup>2</sup>. So <i>I</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>L</i>(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>))).',
          },
          {
            q: '[JEE Advanced] Two LC circuits with <i>L</i><sub>1</sub>, <i>C</i><sub>1</sub> and <i>L</i><sub>2</sub>, <i>C</i><sub>2</sub> are coupled inductively with mutual inductance <i>M</i>. Find the two normal-mode frequencies in terms of <i>L</i><sub>1</sub>, <i>L</i><sub>2</sub>, <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>M</i>.',
            a: 'The coupled equations give two eigenfrequencies: <i>ω</i><sub>±</sub><sup>2</sup> = [<i>ω</i><sub>1</sub><sup>2</sup> + <i>ω</i><sub>2</sub><sup>2</sup> ± √((<i>ω</i><sub>1</sub><sup>2</sup> − <i>ω</i><sub>2</sub><sup>2</sup>)<sup>2</sup> + 4<i>k</i><sup>2</sup><i>ω</i><sub>1</sub><sup>2</sup><i>ω</i><sub>2</sub><sup>2</sup>)]/[2(1 − <i>k</i><sup>2</sup>)], where <i>k</i><sup>2</sup> = <i>M</i><sup>2</sup>/(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>), <i>ω</i><sub>1</sub> = 1/√(<i>L</i><sub>1</sub><i>C</i><sub>1</sub>) and <i>ω</i><sub>2</sub> = 1/√(<i>L</i><sub>2</sub><i>C</i><sub>2</sub>). For identical circuits (<i>ω</i><sub>1</sub> = <i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub>) these are the symmetric and antisymmetric modes, <i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup>/(1 ± <i>k</i>).',
          },
        ],
      },
    ],
  },
];
