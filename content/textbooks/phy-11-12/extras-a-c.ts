import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Additional Topics A to C, word for word from the Class 11
 * Physics Master Reference, pages 862 to 876: the addenda's shared opening
 * (p. 862, set at the head of Addendum A), then A Adiabatic Processes for an
 * Ideal Gas (pp. 862 to 867), B Real Gases: Van der Waals Equation,
 * Compressibility Factor, and Virial Expansion (pp. 867 to 871) and C Maxwell
 * Distribution: Fractions, Effusion, and Most-Probable Kinetic Energy
 * (pp. 871 to 876). Each addendum prints its own practice problems and
 * answers. These pages print no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Adiabatic Processes for an Ideal Gas',
    extra: true,
    kalam: 'For an adiabatic process Q = 0, so dU = −dW.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the kinetic derivation of pressure, the equipartition route to specific heats, the three Maxwell speeds, and the mean-free-path formula. Five JEE patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A marries the first law of thermodynamics (Chapter 11) to the kinetic value of <i>γ</i> (Topic 05) to derive the adiabatic relations and work formulas that JEE treats as bread-and-butter. Addendum B goes back to the “real gas” caveats of Topics 01 and 02 and supplies the Van der Waals equation, the compressibility factor, and the virial expansion — the only quantitative tools for the non-ideal questions that appear every year. Addendum C takes the Maxwell distribution (Topic 04) past the three characteristic speeds and shows how to read fractions off the curve, derive the effusion rate, and handle the most-probable kinetic energy — the Advanced-level distributional questions. Addendum D upgrades the mixture treatment of Topics 02 and 05: effective molar mass, diffusion separation, and the mole-fraction algebra that turns a two-gas problem into a one-gas problem. Addendum E connects the mean free path (Topic 05) to the transport coefficients — viscosity, thermal conductivity, and diffusion — deriving each from the collision-cylinder picture so that a numerical on any of them becomes a one-line substitution.<br><br>Numbering continues from the chapter’s topics. Nothing here is new physics. Every method below is the first law, the ideal gas law, the Maxwell integral, or the collision cylinder, applied one step further or combined with a neighbour.',
      },
      {
        t: 'p',
        html: 'Topic 05 gives you <i>γ</i> = 1 + 2/<i>f</i> and the molar heat capacities <i>C</i><sub><i>V</i></sub> = <i>fR</i>/2, <i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i>. Topic 02 gives you <i>PV</i> = <i>nRT</i>. JEE Main and Advanced expect you to combine them with the first law (Δ<i>U</i> = <i>Q</i> − <i>W</i>) to obtain the adiabatic curve <i>PV</i><sup><i>γ</i></sup> = constant, the temperature–volume relation <i>TV</i><sup><i>γ</i>−1</sup> = constant, the work done in an adiabatic change, and the special case of free expansion (Joule expansion), where <i>Q</i> = <i>W</i> = 0 so Δ<i>U</i> = 0 and the temperature of an ideal gas stays constant. CBSE Boards frequently ask for the derivation of <i>PV</i><sup><i>γ</i></sup> = const and the work integral; NEET asks for the final temperature after adiabatic compression; JEE Advanced hides adiabatic steps inside cycles (Carnot, Otto) and asks for the slope of an adiabat on a <i>P</i>–<i>V</i> diagram, d<i>P</i>/d<i>V</i> = −<i>γP</i>/<i>V</i>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>A1 — Derive the adiabatic relation from the first law.</b><br>For an adiabatic process <i>Q</i> = 0, so d<i>U</i> = −d<i>W</i>. For an ideal gas d<i>U</i> = <i>nC</i><sub><i>V</i></sub> d<i>T</i> and d<i>W</i> = <i>P</i> d<i>V</i>:<br><i>nC</i><sub><i>V</i></sub> d<i>T</i> = −<i>P</i> d<i>V</i><br>Substitute <i>P</i> = <i>nRT</i>/<i>V</i>:<br><i>nC</i><sub><i>V</i></sub> d<i>T</i> = −(<i>nRT</i>/<i>V</i>) d<i>V</i><br>Cancel <i>n</i> and separate variables:<br><i>C</i><sub><i>V</i></sub> d<i>T</i>/<i>T</i> = −<i>R</i> d<i>V</i>/<i>V</i><br>Use Mayer’s relation <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> and <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>, which give <i>R</i> = <i>C</i><sub><i>V</i></sub>(<i>γ</i> − 1):<br>d<i>T</i>/<i>T</i> = −(<i>γ</i> − 1) d<i>V</i>/<i>V</i><br>Integrate from state 1 to state 2:<br>ln(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = −(<i>γ</i> − 1) ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = ln(<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i>−1</sup><br><i>T</i><sub>2</sub><i>V</i><sub>2</sub><sup><i>γ</i>−1</sup> = <i>T</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i>−1</sup>   ⟹   <i>TV</i><sup><i>γ</i>−1</sup> = constant<br>Combine with <i>PV</i> = <i>nRT</i> to eliminate <i>T</i>:<br>(<i>PV</i>/(<i>nR</i>))<i>V</i><sup><i>γ</i>−1</sup> = constant   ⟹   <i>PV</i><sup><i>γ</i></sup> = constant',
      },
      {
        t: 'p',
        html: '<b>Units check:</b> with <i>P</i> in Pa and <i>V</i> in m<sup>3</sup>, <i>PV</i><sup><i>γ</i></sup> has units Pa m<sup>3<i>γ</i></sup>, the same on both sides of the equation.',
      },
      {
        t: 'p',
        html: '<b>A2 — Work done in a reversible adiabatic change.</b><br><i>W</i> = ∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> <i>P</i> d<i>V</i> = ∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> (<i>K</i>/<i>V</i><sup><i>γ</i></sup>) d<i>V</i>   (<i>K</i> = <i>P</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i></sup> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub><sup><i>γ</i></sup>)<br><i>W</i> = <i>K</i>(<i>V</i><sub>2</sub><sup>1−<i>γ</i></sup> − <i>V</i><sub>1</sub><sup>1−<i>γ</i></sup>)/(1 − <i>γ</i>) = (<i>P</i><sub>2</sub><i>V</i><sub>2</sub> − <i>P</i><sub>1</sub><i>V</i><sub>1</sub>)/(1 − <i>γ</i>) = <i>nR</i>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(1 − <i>γ</i>)<br>Since 1 − <i>γ</i> = −(<i>γ</i> − 1) and <i>nR</i>/(<i>γ</i> − 1) = <i>nC</i><sub><i>V</i></sub>:<br><i>W</i> = <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = (<i>P</i><sub>1</sub><i>V</i><sub>1</sub> − <i>P</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>γ</i> − 1)',
      },
      {
        t: 'p',
        html: '<b>Sign convention:</b> <i>W</i> > 0 when the gas expands (<i>V</i><sub>2</sub> > <i>V</i><sub>1</sub>, <i>T</i><sub>2</sub> < <i>T</i><sub>1</sub>).',
      },
      {
        t: 'p',
        html: '<b>A3 — Free expansion (Joule expansion) into vacuum.</b><br>No external pressure gives <i>W</i> = 0. Adiabatic walls give <i>Q</i> = 0. The first law then gives Δ<i>U</i> = 0. For an ideal gas <i>U</i> = <i>nC</i><sub><i>V</i></sub><i>T</i> depends only on <i>T</i>, so <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>. <b>The temperature does not change.</b> This is a favourite conceptual trap: “adiabatic” does not imply “temperature changes”; only reversible adiabatic changes follow <i>PV</i><sup><i>γ</i></sup> = const. Free expansion is adiabatic but irreversible; the gas does no work and its temperature stays constant.',
      },
      {
        t: 'p',
        html: '<b>A4 — Slope of adiabat vs isotherm on a <i>P</i>–<i>V</i> diagram.</b><br>Isotherm: <i>P</i> = <i>nRT</i>/<i>V</i>, so (∂<i>P</i>/∂<i>V</i>)<sub><i>T</i></sub> = −<i>P</i>/<i>V</i>.<br>Adiabat: <i>PV</i><sup><i>γ</i></sup> = const gives <i>γPV</i><sup><i>γ</i>−1</sup> d<i>V</i> + <i>V</i><sup><i>γ</i></sup> d<i>P</i> = 0, so (∂<i>P</i>/∂<i>V</i>)<sub><i>S</i></sub> = −<i>γP</i>/<i>V</i>.<br>Since <i>γ</i> > 1, the adiabat is steeper (more negative) than the isotherm at the same point.',
      },
      {
        t: 'table',
        title: 'Standard Adiabatic Relations (for n moles of ideal gas, reversible)',
        head: ['Quantity', 'Expression', 'Units'],
        rows: [
          [
            '<i>P</i>–<i>V</i> relation',
            '<i>P</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i></sup> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub><sup><i>γ</i></sup>',
            'Pa m<sup>3<i>γ</i></sup>',
          ],
          [
            '<i>T</i>–<i>V</i> relation',
            '<i>T</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i>−1</sup> = <i>T</i><sub>2</sub><i>V</i><sub>2</sub><sup><i>γ</i>−1</sup>',
            'K m<sup>3(<i>γ</i>−1)</sup>',
          ],
          [
            '<i>P</i>–<i>T</i> relation',
            '<i>P</i><sub>1</sub><sup>1−<i>γ</i></sup><i>T</i><sub>1</sub><sup><i>γ</i></sup> = <i>P</i><sub>2</sub><sup>1−<i>γ</i></sup><i>T</i><sub>2</sub><sup><i>γ</i></sup>',
            'Pa<sup>1−<i>γ</i></sup> K<sup><i>γ</i></sup>',
          ],
          ['Work done by gas', '<i>W</i> = (<i>P</i><sub>1</sub><i>V</i><sub>1</sub> − <i>P</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>γ</i> − 1)', 'J'],
          ['Work done by gas (equivalent form)', '<i>W</i> = <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)', 'J'],
          ['Δ<i>U</i>', '<i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = −<i>W</i>', 'J'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level / JEE Main Level',
        q: 'One mole of a diatomic ideal gas (<i>γ</i> = 7/5) at 300 K and 1.0 × 10<sup>5</sup> Pa is compressed adiabatically and reversibly until its pressure reaches 8.0 × 10<sup>5</sup> Pa. Find (a) the final temperature, (b) the final volume, and (c) the work done on the gas.',
        steps: [
          '<b>Given:</b> <i>n</i> = 1 mol, <i>γ</i> = 7/5 = 1.4, <i>T</i><sub>1</sub> = 300 K, <i>P</i><sub>1</sub> = 1.0 × 10<sup>5</sup> Pa, <i>P</i><sub>2</sub> = 8.0 × 10<sup>5</sup> Pa, <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.',
          '<b>(a) Final temperature — use the <i>P</i>–<i>T</i> relation:</b><br><i>P</i><sub>1</sub><sup>1−<i>γ</i></sup><i>T</i><sub>1</sub><sup><i>γ</i></sup> = <i>P</i><sub>2</sub><sup>1−<i>γ</i></sup><i>T</i><sub>2</sub><sup><i>γ</i></sup><br><i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>(<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub>)<sup>(<i>γ</i>−1)/<i>γ</i></sup> = 300 × 8<sup>0.4/1.4</sup> = 300 × 8<sup>2/7</sup><br>8<sup>2/7</sup> = (2<sup>3</sup>)<sup>2/7</sup> = 2<sup>6/7</sup> ≈ 1.811<br><i>T</i><sub>2</sub> ≈ 300 × 1.811 = 543.3 K',
          '<b>(b) Final volume — use the ideal gas law at state 2:</b><br><i>V</i><sub>2</sub> = <i>nRT</i><sub>2</sub>/<i>P</i><sub>2</sub> = (1 × 8.314 × 543.3)/(8.0 × 10<sup>5</sup>) = 4517/(8.0 × 10<sup>5</sup>) = 5.65 × 10<sup>−3</sup> m<sup>3</sup> = 5.65 L<br>(Check: <i>V</i><sub>1</sub> = <i>nRT</i><sub>1</sub>/<i>P</i><sub>1</sub> = 0.0249 m<sup>3</sup> = 24.9 L; <i>V</i><sub>2</sub> < <i>V</i><sub>1</sub>, consistent with compression.)',
          '<b>(c) Work done on the gas = −<i>W</i><sub>by gas</sub>:</b><br><i>W</i><sub>by gas</sub> = (<i>P</i><sub>1</sub><i>V</i><sub>1</sub> − <i>P</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>γ</i> − 1) = <i>nR</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/(<i>γ</i> − 1)<br><i>W</i><sub>by gas</sub> = (1 × 8.314 × (300 − 543.3))/0.4 = (8.314 × (−243.3))/0.4 = −5057 J<br>Work done <b>on</b> the gas = +5057 J ≈ 5.06 kJ.',
          '<b>Check:</b> Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub> Δ<i>T</i> with <i>C</i><sub><i>V</i></sub> = 5<i>R</i>/2 = 20.785 J mol<sup>−1</sup> K<sup>−1</sup>, so Δ<i>U</i> = 1 × 20.785 × (543.3 − 300) = 20.785 × 243.3 ≈ 5057 J. This matches the work done on the gas (<i>Q</i> = 0 ⇒ Δ<i>U</i> = <i>W</i><sub>on</sub>).',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A vertical cylinder with a frictionless piston of mass <i>M</i> = 10 kg and cross-sectional area <i>A</i> = 0.01 m<sup>2</sup> contains 0.5 mol of a monatomic ideal gas (<i>γ</i> = 5/3). The piston is pinned in place and the gas is at <i>T</i><sub>1</sub> = 400 K and <i>P</i><sub>1</sub> = 2.0 × 10<sup>5</sup> Pa. The pin is removed and the piston moves up until it comes to rest at its new equilibrium position. Atmospheric pressure is <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa, and the cylinder walls and piston are thermally insulating. Find the final temperature <i>T</i><sub>2</sub> and the final volume <i>V</i><sub>2</sub> of the gas. (Take <i>g</i> = 9.8 m s<sup>−2</sup>.)',
        steps: [
          '<b>Concept:</b> Once the pin is removed, the gas expands against a constant external pressure <i>P</i><sub>ext</sub> = <i>P</i><sub>0</sub> + <i>Mg</i>/<i>A</i>. The process is adiabatic (<i>Q</i> = 0) but <b>irreversible</b>: the external pressure is constant and is not equal to the gas pressure at each step, so we cannot use <i>PV</i><sup><i>γ</i></sup> = const. Use the first law directly:<br>Δ<i>U</i> = <i>W</i><sub>on</sub> = −<i>P</i><sub>ext</sub>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)',
          '<b>External pressure:</b><br><i>P</i><sub>ext</sub> = 1.0 × 10<sup>5</sup> + (10 × 9.8)/0.01 = 1.0 × 10<sup>5</sup> + 9.8 × 10<sup>3</sup> = 1.098 × 10<sup>5</sup> Pa<br>This is lower than <i>P</i><sub>1</sub> = 2.0 × 10<sup>5</sup> Pa, so the gas does expand. At the end the piston is in mechanical equilibrium, so <i>P</i><sub>2</sub> = <i>P</i><sub>ext</sub>.',
          '<b>First law</b>, with <i>C</i><sub><i>V</i></sub> = 3<i>R</i>/2:<br><i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = −<i>P</i><sub>ext</sub>(<i>nRT</i><sub>2</sub>/<i>P</i><sub>ext</sub> − <i>nRT</i><sub>1</sub>/<i>P</i><sub>1</sub>) = −<i>nR</i>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub><i>P</i><sub>ext</sub>/<i>P</i><sub>1</sub>)<br>Cancel <i>nR</i> and use <i>C</i><sub><i>V</i></sub>/<i>R</i> = 3/2:<br>(3/2)(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = −<i>T</i><sub>2</sub> + <i>T</i><sub>1</sub><i>P</i><sub>ext</sub>/<i>P</i><sub>1</sub>   ⟹   <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>(<i>C</i><sub><i>V</i></sub> + <i>R</i> <i>P</i><sub>ext</sub>/<i>P</i><sub>1</sub>)/(<i>C</i><sub><i>V</i></sub> + <i>R</i>) = <i>T</i><sub>1</sub>(3/2 + <i>P</i><sub>ext</sub>/<i>P</i><sub>1</sub>)/(5/2)',
          '<b>Numbers:</b> <i>P</i><sub>ext</sub>/<i>P</i><sub>1</sub> = 1.098/2.0 = 0.549, so<br><i>T</i><sub>2</sub> = 400 × (1.5 + 0.549)/2.5 = 400 × 0.8196 ≈ 328 K',
          '<b>Final volume:</b><br><i>V</i><sub>2</sub> = <i>nRT</i><sub>2</sub>/<i>P</i><sub>ext</sub> = (0.5 × 8.314 × 327.8)/(1.098 × 10<sup>5</sup>) = 1.24 × 10<sup>−2</sup> m<sup>3</sup> = 12.4 L,   <i>V</i><sub>1</sub> = <i>nRT</i><sub>1</sub>/<i>P</i><sub>1</sub> = 8.31 × 10<sup>−3</sup> m<sup>3</sup> = 8.31 L',
          '<b>Check:</b> Δ<i>U</i> = 0.5 × 1.5 × 8.314 × (327.8 − 400) ≈ −450 J and −<i>P</i><sub>ext</sub>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>) = −1.098 × 10<sup>5</sup> × (1.241 − 0.831) × 10<sup>−2</sup> ≈ −450 J. The gas does about 450 J of work on the surroundings at the expense of its internal energy, so it cools.',
          '(This problem tests whether you blindly apply <i>PV</i><sup><i>γ</i></sup> = const to an irreversible adiabatic process. Reversible-adiabatic would instead give <i>T</i><sub>2</sub> = 400 (1.098/2.0)<sup>2/5</sup> ≈ 315 K for the same final pressure.)',
        ],
        ans: '<i>T</i><sub>2</sub> ≈ 328 K, <i>V</i><sub>2</sub> ≈ 12.4 L.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Derive the relation <i>TV</i><sup><i>γ</i>−1</sup> = constant for a reversible adiabatic process of an ideal gas starting from the first law.',
            a: 'See Method A1.',
          },
          {
            q: '[NEET] Two moles of a monatomic ideal gas (<i>γ</i> = 5/3) at 300 K are compressed adiabatically and reversibly from 10 L to 2 L. Find the final temperature and the work done on the gas.',
            a: '<i>T</i><sub>2</sub> = 300 × (10/2)<sup>2/3</sup> = 300 × 5<sup>2/3</sup> ≈ 300 × 2.924 = 877 K. <i>W</i><sub>on</sub> = <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = 2 × (3<i>R</i>/2) × 577 = 3 × 8.314 × 577 ≈ 14.4 kJ.',
          },
          {
            q: '[JEE Main] A gas undergoes a reversible adiabatic expansion. Its pressure drops to half its initial value. If <i>γ</i> = 1.4, find the ratio of final to initial volume and the ratio of final to initial temperature.',
            a: '<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = 1/2 ⇒ (<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i></sup> = 1/2 ⇒ <i>V</i><sub>2</sub>/<i>V</i><sub>1</sub> = 2<sup>1/<i>γ</i></sup> = 2<sup>1/1.4</sup> ≈ 1.64. Then <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i>−1</sup> = (1/1.64)<sup>0.4</sup> ≈ 0.82. (Check: (<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub>)<sup>(<i>γ</i>−1)/<i>γ</i></sup> = 0.5<sup>0.2857</sup> ≈ 0.82.)',
          },
          {
            q: '[JEE Main] An ideal gas (<i>γ</i> = 1.5) is expanded adiabatically so that its volume doubles. By what factor does the pressure change?',
            a: '<i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i></sup> = (1/2)<sup>1.5</sup> = 1/(2√2) ≈ 0.354.',
          },
          {
            q: '[JEE Advanced] One mole of a diatomic ideal gas (<i>γ</i> = 7/5) at 300 K expands adiabatically against a constant external pressure of 1.0 × 10<sup>5</sup> Pa until mechanical equilibrium is reached. The initial pressure is 4.0 × 10<sup>5</sup> Pa. Find the final temperature. (Use <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.)',
            a: 'First law: <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = −<i>P</i><sub>ext</sub>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>) with <i>C</i><sub><i>V</i></sub> = 5<i>R</i>/2 and <i>P</i><sub>ext</sub> = 1 × 10<sup>5</sup> Pa. <i>V</i><sub>1</sub> = <i>nRT</i><sub>1</sub>/<i>P</i><sub>1</sub> = 1 × 8.314 × 300/(4 × 10<sup>5</sup>) = 6.2355 × 10<sup>−3</sup> m<sup>3</sup> and <i>V</i><sub>2</sub> = <i>nRT</i><sub>2</sub>/<i>P</i><sub>ext</sub>. Then<br>20.785(<i>T</i><sub>2</sub> − 300) = −(8.314<i>T</i><sub>2</sub> − 1 × 10<sup>5</sup> × 6.2355 × 10<sup>−3</sup>) = −8.314<i>T</i><sub>2</sub> + 623.55<br>20.785<i>T</i><sub>2</sub> − 6235.5 = −8.314<i>T</i><sub>2</sub> + 623.55 ⇒ 29.099<i>T</i><sub>2</sub> = 6859.05 ⇒ <i>T</i><sub>2</sub> ≈ 235.7 K',
          },
          {
            q: '[JEE Advanced] Show that for a reversible adiabatic process the bulk modulus is <i>B</i> = −<i>V</i>(d<i>P</i>/d<i>V</i>) = <i>γP</i>. Compare with the isothermal bulk modulus.',
            a: 'Adiabat: <i>PV</i><sup><i>γ</i></sup> = <i>K</i> ⇒ <i>P</i> = <i>KV</i><sup>−<i>γ</i></sup> ⇒ d<i>P</i>/d<i>V</i> = −<i>γKV</i><sup>−<i>γ</i>−1</sup> = −<i>γP</i>/<i>V</i>. So <i>B</i> = −<i>V</i>(d<i>P</i>/d<i>V</i>) = <i>γP</i>. Isotherm: <i>B</i> = <i>P</i>. The adiabatic bulk modulus is <i>γ</i> times the isothermal one.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Real Gases: Van der Waals Equation, Compressibility Factor, and Virial Expansion',
    extra: true,
    kalam:
      'Topics 01 and 02 state that real gases deviate from ideality at high pressure and low temperature because molecules have finite volume and attract each other.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01 and 02 state that real gases deviate from ideality at high pressure and low temperature because molecules have finite volume and attract each other. The chapter does not give the equation that quantifies this. JEE Main and Advanced regularly ask for the Van der Waals equation, the compressibility factor <i>Z</i> = <i>PV</i>/(<i>RT</i>), its limiting behaviour, the virial expansion <i>Z</i> = 1 + <i>B</i>/<i>V</i><sub>m</sub> + <i>C</i>/<i>V</i><sub>m</sub><sup>2</sup> + ⋯, the Boyle temperature, and the critical constants (<i>T</i><sub>c</sub>, <i>P</i><sub>c</sub>, <i>V</i><sub>c</sub>) in terms of <i>a</i> and <i>b</i>. NEET occasionally asks for the physical meaning of <i>a</i> and <i>b</i>. CBSE asks for the Van der Waals equation and the correction terms.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>B1 — Van der Waals equation for <i>n</i> moles.</b><br>(<i>P</i> + <i>an</i><sup>2</sup>/<i>V</i><sup>2</sup>)(<i>V</i> − <i>nb</i>) = <i>nRT</i><br>• <i>a</i> (units Pa m<sup>6</sup> mol<sup>−2</sup>) measures intermolecular attraction. The pressure correction <i>an</i><sup>2</sup>/<i>V</i><sup>2</sup> arises because molecules near the wall are pulled back by their neighbours, which reduces the momentum transferred to the wall.<br>• <i>b</i> (units m<sup>3</sup> mol<sup>−1</sup>) is the excluded volume per mole (roughly 4× the actual molecular volume). The volume available for motion is <i>V</i> − <i>nb</i>.<br>For 1 mole: (<i>P</i> + <i>a</i>/<i>V</i><sub>m</sub><sup>2</sup>)(<i>V</i><sub>m</sub> − <i>b</i>) = <i>RT</i>, where <i>V</i><sub>m</sub> = <i>V</i>/<i>n</i> is the molar volume.',
      },
      {
        t: 'p',
        html: '<b>B2 — Compressibility factor <i>Z</i>.</b><br><i>Z</i> = <i>PV</i><sub>m</sub>/(<i>RT</i>)<br>Ideal gas: <i>Z</i> = 1 always. Real gas: <i>Z</i> deviates from 1. From the Van der Waals equation:<br><i>Z</i> = <i>V</i><sub>m</sub>/(<i>V</i><sub>m</sub> − <i>b</i>) − <i>a</i>/(<i>RTV</i><sub>m</sub>)',
      },
      {
        t: 'p',
        html: '<b>Low pressure (large <i>V</i><sub>m</sub>):</b> expand <i>V</i><sub>m</sub>/(<i>V</i><sub>m</sub> − <i>b</i>) = 1 + <i>b</i>/<i>V</i><sub>m</sub> + <i>b</i><sup>2</sup>/<i>V</i><sub>m</sub><sup>2</sup> + ⋯, so<br><i>Z</i> ≈ 1 + (<i>b</i> − <i>a</i>/(<i>RT</i>))(1/<i>V</i><sub>m</sub>) + ⋯',
      },
      {
        t: 'p',
        html: '<b>High pressure (small <i>V</i><sub>m</sub>, <i>V</i><sub>m</sub> → <i>b</i>):</b> the repulsion term dominates, <i>V</i><sub>m</sub>/(<i>V</i><sub>m</sub> − <i>b</i>) → ∞, so <i>Z</i> > 1 and grows.',
      },
      {
        t: 'p',
        html: '<b>Boyle temperature <i>T</i><sub>B</sub>:</b> the temperature at which the 1/<i>V</i><sub>m</sub> term vanishes, i.e. <i>b</i> = <i>a</i>/(<i>RT</i><sub>B</sub>), so <i>T</i><sub>B</sub> = <i>a</i>/(<i>Rb</i>). At <i>T</i> = <i>T</i><sub>B</sub>, <i>Z</i> ≈ 1 over a wide range of low pressures (the gas behaves most ideally).',
      },
      {
        t: 'p',
        html: '<b>B3 — Virial expansion.</b><br><i>Z</i> = 1 + <i>B</i>(<i>T</i>)/<i>V</i><sub>m</sub> + <i>C</i>(<i>T</i>)/<i>V</i><sub>m</sub><sup>2</sup> + ⋯<br><i>B</i>(<i>T</i>) = <i>b</i> − <i>a</i>/(<i>RT</i>) is the second virial coefficient. At low pressures, <i>Z</i> ≈ 1 + <i>B</i>(<i>T</i>)<i>P</i>/(<i>RT</i>).',
      },
      {
        t: 'p',
        html: 'Sign of <i>B</i>(<i>T</i>): for <i>T</i> < <i>T</i><sub>B</sub>, <i>B</i> < 0 (attraction dominates, <i>Z</i> < 1); for <i>T</i> > <i>T</i><sub>B</sub>, <i>B</i> > 0 (repulsion dominates, <i>Z</i> > 1); at <i>T</i> = <i>T</i><sub>B</sub>, <i>B</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>B4 — Critical constants.</b> At the critical point the isotherm has an inflection: (∂<i>P</i>/∂<i>V</i><sub>m</sub>)<sub><i>T</i></sub> = 0 and (∂<sup>2</sup><i>P</i>/∂<i>V</i><sub>m</sub><sup>2</sup>)<sub><i>T</i></sub> = 0. Solving gives<br><i>V</i><sub>c</sub> = 3<i>b</i>,   <i>P</i><sub>c</sub> = <i>a</i>/(27<i>b</i><sup>2</sup>),   <i>T</i><sub>c</sub> = 8<i>a</i>/(27<i>Rb</i>)<br>Useful ratio:<br><i>P</i><sub>c</sub><i>V</i><sub>c</sub>/(<i>RT</i><sub>c</sub>) = 3/8 = 0.375<br>(Real gases have <i>Z</i><sub>c</sub> ≈ 0.27–0.29; the Van der Waals model overestimates it.)',
      },
      {
        t: 'p',
        html: '<b>B5 — Units of <i>a</i> and <i>b</i>.</b><br>From <i>P</i> + <i>an</i><sup>2</sup>/<i>V</i><sup>2</sup>: [<i>a</i>] = [<i>P</i>][<i>V</i>]<sup>2</sup>[<i>n</i>]<sup>−2</sup> = Pa m<sup>6</sup> mol<sup>−2</sup>.<br>From <i>V</i> − <i>nb</i>: [<i>b</i>] = [<i>V</i>]/[<i>n</i>] = m<sup>3</sup> mol<sup>−1</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level / NEET Level',
        q: 'For a Van der Waals gas the constants are <i>a</i> = 0.364 Pa m<sup>6</sup> mol<sup>−2</sup> and <i>b</i> = 4.27 × 10<sup>−5</sup> m<sup>3</sup> mol<sup>−1</sup>. Calculate (a) the Boyle temperature, (b) the critical temperature, and (c) the critical pressure.',
        steps: [
          '<b>Given:</b> <i>a</i> = 0.364 Pa m<sup>6</sup> mol<sup>−2</sup>, <i>b</i> = 4.27 × 10<sup>−5</sup> m<sup>3</sup> mol<sup>−1</sup>, <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.',
          '<b>(a) Boyle temperature:</b><br><i>T</i><sub>B</sub> = <i>a</i>/(<i>Rb</i>) = 0.364/(8.314 × 4.27 × 10<sup>−5</sup>) = 0.364/(3.55 × 10<sup>−4</sup>) = 1025 K',
          '<b>(b) Critical temperature:</b><br><i>T</i><sub>c</sub> = 8<i>a</i>/(27<i>Rb</i>) = (8/27)<i>T</i><sub>B</sub> = (8/27) × 1025 = 303.7 K',
          '<b>(c) Critical pressure:</b><br><i>P</i><sub>c</sub> = <i>a</i>/(27<i>b</i><sup>2</sup>) = 0.364/(27 × (4.27 × 10<sup>−5</sup>)<sup>2</sup>) = 0.364/(27 × 1.823 × 10<sup>−9</sup>) = 0.364/(4.92 × 10<sup>−8</sup>) = 7.40 × 10<sup>6</sup> Pa ≈ 73 atm',
          '<b>Check:</b> <i>V</i><sub>c</sub> = 3<i>b</i> = 1.28 × 10<sup>−4</sup> m<sup>3</sup> mol<sup>−1</sup> = 128 cm<sup>3</sup> mol<sup>−1</sup>, and<br><i>Z</i><sub>c</sub> = <i>P</i><sub>c</sub><i>V</i><sub>c</sub>/(<i>RT</i><sub>c</sub>) = (7.4 × 10<sup>6</sup> × 1.28 × 10<sup>−4</sup>)/(8.314 × 303.7) = 947/2525 = 0.375',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'One mole of a Van der Waals gas undergoes a reversible isothermal expansion at temperature <i>T</i> from volume <i>V</i><sub>1</sub> to <i>V</i><sub>2</sub>. Derive the expression for the work done by the gas. Hence show that for an ideal gas (<i>a</i> = 0, <i>b</i> = 0) the result reduces to <i>W</i> = <i>RT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>).',
        steps: [
          '<b>Work done:</b><br><i>W</i> = ∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> <i>P</i> d<i>V</i> = ∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> (<i>RT</i>/(<i>V</i> − <i>b</i>) − <i>a</i>/<i>V</i><sup>2</sup>) d<i>V</i><br>Integrate term by term:<br><i>W</i> = <i>RT</i> ln((<i>V</i><sub>2</sub> − <i>b</i>)/(<i>V</i><sub>1</sub> − <i>b</i>)) + <i>a</i>(1/<i>V</i><sub>2</sub> − 1/<i>V</i><sub>1</sub>)',
          '<b>Units:</b> <i>RT</i> ln(⋯) has units J mol<sup>−1</sup>; <i>a</i>/<i>V</i><sub>m</sub> has units (Pa m<sup>6</sup> mol<sup>−2</sup>)/(m<sup>3</sup> mol<sup>−1</sup>) = Pa m<sup>3</sup> mol<sup>−1</sup> = J mol<sup>−1</sup>.',
          '<b>Ideal gas limit:</b> set <i>a</i> → 0, <i>b</i> → 0. Then ln((<i>V</i><sub>2</sub> − <i>b</i>)/(<i>V</i><sub>1</sub> − <i>b</i>)) → ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) and <i>a</i>(1/<i>V</i><sub>2</sub> − 1/<i>V</i><sub>1</sub>) → 0, so<br><i>W</i> → <i>RT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>)<br>which is the standard ideal-gas isothermal work.',
          '<b>Physical insight:</b> the two corrections act in opposite directions. (i) The excluded volume <i>b</i> makes the logarithm larger: for <i>V</i><sub>2</sub> > <i>V</i><sub>1</sub> we have (<i>V</i><sub>2</sub> − <i>b</i>)/(<i>V</i><sub>1</sub> − <i>b</i>) > <i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>, because subtracting the same <i>b</i> from both volumes increases their ratio. So <i>b</i> increases the work. (ii) The attraction term <i>a</i>(1/<i>V</i><sub>2</sub> − 1/<i>V</i><sub>1</sub>) is negative for <i>V</i><sub>2</sub> > <i>V</i><sub>1</sub>, so it decreases the work, because the gas must pull its molecules apart against their attraction. Whether the net work is above or below the ideal-gas value depends on the temperature and on the sizes of <i>a</i> and <i>b</i>.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the Van der Waals equation for <i>n</i> moles of a gas and explain the physical significance of the constants <i>a</i> and <i>b</i>.',
            a: '(<i>P</i> + <i>an</i><sup>2</sup>/<i>V</i><sup>2</sup>)(<i>V</i> − <i>nb</i>) = <i>nRT</i>. <i>a</i>: intermolecular attraction; <i>b</i>: excluded volume per mole.',
          },
          {
            q: '[NEET] The compressibility factor <i>Z</i> for a real gas at low pressure is given by <i>Z</i> = 1 + (<i>b</i> − <i>a</i>/(<i>RT</i>))/<i>V</i><sub>m</sub>. At what temperature does the gas behave ideally over a range of low pressures? Name this temperature.',
            a: '<i>T</i> = <i>a</i>/(<i>Rb</i>) = <i>T</i><sub>B</sub>, the Boyle temperature. At <i>T</i><sub>B</sub>, <i>B</i>(<i>T</i>) = 0 ⇒ <i>Z</i> = 1 + <i>O</i>(1/<i>V</i><sub>m</sub><sup>2</sup>), so <i>Z</i> ≈ 1 at low pressure.',
          },
          {
            q: '[JEE Main] For a Van der Waals gas the critical temperature is <i>T</i><sub>c</sub> = 304 K and the critical pressure is <i>P</i><sub>c</sub> = 73.8 atm. Find the constants <i>a</i> and <i>b</i>. (Use <i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup>.)',
            a: 'From <i>T</i><sub>c</sub> = 8<i>a</i>/(27<i>Rb</i>) and <i>P</i><sub>c</sub> = <i>a</i>/(27<i>b</i><sup>2</sup>), dividing gives <i>b</i> = <i>RT</i><sub>c</sub>/(8<i>P</i><sub>c</sub>) = (0.0821 × 304)/(8 × 73.8) = 4.23 × 10<sup>−2</sup> L mol<sup>−1</sup> = 4.23 × 10<sup>−5</sup> m<sup>3</sup> mol<sup>−1</sup>. Then <i>a</i> = 27<i>R</i><sup>2</sup><i>T</i><sub>c</sub><sup>2</sup>/(64<i>P</i><sub>c</sub>) = (27 × (0.0821 × 304)<sup>2</sup>)/(64 × 73.8) = 3.56 L<sup>2</sup> atm mol<sup>−2</sup> ≈ 0.361 Pa m<sup>6</sup> mol<sup>−2</sup> (using 1 L<sup>2</sup> atm = 0.1013 Pa m<sup>6</sup>).',
          },
          {
            q: '[JEE Main] At a certain temperature the second virial coefficient <i>B</i>(<i>T</i>) of a gas is zero. Which of the following is true? (A) The gas is ideal at all pressures. (B) The gas obeys Boyle’s law at low pressures. (C) The gas can never be liquefied, at any temperature. (D) <i>a</i> = 0 and <i>b</i> = 0.',
            a: '(B). <i>B</i>(<i>T</i>) = 0 ⇒ <i>Z</i> ≈ 1 at low pressure, so Boyle’s law holds there. (A) is false: the higher virial terms still make the gas non-ideal at high pressure. (C) is false: <i>B</i>(<i>T</i>) = 0 marks only the Boyle temperature, and the gas can be liquefied once cooled below its critical temperature (<i>T</i><sub>c</sub> = 8<i>T</i><sub>B</sub>/27 for a Van der Waals gas). (D) is false: <i>B</i> = <i>b</i> − <i>a</i>/(<i>RT</i>) = 0 needs only <i>b</i> = <i>a</i>/(<i>RT</i>), not <i>a</i> = <i>b</i> = 0.',
          },
          {
            q: '[JEE Advanced] A Van der Waals gas has <i>a</i> = 0.141 Pa m<sup>6</sup> mol<sup>−2</sup> and <i>b</i> = 3.91 × 10<sup>−5</sup> m<sup>3</sup> mol<sup>−1</sup>. At <i>T</i> = 300 K, find the molar volume at which <i>Z</i> = 1 (other than the ideal-gas limit <i>V</i><sub>m</sub> → ∞).',
            a: 'Setting <i>Z</i> = 1:<br><i>V</i><sub>m</sub>/(<i>V</i><sub>m</sub> − <i>b</i>) − <i>a</i>/(<i>RTV</i><sub>m</sub>) = 1 ⇒ <i>b</i>/(<i>V</i><sub>m</sub> − <i>b</i>) = <i>a</i>/(<i>RTV</i><sub>m</sub>) ⇒ <i>bRTV</i><sub>m</sub> = <i>a</i>(<i>V</i><sub>m</sub> − <i>b</i>)<br>This is linear in <i>V</i><sub>m</sub>:<br><i>V</i><sub>m</sub> = <i>ab</i>/(<i>a</i> − <i>bRT</i>)<br>With <i>RT</i> = 8.314 × 300 = 2494 J mol<sup>−1</sup>: <i>bRT</i> = 3.91 × 10<sup>−5</sup> × 2494 = 0.0975, so<br><i>V</i><sub>m</sub> = (3.91 × 10<sup>−5</sup> × 0.141)/(0.141 − 0.0975) = (5.51 × 10<sup>−6</sup>)/0.0435 = 1.27 × 10<sup>−4</sup> m<sup>3</sup> mol<sup>−1</sup> ≈ 127 cm<sup>3</sup> mol<sup>−1</sup><br>This is about 3<i>b</i>, so the gas is very dense there (<i>P</i> = <i>RT</i>/<i>V</i><sub>m</sub> ≈ 2.0 × 10<sup>7</sup> Pa ≈ 194 atm). (Check: <i>V</i><sub>m</sub>/(<i>V</i><sub>m</sub> − <i>b</i>) = 1.45 and <i>a</i>/(<i>RTV</i><sub>m</sub>) = 0.45, so <i>Z</i> = 1.0.)',
          },
          {
            q: '[JEE Advanced] Show that for a Van der Waals gas the difference between the molar heat capacities is not equal to <i>R</i> but is given by<br><i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>/(1 − 2<i>a</i>(<i>V</i><sub>m</sub> − <i>b</i>)<sup>2</sup>/(<i>RTV</i><sub>m</sub><sup>3</sup>))<br>(Hint: use the thermodynamic identity <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>TV</i><sub>m</sub><i>α</i><sup>2</sup>/<i>κ</i><sub><i>T</i></sub>, where <i>α</i> = (1/<i>V</i><sub>m</sub>)(∂<i>V</i><sub>m</sub>/∂<i>T</i>)<sub><i>P</i></sub> and <i>κ</i><sub><i>T</i></sub> = −(1/<i>V</i><sub>m</sub>)(∂<i>V</i><sub>m</sub>/∂<i>P</i>)<sub><i>T</i></sub>.)',
            a: 'From <i>P</i> = <i>RT</i>/(<i>V</i><sub>m</sub> − <i>b</i>) − <i>a</i>/<i>V</i><sub>m</sub><sup>2</sup>: (∂<i>P</i>/∂<i>T</i>)<sub><i>V</i></sub> = <i>R</i>/(<i>V</i><sub>m</sub> − <i>b</i>) and (∂<i>P</i>/∂<i>V</i><sub>m</sub>)<sub><i>T</i></sub> = −<i>RT</i>/(<i>V</i><sub>m</sub> − <i>b</i>)<sup>2</sup> + 2<i>a</i>/<i>V</i><sub>m</sub><sup>3</sup>. The identity is equivalent to <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = −<i>T</i>(∂<i>P</i>/∂<i>T</i>)<sub><i>V</i></sub><sup>2</sup>/(∂<i>P</i>/∂<i>V</i><sub>m</sub>)<sub><i>T</i></sub>; substitute, then divide top and bottom by <i>RT</i>/(<i>V</i><sub>m</sub> − <i>b</i>)<sup>2</sup> to get the stated result.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Maxwell Distribution: Fractions, Effusion, and Most-Probable Kinetic Energy',
    extra: true,
    kalam:
      'More than half the molecules are quicker than the most probable speed, because the curve has a long tail to the right.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 gives the three speeds <i>v</i><sub>rms</sub>, <i>v</i><sub>av</sub>, <i>v</i><sub>mp</sub> and the distribution function <i>P</i>(<i>v</i>). JEE Advanced often asks for the fraction of molecules with speed greater than a given value (requiring the incomplete integral), the most probable kinetic energy (not speed), the rate of effusion through a small hole (Graham’s law derived from kinetic theory), and the average relative speed between molecules. CBSE may ask for the derivation of <i>v</i><sub>mp</sub> from d<i>P</i>/d<i>v</i> = 0 (done in the chapter) or the graph of <i>P</i>(<i>v</i>) versus <i>v</i> at two temperatures.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>C1 — Fraction of molecules with speed in [<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>].</b><br>Fraction = ∫<sub><i>v</i>₁</sub><sup><i>v</i>₂</sup> <i>P</i>(<i>v</i>) d<i>v</i> = (4/√π) ∫<sub><i>x</i>₁</sub><sup><i>x</i>₂</sup> <i>x</i><sup>2</sup>e<sup>−<i>x</i>²</sup> d<i>x</i>   where <i>x</i> = <i>v</i>√(<i>M</i>/(2<i>RT</i>)) = <i>v</i>/<i>v</i><sub>mp</sub><br>This integral has no elementary antiderivative. JEE questions either:<br>• ask for the fraction in terms of the error function erf(<i>x</i>) = (2/√π) ∫<sub>0</sub><sup><i>x</i></sup> e<sup>−<i>t</i>²</sup> d<i>t</i>;<br>• give a numerical value from a table; or<br>• ask for a qualitative comparison, for example “the fraction with <i>v</i> > <i>v</i><sub>rms</sub> is less than 0.5 because <i>v</i><sub>rms</sub> (≈ 1.22 <i>v</i><sub>mp</sub>) lies above the median speed (≈ 1.09 <i>v</i><sub>mp</sub>) of the right-skewed curve”.',
      },
      {
        t: 'p',
        html: '<b>Useful fact:</b> integrating the speed distribution above a cut-off <i>x</i> = <i>v</i>/<i>v</i><sub>mp</sub> gives<br><i>F</i>(> <i>v</i>) = erfc(<i>x</i>) + (2/√π)<i>x</i>e<sup>−<i>x</i>²</sup><br>So the fraction faster than <i>v</i><sub>mp</sub> (<i>x</i> = 1) is ≈ 0.57, and the fraction faster than <i>v</i><sub>rms</sub> (<i>x</i> = √(3/2)) is ≈ 0.39. More than half the molecules are quicker than the most probable speed, because the curve has a long tail to the right.',
      },
      {
        t: 'p',
        html: '<b>C2 — Most probable kinetic energy.</b><br>The distribution of the kinetic energy <i>ε</i> = ½<i>mv</i><sup>2</sup> is<br><i>P</i>(<i>ε</i>) d<i>ε</i> = (2/√π)(<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>))<sup>1/2</sup> e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)<br>Peak: d<i>P</i>/d<i>ε</i> = 0 ⇒ <i>ε</i><sub>mp</sub> = ½<i>k</i><sub>B</sub><i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Note:</b> this is not the kinetic energy of a molecule moving at <i>v</i><sub>mp</sub>, which is ½<i>mv</i><sub>mp</sub><sup>2</sup> = <i>k</i><sub>B</sub><i>T</i>. The peak of a distribution depends on which variable is used: changing variable from <i>v</i> to <i>ε</i> multiplies the density by d<i>v</i>/d<i>ε</i> ∝ <i>ε</i><sup>−1/2</sup>, which moves the peak down to half of that value.',
      },
      { t: 'p', html: 'Average energy: ⟨<i>ε</i>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i> (equipartition).' },
      {
        t: 'p',
        html: '<b>C3 — Effusion rate (Graham’s law from kinetic theory).</b><br>The number of molecules striking unit area per unit time (the flux) is<br>Φ = ¼<i>nv</i><sub>av</sub> = ¼(<i>N</i>/<i>V</i>)√(8<i>k</i><sub>B</sub><i>T</i>/(π<i>m</i>)) = <i>P</i>/√(2π<i>mk</i><sub>B</sub><i>T</i>)',
      },
      {
        t: 'p',
        html: '<b>Derivation:</b> consider molecules with speed <i>v</i> whose directions lie in the solid angle dΩ = sin <i>θ</i> d<i>θ</i> d<i>φ</i>; a fraction dΩ/(4π) of all molecules move in that direction. Those travelling at angle <i>θ</i> to the surface normal cross unit area at a rate <i>v</i> cos <i>θ</i> per molecule per unit volume, so<br>Φ = <i>n</i> ∫ <i>v</i> cos <i>θ</i> <i>f</i>(<i>v</i>) (dΩ/(4π)) d<i>v</i>   over the hemisphere (0 ≤ <i>θ</i> ≤ π/2)<br>The angular integral is ∫ cos <i>θ</i> dΩ = π, so Φ = <i>nv</i><sub>av</sub> · π/(4π) = ¼<i>nv</i><sub>av</sub>.',
      },
      {
        t: 'p',
        html: 'Rate of effusion through a hole of area <i>A</i>:<br>d<i>N</i>/d<i>t</i> = <i>A</i>Φ = <i>AP</i>/√(2π<i>mk</i><sub>B</sub><i>T</i>) ∝ <i>P</i>/√(<i>MT</i>)<br>At the same <i>P</i> and <i>T</i>: rate ∝ 1/√<i>M</i> (Graham’s law).',
      },
      {
        t: 'p',
        html: '<b>Units:</b> <i>A</i> in m<sup>2</sup>, <i>P</i> in Pa = N m<sup>−2</sup> = kg m<sup>−1</sup> s<sup>−2</sup>, <i>m</i> in kg, and <i>k</i><sub>B</sub><i>T</i> in J = kg m<sup>2</sup> s<sup>−2</sup>. Then √(<i>mk</i><sub>B</sub><i>T</i>) = kg m s<sup>−1</sup>, and <i>AP</i>/√(<i>mk</i><sub>B</sub><i>T</i>) = m<sup>2</sup> · kg m<sup>−1</sup> s<sup>−2</sup>/(kg m s<sup>−1</sup>) = s<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>C4 — Average relative speed.</b><br>For two molecules of masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> with Maxwell distributions at the same <i>T</i>:<br>⟨<i>v</i><sub>rel</sub>⟩ = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>μ</i>))   where <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) is the reduced mass.<br>For identical molecules <i>μ</i> = <i>m</i>/2, so ⟨<i>v</i><sub>rel</sub>⟩ = √2 <i>v</i><sub>av</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A vessel contains oxygen gas at 300 K and 1.0 × 10<sup>5</sup> Pa. A small hole of area 1.0 mm<sup>2</sup> is opened into vacuum. Estimate the initial rate of effusion (molecules per second). The molar mass of O<sub>2</sub> is 32 g mol<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> <i>P</i> = 1.0 × 10<sup>5</sup> Pa, <i>A</i> = 1.0 mm<sup>2</sup> = 1.0 × 10<sup>−6</sup> m<sup>2</sup>, <i>T</i> = 300 K, <i>M</i> = 0.032 kg mol<sup>−1</sup>.',
          '<b>Molecular mass:</b> <i>m</i> = <i>M</i>/<i>N</i><sub>A</sub> = 0.032/(6.022 × 10<sup>23</sup>) = 5.31 × 10<sup>−26</sup> kg, and <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>.<br>d<i>N</i>/d<i>t</i> = <i>AP</i>/√(2π<i>mk</i><sub>B</sub><i>T</i>)',
          '<b>Denominator:</b><br>√(2π<i>mk</i><sub>B</sub><i>T</i>) = √(2π × 5.31 × 10<sup>−26</sup> × 1.38 × 10<sup>−23</sup> × 300)<br>= √(2π × 2.20 × 10<sup>−46</sup>) = √(1.38 × 10<sup>−45</sup>)<br>= 3.72 × 10<sup>−23</sup> kg m s<sup>−1</sup>',
          '<b>Numerator:</b> <i>AP</i> = (1.0 × 10<sup>−6</sup> m<sup>2</sup>)(1.0 × 10<sup>5</sup> Pa) = 0.1 N = 0.1 kg m s<sup>−2</sup>, since Pa = N m<sup>−2</sup>.',
          '<b>Units check:</b> √(<i>mk</i><sub>B</sub><i>T</i>) has units √(kg · J) = √(kg<sup>2</sup> m<sup>2</sup> s<sup>−2</sup>) = kg m s<sup>−1</sup>, so<br>d<i>N</i>/d<i>t</i> :   (kg m s<sup>−2</sup>)/(kg m s<sup>−1</sup>) = s<sup>−1</sup>,   as it should.',
          '<b>Value:</b> 0.1/(3.72 × 10<sup>−23</sup>) = 2.69 × 10<sup>21</sup> s<sup>−1</sup>.',
        ],
        ans: 'Rate ≈ 2.7 × 10<sup>21</sup> molecules per second.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The Maxwell speed distribution for a gas at temperature <i>T</i> is<br><i>P</i>(<i>v</i>) = 4π(<i>M</i>/(2π<i>RT</i>))<sup>3/2</sup> <i>v</i><sup>2</sup> e<sup>−<i>Mv</i>²/(2<i>RT</i>)</sup><br>(a) Show that the most probable kinetic energy is <i>ε</i><sub>mp</sub> = ½<i>k</i><sub>B</sub><i>T</i>. (b) Find the fraction of molecules having kinetic energy greater than the average kinetic energy (3/2)<i>k</i><sub>B</sub><i>T</i>. Express your answer in terms of the error function.',
        steps: [
          '<b>(a)</b> Write the distribution per molecule, with <i>M</i>/<i>R</i> = <i>m</i>/<i>k</i><sub>B</sub>. Let <i>ε</i> = ½<i>mv</i><sup>2</sup>, so that <i>v</i> = √(2<i>ε</i>/<i>m</i>) and d<i>v</i> = d<i>ε</i>/√(2<i>mε</i>). Then<br><i>P</i>(<i>ε</i>) d<i>ε</i> = <i>P</i>(<i>v</i>) d<i>v</i> = 4π(<i>m</i>/(2π<i>k</i><sub>B</sub><i>T</i>))<sup>3/2</sup> (2<i>ε</i>/<i>m</i>) e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i>/√(2<i>mε</i>)',
          'Simplify the factor <i>v</i><sup>2</sup> d<i>v</i>:<br><i>v</i><sup>2</sup> d<i>v</i> = (2<i>ε</i>/<i>m</i>) · d<i>ε</i>/√(2<i>mε</i>) = √(2<i>ε</i>/<i>m</i>) d<i>ε</i>/<i>m</i>',
          'so<br><i>P</i>(<i>ε</i>) d<i>ε</i> = 4π(<i>m</i>/(2π<i>k</i><sub>B</sub><i>T</i>))<sup>3/2</sup> √(2<i>ε</i>/<i>m</i>) (1/<i>m</i>) e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i><br>= 4π(1/(2π<i>k</i><sub>B</sub><i>T</i>))<sup>3/2</sup> <i>m</i><sup>3/2</sup> √(2<i>ε</i>/<i>m</i>) <i>m</i><sup>−1</sup> e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i><br>= 4π(1/(2π<i>k</i><sub>B</sub><i>T</i>))<sup>3/2</sup> √(2<i>ε</i>) e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i><br>= (2/√π)(<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>))<sup>1/2</sup> e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> d<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)<br>(the powers of <i>m</i> cancel, <i>m</i><sup>3/2</sup> · <i>m</i><sup>−1/2</sup> · <i>m</i><sup>−1</sup> = <i>m</i><sup>0</sup>.) Now find the maximum:<br>d/d<i>ε</i>[<i>ε</i><sup>1/2</sup>e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup>] = 0 ⇒ ½<i>ε</i><sup>−1/2</sup>e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> − (<i>ε</i><sup>1/2</sup>/(<i>k</i><sub>B</sub><i>T</i>))e<sup>−<i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> = 0 ⇒ ½ = <i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>) ⇒ <i>ε</i><sub>mp</sub> = ½<i>k</i><sub>B</sub><i>T</i>',
          '<b>(b)</b> Fraction with <i>ε</i> > (3/2)<i>k</i><sub>B</sub><i>T</i>. Let <i>y</i> = <i>ε</i>/(<i>k</i><sub>B</sub><i>T</i>), so that <i>P</i>(<i>ε</i>) d<i>ε</i> = (2/√π)<i>y</i><sup>1/2</sup>e<sup>−<i>y</i></sup> d<i>y</i> and<br>Fraction = (2/√π) ∫<sub>3/2</sub><sup>∞</sup> <i>y</i><sup>1/2</sup>e<sup>−<i>y</i></sup> d<i>y</i><br>This is the upper incomplete gamma function Γ(3/2, 3/2)/Γ(3/2), with Γ(3/2) = √π/2.<br>Let <i>y</i> = <i>t</i><sup>2</sup>, so d<i>y</i> = 2<i>t</i> d<i>t</i> and <i>y</i><sup>1/2</sup> = <i>t</i>:<br>∫<sub>3/2</sub><sup>∞</sup> <i>y</i><sup>1/2</sup>e<sup>−<i>y</i></sup> d<i>y</i> = ∫<sub>√(3/2)</sub><sup>∞</sup> <i>t</i> e<sup>−<i>t</i>²</sup> 2<i>t</i> d<i>t</i> = 2∫<sub>√1.5</sub><sup>∞</sup> <i>t</i><sup>2</sup>e<sup>−<i>t</i>²</sup> d<i>t</i>',
          'Use ∫ <i>t</i><sup>2</sup>e<sup>−<i>t</i>²</sup> d<i>t</i> = ½(−<i>t</i> e<sup>−<i>t</i>²</sup> + ∫ e<sup>−<i>t</i>²</sup> d<i>t</i>) = ½(−<i>t</i> e<sup>−<i>t</i>²</sup> + (√π/2) erf(<i>t</i>)). Then<br>2 · ½[−<i>t</i> e<sup>−<i>t</i>²</sup> + (√π/2) erf(<i>t</i>)]<sub>√1.5</sub><sup>∞</sup> = √π/2 + √1.5 e<sup>−1.5</sup> − (√π/2) erf(√1.5)<br>Multiply by 2/√π:<br>Fraction = 1 + (2/√π)√1.5 e<sup>−1.5</sup> − erf(√1.5)',
          'Numerically: √1.5 ≈ 1.225, e<sup>−1.5</sup> ≈ 0.223, erf(1.225) ≈ 0.917, and<br>(2/√π) × 1.225 × 0.223 ≈ 1.128 × 0.273 ≈ 0.308<br>Fraction ≈ 1 + 0.308 − 0.917 = 0.391',
          'So about 39% of the molecules have kinetic energy above the average (3/2)<i>k</i><sub>B</sub><i>T</i>. This is below one half because the energy distribution is skewed to the right: its long high-energy tail pulls the average above the median.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Derive the expression for the most probable kinetic energy of molecules in a Maxwellian gas.',
            a: 'See Method C2.',
          },
          {
            q: '[NEET] At a given temperature the most probable speed of hydrogen molecules is <i>v</i><sub>mp</sub>. What is the most probable kinetic energy? (A) ½<i>mv</i><sub>mp</sub><sup>2</sup> (B) ½<i>k</i><sub>B</sub><i>T</i> (C) 2<i>k</i><sub>B</sub><i>T</i> (D) (3/2)<i>k</i><sub>B</sub><i>T</i>.',
            a: '(B). <i>ε</i><sub>mp</sub> = ½<i>k</i><sub>B</sub><i>T</i>. (Option A equals <i>k</i><sub>B</sub><i>T</i>, the energy of a molecule moving at <i>v</i><sub>mp</sub>, and is the classic trap.)',
          },
          {
            q: '[JEE Main] A container has a small hole. Gas effuses out into vacuum. Show that the rate of effusion is proportional to <i>P</i>/√<i>T</i> and inversely proportional to √<i>M</i>.',
            a: 'See Method C3.',
          },
          {
            q: '[JEE Main] For a Maxwellian gas, find the ratio of the average relative speed of two identical molecules to the average speed of a single molecule.',
            a: '⟨<i>v</i><sub>rel</sub>⟩/<i>v</i><sub>av</sub> = √2.',
          },
          {
            q: '[JEE Advanced] The fraction of molecules with speed greater than <i>v</i><sub>rms</sub> in a Maxwellian gas is<br><i>F</i> = 1 − (4/√π) ∫<sub>0</sub><sup>√(3/2)</sup> <i>x</i><sup>2</sup>e<sup>−<i>x</i>²</sup> d<i>x</i><br>Evaluate <i>F</i> numerically (use √(3/2) ≈ 1.225 and erf(1.225) ≈ 0.917).',
            a: 'Integrating by parts, (4/√π) ∫<sub>0</sub><sup><i>x</i></sup> <i>t</i><sup>2</sup>e<sup>−<i>t</i>²</sup> d<i>t</i> = erf(<i>x</i>) − (2/√π)<i>x</i> e<sup>−<i>x</i>²</sup>, so <i>F</i> = 1 − erf(√1.5) + (2/√π)√1.5 e<sup>−1.5</sup> ≈ 1 − 0.917 + 0.308 = 0.391. (The same number as in worked example 2, since <i>v</i><sub>rms</sub> corresponds to the average energy.)',
          },
          {
            q: '[JEE Advanced] A mixture of two gases with molecular masses <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> is in thermal equilibrium at temperature <i>T</i>. Find the average relative speed between a molecule of type 1 and a molecule of type 2.',
            a: '⟨<i>v</i><sub>rel</sub>⟩ = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>μ</i>)) with <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).',
          },
        ],
      },
    ],
  },
];
