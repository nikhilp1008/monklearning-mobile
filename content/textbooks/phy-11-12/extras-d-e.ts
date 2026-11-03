import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Additional Topics D and E, word for word from the Class 11
 * Physics Master Reference: D Gas Mixtures: Effective Properties, Diffusion
 * Separation, and Connected Bulbs (pp. 876 to 879) and E Transport
 * Phenomena: Viscosity, Thermal Conductivity, and Diffusion from Kinetic
 * Theory (pp. 880 to 882). Each addendum prints its own practice problems
 * and answers. The addenda print no drawings. Inside a subscript, a
 * molecule's own index is a Unicode subscript digit (N<sub>O₂</sub>),
 * because a <sub> inside a <sub> is flattened.
 */
export const TOPICS: Topic[] = [
  {
    n: 'D',
    title: 'Gas Mixtures: Effective Properties, Diffusion Separation, and Connected Bulbs',
    extra: true,
    kalam: 'The effused gas is richer in the lighter component, and the residue becomes richer in the heavier component.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 gives Dalton’s law (<i>P</i><sub><i>i</i></sub> = <i>x</i><sub><i>i</i></sub><i>P</i>) and one mixture example. Topic 05 gives the mixture <i>γ</i> via the mole-weighted <i>C</i><sub><i>V</i></sub>. JEE expects you to handle: (i) the effective molar mass <i>M</i><sub>mix</sub> = ∑<i>x</i><sub><i>i</i></sub><i>M</i><sub><i>i</i></sub>; (ii) effusion of mixtures through a pinhole or porous plug (the lighter gas effuses faster, so the effused gas is enriched in the lighter component and the residue in the heavier one); (iii) two bulbs connected by a stopcock, initially containing different gases, where you find the final partial pressures after mixing; (iv) the speed of sound in a mixture; (v) the ratio of specific heats for a mixture of non-reacting gases whose vibrational modes may differ. The unifying trick: <b>mole fractions add, partial pressures add, internal energies add, but <i>γ</i> does not add — you must average <i>C</i><sub><i>V</i></sub> first.</b>',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>D1 — Effective molar mass and density.</b><br>For a mixture of <i>n</i><sub><i>i</i></sub> moles of gas <i>i</i> with molar mass <i>M</i><sub><i>i</i></sub>:<br><i>n</i><sub>tot</sub> = ∑<i>n</i><sub><i>i</i></sub>,   <i>x</i><sub><i>i</i></sub> = <i>n</i><sub><i>i</i></sub>/<i>n</i><sub>tot</sub>,   <i>M</i><sub>mix</sub> = ∑<i>x</i><sub><i>i</i></sub><i>M</i><sub><i>i</i></sub> = (∑<i>m</i><sub><i>i</i></sub>)/(∑<i>n</i><sub><i>i</i></sub>)<br><i>ρ</i><sub>mix</sub> = (∑<i>m</i><sub><i>i</i></sub>)/<i>V</i> = <i>PM</i><sub>mix</sub>/(<i>RT</i>)<br>Each component has its own rms speed, <i>v</i><sub>rms,<i>i</i></sub> = √(3<i>RT</i>/<i>M</i><sub><i>i</i></sub>). The mixture rms speed defined by √(3<i>RT</i>/<i>M</i><sub>mix</sub>) is the rms speed of a hypothetical gas of molar mass <i>M</i><sub>mix</sub>. (It equals √(3<i>P</i>/<i>ρ</i><sub>mix</sub>); the rms speed of the actual molecules is √(3<i>RT</i> ∑<i>x</i><sub><i>i</i></sub>/<i>M</i><sub><i>i</i></sub>).) <b>Do not average the individual <i>v</i><sub>rms</sub> values directly.</b>',
      },
      {
        t: 'p',
        html: '<b>D2 — Diffusion separation (enrichment).</b><br>When a gas mixture effuses through a small hole, the effusing gas has composition<br>(d<i>N</i><sub><i>i</i></sub>/d<i>t</i>)/(d<i>N</i><sub><i>j</i></sub>/d<i>t</i>) = (<i>x</i><sub><i>i</i></sub><i>P</i>/√<i>M</i><sub><i>i</i></sub>)/(<i>x</i><sub><i>j</i></sub><i>P</i>/√<i>M</i><sub><i>j</i></sub>) = (<i>x</i><sub><i>i</i></sub>/<i>x</i><sub><i>j</i></sub>)√(<i>M</i><sub><i>j</i></sub>/<i>M</i><sub><i>i</i></sub>)<br>The effused gas is richer in the lighter component, and the residue becomes richer in the heavier component. Let <i>N</i><sub>1</sub> and <i>N</i><sub>2</sub> be the moles of the two gases left in the vessel, with gas 1 the lighter, and define <i>α</i> = √(<i>M</i><sub>2</sub>/<i>M</i><sub>1</sub>) > 1. Since the two gases leave at the ratio d<i>N</i><sub>1</sub>/d<i>N</i><sub>2</sub> = <i>α</i> <i>N</i><sub>1</sub>/<i>N</i><sub>2</sub>, we have d ln <i>N</i><sub>1</sub> = <i>α</i> d ln <i>N</i><sub>2</sub>, which integrates (Rayleigh’s differential material balance, for a slowly effusing, well-mixed residue) to<br><i>N</i><sub>1</sub>/<i>N</i><sub>1,0</sub> = (<i>N</i><sub>2</sub>/<i>N</i><sub>2,0</sub>)<sup><i>α</i></sup>   ⟺   <i>x</i><sub>1</sub>/<i>x</i><sub>2</sub> = (<i>x</i><sub>1,0</sub>/<i>x</i><sub>2,0</sub>)(<i>N</i><sub>2</sub>/<i>N</i><sub>2,0</sub>)<sup><i>α</i>−1</sup><br>The exponent refers to the fraction of the heavier gas that remains, not to the fraction of the total gas that remains. To use the result, add the condition that fixes the total moles left, <i>N</i><sub>1</sub> + <i>N</i><sub>2</sub>, and solve.',
      },
      {
        t: 'p',
        html: '<b>Worked case.</b> Initially 1 mol of H<sub>2</sub> and 1 mol of O<sub>2</sub>. After 50% of the gas (1 mol in total) has effused, what is the ratio in the residue? Here <i>α</i> = √(32/2) = 4, so <i>N</i><sub>H₂</sub> = <i>N</i><sub>O₂</sub><sup>4</sup> (in mol) and <i>N</i><sub>H₂</sub> + <i>N</i><sub>O₂</sub> = 1. Solving <i>u</i> + <i>u</i><sup>4</sup> = 1 gives <i>u</i> = <i>N</i><sub>O₂</sub> = 0.724 mol and <i>N</i><sub>H₂</sub> = 0.276 mol, so <i>N</i><sub>H₂</sub> ∶ <i>N</i><sub>O₂</sub> ≈ 0.38 in the residue (down from 1).',
      },
      {
        t: 'p',
        html: '<b>D3 — Two bulbs connected, mixing.</b><br>Bulb 1 has volume <i>V</i><sub>1</sub> with gas A (<i>n</i><sub>A</sub> moles, temperature <i>T</i>); bulb 2 has volume <i>V</i><sub>2</sub> with gas B (<i>n</i><sub>B</sub> moles, temperature <i>T</i>). After the stopcock is opened the final volume is <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub>, and the final partial pressures are<br><i>P</i><sub>A</sub> = <i>n</i><sub>A</sub><i>RT</i>/<i>V</i>,   <i>P</i><sub>B</sub> = <i>n</i><sub>B</sub><i>RT</i>/<i>V</i>,   <i>P</i> = (<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>)<i>RT</i>/<i>V</i><br>If the temperatures differ initially, use energy conservation (Δ<i>U</i> = 0) to find the final <i>T</i>, then the partial pressures.',
      },
      {
        t: 'p',
        html: '<b>D4 — Speed of sound in a gas mixture.</b><br><i>c</i> = √(<i>γ</i><sub>mix</sub><i>RT</i>/<i>M</i><sub>mix</sub>)<br>Obtain <i>γ</i><sub>mix</sub> from the mole-weighted heat capacity, <i>C</i><sub><i>V</i>,mix</sub> = ∑<i>x</i><sub><i>i</i></sub><i>C</i><sub><i>V</i>,<i>i</i></sub>, and then <i>γ</i><sub>mix</sub> = 1 + <i>R</i>/<i>C</i><sub><i>V</i>,mix</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 10 L vessel contains a mixture of 4 g of He (<i>M</i> = 4) and 16 g of CH<sub>4</sub> (<i>M</i> = 16) at 300 K. Find (a) the mole fractions, (b) the total pressure, (c) the partial pressure of He, (d) the density of the mixture, and (e) the rms speed of the mixture (using <i>M</i><sub>mix</sub>).',
        steps: [
          '(a) <i>n</i><sub>He</sub> = 4/4 = 1 mol and <i>n</i><sub>CH₄</sub> = 16/16 = 1 mol, so <i>n</i><sub>tot</sub> = 2 mol and <i>x</i><sub>He</sub> = <i>x</i><sub>CH₄</sub> = 0.5. Also <i>M</i><sub>mix</sub> = 0.5 × 4 + 0.5 × 16 = 10 g mol<sup>−1</sup> = 0.010 kg mol<sup>−1</sup>.',
          '(b) With <i>V</i> = 10 L = 0.010 m<sup>3</sup>:<br><i>P</i> = <i>nRT</i>/<i>V</i> = (2 × 8.314 × 300)/0.010 = 4.99 × 10<sup>5</sup> Pa',
          '(c) <i>P</i><sub>He</sub> = <i>x</i><sub>He</sub><i>P</i> = 0.5 × 4.99 × 10<sup>5</sup> = 2.495 × 10<sup>5</sup> Pa.',
          '(d) <i>ρ</i> = <i>m</i><sub>tot</sub>/<i>V</i> = 20 g/10 L = 2 g L<sup>−1</sup> = 2 kg m<sup>−3</sup>. Check: <i>PM</i><sub>mix</sub>/(<i>RT</i>) = (4.99 × 10<sup>5</sup> × 0.010)/(8.314 × 300) = 4990/2494 = 2.00 kg m<sup>−3</sup>.',
          '(e) <i>v</i><sub>rms,mix</sub> = √(3<i>RT</i>/<i>M</i><sub>mix</sub>) = √((3 × 8.314 × 300)/0.010) = √748260 = 865 m s<sup>−1</sup>.',
          '(Individually, <i>v</i><sub>rms,He</sub> = √(3<i>RT</i>/0.004) ≈ 1368 m s<sup>−1</sup> and <i>v</i><sub>rms,CH₄</sub> = √(3<i>RT</i>/0.016) ≈ 684 m s<sup>−1</sup>. The mixture rms is not the average of these.) The rms speed over all the molecules is √(0.5 × 1368<sup>2</sup> + 0.5 × 684<sup>2</sup>) ≈ 1081 m s<sup>−1</sup>.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two identical bulbs of volume <i>V</i> are connected by a narrow tube of negligible volume, closed by a stopcock. Initially bulb 1 contains 1 mol of He at 400 K and bulb 2 contains 1 mol of N<sub>2</sub> at 300 K. The stopcock is opened and the system reaches equilibrium. The bulbs are thermally insulated. Find the final temperature and the final partial pressures of He and N<sub>2</sub>. (<i>C</i><sub><i>V</i>,He</sub> = 3<i>R</i>/2, <i>C</i><sub><i>V</i>,N₂</sub> = 5<i>R</i>/2.)',
        steps: [
          '<b>Energy conservation (adiabatic, rigid container):</b> Δ<i>U</i> = 0.<br><i>n</i><sub>He</sub><i>C</i><sub><i>V</i>,He</sub>(<i>T</i><sub>f</sub> − 400) + <i>n</i><sub>N₂</sub><i>C</i><sub><i>V</i>,N₂</sub>(<i>T</i><sub>f</sub> − 300) = 0<br>1 × (3<i>R</i>/2)(<i>T</i><sub>f</sub> − 400) + 1 × (5<i>R</i>/2)(<i>T</i><sub>f</sub> − 300) = 0',
          'Multiply by 2/<i>R</i>: 3(<i>T</i><sub>f</sub> − 400) + 5(<i>T</i><sub>f</sub> − 300) = 0 ⇒ 8<i>T</i><sub>f</sub> = 2700 ⇒ <i>T</i><sub>f</sub> = 337.5 K.',
          '<b>Final partial pressures:</b> the total volume is 2<i>V</i>, and each gas fills all of it.<br><i>P</i><sub>He</sub> = <i>n</i><sub>He</sub><i>RT</i><sub>f</sub>/(2<i>V</i>) = (1 × <i>R</i> × 337.5)/(2<i>V</i>) = 168.75 <i>R</i>/<i>V</i>,   <i>P</i><sub>N₂</sub> = <i>n</i><sub>N₂</sub><i>RT</i><sub>f</sub>/(2<i>V</i>) = 168.75 <i>R</i>/<i>V</i>',
          'The total final pressure is <i>P</i><sub>f</sub> = 337.5 <i>R</i>/<i>V</i>. (Before the stopcock was opened the pressures were <i>P</i><sub>He</sub> = 400 <i>R</i>/<i>V</i> in bulb 1 and <i>P</i><sub>N₂</sub> = 300 <i>R</i>/<i>V</i> in bulb 2.)',
          '<b>Check:</b> the total initial internal energy is 1 × 1.5<i>R</i> × 400 + 1 × 2.5<i>R</i> × 300 = 600<i>R</i> + 750<i>R</i> = 1350<i>R</i>. The final internal energy is 1 × 1.5<i>R</i> × 337.5 + 1 × 2.5<i>R</i> × 337.5 = 4<i>R</i> × 337.5 = 1350<i>R</i>.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A mixture contains 2 moles of N<sub>2</sub> and 3 moles of O<sub>2</sub>. Find the mole fraction of each, the average molar mass, and the partial pressure of N<sub>2</sub> if the total pressure is 5 atm.',
            a: '<i>x</i><sub>N₂</sub> = 0.4, <i>x</i><sub>O₂</sub> = 0.6. <i>M</i><sub>mix</sub> = 0.4 × 28 + 0.6 × 32 = 30.4 g mol<sup>−1</sup>. <i>P</i><sub>N₂</sub> = 0.4 × 5 = 2 atm.',
          },
          {
            q: '[NEET] Equal masses of CH<sub>4</sub> (<i>M</i> = 16) and H<sub>2</sub> (<i>M</i> = 2) are mixed. Find the ratio of their partial pressures.',
            a: '<i>n</i><sub>H₂</sub> ∶ <i>n</i><sub>CH₄</sub> = (<i>m</i>/2) ∶ (<i>m</i>/16) = 8 ∶ 1, so <i>P</i><sub>H₂</sub> ∶ <i>P</i><sub>CH₄</sub> = 8 ∶ 1.',
          },
          {
            q: '[JEE Main] A 1 ∶ 1 mole mixture of H<sub>2</sub> (<i>M</i> = 2) and D<sub>2</sub> (<i>M</i> = 4) effuses through a pinhole. What is the ratio of H<sub>2</sub> to D<sub>2</sub> in the effused gas?',
            a: 'Effused ratio = (<i>x</i><sub>H₂</sub>/<i>x</i><sub>D₂</sub>)√(<i>M</i><sub>D₂</sub>/<i>M</i><sub>H₂</sub>) = 1 × √(4/2) = √2 ≈ 1.414.',
          },
          {
            q: '[JEE Main] Two bulbs of volumes <i>V</i> and 2<i>V</i> contain the same gas at pressures <i>P</i> and 2<i>P</i> respectively, at the same temperature. They are connected. Find the final pressure.',
            a: '<i>n</i><sub>1</sub> = <i>PV</i>/(<i>RT</i>) and <i>n</i><sub>2</sub> = 2<i>P</i> · 2<i>V</i>/(<i>RT</i>) = 4<i>PV</i>/(<i>RT</i>), so <i>n</i><sub>tot</sub> = 5<i>PV</i>/(<i>RT</i>) and <i>V</i><sub>tot</sub> = 3<i>V</i>. Then <i>P</i><sub>f</sub> = <i>n</i><sub>tot</sub><i>RT</i>/<i>V</i><sub>tot</sub> = 5<i>P</i>/3.',
          },
          {
            q: '[JEE Advanced] A mixture of 1 mol of He and 1 mol of N<sub>2</sub> at 300 K is allowed to effuse through a pinhole into vacuum until half the total initial moles have escaped. Find the mole fraction of He in the residue. (Assume the residue remains uniform.)',
            a: 'Here gas 1 is He and gas 2 is N<sub>2</sub>, with <i>α</i> = √(<i>M</i><sub>N₂</sub>/<i>M</i><sub>He</sub>) = √(28/4) = √7 ≈ 2.646. The residue obeys <i>N</i><sub>He</sub> = <i>N</i><sub>N₂</sub><sup><i>α</i></sup> (moles, starting from 1 mol each), and half the initial 2 mol has gone, so <i>N</i><sub>He</sub> + <i>N</i><sub>N₂</sub> = 1 mol. Solving <i>u</i> + <i>u</i><sup>√7</sup> = 1 gives <i>u</i> = <i>N</i><sub>N₂</sub> = 0.663 mol and <i>N</i><sub>He</sub> = 0.337 mol. So <i>x</i><sub>He</sub> ≈ 0.34 in the residue.',
          },
          {
            q: '[JEE Advanced] Find the speed of sound in a mixture of 1 mol of He (<i>γ</i> = 5/3) and 1 mol of N<sub>2</sub> (<i>γ</i> = 7/5) at 300 K. Take <i>M</i><sub>He</sub> = 4 and <i>M</i><sub>N₂</sub> = 28 g mol<sup>−1</sup>.',
            a: '<i>M</i><sub>mix</sub> = 16 g mol<sup>−1</sup> = 0.016 kg mol<sup>−1</sup>. <i>C</i><sub><i>V</i>,mix</sub> = 0.5 × 3<i>R</i>/2 + 0.5 × 5<i>R</i>/2 = 2<i>R</i>, so <i>γ</i><sub>mix</sub> = 1 + <i>R</i>/(2<i>R</i>) = 1.5. Then <i>c</i> = √(<i>γRT</i>/<i>M</i><sub>mix</sub>) = √(1.5 × 8.314 × 300/0.016) = √233831 ≈ 483.6 m s<sup>−1</sup>.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Transport Phenomena: Viscosity, Thermal Conductivity, and Diffusion from Kinetic Theory',
    extra: true,
    kalam: 'At higher pressure λ decreases as 1/P but ρ increases as P, so the product ρλ stays constant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 introduces the mean free path <i>λ</i> and the collision frequency <i>ν</i>. It states that viscosity, thermal conductivity, and diffusion can be expressed in terms of <i>λ</i> and <i>v</i><sub>av</sub>, but does not derive them. JEE Advanced occasionally asks for these derivations or for the dependence of <i>η</i>, <i>κ</i>, <i>D</i> on temperature and pressure. The kinetic-theory expressions (correct to within factors of order unity) are as follows. Throughout, <i>v</i><sub>av</sub> = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>m</i>)) and <i>λ</i> = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>).',
      },
      {
        t: 'p',
        html: '<b>Viscosity (momentum transport):</b><br><i>η</i> = ⅓<i>ρv</i><sub>av</sub><i>λ</i> = ⅓ <i>mnv</i><sub>av</sub>/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>mv</i><sub>av</sub>/(3√2 π<i>d</i><sup>2</sup>)<br>Using <i>v</i><sub>av</sub> = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>m</i>)):<br><i>η</i> = [1/(3√2 π<i>d</i><sup>2</sup>)] √(8<i>mk</i><sub>B</sub><i>T</i>/π) = [2/(3π<i>d</i><sup>2</sup>)] √(<i>mk</i><sub>B</sub><i>T</i>/π) ∝ √<i>T</i>   (independent of pressure!)<br><b>Units:</b> [<i>η</i>] = Pa s = kg m<sup>−1</sup> s<sup>−1</sup>. Check: <i>mv</i>/<i>d</i><sup>2</sup> has units kg · (m s<sup>−1</sup>)/m<sup>2</sup> = kg m<sup>−1</sup> s<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Thermal conductivity (energy transport):</b><br><i>κ</i> = ⅓<i>ρv</i><sub>av</sub><i>λc</i><sub><i>v</i></sub> = ⅓<i>nv</i><sub>av</sub><i>λ</i>(<i>f</i>/2)<i>k</i><sub>B</sub><br>where <i>c</i><sub><i>v</i></sub> is the heat capacity per unit mass in the first form, and the heat capacity per molecule, (<i>f</i>/2)<i>k</i><sub>B</sub>, appears in the second form (which is why the prefactor changes from <i>ρ</i> to <i>n</i>). Substituting <i>λ</i>:<br><i>κ</i> = [<i>f</i>/(6√2 π<i>d</i><sup>2</sup>)] <i>v</i><sub>av</sub><i>k</i><sub>B</sub> ∝ √<i>T</i>   (independent of pressure at low density)<br><b>Units:</b> [<i>κ</i>] = W m<sup>−1</sup> K<sup>−1</sup> = J s<sup>−1</sup> m<sup>−1</sup> K<sup>−1</sup>. Check: <i>n</i> (m<sup>−3</sup>) × <i>v</i><sub>av</sub> (m s<sup>−1</sup>) × <i>λ</i> (m) × <i>k</i><sub>B</sub> (J K<sup>−1</sup>) = J s<sup>−1</sup> m<sup>−1</sup> K<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Diffusion coefficient (mass transport):</b><br><i>D</i> = ⅓<i>v</i><sub>av</sub><i>λ</i> ∝ <i>T</i><sup>3/2</sup>/<i>P</i><br><b>Units:</b> [<i>D</i>] = m<sup>2</sup> s<sup>−1</sup>. Check: <i>v</i><sub>av</sub> (m s<sup>−1</sup>) × <i>λ</i> (m) = m<sup>2</sup> s<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Schmidt number:</b> Sc = <i>η</i>/(<i>ρD</i>) ≈ 1. (In this simple theory the ratio is exactly 1, because all three transport coefficients have the same kinetic origin; measured values for gases are typically 0.7 to 1.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Estimate the viscosity of nitrogen gas at 300 K and 1 atm. Given: molecular diameter <i>d</i> = 3.7 × 10<sup>−10</sup> m and molecular mass <i>m</i> = 4.65 × 10<sup>−26</sup> kg.',
        steps: [
          '<i>η</i> = [1/(3√2 π<i>d</i><sup>2</sup>)] √(8<i>mk</i><sub>B</sub><i>T</i>/π)',
          '<i>d</i><sup>2</sup> = 1.369 × 10<sup>−19</sup> m<sup>2</sup>, so 3π<i>d</i><sup>2</sup> = 1.290 × 10<sup>−18</sup> m<sup>2</sup> and 3√2 π<i>d</i><sup>2</sup> = 1.825 × 10<sup>−18</sup> m<sup>2</sup>.',
          '8<i>mk</i><sub>B</sub><i>T</i> = 8 × 4.65 × 10<sup>−26</sup> × 1.38 × 10<sup>−23</sup> × 300 = 1.54 × 10<sup>−45</sup> kg<sup>2</sup> m<sup>2</sup> s<sup>−2</sup>.',
          'Divide by π: 4.90 × 10<sup>−46</sup>. Square root: √(4.90 × 10<sup>−46</sup>) = 2.21 × 10<sup>−23</sup> kg m s<sup>−1</sup>.',
          '<i>η</i> = (2.21 × 10<sup>−23</sup>)/(1.825 × 10<sup>−18</sup>) = 1.21 × 10<sup>−5</sup> Pa s',
          'The measured value for nitrogen at 300 K is about 1.8 × 10<sup>−5</sup> Pa s. The simple estimate is therefore of the right order of magnitude (about 30% low, which is typical of a theory that treats molecules as hard spheres with one mean free path and one mean speed), and it captures the main trends: <i>η</i> ∝ √<i>T</i> approximately (real gases show <i>T</i><sup>0.7</sup> to <i>T</i><sup>0.8</sup>), and no dependence on pressure.',
          '<b>Check pressure independence:</b> the formula for <i>η</i> contains no <i>n</i> or <i>P</i>. At higher pressure <i>λ</i> decreases as 1/<i>P</i> but <i>ρ</i> increases as <i>P</i>, so the product <i>ρλ</i> stays constant.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A vertical tube of length <i>L</i> = 1 m and cross-section <i>A</i> = 1 cm<sup>2</sup> contains two gases separated by a thin partition: He on top and CO<sub>2</sub> at the bottom, both at 300 K and 1 atm. The partition is removed. Estimate the time for the gases to mix completely by diffusion. The diffusion coefficient for He–CO<sub>2</sub> at 1 atm and 300 K is <i>D</i> ≈ 0.6 cm<sup>2</sup> s<sup>−1</sup>.',
        steps: [
          '<b>Concept:</b> diffusion over a distance <i>L</i> takes a time <i>t</i> ∼ <i>L</i><sup>2</sup>/<i>D</i> (from ∂<i>c</i>/∂<i>t</i> = <i>D</i> ∂<sup>2</sup><i>c</i>/∂<i>x</i><sup>2</sup>).',
          '<i>L</i> = 1 m = 100 cm and <i>D</i> = 0.6 cm<sup>2</sup> s<sup>−1</sup>, so<br><i>t</i> ≈ <i>L</i><sup>2</sup>/<i>D</i> = (10<sup>4</sup> cm<sup>2</sup>)/(0.6 cm<sup>2</sup> s<sup>−1</sup>) ≈ 1.7 × 10<sup>4</sup> s ≈ 4.6 hours',
          '<b>Refinement:</b> the leftover concentration difference dies away mainly through the slowest (fundamental) mode of a tube with no-flux ends, whose time constant is <i>t</i><sub>1</sub> = <i>L</i><sup>2</sup>/(π<sup>2</sup><i>D</i>) ≈ 10<sup>4</sup>/(9.87 × 0.6) ≈ 1.7 × 10<sup>3</sup> s ≈ 28 min. The non-uniformity falls by a factor e every <i>t</i><sub>1</sub>, so a nearly flat profile (within about 1%) takes about 4.6<i>t</i><sub>1</sub> ≈ 2 hours — the same order as the simple estimate <i>L</i><sup>2</sup>/<i>D</i>, which is the standard order-of-magnitude answer.',
          '<b>Dependence on <i>P</i> and <i>T</i>:</b> <i>D</i> ∝ <i>T</i><sup>3/2</sup>/<i>P</i>. At 10 atm, <i>t</i> would be 10× longer.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Using kinetic theory, derive the expression for the coefficient of viscosity <i>η</i> = ⅓<i>ρv</i><sub>av</sub><i>λ</i>. State the assumptions.',
            a: 'Standard derivation: momentum flux = ⅓<i>ρv</i><sub>av</sub><i>λ</i>(d<i>u</i>/d<i>y</i>), and <i>η</i> = flux/(d<i>u</i>/d<i>y</i>). Assumptions: a dilute ideal gas of identical hard-sphere molecules; a molecule crossing a layer carries the flow velocity of the layer where it last collided, about one mean free path away; one mean speed <i>v</i><sub>av</sub> and one <i>λ</i> for all molecules, a third of them moving along each axis; the flow velocity changes little over a distance <i>λ</i>.',
          },
          {
            q: '[NEET] The viscosity of an ideal gas is independent of pressure. Explain this using the kinetic-theory formula <i>η</i> = ⅓<i>ρv</i><sub>av</sub><i>λ</i>.',
            a: '<i>ρ</i> ∝ <i>P</i>, <i>λ</i> ∝ 1/<i>P</i>, and <i>v</i><sub>av</sub> is independent of <i>P</i>, so <i>η</i> is independent of <i>P</i>.',
          },
          {
            q: '[JEE Main] The thermal conductivity of a gas at 300 K and 1 atm is <i>κ</i>. What is its value at 600 K and 2 atm? (Assume an ideal gas and a constant molecular diameter.)',
            a: '<i>κ</i> ∝ √<i>T</i> and is independent of <i>P</i>, so <i>κ</i>(600 K, 2 atm) = <i>κ</i>(300 K, 1 atm) × √2.',
          },
          {
            q: '[JEE Main] The diffusion coefficient <i>D</i> of a gas is proportional to <i>T</i><sup><i>a</i></sup><i>P</i><sup><i>b</i></sup>. Find <i>a</i> and <i>b</i>.',
            a: '<i>D</i> ∝ <i>v</i><sub>av</sub><i>λ</i> ∝ √<i>T</i> × (<i>T</i>/<i>P</i>) = <i>T</i><sup>3/2</sup><i>P</i><sup>−1</sup>, so <i>a</i> = 3/2 and <i>b</i> = −1.',
          },
          {
            q: '[JEE Advanced] Show that in the simple kinetic theory the ratio of thermal conductivity to viscosity for a monatomic ideal gas is <i>κ</i>/<i>η</i> = <i>c</i><sub><i>v</i></sub>/<i>m</i> = (3/2)<i>k</i><sub>B</sub>/<i>m</i>. (Hint: here <i>c</i><sub><i>v</i></sub> = (3/2)<i>k</i><sub>B</sub> is the heat capacity per molecule, not per unit mass as in <i>κ</i> = ⅓<i>ρv</i><sub>av</sub><i>λc</i><sub><i>v</i></sub>.) What does a more careful theory give?',
            a: '<i>η</i> = ⅓<i>nmv</i><sub>av</sub><i>λ</i> and <i>κ</i> = ⅓<i>nv</i><sub>av</sub><i>λc</i><sub><i>v</i></sub> with <i>c</i><sub><i>v</i></sub> = (<i>f</i>/2)<i>k</i><sub>B</sub> per molecule. So <i>κ</i>/<i>η</i> = <i>c</i><sub><i>v</i></sub>/<i>m</i> = (<i>f</i>/2)<i>k</i><sub>B</sub>/<i>m</i>, and for a monatomic gas (<i>f</i> = 3) the simple theory gives <i>κ</i>/<i>η</i> = (3/2)<i>k</i><sub>B</sub>/<i>m</i>. A more careful treatment (Chapman–Enskog, summarised by Eucken’s relation <i>κ</i> = [(9<i>γ</i> − 5)/4] <i>ηc</i><sub><i>v</i></sub>/<i>m</i>) accounts for the correlation between a molecule’s energy and its velocity in a collision. For <i>γ</i> = 5/3 the factor is (9<i>γ</i> − 5)/4 = 5/2, so <i>κ</i>/<i>η</i> = (5/2) × (3/2)<i>k</i><sub>B</sub>/<i>m</i> = (15/4)<i>k</i><sub>B</sub>/<i>m</i>. The simple theory therefore underestimates <i>κ</i>/<i>η</i> by a factor of 5/2.',
          },
          {
            q: '[JEE Advanced] Two gases with molecular masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> and diameters <i>d</i><sub>1</sub>, <i>d</i><sub>2</sub> are mixed. The binary diffusion coefficient <i>D</i><sub>12</sub> is <i>D</i><sub>12</sub> = ⅓<i>v</i><sub>av,12</sub><i>λ</i><sub>12</sub>, where <i>v</i><sub>av,12</sub> = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>μ</i>)), with <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) the reduced mass, and <i>λ</i><sub>12</sub> = 1/[√2 π<i>n</i>((<i>d</i><sub>1</sub> + <i>d</i><sub>2</sub>)/2)<sup>2</sup>]. Derive the <i>T</i> and <i>P</i> dependence of <i>D</i><sub>12</sub>.',
            a: '<i>D</i><sub>12</sub> ∝ <i>v</i><sub>av,12</sub><i>λ</i><sub>12</sub> ∝ √<i>T</i> · 1/<i>n</i>. Since <i>n</i> = <i>P</i>/(<i>k</i><sub>B</sub><i>T</i>), this gives <i>D</i><sub>12</sub> ∝ √<i>T</i> · <i>T</i>/<i>P</i> = <i>T</i><sup>3/2</sup>/<i>P</i>, exactly as for a single gas. The masses enter through <i>μ</i> in <i>v</i><sub>av,12</sub>, and the diameters through <i>λ</i><sub>12</sub>. (The factor √2 in <i>λ</i><sub>12</sub> is exact only for identical molecules; for unlike molecules it becomes √(1 + <i>m</i><sub>1</sub>/<i>m</i><sub>2</sub>), which does not change the <i>T</i> and <i>P</i> scaling.)',
          },
        ],
      },
    ],
  },
];
