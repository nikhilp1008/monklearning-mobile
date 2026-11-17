import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 5 (Molecular Basis of Inheritance), Topics 01 to 03: pp. 224 to 249 of the
 * Class 12 Biology Master Reference, word for word. Topic 01 starts low on p. 224 (after the
 * contents spill of the chapter title page, which is not copied) and ends at the top of p. 233;
 * Topic 02 is pp. 234 to 240; Topic 03 is pp. 241 to 249. Each topic is cut at the book's
 * Sections 1 to 8 (the "Exam Relevance" box is the first paragraph of Concept intuition). The
 * numbered sub-headings of Section 3 ("3.1 ...") are kept as bold lines inside that part.
 * Figure 5.1 (caption p. 226, drawn p. 227) and Figure 5.2 (caption p. 228, drawn p. 229) are in
 * Topic 01, Figure 5.3 (caption p. 236, drawn p. 237) in Topic 02, Figures 5.4 (caption p. 243,
 * drawn p. 244) and 5.5 (caption p. 245, drawn p. 246) in Topic 03; each fig block stands at the
 * caption's place. No unnumbered drawing occurs on these pages. Emphasis italics are dropped;
 * italics are for scientific names, the gene-system name ori and the variable L. DNA bases, codons,
 * Greek-letter factors (sigma, rho), isotopes and element symbols are upright. The book's em
 * dashes are written as colons, commas or brackets. Years and counts in the Exam Relevance boxes
 * are labelled as the book's estimate.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 224–233 ─────────────────────────
  {
    n: '01',
    title: 'DNA/RNA Structure & Replication',
    kalam: 'A human cell carries about two metres of DNA folded into a nucleus a few micrometres wide.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked topic. NEET often pulls 2–4 questions per year from here (the book’s estimate from past papers, not official figures): base-pairing rules, the leading-vs-lagging distinction, and the Meselson–Stahl experiment are perennial favourites, often as assertion–reason. CBSE Boards ask 3- and 5-mark questions on the replication mechanism, DNA packaging, and “why semiconservative?”. CUET keeps it to crisp recall MCQs (Chargaff’s rule, nucleosome composition). There is no JEE component for Biology.',
      },
      {
        t: 'p',
        html: 'Imagine the entire railway timetable of India (every train, every platform, every stop) written out and stuffed inside a single tiffin box. That is roughly the problem every one of your cells solves. A human cell carries about two metres of DNA folded into a nucleus a few micrometres wide. The molecule that pulls this off is not just a passive string of information; its very shape is what lets it both store instructions and copy them faithfully every time a cell divides.',
      },
      {
        t: 'p',
        html: 'DNA (deoxyribonucleic acid) is a <b>polymer of nucleotides</b>. Each nucleotide is three things clicked together: a nitrogenous base, a pentose sugar (deoxyribose), and a phosphate group. The sugar and phosphate of neighbouring nucleotides link up to form a long backbone, and the bases stick out sideways like rungs on a ladder. Two such strands then wind around each other into the famous <b>double helix</b>.',
      },
      {
        t: 'p',
        html: 'The genius is in the pairing. A large base (a <b>purine</b>: adenine or guanine) always pairs with a small base (a <b>pyrimidine</b>: thymine or cytosine). Specifically, <b>A pairs with T</b>, and <b>G pairs with C</b>. Because a big base is always opposite a small one, the ladder stays a constant width all the way down, like a well-made staircase where every step is identical.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a zip on your jacket. Each tooth on the left fits exactly one tooth on the right. If you tore the zip down the middle, each half would still “know” what the missing half looked like, because every left-tooth dictates its right-partner. DNA’s two strands are exactly that complementary. This single property is why replication is even possible: pull the two strands apart, and each one is a perfect template for rebuilding its lost partner. You don’t need to store a backup copy: the backup is the other strand.',
      },
      {
        t: 'p',
        html: 'There is a second clever feature: the two strands run in <b>opposite directions</b> (they are antiparallel). One runs 5′ → 3′, the other 3′ → 5′. Keep this in your head: it is the source of almost every “trick” in this chapter, because the copying enzyme is one-directional and the antiparallel arrangement forces one strand to be copied smoothly and the other in awkward little pieces.',
      },
      {
        t: 'p',
        html: 'When the cell is not dividing, those two metres of DNA can’t just float loose. DNA is negatively charged (all those phosphates), so the cell wraps it around small, <b>positively charged proteins called histones</b>. Opposite charges attract, the DNA hugs the histone bead, and the long molecule gets compacted step by step until it fits.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean A–T / G–C picture and Chargaff’s rule (A = T, G = C) hold for <b>double-stranded DNA</b>. They do not hold for single-stranded DNA or for most RNA, so if a question gives you base percentages that don’t satisfy A = T, the molecule is telling you it is single-stranded. Also, “DNA is copied 5′ → 3′ only” is an absolute rule for the polymerase; every apparent exception (the lagging strand, RNA primers) is the cell working around this rule, never breaking it.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      {
        t: 'table',
        title: 'Nucleotide vs nucleoside: a frequent NEET trap.',
        head: ['Term', 'Composition', 'Diagnostic'],
        rows: [
          ['Nucleoside', 'base + sugar', '<b>lacks</b> the phosphate'],
          ['Nucleotide', 'base + sugar + phosphate', 'the repeating monomer of DNA/RNA'],
        ],
      },
      {
        t: 'p',
        html: '<b>The B-DNA double helix (Watson–Crick model, 1953).</b> Built on Wilkins’ and Franklin’s X-ray diffraction data and Chargaff’s base ratios:<br>• Two antiparallel polynucleotide chains, one 5′ → 3′, the other 3′ → 5′.<br>• Backbone of alternating <b>sugar–phosphate</b>, joined by <b>3′–5′ phosphodiester bonds</b>.<br>• Bases project inward; <b>A=T</b> held by <b>2 hydrogen bonds</b>, <b>G≡C</b> by <b>3 hydrogen bonds</b>.<br>• Diameter ≈ 2 nm (20 Å); rise per base pair ≈ 0.34 nm; one full turn (pitch) ≈ 3.4 nm, containing <b>10 base pairs</b>.<br>• The helix is right-handed and shows alternating major and minor grooves (where regulatory proteins read the sequence).',
      },
      {
        t: 'p',
        html: '<b>Chargaff’s rule.</b> In any double-stranded DNA: A = T and G = C, therefore purines = pyrimidines:<br>A + G = T + C',
      },
      {
        t: 'table',
        title: 'DNA vs RNA: the two-column comparison Boards love',
        head: ['Feature', 'DNA', 'RNA'],
        rows: [
          ['Sugar', 'Deoxyribose (no 2′-OH)', 'Ribose (has 2′-OH)'],
          ['Pyrimidine used', 'Thymine', 'Uracil'],
          ['Strands', 'Usually double', 'Usually single'],
          ['Stability', 'Stable (good store)', 'Labile, reactive (the 2′-OH makes it prone to hydrolysis)'],
          ['Role', 'Long-term genetic store', 'Carrier/catalyst/structural (mRNA, tRNA, rRNA)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Chromatin packaging units.</b><br>• <b>Histone octamer</b>: 8 histone molecules, two each of <b>H2A, H2B, H3, H4</b>. Rich in the basic amino acids <b>lysine and arginine</b> (hence positively charged).<br>• <b>Nucleosome</b>: negatively charged DNA (<b>~200 bp</b>) wrapped around one histone octamer. The repeating “bead.”<br>• <b>Chromatosome</b>: a nucleosome <b>plus the H1 (linker) histone</b>.<br>• <b>Chromatin</b>: “beads-on-string” of nucleosomes; condenses into a 30 nm fibre, then loops, then the chromosome at metaphase. Higher-order packing also needs <b>Non-Histone Chromosomal (NHC) proteins</b>.<br>• <b>Euchromatin</b> (loosely packed, lightly stained, transcriptionally active) vs <b>heterochromatin</b> (densely packed, darkly stained, inactive).',
      },
      { t: 'fig', id: 'b12-05-fig-5.1' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>3.1 Why replication must be semiconservative</b>' },
      {
        t: 'p',
        html: 'When the double helix copies itself, three outcomes are logically possible: <b>conservative</b> (the old duplex stays intact and a brand-new duplex is made), <b>dispersive</b> (each new strand is a patchwork of old and new), or <b>semiconservative</b> (each daughter duplex keeps one parental strand and one new strand). The complementary-zip logic of Concept intuition predicts semiconservative (each old strand templates one new partner), but prediction is not proof.',
      },
      {
        t: 'p',
        html: '<b>The Meselson–Stahl experiment (1958), in <i>E. coli</i>,</b> supplied the proof. Bacteria were grown for many generations in medium containing the <b>heavy nitrogen isotope <sup>15</sup>N</b>, so all their DNA was “heavy.” They were then shifted to ordinary <sup>14</sup>N medium and allowed to divide. DNA extracted at intervals was spun in a <b>CsCl density gradient</b>:<br>• <b>After one generation:</b> a single band of intermediate (hybrid) density: every duplex had one heavy parental strand and one light new strand. This single observation kills the conservative model outright (which would have predicted two separate bands).<br>• <b>After two generations:</b> half the DNA was hybrid, half was fully light, exactly what semiconservative replication demands.',
      },
      { t: 'p', html: '<b>3.2 The replication machinery and the leading/lagging problem</b>' },
      {
        t: 'p',
        html: 'Replication occurs during the <b>S-phase</b> of the cell cycle, and runs through a small opening of the helix called the <b>replication fork</b>: the whole molecule never unzips at once, because separating two metres of base-paired DNA in one go would be ruinously energy-expensive.',
      },
      {
        t: 'p',
        html: 'The step-by-step logic, with the reason for each step:<br>1. <b>Origin (<i>ori</i>).</b> Replication starts at a defined sequence (in <i>E. coli</i>, a single <i>ori</i>) that has a recognition site for the machinery and an attachment site for the RNA primer. <b>Reason:</b> the cell must control where and when copying begins, not let it start randomly.<br>2. <b>Unwinding. DNA helicase</b> unzips the double helix at the fork. <b>Reason:</b> the bases must be exposed before they can be read as a template.<br>3. <b>Relieving strain & holding strands apart. Topoisomerase</b> relaxes the supercoiling generated ahead of the fork; <b>single-strand binding proteins (SSBPs)</b> coat the open strands. <b>Reason:</b> unwinding twists the rest of the molecule (like over-twisting a rubber band), and the bare strands would otherwise snap shut.<br>4. <b>Priming.</b> A short RNA primer is laid down, providing a free <b>3′-OH end</b>. <b>Reason:</b> DNA polymerase cannot start a chain from scratch: it can only extend an existing 3′ end.<br>5. <b>Synthesis. DNA-dependent DNA polymerase</b> adds nucleotides, but <b>only in the 5′ → 3′ direction</b>. The substrate–energy source is the <b>deoxyribonucleoside triphosphate (dNTP)</b>, which plays a dual role: it is both the building block and the fuel (splitting off its two terminal phosphates releases the energy for polymerisation).',
      },
      {
        t: 'p',
        html: 'Now the antiparallel geometry bites. Because the two template strands run in opposite directions but the polymerase only works one way:<br>• On the template read 3′ → 5′, the new strand grows continuously toward the fork: the <b>leading strand</b>.<br>• On the template read 5′ → 3′, the new strand cannot grow toward the fork. Instead it is built backwards, in short pieces called <b>Okazaki fragments</b>: the <b>lagging strand</b>. These fragments are later stitched together by <b>DNA ligase</b>.',
      },
      { t: 'fig', id: 'b12-05-fig-5.2' },
      {
        t: 'p',
        html: 'So here is a sentence worth learning: <b>the lagging strand is discontinuous only because the polymerase is stubbornly 5′ → 3′ and the strands are antiparallel.</b> Every distractor in this area is built on students forgetting one of those two facts.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'Explain why DNA replication is described as semiconservative, and state one experimental observation that supports it.',
        steps: [
          '<b>Model answer.</b> Replication is semiconservative because each of the two daughter DNA molecules retains <b>one parental (old) strand</b> and acquires <b>one newly synthesised strand</b>. This follows from the strands being complementary: each old strand acts as a template for its new partner. <b>Supporting observation:</b> in Meselson–Stahl’s experiment, DNA extracted <b>one generation</b> after shifting <i>E. coli</i> from <sup>15</sup>N to <sup>14</sup>N formed a <b>single band of intermediate (hybrid) density</b> in CsCl: each duplex had one heavy and one light strand, which is possible only under the semiconservative scheme.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match the enzyme with its function.<br><b>Column I:</b> A. Helicase; B. Topoisomerase; C. DNA ligase; D. DNA polymerase.<br><b>Column II:</b> 1. Joins Okazaki fragments; 2. Unwinds the double helix at the fork; 3. Adds nucleotides 5′ → 3′; 4. Relaxes supercoiling.',
        steps: [
          '<b>Reasoning shortcut:</b> “Open it, relax it, build it, seal it.” Helicase <b>opens</b>, topoisomerase <b>relaxes</b> the strain that opening creates, polymerase <b>builds</b> the new strand, ligase <b>seals</b> the breaks. Read in that order, the matches fall out almost without thinking.',
        ],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> On the lagging strand, DNA is synthesised discontinuously as Okazaki fragments. <b>Reason (R):</b> DNA polymerase can add nucleotides only in the 5′ → 3′ direction while the two template strands are antiparallel.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          'Both statements are true, and R is precisely why A happens. Because the polymerase is locked to 5′ → 3′ synthesis and the strands run antiparallel, only one strand (leading) can be copied continuously toward the fork; the other (lagging) must be built in backward-facing fragments. Students who pick <b>(b)</b> know both facts but haven’t connected them: they treat the antiparallel rule as a separate trivia point rather than the cause of discontinuity, which is exactly the link being tested.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · quantitative',
        q: 'A double-stranded DNA molecule is found to contain 3 × 10<sup>8</sup> <b>base pairs</b>. A drug intercalates between the bases, increasing the rise per base pair from the normal 0.34 nm to 0.41 nm. (i) Calculate the length of the helix in the drug-saturated state. (ii) If chemical analysis of a different sample shows A = 31%, G = 19%, C = 31%, T = 19%, what can you conclude about that molecule?',
        steps: [
          '<b>Solution.</b> (i) Length = (number of base pairs) × (rise per base pair):<br><i>L</i> = (3 × 10<sup>8</sup>) × (0.41 × 10<sup>−9</sup> m) = 0.123 m ≈ 12.3 cm',
          '(ii) Apply Chargaff. For double-stranded DNA we require A = T and G = C. Here A = 31% but T = 19%, so A ≠ T. Chargaff’s rule is <b>violated</b>, which means the molecule <b>cannot be a standard double-stranded DNA</b>: most likely it is <b>single-stranded</b>. (The intercalation part is a distractor designed to consume time; the base-percentage half is the real test of whether you reason from A = T rather than memorising it.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between a nucleoside and a nucleotide, and name the bond that links adjacent nucleotides in a strand.',
            a: 'Nucleoside = base + sugar; nucleotide = base + sugar + phosphate; joined by <b>3′–5′ phosphodiester bonds</b>.',
          },
          {
            q: '[CUET] State the composition of a histone octamer and define a chromatosome.',
            a: 'Octamer = 2 each of H2A, H2B, H3, H4; chromatosome = nucleosome <b>+ H1</b>.',
          },
          {
            q: '[NEET] A DNA sample has 22% cytosine. Calculate the percentage of adenine.',
            a: 'C = G = 22%, so G + C = 44%; A + T = 56%; A = T = 28%.',
          },
          {
            q: '[NEET] Why does the lagging strand require DNA ligase but the leading strand does not (in the simplest description)?',
            a: 'Lagging strand is made in discontinuous Okazaki fragments that must be joined; the leading strand is one continuous piece.',
          },
          {
            q: '[NEET high-difficulty] During Meselson–Stahl’s experiment, predict the banding pattern (number and density of bands) seen <b>after three generations</b> in <sup>14</sup>N medium, and justify it.',
            a: '<b>Two bands</b>: a light band and a hybrid band, with light ∶ hybrid = 3 ∶ 1 (16 strands in 8 duplexes: 14 light and 2 heavy strands; the two original heavy strands remain, each paired with a light strand → 2 hybrid and 6 light duplexes).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of hydrogen bonds between guanine and cytosine in a DNA double helix is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> and <b>(d)</b> have no basis.' },
          {
            label: '2',
            nudge: '<b>(b)</b> is the classic trap: students remember “two hydrogen bonds” for A–T and over-apply it to G–C.',
          },
          { label: '3', nudge: null },
          { label: '4', nudge: '<b>(a)</b> and <b>(d)</b> have no basis.' },
        ],
        correct: 2,
        solution:
          'G≡C is held by three hydrogen bonds; A=T by two. <b>Speed link:</b> G–C-rich DNA needs more heat to melt precisely because of this third bond.',
      },
      {
        t: 'mcq',
        q: 'During DNA replication, the deoxyribonucleoside triphosphates (dNTPs) act as:',
        opts: [
          {
            label: 'substrate only',
            nudge: '<b>(a)</b> and <b>(b)</b> are each half-right, which is what makes them tempting; the examiner is checking whether you know the dual role.',
          },
          {
            label: 'energy source only',
            nudge: '<b>(a)</b> and <b>(b)</b> are each half-right, which is what makes them tempting; the examiner is checking whether you know the dual role.',
          },
          { label: 'both substrate and energy source', nudge: null },
          { label: 'primer only', nudge: '<b>(d)</b> confuses the dNTP with the RNA primer.' },
        ],
        correct: 2,
        solution:
          'dNTPs are the monomers added to the growing chain and the source of energy: cleavage of the two terminal phosphates drives polymerisation.',
      },
      {
        t: 'mcq',
        q: 'A typical nucleosome contains approximately how many base pairs of DNA?',
        opts: [
          {
            label: '100',
            nudge: '<b>(a)</b> and <b>(d)</b> are distractors (700 nm is a packaging dimension, not a base count: a units-confusion bait).',
          },
          {
            label: '146 only',
            nudge: '<b>(b)</b> is the core-particle value (~146 bp without the linker): true biochemically but not the figure NCERT asks for, and a frequent over-precise trap.',
          },
          { label: '200', nudge: null },
          {
            label: '700',
            nudge: '<b>(a)</b> and <b>(d)</b> are distractors (700 nm is a packaging dimension, not a base count: a units-confusion bait).',
          },
        ],
        correct: 2,
        solution: 'NCERT states a typical nucleosome contains about 200 bp wrapped around the octamer.',
      },
      {
        t: 'mcq',
        q: 'Which observation in Meselson–Stahl’s experiment rules out the conservative model of replication?',
        opts: [
          {
            label: 'Two bands after two generations',
            nudge: '<b>(a)</b> is true of a later generation but doesn’t by itself exclude the conservative model.',
          },
          { label: 'A single hybrid-density band after one generation', nudge: null },
          {
            label: 'A single light band after one generation',
            nudge: '<b>(c)</b> would imply replication produced no parental contribution at all (impossible here).',
          },
          { label: 'No DNA recovered after one generation', nudge: '<b>(d)</b> is simply false.' },
        ],
        correct: 1,
        solution:
          'A conservative model predicts the original heavy duplex stays intact, so after one generation you’d see two bands (one heavy, one light), never a single intermediate band. The observed single hybrid band is incompatible with that, and is the decisive result.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up “antiparallel” with “complementary.”</b> Complementary = the base-pairing rule (A–T, G–C). Antiparallel = the strands run in opposite 5′/3′ directions. Both are true at once, but a question asking why the lagging strand is discontinuous wants <b>antiparallel + 5′ → 3′ polymerase</b>, not base-pairing.',
          '<b>Over-precise nucleosome numbers.</b> For NCERT/NEET, a nucleosome is <b>~200 bp</b>. Quoting “146 bp” (the core-particle figure) costs marks when the expected answer is 200.',
          '<b>Forgetting Chargaff is a diagnostic, not just a rule.</b> If given base percentages where A ≠ T, don’t panic (that is the answer): the molecule is single-stranded. Many students assume the data must be wrong.',
          '<b>Saying replication is 3′ → 5′.</b> The template is read 3′ → 5′; the new strand is synthesised 5′ → 3′. State which strand you mean.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “calculate base %” question, lock onto two equations: A = T, G = C, and they sum to 100%. Find one value and the rest cascade in seconds; never set up anything more elaborate.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Monomer',
            note: 'nucleotide = base + sugar + phosphate; nucleoside lacks phosphate. Backbone joined by <b>3′–5′ phosphodiester bonds</b>.',
          },
          {
            f: 'Pairing',
            note: '<b>A=T</b> (2 H-bonds), <b>G≡C</b> (3 H-bonds); strands <b>antiparallel</b> (5′ → 3′ / 3′ → 5′).',
          },
          {
            f: 'B-DNA dimensions',
            note: 'diameter 2 nm; rise 0.34 nm/bp; pitch 3.4 nm; <b>10 bp per turn</b>.',
          },
          {
            f: 'Chargaff',
            note: 'A = T, G = C ⇒ A + G = T + C. (Violated ⇒ single-stranded.)',
          },
          {
            f: 'Packaging',
            note: 'DNA → histone octamer [2×(H2A,H2B,H3,H4)] → <b>nucleosome (~200 bp)</b> → +H1 = <b>chromatosome</b> → chromatin → chromosome.',
          },
          {
            f: 'Replication',
            note: 'semiconservative (<b>Meselson–Stahl</b>, <sup>15</sup>N → <sup>14</sup>N, CsCl, hybrid band after 1 gen). Polymerase 5′ → 3′ <b>only</b> → <b>leading</b> (continuous) + <b>lagging</b> (Okazaki, joined by <b>ligase</b>). dNTP = substrate <b>+</b> energy.',
          },
        ],
        aids: [
          '<b>Mnemonic (replication crew):</b> “Help Topple Single Primers, Police Ligate” → <b>Hel</b>icase, <b>Topo</b>isomerase, <b>S</b>SBP, <b>Prim</b>er, <b>Pol</b>ymerase, <b>Ligase</b>.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 234–240 ─────────────────────────
  {
    n: '02',
    title: 'The Search for Genetic Material & the RNA World',
    kalam: 'Chromosomes were known to contain both protein and DNA, and for decades the smart money was on protein.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked topic. CBSE Boards ask 3–5 mark questions on Griffith’s, Avery’s, and the Hershey–Chase experiments almost every year (the book’s estimate from past papers, not official figures). NEET pulls 1–3 questions yearly (the book’s estimate from past papers, not official figures): the isotopes used by Hershey–Chase (<sup>32</sup>P vs <sup>35</sup>S), what each experiment proved, and “why DNA is the better genetic material” are repeat traps. CUET asks recall MCQs on who discovered what.',
      },
      {
        t: 'p',
        html: 'By the early 20th century biologists agreed that something inside cells carried heredity from parent to offspring, but what molecule? Chromosomes were known to contain both <b>protein</b> and <b>DNA</b>, and for decades the smart money was on protein. Proteins are built from 20 different amino acids and seemed complex enough to hold a vast code; DNA, with just four bases, looked too simple and monotonous to be the “blueprint of life.” The story of this chapter’s foundation is the story of how a few elegant experiments overturned that prejudice.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> suppose two sealed boxes arrive and you must work out which one contains the instruction manual for building a machine. You can’t open them. So you do the next best thing: you tag the contents of each box with a tracer dye, let the machine get built, and then check which dye ended up inside the finished machine. That is exactly the logic of the decisive experiments: label DNA and protein differently, then follow the labels to see which one actually carries the message into the next generation.',
      },
      {
        t: 'p',
        html: 'The hunt unfolded in three acts. <b>Griffith</b> showed that something could carry a trait from dead bacteria to living ones (the “transforming principle”), but he didn’t know what that something was chemically. <b>Avery, MacLeod and McCarty</b> purified that something and showed it was <b>DNA</b>. And <b>Hershey and Chase</b> sealed the case with viruses, proving that when a virus infects a cell, it is the <b>DNA</b>, not the protein coat, that enters and directs the making of new viruses.',
      },
      {
        t: 'p',
        html: 'Finally, once DNA was crowned, a deeper question arose: why DNA? What does a molecule need in order to be genetic material at all, and could RNA have done the job first? That leads to the idea of the <b>RNA world</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Griffith’s experiment alone does <b>not</b> prove DNA is the genetic material: it only proves a heritable substance can be transferred; identifying it as DNA needed Avery’s biochemistry. And the “protein bias” was reasonable given the data of the time, a good reminder that in science, the obvious-seeming answer is not always right until it is tested.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      {
        t: 'table',
        title: 'The three landmark experiments, at a glance',
        head: ['Experiment', 'Year', 'Organism', 'What it proved'],
        rows: [
          [
            'Griffith: Transforming Principle',
            '1928',
            '<i>Streptococcus pneumoniae</i> (in mice)',
            'A heritable “transforming principle” can pass from dead to live cells',
          ],
          ['Avery, MacLeod & McCarty', '1944', '<i>S. pneumoniae</i> (in vitro)', 'The transforming principle is <b>DNA</b>'],
          [
            'Hershey & Chase',
            '1952',
            'T2 bacteriophage + <i>E. coli</i>',
            '<b>DNA</b>, not protein, is the genetic material that enters the host',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Griffith’s strains: the diagnostic pair',
        head: ['Strain', 'Colony', 'Capsule', 'Virulence'],
        rows: [
          ['S (smooth)', 'smooth', 'present (mucous coat)', 'virulent: kills mice'],
          ['R (rough)', 'rough', 'absent', 'avirulent: harmless'],
        ],
      },
      {
        t: 'p',
        html: '<b>Properties a genetic material must have</b> (the usual criteria for a genetic material):<br>• It must <b>replicate</b> (be copied faithfully).<br>• It must be <b>stable</b> chemically and structurally (so information is not lost).<br>• It must allow <b>mutation</b> (slow change, the raw material of evolution).<br>• It must be able to <b>express</b> itself as the phenotype (Mendelian “characters”).',
      },
      {
        t: 'table',
        title: 'DNA vs RNA as genetic material: why DNA won the job',
        head: ['Feature', 'DNA', 'RNA'],
        rows: [
          ['Sugar reactivity', 'Deoxyribose (no 2′-OH) → <b>stable</b>', 'Ribose (2′-OH) → <b>reactive, labile</b>'],
          ['Strands', 'Double: damage to one strand can be repaired from the other', 'Usually single'],
          ['Pyrimidine', 'Thymine (5-methyl uracil) confers extra stability', 'Uracil'],
          ['Mutability', 'Low (good for storage)', 'High (mutates/evolves fast: good for catalysis, bad for archive)'],
        ],
      },
      {
        t: 'p',
        html: 'So RNA is a brilliant doer but a careless librarian; DNA is the careful librarian.',
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>3.1 Griffith’s transformation (1928)</b>' },
      {
        t: 'p',
        html: 'Griffith injected mice with the two strains and watched the outcomes:<br>1. Live <b>R</b> → mice <b>live</b> (R is harmless).<br>2. Live <b>S</b> → mice <b>die</b> (S is virulent).<br>3. <b>Heat-killed S</b> → mice <b>live</b> (dead bacteria can’t cause disease).<br>4. <b>Heat-killed S + live R</b> → mice <b>die</b>, and live S bacteria are recovered from them.',
      },
      {
        t: 'p',
        html: 'The fourth result is the bombshell. Something from the dead S cells had <b>transformed</b> the harmless R into virulent S, and the change was <b>heritable</b>, passed to the recovered bacteria’s descendants. Griffith called the unknown agent the <b>transforming principle</b> but could not say what it was chemically.',
      },
      { t: 'p', html: '<b>3.2 Avery, MacLeod and McCarty (1944): naming the principle</b>' },
      {
        t: 'p',
        html: 'These workers set out to purify the transforming principle from heat-killed S cells and test each candidate molecule. The decisive logic was <b>selective destruction</b>:<br>• Adding <b>proteases</b> (which destroy protein) → transformation <b>still occurred</b>. ⇒ protein is not it.<br>• Adding <b>RNase</b> (which destroys RNA) → transformation <b>still occurred</b>. ⇒ RNA is not it.<br>• Adding <b>DNase</b> (which destroys DNA) → transformation <b>stopped</b>. ⇒ <b>DNA is the transforming principle</b>.',
      },
      {
        t: 'p',
        html: '<b>Reason:</b> whichever molecule’s destruction abolishes the heritable change must be the carrier. Only DNase did so.',
      },
      { t: 'p', html: '<b>3.3 Hershey and Chase (1952): the clinching proof</b>' },
      {
        t: 'p',
        html: 'Not everyone was convinced, so Hershey and Chase used <b>bacteriophages</b> (viruses that infect bacteria), which are essentially DNA inside a protein coat. Their elegance lay in <b>differential radioactive labelling</b>:<br>• DNA contains <b>phosphorus but no sulphur</b>; protein contains <b>sulphur but (unlike DNA) essentially no phosphorus</b>. So they grew one batch of phages with <b>radioactive phosphorus (<sup>32</sup>P)</b> to tag the DNA, and another with <b>radioactive sulphur (<sup>35</sup>S)</b> to tag the protein.<br>• The labelled phages were allowed to infect <i>E. coli</i>, then the empty viral coats were stripped off by <b>agitation in a blender</b> and separated by <b>centrifugation</b>.',
      },
      {
        t: 'p',
        html: 'The result: bacteria infected by <sup>32</sup>P-phages became <b>radioactive</b> (DNA had entered), while bacteria infected by <sup>35</sup>S-phages carried <b>very little</b> <sup>35</sup>S (most of it stayed outside with the protein coats). Since only the molecule that enters and directs new virus production can be the genetic material, <b>DNA, not protein, is the genetic material</b>.',
      },
      { t: 'fig', id: 'b12-05-fig-5.3' },
      { t: 'p', html: '<b>3.4 The RNA world: which came first?</b>' },
      {
        t: 'p',
        html: 'If DNA is the stable archive, where did it come from? The leading idea is that <b>RNA was the first genetic material</b>. RNA can both <b>store information</b> (like DNA) and <b>act as a catalyst</b> (like a protein enzyme: recall the ribozyme of the ribosome). A single molecule that is both message and machine could have run the earliest life. But being a reactive catalyst made RNA <b>unstable</b>. Over time, the argument goes, <b>DNA evolved from RNA</b> by chemical modifications (losing the reactive 2′-OH and swapping uracil for the more stable thymine) to become a better, more permanent store, while RNA kept the catalytic and messenger jobs. This fits the fact that, in cells, the information in DNA is expressed through RNA.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 5 marks',
        q: 'Describe Griffith’s experiment and state the conclusion he drew. Why could he not identify the nature of the transforming principle?',
        steps: [
          '<b>Model answer.</b> Griffith worked with virulent capsulated <b>S</b> and avirulent non-capsulated <b>R</b> strains of <i>Streptococcus pneumoniae</i>. Mice given live R survived; live S died; heat-killed S survived. But mice given <b>heat-killed S + live R died</b>, and <b>live S</b> were recovered from them. He concluded that some <b>transforming principle</b> from the dead S cells had converted R into virulent S, and that this change was <b>heritable</b>. He could not identify its chemical nature because his experiment was an in-vivo observation of the transfer itself: it did not isolate or test the individual molecules (DNA, RNA, protein) responsible; that required Avery, MacLeod and McCarty’s biochemical work.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match the scientist(s) with their contribution.<br><b>Column I:</b> A. Griffith; B. Avery, MacLeod, McCarty; C. Hershey & Chase; D. Watson & Crick.<br><b>Column II:</b> 1. DNA is the genetic material (phage experiment); 2. Discovered the transforming principle; 3. Proposed the double-helix model; 4. Transforming principle is DNA.',
        steps: [
          '<b>Reasoning shortcut:</b> chronological + escalating proof: Griffith finds the mystery agent, Avery names it (DNA), Hershey–Chase confirm it with viruses, Watson–Crick then explain its structure.',
        ],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> Hershey and Chase used radioactive <sup>32</sup>P and <sup>35</sup>S in their experiment. <b>Reason (R):</b> DNA contains phosphorus but no sulphur, while protein contains sulphur but no phosphorus.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          'The choice of isotopes follows directly from the elemental difference: <sup>32</sup>P tags DNA because only DNA has phosphorus, and <sup>35</sup>S tags protein because only protein has sulphur. R is exactly why those two isotopes were chosen. Students who pick <b>(b)</b> know both facts but miss that the elemental composition is the reason for the experimental design.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · reasoning',
        q: 'Suppose Hershey and Chase had instead used <sup>32</sup>P and <sup>15</sup>N to label the phages. Would the experiment still work? Explain.',
        steps: [
          '<b>Solution.</b> It would <b>fail to distinguish DNA from protein</b>. The whole design depends on labelling DNA and protein with different, mutually exclusive tracers. <b>Nitrogen (N) is present in both DNA (in the bases) and protein (in amino acids)</b>, so <sup>15</sup>N would label both molecules, and worse, <sup>15</sup>N is a stable (non-radioactive) heavy isotope, detectable only by density methods, not the autoradiographic tracing used here. With both labels potentially inside the cell and no clean separation by molecule type, no firm conclusion about which molecule entered could be drawn. The experiment works only because P is unique to DNA and S is unique to protein.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between the S and R strains of <i>Streptococcus pneumoniae</i> used by Griffith.',
            a: 'S = smooth colony, <b>capsulated</b>, virulent; R = rough colony, non-capsulated, avirulent.',
          },
          {
            q: '[CUET] Name the enzyme whose addition stopped transformation in Avery’s experiment, and state what this proved.',
            a: '<b>DNase</b>; it proved the transforming principle is <b>DNA</b> (protease and RNase did not stop transformation).',
          },
          {
            q: '[NEET] Which radioactive isotope was used to label the DNA, and which to label the protein, in the Hershey–Chase experiment?',
            a: 'DNA → <sup>32</sup>P; protein → <sup>35</sup>S.',
          },
          {
            q: '[NEET] List the four properties a molecule must possess to serve as genetic material.',
            a: 'Ability to <b>replicate</b>, chemical/structural <b>stability</b>, ability to <b>mutate</b>, and ability to <b>express</b> as phenotype.',
          },
          {
            q: '[NEET high-difficulty] Give two chemical reasons why DNA, rather than RNA, became the predominant genetic material, despite RNA likely being the first.',
            a: 'DNA lacks the reactive <b>2′-OH</b> of ribose (so it is more stable), and it uses <b>thymine</b> (more stable than uracil); being <b>double-stranded</b> also allows repair from the complementary strand.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In Griffith’s experiment, mice died when injected with:',
        opts: [
          { label: 'live R strain', nudge: '<b>(a)</b> R is harmless.' },
          { label: 'heat-killed S strain', nudge: '<b>(b)</b> dead bacteria cannot cause disease.' },
          { label: 'heat-killed S + live R', nudge: null },
          { label: 'live R + heat-killed R', nudge: '<b>(d)</b> neither component is virulent.' },
        ],
        correct: 2,
        solution:
          'Only the combination of heat-killed S with live R killed the mice, because R was transformed to virulent S. The trap is forgetting that the combination produces a new result.',
      },
      {
        t: 'mcq',
        q: 'The transforming principle was chemically identified as DNA by:',
        opts: [
          { label: 'Griffith', nudge: '<b>(a)</b> discovered the principle but not its nature.' },
          {
            label: 'Hershey & Chase',
            nudge: '<b>(b)</b> confirmed DNA using phages, not the transforming-principle purification.',
          },
          { label: 'Avery, MacLeod & McCarty', nudge: null },
          { label: 'Watson & Crick', nudge: '<b>(d)</b> worked on structure.' },
        ],
        correct: 2,
        solution: 'They purified it and used enzyme digestion to show it was DNA.',
      },
      {
        t: 'mcq',
        q: 'In the Hershey–Chase experiment, the radioactivity inside the bacterial cells came from:',
        opts: [
          {
            label: '<sup>35</sup>S',
            nudge: '<b>(a)</b> <sup>35</sup>S tagged the protein coat, which mostly stayed outside.',
          },
          { label: '<sup>32</sup>P', nudge: null },
          { label: 'both', nudge: '<b>(c)</b> and <b>(d)</b> misread the central result.' },
          { label: 'neither', nudge: '<b>(c)</b> and <b>(d)</b> misread the central result.' },
        ],
        correct: 1,
        solution: 'Only the <sup>32</sup>P-labelled DNA entered the bacteria.',
      },
      {
        t: 'mcq',
        q: 'The idea that RNA was the first genetic material is supported by the fact that RNA:',
        opts: [
          { label: 'is more stable than DNA', nudge: '<b>(a)</b> is false (RNA is less stable).' },
          { label: 'can act both as genetic material and as a catalyst', nudge: null },
          { label: 'contains thymine', nudge: '<b>(c)</b> RNA has uracil, not thymine.' },
          { label: 'is always double-stranded', nudge: '<b>(d)</b> RNA is usually single-stranded.' },
        ],
        correct: 1,
        solution:
          'RNA’s dual ability, storing information and catalysing reactions (ribozymes), makes it a plausible first molecule of life.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Crediting Griffith with proving DNA is genetic material.</b> He only showed a transforming principle exists; Avery identified it as DNA. Keep the credit straight.',
          '<b>Swapping the Hershey–Chase isotopes.</b> <sup>32</sup>P → DNA (phosphorus), <sup>35</sup>S → protein (sulphur). Memory hook: “<b>P</b> for the <b>P</b>hosphate backbone; <b>S</b> for the <b>S</b>ulphur in amino acids (cysteine/methionine).”',
          '<b>Saying nitrogen could tag DNA specifically.</b> Nitrogen is in both DNA and protein, so it cannot tell them apart, a favourite distractor.',
          '<b>Thinking RNA is the better genetic material because it came first.</b> First ≠ best for storage; RNA’s reactivity is thought to be why DNA took over as the archive.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “who proved what,” lock the three-step ladder: Griffith finds it → Avery names it (DNA) → Hershey–Chase confirm it (phage). Many questions in this section are answered by placing the scientist on that ladder.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Griffith (1928)',
            note: '<i>S. pneumoniae</i>, S (virulent, capsulated) vs R (avirulent). Heat-killed S + live R → virulent S recovered = <b>transforming principle</b> (heritable).',
          },
          {
            f: 'Avery, MacLeod, McCarty (1944)',
            note: 'DNase stops transformation (protease/RNase don’t) ⇒ <b>DNA is the transforming principle</b>.',
          },
          {
            f: 'Hershey–Chase (1952)',
            note: 'T2 phage, <sup>32</sup>P <b>= DNA</b>, <sup>35</sup>S <b>= protein</b>; only <sup>32</sup>P enters <i>E. coli</i> ⇒ <b>DNA is the genetic material</b>.',
          },
          { f: 'Genetic material must', note: 'replicate, be stable, mutate, express.' },
          {
            f: 'DNA > RNA as archive',
            note: 'no 2′-OH (stable), double-stranded (repairable), thymine (stable). RNA = reactive, mutates fast.',
          },
          {
            f: 'RNA world',
            note: 'hypothesis: RNA as the first genetic material <b>and</b> catalyst (ribozyme); DNA thought to have evolved from RNA for stability.',
          },
        ],
        aids: [
          '<b>Mnemonic (proof ladder):</b> “Great Apes Hunt” → <b>G</b>riffith (finds), <b>A</b>very (names = DNA), <b>H</b>ershey–Chase (confirms).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 241–249 ─────────────────────────
  {
    n: '03',
    title: 'Transcription & Genetic Code',
    kalam: 'Transcription is the photocopying step: copying one gene’s worth of DNA into a strand of RNA.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, high-yield region. NEET asks 2–3 questions almost every year (the book’s estimate from past papers, not official figures): template-vs-coding strand, the σ/ρ factors, RNA-polymerase products, and the salient features of the genetic code (especially degeneracy) are repeat offenders, often as assertion–reason or match-the-column. CBSE Boards favour 3–5 mark questions on the transcription unit, eukaryotic hnRNA processing, and “list the features of the genetic code.” CUET keeps to crisp recall MCQs. No JEE component.',
      },
      {
        t: 'p',
        html: 'The DNA in your nucleus is the master ledger of a vast library: irreplaceable, and never allowed to leave the building. So how does a working cell, out in the cytoplasm, actually use a recipe locked in that ledger? It doesn’t carry the ledger out. It makes a cheap, disposable photocopy of just the one page it needs, and sends that out to the workshop. <b>Transcription</b> is the photocopying step: copying one gene’s worth of DNA into a strand of RNA.',
      },
      {
        t: 'p',
        html: 'Only one of the two DNA strands is copied for any given gene. This feels wasteful at first: why not use both? <b>Think about it this way…</b> if you photocopied both strands, you’d get two RNA copies that are mirror images of each other; they would stick together into a useless double-stranded RNA, and the whole exercise would be pointless. Worse, the two strands would code for two different proteins, which the cell never intended. So the cell reads exactly one strand, the <b>template strand</b>, and leaves the other, the <b>coding strand</b>, as a silent reference.',
      },
      {
        t: 'p',
        html: 'Here is the part students find slippery, so let’s nail it now. The enzyme that builds RNA, <b>DNA-dependent RNA polymerase</b>, can only add nucleotides in the 5′ → 3′ direction (the same stubborn rule as DNA polymerase). To feed nucleotides on in that direction, it must read the template in the opposite direction: 3′ → 5′. The result: the new RNA ends up with the <b>same sequence as the coding strand</b>, just with <b>uracil wherever the coding strand had thymine</b>. That single sentence answers a huge fraction of exam questions: RNA reads like the coding strand, T→U.',
      },
      {
        t: 'p',
        html: 'Once the RNA is made, the genetic information is still written in the “wrong language”: a string of bases. The cell needs a dictionary to translate base-language into protein-language (the 20 amino acids). That dictionary is the <b>genetic code</b>: the rule that says which run of bases means which amino acid. The bases are read <b>three at a time</b>: a triplet called a <b>codon</b>. Why three? With four base “letters,” doublets (4<sup>2</sup> = 16) can’t cover 20 amino acids, but triplets (4<sup>3</sup> = 64) easily can, with codons to spare.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Transcription copies a gene, not the whole chromosome: it normally begins and ends at defined signals (promoter and terminator), not at random. The “one strand only” rule is about a single transcription unit; across a chromosome, different genes may use different strands as template. And the genetic code is read <b>without punctuation</b>: there are no commas between codons, so the cell must start at the right base; slip by one and every codon downstream is misread.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      {
        t: 'table',
        title: 'The transcription unit: three regions on the DNA, a frequent exam definition',
        head: ['Region', 'Location', 'Role'],
        rows: [
          [
            'Promoter',
            '5′ (upstream) of the structural gene',
            'Binding site for RNA polymerase; its position defines which strand is template and which is coding',
          ],
          ['Structural gene', 'between promoter and terminator', 'The sequence actually transcribed'],
          ['Terminator', '3′ (downstream)', 'Defines where transcription stops'],
        ],
      },
      {
        t: 'table',
        title: 'Template vs coding strand: a common exam trap',
        head: ['Strand', 'Polarity', 'Copied?', 'Sequence relationship'],
        rows: [
          ['Template strand', '3′ → 5′', 'Yes (read by polymerase)', 'Complementary to the RNA'],
          ['Coding strand', '5′ → 3′', 'No', '<b>Same as RNA, except T → U</b>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Gene-related vocabulary.</b> A <b>cistron</b> is a segment of DNA coding for one polypeptide. Structural genes are <b>monocistronic</b> (mostly eukaryotes) or <b>polycistronic</b> (mostly prokaryotes). Eukaryotic genes are <b>split</b>: coding <b>exons</b> (appear in mature RNA) interrupted by non-coding <b>introns</b> (removed before translation).',
      },
      {
        t: 'p',
        html: '<b>The genetic code: salient features</b> (the list Boards ask you to reproduce):<br>• <b>Triplet:</b> three bases = one codon; 4<sup>3</sup> = 64 codons.<br>• <b>61 sense + 3 stop:</b> 61 codons specify amino acids; <b>3 stop (nonsense) codons</b>, UAA (ochre), UAG (amber), UGA (opal), terminate the chain.<br>• <b>Start codon:</b> <b>AUG</b> has a dual role: it codes for <b>methionine</b> and signals initiation.<br>• <b>Degenerate:</b> most amino acids are specified by more than one codon (e.g. serine has six). Synonymous codons usually differ only in the <b>third base</b>.<br>• <b>Unambiguous & specific:</b> one codon codes for one and only one amino acid.<br>• <b>Non-overlapping</b> and <b>commaless:</b> read continuously, one triplet after another, with no base shared between codons and no punctuation.<br>• <b>Nearly universal:</b> the same codon means the same amino acid in (almost) all organisms, which is exactly why bacteria can be made to produce human insulin.<br>• The tolerance at the third base is the basis of Crick’s wobble idea: pairing at the codon’s third position is loose, so one tRNA can read several synonymous codons.',
      },
      {
        t: 'p',
        html: '<b>RNA vs DNA in transcription:</b> the new RNA uses <b>ribose</b> and <b>uracil</b> (not deoxyribose/thymine), is <b>single-stranded</b>, and is <b>disposable</b>: it is the working copy, not the archive.',
      },
      { t: 'fig', id: 'b12-05-fig-5.4' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>3.1 Transcription in prokaryotes: one enzyme, three steps</b>' },
      {
        t: 'p',
        html: 'Bacteria use a <b>single DNA-dependent RNA polymerase</b> for all RNA types (mRNA, tRNA, rRNA), in three stages, each with a clear logic:<br>1. <b>Initiation.</b> RNA polymerase binds the promoter, helped by the <b>initiation factor sigma (σ)</b>. <b>Reason:</b> the polymerase alone cannot reliably find the start site; σ guides it to the promoter.<br>2. <b>Elongation.</b> The polymerase “walks” along the template in the 3′ → 5′ direction, adding complementary ribonucleotides to the 3′ end of the growing RNA (so the RNA grows 5′ → 3′). A transcription bubble travels with it. Once underway, σ <b>is released</b>: its job (finding the start) is done.<br>3. <b>Termination.</b> At the terminator, the <b>termination factor rho (ρ)</b> helps the nascent RNA and the polymerase fall off. Intrinsic terminators form a GC-rich hairpin in the RNA that destabilises the complex.',
      },
      {
        t: 'p',
        html: 'In a bacterium <b>the mRNA needs no processing</b>, and with no nuclear membrane translation can begin while transcription is still running: both happen in the same compartment.',
      },
      { t: 'p', html: '<b>3.2 Transcription in eukaryotes: two extra complications</b>' },
      {
        t: 'p',
        html: 'Eukaryotic transcription follows the same backbone but adds two layers of complexity:',
      },
      {
        t: 'table',
        title: '(a) Three nuclear RNA polymerases, each with its own products',
        head: ['Polymerase', 'Transcribes'],
        rows: [
          ['RNA polymerase I', 'rRNAs (28S, 18S, 5.8S)'],
          ['RNA polymerase II', 'precursor of mRNA: <b>heterogeneous nuclear RNA (hnRNA)</b>'],
          ['RNA polymerase III', 'tRNA, 5S rRNA, snRNAs (the NCERT assignment)'],
        ],
      },
      {
        t: 'p',
        html: '<b>(b) The primary transcript needs processing.</b> The hnRNA contains both exons and introns and is not yet usable. Three modifications convert it to mature mRNA:<br>1. <b>Capping</b>: an unusual nucleotide, <b>7-methylguanosine (m<sup>7</sup>G),</b> is added to the <b>5′ end.</b><br>2. <b>Splicing</b>: introns are excised and exons joined in order (carried out by the <b>spliceosome</b>, which bacteria lack). <b>Reason:</b> only exon information should reach the ribosome.<br>3. <b>Tailing</b>: <b>adenylate (poly-A) residues</b> are added to the <b>3′ end</b>, in a <b>template-independent</b> manner.',
      },
      {
        t: 'p',
        html: 'The fully processed mRNA is then exported from the nucleus to the cytoplasm for translation.',
      },
      { t: 'fig', id: 'b12-05-fig-5.5' },
      { t: 'p', html: '<b>3.3 Cracking the genetic code: the logic, not just the names</b>' },
      {
        t: 'p',
        html: 'The code was deciphered in the early 1960s. <b>George Gamow</b> reasoned on theoretical grounds that the code must be a <b>triplet</b> (nothing smaller can encode 20 amino acids from 4 bases). <b>Marshall Nirenberg and Heinrich Matthaei (1961)</b> gave the first experimental proof using a <b>cell-free protein-synthesis system</b>: synthetic poly-U RNA produced a polypeptide of a single amino acid, fixing one codon’s meaning. <b>Har Gobind Khorana</b> then chemically synthesised RNA with defined, repeating base sequences, allowing the rest of the codons to be assigned. (The enzyme <b>polynucleotide phosphorylase</b>, the “Severo Ochoa enzyme,” made template-independent RNA of known composition possible.)',
      },
      {
        t: 'p',
        html: 'The link to disease makes the code memorable. A <b>point mutation</b> changes a single base pair: in <b>sickle-cell anaemia</b>, a single change in the β-globin gene swaps <b>glutamate for valine</b> (GAG → GUG in the mRNA; GAG → GTG in the coding strand of the gene): one codon, one amino acid, a whole disease. A <b>frameshift mutation</b> (insertion or deletion of bases not in multiples of three) shifts the reading frame, garbling every codon downstream, which is itself the classic evidence that the code is read as triplets from a fixed starting point without commas.',
      },
      {
        t: 'p',
        html: 'Finally, the code needs a translator at the bench: <b>tRNA, the adapter molecule.</b> Crick predicted such a molecule must exist: one end reading the codon, the other carrying the matching amino acid. tRNA has a clover-leaf secondary structure (an anticodon loop that reads the codon, an amino-acid acceptor end, plus loops that dock it to the ribosome and to its charging enzyme), and folds into an inverted-L in three dimensions. (The full translation cycle is the subject of the next topic; here it matters only as the device that reads the code.)',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'Given the coding strand of a transcription unit as 5′–ATGCAGTAC–3′, write (i) the template strand and (ii) the mRNA transcribed from it. Justify which strand the RNA resembles.',
        steps: [
          '<b>Model answer.</b> (i) Template strand is complementary and antiparallel: 3′–TACGTCATG–5′.<br>(ii) RNA is complementary to the template (T→U), read 5′ → 3′: 5′–AUGCAGUAC–3′.',
          '<b>Justification:</b> the mRNA has the <b>same base sequence as the coding strand</b>, with <b>U replacing T</b>, because the polymerase reads the template (3′ → 5′) and synthesises RNA antiparallel to it, which makes the product a copy of the other (coding) strand.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match the factor/enzyme to its role.<br><b>Column I:</b> A. Sigma (σ) factor; B. Rho (ρ) factor; C. Capping; D. Splicing.<br><b>Column II:</b> 1. Adds m<sup>7</sup>G to the 5′ end; 2. Initiation of transcription; 3. Removes introns; 4. Termination of transcription.',
        steps: [
          '<b>Reasoning shortcut:</b> Greek letters bracket the process: σ <b>s</b>tarts, ρ (rho ≈ “the end”) <b>r</b>eleases. Then the two 5′/3′ tailoring jobs: cap goes on the <b>5′ head</b>, splicing cleans the <b>middle</b>.',
        ],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> In a transcription unit, the strand with 3′ → 5′ polarity acts as the template strand. <b>Reason (R):</b> DNA-dependent RNA polymerase catalyses polymerisation only in the 5′ → 3′ direction.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          'The polymerase can only build RNA 5′ → 3′, so it must read its template 3′ → 5′, which is exactly why the 3′ → 5′ strand is chosen as template. R is the direct cause of A. Students who pick <b>(b)</b> know both facts but treat them as unrelated trivia; the whole point is the causal link.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · codon reasoning',
        q: 'An mRNA contains <b>1500 nucleotides</b> in its coding region (start codon to stop codon inclusive). (i) How many codons does it contain? (ii) What is the maximum number of amino acids in the resulting polypeptide? (iii) If a single base is <b>deleted</b> at position 30, predict the effect compared with a deletion of <b>three consecutive bases</b> at the same point.',
        steps: [
          '<b>Solution.</b> (i) Codons = <frac><num>1500</num><den>3</den></frac> = 500 codons.',
          '(ii) One codon is the <b>stop codon</b> (codes no amino acid), so the polypeptide has at most 500 − 1 = 499 amino acids.',
          '(iii) A <b>single-base deletion</b> is a <b>frameshift</b>: every codon downstream of position 30 is misread, almost always producing a non-functional protein (and often a premature stop). A <b>three-base deletion</b> removes three bases and keeps the reading frame intact downstream: the protein loses about one amino acid and is usually far less affected. This contrast is the experimental evidence that the code is a comma-less triplet.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the two additional complexities of transcription in eukaryotes that are absent in prokaryotes.',
            a: '(i) Three nuclear RNA polymerases (I, II, III); (ii) the primary transcript (hnRNA) contains introns and requires processing (splicing, capping, tailing).',
          },
          {
            q: '[CUET] State the unusual nucleotide added during capping and the end of the mRNA at which it is added.',
            a: '<b>7-methylguanosine (m<sup>7</sup>G)</b> at the <b>5′ end</b>.',
          },
          {
            q: '[NEET] Which RNA polymerase transcribes hnRNA in eukaryotes, and what does RNA polymerase I transcribe?',
            a: 'RNA polymerase <b>II</b> → hnRNA; RNA polymerase <b>I</b> → rRNAs (28S, 18S, 5.8S).',
          },
          {
            q: '[NEET] Why can a single tRNA often read more than one codon for the same amino acid?',
            a: 'Because of <b>degeneracy</b> plus loose (wobble) pairing at the codon’s third base, so one anticodon can pair with several synonymous codons.',
          },
          {
            q: '[NEET high-difficulty] Explain why a frameshift mutation, but not a point substitution, is regarded as proof that the genetic code is read in non-overlapping triplets without punctuation.',
            a: 'A frameshift shifts the reading frame, corrupting every downstream codon: only possible if codons are fixed-length, contiguous and comma-less; a point substitution changes just one codon and so cannot test the frame.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The base sequence of the coding strand of a gene differs from that of the mRNA transcribed from it only in that:',
        opts: [
          { label: 'the mRNA has thymine where the coding strand has uracil', nudge: '<b>(a)</b> reverses it (a very common slip).' },
          { label: 'the mRNA has uracil where the coding strand has thymine', nudge: null },
          {
            label: 'the two are fully complementary',
            nudge: '<b>(c)</b> describes the mRNA–template relationship, not the coding strand.',
          },
          { label: 'the mRNA is identical including the sugar', nudge: '<b>(d)</b> ignores that RNA uses ribose, not deoxyribose.' },
        ],
        correct: 1,
        solution: 'mRNA copies the coding strand’s sequence but uses <b>U in place of T</b>.',
      },
      {
        t: 'mcq',
        q: 'The number of codons that do not code for any amino acid is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> confuses “stop codons” with the single start codon.' },
          { label: '3', nudge: null },
          { label: '20', nudge: '<b>(c) 20</b> is the number of amino acids.' },
          {
            label: '61',
            nudge: '<b>(d) 61</b> is the number that do code (the trap for students who invert the question).',
          },
        ],
        correct: 1,
        solution: '<b>3</b>: the stop codons UAA, UAG, UGA.',
      },
      {
        t: 'mcq',
        q: 'Sigma (σ) factor is associated with which step of prokaryotic transcription?',
        opts: [
          { label: 'Elongation', nudge: '<b>(a)</b> is what the core enzyme does after σ leaves.' },
          { label: 'Termination', nudge: '<b>(b)</b> is rho’s (ρ) job: the classic σ/ρ mix-up.' },
          { label: 'Initiation', nudge: null },
          { label: 'Splicing', nudge: '<b>(d)</b> doesn’t occur in prokaryotes at all (no spliceosome).' },
        ],
        correct: 2,
        solution: '<b>Initiation.</b> σ guides RNA polymerase to the promoter and is released once elongation begins.',
      },
      {
        t: 'mcq',
        q: 'Which feature of the genetic code explains why a given amino acid may be encoded by several codons?',
        opts: [
          {
            label: 'Unambiguous',
            nudge: '<b>(a) Unambiguous</b> is the opposite-direction property (one codon → one amino acid) and is the intended trap.',
          },
          { label: 'Degenerate', nudge: null },
          {
            label: 'Non-overlapping',
            nudge: '<b>(c)</b> concerns how codons are read, not how many code an amino acid.',
          },
          { label: 'Universal', nudge: '<b>(d)</b> is about codes meaning the same thing across species.' },
        ],
        correct: 1,
        solution: '<b>Degenerate.</b> Degeneracy = one amino acid, multiple codons.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Template vs coding mix-up.</b> Lock it: RNA = <b>coding strand with T→U</b>; the <b>template</b> is the one actually read (the complementary 3′ → 5′ strand). If a question gives you the coding strand, just swap T→U to get the mRNA: no complementation needed.',
          '<b>Confusing “degenerate” with “ambiguous.”</b> Degenerate = many codons → one amino acid (true). Ambiguous = one codon → many amino acids (false; the code is unambiguous). Examiners pair these deliberately.',
          '<b>σ vs ρ.</b> σ = <b>start</b> (sigma, initiation); ρ = <b>stop</b> (rho, termination). Mixing them is a very common transcription error.',
          '<b>Mislabelling stop-codon nicknames.</b> The safe pairing is <b>UAA = ochre, UAG = amber, UGA = opal</b>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “how many codons / amino acids” question, divide nucleotides by 3 for codons, then subtract 1 for the stop codon to get the maximum amino acids. Two operations, done.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Transcription unit',
            note: 'promoter (5′) – structural gene – terminator (3′). Promoter position defines template vs coding strand.',
          },
          { f: 'Strands', note: 'template 3′ → 5′ (read); coding 5′ → 3′ = <b>same as RNA, T→U</b>.' },
          {
            f: 'Prokaryote',
            note: 'one RNA polymerase; σ = <b>initiation</b>, ρ = <b>termination</b>; no processing; transcription + translation coupled.',
          },
          {
            f: 'Eukaryote',
            note: '<b>Pol I → rRNA (28S,18S,5.8S); Pol II → hnRNA; Pol III → tRNA, 5S rRNA, snRNA.</b> hnRNA → <b>splicing + capping (m<sup>7</sup>G, 5′) + tailing (poly-A, 3′)</b> → mRNA.',
          },
          {
            f: 'Genetic code',
            note: '<b>64 codons = 61 sense + 3 stop (UAA/UAG/UGA); AUG = start = Met.</b> Features: triplet, degenerate, unambiguous, non-overlapping, comma-less, nearly universal, linear.',
          },
          {
            f: 'Mutations',
            note: 'point (sickle-cell, GAG → GUG, Glu→Val); frameshift (insert/delete ⇒ proof of comma-less triplet code).',
          },
        ],
        aids: [
          '<b>Mnemonic (code features):</b> “Try Doing Unambiguous, Non-overlapping, Universal Codes Loyally” → <b>T</b>riplet, <b>D</b>egenerate, <b>U</b>nambiguous, <b>N</b>on-overlapping, <b>U</b>niversal, <b>C</b>ommaless, <b>L</b>inear.',
        ],
      },
    ],
  },
];
