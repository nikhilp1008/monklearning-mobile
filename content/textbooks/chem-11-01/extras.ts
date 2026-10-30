import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics A to D, word for word from the Class 11
 * Chemistry Master Reference: the shared opening of "Chapter 1: Some Basic
 * Concepts of Chemistry — Additional Topics" (p. 59, set at the head of
 * Additional topic A's Introduction), then A Percentage Purity and Mixture
 * Stoichiometry (pp. 59 to 62; its last practice answer sits at the top of
 * p. 62), B Gram Equivalents, the Law of Equivalence, and Water Hardness
 * (pp. 62 to 64), C Eudiometry: Stoichiometry in Gas Volumes (pp. 64 to 67;
 * its answers sit at the top of p. 67) and D, the book's "Addendum P — What
 * JEE and NEET Actually Ask" (pp. 67 to 71), kept as the last Additional
 * topic by Nikhil's decision. Each addendum prints its own practice problems
 * and answers, which are its Practice part; D's graded practice set (P1 to
 * P11) is split at the book's Level headings. These pages print no drawings:
 * the equations are typeset and D's distribution is a table. The book's
 * thin space between a coefficient and its formula ("2 CO₂") is kept, as
 * these pages print it.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 59–62 ─────────────────────────
  {
    n: 'A',
    title: 'Percentage Purity and Mixture Stoichiometry',
    extra: true,
    kalam: 'The mole machinery is unchanged; what is new is one extra conversion layer at the front and, for mixtures, a two-equation setup.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the full mole-concept toolkit: classification of matter, units and significant figures, the laws of chemical combination, the mole and average atomic mass, percentage composition and formulae, limiting reagent and percentage yield, and every concentration term from mass percent to normality. Three examinable patterns still sit outside it. Addendum A handles <b>impure samples and reacting mixtures</b> — the chapter always assumes a pure reactant, but JEE Main hands you a 92%-pure carbonate or a two-salt mixture roughly every year. Addendum B builds the <b>gram-equivalent</b> machinery the chapter only gestures at when it defines normality — equivalent mass, the law of equivalence <i>N</i><sub>1</sub><i>V</i><sub>1</sub> = <i>N</i><sub>2</sub><i>V</i><sub>2</sub> for full titration stoichiometry, and the water-hardness convention (ppm as CaCO<sub>3</sub>) that JEE Main 2023–2025 asked repeatedly. Addendum C supplies <b>gas-volume stoichiometry (eudiometry)</b> — the chapter quotes Avogadro’s law, uses molar volume, and solves one combining-volume formula (Topic 04, worked example 3); Addendum C turns that into a general method for “15 mL of hydrocarbon + 75 mL of O<sub>2</sub>” problems, which is exactly how the exams use the law. Additional topic D then maps previous-year questions onto this chapter.',
      },
      {
        t: 'p',
        html: 'Every worked example in the chapter starts from a pure reactant. Real exam problems rarely do: the ore is 90% pure, the coal is 60% carbon, the 1 g sample is a mixture of two carbonates. The mole machinery is unchanged; what is new is one extra conversion layer at the front and, for mixtures, a two-equation setup.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Rule 1 — Purify before you mole.</b> If a sample is <i>p</i>% pure in the reactive species, multiply the sample mass by <i>p</i>/100 before dividing by the molar mass. The impurity is inert — it neither reacts nor appears in the product. Conversely, if a product is reported as <i>q</i>% pure, the pure-substance yield is <i>q</i>/100 of the crude mass.',
      },
      {
        t: 'p',
        html: '<b>Rule 2 — Mixture problems are simultaneous equations.</b> When two components of a mixture both react (or one reacts and one does not), you are always given two measurements: the total mass and some reaction total (gas evolved, residue left, reagent consumed). Set up<br><i>x</i> + <i>y</i> = <i>m</i><sub>mixture</sub>,   <i>ax</i> + <i>by</i> = <i>m</i><sub>observed</sub>,<br>where <i>x</i>, <i>y</i> are the component masses and <i>a</i>, <i>b</i> are the “reaction yields per gram” read off the balanced equations. Solve the pair; never try to reason a mixture problem in one step.',
      },
      {
        t: 'p',
        html: '<b>Rule 3 — Chain purity and yield in the right direction.</b> For “how much impure ore gives how much impure product,” pass through moles of the pure species in the middle: (impure reactant) → pure reactant → theoretical pure product → actual pure product (apply % yield) → crude product (apply product purity). Each arrow is one multiplication; write the chain before touching the calculator.',
      },
      {
        t: 'p',
        html: '<b>Rule 4 — Volume at STP is a mole count in disguise.</b> A gas volume given “at STP” is just <i>n</i> = <i>V</i>/22.4 L (old STP, 1 atm) or <i>V</i>/22.7 L (current IUPAC STP, 1 bar). Unless the problem says otherwise, exam papers intend 22.4 L — but read the question; NCERT now uses 22.7 L (1 bar).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Impure silver carbonate on heating',
        q: 'A 3.00 g sample of silver carbonate, 92% pure, is heated strongly: 2 Ag<sub>2</sub>CO<sub>3</sub> → 4 Ag + 2 CO<sub>2</sub> + O<sub>2</sub>. Find (i) the mass of the residue and (ii) the total volume of gases evolved at STP. (Ag = 108.)',
        steps: [
          'Pure Ag<sub>2</sub>CO<sub>3</sub>: 3.00 × 0.92 = 2.76 g. Molar mass: 2(108) + 12 + 48 = 276 g mol<sup>−1</sup>, so<br><i>n</i>(Ag<sub>2</sub>CO<sub>3</sub>) = 2.76/276 = 0.0100 mol.',
          '(i) The residue is silver metal: <i>n</i>(Ag) = 2 × 0.0100 = 0.0200 mol, mass of silver = 0.0200 × 108 = 2.16 g. The inert impurity (3.00 − 2.76 = 0.24 g) does not decompose and stays in the boat, so the solid residue is 2.16 + 0.24 = 2.40 g.',
          '(ii) Gas per equation: 2 mol Ag<sub>2</sub>CO<sub>3</sub> gives 3 mol gas (2 CO<sub>2</sub> + 1 O<sub>2</sub>), so<br><i>n</i><sub>gas</sub> = (3/2) × 0.0100 = 0.0150 mol ⇒ <i>V</i> = 0.0150 × 22400',
          'The impurity (0.24 g) sits in the boat and does nothing except add to the residue; the whole problem is one purity multiplication followed by ordinary stoichiometry.',
        ],
        ans: 'Residue = 2.40 g (of which silver = 2.16 g); gases = 336 mL at STP.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Purity on both sides',
        q: 'How much iron, 80% pure, can be produced from 120 kg of haematite ore that is 90% pure Fe<sub>2</sub>O<sub>3</sub>? Reaction: Fe<sub>2</sub>O<sub>3</sub> + 3 CO → 2 Fe + 3 CO<sub>2</sub>. (Fe = 56, Fe<sub>2</sub>O<sub>3</sub> = 160.)',
        steps: [
          'Walk the chain of Rule 3.<br>pure Fe<sub>2</sub>O<sub>3</sub> = 120 × 0.90 = 108 kg;   <i>n</i> = 108/160 kmol = 0.675 kmol.',
          'Iron: <i>n</i>(Fe) = 2 × 0.675 = 1.35 kmol, i.e. 1.35 × 56 = 75.6 kg of pure iron. The crude product is 80% pure, so<br>crude iron = 75.6/0.80',
          'The trap is applying 80% in the wrong direction (multiplying gives 60.5 kg, a classic distractor) — purity of the product you obtain always divides the pure mass, because the crude bar must contain the full 75.6 kg of iron plus impurity.',
        ],
        ans: '94.5 kg.',
      },
      {
        t: 'ex',
        tag: 'NEET/JEE Main — A two-salt mixture',
        q: 'A 1.00 g mixture of NaHCO<sub>3</sub> and Na<sub>2</sub>CO<sub>3</sub> is heated to constant mass. Only the bicarbonate decomposes:<br>2 NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑<br>The CO<sub>2</sub> collected at STP measures 112.0 mL. Find the mass percentage of Na<sub>2</sub>CO<sub>3</sub> in the original mixture. (NaHCO<sub>3</sub> = 84.)',
        steps: [
          'The gas measurement is the second equation of Rule 2 — and since only one component reacts, it pins that component directly.<br><i>n</i>(CO<sub>2</sub>) = 0.1120/22.4 = 5.00 × 10<sup>−3</sup> mol ⇒ <i>n</i>(NaHCO<sub>3</sub>) = 2 × 5.00 × 10<sup>−3</sup> = 0.0100 mol.',
          'Mass of NaHCO<sub>3</sub> = 0.0100 × 84 = 0.84 g, so mass of Na<sub>2</sub>CO<sub>3</sub> = 1.00 − 0.84 = 0.16 g.',
          'Notice that no simultaneous equation was even needed — when only one component reacts, the reaction measurement is that component’s mole count. Reserve the full two-equation setup for cases where both components contribute (both carbonates releasing CO<sub>2</sub>, say).',
        ],
        ans: '16% Na<sub>2</sub>CO<sub>3</sub>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 5.0 g limestone sample is 80% CaCO<sub>3</sub>. On strong heating (CaCO<sub>3</sub> → CaO + CO<sub>2</sub>), what volume of CO<sub>2</sub> at STP is released? (CaCO<sub>3</sub> = 100.)',
            a: 'Pure CaCO<sub>3</sub> = 5.0 × 0.80 = 4.0 g = 0.040 mol; CO<sub>2</sub> = 0.040 mol = 0.040 × 22400 = 896 mL.',
          },
          {
            q: '[JEE Main] A 2.45 g mixture of KCl and KClO<sub>3</sub> loses 0.48 g on strong heating; only the chlorate decomposes (2 KClO<sub>3</sub> → 2 KCl + 3 O<sub>2</sub>; KClO<sub>3</sub> = 122.5). Find the mass percentage of KClO<sub>3</sub> in the mixture.',
            a: '<i>n</i>(O<sub>2</sub>) = 0.48/32 = 0.015 mol; <i>n</i>(KClO<sub>3</sub>) = (2/3)(0.015) = 0.010 mol = 1.225 g; percentage = 1.225/2.45 × 100 = 50%.',
          },
          {
            q: '[JEE Main] Coal of 60% carbon purity burns so that 60% of the carbon forms CO and 40% forms CO<sub>2</sub>. How many total moles of gas (CO + CO<sub>2</sub>) are produced from 0.50 kg of this coal? (C = 12.)',
            a: 'Pure carbon = 500 × 0.60 = 300 g = 25 mol. Every mole of C ends as one mole of gas (CO or CO<sub>2</sub> both carry one C), so total gas = 25 mol — the 60:40 split is a red herring for the count (it would matter for a heat calculation, not a mole count).',
          },
          {
            q: '[JEE Advanced] An iron ore contains 75% Fe<sub>2</sub>O<sub>3</sub>. The reduction Fe<sub>2</sub>O<sub>3</sub> + 3 CO → 2 Fe + 3 CO<sub>2</sub> proceeds with 90% yield. What mass of ore is needed to obtain 56 kg of iron? (Fe<sub>2</sub>O<sub>3</sub> = 160, Fe = 56.)',
            a: 'Actual Fe = 56 kg at 90% yield ⇒ theoretical Fe = 56/0.90 = 62.2 kg = 1.111 kmol. Fe<sub>2</sub>O<sub>3</sub> needed = 1.111/2 = 0.5556 kmol = 88.9 kg; ore = 88.9/0.75 = 118.5 kg.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 62–64 ─────────────────────────
  {
    n: 'B',
    title: 'Gram Equivalents, the Law of Equivalence, and Water Hardness',
    extra: true,
    kalam: 'In any complete reaction, gram-equivalents of every reactant consumed are equal.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines normality as gram-equivalents per litre and gives <i>N</i> = (<i>n</i>-factor) × <i>M</i>, but never tells you what a gram-equivalent is as a working tool. That tool — the law of equivalence — is the fastest route through every titration problem the exams set, and it is also the hidden machinery behind the “hardness of water in ppm of CaCO<sub>3</sub>” questions JEE Main asked in 2023, 2024 and 2025.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Equivalent mass.</b> The equivalent mass of a species is its molar mass divided by its <i>n</i>-factor for the reaction at hand:',
      },
      {
        t: 'formula',
        kicker: 'Equivalent mass',
        main: '<i>E</i> = <i>M</i>/(<i>n</i>-factor)',
        legend: [
          '<i>E</i> = equivalent mass of the species',
          '<i>M</i> = molar mass of the species',
          '<i>n</i>-factor = the basicity used (acid), acidity used (base), charge on the ion exchanged (salts, precipitation), or electrons transferred per formula unit (redox)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Examples: H<sub>2</sub>SO<sub>4</sub> fully neutralised, <i>E</i> = 98/2 = 49; H<sub>3</sub>PO<sub>4</sub> neutralised only to Na<sub>2</sub>HPO<sub>4</sub>, <i>E</i> = 98/2 = 49 (only two H replaced!); Na<sub>2</sub>CO<sub>3</sub> titrated to H<sub>2</sub>CO<sub>3</sub>, <i>E</i> = 106/2 = 53; CaCO<sub>3</sub>, <i>E</i> = 100/2 = 50.',
      },
      {
        t: 'p',
        html: '<b>Gram-equivalents.</b> Number of gram-equivalents = mass/<i>E</i> = (<i>n</i>-factor) × (moles).',
      },
      {
        t: 'p',
        html: '<b>The law of equivalence.</b> In any complete reaction, gram-equivalents of every reactant consumed are equal. For solutions this collapses to the titration workhorse:',
      },
      {
        t: 'formula',
        kicker: 'The law of equivalence',
        main: '<i>N</i><sub>1</sub><i>V</i><sub>1</sub> = <i>N</i><sub>2</sub><i>V</i><sub>2</sub>   (equivalents of acid = equivalents of base)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'and more generally <i>N</i><sub>1</sub><i>V</i><sub>1</sub> + <i>N</i><sub>2</sub><i>V</i><sub>2</sub> = <i>N</i><sub>3</sub><i>V</i><sub>3</sub> for mixtures. The power of the form: it absorbs the stoichiometric ratio into the <i>n</i>-factors, so you never write the balanced equation mid-calculation. (Check it once: for H<sub>2</sub>SO<sub>4</sub> vs NaOH, <i>N</i><sub>acid</sub><i>V</i><sub>acid</sub> = 2<i>M</i><sub>a</sub><i>V</i><sub>a</sub> equals <i>N</i><sub>base</sub><i>V</i><sub>base</sub> = <i>M</i><sub>b</sub><i>V</i><sub>b</sub>, i.e. 2<i>M</i><sub>a</sub><i>V</i><sub>a</sub> = <i>M</i><sub>b</sub><i>V</i><sub>b</sub> — exactly what 2 NaOH ∶ 1 H<sub>2</sub>SO<sub>4</sub> demands.)',
      },
      {
        t: 'p',
        html: '<b>Hardness of water — the exam convention.</b> JEE Main reports hardness as the mass of CaCO<sub>3</sub> equivalent to the dissolved Ca<sup>2+</sup>/Mg<sup>2+</sup> salts, in parts per million by mass. Because Ca<sup>2+</sup>, Mg<sup>2+</sup> and CaCO<sub>3</sub> all carry <i>n</i>-factor 2, one mole of any hardness salt “equals” one mole of CaCO<sub>3</sub>:',
      },
      {
        t: 'formula',
        kicker: 'Hardness of water — the exam convention',
        main: 'hardness (ppm as CaCO<sub>3</sub>) = (moles of hardness salt × 100 g)/(mass of water in kg) × 10<sup>3</sup><br>[= (mg of CaCO<sub>3</sub> equivalent)/(kg (or L) of water)]',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'This is a reporting convention, not a chemical reaction — no actual CaCO<sub>3</sub> need be present.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Titration without a balanced equation on the page',
        q: '25 mL of an HCl solution requires 30 mL of 0.1 M Na<sub>2</sub>CO<sub>3</sub> solution for complete neutralisation. What volume of this HCl is needed to titrate 30 mL of 0.2 M NaOH?',
        steps: [
          'First find the acid’s normality through the carbonate (<i>n</i>-factor 2, so 0.1 M = 0.2 N):<br><i>N</i><sub>HCl</sub> × 25 = 0.2 × 30 ⇒ <i>N</i><sub>HCl</sub> = 0.24 N.',
          'HCl is monobasic, so <i>N</i> = <i>M</i> = 0.24. Now titrate the NaOH (<i>n</i>-factor 1):<br>0.24 × <i>V</i> = 0.2 × 30',
          'Note what did not happen: no 2 HCl + Na<sub>2</sub>CO<sub>3</sub> equation was written, and the 2:1 ratio never appeared explicitly — the <i>n</i>-factor 2 on the carbonate carried it. That is the entire point of the equivalent system.',
        ],
        ans: '25 mL.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Normality plus density: percentage purity of a solution',
        q: '50 mL of a Na<sub>2</sub>CO<sub>3</sub> solution neutralises 49.35 mL of 4 N HCl. The density of the Na<sub>2</sub>CO<sub>3</sub> solution is 1.25 g mL<sup>−1</sup>. Find the mass percentage of Na<sub>2</sub>CO<sub>3</sub> in the solution. (<i>E</i> = 53.)',
        steps: [
          'Equivalents of HCl = 4 × 0.04935 = 0.1974 eq, which equals equivalents of Na<sub>2</sub>CO<sub>3</sub> in the 50 mL.<br>mass of Na<sub>2</sub>CO<sub>3</sub> = 0.1974 × 53 = 10.46 g.',
          'Mass of solution = 50 × 1.25 = 62.5 g, so<br>mass % = (10.46/62.5) × 100',
          'The two halves of the problem live on different quantities — equivalents count the solute, density weighs the solution — and the percentage is where they meet. Confusing “50 mL of solution” with “50 g of solution” is the designed error here.',
        ],
        ans: '16.7%.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Hardness as ppm of CaCO3',
        q: '100 mL of a tap-water sample contains 0.192 mg of Mg<sup>2+</sup>. Express the hardness as parts of CaCO<sub>3</sub> per million parts of water. (Mg = 24, CaCO<sub>3</sub> = 100.)',
        steps: [
          'Moles of Mg<sup>2+</sup> = (0.192 × 10<sup>−3</sup>)/24 = 8.0 × 10<sup>−6</sup> mol. By the convention, this counts as 8.0 × 10<sup>−6</sup> mol of CaCO<sub>3</sub>:<br>mass as CaCO<sub>3</sub> = 8.0 × 10<sup>−6</sup> × 100 = 8.0 × 10<sup>−4</sup> g = 0.8 mg per 100 mL,<br>i.e. 8.0 mg per litre of water = 8 ppm (1 L of water ≈ 1 kg, and 1 mg kg<sup>−1</sup> = 1 ppm).',
          'Every hardness problem is this same three-step shape: moles of the actual ion, one-to-one conversion into CaCO<sub>3</sub> moles, then scale to a per-litre (per-kg) figure.',
        ],
        ans: '8 ppm.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the equivalent mass of H<sub>3</sub>PO<sub>4</sub> in each reaction: (i) H<sub>3</sub>PO<sub>4</sub> + 3 NaOH → Na<sub>3</sub>PO<sub>4</sub> + 3 H<sub>2</sub>O; (ii) H<sub>3</sub>PO<sub>4</sub> + 2 NaOH → Na<sub>2</sub>HPO<sub>4</sub> + 2 H<sub>2</sub>O; (iii) H<sub>3</sub>PO<sub>4</sub> + NaOH → NaH<sub>2</sub>PO<sub>4</sub> + H<sub>2</sub>O.',
            a: '(i) <i>n</i>-factor 3, <i>E</i> = 98/3 = 32.7; (ii) <i>E</i> = 98/2 = 49; (iii) <i>E</i> = 98/1 = 98. Equivalent mass is a property of the reaction, not just the substance — the same acid has three possible values.',
          },
          {
            q: '[NEET] What volume of 0.5 N H<sub>2</sub>SO<sub>4</sub> neutralises 50 mL of 0.2 M NaOH completely?',
            a: 'Equivalents of NaOH = 0.2 × 0.050 = 0.010 eq; <i>V</i> = 0.010/0.5 = 0.020 L = 20 mL.',
          },
          {
            q: '[JEE Main] 1 L of a water sample contains 16.2 mg of Ca(HCO<sub>3</sub>)<sub>2</sub> (M = 162). Find the hardness in ppm as CaCO<sub>3</sub>.',
            a: '<i>n</i> = 16.2/162 = 0.1 mmol ⇒ 0.1 mmol CaCO<sub>3</sub> = 10 mg per litre = 10 ppm.',
          },
          {
            q: '[JEE Main 2024 pattern] 10 kg of hard water requires 10.6 g of washing soda (Na<sub>2</sub>CO<sub>3</sub>, M = 106) for complete removal of permanent hardness caused by CaCl<sub>2</sub>: CaCl<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> → CaCO<sub>3</sub>↓ + 2 NaCl. Find the degree of hardness in ppm of CaCO<sub>3</sub>.',
            a: '<i>n</i>(Na<sub>2</sub>CO<sub>3</sub>) = 10.6/106 = 0.10 mol = <i>n</i>(CaCl<sub>2</sub>), so CaCO<sub>3</sub> equivalent = 0.10 × 100 = 10 g in 10 kg of water = 1 g per kg = 1000 ppm.',
          },
          {
            q: '[JEE Advanced] 25 mL of a mixed solution containing HCl and H<sub>2</sub>SO<sub>4</sub> requires 30 mL of 0.5 N NaOH for neutralisation. A second 25 mL portion, treated with excess BaCl<sub>2</sub>, gives 0.5825 g of BaSO<sub>4</sub> (M = 233). Find the molarity of each acid in the mixture.',
            a: 'Sulphate count: <i>n</i>(BaSO<sub>4</sub>) = 0.5825/233 = 2.5 × 10<sup>−3</sup> mol = <i>n</i>(H<sub>2</sub>SO<sub>4</sub>) in 25 mL ⇒ <i>M</i>(H<sub>2</sub>SO<sub>4</sub>) = 0.10 M, contributing 0.20 N. Total: <i>N</i><sub>mix</sub> = 0.5 × 30/25 = 0.60 N, so HCl supplies 0.60 − 0.20 = 0.40 N = 0.40 M. (This is the law of equivalence running a mixture — total equivalents are additive even when the acids differ.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 64–67 ─────────────────────────
  {
    n: 'C',
    title: 'Eudiometry: Stoichiometry in Gas Volumes',
    extra: true,
    kalam: 'Divide every measured volume by the hydrocarbon volume — volumes now read as moles.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states Avogadro’s law, uses molar volume, and reads one combustion equation in volumes (Topic 04). The exam version goes one step further: when every species is a gas measured at the same temperature and pressure, <b>volume ratios are mole ratios</b>, so a balanced equation can be read in millilitres directly. Problems that exploit this — finding a hydrocarbon’s formula from combustion volumes — are called eudiometry, and they appear in JEE Main papers on this chapter every few sessions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The combustion template.</b> For a hydrocarbon C<sub><i>x</i></sub>H<sub><i>y</i></sub> burnt completely:',
      },
      {
        t: 'formula',
        kicker: 'The combustion template',
        main: 'C<sub><i>x</i></sub>H<sub><i>y</i></sub> + (<i>x</i> + <i>y</i>/4) O<sub>2</sub> → <i>x</i> CO<sub>2</sub> + (<i>y</i>/2) H<sub>2</sub>O',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Read everything per unit volume of hydrocarbon:<br>• volume of CO<sub>2</sub> formed per volume of hydrocarbon = <i>x</i>;<br>• volume of O<sub>2</sub> consumed per volume of hydrocarbon = <i>x</i> + <i>y</i>/4;<br>• H<sub>2</sub>O appears as <b>liquid</b> if the products are cooled to room temperature (its gas volume then vanishes) and as <b>steam</b> (counting <i>y</i>/2 volumes) only if the problem measures volumes above 100 °C. Which regime you are in decides the arithmetic — always check.',
      },
      {
        t: 'p',
        html: '<b>Volume contraction.</b> On cooling back to room temperature, the volume shrink is',
      },
      {
        t: 'formula',
        kicker: 'Volume contraction',
        main: 'Δ<i>V</i> = <i>V</i><sub>initial gases</sub> − <i>V</i><sub>residual gases</sub> = <i>V</i>(hydrocarbon) + <i>V</i>(O<sub>2</sub> consumed) − <i>V</i>(CO<sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'with any excess O<sub>2</sub> (when oxygen is in surplus) surviving untouched.',
      },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          'Write the template equation with unknowns <i>x</i>, <i>y</i>.',
          'Divide every measured volume by the hydrocarbon volume — volumes now read as moles.',
          'Match CO<sub>2</sub> to get <i>x</i>; match O<sub>2</sub> to get <i>y</i> (or use the contraction as a cross-check).',
          'If CO<sub>2</sub> and CO appear together (incomplete combustion), carbon still balances: <i>x</i> = <i>V</i>(CO<sub>2</sub>) + <i>V</i>(CO) per unit hydrocarbon volume.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Formula from combustion volumes',
        q: 'At 298 K and 1 atm, 15 mL of a gaseous hydrocarbon requires exactly 75 mL of O<sub>2</sub> for complete combustion and produces 60 mL of CO<sub>2</sub> (all volumes measured under the same conditions). Find the molecular formula.',
        steps: [
          'At 298 K the water condenses — ignore its volume. Per 15 mL of hydrocarbon:<br><i>x</i> = 60/15 = 4,   <i>x</i> + <i>y</i>/4 = 75/15 = 5 ⇒ <i>y</i>/4 = 1 ⇒ <i>y</i> = 4.',
          'Check the balance: C<sub>4</sub>H<sub>4</sub> + 5 O<sub>2</sub> → 4 CO<sub>2</sub> + 2 H<sub>2</sub>O — 15 mL : 75 mL : 60 mL, exactly as measured. As a check, C<sub>2</sub>H<sub>4</sub> would consume only 45 mL of O<sub>2</sub> and give 30 mL of CO<sub>2</sub> from 15 mL, so it does not fit the data.',
        ],
        ans: 'C<sub>4</sub>H<sub>4</sub>.',
      },
      {
        t: 'ex',
        tag: 'NTA JEE Main 2022 — Rocket fuel per litre',
        q: 'A rocket runs on a fuel C<sub>15</sub>H<sub>30</sub> (density 0.756 g mL<sup>−1</sup>) and liquid oxygen. Find the mass of oxygen required and the mass of CO<sub>2</sub> released for every litre of fuel. (C = 12, H = 1, O = 16.)',
        steps: [
          'Balance the combustion:<br>C<sub>15</sub>H<sub>30</sub> + 22.5 O<sub>2</sub> → 15 CO<sub>2</sub> + 15 H<sub>2</sub>O,   15 + 30/4 = 22.5.',
          'One litre of fuel = 756 g; molar mass of C<sub>15</sub>H<sub>30</sub> = 15(12) + 30 = 210 g mol<sup>−1</sup>, so <i>n</i> = 756/210 = 3.6 mol.<br><i>n</i>(O<sub>2</sub>) = 3.6 × 22.5 = 81 mol ⇒ 81 × 32<br><i>n</i>(CO<sub>2</sub>) = 3.6 × 15 = 54 mol ⇒ 54 × 44',
          'The question is pure template work; the only fresh step is converting “per litre of liquid fuel” through the density into moles.',
        ],
        ans: '2592 g of O<sub>2</sub> and 2376 g of CO<sub>2</sub> per litre of fuel.',
      },
      {
        t: 'ex',
        tag: 'NEET — Volume contraction after combustion',
        q: '10 mL of methane is mixed with 50 mL of oxygen and exploded. The mixture is cooled back to the original temperature (water condenses). Find the final volume and the contraction. All volumes at the same <i>T</i> and <i>P</i>.',
        steps: [
          'CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O(l). Methane is limiting: 10 mL CH<sub>4</sub> consumes 20 mL O<sub>2</sub> and gives 10 mL CO<sub>2</sub>; 30 mL O<sub>2</sub> survives.<br><i>V</i><sub>final</sub> = 10 (CO<sub>2</sub>) + 30 (O<sub>2</sub>);   Δ<i>V</i> = 60 − 40',
          'Note the contraction equals <i>V</i>(CH<sub>4</sub>) + <i>V</i>(O<sub>2</sub> consumed) − <i>V</i>(CO<sub>2</sub>) = 10 + 20 − 10 — the disappeared water vapour is exactly why the volume falls.',
        ],
        ans: 'Final volume 40 mL, contraction 20 mL.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE/NEET] 10 mL of ethane (C<sub>2</sub>H<sub>6</sub>) is burnt in excess oxygen. Find the volume of O<sub>2</sub> consumed and of CO<sub>2</sub> formed (same <i>T</i>, <i>P</i>).',
            a: 'C<sub>2</sub>H<sub>6</sub> + (7/2) O<sub>2</sub> → 2 CO<sub>2</sub> + 3 H<sub>2</sub>O: O<sub>2</sub> = 35 mL, CO<sub>2</sub> = 20 mL.',
          },
          {
            q: '[JEE Main] 20 mL of a gaseous hydrocarbon needs exactly 100 mL of O<sub>2</sub> for complete combustion and yields 60 mL of CO<sub>2</sub>. Deduce the formula.',
            a: '<i>x</i> = 60/20 = 3; <i>x</i> + <i>y</i>/4 = 100/20 = 5 ⇒ <i>y</i> = 8: propane, C<sub>3</sub>H<sub>8</sub>.',
          },
          {
            q: '[JEE Main] Using current IUPAC STP (molar volume 22.7 L): 22.7 L of CH<sub>4</sub> reacts with 45.4 L of O<sub>2</sub> to give 22.7 L of CO<sub>2</sub> and 45.4 L of H<sub>2</sub>O(g). Verify that these volumes satisfy the balanced equation, and state the mass of CH<sub>4</sub> involved.',
            a: 'Volumes are 1 ∶ 2 ∶ 1 ∶ 2 in units of 22.7 L — matching CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O(g) exactly. Mass = 1 mol × 16 = 16 g. (This is NCERT’s own demonstration that Gay-Lussac’s law of combining volumes and Avogadro’s law are the same statement wearing numbers.)',
          },
          {
            q: '[JEE Advanced] A 20 mL gaseous mixture of CH<sub>4</sub> and C<sub>2</sub>H<sub>4</sub> requires exactly 50 mL of O<sub>2</sub> for complete combustion. Find the composition of the mixture by volume. (All volumes at the same <i>T</i>, <i>P</i>; CH<sub>4</sub> needs 2 volumes, C<sub>2</sub>H<sub>4</sub> needs 3 volumes of O<sub>2</sub> per volume.)',
            a: 'Let <i>v</i> mL be CH<sub>4</sub>; then C<sub>2</sub>H<sub>4</sub> is 20 − <i>v</i>. Oxygen: 2<i>v</i> + 3(20 − <i>v</i>) = 50 ⇒ <i>v</i> = 10 mL. The mixture is 10 mL CH<sub>4</sub> + 10 mL C<sub>2</sub>H<sub>4</sub> — 50% by volume each. (Rule 2 of Addendum A again: total volume plus one reaction total.)',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic D · pp. 67–71 (the book's "Addendum P") ─────────────
  {
    n: 'D',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Papers from JEE Main 2021–2025 and NTA 2022 show combustion analysis, purity stoichiometry and hardness recurring across sessions rather than appearing once.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Previous-year questions on this chapter (JEE Main 2021–2025 and NTA 2022) cluster into eight recognizable piles; the table classifies 50 of the representative questions:',
      },
      {
        t: 'table',
        title: null,
        head: ['Pile', 'Number of questions', 'Typical face'],
        rows: [
          ['Mole–particle–mass conversions', '9', '“most atoms in 10<sup>−9</sup> g”, atoms per molecule from % + molar mass'],
          ['Purity / mixture / yield stoichiometry', '9', 'impure Ag<sub>2</sub>CO<sub>3</sub>, coal, dolomite, haematite, reaction sequences'],
          ['Combustion analysis', '5', '%C, %H, %O from CO<sub>2</sub> and H<sub>2</sub>O masses; Kjeldahl %N'],
          ['Gas-volume stoichiometry', '6', 'metal + acid → H<sub>2</sub> at STP; hydrocarbon combustion volumes'],
          ['Concentration terms', '5', 'molarity from % purity + density; molality from molarity; dilution'],
          ['Significant figures, precision/accuracy', '6', 'count sig figs; report a sum; precision vs accuracy statements'],
          ['Laws, Dalton, classification of matter', '6', 'physical vs chemical change; which law; assertion–reason on conservation'],
          ['Titration, equivalents, hardness', '4', '<i>N</i><sub>1</sub><i>V</i><sub>1</sub> chains; ppm as CaCO<sub>3</sub>; % from neutralisation'],
        ],
      },
      {
        t: 'p',
        html: 'The remaining few are empirical/molecular formula items and lone conceptual one-liners (SI base unit, absolute zero). Two lessons stand out. First, <b>this chapter is examined as arithmetic, not recall</b>: roughly three-quarters of these questions are numerical or numerical-flavoured, and JEE Main’s integer-answer format loves it (“nearest integer” appears constantly). Second, <b>NEET’s share is conceptual</b> — significant figures, laws, assertion–reason on Dalton — while JEE Main owns the numericals. Papers from JEE Main 2021–2025 and NTA 2022 show combustion analysis, purity stoichiometry and hardness recurring across sessions rather than appearing once.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — “How much pure stuff is really there?” (purity/mixture)</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> An impure reactant (92% Ag<sub>2</sub>CO<sub>3</sub>, 90% haematite, 60% coal, 10%-pure dolomite) or a two-component mixture (NaHCO<sub>3</sub>/Na<sub>2</sub>CO<sub>3</sub>), one balanced equation, and a request for product mass or gas volume.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Addendum A: purify first, then ordinary stoichiometry; for mixtures, total mass plus one reaction total gives two equations.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A previous-year problem: 18.4 kg of dolomite ore, 10% pure, is decomposed (CaMg(CO<sub>3</sub>)<sub>2</sub> → CaO + MgO + 2 CO<sub>2</sub>, <i>M</i> = 184); find the gas volume at 1 atm, 300 K (<i>R</i> = 0.082).',
        steps: [
          'Pure dolomite = 1840 g = 10 mol, so <i>n</i>(CO<sub>2</sub>) = 20 mol and<br><i>V</i> = <i>nRT</i>/<i>P</i> = 20 × 0.082 × 300 = 492 L.',
          'Note this one deliberately leaves STP behind: once the conditions are not standard, <i>V</i> = <i>nRT</i>/<i>P</i> replaces the 22.4 L shortcut.',
        ],
        ans: '',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — Combustion analysis arithmetic</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> Masses of CO<sub>2</sub> and H<sub>2</sub>O from a weighed organic sample; asked for %C, %H, %O (by difference) or the empirical formula. A 2025 variant gives only CO<sub>2</sub> and asks %C for a C/O compound.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Topic 06’s Procedure C: <i>m</i><sub>C</sub> = (12/44)<i>m</i><sub>CO₂</sub>, <i>m</i><sub>H</sub> = (2/18)<i>m</i><sub>H₂O</sub>, oxygen by difference.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'From JEE Main 2025: 500 mg of a compound gives 220 mg of CO<sub>2</sub> on complete combustion.',
        steps: [
          '<i>m</i><sub>C</sub> = 220 × 12/44 = 60 mg, so %C = 60/500 × 100 = 12%. One line, one mark — and a trap for anyone who reports (220 × 12)/(44 × 500) = 0.12 with the × 100 dropped.',
        ],
        ans: '',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — Concentration from density and percentage</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> “70% pure H<sub>3</sub>PO<sub>4</sub>, specific gravity 1.54 — find molarity” (JEE Main 2024), or the reverse: molarity given, find molality with a density supplied.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> The chapter’s <i>M</i> = 10<i>dx</i>/<i>M</i><sub>B</sub> or the 100 g / 1 L anchor. For the 2024 question: 1 L of solution weighs 1540 g; acid = 0.70 × 1540 = 1078 g = 1078/98 = 11 mol per litre = 11 M. The specific gravity is the density in g mL<sup>−1</sup> — no conversion needed, which the question quietly tests.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — Titrations and hardness through equivalents</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> Two titration legs chained (carbonate standardises the acid, the acid then titrates a base), or a water sample whose Mg<sup>2+</sup> / Ca<sup>2+</sup> / washing-soda demand must become “ppm of CaCO<sub>3</sub>”.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Addendum B: <i>N</i><sub>1</sub><i>V</i><sub>1</sub> = <i>N</i><sub>2</sub><i>V</i><sub>2</sub> for the chains; moles → CaCO<sub>3</sub> equivalents → per-litre scaling for hardness.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The first worked example of Additional topic B is a previous-year JEE Main item (25 mL HCl vs 30 mL of 0.1 M Na<sub>2</sub>CO<sub>3</sub>, then 30 mL of 0.2 M NaOH): the answer 25 mL falls out of two one-line equivalence balances.',
        steps: [],
        ans: '',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — Gas volumes as moles</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> “Mass of Mg needed for 220 mL of H<sub>2</sub> at STP” (JEE Main 2025); “which formula fits 15/75/60 mL combustion data” (Addendum C).',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> <i>n</i> = <i>V</i>/22 400 mL, balanced equation, done. For the 2025 item: <i>n</i>(H<sub>2</sub>) = 220/22400 = 9.82 × 10<sup>−3</sup> mol; Mg + 2 HCl → MgCl<sub>2</sub> + H<sub>2</sub> is 1:1, so mass of Mg = 9.82 × 10<sup>−3</sup> × 24 = 0.236 g = 236 mg.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — Significant figures and precision vocabulary</b>',
      },
      {
        t: 'p',
        html: '<b>Shape.</b> “Sig figs in 0.005060” (4), “in 3.0 × 10<sup>2</sup>” (2), “report 12.11 + 18.0 + 1.012” (31.1), “all zeros significant” (20.000), precision-vs-accuracy statement pairs. NEET-style items dominate this pile.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Pure rule application from the chapter — but note the exams prefer borderline cases: trailing zeros after a decimal, scientific-notation coefficients, and the addition rule (decimal places, not sig figs).',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>22.4 vs 22.7 L.</b> Papers that say “at STP” almost always want 22.4 L — but read the question; NCERT now uses 22.7 L (1 bar), and a paper quoting the modern 1 bar definition (as NCERT’s own worked example does with 22.7 L of CH<sub>4</sub>) wants 22.7 L. The question’s own numbers will tell you which regime it lives in.',
          '<b>Molarity vs molality denominators.</b> Solution volume vs solvent mass; density is the only bridge. A standard “molality from 0.2 M CuSO<sub>4</sub>, density 1.25 g mL<sup>−1</sup>” problem exists solely to punish assuming the two are equal.',
          '<b>Water: liquid or vapour?</b> In eudiometry the whole answer flips on this. Room-temperature data: liquid water, zero volume. Above 100 °C: steam, <i>y</i>/2 volumes.',
          '<b>Oxygen is found by difference.</b> In combustion analysis you never “measure” oxygen; anything else is a designed distractor.',
          '<b>Empirical stop.</b> When a molar mass (or vapour density) is supplied, the question wants the molecular formula; hydrocarbon problems with 85.7% C (C<sub>6</sub>H<sub>12</sub> from <i>M</i> = 84) catch students who submit CH<sub>2</sub>.',
          '<b>Nearest-integer rounding.</b> JEE Main numerical answers are integers; a computed 11.0 or 8.0 must not be second-guessed into a “cleaner” number.',
          '<b>Always recompute.</b> Never trust an answer that fails the data: recheck it against the question’s own numbers (for example, C<sub>2</sub>H<sub>4</sub> as the answer for the data of the first worked example of Additional topic C fails the volume balance).',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: '<b>Level 1 — Direct Recall</b>',
      },
      {
        t: 'practice',
        items: [
          {
            q: 'The number of significant figures in 0.005060 is (a) 6 (b) 3 (c) 4 (d) 5.',
            a: '(c). Leading zeros never count; 5, 0, 6, 0 all count (the trapped zero and the trailing zero after the decimal point are significant). Four figures.',
          },
          {
            q: 'Which is not a mixture: (a) air (b) gasoline (c) diamond (d) bronze.',
            a: '(c). Diamond is elemental carbon — a pure substance. The others are homogeneous mixtures (an alloy, a fuel blend, and air).',
          },
          {
            q: '−273.15 °C corresponds to (a) 0 K (b) 273.15 K (c) −273.15 K (d) 100 K.',
            a: '(a). <i>T</i>/K = <i>t</i>/°C + 273.15 = 0.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Level 2 — Applied Understanding</b>',
      },
      {
        t: 'practice',
        items: [
          {
            q: 'A water sample contains 0.001 g of pollutant per kg of water. Express the concentration in ppm.',
            a: 'ppm = (0.001/1000) × 10<sup>6</sup> = 1 ppm.',
          },
          {
            q: '140 g of an organic compound, analysed by Kjeldahl’s method, yields 51 g of NH<sub>3</sub>. Find the mass percentage of nitrogen in the compound.',
            a: '<i>n</i>(NH<sub>3</sub>) = 51/17 = 3 mol ⇒ <i>n</i>(N) = 3 mol = 42 g. %N = 42/140 × 100 = 30%.',
          },
          {
            q: 'A sulphuric acid solution is 49% H<sub>2</sub>SO<sub>4</sub> by mass with density 1.30 g mL<sup>−1</sup>. Find its molarity.',
            a: '<i>M</i> = (10 × 1.30 × 49)/98 = 6.5 M.',
          },
          {
            q: 'An element has two isotopes of successive atomic masses, equal in abundance, averaging 10. The masses are (a) 8.5, 9.5 (b) 9.5, 10.5 (c) 9, 10 (d) 8, 9.',
            a: '(b). <i>x</i> and <i>x</i> + 1 with equal weighting average to <i>x</i> + 0.5 = 10, so <i>x</i> = 9.5. (The average of two equally abundant successive masses sits halfway between them.)',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Level 3 — Multi-step Reasoning</b>',
      },
      {
        t: 'practice',
        items: [
          {
            q: '1 g of a mixture of NaHCO<sub>3</sub> and Na<sub>2</sub>CO<sub>3</sub> on heating releases 112.0 mL of CO<sub>2</sub> at STP. Find the mass percentage of Na<sub>2</sub>CO<sub>3</sub>.',
            a: 'The third worked example of Additional topic A in full: 16%.',
          },
          {
            q: 'Propane (70 kg) is mixed with 220 kg of O<sub>2</sub> and burnt: C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O. Find the volume of liquid water formed (density 1 g mL<sup>−1</sup>).',
            a: '<i>n</i>(C<sub>3</sub>H<sub>8</sub>) = 70000/44 = 1591 mol, demanding 5 × 1591 = 7955 mol of O<sub>2</sub>; available O<sub>2</sub> = 220000/32 = 6875 mol — oxygen is limiting. <i>n</i>(H<sub>2</sub>O) = (4/5) × 6875 = 5500 mol = 99 000 g = 99 L.',
          },
          {
            q: '5 mol of AB<sub>2</sub> weigh 125 g and 10 mol of A<sub>2</sub>B<sub>2</sub> weigh 300 g. Find the atomic masses of A and B.',
            a: '<i>M</i>(AB<sub>2</sub>) = 25: <i>A</i> + 2<i>B</i> = 25. <i>M</i>(A<sub>2</sub>B<sub>2</sub>) = 30: 2<i>A</i> + 2<i>B</i> = 30. Subtracting, <i>A</i> = 5, then <i>B</i> = 10. (Two formula-mass equations in two unknowns — the mole concept turns into simultaneous linear equations whenever two unknowns share atoms.)',
          },
          {
            q: '100 mL of tap water contains 0.192 mg of Mg<sup>2+</sup>. Report the hardness in ppm as CaCO<sub>3</sub>.',
            a: 'The third worked example of Additional topic B in full: 8 ppm.',
          },
        ],
      },

      { t: 'part', title: 'What the Addenda Add' },
      {
        t: 'p',
        html: 'The chapter treats every reactant as pure and stops at defining normality, so two structures JEE Main leans on hardest — <b>purity/mixture stoichiometry</b> and <b>equivalent-based titration chains (including the ppm-of-</b>CaCO<sub>3</sub><b> hardness convention)</b> — are developed here in Addenda A and B. Avogadro’s law, which the chapter applies to single reactions (Topics 04 and 07), becomes in Addendum C the general volume-ratio engine that the exams exploit in hydrocarbon-combustion (eudiometry) problems, together with its liquid-water/vapour fork.',
      },
    ],
  },
];
