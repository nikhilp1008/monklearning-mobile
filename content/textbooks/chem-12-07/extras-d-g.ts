import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional Topics D, E, F and G, word for word from the Class 12 Chemistry
 * Master Reference: D The Williamson Synthesis as a Feasibility Screen (pp. 351–353; it
 * starts partway down p. 351, after Addendum C's answers), E Ether Cleavage: Stoichiometry
 * and the Edge Cases (pp. 354–356; its answers end at the top of p. 356), F Counting
 * Isomers: C5H12O and C7H8O (pp. 356–358; its answers end on p. 358) and G NCERT-Exact
 * Micro-Facts: Fermentation, Denaturation, Antidotes, Indicators (pp. 358–360; its answers
 * end at the top of p. 360, where "Addendum P" begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is set
 * here as that question's answer. These pages print no drawing. D's "three-question screen"
 * is a proc under the book's bold heading; F's two tables are table blocks, each titled with
 * the bold line the book prints over it. The displayed equations stay on their own lines
 * inside their paragraphs or steps, as in Chapter 6's addenda.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 351–353 ─────────────────────────
  {
    n: 'D',
    title: 'The Williamson Synthesis as a Feasibility Screen',
    extra: true,
    kalam: 'The chapter states the pairing rule — keep the halide primary, put the bulk on the alkoxide.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states the pairing rule — keep the halide primary, put the bulk on the alkoxide. The exam version of the question is broader: given a target ether, decide which pairing works, or whether the ether can be made by Williamson at all. That requires three questions the chapter does not formalise.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three-question screen',
        steps: [
          '<b>Can the proposed halide be attacked?</b> The halide partner is the S<sub>N</sub>2 electrophile, so it must be methyl or 1° (benzylic also works). A 2° halide mostly eliminates; a 3° halide eliminates — NCERT’s rule is that with a tertiary halide the alkene is the only product and no ether forms (its CH<sub>3</sub>ONa + (CH<sub>3</sub>)<sub>3</sub>CBr → 2-methylpropene, “exclusively”). In practice a little ether can form by S<sub>N</sub>1 in an alcohol solvent; the exam answer is the alkene.',
          '<b>Is either partner an aryl or vinyl halide?</b> Then that pairing fails: the sp<sup>2</sup> carbon of an aryl or vinyl halide does not undergo S<sub>N</sub>2, and its C–X bond is strengthened by partial double-bond character. (An aryl halide with a nitro group ortho or para to the halogen does react with an alkoxide, but by nucleophilic aromatic substitution, a different mechanism taught in Haloalkanes and Haloarenes; it is not a Williamson step.) The aryl fragment must instead arrive as the sodium aryloxide. Consequence: diaryl ethers such as C<sub>6</sub>H<sub>5</sub>OC<sub>6</sub>H<sub>5</sub> and vinyl ethers such as CH<sub>2</sub>=CH–O–CH=CH<sub>2</sub> cannot be made by direct Williamson synthesis — a favourite “pick the ether that cannot be prepared” option.',
          '<b>Which fragment is bulkier?</b> Let the bulky group ride on the alkoxide. NCERT states explicitly that ethers containing secondary or tertiary alkyl groups can be prepared by this method — the substitution happens on the halide, so the hindrance may safely live on the alkoxide side (tert-butoxide + ethyl bromide works; ethoxide + tert-butyl bromide does not).',
        ],
      },
      {
        t: 'p',
        html: '<b>Generating the alkoxide.</b> Alcohols are weaker acids than water, so NaOH turns only a small fraction of an alcohol into its alkoxide — use sodium metal or NaH: 2 ROH + 2 Na → 2 RONa + H<sub>2</sub>. Phenols are much stronger acids (Addendum A), so NaOH suffices: ArOH + NaOH → ArONa + H<sub>2</sub>O. The difference is itself an exam point.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board — From two alcohols to one ether (NCERT intext 11.10)',
        q: 'Outline the Williamson synthesis of 2-ethoxy-3-methylpentane starting from ethanol and 3-methylpentan-2-ol.',
        steps: [
          'The target is C<sub>2</sub>H<sub>5</sub>–O–CH(CH<sub>3</sub>)CH(C<sub>2</sub>H<sub>5</sub>)CH<sub>3</sub> — a secondary ether carbon and a primary ethyl group. By the screen, the secondary fragment must be the alkoxide and the primary fragment the halide. Convert 3-methylpentan-2-ol to its sodium alkoxide with Na, and convert ethanol to bromoethane (PBr<sub>3</sub>, Addendum C). Then:<br>CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(O<sup>−</sup>Na<sup>+</sup>)CH<sub>3</sub> + C<sub>2</sub>H<sub>5</sub>Br → 2-ethoxy-3-methylpentane + NaBr',
          'The reverse pairing (ethoxide + the secondary halide) would mostly eliminate.',
        ],
        ans: 'Sodium 3-methylpentan-2-oxide + bromoethane.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — The pairing that cannot work (NCERT intext 11.11)',
        q: 'For preparing 1-methoxy-4-nitrobenzene, which set of reactants is appropriate: (i) 1-bromo-4-nitrobenzene + sodium methoxide, or (ii) sodium 4-nitrophenoxide + bromomethane?',
        steps: [
          'Question 2 of the screen: (i) asks an aryl halide to undergo S<sub>N</sub>2 — the sp<sup>2</sup> ring carbon cannot be attacked that way, and the C–Br bond has partial double-bond character. (The para-nitro group does let methoxide replace the bromine by nucleophilic aromatic substitution on heating, but that is not the Williamson route the question asks about.) In (ii) the aryl fragment is the nucleophile and the electrophile is an unhindered methyl halide — ideal.',
        ],
        ans: 'Set (ii), sodium 4-nitrophenoxide + bromomethane.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — The ether Williamson cannot make',
        q: 'Which of these ethers cannot be prepared by direct Williamson synthesis: 1-propoxypropane, ethoxybenzene, tert-butyl ethyl ether, divinyl ether (CH<sub>2</sub>=CH–O–CH=CH<sub>2</sub>)?',
        steps: [
          'Run the screen on each. 1-Propoxypropane: propoxide + 1-bromopropane, both 1° — fine. Ethoxybenzene: phenoxide + bromoethane — fine. tert-Butyl ethyl ether: tert-butoxide + bromoethane — the tertiary bulk sits on the alkoxide, fine. Divinyl ether: either pairing requires a vinyl halide as the S<sub>N</sub>2 electrophile, which is impossible.',
        ],
        ans: 'Divinyl ether.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the reagents for preparing ethoxybenzene (phenetole) by Williamson synthesis, and state why the roles cannot be swapped.',
            a: 'Sodium phenoxide + bromoethane. Swapping would require bromobenzene to undergo S<sub>N</sub>2, which an aryl halide cannot do.',
          },
          {
            q: '[NEET] Reaction of CH<sub>3</sub>ONa with (CH<sub>3</sub>)<sub>3</sub>CBr gives which major product?',
            a: '2-Methylpropene (elimination only; the alkoxide acts as a base against the 3° halide).',
          },
          {
            q: '[JEE Main] Di-tert-butyl ether cannot be made by Williamson synthesis. Explain, and state what the reaction actually gives.',
            a: 'Di-tert-butyl ether would need tert-butoxide as the nucleophile and a tertiary halide (tert-butyl bromide) as the electrophile. The tertiary halide only eliminates, so the reaction gives 2-methylpropene (and tert-butyl alcohol) and no ether.',
          },
          {
            q: '[JEE Main] Why is sodium metal (or NaH) used to make a sodium alkoxide, while NaOH suffices to make sodium phenoxide?',
            a: 'Alcohols are weaker acids than water, so hydroxide converts only a small fraction of them to alkoxide; an active metal or hydride is needed. Phenols are stronger acids than water (phenoxide is resonance-stabilised), so NaOH is enough.',
          },
          {
            q: '[JEE Advanced] Devise a Williamson route to 1-methoxy-2-methylpropane (isobutyl methyl ether), choosing the partners correctly, and name the side product if the pairing is reversed.',
            a: 'Sodium 2-methylpropan-1-oxide + iodomethane (the unhindered methyl halide as electrophile). If the pairing is reversed (methoxide + 1-bromo-2-methylpropane), the branched primary halide is hindered at the adjacent carbon, so E2 elimination competes and 2-methylpropene forms as the side product alongside the ether; the methyl-halide pairing is the cleaner S<sub>N</sub>2.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 354–356 ─────────────────────────
  {
    n: 'E',
    title: 'Ether Cleavage: Stoichiometry and the Edge Cases',
    extra: true,
    kalam: '“Excess hot HI” in a question is the cue to push every alcohol fragment all the way to the iodide.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s decision tree — aromatic group → phenol + alkyl halide; tertiary group → S<sub>N</sub>1 with iodide on the tertiary carbon; otherwise S<sub>N</sub>2 with iodide on the smaller alkyl — is sound, and it already counts the products with one equivalent and with excess hot HI. This addendum gathers that stoichiometry into two equations and adds one refinement: what happens when one group is benzyl.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The stoichiometry.</b> With one equivalent of HI, a dialkyl ether gives one alkyl iodide and one alcohol:<br>R–O–R′ + HI → R–I + R′–OH<br>With excess concentrated HI at high temperature, the alcohol is itself converted onward, so two alkyl iodides result:<br>R–O–R′ + 2 HI →<sup>Δ</sup> R–I + R′–I + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '“Excess hot HI” in a question is the cue to push every alcohol fragment all the way to the iodide. Counting products is then a structural probe: a symmetrical primary ether gives one organic product, an unsymmetrical one gives two.',
      },
      {
        t: 'p',
        html: '<b>The benzyl edge case.</b> Benzyl ethers cleave at the benzyl–oxygen bond. The benzylic carbon is unhindered for S<sub>N</sub>2 and, if the ionisation path is taken, the benzyl cation is resonance-stabilised — either way the benzyl group ends up as the iodide (NCERT exercise 11.28(iii)):<br>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–O–C<sub>2</sub>H<sub>5</sub> + HI → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>I + C<sub>2</sub>H<sub>5</sub>OH',
      },
      {
        t: 'p',
        html: 'Note the difference from anisole: there it is the aryl carbon that can never leave, because an sp<sup>2</sup> aromatic carbon cannot be attacked; a benzyl carbon is sp<sup>3</sup> and perfectly attackable. “Aryl keeps its oxygen” applies to C<sub>6</sub>H<sub>5</sub>–O, not to C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–O.',
      },
      {
        t: 'p',
        html: '<b>When two rules apply at once.</b> For tert-butyl phenyl ether, both protections point the same way: the aryl–O bond is safe, and the tertiary group cleaves by S<sub>N</sub>1. The products are phenol and 2-iodo-2-methylpropane.',
      },
      {
        t: 'p',
        html: '<b>Reagent scope.</b> Among the hydrogen halides, only concentrated HI or HBr at high temperature cleave ethers (reactivity HI > HBr > HCl); HCl is too weak in practice. Ethers are inert to bases, active metals, reducing agents and mild oxidants — which is exactly why diethyl ether serves as an inert solvent for Grignard work. (One exception matters in the laboratory: on standing in air and light, ethers slowly take up oxygen to form explosive peroxides.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — One equivalent versus excess',
        q: 'Give the products of (i) 1-ethoxypropane with one equivalent of HI, and (ii) the same ether with excess hot HI.',
        steps: [
          'Both groups are primary, so the cleavage is S<sub>N</sub>2 and iodide attacks the less hindered ethyl carbon. (i) One equivalent: iodoethane + propan-1-ol. (ii) Excess hot HI converts the propan-1-ol onward, so the products are iodoethane + 1-iodopropane (+ H<sub>2</sub>O).',
        ],
        ans: '(i) C<sub>2</sub>H<sub>5</sub>I + CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH; (ii) C<sub>2</sub>H<sub>5</sub>I + CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>I.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board — The benzyl ether (NCERT 11.28)',
        q: 'Write the equation for the reaction of benzyl ethyl ether with hydrogen iodide.',
        steps: [
          'The benzyl–oxygen bond cleaves: the benzylic carbon is readily attacked by iodide (and a benzylic cation, if formed, is resonance-stabilised). The ethyl side leaves as the alcohol.',
        ],
        ans: 'C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–O–C<sub>2</sub>H<sub>5</sub> + HI → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>I + C<sub>2</sub>H<sub>5</sub>OH.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Two protections, one answer',
        q: 'Predict the products when tert-butyl phenyl ether is heated with concentrated HI, and identify which two structural rules each product illustrates.',
        steps: [
          'Rule 1 (aryl ethers): the phenyl–oxygen bond never breaks, so phenol is one product. Rule 2 (tertiary alkyl): the tert-butyl side ionises to the stable 3° cation (S<sub>N</sub>1) and captures iodide. The two rules agree, so the outcome is unambiguous.',
        ],
        ans: 'Phenol + 2-iodo-2-methylpropane. Phenol illustrates aryl–O protection; the tertiary iodide illustrates the S<sub>N</sub>1 switch.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the products of heating (i) 1-propoxypropane and (ii) methoxybenzene with HI.',
            a: '(i) 1-Iodopropane and propan-1-ol (with excess hot HI, two molecules of 1-iodopropane); (ii) phenol + iodomethane.',
          },
          {
            q: '[NEET] Why does HI cleave ethers while HCl barely does?',
            a: 'Cleavage needs both a strongly acidic medium (to protonate the ether oxygen) and a good nucleophile (iodide); HCl provides a weaker acid and a poorer nucleophile, so it does not cleave the C–O bond under ordinary conditions.',
          },
          {
            q: '[JEE Main] An ether of formula C<sub>4</sub>H<sub>10</sub>O gives a single alkyl iodide with excess hot HI; each of its other ether isomers gives two different alkyl iodides. Identify all three ethers.',
            a: 'The single-product ether is ethoxyethane (C<sub>2</sub>H<sub>5</sub>OC<sub>2</sub>H<sub>5</sub>, symmetrical → only iodoethane). The two-product isomers are unsymmetrical: 1-methoxypropane (CH<sub>3</sub>OCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>) gives iodomethane and 1-iodopropane, and 2-methoxypropane gives iodomethane and 2-iodopropane (both with excess hot HI).',
          },
          {
            q: '[JEE Main] Give the products of 2-methoxy-2-methylpropane with one equivalent of HI, naming the mechanism type.',
            a: '2-Iodo-2-methylpropane + methanol, by an S<sub>N</sub>1 cleavage — the tertiary centre ionises and takes the iodide.',
          },
          {
            q: '[JEE Advanced] Benzyl methyl ether and anisole are both aryl-containing methyl ethers, yet they cleave differently with HI. Give both product sets and the structural reason for the difference.',
            a: 'Benzyl methyl ether → benzyl iodide + methanol (benzylic C–O cleaves: unhindered sp<sup>3</sup> carbon, resonance-stabilised cation if ionised). Anisole → phenol + iodomethane (the aryl sp<sup>2</sup> carbon cannot be attacked, so the methyl leaves instead). The difference is sp<sup>3</sup> benzylic versus sp<sup>2</sup> aryl carbon attached to oxygen.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 356–358 ─────────────────────────
  {
    n: 'F',
    title: 'Counting Isomers: C₅H₁₂O and C₇H₈O',
    extra: true,
    kalam: 'Enumerate the carbon skeletons first; on each, place –OH at every distinct carbon; classify each result.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter drilled the four alcohols of C<sub>4</sub>H<sub>10</sub>O. NCERT’s exercises set the two enumerations examiners actually quote — the alcohols of C<sub>5</sub>H<sub>12</sub>O (exercise 11.3) and the aromatic isomers of C<sub>7</sub>H<sub>8</sub>O (exercise 11.7) — and both hide a trap.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The skeleton-times-position algorithm.</b> Enumerate the carbon skeletons first; on each, place –OH at every distinct carbon; classify each result. Never draw the same molecule twice — check whether two “different” drawings are the same alcohol numbered from the other end.',
      },
      {
        t: 'table',
        title: 'C₅H₁₂O — eight alcohols',
        head: ['Skeleton', 'Alcohol', 'Class'],
        rows: [
          ['pentane', 'pentan-1-ol', '1°'],
          ['pentane', 'pentan-2-ol', '2°'],
          ['pentane', 'pentan-3-ol', '2°'],
          ['2-methylbutane', '2-methylbutan-1-ol', '1°'],
          ['2-methylbutane', '3-methylbutan-1-ol', '1°'],
          ['2-methylbutane', '2-methylbutan-2-ol', '3°'],
          ['2-methylbutane', '3-methylbutan-2-ol', '2°'],
          ['2,2-dimethylpropane', '2,2-dimethylpropan-1-ol', '1°'],
        ],
      },
      {
        t: 'p',
        html: 'Count: 4 primary, 3 secondary, 1 tertiary. Three of the eight are chiral — pentan-2-ol, 3-methylbutan-2-ol and 2-methylbutan-1-ol each carry one stereocentre. (Extension beyond the NCERT exercise: the same formula also covers six ethers — four methyl butyl ethers and two ethyl propyl ethers — fourteen structural isomers in all, or eighteen if the enantiomers of the four chiral ones are counted.)',
      },
      {
        t: 'table',
        title: 'C₇H₈O — five aromatic isomers, but only three phenols',
        head: ['Isomer', 'Family'],
        rows: [
          ['2-methylphenol (o-cresol)', 'phenol'],
          ['3-methylphenol (m-cresol)', 'phenol'],
          ['4-methylphenol (p-cresol)', 'phenol'],
          ['phenylmethanol (benzyl alcohol)', 'alcohol, not a phenol'],
          ['methoxybenzene (anisole)', 'ether'],
        ],
      },
      {
        t: 'p',
        html: 'The trap is definitional: a phenol needs –OH directly on the ring. Benzyl alcohol carries its –OH on a side-chain sp<sup>3</sup> carbon, and anisole has no O–H at all. NCERT asks for the monohydric phenols of C<sub>7</sub>H<sub>8</sub>O and the answer is exactly the three cresols — students who write five structures have not read the question.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — How many tertiary alcohols in C₅H₁₂O?',
        q: 'How many structurally isomeric alcohols of formula C<sub>5</sub>H<sub>12</sub>O are tertiary?',
        steps: [
          '<b>Speed reasoning.</b> A tertiary alcohol needs a carbon bonded to three carbons plus –OH. Scan the table: only 2-methylbutan-2-ol qualifies.',
          'Of the eight alcohols, four are primary and three are secondary.',
        ],
        ans: 'One (2-methylbutan-2-ol).',
      },
      {
        t: 'ex',
        tag: 'CBSE Board — The phenols of C₇H₈O (NCERT 11.7)',
        q: 'Give the structures and IUPAC names of the monohydric phenols of molecular formula C<sub>7</sub>H<sub>8</sub>O.',
        steps: [
          '“Phenol” forces the –OH onto the benzene ring; the seventh carbon must then be a methyl substituent, which can sit ortho, meta or para to the –OH. Benzyl alcohol and anisole share the formula but are not phenols.',
        ],
        ans: '2-methylphenol, 3-methylphenol and 4-methylphenol, CH<sub>3</sub>C<sub>6</sub>H<sub>4</sub>OH with the methyl ortho, meta and para to the –OH — three compounds.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw all isomeric alcohols of C<sub>5</sub>H<sub>12</sub>O and classify each as 1°, 2° or 3°.',
            a: 'The eight in the table in Method: pentan-1-ol CH<sub>3</sub>(CH<sub>2</sub>)<sub>4</sub>OH, 2-methylbutan-1-ol CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>OH, 3-methylbutan-1-ol (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>2</sub>OH, 2,2-dimethylpropan-1-ol (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub>OH (all primary); pentan-2-ol CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>, pentan-3-ol (CH<sub>3</sub>CH<sub>2</sub>)<sub>2</sub>CHOH, 3-methylbutan-2-ol (CH<sub>3</sub>)<sub>2</sub>CHCH(OH)CH<sub>3</sub> (all secondary); 2-methylbutan-2-ol (CH<sub>3</sub>)<sub>2</sub>C(OH)CH<sub>2</sub>CH<sub>3</sub> (tertiary).',
          },
          {
            q: '[NEET] Which isomer of C<sub>7</sub>H<sub>8</sub>O is an alcohol but not a phenol? Give its IUPAC name.',
            a: 'Phenylmethanol (benzyl alcohol), C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH — its –OH is on a side-chain sp<sup>3</sup> carbon.',
          },
          {
            q: '[JEE Main] How many of the eight C<sub>5</sub>H<sub>12</sub>O alcohols are chiral?',
            a: 'Three: pentan-2-ol, 3-methylbutan-2-ol and 2-methylbutan-1-ol.',
          },
          {
            q: '[JEE Main] How many structural isomers of C<sub>5</sub>H<sub>12</sub>O are ethers? Give the count with one example of each pairing type.',
            a: 'Six: four methyl ethers (1-methoxybutane, 2-methoxybutane, 1-methoxy-2-methylpropane, 2-methoxy-2-methylpropane) and two ethyl ethers (1-ethoxypropane, 2-ethoxypropane).',
          },
          {
            q: '[JEE Advanced] A C<sub>5</sub>H<sub>12</sub>O alcohol is chiral, secondary, and gives a positive iodoform test. Identify all such alcohols.',
            a: 'Two: pentan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>, and 3-methylbutan-2-ol, (CH<sub>3</sub>)<sub>2</sub>CH–CH(OH)–CH<sub>3</sub>. Each is secondary, has a stereocentre at C-2, and carries the CH<sub>3</sub>CH(OH)– unit that the iodoform test detects. (Pentan-3-ol is secondary but achiral and lacks that unit.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 358–360 ─────────────────────────
  {
    n: 'G',
    title: 'NCERT-Exact Micro-Facts: Fermentation, Denaturation, Antidotes, Indicators',
    extra: true,
    kalam: 'This section is pure precision recall.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers the commercial alcohols well but paraphrases some details that exams quote verbatim, and omits three NCERT sentences that JEE and NEET repeatedly ask. This section is pure precision recall.',
      },

      { t: 'part', title: 'Method — the facts, exactly as NCERT frames them' },
      {
        t: 'p',
        html: '<b>The 14% cap.</b> Zymase is inhibited once the ethanol formed exceeds about 14 percent. That single number explains why natural fermentation (wine from grapes, where the yeast grows on the fruit’s skin) tops out near that strength, and why stronger spirits need distillation.',
      },
      {
        t: 'p',
        html: '<b>Why air is excluded.</b> Fermentation is anaerobic. If air enters, oxygen oxidises the ethanol to ethanoic acid and the drink sours to vinegar.',
      },
      {
        t: 'p',
        html: '<b>The NCERT denaturing recipe.</b> The commercial alcohol is made unfit for drinking “by mixing in it some copper sulphate (to give it a colour) and pyridine (a foul smelling liquid)” — that is NCERT’s sentence, and it names copper sulphate and pyridine. Industrial methylated spirit additionally contains methanol; the exam-safe formulation is colour (CuSO<sub>4</sub> or a dye), foul smell (pyridine) and poison (methanol).',
      },
      {
        t: 'p',
        html: '<b>The methanol antidote.</b> In the body, methanol oxidises first to methanal and then to methanoic acid, which attacks the optic nerve — blindness, and at larger doses death. NCERT gives the treatment: intravenous infusion of diluted ethanol. NCERT’s reason is that the ethanol swamps the enzyme that oxidises the aldehyde to the acid, buying time for the kidneys to excrete the methanol itself. (More exactly, ethanol competes with methanol for alcohol dehydrogenase, the enzyme of the first step, methanol → methanal, so both toxic products form slowly; write NCERT’s reason in a board answer.) Treating methanol poisoning with ethanol sounds like a misprint and is therefore asked.',
      },
      {
        t: 'p',
        html: '<b>The modern picric-acid route.</b> Nitrating phenol directly with concentrated HNO<sub>3</sub> gives 2,4,6-trinitrophenol in poor yield. The practical route sulphonates first — concentrated H<sub>2</sub>SO<sub>4</sub> converts phenol to phenol-2,4-disulphonic acid — and concentrated HNO<sub>3</sub> then displaces the sulphonic acid groups with nitro groups to give picric acid cleanly. Sulphonation acts as a protecting step: the two –SO<sub>3</sub>H groups deactivate the ring, so concentrated HNO<sub>3</sub> no longer oxidises it to tar (the cause of the poor direct yield), and they are then replaced by nitro groups.',
      },
      {
        t: 'p',
        html: '<b>Names and indicators.</b> Phenol’s common name is carbolic acid, and papers still use it. Phenol condenses with phthalic anhydride in the presence of concentrated H<sub>2</sub>SO<sub>4</sub> to give phenolphthalein — the familiar acid–base indicator; the two facts are often asked together.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — The antidote question',
        q: 'A patient has consumed methanol-contaminated liquor. Why is dilute ethanol given intravenously as part of the treatment?',
        steps: [
          'The toxicity is not methanol itself but its oxidation products — methanal and especially methanoic acid, which damage the retina and optic nerve. Flooding the system with ethanol occupies the oxidising enzyme: ethanol competes with methanol for alcohol dehydrogenase, which catalyses the first step, methanol → methanal (NCERT words it as swamping the enzyme of the aldehyde-to-acid step). The production of methanal and methanoic acid slows while the kidneys clear methanol unchanged.',
        ],
        ans: 'Ethanol competitively occupies the oxidising enzyme, preventing rapid conversion of methanol to toxic methanoic acid and allowing renal excretion of methanol.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Numerical — Counting oxygens on the picric route',
        q: 'Carbolic acid on treatment with concentrated H<sub>2</sub>SO<sub>4</sub> forms product A, which with concentrated HNO<sub>3</sub> forms product B. Find the sum of the number of oxygen atoms in A and B.',
        steps: [
          'A is phenol-2,4-disulphonic acid, C<sub>6</sub>H<sub>3</sub>(OH)(SO<sub>3</sub>H)<sub>2</sub>: one phenolic oxygen plus six from the two sulphonic acid groups = 7 oxygens. B is 2,4,6-trinitrophenol, C<sub>6</sub>H<sub>2</sub>(OH)(NO<sub>2</sub>)<sub>3</sub>: one plus six = 7 oxygens.',
        ],
        ans: '14.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does fermentation of sugar by yeast stop increasing in alcohol content near 14%?',
            a: 'Zymase, the fermenting enzyme, is inhibited once ethanol exceeds about 14%, so fermentation self-limits.',
          },
          {
            q: '[NEET] Name the substances added to commercial alcohol to denature it, as stated in NCERT.',
            a: 'Copper sulphate (to give it a colour) and pyridine (a foul-smelling liquid); industrial methylated spirit also contains methanol.',
          },
          {
            q: '[NEET] Methanol is fatal because it is oxidised in the body to X and then Y, which attack the optic nerve. Name X and Y.',
            a: 'X = methanal (formaldehyde), Y = methanoic acid (formic acid).',
          },
          {
            q: '[JEE Main] Direct nitration of phenol to picric acid is low-yielding. Outline the superior two-step industrial route with reagents.',
            a: 'Phenol + conc. H<sub>2</sub>SO<sub>4</sub> → phenol-2,4-disulphonic acid; then conc. HNO<sub>3</sub> → 2,4,6-trinitrophenol (picric acid), the –SO<sub>3</sub>H groups being displaced by –NO<sub>2</sub>.',
          },
          {
            q: '[JEE Main] Compound X with phthalic anhydride and conc. H<sub>2</sub>SO<sub>4</sub> gives Y, a well-known acid–base indicator. Identify X and Y.',
            a: 'X = phenol (carbolic acid), Y = phenolphthalein.',
          },
        ],
      },
    ],
  },
];
