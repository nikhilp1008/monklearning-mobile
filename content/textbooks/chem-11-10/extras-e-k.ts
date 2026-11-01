import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional Topics E to K, word for word from the Class 11
 * Chemistry Master Reference:
 * - E Allotropes of Carbon: Structure to Property (pp. 487–490). Its
 *   Figures 5 and 6 (graphite; tetrahedral carbon in diamond) are
 *   c11-10-E-d1 and c11-10-E-d2; the captions belong to the diagrams.
 * - F Carbon Monoxide, Carbon Dioxide and the Carbonates (pp. 490–492)
 * - G Silicon: Silica, Silicates, Silicones and Zeolites (pp. 492–495). Its
 *   Figures 7 and 8 (the silicate anions; the SiO4 tetrahedron and the SiO2
 *   network) are c11-10-G-d1 and c11-10-G-d2.
 * - H Tin and Lead: Compounds the Papers Name (pp. 495–497)
 * - I Which Is Stronger, Which Is More Stable: The Reasoning Rules
 *   (pp. 497–499)
 * - J Summary Checklist (p. 499), kept as its own short Additional topic.
 * - K, the book's "Addendum P — What JEE and NEET Actually Ask"
 *   (pp. 500–502), kept as the last Additional topic.
 * Each addendum prints its practice answers right after its questions. Each
 * answer is set with its own question.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic E · pp. 487–490 ─────────────────────────
  {
    n: 'E',
    title: 'Allotropes of Carbon: Structure to Property',
    extra: true,
    kalam: 'Diamond’s hardness and high melting point belong to the whole lattice: melting means breaking directional covalent bonds in three dimensions.',
    blocks: [
      { t: 'part', title: 'E1 — The comparison table' },
      {
        t: 'table',
        title: null,
        head: ['', 'Diamond', 'Graphite', 'Fullerene C<sub>60</sub>'],
        rows: [
          ['Hybridisation of C', 'sp<sup>3</sup>', 'sp<sup>2</sup>', 'sp<sup>2</sup>'],
          [
            'Structure',
            'rigid 3D network, each C tetrahedrally bonded to four C',
            'planar hexagonal layers held by van der Waals forces, 340 pm apart',
            'closed cage of 20 hexagons and 12 pentagons; discrete molecules',
          ],
          ['C–C length', '154 pm', '141.5 pm within a layer', '143.5 pm and 138.3 pm'],
          ['Δ<sub>f</sub><i>H</i>° / kJ mol<sup>−1</sup>', 'about +1.9', '0 (reference state)', '+38.1 per mol C (above graphite)'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Diamond:</b> density 3.51 g cm<sup>−3</sup>; non-conductor (no mobile electrons); the hardest natural substance; used as an abrasive and in cutting tools, and as a gemstone (1 carat = 200 mg).<br>• <b>Graphite:</b> density 2.22 g cm<sup>−3</sup>; conducts along the layers (delocalised π electrons); soft and slippery; used as a dry lubricant, for electrodes and crucibles, and in lightweight composites.<br>• <b>Fullerenes:</b> NCERT calls them the only pure form of carbon, because a closed cage has a smooth structure with no dangling bonds. C<sub>60</sub> is the soccer-ball molecule (buckminsterfullerene).',
      },
      { t: 'fig', id: 'c11-10-E-d1' },
      { t: 'fig', id: 'c11-10-E-d2' },
      {
        t: 'p',
        html: '<b>Reading the table.</b> Diamond’s hardness and high melting point belong to the whole lattice: melting means breaking directional covalent bonds in three dimensions. In graphite the fourth electron of each carbon is in a π cloud over the sheet, so conduction is easy along a layer and poor across layers. Graphite is less dense than diamond (layers 340 pm apart) yet more stable: C(graphite) → C(diamond) has Δ<sub>r</sub><i>H</i>° ≈ +1.9 kJ mol<sup>−1</sup>, so burning diamond releases slightly more heat, −393.5 − 1.9 = −395.4 kJ mol<sup>−1</sup>. Carbon black, charcoal and coke are impure forms rather than separate allotropes.',
      },

      { t: 'part', title: 'E2 — Counting in the fullerene cage' },
      {
        t: 'p',
        html: 'Each C in C<sub>60</sub> makes three σ bonds and has one electron left for π bonding. This fixes every standard count.',
      },
      {
        t: 'table',
        title: null,
        head: ['Question', 'Working', 'Result'],
        rows: [
          ['σ bonds', '60 × 3/2 (each bond shared by two C)', '90'],
          ['π bonds', 'one π electron on each of 60 C, paired in a Kekulé structure: 60/2', '30'],
          ['Single and double bonds', '30 double (138.3 pm) among the 90 bonds', '60 single (143.5 pm), 30 double'],
          ['Pentagons', 'the same 12 in every fullerene', '12'],
          ['Hexagons in C<sub><i>n</i></sub>', '<i>n</i>/2 − 10', '20 for C<sub>60</sub>; 25 for C<sub>70</sub>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Euler check for C<sub>60</sub>:</b> vertices 60, edges 90, faces 12 + 20 = 32; 60 − 90 + 32 = 2 as required for any closed polyhedron.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Atoms in a diamond',
        q: 'How many carbon atoms are in a 1.00 carat diamond (1 carat = 200 mg), assuming it is pure carbon? (C = 12, <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup>.)',
        steps: ['<i>n</i> = 0.200/12 = 0.01667 mol, so <i>N</i> = 0.01667 × 6.022 × 10<sup>23</sup>'],
        ans: '1.00 × 10<sup>22</sup> atoms.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Calculate the number of σ and π bonds in C<sub>60</sub>.',
            a: '90 σ and 30 π bonds.',
          },
          {
            q: '[JEE Main] How many hexagonal and pentagonal faces has C<sub>70</sub>?',
            a: '12 pentagons and 70/2 − 10 = 25 hexagons (check: 70 − 105 + 37 = 2).',
          },
          {
            q: '[JEE Advanced] Graphite conducts electricity but diamond does not, although both are pure carbon. Explain, and say in which direction graphite conducts.',
            a: 'In graphite each carbon is sp<sup>2</sup> and its fourth electron sits in a delocalised π system over the layer, giving mobile charge carriers; conduction is along the layers. In diamond all four valence electrons of each carbon are in localised σ bonds, so none is free to move.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 490–492 ─────────────────────────
  {
    n: 'F',
    title: 'Carbon Monoxide, Carbon Dioxide and the Carbonates',
    extra: true,
    kalam: 'Carbon monoxide, from incomplete combustion, is the poisonous gas in vehicle exhaust.',
    blocks: [
      { t: 'part', title: 'F1 — The two oxides side by side' },
      {
        t: 'table',
        title: null,
        head: ['', 'CO', 'CO<sub>2</sub>'],
        rows: [
          [
            'Laboratory preparation',
            'dehydration of formic acid with conc. H<sub>2</sub>SO<sub>4</sub> at 373 K:<br>HCOOH → CO + H<sub>2</sub>O',
            'CaCO<sub>3</sub> with dilute HCl:<br>CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O',
          ],
          [
            'Industrial source',
            'water gas (CO + H<sub>2</sub>, steam on hot coke); producer gas (CO + N<sub>2</sub>, air on hot coke)',
            'combustion of carbon fuels; heating limestone',
          ],
          ['Bonding', ':C≡O:, one σ and two π, lone pair on C', 'O=C=O, C is sp, linear, 115 pm, no dipole'],
          ['Nature', 'neutral', 'acidic; with water gives diprotic H<sub>2</sub>CO<sub>3</sub>'],
          [
            'Chief hazard or role',
            'binds haemoglobin (about 300 times more strongly than O<sub>2</sub>); poison',
            'not poisonous; greenhouse gas',
          ],
          ['Characteristic chemistry', 'reducing agent; σ-donor to metals (carbonyls)', 'acidic oxide; reacts with lime water'],
        ],
      },
      {
        t: 'p',
        html: 'The carbon–oxygen bond lengths follow bond order: CO (order 3) < CO<sub>2</sub> (order 2) < CO<sub>3</sub><sup>2−</sup> (order 4/3, from three equivalent resonance forms). The correct increasing order of C–O bond length is therefore CO < CO<sub>2</sub> < CO<sub>3</sub><sup>2−</sup>.',
      },

      { t: 'part', title: 'F2 — Enthalpy arithmetic with the NCERT table values' },
      {
        t: 'p',
        html: 'With Δ<sub>f</sub><i>H</i>° in kJ mol<sup>−1</sup>: CO(g) −110.5, CO<sub>2</sub>(g) −393.5, Fe<sub>2</sub>O<sub>3</sub>(s) −824.2, CaO(s) −635.1, CaCO<sub>3</sub>(s) −1206.9.<br>• <b>Burning carbon monoxide:</b> CO + ½O<sub>2</sub> → CO<sub>2</sub>, Δ<sub>r</sub><i>H</i>° = −393.5 − (−110.5) = −283.0 kJ mol<sup>−1</sup> — why water gas and producer gas are fuels.<br>• <b>Reducing iron ore:</b> Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>, Δ<sub>r</sub><i>H</i>° = 3(−393.5) − (−824.2) − 3(−110.5) = −24.8 kJ mol<sup>−1</sup> — mildly exothermic.<br>• <b>Heating (calcining) limestone:</b> CaCO<sub>3</sub> → CaO + CO<sub>2</sub>, Δ<sub>r</sub><i>H</i>° = −635.1 − 393.5 + 1206.9 = +178.3 kJ mol<sup>−1</sup> — endothermic, and it releases one mole of CO<sub>2</sub> per mole of lime, whatever the fuel.',
      },

      { t: 'part', title: 'F3 — Carbonates and hydrogencarbonates' },
      {
        t: 'table',
        title: null,
        head: ['Test or behaviour', 'Carbonate CO<sub>3</sub><sup>2−</sup>', 'Hydrogencarbonate HCO<sub>3</sub><sup>−</sup>'],
        rows: [
          [
            'Add MgSO<sub>4</sub> solution in the cold',
            'white precipitate of MgCO<sub>3</sub> at once',
            'no precipitate; a white precipitate appears on heating',
          ],
          [
            'Action of heat (alkali metal salts)',
            'stable (except Li<sub>2</sub>CO<sub>3</sub>)',
            'decomposes: 2NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub>',
          ],
          ['Action of dilute acid', 'effervescence of CO<sub>2</sub>', 'effervescence of CO<sub>2</sub>'],
        ],
      },
      {
        t: 'p',
        html: 'Other metal carbonates decompose on heating to the oxide and CO<sub>2</sub> (e.g. ZnCO<sub>3</sub> → ZnO + CO<sub>2</sub>). Lime water turns milky with CO<sub>2</sub>, Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O, and the milkiness disappears with excess CO<sub>2</sub>, because soluble calcium hydrogencarbonate forms: CaCO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub> → Ca(HCO<sub>3</sub>)<sub>2</sub>.',
      },

      { t: 'part', title: 'F4 — The environmental side' },
      {
        t: 'p',
        html: 'Carbon dioxide, about 0.03–0.04% of the atmosphere by volume, is removed by photosynthesis, 6CO<sub>2</sub> + 12H<sub>2</sub>O →<sup>chlorophyll</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> + 6H<sub>2</sub>O. Burning fossil fuels and decomposing limestone for cement add to it, strengthening the greenhouse effect and raising the average temperature of the atmosphere. Carbon monoxide, from incomplete combustion, is the poisonous gas in vehicle exhaust. Solid CO<sub>2</sub> (dry ice, from rapid expansion of liquefied gas) is a refrigerant; gaseous CO<sub>2</sub> carbonates soft drinks, extinguishes fires (it is heavy and does not support combustion) and is used to make urea.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Why water gas is made in pulses',
        q: 'Water gas is made by passing steam over red-hot coke, C(s) + H<sub>2</sub>O(g) → CO(g) + H<sub>2</sub>(g). Using Δ<sub>f</sub><i>H</i>°(CO) = −110.53 and Δ<sub>f</sub><i>H</i>°(H<sub>2</sub>O, g) = −241.82 kJ mol<sup>−1</sup>, find Δ<sub>r</sub><i>H</i>° and explain why the steam is alternated with a blast of air.',
        steps: [
          'Δ<sub>r</sub><i>H</i>° = (−110.53 + 0) − (0 − 241.82) = +131.29 kJ mol<sup>−1</sup>: the reaction is endothermic, so the coke bed cools as steam passes. Admitting air burns some coke (C + O<sub>2</sub> → CO<sub>2</sub>, strongly exothermic) and reheats the bed before steam is readmitted.',
        ],
        ans: '+131.3 kJ mol<sup>−1</sup>; the air blast restores the heat that the endothermic water-gas reaction removes.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the gaseous fuels formed when steam and when air are passed over red-hot coke, and state their compositions.',
            a: 'Steam gives water gas, CO + H<sub>2</sub>; air gives producer gas, CO + N<sub>2</sub>.',
          },
          {
            q: '[JEE Main] A solution gives a white precipitate with MgSO<sub>4</sub> only after heating. Which ion is present?',
            a: 'Hydrogencarbonate: Mg(HCO<sub>3</sub>)<sub>2</sub> is soluble in the cold and decomposes on heating to precipitate MgCO<sub>3</sub>.',
          },
          {
            q: '[JEE Main] Calculate Δ<sub>r</sub><i>H</i>° for CO + ½O<sub>2</sub> → CO<sub>2</sub> from Δ<sub>f</sub><i>H</i>°(CO) = −110.5 and Δ<sub>f</sub><i>H</i>°(CO<sub>2</sub>) = −393.5 kJ mol<sup>−1</sup>.',
            a: '−393.5 − (−110.5) = −283.0 kJ mol<sup>−1</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 492–495 ─────────────────────────
  {
    n: 'G',
    title: 'Silicon: Silica, Silicates, Silicones and Zeolites',
    extra: true,
    kalam: 'Hydrolysis of a chlorosilane gives silanols, which condense by losing water; the number of Si–Cl bonds decides the shape of the polymer.',
    blocks: [
      { t: 'part', title: 'G1 — Silicate structure as a corner-counting rule' },
      {
        t: 'p',
        html: 'Every silicate is built from the SiO<sub>4</sub> tetrahedron joined to others through shared corner oxygens. Let <i>s</i> be the number of corners each tetrahedron shares. A shared oxygen bridges two silicons and carries no residual charge; each unshared corner is a terminal O<sup>−</sup>. So each silicon has 4 − <i>s</i> terminal O<sup>−</sup> and <i>s</i> half-shared oxygens:',
      },
      {
        t: 'formula',
        kicker: 'Silicate rule',
        main: 'formula unit SiO<sub>4−<i>s</i>/2</sub><br>charge per Si = −(4 − <i>s</i>)',
        legend: ['<i>s</i> = number of corners each tetrahedron shares'],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Type', '<i>s</i>', 'Anion', 'Charge per Si', 'Examples'],
        rows: [
          ['Ortho (discrete)', '0', 'SiO<sub>4</sub><sup>4−</sup>', '−4', 'forsterite Mg<sub>2</sub>SiO<sub>4</sub>, zircon ZrSiO<sub>4</sub>'],
          ['Pyro (two units)', '1', 'Si<sub>2</sub>O<sub>7</sub><sup>6−</sup>', '−3', 'thortveitite Sc<sub>2</sub>Si<sub>2</sub>O<sub>7</sub>'],
          [
            'Cyclic',
            '2',
            '(SiO<sub>3</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>, e.g. Si<sub>3</sub>O<sub>9</sub><sup>6−</sup>, Si<sub>6</sub>O<sub>18</sub><sup>12−</sup>',
            '−2',
            'benitoite BaTiSi<sub>3</sub>O<sub>9</sub>, beryl Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>',
          ],
          [
            'Single chain',
            '2',
            '(SiO<sub>3</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>',
            '−2',
            'spodumene LiAl(SiO<sub>3</sub>)<sub>2</sub>, enstatite MgSiO<sub>3</sub>',
          ],
          ['Double chain', '2 and 3 (mean 2.5)', '(Si<sub>4</sub>O<sub>11</sub>)<sub><i>n</i></sub><sup>6<i>n</i>−</sup>', '−1.5', 'amphiboles, e.g. tremolite (asbestos)'],
          ['Sheet', '3', '(Si<sub>2</sub>O<sub>5</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>', '−1', 'talc, kaolin, micas'],
          ['3D framework', '4', 'SiO<sub>2</sub>', '0', 'quartz, tridymite, cristobalite'],
        ],
      },
      {
        t: 'p',
        html: 'In a double chain two of every four tetrahedra share two corners and two share three, so four silicons carry 4(4) − 10 = 6 units of negative charge: Si<sub>4</sub>O<sub>11</sub><sup>6−</sup>.',
      },
      { t: 'fig', id: 'c11-10-G-d1' },

      { t: 'part', title: 'G2 — Aluminosilicates and zeolites' },
      {
        t: 'p',
        html: 'Replacing Si<sup>4+</sup> by Al<sup>3+</sup> in a 3D silica framework leaves one unit of negative charge on the framework, balanced by Na<sup>+</sup>, K<sup>+</sup> or Ca<sup>2+</sup> in the cavities: one Si in four replaced gives [AlSi<sub>3</sub>O<sub>8</sub>]<sup>−</sup> (orthoclase K[AlSi<sub>3</sub>O<sub>8</sub>], albite Na[AlSi<sub>3</sub>O<sub>8</sub>]); one in two gives [Al<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>]<sup>2−</sup> (anorthite Ca[Al<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>]). Zeolites have a far more open framework, with channels of uniform size, and serve as <b>ion exchangers</b> (2NaZ + Ca<sup>2+</sup> → CaZ<sub>2</sub> + 2Na<sup>+</sup> softens hard water; strong brine regenerates them), <b>molecular sieves</b> (small molecules enter the pores, larger ones are excluded, so straight-chain hydrocarbons can be separated from branched ones) and <b>shape-selective catalysts</b> (ZSM-5 converts alcohols to gasoline-range hydrocarbons; zeolites crack and isomerise hydrocarbons).',
      },

      { t: 'part', title: 'G3 — Silicon, silica and their reactions' },
      {
        t: 'p',
        html: '• <b>Silicon</b> is made by reducing silica: SiO<sub>2</sub> + 2Mg → Si + 2MgO (amorphous) or SiO<sub>2</sub> + 2C → Si + 2CO; ultrapure silicon comes from reducing SiCl<sub>4</sub> (SiCl<sub>4</sub> + 2Mg → Si + 2MgCl<sub>2</sub>) and zone refining. Doping with boron (electron-deficient) gives p-type silicon, with arsenic (electron-rich) n-type.<br>• <b>Silica is acidic:</b> it dissolves in hot concentrated alkali and reacts with molten carbonate, SiO<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> → Na<sub>2</sub>SiO<sub>3</sub> + CO<sub>2</sub>; HF gives SiF<sub>4</sub> and, with more HF, H<sub>2</sub>SiF<sub>6</sub> (so HF etches glass). Acidifying sodium silicate (water glass) deposits gelatinous silicic acid, which dries to silica gel: Na<sub>2</sub>SiO<sub>3</sub> + 2HCl → 2NaCl + H<sub>2</sub>SiO<sub>3</sub>.<br>• <b>Carborundum</b> (SiC), from SiO<sub>2</sub> + 3C → SiC + 2CO at about 2000 °C in an electric furnace, has a diamond-like structure and is very hard and inert.<br>• SiCl<sub>4</sub> hydrolyses completely, SiCl<sub>4</sub> + 4H<sub>2</sub>O → Si(OH)<sub>4</sub> + 4HCl; the silicic acid condenses to hydrated silica and gives SiO<sub>2</sub> on heating.',
      },
      { t: 'fig', id: 'c11-10-G-d2' },

      { t: 'part', title: 'G4 — Silicones: functionality and chain length' },
      {
        t: 'p',
        html: 'Hydrolysis of a chlorosilane gives silanols, which condense by losing water; the number of Si–Cl bonds decides the shape of the polymer.',
      },
      {
        t: 'table',
        title: null,
        head: ['Chlorosilane', 'Si–Cl bonds', 'Role'],
        rows: [
          ['(CH<sub>3</sub>)<sub>3</sub>SiCl', '1', 'chain stopper (caps a chain end)'],
          ['(CH<sub>3</sub>)<sub>2</sub>SiCl<sub>2</sub>', '2', 'chain builder: linear [(CH<sub>3</sub>)<sub>2</sub>SiO]<sub><i>n</i></sub>'],
          ['CH<sub>3</sub>SiCl<sub>3</sub>', '3', 'cross-link or branch point'],
          ['SiCl<sub>4</sub>', '4', 'full silica-like network'],
        ],
      },
      {
        t: 'p',
        html: 'For an ideal linear polymer with every end capped, <i>n</i> = (mol (CH<sub>3</sub>)<sub>2</sub>SiCl<sub>2</sub>)/(½ mol (CH<sub>3</sub>)<sub>3</sub>SiCl), since each chain needs two caps.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Silicone chain length',
        q: 'A mixture of 98 mol (CH<sub>3</sub>)<sub>2</sub>SiCl<sub>2</sub> and 2 mol (CH<sub>3</sub>)<sub>3</sub>SiCl is hydrolysed and condensed completely. How many (CH<sub>3</sub>)<sub>2</sub>Si units does an average chain contain, and how many moles of HCl are liberated?',
        steps: [
          'Two moles of chain stopper cap two chain ends, i.e. one mole of chains: 98/1 = 98 units per chain. Each Si–Cl bond gives one HCl: 98 × 2 + 2 × 1',
        ],
        ans: '98 units per chain; 198 mol of HCl.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Aluminosilicate charge',
        q: 'Natrolite is Na<sub>2</sub>[Al<sub>2</sub>Si<sub>3</sub>O<sub>10</sub>]·2H<sub>2</sub>O. Show that the framework charge balances the sodium.',
        steps: ['Framework: 2(+3) + 3(+4) + 10(−2) = 6 + 12 − 20 = −2; two Na<sup>+</sup> supply +2.'],
        ans: 'Framework −2, balanced by two Na<sup>+</sup>; the water molecules are neutral.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] How many corners are shared in a sheet silicate, and what is its empirical unit?',
            a: 'Three corners per tetrahedron; (Si<sub>2</sub>O<sub>5</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>.',
          },
          {
            q: '[JEE Main] Calculate the charge on Si<sub>3</sub>O<sub>9</sub> (a ring of three tetrahedra). Which chlorosilane, R<sub>3</sub>SiCl, R<sub>2</sub>SiCl<sub>2</sub> or RSiCl<sub>3</sub>, gives a cross-linked silicone?',
            a: 'Each tetrahedron shares two corners, so 3 × (−2) = −6: Si<sub>3</sub>O<sub>9</sub><sup>6−</sup>. RSiCl<sub>3</sub> (three Si–Cl bonds) gives the cross-linked polymer; R<sub>3</sub>SiCl only caps chain ends.',
          },
          {
            q: '[JEE Advanced] What is the framework charge of Ca[Al<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>], and of a framework made by replacing one Si in four by Al?',
            a: '[Al<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>]<sup>2−</sup>, balanced by Ca<sup>2+</sup>; one Si in four replaced gives [AlSi<sub>3</sub>O<sub>8</sub>]<sup>−</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 495–497 ─────────────────────────
  {
    n: 'H',
    title: 'Tin and Lead: Compounds the Papers Name',
    extra: true,
    kalam: 'Tin(II) is oxidised to the more stable tin(IV), passing two electrons.',
    blocks: [
      { t: 'part', title: 'H1 — Tin' },
      {
        t: 'p',
        html: 'Tin occurs mainly as cassiterite, SnO<sub>2</sub>. White tin is stable at ordinary temperature; at low temperature it changes to brittle grey tin, which is less dense (about 5.7 against 7.3 g cm<sup>−3</sup>, a volume increase of about a quarter), so the metal crumbles (“tin plague”). Tin resists water and organic acids (hence tinning of food vessels), dissolves in HCl and hot alkali, and is oxidised by concentrated HNO<sub>3</sub> to hydrated SnO<sub>2</sub> (metastannic acid), not to a nitrate.',
      },
      {
        t: 'p',
        html: '<b>Tin(II) chloride, SnCl<sub>2</sub>, the reducing agent.</b> Tin(II) is oxidised to the more stable tin(IV), passing two electrons:<br>• 2HgCl<sub>2</sub> + SnCl<sub>2</sub> → Hg<sub>2</sub>Cl<sub>2</sub>↓ + SnCl<sub>4</sub> (white precipitate), then with excess SnCl<sub>2</sub>, Hg<sub>2</sub>Cl<sub>2</sub> + SnCl<sub>2</sub> → 2Hg + SnCl<sub>4</sub> (grey);<br>• 2FeCl<sub>3</sub> + SnCl<sub>2</sub> → 2FeCl<sub>2</sub> + SnCl<sub>4</sub> and 2CuCl<sub>2</sub> + SnCl<sub>2</sub> → 2CuCl + SnCl<sub>4</sub>;<br>• SnCl<sub>2</sub> + 2HCl + I<sub>2</sub> → SnCl<sub>4</sub> + 2HI (iodine decolourised);<br>• C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + 3SnCl<sub>2</sub> + 6HCl → C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + 3SnCl<sub>4</sub> + 2H<sub>2</sub>O (nitro to amino).',
      },
      {
        t: 'p',
        html: 'SnCl<sub>2</sub> is met as the dihydrate; heating it gives the hydrolysis product Sn(OH)Cl (acid suppresses this), not the anhydrous salt. SnCl<sub>4</sub> is a covalent fuming liquid that hydrolyses in water and, with HCl, forms H<sub>2</sub>SnCl<sub>6</sub> (the [SnCl<sub>6</sub>]<sup>2−</sup> ion uses tin’s d orbitals). SnO and SnO<sub>2</sub> are both amphoteric: SnO + 2HCl → SnCl<sub>2</sub> + H<sub>2</sub>O; SnO + 2NaOH → Na<sub>2</sub>SnO<sub>2</sub> + H<sub>2</sub>O (stannite); SnO<sub>2</sub> + 2NaOH → Na<sub>2</sub>SnO<sub>3</sub> + H<sub>2</sub>O (stannate).',
      },

      { t: 'part', title: 'H2 — Lead' },
      {
        t: 'p',
        html: 'Lead occurs mainly as galena, PbS; it is soft, and as the chapter notes it shows essentially no catenation. Dilute HCl and H<sub>2</sub>SO<sub>4</sub> hardly attack it, because a coat of insoluble PbCl<sub>2</sub> or PbSO<sub>4</sub> forms; nitric acid is the best solvent, because lead nitrate is soluble: 3Pb + 8HNO<sub>3</sub>(dil.) → 3Pb(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O. Soft, air-containing water slowly dissolves lead (plumbosolvency); carbonates, sulphates and phosphates in the water form a protective film, so lead water pipes are less hazardous in hard water.',
      },
      {
        t: 'defgrid',
        title: 'Compound — Facts',
        rows: [
          {
            k: 'PbO (litharge)',
            v: 'amphoteric: PbO + 2HNO<sub>3</sub> → Pb(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O;<br>PbO + 2NaOH → Na<sub>2</sub>PbO<sub>2</sub> + H<sub>2</sub>O',
          },
          {
            k: 'Pb<sub>3</sub>O<sub>4</sub> (red lead)',
            v: '2PbO·PbO<sub>2</sub> (+2, +2, +4); from 6PbO + O<sub>2</sub> → 2Pb<sub>3</sub>O<sub>4</sub> on heating in air',
          },
          {
            k: 'PbO<sub>2</sub>',
            v: 'strong oxidant: PbO<sub>2</sub> + 4HCl → PbCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O; PbO<sub>2</sub> + SO<sub>2</sub> → PbSO<sub>4</sub>',
          },
          { k: 'PbCl<sub>2</sub>', v: 'white; <b>soluble in hot water</b>' },
          { k: 'PbI<sub>2</sub>', v: 'yellow: PbCl<sub>2</sub> + 2NaI → PbI<sub>2</sub> + 2NaCl' },
          { k: 'PbCrO<sub>4</sub>, PbS', v: 'chrome yellow; black' },
          {
            k: 'Pb(NO<sub>3</sub>)<sub>2</sub>',
            v: 'on heating: 2Pb(NO<sub>3</sub>)<sub>2</sub> → 2PbO + 4NO<sub>2</sub> + O<sub>2</sub> (brown fumes)',
          },
          {
            k: '(CH<sub>3</sub>COO)<sub>2</sub>Pb; 2PbCO<sub>3</sub>·Pb(OH)<sub>2</sub>',
            v: 'sugar of lead (sweet, poisonous); white lead (blackened by H<sub>2</sub>S)',
          },
        ],
      },
      {
        t: 'p',
        html: 'The composition of red lead is proved by nitric acid, which dissolves the PbO part as nitrate and leaves brown PbO<sub>2</sub>: Pb<sub>3</sub>O<sub>4</sub> + 4HNO<sub>3</sub> → 2Pb(NO<sub>3</sub>)<sub>2</sub> + PbO<sub>2</sub>↓ + 2H<sub>2</sub>O. With hot concentrated HCl red lead behaves as an oxidant through its PbO<sub>2</sub> part: Pb<sub>3</sub>O<sub>4</sub> + 8HCl → 3PbCl<sub>2</sub> + 4H<sub>2</sub>O + Cl<sub>2</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Tin(II) chloride required',
        q: 'What mass of SnCl<sub>2</sub> reduces 0.100 mol of HgCl<sub>2</sub> completely to mercury? (Sn = 119, Cl = 35.5.)',
        steps: [
          'Overall HgCl<sub>2</sub> + SnCl<sub>2</sub> → Hg + SnCl<sub>4</sub>: Hg(II) gains two electrons and Sn(II) gives two, so the ratio is 1 : 1. <i>n</i>(SnCl<sub>2</sub>) = 0.100 mol; <i>M</i> = 119 + 71 = 190 g mol<sup>−1</sup>.',
        ],
        ans: '19.0 g.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Red lead and nitric acid',
        q: '68.5 g of red lead is treated with excess dilute nitric acid. Find the mass of brown PbO<sub>2</sub> formed and the average oxidation state of lead in Pb<sub>3</sub>O<sub>4</sub>. (Pb = 207, O = 16.)',
        steps: [
          '<i>M</i>(Pb<sub>3</sub>O<sub>4</sub>) = 3(207) + 4(16) = 685 g mol<sup>−1</sup>, so <i>n</i> = 0.100 mol. One mole of Pb<sub>3</sub>O<sub>4</sub> gives one mole of PbO<sub>2</sub> (<i>M</i> = 239): mass = 0.100 × 239. Average oxidation state: (2+2+4)/3, from two Pb(II) and one Pb(IV).',
        ],
        ans: '23.9 g of PbO<sub>2</sub>; average oxidation state +8/3.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which of SnCl<sub>2</sub> and PbCl<sub>4</sub> is a reducing agent, and which an oxidising agent?',
            a: 'SnCl<sub>2</sub> reduces (Sn(II) goes to the more stable Sn(IV)); PbCl<sub>4</sub> oxidises (Pb(IV) goes to the more stable Pb(II), releasing Cl<sub>2</sub>).',
          },
          {
            q: '[JEE Main] A white precipitate dissolves in hot water, and the solution gives a yellow precipitate with sodium iodide. Identify both.',
            a: 'PbCl<sub>2</sub> (soluble in hot water) and PbI<sub>2</sub>.',
          },
          {
            q: '[JEE Advanced] Why does lead dissolve readily in dilute nitric acid but hardly at all in dilute sulphuric acid?',
            a: 'Lead nitrate is soluble, so nitric acid keeps exposing fresh metal; sulphuric acid forms a coat of insoluble PbSO<sub>4</sub> that protects the metal.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic I · pp. 497–499 ─────────────────────────
  {
    n: 'I',
    title: 'Which Is Stronger, Which Is More Stable: The Reasoning Rules',
    extra: true,
    kalam: 'Most group 13 and 14 questions ask for a comparison.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Most group 13 and 14 questions ask for a comparison. Six rules, each with its data, cover nearly all of them.',
      },

      { t: 'part', title: 'I1 — The six rules' },
      {
        t: 'table',
        title: null,
        head: ['Rule', 'Statement', 'Applied'],
        rows: [
          [
            '1. Lewis acidity',
            'Across BX<sub>3</sub>, back bonding decides: strength rises F → I. For one halogen, NCERT’s rule is that it falls down the group as the central atom grows.',
            'BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>',
          ],
          [
            '2. Oxide character',
            'Higher oxidation state: more acidic. Down a group: more basic.',
            'B<sub>2</sub>O<sub>3</sub> acidic; Al<sub>2</sub>O<sub>3</sub>, Ga<sub>2</sub>O<sub>3</sub> amphoteric; In<sub>2</sub>O<sub>3</sub>, Tl<sub>2</sub>O<sub>3</sub> basic. CO<sub>2</sub>, SiO<sub>2</sub>, GeO<sub>2</sub> acidic; SnO<sub>2</sub>, PbO<sub>2</sub> amphoteric. CO neutral; GeO acidic; SnO, PbO amphoteric',
          ],
          [
            '3. Stable oxidation state',
            'Light members favour the group state (+3, +4); heavy ones favour two units lower (+1, +2).',
            'GeX<sub>4</sub> > GeX<sub>2</sub> but PbX<sub>2</sub> > PbX<sub>4</sub> (PbI<sub>4</sub> does not exist); Tl<sup>+</sup> over Tl<sup>3+</sup>. Dihalide stability rises down group 14',
          ],
          [
            '4. Redox strength',
            'The unstable high state of a heavy element oxidises; the unstable low state of a lighter element reduces.',
            'Tl(III), Pb(IV) oxidise (PbO<sub>2</sub>, Pb<sub>3</sub>O<sub>4</sub>); Sn(II), Ge(II) reduce (SnCl<sub>2</sub>)',
          ],
          [
            '5. Hydrolysis',
            'A halide whose centre has an empty orbital (p on B, d on Si, Sn) is attacked by water; CCl<sub>4</sub> has none.',
            'BCl<sub>3</sub>, SiCl<sub>4</sub>, SnCl<sub>4</sub>, AlCl<sub>3</sub> hydrolyse; CCl<sub>4</sub> does not',
          ],
          [
            '6. Bond length',
            'Higher bond order, shorter bond; lost back bonding lengthens.',
            'CO < CO<sub>2</sub> < CO<sub>3</sub><sup>2−</sup>; B–F 130 pm in BF<sub>3</sub>, 143 pm in [BF<sub>4</sub>]<sup>−</sup>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Complex ions.</b> A heavier group 14 element can use d orbitals to exceed four-coordination, so [SiF<sub>6</sub>]<sup>2−</sup>, [GeCl<sub>6</sub>]<sup>2−</sup> and [Sn(OH)<sub>6</sub>]<sup>2−</sup> exist (sp<sup>3</sup>d<sup>2</sup>), but [CF<sub>6</sub>]<sup>2−</sup> does not. Hexafluorosilicate forms when SiO<sub>2</sub> or glass dissolves in HF. Boron stops at [BF<sub>4</sub>]<sup>−</sup>; aluminium reaches [AlF<sub>6</sub>]<sup>3−</sup>.',
      },

      { t: 'part', title: 'I2 — Identification tests collected' },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Test', 'Observation'],
        rows: [
          ['Borate', 'conc. H<sub>2</sub>SO<sub>4</sub> + methanol, ignite', 'green-edged flame'],
          ['Coloured metal salts', 'borax bead', 'metaborate colours (Addendum C)'],
          ['Al<sup>3+</sup>', 'NaOH, then excess', 'white gelatinous precipitate, dissolves'],
          ['Al<sup>3+</sup>', 'aqueous ammonia', 'white precipitate, insoluble in excess'],
          ['Al<sup>3+</sup>', 'charcoal, Co(NO<sub>3</sub>)<sub>2</sub>, oxidising flame', 'blue residue (Thenard’s blue)'],
          ['Sn<sup>2+</sup>', 'add to HgCl<sub>2</sub>', 'white Hg<sub>2</sub>Cl<sub>2</sub>, then grey Hg'],
          [
            'Pb<sup>2+</sup>',
            'dilute HCl; then iodide; chromate; H<sub>2</sub>S',
            'white PbCl<sub>2</sub> soluble hot; yellow PbI<sub>2</sub>; yellow PbCrO<sub>4</sub>; black PbS',
          ],
          ['CO<sub>3</sub><sup>2−</sup> vs HCO<sub>3</sub><sup>−</sup>', 'MgSO<sub>4</sub>, cold', 'precipitate only for carbonate'],
          ['CO<sub>2</sub>', 'lime water', 'milky; clears with excess'],
          ['PbO<sub>2</sub>, Pb<sub>3</sub>O<sub>4</sub>', 'warm with conc. HCl', 'Cl<sub>2</sub> evolved'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Which chlorides are hydrolysed?',
        q: 'Of CCl<sub>4</sub>, SiCl<sub>4</sub>, SnCl<sub>4</sub> and BCl<sub>3</sub>, which are hydrolysed by water, and why is there an exception?',
        steps: [
          'SiCl<sub>4</sub> and SnCl<sub>4</sub> have accessible d orbitals, so water’s oxygen lone pair can enter before chloride leaves. BCl<sub>3</sub> has an empty 2p orbital that accepts the lone pair directly. CCl<sub>4</sub> has neither: carbon is confined to the <i>n</i> = 2 shell.',
        ],
        ans: 'SiCl<sub>4</sub>, SnCl<sub>4</sub> and BCl<sub>3</sub> are hydrolysed (to Si(OH)<sub>4</sub>, Sn(OH)<sub>4</sub>, B(OH)<sub>3</sub>); CCl<sub>4</sub> is not.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which is the most acidic oxide: Na<sub>2</sub>O, NiO, CaO or SnO?',
            a: 'SnO: the other three are basic oxides, while SnO is amphoteric.',
          },
          {
            q: '[JEE Main] Classify CO, B<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub>, Al<sub>2</sub>O<sub>3</sub>, PbO<sub>2</sub> and Tl<sub>2</sub>O<sub>3</sub> as neutral, acidic, basic or amphoteric.',
            a: 'CO neutral; B<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub> acidic; Al<sub>2</sub>O<sub>3</sub>, PbO<sub>2</sub> amphoteric; Tl<sub>2</sub>O<sub>3</sub> basic.',
          },
          {
            q: '[JEE Main] Give one reason why [SiF<sub>6</sub>]<sup>2−</sup> exists but [CF<sub>6</sub>]<sup>2−</sup> does not.',
            a: 'Silicon has 3d orbitals and can expand its covalence beyond 4 (sp<sup>3</sup>d<sup>2</sup>), but carbon, in the second period, has no d orbitals and its maximum covalence is 4.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic J · p. 499 ─────────────────────────
  {
    n: 'J',
    title: 'Summary Checklist',
    extra: true,
    kalam: 'Before the exam, verify you can answer yes to each of the following.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'Before the exam, verify you can answer yes to each of the following:' },

      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: '1. Can you add the ionisation enthalpies to show why boron forms no B<sup>3+</sup> (6887 against 5137 kJ mol<sup>−1</sup> for Al) and why the sums zigzag down each group?<br>2. Can you tabulate boron against aluminium and silicon, and explain why BCl<sub>3</sub> is a monomer but AlCl<sub>3</sub> a dimer?<br>3. Can you draw the borax anion (two sp<sup>2</sup>, two sp<sup>3</sup> boron), state the 1 : 2 ratio of borax to HCl, and recall that a bead blue in both flames is cobalt?<br>4. Can you explain the cis-diol trick for titrating boric acid, give the green-flame test, count the bonds in diborane (four 2c–2e, two 3c–2e) and write the hydroboration–oxidation sequence?<br>5. Can you write the amphoteric reactions of Al<sub>2</sub>O<sub>3</sub> and Al(OH)<sub>3</sub>, what reprecipitates the hydroxide, and the facts about alums?<br>6. Can you give the σ/π count for C<sub>60</sub> (90/30), the hexagon count <i>n</i>/2 − 10, and apply the silicate rule (charge per Si = −(4 − <i>s</i>))?<br>7. Can you give the SnCl<sub>2</sub> reductions, the oxidising reactions of PbO<sub>2</sub> and Pb<sub>3</sub>O<sub>4</sub>, the lead tests, and rank by the six rules of Addendum I?',
      },
    ],
  },

  // ─────────────── Additional topic K (the book's Addendum P) · pp. 500–502 ───────────────
  {
    n: 'K',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Groups 13 and 14 are tested through a few question modes, usually one idea per question.',
    blocks: [
      { t: 'part', title: 'The Shape of the Questions' },
      {
        t: 'p',
        html: 'Groups 13 and 14 are tested through a few question modes, usually one idea per question: recall with a reason (why a compound is not what intuition expects), compare and rank (Lewis acidity, oxide character, bond length, stability), count (bonds in diborane or C<sub>60</sub>, charge on a silicate), identify (a precipitate, a bead colour, a flame), one-step stoichiometry on a named reaction, and statement pairs in which one true clause hides one inverted clause. How often each mode appears is not quoted here; the modes themselves are stable.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. “Which is the stronger Lewis acid / more acidic / longer bond?”</b>' },
      {
        t: 'p',
        html: '<b>The crack:</b> name the rule first (Addendum I). Lewis acidity of the boron halides is back bonding, not electronegativity; oxide character moves with oxidation state and with position in the group; bond length follows bond order.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'BI<sub>3</sub> is the strongest of the four boron halides, because back donation from the large iodine to boron’s 2p orbital is the weakest.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>2. “Why does X not exist, or why is it different?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> [BF<sub>6</sub>]<sup>3−</sup>, [CF<sub>6</sub>]<sup>2−</sup>, PbI<sub>4</sub>, GaCl<sub>2</sub>, tribasic boric acid. <b>The crack:</b> each has a one-line cause: no d orbitals (boron, carbon), inert pair (lead), gallium is +1 plus +3, boric acid is a Lewis not Brønsted acid.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'GaCl<sub>2</sub> is diamagnetic because it is Ga<sup>+</sup>[GaCl<sub>4</sub>]<sup>−</sup>; no Ga(II) is present.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>3. Counting</b>' },
      {
        t: 'p',
        html: '<b>The crack:</b> electron count first (diborane: 12 valence electrons, 4 pairs in terminal bonds, 2 pairs in bridges), then structure.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'B<sub>2</sub>H<sub>6</sub> has 2 three-centre bonds and 4 two-centre bonds; C<sub>60</sub> has 90 σ and 30 π bonds.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>4. Identification and stoichiometry</b>' },
      {
        t: 'p',
        html: '<b>The crack:</b> each clue in Addendum I2 picks one species; for stoichiometry write the balanced equation of the reaction named and check which reagent actually reacts (borax consumes two moles of HCl, not four).',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'A white precipitate with dilute HCl that dissolves in hot water and gives a yellow precipitate with iodide is Pb<sup>2+</sup>; 0.1 mol Al<sub>4</sub>C<sub>3</sub> gives 0.3 mol CH<sub>4</sub>, 6.72 L at 273 K and 1 atm.',
        steps: [],
        ans: '',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: '<b>Trap 1: Boric acid as tribasic.</b> Three O–H groups, but a monobasic Lewis acid (<i>n</i>-factor 1, even with a cis-diol).',
      },
      {
        t: 'p',
        html: '<b>Trap 2: The inert pair effect read backwards.</b> It stabilises the lower state at the heavy end: Pb(IV) oxidises, Sn(II) reduces.',
      },
      {
        t: 'p',
        html: '<b>Trap 3: Ranking Lewis acidity by electronegativity.</b> BF<sub>3</sub> is the weakest boron halide acid.',
      },
      {
        t: 'p',
        html: '<b>Trap 4: The borax anion written as B<sub>4</sub>O<sub>7</sub><sup>2−</sup> in a structure question.</b> It is [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup>, with two sp<sup>2</sup> and two sp<sup>3</sup> borons.',
      },
      {
        t: 'p',
        html: '<b>Trap 5: Lime water that does not clear.</b> Excess CO<sub>2</sub> turns milky CaCO<sub>3</sub> into soluble Ca(HCO<sub>3</sub>)<sub>2</sub>.',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] A salt gives a blue borax bead in both the oxidising and the reducing flames. The metal is: (a) Cu (b) Fe (c) Co (d) Cr.',
            a: '(c). Co is blue in both flames (hot and cold). Cu is green or blue when oxidising but colourless when reducing hot; Fe is yellowish brown or yellow when oxidising and green when reducing; Cr is yellow or green and is never blue.',
          },
          {
            q: '[Easy] In diborane the number of three-centre two-electron bonds is: (a) 0 (b) 2 (c) 4 (d) 6.',
            a: '(b). Two B–H–B bridges. (c) counts the four terminal bonds, which are two-centre; (d) treats all six hydrogens as bridges; (a) ignores the electron deficiency.',
          },
          {
            q: '[Easy] Boric acid behaves as a weak acid in water because it: (a) releases a proton from one of its three O–H groups (b) accepts OH<sup>−</sup> from water and liberates H<sup>+</sup> (c) is a tribasic Brønsted acid with low dissociation (d) forms BH<sub>3</sub>·OH<sub>2</sub>.',
            a: '(b). B(OH)<sub>3</sub> + 2H<sub>2</sub>O ⇌ [B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>. (a) and (c) treat it as a Brønsted acid, which is the whole trap; (d) is not a species that forms here.',
          },
          {
            q: '[Moderate] Which is not hydrolysed by water? (a) CCl<sub>4</sub> (b) SiCl<sub>4</sub> (c) SnCl<sub>4</sub> (d) GeCl<sub>4</sub>.',
            a: '(a). Carbon, limited to the second shell, has no empty orbital to receive water’s lone pair; (b)–(d) are the heavier tetrachlorides, all hydrolysed. (d) tempts students who expect germanium to resemble carbon.',
          },
          {
            q: '[Moderate] Which acts as a strong oxidising agent? (a) SnCl<sub>2</sub> (b) GeCl<sub>2</sub> (c) PbO<sub>2</sub> (d) SnCl<sub>4</sub>.',
            a: '(c). Pb(IV) is unstable relative to Pb(II): PbO<sub>2</sub> + 4HCl → PbCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O. (a) and (b) are reducing agents; (d) is the ordinary stable Sn(IV) halide.',
          },
          {
            q: '[Moderate] The numbers of σ and π bonds in C<sub>60</sub> are: (a) 60, 30 (b) 90, 30 (c) 90, 60 (d) 60, 60.',
            a: '(b). 60 × 3/2 = 90 σ bonds; 60 electrons pair into 30 π bonds. (a) gives each carbon one σ bond instead of three shared by two (3/2 per carbon); (c) counts a π bond per carbon; (d) makes both mistakes.',
          },
          {
            q: '[Moderate] The strongest Lewis acid is: (a) BF<sub>3</sub> (b) BCl<sub>3</sub> (c) BBr<sub>3</sub> (d) BI<sub>3</sub>.',
            a: '(d). Back donation from halogen to boron falls from F to I, so boron’s electron deficiency is least satisfied in BI<sub>3</sub>. (a) is the electronegativity-based trap. (b) BCl<sub>3</sub> is the second weakest: chlorine still back-donates more than bromine or iodine. (c) BBr<sub>3</sub> comes close, but bromine back-donates slightly more than iodine.',
          },
          {
            q: '[Hard] AlF<sub>3</sub> is dissolved by NaF in anhydrous HF as Na<sub>3</sub>[AlF<sub>6</sub>]. When BF<sub>3</sub> gas is passed through: (a) nothing happens (b) AlF<sub>3</sub> precipitates and Na[BF<sub>4</sub>] forms (c) Al(OH)<sub>3</sub> precipitates (d) BF<sub>3</sub> is hydrolysed to H<sub>3</sub>BO<sub>3</sub> only.',
            a: '(b). BF<sub>3</sub> is the stronger fluoride acceptor: Na<sub>3</sub>[AlF<sub>6</sub>] + 3BF<sub>3</sub> → 3Na[BF<sub>4</sub>] + AlF<sub>3</sub>↓. (a) misses that BF<sub>3</sub> takes fluoride away from [AlF<sub>6</sub>]<sup>3−</sup>; (c) invents a hydroxide route; (d) ignores that boron reaches covalence 4 through fluoride.',
          },
          {
            q: '[Hard] Statement I: PbCl<sub>4</sub> is less stable than PbCl<sub>2</sub>. Statement II: the inert pair effect stabilises the +4 oxidation state of lead. (a) both true, II explains I (b) both true, II does not explain I (c) I true, II false (d) I false, II true.',
            a: '(c). The inert pair effect stabilises +2, which is why PbCl<sub>4</sub> decomposes to PbCl<sub>2</sub> and Cl<sub>2</sub>. (a) and (b) accept the inverted Statement II. (d) reverses both: Statement I is true and Statement II is false.',
          },
          {
            q: '[Hard] What mass of Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O (<i>M</i> = 381.2) reacts with 25.0 mL of 0.100 M HCl? (a) 0.238 g (b) 0.477 g (c) 0.953 g (d) 1.91 g.',
            a: '(b). <i>n</i>(HCl) = 2.50 × 10<sup>−3</sup> mol; one mole of borax needs two moles of HCl, so <i>n</i>(borax) = 1.25 × 10<sup>−3</sup> mol and <i>m</i> = 1.25 × 10<sup>−3</sup> × 381.2 = 0.477 g. (a) uses a 1 : 4 ratio, (c) a 1 : 1 ratio, (d) inverts the ratio.',
          },
        ],
      },

      { t: 'part', title: 'Where the Marks Sit' },
      {
        t: 'p',
        html: 'Marks come from the specific reasons behind the exceptions — back bonding, the inert pair effect, absent d orbitals, poor d/f shielding — from a handful of structural counts (the borax anion, diborane, C<sub>60</sub>, the silicate rule) and from named reactions (SnCl<sub>2</sub> as a reductant; PbO<sub>2</sub> and Pb<sub>3</sub>O<sub>4</sub> as oxidants; amphoteric aluminium). Addenda A–I build exactly these.',
      },
    ],
  },
];
