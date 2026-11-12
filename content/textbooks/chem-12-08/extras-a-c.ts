import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional Topics A, B and C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 8: Aldehydes, Ketones and Carboxylic
 * Acids — Additional Topics" (p. 403, set at the head of Additional topic A's
 * Introduction), then A The Reactivity Order, Fully Loaded (pp. 403–405), B Name
 * Reactions: The Variants the Chapter Never Shows (pp. 406–408) and C The
 * Distinguishing-Test Matrix, with Stoichiometry (pp. 408–411; its answers end on
 * p. 411, and Addendum D begins on p. 412).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. C's reagent scope table (pp. 408–409, its head
 * reprinted over the page turn) is one table block, titled with the book's own bold
 * heading; the "canonical seven pairs" is a second table. The book's unnumbered
 * Figure 1 (p. 410, the identification chain for an unknown) is c12-08-C-d1, at the
 * end of C's Method, where the book prints it (the text never names it). The book
 * writes "alpha" and "alpha-H" in words in these addenda, and the words are kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 403–405 ─────────────────────────
  {
    n: 'A',
    title: 'The Reactivity Order, Fully Loaded',
    extra: true,
    kalam: 'When a question says “does not react with HCN,” reach for sterics, not electronics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has built the two-site carbonyl picture, the nucleophilic-addition family, the aldol/Cannizzaro fork, the reducing-agent map, and the carboxylate-stability argument for acidity. Six examinable gaps remain, and this addendum closes exactly those. Addendum A loads the reactivity order with the cases the chapter stops short of — substituted benzaldehydes and the steric extremes NCERT’s own exercises quote. Addendum B covers the name-reaction variants the chapter never shows: the cross Cannizzaro with its hydride bookkeeping, intramolecular aldol cyclisation (the JEE Advanced staple), ketone aldols with their real product names, and the semicarbazide regiochemistry puzzle. Addendum C completes the distinguishing-test matrix — Schiff’s test, the full scope table with what each reagent misses, the canonical seven NCERT pairs — and adds the stoichiometry (two silver atoms per aldehyde group, four for methanal) that numerical items in JEE and NEET papers require. Addendum D expands acidity into the full NCERT ladder with its positional drills and the ortho effect. Addendum E works NCERT’s signature structure-elucidation puzzles end to end. Addendum F collects the physical-state micro-facts and odd corners (melting-point alternation, paraldehyde, decarboxylation reactivity) examiners fire without warning. Additional topic G then reads this chapter’s JEE/NEET question patterns and turns them into a targeting plan.',
      },
      {
        t: 'p',
        html: 'The chapter establishes the default order — aldehyde > ketone, aliphatic > aromatic, methanal most reactive — with the two reasons (electronic and steric). What it does not do is rank the cases examiners actually list: benzaldehydes with ring substituents, and the heavily hindered ketones NCERT’s exercises name. This section is that ranking, with the reasoning that produces it.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The two-dial algorithm.</b> Reactivity toward nucleophilic addition rises with the positive charge on the carbonyl carbon (electronic dial) and falls with crowding around it (steric dial). Read each substituent twice — once per dial:<br>• Alkyl groups: electron-donating (+I) and bulky — turn both dials down. Hence methanal > ethanal > propanone > butanone.<br>• Aryl groups directly on the carbonyl: donate by resonance into the C=O — turn the electronic dial down hard. Hence any aliphatic aldehyde > benzaldehyde, and acetophenone > benzophenone.<br>• Ring substituents on an aryl aldehyde: an electron-withdrawing group (NO<sub>2</sub>) pulls charge back out of the ring and re-activates the carbonyl; an electron-donating group (CH<sub>3</sub>) pushes more charge in and de-activates it further.<br>• Electron-withdrawing groups on the alpha carbon (Cl<sub>3</sub>C–): super-activate (chloral > methanal).',
      },
      {
        t: 'p',
        html: '<b>The answers to NCERT’s intext 12.4:</b><br>butanone < propanone < propanal < ethanal<br>acetophenone < p-tolualdehyde < benzaldehyde < p-nitrobenzaldehyde',
      },
      {
        t: 'p',
        html: 'The second line is the one students fumble: p-tolualdehyde is less reactive than benzaldehyde (methyl donates), and p-nitrobenzaldehyde is more reactive (nitro withdraws). Both are fine distinctions within the aromatic family, which as a whole sits below the aliphatic aldehydes. (Intext 12.4 and the other NCERT numbers in these Additional topics — examples, intext questions and exercises — are from the earlier NCERT edition, where Aldehydes, Ketones and Carboxylic Acids was Unit 12; the current NCERT Class 12 book numbers the chapter Unit 8.)',
      },
      {
        t: 'p',
        html: '<b>The steric extremes.</b> Di-tert-butyl ketone is the standard “least reactive” answer: two enormous groups on one carbonyl. And NCERT’s exercise 12.18(i) makes the same point inside a ring: cyclohexanone forms a cyanohydrin in good yield, but 2,2,6-trimethyl​cyclohexanone does not — the three methyl groups flanking the carbonyl block the nucleophile’s perpendicular approach. When a question says “does not react with HCN,” reach for sterics, not electronics.',
      },
      {
        t: 'p',
        html: '<b>The bisulphite consequence.</b> Because the NaHSO<sub>3</sub> addition is an equilibrium, it lies to the right only for aldehydes, unhindered aliphatic methyl ketones and small cyclic ketones (an aryl methyl ketone such as acetophenone adds little), and to the left for bulky ketones — which is why the crystalline bisulphite adduct separates and purifies aldehydes from mixtures, and why “which of these forms a bisulphite adduct?” is really a steric question.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Ranking toward HCN',
        q: 'Arrange toward HCN addition, most reactive first: propanal, benzaldehyde, propanone, butanone.',
        steps: [
          '<b>Speed reasoning.</b> Aldehydes beat ketones (one alkyl group, not two: both dials favour them). Among the ketones, propanone (two methyls) beats butanone (methyl + ethyl, bulkier). Benzaldehyde is the aromatic aldehyde — ring resonance de-activates it, so it slides between the aliphatic aldehyde and the ketones.',
        ],
        ans: 'propanal > benzaldehyde > propanone > butanone.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — The substituted benzaldehydes',
        q: 'Arrange in increasing reactivity toward nucleophilic addition: p-tolualdehyde, p-nitrobenzaldehyde, benzaldehyde, acetaldehyde.',
        steps: [
          'Acetaldehyde is aliphatic — the most reactive of the set. Within the benzaldehydes, read the ring substituent: CH<sub>3</sub> donates (+I/hyperconjugation), making p-tolualdehyde less reactive than benzaldehyde; NO<sub>2</sub> withdraws, making p-nitrobenzaldehyde more reactive than benzaldehyde.',
        ],
        ans: 'p-tolualdehyde < benzaldehyde < p-nitrobenzaldehyde < acetaldehyde. (This is NCERT intext 12.4(ii) with the aliphatic benchmark added.)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — The case that fails to react',
        q: 'Cyclohexanone forms a cyanohydrin in good yield, but 2,2,6-trimethyl​cyclohexanone does not. Explain.',
        steps: [
          'HCN addition requires the cyanide to approach the carbonyl carbon roughly perpendicular to its plane. In 2,2,6-trimethyl​cyclohexanone, methyl groups at both alpha positions (two on one side, one on the other) wall off that approach. The electronic dial is barely changed — it is the steric dial that slams shut. The same logic explains why di-tert-butyl ketone is the classic unreactive ketone.',
        ],
        ans: 'Steric shielding of the carbonyl carbon by the three alpha methyl groups prevents nucleophilic approach; cyclohexanone itself is unhindered and reacts normally.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Arrange in increasing reactivity toward nucleophilic addition: ethanal, propanal, propanone, butanone.',
            a: 'Butanone < propanone < propanal < ethanal (NCERT intext 12.4(i)).',
          },
          {
            q: '[NEET] Which is more reactive toward nucleophilic addition: benzaldehyde or propanal? Give the reason in one line.',
            a: 'Propanal. The benzene ring donates electron density into the carbonyl by resonance, reducing the positive charge on its carbon.',
          },
          {
            q: '[JEE Main] Arrange in increasing reactivity: acetophenone, p-tolualdehyde, benzaldehyde, p-nitrobenzaldehyde.',
            a: 'Acetophenone < p-tolualdehyde < benzaldehyde < p-nitrobenzaldehyde (NCERT intext 12.4(ii)).',
          },
          {
            q: '[JEE Main] Which forms a bisulphite addition compound: pentan-2-one or pentan-3-one? Why?',
            a: 'Pentan-2-one — it is a methyl ketone, so the bisulphite equilibrium lies to the right; pentan-3-one is too hindered and the equilibrium lies to the left.',
          },
          {
            q: '[JEE Advanced] 2,2,2-​Trichloroethanal (chloral) is more reactive than methanal toward nucleophilic addition, even though both are aldehydes. Explain, and predict chloral’s behaviour with water.',
            a: 'The three chlorines withdraw strongly (−I), making the carbonyl carbon exceptionally electron-poor — more so than methanal’s. With water it adds across the C=O to form chloral hydrate, a rare stable gem-diol, for the same reason.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 406–408 ─────────────────────────
  {
    n: 'B',
    title: 'Name Reactions: The Variants the Chapter Never Shows',
    extra: true,
    kalam: '“Formaldehyde is always oxidised in a crossed Cannizzaro” is the examinable one-liner.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the aldol/Cannizzaro fork cleanly: alpha-H present → aldol; no alpha-H → Cannizzaro under concentrated alkali. Four variants sit just beyond that fork and appear in papers regularly. The chapter works none of them: it names the intramolecular aldol once, defines the ketol without a real example, and forms a semicarbazone without asking why only one –NH<sub>2</sub> reacts.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. The cross Cannizzaro — formaldehyde always pays.</b> When two different aldehydes without alpha-H meet concentrated alkali, the question is which one is oxidised and which reduced. The mechanism decides: hydroxide adds first to the more reactive, less hindered carbonyl — almost always formaldehyde — and that adduct is the hydride donor. So HCHO is oxidised to formate and the partner is reduced to its alcohol:<br>C<sub>6</sub>H<sub>5</sub>CHO + HCHO →<sup>conc. NaOH</sup> C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH + HCOONa<br>Benzaldehyde → benzyl alcohol; formaldehyde → sodium formate. “Formaldehyde is always oxidised in a crossed Cannizzaro” is the examinable one-liner.',
      },
      {
        t: 'p',
        html: '<b>2. The intramolecular aldol — count ring size first.</b> A dicarbonyl with suitably placed alpha-H folds onto itself: the enolate attacks the other carbonyl within the same molecule. Five- and six-membered rings form readily; strained three- and four-membered rings do not, and larger rings form far more slowly. The product then dehydrates to a cyclic alpha,beta-unsaturated ketone. Two canonical results to know cold:<br>• Hexane-2,5-dione, CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>COCH<sub>3</sub> → 3-methyl​cyclopent-2-en-1-one (a five-membered ring).<br>• Heptane-2,6-dione, CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>COCH<sub>3</sub> → 3-methyl​cyclohex-2-en-1-one (a six-membered ring).',
      },
      {
        t: 'p',
        html: 'The exam version asks “how many cyclic aldol products can this dione give?” — count the distinct alpha positions whose enolate closes a 5- or 6-membered ring.',
      },
      {
        t: 'p',
        html: '<b>3. The ketone aldol — real products, real names.</b> Ketones self-condense the same way aldehydes do, giving a ketol. Propanone with dilute alkali gives 4-hydroxy-4-methyl​pentan-2-one (diacetone alcohol), which on heating dehydrates to 4-methyl​pent-3-en-2-one — mesityl oxide, a name NCERT prints in its nomenclature table. Recognising “mesityl oxide = the aldol condensation product of acetone” has settled more than one MCQ.',
      },
      {
        t: 'p',
        html: '<b>4. Semicarbazide — only one NH<sub>2</sub> condenses.</b> Semicarbazide, H<sub>2</sub>N–NHCONH<sub>2</sub>, carries two –NH<sub>2</sub> groups, yet a semicarbazone forms through only one. The –NH<sub>2</sub> attached to the carbonyl has its lone pair delocalised into the C=O by amide resonance and is not nucleophilic (nor is the –NH– next to the C=O); the –NH<sub>2</sub> at the other end, bonded to nitrogen (H<sub>2</sub>N–NH–), keeps its lone pair and attacks. The result for propanal is CH<sub>3</sub>CH<sub>2</sub>CH=N–NHCONH<sub>2</sub> — three nitrogens and one oxygen in the product, an atom count JEE Main has asked for directly.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Cross Cannizzaro bookkeeping',
        q: 'A mixture of benzaldehyde and formaldehyde is heated with concentrated NaOH. Give the products and the oxidation-state logic behind them.',
        steps: [
          'Neither aldehyde has alpha-H, so Cannizzaro conditions apply. OH<sup>−</sup> adds preferentially to formaldehyde — the less hindered, more reactive carbonyl — and that adduct transfers hydride to benzaldehyde. The hydride donor is oxidised; the acceptor is reduced.',
        ],
        ans: 'Benzyl alcohol + sodium formate. Formaldehyde is oxidised (C: 0 → +2); benzaldehyde is reduced (C: +1 → −1 at the carbinol carbon).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — The intramolecular aldol',
        q: 'Heptane-2,6-dione is treated with dilute NaOH and the product is heated. Identify the final product and explain why a six-membered ring results rather than a four-membered one.',
        steps: [
          'The enolate formed at the C-1 methyl attacks the C-6 carbonyl, and the new bond between C-1 and C-6 closes a ring of six atoms (C-1 through C-6). Six-membered rings form essentially strain-free. The resulting β-hydroxy ketone then loses water from the new tertiary carbinol carbon (the former C-6) to give the conjugated enone, with the C=C between the old C-1 and C-6 conjugated to the C-2 carbonyl. A different enolisation (at C-3 or C-5) would have to close a strained four-membered ring, so the six-membered pathway wins.',
        ],
        ans: '3-Methyl​cyclohex-2-en-1-one, via intramolecular aldol condensation and dehydration. Ring size (5 or 6 atoms) is the controlling factor.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — The acetone self-condensation',
        q: 'Propanone is treated with dilute Ba(OH)<sub>2</sub> and the product is heated with acid. Name both the intermediate and the final product, and classify the reaction.',
        steps: [
          'Propanone has alpha-H on both methyls, so it undergoes aldol: the enolate attacks a second molecule’s carbonyl to give the ketol 4-hydroxy-4-methyl​pentan-2-one (diacetone alcohol). Heating eliminates water to give the conjugated enone 4-methyl​pent-3-en-2-one — mesityl oxide.',
        ],
        ans: 'Diacetone alcohol → mesityl oxide; an aldol (self-) condensation of a ketone.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Methanal and 2,2-dimethyl​propanal are heated with conc. NaOH. Give the products.',
            a: 'Both lack alpha-H → cross Cannizzaro. Methanal is oxidised to sodium formate; 2,2-dimethyl​propanal is reduced to 2,2-dimethyl​propan-1-ol.',
          },
          {
            q: '[NEET] In a crossed Cannizzaro of HCHO with any other aldehyde lacking alpha-H, which partner is oxidised and why?',
            a: 'Methanal (HCHO): OH<sup>−</sup> adds to it preferentially (least hindered, most reactive carbonyl), and its adduct donates the hydride, so formaldehyde ends up as formate.',
          },
          {
            q: '[JEE Main] Hexane-2,5-dione with dilute alkali followed by heating gives a cyclic enone. Name it and give its ring size.',
            a: '3-Methyl​cyclopent-2-en-1-one; five-membered ring.',
          },
          {
            q: '[JEE Main] Name the aldol condensation product of propanone after dehydration, and give its IUPAC name.',
            a: 'Mesityl oxide; 4-methyl​pent-3-en-2-one.',
          },
          {
            q: '[JEE Advanced] Semicarbazide has two –NH<sub>2</sub> groups but forms a semicarbazone through only one. Explain, and state how many N and O atoms the propanal semicarbazone contains.',
            a: 'The –NH<sub>2</sub> bonded to C=O has its lone pair tied up in amide resonance and is not nucleophilic; the –NH<sub>2</sub> at the hydrazine end (H<sub>2</sub>N–NH–), not conjugated with the C=O, attacks the carbonyl. The propanal semicarbazone contains 3 N and 1 O, as its structure CH<sub>3</sub>CH<sub>2</sub>CH=N–NHCONH<sub>2</sub> shows.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 408–411 ─────────────────────────
  {
    n: 'C',
    title: 'The Distinguishing-Test Matrix, with Stoichiometry',
    extra: true,
    kalam: 'The silver mirror is a redox reaction with a definite ratio.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers Tollens’, Fehling’s and the iodoform test, and flags that Fehling’s fails for benzaldehyde. Three things remain: the Schiff’s test (which examiners invoke), the complete scope table including what each reagent misses, and the mole ratios behind the silver mirror — which numerical items demand.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'The full reagent scope table',
        head: ['Reagent', 'Positive result', 'Responds', 'Silent'],
        rows: [
          ['2,4-DNP (Brady’s reagent)', 'yellow/orange/red ppt', 'all aldehydes and ketones', 'acids, alcohols, esters'],
          ['Tollens’ (ammoniacal AgNO<sub>3</sub>)', 'silver mirror', 'all aldehydes, aliphatic and aromatic (also formic acid and α-hydroxy ketones such as fructose)', 'ordinary ketones'],
          ['Fehling’s (A: CuSO<sub>4</sub>; B: Rochelle salt + alkali)', 'red-brown Cu<sub>2</sub>O ppt', 'aliphatic aldehydes (also formic acid and α-hydroxy ketones)', 'aromatic aldehydes, ordinary ketones'],
          ['Benedict’s', 'red-brown Cu<sub>2</sub>O ppt', 'aliphatic aldehydes (also α-hydroxy ketones such as fructose)', 'aromatic aldehydes, ordinary ketones'],
          ['Schiff’s reagent', 'pink/magenta colour restored', 'aldehydes', 'ketones (very slow or nil)'],
          ['I<sub>2</sub>/NaOH (iodoform)', 'yellow CHI<sub>3</sub> ppt', 'CH<sub>3</sub>CO– joined to H, an alkyl or an aryl group (ethanal, methyl ketones); CH<sub>3</sub>CH(OH)– alcohols', 'everything else, including acetic acid and its esters and amides'],
          ['NaHSO<sub>3</sub>', 'crystalline adduct', 'aldehydes, unhindered aliphatic methyl ketones, small cyclic ketones', 'bulky ketones, aryl methyl ketones (acetophenone)'],
          ['NaHCO<sub>3</sub>', 'CO<sub>2</sub> effervescence', 'carboxylic acids (and very strong phenols)', 'ordinary phenols, carbonyls'],
        ],
      },
      {
        t: 'p',
        html: '<b>Schiff’s reagent — the one the chapter omits.</b> Schiff’s reagent is rosaniline hydrochloride decolourised by passing SO<sub>2</sub>. An aldehyde restores the magenta colour; a ketone does not (or does so far too slowly to matter). Note the division of labour: Schiff’s detects aldehydes whether they are aliphatic or aromatic, so it complements Fehling’s, which misses aromatic aldehydes. Benzaldehyde: Tollens’ positive, Schiff’s positive, 2,4-DNP positive, Fehling’s negative — a combination examiners have asked for verbatim.',
      },
      {
        t: 'p',
        html: '<b>The canonical seven pairs (NCERT exercise 12.13).</b> Learn these as the template for every “distinguish” question:',
      },
      {
        t: 'table',
        title: null,
        head: ['Pair', 'Test', 'Positive member'],
        rows: [
          ['propanal / propanone', 'Tollens’ or Fehling’s', 'propanal'],
          ['acetophenone / benzophenone', 'iodoform', 'acetophenone (CH<sub>3</sub>CO–)'],
          ['phenol / benzoic acid', 'NaHCO<sub>3</sub>', 'benzoic acid (CO<sub>2</sub>)'],
          ['benzoic acid / ethyl benzoate', 'NaHCO<sub>3</sub>', 'benzoic acid'],
          ['pentan-2-one / pentan-3-one', 'iodoform', 'pentan-2-one (methyl ketone)'],
          ['benzaldehyde / acetophenone', 'Tollens’, or iodoform', 'benzaldehyde (Tollens’); acetophenone (iodoform)'],
          ['ethanal / propanal', 'iodoform', 'ethanal'],
        ],
      },
      {
        t: 'p',
        html: '<b>The stoichiometry the numericals need.</b> The silver mirror is a redox reaction with a definite ratio. Oxidising an aldehyde to a carboxylate releases two electrons; each Ag<sup>+</sup> needs one. Hence two moles of silver per mole of an aldehyde with one –CHO group:<br>RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3 OH<sup>−</sup> → RCOO<sup>−</sup> + 2 Ag↓ + 4 NH<sub>3</sub> + 2 H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'Fehling’s mirrors the same two-electron budget: two Cu<sup>2+</sup> per aldehyde, giving one Cu<sub>2</sub>O:<br>RCHO + 2 Cu<sup>2+</sup> + 5 OH<sup>−</sup> → RCOO<sup>−</sup> + Cu<sub>2</sub>O↓ + 3 H<sub>2</sub>O',
      },
      { t: 'p', html: 'So 0.5 mol of propanal deposits 1.0 mol of silver — not 0.5. Methanal is the exception: the methanoate it forms is oxidised further, to carbonate, so with excess reagent one mole of methanal deposits four moles of silver (a dialdehyde such as glyoxal, OHC–CHO, with two –CHO groups, also gives four).' },
      { t: 'fig', id: 'c12-08-C-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Numerical — Counting the silver',
        q: '0.5 mol of propanal is oxidised completely by Tollens’ reagent. How many moles of silver are deposited?',
        steps: [
          'Propanal → propanoate is a two-electron oxidation; each Ag<sup>+</sup> + e<sup>−</sup> → Ag. So moles of Ag = 2 × 0.5.',
        ],
        ans: '1.0 mol Ag.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — The benzaldehyde test bundle',
        q: 'Benzaldehyde gives a positive result in which of: (i) Tollens’, (ii) Fehling’s, (iii) iodoform, (iv) 2,4-DNP?',
        steps: [
          '<b>Speed reasoning.</b> Tollens’: yes — it is an aldehyde, and Tollens’ responds to aromatic aldehydes. Fehling’s: no — aromatic aldehydes do not reduce it. Iodoform: no — C<sub>6</sub>H<sub>5</sub>CHO has no CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– unit. 2,4-DNP: yes — every aldehyde and ketone condenses with Brady’s reagent.',
        ],
        ans: '(i) and (iv) only.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board — Choosing the discriminating reagent',
        q: 'A student tries to distinguish ethanal from benzaldehyde with Tollens’ reagent and fails. Why does the attempt fail, and which reagents succeed?',
        steps: [
          'Both are aldehydes and Tollens’ responds to both — the mirror forms in each tube, so nothing is distinguished. Fehling’s solution separates them: ethanal (aliphatic) gives the red-brown Cu<sub>2</sub>O precipitate, benzaldehyde (aromatic) does not. The iodoform test also works: ethanal carries CH<sub>3</sub>CO– and gives yellow CHI<sub>3</sub>; benzaldehyde does not.',
        ],
        ans: 'Tollens’ responds to both, so it cannot distinguish them. Use Fehling’s (ethanal positive) or the iodoform test (ethanal positive).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between acetophenone and benzophenone by a chemical test.',
            a: 'Iodoform test: acetophenone (CH<sub>3</sub>CO–) gives yellow CHI<sub>3</sub>; benzophenone (two phenyls, no methyl on the carbonyl) does not.',
          },
          {
            q: '[NEET] Vanillin (an aromatic aldehyde) does not respond to Fehling’s solution. Explain.',
            a: 'Fehling’s reagent is reduced only by aliphatic aldehydes; vanillin’s –CHO is attached to a benzene ring, so no Cu<sub>2</sub>O forms (though it does reduce Tollens’).',
          },
          {
            q: '[JEE Main] Which reagent distinguishes pentan-2-one from pentan-3-one, and what is observed?',
            a: 'Iodoform test: pentan-2-one (a methyl ketone) gives a yellow CHI<sub>3</sub> precipitate; pentan-3-one does not.',
          },
          {
            q: '[JEE Main] How many moles of Cu<sub>2</sub>O form when 1 mol of ethanal is oxidised by Fehling’s solution?',
            a: 'One mole: the equation is RCHO + 2 Cu<sup>2+</sup> + 5 OH<sup>−</sup> → RCOO<sup>−</sup> + Cu<sub>2</sub>O + 3 H<sub>2</sub>O.',
          },
          {
            q: '[JEE Advanced] A compound gives positive 2,4-DNP and iodoform tests but no silver mirror. It is not an aldehyde; it is a straight-chain compound of five carbons that responds to NaHSO<sub>3</sub>. Identify it.',
            a: 'Pentan-2-one: 2,4-DNP positive (carbonyl), iodoform positive (CH<sub>3</sub>CO–), Tollens’ negative (ketone), and an unhindered methyl ketone that adds NaHSO<sub>3</sub>. The straight chain rules out 3-methylbutan-2-one.',
          },
        ],
      },
    ],
  },
];
