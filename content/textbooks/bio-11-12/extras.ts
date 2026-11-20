import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 12 (Respiration in Plants), Additional topics A to E and F, word for
 * word from the Class 11 Biology Master Reference. pp. 738 to 764. p. 738 opens the shared
 * introduction to "Respiration in Plants: Additional Topics" (the paragraph before
 * "Addendum A"), which is the first paragraph of A's Introduction; A "ATP Accounting & The
 * Mitochondrial Shuttle Problem" pp. 738 to 741 (its practice answers end at the top of
 * p. 742), B "Carbon Tracking Through the Respiratory Pathway" pp. 742 to 745 (answers end
 * on p. 745), C "RQ Calculations: Substrate Identification & Mixed Fuels" pp. 745 to 748,
 * D "Plant-Specific Respiration: The Alternative Oxidase Pathway" pp. 748 to 751, E
 * "Integrated Numerical Problems" pp. 751 to 754 and F "What NEET Actually Asks" (the book's
 * "Addendum P") pp. 755 to 764. p. 765 is the next chapter.
 *
 * Topic indexes: A = 4, B = 5, C = 6, D = 7, E = 8, F = 9 (Topics 00 to 03 are 0 to 3).
 * The pages hold no drawn figure (no raster images; only tables and rules), so no fig ids.
 * The book's "Representative example" blocks in F become worked examples; its graded
 * practice set is one practice block. Tables the book sets inside a question are written
 * as lines of cells separated by " | " inside that question.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 738–742 ─────────────────────────
  {
    n: 'A',
    title: 'ATP Accounting & The Mitochondrial Shuttle Problem',
    extra: true,
    kalam:
      'Because NADH cannot cross the inner mitochondrial membrane, cells use shuttle systems that introduce an ambiguity in the ATP count.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers the four stages of aerobic respiration, the fermentation branch, the amphibolic nature of the pathway, and the respiratory quotient. Five patterns remain that a strong CBSE/NEET student must still master: the complete ATP balance sheet including the cytoplasmic NADH shuttle complication; precise carbon-tracking through every stage; RQ calculations for mixed substrates and non-standard equations; the alternative oxidase pathway of plants, which the chapter does not address; and integrated numericals that combine ATP accounting, the amphibolic pathway and RQ in one problem. Each additional topic below supplies exactly one of these patterns: method first, then worked examples, then practice with full answers. Some of what follows revises the chapter in exam form; the rest is what the chapter leaves unexamined. (The fourth, the alternative oxidase, is enrichment beyond NCERT; see Additional topic D.)',
      },
      {
        t: 'p',
        html: 'The chapter gives the idealised total of approximately 38 ATP per glucose and the individual carrier yields (NADH → 3 ATP, FADH<sub>2</sub> → 2 ATP). The chapter mentions in passing that a shuttle giving 2 ATP per glycolytic NADH lowers the total to about 36, but it does not name the two shuttles or explain why they differ. This is the one complication that higher-difficulty NEET papers test frequently (the book’s estimate from past papers, not official figures): the electron carriers produced in glycolysis are trapped in the cytoplasm, but the electron transport chain sits inside the mitochondrion. Because NADH cannot cross the inner mitochondrial membrane, cells use shuttle systems that introduce an ambiguity in the ATP count. This additional topic resolves that ambiguity and gives the complete, exam-ready balance sheet.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Step 1: Identify where each carrier is produced.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Location', 'Carriers produced'],
        rows: [
          ['Cytoplasm (glycolysis)', '2 NADH (per glucose), 2 ATP (net)'],
          ['Mitochondrial matrix (link reaction)', '2 NADH (per glucose)'],
          ['Mitochondrial matrix (Krebs cycle × 2 turns)', '6 NADH, 2 FADH<sub>2</sub>, 2 ATP (direct)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 2: Decide the fate of cytoplasmic NADH.</b><br>Two shuttle systems exist. Both transfer the reducing equivalents, but they deliver them to different mitochondrial carriers with different ATP yields. (These two shuttles are the standard animal case. Plant mitochondria also oxidise cytoplasmic NADH directly, with an enzyme on the outer face of the inner membrane that feeds ubiquinone, which likewise gives about 2 ATP per NADH. Exam answers use 38, or 36 with the 2-ATP route.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Shuttle', 'Delivery', 'ATP per cytoplasmic NADH'],
        rows: [
          ['Malate-aspartate', 'Matrix NAD<sup>+</sup> → NADH', '3'],
          ['Glycerol-3-phosphate', 'FADH<sub>2</sub> in the membrane', '2'],
        ],
      },
      {
        t: 'p',
        html: 'The textbook figure of 38 ATP assumes that every cytoplasmic NADH is delivered with full efficiency, at 3 ATP each. Some higher-difficulty NEET questions deliberately set up the alternative to test whether you know it exists.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Compute the tally.</b><br>For the full 3 ATP per cytoplasmic NADH, add every source of ATP, the two direct-ATP sources plus every NADH (3 ATP each) and FADH<sub>2</sub> (2 ATP each):<br><br>2 (glycolytic ATP) + 2 (Krebs direct) + 2 × 3 (glycolytic NADH)<br>+ 2 × 3 (link-reaction NADH) + 6 × 3 (Krebs NADH) + 2 × 2 (Krebs FADH<sub>2</sub>)<br>= 2 + 2 + 6 + 6 + 18 + 4 = 38 ATP',
      },
      { t: 'p', html: 'The same total, tabulated by source:' },
      {
        t: 'table',
        title: null,
        head: ['Source', 'Direct ATP', 'Carrier ATP', 'Subtotal'],
        rows: [
          ['Glycolysis (net)', '2', '–', '2'],
          ['Glycolytic NADH (×2, full 3 ATP each)', '–', '2 × 3 = 6', '6'],
          ['Link reaction NADH (×2)', '–', '2 × 3 = 6', '6'],
          ['Krebs NADH (×6)', '–', '6 × 3 = 18', '18'],
          ['Krebs FADH<sub>2</sub> (×2)', '–', '2 × 2 = 4', '4'],
          ['Krebs direct ATP (×2 turns)', '2', '–', '2'],
          ['<b>Total</b>', '<b>4</b>', '<b>34</b>', '<b>38 ATP</b>'],
        ],
      },
      {
        t: 'p',
        html: 'The 4 direct ATP (2 from glycolysis net + 2 from Krebs) plus 34 from oxidative phosphorylation equals 38 ATP per glucose. This is the idealised figure the NCERT chapter works with.',
      },
      {
        t: 'p',
        html: '<b>Step 4: State the idealisations explicitly.</b><br>The 38 ATP figure is an idealised ceiling. Real cells usually obtain less, for three reasons:<br>1. The glycerol-phosphate shuttle may be in operation (2 ATP per cytoplasmic NADH instead of 3), which on its own lowers the total to 36 ATP.<br>2. Protons leak back across the inner membrane without passing through ATP synthase.<br>3. Some of the proton gradient and ATP is spent on transport, and substrates other than pure glucose are used (the amphibolic reality).<br>Modern measurements give about 2.5 ATP per NADH and 1.5 per FADH<sub>2</sub>, so about 30 to 32 ATP per glucose; exam answers use the idealised 38.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Complete ATP Balance for Aerobic Respiration.</b> One molecule of glucose is completely oxidised under aerobic conditions. Calculate the total ATP produced, given: glycolytic NADH uses the malate-aspartate shuttle (3 ATP each), matrix NADH → 3 ATP, and FADH<sub>2</sub> → 2 ATP.',
        steps: [
          'Write the full inventory:<br>• Glycolysis (cytoplasm): net 2 ATP (direct); 2 NADH<br>• Link reaction (matrix): 2 NADH<br>• Krebs cycle × 2 turns: 2 ATP (direct); 6 NADH; 2 FADH<sub>2</sub>',
          'Carrier ATP conversion:<br>(2 + 2 + 6) × 3 = 10 × 3 = 30 ATP (from NADH)<br>2 × 2 = 4 ATP (from FADH<sub>2</sub>)<br>30 + 4 = 34 ATP (oxidative phosphorylation)',
          'Direct ATP: 2 (glycolysis net) + 2 (Krebs × 2) = 4 ATP',
          'Total = 34 + 4',
        ],
        ans: '38 ATP per glucose molecule.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Does Cytoplasmic NADH Yield Fewer ATP Than Matrix NADH?</b> State one reason why the NADH produced during glycolysis does not always yield 3 ATP in the electron transport chain.',
        steps: [
          'The inner mitochondrial membrane is impermeable to NADH. The reducing equivalents must be transferred into the matrix by shuttle systems. The glycerol-3-phosphate shuttle delivers them to FADH<sub>2</sub> instead of NAD<sup>+</sup>, and FADH<sub>2</sub> passes its electrons into the chain at the ubiquinone level, as FADH<sub>2</sub> from Complex II does, bypassing the first proton-pumping step. This yields only 2 ATP per NADH instead of 3. In contrast, the malate-aspartate shuttle delivers to matrix NAD<sup>+</sup>, preserving the full 3 ATP yield. The shuttle type, not the ETS machinery itself, determines the yield.',
        ],
        ans: 'The NADH is trapped in the cytoplasm and must use shuttle systems; the glycerol-phosphate shuttle delivers to FADH<sub>2</sub>, giving only 2 ATP per NADH.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Energy Comparison.</b> A yeast cell ferments one molecule of glucose to ethanol. A muscle cell completely oxidises one molecule of glucose aerobically. Calculate the ATP difference between the two cells.',
        steps: [
          '• Aerobic (muscle cell): up to 38 ATP per glucose (36 if the glycerol-3-phosphate shuttle carries the glycolytic NADH)<br>• Anaerobic fermentation (yeast): net 2 ATP per glucose (glycolysis only; NADH is consumed in fermentation, not the ETS)',
          'Difference = 38 − 2',
          'The aerobic pathway yields 19 times more ATP than anaerobic fermentation (38 ÷ 2). The energy stored in one glucose molecule is very largely inaccessible without oxygen: fermentation releases less than 7% of the energy in glucose, and not all of that is trapped as ATP.',
        ],
        ans: '36 ATP difference (idealised: 38 aerobic against 2 by fermentation; 34 if the muscle’s glycolytic NADH uses the glycerol-3-phosphate shuttle).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the two shuttle systems that transfer reducing equivalents from cytoplasmic NADH into the mitochondrion.',
            a: 'Malate-aspartate shuttle and glycerol-3-phosphate shuttle.',
          },
          {
            q: '[CUET] State whether the following yields 2 or 3 ATP: (a) matrix NADH, (b) cytoplasmic NADH via glycerol-phosphate shuttle, (c) matrix FADH<sub>2</sub>.',
            a: '(a) 3 ATP, (b) 2 ATP, (c) 2 ATP.',
          },
          {
            q: '[NEET] How many molecules of ATP are produced directly (without the ETS) per molecule of glucose in aerobic respiration? Name the two stages that produce them.',
            a: 'Four ATP are produced directly per glucose: 2 from glycolysis (net, substrate-level) and 2 from the Krebs cycle (one per turn × 2 turns, at the succinyl-CoA → succinic acid step).',
          },
          {
            q: '[NEET High-Difficulty] If a cell uses the glycerol-phosphate shuttle for both glycolytic NADH molecules, calculate the total ATP yield per glucose (matrix NADH still yields 3 ATP each; matrix FADH<sub>2</sub> yields 2 ATP each).',
            a: 'Cytoplasmic NADH (×2) via glycerol-phosphate shuttle: 2 × 2 = 4 ATP (instead of 6). Matrix NADH: 8 × 3 = 24 ATP. Matrix FADH<sub>2</sub>: 2 × 2 = 4 ATP. Direct ATP: 4. Total = 4 + 24 + 4 + 4 = 36 ATP per glucose (the “textbook alternative”).',
          },
          {
            q: '[NEET High-Difficulty] Under what physiological condition might a cell rely more heavily on the glycerol-3-phosphate shuttle? Explain in terms of cell type and metabolic context.',
            a: 'The glycerol-3-phosphate shuttle is prominent in skeletal muscle. In muscle during intense exercise, glycolysis runs at a very high rate and cytoplasmic NAD<sup>+</sup> must be regenerated quickly; the glycerol-phosphate shuttle does this efficiently. The slightly lower yield per NADH (2 instead of 3) is the cost of a fast, one-way shuttle that keeps cytoplasmic NAD<sup>+</sup> regenerated and glycolysis running quickly.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 742–745 ─────────────────────────
  {
    n: 'B',
    title: 'Carbon Tracking Through the Respiratory Pathway',
    extra: true,
    kalam: 'CBSE Board questions ask which carbon atoms of glucose leave as CO2 first.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter shows the net inputs and outputs of each stage but does not walk a single carbon atom through the entire pathway. Higher-difficulty NEET questions routinely (the book’s estimate from past papers, not official figures) ask you to identify where a specific carbon from labelled glucose appears at each stage, and CBSE Board questions ask which carbon atoms of glucose leave as CO<sub>2</sub> first. This additional topic gives the method and works three examples.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The carbon-counting rule.</b> Each turn of the Krebs cycle releases exactly two carbons as CO<sub>2</sub>, but these are not the two carbons of the acetyl group that entered in that turn. They come from the oxaloacetate-derived part of citrate; the acetyl carbons are released in later turns. Over the long run the cycle is carbon-balanced: two carbons enter as acetyl CoA and two leave as CO<sub>2</sub> in every turn.',
      },
      {
        t: 'p',
        html: '<b>Carbon fate diagram for one glucose molecule.</b> Number the carbons of glucose along the chain:<br>C<sub>1</sub>–C<sub>2</sub>–C<sub>3</sub>–C<sub>4</sub>–C<sub>5</sub>–C<sub>6</sub> (glucose)<br>Aldolase splits fructose-1,6-bisphosphate between C<sub>3</sub> and C<sub>4</sub>, giving a three-carbon piece from C<sub>1</sub>–C<sub>3</sub> (dihydroxyacetone phosphate) and a three-carbon piece from C<sub>4</sub>–C<sub>6</sub> (glyceraldehyde-3-phosphate). Triose phosphate isomerase converts the first into glyceraldehyde-3-phosphate too, so the two G3P molecules are labelled as follows:',
      },
      {
        t: 'table',
        title: null,
        head: ['G3P made from', 'Aldehyde carbon (CHO)', 'Middle carbon', 'Terminal CH2–P carbon'],
        rows: [
          ['C<sub>1</sub>–C<sub>3</sub>', 'C<sub>3</sub>', 'C<sub>2</sub>', 'C<sub>1</sub>'],
          ['C<sub>4</sub>–C<sub>6</sub>', 'C<sub>4</sub>', 'C<sub>5</sub>', 'C<sub>6</sub>'],
        ],
      },
      {
        t: 'p',
        html: 'The aldehyde carbon of G3P is the one oxidised at the PGAL dehydrogenase step; it ends up as the carboxyl group of pyruvate. The middle carbon becomes the keto (C=O) carbon and the terminal carbon becomes the methyl carbon:',
      },
      {
        t: 'table',
        title: null,
        head: ['Pyruvate from', 'Carboxyl carbon', 'Keto carbon', 'Methyl carbon'],
        rows: [
          ['C<sub>1</sub>–C<sub>3</sub> half', 'C<sub>3</sub>', 'C<sub>2</sub>', 'C<sub>1</sub>'],
          ['C<sub>4</sub>–C<sub>6</sub> half', 'C<sub>4</sub>', 'C<sub>5</sub>', 'C<sub>6</sub>'],
        ],
      },
      {
        t: 'p',
        html: 'In the link reaction the carboxyl carbon of each pyruvate is released as CO<sub>2</sub>:<br>• From the first pyruvate: C<sub>3</sub> → CO<sub>2</sub>; acetyl CoA carries C<sub>1</sub> (methyl) and C<sub>2</sub> (carbonyl).<br>• From the second pyruvate: C<sub>4</sub> → CO<sub>2</sub>; acetyl CoA carries C<sub>6</sub> (methyl) and C<sub>5</sub> (carbonyl).',
      },
      {
        t: 'p',
        html: 'In the Krebs cycle, the acetyl group (2 carbons) joins oxaloacetate to form 6-carbon citrate. Its carbons are not released as CO<sub>2</sub> in that same turn. The first CO<sub>2</sub> of the cycle is released at the isocitrate → α-ketoglutarate step, and the second at α-ketoglutarate → succinyl-CoA. Both come from the oxaloacetate-derived part of citrate, not from the newly entered acetyl group. Because succinate is a symmetrical molecule, the acetyl-derived carbons are scrambled between positions, and they are released as CO<sub>2</sub> only in later turns. This is a standard NEET trap.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Which Carbon Atoms Leave First?</b> In the complete aerobic respiration of one molecule of glucose, which two carbon atoms are released as CO<sub>2</sub> first, and at which stage?',
        steps: [
          'The first two CO<sub>2</sub> molecules are released in the link reaction, when each pyruvate loses its carboxyl carbon. Tracing back through glycolysis (see the tables in the Method part): the pyruvate made from C<sub>1</sub>–C<sub>3</sub> of glucose has C<sub>3</sub> as its carboxyl carbon, and the pyruvate made from C<sub>4</sub>–C<sub>6</sub> has C<sub>4</sub> as its carboxyl carbon.',
          'Therefore the first two carbons released are C<sub>3</sub> and C<sub>4</sub> of the original glucose, both lost in the link reaction (oxidative decarboxylation of pyruvate to acetyl CoA).',
        ],
        ans: 'C<sub>3</sub> and C<sub>4</sub> of the original glucose molecule; released in the link reaction.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Labelled Glucose Experiment.</b> A culture of plant cells is fed glucose in which carbon 3 is labelled with <sup>14</sup>C. The cells are allowed to respire aerobically. At which stage is the label released, and does any of it enter the Krebs cycle?',
        steps: [
          'Aldolase splits fructose-1,6-bisphosphate between C<sub>3</sub> and C<sub>4</sub>, so C<sub>3</sub> is the last carbon of the C<sub>1</sub>–C<sub>3</sub> piece. After the triose phosphate isomerase reaction, C<sub>3</sub> is the aldehyde carbon of glyceraldehyde-3-phosphate, and the aldehyde carbon becomes the carboxyl carbon of pyruvate. In the link reaction the carboxyl carbon is removed as CO<sub>2</sub>, so the label leaves as <sup>14</sup>CO<sub>2</sub> at this stage.',
          'The acetyl CoA made from that pyruvate carries only C<sub>1</sub> and C<sub>2</sub> of the glucose, so no label enters the Krebs cycle: the Krebs intermediates remain unlabelled.',
        ],
        ans: 'The label is released as <sup>14</sup>CO<sub>2</sub> in the link reaction; none of it reaches the Krebs cycle.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Tricarboxylic Acid Carbon Origins.</b> State with reasoning whether the carbon atoms released as CO<sub>2</sub> in the Krebs cycle come from the acetyl CoA that entered that turn or from the oxaloacetate.',
        steps: [
          'The carbon atoms released as CO<sub>2</sub> in the Krebs cycle come from the oxaloacetate portion of citrate, not from the newly entered acetyl CoA. This is established by isotope-label experiments: when acetate labelled in the acetyl group enters the cycle, no labelled CO<sub>2</sub> appears in that turn. The two carbons of acetyl CoA are incorporated into citrate, and the two decarboxylations of the turn remove carbons that came from oxaloacetate. Because succinate is symmetrical, the acetyl-derived carbons are scrambled between positions as the cycle continues, and they are lost as CO<sub>2</sub> only in later turns, from the second turn onward.',
        ],
        ans: 'The CO<sub>2</sub> released in the Krebs cycle originates from the oxaloacetate carbons; the acetyl CoA carbons are released as CO<sub>2</sub> only in later turns of the cycle.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] How many carbon atoms are released as CO<sub>2</sub> per molecule of glucose in (a) the link reaction and (b) the Krebs cycle?',
            a: '(a) 2 CO<sub>2</sub> (one from each pyruvate in the link reaction); (b) 4 CO<sub>2</sub> (2 per turn × 2 turns).',
          },
          {
            q: '[CUET] In a molecule of glucose labelled at carbon 6 with <sup>14</sup>C, will the label be released as CO<sub>2</sub> in the link reaction? Explain.',
            a: 'No. Carbon 6 becomes the methyl carbon of pyruvate and then of acetyl CoA. The link reaction removes only the carboxyl carbons of pyruvate (C<sub>3</sub> and C<sub>4</sub> of glucose), so a label at C<sub>6</sub> is carried into the Krebs cycle in acetyl CoA and is released as CO<sub>2</sub> only in later turns.',
          },
          {
            q: '[NEET] Why does the first turn of the Krebs cycle not release the carbons that entered as acetyl CoA?',
            a: 'The acetyl CoA carbons are incorporated into the citrate molecule and occupy positions that are not decarboxylated in the same turn; the CO<sub>2</sub> released comes from the oxaloacetate-derived carbons. Because succinate is symmetrical, the acetyl carbons are scrambled and reach the decarboxylation positions only in a subsequent turn.',
          },
          {
            q: '[NEET High-Difficulty] An inhibitor blocks aconitase. Predict which Krebs cycle intermediates accumulate and which step will be directly affected. Explain whether CO<sub>2</sub> production would stop immediately.',
            a: 'Aconitase converts citrate to isocitrate. Blocking it causes citrate to accumulate. However, CO<sub>2</sub> production does not stop immediately: the link reaction still decarboxylates pyruvate to acetyl CoA, releasing 2 CO<sub>2</sub> per glucose. The Krebs cycle cannot continue past citrate, so subsequent CO<sub>2</sub> from the cycle halts.',
          },
          {
            q: '[NEET] Trace the path of carbon atom 2 of glucose through: glucose → glyceraldehyde-3-phosphate → pyruvate → acetyl CoA → one turn of the Krebs cycle. Name the molecule in which it appears at each stage.',
            a: 'Carbon 2 of glucose → carbon 2 of glyceraldehyde-3-phosphate (the middle carbon) → carbon 2 of pyruvate (the keto, C=O carbon) → the carbonyl carbon (C=O) of acetyl CoA → a carboxyl carbon of citrate, in the arm that came from acetyl CoA. It is not released in this turn; it passes on through isocitrate, α-ketoglutarate, succinyl-CoA, succinate, fumarate, malate and oxaloacetate.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 745–748 ─────────────────────────
  {
    n: 'C',
    title: 'RQ Calculations: Substrate Identification & Mixed Fuels',
    extra: true,
    kalam: 'Write the balanced equation, identify the coefficients, and apply the ratio.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the RQ values for pure substrates (carbohydrate = 1, protein about 0.8 to 0.9, fat about 0.7, organic acid > 1, anaerobic = infinity), works the RQ of glucose and of tripalmitin from their equations, quotes malic acid at 1.33 and oxalic acid at 4, and cautions that real tissues burn mixtures. It does not set out a step-by-step method for balancing an unbalanced equation before reading RQ, for naming the likely substrate from an in-between value, or for reasoning about mixed fuels in numbers. This additional topic supplies these.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1: Read the equation and divide.</b><br>For any balanced respiration equation, RQ = <frac><num>moles CO<sub>2</sub> evolved</num><den>moles O<sub>2</sub> consumed</den></frac>. Both come directly from the stoichiometric coefficients.',
      },
      { t: 'p', html: '<b>Step 2: Identify the substrate from the RQ.</b>' },
      {
        t: 'table',
        title: null,
        head: ['RQ value', 'Substrate type', 'Reasoning'],
        rows: [
          ['Exactly 1.0', 'Carbohydrate', 'Oxygen in the molecule balances the CO<sub>2</sub> produced'],
          ['about 0.7', 'Fat', 'Oxygen-poor, highly reduced → needs extra O<sub>2</sub>'],
          ['about 0.8–0.9 (NCERT quotes about 0.9)', 'Protein', 'Moderately reduced'],
          ['> 1.0', 'Organic acid', 'Oxygen-rich, already partly oxidised → needs little O<sub>2</sub>'],
          ['Infinite', 'Anaerobic/fermentation', 'O<sub>2</sub> consumed = 0, CO<sub>2</sub> > 0'],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 3: Mixed substrates.</b><br>When a tissue burns a mixture, the measured RQ is the weighted average of the individual RQ values. An RQ of 0.85 lies midway between fat (0.7) and carbohydrate (1.0), so it indicates a mixture of the two in comparable proportions (or protein, whose RQ is about 0.8–0.9). A value nearer 0.7 would mean predominantly fat; a value nearer 1.0, predominantly carbohydrate. (The average is weighted by the O<sub>2</sub> each fuel consumes: RQ = <frac><num>total CO<sub>2</sub></num><den>total O<sub>2</sub></den></frac>.) There is no single “correct” answer for a mixed-fuel RQ: the question must specify the mixture or ask what combination is consistent with the given value.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Solve from a given equation.</b><br>Write the balanced equation, identify the coefficients, and apply the ratio. If the equation is not fully balanced, balance it first by the inspection method (carbons, then hydrogens, then oxygens).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>RQ from Given Equation.</b> The oxidation of a fat (tripalmitin, a triglyceride) proceeds as:<br><br>2C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> → 102 CO<sub>2</sub> + 98 H<sub>2</sub>O<br><br>Calculate its RQ.',
        steps: [
          'From the coefficients: CO<sub>2</sub> evolved = 102; O<sub>2</sub> consumed = 145.',
          'RQ = <frac><num>102</num><den>145</den></frac> = 0.703 ≈ 0.7',
          'This confirms the standard value for fats.',
        ],
        ans: 'RQ ≈ 0.7.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Identify the Substrate from RQ.</b> A germinating pea seed (stored starch) gives RQ = 1.0, while a germinating groundnut seed (stored oil) gives RQ ≈ 0.7. Explain why.',
        steps: [
          'Pea seeds store starch, a carbohydrate. Carbohydrates have the general formula (CH<sub>2</sub>O)<sub><i>n</i></sub> and contain oxygen in roughly the proportions needed for oxidation, so O<sub>2</sub> consumed equals CO<sub>2</sub> released: RQ = 1.',
          'Groundnut seeds store oil, a fat. Fats are made of long hydrocarbon chains, (CH<sub>2</sub>)<sub><i>n</i></sub>-like, and are oxygen-poor relative to their carbon and hydrogen content. Oxidising a long hydrocarbon chain requires a large amount of external O<sub>2</sub>, so O<sub>2</sub> consumed greatly exceeds CO<sub>2</sub> released: RQ < 1, approximately 0.7.',
          'The difference is the oxygen content of the stored reserve, not the fact that both are seeds.',
        ],
        ans: 'Starch (carbohydrate) has RQ = 1 because its oxygen content balances CO<sub>2</sub> produced; oil (fat) has RQ ≈ 0.7 because it is oxygen-poor and demands extra O<sub>2</sub> for complete oxidation.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Mixed Substrate Reasoning.</b> A plant tissue respires with an RQ of 0.85. Suggest what this implies about the nature of the respiratory substrate, and explain why a mixture is the more likely substrate.',
        steps: [
          'An RQ of 0.85 is intermediate between the pure fat value (≈ 0.7) and the pure carbohydrate value (1.0), roughly midway between them. Pure protein gives approximately 0.8–0.9, so this value could indicate protein respiration, but proteins are not typically primary respiratory substrates in plants. More commonly, an RQ of 0.85 indicates a mixture of carbohydrate and fat being oxidised simultaneously in comparable proportions. For example, a seed during early germination may be oxidising both its residual oil stores and newly mobilised sugars, producing an intermediate RQ that reflects the weighted average of the two fuels. A pure single substrate always yields a fixed, characteristic RQ; any value between the standard figures suggests a mixture.',
        ],
        ans: 'RQ = 0.85 suggests mixed respiration (carbohydrate + fat in comparable amounts); protein (RQ about 0.8 to 0.9) would also fit, but proteins are not usually a plant’s main fuel. A pure carbohydrate gives 1.0 and a pure fat about 0.7.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>RQ of a Succulent.</b> Many succulents accumulate organic acids such as malic acid. When malic acid (C<sub>4</sub>H<sub>6</sub>O<sub>5</sub>) is used as the respiratory substrate, its RQ is approximately 1.33. Explain this value.',
        steps: [
          'Malic acid is already partly oxidised: it contains more oxygen relative to its carbon and hydrogen than a typical carbohydrate. Writing the oxidation equation for malic acid:<br><br>C<sub>4</sub>H<sub>6</sub>O<sub>5</sub> + 3 O<sub>2</sub> → 4 CO<sub>2</sub> + 3 H<sub>2</sub>O',
          'Here, 4 CO<sub>2</sub> are released but only 3 O<sub>2</sub> are consumed. Because the substrate already carries internal oxygen that partially satisfies its oxidation needs, the RQ exceeds 1. The ratio is <frac><num>4</num><den>3</den></frac> ≈ 1.33.',
        ],
        ans: 'Malic acid is oxygen-rich; its internal oxygen satisfies part of the oxidation demand, requiring less external O<sub>2</sub> and producing RQ > 1.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the balanced equation for the complete oxidation of glucose and calculate its RQ.',
            a: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O; RQ = <frac><num>6</num><den>6</den></frac> = 1.0.',
          },
          {
            q: '[CUET] Arrange the following in increasing order of RQ: (a) fat, (b) organic acid, (c) carbohydrate, (d) anaerobic fermentation.',
            a: 'Increasing RQ: fat (≈ 0.7) < carbohydrate (= 1.0) < organic acid (> 1.0) < anaerobic fermentation (∞, the largest). So: (a) < (c) < (b) < (d).',
          },
          {
            q: '[NEET] A respiratory quotient of infinity was recorded for a sealed yeast culture. Name the process responsible and state why no O<sub>2</sub> is consumed.',
            a: 'Alcoholic fermentation. Yeast metabolises glucose without O<sub>2</sub>, regenerating NAD<sup>+</sup> by decarboxylating pyruvate to acetaldehyde (releasing CO<sub>2</sub>) and reducing acetaldehyde to ethanol. No external O<sub>2</sub> is consumed, so O<sub>2</sub> consumed = 0, giving RQ = <frac><num>CO<sub>2</sub></num><den>0</den></frac> = ∞.',
          },
          {
            q: '[NEET] If a fat and a carbohydrate are oxidised in equal measure by a tissue, would the RQ be exactly 0.85? Justify.',
            a: 'Not necessarily exactly 0.85. The RQ of a mixture depends on the exact proportion of each substrate oxidised. Equal mass of fat and carbohydrate does not give equal mole proportions, and RQ is a mole ratio. A value of 0.85 would indicate a particular weighted average consistent with a specific mixture ratio, not automatically equal proportions.',
          },
          {
            q: '[NEET High-Difficulty] Balance the equation C<sub>4</sub>H<sub>6</sub>O<sub>6</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O for the oxidation of the organic acid tartaric acid, and calculate its RQ. Comment on whether this value is consistent with the chapter’s description of organic acids.',
            a: 'Balanced: 2 C<sub>4</sub>H<sub>6</sub>O<sub>6</sub> + 5 O<sub>2</sub> → 8 CO<sub>2</sub> + 6 H<sub>2</sub>O (check oxygen: 12 + 10 = 22 on the left, 16 + 6 = 22 on the right). RQ = <frac><num>8</num><den>5</den></frac> = 1.6. This is greater than 1, consistent with organic acids being oxygen-rich substrates that need little external O<sub>2</sub>, as the chapter states.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 748–751 ─────────────────────────
  {
    n: 'D',
    title: 'Respiration in Plants: The Alternative Oxidase Pathway',
    extra: true,
    kalam:
      'The alternative oxidase is a cyanide-resistant pathway encoded by nuclear genes and located in the inner mitochondrial membrane.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers the standard mitochondrial electron transport chain (Complexes I–IV, with ATP synthase as Complex V) and mentions that the plant respiratory pathway is amphibolic. It does not address the alternative oxidase (AOX) pathway, a branch of the ETS, found in plants (and some fungi and protists), that bypasses Complexes III and IV. This pathway lies beyond the NCERT syllabus; it is included here as enrichment, to show how plants can adjust their respiration under stress.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'The standard versus alternative pathway',
        head: ['Feature', 'Standard ETS', 'Alternative Oxidase Pathway'],
        rows: [
          ['Electron entry', 'Complex I (NADH) or Complex II (FADH<sub>2</sub>)', 'Same entry points'],
          ['Path', 'I → UQ → III → cyt c → IV → O<sub>2</sub>', 'I or II → UQ → AOX → O<sub>2</sub>'],
          ['Proton pumping', 'Complexes I, III, IV pump H<sup>+</sup>', 'Only Complex I pumps H<sup>+</sup>'],
          ['ATP per NADH', '3', 'Approximately 1'],
          ['O<sub>2</sub> reduction', 'Produces H<sub>2</sub>O', 'Produces H<sub>2</sub>O'],
          ['Regulation', 'Constitutive', 'Induced by stress and developmental signals'],
        ],
      },
      {
        t: 'p',
        html: '<b>Why plants have it.</b><br>The alternative oxidase is a cyanide-resistant pathway encoded by nuclear genes and located in the inner mitochondrial membrane. It is induced under conditions of stress: low temperature, reactive oxygen species (ROS) accumulation, pathogen attack, or drought. When the standard chain is overloaded or inhibited, AOX provides an overflow route for electrons, preventing the accumulation of reactive intermediates that would otherwise damage the cell. The trade-off is a lower ATP yield per NADH: the cell sacrifices efficiency for survival. This is the plant kingdom’s answer to the problem of maintaining respiration under stress conditions.',
      },
      {
        t: 'p',
        html: '<b>Key facts to memorise.</b><br>• AOX bypasses Complexes III and IV<br>• It is cyanide-resistant (the classic test distinguishes the two pathways)<br>• It is encoded by nuclear DNA, not mitochondrial DNA<br>• It produces heat (thermogenesis) in some tissues such as the spadix of thermogenic plants (e.g., <i>Arum</i> species, the voodoo lily, skunk cabbage), where the overflow respiration generates temperatures above ambient',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>The Cyanide-Resistant Path.</b> State one structural and one functional difference between the standard electron transport chain and the alternative oxidase pathway in plant mitochondria.',
        steps: [
          '<b>Structural:</b> The alternative oxidase is a separate enzyme (a terminal oxidase) embedded in the inner mitochondrial membrane, bypassing Complexes III and IV entirely. The standard electron transport chain has four electron-transfer complexes (I–IV) in sequence (Complex V is ATP synthase); AOX replaces the final two complexes with a single alternative oxidase protein.',
          '<b>Functional:</b> The standard chain pumps protons at Complexes I, III, and IV, yielding approximately 3 ATP per NADH. The alternative pathway pumps protons only at Complex I (if NADH is the donor), yielding only about 1 ATP per NADH: it is far less energy-efficient. Additionally, the alternative pathway is induced by stress conditions and is cyanide-resistant, whereas the standard pathway is cyanide-sensitive.',
        ],
        ans: 'Structurally, AOX bypasses Complexes III and IV; functionally, it yields fewer ATP per NADH (approximately 1 vs 3) and is cyanide-resistant.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Ecological Role.</b> Thermogenic flowers such as the voodoo lily (<i>Sauromatum guttatum</i>, also written <i>S. venosum</i>) maintain temperatures many degrees above ambient. Explain how the alternative oxidase contributes to this thermogenesis and why thermogenesis is ecologically important.',
        steps: [
          'The alternative oxidase bypasses two proton-pumping complexes, drastically reducing the ATP yield per NADH. Much of the respiratory energy that would normally be stored in ATP is instead released as heat. When the plant induces high levels of AOX expression (stimulated by salicylic acid, the “calorigen”, and other signals), the electron flow through this overflow pathway generates substantial heat, raising the floral temperature. Ecologically, thermogenesis serves to volatilise scent compounds that attract pollinators (beetles and flies) and to create a favourable thermal environment for pollination in cold conditions. It may also play a role in stress signalling.',
        ],
        ans: 'AOX bypasses Complexes III and IV, reducing ATP yield and converting much of the respiratory energy to heat; thermogenesis attracts pollinators and provides a warm microenvironment for reproductive development.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the alternative oxidase pathway, and where is it located in the mitochondrion?',
            a: 'The alternative oxidase (AOX) is a cyanide-resistant terminal oxidase embedded in the inner mitochondrial membrane of plant mitochondria. It accepts electrons from the ubiquinone pool and reduces O<sub>2</sub> to H<sub>2</sub>O, bypassing Complexes III and IV of the standard ETS.',
          },
          {
            q: '[CUET] State whether the following are true or false: (a) The alternative oxidase is cyanide-sensitive. (b) The alternative oxidase yields more ATP than the standard ETS. (c) AOX is found in plants but not in animals.',
            a: '(a) False: AOX is cyanide-resistant (the standard ETS is cyanide-sensitive). (b) False: AOX yields approximately 1 ATP per NADH, fewer than the standard ≈ 3. (c) True for the usual NEET sense: AOX is found in plants (and some fungi and protists) but not in mammalian mitochondria.',
          },
          {
            q: '[NEET] Why does the alternative oxidase pathway release much more of the respiratory energy as heat than the standard ETS does?',
            a: 'AOX bypasses two of the three proton-pumping sites (Complexes III and IV). When electrons flow through AOX, fewer protons are pumped per NADH oxidised, so less energy is captured in the proton gradient and converted to ATP. The energy that would have been stored in ATP is instead released as heat during electron flow.',
          },
          {
            q: '[NEET] Name two stress conditions that induce the alternative oxidase pathway.',
            a: 'Low temperature, drought, pathogen attack and reactive oxygen species (ROS) accumulation are well-documented inducers; any two will do.',
          },
          {
            q: '[NEET High-Difficulty] A plant physiologist observes that a non-thermogenic flower has a higher respiratory quotient than a thermogenic flower of the same species grown under identical conditions. Propose a hypothesis linking AOX activity to the observed RQ difference.',
            a: 'Hypothesis: AOX reduces O<sub>2</sub> to H<sub>2</sub>O with the same stoichiometry as the standard terminal oxidase, so it changes the route of electron flow and the ATP yield but not the ratio of O<sub>2</sub> consumed to CO<sub>2</sub> released. AOX activity therefore cannot by itself change the RQ; the RQ difference must reflect a difference in respiratory substrate, for example the thermogenic flower may be oxidising more lipid (a more reduced, lower-RQ fuel) while the non-thermogenic flower oxidises more carbohydrate (RQ nearer 1).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 751–754 ─────────────────────────
  {
    n: 'E',
    title: 'Integrated Numerical Problems',
    extra: true,
    kalam: 'This additional topic supplies three integrated problems with full solutions.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives separate treatments of ATP accounting, the amphibolic pathway, and RQ. Higher-difficulty NEET questions frequently (the book’s estimate from past papers, not official figures) combine these into a single problem that requires navigating all three. This additional topic supplies three integrated problems with full solutions.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Complete Energy and RQ Problem.</b> A germinating oil seed (stored fat) shows an RQ of about 0.7 during early germination. One molecule of tripalmitin (C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) is completely oxidised.<br>(a) Write the balanced equation for the oxidation.<br>(b) Calculate the total ATP produced from one molecule of tripalmitin, assuming NADH yields 3 ATP, FADH<sub>2</sub> yields 2 ATP, GTP counts as 1 ATP, and activating each fatty acid costs 2 ATP. (Tripalmitin is hydrolysed to one glycerol and three palmitic acid molecules. β-Oxidation of a 16-carbon fatty acid takes 7 rounds, each giving 1 NADH and 1 FADH<sub>2</sub>; the 7 rounds together yield 8 acetyl CoA.)<br>(c) Comment on the ecological advantage of storing energy as fat rather than carbohydrate.',
        steps: [
          '(a) Tripalmitin is a triglyceride: glycerol (3 C) esterified with three palmitic acid molecules (16 C each), giving 3 + 3 × 16 = 51 carbons. For the fully balanced oxidation of 2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>:<br><br>2C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145O<sub>2</sub> → 102CO<sub>2</sub> + 98H<sub>2</sub>O<br><br>This is the equation given in the chapter. The RQ = <frac><num>102</num><den>145</den></frac> ≈ 0.70.',
          '(b) Work per palmitic acid chain first.<br>• β-Oxidation (7 rounds): 7 NADH + 7 FADH<sub>2</sub>, and 8 acetyl CoA.<br>• Each acetyl CoA in the Krebs cycle: 3 NADH + 1 FADH<sub>2</sub> + 1 ATP (as GTP). For 8 acetyl CoA: 24 NADH + 8 FADH<sub>2</sub> + 8 ATP.',
          'Total carriers per palmitic acid: NADH 7 + 24 = 31; FADH<sub>2</sub> 7 + 8 = 15; direct ATP 8.<br><br>31 × 3 = 93 ATP,  15 × 2 = 30 ATP,  direct = 8 ATP<br><br>93 + 30 + 8 − 2 (activation) = 129 ATP per palmitic acid',
          'Three palmitic acid chains: 3 × 129 = 387 ATP.',
          'The glycerol is oxidised too: glycerol → glycerol-3-phosphate (uses 1 ATP) → DHAP (1 NADH) → glyceraldehyde-3-phosphate → pyruvate (1 NADH, 2 ATP) → acetyl CoA (1 NADH) → Krebs cycle (3 NADH, 1 FADH<sub>2</sub>, 1 ATP). Carriers: 6 NADH × 3 = 18 and 1 FADH<sub>2</sub> × 2 = 2; direct ATP: 2 + 1 − 1 = 2. Glycerol total = 18 + 2 + 2 = 22 ATP.',
          'Total = 387 + 22',
          '(c) Fat stores approximately 9 kcal/g compared with approximately 4 kcal/g for carbohydrate. Per gram, fat yields more than twice the energy of carbohydrate, making it a very compact form of stored energy. This is why seeds, which must pack maximum energy into a limited mass and volume, store lipids rather than starch.',
        ],
        ans: '(a) 2C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145O<sub>2</sub> → 102CO<sub>2</sub> + 98H<sub>2</sub>O; RQ ≈ 0.70. (b) About 409 ATP per tripalmitin molecule (387 from the three palmitic acid chains and about 22 from the glycerol). (c) Fat yields more than twice the energy per gram than carbohydrate, providing maximum energy density for the seed’s reserves.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Amphibolic ATP Problem.</b> During active biosynthesis, a cell withdraws α-ketoglutarate from the Krebs cycle for amino acid synthesis. Explain with reasoning the minimum effect on ATP yield per glucose molecule.',
        steps: [
          'Withdrawing α-ketoglutarate removes an intermediate part-way round the cycle, so every step downstream of it is lost for that molecule. If one molecule of α-ketoglutarate is siphoned off per glucose (affecting one of the two turns), the cell loses all the carriers and ATP that the rest of that turn would have produced:<br>• α-ketoglutarate → succinyl-CoA: 1 NADH (3 ATP)<br>• succinyl-CoA → succinate: 1 ATP (as GTP)<br>• succinate → fumarate: 1 FADH<sub>2</sub> (2 ATP)<br>• malate → oxaloacetate: 1 NADH (3 ATP)',
          '3 + 1 + 2 + 3 = 9 ATP',
          'The minimum ATP loss is therefore 9 ATP per molecule of α-ketoglutarate withdrawn. In addition, oxaloacetate is not regenerated from that molecule, which can slow acetyl CoA processing in later turns and compound the energy loss. This illustrates the amphibolic trade-off: the cell gains a biosynthetic precursor but pays an energy cost.',
        ],
        ans: 'A loss of at least 9 ATP per α-ketoglutarate molecule siphoned off (the NADH, GTP, FADH<sub>2</sub> and NADH of the remaining steps are not formed); real cells compensate by anaplerotic reactions that replenish cycle intermediates.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Comparative Pathway Analysis.</b> A researcher measures the RQ and ATP yield of a plant tissue under two conditions: (i) darkness with ample oxygen, and (ii) daylight with ample oxygen. Design an experiment to determine whether the tissue is photosynthesising, and predict the expected differences in RQ and ATP yield between the two conditions.',
        steps: [
          '<b>Experimental design:</b> Place identical tissue samples in separate, sealed respirometers. Condition (i): keep in complete darkness (no photosynthesis possible). Condition (ii): illuminate with visible light of appropriate intensity and quality (photosynthesis possible). Measure O<sub>2</sub> consumption and CO<sub>2</sub> evolution in both conditions using KOH to absorb CO<sub>2</sub> and measure the volume change, or using an oxygen electrode. Calculate RQ = <frac><num>V(CO<sub>2</sub>)</num><den>V(O<sub>2</sub>)</den></frac> for each condition.',
          '<b>Predicted results:</b><br>• In darkness: only respiration occurs. RQ depends on the substrate but is finite. Net ATP per glucose = 38 (aerobic).<br>• In daylight: both photosynthesis and respiration occur simultaneously. The tissue takes in CO<sub>2</sub> for photosynthesis (reducing net CO<sub>2</sub> release) and may take in or produce O<sub>2</sub> depending on whether photosynthesis outpaces respiration. If photosynthesis dominates, the tissue takes up CO<sub>2</sub> and releases O<sub>2</sub>, so the ratio of net gas changes no longer measures respiratory RQ and is not interpretable. However, mitochondrial respiration continues, and its RQ remains unchanged. The net RQ measured reflects the difference between photosynthetic CO<sub>2</sub> consumption and respiratory CO<sub>2</sub> production. ATP yield from respiration itself is unchanged (38 per glucose oxidised), but the overall energy balance of the tissue includes the ATP generated by photosynthesis. (Method note: one respirometer with KOH reads the O<sub>2</sub> taken up; one without KOH reads CO<sub>2</sub> released minus O<sub>2</sub> taken up, so the CO<sub>2</sub> is found by subtraction; use darkness for a true RQ.)',
        ],
        ans: 'Measure gas exchange in light vs dark; in darkness only respiration operates (finite RQ, 38 ATP/glucose); in light both pathways run, so the net gas ratio is not interpretable as a respiratory RQ, but the respiratory ATP yield remains 38 per glucose oxidised.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two ways in which the amphibolic nature of respiration affects the theoretical ATP yield from one molecule of glucose.',
            a: 'Two effects: (i) withdrawal of Krebs intermediates for biosynthesis reduces the number of NADH/FADH<sub>2</sub> carriers produced per turn. (ii) Use of substrates other than glucose (fats, proteins) changes the carrier and ATP yield per gram differently; the 38 ATP figure assumes pure glucose as substrate.',
          },
          {
            q: '[CUET] A tissue shows RQ = 0.85 and an ATP yield of 38 per glucose. Which of these two measurements is more likely to deviate from the theoretical value in a living cell, and why?',
            a: 'ATP yield is more likely to deviate. RQ is a direct gas-volume ratio that can be measured experimentally with reasonable accuracy, and it depends only on the stoichiometry of gas exchange. ATP yield depends on assumptions about shuttle efficiency, proton leaks and substrate purity; all of which vary in vivo.',
          },
          {
            q: '[NEET] A plant cell ferments one molecule of glucose to lactic acid and simultaneously performs aerobic respiration on another molecule. Calculate the total ATP produced.',
            a: 'Fermentation of one glucose: 2 ATP (net, from glycolysis). Aerobic respiration of one glucose: 38 ATP. Total: 2 + 38 = 40 ATP (idealised, glycolytic NADH at 3 ATP each; 38 if the shuttle gives 2).',
          },
          {
            q: '[NEET High-Difficulty] A student argues that the respiratory quotient of a germinating fatty seed should always be exactly 0.7. Evaluate this claim using the concept of sequential substrate use during germination.',
            a: 'The claim is not strictly correct. An oily seed initially oxidises its stored oil (RQ ≈ 0.7), but as the stored fat is converted into sugars and these are respired as well, the RQ gradually rises toward 1.0. The RQ of a germinating fatty seed therefore changes over time, starting near 0.7 and drifting upward as the substrate shifts. A fixed value of 0.7 describes the pure-fat end-member, not the dynamic process.',
          },
          {
            q: '[NEET] Explain why the ATP yield from oxidising one fat molecule is much higher than from one glucose molecule, even though both are completely oxidised to CO<sub>2</sub> and H<sub>2</sub>O.',
            a: 'Fat is rich in carbon and hydrogen and poor in oxygen, so a fat molecule is far more reduced than a sugar. A 16-carbon fatty acid gives 7 NADH and 7 FADH<sub>2</sub> in β-oxidation and 8 acetyl CoA, each of which gives 3 NADH, 1 FADH<sub>2</sub> and 1 ATP in the Krebs cycle; the total is about 129 ATP per palmitic acid (about 8 ATP per carbon). One glucose gives only 2 NADH (glycolysis), 2 NADH (link reaction), 6 NADH and 2 FADH<sub>2</sub> (Krebs) plus 4 direct ATP, 38 ATP in all (about 6 ATP per carbon). A molecule of tripalmitin carries three such chains plus glycerol, so it yields about 409 ATP against 38 for glucose.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book’s Addendum P) · pp. 755–764 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET examiners return to this chapter with regularity across four distinct zones.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET examiners return to this chapter with regularity across four distinct zones. A reading of recent AIPMT and NEET papers gives the following approximate weighting (indicative only; the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share', 'Frequency signal'],
        rows: [
          ['Glycolysis & Fermentation', '30–35 %', 'Appears in nearly every paper'],
          ['TCA Cycle & ETS', '30–35 %', '2–3 items per paper, high difficulty'],
          ['RQ & Amphibolic Pathway', '15–20 %', '1–2 items; RQ calculations are reliable'],
          ['Gaseous Exchange in Plants', '10–15 %', 'Assertion–reason framing is dominant'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for revision:</b> Glycolysis and the Krebs/ETS together account for roughly 60–70% of the questions on this chapter (the book’s estimate from past papers, not official figures), so these two zones deserve the most revision time. The RQ and amphibolic sections are smaller but equally predictable: one RQ calculation and one “amphibolic = catabolic + anabolic” item appear almost every cycle.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1: The ATP-Accounting Check</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Net ATP gain from glycolysis is ____,” or “How many ATP from 2 NADH + 3 FADH<sub>2</sub>?” The question forces you to apply the conversion factors (NADH → 3 ATP, FADH<sub>2</sub> → 2 ATP) or subtract investment from gross yield.<br><b>The approach that cracks it:</b> Memorise the three anchors first:<br>• Glycolysis net = <b>2 ATP</b> (4 gross − 2 invested)<br>• NADH → <b>3</b> ATP; FADH<sub>2</sub> → <b>2</b> ATP (FADH<sub>2</sub> enters after the first pump)<br>• Total aerobic yield ≈ <b>38 ATP</b> per glucose<br>Then read what is actually being asked: “net gain” always means after subtraction; “produced from NADH/FADH<sub>2</sub>” means apply the ETS conversion factors; “per glucose” means double the per-turn Krebs figures.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b> In the complete aerobic respiration of one glucose molecule, how many ATP are produced directly (net) by substrate-level phosphorylation, and how many ATP are generated via oxidative phosphorylation from the electron transport chain?',
        steps: [
          'Direct (substrate-level) phosphorylation occurs at three steps:<br>1. 1,3-bisphosphoglycerate → 3-phosphoglycerate (glycolysis, ×2 trioses) → 2 ATP<br>2. Phosphoenolpyruvate → pyruvate (glycolysis, ×2 trioses) → 2 ATP<br>3. Succinyl-CoA → succinic acid (Krebs, ×2 turns) → 2 GTP ≡ 2 ATP',
          'Gross direct ATP = 6. Glycolysis spent 2 ATP (hexokinase and phosphofructokinase), so <b>net direct = 6 − 2 = 4 ATP</b> (glycolysis net 2 + Krebs 2).',
          'Oxidative phosphorylation via ETS:<br>• From glycolysis: 2 NADH → 2 × 3 = <b>6 ATP</b><br>• From link reaction (×2): 2 NADH → 2 × 3 = <b>6 ATP</b><br>• From Krebs cycle (×2): 6 NADH → <b>18 ATP</b>; 2 FADH<sub>2</sub> → <b>4 ATP</b>',
          'ETS total = 6 + 6 + 18 + 4 = 34 ATP',
          'Grand total = 4 + 34 = <b>38 ATP</b> per glucose (36 ATP if the glycerol-phosphate shuttle carries the glycolytic NADH).',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>Archetype 2: The Fermentation Fork</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Which product distinguishes alcoholic from lactic fermentation?” or “In the absence of O<sub>2</sub>, NADH passes electrons to ____.” The fork at pyruvate is a highly tested structural fact in this chapter.<br><b>The approach that cracks it:</b> One molecule holds the key: <b>pyruvate</b>. In the absence of O<sub>2</sub>, pyruvate (or acetaldehyde, the compound made from it in yeast) is the final electron acceptor for NADH, but how it accepts depends on the organism:<br>• Yeast: pyruvate → acetaldehyde (+CO<sub>2</sub>) → ethanol. <b>CO<sub>2</sub> is released.</b><br>• Animal muscle / some bacteria: pyruvate → lactic acid. <b>No CO<sub>2</sub>.</b><br>The second anchor: <b>lactic acid fermentation produces no CO<sub>2</sub></b>; this is a classic trap in NEET questions. Any option pairing “lactic” with “CO<sub>2</sub> release” is wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b> A sprinter’s leg muscle cells, working anaerobically for 60 seconds, accumulate a three-carbon acid. (i) Name the acid and the enzyme. (ii) Why does lactic acid fermentation itself release no CO<sub>2</sub>, unlike alcoholic fermentation?',
        steps: [
          '• <b>(i)</b> The acid is <b>lactic acid</b>; the enzyme is <b>lactate dehydrogenase</b>.',
          '• <b>(ii)</b> Lactic acid fermentation converts pyruvate directly to lactic acid: <b>no decarboxylation step</b> occurs, so this pathway makes no CO<sub>2</sub>. Alcoholic fermentation, in contrast, first decarboxylates pyruvate to acetaldehyde, which releases CO<sub>2</sub>.',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>Archetype 3: The Location Pin</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “The enzyme is located in (a) cytoplasm (b) mitochondrial matrix (c) inner membrane (d) cristae.” These questions exploit confusion between where glycolysis, Krebs, and ETS enzymes sit.<br><b>The approach that cracks it:</b> Build a three-room map:',
      },
      {
        t: 'table',
        title: null,
        head: ['Room', 'Contents'],
        rows: [
          ['Cytoplasm', '<b>Glycolysis</b> (all 10 enzymes); cytoplasmic NADH must be shuttled'],
          ['Mitochondrial matrix', '<b>Krebs cycle</b> (all enzymes except one); link reaction; pyruvate dehydrogenase'],
          [
            'Inner mitochondrial membrane',
            '<b>ETS complexes I–IV</b>, ATP synthase (Complex V), <b>succinate dehydrogenase</b> (Krebs enzyme #6, doubles as ETS Complex II)',
          ],
        ],
      },
      {
        t: 'p',
        html: 'A frequent exam point: of the Krebs enzymes the chapter names, succinate dehydrogenase is the one in the membrane.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b> The following are listed: (i) glycolysis, (ii) ETS Complex IV, (iii) succinate dehydrogenase, (iv) citrate synthase, (v) ATP synthase. How many of these are associated with the inner mitochondrial membrane?',
        steps: [
          '• <b>(i)</b> Glycolysis: <b>cytoplasm</b>, not the membrane. (No)<br>• <b>(ii)</b> ETS Complex IV (cytochrome c oxidase): <b>inner membrane</b>. (Yes)<br>• <b>(iii)</b> Succinate dehydrogenase: <b>inner membrane</b> (ETS Complex II). (Yes)<br>• <b>(iv)</b> Citrate synthase: <b>matrix</b> (soluble Krebs enzyme). (No)<br>• <b>(v)</b> ATP synthase (F<sub>0</sub>–F<sub>1</sub> particle): <b>inner membrane</b>. (Yes)',
        ],
        ans: '<b>3</b> (ii, iii, v).',
      },

      { t: 'p', html: '<b>Archetype 4: The RQ Fingerprint</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “The RQ of a fat is ____.” or “A germinating oily seed shows RQ ____ 1.” The substrate determines the value; the examiner tests whether you know why.<br><b>The approach that cracks it:</b> One logic rule replaces the entire table:<br><br>RQ = <frac><num>CO<sub>2</sub> released</num><den>O<sub>2</sub> consumed</den></frac><br><br>• <b>Oxygen-poor fuel</b> (fats) needs extra external O<sub>2</sub> → O<sub>2</sub> consumed > CO<sub>2</sub> released → <b>RQ < 1</b> (≈ 0.7)<br>• <b>Balanced fuel</b> (carbohydrates: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) → <frac><num>6 CO<sub>2</sub></num><den>6 O<sub>2</sub></den></frac> → <b>RQ = 1</b><br>• <b>Oxygen-rich fuel</b> (organic acids) needs little external O<sub>2</sub> → <b>RQ > 1</b> (malic acid ≈ 1.33)<br>• <b>No O<sub>2</sub> consumed</b> (anaerobic) → denominator = 0 → <b>RQ = ∞</b><br>Never memorise values for individual amino acids or fatty acids; reason from oxygen content.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b> A respirometer containing a germinating castor-oil seed (rich in stored oil) records O<sub>2</sub> consumption of 145 mL and CO<sub>2</sub> release of 102 mL. (i) Calculate the RQ. (ii) A student claims this RQ indicates carbohydrate respiration. Identify the flaw.',
        steps: [
          '• <b>(i)</b> RQ = <frac><num>102</num><den>145</den></frac> = <b>0.703 ≈ 0.7</b><br>• <b>(ii)</b> The student has confused the organ (a seed) with the substrate (oil). Castor seeds store <b>fat</b> (oil), not starch. Fats are oxygen-poor, so they require more O<sub>2</sub> for complete oxidation, giving RQ < 1. An RQ of 1 would indicate a carbohydrate substrate (e.g., a starchy wheat grain), not a fatty substrate.',
        ],
        ans: '',
      },

      { t: 'p', html: '<b>Archetype 5: Assertion–Reason: The Two-Statement Link</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “Assertion (A): … Reason (R): …” with four answer choices in the usual order: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true. (Older papers sometimes add or substitute “Both A and R are false”; always read the options given.)<br><b>The approach that cracks it:</b> Three rules under pressure:<br>1. <b>Judge A and R separately.</b> Each is simply true or false; decide both before thinking about the link.<br>2. <b>Check the causal direction.</b> Only if both are true, ask: does R actually explain A, or are they just two true facts?<br>3. <b>Watch for half-correct statements.</b> “Glycolysis produces CO<sub>2</sub>” is false: no CO<sub>2</sub> is released until the link reaction.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b><br><b>Assertion (A):</b> Glycolysis is the first step of respiration in which glucose completely breaks into CO<sub>2</sub> and H<sub>2</sub>O.<br><b>Reason (R):</b> Glycolysis yields a net gain of 2 ATP per glucose.<br>Choose: (a) Both A and R are true, and R correctly explains A. (b) Both A and R are true, but R does not explain A. (c) A is true, but R is false. (d) A is false, but R is true.',
        steps: [
          '• A is <b>false</b>. Glycolysis ends at <b>pyruvate</b> (3-carbon), not CO<sub>2</sub> and H<sub>2</sub>O. Complete glucose oxidation to CO<sub>2</sub> and H<sub>2</sub>O requires the link reaction, Krebs cycle, and ETS.<br>• R is <b>true</b>: the net gain of glycolysis is 2 ATP, but it does not rescue A.<br>• A false, R true.',
        ],
        ans: 'Answer <b>(d)</b>.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Glycolysis occurs in cytoplasm.<br><b>Reason (R):</b> Enzymes for glycolysis are found in cytoplasm. It is common in aerobic/anaerobic respiration.<br>Choose: (a) Both A and R are true, and R correctly explains A. (b) Both A and R are true, but R does not explain A. (c) A is true, but R is false. (d) A is false, but R is true.',
        steps: [
          '• A is <b>true</b>: glycolysis occurs in the cytoplasm.<br>• R is <b>true</b>: all ten EMP enzymes are cytosolic.<br>• R correctly explains why glycolysis can occur there. (R largely restates A, and its second sentence is a loose add-on; read as the book intends, the cytosolic location of the enzymes is why glycolysis occurs there, so (a).)',
        ],
        ans: 'Answer <b>(a)</b>.',
      },

      { t: 'p', html: '<b>Archetype 6: The Match-the-Column Precision Test</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns to pair (e.g., enzymes with reactions, complexes with functions). One wrong pairing disqualifies the entire option.<br><b>The approach that cracks it:</b> Eliminate systematically. The most common column entries in this chapter are:',
      },
      {
        t: 'table',
        title: null,
        head: ['Column I', 'Reliable match'],
        rows: [
          ['Inner mitochondrial membrane', 'ETS / Electron transport chain'],
          ['Fermentation', 'Cytoplasm (yeast → ethanol + CO<sub>2</sub>)'],
          ['Glycolysis', 'Cytoplasm'],
          ['Krebs cycle', 'Mitochondrial matrix'],
        ],
      },
      {
        t: 'p',
        html: 'Verify the membrane-bound Krebs enzyme: <b>succinate dehydrogenase</b> (Complex II of ETS, converts succinate → fumarate, makes FADH<sub>2</sub>). Any option that places this in the matrix is wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example (based on previous-year NEET questions):</b><br><b>Column I:</b> A. Inner mitochondrial membrane; B. Pyruvic acid converted to CO<sub>2</sub> and ethanol; C. Cytoplasm; D. Mitochondrial matrix<br><b>Column II:</b> I. Krebs cycle; II. ETS; III. Fermentation; IV. Glycolysis<br><b>Options:</b> (a) A–I, B–II, C–III, D–IV; (b) A–III, B–IV, C–II, D–I; (c) A–IV, B–I, C–II, D–III; (d) A–II, B–III, C–IV, D–I',
        steps: [
          '• A → II (ETS is on the inner membrane)<br>• B → III (fermentation = pyruvate → ethanol + CO<sub>2</sub>)<br>• C → IV (glycolysis = cytoplasm)<br>• D → I (Krebs cycle = matrix)',
        ],
        ans: 'Correct sequence: <b>A–II, B–III, C–IV, D–I</b> → Answer <b>(d)</b>.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The following common confusions are used in NEET distractors.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'Why it is wrong'],
        rows: [
          [
            '<b>“Glycolysis requires oxygen”</b>',
            'Option: “glycolysis requires molecular oxygen”',
            'Glycolysis is oxygen-independent; it runs in both aerobic and anaerobic conditions. It is only the later fate of pyruvate that is aerobic or anaerobic.',
          ],
          [
            '<b>“4 ATP net from glycolysis”</b>',
            'Option: “produces 4 ATP net per glucose”',
            '4 is the gross yield; 2 is the net (4 − 2 invested). This is a very common error in NEET questions.',
          ],
          [
            '<b>“CO<sub>2</sub> released in lactic fermentation”</b>',
            'Option pairing lactic acid with CO<sub>2</sub>',
            'Lactic fermentation has no decarboxylation; only alcoholic fermentation releases CO<sub>2</sub>.',
          ],
          [
            '<b>“ETS is in the mitochondrial matrix”</b>',
            'Option: “ETS is present in mitochondrial matrix”',
            'The ETS complexes are on the inner membrane; the matrix is where Krebs enzymes sit.',
          ],
          [
            '<b>“O<sub>2</sub> is the final electron donor”</b>',
            'Option: “oxygen acts as the final hydrogen acceptor” written as donor',
            'O<sub>2</sub> is the <b>terminal electron acceptor</b> (not a donor); it accepts electrons at Complex IV to form H<sub>2</sub>O.',
          ],
          [
            '<b>“NADPH in respiration”</b>',
            'Diagram or option using NADPH',
            'The respiratory chain uses <b>NADH/NAD<sup>+</sup></b>; NADPH belongs to photosynthesis and biosynthesis (the oxidative pentose phosphate pathway also makes it).',
          ],
          [
            '<b>“Succinate dehydrogenase is in the matrix”</b>',
            'Option placing all Krebs enzymes in matrix',
            'Succinate dehydrogenase is the Krebs enzyme in the membrane: it doubles as ETS Complex II.',
          ],
          [
            '<b>“All seeds give RQ = 1”</b>',
            'Option assuming any germinating seed → RQ 1',
            'RQ reflects the <b>substrate</b>, not the organ. Starchy seeds → 1; oily seeds (castor, mustard) → < 1.',
          ],
          [
            '<b>“Amphibolic = occurs in plants and animals”</b>',
            'Option defining amphibolic by organism range',
            '“Amphibolic” means the pathway serves <b>both catabolism and anabolism</b> (breakdown and synthesis).',
          ],
          [
            '<b>“Hexokinase is the pacemaker”</b>',
            'Option calling hexokinase rate-limiting',
            '<b>Phosphofructokinase (PFK)</b> is the pacemaker; hexokinase is the first enzyme but PFK is the main control point.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Difficulty key: <b>Easy</b> = recall, <b>Medium</b> = application, <b>Hard</b> = reasoning.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The enzymes of glycolysis are located in the:<br>(a) mitochondrial matrix<br>(b) cytoplasm<br>(c) nucleus<br>(d) inner mitochondrial membrane',
            a: '(b) cytoplasm. Glycolysis occurs in the cytosol; all ten EMP enzymes are soluble cytoplasmic proteins. The other options describe locations of later stages (Krebs matrix, membrane-bound ETS).',
          },
          {
            q: '[Easy] During glycolysis, the removal of a water molecule from the substrate occurs at the step catalysed by:<br>(a) hexokinase<br>(b) aldolase<br>(c) enolase<br>(d) phosphofructokinase',
            a: '(c) enolase. Enolase converts 2-phosphoglycerate to phosphoenolpyruvate by eliminating H<sub>2</sub>O (a dehydration). Hexokinase adds phosphate, aldolase splits the six-carbon sugar, and PFK adds the second phosphate.',
          },
          {
            q: '[Medium] In alcoholic fermentation by yeast, the regeneration of NAD<sup>+</sup> occurs when:<br>(a) pyruvate is decarboxylated to acetaldehyde<br>(b) acetaldehyde is reduced to ethanol<br>(c) glucose is converted to fructose-1,6-bisphosphate<br>(d) glyceraldehyde-3-phosphate is oxidised',
            a: '(b) acetaldehyde is reduced to ethanol. The reduction of acetaldehyde to ethanol by alcohol dehydrogenase transfers hydrogen from NADH back to NAD<sup>+</sup>, regenerating the NAD<sup>+</sup> needed to keep glycolysis running. Option (a) is decarboxylation: it removes CO<sub>2</sub> but does not recycle NAD<sup>+</sup>.',
          },
          {
            q: '[Medium] The RQ of a fatty seed germinating in a sealed flask (early germination) would be:<br>(a) equal to 1<br>(b) less than 1<br>(c) greater than 1<br>(d) infinite',
            a: '(b) less than 1. Fats are oxygen-poor, highly reduced molecules; oxidising them requires more external O<sub>2</sub> than the CO<sub>2</sub> released, giving RQ < 1. RQ = 1 is for carbohydrates; RQ > 1 is for oxygen-rich organic acids; RQ = ∞ is for anaerobic conditions where O<sub>2</sub> consumption = 0.',
          },
          {
            q: '[Medium] Which of the following is the only substrate-level phosphorylation step in the Krebs cycle?<br>(a) Isocitrate → α-ketoglutarate<br>(b) Succinyl-CoA → succinate<br>(c) Succinate → fumarate<br>(d) Malate → oxaloacetate',
            a: '(b) Succinyl-CoA → succinate. The conversion of succinyl-CoA to succinic acid (catalysed by succinyl-CoA synthetase/thiokinase) directly transfers a phosphate group to ADP/GDP: this is the sole substrate-level phosphorylation event in Krebs. The other three steps produce NADH or FADH<sub>2</sub>, not ATP.',
          },
          {
            q: '[Medium] The terminal electron acceptor in the mitochondrial electron transport chain is:<br>(a) NAD<sup>+</sup><br>(b) ubiquinone<br>(c) oxygen<br>(d) cytochrome c',
            a: '(c) oxygen. Molecular O<sub>2</sub> sits at the end of the chain, accepting spent electrons (and protons) at Complex IV to form H<sub>2</sub>O. NAD<sup>+</sup> is the oxidised form of the input carrier (NADH); it is regenerated at Complex I, not the terminal acceptor. Ubiquinone and cytochrome c are intermediate mobile carriers: all of them pass electrons on rather than being the terminal acceptor.',
          },
          {
            q: '[Hard] Assertion–Reason.<br><b>Assertion (A):</b> A tissue that respires malic acid as its substrate shows a respiratory quotient greater than 1.<br><b>Reason (R):</b> Organic acids are oxygen-rich substrates; their complete oxidation consumes less O<sub>2</sub> than the CO<sub>2</sub> they release.<br>(a) Both A and R are true, and R correctly explains A.<br>(b) Both A and R are true, but R does not explain A.<br>(c) A is true, but R is false.<br>(d) A is false, but R is true.',
            a: '(a). Malic acid (C<sub>4</sub>H<sub>6</sub>O<sub>5</sub>) is already partially oxidised: C<sub>4</sub>H<sub>6</sub>O<sub>5</sub> + 3 O<sub>2</sub> → 4 CO<sub>2</sub> + 3 H<sub>2</sub>O, so very little external O<sub>2</sub> is needed while CO<sub>2</sub> is released, and RQ = <frac><num>4</num><den>3</den></frac> ≈ 1.33 > 1. Both statements are true and the causal link is correct.',
          },
          {
            q: '[Hard] A student writes the following statement: “Fermentation is an anaerobic process, therefore glycolysis cannot occur in the presence of oxygen.” Identify the conceptual error and state the correct position.',
            a: 'The error is assuming that glycolysis depends on the absence of oxygen. Glycolysis is <b>oxygen-independent</b>: it does <b>not require</b> oxygen, and it is <b>not blocked</b> by oxygen either. Only fermentation (the fate of pyruvate when O<sub>2</sub> is absent) is anaerobic. In the presence of O<sub>2</sub>, pyruvate enters the mitochondria (aerobic respiration) and glycolysis continues at its normal rate. In the absence of O<sub>2</sub>, pyruvate is diverted to fermentation because the ETS cannot recycle NADH. The correct position: glycolysis runs in <b>both</b> aerobic and anaerobic conditions; fermentation is the downstream consequence of oxygen absence, not a substitute for glycolysis.',
          },
        ],
      },

      { t: 'part', title: 'Three Habits That Win Marks' },
      {
        t: 'p',
        html: '<b>1. Always subtract the 2 ATP invested in glycolysis.</b> NEET asks the net-gain question often. “Net gain” always means after subtraction: 4 gross − 2 invested = <b>2 ATP</b>. Make this a reflex before you look at the options.<br><br><b>2. Remember where succinate dehydrogenase sits.</b> Among the Krebs enzymes the chapter names, it is the one embedded in the inner mitochondrial membrane and doubles as ETS Complex II. Any option that places it in the matrix with the other Krebs enzymes is a trap.<br><br><b>3. Separate fermentation from anaerobic respiration.</b> In fermentation no O<sub>2</sub> is used, no ETS is involved, and ATP comes only from substrate-level phosphorylation. True anaerobic respiration, found in some bacteria, uses an ETS with an inorganic acceptor other than O<sub>2</sub> (for example nitrate or sulphate), so it makes ATP by oxidative phosphorylation. At NCERT level “anaerobic respiration” in plants and muscle usually means fermentation; separate the two only when an option does. Do not treat the two terms as interchangeable when an option separates them.',
      },
    ],
  },
];
