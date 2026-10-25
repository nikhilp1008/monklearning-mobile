import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 01 and 02: pp. 164–182 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 163) and contents
 * (top of p. 164) are not copied. Topic 01, Kossel–Lewis Approach, Ionic &
 * Covalent Bonds, and Dipole Moment (starts under the contents on p. 164,
 * ends p. 173), and Topic 02, VSEPR Theory, Valence Bond Theory &
 * Hybridization (pp. 174–182), are each split at their Sections 1 to 8.
 * Figures 4.1–4.3 (pp. 168, 170) and 4.4–4.5 (pp. 177, 180) are redrawn in
 * lib/diagrams/chemistry-11-04.ts and chemistry-11-04b.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 164–173 ─────────────────────────
  {
    n: '01',
    title: 'Kossel–Lewis Approach, Ionic & Covalent Bonds, and Dipole Moment',
    kalam: 'Walther Kossel explained the transfer route, and Gilbert Lewis explained the sharing route — together they form the Kossel–Lewis approach to bonding.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the bedrock of the whole chapter. CBSE Boards reliably ask 1–3 marks on Lewis structures, formal charge, or applications of dipole moment. NEET pulls 1–2 questions yearly on polarity and Fajans’ rules. JEE Main blends dipole moment with percentage ionic character; JEE Advanced layers resonance, formal charge, and bond-order reasoning into a single problem.',
      },
      {
        t: 'p',
        html: 'Imagine you walk into a crowded Mumbai local train. Every atom, when it is born, is a little like a passenger who desperately wants a comfortable, stable seat. For atoms, that “comfortable seat” is a full outermost shell — eight electrons for most elements, two for the tiny ones like hydrogen and helium. This is the <b>octet rule</b>, and almost everything in bonding is just atoms scrambling to reach that settled, noble-gas arrangement.',
      },
      {
        t: 'p',
        html: 'There are exactly two honest ways for an atom to get those eight electrons. It can take or give away electrons outright — a clean transfer of ownership — or it can share electrons with a neighbour, like two students splitting the cost of a single textbook so both can use it. The first route gives us the <b>ionic bond</b>; the second gives us the <b>covalent bond</b>. Walther Kossel explained the transfer route, and Gilbert Lewis explained the sharing route — together they form the <b>Kossel–Lewis approach</b> to bonding.',
      },
      {
        t: 'p',
        html: 'Lewis gave us a beautifully simple bookkeeping tool: draw the element’s symbol and place its valence electrons as dots around it. Sodium (Na•) has one lonely dot; chlorine has seven and is one short of a full set. When sodium hands its single electron to chlorine, sodium becomes Na<sup>+</sup> and chlorine becomes Cl<sup>−</sup> — and now the two oppositely charged ions cling together by simple electrostatic attraction, exactly like two magnets snapping shut. That clinging, scaled up across an entire crystal, is what we feel as the strength of common salt.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a wholesale grocery market. An ionic bond is a sale: the cation permanently hands the electron over, money changes hands, ownership is transferred. A covalent bond is a joint venture: nobody gives up ownership, both parties pool their electrons into a shared pair that sits between them. And just as in real partnerships, the sharing is rarely perfectly equal — the greedier (more electronegative) partner pulls the shared pair closer, leaving its end slightly negative and the other slightly positive. That lopsided sharing is what creates a <b>polar bond</b>, and the measure of that lopsidedness is the <b>dipole moment</b>.',
      },
      {
        t: 'p',
        html: 'A polar bond behaves like a tiny tug-of-war rope with a charge of +<i>δ</i> at one end and −<i>δ</i> at the other. If a molecule has several such tug-of-war ropes pulling in different directions, the net pull is what matters — and because pulls are vectors, they can cancel. Three people pulling a ring outward at 120° to each other (think of BF<sub>3</sub>) produce zero net motion even though each is pulling hard. This single idea — that bond dipoles add like vectors — explains why CO<sub>2</sub> is non-polar but water is not.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The octet rule is a wonderfully useful guide, not an iron law. It fails for (i) <b>electron-deficient</b> molecules like BeCl<sub>2</sub> and BCl<sub>3</sub>, where the central atom is happy with fewer than eight electrons; (ii) <b>expanded-octet</b> species like SF<sub>6</sub> and PCl<sub>5</sub>, where third-period atoms exceed eight; and (iii) <b>odd-electron</b> molecules like NO and NO<sub>2</sub>, which simply cannot pair everything up. The Kossel–Lewis picture also says nothing about molecular shape or why bonds form energetically — for that we will later need VSEPR, valence bond theory, and molecular orbital theory. For now, treat Lewis structures as a faithful map of connectivity and electron count, not of geometry.',
      },

      { t: 'part', title: 'Key parameters, formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Formal charge (FC)',
        main: 'the hypothetical charge an atom appears to carry in a Lewis structure if every shared pair were split exactly down the middle:<br>FC = <i>V</i> − <i>L</i> − ½<i>B</i>',
        legend: [
          '<i>V</i> = number of valence electrons in the free (neutral) atom',
          '<i>L</i> = number of non-bonding (lone-pair) electrons on the atom',
          '<i>B</i> = number of bonding (shared) electrons around the atom',
        ],
        note: 'The formal charges in any species must sum to the overall charge of that species — a built-in check.',
      },
      {
        t: 'def',
        term: 'Bond order',
        html: 'In the Lewis sense, the number of shared electron pairs between two bonded atoms. Single bond = 1, double = 2, triple = 3. Isoelectronic species share bond order (e.g. N<sub>2</sub>, CO and NO<sup>+</sup> all have bond order 3). As bond order increases, <b>bond enthalpy increases and bond length decreases</b>.',
      },
      {
        t: 'formula',
        kicker: 'Bond length',
        main: 'equilibrium internuclear distance between two bonded atoms, in picometres (pm) or angstrom (1 Å = 100 pm). For a covalent bond A–B:<br><i>R</i> = <i>r</i><sub>A</sub> + <i>r</i><sub>B</sub>',
        legend: ['<i>R</i> = bond length of A–B', '<i>r</i><sub>A</sub>, <i>r</i><sub>B</sub> = the covalent radii of the two atoms'],
        note: null,
      },
      {
        t: 'def',
        term: 'Bond enthalpy',
        html: 'Energy (in kJ mol<sup>−1</sup>) required to break one mole of a particular bond in the gaseous state. For polyatomic molecules with several identical bonds, we report the <b>average (mean) bond enthalpy</b>.',
      },
      {
        t: 'def',
        term: 'Lattice enthalpy',
        html: 'The energy required to completely separate one mole of a solid ionic compound into its gaseous ions; it is therefore positive (endothermic). Larger for ions of higher charge and smaller size.',
      },
      {
        t: 'formula',
        kicker: 'Dipole moment (<i>μ</i>)',
        main: 'a vector measuring bond/molecular polarity:<br><i>μ</i> = <i>q</i> × <i>d</i><br>1 D = 3.336 × 10<sup>−30</sup> C m',
        legend: [
          '<i>μ</i> = dipole moment, a vector that points (by convention) from + to −',
          '<i>q</i> = magnitude of charge separation',
          '<i>d</i> = distance between the centres of positive and negative charge',
          'D = debye, the practical unit (SI unit: coulomb-metre, C m)',
        ],
        note: 'The net molecular dipole is the vector sum of the individual bond dipoles.',
      },
      {
        t: 'formula',
        kicker: 'Percentage ionic character',
        main: 'A bond is never purely ionic or purely covalent. The ionic share is estimated by comparing the real dipole moment with the value it would have if the electron were transferred completely:<br>% ionic character = <i>μ</i><sub>observed</sub>/<i>μ</i><sub>ionic (100%)</sub> × 100<br><i>μ</i><sub>ionic</sub> = <i>e</i> × <i>d</i>',
        legend: [
          '<i>μ</i><sub>observed</sub> = the real dipole moment',
          '<i>μ</i><sub>ionic</sub> = the dipole if the electron were transferred completely',
          '<i>e</i> = the electronic charge, 1.6 × 10<sup>−19</sup> C',
          '<i>d</i> = the bond length',
        ],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical frameworks' },
      {
        t: 'p',
        html: 'Bonding has few derivations in the physics sense; what it rewards is disciplined procedure. Below are the three you must perform flawlessly, plus the one genuine derivation-style cycle in this topic.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Drawing a Lewis structure',
        steps: [
          '<b>Count the total valence electrons.</b> Add up the valence electrons of every atom. For an anion, add one electron per unit of negative charge; for a cation, subtract one per unit positive charge.',
          '<b>Pick the central atom.</b> Usually the least electronegative atom (never hydrogen) sits in the centre, because it shares its electrons most willingly.',
          '<b>Connect with single bonds</b>, then <b>distribute the remaining electrons</b> as lone pairs to the outer atoms first to complete their octets, and finally to the central atom.',
          '<b>Make multiple bonds</b> if the central atom is still short of an octet — convert a lone pair on an adjacent atom into a shared (double or triple) bond. <b>Why:</b> sharing more pairs is how an electron-starved central atom reaches eight without inventing electrons that do not exist.',
          '<b>Verify</b> by checking every octet and by computing formal charges (Procedure B).',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Assigning formal charge</b><br>For each atom, count its lone-pair electrons (<i>L</i>) and its bonding electrons (<i>B</i>), then apply FC = <i>V</i> − <i>L</i> − ½<i>B</i>. <b>Why each term matters:</b> you start from what the atom owns when neutral (<i>V</i>), keep full ownership of its lone pairs (<i>L</i>), but only get credit for half of every shared pair (½<i>B</i>) because the other half “belongs” to the partner. The best Lewis structure is the one with formal charges closest to zero, and with any negative formal charge sitting on the most electronegative atom.',
      },
      {
        t: 'proc',
        title: 'Procedure C — Estimating percentage ionic character',
        steps: [
          'Convert the bond length <i>d</i> to metres.',
          'Compute <i>μ</i><sub>ionic</sub> = <i>e</i> × <i>d</i> (this is the dipole if one full electronic charge were separated by distance <i>d</i>).',
          'Convert <i>μ</i><sub>ionic</sub> from C m to debye by dividing by 3.336 × 10<sup>−30</sup>.',
          'Divide the observed dipole moment by this ideal value and multiply by 100. <b>Why:</b> the observed dipole is always smaller than the fully ionic value because real sharing is partial; the ratio tells you how close to “complete transfer” the bond actually is.',
        ],
      },
      {
        t: 'p',
        html: '<b>A genuine derivation: the Born–Haber cycle for lattice enthalpy</b><br>Lattice enthalpy cannot be measured directly, so we get it indirectly using <b>Hess’s law</b> — the principle that the total enthalpy change of a reaction is independent of the path taken. We build a closed cycle from the elements to the ionic solid by two routes and equate them.',
      },
      {
        t: 'p',
        html: 'For a salt MX (e.g. an alkali halide), the formation enthalpy Δ<sub>f</sub><i>H</i> equals the sum of:<br>• sublimation of the metal, Δ<sub>sub</sub><i>H</i> (solid metal → gaseous atoms);<br>• ionisation enthalpy of the metal, Δ<sub>i</sub><i>H</i> (M(g) → M<sup>+</sup>(g) + e<sup>−</sup>);<br>• half the bond-dissociation enthalpy of the non-metal, ½Δ<sub>bond</sub><i>H</i> (½X<sub>2</sub> → X(g));<br>• electron gain enthalpy of the non-metal, Δ<sub>eg</sub><i>H</i> (X(g) + e<sup>−</sup> → X<sup>−</sup>(g));<br>• and finally the energy released (−Δ<sub>lattice</sub><i>H</i>) as gaseous ions form the crystal.',
      },
      { t: 'fig', id: 'c11-04-fig-4.1' },
      {
        t: 'p',
        html: 'Setting the two paths equal lets us solve for the single unknown, the lattice enthalpy. The physical takeaway: a crystal’s stability is a balance sheet of energy invested (sublimation, ionisation, bond-breaking) against energy returned (electron gain, lattice formation). When the lattice enthalpy is large enough — favoured by small, highly charged ions — the ionic solid forms readily.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        fig: 'c11-04-fig-4.2',
        q: 'Draw the Lewis structure of the ozone molecule, O<sub>3</sub>, and calculate the formal charge on each oxygen atom.',
        steps: [
          '<b>Given/Setup:</b> Three oxygen atoms; total valence electrons = 3 × 6 = 18.',
          'A satisfactory Lewis structure has a central O double-bonded to one terminal O and single-bonded to the other, with lone pairs completing every octet.',
          'Apply FC = <i>V</i> − <i>L</i> − ½<i>B</i>, with <i>V</i> = 6 for every oxygen:<br>• <b>Central O:</b> <i>L</i> = 2, <i>B</i> = 6 (one double + one single bond = 3 shared pairs). FC = 6 − 2 − 3 = +1.<br>• <b>Double-bonded terminal O:</b> <i>L</i> = 4, <i>B</i> = 4. FC = 6 − 4 − 2 = 0.<br>• <b>Single-bonded terminal O:</b> <i>L</i> = 6, <i>B</i> = 2. FC = 6 − 6 − 1 = −1.',
          '<b>Check:</b> (+1) + 0 + (−1) = 0, which matches the neutral molecule.',
        ],
        ans: 'Formal charges: +1, 0, −1.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three of the following molecules have a net dipole moment of zero. Identify the <b>one</b> that is polar: CCl<sub>4</sub>, BF<sub>3</sub>, CHCl<sub>3</sub>, CO<sub>2</sub>.',
        steps: [
          '<b>Speed approach.</b> Do <b>not</b> compute anything. Ask only: does symmetry let the bond dipoles cancel?',
          '• CCl<sub>4</sub> — four identical C–Cl dipoles pointing to the corners of a tetrahedron ⇒ cancel ⇒ <i>μ</i> = 0.<br>• BF<sub>3</sub> — three identical B–F dipoles at 120° in a plane ⇒ cancel ⇒ <i>μ</i> = 0.<br>• CO<sub>2</sub> — two equal, opposite C=O dipoles in a straight line ⇒ cancel ⇒ <i>μ</i> = 0.<br>• CHCl<sub>3</sub> — replacing one Cl of CCl<sub>4</sub> with H <b>breaks the symmetry</b>; the dipoles no longer cancel.',
          '<b>Trap:</b> students see four polar C–Cl/C–H bonds in CHCl<sub>3</sub> and four in CCl<sub>4</sub> and assume both behave alike — but it is symmetry of the arrangement, not the mere presence of polar bonds, that decides polarity.',
        ],
        ans: 'CHCl<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A gaseous diatomic molecule X–Y has a bond length of 130 pm and an observed dipole moment of 1.10 D. Estimate its percentage ionic character. (Take <i>e</i> = 1.6 × 10<sup>−19</sup> C, 1 D = 3.336 × 10<sup>−30</sup> C m.)',
        steps: [
          'This links two ideas: the definition of the fully-ionic dipole and the ratio defining ionic character.',
          '<b>Step 1 — fully-ionic dipole:</b><br><i>μ</i><sub>ionic</sub> = <i>e</i> × <i>d</i> = (1.6 × 10<sup>−19</sup>)(130 × 10<sup>−12</sup>) = 2.08 × 10<sup>−29</sup> C m.',
          '<b>Step 2 — convert to debye:</b><br><i>μ</i><sub>ionic</sub> = (2.08 × 10<sup>−29</sup>)/(3.336 × 10<sup>−30</sup>) ≈ 6.24 D.',
          '<b>Step 3 — ratio:</b><br>% ionic = (1.10/6.24) × 100 ≈ 17.6%.',
          'A handy sanity check: the observed value (1.10 D) must always be smaller than the fully-ionic value (6.24 D); if your ratio exceeds 100%, you have slipped a power of ten in the bond length.',
        ],
        ans: '<b>The bond is roughly 18% ionic</b> — i.e. predominantly covalent with modest charge separation.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'c11-04-fig-4.3',
        q: 'The azide ion N<sub>3</sub><sup>−</sup> is linear and symmetric. (a) Draw a Lewis structure that minimises formal charge, (b) assign the formal charges, and (c) use resonance to predict the two N–N bond orders and how the two N–N bond lengths compare.',
        steps: [
          '<b>(a) Electron count:</b> N<sub>3</sub><sup>−</sup> has 3 × 5 + 1 = 16 valence electrons. The lowest-formal-charge linear structure places <b>two N=N double bonds</b> on the central nitrogen, with two lone pairs on each terminal nitrogen:<br>[N=N=N]<sup>−</sup> (Figure 4.3)',
          '<b>(b) Formal charges</b> (<i>V</i> = 5 throughout):<br>• Central N: <i>L</i> = 0, <i>B</i> = 8 (two double bonds). FC = 5 − 0 − 4 = +1.<br>• Each terminal N: <i>L</i> = 4, <i>B</i> = 4. FC = 5 − 4 − 2 = −1.<br>• Sum: (−1) + (+1) + (−1) = −1 ✓.',
          '<b>(c) Resonance and bond order.</b> This symmetric form has two further resonance forms, equivalent to each other, in which the double bonds are redistributed as a triple/single pair, [N≡N–N]<sup>−</sup> ↔ [N–N≡N]<sup>−</sup>. Because the two end-on triple-bond forms are equivalent and contribute equally, the <b>real ion is the symmetric hybrid</b>: each N–N linkage has an average bond order of 2, and crucially the <b>two N–N bonds are identical in length</b> — there is no “longer” and “shorter” bond. This is the deep lesson of resonance: the molecule is a single blended species (like a chutney, not a switch flicking between two recipes), so partial bond orders and equal bond lengths emerge naturally — a conclusion no single Lewis structure could deliver.',
        ],
        ans: '',
      },
      { t: 'fig', id: 'c11-04-01-d1' },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the Lewis dot structure of the carbonate ion CO<sub>3</sub><sup>2−</sup> and mark the formal charge on each atom.',
            a: 'Central C double-bonded to one O (FC 0) and single-bonded to two O (FC −1 each); C has FC 0; net −2.',
          },
          {
            q: '[NEET] Among H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub> and SO<sub>2</sub>, which one is non-polar?',
            a: 'CO<sub>2</sub> only (linear, so its bond dipoles cancel); H<sub>2</sub>O, NH<sub>3</sub>, SO<sub>2</sub> are all polar (bent/pyramidal).',
          },
          {
            q: '[JEE Main] The H–Br bond has length 141 pm and observed dipole moment 0.79 D. Calculate its percentage ionic character.',
            a: '≈ 11.7%.',
          },
          {
            q: '[JEE Main] Arrange in order of increasing covalent character (Fajans’ rules): NaCl, MgCl<sub>2</sub>, AlCl<sub>3</sub>, KCl.',
            a: 'KCl < NaCl < MgCl<sub>2</sub> < AlCl<sub>3</sub>.',
          },
          {
            q: '[JEE Advanced] For the nitrate ion NO<sub>3</sub><sup>−</sup>, draw the three equivalent resonance structures, assign formal charges, and state the predicted N–O bond order and the relationship among the three N–O bond lengths.',
            a: 'Each N–O bond order = 1⅓ (i.e. 4/3); all three N–O bond lengths are equal.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the thiocyanate-type linear ion [S=C=N]<sup>−</sup> (two lone pairs on S and on N) drawn with two double bonds on carbon, the formal charge on carbon is:',
        opts: [
          { label: '0', nudge: null },
          { label: '+1', nudge: '<b>(b)</b> +1 needs <i>B</i> = 6, i.e. only three shared pairs on carbon.' },
          { label: '−1', nudge: '<b>(c)</b> −1 would need <i>B</i> = 10, i.e. five shared pairs, impossible for carbon.' },
          { label: '+2', nudge: '<b>(d)</b> +2 comes from using <i>B</i> = 4 (each shared pair counted once, not twice) instead of 8.' },
        ],
        correct: 0,
        solution: 'Carbon has <i>V</i> = 4, <i>L</i> = 0, <i>B</i> = 8 (two double bonds), so FC = 4 − 0 − 4 = 0.',
      },
      {
        t: 'mcq',
        q: 'Which molecule has the <b>largest</b> dipole moment?',
        opts: [
          {
            label: 'CO<sub>2</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all symmetric (linear, trigonal planar, tetrahedral respectively); their bond dipoles cancel to give <i>μ</i> = 0.',
          },
          {
            label: 'BF<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all symmetric (linear, trigonal planar, tetrahedral respectively); their bond dipoles cancel to give <i>μ</i> = 0.',
          },
          { label: 'H<sub>2</sub>O', nudge: null },
          {
            label: 'CCl<sub>4</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all symmetric (linear, trigonal planar, tetrahedral respectively); their bond dipoles cancel to give <i>μ</i> = 0. A student who picks (d) reasons “Cl is very electronegative, so the dipole must be huge” — true for each bond, but the vector sum is zero.',
          },
        ],
        correct: 2,
        solution: 'Water is bent, so its two O–H bond dipoles do not cancel and add to a large net moment.',
      },
      {
        t: 'mcq',
        q: 'According to Fajans’ rules, which pairing shows the <b>greatest</b> covalent character?',
        opts: [
          { label: 'large cation + small anion', nudge: '<b>(a)</b> is the exact reverse and gives the most ionic character.' },
          { label: 'small cation + large anion', nudge: null },
          { label: 'low cationic charge', nudge: '<b>(c)</b> low charge means weak polarising power, hence more ionic.' },
          {
            label: 'noble-gas-type cation',
            nudge: '<b>(d)</b> a noble-gas (8-electron) cation is less polarising than a pseudo-noble-gas (<i>n</i> − 1)d<sup>10</sup><i>n</i>s<sup>0</sup> cation, so it gives less covalent character.',
          },
        ],
        correct: 1,
        solution: 'A small, dense cation polarises a large, easily-deformed anion strongly, dragging electron density into the bonding region — that build-up is covalent character.',
      },
      {
        t: 'mcq',
        q: 'NH<sub>3</sub> has a dipole moment of about 1.47 D while NF<sub>3</sub> has only about 0.23 D, even though F is more electronegative than H. The best explanation is:',
        opts: [
          { label: 'F atoms are heavier', nudge: '<b>(a)</b> mass is irrelevant to dipole moment.' },
          {
            label: 'NF<sub>3</sub> is planar',
            nudge: '<b>(b)</b> NF<sub>3</sub> is pyramidal, not planar — a planar NF<sub>3</sub> would have zero dipole, as its three N–F dipoles cancel.',
          },
          { label: 'in NF<sub>3</sub> the lone-pair dipole opposes the bond dipoles', nudge: null },
          {
            label: 'NH<sub>3</sub> has no lone pair',
            nudge: '<b>(d)</b> false: nitrogen carries a lone pair in both molecules; that lone pair is the whole point.',
          },
        ],
        correct: 2,
        solution: 'Both are pyramidal with a nitrogen lone pair. In NH<sub>3</sub> the lone-pair dipole points the same way as the resultant of the N–H bond dipoles, so they add. In NF<sub>3</sub> the N–F bond dipoles point away from nitrogen (F is more electronegative), opposing the lone-pair dipole, so they largely cancel.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing formal charge with oxidation number.</b> They are computed differently and answer different questions. Formal charge splits every shared pair equally (covalent assumption); oxidation number assigns both electrons to the more electronegative atom (ionic assumption). The same atom can have formal charge 0 and a non-zero oxidation number.',
          '<b>Dropping the ½ on the bonding term.</b> A double bond contributes <i>B</i> = 4 shared electrons, a triple bond <i>B</i> = 6. Forgetting to count both electrons of every shared pair (or forgetting to halve) is the single most common formal-charge slip.',
          '<b>Treating “many polar bonds” as “polar molecule.”</b> CCl<sub>4</sub>, CO<sub>2</sub> and BF<sub>3</sub> are crammed with polar bonds yet are perfectly non-polar. Always sum the bond dipoles as vectors and check the symmetry first.',
          '<b>Inverting Fajans’ logic.</b> A small, highly charged cation with a large anion gives <b>more covalent</b> character, not more ionic. Students often memorise the factors but attach them to the wrong outcome.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For polarity questions, never calculate — sketch the shape and look for a centre of symmetry. If the molecule looks the same when “flipped,” its dipole moment is almost certainly zero. For percentage-ionic-character problems, memorise that <i>e</i> × (100 pm) ≈ 4.8 D as a one-step mental yardstick; scale linearly with bond length.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Octet rule',
            note: 'atoms bond to reach 8 valence electrons (2 for H/He). Fails for electron-deficient (BCl<sub>3</sub>), expanded-octet (SF<sub>6</sub>), and odd-electron (NO) species.',
          },
          {
            f: 'Formal charge',
            note: 'FC = <i>V</i> − <i>L</i> − ½<i>B</i>. Charges must sum to the species charge; best structure has FC nearest zero, with − on the most electronegative atom.',
          },
          {
            f: 'Bond order ↑ ⇒ bond enthalpy ↑, bond length ↓',
            note: 'Isoelectronic species share bond order (N<sub>2</sub>, CO, NO<sup>+</sup> = 3).',
          },
          {
            f: 'Dipole moment',
            note: '<i>μ</i> = <i>q</i> × <i>d</i>; vector; unit debye, 1 D = 3.336 × 10<sup>−30</sup> C m. Net <i>μ</i> = vector sum of bond dipoles; symmetric molecules ⇒ <i>μ</i> = 0.',
          },
          { f: '% ionic character', note: '<i>μ</i><sub>obs</sub>/(<i>e</i> × <i>d</i>) × 100.' },
          {
            f: 'Fajans (more covalent when)',
            note: 'small cation, large anion, high charge, pseudo-noble-gas cation. <b>Mnemonic — “SHaPe”:</b> <b>S</b>mall cation, <b>H</b>igh charge, <b>P</b>seudo-noble-gas config ⇒ covalent character.',
          },
          {
            f: 'Resonance',
            note: 'real molecule is a single hybrid of canonical forms (lower energy than any one form). Gives equal bond lengths and fractional bond orders (O<sub>3</sub>, CO<sub>3</sub><sup>2−</sup>, NO<sub>3</sub><sup>−</sup>).',
          },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 174–182 ─────────────────────────
  {
    n: '02',
    title: 'VSEPR Theory, Valence Bond Theory & Hybridization',
    kalam: 'Hybridisation is the bridge that makes VBT agree with the shapes VSEPR predicts.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the highest-yield region of the chapter. CBSE Boards ask shape/bond-angle prediction and hybridisation almost every year (2–3 marks). NEET reliably has 1–2 questions on hybridisation and molecular shape. JEE Main treats hybridisation as a near-guaranteed single-concept question; JEE Advanced layers bond-angle ordering, lone-pair placement, and shape together into one hard problem.',
      },
      {
        t: 'p',
        html: 'By now you can draw a Lewis structure — you know which atoms are bonded and how many electrons sit where. But a Lewis structure is flat and lifeless; it tells you nothing about the shape a molecule takes in three dimensions. Why is water bent and not straight? Why is methane a perfect little pyramid-of-triangles rather than a flat plus-sign? Three theories answer this, each fixing what the previous one couldn’t.',
      },
      {
        t: 'p',
        html: '<b>VSEPR</b> (Valence Shell Electron Pair Repulsion) is the simplest and most intuitive. Its whole idea fits in one sentence: electron pairs around the central atom hate each other and spread out as far apart as possible. Think of a bunch of helium balloons tied together at their knots. Tie two balloons together and they point opposite ways (a straight line). Tie three and they splay into a flat triangle. Tie four and they cannot stay flat — they bulge into a three-dimensional tetrahedron. The balloons are the electron pairs; their mutual avoidance is the molecular shape. That is the entire engine of VSEPR.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine four people forced to stand in a small lift, each wanting maximum personal space. They will instinctively move to the four corners — never two crowding one side. Electron pairs do exactly this, except in 3D. Now add a twist: a lone pair is like a person carrying a wide suitcase — it occupies more room and elbows the bonded pairs closer together. This single refinement explains why water’s bond angle (104.5°) is squeezed below the ideal tetrahedral 109.5°: oxygen’s two lone “suitcases” push the two O–H bonds inward.',
      },
      {
        t: 'p',
        html: 'VSEPR gives shape, but it is silent on why a bond forms at all and why bonds differ in strength. Enter <b>Valence Bond Theory (VBT)</b>. VBT says a covalent bond forms when two atoms come close enough that their atomic orbitals overlap — and the more they overlap, the stronger the bond. It is like two people shaking hands: a firm, full-palm grip (head-on overlap, a <b>sigma bond</b>) is far stronger than two people merely brushing fingertips sideways (sidewise overlap, a <b>pi bond</b>).',
      },
      {
        t: 'p',
        html: 'But VBT in its raw form predicts the wrong shapes. Pure atomic orbitals (s, p<sub><i>x</i></sub>, p<sub><i>y</i></sub>, p<sub><i>z</i></sub>) point along fixed axes, so carbon’s bonds should be at 90° — yet methane’s are at 109.5°, and all four C–H bonds are identical. The fix is <b>hybridisation</b>: before bonding, the central atom blends its valence orbitals into a new set of equivalent <b>hybrid orbitals</b> that point in exactly the directions VSEPR demands. Blending one s and three p orbitals (sp<sup>3</sup>) gives four identical orbitals aimed at the corners of a tetrahedron — and methane’s shape falls out perfectly. Hybridisation is the bridge that makes VBT agree with the shapes VSEPR predicts.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> VSEPR predicts geometry but offers no real theoretical basis for it and struggles with transition-metal and some heavier-element compounds. It treats a multiple bond as a single “super pair,” which works for shape but hides the σ/π distinction. VBT and hybridisation are powerful for main-group molecules but become strained for electron-deficient species (e.g. diborane’s bridging bonds) and cannot explain paramagnetism of O<sub>2</sub> — that needs Molecular Orbital Theory, the subject of Topic 03. Hybridisation is also a model we invoke after knowing the geometry, not a physical event the atom performs; treat it as bookkeeping that happens to predict correctly.',
      },

      { t: 'part', title: 'Key parameters, formulas and definitions' },
      {
        t: 'formula',
        kicker: 'VSEPR repulsion order',
        main: 'the strength of repulsion between electron pairs decreases as:<br>lone pair–lone pair > lone pair–bond pair > bond pair–bond pair',
        legend: [],
        note: 'This ordering explains most bond-angle distortions in the chapter.',
      },
      {
        t: 'formula',
        kicker: 'Steric number (SN)',
        main: 'the count that fixes both hybridisation and electron-pair geometry:<br>SN = (number of σ-bonded atoms) + (number of lone pairs on central atom)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Hybridisation shortcut',
        main: '<i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>]<br>The result maps directly to hybridisation: 2 → sp, 3 → sp<sup>2</sup>, 4 → sp<sup>3</sup>, 5 → sp<sup>3</sup>d, 6 → sp<sup>3</sup>d<sup>2</sup>, 7 → sp<sup>3</sup>d<sup>3</sup>',
        legend: [
          'for a central atom with monovalent surrounding atoms',
          '<i>H</i> = hybridisation number (number of hybrid orbitals)',
          '<i>V</i> = valence electrons of the central atom',
          '<i>M</i> = number of monovalent atoms attached',
          '<i>C</i> = positive (cationic) charge',
          '<i>A</i> = negative (anionic) charge',
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Steric number → hybridisation → electron-pair geometry → ideal angle',
        head: ['SN', 'Hybridisation', 'Electron-pair geometry', 'Ideal bond angle'],
        rows: [
          ['2', 'sp', 'Linear', '180°'],
          ['3', 'sp<sup>2</sup>', 'Trigonal planar', '120°'],
          ['4', 'sp<sup>3</sup>', 'Tetrahedral', '109.5°'],
          ['5', 'sp<sup>3</sup>d', 'Trigonal bipyramidal', '90°, 120°'],
          ['6', 'sp<sup>3</sup>d<sup>2</sup>', 'Octahedral', '90°'],
        ],
      },
      {
        t: 'def',
        term: 'Percentage s-character',
        html: 'sp ⇒ 50%, sp<sup>2</sup> ⇒ 33.3%, sp<sup>3</sup> ⇒ 25%. <b>More s-character ⇒ larger bond angle and shorter, stronger bond</b> (s-orbitals are closer to the nucleus).',
      },
      {
        t: 'def',
        term: 'Sigma vs pi bond',
        html: 'A σ bond forms by <b>head-on (axial)</b> overlap of orbitals along the internuclear axis; a π bond forms by <b>sidewise (lateral)</b> overlap of unhybridised p orbitals. A σ bond is <b>stronger</b> (greater overlap). A single bond is one σ; a double bond is one σ + one π; a triple bond is one σ + two π.',
      },

      { t: 'part', title: 'Key procedures and logical frameworks' },
      {
        t: 'proc',
        title: 'Procedure A — Predicting molecular shape with VSEPR',
        steps: [
          '<b>Draw the Lewis structure</b> and identify the central atom.',
          '<b>Compute the steric number</b> SN = σ-bonds + lone pairs. (Treat each multiple bond as a single region of electron density — one “super pair” — for shape purposes.)',
          '<b>Read off the electron-pair geometry</b> from SN using the table in Key parameters, formulas and definitions. This is the arrangement of all electron pairs.',
          '<b>Subtract the lone pairs</b> to get the molecular shape — the arrangement of the atoms only. The lone pairs are still there distorting things; they just are not part of the named shape.',
          '<b>Adjust the bond angles</b> using the repulsion order: each lone pair squeezes the bond angles below the ideal value. <b>Why:</b> lone pairs are held by only one nucleus, so their cloud is fatter and pushes harder than a bond pair shared between two nuclei.',
        ],
      },
      {
        t: 'p',
        html: 'For example, ammonia (NH<sub>3</sub>) has SN = 4 (three N–H bonds + one lone pair) ⇒ tetrahedral electron geometry, but with one lone pair the shape is trigonal pyramidal, and the H–N–H angle is squeezed to 107° from 109.5°. Water (SN = 4, two lone pairs) is squeezed further to 104.5° and is bent.',
      },
      {
        t: 'p',
        html: '<b>Procedure B — Assigning hybridisation</b><br>Use either route, whichever is faster:<br>• <b>Steric-number route:</b> SN = 2, 3, 4, 5, 6 ⇒ sp, sp<sup>2</sup>, sp<sup>3</sup>, sp<sup>3</sup>d, sp<sup>3</sup>d<sup>2</sup>.<br>• <b>Formula route:</b> <i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>] for species with monovalent peripheral atoms.',
      },
      {
        t: 'p',
        html: 'Both count the same thing — the number of orbitals the central atom must supply. <b>Why they agree:</b> every σ bond and every lone pair needs its own hybrid orbital to live in, so counting hybrid orbitals is identical to counting (σ-bonds + lone pairs).',
      },
      {
        t: 'p',
        html: '<b>A reasoning framework: why VBT needs hybridisation (the H<sub>2</sub> → CH<sub>4</sub> logic)</b><br>Valence bond theory begins with the hydrogen molecule. As two H atoms approach, the attraction between each nucleus and the other’s electron grows faster than the internuclear and inter-electronic repulsions, so the system’s potential energy falls. It reaches a minimum at an internuclear separation of 74 pm — the H–H bond length — releasing 435.8 kJ mol<sup>−1</sup>. That energy minimum is the bond.',
      },
      { t: 'fig', id: 'c11-04-fig-4.4' },
      {
        t: 'p',
        html: 'Now apply this to carbon. Carbon’s ground state (2s<sup>2</sup> 2p<sup>2</sup>) has only two unpaired electrons, predicting two bonds at 90° — contradicting methane’s four equivalent bonds at 109.5°. The resolution: one 2s electron is promoted to the empty 2p orbital (giving four unpaired electrons), and the one 2s + three 2p orbitals then <b>hybridise</b> into four equivalent sp<sup>3</sup> orbitals pointing at tetrahedral corners. The small energy cost of promotion is repaid many times over by forming four strong bonds instead of two. This is the logical chain — overlap maximisation drives promotion, promotion enables hybridisation, hybridisation delivers the observed geometry.',
      },
      {
        t: 'p',
        html: '<b>Types of orbital overlap</b><br>Not all overlaps are equal. A σ bond can form by s–s overlap (as in H<sub>2</sub>), by s–p overlap (as in H–Cl), or by p–p overlap along the internuclear axis (head-on). In every case the electron density piles up between the nuclei and is symmetric about the bond axis — that is what makes a σ bond strong and freely rotatable. A π bond, by contrast, forms only by <b>sidewise</b> overlap of two unhybridised p orbitals lying parallel to each other; its electron density sits in two lobes above and below the axis, the overlap is poorer, and the bond resists rotation. The practical consequences are worth memorising: σ stronger than π, σ allows free rotation while a π bond locks the geometry (the origin of cis–trans isomerism), and the first bond between any two atoms is always the σ.',
      },
      {
        t: 'p',
        html: '<b>The three carbon hybridisations — a worked series</b><br>The clearest way to see hybridisation in action is the ethane–ethene–ethyne ladder, where carbon shows all three of its hybrid states.<br>• <b>sp<sup>3</sup> — ethane (C<sub>2</sub>H<sub>6</sub>).</b> Each carbon mixes one 2s with three 2p orbitals into four sp<sup>3</sup> hybrids. One hybrid on each carbon overlaps head-on to form the sp<sup>3</sup>–sp<sup>3</sup> C–C σ bond; the other three form sp<sup>3</sup>–s σ bonds to hydrogen. There are no leftover p orbitals, so the C–C linkage is a single bond, the C–C length is about 154 pm, and the framework is freely rotating.<br>• <b>sp<sup>2</sup> — ethene (C<sub>2</sub>H<sub>4</sub>).</b> Each carbon mixes one 2s with two 2p orbitals into three sp<sup>2</sup> hybrids lying in a plane at ∼ 120°; one unhybridised p orbital stays perpendicular to that plane. The sp<sup>2</sup> hybrids form the C–C σ and the two C–H σ bonds, while the two perpendicular p orbitals overlap sidewise to form one π bond. Thus the C=C double bond is <b>one σ + one π</b>, the C–C length contracts to about 134 pm, and the H–C–H angle is roughly 117.6°. The π bond also explains why ethene is flat and cannot rotate about its double bond.<br>• <b>sp — ethyne (C<sub>2</sub>H<sub>2</sub>).</b> Each carbon mixes one 2s with one 2p into two sp hybrids pointing 180° apart (linear), leaving two unhybridised p orbitals. The sp hybrids form the C–C and C–H σ bonds; the two pairs of perpendicular p orbitals form <b>two π bonds</b>. The C≡C triple bond is therefore <b>one σ + two π</b>, and the C–C length is the shortest of the three.',
      },
      {
        t: 'p',
        html: 'Reading the ladder top to bottom, s-character rises (25% → 33% → 50%), bond length shrinks (154 → 134 → ∼ 120 pm), and bond strength climbs — a single trend that ties hybridisation, geometry, and bond parameters together.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Using VSEPR theory, predict the shape and approximate bond angle of phosphorus trichloride, PCl<sub>3</sub>.',
        steps: [
          '<b>Step 1 — Lewis/central atom:</b> P is central; it forms three P–Cl single bonds and retains one lone pair (P has 5 valence electrons; 3 are used in bonds, leaving one lone pair).',
          '<b>Step 2 — Steric number:</b> SN = 3 (σ-bonds) + 1 (lone pair) = 4.',
          '<b>Step 3 — Electron geometry:</b> tetrahedral.',
          '<b>Step 4 — Shape:</b> with one lone pair, the molecular shape is <b>trigonal pyramidal</b> (like NH<sub>3</sub>).',
          '<b>Step 5 — Bond angle:</b> the lone pair repels the three bond pairs, squeezing the Cl–P–Cl angle slightly <b>below</b> 109.5° (experimentally about 100°).',
        ],
        ans: 'Trigonal pyramidal, bond angle ≈ 100°.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'What is the hybridisation of the central atom in xenon difluoride, XeF<sub>2</sub>?',
        steps: [
          '<b>Speed approach.</b> Use the formula <i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>] directly. For Xe: <i>V</i> = 8, <i>M</i> = 2 (two F), <i>C</i> = 0, <i>A</i> = 0:<br><i>H</i> = ½[8 + 2 − 0 + 0] = 5',
          '<b>Trap:</b> students see only two bonds and rush to sp — forgetting that Xe’s <b>three lone pairs</b> also demand hybrid orbitals and count toward the steric number. Always include lone pairs; the shape is linear but the hybridisation is not sp.',
        ],
        ans: 'sp<sup>3</sup>d (three lone pairs occupy the equatorial plane, giving a <b>linear</b> F–Xe–F shape).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'c11-04-fig-4.5',
        q: 'For sulphur tetrafluoride, SF<sub>4</sub>: (i) determine the hybridisation of S, (ii) predict its molecular shape, and (iii) state whether the molecule is polar.',
        steps: [
          'This links hybridisation, lone-pair placement, and polarity.',
          '(i) For S: <i>V</i> = 6, <i>M</i> = 4, <i>C</i> = <i>A</i> = 0 ⇒ <i>H</i> = ½[6 + 4] = 5 ⇒ sp<sup>3</sup>d. (Equivalently SN = 4 σ + 1 lp = 5.)',
          '(ii) The electron geometry is trigonal bipyramidal. The single lone pair occupies an <b>equatorial</b> position (not axial) — why? An equatorial lone pair faces only two near-neighbours at 90°, whereas an axial lone pair would face three at 90°, a higher-repulsion arrangement. Removing the equatorial lone pair from the trigonal bipyramid leaves a <b>see-saw</b> shape.',
          '(iii) Because the see-saw shape is asymmetric, the four S–F bond dipoles do <b>not</b> cancel. <b>SF<sub>4</sub> is polar.</b> (Contrast with octahedral SF<sub>6</sub>, which is non-polar.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Arrange H<sub>2</sub>O, H<sub>2</sub>S and H<sub>2</sub>Se in decreasing order of their H–X–H bond angle, and justify the trend using at least two distinct arguments.',
        steps: [
          'All three have SN = 4 (two bonds + two lone pairs), so all are bent — yet the experimental angles fall sharply: H<sub>2</sub>O (104.5°) > H<sub>2</sub>S (∼ 92°) > H<sub>2</sub>Se (∼ 91°).',
          '<b>Argument 1 — central-atom electronegativity.</b> Down the group O → S → Se, electronegativity falls. A more electronegative central atom (O) pulls the bonding pairs closer to itself, so the two bond pairs sit nearer together and repel more strongly, propping the angle open. As the central atom becomes less electronegative, the bonding pairs drift outward, repel less, and the angle collapses toward 90°.',
          '<b>Argument 2 — orbital character.</b> In the heavier hydrides the central atom uses orbitals with <b>less s-character</b> in bonding (closer to pure p, which are mutually 90°). Oxygen retains more s-character in its bonds, holding the angle well above 90°, while Se’s near-pure-p bonding pushes it almost to 90°.',
          '<b>The deep point:</b> the same steric number does not mean the same bond angle — central-atom electronegativity and effective s-character fine-tune the value, and the trend is monotonic down the group.',
        ],
        ans: '<b>H<sub>2</sub>O > H<sub>2</sub>S > H<sub>2</sub>Se.</b>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Predict the shape and bond angle of the hydronium ion, H<sub>3</sub>O<sup>+</sup>, using VSEPR theory.',
            a: 'Trigonal pyramidal, ≈ 107° (SN = 4, one lone pair on O).',
          },
          {
            q: '[NEET] State the hybridisation of the central atom in XeF<sub>4</sub>.',
            a: 'sp<sup>3</sup>d<sup>2</sup> (SN = 6; two lone pairs ⇒ square planar shape).',
          },
          {
            q: '[JEE Main] Identify the hybridisation and shape of the central atom in ClF<sub>3</sub>, and explain why it is T-shaped rather than trigonal planar.',
            a: 'sp<sup>3</sup>d; the two lone pairs occupy equatorial positions to minimise 90° repulsions, leaving three F atoms in a T-shape.',
          },
          {
            q: '[JEE Main] Among CH<sub>4</sub>, NH<sub>3</sub> and H<sub>2</sub>O (all sp<sup>3</sup>), arrange the bond angles in decreasing order and give the reason.',
            a: 'CH<sub>4</sub> (109.5°) > NH<sub>3</sub> (107°) > H<sub>2</sub>O (104.5°) — increasing number of lone pairs increases lp–bp repulsion, squeezing the angle.',
          },
          {
            q: '[JEE Advanced] PCl<sub>5</sub> is sp<sup>3</sup>d. Explain why its axial P–Cl bonds are longer than its equatorial P–Cl bonds.',
            a: 'The three equatorial bonds lie at 120° (low repulsion); each axial bond faces three equatorial bonds at 90°, so greater repulsion lengthens (and weakens) the axial bonds.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The molecular shape of XeF<sub>4</sub> is:',
        opts: [
          { label: 'tetrahedral', nudge: '<b>(a)</b> ignores lone pairs and assumes four bonds ⇒ tetrahedral.' },
          { label: 'square planar', nudge: null },
          { label: 'see-saw', nudge: '<b>(c)</b> would arise from putting only one lone pair (that gives see-saw, as in SF<sub>4</sub>).' },
          {
            label: 'octahedral',
            nudge: '<b>(d)</b> is the electron-pair geometry, not the molecular shape — a classic confusion between the two.',
          },
        ],
        correct: 1,
        solution: 'Xe has SN = 6 (sp<sup>3</sup>d<sup>2</sup>, octahedral electron geometry) with <b>two lone pairs</b>, which sit trans to each other (axial, 180° apart) to minimise repulsion, leaving four F atoms in a plane.',
      },
      {
        t: 'mcq',
        q: 'Which species has the maximum bond angle?',
        opts: [
          {
            label: 'NH<sub>3</sub>',
            nudge: '<b>(a)</b> NH<sub>3</sub> has one lone pair (107°). Students who pick (a) forget that even one lone pair drops the angle below tetrahedral.',
          },
          { label: 'PH<sub>3</sub>', nudge: '<b>(b)</b> PH<sub>3</sub> is even smaller (∼ 93°, less electronegative central atom).' },
          { label: 'H<sub>2</sub>O', nudge: '<b>(c)</b> H<sub>2</sub>O has two lone pairs (104.5°).' },
          { label: 'CH<sub>4</sub>', nudge: null },
        ],
        correct: 3,
        solution: 'CH<sub>4</sub>, 109.5°. Methane has four bond pairs and <b>zero lone pairs</b>, so no lone-pair compression occurs.',
      },
      {
        t: 'mcq',
        q: 'The hybridisation of the central atom changes in the conversion:<br>BF<sub>3</sub> + F<sup>−</sup> → BF<sub>4</sub><sup>−</sup>',
        opts: [
          { label: 'sp<sup>2</sup> → sp<sup>3</sup>', nudge: null },
          { label: 'sp<sup>3</sup> → sp<sup>2</sup>', nudge: '<b>(b)</b> reverses the direction.' },
          { label: 'sp → sp<sup>2</sup>', nudge: '<b>(c)</b> miscounts BF<sub>3</sub> as sp.' },
          {
            label: 'no change',
            nudge: '<b>(d)</b> assumes coordination number is unchanged — but B gains a bond, so it must rehybridise.',
          },
        ],
        correct: 0,
        solution: 'BF<sub>3</sub> is trigonal planar (SN = 3, sp<sup>2</sup>); adding F<sup>−</sup> gives B a fourth bond, so SN = 4, sp<sup>3</sup>, tetrahedral.',
      },
      {
        t: 'mcq',
        q: 'In which molecule is a π bond present?',
        opts: [
          {
            label: 'CH<sub>4</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> contain only single (σ) bonds — every C and N is sp<sup>3</sup> with no leftover p orbital to form a π bond.',
          },
          {
            label: 'C<sub>2</sub>H<sub>6</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> contain only single (σ) bonds — every C and N is sp<sup>3</sup> with no leftover p orbital to form a π bond. A student picking (b) confuses ethane (single C–C) with ethene.',
          },
          { label: 'C<sub>2</sub>H<sub>4</sub>', nudge: null },
          {
            label: 'NH<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> contain only single (σ) bonds — every C and N is sp<sup>3</sup> with no leftover p orbital to form a π bond.',
          },
        ],
        correct: 2,
        solution: 'C<sub>2</sub>H<sub>4</sub> (ethene). Its C=C double bond is one σ (sp<sup>2</sup>–sp<sup>2</sup>) plus one π (sidewise overlap of unhybridised p orbitals).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing electron-pair geometry with molecular shape.</b> H<sub>2</sub>O is tetrahedral in electron geometry but bent in shape. The named shape counts atoms only; lone pairs distort but are invisible in the shape’s name.',
          '<b>Dropping lone pairs from the steric number.</b> Counting only bonded atoms makes XeF<sub>2</sub> look sp and SF<sub>4</sub> look sp<sup>3</sup>. Lone pairs each occupy a hybrid orbital and must be counted.',
          '<b>Assuming “same steric number ⇒ same bond angle.”</b> H<sub>2</sub>O, H<sub>2</sub>S and H<sub>2</sub>Se all have SN = 4 yet span 104.5° to 91°. The steric number sets the ideal angle; electronegativity and lone pairs fine-tune the real one.',
          '<b>Muddling σ and π overlap.</b> A σ bond is head-on along the axis; a π bond is sidewise. Only unhybridised p orbitals form π bonds, and σ is always the stronger of the two.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any main-group molecule, compute the steric number in one glance — count atoms bonded to the centre, add lone pairs — and you instantly get hybridisation and electron geometry. For bond-angle comparisons, remember the two “shrinking” forces: more lone pairs shrink the angle, and a less electronegative central atom shrinks it too.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'VSEPR engine',
            note: 'electron pairs repel; repulsion order <b>lp–lp > lp–bp > bp–bp</b>. Multiple bond = one “super pair” for shape.',
          },
          {
            f: 'Steric number',
            note: '= σ-bonds + lone pairs. SN 2/3/4/5/6 ⇒ sp/sp<sup>2</sup>/sp<sup>3</sup>/sp<sup>3</sup>d/sp<sup>3</sup>d<sup>2</sup> ⇒ linear/trigonal-planar/tetrahedral/trigonal-bipyramidal/octahedral.',
          },
          { f: 'Shortcut', note: '<i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>].' },
          {
            f: 'Lone-pair shapes',
            note: 'AB<sub>3</sub>E pyramidal (NH<sub>3</sub>, 107°); AB<sub>2</sub>E<sub>2</sub> bent (H<sub>2</sub>O, 104.5°); AB<sub>4</sub>E see-saw (SF<sub>4</sub>); AB<sub>3</sub>E<sub>2</sub> T-shape (ClF<sub>3</sub>); AB<sub>2</sub>E<sub>3</sub> linear (XeF<sub>2</sub>); AB<sub>4</sub>E<sub>2</sub> square planar (XeF<sub>4</sub>).',
          },
          { f: 's-character ↑ ⇒ bond angle ↑, bond shorter/stronger', note: '(sp 50% > sp<sup>2</sup> 33% > sp<sup>3</sup> 25%).' },
          {
            f: 'VBT',
            note: 'bond = orbital overlap; σ (head-on, stronger) vs π (sidewise, only from unhybridised p). Single = 1σ; double = 1σ + 1π; triple = 1σ + 2π.',
          },
        ],
        aids: [
          '“Some People Sit Properly During Prayer”: sp → linear, sp<sup>2</sup> → trigonal Planar, sp<sup>3</sup> → tetrahedral, sp<sup>3</sup>d → trigonal bipyramidal, sp<sup>3</sup>d<sup>2</sup> → octahedral.',
        ],
      },
    ],
  },
];
