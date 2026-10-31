import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 03 · Alkynes: pp. 421–429 of the Class 11 Chemistry Master
 * Reference, word for word, split at its Sections 1 to 8. Figure 9.6 (orbital
 * picture of ethyne, drawn p. 423) sits after the orbital-picture paragraph it
 * shows; Figure 9.7 (Kucherov hydration, drawn p. 426) after the paragraph on
 * the hydration of alkynes. Both are redrawn in lib/diagrams/chemistry-11-09b.ts;
 * these pages draw no other structure. Formulas are upright (the book sets them
 * in maths italic); hybrid and orbital labels upright (sp, sp<sup>2</sup>,
 * s-character); bonds in condensed formulas are en dashes; a condition the book
 * prints over an arrow is in <sup> after it, with Unicode subscript digits there
 * (H₂, HgSO₄) because a <sub> inside a <sup> is flattened. The book's "Sub-02" and
 * "Sub-04" are Topic 02 and Topic 04.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 421–429 ─────────────────────────
  {
    n: '03',
    title: 'Alkynes',
    kalam: 'Alkynes are small in syllabus but heavy in exam yield.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Alkynes are small in syllabus but heavy in exam yield. CBSE Boards favour the acidic-character explanation (why terminal alkynes form acetylides) and the calcium-carbide preparation. NEET reliably asks one MCQ distinguishing terminal from internal alkynes or the Kucherov hydration product. JEE Main builds “identify the alkyne” chains using hydration + iodoform, and JEE Advanced probes the hybridisation-acidity link and acetylide-base chemistry.',
      },
      {
        t: 'p',
        html: 'Take an alkene’s double bond and pull the two carbons even closer, binding them with a <b>third</b> shared pair, and you have an <b>alkyne</b> — a hydrocarbon with a carbon–carbon <b>triple bond</b> (C≡C). Losing yet another pair of hydrogens drops the family formula to C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>. The headline member is <b>ethyne</b>, universally known by its common name <b>acetylene</b> — the gas that, burned with oxygen in an oxy-acetylene torch, gives a flame hot enough for welding steel.',
      },
      {
        t: 'p',
        html: 'The triple bond is the tightest, strongest carbon–carbon linkage in this chapter, but — and this is the recurring lesson of unsaturation — strength of the framework does not mean unreactivity of the electrons sitting on top of it. The triple bond is built from one σ bond (head-on overlap of sp orbitals) plus <b>two</b> weaker π bonds (two perpendicular pairs of p orbitals overlapping sideways). Those two π clouds wrap the bond axis in a cylinder of loosely held electrons, so an alkyne is, like an alkene, an electron-rich target that electrophiles love. The difference is quantity: with two π bonds to spend, an alkyne can add <b>two</b> molecules of a reagent. This double-barrelled reactivity, together with the unusual acidity of the terminal hydrogen, makes alkynes prized <b>starting materials</b> in organic synthesis — the acetylide anion, for instance, is a carbon nucleophile that can be used to lengthen carbon chains, a theme picked up in higher classes.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the carbon’s “personality” being set by how much s-character its hybrid orbitals carry. An sp<sup>3</sup> carbon (alkane) is one-quarter s; an sp<sup>2</sup> carbon (alkene) is one-third; an sp carbon (alkyne) is fully <b>half</b> s. Because an s orbital hugs the nucleus more tightly than a p orbital, more s-character makes the carbon more <b>electronegative</b> — it grips the shared electrons of its C–H bond harder. So in ethyne the C–H hydrogen can slip off as a proton (H<sup>+</sup>) far more readily than in ethene or ethane. That single idea — more s-character means more acidic terminal hydrogen — is the most-tested concept in the whole topic. It is why terminal alkynes (those with a ≡C–H) react with sodium metal (releasing hydrogen) or with a strong base such as sodamide (releasing ammonia) to form metal <b>acetylides</b>, while alkenes and alkanes do not.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three guard-rails. First, the acidity is <b>terminal-only</b>: only a hydrogen sitting directly on a triply-bonded carbon is acidic. But-2-yne (CH<sub>3</sub>–C≡C–CH<sub>3</sub>), which has no ≡C–H, forms no acetylide. Second, “acidic” here is relative — ethyne is acidic compared with ethene and ethane, not compared with mineral acids; it cannot turn litmus red. Third, the famous hydration product is a surprise: adding water to an alkyne gives a <b>carbonyl compound</b> (aldehyde or ketone), not an alcohol, because the first-formed “enol” rearranges. Keep these three on a sticky note.',
      },

      { t: 'part', title: 'Key definitions, formulae and reactions' },
      {
        t: 'formula',
        kicker: 'General formula (acyclic alkyne)',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>',
        legend: ['<i>n</i> = number of carbon atoms', 'one triple bond'],
        note: 'First member is ethyne (acetylene), C<sub>2</sub>H<sub>2</sub>.',
      },
      {
        t: 'p',
        html: '• <b>The triple bond (ethyne):</b> one C–C σ (from sp–sp head-on overlap) + two C–C π (from lateral overlap of two perpendicular p-orbital pairs) + two C–H σ. H–C–C angle = 180° (<b>linear</b>).<br>• <b>Bond comparison:</b> C≡C enthalpy ≈ 823 kJ mol<sup>−1</sup> (length 120 pm) > C=C ≈ 681 kJ mol<sup>−1</sup> (134 pm) > C–C ≈ 348 kJ mol<sup>−1</sup> (154 pm).<br>• <b>Acidity order (terminal C–H):</b> HC≡CH > H<sub>2</sub>C=CH<sub>2</sub> > CH<sub>3</sub>–CH<sub>3</sub>, tracking sp > sp<sup>2</sup> > sp<sup>3</sup> s-character; and HC≡CH > CH<sub>3</sub>–C≡CH > CH<sub>3</sub>–C≡C–CH<sub>3</sub> (the last has no acidic H).<br>• <b>Acetylide formation:</b> HC≡CH + Na → HC≡C<sup>−</sup>Na<sup>+</sup> + ½H<sub>2</sub> (monosodium ethynide); with excess Na, the disodium ethynide forms.<br>• <b>Markovnikov rule</b> governs HX and water addition to unsymmetrical alkynes (via the more stable <b>vinylic cation</b>).<br>• <b>Test for unsaturation:</b> orange Br<sub>2</sub> in CCl<sub>4</sub> is decolourised on addition.',
      },
      {
        t: 'p',
        html: 'The bond-energy quantities here are in kJ mol<sup>−1</sup>.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>3.0 Structure, naming, and physical character</b><br><b>Orbital picture (ethyne).</b> Each carbon is sp hybridised: two sp orbitals point 180° apart, one forming the C–C σ bond and the other a C–H σ bond. The two leftover unhybridised p orbitals on each carbon stand perpendicular to the axis and to each other; they overlap sideways to make <b>two</b> π bonds. The electron cloud is cylindrically symmetric about the bond axis, and the molecule is strictly <b>linear</b>.',
      },
      { t: 'fig', id: 'c11-09-fig-9.6' },
      {
        t: 'p',
        html: '<b>Naming.</b> In the common system, alkynes are named as derivatives of acetylene (e.g. methylacetylene); in IUPAC, replace the “-ane” of the parent alkane with “<b>-yne</b>” and give the position of the triple bond by its first carbon. Thus HC≡CH is ethyne, CH<sub>3</sub>–C≡CH is propyne (methylacetylene), and the two four-carbon alkynes are but-1-yne and but-2-yne.',
      },
      {
        t: 'p',
        html: '<b>Isomerism.</b> Ethyne and propyne each have only one structure, but from butyne onwards alkynes show <b>position isomerism</b> (but-1-yne vs but-2-yne) and, in larger members, <b>chain isomerism</b> (e.g. the C<sub>5</sub>H<sub>8</sub> set: pent-1-yne, pent-2-yne, and 3-methylbut-1-yne).',
      },
      {
        t: 'p',
        html: '<b>Physical properties.</b> Alkynes follow the alkane/alkene trend: the first three members are gases, the next eight liquids, and higher members solids. They are weakly polar, lighter than water, immiscible with water but soluble in organic solvents such as ether, CCl<sub>4</sub>, and benzene; melting point, boiling point, and density all rise with molar mass. Ethyne itself is a colourless gas with a characteristic odour, while the higher members are essentially odourless. The weak polarity and consequent reliance on van der Waals forces are exactly what one expects of a hydrocarbon, so in bulk physical behaviour alkynes differ little from the alkanes and alkenes already studied — the triple bond announces itself in chemistry, not in melting and boiling.',
      },
      {
        t: 'p',
        html: '<b>3.1 Preparing an alkyne — two routes</b><br><b>(a) From calcium carbide (industrial).</b> Ethyne is made on scale by dropping water on calcium carbide; the carbide itself is made from limestone and coke:<br>CaCO<sub>3</sub> →<sup>Δ</sup> CaO + CO<sub>2</sub>;   CaO + 3C → CaC<sub>2</sub> + CO;   CaC<sub>2</sub> + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + C<sub>2</sub>H<sub>2</sub>',
      },
      {
        t: 'p',
        html: 'The whole chain begins with cheap limestone: heating it gives quick lime (CaO), which is fused with coke at high temperature to give calcium carbide, and the carbide then liberates ethyne the moment it meets water. This is why acetylene lamps and oxy-acetylene welding sets historically ran on lumps of carbide and a steady drip of water.',
      },
      {
        t: 'p',
        html: '<b>(b) From vicinal dihalides.</b> A vicinal dihalide loses one molecule of HX with alcoholic KOH to give an alkenyl (vinyl) halide; a second elimination with the stronger base <b>sodamide</b> (NaNH<sub>2</sub>) removes the second HX to unveil the triple bond. The two-step base sequence matters: alcoholic KOH is strong enough for the first elimination, but the second, from a vinyl halide, needs the much stronger sodamide — a neat illustration of matching base strength to the difficulty of the elimination.',
      },
      {
        t: 'p',
        html: '<b>3.2 The signature reaction — acidic character and acetylides</b><br>Sodium metal and the strong base sodamide both remove the terminal hydrogen, forming a metal <b>acetylide</b>: sodium, a reducing metal, releases hydrogen gas, while sodamide deprotonates the alkyne and releases ammonia:<br>HC≡CH + Na → HC≡C<sup>−</sup>Na<sup>+</sup> + ½H<sub>2</sub>   (monosodium ethynide)<br>CH<sub>3</sub>–C≡CH + NaNH<sub>2</sub> → CH<sub>3</sub>–C≡C<sup>−</sup>Na<sup>+</sup> + NH<sub>3</sub>   (sodium propynide)',
      },
      {
        t: 'p',
        html: 'Because <b>alkenes and alkanes do not react this way</b>, the test cleanly distinguishes a terminal alkyne from alkenes, alkanes, and internal alkynes. The reason is hybridisation: the sp carbon’s high s-character (50%) makes it electronegative enough to stabilise the negative charge left behind on the carbon, so the C–H proton departs comparatively easily.',
      },
      {
        t: 'p',
        html: 'Ethyne carries <b>two</b> acidic hydrogens, one on each carbon, so with an excess of sodium it can be deprotonated twice — first to the monosodium ethynide and then to the <b>disodium ethynide</b>:<br>HC≡C<sup>−</sup>Na<sup>+</sup> + Na → Na<sup>+</sup> <sup>−</sup>C≡C<sup>−</sup> Na<sup>+</sup> + ½H<sub>2</sub>   (disodium ethynide)',
      },
      {
        t: 'p',
        html: 'Putting the acidity trends together gives two orderings every student should be able to write: across the families, HC≡CH > H<sub>2</sub>C=CH<sub>2</sub> > CH<sub>3</sub>–CH<sub>3</sub>; and within the alkynes, HC≡CH > CH<sub>3</sub>–C≡CH > CH<sub>3</sub>–C≡C–CH<sub>3</sub>, the last having no acidic hydrogen at all. These reactions are not given by alkenes or alkanes, which is precisely why acetylide formation is the standard laboratory means of telling a terminal alkyne apart from the other hydrocarbons.',
      },
      {
        t: 'p',
        html: '<b>3.3 Electrophilic addition — two molecules’ worth</b><br>With two π bonds, an alkyne adds <b>two</b> molecules of most reagents, the orientation again set by the most stable intermediate (here a <b>vinylic cation</b>); for unsymmetrical alkynes this follows Markovnikov’s rule, exactly as developed for alkenes in Topic 02.',
      },
      {
        t: 'p',
        html: '<b>Dihydrogen:</b> over Ni/Pd/Pt the alkyne is reduced first to the alkene and then to the alkane.<br>HC≡CH →<sup>H₂, Pt/Pd/Ni</sup> H<sub>2</sub>C=CH<sub>2</sub> →<sup>H₂</sup> CH<sub>3</sub>–CH<sub>3</sub>',
      },
      {
        t: 'p',
        html: 'If the reduction is stopped at the alkene stage using the controlled reducing systems met in Topic 02 — Lindlar’s catalyst for the <b>cis</b> alkene, sodium in liquid ammonia for the <b>trans</b> alkene — the alkyne becomes a clean stereochemical gateway to either geometrical isomer. This is why preparation “from alkynes” appears in the alkene topic as well: the two families are linked by exactly this partial reduction.',
      },
      {
        t: 'p',
        html: '<b>Halogens:</b> chlorine or bromine adds in two stages to give first a dihalo-alkene and then a tetrahalide; the decolourisation of Br<sub>2</sub>/CCl<sub>4</sub> is again the <b>test for unsaturation</b>.<br>HC≡CH →<sup>Br₂</sup> CHBr=CHBr →<sup>Br₂</sup> CHBr<sub>2</sub>–CHBr<sub>2</sub> (1,1,2,2-tetrabromoethane)',
      },
      {
        t: 'p',
        html: 'The reason an alkyne consumes two molecules of reagent — where an alkene consumes only one — is simply that it has two π bonds to give away: the first addition converts the triple bond into a double bond, and the second saturates that double bond.',
      },
      {
        t: 'p',
        html: '<b>Hydrogen halides:</b> two molecules of HX add to give a <b>gem-dihalide</b> (both halogens on the same carbon), following Markovnikov orientation:<br>HC≡CH + 2 HBr → CH<sub>3</sub>–CHBr<sub>2</sub> (1,1-dibromoethane)',
      },
      {
        t: 'p',
        html: '<b>Water (Kucherov-type hydration):</b> alkynes do not react with water alone, but with <b>mercuric sulphate in dilute H<sub>2</sub>SO<sub>4</sub> at 333 K</b> one molecule of water adds (Markovnikov) and the unstable enol rearranges to a <b>carbonyl compound</b>. Ethyne is the special case — it gives the aldehyde acetaldehyde; every higher alkyne gives a <b>ketone</b>.',
      },
      { t: 'fig', id: 'c11-09-fig-9.7' },
      {
        t: 'p',
        html: '<b>3.4 Polymerisation</b><br>Under suitable conditions ethyne undergoes <b>linear polymerisation</b> to <b>polyacetylene</b> (polyethyne), a high-molecular-weight polyene of repeating –(CH=CH–CH=CH)– units that, when suitably treated, conducts electricity — the basis of conducting-polymer research.',
      },
      {
        t: 'p',
        html: 'Ethyne also undergoes <b>cyclic polymerisation</b>: passed through a red-hot tube, three molecules combine to form <b>benzene</b> — a reaction that forms the natural bridge into the arenes of Topic 04.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write balanced equations and name the products when <b>propyne</b> reacts with (i) sodamide (NaNH<sub>2</sub>) and (ii) water in the presence of HgSO<sub>4</sub> and dilute H<sub>2</sub>SO<sub>4</sub>.',
        steps: [
          'Propyne is CH<sub>3</sub>–C≡CH, a <b>terminal</b> alkyne. <b>(i) With sodamide</b> — the terminal ≡C–H is acidic and is removed by the strong base:<br>CH<sub>3</sub>–C≡CH + NaNH<sub>2</sub> → CH<sub>3</sub>–C≡C<sup>−</sup>Na<sup>+</sup> + NH<sub>3</sub>',
          'Product: <b>sodium propynide</b> (sodium prop-1-ynide).',
          '<b>(ii) With water / HgSO<sub>4</sub> / H<sub>2</sub>SO<sub>4</sub></b> — Markovnikov hydration; water’s oxygen goes to the more substituted carbon, and the enol rearranges to a ketone:<br>CH<sub>3</sub>–C≡CH + H<sub>2</sub>O →<sup>HgSO₄, H₂SO₄, 333 K</sup> CH<sub>3</sub>–CO–CH<sub>3</sub>',
          'Product: <b>propanone (acetone)</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of these liberates hydrogen gas on treatment with sodium metal: <b>(A) but-2-yne</b>, <b>(B) but-1-yne</b>, <b>(C) but-2-ene</b>?',
        steps: [
          '<b>Speed approach.</b> Don’t write mechanisms — apply the single rule: only a hydrogen on a triply-bonded carbon (≡C–H) is acidic enough to react with Na. Scan for a terminal triple bond:',
          '(A) but-2-yne CH<sub>3</sub>–C≡C–CH<sub>3</sub>: triple bond is internal, no ≡C–H → no reaction.',
          '(B) but-1-yne CH<sub>3</sub>CH<sub>2</sub>–C≡CH: has a terminal ≡C–H → <b>reacts, liberates</b> H<sub>2</sub>.',
          '(C) but-2-ene: only sp<sup>2</sup> and sp<sup>3</sup> C–H, not acidic → no reaction.',
          '<b>Trap:</b> students see “yne” in (A) and assume any alkyne reacts, forgetting the hydrogen must be on the triple-bonded carbon.',
        ],
        ans: 'Only <b>(B) but-1-yne</b>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: hydration regiochemistry + the ethyne exception',
        q: '(i) Explain why hydration of ethyne gives an aldehyde whereas hydration of every higher alkyne gives a ketone. (ii) Give the hydration product of but-1-yne and state whether it answers the iodoform test.',
        steps: [
          '<b>(i)</b> Markovnikov hydration places the –OH on the more substituted carbon. In ethyne, HC≡CH, both carbons are identical and each bears a hydrogen, so the enol CH<sub>2</sub>=CH–OH rearranges to <b>acetaldehyde</b> CH<sub>3</sub>CHO — an aldehyde, because the carbonyl carbon still keeps a hydrogen. In any higher alkyne the carbon receiving the –OH is bonded to a carbon chain (no H on that carbon after tautomerisation), so the product is a <b>ketone</b>.',
          '<b>(ii)</b> But-1-yne CH<sub>3</sub>CH<sub>2</sub>–C≡CH undergoes Markovnikov hydration at C2:<br>CH<sub>3</sub>CH<sub>2</sub>–C≡CH + H<sub>2</sub>O →<sup>Hg²⁺</sup> CH<sub>3</sub>CH<sub>2</sub>–CO–CH<sub>3</sub>',
          'The product is <b>butan-2-one</b>. It contains a CH<sub>3</sub>–CO– (methyl ketone) group, so it <b>gives a positive iodoform test</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The approximate p<i>K</i><sub>a</sub> values are: ethyne ≈ 25, ammonia (NH<sub>3</sub>) ≈ 38, water ≈ 16. (i) Rank ethyne, ethene (≈ 44), and ethane (≈ 50) by acidity and justify using hybridisation. (ii) Predict whether sodamide (NaNH<sub>2</sub>) and whether sodium hydroxide (NaOH) can convert a terminal alkyne into its acetylide, and explain. (iii) State the consequence for choosing a base to make acetylides.',
        steps: [
          '<b>(i)</b> Lower p<i>K</i><sub>a</sub> means stronger acid, so acidity is <b>ethyne (25) > ethene (44) > ethane (50)</b>. The conjugate base (carbanion) is most stable when its lone pair sits in an orbital of highest s-character, which holds the electrons closest to the nucleus. The sp carbanion from ethyne (50% s) is far better stabilised than the sp<sup>2</sup> (33%) and sp<sup>3</sup> (25%) carbanions, so ethyne loses its proton most readily.',
          '<b>(ii)</b> A base deprotonates an acid only if the base’s conjugate acid is <b>weaker</b> (higher p<i>K</i><sub>a</sub>) than the substrate. For sodamide, the conjugate acid is NH<sub>3</sub> (p<i>K</i><sub>a</sub> ≈ 38), which is weaker than the alkyne (25) — so NaNH<sub>2</sub> <b>can</b> form the acetylide. For NaOH, the conjugate acid is water (p<i>K</i><sub>a</sub> ≈ 16), which is stronger than the alkyne — so NaOH <b>cannot</b> deprotonate the alkyne to any useful extent.',
          '<b>(iii)</b> Acetylides must be made with a strong, suitably basic reagent such as NaNH<sub>2</sub> (or sodium metal, which reacts as a reducing metal and releases H<sub>2</sub>), <b>not</b> with hydroxide; this is why NCERT specifies sodamide for the second elimination in alkyne synthesis and for acetylide formation.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the sequence of reactions for preparing ethyne starting from calcium carbonate.',
            a: 'CaCO<sub>3</sub> →<sup>Δ</sup> CaO →<sup>+3C</sup> CaC<sub>2</sub> →<sup>+2H₂O</sup> C<sub>2</sub>H<sub>2</sub>.',
          },
          {
            q: '[NEET] Give the increasing order of acidity of CH<sub>3</sub>–CH<sub>3</sub>, H<sub>2</sub>C=CH<sub>2</sub>, and HC≡CH, and state the hybridisation responsible.',
            a: 'CH<sub>3</sub>CH<sub>3</sub> < H<sub>2</sub>C=CH<sub>2</sub> < HC≡CH; rising s-character sp<sup>3</sup> < sp<sup>2</sup> < sp raises electronegativity and acidity.',
          },
          {
            q: '[JEE Main] An alkyne A (C<sub>3</sub>H<sub>4</sub>) on hydration with HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub> gives compound B which answers the iodoform test. Identify A and B and explain.',
            a: 'A = <b>propyne</b> (CH<sub>3</sub>C≡CH); B = <b>propanone</b> (CH<sub>3</sub>COCH<sub>3</sub>), a methyl ketone → positive iodoform.',
          },
          {
            q: '[JEE Main] How many moles of HBr add to one mole of propyne, and what is the final product? Name it and explain the orientation.',
            a: '<b>Two</b> moles of HBr add; product <b>2,2-dibromopropane</b> (CH<sub>3</sub>CBr<sub>2</sub>CH<sub>3</sub>), a gem-dihalide formed by successive Markovnikov additions.',
          },
          {
            q: '[JEE Advanced] A terminal alkyne C<sub>4</sub>H<sub>6</sub> gives a precipitate-free, hydrogen-releasing reaction with sodium and, on complete hydrogenation, yields n-butane. Identify the alkyne, and explain why its but-2-yne isomer fails the sodium test.',
            a: '<b>But-1-yne</b> (CH<sub>3</sub>CH<sub>2</sub>C≡CH); but-2-yne has no terminal ≡C–H, so its hydrogens are not acidic and it does not react with sodium.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The reagent that distinguishes but-1-yne from but-2-yne is:',
        opts: [
          {
            label: 'bromine water',
            nudge: '<b>(a)</b> bromine water tests for unsaturation in general — both alkynes decolourise it, so it cannot tell them apart.',
          },
          { label: 'sodium metal / sodamide', nudge: null },
          {
            label: 'cold dilute KMnO<sub>4</sub>',
            nudge: '<b>(c)</b> cold dilute KMnO<sub>4</sub> (Baeyer’s reagent) tests for unsaturation in general — both alkynes decolourise it, so it cannot tell them apart.',
          },
          { label: 'HCl', nudge: '<b>(d)</b> HCl adds to both.' },
        ],
        correct: 1,
        solution:
          'Only the terminal alkyne (but-1-yne) has an acidic ≡C–H that reacts with Na (releasing H<sub>2</sub>) or NaNH<sub>2</sub> (releasing NH<sub>3</sub>) to form an acetylide; but-2-yne does not. Each trap catches a student who reaches for a generic unsaturation test instead of the acidity test.',
      },
      {
        t: 'mcq',
        q: 'Hydration of ethyne (HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub>) gives:',
        opts: [
          {
            label: 'ethanol',
            nudge: '<b>(a)</b> assumes simple alcohol formation as with alkene hydration — the enol rearranges, so the product is a carbonyl, not an alcohol.',
          },
          { label: 'ethane-1,2-diol', nudge: '<b>(b)</b> is the alkene/Baeyer glycol product.' },
          { label: 'acetaldehyde', nudge: null },
          { label: 'acetic acid', nudge: '<b>(d)</b> would need further oxidation.' },
        ],
        correct: 2,
        solution:
          'Hydration gives the enol CH<sub>2</sub>=CH–OH, which rearranges to acetaldehyde (CH<sub>3</sub>CHO); ethyne is the unique alkyne giving an aldehyde.',
      },
      {
        t: 'mcq',
        q: 'The C–C bond length is shortest in:',
        opts: [
          { label: 'ethane', nudge: '<b>(a)</b> ethane’s C–C (154 pm, a single bond between sp<sup>3</sup> carbons) is the longest — the reverse of the trend.' },
          { label: 'ethene', nudge: '<b>(b)</b> ethene’s C=C (134 pm) is shorter than ethane’s but longer than ethyne’s C≡C (120 pm).' },
          { label: 'ethyne', nudge: null },
          { label: 'all equal', nudge: '<b>(d)</b> ignores that bond order and s-character shorten the bond.' },
        ],
        correct: 2,
        solution: 'More bonds and more s-character pull the carbons closest: C≡C (120 pm) < C=C (134 pm) < C–C (154 pm).',
      },
      {
        t: 'mcq',
        q: 'Two moles of HBr add to propyne (no peroxide) to give predominantly:',
        opts: [
          {
            label: '1,1-dibromopropane',
            nudge: '<b>(a)</b> places both Br on the terminal carbon — the reverse of Markovnikov orientation; with HBr alone each H<sup>+</sup> goes to the carbon richer in hydrogen, so both Br end up on C2.',
          },
          {
            label: '1,2-dibromopropane',
            nudge: '<b>(b)</b> is a vicinal dibromide (Br on adjacent carbons), the product of Br<sub>2</sub> adding to propene; two Markovnikov HBr additions put both Br on the same carbon instead.',
          },
          { label: '2,2-dibromopropane', nudge: null },
          { label: '1,3-dibromopropane', nudge: '<b>(d)</b> puts a Br on C3, the CH<sub>3</sub> carbon, which is not part of the triple bond — addition places atoms only on the two triply bonded carbons.' },
        ],
        correct: 2,
        solution:
          'Each HBr adds Markovnikov, putting both bromines on the central (more substituted) carbon — a gem-dihalide, CH<sub>3</sub>CBr<sub>2</sub>CH<sub>3</sub>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling all alkynes acidic.</b> Internal alkynes (no ≡C–H) form no acetylide. <b>Pro-Tip:</b> before applying the sodium test, point to the actual hydrogen — it must sit directly on a triply-bonded carbon. “No terminal H, no acetylide.”',
          '<b>Writing an alcohol as the hydration product.</b> Alkyne + water gives a <b>carbonyl</b>, not an alcohol, because the enol tautomerises. <b>Pro-Tip:</b> remember “ethyne → aldehyde, all others → ketone”; never stop at the enol.',
          '<b>Confusing gem- and vicinal dihalides.</b> Adding <b>2 HX</b> to an alkyne gives a <b>gem-dihalide</b> (both X on one carbon); adding <b>1</b> X<sub>2</sub> gives a vicinal (1,2-) dihaloalkene, and a second X<sub>2</sub> the tetrahalide. <b>Pro-Tip:</b> track the reagent — HX is Markovnikov (same carbon), X<sub>2</sub> spreads across the bond.',
          '<b>Using NaOH to make acetylides.</b> Hydroxide is too weak (water p<i>K</i><sub>a</sub> ≈ 16 < alkyne 25). <b>Pro-Tip:</b> use NaNH<sub>2</sub> (or Na metal, which reacts by releasing H<sub>2</sub>); a base works only if its conjugate acid is weaker than the substrate.',
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Family', note: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>, one C≡C; first member ethyne (acetylene); sp, <b>linear</b> (180°).' },
          { f: 'Bond', note: '1 σ + 2 π; C≡C ≈ 823 kJ mol<sup>−1</sup>, 120 pm — strongest, shortest C–C bond of the chapter.' },
          {
            f: 'Acidity (terminal H only)',
            note: 'HC≡CH > H<sub>2</sub>C=CH<sub>2</sub> > CH<sub>3</sub>CH<sub>3</sub> (sp > sp<sup>2</sup> > sp<sup>3</sup>); ≡C–H + Na → <b>acetylide</b> + ½H<sub>2</sub> (with NaNH<sub>2</sub>: + NH<sub>3</sub>) — the test vs alkenes/alkanes/internal alkynes.',
          },
          {
            f: 'Make them',
            note: 'CaC<sub>2</sub> + 2H<sub>2</sub>O → Ca(OH)<sub>2</sub> + C<sub>2</sub>H<sub>2</sub> (from limestone via quick lime); vic-dihalide →<sup>alc. KOH</sup> alkenyl halide →<sup>NaNH₂</sup> alkyne.',
          },
          {
            f: 'Addition (×2)',
            note: 'H<sub>2</sub>/Ni → alkane; X<sub>2</sub> (Br<sub>2</sub> test); 2 HX → <b>gem-dihalide</b> (Markovnikov); H<sub>2</sub>O/HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub> → <b>carbonyl</b> (ethyne→aldehyde, others→ketone). Polymerisation → polyacetylene.',
          },
        ],
        aids: [
          '“sp = sharpest, shortest, strongest, sourest” (sp carbon: shortest bond, most acidic)',
          '“ethyne is the odd one out — aldehyde, not ketone”',
          '“2 HX = gem (twins on one carbon).”',
        ],
      },
    ],
  },
];
