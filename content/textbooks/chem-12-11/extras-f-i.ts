import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional Topics F to I, word for word from the Class 12 Chemistry
 * Master Reference:
 * - F Group 18: Xenon Compounds from VSEPR (pp. 575–578; it opens partway down p. 575,
 *   after Addendum E's answer 5, and its answers end on p. 578, where Addendum G
 *   begins). Its "Figure 9" (p. 576, the shapes of the xenon compounds, never named in
 *   the text) is c12-11-F-d1, where the book prints it, after the paragraph on where
 *   the lone pairs sit.
 * - G Multiple-Choice Drill with Distractor Analysis (pp. 578–580): its opening
 *   paragraph is the Introduction (as in Chemistry 11's Summary Checklist), then a part
 *   under the addendum's own heading holds the ten MCQs, each `mcq` with its key and
 *   one nudge per wrong option from the book's analysis.
 * - H Common Pitfalls and a Cheat Sheet (pp. 580–581): its pitfalls, then "Cheat sheet
 *   1 - shapes and hybridisation" (a table) and "Cheat sheet 2 - trends and key
 *   numbers" (a two-column topic/value sheet, set as a cheat-sheet snapshot), each
 *   titled after its " - ".
 * - I, the supplement's "Addendum P - What JEE and NEET Actually Ask" (pp. 582–583),
 *   kept as the last Additional topic. Page 584 starts the errata.
 *
 * In F, as in B and C, the blue "Method" heading carries no text of its own; the
 * smaller headings under it ("The data", "Deriving every shape", "Preparation and
 * hydrolysis") are the parts. Each addendum prints its answers in one block after its
 * practice questions; each is set here with its own question. G's questions keep their
 * level tags at the start, as practice questions do. The book's italic run-in labels
 * ("Approach:") are bold. Bonds take an en dash (Xe–F, P–OH, X–X), hybrid and orbital
 * labels are upright (sp<sup>3</sup>d<sup>2</sup>, 3d<sup>7</sup>), σ and π are
 * upright, the book's "e" for electrons is kept, and ratios take "∶" as in B.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic Q · pp. 575–578 ─────────────────────────
  {
    n: 'Q',
    title: 'Group 18: Xenon Compounds from VSEPR',
    extra: true,
    kalam: 'Where lone pairs sit: the three in XeF₂ are equatorial, the two in XeF₄ are trans, and the one in XeOF₄ is trans to O.',
    blocks: [
      { t: 'part', title: 'The data' },
      {
        t: 'table',
        title: null,
        head: ['Property', 'He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'],
        rows: [
          ['Ionisation enthalpy / kJ mol<sup>−1</sup>', '2372', '2080', '1520', '1351', '1170', '1037'],
          ['Electron gain enthalpy / kJ mol<sup>−1</sup>', '+48', '+116', '+96', '+96', '+77', '+68'],
          ['Boiling point / K', '4.2', '27.1', '87.2', '119.7', '165.0', '211'],
        ],
      },
      {
        t: 'p',
        html: 'All are monatomic, colourless, odourless and tasteless. The boiling points are extremely low because the only interatomic force is weak dispersion; helium (4.2 K) has the lowest boiling point of any substance. The electron gain enthalpies are positive because the added electron must enter a new shell.',
      },
      {
        t: 'p',
        html: '<b>Why xenon.</b> PtF<sub>6</sub> oxidises O<sub>2</sub> (first ionisation 1175 kJ mol<sup>−1</sup>) to O<sub>2</sub><sup>+</sup>PtF<sub>6</sub><sup>−</sup>; xenon’s first ionisation enthalpy (1170 kJ mol<sup>−1</sup>) is almost identical, so Bartlett mixed Xe with PtF<sub>6</sub> and obtained a red solid, formulated by NCERT as Xe<sup>+</sup>PtF<sub>6</sub><sup>−</sup> (later work showed the product to be more complex). Krypton, with a higher ionisation enthalpy, gives mainly KrF<sub>2</sub>; RnF<sub>2</sub> is identified only by radiotracer; He, Ne and Ar form no stable compounds under ordinary conditions. The heavier noble gases can be physically trapped in clathrate hydrates (about 6 H<sub>2</sub>O per atom), whereas He and Ne escape from the cages.',
      },

      { t: 'part', title: 'Deriving every shape' },
      {
        t: 'p',
        html: '<b>Recipe.</b> Xe has 8 valence electrons. It uses 1 for each Xe–F bond and 2 for each double-bonded Xe=O (one σ and one π). The electrons left, halved, are the lone pairs; domains are bonded atoms plus lone pairs. XeF<sub>2</sub>: 8 − 2 = 6 left, 3 lone pairs. XeF<sub>4</sub>: 8 − 4 = 4, 2 lone pairs. XeF<sub>6</sub>: 8 − 6 = 2, 1 lone pair. XeO<sub>3</sub>: 8 − 6 = 2, 1. XeOF<sub>4</sub>: 8 − 2 − 4 = 2, 1. XeO<sub>4</sub>: 8 − 8 = 0.',
      },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Domains', 'Bonding / lone', 'Shape', 'Hybridisation', 'Xe state'],
        rows: [
          ['XeF<sub>2</sub>', '5', '2 / 3', '<b>linear</b>', 'sp<sup>3</sup>d', '+2'],
          ['XeF<sub>4</sub>', '6', '4 / 2', '<b>square planar</b>', 'sp<sup>3</sup>d<sup>2</sup>', '+4'],
          ['XeF<sub>6</sub>', '7', '6 / 1', '<b>distorted octahedral</b>', 'sp<sup>3</sup>d<sup>3</sup>', '+6'],
          ['XeO<sub>3</sub>', '4', '3 / 1', '<b>pyramidal</b>', 'sp<sup>3</sup>', '+6'],
          ['XeOF<sub>4</sub>', '6', '5 / 1', '<b>square pyramidal</b>', 'sp<sup>3</sup>d<sup>2</sup>', '+6'],
          ['XeO<sub>2</sub>F<sub>2</sub>', '5', '4 / 1', '<b>see-saw</b>', 'sp<sup>3</sup>d', '+6'],
          ['XeO<sub>4</sub>', '4', '4 / 0', '<b>tetrahedral</b>', 'sp<sup>3</sup>', '+8'],
          ['XeF<sub>5</sub><sup>+</sup>', '6', '5 / 1', 'square pyramidal', 'sp<sup>3</sup>d<sup>2</sup>', '+6'],
          ['XeF<sub>5</sub><sup>−</sup>', '7', '5 / 2', 'pentagonal planar', 'sp<sup>3</sup>d<sup>3</sup>', '+4'],
        ],
      },
      {
        t: 'p',
        html: 'The last two rows go beyond NCERT and show that the recipe carries over to ions (XeF<sub>5</sub><sup>−</sup>: 8 + 5 + 1 = 14 electrons, 7 pairs, the two lone pairs axial above and below the pentagonal plane). Where lone pairs sit: the three in XeF<sub>2</sub> are equatorial, the two in XeF<sub>4</sub> are trans, and the one in XeOF<sub>4</sub> is trans to O.',
      },
      { t: 'fig', id: 'c12-11-F-d1' },
      {
        t: 'p',
        html: '<b>Isostructural pairs by electron count.</b> XeF<sub>2</sub>: 8 + 14 = 22, as I<sub>3</sub><sup>−</sup> (21 + 1). XeF<sub>4</sub>: 8 + 28 = 36, as ICl<sub>4</sub><sup>−</sup> (7 + 28 + 1). XeF<sub>6</sub>: 50, as IF<sub>6</sub><sup>−</sup>. XeO<sub>3</sub>: 8 + 18 = 26, as IO<sub>3</sub><sup>−</sup> and ClO<sub>3</sub><sup>−</sup>. XeOF<sub>4</sub>: 8 + 6 + 28 = 42, as IF<sub>5</sub> (7 + 35). XeF<sub>2</sub>, XeF<sub>4</sub> and XeO<sub>4</sub> are non-polar by symmetry; XeO<sub>3</sub> and XeOF<sub>4</sub> are polar.',
      },
      {
        t: 'p',
        html: 'In XeOF<sub>4</sub> the O–Xe–F angle is about 91°, since the double bond repels slightly more than the lone pair.',
      },

      { t: 'part', title: 'Preparation and hydrolysis' },
      {
        t: 'p',
        html: '<b>Direct combination</b> (product set by the Xe∶F<sub>2</sub> ratio, <i>T</i> and <i>P</i>): Xe + F<sub>2</sub> →<sup>673 K, 1 bar</sup> XeF<sub>2</sub> (Xe in excess); Xe + 2F<sub>2</sub> →<sup>873 K, 7 bar</sup> XeF<sub>4</sub> (1∶5); Xe + 3F<sub>2</sub> →<sup>573 K, 60–70 bar</sup> XeF<sub>6</sub> (1∶20). Also XeF<sub>4</sub> + O<sub>2</sub>F<sub>2</sub> → XeF<sub>6</sub> + O<sub>2</sub> at 143 K. All three are colourless solids that sublime at room temperature, are powerful fluorinating agents and are hydrolysed even by traces of water.',
      },
      {
        t: 'table',
        title: null,
        head: ['Reaction', 'Equation', 'Redox?'],
        rows: [
          ['XeF<sub>2</sub> + water', '2XeF<sub>2</sub> + 2H<sub>2</sub>O → 2Xe + 4HF + O<sub>2</sub>', 'yes: Xe +2 → 0, O −2 → 0'],
          [
            'XeF<sub>4</sub> + water',
            '6XeF<sub>4</sub> + 12H<sub>2</sub>O → 4Xe + 2XeO<sub>3</sub> + 24HF + 3O<sub>2</sub>',
            'yes: Xe +4 → 0 and +6',
          ],
          ['XeF<sub>6</sub>, complete', 'XeF<sub>6</sub> + 3H<sub>2</sub>O → XeO<sub>3</sub> + 6HF', 'no'],
          [
            'XeF<sub>6</sub>, partial',
            'XeF<sub>6</sub> + H<sub>2</sub>O → XeOF<sub>4</sub> + 2HF;<br>XeF<sub>6</sub> + 2H<sub>2</sub>O → XeO<sub>2</sub>F<sub>2</sub> + 4HF',
            'no',
          ],
          ['XeF<sub>6</sub> + silica', '2XeF<sub>6</sub> + SiO<sub>2</sub> → 2XeOF<sub>4</sub> + SiF<sub>4</sub>', 'no'],
        ],
      },
      {
        t: 'p',
        html: 'Electron check for XeF<sub>4</sub>: four Xe fall +4 → 0 (16 e gained); two Xe rise +4 → +6 (4 e lost) and six O leave as O<sub>2</sub>, rising −2 → 0 (12 e lost); 4 + 12 = 16. XeO<sub>3</sub> is a colourless, explosive solid; XeOF<sub>4</sub> a colourless volatile liquid. With fluoride acceptors the fluorides give cations, XeF<sub>2</sub> + PF<sub>5</sub> → [XeF]<sup>+</sup>[PF<sub>6</sub>]<sup>−</sup> and XeF<sub>4</sub> + SbF<sub>5</sub> → [XeF<sub>3</sub>]<sup>+</sup>[SbF<sub>6</sub>]<sup>−</sup>; with fluoride donors they give anions, XeF<sub>6</sub> + MF → M<sup>+</sup>[XeF<sub>7</sub>]<sup>−</sup> (M = Na, K, Rb, Cs).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'What inspired Bartlett to try the reaction of xenon with PtF<sub>6</sub>?',
        steps: [
          'He had made O<sub>2</sub><sup>+</sup>PtF<sub>6</sub><sup>−</sup> and noticed that the first ionisation enthalpy of O<sub>2</sub> (1175 kJ mol<sup>−1</sup>) is almost identical to xenon’s (1170 kJ mol<sup>−1</sup>). If PtF<sub>6</sub> oxidises O<sub>2</sub> it should oxidise Xe, and mixing them gave the red solid Xe<sup>+</sup>PtF<sub>6</sub><sup>−</sup>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'A colourless explosive solid X, pyramidal in shape, is formed on hydrolysing XeF<sub>4</sub>. Identify X, give the oxidation state of Xe, the numbers of σ and π bonds (usual drawing) and a species isostructural with it.',
        steps: [
          'X is XeO<sub>3</sub> (the XeF<sub>4</sub> equation forms 2 XeO<sub>3</sub> per 6 XeF<sub>4</sub>). Xe is +6; three bonding domains plus one lone pair give a pyramid (sp<sup>3</sup>); three Xe=O bonds give 3 σ + 3 π. It has 26 valence electrons, like IO<sub>3</sub><sup>−</sup> and ClO<sub>3</sub><sup>−</sup>, both pyramidal.',
        ],
        ans: 'XeO<sub>3</sub>; +6; 3 σ + 3 π; isostructural with IO<sub>3</sub><sup>−</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Among XeF<sub>2</sub>, XeF<sub>4</sub>, XeO<sub>3</sub>, XeOF<sub>4</sub> and XeO<sub>4</sub>, how many (i) have zero dipole moment, (ii) can be obtained from XeF<sub>6</sub> by hydrolysis with no change of oxidation state, (iii) have sp<sup>3</sup>d<sup>2</sup> hybridisation on Xe? Also find the total number of lone pairs on all atoms in XeF<sub>4</sub>.',
        steps: [
          'For (i), the symmetric species are XeF<sub>2</sub> (linear), XeF<sub>4</sub> (square planar), XeO<sub>4</sub> (tetrahedral): 3.',
          '(ii) XeO<sub>3</sub> (complete) and XeOF<sub>4</sub> (partial), both Xe +6: 2.',
          '(iii) XeF<sub>4</sub> and XeOF<sub>4</sub> (6 domains each): 2.',
          'In XeF<sub>4</sub>: 2 on Xe and 4 × 3 = 12 on the F atoms, 14 in all.',
        ],
        ans: '3, 2, 2; 14.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why are the noble gases monatomic with very low boiling points?',
            a: 'Their valence shells are full, so they do not bond and exist as separate atoms; the only interatomic force is weak dispersion, so very little thermal energy separates the atoms.',
          },
          {
            q: '[NEET] Which of NeF<sub>2</sub>, XeF<sub>2</sub> and XeOF<sub>4</sub> does not exist, and why? State the shape of XeF<sub>4</sub>, XeO<sub>3</sub> and XeOF<sub>4</sub>.',
            a: 'NeF<sub>2</sub> does not exist: neon’s ionisation enthalpy (2080 kJ mol<sup>−1</sup>) is far too high. XeF<sub>4</sub> square planar; XeO<sub>3</sub> pyramidal; XeOF<sub>4</sub> square pyramidal.',
          },
          {
            q: '[JEE Main] Balance XeF<sub>4</sub> + H<sub>2</sub>O → Xe + XeO<sub>3</sub> + HF + O<sub>2</sub> and name the xenon species isostructural with ICl<sub>4</sub><sup>−</sup> and IF<sub>5</sub>.',
            a: '6XeF<sub>4</sub> + 12H<sub>2</sub>O → 4Xe + 2XeO<sub>3</sub> + 24HF + 3O<sub>2</sub>. XeF<sub>4</sub> is isostructural with ICl<sub>4</sub><sup>−</sup> (36 electrons) and XeOF<sub>4</sub> with IF<sub>5</sub> (42 electrons).',
          },
          {
            q: '[JEE Advanced] Write the products of XeF<sub>2</sub> with (a) PF<sub>5</sub> and (b) water, and find the total number of lone pairs on all atoms in XeF<sub>2</sub> and XeOF<sub>4</sub> (Xe=O with two lone pairs on O).',
            a: 'With PF<sub>5</sub>: [XeF]<sup>+</sup>[PF<sub>6</sub>]<sup>−</sup>; with water: 2XeF<sub>2</sub> + 2H<sub>2</sub>O → 2Xe + 4HF + O<sub>2</sub>. Lone pairs: XeF<sub>2</sub> 3 + 2 × 3 = 9; XeOF<sub>4</sub>: Xe 1 + O 2 + 4 × 3 on F = 15; total 24.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic R · pp. 578–580 ─────────────────────────
  {
    n: 'R',
    title: 'Multiple-Choice Drill with Distractor Analysis',
    extra: true,
    kalam: 'Each question has exactly one correct option.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Each question has exactly one correct option. The analysis after the key says what mistake each wrong option was built to catch; reading it is worth as much as getting the question right.',
      },

      { t: 'part', title: 'Multiple-Choice Drill with Distractor Analysis' },
      {
        t: 'mcq',
        q: '[NEET] 100 mL of 0.10 M H<sub>3</sub>PO<sub>3</sub> is neutralised completely by 0.10 M NaOH. The volume of NaOH needed is:',
        opts: [
          { label: '100 mL', nudge: '<b>(a)</b> treats it like H<sub>3</sub>PO<sub>2</sub> (monobasic).' },
          { label: '200 mL', nudge: null },
          {
            label: '300 mL',
            nudge: 'Option <b>(c)</b> counts the three H atoms in the formula (the tribasic H<sub>3</sub>PO<sub>4</sub> value).',
          },
          { label: '150 mL', nudge: '<b>(d)</b> is a midpoint with no chemistry behind it.' },
        ],
        correct: 1,
        solution: 'H<sub>3</sub>PO<sub>3</sub> is dibasic (two P–OH), so 0.010 mol of acid needs 0.020 mol of NaOH = 200 mL.',
      },
      {
        t: 'mcq',
        q: '[JEE Main] In the brown-ring complex [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup>, the oxidation state of iron (taking NO as NO<sup>+</sup>) and the spin-only magnetic moment are:',
        opts: [
          { label: '+1, 3.87 BM', nudge: null },
          {
            label: '+2, 4.90 BM',
            nudge: 'Option <b>(b)</b> reads the complex as an ordinary Fe<sup>2+</sup> high-spin d<sup>6</sup> ion.',
          },
          { label: '+3, 5.92 BM', nudge: '<b>(c)</b> reads the complex as Fe<sup>3+</sup> high-spin d<sup>5</sup>.' },
          {
            label: '+1, 1.73 BM',
            nudge: '<b>(d)</b> has the right oxidation state but forces a low-spin d<sup>7</sup> with one unpaired electron.',
          },
        ],
        correct: 0,
        solution: '<i>x</i> + 1 = +2 gives Fe(+1), 3d<sup>7</sup>, with three unpaired electrons in the high-spin arrangement: √(3 × 5) = 3.87 BM.',
      },
      {
        t: 'mcq',
        q: '[JEE Main] The species having square pyramidal shape is:',
        opts: [
          { label: 'XeF<sub>4</sub>', nudge: '<b>(a)</b> is square planar (two lone pairs, trans).' },
          { label: 'XeO<sub>3</sub>', nudge: '<b>(b)</b> is pyramidal with a three-sided base (trigonal pyramid).' },
          { label: 'XeOF<sub>4</sub>', nudge: null },
          { label: 'XeF<sub>2</sub>', nudge: '<b>(d)</b> is linear.' },
        ],
        correct: 2,
        solution: 'XeOF<sub>4</sub>: five bonded atoms and one lone pair on an octahedral pair arrangement.',
      },
      {
        t: 'mcq',
        q: '[NEET] The correct order of the X–X bond dissociation enthalpy of the halogens is:',
        opts: [
          {
            label: 'F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>',
            nudge: 'Option <b>(a)</b> is the naive “smallest atom, strongest bond” order.',
          },
          { label: 'Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>', nudge: null },
          {
            label: 'Cl<sub>2</sub> > F<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>',
            nudge: '<b>(c)</b> is the order of electron gain enthalpy magnitude (Cl > F > Br > I) wearing the wrong label.',
          },
          { label: 'Br<sub>2</sub> > Cl<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>', nudge: '<b>(d)</b> has no chemical logic.' },
        ],
        correct: 1,
        solution: 'The values are 242.6, 192.8, 158.8 and 151.1 kJ mol<sup>−1</sup>.',
      },
      {
        t: 'mcq',
        q: '[JEE Main] The shape and the hybridisation of the central atom in ClO<sub>3</sub><sup>−</sup> are:',
        opts: [
          {
            label: 'trigonal planar, sp<sup>2</sup>',
            nudge: 'Option <b>(a)</b> is the shape of NO<sub>3</sub><sup>−</sup> and CO<sub>3</sub><sup>2−</sup>, tempting by the formula pattern.',
          },
          { label: 'pyramidal, sp<sup>3</sup>', nudge: null },
          { label: 'tetrahedral, sp<sup>3</sup>', nudge: '<b>(c)</b> is ClO<sub>4</sub><sup>−</sup>.' },
          { label: 'bent T-shaped, sp<sup>3</sup>d', nudge: '<b>(d)</b> is the shape of ClF<sub>3</sub>.' },
        ],
        correct: 1,
        solution: 'ClO<sub>3</sub><sup>−</sup> has three bonding domains and one lone pair on Cl (four domains, sp<sup>3</sup>), so it is pyramidal, like XeO<sub>3</sub> and IO<sub>3</sub><sup>−</sup>.',
      },
      {
        t: 'mcq',
        q: '[NEET] Which statement about ozone is correct?',
        opts: [
          {
            label: 'It has one O–O single bond and one O=O double bond with different lengths.',
            nudge: 'Option <b>(a)</b> takes one canonical form as the real structure.',
          },
          { label: 'The two O–O bonds are identical, 128 pm each, with an angle of about 117°.', nudge: null },
          {
            label: 'It is linear and paramagnetic.',
            nudge: '<b>(c)</b> confuses it with CO<sub>2</sub>-type linear species and with paramagnetic O<sub>2</sub> (ozone is bent and diamagnetic).',
          },
          {
            label: 'Its formation from O<sub>2</sub> is exothermic, so a spark is the best way to make it.',
            nudge: '<b>(d)</b> reverses the sign: the reaction is endothermic (+142 kJ per mole of O<sub>3</sub> formed, so +284 kJ for 3O<sub>2</sub> → 2O<sub>3</sub>) and a spark would destroy the ozone, which is why a silent discharge is used.',
          },
        ],
        correct: 1,
        solution: 'Resonance makes the two bonds equal (bond order 1.5).',
      },
      {
        t: 'mcq',
        q: '[JEE Main] An oleum sample labelled 109% gives 109 g of pure H<sub>2</sub>SO<sub>4</sub> when 100 g of it is diluted with 9 g of water. The percentage by mass of free SO<sub>3</sub> in the oleum is:',
        opts: [
          { label: '9%', nudge: 'Option <b>(a)</b> subtracts 100 from the label.' },
          { label: '20%', nudge: '<b>(b)</b> has no derivation.' },
          { label: '40%', nudge: null },
          {
            label: '80%',
            nudge: '<b>(d)</b> is the answer for a 118% label (80 g of free SO<sub>3</sub> needs 18 g of water).',
          },
        ],
        correct: 2,
        solution: '9 g of water is 0.50 mol, which converts 0.50 mol of SO<sub>3</sub> (40 g) to H<sub>2</sub>SO<sub>4</sub>: 40 g free SO<sub>3</sub> and 60 g H<sub>2</sub>SO<sub>4</sub> in the 100 g (check: 60 + 49 = 109 g).',
      },
      {
        t: 'mcq',
        q: '[JEE Main] Hydrolysis of IF<sub>5</sub> gives:',
        opts: [
          { label: 'HIO<sub>3</sub> and HF', nudge: null },
          { label: 'HOI and HF', nudge: 'Option <b>(b)</b> is the product of an XX′ compound (hypohalite).' },
          { label: 'HIO<sub>4</sub> and HF', nudge: '<b>(c)</b> is the product of XX′<sub>7</sub> (perhalate).' },
          { label: 'HIO<sub>2</sub> and HF', nudge: '<b>(d)</b> is the product of XX′<sub>3</sub> (halite).' },
        ],
        correct: 0,
        solution: 'An XX′<sub>5</sub> interhalogen gives the halate of the larger halogen (iodine stays at +5) and the hydrogen halide of the smaller: IF<sub>5</sub> + 3H<sub>2</sub>O → HIO<sub>3</sub> + 5HF.',
      },
      {
        t: 'mcq',
        q: '[JEE Advanced] The total number of lone pairs on the central atoms of XeF<sub>2</sub>, XeF<sub>4</sub>, XeOF<sub>4</sub> and ClF<sub>3</sub> together is:',
        opts: [
          { label: '6', nudge: 'Option <b>(a)</b> leaves out ClF<sub>3</sub>.' },
          {
            label: '7',
            nudge: '<b>(b)</b> credits ClF<sub>3</sub> with a single lone pair (it has two, both equatorial).',
          },
          { label: '8', nudge: null },
          {
            label: '9',
            nudge: '<b>(d)</b> gives XeOF<sub>4</sub> two lone pairs on Xe, forgetting that the Xe=O bond uses two of xenon’s eight electrons.',
          },
        ],
        correct: 2,
        solution: '3 + 2 + 1 + 2 = 8.',
      },
      {
        t: 'mcq',
        q: '[JEE Advanced] From N<sub>2</sub>O, NO, N<sub>2</sub>O<sub>4</sub>, NO<sub>2</sub>, ClO<sub>2</sub> and O<sub>3</sub>, the number of paramagnetic species is:',
        opts: [
          { label: '2', nudge: 'Option <b>(a)</b> forgets ClO<sub>2</sub>.' },
          { label: '3', nudge: null },
          {
            label: '4',
            nudge: '<b>(c)</b> counts N<sub>2</sub>O<sub>4</sub> or O<sub>3</sub> by confusion with NO<sub>2</sub> and O<sub>2</sub>.',
          },
          { label: '5', nudge: '<b>(d)</b> counts both N<sub>2</sub>O<sub>4</sub> and O<sub>3</sub>.' },
        ],
        correct: 1,
        solution: 'NO (11 valence electrons), NO<sub>2</sub> (17) and ClO<sub>2</sub> (19) have odd electron counts and an unpaired electron; N<sub>2</sub>O (16), N<sub>2</sub>O<sub>4</sub> (34) and O<sub>3</sub> (18) are even-electron and diamagnetic.',
      },
    ],
  },

  // ───────────────────────── Additional topic S · pp. 580–581 ─────────────────────────
  {
    n: 'S',
    title: 'Common Pitfalls and a Cheat Sheet',
    extra: true,
    kalam: 'Match shapes by lone pairs, not by formula pattern.',
    blocks: [
      { t: 'part', title: 'Pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Basicity of phosphorus oxoacids</b> equals the number of P–OH groups, not the number of H atoms: H<sub>3</sub>PO<sub>2</sub> 1, H<sub>3</sub>PO<sub>3</sub> 2, H<sub>3</sub>PO<sub>4</sub> 3, H<sub>4</sub>P<sub>2</sub>O<sub>6</sub> and H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> 4.',
          '<b>Nitric acid’s product depends on concentration and metal.</b> Cu: dilute NO, concentrated NO<sub>2</sub>. Zn: dilute N<sub>2</sub>O, concentrated NO<sub>2</sub>, very dilute NH<sub>4</sub>NO<sub>3</sub>. Balance by electrons first; the HNO<sub>3</sub> count is nitrate in the salt plus nitrate reduced.',
          '<b>PCl<sub>5</sub>.</b> Gas and liquid: trigonal bipyramid, axial bonds longer. Solid: [PCl<sub>4</sub>]<sup>+</sup>[PCl<sub>6</sub>]<sup>−</sup>. A chlorinating agent, and in redox an oxidising agent only (its P is already +5).',
          '<b>Two different fluorine orders.</b> Bond enthalpy: Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>. Electron-gain magnitude: Cl > F > Br > I. Do not write one under the other’s question. HF is the weakest hydrohalic acid (strongest bond, plus hydrogen bonding).',
          '<b>Contact process.</b> SO<sub>3</sub> is absorbed in concentrated H<sub>2</sub>SO<sub>4</sub>, not water.',
          '<b>Odd-electron species</b> (NO, NO<sub>2</sub>, ClO<sub>2</sub>) are paramagnetic; N<sub>2</sub>O, N<sub>2</sub>O<sub>4</sub> and O<sub>3</sub> are not.',
          '<b>Brown ring.</b> Fe is +1 (NO counted as NO<sup>+</sup>), three unpaired electrons.',
          '<b>Ammonia, per mole.</b> −46.1 kJ is per mole of NH<sub>3</sub>; the equation makes two moles. Cl<sub>2</sub> plus NH<sub>3</sub> gives N<sub>2</sub> with excess NH<sub>3</sub> and NCl<sub>3</sub> with excess Cl<sub>2</sub>.',
          '<b>Xenon hydrolysis.</b> XeF<sub>2</sub> and XeF<sub>4</sub> hydrolyse with redox; XeF<sub>6</sub> to XeO<sub>3</sub>, XeOF<sub>4</sub> or XeO<sub>2</sub>F<sub>2</sub> does not.',
          '<b>Match shapes by lone pairs, not by formula pattern.</b> ClO<sub>3</sub><sup>−</sup>, XeO<sub>3</sub>, SO<sub>3</sub><sup>2−</sup> and NH<sub>3</sub> are pyramidal; NO<sub>3</sub><sup>−</sup>, SO<sub>3</sub> and CO<sub>3</sub><sup>2−</sup> are planar.',
        ],
      },

      { t: 'part', title: 'Shapes and hybridisation' },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Bonding / lone pairs', 'Shape', 'Hybridisation'],
        rows: [
          [
            'NH<sub>3</sub>, PH<sub>3</sub>, PCl<sub>3</sub>, XeO<sub>3</sub>, ClO<sub>3</sub><sup>−</sup>, IO<sub>3</sub><sup>−</sup>',
            '3 / 1',
            'pyramidal',
            'sp<sup>3</sup>',
          ],
          [
            'NH<sub>4</sub><sup>+</sup>, PH<sub>4</sub><sup>+</sup>, [PCl<sub>4</sub>]<sup>+</sup>, XeO<sub>4</sub>, ClO<sub>4</sub><sup>−</sup>',
            '4 / 0',
            'tetrahedral',
            'sp<sup>3</sup>',
          ],
          ['NO<sub>2</sub><sup>+</sup>', '2 / 0', 'linear', 'sp'],
          ['NO<sub>2</sub><sup>−</sup>, O<sub>3</sub>, SO<sub>2</sub>', '2 / 1', 'bent', 'sp<sup>2</sup>'],
          ['NO<sub>3</sub><sup>−</sup>, SO<sub>3</sub>', '3 / 0', 'trigonal planar', 'sp<sup>2</sup>'],
          ['ClO<sub>2</sub><sup>−</sup>', '2 / 2', 'bent', 'sp<sup>3</sup>'],
          ['PCl<sub>5</sub> (gas)', '5 / 0', 'trigonal bipyramidal', 'sp<sup>3</sup>d'],
          ['SF<sub>4</sub>, XeO<sub>2</sub>F<sub>2</sub>', '4 / 1', 'see-saw', 'sp<sup>3</sup>d'],
          ['ClF<sub>3</sub>, BrF<sub>3</sub>', '3 / 2', 'bent T-shaped', 'sp<sup>3</sup>d'],
          ['I<sub>3</sub><sup>−</sup>, ICl<sub>2</sub><sup>−</sup>, XeF<sub>2</sub>', '2 / 3', 'linear', 'sp<sup>3</sup>d'],
          ['[PCl<sub>6</sub>]<sup>−</sup>, SF<sub>6</sub>', '6 / 0', 'octahedral', 'sp<sup>3</sup>d<sup>2</sup>'],
          ['IF<sub>5</sub>, BrF<sub>5</sub>, XeOF<sub>4</sub>', '5 / 1', 'square pyramidal', 'sp<sup>3</sup>d<sup>2</sup>'],
          ['ICl<sub>4</sub><sup>−</sup>, XeF<sub>4</sub>', '4 / 2', 'square planar', 'sp<sup>3</sup>d<sup>2</sup>'],
          ['XeF<sub>6</sub>, IF<sub>6</sub><sup>−</sup>', '6 / 1', 'distorted octahedral', 'sp<sup>3</sup>d<sup>3</sup>'],
          ['IF<sub>7</sub>', '7 / 0', 'pentagonal bipyramidal', 'sp<sup>3</sup>d<sup>3</sup>'],
        ],
      },

      { t: 'part', title: 'Trends and key numbers' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Basicity of EH<sub>3</sub>; reducing power',
            note: 'basicity NH<sub>3</sub> > PH<sub>3</sub> > AsH<sub>3</sub> > SbH<sub>3</sub> ≥ BiH<sub>3</sub>; reducing power the reverse',
          },
          {
            f: 'Boiling point of EH<sub>3</sub>',
            note: 'PH<sub>3</sub> < AsH<sub>3</sub> < NH<sub>3</sub> < SbH<sub>3</sub> < BiH<sub>3</sub>',
          },
          {
            f: 'H<sub>2</sub>E',
            note: 'stability H<sub>2</sub>O > H<sub>2</sub>S > H<sub>2</sub>Se > H<sub>2</sub>Te; acidity the reverse',
          },
          {
            f: 'X–X bond enthalpy; electron-gain magnitude',
            note: 'Cl<sub>2</sub> > Br<sub>2</sub> > F<sub>2</sub> > I<sub>2</sub>; Cl > F > Br > I',
          },
          {
            f: 'Oxidising power; HX acid strength',
            note: 'F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>; HF < HCl < HBr < HI',
          },
          {
            f: 'Acid strength: oxoacids of Cl; same-state oxoacids',
            note: 'HOCl < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>; HOCl > HOBr > HOI',
          },
          { f: 'Stability of halogen oxides', note: 'I > Cl > Br' },
          {
            f: 'Bond length of oxygen species',
            note: 'O<sub>2</sub><sup>+</sup> < O<sub>2</sub> < O<sub>2</sub><sup>−</sup> < O<sub>2</sub><sup>2−</sup>',
          },
          { f: 'O–N–O angle', note: 'NO<sub>2</sub><sup>+</sup> > NO<sub>2</sub> > NO<sub>2</sub><sup>−</sup>' },
          {
            f: 'Haber / Ostwald / Contact',
            note: 'Haber 200 atm, 700 K, Fe; Ostwald Pt/Rh, 500 K, 9 bar; Contact V<sub>2</sub>O<sub>5</sub>, 720 K, 2 bar',
          },
        ],
        aids: [],
      },
    ],
  },

  // ─────────────── Additional topic T (the book's Addendum P) · pp. 582–583 ───────────────
  {
    n: 'T',
    title: 'What JEE and NEET Actually Ask: Groups 15 to 18',
    extra: true,
    kalam: 'This chapter rewards accuracy on small facts far more than long derivations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This chapter rewards accuracy on small facts far more than long derivations. The question types below are grouped by the skill they test, each with the approach that works.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>Trend and order questions.</b> Arrange a set by acid strength, bond enthalpy, basicity, boiling point, bond angle, thermal stability or oxidising power. <b>Approach:</b> recall the order, then confirm it with its one-line reason (bond enthalpy for HX and H<sub>2</sub>E; hydrogen bonding for boiling points; lone-pair repulsion for angles). The distractor is the “obvious” order that ignores the second-period anomaly.',
      },
      {
        t: 'p',
        html: '<b>Shape, hybridisation and lone pairs</b> for xenon compounds, interhalogens, oxo-anions and phosphorus halides, often summed over a list. <b>Approach:</b> the pair-counting recipe of Additional topic Q; count each species separately.',
      },
      {
        t: 'p',
        html: '<b>Concentration-dependent products:</b> nitric acid with a metal, hot against cold sulphuric acid or alkali. <b>Approach:</b> identify the reduced form of the oxidant, then balance by electrons.',
      },
      {
        t: 'p',
        html: '<b>Oxoacid basicity and structure:</b> counts of P–OH, P=O, P–H, P–P and P–O–P, or the S–S, S–O–S and O–O features of the sulphur acids. <b>Approach:</b> the bond-inventory tables of Additional topics N and O.',
      },
      {
        t: 'p',
        html: '<b>Hydrolysis and “what is the product”:</b> PCl<sub>3</sub>, PCl<sub>5</sub>, interhalogens, xenon fluorides, Mg<sub>3</sub>N<sub>2</sub>, Ca<sub>3</sub>P<sub>2</sub>. <b>Approach:</b> exchange of Cl or F for OH with oxidation states preserved, except for XeF<sub>2</sub> and XeF<sub>4</sub>.',
      },
      {
        t: 'p',
        html: '<b>Statement pairs and “choose the incorrect statement.”</b> One swapped word makes the false statement (axial/equatorial, oxidation/reduction, dilute/concentrated, SO<sub>2</sub>/Cl<sub>2</sub>, F/Cl). <b>Approach:</b> test each statement against a numerical fact you hold, before reading the others.',
      },
      {
        t: 'p',
        html: '<b>Stoichiometric and iodometric numericals:</b> Haber and Ostwald stoichiometry, oleum labels, thiosulphate titration of ozone, KMnO<sub>4</sub> with SO<sub>2</sub>, available chlorine, P<sub>4</sub> to PCl<sub>5</sub>. <b>Approach:</b> write the balanced equation and carry one mole ratio.',
      },
      {
        t: 'p',
        html: '<b>Magnetism and isostructural pairs:</b> odd-electron molecules, the O<sub>2</sub> family, the brown-ring complex; XeF<sub>4</sub> with ICl<sub>4</sub><sup>−</sup>, XeO<sub>3</sub> with IO<sub>3</sub><sup>−</sup>, O<sub>3</sub> with NO<sub>2</sub><sup>−</sup>. <b>Approach:</b> count valence electrons (odd means paramagnetic; equal counts and atom numbers mean the same shape).',
      },
      {
        t: 'p',
        html: '<b>The traps.</b> The pitfalls of Additional topic S are the traps these questions are built on: counting hydrogens for basicity, the two fluorine orders, HF as the strongest acid, SO<sub>3</sub> into water, a planar ClO<sub>3</sub><sup>−</sup> and XeF<sub>6</sub> hydrolysis treated as redox.',
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-level] Which of N<sub>2</sub>O, NO, NO<sub>2</sub> and N<sub>2</sub>O<sub>4</sub> are paramagnetic, and which are neutral oxides?',
            a: 'Paramagnetic: NO (11 valence electrons) and NO<sub>2</sub> (17); N<sub>2</sub>O and N<sub>2</sub>O<sub>4</sub> are even-electron and diamagnetic. Neutral oxides: N<sub>2</sub>O and NO.',
          },
          {
            q: '[JEE Main-level] 5.0 g of copper dissolves in excess dilute nitric acid. Find the mass of NO produced (Cu = 63.5, NO = 30).',
            a: '3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O; <i>n</i>(Cu) = 0.0787 mol, <i>n</i>(NO) = 2/3 × 0.0787 = 0.0525 mol, mass = 1.57 g (1.6 g to two significant figures, since 5.0 g has two).',
          },
          {
            q: '[JEE Advanced-level] BrF<sub>3</sub> is used to make UF<sub>6</sub>. Derive its shape and write the balanced equation for the analogous reaction of uranium with ClF<sub>3</sub>.',
            a: 'BrF<sub>3</sub>: 5 pairs (3 bonding, 2 lone), bent T-shaped, sp<sup>3</sup>d. U + 3ClF<sub>3</sub> → UF<sub>6</sub> + 3ClF.',
          },
          {
            q: '[JEE Advanced-level] An oleum sample is labelled 122.5%. What is its mass percentage of free SO<sub>3</sub>?',
            a: 'A 122.5% label is the limit of pure SO<sub>3</sub>: 100 g is 1.25 mol, takes 1.25 mol of water (22.5 g) and gives 1.25 × 98 = 122.5 g of acid. So the sample is 100% free SO<sub>3</sub>.',
          },
          {
            q: '[JEE Advanced-level] How many moles of XeO<sub>3</sub> and of HF result from the complete hydrolysis of 3.0 mol of XeF<sub>6</sub>?',
            a: 'XeF<sub>6</sub> + 3H<sub>2</sub>O → XeO<sub>3</sub> + 6HF: 3.0 mol XeO<sub>3</sub> and 18 mol HF.',
          },
        ],
      },
    ],
  },
];
