import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional topic F, word for word from the Class 12 Chemistry Master
 * Reference: the book's "Addendum P - What JEE & NEET Actually Ask" (pp. 526–529; it
 * opens partway down p. 526, after the Summary Checklist), kept as the last Additional
 * topic. Page 530 starts the next chapter.
 *
 * Parts are the book's own headings without their numbers ("1. The Distribution" →
 * "The Distribution"); the text before the first heading is the Introduction. The
 * distribution table (p. 526) is a table block, with one line before it saying the
 * shares are the book's estimate. Each archetype is one paragraph with its bold run-in
 * lead. The traps are one mistakes block. The graded practice set prints its answers in
 * one block after the questions; each is set here as that question's answer. As in the
 * other Additional topics, the book's spaced hyphens (" - ") are the house dash (" — "),
 * links, base pairs and groups take en dashes (C1–C4, A–T, –COOH), and "alpha" and
 * "beta" stay spelled out as printed. These pages print no drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ─────────────── Additional topic F (the book's Addendum P) · pp. 526–529 ───────────────
  {
    n: 'F',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Biomolecules is largely recall-based: almost everything is single-step identification.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The analysis below is drawn from previous-year JEE Main and NEET questions on this chapter (49 questions classified by sub-topic).',
      },

      { t: 'part', title: 'The Distribution' },
      { t: 'p', html: 'The shares below are the book’s estimate from past papers, not official figures.' },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Share of questions', 'Typical form'],
        rows: [
          [
            'Carbohydrates (linkages, reducing character, hydrolysis products, structure evidence)',
            '~43% (21 of 49)',
            'single-correct, statement pairs, match-the-column',
          ],
          [
            'Proteins & amino acids (classification, essential set, codes, pI, peptide counting, structure levels)',
            '~33% (16 of 49)',
            'single-correct, numerical, match-the-column',
          ],
          [
            'Nucleic acids (base pairing, complementary strand, phosphodiester linkage, DNA vs RNA)',
            '~12% (6 of 49)',
            'single-correct',
          ],
          [
            'Vitamins & enzymes (deficiency-vitamin matching, enzyme-source)',
            '~10% (5 of 49)',
            'match-the-column, single-correct',
          ],
          ['Hormones', '~2% (1 of 49)', '“incorrect statement”'],
        ],
      },
      {
        t: 'p',
        html: 'Biomolecules is largely recall-based: almost everything is single-step identification. The skill that separates scores is precision on the small distinctions — alpha vs beta, anomer vs epimer, nucleoside vs nucleotide, C1–C4 vs C1–C2.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — “Name the linkage / hydrolysis product.”</b> Sucrose gives glucose + fructose; maltose gives two glucoses; cellulose is beta-D-glucose, C1–C4; a recent JEE Main question identifies cellulose from “beta-glycosidic linkages only + bromine water gives gluconic acid from the hydrolysis product.” Approach: memorise the linkage table cold, then verify with a carbon count (a C<sub>12</sub> disaccharide yields exactly two C<sub>6</sub> units).',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — Statement-pair evaluation.</b> Two statements, choose true/false combinations. Typical versions: maltose linkage facts, bromine water vs anomer definition, glucose/fructose isomerism, glycogen as animal starch. Approach: judge each statement independently against NCERT wording before combining; the trap is usually a single wrong word (“C2” for anomer, “uracil” in DNA, “non-reducing” for maltose).',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — Amino-acid classification and codes.</b> Match acidic/basic/neutral, find the all-essential set, one-letter codes, sulphur content, carbon count of cysteine. Approach: run the roster of Addendum B — count extra –COOH or basic groups in the side chain for acid/base (lysine’s extra –NH<sub>2</sub>, arginine’s guanidinium, histidine’s imidazole; the amide –CONH<sub>2</sub> of asparagine and glutamine is neutral), and keep the essential-ten list and code mnemonics ready.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — Isoelectric-point electrophoresis.</b> Given pI values and a working pH, predict migration (for example, pI 3.2, 5.7 and 9.7 at pH 7.7 → first two to anode, last to cathode). Approach: one comparison per amino acid — pH above pI means anion means anode.',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — Peptide arithmetic and sequence counting.</b> Peptide bonds = <i>n</i> − 1 (four amino acids, three bonds; a decapeptide, 9 waters); distinct sequences = <i>n</i>! for <i>n</i> different residues (a pentapeptide of five different amino acids, 5! = 120). Approach: count residues first; never count bonds directly from a structure.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — Base pairing, written or counted.</b> Complementary strand of ATGCTTCA → TACGAAGT; base-composition identification of “incorrect statement” (the statement “DNA contains uracil” is false). Approach: apply A–T, G–C mechanically and mark 3′/5′ ends.',
      },
      {
        t: 'p',
        html: '<b>Archetype 7 — Vitamin-deficiency matching.</b> riboflavin with cheilosis, thiamine with beri-beri, pyridoxine with convulsions, ascorbic acid with scurvy; vitamin K and clotting; source-vitamin-disease triples. Approach: learn the NCERT table as ordered pairs; the distractors are the other pairs from the same table.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Anomer vs epimer.</b> “Differ only at C2” describes epimers, not anomers; anomers differ only at the anomeric carbon (C1 for glucose). The single most punished confusion in this chapter.',
          '<b>Alpha/beta swaps.</b> Cellulose is beta, starch is alpha; both chains are C1–C4 (starch’s amylopectin adds C1–C6 branches). One Greek letter is the whole answer.',
          '<b>“Glucose and fructose are structural isomers” is TRUE</b> — same molecular formula, different functional groups (functional isomerism). Students reject it expecting “isomers” to require identical functional groups.',
          '<b>Uracil planted in DNA lists</b> and thymine offered as “present in RNA but not DNA” — read the direction of “present in X but not Y” twice.',
          '<b><i>n</i> vs <i>n</i> − 1.</b> A decapeptide needs 9 water molecules for complete hydrolysis, not 10; a tetrapeptide has 3 peptide bonds.',
          '<b>Hormone classification.</b> Epinephrine is an amino-acid-derived (amine) hormone, not a steroid; thyroxine is the iodinated tyrosine derivative; steroids come from the adrenal cortex and gonads (a typical incorrect statement is “epinephrine is a steroid”).',
          '<b>Enzyme-source pairs.</b> Zymase comes from yeast, not malt (malt gives diastase) — a classic “not correctly matched” option.',
        ],
      },

      { t: 'part', title: 'Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-level] One molecule of lactose on complete hydrolysis gives which monosaccharides, and is lactose reducing?',
            a: 'beta-D-galactose and beta-D-glucose (C1 of galactose linked to C4 of glucose); yes, reducing — the glucose anomeric carbon is free.',
          },
          {
            q: '[NEET-level] Which vitamin deficiency causes cheilosis, and to which solubility class does that vitamin belong?',
            a: 'Riboflavin (vitamin B<sub>2</sub>); water-soluble.',
          },
          {
            q: '[JEE Main-level] A polysaccharide X on boiling with dilute H<sub>2</sub>SO<sub>4</sub> at 393 K yields Y; Y with bromine water gives gluconic acid. X contains only beta-glycosidic linkages. Identify X and Y.',
            a: 'X = cellulose (only beta-1,4 links), Y = glucose (oxidised by Br<sub>2</sub> water to gluconic acid, confirming the aldose).',
          },
          {
            q: '[JEE Main-level] How many peptide bonds and how many water molecules are involved when a nonapeptide is assembled from free amino acids?',
            a: '8 peptide bonds; 8 water molecules eliminated on assembly.',
          },
          {
            q: '[JEE Main-level] Write the complementary strand of 5′-ATGCCGTA-3′, marking polarity.',
            a: '3′-TACGGCAT-5′.',
          },
          {
            q: '[JEE Main-level] An amino acid mixture has components of pI 3.0 and 8.0. Electrophoresis is run at pH 6.0. State the migration of each component.',
            a: 'pI 3.0 component: pH 6.0 > pI, anionic, migrates to the anode. pI 8.0 component: pH 6.0 < pI, cationic, migrates to the cathode.',
          },
          {
            q: '[JEE Main-level] Statement I: sucrose is dextrorotatory but its hydrolysis mixture is laevorotatory. Statement II: the specific rotations of glucose and fructose are +52.5° and −92.4°. Evaluate both statements.',
            a: 'Both true. Sucrose: +66.5°; the hydrolysis mixture averages to about −20° because fructose’s −92.4° outweighs glucose’s +52.5° — the sign inversion that names invert sugar.',
          },
          {
            q: '[JEE Advanced-level] In a 50-base-pair DNA duplex, 20% of all bases are adenine. How many inter-strand hydrogen bonds hold the duplex together?',
            a: '100 bases total; A = 20 and T = 20 (Chargaff), leaving G = C = 30. So there are 20 A–T pairs and 30 G–C pairs: hydrogen bonds = 2 × 20 + 3 × 30 = 40 + 90 = 130.',
          },
          {
            q: '[JEE Advanced-level] Glucose and mannose differ in configuration at C2 only. Name the relationship, and state how it differs from the relationship between the alpha and beta anomers of glucose.',
            a: 'Glucose and mannose are epimers (diastereomers differing at one non-anomeric centre, C2). Anomers differ only at the anomeric carbon C1, the centre created by ring closure — alpha- and beta-D-glucose are anomers, not epimers.',
          },
          {
            q: '[JEE Advanced-level] A solution of pure beta-D-glucose is prepared and its rotation measured immediately, then again after several hours. Both readings are positive but unequal. Explain, and state the final value.',
            a: 'The freshly dissolved beta anomer reads +19°; in water it equilibrates through the open-chain form with the alpha anomer (mutarotation), and the rotation climbs to the equilibrium value of about +52.5° (36% alpha, 64% beta).',
          },
        ],
      },

      { t: 'part', title: 'Where Students Lose Marks' },
      {
        t: 'p',
        html: 'Students often lose marks on three skills that are computational drills rather than recall: the mutarotation numbers and equilibrium percentages (Addendum A), the full amino-acid roster with one-letter codes and essential-set questions (Addendum B), and isoelectric-point migration problems (Addendum B). Practise them as drills.',
      },
    ],
  },
];
