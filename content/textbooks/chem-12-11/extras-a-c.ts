import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional Topics A to C, word for word from the Class 12 Chemistry
 * Master Reference. The supplement restarts on p. 551 with the chapter heading
 * "Chapter 11: The p-Block Elements (Groups 15 to 18) — Additional Topics", which is
 * not copied; its three opening paragraphs are set at the head of Additional topic
 * A's Introduction. Then come:
 * - A Group 15: Hydride Data, Nitrogen versus Phosphorus, and the Oxides of Nitrogen
 *   (pp. 551–555). Its boiling-point graphs ("Figure 1", p. 552) are c12-11-A-d1,
 *   after the sentence that names the figure; the oxidation-state ladder of nitrogen
 *   ("Figure 2", p. 554, never named in the text) is c12-11-A-d2, where the book
 *   prints it, at the end of the oxides part.
 * - B Ammonia and Nitric Acid in Depth (pp. 556–559; its answers end on p. 559).
 * - C Phosphorus: Allotropes, Phosphine, the Chlorides and the Oxoacids (pp. 559–563;
 *   its answers end on p. 563, where Addendum D begins). The phosphorus chlorides
 *   ("Figure 3", p. 560) are c12-11-C-d1, after the chlorides table; the three
 *   monophosphorus oxoacids ("Figure 4", p. 561) are c12-11-C-d2, after the
 *   paragraph that opens the oxoacids. Neither is named in the text.
 *
 * Parts follow the book's headings. A's "The oxides and oxo-ions of nitrogen" is a
 * heading of the same rank as "Method", so it is its own part. In B and C the
 * "Method" heading carries no text of its own; the smaller headings under it
 * ("Ammonia: the reactions that carry marks", "The allotropes side by side" …) are the
 * parts. Each addendum prints its answers in one block after its practice questions;
 * each is set here with its own question. The book's italic run-in labels
 * ("Stability:", "Boiling point:", "Bond angle:") are bold; its italics for emphasis
 * ("mixed", "very") are dropped. Bonds take an en dash (N–O, P–OH), hybrid and orbital
 * labels are upright (sp<sup>3</sup>d, π*), and an empty table cell ("-") is "—".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 551–555 ─────────────────────────
  {
    n: 'A',
    title: 'Group 15: Hydride Data, Nitrogen versus Phosphorus, and the Oxides of Nitrogen',
    extra: true,
    kalam: 'Nitrogen spans every oxidation state from +1 to +5 in its oxides.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lays out the trends of Groups 15 to 18 and the headline compounds of each group. What it cannot do in the space available is give you the full data, every structure and a worked method for each type of question, and these are exactly what the entrance papers exercise. This part of the book fills that gap, group by group.',
      },
      {
        t: 'p',
        html: 'Addenda A to F take Groups 15, 16, 17 and 18 in turn, each with its worked examples and practice. Addendum G is a multiple-choice drill with an analysis of every wrong option, Addendum H gathers the pitfalls and a cheat sheet, and Additional topic I describes what JEE and NEET actually ask.',
      },
      {
        t: 'p',
        html: 'Every shape in this part is derived by the same recipe, so fix it now: count the valence electrons on the central atom, add one for each singly bonded monovalent atom, adjust for charge, halve the total to get electron pairs, subtract the bonding pairs to get lone pairs, and read the geometry from the pair count. A double bond to oxygen counts as one bonding domain.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The hydride table.</b> The chapter states most of these trends in words, quoting only the N–H and Sb–H bond enthalpies and the bond angles; the full set below is the one to quote. All values are for the gaseous hydrides EH<sub>3</sub>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Property', 'NH<sub>3</sub>', 'PH<sub>3</sub>', 'AsH<sub>3</sub>', 'SbH<sub>3</sub>', 'BiH<sub>3</sub>'],
        rows: [
          ['Boiling point / K', '238.5', '185.5', '210.6', '254.6', '290'],
          ['∠HEH / degrees', '107.8', '93.6', '91.8', '91.3', '—'],
          ['Δ<sub>f</sub><i>H</i>° / kJ mol<sup>−1</sup>', '−46.1', '+13.4', '+66.4', '+145.1', '+278'],
          ['Δ<sub>diss</sub><i>H</i>(E–H) / kJ mol<sup>−1</sup>', '389', '322', '297', '255', '—'],
        ],
      },
      {
        t: 'p',
        html: 'Read the table in three passes. <b>Stability:</b> Δ<sub>f</sub><i>H</i>° climbs from negative to strongly positive and the E–H bond enthalpy falls, so the hydrides get less stable and more reducing (BiH<sub>3</sub> the strongest reductant, NH<sub>3</sub> a mild one). <b>Boiling point:</b> NH<sub>3</sub> boils 53 K above PH<sub>3</sub> because it is hydrogen-bonded and PH<sub>3</sub> is not. <b>Bond angle:</b> it collapses from 107.8° to about 90°. In NH<sub>3</sub> nitrogen is sp<sup>3</sup> with a lone pair compressing the angle from 109.5°; from P down the bonding uses nearly pure p orbitals (at 90°). When PH<sub>3</sub> accepts a proton the lone pair becomes a bonding pair, so ∠HPH in PH<sub>4</sub><sup>+</sup> rises to the tetrahedral 109.5°, against 93.6° in PH<sub>3</sub>.',
      },
      {
        t: 'p',
        html: 'The same hydrogen-bonding anomaly recurs one group to the right and again at Group 17. The figure puts all three side by side.',
      },
      { t: 'fig', id: 'c12-11-A-d1' },
      {
        t: 'p',
        html: '<b>Nitrogen versus the rest of the group.</b> Every comparison in the table below traces back to three facts: nitrogen is small, nitrogen is highly electronegative, and nitrogen has no d orbitals in its valence shell.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Nitrogen', 'Phosphorus (and heavier)', 'Reason'],
        rows: [
          [
            'Elemental form',
            'N<sub>2</sub> gas, N≡N',
            'P<sub>4</sub> solid (tetrahedron, six P–P single bonds)',
            'pπ–pπ overlap is strong for small N, weak for large P, so P prefers single σ bonds',
          ],
          ['Maximum covalency', '4', '5 or 6', 'no d orbitals in <i>n</i> = 2'],
          ['Pentahalide', 'none (only NF<sub>3</sub> is a stable trihalide)', 'PCl<sub>5</sub>, PF<sub>5</sub>, SbCl<sub>5</sub>', 'same'],
          [
            'R<sub>3</sub>E=O',
            'no R<sub>3</sub>N=O with a true N=O double bond (amine oxides are R<sub>3</sub>N<sup>+</sup>–O<sup>−</sup>)',
            'R<sub>3</sub>P=O exists',
            'needs dπ–pπ bonding',
          ],
          ['Catenation', 'very weak (single N–N bond weaker than P–P)', 'stronger than N, then falls', 'lone-pair/lone-pair repulsion across the short N–N bond'],
        ],
      },

      { t: 'part', title: 'The oxides and oxo-ions of nitrogen' },
      {
        t: 'p',
        html: 'Nitrogen spans every oxidation state from +1 to +5 in its oxides. The table gives the structure of each (from the Lewis structures and measured parameters), the hybridisation of nitrogen, and the two properties examiners attach to them: magnetism and acid-base character.',
      },
      {
        t: 'table',
        title: null,
        head: ['Oxide', 'Ox. state of N', 'Shape and key data', 'Hybridisation of N', 'Magnetism', 'Nature'],
        rows: [
          [
            'N<sub>2</sub>O',
            '+1',
            'linear N–N–O; N–N 113 pm, N–O 119 pm; resonance N=N=O ↔ N≡N–O',
            'sp (central N)',
            'diamagnetic',
            'neutral',
          ],
          ['NO', '+2', 'N–O 115 pm; 11 valence electrons, bond order 2.5', '—', 'paramagnetic', 'neutral'],
          ['N<sub>2</sub>O<sub>3</sub>', '+3', 'planar, N–N 186 pm (blue solid)', 'sp<sup>2</sup>', 'diamagnetic', 'acidic (HNO<sub>2</sub> anhydride)'],
          ['NO<sub>2</sub>', '+4', 'angular, N–O 120 pm, ∠ONO 134°', 'sp<sup>2</sup>', 'paramagnetic', 'acidic'],
          ['N<sub>2</sub>O<sub>4</sub>', '+4', 'planar, N–N 175 pm, ∠ONO 135°', 'sp<sup>2</sup>', 'diamagnetic', 'acidic'],
          [
            'N<sub>2</sub>O<sub>5</sub>',
            '+5',
            'planar O<sub>2</sub>N–O–NO<sub>2</sub> as NCERT draws it (the gas molecule is slightly twisted); bridging N–O 151 pm, terminal N–O 119 pm, ∠NON 112°',
            'sp<sup>2</sup>',
            'diamagnetic',
            'acidic (HNO<sub>3</sub> anhydride)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Four oxo-species that are best remembered together.</b> Apart from NO<sub>2</sub>, each is isoelectronic with a familiar species, so its shape can be read off from the partner.',
      },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Domains on N', 'Shape', 'Hybridisation of N', 'Valence electrons', 'Isoelectronic with'],
        rows: [
          ['NO<sub>2</sub><sup>+</sup> (nitronium)', '2 bonding, 0 lone', 'linear, 180°', 'sp', '16', 'CO<sub>2</sub>, N<sub>2</sub>O'],
          ['NO<sub>2</sub>', '2 bonding, 1 odd electron', 'bent, 134°', 'sp<sup>2</sup>', '17', '—'],
          ['NO<sub>2</sub><sup>−</sup> (nitrite)', '2 bonding, 1 lone pair', 'bent, under 120°', 'sp<sup>2</sup>', '18', 'O<sub>3</sub>, SO<sub>2</sub>'],
          ['NO<sub>3</sub><sup>−</sup> (nitrate)', '3 bonding, 0 lone', 'planar, 120°', 'sp<sup>2</sup>', '24', 'CO<sub>3</sub><sup>2−</sup>'],
        ],
      },
      {
        t: 'p',
        html: 'The bond-angle order follows from the number of lone-pair domains: NO<sub>2</sub><sup>+</sup> (180°) > NO<sub>2</sub> (134°) > NO<sub>2</sub><sup>−</sup> (under 120°). In NO<sub>2</sub> the single odd electron repels less than a full lone pair, so its angle sits between the other two. In the solid state, N<sub>2</sub>O<sub>5</sub> is ionic, [NO<sub>2</sub>]<sup>+</sup>[NO<sub>3</sub>]<sup>−</sup>, whereas in the gas phase it is the molecular O<sub>2</sub>N–O–NO<sub>2</sub> of the table.',
      },
      {
        t: 'p',
        html: 'Two points drive most questions on the first of these two tables.',
      },
      {
        t: 'p',
        html: '• <b>NO and NO<sub>2</sub> are the only odd-electron members.</b> NO has 5 + 6 = 11 valence electrons; the eleventh sits in an antibonding π* orbital, lowering the bond order from 3 (in N<sub>2</sub> and NO<sup>+</sup>) to 2.5 and weakening and lengthening the bond (N–O 115 pm in NO against 106 pm in NO<sup>+</sup>). Because NO<sub>2</sub> has 17 valence electrons, it dimerises to the even-electron N<sub>2</sub>O<sub>4</sub>: 2NO<sub>2</sub> ⇌ N<sub>2</sub>O<sub>4</sub>, brown on the left, colourless on the right; cooling favours the dimer and heating favours the monomer.',
      },
      {
        t: 'p',
        html: '• <b>Acid-base character.</b> N<sub>2</sub>O and NO are neutral (they do not react with water to give an acid). N<sub>2</sub>O<sub>3</sub> and N<sub>2</sub>O<sub>5</sub> are the anhydrides of HNO<sub>2</sub> and HNO<sub>3</sub>, so N<sub>2</sub>O<sub>5</sub> + H<sub>2</sub>O → 2HNO<sub>3</sub>. NO<sub>2</sub> is a mixed anhydride, giving both acids: 2NO<sub>2</sub> + H<sub>2</sub>O → HNO<sub>2</sub> + HNO<sub>3</sub>, and with alkali, 2NO<sub>2</sub> + 2NaOH → NaNO<sub>2</sub> + NaNO<sub>3</sub> + H<sub>2</sub>O. Both are disproportionations of N(+4) into N(+3) and N(+5).',
      },
      { t: 'fig', id: 'c12-11-A-d2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Why does NO<sub>2</sub> dimerise, and why is the dimer colourless?',
        steps: [
          'NO<sub>2</sub> has an odd number of valence electrons (17) and is therefore a paramagnetic odd-electron molecule. Two molecules pair their odd electrons to form an N–N bond, giving the even-electron, diamagnetic N<sub>2</sub>O<sub>4</sub>, in which every electron is paired. The brown colour belongs to the odd-electron monomer; the dimer is colourless.',
        ],
        ans: 'pairing of odd electrons gives stable even-electron N<sub>2</sub>O<sub>4</sub>; N<sub>2</sub>O<sub>4</sub> is diamagnetic and colourless.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Arrange NO<sub>2</sub><sup>+</sup>, NO<sub>2</sub> and NO<sub>2</sub><sup>−</sup> in decreasing order of O–N–O bond angle, and give the hybridisation of N in each.',
        steps: [
          'Count the domains at N. NO<sub>2</sub><sup>+</sup>: two bonding domains, no lone pair, sp, 180°. NO<sub>2</sub>: two bonding domains and a single unpaired electron (a half-occupied orbital that repels less than a lone pair), sp<sup>2</sup>, 134°. NO<sub>2</sub><sup>−</sup>: two bonding domains and one full lone pair, sp<sup>2</sup>, below 120°.',
        ],
        ans: 'NO<sub>2</sub><sup>+</sup> (sp, 180°) > NO<sub>2</sub> (sp<sup>2</sup>, 134°) > NO<sub>2</sub><sup>−</sup> (sp<sup>2</sup>, < 120°).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'From the species N<sub>2</sub>O, NO, N<sub>2</sub>O<sub>3</sub>, NO<sub>2</sub>, N<sub>2</sub>O<sub>4</sub>, N<sub>2</sub>O<sub>5</sub>, how many are paramagnetic, and how many are acidic oxides?',
        steps: [
          'Paramagnetism needs an unpaired electron, which in this list happens only for the odd-electron molecules. Electron counts: N<sub>2</sub>O has 16 valence electrons (even), NO has 11 (odd), N<sub>2</sub>O<sub>3</sub> has 28, NO<sub>2</sub> has 17 (odd), N<sub>2</sub>O<sub>4</sub> has 34, N<sub>2</sub>O<sub>5</sub> has 40; only NO and NO<sub>2</sub> are odd. Acidic oxides: N<sub>2</sub>O<sub>3</sub>, NO<sub>2</sub>, N<sub>2</sub>O<sub>4</sub>, N<sub>2</sub>O<sub>5</sub>, while N<sub>2</sub>O and NO are neutral.',
        ],
        ans: '2 paramagnetic (NO, NO<sub>2</sub>); 4 acidic (N<sub>2</sub>O<sub>3</sub>, NO<sub>2</sub>, N<sub>2</sub>O<sub>4</sub>, N<sub>2</sub>O<sub>5</sub>).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does PH<sub>3</sub> boil lower than NH<sub>3</sub> although PH<sub>3</sub> has the greater molar mass?',
            a: 'NH<sub>3</sub> molecules are associated through hydrogen bonds (N is small and electronegative); PH<sub>3</sub> molecules are not, so only weak dispersion forces operate.',
          },
          {
            q: '[NEET] Which of NCl<sub>5</sub>, NF<sub>3</sub>, PCl<sub>5</sub>, R<sub>3</sub>P=O and R<sub>3</sub>N=O do not exist? Give the reason in one line, and state the covalence of N in N<sub>2</sub>O<sub>5</sub>.',
            a: 'NCl<sub>5</sub> and R<sub>3</sub>N=O (drawn with an N=O double bond) do not exist: nitrogen has no d orbitals, so its covalence cannot exceed 4 and it cannot form the dπ–pπ bond of R<sub>3</sub>E=O (NF<sub>3</sub>, PCl<sub>5</sub> and R<sub>3</sub>P=O exist; amine oxides are written R<sub>3</sub>N<sup>+</sup>–O<sup>−</sup>). In N<sub>2</sub>O<sub>5</sub> each N has one bridging single bond, one terminal single bond and one double bond, 1 + 1 + 2 = 4.',
          },
          {
            q: '[JEE Main] Find the oxidation state of nitrogen in N<sub>2</sub>O, NO, N<sub>2</sub>O<sub>3</sub>, NO<sub>2</sub>, N<sub>2</sub>O<sub>5</sub>, NH<sub>4</sub><sup>+</sup> and NO<sub>3</sub><sup>−</sup>, and of P in H<sub>3</sub>PO<sub>3</sub>, PCl<sub>3</sub>, Ca<sub>3</sub>P<sub>2</sub>, Na<sub>3</sub>PO<sub>4</sub> and POF<sub>3</sub>.',
            a: 'N: +1, +2, +3, +4, +5, −3 (from <i>x</i> + 4 = +1) and +5 (from <i>x</i> − 6 = −1). P: +3 (3 + <i>x</i> − 6 = 0), +3, −3 (6 + 2<i>x</i> = 0), +5 (3 + <i>x</i> − 8 = 0) and +5 (<i>x</i> − 2 − 3 = 0).',
          },
          {
            q: '[JEE Advanced] A gas X is colourless, neutral, diamagnetic and linear, and is obtained by gently heating NH<sub>4</sub>NO<sub>3</sub>. A gas Y is colourless, neutral and paramagnetic, and is obtained from NaNO<sub>2</sub> and acidified FeSO<sub>4</sub>. Identify X and Y, quote their bond lengths from the table, and say which turns brown on mixing with air.',
            a: 'X is N<sub>2</sub>O (N–N 113 pm, N–O 119 pm; linear); Y is NO (N–O 115 pm; 11 valence electrons, one unpaired). Only Y turns brown in air: 2NO + O<sub>2</sub> → 2NO<sub>2</sub>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 556–559 ─────────────────────────
  {
    n: 'B',
    title: 'Ammonia and Nitric Acid in Depth',
    extra: true,
    kalam: 'The nitrogen in HNO₃ is at +5; what it is reduced to depends on concentration and on the metal.',
    blocks: [
      { t: 'part', title: 'Ammonia: the reactions that carry marks' },
      {
        t: 'p',
        html: 'NH<sub>3</sub> is trigonal pyramidal (sp<sup>3</sup> N, three bonding pairs and one lone pair, ∠HNH = 107.8°). Almost everything it does follows from the lone pair (Lewis base, ligand) or from nitrogen sitting at −3 (reductant).',
      },
      {
        t: 'table',
        title: null,
        head: ['Role', 'Reaction', 'What to remember'],
        rows: [
          [
            'Weak base',
            'NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>;<br>NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl',
            'dense white fumes with HCl gas',
          ],
          [
            'Ligand',
            'Cu<sup>2+</sup>(aq) + 4NH<sub>3</sub> ⇌ [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>;<br>AgCl + 2NH<sub>3</sub> → [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + Cl<sup>−</sup>',
            'deep blue (test for Cu<sup>2+</sup>); white AgCl dissolves',
          ],
          [
            'Reductant',
            '8NH<sub>3</sub> + 3Cl<sub>2</sub> → N<sub>2</sub> + 6NH<sub>4</sub>Cl (excess NH<sub>3</sub>);<br>NH<sub>3</sub> + 3Cl<sub>2</sub> → NCl<sub>3</sub> + 3HCl (excess Cl<sub>2</sub>)',
            'the product depends on which reagent is in excess',
          ],
          [
            'Preparation',
            '2NH<sub>4</sub>Cl + Ca(OH)<sub>2</sub> → 2NH<sub>3</sub> + 2H<sub>2</sub>O + CaCl<sub>2</sub>;<br>Mg<sub>3</sub>N<sub>2</sub> + 6H<sub>2</sub>O → 3Mg(OH)<sub>2</sub> + 2NH<sub>3</sub>',
            'ionic nitrides hydrolyse to ammonia',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The Haber process, with the enthalpy read correctly.</b> Δ<sub>f</sub><i>H</i>°(NH<sub>3</sub>) = −46.1 kJ is per mole of NH<sub>3</sub>. The equation N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> makes two moles, so it releases 92.2 kJ per mole of reaction as written; NCERT quotes −46.1 kJ mol<sup>−1</sup> beside it, meaning per mole of ammonia. The reaction is exothermic and goes from 4 gas moles to 2, so low temperature and high pressure favour ammonia, but the rate at low temperature is unworkable. The compromise is about 200 atm (200 × 10<sup>5</sup> Pa), about 700 K and iron oxide with small amounts of K<sub>2</sub>O and Al<sub>2</sub>O<sub>3</sub> (earlier, iron with a molybdenum promoter). A catalyst speeds the approach to equilibrium; it never raises the equilibrium yield.',
      },
      {
        t: 'p',
        html: '<b>Ostwald process.</b> 4NH<sub>3</sub> + 5O<sub>2</sub> →<sup>Pt/Rh</sup> 4NO + 6H<sub>2</sub>O<br>(500 K, 9 bar)<br>2NO + O<sub>2</sub> ⇌ 2NO<sub>2</sub>; 3NO<sub>2</sub> + H<sub>2</sub>O → 2HNO<sub>3</sub> + NO, with the NO recycled. With the recycle, the net change per nitrogen atom is<br>NH<sub>3</sub> + 2O<sub>2</sub> → HNO<sub>3</sub> + H<sub>2</sub>O<br>(N 1 and 1; H 3 = 1 + 2; O 4 = 3 + 1), so 17 g of NH<sub>3</sub> ultimately gives 63 g of HNO<sub>3</sub>. Distillation gives about 68% acid by mass, and dehydration with concentrated H<sub>2</sub>SO<sub>4</sub> about 98%. In the laboratory, NaNO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → NaHSO<sub>4</sub> + HNO<sub>3</sub>.',
      },

      { t: 'part', title: 'Nitric acid as an oxidising agent: one method for every entry' },
      {
        t: 'p',
        html: 'The nitrogen in HNO<sub>3</sub> is at +5; what it is reduced to depends on concentration and on the metal. Learn the electron cost of each product and the table writes itself.',
      },
      {
        t: 'table',
        title: null,
        head: ['Product', 'N: +5 →', 'Electrons gained per molecule of product'],
        rows: [
          ['NO<sub>2</sub>', '+4', '1'],
          ['NO', '+2', '3'],
          ['N<sub>2</sub>O', '+1', '8 (two N, 4 e each)'],
          ['NH<sub>4</sub><sup>+</sup> (as NH<sub>4</sub>NO<sub>3</sub>)', '−3', '8'],
        ],
      },
      {
        t: 'p',
        html: '<b>Algorithm.</b> (1) Electrons lost per metal atom (Cu, Zn: 2). (2) Electrons gained per molecule of product. (3) Take the least common multiple: this fixes metal∶product. (4) Each M atom that becomes M(NO<sub>3</sub>)<sub>2</sub> needs 2 nitrate ions; add these to the nitrate reduced to get the HNO<sub>3</sub> total. (5) Balance H and O with water. For Zn giving N<sub>2</sub>O: 4 Zn (8 e) ∶ 1 N<sub>2</sub>O (8 e); nitrate in salt 4 × 2 = 8, nitrate reduced 2, total 10 HNO<sub>3</sub>; H gives 5 H<sub>2</sub>O; check O: 30 = 24 + 1 + 5.',
      },
      {
        t: 'table',
        title: null,
        head: ['Reactant', 'Dilute HNO<sub>3</sub>', 'Concentrated HNO<sub>3</sub>'],
        rows: [
          [
            'Copper (Cu)',
            '3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O',
            'Cu + 4HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O',
          ],
          [
            'Zinc (Zn)',
            '4Zn + 10HNO<sub>3</sub> → 4Zn(NO<sub>3</sub>)<sub>2</sub> + N<sub>2</sub>O + 5H<sub>2</sub>O',
            'Zn + 4HNO<sub>3</sub> → Zn(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O',
          ],
          ['Zinc (Zn), very dilute', '4Zn + 10HNO<sub>3</sub> → 4Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + 3H<sub>2</sub>O', '—'],
          ['Magnesium (Mg), very dilute', 'Mg + 2HNO<sub>3</sub> → Mg(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>', '—'],
          ['Aluminium, chromium (Al, Cr)', '—', 'passive (oxide film)'],
          ['Gold, platinum (Au, Pt)', 'not attacked', 'dissolve only in aqua regia'],
        ],
      },
      {
        t: 'p',
        html: 'The non-metals go to their highest common oxo-state, with NO<sub>2</sub> from the concentrated acid: I<sub>2</sub> + 10HNO<sub>3</sub> → 2HIO<sub>3</sub> + 10NO<sub>2</sub> + 4H<sub>2</sub>O; C + 4HNO<sub>3</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O + 4NO<sub>2</sub>; S<sub>8</sub> + 48HNO<sub>3</sub> → 8H<sub>2</sub>SO<sub>4</sub> + 48NO<sub>2</sub> + 16H<sub>2</sub>O; P<sub>4</sub> + 20HNO<sub>3</sub> → 4H<sub>3</sub>PO<sub>4</sub> + 20NO<sub>2</sub> + 4H<sub>2</sub>O (for S: 8 atoms × 6 e = 48 e, matching 48 NO<sub>2</sub>).',
      },

      { t: 'part', title: 'The brown-ring test and aqua regia' },
      {
        t: 'p',
        html: 'NO<sub>3</sub><sup>−</sup> + 3Fe<sup>2+</sup> + 4H<sup>+</sup> → NO + 3Fe<sup>3+</sup> + 2H<sub>2</sub>O, then [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + NO → [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup> + H<sub>2</sub>O (brown), seen at the junction when concentrated H<sub>2</sub>SO<sub>4</sub> is run down the side of the tube. Counting the ligand NO as NO<sup>+</sup>, the charge balance <i>x</i> + 1 = +2 gives Fe(+1): 3d<sup>7</sup>, three unpaired electrons, μ = √15 ≈ 3.87 BM.',
      },
      {
        t: 'p',
        html: 'Aqua regia (3 volumes conc. HCl to 1 of conc. HNO<sub>3</sub>): nitrate oxidises the metal and chloride stabilises it as a chloro-complex, Au + 4H<sup>+</sup> + NO<sub>3</sub><sup>−</sup> + 4Cl<sup>−</sup> → AuCl<sub>4</sub><sup>−</sup> + NO + 2H<sub>2</sub>O (charge: +4 − 1 − 4 = −1 on both sides).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Write the equations for copper with (i) dilute and (ii) concentrated nitric acid, naming the gas.',
        steps: [
          'Dilute acid: 3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O, giving nitric oxide, colourless and brown in air. Concentrated acid: Cu + 4HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O: nitrogen dioxide, brown.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: '6.35 g of copper dissolves in excess concentrated HNO<sub>3</sub>. Find the volume of NO<sub>2</sub> at 273 K and 1 atm (Cu = 63.5; 22.4 L mol<sup>−1</sup>) and the amount of HNO<sub>3</sub> acting as oxidant.',
        steps: [
          '<i>n</i>(Cu) = 0.100 mol; Cu + 4HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O gives 0.200 mol NO<sub>2</sub>, <i>V</i> = 0.200 × 22.4 = 4.48 L. Of the 4 mol HNO<sub>3</sub> per mol Cu, 2 end as nitrate in the salt (acid role) and 2 are reduced (oxidant role), so 0.200 mol is the oxidant.',
        ],
        ans: '4.48 L; 0.200 mol of HNO<sub>3</sub> as oxidant.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: '0.30 mol of zinc reacts with a large excess of very dilute nitric acid, the only reduction product being NH<sub>4</sub>NO<sub>3</sub>. Find the moles of HNO<sub>3</sub> consumed, the moles of electrons accepted, and the moles of nitrogen atoms reduced.',
        steps: [
          '4Zn + 10HNO<sub>3</sub> → 4Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + 3H<sub>2</sub>O. HNO<sub>3</sub>: 0.30 × 10/4 = 0.75 mol. Electrons released by Zn = 0.30 × 2 = 0.60 mol, all accepted by nitrogen going +5 → −3 (8 e each), so 0.60/8 = 0.075 mol of N atoms are reduced.',
        ],
        ans: '0.75 mol HNO<sub>3</sub>; 0.60 mol electrons; 0.075 mol N reduced.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is NH<sub>3</sub> a Lewis base? Give one complex it forms with a transition-metal ion, with its colour.',
            a: 'The N atom carries a lone pair available for donation. Example: [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, deep blue.',
          },
          {
            q: '[NEET] Name the gas formed when zinc reacts with (a) dilute and (b) concentrated nitric acid, and say which of Cr, Al, Au, Pt are passivated by the concentrated acid and which resist nitric acid alone but dissolve in aqua regia.',
            a: 'Dilute: N<sub>2</sub>O; concentrated: NO<sub>2</sub>. Cr and Al are passivated; Au and Pt dissolve in aqua regia (not in nitric acid alone).',
          },
          {
            q: '[JEE Main] 20 L of N<sub>2</sub> and 40 L of H<sub>2</sub> (same T, P) react to the limit in the Haber reaction. Give the composition of the final gas mixture.',
            a: 'The ratio is 1∶3, so 40 L of H<sub>2</sub> uses 13.33 L of N<sub>2</sub> and gives 26.67 L of NH<sub>3</sub>. Leftover N<sub>2</sub>: 20 − 13.33 = 6.67 L. Mixture: 26.67 L NH<sub>3</sub> + 6.67 L N<sub>2</sub> = 33.3 L.',
          },
          {
            q: '[JEE Main] Find the equivalent mass of HNO<sub>3</sub> (<i>M</i> = 63) as an oxidant when it is reduced to (a) NO<sub>2</sub>, (b) NO, (c) N<sub>2</sub>O.',
            a: 'To NO<sub>2</sub>: 63 (1 e); to NO: 63/3 = 21; to N<sub>2</sub>O: 4 e per N, so 63/4 = 15.75.',
          },
          {
            q: '[JEE Advanced] A nitrate solution treated with fresh FeSO<sub>4</sub> and layered with concentrated H<sub>2</sub>SO<sub>4</sub> shows a brown ring. Name the coloured species, the oxidation state of iron in it and its spin-only moment.',
            a: '[Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup>; Fe(+1) when NO is counted as NO<sup>+</sup>; three unpaired electrons, μ = √15 = 3.87 BM.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 559–563 ─────────────────────────
  {
    n: 'C',
    title: 'Phosphorus: Allotropes, Phosphine, the Chlorides and the Oxoacids',
    extra: true,
    kalam: 'Basicity equals the number of P–OH groups: only an O–H hydrogen ionises.',
    blocks: [
      { t: 'part', title: 'The allotropes side by side' },
      {
        t: 'table',
        title: null,
        head: ['', 'White', 'Red', 'Black (α, β)'],
        rows: [
          [
            'Structure',
            'discrete tetrahedral P<sub>4</sub>, ∠PPP = 60°',
            'polymeric chains of linked P<sub>4</sub> tetrahedra',
            'extended network (α: opaque monoclinic or rhombohedral crystals)',
          ],
          ['Made by', '—', 'white P heated at 573 K in an inert atmosphere', 'α: red P at 803 K, sealed tube; β: white P at 473 K, high pressure'],
          [
            'Properties',
            'waxy, poisonous, glows in the dark; soluble in CS<sub>2</sub>, insoluble in water',
            'odourless, non-poisonous, no glow; insoluble in water and CS<sub>2</sub>',
            'α does not oxidise in air; β does not burn below 673 K',
          ],
          [
            'Reactivity and stability',
            'most reactive, least stable; catches fire in air (P<sub>4</sub> + 5O<sub>2</sub> → P<sub>4</sub>O<sub>10</sub>), stored under water',
            'much less reactive',
            'most stable',
          ],
        ],
      },
      {
        t: 'p',
        html: 'White phosphorus is reactive because of angular strain: each P bonds to three others at 60°, far from the 90° of three nearly pure p orbitals. In hot alkali it <b>disproportionates</b>: P<sub>4</sub> + 3NaOH + 3H<sub>2</sub>O → PH<sub>3</sub> + 3NaH<sub>2</sub>PO<sub>2</sub>. One P goes 0 → −3 (3 e gained) and three go 0 → +1 (3 e lost); the reaction is run under an inert atmosphere of CO<sub>2</sub>.',
      },

      { t: 'part', title: 'Phosphine' },
      {
        t: 'p',
        html: 'Prepared from Ca<sub>3</sub>P<sub>2</sub> + 6H<sub>2</sub>O → 3Ca(OH)<sub>2</sub> + 2PH<sub>3</sub> (or with HCl: Ca<sub>3</sub>P<sub>2</sub> + 6HCl → 3CaCl<sub>2</sub> + 2PH<sub>3</sub>) or from white P and NaOH as in the allotropes part; purified by absorbing in HI to give PH<sub>4</sub>I, then PH<sub>4</sub>I + KOH → KI + H<sub>2</sub>O + PH<sub>3</sub>. It is a colourless, highly poisonous gas smelling of rotten fish; pure PH<sub>3</sub> does not ignite, but traces of P<sub>2</sub>H<sub>4</sub> or P<sub>4</sub> vapour make it inflammable, and it explodes with oxidants such as HNO<sub>3</sub>, Cl<sub>2</sub> and Br<sub>2</sub> vapour. It is a much weaker base than NH<sub>3</sub> (the lone pair sits on a larger atom and is spread over a bigger volume): PH<sub>3</sub> + HBr → PH<sub>4</sub>Br. It precipitates phosphides, 3CuSO<sub>4</sub> + 2PH<sub>3</sub> → Cu<sub>3</sub>P<sub>2</sub> + 3H<sub>2</sub>SO<sub>4</sub>. Holme’s signals use Ca<sub>3</sub>P<sub>2</sub> and CaC<sub>2</sub> in a pierced container thrown into the sea: the evolved gases burn and give a signal. Basicity: NH<sub>3</sub> > PH<sub>3</sub> > AsH<sub>3</sub> > SbH<sub>3</sub> ≥ BiH<sub>3</sub>.',
      },

      { t: 'part', title: 'The two chlorides' },
      {
        t: 'table',
        title: null,
        head: ['', 'PCl<sub>3</sub>', 'PCl<sub>5</sub>'],
        rows: [
          [
            'Preparation',
            'P<sub>4</sub> + 6Cl<sub>2</sub> → 4PCl<sub>3</sub> (dry Cl<sub>2</sub>, heated white P);<br>P<sub>4</sub> + 8SOCl<sub>2</sub> → 4PCl<sub>3</sub> + 4SO<sub>2</sub> + 2S<sub>2</sub>Cl<sub>2</sub>',
            'P<sub>4</sub> + 10Cl<sub>2</sub> → 4PCl<sub>5</sub> (excess Cl<sub>2</sub>);<br>P<sub>4</sub> + 10SO<sub>2</sub>Cl<sub>2</sub> → 4PCl<sub>5</sub> + 10SO<sub>2</sub>',
          ],
          ['Shape', 'pyramidal, sp<sup>3</sup>, 3 bonding pairs + 1 lone pair', 'gas and liquid: trigonal bipyramidal, sp<sup>3</sup>d'],
          [
            'Hydrolysis',
            'PCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>3</sub> + 3HCl (fumes in moist air)',
            'PCl<sub>5</sub> + H<sub>2</sub>O → POCl<sub>3</sub> + 2HCl, then POCl<sub>3</sub> + 3H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 3HCl',
          ],
          [
            'With –OH compounds',
            '3C<sub>2</sub>H<sub>5</sub>OH + PCl<sub>3</sub> → 3C<sub>2</sub>H<sub>5</sub>Cl + H<sub>3</sub>PO<sub>3</sub>;<br>3CH<sub>3</sub>COOH + PCl<sub>3</sub> → 3CH<sub>3</sub>COCl + H<sub>3</sub>PO<sub>3</sub>',
            'C<sub>2</sub>H<sub>5</sub>OH + PCl<sub>5</sub> → C<sub>2</sub>H<sub>5</sub>Cl + POCl<sub>3</sub> + HCl;<br>CH<sub>3</sub>COOH + PCl<sub>5</sub> → CH<sub>3</sub>COCl + POCl<sub>3</sub> + HCl',
          ],
        ],
      },
      { t: 'fig', id: 'c12-11-C-d1' },
      {
        t: 'p',
        html: '<b>Why the axial bonds are longer.</b> Each axial pair has three neighbours at 90°; each equatorial pair has two at 90° and two at 120°. The axial pairs are repelled more, so the axial bonds lengthen. The equatorial P–Cl distance is 202 pm and the axial distance is the longer of the two; that inequality, with its reason, is all an answer needs.',
      },
      {
        t: 'p',
        html: '<b>In redox reactions PCl<sub>5</sub> is an oxidising agent only.</b> Its P is already at +5, so it can only be reduced (to +3): 2Ag + PCl<sub>5</sub> → 2AgCl + PCl<sub>3</sub> and Sn + 2PCl<sub>5</sub> → SnCl<sub>4</sub> + 2PCl<sub>3</sub>. When heated it sublimes and then decomposes, PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub>.',
      },

      { t: 'part', title: 'The oxoacids of phosphorus: a bond inventory' },
      {
        t: 'p',
        html: 'In every oxoacid phosphorus is tetrahedrally surrounded and there is at least one P=O and one P–OH. Acids with P below +5 carry either P–H bonds or a P–P bond, never both. <b>Basicity equals the number of P–OH groups</b>: only an O–H hydrogen ionises.',
      },
      { t: 'fig', id: 'c12-11-C-d2' },
      {
        t: 'table',
        title: null,
        head: ['Acid', 'Formula', 'P', 'P=O', 'P–OH', 'P–H', 'Other', 'Basicity'],
        rows: [
          ['Hypophosphorous', 'H<sub>3</sub>PO<sub>2</sub>', '+1', '1', '1', '2', '—', '1'],
          ['Orthophosphorous', 'H<sub>3</sub>PO<sub>3</sub>', '+3', '1', '2', '1', '—', '2'],
          ['Pyrophosphorous', 'H<sub>4</sub>P<sub>2</sub>O<sub>5</sub>', '+3', '2', '2', '2', 'P–O–P', '2'],
          ['Hypophosphoric', 'H<sub>4</sub>P<sub>2</sub>O<sub>6</sub>', '+4', '2', '4', '0', 'P–P', '4'],
          ['Orthophosphoric', 'H<sub>3</sub>PO<sub>4</sub>', '+5', '1', '3', '0', '—', '3'],
          ['Pyrophosphoric', 'H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>', '+5', '2', '4', '0', 'P–O–P', '4'],
          ['Metaphosphoric', '(HPO<sub>3</sub>)<sub>3</sub> ring', '+5', '3', '3', '0', '3 P–O–P', '3'],
        ],
      },
      {
        t: 'p',
        html: 'The P–H bonds make these acids good <b>reducing agents</b>: H<sub>3</sub>PO<sub>2</sub> reduces silver nitrate, 4AgNO<sub>3</sub> + 2H<sub>2</sub>O + H<sub>3</sub>PO<sub>2</sub> → 4Ag + 4HNO<sub>3</sub> + H<sub>3</sub>PO<sub>4</sub> (P +1 → +5, 4 e, matching 4 Ag<sup>+</sup>). Acids with P at +3 <b>disproportionate</b> on heating to +5 and −3:<br>4H<sub>3</sub>PO<sub>3</sub> →<sup>Δ</sup> 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub><br>Three P go +3 → +5 (6 e lost) and one goes +3 → −3 (6 e gained). A dibasic acid gives two series of salts (NaH<sub>2</sub>PO<sub>3</sub>, Na<sub>2</sub>HPO<sub>3</sub>); H<sub>3</sub>PO<sub>2</sub> gives only NaH<sub>2</sub>PO<sub>2</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Why is white phosphorus more reactive than red phosphorus, and how is it stored?',
        steps: [
          'White phosphorus is made of discrete P<sub>4</sub> tetrahedra with 60° angles; the strain is released on reaction. Red phosphorus is a polymer of linked P<sub>4</sub> units and is much less strained. White phosphorus ignites in air, so it is stored under water.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: '6.2 g of white phosphorus reacts with excess chlorine. Calculate the mass of PCl<sub>5</sub> formed and the mass of chlorine used (P = 31, Cl = 35.5).',
        steps: [
          '<i>M</i>(P<sub>4</sub>) = 124, so <i>n</i> = 0.050 mol. P<sub>4</sub> + 10Cl<sub>2</sub> → 4PCl<sub>5</sub> gives 4 × 0.050 = 0.200 mol PCl<sub>5</sub>; <i>M</i> = 31 + 5(35.5) = 208.5, mass = 41.7 g. Chlorine: 10 × 0.050 = 0.500 mol = 35.5 g (check: 6.2 + 35.5 = 41.7).',
        ],
        ans: '41.7 g of PCl<sub>5</sub> (42 g to two significant figures); 35.5 g of Cl<sub>2</sub> (36 g).',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'What volume of 0.10 M NaOH neutralises 100 mL of 0.10 M (a) H<sub>3</sub>PO<sub>2</sub>, (b) H<sub>3</sub>PO<sub>3</sub>, (c) H<sub>3</sub>PO<sub>4</sub>?',
        steps: [
          'Each acid is 0.010 mol; NaOH needed = basicity × 0.010 mol: (a) 0.010 mol, 100 mL; (b) 0.020 mol, 200 mL; (c) 0.030 mol, 300 mL.',
          '<b>The trap:</b> H<sub>3</sub>PO<sub>2</sub> and H<sub>3</sub>PO<sub>3</sub> both show three H in the formula yet are mono- and dibasic.',
        ],
        ans: '100, 200 and 300 mL.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Among H<sub>3</sub>PO<sub>2</sub>, H<sub>3</sub>PO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>4</sub>P<sub>2</sub>O<sub>6</sub> and H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>, how many (i) contain a P–P bond, (ii) a P–O–P bond, (iii) a P–H bond, (iv) are tribasic? What is the total number of P–OH groups?',
        steps: [
          'From the table: (i) only H<sub>4</sub>P<sub>2</sub>O<sub>6</sub>: 1. (ii) only H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>: 1. (iii) H<sub>3</sub>PO<sub>2</sub> and H<sub>3</sub>PO<sub>3</sub>: 2. (iv) only H<sub>3</sub>PO<sub>4</sub>: 1. P–OH total: 1 + 2 + 3 + 4 + 4 = 14.',
        ],
        ans: '1, 1, 2, 1; 14.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: '8.2 g of pure H<sub>3</sub>PO<sub>3</sub> is heated until it disproportionates completely. Find the masses of PH<sub>3</sub> and H<sub>3</sub>PO<sub>4</sub> formed (<i>M</i>: 82, 34, 98).',
        steps: [
          '<i>n</i>(H<sub>3</sub>PO<sub>3</sub>) = 0.100 mol. From 4H<sub>3</sub>PO<sub>3</sub> → 3H<sub>3</sub>PO<sub>4</sub> + PH<sub>3</sub>: <i>n</i>(PH<sub>3</sub>) = 0.025 mol, mass 0.85 g; <i>n</i>(H<sub>3</sub>PO<sub>4</sub>) = 0.075 mol, mass 7.35 g (check: 0.85 + 7.35 = 8.20 g).',
        ],
        ans: '0.85 g PH<sub>3</sub>; 7.35 g H<sub>3</sub>PO<sub>4</sub> (7.4 g to two significant figures, since 8.2 g has two).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the reaction of white phosphorus with boiling NaOH, naming the gas, and state what happens when PCl<sub>5</sub> is heated.',
            a: 'P<sub>4</sub> + 3NaOH + 3H<sub>2</sub>O → PH<sub>3</sub> + 3NaH<sub>2</sub>PO<sub>2</sub>; phosphine. PCl<sub>5</sub> sublimes and on stronger heating decomposes, PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub>.',
          },
          {
            q: '[NEET] Give the shape and hybridisation of P in PCl<sub>3</sub>, gaseous PCl<sub>5</sub>, [PCl<sub>4</sub>]<sup>+</sup> and [PCl<sub>6</sub>]<sup>−</sup>.',
            a: 'PCl<sub>3</sub> pyramidal, sp<sup>3</sup>; PCl<sub>5</sub> trigonal bipyramidal, sp<sup>3</sup>d; [PCl<sub>4</sub>]<sup>+</sup> tetrahedral, sp<sup>3</sup>; [PCl<sub>6</sub>]<sup>−</sup> octahedral, sp<sup>3</sup>d<sup>2</sup>.',
          },
          {
            q: '[JEE Main] What volume of phosphine at 273 K and 1 atm is obtained from 18.2 g of Ca<sub>3</sub>P<sub>2</sub> and excess water (Ca = 40, P = 31; 22.4 L mol<sup>−1</sup>)?',
            a: '<i>M</i>(Ca<sub>3</sub>P<sub>2</sub>) = 182, so <i>n</i> = 0.100 mol; Ca<sub>3</sub>P<sub>2</sub> + 6H<sub>2</sub>O → 3Ca(OH)<sub>2</sub> + 2PH<sub>3</sub> gives 0.200 mol PH<sub>3</sub>, <i>V</i> = 4.48 L.',
          },
          {
            q: '[JEE Advanced] How many electrons are exchanged per mole of P<sub>4</sub> in its reaction with NaOH, and what are the oxidation states of P in the two products?',
            a: 'Three electrons per P<sub>4</sub> (one P gains 3 e, three P lose 1 e each). Products: PH<sub>3</sub> (P −3) and NaH<sub>2</sub>PO<sub>2</sub> (P +1).',
          },
        ],
      },
    ],
  },
];
