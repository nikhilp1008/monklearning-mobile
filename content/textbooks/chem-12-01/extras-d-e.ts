import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics D and E, word for word from the Class 12
 * Chemistry Master Reference: D Isotonicity as a Calculation, and the van’t
 * Hoff Factor Under Pressure (pp. 51–53) and E, the book's "Addendum P — What
 * JEE & NEET Actually Ask" (pp. 53–57), kept as the last Additional topic.
 *
 * The book's practice questions print their answers in brackets after each
 * question; each answer is set here with its own question. The book's
 * "Worked Example X.n" references are written "the first worked example of
 * Additional topic X".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 51–53 ─────────────────────────
  {
    n: 'D',
    title: 'Isotonicity as a Calculation, and the van’t Hoff Factor Under Pressure',
    extra: true,
    kalam: 'Isotonic, hypertonic and hypotonic are easy to define, but the marks lie in the calculation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Isotonic, hypertonic and hypotonic are easy to define, but the marks lie in the calculation. Previous-year papers contain two separate isotonicity-with-dissociation problems, and the NTA 2022 paper carried an isotonic-glucose numerical. This addendum is the working toolkit.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Isotonic = equal particle concentration.</b> Two solutions are isotonic when their osmotic pressures are equal at the same temperature. Since Π = <i>iCRT</i>, isotonicity means',
      },
      {
        t: 'formula',
        kicker: 'Isotonic = equal particle concentration',
        main: '<i>i</i><sub>1</sub><i>C</i><sub>1</sub> = <i>i</i><sub>2</sub><i>C</i><sub>2</sub>',
        legend: [
          '<i>i</i><sub>1</sub>, <i>i</i><sub>2</sub> = van’t Hoff factors of the two solutions',
          '<i>C</i><sub>1</sub>, <i>C</i><sub>2</sub> = molarities of the two solutions',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '— the product of van’t Hoff factor and molarity must match, not the molarity alone. For two dissociating electrolytes the <i>i</i> of each must be found separately; never cancel an <i>i</i> you have not computed.',
      },
      {
        t: 'p',
        html: '<b>The physiological anchor (NCERT).</b> A 0.9% (mass/volume) sodium chloride solution — normal saline — is isotonic with the fluid inside blood cells. Cells placed in a more concentrated (hypertonic) solution lose water by osmosis and shrink; in a less concentrated (hypotonic) one they take in water and swell, and may burst. This is why intravenous fluids must be matched to blood osmotic pressure (about 7.47 bar at 300 K).',
      },
      {
        t: 'p',
        html: '<b>Reverse osmosis.</b> Apply on the solution side a pressure larger than Π and the solvent flows the “wrong” way — out of the solution, toward the pure side. The condition is <i>P</i><sub>applied</sub> > Π on the concentrated side. This is the working principle of sea-water desalination; the semipermeable membrane used is typically cellulose acetate, a polymer film on a porous support.',
      },
      {
        t: 'p',
        html: '<b>Abnormal molar masses — the direction check.</b> Colligative measurements count particles, so:<br>• Dissociation (<i>i</i> > 1): more particles than formula units, colligative effect larger than expected, so the back-calculated molar mass comes out smaller than the true (formula) molar mass.<br>• Association (<i>i</i> < 1): fewer particles, effect smaller, measured molar mass larger than true. Ethanoic acid in benzene dimerises through hydrogen bonding (<i>i</i> ≈ 0.5 for full dimerisation); in water it dissociates (<i>i</i> > 1).',
      },
      {
        t: 'p',
        html: '<b>The <i>i</i>-arithmetic, both directions.</b> For a solute giving <i>n</i> particles per formula unit on dissociation, or with <i>n</i> molecules joining into one particle on association, and degree of dissociation or association <i>α</i>:',
      },
      {
        t: 'formula',
        kicker: 'The <i>i</i>-arithmetic, both directions',
        main: 'Dissociation: <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i><br>Association: <i>i</i> = 1 − (1 − 1/<i>n</i>)<i>α</i>',
        legend: [
          '<i>i</i> = van’t Hoff factor',
          '<i>n</i> = particles per formula unit (dissociation), or molecules joined into one particle (association)',
          '<i>α</i> = degree of dissociation or association',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Complete dimerisation (<i>n</i> = 2, <i>α</i> = 1) gives <i>i</i> = 0.5 — the floor for a dimerising solute. The safest habit in every such problem: write <i>i</i> from the observed-versus-calculated ratio first, then solve for <i>α</i>; never jump to <i>α</i> in one step.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NTA JEE Main 2022 — Isotonic glucose for injection',
        q: 'The osmotic pressure of blood is 7.47 bar at 300 K. Glucose solution to be injected intravenously must be isotonic with blood. Find the required glucose concentration in g L<sup>−1</sup>. (Molar mass of glucose = 180 g mol<sup>−1</sup>, <i>R</i> = 0.083 L bar K<sup>−1</sup> mol<sup>−1</sup>.)',
        steps: [
          'Glucose is a non-electrolyte (<i>i</i> = 1):<br><i>C</i> = Π/(<i>RT</i>) = 7.47/(0.083 × 300) = 7.47/24.9 = 0.300 mol L<sup>−1</sup>',
          '<b>Note the units discipline:</b> with Π in bar, use <i>R</i> = 0.083 L bar; with atm, use 0.0821 L atm. Mixing them costs the question.',
        ],
        ans: 'Concentration = 0.300 × 180 = 54 g L<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main archetype — Percentage dissociation from an isotonic pair',
        q: 'A 0.004 M aqueous K<sub>2</sub>SO<sub>4</sub> solution is isotonic with a 0.01 M glucose solution at the same temperature. Calculate the percentage dissociation of K<sub>2</sub>SO<sub>4</sub>.',
        steps: [
          'Isotonic means <i>i C</i> match:<br><i>i</i> × 0.004 = 1 × 0.01 ⇒ <i>i</i> = 2.5',
          'K<sub>2</sub>SO<sub>4</sub> → 2 K<sup>+</sup> + SO<sub>4</sub><sup>2−</sup> gives <i>n</i> = 3, so <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i> = 1 + 2<i>α</i>:<br><i>α</i> = (2.5 − 1)/2',
          'The intermediate <i>i</i> = 2.5 < 3 correctly signals partial dissociation — the conclusion to state in boards.',
        ],
        ans: '<i>α</i> = 0.75 ⇒ 75% dissociated',
      },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — i given, α wanted, for MX3',
        q: 'A salt MX<sub>3</sub> solution has van’t Hoff factor <i>i</i> = 2. Find its percentage dissociation.',
        steps: [
          'MX<sub>3</sub> → M<sup>3+</sup> + 3 X<sup>−</sup>, so <i>n</i> = 4:<br><i>α</i> = (<i>i</i> − 1)/(<i>n</i> − 1) = (2 − 1)/(4 − 1)',
          'The trap is to set <i>n</i> = 2 (“two kinds of ions”) or to read <i>i</i> itself as the percentage. Count particles, not species.',
        ],
        ans: '<i>α</i> = 1/3 ≈ 33%',
      },
      {
        t: 'ex',
        tag: 'JEE Main level — Association in benzene',
        q: 'Ethanoic acid dissolved in benzene shows a van’t Hoff factor of 0.55, interpreted as partial dimerisation (<i>n</i> = 2). Find the degree of association.',
        steps: [
          '<i>i</i> = 1 − (1 − 1/<i>n</i>)<i>α</i> ⇒ 0.55 = 1 − <i>α</i>/2 ⇒ <i>α</i> = 2(1 − 0.55)',
          '<b>Sanity:</b> <i>i</i> must lie between 0.5 (fully dimerised) and 1 (no association); 0.55 sits near the dimer end, so a large <i>α</i> is the expected shape of the answer.',
        ],
        ans: '<i>α</i> = 0.90. 90% of the acid is present as hydrogen-bonded dimers.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 0.9% (mass/volume) NaCl solution is called normal saline. What happens to blood cells placed in (i) a 1.5% NaCl solution, (ii) a 0.4% NaCl solution, and why?',
            a: '(i) hypertonic — water leaves the cells, they shrink; (ii) hypotonic — water enters, cells swell and may burst. Osmosis moves solvent toward the higher-particle-concentration side.',
          },
          {
            q: '[NEET] Which has the higher osmotic pressure at the same temperature: 0.1 M urea or 0.1 M NaCl (fully dissociated)? By what factor?',
            a: 'NaCl, by a factor of 2: <i>i</i> = 2 doubles the particle concentration, so Π = <i>iCRT</i> doubles.',
          },
          {
            q: '[JEE Main] A 0.05 M BaCl<sub>2</sub> solution is isotonic with a glucose solution of unknown molarity <i>C</i> at the same temperature; BaCl<sub>2</sub> is fully dissociated. Find <i>C</i>.',
            a: '<i>i</i> = 3, so <i>C</i> = 3 × 0.05 = 0.15 M.',
          },
          {
            q: '[JEE Main] 1.0 g of a monobasic acid HA (<i>M</i> = 60 g mol<sup>−1</sup>) in 100 g of water gives a freezing-point depression of 0.372 K (<i>K</i><sub>f</sub> = 1.86 K kg mol<sup>−1</sup>). Find <i>i</i> and the percentage dissociation of the acid.',
            a: '<i>m</i> = (1/60)/0.1 = 0.1667 mol kg<sup>−1</sup>, so Δ<i>T</i><sub>f,calc</sub> = 1.86 × 0.1667 = 0.31 K and <i>i</i> = 0.372/0.31 = 1.20. Since <i>i</i> > 1 the acid is dissociating, HA ⇌ H<sup>+</sup> + A<sup>−</sup> with <i>n</i> = 2, so <i>α</i> = (<i>i</i> − 1)/(<i>n</i> − 1) = 0.20, i.e. 20% dissociated. Always test a computed <i>i</i> against physical sense before quoting <i>α</i>: for a monobasic acid in water <i>i</i> must lie between 1 and 2, and <i>i</i> < 1 would signal an arithmetic error.',
          },
          {
            q: '[JEE Advanced] For reverse osmosis of sea water, state the condition on the applied pressure and one application.',
            a: 'Pressure on the solution side must exceed the osmotic pressure Π; used in desalination of sea water.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 53–57 (the book's Addendum P) ─────────────────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Across the previous-year JEE Main and NEET questions on this chapter, the weight falls approximately as follows.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Across the previous-year JEE Main and NEET questions on this chapter, the weight falls approximately as follows:',
      },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Approximate share', 'Typical form of the question'],
        rows: [
          [
            'Colligative properties and van’t Hoff factor (Δ<i>T</i><sub>f</sub>, Δ<i>T</i><sub>b</sub>, Π, isotonicity, <i>i</i>, % dissociation)',
            '~30–35%',
            'molar mass or <i>i</i> from a measured Δ<i>T</i> or Π; isotonic pairs; ranking solutions by <i>i</i>',
          ],
          [
            'Concentration terms (mole fraction from mass %, molality, temperature-independence)',
            '~20%',
            'mole fraction or molality from mass %; molarity–molality conversion with density',
          ],
          [
            'Raoult’s law and vapour pressure (incl. vapour composition, extracting <i>p</i>° from data)',
            '~15%',
            'total pressure of a mixture; vapour composition; pure-component pressures from two readings',
          ],
          ['Henry’s law and solubility', '~10%', 'ranking gases by <i>K</i><sub>H</sub>; composition of dissolved air'],
          ['Deviations and azeotropes', '~7%', 'sign of deviation; the odd azeotrope out; sign of Δ<sub>mix</sub><i>H</i>'],
          [
            'Types of solutions (classification)',
            '~5%',
            'identifying solute and solvent state; examples of the nine types',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The years covered include JEE Main 2020, 2021, 2022 (NTA paper), 2024 and 2025 — the pattern is stable across all of them: one colligative numerical is nearly guaranteed, and it increasingly hides a van’t Hoff factor or a solvent switch inside it.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1 — “Extract <i>p</i>° from two total-pressure readings” (JEE Main favourite)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two mixtures of the same ideal pair at different compositions give two total pressures; find the pure vapour pressures.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> <i>p</i><sub>total</sub> = <i>p</i>°<sub>A</sub> + (<i>p</i>°<sub>B</sub> − <i>p</i>°<sub>A</sub>) <i>x</i><sub>B</sub> is linear in composition, so each reading is one linear equation; solve the pair.',
      },
      {
        t: 'ex',
        tag: 'Representative example (JEE Main)',
        q: 'Mixing A and B (an ideal pair) gives <i>p</i><sub>total</sub> = 350 mmHg at <i>x</i><sub>A</sub> = 0.7, and 410 mmHg at <i>x</i><sub>A</sub> = 0.2. Find <i>p</i>°<sub>A</sub>.',
        steps: [
          'With <i>a</i> = <i>p</i>°<sub>A</sub> and <i>b</i> = <i>p</i>°<sub>B</sub>: 0.7<i>a</i> + 0.3<i>b</i> = 350 and 0.2<i>a</i> + 0.8<i>b</i> = 410. Eliminating: multiply the first by 8 and the second by 3, subtract: 5.6<i>a</i> − 0.6<i>a</i> = 2800 − 1230, so 5.0<i>a</i> = 1570',
          '<b>Sanity check:</b> both totals must lie between the two pure pressures — 314 and 434 bracket 350 and 410.',
        ],
        ans: '<i>a</i> = <i>p</i>°<sub>A</sub> = 314 mmHg (then <i>p</i>°<sub>B</sub> = 434 mmHg).',
      },
      { t: 'p', html: '<b>Archetype 2 — “Which is (not) a minimum-boiling azeotrope?” / deviation match-the-column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four mixtures; classify by deviation sign or pick the odd azeotrope out.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> The usual item needs no calculation. Ask: does mixing create new, stronger A–B attractions, often a new hydrogen bond (negative deviation; maximum boiling if the deviation is large), or weaken the attractions of the pure components, often by breaking a hydrogen-bonded network (positive; minimum boiling if large)? Phenol + aniline, chloroform + acetone, HNO<sub>3</sub> + water are the negative trio; ethanol + anything that breaks its H-bond network is positive; carbon disulphide + acetone is positive with no hydrogen bond at all, because its A–B attraction is weaker than acetone’s own dipolar attraction. The first worked example of Additional topic C solves the 2025 version of this item.',
      },
      { t: 'p', html: '<b>Archetype 3 — “Isotonic pair with a dissociating electrolyte”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A dilute electrolyte solution is stated to be isotonic with a non-electrolyte solution of different molarity; find the percentage dissociation.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Set <i>i</i><sub>1</sub><i>C</i><sub>1</sub> = <i>i</i><sub>2</sub><i>C</i><sub>2</sub>, extract <i>i</i>, then <i>α</i> = (<i>i</i> − 1)/(<i>n</i> − 1). The second worked example of Additional topic D is the 0.004 M K<sub>2</sub>SO<sub>4</sub> / 0.01 M glucose problem, answered 75%.',
      },
      { t: 'p', html: '<b>Archetype 4 — “van’t Hoff arithmetic, both directions”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Given <i>i</i> and <i>n</i>, find <i>α</i> (MX<sub>3</sub>, <i>i</i> = 2); or given the measured property and the value calculated with no dissociation or association, find <i>i</i> then the molar-mass error direction.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Always transit through <i>i</i> = 1 + (<i>n</i> − 1)<i>α</i> or its association twin, and always end with the direction check: <i>i</i> > 1 ⇒ measured molar mass too small; <i>i</i> < 1 ⇒ too large. The third worked example of Additional topic D is the 2025 archetype (answer 33%).',
      },
      { t: 'p', html: '<b>Archetype 5 — “Henry’s law: <i>K</i><sub>H</sub> ordering and dissolved-air composition”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Rank gases by solubility from a <i>K</i><sub>H</sub> table (He 144.97, N<sub>2</sub> 76.48, H<sub>2</sub> 69.16, O<sub>2</sub> 34.86 kbar ⇒ He < N<sub>2</sub> < H<sub>2</sub> < O<sub>2</sub>), or find the composition of air dissolved in water.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Solubility is inverse in <i>K</i><sub>H</sub>; for mixtures apply Dalton then Henry per gas. The first worked example of Additional topic A is the dissolved-air numerical (answer ~60% N<sub>2</sub>).',
      },
      { t: 'p', html: '<b>Archetype 6 — “Ice separates out on cooling”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A glycol/antifreeze solution is cooled below its freezing point; find the ice mass at a stated temperature.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> The remaining liquid sits at its own freezing point; solve Δ<i>T</i><sub>f</sub> = <i>K</i><sub>f</sub><i>m</i> for the unfrozen water, subtract. The second worked example of Additional topic B is the JEE Main 2025 archetype (35 g of ice).',
      },
      { t: 'p', html: '<b>Archetype 7 — “Mole fraction straight from mass %”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Mole fraction of H<sub>2</sub>SO<sub>4</sub> in 49% by mass aqueous solution” (answer 0.15; for KI 30% by mass the answer is 0.044).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Anchor on 100 g of solution, convert both components to moles, then ratio. For 49% H<sub>2</sub>SO<sub>4</sub>: <i>n</i> = 49/98 = 0.5 mol acid, 51/18 = 2.83 mol water, <i>x</i> = 0.5/3.33 = 0.15. The distractor near 0.18 is moles of acid over moles of water (0.5/2.83), which leaves the acid out of the total.',
      },
      { t: 'p', html: '<b>Archetype 8 — “Boiling an open solution: what changes, what stays”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A solution with a non-volatile solute is boiled in an open vessel and temperatures/pressures are recorded at 5-minute intervals.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> In an open vessel the vapour pressure at boiling always equals atmospheric pressure (<i>P</i><sub>5</sub> = <i>P</i><sub>10</sub> = <i>P</i><sub>15</sub>), but boiling continuously evaporates solvent, the solution concentrates, and the boiling point keeps rising (<i>T</i><sub>5</sub> < <i>T</i><sub>10</sub> < <i>T</i><sub>15</sub>). Answer shape: temperatures rise, pressures equal.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Solute vs solvent mole fraction in Raoult’s law.</b> Δ<i>p</i>/<i>p</i>° = <i>x</i><sub>solute</sub> but <i>p</i><sub>solution</sub> = <i>p</i>°<i>x</i><sub>solvent</sub>. Students often swap them.',
          '<b>Counting <i>i</i> wrong.</b> CaCl<sub>2</sub> and K<sub>2</sub>SO<sub>4</sub> give 3 ions, Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> gives 5. Writing <i>i</i> = 2 for anything with “two kinds of ion” is the single most common lost mark.',
          '<b>Direction flips.</b> “Increasing freezing point” means decreasing depression means decreasing particle count; “highest boiling point” means most particles. Underline which quantity the question ranks before ranking.',
          '<b><i>K</i><sub>H</sub> read as solubility.</b> Large <i>K</i><sub>H</sub> is a poor dissolver. Ordering questions use this inversion as a distractor.',
          '<b>Molarity vs molality in Π.</b> Π = <i>iCRT</i> takes molarity; Δ<i>T</i> formulas take molality. And match <i>R</i> to the pressure unit: 0.083 L bar vs 0.0821 L atm.',
          '<b>Azeotrope mapping swapped.</b> Positive deviation = minimum boiling; negative = maximum boiling. NCERT’s 95% ethanol and 68% nitric acid are the two anchors.',
          '<b><i>K</i><sub>f</sub> values assumed water-like.</b> Non-aqueous solvents carry their own constants (benzene 5.12, acetic acid 3.90) — several JEE problems switch solvents mid-problem.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: '<b>Level 1 — Direct recall</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Define isotonic solutions. Why is 0.9% NaCl called normal saline?',
            a: 'Equal osmotic pressure at the same temperature; it is isotonic with the fluid inside blood cells, so cells neither shrink nor swell in it.',
          },
          {
            q: 'State the Henry’s-law explanation of the bends.',
            a: 'High pressure at depth raises N<sub>2</sub> solubility in blood; on ascent the pressure drops and N<sub>2</sub> bubbles out, blocking capillaries.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2 — Applied</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Arrange in increasing solubility in water at 293 K: He (<i>K</i><sub>H</sub> = 144.97 kbar), H<sub>2</sub> (69.16), N<sub>2</sub> (76.48), O<sub>2</sub> (34.86).',
            a: 'He < N<sub>2</sub> < H<sub>2</sub> < O<sub>2</sub> — invert the <i>K</i><sub>H</sub> order.',
          },
          {
            q: '0.1 m aqueous solutions of glucose, NaCl and AlCl<sub>3</sub> (fully dissociated): rank by increasing freezing point.',
            a: '<i>i</i> = 1, 2, 4; increasing freezing point = AlCl<sub>3</sub> < NaCl < glucose.',
          },
          {
            q: 'A 0.01 M Na<sub>2</sub>SO<sub>4</sub> solution is isotonic with a glucose solution at the same temperature. Assuming complete dissociation, find the glucose molarity.',
            a: '3 × 0.01 = 0.03 M.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3 — Multi-step</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Ethanol and water form an azeotrope at ~95% ethanol by volume. A fermented mixture at 10% ethanol by volume is fractionally distilled. Describe the composition of (i) the first distillate fractions and (ii) the residue, as distillation proceeds.',
            a: '(i) the distillate enriches toward the azeotrope — approaching 95% ethanol; (ii) the residue approaches pure water; neither crosses the azeotropic composition.',
          },
          {
            q: 'Solutions of A and B (ideal) give <i>p</i><sub>total</sub> = 350 mmHg at <i>x</i><sub>A</sub> = 0.7 and 410 mmHg at <i>x</i><sub>A</sub> = 0.2. Find <i>p</i>°<sub>A</sub> and <i>p</i>°<sub>B</sub>.',
            a: '314 and 434 mmHg; solve the two linear equations, then check that both observed totals lie between the pure values.',
          },
          {
            q: 'A solution of 46.5 g ethylene glycol (<i>M</i> = 62 g mol<sup>−1</sup>, a non-electrolyte) in 160 g water is cooled to −11.16 °C; <i>K</i><sub>f</sub> = 1.86 K kg mol<sup>−1</sup>. Find the ice mass.',
            a: '35 g — the surviving liquid must carry 0.75 mol glycol in 125 g water to hold Δ<i>T</i><sub>f</sub> = 11.16 K.',
          },
          {
            q: 'A salt M<sub>2</sub>X shows <i>i</i> = 2.6 in solution. Find its percentage dissociation.',
            a: '<i>n</i> = 3; <i>α</i> = (2.6 − 1)/2 = 0.80, i.e. 80%.',
          },
          {
            q: 'The osmotic pressure of a dilute solution is 7 × 10<sup>5</sup> Pa at 273 K. Find the osmotic pressure of the same solution at 283 K, in units of 10<sup>4</sup> N m<sup>−2</sup> (nearest integer).',
            a: 'Π ∝ <i>T</i> at fixed <i>C</i>: 7 × 10<sup>5</sup> × 283/273 = 7.26 × 10<sup>5</sup> Pa = 72.6 × 10<sup>4</sup> N m<sup>−2</sup> ≈ 73.',
          },
        ],
      },
    ],
  },
];
