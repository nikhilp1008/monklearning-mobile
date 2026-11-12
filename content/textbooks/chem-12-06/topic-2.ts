import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 02, Chemical Reactions & Mechanisms: pp. 264–275 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. Figures 6.1 and 6.2 (captions p. 267, drawn p. 268) and 6.3 and 6.4
 * (captions p. 269, drawn p. 270) sit in "Key mechanisms and procedures" where
 * the book cites them; they are redrawn in lib/diagrams/chemistry-12-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 264–275 ─────────────────────────
  {
    n: '02',
    title: 'Chemical Reactions & Mechanisms',
    kalam: 'A small, eager nucleophile in mild conditions runs the substitution race; a bulky, strong base at high temperature wins the elimination race.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the highest-yield block of the entire chapter. S<sub>N</sub>1 versus S<sub>N</sub>2 (with stereochemistry) is a near-certain JEE Main MCQ and a recurring JEE Advanced reasoning problem; NEET tests reactivity orders and “which gives a racemic mixture.” CBSE Boards reliably ask the S<sub>N</sub>1/S<sub>N</sub>2 mechanism or the substitution-versus-elimination distinction for 3–5 marks, and the low reactivity of aryl halides is a perennial short-answer favourite.',
      },
      {
        t: 'p',
        html: 'Recall the one image that drives this whole chapter: the polar C–X bond leaves carbon electron-poor (C<sup><i>δ</i>+</sup>) and the halogen ready to leave. An electron-rich species — a <b>nucleophile</b> — is drawn to that carbon like a customer to a half-open shop. When the nucleophile bonds to carbon and the halogen departs, we call it <b>nucleophilic substitution</b>. That is the headline reaction of haloalkanes, and everything else in this topic is a variation on the theme.',
      },
      {
        t: 'p',
        html: 'But there is a complication, and it is the source of most exam traps. The very same reagent that can act as a nucleophile (attacking carbon) can instead act as a <b>base</b> (grabbing a hydrogen from the carbon next door, the β-carbon). If it does the latter, the molecule kicks out HX and forms a double bond — that is <b>elimination</b>. So a haloalkane facing a base/nucleophile is at a fork in the road, and which path wins is “a race won by the fastest runner.” A small, eager nucleophile in mild conditions runs the substitution race; a bulky, strong base at high temperature wins the elimination race.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture nucleophilic substitution as a relay baton pass on the track at a school sports day. In the <b>S<sub>N</sub>2</b> style, the incoming runner (nucleophile) comes up from behind and takes the baton in the very instant the outgoing runner (halide) lets go — one smooth, simultaneous motion. Because the new runner pushes in from the back, the molecule’s “umbrella” flips inside-out, exactly like an umbrella caught in a Mumbai monsoon gust. That flip is <b>inversion of configuration</b>. In the <b>S<sub>N</sub>1</b> style, the outgoing passenger steps off the train first (the halide leaves, forming a flat carbocation), and only then does the new passenger board — and since the carriage door is now open on both sides, passengers board from either face equally. Equal boarding from both faces gives a 50:50 mixture of mirror images — <b>racemisation</b>.',
      },
      {
        t: 'p',
        html: 'Now extend the same intuition to <b>aryl halides</b>. Here the halogen is welded onto the aromatic ring: its lone pair delocalises into the π system, the C–X bond gains partial double-bond character, becomes shorter and stronger, and the carbon is the more electronegative sp<sup>2</sup> type. The halogen simply refuses to leave under ordinary conditions, so aryl halides are extremely sluggish toward nucleophilic substitution — the opposite of their reactive alkyl cousins.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b> The S<sub>N</sub>1/S<sub>N</sub>2 framework applies to sp<sup>3</sup> (alkyl) halides only. <b>Simple primary</b> halides go almost exclusively S<sub>N</sub>2 (no stable carbocation available; benzyl and allyl halides can also ionise, and crowded neopentyl halides are very slow by S<sub>N</sub>2); <b>tertiary</b> halides go S<sub>N</sub>1 or elimination (the 3° carbocation is stable, and a strong base tips them to elimination); <b>secondary</b> halides sit on the fence and respond to conditions. <b>Aryl and vinyl halides</b> do neither simple mechanism — S<sub>N</sub>1 is ruled out (no resonance stabilisation for the unstable phenyl/vinyl cation) and S<sub>N</sub>2 is blocked (the backside is shielded by the ring in an aryl halide, and repelled by the π cloud in both). They react only under forcing conditions; an aryl halide also reacts when strong electron-withdrawing groups are placed ortho/para to the halogen.',
      },

      { t: 'part', title: 'Key definitions, reactivity orders and data' },
      {
        t: 'p',
        html: '<b>The three reaction families of haloalkanes:</b> (1) nucleophilic substitution, (2) elimination, (3) reaction with metals.',
      },
      {
        t: 'p',
        html: '<b>Nucleophilic substitution — two mechanisms.</b>',
      },
      {
        t: 'formula',
        kicker: 'S<sub>N</sub>2',
        main: 'Rate = <i>k</i>[R–X][Nu<sup>−</sup>]',
        legend: [
          'S<sub>N</sub>2 = substitution, nucleophilic, bimolecular',
          '<i>k</i> = rate constant',
          '[R–X] = concentration of the alkyl halide',
          '[Nu<sup>−</sup>] = concentration of the nucleophile',
          'Second order, molecularity 2',
          'One concerted step, proceeds with inversion of configuration',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'S<sub>N</sub>1',
        main: 'Rate = <i>k</i>[R–X]',
        legend: [
          'S<sub>N</sub>1 = substitution, nucleophilic, unimolecular',
          '<i>k</i> = rate constant',
          '[R–X] = concentration of the alkyl halide',
          'First order, molecularity 1',
          'Two steps via a carbocation, the slow ionisation is rate-determining, proceeds with racemisation (complete in the ideal case)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reactivity orders (memorise the direction)',
        main: 'S<sub>N</sub>1: 3° > 2° > 1° > CH<sub>3</sub>X<br>S<sub>N</sub>2: CH<sub>3</sub>X > 1° > 2° > 3°',
        legend: [
          'S<sub>N</sub>1, S<sub>N</sub>2 = nucleophilic substitution, unimolecular and bimolecular',
          '3°, 2°, 1° = tertiary, secondary, primary alkyl halides',
          'CH<sub>3</sub>X = methyl halide',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'S<sub>N</sub>1 tracks <b>carbocation stability</b> (more substituted = more stable cation); S<sub>N</sub>2 tracks <b>steric openness</b> (less crowded = easier backside attack). Allylic and benzylic halides are exceptionally fast in S<sub>N</sub>1 because their carbocations are resonance-stabilised.',
      },
      {
        t: 'formula',
        kicker: 'Leaving-group order',
        main: 'R–I > R–Br > R–Cl ≫ R–F',
        legend: ['R = alkyl group', 'C–X = carbon–halogen bond', 'Same for both mechanisms, set by C–X bond strength', 'I<sup>−</sup>, the weakest base, is also the easiest anion to leave'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Solvent:</b> S<sub>N</sub>1 is favoured by <b>polar protic</b> solvents (water, alcohols) that stabilise both the carbocation and the departing anion; a higher dielectric constant means a faster S<sub>N</sub>1.',
      },
      {
        t: 'p',
        html: '<b>Substitution versus elimination — the conditions that decide:</b><br>R–X + aqueous KOH, lower temp. → R–OH (substitution)<br>R–X + alcoholic KOH, higher temp. → alkene (elimination)',
      },
      {
        t: 'p',
        html: '<b>Saytzeff (Zaitsev) rule:</b> in dehydrohalogenation, the major alkene is the <b>more substituted</b> one (more alkyl groups on the doubly bonded carbons) — it is the more stable product.',
      },
      {
        t: 'p',
        html: '<b>Reactions with metals (one-liners):</b><br>• <b>Grignard reagent:</b> R–X + Mg →<sup>dry ether</sup> R–MgX. The C–Mg bond is covalent but strongly polar (C<sup><i>δ</i>−</sup>); destroyed by any proton source, so moisture must be rigorously excluded.<br>• <b>Wurtz reaction:</b> 2 R–X + 2Na →<sup>dry ether</sup> R–R + 2NaX (doubles the carbon count; two different halides would give a mixture).<br>• <b>Wurtz–Fittig:</b> alkyl halide + aryl halide + Na/dry ether → <b>alkylarene</b>.<br>• <b>Fittig:</b> 2 Ar–X + 2Na →<sup>dry ether</sup> <b>biaryl</b> (Ar–Ar) + 2NaX.',
      },
      {
        t: 'p',
        html: '<b>Haloarene reactivity:</b> nucleophilic aromatic substitution (NAS) is extremely slow (resonance + sp<sup>2</sup> carbon + no S<sub>N</sub>1 + ring repulsion). It is <b>accelerated by electron-withdrawing groups (EWGs, such as –NO<sub>2</sub>) at ortho/para</b> positions (which stabilise the intermediate negative charge); a meta-EWG gives no such resonance help, and only a small inductive one. In electrophilic aromatic substitution (EAS), the halogen is <b>deactivating but ortho/para-directing</b>.',
      },

      { t: 'part', title: 'Key mechanisms and procedures' },
      {
        t: 'p',
        html: '<b>A. The S<sub>N</sub>2 mechanism — one concerted step</b>',
      },
      {
        t: 'p',
        html: 'The nucleophile approaches the electrophilic carbon from the side directly opposite the leaving halogen (backside attack), because the C–X bond’s antibonding orbital is accessible only from behind. As the Nu–C bond forms, the C–X bond breaks <b>simultaneously</b>, passing through a single transition state in which carbon is transiently five-coordinate and roughly sp<sup>2</sup> (the three unchanged groups lie in a plane, with Nu and X on the axis).',
      },
      { t: 'fig', id: 'c12-06-fig-6.1' },
      {
        t: 'p',
        html: 'Because attack is from the back, the other three groups “flip” — the configuration <b>inverts</b> (Walden inversion). The rate depends on both reactants meeting in that one step, hence second order. Steric crowding at carbon slows it dramatically, which is why methyl and primary halides are fastest and tertiary halides essentially cannot react this way.',
      },
      {
        t: 'p',
        html: '<b>B. The S<sub>N</sub>1 mechanism — two steps via a carbocation</b>',
      },
      {
        t: 'p',
        html: '<b>Step 1 (slow, rate-determining):</b> the polarised C–X bond ionises on its own, helped by solvation in a polar protic solvent, giving a planar carbocation and the halide ion. Because only the halide is leaving in this step, the rate depends on the alkyl halide concentration alone.',
      },
      {
        t: 'p',
        html: '<b>Step 2 (fast):</b> the nucleophile attacks the flat, sp<sup>2</sup> carbocation. Since the cation is planar, the nucleophile can approach from <b>either face with equal probability</b>, producing both configurations in equal amount — a racemic mixture. This is the ideal case, and the answer to write in an exam: S<sub>N</sub>1 gives racemisation. Real reactions usually fall a little short of it: the departing halide briefly shields the face it left, so the product is largely racemised with some net inversion.',
      },
      { t: 'fig', id: 'c12-06-fig-6.2' },
      {
        t: 'p',
        html: 'The greater the carbocation stability, the easier Step 1, so tertiary, benzylic and allylic halides race ahead in S<sub>N</sub>1.',
      },
      {
        t: 'p',
        html: '<b>C. Elimination (β-elimination)</b>',
      },
      {
        t: 'p',
        html: 'When a haloalkane bearing a β-hydrogen meets a strong base (alcoholic KOH, heat), the base removes a β-hydrogen while the halogen leaves from the α-carbon, forming a C=C bond. If more than one β-hydrogen is available, <b>Saytzeff’s rule</b> predicts the more substituted (more stable) alkene as the major product. This one-step path is called E2: the H and X leave from opposite sides of the C–C bond, as the figure draws them (Additional topic B sets it beside E1).',
      },
      { t: 'fig', id: 'c12-06-fig-6.3' },
      {
        t: 'p',
        html: '<b>D. Reactions with metals</b>',
      },
      {
        t: 'p',
        html: 'Grignard formation simply inserts magnesium into the C–X bond in dry ether. Wurtz and its aromatic relatives (Wurtz–Fittig, Fittig) couple two organic fragments using sodium, building larger carbon skeletons.',
      },
      {
        t: 'p',
        html: '<b>E. Nucleophilic substitution in haloarenes — addition–elimination</b>',
      },
      {
        t: 'p',
        html: 'Ordinary aryl halides resist substitution, but an EWG ortho/para to the halogen changes everything. The nucleophile adds to the ring carbon bearing the halogen, generating a resonance-stabilised carbanion intermediate (the Meisenheimer complex); an ortho/para nitro group can park the negative charge on its own oxygen, stabilising the intermediate strongly. The halide is then expelled to restore aromaticity.',
      },
      { t: 'fig', id: 'c12-06-fig-6.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Predict and name the reaction and product when <b>2-bromobutane</b> is treated with (a) aqueous KOH and (b) alcoholic KOH (heated). For (b), state the major product and the rule used.',
        steps: [
          '<b>(a) Aqueous KOH, milder:</b> the hydroxide acts as a nucleophile and substitutes bromide → <b>butan-2-ol</b> (CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub>). This is <b>nucleophilic substitution</b>.',
          '<b>(b) Alcoholic KOH, heated:</b> hydroxide now acts as a strong base and removes a β-hydrogen → <b>elimination</b> (dehydrohalogenation). Two alkenes are possible (but-1-ene and but-2-ene); by <b>Saytzeff’s rule</b> the more substituted <b>but-2-ene</b> is the major product.',
        ],
        ans: '(a) butan-2-ol, substitution; (b) but-2-ene (major), elimination by Saytzeff’s rule.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these is hydrolysed fastest by an S<sub>N</sub>1 pathway: 1-chlorobutane, 2-chlorobutane, 2-chloro-2-​methylpropane, or chlorobenzene?',
        steps: [
          '<b>The trap & the shortcut.</b> Don’t compute anything — S<sub>N</sub>1 speed = carbocation stability. Rank the cations: tertiary (from 2-chloro-2-​methylpropane) > secondary (2-chlorobutane) > primary (1-chlorobutane); chlorobenzene can’t form a stable aryl cation (no S<sub>N</sub>1). So the tertiary halide wins instantly.',
          '<b>Mental elimination:</b> strike chlorobenzene first (aryl ⇒ no S<sub>N</sub>1), then pick the most substituted of the rest.',
        ],
        ans: '2-chloro-2-​methylpropane (forms the stable 3° carbocation).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Optically active (−)-2-bromobutane reacts with CN<sup>−</sup> in acetone (a good S<sub>N</sub>2 setting). Predict the stereochemical relationship between reactant and product, and explain using the mechanism. Then state what the outcome would have been had the substrate been tertiary and the conditions ionising.',
        steps: [
          '<b>Step 1 — identify the mechanism:</b> a secondary substrate with a strong nucleophile in a polar aprotic solvent favours <b>S<sub>N</sub>2</b>.',
          '<b>Step 2 — stereochemistry:</b> S<sub>N</sub>2 proceeds by backside attack, so the product has the <b>inverted configuration</b> relative to the reactant. CN takes the place of Br on the same carbon, from the opposite side, and the other three groups flip — a single, optically active product (not racemic).',
          '<b>Step 3 — contrast:</b> had the substrate been a chiral tertiary halide in an ionising (polar protic) medium, it would react by <b>S<sub>N</sub>1</b> through a planar carbocation, and attack from both faces would give a <b>racemic mixture</b> (optically inactive).',
          '(This is exactly the point the syllabus tests by pairing S<sub>N</sub>2-inversion against S<sub>N</sub>1-racemisation — do not confuse the two.)',
        ],
        ans: 'S<sub>N</sub>2 → inversion → single optically active inverted product.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Three chlorobenzene derivatives are treated with hot aqueous NaOH: (I) chlorobenzene, (II) 1-chloro-4-​nitrobenzene, (III) 1-chloro-2,4-​dinitrobenzene. Arrange them in increasing order of rate of nucleophilic substitution and justify mechanistically. Why does a nitro group at the meta position fail to help?',
        steps: [
          '<b>Mechanism:</b> with a nitro group on the ring, substitution is <b>addition–elimination</b>. The hydroxide adds to the carbon bearing chlorine, creating a carbanion whose negative charge is delocalised into the ring. An electron-withdrawing –NO<sub>2</sub> at ortho or para can accept that charge onto its oxygen, dramatically stabilising the intermediate and speeding the slow addition step. Chlorobenzene (I) has no such group: hot aqueous NaOH barely touches it. It reacts only under Dow’s conditions (623 K, 300 atm) or, with NaNH<sub>2</sub>, by the benzyne route (both in Topic 04), so it simply ranks last here.',
          '<b>Counting activating groups:</b> (I) has none, (II) has one para-NO<sub>2</sub>, (III) has two NO<sub>2</sub> at ortho and para — so stabilisation, and hence rate, increases with the number of well-placed EWGs.<br>(I) < (II) < (III)',
          '<b>Why meta fails:</b> the resonance structures that carry the carbanion’s negative charge place it on the carbons that are ortho/para to the point of attack. A nitro group at the meta position is never on one of those charge-bearing carbons, so it cannot delocalise the charge onto its oxygen — it offers no resonance stabilisation to the intermediate. (Its inductive pull still helps a little, far less than an ortho or para nitro.)',
        ],
        ans: 'Rate (I) < (II) < (III); ortho/para-EWGs stabilise the addition intermediate by resonance, meta-EWGs do not.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the mechanism (with the rate law) for the reaction of bromomethane with hydroxide ion, and state the stereochemical outcome.',
            a: 'S<sub>N</sub>2, rate = <i>k</i>[CH<sub>3</sub>Br][OH<sup>−</sup>]. In a single concerted step OH<sup>−</sup> attacks carbon from the side opposite Br, the C–O bond forming as the C–Br bond breaks: CH<sub>3</sub>Br + OH<sup>−</sup> → CH<sub>3</sub>OH + Br<sup>−</sup>. Outcome: inversion of configuration. Bromomethane is achiral, so the flip cannot be seen here; it shows only with a chiral substrate.',
          },
          {
            q: '[NEET] Which undergoes S<sub>N</sub>2 fastest: 1-bromopropane, 2-bromopropane, or 2-bromo-2-​methylpropane?',
            a: '1-bromopropane (least steric hindrance → fastest S<sub>N</sub>2).',
          },
          {
            q: '[JEE Main] 2-bromo-3-​methylbutane is heated with alcoholic KOH. Give the structures of all possible alkenes and identify the Saytzeff (major) product.',
            a: 'The two alkenes are: 2-methylbut-2-ene, (CH<sub>3</sub>)<sub>2</sub>C=CHCH<sub>3</sub> (Saytzeff major) vs 3-methylbut-1-ene, (CH<sub>3</sub>)<sub>2</sub>CH–CH=CH<sub>2</sub> (minor); the more substituted alkene dominates.',
          },
          {
            q: '[JEE Main] Explain why benzyl chloride is hydrolysed much faster than chlorobenzene, even though both have a chlorine on or next to a benzene ring.',
            a: 'Benzyl chloride’s chlorine sits on an sp<sup>3</sup> carbon and ionises to a resonance-stabilised benzyl carbocation (fast S<sub>N</sub>1); chlorobenzene’s chlorine is on an sp<sup>2</sup> ring carbon with partial double-bond character and no stable aryl cation, so it barely reacts.',
          },
          {
            q: '[JEE Advanced] A chiral secondary bromide is subjected to (a) NaCN in dry acetone and (b) solvolysis in aqueous ethanol. Predict and contrast the optical activity of the products in each case, with mechanistic reasoning.',
            a: '(a) S<sub>N</sub>2 → inversion → single optically active product; (b) ionising solvolysis → S<sub>N</sub>1 → planar carbocation → racemic, optically inactive product in the ideal case, which is the exam answer. With a real secondary bromide the solvent’s own S<sub>N</sub>2 attack competes as well, so racemisation is partial and some net inversion remains.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The hydrolysis of an optically active tertiary alkyl bromide in aqueous ethanol follows first-order kinetics. The correct statement is:',
        opts: [
          { label: 'the reaction is S<sub>N</sub>2 and proceeds with inversion', nudge: '<b>(a)</b> S<sub>N</sub>2 is bimolecular and gives inversion, not first order — and tertiary halides are too hindered for S<sub>N</sub>2.' },
          { label: 'the reaction is S<sub>N</sub>1 and proceeds with racemisation', nudge: null },
          { label: 'the rate depends on both the halide and hydroxide concentrations', nudge: '<b>(c)</b> describes second-order (S<sub>N</sub>2) kinetics; an S<sub>N</sub>1 rate is independent of the nucleophile.' },
          { label: 'no carbocation is involved', nudge: '<b>(d)</b> contradicts the very definition of S<sub>N</sub>1, whose slow step forms the carbocation.' },
        ],
        correct: 1,
        solution: 'First-order kinetics for a tertiary halide signals S<sub>N</sub>1 via a planar carbocation, giving racemisation.',
      },
      {
        t: 'mcq',
        q: 'Which halide will react fastest in an S<sub>N</sub>2 reaction with I<sup>−</sup>?',
        opts: [
          { label: '2-bromo-2-​methylpropane', nudge: '<b>(a)</b> tertiary — most hindered, slowest of the alkyl halides (essentially no S<sub>N</sub>2). A student who confuses S<sub>N</sub>2 with S<sub>N</sub>1 will wrongly pick <b>(a)</b> by recalling the S<sub>N</sub>1 order.' },
          { label: '2-bromopropane', nudge: '<b>(b)</b> secondary — slower than primary.' },
          { label: '1-bromopropane', nudge: null },
          { label: 'bromobenzene', nudge: '<b>(d)</b> aryl halide — cannot undergo S<sub>N</sub>2 at all.' },
        ],
        correct: 2,
        solution: 'S<sub>N</sub>2 rate falls with steric crowding, so the least-hindered primary halide reacts fastest.',
      },
      {
        t: 'mcq',
        q: '1-chloro-2,4-​dinitrobenzene reacts readily with aqueous NaOH, whereas chlorobenzene does not. This is because the nitro groups:',
        opts: [
          { label: 'make the C–Cl bond more ionic by induction only', nudge: '<b>(a)</b> induction alone is minor; the decisive effect is resonance, which is why position (o/p vs m) matters.' },
          { label: 'stabilise the carbanion intermediate by resonance when ortho/para to the halogen', nudge: null },
          { label: 'convert the ring carbon to sp<sup>3</sup>', nudge: '<b>(c)</b> blames the wrong agent — the attacked ring carbon does become sp<sup>3</sup> in the addition intermediate, but the hydroxide’s addition does that, not the nitro groups.' },
          { label: 'act as leaving groups themselves', nudge: '<b>(d)</b> nitro is not displaced here; chloride is the leaving group.' },
        ],
        correct: 1,
        solution: 'Ortho/para nitro groups delocalise the intermediate’s negative charge onto their oxygen, stabilising the addition step.',
      },
      {
        t: 'mcq',
        q: 'When 2-bromobutane is heated with alcoholic KOH, the major organic product is:',
        opts: [
          { label: 'butan-2-ol', nudge: '<b>(a)</b> is the substitution product expected from aqueous KOH, not alcoholic.' },
          { label: 'but-1-ene', nudge: '<b>(b)</b> but-1-ene is the less substituted (Hofmann-type) minor product — choosing it means forgetting Saytzeff’s rule.' },
          { label: 'but-2-ene', nudge: null },
          { label: 'butan-1-ol', nudge: '<b>(d)</b> cannot form from 2-bromobutane by substitution: the –OH takes bromine’s place on C-2, which gives butan-2-ol, not butan-1-ol.' },
        ],
        correct: 2,
        solution: 'Alcoholic KOH with heat promotes elimination; Saytzeff’s rule selects the more substituted <b>but-2-ene</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the stereochemical outcomes.</b> S<sub>N</sub>2 → <b>inversion</b> (single inverted product); S<sub>N</sub>1 → <b>racemisation</b> (50:50 enantiomers in the ideal case). Many students reverse these or claim S<sub>N</sub>2 racemises — it does not.',
          '<b>Reversing the reactivity orders.</b> S<sub>N</sub>1 follows 3° > 2° > 1° (carbocation stability); S<sub>N</sub>2 follows the reverse (steric). Applying the S<sub>N</sub>1 order to an S<sub>N</sub>2 question is the single most common slip.',
          '<b>Claiming aryl/vinyl halides do S<sub>N</sub>1 or S<sub>N</sub>2.</b> They do neither under ordinary conditions — no stable aryl/vinyl cation (no S<sub>N</sub>1) and a blocked, repelled backside (no S<sub>N</sub>2).',
          '<b>Forgetting the meta-EWG gives almost no boost to NAS.</b> Only ortho/para electron-withdrawing groups strongly accelerate haloarene substitution, because only they can resonance-stabilise the intermediate; a meta group helps only slightly, by induction.',
          '<b>Confusing aqueous vs alcoholic KOH.</b> Aqueous KOH → substitution (alcohol); alcoholic KOH + heat → elimination (alkene).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For any “which mechanism” question, read the substrate class first: simple primary ⇒ S<sub>N</sub>2, tertiary ⇒ S<sub>N</sub>1/elimination, aryl/vinyl ⇒ neither. Then let the conditions break ties for secondary substrates (polar protic + weak Nu ⇒ S<sub>N</sub>1; polar aprotic + strong Nu ⇒ S<sub>N</sub>2; strong bulky base + heat ⇒ elimination). Substrate-then-conditions clears almost every MCQ in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'S<sub>N</sub>2',
            note: 'one step, backside attack, rate = <i>k</i>[R–X][Nu<sup>−</sup>], <b>inversion</b>; order CH<sub>3</sub>X > 1° > 2° > 3°. Favoured by strong Nu + polar aprotic solvent.',
          },
          {
            f: 'S<sub>N</sub>1',
            note: 'two steps via planar carbocation, rate = <i>k</i>[R–X], <b>racemisation</b> (complete in the ideal case); order 3° > 2° > 1° > CH<sub>3</sub>X. Favoured by polar protic solvent; allylic/benzylic accelerated by resonance.',
          },
          {
            f: 'Leaving group',
            note: 'I > Br > Cl ≫ F (weakest C–X = best leaving group).',
          },
          {
            f: 'Substitution vs elimination',
            note: 'aqueous KOH (cooler) → substitution; <b>alcoholic KOH + heat</b> → <b>elimination</b>, major alkene by <b>Saytzeff</b> (more substituted).',
          },
          {
            f: 'Metals',
            note: 'Grignard RMgX (dry ether, moisture-sensitive); Wurtz (R–R); Wurtz–Fittig (alkylarene); Fittig (biaryl).',
          },
          {
            f: 'Haloarenes',
            note: 'very poor at NAS (resonance + sp<sup>2</sup> C + no S<sub>N</sub>1); <b>EWG at o/p accelerates</b> (resonance-stabilised intermediate), meta gives no resonance help; halogen is deactivating but o/p-directing in EAS.',
          },
        ],
        aids: [
          '“S<sub>N</sub><b>2</b> = <b>2</b> reactants, back-door, flips” (inversion).',
          '“S<sub>N</sub><b>1</b> = <b>1</b> reactant ionises first, flat cation, both faces” (racemic in the ideal case).',
          'For NAS: “nitro helps strongly only when it can ‘see’ the charge — ortho/para, never meta.”',
        ],
      },
    ],
  },
];
