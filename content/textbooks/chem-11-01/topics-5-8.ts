import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 05 to 08: pp. 32–58 of the Class 11 Chemistry Master
 * Reference, word for word. Topic 05, Atomic/Molecular Masses & Mole Concept
 * (pp. 32–38); Topic 06, Percentage Composition, Empirical & Molecular Formula
 * (pp. 39–45); Topic 07, Stoichiometry & Limiting Reagent (pp. 46–51); Topic 08,
 * Concentration Terms (pp. 52–58). Each is split at its Sections 1 to 8. These
 * pages carry no drawings. The book's "Sub-01" / "the laws subtopic" (Topic 04),
 * "Sub-02" / "the mole subtopic" (Topic 05) and "the concentration subtopic"
 * (Topic 08) are written as the app's topic numbers.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 32–38 ─────────────────────────
  {
    n: '05',
    title: 'Atomic/Molecular Masses & Mole Concept',
    kalam: 'The mole was deliberately defined so that the mass of one mole of an element, measured in grams, is numerically equal to its relative atomic mass.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the single most heavily examined idea in all of Class 11 Chemistry. CBSE Boards reliably set a 2–3 mark numerical (moles/molecules/atoms). NEET asks 1–2 “which sample has the most particles” or average-atomic-mass questions every year. JEE Main blends the mole with vapour density, isotopic abundance, or mixtures, and every later quantitative chapter — stoichiometry, concentration, equilibrium, electrochemistry — is built on top of it.',
      },
      {
        t: 'p',
        html: 'When you buy eggs, you don’t count them one at a time — you ask for a dozen. When a wholesaler at a mandi sells rice, he doesn’t count grains; he sells quintals. We invent counting units because counting individual items is impractical. Atoms push this idea to its absolute extreme. A single grain of sand contains more atoms than there are grains of sand on every beach in India. You can never count atoms one by one — so chemists invented their own “dozen,” and they called it the <b>mole</b>.',
      },
      {
        t: 'p',
        html: 'A mole is simply a fixed, agreed-upon number of things — but a colossal one:<br><i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup><br>This is <b>Avogadro’s number</b>. One mole of anything is 6.022 × 10<sup>23</sup> of it, exactly as one dozen of anything is twelve of it. One mole of marbles, one mole of stars, one mole of water molecules — all are 6.022 × 10<sup>23</sup> entities. (Marbles would bury the Earth; molecules fit in a spoon. That gap is the point.)',
      },
      {
        t: 'p',
        html: 'Here is the genius of the choice. The mole was deliberately defined so that <b>the mass of one mole of an element, measured in grams, is numerically equal to its relative atomic mass.</b> Carbon-12 has relative atomic mass 12, so one mole of carbon-12 atoms weighs 12 g. Oxygen (16) → 16 g per mole. This is the bridge chemistry desperately needed: it connects the <b>invisible world of single atoms</b> (measured in atomic mass units, u) to the <b>visible world of the laboratory balance</b> (measured in grams). Weigh out 12 g of carbon-12 and you have, without counting, 6.022 × 10<sup>23</sup> atoms. (Since 2019 the mole is defined as exactly 6.02214076 × 10<sup>23</sup> entities.)',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a shopkeeper who knows that exactly 1000 mustard seeds weigh 5 g. He never counts seeds — he just weighs. If a customer wants 3000 seeds, he weighs out 15 g. The mole is the chemist’s version of “1000 seeds”: a counting unit you access by weighing instead of counting. The molar mass (g/mol) is the “weight of one batch.”',
      },
      {
        t: 'p',
        html: 'Two related ideas grow out of this:<br><br><b>Relative atomic mass and the <sup>12</sup>C standard.</b> We don’t measure atomic masses in grams (the numbers would be absurd, like 10<sup>−23</sup>). Instead we measure them relative to a reference: exactly 1/12 the mass of one carbon-12 atom is defined as 1 atomic mass unit (1 u). Every other atomic mass is quoted on this scale.<br><br><b>Average atomic mass.</b> Why is chlorine’s atomic mass 35.5 and not a whole number? Because no chlorine atom actually weighs 35.5 u — in nature, chlorine is a mixture of <sup>35</sup>Cl and <sup>37</sup>Cl in roughly 3 ∶ 1 abundance. The 35.5 is a <b>weighted average</b>, exactly like a batsman’s batting average is not the score of any single innings but the weighted result of all of them. The atomic mass on the periodic table is this real-world isotopic average.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>Molar volume (22.4 L per mole) applies only to a gas, and only at STP</b>, and assumes ideal-gas behaviour. It is meaningless for solids or liquids. <b>Caution:</b> the older STP (0 °C, 1 atm) gives 22.4 L; the current IUPAC STP (0 °C, 1 bar) gives 22.7 L. Exams using “STP” almost always intend 22.4 L — but read the question; NCERT now uses 22.7 L (1 bar).<br>• <b>Average atomic mass assumes the standard terrestrial isotopic abundance.</b> A sample artificially enriched in one isotope would have a different effective atomic mass.<br>• The numerical equality “molar mass in g = relative mass in u” is a consequence of the definition, not a coincidence — and it only works because <i>N</i><sub>A</sub> was chosen to make it so.',
      },

      { t: 'part', title: 'Key definitions and formulas' },
      {
        t: 'formula',
        kicker: 'Atomic mass unit',
        main: '1 u = (1/12) <i>m</i>(<sup>12</sup>C) = 1.66 × 10<sup>−24</sup> g = (1/<i>N</i><sub>A</sub>) g',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Avogadro’s number',
        main: '<i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>',
        legend: ['<i>N</i><sub>A</sub> = the number of entities in one mole'],
        note: 'SI unit: mol<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'The mole — three equivalent bridges (the “mole triangle”)',
        main: '<i>n</i> = <i>m</i>/<i>M</i> = <i>N</i>/<i>N</i><sub>A</sub> = <i>V</i>/<i>V</i><sub>m</sub>',
        legend: [
          '<i>n</i> = number of moles',
          '<i>m</i> = mass (g)',
          '<i>M</i> = molar mass (g/mol)',
          '<i>N</i> = number of particles',
          '<i>V</i> = volume of gas at STP',
          '<i>V</i><sub>m</sub> = 22.4 L mol<sup>−1</sup> (gas at STP)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Molecular mass</b> = sum of atomic masses of all atoms in the molecule. <b>Formula mass</b> = same sum for an ionic compound’s formula unit (e.g., NaCl, which has no discrete molecule). Unit: u (or g/mol as molar mass).',
      },
      {
        t: 'formula',
        kicker: 'For an elemental gas',
        main: '<i>M</i><sub>molecular</sub> = (atomicity) × <i>M</i><sub>atomic</sub>',
        legend: [],
        note: '(e.g., O<sub>2</sub>: 2 × 16 = 32). Recall atomicity from Topic 04.',
      },
      {
        t: 'formula',
        kicker: 'Average (mean) atomic mass',
        main: '<i>Ā</i> = (<i>A</i><sub>1</sub><i>x</i><sub>1</sub> + <i>A</i><sub>2</sub><i>x</i><sub>2</sub> + ⋯)/(<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯)',
        legend: ['<i>A</i><sub><i>i</i></sub> = isotopic masses', '<i>x</i><sub><i>i</i></sub> = fractional/percentage abundances'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Average (mean) molar mass of a mixture',
        main: '<i>M̄</i> = (<i>M</i><sub>1</sub><i>n</i><sub>1</sub> + <i>M</i><sub>2</sub><i>n</i><sub>2</sub> + ⋯)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> + ⋯)',
        legend: ['<i>M</i><sub><i>i</i></sub> = component molar masses', '<i>n</i><sub><i>i</i></sub> = their moles'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vapour density (for gases)',
        main: 'V.D. = (density of gas)/(density of H<sub>2</sub>) = <i>M</i>/2 ⇒ <i>M</i> = 2 × V.D.',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Molar mass:</b> SI/working unit g mol<sup>−1</sup>; dimension of mass per amount, [M N<sup>−1</sup>].',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'These relationships are definitional, so there is no derivation to prove — what matters is fluent navigation between mass, moles, number, and volume. Here is the framework.',
      },
      {
        t: 'p',
        html: 'Whatever you are given (mass, number of particles, or gas volume), the reliable route is always: <b>convert to moles first, then convert moles to the target.</b> Never jump directly from grams to number of atoms.',
      },
      {
        t: 'proc',
        title: 'Procedure A — the mole as a universal hub',
        steps: [
          '<b>Identify what you have.</b> Mass → use <i>n</i> = <i>m</i>/<i>M</i>. Particles → use <i>n</i> = <i>N</i>/<i>N</i><sub>A</sub>. Gas volume at STP → use <i>n</i> = <i>V</i>/22.4.',
          '<b>Land on moles.</b> Moles is the common currency; everything passes through it.',
          '<b>Convert moles to the target</b> by reversing the appropriate relation.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why route through moles?</b> Because <i>m</i>, <i>N</i>, and <i>V</i> have no direct relationship to one another — but each has a clean, one-step relationship to <i>n</i>. Moles is the central station through which all lines run.',
      },
      {
        t: 'p',
        html: '<b>Procedure B — counting atoms (not just molecules).</b> A frequent trap. To find the number of atoms of a particular element:<br><i>N</i><sub>atoms of X</sub> = <i>n</i><sub>molecules</sub> × (number of X atoms per molecule) × <i>N</i><sub>A</sub>.<br>The step everyone forgets is multiplying by the count of that atom inside the formula. One mole of H<sub>2</sub>O is <i>N</i><sub>A</sub> molecules but 2<i>N</i><sub>A</sub> hydrogen atoms and <i>N</i><sub>A</sub> oxygen atoms — three moles of atoms in total.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — average atomic mass from isotopes.</b> Multiply each isotopic mass by its fractional abundance, add, and (if abundances are given as percentages) divide by 100. Reasoning: the “average” must be weighted by how common each isotope is — a rare heavy isotope barely shifts the average, exactly as one brilliant innings barely moves a long career average.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — molar mass from vapour density.</b> Measure V.D. experimentally, then <i>M</i> = 2 × V.D. The factor of 2 enters because V.D. is defined relative to hydrogen (H<sub>2</sub>, molar mass ≈ 2). Combine with <i>M</i><sub>molecular</sub> = atomicity × <i>M</i><sub>atomic</sub> to find the atomicity of an unknown elemental gas (as we did conceptually for the diatomic gases in Topic 04).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the number of moles and the number of atoms present in 13.5 g of aluminium. (Atomic mass of Al = 27 u.)',
        steps: [
          '<b>Given:</b> <i>m</i> = 13.5 g, <i>M</i> = 27 g mol<sup>−1</sup>.',
          'Number of moles:<br><i>n</i> = <i>m</i>/<i>M</i> = 13.5/27 = 0.5 mol.',
          'Aluminium is a metal (monoatomic in this context), so number of atoms:<br><i>N</i> = <i>n</i> × <i>N</i><sub>A</sub> = 0.5 × 6.022 × 10<sup>23</sup> =',
          'So 13.5 g of aluminium contains 0.5 mol, i.e.',
        ],
        ans: '3.011 × 10<sup>23</sup> atoms',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following contains the <b>maximum number of atoms</b>?<br>(a) 4 g of hydrogen gas (b) 16 g of oxygen gas (c) 23 g of sodium (d) 4 g of helium',
        steps: [
          '<b>Fast solution.</b> Convert each to moles of atoms — and crucially, multiply diatomic gases by their atomicity.<br>• (a) H<sub>2</sub>: 4/2 = 2 mol molecules ×2 = 4 mol atoms.<br>• (b) O<sub>2</sub>: 16/32 = 0.5 mol molecules ×2 = 1 mol atoms.<br>• (c) Na: 23/23 = 1 mol atoms (monoatomic).<br>• (d) He: 4/4 = 1 mol atoms (monoatomic).',
          'Maximum is (a) with 4 mol of atoms.',
          '<b>The trap:</b> students compute moles of molecules (2 mol for H<sub>2</sub>) and forget hydrogen is diatomic, so they undercount its atoms — or they pick (c)/(d) because “1 mole each” looks tidy. <b>Speed tip:</b> for atom-counting, always ask “monoatomic or diatomic?” before comparing.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An element X has two stable isotopes: <sup>63</sup>X (mass 62.93 u) and <sup>65</sup>X (mass 64.93 u). The average atomic mass of X is 63.55 u. (i) Find the percentage abundance of each isotope. (ii) Hence find the number of <sup>63</sup>X atoms in a 6.355 g sample of X. (Links isotopic averaging with the mole concept.)',
        steps: [
          '<b>(i)</b> Let the fractional abundance of <sup>63</sup>X be <i>x</i>; then <sup>65</sup>X is (1 − <i>x</i>).<br>62.93<i>x</i> + 64.93(1 − <i>x</i>) = 63.55<br>64.93 − 2.00<i>x</i> = 63.55 ⇒ 2.00<i>x</i> = 1.38 ⇒ <i>x</i> = 0.690.',
          'So <sup>63</sup>X = 69% and <sup>65</sup>X = 31%.',
          '<b>(ii)</b> Total moles of atoms in the sample (using the average atomic mass as molar mass):<br><i>n</i> = 6.355/63.55 = 0.100 mol ⇒ <i>N</i><sub>total</sub> = 0.100 × <i>N</i><sub>A</sub> = 6.022 × 10<sup>22</sup> atoms.',
          'Number that are <sup>63</sup>X:<br><i>N</i>(<sup>63</sup>X) = 0.690 × 6.022 × 10<sup>22</sup> =',
          'The link is essential: part (i) needs the weighted-average idea; part (ii) feeds that average mass into the mole bridge.',
        ],
        ans: '4.16 × 10<sup>22</sup> atoms',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A gaseous mixture of methane (CH<sub>4</sub>) and ethane (C<sub>2</sub>H<sub>6</sub>) has an average molar mass of 20.0 g mol<sup>−1</sup>. (i) Find the mole fraction of methane. (ii) Calculate the total number of hydrogen atoms present in 5.00 g of the mixture.',
        steps: [
          '<i>M</i>(CH<sub>4</sub>) = 16 g mol<sup>−1</sup>, <i>M</i>(C<sub>2</sub>H<sub>6</sub>) = 30 g mol<sup>−1</sup>.',
          '<b>(i)</b> Let the mole fraction of CH<sub>4</sub> be <i>a</i>:<br>16<i>a</i> + 30(1 − <i>a</i>) = 20 ⇒ 30 − 14<i>a</i> = 20 ⇒ <i>a</i> = 10/14 = 5/7 ≈ 0.714.<br>So <i>x</i><sub>CH₄</sub> = 5/7 and <i>x</i><sub>C₂H₆</sub> = 2/7.',
          '<b>(ii)</b> Total moles in 5.00 g using the average molar mass:<br><i>n</i><sub>total</sub> = 5.00/20.0 = 0.250 mol.',
          'Split by mole fraction:<br><i>n</i><sub>CH₄</sub> = 0.250 × 5/7 = 0.1786 mol, <i>n</i><sub>C₂H₆</sub> = 0.250 × 2/7 = 0.0714 mol.',
          'Moles of H atoms (CH<sub>4</sub> has 4 H, C<sub>2</sub>H<sub>6</sub> has 6 H):<br><i>n</i><sub>H</sub> = (0.1786 × 4) + (0.0714 × 6) = 0.7143 + 0.4286 = 1.143 mol.<br><i>N</i><sub>H</sub> = 1.143 × 6.022 × 10<sup>23</sup> =',
          'The rigour: average molar mass yields total moles, mole fractions split the mixture, and only then does per-molecule hydrogen counting give the atom total — four ideas chained without a single wrong turn.',
        ],
        ans: '6.88 × 10<sup>23</sup> atoms',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the mass of 0.25 mol of sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>. (Na = 23, C = 12, O = 16.)',
            a: '26.5 g.',
          },
          {
            q: '[NEET] Which sample contains the greatest number of molecules: 8 g of O<sub>2</sub>, 4 g of H<sub>2</sub>, 44 g of CO<sub>2</sub>, or 34 g of H<sub>2</sub>S?',
            a: '4 g of H<sub>2</sub> (= 2 mol molecules; all others are ≈ 0.25–1 mol).',
          },
          {
            q: '[JEE Main] A certain gas has a vapour density of 22. Calculate its molar mass, and find the volume occupied by 11 g of the gas at STP.',
            a: '<i>M</i> = 44 g mol<sup>−1</sup>; 11 g = 0.25 mol ⇒ 5.6 L at STP.',
          },
          {
            q: '[JEE Main] Boron occurs as two isotopes, <sup>10</sup>B (10.013 u) and <sup>11</sup>B (11.009 u). If the average atomic mass of boron is 10.81 u, find the percentage abundance of <sup>11</sup>B.',
            a: '<sup>11</sup>B ≈ 80% (so <sup>10</sup>B ≈ 20%).',
          },
          {
            q: '[JEE Advanced] A 4.40 g sample of a mixture of CO and CO<sub>2</sub> contains 0.12 mol of molecules in total. Determine the moles of each gas and the total number of oxygen atoms in the sample.',
            a: '0.055 mol CO and 0.065 mol CO<sub>2</sub>; O atoms = 0.185 mol ≈ 1.11 × 10<sup>23</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of molecules in 1.8 g of water is:',
        opts: [
          { label: '6.022 × 10<sup>23</sup>', nudge: '<b>(a)</b> assumes 18 g (a full mole) — misreading the mass.' },
          { label: '3.011 × 10<sup>23</sup>', nudge: '<b>(b)</b> uses 9 g (half a mole) — a molar-mass slip.' },
          { label: '6.022 × 10<sup>22</sup>', nudge: null },
          {
            label: '1.2 × 10<sup>23</sup>',
            nudge: '<b>(d)</b> multiplies moles of molecules by the 2 hydrogen atoms, answering “atoms” when “molecules” was asked. Read the noun.',
          },
        ],
        correct: 2,
        solution: '<i>n</i> = 1.8/18 = 0.1 mol; <i>N</i> = 0.1 × 6.022 × 10<sup>23</sup> = 6.022 × 10<sup>22</sup>.',
      },
      {
        t: 'mcq',
        q: 'At STP, 5.6 L of a gas weighs 11 g. The molar mass of the gas is:',
        opts: [
          {
            label: '22 g mol<sup>−1</sup>',
            nudge: '<b>(a)</b> is the vapour density (<i>M</i>/2), not the molar mass — forgetting the factor of 2.',
          },
          { label: '44 g mol<sup>−1</sup>', nudge: null },
          {
            label: '28 g mol<sup>−1</sup>',
            nudge: '<b>(c)</b> 28 g mol<sup>−1</sup> (N<sub>2</sub>, CO) is a familiar value, unrelated to the data.',
          },
          { label: '11 g mol<sup>−1</sup>', nudge: '<b>(d)</b> takes the sample’s mass (11 g) as the molar mass — as if 5.6 L were a whole mole — ignoring the mole bridge entirely.' },
        ],
        correct: 1,
        solution: '<i>n</i> = 5.6/22.4 = 0.25 mol; <i>M</i> = <i>m</i>/<i>n</i> = 11/0.25 = 44 g mol<sup>−1</sup>.',
      },
      {
        t: 'mcq',
        q: 'The average atomic mass of an element with isotopes of masses 20 u and 22 u, present in 90% and 10% abundance respectively, is:',
        opts: [
          { label: '21.0 u', nudge: '<b>(a)</b> is the unweighted mean — the classic error of ignoring abundance.' },
          { label: '20.2 u', nudge: null },
          { label: '20.0 u', nudge: '<b>(c)</b> picks the more abundant isotope’s mass, treating “average” as “most common.”' },
          { label: '21.8 u', nudge: '<b>(d)</b> weights toward the heavier isotope, swapping the two abundances.' },
        ],
        correct: 1,
        solution: '<i>Ā</i> = (20 × 90 + 22 × 10)/100 = (1800 + 220)/100 = 20.2 u.',
      },
      {
        t: 'mcq',
        q: 'Which of the following has the same number of atoms as 12 g of carbon-12?',
        opts: [
          {
            label: '2 g of H<sub>2</sub>',
            nudge: '<b>(a)</b> 2 g H<sub>2</sub> = 1 mol molecules × 2 = 2 mol atoms — twice the count in 12 g of <sup>12</sup>C.',
          },
          {
            label: '32 g of O<sub>2</sub>',
            nudge: '<b>(b)</b> 32 g O<sub>2</sub> = 1 mol molecules × 2 = 2 mol atoms — likewise twice the count.',
          },
          { label: '8 g of helium', nudge: '<b>(c)</b> 8 g He = 2 mol atoms — twice the count.' },
          { label: '23 g of sodium', nudge: null },
        ],
        correct: 3,
        solution: '12 g of <sup>12</sup>C = 1 mol = <i>N</i><sub>A</sub> atoms. 23 g Na = 1 mol = <i>N</i><sub>A</sub> atoms. Match. Only (d), 1 mol of Na, matches.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing molecules with atoms.</b> “Number of molecules” and “number of atoms” differ by the atomicity/formula count. One mole of N<sub>2</sub> is <i>N</i><sub>A</sub> molecules but 2<i>N</i><sub>A</sub> atoms. Always read the noun in the question.',
          '<b>Skipping the mole hub.</b> Trying to leap straight from grams to number of particles invites error. Land on moles first, every time.',
          '<b>Treating average atomic mass as real.</b> No chlorine atom weighs 35.5 u; that figure is a weighted average across isotopes. Never use it as a single-atom mass in a nuclear context.',
          '<b>Misapplying 22.4 L.</b> It is moles-of-gas-at-STP only. Using it for liquids/solids, or forgetting the STP convention, is a frequent trap.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “which has more particles” questions, never compute full values. Just write each as mass/(molar mass) (then × atomicity for atoms) and compare the fractions by inspection. You can rank four options in under fifteen seconds without ever touching <i>N</i><sub>A</sub> — it cancels out of every comparison.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>',
            note: 'one mole = <i>N</i><sub>A</sub> entities (the chemist’s “dozen”).',
          },
          {
            f: 'The mole triangle',
            note: '<i>n</i> = <i>m</i>/<i>M</i> = <i>N</i>/<i>N</i><sub>A</sub> = <i>V</i>/(22.4 L) (last term: gas at STP only).',
          },
          { f: 'Molar mass (g/mol) = relative molecular mass (u)', note: 'same number, by design.' },
          { f: 'Atoms = molecules × atomicity (or atoms-per-formula); then ×<i>N</i><sub>A</sub>.', note: '' },
          {
            f: 'Average atomic mass <i>Ā</i> = ∑<i>A</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>/∑<i>x</i><sub><i>i</i></sub>',
            note: 'weight by abundance.',
          },
          {
            f: 'Vapour density',
            note: '<i>M</i> = 2 × V.D.; and <i>M</i><sub>molecular</sub> = atomicity × <i>M</i><sub>atomic</sub>.',
          },
        ],
        aids: [
          '“<b>Everything passes through moles</b>” — convert to <i>n</i> first, always.',
          '“<b>Average means weighted</b>” — abundances, not a plain mean.',
          '“<b>V.D. doubled gives molar mass</b>” — the H<sub>2</sub> factor of 2.',
          '“22.4 <b>is a gas-only ticket</b>” — never for solids or liquids.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 39–45 ─────────────────────────
  {
    n: '06',
    title: 'Percentage Composition, Empirical & Molecular Formula',
    kalam: 'Percentage composition is the law of definite proportions expressed as numbers.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. CBSE Boards set a 2–3 mark “find the empirical/molecular formula” numerical almost every year. NEET asks mass-percent and molecular-formula-from-vapour-density MCQs regularly. JEE Main folds in combustion analysis and the mole concept; JEE Advanced layers on water of crystallisation and multi-step deductions.',
      },
      {
        t: 'p',
        html: 'Walk into any sweet shop before Diwali and ask what goes into the kaju katli. The halwai might say: “by weight, it’s about 60% cashew, 30% sugar, the rest ghee and cardamom.” That breakdown — what fraction of the total mass each ingredient contributes — is exactly what chemists call <b>percentage composition</b>. For a compound, it tells you what mass-fraction of the whole is carbon, what fraction is hydrogen, and so on. It is the chemical “nutrition label.”',
      },
      {
        t: 'p',
        html: 'But a recipe has two layers of information, and chemistry mirrors them precisely.',
      },
      {
        t: 'p',
        html: 'The first layer is the <b>simplest ratio</b> of ingredients. If a chai recipe is always “2 spoons sugar to 1 spoon tea leaves,” that 2:1 ratio is the essence of the recipe — it does not tell you whether you are making one cup or a hundred, only the proportion. In chemistry this simplest whole-number ratio of atoms is the <b>empirical formula</b>. Glucose, for instance, has an empirical formula of CH<sub>2</sub>O: for every carbon atom there are two hydrogens and one oxygen.',
      },
      {
        t: 'p',
        html: 'The second layer is the <b>actual count</b> in one real molecule. A single molecule of glucose is not CH<sub>2</sub>O — it is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, six times the empirical unit. That actual count is the <b>molecular formula</b>. The link between the two is a simple whole-number multiplier:<br>Molecular formula = <i>n</i> × (Empirical formula).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose a cricket academy always recruits batsmen and bowlers in the ratio 2 ∶ 1. That ratio (the empirical formula) is fixed. But it does not tell you the squad size — a squad could be 2 batsmen + 1 bowler, or 8 + 4, or 16 + 8. To pin down the real squad you need one more fact: the total number of players. In chemistry, that extra fact is the <b>molar mass</b>. Knowing the molar mass, you divide it by the empirical formula mass to get <i>n</i>, the squad-size multiplier. This is the deep reason empirical formula alone is never enough to identify a molecule: formaldehyde (CH<sub>2</sub>O, molar mass 30) and glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, molar mass 180) share the same empirical formula yet are utterly different substances. The molar mass is what tells them apart.',
      },
      {
        t: 'p',
        html: 'Notice how this connects back to Topic 04: the fact that atoms combine in fixed, simple, whole-number ratios is precisely the <b>law of definite proportions</b> at the atomic scale. Percentage composition is the law of definite proportions expressed as numbers.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• For many simple compounds the empirical and molecular formulas are <b>identical</b> (H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub>) — here <i>n</i> = 1.<br>• <b>Ionic compounds have only an empirical (formula unit), never a molecular formula.</b> In common salt there is no discrete “NaCl molecule” floating about — instead an enormous lattice holds sodium and chloride ions in a fixed 1 ∶ 1 alternating arrangement. The symbol NaCl therefore states the ratio of ions in that lattice, exactly what an empirical formula does, and asking for its molecular formula is meaningless. The same applies to CaCl<sub>2</sub>, MgO, and ionic solids generally.<br>• You <b>cannot</b> get the molecular formula from percentage composition alone; you must also know the molar mass (often supplied directly, or via vapour density, <i>M</i> = 2 × V.D. from Topic 05).<br>• Percentage composition assumes a <b>pure</b> compound; impurities or mixtures invalidate it.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Mass percentage of an element',
        main: '% (element) = ((number of atoms of element in formula) × (atomic mass))/(molar mass of compound) × 100',
        legend: [],
        note: null,
      },
      { t: 'def', term: 'Empirical formula', html: 'the simplest whole-number ratio of atoms of each element.' },
      { t: 'def', term: 'Molecular formula', html: 'the actual number of atoms of each element in one molecule.' },
      { t: 'def', term: 'Empirical formula mass (EFM)', html: 'the sum of atomic masses of the atoms in the empirical formula.' },
      {
        t: 'formula',
        kicker: 'Relating the two',
        main: '<i>n</i> = (molecular mass)/(empirical formula mass)<br>Molecular formula = <i>n</i> × (Empirical formula)',
        legend: ['<i>n</i> = a positive whole number'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molar mass from vapour density',
        main: '<i>M</i> = 2 × V.D.',
        legend: [],
        note: '(chained from Topic 05)',
      },
      {
        t: 'formula',
        kicker: 'Combustion analysis (for C, H, O compounds)',
        main: '<i>m</i><sub>C</sub> = (12/44) <i>m</i><sub>CO₂</sub><br><i>m</i><sub>H</sub> = (2/18) <i>m</i><sub>H₂O</sub><br><i>m</i><sub>O</sub> = <i>m</i><sub>compound</sub> − <i>m</i><sub>C</sub> − <i>m</i><sub>H</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Direct method (molar mass known)',
        main: 'atoms of an element per molecule = (% of element / 100)<br>× (molar mass / atomic mass)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units:</b> percentages are dimensionless; all masses in grams; molar mass in g mol<sup>−1</sup>.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no theorem to prove here — the skill is a clean, repeatable algorithm. Master the empirical-formula routine and everything else follows.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Empirical formula from percentage composition (the 5-step routine)',
        steps: [
          '<b>Assume a 100 g sample.</b> Then each percentage becomes a mass in grams directly (e.g., 40% C → 40 g C). <b>Why:</b> it converts abstract percentages into concrete masses with zero extra arithmetic.',
          '<b>Divide each element’s mass by its atomic mass</b> to get moles of each element. <b>Why:</b> atoms combine in ratios of number (i.e., moles), never in ratios of mass — so mass must be converted to moles before any ratio is meaningful. This is the central insight, and the step most often skipped.',
          '<b>Divide every mole value by the smallest of them.</b> This scales the smallest element to 1 and expresses the others relative to it. <b>Why:</b> a ratio is cleanest when one term is unity.',
          '<b>Clear any stubborn fractions</b> by multiplying all values by a small integer. A trailing .5 means multiply by 2; a .33 or .67 means multiply by 3; a .25 means 4. <b>Why:</b> atoms exist only in whole numbers — there is no “half an atom” in a formula. (Ignore tiny deviations like 1.98 or 3.03 that arise from rounding.)',
          '<b>Write the whole numbers as subscripts</b> → empirical formula. Then compute the empirical formula mass.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Molecular formula.</b> Obtain the molar mass (given, or from <i>M</i> = 2 × V.D.). Compute<br><i>n</i> = (molar mass)/(empirical formula mass),<br>round <i>n</i> to the nearest whole number, and multiply every subscript in the empirical formula by <i>n</i>.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Combustion analysis (organic C/H/O compounds).</b> When a compound is burned, all its carbon ends up in CO<sub>2</sub> and all its hydrogen in H<sub>2</sub>O. So:<br>• Back-calculate <i>m</i><sub>C</sub> from <i>m</i><sub>CO₂</sub> using the mass fraction 12/44, and <i>m</i><sub>H</sub> from <i>m</i><sub>H₂O</sub> using 2/18.<br>• Find oxygen (if present) <b>by difference</b>: <i>m</i><sub>O</sub> = <i>m</i><sub>compound</sub> − <i>m</i><sub>C</sub> − <i>m</i><sub>H</sub>. <b>Why by difference:</b> oxygen in the products comes partly from the air supplied, so it cannot be measured directly from CO<sub>2</sub>/H<sub>2</sub>O — only the original compound’s oxygen is wanted, and subtraction isolates it.<br>• Then feed <i>m</i><sub>C</sub>, <i>m</i><sub>H</sub>, <i>m</i><sub>O</sub> into Procedure A.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — the direct method (skipping the empirical step).</b> When the molar mass is known from the start, you can reach the molecular formula in a single pass, without first reducing to an empirical formula. The number of atoms of each element in one molecule is given directly by<br>(atoms of element) = (% of element)/100 × (molar mass)/(atomic mass).<br><b>Why it works:</b> the factor (%/100) × <i>M</i> is the mass of that element contained in one mole of the compound, and dividing by the atomic mass converts that mass into a count of atoms per molecule — which is exactly the subscript you want. <b>Why it saves time:</b> it collapses the whole “mass → moles → smallest-ratio → clear fractions → multiply by <i>n</i>” chain into one division per element, and it avoids fraction-clearing entirely because the molar mass has already fixed the scale. Use it whenever the molar mass (or vapour density) is supplied; fall back to the empirical routine of Procedure A when it is not. As a quick check, the subscripts it returns should all come out close to whole numbers — if they don’t, recheck the molar mass or the percentages.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the percentage composition by mass of urea, CO(NH<sub>2</sub>)<sub>2</sub>. (C = 12, O = 16, N = 14, H = 1.)',
        steps: [
          '<b>Molar mass:</b><br><i>M</i> = 12 + 16 + 2(14 + 2 × 1) = 12 + 16 + 2(16) = 60 g mol<sup>−1</sup>.',
          'The molecule contains 1 C, 1 O, 2 N, 4 H. Therefore:<br>% C = 12/60 × 100 = 20.0%, % O = 16/60 × 100 = 26.7%,<br>% N = (2 × 14)/60 × 100 = 28/60 × 100 = 46.7%, % H = 4/60 × 100 = 6.7%.',
          '<b>Check:</b> 20.0 + 26.7 + 46.7 + 6.7 = 100.1% ≈ 100% ✓ (the 0.1 is rounding). Urea’s high nitrogen content (46.7%) is exactly why it is such a prized fertiliser.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which nitrogenous fertiliser has the highest nitrogen content by mass?<br>(a) Urea, CO(NH<sub>2</sub>)<sub>2</sub> (b) Ammonium nitrate, NH<sub>4</sub>NO<sub>3</sub> (c) Ammonium sulphate, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (d) Calcium nitrate, Ca(NO<sub>3</sub>)<sub>2</sub>',
        steps: [
          '<b>Fast solution.</b> Use the shortcut % N = (14 × (no. of N))/<i>M</i> × 100 — never compute full compositions.<br>• Urea: 28/60 = 0.467 → 46.7%<br>• NH<sub>4</sub>NO<sub>3</sub>: 28/80 = 0.350 → 35.0%<br>• (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>: 28/132 = 0.212 → 21.2%<br>• Ca(NO<sub>3</sub>)<sub>2</sub>: 28/164 = 0.171 → 17.1%',
          'Urea wins.',
          '<b>The trap:</b> students compute the full percentage composition of all four — a minute of arithmetic for a 30-second question. <b>Speed tip:</b> for “highest % of element X,” you only need ((atomic mass of X) × (count of X))/<i>M</i>; compare the four fractions mentally. The smallest molar mass with the most N atoms wins.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '0.60 g of an organic compound containing only C, H and O undergoes complete combustion, producing 0.88 g of CO<sub>2</sub> and 0.36 g of H<sub>2</sub>O. If its molar mass is 60 g mol<sup>−1</sup>, determine its molecular formula. (Links combustion analysis with the empirical-to-molecular routine.)',
        steps: [
          '<b>Carbon:</b> <i>m</i><sub>C</sub> = (12/44) × 0.88 = 0.24 g. <b>Hydrogen:</b> <i>m</i><sub>H</sub> = (2/18) × 0.36 = 0.04 g. <b>Oxygen (by difference):</b> <i>m</i><sub>O</sub> = 0.60 − 0.24 − 0.04 = 0.32 g.',
          '<b>Convert to moles:</b><br><i>n</i><sub>C</sub> = 0.24/12 = 0.02, <i>n</i><sub>H</sub> = 0.04/1 = 0.04, <i>n</i><sub>O</sub> = 0.32/16 = 0.02.',
          '<b>Divide by smallest (0.02):</b> C ∶ H ∶ O = 1 ∶ 2 ∶ 1.',
          'Empirical formula = CH<sub>2</sub>O, with EFM = 12 + 2 + 16 = 30.<br><i>n</i> = 60/30 = 2 ⇒ Molecular formula = C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> (acetic acid).',
          'The two ideas chain cleanly: combustion gives the masses, and the empirical→molecular routine finishes the job.',
        ],
        ans: 'C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A hydrated salt of magnesium sulphate, MgSO<sub>4</sub>·<i>x</i>H<sub>2</sub>O, loses 51.2% of its mass as water when heated to constant mass. Determine the value of <i>x</i>. (Mg = 24, S = 32, O = 16, H = 1.)',
        steps: [
          'Molar mass of anhydrous MgSO<sub>4</sub> = 24 + 32 + 4 × 16 = 120 g mol<sup>−1</sup>; each water is 18 g mol<sup>−1</sup>.',
          'The mass fraction of water in the hydrate is<br>18<i>x</i>/(120 + 18<i>x</i>) = 0.512.',
          'Solve:<br>18<i>x</i> = 0.512(120 + 18<i>x</i>) = 61.44 + 9.216<i>x</i><br>18<i>x</i> − 9.216<i>x</i> = 61.44 ⇒ 8.784<i>x</i> = 61.44 ⇒ <i>x</i> = 6.99 ≈ 7.',
          '<b>Check:</b> water mass = 7 × 18 = 126; total = 120 + 126 = 246; fraction = 126/246 = 0.512 ✓.',
          'The rigour lies in setting up the single mass-fraction equation correctly and recognising that <i>x</i> must round to an integer (a formula cannot contain 6.99 waters).',
        ],
        ans: '<i>x</i> = 7 (the salt is MgSO<sub>4</sub>·7H<sub>2</sub>O, Epsom salt)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the percentage composition by mass of glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.',
            a: 'C = 40.0%, H = 6.7%, O = 53.3%.',
          },
          {
            q: '[NEET] An oxide of iron contains 70% iron and 30% oxygen by mass. What is its empirical formula? (Fe = 56.)',
            a: 'Fe<sub>2</sub>O<sub>3</sub> (moles 1.25 ∶ 1.875 = 2 ∶ 3).',
          },
          {
            q: '[JEE Main] A hydrocarbon contains 92.3% carbon by mass and has a vapour density of 39. Determine its empirical and molecular formulas.',
            a: 'Empirical CH (C:H = 7.69 ∶ 7.7 ≈ 1 ∶ 1); <i>M</i> = 2 × 39 = 78, EFM = 13, <i>n</i> = 6 → molecular C<sub>6</sub>H<sub>6</sub>.',
          },
          {
            q: '[JEE Main] 0.45 g of a hydrocarbon, on complete combustion, gives 1.32 g of CO<sub>2</sub> and 0.81 g of H<sub>2</sub>O. Find its empirical formula.',
            a: 'CH<sub>3</sub> (C:H = 0.03 ∶ 0.09 = 1 ∶ 3; masses 0.36 + 0.09 = 0.45 ✓, no oxygen).',
          },
          {
            q: '[JEE Advanced] Washing soda, Na<sub>2</sub>CO<sub>3</sub>·<i>x</i>H<sub>2</sub>O, contains 62.9% water by mass. Find <i>x</i>. (Na = 23, C = 12, O = 16, H = 1.)',
            a: '<i>x</i> = 10 (water mass 180, total 286, 180/286 = 62.9%).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The percentage of oxygen by mass in sulphuric acid, H<sub>2</sub>SO<sub>4</sub>, is:',
        opts: [
          { label: '65.3%', nudge: null },
          { label: '32.7%', nudge: '<b>(b)</b> is the percentage of sulphur (32/98) — or uses only 2 oxygens.' },
          { label: '16.3%', nudge: '<b>(c)</b> uses one oxygen (16/98) — forgetting there are four.' },
          { label: '2.0%', nudge: '<b>(d)</b> is the percentage of hydrogen (2/98) — answering the wrong element.' },
        ],
        correct: 0,
        solution: '<i>M</i>(H<sub>2</sub>SO<sub>4</sub>) = 2 + 32 + 4 × 16 = 98; % O = 64/98 × 100 = 65.3%.',
      },
      {
        t: 'mcq',
        q: 'A compound has the empirical formula CH<sub>2</sub>O and a molar mass of 180 g mol<sup>−1</sup>. Its molecular formula is:',
        opts: [
          { label: 'CH<sub>2</sub>O', nudge: '<b>(a)</b> ignores the molar mass entirely (<i>n</i> = 1).' },
          { label: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>', nudge: null },
          {
            label: 'C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>',
            nudge: '<b>(c)</b> and <b>(d)</b> use <i>n</i> = 2 and <i>n</i> = 3 — dividing by the wrong number or arithmetic slips. The molar mass must drive <i>n</i>.',
          },
          {
            label: 'C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>',
            nudge: '<b>(c)</b> and <b>(d)</b> use <i>n</i> = 2 and <i>n</i> = 3 — dividing by the wrong number or arithmetic slips. The molar mass must drive <i>n</i>.',
          },
        ],
        correct: 1,
        solution: 'EFM = 30; <i>n</i> = 180/30 = 6 → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.',
      },
      {
        t: 'mcq',
        q: 'For which of the following is the empirical formula <b>different</b> from the molecular formula?',
        opts: [
          {
            label: 'H<sub>2</sub>O',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are already in simplest ratio (<i>n</i> = 1), so empirical = molecular. The trap is assuming every molecular formula reduces — many do not.',
          },
          {
            label: 'CO<sub>2</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are already in simplest ratio (<i>n</i> = 1), so empirical = molecular. The trap is assuming every molecular formula reduces — many do not.',
          },
          { label: 'C<sub>6</sub>H<sub>6</sub>', nudge: null },
          {
            label: 'NH<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are already in simplest ratio (<i>n</i> = 1), so empirical = molecular. The trap is assuming every molecular formula reduces — many do not.',
          },
        ],
        correct: 2,
        solution: 'Benzene C<sub>6</sub>H<sub>6</sub> reduces to the empirical formula CH (<i>n</i> = 6), so the two differ.',
      },
      {
        t: 'mcq',
        q: 'An organic compound has empirical formula CH<sub>2</sub> and a vapour density of 21. Its molecular formula is:',
        opts: [
          { label: 'CH<sub>2</sub>', nudge: '<b>(a)</b> forgets to use V.D. at all.' },
          {
            label: 'C<sub>2</sub>H<sub>4</sub>',
            nudge: '<b>(b)</b> uses <i>n</i> = 2 — from forgetting the factor of 2 in <i>M</i> = 2 × V.D. (would give <i>M</i> = 21, <i>n</i> ≈ 1.5, wrongly rounded).',
          },
          { label: 'C<sub>3</sub>H<sub>6</sub>', nudge: null },
          { label: 'C<sub>4</sub>H<sub>8</sub>', nudge: '<b>(d)</b> uses <i>n</i> = 4 — an arithmetic error in dividing.' },
        ],
        correct: 2,
        solution: '<i>M</i> = 2 × 21 = 42; EFM(CH<sub>2</sub>) = 14; <i>n</i> = 42/14 = 3 → C<sub>3</sub>H<sub>6</sub>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Taking ratios of mass instead of moles.</b> The single biggest empirical-formula error. Mass ratios are meaningless for formulas; you must divide by atomic mass to reach moles first.',
          '<b>Rounding away genuine fractions.</b> A ratio ending in .5, .33, or .25 is real — multiply the whole set by 2, 3, or 4. Rounding 1.5 to 2 corrupts the formula. (Only ignore rounding noise like 1.98 → 2.)',
          '<b>Stopping at the empirical formula.</b> If a molar mass (or vapour density) is given, the question wants the molecular formula — compute <i>n</i> and multiply.',
          '<b>Measuring combustion oxygen directly.</b> Oxygen must be found by difference, because product oxygen includes oxygen from the air.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> The “100 g sample” trick removes all percentage clutter — percentages become grams instantly. And always run the sanity check: your element masses (or percentages) must sum back to the total. If they don’t, you have lost an element (often the oxygen you were meant to find by difference).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Mass %', note: '% X = ((count) × (atomic mass))/<i>M</i> × 100.' },
          {
            f: 'Empirical formula routine',
            note: 'assume 100 g → divide each mass by atomic mass (moles) → divide by smallest → clear fractions → subscripts.',
          },
          { f: 'Molecular formula', note: '<i>n</i> = molar mass / EFM; then MF = <i>n</i> × EF.' },
          { f: 'Molar mass from V.D.', note: '<i>M</i> = 2 × V.D. (from Topic 05).' },
          {
            f: 'Combustion',
            note: '<i>m</i>(C) = (12/44) <i>m</i>(CO<sub>2</sub>), <i>m</i>(H) = (2/18) <i>m</i>(H<sub>2</sub>O), O by difference.',
          },
          { f: 'Ionic compounds', note: 'empirical (formula unit) only — no molecular formula.' },
        ],
        aids: [
          '“<b>Mass to moles before ratio</b>” — never ratio raw masses.',
          '“<b>Empirical is the recipe, molecular is the batch</b>” — <i>n</i> is the batch size.',
          '“<b>Molar mass breaks the tie</b>” — CH<sub>2</sub>O could be formaldehyde or glucose; molar mass decides.',
          '“<b>Oxygen by difference</b>” — in combustion, subtract, don’t measure.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 07 · pp. 46–51 ─────────────────────────
  {
    n: '07',
    title: 'Stoichiometry & Limiting Reagent',
    kalam: 'A balanced chemical equation is a recipe.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the most heavily examined ideas in the entire syllabus. CBSE Boards set a 2–3 mark mass-to-mass numerical. NEET reliably asks a limiting-reagent or mole-ratio MCQ every year. JEE Main combines limiting reagent with excess-reactant and product-mass calculations; JEE Advanced layers sequential reactions and percentage yield. Everything you learned about the mole now gets used here (molarity, from Topic 08, enters for reactions in solution).',
      },
      {
        t: 'p',
        html: 'A balanced chemical equation is a <b>recipe</b>. When you read<br>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O,<br>it is telling you exactly the same thing as “2 cups flour + 1 cup sugar make 2 cakes”: the coefficients give the <b>ratio in which things combine and form</b>. The science word for reading these recipe ratios is <b>stoichiometry</b> — the quantitative bookkeeping of reactants and products.',
      },
      {
        t: 'p',
        html: 'The crucial subtlety is that the recipe speaks in <b>moles (particles), not grams</b>. The equation above does not say “2 g hydrogen + 1 g oxygen”; it says “2 molecules (or moles) of H<sub>2</sub> react with 1 molecule (or mole) of O<sub>2</sub>.” So every stoichiometry problem flows through the same channel you built earlier: convert what you are given <b>into moles</b> (using molar mass from Topic 05), use the <b>coefficient ratio</b> to find moles of what you want, then convert <b>back</b> to grams, litres, or particles.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose a dhaba recipe needs 2 rotis and 1 bowl of dal per thali. If you have 10 rotis but only 3 bowls of dal, how many thalis can you serve? The rotis could make 5 thalis, but the dal can only stretch to 3 — so you serve 3 thalis and run out of dal first, with 4 rotis left over uselessly. The dal is the <b>limiting reagent</b> (it runs out first and decides how much product you get); the rotis are in <b>excess</b> (some are left unreacted). This is the single most important practical idea in stoichiometry: in the real world, reactants are rarely mixed in exact recipe proportions, so one of them runs out first and caps the amount of product. Identifying that capping reactant is the key to almost every JEE/NEET stoichiometry problem.',
      },
      {
        t: 'p',
        html: 'Finally, the recipe gives the maximum possible product — the <b>theoretical yield</b>. Real reactions lose some product (incomplete reaction, side reactions, spillage), so the <b>actual yield</b> is usually less. The <b>percentage yield</b> measures how efficient the reaction was: actual/theoretical × 100.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The equation <b>must be balanced</b> before any ratio is used — an unbalanced equation gives wrong ratios and wrong answers.<br>• Mole ratios apply to amounts, so always convert masses/volumes to moles first; never take ratios of raw grams.<br>• The molar-volume shortcut (1 mol gas = 22.4 L at STP, from Topic 05) applies only to gases at STP.<br>• Percentage yield assumes a single, well-defined product pathway; competing side reactions complicate it.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Stoichiometry',
        html: 'the calculation of quantities of reactants and products from a balanced equation, using the coefficient (mole) ratios.',
      },
      {
        t: 'formula',
        kicker: 'The mole-ratio bridge (the master relation)',
        main: '(moles of A)/(coefficient of A) = (moles of B)/(coefficient of B)',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Limiting reagent (identification)',
        html: 'divide the available moles of each reactant by its stoichiometric coefficient; the reactant with the <b>smallest</b> quotient is the limiting reagent (it runs out first and determines the product amount).',
      },
      {
        t: 'def',
        term: 'Excess reactant remaining',
        html: '(initial moles) − (moles consumed, computed from the limiting reagent).',
      },
      {
        t: 'formula',
        kicker: 'Gas volume at STP',
        main: 'moles of gas = <i>V</i>/(22.4 L)',
        legend: [],
        note: '(chained from Topic 05).',
      },
      {
        t: 'formula',
        kicker: 'Reactions in solution',
        main: 'moles of solute = <i>M</i> × <i>V</i><sub>(L)</sub>',
        legend: ['<i>M</i> = molarity of the solution', '<i>V</i><sub>(L)</sub> = volume of solution in litres'],
        note: '(molarity × volume; molarity is defined in Topic 08).',
      },
      {
        t: 'formula',
        kicker: 'Percentage yield',
        main: '% yield = (actual yield)/(theoretical yield) × 100',
        legend: [],
        note: 'where the theoretical yield is the product amount predicted by the limiting reagent.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — The mole method (general stoichiometric calculation)',
        steps: [
          '<b>Balance</b> the equation.',
          '<b>Convert the given quantity to moles</b> (mass ÷ molar mass; or volume ÷ 22.4 L for a gas at STP; or <i>M</i> × <i>V</i> for a solution).',
          '<b>Apply the coefficient ratio</b> to find moles of the desired species.',
          '<b>Convert back</b> to the requested unit (× molar mass for mass, × 22.4 L for gas volume, × <i>N</i><sub>A</sub> for particles). <b>Why route through moles:</b> coefficients are particle ratios, and only moles count particles — grams and litres must first be translated into the language the equation speaks.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — The POAC (Principle of Atom Conservation) method.</b> Because atoms are conserved in a reaction, the total moles of any given element are equal on both sides — without needing to balance the equation. For KClO<sub>3</sub> → KCl + O<sub>2</sub>, conserving oxygen gives 3 × (mol KClO<sub>3</sub>) = 2 × (mol O<sub>2</sub>). <b>Why it helps:</b> for messy equations, POAC on a single element often reaches the answer faster than full balancing.',
      },
      {
        t: 'proc',
        title: 'Procedure C — Identify the limiting reagent and finish the problem',
        steps: [
          'Convert each reactant to moles.',
          '<b>Divide each by its coefficient</b>; the smallest quotient marks the <b>limiting reagent</b>.',
          'Base <b>all</b> product and consumption calculations on the limiting reagent.',
          'For the <b>excess reactant</b>, subtract the moles consumed from the moles supplied to get what remains. <b>Why divide by the coefficient:</b> it puts every reactant on the same “per-recipe-unit” footing, so you compare how many full recipes each can support — the smallest wins (runs out first).',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure D — Theoretical vs actual yield.</b> Compute the theoretical (maximum) yield from the limiting reagent via Procedure A, then compare with the experimentally obtained actual yield to get the percentage yield. <b>Why it matters:</b> it quantifies real-world reaction efficiency, which is never a perfect 100%.',
      },
      {
        t: 'p',
        html: '<b>Procedure E — gas volume-to-volume and solution stoichiometry (two faster on-ramps).</b><br>• <b>Gaseous reactions at constant <i>T</i>, <i>P</i>:</b> by Gay-Lussac’s law of combining volumes and Avogadro’s law (from Topic 04), the <b>volume</b> ratio of reacting gases equals their <b>coefficient</b> ratio directly — so you may work in litres without ever converting to moles. For N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, 1 L of N<sub>2</sub> needs exactly 3 L of H<sub>2</sub> and yields 2 L of NH<sub>3</sub>.<br>• <b>Reactions in solution:</b> the moles of a dissolved reactant are <i>M</i> × <i>V</i><sub>(L)</sub> (molarity × volume, from Topic 08). Convert each solution reactant to moles this way, then apply the coefficient ratio exactly as in Procedure A — and identify the limiting reagent by Procedure C if both amounts are given. <b>Why these work:</b> each is the ordinary mole method with the first conversion done by a quicker route — volume-for-gases (Avogadro) or molarity-for-solutions — instead of mass ÷ molar mass.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the mass of carbon dioxide produced when 50 g of calcium carbonate is completely decomposed.<br>CaCO<sub>3</sub> →<sup>Δ</sup> CaO + CO<sub>2</sub><br>(Ca = 40, C = 12, O = 16.)',
        steps: [
          '<b>Molar mass:</b> CaCO<sub>3</sub> = 40 + 12 + 48 = 100 g mol<sup>−1</sup>. <b>Moles of CaCO<sub>3</sub>:</b> <i>n</i> = 50/100 = 0.50 mol. <b>Mole ratio:</b> 1 CaCO<sub>3</sub> → 1 CO<sub>2</sub>, so moles of CO<sub>2</sub> = 0.50 mol. <b>Mass of CO<sub>2</sub></b> (<i>M</i> = 44): 0.50 × 44 =',
        ],
        ans: '22 g',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '2 mol of H<sub>2</sub> and 1.5 mol of O<sub>2</sub> react to form water. Which is the limiting reagent, and how many moles of water form?<br>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O',
        steps: [
          '<b>Fast solution.</b> Divide moles by coefficient: H<sub>2</sub> ∶ 2/2 = 1; O<sub>2</sub> ∶ 1.5/1 = 1.5. Smallest is H<sub>2</sub> → <b>H<sub>2</sub> is limiting</b>. Water is then fixed by H<sub>2</sub>: 2 mol H<sub>2</sub> → 2 mol H<sub>2</sub>O.',
          '<b>The trap:</b> students see “more moles of H<sub>2</sub> than O<sub>2</sub>” and wrongly call O<sub>2</sub> limiting — comparing raw moles instead of moles-per-coefficient. <b>Speed tip:</b> always divide by the coefficient first; raw mole counts are meaningless without it.',
        ],
        ans: 'H<sub>2</sub> limiting; 2 mol water.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '28 g of nitrogen reacts with 9 g of hydrogen to form ammonia. Find (i) the limiting reagent, (ii) the mass of ammonia formed, and (iii) the mass of the excess reactant left unreacted.<br>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>',
        steps: [
          '<b>Moles:</b> N<sub>2</sub> = 28/28 = 1.0 mol; H<sub>2</sub> = 9/2 = 4.5 mol.',
          '<b>(i) Limiting reagent:</b> divide by coefficients — N<sub>2</sub> ∶ 1.0/1 = 1.0; H<sub>2</sub> ∶ 4.5/3 = 1.5. Smallest is N<sub>2</sub> → <b>N<sub>2</sub> is limiting</b>.',
          '<b>(ii) Ammonia:</b> 1 N<sub>2</sub> → 2 NH<sub>3</sub>, so NH<sub>3</sub> = 2 × 1.0 = 2.0 mol = 2.0 × 17 =',
          '<b>(iii) Excess H<sub>2</sub>:</b> consumed = 3 × 1.0 = 3.0 mol = 6 g; supplied = 9 g; left = 9 − 6 =',
          'Every product and leftover is anchored to the limiting reagent — that is the discipline JEE Main rewards.',
        ],
        ans: '(ii) 34 g; (iii) 3 g of H<sub>2</sub>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '50 g of N<sub>2</sub> is mixed with 10 g of H<sub>2</sub> and allowed to react. The reaction actually produces 40 g of NH<sub>3</sub>. Determine (i) the limiting reagent, (ii) the theoretical yield of NH<sub>3</sub>, and (iii) the percentage yield.<br>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>',
        steps: [
          '<b>Moles:</b> N<sub>2</sub> = 50/28 = 1.79 mol; H<sub>2</sub> = 10/2 = 5.0 mol.',
          '<b>(i) Limiting reagent:</b> divide by coefficients — N<sub>2</sub> ∶ 1.79/1 = 1.79; H<sub>2</sub> ∶ 5.0/3 = 1.67. Smallest is H<sub>2</sub> → <b>H<sub>2</sub> is limiting</b>.',
          '<b>(ii) Theoretical yield:</b> 3 H<sub>2</sub> → 2 NH<sub>3</sub>, so NH<sub>3</sub> = 5.0 × 2/3 = 3.333 mol = 3.333 × 17 = 56.67 g.',
          '<b>(iii) Percentage yield:</b><br>% yield = 40/56.67 × 100 =',
          'The rigour: the limiting reagent must be found before the theoretical yield (using the wrong reactant gives the wrong maximum), and only then does the actual/theoretical ratio give a meaningful efficiency.',
        ],
        ans: '70.6%',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What mass of oxygen is required to completely burn 16 g of methane? CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O. (C = 12, H = 1, O = 16.)',
            a: 'CH<sub>4</sub> = 1 mol ⇒ O<sub>2</sub> = 2 mol = 64 g.',
          },
          {
            q: '[NEET] 3 mol of Al react with 4 mol of O<sub>2</sub>. Which is limiting? 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>.',
            a: 'Al ∶ 3/4 = 0.75; O<sub>2</sub> ∶ 4/3 = 1.33 → <b>Al limiting</b>.',
          },
          {
            q: '[JEE Main] 13 g of zinc is added to 100 mL of 2.0 M HCl. Find the volume of H<sub>2</sub> gas produced at STP. Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. (Zn = 65.)',
            a: 'Zn = 0.2 mol, HCl = 0.2 mol; 0.2/1 = 0.2 vs 0.2/2 = 0.1 → HCl limiting → H<sub>2</sub> = 0.1 mol = 2.24 L at STP.',
          },
          {
            q: '[JEE Main] 8.0 g of SO<sub>2</sub> and 2.0 g of O<sub>2</sub> react: 2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub>. Find the limiting reagent and the mass of SO<sub>3</sub> formed. (S = 32, O = 16.)',
            a: 'SO<sub>2</sub> = 0.125, O<sub>2</sub> = 0.0625; 0.125/2 = 0.0625 vs 0.0625/1 = 0.0625 → exactly stoichiometric (neither in excess) → SO<sub>3</sub> = 0.125 mol = 10 g.',
          },
          {
            q: '[JEE Advanced] Heating 24.5 g of KClO<sub>3</sub> gives KCl and O<sub>2</sub>. If the actual mass of O<sub>2</sub> collected is 8.0 g, find the percentage yield. 2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>. (K = 39, Cl = 35.5, O = 16.)',
            a: 'KClO<sub>3</sub> = 24.5/122.5 = 0.20 mol → theoretical O<sub>2</sub> = 0.20 × 3/2 = 0.30 mol = 9.6 g; % yield = 8.0/9.6 × 100 = 83.3%.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'How many moles of CO<sub>2</sub> form from the complete combustion of 1 mol of propane? C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O.',
        opts: [
          { label: '1', nudge: '<b>(a)</b> ignores the coefficient.' },
          { label: '3', nudge: null },
          { label: '4', nudge: '<b>(c)</b> reads the water coefficient.' },
          { label: '5', nudge: '<b>(d)</b> reads the oxygen coefficient.' },
        ],
        correct: 1,
        solution: 'The coefficient ratio gives 1 C<sub>3</sub>H<sub>8</sub> → 3 CO<sub>2</sub>. Always read the ratio for the correct species.',
      },
      {
        t: 'mcq',
        q: 'When 1 mol of N<sub>2</sub> reacts with 1 mol of H<sub>2</sub> (N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>), the limiting reagent is:',
        opts: [
          { label: 'N<sub>2</sub>', nudge: '<b>(a)</b> compares raw moles (equal) and guesses.' },
          { label: 'H<sub>2</sub>', nudge: null },
          { label: 'both equally', nudge: '<b>(c)</b> ignores the 3 ∶ 1 ratio.' },
          { label: 'neither', nudge: '<b>(d)</b> is impossible when amounts are non-stoichiometric.' },
        ],
        correct: 1,
        solution: 'Divide by coefficients: N<sub>2</sub> ∶ 1/1 = 1; H<sub>2</sub> ∶ 1/3 = 0.33. Smaller is H<sub>2</sub>.',
      },
      {
        t: 'mcq',
        q: 'The maximum amount of product predicted by the balanced equation and the limiting reagent is called the:',
        opts: [
          { label: 'actual yield', nudge: '<b>(a)</b> is what is really obtained.' },
          { label: 'percentage yield', nudge: '<b>(b)</b> is their ratio.' },
          { label: 'theoretical yield', nudge: null },
          { label: 'excess yield', nudge: '<b>(d)</b> is not a term.' },
        ],
        correct: 2,
        solution: 'That maximum is the theoretical yield. The trap is confusing the predicted maximum with the measured amount.',
      },
      {
        t: 'mcq',
        q: '4 g of H<sub>2</sub> reacts with 32 g of O<sub>2</sub> (2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O). The mass of water formed is:',
        opts: [
          { label: '18 g', nudge: '<b>(a)</b> gives only 1 mol of water.' },
          { label: '36 g', nudge: null },
          { label: '34 g', nudge: '<b>(c)</b> 34 g: subtracts 2 g of H<sub>2</sub> from 36 g.' },
          { label: '32 g', nudge: '<b>(d)</b> just echoes the oxygen mass.' },
        ],
        correct: 1,
        solution: 'H<sub>2</sub> = 2 mol, O<sub>2</sub> = 1 mol; quotients 2/2 = 1 and 1/1 = 1 → exactly stoichiometric, so 2 mol H<sub>2</sub>O = 36 g. Conservation of mass also confirms 4 + 32 = 36 g.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Skipping the balancing step.</b> Coefficient ratios are only valid for a balanced equation. Balance first, every time.',
          '<b>Ratioing grams.</b> The equation speaks in moles; convert masses/volumes to moles before applying any ratio.',
          '<b>Comparing raw moles for the limiting reagent.</b> Always divide moles by the coefficient first — the smallest quotient is limiting, not the smallest mole count.',
          '<b>Anchoring product on the wrong reactant.</b> All product (and yield) calculations must be based on the limiting reagent, never the one in excess.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For limiting-reagent questions, write each reactant’s moles directly above its coefficient and compute the ratio in one glance — the smallest ratio is limiting, and that single number drives every subsequent part (product mass, excess left, yield). Finding it first turns a multi-part problem into a sequence of one-line conversions.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Balanced equation = mole recipe.', note: 'Coefficients give the <b>mole ratio</b>, not the mass ratio.' },
          { f: 'Mole method', note: 'given → moles → (× coefficient ratio) → moles wanted → back to units.' },
          {
            f: 'POAC',
            note: 'atoms conserved, e.g. 3 <i>n</i>(KClO<sub>3</sub>) = 2 <i>n</i>(O<sub>2</sub>) — no balancing needed.',
          },
          {
            f: 'Limiting reagent',
            note: 'divide each reactant’s moles by its coefficient; <b>smallest quotient = limiting</b>.',
          },
          { f: 'Excess left = supplied − consumed (consumed from the limiting reagent).', note: '' },
          {
            f: '% yield = actual/theoretical × 100; theoretical yield comes from the limiting reagent.',
            note: '',
          },
        ],
        aids: [
          '“<b>Balance, then mole, then ratio, then back</b>” — the four-step spine.',
          '“<b>Divide by the coefficient</b>” — the one rule for limiting reagent.',
          '“<b>Anchor on the limiter</b>” — products and yield always follow the limiting reagent.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 08 · pp. 52–58 ─────────────────────────
  {
    n: '08',
    title: 'Concentration Terms',
    kalam: 'Molarity is temperature-dependent; molality and mole fraction are not.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scorer. CBSE Boards set a 2–3 mark molarity/molality numerical almost every year. NEET reliably asks a “which term is temperature-independent” or mole-fraction MCQ. JEE Main loves density-based interconversions and dilution; JEE Advanced layers mixing and multi-step density problems. The concept also underpins the entire Class 12 Solutions chapter.',
      },
      {
        t: 'p',
        html: 'Think of a glass of nimbu paani. Two people can both make “lemon water,” but one might stir in two spoons of sugar and the other six. Same drink, very different strength. <b>Concentration</b> is simply chemistry’s precise way of answering “how much solute is crammed into how much solution (or solvent)?” — how crowded the dissolved particles are.',
      },
      {
        t: 'p',
        html: 'The catch is that there are several honest ways to measure that crowding, and they differ in what you divide by:<br>• Divide moles of solute by the <b>volume of solution</b> → <b>molarity</b> (<i>M</i>). This is the chemist’s everyday workhorse, because in the lab you measure liquids by volume (a measuring flask, a pipette).<br>• Divide moles of solute by the <b>mass of solvent</b> → <b>molality</b> (<i>m</i>).<br>• Divide moles of one component by the <b>total moles</b> of everything → <b>mole fraction</b> (<i>x</i>).<br>• Express the solute as a fraction of total <b>mass</b> → <b>mass percent</b>, or for very dilute solutions, <b>parts per million (ppm)</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine measuring how crowded a Mumbai local train is. You could count passengers per coach (a fixed volume — like molarity), or passengers per tonne of train (a fixed mass — like molality). On a scorching afternoon the metal coach expands very slightly, so “passengers per coach-volume” drifts a hair — but “passengers per tonne” never does, because heating never changes mass. This is the single most important intuition about concentration: <b>anything defined using volume (molarity, normality, formality) drifts with temperature; anything defined using mass or moles (molality, mole fraction, mass %) is rock-steady.</b> Liquids expand when heated, so a litre at 50 °C holds slightly fewer moles than a litre at 25 °C — molarity falls even though nothing was added or removed.',
      },
      {
        t: 'p',
        html: 'Each measure has its moment. Molarity is convenient for reactions in solution (you just measure a volume). Molality is essential whenever temperature changes — which is exactly why the Class 12 Solutions chapter uses it for boiling-point and freezing-point work. Mole fraction is natural when you mix components and care about proportions of particles.',
      },
      {
        t: 'p',
        html: 'For very dilute solutions — a pinch of something in a vast amount of water — even mass percent is clumsy, so we switch to <b>parts per million (ppm)</b>: grams of solute per million grams of solution. This is the everyday language of water quality. The fluoride content of drinking water, for instance, is reported in ppm: a small amount strengthens teeth, but excess (the cause of widespread dental and skeletal fluorosis in parts of Rajasthan and Andhra Pradesh) is a genuine public-health concern. Hardness, dissolved sulphate, and nitrate in groundwater are all quoted the same way. ppm exists precisely because writing “0.0002%” is absurd when “2 ppm” says the same thing cleanly.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>Molarity is temperature-dependent</b>; molality and mole fraction are not. Never assume molarity = molality except in very dilute aqueous solutions (where 1 L ≈ 1 kg of water).<br>• <b>Molality uses the mass of the solvent, not the solution.</b> Mixing these up is the most common error in the whole topic.<br>• <b>Interconverting molarity and molality requires the density</b> of the solution — you cannot do it from concentration alone.<br>• ppm and mass % are exact for any composition; the shortcut “mass of solution ≈ mass of solvent” is valid only for very dilute solutions (compute exactly when masses are comparable).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Mass percent',
        main: '% (<i>w</i>/<i>w</i>) = (mass of solute)/(mass of solution) × 100',
        legend: [],
        note: 'Dimensionless.',
      },
      {
        t: 'formula',
        kicker: 'Parts per million',
        main: 'ppm = (mass of solute)/(mass of solution) × 10<sup>6</sup>',
        legend: [],
        note: '(ppb uses 10<sup>9</sup>.) Dimensionless.',
      },
      {
        t: 'formula',
        kicker: 'Mole fraction',
        main: '<i>x</i><sub>B</sub> = <i>n</i><sub>B</sub>/(<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>), with <i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1',
        legend: [
          '<i>x</i><sub>A</sub>, <i>x</i><sub>B</sub> = solvent/solute mole fractions',
          '<i>n</i><sub>A</sub> = moles of solvent',
          '<i>n</i><sub>B</sub> = moles of solute',
        ],
        note: 'Dimensionless, temperature-independent.',
      },
      {
        t: 'formula',
        kicker: 'Molarity',
        main: '<i>M</i> = (moles of solute)/(volume of solution (L)) = (<i>w</i><sub>B</sub> × 1000)/(<i>M</i><sub>B</sub> × <i>V</i><sub>mL</sub>)',
        legend: [
          '<i>w</i><sub>B</sub> = mass of solute (g)',
          '<i>M</i><sub>B</sub> = molar mass of solute',
          '<i>V</i><sub>mL</sub> = volume of solution in mL',
        ],
        note: 'Unit mol L<sup>−1</sup> (mol dm<sup>−3</sup>); dimension [N L<sup>−3</sup>]. Temperature-dependent.',
      },
      {
        t: 'formula',
        kicker: 'Molality',
        main: '<i>m</i> = (moles of solute)/(mass of solvent (kg)) = (<i>w</i><sub>B</sub> × 1000)/(<i>M</i><sub>B</sub> × <i>w</i><sub>A(g)</sub>)',
        legend: [
          '<i>w</i><sub>B</sub> = mass of solute (g)',
          '<i>M</i><sub>B</sub> = molar mass of solute',
          '<i>w</i><sub>A(g)</sub> = mass of solvent (g)',
        ],
        note: 'Unit mol kg<sup>−1</sup>; dimension [N M<sup>−1</sup>]. Temperature-independent.',
      },
      {
        t: 'formula',
        kicker: 'Normality',
        main: '<i>N</i> = (gram-equivalents of solute)/(volume of solution (L)), and <i>N</i> = (<i>n</i>-factor) × <i>M</i>',
        legend: [
          '<i>n</i>-factor = basicity (acids), acidity (bases), or electrons transferred (redox)',
          '<i>M</i> = molarity',
        ],
        note: 'Unit eq L<sup>−1</sup>; temperature-dependent.',
      },
      {
        t: 'formula',
        kicker: 'Dilution',
        main: '<i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub>',
        legend: [
          '<i>M</i><sub>1</sub>, <i>V</i><sub>1</sub> = molarity and volume before dilution',
          '<i>M</i><sub>2</sub>, <i>V</i><sub>2</sub> = molarity and final total volume after dilution',
        ],
        note: '(moles conserved on adding solvent).',
      },
      {
        t: 'formula',
        kicker: 'Molarity on mixing (same solute/solvent)',
        main: '<i>M</i><sub>R</sub> = (<i>M</i><sub>1</sub><i>V</i><sub>1</sub> + <i>M</i><sub>2</sub><i>V</i><sub>2</sub> + ⋯)/(<i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ⋯)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molarity from density and mass %',
        main: '<i>M</i> = (10 × <i>d</i> × <i>x</i>)/<i>M</i><sub>B</sub>',
        legend: ['<i>d</i> = density (g/mL)', '<i>x</i> = mass % of solute'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Interconversion relations',
        main: '<i>m</i> = 1000 <i>M</i>/(1000 <i>d</i> − <i>M M</i><sub>B</sub>)<br><i>m</i> = 1000 <i>x</i><sub>B</sub>/(<i>x</i><sub>A</sub> <i>M</i><sub>A</sub>)<br>strength (g L<sup>−1</sup>) = <i>M</i> × <i>M</i><sub>B</sub><br><i>m</i> = 10 <i>s</i>/<i>M</i><sub>B</sub>',
        legend: [
          '<i>M</i> = molarity',
          '<i>M</i><sub>B</sub> = solute molar mass',
          '<i>d</i> = density in g/mL',
          '<i>M</i><sub>A</sub> = solvent molar mass',
          '<i>x</i><sub>A</sub>, <i>x</i><sub>B</sub> = solvent/solute mole fractions',
          '<i>s</i> = solubility (g per 100 g solvent)',
        ],
        note: 'Each is one rearrangement of a definition.',
      },
      {
        t: 'p',
        html: '(Symbols: <i>w</i><sub>B</sub> = mass of solute, <i>M</i><sub>B</sub> = molar mass of solute, <i>w</i><sub>A</sub> = mass of solvent, <i>n</i><sub>A</sub>, <i>n</i><sub>B</sub> = moles of solvent and solute.)',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'The definitions are simple; the marks are won and lost in interconversion and in which mass goes where. Here is the framework.',
      },
      {
        t: 'p',
        html: '<b>Procedure A — Build any concentration from scratch.</b> Get moles of solute (mass ÷ molar mass, from Topic 05), then divide by the correct denominator: solution-volume for molarity, solvent-mass for molality, total-moles for mole fraction. <b>Why the denominator matters:</b> the entire identity of a concentration term lives in its denominator — change it and you change which quantity you are reporting.',
      },
      {
        t: 'p',
        html: '<b>Procedure B — Mass % → molarity (density needed).</b> Take a convenient 100 g of solution. Then the mass of solute is just “<i>x</i> grams” (the percent), and the volume of that 100 g is 100/<i>d</i> mL. Convert solute mass to moles and divide by that volume in litres. The compact result is <i>M</i> = 10<i>dx</i>/<i>M</i><sub>B</sub>. <b>Why density enters:</b> mass % knows nothing about volume, and molarity is per-volume — only the density bridges mass to volume.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Molality ↔ molarity (density needed).</b><br>• <b>Molality → molarity:</b> assume the molality figure literally (e.g., 2 <i>m</i> means 2 mol solute in 1000 g solvent). Compute the <b>total mass</b> of solution (= solvent mass + solute mass), convert to volume using density, then divide moles by volume in litres.<br>• The reverse runs the same chain backwards. <b>Why you cannot skip density:</b> one term is per-volume and the other per-mass; density is the only quantity that relates a solution’s mass to its volume.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — Dilution and mixing.</b> When you add pure solvent, the moles of solute are unchanged, so <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub>. When you mix solutions of the same solute, total moles add and total volume adds, giving <i>M</i><sub>R</sub> = (∑<i>M</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>)/(∑<i>V</i><sub><i>i</i></sub>). <b>Why it works:</b> both are just “conserve the moles, recount the volume.” A frequent slip is confusing “volume of water added” with “final total volume” — the formula uses the <b>final total volume</b> <i>V</i><sub>2</sub>, so water added = <i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: '<b>Procedure E — Normality.</b> Compute molarity, then multiply by the <i>n</i>-factor: <i>N</i> = (<i>n</i>-factor) × <i>M</i>. For H<sub>2</sub>SO<sub>4</sub> (basicity 2), <i>N</i> = 2<i>M</i>. <b>Why:</b> one mole of H<sub>2</sub>SO<sub>4</sub> furnishes two equivalents of H<sup>+</sup>, so its equivalent count is double its mole count.',
      },
      {
        t: 'p',
        html: '<b>Procedure F — exact molality ↔ molarity, and related shortcuts.</b> When you must convert repeatedly, the explicit relation (which is just Procedure C written out) is<br><i>m</i> = 1000 <i>M</i>/(1000 <i>d</i> − <i>M M</i><sub>B</sub>),<br>with <i>d</i> the density in g/mL and <i>M</i><sub>B</sub> the solute’s molar mass. <b>Why this exact shape:</b> the denominator 1000<i>d</i> − <i>MM</i><sub>B</sub> is the mass of solvent in one litre of solution — the total mass of a litre (1000<i>d</i> g) minus the mass of dissolved solute (<i>MM</i><sub>B</sub> g). So the formula literally reads “moles of solute per kilogram of solvent,” which is the definition of molality. Two companion one-liners from the same family are worth keeping handy: the <b>strength</b> of a solution in grams per litre is simply <i>M</i> × <i>M</i><sub>B</sub>, and molality relates to <b>solubility</b> <i>s</i> (grams of solute per 100 g of solvent) by <i>m</i> = 10 <i>s</i>/<i>M</i><sub>B</sub>. Each is a one-step rearrangement of a definition — recognising that saves rederiving them under exam pressure.',
      },
      {
        t: 'p',
        html: '<b>Procedure G — molarity of an ion.</b> When an ionic solute dissociates, the molarity of each ion is the salt’s molarity times the number of those ions per formula unit. So 0.2 M CaCl<sub>2</sub> is 0.2 M in Ca<sup>2+</sup> but 0.4 M in Cl<sup>−</sup>. When two different salts that share an ion are mixed, add that ion’s contributions and divide by the total volume — chloride coming from both NaCl and CaCl<sub>2</sub>, say, is pooled before dividing by the combined volume. <b>Why:</b> molarity counts moles in the final volume, and a dissociated ion does not “remember” which salt supplied it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the molarity of a solution prepared by dissolving 5.85 g of sodium chloride in water to make 500 mL of solution. (NaCl = 58.5 g mol<sup>−1</sup>.)',
        steps: [
          '<b>Moles of solute:</b> <i>n</i> = 5.85/58.5 = 0.100 mol. <b>Volume of solution:</b> 500 mL = 0.500 L.',
          '<i>M</i> = <i>n</i>/<i>V</i> = 0.100/0.500 =',
        ],
        ans: '0.200 mol L<sup>−1</sup> (0.2 M)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following concentration terms is <b>independent of temperature</b>?<br>(a) Molarity (b) Molality (c) Normality (d) Formality',
        steps: [
          '<b>Fast solution.</b> Don’t recall definitions one by one — apply the rule: volume-based terms drift with temperature; mass/mole-based terms do not. Molarity, normality, and formality are all “per litre of solution” → volume-based → temperature-dependent. Only <b>molality</b> (“per kg of solvent”) is mass-based.',
          '<b>The trap:</b> students see “molality” and “molarity” as near-twins and guess (a), or assume all four behave the same. <b>Speed tip:</b> scan the denominators. See a volume (litre, mL, dm<sup>3</sup>)? Temperature-dependent. See a mass (kg, g) or moles? Temperature-independent. (Mole fraction and mass % also pass this test.)',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 2.0 molal aqueous solution of a solute (molar mass 50 g mol<sup>−1</sup>) has a density of 1.05 g mL<sup>−1</sup>. Calculate its molarity. (Links molality, density, and molarity.)',
        steps: [
          '“2.0 molal” means 2.0 mol of solute per 1000 g of <b>solvent</b> (water). <b>Mass of solute:</b> 2.0 × 50 = 100 g. <b>Mass of solution:</b> 1000 + 100 = 1100 g. <b>Volume of solution:</b> <i>V</i> = 1100/1.05 = 1047.6 mL = 1.0476 L.',
          '<i>M</i> = moles/(volume (L)) = 2.0/1.0476 =',
          'The density is doing the essential work — without it, the mass of solution could never become a volume.',
        ],
        ans: '1.91 mol L<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '100 mL of 0.50 M H<sub>2</sub>SO<sub>4</sub> is mixed with 150 mL of 0.20 M H<sub>2</sub>SO<sub>4</sub>, and the mixture is then diluted with water to a final volume of 500 mL. Calculate (i) the final molarity and (ii) the normality of the resulting solution.',
        steps: [
          '<b>(i) Conserve moles across mixing and dilution.</b><br><i>n</i><sub>1</sub> = 0.100 L × 0.50 = 0.050 mol, <i>n</i><sub>2</sub> = 0.150 L × 0.20 = 0.030 mol.<br><i>n</i><sub>total</sub> = 0.050 + 0.030 = 0.080 mol.',
          'Final volume = 500 mL = 0.500 L, so<br><i>M</i><sub>final</sub> = 0.080/0.500 = 0.16 mol L<sup>−1</sup>.',
          '<b>(ii) Normality.</b> H<sub>2</sub>SO<sub>4</sub> has basicity 2 (two replaceable H<sup>+</sup>), so the <i>n</i>-factor is 2:<br><i>N</i> = (<i>n</i>-factor) × <i>M</i> = 2 × 0.16 =',
          'The rigour: mixing, dilution, and the molarity→normality conversion all chain in one pass, and the dilution step quietly uses the final volume, not the sum of the mixed volumes.',
        ],
        ans: '0.32 N (with <i>M</i><sub>final</sub> = 0.16 M).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the molality of a solution containing 4.0 g of NaOH dissolved in 250 g of water. (NaOH = 40.)',
            a: '0.40 mol kg<sup>−1</sup> (0.1 mol in 0.25 kg).',
          },
          {
            q: '[NEET] A water sample contains 0.001 g of a dissolved pollutant per 1 kg of water. Express this concentration in ppm.',
            a: '1 ppm (0.001/1000 × 10<sup>6</sup>).',
          },
          {
            q: '[JEE Main] A sulphuric acid solution is 49% H<sub>2</sub>SO<sub>4</sub> by mass and has a density of 1.30 g mL<sup>−1</sup>. Calculate its molarity. (H<sub>2</sub>SO<sub>4</sub> = 98.)',
            a: '<i>M</i> = (10 × 1.30 × 49)/98 = 6.5 M.',
          },
          {
            q: '[JEE Main] What volume of water must be added to 100 mL of 2.0 M HCl to dilute it to 0.50 M?',
            a: '<i>V</i><sub>2</sub> = (2.0 × 100)/0.50 = 400 mL, so add 300 mL of water.',
          },
          {
            q: '[JEE Advanced] In an aqueous solution, the mole fraction of the solute is 0.10. Calculate the molality of the solution. (Water = 18.)',
            a: 'moles solute = 0.10, moles water = 0.90 → mass water = 0.90 × 18 = 16.2 g = 0.0162 kg; molality = 0.10/0.0162 = 6.17 mol kg<sup>−1</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A solution contains 0.5 mol of solute dissolved in enough water to make 2 L of solution. Its molarity is:',
        opts: [
          { label: '0.25 M', nudge: null },
          { label: '1 M', nudge: '<b>(b)</b> multiplies instead of divides.' },
          { label: '0.5 M', nudge: '<b>(c)</b> reports moles as molarity, ignoring the volume.' },
          { label: '2 M', nudge: '<b>(d)</b> reports the volume itself.' },
        ],
        correct: 0,
        solution: '<i>M</i> = 0.5/2 = 0.25 M. Always divide moles by litres.',
      },
      {
        t: 'mcq',
        q: 'Which pair of concentration terms is independent of temperature?',
        opts: [
          {
            label: 'Molarity and normality',
            nudge: '<b>(a)</b>, <b>(d)</b> are both volume-based pairs → both temperature-dependent.',
          },
          {
            label: 'Molarity and molality',
            nudge: '<b>(b)</b> mixes one of each; molarity drifts, so the pair fails. The trap is pairing the two “mol-” words by sound rather than by denominator.',
          },
          { label: 'Molality and mole fraction', nudge: null },
          {
            label: 'Normality and formality',
            nudge: '<b>(a)</b>, <b>(d)</b> are both volume-based pairs → both temperature-dependent.',
          },
        ],
        correct: 2,
        solution: 'Both are mass/mole-based, hence temperature-proof.',
      },
      {
        t: 'mcq',
        q: 'A solution is made of 1 mol of solute and 9 mol of solvent. The mole fraction of the solute is:',
        opts: [
          { label: '0.10', nudge: null },
          { label: '0.11', nudge: '<b>(b)</b> uses 1/9 — forgetting to include the solute itself in the total.' },
          { label: '0.90', nudge: '<b>(c)</b> is the solvent’s mole fraction.' },
          { label: '1.0', nudge: '<b>(d)</b> forgets the solvent entirely.' },
        ],
        correct: 0,
        solution: '<i>x</i><sub>solute</sub> = 1/(1 + 9) = 0.10. The denominator is total moles.',
      },
      {
        t: 'mcq',
        q: '200 mL of a 0.10 M solution is diluted with water to a final volume of 500 mL. The new molarity is:',
        opts: [
          { label: '0.04 M', nudge: null },
          { label: '0.25 M', nudge: '<b>(b)</b> inverts the ratio (500/200 the wrong way).' },
          { label: '0.10 M', nudge: '<b>(c)</b> assumes dilution doesn’t change molarity.' },
          {
            label: '0.067 M',
            nudge: '<b>(d)</b> uses 300 mL (water added) instead of the final 500 mL — the classic added-vs-final slip.',
          },
        ],
        correct: 0,
        solution: '<i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> ⇒ 0.10 × 200 = <i>M</i><sub>2</sub> × 500 ⇒ <i>M</i><sub>2</sub> = 0.04 M.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Solvent mass vs solution mass.</b> Molality is per kg of <b>solvent</b>; mass percent and density use the <b>solution</b>. Read which one the problem gives and never substitute one for the other.',
          '<b>Assuming molarity = molality.</b> They coincide only for very dilute aqueous solutions. In general you need the density to convert.',
          '<b>The dilution volume trap.</b> <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> uses the final total volume, so “water to add” = <i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>, not <i>V</i><sub>2</sub>.',
          '<b>Forgetting the <i>n</i>-factor for normality.</b> H<sub>2</sub>SO<sub>4</sub> at 0.16 M is 0.32 N, not 0.16 N.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any density-based interconversion, anchor on a fixed, convenient amount: pick “1000 g of solvent” for molality problems and “100 g of solution” for mass-% problems. Once you fix that anchor, every other quantity follows by one multiplication or division, and you never lose track of which mass is which.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Molarity <i>M</i> = mol solute / L solution', note: 'volume-based, temperature-dependent.' },
          { f: 'Molality <i>m</i> = mol solute / kg solvent', note: 'mass-based, temperature-independent.' },
          {
            f: 'Mole fraction',
            note: '<i>x</i>(B) = <i>n</i>(B) / [<i>n</i>(A) + <i>n</i>(B)], <i>x</i>(A) + <i>x</i>(B) = 1 — unitless.',
          },
          {
            f: 'Mass % = (mass solute / mass solution) × 100; ppm = same ratio × 10<sup>6</sup>.',
            note: '',
          },
          {
            f: 'ppm / strength',
            note: 'ppm = (mass solute / mass solution) × 10<sup>6</sup> (water-quality units); strength (g L<sup>−1</sup>) = <i>M</i> × molar mass.',
          },
          {
            f: 'Mass % → molarity',
            note: '<i>M</i> = 10 <i>d x</i> / molar mass (<i>d</i> = density in g mL<sup>−1</sup>, <i>x</i> = mass %).',
          },
          {
            f: 'Dilution',
            note: '<i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub>; <b>mixing:</b> <i>M</i>(mix) = (<i>M</i><sub>1</sub><i>V</i><sub>1</sub> + <i>M</i><sub>2</sub><i>V</i><sub>2</sub> + …) / (<i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + …); <b>normality:</b> <i>N</i> = (<i>n</i>-factor) × <i>M</i>.',
          },
        ],
        aids: [
          '“<b>Volume drifts, mass sticks</b>” — volume-based terms vary with temperature, mass-based don’t.',
          '“<b>Molality = solvent; molarity = solution</b>” — watch the denominator.',
          '“<b>No density, no interconversion</b>” between <i>M</i> and <i>m</i>.',
          '“<b>Added is final minus initial</b>” — the dilution-volume trap.',
        ],
      },
    ],
  },
];
