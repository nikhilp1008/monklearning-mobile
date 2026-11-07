import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional Topics C, D and E, word for word from the Class 12 Chemistry
 * Master Reference: C Reducing Sugars: The Test-Driven Version (pp. 521–524; it opens on
 * p. 521 after Addendum B's last answer, and its last answer ends at the top of p. 524)
 * and D Nucleic-Acid Arithmetic (pp. 524–525; its answers end at the foot of p. 525),
 * then the book's "Summary Checklist" (p. 526, before "Addendum P") as its own short
 * Additional topic E, as in Amines.
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. These pages print no drawing and no table. C's
 * numbered list of reagents is a proc under the book's bold heading; D's Chargaff
 * relations, displayed in the book, are a formula card, and its displayed strand pair
 * stays on its own line in the paragraph. The book's spaced hyphens (" - ") are the house
 * dash (" — "), group and bond dashes are en dashes (–OH, A–T, G–C, glucose(C1)–glucose(C4)),
 * ratios take ∶, rotation signs a real minus, and the base letters A, T, G, C, U are upright.
 * Sequences keep their hyphens (5′-ATGCTTCA-3′), with real primes.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 521–524 ─────────────────────────
  {
    n: 'C',
    title: 'Reducing Sugars: The Test-Driven Version',
    extra: true,
    kalam: 'A sugar reduces Tollens’/Fehling’s if any anomeric carbon is free.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines reducing sugars and tabulates which named sugar reduces. The exams operationalise this: they name a test (Tollens’, Fehling’s, bromine water) and a sugar, and ask for the observation. This addendum aligns the reagents with the observations and adds the two facts the exams assume: why ketoses reduce, and what cellobiose is.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three reagents and what each reports',
        steps: [
          '<b>Tollens’ reagent</b> (ammoniacal silver nitrate): reduced by a free carbonyl/hemiacetal to metallic silver — a silver mirror on the test-tube wall. This is why glucose is the sugar used in the silvering of mirrors. All monosaccharides respond; of the common disaccharides, maltose and lactose respond, sucrose does not.',
          '<b>Fehling’s / Benedict’s solution</b> (alkaline Cu(II) tartrate/citrate): reduced to red-brown Cu<sub>2</sub>O precipitate. Same scope as Tollens’.',
          '<b>Bromine water</b> (mild oxidant): oxidises only the <b>aldehyde</b> group to a carboxylic acid — the reagent is decolourised by aldoses, not by ketoses. This is the standard chemical distinction between glucose (decolourises Br<sub>2</sub> water → gluconic acid) and fructose (no reaction).',
        ],
      },
      {
        t: 'p',
        html: '<b>The apparent paradox, resolved.</b> Fructose is a ketose, yet NCERT states plainly: all monosaccharides, whether aldose or ketose, are reducing sugars. The resolution is the medium: Tollens’ and Fehling’s are alkaline, and under basic conditions a ketose isomerises through an enediol (itself easily oxidised) into the corresponding aldose, which is then oxidised. Bromine water is neutral/acidic, so no isomerisation occurs and the ketose survives — hence bromine water distinguishes the two while Tollens’ does not.',
      },
      {
        t: 'p',
        html: '<b>Cellobiose (an assumed fact in exams).</b> Partial hydrolysis of cellulose gives the disaccharide cellobiose: two D-glucose units joined by a β-1,4 glycosidic linkage — the dimer of the cellulose chain. One anomeric carbon stays free, so cellobiose is <b>reducing</b>. It differs from maltose only in the configuration of the linkage (β vs α), which is why humans digest maltose but not cellobiose. When a question lists “cellobiose” among disaccharides, treat it as the beta twin of maltose.',
      },
      {
        t: 'p',
        html: '<b>The decision rule (chapter, restated for tests).</b> A sugar reduces Tollens’/Fehling’s if any anomeric carbon is free. Chain the three questions: which monosaccharides does hydrolysis release → which carbons are tied up in the glycosidic bond → is any anomeric carbon left free?',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Which of the following is not a reducing disaccharide: cellobiose, lactose, maltose, sucrose?',
        steps: [
          'Check the glycosidic linkage of each. Cellobiose: glucose–glucose β-1,4, free anomeric carbon on the second unit — reducing. Lactose: galactose(C1)–glucose(C4), the glucose anomeric carbon free — reducing. Maltose: glucose(C1)–glucose(C4), second anomeric carbon free — reducing. Sucrose: glucose C1 joined to fructose C2 — both anomeric carbons locked — non-reducing.',
        ],
        ans: 'Sucrose.',
      },
      {
        t: 'ex',
        tag: 'NEET, assertion-reason',
        q: 'Assertion: maltose and lactose are both reducing sugars. Reason: carbohydrates having a free –OH at the anomeric carbon can reduce Tollens’ reagent.',
        steps: [
          'The assertion is true: in maltose the second glucose unit and in lactose the glucose unit retain a free anomeric carbon (hemiacetal), which opens to an aldehyde in solution. The reason is true and is precisely the mechanism: the free anomeric –OH marks the hemiacetal that equilibrates with the open-chain carbonyl, the species that reduces Tollens’ reagent. The reason explains the assertion.',
        ],
        ans: 'Both true, and the reason is the correct explanation.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Statement I: bromine water can distinguish an aldose from a ketose. Statement II: a pair of diastereomeric aldoses differing only at C2 are anomers. Evaluate both.',
        steps: [
          'Statement I is true: bromine water oxidises the aldehyde of an aldose (decolourised) but leaves a ketose untouched (glucose vs fructose). Statement II is false on vocabulary: anomers differ only at the <b>anomeric carbon</b> (C1 in aldoses). Diastereomers differing at a single non-anomeric centre such as C2 are <b>epimers</b> (glucose and mannose are C2-epimers). The distractor counts on your knowing “differ at one carbon” but misplacing which carbon defines anomers.',
        ],
        ans: 'Statement I true, Statement II false.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which carbohydrate is used in the silvering of mirrors, and why that one?',
            a: 'Glucose — its free aldehyde/hemiacetal reduces ammoniacal silver nitrate to a silver mirror; sucrose (non-reducing) and the polysaccharides (no free ends to speak of) cannot.',
          },
          {
            q: '[JEE Main] Which disaccharide gives an equimolar mixture of glucose and fructose on hydrolysis, and why is the mixture laevorotatory?',
            a: 'Sucrose. Its hydrolysis (inversion) gives an equimolar mixture of D-glucose (+52.5°) and D-fructose (−92.4°); the strongly laevorotatory fructose outweighs glucose, so the mixture rotates to about −20° and is called invert sugar. (Sucrose itself is non-reducing and does not decolourise bromine water.)',
          },
          {
            q: '[CBSE] Why does fructose reduce Fehling’s solution even though it contains a keto group?',
            a: 'In the alkaline Fehling’s medium, fructose isomerises through an enediol to glucose/mannose (aldoses), which are then oxidised — so the keto group reduces the reagent indirectly.',
          },
          {
            q: '[JEE Main] Distinguish maltose from cellobiose structurally, and state which one human digestive enzymes hydrolyse.',
            a: 'Both are glucose–glucose 1 → 4 dimers; maltose has the α linkage, cellobiose the β. Humans hydrolyse the alpha linkage (maltose) but not the beta (cellobiose/cellulose).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 524–525 ─────────────────────────
  {
    n: 'D',
    title: 'Nucleic-Acid Arithmetic',
    extra: true,
    kalam: 'DNA strands run antiparallel: if the given strand is written 5′ → 3′, its complement runs 3′ → 5′ underneath it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter establishes the pairing rules (A–T, G–C; complementary strands), one base-counting example, and the GC-content-melting-temperature logic. JEE Main and NEET convert these into three recurring computations: percentage composition (Chargaff bookkeeping), writing the complementary strand, and hydrogen-bond counts. This addendum drills all three.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Chargaff bookkeeping.</b> In any double-stranded DNA, complementarity forces three relations:',
      },
      {
        t: 'formula',
        kicker: 'Chargaff bookkeeping',
        main: '%A = %T<br>%G = %C<br>%A + %T + %G + %C = 100',
        legend: [
          '%A = percentage of adenine',
          '%T = percentage of thymine',
          '%G = percentage of guanine',
          '%C = percentage of cytosine',
        ],
        note: 'Double-stranded DNA only; it follows that %A + %G = 50 (purines = pyrimidines).',
      },
      {
        t: 'p',
        html: 'So %A + %G = 50% (purines = pyrimidines). Given any one percentage, all four follow. Note this applies to <b>double-stranded</b> DNA only; a single strand or single-stranded RNA has no such constraint — a favourite assertion-reason hinge.',
      },
      {
        t: 'p',
        html: '<b>Complementary strand with directionality.</b> DNA strands run antiparallel: if the given strand is written 5′ → 3′, its complement runs 3′ → 5′ underneath it. Write the partner base under each (A with T, G with C), and state the ends. Example:<br>5′-ATGCTTCA-3′ ⇒ 3′-TACGAAGT-5′<br>If a question asks for the complement “written 5′ → 3′”, reverse the antiparallel string: 3′-TACGAAGT-5′ reversed is 5′-TGAAGCAT-3′. The safe habit is to complement first (antiparallel), then reverse only if the 5′ → 3′ convention is demanded.',
      },
      {
        t: 'p',
        html: '<b>Hydrogen-bond counting.</b> An A–T pair contributes 2 hydrogen bonds; a G–C pair contributes 3. A duplex with <i>x</i> A–T pairs and <i>y</i> G–C pairs carries 2<i>x</i> + 3<i>y</i> inter-strand hydrogen bonds. Higher GC content → more hydrogen bonds → higher melting (strand-separation) temperature — the chapter’s GC-content and melting-temperature logic made quantitative.',
      },
      {
        t: 'p',
        html: '<b>Sugar identification.</b> Ribose carries –OH at the 2′ carbon; 2-deoxyribose carries –H there (one oxygen fewer). In a structure-identification item, look at the 2′ position: –OH present means the sugar belongs to RNA, –H means DNA. Bases complete the identification: T for DNA, U for RNA.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A double-stranded DNA sample contains 23% adenine. Find the percentages of the other three bases and the purine∶pyrimidine ratio.',
        steps: [
          '%T = %A = 23. Remaining: 100 − 46 = 54, split equally between G and C: %G = %C = 27. Purines = A + G = 23 + 27 = 50%; pyrimidines = T + C = 50%; ratio 1∶1 — the built-in check every duplex must pass.',
        ],
        ans: 'T 23%, G 27%, C 27%; purine∶pyrimidine = 1∶1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'One strand of a DNA segment reads 5′-ATGCTTCA-3′. Write the complementary strand, marking its ends.',
        steps: [
          'Pair base-by-base, A with T and G with C, writing the partner antiparallel: 3′-TACGAAGT-5′. (If the question instead demands the complement written 5′ → 3′, reverse that string to 5′-TGAAGCAT-3′.) The safe habit: always write the antiparallel pair first, then reverse only if asked.',
        ],
        ans: '3′-TACGAAGT-5′ (antiparallel to the given strand).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'A DNA duplex of 100 base pairs contains 30 A–T pairs. (i) How many inter-strand hydrogen bonds hold the duplex? (ii) A second duplex of the same length has 70 A–T pairs. Which melts at the higher temperature?',
        steps: [
          '(i) With 30 A–T pairs there are 70 G–C pairs. Hydrogen bonds = 2 × 30 + 3 × 70 = 60 + 210 = 270. (ii) The first duplex is GC-rich (70% GC), the second AT-rich (30% GC). GC pairs carry three hydrogen bonds against two, so the first duplex is more strongly held and melts at the higher temperature.',
        ],
        ans: '(i) 270 hydrogen bonds; (ii) the first (GC-rich) duplex.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A DNA duplex has 18% guanine. Give the percentages of C, A and T.',
            a: 'C = 18%; A = T = 32% each (since A + T = 100 − 36 = 64).',
          },
          {
            q: '[JEE Main] Write the complementary strand of 5′-GGCATTAC-3′ with its polarity marked.',
            a: '3′-CCGTAATG-5′.',
          },
          {
            q: '[JEE Main] Two sugars A and B are pentoses; A lacks the 2′-OH that B carries. Which belongs to DNA and which to RNA?',
            a: 'A (no 2′-OH) is 2-deoxyribose — DNA; B (2′-OH present) is ribose — RNA.',
          },
          {
            q: '[JEE Advanced] Statement I: in any DNA, A + G = T + C. Statement II: in any RNA, A + G = U + C. Evaluate both.',
            a: 'Statement I true for double-stranded DNA, which is what the statement means (complementarity); in a single-stranded DNA it need not hold. Statement II false: RNA is normally single-stranded, so no pairing constraint forces A + G = U + C.',
          },
        ],
      },
    ],
  },

  // ───────────────── Additional topic E (the book's Summary Checklist) · p. 526 ─────────────────
  {
    n: 'E',
    title: 'Summary Checklist',
    extra: true,
    blocks: [
      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: '• Mutarotation: alpha +112° and beta +19° equilibrate to ≈ +52.5°; equilibrium mixture ≈ 36% alpha, 64% beta; beta wins because its chair is all-equatorial.<br>• Essential amino acids (ten): Val, Leu, Ile, Lys, Arg, His, Thr, Met, Phe, Trp. Sulphur: Cys, Met. Aromatic: Phe, Tyr, Trp. Achiral: Gly. Imino acid: Pro.<br>• Isoelectric rule: pH < pI → cation → cathode; pH > pI → anion → anode. No ionisable side chain: pI = (p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>)/2.<br>• Tests: Tollens’/Fehling’s — any free anomeric carbon (all monosaccharides; maltose, lactose, cellobiose among disaccharides). Bromine water — aldoses only (distinguishes glucose from fructose). Sucrose is the non-reducing exception among them.<br>• Anomers differ only at the anomeric carbon (C1 in aldoses, C2 in ketoses); diastereomers differing at one other stereocentre are epimers (glucose and mannose differ at C2).<br>• Chargaff: in duplex DNA, A = T and G = C, purines = pyrimidines; single strands (RNA) carry no such rule. A–T = 2 H-bonds, G–C = 3; Higher GC content raises the melting temperature.',
      },
    ],
  },
];
