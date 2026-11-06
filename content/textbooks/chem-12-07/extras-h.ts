import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional topic H, word for word from the Class 12 Chemistry Master
 * Reference: the book's "Addendum P — What JEE & NEET Actually Ask" (pp. 360–366; it
 * opens partway down p. 360, after Addendum G's answers), kept as the last Additional
 * topic. Page 367 is the title page of the next chapter.
 *
 * Parts are the book's own headings, with its capitals. Each archetype's numbered
 * heading is a bold paragraph; its "Representative example" is a worked example tagged
 * with that label (two of the labels sit at the foot of pp. 360 and 361 in print, away
 * from their examples; each is set here with its example). The graded practice set
 * prints each answer under its question; options of the first three are set one per
 * line in the question. These pages print no drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ─────────────── Additional topic H (the book's Addendum P) · pp. 360–366 ───────────────
  {
    n: 'H',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Past JEE Main, JEE Advanced, NEET and CBSE questions on this chapter fall into a clear hierarchy of themes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Past JEE Main, JEE Advanced, NEET and CBSE questions on this chapter fall into a clear hierarchy of themes.',
      },
      { t: 'p', html: 'The frequencies below are the book’s estimate from past papers, not official figures.' },
      {
        t: 'defgrid',
        title: 'Theme — Frequency',
        rows: [
          { k: 'Acidity, NaHCO<sub>3</sub> behaviour, acid–base separation', v: '<b>Highest — appears every cycle</b>' },
          { k: 'Lucas test and –OH → halide substitution', v: '<b>High</b>' },
          { k: 'Iodoform scope and haloform chains', v: '<b>High</b>' },
          { k: 'Ethers: Williamson pairing and HI cleavage', v: '<b>High</b>' },
          { k: 'Boiling point and hydrogen bonding', v: '<b>Moderate, usually assertion-reason</b>' },
          { k: 'Named phenol chemistry (cumene, Reimer–Tiemann, picric, phenolphthalein)', v: '<b>Moderate and reliable</b>' },
          { k: 'Dehydration rates and products', v: '<b>JEE Main, often numerical</b>' },
          { k: 'Preparations of alcohols (hydroboration–oxidation, reduction)', v: '<b>Moderate</b>' },
          { k: 'Multi-step sequence product identification', v: '<b>Rising in recent JEE Main papers</b>' },
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> by the book’s estimate, nearly half the questions reward three skills — placing a compound on the acidity ladder and applying the bicarbonate threshold, running the Lucas/iodoform test pair, and executing the Williamson-or-cleavage decision tree. Addenda A, D and E drill the first and third of these, and Addendum C the –OH → halide reactions behind the Lucas test; the Lucas and iodoform tests themselves are drilled in the chapter’s topics. The numerical-answer questions convert the same ideas into counts — oxygens, hydroxyl groups, alkenes — which is why Addenda B and F practise counting, not just naming.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. One-Shot Fact Recall (“acetone is the by-product of…”, “the electrophile is…”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single line with four reagent or product options; no calculation, no chain. Cumene → acetone and the Reimer–Tiemann electrophile are typical.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Build flashcards for the five signatures: cumene → phenol + acetone; Reimer–Tiemann → dichlorocarbene :CCl<sub>2</sub>; Kolbe → salicylic acid; bromine water → white 2,4,6-​tribromophenol precipitate; Lucas → conc. HCl + anhydrous ZnCl<sub>2</sub>. Each is a two-second answer if the card exists.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'The electrophile in the Reimer–Tiemann reaction is:<br>(a) CHCl<sub>3</sub><br>(b) CCl<sub>3</sub><sup>−</sup><br>(c) :CCl<sub>2</sub> (dichlorocarbene)<br>(d) Cl<sup>+</sup>',
        steps: [
          'NaOH deprotonates chloroform to the trichloromethyl carbanion, which loses chloride to give neutral dichlorocarbene — the electron-deficient species that attacks the phenoxide ring. (a) is the reagent, not the electrophile; (b) is one step too early. (d) Cl<sup>+</sup> does not form in this basic medium.',
        ],
        ans: '(c).',
      },
      { t: 'p', html: '<b>2. Acidity Statements and Assertion-Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two to four statements about phenol acidity, NaHCO<sub>3</sub> effervescence, or boiling points; pick the correct combination or the correct A/R verdict. Most such questions follow this shape.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Translate every statement into a p<i>K</i><sub>a</sub> comparison before judging it. “Fizzes with NaHCO<sub>3</sub>” means “stronger than carbonic acid (p<i>K</i><sub>a</sub> about 6.4)”. “More acidic than ethanol” means “p<i>K</i><sub>a</sub> below 15.9”. Statement-by-statement verification — never pattern-matching the whole set at once — is what the distractor design punishes you for skipping.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'Assertion (A): 2,4-Dinitrophenol produces effervescence with NaHCO<sub>3</sub> while phenol does not.<br>Reason (R): Phenol is a very weak acid while 2,4-dinitrophenol is comparatively much stronger.',
        steps: [
          'A is true: two ortho/para nitro groups pull 2,4-dinitrophenol’s p<i>K</i><sub>a</sub> far below carbonic acid’s 6.4, so it liberates CO<sub>2</sub>; phenol (p<i>K</i><sub>a</sub> 10.0) is weaker than carbonic acid and does not. R is true and is the correct explanation — the difference in acid strength is the reason for the difference in behaviour.',
        ],
        ans: 'Both true, R explains A.',
      },
      { t: 'p', html: '<b>3. The Multi-Step Sequence (PCC → NaOI → soda lime, and cousins)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A three-or-four-reagent chain over one starting material; you name the final product. A sequence question in a recent JEE Main paper is a typical case, and the underlying chain usually comes from the same family.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Walk the chain one functional-group change at a time, and know what each reagent class does: PCC stops a 2° alcohol at a ketone; NaOI (iodoform) cleaves a CH<sub>3</sub>CO– unit to CHI<sub>3</sub> plus a carboxylate one carbon shorter — and per NCERT it does not touch a C=C double bond elsewhere in the molecule; soda lime removes the carboxyl carbon (as carbonate), replacing –COONa by –H.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'Hex-4-en-2-ol on treatment with PCC gives A; A with sodium hypoiodite gives B; B heated with soda lime gives C. Identify C.',
        steps: [
          'Step 1: PCC oxidises the secondary alcohol to a ketone without touching the double bond → hex-4-en-2-one, CH<sub>3</sub>COCH<sub>2</sub>CH=CHCH<sub>3</sub>.',
          'Step 2: the CH<sub>3</sub>CO– unit is an iodoform substrate → CHI<sub>3</sub> plus sodium pent-3-enoate, NaOOCCH<sub>2</sub>CH=CHCH<sub>3</sub> (the C=C survives, exactly as NCERT notes).',
          'Step 3: soda-lime decarboxylation replaces the –COONa group by –H, so NaOOC–CH<sub>2</sub>CH=CHCH<sub>3</sub> → CH<sub>3</sub>CH=CHCH<sub>3</sub> (the double bond is taken not to move at any step; in the basic hypoiodite the C=C of hex-4-en-2-one could in principle shift into conjugation with the C=O, but the exam’s answer assumes it stays put).',
        ],
        ans: 'But-2-ene.',
      },
      { t: 'p', html: '<b>4. The Separation-Funnel / Partition Question</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A mixture dissolved in an organic solvent, shaken with an aqueous reagent; you say what stays in the organic layer. A typical example follows.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Ask of each component: does this reagent ionise it? NaOH deprotonates phenol (p<i>K</i><sub>a</sub> 10) into water-soluble phenoxide but leaves bases (aniline) and neutrals (bromobenzene) in the organic layer. NaHCO<sub>3</sub>, a weaker base, moves only acids stronger than carbonic acid: carboxylic and sulphonic acids, and phenols with two or three ortho/para nitro groups (2,4-dinitrophenol, picric acid). The threshold rule from Addendum A is doing the work.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'A mixture of phenol, aniline and bromobenzene in ethyl acetate is shaken with excess NaOH(aq). The organic layer contains:<br>(a) phenol and aniline<br>(b) bromobenzene and phenol<br>(c) bromobenzene and aniline<br>(d) only phenol',
        steps: [
          'Phenol → sodium phenoxide → aqueous layer. Aniline (a base, unreactive toward NaOH) and bromobenzene (neutral) stay in ethyl acetate.',
        ],
        ans: '(c).',
      },
      { t: 'p', html: '<b>5. The Feasibility Screen (Williamson pairing / “cannot be prepared”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four ethers or four reagent pairings; pick the one that works — or the one that cannot. This is a common question type.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Run Addendum D’s three questions: is the halide 1°? is either partner an aryl/vinyl halide? which side carries the bulk? The answer falls out mechanically.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'To make C<sub>2</sub>H<sub>5</sub>–O–C(CH<sub>3</sub>)<sub>3</sub> by Williamson synthesis, the correct pairing is:<br>(a) C<sub>2</sub>H<sub>5</sub>O<sup>−</sup> + (CH<sub>3</sub>)<sub>3</sub>CBr<br>(b) (CH<sub>3</sub>)<sub>3</sub>CO<sup>−</sup> + C<sub>2</sub>H<sub>5</sub>Br<br>(c) either<br>(d) neither',
        steps: [
          'Pairing (a) makes a 3° halide the S<sub>N</sub>2 electrophile — it only eliminates to 2-methylpropene. Pairing (b) keeps the tertiary bulk on the alkoxide and offers an unhindered 1° halide.',
        ],
        ans: '(b).',
      },
      { t: 'p', html: '<b>6. The Counting Numerical (“how many oxygens / alkenes / isomers”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A JEE Main numerical-answer item whose final step is a count — oxygen atoms in a product, hydroxyl groups, or the number of alkenes including stereoisomers.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Do the chemistry completely first; the count is a read-off, not a guess. The most-missed sub-skill is counting stereoisomers separately (cis/trans but-2-ene are two alkenes) and tracking atoms through a named route.',
      },
      {
        t: 'p',
        html: '<b>Representative example (see Addendum G):</b> carbolic acid → (conc. H<sub>2</sub>SO<sub>4</sub>) phenol-2,4-​disulphonic acid (7 O) → (conc. HNO<sub>3</sub>) picric acid (7 O); sum = <b>14</b>.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Trap 1: “Phenol gives a brown precipitate with bromine water”</b><br><b>The trap:</b> The statement is offered in exams and students nod — bromine water is brown, after all.<br><b>The fix:</b> The product is a <b>white</b> precipitate of 2,4,6-​tribromophenol, and the bromine colour is discharged. White precipitate, decolourised bromine water.',
          '<b>Trap 2: Phenol fizzes with NaHCO<sub>3</sub></b><br><b>The trap:</b> Assertion-reason items probe it; “phenol is acidic” gets overgeneralised.<br><b>The fix:</b> Phenol (p<i>K</i><sub>a</sub> 10) is weaker than carbonic acid (6.4) — no CO<sub>2</sub>. But picric acid and 2,4-dinitrophenol do fizz, and exams ask that too. The threshold, not the family name, decides.',
          '<b>Trap 3: “Propyl alcohol gives a positive haloform test”</b><br><b>The trap:</b> The hurried reader accepts any alcohol ending in –OH.<br><b>The fix:</b> Iodoform needs a CH<sub>3</sub>CH(OH)– or CH<sub>3</sub>CO– unit joined to H, an alkyl or an aryl group (so not acetic acid or its esters). Propan-1-ol has CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH — the CH<sub>3</sub> is one carbon too far. Ethanol and propan-2-ol pass; methanol and propan-1-ol fail.',
          '<b>Trap 4: Lucas timing applied uniformly</b><br><b>The trap:</b> “1° = no turbidity at room temperature” is true, but benzyl alcohol is often slipped into the options.<br><b>The fix:</b> Benzyl alcohol is 1° yet gives immediate turbidity — the benzyl cation is resonance-stabilised, so it follows the fast S<sub>N</sub>1-like path. The three-speed rule holds for simple alkyl alcohols; allylic and benzylic alcohols jump the queue.',
          '<b>Trap 5: The iodide on the wrong carbon</b><br><b>The trap:</b> Students apply “S<sub>N</sub>2 → iodide on the smaller group” to tert-butyl methyl ether and pick the methyl.<br><b>The fix:</b> With a tertiary group present, the mechanism switches to S<sub>N</sub>1 and the iodide lands on the <b>tertiary</b> carbon. Aromatic group → phenol; tertiary group → iodide on that group; benzyl group → benzyl iodide (Addendum E); otherwise, with 1° and 2° groups, the smaller alkyl takes the iodide.',
          '<b>Trap 6: Meta nitro ranked like ortho/para</b><br><b>The trap:</b> An ordering question slips m-nitrophenol between o- and p-nitrophenol as if position did not matter.<br><b>The fix:</b> At meta the NO<sub>2</sub> cannot resonance-withdraw the phenoxide charge — inductive effect only (p<i>K</i><sub>a</sub> 8.3 versus 7.2/7.1). Meta is always the weakest of the three nitrophenols, though still stronger than phenol.',
          '<b>Trap 7: Williamson with the wrong halide</b><br><b>The trap:</b> Divinyl ether looks makeable until you check the mechanism, and the reversed pairing is a favourite distractor.<br><b>The fix:</b> No S<sub>N</sub>2 on sp<sup>2</sup> carbon: aryl and vinyl halides cannot be the Williamson electrophile (a nitro-activated aryl halide reacts with an alkoxide only by nucleophilic aromatic substitution, a different mechanism), so diaryl and divinyl ethers are off the Williamson menu. Keep the halide methyl or primary, and put the bulky or aryl fragment on the alkoxide.',
          '<b>Trap 8: Statement-sorting by overall impression</b><br><b>The trap:</b> Statement-type items chain four statements where three sound right and one inverts a single fact (e.g. “phenol is more acidic than picric acid”).<br><b>The fix:</b> Grade each statement individually against NCERT before looking at the combinations — these items are built so that partial reading selects a plausible-looking wrong bundle.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Ordered easy → hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] Which preparation of phenol also yields acetone as a by-product?<br>(a) Dow process<br>(b) alkali fusion of benzenesulphonic acid<br>(c) cumene process<br>(d) hydrolysis of a diazonium salt',
            a: '(c). Cumene hydroperoxide cleaves with dilute acid into phenol and propanone (acetone); it is the dominant industrial route.',
          },
          {
            q: '[Easy] Which alcohol reacts fastest with conc. HCl/anhydrous ZnCl<sub>2</sub> at room temperature?<br>(a) butan-1-ol<br>(b) butan-2-ol<br>(c) 2-methylpropan-2-ol<br>(d) 2-methylpropan-1-ol',
            a: '(c). Lucas reactivity tracks carbocation stability; only the tertiary alcohol gives immediate turbidity. (a) and (d) are 1° (no reaction at room temperature), (b) takes about five minutes.',
          },
          {
            q: '[Easy] The correct IUPAC name of CH<sub>3</sub>CH(OH)CH<sub>2</sub>OH is:<br>(a) propan-1,2-diol<br>(b) propane-1,2-diol<br>(c) 1,2-propanol<br>(d) propane-2,1-diol',
            a: '(b). For diols the terminal “-e” of propane is retained. (a) drops it — the classic slip. (c) is not a diol name: it drops both “di” and the “-e”. (d) cites the locants out of order; they are written lowest first, 1,2.',
          },
          {
            q: '[Moderate] Arrange in increasing acidity: p-cresol, phenol, m-nitrophenol, p-nitrophenol, picric acid.',
            a: 'p-Cresol < phenol < m-nitrophenol < p-nitrophenol < picric acid. EDG (CH<sub>3</sub>) weakens; meta NO<sub>2</sub> helps by induction only; para NO<sub>2</sub> helps by resonance as well; three ortho and para NO<sub>2</sub> groups make picric acid strong enough to decompose carbonates.',
          },
          {
            q: '[Moderate] Using one test for each pair, distinguish: (i) ethanol from propan-1-ol; (ii) propan-2-ol from 2-methylpropan-2-ol.',
            a: '(i) Iodoform test (I<sub>2</sub>/NaOH): ethanol gives yellow CHI<sub>3</sub>, propan-1-ol does not — the CH<sub>3</sub>CH(OH)– unit is required. (ii) Lucas reagent: 2-methylpropan-2-ol (3°) gives immediate turbidity; propan-2-ol (2°) takes about five minutes.',
          },
          {
            q: '[Moderate] Write the Williamson pairing for 2-ethoxy-3-methylpentane and justify it in one line.',
            a: 'Sodium 3-methylpentan-2-oxide + bromoethane. The secondary fragment rides the alkoxide; the S<sub>N</sub>2 electrophile must be the unhindered primary halide (NCERT intext 11.10).',
          },
          {
            q: '[Moderate] Anisole is treated with one equivalent of HI. Give the products and explain why no aryl iodide forms, and why the reaction stops there.',
            a: 'Phenol + iodomethane. The aryl–O bond has partial double-bond character and the sp<sup>2</sup> ring carbon resists nucleophilic attack, so iodide takes the methyl; the phenol produced cannot be cleaved further for the same reason.',
          },
          {
            q: '[Hard] 3,3-Dimethylbutan-2-ol is dehydrated (conc. H<sub>2</sub>SO<sub>4</sub>, heat). The major alkene does not retain the starting skeleton. Identify it and account for the change.',
            a: '2,3-Dimethylbut-2-ene. Water loss gives a 2° cation; a 1,2-methyl shift from the quaternary neighbour creates a 3° cation, which loses a proton to give the tetrasubstituted alkene (Addendum B).',
          },
          {
            q: '[Hard] Hex-4-en-2-ol → (PCC) A → (NaOI) B → (soda lime, heat) C. Identify A, B and C.',
            a: 'A = hex-4-en-2-one (PCC stops at the ketone, C=C untouched); B = sodium pent-3-enoate + CHI<sub>3</sub> (iodoform cleaves the CH<sub>3</sub>CO– unit only); C = but-2-ene, CH<sub>3</sub>CH=CHCH<sub>3</sub> (decarboxylation replaces –COONa by –H). The double bond survives all three steps.',
          },
          {
            q: '[Hard] A mixture of benzoic acid, phenol and bromobenzene in ethyl acetate is shaken with excess aqueous NaHCO<sub>3</sub>. What does the organic layer contain, and how would the answer change with excess NaOH instead?',
            a: 'With NaHCO<sub>3</sub>: phenol and bromobenzene stay organic; only benzoic acid (p<i>K</i><sub>a</sub> 4.19 < 6.4) is deprotonated into the aqueous layer. With NaOH: only bromobenzene remains organic — NaOH is strong enough to deprotonate phenol (p<i>K</i><sub>a</sub> 10) as well. The two reagents differ by exactly the bicarbonate threshold of Addendum A.',
          },
        ],
      },

      { t: 'part', title: 'What the Addenda Add' },
      {
        t: 'p',
        html: '1. <b>The numbers behind acidity</b> (Addendum A): NCERT’s p<i>K</i><sub>a</sub> values, why a meta electron-withdrawing group helps less than an ortho or para one, and the carbonic-acid threshold behind every NaHCO<sub>3</sub> question.<br>2. <b>Rearrangement as a first-class outcome</b> (Addendum B): hydride and methyl shifts, which NCERT’s own questions (intext 11.7: butan-1-ol → but-2-ene; exercise 11.33: 3-methylbutan-2-ol → 2-bromo-2-methylbutane) and JEE product questions assume.<br>3. <b>Reagents beyond HX and the NCERT-exact industrial facts</b> (Addenda C and G): PBr<sub>3</sub>, PCl<sub>5</sub> and SOCl<sub>2</sub>; the 14% zymase cap; the denaturing recipe; the ethanol antidote for methanol poisoning; and the picric-acid route.',
      },
    ],
  },
];
