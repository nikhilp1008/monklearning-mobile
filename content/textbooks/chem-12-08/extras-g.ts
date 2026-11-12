import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional topic G, word for word from the Class 12 Chemistry Master
 * Reference: the book's "Addendum P — What JEE & NEET Actually Ask" (pp. 418–425; it
 * opens partway down p. 418, after Addendum F's answers), kept as the last Additional
 * topic. Page 426 is the title page of the next chapter.
 *
 * Parts are the book's own headings, with its capitals. Each archetype's numbered
 * heading is a bold paragraph; a "Representative example" with its own solution is a
 * worked example tagged with that label (the book's "Solution:" label is not repeated,
 * as in Chapter 7), and one printed as a single run-in line stays a paragraph. The nine
 * traps are one mistakes block. The graded practice set prints each answer under its
 * question; options are set one per line in the question. These pages print no
 * drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ─────────────── Additional topic G (the book's Addendum P) · pp. 418–425 ───────────────
  {
    n: 'G',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'This chapter’s marks are earned at the test-tube, not the blackboard.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Sorting the JEE Main, JEE Advanced and NEET questions on this chapter (including two recent JEE Main items) by theme gives a clear hierarchy.',
      },
      { t: 'p', html: 'The frequencies below are the book’s estimate from past papers, not official figures.' },
      {
        t: 'defgrid',
        title: 'Theme — Frequency',
        rows: [
          { k: 'Distinguishing tests and their scope (Tollens’/Fehling’s/iodoform/DNP)', v: '<b>Highest — nearly one in four</b>' },
          { k: 'Reactivity ordering toward nucleophilic addition', v: '<b>High</b>' },
          { k: 'Acidity of carboxylic acids, incl. substituent and position effects', v: '<b>High</b>' },
          { k: 'Name-reaction reagent identification (Rosenmund, Wolff–Kishner, DIBAL-H, soda lime)', v: '<b>High</b>' },
          { k: 'alpha-H reactions (aldol, haloform) and Cannizzaro', v: '<b>High</b>' },
          { k: 'Reduction selectivity (NaBH<sub>4</sub>/LiAlH<sub>4</sub> scope)', v: '<b>Moderate</b>' },
          { k: 'Physical properties (bp ladders, melting points, states)', v: '<b>Moderate</b>' },
          { k: 'Numerical/atom-count items', v: '<b>JEE Main staple</b>' },
          { k: 'Multi-step sequence identification', v: '<b>Regular; set in a recent JEE Main paper</b>' },
          { k: 'Grignard and decarboxylation stoichiometry/reactivity', v: '<b>Regular</b>' },
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> this chapter’s marks are earned at the test-tube, not the blackboard. By the book’s estimate, the single most-repeated skill is mapping a compound onto the test matrix — Tollens’ for any aldehyde, Fehling’s for aliphatic only, iodoform for methyl ketones, ethanal and CH<sub>3</sub>CH(OH)– alcohols, DNP for any aldehyde or ketone, NaHCO<sub>3</sub> for acids. Right behind it sit the two ranking drills (carbonyl reactivity, acid strength) and the reagent-selection reflex (gentle reagent → aldehyde survives; acidic vs basic medium for C=O → CH<sub>2</sub>).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Order-Ranking One-Liners</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four to five compounds and a property — “increasing reactivity toward HCN addition” or “decreasing acid strength.”',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Run the two-dial algorithm (Addendum A) or the conjugate-base audit (Addendum D). Write the order physically before reading the options — the distractors are pairwise swaps designed to catch half-orders.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'Decreasing reactivity toward nucleophilic addition:<br>A. HCHO<br>B. CH<sub>3</sub>CHO<br>C. C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub><br>D. C<sub>6</sub>H<sub>5</sub>CHO<br>E. CH<sub>3</sub>COCH<sub>3</sub>',
        steps: [
          'Methanal (no alkyl donation) > ethanal (one +I) > benzaldehyde (aromatic, ring-deactivated but still an aldehyde) > propanone (two +I methyls, a ketone) > benzophenone (two deactivating phenyls).',
        ],
        ans: 'A > B > D > E > C.',
      },
      { t: 'p', html: '<b>2. Test-Scope Questions (“gives positive Fehling’s”, “distinguished by Tollens’”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of compounds and a named test; pick who responds.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Memorise the two asymmetries. Tollens’ answers for every aldehyde (so it cannot separate ethanal from benzaldehyde — a favourite false statement). Fehling’s/Benedict’s answer only for aliphatic aldehydes (so benzaldehyde and vanillin are silent). Iodoform answers for CH<sub>3</sub>CO– (joined to H, an alkyl or an aryl group) and CH<sub>3</sub>CH(OH)– regardless of family — but not for acetic acid or its esters.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'Benzaldehyde shows positive: (i) Tollens’ (ii) Fehling’s (iii) iodoform (iv) DNP test',
        steps: [
          'Tollens’ yes (aromatic aldehydes respond), Fehling’s no (aliphatic only), iodoform no (no CH<sub>3</sub>CO–), DNP yes (it is an aldehyde).',
        ],
        ans: '(i) and (iv).',
      },
      { t: 'p', html: '<b>3. Reagent Selection With a Survivor Group</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Reduce only C=O to CH<sub>2</sub> in a molecule containing an acid-sensitive group”, “most appropriate reagent for this transformation”. One functional group must change; another must survive.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Classify the medium first. Within the syllabus, C=O → CH<sub>2</sub> has two doors: Clemmensen (acidic — Zn–Hg/conc. HCl) and Wolff–Kishner (basic — NH<sub>2</sub>NH<sub>2</sub> then KOH/glycol). Acid-sensitive substrate → Wolff–Kishner; base-sensitive → Clemmensen. For stop-at-the-aldehyde reductions the doors are Rosenmund (acyl chloride), Stephen (nitrile) and DIBAL-H at low temperature (nitrile or ester); LiAlH<sub>4</sub> always over-reduces.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'To reduce only the C=O of a ketone to CH<sub>2</sub> in a molecule that also contains an acid-sensitive group, the preferred reagent is:<br>(a) Zn–Hg/conc. HCl<br>(b) LiAlH<sub>4</sub><br>(c) NH<sub>2</sub>NH<sub>2</sub>, then KOH/glycol, heat<br>(d) NaBH<sub>4</sub>',
        steps: [
          '(b) and (d) stop at the alcohol — wrong transformation. (a) is strongly acidic and would attack the sensitive group. (c) runs in base and delivers C=O → CH<sub>2</sub>.',
        ],
        ans: '(c).',
      },
      { t: 'p', html: '<b>4. Acidity Rankings With a Twist</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four acids, one of which breaks the naive rule — a vinyl acid, a methoxy-substituted benzoic acid, a positional pair.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Never rank by family name. Run the conjugate-base audit with the four principles of Addendum D: count, −I strength, distance, hybridisation. The vinyl/phenyl-directly-attached case (sp<sup>2</sup> carbon raises acidity) and the ortho effect are the two twists the examiners own.',
      },
      {
        t: 'p',
        html: '<b>Representative example:</b> acrylic acid CH<sub>2</sub>=CH–COOH is stronger than propanoic acid because the carboxyl is bonded to an sp<sup>2</sup> carbon; any statement pair claiming otherwise collapses on that single fact.',
      },
      { t: 'p', html: '<b>5. Numerical Atom-Counting</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “The semicarbazone of propanal contains x nitrogens and y oxygens; x + y = ?”, “moles of Ag deposited”, “total compounds giving positive tests”.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Draw the named derivative once — never count from the name. Semicarbazone: CH<sub>3</sub>CH<sub>2</sub>CH=N–NHCONH<sub>2</sub> → 3 N + 1 O = 4. Silver mirror: 2 Ag per –CHO group, 4 for methanal (Addendum C) → 0.5 mol propanal deposits 1.0 mol Ag.',
      },
      {
        t: 'p',
        html: '<b>Representative example:</b> propanal + semicarbazide → the semicarbazone above; x + y = 3 + 1 = <b>4</b>.',
      },
      { t: 'p', html: '<b>6. The Multi-Step Sequence ID</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Toluene → A → B → C with reagents over the arrows; name C.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Identify each reagent’s job class (oxidant / chlorinating agent / selective reductant) and walk one group change at a time.',
      },
      {
        t: 'ex',
        tag: 'Representative example',
        q: 'Toluene →<sup>KMnO₄</sup> A →<sup>SOCl₂</sup> B →<sup>H₂, Pd–BaSO₄</sup> C',
        steps: [
          'KMnO<sub>4</sub> oxidises the methyl side chain all the way → benzoic acid (A; alkaline KMnO<sub>4</sub> gives benzoate, freed by acid). SOCl<sub>2</sub> converts –COOH to the acyl chloride → benzoyl chloride (B). H<sub>2</sub>/Pd–BaSO<sub>4</sub> is Rosenmund’s poisoned catalyst → benzaldehyde (C).',
        ],
        ans: 'Benzenecarbaldehyde (benzaldehyde).',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Trap 1: Fehling’s for aromatic aldehydes</b><br><b>The trap:</b> benzaldehyde and vanillin are offered as positive to Fehling’s because they are aldehydes.<br><b>The fix:</b> Fehling’s (and Benedict’s) answer aliphatic aldehydes only. Aromatic aldehydes need Tollens’ or Schiff’s.',
          '<b>Trap 2: Using Tollens’ to separate two aldehydes</b><br><b>The trap:</b> “ethanal and benzaldehyde can be differentiated using Tollens’” sounds right because Tollens’ is the aldehyde test.<br><b>The fix:</b> Tollens’ answers both aliphatic and aromatic aldehydes; it separates an aldehyde from an ordinary ketone, never one aldehyde from another. Use Fehling’s or iodoform there.',
          '<b>Trap 3: NaBH<sub>4</sub> on carboxylic acids and esters</b><br><b>The trap:</b> NaBH<sub>4</sub> is the mild, familiar reductant, so students extend it to –COOH.<br><b>The fix:</b> NaBH<sub>4</sub> reduces aldehydes and ketones (and the very reactive acyl chlorides); it does not touch carboxylic acids or esters. Carboxylic acids need LiAlH<sub>4</sub> or diborane; esters need LiAlH<sub>4</sub>, because diborane reduces –COOH but spares esters, nitro and halo groups.',
          '<b>Trap 4: Misreading alpha-H from a benzene ring</b><br><b>The trap:</b> benzaldehyde and phenylacetaldehyde look alike at a glance.<br><b>The fix:</b> Check the alpha carbon, not the ring. Benzaldehyde has no alpha-H (Cannizzaro); phenylacetaldehyde, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO, has two (aldol).',
          '<b>Trap 5: The medium of C=O → CH<sub>2</sub></b><br><b>The trap:</b> picking Clemmensen or Wolff–Kishner by familiarity rather than by what else lives in the molecule.<br><b>The fix:</b> Acid-sensitive group → Wolff–Kishner (basic); base-sensitive group → Clemmensen (acidic). The question is always about the survivor.',
          '<b>Trap 6: “More resonance structures = more stable = stronger acid”</b><br><b>The trap:</b> the exercise-12.20 framing — phenoxide out-numbers carboxylate five structures to two.<br><b>The fix:</b> Count where the charge sits, not how many drawings exist: two equivalent oxygens beat five non-equivalent structures that park charge on carbon.',
          '<b>Trap 7: Vinyl and phenyl groups written off as donors</b><br><b>The trap:</b> assuming CH<sub>2</sub>=CH– or C<sub>6</sub>H<sub>5</sub>– must donate and weaken the acid.<br><b>The fix:</b> Directly attached sp<sup>2</sup> carbons are more electronegative than sp<sup>3</sup> alkyl carbons and raise acidity: benzoic (4.19) > acetic (4.76), acrylic > propanoic.',
          '<b>Trap 8: Halving the silver</b><br><b>The trap:</b> numerical items — assuming 1 mol Ag per mole of aldehyde because “one aldehyde, one mirror.”<br><b>The fix:</b> The aldehyde gives up two electrons; Ag<sup>+</sup> takes one each. Two moles of silver per mole of an ordinary aldehyde (four for methanal, whose methanoate is oxidised on to carbonate), and two Cu<sup>2+</sup> per aldehyde in Fehling’s.',
          '<b>Trap 9: Assertion-reason with a true-but-irrelevant reason</b><br><b>The trap:</b> an assertion-reason item — “aldehydes/ketones boil higher than hydrocarbons and ethers” (true) because “they lack intermolecular hydrogen bonding” (true, but the absence of H-bonding explains why they boil below alcohols, not why they boil above hydrocarbons — that is the dipole–dipole attraction).<br><b>The fix:</b> In A/R items, after confirming both statements, ask whether R addresses the same comparison as A. Here both are true but R explains the wrong gap → both statements true, R not the correct explanation of A (option (b) in the usual A/R scheme).',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Ordered easy → hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The Rosenmund reduction converts:<br>(a) a ketone to a secondary alcohol<br>(b) an acyl chloride to an aldehyde<br>(c) a nitrile to an aldehyde<br>(d) an ester to an aldehyde',
            a: '(b). H<sub>2</sub>/Pd–BaSO<sub>4</sub> (poisoned catalyst) stops at the aldehyde. (c) is Stephen/DIBAL-H; (d) is DIBAL-H at low temperature.',
          },
          {
            q: '[Easy] Which compound will not undergo aldol condensation?<br>(a) ethanal<br>(b) propanone<br>(c) benzaldehyde<br>(d) phenylacetaldehyde',
            a: '(c). No alpha-H on C<sub>6</sub>H<sub>5</sub>CHO. (d) is the deliberate distractor — C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO has two alpha-H.',
          },
          {
            q: '[Easy] Which acid is the weakest?<br>(a) FCH<sub>2</sub>COOH<br>(b) ClCH<sub>2</sub>COOH<br>(c) CH<sub>3</sub>CH<sub>2</sub>COOH<br>(d) HCOOH',
            a: '(c). The ethyl group’s +I effect destabilises the carboxylate; (d) at least has no alkyl donor, and (a)/(b) carry −I halogens.',
          },
          {
            q: '[Moderate] Arrange in decreasing reactivity toward nucleophilic addition: HCHO, CH<sub>3</sub>CHO, C<sub>6</sub>H<sub>5</sub>CHO, CH<sub>3</sub>COCH<sub>3</sub>, C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub>.',
            a: 'HCHO > CH<sub>3</sub>CHO > C<sub>6</sub>H<sub>5</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub> > C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub> (electronic donation rises and steric access falls along the series).',
          },
          {
            q: '[Moderate] A compound gives positive 2,4-DNP and Tollens’ tests, a negative Fehling’s test, and undergoes Cannizzaro. Name the family and give the simplest example.',
            a: 'An aromatic aldehyde with no alpha-H — benzaldehyde. (Tollens’ yes / Fehling’s no flags aromatic; Cannizzaro flags no alpha-H.)',
          },
          {
            q: '[Moderate] Choose the reagent to reduce the –CHO of a pentanal chain to –CH<sub>3</sub> (the pentanal unit to a pentyl group), given the molecule also bears a base-sensitive ester elsewhere, and justify.',
            a: 'Clemmensen reduction (Zn–Hg/conc. HCl) — it runs acidic, sparing the base-sensitive ester. Wolff–Kishner (KOH/glycol, hot) would saponify it. (Hot conc. HCl can also hydrolyse an ester slowly; the exam answer assumes it survives the acid.)',
          },
          {
            q: '[Moderate] How many moles of metallic silver are deposited when 0.25 mol of ethanal is fully oxidised by Tollens’ reagent? Write the supporting equation.',
            a: '0.50 mol. RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3 OH<sup>−</sup> → RCOO<sup>−</sup> + 2 Ag + 4 NH<sub>3</sub> + 2 H<sub>2</sub>O — two Ag per aldehyde.',
          },
          {
            q: '[Hard] A mixture of ethanal and propanal undergoes cross-aldol condensation. How many structurally distinct beta-hydroxy aldehydes form, and why does the mixture become clean if one partner is replaced by benzaldehyde?',
            a: 'Four — either aldehyde can be the enolate (nucleophile) and either the electrophile: ethanal+ethanal, propanal+propanal, and the two crossed combinations. With benzaldehyde (no alpha-H) only the other partner can enolise, so only one crossed product is possible — the mixture is cleaner, not perfectly clean, since that partner can still condense with itself, and the crossed aldol usually dehydrates (Claisen–Schmidt).',
          },
          {
            q: '[Hard] A compound A (C<sub>8</sub>H<sub>16</sub>O<sub>2</sub>) hydrolyses to acid B and alcohol C; C oxidises to B with chromic acid; C dehydrates to but-1-ene. Identify A, B, C.',
            a: 'C = butan-1-ol (a primary alcohol, since it oxidises to an acid with the same carbon count; NCERT’s question says it dehydrates to but-1-ene, though in practice but-2-ene is the major alkene), B = butanoic acid, A = butyl butanoate (NCERT exercise 12.11).',
          },
          {
            q: '[Hard] Arrange in increasing acid strength and justify each step: CH<sub>3</sub>CH<sub>2</sub>COOH, CH<sub>2</sub>=CHCOOH, HC≡CCOOH, ClCH<sub>2</sub>COOH. Then state how the same three-carbon series (propiolic, acrylic, propanoic) ranks toward soda-lime decarboxylation, and explain why the two orders are consistent.',
            a: 'Acidity (increasing), with p<i>K</i><sub>a</sub> in brackets:<br>CH<sub>3</sub>CH<sub>2</sub>COOH (4.87) < CH<sub>2</sub>=CHCOOH (4.25) < ClCH<sub>2</sub>COOH (2.86) < HC≡CCOOH (1.9)<br>The sp<sup>3</sup> alkyl carbon of propanoic acid donates and is weakest; the sp<sup>2</sup> carbon of acrylic acid is more electronegative and raises acidity; the alpha-Cl of ClCH<sub>2</sub>COOH exerts a strong −I effect that beats the sp<sup>2</sup> carbon; and the sp carbon of propiolic acid, the most electronegative hybrid, withdraws most strongly of all. Decarboxylation ease: HC≡C–COOH > CH<sub>2</sub>=CH–COOH > CH<sub>3</sub>CH<sub>2</sub>COOH. The two orders are consistent in the part they share: acidity tracks the stability of the carboxylate (charge on oxygens, helped by an electron-poor R), while decarboxylation tracks the stability of the carbanion fragment R<sup>−</sup> left after CO<sub>2</sub> departs — both favour sp over sp<sup>2</sup> over sp<sup>3</sup>, and chlorine is irrelevant to the decarboxylation series because those three acids carry none.',
          },
        ],
      },

      { t: 'part', title: 'What the Addenda Add' },
      {
        t: 'p',
        html: '1. <b>The fine reactivity and acidity orderings.</b> The chapter gives the rules, with one positional pair (2- against 4-chloro​butanoic acid) and the 4-nitro/4-methoxy benzoic acid values, but never prints NCERT’s own intext orders (the substituted-benzaldehyde series, the full fourteen-acid ladder) or the ortho effect — which is precisely the level at which ranking questions are pitched.<br>2. <b>The name-reaction variants beyond the textbook fork.</b> Cross Cannizzaro (with its “formaldehyde is always oxidised” bookkeeping), intramolecular aldol cyclisation, ketone aldols with real product names (diacetone alcohol, mesityl oxide), and the reason only one –NH<sub>2</sub> of semicarbazide reacts all appear in papers and in NCERT’s exercises but are not worked in the chapter’s sections (the intramolecular aldol is only named there, and the semicarbazone is formed without the reason).<br>3. <b>Test-scope precision and redox stoichiometry.</b> The chapter names the tests and flags Fehling’s aromatic exception, but under-specifies their blind spots (Schiff’s test missing entirely; Tollens’ unable to separate two aldehydes) and never states the two-electron budget — 2 Ag or 2 Cu<sup>2+</sup> per aldehyde group, 4 Ag for methanal — on which the numerical questions are built.',
      },
    ],
  },
];
