import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional Topics A, B and C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 7: Alcohols, Phenols and Ethers —
 * Additional Topics" (p. 344, set at the head of Additional topic A's Introduction),
 * then A The Acidity of Phenols, Quantified (pp. 344–347), B Rearrangement: The
 * Carbocation Moves Before It Reacts (pp. 347–349) and C Turning –OH into Halide
 * Without HX: PBr3, PCl5, SOCl2 (pp. 349–351; its answers end on p. 351, where
 * Addendum D begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. The pKa table (pp. 344–345, split over the page
 * turn) is one table block. The book's unnumbered Figure 1 (p. 346, the acidity ladder
 * with pKa values) is c12-07-A-d1, at the end of A's Method, where the book prints it.
 * The heading over B's numbered cases is the list's title; C's three displayed
 * equations are one formula block under the book's heading.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 344–347 ─────────────────────────
  {
    n: 'A',
    title: 'The Acidity of Phenols, Quantified',
    extra: true,
    kalam: 'The chapter states the qualitative rule — electron-withdrawing groups at ortho/para strengthen a phenol, electron-releasing groups weaken it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has already built the classification, the preparation map, the qualitative acidity ladder, the Lucas and iodoform tests, the phenol ring reactions, and the ether cleavage rules. This addendum extends it with seven examinable topics. Addendum A turns the acidity of phenols into numbers — the NCERT p<i>K</i><sub>a</sub> table, the meta-position subtlety, and the bicarbonate threshold that converts acidity into a one-tube test. Addendum B adds the step every E1 or S<sub>N</sub>1 process can include, which the chapter shows only once, for the acid hydration of an alkene: carbocation rearrangement, which NCERT’s own exercise answers quietly require. Addendum C supplies the phosphorus-halide and thionyl-chloride routes that replace –OH by halogen without a carbocation. Addendum D sharpens the Williamson synthesis into a three-question feasibility screen, including the aryl and vinyl halides that cannot serve as its S<sub>N</sub>2 partner. Addendum E sets out ether-cleavage stoichiometry in two equations and adds the benzyl-ether edge case. Addendum F is pure counting practice — the isomer enumerations NCERT itself sets. Addendum G collects the NCERT-exact industrial micro-facts (the 14% fermentation cap, the denaturing recipe, the methanol antidote, the modern picric-acid route) that JEE and NEET keep asking. Additional topic H then analyses past JEE and NEET questions on this chapter and turns that analysis into a targeting plan.',
      },
      {
        t: 'p',
        html: 'The chapter states the qualitative rule — electron-withdrawing groups at ortho/para strengthen a phenol, electron-releasing groups weaken it. JEE and NEET set the questions on numbers, and NCERT supplies them (Table 11.3). (Table 11.3 and the other NCERT numbers in these Additional topics — examples, intext questions and exercises — are from the earlier NCERT edition, where Alcohols, Phenols and Ethers was Unit 11; the current NCERT Class 12 book numbers the chapter Unit 7.) This section fixes the table, the one position where the qualitative rule needs refinement (meta), and the bicarbonate threshold.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The NCERT p<i>K</i><sub>a</sub> data.</b> Anchor the three landmarks — ethanol 15.9, phenol 10.0, and o- and p-nitrophenol near 7 — and the pattern fills itself in.',
      },
      {
        t: 'table',
        title: null,
        head: ['Compound', 'p<i>K</i><sub>a</sub>', 'Lesson'],
        rows: [
          ['Ethanol', '15.9', 'phenol is about a million times more acidic'],
          ['p-Cresol', '10.2', 'an electron-releasing CH<sub>3</sub> weakens the acid'],
          ['m-Cresol', '10.1', 'same effect, slightly less felt'],
          ['o-Cresol', '10.2', 'same again'],
          ['Phenol', '10.0', 'the reference point'],
          ['m-Nitrophenol', '8.3', 'EWG at meta: inductive effect only'],
          ['o-Nitrophenol', '7.2', 'EWG at ortho: induction plus resonance'],
          ['p-Nitrophenol', '7.1', 'EWG at para: induction plus resonance'],
        ],
      },
      {
        t: 'p',
        html: '<b>Why meta is special.</b> In the phenoxide ion the negative charge delocalises onto the oxygen and the ortho and para ring carbons — it never lands on a meta carbon. A nitro group at meta therefore cannot withdraw that charge by resonance; only its inductive pull operates, and induction falls off with distance. So m-nitrophenol is clearly stronger than phenol but clearly weaker than either of its ortho and para isomers. Examiners use exactly this trio to test whether you know where the charge goes.',
      },
      {
        t: 'p',
        html: '<b>The bicarbonate threshold.</b> An acid liberates CO<sub>2</sub> from sodium bicarbonate only if it is the stronger acid of the pair — that is, stronger than carbonic acid, whose first p<i>K</i><sub>a</sub> is about 6.4. Read the table, and the stronger acids in the figure below, against that line: carboxylic acids (benzoic acid 4.2), 2,4-dinitrophenol (4.1) and picric acid (2,4,6-trinitrophenol, 0.4) clear it and effervesce; phenol, the cresols and every mononitrophenol (all with p<i>K</i><sub>a</sub> above 7) do not. One line of reasoning explains a whole family of exam statements.',
      },
      {
        t: 'p',
        html: '<b>The full NCERT ordering</b> (its Example 11.4), increasing acid strength:<br>propan-1-ol < 4-methylphenol < phenol<br>< 3-nitrophenol < 3,5-dinitrophenol < 2,4,6-trinitrophenol',
      },
      {
        t: 'p',
        html: 'Note where the alcohol sits (bottom) and how each additional nitro group climbs the ladder; also note that 3,5-dinitrophenol — both nitro groups meta, so both are inductive-only — still sits below 2,4,6-trinitrophenol, which carries resonance-capable ortho/para nitro groups.',
      },
      { t: 'fig', id: 'c12-07-A-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Ranking with a meta member',
        q: 'Arrange in increasing order of acid strength: phenol, m-nitrophenol, p-nitrophenol, p-cresol.',
        steps: [
          'Two pairs to order. The electron-releasing CH<sub>3</sub> of p-cresol destabilises the phenoxide, so p-cresol is the weakest, below phenol itself. Between the two nitrophenols: at para the NO<sub>2</sub> withdraws the phenoxide charge by resonance (the charge reaches the para carbon); at meta it cannot — only induction survives. So the para isomer is stronger.',
        ],
        ans: 'p-cresol < phenol < m-nitrophenol < p-nitrophenol (p<i>K</i><sub>a</sub> 10.2, 10.0, 8.3, 7.1).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — The bicarbonate filter',
        q: 'Which of these liberate CO<sub>2</sub> from aqueous NaHCO<sub>3</sub>: phenol, o-nitrophenol, 2,4-dinitrophenol, picric acid, benzoic acid?',
        steps: [
          '<b>Speed reasoning.</b> Apply the threshold, not memory: only acids stronger than carbonic acid (p<i>K</i><sub>a</sub> about 6.4) fizz. Phenol (10.0) and o-nitrophenol (7.2) stay on the no-fizz side of the line. 2,4-Dinitrophenol and picric acid, with two and three ortho/para nitro groups, are far stronger than carbonic acid. Benzoic acid (p<i>K</i><sub>a</sub> 4.19) is a carboxylic acid and clears the line easily.',
        ],
        ans: '2,4-dinitrophenol, picric acid and benzoic acid effervesce; phenol and o-nitrophenol do not.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Arrange in increasing acid strength: propan-1-ol, 4-methylphenol, phenol, 3-nitrophenol, 3,5-dinitrophenol, 2,4,6-trinitrophenol.',
            a: 'Propan-1-ol < 4-methylphenol < phenol < 3-nitrophenol < 3,5-dinitrophenol < 2,4,6-trinitrophenol (NCERT Example 11.4, verbatim).',
          },
          {
            q: '[NEET] m-Nitrophenol is a weaker acid than p-nitrophenol, even though NO<sub>2</sub> is electron-withdrawing at both positions. Why?',
            a: 'The phenoxide charge delocalises only to the ortho and para ring carbons. At meta the NO<sub>2</sub> group can withdraw only by induction, never by resonance, so it stabilises the anion less.',
          },
          {
            q: '[JEE Main] Of o-cresol, m-cresol, p-cresol and phenol, which is the strongest acid, and by how much in p<i>K</i><sub>a</sub> units?',
            a: 'Phenol (p<i>K</i><sub>a</sub> 10.0), by about 0.1–0.2 p<i>K</i><sub>a</sub> units over the cresols (10.1–10.2) — the methyl group is electron-releasing at every position.',
          },
          {
            q: '[JEE Advanced] Both 2,4-dinitrophenol and 3,5-dinitrophenol carry two nitro groups. Which is the stronger acid, and what does the comparison teach about the two positions?',
            a: '2,4-Dinitrophenol is stronger: its 4-nitro group (para) and 2-nitro group (ortho) both withdraw by resonance, whereas in 3,5-dinitrophenol both groups are meta and inductive-only. Two resonance-capable groups beat two inductive-only groups.',
          },
          {
            q: '[CBSE] Phenol is described as “about a million times more acidic than ethanol.” Justify the phrase with p<i>K</i><sub>a</sub> values.',
            a: 'p<i>K</i><sub>a</sub> of phenol is 10.0 and of ethanol 15.9; the difference is about 6 p<i>K</i><sub>a</sub> units, i.e. a factor of about 10<sup>6</sup> in <i>K</i><sub>a</sub>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 347–349 ─────────────────────────
  {
    n: 'B',
    title: 'Rearrangement: The Carbocation Moves Before It Reacts',
    extra: true,
    kalam: 'Rate-of-dehydration orderings track the stability of the cation actually formed.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the dehydration mechanism, Saytzeff’s rule and the ease order 3° > 2° > 1°. What it shows only once, for acid hydration in Topic 01, and never for dehydration, is the step in between: after the carbocation forms (the slow, rate-determining step), it can rearrange by a 1,2-hydride or 1,2-methyl shift into a more stable cation, and the alkene — or the substitution product — then comes from the rearranged ion. NCERT’s own questions assume you know this (intext 11.7, exercise 11.33); JEE builds rate-ordering and product-prediction questions on it.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The rearrangement rule.</b> Protonation of the alcohol and loss of water give the carbocation dictated by the starting skeleton. Before a proton is lost (dehydration) or a nucleophile captured (substitution), ask: is there a neighbouring carbon carrying a hydride or an alkyl group whose 1,2-shift would convert this cation into a more stable one (1° → 2°, 2° → 3°)? If yes, the shift usually happens, and the major product bears the rearranged skeleton. Only then apply Saytzeff to choose which proton the rearranged cation loses.',
      },
      {
        t: 'proc',
        title: 'Four NCERT-anchored cases',
        steps: [
          'Butan-1-ol, acid-catalysed dehydration. The 1° cation rearranges by a hydride shift to the more stable 2° cation (a free 1° cation hardly forms: the hydride shifts as the water leaves, but NCERT’s answer draws the 1° cation first, and so may you), so the product is a mixture of but-1-ene and but-2-ene with but-2-ene major — the expected answer to NCERT’s intext 11.7.',
          '1-Methylcyclohexanol. The 3° cation is already optimal; Saytzeff deprotonation at the ring carbon that gives the more substituted double bond yields 1-methylcyclohexene as the major product.',
          '3,3-Dimethylbutan-2-ol. Loss of water gives a 2° cation, but the neighbouring quaternary carbon releases a methyl group: a 1,2-methyl shift produces a 3° cation, which loses a proton to give 2,3-dimethylbut-2-ene — a tetrasubstituted alkene whose skeleton no longer matches the starting alcohol.',
          '3-Methylbutan-2-ol + HBr (NCERT exercise 11.33). The 2° cation formed after protonation and water loss rearranges by a 1,2-hydride shift from C-3 into a 3° cation; bromide captures it. The product is 2-bromo-2-methylbutane, not the unrearranged 2-bromo-3-methylbutane.',
        ],
      },
      {
        t: 'p',
        html: '<b>Where this bites in exams.</b> Rate-of-dehydration orderings track the stability of the cation actually formed; product-prediction questions hide the rearrangement behind an innocuous “conc. H<sub>2</sub>SO<sub>4</sub>, heat”; and stereoisomer counting (butan-2-ol dehydrates to but-1-ene plus cis- and trans-but-2-ene — three alkenes) turns one substrate into several answers.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Dehydration of butan-1-ol',
        q: 'Predict the major product of acid-catalysed dehydration of butan-1-ol and explain why it is not but-1-ene alone.',
        steps: [
          'Protonation gives the protonated alcohol. A free but-1-yl (1°) carbocation is too unstable to form, so a 1,2-hydride shift from C-2 accompanies the loss of water, giving the more stable but-2-yl (2°) cation directly (on paper, the 1° cation is drawn first and then shifted). Loss of a proton from C-3 of that cation gives but-2-ene, the more substituted (Saytzeff) alkene; loss from C-1 gives but-1-ene. Some but-1-ene also forms directly from the protonated alcohol, before any shift, but the more substituted but-2-ene dominates.',
        ],
        ans: 'A mixture of but-1-ene and but-2-ene, with but-2-ene as the major product.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — The methyl shift',
        q: '3,3-Dimethylbutan-2-ol is heated with conc. H<sub>2</sub>SO<sub>4</sub>. Give the structure and IUPAC name of the major alkene.',
        steps: [
          'Water loss from C-2 leaves a secondary cation, (CH<sub>3</sub>)<sub>3</sub>C–CH<sup>+</sup>–CH<sub>3</sub>. The adjacent quaternary carbon has no hydrogen to shift, but it carries three methyls; a 1,2-methyl shift converts the ion into the tertiary cation (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–CH(CH<sub>3</sub>)<sub>2</sub>. The carbons next to the cation carry seven hydrogens: one on C-2 and six on the two methyl groups. Loss of the C-2 hydrogen gives the tetrasubstituted double bond (Saytzeff, major); loss of a methyl hydrogen gives the minor 2,3-dimethylbut-1-ene, CH<sub>2</sub>=C(CH<sub>3</sub>)–CH(CH<sub>3</sub>)<sub>2</sub>.',
          'The rearranged skeleton is the whole point of the question.',
        ],
        ans: '(CH<sub>3</sub>)<sub>2</sub>C=C(CH<sub>3</sub>)<sub>2</sub>, 2,3-dimethylbut-2-ene.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board — Substitution with rearrangement (NCERT 11.33)',
        q: '3-Methylbutan-2-ol is treated with HBr. Give the mechanism and the major product.',
        steps: [
          'Protonation of –OH, loss of water → 2° carbocation at C-2. A 1,2-hydride shift from C-3 (a tertiary CH) moves the positive charge to C-3, where the cation is tertiary and more stable. Bromide attacks there.',
        ],
        ans: '2-Bromo-2-methylbutane is the major product, formed via a hydride-shift rearrangement; the unrearranged 2-bromo-3-methylbutane is minor.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Predict the major product of acid-catalysed dehydration of (i) 1-methylcyclohexanol and (ii) butan-1-ol.',
            a: '(i) 1-Methylcyclohexene (Saytzeff; the 3° cation deprotonates to the more substituted ring double bond). (ii) But-2-ene (major, via hydride shift to the 2° cation), with but-1-ene minor.',
          },
          {
            q: '[NEET] In the dehydration of ethanol with conc. H<sub>2</sub>SO<sub>4</sub>, which step is rate-determining?',
            a: 'Formation of the carbocation (loss of water from the protonated alcohol) — NCERT’s stated slow step. (A free ethyl cation hardly forms; for a primary alcohol the loss of water and of the proton are close to simultaneous, but NCERT’s mechanism is the one to write.)',
          },
          {
            q: '[JEE Main] Arrange in decreasing rate of acid-catalysed dehydration: butan-1-ol, butan-2-ol, 2-methylpropan-2-ol.',
            a: '2-Methylpropan-2-ol > butan-2-ol > butan-1-ol (tracks carbocation stability 3° > 2° > 1°).',
          },
          {
            q: '[JEE Advanced] Dehydration of butan-2-ol gives how many alkenes, counting stereoisomers separately? Name them.',
            a: 'Three: but-1-ene, cis-but-2-ene and trans-but-2-ene.',
          },
          {
            q: '[JEE Advanced] 2,2-Dimethylpropan-1-ol (neopentyl alcohol) is treated with conc. HBr. Explain why the major product is 2-bromo-2-methylbutane.',
            a: 'A free 1° cation is too unstable to form, so a 1,2-methyl shift from the quaternary C-2 accompanies the loss of water, giving the tertiary cation (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–CH<sub>2</sub>CH<sub>3</sub>, which bromide captures — hence 2-bromo-2-methylbutane, with the skeleton rearranged.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 349–351 ─────────────────────────
  {
    n: 'C',
    title: 'Turning –OH into Halide Without HX: PBr₃, PCl₅, SOCl₂',
    extra: true,
    kalam: 'Choose the reagent family by asking whether you want the skeleton kept or rearranged.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s only –OH → halide conversion is the hydrogen-halide/Lucas reaction. NCERT also lists the phosphorus-halide and thionyl-chloride routes (and its intext 11.6 asks for SOCl<sub>2</sub> products by name), and they matter for a reason the HX route cannot match: they deliver the halide without a free carbocation (chloride or bromide is delivered from the phosphorus or sulphur intermediate), so the skeleton of a primary or secondary alcohol does not rearrange.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'formula',
        kicker: 'The three reagents and their equations',
        main: '3 R–OH + PBr<sub>3</sub> → 3 R–Br + H<sub>3</sub>PO<sub>3</sub><br>R–OH + PCl<sub>5</sub> → R–Cl + POCl<sub>3</sub> + HCl<br>R–OH + SOCl<sub>2</sub> → R–Cl + SO<sub>2</sub>↑ + HCl↑',
        legend: [
          'R–OH = alcohol, R an alkyl group',
          'R–Br, R–Cl = alkyl bromide, alkyl chloride',
          'H<sub>3</sub>PO<sub>3</sub> = phosphorous acid',
          '↑ = gas, leaves the mixture',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Why SOCl<sub>2</sub> is the preferred chlorinating agent.</b> Both of its by-products are gases that leave the mixture on their own, so the alkyl chloride is easy to isolate pure — the same logic the next chapter records for converting carboxylic acids to acyl chlorides. PBr<sub>3</sub> is commonly generated in situ from red phosphorus and bromine; PI<sub>3</sub> (red P + I<sub>2</sub>) does the same job for iodides.',
      },
      {
        t: 'p',
        html: '<b>The decisive contrast with HX.</b> Hydrogen halides convert 2° and 3° alcohols through carbocations, so they rearrange wherever a 1,2-shift gives a more stable cation (Addendum B: 3-methylbutan-2-ol + HBr → 2-bromo-2-methylbutane); propan-2-ol, with no better cation to reach, gives plain 2-bromopropane. The phosphorus and thionyl reagents first convert the –OH into a good leaving group (–O–P or –O–S), which the halide then displaces without a free carbocation, so 3-methylbutan-2-ol with PBr<sub>3</sub> or SOCl<sub>2</sub> gives the unrearranged 2-bromo- or 2-chloro-3-methylbutane. Choose the reagent family by asking whether you want the skeleton kept or rearranged.',
      },
      {
        t: 'p',
        html: '<b>A scope fact worth memorising.</b> All of these C–O cleavage reactions — HX, PBr<sub>3</sub>, PCl<sub>5</sub>, SOCl<sub>2</sub> — are alcohol-only chemistry. NCERT states it plainly: phenols show C–O cleavage only with zinc dust. The aryl C–O bond has partial double-bond character (the oxygen lone pair conjugates into the ring) and the sp<sup>2</sup> ring carbon resists nucleophilic substitution, so phenol does not give chlorobenzene with HCl, PCl<sub>5</sub> or SOCl<sub>2</sub> in any useful yield.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board — Products with three reagents',
        q: 'Write the products when butan-1-ol reacts with (i) HCl/ZnCl<sub>2</sub>, (ii) PBr<sub>3</sub>, (iii) SOCl<sub>2</sub>.',
        steps: [
          'All three replace –OH by halogen on a 1° alcohol. (i) Lucas reagent gives 1-chlorobutane (only on heating — a 1° alcohol shows no turbidity at room temperature). (ii) Phosphorus tribromide gives 1-bromobutane (three alcohols per PBr<sub>3</sub>, with phosphorous acid as the other product). (iii) Thionyl chloride gives 1-chlorobutane with SO<sub>2</sub> and HCl escaping as gases.',
        ],
        ans: '(i) 1-chlorobutane; (ii) 1-bromobutane (+ H<sub>3</sub>PO<sub>3</sub>); (iii) 1-chlorobutane (+ SO<sub>2</sub> + HCl).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Keep the skeleton or rearrange it?',
        q: 'You need pure 2-bromo-3-methylbutane from 3-methylbutan-2-ol. HBr gives mostly the rearranged 2-bromo-2-methylbutane. What reagent solves the problem, and why?',
        steps: [
          'The rearrangement is born in the free carbocation that the HX/S<sub>N</sub>1 path creates. PBr<sub>3</sub> (or SOCl<sub>2</sub> for the chloride) substitutes through the –O–P (or –O–S) intermediate with no free cation, so the halogen enters at C-2 and the skeleton survives.',
        ],
        ans: 'Use PBr<sub>3</sub>: 3-methylbutan-2-ol → 2-bromo-3-methylbutane, unrearranged.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Complete and balance: propan-1-ol + PBr<sub>3</sub> →',
            a: '3 CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + PBr<sub>3</sub> → 3 CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br + H<sub>3</sub>PO<sub>3</sub>.',
          },
          {
            q: '[NEET] Thionyl chloride is preferred over PCl<sub>5</sub> for converting an alcohol to an alkyl chloride. Give the reason in one line.',
            a: 'Both by-products (SO<sub>2</sub> and HCl) are gases and escape, leaving the alkyl chloride easy to purify.',
          },
          {
            q: '[JEE Main] Why does phenol not react with HCl or SOCl<sub>2</sub> the way ethanol does?',
            a: 'The phenolic C–O bond has partial double-bond character (lone-pair conjugation with the ring) and the sp<sup>2</sup> carbon resists nucleophilic substitution; C–O cleavage of phenols occurs only with zinc dust.',
          },
          {
            q: '[JEE Advanced] An alcohol gives one bromide with PBr<sub>3</sub> but a different bromide with HBr. What structural feature must the alcohol have?',
            a: 'A skeleton in which the carbocation can rearrange — typically a 2° alcohol next to a carbon bearing a hydrogen or alkyl group that can shift to give a 3° cation (e.g. 3-methylbutan-2-ol). HBr proceeds through the cation and rearranges; PBr<sub>3</sub> does not.',
          },
          {
            q: '[CUET] Name the inorganic products formed when ethanol reacts with (i) PCl<sub>5</sub> and (ii) PBr<sub>3</sub>.',
            a: '(i) POCl<sub>3</sub> and HCl; (ii) H<sub>3</sub>PO<sub>3</sub> (phosphorous acid).',
          },
        ],
      },
    ],
  },
];
