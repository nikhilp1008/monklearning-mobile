import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference: the shared opening of "Chapter 5: Chemical Thermodynamics
 * — Additional Topics" (p. 239, set at the head of Additional topic A's
 * Introduction), then A Hess-Law Patterns That Were Not Worked in the Chapter
 * (pp. 239–241), B Computing Entropy Changes (pp. 241–242), C The
 * Gibbs-Energy Playbook (pp. 242–244), D Calorimetry Mastery (pp. 244–245),
 * E Work on the P–V Diagram (pp. 245–247; its "Figure 1", p. 246, is
 * c11-05-E-d1, its caption belongs to the diagram) and F, the book's
 * "Addendum P — What JEE and NEET Actually Ask" (pp. 248–250), kept as the
 * last Additional topic by Nikhil's decision.
 *
 * The book prints the addenda's practice answers together on p. 247,
 * "Answers to Practice (Addenda A–E)", numbered on from 1 to 14 across the
 * addenda (A 1–3, B 4–6, C 7–9, D 10–12, E 13–14); each answer is set here
 * with its own question. Signs follow IUPAC (w is work done on the system),
 * as the book does throughout these pages.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 239–241 ─────────────────────────
  {
    n: 'A',
    title: 'Hess-Law Patterns That Were Not Worked in the Chapter',
    extra: true,
    kalam: 'What earns marks is recognising which template a question belongs to.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter built the full machine: first law and sign conventions, Hess’s law and the enthalpy families, entropy and Gibbs energy, calorimetry and the four gas processes. What remains between a well-read chapter and full exam marks is pattern fluency — the half-dozen problem shapes that JEE and NEET return to every year. Addendum A catalogues the Hess-law patterns beyond the chapter’s worked examples: formation enthalpy from combustion data, atomisation enthalpies, the weak-acid neutralisation gap, and phase corrections. Addendum B makes entropy computable beyond phase transitions — the isothermal gas-expansion formula derived from the chapter’s own Δ<i>S</i> = <i>q</i><sub>rev</sub>/<i>T</i>, and total entropy for irreversible processes. Addendum C is the sign-and-temperature playbook: reading Δ<i>S</i> from stoichiometry, the four cases, crossover temperatures, and the Δ<i>G</i>°–<i>K</i> chain compressed into one routine. Addendum D masters calorimetry arithmetic — the coffee-cup, the bomb with its Δ<i>n</i><sub>g</sub><i>RT</i> correction, and heat-exchange bookkeeping. Addendum E settles the P–V work orderings (reversible vs single-step, compression vs expansion, isothermal vs adiabatic) that recent JEE Main papers have asked directly. Everything is checkable against the Thermodynamics chapter of NCERT Class 11 Chemistry.',
      },
      {
        t: 'p',
        html: 'Hess’s law itself needs no restating. What earns marks is recognising which template a question belongs to. Four recur.',
      },

      { t: 'part', title: 'A.1 Formation enthalpy from combustion data' },
      {
        t: 'p',
        html: 'The pattern: you are given combustion enthalpies of the elements and of the compound, and asked for Δ<sub>f</sub><i>H</i>° of the compound. Build the cycle: elements → (burn) → oxides, and compound → (burn) → the same oxides. Since the end state is common,',
      },
      {
        t: 'formula',
        kicker: 'Formation enthalpy from combustion data',
        main: 'Δ<sub>f</sub><i>H</i>°(compound) = ∑ <i>ν</i> Δ<sub>c</sub><i>H</i>(elements) − Δ<sub>c</sub><i>H</i>(compound)',
        legend: [
          'Δ<sub>f</sub><i>H</i>° = standard enthalpy of formation',
          'Δ<sub>c</sub><i>H</i> = enthalpy of combustion',
          '<i>ν</i> = stoichiometric coefficient of each element',
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: '',
        q: 'Given Δ<sub>c</sub><i>H</i>°(C, graphite) = −393.5, Δ<sub>c</sub><i>H</i>°(H<sub>2</sub>) = −285.8 and Δ<sub>c</sub><i>H</i>°(C<sub>2</sub>H<sub>6</sub>) = −1560 kJ mol<sup>−1</sup>, find Δ<sub>f</sub><i>H</i>° of ethane.',
        steps: ['The formation reaction is 2C + 3H<sub>2</sub> → C<sub>2</sub>H<sub>6</sub>:'],
        ans: 'Δ<sub>f</sub><i>H</i>° = [2(−393.5) + 3(−285.8)] − (−1560) = −787.0 − 857.4 + 1560 = −84.4 kJ mol<sup>−1</sup>. Sanity: ethane’s formation is mildly exothermic, matching the tabulated value. The sign discipline is the whole game — the compound’s combustion is subtracted, because the compound must be un-burnt on the way up.',
      },

      { t: 'part', title: 'A.2 Atomisation enthalpy' },
      {
        t: 'p',
        html: 'NCERT defines Δ<sub>a</sub><i>H</i>° as the enthalpy of breaking one mole of a substance completely into gaseous atoms, and records the methane value: CH<sub>4</sub>(g) → C(g) + 4H(g), Δ<sub>a</sub><i>H</i>° = 1665 kJ mol<sup>−1</sup>. Note what this makes possible: dividing by the number of C–H bonds gives the mean C–H bond enthalpy, 1665/4 ≈ 416 kJ mol<sup>−1</sup> — atomisation enthalpy of a molecule is the sum of its mean bond enthalpies. For diatomics, atomisation enthalpy is the bond-dissociation enthalpy (H<sub>2</sub>: 435.8 kJ mol<sup>−1</sup>). The exam move is to connect these: an “atomisation” question about a polyatomic molecule is a bond-enthalpy sum in disguise, and the elements’ own atomisation data (Δ<sub>sub</sub><i>H</i> for metals, half the X<sub>2</sub> dissociation enthalpy for gaseous halogens) feed the same cycle.',
      },

      { t: 'part', title: 'A.3 The weak-acid neutralisation gap' },
      {
        t: 'p',
        html: 'For strong acid + strong base, neutralisation enthalpy is essentially constant at −57.1 kJ mol<sup>−1</sup> because the only net reaction is H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O. A weak acid neutralises less exothermically — the missing heat is spent ionising the acid. Hess’s law reads the gap directly:',
      },
      {
        t: 'formula',
        kicker: 'The weak-acid neutralisation gap',
        main: 'Δ<sub>ion</sub><i>H</i> = Δ<sub>neut</sub><i>H</i>(weak) − Δ<sub>neut</sub><i>H</i>(strong)',
        legend: [
          'Δ<sub>ion</sub><i>H</i> = enthalpy of ionisation of the weak acid',
          'Δ<sub>neut</sub><i>H</i>(weak) = neutralisation enthalpy of the weak acid',
          'Δ<sub>neut</sub><i>H</i>(strong) = neutralisation enthalpy of strong acid + strong base',
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: '',
        q: 'Acetic acid neutralised by NaOH: Δ<sub>neut</sub><i>H</i> = −55.8 kJ mol<sup>−1</sup>.',
        steps: [
          'Then Δ<sub>ion</sub><i>H</i> = −55.8 − (−57.1) = +1.3 kJ mol<sup>−1</sup> — endothermic, as ionisation must be.',
          'The same logic runs in reverse for weak bases, and the exam variant asks you to spot that the difference, not either value alone, carries the chemistry.',
        ],
        ans: '',
      },

      { t: 'part', title: 'A.4 Phase corrections inside a cycle' },
      {
        t: 'p',
        html: 'A Hess cycle is honest only if every route ends in the same states. Combustion data conventionally produce liquid water; bond-enthalpy estimates produce gaseous water. Converting one to the other costs Δ<sub>vap</sub><i>H</i> = +44.0 kJ mol<sup>−1</sup> per mole of water (at 298 K). Whenever a computed answer is off by a suspicious multiple of 44, a missing H<sub>2</sub>O(l) → H<sub>2</sub>O(g) correction is the first suspect. The same correction family uses Δ<sub>sub</sub><i>H</i> = Δ<sub>fus</sub><i>H</i> + Δ<sub>vap</sub><i>H</i> for solids.',
      },

      { t: 'part', title: 'Error patterns in Hess cycles' },
      {
        t: 'mistakes',
        items: [
          'Subtracting the wrong way in A.1: the compound’s combustion is the term removed; students who add it land on the distractor.',
          'Reporting the weak-acid gap with the wrong sign: ionisation costs energy, so Δ<sub>ion</sub><i>H</i> > 0.',
          'Mixing states silently: liquid and gaseous water differ by 44 kJ mol<sup>−1</sup> per mole — not a rounding error.',
          'Scaling misses: doubling an equation doubles Δ<i>H</i>; dividing the 2HBr(g) formation equation by two is exactly how a per-reaction enthalpy becomes the per-mole Δ<sub>f</sub><i>H</i>°(HBr) = −36.4 kJ mol<sup>−1</sup>. Always re-derive per mole of the target product.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Given Δ<sub>c</sub><i>H</i>°(C) = −393.5, Δ<sub>c</sub><i>H</i>°(H<sub>2</sub>) = −285.8, Δ<sub>c</sub><i>H</i>°(CH<sub>4</sub>) = −890.3 kJ mol<sup>−1</sup>, find Δ<sub>f</sub><i>H</i>°(CH<sub>4</sub>).',
            a: 'Δ<sub>f</sub><i>H</i>° = [(−393.5) + 2(−285.8)] − (−890.3) = −74.8 kJ mol<sup>−1</sup>.',
          },
          {
            q: 'The mean O–H bond enthalpy is 463 kJ mol<sup>−1</sup>. Estimate Δ<sub>a</sub><i>H</i>° of H<sub>2</sub>O(g).',
            a: 'Δ<sub>a</sub><i>H</i>°(H<sub>2</sub>O, g) = 2 × 463 = 926 kJ mol<sup>−1</sup> (atomisation = sum of bond enthalpies).',
          },
          {
            q: 'Neutralisation of HCN by NaOH releases only 12.1 kJ mol<sup>−1</sup>. Find Δ<sub>ion</sub><i>H</i> of HCN and comment on the magnitude.',
            a: 'Δ<sub>ion</sub><i>H</i> = −12.1 − (−57.1) = +45.0 kJ mol<sup>−1</sup> — HCN is a very weak acid; nearly all the neutralisation heat is spent ionising it.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 241–242 ─────────────────────────
  {
    n: 'B',
    title: 'Computing Entropy Changes',
    extra: true,
    kalam: 'The chapter defined entropy and gave ΔS = qrev/T; here we turn that into numbers for the four entropy questions exams actually set.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defined entropy and gave Δ<i>S</i> = <i>q</i><sub>rev</sub>/<i>T</i>; here we turn that into numbers for the four entropy questions exams actually set.',
      },

      { t: 'part', title: 'B.1 Phase transitions' },
      {
        t: 'p',
        html: 'At a transition temperature the exchange is reversible, so Δ<i>S</i><sub>trans</sub> = Δ<i>H</i><sub>trans</sub>/<i>T</i><sub>trans</sub>. Ice at 273 K: Δ<sub>fus</sub><i>S</i> = 6000/273 = 22.0 J K<sup>−1</sup> mol<sup>−1</sup>. Vaporisation gives much larger values (water at 373 K: 40660/373 ≈ 109 J K<sup>−1</sup> mol<sup>−1</sup>) because gas formation is a bigger disorder jump than melting — a comparison examiners probe qualitatively.',
      },

      { t: 'part', title: 'B.2 Isothermal expansion of an ideal gas — the derivation exams assume' },
      {
        t: 'p',
        html: 'For an ideal gas at fixed <i>T</i>, Δ<i>U</i> = 0, so <i>q</i><sub>rev</sub> = −<i>w</i><sub>rev</sub> = <i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>). Divide by <i>T</i>:',
      },
      {
        t: 'formula',
        kicker: 'Isothermal expansion of an ideal gas',
        main: 'Δ<i>S</i><sub>sys</sub> = <i>q</i><sub>rev</sub>/<i>T</i> = <i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = 2.303 <i>nR</i> log(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = <i>nR</i> ln(<i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>)',
        legend: [
          'Δ<i>S</i><sub>sys</sub> = entropy change of the system',
          '<i>q</i><sub>rev</sub> = heat absorbed reversibly',
          '<i>T</i> = temperature',
          '<i>n</i> = amount of gas',
          '<i>R</i> = gas constant',
          '<i>V</i><sub>1</sub>, <i>V</i><sub>2</sub> = initial and final volumes',
          '<i>p</i><sub>1</sub>, <i>p</i><sub>2</sub> = initial and final pressures',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Because <i>S</i> is a state function, this Δ<i>S</i><sub>sys</sub> holds for every isothermal path between the same two states — reversible, single-step irreversible, or free expansion. What changes with the path is the surroundings.',
      },

      { t: 'part', title: 'B.3 The surroundings keep their own ledger' },
      {
        t: 'p',
        html: 'The surroundings are a reservoir at fixed <i>T</i>: their entropy change is set by the heat they actually receive, Δ<i>S</i><sub>surr</sub> = −<i>q</i><sub>actual</sub>/<i>T</i>. Hence:<br>• Reversible: <i>q</i><sub>actual</sub> = <i>q</i><sub>rev</sub>, so Δ<i>S</i><sub>total</sub> = 0.<br>• Free expansion: <i>q</i><sub>actual</sub> = 0, so Δ<i>S</i><sub>total</sub> = <i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) > 0.<br>• Single-step against constant <i>p</i><sub>ext</sub>: <i>q</i><sub>actual</sub> = <i>p</i><sub>ext</sub>Δ<i>V</i>, intermediate.',
      },
      {
        t: 'ex',
        tag: '',
        q: '10 mol of an ideal gas at 300 K is expanded isothermally from 2 atm to 1 atm against a constant external pressure of 1 atm. Find Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub>. (ln 2 = 0.693.)',
        steps: [
          'System: Δ<i>S</i><sub>sys</sub> = <i>nR</i> ln(<i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>) = 10 × 8.314 × 0.693 = 57.6 J K<sup>−1</sup>.',
          'Surroundings: <i>V</i><sub>1</sub> = <i>nRT</i>/<i>p</i><sub>1</sub> = 123.2 L, <i>V</i><sub>2</sub> = 246.3 L, so <i>q</i> = <i>p</i><sub>ext</sub>Δ<i>V</i> = 1 × 123.2 = 123.2 L atm = 1.248 × 10<sup>4</sup> J, and Δ<i>S</i><sub>surr</sub> = −12480/300 = −41.6 J K<sup>−1</sup>.',
        ],
        ans: 'Total: 57.6 − 41.6 = +16.0 J K<sup>−1</sup> > 0 — irreversible, as it must be. The same endpoints reached reversibly would give exactly zero total; that contrast is the second law in arithmetic.',
      },

      { t: 'part', title: 'B.4 Reaction entropy from absolute entropies' },
      {
        t: 'p',
        html: 'The third law makes absolute molar entropies <i>S</i>° tabulable, so',
      },
      {
        t: 'formula',
        kicker: 'Reaction entropy from absolute entropies',
        main: 'Δ<sub>r</sub><i>S</i>° = ∑ <i>νS</i>°(products) − ∑ <i>νS</i>°(reactants)',
        legend: [
          'Δ<sub>r</sub><i>S</i>° = standard reaction entropy',
          '<i>ν</i> = stoichiometric coefficient',
          '<i>S</i>° = absolute standard molar entropy',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'the same direction as the formation-enthalpy formula. Quick sign check before any arithmetic: count gas moles — a reaction that creates gas (Δ<i>n</i><sub>g</sub> > 0) almost always has Δ<i>S</i> > 0. CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g) makes one mole of gas from none: Δ<i>S</i>° ≈ +160 J K<sup>−1</sup> mol<sup>−1</sup>, the value that pairs with Δ<i>H</i>° = +178.3 kJ mol<sup>−1</sup> in the crossover problems of Addendum C.',
      },

      { t: 'part', title: 'Error patterns in entropy arithmetic' },
      {
        t: 'mistakes',
        items: [
          'Using <i>q</i><sub>actual</sub> in Δ<i>S</i><sub>sys</sub>: the system’s entropy change always uses the reversible heat, regardless of the real path.',
          'Forgetting that free expansion still raises the system’s entropy (the gas spreads), even though <i>q</i> = <i>w</i> = Δ<i>U</i> = 0.',
          'Sign flips on Δ<i>S</i><sub>surr</sub> = −<i>q</i><sub>sys</sub>/<i>T</i>: heat leaving the system enters the surroundings.',
          'Treating Δ<i>S</i> of vaporisation and fusion as comparable: vaporisation is several times larger.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Compute Δ<sub>vap</sub><i>S</i> of water at its normal boiling point (Δ<sub>vap</sub><i>H</i> = 40.66 kJ mol<sup>−1</sup>, <i>T</i><sub>b</sub> = 373 K).',
            a: 'Δ<sub>vap</sub><i>S</i> = 40660/373 = 109 J K<sup>−1</sup> mol<sup>−1</sup> (about five times Δ<sub>fus</sub><i>S</i>).',
          },
          {
            q: '1 mol of an ideal gas expands isothermally at 300 K from 2 L to 20 L (a) reversibly, (b) freely. Find Δ<i>S</i><sub>sys</sub>, Δ<i>S</i><sub>surr</sub>, Δ<i>S</i><sub>total</sub> in each case.',
            a: 'Δ<i>S</i><sub>sys</sub> = 8.314 ln 10 = 19.1 J K<sup>−1</sup> in both cases (state function). (a) Reversible: Δ<i>S</i><sub>surr</sub> = −19.1 J K<sup>−1</sup>, total 0. (b) Free: Δ<i>S</i><sub>surr</sub> = 0, total +19.1 J K<sup>−1</sup>.',
          },
          {
            q: 'Predict the sign of Δ<i>S</i> for: (i) N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g); (ii) 2H<sub>2</sub>O<sub>2</sub>(l) → 2H<sub>2</sub>O(l) + O<sub>2</sub>(g).',
            a: '(i) negative (4 gas mol → 2); (ii) positive (gas evolved from liquids).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 242–244 ─────────────────────────
  {
    n: 'C',
    title: 'The Gibbs-Energy Playbook: Signs, Temperatures, and K',
    extra: true,
    kalam: 'When ΔH and ΔS share a sign, temperature decides.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gave the four-case table and the crossover formula. This addendum compresses the three relations into one routine and drills the statement-style questions built on it.',
      },

      { t: 'part', title: 'The three-link chain' },
      {
        t: 'formula',
        kicker: 'The three-link chain',
        main: 'Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i><br>Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i><br>Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>',
        legend: [
          'Δ<i>G</i> = Gibbs energy change',
          'Δ<i>H</i> = enthalpy change',
          'Δ<i>S</i> = entropy change',
          '<i>T</i> = temperature',
          'Δ<i>G</i>° = standard Gibbs energy change',
          '<i>R</i> = gas constant',
          '<i>Q</i> = reaction quotient',
          '<i>K</i> = equilibrium constant',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Chained, they give the most useful one-liner in the chapter: Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>). Sign reading without arithmetic:<br>• <i>Q</i> < <i>K</i> ⇒ Δ<i>G</i> < 0: forward reaction is spontaneous right now.<br>• <i>Q</i> > <i>K</i> ⇒ Δ<i>G</i> > 0: the reverse runs.<br>• <i>Q</i> = <i>K</i>: equilibrium, Δ<i>G</i> = 0.',
      },
      {
        t: 'p',
        html: 'And the sign triad for the standard quantities: Δ<i>G</i>° < 0 ⟺ <i>K</i> > 1 ⟺ products favoured under standard conditions. A “very large positive Δ<i>G</i>°” therefore means a very small <i>K</i> — the answer to a recurring NEET item — never “no reaction ever”, only “reactants dominate at equilibrium”.',
      },

      { t: 'part', title: 'Reading ΔS from the equation' },
      {
        t: 'p',
        html: 'Before any table look-up, predict the sign of Δ<i>S</i> from stoichiometry: gas moles created ⇒ Δ<i>S</i> > 0; gas moles consumed ⇒ Δ<i>S</i> < 0; solids/liquids barely count. NH<sub>3</sub> synthesis: 4 gas mol → 2 gas mol, Δ<i>S</i> < 0 (measured: −198.3 J K<sup>−1</sup> mol<sup>−1</sup>). CaCO<sub>3</sub> decomposition: +160 J K<sup>−1</sup> mol<sup>−1</sup>. This prediction is the first half of every four-case question.',
      },

      { t: 'part', title: 'The crossover routine' },
      {
        t: 'p',
        html: 'When Δ<i>H</i> and Δ<i>S</i> share a sign, temperature decides. The boundary is <i>T</i> = Δ<i>H</i>/Δ<i>S</i> — with both in the same energy unit — and the direction of spontaneity follows from which term wins as <i>T</i> grows:',
      },
      {
        t: 'table',
        title: null,
        head: ['ΔH', 'ΔS', 'Verdict', 'Crossover meaning'],
        rows: [
          ['−', '+', 'spontaneous at all <i>T</i>', 'none'],
          ['+', '−', 'never spontaneous', 'none'],
          ['−', '−', 'low <i>T</i> yes', 'spontaneous below Δ<i>H</i>/Δ<i>S</i>'],
          ['+', '+', 'high <i>T</i> yes', 'spontaneous above Δ<i>H</i>/Δ<i>S</i>'],
        ],
      },
      {
        t: 'ex',
        tag: '',
        q: 'For CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g): Δ<i>H</i>° = +178.3 kJ mol<sup>−1</sup>, Δ<i>S</i>° = +160 J K<sup>−1</sup> mol<sup>−1</sup>. Classify the four statements: (i) spontaneous at 298 K; (ii) non-spontaneous at 298 K; (iii) spontaneous above 1114 K; (iv) spontaneous at all temperatures.',
        steps: [
          'Δ<i>G</i>°(298) = 178.3 − 298(0.160) = +130.6 kJ mol<sup>−1</sup> > 0: (i) false, (ii) true.',
          'Crossover: <i>T</i> = 178300/160 = 1114 K, and since both signs are positive the reaction turns spontaneous above it: (iii) true, (iv) false.',
          'This is exactly how limestone kilns work — heat is not optional.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'chaining to K',
        q: 'At 298 K a reaction has Δ<i>G</i>° = −11.4 kJ mol<sup>−1</sup>. Find <i>K</i>.',
        steps: [],
        ans: 'ln <i>K</i> = 11400/(8.314 × 298) = 4.60 ⇒ <i>K</i> ≈ 10<sup>2</sup>. Sanity per the triad: negative Δ<i>G</i>°, <i>K</i> > 1 — consistent. If your <i>K</i> comes out below 1, a sign slipped.',
      },

      { t: 'part', title: 'Error patterns with Gibbs energy' },
      {
        t: 'mistakes',
        items: [
          'The kJ/J clash: Δ<i>H</i> in kJ, Δ<i>S</i> in J — convert before computing either Δ<i>G</i> or the crossover temperature.',
          'Confusing Δ<i>G</i> (depends on <i>Q</i>, i.e. on the actual mixture) with Δ<i>G</i>° (depends only on <i>K</i>). A reaction with Δ<i>G</i>° > 0 can still run forward if <i>Q</i> is small enough.',
          'Reading the crossover backwards: for (Δ<i>H</i> > 0, Δ<i>S</i> > 0) spontaneity is above <i>T</i><sub>c</sub>; for (−, −) it is below.',
          'Believing Δ<i>G</i> < 0 promises speed: diamond-to-graphite is spontaneous and imperceptibly slow; kinetics is a separate question.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A reaction has Δ<i>H</i> = −40 kJ mol<sup>−1</sup>, Δ<i>S</i> = −100 J K<sup>−1</sup> mol<sup>−1</sup>. Below what temperature is it spontaneous?',
            a: '(Δ<i>H</i> < 0, Δ<i>S</i> < 0): spontaneous below <i>T</i> = 40000/100 = 400 K.',
          },
          {
            q: 'For a reaction, <i>K</i> = 10<sup>−4</sup> at 298 K. Compute Δ<i>G</i>° and state whether reactants or products dominate.',
            a: 'Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −8.314 × 298 × (−9.21) = +22.8 kJ mol<sup>−1</sup>; <i>K</i> ≪ 1, reactants dominate.',
          },
          {
            q: 'A reaction mixture has <i>Q</i> = 50 while <i>K</i> = 10 at the same temperature. Which way does the reaction proceed, and what is the sign of Δ<i>G</i>?',
            a: '<i>Q</i> > <i>K</i> ⇒ backward; Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>) > 0 for the forward direction.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 244–245 ─────────────────────────
  {
    n: 'D',
    title: 'Calorimetry Mastery',
    extra: true,
    kalam: 'Two instruments, two quantities: the bomb (rigid, constant V) reports ΔU; the coffee-cup (open, constant p) reports ΔH.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Two instruments, two quantities: the bomb (rigid, constant <i>V</i>) reports Δ<i>U</i>; the coffee-cup (open, constant <i>p</i>) reports Δ<i>H</i>. The addendum value is in the arithmetic patterns.',
      },

      { t: 'part', title: 'D.1 The coffee-cup: count the solution’s mass' },
      {
        t: 'p',
        html: 'In solution calorimetry the heat released by the reaction warms the whole solution, so <i>q</i><sub>soln</sub> = <i>m</i><sub>soln</sub> <i>c</i> Δ<i>T</i> with <i>m</i><sub>soln</sub> the combined mass and <i>c</i> ≈ 4.18 J g<sup>−1</sup> K<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: '',
        q: '100 mL of 0.50 M HCl and 100 mL of 0.50 M NaOH are mixed in a coffee-cup calorimeter; the temperature rises by 3.41 K. Find Δ<sub>neut</sub><i>H</i> (solution density ≈ 1 g mL<sup>−1</sup>).',
        steps: [
          'Moles of water formed: 0.100 × 0.50 = 0.050 mol.',
          'Heat absorbed by the solution: <i>q</i> = 200 × 4.18 × 3.41 = 2851 J.',
        ],
        ans: 'Per mole: Δ<sub>neut</sub><i>H</i> = −2851/0.050 = −57.0 kJ mol<sup>−1</sup> — the textbook −57.1 kJ mol<sup>−1</sup> within experimental error. The two slips this example is built to punish: using the mass of one solution only (100 g), and forgetting the minus sign (the reaction releases what the solution absorbs).',
      },

      { t: 'part', title: 'D.2 The bomb: from ΔU to ΔH' },
      {
        t: 'p',
        html: 'The bomb gives Δ<i>U</i> = −<i>C</i><sub>cal</sub>Δ<i>T</i>; converting to the constant-pressure enthalpy costs the Δ<i>n</i><sub>g</sub><i>RT</i> term. For C<sub>2</sub>H<sub>6</sub>(g) + (7/2)O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l) at 298 K: Δ<i>n</i><sub>g</sub> = 2 − 4.5 = −2.5, so<br>Δ<i>H</i> = Δ<i>U</i> − 2.5 × 8.314 × 298 = Δ<i>U</i> − 6.2 kJ mol<sup>−1</sup><br>A bomb result for ethane is thus 6.2 kJ mol<sup>−1</sup> less exothermic than the quoted Δ<sub>c</sub><i>H</i> — and the sign of the correction follows from gas moles lost. Condensed phases never appear in Δ<i>n</i><sub>g</sub>.',
      },

      { t: 'part', title: 'D.3 Heat exchange between two bodies' },
      {
        t: 'p',
        html: 'When a hot body meets a cold one in an insulated container, energy conservation does the whole job: <i>m</i><sub>1</sub><i>c</i><sub>1</sub>(<i>T</i><sub>1</sub> − <i>T</i><sub>f</sub>) = <i>m</i><sub>2</sub><i>c</i><sub>2</sub>(<i>T</i><sub>f</sub> − <i>T</i><sub>2</sub>).',
      },
      {
        t: 'ex',
        tag: '',
        q: 'How much heat is required to raise 60.0 g of aluminium from 35 °C to 55 °C? (Molar heat capacity of Al = 24 J mol<sup>−1</sup> K<sup>−1</sup> — an NCERT exercise.)',
        steps: ['<i>n</i> = 60.0/27.0 = 2.222 mol;'],
        ans: '<i>q</i> = <i>nC</i><sub>m</sub>Δ<i>T</i> = 2.222 × 24 × 20 = 1067 J ≈ 1.07 kJ. The molar heat capacity route avoids needing the specific heat at all — read the units of the data before choosing <i>mc</i>Δ<i>T</i> or <i>nC</i><sub>m</sub>Δ<i>T</i>.',
      },

      { t: 'part', title: 'Error patterns in calorimetry' },
      {
        t: 'mistakes',
        items: [
          'Bomb/coffee-cup swap: constant volume gives Δ<i>U</i>, constant pressure gives Δ<i>H</i>; the Δ<i>n</i><sub>g</sub><i>RT</i> bridge runs between them.',
          'Water-equivalent neglect: a real calorimeter absorbs heat too; when <i>C</i><sub>cal</sub> is given per kelvin for the whole assembly, use it directly.',
          'Sign of Δ<i>T</i>: a falling calorimeter temperature means an endothermic process inside (the cold-pack signature).',
          'Counting solids/liquids in Δ<i>n</i><sub>g</sub> — only gases shift the PV term.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '50 mL of 1.0 M HCl neutralises 50 mL of 1.0 M NaOH in a coffee-cup, warming the mixture by 6.8 K. Estimate Δ<sub>neut</sub><i>H</i>.',
            a: '<i>n</i> = 0.050 mol; <i>q</i> = 100 × 4.18 × 6.8 = 2842 J; Δ<sub>neut</sub><i>H</i> = −2842/0.050 ≈ −56.8 kJ mol<sup>−1</sup>.',
          },
          {
            q: 'Burning 0.80 g of a fuel in a bomb (<i>C</i><sub>cal</sub> = 8.2 kJ K<sup>−1</sup>) raises the temperature 1.95 K. Find Δ<i>U</i> per gram.',
            a: 'Δ<i>U</i> = −8.2 × 1.95 = −16 kJ per 0.80 g = −20 kJ g<sup>−1</sup> (2 s.f.).',
          },
          {
            q: 'For the bomb combustion of liquid benzene, C<sub>6</sub>H<sub>6</sub>(l) + (15/2)O<sub>2</sub>(g) → 6CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l), state the sign and size of the Δ<i>H</i> − Δ<i>U</i> correction at 298 K.',
            a: 'Δ<i>n</i><sub>g</sub> = 6 − 7.5 = −1.5; Δ<i>H</i> − Δ<i>U</i> = −1.5 × 8.314 × 298 = −3.7 kJ mol<sup>−1</sup>: Δ<i>H</i> is more exothermic by 3.7 kJ mol<sup>−1</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 245–247 ─────────────────────────
  {
    n: 'E',
    title: 'Work on the P–V Diagram: The Ordering Questions',
    extra: true,
    kalam: 'Recent JEE Main papers ask for the ordering of work magnitudes rather than a number.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Recent JEE Main papers ask for the ordering of work magnitudes rather than a number. Everything follows from one picture: work (on the system) is the negative area under the process path on a P–V diagram.',
      },

      { t: 'part', title: 'The four orderings worth memorising' },
      {
        t: 'p',
        html: '1. <b>Expansion, reversible vs single-step.</b> The reversible path presses against the largest possible external pressure at every volume, so its area is the greatest: |<i>w</i><sub>rev</sub>| > |<i>w</i><sub>irr</sub>| (expansion).',
      },
      {
        t: 'p',
        html: '2. <b>Compression, reversible vs single-step.</b> Compressing in one step forces you to push against a large external pressure over the whole stroke; the reversible path sneaks up gradually: |<i>w</i><sub>irr</sub>| > |<i>w</i><sub>rev</sub>| (compression). Combine the two: for the same endpoint volumes, single-step compression > reversible compression = reversible expansion > single-step expansion (in magnitude of work done on/by the system between the same states) — an ordering of exactly the kind JEE Main has asked.',
      },
      {
        t: 'p',
        html: '3. <b>Free expansion</b> is the limiting case: <i>p</i><sub>ext</sub> = 0 ⇒ <i>w</i> = 0, and for an ideal gas <i>q</i> = 0, Δ<i>U</i> = 0, Δ<i>T</i> = 0 — yet Δ<i>S</i> > 0 (Addendum B).',
      },
      {
        t: 'p',
        html: '4. <b>Isothermal vs adiabatic from the same initial state.</b> The adiabat <i>PV</i><sup><i>γ</i></sup> = const is steeper than the isotherm <i>PV</i> = const (since <i>γ</i> > 1), so on expansion the adiabat falls below the isotherm: less work is extracted adiabatically, and the gas cools. On compression the adiabat lies above: more work must be supplied, and the gas heats.',
      },
      { t: 'fig', id: 'c11-05-E-d1' },
      {
        t: 'ex',
        tag: '',
        q: 'One mole of an ideal gas at 300 K doubles its volume (a) reversibly and isothermally, (b) isothermally, in one step against the final pressure, (c) freely. Order and compute the works.',
        steps: [
          '(a) <i>w</i> = −<i>nRT</i> ln 2 = −8.314 × 300 × 0.693 = −1729 J.',
          '(b) <i>p</i><sub>ext</sub> = <i>p</i><sub>2</sub> = <i>nRT</i>/<i>V</i><sub>2</sub>: with <i>V</i><sub>2</sub> = 2<i>V</i><sub>1</sub> and <i>p</i><sub>1</sub><i>V</i><sub>1</sub> = <i>nRT</i>, <i>p</i><sub>2</sub> = <i>p</i><sub>1</sub>/2, so <i>w</i> = −<i>p</i><sub>2</sub>Δ<i>V</i> = −½<i>nRT</i> = −1247 J.',
          '(c) <i>w</i> = 0.',
        ],
        ans: 'Magnitudes: 1729 > 1247 > 0 — reversible expansion delivers the maximum work, free expansion none, exactly as the ordering rules say.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'An ideal gas is compressed from <i>V</i> to <i>V</i>/2 (a) reversibly, (b) in one step against a constant external pressure equal to the final pressure. Which requires more work on the gas, and by what factor (take the isothermal case)?',
            a: 'The single-step compression requires more work. <i>w</i><sub>irr</sub> = −<i>p</i><sub>2</sub>(<i>V</i>/2 − <i>V</i>) = +<i>p</i><sub>2</sub><i>V</i>/2; with <i>p</i><sub>2</sub> = 2<i>nRT</i>/<i>V</i> this is +<i>nRT</i>. The reversible route gives <i>w</i><sub>rev</sub> = −<i>nRT</i> ln ½ = +<i>nRT</i> ln 2 = 0.693 <i>nRT</i>. The irreversible compression costs more by a factor 1/0.693 ≈ 1.44.',
          },
          {
            q: 'Starting from the same state, does an isothermal or an adiabatic expansion to the same final volume extract more work? Why does the adiabatic case cool the gas?',
            a: 'Isothermal: its path lies above the adiabat for the whole expansion, so the area (work) is larger. The adiabatic case cools because with <i>q</i> = 0 the work is paid out of internal energy alone.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic F (the book's Addendum P) · pp. 248–250 ───────────────
  {
    n: 'F',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Questions on this chapter in recent JEE Main and NEET papers fall into seven recurring themes.',
    blocks: [
      { t: 'part', title: 'Where the marks come from' },
      {
        t: 'p',
        html: 'Questions on this chapter in recent JEE Main and NEET papers fall into seven recurring themes:',
      },
      {
        t: 'defgrid',
        title: 'Theme — typical question types',
        rows: [
          {
            k: 'First law, sign conventions, state vs path functions',
            v: 'Δ<i>U</i> = <i>q</i> + <i>w</i> numerics; identifying a non-state function; free expansion; closed vs isolated system',
          },
          {
            k: 'Isothermal/adiabatic work and process comparison',
            v: 'heat in a constant-<i>p</i><sub>ext</sub> isothermal expansion; work orderings; adiabatic + isobaric chains; <i>γ</i> comparisons',
          },
          {
            k: 'Hess’s law and enthalpy families',
            v: 'bond-enthalpy Δ<sub>r</sub><i>H</i>; combustion → formation; atomisation; constancy of neutralisation enthalpy; Δ<sub>f</sub><i>H</i>° = 0 for elements',
          },
          {
            k: 'Entropy and spontaneity',
            v: 'Δ<i>S</i> of expansion and total entropy; reversible adiabatic Δ<i>S</i> = 0; the Δ<i>S</i><sub>total</sub> criterion; CaCO<sub>3</sub> decomposition statements',
          },
          {
            k: 'Gibbs energy, four cases, Δ<i>G</i>°–<i>K</i>',
            v: 'the spontaneity criterion; <i>K</i> > 1 ⇒ Δ<i>G</i>° < 0; the low-<i>T</i> case; crossover statements',
          },
          { k: 'Calorimetry', v: 'bomb vs coffee-cup identification and numerics' },
          {
            k: 'Equilibrium-linked and matching items',
            v: '<i>K</i><sub>c</sub> evaluation; matching columns; Δ<i>G</i>° from <i>K</i>',
          },
        ],
      },
      {
        t: 'p',
        html: 'Two shifts in emphasis are visible. Numerical-answer questions now dominate JEE Main, and they favour chained computations (work → heat → entropy; combustion → formation; Δ<i>G</i>° → <i>K</i>) over single-formula plugs. And exams include equilibrium-flavoured items (<i>K</i><sub>c</sub> evaluation) — a reminder that this chapter and Equilibrium are examined as one unit through Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — The sign-convention first-law plug.</b> “A gas does 50 J of work while absorbing 30 J of heat; find Δ<i>U</i>.” Answer: 30 − 50 = −20 J. The distractors are the other three sign combinations; fix “on is plus, by is minus” and the item is a 15-second scoring opportunity.',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — Combustion-to-formation Hess cycle.</b> Questions of this type all share one template: given Δ<sub>c</sub><i>H</i> of the elements and the compound, extract Δ<sub>f</sub><i>H</i>. The method of Addendum A.1 handles them all; the trap answer corresponds to adding instead of subtracting the compound’s combustion.',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — Constant-<i>p</i><sub>ext</sub> isothermal heat.</b> Three moles expand from 30 to 45 dm<sup>3</sup> against 80 kPa. Because Δ<i>U</i> = 0 (isothermal, ideal gas), <i>q</i> = <i>p</i><sub>ext</sub>Δ<i>V</i> = 80 × 10<sup>3</sup> × 0.015 = 1200 J. No logarithms needed — the irreversibility is a gift, not a complication.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — Total entropy of an irreversible expansion.</b> The case of 10 mol going from 2 atm to 1 atm against 1 atm at 300 K (answer 16 J K<sup>−1</sup>) follows the worked example of Additional topic B exactly in method: Δ<i>S</i><sub>sys</sub> from the reversible formula (state function), Δ<i>S</i><sub>surr</sub> from the actual heat. Students who use <i>q</i><sub>rev</sub> for the surroundings get 0 and mark “None”.',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — The four-case statement set.</b> “For a reaction with Δ<i>H</i> < 0, Δ<i>S</i> < 0…” appears in many guises. The crossover routine of Addendum C (signs first, <i>T</i> = Δ<i>H</i>/Δ<i>S</i> with matched units) answers all of them.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — Work-ordering without numbers.</b> The ordering (single-step compression > reversible compression = reversible expansion > single-step expansion) is pure P–V area reasoning — Addendum E, orderings 1–2. No calculator survives this question; only the picture does.',
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'defgrid',
        title: 'Trap — correct resolution',
        rows: [
          {
            k: '“Isothermal ⇒ <i>q</i> = 0”',
            v: 'Isothermal kills Δ<i>T</i> (so Δ<i>U</i> = 0); adiabatic kills <i>q</i>',
          },
          {
            k: 'Reversible adiabatic means Δ<i>S</i><sub>sys</sub> = 0',
            v: 'Yes — <i>q</i><sub>rev</sub> = 0 — but Δ<i>U</i> ≠ 0; temperature still changes',
          },
          {
            k: 'Δ<i>H</i> = Δ<i>U</i> assumed always',
            v: 'Only when Δ<i>n</i><sub>g</sub> = 0; solids and liquids never enter Δ<i>n</i><sub>g</sub>',
          },
          { k: '<i>R</i> = 0.0821 in joule answers', v: 'Joules want 8.314; litre-atm wants 0.0821' },
          { k: 'Spontaneous = fast', v: 'Δ<i>G</i> answers whether; never how fast' },
          {
            k: '<i>q</i><sub>actual</sub> in Δ<i>S</i><sub>sys</sub>',
            v: 'System entropy always uses <i>q</i><sub>rev</sub>; surroundings use the actual heat',
          },
          {
            k: 'Weak-acid neutralisation gap sign',
            v: 'Ionisation is endothermic: weak acid neutralises less exothermically',
          },
          { k: 'Coffee-cup mass', v: 'Heat warms the combined solution, not one reactant' },
        ],
      },

      { t: 'part', title: 'A graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: '[recall] Which is not a state function: (a) <i>U</i> (b) <i>H</i> (c) <i>q</i> (d) <i>T</i>?',
            a: '(c). Heat is defined for a process, not a state; over any cycle Δ<i>U</i> = 0 but <i>q</i> = −<i>w</i> ≠ 0 in general.',
          },
          {
            q: '[recall] For C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), Δ<i>H</i> − Δ<i>U</i> at 298 K is (a) −<i>RT</i> (b) 0 (c) +<i>RT</i> (d) +2<i>RT</i>.',
            a: '(b). Only gas moles count: 1 − 1 = 0; the solid carbon is invisible to Δ<i>n</i><sub>g</sub>.',
          },
          {
            q: '[application] 2 mol of an ideal gas at 300 K expand isothermally from 10 L to 25 L against a constant 60 kPa (the piston is stopped at 25 L). Find <i>q</i>.',
            a: 'Δ<i>U</i> = 0, so <i>q</i> = −<i>w</i> = <i>p</i><sub>ext</sub>Δ<i>V</i> = 60 × 10<sup>3</sup> × 0.015 = 900 J.',
          },
          {
            q: '[application] Given Δ<sub>c</sub><i>H</i>°(C) = −393.5, Δ<sub>c</sub><i>H</i>°(H<sub>2</sub>) = −285.8, Δ<sub>c</sub><i>H</i>°(C<sub>3</sub>H<sub>8</sub>) = −2220 kJ mol<sup>−1</sup>, find Δ<sub>f</sub><i>H</i>° of propane.',
            a: '[3(−393.5) + 4(−285.8)] − (−2220) = −1180.5 − 1143.2 + 2220 = −103.7 kJ mol<sup>−1</sup>.',
          },
          {
            q: '[application] For the neutralisation of a weak base by a strong acid, the measured enthalpy is −52.7 kJ mol<sup>−1</sup>. Find the enthalpy of ionisation of the base.',
            a: '−52.7 − (−57.1) = +4.4 kJ mol<sup>−1</sup>.',
          },
          {
            q: '[analysis] 1 mol of an ideal gas at 298 K is compressed isothermally and reversibly from 20 L to 5 L. Find <i>w</i>, <i>q</i>, Δ<i>U</i>, Δ<i>S</i><sub>sys</sub>.',
            a: '<i>w</i> = −<i>nRT</i> ln(5/20) = +8.314 × 298 × 1.386 = +3434 J (work done on the gas); Δ<i>U</i> = 0, so <i>q</i> = −3434 J; Δ<i>S</i><sub>sys</sub> = <i>q</i><sub>rev</sub>/<i>T</i> = −11.5 J K<sup>−1</sup> (compression orders the gas; the surroundings gain the same entropy).',
          },
          {
            q: '[analysis] For vaporisation of water at 373 K (Δ<sub>vap</sub><i>H</i> = 40.66 kJ mol<sup>−1</sup>), show the process is exactly at equilibrium between phases and compute Δ<i>G</i>.',
            a: 'At the boiling point liquid and vapour coexist, so Δ<i>G</i> = 0; check: Δ<i>G</i> = Δ<i>H</i> − <i>T</i>Δ<i>S</i> = 40660 − 373 × (40660/373) = 0. The boiling point is the crossover temperature of vaporisation.',
          },
          {
            q: '[analysis] A reaction has Δ<i>G</i>° = +34.2 kJ mol<sup>−1</sup> at 298 K. Estimate <i>K</i> and state what “non-spontaneous under standard conditions” does and does not mean.',
            a: 'ln <i>K</i> = −34200/(8.314 × 298) = −13.8, so <i>K</i> ≈ 10<sup>−6</sup>. It means the equilibrium mixture is essentially all reactants — not that the reaction cannot be driven: with <i>Q</i> kept tiny (products removed), Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i> can still be negative.',
          },
          {
            q: '[synthesis] An ideal gas undergoes (i) reversible isothermal expansion and (ii) free expansion between the same two volumes. Compare Δ<i>S</i><sub>sys</sub>, Δ<i>S</i><sub>surr</sub>, Δ<i>S</i><sub>total</sub>.',
            a: 'Δ<i>S</i><sub>sys</sub> = <i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) in both (state function). Reversible: Δ<i>S</i><sub>surr</sub> = −<i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>), total = 0. Free: Δ<i>S</i><sub>surr</sub> = 0, total = +<i>nR</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) > 0. The system’s entropy cannot read the path; the universe’s can.',
          },
          {
            q: '[synthesis] For CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g) (Δ<i>H</i>° = +178.3 kJ mol<sup>−1</sup>, Δ<i>S</i>° = +160 J K<sup>−1</sup> mol<sup>−1</sup>): compute Δ<i>G</i>° at 298 K and the decomposition temperature, and explain why raising the temperature also raises <i>K</i>.',
            a: 'Δ<i>G</i>° = 178.3 − 298(0.160) = +130.6 kJ mol<sup>−1</sup> (non-spontaneous at 298 K); <i>T</i><sub>c</sub> = 178300/160 = 1114 K. Because the reaction is endothermic, raising <i>T</i> favours the products (van’t Hoff): <i>K</i> grows with <i>T</i>, and above 1114 K Δ<i>G</i>° turns negative, <i>K</i> > 1.',
          },
        ],
      },
    ],
  },
];
