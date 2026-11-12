import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topic 05: Colligative Properties & Van’t Hoff Factor, pp. 36–43 of
 * the Class 12 Chemistry Master Reference, word for word, split at its Sections
 * 1 to 8. Figures 1.5 and 1.6 (captions p. 39, drawn p. 40) are placed where they
 * illustrate the text and redrawn in lib/diagrams/chemistry-12-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 36–43 ─────────────────────────
  {
    n: '05',
    title: 'Colligative Properties & Van’t Hoff Factor',
    kalam: 'Properties that depend on the sheer number of solute particles, not their chemical identity, are called colligative properties.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The single most numerically loaded topic of the chapter, and a guaranteed scorer. CBSE Boards carry a 3-mark Δ<i>T</i><sub>f</sub> / Δ<i>T</i><sub>b</sub> / Π numerical plus a definition almost every year. NEET leans on van’t Hoff ordering (“highest boiling point”, “lowest freezing point”) and abnormal-molar-mass reasoning. JEE Main poses molar-mass-from-Π or molar-mass-from-Δ<i>T</i><sub>f</sub> numericals; JEE Advanced fuses van’t Hoff with degree of dissociation/association.',
      },
      {
        t: 'p',
        html: 'Earlier we saw that a non-volatile solute lowers a solvent’s vapour pressure, and that the relative lowering equals the solute’s mole fraction. Now comes the beautiful payoff: that lowering quietly drags three more physical properties along with it, and — astonishingly — <b>none of these four cares what the solute actually is, only how many particles of it are dissolved.</b> Properties that depend on the sheer number of solute particles, not their chemical identity, are called <b>colligative properties</b> (Latin co = together, ligare = to bind). The four are: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a crowded wedding baraat dance floor. Whether you scatter in a hundred guests wearing red or a hundred wearing blue, the floor feels equally crowded — the crowding depends on the head-count, not the colour of the outfits. A colligative property is exactly this: the solvent “feels” only the number of foreign particles jostling among its molecules, and responds the same way to a hundred urea molecules as to a hundred glucose molecules. This is why colligative measurements are such a clever tool for finding an unknown molar mass: count the particles’ effect, and you can back-calculate how heavy each particle is.',
      },
      {
        t: 'p',
        html: 'Why does adding solute raise the boiling point and lower the freezing point? Both trace back to the vapour-pressure drop. A liquid boils when its vapour pressure equals atmospheric pressure; if the solute has pushed the vapour pressure down, you must heat the solution higher to claw it back up to atmospheric — hence <b>boiling-point elevation</b>. Freezing is the mirror image: a liquid freezes where its vapour pressure matches the solid’s, and the lowered vapour pressure pushes that match to a lower temperature. Put simply, solute particles get in the way of the orderly crystal lattice forming, so you must cool the solution below the pure freezing point before ice can grow — hence <b>freezing-point depression</b>. This is exactly why we sprinkle salt on icy roads in the hills and why ethylene-glycol “antifreeze” protects a car radiator.',
      },
      {
        t: 'p',
        html: 'The fourth property, <b>osmotic pressure</b>, comes from a different but related idea. Separate pure solvent from a solution by a semipermeable membrane (one that lets solvent through but blocks solute), and solvent spontaneously flows into the solution to dilute it — this is <b>osmosis</b>. The extra pressure you must push back on the solution to just stop that inflow is the osmotic pressure Π. It is the colligative property of choice for huge molecules like proteins, because even a tiny molar concentration gives a comfortably measurable pressure at room temperature.',
      },
      { t: 'fig', id: 'c12-01-fig-1.6' },
      {
        t: 'p',
        html: 'There is one crucial twist. The whole “count the particles” logic works for the actual number of particles in solution — and for <b>electrolytes</b>, that differs from the number you dissolved. Dissolve 1 mole of NaCl and you get nearly 2 moles of ions; dissolve ethanoic acid in benzene and pairs of molecules clump into dimers, giving fewer particles. To handle both, van’t Hoff introduced a correction factor, <i>i</i>. Get <i>i</i> right and every colligative formula falls into line.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The simple (uncorrected) formulas assume a <b>dilute solution</b> of a <b>non-volatile, non-electrolyte</b> solute that neither dissociates nor associates. Real electrolytes and associating solutes need the van’t Hoff factor <i>i</i>.<br>• Δ<i>T</i><sub>b</sub> and Δ<i>T</i><sub>f</sub> use <b>molality</b> (temperature-independent); Π = <i>CRT</i> uses <b>molarity</b> (concentration per litre). Mixing these up is the classic blunder.<br>• Π = <i>CRT</i> is a dilute-solution limit (van’t Hoff’s analogy to the ideal-gas law); it bends at high concentration.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Relative lowering of vapour pressure (RLVP) — colligative property #1',
        main: '(<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>',
        legend: [
          '<i>p</i>° = pure-solvent vapour pressure',
          '<i>p</i><sub>s</sub> = the solution’s vapour pressure',
          '<i>x</i><sub>solute</sub> = mole fraction of solute',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Elevation of boiling point',
        main: 'Δ<i>T</i><sub>b</sub> = <i>K</i><sub>b</sub> <i>m</i><br>electrolytes: Δ<i>T</i><sub>b</sub> = <i>i</i> <i>K</i><sub>b</sub> <i>m</i>',
        legend: [
          '<i>K</i><sub>b</sub> = molal elevation (ebullioscopic) constant, unit K kg mol<sup>−1</sup>',
          '<i>m</i> = molality of solute, mol kg<sup>−1</sup>',
          'Δ<i>T</i><sub>b</sub> = elevation of boiling point',
          '<i>i</i> = van’t Hoff factor',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Depression of freezing point',
        main: 'Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub> <i>m</i><br>electrolytes: Δ<i>T</i><sub>f</sub> = <i>i</i> <i>K</i><sub>f</sub> <i>m</i>',
        legend: [
          '<i>K</i><sub>f</sub> = molal depression (cryoscopic) constant, unit K kg mol<sup>−1</sup>',
          'Δ<i>T</i><sub>f</sub> = depression of freezing point',
          '<i>m</i> = molality of solute, mol kg<sup>−1</sup>',
          '<i>i</i> = van’t Hoff factor',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Osmotic pressure',
        main: 'Π = <i>CRT</i> = (<i>n</i><sub>2</sub>/<i>V</i>)<i>RT</i><br>electrolytes: Π = <i>i</i> <i>CRT</i>',
        legend: [
          'Π = osmotic pressure (atm or bar)',
          '<i>C</i> = molarity (mol L<sup>−1</sup>)',
          '<i>R</i> = gas constant (0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup> with Π in atm; 0.083 L bar K<sup>−1</sup> mol<sup>−1</sup> with Π in bar)',
          '<i>T</i> = absolute temperature (K)',
          '<i>n</i><sub>2</sub> = moles of solute',
          '<i>V</i> = volume of solution in litres',
          '<i>i</i> = van’t Hoff factor',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molar-mass determination (non-electrolyte, dilute)',
        main: '<i>M</i><sub>2</sub> = (<i>K</i><sub>b</sub> <i>w</i><sub>2</sub> × 1000)/(Δ<i>T</i><sub>b</sub> <i>w</i><sub>1</sub>) = (<i>K</i><sub>f</sub> <i>w</i><sub>2</sub> × 1000)/(Δ<i>T</i><sub>f</sub> <i>w</i><sub>1</sub>) = (<i>w</i><sub>2</sub><i>RT</i>)/(Π<i>V</i>)',
        legend: [
          '<i>w</i><sub>1</sub> = mass of solvent (g)',
          '<i>w</i><sub>2</sub> = mass of solute (g)',
          '<i>M</i><sub>2</sub> = molar mass of solute',
          '<i>K</i><sub>b</sub>, <i>K</i><sub>f</sub> = molal elevation and depression constants',
          'Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub> = elevation and depression',
          'Π = osmotic pressure',
          '<i>V</i> = volume of solution in litres',
          '<i>R</i> = gas constant',
          '<i>T</i> = absolute temperature',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Van’t Hoff factor',
        main: '<i>i</i> = normal (expected) molar mass ÷ abnormal (observed) molar mass<br>= observed colligative property ÷ calculated colligative property<br>= (moles of particles after association or dissociation) ÷ (moles of particles before association or dissociation)',
        legend: ['<i>i</i> = van’t Hoff factor'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Degree of dissociation / association (solute giving <i>n</i> particles)',
        main: 'Dissociation: <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i> ⇒ <i>α</i> = (<i>i</i> − 1)/(<i>n</i> − 1)<br>Association: <i>i</i> = 1 + (1/<i>n</i> − 1)<i>α</i>',
        legend: [
          '<i>α</i> = degree of dissociation or association',
          '<i>i</i> = van’t Hoff factor',
          '<i>n</i> = particles from one formula unit (dissociation), or molecules in one aggregate (association)',
        ],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI / common Unit', 'Dimensional Formula'],
        rows: [
          ['Molal elevation / depression constant', '<i>K</i><sub>b</sub>, <i>K</i><sub>f</sub>', 'K kg mol<sup>−1</sup>', '[Θ M N<sup>−1</sup>]'],
          ['Osmotic pressure', 'Π', 'atm, Pa', '[M L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Van’t Hoff factor', '<i>i</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      {
        t: 'p',
        html: '<b>Chaining from Raoult’s law.</b> Relative lowering of vapour pressure was derived in Topic 04 as (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>. We simply adopt it here as the first of four colligative properties and build the other three on the same “particle-count” foundation, rather than re-deriving it.',
      },
      {
        t: 'proc',
        title: 'Why boiling point rises and freezing point falls (the vapour-pressure link)',
        steps: [
          'A liquid boils when its vapour pressure equals the external pressure. A solute lowers vapour pressure (RLVP), so the solution’s vapour-pressure curve sits below the pure solvent’s at every temperature.',
          'To make the solution’s (lowered) vapour pressure reach atmospheric, you must climb to a higher temperature — the boiling point is elevated by Δ<i>T</i><sub>b</sub>.',
          'Experiment shows this elevation is proportional to molality for dilute solutions: Δ<i>T</i><sub>b</sub> = <i>K</i><sub>b</sub> <i>m</i>. <i>K</i><sub>b</sub> is a property of the solvent alone (it depends on the solvent’s nature, not the solute’s identity — the colligative signature).',
          'The freezing argument is the mirror image: solid (ice) is in equilibrium with the liquid where their vapour pressures match. Lowering the liquid’s vapour pressure forces that match to a lower temperature, so Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub> <i>m</i>.',
        ],
      },
      { t: 'fig', id: 'c12-01-fig-1.5' },
      {
        t: 'proc',
        title: 'Deriving the molar-mass formula from ΔTf',
        steps: [
          'Molality <i>m</i> = (moles of solute)/(kg of solvent) = (<i>w</i><sub>2</sub>/<i>M</i><sub>2</sub>)/(<i>w</i><sub>1</sub>/1000) = (<i>w</i><sub>2</sub> × 1000)/(<i>M</i><sub>2</sub> <i>w</i><sub>1</sub>).',
          'Substitute into Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub> <i>m</i>: Δ<i>T</i><sub>f</sub> = (<i>K</i><sub>f</sub> <i>w</i><sub>2</sub> × 1000)/(<i>M</i><sub>2</sub> <i>w</i><sub>1</sub>).',
          'Rearrange for the unknown molar mass: <i>M</i><sub>2</sub> = (<i>K</i><sub>f</sub> <i>w</i><sub>2</sub> × 1000)/(Δ<i>T</i><sub>f</sub> <i>w</i><sub>1</sub>). (The same algebra with <i>K</i><sub>b</sub>, Δ<i>T</i><sub>b</sub> gives the boiling-point version.)',
        ],
      },
      {
        t: 'proc',
        title: 'Osmotic pressure as a dilute-solution analogue of the gas law',
        steps: [
          'Osmotic pressure depends only on the molar concentration of solute particles: experimentally Π ∝ <i>C</i> at fixed <i>T</i>, and Π ∝ <i>T</i> at fixed <i>C</i>. Together Π = <i>CRT</i> — formally identical to <i>p</i> = (<i>n</i>/<i>V</i>)<i>RT</i> for an ideal gas (the Boyle– and Charles–van’t Hoff laws).',
          'Writing <i>C</i> = <i>n</i><sub>2</sub>/<i>V</i> and <i>n</i><sub>2</sub> = <i>w</i><sub>2</sub>/<i>M</i><sub>2</sub> gives Π<i>V</i> = (<i>w</i><sub>2</sub>/<i>M</i><sub>2</sub>)<i>RT</i>, hence <i>M</i><sub>2</sub> = (<i>w</i><sub>2</sub><i>RT</i>)/(Π<i>V</i>).',
          '<b>Why osmotic pressure wins for macromolecules:</b> it is large and measurable even at very low concentration, needs only room temperature (proteins denature on heating, ruling out boiling-point methods), and uses molarity directly.',
        ],
      },
      {
        t: 'p',
        html: '<b>The van’t Hoff correction — logical framework.</b><br>• The solute may <b>dissociate</b> (each formula unit yields several ions: NaCl → 2, K<sub>2</sub>SO<sub>4</sub> → 3, CaCl<sub>2</sub> → 3), giving more particles, so <i>i</i> > 1 and the observed colligative effect is larger than expected. Consequently the observed molar mass comes out smaller than the true value.<br>• Or it may <b>associate</b> (e.g. ethanoic acid dimerises in benzene through hydrogen bonding, <i>i</i> ≈ 0.5), giving fewer particles, so <i>i</i> < 1, a smaller observed effect, and an observed molar mass larger than the true value.<br>• Every colligative equation is patched the same way: Δ<i>p</i>/<i>p</i>° = <i>i</i> <i>x</i><sub>2</sub>, Δ<i>T</i><sub>b</sub> = <i>iK</i><sub>b</sub><i>m</i>, Δ<i>T</i><sub>f</sub> = <i>iK</i><sub>f</sub><i>m</i>, Π = <i>iCRT</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '18 g of glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, molar mass 180 g mol<sup>−1</sup>) is dissolved in 500 g of water. The molal elevation constant of water is <i>K</i><sub>b</sub> = 0.52 K kg mol<sup>−1</sup>. Calculate the boiling point of the solution. (Boiling point of pure water = 373.15 K.)',
        steps: [
          'Moles of glucose = 18/180 = 0.10 mol. Molality <i>m</i> = (0.10 mol)/(0.500 kg) = 0.20 mol kg<sup>−1</sup>.',
          'Glucose is a non-electrolyte, so <i>i</i> = 1:<br>Δ<i>T</i><sub>b</sub> = <i>K</i><sub>b</sub> <i>m</i> = 0.52 × 0.20 = 0.104 K (0.10 K to two significant figures)',
        ],
        ans: 'Boiling point of solution = 373.15 + 0.104 = 373.25 K (add Δ<i>T</i><sub>b</sub>, because boiling point rises).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Four aqueous solutions, each 0.1 m: (P) glucose, (Q) NaCl, (R) CaCl<sub>2</sub>, (S) K<sub>2</sub>SO<sub>4</sub>. Arrange them in order of <b>increasing freezing point</b>.',
        steps: [
          '<b>Speed approach.</b> Don’t compute Δ<i>T</i><sub>f</sub> for each — just count particles (<i>i</i>). Freezing point drops most for the solution with the most particles, so the highest freezing point belongs to the fewest particles.',
          '<i>i</i> ∶ glucose = 1, NaCl = 2, CaCl<sub>2</sub> = 3, K<sub>2</sub>SO<sub>4</sub> = 3',
          '<b>Elimination tip:</b> “increasing freezing point” = “decreasing particle count.” Any option that puts glucose anywhere but at the top (highest FP) is wrong.',
          'More particles ⇒ larger depression ⇒ lower freezing point. So increasing freezing point (highest FP = least depression = fewest particles):',
        ],
        ans: 'CaCl<sub>2</sub> ≈ K<sub>2</sub>SO<sub>4</sub> < NaCl < glucose',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '250 mL of an aqueous solution contains 2.10 g of a non-volatile, non-electrolyte protein. Its osmotic pressure at 300 K is 7.0 × 10<sup>−3</sup> atm. Determine the molar mass of the protein. (Take <i>R</i> = 0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup>.)',
        steps: [
          'This links osmotic pressure with the mole concept — two ideas in one.',
          'From Π<i>V</i> = (<i>w</i><sub>2</sub>/<i>M</i><sub>2</sub>)<i>RT</i>:<br><i>M</i><sub>2</sub> = (<i>w</i><sub>2</sub><i>RT</i>)/(Π<i>V</i>) = (2.10 × 0.0821 × 300)/((7.0 × 10<sup>−3</sup>) × 0.250)',
          'Numerator = 2.10 × 0.0821 × 300 = 51.72 g L atm mol<sup>−1</sup>; denominator = 1.75 × 10<sup>−3</sup> L atm.',
          'A molar mass of ∼ 30,000 is typical of a small protein — and note how a tiny pressure (7 × 10<sup>−3</sup> atm) still pins it down, which is exactly why osmometry suits macromolecules.',
        ],
        ans: '<i>M</i><sub>2</sub> = 51.72/(1.75 × 10<sup>−3</sup>) ≈ 2.96 × 10<sup>4</sup> g mol<sup>−1</sup> (3.0 × 10<sup>4</sup> to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'When 1.0 g of a weak monobasic acid HA (molar mass 100 g mol<sup>−1</sup>) is dissolved in 100 g of water, the observed depression in freezing point is 0.217 K. The cryoscopic constant of water is <i>K</i><sub>f</sub> = 1.86 K kg mol<sup>−1</sup>. Calculate (i) the van’t Hoff factor and (ii) the degree of dissociation <i>α</i> of the acid.',
        steps: [
          'The key insight: compute the expected (un-dissociated) Δ<i>T</i><sub>f</sub>, compare with the observed, and the ratio is <i>i</i>.',
          '<b>Step 1 — molality:</b><br><i>m</i> = (1.0/100)/(100/1000) = 0.010/0.100 = 0.10 mol kg<sup>−1</sup>',
          '<b>Step 2 — expected (no dissociation) depression:</b><br>Δ<i>T</i><sub>f,calc</sub> = <i>K</i><sub>f</sub> <i>m</i> = 1.86 × 0.10 = 0.186 K',
          '<b>Step 3 — van’t Hoff factor (observed over calculated):</b><br><i>i</i> = Δ<i>T</i><sub>f,obs</sub>/Δ<i>T</i><sub>f,calc</sub> = 0.217/0.186 = 1.167',
          '<b>Step 4 — degree of dissociation.</b> HA dissociates into 2 particles (H<sup>+</sup> + A<sup>−</sup>), so <i>n</i> = 2 and <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i> = 1 + <i>α</i>:',
          'Since <i>i</i> lies between 1 and 2, the acid is partially dissociated — consistent with a weak acid. Had we instead measured <i>i</i> < 1, that would signal association, not dissociation.',
        ],
        ans: '<i>α</i> = <i>i</i> − 1 = 1.167 − 1 = 0.167 ⇒ 16.7% dissociated (<i>i</i> ≈ 1.17 and <i>α</i> ≈ 0.17 to the data’s precision)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define colligative properties and list the four of them. Why is osmotic pressure preferred for determining the molar masses of polymers?',
            a: 'Colligative properties depend on the number of solute particles, not their identity. The four are relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure. Osmotic pressure suits polymers because it is large and measurable even at very low concentration, and needs only room temperature, so heat-sensitive molecules are not damaged.',
          },
          {
            q: '[NEET] Equimolal aqueous solutions of urea, KCl and BaCl<sub>2</sub> are prepared. Arrange them in order of increasing boiling point, giving the van’t Hoff factor for each.',
            a: 'Urea (<i>i</i> = 1) < KCl (<i>i</i> = 2) < BaCl<sub>2</sub> (<i>i</i> = 3).',
          },
          {
            q: '[JEE Main] 3.0 g of a non-volatile, non-electrolyte solute dissolved in 250 g of water lowers the freezing point by 0.124 K. Find the molar mass of the solute. (Take <i>K</i><sub>f</sub> = 1.86 K kg mol<sup>−1</sup>.)',
            a: '≈ 180 g mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Calculate the osmotic pressure at 300 K of a solution containing 0.01 mol of CaCl<sub>2</sub> (assume complete dissociation, <i>i</i> = 3) in 1.0 L of solution.',
            a: '≈ 0.739 atm (0.7 atm to one significant figure), with <i>R</i> = 0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] Benzoic acid dimerises in benzene. A 0.20 m solution shows a freezing-point depression corresponding to a van’t Hoff factor of 0.60. Calculate the degree of association of benzoic acid. (Use <i>i</i> = 1 + (1/<i>n</i> − 1)<i>α</i> with <i>n</i> = 2.)',
            a: '<i>α</i> = 0.80, i.e. 80% associated.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which 0.1 m aqueous solution will have the <b>highest</b> boiling point?',
        opts: [
          { label: 'glucose', nudge: '<b>(a)</b> is a non-electrolyte (<i>i</i> = 1): smallest elevation.' },
          {
            label: 'NaCl',
            nudge: '<b>(b)</b> gives <i>i</i> ≈ 2, less than CaCl<sub>2</sub>. Picking it means forgetting CaCl<sub>2</sub> releases three ions.',
          },
          { label: 'CaCl<sub>2</sub>', nudge: null },
          { label: 'urea', nudge: '<b>(d)</b> is a non-electrolyte (<i>i</i> = 1): smallest elevation.' },
        ],
        correct: 2,
        solution: 'Boiling-point elevation scales with <i>i</i>. CaCl<sub>2</sub> gives the most ions (<i>i</i> ≈ 3), hence the largest Δ<i>T</i><sub>b</sub>.',
      },
      {
        t: 'mcq',
        q: 'A solute that <b>associates</b> in solution will show an experimentally determined molar mass that is:',
        opts: [
          { label: 'higher than the true value', nudge: null },
          { label: 'lower than the true value', nudge: '<b>(b)</b> is the dissociation case (reversed).' },
          { label: 'equal to the true value', nudge: '<b>(c)</b> would require <i>i</i> = 1 (no association/dissociation).' },
          { label: 'zero', nudge: '<b>(d)</b> cannot be right: association only makes the measured molar mass larger, never zero.' },
        ],
        correct: 0,
        solution: 'Association reduces the particle count (<i>i</i> < 1), so the measured colligative effect is smaller, which makes the back-calculated molar mass come out larger than the true value.',
      },
      {
        t: 'mcq',
        q: 'The osmotic pressure of a solution is calculated using:',
        opts: [
          {
            label: 'molality and <i>K</i><sub>f</sub>',
            nudge: '<b>(a)</b> is the freezing-point formula, which uses molality. Choosing it is the classic molality/molarity mix-up.',
          },
          { label: 'molarity and <i>RT</i>', nudge: null },
          { label: 'mole fraction and <i>p</i>°', nudge: '<b>(c)</b> is the RLVP form.' },
          {
            label: 'molality and <i>K</i><sub>b</sub>',
            nudge: '<b>(d)</b> is the boiling-point formula, which uses molality. Choosing it is the classic molality/molarity mix-up.',
          },
        ],
        correct: 1,
        solution: 'Π = <i>CRT</i> uses <b>molarity</b> <i>C</i> and the gas constant times temperature.',
      },
      {
        t: 'mcq',
        q: 'For a 0.1 m KCl solution showing 90% dissociation, the van’t Hoff factor is:',
        opts: [
          { label: '0.90', nudge: '<b>(a)</b> confuses <i>i</i> with <i>α</i>.' },
          { label: '1.90', nudge: null },
          { label: '2.00', nudge: '<b>(c)</b> assumes complete dissociation (<i>α</i> = 1).' },
          { label: '1.10', nudge: '<b>(d)</b> uses (1 − <i>α</i>) by mistake.' },
        ],
        correct: 1,
        solution: 'KCl gives <i>n</i> = 2 ions; <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i> = 1 + (1)(0.90) = 1.90.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting van’t Hoff <i>i</i> for electrolytes.</b> Always multiply by <i>i</i> (= ion count for strong electrolytes) in Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub>, and Π. A “missing 2 or 3” is the most common lost mark.',
          '<b>Molality vs molarity.</b> Δ<i>T</i><sub>b</sub>, Δ<i>T</i><sub>f</sub> take <b>molality</b>; Π = <i>CRT</i> takes <b>molarity</b>. Check which before substituting.',
          '<b>Sign of Δ<i>T</i>.</b> Boiling point = pure BP <b>+</b> Δ<i>T</i><sub>b</sub>; freezing point = pure FP − Δ<i>T</i><sub>f</sub>. Adding Δ<i>T</i><sub>f</sub> to the freezing point is a frequent slip.',
          '<b>Association vs dissociation direction.</b> Dissociation ⇒ <i>i</i> > 1 ⇒ observed molar mass lower; association ⇒ <i>i</i> < 1 ⇒ observed molar mass higher.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> for “highest/lowest BP/FP” comparisons among equimolal solutions, never compute — just rank van’t Hoff <i>i</i> (count the ions). For molar-mass numericals, memorise one master form per property and plug in; the only trap is unit consistency (g vs kg, atm vs bar, L vs mL).',
      },
      {
        t: 'protip',
        html: '<b>Sanity check:</b> <i>i</i> for a strong electrolyte should land between 1 and its maximum ion count; for an associating solute, between 1/<i>n</i> and 1 (for a dimer, 0.5 and 1). An <i>i</i> outside these bounds means an arithmetic or formula error.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Four colligative properties',
            note: 'RLVP (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>i</i> <i>x</i><sub>solute</sub>; Δ<i>T</i><sub>b</sub> = <i>iK</i><sub>b</sub><i>m</i>; Δ<i>T</i><sub>f</sub> = <i>iK</i><sub>f</sub><i>m</i>; Π = <i>iCRT</i>.',
          },
          {
            f: '<b>Molality</b> for Δ<i>T</i>; <b>molarity</b> for Π. <i>K</i><sub>b</sub>, <i>K</i><sub>f</sub> in K kg mol<sup>−1</sup>; <i>R</i> = 0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup>.',
            note: '',
          },
          {
            f: 'Molar mass',
            note: '<i>M</i><sub>2</sub> = (<i>K</i><sub>f</sub> <i>w</i><sub>2</sub> × 1000)/(Δ<i>T</i><sub>f</sub> <i>w</i><sub>1</sub>) = (<i>w</i><sub>2</sub><i>RT</i>)/(Π<i>V</i>).',
          },
          {
            f: 'Van’t Hoff',
            note: '<i>i</i> = (normal <i>M</i>)/(observed <i>M</i>) = (obs. colligative)/(calc. colligative) = (particles after)/(particles before).',
          },
          {
            f: 'Dissociation',
            note: '<i>i</i> = 1 + (<i>n</i> − 1)<i>α</i>, <i>i</i> > 1. <b>Association:</b> <i>i</i> = 1 + (1/<i>n</i> − 1)<i>α</i>, <i>i</i> < 1.',
          },
          {
            f: 'Osmotic terms (Additional topic D)',
            note: 'isotonic (equal Π), hypertonic (higher Π, cell shrinks), hypotonic (lower Π, cell swells); 0.9% NaCl = normal saline. Reverse osmosis ⇒ desalination.',
          },
          { f: '<b>BP rises (+Δ<i>T</i><sub>b</sub>), FP falls (−Δ<i>T</i><sub>f</sub>).</b>', note: '' },
        ],
        aids: ['“more pieces, more effect” — every colligative property counts particles, so always settle <i>i</i> first.'],
      },
    ],
  },
];
