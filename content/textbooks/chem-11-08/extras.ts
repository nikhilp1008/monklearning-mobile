import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference. They open with the shared introduction to "Chapter 8:
 * Organic Chemistry — Some Basic Principles and Techniques — Additional
 * Topics" (p. 381), which is set at the head of Additional topic A's
 * Introduction. Then come:
 * - A Writing and Ranking Resonance Structures (pp. 381–383)
 * - B Electronic Effects as Ranking Instruments (pp. 383–386)
 * - C IUPAC Edge Cases the Papers Use (pp. 386–388)
 * - D Counting Isomers Systematically (pp. 388–390)
 * - E Polarimetry Arithmetic: Specific Rotation and Enantiomeric Excess
 *   (pp. 390–391)
 * - F Estimation Numericals in Their Real Exam Forms (pp. 391–394). Its
 *   Kjeldahl flow chart, captioned "Figure 1" in the book, is c11-08-F-d1,
 *   and the caption belongs to the diagram.
 * - G Summary Checklist (p. 394), kept as its own short Additional topic by
 *   Nikhil's decision.
 * - H, the book's "Addendum P — What JEE and NEET Actually Ask"
 *   (pp. 395–399), kept as the last Additional topic.
 * Each addendum prints its practice answers right after its questions. Each
 * answer is set with its own question.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 381–383 ─────────────────────────
  {
    n: 'A',
    title: 'Writing and Ranking Resonance Structures',
    extra: true,
    kalam: 'The more numerous and the more nearly equivalent the important contributors, the larger the resonance energy.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has built the grammar of organic chemistry: representations, classification, hybridisation, IUPAC naming with its seniority list, the six structural isomerisms plus stereoisomerism, the fission–intermediate–reagent machinery, and the purification and analysis toolkit. Six patterns the examiners exploit remain open. The chapter tells you resonance exists but never teaches you to write and rank contributing structures — Addendum A supplies NCERT’s rules and its worked pairs. Addendum B turns the electronic effects (inductive, resonance, electromeric, hyperconjugation) from labels into ranking instruments: acidity orders, hyperconjugation hydrogen counts, and the +<i>E</i>/−<i>E</i> directions. Addendum C drills the IUPAC edge cases the papers actually use — the oxo-/formyl- divide, <i>N</i>-substituted amides, and alphabetical tie-breaks. Addendum D makes isomer counting a procedure instead of a gamble, ending with the cyclic-isomer capstone. Addendum E adds the polarimetry arithmetic (specific rotation, enantiomeric excess) that the chapter omits but JEE Main has asked numerically. Addendum F upgrades the estimation numericals to their real exam forms: the Kjeldahl back-titration, the Dumas gas-law route, and the Carius precipitate calculation. Nothing here repeats the chapter — these are the gaps it leaves.',
      },
      {
        t: 'p',
        html: 'The chapter uses resonance to explain stability but never shows you how a student produces resonance structures on demand, or how to decide which contributor matters most. NCERT’s section 12.7.6–12.7.7 is the specification; the papers ask it as “which compound does not show resonance?” and “which contributing structure is most stable?”',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What resonance structures are.</b> When no single Lewis structure accounts for a molecule’s properties, the real structure is a <b>resonance hybrid</b> of two or more <b>canonical (contributing) structures</b>. The canonical structures are hypothetical — none of them exists; the hybrid is the only real species, and it is lower in energy than any single contributor. The energy gap between the hybrid and the most stable contributor is the <b>resonance (stabilisation) energy</b>. The more numerous and the more nearly equivalent the important contributors, the larger the resonance energy. The experimental signature: benzene’s C–C bonds are all 139 pm — intermediate between a C–C single bond (154 pm) and a C=C double bond (134 pm) — which no single Kekulé structure can explain.',
      },
      {
        t: 'p',
        html: '<b>The two hard rules for valid contributors:</b><br>1. The positions of the nuclei are the same in every contributor — only π electrons and lone pairs move. (If an atom moves, you are looking at tautomers or isomers, not resonance.)<br>2. Every contributor has the same number of unpaired electrons.',
      },
      {
        t: 'p',
        html: '<b>The stability ranking rules</b> (a contributor is more stable when it has):<br>1. more covalent bonds;<br>2. a complete octet on every atom (hydrogen: duplet);<br>3. less separation of opposite charges;<br>4. any negative charge on the more electronegative atom (and positive charge on the more electropositive one);<br>5. more dispersal of charge.',
      },
      {
        t: 'p',
        html: 'Equivalent contributors (the two Kekulé forms of benzene, the two forms of the acetate ion) contribute equally and stabilise most.',
      },
      {
        t: 'p',
        html: '<b>Drawing them (NCERT Problem 12.16 — the acetate ion, CH<sub>3</sub>COO<sup>−</sup>):</b> write one Lewis structure with all lone pairs shown; push a lone pair from the single-bonded oxygen toward the C–O bond while the C=O π pair moves onto the other oxygen; the result is the second contributor, with the negative charge now on the other oxygen. The two contributors are equivalent — equal bond lengths, charge shared equally — which is why the carboxylate group is so stable.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Ranking the contributors of acrolein',
        q: 'Write the resonance structures of CH<sub>2</sub>=CH−CHO and rank their relative stabilities. (NCERT Problem 12.17.)',
        steps: [
          'Three contributors arise by moving the π electrons along the conjugated chain C=C–C=O:<br>• I: CH<sub>2</sub>=CH−CH=O — no charge separation, every heavy atom has a complete octet, maximum covalent bonds.<br>• II: <sup>+</sup>CH<sub>2</sub>−CH=CH−O<sup>−</sup> — charge-separated, but the negative charge rests on oxygen (the more electronegative atom) and every atom keeps its octet.<br>• III: <sup>−</sup>CH<sub>2</sub>−CH=CH−O<sup>+</sup> — charge-separated with the negative charge on carbon and positive on oxygen, and the octet situation is worse.',
          'The uncharged structure dominates; of the two charge-separated forms, the one with negative charge on oxygen (II) beats the one with positive charge on oxygen (III).',
        ],
        ans: 'Stability I > II > III.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Which compound does not show resonance?',
        q: 'Which of the following does not exhibit resonance? (a) CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CONH<sub>2</sub> (b) CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>2</sub>NH<sub>2</sub> (c) CH<sub>3</sub>CH<sub>2</sub>OCH=CH<sub>2</sub>',
        steps: [
          'Resonance needs conjugation: a π bond adjacent to another π bond or to a lone pair. (a) is an amide — the nitrogen lone pair sits directly on the C=O carbon: resonance. (c) is an enol ether — the oxygen lone pair is directly attached to the C=C: resonance. In (b), the double bond and the −NH<sub>2</sub> lone pair are separated by an sp<sup>3</sup> CH<sub>2</sub>: the lone pair cannot reach the π system. No conjugation, no resonance.',
          'The crack for every such question: trace an unbroken alternating path of π bonds and lone-pair-bearing atoms; a single sp<sup>3</sup> carbon breaks it.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Resonance versus tautomerism',
        q: 'A classmate says the keto and enol forms of propanone are resonance structures. Correct the claim.',
        steps: [
          'In the keto ⇌ enol change, a hydrogen nucleus physically moves from carbon to oxygen (a 1,3-shift). Resonance contributors must have identical nuclear positions — only electrons relocate. Keto and enol forms are therefore <b>tautomers</b>: distinct, real molecules in dynamic equilibrium, not canonical structures of one hybrid.',
        ],
        ans: 'The claim is wrong; keto–enol is tautomerism (atoms move), resonance moves only electrons.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] State the two conditions any valid set of resonance structures must satisfy.',
            a: 'Same nuclear positions; same number of unpaired electrons.',
          },
          {
            q: '[JEE Main] For the nitromethyl carbanion, <sup>−</sup>CH<sub>2</sub>−NO<sub>2</sub>, compare the contributor with the negative charge on carbon with the one that has it on oxygen. Which is the major contributor, and why?',
            a: 'The contributor with the negative charge on oxygen — rule 4 (negative charge on the more electronegative atom is more stable).',
          },
          {
            q: '[JEE Main] Why is the carbonate ion’s C–O bond length the same for all three oxygens? Answer in one line using resonance.',
            a: 'The ion is a resonance hybrid of three equivalent contributors, so each C–O bond is an identical one-and-a-third bond.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 383–386 ─────────────────────────
  {
    n: 'B',
    title: 'Electronic Effects as Ranking Instruments',
    extra: true,
    kalam: 'An acid is stronger when its conjugate base is more stable, and anything that pulls electron density away from a carboxylate anion stabilises it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines the four effects and states the carbocation, radical, and carbanion orders. What it does not do is show you the three uses the papers care about: ordering acid strengths with the inductive effect, counting hyperconjugation structures, and directing the electromeric effect.',
      },

      { t: 'part', title: 'B1 — Inductive effect and acid strength' },
      {
        t: 'p',
        html: 'An acid is stronger when its conjugate base is more stable, and anything that pulls electron density away from a carboxylate anion stabilises it. Electron-withdrawing groups (−<i>I</i>: halogens, −NO<sub>2</sub>, −CN, −COOH) therefore strengthen acids; electron-releasing groups (+<i>I</i>: alkyl) weaken them. Two quantitative-seeming rules that are pure induction:<br>• <b>Number rule:</b> Cl<sub>3</sub>C−COOH > Cl<sub>2</sub>CH−COOH > ClCH<sub>2</sub>−COOH > CH<sub>3</sub>−COOH — each additional Cl withdraws more, stabilising the anion further.<br>• <b>Distance rule:</b> with Cl on the <i>α</i>-carbon (CH<sub>3</sub>CHCl−COOH) the acid is stronger than with Cl one carbon further away (CH<sub>2</sub>Cl−CH<sub>2</sub>−COOH) — the inductive effect fades with distance and is negligible beyond about three carbons.<br>• <b>Electronegativity rule:</b> FCH<sub>2</sub>COOH > ClCH<sub>2</sub>COOH > BrCH<sub>2</sub>COOH > ICH<sub>2</sub>COOH — the more electronegative the halogen, the stronger its −<i>I</i>.<br>• <b>Alkyl comparison:</b> HCOOH > CH<sub>3</sub>COOH in acid strength — the methyl group’s +<i>I</i> effect pushes electron density toward the carboxyl, destabilising the anion.',
      },
      {
        t: 'p',
        html: 'The same logic inverts for bases: groups that donate electron density strengthen bases, so a carbanion is destabilised by alkyl +<i>I</i> and stabilised by −<i>I</i> — which is exactly why the carbanion stability order (methyl > 1° > 2° > 3°) runs opposite to the carbocation order.',
      },

      { t: 'part', title: 'B2 — Hyperconjugation: count the α-hydrogens' },
      {
        t: 'p',
        html: 'Hyperconjugation is the delocalisation of σ(C–H) electrons from a carbon adjacent to an electron-deficient or unsaturated centre into the empty p orbital or π system. It is a <b>permanent</b> effect, and its magnitude is counted, not felt: the number of hyperconjugative structures equals the number of <i>α</i> C–H bonds (hydrogens on carbons directly attached to the cationic/unsaturated carbon).',
      },
      {
        t: 'table',
        title: null,
        head: ['Cation', 'α-C–H bonds', 'Rank'],
        rows: [
          ['(CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>', '9', 'most stable'],
          ['(CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>', '6', ''],
          ['CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>', '3', ''],
          ['CH<sub>3</sub><sup>+</sup>', '0', 'least stable'],
        ],
      },
      {
        t: 'p',
        html: 'This is the quantitative backbone of the 3° > 2° > 1° > methyl order (NCERT Problem 12.19): (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> has nine hyperconjugable C–H bonds; CH<sub>3</sub><sup>+</sup> has none — its vacant p orbital is perpendicular to the plane of its C–H bonds and cannot overlap with them at all. The same counting stabilises alkenes (more alkyl substitution on C=C = more hyperconjugation = more stable; this drives the alkene chemistry of Chapter 9) and alkyl free radicals.',
      },

      { t: 'part', title: 'B3 — The electromeric effect has a direction' },
      {
        t: 'p',
        html: 'The chapter defines the electromeric effect as the temporary, reagent-demanded transfer of a π pair. NCERT splits it by direction:<br>• <b>+<i>E</i>:</b> the π pair shifts to the atom to which the attacking reagent bonds (typical when an electrophile, for example H<sup>+</sup> adding to a C=C bond, is the attacking reagent).<br>• <b>−<i>E</i>:</b> the π pair shifts to the atom other than the one the reagent attaches to (typical when a nucleophile, for example CN<sup>−</sup> adding to a C=O group, is the attacking reagent).',
      },
      {
        t: 'p',
        html: 'And one supremacy rule worth memorising: <b>when inductive and electromeric effects operate in opposite directions, the electromeric effect predominates</b> — a complete transfer beats a partial displacement while the reagent is present.',
      },

      { t: 'part', title: 'B4 — One-screen group sorter' },
      {
        t: 'defgrid',
        title: 'Effect — Groups',
        rows: [
          {
            k: '+<i>R</i> / +<i>M</i> (donate into conjugation)',
            v: '−OH, −OR, −OCOR, −NH<sub>2</sub>, −NHR, −NR<sub>2</sub>, −NHCOR, halogens',
          },
          { k: '−<i>R</i> / −<i>M</i> (withdraw from conjugation)', v: '−COOH, −CHO, >C=O, −CN, −NO<sub>2</sub>' },
          {
            k: '−<i>I</i> (withdraw through σ)',
            v: 'halogens, −NO<sub>2</sub>, −CN, −COOH, −NR<sub>3</sub><sup>+</sup>, −SR<sub>2</sub><sup>+</sup>',
          },
          { k: '+<i>I</i> (release through σ)', v: 'alkyl groups, −O<sup>−</sup>, −COO<sup>−</sup>' },
        ],
      },
      {
        t: 'p',
        html: 'Note the double life of the halogens and of −OH/−NH<sub>2</sub>: −<i>I</i> through the σ framework but +<i>R</i> through their lone pairs when conjugated — and resonance wins when both operate (this single fact drives the directive effects of Chapter 9).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Acid-strength ordering',
        q: 'Arrange in increasing acid strength:<br>(i) CH<sub>3</sub>COOH, (ii) ClCH<sub>2</sub>COOH, (iii) Cl<sub>2</sub>CHCOOH, (iv) Cl<sub>3</sub>CCOOH.',
        steps: [
          'All four are carboxylic acids differing only in chlorination at the <i>α</i>-carbon. Each Cl exerts −<i>I</i>, stabilising the carboxylate conjugate base; more chlorines, more stabilisation, stronger acid.',
        ],
        ans: '(i) < (ii) < (iii) < (iv).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Counting hyperconjugation structures',
        q: 'How many hyperconjugative structures are possible for the tert-butyl cation, (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>? Explain why CH<sub>3</sub><sup>+</sup> shows none.',
        steps: [
          'The cationic carbon has three methyl groups attached; each methyl contributes its 3 C–H bonds to hyperconjugation with the empty p orbital: 3 × 3 = 9 structures. In CH<sub>3</sub><sup>+</sup> there are no adjacent carbons at all — the vacant p orbital is perpendicular to the plane containing its own three C–H bonds, so no σ bond can align with and donate into it.',
        ],
        ans: '9 for (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>; 0 for CH<sub>3</sub><sup>+</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — The −I misfit',
        q: 'All of the following show the −<i>I</i> effect except: (a) −O<sup>−</sup> (b) −NO<sub>2</sub> (c) −CN (d) −F.',
        steps: [
          '−NO<sub>2</sub>, −CN and the halogens all withdraw electron density through the σ framework. −O<sup>−</sup> carries a full negative charge on an electronegative atom that is already electron-rich; it pushes electron density toward whatever it is attached to — a +<i>I</i> (electron-releasing) group.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Arrange in decreasing acid strength: CH<sub>2</sub>Cl−CH<sub>2</sub>−COOH, CH<sub>3</sub>−CHCl−COOH, CH<sub>3</sub>−CH<sub>2</sub>−COOH.',
            a: 'CH<sub>3</sub>CHClCOOH > CH<sub>2</sub>ClCH<sub>2</sub>COOH > CH<sub>3</sub>CH<sub>2</sub>COOH (distance rule; the unsubstituted acid is weakest).',
          },
          {
            q: '[JEE Main] Count the hyperconjugable <i>α</i>-hydrogens in the isopropyl cation and in propene (about the C=C).',
            a: 'Isopropyl cation: 6; propene: the methyl group adjacent to C=C contributes 3.',
          },
          {
            q: '[JEE Main] Which predominates when inductive and electromeric effects oppose each other, and why is the electromeric effect called temporary?',
            a: 'The electromeric effect; it is a complete π-pair transfer that exists only on the demand of an attacking reagent and reverses when the reagent is removed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 386–388 ─────────────────────────
  {
    n: 'C',
    title: 'IUPAC Edge Cases the Papers Use',
    extra: true,
    kalam: 'The chapter’s naming procedure is sound; the papers push it at three specific seams.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s naming procedure is sound; the papers push it at three specific seams. Drill these and nomenclature becomes free marks.',
      },

      { t: 'part', title: 'C1 — Aldehyde demoted twice over: oxo- versus formyl-' },
      {
        t: 'p',
        html: 'When −CHO loses the seniority contest (to −COOH), it becomes a prefix. Which prefix depends on <b>whether the aldehyde carbon can be counted inside the parent chain</b>:<br>• If the parent chain runs through the CHO carbon (an open chain containing it), the group is named <b>oxo-</b> (−C(=O)− read as part of the chain).<br>• If the CHO hangs off a ring or a chain as −CHO with its carbon outside the parent, it is <b>formyl-</b>.',
      },
      {
        t: 'p',
        html: '<b>Example (a favourite exam shape):</b> a six-carbon chain bearing −COOH at C1, a methyl at C2, and the aldehyde carbon as C6: HOOC−CH(CH<sub>3</sub>)−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CHO. Principal group: −COOH → suffix -oic acid, chain = hexanoic acid. The aldehyde carbon is part of the chain, so C6 carries <b>oxo-</b>, not formyl-: <b>2-methyl-6-oxohexanoic acid</b>. Choosing “5-formyl-2-methylpentanoic acid” is the trap: it leaves the CHO carbon out of the parent, giving a five-carbon chain when a six-carbon chain through that carbon exists, which contradicts “longest chain”. When the CHO carbon is in the longest chain, oxo- is mandatory.',
      },

      { t: 'part', title: 'C2 — Substituents on nitrogen: the N- locant' },
      {
        t: 'p',
        html: 'Amides (and amines) can carry alkyl groups on nitrogen. These are named with the locant <b>N-</b> placed before the substituent, and the N-substituent does not join the parent chain: CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CONHCH<sub>2</sub>CH<sub>3</sub> is <b>N-ethyl-2-methylbutanamide</b> — parent butanamide (four carbons through the carbonyl), methyl at C2, ethyl on nitrogen. Alphabetical: N-ethyl is cited as “ethyl” (the N- is ignored for alphabetising).',
      },

      { t: 'part', title: 'C3 — Tied numbering is broken by the alphabet, not by size' },
      {
        t: 'p',
        html: 'When both numbering directions give the same locant set, the lowest locant goes to the substituent cited <b>first alphabetically</b> — bromo beats chloro beats ethyl beats methyl, regardless of which group is bigger or more “important” chemically.',
      },
      {
        t: 'p',
        html: '<b>Example:</b> a hex-3-ene chain with bromine on C2 and chlorine on C5:<br>CH<sub>3</sub>CHBr−CH=CH−CHCl−CH<sub>3</sub><br>Numbering from either end puts the double bond at 3 and the substituents at {2,5}, so the whole locant set ties. The tie moves to the alphabet: bromo is cited first, so bromo takes the lower number: <b>2-bromo-5-chlorohex-3-ene</b>. (The double bond’s lowest locant is settled before any substituent is considered — only after a complete tie does the alphabet decide.)',
      },

      { t: 'part', title: 'C4 — The seniority chain, one more time, for MCQ speed' },
      {
        t: 'p',
        html: 'The papers ask for the order itself:<br>−COOH > −SO<sub>3</sub>H > {−COOR > −COCl > −CONH<sub>2</sub>} > −CN ><br>−CHO > (>C=O) > −OH > −NH<sub>2</sub><br>(the ketone group is >C=O, written in brackets here so its leading bond is not confused with the ordering sign).',
      },
      {
        t: 'p',
        html: 'Within the acid-derivative band, ester outranks acyl halide outranks amide; a common distractor swaps −COCl and −CONH<sub>2</sub>. Halogens, −NO<sub>2</sub> and alkoxy are never suffixes.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Name HOOC−CH(CH<sub>3</sub>)−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CHO.',
        steps: [
          'Principal group COOH → hexanoic acid (chain runs through the CHO carbon, C6). Aldehyde-in-chain → oxo-. Methyl at C2, oxo at C6:',
        ],
        ans: '2-methyl-6-oxohexanoic acid.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: 'Why is CH<sub>3</sub>CH<sub>2</sub>COOH propanoic acid and not “ethanecarboxylic acid”?',
        steps: [
          'The carboxyl carbon is part of the parent chain, so the root counts it: three carbons, propan-, suffix -oic acid. The -carboxylic acid suffix is reserved for cases where the COOH carbon is outside the parent (e.g. rings: cyclohexanecarboxylic acid) — using it here drops a carbon and misnames the compound.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name OHC−CH<sub>2</sub>−CH(CH<sub>3</sub>)−COOH.',
            a: '2-methyl-4-oxobutanoic acid.',
          },
          {
            q: '[NEET] Name CH<sub>3</sub>CON(CH<sub>3</sub>)<sub>2</sub> in substitutive IUPAC style.',
            a: 'N,N-dimethylethanamide.',
          },
          {
            q: '[JEE Main] A hexane bears bromine and chlorine so that either direction numbers them {3,4}. Which gets 3, and what rule decides?',
            a: 'Bromine gets 3; a tied locant set is broken by alphabetical order of citation (bromo before chloro).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 388–390 ─────────────────────────
  {
    n: 'D',
    title: 'Counting Isomers Systematically',
    extra: true,
    kalam: 'The counting lesson: structural enumeration first, then stereoisomeric expansion per structure — never mix the two passes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches you to classify a given pair; exams also ask you to count isomers of a formula, and unsystematic counting is where the marks go. Three counting protocols cover nearly every case.',
      },

      { t: 'part', title: 'D1 — Structural isomers: substitute position by position' },
      {
        t: 'p',
        html: 'Fix the carbon skeleton, then walk the replaceable positions in a fixed order, treating symmetry-equivalent positions as one. For C<sub>3</sub>H<sub>6</sub>BrCl the only skeleton is propane (three carbons cannot branch), so the enumeration is purely positional:<br>• Both halogens on C1: 1-bromo-1-chloropropane.<br>• Both on C2: 2-bromo-2-chloropropane.<br>• Br on C1, Cl on C2: 1-bromo-2-chloropropane.<br>• Cl on C1, Br on C2 (i.e. Br central, Cl terminal): 2-bromo-1-chloropropane — a different connectivity, since which halogen sits on the central carbon is a structural fact, not a numbering artefact.<br>• Br on C1, Cl on C3: 1-bromo-3-chloropropane.',
      },
      {
        t: 'p',
        html: '<b>Total: 5.</b> The discipline: list the (Br, Cl) position pairs with the two end carbons treated as equivalent — (1, 1), (2, 2), (1, 3), and the two adjacent cases (1, 2) (Br on an end carbon, Cl on the middle one) and (2, 3) (Br on the middle carbon, Cl on an end one). When the two positions differ, which halogen sits where changes the connectivity, so (1, 2) and (2, 3) are different compounds, not one.',
      },

      { t: 'part', title: 'D2 — Geometrical isomers of polyenes: the 2 to the power n rule and its exception' },
      {
        t: 'p',
        html: 'For <i>n</i> independent C=C bonds each carrying two different groups on both carbons, the maximum number of geometrical isomers is 2<sup><i>n</i></sup>. <b>Exception:</b> when the molecule has identical ends (symmetric), some of the 2<sup><i>n</i></sup> forms coincide. Hepta-2,4-diene, CH<sub>3</sub>CH=CH−CH=CH−CH<sub>2</sub>CH<sub>3</sub>, has different groups at its two ends, so all four combinations are distinct: (E,E), (Z,Z), (E,Z), (Z,E) — <b>4 isomers</b>. But hexa-2,4-diene, CH<sub>3</sub>CH=CH−CH=CH−CH<sub>3</sub>, is symmetric: its (E,Z) and (Z,E) are the same molecule, giving only <b>3</b> — (E,E), (Z,Z), and one mixed form. Check symmetry before raising 2 to any power.',
      },

      { t: 'part', title: 'D3 — The capstone: cyclic isomers of C4H7Cl' },
      {
        t: 'p',
        html: 'DoU = (2 × 4 + 2 − 7 − 1)/2 = 1: one ring (cyclic excludes the double bond). Enumerate skeletons, then positions, then stereoisomers:<br>1. Cyclobutane skeleton: chlorocyclobutane — all ring positions equivalent: <b>1</b>, achiral.<br>2. Methylcyclopropane skeleton, with Cl on:<br>• (a) C1, the carbon that carries the methyl — 1-chloro-1-methylcyclopropane, achiral;<br>• (b) a ring CH<sub>2</sub> carbon — 1-chloro-2-methylcyclopropane;<br>• (c) the methyl group — (chloromethyl)cyclopropane, achiral.<br>3. Stereochemistry of (b): C1 and C2 each bear four different groups. With different substituents there is no internal symmetry, so both the cis and the trans forms are chiral and each exists as an enantiomeric pair: <b>4 stereoisomers</b>.',
      },
      {
        t: 'p',
        html: 'Total: 1 + 1 + 4 + 1 = <b>7 cyclic isomers</b>. The counting lesson: structural enumeration first, then stereoisomeric expansion per structure — never mix the two passes.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — C4H10O, full count',
        q: 'How many structural isomers has C<sub>4</sub>H<sub>10</sub>O? Split them by functional class.',
        steps: [
          'DoU = 0: saturated, acyclic. Two functional families:',
          '<b>Alcohols</b> (4): butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol. <b>Ethers</b> (3): methoxypropane, 2-methoxypropane, ethoxyethane.',
        ],
        ans: '7 structural isomers — 4 alcohols and 3 ethers (the two classes are functional-group isomers of each other).',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Which formula gives more isomers?',
        q: 'Which has more geometrical isomers, pent-2-ene or 2-methylbut-2-ene?',
        steps: [
          'Pent-2-ene: each double-bonded carbon carries H and an alkyl (methyl on one side, ethyl on the other) — two different groups on each carbon: cis/trans pair, 2. 2-Methylbut-2-ene: one alkene carbon bears two identical methyls — fails the two-different-groups test: 0.',
          'Identical groups on one carbon kill geometrical isomerism regardless of what the other carbon carries.',
        ],
        ans: 'Pent-2-ene (2 vs 0).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Count the structural isomers of C<sub>3</sub>H<sub>8</sub>O and split by class.',
            a: 'Three: propan-1-ol, propan-2-ol (alcohols), methoxyethane (ether).',
          },
          {
            q: '[JEE Main] How many geometrical isomers has CH<sub>3</sub>CH=CH−CH=CH−CH<sub>2</sub>CH<sub>3</sub>? What if the chain were symmetric?',
            a: 'Four (unsymmetric ends, 2<sup>2</sup>); a symmetric diene gives three.',
          },
          {
            q: '[JEE Advanced] Justify in two lines why 1-chloro-2-methylcyclopropane exists as four stereoisomers while 1-chloro-1-methylcyclopropane is achiral.',
            a: 'The 1,2-compound has two non-equivalent stereocentres and no symmetry element, so cis and trans are each chiral pairs; the 1,1-compound’s ring carbon C1 carries two identical ring paths (two equivalent CH<sub>2</sub> groups), so it has no stereocentre at all.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 390–391 ─────────────────────────
  {
    n: 'E',
    title: 'Polarimetry Arithmetic: Specific Rotation and Enantiomeric Excess',
    extra: true,
    kalam: 'A racemic (1:1) mixture has ee = 0 and shows no rotation — external compensation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter establishes which molecules rotate plane-polarised light but never quantifies it. JEE Main has asked the numerical side directly; two formulas close the gap.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Specific rotation</b> is the rotation a substance gives under standardised conditions, computed from the observed rotation by:',
      },
      {
        t: 'formula',
        kicker: 'Specific rotation',
        main: '[<i>α</i>] = <i>α</i><sub>obs</sub>/(<i>c</i> × <i>l</i>)',
        legend: [
          '[<i>α</i>] = specific rotation',
          '<i>α</i><sub>obs</sub> = observed rotation',
          '<i>c</i> = concentration in g mL<sup>−1</sup>',
          '<i>l</i> = tube length in decimetres',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'with <i>c</i> the concentration in g mL<sup>−1</sup> and <i>l</i> the tube length in <b>decimetres</b> (divide cm by 10). It is a fingerprint constant of the compound: enantiomers share the same magnitude with opposite signs.',
      },
      {
        t: 'p',
        html: '<b>Enantiomeric excess (ee):</b> in a mixture of enantiomers, rotations cancel in proportion to the equal part; only the excess enantiomer shows. The observed rotation equals the pure enantiomer’s rotation scaled by the excess fraction:',
      },
      {
        t: 'formula',
        kicker: 'Enantiomeric excess (ee)',
        main: '<i>α</i><sub>obs</sub> = [<i>α</i>] × <i>c</i> × <i>l</i> × (excess enantiomer, mol)/(total, mol)',
        legend: [
          '<i>α</i><sub>obs</sub> = observed rotation of the mixture',
          '[<i>α</i>] = specific rotation of the pure enantiomer',
          '<i>c</i> = concentration in g mL<sup>−1</sup>',
          '<i>l</i> = tube length in decimetres',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A racemic (1:1) mixture has ee = 0 and shows no rotation — external compensation.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Numerical Level — Specific rotation',
        q: '2 g of a compound in 10 mL of solution in a 25 cm polarimeter tube shows observed rotation +24.6°. Find the specific rotation.',
        steps: [
          '<i>c</i> = 2/10 = 0.2 g mL<sup>−1</sup>; <i>l</i> = 25/10 = 2.5 dm.<br>[<i>α</i>] = 24.6/(0.2 × 2.5) = 24.6/0.5',
          'The two unit conversions (per mL, per dm) are the only traps.',
        ],
        ans: '+49.2°.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Numerical Level — Working backwards from a mixture',
        q: 'A solution is made by mixing 10 mL of 0.10 M of the R enantiomer with 30 mL of 0.10 M of the S enantiomer of the same compound. The observed specific rotation of the mixture is +4.8°. Find the absolute specific rotation of each pure enantiomer.',
        steps: [
          'Millimoles: R = 10 × 0.10 = 1 mmol; S = 30 × 0.10 = 3 mmol; total 4 mmol, excess S = 2 mmol, so the excess fraction is 2/4 = 0.5. The observed rotation is the pure-enantiomer value times this fraction: |<i>α</i><sub>pure</sub>| = 4.8/0.5',
        ],
        ans: '9.6° for each (R and S opposite in sign, equal in magnitude).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Why does a racemic mixture show zero observed rotation, and how does this differ from a meso compound?',
            a: 'Equal numbers of both enantiomers rotate light equally in opposite directions — external compensation; a meso compound is a single achiral molecule whose halves cancel internally.',
          },
          {
            q: '[JEE Main] A 1 g/10 mL solution of a pure enantiomer in a 10 cm tube reads +6.4°. What observed rotation would a mixture containing 60% of the (+) form and 40% of the (−) form give at the same total concentration and path length?',
            a: 'ee = 0.60 − 0.40 = 0.20; <i>α</i><sub>obs</sub> = 6.4 × 0.20 = +1.28° (with <i>c</i> and <i>l</i> unchanged).',
          },
          {
            q: '[JEE Main] Enantiomers have identical melting points but opposite specific rotations — state which property of enantiomers each fact illustrates.',
            a: 'Identical melting point: same physical properties toward achiral probes; opposite rotation: opposite interaction with plane-polarised (chiral) light.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 391–394 ─────────────────────────
  {
    n: 'F',
    title: 'Estimation Numericals in Their Real Exam Forms',
    extra: true,
    kalam: 'The chapter gives the estimation formulas in their simplest dress.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the estimation formulas in their simplest dress. The papers complicate exactly three of them: Kjeldahl as a <b>back-titration</b>, Dumas via the <b>gas law</b> instead of STP proportionality, and Carius as a one-line mass-fraction. Master these three shapes.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Kjeldahl with back-titration.</b> The ammonia is absorbed in a known excess of standard acid; the leftover acid is then titrated with standard alkali. Working in milliequivalents:',
      },
      {
        t: 'formula',
        kicker: 'Kjeldahl with back-titration',
        main: 'meq of NH<sub>3</sub> = meq of acid taken − meq of NaOH used<br>% N = (14 × meq of NH<sub>3</sub>)/(1000 × <i>w</i>) × 100',
        legend: [
          'meq of NH<sub>3</sub> = milliequivalents of ammonia absorbed',
          '<i>w</i> = sample mass in grams',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'with <i>w</i> the sample mass in grams (one N atom → one NH<sub>3</sub> → one equivalent; 14× meq is the mass of nitrogen in <b>milligrams</b>, hence the 1000). Watch the acid: for H<sub>2</sub>SO<sub>4</sub>, normality is 2× molarity.',
      },
      { t: 'fig', id: 'c11-08-F-d1' },
      {
        t: 'p',
        html: '<b>Dumas with non-STP data.</b> Collect the volume of N<sub>2</sub> over KOH, subtract aqueous tension if collected over water, then use <i>PV</i> = <i>nRT</i> directly:',
      },
      {
        t: 'formula',
        kicker: 'Dumas with non-STP data',
        main: '<i>n</i>(N<sub>2</sub>) = <i>PV</i>/(<i>RT</i>)<br>% N = (28 <i>n</i>(N<sub>2</sub>))/<i>w</i> × 100',
        legend: [
          '<i>n</i>(N<sub>2</sub>) = moles of nitrogen gas',
          '<i>P</i> = pressure of the dry nitrogen',
          '<i>V</i> = volume of nitrogen collected',
          '<i>R</i> = gas constant',
          '<i>T</i> = temperature',
          '<i>w</i> = sample mass in grams',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Carius one-liners.</b> For a halogen X weighed as AgX, and for sulphur weighed as BaSO<sub>4</sub>:',
      },
      {
        t: 'formula',
        kicker: 'Carius one-liners',
        main: '% X = (at. mass of X)/(mol. mass of AgX) × <i>m</i><sub>AgX</sub>/<i>w</i> × 100<br>% S = (32/233) × <i>m</i><sub>BaSO₄</sub>/<i>w</i> × 100',
        legend: [
          '<i>m</i><sub>AgX</sub> = mass of silver halide weighed',
          '<i>m</i><sub>BaSO₄</sub> = mass of barium sulphate weighed',
          '<i>w</i> = sample mass in grams',
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Kjeldahl back-titration',
        q: '29.5 mg of an organic compound is Kjeldahl-digested; the evolved ammonia is absorbed in 20 mL of 0.1 M HCl, and the excess acid needs 15 mL of 0.1 M NaOH. Find %N.',
        steps: [
          'meq acid taken = 20 × 0.1 = 2.0; meq NaOH = 15 × 0.1 = 1.5; meq NH<sub>3</sub> = 0.5. Mass of N = 0.5 × 14 = 7.0 mg. % N = 7.0/29.5 × 100',
        ],
        ans: '23.7%.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Kjeldahl with sulphuric acid',
        q: '0.5 g of a compound is digested; the ammonia is absorbed in 50 mL of 0.5 M H<sub>2</sub>SO<sub>4</sub>; the residual acid requires 60 mL of 0.5 M NaOH. Find %N.',
        steps: [
          'meq H<sub>2</sub>SO<sub>4</sub> = 50 × 0.5 × 2 = 50; meq NaOH = 60 × 0.5 = 30; meq NH<sub>3</sub> = 20; mass N = 20 × 14 = 280 mg = 0.28 g. % N = 0.28/0.5 × 100',
          'The factor of 2 for a diprotic acid is the mark-sinker.',
        ],
        ans: '56%.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Numerical Level — Dumas via the gas law',
        q: '0.8 g of a compound by Dumas’ method gives 120 mL of nitrogen collected over water at 300 K and 715 mm Hg (aqueous tension at 300 K = 15 mm Hg). Find %N.',
        steps: [
          'Dry pressure: 715 − 15 = 700 mm = 700/760 atm.<br><i>n</i>(N<sub>2</sub>) = ((700/760) × 0.120)/(0.0821 × 300) = 4.49 × 10<sup>−3</sup> mol',
          'Mass of N = 28 × 4.49 × 10<sup>−3</sup> = 0.1257 g; % N = 0.1257/0.8 × 100',
          'Two traps, both classic: subtract the aqueous tension first, and remember the 28 (molar mass of N<sub>2</sub>), not 14.',
        ],
        ans: '≈ 15.7%.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Carius for bromine',
        q: '0.15 g of an organic compound in a Carius estimation gives 0.12 g of AgBr. Find %Br. (AgBr = 188 g mol<sup>−1</sup>.)',
        steps: ['% Br = (80/188) × (0.12/0.15) × 100'],
        ans: '34.0%.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does Kjeldahl’s method fail for nitro compounds and azo compounds (and pyridine-type ring nitrogen)?',
            a: 'Their nitrogen is not quantitatively converted to ammonium sulphate during digestion — nitro, azo and ring nitrogen resist the reduction/digestion step, so the ammonia (and hence the titration) under-reports it.',
          },
          {
            q: '[JEE Main] 0.8 g of a compound on Kjeldahl digestion gives ammonia absorbed in 100 mL of 0.2 M H<sub>2</sub>SO<sub>4</sub>; excess acid needs 80 mL of 0.1 M NaOH. Find %N.',
            a: 'meq acid = 100 × 0.2 × 2 = 40; meq NaOH = 8; meq NH<sub>3</sub> = 32; N = 32 × 14 = 448 mg; %N = 0.448/0.8 × 100 = 56%.',
          },
          {
            q: '[JEE Main] 0.2 g of a sulphur compound on Carius oxidation gives 0.466 g of BaSO<sub>4</sub>. Find %S. (BaSO<sub>4</sub> = 233.)',
            a: '%S = (32/233) × (0.466/0.2) × 100 = 32%.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · p. 394 ─────────────────────────
  {
    n: 'G',
    title: 'Summary Checklist',
    extra: true,
    kalam: 'Before the exam, verify you can answer yes to each of the following.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'Before the exam, verify you can answer yes to each of the following:' },

      { t: 'part', title: 'Checklist' },
      {
        t: 'p',
        html: '1. Can you write the contributors of CH<sub>3</sub>COO<sup>−</sup>, CH<sub>2</sub>=CH−CHO and nitromethane, and rank any set of contributors by the five stability rules?<br>2. Can you separate resonance from tautomerism in one sentence (electrons move vs nuclei move)?<br>3. Can you order any family of haloacetic acids by strength using the number, distance and electronegativity rules of the inductive effect?<br>4. Can you count hyperconjugable hydrogens on sight (9 for tert-butyl, 6 for isopropyl, 3 for ethyl/propene’s methyl, 0 for methyl)?<br>5. Can you decide oxo- vs formyl-, place an N-substituent, and break a tied numbering alphabetically?<br>6. Can you enumerate the structural isomers of C<sub>3</sub>H<sub>6</sub>BrCl (5), C<sub>4</sub>H<sub>10</sub>O (7), and the cyclic isomers of C<sub>4</sub>H<sub>7</sub>Cl (7, with the stereochemical expansion)?<br>7. Can you compute a specific rotation from polarimeter data and back out an enantiomeric excess from a mixed sample?<br>8. Can you run a Kjeldahl back-titration (including the ×2 for H<sub>2</sub>SO<sub>4</sub>), a Dumas gas-law calculation (with aqueous tension), and a Carius mass-fraction in under two minutes each?',
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 395–399 ─────────────────────────
  {
    n: 'H',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'In recent JEE Main and NEET papers, questions on this chapter come from four territories, with isomerism and analysis carrying the most weight.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'In recent JEE Main and NEET papers, questions on this chapter come from four territories, with isomerism and analysis carrying the most weight:',
      },
      {
        t: 'defgrid',
        title: 'Sub-topic — Approximate share of questions',
        rows: [
          { k: 'Nomenclature and hybridisation', v: '<b>High — roughly a fifth</b>' },
          {
            k: 'Isomerism and stereochemistry (incl. counting, optical activity)',
            v: '<b>Highest — roughly a third</b>',
          },
          { k: 'Intermediates and electronic effects', v: '<b>Moderate — roughly an eighth</b>' },
          { k: 'Purification and analysis', v: '<b>Highest — roughly a third</b>' },
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> every part of the chapter is examined, but isomerism and analysis together supply about two-thirds of the questions. The analysis questions are disproportionately numerical (Kjeldahl, Dumas, Carius, Dumas-with-corrections), and the isomerism questions are disproportionately counting-based. Both reward drilled procedures, not rereading.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. “Name this structure” with a seniority or tie-break twist</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A drawn structure whose options differ only in prefix choice or numbering — oxo- versus formyl-, an alphabetical tie-break (for example 2-bromo-5-chlorohex-3-ene), an N-ethyl amide, or the priority order itself.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> lock the suffix first (seniority), lock C1 (principal group), then apply the lowest-locant and first-point-of-difference rules, and only then the alphabetical tie-break. Every wrong option violates exactly one of those steps, in that order.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'six-carbon chain, COOH at C1, methyl at C2, and the CHO carbon as C6.',
        steps: [
          'Acid outranks aldehyde → hexanoic acid; the CHO carbon lies inside the parent chain → <b>oxo-</b> prefix.',
          'The “5-formyl-2-methylpentanoic acid” option is the constructed trap — it removes the CHO carbon from the chain, but a CHO carbon that lies in the longest chain stays in it and is named oxo-; formyl- is for CHO outside the parent chain.',
        ],
        ans: '2-methyl-6-oxohexanoic acid.',
      },
      { t: 'p', html: '<b>2. Isomer-relationship identification and match-the-column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Pairs or a column to match against the six structural types: n-butane and isobutane (chain); methoxyethane and propanol (functional); but-2-ene and cyclobutane (ring-chain); ethanimine and ethenamine (tautomers).',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> run the chapter’s Procedure A in order — same formula? same connectivity? what exactly moved? The four standard pairs above are worth freezing in memory; they reappear verbatim across years.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'CH<sub>3</sub>−CH<sub>2</sub>−CH(OH)−CH=CH−CH<sub>3</sub>.',
        steps: [
          'Geometrical: yes (each alkene carbon bears H + a different alkyl). Optical: yes (C3 bears H, OH, ethyl, propenyl — four different groups). Functional: yes (an ether with the same formula exists). Metamerism: <b>no</b> — metamerism needs unequal alkyl groups around a divalent functional group (−O−, −S−, −CO−); an alcohol’s −OH is monovalent. So metamerism is the one isomerism this compound does not show.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>3. Counting questions: structural, geometrical, stereochemical</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Total number of isomers of…” — cyclic C<sub>4</sub>H<sub>7</sub>Cl (7), C<sub>3</sub>H<sub>6</sub>BrCl (5), a diene with 4 geometrical isomers, stereoisomer counts via 2<sup><i>n</i></sup> with the meso correction.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> the three-pass protocol of Addendum D — skeletons, then substitution positions with symmetry collapse, then stereoisomeric expansion (cis/trans pairs and enantiomer pairs per structure). Quote 2<sup><i>n</i></sup> only after checking for meso symmetry.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'propane skeleton; position pairs for (Br, Cl): (1,1), (2,2), (1,2), (2,3), (1,3) — five distinct connectivities.',
        steps: [],
        ans: '5.',
      },
      { t: 'p', html: '<b>4. Stability and electronic-effect orderings</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Rank carbocations or radicals, identify the species without resonance, spot the group without −<i>I</i>, count hyperconjugation structures (the tert-butyl cation has nine <i>α</i>-hydrogens, so 9), count electrophilic centres.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> the fixed checklist — resonance first, then hyperconjugation/+<i>I</i>, then ±<i>M</i>/±<i>I</i> of adjacent groups. For hyperconjugation, count <i>α</i> C–H bonds arithmetically.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: '−NO<sub>2</sub>, −CN, halogens all withdraw through σ; −O<sup>−</sup> is electron-rich and releases (+<i>I</i>). The “except” answer is −O<sup>−</sup>.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>5. Estimation numericals with one hidden correction</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Kjeldahl with excess acid and a NaOH back-titre (typical answers 23.7% and 56%), Dumas with aqueous tension or the full gas law (15.7%), and Carius mass-fractions (34% for bromine, 32% for sulphur).',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> work in milliequivalents and write the subtraction explicitly: acid taken minus base used equals ammonia. Every wrong option in such a question is one missing correction — the ×2 on H<sub>2</sub>SO<sub>4</sub>, the aqueous tension, or the 28 vs 14 in Dumas.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'meq acid = 2.0, meq NaOH = 1.5, meq NH<sub>3</sub> = 0.5; N = 7.0 mg in 29.5 mg; <b>23.7%</b>.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>6. Chromatography and purification statements</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Assertion–reason on paper chromatography versus TLC, the direction of <i>R</i><sub>f</sub>, elution order on silica, method–principle matching (differential extraction = solubility in two immiscible solvents), steam distillation of o-/p-nitrophenol.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> two facts settle almost everything: paper chromatography is <b>partition</b> (water held in the cellulose is the liquid stationary phase, so “paper chromatography is adsorption” is false while “water in the paper is the stationary phase” is true), and TLC/column chromatography on silica or alumina is <b>adsorption</b>. Higher <i>R</i><sub>f</sub> = less retained = faster elution, so a statement that a higher <i>R</i><sub>f</sub> means longer retention is false. Steam distillation exploits the steam-volatility gap between o-nitrophenol (intramolecular H-bond, steam-volatile) and p-nitrophenol (intermolecular H-bond, not steam-volatile).',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: '<b>Trap 1: Oxo- versus formyl-.</b> The aldehyde prefix depends on whether its carbon lies inside the parent chain. Exam options are routinely built on this single distinction.',
      },
      {
        t: 'p',
        html: '<b>Trap 2: 2<sup><i>n</i></sup> without the symmetry check.</b> Symmetric dienes and molecules with equivalent stereocentres (meso) always count fewer than 2<sup><i>n</i></sup> — hexa-2,4-diene has 3 geometrical isomers, not 4; 2,3-dichlorobutane has 3 stereoisomers, not 4.',
      },
      {
        t: 'p',
        html: '<b>Trap 3: Paper chromatography as “adsorption”.</b> It is partition — the stationary phase is the water trapped in the paper, a liquid. This is asked repeatedly, in assertion–reason and statement formats.',
      },
      {
        t: 'p',
        html: '<b>Trap 4: The sulphuric-acid factor of two.</b> In Kjeldahl back-titrations with H<sub>2</sub>SO<sub>4</sub>, normality is twice molarity. Forgetting the factor of 2 changes the meq of acid taken and so the whole subtraction: in the second worked example of Additional topic F the unfactored acid would be 25 meq, less than the 30 meq of NaOH used — a negative ammonia value that signals the slip.',
      },
      {
        t: 'p',
        html: '<b>Trap 5: <i>R</i><sub>f</sub> read backwards.</b> A high <i>R</i><sub>f</sub> means the component travelled with the solvent — weakly adsorbed, fast, short elution time. Assertions built on the opposite claim are false.',
      },
      {
        t: 'p',
        html: '<b>Trap 6: Resonance where there is none.</b> An sp<sup>3</sup> carbon between a lone pair and a π bond severs conjugation (for example CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>2</sub>NH<sub>2</sub>). Trace the alternating path before answering.',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The correct IUPAC name of CH<sub>3</sub>−CH<sub>2</sub>−COOH is: (a) ethanecarboxylic acid (b) propanoic acid (c) ethanoic acid (d) propionic acid.',
            a: '(b). The carboxyl carbon belongs to the parent chain: propan- + -oic acid. (d) is the common name — the classic distractor.',
          },
          {
            q: '[Easy] The number of <i>α</i>-hydrogens available for hyperconjugation in (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> is: (a) 3 (b) 6 (c) 9 (d) 2.',
            a: '(b). Two methyl groups adjacent to the cationic carbon, 3 H each.',
          },
          {
            q: '[Easy] In Lassaigne’s test, a sodium fusion extract giving a blood-red colour with Fe<sup>3+</sup> indicates: (a) nitrogen only (b) sulphur only (c) both nitrogen and sulphur (d) halogen.',
            a: '(c). N and S fuse to NaSCN; thiocyanate with Fe<sup>3+</sup> is the blood-red test. Nitrogen alone gives Prussian blue.',
          },
          {
            q: '[Moderate] The correct decreasing order of IUPAC seniority is:<br>(a) −COOH > −CONH<sub>2</sub> > −COCl > −CHO<br>(b) −SO<sub>3</sub>H > −COCl > −CONH<sub>2</sub> > −CN<br>(c) −COOR > −COCl > −NH<sub>2</sub> > (>C=O)<br>(d) −COOH > −COOR > −CONH<sub>2</sub> > −COCl',
            a: '(b). Sulphonic acid is the most senior group in option (b); within the acid derivatives the order is ester > acyl halide > amide, followed by nitrile, and only (b) is internally consistent with it. (a) inverts halide/amide; (c) places −NH<sub>2</sub> above the carbonyl; (d) inverts amide/halide.',
          },
          {
            q: '[Moderate] The number of structural isomers of C<sub>3</sub>H<sub>6</sub>BrCl is: (a) 4 (b) 5 (c) 6 (d) 7.',
            a: '(b). Position pairs on propane: (1,1), (2,2), (1,2), (2,3), (1,3) — five connectivities (Addendum D1).',
          },
          {
            q: '[Moderate] A compound gives 0.287 g AgCl from 0.20 g in a Carius estimation. %Cl is: (a) 17.75 (b) 35.5 (c) 71.0 (d) 25.0. (AgCl = 143.5.)',
            a: '(b). % Cl = (35.5/143.5) × (0.287/0.20) × 100 = 35.5%.',
          },
          {
            q: '[Moderate] Which does not exhibit resonance? (a) CH<sub>3</sub>CONH<sub>2</sub> (b) CH<sub>2</sub>=CH−O−CH<sub>3</sub> (c) CH<sub>2</sub>=CH−CH<sub>2</sub>−NH<sub>2</sub> (d) nitrobenzene.',
            a: '(c). The sp<sup>3</sup> CH<sub>2</sub> insulates the nitrogen lone pair from the double bond — no conjugation.',
          },
          {
            q: '[Hard] The number of cyclic isomers (structural + stereoisomeric) of C<sub>4</sub>H<sub>7</sub>Cl is: (a) 4 (b) 5 (c) 6 (d) 7.',
            a: '(d). Chlorocyclobutane: 1. Methylcyclopropane derivatives: the 1,1-isomer 1, the chloromethyl compound 1, and the 1,2-isomer 4 (cis and trans, each an enantiomeric pair). Total 7 (see D3).',
          },
          {
            q: '[Hard] 29.5 mg of a nitrogen compound is Kjeldahl-digested; the ammonia enters 20 mL of 0.1 M HCl; the excess acid needs 15 mL of 0.1 M NaOH. %N is: (a) 47.4 (b) 23.7 (c) 59.0 (d) 11.85.',
            a: '(b). meq NH<sub>3</sub> = 2.0 − 1.5 = 0.5; N = 7.0 mg; 7.0/29.5 × 100 = 23.7%.',
          },
          {
            q: '[Hard] A solution of 2 g of an enantiomer in 10 mL in a 25 cm tube reads +24.6°. Its specific rotation is: (a) +9.84 (b) +49.2 (c) +123 (d) +24.6 degrees.',
            a: '(b). [<i>α</i>] = 24.6/(0.2 × 2.5) = +49.2° — remember per mL and per decimetre.',
          },
          {
            q: '[Hard] Increasing acid strength:<br>(a) CH<sub>3</sub>COOH < ClCH<sub>2</sub>COOH < Cl<sub>2</sub>CHCOOH < Cl<sub>3</sub>CCOOH<br>(b) Cl<sub>3</sub>CCOOH < Cl<sub>2</sub>CHCOOH < ClCH<sub>2</sub>COOH < CH<sub>3</sub>COOH<br>(c) ClCH<sub>2</sub>COOH < CH<sub>3</sub>COOH < Cl<sub>2</sub>CHCOOH < Cl<sub>3</sub>CCOOH<br>(d) CH<sub>3</sub>COOH < Cl<sub>3</sub>CCOOH < ClCH<sub>2</sub>COOH < Cl<sub>2</sub>CHCOOH',
            a: '(a). Each additional <i>α</i>-chlorine adds −<i>I</i> stabilisation to the carboxylate anion.',
          },
          {
            q: '[Hard] Assertion (A): Paper chromatography is a type of adsorption chromatography. Reason (R): In paper chromatography, water trapped in the paper acts as the stationary phase. (a) Both true, R explains A (b) Both true, R does not explain A (c) A true, R false (d) A false, R true.',
            a: '(d). Paper chromatography is partition chromatography — the liquid water film on cellulose is the stationary phase, which makes A false and R true.',
          },
        ],
      },
    ],
  },
];
