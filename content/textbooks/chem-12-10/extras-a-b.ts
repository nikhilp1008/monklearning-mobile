import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional Topics A and B, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 10: Biomolecules — Additional Topics"
 * (p. 516, set at the head of Additional topic A's Introduction), then A Mutarotation,
 * Quantified (pp. 516–519; its answers, under an "Answers:" heading stranded at the foot
 * of p. 518, run onto p. 519) and B The Amino-Acid Roster and the Isoelectric Point
 * (pp. 519–521; its last answer ends on p. 521, where Addendum C begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. The book's unnumbered Figure 1 (p. 517, the
 * mutarotation of D-glucose) is c12-10-A-d1, where the book prints it, after the
 * equilibrium composition (the text never names it). B's amino-acid table (pp. 519–520,
 * its head reprinted over the page turn) is one table block. The book spells alpha and
 * beta out in these addenda and they stay spelled out. Its spaced hyphens (" - ") are
 * the house dash (" — "), group dashes are en-dash bonds (–CHO, C1–OH, –CH<sub>3</sub>),
 * and ranges take an en dash (5–6).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 516–519 ─────────────────────────
  {
    n: 'A',
    title: 'Mutarotation, Quantified',
    extra: true,
    kalam: 'The equilibrium rotation is the population-weighted average of the two anomer rotations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers carbohydrates (classification, the glucose evidence chain, anomers, the named disaccharides and polysaccharides), proteins and amino acids (zwitter ion, peptide bond, the four structural levels, denaturation), enzymes, vitamins and nucleic acids, and hormones at NCERT depth. What it leaves unbuilt are the skills the exam papers actually exercise. Addendum A quantifies mutarotation — the chapter states the equilibrium and its figure labels the rough shares, but it never gives the anomers’ rotations or works out the alpha∶beta percentages that JEE Main asks for. Addendum B organises all twenty amino acids of the NCERT amino-acid table into the classifications the exams test (essential ten, acidic/basic/neutral, one-letter codes, sulphur and aromatic members), and turns the chapter’s isoelectric-point rule into an electrophoresis method, with the pI arithmetic and worked direction-of-migration problems. Addendum C deepens reducing-sugar logic into a test-driven skill: Tollens’, Fehling’s/Benedict’s and bromine water, plus the cellulose dimer (cellobiose) that the exams assume you know. Addendum D turns the chapter’s base pairing, its one Chargaff-style check and its two-versus-three hydrogen bonds into arithmetic: Chargaff bookkeeping, complementary-strand writing with directionality, and hydrogen-bond counting. Additional topic F closes with what previous-year papers actually ask.',
      },
      {
        t: 'p',
        html: 'The chapter explains why glucose needs a cyclic structure (no Schiff’s test, no bisulphite addition, a penta-acetate that ignores hydroxylamine, two crystalline forms) and states that in solution the alpha and beta rings sit in equilibrium with a trace of open chain. What it never does is work out the numbers — and the numbers are precisely what JEE Main and NEET ask: the rotation of each anomer, the equilibrium rotation, and the percentage composition of the equilibrium mixture. (Topic 01 quotes glucose’s +52.5° only in the invert-sugar arithmetic, and its equilibrium figure labels the rough 36∶64 shares without deriving them.)',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The data.</b> The two crystalline anomers of D-glucose (NCERT’s pair) carry distinct specific rotations:<br>• alpha-D-(+)-glucose: m.p. 419 K, obtained by crystallising a concentrated solution at 303 K; [α]<sub>D</sub> = +112°.<br>• beta-D-(+)-glucose: m.p. 423 K, obtained by crystallising a hot saturated solution at 371 K; [α]<sub>D</sub> = +19°.',
      },
      {
        t: 'p',
        html: 'Dissolve either pure anomer in water and the observed rotation drifts slowly until it settles at the same value from either side: about +52.5° (NCERT’s value, used throughout this chapter; data tables quote +52.7°, which gives the same 36∶64 split). This spontaneous change of optical rotation on standing, as one anomer converts into the other through the open-chain form, is <b>mutarotation</b>.',
      },
      {
        t: 'p',
        html: '<b>The equilibrium composition.</b> The equilibrium rotation is the population-weighted average of the two anomer rotations. If the fraction of the alpha form is <i>x</i>:',
      },
      {
        t: 'formula',
        kicker: 'The equilibrium composition',
        main: '112<i>x</i> + 19(1 − <i>x</i>) = 52.5 ⇒ 93<i>x</i> = 33.5 ⇒ <i>x</i> ≈ 0.36',
        legend: [
          '<i>x</i> = fraction of the alpha form',
          '112, 19 = [α]<sub>D</sub> of the alpha and beta anomers (°)',
          '52.5 = [α]<sub>D</sub> of the equilibrium mixture (°)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'So the equilibrium mixture is approximately <b>36% alpha and 64% beta</b> (with less than 0.5% open chain). Memorise the trio +112°/+19°/+52.5° and the 36∶64 split together — each verifies the other.',
      },
      { t: 'fig', id: 'c12-10-A-d1' },
      {
        t: 'p',
        html: '<b>Why beta wins.</b> In the chair form of beta-D-glucopyranose every bulky substituent — including the anomeric C1–OH — occupies an equatorial position. The alpha anomer has its C1–OH axial. The all-equatorial arrangement makes beta the more stable anomer, hence its larger share at equilibrium. The anomeric effect, which favours an axial anomeric OH, keeps the alpha share large, but for glucose the all-equatorial beta chair still dominates; in some other sugars, such as mannose, the alpha form wins.',
      },
      {
        t: 'p',
        html: '<b>Fructose, in parallel.</b> Fructose cyclises through its C5–OH onto the C2 keto group, giving a five-membered furanose ring with alpha and beta anomers at C2. (This is the form found in sucrose; free fructose in solution is mostly the six-membered pyranose.) It mutarotates for the same reason: ring, open chain, and the other ring interconvert in solution.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'A freshly prepared solution of alpha-D-glucose reads +112°; after several hours the same solution reads +52.5°. Explain, and calculate the percentage of the beta anomer at equilibrium.',
        steps: [
          'In water the cyclic hemiacetal opens to a trace of the open-chain aldehyde, which recloses to either anomer; the alpha form therefore drains into the beta form until the equilibrium ratio is reached, and the rotation drifts from +112° to the equilibrium value +52.5° — mutarotation. For the composition, let the beta fraction be <i>y</i>: 19<i>y</i> + 112(1 − <i>y</i>) = 52.5, so 93<i>y</i> = 59.5 and <i>y</i> ≈ 0.64.',
        ],
        ans: 'Mutarotation through the open-chain intermediate; equilibrium mixture is about 64% beta, 36% alpha.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Two statements are given. Statement I: glucose shows mutarotation. Statement II: the two anomers of glucose differ in configuration at C5. Evaluate both.',
        steps: [
          'Statement I is true — the rotation drift is exactly mutarotation. Statement II is false: the anomers differ at the <b>anomeric carbon C1</b> (the former aldehyde carbon), not at C5. C5 is the carbon whose –OH attacks to close the ring; its configuration fixes the D-series and is identical in both anomers.',
        ],
        ans: 'Statement I true, Statement II false.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Why does glucose fail to give Schiff’s test, yet still reduce Tollens’ reagent?',
        steps: [
          'Both observations come from the same equilibrium. The free aldehyde concentration in solution is tiny (less than 0.5% open chain), too small for Schiff’s reagent, which only adds reversibly to a free aldehyde (it is not an oxidant) and so cannot drain the ring equilibrium; Schiff’s test fails. Tollens’ reagent oxidises the aldehyde irreversibly, working on the equilibrium itself: as the trace open-chain aldehyde is consumed (oxidised), more ring opens to replace it (Le Chatelier), until the whole sample has reacted. The same logic explains the oxime formation with NH<sub>2</sub>OH and its failure in the penta-acetate, where the blocked anomeric oxygen cannot reopen.',
        ],
        ans: 'Schiff’s test needs a substantial free –CHO, which the ring equilibrium does not supply; Tollens’ oxidation continuously pulls the equilibrium open, so the reducing reaction proceeds to completion.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The specific rotations of the alpha and beta anomers of D-glucose are +112° and +19°. What rotation will a long-standing aqueous glucose solution show, and why? (The equilibrium mixture is 36% alpha and 64% beta.)',
            a: 'About +52.5° (0.36 × 112 + 0.64 × 19 ≈ 52.5); mutarotation — the alpha and beta rings interconvert through the open-chain form until the equilibrium ratio (36∶64) is established.',
          },
          {
            q: '[JEE Main] Calculate the percentage of alpha-D-glucose in the equilibrium mixture, given the anomer rotations +112°, +19° and the equilibrium value +52.5°.',
            a: '112<i>x</i> + 19(1 − <i>x</i>) = 52.5 ⇒ <i>x</i> = 33.5/93 ≈ 0.36, i.e. about 36% alpha.',
          },
          {
            q: '[CBSE] Glucose penta-acetate does not react with hydroxylamine although glucose itself does. Explain in one or two sentences.',
            a: 'In the penta-acetate the anomeric (C1) oxygen is acetylated, so the ring cannot open to expose a free –CHO; with no open-chain form available, no oxime can form.',
          },
          {
            q: '[JEE Advanced] Why is the beta anomer of D-glucose more abundant than the alpha anomer at equilibrium, even though the anomeric effect usually favours an axial anomeric OH?',
            a: 'In the beta chair, all bulky groups including the C1–OH are equatorial; the steric gain of an all-equatorial ring outweighs the anomeric effect, which in some other sugars, such as mannose, favours the axial-alpha form.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 519–521 ─────────────────────────
  {
    n: 'B',
    title: 'The Amino-Acid Roster and the Isoelectric Point',
    extra: true,
    kalam: 'This addendum organises the NCERT amino-acid table for exam use and supplies the pI method.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the classification axes (acidic/basic/neutral, essential/non-essential) with two or three examples each. The exams test the whole roster: one-letter codes, the complete essential set, sulphur-containing members, and isoelectric-point electrophoresis. This addendum organises the NCERT amino-acid table for exam use and supplies the pI method.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The twenty, organised by what exams ask.</b> (Structures are in the NCERT amino-acid table; what follows is the classification layer the exams exploit.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Amino acid', 'Code (3/1)', 'Class', 'Note'],
        rows: [
          ['Glycine', 'Gly / G', 'neutral', 'only achiral one (R = H); sweet taste'],
          ['Alanine', 'Ala / A', 'neutral', 'R = –CH<sub>3</sub>'],
          ['Valine*', 'Val / V', 'neutral, essential', 'branched R'],
          ['Leucine*', 'Leu / L', 'neutral, essential', 'branched R'],
          ['Isoleucine*', 'Ile / I', 'neutral, essential', 'branched R'],
          ['Arginine*', 'Arg / R', 'basic, essential', 'guanidinium in R'],
          ['Lysine*', 'Lys / K', 'basic, essential', 'extra –NH<sub>2</sub> in R'],
          ['Glutamic acid', 'Glu / E', 'acidic', 'extra –COOH in R'],
          ['Aspartic acid', 'Asp / D', 'acidic', 'extra –COOH in R'],
          ['Glutamine', 'Gln / Q', 'neutral', 'amide of Glu'],
          ['Asparagine', 'Asn / N', 'neutral', 'amide of Asp'],
          ['Threonine*', 'Thr / T', 'neutral, essential', '–OH in R'],
          ['Serine', 'Ser / S', 'neutral', '–OH in R'],
          ['Cysteine', 'Cys / C', 'neutral', 'sulphur: –SH in R'],
          ['Methionine*', 'Met / M', 'neutral, essential', 'sulphur: –S–CH<sub>3</sub> in R'],
          ['Phenylalanine*', 'Phe / F', 'neutral, essential', 'aromatic R'],
          ['Tyrosine', 'Tyr / Y', 'neutral', 'aromatic R (phenolic)'],
          ['Tryptophan*', 'Trp / W', 'neutral, essential', 'aromatic R (indole)'],
          ['Histidine*', 'His / H', 'basic, essential', 'imidazole in R'],
          ['Proline', 'Pro / P', 'neutral', 'cyclic; the alpha-amino group is secondary (an imino acid)'],
        ],
      },
      {
        t: 'p',
        html: '*Marks the ten essential amino acids: Val, Leu, Ile, Arg, Lys, Thr, Met, Phe, Trp, His. The body cannot synthesise them; they must come from the diet. (This is NCERT’s list, which the exams use; for adults arginine is only conditionally essential, since the body makes some.)',
      },
      {
        t: 'p',
        html: '<b>Fast lookups the exams use:</b><br>• Sulphur-containing: cysteine, methionine (only these two).<br>• Aromatic: phenylalanine, tyrosine, tryptophan.<br>• Acidic: aspartic acid, glutamic acid. Basic: lysine, arginine, histidine.<br>• Achiral: glycine. Secondary amino (imino) acid: proline.<br>• One-letter code traps: tryptophan = W (not T — T is threonine), arginine = R, lysine = K, phenylalanine = F (“Fenylalanine”), aspartic acid = D, glutamic acid = E. Tyrosine = Y, glutamine = Q, asparagine = N.',
      },
      {
        t: 'p',
        html: '<b>Isoelectric point (pI) — the migration rule.</b> At pH = pI the amino acid is a neutral zwitter ion and does not move in an electric field. The rule for any other pH:<br>• pH < pI: the medium is more acidic than the isoelectric point, so the amino acid is protonated to a <b>cation</b> and migrates to the <b>cathode</b> (negative electrode).<br>• pH > pI: the medium is more basic, the zwitter ion loses a proton to become an <b>anion</b> and migrates to the <b>anode</b> (positive electrode).',
      },
      {
        t: 'p',
        html: 'Memory hook: “pH below pI, positive, to the cathode.” Rough pI values worth knowing: acidic amino acids (Asp, Glu) have pI near 3; neutral ones near 5–6; basic ones (His, Lys, Arg) near 7.5–11. For an amino acid with no ionisable side chain, pI is the average of its two p<i>K</i><sub>a</sub> values (for an acidic or basic one, average the two p<i>K</i><sub>a</sub> values on either side of the neutral form):',
      },
      {
        t: 'formula',
        kicker: 'Isoelectric point (pI)',
        main: 'pI = (p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>)/2<br>glycine: (2.34 + 9.60)/2 ≈ 6.0',
        legend: [
          'pI = isoelectric point of an amino acid with no ionisable side chain',
          'p<i>K</i><sub>a1</sub>, p<i>K</i><sub>a2</sub> = p<i>K</i><sub>a</sub> of its –COOH and of its –NH<sub>3</sub><sup>+</sup>',
        ],
        note: '(The numerical formula is a JEE extension of the NCERT definition.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'A mixture of three amino acids E (pI 3.2), Y (pI 5.7) and K (pI 9.7) is subjected to electrophoresis at pH 7.7. Which way does each migrate?',
        steps: [
          'Compare the working pH with each pI. For E: 7.7 > 3.2, so E is anionic and moves to the anode. For Y: 7.7 > 5.7, anionic, to the anode. For K: 7.7 < 9.7, cationic, to the cathode.',
        ],
        ans: 'E and Y migrate towards the anode; K migrates towards the cathode.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'Find the set in which all members are essential amino acids: (a) P, G, A (b) I, G, A (c) Y, F, M (d) V, K, W.',
        steps: [
          'Decode the one-letter codes and check against the essential ten. (a) Pro, Gly, Ala — none essential. (b) Ile essential, but Gly and Ala are not. (c) Tyr not essential (body makes it from phenylalanine); Phe and Met essential. (d) Val, Lys, Trp — all three on the essential list.',
        ],
        ans: '(d) V, K, W.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Match each amino acid to its one-letter code: tryptophan, lysine, arginine, phenylalanine.',
        steps: [
          'Sound-alikes and first letters fail systematically; use the mnemonic logic: tryptophan = W (say “twyptophan”), lysine = K (L is taken by leucine, so K — the letter before L), arginine = R, phenylalanine = F.',
        ],
        ans: 'Trp-W; Lys-K; Arg-R; Phe-F.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which amino acid contains sulphur: alanine, glycine, methionine, or valine?',
            a: 'Methionine (R = –CH<sub>2</sub>CH<sub>2</sub>SCH<sub>3</sub>); cysteine is the other sulphur amino acid.',
          },
          {
            q: '[JEE Main] An amino acid has pI 6.0. Describe its charge and migration at pH 2 and at pH 10.',
            a: 'pH 2 < pI: protonated cation, migrates to the cathode. pH 10 > pI: deprotonated anion, migrates to the anode.',
          },
          {
            q: '[NEET] Classify as acidic, basic or neutral: glutamic acid, histidine, serine, aspartic acid.',
            a: 'Acidic: glutamic acid, aspartic acid (extra –COOH). Basic: histidine (imidazole side chain). Neutral: serine.',
          },
          {
            q: '[JEE Main] Given glycine’s p<i>K</i><sub>a1</sub> = 2.34 and p<i>K</i><sub>a2</sub> = 9.60, estimate its isoelectric point.',
            a: 'pI = (2.34 + 9.60)/2 = 5.97 ≈ 6.0.',
          },
        ],
      },
    ],
  },
];
