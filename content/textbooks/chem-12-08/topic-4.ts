import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topic 04, Physical Properties & Uses of Carbonyl Compounds:
 * pp. 395–402 of the Class 12 Chemistry Master Reference, word for word, split at
 * its Sections 1 to 8. Figure 8.5 (caption p. 395, drawn p. 396) sits in "Concept
 * intuition" after the paragraph that climbs the boiling-point ladder, where the
 * book prints its caption; it is redrawn in lib/diagrams/chemistry-12-08.ts. The
 * book's two uses tables (two columns, "Compound" and "Principal uses") are
 * defgrids under the book's own headings. "Sub-0N" is "Topic 0N" and "sub-topic"
 * is "topic".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 395–402 ─────────────────────────
  {
    n: '04',
    title: 'Physical Properties & Uses of Carbonyl Compounds',
    kalam: 'The single most reused idea here — hydrocarbon < ether < aldehyde/ketone < alcohol < carboxylic acid — appears almost every year somewhere.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the “glue” topic that ties the whole chapter together. CBSE Boards ask 1–2 mark questions on boiling-point/solubility reasoning and on specific uses (formalin, vinegar, nylon). NEET loves quick ordering and assertion-reason questions on boiling point and water solubility across functional-group families. JEE Main and Advanced fold these comparisons into multi-part identification problems, where you must rank intermolecular forces correctly to win the question. The single most reused idea here — hydrocarbon < ether < aldehyde/ketone < alcohol < carboxylic acid — appears almost every year somewhere.',
      },
      {
        t: 'p',
        html: 'Up to now we have studied what these molecules are and what they do chemically. This topic answers a different question: how do they behave physically — why some are gases and others waxy solids, why some dissolve in water and others float on top, why some reek and others smell sweet. Every one of these properties traces back to a single idea: <b>how strongly the molecules cling to one another and to water.</b>',
      },
      {
        t: 'p',
        html: 'Think about it this way. Imagine each molecule is a person at a crowded railway platform, and “boiling” means everyone has to let go and run off as individuals (into the gas phase). How hard that is depends on how tightly people are holding hands. A pure hydrocarbon is like strangers brushing past each other — only the weakest, fleeting grip (van der Waals dispersion forces), so they let go easily and boil low. Aldehydes and ketones carry a permanent dipole (the polar C<sup><i>δ</i>+</sup>=O<sup><i>δ</i>−</sup> we met in Topic 01), so their molecules align positive-to-negative like weak magnets — a firmer handshake (dipole–dipole attraction) that raises the boiling point above hydrocarbons and ethers of the same size. Alcohols go further: their O–H can hydrogen-bond, a proper two-handed grip, so they boil higher still. And carboxylic acids are the champions — two molecules clasp into a <b>dimer</b> held by two hydrogen bonds at once, effectively doubling their size, so they boil highest of all.',
      },
      { t: 'fig', id: 'c12-08-fig-8.5' },
      {
        t: 'p',
        html: 'Water solubility follows a parallel logic but asks a different question: can the molecule hold hands with water? The lower aldehydes, ketones and acids can — their oxygen atoms hydrogen-bond with water, so methanal, ethanal, propanone and the small acids dissolve freely. But every molecule also drags a greasy hydrocarbon tail that water rejects. As that tail grows, the water-friendly head is outvoted by the water-hating tail, and solubility falls off until the higher members are essentially insoluble. It is a tug-of-war between a polar head and a non-polar tail.',
      },
      {
        t: 'p',
        html: 'Odour is the most human property. The smaller aldehydes have sharp, pungent smells (think of the bite of formalin); as molecules get larger the odour mellows into something fragrant, which is exactly why nature and the perfume industry are full of medium-sized aldehydes and ketones — vanillin, cinnamaldehyde, camphor, the works.',
      },
      {
        t: 'p',
        html: 'The same forces also fix the physical state at room temperature. Methanal, the lightest, is a gas; ethanal, only slightly heavier, is a low-boiling volatile liquid; the next several aldehydes and ketones are liquids; and the higher members — together with most aromatic acids such as benzoic acid — are solids. The pattern is the boiling-point ladder read off as states: weaker attractions and lower mass keep a compound gaseous or volatile, while stronger attractions and greater mass pull it toward the solid end. So the very same reasoning that orders boiling points also tells you, at a glance, whether a given carbonyl compound is likely to be a gas, a liquid or a solid in the lab.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Boiling-point comparisons are only fair “at comparable molecular mass” — a big hydrocarbon can of course out-boil a tiny acid simply by being heavier, so always compare like with like. Branching lowers boiling point (a compact, ball-shaped molecule has less surface to grip with). And the dimer picture for acids holds in the vapour phase and in non-polar aprotic solvents such as benzene, but in water the dimer is broken up by water molecules competing for the hydrogen bonds.',
      },

      { t: 'part', title: 'Key data, definitions and uses' },
      {
        t: 'formula',
        kicker: 'Intermolecular forces, weakest to strongest',
        main: 'van der Waals (dispersion) < dipole–dipole < hydrogen bond < (double) hydrogen-bonded dimer',
        legend: ['< = is weaker than'],
        note: null,
      },
      {
        t: 'table',
        title: 'Boiling-point comparison at comparable molecular mass (the table to memorise)',
        head: ['Compound', 'Family', 'Mol. mass', 'b.p. (K)'],
        rows: [
          ['n-Butane', 'hydrocarbon', '58', '273'],
          ['Methoxyethane', 'ether', '60', '281'],
          ['Propanal', 'aldehyde', '58', '322'],
          ['Acetone (propanone)', 'ketone', '58', '329'],
          ['Propan-1-ol', 'alcohol', '60', '370'],
          ['Ethanoic acid (acetic acid)', 'carboxylic acid', '60', '391 (dimer)'],
        ],
      },
      {
        t: 'p',
        html: 'So for similar mass: <b>hydrocarbon < ether < aldehyde ≈ ketone < alcohol < carboxylic acid.</b>',
      },
      {
        t: 'p',
        html: '<b>Other key facts:</b><br>• Carbonyl dipole moment ≈ 2.3–2.9 D (methanal 2.33, acetone 2.88) — the origin of dipole–dipole attraction. This is a large, concentrated dipole because the C=O double bond places the charge separation on a single, exposed bond; an ether’s two single C–O bonds give a much smaller net dipole, which is why ethers sit only just above hydrocarbons on the boiling-point ladder (at equal mass the two can even tie: n-pentane boils at 309 K and ethoxyethane at 308 K, as in Alcohols, Phenols and Ethers).<br>• Aldehydes/ketones boil <b>higher than hydrocarbons/ethers</b> (dipole–dipole) but <b>lower than alcohols</b> of similar mass (no hydrogen-bond donor — there is no O–H).<br>• <b>Water solubility:</b> lower members (methanal, ethanal, propanone; acids up to ~4 C) are freely soluble/miscible; solubility falls sharply as the chain lengthens. All are soluble in organic solvents (benzene, ether, methanol, chloroform).<br>• <b>Physical state:</b> methanal is a gas, ethanal a low-boiling liquid; most others are liquids or (higher members, and aromatic acids) solids.',
      },
      {
        t: 'defgrid',
        title: 'Uses — aldehydes & ketones',
        rows: [
          {
            k: 'Methanal (formaldehyde)',
            v: 'as <b>formalin</b> (40% aqueous) to preserve biological specimens; making <b>bakelite</b> (phenol–formaldehyde resin), urea–formaldehyde glues and other polymers',
          },
          { k: 'Ethanal (acetaldehyde)', v: 'starting material for acetic acid, ethyl acetate, vinyl acetate, polymers and drugs' },
          { k: 'Benzaldehyde', v: 'perfumery and dye industries' },
          { k: 'Propanone (acetone), butanone (MEK)', v: 'common industrial <b>solvents</b>' },
          { k: 'Butyraldehyde, vanillin, acetophenone, camphor', v: 'valued for <b>odours and flavours</b>' },
        ],
      },
      {
        t: 'defgrid',
        title: 'Uses — carboxylic acids',
        rows: [
          { k: 'Methanoic acid (formic)', v: 'rubber, textile, dyeing, leather and electroplating industries' },
          { k: 'Ethanoic acid (acetic)', v: 'solvent; <b>vinegar</b> in the food industry' },
          { k: 'Hexanedioic acid (adipic)', v: 'manufacture of <b>nylon-6,6</b>' },
          { k: 'Esters of benzoic acid', v: 'perfumery' },
          { k: 'Sodium benzoate', v: '<b>food preservative</b>' },
          { k: 'Higher fatty acids', v: 'manufacture of <b>soaps and detergents</b>' },
        ],
      },

      { t: 'part', title: 'Key procedures and framework' },
      {
        t: 'proc',
        title: '3A. How to rank boiling points (the reliable two-step)',
        steps: [
          '<b>Identify the strongest intermolecular force each molecule can form.</b> Climb the ladder: dispersion (hydrocarbons) → dipole–dipole (aldehydes, ketones, ethers — though ethers are only weakly polar) → hydrogen bonding (alcohols) → dimeric hydrogen bonding (carboxylic acids). The molecule with the stronger force boils higher. <b>Reasoning:</b> boiling means overcoming these attractions, so stronger attraction = more energy = higher boiling point.',
          '<b>Break ties with mass and shape.</b> Among molecules in the same family (or with the same dominant force), the heavier one boils higher (more electrons, more dispersion); and among isomers, the less branched one boils higher (more surface contact). <b>Reasoning:</b> a stretched-out molecule touches its neighbours over a larger area than a compact, branched one.',
        ],
      },
      {
        t: 'proc',
        title: '3B. How to rank water solubility',
        steps: [
          '<b>Count the polar head’s ability to hydrogen-bond with water</b> — the C=O and especially –OH/–COOH pull the molecule into solution.',
          '<b>Weigh that against the hydrocarbon tail</b> — a longer alkyl/aryl portion is hydrophobic and pulls the molecule out of water. The shorter the tail relative to the polar head, the more soluble. <b>Reasoning:</b> solubility is the head winning the tug-of-war against the tail.',
        ],
      },
      {
        t: 'p',
        html: 'The practical cutoffs worth remembering: methanal, ethanal and propanone are miscible with water in all proportions, and the acids stay miscible up to about four carbons (butanoic acid); beyond these, solubility drops off sharply, so that higher aldehydes, ketones and acids (and aromatic ones such as benzaldehyde and benzoic acid) are only slightly soluble or essentially insoluble in cold water. Regardless of water solubility, <b>all</b> of these compounds dissolve readily in less-polar organic solvents — benzene, ether, methanol, chloroform — because there the dominant interaction is dispersion/dipole with the solvent rather than hydrogen bonding with water.',
      },
      { t: 'p', html: '<b>3C. Comparing within the carbonyl family (the fine print)</b>' },
      {
        t: 'p',
        html: 'The force ladder ranks across families; within the aldehyde/ketone family the differences are smaller and decided by mass and shape. Two points examiners exploit. First, a ketone tends to boil slightly higher than the aldehyde of the same molecular mass — for example propanal boils at 322 K but its isomer acetone at 329 K — because the ketone’s carbonyl sits in the middle of the chain where the molecular dipole is a little better expressed. Second, none of these carbonyls can match an alcohol of the same mass, because the decisive factor is the presence or absence of an O–H donor, not the mere existence of an oxygen. Ethers illustrate the same lesson from the other side: an ether has two C–O dipoles, but they are oriented so as to partly cancel and the molecule has no concentrated, exposed dipole like a carbonyl, so ethers boil only a little above hydrocarbons and well below aldehydes and ketones.',
      },
      { t: 'p', html: '<b>3D. Aromatic carbonyl compounds — electrophilic substitution</b>' },
      {
        t: 'p',
        html: 'Aromatic aldehydes and ketones (and, as seen in Topic 03, aromatic carboxylic acids) still react at the <b>ring</b>. In every case the carbonyl-containing group (–CHO, –COR, –COOH) is electron-withdrawing, so it acts as a <b>deactivating and meta-directing</b> group: electrophilic substitution is slower than on benzene and the incoming group prefers the meta position. <b>Reasoning:</b> the carbonyl pulls electron density out of the ring (especially from the ortho/para positions via resonance), leaving the meta position comparatively electron-rich and therefore the site of attack.',
      },
      { t: 'p', html: '<b>3E. Reading uses back from structure</b>' },
      {
        t: 'p',
        html: 'Uses are not arbitrary — they follow from the chemistry. Formaldehyde’s small, very reactive carbonyl makes it ideal for cross-linking into rigid resins (bakelite); acetic acid’s mild acidity and safety make it food-grade vinegar; adipic acid’s two carboxyl groups let it link end-to-end with a diamine into the long nylon-6,6 chain; the long greasy tails of fatty acids, capped by a salt-forming carboxylate head, are exactly what a soap needs (oil-loving tail, water-loving head).',
      },
      { t: 'p', html: '<b>3F. Where these physical properties drive the chemistry</b>' },
      {
        t: 'p',
        html: 'The physical properties are not a stand-alone topic to be memorised in isolation — they explain choices made elsewhere in the chapter, and recognising the links is what turns scattered facts into mastery.',
      },
      {
        t: 'p',
        html: '• <b>Purification via the bisulphite adduct (Topic 02).</b> The sodium hydrogensulphite addition compound is a crystalline salt: soluble in water, but thrown out as a solid from the saturated bisulphite solution used to make it. That physical behaviour is the whole point — it lets a chemist pull an aldehyde (or a methyl ketone) out of a mixture as a solid, wash away impurities, and then regenerate the pure carbonyl with dilute acid or alkali.<br>• <b>Why formalin is aqueous (this topic).</b> Methanal is a gas, awkward to handle and store, so it is sold as the convenient 40% aqueous solution, formalin — a direct consequence of its small size and high water solubility.<br>• <b>One group behind both acid strength and boiling point (Topic 03).</b> The polarised, resonance-rich –COOH group does two jobs: its O–H and C=O give the double hydrogen bonding behind the acids’ record-high boiling points, and its resonance-stabilised anion makes carboxylic acids the strongest acids among the families of this chapter and the last (alcohols, phenols, aldehydes, ketones); sulphonic acids and picric acid are stronger still. One structural feature, two consequences.<br>• <b>Solubility and detection.</b> The brisk water solubility of small acids is why the sodium bicarbonate test (effervescence of CO<sub>2</sub>) is a clean aqueous-phase identification — the chemistry and the physical behaviour cooperate.',
      },
      {
        t: 'p',
        html: 'Seeing these threads means a student can reconstruct facts rather than recall them blindly: if you remember that an aldehyde has a polar carbonyl but no O–H, you can derive its boiling-point rank, its water solubility, and even why bisulphite purification works — without a single rote-learned table.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Boiling-point ordering with reasoning',
        q: 'Arrange in <b>increasing</b> order of boiling point and justify: butane, butan-1-ol, butanal, butanoic acid (all four-carbon).',
        steps: [
          'Identify the dominant force in each (all have four carbons; the molar masses, 58, 72, 74 and 88, rise in the same order, but the force decides: butanal and butan-1-ol differ by only 2 in mass yet by about 43 K in boiling point):',
          'Butane — only van der Waals dispersion → <b>lowest</b>.',
          'Butanal — polar carbonyl → dipole–dipole, stronger than butane.',
          'Butan-1-ol — O–H hydrogen bonding, stronger than dipole–dipole.',
          'Butanoic acid — double-hydrogen-bonded dimer → <b>highest</b>.',
          'State the rule (“boiling point rises with the strength of intermolecular attraction”) to secure the reasoning mark.',
        ],
        ans: 'butane < butanal < butan-1-ol < butanoic acid',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Most water-soluble',
        q: 'Which is <b>most</b> soluble in water: pentan-1-ol, pentanal, propanone, decanoic acid?',
        steps: [
          '<b>The trap.</b> Students see “acid” and assume it must be most soluble (acids H-bond strongly) — forgetting that decanoic acid drags a ten-carbon hydrophobic tail.',
          '<b>Mental shortcut.</b> Best solubility = strongest polar head <b>and</b> shortest tail. Propanone is a tiny three-carbon ketone that is miscible with water in all proportions; decanoic acid’s huge tail makes it essentially insoluble despite the acid head.',
          'Rank by tail length once the head can H-bond; short tail wins.',
        ],
        ans: 'propanone (acetone)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Identify from physical clues + use',
        q: 'A water-miscible liquid with a sharp, pungent odour gives a silver mirror with Tollens’ reagent and is a starting material for making acetic acid. Identify it, classify its dominant intermolecular force, and name one use.',
        steps: [
          'Tollens’-positive → an <b>aldehyde</b>. “Water-miscible, sharp odour, starting material for acetic acid” identifies <b>ethanal (acetaldehyde)</b>, CH<sub>3</sub>CHO — its small size explains the water miscibility and pungency, and it is the classic feedstock for acetic acid (most acetic acid is now made from methanol and carbon monoxide).',
          'Dominant intermolecular force: <b>dipole–dipole</b> (polar carbonyl, with no O–H to hydrogen-bond).',
          'Use: starting material for acetic acid, ethyl acetate, vinyl acetate, polymers and drugs.',
          'The exam rewards cross-linking a physical clue (solubility/odour), a chemical test (Tollens’), and a use into a single identification.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The dimer subtlety',
        q: 'Ethanoic acid (mol. mass 60) and propan-1-ol (mol. mass 60) have nearly identical molecular masses, yet ethanoic acid boils markedly higher (391 K vs 370 K). Explain the difference using intermolecular forces, and predict how the gap would change if the comparison were made in the gas phase at very low pressure.',
        steps: [
          'Both molecules hydrogen-bond, so mass alone does not explain the gap. The decisive difference is that ethanoic acid forms a <b>cyclic dimer</b> held together by two hydrogen bonds simultaneously, so the species that must be separated on boiling is effectively a unit of about double the molar mass (~120) with two strong bonds to break, whereas propan-1-ol forms a chain of single hydrogen bonds that are individually easier to disrupt. More hydrogen bonds per association event → more energy to vaporise → higher boiling point.',
          '<b>Gas-phase prediction:</b> the dimer persists in the vapour near the boiling point, but dimerisation, 2 CH<sub>3</sub>COOH ⇌ (CH<sub>3</sub>COOH)<sub>2</sub>, reduces the number of gas molecules, so by Le Chatelier’s principle very low pressure favours the monomers. At very low pressure the vapour is therefore largely monomeric and the acid’s “double molar mass” behaviour fades. The Advanced-level insight is that the acid’s anomaly is a dimerisation effect, not a simple per-molecule hydrogen-bond-strength effect.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain why aldehydes and ketones have higher boiling points than ethers of comparable molecular mass but lower than alcohols.',
            a: 'Aldehydes/ketones have dipole–dipole attraction (polar C=O), stronger than ethers’ weak polarity; but they lack an O–H hydrogen-bond donor, so they cannot hydrogen-bond like alcohols → intermediate boiling points.',
          },
          {
            q: '[NEET] Which has the highest boiling point: pentane, pentan-1-ol, pentanal, or pentanoic acid?',
            a: 'Pentanoic acid (dimeric hydrogen bonding).',
          },
          {
            q: '[JEE Main] Arrange in increasing order of water solubility: hexan-1-ol, ethanol, butan-1-ol, methanol.',
            a: 'Hexan-1-ol < butan-1-ol < ethanol < methanol (shorter hydrophobic tail → more soluble). Strictly, ethanol and methanol are both miscible with water in all proportions, so the last step shows the trend rather than a measurable difference.',
          },
          {
            q: '[JEE Main] Name the carbonyl/acid compound used for each: (i) preserving biological specimens; (ii) making nylon-6,6; (iii) as table vinegar; (iv) as a food preservative.',
            a: '(i) methanal/formalin; (ii) hexanedioic (adipic) acid; (iii) ethanoic (acetic) acid; (iv) sodium benzoate.',
          },
          {
            q: '[JEE Advanced] Two isomeric ketones of formula C<sub>5</sub>H<sub>10</sub>O — pentan-2-one (straight chain) and 3-methyl​butan-2-one (branched) — are compared. Predict which boils higher and justify using molecular shape.',
            a: 'The straight-chain pentan-2-one boils higher than its branched isomer; branching makes the molecule more compact, reducing surface contact and dispersion forces, so the branched isomer boils lower.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Why do carboxylic acids have higher boiling points than alcohols of comparable molecular mass?',
        opts: [
          { label: 'acids are ionic', nudge: '<b>(a)</b> acids are covalent, not ionic.' },
          { label: 'acids form a doubly hydrogen-bonded dimer', nudge: null },
          { label: 'acids have a larger dipole only', nudge: '<b>(c)</b> dipole magnitude is not the dominant factor here.' },
          {
            label: 'alcohols cannot hydrogen-bond',
            nudge: '<b>(d)</b> is false — alcohols do hydrogen-bond, just as single chains.',
          },
        ],
        correct: 1,
        solution: 'Two acid molecules clasp into a cyclic dimer held by two hydrogen bonds, so more bonding must be broken to vaporise.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>least</b> soluble in water?',
        opts: [
          {
            label: 'methanal',
            nudge: '<b>(a)</b> Methanal, the smallest carbonyl, is very soluble in water: it is sold as 40% formalin.',
          },
          { label: 'propanone', nudge: '<b>(b)</b> Propanone is miscible with water in all proportions.' },
          { label: 'ethanal', nudge: '<b>(c)</b> Ethanal, a two-carbon aldehyde, is miscible with water in all proportions.' },
          { label: 'heptan-2-one', nudge: null },
        ],
        correct: 3,
        solution: 'Its seven-carbon hydrophobic chain outweighs the polar carbonyl. The trap is treating all ketones as equally soluble.',
      },
      {
        t: 'mcq',
        q: 'The carbonyl group on a benzene ring directs an incoming electrophile to the:',
        opts: [
          {
            label: 'ortho position only',
            nudge: '<b>(a)</b> Ortho attack belongs to activating, electron-donating groups (and the halogens), which send the electrophile to ortho and para together; the electron-withdrawing carbonyl does the opposite.',
          },
          {
            label: 'para position only',
            nudge: '<b>(b)</b> Para attack, likewise, belongs to the ortho/para directors (activating groups and the halogens), not to the electron-withdrawing carbonyl.',
          },
          { label: 'meta position', nudge: null },
          {
            label: 'ortho and para positions',
            nudge: '<b>(d)</b> Ortho and para is the pattern of activating, electron-donating groups (and of the halogens); the carbonyl withdraws electrons and directs meta.',
          },
        ],
        correct: 2,
        solution: 'The electron-withdrawing carbonyl deactivates the ring and is meta-directing.',
      },
      {
        t: 'mcq',
        q: 'Formalin is:',
        opts: [
          {
            label: 'pure liquid methanal',
            nudge: '<b>(a)</b> methanal is a gas, not a liquid, at room temperature.',
          },
          { label: 'a 40% aqueous solution of methanal', nudge: null },
          { label: 'a polymer of methanal', nudge: '<b>(c)</b> describes paraformaldehyde, a different material.' },
          { label: 'methanoic acid in water', nudge: '<b>(d)</b> confuses the aldehyde with the acid.' },
        ],
        correct: 1,
        solution: 'Formalin is the ~40% aqueous solution of formaldehyde used to preserve specimens.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Comparing boiling points without equalising mass.</b> The “hydrocarbon < ether < aldehyde < alcohol < acid” rule assumes comparable molecular mass; a heavy hydrocarbon can out-boil a light acid. Always compare like with like.',
          '<b>Thinking aldehydes/ketones hydrogen-bond like alcohols.</b> They have dipole–dipole attraction but <b>no O–H donor</b>, so they boil below alcohols of similar mass — a very common slip.',
          '<b>Forgetting the hydrophobic tail in solubility.</b> A strong polar head does not guarantee water solubility if the carbon chain is long (decanoic acid is nearly insoluble). Weigh head against tail.',
          '<b>Calling the aromatic carbonyl ring ortho/para-directing.</b> Electron-withdrawing carbonyl groups are deactivating and <b>meta</b>-directing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy).</b> For any boiling-point or solubility ranking, do a 5-second “force audit”: label each molecule with its strongest intermolecular force (dispersion / dipole / H-bond / dimer), order by that first, then break ties with mass and branching. For solubility, additionally eyeball the tail length. For uses questions, anchor on the four classics that examiners love — <b>formalin (preserving), vinegar (acetic acid), nylon-6,6 (adipic acid), sodium benzoate (preservative)</b> — and you will cover most marks.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Boiling point at comparable mass',
            note: 'hydrocarbon < ether < aldehyde ≈ ketone < alcohol < carboxylic acid (force ladder: dispersion < dipole–dipole < H-bond < dimer).',
          },
          {
            f: 'Aldehydes/ketones',
            note: 'dipole–dipole (polar C=O, dipole 2.3–2.9 D); higher b.p. than hydrocarbons/ethers, <b>lower than alcohols</b> (no O–H donor).',
          },
          {
            f: 'Water solubility',
            note: 'small members miscible (H-bond with water); falls sharply as the hydrocarbon tail grows; all soluble in organic solvents. Branching lowers b.p.',
          },
          {
            f: 'Aromatic carbonyl groups (–CHO, –COR, –COOH)',
            note: 'deactivating, <b>meta-directing</b>.',
          },
          {
            f: 'Uses (ald/ket)',
            note: 'formalin (specimens), bakelite/urea–formaldehyde (formaldehyde); acetic-acid precursor (acetaldehyde); perfumery/dyes (benzaldehyde); solvents (acetone, MEK); flavours (vanillin, camphor).',
          },
          {
            f: 'Uses (acids)',
            note: 'leather, textile and electroplating (formic); vinegar/solvent (acetic); nylon-6,6 (adipic); preservative (sodium benzoate); soaps/detergents (fatty acids).',
          },
        ],
        aids: [
          '“He Eats Apples Like Candy” → <b>H</b>ydrocarbon, <b>E</b>ther, <b>A</b>ldehyde/ketone, a<b>L</b>cohol, <b>C</b>arboxylic acid — increasing boiling point.',
          '“No O–H, no top spot” (aldehydes/ketones can’t beat alcohols).',
          '“Short tail dissolves, long tail floats” (water solubility).',
          '“EWG on a ring → meta, and slows the ring down.”',
        ],
      },
    ],
  },
];
