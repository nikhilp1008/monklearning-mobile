import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional Topics D, E and F, word for word from the Class 12 Chemistry
 * Master Reference: D Aryl, Vinyl, Allyl, Benzyl (pp. 303–305; its answers and common
 * errors end on p. 305), E Comparison Data Drills (pp. 305–307; its answers and common
 * errors end on p. 307) and F, the book's "Addendum P – What JEE & NEET Actually Ask"
 * (pp. 307–310), kept as the last Additional topic. Page 311 is the title page of the
 * next chapter.
 *
 * Each addendum prints its answers after its practice questions; each answer is set
 * here with its own question. These pages print no drawing and no formula card; the
 * displayed orders stay on their own lines inside the paragraphs. Effect labels −I and
 * +R are upright, as in Chemistry 11 Ch 8 and 9.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 303–305 ─────────────────────────
  {
    n: 'D',
    title: 'Aryl, Vinyl, Allyl, Benzyl: The Reactivity Ladder, Complete',
    extra: true,
    kalam: 'Two rankings are asked directly: the halogen-dependent rates of haloarenes, and the full ladder across all four halide families.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter explains WHY aryl halides are inert and drills the nitro-activated addition–elimination. Two further rankings are asked directly: the halogen-dependent rates of haloarenes, and the full ladder across all four halide families.',
      },

      { t: 'part', title: 'The haloarene halogen effect – activated NAS versus EAS' },
      {
        t: 'p',
        html: '<b>Nucleophilic aromatic substitution, NAS (addition–elimination).</b> The slow step is the nucleophile’s ADDITION to form the carbanion intermediate; the C–X bond breaks only in the fast second step. So bond strength is irrelevant and the deciding factor is how strongly the halogen stabilises the carbanion by its −I effect. Fluorine, the most electronegative, stabilises it best:<br>NAS rate: ArF > ArCl > ArBr > ArI<br>2,4-Dinitro​fluorobenzene is accordingly the classic fast substrate (Sanger’s reagent chemistry) even though C–F is the strongest carbon–halogen bond.',
      },
      {
        t: 'p',
        html: '<b>Electrophilic aromatic substitution, EAS.</b> Here the ring attacks the electrophile and the halogen never leaves. Every halogen deactivates the ring (−I wins the contest for rate), so all halobenzenes react more slowly than benzene, yet every one of them directs ortho/para (the lone-pair +R effect decides orientation – NCERT’s own reconciliation). The deactivation is modest and does NOT line up with electronegativity: measured nitration rates relative to benzene are PhF 0.15, PhI 0.18, PhCl 0.033 and PhBr 0.030. Fluorine’s 2p lone pair overlaps best with the ring’s 2p orbitals, so its +R donation offsets much of its −I, and fluorobenzene is among the least deactivated. The examinable rule is the qualitative one: halogens deactivate but direct o/p – do not rank the halobenzenes by electronegativity in EAS.',
      },
      {
        t: 'p',
        html: 'Do not carry the NAS order over to haloalkanes: in S<sub>N</sub>1 and S<sub>N</sub>2 the C–X bond does break in the slow step, so RI > RBr > RCl > RF there.',
      },

      { t: 'part', title: 'The complete ladder for SN1' },
      {
        t: 'p',
        html: 'allyl, benzyl: fast, through resonance-stabilised cations<br>3° > 2° > 1° > CH<sub>3</sub>X ≫ vinyl ~ aryl (inert)<br>(Some exam sheets write benzyl ≈ allyl > 3°. That fits substituted benzylic or allylic cations; the parent benzyl and allyl chlorides do not outrun tert-butyl chloride. Compare the actual cations.)',
      },
      {
        t: 'p',
        html: 'Within benzylic systems, more phenyl and alkyl groups on the benzylic carbon mean a more stable cation and a faster S<sub>N</sub>1 (NCERT’s Example 10.7):<br>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Br < C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)Br < C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br < C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)(C<sub>6</sub>H<sub>5</sub>)Br',
      },
      {
        t: 'p',
        html: 'And the companion ranking for hydrolysis questions: benzyl chloride hydrolyses orders of magnitude faster than chlorobenzene because the former makes a resonance-stabilised, planar sp<sup>2</sup> benzyl cation while the latter has no stable cation to form.',
      },

      { t: 'part', title: 'gem- and vic-dihalide chemistry [JEE extension]' },
      {
        t: 'p',
        html: 'The chapter defines gem and vic dihalides but never reacts them. Two conversions are standard exam material:<br>• <b>vic-Dihalide + Zn dust</b> → dehalogenation to the alkene (the reverse of bromine addition – a proof-of-structure tool):<br>R–CHX–CHX–R′ + Zn → R–CH=CH–R′ + ZnX<sub>2</sub><br>• <b>gem-Dihalide + aq. KOH</b> → both halogens hydrolyse on the same carbon; the resulting gem-diol is unstable and loses water to give a CARBONYL: R–CHX<sub>2</sub> → R–CHO (from a terminal gem-dihalide), R<sub>2</sub>CX<sub>2</sub> → R<sub>2</sub>C=O (a ketone). This is a standard haloalkane → aldehyde route (best where the aldehyde has no α-H to undergo aldol in the base) and feeds multi-step synthesis questions.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Among 1-halo-2,4-​dinitrobenzenes (F, Cl, Br, I), which reacts fastest with ammonia? And how do the halobenzenes compare with benzene towards nitration, and where does nitration occur?',
        steps: [
          'NAS (addition–elimination): the rate-determining addition is accelerated by the −I stabilisation of the carbanion intermediate, strongest for F, so the fluoro compound reacts fastest (F > Cl > Br > I).',
          'EAS: every halobenzene is nitrated more slowly than benzene (−I outweighs +R for rate), but the +R lone-pair donation directs the nitro group to the ortho and para positions.',
        ],
        ans: '1-fluoro-2,4-​dinitrobenzene is fastest in NAS; all halobenzenes are deactivated in EAS yet o/p-directing.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Arrange in increasing rate of nucleophilic substitution under the conditions named: (a) 1-chloro-4-​nitrobenzene, 1-fluoro-4-​nitrobenzene, 1-bromo-4-​nitrobenzene with hot aq. NaOH; (b) chlorobenzene, benzyl chloride, 1-chlorobutane with aq. ethanol (S<sub>N</sub>1 conditions).',
        steps: [
          '(a) Addition–elimination with a para-NO<sub>2</sub> activating group: the halogen only modulates the carbanion’s stability; F > Cl > Br.',
          '(b) S<sub>N</sub>1 conditions: chlorobenzene cannot ionise (aryl cation unstable, C–Cl partially double) – slowest; 1-chlorobutane has no stable cation to form, so it reacts very slowly; benzyl chloride ionises to the resonance-stabilised benzyl cation – fastest by far.',
        ],
        ans: '(a) 1-bromo-4-​nitrobenzene < 1-chloro-4-​nitrobenzene < 1-fluoro-4-​nitrobenzene; (b) chlorobenzene < 1-chlorobutane < benzyl chloride.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is chlorobenzene less reactive than cyclohexyl chloride toward nucleophilic substitution? Give two reasons.',
            a: '(i) The C–Cl bond of chlorobenzene has partial double-bond character from resonance with the ring (shorter, stronger: 169 pm vs 177 pm); (ii) the sp<sup>2</sup> ring carbon holds the bond more tightly, the phenyl cation needed for S<sub>N</sub>1 is unstable, and the electron-rich ring repels the nucleophile’s backside approach (no S<sub>N</sub>2).',
          },
          {
            q: '[NEET] Which undergoes S<sub>N</sub>1 fastest: benzyl chloride, allyl chloride, chlorobenzene, vinyl chloride?',
            a: 'Benzyl chloride: its cation spreads the positive charge over the ring, more widely than the allyl cation does over two carbons; the aryl and vinyl halides do not undergo S<sub>N</sub>1 at all.',
          },
          {
            q: '[JEE Main] 1-fluoro-2,4-​dinitrobenzene reacts with ammonia far faster than the chloro analogue. Why, given that C–F is the stronger bond?',
            a: 'The rate-determining step is addition of NH<sub>3</sub> to form the carbanion; F, the most electronegative halogen, stabilises that carbanion best by −I. The C–F bond breaks only in the fast second step, so its strength never enters the rate.',
          },
          {
            q: '[JEE Main] Write the product of 1,2-dibromoethane + Zn dust, and of 2,2-dibromopropane + aqueous KOH.',
            a: '1,2-dibromoethane + Zn → ethene + ZnBr<sub>2</sub>; 2,2-dibromopropane + aq. KOH → propanone (acetone) via the unstable gem-diol.',
          },
          {
            q: '[JEE Advanced] Nitration of chlorobenzene is slower than nitration of benzene yet gives o- and p-nitro​chlorobenzene. Reconcile speed with orientation in two sentences.',
            a: 'Rate is governed by the stronger −I effect, which withdraws electron density and slows the ring; orientation is governed by the +R (lone-pair resonance) effect, which replenishes density specifically at ortho and para – so substitution is slower overall but lands o/p.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Ranking NAS by C–X bond strength (the bond does not break in the slow step); expecting meta-NO<sub>2</sub> to activate NAS as ortho/para does (it gets no resonance help, only a small inductive one); calling halogens “activating” because they are o/p-directing; believing aryl halides undergo slow S<sub>N</sub>1 or slow S<sub>N</sub>2 (they undergo neither – it is addition–elimination with o/p electron-withdrawing groups, forcing conditions such as the Dow process, or benzyne).',
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 305–307 ─────────────────────────
  {
    n: 'E',
    title: 'Comparison Data Drills: Dipoles, Boiling Points, Densities',
    extra: true,
    kalam: 'One-mark eliminators are built from physical data.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'One-mark eliminators are built from physical data. The chapter gives the trends; here are the dipole ladder and the numbered rules that recur, with the reasoning compressed.',
      },

      { t: 'part', title: 'The dipole ladder' },
      {
        t: 'p',
        html: 'For the methane chlorides, dipole moment falls as chlorines accumulate (values in D):<br>CH<sub>3</sub>Cl\u00a0~1.86 > CH<sub>2</sub>Cl<sub>2</sub>\u00a0~1.60 > CHCl<sub>3</sub>\u00a0~1.04 > CCl<sub>4</sub>\u00a00<br>CH<sub>3</sub>Cl has one C–Cl dipole with nothing to oppose it. In CH<sub>2</sub>Cl<sub>2</sub>, two dipoles at ~109° would by geometry alone give about 1.15 times one, so the drop from CH<sub>3</sub>Cl comes from each C–Cl bond being less polar when two chlorines pull on one carbon; CH<sub>2</sub>Cl<sub>2</sub> still keeps a net moment (highest among the polychloro set – NCERT’s own exercise answer). From there the C–Cl bond dipoles increasingly cancel by vector addition: CHCl<sub>3</sub>’s three C–Cl dipoles partly cancel, leaving a smaller moment along the C–H axis; CCl<sub>4</sub> is tetrahedrally symmetric, exactly zero. Companion fact from the chapter: chlorobenzene (1.69 D) < chloromethane (1.86 D) – resonance plus the more electronegative sp<sup>2</sup> carbon.',
      },

      { t: 'part', title: 'The boiling/melting/density rules, numbered' },
      {
        t: 'p',
        html: '1. Same alkyl group: RI > RBr > RCl > RF (van der Waals grow with mass and polarisability – NOT bond strength, NOT dipole).<br>2. Same halogen: rises with chain length; falls with branching (2-bromo-2-​methylpropane is the lowest of the bromobutanes).<br>3. Higher than the parent hydrocarbon; usually lower than the corresponding alcohol (no H-bonding).<br>4. Melting: para-dihalobenzene highest (symmetry packs best into the lattice); boiling points of o/m/p-dihalobenzenes are nearly identical.<br>5. Density: among short-chain haloalkanes, bromo, iodo and polyhalogen compounds are denser than water; monochloro and monofluoro compounds are lighter. Density rises with the number and atomic mass of the halogens. NCERT also says it rises with the number of carbons; the measured values fall for one halogen (bromoethane about 1.46, 1-bromopropane about 1.35 g mL<sup>−1</sup>).<br>6. Gases at room temperature: CH<sub>3</sub>Cl, CH<sub>3</sub>Br, C<sub>2</sub>H<sub>5</sub>Cl (and some chlorofluoromethanes); higher members liquid or solid.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which has the highest dipole moment: CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub>, CCl<sub>4</sub>?',
        steps: [
          '<b>The fast way.</b> Not “more Cl = more polar” – the C–Cl dipoles cancel more as the molecule fills with Cl. CCl<sub>4</sub> is perfectly symmetric (zero); CHCl<sub>3</sub> partly cancels; CH<sub>2</sub>Cl<sub>2</sub> keeps the largest net moment.',
          '(NCERT Exercise 10.4.)',
        ],
        ans: 'CH<sub>2</sub>Cl<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Arrange in increasing boiling point: 1-bromobutane, 2-bromobutane, 2-bromo-2-​methylpropane, bromobenzene.',
        steps: [
          'Same halogen and formula for the first three: branching lowers boiling point, so tert-butyl < sec-butyl < n-butyl. Bromobenzene’s heavy, polarisable aromatic frame sits above all C4 bromides.',
        ],
        ans: '2-bromo-2-​methylpropane < 2-bromobutane < 1-bromobutane < bromobenzene.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does chlorobenzene have a lower dipole moment than cyclohexyl chloride?',
            a: 'In chlorobenzene the Cl lone pair delocalises into the ring (partial double-bond character shortens the bond) and the ring carbon is the more electronegative sp<sup>2</sup> type, both shrinking the effective bond dipole; the sp<sup>3</sup> cyclohexyl carbon holds a full-length, fully polar C–Cl bond.',
          },
          {
            q: '[NEET] Which is denser than water: chloromethane, bromoform, 1-chloropropane, fluoromethane?',
            a: 'Bromoform only (among short-chain haloalkanes, bromo, iodo and polyhalogen compounds are denser than water; monochloro and monofluoro compounds are lighter).',
          },
          {
            q: '[JEE Main] Arrange in increasing boiling point: bromomethane, dibromomethane, bromoform, chloromethane.',
            a: 'Chloromethane < bromomethane < dibromomethane < bromoform (mass and polarisability climb).',
          },
          {
            q: '[JEE Main] Why is para-dichlorobenzene a higher-melting solid than its ortho and meta isomers although all three boil at nearly the same temperature?',
            a: 'Melting depends on crystal packing: the symmetric para isomer fits the lattice tightly and needs more energy to disrupt; boiling depends on liquid-state attractions, which are similar for all three.',
          },
          {
            q: '[JEE Advanced] CHCl<sub>3</sub> has THREE C–Cl bonds yet a smaller dipole moment than CH<sub>2</sub>Cl<sub>2</sub>. Explain with vector reasoning.',
            a: 'In CH<sub>2</sub>Cl<sub>2</sub> the two C–Cl dipoles sit at ~109° and add to a resultant of about 1.15 bond dipoles (with the two C–H dipoles small); adding a third Cl in CHCl<sub>3</sub> makes the three C–Cl vectors fan out symmetrically around the C–H axis, so they partly cancel to about 1.0 bond dipole, and each C–Cl bond is also less polar with more chlorines pulling on the carbon. The net moment along C–H is smaller.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Believing more halogen atoms always raise the dipole moment; explaining the RI > RBr > RCl boiling order by bond strength or polarity (it is van der Waals/mass); saying “all haloalkanes sink in water” (among short-chain haloalkanes, only bromo, iodo and polyhalogen compounds do); expecting melting and boiling to track each other (the para isomer proves they need not).',
      },
    ],
  },

  // ─────────────── Additional topic F (the book's Addendum P) · pp. 307–310 ───────────────
  {
    n: 'F',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'The most repeated question shape in the papers is the “which reacts fastest/slowest” ranking.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to read this addendum.</b> It summarises the question patterns that recur in previous-year JEE and NEET papers on this chapter. Use it as a checklist of what examiners actually test.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: 'A rough estimate of how the chapter’s questions divide; no official figures exist.',
      },
      {
        t: 'table',
        title: null,
        head: ['Territory', 'Rough share', 'Typical demand'],
        rows: [
          ['S<sub>N</sub>1/S<sub>N</sub>2 mechanisms and reactivity orders', '40%', 'substrate ranking, stereochemical outcome, conditions'],
          ['Named reagents and reactions', '25%', 'Finkelstein, Swarts, Sandmeyer, Hunsdiecker, SOCl<sub>2</sub>, Dow'],
          ['Polyhalogen compounds', '15%', 'chloroform storage, iodoform test, freons/DDT pairings'],
          ['Physical properties', '10%', 'boiling-point and dipole orders'],
          ['Synthesis sequences and isomer counting', '10%', 'Grignard chains, dichloro isomer counts, E1/E2 match-lists'],
        ],
      },
      {
        t: 'p',
        html: 'The most repeated question shape in the papers is the “which reacts fastest/slowest” ranking (S<sub>N</sub>1, S<sub>N</sub>2, electrophilic and nucleophilic aromatic substitution, EAS and NAS, hydrolysis), followed closely by reagent identification.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>1. The reagent fingerprint match.</b> Finkelstein = NaI/dry acetone (NaCl precipitates, Le Chatelier); Swarts = AgF, SbF<sub>3</sub>, Hg<sub>2</sub>F<sub>2</sub> or CoF<sub>2</sub> (but NOT CaF<sub>2</sub> – a classic examiner trap); Sandmeyer = CuX/HX on a diazonium salt; SOCl<sub>2</sub> = purest chloride (gaseous by-products); Hunsdiecker = RCOOAg + Br<sub>2</sub> → R–Br with one carbon fewer (silver propanoate → bromoethane); Dow = NaOH, 623 K, 300 atm → phenol. The reagent is the answer – papers ask these for identity, not for mechanism. One worked shape:',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The best reagent for converting an alcohol into a pure alkyl chloride is:<br>(a) PCl<sub>3</sub><br>(b) PCl<sub>5</sub><br>(c) SOCl<sub>2</sub><br>(d) HCl/ZnCl<sub>2</sub>.',
        steps: [
          '<b>Verified solution.</b> SOCl<sub>2</sub>: the by-products SO<sub>2</sub> and HCl are gases that leave, so nothing contaminates the chloride.',
          'PCl<sub>5</sub> leaves POCl<sub>3</sub> (liquid), PCl<sub>3</sub> leaves H<sub>3</sub>PO<sub>3</sub> (non-volatile), HCl/ZnCl<sub>2</sub> leaves the catalyst and water.',
        ],
        ans: '(c).',
      },
      {
        t: 'p',
        html: '<b>2. The mechanism ranking.</b> “Fastest S<sub>N</sub>2 with I<sup>−</sup>”: 1-bromopropane (primary, unhindered) over 2° and 3° – and bromobenzene never. “Least reactive S<sub>N</sub>1” among alkyl, allyl and benzyl halides: methyl halide (least stable cation), with benzyl/allyl/3° all fast. “Hydrolysis order”: build the carbocation ladder. Approach: classify the carbon first (1°, 2°, 3°, allyl, benzyl, vinyl, aryl), then read the mechanism off the conditions.',
      },
      {
        t: 'p',
        html: '<b>3. The alcoholic-KOH product.</b> 2-Bromobutane + alc. KOH, heat → but-2-ene (Saytzeff). Variants in the papers swap in CH<sub>3</sub>O<sup>−</sup>/CH<sub>3</sub>OH (still E2, still Saytzeff) or ask for ALL alkenes with the major flagged. The distractor set usually includes the aqueous-substitution alcohol and the Hofmann alkene.',
      },
      {
        t: 'p',
        html: '<b>4. The ambident statement pair.</b> “KCN and AgCN both generate the nitrile nucleophile under all conditions” is FALSE – AgCN is covalent and delivers N-attack (isocyanide). Papers pair this with a TRUE filler (“C<sub>2</sub>H<sub>5</sub>OH and AgCN can both generate nucleophiles”) to build a two-statement item. A strong tendency, not an inviolable law: ionic K<sup>+</sup> reagent → C or O attack (nitrile, nitrite); covalent Ag<sup>+</sup> reagent → N attack (isocyanide, nitroalkane).',
      },
      {
        t: 'p',
        html: '<b>5. The haloarene reasoning item.</b> “1-Chloro-2,4-​dinitrobenzene reacts, chlorobenzene does not – because the nitro groups stabilise the carbanion intermediate by resonance when ortho/para.” And its assertion-reason cousin: “Nitration of chlorobenzene gives m-nitro​chlorobenzene” (FALSE – o/p) “because –NO<sub>2</sub> is meta-directing” (TRUE, but it explains nothing about the halogen’s directing power). Both statements must be judged independently.',
      },
      {
        t: 'p',
        html: '<b>6. The counting and synthesis numerics.</b> Dichlorobutanes on the n-butane chain = 6 structural isomers (1,1-; 1,2-; 1,3-; 1,4-; 2,2-; 2,3-), or 10 counting stereoisomers (1,2- and 1,3- each form an enantiomeric pair; 2,3- gives a meso form plus a pair); “how many substrates beat ethyl bromide at S<sub>N</sub>2” (methyl, allyl and benzyl halides do; propyl and other 1° halides are slightly slower than ethyl, and 2°, 3°, neopentyl and vinyl/aryl halides are far slower – count carefully); “1-bromooctane to nonanoic acid” (Mg, dry ether; then CO<sub>2</sub>; then H<sub>3</sub>O<sup>+</sup> – the Grignard carboxylation adds exactly one carbon).',
      },

      { t: 'part', title: 'The traps examiners set' },
      {
        t: 'mistakes',
        items: [
          '<b>The vinyl/aryl wall.</b> CH<sub>2</sub>=CH–Cl does no S<sub>N</sub>2; chlorobenzene does no S<sub>N</sub>1/S<sub>N</sub>2. Any option that says otherwise is the trap.',
          '<b>The allyl exception.</b> Parent allyl and benzyl halides DO undergo fast S<sub>N</sub>1 although primary – resonance-stabilised cations. Papers state it as “though it is a primary halide” and mark it TRUE.',
          '<b>The meta-blindness of NAS.</b> Only o/p-EWGs stabilise the carbanion by resonance; meta-NO<sub>2</sub> gives no resonance help, only a small inductive one.',
          '<b>The halogen orders.</b> In activated NAS the order is F > Cl > Br > I (the C–X bond breaks only after the rate-determining addition); in S<sub>N</sub>1/S<sub>N</sub>2 on haloalkanes it is the reverse, RI > RBr > RCl > RF. All halobenzenes are deactivated in EAS yet o/p-directing. Never transfer one order to another reaction.',
          '<b>The iodoform net.</b> Positive test needs a CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– unit joined to H, an alkyl or an aryl group: ethanol and propan-2-ol yes; methanol and propan-1-ol no. “Any alcohol” is always wrong.',
          '<b>The paired hazards.</b> Freons → ozone depletion; DDT → bioaccumulation; chloroform → phosgene (store dark, full, with a little ethanol); papers cross-pair them deliberately.',
        ],
      },

      { t: 'part', title: 'Graded practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Board] Why is SOCl<sub>2</sub> preferred over PCl<sub>5</sub> for converting alcohols to chlorides?',
            a: 'By-products SO<sub>2</sub> and HCl escape as gases, leaving pure R–Cl.',
          },
          {
            q: '[NEET] Which reacts fastest with aq. KOH: chlorobenzene, benzyl chloride, 1-chlorobutane, vinyl chloride?',
            a: 'Benzyl chloride (a resonance-stabilised cation, and a fast S<sub>N</sub>2 as well; 1-chlorobutane reacts more slowly; the aryl/vinyl pair do not react under ordinary conditions).',
          },
          {
            q: '[NEET] The major product of 2-bromobutane + alcoholic KOH, heat, is: butan-2-ol, but-1-ene, but-2-ene, 2-methoxybutane.',
            a: 'But-2-ene (Saytzeff).',
          },
          {
            q: '[JEE Main] R–X + AgNO<sub>2</sub> gives mainly: alkyl nitrite, nitroalkane, amine, or alcohol?',
            a: 'Nitroalkane (covalent Ag → N-attack). This is clearest with a primary halide; a tertiary halide gives mostly the nitrite or an alkene, which is why the rule is a strong tendency.',
          },
          {
            q: '[JEE Main] Write the product of silver propanoate + Br<sub>2</sub> in CCl<sub>4</sub>, and name the reaction. How many carbons does the product carry relative to the acid?',
            a: 'Bromoethane (CH<sub>3</sub>CH<sub>2</sub>Br) + CO<sub>2</sub> + AgBr – Hunsdiecker; one carbon fewer than propanoate.',
          },
          {
            q: '[JEE Main] Arrange in increasing S<sub>N</sub>2 rate with KI/acetone: 2-bromopropane, bromomethane, 1-bromopropane, 2-bromo-2-​methylpropane.',
            a: '2-bromo-2-​methylpropane < 2-bromopropane < 1-bromopropane < bromomethane.',
          },
          {
            q: '[JEE Main] Chlorobenzene is nitrated. Give the products and explain why substitution is slow yet ortho/para.',
            a: 'o- and p-nitro​chlorobenzene; the −I effect deactivates (slow) while the +R effect directs o/p.',
          },
          {
            q: '[JEE Main] Which gives a positive iodoform test: methanol, ethanol, propan-1-ol, propan-2-ol?',
            a: 'Ethanol and propan-2-ol (CH<sub>3</sub>CH(OH)– unit).',
          },
          {
            q: '[JEE Advanced] p-Chlorotoluene + NaNH<sub>2</sub>/liq. NH<sub>3</sub> gives two toluidines. Name them, the mechanism, and the tell-tale feature.',
            a: 'm- and p-toluidine via the benzyne (elimination–addition) mechanism; the position-scrambled (cine) product pair is the signature.',
          },
          {
            q: '[JEE Advanced] 1-bromo-2,2-​dimethylpropane on solvolysis in aqueous ethanol gives mainly a rearranged alcohol. Identify it and justify.',
            a: '2-Methyl​butan-2-ol: a free 1° cation is too unstable to form, so a 1,2-methyl shift accompanies the slow ionisation, giving the stable 3° cation, then capture by water.',
          },
        ],
      },

      { t: 'part', title: 'Why these addenda matter' },
      {
        t: 'p',
        html: 'The chapter’s mechanism coverage is solid on definitions and stereochemical outcomes, but three demands of the papers go beyond its drills: (1) the kinetic and rearrangement side of S<sub>N</sub>1/E1 – applying rate laws to experimental data, 1,2-shifts, and the neopentyl case – which underlies almost every “unexpected product” question (Addendum A); (2) the E1/E2 split and the Hofmann orientation with bulky bases, which the chapter leaves at Saytzeff’s rule, with only passing mentions of a bulky base, a Hofmann-type minor product and E2 (Figure 6.3) (Addendum B); and (3) the halogen-dependent rates of haloarenes (ArF fastest in activated NAS; the halobenzenes’ EAS rates not following electronegativity) and the gem/vic-dihalide conversions, which synthesis questions assume (Addendum D).',
      },
    ],
  },
];
