import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional Topics A to D, word for word from the Class 11
 * Chemistry Master Reference. They open with the shared introduction to
 * "Chapter 10: The p-Block Elements (Groups 13 and 14) — Additional Topics"
 * (p. 475), which is set at the head of Additional topic A's Introduction.
 * Then come:
 * - A The Numbers Behind the Group 13 and 14 Trends (pp. 475–478). Its two
 *   bar charts, captioned "Figure 1" and "Figure 2" in the book, are
 *   c11-10-A-d1 and c11-10-A-d2; the captions belong to the diagrams.
 * - B Boron’s Anomalies and the Diagonal Relationship, Tabulated
 *   (pp. 478–480)
 * - C Boron Compounds in Depth: Borax, Boric Acid, the Trihalides and
 *   Diborane (pp. 480–485). The borax anion ("Figure 3") is c11-10-C-d1 and
 *   diborane ("Figure 4") is c11-10-C-d2.
 * - D Aluminium: Oxide, Hydroxide, Chloride and Alums (pp. 485–487)
 * Each addendum prints its practice answers right after its questions. Each
 * answer is set with its own question.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 475–478 ─────────────────────────
  {
    n: 'A',
    title: 'The Numbers Behind the Group 13 and 14 Trends',
    extra: true,
    kalam: 'Examination questions often hand over a table of data and ask for a conclusion, so it helps to know exactly what each number proves — and what it does not.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has built the framework for groups 13 and 14: the inert pair effect, the anomalous first member, the signature compounds of boron and aluminium, catenation and allotropy in carbon, and the oxides, silica, silicones and zeolites of the carbon family. Nine examinable extensions remain. Addendum A adds the ionic radii and summed ionisation enthalpies behind trends the chapter states in words. Addendum B tabulates boron against aluminium and silicon. Addendum C deepens borax, boric acid, the boron trihalides and diborane. Addendum D covers aluminium oxide, hydroxide, chloride and alums. Addendum E treats the allotropes of carbon and the counting questions on fullerene. Addendum F covers the oxides of carbon and the carbonates. Addendum G turns silicate structure into a counting rule and adds silicones and zeolites. Addendum H covers tin and lead. Addendum I collects the rules for “which is stronger” and “which is more stable” questions, with the identification tests in one table.',
      },
      {
        t: 'p',
        html: 'The chapter tabulates radii and first ionisation enthalpies and explains the other trends in words. Examination questions often hand over a table of data and ask for a conclusion, so it helps to know exactly what each number proves — and what it does not.',
      },

      { t: 'part', title: 'A1 — Group 13: radii and ionisation enthalpies' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'B', 'Al', 'Ga', 'In', 'Tl'],
        rows: [
          ['Atomic radius / pm', '(85)', '143', '135', '167', '170'],
          ['Ionic radius M<sup>3+</sup> / pm', '(27)', '53.5', '62.0', '80.0', '88.5'],
          ['Ionic radius M<sup>+</sup> / pm', '—', '—', '120', '140', '150'],
          [
            'Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub> / kJ mol<sup>−1</sup>',
            '6887',
            '5137',
            '5520',
            '5082',
            '5437',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Brackets mark values that are not metallic or free-ion radii (boron is a non-metal, and B<sup>3+</sup> is hypothetical).',
      },
      {
        t: 'p',
        html: '1. <b>The gallium anomaly lives only in the atomic radius.</b> Ga (135 pm) is smaller than Al (143 pm), yet Ga<sup>3+</sup> (62.0 pm) is larger than Al<sup>3+</sup> (53.5 pm). Ionic radii compare what is left after the outer shell is removed, and Ga<sup>3+</sup> still has one more complete shell than Al<sup>3+</sup>. The poorly shielding 3d<sup>10</sup> core makes the neutral atom smaller than expected; it cannot remove a shell.<br>2. <b>A lower oxidation state means a larger cation.</b> Tl<sup>+</sup> (150 pm) is much larger than Tl<sup>3+</sup> (88.5 pm), which is why +1 compounds behave like compounds of a large singly charged cation — the chapter’s “more ionic”.<br>3. <b>Boron’s problem is the sum.</b> 6887 against 5137 kJ mol<sup>−1</sup> for Al is a difference of 1750. The lattice or hydration enthalpy released by a B<sup>3+</sup> ion could not repay that cost, so boron stays covalent; for aluminium the cost is repaid.<br>4. <b>The sum zigzags</b> (6887, 5137, 5520, 5082, 5437): the two rises, Al to Ga and In to Tl, mark the arrival of the 3d<sup>10</sup> and 4f<sup>14</sup>5d<sup>10</sup> cores, whose poor shielding raises the effective nuclear charge.',
      },
      { t: 'fig', id: 'c11-10-A-d1' },

      { t: 'part', title: 'A2 — Group 14: radii, ionisation enthalpies and melting points' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'C', 'Si', 'Ge', 'Sn', 'Pb'],
        rows: [
          ['Covalent radius / pm', '77', '118', '122', '140', '146'],
          ['Ionic radius M<sup>4+</sup> / pm', '—', '40', '53', '69', '78'],
          ['Ionic radius M<sup>2+</sup> / pm', '—', '—', '73', '118', '119'],
          ['Δ<sub>i</sub><i>H</i><sub>1</sub> / kJ mol<sup>−1</sup>', '1086', '786', '761', '708', '715'],
          [
            'Δ<sub>i</sub><i>H</i><sub>1</sub> + ⋯ + Δ<sub>i</sub><i>H</i><sub>4</sub> / kJ mol<sup>−1</sup>',
            '14278',
            '9945',
            '10007',
            '8990',
            '9328',
          ],
          ['Melting point / K', '4373', '1693', '1218', '505', '600'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Carbon to silicon is the big drop</b> in Δ<sub>i</sub><i>H</i><sub>1</sub> (1086 to 786 kJ mol<sup>−1</sup>): silicon’s valence electrons are in the third shell, farther out and screened by the complete <i>n</i> = 2 shell (NCERT Exercise 11.23. The p-block chapter is not in the current NCERT Class 11 book; these numbers are from the earlier edition’s Chapter 11, The p-Block Elements.)<br>• <b>Germanium and lead break the pattern.</b> The four-step sum rises from Si (9945) to Ge (10007) although Ge’s Δ<sub>i</sub><i>H</i><sub>1</sub> and Δ<sub>i</sub><i>H</i><sub>2</sub> are lower: Ge’s Δ<sub>i</sub><i>H</i><sub>3</sub> (3300) and Δ<sub>i</sub><i>H</i><sub>4</sub> (4409) exceed Si’s (3228, 4354), because the 3d<sup>10</sup> electrons shield poorly. The same happens from Sn (8990) to Pb (9328). Melting points fall from the covalent networks to 505 K for tin; lead (600 K) is slightly higher, so the trend is not strictly monotonic.',
      },

      { t: 'part', title: 'A3 — The cost of reaching the group oxidation state' },
      {
        t: 'p',
        html: 'The inert pair effect says +1 (group 13) and +2 (group 14) gain stability down the group. One way to see the energetics is to add the two ionisation enthalpies needed to go from the lower state to the group state: Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub> for +1 → +3 (Al 4560, Ga 4941, In 4524, Tl 4848 kJ mol<sup>−1</sup>) and Δ<sub>i</sub><i>H</i><sub>3</sub> + Δ<sub>i</sub><i>H</i><sub>4</sub> for +2 → +4 (Si 7582, Ge 7709, Sn 6871, Pb 7163 kJ mol<sup>−1</sup>).',
      },
      { t: 'fig', id: 'c11-10-A-d2' },
      {
        t: 'p',
        html: '<b>How to use this, and its limit.</b> The heaviest member of each group costs more than the element above it (Tl above In; Pb above Sn), consistent with Tl<sup>+</sup> and Pb<sup>2+</sup> being the stable states. But ionisation enthalpy is one term only: gallium has the highest cost from aluminium to thallium yet Ga<sup>3+</sup> is its common state, because the bonds formed repay the cost. The inert pair argument is complete only with bond enthalpies: bonds from the larger 6s/6p atoms are weaker, so the repayment shrinks exactly where the cost grows. This is the logic behind PbI<sub>4</sub> not existing — the Pb–I bonds are too weak to pay for unpairing the 6s<sup>2</sup> electrons.',
      },
      {
        t: 'p',
        html: '<b>A note on the thallium couples.</b> Three different potentials are easily confused: Tl<sup>+</sup>/Tl, Tl<sup>3+</sup>/Tl<sup>+</sup> and Tl<sup>3+</sup>/Tl. Standard reference tables give <i>E</i>°(Tl<sup>+</sup>/Tl) = −0.34 V, <i>E</i>°(Tl<sup>3+</sup>/Tl<sup>+</sup>) ≈ +1.25 V and <i>E</i>°(Tl<sup>3+</sup>/Tl) ≈ +0.72 V. They are consistent, because free energies add (Δ<i>G</i>° = −<i>nFE</i>°, so the products <i>nE</i>° add): 3(0.72) ≈ 2(1.25) + 1(−0.34), both sums being about 2.16 V. NCERT prints +1.26 V against Tl<sup>3+</sup>/Tl; that figure matches the Tl<sup>3+</sup>/Tl<sup>+</sup> couple, and this book uses +1.25 V for Tl<sup>3+</sup>/Tl<sup>+</sup> in the chapter’s worked example. If a question quotes a value for “Tl<sup>3+</sup>/Tl”, check which couple the data refer to before comparing it with Al<sup>3+</sup>/Al.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — “Gallium dichloride”',
        q: 'The compound of formula GaCl<sub>2</sub> is diamagnetic. Does gallium show the +2 state in it?',
        steps: [
          'A genuine Ga<sup>2+</sup> ion would have one unpaired electron (4s<sup>1</sup>), making the compound paramagnetic. The formula is really Ga<sup>+</sup>[GaCl<sub>4</sub>]<sup>−</sup>: one Ga(I) (4s<sup>2</sup>, paired) and one Ga(III) (3d<sup>10</sup>, tetrahedral in GaCl<sub>4</sub><sup>−</sup>).',
        ],
        ans: 'No. The average oxidation state is +2, but gallium is present as +1 and +3.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub> for Ga and In and say which sum is larger. (Δ<sub>i</sub><i>H</i><sub>1</sub>, Δ<sub>i</sub><i>H</i><sub>2</sub>, Δ<sub>i</sub><i>H</i><sub>3</sub> in kJ mol<sup>−1</sup>: Ga 579, 1979, 2962; In 558, 1820, 2704.)',
            a: 'Ga: 579 + 1979 + 2962 = 5520; In: 558 + 1820 + 2704 = 5082; the gallium sum is larger by 438 kJ mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Δ<sub>i</sub><i>H</i><sub>3</sub> + Δ<sub>i</sub><i>H</i><sub>4</sub> is 6871 kJ mol<sup>−1</sup> for Sn and 7163 kJ mol<sup>−1</sup> for Pb. By how much does Pb exceed Sn, and what does it indicate?',
            a: '7163 − 6871 = 292 kJ mol<sup>−1</sup> more for Pb: the +4 state is harder to reach for lead, consistent with Pb<sup>2+</sup> being its stable state and Pb(IV) oxidising.',
          },
          {
            q: '[JEE Advanced] Ge has lower Δ<sub>i</sub><i>H</i><sub>1</sub> and Δ<sub>i</sub><i>H</i><sub>2</sub> than Si, yet a larger Δ<sub>i</sub><i>H</i><sub>1</sub> + ⋯ + Δ<sub>i</sub><i>H</i><sub>4</sub>. Explain.',
            a: 'Ge’s Δ<sub>i</sub><i>H</i><sub>3</sub> (3300 against 3228) and Δ<sub>i</sub><i>H</i><sub>4</sub> (4409 against 4354) are higher: the 3d<sup>10</sup> electrons screen poorly, so the deeper valence electrons are held more tightly, outweighing Ge’s small advantage in the first two steps.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 478–480 ─────────────────────────
  {
    n: 'B',
    title: 'Boron’s Anomalies and the Diagonal Relationship, Tabulated',
    extra: true,
    kalam: 'The papers test the comparisons: which of B, Al, Si resembles which, property by property.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the reasons (small size, no d orbitals) and the headline B–Si diagonal relationship. The papers test the comparisons: which of B, Al, Si resembles which, property by property.',
      },

      { t: 'part', title: 'B1 — Boron against aluminium' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'Boron', 'Aluminium'],
        rows: [
          ['Character', 'non-metal (hard, black solid)', 'metal'],
          ['Simple M<sup>3+</sup> ion', 'none; only covalent compounds', 'common, e.g. [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>'],
          [
            'Oxide / hydroxide',
            'B<sub>2</sub>O<sub>3</sub> acidic; B(OH)<sub>3</sub> a weak Lewis acid',
            'Al<sub>2</sub>O<sub>3</sub>, Al(OH)<sub>3</sub> amphoteric',
          ],
          ['Maximum covalence', '4 ([BF<sub>4</sub>]<sup>−</sup>)', '6 ([AlF<sub>6</sub>]<sup>3−</sup>)'],
          ['Trichloride', 'monomeric BCl<sub>3</sub>', 'dimeric Al<sub>2</sub>Cl<sub>6</sub> (vapour, non-polar solvents)'],
          ['Hydride', 'volatile boranes, e.g. B<sub>2</sub>H<sub>6</sub>', 'polymeric solid (AlH<sub>3</sub>)<sub><i>n</i></sub>'],
          ['Acids and alkalis', 'no reaction even at moderate temperature', 'dissolves in both, giving H<sub>2</sub>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Why BCl<sub>3</sub> is a monomer and AlCl<sub>3</sub> a dimer.</b> Boron repairs its electron shortage by pπ–pπ back donation from chlorine lone pairs into its empty 2p orbital. Aluminium’s larger, more diffuse 3p orbital overlaps poorly with chlorine’s, so it repairs the shortage by chlorine bridges instead. A size argument points the same way: the small boron atom cannot hold four chlorines, whereas the larger aluminium can (each Al in Al<sub>2</sub>Cl<sub>6</sub> is four-coordinate).',
      },

      { t: 'part', title: 'B2 — Boron against silicon: the diagonal pair' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'Boron', 'Silicon', 'Aluminium (contrast)'],
        rows: [
          [
            'Oxide',
            'B<sub>2</sub>O<sub>3</sub> acidic, glass-forming',
            'SiO<sub>2</sub> acidic, glass-forming',
            'Al<sub>2</sub>O<sub>3</sub> amphoteric',
          ],
          [
            'Hydrides',
            'volatile, spontaneously flammable, hydrolysed',
            'SiH<sub>4</sub> gaseous, readily hydrolysed, inflammable',
            'polymeric solid',
          ],
          [
            'Oxo-anions',
            'borates built by corner sharing',
            'silicates built by corner sharing',
            'far less extensive polymeric oxo-anion chemistry',
          ],
          [
            'Halides',
            'BCl<sub>3</sub> readily hydrolysed',
            'SiCl<sub>4</sub> readily hydrolysed',
            'AlCl<sub>3</sub> gives [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> in water',
          ],
          ['Fluoro-anion', '[BF<sub>4</sub>]<sup>−</sup>', '[SiF<sub>6</sub>]<sup>2−</sup>', '[AlF<sub>6</sub>]<sup>3−</sup>'],
        ],
      },
      {
        t: 'p',
        html: 'Boron differs from aluminium on every row and agrees with silicon on the oxide, hydride, polymerising oxo-anions and readily hydrolysed halides; and borates and silicates combine in borosilicate glass. The borate–silicate agreement is structural: both build large anions by sharing oxygen corners (Addendum G turns this into a counting rule).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Electron deficiency',
        q: 'What are electron-deficient compounds? Are BCl<sub>3</sub> and SiCl<sub>4</sub> electron deficient? (NCERT Exercise 11.9.)',
        steps: [
          'An electron-deficient compound has a central atom with fewer than eight valence electrons after bonding. In BCl<sub>3</sub> boron shares three pairs (six electrons); in SiCl<sub>4</sub> silicon shares four pairs (eight).',
        ],
        ans: 'BCl<sub>3</sub> is electron deficient and acts as a Lewis acid; SiCl<sub>4</sub> is electron precise and is not electron deficient.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The metaborate ring',
        q: 'Sodium metaborate, nominally NaBO<sub>2</sub>, exists as Na<sub>3</sub>[B<sub>3</sub>O<sub>6</sub>], a six-membered ring of three BO<sub>3</sub> triangles joined at corners. Find the charge on the ring and the number of bridging oxygens.',
        steps: [
          'Each triangle shares two corners, so it keeps one terminal oxygen (charge −1) and contributes one bridging oxygen (no residual charge). Three triangles give three bridging and three terminal oxygens: total oxygen 6. Charge check: 3(+3) + 6(−2) = −3.',
        ],
        ans: '[B<sub>3</sub>O<sub>6</sub>]<sup>3−</sup>; three bridging oxygens and three terminal O<sup>−</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two reasons why AlCl<sub>3</sub> dimerises but BCl<sub>3</sub> does not.',
            a: 'In BCl<sub>3</sub> the electron deficiency is relieved by pπ–pπ back donation from chlorine, which the larger aluminium cannot achieve; and the small boron atom cannot accommodate four large chlorine atoms, while aluminium can (bridging chlorines complete its octet).',
          },
          {
            q: '[JEE Main] Name the maximum covalence of B and of Al and give a species showing each.',
            a: 'Boron 4, as in [BF<sub>4</sub>]<sup>−</sup> (no d orbitals, only four valence orbitals); aluminium 6, as in [AlF<sub>6</sub>]<sup>3−</sup> (empty 3d orbitals available).',
          },
          {
            q: '[JEE Advanced] A cyclic ion is made of four BO<sub>3</sub> triangles, each sharing two corners. Find its formula and charge.',
            a: 'Each triangle is BO<sub>2</sub><sup>−</sup> (one bridging and one terminal O per B), so the ring is [B<sub>4</sub>O<sub>8</sub>]<sup>4−</sup>; check: 4(+3) + 8(−2) = −4.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 480–485 ─────────────────────────
  {
    n: 'C',
    title: 'Boron Compounds in Depth: Borax, Boric Acid, the Trihalides and Diborane',
    extra: true,
    kalam: 'The halogen’s electronegativity is not what decides the order of the boron halides.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states the facts about each compound. This addendum adds what the questions are built on: how the atoms of the borax anion are joined, how borax is made and titrated, the bead-test colours of six metals, the cis-diol effect on boric acid, the flame test for borates, and what diborane does with alkenes.',
      },

      { t: 'part', title: 'C1 — Borax' },
      {
        t: 'p',
        html: '<b>Source and preparation.</b> Boron occurs as orthoboric acid, borax (tincal), kernite Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·4H<sub>2</sub>O and colemanite Ca<sub>2</sub>B<sub>6</sub>O<sub>11</sub>·5H<sub>2</sub>O; in India borax is found at Puga Valley (Ladakh) and Sambhar Lake (Rajasthan). Treating colemanite with sodium carbonate (the powdered mineral is fused with it and extracted with hot water) precipitates calcium carbonate and leaves sodium borate and metaborate in solution; carbon dioxide then converts the metaborate to more borax, and crystallisation gives Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O:<br>Ca<sub>2</sub>B<sub>6</sub>O<sub>11</sub> + 2Na<sub>2</sub>CO<sub>3</sub> → 2CaCO<sub>3</sub>↓ + Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 2NaBO<sub>2</sub><br>4NaBO<sub>2</sub> + CO<sub>2</sub> → Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + Na<sub>2</sub>CO<sub>3</sub>',
      },
      {
        t: 'p',
        html: '<b>The anion.</b> Borax is Na<sub>2</sub>[B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]·8H<sub>2</sub>O. In [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup> two borons are tetrahedral (sp<sup>3</sup>, four oxygens; each carries a formal charge of −1, which gives the 2−) and two are trigonal planar (sp<sup>2</sup>, three oxygens). Five oxygens form the framework, each bridging two borons; the other four are OH groups, one on each boron. The framework is two six-membered B<sub>3</sub>O<sub>3</sub> rings sharing the B–O–B unit between the two tetrahedral borons.',
      },
      { t: 'fig', id: 'c11-10-C-d1' },
      {
        t: 'p',
        html: '<b>Borax in a titration.</b> In water the anion gives equal amounts of a weak acid and its conjugate base (so borax solution is also a buffer): [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup> + 5H<sub>2</sub>O ⇌ 2B(OH)<sub>3</sub> + 2[B(OH)<sub>4</sub>]<sup>−</sup>. Only [B(OH)<sub>4</sub>]<sup>−</sup> reacts with strong acid ([B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup> → B(OH)<sub>3</sub> + 2H<sub>2</sub>O), so <b>one mole of borax consumes two moles of HCl</b>; methyl orange (pH range about 3.1–4.4, unaffected by the weak boric acid) is the indicator. Borax is a convenient primary standard for acids.',
      },
      {
        t: 'p',
        html: '<b>The bead test.</b> Strong heating gives a clear glass, Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> → 2NaBO<sub>2</sub> + B<sub>2</sub>O<sub>3</sub>. On a platinum loop, hot B<sub>2</sub>O<sub>3</sub> displaces the volatile oxide or acidic part of a coloured salt to form a coloured metaborate:<br>CuSO<sub>4</sub> + B<sub>2</sub>O<sub>3</sub> → Cu(BO<sub>2</sub>)<sub>2</sub> + SO<sub>3</sub><br>CoO + B<sub>2</sub>O<sub>3</sub> → Co(BO<sub>2</sub>)<sub>2</sub><br>Cr<sub>2</sub>O<sub>3</sub> + 3B<sub>2</sub>O<sub>3</sub> → 2Cr(BO<sub>2</sub>)<sub>3</sub>',
      },
      {
        t: 'table',
        title: null,
        head: ['Metal', 'Oxidising flame (hot / cold)', 'Reducing flame'],
        rows: [
          ['Cr', 'yellow / green', 'green'],
          ['Mn', 'violet / violet', 'colourless'],
          ['Fe', 'yellowish brown / yellow', 'green'],
          ['Co', 'blue / blue', 'blue'],
          ['Ni', 'violet / reddish brown', 'grey'],
          ['Cu', 'green / blue', 'colourless hot, opaque cold'],
        ],
      },
      {
        t: 'p',
        html: 'A bead that is blue in both flames is cobalt. The test works only on coloured salts, and the swelling on heating is only loss of water of crystallisation (alums swell too), so swelling alone does not identify borax.',
      },

      { t: 'part', title: 'C2 — Orthoboric acid' },
      {
        t: 'p',
        html: '<b>Structure.</b> Planar BO<sub>3</sub> units (sp<sup>2</sup> boron) are joined by hydrogen bonds into two-dimensional sheets held together only weakly, so the crystals flake and feel soapy; the powder is used on carrom boards for smooth gliding.',
      },
      {
        t: 'p',
        html: '<b>The titration problem and the cis-diol.</b> It accepts OH<sup>−</sup> from water to give tetrahedral [B(OH)<sub>4</sub>]<sup>−</sup> (the chapter’s equation) but is very weak (p<i>K</i><sub>a</sub> ≈ 9.2), so titration with NaOH gives no sharp end point. A polyhydroxy compound with hydroxyls on adjacent carbons in the cis arrangement (glycerol, mannitol, sugars) forms a very stable chelate with the borate ion, removes it from the equilibrium and drives the ionisation to completion:<br>B(OH)<sub>3</sub> + 2H<sub>2</sub>L → [BL<sub>2</sub>]<sup>−</sup> + H<sup>+</sup> + 3H<sub>2</sub>O (H<sub>2</sub>L = cis-diol)',
      },
      {
        t: 'p',
        html: 'With the diol present boric acid behaves as a strong <b>monobasic</b> acid and is titrated against NaOH with phenolphthalein; the <i>n</i>-factor is 1.',
      },
      {
        t: 'p',
        html: '<b>Preparation and the flame test.</b> Acidifying borax gives boric acid, Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 2HCl + 5H<sub>2</sub>O → 2NaCl + 4B(OH)<sub>3</sub>; so does hydrolysis of any boron halide or hydride. In hydrofluoric acid it forms the strong fluoroboric acid, H<sub>3</sub>BO<sub>3</sub> + 4HF → H[BF<sub>4</sub>] + 3H<sub>2</sub>O. For the <b>green-flame test</b>, a borate is warmed with concentrated H<sub>2</sub>SO<sub>4</sub> and methanol; the acid frees boric acid and removes water, and the volatile ester burns with a green-edged flame:<br>B(OH)<sub>3</sub> + 3CH<sub>3</sub>OH →<sup>conc. H₂SO₄</sup> B(OCH<sub>3</sub>)<sub>3</sub> + 3H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'Copper and barium salts also give a green flame, so the ester test is not decided by the colour alone.',
      },

      { t: 'part', title: 'C3 — The boron trihalides' },
      {
        t: 'p',
        html: 'The chapter gives the order BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>, its back-bonding explanation and the B–F lengths in BF<sub>3</sub> and [BF<sub>4</sub>]<sup>−</sup>. Three further points:<br>• <b>State:</b> BF<sub>3</sub> and BCl<sub>3</sub> are gases, BBr<sub>3</sub> is a liquid, BI<sub>3</sub> is a solid.<br>• <b>Bond lengths trace the back bonding.</b> B–F is 130 pm in planar BF<sub>3</sub> (empty 2p orbital, partial double-bond character); it lengthens to about 138 pm in the adduct H<sub>3</sub>N→BF<sub>3</sub> and to 143 pm in [BF<sub>4</sub>]<sup>−</sup>, where boron is sp<sup>3</sup> and back bonding is lost.<br>• <b>Hydrolysis.</b> BCl<sub>3</sub> + 3H<sub>2</sub>O → B(OH)<sub>3</sub> + 3HCl is complete; BF<sub>3</sub> hydrolyses only partly, because the HF formed combines with boric acid: 4BF<sub>3</sub> + 6H<sub>2</sub>O → B(OH)<sub>3</sub> + 3H<sub>3</sub>O<sup>+</sup> + 3[BF<sub>4</sub>]<sup>−</sup>.',
      },
      {
        t: 'p',
        html: '<b>Which is the stronger Lewis acid?</b> Across the boron halides, back bonding decides (strength rises F → I). Down the group, the chapter’s rule (as in NCERT) is that the Lewis acid tendency falls as the central atom grows larger. The halogen’s electronegativity is not what decides the order of the boron halides.',
      },

      { t: 'part', title: 'C4 — Diborane in detail' },
      { t: 'fig', id: 'c11-10-C-d2' },
      {
        t: 'defgrid',
        title: 'Quantity — Value',
        rows: [
          { k: 'Valence electrons / pairs', v: '12 / 6' },
          { k: 'Terminal B–H bonds (2c–2e)', v: '4, using 4 pairs' },
          { k: 'Bridge bonds (3c–2e)', v: '2, using the remaining 2 pairs' },
          { k: 'Atoms in one plane', v: '6 (two B and four terminal H); the two bridging H are one above and one below it' },
          { k: 'Hybridisation of each B', v: 'sp<sup>3</sup> (before bonding, one hybrid on each boron is empty; it joins a bridge)' },
          {
            k: 'Bond lengths',
            v: 'terminal B–H 119 pm, bridge B–H 133 pm (the bridge bonds are longer and weaker)',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Reactions beyond the chapter’s list.</b> With aqueous alkali: B<sub>2</sub>H<sub>6</sub> + 2KOH + 2H<sub>2</sub>O → 2KBO<sub>2</sub> + 6H<sub>2</sub>. With alkenes in dry ether (hydroboration): 6RCH=CH<sub>2</sub> + B<sub>2</sub>H<sub>6</sub> → 2(RCH<sub>2</sub>CH<sub>2</sub>)<sub>3</sub>B; boron adds to the carbon with fewer alkyl groups, and the two atoms add to the same face of the double bond. Alkaline hydrogen peroxide then replaces B–C by O–H:<br>(RCH<sub>2</sub>CH<sub>2</sub>)<sub>3</sub>B + 3H<sub>2</sub>O<sub>2</sub> + NaOH → 3RCH<sub>2</sub>CH<sub>2</sub>OH + Na[B(OH)<sub>4</sub>]',
      },
      {
        t: 'p',
        html: 'The net result is anti-Markovnikov, syn (same-face) hydration of the double bond (compare acid-catalysed hydration in Chapter 9, Addendum C).',
      },
      {
        t: 'p',
        html: '<b>Tetrahydridoborates, borazine, boron nitride.</b> Na[BH<sub>4</sub>] (tetrahedral [BH<sub>4</sub>]<sup>−</sup>) is a mild reducing agent: it reduces aldehydes to primary and ketones to secondary alcohols without normally attacking C=C, –COOH or –NO<sub>2</sub>. Borazine, B<sub>3</sub>N<sub>3</sub>H<sub>6</sub> (from 3B<sub>2</sub>H<sub>6</sub> + 6NH<sub>3</sub> → 2B<sub>3</sub>N<sub>3</sub>H<sub>6</sub> + 12H<sub>2</sub> on heating), has 30 valence electrons like benzene (a B–N pair matches a C–C pair: 3 + 5 = 4 + 4) and a similar ring — “inorganic benzene” — but its polar B–N bonds make it more reactive. Hexagonal boron nitride, (BN)<sub><i>n</i></sub>, is a layered, slippery white solid like graphite.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Level — Borax and hydrochloric acid',
        q: 'What volume of 0.100 M HCl neutralises 1.906 g of Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O? (Na = 23, B = 10.8, O = 16, H = 1.)',
        steps: [
          '<i>M</i> = 46 + 43.2 + 112 + 180 = 381.2 g mol<sup>−1</sup>, so <i>n</i> = 1.906/381.2 = 0.00500 mol. One mole of borax consumes two moles of HCl: <i>n</i>(HCl) = 0.0100 mol, <i>V</i> = 0.0100/0.100',
        ],
        ans: '100 mL.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Aluminium fluoride, sodium fluoride and boron trifluoride',
        q: 'AlF<sub>3</sub> is insoluble in anhydrous HF but dissolves on adding NaF; when gaseous BF<sub>3</sub> is then bubbled through, AlF<sub>3</sub> precipitates again. Explain. (NCERT Exercise 11.16.)',
        steps: [
          'AlF<sub>3</sub> is a lattice of strongly bound ions. Fluoride from NaF is a Lewis base that coordinates to Al<sup>3+</sup> to give a soluble complex ion (aluminium, with 3d orbitals, reaches covalence 6): AlF<sub>3</sub> + 3NaF → Na<sub>3</sub>[AlF<sub>6</sub>]. BF<sub>3</sub> is the stronger fluoride acceptor and takes the fluoride back as [BF<sub>4</sub>]<sup>−</sup> (boron’s covalence tops out at 4): Na<sub>3</sub>[AlF<sub>6</sub>] + 3BF<sub>3</sub> → 3Na[BF<sub>4</sub>] + AlF<sub>3</sub>↓.',
        ],
        ans: 'F<sup>−</sup> binds Al<sup>3+</sup> to give soluble [AlF<sub>6</sub>]<sup>3−</sup>; BF<sub>3</sub> removes it as [BF<sub>4</sub>]<sup>−</sup> and AlF<sub>3</sub> precipitates.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the correct formula of borax and state how many of its boron atoms are sp<sup>2</sup> and how many sp<sup>3</sup>.',
            a: 'Na<sub>2</sub>[B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]·8H<sub>2</sub>O; two sp<sup>2</sup> (trigonal) and two sp<sup>3</sup> (tetrahedral) borons.',
          },
          {
            q: '[JEE Main] What volume of H<sub>2</sub> at 273 K and 1 atm (22.4 L per mole) is liberated when 0.25 mol of B<sub>2</sub>H<sub>6</sub> is hydrolysed completely?',
            a: 'B<sub>2</sub>H<sub>6</sub> + 6H<sub>2</sub>O → 2B(OH)<sub>3</sub> + 6H<sub>2</sub>: <i>n</i>(H<sub>2</sub>) = 6 × 0.25 = 1.50 mol, <i>V</i> = 33.6 L.',
          },
          {
            q: '[JEE Main] 25.0 mL of 0.200 M boric acid with excess mannitol is titrated with 0.100 M NaOH to the phenolphthalein end point. Find the volume of NaOH and say why mannitol is added.',
            a: 'With mannitol boric acid is monobasic (<i>n</i>-factor 1): <i>n</i> = 0.0250 × 0.200 = 5.00 × 10<sup>−3</sup> mol, so <i>V</i> = 5.00 × 10<sup>−3</sup>/0.100 = 50.0 mL. Without mannitol the acid is too weak for a sharp end point; the chelate removes [B(OH)<sub>4</sub>]<sup>−</sup> and completes the reaction.',
          },
          {
            q: '[JEE Advanced] A coloured salt gives a blue bead in both the oxidising and the reducing flame. Name the metal and write the equation for the compound formed in the bead.',
            a: 'Cobalt; CoO + B<sub>2</sub>O<sub>3</sub> → Co(BO<sub>2</sub>)<sub>2</sub>.',
          },
          {
            q: '[JEE Advanced] B–F is 130 pm in BF<sub>3</sub>, about 138 pm in H<sub>3</sub>N→BF<sub>3</sub> and 143 pm in [BF<sub>4</sub>]<sup>−</sup>. Account for the trend.',
            a: 'In BF<sub>3</sub> boron is sp<sup>2</sup> with an empty 2p orbital that accepts back donation from fluorine, giving partial double-bond character (130 pm); in the adduct and [BF<sub>4</sub>]<sup>−</sup> boron is sp<sup>3</sup> with no empty orbital, so back bonding is lost and the bonds are single and longer.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 485–487 ─────────────────────────
  {
    n: 'D',
    title: 'Aluminium: Oxide, Hydroxide, Chloride and Alums',
    extra: true,
    kalam: 'Amphoterism means reacting as a base with acids and as an acid with bases.',
    blocks: [
      { t: 'part', title: 'D1 — Alumina and aluminium hydroxide: amphoterism in equations' },
      {
        t: 'p',
        html: 'Al<sub>2</sub>O<sub>3</sub> occurs as corundum (<i>α</i> form, very hard) and as the <i>γ</i> form; gem corundum is coloured by traces of other ions (ruby by chromium). Heating the hydroxide gives it: 2Al(OH)<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub>O. Amphoterism means reacting as a base with acids and as an acid with bases:',
      },
      {
        t: 'table',
        title: null,
        head: ['Species', 'With acid', 'With alkali'],
        rows: [
          [
            'Al<sub>2</sub>O<sub>3</sub>',
            'Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O',
            'Al<sub>2</sub>O<sub>3</sub> + 2NaOH + 3H<sub>2</sub>O → 2Na[Al(OH)<sub>4</sub>]',
          ],
          [
            'Al(OH)<sub>3</sub>',
            'Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O',
            'Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>]',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The aluminate Na[Al(OH)<sub>4</sub>] contains tetrahedral [Al(OH)<sub>4</sub>]<sup>−</sup>. Its acid character is weak: CO<sub>2</sub> reprecipitates the hydroxide, and so does boiling with ammonium chloride:<br>2Na[Al(OH)<sub>4</sub>] + CO<sub>2</sub> → 2Al(OH)<sub>3</sub>↓ + Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O<br>Na[Al(OH)<sub>4</sub>] + NH<sub>4</sub>Cl → Al(OH)<sub>3</sub>↓ + NaCl + NH<sub>3</sub> + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'This is also how strong alkali separates aluminium from iron in bauxite: Al<sub>2</sub>O<sub>3</sub> dissolves as aluminate while Fe<sub>2</sub>O<sub>3</sub>, not amphoteric, stays behind.',
      },

      { t: 'part', title: 'D2 — The oxide film, anodising and thermite' },
      {
        t: 'p',
        html: 'Aluminium is thermodynamically very reactive, yet stable in air and water because a thin tight film of oxide (10<sup>−4</sup> to 10<sup>−6</sup> mm) forms at once. Concentrated HNO<sub>3</sub> thickens it and <b>passivates</b> the metal (so the acid can be carried in aluminium containers); dilute HCl and alkalis dissolve the film and then the metal; if the film is removed (e.g. by amalgamating with mercury) the metal reacts with cold water. <b>Anodising</b> thickens the film deliberately (aluminium as anode in dilute H<sub>2</sub>SO<sub>4</sub>, giving about 10<sup>−2</sup> mm of oxide that absorbs dyes).',
      },
      {
        t: 'p',
        html: 'The enthalpy of formation of Al<sub>2</sub>O<sub>3</sub>, −1675.7 kJ mol<sup>−1</sup>, is, per oxygen atom (−558.6 kJ mol<sup>−1</sup>), much more negative than that of Fe<sub>2</sub>O<sub>3</sub> (−274.7 kJ mol<sup>−1</sup> per oxygen atom), so aluminium strips oxygen from oxides of less reactive metals (alumino-thermic reduction): Fe<sub>2</sub>O<sub>3</sub> + 2Al → Al<sub>2</sub>O<sub>3</sub> + 2Fe and Cr<sub>2</sub>O<sub>3</sub> + 2Al → Al<sub>2</sub>O<sub>3</sub> + 2Cr. For the iron reaction, with Δ<sub>f</sub><i>H</i>°(Fe<sub>2</sub>O<sub>3</sub>) = −824.2 kJ mol<sup>−1</sup>,<br>Δ<sub>r</sub><i>H</i>° = (−1675.7) − (−824.2) = −851.5 kJ mol<sup>−1</sup><br>so much heat that the mixture becomes white hot, which is why uncontrolled thermite fires are dangerous.',
      },

      { t: 'part', title: 'D3 — Anhydrous aluminium chloride' },
      {
        t: 'p',
        html: 'It is made dry: 2Al + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub> (or with dry HCl), or Al<sub>2</sub>O<sub>3</sub> + 3C + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub> + 3CO. It <b>cannot</b> be made by heating the hydrate AlCl<sub>3</sub>·6H<sub>2</sub>O, which hydrolyses and loses HCl, leaving the oxide.<br>• In the vapour and in non-polar solvents it is Al<sub>2</sub>Cl<sub>6</sub>: two chlorines bridge, each donating a lone pair to the neighbouring aluminium (ordinary two-centre, two-electron dative bonds, unlike the three-centre bridges of B<sub>2</sub>H<sub>6</sub>); each Al is four-coordinate with a complete octet.<br>• In water the dimer breaks up, because the hydration enthalpy of the small, highly charged Al<sup>3+</sup> is large: [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> and chloride ions form, and the solution is acidic.<br>• It is a Lewis acid, used to generate R<sup>+</sup> or RCO<sup>+</sup> in Friedel–Crafts reactions (forming [AlCl<sub>4</sub>]<sup>−</sup>).',
      },

      { t: 'part', title: 'D4 — Alums' },
      {
        t: 'p',
        html: 'Alums are double sulphates of general formula<br>M<sup>I</sup><sub>2</sub>SO<sub>4</sub>·M<sup>III</sup><sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·24H<sub>2</sub>O equivalently M<sup>I</sup>M<sup>III</sup>(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O<br>built from [M<sup>I</sup>(H<sub>2</sub>O)<sub>6</sub>]<sup>+</sup>, [M<sup>III</sup>(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> and two sulphate ions. M<sup>I</sup> may be Na<sup>+</sup>, K<sup>+</sup> or NH<sub>4</sub><sup>+</sup> (lithium sulphate is not known to form an alum); M<sup>III</sup> may be Al<sup>3+</sup>, but also Fe<sup>3+</sup> or Cr<sup>3+</sup>.',
      },
      {
        t: 'p',
        html: '• <b>Potash alum</b>, K<sub>2</sub>SO<sub>4</sub>·Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·24H<sub>2</sub>O, is made by adding K<sub>2</sub>SO<sub>4</sub> to Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> solution and crystallising.<br>• A double salt breaks into its ions in water, so the solution gives the reactions of K<sup>+</sup> (violet flame), Al<sup>3+</sup> (white gelatinous hydroxide, soluble in excess NaOH) and SO<sub>4</sub><sup>2−</sup> (white BaSO<sub>4</sub>). It is acidic.<br>• On heating it swells as it loses water of crystallisation (burnt alum); at red heat, K<sub>2</sub>SO<sub>4</sub>·Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> → K<sub>2</sub>SO<sub>4</sub> + Al<sub>2</sub>O<sub>3</sub> + 3SO<sub>3</sub>.<br>• Uses: coagulant in water purification, tanning, mordant in dyeing, styptic.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Thermite arithmetic',
        q: 'What mass of aluminium reduces 16.0 g of Fe<sub>2</sub>O<sub>3</sub>, and how much heat is released? (Al = 27, Fe = 56, O = 16; Δ<sub>r</sub><i>H</i>° = −851.5 kJ mol<sup>−1</sup> of reaction.)',
        steps: [
          '<i>n</i>(Fe<sub>2</sub>O<sub>3</sub>) = 16.0/160 = 0.100 mol. The 1 ∶ 2 ratio gives <i>n</i>(Al) = 0.200 mol, so <i>m</i> = 5.40 g.',
          'Heat = 0.100 × 851.5',
        ],
        ans: '5.40 g of aluminium; about 85 kJ (85.15 kJ, or 85.2 kJ to three significant figures).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Potash alum and barium chloride',
        q: '47.4 g of KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O is dissolved in water and excess BaCl<sub>2</sub> is added. Find the mass of BaSO<sub>4</sub> precipitated and the moles of ions the alum gives on dissolving (each hydrated cation counted as one ion). (K = 39, Al = 27, S = 32, O = 16, H = 1, Ba = 137.)',
        steps: [
          '<i>M</i> = 39 + 27 + 2(96) + 12(18) = 474 g mol<sup>−1</sup>, so <i>n</i> = 0.100 mol. Two sulphate ions per formula unit: <i>n</i>(BaSO<sub>4</sub>) = 0.200 mol, <i>m</i> = 0.200 × 233',
          'Ions per formula unit: K<sup>+</sup>, Al<sup>3+</sup>, 2SO<sub>4</sub><sup>2−</sup> = 4.',
        ],
        ans: '46.6 g of BaSO<sub>4</sub>; 0.400 mol of ions.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write equations that show Al(OH)<sub>3</sub> is amphoteric.',
            a: 'Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O (as a base); Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>] (as an acid).',
          },
          {
            q: '[JEE Main] Aluminium carbide is hydrolysed, Al<sub>4</sub>C<sub>3</sub> + 12H<sub>2</sub>O → 4Al(OH)<sub>3</sub> + 3CH<sub>4</sub>. What volume of methane at 273 K and 1 atm comes from 14.4 g of Al<sub>4</sub>C<sub>3</sub>? (Al = 27, C = 12.)',
            a: '<i>M</i>(Al<sub>4</sub>C<sub>3</sub>) = 144, <i>n</i> = 0.100 mol; <i>n</i>(CH<sub>4</sub>) = 0.300 mol; <i>V</i> = 0.300 × 22.4 = 6.72 L.',
          },
          {
            q: '[JEE Advanced] Lithium sulphate does not form an alum. Why might this be, and why do alums include iron and chromium compounds?',
            a: 'Lithium sulphate is not known to form an alum, whereas Na<sup>+</sup>, K<sup>+</sup> and NH<sub>4</sub><sup>+</sup> do (the small size of Li<sup>+</sup> is the usual explanation). Alums are isomorphous double sulphates, and any trivalent ion that can sit in the octahedral [M(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> position fits the lattice, so Fe<sup>3+</sup> and Cr<sup>3+</sup> give iron and chrome alums as well as Al<sup>3+</sup>.',
          },
        ],
      },
    ],
  },
];
