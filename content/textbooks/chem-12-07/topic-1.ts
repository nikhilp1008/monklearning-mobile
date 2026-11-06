import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topic 01, Classification, Nomenclature & Preparation: pp. 312–322 of
 * the Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. The contents lines at the top of p. 312 are not copied. Figure 7.1
 * (caption p. 314, drawn p. 315) sits under "Classification at a glance", where the
 * book prints its caption; Figure 7.2 (caption p. 317, drawn p. 318) sits under
 * "(D) Preparation of phenols — four routes". Both are redrawn in
 * lib/diagrams/chemistry-12-07.ts. Hybrid labels are upright (sp<sup>3</sup>), as
 * in Chemistry 11 Ch 9; o-, m-, p- and n-, sec-, tert- are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 312–322 ─────────────────────────
  {
    n: '01',
    title: 'Classification, Nomenclature & Preparation',
    kalam: 'Get the vocabulary and the four phenol routes locked here and the rest of the chapter becomes bookkeeping.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation slab of the whole chapter. CBSE Boards reliably ask a 1–2 mark IUPAC naming or classification question and a 2–3 mark “prepare phenol from cumene / chlorobenzene” equation. NEET front-loads single-shot MCQs on naming, on identifying 1°/2°/3° alcohols, and on the reagent for a named preparation. JEE Main turns the preparations into product-prediction (Markovnikov vs anti-Markovnikov), and JEE Advanced probes mechanism, rearrangement, and method-selection. Get the vocabulary and the four phenol routes locked here and the rest of the chapter becomes bookkeeping.',
      },
      {
        t: 'p',
        html: 'Strip one hydrogen off a hydrocarbon and bolt on an <b>–OH</b> group, and you have manufactured an entirely new personality. That single oxygen-hydrogen pair is the most sociable functional group in beginner organic chemistry: it hydrogen-bonds, it donates and accepts electrons, and it completely changes boiling points and solubility. This chapter is about three families built around oxygen.',
      },
      {
        t: 'p',
        html: 'Think about it this way. Picture the carbon skeleton as a residential building and the <b>–OH</b> group as a small shop bolted to its wall.<br>• In an <b>alcohol</b>, the shop is attached to an ordinary quiet flat — an sp<sup>3</sup> (single-bonded) carbon. The shop behaves like any neighbourhood shop. We write it R–OH.<br>• In a <b>phenol</b>, the very same shop is attached to a crowded temple-market complex — a benzene ring. Now the shop and the complex share their footfall: the ring’s delocalised electrons and the oxygen’s lone pair mingle. That sharing makes phenol behave quite differently from an alcohol (notably, more acidic — as shown later). We write it Ar–OH.<br>• In an <b>ether</b>, oxygen is not a shop at all — it is a <b>flyover</b> linking two separate colonies, R–O–R′. No O–H bond here, so ethers cannot hydrogen-bond to each other and are far more aloof (low boiling, poorly water-loving on the R side).',
      },
      {
        t: 'p',
        html: 'A useful warning that the analogy hides: the carbon wearing the –OH must have its other valencies filled <b>only by hydrogen or carbon</b>. The moment that carbon is double-bonded to another oxygen (–COOH, a carboxylic acid) or carries an –NH<sub>2</sub>, it is no longer an alcohol even though an “OH” is visibly present. The label depends on the neighbourhood, not just the presence of the group.',
      },
      {
        t: 'p',
        html: '<b>Classifying alcohols</b> is done three independent ways, and exams mix all three:<br>1. <b>By how many –OH groups:</b> one is monohydric, two dihydric (e.g. a glycol), three trihydric (e.g. glycerol), many polyhydric.<br>2. <b>By the carbon carrying the –OH:</b> if that carbon is bonded to one other carbon it is <b>primary (1°)</b>, to two it is <b>secondary (2°)</b>, to three it is <b>tertiary (3°)</b>. Methanol, CH<sub>3</sub>OH, whose carbon carries no other carbon, is counted with the primary alcohols. This single distinction will decide oxidation products, dehydration ease, and Lucas-test speed later in the chapter, so internalise it now.<br>3. <b>By hybridisation / position:</b> allylic (–OH on an sp<sup>3</sup> carbon next to a C=C), benzylic (–OH on an sp<sup>3</sup> carbon next to a ring), and vinylic (–OH directly on a C=C carbon). Vinylic alcohols (enols) are generally <b>unstable</b> and tautomerise to carbonyl compounds — a built-in limiting condition. The aryl case, –OH directly on the ring, is exactly what we call a phenol.',
      },
      {
        t: 'p',
        html: '<b>Ethers</b> classify more simply: simple/symmetrical if both groups on oxygen are identical (diethyl ether), mixed/unsymmetrical if they differ (ethyl methyl ether, anisole).',
      },
      {
        t: 'p',
        html: 'One last cultural footnote worth remembering for a viva: the word <b>“alcohol”</b> descends from the Arabic al-kohl, originally a fine powder used as eyeliner, which drifted through “sublimated essence” and “spirit of wine” before chemistry adopted it. And beware the trap that “petroleum ether” is <b>not an ether</b> — it is just a volatile mixture of alkanes that happened to inherit the old meaning of “ether” as something light and airy.',
      },

      { t: 'part', title: 'Key definitions, structures and functional groups' },
      {
        t: 'p',
        html: 'There are few numerical “formulas” in this topic; what matters are precise definitions, general molecular formulas, and the geometry of the C–O framework.',
      },
      { t: 'p', html: '<b>Definitions</b>' },
      { t: 'def', term: 'Alcohol', html: 'a compound with –OH bonded to an sp<sup>3</sup> carbon, R–OH.' },
      { t: 'def', term: 'Phenol', html: 'a compound with –OH bonded directly to an aromatic ring carbon, Ar–OH.' },
      { t: 'def', term: 'Ether', html: 'two alkyl/aryl groups joined through oxygen, R–O–R′ (the –OR unit is an <b>alkoxy</b> group).' },
      {
        t: 'p',
        html: '<b>General molecular formula</b> (saturated, acyclic, one oxygen): a monohydric alcohol and its isomeric ether share:',
      },
      {
        t: 'formula',
        kicker: 'General molecular formula',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O',
        legend: ['<i>n</i> = number of carbon atoms', 'saturated, acyclic, one oxygen'],
        note: null,
      },
      {
        t: 'p',
        html: 'so an alcohol and an ether of the same <i>n</i> are functional isomers of each other — a fact JEE loves.',
      },
      {
        t: 'p',
        html: '<b>Structure and bonding</b> (these specific numbers are exam-quotable):<br>• In an alcohol the oxygen is sp<sup>3</sup>; the C–O–H frame has a bond angle <b>slightly less than the tetrahedral</b> 109°28′, because the two lone pairs on oxygen repel the bond pairs inward.<br>• In <b>phenol</b> the oxygen is attached to an sp<sup>2</sup> ring carbon. The C–O bond length, about <b>136 pm</b>, is shorter than the ~142 pm of methanol. The shortening has two causes: (i) <b>partial double-bond character</b> from conjugation of an oxygen lone pair into the ring, and (ii) the sp<sup>2</sup> state of the attached carbon.<br>• In an <b>ether</b> the four electron pairs on oxygen sit in a roughly tetrahedral arrangement, but the C–O–C angle is <b>slightly greater</b> than tetrahedral (about 111.7°) because the two bulky R groups push apart. The C–O length (≈ 141 pm) is close to that in alcohols.',
      },
      { t: 'p', html: '<b>Classification at a glance</b>' },
      { t: 'fig', id: 'c12-07-fig-7.1' },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Because this topic has no single “derivation,” the rigorous core is two procedural systems: <b>how to name</b> these compounds, and <b>how to make</b> them. The reasoning behind each step matters more than the rule itself.',
      },
      { t: 'p', html: '<b>(A) The IUPAC naming procedure</b>' },
      {
        t: 'proc',
        title: 'Alcohols (alkanols)',
        steps: [
          '<b>Pick the parent chain</b> — the longest continuous carbon chain that contains the carbon bearing –OH. The –OH is a principal characteristic group, so it overrides “longest chain” if there is a conflict: the chain must include it.',
          '<b>Replace the alkane’s terminal “-e” with “-ol.”</b> Ethane → ethan<b>ol</b>. (Keep the “-e” before a consonant suffix and for di-/tri-ols: ethane-1,2-di<b>ol</b>, not “ethandiol.”)',
          '<b>Number to give the –OH the lowest locant</b>, then place that number just before the suffix in current IUPAC style: butan-<b>2</b>-ol.',
          'If a higher-priority group is present (acids, esters, carbonyls all outrank –OH), the –OH becomes a <b>“hydroxy-”</b> prefix instead. The accepted seniority runs carboxylic acid > ester > … > carbonyl > <b>–OH/phenol</b> > –NH<sub>2</sub> > C=C > C≡C > –OR, halo, nitro, alkyl. (This is NCERT’s list. C=C and C≡C are never named as prefixes: they stay in the parent chain as the -ene and -yne endings, and the double bond gets the lower number only when the numbering would otherwise tie. –OR, halo, nitro and alkyl are always prefixes.)',
        ],
      },
      {
        t: 'p',
        html: '<b>Phenols.</b> “Phenol” is itself the accepted IUPAC name for hydroxybenzene. Substituted phenols are named as derivatives: 2-methylphenol (o-cresol), 3-methylphenol (m-cresol), 4-methylphenol (p-cresol). The three benzenediols carry trivial names worth memorising alongside their IUPAC names because exams quote either: benzene-1,2-diol (<b>catechol</b>), benzene-1,3-diol (<b>resorcinol</b>), benzene-1,4-diol (<b>hydroquinone / quinol</b>); the trihydric benzene-1,2,3-triol is <b>pyrogallol</b>.',
      },
      {
        t: 'p',
        html: 'Two older common systems still appear in question papers, so recognise them. In the <b>“alkyl alcohol” system</b> the word “alcohol” follows the alkyl group’s name — methyl alcohol, ethyl alcohol, n-propyl alcohol — with prefixes such as n-, iso-, sec- and tert-. sec- and tert- mark –OH on a secondary or tertiary carbon (e.g. tert-butyl alcohol for 2-methylpropan-2-ol); n- marks only an unbranched chain with –OH at its end, and isobutyl alcohol (2-methylpropan-1-ol) is primary too. In the <b>carbinol system</b>, CH<sub>3</sub>OH is taken as the parent “carbinol” and other alcohols are named as its alkyl derivatives. The IUPAC alkanol name is what Boards expect, but matching a common name to its IUPAC form is a frequent one-mark NEET item.',
      },
      {
        t: 'p',
        html: '<b>Ethers (alkoxyalkanes).</b> Treat the ether as a hydrocarbon in which one H is replaced by an <b>–OR/–OAr</b> group. The <b>larger group is the parent</b> alkane; the smaller becomes the <b>alkoxy</b> substituent. So CH<sub>3</sub>–O–C<sub>2</sub>H<sub>5</sub> is <b>methoxyethane</b>; C<sub>6</sub>H<sub>5</sub>–O–CH<sub>3</sub> is <b>methoxybenzene</b> (anisole). Common names simply list both groups alphabetically + “ether,” with “di-” if identical (diethyl ether).',
      },
      { t: 'p', html: '<b>(B) Preparation of alcohols — from alkenes</b>' },
      {
        t: 'p',
        html: 'All three routes add the elements of water (H–OH) across a C=C, but they differ in <b>which carbon gets the –OH</b> and in <b>whether a carbocation forms</b>.',
      },
      {
        t: 'p',
        html: '<b>1. Acid-catalysed hydration (Markovnikov).</b> The alkene is treated with water in dilute acid. Mechanism, three steps:<br>Step 1 (protonation): C=C + H<sub>3</sub>O<sup>+</sup> → carbocation + H<sub>2</sub>O<br>Step 2 (capture): carbocation + H<sub>2</sub>O → protonated alcohol<br>Step 3 (deprotonation): protonated alcohol → R–OH + H<sup>+</sup>',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> the proton adds so as to generate the <b>more stable carbocation</b>, so the –OH lands on the <b>more substituted</b> carbon — this is Markovnikov addition. Because a free carbocation is an intermediate, <b>rearrangements are possible</b>, which can spoil the yield.',
      },
      {
        t: 'p',
        html: '<b>2. Hydroboration–oxidation, HBO (anti-Markovnikov).</b> Reagents: B<sub>2</sub>H<sub>6</sub> (or BH<sub>3</sub>·THF) followed by H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>.<br>3 R–CH=CH<sub>2</sub> →<sup>BH₃</sup> (R–CH<sub>2</sub>–CH<sub>2</sub>)<sub>3</sub>B →<sup>H₂O₂, OH⁻</sup> 3 R–CH<sub>2</sub>–CH<sub>2</sub>–OH',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> boron is electron-deficient, so the electrophilic boron attaches to the <b>less substituted</b> carbon (less steric crowding; the partial positive charge develops on the more substituted carbon during the concerted, <b>syn</b> addition). On oxidation, oxygen replaces boron with retention, so the –OH ends up on the less substituted carbon — the <b>anti-Markovnikov</b> product. There is <b>no carbocation, hence no rearrangement</b>, and the addition is stereospecifically syn.',
      },
      {
        t: 'p',
        html: '<b>3. Oxymercuration–demercuration (Markovnikov, no rearrangement).</b> Reagents: Hg(OAc)<sub>2</sub> in THF–water, then NaBH<sub>4</sub>/OH<sup>−</sup>.<br>R–CH=CH<sub>2</sub> →<sup>Hg(OAc)₂, H₂O</sup> R–CH(OH)–CH<sub>2</sub>–HgOAc →<sup>NaBH₄</sup> R–CH(OH)–CH<sub>3</sub>',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> a bridged <b>mercurinium ion</b>, not an open carbocation, is the intermediate. Water opens it at the more substituted carbon (Markovnikov), and because no free carbocation ever exists, <b>no rearrangement</b> occurs. This is the rearrangement-free way to get a Markovnikov alcohol.',
      },
      {
        t: 'p',
        html: '<b>The selectivity summary to memorise:</b> acid hydration → Markovnikov, may rearrange; oxymercuration → Markovnikov, no rearrangement; HBO → anti-Markovnikov, syn, no rearrangement.',
      },
      { t: 'p', html: '<b>(C) Preparation of alcohols — from carbonyl compounds & Grignard reagents</b>' },
      {
        t: 'p',
        html: '<b>From carbonyl compounds (reduction).</b> Aldehydes reduce to <b>primary</b> alcohols and ketones to <b>secondary</b> alcohols, using catalytic hydrogen (H<sub>2</sub>/Ni, Pt or Pd) or hydride reagents NaBH<sub>4</sub> or LiAlH<sub>4</sub>. Carboxylic acids and esters, harder to reduce, are taken to primary alcohols with LiAlH<sub>4</sub>.<br>R–CHO →<sup>H₂/Ni or NaBH₄</sup> R–CH<sub>2</sub>–OH (1°)<br>R–CO–R′ →<sup>NaBH₄</sup> R–CH(OH)–R′ (2°)',
      },
      {
        t: 'p',
        html: '<b>From Grignard reagents.</b> An alkyl/aryl magnesium halide R–MgX adds to a carbonyl carbon; aqueous work-up then gives the alcohol. The carbonyl partner sets the class: methanal → 1° alcohol, any other aldehyde → 2°, a ketone → 3°.<br>R–MgX + HCHO → R–CH<sub>2</sub>–OMgX →<sup>H₃O⁺</sup> R–CH<sub>2</sub>–OH',
      },
      {
        t: 'p',
        html: '(Reagent and apparatus must be scrupulously dry — Grignards are destroyed by any active hydrogen.)',
      },
      { t: 'p', html: '<b>(D) Preparation of phenols — four routes</b>' },
      { t: 'fig', id: 'c12-07-fig-7.2' },
      {
        t: 'p',
        html: '<b>1. From haloarenes (Dow process).</b> Chlorobenzene is heated with aqueous NaOH at about <b>623 K</b> under high pressure (<b>~300–320 atm</b>); the sodium phenoxide formed is acidified to phenol. (NCERT prints 320 atm here and 300 atm in Haloalkanes and Haloarenes; it is the same process.)<br>C<sub>6</sub>H<sub>5</sub>Cl →<sup>NaOH</sup> C<sub>6</sub>H<sub>5</sub>ONa →<sup>H⁺</sup> C<sub>6</sub>H<sub>5</sub>OH<br>(first step at 623 K, high P)<br>Balanced, the first step is C<sub>6</sub>H<sub>5</sub>Cl + 2NaOH → C<sub>6</sub>H<sub>5</sub>ONa + NaCl + H<sub>2</sub>O.',
      },
      {
        t: 'p',
        html: '<b>2. From benzenesulphonic acid (alkali fusion).</b> Benzene is sulphonated (oleum) to benzenesulphonic acid, fused with molten NaOH to sodium phenoxide, then acidified.<br>C<sub>6</sub>H<sub>6</sub> →<sup>oleum</sup> C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H →<sup>NaOH, fuse</sup> C<sub>6</sub>H<sub>5</sub>ONa →<sup>H⁺</sup> C<sub>6</sub>H<sub>5</sub>OH<br>Balanced, the fusion is C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H + 3NaOH → C<sub>6</sub>H<sub>5</sub>ONa + Na<sub>2</sub>SO<sub>3</sub> + 2H<sub>2</sub>O.',
      },
      {
        t: 'p',
        html: '<b>3. From diazonium salts.</b> An aromatic primary amine (aniline) is diazotised with NaNO<sub>2</sub> + HCl at <b>273–278 K</b>; warming the diazonium salt with water hydrolyses it to phenol.<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> →<sup>NaNO₂, HCl</sup> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> →<sup>H₂O, Δ</sup> C<sub>6</sub>H<sub>5</sub>OH + N<sub>2</sub> + HCl<br>(first step at 273–278 K)',
      },
      {
        t: 'p',
        html: '<b>4. From cumene (industrial).</b> Cumene (isopropylbenzene) is air-oxidised to cumene hydroperoxide, which dilute acid cleaves into <b>phenol and acetone</b>. Most of the world’s phenol is made this way, with acetone as a valuable by-product.<br>Cumene →<sup>O₂</sup> cumene hydroperoxide →<sup>dil. H⁺</sup> C<sub>6</sub>H<sub>5</sub>OH + (CH<sub>3</sub>)<sub>2</sub>CO',
      },
      { t: 'p', html: '<b>(E) Preparation of ethers</b>' },
      {
        t: 'p',
        html: '<b>1. By dehydration of alcohols.</b> Two molecules of a (primary) alcohol lose one water with protic acid (conc. H<sub>2</sub>SO<sub>4</sub>) at moderate temperature (~413 K) to give a <b>symmetrical</b> ether. Raising the temperature instead favours intramolecular dehydration to the alkene — a competition to flag.<br>2 R–OH →<sup>conc. H₂SO₄</sup> R–O–R + H<sub>2</sub>O<br>(at 413 K)',
      },
      {
        t: 'p',
        html: '<b>2. Williamson synthesis.</b> A sodium alkoxide (or aryloxide) displaces halide from an alkyl halide by S<sub>N</sub>2. It is the general route, including to <b>unsymmetrical</b> ethers.<br>R–O<sup>−</sup>Na<sup>+</sup> + R′–X → R–O–R′ + NaX',
      },
      {
        t: 'p',
        html: '<b>Reasoning / limiting condition:</b> because it is S<sub>N</sub>2, the <b>alkyl halide should be primary</b> (methyl/1°); a 3° halide would eliminate to an alkene instead. Put the bulk on the alkoxide side, not the halide side.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Give the IUPAC name of CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub> and classify the alcohol.',
        steps: [
          'Longest chain containing the –OH carbon: 5 carbons → pentane → pentanol.',
          'Number for lowest locant to –OH: from the left, –OH is on C-2; a methyl branch sits on C-4.',
          'Name: <b>4-methylpentan-2-ol.</b>',
          'The –OH carbon (C-2) is bonded to two other carbons → <b>secondary (2°) alcohol.</b>',
        ],
        ans: '4-methyl​pentan-2-ol, a secondary (2°) alcohol.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'How many structurally isomeric alcohols of molecular formula C<sub>4</sub>H<sub>10</sub>O are there, and how many are tertiary?',
        steps: [
          'Don’t draw ethers — the question says alcohols. Place –OH on each distinct position of the C<sub>4</sub> skeletons:',
          'Straight chain (butane): butan-1-ol (1°), butan-2-ol (2°) → 2 alcohols.',
          'Branched (isobutane skeleton): 2-methylpropan-1-ol (1°), 2-methylpropan-2-ol (3°) → 2 alcohols.',
          '<b>Speed tip:</b> a 3° alcohol needs a carbon bonded to three carbons + OH, so it needs at least four carbons total — only one such arrangement fits C<sub>4</sub>.',
        ],
        ans: 'Total = 4 isomeric alcohols; exactly 1 is tertiary (2-methylpropan-2-ol).',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: '3-methylbut-1-ene is subjected to (i) dilute H<sub>2</sub>SO<sub>4</sub> and separately (ii) BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>. Predict the major product of each and explain any difference.',
        steps: [
          'The alkene is (CH<sub>3</sub>)<sub>2</sub>CH–CH=CH<sub>2</sub>.',
          '<b>(i) Acid hydration:</b> protonation gives a 2° carbocation at C-2, which <b>rearranges</b> by a 1,2-hydride shift to the more stable 3° carbocation at C-3. Water then captures there. Major product: <b>2-methylbutan-2-ol</b> (a 3° alcohol) — note the –OH looks “moved”: it sits on C-3 of the alkene, not on C-2 where the first carbocation formed, because of rearrangement (the hydride shift moves the charge; the carbon skeleton is unchanged).',
          '<b>(ii) HBO:</b> boron adds to the terminal (less substituted) C-1, no carbocation, no rearrangement; –OH ends up on C-1. Major product: <b>3-methylbutan-1-ol</b> (a 1° alcohol).',
          'Two concepts combine: carbocation stability/rearrangement vs. the regiochemistry and mechanism of HBO. The contrast — rearranged 3° alcohol vs. clean anti-Markovnikov 1° alcohol — is the whole point.',
        ],
        ans: '(i) 2-methyl​butan-2-ol, a 3° alcohol, after a 1,2-hydride shift; (ii) 3-methyl​butan-1-ol, a 1° alcohol, with no rearrangement.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'A chemist needs propan-2-ol from propene with no risk of skeletal rearrangement, and separately needs anisole (methoxybenzene). Choose reagents for each and justify why the “obvious” alternative is inferior.',
        steps: [
          '<b>Propan-2-ol from propene (Markovnikov, rearrangement-free):</b> propene has no possibility of a more stable rearranged ion here, but the requirement “no risk of rearrangement” rules out relying on the open carbocation of acid hydration as a general habit. The disciplined choice is <b>oxymercuration–demercuration</b> (Hg(OAc)<sub>2</sub>/H<sub>2</sub>O, then NaBH<sub>4</sub>/OH<sup>−</sup>): it delivers the Markovnikov 2° alcohol through a bridged mercurinium ion, so no free carbocation can rearrange. (Acid hydration would give the same product here but trains a route that fails on substrates like worked example 3.)',
          '<b>Anisole, C<sub>6</sub>H<sub>5</sub>–O–CH<sub>3</sub>, by Williamson:</b> combine <b>sodium phenoxide + methyl iodide</b> (C<sub>6</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>I). The bulk and the aryl character are on the <b>oxide</b> side and the S<sub>N</sub>2 electrophile is the unhindered methyl halide — ideal. The reversed pairing, “phenyl halide + sodium methoxide,” <b>fails</b>: aryl halides do not undergo ordinary S<sub>N</sub>2, so no ether forms. Method selection hinges on which fragment can be the S<sub>N</sub>2 electrophile.',
        ],
        ans: 'Propan-2-ol: oxymercuration–demercuration (Hg(OAc)<sub>2</sub>/H<sub>2</sub>O, then NaBH<sub>4</sub>/OH<sup>−</sup>). Anisole: sodium phenoxide + methyl iodide, not phenyl halide + sodium methoxide.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the IUPAC names of (a) (CH<sub>3</sub>)<sub>3</sub>C–OH and (b) CH<sub>3</sub>–O–CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>, and classify (a).',
            a: '(a) 2-methylpropan-2-ol, tertiary; (b) 1-methoxypropane.',
          },
          {
            q: '[NEET] Which of these is not an alcohol: ethanol, benzyl alcohol, acetic acid, cyclohexanol? Give the reason in one line.',
            a: 'Acetic acid — its “OH” carbon is double-bonded to oxygen (a –COOH), so it is a carboxylic acid, not an alcohol.',
          },
          {
            q: '[JEE Main] Starting from benzene only (plus any inorganic reagents), outline a two-step preparation of phenol via the sulphonic-acid route, with conditions.',
            a: 'Step 1: sulphonate benzene with oleum (fuming H<sub>2</sub>SO<sub>4</sub>) → benzenesulphonic acid. Step 2: fuse with solid NaOH at high temperature (molten alkali) → sodium phenoxide, then acidify with dilute HCl → phenol.',
          },
          {
            q: '[JEE Main] Give the major product when 2-methylprop-1-ene undergoes (i) acid-catalysed hydration and (ii) hydroboration–oxidation. Name both products.',
            a: '(i) 2-methylpropan-2-ol (3°, Markovnikov); (ii) 2-methylpropan-1-ol (1°, anti-Markovnikov).',
          },
          {
            q: '[JEE Advanced] Propose a Grignard route to 2-phenylbutan-2-ol, identifying the carbonyl compound and the Grignard reagent. (More than one valid pairing exists; give one and state the alcohol class formed.)',
            a: 'E.g. acetophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>) + ethylmagnesium bromide (C<sub>2</sub>H<sub>5</sub>MgBr), then H<sub>3</sub>O<sup>+</sup> → 2-phenylbutan-2-ol, a tertiary alcohol.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The IUPAC name of CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–OH is:',
        opts: [
          { label: 'propan-1,2-diol', nudge: '<b>(a)</b> drops the “-e,” a classic slip for polyols.' },
          { label: 'propane-1,2-diol', nudge: null },
          { label: '1,2-propanol', nudge: '<b>(c)</b> uses the obsolete locants-first “1,2-propanol” form and drops “di”: with two –OH groups the suffix must be “-diol”.' },
          { label: 'propane-2,1-diol', nudge: '<b>(d)</b> has the right locants in the wrong order: locants are cited in ascending order, 1,2.' },
        ],
        correct: 1,
        solution: 'Two –OH groups → diol; the terminal “-e” of propane is <b>retained</b> before “-diol,” and the locants are cited lowest-first as 1,2.',
      },
      {
        t: 'mcq',
        q: 'Anti-Markovnikov hydration of propene to propan-1-ol is best achieved by:',
        opts: [
          { label: 'dilute H<sub>2</sub>SO<sub>4</sub>', nudge: '<b>(a)</b> is acid hydration — Markovnikov, giving propan-2-ol.' },
          { label: 'BH<sub>3</sub>·THF then H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>', nudge: null },
          {
            label: 'Hg(OAc)<sub>2</sub>/H<sub>2</sub>O then NaBH<sub>4</sub>',
            nudge: '<b>(c)</b> is oxymercuration — also Markovnikov. The trap is reading “no rearrangement” (true of both b and c) as the deciding clue; the deciding clue is regiochemistry.',
          },
          { label: 'H<sub>2</sub>O/H<sub>3</sub>PO<sub>4</sub>', nudge: '<b>(d)</b> is acid hydration — Markovnikov, giving propan-2-ol.' },
        ],
        correct: 1,
        solution: 'Only HBO gives the anti-Markovnikov 1° alcohol.',
      },
      {
        t: 'mcq',
        q: 'Which preparation of phenol yields acetone as a commercially useful by-product?',
        opts: [
          { label: 'Dow process', nudge: '<b>(a)</b> gives NaCl as its by-product, not acetone.' },
          { label: 'alkali fusion of benzenesulphonic acid', nudge: '<b>(b)</b> gives sodium sulphite, Na<sub>2</sub>SO<sub>3</sub>, not acetone.' },
          { label: 'cumene process', nudge: null },
          { label: 'hydrolysis of diazonium salt', nudge: '<b>(d)</b> liberates N<sub>2</sub> gas.' },
        ],
        correct: 2,
        solution: 'Cumene hydroperoxide cleaves into phenol and acetone. Students who only remember “phenol from a benzene ring” miss that acetone is the <b>(c)</b>-specific signature.',
      },
      {
        t: 'mcq',
        q: 'For making the unsymmetrical ether C<sub>2</sub>H<sub>5</sub>–O–C(CH<sub>3</sub>)<sub>3</sub> by Williamson synthesis, the correct pairing is:',
        opts: [
          {
            label: 'C<sub>2</sub>H<sub>5</sub>O<sup>−</sup> + (CH<sub>3</sub>)<sub>3</sub>C–Br',
            nudge: 'In <b>(a)</b> the 3° halide would eliminate to isobutylene instead of substituting — the most common Williamson trap.',
          },
          { label: '(CH<sub>3</sub>)<sub>3</sub>C–O<sup>−</sup> + C<sub>2</sub>H<sub>5</sub>Br', nudge: null },
          { label: 'either works equally', nudge: '<b>(c)</b> ignores the elimination problem.' },
          { label: 'neither can form this ether', nudge: '<b>(d)</b> is wrong because <b>(b)</b> is perfectly viable.' },
        ],
        correct: 1,
        solution: 'S<sub>N</sub>2 needs an unhindered alkyl halide, so the <b>primary</b> C<sub>2</sub>H<sub>5</sub>Br must be the electrophile and the bulky 3° fragment must be the alkoxide.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling phenol “an alcohol.”</b> They share –OH but phenol’s oxygen sits on an sp<sup>2</sup> aromatic carbon, which changes acidity, bond length, and reactivity. Treat them as separate families.',
          '<b>Markovnikov / anti-Markovnikov mix-ups.</b> Lock the table: acid hydration & oxymercuration = Markovnikov; HBO = anti-Markovnikov. Forgetting that acid hydration can rearrange (but oxymercuration cannot) costs Advanced marks.',
          '<b>Wrong parent chain in naming.</b> The chain must include the carbon bearing –OH even if a longer chain exists elsewhere; then give –OH the lowest locant.',
          '<b>Dropping the “-e” in diols/triols.</b> It is ethane-1,2-di<b>ol</b>, not “ethandiol.”',
          '<b>Putting the bulky group on the halide in Williamson</b> (3° halide → elimination, no ether).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed).</b> For “how many isomeric alcohols of C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O,” count positions of –OH on each carbon skeleton rather than drawing every molecule, and remember a 3° alcohol first becomes possible only at C<sub>4</sub>. For preparation MCQs, classify the question in one beat by its signature: “acetone by-product” ⇒ cumene; “623 K, high pressure” ⇒ Dow; “273–278 K diazotisation” ⇒ diazonium route; “syn” or “anti-Markovnikov” ⇒ HBO (“no rearrangement” alone also fits oxymercuration).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Families',
            note: 'alcohol R–OH (–OH on sp<sup>3</sup> C) · phenol Ar–OH (–OH on ring) · ether R–O–R′ (no O–H). Alcohol & its ether isomer share C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O.',
          },
          {
            f: 'Classify alcohols 3 ways',
            note: 'number of –OH (mono/di/poly) · carbon type (1°/2°/3°) · position (allylic/benzylic/vinylic; vinylic = unstable enol).',
          },
          {
            f: 'Naming',
            note: 'longest chain through the –OH carbon → “-ol,” lowest locant; keep “-e” for di-/tri-ols; ethers = alkoxyalkane (bigger group = parent); “phenol” is itself the IUPAC name; benzene-1,2-diol = catechol, benzene-1,3-diol = resorcinol, benzene-1,4-diol = hydroquinone.',
          },
          {
            f: 'Alcohols from alkenes',
            note: 'acid hydration → <b>Markovnikov, may rearrange</b>; oxymercuration → <b>Markovnikov, no rearrangement</b>; HBO (BH<sub>3</sub>; H<sub>2</sub>O<sub>2</sub>/OH<sup>−</sup>) → <b>anti-Markovnikov, syn, no rearrangement</b>.',
          },
          {
            f: 'Phenol — four routes',
            note: 'chlorobenzene/Dow (623 K, high P) · benzenesulphonic acid (alkali fusion) · diazonium hydrolysis (273–278 K) · <b>cumene (→ phenol + acetone, industrial)</b>.',
          },
          {
            f: 'Ethers',
            note: 'Williamson RO<sup>−</sup> + R′X (S<sub>N</sub>2 — keep the halide 1°); or acid dehydration of 1° alcohols (symmetrical only).',
          },
        ],
        aids: ['“BHO Backwards” — <b>B</b>oron <b>H</b>ydroboration → <b>O</b>H goes to the <b>opposite</b> (anti-Markovnikov) carbon.'],
      },
    ],
  },
];
