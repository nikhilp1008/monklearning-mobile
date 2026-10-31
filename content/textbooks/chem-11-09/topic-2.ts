import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9 · Hydrocarbons — Topic 02 Alkenes (book pp. 412–420).
 * Word for word from the Drona Class 11 Chemistry Master Reference.
 * Figures 9.3 (p. 414), 9.4 and 9.5 (p. 417) are placed beside the text they illustrate.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 412–420 ─────────────────────────
  {
    n: '02',
    title: 'Alkenes',
    kalam: 'Alkenes are the workhorse of organic problem-solving.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Alkenes are the workhorse of organic problem-solving. CBSE Boards favour a 2–3 mark question on Markovnikov/peroxide addition or ozonolysis structure-finding. NEET reliably asks one MCQ — cis–trans recognition, the bromine-water test, or HX reactivity order. JEE Main loves multi-step “identify the alkene from its ozonolysis products” puzzles, and JEE Advanced pushes into carbocation rearrangements and mechanism rigor.',
      },
      {
        t: 'p',
        html: 'If an alkane is a fully booked train with every seat taken, an <b>alkene</b> is the same train with one pair of adjacent seats deliberately left as a folding double-seat — a <b>carbon–carbon double bond</b> (C=C) — that springs open the moment a guest wants in. That double bond is the entire personality of the molecule. Alkenes are <b>unsaturated</b> hydrocarbons: removing the freedom of one bond to make the double bond costs two hydrogens, so the family formula drops to C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>. The old name, <b>olefins</b> (“oil-forming”), comes from the oily product ethene gives with chlorine.',
      },
      {
        t: 'p',
        html: 'What makes that double bond special? It is built from <b>two different kinds of glue</b>. One is a strong σ bond from head-on overlap of sp<sup>2</sup> orbitals — sturdy, like a bolt through the middle. The other is a weaker π bond from the sideways overlap of two unhybridised p orbitals — more like a rubber band stretched over the top and bottom. Because the π electrons sit outside the line joining the nuclei and are only loosely held, the double bond behaves like an exposed pile of cash in a crowded Sarojini Nagar market: anything hungry for electrons — an <b>electrophile</b> — is drawn straight to it. This single idea explains almost every reaction of alkenes: they add electrophiles across the double bond, converting the loosely-held π bond into two new, stronger σ bonds.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the double bond as a flat, rigid plank, not a swivelling rod. Unlike the single bond of ethane, which spins freely, the π bond <b>locks rotation</b> — to rotate, you would have to snap the rubber band. That rigidity has a beautiful consequence: if each end-carbon carries two different groups, those groups are frozen either on the same side (<b>cis</b>) or opposite sides (<b>trans</b>) of the plank. These are <b>geometrical isomers</b> — same connectivity, different fixed shapes in space. The cis form is usually slightly polar (its bond dipoles add up), while the symmetric trans form often has zero net dipole. This is why cis-but-2-ene has a dipole moment of about 0.33 D while trans-but-2-ene is essentially non-polar.',
      },
      { t: 'fig', id: 'c11-09-fig-9.4' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three guard-rails. First, geometrical isomerism appears <b>only</b> when each doubly-bonded carbon bears two different substituents; a carbon with two identical groups (as in CH<sub>2</sub>=CBr<sub>2</sub>) cannot show it. Second, the famous <b>Markovnikov rule</b> is for unsymmetrical alkenes reacting with unsymmetrical reagents — for a symmetric alkene like ethene, “which carbon gets what” is meaningless. Third, the <b>peroxide (Kharasch) effect</b> that reverses Markovnikov addition works <b>only with HBr</b>, not HCl or HI — a detail examiners exploit relentlessly. Keep these three conditions on a sticky note.',
      },

      { t: 'part', title: 'Key definitions, formulae and reactions' },
      {
        t: 'formula',
        kicker: 'General formula (acyclic alkene)',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>',
        legend: ['<i>n</i> = number of carbon atoms', 'one double bond'],
        note: 'First stable member is ethene, C<sub>2</sub>H<sub>4</sub>; “methene” (CH<sub>2</sub>) is too short-lived to isolate.',
      },
      {
        t: 'def',
        term: 'The double bond',
        html: 'one σ bond (bond enthalpy ≈ 397 kJ mol<sup>−1</sup>, sp<sup>2</sup>–sp<sup>2</sup> head-on) plus one weaker π bond (≈ 284 kJ mol<sup>−1</sup>, lateral 2p–2p). Total C=C enthalpy ≈ 681 kJ mol<sup>−1</sup>, against 348 kJ mol<sup>−1</sup> for the C–C single bond in ethane. Bond length C=C = 134 pm versus C–C = 154 pm.',
      },
      {
        t: 'def',
        term: 'cis isomer',
        html: 'identical groups on the <b>same</b> side of the double bond; usually <b>more polar</b>.',
      },
      {
        t: 'def',
        term: 'trans isomer',
        html: 'identical groups on <b>opposite</b> sides; usually <b>less polar / non-polar</b>, and (for solids) <b>higher melting point</b>.',
      },
      {
        t: 'def',
        term: 'Markovnikov rule',
        html: 'the <b>negative</b> part of an unsymmetrical reagent adds to the doubly-bonded carbon bearing the <b>fewer</b> hydrogens (because it routes through the more stable carbocation).',
      },
      {
        t: 'def',
        term: 'HX reactivity towards alkenes',
        html: 'HI > HBr > HCl (weaker H–X bond reacts faster).',
      },
      {
        t: 'def',
        term: 'Test for unsaturation',
        html: 'orange Br<sub>2</sub> in CCl<sub>4</sub> is <b>decolourised</b>; purple Baeyer’s reagent (cold dilute KMnO<sub>4</sub>) is <b>decolourised</b>.',
      },
      {
        t: 'p',
        html: 'The energy quantities here are in kJ mol<sup>−1</sup>.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>3.0 Structure, naming, and physical character</b>',
      },
      {
        t: 'p',
        html: '<b>The orbital picture.</b> Each doubly-bonded carbon is sp<sup>2</sup> hybridised: three sp<sup>2</sup> orbitals lie in a plane at 120° (forming the two C–H bonds and the C–C σ bond), while the leftover unhybridised 2p orbital stands perpendicular to that plane. The two perpendicular p orbitals overlap sideways to form the π bond. Because this lateral overlap is poorer than head-on overlap, the π bond (≈ 284 kJ mol<sup>−1</sup>) is weaker than the σ bond (≈ 397 kJ mol<sup>−1</sup>) — and it is precisely this weaker, exposed π cloud that the whole reactivity of alkenes hangs on.',
      },
      { t: 'fig', id: 'c11-09-fig-9.3' },
      {
        t: 'p',
        html: '<b>Naming procedure.</b> To name an alkene by IUPAC rules: (i) pick the <b>longest carbon chain that contains the double bond</b>; (ii) number the chain from the <b>end nearer the double bond</b> so the C=C gets the lowest locant; (iii) replace the “-ane” of the parent alkane with “<b>-ene</b>” and cite the position of the double bond. Thus CH<sub>3</sub>CH<sub>2</sub>CH=CH<sub>2</sub> is but-1-ene, and CH<sub>3</sub>CH=CHCH<sub>3</sub> is but-2-ene. When a chain carries <b>more than one</b> double bond, every double-bond position is cited and the suffix becomes “-diene”, “-triene”, and so on, with the parent name kept intact before the suffix — for example CH<sub>2</sub>=CH–CH=CH<sub>2</sub> is buta-1,3-diene and CH<sub>2</sub>=C(CH<sub>3</sub>)–CH=CH<sub>2</sub> (the monomer of natural rubber) is 2-methylbuta-1,3-diene. Such conjugated dienes, where double and single bonds alternate, are an important bridge to polymer chemistry (natural rubber is a polymer of 2-methylbuta-1,3-diene).',
      },
      {
        t: 'p',
        html: '<b>Physical properties.</b> Alkenes closely resemble alkanes physically, differing mainly in polarity and in showing geometrical isomerism. The first three members are gases, the next roughly fourteen are liquids, and higher members are solids. They are essentially insoluble in water but dissolve well in non-polar solvents such as benzene or petroleum ether. Boiling point rises steadily — about 20–30 K for every added –CH<sub>2</sub>– — and, as with alkanes, a straight-chain alkene boils higher than its branched isomer because branching lowers the surface area available for van der Waals contact.',
      },
      {
        t: 'p',
        html: '<b>3.1 Making an alkene — four routes (all are eliminations or partial reductions)</b>',
      },
      {
        t: 'p',
        html: '<b>(a) From alkynes — controlled reduction (stereochemistry matters).</b> Partial hydrogenation over <b>Lindlar’s catalyst</b> (palladised charcoal poisoned with sulphur or quinoline) stops at the alkene and delivers the <b>cis</b> isomer; reduction with <b>sodium in liquid ammonia</b> gives the <b>trans</b> isomer. The choice of reducing system sets the geometry — a favourite exam hook.<br>CH<sub>3</sub>–C≡C–CH<sub>3</sub> →<sup>Na / liq. NH₃</sup> trans-but-2-ene',
      },
      {
        t: 'p',
        html: '<b>(b) From alkyl halides — dehydrohalogenation.</b> Heating R–X with <b>alcoholic KOH</b> removes one molecule of HX. Since the hydrogen leaves from the <b>β-carbon</b> (the carbon next to the one holding the halogen), this is a <b>β-elimination</b>. Rate trends: for the halogen I > Br > Cl; for the alkyl group 3° > 2° > 1°.',
      },
      {
        t: 'p',
        html: '<b>(c) From vicinal dihalides — dehalogenation.</b> A dihalide with halogens on <b>adjacent</b> carbons loses ZnX<sub>2</sub> on treatment with zinc dust, regenerating the double bond.<br>CH<sub>2</sub>Br–CH<sub>2</sub>Br + Zn → CH<sub>2</sub>=CH<sub>2</sub> + ZnBr<sub>2</sub>',
      },
      {
        t: 'p',
        html: '<b>(d) From alcohols — acidic dehydration.</b> Heating an alcohol with concentrated H<sub>2</sub>SO<sub>4</sub> eliminates water: the protonated –OH leaves as water and a hydrogen is lost from the β-carbon, so this too is a β-elimination.',
      },
      {
        t: 'p',
        html: '<b>3.2 Electrophilic addition — the master reaction</b>',
      },
      {
        t: 'p',
        html: 'Alkenes are electron-rich, so reactions begin with an <b>electrophile attacking the π bond</b>. Reproduce these on demand:',
      },
      {
        t: 'p',
        html: '<b>Addition of dihydrogen:</b> C=C + H<sub>2</sub> →<sup>Ni/Pd/Pt</sup> alkane (the same hydrogenation met in Topic 01).',
      },
      {
        t: 'p',
        html: '<b>Addition of halogens:</b> bromine or chlorine adds to give a <b>vicinal dihalide</b>; iodine does not add under normal conditions. The decolourisation of Br<sub>2</sub>/CCl<sub>4</sub> is the classic <b>test for unsaturation</b> (mechanistically via a cyclic halonium ion).',
      },
      {
        t: 'p',
        html: '<b>Addition of hydrogen halides (Markovnikov):</b> for an unsymmetrical alkene, the reagent adds so the reaction passes through the <b>more stable carbocation</b>. With propene and HBr:<br>CH<sub>3</sub>–CH=CH<sub>2</sub> + HBr → CH<sub>3</sub>–CHBr–CH<sub>3</sub> (<b>2-bromopropane, major</b>)',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the proton adds first; it can give either a primary or a secondary carbocation, and the <b>secondary</b> is more stable, so the bromide caps that carbon — exactly the Markovnikov outcome. Spelling out the two steps makes the logic transparent: in step one the π electrons grab the proton, opening the double bond into a carbocation; the reaction always routes through whichever cation is more stable. In step two the bromide ion (Br<sup>−</sup>) attacks that carbocation. Because the secondary cation CH<sub>3</sub>–C<sup>+</sup>H–CH<sub>3</sub> is more stable than the primary CH<sub>3</sub>–CH<sub>2</sub>–C<sup>+</sup>H<sub>2</sub>, the major product is 2-bromopropane. This two-step, carbocation-controlled picture is the single most useful mental model for predicting alkene addition outcomes.',
      },
      {
        t: 'p',
        html: '<b>Peroxide (Kharasch) effect — anti-Markovnikov:</b> in the presence of organic peroxide, <b>HBr</b> adds to propene against Markovnikov, giving <b>1-bromopropane</b>. This runs by a <b>free-radical chain</b> (initiation–propagation–termination, the same framework as Topic 01 halogenation): the radical adds to give the <b>more stable secondary carbon radical</b>, placing Br on the terminal carbon. Crucially the effect is <b>HBr-only</b> — the H–Cl bond (∼ 431 kJ mol<sup>−1</sup>) is too strong for the peroxide radical to cleave, and the H–I bond (∼ 297 kJ mol<sup>−1</sup>) is so weak that iodine radicals simply recombine instead of adding.',
      },
      {
        t: 'p',
        html: '<b>Addition of sulphuric acid and water:</b> cold conc. H<sub>2</sub>SO<sub>4</sub> adds (Markovnikov) to give an alkyl hydrogen sulphate; water adds in the presence of a little H<sub>2</sub>SO<sub>4</sub> (Markovnikov) to give an <b>alcohol</b>.',
      },
      {
        t: 'p',
        html: '<b>3.3 Oxidation and ozonolysis — the structure-finding tools</b>',
      },
      {
        t: 'p',
        html: '<b>Baeyer’s test / glycol formation:</b> cold, dilute, alkaline KMnO<sub>4</sub> (<b>Baeyer’s reagent</b>) oxidises an alkene to a <b>vicinal glycol</b> (a diol with –OH on adjacent carbons), decolourising the purple solution — a second test for unsaturation. For example, ethene is converted to ethane-1,2-diol:<br>CH<sub>2</sub>=CH<sub>2</sub> →<sup>cold dil. KMnO₄</sup> CH<sub>2</sub>(OH)–CH<sub>2</sub>(OH)',
      },
      {
        t: 'p',
        html: 'Under more forcing conditions — hot <b>acidic</b> KMnO<sub>4</sub> or K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> — the double bond is not merely hydroxylated but <b>cleaved</b>, giving ketones and/or carboxylic acids depending on the substitution at each carbon. A doubly-bonded CH carbon ends up as a –COOH, while a carbon carrying two alkyl groups becomes a ketone. For instance, but-2-ene is cleaved to two molecules of ethanoic acid:<br>CH<sub>3</sub>CH=CHCH<sub>3</sub> →<sup>hot KMnO₄/H⁺</sup> 2 CH<sub>3</sub>COOH<br>This destructive oxidation, read backwards, is a second structure-finding handle alongside ozonolysis.',
      },
      {
        t: 'p',
        html: '<b>Ozonolysis:</b> ozone adds to the double bond to form an <b>ozonide</b>, which is then cleaved by Zn–H<sub>2</sub>O into two carbonyl fragments. Read the products backwards to locate the original double bond:<br>R<sub>2</sub>C=CR′<sub>2</sub> (alkene) →<sup>(i) O₃ (ii) Zn/H₂O</sup> R<sub>2</sub>C=O + O=CR′<sub>2</sub>',
      },
      {
        t: 'p',
        html: 'A carbon of the double bond that carried two alkyl groups gives a <b>ketone</b>; one carrying a hydrogen gives an <b>aldehyde</b>.',
      },
      { t: 'fig', id: 'c11-09-fig-9.5' },
      {
        t: 'p',
        html: '<b>Polymerisation:</b> many ethene molecules combine under heat, pressure, and a catalyst to give <b>polythene</b> — the same principle behind everyday polythene bags. The small repeating starting unit is called the <b>monomer</b> and the large product the <b>polymer</b>; because the monomers simply add to one another with no small molecule lost, this is an <b>addition polymerisation</b>, and it is the alkene double bond that supplies the reactivity for the chain to grow.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the structures and IUPAC names of the products formed when <b>but-1-ene</b> reacts with HBr (i) in the absence of peroxide and (ii) in the presence of peroxide. Name the rule governing each.',
        steps: [
          'But-1-ene is CH<sub>3</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub> — an unsymmetrical alkene.',
          '<b>(i) Without peroxide (Markovnikov rule):</b> the proton adds to the terminal CH<sub>2</sub> (more H’s), Br to C2 (fewer H’s), via the more stable secondary carbocation.<br>CH<sub>3</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub> + HBr → CH<sub>3</sub>–CH<sub>2</sub>–CHBr–CH<sub>3</sub><br>Product: <b>2-bromobutane</b>.',
          '<b>(ii) With peroxide (anti-Markovnikov / Kharasch effect):</b> Br adds to the terminal carbon.<br>CH<sub>3</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub> + HBr →<sup>peroxide</sup> CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>Br<br>Product: <b>1-bromobutane</b>.',
        ],
        ans: '(i) 2-bromobutane (Markovnikov); (ii) 1-bromobutane (peroxide effect).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following shows geometrical (cis–trans) isomerism: <b>(A) 2-methylbut-2-ene</b>, <b>(B) pent-2-ene</b>, <b>(C) 2-methylprop-1-ene</b>?',
        steps: [
          '<b>Speed approach.</b> Don’t draw anything — apply the one-line test: each carbon of the double bond must carry two different groups. Scan each double-bonded carbon:',
          '(A) 2-methylbut-2-ene, (CH<sub>3</sub>)<sub>2</sub>C=CH–CH<sub>3</sub>: the left carbon carries <b>two methyls (identical)</b> → fails.',
          '(B) pent-2-ene, CH<sub>3</sub>–CH=CH–CH<sub>2</sub>CH<sub>3</sub>: left carbon has H and CH<sub>3</sub> (different); right carbon has H and C<sub>2</sub>H<sub>5</sub> (different) → <b>passes</b>.',
          '(C) 2-methylprop-1-ene, (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub>: both carbons carry identical pairs → fails.',
          '<b>Trap:</b> students see “2-ene with a methyl branch” in (A) and assume it qualifies, forgetting to check that one carbon already has two identical groups.',
        ],
        ans: 'Only <b>(B) pent-2-ene</b>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: ozonolysis structure-finding + anti-Markovnikov',
        q: 'An alkene A (molecular formula C<sub>5</sub>H<sub>10</sub>) on reductive ozonolysis gives a mixture of <b>propanal</b> and <b>ethanal</b>. (i) Deduce the structure and IUPAC name of A. (ii) Write the product when A reacts with HBr in the presence of peroxide.',
        steps: [
          '<b>(i)</b> Reverse the ozonolysis: stitch the two carbonyl carbons back into a double bond. Propanal is CH<sub>3</sub>CH<sub>2</sub>CHO and ethanal is CH<sub>3</sub>CHO; joining the two carbonyl carbons gives<br>CH<sub>3</sub>CH<sub>2</sub>–CH=CH–CH<sub>3</sub><br>That is C<sub>5</sub>H<sub>10</sub> — A is <b>pent-2-ene</b>.',
          '<b>(ii)</b> Pent-2-ene is symmetrical in substitution pattern at the double bond (CH<sub>3</sub>CH<sub>2</sub> on one side, CH<sub>3</sub> on the other — both alkyl), so both Markovnikov and anti-Markovnikov would place Br on an internal carbon; with peroxide the radical route changes nothing: both possible secondary radicals are equally stable, so 2-bromopentane and 3-bromopentane form in nearly equal amounts, about 1:1.',
          'The key teaching point: peroxide reverses orientation only when there is a clear primary-vs-secondary choice, so for an internal alkene the regiochemical effect is muted.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'When <b>3-methylbut-1-ene</b>, (CH<sub>3</sub>)<sub>2</sub>CH–CH=CH<sub>2</sub>, is treated with HCl, the major product is <b>2-chloro-2-methylbutane</b>, not the simple Markovnikov product 2-chloro-3-methylbutane. Explain mechanistically and identify the driving force.',
        steps: [
          'Protonation of the terminal CH<sub>2</sub> gives, by Markovnikov, a <b>secondary</b> carbocation at C2:<br>(CH<sub>3</sub>)<sub>2</sub>CH–C<sup>+</sup>H–CH<sub>3</sub> (2°)',
          'But the adjacent carbon (C3) bears a hydrogen and is itself attached to two methyls. A <b>1,2-hydride shift</b> moves that hydrogen to C2, converting the secondary cation into a <b>tertiary</b> carbocation:<br>(CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–CH<sub>2</sub>–CH<sub>3</sub> (3°)',
          'The tertiary cation is markedly more stable (greater hyperconjugative and inductive stabilisation), so chloride caps <b>it</b>, giving <b>2-chloro-2-methylbutane</b> as the major product.',
          '<b>Driving force:</b> the rearrangement is favourable because it trades a less stable secondary carbocation for a more stable tertiary one. This is exactly why “the Markovnikov product” must be qualified to “the product via the most stable accessible carbocation” — a distinction JEE Advanced tests directly.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the equation and name the reaction when 2-bromobutane is heated with alcoholic KOH; identify the major alkene.',
            a: 'CH<sub>3</sub>CHBrCH<sub>2</sub>CH<sub>3</sub> + KOH →<sup>alcohol, Δ</sup> CH<sub>3</sub>CH=CHCH<sub>3</sub> + KBr + H<sub>2</sub>O; dehydrohalogenation (β-elimination); major alkene <b>but-2-ene</b> (more substituted).',
          },
          {
            q: '[NEET] Give the order of reactivity of HI, HBr, HCl towards propene, and state which reagent shows the peroxide effect.',
            a: 'HI > HBr > HCl; <b>HBr</b> shows the peroxide effect.',
          },
          {
            q: '[JEE Main] An alkene of formula C<sub>4</sub>H<sub>8</sub> gives only <b>ethanal</b> on ozonolysis. Identify and name the alkene, and explain why a single product forms.',
            a: '<b>But-2-ene</b> (CH<sub>3</sub>CH=CHCH<sub>3</sub>); the double bond is symmetric, so both fragments are identical (ethanal).',
          },
          {
            q: '[JEE Main] Convert but-2-yne into (i) cis-but-2-ene and (ii) trans-but-2-ene, naming the reagent/catalyst for each.',
            a: '(i) H<sub>2</sub> / <b>Lindlar’s catalyst</b> (Pd–C poisoned) → cis; (ii) <b>Na / liquid NH<sub>3</sub></b> → trans.',
          },
          {
            q: '[JEE Advanced] 2,3-Dimethylbut-1-ene is treated with HBr (no peroxide). Predict the major product and justify it using carbocation stability, mentioning any rearrangement.',
            a: 'Protonation gives a tertiary cation at C2 directly (H adds to the terminal CH<sub>2</sub>), so no rearrangement is needed; bromide caps it, giving <b>2-bromo-2,3-dimethylbutane</b> as major.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The reagent used as a confirmatory <b>test for unsaturation</b>, decolourised by an alkene, is:',
        opts: [
          {
            label: 'Fehling’s solution',
            nudge: '<b>(a)</b> Fehling’s tests aldehydes/reducing sugars, not C=C — a confusion with carbonyl tests.',
          },
          { label: 'bromine water / Br<sub>2</sub> in CCl<sub>4</sub>', nudge: null },
          { label: 'Tollens’ reagent', nudge: '<b>(c)</b> Tollens’ tests aldehydes.' },
          { label: 'neutral FeCl<sub>3</sub>', nudge: '<b>(d)</b> neutral FeCl<sub>3</sub> tests phenols.' },
        ],
        correct: 1,
        solution: 'An alkene adds bromine across the double bond, discharging the orange colour. Each of (a), (c) and (d) is a classic “wrong functional-group test” trap.',
      },
      {
        t: 'mcq',
        q: 'The major product of addition of HBr to propene <b>in the presence of peroxide</b> is:',
        opts: [
          {
            label: '2-bromopropane',
            nudge: '<b>(a)</b> is the <b>Markovnikov</b> product — formed without peroxide; a student who forgets the peroxide condition picks this.',
          },
          { label: '1-bromopropane', nudge: null },
          { label: '1,2-dibromopropane', nudge: '<b>(c)</b> needs Br<sub>2</sub>, not HBr.' },
          { label: 'propan-2-ol', nudge: '<b>(d)</b> needs water, not HBr.' },
        ],
        correct: 1,
        solution: 'Peroxide triggers a free-radical, anti-Markovnikov addition, placing Br on the terminal carbon.',
      },
      {
        t: 'mcq',
        q: 'Which catalyst converts an alkyne to the <b>cis</b> alkene?',
        opts: [
          {
            label: 'Na in liquid ammonia',
            nudge: '<b>(a)</b> gives the <b>trans</b> alkene — the direct stereochemical opposite, the most common slip.',
          },
          { label: 'Lindlar’s catalyst', nudge: null },
          { label: 'anhydrous AlCl<sub>3</sub>', nudge: '<b>(c)</b> is an isomerisation/Friedel–Crafts catalyst.' },
          { label: 'Zn dust', nudge: '<b>(d)</b> effects dehalogenation, not reduction of an alkyne.' },
        ],
        correct: 1,
        solution: 'Lindlar’s (poisoned Pd) delivers syn addition of H<sub>2</sub>, giving the cis alkene.',
      },
      {
        t: 'mcq',
        q: 'cis-But-2-ene has a higher dipole moment than trans-but-2-ene because:',
        opts: [
          {
            label: 'cis has a longer C=C bond',
            nudge: '<b>(a)</b> bond length is essentially the same — irrelevant to dipole.',
          },
          { label: 'in cis the two C–CH<sub>3</sub> bond dipoles add, while in trans they cancel', nudge: null },
          {
            label: 'trans is aromatic',
            nudge: '<b>(c)</b> neither is aromatic — a nonsense distractor that catches rote learners.',
          },
          {
            label: 'cis has more hydrogens',
            nudge: '<b>(d)</b> both have the same molecular formula and number of hydrogens.',
          },
        ],
        correct: 1,
        solution: 'In the cis form the two methyl groups lie on the same side, so their bond dipoles reinforce; in trans they point oppositely and cancel.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Claiming geometrical isomerism without checking substituents.</b> Students label any internal alkene cis/trans. <b>Pro-Tip:</b> apply the one-line gate — each doubly-bonded carbon must carry two different groups. If either carbon repeats a group, there is no cis–trans pair.',
          '<b>Applying the peroxide effect to HCl/HI. Pro-Tip:</b> the Kharasch (anti-Markovnikov) effect is <b>HBr-only</b>. Memory hook: “<b>Br</b> breaks the <b>R</b>ule” — only HBr reverses under peroxide; HCl is too strong, HI too weak.',
          '<b>Forgetting carbocation rearrangement.</b> The “Markovnikov product” is wrong whenever a hydride/methyl shift can give a more stable cation. <b>Pro-Tip:</b> after writing the first carbocation, always ask “can a 1,2-shift reach a 3° (or more stable) cation?” before placing the nucleophile.',
          '<b>Mis-assembling ozonolysis products. Pro-Tip:</b> to find the parent alkene, join the carbonyl carbons of the two fragments with a double bond (C=O + O=C → C=C). A ketone fragment means that carbon had two alkyl groups; an aldehyde means it had a hydrogen.',
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Family', note: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>, one C=C; “olefins”; first stable member ethene.' },
          {
            f: 'Bond',
            note: 'σ (397) + weak π (284) → C=C ≈ 681 kJ mol<sup>−1</sup>; sp<sup>2</sup>, length 134 pm; π electrons loosely held ⇒ <b>electrophilic addition</b>.',
          },
          {
            f: 'Geometry',
            note: '<b>cis</b> = same side, more polar; <b>trans</b> = opposite, less polar (non-polar when both ends match, as in trans-but-2-ene) / higher m.p.; needs two different groups on each C.',
          },
          {
            f: 'Make them (eliminations / partial reduction)',
            note: 'alkyne + H<sub>2</sub>/<b>Lindlar</b> → cis, alkyne + <b>Na/liq.NH<sub>3</sub></b> → trans; R–X + alc. KOH (dehydrohalogenation); vic-dihalide + Zn (dehalogenation); alcohol + conc. H<sub>2</sub>SO<sub>4</sub> (dehydration).',
          },
          {
            f: 'Break the double bond (addition)',
            note: 'H<sub>2</sub>/Ni; X<sub>2</sub> → vic-dihalide (<b>Br<sub>2</sub> test</b>); HX <b>Markovnikov</b> (HI>HBr>HCl); <b>HBr + peroxide → anti-Markovnikov</b>; H<sub>2</sub>SO<sub>4</sub>; H<sub>2</sub>O/H<sup>+</sup> → alcohol; <b>Baeyer</b> (cold dil. KMnO<sub>4</sub>) → glycol; hot KMnO<sub>4</sub>/K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> → acids/ketones; <b>ozonolysis</b> → carbonyls (locates C=C); polymerisation → polythene.',
          },
        ],
        aids: [
          '“cis = Same Side, Still polar”',
          '“Br Breaks the Rule” (peroxide effect = HBr only)',
          '“Markovnikov: the rich get richer” (H adds to the carbon already richer in H).',
        ],
      },
    ],
  },
];
