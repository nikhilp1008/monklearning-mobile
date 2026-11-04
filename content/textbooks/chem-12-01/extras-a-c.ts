import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics A to C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 1: Solutions — Additional
 * Topics" (p. 44, set at the head of Additional topic A's Introduction), then
 * A Henry's Law in the Real World: Bends, Anoxia and Dissolved Air (pp. 44–46),
 * B Where Kb and Kf Come From, and the Freezing-Out Problem (pp. 46–48) and
 * C Azeotropes, Exactly as NCERT Defines Them (pp. 48–50; its "Figure 1",
 * p. 49, is c12-01-C-d1, the caption belonging to the diagram).
 *
 * Each addendum prints its answers inside its practice questions ("(Answer: …)");
 * each is set here as that question's answer, the first word capitalised. The
 * legends of the formula blocks are ours, in the words of the surrounding text
 * and of Topics 03 and 05.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 44–46 ─────────────────────────
  {
    n: 'A',
    title: 'Henry’s Law in the Real World: Bends, Anoxia and Dissolved Air',
    extra: true,
    kalam: 'When a mixture of gases sits over water, apply Henry’s law to each gas with its own partial pressure.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This addendum extends the Solutions chapter with the topics that JEE and NEET keep asking about. Addendum A covers the three real-world applications of Henry’s law that NCERT spells out (soda water, the bends with its diver tank gas, and anoxia) and the multi-gas dissolution problem JEE builds from the law. Addendum B answers the question every student eventually asks — where the numbers <i>K</i><sub>b</sub> and <i>K</i><sub>f</sub> actually come from — giving NCERT’s thermodynamic relations and the solvent table, together with the “ice separates out on cooling” archetype that JEE Main 2025 ran. Addendum C pins down azeotropes exactly as NCERT defines them, with the two named compositions and the distillation argument. Addendum D turns isotonicity into a calculation tool: equal osmotic pressure with dissociating solutes, percentage dissociation from isotonic pairs, and the abnormal-molar-mass direction check. Additional topic E then shows what the previous-year JEE and NEET papers actually ask.',
      },
      {
        t: 'p',
        html: 'Henry’s law, <i>p</i> = <i>K</i><sub>H</sub> <i>x</i>, comes with three applications that NCERT lists immediately after the law, and those applications are exactly what NEET frames as one-mark conceptual questions. The law also combines with Dalton’s law for real air, as the fourth worked example of Topic 03 showed, and that is the shape of a real JEE Main 2024 numerical.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three NCERT applications (learn them as cause and effect, not as trivia)',
        steps: [
          '<b>Soda water and soft drinks.</b> The bottle is sealed under high pressure of CO<sub>2</sub> so that more CO<sub>2</sub> dissolves (<i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>). Opening the cap drops <i>p</i> to the atmospheric trace value, so the excess gas comes out as fizz. The third worked example of Topic 03 puts numbers on this.',
          '<b>The bends (scuba diving).</b> Underwater, a diver breathes air at high pressure, so the solubility of atmospheric gases in the blood rises. On surfacing, the pressure falls, the dissolved gases come out of solution, and bubbles of nitrogen form in the blood. The bubbles block capillaries — a painful, dangerous condition called <b>bends</b>. To avoid bends (and the toxic effects of high nitrogen concentration in blood), the tanks used by scuba divers are filled with air diluted with helium: 11.7% helium, 56.2% nitrogen, 32.1% oxygen by volume. Helium is chosen because it is less soluble in blood than nitrogen.',
          '<b>Anoxia at high altitude.</b> At high altitudes the partial pressure of oxygen is lower than at ground level, so less O<sub>2</sub> dissolves in the blood and tissues of climbers and of people living there. The resulting low blood oxygen produces weakness and inability to think clearly — the condition called <b>anoxia</b>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Multi-gas dissolution (Henry + Dalton).</b> When a mixture of gases sits over water, apply Henry’s law to each gas with its own partial pressure:',
      },
      {
        t: 'formula',
        kicker: 'Multi-gas dissolution (Henry + Dalton)',
        main: '<i>x</i><sub><i>i</i></sub> = <i>p</i><sub><i>i</i></sub>/<i>K</i><sub>H,<i>i</i></sub> = (<i>y</i><sub><i>i</i></sub> <i>p</i><sub>total</sub>)/<i>K</i><sub>H,<i>i</i></sub>',
        legend: [
          '<i>x</i><sub><i>i</i></sub> = mole fraction of gas <i>i</i> dissolved in the water',
          '<i>p</i><sub><i>i</i></sub> = partial pressure of gas <i>i</i>',
          '<i>K</i><sub>H,<i>i</i></sub> = Henry’s law constant of gas <i>i</i>',
          '<i>y</i><sub><i>i</i></sub> = mole fraction of gas <i>i</i> in the gas mixture',
          '<i>p</i><sub>total</sub> = total pressure of the gas mixture',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The dissolved phase is then enriched in whichever gas has the smaller <i>K</i><sub>H</sub>. This is why the gas dissolved in water in equilibrium with air is richer in oxygen than the air itself: at 293 K about 37% of the dissolved gas is O<sub>2</sub>, against 21% in the air, though it is still mostly nitrogen. It is this dissolved oxygen that sustains aquatic life.',
      },
      {
        t: 'p',
        html: '<b>Sanity anchor (NCERT’s own numbers).</b> <i>K</i><sub>H</sub> values in water at 293 K: He 144.97 kbar, N<sub>2</sub> 76.48, H<sub>2</sub> 69.16, O<sub>2</sub> 34.86 kbar — so the solubility order is He < N<sub>2</sub> < H<sub>2</sub> < O<sub>2</sub>. Formaldehyde, with <i>K</i><sub>H</sub> = 1.83 × 10<sup>−5</sup> kbar at 298 K, is the extreme opposite end: it dissolves enormously because it hydrogen-bonds with (and reacts with) water.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main level, after JEE Main 2024 — Composition of air dissolved in water',
        q: 'Henry’s law constants for O<sub>2</sub> and N<sub>2</sub> in water just above 273 K are 2.03 × 10<sup>9</sup> Pa and 5.07 × 10<sup>9</sup> Pa. A sample of water is equilibrated with air (21% O<sub>2</sub>, 79% N<sub>2</sub> by mole) at a total pressure of 1 atm. The dissolved gas is separated and dried. Find the mole percent of N<sub>2</sub> in the dried dissolved gas (nearest integer).',
        steps: [
          'Take <i>p</i><sub>total</sub> = 1.01325 × 10<sup>5</sup> Pa. Partial pressures by Dalton:<br><i>p</i><sub>O₂</sub> = 0.21 × 1.01325 × 10<sup>5</sup> = 2.128 × 10<sup>4</sup> Pa,<br><i>p</i><sub>N₂</sub> = 0.79 × 1.01325 × 10<sup>5</sup> = 8.005 × 10<sup>4</sup> Pa',
          'Dissolved mole fractions (Henry, each gas independently):<br><i>x</i><sub>O₂</sub> = (2.128 × 10<sup>4</sup>)/(2.03 × 10<sup>9</sup>) = 1.048 × 10<sup>−5</sup>,<br><i>x</i><sub>N₂</sub> = (8.005 × 10<sup>4</sup>)/(5.07 × 10<sup>9</sup>) = 1.579 × 10<sup>−5</sup>',
          'In the same solvent the mole ratio equals the mole-fraction ratio, so the dried gas contains<br>% N<sub>2</sub> = 1.579/(1.579 + 1.048) × 100',
          'Although air is 79% nitrogen, the dissolved gas is only ~60% nitrogen — oxygen’s smaller <i>K</i><sub>H</sub> makes it the better dissolver.',
        ],
        ans: '60.1% ≈ 60%',
      },
      {
        t: 'ex',
        tag: 'CBSE/NEET level — The NCERT N2 calculation',
        q: 'If N<sub>2</sub> gas is bubbled through water at 293 K, how many millimoles of N<sub>2</sub> dissolve in 1 L of water? The partial pressure of N<sub>2</sub> is 0.987 bar and <i>K</i><sub>H</sub>(N<sub>2</sub>) = 76.48 kbar at 293 K.',
        steps: [
          '<i>x</i>(N<sub>2</sub>) = <i>p</i>/<i>K</i><sub>H</sub> = 0.987/76480 = 1.29 × 10<sup>−5</sup>. One litre of water contains 55.5 mol, and since <i>n</i> ≪ 55.5,<br><i>x</i> ≈ <i>n</i>/55.5 ⇒ <i>n</i> = 1.29 × 10<sup>−5</sup> × 55.5',
          '<b>Note the dilute-solution move:</b> <i>x</i> = <i>n</i>/(<i>n</i> + 55.5) ≈ <i>n</i>/55.5. Skipping it only adds an exact rearrangement, <i>n</i> = 55.5<i>x</i>/(1 − <i>x</i>), that you never needed.',
        ],
        ans: '7.16 × 10<sup>−4</sup> mol = 0.716 mmol',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Henry’s law. Using it, explain why scuba divers’ tanks are filled with air diluted with helium.',
            a: '<i>p</i> = <i>K</i><sub>H</sub><i>x</i>; at depth, high <i>p</i> raises gas solubility in blood, and on ascent the falling pressure releases bubbles of N<sub>2</sub> that block capillaries — the bends. Helium is less soluble and less toxic than nitrogen, so the tank mix is He 11.7%, N<sub>2</sub> 56.2%, O<sub>2</sub> 32.1%.',
          },
          {
            q: '[NEET] Why do climbers at high altitude suffer from anoxia?',
            a: 'Lower partial pressure of O<sub>2</sub> at altitude lowers the equilibrium concentration of dissolved O<sub>2</sub> in blood and tissues, per Henry’s law.',
          },
          {
            q: '[JEE Main] Using the data of worked example 1, find the ratio of dissolved moles <i>n</i><sub>O₂</sub> ∶ <i>n</i><sub>N₂</sub> in the water.',
            a: '1.048 ∶ 1.579 ≈ 1 ∶ 1.51; the dissolved phase is oxygen-enriched relative to air, where the ratio is 1 ∶ 3.76.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 46–48 ─────────────────────────
  {
    n: 'B',
    title: 'Where Kb and Kf Come From, and the Freezing-Out Problem',
    extra: true,
    kalam: 'Kf and Kb are solvent properties — the solute never appears.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<i>K</i><sub>b</sub> and <i>K</i><sub>f</sub> are usually read off a table as black-box constants. JEE Main 2025 asked a statement item built directly on the formula for <i>K</i><sub>f</sub>, which cannot be answered from the table alone. NCERT states both relations without deriving them; here they are and what they let you do.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The thermodynamic relations (NCERT).</b> For a solvent of molar mass <i>M</i><sub>1</sub> (in g mol<sup>−1</sup>), freezing point <i>T</i><sub>f</sub> and boiling point <i>T</i><sub>b</sub> (in K), with molar enthalpies of fusion Δ<sub>fus</sub><i>H</i> and vaporisation Δ<sub>vap</sub><i>H</i> (in J mol<sup>−1</sup>), and <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>:',
      },
      {
        t: 'formula',
        kicker: 'The thermodynamic relations (NCERT)',
        main: '<i>K</i><sub>f</sub> = (<i>R</i> <i>M</i><sub>1</sub> <i>T</i><sub>f</sub><sup>2</sup>)/(1000 × Δ<sub>fus</sub><i>H</i>)<br><i>K</i><sub>b</sub> = (<i>R</i> <i>M</i><sub>1</sub> <i>T</i><sub>b</sub><sup>2</sup>)/(1000 × Δ<sub>vap</sub><i>H</i>)',
        legend: [
          '<i>K</i><sub>f</sub> = molal depression (cryoscopic) constant',
          '<i>K</i><sub>b</sub> = molal elevation (ebullioscopic) constant',
          '<i>R</i> = gas constant, 8.314 J K<sup>−1</sup> mol<sup>−1</sup>',
          '<i>M</i><sub>1</sub> = molar mass of the solvent, in g mol<sup>−1</sup>',
          '<i>T</i><sub>f</sub> = freezing point of the solvent, in K',
          '<i>T</i><sub>b</sub> = boiling point of the solvent, in K',
          'Δ<sub>fus</sub><i>H</i> = molar enthalpy of fusion of the solvent, in J mol<sup>−1</sup>',
          'Δ<sub>vap</sub><i>H</i> = molar enthalpy of vaporisation of the solvent, in J mol<sup>−1</sup>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Three consequences you can read straight off:<br>• <i>K</i><sub>f</sub> and <i>K</i><sub>b</sub> are solvent properties — the solute never appears. This is the formal statement of the colligative slogan the chapter taught.<br>• A solvent with a small enthalpy of fusion for its molar mass and freezing point has a large <i>K</i><sub>f</sub>: cyclohexane (<i>K</i><sub>f</sub> = 20.0 K kg mol<sup>−1</sup>) and carbon tetrachloride (31.8) dwarf water (1.86), whose fusion enthalpy is comparatively large. Large-<i>K</i><sub>f</sub> solvents are preferred for cryoscopic molar-mass work because the depression is bigger and easier to measure.<br>• Since Δ<sub>fus</sub><i>H</i> ≪ Δ<sub>vap</sub><i>H</i> for the same solvent (this outweighs <i>T</i><sub>f</sub> < <i>T</i><sub>b</sub>, which works the other way because <i>T</i><sup>2</sup> appears in the numerator), <i>K</i><sub>f</sub> usually exceeds <i>K</i><sub>b</sub> for the same solvent (water: 1.86 vs 0.52). An exam statement claiming <i>K</i><sub>f</sub>(benzene) < <i>K</i><sub>f</sub>(water) is false on the table below — 5.12 beats 1.86.',
      },
      {
        t: 'table',
        title: 'NCERT’s solvent table (learn the water, ethanol and benzene rows cold)',
        head: ['Solvent', 'b.p. / K', '<i>K</i><sub>b</sub> / K kg mol<sup>−1</sup>', 'f.p. / K', '<i>K</i><sub>f</sub> / K kg mol<sup>−1</sup>'],
        rows: [
          ['Water', '373.15', '0.52', '273.0', '1.86'],
          ['Ethanol', '351.5', '1.20', '155.7', '1.99'],
          ['Cyclohexane', '353.74', '2.79', '279.55', '20.00'],
          ['Benzene', '353.3', '2.53', '278.6', '5.12'],
          ['Chloroform', '334.4', '3.63', '209.6', '4.79'],
          ['Carbon tetrachloride', '350.0', '5.03', '250.5', '31.8'],
        ],
      },
      {
        t: 'p',
        html: '<b>The freezing-out archetype.</b> When a solution is cooled below its freezing point and pure ice crystallises out, the remaining liquid must stay in equilibrium with ice — so it must sit exactly at its own freezing point at every stage. As ice leaves, the surviving solution gets steadily more concentrated and its freezing point falls further. The working equation at the final temperature is simply',
      },
      {
        t: 'formula',
        kicker: 'The freezing-out archetype',
        main: 'Δ<i>T</i><sub>f</sub> = <i>i</i> <i>K</i><sub>f</sub> <i>m</i><sub>remaining</sub>',
        legend: [
          'Δ<i>T</i><sub>f</sub> = depression of the freezing point at the final temperature',
          '<i>i</i> = van’t Hoff factor',
          '<i>K</i><sub>f</sub> = molal depression (cryoscopic) constant',
          '<i>m</i><sub>remaining</sub> = molality computed from the unfrozen solvent mass',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'with <i>m</i><sub>remaining</sub> computed from the unfrozen solvent mass. Solve for the solvent still liquid; the difference from the original solvent mass is the ice.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE board level — Verify Kf of water from the relation',
        q: 'Given Δ<sub>fus</sub><i>H</i>(water) = 6.01 kJ mol<sup>−1</sup>, <i>T</i><sub>f</sub> = 273.15 K, <i>M</i><sub>1</sub> = 18 g mol<sup>−1</sup> and <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>, calculate <i>K</i><sub>f</sub> of water.',
        steps: [
          '<i>K</i><sub>f</sub> = (8.314 × 18 × (273.15)<sup>2</sup>)/(1000 × 6010) = (149.65 × 74611)/(6.01 × 10<sup>6</sup>)',
          'The same calculation with Δ<sub>vap</sub><i>H</i> = 40.66 kJ mol<sup>−1</sup> and <i>T</i><sub>b</sub> = 373.15 K returns <i>K</i><sub>b</sub> = 0.51 K kg mol<sup>−1</sup> ≈ the tabulated 0.52. Knowing the relation lets you work out a constant from enthalpy data when the table is not given — and it is the relation JEE’s statement items probe.',
        ],
        ans: '1.86 K kg mol<sup>−1</sup>, exactly the tabulated value.',
      },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — How much ice separates?',
        q: 'An aqueous solution containing 46.5 g of ethylene glycol (<i>M</i> = 62 g mol<sup>−1</sup>, a non-electrolyte) in 160 g of water is cooled to −11.16 °C. Calculate the mass of ice that separates out, taking <i>K</i><sub>f</sub>(water) = 1.86 K kg mol<sup>−1</sup>.',
        steps: [
          'At −11.16 °C the surviving liquid is in equilibrium with ice, so its depression is Δ<i>T</i><sub>f</sub> = 11.16 K. Moles of glycol: 46.5/62 = 0.75 mol. Let <i>w</i> kg of water remain liquid:<br>Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub> <i>m</i> ⇒ 11.16 = 1.86 × 0.75/<i>w</i> ⇒ <i>w</i> = (1.86 × 0.75)/11.16 = 0.125 kg',
          'The entire trick is realising the glycol moles are fixed while the solvent in the molality is only the unfrozen part. (Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub><i>m</i> is a dilute-solution law; at 6 mol kg<sup>−1</sup> it is only approximate, but it is what the question intends.)',
        ],
        ans: 'Ice separated = 160 − 125 = 35 g.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the thermodynamic expressions for <i>K</i><sub>f</sub> and <i>K</i><sub>b</sub> and explain why both are properties of the solvent alone.',
            a: 'The two relations above; only solvent quantities <i>M</i><sub>1</sub>, <i>T</i><sub>f</sub>, <i>T</i><sub>b</sub>, Δ<sub>fus</sub><i>H</i>, Δ<sub>vap</sub><i>H</i> appear.',
          },
          {
            q: '[NEET] For molar-mass determination by freezing-point depression, is cyclohexane or water the better solvent, and why?',
            a: 'Cyclohexane — <i>K</i><sub>f</sub> = 20.0 vs 1.86, so the same molality gives over ten times the depression, which is easier to measure accurately.',
          },
          {
            q: '[JEE Main] A 1 molal glucose solution in some solvent S shows Δ<i>T</i><sub>b</sub> = 2 K; a 2 molal glucose solution in the same solvent shows Δ<i>T</i><sub>f</sub> = 2 K. Relate <i>K</i><sub>b</sub> and <i>K</i><sub>f</sub> of S.',
            a: '<i>K</i><sub>b</sub> = 2/1 = 2 K kg mol<sup>−1</sup> and <i>K</i><sub>f</sub> = 2/2 = 1 K kg mol<sup>−1</sup>, so <i>K</i><sub>b</sub> = 2<i>K</i><sub>f</sub>. Read the constants off Δ<i>T</i> = <i>Km</i> one at a time.',
          },
          {
            q: '[JEE Advanced] A solution of 9.2 g of a non-electrolyte in 100 g of benzene begins to freeze 0.465 K below pure benzene (Δ<i>T</i><sub>f</sub> = 0.465 K; <i>K</i><sub>f</sub> = 5.12 K kg mol<sup>−1</sup>). Find the molar mass of the solute. If the solution is then cooled further, state qualitatively what happens to the freezing point of the remaining liquid as benzene freezes out.',
            a: 'It keeps falling — the liquid concentrates as pure solvent leaves, so Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub><i>m</i> grows. Molar mass check: <i>M</i><sub>2</sub> = 5.12 × 9.2 × 1000/(0.465 × 100) ≈ 1.01 × 10<sup>3</sup> g mol<sup>−1</sup> (1.0 × 10<sup>3</sup> g mol<sup>−1</sup> to two significant figures).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 48–50 ─────────────────────────
  {
    n: 'C',
    title: 'Azeotropes, Exactly as NCERT Defines Them',
    extra: true,
    kalam: 'Azeotropes are the far end of deviation from Raoult’s law.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Azeotropes are the far end of deviation from Raoult’s law. NCERT names two specific compositions and gives a clear distillation argument, and JEE Main 2025 asked point-blank which of four mixtures is not a minimum-boiling azeotrope. Topic 04 gave the definition and the link to deviations; this addendum adds the boiling-point diagram, the distillation argument and the exam lists that make the topic answerable rather than impressionistic.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Definition (NCERT).</b> Azeotropes are binary mixtures having the same composition in liquid and vapour phase, which therefore boil at a constant temperature; the components cannot be separated by fractional distillation.',
      },
      {
        t: 'p',
        html: '<b>The two classes and the two named examples.</b><br>• Large positive deviation ⇒ <b>minimum-boiling azeotrope</b> at a specific composition. Ethanol–water, obtained by fermentation, is the standard case: fractional distillation gives approximately 95% by volume of ethanol, and beyond that composition liquid and vapour have the same composition, so no further separation occurs. This is why absolute alcohol cannot be prepared by ordinary distillation of the fermented mixture.<br>• Large negative deviation ⇒ <b>maximum-boiling azeotrope</b>. The nitric acid–water system is NCERT’s example: approximate composition 68% nitric acid and 32% water by mass, boiling at 393.5 K.',
      },
      {
        t: 'p',
        html: '<b>Why distillation stalls — the geometry.</b> On a boiling-point–composition diagram, the liquid (bubble-point) curve and vapour (dew-point) curve must touch at the azeotropic composition, because there liquid and vapour have identical composition. Away from it, one distillation step moves the vapour toward the azeotrope, never past it: distill a 50% ethanol mixture and the distillate marches toward 95% ethanol while the residue marches toward pure water; both stop at their ends. The azeotrope acts like a wall that fractional distillation cannot cross.',
      },
      { t: 'fig', id: 'c12-01-C-d1' },
      {
        t: 'p',
        html: '<b>Classifying exam mixtures in one look.</b> Positive deviation (A–B attractions weakened; often H-bonds of a pure component broken): ethanol + acetone, ethanol + water, ethanol + cyclohexane, acetone + carbon disulphide. Negative deviation (new A–B attractions, often a new hydrogen bond): chloroform + acetone, phenol + aniline, nitric acid + water, HCl + water. Only the strongly non-ideal ones form azeotropes; near-ideal pairs (benzene + toluene, hexane + heptane) never do.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — Which is not a minimum-boiling azeotrope?',
        q: 'Which of the following binary mixtures does not show minimum-boiling azeotrope behaviour? (1) water + ethyl methyl ketone (2) phenol + aniline (3) carbon disulphide + acetone (4) methanol + chloroform.',
        steps: [
          'Minimum-boiling azeotropes need large positive deviation — weakened A–B attractions. Mixtures (1), (3) and (4) each break up hydrogen-bonded or dipolar networks of a pure component (water, acetone/CS<sub>2</sub> mismatch, methanol) and show positive deviation. Phenol + aniline is different: the phenolic OH hydrogen-bonds to the aniline nitrogen, a new, stronger A–B attraction — negative deviation, hence a maximum-boiling azeotrope.',
          '<b>The one-liner to carry:</b> “new H-bond between the pair ⇒ negative deviation ⇒ maximum boiling.”',
        ],
        ans: '(2).',
      },
      {
        t: 'ex',
        tag: 'CBSE board level — The 95% ethanol wall',
        q: 'Explain, using the idea of an azeotrope, why fractional distillation of a fermented ethanol–water mixture cannot yield 100% ethanol.',
        steps: [
          'Ethanol and water deviate strongly and positively from Raoult’s law, so they form an azeotrope that boils at a minimum, at approximately 95% ethanol by volume. At that composition the vapour has the same composition as the liquid, so condensing and re-boiling changes nothing — the enrichment that drives fractional distillation (vapour richer in the more volatile component) vanishes exactly there. Distillation can approach 95% from either side but never cross it; absolute ethanol requires a different technique (for example, adding a third component that breaks the azeotrope).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define an azeotrope. Name one minimum-boiling and one maximum-boiling azeotrope with the approximate composition of each.',
            a: 'Binary mixture with identical liquid and vapour compositions boiling at constant temperature; ethanol–water ~95% ethanol by volume; nitric acid–water ~68% HNO<sub>3</sub> by mass, b.p. 393.5 K.',
          },
          {
            q: '[NEET] A mixture shows large negative deviation from Raoult’s law. State the sign of Δ<sub>mix</sub><i>H</i>, and the type of azeotrope it can form.',
            a: 'Δ<sub>mix</sub><i>H</i> < 0; maximum-boiling azeotrope.',
          },
          {
            q: '[JEE Main] Classify by deviation and azeotrope type: (i) acetone + aniline, (ii) acetone + carbon disulphide, (iii) benzene + toluene.',
            a: '(i) negative deviation — new hydrogen bonds; the maximum-boiling type, if an azeotrope forms; (ii) positive deviation; the minimum-boiling type; (iii) nearly ideal, no azeotrope.',
          },
        ],
      },
    ],
  },
];
