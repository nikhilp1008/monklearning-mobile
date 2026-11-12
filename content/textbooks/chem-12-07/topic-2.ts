import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topic 02, Physical & Chemical Properties of Alcohols and Phenols:
 * pp. 323–331 of the Class 12 Chemistry Master Reference, word for word, split
 * at its Sections 1 to 8. Figure 7.3, the acidity ladder (caption p. 324, drawn
 * p. 325), sits in "Key definitions, reactions and acidity data" after the pKa
 * anchors it illustrates; it is redrawn in lib/diagrams/chemistry-12-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 323–331 ─────────────────────────
  {
    n: '02',
    title: 'Physical & Chemical Properties of Alcohols and Phenols',
    kalam: 'If you internalise why the –OH behaves as it does, almost every question here becomes predictable.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the scoring heart of the chapter. CBSE Boards lean on 3–5 mark reaction questions — Reimer–Tiemann, Kolbe, “distinguish 1°/2°/3°,” and acidity ordering. NEET fires single-shot MCQs on acidity comparison, the iodoform test, and the Lucas test. JEE Main builds multi-step problems and substituent-effect acidity, and JEE Advanced probes mechanism and selectivity (which carbon oxidises, which position an electrophile attacks). If you internalise why the –OH behaves as it does, almost every question here becomes predictable.',
      },
      {
        t: 'p',
        html: 'Earlier we built and named these molecules. Now we ask: how do they behave? Everything traces back to one hard-working group, the <b>–OH</b> (and, for ethers, the C–O–C bridge, which we set aside until Topic 03).',
      },
      {
        t: 'p',
        html: '<b>Why alcohols boil so high.</b> Think of a crowded railway platform. Alkane molecules are strangers who never hold hands — they drift apart easily, so alkanes boil low. Alcohol molecules each carry an –OH, a hand that grips a neighbour’s oxygen through a <b>hydrogen bond</b>. To boil the liquid you must pry all those hands apart, which costs extra energy. That is why an alcohol boils much higher than an alkane, ether, or haloalkane of comparable molecular mass. Ethers have no O–H hand of their own, so they boil low, like the alkanes.',
      },
      {
        t: 'p',
        html: '<b>Why alcohols dissolve in water (up to a point).</b> The –OH end happily shakes hands with water (hydrogen bonding), so small alcohols like ethanol mix with water in all proportions. But as the carbon tail lengthens, the oily, water-fearing part of the molecule grows and eventually overwhelms the friendly –OH; solubility falls off with chain length. A polyhydric alcohol, carrying several hands, stays soluble longer.',
      },
      {
        t: 'p',
        html: '<b>Two ways the –OH reacts.</b> Picture the C–O–H unit. Chemistry attacks it at one of two seams:<br>• <b>The O–H seam</b> — give up the hydrogen as H<sup>+</sup>. This is <b>acidity</b>. How willingly the proton leaves, and how stable the leftover negative ion is, decides the acid strength.<br>• <b>The C–O seam</b> — give up the whole –OH (or replace it). This underlies <b>substitution</b> (–OH → halide, as in the Lucas test) and <b>dehydration</b> (–OH and an adjacent H leave together as water, giving an alkene).',
      },
      {
        t: 'p',
        html: '<b>Why phenol is the troublemaker.</b> Think about it this way: in an alcohol the –OH is bolted to a quiet sp<sup>3</sup> carbon, but in <b>phenol</b> it sits on a benzene ring — a crowded, electron-sharing marketplace. The ring tugs electron density away from the oxygen, so the O–H lets its proton go more readily: <b>phenol is markedly more acidic than any simple alcohol, and even more acidic than water.</b> The same electron-sharing runs the other way too: the –OH pumps electron density into the ring, making it electron-rich and therefore strongly <b>activated toward electrophiles</b>, which attack at the ortho and para positions. So phenol does two families of reactions — acidic O–H reactions, and electrophilic substitutions on the ring.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions to keep in mind.</b><br>• <b>Tertiary alcohols resist ordinary oxidation</b> — the carbinol carbon has no hydrogen to remove, so there is nothing for a mild oxidant to pull off.<br>• <b>Methanol and primary alcohols other than ethanol give no iodoform</b> — the test needs a CH<sub>3</sub>CH(OH)– unit.<br>• <b>Phenol is not acidic enough to react with sodium bicarbonate</b> (unlike carboxylic acids) — a clean way to tell them apart, since phenol is weaker than carbonic acid.',
      },

      { t: 'part', title: 'Key definitions, reactions and acidity data' },
      {
        t: 'p',
        html: 'This topic is reaction-rich rather than formula-rich; the “data” worth fixing in memory is the <b>acidity ladder</b> and a few reagent definitions.',
      },
      {
        t: 'formula',
        kicker: 'Acidity ordering (learn as one chain)',
        main: 'carboxylic acid > carbonic acid > phenol > water > alcohol',
        legend: ['> = is a stronger acid than'],
        note: null,
      },
      {
        t: 'p',
        html: 'with approximate p<i>K</i><sub>a</sub> anchors: carboxylic acids ≈ 4–5, carbonic acid ≈ 6.4, phenol ≈ 10, water ≈ 15.7, ethanol ≈ 15.9, a 3° alcohol ≈ 18. The smaller the p<i>K</i><sub>a</sub>, the stronger the acid.',
      },
      { t: 'fig', id: 'c12-07-fig-7.3' },
      {
        t: 'formula',
        kicker: 'Within alcohols',
        main: 'CH<sub>3</sub>OH > 1° > 2° > 3°',
        legend: [
          'CH<sub>3</sub>OH = methanol',
          '1°, 2°, 3° = primary, secondary, tertiary alcohols',
          '> = is a stronger acid than',
          'In water, as NCERT explains it: the +I (electron-releasing) effect of alkyl groups; poorer solvation of the bulkier alkoxide ions adds to it',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Among substituted phenols</b> — electron-<b>withdrawing</b> groups (–NO<sub>2</sub>, –X, –CHO, –CN) at ortho/para raise acidity (picric acid, 2,4,6-​trinitrophenol, is very strong); electron-<b>releasing</b> groups (–CH<sub>3</sub>: the cresols, –OR, –NR<sub>2</sub>) lower it (–OR and –NR<sub>2</sub> release electrons by resonance only from ortho or para; at meta an –OR group’s −I pull wins, so m-methoxyphenol, p<i>K</i><sub>a</sub> ≈ 9.6, is slightly more acidic than phenol).',
      },
      {
        t: 'p',
        html: '<b>Reagent definitions:</b>',
      },
      {
        t: 'def',
        term: 'Lucas reagent',
        html: 'an equimolar mixture of <b>concentrated HCl and anhydrous ZnCl<sub>2</sub></b>, used to distinguish 1°, 2°, 3° alcohols by the speed of turbidity.',
      },
      {
        t: 'def',
        term: 'Reimer–Tiemann conditions',
        html: 'CHCl<sub>3</sub> + aqueous NaOH, ~340 K, then acidification.',
      },
      {
        t: 'def',
        term: 'Kolbe (Kolbe–Schmitt) conditions',
        html: 'sodium phenoxide + CO<sub>2</sub>, ~400 K under pressure, then acidification.',
      },
      {
        t: 'p',
        html: '<b>Physical-property data.</b> For molecules of comparable mass (~58–60 u) the boiling points climb as intermolecular forces strengthen: n-butane (273 K) < methoxyethane, an ether (281 K) < propanal (322 K) < propanone (329 K) < propan-1-ol (370 K) — the alcohol sits highest because of O–H···O hydrogen bonding. <b>Phenol</b> itself is a colourless crystalline solid (m.p. ≈ 314 K, b.p. ≈ 455 K), moderately soluble in water, that acquires a pink tinge on standing in air.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>(A) Acidity — the O–H reactions, with reasoning</b>',
      },
      {
        t: 'p',
        html: 'Both alcohols and phenols react with <b>active metals</b> (Na, K, Al) to release hydrogen and form alkoxides/phenoxides, confirming a weakly acidic O–H. <b>Phenol additionally reacts with aqueous NaOH</b> to give sodium phenoxide; alcohols do not — the line that proves phenol is the stronger acid.',
      },
      {
        t: 'p',
        html: '<b>Why phenol beats alcohols:</b> on losing H<sup>+</sup>, phenol gives the <b>phenoxide ion</b>, whose negative charge is delocalised over the ring (oxygen + the ortho/para carbons). That spreading stabilises the anion, so the proton leaves readily. An <b>alkoxide</b> ion from an alcohol has no such resonance — the charge stays localised on oxygen, the anion is less stable, and the alcohol is barely acidic. <b>Why substituents shift it:</b> an electron-withdrawing group at ortho/para drains still more charge off the phenoxide, stabilising it further and raising acidity; an electron-releasing group does the opposite.',
      },
      {
        t: 'p',
        html: '<b>(B) Esterification (an O–H reaction with the C–O of the acid)</b>',
      },
      {
        t: 'p',
        html: 'Alcohols and phenols react with carboxylic acids, acid chlorides, or acid anhydrides to give <b>esters</b>. With a carboxylic acid the reaction needs conc. H<sub>2</sub>SO<sub>4</sub> (catalyst + dehydrating agent) and is <b>reversible</b>, so water is removed to drive it forward; with an acid chloride a base such as pyridine mops up the HCl. <b>A confirmed mechanistic point:</b> isotopic labelling shows it is the <b>–OH of the acid</b>, not of the alcohol, that is lost as water (nucleophilic acyl substitution). Bulky groups slow it down, so the ease of esterification of alcohols runs CH<sub>3</sub>OH > 1° > 2° > 3°.',
      },
      {
        t: 'p',
        html: '<b>Mechanism (acid-catalysed):</b> the acid first protonates the carbonyl oxygen, which makes the carbonyl carbon more electrophilic; the alcohol oxygen then adds to it, giving a tetrahedral intermediate. A proton transfer turns the acid’s –OH into a –OH<sub>2</sub><sup>+</sup> group — now a good leaving group — which departs as neutral water. Loss of the extra proton from the protonated ester gives the final ester. Every step is reversible, which is exactly why removing water (or using excess reactant) is needed to push the equilibrium toward product.',
      },
      {
        t: 'p',
        html: '<b>(C) Reactions cleaving the C–O bond of alcohols</b>',
      },
      {
        t: 'p',
        html: '<b>1. With hydrogen halides — the Lucas test.</b> Alcohols react with conc. HCl/anhydrous ZnCl<sub>2</sub> to give an alkyl chloride, which separates as an oily turbidity:',
      },
      {
        t: 'formula',
        kicker: 'Lucas test',
        main: 'R–OH + HCl →<sup>anhyd. ZnCl₂</sup> R–Cl + H<sub>2</sub>O',
        legend: [
          'R–OH = alcohol, R an alkyl group',
          'ZnCl<sub>2</sub> = anhydrous zinc chloride (helps the –OH leave)',
          'R–Cl = alkyl chloride, the oily turbidity',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'For 3° and 2° alcohols the reaction goes by an S<sub>N</sub>1 path (ZnCl<sub>2</sub> helps the –OH leave), so it tracks <b>carbocation stability</b>: turbidity is <b>immediate for 3°</b> (and for benzylic/allylic, whose cations are resonance-stabilised), appears in <b>about 5 minutes for 2°</b>, and <b>does not occur at room temperature for 1°</b>. A 1° alcohol cannot form a stable carbocation; on heating it reacts slowly by S<sub>N</sub>2 instead. Rate order 3° > 2° > 1°.',
      },
      {
        t: 'p',
        html: '<b>2. Dehydration to alkenes.</b> Heating with a protic acid (conc. H<sub>2</sub>SO<sub>4</sub> or H<sub>3</sub>PO<sub>4</sub>) removes H<sub>2</sub>O to give an alkene (E1 for 2° and 3° alcohols; NCERT draws the same carbocation path for ethanol, though a 1° alcohol really loses water and the β-hydrogen together, E2). The major product follows <b>Saytzeff’s rule</b> (the more substituted alkene), and the ease of dehydration is 3° > 2° > 1°, again because a more stable carbocation forms more easily. (NCERT’s conditions: a 3° alcohol needs only 20% H<sub>3</sub>PO<sub>4</sub> at 358 K, a 2° alcohol 85% H<sub>3</sub>PO<sub>4</sub> at 440 K, and ethanol, a 1° alcohol, conc. H<sub>2</sub>SO<sub>4</sub> at 443 K.)',
      },
      {
        t: 'p',
        html: '<b>3. Oxidation and dehydrogenation.</b> A primary alcohol oxidises to an <b>aldehyde</b> with a mild oxidant (and on to a <b>carboxylic acid</b> with a strong one such as KMnO<sub>4</sub> or acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>); a secondary alcohol gives a <b>ketone</b>; a <b>tertiary alcohol resists oxidation</b> (no hydrogen on the carbinol carbon). Catalytic dehydrogenation over hot copper (~573 K) parallels this: 1° → aldehyde, 2° → ketone, while a 3° alcohol instead <b>dehydrates</b> to an alkene. These differences are themselves a way to tell the three classes apart.',
      },
      {
        t: 'p',
        html: '<b>4. Haloform (iodoform) reaction.</b> Ethanol and any alcohol bearing the CH<sub>3</sub>CH(OH)– unit, on warming with I<sub>2</sub> and NaOH, give a yellow precipitate of <b>iodoform (CHI<sub>3</sub>)</b>. Methanol and primary alcohols lacking that unit do <b>not</b> respond — so the test distinguishes ethanol from, say, propan-1-ol.',
      },
      {
        t: 'p',
        html: '<b>5. Reaction with inorganic acids (inorganic esters).</b> Besides organic acids, alcohols react with inorganic oxy-acids to form esters. With concentrated H<sub>2</sub>SO<sub>4</sub> ethanol gives <b>ethyl hydrogen sulphate</b>, and with concentrated HNO<sub>3</sub> it gives <b>ethyl nitrate</b>:',
      },
      {
        t: 'formula',
        kicker: 'Reaction with inorganic acids',
        main: 'C<sub>2</sub>H<sub>5</sub>OH + HO–SO<sub>2</sub>–OH → C<sub>2</sub>H<sub>5</sub>O–SO<sub>2</sub>–OH + H<sub>2</sub>O',
        legend: [
          'C<sub>2</sub>H<sub>5</sub>OH = ethanol',
          'HO–SO<sub>2</sub>–OH = sulphuric acid, H<sub>2</sub>SO<sub>4</sub>',
          'C<sub>2</sub>H<sub>5</sub>O–SO<sub>2</sub>–OH = ethyl hydrogen sulphate',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>6. Reaction with aldehydes.</b> In the presence of dry HCl gas an alcohol adds to an aldehyde, first to a <b>hemiacetal</b> and then, with a second molecule of alcohol, to an <b>acetal</b> (a gem-diether) — the basis of carbonyl protection met later in the course.',
      },
      {
        t: 'p',
        html: '<b>(C′) Distinguishing 1°, 2° and 3° alcohols — the full toolkit</b>',
      },
      {
        t: 'p',
        html: 'Three independent tests separate the classes, and a complete answer names more than one. <b>Lucas test</b> (above) ranks them by turbidity speed (3° immediate, 2° ~5 min, 1° none at room temperature). <b>Oxidation / catalytic dehydrogenation</b> (above) gives an aldehyde then acid from 1°, a ketone from 2°, and merely an alkene (dehydration) from 3°. <b>Victor Meyer’s test</b> converts the alcohol stepwise to a nitroalkane, which is then treated with nitrous acid and made alkaline: a <b>1° alcohol gives a blood-red colour, a 2° alcohol a blue colour, and a 3° alcohol no colour.</b>',
      },
      {
        t: 'p',
        html: '<b>(D) Electrophilic substitution on phenol</b>',
      },
      {
        t: 'p',
        html: 'The –OH activates the ring and directs incoming electrophiles to ortho and para.',
      },
      {
        t: 'p',
        html: '<b>Nitration.</b> With <b>dilute</b> HNO<sub>3</sub> at about 298 K (25 °C), phenol gives a mixture of <b>o- and p-nitrophenol</b>. The two are separated by <b>steam distillation</b>: o-nitrophenol is steam-volatile (it has intramolecular H-bonding, a closed chelate, so molecules don’t associate), whereas p-nitrophenol associates by intermolecular H-bonding and is far less volatile. With <b>concentrated</b> HNO<sub>3</sub> phenol is converted to <b>2,4,6-​trinitrophenol (picric acid)</b> — a strong acid because three –NO<sub>2</sub> groups facilitate proton release.',
      },
      {
        t: 'p',
        html: '<b>Halogenation.</b> With <b>bromine water</b>, phenol gives a white precipitate of <b>2,4,6-​tribromophenol</b> (all three activated positions brominate; no catalyst is needed because phenol is so activated). With <b>bromine in a low-polarity solvent (CS<sub>2</sub>) at low temperature</b>, monobromination dominates, giving mainly <b>p-bromophenol</b>.',
      },
      {
        t: 'p',
        html: '<b>Sulphonation.</b> With concentrated H<sub>2</sub>SO<sub>4</sub>, phenol gives <b>o-phenolsulphonic acid at low temperature</b> and predominantly the <b>p-isomer at higher temperature</b> (the para product is the thermodynamically favoured one).',
      },
      {
        t: 'p',
        html: '<b>(E) Other characteristic reactions of phenol</b>',
      },
      {
        t: 'p',
        html: '<b>Reimer–Tiemann reaction.</b> Phenol + CHCl<sub>3</sub> + aqueous NaOH (~340 K), then acidification, installs a <b>–CHO</b> at the ortho position, giving <b>salicylaldehyde</b> (2-hydroxy​benzaldehyde). <b>Mechanism:</b> NaOH deprotonates chloroform to give a trichloromethyl carbanion, which loses Cl<sup>−</sup> to form the true electrophile, <b>dichlorocarbene</b> (:CCl<sub>2</sub>). This attacks the electron-rich phenoxide ring; the resulting benzal chloride is hydrolysed by alkali to the aldehyde. (With CCl<sub>4</sub> instead of CHCl<sub>3</sub>, the product is <b>salicylic acid</b>.)',
      },
      {
        t: 'p',
        html: '<b>Kolbe (Kolbe–Schmitt) reaction.</b> Sodium phenoxide absorbs CO<sub>2</sub> under pressure (~400 K); after acidification this yields <b>salicylic acid</b> (2-hydroxybenzoic acid). Salicylic acid is the gateway to <b>aspirin</b> (its acetyl ester) and <b>methyl salicylate</b> (oil of wintergreen).',
      },
      {
        t: 'p',
        html: '<b>Reaction with zinc dust.</b> Heating phenol with zinc dust replaces –OH by –H, giving <b>benzene</b>.',
      },
      {
        t: 'p',
        html: '<b>Friedel–Crafts acetylation.</b> With acetyl chloride and anhydrous AlCl<sub>3</sub>, phenol gives o- and <b>p-hydroxy​acetophenone</b>; with phenol itself the –OH is usually acetylated first, so the ring product is often obtained after a Fries-type rearrangement of the initially formed ester.',
      },
      {
        t: 'p',
        html: '<b>Gattermann formylation.</b> Phenol treated with hydrogen cyanide and HCl gas in the presence of anhydrous AlCl<sub>3</sub>, followed by hydrolysis, gives mainly <b>p-hydroxy​benzaldehyde</b> — a ring-formylation complementary to the ortho-selective Reimer–Tiemann.',
      },
      {
        t: 'p',
        html: '<b>Oxidation.</b> Phenol oxidised by chromic acid gives the conjugated diketone <b>benzoquinone</b>; in air, phenols darken slowly to quinone mixtures.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Predict the organic product when phenol is treated with (i) bromine water and (ii) dilute nitric acid at 298 K. Why does phenol need no Lewis-acid catalyst for bromination, unlike benzene?',
        steps: [
          '(i) Bromine water brominates all three activated positions → <b>2,4,6-​tribromophenol</b> (white precipitate).',
          '(ii) Dilute HNO<sub>3</sub> at 298 K → a mixture of <b>o- and p-nitrophenol</b>.',
          'The –OH group strongly activates the ring by donating electron density (resonance), so phenol reacts with bromine itself; benzene, lacking such activation, needs FeBr<sub>3</sub>, a Lewis acid that polarises Br<sub>2</sub> into a stronger electrophile.',
        ],
        ans: '(i) 2,4,6-​tribromophenol, a white precipitate; (ii) a mixture of o- and p-nitrophenol. No Lewis acid is needed because the –OH activates the ring.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these gives a positive iodoform test: methanol, ethanol, propan-1-ol, propan-2-ol?',
        steps: [
          'Scan for the CH<sub>3</sub>CH(OH)– unit, don’t write mechanisms.',
          'Methanol — no. Ethanol (CH<sub>3</sub>CH<sub>2</sub>OH, i.e. CH<sub>3</sub>CH(OH)H) — <b>yes</b>. Propan-1-ol (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH) — no. Propan-2-ol (CH<sub>3</sub>CH(OH)CH<sub>3</sub>) — <b>yes</b>.',
          '<b>Speed tip:</b> only alcohols oxidisable to a CH<sub>3</sub>CO– fragment respond.',
        ],
        ans: 'Ethanol and propan-2-ol.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Arrange in increasing order of acidity: ethanol, phenol, p-nitrophenol, p-cresol, and water. Justify the two extremes.',
        steps: [
          'Build from the ladder: alcohols are the weakest, phenols the middle, and substituents tune the phenols.',
          '<b>Ethanol is weakest:</b> its alkoxide is not resonance-stabilised, and the ethyl group’s +I effect destabilises the anion further.',
          '<b>p-Nitrophenol is strongest:</b> the electron-withdrawing –NO<sub>2</sub> at para drains negative charge off the phenoxide by resonance, stabilising the anion and easing proton loss; p-cresol’s –CH<sub>3</sub> (electron-releasing) does the reverse, so it sits just below phenol.',
        ],
        ans: 'ethanol < water < p-cresol < phenol < p-nitrophenol',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'A bottle contains one of butan-1-ol, butan-2-ol, or 2-methyl​propan-2-ol. Two tests are run: (a) Lucas reagent gives turbidity in about four minutes; (b) the iodoform test is positive. Identify the alcohol and explain how each test narrows the field.',
        steps: [
          '<b>Lucas (a):</b> immediate turbidity ⇒ 3°/benzylic/allylic; ~5 min ⇒ 2°; no reaction ⇒ 1°. A four-minute response points to a <b>secondary</b> alcohol, eliminating butan-1-ol (1°, would not react) and 2-methyl​propan-2-ol (3°, would be immediate).',
          '<b>Iodoform (b):</b> positive requires a CH<sub>3</sub>CH(OH)– unit. <b>Butan-2-ol</b>, CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>, has exactly that and is the only secondary candidate among the three; it is oxidised to CH<sub>3</sub>CO– in situ and gives iodoform.',
          'The elegance is that (a) fixes the class and (b) fixes the substitution pattern — each test alone points to butan-2-ol, and together they confirm it.',
        ],
        ans: 'Both tests converge on <b>butan-2-ol</b>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write equations for (i) the Kolbe reaction of phenol and (ii) the Reimer–Tiemann reaction of phenol, naming the principal products.',
            a: '(i) sodium phenoxide + CO<sub>2</sub> (400 K, pressure) → sodium salicylate → (H<sup>+</sup>) salicylic acid; (ii) phenol + CHCl<sub>3</sub> + NaOH(aq), then H<sup>+</sup> → salicylaldehyde (o-hydroxy​benzaldehyde).',
          },
          {
            q: '[NEET] Which compound does <b>not</b> liberate CO<sub>2</sub> from aqueous NaHCO<sub>3</sub>: ethanoic acid, phenol, picric acid (2,4,6-​trinitrophenol)? Give the reason.',
            a: '<b>Phenol</b> — it is a weaker acid than carbonic acid, so it cannot displace CO<sub>2</sub> from bicarbonate (ethanoic and picric acids can).',
          },
          {
            q: '[JEE Main] Give the major organic product of (i) acid-catalysed dehydration of butan-2-ol and (ii) oxidation of the same alcohol with acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>. Name both.',
            a: '(i) but-2-ene (Saytzeff major); (ii) butan-2-one.',
          },
          {
            q: '[JEE Main] Explain, with the relevant hydrogen-bonding reasoning, why o-nitrophenol can be separated from p-nitrophenol by steam distillation.',
            a: 'o-nitrophenol forms an intramolecular H-bond (closed chelate) so it does not associate and is steam-volatile; p-nitrophenol associates via intermolecular H-bonding and is far less volatile.',
          },
          {
            q: '[JEE Advanced] A secondary alcohol gives a positive iodoform test and, on dehydration followed by ozonolytic work-up of the major alkene, yields only ethanal. Deduce the alcohol and outline your reasoning.',
            a: 'Butan-2-ol — iodoform-positive ⇒ CH<sub>3</sub>CH(OH)–; dehydration to but-2-ene whose ozonolysis gives only ethanal confirms the symmetric internal alkene.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct order of acid strength is:',
        opts: [
          { label: 'ethanol > water > phenol', nudge: '<b>(a)</b> inverts the whole order.' },
          { label: 'phenol > water > ethanol', nudge: null },
          { label: 'water > phenol > ethanol', nudge: '<b>(c)</b> wrongly ranks water above phenol — a common slip from forgetting phenoxide resonance.' },
          { label: 'phenol > ethanol > water', nudge: '<b>(d)</b> wrongly puts ethanol above water.' },
        ],
        correct: 1,
        solution: 'Phenoxide is resonance-stabilised (most acidic of the three), then water, then ethanol (alkoxide not stabilised, alkyl +I).',
      },
      {
        t: 'mcq',
        q: 'Which alcohol gives turbidity with Lucas reagent only on heating (no reaction at room temperature)?',
        opts: [
          { label: 'tert-butyl alcohol', nudge: '<b>(a)</b> is 3° (immediate).' },
          { label: 'sec-butyl alcohol', nudge: '<b>(b)</b> is 2° (~5 min).' },
          { label: 'butan-1-ol', nudge: null },
          { label: 'benzyl alcohol', nudge: '<b>(d)</b> is benzylic (immediate, resonance-stabilised cation).' },
        ],
        correct: 2,
        solution: 'A 1° alcohol forms the least stable carbocation, so it does not react at room temperature. The trap is treating “reacts slowly” as 1°; at room temperature a 1° simply does not react.',
      },
      {
        t: 'mcq',
        q: 'The electrophile in the Reimer–Tiemann reaction is:',
        opts: [
          { label: 'CHCl<sub>3</sub>', nudge: '<b>(a)</b> is the reagent, not the electrophile.' },
          { label: 'CCl<sub>3</sub><sup>−</sup>', nudge: '<b>(b)</b> is the precursor carbanion. Picking <b>(b)</b> means stopping one step short in the mechanism.' },
          { label: ':CCl<sub>2</sub> (dichlorocarbene)', nudge: null },
          { label: 'Cl<sup>+</sup>', nudge: '<b>(d)</b> is the electrophile of ring chlorination, not of this reaction.' },
        ],
        correct: 2,
        solution: 'NaOH deprotonates chloroform to CCl<sub>3</sub><sup>−</sup>, which loses Cl<sup>−</sup> to give the true electrophile <b>dichlorocarbene</b>.',
      },
      {
        t: 'mcq',
        q: 'On oxidation with acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, which alcohol does <b>not</b> give a carbonyl compound?',
        opts: [
          { label: 'propan-1-ol', nudge: '<b>(a)</b> → propanal/propanoic acid.' },
          { label: 'propan-2-ol', nudge: '<b>(b)</b> → propanone.' },
          { label: '2-methyl​propan-2-ol', nudge: null },
          { label: 'butan-2-ol', nudge: '<b>(d)</b> → butan-2-one.' },
        ],
        correct: 2,
        solution: 'A 3° alcohol has no hydrogen on the carbinol carbon, so it resists oxidation. Choosing any of <b>(a)</b>, <b>(b)</b>, <b>(d)</b> ignores that they all retain an oxidisable C–H.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Claiming tertiary alcohols oxidise to “a ketone or acid.”</b> They resist mild/standard oxidation — no α-hydrogen on the carbinol carbon. Only drastic conditions cleave the C–C skeleton.',
          '<b>Saying every alcohol gives the iodoform test.</b> It needs the CH<sub>3</sub>CH(OH)– unit; methanol and propan-1-ol fail.',
          '<b>Treating phenol like a carboxylic acid.</b> Phenol reacts with NaOH but <b>not</b> with NaHCO<sub>3</sub> (weaker than carbonic acid) — that bicarbonate test is the standard discriminator.',
          '<b>Inverting the Lucas order or the dehydration order.</b> Both run 3° > 2° > 1°, the order of carbocation stability; a 1° alcohol, with no stable cation to form, is slowest in both.',
          '<b>Forgetting why ortho/para nitrophenols separate.</b> It is intramolecular (o) vs intermolecular (p) hydrogen bonding, not a polarity argument.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> For acidity questions, don’t compute — place on the ladder (acid > carbonic > phenol > water > alcohol) and then nudge for substituents (EWG up, EDG down, for groups at ortho or para). For “identify the alcohol,” let two cheap tests partition the space: <b>Lucas fixes the class</b> (1°/2°/3°) and <b>iodoform fixes the CH<sub>3</sub>CH(OH)– pattern</b> — combine them instead of guessing. For phenol named reactions, the product is the giveaway: <b>–CHO ortho ⇒ Reimer–Tiemann</b>, <b>–COOH ortho ⇒ Kolbe</b>, <b>white ppt with Br water ⇒ 2,4,6-​tribromophenol</b>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Physical',
            note: 'alcohols H-bond, so they boil <b>far higher</b> than alkanes/ethers/haloalkanes of similar mass; bp rises with chain length, falls with branching; water-solubility falls as the carbon tail grows.',
          },
          {
            f: 'Acidity ladder',
            note: 'carboxylic acid > carbonic acid > <b>phenol</b> > water > alcohol; within alcohols CH<sub>3</sub>OH > 1° > 2° > 3°; EWG raises / EDG lowers phenol acidity (from ortho or para) (picric acid very strong; cresols weaker than phenol).',
          },
          {
            f: 'Alcohol C–O reactions',
            note: 'Lucas (S<sub>N</sub>1 for 3° and 2°, 3° > 2° > 1°) · dehydration (E1 for 3° and 2°, Saytzeff, 3° > 2° > 1°) · oxidation (1°→aldehyde→acid, 2°→ketone, <b>3° resists</b>) · iodoform needs CH<sub>3</sub>CH(OH)–.',
          },
          {
            f: 'Esterification',
            note: 'reversible with acid (conc. H<sub>2</sub>SO<sub>4</sub>, remove water); the <b>acid’s –OH</b> is lost, not the alcohol’s; ease CH<sub>3</sub>OH > 1° > 2° > 3°.',
          },
          {
            f: 'Phenol ring reactions (o/p-directing)',
            note: 'nitration (dil → o/p-nitrophenol, steam-separable; conc → picric acid) · bromine water → 2,4,6-​tribromophenol (white ppt) · <b>Reimer–Tiemann</b> → salicylaldehyde (via :CCl<sub>2</sub>) · <b>Kolbe</b> → salicylic acid → aspirin / methyl salicylate · Zn dust → benzene · oxidation → benzoquinone.',
          },
          {
            f: 'Discriminators',
            note: 'NaHCO<sub>3</sub> (acid vs phenol) · NaOH (phenol vs alcohol) · Lucas (alcohol class) · iodoform (CH<sub>3</sub>CH(OH)– in an alcohol; ethanal and methyl ketones also respond) · neutral FeCl<sub>3</sub> → violet (phenol).',
          },
        ],
        aids: ['“O–H gives the proton, C–O gives the seat” — acidity attacks the O–H; substitution and dehydration attack the C–O.'],
      },
    ],
  },
];
