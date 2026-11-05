import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional Topics A and B, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 4: The d- and f-Block Elements —
 * Additional Topics" (p. 179, set at the head of Additional topic A's Introduction),
 * then A The Complete Oxidation-State Map of the 3d Series (pp. 179–183; its Common
 * errors spill onto the top of p. 183) and B Reading the Energy Tables: Atomisation,
 * Ionisation, Hydration, and E° (pp. 183–186). Addendum C begins on p. 187.
 *
 * Each addendum prints its answers in one block after its practice questions; each
 * is set here as that question's answer. The legend of the formula block is ours,
 * in the words of the surrounding text. The book's unnumbered Figure 1 (p. 184) is
 * c12-04-B-d1.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 179–183 ─────────────────────────
  {
    n: 'A',
    title: 'The Complete Oxidation-State Map of the 3d Series',
    extra: true,
    kalam: 'The number of accessible states swells to a maximum at manganese and shrinks toward both ends.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the trends, the magnetic-moment machinery, the two celebrity oxidants, the f-block, and a capstone of potentials and colours. What it deliberately leaves thin is the complete numerical record behind those trends – the full oxidation-state inventory of the 3d series, the ionisation- and atomisation-enthalpy anomalies that explain them, the full bench of permanganate/dichromate reactions beyond the five canonical ones, and the fine print of the f-block that JEE and NEET harvest for single-mark facts. Addendum A tabulates and explains every oxidation state the 3d series actually shows, including the Cu(I) disproportionation story and the oxocation question. Addendum B teaches you to read NCERT’s energy tables (atomisation, ionisation, hydration, <i>E</i>°) as one connected argument. Addendum C extends the KMnO<sub>4</sub>/K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> toolkit to the full NCERT reaction set, with n-factor and titration drills. Addendum D is the f-block fine print: radii anomalies, ionisation enthalpies, the actinoid details the chapter compresses. Additional topic E turns previous-year questions into patterns, traps, and a graded practice set.',
      },
      {
        t: 'p',
        html: 'Most facts below can be checked against NCERT Class 12 Chemistry Part 1, Unit 8 (old-edition numbering).',
      },
      {
        t: 'p',
        html: 'The chapter tells you the maximum oxidation state equals the group number up to Mn, then falls off. JEE and NEET ask about the whole map: which states each element shows at all, which are stable, and why the two ends of the series behave so differently. This addendum supplies the full picture and its logic.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Building and reading the map',
        steps: [
          '<b>Write the observed states for each element</b> from Sc to Zn (the NCERT inventory, most common states in the third column below).',
          '<b>Ask three questions of each entry</b>: (i) does the state reach or abandon a stable d<sup>0</sup>/d<sup>5</sup>/d<sup>10</sup> configuration? (ii) is the state reached in an oxide/fluoride (high-state stabilisers) or mainly in complexes with π-acceptor ligands (low-state stabilisers)? (iii) does the state survive water?',
          '<b>Read the trend along the series</b>, not element by element: the number of accessible states swells to a maximum in the middle of the series, around manganese, and shrinks toward both ends.',
        ],
      },

      { t: 'part', title: 'The map' },
      {
        t: 'table',
        title: null,
        head: ['Element', 'Observed oxidation states', 'Most stable/common', 'Note'],
        rows: [
          ['Sc', '+3', '+3', 'only state; Sc(II) virtually unknown'],
          ['Ti', '+2, +3, +4', '+4', 'Ti(IV) more stable than Ti(III), Ti(II)'],
          ['V', '+2, +3, +4, +5', '+4, +5', 'all four states known'],
          ['Cr', '+1 to +6', '+3, +6', '+2 reducing; +6 strongly oxidising'],
          ['Mn', '+2 to +7', '+2, +4, +7', 'highest state of the series; six states, as many as Cr'],
          ['Fe', '+2, +3, (+4, +6)', '+2, +3', '+6 only as ferrate FeO<sub>4</sub><sup>2−</sup>, in alkali'],
          ['Co', '+2, +3, (+4)', '+2', 'Co(III) a strong oxidant in water'],
          ['Ni', '+2, (+3, +4)', '+2', 'higher states rare'],
          ['Cu', '+1, +2', '+2 (in water)', 'Cu(I) disproportionates in water'],
          ['Zn', '+2', '+2', 'no d-electrons involved'],
        ],
      },
      {
        t: 'p',
        html: 'Three structural facts organise the map:<br>• <b>The extremes are impoverished for opposite reasons.</b> Sc and Ti have too few electrons to lose or share; Cu and Zn have too many d-electrons, leaving fewer orbitals available to share. Hence the bulge at Mn (all states +2 to +7).<br>• <b>Transition-metal states differ by one; p-block states differ by two.</b> V shows II, III, IV, V in sequence – contrast this with, say, the p-block, where oxidation states normally skip by two (inert-pair logic). This contrast is a favourite “select the correct statement” item.<br>• <b>Down a d-block group, heavier members favour the HIGHER state</b> – the exact opposite of the p-block inert-pair effect. In group 6, Mo(VI) and W(VI) are more stable than Cr(VI): acidified dichromate is a ferocious oxidant, while MoO<sub>3</sub> and WO<sub>3</sub> are not oxidising at all.',
      },

      { t: 'part', title: 'Who stabilises the highest states – oxygen, fluorine, and the oxocations' },
      {
        t: 'p',
        html: 'The highest oxidation states are reached mainly with oxygen and fluorine (early in the series other halogens can manage it too, as in TiCl<sub>4</sub>), because these small, highly electronegative partners can form multiple bonds (oxygen) or deliver large lattice/bond energies (fluorine). And oxygen beats fluorine outright: the highest manganese fluoride is MnF<sub>4</sub>, but the highest oxide is Mn<sub>2</sub>O<sub>7</sub> (Mn at +7), because oxygen’s ability to form multiple bonds to the metal exceeds fluorine’s. In the covalent Mn<sub>2</sub>O<sub>7</sub> each Mn is tetrahedrally surrounded by oxygens, with a Mn–O–Mn bridge; the tetrahedral MO<sub>4</sub><sup><i>n</i>−</sup> oxoanions are known for V(V), Cr(VI), Mn(V), Mn(VI) and Mn(VII).',
      },
      {
        t: 'p',
        html: 'Beyond oxides, <b>oxocations</b> carry the high states in solution: V(V) as VO<sub>2</sub><sup>+</sup>, V(IV) as VO<sup>2+</sup>, Ti(IV) as TiO<sup>2+</sup>. A classic NEET fact: V<sub>2</sub>O<sub>5</sub> is amphoteric though mainly acidic – it reacts with alkalies to give VO<sub>4</sub><sup>3−</sup> and with acids to give VO<sub>2</sub><sup>+</sup>, while V<sub>2</sub>O<sub>4</sub> dissolves in acids to give VO<sup>2+</sup> salts. In vanadium’s oxides the character slides basic V<sub>2</sub>O<sub>3</sub> to less-basic V<sub>2</sub>O<sub>4</sub> to amphoteric V<sub>2</sub>O<sub>5</sub>; CrO is basic, Cr<sub>2</sub>O<sub>3</sub> amphoteric, CrO<sub>3</sub> acidic.',
      },
      {
        t: 'p',
        html: 'At the other extreme, <b>low oxidation states (zero, negative) in compounds occur mainly in complexes with π-acceptor ligands</b> – CO above all. In Ni(CO)<sub>4</sub> and Fe(CO)<sub>5</sub> the metals are in oxidation state zero, stabilised by metal-to-ligand back-bonding (the Coordination Compounds chapter).',
      },

      { t: 'part', title: 'The Cu(I) story – the single most-examined corner of the map' },
      { t: 'p', html: 'Copper is where the map becomes three-dimensional.' },
      {
        t: 'proc',
        title: 'Three facts, all NCERT, all frequently examined',
        steps: [
          '<b>All Cu(II) halides are known except the iodide.</b> Cu<sup>2+</sup> oxidises iodide on contact:<br>2 Cu<sup>2+</sup> + 4 I<sup>−</sup> → Cu<sub>2</sub>I<sub>2</sub>(s) + I<sub>2</sub><br>Copper(II) iodide, CuI<sub>2</sub>, is therefore never isolable (what precipitates is Cu<sub>2</sub>I<sub>2</sub>) – a point that appears inside titration questions (the liberated I<sub>2</sub> is estimated with thiosulphate).',
          '<b>Cu(I) disproportionates in water</b>: 2 Cu<sup>+</sup>(aq) → Cu<sup>2+</sup>(aq) + Cu(s), and the <i>E</i>° for this is favourable.',
          '<b>Why Cu<sup>2+</sup> wins in water despite copper’s huge second ionisation enthalpy</b>: the hydration enthalpy of the small, doubly charged Cu<sup>2+</sup> is so much more negative than that of Cu<sup>+</sup> that it more than repays the second ionisation enthalpy. In the gas phase or in insoluble/complexed form (CuCl, Cu<sub>2</sub>I<sub>2</sub>, [Cu(CN)<sub>4</sub>]<sup>3−</sup>), Cu(I) is perfectly stable; it is only aqueous Cu(I) that collapses.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Name a transition element which does not exhibit variable oxidation states, and justify in one line.',
        steps: [
          'Scandium (<i>Z</i> = 21): its only chemically accessible state is +3, reached by removing the 3d<sup>1</sup>4s<sup>2</sup> valence electrons to leave the argon core; no lower state is stable because 3d<sup>0</sup>4s<sup>0</sup> Sc<sup>3+</sup> is extra-stable and Sc(II) is virtually unknown.',
          '(Zinc, not a transition element in the strict sense, also shows a single state, +2, but for the opposite reason – its 3d<sup>10</sup> electrons are never involved.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which is not known as a stable binary halide: CuF<sub>2</sub>, CuCl<sub>2</sub>, CuBr<sub>2</sub>, CuI<sub>2</sub>?',
        steps: [
          '<b>The fast way.</b> The three +2 halides of Cu with F, Cl, Br are all stable. Iodide is the exception because Cu<sup>2+</sup> is a good enough oxidant (and I<sup>−</sup> a good enough reductant) that the two cannot coexist: Cu<sup>2+</sup> oxidises I<sup>−</sup> to I<sub>2</sub> and is itself reduced to Cu(I), precipitating Cu<sub>2</sub>I<sub>2</sub>.',
        ],
        ans: 'CuI<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Arrange TiO<sub>2</sub>, V<sub>2</sub>O<sub>5</sub>, CrO<sub>3</sub>, Mn<sub>2</sub>O<sub>7</sub> in increasing order of acidic character, and state the general rule.',
        steps: [
          'All four carry the metal at its group-number maximum (+4, +5, +6, +7). Acidic character rises with oxidation state, so TiO<sub>2</sub> (weakly amphoteric) < V<sub>2</sub>O<sub>5</sub> (amphoteric, mainly acidic) < CrO<sub>3</sub> (acidic) < Mn<sub>2</sub>O<sub>7</sub> (strongly acidic, covalent green oil, gives HMnO<sub>4</sub>).',
          'Rule: for oxides of the 3d metals, higher oxidation state means less ionic character and more acidic behaviour; the acidic top-state oxides dissolve in alkali to give oxoanions.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Explain: (i) copper has a high second ionisation enthalpy yet Cu(II) is the stable state in water; (ii) the highest fluoride of manganese is MnF<sub>4</sub> but the highest oxide is Mn<sub>2</sub>O<sub>7</sub>.',
        steps: [
          '(i) The energetic cost of Cu<sup>+</sup> → Cu<sup>2+</sup> (removing a 3d<sup>10</sup> electron) is repaid with surplus by the very large (very negative) hydration enthalpy of the small, highly charged Cu<sup>2+</sup> ion, so in water Cu(II) is the stable state and Cu<sup>+</sup> disproportionates.',
          '(ii) Oxygen stabilises the highest oxidation states better than fluorine because it can form multiple bonds (pπ–dπ) to the metal; fluorine cannot, so fluorine’s ladder stops at MnF<sub>4</sub> while oxygen climbs to Mn<sub>2</sub>O<sub>7</sub>. Same principle: the tetrahedral oxoanions MnO<sub>4</sub><sup><i>n</i>−</sup> exist for Mn(V), Mn(VI), Mn(VII) while no such fluoride series does.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why do the elements at the two ends of the 3d series (Sc, Zn) show fewer oxidation states than manganese?',
            a: 'Sc has too few valence electrons to show lower states (only +3); Zn has a full 3d<sup>10</sup> shell that never participates (only +2); Mn sits mid-series where both 4s and 3d electrons are energetically available, so all states +2 to +7 occur.',
          },
          {
            q: '[NEET] In which of these is the metal in a zero oxidation state: Fe<sub>2</sub>O<sub>3</sub>, [Fe(CO)<sub>5</sub>], MnO<sub>2</sub>, K<sub>4</sub>[Fe(CN)<sub>6</sub>]?',
            a: '[Fe(CO)<sub>5</sub>] – CO is a neutral π-acceptor ligand, so Fe is in oxidation state zero. (Fe in K<sub>4</sub>[Fe(CN)<sub>6</sub>] is +2.)',
          },
          {
            q: '[JEE Main] Write the formula of the oxocation in which vanadium exists as V(IV), and the oxoanion in which it exists as V(V) in alkali.',
            a: 'V(IV): VO<sup>2+</sup> (vanadyl); V(V) in alkali: VO<sub>4</sub><sup>3−</sup>.',
          },
          {
            q: '[JEE Main] MoO<sub>3</sub> and WO<sub>3</sub> are not oxidising agents while acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is. Explain in one line.',
            a: 'Down a d-block group the higher oxidation state becomes more stable (opposite of the p-block inert-pair trend), so Mo(VI) and W(VI) are stable and non-oxidising, while Cr(VI) is eager to fall to Cr(III).',
          },
          {
            q: '[JEE Advanced] An aqueous solution of Cu<sup>+</sup> is unstable but solid CuCl is stable. Reconcile the two observations.',
            a: 'Cu<sup>+</sup> disproportionation is driven by hydration: the very negative hydration enthalpy of Cu<sup>2+</sup> makes 2Cu<sup>+</sup> → Cu<sup>2+</sup> + Cu favourable in water. In solid CuCl the lattice stabilises Cu(I) and no water is present, so the compound is perfectly stable.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Believing “Cu(I) is always unstable” (only in water); writing CuI<sub>2</sub> as a known compound; claiming p-block and d-block share the inert-pair trend (they run in opposite directions); forgetting that zero and negative oxidation states in compounds usually need π-acceptor ligands like CO.',
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 183–186 ─────────────────────────
  {
    n: 'B',
    title: 'Reading the Energy Tables: Atomisation, Ionisation, Hydration, and E°',
    extra: true,
    kalam: 'E° irregularities are the sum of competing terms.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that <i>E</i>°(M<sup>2+</sup>/M) is set by three energy terms and points at the irregularities. NCERT prints the underlying numbers, and JEE Main has started asking them directly (“the metal with the highest enthalpy of atomisation in the 3d series shows a maximum oxidation number of…”). This addendum turns the two NCERT tables into a reasoning tool.',
      },

      { t: 'part', title: 'The master equation and the tables' },
      { t: 'p', html: 'For M(s) → M<sup>2+</sup>(aq), the enthalpy input is' },
      {
        t: 'formula',
        kicker: 'The master equation for M(s) → M<sup>2+</sup>(aq)',
        main: 'Δ<i>H</i> = Δ<sub>a</sub><i>H</i> + Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>hyd</sub><i>H</i>(M<sup>2+</sup>)',
        legend: [
          'Δ<i>H</i> = enthalpy input',
          'Δ<sub>a</sub><i>H</i> = enthalpy of atomisation',
          'Δ<sub>i</sub><i>H</i><sub>1</sub> = first ionisation enthalpy',
          'Δ<sub>i</sub><i>H</i><sub>2</sub> = second ionisation enthalpy',
          'Δ<sub>hyd</sub><i>H</i>(M<sup>2+</sup>) = hydration enthalpy of M<sup>2+</sup>',
          'M = metal of the first series',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'and <i>E</i>° moves in the direction that overall free energy dictates: a metal whose total is small is easily oxidised, giving a negative <i>E</i>°.',
      },
      {
        t: 'p',
        html: 'NCERT’s values (kJ mol<sup>−1</sup>, first series), abridged:',
      },
      {
        t: 'table',
        title: null,
        head: ['Element', 'Δ<sub>a</sub><i>H</i>', 'Δ<sub>i</sub><i>H</i><sub>1</sub>', 'Δ<sub>i</sub><i>H</i><sub>2</sub>', '<i>E</i>°(M<sup>2+</sup>/M)/V'],
        rows: [
          ['Ti', '469', '656', '1309', '−1.63'],
          ['V', '515', '650', '1414', '−1.18'],
          ['Cr', '398', '653', '1592', '−0.90'],
          ['Mn', '279', '717', '1509', '−1.18'],
          ['Fe', '418', '762', '1561', '−0.44'],
          ['Co', '427', '758', '1644', '−0.28'],
          ['Ni', '431', '736', '1752', '−0.25'],
          ['Cu', '339', '745', '1958', '+0.34'],
          ['Zn', '130', '906', '1734', '−0.76'],
        ],
      },
      { t: 'fig', id: 'c12-04-B-d1' },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The four anomalies you must be able to defend',
        steps: [
          '<b>The second ionisation enthalpy spikes at Cr and Cu.</b> Δ<sub>i</sub><i>H</i><sub>2</sub> removes an electron from M<sup>+</sup>. Cr<sup>+</sup> is 3d<sup>5</sup> (half-filled, extra-stable) and Cu<sup>+</sup> is 3d<sup>10</sup> (filled) – both resist further ionisation, so Δ<sub>i</sub><i>H</i><sub>2</sub> is unusually high for Cr (1592) and Cu (1958). Zn is the mirror image: its Δ<sub>i</sub><i>H</i><sub>2</sub> is comparatively low (1734, less than Cu’s) because removing Zn<sup>+</sup>’s lone 4s electron lands on the stable d<sup>10</sup> Zn<sup>2+</sup>.',
          '<b>The “breaks” in the trends land on d<sup>5</sup> products.</b> The steady rise of Δ<sub>i</sub><i>H</i><sub>2</sub> breaks at Mn (Mn<sup>2+</sup> is d<sup>5</sup>), and the rise of Δ<sub>i</sub><i>H</i><sub>3</sub> breaks at Fe (Fe<sup>3+</sup> is d<sup>5</sup>). Numerically: Δ<sub>i</sub><i>H</i><sub>3</sub>(Mn) = 3248 > Δ<sub>i</sub><i>H</i><sub>3</sub>(Fe) = 2957 kJ mol<sup>−1</sup> – the single datum behind “Mn<sup>3+</sup> is oxidising, Fe<sup>3+</sup> is stable”. Exchange-energy stabilisation of half-filled shells is NCERT’s own explanation: the loss of exchange energy on ionising a stable configuration makes that ionisation harder.',
          '<b>Atomisation enthalpy peaks at V, before the middle of the series, and collapses at Zn.</b> Unpaired d-electrons weld the metallic lattice; Zn (d<sup>10</sup>) has none to spare, so Δ<sub>a</sub><i>H</i>(Zn) ~ 126–130 kJ mol<sup>−1</sup> is the lowest of the series – this is NCERT’s own in-text question. Vanadium (515) tops NCERT’s listing, which is why “highest enthalpy of atomisation” questions resolve to V and a maximum oxidation state of +5.',
          '<b><i>E</i>° irregularities are the sum of competing terms.</b> Mn and Zn are more negative than the smooth trend predicts (stable d<sup>5</sup>/d<sup>10</sup> M<sup>2+</sup> products); Ni’s value is held down (kept more negative than its atomisation and ionisation costs alone predict) by its very large (very negative) hydration enthalpy, among the most negative in the row; Cu’s positive <i>E</i>° = +0.34 V results because the total of its atomisation and ionisation enthalpies, the largest in the table (339 + 745 + 1958 = 3042 kJ mol<sup>−1</sup>, driven by its very high second ionisation enthalpy), is never repaid by hydration – hence Cu cannot liberate H<sub>2</sub> from dilute acids.',
        ],
      },

      { t: 'part', title: 'The E°(M3+/M2+) table, with its two ends' },
      { t: 'p', html: 'The chapter tabulates Ti to Co. The NCERT discussion adds the two ends:' },
      {
        t: 'table',
        title: null,
        head: ['Couple', '<i>E</i>°/V', 'Reading'],
        rows: [
          ['Sc<sup>3+</sup>/Sc<sup>2+</sup>', '(very low)', 'Sc<sup>3+</sup> has the argon configuration; Sc<sup>2+</sup> barely exists'],
          ['Ti<sup>3+</sup>/Ti<sup>2+</sup>', '−0.37', 'Ti<sup>2+</sup> reducing'],
          ['V<sup>3+</sup>/V<sup>2+</sup>', '−0.26', 'V<sup>2+</sup> (half-filled t<sub>2g</sub><sup>3</sup>) is itself stable; NCERT links the value to this'],
          ['Cr<sup>3+</sup>/Cr<sup>2+</sup>', '−0.41', 'Cr<sup>2+</sup> strongly reducing (d<sup>4</sup> → d<sup>3</sup>, half-filled t<sub>2g</sub>)'],
          ['Mn<sup>3+</sup>/Mn<sup>2+</sup>', '+1.57', 'Mn<sup>3+</sup> strongly oxidising (reaching d<sup>5</sup>)'],
          ['Fe<sup>3+</sup>/Fe<sup>2+</sup>', '+0.77', 'Fe<sup>3+</sup> (d<sup>5</sup>) comparatively stable'],
          ['Co<sup>3+</sup>/Co<sup>2+</sup>', '+1.97', 'Co<sup>3+</sup> a violent oxidant in water'],
          ['Zn<sup>3+</sup>/Zn<sup>2+</sup>', '(very high)', 'would mean breaking d<sup>10</sup> – Zn(III) unknown'],
        ],
      },
      {
        t: 'p',
        html: 'The d<sup>4</sup>-pair contrast is NCERT’s favourite framing: Cr<sup>2+</sup> and Mn<sup>3+</sup> are both d<sup>4</sup>, yet Cr<sup>2+</sup> reduces (it can reach the half-filled-t<sub>2g</sub> d<sup>3</sup>) while Mn<sup>3+</sup> oxidises (it can reach the half-filled d<sup>5</sup>). Same configuration, opposite personalities, because the question is always “what does the redox step reach?”',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 3d-series metal M has the highest enthalpy of atomisation in the series. What is the maximum oxidation number M exhibits?',
        steps: [
          'From the table, V tops the atomisation list (515 kJ mol<sup>−1</sup>). Vanadium’s maximum oxidation state is the group number,',
        ],
        ans: '+5 (V<sub>2</sub>O<sub>5</sub>, VO<sub>2</sub><sup>+</sup>).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Account for the order Δ<sub>i</sub><i>H</i><sub>3</sub>: Fe (2957) < Mn (3248) < Cu (3554) < Zn (3833) kJ mol<sup>−1</sup>.',
        steps: [
          'Δ<sub>i</sub><i>H</i><sub>3</sub> converts M<sup>2+</sup> to M<sup>3+</sup>. Fe<sup>2+</sup> is 3d<sup>6</sup>, and ionising it reaches the extra-stable half-filled 3d<sup>5</sup> – easiest of the four. Mn<sup>2+</sup> is already 3d<sup>5</sup>; ionising it destroys the half-filled shell, so it costs more. Cu<sup>2+</sup> (3d<sup>9</sup>) and Zn<sup>2+</sup> (3d<sup>10</sup>) require tearing an electron out of a nearly-filled or filled d-shell held by a high effective nuclear charge – hence the highest values.',
          'This is exactly why oxidation states above +2 are unobtainable for Cu and Zn under ordinary conditions, and why Fe(III) is common while Mn(III) is rare.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Using the three-term energy analysis, explain why <i>E</i>°(Mn<sup>2+</sup>/Mn) (−1.18 V) is far more negative than <i>E</i>°(Cr<sup>2+</sup>/Cr) (−0.90 V), even though chromium has the lower first ionisation enthalpy (Δ<sub>i</sub><i>H</i><sub>1</sub>: Cr 653, Mn 717 kJ mol<sup>−1</sup>).',
        steps: [
          'Sum the inputs for each: Mn needs 279 + 717 + 1509 = 2505 kJ mol<sup>−1</sup> of endothermic input, versus Cr’s 398 + 653 + 1592 = 2643 kJ mol<sup>−1</sup>. Mn’s advantage of 138 kJ mol<sup>−1</sup> has two sources that outweigh its handicap.',
          '(a) Atomisation is 119 kJ mol<sup>−1</sup> cheaper for Mn (279 vs 398).',
          '(b) The second ionisation is 83 kJ mol<sup>−1</sup> cheaper (1509 vs 1592): Mn<sup>+</sup> is 3d<sup>5</sup>4s<sup>1</sup>, so its second ionisation merely plucks the 4s electron and lands on the stable d<sup>5</sup> Mn<sup>2+</sup>, whereas Cr<sup>+</sup> is already d<sup>5</sup> and its second ionisation must break the half-filled shell.',
          'Against these, Mn’s first ionisation is 64 kJ mol<sup>−1</sup> dearer (717 vs 653), so 119 + 83 − 64 = 138.',
          'With hydration enthalpies comparable (−1862 vs −1925), the cheaper total for Mn makes Mn more easily oxidised, hence the more negative <i>E</i>°. The same d<sup>5</sup> magnet that makes Mn<sup>2+</sup> stable also makes Mn metal a better reducing agent.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The enthalpy of atomisation of zinc is the lowest in the 3d series. Why?',
            a: 'Zn (3d<sup>10</sup>4s<sup>2</sup>) has no unpaired d-electrons, so interatomic metallic bonding is weak and less energy is needed to atomise it (~126 kJ mol<sup>−1</sup> in NCERT’s in-text question; 130 in the table above).',
          },
          {
            q: '[NEET] The second ionisation enthalpy is unusually high for which pair: (a) Cr and Cu, (b) Mn and Fe, (c) Fe and Ni, (d) V and Cr?',
            a: '(a) Cr and Cu – Cr<sup>+</sup> is d<sup>5</sup>, Cu<sup>+</sup> is d<sup>10</sup>; both resist losing the next electron.',
          },
          {
            q: '[JEE Main] <i>E</i>°(Ni<sup>2+</sup>/Ni) is more negative than expected from atomisation and ionisation data alone. Which term accounts for it?',
            a: 'The hydration enthalpy of Ni<sup>2+</sup>, among the most negative in the series (−2121 kJ mol<sup>−1</sup>), repays the ionisation cost unusually well. From Co to Ni the three input terms rise by 90 kJ mol<sup>−1</sup> (2829 to 2919), worth about +0.47 V if hydration stayed the same, yet <i>E</i>° rises only 0.03 V (−0.28 to −0.25 V).',
          },
          {
            q: '[JEE Main] Why is Δ<sub>i</sub><i>H</i><sub>2</sub> of Zn (1734) lower than that of Cu (1958)?',
            a: 'Ionising Zn<sup>+</sup> removes the lone 4s electron and leaves stable 3d<sup>10</sup> Zn<sup>2+</sup>; ionising Cu<sup>+</sup> must remove an electron from the filled 3d<sup>10</sup> subshell itself.',
          },
          {
            q: '[JEE Advanced] <i>E</i>°(V<sup>3+</sup>/V<sup>2+</sup>) = −0.26 V. NCERT calls this value comparatively low and links it to the stability of V<sup>2+</sup>. State the configuration involved, and compare the value with the couples next to it.',
            a: 'V<sup>2+</sup> is 3d<sup>3</sup>, with a half-filled t<sub>2g</sub><sup>3</sup> level. That is NCERT’s reason, and the line to write if asked why the value is comparatively low. Read the numbers as well: −0.26 V is low only beside the later couples (Fe +0.77, Mn +1.57, Co +1.97 V). It is above both its neighbours, Ti −0.37 and Cr −0.41 V, which fits the logic used for Mn<sup>3+</sup>/Mn<sup>2+</sup>: a stable reduction product makes reduction easier, which raises <i>E</i>°.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Attributing <i>E</i>° trends to ionisation enthalpy alone (hydration and atomisation share the stage); misreading “high Δ<sub>i</sub><i>H</i><sub>2</sub> for Cu” as applying to the first ionisation; confusing melting point with atomisation enthalpy (V tops NCERT’s atomisation listing at 515 kJ mol<sup>−1</sup>, with Cr only 398, while the melting-point hump peaks near V/Cr – read the question’s exact word); forgetting that the d<sup>5</sup>/d<sup>10</sup> logic cuts both ways – it stabilises products (low IE of the step that forms them) and protects them (high IE of the step that destroys them).',
      },
    ],
  },
];
