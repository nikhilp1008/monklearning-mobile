import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, the opening section and Topic 01: pp. 401–411 of the Class 11
 * Chemistry Master Reference, word for word. The chapter’s title page (p. 400)
 * and contents (top of p. 401) are not copied. The opening, Classification of
 * Hydrocarbons (pp. 401–402), is the chapter’s “Start here” (n '00', the
 * founder’s decision), split at the book’s own two headings; Topic 01, Alkanes
 * (pp. 403–411), is split at its Sections 1 to 8. Figures 9.1 and 9.2 (captioned
 * p. 405, drawn on the figure page p. 406) are set at the end of the book’s 3.3,
 * the conformational analysis of ethane they illustrate, where the book prints
 * their captions; they are redrawn in lib/diagrams/chemistry-11-09.ts. These
 * pages draw no other structure. Hybrid labels are upright (sp<sup>3</sup>), as
 * in the NCERT books; group bonds use an en dash (–CH<sub>3</sub>, R–X); carbon
 * locants are written C2, C3 (as Chapter 8 prints them); radical dots are as
 * printed (Cl<sup>•</sup>, <sup>•</sup>CH<sub>3</sub>). The book’s “Sub-topic
 * 0N” is read as “Topic 0N”. The errata (p. 509) wording of the Wurtz paragraph
 * (“Two points control this reaction”) is applied.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Opening section · pp. 401–402 ─────────────────────────
  {
    n: '00',
    title: 'Classification of Hydrocarbons',
    kalam:
      'The classification itself is rarely a standalone question, but it is the mental map every multi-step organic problem relies on.',
    blocks: [
      { t: 'part', title: 'Classification of Hydrocarbons' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The classification itself is rarely a standalone question, but it is the mental map every multi-step organic problem relies on. CBSE may ask a one-mark “classify the following” question; cycloalkane ring strain occasionally appears in NEET/JEE as a stability-ordering MCQ.',
      },
      {
        t: 'p',
        html: 'Hydrocarbons — compounds of only carbon and hydrogen — are the foundation of organic chemistry, and the whole of this chapter is organised around a single family tree. Knowing where a compound sits on this tree tells you, before you write a single reaction, how it is likely to behave.',
      },
      {
        t: 'p',
        html: '<b>The three great branches.</b><br>• <b>Aliphatic (open-chain) hydrocarbons</b> are straight or branched chains. They split by saturation: the <b>saturated</b> chains are the <b>alkanes</b> (C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>, only single bonds, studied in Topic 01), while the <b>unsaturated</b> chains carry multiple bonds — <b>alkenes</b> (C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>, a double bond, Topic 02) and <b>alkynes</b> (C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>, a triple bond, Topic 03).<br>• <b>Alicyclic (closed-chain) hydrocarbons</b> are rings that are not aromatic — chiefly the <b>cycloalkanes</b>, treated below.<br>• <b>Aromatic hydrocarbons (arenes)</b> are the specially stabilised ring systems built around benzene (Topic 04).',
      },
      {
        t: 'p',
        html: 'The logic of the chapter follows this tree: we move from the least reactive (alkanes), through the reactive multiple bonds (alkenes and alkynes), to the deceptively unreactive aromatic ring (arenes). A recurring theme ties them together — <b>unsaturation invites addition, while aromaticity resists it.</b>',
      },

      { t: 'part', title: 'Cycloalkanes — the alicyclic bridge' },
      {
        t: 'p',
        html: 'When an alkane chain closes into a ring, two hydrogens are lost, so cycloalkanes share the <b>general formula</b> C<sub><i>n</i></sub>H<sub>2<i>n</i></sub> (the same as alkenes, a classic point of confusion — but cycloalkanes have no double bond). They are <b>named</b> by adding the prefix “<b>cyclo-</b>” to the corresponding alkane: cyclopropane (C<sub>3</sub>H<sub>6</sub>), cyclobutane (C<sub>4</sub>H<sub>8</sub>), cyclopentane, cyclohexane, and so on.',
      },
      {
        t: 'p',
        html: '<b>Ring strain and stability.</b> Carbon “prefers” the tetrahedral angle of 109.5°. In small rings the geometry forces the C–C–C angles away from this ideal, creating <b>angle strain</b> — the heart of <b>Baeyer’s strain theory</b>. Cyclopropane (internal angle 60°) and cyclobutane (90°) are badly strained and therefore relatively reactive; cyclopentane is nearly strain-free; and <b>cyclohexane is the most stable of all</b>, because it escapes strain entirely by puckering into a non-planar <b>“chair” conformation</b> in which every angle returns to the tetrahedral value. So planarity is not assumed for the larger rings — cyclohexane is decidedly three-dimensional.',
      },
      {
        t: 'p',
        html: '<b>Chemical behaviour.</b> Cycloalkane reactivity tracks ring strain. The small, strained rings (cyclopropane, cyclobutane) relieve their strain by <b>ring-opening addition</b> — for instance, cyclopropane adds hydrogen over a catalyst to give propane, behaving almost like an unsaturated compound. The larger, strain-free rings (cyclopentane upward) behave like ordinary alkanes, undergoing <b>free-radical substitution</b> (e.g. halogenation in sunlight) rather than addition. In short: strained rings add and open; relaxed rings substitute, just like their open-chain cousins.',
      },
      {
        t: 'p',
        html: 'With this map in hand — aliphatic versus alicyclic versus aromatic, saturated versus unsaturated — the four topics that follow each become a detailed study of one family on it.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 403–411 ─────────────────────────
  {
    n: '01',
    title: 'Alkanes',
    kalam: 'Alkanes are the launchpad of organic chemistry.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Alkanes are the launchpad of organic chemistry. CBSE Boards reliably pull a 1–3 mark question on preparation (Wurtz, decarboxylation, Kolbe) or the ethane conformation diagram. NEET asks one factual MCQ almost every year — halogen reactivity order, products of controlled oxidation, or counting monochloro products. JEE Main blends nomenclature with free-radical reasoning, and JEE Advanced probes conformational energetics and selectivity of free-radical substitution.',
      },
      {
        t: 'p',
        html: 'Imagine the Mumbai local railway network at its simplest: a single track with stations strung along it, every junction filled in so that nothing more can be added. That “fully occupied, nothing left to attach” picture is an alkane. Alkanes are the <b>saturated</b> hydrocarbons — every carbon has used up all four of its hands (valencies) holding either hydrogen or another carbon through plain <b>single bonds</b>. There are no double or triple bonds waiting to react, no empty seats. This is exactly why the old chemists called them <b>paraffins</b>, from the Latin parum affinis — “little affinity.” They are the wallflowers of the organic world: stable, sluggish, and reluctant to react under ordinary conditions.',
      },
      {
        t: 'p',
        html: 'The whole family obeys one tidy rule: the general formula C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>. Put <i>n</i> = 1 and you get methane (CH<sub>4</sub>), the gas bubbling up in marshy fields and coal mines. Put <i>n</i> = 2 and you get ethane (C<sub>2</sub>H<sub>6</sub>), which you can picture as methane with one hydrogen swapped for a –CH<sub>3</sub> group. Keep doing this and you walk up a staircase — propane, butane, pentane — where each step adds exactly one –CH<sub>2</sub>– unit. Such a stepwise family is a <b>homologous series</b>, and its members are <b>homologues</b>. The beauty is that once you understand one alkane deeply, you understand them all, because they differ only in chain length.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> every carbon in an alkane is like the central pole of a tent with four guy-ropes pulled out to the four corners — a perfect <b>tetrahedron</b> with bond angles of 109.5°. This sp<sup>3</sup>-hybridised geometry means an alkane chain is never a straight rod; it zig-zags, like a string of folded carrom coins. That single fact quietly explains a surprising amount of chemistry, from why “straight-chain” alkanes are actually crinkled, to why molecules can twist about their bonds.',
      },
      {
        t: 'p',
        html: 'And twist they do. Because a carbon–carbon single bond is a cylindrically symmetric σ bond, the two carbons can rotate relative to each other almost freely — like the two halves of a steering wheel turning about the column. Each frozen snapshot of this rotation is a <b>conformation</b>. We will see that this rotation is not perfectly free; there is a tiny speed-bump of energy to climb. That speed-bump is the seed of conformational analysis.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three cautions are worth fixing now. First, the inertness of alkanes is conditional — strike a match and the same “unreactive” methane combusts violently. “Unreactive” means towards acids, bases, and mild oxidising/reducing agents, not towards oxygen or radicals. Second, the general formula C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub> holds only for <b>open-chain (acyclic)</b> alkanes; close the chain into a ring and you lose two hydrogens, giving cycloalkanes C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>. Third, the “free rotation” about C–C bonds is an idealisation; it is hindered by a small barrier, so the molecule spends most of its time in its lowest-energy shape rather than spinning like a top.',
      },

      { t: 'part', title: 'Key definitions, formulae and reactions' },
      {
        t: 'formula',
        kicker: 'General formula (acyclic alkane)',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>',
        legend: ['<i>n</i> = number of carbon atoms'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Geometry of carbon:</b> sp<sup>3</sup> hybridised, tetrahedral, H–C–H angle = 109.5°. Typical bond lengths: C–C = 154 pm, C–H = 112 pm.',
      },
      {
        t: 'formula',
        kicker: 'Combustion (general)',
        main: 'for one mole of alkane:<br>C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub> + ((3<i>n</i> + 1)/2) O<sub>2</sub> → <i>n</i>CO<sub>2</sub> + (<i>n</i> + 1)H<sub>2</sub>O',
        legend: ['<i>n</i> = number of carbon atoms'],
        note: null,
      },
      {
        t: 'def',
        term: 'Alkyl group',
        html: 'an alkane minus one hydrogen, formula C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub> (the “-ane” suffix becomes “-yl”, e.g. methane → methyl, –CH<sub>3</sub>).',
      },
      {
        t: 'def',
        term: 'Degree of carbon atoms',
        html: 'a carbon bonded to one other carbon is <b>primary (1°)</b>, to two is <b>secondary (2°)</b>, to three is <b>tertiary (3°)</b>, to four is <b>quaternary (4°)</b>. Terminal carbons are always 1°.',
      },
      {
        t: 'p',
        html: '<b>Halogenation reactivity</b> of the halogen: F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>. <b>Reactivity of the hydrogen</b> being replaced: 3° > 2° > 1°.',
      },
      {
        t: 'def',
        term: 'Torsional strain',
        html: 'the repulsive interaction between bonding electron clouds on adjacent carbons as they are brought close by rotation; it is the energy that distinguishes one conformation from another.',
      },
      {
        t: 'def',
        term: 'Dihedral (torsional) angle',
        html: 'the angle of rotation about the C–C bond that measures how far the front-carbon bonds are turned relative to the back-carbon bonds.',
      },
      {
        t: 'p',
        html: 'The ethane staggered–eclipsed energy difference is about 12.5 kJ mol<sup>−1</sup>.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: 'This topic carries two procedural backbones every student must reproduce on demand: the <b>free-radical substitution mechanism</b> and the <b>logic of conformational analysis</b>. We also lay out the procedural ladder for preparing alkanes.',
      },
      {
        t: 'p',
        html: '<b>3.1 Preparing an alkane — the four reliable routes</b><br><b>(a) From unsaturated hydrocarbons (hydrogenation).</b> Pass an alkene or alkyne over finely divided platinum, palladium, or nickel with dihydrogen. The metal surface adsorbs H<sub>2</sub> and activates the H–H bond so it can add across the multiple bond.<br>CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub> →<sup>Pt/Pd/Ni</sup> CH<sub>3</sub>–CH<sub>3</sub><br><b>Why a catalyst?</b> Without the metal surface, the H–H bond is too strong to break at moderate temperature; Pt and Pd work at room temperature, nickel needs more heat and pressure.',
      },
      {
        t: 'p',
        html: '<b>(b) From alkyl halides — reduction.</b> Treat an alkyl halide (not the fluoride) with zinc and dilute hydrochloric acid. The nascent hydrogen replaces the halogen.<br>R–X + 2[H] →<sup>Zn, dil. HCl</sup> R–H + HX',
      },
      {
        t: 'p',
        html: '<b>(c) From alkyl halides — Wurtz reaction.</b> Two alkyl halide molecules are coupled by sodium in dry ether. <b>Two points control this reaction:</b> it joins <b>two</b> alkyl groups, so it builds alkanes with <b>an even-doubled carbon skeleton</b>, and using <b>two different</b> halides gives a messy mixture of three products, which is why Wurtz is only clean for <b>symmetrical</b> alkanes.<br>2CH<sub>3</sub>Br + 2Na →<sup>dry ether</sup> CH<sub>3</sub>–CH<sub>3</sub> + 2NaBr',
      },
      {
        t: 'p',
        html: '<b>(d) From carboxylic acids.</b> Two sub-routes: <b>decarboxylation</b> heats the sodium salt with soda lime (NaOH + CaO) and strips one carbon as CO<sub>2</sub>, giving an alkane with <b>one fewer</b> carbon; <b>Kolbe’s electrolytic method</b> electrolyses an aqueous carboxylate and couples two alkyl fragments at the anode, giving an alkane with an <b>even</b> number of carbons.<br>CH<sub>3</sub>COONa + NaOH →<sup>CaO, Δ</sup> CH<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub>',
      },
      {
        t: 'p',
        html: '<b>3.2 Free-radical halogenation of methane — the three-step chain</b><br>The substitution of a hydrogen by a halogen proceeds by a <b>free-radical chain mechanism</b> in sunlight or UV. Reproduce all three steps:',
      },
      {
        t: 'p',
        html: '<b>(i) Initiation</b> — light or heat splits the chlorine molecule <b>homolytically</b> (each atom keeps one electron), because the Cl–Cl bond is weaker than C–C or C–H.<br>Cl–Cl →<sup><i>hν</i></sup> Cl<sup>•</sup> + Cl<sup>•</sup>',
      },
      {
        t: 'p',
        html: '<b>(ii) Propagation</b> — the heart of the chain. A chlorine radical abstracts a hydrogen from methane; the new methyl radical then attacks another chlorine molecule, regenerating a chlorine radical so the cycle repeats.<br>Cl<sup>•</sup> + CH<sub>4</sub> → <sup>•</sup>CH<sub>3</sub> + HCl<br><sup>•</sup>CH<sub>3</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + Cl<sup>•</sup>',
      },
      {
        t: 'p',
        html: '<b>(iii) Termination</b> — two radicals combine and the chain dies. This is also where the by-product <b>ethane</b> comes from (two methyl radicals meeting).<br>Cl<sup>•</sup> + Cl<sup>•</sup> → Cl<sub>2</sub><br><sup>•</sup>CH<sub>3</sub> + <sup>•</sup>CH<sub>3</sub> → C<sub>2</sub>H<sub>6</sub><br><sup>•</sup>CH<sub>3</sub> + Cl<sup>•</sup> → CH<sub>3</sub>Cl',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning behind selectivity:</b> a 3° C–H bond breaks most easily because the resulting 3° radical is most stabilised (by hyperconjugation), which is why the order of replacement is 3° > 2° > 1°.',
      },
      {
        t: 'p',
        html: '<b>3.3 The logic of conformational analysis (ethane)</b><br>Hold one carbon of ethane still and rotate the other about the C–C axis. The hydrogens sweep through an infinite set of arrangements — <b>conformations</b> (conformers/rotamers). Two extremes matter:<br>• <b>Eclipsed</b> — front and back C–H bonds line up (dihedral angle 0°). Electron clouds are closest, repulsion and <b>torsional strain</b> are maximum, energy is highest.<br>• <b>Staggered</b> — back hydrogens bisect the gaps between front hydrogens (dihedral angle 60°). Electron clouds are farthest apart, torsional strain is minimum, energy is lowest and stability is greatest.',
      },
      {
        t: 'p',
        html: 'The energy gap between them is only about 12.5 kJ mol<sup>−1</sup> — small enough that ordinary thermal collisions push the molecule over the barrier continuously, so rotation is almost free and the individual conformers <b>cannot be isolated</b>. The molecule simply spends most of its time near the staggered shape.',
      },
      { t: 'fig', id: 'c11-09-fig-9.1' },
      { t: 'fig', id: 'c11-09-fig-9.2' },
      {
        t: 'p',
        html: '<b>3.4 Physical properties at a glance</b><br>Alkanes are essentially <b>non-polar</b>: carbon and hydrogen differ little in electronegativity, so the C–C and C–H bonds carry almost no charge separation, and the molecules are held together only by weak <b>van der Waals (dispersion) forces</b>. The consequences follow directly. The first four members (C<sub>1</sub>–C<sub>4</sub>) are gases, C<sub>5</sub>–C<sub>17</sub> are liquids, and those with eighteen or more carbons are solids at room temperature, because dispersion forces grow with molecular surface area. Boiling point therefore <b>rises steadily with chain length</b>, but <b>falls with branching</b>: a branched isomer is more spherical, has a smaller contact surface, and so its molecules separate at a lower temperature. Being non-polar, alkanes are practically insoluble in water (the “like dissolves like” rule) but dissolve readily in non-polar solvents — which is exactly why petrol, a mixture of higher alkanes, lifts greasy stains.',
      },
      {
        t: 'p',
        html: '<b>3.5 The rest of the reaction map</b><br>Beyond substitution, five reaction types complete the alkane picture:',
      },
      {
        t: 'p',
        html: '<b>Combustion.</b> Alkanes burn completely in excess air to CO<sub>2</sub> and water with a large release of heat, which is why they are our dominant fuels:<br>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l); Δ<sub>c</sub><i>H</i> = −890 kJ mol<sup>−1</sup><br>With an insufficient oxygen supply, incomplete combustion gives carbon black (used in ink and printer toner) or carbon monoxide.',
      },
      {
        t: 'p',
        html: '<b>Controlled oxidation.</b> Under a regulated oxygen supply with the right catalyst, alkanes can be stopped partway to useful products: methane over copper at 523 K and high pressure gives methanol, while over molybdenum oxide it gives methanal. Alkanes bearing a tertiary hydrogen are oxidised by KMnO<sub>4</sub> to the corresponding tertiary alcohol.',
      },
      {
        t: 'p',
        html: '<b>Isomerisation.</b> Heating a straight-chain alkane with anhydrous aluminium chloride and hydrogen chloride converts it into its branched-chain isomers — the industrial trick for raising the octane rating of fuel.',
      },
      {
        t: 'p',
        html: '<b>Aromatization (reforming).</b> An alkane with six or more carbons, heated to about 773 K under pressure over oxides of vanadium, molybdenum, or chromium on alumina, is dehydrogenated and cyclised to benzene and its homologues — for example, n-hexane → benzene.',
      },
      {
        t: 'p',
        html: '<b>Reaction with steam and pyrolysis.</b> Methane reacts with steam over a nickel catalyst at 1273 K to give carbon monoxide and dihydrogen (an industrial route to H<sub>2</sub>). And on strong heating in the absence of air, higher alkanes undergo <b>pyrolysis (cracking)</b> — a free-radical breakdown into smaller alkanes, alkenes, and hydrogen.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the volume of carbon dioxide measured at STP liberated on the complete combustion of 2.2 g of propane. (Molar volume at STP = 22.4 L mol<sup>−1</sup>; molar mass of propane = 44 g mol<sup>−1</sup>.)',
        steps: [
          '<b>Given:</b> mass of propane = 2.2 g.',
          '<b>Step 1 — moles of propane:</b> 2.2/44 = 0.05 mol.',
          '<b>Step 2 — balanced equation:</b><br>C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O',
          '<b>Step 3 — mole ratio:</b> 1 mol propane gives 3 mol CO<sub>2</sub>, so 0.05 mol gives 0.05 × 3 = 0.15 mol CO<sub>2</sub>.',
          '<b>Step 4 — volume at STP:</b> 0.15 × 22.4 =',
        ],
        ans: '3.36 L of CO<sub>2</sub> at STP (3.4 L to the two significant figures of 2.2 g).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'How many distinct monochloro structural products (ignoring stereoisomers) are formed when <b>2-methylbutane</b> undergoes free-radical chlorination?',
        steps: [
          '<b>Speed approach.</b> Don’t draw every product — just count the distinct types of hydrogen, because each type gives one monochloro product. Number the skeleton:<br><sup>1</sup>CH<sub>3</sub>–<sup>2</sup>CH–<sup>3</sup>CH<sub>2</sub>–<sup>4</sup>CH<sub>3</sub>, with a CH<sub>3</sub> branch on C2',
          'Walk through the unique environments: (i) the two equivalent terminal methyls on C2 (one type), (ii) the lone H on C2 (tertiary), (iii) the C3 methylene H’s (secondary), (iv) the C4 methyl. That is <b>four</b> distinct hydrogen environments.',
          '<b>Trap:</b> students count every carbon as a separate position and forget that the two methyl groups attached to C2 are equivalent by symmetry — overcounting to 5.',
        ],
        ans: '<b>4</b> monochloro products.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: nomenclature + Wurtz + counting',
        q: 'A primary alkyl halide A (molecular formula C<sub>4</sub>H<sub>9</sub>Br, the branched isomer commonly called isobutyl bromide) is treated with sodium in dry ether to give hydrocarbon B. (i) Name A by IUPAC rules, (ii) give the structure and IUPAC name of B, and (iii) state how many monochloro products B can form.',
        steps: [
          '<b>(i)</b> The branched primary C<sub>4</sub>H<sub>9</sub>Br is (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–Br; its IUPAC name is <b>1-bromo-2-methylpropane</b>.',
          '<b>(ii)</b> Wurtz coupling joins two such alkyl groups through their CH<sub>2</sub> ends:<br>2 (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–Br + 2Na →<sup>dry ether</sup> (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub> + 2NaBr<br>Counting the six-carbon chain with methyls on C2 and C5, B is <b>2,5-dimethylhexane</b>.',
          '<b>(iii)</b> Distinct hydrogen environments in 2,5-dimethylhexane (a highly symmetric molecule): the four equivalent terminal/branch methyls, the two equivalent C2/C5 tertiary H’s, and the two equivalent C3/C4 methylene H’s — <b>three</b> types, giving <b>3</b> monochloro products.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '2,2,3,3-Tetramethylbutane, (CH<sub>3</sub>)<sub>3</sub>C–C(CH<sub>3</sub>)<sub>3</sub>, is a solid at room temperature with an anomalously high melting point. (i) Account for the high melting point. (ii) Predict the product(s) of its monochlorination and explain why only one is possible. (iii) Comment on whether rotation about the central C–C bond gives rise to distinguishable conformers of different stability.',
        steps: [
          '<b>(i)</b> The molecule is exceptionally <b>compact and symmetrical</b> — it approaches a sphere. Highly symmetrical molecules pack efficiently into a crystal lattice, so the lattice is held together strongly and a relatively high temperature is needed to melt it. (This is the same packing argument that makes neopentane melt far higher than n-pentane, taken to an extreme.)',
          '<b>(ii)</b> Every hydrogen in the molecule belongs to a CH<sub>3</sub> group, and all 18 methyl hydrogens are <b>equivalent by symmetry</b> — there are no secondary or tertiary C–H bonds at all (the only C–H bonds are on six equivalent methyls). Free-radical chlorination therefore can give <b>only one</b> monochloro product, (CH<sub>3</sub>)<sub>3</sub>C–C(CH<sub>3</sub>)<sub>2</sub>CH<sub>2</sub>Cl (1-chloro-2,2,3,3-tetramethylbutane). The usual 3° > 2° > 1° selectivity is irrelevant because only 1° hydrogens exist.',
          '<b>(iii)</b> Rotation about the central C–C bond turns one –C(CH<sub>3</sub>)<sub>3</sub> group against the other. Because each end carries three identical methyl groups arranged with three-fold symmetry, the energy profile is ethane-like: staggered and eclipsed positions alternate every 60°, and all three staggered positions are identical; the rotamers interconvert over a small barrier and <b>cannot be isolated</b>. So the molecule shows conformations in principle but no separable conformational isomers — consistent with the general rule for acyclic alkanes.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the chemical equation and name the reaction when sodium butanoate is heated with soda lime. Identify the alkane formed.',
            a: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COONa + NaOH →<sup>CaO, Δ</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub> + Na<sub>2</sub>CO<sub>3</sub>; decarboxylation; alkane = <b>propane</b>.',
          },
          {
            q: '[NEET] Arrange F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> in increasing order of their reactivity with alkanes, and state which halogenation is “too slow and reversible.”',
            a: 'I<sub>2</sub> < Br<sub>2</sub> < Cl<sub>2</sub> < F<sub>2</sub>; <b>iodination</b> is slow and reversible.',
          },
          {
            q: '[JEE Main] An alkane C<sub>5</sub>H<sub>12</sub> gives <b>only one</b> monochloro product on chlorination. Identify and name the alkane, and explain the result in one line.',
            a: '<b>2,2-dimethylpropane (neopentane)</b>; all twelve hydrogens are equivalent (only one type of 1° H).',
          },
          {
            q: '[JEE Main] Starting from a suitable carboxylic acid, write equations to prepare ethane by (a) Kolbe’s electrolytic method and (b) decarboxylation, and explain why the two routes need acids of different chain length.',
            a: '(a) Kolbe needs <b>sodium acetate</b> (electrolysis couples two CH<sub>3</sub> fragments → ethane); (b) decarboxylation needs <b>sodium propanoate</b> (loses one C as CO<sub>2</sub> → ethane); Kolbe doubles the alkyl skeleton while decarboxylation shortens it by one carbon.<br>(a) 2CH<sub>3</sub>COONa + 2H<sub>2</sub>O →<sup>electrolysis</sup> CH<sub>3</sub>–CH<sub>3</sub> + 2CO<sub>2</sub> + H<sub>2</sub> + 2NaOH (from acetic acid, as its sodium salt); (b) CH<sub>3</sub>CH<sub>2</sub>COONa + NaOH →<sup>CaO, Δ</sup> CH<sub>3</sub>–CH<sub>3</sub> + Na<sub>2</sub>CO<sub>3</sub> (from propanoic acid, as its sodium salt).',
          },
          {
            q: '[JEE Advanced] For n-butane, the anti conformation is the global energy minimum and the gauche lies about 3.8 kJ mol<sup>−1</sup> higher. Explain why gauche is higher in energy despite both being staggered, and predict which conformation dominates the population at room temperature.',
            a: 'In gauche the two methyl groups are close enough for repulsive <b>steric strain</b> even though no bonds are eclipsed; <b>anti</b> dominates at room temperature because it is lowest in energy.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During the chlorination of methane, ethane is detected as a minor by-product. The step responsible is:',
        opts: [
          {
            label: 'initiation',
            nudge: '<b>(a)</b> initiation only produces chlorine radicals from Cl<sub>2</sub> — no C–C bond formed; a student who memorises “initiation = start of reaction” wrongly links it to forming the new product.',
          },
          {
            label: 'a propagation step',
            nudge: '<b>(b)</b> propagation steps regenerate radicals and give CH<sub>3</sub>Cl/HCl, not ethane.',
          },
          { label: 'a termination step', nudge: null },
          {
            label: 'photochemical excitation of methane',
            nudge: '<b>(d)</b> methane is not photo-excited here; the light splits Cl<sub>2</sub>, a common conceptual slip.',
          },
        ],
        correct: 2,
        solution: 'Ethane forms when two methyl radicals combine, <sup>•</sup>CH<sub>3</sub> + <sup>•</sup>CH<sub>3</sub> → C<sub>2</sub>H<sub>6</sub>, which is a chain-<b>terminating</b> step.',
      },
      {
        t: 'mcq',
        q: 'Which alkane is obtained as the <b>only</b> product when a single primary alkyl halide undergoes the Wurtz reaction?',
        opts: [
          {
            label: 'An alkane with an odd number of carbons',
            nudge: '<b>(a)</b> coupling two equal fragments always gives an <b>even</b> total — odd is impossible from a single halide.',
          },
          { label: 'An alkane with double the carbons of the halide’s alkyl group', nudge: null },
          {
            label: 'A mixture of three alkanes',
            nudge: '<b>(c)</b> three products arise only when <b>two different</b> halides are used.',
          },
          {
            label: 'The same alkane as reduction with Zn/HCl',
            nudge: '<b>(d)</b> Zn/HCl reduction merely replaces X with H, giving the alkane with the <b>same</b> carbon count, not double.',
          },
        ],
        correct: 1,
        solution: 'Wurtz couples two identical alkyl groups, doubling the carbon count of the alkyl fragment.',
      },
      {
        t: 'mcq',
        q: 'The order of ease of replacement of hydrogen in free-radical halogenation is:',
        opts: [
          {
            label: '1° > 2° > 3°',
            nudge: '<b>(a)</b> reverses the true order — a trap for students who confuse radical stability with bond strength direction.',
          },
          { label: '2° > 1° > 3°', nudge: '<b>(b)</b> has no physical basis.' },
          { label: '3° > 2° > 1°', nudge: null },
          { label: 'all equally easy', nudge: '<b>(d)</b> ignores that radical stability depends on substitution.' },
        ],
        correct: 2,
        solution: 'A tertiary C–H breaks most readily because the tertiary radical formed is the most stabilised.',
      },
      {
        t: 'mcq',
        q: 'Which statement about the staggered conformation of ethane is <b>correct</b>?',
        opts: [
          {
            label: 'It has the maximum torsional strain',
            nudge: '<b>(a)</b> describes the <b>eclipsed</b> form (maximum strain) — a direct swap error.',
          },
          {
            label: 'Its dihedral angle is 0°',
            nudge: '<b>(b)</b> the 0° dihedral angle is the <b>eclipsed</b> form; staggered is 60°.',
          },
          { label: 'It is the conformation of lowest potential energy', nudge: null },
          {
            label: 'It can be isolated at room temperature',
            nudge: '<b>(d)</b> the energy barrier (∼ 12.5 kJ mol<sup>−1</sup>) is too small to prevent rotation, so conformers cannot be isolated.',
          },
        ],
        correct: 2,
        solution: 'Staggered ethane has electron clouds farthest apart, minimum torsional strain, hence lowest energy and maximum stability.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Miscounting monochloro products.</b> Students list every CH<sub>3</sub>/CH<sub>2</sub> position separately and overcount. <b>Pro-Tip:</b> count distinct hydrogen environments (use molecular symmetry first), because one environment = one product. Equivalent methyls collapse to a single type.',
          '<b>Swapping eclipsed and staggered.</b> Many write “eclipsed is most stable.” <b>Pro-Tip:</b> remember <b>“staggered = spread out = stable”</b> (three S’s). Eclipsed = 0° = clouds overlapping = maximum torsional strain.',
          '<b>Using Wurtz for unsymmetrical alkanes.</b> Coupling two different halides gives three products, not one. <b>Pro-Tip:</b> in an exam, only propose Wurtz when the target alkane is symmetrical and even-carbon; otherwise flag the mixture.',
          '<b>Confusing the two reactivity orders.</b> The halogen order (F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>) and the hydrogen order (3° > 2° > 1°) are different things. <b>Pro-Tip:</b> halogens follow <b>electronegativity down the group</b>; hydrogens follow <b>radical stability</b>. Tag which “reactivity” the question means before answering.',
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Family',
            note: 'saturated, acyclic, single bonds only; C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>; sp<sup>3</sup> tetrahedral, 109.5°; “paraffins” = little affinity.',
          },
          {
            f: 'Make them (4 routes)',
            note: 'hydrogenation (alkene/alkyne + H<sub>2</sub>/Pt,Pd,Ni); reduction (R–X + Zn/dil.HCl); <b>Wurtz</b> (2R–X + 2Na/dry ether → even-carbon, symmetric); from acids — <b>decarboxylation</b> (soda lime, <b>one C less</b>) and <b>Kolbe electrolysis</b> (even C).',
          },
          {
            f: 'Break them',
            note: 'halogenation (free-radical chain: <b>initiation</b> → <b>propagation</b> → <b>termination</b>); combustion → CO<sub>2</sub> + H<sub>2</sub>O; controlled oxidation; isomerisation (anhyd. AlCl<sub>3</sub>/HCl); aromatization; reaction with steam (CH<sub>4</sub> + H<sub>2</sub>O/Ni → CO + 3H<sub>2</sub>).',
          },
          { f: 'Two orders', note: 'halogen F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>; hydrogen 3° > 2° > 1°.' },
          {
            f: 'Ethane conformers',
            note: '<b>staggered</b> (60°, low energy, stable) vs <b>eclipsed</b> (0°, max torsional strain); gap ≈ 12.5 kJ mol<sup>−1</sup>; rotation almost free, conformers <b>not isolable</b>.',
          },
        ],
        aids: [
          '“Wurtz Welds, Decarboxylation Drops one” — Wurtz doubles, decarboxylation subtracts a carbon.',
          '“Staggered = Spread = Stable.”',
        ],
      },
    ],
  },
];
