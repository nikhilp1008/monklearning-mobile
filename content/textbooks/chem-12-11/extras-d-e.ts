import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional Topics D and E, word for word from the Class 12 Chemistry
 * Master Reference's p-block supplement: D Group 16: Data, Ozone, Sulphur and its
 * Oxoacids (from partway down p. 563, after Addendum C's answers, to p. 569; its
 * answers sit at the top of p. 569) and E Group 17: Why Fluorine Differs, Chlorine,
 * Interhalogens and the Oxoacids (pp. 569–575; its fifth answer is at the top of
 * p. 575, where Addendum F begins).
 *
 * Neither addendum has an introduction: each opens on an empty "Method" heading,
 * which is dropped as in B, C and F, so its display headings ("The data",
 * "Dioxygen and its ions", "Ozone" … "The oxoacids of the halogens") are the
 * parts, as in Chapter 4's additional topics; the bold run-in heads ("Formation.", "Why the anomalies occur.")
 * stay bold leads. Each addendum prints its answers in one block after its practice
 * questions; each is set here as that question's answer. The book's Figures 5 and 6
 * (pp. 565, 566) are c12-11-D-d1 and c12-11-D-d2, and Figures 7 and 8 (pp. 570, 572)
 * are c12-11-E-d1 and c12-11-E-d2, each where the book prints it (the text never
 * names them). Two-column tables are defgrids titled by their heads. The first column
 * of the enthalpy-cycle table, a bare element symbol in the book, gets the element's
 * name before it, as in B's metals table. Notation as in Topics 01–07: bonds with an en dash (S–O–S, O–O,
 * H–E, X–X′) where the book prints a hyphen; hybrid and orbital labels upright
 * (sp<sup>3</sup>d, 2p, d orbitals); label subscripts upright (Δ<sub>diss</sub><i>H</i>,
 * <i>K</i><sub>a2</sub>); α and β upright; stand-in letters (E, X, X′) upright; one
 * condition over an arrow; ranges with an en dash (96–98%).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic O · pp. 563–569 ─────────────────────────
  {
    n: 'O',
    title: 'Group 16: Data, Ozone, Sulphur and its Oxoacids',
    extra: true,
    kalam: 'Oxygen cannot expand its octet (covalence at most 4, usually 2); S, Se and Te can.',
    blocks: [
      { t: 'part', title: 'The data' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'O', 'S', 'Se', 'Te', 'Po'],
        rows: [
          ['Electron gain enthalpy / kJ mol<sup>−1</sup>', '−141', '−200', '−195', '−190', '−174'],
          ['First ionisation enthalpy / kJ mol<sup>−1</sup>', '1314', '1000', '941', '869', '813'],
          ['Electronegativity', '3.50', '2.58', '2.55', '2.01', '1.76'],
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Property', 'H<sub>2</sub>O', 'H<sub>2</sub>S', 'H<sub>2</sub>Se', 'H<sub>2</sub>Te'],
        rows: [
          ['Boiling point / K', '373', '213', '232', '269'],
          ['∠HEH / degrees', '104', '92', '91', '90'],
          ['Δ<sub>diss</sub><i>H</i>(H–E) / kJ mol<sup>−1</sup>', '463', '347', '276', '238'],
          [
            '<i>K</i><sub>a</sub> (aqueous, 298 K)',
            '1.8 × 10<sup>−16</sup>',
            '1.3 × 10<sup>−7</sup>',
            '1.3 × 10<sup>−4</sup>',
            '2.3 × 10<sup>−3</sup>',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Oxidation states: O −2 (also −1, +1, +2); S, Se, Te −2, +2, +4, +6; Po +2, +4. In its compounds oxygen shows only negative states except with fluorine, in OF<sub>2</sub> (+2) and O<sub>2</sub>F<sub>2</sub> (+1), and in the dioxygenyl ion O<sub>2</sub><sup>+</sup> below (+½). Its electron gain enthalpy is less negative than sulphur’s for the same reason as fluorine’s against chlorine’s: repulsion in a compact atom. The second gain (O<sup>−</sup> + e<sup>−</sup> → O<sup>2−</sup>) is strongly endothermic (several hundred kJ mol<sup>−1</sup>; tables quote values from about +700 to +780), yet O<sup>2−</sup> oxides abound because the lattice energy of a small, doubly charged ion more than repays it. The falling H–E bond enthalpy explains two trends at once: thermal stability falls (and reducing power rises), and acid strength rises, from H<sub>2</sub>O to H<sub>2</sub>Te; water is a liquid only because of hydrogen bonding. Oxygen cannot expand its octet (covalence at most 4, usually 2); S, Se and Te can: SF<sub>6</sub> (sp<sup>3</sup>d<sup>2</sup>, octahedral, exceptionally stable), SF<sub>4</sub> (sp<sup>3</sup>d, see-saw: (6 + 4)/2 = 5 pairs, 4 bonding + 1 lone) and SCl<sub>2</sub> (sp<sup>3</sup>, bent) are the standard shapes.',
      },

      { t: 'part', title: 'Dioxygen and its ions' },
      {
        t: 'p',
        html: 'O<sub>2</sub> is paramagnetic: its last two electrons occupy separate degenerate π* orbitals with parallel spins. Adding or removing one π* electron gives the family below.',
      },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Bond order', 'Unpaired electrons', 'Magnetism'],
        rows: [
          ['O<sub>2</sub><sup>+</sup> (dioxygenyl)', '2.5', '1', 'paramagnetic'],
          ['O<sub>2</sub>', '2', '2', 'paramagnetic'],
          ['O<sub>2</sub><sup>−</sup> (superoxide)', '1.5', '1', 'paramagnetic'],
          ['O<sub>2</sub><sup>2−</sup> (peroxide)', '1', '0', 'diamagnetic'],
        ],
      },
      {
        t: 'p',
        html: 'Bond length runs opposite to bond order: O<sub>2</sub><sup>+</sup> < O<sub>2</sub> < O<sub>2</sub><sup>−</sup> < O<sub>2</sub><sup>2−</sup>. O<sub>2</sub> is a gas and sulphur a solid because O<sub>2</sub> is a small diatomic molecule held by weak dispersion forces, while S<sub>8</sub> is a large ring with much stronger ones.',
      },

      { t: 'part', title: 'Ozone' },
      {
        t: 'p',
        html: '<b>Formation.</b> 3O<sub>2</sub> → 2O<sub>3</sub> is endothermic (+142 kJ per mole of O<sub>3</sub> formed, so +284 kJ for the equation as written; NCERT prints +142 kJ mol<sup>−1</sup> beside the equation), so a silent electric discharge through cold dry oxygen is used (a spark would decompose the ozone as fast as it forms). About 10% conversion results; pure ozone is a pale blue gas that condenses to a dark blue liquid (b.p. about 161 K).',
      },
      {
        t: 'p',
        html: '<b>Structure.</b> Bent, ∠OOO ≈ 117°, two equal O–O bonds of 128 pm. With 18 valence electrons the central O has two bonding domains and one lone pair (sp<sup>2</sup>). The two canonical forms carry a formal + on the central O and a formal − on one terminal O; the real molecule is the hybrid with bond order 1.5. Ozone is diamagnetic, unlike O<sub>2</sub>, and isoelectronic with NO<sub>2</sub><sup>−</sup> and SO<sub>2</sub>.',
      },
      { t: 'fig', id: 'c12-11-D-d1' },
      {
        t: 'p',
        html: '<b>Why ozone is such a strong oxidant.</b> The conversion 2O<sub>3</sub> → 3O<sub>2</sub> releases heat (Δ<i>H</i> negative) and increases entropy (Δ<i>S</i> positive); the two effects reinforce, so Δ<i>G</i> for the decomposition is large and negative. Ozone therefore hands over an oxygen atom very readily, O<sub>3</sub> → O<sub>2</sub> + [O], which is the basis of every oxidation below, and a high concentration can decompose explosively.',
      },
      {
        t: 'p',
        html: '<b>Oxidising action</b> (via O<sub>3</sub> → O<sub>2</sub> + [O]): PbS + 4O<sub>3</sub> → PbSO<sub>4</sub> + 4O<sub>2</sub>; 2I<sup>−</sup> + H<sub>2</sub>O + O<sub>3</sub> → 2OH<sup>−</sup> + I<sub>2</sub> + O<sub>2</sub>; 2Hg + O<sub>3</sub> → Hg<sub>2</sub>O + O<sub>2</sub>, after which the mercury loses its meniscus and sticks to glass (tailing of mercury, a test for ozone).',
      },
      {
        t: 'p',
        html: '<b>Estimation.</b> Pass the ozone into excess KI buffered at pH 9.2 and titrate the iodine against thiosulphate, I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>; the mole chain is 1 O<sub>3</sub> → 1 I<sub>2</sub> → 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>.',
      },
      {
        t: 'p',
        html: '<b>Depletion.</b> NO from high-flying aircraft reacts very rapidly with ozone, NO + O<sub>3</sub> → NO<sub>2</sub> + O<sub>2</sub>. Freons release chlorine atoms under ultraviolet light, which run a catalytic chain, Cl<sup>•</sup> + O<sub>3</sub> → ClO<sup>•</sup> + O<sub>2</sub> and ClO<sup>•</sup> + O → Cl<sup>•</sup> + O<sub>2</sub>, so one chlorine atom destroys very many ozone molecules. Uses: germicide, water sterilisation, bleaching of oils and flour, and oxidant in making KMnO<sub>4</sub>.',
      },

      { t: 'part', title: 'Sulphur and its oxides' },
      {
        t: 'p',
        html: 'Rhombic sulphur (α: yellow, m.p. 385.8 K, specific gravity 2.06, stable below 369 K) and monoclinic sulphur (β: needle-shaped crystals, m.p. 393 K, specific gravity 1.98, stable above 369 K) both contain crown-shaped S<sub>8</sub> rings, packed differently; at 369 K (the transition temperature) both are stable. S<sub>6</sub> is a chair-form ring, and at about 1000 K the vapour is mainly S<sub>2</sub>, paramagnetic like O<sub>2</sub>.',
      },
      {
        t: 'p',
        html: 'SO<sub>2</sub> is made by S + O<sub>2</sub> → SO<sub>2</sub>, from a sulphite and dilute acid (SO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → H<sub>2</sub>O + SO<sub>2</sub>), or by roasting sulphides, 4FeS<sub>2</sub> + 11O<sub>2</sub> → 2Fe<sub>2</sub>O<sub>3</sub> + 8SO<sub>2</sub>. It is bent (sp<sup>2</sup> S, two bonding domains and one lone pair, 18 valence electrons), a resonance hybrid with two equal S–O bonds. It dissolves to give H<sub>2</sub>SO<sub>3</sub> and behaves like CO<sub>2</sub> with alkali (Na<sub>2</sub>SO<sub>3</sub>, then NaHSO<sub>3</sub>). When moist it is a reductant: 2Fe<sup>3+</sup> + SO<sub>2</sub> + 2H<sub>2</sub>O → 2Fe<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup>, and it decolourises acidified permanganate, 5SO<sub>2</sub> + 2MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O → 5SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> + 2Mn<sup>2+</sup> (the standard test). With a stronger reductant it is an oxidant, SO<sub>2</sub> + 2H<sub>2</sub>S → 3S + 2H<sub>2</sub>O. With chlorine over charcoal it gives sulphuryl chloride, SO<sub>2</sub> + Cl<sub>2</sub> → SO<sub>2</sub>Cl<sub>2</sub>. SO<sub>3</sub> is trigonal planar (sp<sup>2</sup>, 24 valence electrons), isoelectronic with NO<sub>3</sub><sup>−</sup>.',
      },

      { t: 'part', title: 'The oxoacids of sulphur' },
      {
        t: 'p',
        html: 'Every S is tetrahedrally surrounded. Average oxidation states follow from the formula, taking every O as −2, except in the two peroxo acids (explained below the table).',
      },
      {
        t: 'table',
        title: null,
        head: ['Acid', 'Formula', 'S (average)', 'Features'],
        rows: [
          ['Sulphurous', 'H<sub>2</sub>SO<sub>3</sub>', '+4', 'S with a lone pair; sulphite ion pyramidal; reducing'],
          ['Thiosulphuric', 'H<sub>2</sub>S<sub>2</sub>O<sub>3</sub>', '+2', 'S–S bond; one S as in sulphate (+6), one terminal (−2)'],
          ['Sulphuric', 'H<sub>2</sub>SO<sub>4</sub>', '+6', '2 S=O, 2 S–OH'],
          ['Disulphuric (oleum)', 'H<sub>2</sub>S<sub>2</sub>O<sub>7</sub>', '+6', 'S–O–S bridge'],
          ['Dithionic', 'H<sub>2</sub>S<sub>2</sub>O<sub>6</sub>', '+5', 'S–S bond'],
          ['Peroxomonosulphuric', 'H<sub>2</sub>SO<sub>5</sub>', '+6', 'one peroxo O–O'],
          ['Peroxodisulphuric', 'H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>', '+6', 'one peroxo O–O'],
        ],
      },
      {
        t: 'p',
        html: 'In the peroxo acids sulphur stays at +6 because the peroxide oxygens are at −1: H<sub>2</sub>SO<sub>5</sub>: 2 + <i>x</i> + 3(−2) + 2(−1) = 0 gives +6; H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>: 2 + 2<i>x</i> + 6(−2) + 2(−1) = 0 gives +6.',
      },
      { t: 'fig', id: 'c12-11-D-d2' },

      { t: 'part', title: 'Sulphuric acid' },
      {
        t: 'p',
        html: '<b>Contact process.</b> Burn S or a sulphide to SO<sub>2</sub>; remove dust and arsenic compounds (gelatinous hydrated ferric oxide in the arsenic purifier); pass over V<sub>2</sub>O<sub>5</sub> at about 720 K and 2 bar: 2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub>, Δ<sub>r</sub><i>H</i>° = −196.6 kJ mol<sup>−1</sup>. The reaction is exothermic and shrinks the gas volume, so low <i>T</i> and high <i>P</i> favour the product, but too low a <i>T</i> makes the rate unworkable. The SO<sub>3</sub> goes into concentrated H<sub>2</sub>SO<sub>4</sub> (not water, which gives a stubborn acid mist) to make oleum, SO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → H<sub>2</sub>S<sub>2</sub>O<sub>7</sub>, and dilution gives the acid, H<sub>2</sub>S<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>O → 2H<sub>2</sub>SO<sub>4</sub>; the product is 96–98% pure.',
      },
      {
        t: 'p',
        html: '<b>Properties.</b> Dense oily liquid (specific gravity 1.84), freezing at 283 K and boiling at 611 K; add the acid to water, never the reverse, because of the heat evolved. Ionisation: H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>−</sup> (<i>K</i><sub>a1</sub> > 10) and HSO<sub>4</sub><sup>−</sup> + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2−</sup> (<i>K</i><sub>a2</sub> = 1.2 × 10<sup>−2</sup>).',
      },
      {
        t: 'defgrid',
        title: 'Property — Illustration',
        rows: [
          {
            k: 'Low volatility',
            v: 'CaF<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → CaSO<sub>4</sub> + 2HF; NaCl + H<sub>2</sub>SO<sub>4</sub> → NaHSO<sub>4</sub> + HCl. HBr and HI are oxidised instead, 2HBr + H<sub>2</sub>SO<sub>4</sub> → Br<sub>2</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O, so phosphoric acid is used to make them',
          },
          {
            k: 'Dehydrating',
            v: 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> →<sup>H₂SO₄</sup> 12C + 11H<sub>2</sub>O; dries gases that do not react with it (not NH<sub>3</sub>, H<sub>2</sub>S, HBr, HI)',
          },
          {
            k: 'Oxidising (hot, conc.; → SO<sub>2</sub>)',
            v: 'Cu + 2H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + SO<sub>2</sub> + 2H<sub>2</sub>O; S + 2H<sub>2</sub>SO<sub>4</sub> → 3SO<sub>2</sub> + 2H<sub>2</sub>O; C + 2H<sub>2</sub>SO<sub>4</sub> → CO<sub>2</sub> + 2SO<sub>2</sub> + 2H<sub>2</sub>O',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Oleum labelling.</b> A label such as 104.5% means that 100 g of the oleum gives 104.5 g of pure H<sub>2</sub>SO<sub>4</sub> on adding just enough water. Work with SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> (80 + 18 = 98).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Why is H<sub>2</sub>O a liquid and H<sub>2</sub>S a gas, and why is H<sub>2</sub>Te the strongest acid of the Group 16 hydrides?',
        steps: [
          'Oxygen is small and electronegative, so water is extensively hydrogen-bonded (b.p. 373 K); sulphur is too large and too little electronegative (b.p. 213 K). Acid strength follows the weakening H–E bond (Δ<sub>diss</sub><i>H</i>: 463, 347, 276, 238 kJ mol<sup>−1</sup>), so H<sub>2</sub>Te (<i>K</i><sub>a</sub> = 2.3 × 10<sup>−3</sup>) ionises most readily.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: '1.0 L of ozonised oxygen is passed through excess buffered KI, and the liberated iodine needs 20.0 mL of 0.050 M Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. Find the mass of ozone in the sample (O<sub>3</sub> = 48).',
        steps: [
          '<i>n</i>(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 0.0200 × 0.050 = 1.0 × 10<sup>−3</sup> mol. With 1 O<sub>3</sub> → 1 I<sub>2</sub> → 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>, <i>n</i>(O<sub>3</sub>) = 5.0 × 10<sup>−4</sup> mol and the mass is 5.0 × 10<sup>−4</sup> × 48 = 0.024 g.',
        ],
        ans: '24 mg.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find the pH of 0.010 M H<sub>2</sub>SO<sub>4</sub>, taking the first ionisation as complete and <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−2</sup>.',
        steps: [
          'After step one, [H<sup>+</sup>] = [HSO<sub>4</sub><sup>−</sup>] = 0.010. For step two let <i>x</i> ionise: (0.010 + <i>x</i>)<i>x</i>/(0.010 − <i>x</i>) = 1.2 × 10<sup>−2</sup>, so <i>x</i><sup>2</sup> + 0.022<i>x</i> − 1.2 × 10<sup>−4</sup> = 0 and <i>x</i> = (−0.022 + √(9.64 × 10<sup>−4</sup>))/2 = 4.52 × 10<sup>−3</sup>. Then [H<sup>+</sup>] = 0.01452 M and pH = 1.84. (Treating both steps as complete gives [H<sup>+</sup>] = 0.020 and pH 1.70, which is wrong because <i>K</i><sub>a2</sub> is comparable to the concentration.)',
        ],
        ans: 'pH ≈ 1.84.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'A sample of oleum contains 20% free SO<sub>3</sub> by mass. (a) What mass of water converts 100 g of it entirely to H<sub>2</sub>SO<sub>4</sub>, and what is its label percentage? (b) What mass percentage of free SO<sub>3</sub> does an oleum labelled 118% contain?',
        steps: [
          'For (a): 100 g holds 20 g free SO<sub>3</sub> (0.25 mol) and 80 g H<sub>2</sub>SO<sub>4</sub>. Converting the SO<sub>3</sub> needs 0.25 mol of water = 4.5 g and gives 0.25 × 98 = 24.5 g of acid; total acid 80 + 24.5 = 104.5 g, so the label is <b>104.5%</b>.',
          '(b) A 118% label means 100 g of oleum plus 18 g of water (1 mol) gives 118 g of acid. One mole of water converts one mole of SO<sub>3</sub> (80 g), so there is 80 g of free SO<sub>3</sub> in 100 g: <b>80%</b> (and 20 g of H<sub>2</sub>SO<sub>4</sub>; check 80 + 18 + 20 = 118).',
        ],
        ans: '(a) 4.5 g, 104.5%; (b) 80%.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Find the oxidation state(s) of sulphur in S<sub>2</sub>O<sub>3</sub><sup>2−</sup> and S<sub>4</sub>O<sub>6</sub><sup>2−</sup> and show that 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + I<sub>2</sub> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2I<sup>−</sup> balances in electrons.',
        steps: [
          'S<sub>2</sub>O<sub>3</sub><sup>2−</sup>: 2<i>x</i> − 6 = −2, average +2 (central S +6, terminal S −2). S<sub>4</sub>O<sub>6</sub><sup>2−</sup>: 4<i>x</i> − 12 = −2, average +2.5 (two end S at +5, two bridging S at 0). Two thiosulphates total 4 × 2 = +8; one tetrathionate totals 4 × 2.5 = +10. Two electrons are lost, matching I<sub>2</sub> + 2e<sup>−</sup> → 2I<sup>−</sup>. (The +6/−2 split counts the terminal S like the O it replaces, the usual exam answer; sharing the S–S electrons equally, as for tetrathionate, gives +5 and −1. The averages and the electron count are the same either way.)',
        ],
        ans: '+2 and +2.5 (average); 2 e per I<sub>2</sub>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does oxygen show +2 only in OF<sub>2</sub>, and why is its electron gain enthalpy less negative than sulphur’s?',
            a: 'Fluorine is more electronegative than oxygen, so in OF<sub>2</sub> oxygen takes the positive state. In the compact oxygen atom the incoming electron meets strong repulsion from the small 2p subshell.',
          },
          {
            q: '[NEET] Arrange H<sub>2</sub>O, H<sub>2</sub>S, H<sub>2</sub>Se, H<sub>2</sub>Te in order of (a) thermal stability, (b) acid strength, (c) boiling point.',
            a: 'Thermal stability: H<sub>2</sub>O > H<sub>2</sub>S > H<sub>2</sub>Se > H<sub>2</sub>Te; acid strength: the reverse order; boiling point: H<sub>2</sub>O ≫ H<sub>2</sub>Te > H<sub>2</sub>Se > H<sub>2</sub>S (373, 269, 232, 213 K).',
          },
          {
            q: '[JEE Main] How many grams of water convert 200 g of oleum containing 40% free SO<sub>3</sub> entirely to H<sub>2</sub>SO<sub>4</sub>, and what is the label percentage?',
            a: '200 g holds 80 g free SO<sub>3</sub> (1.0 mol) and 120 g H<sub>2</sub>SO<sub>4</sub>. Water: 1.0 mol = 18 g. Acid: 120 + 98 = 218 g from 200 g, so the label is 218/200 = 109%.',
          },
          {
            q: '[JEE Advanced] Calculate the oxidation number of S in H<sub>2</sub>S<sub>2</sub>O<sub>8</sub> and H<sub>2</sub>S<sub>2</sub>O<sub>6</sub> and say which has a peroxo link and which an S–S bond.',
            a: 'H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>: 2 + 2<i>x</i> + 6(−2) + 2(−1) = 0, <i>x</i> = +6, with the O–O peroxo link. H<sub>2</sub>S<sub>2</sub>O<sub>6</sub>: 2 + 2<i>x</i> − 12 = 0, <i>x</i> = +5, with the S–S bond.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic P · pp. 569–575 ─────────────────────────
  {
    n: 'P',
    title: 'Group 17: Why Fluorine Differs, Chlorine, Interhalogens and the Oxoacids',
    extra: true,
    kalam: 'Fluorine has no d orbitals and is the most electronegative element, so it shows only −1 and forms a single oxoacid, HOF.',
    blocks: [
      { t: 'part', title: 'The data' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'F', 'Cl', 'Br', 'I'],
        rows: [
          ['Electron gain enthalpy / kJ mol<sup>−1</sup>', '−333', '−349', '−325', '−296'],
          ['Electronegativity', '4.0', '3.2', '3.0', '2.7'],
          ['Hydration enthalpy of X<sup>−</sup> / kJ mol<sup>−1</sup> (magnitude)', '515', '381', '347', '305'],
          ['X–X distance / pm', '143', '199', '228', '266'],
          ['X–X bond dissociation enthalpy / kJ mol<sup>−1</sup>', '158.8', '242.6', '192.8', '151.1'],
          ['<i>E</i>° for X<sub>2</sub>/X<sup>−</sup> / V', '2.87', '1.36', '1.09', '0.54'],
        ],
      },
      {
        t: 'p',
        html: 'The halogens are coloured (F<sub>2</sub> yellow, Cl<sub>2</sub> greenish yellow, Br<sub>2</sub> red, I<sub>2</sub> violet) because they absorb visible light and promote outer electrons to higher levels.',
      },
      {
        t: 'p',
        html: '<b>Why the anomalies occur.</b> The lone pairs on two bonded F atoms, only 143 pm apart, repel strongly, so the F–F bond is weaker than the Cl–Cl and Br–Br bonds: Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>. The same crowding in the compact 2p subshell makes the incoming electron meet repulsion, so the electron-gain magnitude order is Cl > F > Br > I. Fluorine has no d orbitals and is the most electronegative element, so it shows only −1 and forms a single oxoacid, HOF. HF is a liquid up to 293 K (its boiling point, about 20 °C; NCERT simply calls it a liquid) through hydrogen bonding; HCl, HBr and HI are gases.',
      },
      { t: 'fig', id: 'c12-11-E-d1' },
      {
        t: 'p',
        html: '<b>Oxidation states.</b> The ground-state halogen atom has one unpaired electron, accounting for −1 and, except in F, +1. Promoting electrons into vacant d orbitals gives 3, 5 and 7 unpaired electrons, hence +3, +5 and +7. These higher states are realised mainly with the small, highly electronegative F and O, in interhalogens, oxides and oxoacids; +4 and +6 occur in a few oxides of Cl and Br (for example ClO<sub>2</sub>, Cl<sub>2</sub>O<sub>6</sub>, BrO<sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>The enthalpy cycle behind oxidising power.</b> Reducing gaseous X<sub>2</sub> to aqueous X<sup>−</sup> is, enthalpically, three steps: break half a mole of X–X bonds, add an electron to X, hydrate X<sup>−</sup>.',
      },
      {
        t: 'table',
        title: null,
        head: ['X', '½Δ<sub>diss</sub><i>H</i>', 'Δ<sub>eg</sub><i>H</i>', 'Δ<sub>hyd</sub><i>H</i>', 'Sum / kJ mol<sup>−1</sup>'],
        rows: [
          ['Fluorine (F)', '+79.4', '−333', '−515', '−768.6'],
          ['Chlorine (Cl)', '+121.3', '−349', '−381', '−608.7'],
          ['Bromine (Br)', '+96.4', '−325', '−347', '−575.6'],
          ['Iodine (I)', '+75.6', '−296', '−305', '−525.4'],
        ],
      },
      {
        t: 'p',
        html: 'Fluorine’s sum is the most negative by about 160 kJ mol<sup>−1</sup>: its weak F–F bond and the very high hydration enthalpy of the small F<sup>−</sup> outweigh its less negative electron gain, which is why <i>E</i>° is highest for F<sub>2</sub>. (The sum ignores the vaporisation of Br<sub>2</sub> and I<sub>2</sub>; the ordering is unaffected.) A halogen therefore oxidises the halides of higher atomic number (Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>). With water, F<sub>2</sub> gives oxygen, 2F<sub>2</sub> + 2H<sub>2</sub>O → 4H<sup>+</sup> + 4F<sup>−</sup> + O<sub>2</sub>; Cl<sub>2</sub> and Br<sub>2</sub> give HX + HOX; the reaction of iodine with water is non-spontaneous, and in acid the reverse occurs, 4I<sup>−</sup> + 4H<sup>+</sup> + O<sub>2</sub> → 2I<sub>2</sub> + 2H<sub>2</sub>O.',
      },

      { t: 'part', title: 'Hydrogen halides and chlorine' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'HF', 'HCl', 'HBr', 'HI'],
        rows: [
          ['Boiling point / K', '293', '189', '206', '238'],
          ['Δ<sub>diss</sub><i>H</i> / kJ mol<sup>−1</sup>', '574', '432', '363', '295'],
          ['p<i>K</i><sub>a</sub>', '3.2', '−7.0', '−9.5', '−10.0'],
        ],
      },
      {
        t: 'p',
        html: 'Thermal stability falls from HF to HI while acid strength rises, because the weaker the H–X bond the easier it ionises; HF is the exception to any electronegativity argument (strongest bond, plus hydrogen bonding). HCl is made by NaCl + H<sub>2</sub>SO<sub>4</sub> →<sup>420 K</sup> NaHSO<sub>4</sub> + HCl; HBr and HI cannot be made with concentrated H<sub>2</sub>SO<sub>4</sub> because it oxidises them. Finely powdered iron gives FeCl<sub>2</sub> and H<sub>2</sub> with HCl, not FeCl<sub>3</sub>.',
      },
      {
        t: 'p',
        html: 'Chlorine is made by MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O (or 4NaCl + MnO<sub>2</sub> + 4H<sub>2</sub>SO<sub>4</sub> → MnCl<sub>2</sub> + 4NaHSO<sub>4</sub> + 2H<sub>2</sub>O + Cl<sub>2</sub>) and 2KMnO<sub>4</sub> + 16HCl → 2KCl + 2MnCl<sub>2</sub> + 8H<sub>2</sub>O + 5Cl<sub>2</sub>; industrially by the Deacon process (4HCl + O<sub>2</sub> →<sup>CuCl₂, 723 K</sup> 2Cl<sub>2</sub> + 2H<sub>2</sub>O) or brine electrolysis. Its key reactions:',
      },
      {
        t: 'defgrid',
        title: 'Reagent — Equation',
        rows: [
          { k: 'Metals', v: '2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub> (Fe goes to +3, but only to +2 with HCl)' },
          { k: 'Cold dilute alkali', v: 'Cl<sub>2</sub> + 2NaOH → NaCl + NaOCl + H<sub>2</sub>O' },
          { k: 'Hot concentrated alkali', v: '3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O' },
          { k: 'Dry slaked lime', v: '2Ca(OH)<sub>2</sub> + 2Cl<sub>2</sub> → Ca(OCl)<sub>2</sub> + CaCl<sub>2</sub> + 2H<sub>2</sub>O' },
          {
            k: 'Oxidations',
            v: 'Na<sub>2</sub>SO<sub>3</sub> + Cl<sub>2</sub> + H<sub>2</sub>O → Na<sub>2</sub>SO<sub>4</sub> + 2HCl;<br>SO<sub>2</sub> + 2H<sub>2</sub>O + Cl<sub>2</sub> → H<sub>2</sub>SO<sub>4</sub> + 2HCl; I<sub>2</sub> + 6H<sub>2</sub>O + 5Cl<sub>2</sub> → 2HIO<sub>3</sub> + 10HCl',
          },
        ],
      },
      {
        t: 'p',
        html: 'The two alkali reactions are disproportionations (0 → −1 and +1; 0 → −1 and +5). Chlorine water slowly loses its colour: Cl<sub>2</sub> + H<sub>2</sub>O → HCl + HOCl, and HOCl → HCl + [O] gives the oxidative, permanent bleaching.',
      },
      {
        t: 'p',
        html: '<b>Bleaching powder</b> is made from chlorine and dry slaked lime; its composition is Ca(OCl)<sub>2</sub>·CaCl<sub>2</sub>·Ca(OH)<sub>2</sub>·2H<sub>2</sub>O, written briefly CaOCl<sub>2</sub>. Dilute acid liberates chlorine: CaOCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → CaSO<sub>4</sub> + Cl<sub>2</sub> + H<sub>2</sub>O. For pure CaOCl<sub>2</sub> (<i>M</i> = 127) one mole gives one mole of Cl<sub>2</sub> (71 g), so the available chlorine is 71/127 = 55.9%.',
      },

      { t: 'part', title: 'Interhalogen compounds' },
      {
        t: 'p',
        html: 'Two halogens give XX′, XX′<sub>3</sub>, XX′<sub>5</sub> and XX′<sub>7</sub>, X being the larger and more electropositive. The larger the radius ratio, the more atoms fit around X, which is why IF<sub>7</sub> exists.',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Examples', 'Shape'],
        rows: [
          ['XX′', 'ClF, BrF, BrCl (gases), ICl (ruby-red solid), IBr (black solid)', 'diatomic'],
          ['XX′<sub>3</sub>', 'ClF<sub>3</sub> (gas), BrF<sub>3</sub> (yellow-green liquid), ICl<sub>3</sub> (orange solid; Cl-bridged dimer I<sub>2</sub>Cl<sub>6</sub>)', 'bent T-shaped'],
          ['XX′<sub>5</sub>', 'IF<sub>5</sub>, BrF<sub>5</sub>, ClF<sub>5</sub>', 'square pyramidal'],
          ['XX′<sub>7</sub>', 'IF<sub>7</sub>', 'pentagonal bipyramidal'],
        ],
      },
      {
        t: 'p',
        html: '<b>Shapes derived</b> (central halogen 7 valence electrons, each X′ adds 1; pairs = (7 + <i>n</i>)/2):',
      },
      {
        t: 'table',
        title: null,
        head: ['Compound', 'Pairs', 'Bonding / lone', 'Shape', 'Hybridisation'],
        rows: [
          [
            'ClF<sub>3</sub>, BrF<sub>3</sub>',
            '5',
            '3 / 2',
            'bent T-shaped (both lone pairs equatorial; axial F bend slightly toward the equatorial F)',
            'sp<sup>3</sup>d',
          ],
          ['IF<sub>5</sub>, BrF<sub>5</sub>', '6', '5 / 1', 'square pyramidal', 'sp<sup>3</sup>d<sup>2</sup>'],
          ['IF<sub>7</sub>', '7', '7 / 0', 'pentagonal bipyramidal', 'sp<sup>3</sup>d<sup>3</sup>'],
          [
            'I<sub>3</sub><sup>−</sup>, ICl<sub>2</sub><sup>−</sup> (7 + 1 + 2 = 10 electrons)',
            '5',
            '2 / 3',
            'linear (all lone pairs equatorial)',
            'sp<sup>3</sup>d',
          ],
          ['ICl<sub>4</sub><sup>−</sup> (7 + 1 + 4 = 12 electrons)', '6', '4 / 2', 'square planar', 'sp<sup>3</sup>d<sup>2</sup>'],
        ],
      },
      { t: 'fig', id: 'c12-11-E-d2' },
      {
        t: 'p',
        html: 'All are covalent and diamagnetic, volatile solids or liquids (ClF is a gas; this is NCERT’s line, though the table above also lists BrF, BrCl and ClF<sub>3</sub> as gases), and more reactive than the parent halogens (except F<sub>2</sub>) because the X–X′ bond is weaker than X–X; this is why ICl is more reactive than I<sub>2</sub>. They hydrolyse to the halide of the smaller halogen and an oxo-anion of the larger one, at its original oxidation state: hypohalite for XX′, halite for XX′<sub>3</sub>, halate for XX′<sub>5</sub>, perhalate for XX′<sub>7</sub>:<br>ICl + H<sub>2</sub>O → HCl + HOI,<br>ClF<sub>3</sub> + 2H<sub>2</sub>O → HClO<sub>2</sub> + 3HF<br>IF<sub>5</sub> + 3H<sub>2</sub>O → HIO<sub>3</sub> + 5HF,<br>IF<sub>7</sub> + 4H<sub>2</sub>O → HIO<sub>4</sub> + 7HF<br>None is redox. Preparation is by direct combination, the product set by conditions: I<sub>2</sub> + Cl<sub>2</sub> → 2ICl (equimolar), I<sub>2</sub> + 3Cl<sub>2</sub> → 2ICl<sub>3</sub> (excess Cl<sub>2</sub>), Cl<sub>2</sub> + F<sub>2</sub> →<sup>437 K</sup> 2ClF (equal volumes), Cl<sub>2</sub> + 3F<sub>2</sub> →<sup>573 K</sup> 2ClF<sub>3</sub> (excess F<sub>2</sub>). Uses: non-aqueous solvents, fluorinating agents, and ClF<sub>3</sub> or BrF<sub>3</sub> for UF<sub>6</sub> in uranium enrichment, U + 3ClF<sub>3</sub> → UF<sub>6</sub> + 3ClF.',
      },

      { t: 'part', title: 'The oxoacids of the halogens' },
      {
        t: 'p',
        html: 'Fluorine forms only HOF. Cl, Br and I form HOX (+1), HXO<sub>2</sub> (+3, only for Cl), HXO<sub>3</sub> (+5) and HXO<sub>4</sub> (+7). In each the halogen is the central atom with one X–OH and, as its oxidation state rises, more X=O bonds; most are known only in solution or as salts. The anions are built on four electron-pair domains around Cl (sp<sup>3</sup>):',
      },
      {
        t: 'table',
        title: null,
        head: ['Anion', 'Acid', 'Cl', 'Domains around Cl', 'Shape', 'Terminal O in the acid'],
        rows: [
          ['ClO<sup>−</sup>', 'HOCl', '+1', '1 bond + 3 lone pairs', 'linear (diatomic)', '0'],
          ['ClO<sub>2</sub><sup>−</sup>', 'HClO<sub>2</sub>', '+3', '2 bonds + 2 lone pairs', 'bent', '1'],
          ['ClO<sub>3</sub><sup>−</sup>', 'HClO<sub>3</sub>', '+5', '3 bonds + 1 lone pair', 'pyramidal', '2'],
          ['ClO<sub>4</sub><sup>−</sup>', 'HClO<sub>4</sub>', '+7', '4 bonds + 0 lone pairs', 'tetrahedral', '3'],
        ],
      },
      {
        t: 'p',
        html: '<b>Acid strength rises with oxidation state</b>, HOCl < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>: each extra terminal oxygen pulls electron density from the O–H bond and spreads the negative charge of the conjugate base over more oxygens, so ClO<sub>4</sub><sup>−</sup> is the most stable (weakest) base. At a fixed oxidation state, acid strength falls as the halogen gets less electronegative: HOCl > HOBr > HOI and HClO<sub>3</sub> > HBrO<sub>3</sub> > HIO<sub>3</sub>. Hypohalites disproportionate readily when hot, 3ClO<sup>−</sup> → 2Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup>, which is why chlorine and hot alkali give chlorate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Fluorine has a less negative electron gain enthalpy than chlorine yet is the stronger oxidising agent. Explain with the data.',
        steps: [
          'Oxidising power in water depends on three terms: the dissociation enthalpy of X<sub>2</sub>, the electron gain enthalpy of X and the hydration enthalpy of X<sup>−</sup>. For fluorine the F–F bond is weak (158.8 against 242.6 kJ mol<sup>−1</sup>) and the hydration enthalpy of F<sup>−</sup> is much larger (515 against 381). The cycle sums are −768.6 (F) and −608.7 (Cl) kJ mol<sup>−1</sup>, so these two terms outweigh the 16 kJ mol<sup>−1</sup> by which fluorine’s electron gain is less negative.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Derive the shape, hybridisation and lone-pair count on the central atom of BrF<sub>3</sub>, IF<sub>5</sub> and ICl<sub>4</sub><sup>−</sup>.',
        steps: [
          'BrF<sub>3</sub>: (7 + 3)/2 = 5 pairs, 3 bonding and 2 lone, bent T-shaped, sp<sup>3</sup>d. IF<sub>5</sub>: (7 + 5)/2 = 6 pairs, 5 bonding and 1 lone, square pyramidal, sp<sup>3</sup>d<sup>2</sup>. ICl<sub>4</sub><sup>−</sup>: (7 + 1 + 4)/2 = 6 pairs, 4 bonding and 2 lone (trans), square planar, sp<sup>3</sup>d<sup>2</sup>.',
        ],
        ans: 'bent T-shaped sp<sup>3</sup>d (2 lone pairs); square pyramidal sp<sup>3</sup>d<sup>2</sup> (1); square planar sp<sup>3</sup>d<sup>2</sup> (2).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Chlorine reacts with hot concentrated NaOH to give NaCl and NaClO<sub>3</sub>. Balance it and find (i) the electrons transferred per 3Cl<sub>2</sub> and (ii) the ratio of Cl atoms oxidised to reduced. Then give the hydrolysis products of IF<sub>7</sub> and BrF<sub>5</sub> and say whether they are redox.',
        steps: [
          '3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O. Of six Cl atoms, one goes 0 → +5 (5 e lost) and five go 0 → −1 (5 e gained): (i) 5 electrons; (ii) 1∶5. Hydrolysis: IF<sub>7</sub> + 4H<sub>2</sub>O → HIO<sub>4</sub> + 7HF and BrF<sub>5</sub> + 3H<sub>2</sub>O → HBrO<sub>3</sub> + 5HF; the larger halogen keeps its oxidation state (+7, +5) and F leaves as F<sup>−</sup> in HF, so neither is redox.',
        ],
        ans: '5 e; 1∶5; HIO<sub>4</sub> + HF and HBrO<sub>3</sub> + HF; not redox.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does fluorine show only −1 while chlorine shows +1, +3, +5 and +7 as well? Write the reactions of F<sub>2</sub> and Cl<sub>2</sub> with water.',
            a: 'Fluorine is the most electronegative element and has no d orbitals, so it cannot expand its octet; the others can. 2F<sub>2</sub> + 2H<sub>2</sub>O → 4H<sup>+</sup> + 4F<sup>−</sup> + O<sub>2</sub>; Cl<sub>2</sub> + H<sub>2</sub>O → HCl + HOCl.',
          },
          {
            q: '[NEET] Why is HF the weakest and HI the strongest of the hydrohalic acids? Arrange HOCl, HClO<sub>2</sub>, HClO<sub>3</sub>, HClO<sub>4</sub> by acid strength and give the shape of each anion.',
            a: 'The H–X bond enthalpy falls from 574 kJ mol<sup>−1</sup> (HF) to 295 (HI), so HF ionises least; HF is also strongly hydrogen-bonded. HOCl < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>; anions: linear, bent, pyramidal, tetrahedral.',
          },
          {
            q: '[JEE Main] Identify (a) a linear triatomic with three lone pairs on the central halogen, (b) a square planar species with two lone pairs, (c) a square pyramidal species with one lone pair.',
            a: 'Linear triatomic: I<sub>3</sub><sup>−</sup> (or ICl<sub>2</sub><sup>−</sup>); square planar: ICl<sub>4</sub><sup>−</sup> (or XeF<sub>4</sub>); square pyramidal: IF<sub>5</sub> (or BrF<sub>5</sub>, XeOF<sub>4</sub>).',
          },
          {
            q: '[JEE Main] How many moles of KMnO<sub>4</sub> and of HCl are needed to produce 5.0 mol of Cl<sub>2</sub>?',
            a: '2KMnO<sub>4</sub> + 16HCl → 2KCl + 2MnCl<sub>2</sub> + 8H<sub>2</sub>O + 5Cl<sub>2</sub>: 2 mol KMnO<sub>4</sub> and 16 mol HCl (10 mol become Cl<sub>2</sub>, 6 stay as chloride in the salts).',
          },
          {
            q: '[JEE Advanced] Explain why Fe gives FeCl<sub>3</sub> with Cl<sub>2</sub> but FeCl<sub>2</sub> with HCl, and why iodine does not react with water as chlorine does.',
            a: 'Cl<sub>2</sub> is a strong enough oxidant to take iron to +3; with HCl the oxidant is H<sup>+</sup>, which is too weak to oxidise Fe<sup>2+</sup> further (<i>E</i>° of H<sup>+</sup>/H<sub>2</sub> is 0 V, below that of Fe<sup>3+</sup>/Fe<sup>2+</sup>), and the evolved hydrogen also prevents the formation of FeCl<sub>3</sub>. Iodine is a far weaker oxidant than chlorine: its reaction with water is non-spontaneous, and in acid the reverse, 4I<sup>−</sup> + 4H<sup>+</sup> + O<sub>2</sub> → 2I<sub>2</sub> + 2H<sub>2</sub>O, occurs.',
          },
        ],
      },
    ],
  },
];
