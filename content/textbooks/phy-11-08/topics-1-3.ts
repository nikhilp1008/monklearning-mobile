import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 01 to 03: pp. 547–569 of the Class 11 Physics Master
 * Reference, word for word: Elasticity, Stress, and Strain (pp. 547–555),
 * Elastic Moduli (pp. 556–562) and Poisson’s Ratio and Elastic Energy
 * (pp. 563–569). The chapter’s title and contents (pp. 545–546) are not
 * copied. Each is split at its Sections 1 to 8. Figure 8.1 (caption p. 550,
 * drawn on p. 551) is redrawn in lib/diagrams/physics-11-08.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 547–555 ─────────────────────────
  {
    n: '01',
    title: 'Elasticity, Stress, and Strain',
    kalam: 'That “springing back” is elasticity — the property by which a body regains its original shape and size once the deforming force is removed.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Notation conventions (Chapter 8 — fixed here, carried through all topics):</b><br>• Normal / longitudinal stress: <i>σ</i> | Shear (tangential) stress: <i>τ</i><br>• Longitudinal strain: <i>ε</i> | Shear strain: <i>φ</i> (radians) | Volume strain: Δ<i>V</i>/<i>V</i><br>• Young’s modulus: <i>Y</i> | Bulk modulus: <i>B</i> (some texts use <i>K</i>) | Modulus of rigidity / shear modulus: <i>η</i> (some texts use <i>G</i>)<br>• Poisson’s ratio: <i>ν</i> — <b>note:</b> many Indian coaching texts write this as <i>σ</i>, which clashes with stress. We use <i>ν</i> throughout to keep the symbols distinct.<br>• Compressibility: <i>k</i> = 1/<i>B</i>',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the bedrock of the whole chapter. CBSE Boards reliably ask a 2–3 mark definition or a Young’s-modulus numerical, plus a stress-strain graph question. JEE Main almost always carries 1 question (elongation, wires in series/parallel, or graph reading). NEET asks ~1 question, usually conceptual (“which is more elastic?”) or a breaking-stress numerical. JEE Advanced rarely tests this alone — it bundles it with thermal stress, rotation, or energy methods.',
      },
      {
        t: 'p',
        html: 'Pick up a steel ruler and a rubber band. Pull both. The rubber stretches dramatically and snaps back; the ruler barely moves but also returns to shape the instant you let go. That “springing back” is <b>elasticity</b> — the property by which a body regains its original shape and size once the deforming force is removed. The opposite extreme is <b>plasticity</b>: wet clay or chewing gum holds whatever new shape you force on it. Most real solids live somewhere on this spectrum.<br><br>Here’s the part that surprises everyone: in everyday language we’d call the rubber band “more elastic” because it stretches more. <b>Physics says the exact opposite.</b> Steel is more elastic than rubber, because for the same pull, steel resists deformation far more strongly and snaps back more faithfully. Elasticity is about the strength of the restoring tendency, not the size of the stretch. Hold on to that — it’s the single most common conceptual trap in this chapter.<br><br>So what’s happening inside? Think about it this way… imagine the atoms of a solid connected by countless tiny springs (the inter-atomic bonds). At rest, every spring sits at its natural length. The moment you apply a force, you stretch or squeeze these molecular springs, and just like any spring, they push back. That collective push-back is the body’s internal <b>restoring force</b>. Pull harder and the springs stretch more and push back harder — up to a point.',
      },
      {
        t: 'p',
        html: 'To compare different materials and different-sized objects fairly, we need two “normalised” quantities. A thick steel cable and a thin steel wire are the same material, but the cable obviously withstands more force — so raw force is a bad measure. Instead we use <b>stress</b>: the restoring force per unit area of cross-section. Likewise, a 10 m wire stretching by 1 cm is very different from a 10 cm wire stretching by 1 cm, so raw elongation is a bad measure too. Instead we use <b>strain</b>: the change in dimension as a fraction of the original. Stress is the “cause per unit area,” strain is the “effect per unit size.” Normalising this way lets us talk about the material itself, independent of how much of it we happen to have.<br><br>A neat market analogy: stress is like the price per kilogram of vegetables (force spread over area), not the total bill (raw force). Strain is like the percentage discount (fractional change), not the rupees knocked off. Both are ratios, and ratios are what let you compare a roadside thela with a supermarket fairly.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Everything in this topic — especially the clean proportional relationship between stress and strain (Hooke’s law) — holds only within the elastic limit. Push a material past that limit and three things break our tidy picture: (1) the proportionality fails, (2) the body no longer fully returns to its original shape (permanent “set”), and (3) eventually it fractures. We also assume the deformation is <b>small</b>, the temperature is constant (heating changes a material’s stiffness), and the material is <b>homogeneous and isotropic</b> (same properties everywhere and in every direction). Drop any of these — large deformations, hot wires, or wood that’s stiffer along the grain than across it — and the simple formulas stop being reliable.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Stress',
        main: 'restoring force per unit area (equal in magnitude to the applied force at equilibrium):<br><i>σ</i> = <i>F</i>/<i>A</i>',
        legend: ['<i>F</i> = applied/restoring force (N)', '<i>A</i> = area of cross-section (m<sup>2</sup>)'],
        note: 'SI unit: N m<sup>−2</sup> = pascal (Pa) | <b>Dimensional formula:</b> [M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]<br>Three types: longitudinal (tensile, due to stretching / compressive, due to squeezing), volumetric/hydraulic (<i>σ</i> = <i>P</i>, normal force on all surfaces), and shear/tangential (<i>τ</i> = <i>F</i>/<i>A</i>, force parallel to a surface).',
      },
      {
        t: 'formula',
        kicker: 'Strain',
        main: 'fractional change in a dimension:<br><i>ε</i> = (change in dimension)/(original dimension)',
        legend: [],
        note: '<b>Dimensionless and unitless.</b> Dimensional formula: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]<br>Longitudinal: <i>ε</i> = Δ<i>L</i>/<i>L</i> | Volume: Δ<i>V</i>/<i>V</i> | Shear: <i>φ</i> = <i>x</i>/<i>h</i> (<i>x</i> = relative slide of faces, <i>h</i> = separation; in radians)',
      },
      {
        t: 'formula',
        kicker: 'Hooke’s Law',
        main: '(within elastic limit):<br><i>σ</i> ∝ <i>ε</i> ⇒ <i>σ</i> = <i>Eε</i>',
        legend: ['<i>E</i> = modulus of elasticity, a property of the <b>material only</b> (independent of shape/size)'],
        note: 'Unit Pa, dimensions [M L<sup>−1</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Young’s modulus',
        main: '(longitudinal stress / longitudinal strain):<br><i>Y</i> = <i>σ</i>/<i>ε</i> = (<i>F</i>/<i>A</i>)/(Δ<i>L</i>/<i>L</i>) = <i>FL</i>/(<i>A</i> Δ<i>L</i>) = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Bulk modulus',
        main: '(volume stress / volume strain):<br><i>B</i> = −<i>P</i>/(Δ<i>V</i>/<i>V</i>) = −<i>V</i> d<i>P</i>/d<i>V</i>',
        legend: [],
        note: 'The minus sign reflects that volume decreases as pressure increases. Compressibility <i>k</i> = 1/<i>B</i>. For a gas: isothermal <i>B</i> = <i>P</i>, adiabatic <i>B</i> = <i>γP</i>.',
      },
      {
        t: 'formula',
        kicker: 'Modulus of rigidity / shear modulus',
        main: '(shear stress / shear strain):<br><i>η</i> = <i>τ</i>/<i>φ</i> = (<i>F</i>/<i>A</i>)/<i>φ</i> (<i>φ</i> in radians)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Poisson’s ratio',
        main: '(lateral strain / longitudinal strain):<br><i>ν</i> = −(lateral strain)/(longitudinal strain) = −(Δ<i>r</i>/<i>r</i>)/(Δ<i>L</i>/<i>L</i>)',
        legend: [],
        note: 'Dimensionless. Practical range 0 ≤ <i>ν</i> ≤ 0.5; most metals ≈ 0.2–0.4.',
      },
      {
        t: 'p',
        html: 'All three moduli have unit Pa and dimensions [M L<sup>−1</sup> T<sup>−2</sup>]. Solids possess all three; liquids and gases possess only the bulk modulus, since they cannot sustain shear.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Young’s modulus of a suspended wire.</b> Consider a wire of natural length <i>L</i> and radius <i>r</i>, clamped rigidly at the top, with a mass <i>M</i> hung from the lower end. In equilibrium the restoring force equals the weight, so the stretching force is <i>F</i> = <i>Mg</i>. Why <i>Mg</i>? Because the wire is in equilibrium — the upward restoring force balances the downward weight exactly.<br><br>The cross-sectional area is <i>A</i> = π<i>r</i><sup>2</sup>, so the longitudinal stress is <i>σ</i> = <i>Mg</i>/(π<i>r</i><sup>2</sup>).<br><br>If the wire elongates by Δ<i>L</i>, the longitudinal strain is <i>ε</i> = Δ<i>L</i>/<i>L</i>.<br><br>By definition, Young’s modulus is the ratio of these:<br><i>Y</i> = <i>σ</i>/<i>ε</i> = (<i>Mg</i>/(π<i>r</i><sup>2</sup>))/(Δ<i>L</i>/<i>L</i>) = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>)<br>This is the working formula behind Searle’s experiment. Notice <i>Y</i> contains only material/geometry inputs you can measure — it does <b>not</b> depend on how the wire is loaded, only on the material.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Elongation of a rod under its own weight.</b> Now remove the hanging mass; the rod stretches under its own weight. The subtlety: the tension is <b>not uniform</b>. The top of the rod must support everything below it, while the very bottom supports almost nothing.<br><br>Take a rod of length <i>L</i>, area <i>A</i>, density <i>ρ</i>, hanging from its top. Consider a thin element of thickness d<i>x</i> at a height <i>x</i> from the bottom. The weight it must support is the weight of all material below it:<br><i>T</i>(<i>x</i>) = <i>ρAxg</i><br>The stress in this element is <i>σ</i> = <i>T</i>/<i>A</i> = <i>ρxg</i>, so its strain is <i>ε</i> = <i>σ</i>/<i>Y</i> = <i>ρxg</i>/<i>Y</i>, and the element stretches by<br>d(Δ<i>L</i>) = (<i>ρxg</i>/<i>Y</i>) d<i>x</i><br>Integrating over the whole rod:<br>Δ<i>L</i> = ∫<sub>0</sub><sup><i>L</i></sup> (<i>ρgx</i>/<i>Y</i>) d<i>x</i> = <i>ρgL</i><sup>2</sup>/(2<i>Y</i>) = <i>MgL</i>/(2<i>AY</i>)<br>The factor of ½ is the punchline: it’s as if the rod’s entire weight acted at its centre of mass, halfway down. This “average tension” shortcut saves time in exams.',
      },
      { t: 'p', html: 'Trace it left to right:' },
      {
        t: 'proc',
        title: 'Procedure — Reading a stress-strain curve',
        steps: [
          '<b>Proportional limit (P):</b> straight-line region; Hooke’s law holds; slope = <i>Y</i>.',
          '<b>Elastic limit (E):</b> still returns to original shape, but the line is no longer perfectly straight.',
          '<b>Yield point:</b> strain shoots up with little extra stress; permanent deformation begins (plastic region starts).',
          '<b>Ultimate tensile strength:</b> the highest stress the material can bear.',
          '<b>Fracture / breaking point:</b> the material snaps.',
        ],
      },
      {
        t: 'p',
        html: 'A <b>ductile</b> material (copper, steel) has a long plastic region between yield and fracture — it can be drawn into wires. A <b>brittle</b> material (glass, cast iron) fractures almost immediately after the elastic limit. The area under the curve up to a point equals the energy absorbed per unit volume.',
      },
      { t: 'fig', id: 'p11-08-fig-8.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A steel wire of length 3.0 m and cross-sectional area 2.0 mm<sup>2</sup> stretches by 0.60 mm when an 8.0 kg load is hung from it. Find Young’s modulus of steel. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Given:</b> <i>L</i> = 3.0 m, <i>A</i> = 2.0 mm<sup>2</sup> = 2.0 × 10<sup>−6</sup> m<sup>2</sup>, Δ<i>L</i> = 0.60 mm = 6.0 × 10<sup>−4</sup> m, <i>M</i> = 8.0 kg.',
          'Stretching force: <i>F</i> = <i>Mg</i> = 8.0 × 10 = 80 N.',
          '<i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) = (80 × 3.0)/((2.0 × 10<sup>−6</sup>)(6.0 × 10<sup>−4</sup>)) = 240/(1.2 × 10<sup>−9</sup>)',
          'This matches the textbook value for steel — a good sanity check. <b>Always carry the unit (Pa) into the final line.</b>',
        ],
        ans: '<i>Y</i> = 2.0 × 10<sup>11</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two wires, A and B, are made of the <b>same</b> material. Wire B is twice as long as A and has twice the radius. The same load hangs from each. By what factor does A’s elongation exceed B’s? Also, is A “more elastic” than B?',
        steps: [
          '<b>The trap:</b> students rush to plug numbers, or they confuse “stretches more” with “more elastic.”',
          '<b>Speed method:</b> Since the material is the same, <i>Y</i> is identical for both — don’t compute it. From Δ<i>L</i> = <i>FL</i>/(<i>AY</i>) = <i>FL</i>/(π<i>r</i><sup>2</sup><i>Y</i>), with <i>F</i>, <i>Y</i>, π common:<br>Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup><br>Δ<i>L</i><sub><i>A</i></sub>/Δ<i>L</i><sub><i>B</i></sub> = (<i>L</i><sub><i>A</i></sub>/<i>r</i><sub><i>A</i></sub><sup>2</sup>)/(<i>L</i><sub><i>B</i></sub>/<i>r</i><sub><i>B</i></sub><sup>2</sup>) = (<i>L</i>/<i>r</i><sup>2</sup>)/(2<i>L</i>/(2<i>r</i>)<sup>2</sup>) = (<i>L</i>/<i>r</i><sup>2</sup>)/(2<i>L</i>/(4<i>r</i><sup>2</sup>)) = 1/(1/2) = 2',
          'So <b>A elongates twice as much.</b> Mentally: B is longer (×2, stretches more) but fatter (×4 area, stretches less), net effect ÷2.',
          '<b>On elasticity:</b> A stretches more, but both are the same material with the same <i>Y</i> — so they are equally elastic. Elasticity is a material property; geometry changes the stretch, never the elasticity. Eliminate any option claiming one is “more elastic.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A composite hangs vertically: a steel wire (length 1.0 m, area 1.0 mm<sup>2</sup>, <i>Y</i><sub><i>s</i></sub> = 2.0 × 10<sup>11</sup> Pa) joined end-to-end to a copper wire (length 1.0 m, area 2.0 mm<sup>2</sup>, <i>Y</i><sub><i>c</i></sub> = 1.0 × 10<sup>11</sup> Pa). A 10 kg mass hangs from the bottom. Find the total elongation. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Two concepts:</b> (i) wires in <b>series</b> carry the same tension, and (ii) total elongation is the sum of individual elongations.',
          'Tension throughout: <i>F</i> = <i>Mg</i> = 100 N.',
          'Steel: Δ<i>L</i><sub><i>s</i></sub> = <i>FL</i><sub><i>s</i></sub>/(<i>A</i><sub><i>s</i></sub><i>Y</i><sub><i>s</i></sub>) = (100 × 1.0)/((1.0 × 10<sup>−6</sup>)(2.0 × 10<sup>11</sup>)) = 100/(2.0 × 10<sup>5</sup>) = 5.0 × 10<sup>−4</sup> m<br>Copper: Δ<i>L</i><sub><i>c</i></sub> = <i>FL</i><sub><i>c</i></sub>/(<i>A</i><sub><i>c</i></sub><i>Y</i><sub><i>c</i></sub>) = (100 × 1.0)/((2.0 × 10<sup>−6</sup>)(1.0 × 10<sup>11</sup>)) = 100/(2.0 × 10<sup>5</sup>) = 5.0 × 10<sup>−4</sup> m',
          '(Here both pieces happen to stretch equally because their <i>L</i>/(<i>YA</i>) values coincide — a nice coincidence, not a rule.)',
        ],
        ans: 'Δ<i>L</i><sub>total</sub> = Δ<i>L</i><sub><i>s</i></sub> + Δ<i>L</i><sub><i>c</i></sub> = 1.0 × 10<sup>−3</sup> m = 1.0 mm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform rod of mass <i>M</i>, length <i>L</i>, and uniform cross-section <i>A</i> lies on a frictionless horizontal table and rotates with angular velocity <i>ω</i> about a vertical axis through <b>one end</b>. Derive the elongation of the rod. Evaluate it for <i>M</i> = 2.0 kg, <i>L</i> = 1.0 m, <i>ω</i> = 10 rad s<sup>−1</sup>, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa.',
        steps: [
          'The tension is non-uniform: at a distance <i>x</i> from the axis, the tension must supply the centripetal force for all the mass beyond <i>x</i>. With linear mass density <i>λ</i> = <i>M</i>/<i>L</i>, consider the portion from <i>x</i> to <i>L</i>:<br><i>T</i>(<i>x</i>) = ∫<sub><i>x</i></sub><sup><i>L</i></sup> <i>λω</i><sup>2</sup><i>x</i>′ d<i>x</i>′ = (<i>Mω</i><sup>2</sup>/(2<i>L</i>))(<i>L</i><sup>2</sup> − <i>x</i><sup>2</sup>)',
          'A small element d<i>x</i> at position <i>x</i> feels stress <i>T</i>(<i>x</i>)/<i>A</i> and so stretches by d(Δ<i>L</i>) = (<i>T</i>(<i>x</i>)/(<i>AY</i>)) d<i>x</i>. Integrating:<br>Δ<i>L</i> = ∫<sub>0</sub><sup><i>L</i></sup> (<i>Mω</i><sup>2</sup>/(2<i>LAY</i>))(<i>L</i><sup>2</sup> − <i>x</i><sup>2</sup>) d<i>x</i> = (<i>Mω</i><sup>2</sup>/(2<i>LAY</i>))(<i>L</i><sup>3</sup> − <i>L</i><sup>3</sup>/3) = <i>Mω</i><sup>2</sup><i>L</i><sup>2</sup>/(3<i>AY</i>)',
          '<b>Numerically:</b> Δ<i>L</i> = (2.0)(10)<sup>2</sup>(1.0)<sup>2</sup>/(3(1.0 × 10<sup>−6</sup>)(2.0 × 10<sup>11</sup>)) = 200/(6.0 × 10<sup>5</sup>) ≈ 3.3 × 10<sup>−4</sup> m ≈ 0.33 mm',
          'The ⅓ here (versus the ½ for self-weight) comes from the tension varying quadratically with <i>x</i>, not linearly — a classic discriminator between students who memorise and students who derive.',
        ],
        ans: 'Δ<i>L</i> = <i>Mω</i><sup>2</sup><i>L</i><sup>2</sup>/(3<i>AY</i>) ≈ 3.3 × 10<sup>−4</sup> m ≈ 0.33 mm',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A brass wire 2.0 m long and of cross-section 0.50 mm<sup>2</sup> is stretched by 1.0 mm under a load. If <i>Y</i><sub>brass</sub> = 1.0 × 10<sup>11</sup> Pa, find the load. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '25 N (i.e. a mass of 2.5 kg)',
          },
          {
            q: '[NEET] The bulk modulus of water is 2.2 × 10<sup>9</sup> Pa. What fractional change in volume occurs when water is subjected to an extra pressure of 1.1 × 10<sup>7</sup> Pa?',
            a: '−5.0 × 10<sup>−3</sup> (a 0.5% decrease)',
          },
          {
            q: '[JEE Main] A wire elongates by 1 mm under a load. A second wire of the same material but with double the length and double the diameter is subjected to the same load. Find its elongation.',
            a: '0.5 mm',
          },
          {
            q: '[JEE Main] The breaking stress of a metal is 4.0 × 10<sup>8</sup> Pa and its density is 8.0 × 10<sup>3</sup> kg m<sup>−3</sup>. Find the greatest length of a wire of this metal that can hang vertically without breaking. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '5.0 × 10<sup>3</sup> m = 5 km',
          },
          {
            q: '[JEE Advanced] A solid cube of side <i>L</i> and shear modulus <i>η</i> has its bottom face fixed. A tangential force <i>F</i> is applied to the top face. Show that the top face displaces by <i>x</i> = <i>F</i>/(<i>ηL</i>), and find <i>x</i> for <i>L</i> = 0.10 m, <i>η</i> = 5.0 × 10<sup>10</sup> Pa, <i>F</i> = 5.0 × 10<sup>5</sup> N.',
            a: '<i>x</i> = 1.0 × 10<sup>−4</sup> m = 0.1 mm',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A wire of length <i>L</i> and area <i>A</i> has Young’s modulus <i>Y</i>. It is stretched by an amount <i>ℓ</i>. The work done in stretching the wire is:',
        opts: [
          { label: '<i>YAℓ</i><sup>2</sup>/(2<i>L</i>)', nudge: null },
          {
            label: '<i>YAℓ</i><sup>2</sup>/<i>L</i>',
            nudge: '<b>(b)</b> forgets the factor ½ — the force builds up gradually from 0 to <i>F</i>, so we use the average <i>F</i>/2, not <i>F</i>.',
          },
          { label: '<i>YAℓ</i>/(2<i>L</i>)', nudge: '<b>(c)</b> drops a power of <i>ℓ</i> (dimensionally wrong — a quick dimension check kills it).' },
          {
            label: '<i>Yℓ</i><sup>2</sup>/(2<i>AL</i>)',
            nudge: '<b>(d)</b> misplaces <i>A</i> in the denominator; energy must rise with more material, so <i>A</i> belongs on top.',
          },
        ],
        correct: 0,
        solution: 'Work done = ½<i>Fℓ</i> = ½(<i>YAℓ</i>/<i>L</i>)<i>ℓ</i> = <i>YAℓ</i><sup>2</sup>/(2<i>L</i>), using <i>F</i> = <i>YAℓ</i>/<i>L</i> from <i>Y</i> = <i>FL</i>/(<i>Aℓ</i>).',
      },
      {
        t: 'mcq',
        q: 'Two wires of the same material and same length have radii <i>r</i> and 2<i>r</i>. They are stretched by the same force. The ratio of their elongations (thin : thick) is:',
        opts: [
          { label: '1 : 1', nudge: '<b>(a)</b> assumes “same material, same length ⇒ same stretch,” ignoring area entirely.' },
          { label: '2 : 1', nudge: '<b>(b)</b> uses radius to the first power instead of squaring it — the most frequent error.' },
          { label: '4 : 1', nudge: null },
          { label: '1 : 4', nudge: '<b>(d)</b> is the right magnitude but flipped — careless ordering of the ratio.' },
        ],
        correct: 2,
        solution: 'Δ<i>L</i> ∝ 1/<i>A</i> = 1/(π<i>r</i><sup>2</sup>), so Δ<i>L</i><sub>thin</sub>/Δ<i>L</i><sub>thick</sub> = (2<i>r</i>)<sup>2</sup>/<i>r</i><sup>2</sup> = 4.',
      },
      {
        t: 'mcq',
        q: 'Which statement is correct?',
        opts: [
          {
            label: 'Steel is less elastic than rubber because it stretches less.',
            nudge: '<b>(a)</b> is the headline misconception — “stretches more” feels like “more elastic” but it’s backwards.',
          },
          { label: 'A material with a larger Young’s modulus is more elastic.', nudge: null },
          { label: 'Strain has the unit pascal.', nudge: '<b>(c)</b> confuses strain (dimensionless) with stress/modulus (pascal).' },
          {
            label: 'Bulk modulus applies only to solids.',
            nudge: '<b>(d)</b> is inverted: bulk modulus applies to all states of matter — in fact gases and liquids possess only bulk modulus.',
          },
        ],
        correct: 1,
        solution: 'Higher <i>Y</i> ⇒ greater stress needed for the same strain ⇒ stronger restoring tendency ⇒ more elastic.',
      },
      {
        t: 'mcq',
        q: 'A material has Poisson’s ratio <i>ν</i> = 0.5. When stretched, the change in its volume is:',
        opts: [
          { label: 'positive', nudge: '<b>(a)</b> assumes stretching always adds volume — true only when <i>ν</i> < 0.5.' },
          { label: 'negative', nudge: '<b>(b)</b> would require <i>ν</i> > 0.5, which is physically impossible for ordinary materials.' },
          { label: 'zero', nudge: null },
          {
            label: 'cannot be determined',
            nudge: '<b>(d)</b> gives up too early; the value <i>ν</i> = 0.5 is precisely the special case that can be determined.',
          },
        ],
        correct: 2,
        solution: '<i>ν</i> = 0.5 marks the incompressible limit: the lateral contraction exactly compensates the longitudinal extension, so volume stays constant (Δ<i>V</i> = 0). (For a thin rod, fractional volume change ≈ <i>ε</i>(1 − 2<i>ν</i>), which is zero when <i>ν</i> = 0.5.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Radius vs. diameter.</b> Examiners love quoting the diameter. Forgetting to halve it before squaring throws your area off by a factor of <b>4</b>, and your <i>Y</i> along with it. Underline “radius” or “diameter” the moment you read the question.',
          '<b>“More stretch = more elastic.”</b> Wrong. Higher Young’s modulus means more elastic. Rubber stretches a lot but is less elastic than steel.',
          '<b>Putting units on strain.</b> Strain is a pure ratio — dimensionless, no pascals, no metres. Only stress and the moduli carry pascals.',
          '<b>Dropping the ½ in energy and self-weight problems.</b> Elastic energy uses average force (½<i>Fℓ</i>); self-weight elongation uses effective length <i>L</i>/2. The ½ is physics, not decoration.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “same material” comparisons, <b>never compute <i>Y</i></b>. Cancel it immediately and reduce everything to a proportionality: Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup> (or <i>FL</i>/<i>r</i><sup>2</sup>). A 30-second ratio replaces a messy two-line calculation — and you can’t make an arithmetic slip on a number you never wrote down.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Stress</b> <i>σ</i> = <i>F</i>/<i>A</i> → unit <b>Pa</b>, dimensions [M L<sup>−1</sup> T<sup>−2</sup>]. <b>Strain</b> <i>ε</i> = Δ<i>x</i>/<i>x</i> → <b>dimensionless</b>, no unit.',
            note: '',
          },
          { f: 'Hooke’s law', note: '<i>σ</i> = <i>Eε</i> within the elastic limit; <i>E</i> depends on material only.' },
          {
            f: 'Young’s',
            note: '<i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) | <b>Bulk:</b> <i>B</i> = −<i>P</i>/(Δ<i>V</i>/<i>V</i>), <i>k</i> = 1/<i>B</i> | <b>Rigidity:</b> <i>η</i> = <i>τ</i>/<i>φ</i>',
          },
          {
            f: 'Self-weight elongation',
            note: 'Δ<i>L</i> = <i>MgL</i>/(2<i>AY</i>) = <i>ρgL</i><sup>2</sup>/(2<i>Y</i>) | <b>Max hanging length:</b> <i>ℓ</i><sub>max</sub> = <i>σ</i><sub>break</sub>/(<i>ρg</i>)',
          },
          {
            f: 'Elastic energy',
            note: '<i>U</i> = ½<i>σεV</i> = ½<i>F</i> Δ<i>L</i>; energy density <i>u</i> = ½<i>σε</i> = <i>σ</i><sup>2</sup>/(2<i>Y</i>)',
          },
          { f: 'Solids → all three moduli; <b>liquids & gases → bulk modulus only.</b>', note: '' },
        ],
        aids: [
          '“Stress is the squeeze, strain is the change.”',
          '“More <i>Y</i>, more elastic.” (Steel beats rubber.)',
          'Stress-strain milestones in order: <b>P</b>roportional → <b>E</b>lastic → <b>Y</b>ield → <b>U</b>ltimate → <b>F</b>racture → “Please Eat Your Usual Food.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 556–562 ─────────────────────────
  {
    n: '02',
    title: 'Elastic Moduli',
    kalam: 'The four constants are not independent — there are really only two.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Notation (carried from Topic 01):</b> stress <i>σ</i> (shear <i>τ</i>) · strain <i>ε</i> (shear <i>φ</i>, radians) · Young’s <i>Y</i> · Bulk <i>B</i> · Rigidity <i>η</i> · Poisson’s ratio <i>ν</i> (some texts write this <i>σ</i> — we keep <i>ν</i> to avoid clashing with stress) · compressibility <i>k</i> = 1/<i>B</i> (here <i>k</i> is used for both the spring constant and the compressibility — read it from context).',
      },
      {
        t: 'p',
        html: 'This topic builds directly on Topic 01. There you met the four elastic constants and learned where each comes from. Here we put them to work: treating a wire as a spring, combining wires, handling gases and fluids under pressure, and discovering that the four constants are secretly only two.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A workhorse topic. JEE Main loves the “wire-as-a-spring” idea and series/parallel combinations (1 question almost every year). NEET favours bulk modulus / compressibility numericals and “which modulus applies” conceptuals. JEE Advanced reaches for the relations between elastic constants (<i>Y</i>, <i>B</i>, <i>η</i>, <i>ν</i>) and process-dependent gas moduli. CBSE Boards ask a 2–3 mark bulk-modulus or shear-modulus numerical.',
      },
      {
        t: 'p',
        html: 'In Topic 01 you learned that a material can be deformed in three independent ways — you can <b>stretch</b> it (length changes), <b>shear</b> it (shape changes), or <b>squeeze</b> it from all sides (volume changes) — and each has its own “stiffness number”: Young’s modulus <i>Y</i>, the modulus of rigidity <i>η</i>, and the bulk modulus <i>B</i>. Poisson’s ratio <i>ν</i> then tells you how a stretch in one direction quietly produces a shrink in the perpendicular directions.<br><br>The natural next question — and the whole point of this topic — is: how do I actually use these numbers? Two big ideas unlock everything.',
      },
      {
        t: 'p',
        html: '<b>Big idea 1: A loaded wire is just a spring.</b> Hang a mass from a wire and it stretches by an amount proportional to the load — exactly like a spring obeying <i>F</i> = <i>kx</i>. Think about it this way… you already know <i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>). Rearrange it: <i>F</i> = (<i>YA</i>/<i>L</i>) Δ<i>L</i>. The quantity in brackets plays the role of the spring constant. So <b>every rod is a spring with stiffness <i>k</i> = <i>YA</i>/<i>L</i>.</b> This single re-interpretation lets you treat any tangle of wires using the spring rules you already know from Class 11 mechanics: wires joined end-to-end behave like springs in series (soft, they add their stretches), and wires placed side-by-side sharing a load behave like springs in parallel (stiff, they add their stiffnesses). A thick steel cable on a crane is a very stiff spring; the long thin string of a guitar is a soft one.<br><br>A relatable picture: imagine a bullock cart with two ropes pulling a load. If you tie the ropes one-after-the-other (series), the load can sag more and the weaker rope dominates. If you tie them side-by-side (parallel), they share the load and the pair is stronger than either alone. Springs, wires, ropes — same arithmetic.',
      },
      {
        t: 'p',
        html: '<b>Big idea 2: The four constants are not independent — there are really only two.</b> This is the elegant secret of elasticity. For a uniform, isotropic material (same properties in every direction), if you know any two of {<i>Y</i>, <i>B</i>, <i>η</i>, <i>ν</i>}, the other two are fixed automatically. They are bound together by:<br><i>Y</i> = 2<i>η</i>(1 + <i>ν</i>) = 3<i>B</i>(1 − 2<i>ν</i>)<br>Physically this makes sense: stretching, shearing, and squeezing are not separate magical properties — they all trace back to the same inter-atomic bonds you imagined in Topic 01. Disturb those bonds one way and the material’s response in every other way is already determined.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The relations between constants hold <b>only for homogeneous, isotropic materials</b>. They fail for wood (stiffer along the grain than across it), for fibre composites, and for single crystals — anisotropic materials need a whole matrix of constants, not just two. The spring picture (<i>k</i> = <i>YA</i>/<i>L</i>) assumes we stay within the elastic limit and that the wire’s weight is negligible compared with the load. And remember the rule from Topic 01: a gas or liquid has <b>no <i>Y</i> and no <i>η</i></b> — it cannot be stretched or sheared, only compressed — so for fluids, <i>B</i> is the only modulus that exists.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'The four constants (compact recap)',
        main: '<i>Y</i> = <i>σ</i>/<i>ε</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>), <i>B</i> = −<i>P</i>/(Δ<i>V</i>/<i>V</i>), <i>η</i> = <i>τ</i>/<i>φ</i>, <i>ν</i> = −(lateral strain)/(longitudinal strain)',
        legend: [],
        note: 'All three moduli: unit Pa, dimensions [M L<sup>−1</sup> T<sup>−2</sup>]. Poisson’s ratio: dimensionless, with 0 ≤ <i>ν</i> ≤ 0.5 for ordinary materials (theoretical bound −1 ≤ <i>ν</i> ≤ 0.5).',
      },
      {
        t: 'formula',
        kicker: 'Wire as a spring',
        main: '<i>F</i> = <i>k</i> Δ<i>L</i> with <i>k</i> = <i>YA</i>/<i>L</i> (<i>k</i> ∝ <i>A</i>, <i>k</i> ∝ 1/<i>L</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Combinations (treat wires exactly like springs)',
        main: 'Series (same force): 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub><br>Parallel (same stretch): <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub><br>For two rods of <b>equal length and area</b> joined end-to-end (series), the equivalent Young’s modulus is the harmonic-type mean:<br><i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Bulk modulus & compressibility',
        main: '<i>k</i> = 1/<i>B</i> (unit Pa<sup>−1</sup>), Δ<i>V</i>/<i>V</i> = −Δ<i>P</i>/<i>B</i>, Δ<i>ρ</i>/<i>ρ</i> = +Δ<i>P</i>/<i>B</i>',
        legend: [],
        note: 'Ordering of stiffness against compression: <i>B</i><sub>solids</sub> > <i>B</i><sub>liquids</sub> ≫ <i>B</i><sub>gases</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Bulk modulus of a gas is process-dependent',
        main: '(not a fixed material constant):<br><i>B</i><sub>isothermal</sub> = <i>P</i>, <i>B</i><sub>adiabatic</sub> = <i>γP</i>, <i>B</i><sub>polytropic</sub> = <i>nP</i>, <i>B</i><sub>adiabatic</sub>/<i>B</i><sub>isothermal</sub> = <i>γ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relations between elastic constants (isotropic material — only 2 are independent)',
        main: '<i>Y</i> = 2<i>η</i>(1 + <i>ν</i>) = 3<i>B</i>(1 − 2<i>ν</i>), 9/<i>Y</i> = 1/<i>B</i> + 3/<i>η</i>, <i>ν</i> = (3<i>B</i> − 2<i>η</i>)/(2(3<i>B</i> + <i>η</i>))',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Wire as a spring, and the series rule.</b> Start from the definition of Young’s modulus for a wire of length <i>L</i>, area <i>A</i>, material <i>Y</i>, stretched by Δ<i>L</i> under force <i>F</i>:<br><i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) ⇒ <i>F</i> = (<i>YA</i>/<i>L</i>) Δ<i>L</i><br>Comparing with the spring law <i>F</i> = <i>k</i> Δ<i>L</i>, the wire’s effective force constant is <i>k</i> = <i>YA</i>/<i>L</i>. Why this matters: the entire toolkit of spring combinations now transfers over.<br><br>Now join two such wires end-to-end and hang a load. Both carry the <b>same tension</b> <i>F</i> (the lower wire transmits the full load to the upper one), and the total stretch is the <b>sum</b>:<br>Δ<i>L</i><sub>total</sub> = Δ<i>L</i><sub>1</sub> + Δ<i>L</i><sub>2</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub> ⇒ 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub><br>For two rods of identical length <i>L</i> and area <i>A</i> but moduli <i>Y</i><sub>1</sub>, <i>Y</i><sub>2</sub>: <i>k</i><sub><i>i</i></sub> = <i>Y</i><sub><i>i</i></sub><i>A</i>/<i>L</i>. The combined rod has length 2<i>L</i>, area <i>A</i>, and some effective modulus <i>Y</i><sub>eq</sub> with <i>k</i><sub>eq</sub> = <i>Y</i><sub>eq</sub><i>A</i>/(2<i>L</i>). Substituting:<br>2<i>L</i>/(<i>Y</i><sub>eq</sub><i>A</i>) = <i>L</i>/(<i>Y</i><sub>1</sub><i>A</i>) + <i>L</i>/(<i>Y</i><sub>2</sub><i>A</i>) ⇒ 2/<i>Y</i><sub>eq</sub> = 1/<i>Y</i><sub>1</sub> + 1/<i>Y</i><sub>2</sub> ⇒ <i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)<br>Note this is <b>not</b> the simple average ½(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>) — a favourite trap.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Bulk modulus of a gas depends on the process.</b> A gas has no fixed bulk modulus because how you compress it changes its resistance. Begin with <i>B</i> = −<i>V</i> d<i>P</i>/d<i>V</i>.<br><br>Isothermal (slow, constant temperature): <i>PV</i> = constant. Differentiating, <i>P</i> d<i>V</i> + <i>V</i> d<i>P</i> = 0 ⇒ −<i>V</i> d<i>P</i>/d<i>V</i> = <i>P</i>. Hence <i>B</i><sub>iso</sub> = <i>P</i>.<br><br>Adiabatic (fast, no heat exchange): <i>PV</i><sup><i>γ</i></sup> = constant. Differentiating, <i>γPV</i><sup><i>γ</i>−1</sup> d<i>V</i> + <i>V</i><sup><i>γ</i></sup> d<i>P</i> = 0 ⇒ −<i>V</i> d<i>P</i>/d<i>V</i> = <i>γP</i>. Hence <i>B</i><sub>adia</sub> = <i>γP</i>.<br><br>Since <i>γ</i> > 1, a gas always resists sudden compression more stiffly than slow compression — which is exactly why sound (an adiabatic compression wave) travels faster than the isothermal estimate Newton first guessed.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Tying the constants together.</b> Take the two source relations <i>Y</i> = 2<i>η</i>(1 + <i>ν</i>) and <i>Y</i> = 3<i>B</i>(1 − 2<i>ν</i>) and eliminate <i>ν</i>. From the first, <i>ν</i> = <i>Y</i>/(2<i>η</i>) − 1; from the second, <i>ν</i> = 1/2 − <i>Y</i>/(6<i>B</i>). Equating and simplifying:<br><i>Y</i>/(2<i>η</i>) − 1 = 1/2 − <i>Y</i>/(6<i>B</i>) ⇒ 1/<i>η</i> + 1/(3<i>B</i>) = 3/<i>Y</i> ⇒ 9/<i>Y</i> = 1/<i>B</i> + 3/<i>η</i>',
      },
      { t: 'p', html: 'A quick decision rule:' },
      {
        t: 'proc',
        title: 'Procedure — Which modulus do I use?',
        steps: [
          'Is the deformation a <b>change in length</b> under a pull/push along one axis? → Young’s modulus <i>Y</i>.',
          'Is it a <b>change in shape</b> (faces sliding, twisting), volume unchanged? → Rigidity <i>η</i>.',
          'Is it a <b>change in volume</b> under all-round pressure, shape unchanged? → Bulk modulus <i>B</i>.',
          'Is the material a <b>fluid</b> (liquid/gas)? → Only <i>B</i> is available; for a gas, check whether the process is isothermal (<i>B</i> = <i>P</i>) or adiabatic (<i>B</i> = <i>γP</i>).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solid copper cube of edge 10 cm is subjected to a uniform pressure of 7.0 × 10<sup>7</sup> Pa on all faces. If the bulk modulus of copper is 1.4 × 10<sup>11</sup> Pa, find the change in its volume.',
        steps: [
          '<b>Given:</b> edge = 0.10 m ⇒ <i>V</i> = (0.10)<sup>3</sup> = 1.0 × 10<sup>−3</sup> m<sup>3</sup>; Δ<i>P</i> = 7.0 × 10<sup>7</sup> Pa; <i>B</i> = 1.4 × 10<sup>11</sup> Pa.',
          'From <i>B</i> = −Δ<i>P</i>/(Δ<i>V</i>/<i>V</i>):<br>Δ<i>V</i> = −(Δ<i>P</i> · <i>V</i>)/<i>B</i> = −(7.0 × 10<sup>7</sup>)(1.0 × 10<sup>−3</sup>)/(1.4 × 10<sup>11</sup>) = −(7.0 × 10<sup>4</sup>)/(1.4 × 10<sup>11</sup>)',
          'The minus sign confirms a decrease in volume. Tiny, as expected — copper is extremely incompressible.',
        ],
        ans: 'Δ<i>V</i> = −5.0 × 10<sup>−7</sup> m<sup>3</sup> = −0.50 cm<sup>3</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A fixed mass of a diatomic gas (<i>γ</i> = 1.4) is at pressure 1.0 × 10<sup>5</sup> Pa. Find its bulk modulus (i) when compressed slowly, and (ii) when compressed suddenly.',
        steps: [
          '<b>The trap:</b> students hunt for a “bulk modulus of the gas” as if it were a tabulated material constant, or apply a solid’s formula. For a gas, <i>B</i> is set by the process.',
          '<b>Speed method — no calculation, just recall:</b><br>• Slow compression = <b>isothermal</b> ⇒ <i>B</i> = <i>P</i> = 1.0 × 10<sup>5</sup> Pa.<br>• Sudden compression = <b>adiabatic</b> ⇒ <i>B</i> = <i>γP</i> = 1.4 × 1.0 × 10<sup>5</sup> = 1.4 × 10<sup>5</sup> Pa.',
          'The whole question collapses to “is it slow or fast?” If a NEET option offers a single fixed value for a gas’s bulk modulus independent of the process, eliminate it instantly.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two wires of the same material (<i>Y</i> = 2.0 × 10<sup>11</sup> Pa) and the same length <i>L</i> = 1.0 m are joined end-to-end. The upper wire has radius <i>R</i> = 0.50 mm and the lower has radius 2<i>R</i> = 1.0 mm. A load of 100 N hangs from the bottom. Find the total elongation, and state which wire stores more elastic energy.',
        steps: [
          '<b>Two concepts:</b> wires in <b>series</b> carry the same force; and elastic energy <i>U</i> = ½<i>F</i> Δ<i>L</i>.',
          'Areas: <i>A</i><sub>1</sub> = π<i>R</i><sup>2</sup> = π(5.0 × 10<sup>−4</sup>)<sup>2</sup> = 7.85 × 10<sup>−7</sup> m<sup>2</sup>; <i>A</i><sub>2</sub> = π(2<i>R</i>)<sup>2</sup> = 4<i>A</i><sub>1</sub> = 3.14 × 10<sup>−6</sup> m<sup>2</sup>.',
          'Δ<i>L</i><sub>1</sub> = <i>FL</i>/(<i>A</i><sub>1</sub><i>Y</i>) = (100 × 1.0)/((7.85 × 10<sup>−7</sup>)(2.0 × 10<sup>11</sup>)) = 100/(1.571 × 10<sup>5</sup>) = 6.4 × 10<sup>−4</sup> m<br>Δ<i>L</i><sub>2</sub> = <i>FL</i>/(<i>A</i><sub>2</sub><i>Y</i>) = Δ<i>L</i><sub>1</sub>/4 = 1.6 × 10<sup>−4</sup> m',
          'Since both wires carry the same force <i>F</i>, <i>U</i> ∝ Δ<i>L</i>. The <b>thinner upper wire</b> (Δ<i>L</i><sub>1</sub> = 4 Δ<i>L</i><sub>2</sub>) therefore stores <b>four times</b> the energy of the thicker one — thinner wires both stretch more and soak up more energy. (Useful intuition: the weakest link does the most work and is the first to snap.)',
        ],
        ans: 'Δ<i>L</i><sub>total</sub> = Δ<i>L</i><sub>1</sub> + Δ<i>L</i><sub>2</sub> = 8.0 × 10<sup>−4</sup> m = 0.80 mm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A homogeneous, isotropic material has Young’s modulus <i>Y</i> = 1.2 × 10<sup>11</sup> Pa and Poisson’s ratio <i>ν</i> = 0.25. Determine its bulk modulus <i>B</i> and shear modulus <i>η</i>, and verify your answers are mutually consistent.',
        steps: [
          'Use the two master relations directly.',
          '<i>B</i> = <i>Y</i>/(3(1 − 2<i>ν</i>)) = (1.2 × 10<sup>11</sup>)/(3(1 − 0.50)) = (1.2 × 10<sup>11</sup>)/1.5 = 8.0 × 10<sup>10</sup> Pa<br><i>η</i> = <i>Y</i>/(2(1 + <i>ν</i>)) = (1.2 × 10<sup>11</sup>)/(2(1.25)) = (1.2 × 10<sup>11</sup>)/2.5 = 4.8 × 10<sup>10</sup> Pa',
          '<b>Consistency check</b> via 9/<i>Y</i> = 1/<i>B</i> + 3/<i>η</i>:<br>1/<i>B</i> + 3/<i>η</i> = 1/(8.0 × 10<sup>10</sup>) + 3/(4.8 × 10<sup>10</sup>) = (1.25 + 6.25) × 10<sup>−11</sup> = 7.5 × 10<sup>−11</sup><br>9/<i>Y</i> = 9/(1.2 × 10<sup>11</sup>) = 7.5 × 10<sup>−11</sup> ✓',
          'The two routes agree, confirming the material is described self-consistently by just two independent constants.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] One litre of water is subjected to a pressure increase of 2.0 × 10<sup>7</sup> Pa. If the bulk modulus of water is 2.0 × 10<sup>9</sup> Pa, find the decrease in its volume.',
            a: '1.0 × 10<sup>−5</sup> m<sup>3</sup> = 10 cm<sup>3</sup>',
          },
          {
            q: '[NEET] At a pressure of 1.0 × 10<sup>5</sup> Pa, find the isothermal and adiabatic bulk moduli of a diatomic gas (<i>γ</i> = 1.4).',
            a: 'isothermal 1.0 × 10<sup>5</sup> Pa, adiabatic 1.4 × 10<sup>5</sup> Pa',
          },
          {
            q: '[JEE Main] A wire has force constant <i>k</i>. It is cut into two equal pieces, and the two pieces are then connected side-by-side (in parallel). Find the effective force constant of the combination.',
            a: '4<i>k</i>',
          },
          {
            q: '[JEE Main] Two rods of equal length and equal cross-sectional area, having Young’s moduli <i>Y</i> and 3<i>Y</i>, are joined end-to-end. Find the equivalent Young’s modulus of the composite rod.',
            a: '3<i>Y</i>/2',
          },
          {
            q: '[JEE Advanced] For a certain isotropic material, the bulk modulus is twice its shear modulus (<i>B</i> = 2<i>η</i>). Find its Poisson’s ratio.',
            a: '<i>ν</i> = 2/7 ≈ 0.29',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A wire stretched by a hanging mass behaves as a spring of force constant <i>k</i>. If the length is halved (same material, same cross-section), the new force constant is:',
        opts: [
          { label: '<i>k</i>/2', nudge: '<b>(a)</b> assumes <i>k</i> ∝ <i>L</i> — backwards; shorter wires are stiffer.' },
          {
            label: '<i>k</i>',
            nudge: '<b>(b)</b> confuses <i>k</i> (geometry-dependent) with <i>Y</i> (material-only); <i>Y</i> stays the same but <i>k</i> does not.',
          },
          { label: '2<i>k</i>', nudge: null },
          { label: '4<i>k</i>', nudge: '<b>(d)</b> is the area-scaling or parallel-combination answer, misapplied to a length change.' },
        ],
        correct: 2,
        solution: 'Since <i>k</i> = <i>YA</i>/<i>L</i>, halving <i>L</i> doubles <i>k</i>.',
      },
      {
        t: 'mcq',
        q: 'Two rods of identical dimensions but Young’s moduli <i>Y</i><sub>1</sub> and <i>Y</i><sub>2</sub> are joined end-to-end. The equivalent Young’s modulus is:',
        opts: [
          { label: '<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>', nudge: '<b>(a)</b> is the parallel (side-by-side) result.' },
          {
            label: '(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)/2',
            nudge: '<b>(b)</b> the arithmetic mean is the single most common error — series springs do not average.',
          },
          { label: '2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)', nudge: null },
          { label: '√(<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>)', nudge: '<b>(d)</b> the geometric mean simply doesn’t arise here.' },
        ],
        correct: 2,
        solution: 'End-to-end = series; stretches add, giving 2/<i>Y</i><sub>eq</sub> = 1/<i>Y</i><sub>1</sub> + 1/<i>Y</i><sub>2</sub>.',
      },
      {
        t: 'mcq',
        q: 'A fluid (liquid or gas) can possess:',
        opts: [
          { label: 'only Young’s modulus', nudge: '<b>(a)</b> and <b>(c)</b> assign solid-only moduli to fluids.' },
          { label: 'only bulk modulus', nudge: null },
          { label: 'only modulus of rigidity', nudge: '<b>(a)</b> and <b>(c)</b> assign solid-only moduli to fluids.' },
          {
            label: 'all three moduli',
            nudge: '<b>(d)</b> forgets that “having a length and a definite shape” is a prerequisite for <i>Y</i> and <i>η</i> — which fluids lack.',
          },
        ],
        correct: 1,
        solution: 'Fluids flow — they cannot sustain a shear stress (so no <i>η</i>) and cannot be stretched along a line (so no <i>Y</i>). They resist only volume change, so only <i>B</i> exists.',
      },
      {
        t: 'mcq',
        q: 'For a given gas at pressure <i>P</i>, the ratio of its adiabatic bulk modulus to its isothermal bulk modulus is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> wrongly treats the gas’s bulk modulus as process-independent.' },
          { label: '<i>γ</i>', nudge: null },
          { label: '1/<i>γ</i>', nudge: '<b>(c)</b> inverts the ratio.' },
          { label: '<i>γ</i><sup>2</sup>', nudge: '<b>(d)</b> double-counts <i>γ</i>, perhaps confusing it with a speed-of-sound expression.' },
        ],
        correct: 1,
        solution: '<i>B</i><sub>adia</sub> = <i>γP</i> and <i>B</i><sub>iso</sub> = <i>P</i>, so the ratio is <i>γ</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Averaging series moduli.</b> For rods of equal length and area joined end-to-end, the equivalent Young’s modulus is 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>), not ½(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>). Series = stretches add = reciprocals add. Map it to springs and you won’t slip.',
          '<b>Treating a gas’s bulk modulus as fixed.</b> A gas has no single bulk modulus. Always ask: isothermal (<i>B</i> = <i>P</i>) or adiabatic (<i>B</i> = <i>γP</i>)? Using the wrong one is an instant error.',
          '<b>Forgetting only two constants are independent.</b> If a problem gives you any two of {<i>Y</i>, <i>B</i>, <i>η</i>, <i>ν</i>}, the other two are already determined. Don’t treat them as four free numbers.',
          '<b>Confusing <i>k</i> with <i>Y</i>.</b> Young’s modulus is a material property (geometry-free). The spring constant <i>k</i> = <i>YA</i>/<i>L</i> is geometry-dependent. Cutting or rejoining a wire changes <i>k</i>, never <i>Y</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Whenever wires are connected, immediately redraw them as springs with <i>k</i> = <i>YA</i>/<i>L</i> and use 1/<i>k</i><sub>eq</sub> = ∑ 1/<i>k</i><sub><i>i</i></sub> (series) or <i>k</i><sub>eq</sub> = ∑ <i>k</i><sub><i>i</i></sub> (parallel). You convert an unfamiliar elasticity problem into a Class-11 spring problem you’ve already mastered — and sidestep every “average vs. reciprocal” trap.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Wire = spring',
            note: '<i>k</i> = <i>YA</i>/<i>L</i> (<i>k</i> ∝ <i>A</i>, <i>k</i> ∝ 1/<i>L</i>). Series: 1/<i>k</i><sub>eq</sub> = ∑ 1/<i>k</i><sub><i>i</i></sub>; Parallel: <i>k</i><sub>eq</sub> = ∑ <i>k</i><sub><i>i</i></sub>.',
          },
          {
            f: 'Series of two equal rods',
            note: '<i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>) (NOT the average).',
          },
          {
            f: 'Compressibility',
            note: '<i>k</i> = 1/<i>B</i> (Pa<sup>−1</sup>); Δ<i>V</i>/<i>V</i> = −Δ<i>P</i>/<i>B</i>; Δ<i>ρ</i>/<i>ρ</i> = +Δ<i>P</i>/<i>B</i>. Stiffness: <i>B</i><sub>solid</sub> > <i>B</i><sub>liquid</sub> ≫ <i>B</i><sub>gas</sub>.',
          },
          { f: 'Gas bulk modulus (process-dependent)', note: 'isothermal <i>B</i> = <i>P</i>; adiabatic <i>B</i> = <i>γP</i>; ratio = <i>γ</i>.' },
          {
            f: 'Only 2 of 4 constants are independent',
            note: '<i>Y</i> = 2<i>η</i>(1 + <i>ν</i>) = 3<i>B</i>(1 − 2<i>ν</i>); 9/<i>Y</i> = 1/<i>B</i> + 3/<i>η</i>.',
          },
          { f: 'Which modulus?', note: 'length→<i>Y</i>, shape→<i>η</i>, volume→<i>B</i>. Fluids → <i>B</i> only.' },
        ],
        aids: [
          '“Short and fat is stiff” — <i>k</i> rises as <i>L</i> falls and <i>A</i> grows.',
          '“Slow gas is soft, fast gas is stiff” — isothermal <i>P</i> vs adiabatic <i>γP</i>.',
          '“Two knowns rule them all” — any two elastic constants fix the rest.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 563–569 ─────────────────────────
  {
    n: '03',
    title: 'Poisson’s Ratio and Elastic Energy',
    kalam: 'Here we follow ν to its most useful consequence — what stretching does to a body’s volume — and then turn to the energy that every deformation quietly stores.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Notation (carried from Topics 01–02):</b> stress <i>σ</i> · strain <i>ε</i> · Young’s <i>Y</i> · Bulk <i>B</i> · Rigidity <i>η</i> · Poisson’s ratio <i>ν</i> (some texts write this <i>σ</i>; we keep <i>ν</i> to avoid clashing with stress) · energy density <i>u</i>.',
      },
      {
        t: 'p',
        html: 'In Topic 02 you saw that Poisson’s ratio links the four elastic constants. Here we follow <i>ν</i> to its most useful consequence — what stretching does to a body’s <b>volume</b> — and then turn to the energy that every deformation quietly stores.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards reliably ask the derivation of elastic potential energy in a stretched wire (3 marks) and a definition of Poisson’s ratio. JEE Main mixes the volume-change relation with Young’s modulus, and tests energy density. NEET favours the “area under the stress-strain curve” conceptual and quick energy-density numericals. JEE Advanced loves the sudden-loading energy-partition problem (where, on settling, half the load’s work turns to heat).',
      },
      {
        t: 'p',
        html: 'Take a thick rubber band and stretch it between your hands. Watch closely: as it lengthens, it also gets visibly <b>thinner</b>. Stretch a piece of chewing gum or roll out a ball of atta — pulling in one direction always squeezes the other directions. This sideways shrinking that accompanies a lengthwise stretch is what <b>Poisson’s ratio</b> measures: it is simply how much thinner per unit longer. A material with a large Poisson’s ratio (like rubber, <i>ν</i> ≈ 0.5) necks down dramatically; one with a small Poisson’s ratio (like cork, <i>ν</i> ≈ 0) barely changes width at all — which, incidentally, is exactly why cork is perfect for a wine bottle: push it in lengthwise and it doesn’t bulge sideways to jam.<br><br>Think about it this way… here’s the question that makes Poisson’s ratio genuinely interesting. When you stretch a wire, it gets longer (volume wants to grow) but also thinner (volume wants to shrink). Which wins? Does the total volume go up, down, or stay put? The answer is governed entirely by <i>ν</i>:<br>Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>) Δ<i>L</i>/<i>L</i><br>If <i>ν</i> < 0.5 (almost all real solids), the lengthening wins and the volume increases slightly when you pull. If <i>ν</i> = 0.5 exactly (ideal rubber), the thinning perfectly cancels the lengthening and the <b>volume stays constant</b> — the material is incompressible. This is the deep reason <i>ν</i> can’t exceed 0.5 for ordinary materials: a value above 0.5 would mean stretching a body shrinks its volume, which no stable material allows: by <i>Y</i> = 3<i>B</i>(1 − 2<i>ν</i>), <i>ν</i> > 0.5 would make the bulk modulus negative, so the body would swell when squeezed.',
      },
      {
        t: 'p',
        html: 'Now the second half of this topic: <b>deformation stores energy.</b> Pull back the string of a bow (dhanush) and you feel resistance; let go and that stored energy launches the arrow. A gulel (catapult), a trampoline, a pole-vaulter’s flexing pole — all are energy banks that take in work as they deform and pay it back as they recover. A stretched wire is the same idea in miniature. The work you do against the inter-atomic “springs” doesn’t vanish; it is stored as <b>elastic potential energy</b>, ready to be released the instant the load is removed (within the elastic limit). The neat result we’ll derive is that this stored energy is exactly half of “force times stretch” — and understanding why it’s half, not the full product, is what separates a careful student from a careless one.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The volume relation Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>)<i>ε</i> is a small-strain (first-order) result — it assumes the changes are tiny, so we can ignore products of small quantities. All of it lives <b>within the elastic limit</b>; beyond it, energy is lost to permanent deformation and heat, and none of these clean formulas hold. And we assume the material is <b>isotropic</b> — Poisson’s ratio is a single number only when the material responds the same way in every direction.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Poisson’s ratio',
        main: '<i>ν</i> = −(lateral strain)/(longitudinal strain) = −(Δ<i>r</i>/<i>r</i>)/(Δ<i>L</i>/<i>L</i>) = −(Δ<i>D</i>/<i>D</i>)/(Δ<i>L</i>/<i>L</i>)',
        legend: [],
        note: 'Dimensionless, no units; depends only on the material.<br>Theoretical range: −1 ≤ <i>ν</i> ≤ 0.5. Practical range for real solids: 0 ≤ <i>ν</i> ≤ 0.5.<br>Typical values: steel ≈ 0.28–0.30, aluminium alloys ≈ 0.33, rubber ≈ 0.5, cork ≈ 0.<br>The minus sign makes <i>ν</i> positive: lateral and longitudinal strains have opposite signs (stretch one way, shrink the other).',
      },
      {
        t: 'formula',
        kicker: 'Volume change on stretching a rod',
        main: '(small strain):<br>Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>) Δ<i>L</i>/<i>L</i>',
        legend: [],
        note: '<i>ν</i> < 0.5 ⇒ volume increases | <i>ν</i> = 0.5 ⇒ volume constant (incompressible) | <i>ν</i> = 0 ⇒ Δ<i>V</i>/<i>V</i> = Δ<i>L</i>/<i>L</i> (no lateral contraction).',
      },
      {
        t: 'formula',
        kicker: 'Elastic potential energy stored in a stretched wire',
        main: '(three equivalent forms):<br><i>U</i> = ½<i>F</i> Δ<i>L</i> = ½ × stress × strain × volume = ½(<i>YA</i>/<i>L</i>)(Δ<i>L</i>)<sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Elastic energy density',
        main: '(energy stored per unit volume) — equals the <b>area under the stress-strain curve</b>:<br><i>u</i> = <i>U</i>/Volume = ½<i>σε</i> = ½<i>Yε</i><sup>2</sup> = <i>σ</i><sup>2</sup>/(2<i>Y</i>)',
        legend: [],
        note: '(unit: J m<sup>−3</sup>)',
      },
      {
        t: 'p',
        html: '<b>Gradual vs. sudden loading</b> (energy bookkeeping):<br>• Gradual (force builds slowly 0 → <i>F</i>): work done by external agent = ½<i>F</i> Δ<i>L</i> = <i>U</i> stored; no heat.<br>• Sudden (full load <i>F</i> applied at once): work done by load = <i>F</i> Δ<i>L</i><sub>max</sub>; all of it is stored as <i>U</i> at the lowest point (no heat yet). When it settles at the static stretch <i>x</i><sub>st</sub>, half of the work done by the load (<i>F</i><i>x</i><sub>st</sub>) has become heat. The maximum elongation is <b>twice</b> the static value.',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Volume change in terms of Poisson’s ratio.</b> Consider a cylindrical bar of length <i>L</i> and radius <i>r</i>, so its volume is <i>V</i> = π<i>r</i><sup>2</sup><i>L</i>. When stretched, both <i>r</i> and <i>L</i> change slightly. To see how <i>V</i> responds, take the logarithm and differentiate (the cleanest route for products):<br>ln <i>V</i> = ln π + 2 ln <i>r</i> + ln <i>L</i> ⇒ Δ<i>V</i>/<i>V</i> = 2 Δ<i>r</i>/<i>r</i> + Δ<i>L</i>/<i>L</i><br>Why logarithms? Because volume is a product of powers — differentiating the log turns the product into a simple sum of fractional changes.<br><br>Now bring in Poisson’s ratio. By definition the lateral (radial) strain is Δ<i>r</i>/<i>r</i> = −<i>ν</i> Δ<i>L</i>/<i>L</i> (negative — the radius shrinks). Substituting:<br>Δ<i>V</i>/<i>V</i> = 2(−<i>ν</i> Δ<i>L</i>/<i>L</i>) + Δ<i>L</i>/<i>L</i> = (1 − 2<i>ν</i>) Δ<i>L</i>/<i>L</i><br>Read off the physics immediately: <i>ν</i> = 0.5 ⇒ Δ<i>V</i> = 0 (incompressible); <i>ν</i> < 0.5 ⇒ Δ<i>V</i> > 0 (volume grows on stretching). Together with <i>Y</i> = 3<i>B</i>(1 − 2<i>ν</i>) and <i>B</i> > 0, this explains the upper bound on <i>ν</i>.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Elastic potential energy of a stretched wire (CBSE favourite).</b> Take a wire of length <i>L</i>, area <i>A</i>, material <i>Y</i>. Suppose it has already been stretched by some amount <i>l</i>. From Topic 02, the force needed to hold it there is <i>F</i>(<i>l</i>) = (<i>YA</i>/<i>L</i>) <i>l</i>.<br><br>To stretch it a tiny bit further, by d<i>l</i>, the work done is<br>d<i>W</i> = <i>F</i>(<i>l</i>) d<i>l</i> = (<i>YA</i>/<i>L</i>) <i>l</i> d<i>l</i><br>The crucial point: the force is <b>not constant</b> — it grows from 0 to its final value as the wire stretches. So we integrate from 0 to the final elongation Δ<i>L</i>:<br><i>W</i> = ∫<sub>0</sub><sup>Δ<i>L</i></sup> (<i>YA</i>/<i>L</i>) <i>l</i> d<i>l</i> = (<i>YA</i>/<i>L</i>) · (Δ<i>L</i>)<sup>2</sup>/2 = (1/2)(<i>YA</i>/<i>L</i>)(Δ<i>L</i>)<sup>2</sup><br>Since the final force is <i>F</i> = (<i>YA</i>/<i>L</i>) Δ<i>L</i>, this is simply<br><i>U</i> = <i>W</i> = ½<i>F</i> Δ<i>L</i><br>The factor ½ comes from the average force (0 to <i>F</i>, mean <i>F</i>/2) at work — <b>not</b> the full <i>F</i>. To get the energy density, divide by the volume <i>AL</i> and regroup:<br><i>u</i> = <i>U</i>/(<i>AL</i>) = (½<i>F</i> Δ<i>L</i>)/(<i>AL</i>) = (1/2)(<i>F</i>/<i>A</i>)(Δ<i>L</i>/<i>L</i>) = ½<i>σε</i> (with <i>F</i>/<i>A</i> = <i>σ</i>, Δ<i>L</i>/<i>L</i> = <i>ε</i>)',
      },
      {
        t: 'p',
        html: '<b>Procedure — Reading energy off the stress-strain curve.</b> Because <i>u</i> = ½<i>σε</i> and the graph plots <i>σ</i> (y) against <i>ε</i> (x), the <b>area under the curve equals the elastic energy per unit volume</b> — not the total energy. To get total energy, multiply by the volume. (Watch the axes: a force–extension graph’s area gives total energy directly; a stress–strain graph’s area gives energy density.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A steel wire of length 2.0 m and cross-sectional area 1.0 mm<sup>2</sup> is stretched by 1.0 mm. Given <i>Y</i><sub>steel</sub> = 2.0 × 10<sup>11</sup> Pa, find (a) the elastic potential energy stored and (b) the energy stored per unit volume.',
        steps: [
          '<b>Given:</b> <i>L</i> = 2.0 m, <i>A</i> = 1.0 × 10<sup>−6</sup> m<sup>2</sup>, Δ<i>L</i> = 1.0 × 10<sup>−3</sup> m.',
          'First, the stretching force: <i>F</i> = <i>YA</i> Δ<i>L</i>/<i>L</i> = (2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)(1.0 × 10<sup>−3</sup>)/2.0 = 100 N.',
          '(a) <i>U</i> = ½<i>F</i> Δ<i>L</i> = ½(100)(1.0 × 10<sup>−3</sup>) = 0.05 J',
          '(b) Volume = <i>AL</i> = (1.0 × 10<sup>−6</sup>)(2.0) = 2.0 × 10<sup>−6</sup> m<sup>3</sup>, so<br><i>u</i> = <i>U</i>/Volume = 0.05/(2.0 × 10<sup>−6</sup>) = 2.5 × 10<sup>4</sup> J m<sup>−3</sup>',
          '<b>Cross-check:</b> <i>u</i> = ½<i>σε</i> = ½(10<sup>8</sup>)(5 × 10<sup>−4</sup>) = 2.5 × 10<sup>4</sup> J m<sup>−3</sup> ✓.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Within the elastic limit, the area under a wire’s stress-strain graph is found to be 8 × 10<sup>4</sup> J m<sup>−3</sup>. The wire has volume 5 × 10<sup>−6</sup> m<sup>3</sup>. What is the total elastic energy stored?',
        steps: [
          '<b>The trap:</b> students see “area under stress-strain curve” and write it down as the total energy. It is <b>not</b> — it’s energy per unit volume.',
          '<b>Speed method:</b> Area under stress-strain curve = <i>u</i> (energy density). Total energy is just <i>u</i> × Volume (below).',
          'If an option offered “8 × 10<sup>4</sup> J” (the area read as total energy), it’s the planted trap. The unit J m<sup>−3</sup> on the area is your tell.',
        ],
        ans: '<i>U</i> = <i>u</i> × <i>V</i> = (8 × 10<sup>4</sup>)(5 × 10<sup>−6</sup>) = 0.4 J',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A wire of length 1.0 m and diameter 1.0 mm is made of a material with <i>Y</i> = 1.2 × 10<sup>11</sup> Pa and Poisson’s ratio <i>ν</i> = 0.30. A tensile stress of 1.2 × 10<sup>8</sup> Pa is applied. Find (a) the longitudinal strain, (b) the lateral strain, and (c) the fractional change in volume.',
        steps: [
          '<b>Two concepts:</b> Young’s modulus gives the longitudinal strain; Poisson’s ratio then gives the lateral strain and the volume change.',
          '(a) <i>ε</i> = <i>σ</i>/<i>Y</i> = (1.2 × 10<sup>8</sup>)/(1.2 × 10<sup>11</sup>) = 1.0 × 10<sup>−3</sup>',
          '(b) Lateral strain = −<i>νε</i> = −(0.30)(1.0 × 10<sup>−3</sup>) = −3.0 × 10<sup>−4</sup> (the diameter shrinks).',
          '(c) Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>)<i>ε</i> = (1 − 0.60)(1.0 × 10<sup>−3</sup>) = (0.40)(1.0 × 10<sup>−3</sup>) = 4.0 × 10<sup>−4</sup><br>The volume increases (since <i>ν</i> < 0.5), by 0.04%.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A block of mass <i>m</i> is attached to the lower end of a vertical wire (length <i>L</i>, area <i>A</i>, Young’s modulus <i>Y</i>) and released <b>suddenly</b> from the position where the wire is just taut (unstretched). Show that the maximum elongation is twice the static elongation, and find it for <i>m</i> = 2.0 kg, <i>L</i> = 2.0 m, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa (<i>g</i> = 10 m s<sup>−2</sup>).',
        steps: [
          'When released suddenly, the block falls and stretches the wire until it momentarily stops at maximum elongation <i>x</i><sub>max</sub> (here KE = 0 at both ends). Apply energy conservation: the loss in gravitational PE equals the elastic energy stored.<br><i>mg</i> <i>x</i><sub>max</sub> = ½(<i>YA</i>/<i>L</i>)<i>x</i><sub>max</sub><sup>2</sup>',
          'Cancel one <i>x</i><sub>max</sub>:<br><i>x</i><sub>max</sub> = 2<i>mgL</i>/(<i>YA</i>)',
          'The static (gradual) elongation is <i>x</i><sub>st</sub> = <i>mgL</i>/(<i>YA</i>), so indeed <i>x</i><sub>max</sub> = 2<i>x</i><sub>st</sub>.',
          'Why twice? Suddenly applied, the full weight <i>mg</i> acts through the entire descent, doing work <i>mg</i> × (maximum stretch), all of which the wire stores at the lowest point. At the static position it holds only half the work done; the rest is kinetic energy, which carries the block past equilibrium by the same amount, doubling the stretch.',
          '<b>Numerically:</b> <i>x</i><sub>st</sub> = (2.0)(10)(2.0)/((2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)) = 40/(2.0 × 10<sup>5</sup>) = 2.0 × 10<sup>−4</sup> m, so',
        ],
        ans: '<i>x</i><sub>max</sub> = 2 × 2.0 × 10<sup>−4</sup> = 4.0 × 10<sup>−4</sup> m = 0.40 mm',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A wire is stretched by 2.0 mm when a gradually increasing force reaching 50 N is applied. Calculate the elastic potential energy stored in the wire.',
            a: '0.05 J',
          },
          {
            q: '[NEET] Within the elastic limit, what does the area under a stress-strain graph represent?',
            a: 'elastic potential energy per unit volume (energy density)',
          },
          {
            q: '[JEE Main] A rod made of a material with Poisson’s ratio 0.5 is stretched longitudinally. What is the fractional change in its volume?',
            a: 'zero (volume unchanged — incompressible)',
          },
          {
            q: '[JEE Main] A wire is subjected to a stress of 2.0 × 10<sup>8</sup> Pa. If the Young’s modulus of its material is 2.0 × 10<sup>11</sup> Pa, find the elastic energy stored per unit volume.',
            a: '1.0 × 10<sup>5</sup> J m<sup>−3</sup>',
          },
          {
            q: '[JEE Advanced] A load attached gradually to a wire produces an elongation <i>x</i>. If an identical load is attached suddenly (released from the just-taut position), find the maximum elongation in terms of <i>x</i>.',
            a: '2<i>x</i>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The theoretical limits within which Poisson’s ratio can lie are:',
        opts: [
          {
            label: '0 to 0.5',
            nudge: '<b>(a)</b> is the practical range for ordinary materials — a very common confusion between “what’s theoretically allowed” and “what real metals show.”',
          },
          { label: '−1 to 0.5', nudge: null },
          {
            label: '−1 to 1',
            nudge: '<b>(c)</b> and <b>(d)</b> overshoot the upper bound; <i>ν</i> > 0.5 would mean stretching shrinks the volume, which would need a negative bulk modulus — impossible for a stable material.',
          },
          {
            label: '0 to 1',
            nudge: '<b>(c)</b> and <b>(d)</b> overshoot the upper bound; <i>ν</i> > 0.5 would mean stretching shrinks the volume, which would need a negative bulk modulus — impossible for a stable material.',
          },
        ],
        correct: 1,
        solution: 'Thermodynamic stability of an isotropic solid restricts <i>ν</i> to −1 ≤ <i>ν</i> ≤ 0.5.',
      },
      {
        t: 'mcq',
        q: 'A material with Poisson’s ratio exactly 0.5 is stretched along its length. Its volume:',
        opts: [
          { label: 'increases', nudge: '<b>(a)</b> is true only for <i>ν</i> < 0.5 — right idea, wrong value.' },
          { label: 'decreases', nudge: '<b>(b)</b> would require <i>ν</i> > 0.5 (impossible).' },
          { label: 'remains constant', nudge: null },
          {
            label: 'first increases, then decreases',
            nudge: '<b>(d)</b> invents a non-monotonic behaviour that the small-strain relation doesn’t produce.',
          },
        ],
        correct: 2,
        solution: 'From Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>)<i>ε</i>, setting <i>ν</i> = 0.5 gives (1 − 1)<i>ε</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'The area under the stress-strain curve (within the elastic limit) gives:',
        opts: [
          {
            label: 'elastic potential energy',
            nudge: '<b>(a)</b> forgets that the axes are stress (force/area) and strain (dimensionless), whose product carries units of energy per volume, not energy.',
          },
          { label: 'elastic potential energy per unit volume', nudge: null },
          { label: 'elastic potential energy per unit length', nudge: '<b>(c)</b> is dimensionally wrong.' },
          { label: 'Young’s modulus', nudge: '<b>(d)</b> confuses the area with the slope — the slope, not the area, gives <i>Y</i>.' },
        ],
        correct: 1,
        solution: 'Area = ½<i>σε</i> = <i>u</i>, the energy per unit volume.',
      },
      {
        t: 'mcq',
        q: 'A wire of natural length <i>L</i> extends by <i>ℓ</i> when a force is gradually increased to a final value <i>F</i>. Which statement is <b>NOT</b> correct?',
        opts: [
          {
            label: 'Work done by the external force = ½<i>Fℓ</i>',
            nudge: '<b>(a)</b> and <b>(b)</b> are the correct ½<i>Fℓ</i> result, and since loading is quasi-static all the work is stored as PE with <b>(d)</b> no heat lost.',
          },
          {
            label: 'Elastic potential energy stored = ½<i>Fℓ</i>',
            nudge: '<b>(a)</b> and <b>(b)</b> are the correct ½<i>Fℓ</i> result, and since loading is quasi-static all the work is stored as PE with <b>(d)</b> no heat lost.',
          },
          { label: 'Work done by the external force = <i>Fℓ</i>', nudge: null },
          {
            label: 'No heat is produced in the wire',
            nudge: '<b>(a)</b> and <b>(b)</b> are the correct ½<i>Fℓ</i> result, and since loading is quasi-static all the work is stored as PE with <b>(d)</b> no heat lost.',
          },
        ],
        correct: 2,
        solution: 'For gradual loading the force averages <i>F</i>/2, so the work is ½<i>Fℓ</i>, not <i>Fℓ</i>. The <i>Fℓ</i> figure in <b>(c)</b> belongs to sudden loading — quoting it here is the classic mix-up.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the factor ½.</b> Elastic energy is ½<i>F</i> Δ<i>L</i>, because the force builds up from zero — use the average force, not the final one. Writing <i>F</i> Δ<i>L</i> doubles your answer.',
          '<b>Confusing total energy with energy density.</b> Area under a stress-strain curve is energy per unit volume; multiply by volume for the total. Only a force-extension curve’s area gives total energy directly.',
          '<b>Assuming volume is conserved when stretching.</b> Volume stays fixed only if <i>ν</i> = 0.5. For metals (<i>ν</i> ≈ 0.3), stretching genuinely increases the volume.',
          '<b>Sign and range of <i>ν</i>.</b> By convention <i>ν</i> is quoted as a positive number (the minus sign in the definition already accounts for the opposite-sign strains). And <i>ν</i> can never exceed 0.5 for real materials.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For sudden-loading problems, skip the algebra and use the shortcut <i>x</i><sub>max</sub> = 2<i>x</i><sub>static</sub> — a suddenly applied load (released from the just-taut position) always stretches a wire to twice its gentle-loading elongation, with half the load’s work (<i>F</i><i>x</i><sub>static</sub>) ending up as heat on settling. Recognising this on sight turns a full energy-conservation derivation into a one-line answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Poisson’s ratio',
            note: '<i>ν</i> = −(lateral strain)/(longitudinal strain); dimensionless; practical range 0–0.5 (theoretical −1 to 0.5). Steel ≈ 0.3.',
          },
          {
            f: 'Volume on stretching',
            note: 'Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>) Δ<i>L</i>/<i>L</i>. <i>ν</i> = 0.5 ⇒ incompressible (Δ<i>V</i> = 0).',
          },
          { f: 'Elastic PE', note: '<i>U</i> = ½<i>F</i> Δ<i>L</i> = ½<i>σε</i> (Volume). The ½ comes from the average force.' },
          {
            f: 'Energy density',
            note: '<i>u</i> = ½<i>σε</i> = ½<i>Yε</i><sup>2</sup> = <i>σ</i><sup>2</sup>/(2<i>Y</i>) = <b>area under stress-strain curve</b> (per unit volume).',
          },
          {
            f: 'Sudden vs gradual',
            note: 'gradual → <i>W</i> = <i>U</i> = ½<i>F</i>Δ<i>L</i>, no heat. Sudden → <i>x</i><sub>max</sub> = 2<i>x</i><sub>static</sub>, on settling, half the load’s work (<i>F</i><i>x</i><sub>static</sub>) becomes heat.',
          },
        ],
        aids: [
          '“Stretch it, it slims” — longitudinal pull ⇒ lateral shrink (that’s <i>ν</i>).',
          '“Half the force, half the story” — elastic energy uses <i>F</i>/2, so <i>U</i> = ½<i>F</i>Δ<i>L</i>.',
          '“Drop it and it doubles” — sudden load gives twice the static stretch.',
        ],
      },
    ],
  },
];
