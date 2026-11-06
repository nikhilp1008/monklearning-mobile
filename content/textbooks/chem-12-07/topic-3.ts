import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topic 03, Ethers: Preparation & Properties: pp. 332–339 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. Figure 7.4, boiling points at comparable mass (caption p. 333, drawn
 * p. 334), sits in "Concept intuition" after the paragraph that first gives
 * the 309, 308 and 390 K it shows; it is redrawn in lib/diagrams/chemistry-12-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 332–339 ─────────────────────────
  {
    n: '03',
    title: 'Ethers: Preparation & Properties',
    kalam: 'An ether is the quiet sibling of the three families.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Ethers are a compact, high-yield slice of the chapter. CBSE Boards favour the Williamson synthesis (with its “why not di-tert-butyl?” trap) and the HI-cleavage products as 2–3 mark questions. NEET asks one-shot MCQs on the cleavage electrophile/products and on the bp-vs-alcohol comparison. JEE Main turns the C–O cleavage into product-prediction across ether types, and JEE Advanced probes the S<sub>N</sub>1-vs-S<sub>N</sub>2 switch and the anisole regiochemistry. Master two preparations and one cleavage mechanism and the topic is essentially yours.',
      },
      {
        t: 'p',
        html: 'An ether is the quiet sibling of the three families. Where an alcohol or phenol carries a reactive O–H, an ether is just R–O–R′ — an oxygen acting as a <b>bridge</b> between two carbon groups, with no O–H at all. That single structural fact drives almost everything about how ethers behave physically and chemically.',
      },
      {
        t: 'p',
        html: '<b>Why ethers are aloof.</b> Think back to the railway-platform image from earlier: alcohol molecules hold hands through hydrogen bonds, so they boil high. An ether molecule has no hand to offer — its oxygen has lone pairs but no O–H — so ether molecules cannot hydrogen-bond to each other. They are held together by the same dispersion forces as an alkane of similar size, plus weak dipole–dipole forces (the C–O bonds are polar, so the bent molecule has a small net dipole). The consequence is striking: <b>an ether boils at almost the same temperature as an alkane of similar mass, and far below the corresponding alcohol.</b>',
      },
      {
        t: 'p',
        html: 'Think about it this way. Pentane, ethoxyethane, and butan-1-ol all have nearly the same molecular mass, yet their boiling points are 309, 308, and 390 K. The ether sits right next to the alkane; the alcohol towers above both — and the only difference is the alcohol’s hydrogen bonding.',
      },
      { t: 'fig', id: 'c12-07-fig-7.4' },
      {
        t: 'p',
        html: '<b>Why ethers still dissolve like alcohols, though.</b> Here is the subtlety students miss: an ether cannot hydrogen-bond to another ether, but its oxygen lone pair can accept a hydrogen bond from a water molecule. So ethers are about as water-miscible as alcohols of the same mass (ethoxyethane and butan-1-ol dissolve to ~7.5 and ~9 g per 100 mL), while the all-carbon pentane is essentially insoluble. The lesson: solubility needs only one partner to offer the hand, but boiling needs the molecules to hold hands with each other.',
      },
      {
        t: 'p',
        html: '<b>Why ethers are chemically sluggish.</b> With no O–H to ionise and a strong, stable C–O–C framework, ethers are the <b>least reactive</b> of the common functional groups — which is exactly why diethyl ether is prized as an inert reaction solvent, and was historically used as an inhalation anaesthetic (later replaced because of its slow action and unpleasant recovery). The one weak point is the C–O bond, and it takes an aggressive reagent to break it: <b>concentrated hydrogen halides at high temperature</b>, with reactivity HI > HBr > HCl. When the ether carries an aromatic ring (an aryl ether such as anisole), a second personality appears: the alkoxy group feeds electrons into the ring, activating it toward electrophiles at the ortho and para positions, just as the –OH does in phenol.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions to hold onto.</b><br>• Ethers do <b>not</b> react with bases, active metals, reducing agents, or mild oxidants — their inertness is the point. (One exception matters in the laboratory: on standing in air and light, ethers slowly take up oxygen to form explosive <b>peroxides</b>, so an old sample of ether is never distilled to dryness.)<br>• The C–O cleavage needs the concentrated acid; dilute HX will not do it, and HCl is too weak in practice.<br>• An aryl–oxygen bond is <b>never</b> cleaved by the halide (the aromatic carbon is sp<sup>2</sup> and resists nucleophilic substitution), so an alkyl aryl ether always gives a phenol, not an aryl halide.',
      },

      { t: 'part', title: 'Key definitions, structures and data' },
      {
        t: 'p',
        html: '<b>Definition.</b> An ether is R–O–R′, where R and R′ are alkyl or aryl groups; the –OR fragment is an <b>alkoxy</b> group. Ethers are simple/symmetrical when the two groups are identical and mixed/unsymmetrical when they differ (notation established earlier in the chapter).',
      },
      {
        t: 'p',
        html: '<b>Structure.</b> Oxygen in an ether carries two bond pairs and two lone pairs in a roughly tetrahedral arrangement, but the <b>C–O–C bond angle is slightly greater than the tetrahedral</b> 109°28′ (about 111.7° in methoxymethane) because the two bulky R groups repel each other. The <b>C–O bond length (≈ 141 pm)</b> is close to that in alcohols. The C–O bonds are polar, so a (symmetrical or not) ether has a small <b>net dipole moment</b> and a bent shape.',
      },
      {
        t: 'formula',
        kicker: 'Boiling-point data (comparable molecular masses)',
        main: 'n-pentane (309.1 K) ≈ ethoxyethane (307.6 K) ≪ butan-1-ol (390 K)',
        legend: [
          'n-pentane = alkane',
          'ethoxyethane = ether',
          'butan-1-ol = alcohol',
          '≈, ≪ = boils at nearly the same temperature as, boils far below',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The large gap to the alcohol is entirely due to intermolecular <b>hydrogen bonding</b> in the alcohol, which ethers lack.',
      },
      {
        t: 'p',
        html: '<b>Water-miscibility data:</b> ethoxyethane ≈ 7.5 g and butan-1-ol ≈ 9 g per 100 mL water (similar), while n-pentane is essentially immiscible — because the ether oxygen, like the alcohol oxygen, hydrogen-bonds to water.',
      },
      {
        t: 'formula',
        kicker: 'Reactivity order of hydrogen halides toward C–O cleavage',
        main: 'HI > HBr > HCl',
        legend: ['HI, HBr, HCl = hydrogen halides', '> = is more reactive in C–O cleavage than'],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>(A) Preparation of ethers</b>',
      },
      {
        t: 'p',
        html: '<b>1. By dehydration of alcohols.</b> A protic acid (conc. H<sub>2</sub>SO<sub>4</sub> or H<sub>3</sub>PO<sub>4</sub>) removes water; whether you get an ether or an alkene depends on the temperature. Ethanol with sulphuric acid gives <b>ethoxyethane at 413 K</b> but <b>ethene at 443 K</b> — the lower temperature favours substitution (ether), the higher favours elimination (alkene).<br>2 C<sub>2</sub>H<sub>5</sub>OH →<sup>conc. H₂SO₄</sup> C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O<br>(at 413 K)',
      },
      {
        t: 'p',
        html: '<b>Mechanism and reasoning:</b> the acid protonates one alcohol, and a <b>second alcohol molecule attacks the protonated alcohol by an S<sub>N</sub>2 displacement of water</b> — a bimolecular substitution. Step by step: (1) the –OH of one ethanol is protonated to –OH<sub>2</sub><sup>+</sup>, turning it into a good leaving group; (2) the oxygen of a second, neutral ethanol attacks the back of that carbon and pushes out water, giving a protonated ether; (3) loss of the proton yields the neutral ether. Because step 2 is S<sub>N</sub>2, the alkyl group must be <b>primary and unhindered</b>, and the temperature low. With secondary or tertiary alcohols, elimination outruns substitution and you simply get the alkene, so the method is good only for <b>symmetrical ethers of primary alcohols</b>. (It cannot sensibly make a mixed ether such as ethyl methyl ether — a mixture of alcohols would give a mixture of products.)',
      },
      {
        t: 'p',
        html: '<b>2. Williamson synthesis.</b> The general laboratory route: a <b>sodium alkoxide (or aryloxide) displaces halide from an alkyl halide by S<sub>N</sub>2.</b>',
      },
      {
        t: 'formula',
        kicker: 'Williamson synthesis',
        main: 'R–O<sup>−</sup>Na<sup>+</sup> + R′–X → R–O–R′ + NaX',
        legend: [
          'R–O<sup>−</sup>Na<sup>+</sup> = sodium alkoxide (or aryloxide)',
          'R′–X = alkyl halide (methyl or primary)',
          'R–O–R′ = ether',
          'NaX = sodium halide',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Reasoning and the famous limitation:</b> since the alkoxide attacks by S<sub>N</sub>2, the <b>alkyl halide should be primary</b>. The alkoxide is not only a nucleophile but also a <b>strong base</b>, so against a secondary or — especially — a tertiary halide it triggers <b>elimination</b> instead of substitution. With a 3° halide the alkene is the only product and no ether forms (NCERT’s words; in practice elimination is so dominant that essentially no ether is isolated): CH<sub>3</sub>O<sup>−</sup>Na<sup>+</sup> + (CH<sub>3</sub>)<sub>3</sub>C–Br gives <b>2-methyl​propene</b>, not an ether. The design rule is therefore the one met earlier: <b>put the bulk on the alkoxide, keep the halide primary.</b> This is why <b>di-tert-butyl ether cannot be made by Williamson synthesis</b> — it would require a tertiary halide, which only eliminates. The method makes symmetrical and unsymmetrical ethers, including aryl ethers (use the phenol as its phenoxide).',
      },
      {
        t: 'p',
        html: '<b>(B) Physical properties</b>',
      },
      {
        t: 'p',
        html: 'The polar C–O bonds give an ether a small <b>net dipole moment</b>, but this weak polarity barely raises the boiling point: an ether boils at about the same temperature as the alkane of comparable mass (ethoxyethane 308 K, n-pentane 309 K) and far below the alcohol, because its weak dipole–dipole forces add very little to the attraction between molecules. The large gap up to the alcohol is entirely the work of the intermolecular <b>hydrogen bonding</b> that alcohols have and ethers lack (an ether has no O–H to donate). Lower ethers are therefore highly <b>volatile and very flammable</b> — a standard laboratory hazard with diethyl ether.',
      },
      {
        t: 'p',
        html: '<b>Solubility tells the opposite story.</b> Although ether molecules cannot hydrogen-bond to each other, the ether oxygen still carries lone pairs and can <b>accept a hydrogen bond from water</b>. So an ether is about as water-miscible as an alcohol of the same molecular mass (ethoxyethane and butan-1-ol dissolve to roughly the same extent), while the all-carbon alkane of similar mass is essentially insoluble. The single take-away: hydrogen bonding to water governs solubility, hydrogen bonding between molecules governs boiling point — and an ether can do the first but not the second.',
      },
      {
        t: 'p',
        html: '<b>(C) Chemical reactions</b>',
      },
      {
        t: 'p',
        html: '<b>1. Cleavage of the C–O bond by hydrogen halides.</b> Ethers, otherwise inert, are cleaved by <b>excess concentrated HI or HBr at high temperature</b> (reactivity HI > HBr > HCl). A dialkyl ether gives, in general, an alkyl halide and an alcohol; with excess HI at high temperature the alcohol is converted onward to a second alkyl halide, so <b>two alkyl iodide molecules</b> result.',
      },
      {
        t: 'p',
        html: '<b>Mechanism (the heart of the topic):</b><br>• <b>Step 1 — protonation.</b> The acid protonates the ether oxygen to give an <b>oxonium ion</b> (this is why a sufficiently acidic HX is needed).<br>• <b>Step 2 — nucleophilic attack.</b> Iodide, a good nucleophile, attacks a carbon and displaces an alcohol. Which carbon decides the products:<br>– For <b>primary/secondary</b> alkyl groups the attack is S<sub>N</sub>2, so iodide hits the <b>less hindered (lower) alkyl group</b>, which becomes the alkyl iodide; the bulkier group leaves as the alcohol.<br>– When one group is <b>tertiary</b>, the protonated ether instead loses the alcohol to form a <b>stable 3° carbocation</b> (S<sub>N</sub>1), and iodide then bonds to that tertiary carbon. So (CH<sub>3</sub>)<sub>3</sub>C–O–CH<sub>3</sub> + HI → CH<sub>3</sub>OH + (CH<sub>3</sub>)<sub>3</sub>C–I.<br>• <b>Alkyl aryl ethers (e.g. anisole)</b> always cleave at the <b>alkyl–oxygen</b> bond, giving a <b>phenol + alkyl halide</b>, never an aryl halide. On protonation, anisole forms a <b>methylphenyl oxonium ion</b>; within it the O–CH<sub>3</sub> bond is weaker than the O–C<sub>6</sub>H<sub>5</sub> bond, because the aryl–oxygen bond has <b>partial double-bond character</b> (the ring conjugates with an oxygen lone pair) and the sp<sup>2</sup> aromatic carbon resists nucleophilic substitution. Iodide therefore attacks the methyl, so anisole + HI gives <b>phenol + CH<sub>3</sub>I</b>, and the phenol — for the same sp<sup>2</sup>/resonance reason — does not react further.',
      },
      {
        t: 'p',
        html: '<b>2. Electrophilic substitution on aromatic ethers.</b> The alkoxy group (–OR) <b>activates the ring and directs incoming electrophiles to the ortho and para positions</b>, exactly as –OH does in phenol. The standard textbook example is <b>halogenation</b>: anisole reacts with bromine in ethanoic acid <b>without any iron(III) bromide catalyst</b>, because the methoxy group has already activated the ring; the para product dominates (~90%).',
      },
      {
        t: 'p',
        html: '<b>Nitration.</b> Anisole with HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> gives o- and p-nitroanisole. <b>Friedel–Crafts.</b> Anisole with an alkyl or acyl halide and anhydrous AlCl<sub>3</sub> gives the o-/p- alkyl or acyl product. Both follow the same ortho/para-activating logic as the halogenation above.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Write the reagents and equation for preparing 1-methoxy​propane by Williamson synthesis, and explain why the alternative pairing is poorer.',
        steps: [
          'The target is CH<sub>3</sub>–O–CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>. Two pairings are conceivable:',
          '<b>Preferred:</b> sodium propoxide + methyl iodide — CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>O<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>I → CH<sub>3</sub>–O–CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> + NaI. The S<sub>N</sub>2 electrophile is the unhindered methyl halide.',
          '<b>Workable but poorer:</b> sodium methoxide + 1-bromo​propane. Both halides here are unhindered (methyl and primary), so this also succeeds; the methyl-halide pairing is simply the cleaner S<sub>N</sub>2. The general rule still bites when a partner is 3°.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'What are the products when ethoxyethane is heated with excess concentrated HI?',
        steps: [
          'Symmetrical dialkyl ether, both groups primary and identical — so the cleavage gives one ethyl iodide and one ethanol, and the <b>excess HI at high temperature converts the ethanol on to a second ethyl iodide.</b>',
          '<b>Speed tip:</b> “excess HI, high temperature” is the cue that any alcohol intermediate is pushed all the way to the iodide.',
        ],
        ans: '<b>Two molecules of ethyl iodide (C<sub>2</sub>H<sub>5</sub>I)</b> (plus water).',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Predict the major organic products when (i) tert-butyl methyl ether and (ii) anisole are each treated with one equivalent of HI.',
        steps: [
          '<b>(i)</b> (CH<sub>3</sub>)<sub>3</sub>C–O–CH<sub>3</sub>: one group is tertiary, so cleavage goes S<sub>N</sub>1 — the protonated ether sheds methanol to give the stable 3° carbocation, which captures iodide. Products: <b>2-iodo-2-methyl​propane ((CH<sub>3</sub>)<sub>3</sub>C–I) + methanol.</b> (Note the iodide ends up on the tertiary carbon, the opposite of the S<sub>N</sub>2 “lower-group” rule.)',
          '<b>(ii)</b> anisole, C<sub>6</sub>H<sub>5</sub>–O–CH<sub>3</sub>: the aryl–O bond is protected, so iodide attacks the methyl. Products: <b>phenol + iodomethane (CH<sub>3</sub>I).</b>',
          'The two parts contrast the S<sub>N</sub>1 (tertiary) and aryl-protected outcomes — exactly the discrimination JEE Main rewards.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'An ether C<sub>4</sub>H<sub>10</sub>O on cleavage with excess hot HI gives a single alkyl iodide. Deduce the ether, and contrast its behaviour with that of an unsymmetrical tert-butyl methyl ether (C<sub>5</sub>H<sub>12</sub>O) under the same conditions.',
        steps: [
          'A single alkyl iodide from a C<sub>4</sub>H<sub>10</sub>O ether means the two alkyl groups must be <b>identical</b> — i.e. the ether is <b>diethyl ether, C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub></b>. Both ethyls are primary, cleavage is S<sub>N</sub>2, and with excess hot HI both halves end as ethyl iodide → one product, C<sub>2</sub>H<sub>5</sub>I.',
          'By contrast, <b>tert-butyl methyl ether, (CH<sub>3</sub>)<sub>3</sub>C–O–CH<sub>3</sub></b> (C<sub>5</sub>H<sub>12</sub>O), has two different groups, so it gives <b>two different products</b>: the tertiary centre forces an S<sub>N</sub>1 cleavage, giving (CH<sub>3</sub>)<sub>3</sub>C–I and methanol, which the excess HI turns into iodomethane. So a symmetrical ether gives one alkyl iodide and any unsymmetrical ether gives two (1-ethoxy​propane gives ethyl iodide and 1-iodo​propane, as in the fourth practice question): the count of products tells symmetrical from unsymmetrical, while the mechanism decides which group takes the iodide first.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write reagents and the equation for preparing ethoxy​benzene (phenetole) by Williamson synthesis. Which fragment must be the phenoxide and why?',
            a: 'Sodium phenoxide + bromoethane: C<sub>6</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + C<sub>2</sub>H<sub>5</sub>Br → C<sub>6</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub> (ethoxy​benzene) + NaBr; the aryl group must be the oxide because an aryl halide will not undergo the S<sub>N</sub>2 needed for Williamson, so the ethyl (primary) halide is the electrophile.',
          },
          {
            q: '[NEET] The C–O–C bond angle in ethers is slightly greater than the tetrahedral angle. The reason is: (state it in one line).',
            a: 'Repulsion between the two bulky alkyl (–R) groups on oxygen pushes the angle open past tetrahedral.',
          },
          {
            q: '[JEE Main] Arrange in increasing order of boiling point: n-butane, ethoxyethane, butan-1-ol. Justify the order in terms of intermolecular forces.',
            a: 'n-butane < ethoxyethane < butan-1-ol. n-Butane has only dispersion forces and is the lightest (58 against 74 g mol<sup>−1</sup>), so it boils lowest (about 273 K); ethoxyethane adds weak dipole–dipole forces to its dispersion forces (307.6 K); butan-1-ol, of the same mass as the ether, boils far higher (390 K) because of intermolecular hydrogen bonding. (At equal mass, as with n-pentane, the alkane and the ether boil almost together.)',
          },
          {
            q: '[JEE Main] Give the products of (i) 2-methoxy-2-methyl​propane + HI and (ii) 1-ethoxy​propane + excess HI (hot).',
            a: '(i) 2-iodo-2-methyl​propane + methanol (S<sub>N</sub>1, tertiary takes the iodide); (ii) ethyl iodide + 1-iodo​propane (both primary, lower group rule, then alcohol → iodide with excess hot HI).',
          },
          {
            q: '[JEE Advanced] Explain, with the relevant bond-strength argument, why HI cleavage of anisole gives phenol and iodomethane rather than benzene-derived iodide and methanol — and why the phenol does not react further with HI.',
            a: 'The aryl–O bond has partial double-bond character (oxygen lone pair conjugates into the ring) and the sp<sup>2</sup> aromatic carbon resists nucleophilic substitution, so iodide must attack the methyl, giving phenol + CH<sub>3</sub>I; the phenol’s C–O cannot then be cleaved for the same sp<sup>2</sup>/resonance reason.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which pair of reagents is the correct Williamson route to tert-butyl ethyl ether?',
        opts: [
          { label: '(CH<sub>3</sub>)<sub>3</sub>C–O<sup>−</sup>Na<sup>+</sup> + C<sub>2</sub>H<sub>5</sub>Br', nudge: null },
          { label: 'C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + (CH<sub>3</sub>)<sub>3</sub>C–Br', nudge: 'In <b>(b)</b> the 3° halide only eliminates to 2-methyl​propene — the classic trap.' },
          { label: 'both work', nudge: '<b>(c)</b> ignores that elimination.' },
          { label: 'the ether cannot be made', nudge: '<b>(d)</b> is wrong because <b>(a)</b> is perfectly viable.' },
        ],
        correct: 0,
        solution: 'The S<sub>N</sub>2 electrophile must be the primary halide (C<sub>2</sub>H<sub>5</sub>Br), with the bulky tertiary group supplied as the alkoxide.',
      },
      {
        t: 'mcq',
        q: 'The boiling point of ethoxyethane is closest to that of:',
        opts: [
          { label: 'butan-1-ol', nudge: '<b>(a)</b> is a hydrogen-bonding liquid that boils much higher; choosing it means forgetting that ethers have no O–H.' },
          { label: 'n-pentane', nudge: null },
          { label: 'water', nudge: '<b>(c)</b> is a hydrogen-bonding liquid that boils much higher; choosing it means forgetting that ethers have no O–H.' },
          { label: 'ethanol', nudge: '<b>(d)</b> is a hydrogen-bonding liquid that boils much higher; choosing it means forgetting that ethers have no O–H.' },
        ],
        correct: 1,
        solution: 'Lacking inter-molecular hydrogen bonding, an ether boils near the alkane of comparable mass.',
      },
      {
        t: 'mcq',
        q: 'In the cleavage of CH<sub>3</sub>–O–C(CH<sub>3</sub>)<sub>3</sub> by HI, the iodide ends up on:',
        opts: [
          { label: 'the methyl carbon', nudge: '<b>(a)</b> applies the S<sub>N</sub>2 “lower-group” rule, which holds only for 1°/2° ethers without a benzyl group (a benzyl group → benzyl iodide).' },
          { label: 'the tert-butyl carbon', nudge: null },
          { label: 'neither — only phenol forms', nudge: '<b>(c)</b> confuses this with an aryl ether.' },
          { label: 'both equally', nudge: '<b>(d)</b> ignores the mechanism switch.' },
        ],
        correct: 1,
        solution: 'The tertiary centre forms a stable carbocation, so cleavage is S<sub>N</sub>1 and iodide bonds to the tert-butyl carbon (giving (CH<sub>3</sub>)<sub>3</sub>C–I + methanol).',
      },
      {
        t: 'mcq',
        q: 'Anisole undergoes bromination with Br<sub>2</sub> in ethanoic acid <b>without</b> a catalyst because:',
        opts: [
          { label: 'the methoxy group deactivates the ring', nudge: '<b>(a)</b> is the opposite of the truth.' },
          { label: 'the methoxy group activates the ring and directs ortho/para', nudge: null },
          { label: 'bromine is already an electrophile needing no help', nudge: '<b>(c)</b> misattributes the activation to bromine.' },
          { label: 'ethanoic acid is the catalyst', nudge: '<b>(d)</b> miscasts the solvent as a catalyst.' },
        ],
        correct: 1,
        solution: 'The alkoxy group donates electron density into the ring (resonance), activating it enough that no Lewis-acid catalyst is needed; the para product dominates.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Trying to make di-tert-butyl ether (or any 3°-halide ether) by Williamson.</b> A 3° halide only eliminates; keep the halide primary and load the bulk onto the alkoxide.',
          '<b>Applying the “lower alkyl group → iodide” rule to a tertiary ether.</b> That S<sub>N</sub>2 rule holds for 1°/2°; a tertiary centre switches to S<sub>N</sub>1 and the iodide goes onto the tertiary carbon.',
          '<b>Writing an aryl halide as a cleavage product of an aryl ether.</b> The aryl–O bond never breaks; anisole gives phenol + alkyl halide.',
          '<b>Claiming ethers boil high “because of the oxygen.”</b> Ethers cannot hydrogen-bond to each other, so they boil like alkanes; only their water-solubility resembles alcohols.',
          '<b>Forgetting the temperature switch in alcohol dehydration.</b> Lower T → ether (substitution); higher T → alkene (elimination).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> For any “ether + HI” product question, run a three-question triage: Is a group aromatic? → aryl ether gives phenol + alkyl halide. Is a group tertiary? → S<sub>N</sub>1, iodide on the tertiary carbon. Otherwise → S<sub>N</sub>2, iodide on the smaller alkyl, and if HI is hot/excess push every alcohol on to its iodide. For boiling-point ranking, place ethers right beside the alkane and let only the hydrogen-bonders (alcohols) rise above.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Ether = R–O–R′',
            note: 'no O–H; polar C–O bonds give a small net dipole; C–O–C angle > 109°28′ (~111.7°), C–O ≈ 141 pm.',
          },
          {
            f: 'Boiling point ≈ alkane, ≪ alcohol',
            note: '(no inter-ether H-bonding); <b>water-solubility ≈ alcohol</b> (oxygen accepts an H-bond from water).',
          },
          {
            f: 'Prep 1 — dehydration of alcohols',
            note: 'conc. H<sub>2</sub>SO<sub>4</sub>, ~413 K → symmetrical ether (S<sub>N</sub>2, primary only); ~443 K → alkene instead.',
          },
          {
            f: 'Prep 2 — Williamson',
            note: 'R–O<sup>−</sup>Na<sup>+</sup> + R′X (S<sub>N</sub>2); keep the <b>halide primary</b> (3° → elimination); makes symmetrical, unsymmetrical, and aryl ethers; <b>di-tert-butyl ether impossible.</b>',
          },
          {
            f: 'C–O cleavage by HX (HI>HBr>HCl)',
            note: 'protonate → oxonium → 1°/2° <b>S<sub>N</sub>2 on lower alkyl</b>, 3° <b>S<sub>N</sub>1 on tertiary carbon</b>, <b>aryl ether</b> → <b>phenol + alkyl halide</b> (aryl–O never breaks).',
          },
          {
            f: 'Aromatic ethers',
            note: 'alkoxy <b>activates, o/p-directs</b>; anisole brominates without a catalyst (para ~90%).',
          },
        ],
        aids: ['“Aryl keeps its oxygen; tertiary keeps the iodide; primary loses the smaller.”'],
      },
    ],
  },
];
