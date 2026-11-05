import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional Topics A, B and C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 6: Haloalkanes and Haloarenes —
 * Additional Topics" (p. 295, set at the head of Additional topic A's Introduction),
 * then A SN1 Under the Microscope: Kinetics, Rearrangement, and the Factors Table
 * (pp. 295–298), B Elimination Versus Substitution: E1, E2, and the Hofmann Exception
 * (pp. 298–301) and C The Stereochemistry Toolkit (pp. 301–303; its answers and Common
 * errors are at the top of p. 303, where Addendum D begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. The two headings over a numbered list are split
 * between the part and its list ("The four rate factors" / "In the order examiners
 * probe them"; "The five terms" / "Each with its test"). The book's unnumbered Figure 1
 * (p. 299, the mechanism triage tree) is c12-06-B-d1, after the decision matrix, where
 * the book prints it.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 295–298 ─────────────────────────
  {
    n: 'A',
    title: 'SN1 Under the Microscope: Kinetics, Rearrangement, and the Factors Table',
    extra: true,
    kalam: 'In substitution, molecularity 1 = carbocation chemistry; molecularity 2 = backside attack.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter builds the complete skeleton: the polar C–X bond, preparation routes, physical properties, S<sub>N</sub>1/S<sub>N</sub>2 with stereochemistry, elimination, the substitution product map, polyhalogens, and the haloarene playbook. What JEE (and increasingly NEET) still asks beyond that skeleton lives in five corners the chapter touches lightly or not at all: reading S<sub>N</sub>1 kinetics from experimental data and predicting its rearrangements, the E1/E2 distinction and the Hofmann exception, a rigorous stereochemistry toolkit, the halogen-dependent rates of aryl halides (why ArF is the fastest in nucleophilic substitution even though C–F is the strongest C–X bond, and why the halobenzenes’ rates in electrophilic substitution do not follow electronegativity), and the comparison data (the dipole ladder, the numbered physical-property rules) used as one-mark eliminators. Addenda A–E take these in turn; Additional topic F converts previous-year JEE and NEET papers into patterns and a graded practice set.',
      },
      {
        t: 'p',
        html: 'NCERT references are to Class 12 Chemistry Part 2, Unit 10. (Unit 10 is the earlier NCERT edition’s number, and Example 10.7 and Exercise 10.4 below are from that edition; the current NCERT Class 12 book numbers Haloalkanes and Haloarenes Unit 6.) Items marked [JEE extension] go beyond the NCERT page and are standard JEE fare.',
      },
      {
        t: 'p',
        html: 'The chapter gives the two-step mechanism, the first-order rate law, the substrate and leaving-group orders and the racemisation outcome. Three upgrades remain: reading a rate law from experimental data to name the mechanism, predicting carbocation rearrangements, and ranking all four rate factors together.',
      },

      { t: 'part', title: 'Method – the rate law is a mechanism detector' },
      {
        t: 'p',
        html: 'S<sub>N</sub>1: rate = <i>k</i>[R–X]. Doubling the nucleophile concentration does nothing; doubling the substrate concentration doubles the rate. S<sub>N</sub>2: rate = <i>k</i>[R–X][Nu]. Any kinetic statement in a question stem (“first order”, “rate doubles when both double”) is a mechanism label in disguise. Molecularity 1 = carbocation chemistry; molecularity 2 = backside attack.',
      },

      { t: 'part', title: 'The four rate factors' },
      {
        t: 'proc',
        title: 'In the order examiners probe them',
        steps: [
          '<b>Substrate (carbocation stability).</b> S<sub>N</sub>1 rate: 3° > 2° > 1° > CH<sub>3</sub>X > vinyl/aryl (the last two effectively zero – the aryl and vinyl cations are highly unstable and get no resonance stabilisation). The parent allyl and benzyl halides also react fast by S<sub>N</sub>1, even though they are primary, because their cations are resonance-stabilised – one of the most repeated “statement is true though it looks false” items in JEE and NEET papers.',
          '<b>Leaving group.</b> R–I > R–Br > R–Cl ≫ R–F for BOTH mechanisms (weakest C–X leaves best).',
          '<b>Nucleophile.</b> Irrelevant to S<sub>N</sub>1 rate (it arrives after the slow step); decisive for S<sub>N</sub>2. In polar protic solvents, nucleophilicity tracks polarisability: I<sup>−</sup> > Br<sup>−</sup> > Cl<sup>−</sup> > F<sup>−</sup>, and CN<sup>−</sup>, RS<sup>−</sup> are strong. In polar aprotic solvents (acetone, DMSO, DMF) the anions are unsolvated (“naked”), small anions become ferocious, and the halide order reverses toward F<sup>−</sup> > Cl<sup>−</sup> > Br<sup>−</sup> > I<sup>−</sup> [JEE extension]. Do not confuse nucleophilicity with basicity: I<sup>−</sup> is a superb nucleophile and a feeble base; F<sup>−</sup> is the reverse in protic media.',
          '<b>Solvent.</b> Polar protic solvents stabilise both the carbocation and the departing halide, accelerating S<sub>N</sub>1. Polar aprotic solvents solvate the cation but leave the anion free, accelerating S<sub>N</sub>2 by orders of magnitude. Swapping acetone for ethanol can flip the mechanism of a 2° substrate.',
        ],
      },

      { t: 'part', title: 'Carbocation rearrangement – the product you did not draw [JEE extension]' },
      {
        t: 'p',
        html: 'Once a carbocation forms (S<sub>N</sub>1 or E1), it usually isomerises before capture if a 1,2-hydride or 1,2-methyl shift converts it into a more stable cation. The rule is one line: <b>draw the first cation, ask whether a single shift from the adjacent carbon upgrades it, and capture the UPGRADED cation.</b> Classic case: solvolysis of 1-bromo-2,2-​dimethylpropane (neopentyl bromide). A free primary cation is too unstable to form, so a methyl shifts from the quaternary neighbour as the bromide leaves, giving a tertiary cation (2-methylbutan-2-yl) directly (on paper, the 1° cation is drawn first and then shifted); the isolated product is the rearranged tertiary alcohol, not 2,2-​dimethylpropan-1-ol. Neopentyl systems are the standard exam vehicle because their S<sub>N</sub>2 is extremely slow (the tert-butyl group blocks the backside) yet they still react by S<sub>N</sub>1 – with rearrangement as the tell-tale.',
      },

      { t: 'part', title: 'SNi – the retention pathway [JEE extension]' },
      {
        t: 'p',
        html: 'Thionyl chloride is the chapter’s “purest” chlorinating agent, because its by-products are gases. Its mechanism adds something the chapter does not give: in the absence of base, SOCl<sub>2</sub> converts R–OH to R–Cl with <b>retention</b> of configuration – the chlorosulphite intermediate delivers Cl to the same face as the leaving group (internal delivery, S<sub>N</sub>i), while SO<sub>2</sub> and HCl escape as gases. Add pyridine and the free Cl<sup>−</sup> it generates attacks from the back, flipping the outcome to inversion (ordinary S<sub>N</sub>2). Same reagent, opposite stereochemistry, decided by one additive – a favourite JEE Advanced frame.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'tert-Butyl bromide reacts with dilute hydroxide in aqueous ethanol to give tert-butyl alcohol. The rate is unchanged when the hydroxide concentration is doubled. Write the mechanism and rate law, and explain the observation.',
        steps: [
          'A 3° substrate in a polar protic solvent reacts by S<sub>N</sub>1: slow ionisation to the planar tert-butyl cation + Br<sup>−</sup>, then fast capture by water or hydroxide. The rate law is<br>Rate = <i>k</i>[tert-butyl bromide]',
          'The nucleophile does not appear because it enters only after the rate-determining step, so doubling [OH<sup>−</sup>] changes nothing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Statement 1: CH<sub>2</sub>=CH–CH<sub>2</sub>–Cl undergoes S<sub>N</sub>1 reaction though it is a primary halide. Statement 2: CH<sub>2</sub>=CH–Cl does not undergo S<sub>N</sub>2 as it is a vinyl halide. Assess.',
        steps: [
          '<b>The fast way.</b> Statement 1: allyl chloride ionises to the allyl cation, stabilised by resonance over two carbons – a primary halide that legitimately runs S<sub>N</sub>1. TRUE.',
          'Statement 2: in vinyl chloride the C–Cl bond has partial double-bond character (lone pair into the π system), the sp<sup>2</sup> carbon resists attack, and backside entry is blocked – no S<sub>N</sub>2. TRUE.',
          'The trap is applying “primary = S<sub>N</sub>2” blindly; the label that matters is the stability of the cation the substrate can form.',
        ],
        ans: 'Both statements true.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Predict the major substitution product when 3-bromo-2,2-​dimethylbutane is heated with aqueous ethanol.',
        steps: [
          'Ionisation gives a secondary cation: (CH<sub>3</sub>)<sub>3</sub>C–CH<sup>+</sup>–CH<sub>3</sub>.',
          'The adjacent carbon is quaternary and carries three methyls; a 1,2-methyl shift moves one methyl onto the cationic centre, converting the 2° cation into the tertiary 2,3-​dimethylbutan-2-yl cation, (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–CH(CH<sub>3</sub>)<sub>2</sub>.',
          'Capture by water then gives the rearranged tertiary alcohol 2,3-​dimethylbutan-2-ol as the major substitution product (capture by ethanol gives its ethyl ether, and heat also gives 2,3-​dimethylbut-2-ene by E1 from the same cation). The unrearranged secondary alcohol is a minor product at most.',
        ],
        ans: '2,3-​Dimethylbutan-2-ol (via 1,2-methyl shift).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An optically active secondary alcohol is converted to the chloride (a) by SOCl<sub>2</sub> alone and (b) by SOCl<sub>2</sub> in the presence of pyridine. Compare the stereochemical outcomes and justify each.',
        steps: [
          '(a) SOCl<sub>2</sub> alone: the alcohol oxygen attacks sulphur, giving an alkyl chlorosulphite; the C–O bond breaks as the same-side chlorine is delivered internally – retention (S<sub>N</sub>i), single optically active product of retained configuration.',
          '(b) With pyridine: the base traps HCl and releases free Cl<sup>−</sup>, which attacks the chlorosulphite carbon from the back – inversion (S<sub>N</sub>2), single optically active product of inverted configuration.',
          'The marks live in naming the intermediate (chlorosulphite ester) and the two delivery modes (internal vs external).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give the rate law and the stereochemical outcome of the S<sub>N</sub>1 hydrolysis of optically active 2-bromobutane.',
            a: 'Rate = <i>k</i>[2-bromobutane]; the planar carbocation is captured from either face, giving racemic (±)-butan-2-ol – optically inactive.',
          },
          {
            q: '[NEET] Which is least reactive towards S<sub>N</sub>1: benzyl chloride, allyl chloride, methyl chloride, tert-butyl chloride?',
            a: 'Methyl chloride – the methyl cation is the least stable (benzyl and allyl are resonance-stabilised; tert-butyl is 3°).',
          },
          {
            q: '[JEE Main] Arrange in increasing S<sub>N</sub>1 rate: 1-chlorobutane, 2-chlorobutane, 2-chloro-2-​methylpropane, chloromethane.',
            a: 'Chloromethane < 1-chlorobutane < 2-chlorobutane < 2-chloro-2-​methylpropane (cation stability: CH<sub>3</sub><sup>+</sup> < 1° < 2° < 3°).',
          },
          {
            q: '[JEE Main] Why does KI in acetone displace chloride from R–Cl rapidly, while the same reaction in water is slow?',
            a: 'Acetone is polar aprotic: it leaves I<sup>−</sup> unsolvated and ferociously nucleophilic, so S<sub>N</sub>2 is fast, and the KCl formed precipitates from acetone, which also drives the reaction forward (the Finkelstein driver). Water solvates and cages I<sup>−</sup>, slowing the attack, and keeps the KCl dissolved.',
          },
          {
            q: '[JEE Advanced] Neopentyl bromide (1-bromo-2,2-​dimethylpropane) is practically inert to S<sub>N</sub>2 yet gives a substitution product on prolonged heating with aqueous ethanol. Identify the product and the pathway.',
            a: 'Its S<sub>N</sub>2 is extremely slow (steric blockade of the backside), so solvolysis takes over: slow ionisation, with a 1,2-methyl shift as the bromide leaves, gives the tertiary 2-methylbutan-2-yl cation; capture by water gives 2-methylbutan-2-ol (a rearranged tertiary alcohol).',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Writing the nucleophile into the S<sub>N</sub>1 rate law; forgetting that the parent allyl/benzyl halides are S<sub>N</sub>1-fast despite being primary; drawing the unrearranged product of an S<sub>N</sub>1 on a rearrangeable skeleton; assuming the leaving-group order differs between S<sub>N</sub>1 and S<sub>N</sub>2 (it does not); confusing “polar solvent” with “protic solvent” – S<sub>N</sub>2 wants polar aprotic.',
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 298–301 ─────────────────────────
  {
    n: 'B',
    title: 'Elimination Versus Substitution: E1, E2, and the Hofmann Exception',
    extra: true,
    kalam: 'Which elimination mechanism, and when does the LESS substituted alkene win?',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states the aqueous/alcoholic KOH rule and Saytzeff’s rule. The papers ask the question one level deeper: which elimination mechanism, and when does the LESS substituted alkene win?',
      },

      { t: 'part', title: 'The two elimination mechanisms [JEE extension, built on NCERT’s β-elimination]' },
      {
        t: 'p',
        html: '• <b>E2</b> (bimolecular, one concerted step): the base removes a β-H as C–X breaks and the π bond forms. Rate = <i>k</i>[R–X][base]. Needs a strong base (alc. KOH, RO<sup>−</sup>); stereochemically demands the H and X anti-periplanar. The normal regiochemistry is Saytzeff (most substituted alkene).<br>• <b>E1</b> (unimolecular, two steps): the same ionisation as S<sub>N</sub>1, then loss of a β-H from the carbocation. Rate = <i>k</i>[R–X]. Appears for 3° (and resonance-stabilised) halides in polar protic media with weak bases, in competition with S<sub>N</sub>1 capture; Saytzeff product; rearrangements possible (the cation is the same one as in Addendum A).',
      },

      { t: 'part', title: 'The Hofmann exception – when the small alkene wins' },
      {
        t: 'p',
        html: 'With a small base (OH<sup>−</sup>, EtO<sup>−</sup>), E2 removes the β-H that leads to the most stable (most substituted) alkene – Saytzeff. With a <b>bulky base</b> (potassium tert-butoxide, t-BuOK), the base reaches the hindered interior β-H less easily and more often strips the most ACCESSIBLE (least hindered) terminal β-H, so the <b>least substituted alkene</b> becomes the major product – the Hofmann orientation. One substrate, two answers, decided by the base’s silhouette:<br>2-bromobutane + alc. KOH → but-2-ene (major, Saytzeff)<br>2-bromobutane + t-BuOK → but-1-ene (major, Hofmann) [JEE extension]',
      },

      { t: 'part', title: 'The decision matrix' },
      {
        t: 'table',
        title: null,
        head: ['Substrate', 'Weak Nu / protic solvent', 'Strong small base/Nu', 'Strong BULKY base'],
        rows: [
          ['Methyl, 1°', 'slow S<sub>N</sub>2', 'S<sub>N</sub>2', 'E2 (1°); S<sub>N</sub>2 (methyl)'],
          ['1° with β-branching and no β-H (neopentyl)', 'S<sub>N</sub>1 (rearranged)', 'S<sub>N</sub>2 (extremely slow)', 'no E2 (no β-H); no reaction'],
          ['2° halide', 'S<sub>N</sub>1 + E1', 'S<sub>N</sub>2 vs E2 (heat → E2)', 'E2 (Hofmann possible)'],
          ['3° halide', 'S<sub>N</sub>1 + E1', 'E2 (Saytzeff)', 'E2 (Hofmann possible)'],
          ['Allyl/benzyl', 'fast S<sub>N</sub>1', 'fast S<sub>N</sub>2', 'S<sub>N</sub>2 (E2 only with an sp<sup>3</sup> β-H; the parent halides have none)'],
          ['Aryl/vinyl', 'no reaction', 'no reaction (aryl with o/p-EWG: NAS, nucleophilic aromatic substitution)', 'aryl: benzyne needs NaNH<sub>2</sub>-type base; vinyl: NaNH<sub>2</sub> gives the alkyne'],
        ],
      },
      { t: 'fig', id: 'c12-06-B-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '2-bromopentane is heated with alcoholic KOH. Give all possible alkenes and identify the major product with the rule used.',
        steps: [
          'β-hydrogens exist on C-1 and C-3, so elimination can give pent-1-ene and pent-2-ene (which has cis and trans forms, so three alkenes in all).',
          'Saytzeff’s rule (Zaitsev, 1875): the preferred alkene carries the greater number of alkyl groups on the doubly bonded carbons – pent-2-ene (disubstituted) beats pent-1-ene (monosubstituted).',
        ],
        ans: 'Pent-2-ene major, pent-1-ene minor.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '2-bromobutane is heated with methoxide in methanol. The major product is which of: butan-2-ol, 2-methoxybutane, but-1-ene, but-2-ene?',
        steps: [
          'CH<sub>3</sub>O<sup>−</sup> is a strong base AND a strong nucleophile; on a 2° substrate with heating, E2 wins over S<sub>N</sub>2, and among the alkenes Saytzeff’s rule gives but-2-ene. (At low temperature, 2-methoxybutane via S<sub>N</sub>2 would compete.)',
        ],
        ans: 'But-2-ene – E2 with Saytzeff orientation.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'tert-Butyl bromide in aqueous ethanol gives BOTH 2-methylpropan-2-ol and 2-methylpropene. Explain the product pair mechanistically, and state how the ratio shifts if (a) the temperature is raised, (b) the solvent is changed to DMSO with added t-BuOK.',
        steps: [
          'The substrate is 3° with a weak nucleophile/base (water, ethanol) in a protic solvent: ionisation gives the tert-butyl cation, which partitions between capture (S<sub>N</sub>1 → alcohol) and loss of a β-H (E1 → alkene).',
          '(a) Raising the temperature favours elimination (E1) – elimination has the higher activation energy and the entropic edge (two molecules from one).',
          '(b) t-BuOK in DMSO installs a strong, bulky base in an aprotic medium: E2 takes over; the only β-Hs are the nine equivalent methyl Hs, so the product remains 2-methylpropene, now formed rapidly.',
        ],
        ans: 'S<sub>N</sub>1 and E1 share one carbocation; heat shifts toward alkene; strong bulky base switches the mechanism to E2.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish aqueous KOH from alcoholic KOH in their action on 2-bromobutane, with products.',
            a: 'Aqueous KOH (mild) → substitution, butan-2-ol; alcoholic KOH + heat → elimination, but-2-ene (major).',
          },
          {
            q: '[NEET] The major product of 2-bromobutane + alcoholic KOH is but-2-ene because of which rule?',
            a: 'Saytzeff’s (Zaitsev’s) rule – the more substituted alkene is preferred.',
          },
          {
            q: '[JEE Main] Predict the major alkene from 2-bromo-2,3-​dimethylbutane + alc. KOH, heat.',
            a: 'β-Hs on the two methyl groups attached to C-2 (six in all) and on C-3 (one, methine): elimination toward C-3 gives the tetrasubstituted 2,3-​dimethylbut-2-ene (Saytzeff, major); toward either methyl gives 2,3-​dimethylbut-1-ene (minor).',
          },
          {
            q: '[JEE Main] Which gives 2-methylpropene fastest: tert-butyl chloride with aq. ethanol, or tert-butyl chloride with t-BuOK in DMSO? Why?',
            a: 't-BuOK/DMSO: E2 is concerted and fast with a strong base; the protic route must wait for slow ionisation (E1/S<sub>N</sub>1) – the strong base wins by orders of magnitude.',
          },
          {
            q: '[JEE Advanced] 1-bromo-1-​methylcyclohexane is heated with t-BuOK. Give the major product and explain why methylene​cyclohexane (the Hofmann product) competes so effectively here.',
            a: 'Methylene​cyclohexane (the Hofmann product) is the expected major product. The ring’s interior β-Hs (C-2 and C-6) are hindered and the bulky t-BuO<sup>−</sup> preferentially strips a methyl β-H, giving methylene​cyclohexane (exocyclic, less substituted), with the Saytzeff 1-methyl​cyclohexene also formed; with a small base the endocyclic Saytzeff alkene would dominate instead.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Quoting Saytzeff when the base is bulky (that is exactly when Hofmann wins); believing elimination needs a different halide than substitution (same substrate, different conditions); forgetting that E1 and S<sub>N</sub>1 share the carbocation and therefore usually occur together; writing rate laws with the base in an E1 (rate = <i>k</i>[R–X] only).',
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 301–303 ─────────────────────────
  {
    n: 'C',
    title: 'The Stereochemistry Toolkit',
    extra: true,
    kalam: 'This addendum supplies the definitions NCERT expects you to command, in the order an exam answer needs them.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter uses inversion and racemisation freely. This addendum supplies the definitions NCERT expects you to command, in the order an exam answer needs them.',
      },

      { t: 'part', title: 'The five terms' },
      {
        t: 'proc',
        title: 'Each with its test',
        steps: [
          '<b>Optical activity.</b> A compound that rotates the plane of plane-polarised light (measured by a polarimeter). Clockwise = dextrorotatory, d or (+); anticlockwise = laevorotatory, l or (−).',
          '<b>Chirality.</b> The structural cause: a molecule non-superimposable on its mirror image. In haloalkanes, the usual source is one carbon bearing four different groups (an asymmetric/chiral carbon). The test: hunt for a plane or centre of symmetry, either of which makes the molecule achiral; if neither exists, the molecule is chiral, except in the rare case of an alternating axis of symmetry.',
          '<b>Enantiomers.</b> The non-superimposable mirror-image pair. Identical in melting point, boiling point, refractive index, solubility in achiral solvents – they differ only in the direction of optical rotation and in reactions with other chiral species.',
          '<b>Racemic mixture.</b> Exactly 1:1 enantiomers; zero net rotation; written (±) or dl. The conversion of an enantiomer into the racemate is racemisation.',
          '<b>Retention, inversion, racemisation</b> – the three possible outcomes of substitution at a chiral centre: product keeps the configuration (retention), flips it (inversion, the S<sub>N</sub>2 umbrella), or arrives as a 1:1 mixture (racemisation, the S<sub>N</sub>1 two-faced cation).',
        ],
      },

      { t: 'part', title: 'Why SN1 racemises – the mechanism-level answer NCERT wants' },
      {
        t: 'p',
        html: 'The slow step produces an sp<sup>2</sup>, PLANAR carbocation, which is achiral. The nucleophile attacks either face with equal probability, so the product contains both configurations in equal amount – the hydrolysis of optically active 2-bromobutane gives (±)-butan-2-ol. Racemisation (complete in the ideal case; real reactions usually leave some net inversion) is therefore not a mixing accident; it comes from the geometry of the intermediate. (In the S<sub>N</sub>2 case there is no intermediate at all – the five-coordinate transition state cannot be isolated – and the single concerted step guarantees a single inverted product.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'What happens to the optical activity when (+)-2-bromobutane is hydrolysed under ionising conditions (boiling water or aqueous ethanol)? Explain with the mechanism.',
        steps: [
          '2-Bromobutane is a 2° substrate; in a weakly nucleophilic, ionising medium (water or aqueous ethanol) it reacts by S<sub>N</sub>1. The planar carbocation is captured from both faces, giving equal (+)- and (−)-butan-2-ol: a racemic mixture, optically inactive (racemisation is complete in the ideal case; real reactions usually leave some net inversion).',
        ],
        ans: 'S<sub>N</sub>1 → racemisation → loss of optical activity.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Which of these haloalkanes is chiral: 1-bromobutane, 2-bromobutane, 2-bromo-2-​methylpropane, 1-bromo-2-​methylpropane?',
        steps: [
          'Test each for a carbon with four different groups. C-2 of 2-bromobutane carries Br, H, CH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub> – four different groups → chiral.',
          'The others: 1-bromobutane (every carbon has ≥ 2 H), tert-butyl (three identical CH<sub>3</sub>), isobutyl (C-1 has two H, C-2 has two CH<sub>3</sub>).',
        ],
        ans: '2-Bromobutane.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Optically active (+)-2-bromobutane is subjected to (a) hydrolysis in boiling water or aqueous ethanol (ionising conditions) and (b) treatment with NaCN in dry acetone. Compare the optical activity and configuration of the two products.',
        steps: [
          '(a) Ionising conditions on a 2° substrate → S<sub>N</sub>1: the planar carbocation is captured from both faces, giving racemic (±)-butan-2-ol – optically inactive.',
          '(b) CN<sup>−</sup> in dry acetone is the textbook S<sub>N</sub>2 setting (strong nucleophile, polar aprotic solvent): backside attack gives a single product, 2-methyl​butanenitrile, CH<sub>3</sub>CH(CN)CH<sub>2</sub>CH<sub>3</sub>, with the configuration INVERTED – optically active.',
          'Same chiral substrate, opposite stereochemical fates, decided entirely by which mechanism the conditions select.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define racemisation, and name the substitution mechanism that produces it.',
            a: 'Conversion of an enantiomer into a 1:1 mixture of both enantiomers (net rotation zero); S<sub>N</sub>1.',
          },
          {
            q: '[NEET] The product of S<sub>N</sub>2 on an optically pure substrate is: racemic, retained, inverted, or inactive?',
            a: 'A single inverted product – optically active, configuration flipped (Walden inversion).',
          },
          {
            q: '[JEE Main] How many of the eight structural isomers of C<sub>5</sub>H<sub>11</sub>Cl are chiral? (Name the chiral ones.)',
            a: 'Three: 2-chloropentane (C-2 bears Cl, H, CH<sub>3</sub>, C<sub>3</sub>H<sub>7</sub>), 1-chloro-2-​methylbutane (C-2 bears H, CH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>, CH<sub>2</sub>Cl), and 2-chloro-3-​methylbutane (the CHCl carbon bears H, Cl, CH<sub>3</sub>, CH(CH<sub>3</sub>)<sub>2</sub>).',
          },
          {
            q: '[JEE Main] Why is a racemic mixture optically inactive even though both its components rotate light?',
            a: 'Equal amounts of d and l forms rotate the plane equally in opposite directions; the rotations cancel externally (external compensation), so the mixture shows no net rotation.',
          },
          {
            q: '[JEE Advanced] (<i>S</i>)-2-bromooctane is treated with NaN<sub>3</sub> in DMF, and the product is then reduced to the amine. State the configuration and optical status of each product, with reasoning.',
            a: 'NaN<sub>3</sub>/DMF is a textbook S<sub>N</sub>2 setting: backside attack by N<sub>3</sub><sup>−</sup> inverts the centre → (<i>R</i>)-2-azidooctane, optically active. Reduction (e.g. LiAlH<sub>4</sub> or H<sub>2</sub>/Pd) converts –N<sub>3</sub> to –NH<sub>2</sub> without breaking any bond at the stereocentre, so the configuration is retained → (<i>R</i>)-octan-2-amine, optically active. The stereocentre is touched only once, in the S<sub>N</sub>2 step.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Saying “S<sub>N</sub>1 gives inversion” or “S<sub>N</sub>2 gives racemisation” (the two are swapped in most wrong answers); calling a 3° halide chiral because it is “crowded”; assuming any mixture of enantiomers is racemic (it must be exactly 1:1); believing optical activity can be predicted from the number of carbons rather than the symmetry test.',
      },
    ],
  },
];
