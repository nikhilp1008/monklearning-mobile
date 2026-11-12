import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional Topics D, E and F, word for word from the Class 12 Chemistry
 * Master Reference: D Acidity of Carboxylic Acids: The Full NCERT Ladder (pp. 412–414;
 * it opens at the top of p. 412, after Addendum C's answers end on p. 411, and its
 * answers end partway down p. 414), E Structure-Elucidation Puzzles: The NCERT
 * Signature (pp. 414–416; its answers end partway down p. 416) and F Physical-State
 * Micro-Facts and Odd Corners (pp. 416–418; its answers end on p. 418, where
 * "Addendum P" begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. These pages print no drawing and no table. D's
 * displayed ladder keeps the book's three lines inside its paragraph; D's four
 * principles are a proc under the sentence that introduces them; E's evidence ladder is
 * a proc under the book's bold heading. F's two displayed lines (the paraldehyde
 * equation and the decarboxylation order) stay on their own lines inside their
 * paragraphs. The book sets formulas in maths italic; here species are upright, bonds
 * en dashes (CH2=CH–COOH), +I, −I and +M upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 412–414 ─────────────────────────
  {
    n: 'D',
    title: 'Acidity of Carboxylic Acids: The Full NCERT Ladder',
    extra: true,
    kalam: 'The chapter gives the principles — conjugate-base stability, EWG up / EDG down, distance penalty — and a few pKa anchors.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the principles — conjugate-base stability, EWG up / EDG down, distance penalty — and a few p<i>K</i><sub>a</sub> anchors; it already compares phenoxide with carboxylate and drills one positional pair (2- against 4-chloro​butanoic acid). What it does not print is NCERT’s full compound ladder, the fluorine positional drill from its intext questions, the framing examiners reuse — “phenoxide has more resonance structures, yet carboxylic acids are stronger” (NCERT exercise 12.20) — or the ortho effect in substituted benzoic acids.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The ladder (NCERT, decreasing acid strength):</b><br>CF<sub>3</sub>COOH > CCl<sub>3</sub>COOH > CHCl<sub>2</sub>COOH > NO<sub>2</sub>CH<sub>2</sub>COOH > NCCH<sub>2</sub>COOH > FCH<sub>2</sub>COOH<br>> ClCH<sub>2</sub>COOH > BrCH<sub>2</sub>COOH > HCOOH > ClCH<sub>2</sub>CH<sub>2</sub>COOH<br>> C<sub>6</sub>H<sub>5</sub>COOH > C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>COOH > CH<sub>3</sub>COOH > CH<sub>3</sub>CH<sub>2</sub>COOH',
      },
      {
        t: 'proc',
        title: 'Read off the four principles rather than memorising blindly',
        steps: [
          '<b>Count of EWGs.</b> Three chlorines beat two beat one (CCl<sub>3</sub> > CHCl<sub>2</sub> > ClCH<sub>2</sub>).',
          '<b>Strength of the EWG (its −I effect).</b> CF<sub>3</sub> > NO<sub>2</sub> > CN > F > Cl > Br > I, NCERT’s order — the single-atom comparison FCH<sub>2</sub> > ClCH<sub>2</sub> > BrCH<sub>2</sub>COOH, where the order does follow electronegativity, is the cleanest illustration.',
          '<b>Distance.</b> ClCH<sub>2</sub>COOH (alpha) outranks ClCH<sub>2</sub>CH<sub>2</sub>COOH (beta): induction fades along the chain. NCERT’s intext 12.8 drills exactly this: CH<sub>3</sub>CHFCH<sub>2</sub>COOH is stronger than CH<sub>2</sub>FCH<sub>2</sub>CH<sub>2</sub>COOH because the fluorine sits one carbon closer to the carboxyl.',
          '<b>Hybridisation of the attached carbon.</b> HCOOH, with no alkyl donor at all, beats CH<sub>3</sub>COOH (an sp<sup>3</sup> donor); and C<sub>6</sub>H<sub>5</sub>COOH beats C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>COOH because the carboxyl bonded to an sp<sup>2</sup> ring carbon feels that carbon’s greater electronegativity — the same reason vinyl and phenyl directly attached raise acidity even though resonance intuition suggests the opposite. Acrylic acid, CH<sub>2</sub>=CH–COOH, is therefore stronger than propanoic acid — a point examiners twist into a false statement pair.',
        ],
      },
      {
        t: 'p',
        html: '<b>The p<i>K</i><sub>a</sub> anchors and the strength bands.</b> Smaller p<i>K</i><sub>a</sub> = stronger acid. NCERT’s anchors: HCl −7.0; trifluoro​acetic 0.23; 4-nitro​benzoic 3.41; benzoic 4.19; 4-methoxy​benzoic 4.46; acetic 4.76. Its bands: p<i>K</i><sub>a</sub> < 1 strong; 1–5 moderately strong; 5–15 weak; > 15 extremely weak.',
      },
      {
        t: 'p',
        html: '<b>The exercise-12.20 framing.</b> Phenoxide has more resonance structures than carboxylate, yet phenol is the weaker acid. The resolution is quality, not count: in carboxylate the two structures are equivalent and place the charge on two electronegative oxygens; in phenoxide the structures are non-equivalent and park the charge on less electronegative ring carbons. Delocalisation over oxygen beats delocalisation over carbon, however many structures you draw.',
      },
      {
        t: 'p',
        html: '<b>The ortho effect (JEE extension beyond NCERT — flagged as such).</b> Almost any ortho substituent on benzoic acid makes it stronger, whether the group is electron-withdrawing or electron-donating (o-aminobenzoic acid, p<i>K</i><sub>a</sub> about 4.9, is the usual exception): o-toluic acid (p<i>K</i><sub>a</sub> about 3.9) beats benzoic acid (4.19) despite methyl being a donor. The ortho group twists the –COOH out of the ring plane, cutting off the ring’s resonance donation into the carboxyl, and the carboxylate is thereby stabilised. Salicylic acid (o-hydroxy​benzoic, p<i>K</i><sub>a</sub> about 3.0) goes further — its anion is locked by an intramolecular hydrogen bond. When a JEE Advanced set ranks ortho-, meta- and para-substituted benzoic acids together, expect the ortho isomer at the strong end.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board — Reading the ladder',
        q: 'Arrange in increasing acid strength and justify: CH<sub>3</sub>COOH, ClCH<sub>2</sub>COOH, FCH<sub>2</sub>COOH, HCOOH, CH<sub>3</sub>CH<sub>2</sub>COOH.',
        steps: [
          'Conjugate-base audit: propanoic has the largest +I donor (ethyl) — weakest; acetic next; formic has no alkyl donor at all, so it beats both; the two haloacetic acids carry −I halogens on the alpha carbon, and F out-withdraws Cl.',
        ],
        ans: 'CH<sub>3</sub>CH<sub>2</sub>COOH < CH<sub>3</sub>COOH < HCOOH < ClCH<sub>2</sub>COOH < FCH<sub>2</sub>COOH.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — The positional drill (NCERT intext 12.8)',
        q: 'Which is the stronger acid: CH<sub>2</sub>FCH<sub>2</sub>CH<sub>2</sub>COOH or CH<sub>3</sub>CHFCH<sub>2</sub>COOH?',
        steps: [
          'Both carry one fluorine exerting a −I effect, but induction decays steeply with distance. In CH<sub>3</sub>CHFCH<sub>2</sub>COOH the fluorine sits on the beta carbon (two C–C bonds from the carboxyl carbon); in CH<sub>2</sub>FCH<sub>2</sub>CH<sub>2</sub>COOH it is on the gamma carbon (three C–C bonds away) and its pull barely reaches the carboxylate.',
        ],
        ans: 'CH<sub>3</sub>CHFCH<sub>2</sub>COOH is stronger.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Acrylic versus propanoic: the false statement pair',
        q: 'A question paper offers: Statement-I: CH<sub>2</sub>=CH–COOH is less acidic than CH<sub>3</sub>CH<sub>2</sub>COOH. Statement-II: CH<sub>2</sub>=CH– shows a dominant +M effect with –COOH, decreasing the acidity. Evaluate both.',
        steps: [
          'Acrylic acid’s carboxyl is bonded to an sp<sup>2</sup> carbon, which is more electronegative than an sp<sup>3</sup> carbon; this withdraws electron density and stabilises the carboxylate. Acrylic acid is therefore stronger than propanoic acid (p<i>K</i><sub>a</sub> about 4.25 versus 4.87) — Statement-I is false. Statement-II misreads the effect: whatever the vinyl group’s resonance behaviour, the dominant, acidity-raising influence is the sp<sup>2</sup> carbon’s −I effect, and the conclusion drawn is false anyway.',
        ],
        ans: 'Both statements are incorrect — acrylic acid is the stronger acid.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Arrange in increasing acid strength: BrCH<sub>2</sub>COOH, ClCH<sub>2</sub>COOH, FCH<sub>2</sub>COOH, CH<sub>3</sub>COOH.',
            a: 'CH<sub>3</sub>COOH < BrCH<sub>2</sub>COOH < ClCH<sub>2</sub>COOH < FCH<sub>2</sub>COOH (rising −I of the alpha halogen).',
          },
          {
            q: '[NEET] Which is the weakest: FCH<sub>2</sub>COOH, ClCH<sub>2</sub>COOH, CH<sub>3</sub>CH<sub>2</sub>COOH, HCOOH?',
            a: 'CH<sub>3</sub>CH<sub>2</sub>COOH — its ethyl group is electron-donating (+I) and destabilises the carboxylate; HCOOH at least lacks any alkyl donor.',
          },
          {
            q: '[JEE Main] Arrange: benzoic acid, 4-nitro​benzoic acid, 4-methoxy​benzoic acid, 4-methyl​benzoic acid (increasing strength) and justify the two ends.',
            a: '4-Methoxy​benzoic < 4-methyl​benzoic < benzoic < 4-nitro​benzoic acid. The methoxy and methyl groups donate (p<i>K</i><sub>a</sub> 4.46 and about 4.37 — both weaker than 4.19); the para nitro group withdraws by resonance (p<i>K</i><sub>a</sub> 3.41).',
          },
          {
            q: '[JEE Main] Phenoxide has five resonance structures, carboxylate only two — yet phenol is far weaker than a carboxylic acid. Explain.',
            a: 'The carboxylate structures are equivalent and hold the charge on two oxygens; the phenoxide structures are non-equivalent and hold it partly on ring carbons, which tolerate negative charge far worse. Number of structures is irrelevant next to where the charge rests.',
          },
          {
            q: '[JEE Advanced] Arrange in decreasing acid strength: o-toluic, m-toluic, p-toluic, benzoic acids. (Ortho effect applies.)',
            a: 'o-Toluic > benzoic > m-toluic > p-toluic (approximate p<i>K</i><sub>a</sub>: 3.9, 4.19, 4.27, 4.37). The ortho methyl forces –COOH out of the ring plane (ortho effect); meta/para methyl simply donates and weakens.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 414–416 ─────────────────────────
  {
    n: 'E',
    title: 'Structure-Elucidation Puzzles: The NCERT Signature',
    extra: true,
    kalam: 'The skill is an evidence ladder: each test result eliminates a family, and the remaining candidates are pinned by the oxidation products.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'NCERT closes this unit with a family of “identify the compound” puzzles (exercises 12.10, 12.11, 12.19), and JEE/NEET recycle the format every year. The chapter works only the shortest of them — the C<sub>8</sub>H<sub>8</sub>O puzzle in Topic 02’s practice, which returns below as the first practice question, and a C<sub>4</sub>H<sub>8</sub>O methyl ketone in Topic 01’s; the three NCERT exercises are worked end to end here. The skill is an evidence ladder: each test result eliminates a family, and the remaining candidates are pinned by the oxidation products.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The evidence ladder, run in order',
        steps: [
          '<b>2,4-DNP positive</b> → a carbonyl compound (aldehyde or ketone).',
          '<b>Tollens’ / Fehling’s</b> → aldehyde (yes) or ketone (no). Fehling’s additionally requires aliphatic. (Formic acid and α-hydroxy ketones such as fructose also reduce both; the NCERT puzzles do not use them.)',
          '<b>Iodoform positive</b> → CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– present.',
          '<b>Cannizzaro possible</b> → aldehyde without alpha-H.',
          '<b>Oxidation/reduction products</b> → the carbon skeleton. Vigorous oxidation of an aromatic side chain whose benzylic carbon carries a hydrogen ends at –COOH attached to the ring (a tert-butyl group, with no benzylic H, resists); the positions of the ring carboxyls in the final acid mark where the original side chains sat.',
          '<b>Molecular formula + composition</b> → the size check that closes the case.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board — NCERT 12.10: C₉H₁₀O',
        q: 'An organic compound C<sub>9</sub>H<sub>10</sub>O forms a 2,4-DNP derivative, reduces Tollens’ reagent and undergoes Cannizzaro. On vigorous oxidation it gives benzene-1,2-​dicarboxylic acid. Identify it.',
        steps: [
          'Climb the ladder. DNP positive → carbonyl. Tollens’ positive → aldehyde. Cannizzaro → an aldehyde without alpha-H, so the –CHO is either on a ring or on a quaternary carbon. The formula (C<sub>9</sub>, with five degrees of unsaturation) plus the oxidation product (a benzene dicarboxylic acid) say aromatic aldehyde. Oxidation gives the 1,2- (ortho) diacid, so the ring carried two ortho substituents: the –CHO itself and a two-carbon side chain, which vigorous oxidation converts to the second –COOH. A two-carbon side chain on C<sub>9</sub>H<sub>10</sub>O minus C<sub>6</sub>H<sub>4</sub> minus CHO leaves C<sub>2</sub>H<sub>5</sub>.',
          '<b>Check:</b> it has no alpha-H (the ring carbon carrying CHO has no H to give), so Cannizzaro applies; ethyl’s benzylic CH<sub>2</sub> oxidises to COOH, giving phthalic acid.',
        ],
        ans: '2-Ethyl​benzaldehyde — the ring bears –CHO and –CH<sub>2</sub>CH<sub>3</sub> ortho to each other.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — NCERT 12.11: the C₈H₁₆O₂ ester',
        q: 'Compound A (C<sub>8</sub>H<sub>16</sub>O<sub>2</sub>) is hydrolysed by dilute H<sub>2</sub>SO<sub>4</sub> to a carboxylic acid B and an alcohol C. Oxidation of C with chromic acid gives B. Dehydration of C gives but-1-ene. Identify A, B and C.',
        steps: [
          'A saturated C<sub>8</sub> compound with two oxygens that hydrolyses to acid + alcohol is an ester. C oxidises to an acid, B, with the same carbon count, so C is a primary alcohol; a four-carbon primary alcohol that dehydrates to a straight-chain butene (not 2-methylpropene) is butan-1-ol. (NCERT’s question says C gives but-1-ene. In practice acid dehydration of butan-1-ol gives mainly but-2-ene, after a hydride shift, with but-1-ene the minor product — see Alcohols, Phenols and Ethers, Additional topic B; the question’s but-1-ene still points to butan-1-ol.) So B is butanoic acid, and the ester of butanoic acid and butan-1-ol has 4 + 4 = 8 carbons — consistent with C<sub>8</sub>H<sub>16</sub>O<sub>2</sub>.',
        ],
        ans: 'A = butyl butanoate, B = butanoic acid, C = butan-1-ol.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — NCERT 12.19: composition plus M = 86',
        q: 'A compound contains 69.77% C, 11.63% H, the rest oxygen; molecular mass 86. It does not reduce Tollens’ reagent, forms a bisulphite addition compound, and gives a positive iodoform test. Vigorous oxidation gives ethanoic and propanoic acids. Identify it.',
        steps: [
          'From the percentages, the empirical formula is C<sub>5</sub>H<sub>10</sub>O (69.77/12 ≈ 5.81; 11.63/1 = 11.63; 18.6/16 ≈ 1.16; ratio 5 ∶ 10 ∶ 1), and its mass 86 matches <i>M</i> = 86 exactly, so the molecular formula is C<sub>5</sub>H<sub>10</sub>O. The ladder: Tollens’ negative → ketone; bisulphite adduct → a methyl or unhindered ketone; iodoform positive → CH<sub>3</sub>CO– present. A five-carbon methyl ketone is pentan-2-one or 3-methyl​butan-2-one. Vigorous oxidation cleaves ketones on both sides of the carbonyl, giving the two acids whose carbons sum to five: ethanoic (2) + propanoic (3). Pentan-2-one cleaves to ethanoic + propanoic acids; the branched alternative, 3-methyl​butan-2-one, would give ethanoic acid + propanone (or 2-methyl​propanoic acid + CO<sub>2</sub>), never propanoic acid.',
        ],
        ans: 'Pentan-2-one, CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A compound C<sub>8</sub>H<sub>8</sub>O gives a 2,4-DNP derivative and a positive iodoform test, but does not reduce Tollens’ or Fehling’s reagent or decolourise bromine water. Drastic oxidation gives benzoic acid. Identify it (NCERT Example 12.4).',
            a: 'Acetophenone, C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>: carbonyl (DNP), methyl ketone (iodoform), not an aldehyde (Tollens’/Fehling’s negative), aromatic ring accounts for the unsaturation without touching Br<sub>2</sub> water or Baeyer’s reagent, and the CH<sub>3</sub>CO– side chain oxidises to –COOH.',
          },
          {
            q: '[NEET] An aldehyde A (C<sub>7</sub>H<sub>6</sub>O) gives a silver mirror but no red precipitate with Fehling’s. Name A.',
            a: 'Benzaldehyde — an aromatic aldehyde (Tollens’ yes, Fehling’s no).',
          },
          {
            q: '[JEE Main] An ester C<sub>6</sub>H<sub>12</sub>O<sub>2</sub> on hydrolysis gives acid B and alcohol C; C on oxidation gives B, and C on dehydration gives propene. Identify A.',
            a: 'Since oxidation of the alcohol C gives the acid B, C must be a primary alcohol with the same carbon count as B; since C dehydrates to propene, C is propan-1-ol and B is propanoic acid. A is therefore propyl propanoate (C<sub>3</sub> + C<sub>3</sub> = C<sub>6</sub>, consistent with C<sub>6</sub>H<sub>12</sub>O<sub>2</sub>).',
          },
          {
            q: '[JEE Main] A compound C<sub>4</sub>H<sub>8</sub>O gives a bisulphite adduct and a positive iodoform test but no silver mirror. Identify it.',
            a: 'Butan-2-one, CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub>: ketone (no mirror), methyl ketone (iodoform, bisulphite).',
          },
          {
            q: '[JEE Advanced] A compound C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> gives brisk CO<sub>2</sub> effervescence with NaHCO<sub>3</sub>, does not respond to Tollens’ reagent, and is reduced by LiAlH<sub>4</sub> to a primary alcohol. Identify the functional group and give both possible structures.',
            a: 'The NaHCO<sub>3</sub> effervescence and Tollens’ silence identify a carboxylic acid, not an aldehyde; LiAlH<sub>4</sub> reduces –COOH to –CH<sub>2</sub>OH, consistent. With C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> the candidates are butanoic acid, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH, and 2-methyl​propanoic acid, (CH<sub>3</sub>)<sub>2</sub>CHCOOH.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 416–418 ─────────────────────────
  {
    n: 'F',
    title: 'Physical-State Micro-Facts and Odd Corners',
    extra: true,
    kalam: 'Single-line facts are cheap marks if you have seen them once.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Some of these single-line facts appear in the chapter only in passing (the states of the acids, methanal as a gas, the Grignard overshoot to a tertiary alcohol); others — melting-point alternation, paraldehyde, the decarboxylation order — appear nowhere in it. They are cheap marks if you have seen them once.',
      },

      { t: 'part', title: 'Method — the five facts, with the reason attached' },
      {
        t: 'p',
        html: '<b>Melting-point alternation (asked in a recent JEE Main paper).</b> Within the monocarboxylic acid series, an acid with an even number of carbons melts higher than the odd-carbon acids immediately above and below it: even-carbon chains pack more snugly into the crystal lattice (terminal groups alternate neatly), so more energy is needed to break the solid up. Water solubility, meanwhile, simply falls as molar mass rises — both halves of that JEE Main statement pair are correct.',
      },
      {
        t: 'p',
        html: '<b>States of the acids.</b> Aliphatic carboxylic acids up to nine carbons are colourless liquids with unpleasant odours; the higher ones are waxy, practically odourless solids (low volatility). A statement calling them “colourless gases” is false — only methanal among this unit’s small carbonyls is a gas at room temperature (ethanal, b.p. 294 K, is counted a volatile liquid).',
      },
      {
        t: 'p',
        html: '<b>Paraldehyde — the ethanal trimer.</b> With a trace of acid, three molecules of ethanal cyclise into 2,4,6-trimethyl-​1,3,5-trioxane — paraldehyde — a pleasant-smelling liquid (b.p. 397 K) once used as a hypnotic:<br>3 CH<sub>3</sub>CHO →<sup>H⁺</sup> paraldehyde (cyclic trimer)',
      },
      {
        t: 'p',
        html: 'Do not confuse paraldehyde with benzaldehyde: the chemistry — three ethanal units, pleasant smell, b.p. 397 K, hypnotic — identifies paraldehyde.',
      },
      {
        t: 'p',
        html: '<b>Soda-lime decarboxylation reactivity.</b> Decarboxylation proceeds through a carbanion-like fragment, and its ease tracks the stability of that fragment. An sp-hybridised carbon holds the pair best, so:<br>HC≡C–COOH > CH<sub>2</sub>=CH–COOH > CH<sub>3</sub>CH<sub>2</sub>COOH (decreasing decarboxylation ease)',
      },
      {
        t: 'p',
        html: 'Beta-keto acids and malonic acids (gem-dicarboxylic acids) are especially easy decarboxylators, but by a different route: the C=O of the second group, β to the departing carboxyl, takes the carboxyl’s O–H hydrogen through a cyclic six-membered transition state as CO<sub>2</sub> leaves, and the enol formed tautomerises — no free carbanion and no soda lime. That is why malonic-acid derivatives lose CO<sub>2</sub> on gentle heating.',
      },
      {
        t: 'p',
        html: '<b>Grignard stoichiometry on acid derivatives.</b> Esters and acyl chlorides consume two moles of Grignard reagent: the first displaces the leaving group to give a ketone, the second adds to that ketone to give (after work-up) a tertiary alcohol (a secondary alcohol from a formate ester, HCOOR, whose first step gives an aldehyde). Add one more mole per active hydrogen in the molecule (OH, NH, COOH) — Grignard is destroyed by each. Counting questions (“how many moles of RMgX per mole of this compound?”) are pure bookkeeping once that rule is fixed.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — The NTA statement pair',
        q: 'Statement I: a monocarboxylic acid with an even number of carbons melts higher than the odd-carbon acids immediately below and above it. Statement II: the solubility of monocarboxylic acids in water decreases with increasing molar mass. Evaluate.',
        steps: [
          'Statement I is the alternation effect — even-carbon acids pack better in the crystal and melt higher (true). Statement II is the hydrophobic-tail rule of the chapter — true.',
        ],
        ans: 'Both statements are correct.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Decarboxylation ordering',
        q: 'Arrange toward ease of soda-lime decarboxylation: CH<sub>3</sub>CH<sub>2</sub>COOH, CH<sub>2</sub>=CH–COOH, HC≡C–COOH.',
        steps: [
          'Rank the carbanion-like fragment left after CO<sub>2</sub> leaves: sp (HC≡C–) > sp<sup>2</sup> (CH<sub>2</sub>=CH–) > sp<sup>3</sup> (CH<sub>3</sub>CH<sub>2</sub>–) in stability, because s-character holds the electron pair tightest. Easier fragment → easier loss of CO<sub>2</sub>.',
        ],
        ans: 'HC≡C–COOH > CH<sub>2</sub>=CH–COOH > CH<sub>3</sub>CH<sub>2</sub>COOH.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which reagent converts benzoic acid to benzene?',
            a: 'Soda lime (NaOH + CaO, heat) — decarboxylation.',
          },
          {
            q: '[JEE Main] True or false: aliphatic carboxylic acids up to C<sub>9</sub> are colourless gases at room temperature.',
            a: 'False — they are colourless liquids (unpleasant odours); higher members are waxy solids.',
          },
          {
            q: '[JEE Main] Three molecules of ethanal with a trace of acid give a pleasant-smelling liquid of b.p. 397 K used as a hypnotic. Name it and give its class of structure.',
            a: 'Paraldehyde: 2,4,6-trimethyl-​1,3,5-trioxane, a cyclic trimer (cyclic acetal-type trioxane ring) of ethanal.',
          },
          {
            q: '[JEE Main] How many moles of CH<sub>3</sub>MgBr does one mole of ethyl ethanoate consume, and what is the final organic product after work-up?',
            a: 'Two moles: the first gives propanone (after loss of ethoxide), the second adds to it — the product is 2-methyl​propan-2-ol (tert-butyl alcohol), a tertiary alcohol: acetone + CH<sub>3</sub> gives (CH<sub>3</sub>)<sub>3</sub>C–OH.',
          },
          {
            q: '[JEE Advanced] Why does propane-1,3-dioic (malonic) acid lose CO<sub>2</sub> far more readily than ethanoic acid on heating?',
            a: 'Its second –COOH sits on the carbon next to the first, so malonic acid is a β-dicarbonyl compound, like a β-keto acid: on gentle heating the C=O of one carboxyl takes the O–H hydrogen of the other through a cyclic six-membered transition state, CO<sub>2</sub> leaves, and the enol formed tautomerises to ethanoic acid. Ethanoic acid has no such second C=O and needs soda-lime fusion.',
          },
        ],
      },
    ],
  },
];
