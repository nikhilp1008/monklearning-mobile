import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 01, Nomenclature, Preparation & Physical Properties: pp. 253–263
 * of the Class 12 Chemistry Master Reference, word for word, split at its Sections
 * 1 to 8. The contents lines at the top of p. 253 are not copied. These pages hold
 * no figure and no drawn structure. Hybrid labels are upright (sp<sup>3</sup>), as
 * in Chemistry 11 Ch 9; o-, m-, p- and gem, vic are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 253–263 ─────────────────────────
  {
    n: '01',
    title: 'Nomenclature, Preparation & Physical Properties',
    kalam: 'Treat classification as a prediction tool, not a vocabulary list.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation block of the chapter and a guaranteed scorer. CBSE Boards reliably ask a 1–2 mark IUPAC-naming or named-reaction question (Finkelstein, Swarts, Sandmeyer). NEET leans on a single physical-property comparison (boiling point or density order) or “name the reaction.” JEE Main almost always carries one preparation/reagent-sequence MCQ, and JEE Advanced builds multi-step synthesis problems where choosing the right halogenation route is half the battle.',
      },
      {
        t: 'p',
        html: 'Imagine a hydrocarbon as a perfectly ordinary local passenger sitting quietly in a Mumbai local train — non-polar, unbothered, chemically lazy. Now swap one of its hydrogen “fingers” for a halogen — a chlorine, bromine, or iodine. That single swap is like handing the passenger a heavy, electron-greedy suitcase. Suddenly the whole molecule leans, develops a charge imbalance, and becomes reactive. That suitcase is the <b>carbon–halogen (C–X) bond</b>, and almost everything in this chapter flows from understanding it.',
      },
      {
        t: 'p',
        html: 'Why does the swap matter so much? Because halogens are more electronegative than carbon. The shared electrons of the C–X bond are pulled toward the halogen, leaving carbon with a partial positive charge (C<sup><i>δ</i>+</sup>) and the halogen partial negative (X<sup><i>δ</i>−</sup>). This is a <b>polar covalent bond</b>. That electron-poor carbon is a sitting duck for any species that wants to donate electrons (a nucleophile), and the halogen — being a good “leaving group” — is willing to walk away. Hold this picture: electrophilic carbon, departing halogen. It explains the properties and most of the reactions to come.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a cricket team where one fielder (carbon) is gripping the ball (electrons) loosely while a much stronger teammate (halogen) keeps tugging it away. The ball is constantly half-out of the first fielder’s hand. Anyone running past can snatch it. That perpetual “half-loose grip” is the polarity that makes haloalkanes useful synthetic intermediates — they are the launch pad from which alcohols, amines, nitriles, and Grignard reagents are built.',
      },
      {
        t: 'p',
        html: 'But not every C–X bond behaves identically, and this is where <b>classification</b> earns its keep. The personality of the bond depends on what kind of carbon holds the halogen:<br>• <b>Alkyl halides (haloalkanes):</b> halogen on an sp<sup>3</sup> carbon. The “standard” reactive case.<br>• <b>Allylic / benzylic halides:</b> halogen on an sp<sup>3</sup> carbon that sits next to a double bond or a benzene ring. Special, because the neighbour can stabilise charges later.<br>• <b>Vinylic / aryl halides:</b> halogen directly on an sp<sup>2</sup> carbon of a C=C or a benzene ring. These are the stubborn ones — their C–X bond is shorter, stronger, and far less willing to break.',
      },
      {
        t: 'p',
        html: 'We also count how many halogens and where they sit: a <b>gem-dihalide</b> carries both halogens on the same carbon (ethylidene type), while a <b>vic-dihalide</b> spreads them over adjacent carbons (ethylene type). This bookkeeping is not pedantry — exam questions love to test whether you can spot a vic- versus gem- arrangement at a glance.',
      },
      {
        t: 'p',
        html: 'Why bother with all these labels? Because the label predicts behaviour. An sp<sup>2</sup> carbon holds its electrons closer to the nucleus than an sp<sup>3</sup> carbon, so it grips the halogen more tightly, and on top of that the halogen’s lone pair leaks into the adjacent π system — both effects shorten and stiffen the bond. That is the whole reason aryl and vinyl halides are the “stubborn” cousins. Allylic and benzylic halides sit at the opposite extreme: their sp<sup>3</sup> C–X bond is ordinary, but the neighbouring double bond or ring can stabilise whatever charge forms when the halogen eventually leaves. So a single glance at the carbon — its hybridisation and its neighbours — tells you in advance whether the molecule will react eagerly or dig in its heels. Treat classification as a prediction tool, not a vocabulary list.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b> The “electrophilic carbon, departing halogen” intuition is reliable for sp<sup>3</sup> (alkyl) halides. It fails for aryl and vinylic halides, where resonance of the halogen’s lone pair into the π system gives the C–X bond partial double-bond character — it becomes too strong to break easily, so these compounds resist the simple substitution chemistry that defines haloalkanes. Keep this exception filed away; it is the single most-tested “trap” in the chapter.',
      },

      { t: 'part', title: 'Key definitions, classification and data' },
      {
        t: 'p',
        html: '<b>Definition.</b> Haloalkanes (alkyl halides) are formed by replacing one or more hydrogens of an aliphatic hydrocarbon with halogen atoms (C<sub>sp³</sub>–X). Haloarenes (aryl halides) have halogen bonded directly to an sp<sup>2</sup> carbon of an aromatic ring.',
      },
      {
        t: 'p',
        html: '<b>Classification at a glance.</b><br>• By number of halogens: <b>mono-, di- (gem / vic), poly-</b> halogen compounds.<br>• By carbon type bearing X: <b>primary (1°), secondary (2°), tertiary (3°)</b> for haloalkanes.<br>• By hybridisation of C–X carbon: sp<sup>3</sup> (alkyl, allylic, benzylic) vs sp<sup>2</sup> (vinylic, aryl).',
      },
      {
        t: 'p',
        html: '<b>Nomenclature essentials.</b><br>• <b>Common names (haloalkanes):</b> alkyl group + “halide” → e.g. the common name pattern “ethyl bromide.”<br>• <b>IUPAC names (haloalkanes):</b> treated as <b>halo-substituted hydrocarbons</b>; the prefix is fluoro / chloro / bromo / iodo, listed alphabetically with lowest locants.<br>• <b>Benzene derivatives:</b> for <b>mono</b>-substituted rings, common and IUPAC names coincide (e.g. “chlorobenzene”). For <b>di</b>-substituted rings, common names use o-, m-, p- while IUPAC uses numerals 1,2-; 1,3-; 1,4-.',
      },
      {
        t: 'formula',
        kicker: 'Bond data you must internalise',
        main: 'Bond length: C–F < C–Cl < C–Br < C–I<br>Bond enthalpy: C–F > C–Cl > C–Br > C–I',
        legend: ['C–X = carbon–halogen bond'],
        note: null,
      },
      {
        t: 'p',
        html: 'So C–I is the <b>longest and weakest</b> bond, hence iodides are the most reactive in substitution; C–F is shortest and strongest.',
      },
      {
        t: 'p',
        html: '<b>Dipole moments.</b> The C–X bond is polar. A subtle but heavily tested fact: the dipole moment of an aryl halide is lower than the corresponding alkyl halide — chlorobenzene (<i>μ</i> ≈ 1.69 D) versus chloromethane (<i>μ</i> ≈ 1.86 D) — because in the aryl halide the halogen lone pair is partly delocalised into the ring (shortening and strengthening the bond) and the carbon is the more electronegative sp<sup>2</sup> type.',
      },
      {
        t: 'p',
        html: '<b>Physical-property data and the reasoning behind it.</b><br>• <b>Physical state:</b> the lightest members (chloromethane, bromomethane, chloroethane, fluoromethane) are gases at room temperature; iodomethane and most others are liquids; the highest homologues are solids.<br>• <b>Boiling point:</b> rises down the halogen group for the same alkyl group (R–I > R–Br > R–Cl > R–F) because heavier, more polarisable halogens give stronger van der Waals forces; rises with chain length; falls with branching (a more spherical molecule has less surface contact). Haloalkanes boil higher than their parent hydrocarbon (extra dipole–dipole plus larger electron cloud) but usually lower than the corresponding alcohol, which can hydrogen-bond (a large iodide can overtake it: 1-iodopropane about 102 °C, propan-1-ol about 97 °C).<br>• <b>Melting point of haloarenes:</b> among o-, m-, p- dihalobenzenes the <b>para isomer melts highest</b> — its symmetry lets molecules pack tightly into the crystal lattice, so more energy is needed to break it.<br>• <b>Density:</b> increases with the mass and number of halogen atoms. The practical rule, and the line to write in an exam: among short-chain haloalkanes, <b>bromo, iodo and polyhalogen compounds are denser than water</b>; monochloro and monofluoro compounds are lighter. Outside that family the rule stops: a benzene ring also raises density, so chlorobenzene (about 1.11 g mL<sup>−1</sup>) and fluorobenzene (about 1.02 g mL<sup>−1</sup>) sink, and a very long-chain bromoalkane (about C<sub>16</sub>) comes down to about\u00a01.<br>• <b>Solubility:</b> haloalkanes are essentially insoluble in water — dissolving would require breaking water’s hydrogen-bond network, and the weak haloalkane–water interactions cannot pay that energy back — but they dissolve freely in organic solvents.<br>• <b>Detection:</b> the <b>Beilstein test</b> (a green-edged flame on a copper wire) suggests a halogen is present; it is a quick screen, not proof, since it misses fluorine and some nitrogen compounds also give the green.',
      },
      {
        t: 'formula',
        kicker: 'Named reactions (compact reference)',
        main: 'Finkelstein: R–X + NaI →<sup>dry acetone</sup> R–I + NaX ↓<br>Swarts: R–X + AgF (or Hg<sub>2</sub>F<sub>2</sub>, CoF<sub>2</sub>, SbF<sub>3</sub>) → R–F<br>Sandmeyer: ArN<sub>2</sub><sup>+</sup>X<sup>−</sup> →<sup>CuX/HX</sup> Ar–X + N<sub>2</sub>',
        legend: ['R = alkyl group', 'Ar = aryl group', 'X = halogen, Cl or Br', '↓ = precipitate'],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” here; instead, mastery is about a <b>naming algorithm</b> and a <b>route-selection logic</b>. Treat these as procedures.',
      },
      {
        t: 'proc',
        title: 'A. IUPAC naming algorithm (haloalkanes)',
        steps: [
          '<b>Find the longest chain</b> — this is the parent. If two chains tie for length, take the one with more substituents.',
          '<b>Number from the end that gives the substituents the lowest set of locants.</b> When halogens and alkyl groups compete, lowest locants go to the set considered together at first point of difference.',
          '<b>Name halogens as prefixes</b> (chloro, bromo…), arrange all substituents alphabetically, and assemble: locant-prefix-parent.',
          'For rings with two halogens, prefer numerals over o/m/p in IUPAC.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why this order?</b> The rules exist so that one molecule maps to exactly one name worldwide — the lowest-locant rule is simply a tie-break convention that removes ambiguity.',
      },
      {
        t: 'p',
        html: '<b>B. Preparing haloalkanes — choosing the route</b><br>The reason there are several methods is that each starts from a different available feedstock. Pick the route by what you are handed:<br>• <b>From an alcohol (most common in problems):</b> React R–OH with a halogenating agent. With HCl you need a catalyst (anhydrous ZnCl<sub>2</sub>) for 1°/2° alcohols, while 3° react readily. The ease of reaction with HX follows 3° > 2° > 1°, mirroring carbocation stability — the more stable the cation the alcohol can form, the faster the halide swaps in (primary alcohols, with no stable cation to form, react by S<sub>N</sub>2 instead, and more slowly). <b>Better reagents</b> are PCl<sub>3</sub>, PCl<sub>5</sub>, or — best of all — <b>thionyl chloride</b> SOCl<sub>2</sub>, because its by-products (SO<sub>2</sub>, HCl) are gases that escape, leaving a pure alkyl chloride. For bromides/iodides, use <b>red phosphorus + Br<sub>2</sub>/I<sub>2</sub></b> (generates PBr<sub>3</sub>/PI<sub>3</sub> in situ); never H<sub>2</sub>SO<sub>4</sub> + KI, since the acid oxidises the iodide.<br>• <b>From an alkane:</b> Free-radical halogenation with Cl<sub>2</sub> or Br<sub>2</sub> under UV/heat. <b>Reasoning and caution:</b> this gives a <b>mixture</b> of mono- and poly-substituted isomers because all C–H bonds compete, so it is poor for clean single products. Reactivity of halogens: F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>.<br>• <b>From an alkene:</b> Add HX (follows <b>Markovnikov’s rule</b>) for a monohalide, or add X<sub>2</sub> in CCl<sub>4</sub> to get a <b>vic-dihalide</b> (the disappearance of bromine’s reddish-brown colour is the classic unsaturation test).<br>• <b>Halogen exchange:</b> <b>Finkelstein</b> swaps Cl/Br for I using NaI in dry acetone — the trick is that the liberated NaCl/NaBr is insoluble in acetone and precipitates, so by Le Chatelier’s principle the equilibrium is pushed forward. <b>Swarts</b> installs fluorine using a metallic fluoride.<br>• <b>From a silver carboxylate (JEE extra — Hunsdiecker reaction):</b> the silver salt of a carboxylic acid reacts with bromine in CCl<sub>4</sub> to give an alkyl bromide with <b>one carbon fewer</b> than the acid (RCOOAg + Br<sub>2</sub> → R–Br + CO<sub>2</sub> + AgBr). The “loses one carbon” feature is the marker examiners exploit; yield falls 1° > 2° > 3°.',
      },
      {
        t: 'p',
        html: 'Aryl halides cannot be made by the simple alcohol route, so two pathways dominate:',
      },
      {
        t: 'proc',
        title: 'C. Preparing haloarenes — choosing the route',
        steps: [
          '<b>Electrophilic aromatic substitution (EAS):</b> arene + Cl<sub>2</sub>/Br<sub>2</sub> with a Lewis acid (Fe or FeX<sub>3</sub>) gives the aryl halide + HX. <b>Why iodine is awkward:</b> iodination is reversible, so an oxidising agent (HNO<sub>3</sub>, HIO<sub>4</sub>) is added to destroy the HI formed. Direct fluorination is too violent to be useful.',
          '<b>From amines via the diazonium salt (Sandmeyer & friends):</b> A primary aromatic amine is diazotised (NaNO<sub>2</sub>/HCl, 273–278 K) to ArN<sub>2</sub><sup>+</sup>. Then:<br>• CuCl/HCl or CuBr/HBr → Ar–Cl / Ar–Br (<b>Sandmeyer</b>)<br>• Cu powder/HX → same products, lower yield (<b>Gattermann</b>)<br>• KI (no copper needed) → Ar–I<br>• HBF<sub>4</sub> then heat → Ar–F (<b>Balz–Schiemann</b>)<br><b>Mechanistic note (JEE):</b> the Sandmeyer step proceeds through an <b>aryl radical</b> generated by Cu(I) reducing the diazonium ion; the radical then abstracts halogen, regenerating the copper catalyst.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Give the IUPAC name of (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CHBr–CH<sub>3</sub> and state whether the bromine-bearing carbon is 1°, 2°, or 3°.',
        steps: [
          '<b>Step 1 — longest chain:</b> five carbons → parent is pentane.',
          '<b>Step 2 — number for lowest locants:</b> numbering from the right places Br on C-2 and a methyl on C-4 {locants 2,4}; from the left gives {2,4} as well, so we break the tie alphabetically — bromo before methyl gets the lower number, so Br = C-2.',
          '<b>Step 3 — assemble:</b> 2-bromo-4-​methylpentane.',
          '<b>Step 4 — classify carbon:</b> the carbon bearing Br is attached to two other carbons → it is a <b>secondary (2°)</b> halide.',
        ],
        ans: '2-bromo-4-​methylpentane; the C–Br carbon is secondary.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange in increasing order of boiling point: 1-chlorobutane, 1-chloropropane, chlorobenzene, chloroethane.',
        steps: [
          '<b>The trap & the shortcut.</b> Students waste time recalling exact boiling points. Don’t. For the same halogen, boiling point tracks the size of the carbon skeleton (more carbons → larger van der Waals surface → higher b.p.), and the aromatic ring is the bulkiest, most polarisable framework here. So just order by “how big is the rest of the molecule.”',
          '(Mental elimination: any option putting chlorobenzene lowest is wrong on sight.) The same “bigger, heavier framework wins” logic clears a whole family of boiling-point comparison questions. It does not carry over to density: for one halogen, density falls as the chain grows (bromoethane about 1.46, 1-bromopropane about 1.35 g mL<sup>−1</sup>). Melting points depend on packing as well.',
        ],
        ans: 'chloroethane < 1-chloropropane < 1-chlorobutane < chlorobenzene.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Propene is treated with HBr in the <b>presence of organic peroxide</b>, and the product is then heated with NaI in dry acetone. Identify the final product and name both governing principles.',
        steps: [
          '<b>Step 1 — addition of HBr with peroxide:</b> the peroxide effect (anti-Markovnikov, Kharasch addition) adds Br to the terminal (less substituted) carbon, giving <b>1-bromopropane</b>, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br. (Without peroxide, Markovnikov would have given 2-bromopropane — this is the concept the question is probing.)',
          '<b>Step 2 — Finkelstein exchange:</b> NaI in dry acetone converts the bromide to the iodide:<br>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br + NaI →<sup>dry acetone</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>I + NaBr ↓',
        ],
        ans: '1-iodopropane; principles = <b>peroxide (anti-Markovnikov) effect</b> and the <b>Finkelstein reaction</b> (driven forward by NaBr precipitation).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'You are given aniline and asked to synthesise <b>1-bromo-4-​iodobenzene</b>. The catch: only the iodine may be introduced via diazonium chemistry, and the two halogens must end up para. Outline a route and justify the order.',
        steps: [
          'The strategic insight is that a diazonium group can only be installed where an –NH<sub>2</sub> sits, and we need two different halogens at the 1- and 4- positions. So we must place the first halogen by ordinary EAS at the para position relative to a nitrogen handle, then convert the remaining nitrogen handle to the second halogen.',
          '<b>Step 1 — protect and brominate:</b> aniline’s –NH<sub>2</sub> is strongly o/p-directing, so direct bromination over-brominates. Acetylate to acetanilide first (moderates the ring), then brominate to get para-bromo on the ring, then hydrolyse back to <b>4-bromoaniline</b>.',
          '<b>Step 2 — diazotise:</b> treat 4-bromoaniline with NaNO<sub>2</sub>/HCl at 273–278 K → 4-bromo​benzene​diazonium chloride.',
          '<b>Step 3 — install iodine:</b> shake the diazonium salt with <b>KI</b> (no copper required for iodide):<br>4-Br-C<sub>6</sub>H<sub>4</sub>–N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> + KI → 4-Br-C<sub>6</sub>H<sub>4</sub>–I + N<sub>2</sub> + KCl',
          '<b>Justification of order:</b> the para-relationship is fixed in Step 1 by the –NH<sub>2</sub> director; iodine must come last because it is installed by replacing the diazonium group, which can only originate from the surviving amino group. Note why we route iodine through the diazonium salt rather than direct ring iodination: aromatic iodination is reversible and sluggish, so the diazonium displacement with KI is the clean, high-yielding alternative — a recurring theme whenever iodine is the target on a ring.',
        ],
        ans: '1-bromo-4-​iodobenzene.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the IUPAC name of CH<sub>3</sub>–CHCl–CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub> and classify the C–Cl carbon.',
            a: '2-chloro-4-​methylpentane; secondary (2°).',
          },
          {
            q: '[NEET] Which is heavier than water: chloromethane, bromoform, fluoromethane, or 1-chloropropane?',
            a: 'Bromoform. (1-Chloropropane is lighter than water, and chloromethane and fluoromethane are gases at room temperature; among short-chain haloalkanes only bromo, iodo and polyhalogen compounds are denser.)',
          },
          {
            q: '[JEE Main] Name the reagent that converts ethanol to iodoethane in a single step without prior isolation of an intermediate, and explain why H<sub>2</sub>SO<sub>4</sub> + KI fails.',
            a: 'Red phosphorus + I<sub>2</sub> (forms PI<sub>3</sub> in situ); H<sub>2</sub>SO<sub>4</sub> oxidises iodide to I<sub>2</sub>, so no HI survives to make the iodide.',
          },
          {
            q: '[JEE Main] An aromatic amine C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> is diazotised and then treated with (i) CuCN/KCN and separately (ii) HBF<sub>4</sub> followed by heat. Name the two products and the two reactions.',
            a: '(i) cyanobenzene (benzonitrile) via Sandmeyer reaction; (ii) fluorobenzene via the <b>Balz–Schiemann</b> reaction.',
          },
          {
            q: '[JEE Advanced] Arrange the dipole moments in increasing order: chloromethane, chlorobenzene, and a non-polar reference of your choice; justify why the aryl halide is lower than the alkyl halide.',
            a: 'Reference such as benzene (≈0) < chlorobenzene (≈1.69 D) < chloromethane (≈1.86 D); the aryl halide’s halogen lone pair delocalises into the ring (partial double-bond character) and the sp<sup>2</sup> carbon is more electronegative, both lowering net polarity.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The Finkelstein reaction is carried out in <b>dry acetone</b> mainly because:',
        opts: [
          { label: 'acetone is a strong oxidising agent', nudge: '<b>(a)</b> is a fabricated property — acetone is not oxidising here.' },
          { label: 'NaCl/NaBr formed is insoluble in acetone and precipitates, driving the equilibrium forward', nudge: null },
          { label: 'acetone increases the polarity of the C–I bond', nudge: '<b>(c)</b> confuses solvent choice with bond polarity; the solvent does not alter the C–I bond.' },
          { label: 'acetone prevents hydrolysis of the iodide', nudge: '<b>(d)</b> sounds plausible (dry conditions do matter) but the primary reason taught is precipitation-driven equilibrium, not anti-hydrolysis — picking this means you remembered “dry” but not why.' },
        ],
        correct: 1,
        solution: 'The forward shift is a Le Chatelier consequence of the by-product leaving solution.',
      },
      {
        t: 'mcq',
        q: 'Which alcohol-to-chloride reagent gives the <b>purest</b> product because its by-products are gaseous?',
        opts: [
          { label: 'conc. HCl + anhydrous ZnCl<sub>2</sub>', nudge: '<b>(a)</b> the Lucas reagent works but leaves the catalyst and water behind.' },
          { label: 'PCl<sub>5</sub>', nudge: '<b>(b)</b> PCl<sub>5</sub> also leaves POCl<sub>3</sub>, a liquid that must be separated.' },
          { label: 'SOCl<sub>2</sub>', nudge: null },
          { label: 'PCl<sub>3</sub>', nudge: '<b>(d)</b> PCl<sub>3</sub> leaves H<sub>3</sub>PO<sub>3</sub>, a non-volatile contaminant.' },
        ],
        correct: 2,
        solution: 'Thionyl chloride releases SO<sub>2</sub> and HCl — both gases — leaving nothing to separate. The discriminator is “which by-products simply float away.”',
      },
      {
        t: 'mcq',
        q: 'Direct iodination of benzene requires an oxidising agent such as HNO<sub>3</sub> because:',
        opts: [
          { label: 'iodine is more reactive than chlorine and must be tamed', nudge: '<b>(a)</b> reverses reality — iodine is the least reactive halogen here.' },
          { label: 'the reaction is reversible and the oxidant destroys the HI formed', nudge: null },
          { label: 'benzene is unreactive toward iodine without a reducing agent', nudge: '<b>(c)</b> misnames the agent’s role (it’s an oxidant, not a reducer).' },
          { label: 'the oxidant converts benzene to a more reactive form', nudge: '<b>(d)</b> invents a benzene-activation step that does not occur.' },
        ],
        correct: 1,
        solution: 'Iodination is reversible; removing HI (by oxidising it back toward I<sub>2</sub>) pulls the equilibrium toward product.',
      },
      {
        t: 'mcq',
        q: 'The boiling point order R–I > R–Br > R–Cl > R–F (same R) is explained primarily by:',
        opts: [
          { label: 'increasing C–X bond strength down the group', nudge: '<b>(a)</b> is the opposite trend (bond strength decreases down the group) and is irrelevant to boiling.' },
          { label: 'increasing molecular mass and polarisability (van der Waals forces) down the group', nudge: null },
          { label: 'increasing dipole moment down the group', nudge: '<b>(c)</b> is wrong — dipole moment actually tends to decrease (C–I is least polar, though CH<sub>3</sub>Cl sits above CH<sub>3</sub>F), yet b.p. rises, so polarity cannot be the cause.' },
          { label: 'decreasing branching down the group', nudge: '<b>(d)</b> branching is unrelated when R is identical.' },
        ],
        correct: 1,
        solution: 'Heavier, larger, more polarisable halogens give stronger van der Waals attractions, raising boiling point.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing bond strength with reactivity/boiling point.</b> Students “feel” that the strongest bond (C–F) should give the highest boiling point. It does not — boiling point is about intermolecular forces (mass/polarisability), not bond strength.',
          '<b>Density blunder.</b> Many write “all alkyl halides sink in water.” Among short-chain haloalkanes, only <b>bromo, iodo, and polyhalogen</b> compounds are denser than water; monochloro and monofluoro compounds are lighter.',
          '<b>Using H<sub>2</sub>SO<sub>4</sub> + KI to make iodides.</b> A classic trap — the acid oxidises iodide to I<sub>2</sub>, so no HI is available. Use red P + I<sub>2</sub> instead.',
          '<b>Forgetting the diazonium scope.</b> Sandmeyer gives Cl and Br (and CN, with CuCN); iodine needs only KI (no Cu); fluorine needs Balz–Schiemann (HBF<sub>4</sub>). Mixing these up loses easy marks.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For boiling-point and density ordering questions, never recall numbers — use two one-line rules: bigger/heavier halogen or chain ⇒ higher b.p. and, for short-chain haloalkanes, only Br/I/poly ⇒ denser than water. For “name-the-reaction” questions, anchor on the <b>distinctive reagent</b>: NaI/dry acetone = Finkelstein, AgF/SbF<sub>3</sub> = Swarts, CuX on a diazonium = Sandmeyer. The reagent is the fingerprint.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'C–X bond is polar',
            note: '(C<sup><i>δ</i>+</sup>–X<sup><i>δ</i>−</sup>); length C–F < C–Cl < C–Br < C–I; strength is the reverse. C–I = most reactive.',
          },
          {
            f: 'Classify by',
            note: 'number of X (mono/di — gem vs vic), carbon type (1°/2°/3°), hybridisation (sp<sup>3</sup> alkyl/allylic/benzylic vs sp<sup>2</sup> vinylic/aryl).',
          },
          {
            f: 'Haloalkane prep',
            note: 'alcohol + SOCl<sub>2</sub> (purest) / PCl<sub>3</sub> / PCl<sub>5</sub> / red P + X<sub>2</sub>; alkane + X<sub>2</sub>/UV (mixtures); alkene + HX (Markovnikov) or X<sub>2</sub> (vic-dihalide); <b>Finkelstein</b> (NaI, dry acetone); <b>Swarts</b> (metal fluoride).',
          },
          {
            f: 'Haloarene prep',
            note: 'arene + X<sub>2</sub>/Lewis acid (EAS); <b>Sandmeyer</b> (CuCl/CuBr on diazonium); <b>Gattermann</b> (Cu powder, lower yield); KI for Ar–I; <b>Balz–Schiemann</b> (HBF<sub>4</sub>, heat) for Ar–F.',
          },
          {
            f: 'Physical properties',
            note: 'b.p. RI > RBr > RCl > RF (same R); b.p. rises with chain length, falls with branching; higher than parent hydrocarbon, usually lower than corresponding alcohol; <b>among short-chain haloalkanes, only Br/I/poly denser than water</b>; insoluble in water, soluble in organic solvents; Beilstein green-flame test suggests halogen.',
          },
        ],
        aids: [
          '“Aryl is shy” — aryl halide dipole < alkyl halide dipole (resonance + sp<sup>2</sup> carbon).',
          '“FiSS” for reagent fingerprints: <b>Fi</b>nkelstein = NaI/acetone, <b>S</b>warts = AgF, <b>S</b>andmeyer = CuX.',
        ],
      },
    ],
  },
];
