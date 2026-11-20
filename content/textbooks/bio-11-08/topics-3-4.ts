import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 8 (Cell: The Unit of Life), Topics 03 and 04: pp. 490 to
 * 503 of the Class 11 Biology Master Reference, word for word. Topic 03,
 * Cytoskeleton, Cilia & Flagella, Nucleus & Chromosomes (pp. 490–498), has the
 * usual eight sections; Topic 04, Chapter Synthesis: Master Comparisons & Quick
 * Revision (pp. 499–503), has its own eight sections, used as its parts. Figure
 * 8.5 (caption p. 491, drawn p. 492) and Figure 8.6 (caption p. 494, drawn
 * p. 495) are redrawn in lib/diagrams/biology-11-08.ts; these pages draw
 * nothing else. The book prints its options and answers as (a) to (d): kept.
 * Emphasis italics are dropped; em dashes become colons, commas or brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 490–498 ─────────────────────────
  {
    n: '03',
    title: 'Cytoskeleton, Cilia & Flagella, Nucleus & Chromosomes',
    kalam: 'A diagram-and-detail topic that rewards precision.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A diagram-and-detail topic that rewards precision. CBSE Boards ask 1–3 mark items on the nucleus, nucleolus, and chromosome types. CUET leans on the cilia-vs-flagella distinction and matching chromosome shapes to centromere position. NEET often carries 1–2 questions (the book’s estimate from past papers, not official figures) on the <b>9+2</b> axoneme, the centriole’s <b>9+0</b> cartwheel, and satellite/secondary-constriction terminology, and is fond of assertion–reason items contrasting eukaryotic with bacterial flagella.',
      },
      {
        t: 'p',
        html: 'If the organelles of the last topic were the cell’s factories and warehouses, this topic is about its <b>scaffolding, its engines of movement, and its head office</b>. Three loosely related things share the stage: the <b>cytoskeleton</b> that holds the cell in shape, the <b>cilia and flagella</b> that move it, and the <b>nucleus</b> that governs it, with <b>chromosomes</b> as the documents locked inside that office.',
      },
      {
        t: 'p',
        html: 'Start with the scaffolding. A building does not keep its shape by accident; steel beams hold it up. A cell, despite being soft and watery, holds a definite shape and can shuttle organelles around because it is laced with a protein meshwork: the <b>cytoskeleton</b>, an interwoven network of fine tubules and filaments. It provides mechanical support, anchors organelles, and powers internal movement.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the oars of a Kerala snake-boat beating in rhythm. The short, numerous oars sweeping in coordinated strokes are like <b>cilia</b>: many small hair-like projections that row the cell through fluid or sweep fluid past it. A single long oar at the stern doing the heavy propulsion is like a <b>flagellum</b>: fewer, longer, built for locomotion. And here is the elegant part: slice either one across and you find the same internal blueprint, a ring of nine paired tracks around two central ones, the famous <b>9+2 array</b>. They differ in number and length, not in design.',
      },
      {
        t: 'p',
        html: 'Now the head office. The <b>nucleus</b> is wrapped in a double-membraned <b>nuclear envelope</b> punctured by pores, so it is in constant, controlled conversation with the cytoplasm. Inside floats the <b>nucleolus</b>: not a walled room, just a dense knot where ribosomes are assembled, and the <b>chromatin</b>, the thread of DNA wound on protein. When the cell prepares to divide, that loose chromatin condenses into discrete <b>chromosomes</b>, each pinched at a <b>centromere</b>. It is this office that stores the cell’s hereditary information and directs its day-to-day activities, so its contents are guarded and its traffic tightly controlled. Where that pinch sits along the length decides the chromosome’s shape, and that single geometric fact drives a whole family of exam questions.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions students trip on. First, <b>centrioles and centrosomes are an animal-cell feature</b>: higher plants build their spindle without them, so do not draw centrioles into a typical plant cell. Second, the eukaryotic flagellum and the <b>bacterial flagellum are not the same machine</b> despite the shared name: the eukaryotic one has the 9+2 microtubule axoneme covered by membrane, while the bacterial one is a thin protein filament (with hook and basal body) and has no 9+2 core. Treating them as identical is a common trap in the chapter.',
      },

      { t: 'part', title: 'Cell components and diagnostic features' },
      {
        t: 'table',
        title: 'Cilia vs flagella',
        head: ['Feature', 'Cilia', 'Flagella'],
        rows: [
          ['Number', 'Many', 'Few (often one or a couple)'],
          ['Length', 'Short', 'Long'],
          ['Main role', 'Move the cell or sweep the surrounding medium', 'Locomotion'],
          ['Core (axoneme)', '9 + 2 microtubules', '9 + 2 microtubules'],
          ['Arise from', 'Basal body (a centriole)', 'Basal body (a centriole)'],
        ],
      },
      {
        t: 'table',
        title: 'Microtubule arrays: the two patterns that matter',
        head: ['Structure', 'Arrangement'],
        rows: [
          ['Axoneme of cilium/flagellum', '<b>9 + 2</b> (9 peripheral doublets + 2 central)'],
          ['Centriole', '<b>9 + 0</b> (9 peripheral triplets, no central)'],
        ],
      },
      {
        t: 'table',
        title: 'Chromosome types by centromere position (the headline matching question)',
        head: ['Type', 'Centromere position', 'Arms'],
        rows: [
          ['Metacentric', 'Middle', 'Two equal arms'],
          ['Sub-metacentric', 'Slightly off-centre', 'Slightly unequal arms'],
          ['Acrocentric', 'Near one end', 'One very short + one very long'],
          ['Telocentric', 'Terminal (at the tip)', 'Effectively one arm'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key terms.</b> Centromere: the primary constriction holding sister chromatids, bearing the <b>kinetochore</b> (protein–DNA disc for spindle attachment). Secondary constriction: a second pinch; the segment beyond it is the <b>satellite</b>, and such a chromosome is a <b>SAT chromosome</b>, associated with the nucleolus: the nucleolus forms at its secondary-constriction region, the nucleolar organiser. Nucleolus: non-membranous body inside the nucleus; site of <b>rRNA synthesis</b> and ribosome assembly (not the nucleoplasm, a classic trap). Chromatin: DNA wound on histone proteins; condenses into chromosomes at division.',
      },
      { t: 'fig', id: 'b11-08-fig-8.5' },

      { t: 'part', title: 'Comparative cell architecture and organelle function' },
      {
        t: 'p',
        html: '<b>The cytoskeleton.</b> Running through the cytoplasm is a network of proteinaceous filaments, principally <b>microtubules</b> and <b>microfilaments</b> (with intermediate filaments as a third class). These are protein polymers, microtubules built from tubulin and microfilaments from actin, assembled and disassembled as the cell’s needs change. Far from being inert packing, this meshwork performs several jobs at once: it gives the cell <b>mechanical support and shape</b>, it <b>anchors and positions organelles</b>, it drives the internal <b>streaming</b> of cytoplasm that redistributes contents, and its microtubules supply the <b>spindle fibres</b> that move chromosomes during division. Cilia and flagella, described next, are built on the same microtubule machinery.',
      },
      {
        t: 'p',
        html: '<b>Cilia and flagella.</b> These are hair-like outgrowths of the cell surface, each sheathed in an extension of the <b>plasma membrane</b> and cored by a bundle of microtubules called the <b>axoneme</b>. The axoneme follows the <b>9 + 2</b> plan: nine <b>peripheral doublet</b> microtubules forming a ring, plus <b>two central</b> microtubules enclosed in a <b>central sheath</b>. The peripheral doublets are tied to the central sheath by <b>radial spokes</b> and linked to one another by linkers (the two central microtubules are joined by a bridge), while <b>arms</b> projecting from each doublet supply the sliding force that bends the structure. Both cilia and flagella emerge from a <b>basal body</b>, which is itself a centriole. Cilia tend to occur in large numbers and beat in coordinated waves, sweeping fluid or particles across an epithelial surface, or rowing a unicellular organism along, whereas flagella are fewer and longer and drive whole-cell locomotion, as in a sperm cell. The distinction from the <b>bacterial flagellum</b> is worth stating outright: the bacterial version is a slender protein filament with a hook and basal body and has <b>no 9+2 axoneme</b>, so the two are analogous in job but utterly different in build.',
      },
      {
        t: 'p',
        html: '<b>Centrosome and centrioles.</b> The <b>centrosome</b> is an organising centre, in animal cells, that contains two <b>centrioles</b> lying perpendicular to each other. A centriole is a hollow cylinder with a <b>cartwheel</b> organisation built from <b>nine peripheral microtubule triplets and no central tubule: a 9 + 0 pattern.</b> Centrioles are <b>non-membrane-bound</b>, they form the <b>basal bodies</b> of cilia and flagella, and during cell division they help organise the spindle, duplicating beforehand so that each daughter cell inherits a centrosome. (Remember: present in animals; absent from higher plants, though some lower plant cells have them.)',
      },
      {
        t: 'p',
        html: '<b>The nucleus.</b> The cell’s control centre is bounded by the <b>nuclear envelope</b>: two parallel membranes separated by a perinuclear space, the outer one continuous with the endoplasmic reticulum and often studded with ribosomes. The envelope is perforated by <b>nuclear pores</b>, the regulated gateways for traffic between nucleus and cytoplasm, allowing RNA and proteins to move in both directions while keeping the bulk of the chromatin safely enclosed. Within lies the <b>nucleoplasm</b> (karyolymph), holding two key contents: the <b>nucleolus</b>, a dense, non-membranous region that manufactures rRNA and assembles ribosomal subunits, and the <b>chromatin</b>, an extended thread of DNA complexed with <b>histone</b> proteins.',
      },
      {
        t: 'p',
        html: 'Most cells carry a single nucleus, but the number is not universal: some cells are <b>multinucleate</b> (a syncytium, as in striated muscle), and a few mature cells become <b>enucleate</b>, losing the nucleus entirely: the mammalian red blood cell and the sieve-tube element of phloem are the standard examples. The nuclear envelope is not permanent either; it breaks down at the onset of division and reassembles around the daughter nuclei afterward. The nucleolus is correspondingly larger and more prominent in cells busy with protein synthesis, since heavy demand for ribosomes means heavy rRNA production. (Contrast all of this with a prokaryote, whose genetic material sits in an envelope-free <b>nucleoid</b>: there is no true nucleus to organise.)',
      },
      {
        t: 'p',
        html: '<b>Chromosome structure.</b> When a dividing cell condenses its chromatin, each <b>chromosome</b> appears as a defined body marked by a <b>centromere</b> at its <b>primary constriction</b>, where a protein–DNA <b>kinetochore</b> anchors the spindle fibres and ensures the accurate segregation of the chromatids. Chemically, a chromosome is a complex of <b>DNA, histone and non-histone proteins</b> (with some RNA). A replicated chromosome consists of two <b>sister chromatids</b> held together at the centromere: identical strands carrying the same genetic information, which is why their precise separation matters so much. The position of that centromere classifies the chromosome into the four types tabulated above: metacentric, sub-metacentric, acrocentric, and telocentric. Some chromosomes carry a <b>secondary constriction</b> as well; the small terminal segment beyond it is the <b>satellite</b>, and a satellite-bearing <b>SAT chromosome</b> is associated with the nucleolus: the nucleolus forms at its secondary-constriction region, the <b>nucleolar organiser</b>. The number of chromosomes is characteristic and constant for a given species, which is why the genomic content of the nucleus stays fixed across the individuals of that species. (In Class 11, chromatin is treated as this DNA–histone thread; the finer split into transcriptionally active <b>euchromatin</b> and condensed, inactive <b>heterochromatin</b> is taken up again in Class 12.)',
      },
      { t: 'fig', id: 'b11-08-fig-8.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Short answer.</b> “Distinguish a metacentric chromosome from an acrocentric chromosome.”',
        steps: [
          '<b>Reasoning.</b> Both are classified by centromere position. In a <b>metacentric</b> chromosome the centromere sits at the <b>middle</b>, producing <b>two arms of equal length</b>, so the chromosome looks symmetric (an even “X”). In an <b>acrocentric</b> chromosome the centromere lies <b>close to one end</b>, giving <b>one very short arm and one very long arm</b>, a lop-sided shape. The marking point is naming both the centromere position and the resulting arm lengths.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Diagram identification.</b> A cilium is cut across and three features are labelled: X (a ring of nine paired tubules), Y (two tubules at the centre), Z (struts joining X to the centre). Identify X, Y, Z.',
        steps: [
          '<b>Reasoning.</b> Work outward from the name “9+2.” X is the ring of <b>nine peripheral doublet microtubules</b>; Y is the <b>two central microtubules</b>; Z, the struts running between the periphery and the centre, are the <b>radial spokes</b>. Memory hook: nine around two, spoked like a wheel.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with full distractor analysis.</b> Which statement is correct? <b>(a)</b> Centrioles show a 9 + 2 arrangement of microtubules <b>(b)</b> The axoneme of a flagellum shows a 9 + 0 arrangement <b>(c)</b> Cilia and flagella arise from basal bodies <b>(d)</b> The nucleoplasm is the site of rRNA synthesis',
        steps: [
          'Both cilia and flagella grow out of basal bodies (centrioles). <b>(a)</b> swaps the two patterns: centrioles are <b>9 + 0</b>, not 9 + 2; chosen by students who memorise “9+2” as universal. <b>(b)</b> is the same swap in reverse: the axoneme is <b>9 + 2</b>, not 9 + 0. <b>(d)</b> is the classic nucleus trap: rRNA is synthesised in the <b>nucleolus</b>, not the nucleoplasm.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET assertion–reason',
        q: '<b>High-difficulty.</b> <b>Assertion (A):</b> The flagellum of a bacterium and the flagellum of a sperm cell are structurally identical. <b>Reason (R):</b> The flagellum of a sperm cell contains a 9 + 2 arrangement of microtubules covered by the plasma membrane. Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> Test each clause. A is <b>false</b>: the two are analogous in function but built differently. R is <b>true</b>: the <b>eukaryotic</b> (sperm) flagellum has the 9 + 2 membrane-covered axoneme, while the <b>bacterial</b> flagellum is a bare protein filament with no 9 + 2 core, which is exactly why A fails.',
          'The trap is letting the true description of the sperm flagellum persuade you that the bacterial one is built the same way.',
        ],
        ans: 'Option (d).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe the structure of the nuclear envelope and state the function of nuclear pores.',
            a: 'Two membranes with a perinuclear space, outer continuous with ER; pores regulate nucleus–cytoplasm traffic.',
          },
          {
            q: '[CUET] Name the microtubule arrangement found in (i) a cilium and (ii) a centriole.',
            a: '(i) 9 + 2; (ii) 9 + 0.',
          },
          {
            q: '[NEET] What is a satellite (SAT) chromosome, and with which cellular structure is it associated?',
            a: 'A chromosome bearing a secondary constriction with a terminal satellite segment beyond it; associated with the nucleolus: the nucleolus forms at its secondary-constriction region, the nucleolar organiser.',
          },
          {
            q: '[NEET] Give two structural differences between a eukaryotic flagellum and a bacterial flagellum.',
            a: 'Eukaryotic = 9 + 2 microtubule axoneme, membrane-covered; bacterial = protein filament, no 9 + 2, not a microtubule structure.',
          },
          {
            q: '[NEET assertion–reason] <b>A:</b> Centrioles are not found in the cells of higher plants. <b>R:</b> Higher plants organise their spindle apparatus without a centrosome. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: '(b): both are true, but R does not explain A: building the spindle without a centrosome follows from having no centrioles; it is not the reason they are absent.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The 9 + 2 arrangement of microtubules is characteristic of:',
        opts: [
          { label: 'centriole', nudge: '<b>(a)</b> is 9 + 0.' },
          { label: 'axoneme of cilia and flagella', nudge: null },
          { label: 'nucleolus', nudge: '<b>(c)</b> is a non-tubular rRNA body.' },
          { label: 'bacterial flagellum', nudge: '<b>(d)</b> has no 9+2.' },
        ],
        correct: 1,
        solution:
          'The axoneme is 9 peripheral doublets + 2 central. All three wrong options are the standard “9+2” decoys.',
      },
      {
        t: 'mcq',
        q: 'rRNA synthesis in a eukaryotic cell occurs in the:',
        opts: [
          { label: 'nucleoplasm', nudge: '<b>(a)</b> is the surrounding fluid (the classic mismatch trap).' },
          { label: 'nucleolus', nudge: null },
          { label: 'nuclear envelope', nudge: '<b>(c)</b> is the boundary.' },
          { label: 'cytoskeleton', nudge: '<b>(d)</b> is structural: none synthesise rRNA.' },
        ],
        correct: 1,
        solution: 'The nucleolus assembles ribosomes and makes rRNA.',
      },
      {
        t: 'mcq',
        q: 'A chromosome with its centromere exactly in the middle is:',
        opts: [
          { label: 'acrocentric', nudge: '<b>(a)</b> near-end.' },
          { label: 'telocentric', nudge: '<b>(b)</b> terminal.' },
          { label: 'metacentric', nudge: null },
          { label: 'sub-metacentric', nudge: '<b>(d)</b> slightly off-centre.' },
        ],
        correct: 2,
        solution:
          'Middle centromere → equal arms → metacentric. Students who don’t link position to arm-length mis-pick these.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> found in a typical higher-plant cell?',
        opts: [
          {
            label: 'Nucleolus',
            nudge: '<b>(a), (b), (d)</b> are present in plant cells: chosen by students who forget the plant–animal distinction for centrioles.',
          },
          {
            label: 'Cytoskeleton',
            nudge: '<b>(a), (b), (d)</b> are present in plant cells: chosen by students who forget the plant–animal distinction for centrioles.',
          },
          { label: 'Centriole', nudge: null },
          {
            label: 'Chromatin',
            nudge: '<b>(a), (b), (d)</b> are present in plant cells: chosen by students who forget the plant–animal distinction for centrioles.',
          },
        ],
        correct: 2,
        solution: 'Centrioles/centrosomes are an animal-cell feature; plants form spindles without them.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting centrioles in plant cells.</b> Higher plants typically lack centrioles/centrosomes: don’t include them in a generic plant-cell diagram.',
          '<b>“All flagella are 9+2.”</b> Only <b>eukaryotic</b> cilia/flagella are. The <b>bacterial</b> flagellum is a protein filament with no 9+2 axoneme: a frequently tested contrast.',
          '<b>Nucleolus vs nucleoplasm.</b> rRNA is made in the <b>nucleolus</b> (the dense body), not the nucleoplasm (the surrounding fluid). The exams often swap these.',
          '<b>Centriole 9+0 vs axoneme 9+2.</b> Same “nine outer,” different centre: centriole has <b>no</b> central pair (9+0); the axoneme has <b>two</b> (9+2).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Carry two number-pairs into the exam: <b>9+2 = axoneme</b> (cilia/flagella) and <b>9+0 = centriole</b>. Marks can turn on which pair goes where, and recalling the pair instantly settles the question.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Cytoskeleton</b>',
            note: 'network of microtubules + microfilaments (+ intermediate filaments); support, shape, organelle anchoring, motility.',
          },
          {
            f: '<b>Cilia vs flagella</b>',
            note: 'cilia = many/short (move cell or medium); flagella = few/long (locomotion); both have the <b>9+2 axoneme</b> and arise from a <b>basal body</b>.',
          },
          { f: '<b>Two arrays</b>', note: '<b>axoneme = 9+2 · centriole = 9+0.</b>' },
          {
            f: '<b>Centrosome/centriole</b>',
            note: 'animal cells; non-membranous; form basal bodies + organise the spindle; absent in higher plants.',
          },
          {
            f: '<b>Nucleus</b>',
            note: 'double-membraned envelope + nuclear pores; outer membrane continuous with ER; <b>nucleolus</b> (non-membranous, rRNA + ribosome assembly) and <b>chromatin</b> (DNA + histones) inside.',
          },
          {
            f: '<b>Chromosome</b>',
            note: 'centromere (primary constriction) + kinetochore; types by centromere position: <b>meta</b> (middle), <b>sub-meta</b> (off-centre), <b>acro</b> (near end), <b>telo</b> (terminal); secondary constriction → <b>satellite</b> (SAT chromosome → nucleolus).',
          },
          {
            f: '<b>Don’t confuse</b>',
            note: 'eukaryotic flagellum (9+2, membrane-covered) ≠ bacterial flagellum (protein filament, no 9+2).',
          },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 499–503 ─────────────────────────
  {
    n: '04',
    title: 'Chapter Synthesis: Master Comparisons & Quick Revision',
    kalam: 'This is the revision capstone for the whole chapter.',
    blocks: [
      { t: 'part', title: 'The cell at a glance' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the revision capstone for the whole chapter. CBSE Boards routinely ask the plant-cell-vs-animal-cell and prokaryote-vs-eukaryote distinctions as 2–3 mark questions (the book’s estimate from past papers, not official figures); CUET and NEET draw heavily on the consolidated comparison tables and on chapter-spanning assertion–reason items that mix organelles. If you have studied Topics 01–03, this section locks the whole chapter into a single, exam-ready frame.',
      },
      {
        t: 'p',
        html: 'Step back from the parts and see the whole. Almost every cell, bacterium or blue whale’s neuron, is a bag of <b>cytoplasm</b> (the living ground substance, also called the cytoplasmic matrix) wrapped in a <b>plasma membrane</b>, containing <b>ribosomes</b> and <b>genetic material</b> (a mature mammalian red blood cell loses its nucleus and ribosomes, and a phloem sieve-tube element loses its nucleus, yet both are still cells). That shared minimum is what the cell theory means by “the unit of life.” Beyond that minimum, life took two great architectural decisions.',
      },
      {
        t: 'p',
        html: 'The first decision is <b>how to handle the genetic material and the chemistry of the cell</b>. A <b>prokaryote</b> keeps its DNA naked in the cytoplasm (the nucleoid) and runs every reaction in one undivided space: fast, simple, ancient. A <b>eukaryote</b> locks its DNA inside a membrane-bound <b>nucleus</b> and parcels its chemistry into membrane-bound <b>organelles</b>, so incompatible processes run side by side without interfering. That single contrast, compartmentalised or not, organises the entire chapter.',
      },
      {
        t: 'p',
        html: 'The second decision is <b>how a eukaryote makes its living</b>, and it splits eukaryotes into the <b>plant</b> design (a rigid cellulose wall, plastids to capture light, a giant water-filled vacuole for turgor) and the <b>animal</b> design (no wall, no plastids, but centrioles and a flexible, mobile shape). Hold those two forks, prokaryote/eukaryote and plant/animal, and every fact in this chapter hangs neatly on one of them.',
      },
      {
        t: 'p',
        html: 'The rest of this section is the consolidation: two master comparison tables, a one-look organelle reference, and a chapter-wide revision sheet. Use them to self-test: cover the right-hand column and reconstruct it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The chapter is really one question asked twice: what is walled off from what? Prokaryote vs eukaryote is “is the DNA walled off?” Plant vs animal is “is the whole cell walled off?” Answer those two and the organelles fall into place.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The plant/animal contrast applies to eukaryotes only: it is meaningless for bacteria. “Higher plants lack centrioles” is the safe rule, but some lower plant cells (motile gametes of certain algae and bryophytes) do have them; in the exam, stick to the higher-plant convention unless told otherwise. And remember the cell theory’s standing exception: viruses are acellular and fall outside it.',
      },

      { t: 'part', title: 'Prokaryotic vs eukaryotic cell: master comparison' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Prokaryotic cell', 'Eukaryotic cell'],
        rows: [
          ['Size', 'Generally smaller (bacteria about 3–5 μm; <i>Mycoplasma</i> about 0.3 μm)', 'Generally larger, ~10–20 μm (up to 100)'],
          ['True nucleus', 'Absent: DNA lies in a <b>nucleoid</b>', 'Present: DNA enclosed by nuclear envelope'],
          ['Nuclear membrane', 'Absent', 'Present (double, with pores)'],
          ['Membrane-bound organelles', 'Absent', 'Present (ER, Golgi, mitochondria, etc.)'],
          ['Ribosomes', '<b>70S</b> (50S and 30S subunits)', '<b>80S</b> in cytoplasm (70S in mitochondria/plastids)'],
          ['Genetic material', 'Single, naked, circular DNA + <b>plasmids</b>', 'Linear DNA wound on <b>histones</b>, in chromosomes'],
          [
            'Cell wall',
            '<b>Peptidoglycan</b> wall (absent in <i>Mycoplasma</i>)',
            '<b>Cellulose</b> (plants), <b>chitin</b> (fungi), absent (animals); algal walls differ',
          ],
          [
            'Cell organisation feature',
            '<b>Mesosome</b>, inclusion bodies, chromatophores',
            'Endomembrane system + cytoskeleton + nucleus',
          ],
          ['Cell division', '<b>Binary fission</b>', 'Mitosis / meiosis'],
          ['Examples', 'Bacteria, cyanobacteria, <i>Mycoplasma</i> (PPLO)', 'Protists, fungi, plants, animals'],
        ],
      },
      {
        t: 'p',
        html: 'The most reliable criterion: a <b>membrane-bound nucleus (and organelles)</b> marks a eukaryote. Size and division rate are consequences and overlap; the 70S/80S difference goes with the two designs. (Mature RBCs and sieve-tube cells lose the nucleus but remain eukaryotic.)',
      },

      { t: 'part', title: 'Plant cell vs animal cell: master comparison' },
      {
        t: 'p',
        html: 'Both are eukaryotic, so both have a true nucleus, an endomembrane system, mitochondria, ribosomes and a cytoskeleton. They differ in a short, high-yield list:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Plant cell', 'Animal cell'],
        rows: [
          ['Cell wall', 'Present (cellulose)', 'Absent'],
          ['Plastids (incl. chloroplasts)', 'Present', 'Absent'],
          ['Large central vacuole', 'Present (large; maintains turgor)', 'Absent or small'],
          ['Centriole / centrosome', 'Absent in higher plants', 'Present'],
          ['Lysosomes', 'Rare/less prominent', 'Common/prominent'],
          ['Plasmodesmata', 'Present (cytoplasmic bridges)', 'Absent'],
          ['Stored carbohydrate', 'Starch', 'Glycogen'],
          ['Shape', 'Fixed (rigid wall)', 'Variable (flexible)'],
        ],
      },
      {
        t: 'p',
        html: 'A clean way to remember what a plant cell adds: <b>W-P-V</b>: <b>W</b>all, <b>P</b>lastids, big <b>V</b>acuole.',
      },
      { t: 'p', html: 'What an animal cell uniquely keeps: the <b>centriole</b>.' },

      { t: 'part', title: 'Master organelle reference' },
      {
        t: 'p',
        html: 'One table for the whole chapter: membrane count, where found, and core job:',
      },
      {
        t: 'table',
        title: null,
        head: ['Organelle', 'Membranes', 'Found in', 'Core function'],
        rows: [
          ['Plasma membrane', 'One (bilayer)', 'All cells', 'Selective transport; boundary'],
          ['Cell wall', 'Non-membranous', 'Prokaryotes, algae, plants, fungi', 'Shape, support, protection'],
          ['Endoplasmic reticulum', 'One', 'Eukaryotes', 'RER: protein synthesis; SER: lipid synthesis'],
          ['Golgi apparatus', 'One', 'Eukaryotes', 'Modify, package, secrete; glyco-conjugates'],
          ['Lysosome', 'One', 'Eukaryotes (esp. animal)', 'Intracellular digestion (hydrolases)'],
          ['Vacuole', 'One (tonoplast)', 'Eukaryotes (large in plants)', 'Storage; turgor; osmoregulation'],
          ['Mitochondrion', 'Two', 'Eukaryotes', 'Aerobic respiration → ATP (“power house”)'],
          ['Plastid', 'Two', 'Plant cells, euglenoids', 'Photosynthesis / storage'],
          ['Ribosome', 'None', 'All cells', 'Protein synthesis'],
          ['Microbody', 'One', 'Plant & animal cells', 'Enzyme-driven oxidation reactions'],
          ['Cytoskeleton', 'Non-membranous', 'Eukaryotes', 'Shape, support, motility, spindle'],
          ['Cilia / flagella', 'Sheathed by the plasma membrane (the 9+2 axoneme is non-membranous)', 'Eukaryotes', 'Movement'],
          ['Centriole / centrosome', 'Non-membranous (9+0)', 'Animal cells', 'Spindle; basal bodies'],
          ['Nucleus', 'Two (envelope)', 'Eukaryotes', 'Control centre; houses chromatin/nucleolus'],
        ],
      },
      {
        t: 'p',
        html: 'Memory anchor for membranes: <b>none</b> → ribosome, centriole, cytoskeleton, cell wall · <b>one</b> → ER, Golgi, lysosome, vacuole, microbody · <b>two</b> → mitochondrion, chloroplast, nucleus.',
      },

      { t: 'part', title: 'Whole-chapter worked examples' },
      { t: 'p', html: '(Integrative: each item deliberately crosses topic boundaries.)' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Short answer.</b> “List four features present in a plant cell but absent in an animal cell.”',
        steps: [
          '<b>Reasoning.</b> Cell <b>wall</b> (cellulose), <b>plastids</b> (including chloroplasts), a <b>large central vacuole</b>, and <b>plasmodesmata</b>. A strong answer names them and adds the one reverse fact (the animal cell uniquely keeps the <b>centriole</b>) to show command of both directions.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> A. Nucleoid · B. 80S ribosome · C. Chitin wall · D. Inclusion body<br>(i) Fungal cell · (ii) Eukaryotic cytoplasm · (iii) Free, non-membranous store · (iv) Prokaryotic DNA region',
        steps: [
          '<b>Reasoning.</b> A–(iv) nucleoid is the prokaryotic DNA region; B–(ii) 80S is cytoplasmic-eukaryotic; C–(i) chitin is the fungal wall; D–(iii) inclusion bodies are membrane-less cytoplasmic stores. The trap is pairing the 80S with mitochondria: those run 70S.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>MCQ with distractor analysis.</b> Which set is correctly grouped as “double-membraned”? <b>(a)</b> Mitochondrion, chloroplast, nucleus <b>(b)</b> Lysosome, Golgi, vacuole <b>(c)</b> Ribosome, centriole, cell wall <b>(d)</b> ER, microbody, plasma membrane',
        steps: [
          'The three double-membraned structures of the chapter. <b>(b)</b> are all single-membraned; <b>(c)</b> are all non-membranous; <b>(d)</b> are all single-membraned. Each wrong option is internally consistent, which is what makes the membrane-count recall decisive.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'NEET assertion–reason',
        q: '<b>High-difficulty.</b> <b>A:</b> A bacterial cell can carry out aerobic respiration without possessing mitochondria. <b>R:</b> In prokaryotes, respiratory functions are associated with the <b>mesosome</b> and plasma membrane. Options: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R doesn’t explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is true: many bacteria respire aerobically yet have no mitochondria. R is true and is the explanation: bacteria respire on the plasma membrane (and its infoldings, the mesosomes) without mitochondria, doing there the job that mitochondria do in eukaryotes.',
          '(NCERT lists respiration among mesosome functions; modern electron microscopy treats mesosomes as preparation artefacts, and the respiratory chain sits in the plasma membrane.)',
          'The trap is assuming “no mitochondria = no aerobic respiration,” forgetting the prokaryotic workaround.',
        ],
        ans: 'Option (a).',
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The genetic material of a prokaryote is best described as:',
        opts: [
          { label: 'linear DNA with histones', nudge: '<b>(a)</b> and <b>(c)</b> describe eukaryotes.' },
          { label: 'naked circular DNA in a nucleoid', nudge: null },
          { label: 'DNA enclosed by a nuclear membrane', nudge: '<b>(a)</b> and <b>(c)</b> describe eukaryotes.' },
          { label: 'RNA only', nudge: '<b>(d)</b> is wrong: DNA is the genetic material.' },
        ],
        correct: 1,
        solution: 'Tests the nucleoid concept directly.',
      },
      {
        t: 'mcq',
        q: 'Which is <b>absent</b> in a typical higher-plant cell?',
        opts: [
          {
            label: 'Chloroplast',
            nudge: '<b>(a), (b), (d)</b> are plant hallmarks: chosen by students who blur the plant/animal split.',
          },
          {
            label: 'Central vacuole',
            nudge: '<b>(a), (b), (d)</b> are plant hallmarks: chosen by students who blur the plant/animal split.',
          },
          { label: 'Centriole', nudge: null },
          {
            label: 'Cell wall',
            nudge: '<b>(a), (b), (d)</b> are plant hallmarks: chosen by students who blur the plant/animal split.',
          },
        ],
        correct: 2,
        solution: 'Higher plants lack centrioles.',
      },
      {
        t: 'mcq',
        q: '70S ribosomes are found in:',
        opts: [
          {
            label: 'eukaryotic cytoplasm only',
            nudge: '<b>(a)</b> is the reversed-size trap (cytoplasm is 80S).',
          },
          { label: 'prokaryotes and in mitochondria/chloroplasts', nudge: null },
          { label: 'the nucleolus', nudge: '<b>(c)</b> makes rRNA but is not a 70S site.' },
          { label: 'the Golgi apparatus', nudge: '<b>(d)</b> is not a protein-synthesis site.' },
        ],
        correct: 1,
        solution: '70S spans prokaryotes and the semi-autonomous organelles.',
      },
      {
        t: 'mcq',
        q: 'Inclusion bodies of a prokaryotic cell are:',
        opts: [
          { label: 'bound by a single membrane', nudge: '<b>(a), (b)</b> wrongly add membranes.' },
          { label: 'bound by a double membrane', nudge: '<b>(a), (b)</b> wrongly add membranes.' },
          { label: 'not bound by any membrane', nudge: null },
          {
            label: 'part of the endomembrane system',
            nudge: '<b>(d)</b> wrongly imports a eukaryotic concept into a prokaryote.',
          },
        ],
        correct: 2,
        solution: 'Inclusion bodies lie free in the cytoplasm with no membrane.',
      },

      { t: 'part', title: 'Top exam pitfalls across the chapter' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing the two forks.</b> Prokaryote/eukaryote is about the nucleus; plant/animal is about the wall, plastids, vacuole, centriole. Don’t answer one fork’s question with the other’s facts.',
          '<b>Ribosome-size reversal.</b> 70S = prokaryote + mitochondria/plastids; 80S = eukaryotic cytoplasm. A trap that recurs across the chapter.',
          '<b>“Membrane-bound = endomembrane.”</b> Mitochondria, chloroplasts and microbodies are membrane-bound yet <b>excluded</b>: membership needs coordinated function.',
          '<b>Centrioles in plant cells / mitochondria for all respiration.</b> Higher plants lack centrioles; bacteria respire on the plasma membrane (and its infoldings, the mesosomes) without mitochondria.',
          '<b>Adding membranes to inclusion bodies / nucleoid.</b> Both are membrane-less; membranes enclose only the membrane-bound organelles and the nucleus.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> On any “odd one out” or “correctly grouped” question, sort the options by <b>membrane count (0, 1 or 2)</b> first. Many chapter-spanning MCQs collapse the moment you do this, because the examiner often builds the distractors along that axis.',
      },

      { t: 'part', title: 'Master cheat sheet (whole chapter)' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Cell theory</b>',
            note: 'Schleiden + Schwann (cells & products of cells) + <b>Virchow</b> (cells from pre-existing cells); viruses are the exception.',
          },
          {
            f: '<b>Two forks</b>',
            note: 'Prokaryote vs eukaryote = nucleus walled off? · Plant vs animal = whole cell walled off?',
          },
          {
            f: '<b>Prokaryote</b>',
            note: 'nucleoid (naked circular DNA + plasmids), 70S ribosomes, peptidoglycan wall, <b>mesosome</b>, inclusion bodies (no membrane), shapes = bacillus/coccus/vibrio/spirillum.',
          },
          {
            f: '<b>Plant adds W-P-V</b>',
            note: 'Wall (cellulose), Plastids, big Vacuole; <b>animal keeps the centriole</b>; plant stores starch, animal stores glycogen.',
          },
          {
            f: '<b>Membrane count</b>',
            note: '0 → ribosome, centriole, cytoskeleton, wall · 1 → ER, Golgi, lysosome, vacuole, microbody · 2 → mitochondrion, chloroplast, nucleus.',
          },
          { f: '<b>Ribosomes</b>', note: '70S (prokaryote + mito/plastid) · 80S (eukaryotic cytoplasm).' },
          {
            f: '<b>Endomembrane system</b>',
            note: 'ER + Golgi + lysosome + vacuole (coordinated); mito/chloroplast/microbody excluded.',
          },
          { f: '<b>Two arrays</b>', note: 'axoneme <b>9+2</b> (cilia/flagella) · centriole <b>9+0</b>.' },
          {
            f: '<b>Nucleus</b>',
            note: 'double envelope + pores; nucleolus (rRNA), chromatin (DNA + histones) → chromosomes (centromere → meta/sub-meta/acro/telo; satellite = SAT).',
          },
        ],
        aids: [],
      },
    ],
  },
];
