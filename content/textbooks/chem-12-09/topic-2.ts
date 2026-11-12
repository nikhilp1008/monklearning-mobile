import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 02, Physical & Chemical Properties: pp. 439–447 of the
 * Class 12 Chemistry Master Reference (book 9.2), word for word, split at its
 * sections 9.2.1 to 9.2.8. Figure 9.4, the Hinsberg test (caption p. 442,
 * drawn p. 443), sits in "Key procedures and mechanisms" after the Hinsberg
 * bullets it illustrates; it is redrawn in lib/diagrams/chemistry-12-09.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 439–447 ─────────────────────────
  {
    n: '02',
    title: 'Physical & Chemical Properties',
    kalam: 'Basicity (ordering + justification) is the single most-tested idea of the chapter — a 2–3 mark CBSE staple, a recurring NEET MCQ, and a JEE Main one-liner.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Basicity (ordering + justification) is the single most-tested idea of the chapter — a 2–3 mark CBSE staple, a recurring NEET MCQ, and a JEE Main one-liner. The distinguishing reactions (carbylamine, Hinsberg, nitrous acid) appear as identification questions across all four exams, and aniline’s electrophilic substitution plus JEE-Advanced basicity edge cases (guanidine, amine inversion) round out the advanced tier.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we built the amine as substituted ammonia with a lone pair perched on nitrogen. <b>Almost every physical and chemical property of an amine traces back to two features of that lone pair: it can hydrogen-bond, and it can be donated to a proton or an electrophile.</b> Hold those two ideas and the whole topic unfolds.',
      },
      {
        t: 'p',
        html: '<b>Physical properties.</b> Because the N–H bond is polar, 1° and 2° amines hydrogen-bond to each other, and all amines, 3° included, hydrogen-bond to water through the nitrogen lone pair — like commuters loosely linking arms in a crowded Mumbai local. This raises their boiling points above non-polar alkanes of similar mass, and makes the small amines water-soluble. But the link is weaker than the O–H···O bonds in alcohols (nitrogen is less electronegative than oxygen), so amines boil lower than the corresponding alcohols. Among isomers the order is <b>1° > 2° > 3°</b>: a 1° amine has two N–H arms to link with, a 3° amine has none, so tertiary amines cannot hydrogen-bond among themselves at all. Lower amines are gases with a sharp fishy odour; larger ones are liquids, then solids. Arylamines like aniline are colourless when fresh but darken on the shelf as air oxidises them.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the lone pair is a shopkeeper’s spare hand. With a free hand he can shake yours (donate to a proton → basicity; donate to an electrophile → nucleophilic reactions). If that hand is already busy holding something — as in aniline, where the ring “borrows” the lone pair into conjugation — he greets you only half-heartedly, and the amine is a weaker base.',
      },
      {
        t: 'p',
        html: '<b>Basicity — and its famous twist.</b> Aliphatic amines are stronger bases than ammonia, because alkyl groups push electron density onto nitrogen (+I effect) and stabilise the cation formed after protonation. So you would expect 3° > 2° > 1° > NH<sub>3</sub>, and in the <b>gas phase that is exactly the order</b>. In <b>water</b>, however, a second actor walks on: the protonated cation is also stabilised by <b>solvation</b> — water molecules hydrogen-bond to the N–H hydrogens of the cation. A 1° ammonium ion RNH<sub>3</sub><sup>+</sup> has three such hydrogens to be hugged by water; a 3° ammonium ion R<sub>3</sub>NH<sup>+</sup> has only one. Add a third factor — <b>steric hindrance</b> from bulky alkyl groups blocking both protonation and solvation — and the neat inductive order collapses. The usual aqueous outcome is <b>2° > 1° > 3° > NH<sub>3</sub></b> for methyl amines, because the secondary amine best balances the competing effects.',
      },
      {
        t: 'p',
        html: 'Aromatic amines run the other way: aniline (p<i>K</i><sub>b</sub> 9.38) is a weaker base than ammonia (p<i>K</i><sub>b</sub> 4.75), because its lone pair is delocalised into the benzene ring and is simply less available to grab a proton.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The “expected” inductive order only holds cleanly in the gas phase or for an isolated nitrogen; never quote 3° > 2° > 1° for an aqueous solution. And basicity comparisons assume we are comparing the availability of the lone pair — anything that delocalises it (conjugation, electron-withdrawing groups) weakens the base, anything that concentrates electron density on N (electron-releasing groups, +I) strengthens it.',
      },

      { t: 'part', title: 'Key definitions, data and reagents' },
      {
        t: 'formula',
        kicker: 'Basicity measures',
        main: '<i>K</i><sub>b</sub> = ([RNH<sub>3</sub><sup>+</sup>][OH<sup>−</sup>])/[RNH<sub>2</sub>]<br>p<i>K</i><sub>b</sub> = −log <i>K</i><sub>b</sub>',
        legend: [
          '<i>K</i><sub>b</sub> = base dissociation constant of the amine',
          '[RNH<sub>3</sub><sup>+</sup>] = concentration of the protonated amine (ammonium ion)',
          '[OH<sup>−</sup>] = concentration of hydroxide ion',
          '[RNH<sub>2</sub>] = concentration of the free amine',
          'p<i>K</i><sub>b</sub> = negative logarithm of <i>K</i><sub>b</sub>',
        ],
        note: '<b>Larger <i>K</i><sub>b</sub> (smaller p<i>K</i><sub>b</sub>) ⇒ stronger base.</b>',
      },
      {
        t: 'table',
        title: 'Selected aqueous pKb values (NCERT Table 13.3; ammonia = 4.75)',
        head: ['Amine', 'pKb'],
        rows: [
          ['Methanamine', '3.38'],
          ['N-Methylmethanamine (2°)', '3.27'],
          ['N,N-Dimethylmethanamine (3°)', '4.22'],
          ['Ethanamine', '3.29'],
          ['N-Ethylethanamine (2°)', '3.00'],
          ['N,N-Diethylethanamine (3°)', '3.25'],
          ['Benzenamine (aniline)', '9.38'],
          ['Phenylmethanamine (benzylamine)', '4.70'],
          ['N-Methylaniline', '9.30'],
          ['N,N-Dimethylaniline', '8.92'],
        ],
        note: '(Table 13.3, here and in Additional topic A, is from the earlier NCERT edition, where Amines was Unit 13; the current NCERT Class 12 book numbers the chapter Unit 9.)',
      },
      {
        t: 'p',
        html: '<b>Basicity orders to memorise:</b><br>• Gas phase (pure +I): 3° > 2° > 1° > NH<sub>3</sub><br>• Aqueous (methyl): (CH<sub>3</sub>)<sub>2</sub>NH > CH<sub>3</sub>NH<sub>2</sub> > (CH<sub>3</sub>)<sub>3</sub>N > NH<sub>3</sub><br>• Aqueous (ethyl): (C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH > (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N > C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> > NH<sub>3</sub><br>• Aliphatic vs aromatic: alkanamine > NH<sub>3</sub> > arylamine.',
      },
      {
        t: 'p',
        html: '<b>Substituent effect on arylamine basicity:</b> electron-releasing groups (–OCH<sub>3</sub>, –CH<sub>3</sub>, –NH<sub>2</sub>) <b>increase</b> basicity; electron-withdrawing groups (–NO<sub>2</sub>, –SO<sub>3</sub>H, –COOH, –X) <b>decrease</b> it. This is NCERT’s rule, and it holds at the para position. At ortho even an electron-releasing group weakens the base (the ortho effect: o-toluidine, p<i>K</i><sub>b</sub> 9.56, is weaker than aniline, 9.38), and at meta –OCH<sub>3</sub> withdraws by −I alone, so m-anisidine is weaker than aniline too.',
      },
      {
        t: 'table',
        title: 'Reagent map for the key reactions',
        head: ['Reagent', 'Reacts with', 'Product / use'],
        rows: [
          ['Mineral acid (HCl)', 'all amines', 'ammonium salt (basic character)'],
          ['Acid chloride/anhydride + pyridine', '1°, 2°', 'N-substituted amide (acylation)'],
          ['CHCl<sub>3</sub> + alc. KOH', '<b>1° only</b>', 'isocyanide, foul smell (carbylamine test)'],
          ['NaNO<sub>2</sub> + dil. HCl (HNO<sub>2</sub>)', 'all (differently)', 'diazonium / nitrosamine — distinguishes classes'],
          ['C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl (Hinsberg)', '1°, 2°', 'sulphonamide (1° alkali-soluble, 2° insoluble)'],
          ['Br<sub>2</sub>(aq)', 'aniline', '2,4,6-tribromoaniline'],
        ],
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: '3.1 The structure–basicity logic (how to rank any amine)',
        steps: [
          '<b>Lone-pair availability first.</b> Anything that delocalises the N lone pair (aniline-type conjugation, an adjacent carbonyl as in amides) sharply lowers basicity; anything that concentrates charge on N (+I alkyl groups) raises it.',
          '<b>Phase matters.</b> In the gas phase rank by +I alone (3°>2°>1°). In water, layer on <b>cation solvation</b> (more N–H ⇒ more H-bonding ⇒ more stable cation ⇒ stronger base) and <b>steric hindrance</b> (bulky groups block protonation/solvation). The compromise gives 2° as usually most basic.',
          '<b>For arylamines</b>, start below ammonia, then shift up for electron-releasing ring substituents and down for electron-withdrawing ones (at para; at ortho almost any group weakens the base, the ortho effect).',
        ],
      },
      { t: 'p', html: '<b>3.2 Basic character and salt formation</b>' },
      {
        t: 'p',
        html: 'Amines react with mineral acids to form water-soluble ammonium salts; a stronger base (NaOH) regenerates the free amine. This solubility switch is the basis for <b>separating an amine from non-basic, water-insoluble organics</b>: shake with dilute acid (amine goes into the aqueous layer as its salt), then basify to recover it.',
      },
      {
        t: 'formula',
        kicker: 'Basic character and salt formation',
        main: 'R–NH<sub>2</sub> + HCl → R–NH<sub>3</sub><sup>+</sup>Cl<sup>−</sup> →<sup>NaOH</sup> R–NH<sub>2</sub> + NaCl + H<sub>2</sub>O',
        legend: [
          'R–NH<sub>2</sub> = amine, the free base',
          'HCl = mineral acid',
          'R–NH<sub>3</sub><sup>+</sup>Cl<sup>−</sup> = ammonium salt, soluble in water',
          'NaOH = stronger base, which regenerates the amine',
          'NaCl = sodium chloride',
          'H<sub>2</sub>O = water',
        ],
        note: null,
      },
      { t: 'p', html: '<b>3.3 Acylation</b>' },
      {
        t: 'p',
        html: '1° and 2° amines (which still carry an N–H) react with acid chlorides, anhydrides or esters, replacing an N–H by an acyl group to give <b>amides</b>. A base such as pyridine mops up the HCl and drives the equilibrium forward. With benzoyl chloride in aqueous alkali the reaction is <b>benzoylation</b> (the <b>Schotten–Baumann reaction</b>). Aniline → acetanilide on acetylation. <b>3° amines do not acylate</b> — they have no replaceable N–H.',
      },
      { t: 'p', html: '<b>3.4 Carbylamine reaction (isocyanide test)</b>' },
      {
        t: 'p',
        html: '1° amines (aliphatic and aromatic) heated with chloroform and alcoholic KOH give foul-smelling <b>isocyanides</b>; 2° and 3° amines do not. Hence it is a specific test for <b>1° amines</b>.',
      },
      {
        t: 'formula',
        kicker: 'Carbylamine reaction (isocyanide test)',
        main: 'R–NH<sub>2</sub> + CHCl<sub>3</sub> + 3 KOH →<sup>Δ</sup> R–NC + 3 KCl + 3 H<sub>2</sub>O',
        legend: [
          'R–NH<sub>2</sub> = primary amine, aliphatic or aromatic',
          'CHCl<sub>3</sub> = chloroform',
          'KOH = alcoholic potassium hydroxide',
          'Δ = heating',
          'R–NC = isocyanide (carbylamine), foul-smelling',
          'KCl = potassium chloride',
          'H<sub>2</sub>O = water',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Mechanism:</b> alcoholic KOH deprotonates chloroform and ejects chloride to give the electron-deficient <b>dichlorocarbene</b> :CCl<sub>2</sub>; the amine lone pair attacks the carbene carbon, and two successive HCl eliminations build the isocyanide, R–N≡C (R–N<sup>+</sup>≡C<sup>−</sup>).',
      },
      { t: 'p', html: '<b>3.5 Reaction with nitrous acid (HNO<sub>2</sub>, made in situ from NaNO<sub>2</sub> + dil. HCl)</b>' },
      {
        t: 'p',
        html: 'The four cases are the chapter’s favourite distinguishing reaction:<br>• <b>1° aliphatic amine</b> → an aliphatic diazonium salt so unstable it immediately loses N<sub>2</sub> quantitatively, leaving an alcohol: R–NH<sub>2</sub> + HNO<sub>2</sub> → R–OH + N<sub>2</sub>↑ + H<sub>2</sub>O. (This is NCERT’s form and the board answer. In reality the carbocation left behind rearranges, loses H<sup>+</sup> or picks up Cl<sup>−</sup>, so a mixture of alcohols, alkenes and alkyl chlorides forms.) The brisk, quantitative nitrogen evolution underlies the <b>van Slyke estimation of amino acids and proteins</b>.<br>• <b>1° aromatic amine</b> → a comparatively <b>stable arenediazonium salt at 273–278 K</b> (Ar–N<sub>2</sub><sup>+</sup>Cl<sup>−</sup>). (Its synthetic uses belong to the diazonium topic.)<br>• <b>2° amine</b> (aliphatic or aromatic) → a yellow oily <b>N-nitrosamine</b>, R<sub>2</sub>N–N=O.<br>• <b>3° amine</b> behaves differently again (a 3° aliphatic amine simply forms a soluble nitrite salt; 3° aromatic amines undergo ring nitrosation, at the para position).',
      },
      { t: 'p', html: '<b>3.6 Reaction with arylsulphonyl chloride — Hinsberg’s test</b>' },
      {
        t: 'p',
        html: 'Benzenesulphonyl chloride (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl, Hinsberg’s reagent) is the cleanest single test to sort the three classes:<br>• <b>1° amine</b> → N-alkylbenzene​sulphonamide. The remaining N–H is made strongly acidic (NCERT’s words; it is about as acidic as phenol, p<i>K</i><sub>a</sub> near 10, enough to react with KOH) by the electron-withdrawing SO<sub>2</sub>, so the product <b>dissolves in alkali</b>.<br>• <b>2° amine</b> → N,N-dialkylbenzene​sulphonamide. No N–H remains, so it is <b>insoluble in alkali</b>.<br>• <b>3° amine</b> → <b>no reaction</b> (no N–H to substitute; any salt that forms is hydrolysed back, so nothing is isolated).',
      },
      { t: 'fig', id: 'c12-09-fig-9.4' },
      { t: 'p', html: '<b>3.7 Electrophilic substitution of aniline</b>' },
      {
        t: 'p',
        html: 'The –NH<sub>2</sub> group is strongly activating and ortho/para-directing, so aniline is highly reactive toward electrophiles.<br>• <b>Bromination:</b> with bromine water, aniline instantly gives a white precipitate of <b>2,4,6-tribromoaniline</b> — substitution will not stop at one bromine. To make p-bromoaniline, first <b>protect</b> the nitrogen by acetylation (→ acetanilide), brominate (acetylation tames the ring: the nitrogen lone pair is now shared with the C=O, so only one bromine enters, and the bulky acetamido group favours para), then hydrolyse off the acetyl group.<br>• <b>Nitration:</b> direct nitration is run in strongly acidic medium, which protonates –NH<sub>2</sub> to –NH<sub>3</sub><sup>+</sup> — now a meta-directing deactivator — so a substantial fraction of meta product forms alongside ortho/para. The clean route to <b>p-nitroaniline</b> again uses acetanilide protection: acetylate → nitrate (mainly para) → hydrolyse.<br>• <b>Sulphonation:</b> aniline + conc. H<sub>2</sub>SO<sub>4</sub> gives anilinium hydrogen​sulphate, which on heating (≈ 453–473 K, “baking”) rearranges to <b>sulphanilic acid</b> (p-aminobenzene​sulphonic acid). Sulphanilic acid exists as a <b>zwitterion</b>, H<sub>3</sub>N<sup>+</sup>–C<sub>6</sub>H<sub>4</sub>–SO<sub>3</sub><sup>−</sup>, giving it an abnormally high melting point and poor solubility in organic solvents.',
      },
      {
        t: 'p',
        html: '<b>A key non-reaction — Friedel–Crafts fails on aniline.</b> Aniline does not undergo Friedel–Crafts alkylation or acylation. The Lewis-acid catalyst (anhydrous AlCl<sub>3</sub>) is electron-deficient and bonds to the basic nitrogen lone pair, generating the adduct C<sub>6</sub>H<sub>5</sub>N<sup>+</sup>H<sub>2</sub>–AlCl<sub>3</sub><sup>−</sup>, whose nitrogen now carries a positive charge. This anilinium-like group is strongly <b>deactivating and meta-directing</b>, so the ring no longer responds to the (also electron-poor) Friedel–Crafts electrophile. This is a perennial exam point — and another reason synthetic routes on aniline run through protection or through the diazonium salt.',
      },
      { t: 'p', html: '<b>3.8 Reaction with carbon disulphide — the mustard-oil test</b>' },
      {
        t: 'p',
        html: 'Primary aliphatic amines react with carbon disulphide to give an N-substituted <b>dithiocarbamic acid</b>, which on warming with HgCl<sub>2</sub> loses H<sub>2</sub>S (taken up by the HgCl<sub>2</sub> as black HgS and HCl) to give a pungent <b>alkyl isothiocyanate</b> (“mustard oil”); aniline instead gives N,N′-diphenyl​thiourea with CS<sub>2</sub>, so the test is used for aliphatic amines:',
      },
      {
        t: 'formula',
        kicker: 'The mustard-oil test',
        main: 'R–NH<sub>2</sub> + CS<sub>2</sub> → R–NH–CS–SH<br>R–NH–CS–SH + HgCl<sub>2</sub> →<sup>Δ</sup> R–N=C=S + HgS + 2 HCl',
        legend: [
          'R–NH<sub>2</sub> = primary aliphatic amine',
          'CS<sub>2</sub> = carbon disulphide',
          'R–NH–CS–SH = N-substituted dithiocarbamic acid',
          'HgCl<sub>2</sub> = mercury(II) chloride',
          'Δ = warming',
          'R–N=C=S = alkyl isothiocyanate (“mustard oil”)',
          'HgS = mercury(II) sulphide, a black precipitate',
          'HCl = hydrogen chloride',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The mustard smell is a positive test for <b>1° aliphatic amines</b>; 2° amines stop at the dialkyldithio​carbamate (no isothiocyanate, no smell) and 3° amines do not react. Together with the carbylamine and Hinsberg tests, this completes the toolkit for telling the three classes apart.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Arrange in increasing order of basic strength in aqueous solution and justify the position of the tertiary amine: ammonia, methanamine, N-methylmethanamine, N,N-dimethylmethanamine.',
        steps: [
          'Methyl groups raise basicity above ammonia through +I. By pure inductive logic the trimethylamine should top the list, but in water the <b>trimethylammonium cation has only one N–H</b> to hydrogen-bond with solvent, so it is poorly solvated and least stabilised; combined with steric crowding, this drops (CH<sub>3</sub>)<sub>3</sub>N below both the 1° and 2° amines. The dimethylamine best balances +I against solvation and steric effects, so it is the strongest. (p<i>K</i><sub>b</sub>: NH<sub>3</sub> 4.75, (CH<sub>3</sub>)<sub>3</sub>N 4.22, CH<sub>3</sub>NH<sub>2</sub> 3.38, (CH<sub>3</sub>)<sub>2</sub>NH 3.27; the smaller the p<i>K</i><sub>b</sub>, the stronger the base.)',
        ],
        ans: 'Increasing basic strength: NH<sub>3</sub> < (CH<sub>3</sub>)<sub>3</sub>N < CH<sub>3</sub>NH<sub>2</sub> < (CH<sub>3</sub>)<sub>2</sub>NH',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An amine X (C<sub>3</sub>H<sub>9</sub>N) gives no precipitate or reaction with benzenesulphonyl chloride and no foul carbylamine odour. Identify the class and name X.',
        steps: [
          '<b>Speed reasoning.</b> Two negative tests at once. Hinsberg “no reaction” ⇒ <b>no N–H</b> ⇒ tertiary. Carbylamine negative ⇒ not 1°. Both point to <b>tertiary</b>. The only 3° amine of formula C<sub>3</sub>H<sub>9</sub>N is <b>trimethylamine, (CH<sub>3</sub>)<sub>3</sub>N</b> (N,N-dimethylmethanamine).',
          '<b>Trap:</b> a 2° amine would give an alkali-insoluble Hinsberg product — that is a reaction, not “no reaction” — so do not pick the secondary isomer.',
        ],
        ans: 'Tertiary: X is trimethylamine, (CH<sub>3</sub>)<sub>3</sub>N (N,N-dimethyl​methanamine).',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Aniline is nitrated directly with a HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> mixture. Explain why an unexpectedly large fraction of meta-product appears even though –NH<sub>2</sub> is ortho/para-directing, and outline how p-nitroaniline is obtained cleanly.',
        steps: [
          'In the strongly acidic nitrating mixture the basic –NH<sub>2</sub> is largely <b>protonated to –NH<sub>3</sub><sup>+</sup></b>. This anilinium group is electron-withdrawing and therefore <b>meta-directing and deactivating</b>, so the protonated fraction yields meta-nitroaniline, which dilutes the ortho/para product from the small unprotonated fraction. (NCERT’s figures: about 51% para, 47% meta, 2% ortho.)',
          'Clean route: <b>acetylate</b> aniline to acetanilide (the amide nitrogen is far less basic, so it stays neutral and remains o/p-directing, while the bulky acetamido group steers electrophiles para), <b>nitrate</b> to give mainly p-nitroacetanilide, then <b>hydrolyse</b> to free <b>p-nitroaniline</b>.',
          'This links acid–base behaviour (protonation) with directing effects — the hallmark of a JEE Main reasoning item.',
        ],
        ans: 'Protonation turns –NH<sub>2</sub> into the meta-directing –NH<sub>3</sub><sup>+</sup>, so much meta-nitroaniline forms; for p-nitroaniline, acetylate, nitrate, then hydrolyse.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Rank these five bases in decreasing aqueous basicity and justify each placement: guanidine, cyclohexanamine, 4-methoxyaniline, aniline, 4-nitroaniline.',
        steps: [
          '<b>Guanidine</b> is exceptionally basic because its conjugate acid (the guanidinium ion) is stabilised by <b>three equivalent resonance structures</b> that delocalise the positive charge symmetrically over all three nitrogens — a textbook neutral “super-base.”',
          '<b>Cyclohexanamine</b> is an ordinary aliphatic amine: the lone pair is fully localised and boosted by +I, so it is far more basic than any arylamine.',
          'Among the anilines, the lone pair is delocalised into the ring; an <b>electron-releasing –OCH<sub>3</sub></b> (para) partly offsets this and raises basicity above aniline, whereas a <b>strongly electron-withdrawing –NO<sub>2</sub></b> (para) drains even more density from nitrogen (resonance + −I), making <b>4-nitroaniline the weakest</b>.',
          'This problem rewards combining resonance and inductive reasoning — and the guanidine entry is the kind of JEE-Advanced “named super-base” that lies beyond the CBSE/NEET core.',
        ],
        ans: 'guanidine > cyclohexanamine > 4-methoxyaniline > aniline > 4-nitroaniline',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain, with resonance reasoning, why aniline is a weaker base than ammonia.',
            a: 'Aniline’s nitrogen lone pair is delocalised into the ring (five resonance structures vs two for the anilinium ion), so it is less available for protonation; ammonia’s lone pair is fully localised.',
          },
          {
            q: '[NEET] Which is the strongest base in aqueous solution: CH<sub>3</sub>NH<sub>2</sub>, (CH<sub>3</sub>)<sub>2</sub>NH, (CH<sub>3</sub>)<sub>3</sub>N, or NH<sub>3</sub>?',
            a: '(CH<sub>3</sub>)<sub>2</sub>NH (lowest p<i>K</i><sub>b</sub>, 3.27).',
          },
          {
            q: '[JEE Main] Write the product when propan-1-amine is treated with NaNO<sub>2</sub> + dil. HCl, and name the gas evolved.',
            a: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH (propan-1-ol) + N<sub>2</sub> gas (via an unstable aliphatic diazonium salt). This is the board answer, R–NH<sub>2</sub> → R–OH. In reality the propyl cation rearranges, so a mixture forms in which propan-2-ol and propene outweigh propan-1-ol; a JEE question may test this.',
          },
          {
            q: '[JEE Main] A bottle contains one of a 1°, 2° or 3° amine. Describe a single reagent that tells all three apart, and the observation for each.',
            a: '<b>Benzenesulphonyl chloride + KOH (Hinsberg):</b> 1° → product soluble in alkali; 2° → product insoluble in alkali; 3° → no reaction.',
          },
          {
            q: '[JEE Advanced] Place in decreasing basicity: aniline, 4-methylaniline, 4-chloroaniline, 4-nitroaniline. Justify using substituent effects.',
            a: '4-methylaniline > aniline > 4-chloroaniline > 4-nitroaniline (EDG –CH<sub>3</sub> raises; –Cl mild −I lowers; –NO<sub>2</sub> strong −I/−R lowers most).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In aqueous solution, trimethylamine is a weaker base than dimethylamine mainly because:',
        opts: [
          {
            label: 'trimethylamine has a smaller +I effect',
            nudge: '<b>(a)</b> is backwards — three methyls give the largest +I, which is exactly why the gas-phase order is opposite.',
          },
          { label: 'the trimethylammonium cation is poorly solvated, having only one N–H for hydrogen bonding', nudge: null },
          { label: 'nitrogen is sp<sup>2</sup> hybridised in trimethylamine', nudge: '<b>(c)</b> is false; the nitrogen is sp<sup>3</sup>.' },
          { label: 'trimethylamine is aromatic', nudge: '<b>(d)</b> is nonsense — it is an aliphatic amine.' },
        ],
        correct: 1,
        solution: 'Fewer N–H hydrogens ⇒ less cation solvation ⇒ less stabilised conjugate acid ⇒ weaker base in water.',
      },
      {
        t: 'mcq',
        q: 'Treated with benzenesulphonyl chloride and then KOH, which amine gives a product <b>insoluble</b> in alkali?',
        opts: [
          { label: 'ethanamine', nudge: '<b>(a)</b> is a 1° amine → alkali-soluble sulphonamide.' },
          { label: 'N-ethylethanamine', nudge: null },
          { label: 'N,N-diethylethanamine', nudge: '<b>(c)</b> is 3° → no reaction at all (not an insoluble product).' },
          { label: 'aniline', nudge: '<b>(d)</b> is a 1° amine → alkali-soluble sulphonamide.' },
        ],
        correct: 1,
        solution: 'A secondary amine. Its N,N-dialkylsulphonamide has no acidic N–H, so it does not dissolve in alkali.',
      },
      {
        t: 'mcq',
        q: 'The carbylamine reaction is given by:',
        opts: [
          { label: '1° amines only', nudge: null },
          { label: '2° amines only', nudge: '<b>(b)</b> a 2° amine has only one N–H; the isocyanide needs two.' },
          { label: '3° amines only', nudge: '<b>(c)</b> a 3° amine has no N–H at all.' },
          { label: 'all amines', nudge: '<b>(d)</b> is wrong because 2° and 3° amines give no isocyanide.' },
        ],
        correct: 0,
        solution: 'Only 1° amines, on heating with CHCl<sub>3</sub> + alc. KOH, form the foul-smelling isocyanide; the reaction needs two replaceable N–H hydrogens that only a primary amine has.',
      },
      {
        t: 'mcq',
        q: '<b>(JEE-Advanced extension)</b> The strongest base among the following is:',
        opts: [
          { label: 'aniline', nudge: '<b>(a)</b> aniline is weakened by lone-pair delocalisation into the ring.' },
          {
            label: 'cyclohexanamine',
            nudge: '<b>(b)</b> cyclohexanamine is a strong ordinary base but cannot match guanidinium’s symmetric resonance.',
          },
          { label: 'guanidine', nudge: null },
          {
            label: 'acetamide',
            nudge: '<b>(d)</b> acetamide is essentially non-basic — its nitrogen lone pair is tied up by the carbonyl.',
          },
        ],
        correct: 2,
        solution: 'Guanidine. Its conjugate acid is resonance-stabilised over three equivalent nitrogens, making it a neutral super-base. (Beyond CBSE/NEET.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Quoting the gas-phase order in water.</b> Writing 3° > 2° > 1° for an aqueous solution. The aqueous order is scrambled by solvation and sterics (2° first: methyl series 2° > 1° > 3°, ethyl series 2° > 3° > 1°).',
          '<b>Calling aniline’s low basicity “inductive.”</b> Aniline is weak because its lone pair is <b>delocalised into the ring (resonance)</b>, not because of a −I effect.',
          '<b>Forgetting to protect aniline before EAS.</b> Direct bromination over-substitutes (tribromo) and direct nitration gives meta from the protonated –NH<sub>3</sub><sup>+</sup>; acetylation first is essential for a clean mono-product.',
          '<b>Expecting 3° amines to acylate or give a Hinsberg product.</b> No N–H means no acylation, no sulphonamide, no carbylamine.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Before predicting any “does it react?” behaviour, <b>count the N–H hydrogens</b>: two ⇒ carbylamine + acylation + alkali-soluble Hinsberg; one ⇒ acylation + alkali-insoluble Hinsberg, no carbylamine; zero ⇒ none of these. One quick count answers most identification MCQs.',
      },
      {
        t: 'p',
        html: '<b>Beyond syllabus (JEE-Adv only):</b> neutral super-bases (guanidine, amidines) owe their strength to symmetric conjugate-acid resonance; rigidly caged amines (e.g. quinuclidine) cannot undergo nitrogen inversion, and Bredt’s-rule-locked bridgehead nitrogens cannot delocalise their lone pair — both shift basicity in non-obvious ways.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Physical',
            note: '1°/2° amines H-bond → higher b.p. than alkanes, lower than alcohols; isomer b.p. <b>1° > 2° > 3°</b>; small amines water-soluble (fishy smell); aniline darkens on storage.',
          },
          {
            f: 'Basicity measure',
            note: 'smaller p<i>K</i><sub>b</sub> = stronger base. p<i>K</i><sub>b</sub>: aniline 9.38 > NH<sub>3</sub> 4.75 > aliphatic amines 3.00–4.22, so basicity runs aliphatic > NH<sub>3</sub> > aniline.',
          },
          {
            f: 'Orders',
            note: 'gas 3°>2°>1°; aqueous methyl (CH<sub>3</sub>)<sub>2</sub>NH > CH<sub>3</sub>NH<sub>2</sub> > (CH<sub>3</sub>)<sub>3</sub>N > NH<sub>3</sub>; aliphatic > NH<sub>3</sub> > aryl. EDG ↑ (at para), EWG ↓ arylamine basicity; an ortho group lowers it (ortho effect).',
          },
          {
            f: 'Distinguishing 1°/2°/3°',
            note: 'carbylamine (<b>1° only</b>), Hinsberg (1° alkali-soluble, 2° insoluble, 3° no reaction), HNO<sub>2</sub> (1° aliph → alcohol + N<sub>2</sub>; 1° arom → diazonium 273–278 K; 2° → nitrosamine).',
          },
          {
            f: 'Aniline EAS',
            note: 'Br<sub>2</sub>(aq) → 2,4,6-tribromoaniline; protect (acetanilide) for mono-substitution; conc. H<sub>2</sub>SO<sub>4</sub>, heat → sulphanilic acid (zwitterion).',
          },
          {
            f: '3° amines',
            note: 'no N–H ⇒ no acylation, no Hinsberg product, no carbylamine.',
          },
        ],
        aids: [
          '“Solvation Spoils the Series”: in water, hydrogen-hugging by solvent flips the inductive order, so the <b>2°</b> amine usually wins. <b>Count the N–H’s</b> to call every identification test. (Mustard oil also needs an aliphatic amine, and nitrous acid tells aliphatic from aromatic: count the N–H’s, then look at the ring.)',
        ],
      },
    ],
  },
];
