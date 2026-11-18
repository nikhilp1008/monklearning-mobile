import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 10 (Cell Cycle and Cell Division), Topics 01 and 02: pp. 591 to 605 of the
 * Class 11 Biology Master Reference, word for word. Topic 01, Cell Cycle & Mitosis (pp. 591–598),
 * and Topic 02, Meiosis I (pp. 599–605), are each cut at the book's Sections 1 to 8. Numbered
 * figures 10.1 and 10.2 (Topic 01) and 10.3, 10.4 and 10.5 (Topic 02) sit where each caption is
 * first printed; the figures themselves are drawn on pp. 595 and 602 (CHAPTER 10 · FIGURES). These
 * pages draw nothing else. The book prints its options as (a) to (d); they are kept as printed.
 * Emphasis italics are dropped; no em dashes.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 591–598 ─────────────────────────
  {
    n: '01',
    title: 'Cell Cycle & Mitosis',
    kalam:
      'The whole sequence of events from the birth of a cell to its division into two daughter cells is what we call the cell cycle.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. CBSE Boards reliably draw a 2–3 mark question on the phases of the cell cycle or the events of a named mitotic stage, and a 5-mark “describe mitosis with diagrams” is common (the book’s estimate from past papers, not official figures). CUET asks crisp single-fact recall (longest phase, where DNA doubles, what splits in anaphase). NEET loves the conceptual traps here (the DNA-amount-versus-chromosome-number distinction, the “most dramatic / best-studied stage” pair, and ordering questions), typically 1–2 questions every year (the book’s estimate from past papers, not official figures). Expect assertion–reason items at the higher-difficulty NEET level.',
      },
      {
        t: 'p',
        html: 'Picture a large Indian wedding. For weeks beforehand, almost nothing visibly dramatic happens, yet the household is humming with activity: shopping, cooking, stitching, sending invitations, doubling up on every arrangement so that two families can be served at once. Then comes the wedding day itself: a few intense hours of ceremony where everything that was prepared is finally distributed and the single household becomes two. The cell cycle works in exactly this rhythm. The cell spends the overwhelming majority of its life quietly preparing, growing and copying its contents, and only a brief, theatrical window is spent on the actual division.',
      },
      {
        t: 'p',
        html: 'This is a key intuition to carry forward: <b>a cell does not divide on a whim.</b> It divides only after it has grown to a sufficient size and has faithfully duplicated its entire genetic instruction set, so that each of the two daughter cells receives a complete, identical copy. The whole sequence of events from the birth of a cell to its division into two daughter cells is what we call the <b>cell cycle</b>.',
      },
      {
        t: 'p',
        html: 'The cycle has two grossly unequal parts. The long, preparatory phase is <b>interphase</b>, which occupies more than 95% of the cycle’s duration. It is sometimes called the “resting phase,” but that name is misleading: the cell is anything but resting. It is one of the busiest periods in the cell’s life: growing, synthesising proteins, and, crucially, replicating its DNA. The short, dramatic part is the <b>M phase (mitotic phase)</b>, the actual division, where the duplicated material is parcelled out equally.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a library that must split into two identical branch libraries. First it must photocopy every single book (that is DNA replication in interphase). Only once every book has its duplicate can the staff start sorting the two complete collections into two rooms. If they began sorting before finishing the copying, one branch would end up missing books: a catastrophe. The cell guards against exactly this through internal <b>checkpoints</b> that verify each stage is complete before allowing the next to begin.',
      },
      {
        t: 'p',
        html: '<b>Mitosis</b> itself is an equational division: the parent cell and both daughter cells carry the same number and kind of chromosomes. A cell with 46 chromosomes produces two cells with 46 chromosomes each. This is precisely why mitosis is the engine of <b>growth</b> (a single fertilised egg becomes a trillion-celled human while every cell keeps the identical chromosome count) and of <b>repair</b>: when you cut your finger or a lizard regrows its tail, mitosis supplies the new cells.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions to keep in mind:</b>' },
      {
        t: 'p',
        html: '• Mitosis can occur in <b>both haploid and diploid</b> cells; it does not require pairs of chromosomes. Mitosis occurs in somatic cells, in dividing germ-line cells (before meiosis) and in the zygote, in both haploid and diploid cells. Most mitotic divisions in the body are of diploid somatic cells, but <b>haploid cells also divide mitotically in some lower plants and in some social insects</b>: for example, the male honeybee (drone) develops from an unfertilised egg and is haploid, yet its cells divide by mitosis. (Meiosis, by contrast, occurs in diploid meiocytes, since a haploid cell has no homologous pairs to synapse; that is the next topic.)<br>• The “equational” guarantee holds only when karyokinesis is followed by cytokinesis. In some organisms the nucleus divides but the cytoplasm does not, producing a multinucleate cell, so “one division equals two cells” is a usual case, not a law.<br>• The neat ~24-hour timing often quoted for a human cell is a typical value, not a fixed constant; cycle length varies enormously between cell types and organisms (a yeast cell, for instance, completes its cycle in about 90 minutes).',
      },

      { t: 'part', title: 'Key stages, events and definitions' },
      {
        t: 'def',
        term: 'Cell cycle',
        html: 'the ordered sequence of events by which a cell duplicates its genome, synthesises its other constituents, and divides into two daughter cells. Two phases: <b>Interphase</b> and <b>M phase</b>.',
      },
      {
        t: 'p',
        html: '<b>Interphase</b> (the “resting” / preparatory phase; > 95% of cycle duration). Subdivided into three sub-phases:',
      },
      {
        t: 'p',
        html: '• <b>G<sub>1</sub> phase (Gap 1):</b> The interval between the previous mitosis and the start of DNA synthesis. The cell is metabolically active and grows, but DNA is not yet replicated. Chromosome number = parental; each chromosome has a single chromatid.<br>• <b>S phase (Synthesis):</b> DNA replication occurs. The amount of DNA per cell <b>doubles</b> (e.g., from 2C to 4C), but the <b>number of chromosomes does not change</b>: each chromosome now consists of two identical sister chromatids joined at the centromere. Histone protein synthesis accompanies replication. In animal cells, the centriole also duplicates during this phase.<br>• <b>G<sub>2</sub> phase (Gap 2):</b> Proteins are synthesised and the cell continues to grow in preparation for mitosis. Replication is complete; the cell is poised to enter division.',
      },
      {
        t: 'p',
        html: '<b>G<sub>0</sub> phase (quiescent stage):</b> Cells that do not divide further exit the cycle from G<sub>1</sub> and enter G<sub>0</sub>. They remain metabolically active but stop proliferating, often undergoing differentiation into specialised cell types. They may re-enter the cycle if signalled.',
      },
      {
        t: 'p',
        html: '<b>Duration of the cell cycle:</b> Cycle length varies widely with cell type and organism. In a typical human cell the whole cycle takes about <b>24 hours</b>, of which interphase occupies roughly <b>23 hours</b> and the M phase only <b>about an hour</b>: the dividing itself is brief, the preparation long. (A yeast cell, by contrast, completes the entire cycle in about <b>90 minutes</b>.) Within human interphase the time is shared among G<sub>1</sub>, S and G<sub>2</sub>, with S phase devoted to replication.',
      },
      {
        t: 'p',
        html: '<b>M phase (mitotic phase):</b> The shortest but most dramatic period: the only stage in which chromosome movements are visible under the microscope. It comprises <b>karyokinesis</b> (division of the nucleus) and <b>cytokinesis</b> (division of the cytoplasm). Mitosis = the four stages of karyokinesis: <b>Prophase → Metaphase → Anaphase → Telophase</b>.',
      },
      { t: 'p', html: '<b>Key terms:</b>' },
      { t: 'def', term: 'Karyokinesis', html: 'nuclear division.' },
      {
        t: 'def',
        term: 'Cytokinesis',
        html: 'cytoplasmic division (cleavage furrow in animal cells; cell plate in plant cells).',
      },
      {
        t: 'def',
        term: 'Equatorial / metaphase plate',
        html: 'the plane at the cell’s equator where chromosomes align in metaphase.',
      },
      {
        t: 'def',
        term: 'Kinetochore',
        html: 'the specialised protein structure at the centromere to which spindle microtubules attach.',
      },
      {
        t: 'def',
        term: 'Syncytium',
        html: 'a multinucleate cell formed when karyokinesis is not followed by cytokinesis (e.g., liquid endosperm of coconut).',
      },
      {
        t: 'p',
        html: '<b>Regulation:</b> The cycle is controlled at <b>check points</b>, principally the <b>G<sub>1</sub> → S</b> and <b>G<sub>2</sub> → M</b> transitions, which act as quality-control gates. Progression is driven by regulatory proteins called <b>cyclins</b> acting together with <b>cyclin-dependent kinases (CDKs)</b>.',
      },
      {
        t: 'p',
        html: '<b>Beyond the Class 11 syllabus (enrichment, optional):</b> The deeper molecular details of cycle control (specific cyclin–CDK complexes, the “restriction point” R, and tumour-suppressor proteins such as p53/Rb) go beyond the NCERT text (a little beyond what CBSE and NEET usually ask), but are worth knowing. The named G<sub>1</sub>/S and G<sub>2</sub>/M check points and the cyclin–CDK mechanism above are not in the NCERT text either; treat them as enrichment too.',
      },

      { t: 'part', title: 'Phase-by-phase process walkthrough' },
      {
        t: 'p',
        html: 'Let us walk through one complete turn of the cycle, explaining why each step happens, not merely what happens.',
      },
      {
        t: 'p',
        html: '<b>Step 1, G<sub>1</sub>: deciding whether to divide.</b> A freshly born cell first checks its surroundings and its own size. Why a gap before copying DNA? Because replication is metabolically expensive and irreversible: committing to it without enough resources or the right signals would be wasteful. Cells that should not divide branch off here into G<sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 2, S: copying the blueprint.</b> DNA replication now doubles the genetic content. The critical insight students must internalise: the amount of DNA doubles, but the count of chromosomes is unchanged. A chromosome that was one chromatid is now two sister chromatids held together at the centromere, still counted as <b>one</b> chromosome. This is the source of a classic exam trap in this chapter.',
      },
      { t: 'fig', id: 'b11-10-fig-10.1' },
      {
        t: 'p',
        html: '<b>Step 3, G<sub>2</sub>: final preparations.</b> The cell synthesises the proteins and machinery (including spindle components) it will need, and grows a little more. Once a check point confirms replication is faithful and complete, the cell is licensed to enter mitosis.',
      },
      {
        t: 'p',
        html: '<b>Step 4, Prophase (mitosis begins).</b> The diffuse chromatin <b>condenses</b> into compact, visible chromosomes: you cannot sort threads that are tangled, so the cell first coils them tightly. Each chromosome appears as two sister chromatids. The centrosomes (with their centrioles in animal cells) migrate toward opposite poles and begin organising the <b>mitotic spindle</b>. By the end of prophase the nucleolus, Golgi complex, endoplasmic reticulum and nuclear envelope are no longer visible: the nuclear envelope must break down so the spindle can reach the chromosomes.',
      },
      {
        t: 'p',
        html: '<b>Step 5, Metaphase.</b> With the nuclear envelope fully gone, spindle fibres attach to the <b>kinetochores</b> at each chromosome’s centromere and manoeuvre all the chromosomes to lie at the cell’s equator, forming the <b>metaphase (equatorial) plate</b>. Why line them up? So that when separation occurs, each pole receives exactly one chromatid from every chromosome. Chromosomes are most condensed and least overlapping here, which is why <b>metaphase is the best stage for studying chromosome morphology and number</b> (karyotyping).',
      },
      { t: 'fig', id: 'b11-10-fig-10.2' },
      {
        t: 'p',
        html: '<b>Step 6, Anaphase.</b> The centromeres split, and the two sister chromatids of each chromosome (now each a full-fledged daughter chromosome) are pulled to <b>opposite poles</b>, centromere leading and arms trailing. This is the moment of equal partition: each pole now has a complete, identical chromosome set.',
      },
      {
        t: 'p',
        html: '<b>Step 7, Telophase.</b> Having arrived at the poles, the chromosomes <b>decondense</b> back into chromatin (compact chromosomes were only needed for transport). The nuclear envelope reassembles around each set, and the nucleolus, Golgi and ER reappear. Two daughter nuclei now exist within one cell: karyokinesis is complete.',
      },
      { t: 'p', html: '<b>Step 8, Cytokinesis.</b> Finally the cytoplasm divides:' },
      {
        t: 'p',
        html: '• In <b>animal cells</b>, a <b>cleavage furrow</b> forms by constriction of the plasma membrane, deepening from the periphery inward, towards the centre, until the cell pinches in two.<br>• In <b>plant cells</b>, the rigid cell wall forbids pinching, so a <b>cell plate</b> is laid down from the <b>centre outward</b> (centre → wall), growing to fuse with the existing wall and partition the cell. The middle lamella develops along this plate.',
      },
      {
        t: 'p',
        html: 'When karyokinesis occurs without cytokinesis, the result is a multinucleate <b>syncytium</b>, the liquid endosperm of a young coconut being the classic example.',
      },
      {
        t: 'p',
        html: '<b>Significance of mitosis:</b> growth and development of a multicellular body from the single-celled zygote; faithful maintenance of chromosome number and genetic identity across all body cells; restoration of the proper nucleo-cytoplasmic ratio (cell-size control); repair, wound-healing and regeneration of worn or lost parts; and multiplication in unicellular organisms. When mitosis escapes its check points and runs unchecked, the result is uncontrolled proliferation, the basis of tumours and cancer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'A cell in G<sub>1</sub> phase has 24 chromosomes and a DNA content of 12 picograms. State the chromosome number and the DNA content of this cell (a) at the end of S phase, and (b) in each daughter cell at the end of mitosis.',
        steps: [
          'During S phase the DNA content doubles while the chromosome number is unchanged.',
          '(a) End of S phase: chromosome number = <b>24</b> (unchanged); DNA = 12 × 2 = <b>24 pg</b>. Each chromosome now has two sister chromatids.',
          '(b) Mitosis is equational and the duplicated DNA is split equally between two daughters. Each daughter: chromosome number = <b>24</b>; DNA = <b>12 pg</b> (back to the G<sub>1</sub> value).',
          '<b>Presentation point:</b> always state the rule you are applying (“S phase doubles DNA, not chromosome number”) before substituting: examiners award method marks for this.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: 'Arrange the following in the correct chronological order of the cell cycle: Anaphase, G<sub>1</sub>, Metaphase, S, Telophase, Prophase, G<sub>2</sub>.',
        steps: [
          'Interphase precedes M phase, and within interphase the order is G<sub>1</sub> → S → G<sub>2</sub>. Within mitosis the order is Prophase → Metaphase → Anaphase → Telophase.',
          '<b>Speed tip:</b> the mnemonic <b>“PMAT”</b> locks the four mitotic stages; everything else simply slots before it.',
        ],
        ans: '<b>G<sub>1</sub> → S → G<sub>2</sub> → Prophase → Metaphase → Anaphase → Telophase.</b>',
      },
      {
        t: 'ex',
        tag: 'NEET level, match-the-column',
        q: 'Match Column I with Column II.<br><b>Column I (event)</b><br>A. Chromosomes align at the equator<br>B. Centromeres split; chromatids move to poles<br>C. Nuclear envelope reforms; chromosomes decondense<br>D. Chromatin condenses; spindle begins to form<br><b>Column II (stage)</b><br>(i) Anaphase<br>(ii) Telophase<br>(iii) Metaphase<br>(iv) Prophase',
        steps: [
          'A → (iii) Metaphase: alignment on the metaphase plate. B → (i) Anaphase: centromere splitting and chromatid separation are the defining anaphase events. C → (ii) Telophase: reassembly and decondensation reverse what prophase did. D → (iv) Prophase: condensation and spindle initiation open mitosis.',
        ],
        ans: '<b>A-iii, B-i, C-ii, D-iv.</b>',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, assertion–reason / quantitative reasoning',
        q: 'A single cell from the tip of an onion root divides repeatedly by mitosis. How many successive equational (mitotic) divisions are required to produce 128 cells from this one cell? Then evaluate the statement: “Assertion: 7 divisions are needed. Reason: each mitotic division doubles the cell number.” Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'Each mitotic division doubles the number of cells, so after <i>n</i> divisions the number of cells is 2<sup><i>n</i></sup>.',
          '2<sup><i>n</i></sup> = 128 = 2<sup>7</sup> ⇒ <i>n</i> = 7.',
          'So <b>7</b> divisions are required. Now evaluate the assertion–reason pair: the <b>Assertion is true</b> (<i>n</i> = 7), the <b>Reason is true</b> (each division doubles the count), and the Reason <b>correctly explains</b> the Assertion: it is precisely the doubling relation 2<sup><i>n</i></sup> that yields 7.',
        ],
        ans: '(a). <b>Both true and the Reason is the correct explanation.</b>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the stage of mitosis in which the nuclear envelope reforms, and state two other events occurring in that stage.',
            a: 'Telophase (also: chromosomes decondense; nucleolus, Golgi and ER reappear).',
          },
          {
            q: '[CUET] In which sub-phase of interphase does the DNA content of the cell double?',
            a: 'S phase.',
          },
          {
            q: '[NEET] A diploid cell has a DNA content of 4C at the end of G<sub>2</sub>. What is its DNA content (i) in each daughter cell at the end of mitosis and (ii) in G<sub>1</sub> before the next S phase?',
            a: '(i) 2C; (ii) 2C.',
          },
          {
            q: '[NEET] Why is metaphase considered the most suitable stage for studying chromosome morphology, while interphase, though longest, is unsuitable?',
            a: 'Chromosomes are maximally condensed and aligned (least overlapping) in metaphase, so individually distinguishable; in interphase the chromatin is decondensed and diffuse, so chromosomes cannot be resolved.',
          },
          {
            q: '[NEET, assertion–reason] Assertion: Mitosis can occur in haploid cells. Reason: Mitosis does not involve pairing of homologous chromosomes. Evaluate. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a). Both Assertion and Reason are true and the Reason is the correct explanation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During which phase of the cell cycle does the amount of DNA double while the chromosome number stays the same?',
        opts: [
          { label: 'G<sub>1</sub> phase', nudge: '<b>(a)</b> G<sub>1</sub> precedes replication, so DNA is unchanged.' },
          { label: 'S phase', nudge: null },
          {
            label: 'G<sub>2</sub> phase',
            nudge: '<b>(c)</b> G<sub>2</sub> follows replication; the doubling has already happened, it is not happening during G<sub>2</sub>.',
          },
          {
            label: 'Anaphase',
            nudge: '<b>(d)</b> Anaphase separates chromatids: that is when the chromosome number of the cell doubles, but no new DNA is made; students who confuse “chromatids separating” with “DNA doubling” pick this.',
          },
        ],
        correct: 1,
        solution:
          'Replication during S synthesises a sister chromatid for each chromosome: DNA per cell doubles, but a two-chromatid chromosome is still counted as one chromosome.',
      },
      {
        t: 'mcq',
        q: 'The splitting of centromeres and the movement of chromatids towards opposite poles is the defining feature of:',
        opts: [
          { label: 'Prophase', nudge: '<b>(a)</b> Prophase only condenses chromosomes and starts the spindle.' },
          {
            label: 'Metaphase',
            nudge: '<b>(b)</b> Metaphase aligns chromosomes at the equator; nothing has separated yet.',
          },
          { label: 'Anaphase', nudge: null },
          {
            label: 'Telophase',
            nudge: '<b>(d)</b> Telophase is the aftermath: chromatids have already arrived and now decondense.',
          },
        ],
        correct: 2,
        solution:
          'Centromere splitting frees the sister chromatids, which the spindle then pulls poleward: the signature anaphase event.',
      },
      {
        t: 'mcq',
        q: 'Which of the following correctly describes cytokinesis in a plant cell?',
        opts: [
          {
            label: 'A cleavage furrow forms from the periphery inward',
            nudge: '<b>(a)</b> and <b>(c)</b> describe animal cytokinesis (cleavage furrow): a direct plant-versus-animal swap trap.',
          },
          { label: 'A cell plate forms from the centre outward', nudge: null },
          {
            label: 'The plasma membrane pinches inward',
            nudge: '<b>(a)</b> and <b>(c)</b> describe animal cytokinesis (cleavage furrow): a direct plant-versus-animal swap trap.',
          },
          {
            label: 'No cytoplasmic division occurs in plant cells',
            nudge: '<b>(d)</b> is false; plant cells absolutely divide their cytoplasm, just by a different mechanism.',
          },
        ],
        correct: 1,
        solution:
          'The rigid cell wall prevents furrowing, so plant cells build a new partition (cell plate) starting at the centre and extending to fuse with the existing wall.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): Interphase is called the resting phase. Reason (R): No metabolic or preparatory activity occurs during interphase.',
        opts: [
          {
            label: 'Both A and R true, R is the correct explanation of A',
            nudge: '<b>(a)</b> and <b>(b)</b> wrongly accept R.',
          },
          {
            label: 'Both A and R true, R is not the correct explanation of A',
            nudge: '<b>(a)</b> and <b>(b)</b> wrongly accept R.',
          },
          { label: 'A is true, R is false', nudge: null },
          {
            label: 'A is false, R is true',
            nudge: '<b>(d)</b> wrongly rejects the well-established name in A.',
          },
        ],
        correct: 2,
        solution:
          'Interphase is conventionally called the resting phase (with respect to visible division), so A is true. But R is false. Interphase is far from inactive: the cell grows, synthesises proteins, and replicates its entire DNA. The whole item turns on recognising that “resting” refers only to the absence of visible division, not to inactivity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing DNA amount with chromosome number.</b> After S phase the DNA doubles but the chromosome count is unchanged; the chromosome number of the cell doubles in anaphase (46 to 92, counting each separated chromatid as a chromosome, with no new DNA made) and each daughter cell returns to 46 at telophase and cytokinesis. Track the two quantities in separate columns whenever a numerical is given.',
          '<b>Misplacing nuclear-envelope breakdown.</b> The envelope disappears by the end of prophase (not in metaphase); it reforms in telophase. A surprising number of marks are lost by writing “metaphase” for its disappearance.',
          '<b>“Resting phase” taken literally.</b> Interphase is the longest phase and far from inactive: never describe it as inactive.',
          '<b>Animal versus plant cytokinesis swap.</b> Furrow = animal (periphery → centre); cell plate = plant (centre → periphery). This exact pair is a NEET staple.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “how many cells / how many divisions” problem, reach straight for 2<sup><i>n</i></sup>: <i>n</i> divisions give 2<sup><i>n</i></sup> cells. Memorise the small powers of two (2<sup>4</sup> = 16, 2<sup>5</sup> = 32, 2<sup>6</sup> = 64, 2<sup>7</sup> = 128, 2<sup>8</sup> = 256) and you can answer these in seconds without working anything out.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Cell cycle = Interphase (> 95%) + M phase.</b> Order: <b>G<sub>1</sub> → S → G<sub>2</sub> → Prophase → Metaphase → Anaphase → Telophase → Cytokinesis.</b>',
            note: '',
          },
          {
            f: '<b>G<sub>1</sub></b> = growth, no DNA replication; <b>S</b> = DNA doubles (number unchanged), histones made, centriole duplicates; <b>G<sub>2</sub></b> = pre-mitosis growth/protein synthesis; <b>G<sub>0</sub></b> = quiescent/differentiated, out of cycle.',
            note: '',
          },
          {
            f: 'Mitosis is equational',
            note: 'parent and both daughters have the <b>same chromosome number</b>; occurs in <b>somatic</b> cells, in dividing <b>germ-line</b> cells (before meiosis) and in the <b>zygote</b>, in <b>both haploid and diploid</b> cells.',
          },
          {
            f: 'Stage one-liners (PMAT)',
            note: 'Prophase = condensation + spindle starts, envelope gone by end; Metaphase = equatorial plate, best for chromosome study; Anaphase = centromeres split, chromatids to poles; Telophase = decondense + envelope reforms.',
          },
          {
            f: 'Cytokinesis',
            note: 'animal = <b>cleavage furrow</b> (periphery → centre); plant = <b>cell plate</b> (centre → wall). Karyokinesis without cytokinesis ⇒ <b>syncytium</b> (coconut liquid endosperm).',
          },
          {
            f: 'Significance',
            note: 'growth, repair/regeneration, constant chromosome number, cell-size control; unchecked ⇒ cancer.',
          },
          { f: 'Cells from one cell after <i>n</i> divisions', note: '2<sup><i>n</i></sup>.' },
        ],
        aids: ['“PMAT”: Prophase, Metaphase, Anaphase, Telophase: “<b>P</b>lease <b>M</b>ake <b>A</b> <b>T</b>wo.”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 599–605 ─────────────────────────
  {
    n: '02',
    title: 'Meiosis I',
    kalam: 'Mitosis makes copies; meiosis makes variety.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the entire chapter. CBSE Boards ask the five substages of prophase I and their defining events (3–5 marks), and “differentiate mitosis from meiosis.” CUET drills single-fact recall: which substage shows synapsis, crossing over, chiasmata. NEET treats prophase I as near-compulsory: substage ordering, the synaptonemal complex, and the reductional-division concept recur almost yearly (the book’s estimate from past papers, not official figures), frequently as match-the-column and assertion–reason items.',
      },
      {
        t: 'p',
        html: 'Mitosis makes copies; meiosis makes variety. That single contrast is the doorway to this whole topic. Sexual reproduction needs two things that ordinary cell division cannot provide on its own: a way to <b>halve</b> the chromosome number (so that when two gametes fuse, the offspring inherits the normal count rather than double it), and a way to <b>shuffle</b> the parental genetic material so that offspring are not carbon copies of either parent. Meiosis achieves both, and it does so across two successive divisions (Meiosis I and Meiosis II) following just a single round of DNA replication.',
      },
      { t: 'p', html: 'The crucial half of that work happens in <b>Meiosis I</b>, our subject here.' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two cousins, one from your mother’s side and one from your father’s side, each arriving at a family gathering carrying an identical-format photo album of the same events, but with subtly different pictures (these are the two <b>homologous chromosomes</b>, one maternal, one paternal, carrying genes for the same traits but in possibly different versions). In Meiosis I, the two cousins first find each other and stand side by side, page for page (<b>synapsis</b>). While paired, they swap a few photographs between their albums (<b>crossing over</b>), so each album now contains a fresh mix of family pictures that existed in neither original. Finally the two cousins walk off to opposite ends of the hall (<b>separation of homologues</b>), each carrying one, now reshuffled, album. The single “pair” has become two, and each new cell has half the original number of chromosomes. That halving is why Meiosis I is called the <b>reductional division</b>.',
      },
      {
        t: 'p',
        html: 'Two features make Meiosis I unmistakably different from a mitotic division:<br>1. <b>Homologous chromosomes pair up.</b> In mitosis they never do; in Meiosis I, pairing (synapsis) is the central event of prophase I and the prerequisite for crossing over.<br>2. <b>It is the homologous chromosomes, not the sister chromatids, that separate in anaphase I.</b> Each chromosome that moves to a pole still consists of two sister chromatids joined at their centromere. (Separating the sister chromatids is the job of Meiosis II, the equational division.)',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions:</b>' },
      {
        t: 'p',
        html: '• Meiosis occurs <b>in diploid meiocytes</b> (a haploid cell has no homologous pairs to synapse): you cannot pair homologues if you do not have them in pairs to begin with. (Mitosis, by contrast, runs in both haploid and diploid cells.)<br>• Meiosis happens <b>at one specific point in the life cycle</b> of a sexually reproducing organism (gamete or spore formation), in many meiocytes.<br>• Prophase I is extraordinarily long and complex compared with mitotic prophase, so much so that it is broken into five named sub-stages. Treating it as “just prophase” is the commonest conceptual error here.',
      },

      { t: 'part', title: 'Key stages, events and definitions' },
      {
        t: 'def',
        term: 'Meiosis',
        html: 'a specialised division of a diploid cell, comprising two sequential nuclear divisions (<b>Meiosis I</b> and <b>Meiosis II</b>) preceded by a single DNA replication, producing up to four haploid cells.',
      },
      {
        t: 'def',
        term: 'Meiosis I, reductional division',
        html: 'chromosome number is halved (2n → n). Homologous chromosomes separate.',
      },
      {
        t: 'def',
        term: 'Meiosis II, equational division',
        html: 'chromosome number is conserved; sister chromatids separate. (Detailed under Meiosis II & Significance, Topic 03.)',
      },
      { t: 'p', html: '<b>Stages of Meiosis I:</b> Prophase I → Metaphase I → Anaphase I → Telophase I.' },
      {
        t: 'table',
        title: 'Prophase I: the longest and most elaborate stage, divided into five sub-stages',
        head: ['Sub-stage', 'Defining event'],
        rows: [
          ['Leptotene', 'Chromosomes condense and become visible as thin, long, thread-like structures.'],
          [
            'Zygotene',
            '<b>Synapsis</b>: pairing of homologous chromosomes; the <b>synaptonemal complex</b> (a protein structure that holds the homologues in register) begins to form between them. A paired unit is a <b>bivalent</b> (or <b>tetrad</b>).',
          ],
          [
            'Pachytene',
            'Bivalents clearly visible as tetrads; <b>crossing over</b> occurs: exchange of segments between <b>non-sister chromatids</b> of homologous chromosomes.',
          ],
          [
            'Diplotene',
            'Synaptonemal complex dissolves; homologues begin to repel/separate but remain joined at <b>chiasmata</b> (the X-shaped sites of crossing over), which first become clearly visible.',
          ],
          [
            'Diakinesis',
            '<b>Terminalization</b> of chiasmata; chromosomes fully condensed; nucleolus and nuclear envelope disappear; meiotic spindle assembles. Marks the end of prophase I.',
          ],
        ],
      },
      { t: 'p', html: '<b>Key definitions:</b>' },
      {
        t: 'def',
        term: 'Synapsis',
        html: 'the close, point-for-point pairing of homologous chromosomes.',
      },
      {
        t: 'def',
        term: 'Bivalent / Tetrad',
        html: 'a synapsed pair of homologous chromosomes; comprises two chromosomes and four chromatids.',
      },
      {
        t: 'def',
        term: 'Crossing over',
        html: 'exchange of genetic material between non-sister chromatids of homologous chromosomes; the molecular basis of recombination.',
      },
      {
        t: 'def',
        term: 'Chiasma (pl. chiasmata)',
        html: 'the visible cross-point where crossing over has occurred and homologues remain attached.',
      },
      {
        t: 'def',
        term: 'Terminalization',
        html: 'the progressive shifting of chiasmata toward the chromosome ends.',
      },
      {
        t: 'def',
        term: 'Interkinesis',
        html: 'the brief interphase-like stage between Meiosis I and Meiosis II.',
      },
      {
        t: 'def',
        term: 'Metaphase I',
        html: 'bivalents align at the equatorial plate; spindle fibres attach to the kinetochores, with the two homologues of each bivalent oriented toward opposite poles.',
      },
      {
        t: 'def',
        term: 'Anaphase I',
        html: 'homologous chromosomes separate (<b>disjunction</b>) and move to opposite poles; sister chromatids of each chromosome <b>remain attached</b> at the centromere.',
      },
      {
        t: 'def',
        term: 'Telophase I',
        html: 'chromosomes reach the poles; nuclear envelope may reform; cytokinesis may follow, yielding two <b>haploid</b> cells (each chromosome still has two chromatids).',
      },

      { t: 'part', title: 'Phase-by-phase process walkthrough' },
      {
        t: 'p',
        html: 'We follow one diploid cell that has already completed S phase, so every chromosome already carries two sister chromatids.',
      },
      {
        t: 'p',
        html: '<b>Prophase I, Step 1: Leptotene.</b> The replicated chromatin condenses into visible threads. Why first? Because the delicate pairing that follows requires the homologues to be organised enough to recognise and align with each other.',
      },
      {
        t: 'p',
        html: '<b>Prophase I, Step 2: Zygotene (synapsis begins).</b> Each chromosome seeks out its homologous partner and pairs with it, point for point, along their lengths. A protein scaffold called the <b>synaptonemal complex</b> zips the pair together, holding them in precise register. The paired structure is a <b>bivalent</b>, and since each chromosome has two chromatids, a bivalent contains four chromatids, hence the name <b>tetrad</b>. <b>Why this matters:</b> only homologues held in exact alignment can later exchange matching segments without losing or gaining genes.',
      },
      { t: 'fig', id: 'b11-10-fig-10.3' },
      {
        t: 'p',
        html: '<b>Prophase I, Step 3: Pachytene (crossing over).</b> With the homologues firmly synapsed, the cell performs <b>crossing over</b>: non-sister chromatids of the paired homologues exchange equivalent segments. The exchange is enzyme-mediated: it occurs at specialised structures called <b>recombination nodules</b> that sit on the synaptonemal complex, and is carried out by enzymes of the <b>recombinase</b> group. Why non-sister? Because exchanging between sister chromatids (which are identical copies) would produce no new combination: variation only arises when maternal and paternal material is swapped. This is a major source of genetic recombination in the whole process.',
      },
      {
        t: 'p',
        html: '<b>Prophase I, Step 4: Diplotene.</b> The synaptonemal complex now dissolves, and the homologues begin to push apart. But they cannot fully separate yet, because they remain physically tethered at the <b>chiasmata</b>, the very points where crossing over occurred. These X-shaped junctions become clearly visible here, providing direct microscopic evidence that exchange has taken place.',
      },
      { t: 'fig', id: 'b11-10-fig-10.4' },
      {
        t: 'p',
        html: '<b>Prophase I, Step 5: Diakinesis.</b> The chiasmata slide toward the chromosome tips (<b>terminalization</b>), the chromosomes reach maximum condensation, and the nucleolus and nuclear envelope disappear as the meiotic spindle assembles. Prophase I ends.',
      },
      {
        t: 'p',
        html: '<b>Step 6, Metaphase I.</b> The bivalents are moved to the equatorial plate. Here is the second decisive difference from mitosis: the spindle attaches so that the <b>two homologues of each bivalent face opposite poles</b> (in mitosis it is the two sister chromatids of a single chromosome that face opposite poles). The maternal-or-paternal orientation of each bivalent is random and independent of every other bivalent; this <b>independent assortment</b> of homologues is a second source of genetic variation, working alongside crossing over.',
      },
      {
        t: 'p',
        html: '<b>Step 7, Anaphase I.</b> The homologous chromosomes are pulled apart to opposite poles; this <b>disjunction</b> is the moment the chromosome number is reduced from diploid to haploid. Critically, the <b>sister chromatids stay joined</b> at their centromere; whole (two-chromatid) chromosomes travel to each pole.',
      },
      { t: 'fig', id: 'b11-10-fig-10.5' },
      {
        t: 'p',
        html: '<b>Step 8, Telophase I & Interkinesis.</b> Two haploid nuclei form; cytokinesis often follows to give two cells. A short <b>interkinesis</b> bridges into Meiosis II. Because the chromosomes already carry two chromatids, no further DNA replication is needed before the second division.',
      },
      {
        t: 'p',
        html: '<b>Meiosis I versus a mitotic division: the three contrasts.</b> It helps to hold the two divisions side by side, because many exam items exploit the differences. First, <b>pairing:</b> homologous chromosomes synapse in prophase I (forming bivalents), whereas in mitosis chromosomes behave individually and never pair. Second, <b>what separates in anaphase:</b> Meiosis I separates whole <b>homologous chromosomes</b> (each still two chromatids), while mitotic anaphase splits the centromere and separates <b>sister chromatids</b>. Third, <b>the outcome:</b> Meiosis I is <b>reductional</b>: one diploid cell yields two haploid cells, whereas mitosis is conservative, yielding two cells identical to the parent. A useful shared fact to remember is that in both divisions the nucleolus and nuclear envelope disappear (in meiosis, specifically by diakinesis) and reappear once division is complete; the machinery of breakdown and reassembly is the same, but the choreography of the chromosomes is not.',
      },
      {
        t: 'p',
        html: '<b>Significance of Meiosis I:</b> it halves the chromosome number, which is precisely what keeps the chromosome count constant from one generation to the next in sexually reproducing organisms: the halving in gamete formation is balanced by the doubling at fertilisation. Equally important, through crossing over (and the random, independent orientation of each bivalent at metaphase I) it scrambles the maternal and paternal genetic material into new combinations, generating the variation on which natural selection acts. Without Meiosis I, sexual reproduction would neither preserve the species’ chromosome number nor produce genetically diverse offspring.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Name the sub-stage of prophase I in which each of the following occurs: (a) synapsis, (b) appearance of the synaptonemal complex, (c) crossing over, (d) first clear appearance of chiasmata, (e) terminalization of chiasmata.',
        steps: [
          '(a) Synapsis: <b>Zygotene.</b> (b) Synaptonemal complex appears: <b>Zygotene.</b> (c) Crossing over: <b>Pachytene.</b> (d) Chiasmata first clearly visible: <b>Diplotene.</b> (e) Terminalization: <b>Diakinesis.</b>',
          '<b>Presentation point:</b> learn these as a fixed five-row table; Boards award one mark per correct pairing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: 'Arrange the sub-stages of prophase I in correct sequence and state which one marks the end of prophase I: Pachytene, Diakinesis, Leptotene, Diplotene, Zygotene.',
        steps: ['<b>Memory aid:</b> “<b>L</b>ate <b>Z</b>ebras <b>P</b>lay <b>D</b>rums <b>D</b>aily.”'],
        ans: '<b>Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis.</b> <b>Diakinesis</b> marks the end of prophase I (chiasmata terminalize, nuclear envelope disappears).',
      },
      {
        t: 'ex',
        tag: 'NEET level, match-the-column',
        q: 'Match Column I with Column II.<br><b>Column I</b><br>A. Zygotene<br>B. Pachytene<br>C. Anaphase I<br>D. Metaphase I<br><b>Column II</b><br>(i) Crossing over between non-sister chromatids<br>(ii) Homologous chromosomes separate (disjunction)<br>(iii) Synapsis; synaptonemal complex forms<br>(iv) Bivalents align at the equatorial plate',
        steps: [
          'A → (iii) Zygotene = synapsis and synaptonemal complex. B → (i) Pachytene = crossing over. C → (ii) Anaphase I = separation of homologues. D → (iv) Metaphase I = bivalents at the equator.',
        ],
        ans: '<b>A-iii, B-i, C-ii, D-iv.</b>',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, assertion–reason',
        q: 'Assertion (A): Meiosis I is called the reductional division. Reason (R): During anaphase I, the sister chromatids of each chromosome separate and move to opposite poles. Choose: <b>(a)</b> both true, R correct explanation; <b>(b)</b> both true, R not the explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>A is true:</b> Meiosis I halves the chromosome number (2n → n), so it is the reductional division. <b>R is false:</b> in anaphase I it is the <b>homologous chromosomes</b> that separate, not the sister chromatids; the chromatids remain joined at the centromere (their separation is the equational event of Meiosis II).',
          'This item targets a classic misconception in this chapter: students who think anaphase I separates chromatids will wrongly mark (a).',
        ],
        ans: '<b>(c) A is true, R is false.</b>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define synapsis and name the prophase-I sub-stage in which it occurs.',
            a: 'Synapsis = point-for-point pairing of homologous chromosomes; occurs in <b>zygotene</b>.',
          },
          {
            q: '[CUET] In which sub-stage of prophase I does the synaptonemal complex dissolve?',
            a: '<b>Diplotene.</b>',
          },
          {
            q: '[NEET] A diploid cell with 2n = 24 undergoes Meiosis I. State the number of chromosomes and the number of chromatids per chromosome in each cell at the end of Meiosis I.',
            a: 'Each cell has <b>12 chromosomes</b>, with <b>2 chromatids per chromosome</b> (the DNA per cell is already halved, 4C to 2C; each chromosome still has two chromatids, which separate in Meiosis II).',
          },
          {
            q: '[NEET] Distinguish between the events of anaphase of mitosis and anaphase I of meiosis with respect to what separates.',
            a: 'Mitotic anaphase: <b>sister chromatids</b> separate (centromeres split). Anaphase I: <b>homologous chromosomes</b> separate; centromeres do not split and sister chromatids stay together.',
          },
          {
            q: '[NEET, assertion–reason] Assertion: Crossing over occurs between non-sister chromatids. Reason: Exchange between sister chromatids would not generate new genetic combinations. Evaluate. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(a). Both true and the Reason is the correct explanation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Synapsis and the formation of the synaptonemal complex occur during:',
        opts: [
          {
            label: 'Leptotene',
            nudge: '<b>(a)</b> Leptotene only condenses the chromosomes into threads: no pairing yet.',
          },
          { label: 'Zygotene', nudge: null },
          {
            label: 'Pachytene',
            nudge: '<b>(c)</b> Pachytene is after pairing; it is where crossing over happens, on already-synapsed homologues.',
          },
          {
            label: 'Diplotene',
            nudge: '<b>(d)</b> Diplotene is where the complex dissolves, the opposite event.',
          },
        ],
        correct: 1,
        solution: 'Pairing of homologues and the appearance of the synaptonemal complex define zygotene.',
      },
      {
        t: 'mcq',
        q: 'During anaphase I of meiosis:',
        opts: [
          {
            label: 'Sister chromatids separate',
            nudge: '<b>(a)</b> and <b>(c)</b> describe what happens in mitotic anaphase / Meiosis II (centromere splitting and chromatid separation).',
          },
          { label: 'Homologous chromosomes separate, sister chromatids stay together', nudge: null },
          {
            label: 'Centromeres of each chromosome split',
            nudge: '<b>(a)</b> and <b>(c)</b> describe what happens in mitotic anaphase / Meiosis II (centromere splitting and chromatid separation).',
          },
          {
            label: 'Chromosome number remains diploid',
            nudge: '<b>(d)</b> is false: the very purpose of anaphase I is to make the cell haploid.',
          },
        ],
        correct: 1,
        solution:
          'Homologues are pulled apart while each chromosome’s two chromatids remain joined: this is the reductional step.',
      },
      {
        t: 'mcq',
        q: 'Chiasmata are first clearly visible during:',
        opts: [
          {
            label: 'Zygotene',
            nudge: '<b>(a)</b> Zygotene is pairing, before any exchange.',
          },
          {
            label: 'Pachytene',
            nudge: '<b>(b)</b> Pachytene is where crossing over occurs, but the chiasmata are not yet distinctly visible because the homologues are still tightly synapsed: a subtle but favourite NEET distinction.',
          },
          { label: 'Diplotene', nudge: null },
          {
            label: 'Diakinesis',
            nudge: '<b>(d)</b> By diakinesis the chiasmata are already terminalizing, not first appearing.',
          },
        ],
        correct: 2,
        solution:
          'As the synaptonemal complex dissolves and homologues repel, the points of crossing over become visible as chiasmata.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): Meiosis occurs in diploid meiocytes. Reason (R): Meiosis requires the pairing of homologous chromosomes, which a haploid cell does not have.',
        opts: [
          { label: 'Both true, R correct explanation', nudge: null },
          {
            label: 'Both true, R not the explanation',
            nudge: '<b>(b)</b> wrongly severs the causal link, which is in fact direct.',
          },
          {
            label: 'A true, R false',
            nudge: '<b>(c)</b> wrongly rejects a true statement in R; students unsure whether a haploid cell can pair homologues may second-guess into this.',
          },
          {
            label: 'A is false, R is true',
            nudge: '<b>(d)</b> wrongly rejects a true statement in A; students unsure whether meiosis “could” occur in haploid cells may second-guess into this.',
          },
        ],
        correct: 0,
        solution:
          'A is true (meiosis occurs in diploid meiocytes), R is true (synapsis needs homologous pairs), and R is exactly why A holds: without homologues there can be no pairing, hence no meiosis.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking anaphase I separates chromatids.</b> It separates homologous chromosomes; chromatids stay joined until Meiosis II. This point is tested often (the book’s estimate from past papers, not official figures).',
          '<b>Confusing where crossing over happens versus where chiasmata appear.</b> Crossing over = <b>pachytene</b>; chiasmata first clearly visible = <b>diplotene</b>. They are adjacent but distinct.',
          '<b>Calling Meiosis I “equational.”</b> Meiosis I is <b>reductional</b> (2n → n); Meiosis II is equational. Reversing them is a classic slip.',
          '<b>Forgetting that no DNA replication occurs before Meiosis II.</b> Interkinesis is brief and skips S phase: the chromosomes are already duplicated.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Anchor the five sub-stages to one signature event each: Leptotene = threads, Zygotene = synapsis, Pachytene = crossing over, Diplotene = chiasmata visible, Diakinesis = terminalization. If a question names an event, you can name the sub-stage instantly without recalling the whole list.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Meiosis = 2 divisions, 1 replication → 4 haploid cells. Meiosis I = reductional (2n → n); Meiosis II = equational.</b>',
            note: '',
          },
          {
            f: 'Prophase I sub-stages (L-Z-P-D-D)',
            note: '<b>L</b>eptotene (threads) → <b>Z</b>ygotene (synapsis, synaptonemal complex, bivalent/tetrad) → <b>P</b>achytene (crossing over, non-sister chromatids) → <b>D</b>iplotene (chiasmata visible, complex dissolves) → <b>D</b>iakinesis (terminalization, envelope gone).',
          },
          { f: 'Metaphase I', note: 'bivalents at equator, homologues face opposite poles.' },
          {
            f: '<b>Anaphase I: homologues separate (disjunction); sister chromatids stay joined.</b>',
            note: '',
          },
          { f: '<b>Telophase I → interkinesis</b> (brief, no S phase) → Meiosis II.', note: '' },
          {
            f: 'Significance',
            note: 'halves chromosome number (genetic constancy across generations) + crossing over generates variation.',
          },
        ],
        aids: [
          'Sub-stage order: “<b>L</b>ate <b>Z</b>ebras <b>P</b>lay <b>D</b>rums <b>D</b>aily”',
          'Event anchors: “threads, synapse, cross, chiasma, terminate.”',
        ],
      },
    ],
  },
];
