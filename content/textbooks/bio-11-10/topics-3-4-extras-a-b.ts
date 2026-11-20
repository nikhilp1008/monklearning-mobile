import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 10, Cell Cycle and Cell Division: Topics 03 and 04 and Additional topics A
 * and B, word for word from the Class 11 Biology Master Reference (pp. 606–623).
 *
 * Topic 03 Meiosis II & Significance, pp. 606–612 (Figures 10.6 and 10.7, captions on p. 608,
 * drawings on p. 609, set where the captions stand). Topic 04 Chapter Capstone: The Big Picture &
 * Mitosis vs Meiosis, pp. 613–616 (Figure 10.8, caption p. 613, drawing p. 614). Its parts are the
 * book's own six section headings. The shared opening of "Cell Cycle and Cell Division:
 * Additional Topics" (p. 617) heads Additional topic A's Introduction. A Checkpoint Regulation
 * and the Cyclin-CDK System, pp. 617–620 (answers end at the top of p. 620); B Full Chromosome
 * and DNA Accounting Through Meiosis, pp. 620–623 (practice question 5 and the answers run on to
 * the top of p. 623, where Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on
 * one line, scientific names italic, names above the genus upright. This book prints (a) to (d)
 * for its options here and they are kept. "Sub-topic" is "Topic", "Addendum A–E" is "Additional
 * topic A–E".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 606–612 ─────────────────────────
  {
    n: '03',
    title: 'Meiosis II & Significance',
    kalam: 'The reductional Meiosis I plus the equational Meiosis II convert one diploid cell into four haploid cells.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards ask how Meiosis II differs from Meiosis I and from mitosis, and the significance of meiosis (3–5 marks). CUET drills single facts: what separates in anaphase II, how many cells result. NEET loves the chromosome-versus-chromatid counting at each stage, the “reductional then equational” sequence, and significance as a “which of these / all of the above” item, plus assertion–reason on why a second division with no replication is needed. Reliably 1–2 questions per year (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'At the end of Meiosis I we were left with two cells, each haploid in chromosome number, but with a twist that bothers many students: every chromosome in those cells still carries <b>two sister chromatids</b>, joined at the centromere. The cell has halved its chromosome count but has not yet separated the duplicated copies. Meiosis II exists precisely to finish that unfinished business.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a sweet-shop owner during Diwali who has prepared two large boxes, each holding paired kaju katli pieces stuck together two-by-two. Meiosis I sorted the sweets into two boxes (reducing the “kinds” by half); Meiosis II now goes through each box and snaps every joined pair apart into single pieces, ready to be handed out individually. Crucially, the shopkeeper does <b>not</b> make any new sweets in between: no fresh batch is cooked. That “no new cooking” step is the single most important feature of meiosis: between Meiosis I and Meiosis II there is <b>no DNA replication</b>. The chromosomes were already duplicated once, before Meiosis I; that one duplication serves both divisions.',
      },
      {
        t: 'p',
        html: 'This is why Meiosis II is called the <b>equational division</b>: like mitosis, it separates sister chromatids and keeps the chromosome number unchanged across it. So the full story of meiosis is: one round of DNA replication, followed by two divisions, the first <b>reductional</b> (halving the chromosome number), the second <b>equational</b> (separating the chromatids). One diploid parent cell (a meiocyte) ultimately yields <b>four haploid cells</b>.',
      },
      {
        t: 'p',
        html: 'And here is the pay-off: the <b>significance</b> of the whole process. Meiosis does two indispensable jobs for any organism that reproduces sexually. It <b>halves</b> the chromosome number when making gametes, so that fertilisation can restore the full number without it doubling every generation, keeping the species’ chromosome count constant over time. And through <b>crossing over</b> (in Meiosis I) together with the random, independent way the chromosome pairs line up, it <b>reshuffles</b> the genetic material, producing offspring that are genetically varied rather than identical.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>No S phase before Meiosis II.</b> The brief stage between the two divisions (interkinesis) is not a true interphase in the replicating sense: assuming DNA doubles again here is the classic error.<br>• Meiosis II is “mitosis-like” only in being equational; it begins with <b>haploid</b> cells, whereas mitosis can begin with diploid or haploid cells.<br>• The clean “one meiocyte → four functional cells” outcome holds for microspore (pollen) formation and for sperm formation; in megaspore formation in most flowering plants only one of the four megaspores survives, and in animal egg formation the yield differs, but those belong to the Reproduction chapters, not here.',
      },

      { t: 'part', title: 'Key stages, events and definitions' },
      {
        t: 'def',
        term: 'Meiosis (overview)',
        html: 'one DNA replication followed by <b>two</b> nuclear divisions: <b>Meiosis I (reductional)</b> and <b>Meiosis II (equational)</b>, producing four haploid cells from one diploid meiocyte.',
      },
      {
        t: 'def',
        term: 'Interkinesis',
        html: 'the short stage between Meiosis I and Meiosis II. It is brief and, critically, is <b>not accompanied by DNA replication</b>.',
      },
      { t: 'p', html: '<b>Stages of Meiosis II:</b> Prophase II → Metaphase II → Anaphase II → Telophase II.' },
      {
        t: 'defgrid',
        title: 'Stage and defining event',
        rows: [
          { k: 'Prophase II', v: 'Begins immediately after interkinesis; nuclear envelope (if reformed) breaks down again, chromosomes recondense, spindle reforms. Brief.' },
          { k: 'Metaphase II', v: 'Chromosomes (each with two chromatids) align at the equatorial plate; spindle fibres attach to kinetochores of the sister chromatids.' },
          { k: 'Anaphase II', v: 'Centromeres split; sister chromatids separate and move as daughter chromosomes to opposite poles.' },
          { k: 'Telophase II', v: 'A nucleus re-forms at each pole of each of the two cells, so four haploid nuclei form; with cytokinesis the tally is <b>four haploid cells</b>.' },
        ],
      },
      { t: 'p', html: '<b>Key definitions:</b>' },
      {
        t: 'def',
        term: 'Equational division',
        html: 'a division in which the chromosome number is conserved across it (sister chromatids separate); Meiosis II and mitosis are equational.',
      },
      {
        t: 'def',
        term: 'Reductional division',
        html: 'a division that halves the chromosome number (homologues separate); Meiosis I is reductional.',
      },
      {
        t: 'def',
        term: 'Independent assortment',
        html: 'the random orientation of each bivalent at metaphase I, so that maternal and paternal chromosomes are distributed independently into the daughter cells; together with crossing over, a source of genetic variation.',
      },
      {
        t: 'p',
        html: '<b>Chromosome and chromatid bookkeeping (a classic counting question):</b><br>• After <b>Meiosis I</b>: chromosome number = haploid (n), but <b>each chromosome still has 2 chromatids</b>. (In humans: 23 chromosomes, 46 chromatids.)<br>• After <b>Meiosis II</b>: chromosome number = haploid (n), <b>each chromosome now has 1 chromatid</b>. DNA amount is also halved relative to the diploid parent cell in G<sub>1</sub> (2C to 1C).',
      },
      {
        t: 'p',
        html: '<b>Significance of meiosis (three points):</b><br>1. <b>Halves the chromosome number</b> during gamete/spore formation (2n → n).<br>2. <b>Maintains chromosome-number constancy</b> across generations of sexually reproducing organisms (halving balances the doubling at fertilisation).<br>3. <b>Generates genetic variation</b> through crossing over and independent assortment.',
      },
      {
        t: 'p',
        html: '<b>Note:</b> The completion of meiosis in the formation of human eggs (the secondary oocyte arresting at metaphase II until fertilisation, and the formation of polar bodies) is studied in detail in the <b>Human Reproduction</b> chapter and is not part of this chapter’s scope.',
      },

      { t: 'part', title: 'Phase-by-phase process walkthrough' },
      { t: 'p', html: 'We begin from the two haploid cells produced by Meiosis I, each chromosome carrying two sister chromatids.' },
      {
        t: 'p',
        html: '<b>Step 1: Interkinesis.</b> A short pause. The cell does <b>not</b> replicate its DNA: there is nothing to copy, because the chromosomes are already duplicated. Why no replication? If the DNA doubled again here, Meiosis II would not reduce anything and meiosis would fail to make haploid gametes. This point underlies many of the chapter’s assertion–reason questions.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Prophase II.</b> The chromosomes, which may have partly relaxed during interkinesis, recondense; the nuclear envelope breaks down again and a fresh spindle assembles in each cell. This stage is brief: there is no pairing, no synapsis, no crossing over (all of that was Meiosis I).',
      },
      {
        t: 'p',
        html: '<b>Step 3: Metaphase II.</b> The chromosomes line up singly along the equatorial plate of each cell, and spindle fibres attach to the kinetochores of the two sister chromatids of each chromosome, exactly as in mitotic metaphase. Note the contrast with metaphase I, where bivalents (paired homologues) aligned; here it is individual chromosomes.',
      },
      { t: 'fig', id: 'b11-10-fig-10.6' },
      {
        t: 'p',
        html: '<b>Step 4: Anaphase II.</b> Now the centromeres finally split, and the sister chromatids, each now a full daughter chromosome, are pulled to opposite poles. This is the equational separation that Meiosis I deliberately left undone.',
      },
      {
        t: 'p',
        html: '<b>Step 5: Telophase II.</b> A nuclear envelope reforms around each of the four chromosome sets, the chromosomes decondense, and cytokinesis completes the division. The end product of the whole of meiosis: <b>four haploid cells</b>, each with half the parental chromosome number and (because of crossing over and independent assortment) a unique genetic combination.',
      },
      { t: 'fig', id: 'b11-10-fig-10.7' },
      {
        t: 'p',
        html: '<b>Meiosis II versus mitosis: why they look alike but are not the same.</b> Both are equational and both separate sister chromatids by splitting centromeres, so a single snapshot of metaphase or anaphase can look identical. The differences are in the starting material and history: Meiosis II begins with <b>haploid</b> cells whose chromosomes are products of crossing over, whereas mitosis begins with cells (often diploid) whose chromatids are exact copies; and Meiosis II is <b>never preceded by DNA replication</b>, whereas every mitosis is preceded by an S phase. Recognising that “equational ≠ mitosis” is a useful discriminator.',
      },
      {
        t: 'p',
        html: '<b>Tracking the DNA, not just the chromosomes.</b> A subtlety that NEET often exploits is the difference between chromosome number and DNA amount. Take a meiocyte that has finished its pre-meiotic S phase: in G<sub>2</sub> it holds a doubled DNA content, conventionally written <b>4C</b>. Meiosis I separates the homologues, so each of the two resulting cells has <b>2C</b>. Meiosis II then separates the sister chromatids, leaving each of the four final cells with <b>1C</b>, a quarter of the G<sub>2</sub> value and half of the original diploid (2C) cell. The key correction to a widespread misconception: after the complete process it is not only the chromosome number that is halved, <b>the DNA amount is reduced too</b>, because the chromatids that carried the duplicate DNA have been parcelled out into separate cells. So a gamete with C picograms of DNA implies a diploid body cell of 2C, and a meiocyte poised in G<sub>2</sub> of 4C, a chain of reasoning that turns a one-line data point into a full numerical question.',
      },
      {
        t: 'p',
        html: '<b>Putting the significance together.</b> The reductional Meiosis I plus the equational Meiosis II convert one diploid cell into four haploid cells. That halving is what makes sexual reproduction sustainable across generations: gametes carry n, fertilisation restores 2n, and the chromosome number neither grows nor shrinks over time. Layered on top, crossing over and independent assortment ensure those four cells are genetically distinct, the raw material of biological variation. This increase in genetic variability from one generation to the next is, in fact, why meiosis matters for <b>evolution</b>: the variation it generates is what natural selection acts upon.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'A diploid plant meiocyte has 2n = 18 chromosomes. State, for one resulting cell, the chromosome number and the number of chromatids per chromosome (a) at the end of Meiosis I, and (b) at the end of Meiosis II.',
        steps: [
          '<b>Solution.</b><br>• (a) End of Meiosis I (reductional): chromosome number = n = <b>9</b>; each chromosome still has <b>2 chromatids</b> (centromeres have not split).<br>• (b) End of Meiosis II (equational): chromosome number = <b>9</b>; each chromosome now has <b>1 chromatid</b> (centromeres have split, chromatids separated).',
          '<b>Presentation point:</b> track chromosome number and chromatids per chromosome in two separate columns: Meiosis I changes the number, Meiosis II changes the chromatids.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: 'How many meiocytes, each undergoing one complete meiosis, are required to produce 60 pollen grains?',
        steps: [
          '<b>Solution.</b> One complete meiosis of a single meiocyte (pollen mother cell) yields <b>4</b> haploid cells (a microspore tetrad → pollen grains).',
          'Number of meiocytes = <frac><num>60</num><den>4</den></frac> = 15.',
          '<b>Trap to avoid:</b> this 1-to-4 ratio holds for pollen (microspore) and sperm formation; do not apply it blindly to megaspore formation in flowering plants (one functional megaspore) or to animal egg formation.',
        ],
        ans: '15 meiocytes (15 complete meioses).',
      },
      {
        t: 'ex',
        tag: 'NEET level, match-the-column',
        q: 'Match Column I with Column II.<br>Column I: A. Anaphase I, B. Anaphase II, C. Meiosis I, D. Meiosis II<br>Column II: (i) Sister chromatids separate, (ii) Homologous chromosomes separate, (iii) Equational division, (iv) Reductional division',
        steps: [
          '<b>Solution.</b> A → (ii) Anaphase I separates homologues. B → (i) Anaphase II separates sister chromatids. C → (iv) Meiosis I is reductional. D → (iii) Meiosis II is equational.',
        ],
        ans: 'A-ii, B-i, C-iv, D-iii.',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, assertion–reason',
        q: 'Assertion (A): No DNA replication occurs between Meiosis I and Meiosis II. Reason (R): The chromosomes entering Meiosis II already consist of two sister chromatids each. Choose: (a) both true, R correct explanation; (b) both true, R not the explanation; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Solution.</b> <b>A is true:</b> interkinesis lacks an S phase. <b>R is true:</b> the chromatids were produced by the single replication that preceded Meiosis I, so each chromosome enters Meiosis II already duplicated. And R is exactly why A holds: since the duplicated chromatids are already present and only need separating, no further replication is required (indeed, replicating again would defeat the reduction).',
        ],
        ans: '(a) both true and R is the correct explanation.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is Meiosis II referred to as an equational division?',
            a: 'Because the chromosome number is conserved across it: sister chromatids separate, so each daughter cell keeps the haploid number it had after Meiosis I.',
          },
          {
            q: '[CUET] Name the stage of meiosis in which sister chromatids finally separate.',
            a: '<b>Anaphase II.</b>',
          },
          {
            q: '[NEET] A meiocyte has a DNA content of 4C in its G<sub>2</sub> phase (before Meiosis I). What is the DNA content of each cell at the end of (i) Meiosis I and (ii) Meiosis II?',
            a: '(i) End of Meiosis I: <b>2C</b> per cell; (ii) End of Meiosis II: <b>1C</b> per cell.',
          },
          {
            q: '[NEET] State the two events of meiosis responsible for generating genetic variation, and the stage at which each occurs.',
            a: '<b>Crossing over</b> (Pachytene of Meiosis I) and <b>independent assortment</b> of bivalents (Metaphase I).',
          },
          {
            q: '[NEET, assertion–reason] Assertion: Meiosis II resembles mitosis. Reason: Both involve separation of homologous chromosomes. Evaluate. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '<b>(c) A is true, R is false:</b> Meiosis II does resemble mitosis (both equational), but both separate sister chromatids, not homologous chromosomes; homologue separation is the job of Meiosis I.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During anaphase II of meiosis:',
        opts: [
          { label: 'Homologous chromosomes separate', nudge: '<b>(a)</b> describes anaphase I.' },
          { label: 'Sister chromatids separate after centromere splitting', nudge: null },
          { label: 'Bivalents are formed', nudge: '<b>(c)</b> Bivalents form in zygotene of prophase I.' },
          { label: 'Crossing over occurs', nudge: '<b>(d)</b> Crossing over is a pachytene (Meiosis I) event.' },
        ],
        correct: 1,
        solution: 'Anaphase II splits centromeres and pulls sister chromatids apart: the equational separation. All three are Meiosis-I distractors planted to catch students who blur the two divisions.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is the significance of meiosis?',
        opts: [
          { label: 'Halving the chromosome number', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are each individually true but incomplete: choosing any single one ignores the others.' },
          { label: 'Maintaining chromosome-number constancy across generations', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are each individually true but incomplete: choosing any single one ignores the others.' },
          { label: 'Producing genetic variation', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> are each individually true but incomplete: choosing any single one ignores the others.' },
          { label: 'All of the above', nudge: null },
        ],
        correct: 3,
        solution: '<b>(d) All of the above.</b> Meiosis halves the number, that halving keeps the count constant once fertilisation restores it, and crossing over plus independent assortment create variation. “All of the above” is correct precisely because the three are complementary, not alternatives.',
      },
      {
        t: 'mcq',
        q: 'At the end of Meiosis I in a human cell, the number of chromosomes and chromatids respectively is:',
        opts: [
          { label: '23 chromosomes, 23 chromatids', nudge: '<b>(a)</b> wrongly assumes chromatids have already separated (that is after Meiosis II).' },
          { label: '46 chromosomes, 46 chromatids', nudge: '<b>(b)</b> and <b>(d)</b> keep the diploid number, ignoring the reduction in Meiosis I.' },
          { label: '23 chromosomes, 46 chromatids', nudge: null },
          { label: '46 chromosomes, 92 chromatids', nudge: '<b>(b)</b> and <b>(d)</b> keep the diploid number, ignoring the reduction in Meiosis I.' },
        ],
        correct: 2,
        solution: '<b>(c) 23 chromosomes, 46 chromatids.</b> Meiosis I halves the chromosome number to 23, but each chromosome still carries two chromatids (23 × 2 = 46 chromatids).',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): The genetic variation among the four cells produced by meiosis arises during Meiosis I. Reason (R): Crossing over and independent assortment both occur in Meiosis I.',
        opts: [
          { label: 'Both true, R correct explanation', nudge: null },
          { label: 'Both true, R not the explanation', nudge: '<b>(b)</b> wrongly severs a genuine causal link.' },
          { label: 'A true, R false', nudge: '<b>(c)</b> rejects a true statement in R: likely chosen by students who mistakenly place independent assortment in Meiosis II.' },
          { label: 'A is false, R is true', nudge: '<b>(d)</b> rejects a true statement in A: likely chosen by students who mistakenly place the variation in Meiosis II.' },
        ],
        correct: 0,
        solution: '<b>(a).</b> A is true (the variation is generated in Meiosis I), R is true (crossing over occurs in pachytene and independent assortment at metaphase I: both Meiosis I events), and R is the direct reason for A. Meiosis II makes no new combinations: it only shares out the chromatids, already recombined in Meiosis I, among the four cells.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming DNA replicates before Meiosis II.</b> It does not: interkinesis has no S phase. The chromosomes are already duplicated from before Meiosis I.',
          '<b>Mixing up what separates in anaphase I versus anaphase II.</b> Anaphase I = homologous chromosomes; anaphase II = sister chromatids. This pair is a classic distinction in this chapter.',
          '<b>Calling Meiosis II “the same as mitosis.”</b> Both are equational, but Meiosis II begins with haploid cells and is never preceded by replication.',
          '<b>Thinking only the chromosome number is halved.</b> After Meiosis II, both the chromosome number and the DNA amount are reduced to half of the diploid parent cell in G<sub>1</sub> (2C to 1C).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “how many divisions / how many cells” problem, anchor on <b>one meiosis → four haploid cells</b> (for pollen, that is microspores). Number of meiocytes = required haploid cells (pollen grains, or sperm) ÷ 4. And for stage-counting, remember the rhythm “<b>reduce, then split</b>”: Meiosis I reduces the number, Meiosis II splits the chromatids.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Meiosis = 1 replication + 2 divisions → 4 haploid cells. Meiosis I = reductional (2n → n); Meiosis II = equational (chromatids separate).</b>', note: '' },
          { f: '<b>Interkinesis:</b> brief, between the two divisions, <b>NO DNA replication</b>.', note: '' },
          { f: '<b>Meiosis II stages:</b> Prophase II (recondense, spindle reforms) → Metaphase II (single chromosomes at equator) → Anaphase II (centromeres split, chromatids separate) → Telophase II (four haploid nuclei).', note: '' },
          { f: '<b>Counting:</b> after Meiosis I → n chromosomes, 2 chromatids each (human: 23 and 46); after Meiosis II → n chromosomes, 1 chromatid each; DNA also halved relative to the diploid parent cell in G<sub>1</sub> (2C to 1C).', note: '' },
          { f: '<b>Meiosis II vs mitosis:</b> both equational, but Meiosis II starts haploid and has no preceding S phase.', note: '' },
          { f: '<b>Significance (3):</b> (1) halves chromosome number; (2) maintains chromosome-number constancy across generations; (3) generates variation via crossing over + independent assortment.', note: '' },
        ],
        aids: [
          '<b>Memory aids:</b> “reduce, then split” (Meiosis I then II); variation sources: “cross & assort.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 613–616 ─────────────────────────
  {
    n: '04',
    title: 'Chapter Capstone: The Big Picture & Mitosis vs Meiosis',
    kalam: 'A cell never divides at random; the kind of division depends on the cell and its role.',
    blocks: [
      { t: 'part', title: 'Where each division happens: the life-cycle context' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> “Differentiate mitosis from meiosis” is one of the most reliably asked questions across <b>CBSE Boards</b> (3–5 marks) and <b>NEET</b> (as match-the-column or pick-the-difference) (the book’s estimate from past papers, not official figures). The haploid/diploid life-cycle framing underpins how every cell-division question is set. Treat this section as the integration that ties the whole chapter together.',
      },
      {
        t: 'p',
        html: 'A cell never divides at random; the kind of division depends on the cell and its role. One question decides everything: Is the cell part of the body’s growth/maintenance, or part of making the next generation?',
      },
      {
        t: 'p',
        html: '<b>Mitosis</b> runs in the body’s <b>somatic cells</b>, in dividing <b>germ-line</b> cells (before meiosis) and in the <b>zygote</b>, and in the <b>meristematic tissues</b> of plants (apical and lateral meristems). Its job is growth, repair, and replacement, producing daughter cells genetically identical to the parent (diploid in a diploid body) so the body stays one consistent genome.',
      },
      {
        t: 'p',
        html: '<b>Meiosis</b> runs in specialised diploid cells called <b>meiocytes</b> (the gamete mother cells: germ-line cells in animals, spore mother cells in plants); a haploid cell has no homologous pairs to synapse. Its job is to make <b>haploid</b> gametes or spores, halving the chromosome number so that the next generation does not double its chromosomes at fertilisation.',
      },
      {
        t: 'p',
        html: 'The two are stitched together by <b>fertilisation</b>: a haploid male gamete (n) fuses with a haploid female gamete (n) to restore the diploid (2n) zygote, which then grows by mitosis into a new diploid body. So in a diplontic organism such as a human, the life cycle alternates between a <b>diploid phase</b> (the body, built by mitosis) and a <b>haploid phase</b> (the gametes, made by meiosis).',
      },
      { t: 'fig', id: 'b11-10-fig-10.8' },
      {
        t: 'p',
        html: 'This is the master logic: <b>meiosis halves, fertilisation restores, mitosis multiplies.</b> Keep it in mind and no counting question can trip you up.',
      },

      { t: 'part', title: 'Mitosis vs meiosis: the master comparison' },
      { t: 'p', html: 'This single table is the heart of “differentiate” questions. Learn it as a unit.' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Number of divisions', 'One', 'Two (Meiosis I + Meiosis II)'],
          ['Rounds of DNA replication', 'One (before the single division)', 'One (before Meiosis I only; none before Meiosis II)'],
          ['Type of cell it occurs in', 'Somatic cells, dividing germ-line cells (before meiosis) and the zygote; both haploid & diploid', 'In diploid meiocytes (germ-line cells in animals; spore mother cells in plants); a haploid cell has no homologous pairs to synapse'],
          ['Pairing of homologues (synapsis)', 'Does <b>not</b> occur', 'Occurs in Prophase I'],
          ['Crossing over / recombination', 'Does <b>not</b> occur', 'Occurs in Pachytene of Meiosis I'],
          ['Daughter cells produced', 'Two', 'Four'],
          ['Chromosome number of daughters', 'Same as parent (2n → 2n)', 'Half of parent (2n → n)'],
          ['Genetic make-up of daughters', 'Identical to parent', 'Genetically distinct (varied)'],
          ['What separates in the key anaphase', 'Sister chromatids (anaphase)', 'Homologues in Anaphase I; sister chromatids in Anaphase II'],
          ['Reductional or equational', 'Equational', 'Meiosis I reductional, Meiosis II equational'],
          ['Where it occurs', 'Throughout body; plant meristems', 'Germ-line / meiocytes only'],
          ['Function', 'Growth, repair, replacement', 'Gamete/spore formation; variation'],
        ],
      },
      { t: 'p', html: 'A useful one-line summary: <b>mitosis copies, meiosis halves-and-shuffles.</b>' },

      { t: 'part', title: 'Whole-chapter chromosome and DNA bookkeeping' },
      {
        t: 'p',
        html: 'A classic numerical skill in this chapter is tracking three quantities (chromosome number, chromatids per chromosome, and DNA amount in “C” units) through every stage. Take a diploid cell with chromosome number <b>2n</b> and a baseline (unreplicated) DNA amount of <b>2C</b>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'Chromosome number', 'Chromatids per chromosome', 'DNA amount'],
        rows: [
          ['G<sub>1</sub> (before S)', '2n', '1', '2C'],
          ['After S / G<sub>2</sub>', '2n', '2', '4C'],
          ['<b>After Mitosis</b> (each daughter)', '2n', '1', '2C'],
          ['Meiocyte in G<sub>2</sub> (before Meiosis I)', '2n', '2', '4C'],
          ['<b>After Meiosis I</b> (each cell)', 'n', '2', '2C'],
          ['<b>After Meiosis II</b> (each of 4 cells)', 'n', '1', '1C'],
        ],
      },
      {
        t: 'p',
        html: 'Read the table as three rules: <b>S phase doubles DNA but not chromosome number; Meiosis I halves the chromosome number; Meiosis II separates the chromatids (halving DNA again).</b> The end product of meiosis, a gamete, therefore has half the chromosomes and half the DNA of the diploid parent.',
      },

      { t: 'part', title: 'Integrative worked examples' },
      {
        t: 'ex',
        tag: 'NEET, identify-from-clues',
        q: 'In a dividing cell, homologous chromosomes are seen paired and a chiasma is visible between them. (a) Is this mitosis or meiosis? (b) Name the division and the stage (the expected answer is the stage at which chiasmata first become visible). (c) Could this cell be haploid?',
        steps: [
          '<b>Solution.</b> (a) Pairing of homologues (synapsis) and chiasmata occur <b>only in meiosis</b>, so this is meiosis, not mitosis. (b) <b>Meiosis I, prophase I (or metaphase I).</b> Chiasmata first become clearly visible in diplotene and stay, terminalising, through diakinesis to metaphase I. The expected answer is <b>diplotene</b> (first visible). (c) <b>No</b>: synapsis requires homologous pairs, which exist only in a <b>diploid</b> cell. So the cell must be diploid.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE/NEET, counting across both divisions',
        q: 'A pollen mother cell of a plant with 2n = 16 undergoes meiosis. (a) How many pollen grains are formed and what is their chromosome number? (b) If its DNA in G<sub>2</sub> is 4C, what is the DNA per pollen grain? (c) How many such meiocytes are needed to make 240 pollen grains?',
        steps: [
          '<b>Solution.</b> (a) One meiosis → <b>4</b> haploid cells; chromosome number = n = <b>8</b> each. (b) After two divisions the DNA is reduced to one-quarter of the G<sub>2</sub> value: 4C ÷ 4 = 1C → each of the four haploid products (microspores that become pollen grains) has <b>1C</b>, half of the unreplicated diploid value (2C). (c) 240 ÷ 4 = <b>60</b> meiocytes.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Rapid full-chapter revision (must-know one-liners)' },
      {
        t: 'p',
        html: '1. Cell cycle = <b>Interphase (>95%, ~23 h in humans) + M phase (~1 h)</b>; order G<sub>1</sub> → S → G<sub>2</sub> → M.<br>2. <b>S phase</b>: DNA doubles, chromosome number unchanged; centriole duplicates (animal cells).<br>3. <b>G<sub>0</sub></b>: quiescent, out of the cycle; e.g., nerve and muscle cells.<br>4. Mitosis stages: <b>PMAT</b>, Prophase, Metaphase, Anaphase, Telophase.<br>5. <b>Metaphase</b> = chromosomes at the equatorial plate; <b>best stage to study chromosome morphology</b>.<br>6. <b>Anaphase</b> = centromeres split, sister chromatids → opposite poles.<br>7. <b>Cytokinesis</b>: animal = cleavage <b>furrow</b> (outside-in); plant = <b>cell plate</b> (inside-out); none → <b>syncytium</b> (coconut).<br>8. <b>Significance of mitosis</b>: growth, repair/replacement, constant chromosome number, cell-size (nucleo-cytoplasmic ratio) control.<br>9. Meiosis = <b>two divisions, one replication → four haploid cells</b>; <b>Meiosis I reductional, Meiosis II equational</b>.<br>10. Prophase I substages: <b>Leptotene → Zygotene (synapsis) → Pachytene (crossing over) → Diplotene (chiasmata) → Diakinesis (terminalization)</b>.<br>11. <b>Anaphase I</b> separates <b>homologues</b> (chromatids stay joined); <b>Anaphase II</b> separates <b>sister chromatids</b>.<br>12. <b>Significance of meiosis</b>: maintains chromosome-number constancy across generations + generates variation (crossing over + independent assortment), the raw material of evolution.',
      },

      { t: 'part', title: 'Whole-chapter cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Three divisions to know:</b> Mitosis (equational, somatic), Meiosis I (reductional), Meiosis II (equational).', note: '' },
          { f: '<b>Counting rule:</b> <i>n</i> mitotic divisions → 2<sup><i>n</i></sup> cells; one meiosis → 4 haploid cells; meiocytes needed = cells ÷ 4.', note: '' },
          { f: '<b>DNA/number path (meiosis):</b> G<sub>2</sub> <b>4C/2n</b> → after Meiosis I <b>2C/n</b> → after Meiosis II <b>1C/n</b>.', note: '' },
          { f: '<b>Life cycle:</b> meiosis halves (2n → n), fertilisation restores (n + n → 2n), mitosis multiplies.', note: '' },
          { f: '<b>The big contrast:</b> mitosis = identical diploid copies; meiosis = varied haploid cells (synapsis + crossing over + independent assortment).', note: '' },
        ],
        aids: [
          '<b>Memory aids:</b> mitotic stages “<b>PMAT</b>”; meiosis-I substages “<b>L-Z-P-D-D</b>”; chapter motto “<b>meiosis halves, fertilisation restores, mitosis multiplies</b>.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 617–620 ─────────────────────────
  {
    n: 'A',
    title: 'Checkpoint Regulation and the Cyclin-CDK System',
    extra: true,
    kalam: 'A checkpoint is a molecular surveillance point that blocks the next phase until the current phase is verified complete.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the complete choreography of mitosis and meiosis, the phase order, the chromosome-bookkeeping rules, and the significance of each division. Five examinable patterns are still standing outside the door. Additional topic A opens the cell’s internal quality-control system: the G<sub>1</sub>/S and G<sub>2</sub>/M checkpoints, the named cyclins and CDKs that drive each transition, and the tumour-suppressor logic that guards them (Topic 01 names the G<sub>1</sub>→S and G<sub>2</sub>→M checkpoints and cyclins with CDKs, and mentions p53/Rb only as beyond the syllabus). Additional topic B extends the chapter’s bookkeeping table (Topic 04, Section 3) to picogram values, to DNA per chromosome and per chromatid, and to counting pollen mother cells, pollen grains and male gametes. Additional topic C dissects cytokinesis. The chapter gives the direction of the furrow and of the cell plate, and the coconut syncytium; Additional topic C adds the actomyosin contractile ring that pinches animal cells, the phragmoplast that builds the cell plate in plants, the timing relative to karyokinesis, and the cases where cytokinesis fails. Additional topic D supplies organism-specific examples that applied questions can use: plant meristems, <i>Drosophila</i> syncytial blastoderm, yeast, the haploid male honeybee, and endoreduplication. The chapter’s own examples are general: it names the 90-minute yeast cycle and the haploid male honeybee in Topic 01 and plant meristems in Topic 04. Additional topic E connects abnormal cell cycles to cancer: oncogenes, tumour suppressors, checkpoint failure, and the chemotherapy drugs that exploit cell-cycle machinery. Every section uses the chapter’s terminology and builds on its bookkeeping rules. Topics A to E go beyond the NCERT text; use them as enrichment after the chapter.',
      },
      {
        t: 'p',
        html: 'The chapter tells you that the cell cycle is controlled at check points, with cyclins acting together with cyclin-dependent kinases. For enrichment beyond NCERT (and for harder application items), it helps to know the named checkpoints, the specific cyclin–CDK pairs active at each transition, and the logic of why a checkpoint can halt the cycle.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Three checkpoints, one logic.</b> A checkpoint is a molecular surveillance point that blocks the next phase until the current phase is verified complete. The cell cannot proceed without a green signal.',
      },
      {
        t: 'table',
        title: null,
        head: ['Checkpoint', 'Location', 'What it verifies', 'Key cyclin–CDK complex', 'CDK inhibitor'],
        rows: [
          ['G<sub>1</sub>/S (Restriction point R)', 'After G<sub>1</sub>, before S', 'Cell size adequate; nutrients available; no DNA damage', 'Cyclin D–CDK4/CDK6 and Cyclin E–CDK2 phosphorylate Rb protein', 'p21, p16'],
          ['G<sub>2</sub>/M', 'After G<sub>2</sub>, before M', 'DNA replication complete and error-free; no damage', 'Cyclin B–CDK1 (called MPF, Maturation-Promoting Factor)', 'p21'],
          ['Metaphase (Spindle assembly)', 'Metaphase of mitosis, Meiosis I and Meiosis II', 'All chromosomes attached to spindle', 'Spindle-assembly-checkpoint proteins (Mad2, BubR1) keep APC/C inactive until every chromosome is attached; APC/C (not a cyclin-CDK) is then activated and triggers anaphase', 'Not a cyclin-CDK checkpoint; the inhibitors act on APC/C'],
        ],
      },
      {
        t: 'p',
        html: '<b>The Rb-E2F switch (G<sub>1</sub>/S transition).</b> In G<sub>1</sub> the retinoblastoma protein (Rb) binds and inactivates the transcription factor E2F, preventing expression of S-phase genes. When Cyclin D–CDK4/CDK6 and Cyclin E–CDK2 phosphorylate Rb, Rb releases E2F. E2F then transcribes the genes needed for DNA replication (DNA polymerase, cyclin A, etc.). DNA damage or insufficient size keeps Rb active, blocking the switch.',
      },
      {
        t: 'p',
        html: '<b>MPF (G<sub>2</sub>/M transition).</b> MPF = Cyclin B + CDK1. It is the universal “go” signal for mitosis: it phosphorylates nuclear lamins (causing envelope breakdown), histone H1 (condensation), and vimentin (cytoskeletal reorganisation). When cyclin B is degraded at anaphase, MPF activity drops and the cell exits mitosis.',
      },
      {
        t: 'p',
        html: '<b>p53: the guardian of the genome.</b> The protein p53 is a transcription factor activated by DNA damage. It stimulates production of p21, which inhibits Cyclin E–CDK2 and Cyclin B–CDK1, arresting the cycle at the damaged checkpoint. If damage is irreparable, p53 triggers apoptosis. Loss-of-function mutations in p53 (found in ~50% of human cancers) remove this brake.',
      },
      {
        t: 'p',
        html: '<b>p16 and p21: CDK inhibitors.</b> p16 inhibits Cyclin D–CDK4/CDK6 specifically; p21 is broader, inhibiting several cyclin–CDK complexes. p16 halts the cycle at G<sub>1</sub>/S; p21 halts it at G<sub>1</sub>/S and at G<sub>2</sub>/M. In cancer cells p16 is often epigenetically silenced.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Checkpoint Identification.</b> A cell treated with radiation suffers double-strand DNA breaks but completes DNA replication and enters G<sub>2</sub>. At which checkpoint(s) should this damage have been detected, and which checkpoint actually arrested the cell?',
        steps: [
          '<b>Solution.</b> DNA damage is first sensed at the G<sub>1</sub>/S checkpoint (damaged DNA should block replication entry). However, since replication is already complete, the G<sub>2</sub>/M checkpoint is the one that detects unrepaired damage and blocks entry into mitosis. Damage arising before S is caught at G<sub>1</sub>/S; damage found in G<sub>2</sub> is caught at G<sub>2</sub>/M, which arrests this irradiated cell before mitosis. The G<sub>2</sub>/M checkpoint uses ATM/ATR kinases to sense broken DNA and inhibit Cyclin B–CDK1 (MPF), preventing mitotic entry until repair is complete.',
        ],
        ans: 'G<sub>1</sub>/S should have blocked entry into S, but G<sub>2</sub>/M is the checkpoint that actually arrests the irradiated cell before mitosis.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Cyclin-CDK Pairing.</b> Which cyclin–CDK complex is directly responsible for dissolving the nuclear envelope at the start of mitosis?',
        steps: [
          '<b>Solution.</b> The nuclear envelope breakdown is caused by phosphorylation of nuclear lamins (type-V intermediate filaments) by MPF = Cyclin B–CDK1. Cyclin B levels rise during G<sub>2</sub>, bind CDK1, and the active MPF phosphorylates lamin proteins → depolymerisation of the nuclear lamina → envelope fragments. Cyclin A–CDK2 (active during S/G<sub>2</sub>) assists in some systems but MPF is the primary driver.',
        ],
        ans: 'Cyclin B–CDK1 (MPF).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>p53 and Checkpoint Failure.</b> Assertion (A): A mutation that inactivates the p53 gene makes a cell more likely to become cancerous. Reason (R): p53 normally arrests the cell cycle at the G<sub>1</sub>/S checkpoint to allow DNA repair. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Solution.</b> A is true: loss of p53 is one of the most common events in cancer. R is also true: p53 normally halts the cell at the G<sub>1</sub>/S checkpoint so that DNA damage can be repaired before replication. (p53 also acts at G<sub>2</sub>/M and triggers apoptosis, but that does not make the stated Reason wrong.) Without p53, damaged DNA is replicated and mutations accumulate, so R explains A.',
        ],
        ans: 'Both A and R are true, and R is the correct explanation of A.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-style] Name the checkpoint that verifies completion of DNA replication before mitosis begins. Which cyclin–CDK complex is directly inactivated at this checkpoint when damage is detected?',
            a: 'G<sub>2</sub>/M checkpoint. When DNA damage is detected, the checkpoint activates kinases (ATM/ATR) that inhibit Cyclin B–CDK1 (MPF), blocking entry into mitosis.',
          },
          {
            q: '[CUET-style] State two functions of p53 in a cell with damaged DNA.',
            a: '(i) Arrests the cell cycle at G<sub>1</sub>/S and G<sub>2</sub>/M checkpoints to allow repair; (ii) If repair fails, triggers programmed cell death (apoptosis) to eliminate the damaged cell.',
          },
          {
            q: '[NEET-style] A cell lacks functional Cyclin E. At which point in the cell cycle would this cause arrest, and why?',
            a: 'Arrest at the G<sub>1</sub>/S restriction point. Cyclin E–CDK2 phosphorylates the retinoblastoma protein (Rb), releasing E2F to transcribe S-phase genes. Without Cyclin E, Rb remains bound to E2F and DNA synthesis genes are not expressed.',
          },
          {
            q: '[NEET-style] Arrange in order of appearance during the cell cycle: Cyclin D, Cyclin B, Cyclin E, Cyclin A. Which cyclin is degraded at the onset of anaphase?',
            a: 'Order: Cyclin D (G<sub>1</sub>) → Cyclin E (late G<sub>1</sub>, G<sub>1</sub>/S) → Cyclin A (S/G<sub>2</sub>) → Cyclin B (G<sub>2</sub>/M). Cyclin B is degraded at the onset of anaphase (marked by activation of the Anaphase-Promoting Complex/Cyclosome, APC/C).',
          },
          {
            q: '[NEET-style, assertion–reason] Assertion: The retinoblastoma protein (Rb) is called a tumour suppressor. Reason: It prevents progression from G<sub>1</sub> to S phase when conditions are unsuitable. Evaluate. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both A and R are true, and R is the correct explanation of A. Rb acts as a brake on the cell cycle; inactivating mutations remove this brake, allowing unchecked proliferation, the defining feature of a tumour suppressor.',
          },
          {
            q: '[CBSE-style] Briefly describe the role of MPF in initiating mitosis.',
            a: 'MPF (Maturation-Promoting Factor) = Cyclin B + CDK1. It drives the cell into mitosis by phosphorylating nuclear lamins (causing envelope breakdown), histone H1 (chromosome condensation), and cytoplasmic targets (spindle organisation). Its accumulation triggers mitotic entry; its destruction at anaphase allows exit from mitosis.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 620–623 ─────────────────────────
  {
    n: 'B',
    title: 'Full Chromosome and DNA Accounting Through Meiosis',
    extra: true,
    kalam: 'One complete meiosis → 4 haploid cells (4 microspores, that is 4 pollen grains).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the core bookkeeping table. For NEET numerical questions you need the complete version, tracking chromosome number, chromatids per chromosome, and DNA amount (in C units) through every stage, plus the ability to answer “how many divisions” and “how many cells” for both plant and animal gamete production.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The three tracked quantities:</b>' },
      {
        t: 'defgrid',
        title: 'Quantity and what it means',
        rows: [
          { k: 'Chromosome number', v: 'Number of centromeres (counted as the number of distinct chromosomes, regardless of chromatid state)' },
          { k: 'Chromatids per chromosome', v: '1 or 2: 1 before S phase, 2 from S phase until the centromere splits (anaphase of mitosis, anaphase II)' },
          { k: 'DNA amount (C)', v: 'Total DNA content relative to the unreplicated haploid (n) set = 1C' },
        ],
      },
      {
        t: 'p',
        html: '<b>Baseline convention:</b> Start from a diploid (2n) cell that has not yet replicated. Its chromosome number is 2n, each chromosome has 1 chromatid, and its DNA amount is 2C.',
      },
      {
        t: 'p',
        html: '<b>Key transition rules:</b><br>• <b>S phase:</b> Chromosome number unchanged; each chromosome → 2 chromatids; DNA doubles (2C → 4C).<br>• <b>Meiosis I (reductional):</b> Homologous chromosomes separate → chromosome number halves (2n → n); each chromosome still has 2 chromatids; total DNA per cell halves (4C → 2C).<br>• <b>Meiosis II (equational):</b> Sister chromatids separate → chromosome number unchanged (n); each chromosome now has 1 chromatid; DNA halves again (2C → 1C).',
      },
      {
        t: 'p',
        html: '<b>“How many divisions” shortcuts:</b><br>• Mitotic divisions: <i>n</i> divisions → 2<sup><i>n</i></sup> cells.<br>• One complete meiosis → 4 haploid cells (4 microspores, that is 4 pollen grains).<br>• Number of meiocytes needed = haploid products wanted (microspores/pollen grains, or sperm) ÷ 4. For male gametes of a flowering plant divide by 8 (each pollen grain gives two male gametes); for eggs, one meiosis gives one ovum.<br>• For animal oogenesis: one ovum and up to three polar bodies per meiosis (unequal cytokinesis). For animal spermatogenesis: one primary spermatocyte gives four sperm (equal cytokinesis).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Full Accounting Through Meiosis.</b> A plant cell has 2n = 20 and a DNA content of 6 pg in G<sub>1</sub>. Complete the following table for all stages.<br>G<sub>1</sub>: Chromosome number 20, Chromatids per chromosome 1, DNA (pg) 6<br>After S: Chromosome number ?, Chromatids per chromosome ?, DNA (pg) ?<br>After Meiosis I (each cell): Chromosome number ?, Chromatids per chromosome ?, DNA (pg) ?<br>After Meiosis II (each cell): Chromosome number ?, Chromatids per chromosome ?, DNA (pg) ?',
        steps: [
          '<b>Solution.</b> <b>After S:</b> Chromosome number stays 20 (centromeres unchanged); each chromosome now has 2 chromatids; DNA doubles: 12 pg.',
          '<b>After Meiosis I (each cell):</b> Homologous pairs separated → chromosome number halved to 10 (n); each chromosome still has 2 chromatids; DNA per cell halves (12 pg → 6 pg): after Meiosis I cytokinesis, the two cells share 12 pg in total, i.e. 6 pg per cell. With n = 10 chromosomes, each with 2 chromatids, the per-chromosome DNA content is 6 pg ÷ 10 = 0.6 pg. The DNA amount convention is relative: the unreplicated haploid set is 1C = 3 pg (half of 6 pg G<sub>1</sub>), so after Meiosis I each cell has 2C.',
          '<b>After Meiosis II:</b> Sister chromatids separate → 10 chromosomes, 1 chromatid each; DNA halved again → 3 pg per cell = 1C.',
        ],
        ans: 'G<sub>1</sub>: Chromosome number 20, Chromatids per chromosome 1, DNA (pg) 6<br>After S: Chromosome number 20, Chromatids per chromosome 2, DNA (pg) 12<br>After Meiosis I (each cell): Chromosome number 10, Chromatids per chromosome 2, DNA (pg) 6<br>After Meiosis II (each cell): Chromosome number 10, Chromatids per chromosome 1, DNA (pg) 3',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Divisions and Cells.</b> In an onion anther, the pollen mother cell undergoes meiosis to produce pollen grains. (a) How many pollen grains are produced from one pollen mother cell? (b) If an anther contains 200 pollen mother cells, how many meioses occur and how many pollen grains are formed? (c) Each pollen grain (male gametophyte) divides once by mitosis to form a generative cell and a vegetative cell, and the generative cell divides once more to form two male gametes (sperm nuclei). From 200 PMC, how many male gametes are ultimately produced?',
        steps: [
          '<b>Solution.</b><br>(a) One complete meiosis → 4 haploid pollen grains (microspores).<br>(b) 200 PMC × 1 meiosis each = 200 meioses. 200 × 4 = 800 pollen grains.<br>(c) Each of the 800 pollen grains divides mitotically into a generative cell and a vegetative cell (800 mitoses). Each generative cell then divides once more to give 2 male gametes (800 more mitoses). Male gametes = 800 × 2 = 1600.',
        ],
        ans: '(a) 4 pollen grains; (b) 200 meioses, 800 pollen grains; (c) 1600 male gametes (sperm nuclei).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>DNA C-Value and Gamete DNA.</b> A plant species has a diploid genome size of 3.2 pg per cell. (a) What is the DNA content of a leaf cell in G<sub>1</sub>? (b) Of a meiocyte in G<sub>2</sub>? (c) Of a microspore (pollen grain) immediately after meiosis II?',
        steps: [
          '<b>Solution.</b><br>(a) Leaf cell in G<sub>1</sub>: diploid, unreplicated → 2C relative value. Diploid genome = 3.2 pg = 2C value. So G<sub>1</sub> DNA = 3.2 pg = 2C.<br>(b) Meiocyte in G<sub>2</sub>: after S phase, DNA has doubled → 4C value. 4C = 3.2 × 2 = 6.4 pg.<br>(c) Microspore after Meiosis II: haploid (n), single chromatid each → 1C value. 3.2 pg ÷ 2 = 1.6 pg.',
        ],
        ans: '(a) 3.2 pg (2C); (b) 6.4 pg (4C); (c) 1.6 pg (1C).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-style] A cell has 12 chromosomes at the end of Meiosis I. State: (a) the number of chromosomes in the original diploid cell, (b) the number of chromosomes in each cell after Meiosis II, and (c) the number of chromatids per chromosome after Meiosis I.',
            a: '(a) Original diploid: 24 chromosomes (2n); (b) After Meiosis II: 12 chromosomes (n); (c) After Meiosis I: 2 chromatids per chromosome (each chromosome still has 2 chromatids: centromere has not yet split).',
          },
          {
            q: '[CBSE-style] Draw and label a table showing chromosome number, chromatids per chromosome, and DNA amount (in C units) for a human cell at: G<sub>1</sub>, after S, after mitosis (daughter cell), after Meiosis I, and after Meiosis II.',
            a: 'G<sub>1</sub>: Chromosome number 46, Chromatids per chromosome 1, DNA 2C<br>After S (G<sub>2</sub>): Chromosome number 46, Chromatids per chromosome 2, DNA 4C<br>After mitosis (daughter): Chromosome number 46, Chromatids per chromosome 1, DNA 2C<br>After Meiosis I: Chromosome number 23, Chromatids per chromosome 2 (46 chromatids), DNA 2C<br>After Meiosis II: Chromosome number 23, Chromatids per chromosome 1 (23 chromatids), DNA 1C',
          },
          {
            q: '[NEET-style] 500 pollen mother cells in an anther undergo meiosis. How many (a) meioses, (b) pollen grains, and (c) male gametes (sperm nuclei) are produced?',
            a: '(a) 500 meioses (one per PMC); (b) 500 × 4 = 2000 pollen grains; (c) Each of the 2000 pollen grains forms one generative cell, and each generative cell divides to give 2 male gametes → 2000 × 2 = 4000 male gametes (sperm nuclei).',
          },
          {
            q: '[CUET-style] Distinguish between 1C, 2C, and 4C DNA content.',
            a: '1C = haploid, unreplicated DNA amount (one complete set of chromosomes before replication). 2C = diploid, unreplicated (somatic G<sub>1</sub> state) or haploid with sister chromatids joined (post-Meiosis-I cell). 4C = diploid with sister chromatids joined (post-S/G<sub>2</sub> meiocyte or mitotic cell before cytokinesis).',
          },
          {
            q: '[NEET-style] If a cell in G<sub>2</sub> has a DNA content of 16 pg and 16 chromosomes (each with 2 chromatids), what is the DNA content per chromatid?',
            a: '16 pg total DNA ÷ 16 chromosomes = 1 pg per chromosome. Each chromosome has 2 chromatids → 0.5 pg per chromatid.',
          },
        ],
      },
    ],
  },
];
