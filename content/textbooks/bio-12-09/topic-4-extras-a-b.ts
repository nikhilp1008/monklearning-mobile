import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 9 (Biotechnology: Principles and Processes), Topic 04 and Additional topics A and B, word for
 * word from the Class 12 Biology Master Reference (book pp. 503 to 519): Topic 04 "Processes of Recombinant DNA"
 * (p. 503 to p. 511; Figure 9.7 is captioned on p. 505 and drawn on p. 506, Figure 9.8 is captioned at the top of p. 507
 * and drawn on p. 508), then the shared introduction to the Additional Topics (p. 512, the paragraph before Addendum A,
 * which opens Additional topic A's Introduction), A "Cloning Vectors: Beyond pBR322" (p. 512 to p. 515, ending with its
 * practice answers) and B "Screening, Selection, and Gene-Delivery Methods" (p. 516 to p. 519, ending with its practice
 * answers; Addendum C begins low on p. 519, the next writer).
 *
 * Topic indexes: Topic 04 = 3, A = 4, B = 5. Em dashes of the book are written as a colon, commas, brackets or a
 * semicolon (every one is listed in the report). The book's "Q1 — [CBSE Board] Title" and "Example A.1 — [CUET] Title"
 * become the tag (the bracket) and a bold lead on the question. The book's "subtopic" is "topic"; its "subtopic 01"
 * (the toolkit and the cutting mechanism) is Topic 02. "lacZ" and "vir" are upright as the page prints them. Where the
 * book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 503–511 ─────────────────────────
  {
    n: '04',
    title: 'Processes of Recombinant DNA',
    kalam: 'Knowing the tools is not enough; the marks here come from knowing exactly what happens, in what order, and why.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the most question-dense sections of the chapter (the book’s estimate from past papers, not official figures). CBSE Boards favour the ordered workflow, the role of PCR, and bioreactor/downstream-processing definitions (1–3 marks). CUET and NEET test the PCR three-step sequence with temperatures, the “why eukaryotic gene fails in a prokaryote” trap, and continuous-culture/bioreactor items almost every year (the book’s estimate from past papers, not official figures). Get the order of steps reflex-fast and the temperatures exact.',
      },
      {
        t: 'p',
        html: 'In Topic 02 you collected the toolkit: the molecular scissors, the glue, the vehicle, the competent host. This topic is about the assembly line: the fixed sequence of steps that turns “I want this gene’s protein” into “here is a vial of pure, market-ready protein.” Knowing the tools is not enough; the marks here come from knowing exactly <b>what happens, in what order, and why</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a factory that takes a single handwritten recipe and ends up shipping millions of bottles of a sauce made from it. First you have to find and remove the recipe card from a messy drawer full of other papers (isolate the DNA). Then you photocopy the relevant lines cleanly (cut at specific sites). Because one card is too little to work with, you run it through a high-speed copier a billion times (amplify by PCR). You staple your recipe into the factory’s master binder (ligate into a vector) and hand that binder to a worker who will actually follow it (insert into a host). You let that worker multiply into a whole shift of workers all making the sauce (culture/expression, scaled up in a bioreactor). Finally you bottle, purify and quality-check the sauce before sale (downstream processing).',
      },
      {
        t: 'p',
        html: 'That is the entire chapter’s process spine, and it runs in a strict order:<br>1. <b>Isolation</b> of the genetic material (DNA), in pure form.<br>2. <b>Cutting</b> the DNA at specific locations with restriction enzymes.<br>3. <b>Amplification</b> of the gene of interest by PCR.<br>4. <b>Ligation</b> of the fragment into a vector to form recombinant DNA, then <b>insertion</b> into a competent host (transformation).<br>5. <b>Obtaining the foreign gene product</b>: culturing the host, scaling up in a bioreactor.<br>6. <b>Downstream processing</b>: separation, purification, formulation, quality control.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> DNA must be pure and free of RNA, protein and other macromolecules before restriction enzymes will act cleanly: contaminants block the enzymes. The <b>same</b> restriction enzyme (or enzymes that leave compatible ends) must cut the vector and the gene so their sticky ends are complementary. PCR is strictly an <b>in vitro</b> reaction and depends on a <b>thermostable</b> polymerase that survives the repeated near-boiling denaturation steps: an ordinary polymerase would denature and die in the first cycle. And a cloned <b>eukaryotic</b> gene may fail to express in a <b>prokaryotic</b> host because bacteria lack the RNA-splicing machinery to remove <b>introns</b> (a gene copied from mRNA, cDNA, has none), a classic conceptual trap that turns the whole pipeline into “no product.”',
      },

      { t: 'part', title: 'Key steps, components and conditions' },
      {
        t: 'table',
        title: '4.2.1 The six process steps at a glance',
        head: ['Step', 'What is done', 'Key enzyme / tool'],
        rows: [
          ['1. Isolation of DNA', 'Lyse cells, strip away RNA/protein, precipitate pure DNA', 'Lysozyme (bacteria), cellulase (plant), chitinase (fungi); RNase; protease; chilled ethanol'],
          ['2. Cutting', 'Cleave source DNA and vector at specific sites', 'Restriction endonuclease (same enzyme for both, or enzymes with compatible ends)'],
          ['3. Amplification', 'Make many copies of the gene of interest', 'PCR: Taq DNA polymerase'],
          ['4. Ligation + insertion', 'Join fragment to vector, transfer into host', 'DNA ligase; competent host (transformation)'],
          ['5. Obtaining the product', 'Culture host, express and scale up the protein', 'Bioreactor; continuous culture system'],
          ['6. Downstream processing', 'Separate, purify, formulate, quality-test', '(Process, not a single enzyme)'],
        ],
      },
      {
        t: 'table',
        title: '4.2.2 The PCR cycle: three steps',
        head: ['Step', 'What happens', 'Temperature'],
        rows: [
          ['Denaturation', 'Double-stranded DNA separates into single strands', '~94 °C (high heat)'],
          ['Annealing', 'Two primers bind to their complementary template regions', '~40–60 °C'],
          ['Extension', 'Taq polymerase synthesises the new complementary strand', '~72 °C'],
        ],
      },
      {
        t: 'p',
        html: 'Taq polymerase is a <b>thermostable</b> DNA polymerase from the hot-spring bacterium <i>Thermus aquaticus</i>; it survives the repeated heating. After ~30 cycles the target is amplified roughly <b>a billion-fold</b> in the ideal case, each cycle doubling the target (2<sup>30</sup>, roughly 10<sup>9</sup>). PCR requires a <b>DNA template, two primers</b> (short chemically-synthesised DNA oligonucleotides), <b>Taq polymerase</b>, and <b>deoxynucleotides (dNTPs)</b>.',
      },
      {
        t: 'p',
        html: '<b>4.2.3 Bioreactor essentials</b><br>A <b>bioreactor</b> is a large vessel (~100–1000 L) in which raw materials are biologically converted into specific products under optimal conditions of temperature, pH, substrate, salts, vitamins and oxygen.<br>• <b>Types:</b> simple <b>stirred-tank</b> (cylindrical / curved base for even mixing and oxygen availability) and <b>sparged stirred-tank</b> (sterile air bubbled in = “sparged,” increasing surface area for oxygen transfer).<br>• <b>Components:</b> agitator/stirrer system, oxygen-delivery system, foam-control system, temperature-control system, pH-control system, and sampling ports.',
      },
      {
        t: 'p',
        html: '<b>4.2.4 Downstream processing</b><br>Separation → purification of the product → formulation with suitable preservatives → clinical trials and quality-control testing. The exact protocol <b>varies from product to product</b>.',
      },
      {
        t: 'p',
        html: '(No dimensional/SI quantities apply: this topic is procedural/descriptive; temperatures and volumes are stated as operating conditions.)',
      },
      { t: 'fig', id: 'b12-09-fig-9.7' },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>4.3.1 Step 1: Isolation of the genetic material</b><br>DNA is locked inside cells along with RNA, proteins, polysaccharides and lipids, so it must be freed and then purified.<br>1. <b>Break open the cells</b> to release DNA. The cell wall/membrane is digested with the appropriate enzyme: <b>lysozyme</b> for bacteria, <b>cellulase</b> for plant cells, <b>chitinase</b> for fungi.<br>2. <b>Remove the other macromolecules</b> so restriction enzymes can later act on clean DNA: <b>ribonuclease (RNase)</b> digests away RNA, and <b>protease</b> digests away proteins. Other contaminants are removed by their respective treatments.<br>3. <b>Precipitate the purified DNA</b> by adding <b>chilled ethanol</b>. The DNA appears as fine, collectible threads (it can be spooled out). <b>Reasoning:</b> DNA is insoluble in ethanol, so it comes out of solution as visible strands while smaller impurities stay dissolved.',
      },
      {
        t: 'p',
        html: '<b>4.3.2 Step 2: Cutting at specific locations</b><br>The purified source DNA and the chosen vector are both cut with the <b>same</b> restriction endonuclease (or enzymes that leave compatible ends). (The cutting mechanism (palindrome recognition, staggered cut, sticky ends) was covered in Topic 02.) Progress of cutting is monitored by <b>agarose gel electrophoresis</b>, and the desired fragment is cut out of the gel and recovered (eluted) for the next step.',
      },
      {
        t: 'p',
        html: '<b>4.3.3 Step 3: Amplification by PCR</b><br>A single copy of the gene is too little to clone reliably, so it is amplified. One PCR cycle = <b>denaturation</b> → <b>annealing</b> → <b>extension</b>, repeated ~30 times. Each cycle doubles the target in the ideal case, giving exponential, billion-fold amplification. <b>Reasoning:</b> a thermostable polymerase is essential because the denaturation step is run at a near-boiling temperature in every cycle: an ordinary polymerase would be destroyed, so the discovery of Taq polymerase is exactly what made PCR practical.',
      },
      { t: 'fig', id: 'b12-09-fig-9.8' },
      {
        t: 'p',
        html: '<b>4.3.4 Step 4: Ligation into a vector and insertion into the host</b><br>The amplified fragment is joined to the cut vector by <b>DNA ligase</b>, which seals the sticky ends into one recombinant molecule. The crucial rule: a fragment generated by, say, EcoRI will only join a vector with matching overhangs (one also cut by <b>EcoRI</b>, or by an enzyme that leaves the same overhang), because only then do the overhangs match.<br><br>The recombinant DNA is then introduced into a <b>competent host</b>: <b>vector-mediated</b> (a recombinant plasmid taken up by a competent bacterium via CaCl<sub>2</sub>/heat shock, or a disarmed Ti plasmid or retrovirus carrying the DNA in) or <b>vectorless / direct physical</b> methods: <b>microinjection</b> (into an animal-cell nucleus), <b>biolistics / gene gun</b> (DNA-coated gold/tungsten particles fired into plant cells), or <b>electroporation</b> (brief high-voltage pulse opening transient membrane pores).',
      },
      {
        t: 'p',
        html: '<b>4.3.5 Step 5: Selecting recombinants and obtaining the product</b><br>After transformation, <b>selectable markers</b> (antibiotic-resistance genes) are used to kill off non-transformants, so only cells that carry the vector (with or without the inserted gene) survive; a further test such as insertional inactivation then picks out the cells that carry the recombinant DNA. The selected cells are recovered and first grown on a small scale; for higher yield they are kept in a <b>continuous culture system</b>, in which spent medium is drained from one side while fresh medium is added from the other, holding the cells in their physiologically most active <b>log (exponential) phase</b> to maximise biomass and protein yield. A gene expressed in a foreign (<b>heterologous</b>) host yields a <b>recombinant protein</b>. For commercial scale, the culture is moved into a <b>bioreactor</b>.',
      },
      {
        t: 'p',
        html: '<b>4.3.6 Step 6: Downstream processing</b><br>The product is separated from the culture, purified, formulated with suitable preservatives, and subjected to clinical trials and quality control before it can be marketed. <b>Reasoning:</b> the cell makes the protein, but it is mixed with cells, debris and medium; downstream processing is what converts a crude culture into a safe, usable product, and there is no universal recipe; it is tailored to each product.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Ordered-sequence question.</b> Arrange the following steps of recombinant DNA technology in the correct sequence: ligation into vector; isolation of DNA; insertion into host; amplification by PCR; cutting at specific sites; downstream processing.',
        steps: [
          '<b>Solution.</b> Correct order: <b>isolation of DNA → cutting at specific sites → amplification by PCR → ligation into vector → insertion into host → downstream processing.</b> <b>Reasoning:</b> you cannot cut impure DNA, cannot amplify before you have the fragment, and cannot purify a product before the host has made it.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match each PCR step with its condition and choose the correct code.<br>Column I (Step): A. Denaturation; B. Annealing; C. Extension.<br>Column II (Condition): 1. ~40–60 °C, primers bind; 2. ~72 °C, Taq polymerase acts; 3. ~94 °C, strands separate.<br>Options: <b>(a)</b> A-3, B-1, C-2 <b>(b)</b> A-1, B-2, C-3 <b>(c)</b> A-2, B-3, C-1 <b>(d)</b> A-3, B-2, C-1',
        steps: [
          '<b>Solution.</b> Denaturation = highest heat to split strands (3); annealing = lower temperature for primer binding (1); extension = Taq’s optimum ~72 °C (2).',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>MCQ with reasoning (eukaryotic-gene trap).</b> A bacterial cell is transformed with a recombinant DNA carrying a human gene, yet it fails to produce the desired protein. The most likely reason is:<br><b>(a)</b> the human gene lacks an origin of replication<br><b>(b)</b> the human gene contains introns that bacteria cannot remove<br><b>(c)</b> bacteria cannot take up human DNA<br><b>(d)</b> DNA ligase is absent in bacteria',
        steps: [
          '<b>Solution.</b> Eukaryotic genes contain <b>introns</b>, and prokaryotes lack the <b>RNA-splicing machinery</b> to remove them, so a correct mature protein is not made. (a) is wrong: the vector, not the gene, supplies the <i>ori</i>. (c) is false: transformation already occurred. (d) is irrelevant to expression.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> PCR uses a thermostable DNA polymerase such as Taq polymerase. <b>Reason (R):</b> The denaturation step of every PCR cycle is carried out at a high temperature that would inactivate an ordinary DNA polymerase.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation of A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          '<b>Solution.</b> A is true. R is true and is exactly why a thermostable enzyme is required: the repeated near-boiling denaturation would destroy an ordinary polymerase.',
          '(<b>Trap:</b> students who think the high temperature is only for “speed” mis-select (b).)',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the enzymes used to (i) lyse a bacterial cell wall, (ii) remove RNA, (iii) remove protein during DNA isolation.',
            a: '(i) lysozyme, (ii) ribonuclease/RNase, (iii) protease.',
          },
          {
            q: '[CUET] Why is chilled ethanol added during the isolation of genetic material?',
            a: 'DNA is insoluble in chilled ethanol, so it precipitates out as fine collectible threads while smaller impurities remain dissolved.',
          },
          {
            q: '[NEET] Distinguish between a stirred-tank bioreactor and a sparged stirred-tank bioreactor.',
            a: 'Stirred-tank uses an impeller for mixing and oxygen distribution; the sparged variant additionally bubbles in sterile air, increasing the surface area for oxygen transfer.',
          },
          {
            q: '[NEET] What is a continuous culture system and why does it give a higher yield of recombinant protein?',
            a: 'Spent medium is drained while fresh medium is added continuously, keeping cells in the log/exponential phase → larger biomass → higher protein yield.',
          },
          {
            q: '[NEET high-difficulty] A researcher cuts the source DNA with EcoRI but the vector with BamHI, then adds DNA ligase. Predict the outcome and justify it.',
            a: 'Ligation fails (or gives no correct recombinant): EcoRI and BamHI produce different, non-complementary sticky ends, so the fragment and vector cannot base-pair for ligase to seal; the vector and insert must be cut with the same enzyme (or enzymes that leave compatible ends).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct sequence of steps in PCR is:',
        opts: [
          { label: 'Annealing → Denaturation → Extension', nudge: '<b>(a)</b> and <b>(d)</b> scramble the logic; you cannot anneal to a double helix, and you cannot extend before a primer has annealed.' },
          { label: 'Denaturation → Annealing → Extension', nudge: null },
          { label: 'Extension → Annealing → Denaturation', nudge: null },
          { label: 'Denaturation → Extension → Annealing', nudge: '<b>(a)</b> and <b>(d)</b> scramble the logic; you cannot anneal to a double helix, and you cannot extend before a primer has annealed.' },
        ],
        correct: 1,
        solution: 'Strands must first separate (denature), then primers bind (anneal), then the new strand is built (extend).',
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a component of downstream processing?',
        opts: [
          { label: 'Separation', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine downstream steps: the trap is treating “making the protein” as part of “processing the product.”' },
          { label: 'Purification', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine downstream steps: the trap is treating “making the protein” as part of “processing the product.”' },
          { label: 'Expression', nudge: null },
          { label: 'Formulation', nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all genuine downstream steps: the trap is treating “making the protein” as part of “processing the product.”' },
        ],
        correct: 2,
        solution: '<b>(c) Expression.</b> Expression happens during culturing (upstream of the product), not in downstream processing.',
      },
      {
        t: 'mcq',
        q: 'Large amounts of recombinant protein are best produced using:',
        opts: [
          { label: 'the largest possible laboratory flask', nudge: '<b>(a)</b> a flask cannot match a bioreactor’s controlled aeration/mixing.' },
          { label: 'a stirred-tank bioreactor with no inlets or outlets', nudge: '<b>(b)</b> a sealed reactor with no inlets/outlets cannot sustain continuous growth.' },
          { label: 'a continuous culture system', nudge: null },
          { label: 'repeated PCR', nudge: '<b>(d)</b> PCR amplifies DNA, not protein: a frequent NEET confusion (the book’s estimate from past papers, not official figures).' },
        ],
        correct: 2,
        solution: 'A continuous culture system keeps cells in log phase, maximising biomass and yield.',
      },
      {
        t: 'mcq',
        q: 'During DNA isolation, ribonuclease and protease are added in order to:',
        opts: [
          { label: 'cut the DNA at specific sites', nudge: '<b>(a)</b> cutting is done by restriction enzymes.' },
          { label: 'remove RNA and protein contaminants so DNA is pure', nudge: null },
          { label: 'amplify the DNA', nudge: '<b>(c)</b> amplification is PCR.' },
          { label: 'precipitate the DNA', nudge: '<b>(d)</b> precipitation is done by chilled ethanol.' },
        ],
        correct: 1,
        solution: 'Restriction enzymes need clean DNA, so RNA and protein are digested away.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Scrambling the workflow order.</b> The single most common loss of marks (the book’s estimate from past papers, not official figures). Lock the chain: <b>Isolate → Cut → Amplify → Ligate → Insert → Express → Purify.</b>',
          '<b>Confusing PCR with cloning/expression.</b> PCR amplifies <b>DNA in vitro</b>; it does <b>not</b> make protein and is <b>not</b> in vivo. Examiners often plant both errors (the book’s estimate from past papers, not official figures).',
          '<b>Calling PCR primers “RNA.”</b> PCR primers are <b>short DNA oligonucleotides</b>. (In cells, DNA replication uses short RNA primers; PCR uses DNA primers.)',
          '<b>“Expression” sneaking into downstream processing.</b> Expression is upstream (during culture); downstream = separation/purification/formulation/QC only.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any “why no protein from a human gene in bacteria?” question, jump straight to <b>introns + no splicing machinery</b>: it is the intended answer almost every time (the book’s estimate from past papers, not official figures). And for temperature items, memorise the ladder <b>94 → ~50 → 72</b> (denature, anneal, extend); in standard PCR the highest number is denaturation.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Process workflow</b>', note: 'Isolate DNA → Cut (restriction enzyme) → Amplify (PCR) → Ligate into vector (ligase) → Insert into competent host → Obtain product (bioreactor) → Downstream processing.' },
          { f: '<b>Isolation enzymes</b>', note: 'lysozyme (bacteria), cellulase (plant), chitinase (fungi); RNase removes RNA; protease removes protein; <b>chilled ethanol</b> precipitates DNA as threads.' },
          { f: '<b>PCR cycle</b>', note: 'Denaturation (~94 °C) → Annealing (~40–60 °C) → Extension (~72 °C); <b>Taq</b> polymerase from <i>Thermus aquaticus</i>; ~30 cycles → <b>~1 billion</b> copies (ideal case); needs template + <b>2 DNA primers</b> + Taq + dNTPs; strictly <b>in vitro</b>.' },
          { f: '<b>Same enzyme rule</b>', note: 'vector and insert are cut with the <b>same</b> restriction enzyme (or enzymes with compatible ends) → matching sticky ends.' },
          { f: '<b>Bioreactor</b>', note: '~100–1000 L; stirred-tank vs sparged stirred-tank; components = agitator, O<sub>2</sub> delivery, foam control, temperature control, pH control, sampling ports; continuous culture keeps cells in <b>log phase</b>.' },
          { f: '<b>Downstream processing</b>', note: 'separation → purification → formulation → clinical trials/QC; varies product to product.' },
          { f: '<b>Eukaryote-in-prokaryote trap</b>', note: 'introns + no RNA-splicing machinery → no correct protein.' },
        ],
        aids: ['<b>Mnemonic:</b> “I Cut And Lift Into Plants Daily” → <b>I</b>solate, <b>C</b>ut, <b>A</b>mplify, <b>L</b>igate, <b>I</b>nsert, <b>P</b>roduct, <b>D</b>ownstream.'],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 512–515 ─────────────────────────
  {
    n: 'A',
    title: 'Cloning Vectors: Beyond pBR322',
    extra: true,
    kalam: 'BACs and YACs were developed to carry large genomic fragments, and were widely used in genome sequencing projects.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These Additional topics extend Chapter 9 by covering five examinable layers that the main topics treat only briefly or not at all: the full spectrum of cloning vectors beyond pBR322, blue-white and other screening mechanisms (the main topics teach insertional inactivation only), the distinction between selection and screening, the gene-delivery methods beyond CaCl<sub>2</sub> and heat shock with their conditions, and the rDNA applications (gene therapy, DNA fingerprinting, transgenic production) plus their ethical dimensions. Each section provides method statements, fully-worked NEET/CUET/CBSE examples, and practice with complete answers. A strong student finishing this chapter who also masters these Additional topics closes the gaps that recent papers have shown to be persistent sources of marks lost (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'The chapter names pBR322 as the classic bacterial plasmid vector and lists its four essential features. NEET and CUET go further (the book’s estimate from past papers, not official figures), asking about lambda phage vectors for genomic libraries, cosmids and BACs for large fragments, Ti plasmid for plants, and retroviral and adenoviral vectors for animal cells. This section develops that additional tier (the Ti plasmid and retroviral vectors are only named in Topic 02; lambda, cosmid, BAC, YAC and adenoviral vectors are new).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Classifying vectors by capacity.</b> The table below gives the upper size limit each vector can carry and the context in which each is used.',
      },
      {
        t: 'table',
        title: null,
        head: ['Vector type', 'Host system', 'Maximum insert size', 'Key exam feature'],
        rows: [
          ['Plasmid (pBR322, pUC)', '<i>E. coli</i>', 'up to 10 kb', 'Small, easy to manipulate'],
          ['Lambda phage', '<i>E. coli</i>', '10–25 kb', 'Genomic library construction'],
          ['Cosmid', '<i>E. coli</i>', '30–45 kb', 'Combines plasmid + phage features'],
          ['BAC (bacterial artificial chromosome)', '<i>E. coli</i>', '100–300 kb', 'F-factor based; stable for large genomes'],
          ['YAC (yeast artificial chromosome)', '<i>Saccharomyces</i>', 'about 200 kb – 2 Mb', 'Telomeres + centromere + <i>ori</i>'],
          ['Ti plasmid (disarmed)', '<i>Agrobacterium</i>', '10–20 kb T-DNA', 'Plant transformation'],
          ['Retroviral vector', 'Animal cells', '8–10 kb', 'Integrates into host genome'],
          ['Adenoviral vector', 'Animal cells', '8 kb', 'Does not integrate; transient expression'],
        ],
      },
      {
        t: 'p',
        html: '<b>Why insert size matters.</b> A eukaryotic gene with introns can be tens of kilobases. A plasmid carries only 5–10 kb comfortably, so cDNA (introns removed) is used instead. BACs and YACs were developed to carry large genomic fragments, and were widely used in genome sequencing projects.',
      },
      {
        t: 'p',
        html: '<b>Ti plasmid T-DNA system.</b> The tumour-inducing (Ti) plasmid of <i>Agrobacterium tumefaciens</i> carries the T-DNA region that transfers into the plant cell genome. For use as a vector the tumour-causing genes (oncogenes) are removed (disarmed) and replaced with the gene of interest. The <i>vir</i> genes (on the disarmed Ti plasmid or on a helper plasmid) catalyse T-DNA transfer, but the disarmed T-DNA produces no tumour.',
      },
      {
        t: 'p',
        html: 'Steps: gene of interest inserted into T-DNA region of disarmed Ti plasmid → vector introduced into <i>Agrobacterium</i> → <i>Agrobacterium</i> infects wounded plant tissue → T-DNA carrying the foreign gene integrates into a plant chromosome → transgenic plant regenerated from transformed cells.',
      },
      {
        t: 'p',
        html: '<b>Retroviral vector cycle.</b> A retrovirus is an RNA virus that reverse-transcribes its RNA into DNA inside the host cell. This DNA integrates permanently into the host genome (provirus). For use as a vector: the viral genes required for replication are removed, leaving the LTR (long terminal repeat) sequences, the packaging signal, and the gene of interest. The engineered virus can infect cells and integrate the gene but cannot replicate on its own: it is replication-defective. It delivers the gene into the host genome, where it is copied with the chromosome (the provirus can sometimes be silenced, and a random insertion can disrupt a host gene).',
      },
      {
        t: 'p',
        html: '<b>Reporter genes.</b> A reporter gene produces a visible or measurable product that signals successful transformation or expression.<br>• <b><i>lacZ</i> (beta-galactosidase):</b> Cleaves X-gal into a blue product. In blue-white screening the vector carries a portion of the <i>lacZ</i> gene; the multiple cloning site (MCS) sits within it. If foreign DNA inserts, <i>lacZ</i> is disrupted → no blue colour → white colonies = recombinants.<br>• <b>GFP (green fluorescent protein):</b> Produces green fluorescence under UV light, visible without any substrate.<br>• <b>GUS (beta-glucuronidase):</b> Gives a blue product with X-gluc; widely used in plant biotechnology because plant cells normally have very low GUS activity.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Vector Feature Matching.</b> Which cloning vector should be chosen to clone a 200 kb genomic fragment of a plant gene, and why?',
        steps: [
          'A plasmid vector can carry only 5–10 kb. A BAC (bacterial artificial chromosome) uses the F-factor origin of replication and stably maintains inserts of 100–300 kb in <i>E. coli</i>. A YAC could also hold it (typical YACs carry about 0.2–2 Mb) but is less stable. Therefore a BAC is the appropriate choice.',
        ],
        ans: 'BAC; stably maintains 100–300 kb inserts in <i>E. coli</i> due to its F-factor origin of replication.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Ti Plasmid Mechanism.</b> Name the bacterium that harbours the Ti plasmid, state the region of the Ti plasmid that transfers into the plant cell, and explain how the plasmid is converted into a cloning vector for plants.',
        steps: [
          'The bacterium is <i>Agrobacterium tumefaciens</i>. The T-DNA (transferred DNA) region of the Ti plasmid integrates into the host plant cell genome. To convert it into a vector: the tumour-causing oncogenes within the T-DNA are removed (disarmed), and the gene of interest is inserted in their place. The T-DNA keeps its border sequences, and the <i>vir</i> genes (on the disarmed Ti plasmid or on a helper plasmid) drive T-DNA transfer. When <i>Agrobacterium</i> infects wounded plant tissue, the T-DNA carrying the foreign gene transfers and integrates into the plant chromosome, producing a transgenic plant.',
        ],
        ans: '<i>A. tumefaciens</i>; T-DNA; disarmed by removing oncogenes; foreign gene inserted into T-DNA region.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Blue-White Screening.</b> A researcher clones a gene into the multiple cloning site of plasmid pUC19 and transforms <i>E. coli</i>. The transformed cells are plated on medium containing ampicillin, X-gal and IPTG. State what colour the colonies containing the recombinant plasmid will appear and explain why.',
        steps: [
          'Plasmid pUC19 carries a portion of the <i>lacZ</i> gene spanning the multiple cloning site (MCS); it carries only the lacZα fragment, and the host strain supplies the rest of the gene, so the two fragments together make active beta-galactosidase in cells with no insert. When foreign DNA inserts into the MCS, it disrupts the <i>lacZ</i> gene. Cells with no insert produce functional beta-galactosidase, which cleaves X-gal to give a blue product: these are non-recombinant colonies. Cells with the insert cannot produce functional beta-galactosidase: these form white colonies. IPTG induces the <i>lac</i> promoter that drives <i>lacZ</i> expression, so non-recombinant cells turn blue on this medium. Therefore white colonies on ampicillin + X-gal + IPTG are the recombinants.',
        ],
        ans: 'White colonies; insertion disrupts <i>lacZ</i>, preventing blue colour production from X-gal.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Retroviral Vector Cycle.</b> A replication-defective retroviral vector carrying a functional human gene is used to transform a mammalian cell line. (a) State why the vector is described as replication-defective. (b) Predict whether the human gene will be expressed in the daughter cells of the originally infected cell, and give a reason.',
        steps: [
          '(a) The viral genes for the capsid, polymerase (reverse transcriptase) and envelope proteins (gag, pol, env) have been removed from the vector, leaving only the LTR sequences, the packaging signal, and the therapeutic gene; the proteins are supplied by a packaging cell line. Without the viral genes the vector cannot produce viral particles and cannot replicate on its own.',
          '(b) Yes, the gene is expected to be passed to and expressed in the daughter cells. The retroviral vector integrates into the host genome as a provirus: it becomes a permanent part of the host chromosome. Every time the cell divides, the provirus (and therefore the therapeutic gene) is replicated along with the host genome, so every daughter cell carries it, and it is normally expressed (though a provirus can sometimes be silenced).',
        ],
        ans: '(a) Viral replication genes removed; cannot produce new virions. (b) Yes (expected), because integration as a provirus makes the gene a permanent part of the host chromosome, inherited through cell division.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Distinguish between a BAC and a YAC in terms of the host organism and maximum insert size.',
            a: 'BAC: host is <i>E. coli</i>, insert size 100–300 kb; YAC: host is <i>Saccharomyces cerevisiae</i> (yeast), insert size about 200 kb–2 Mb.',
          },
          {
            q: '[NEET] Name the vector used for cloning large fragments (e.g. entire eukaryotic genomes), and state the origin of replication it uses.',
            a: 'BAC (bacterial artificial chromosome); uses the F-factor origin of replication.',
          },
          {
            q: '[NEET] Name the regions of the Ti plasmid involved in (a) transfer to plant cell and (b) tumour formation.',
            a: '(a) The T-DNA, delimited by its border sequences and processed by the <i>vir</i> gene products; (b) oncogenes within the T-DNA region (removed when disarmed).',
          },
          {
            q: '[CUET] State the function of GFP as a reporter gene in transformation experiments.',
            a: 'GFP produces green fluorescence under UV light without any substrate, allowing visual detection of transformed cells or gene expression in real time.',
          },
          {
            q: '[NEET] A scientist uses a vector that contains the <i>lacZ</i> gene interrupted by a multiple cloning site. Non-recombinant colonies appear blue; recombinant colonies appear white. Name this screening technique.',
            a: 'Blue-white screening (<i>lacZ</i> reporter system).',
          },
          {
            q: '[NEET High-Difficulty] Explain why a BAC is preferred over a plasmid for cloning a 150 kb genomic fragment, but a YAC can carry an even larger fragment than a BAC.',
            a: 'A plasmid carries only 5–10 kb, far too small for 150 kb. A BAC uses the F-factor replicon which stably maintains large fragments in <i>E. coli</i> up to 300 kb. A YAC uses yeast chromosomal elements (telomeres, centromere, <i>ori</i>) that can accommodate fragments up to about 2 Mb, exceeding BAC capacity, though YACs are less stable.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 516–519 ─────────────────────────
  {
    n: 'B',
    title: 'Screening, Selection, and Gene-Delivery Methods',
    extra: true,
    kalam: 'Selection physically prevents non-transformants from growing; only cells that have taken up the vector survive.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The main topics explain insertional inactivation in pBR322, name microinjection, the gene gun, electroporation and the disarmed Ti plasmid and retroviral vectors in a line each, and give the CaCl<sub>2</sub>/ice/42 °C heat-shock conditions. They do not distinguish between selection and screening, do not mention blue-white screening or colony hybridisation, and give no conditions for the other delivery methods. These are separately testable and frequently asked (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Selection vs screening: a precise distinction.</b><br>• <b>Selection</b> physically prevents non-transformants from growing; only cells that have taken up the vector survive. Example: plating on antibiotic medium. The process itself eliminates unwanted cells.<br>• <b>Screening</b> tests each colony to determine whether it carries the recombinant construct. Non-recombinants are viable; they must be identified by a secondary test. Example: blue-white screening, colony hybridisation with a labelled probe.',
      },
      {
        t: 'p',
        html: 'Many students lose marks by calling screening “selection.” The distinction matters: antibiotic resistance is selection; <i>lacZ</i> disruption is screening.',
      },
      {
        t: 'p',
        html: 'NCERT calls insertional inactivation and the chromogenic (blue-white) test selectable markers for recombinants; in this strict sense they are screening steps that follow the antibiotic selection. Use NCERT’s wording in a CBSE answer.',
      },
      {
        t: 'p',
        html: '<b>Colony hybridisation (screening a genomic library).</b> When a genomic library is constructed (thousands of recombinant clones), simply plating them on antibiotics tells you only which clones contain a plasmid, not which one carries the specific gene of interest. Colony hybridisation uses a labelled DNA probe complementary to the gene of interest. The colonies are lifted on to a nylon membrane, lysed, and their DNA denatured and fixed, and the probe is hybridised to that DNA; autoradiography or chemiluminescence reveals which colony (and therefore which clone) carries the target gene. This is a screening step: it identifies the right clone without killing the others.',
      },
      {
        t: 'p',
        html: '<b>Electroporation.</b> A brief high-voltage electrical pulse applied to a cell suspension creates transient pores in the cell membrane, through which DNA enters. Used for bacteria, yeast, plant protoplasts and animal cells. Typical conditions for <i>E. coli</i>: field strength about 12–18 kV cm<sup>−1</sup>, a pulse lasting a few milliseconds, cells in a low-ionic-strength buffer at 0–4 °C. Unlike CaCl<sub>2</sub>/heat shock (which works mainly for bacteria), electroporation works across a broader range of organisms.',
      },
      {
        t: 'p',
        html: '<b>Biolistics (gene gun).</b> DNA is coated onto microscopic gold or tungsten particles (0.5–1.0 micrometre diameter) and fired at plant cells or tissues using a burst of high-pressure helium gas. The particles penetrate the rigid cell wall and deliver the DNA into the cytoplasm, from where it may integrate into the nucleus. Widely used for cereals and other monocots that were hard to transform with <i>Agrobacterium</i>.',
      },
      {
        t: 'p',
        html: '<b>Microinjection.</b> A fine glass needle (tip diameter 0.1–0.5 micrometre) is used to inject DNA directly into the nucleus of an animal cell. The cell is held in place by a micropipette under a microscope. Used for producing transgenic animals (the injected DNA often integrates into the host genome spontaneously).',
      },
      {
        t: 'p',
        html: '<b><i>Agrobacterium</i>-mediated delivery (detailed mechanism).</b> Wounded plant tissue releases phenolic compounds (particularly acetosyringone) that activate the <i>vir</i> (virulence) genes on the Ti plasmid. The <i>vir</i> genes encode proteins that process and transfer the T-DNA into the plant cell. A relaxosome complex nicks the T-DNA at the border repeats, and the T-DNA is transferred as a single-stranded DNA-protein complex (T-complex) through a type IV secretion system into the plant cell, where it integrates randomly into a host chromosome.',
      },
      {
        t: 'p',
        html: '<b>Verification of recombinant clones: three methods.</b><br>1. <b>Restriction mapping:</b> Double-digest with two different restriction enzymes and compare fragment sizes against expected sizes. If the insert cuts at expected positions, the construct is correct.<br>2. <b>Colony PCR:</b> Primers specific to the inserted gene are used directly on bacterial colonies (without DNA extraction). A successful PCR product of the expected size shows that a plasmid containing the insert sequence is present (the sequence and orientation still need confirming by restriction mapping or sequencing).<br>3. <b>Southern blot confirmation:</b> Radiolabelled probe hybridised to the recombinant DNA on a blot, confirming the gene is present and its size matches expectations.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Selection vs Screening.</b> A genomic library of a human chromosome is spread on ampicillin plates. After incubation, 500 colonies grow. A radiolabelled DNA probe complementary to the human beta-globin gene is hybridised to the colonies on a nylon membrane. Which colonies on the plate correspond to clones containing the beta-globin gene? Explain whether this is an example of selection or screening.',
        steps: [
          'The colonies that give a positive signal on the autoradiograph contain the beta-globin gene. This is screening, not selection: all 500 colonies are viable on ampicillin (selection has already occurred: only plasmid-bearing cells survived). The probe test identifies which of the viable cells carries the specific gene of interest without killing any cells.',
        ],
        ans: 'Positive-signal colonies from hybridisation; this is screening because all colonies survive the primary medium and are differentiated by a secondary test.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Electroporation Conditions.</b> Name the physical method used to create transient pores in a bacterial cell membrane to allow DNA entry, and state two advantages of this method over CaCl<sub>2</sub>/heat-shock transformation.',
        steps: [
          'The method is electroporation. Two advantages: (i) it works for a wider range of organisms (bacteria, yeast, plant protoplasts and animal cells), whereas CaCl<sub>2</sub>/heat shock works mainly for bacteria such as <i>E. coli</i>; (ii) it gives higher transformation efficiency (more transformants per microgram of DNA) because the electrical pulse creates many pores simultaneously across the entire membrane.',
        ],
        ans: 'Electroporation; broader host range; higher efficiency.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Verification by Colony PCR.</b> During a cloning experiment, a student uses colony PCR with primers specific to the inserted gene to verify recombinant colonies. The expected amplicon size is 600 base pairs. Lane 1 of the gel shows no band; Lane 2 shows a band at 600 bp. Interpret both results.',
        steps: [
          'Lane 1 (no band): the colony from which DNA was used either (a) did not take up the plasmid at all, (b) took up a plasmid without the insert, (c) carries the insert but the primers failed to bind due to a mutation at a primer-binding site, or (d) the PCR itself failed. Lane 2 (600 bp band): the colony carries a plasmid containing the insert sequence, because the primers amplified the expected 600 bp fragment (the sequence and orientation still need confirming by restriction mapping or sequencing).',
        ],
        ans: 'Lane 1: no amplification (no plasmid, plasmid without insert, or a failed reaction); Lane 2: plasmid containing the insert sequence (600 bp amplicon).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Biolistics Application.</b> Name the gene-delivery method used for transforming maize and wheat cells, and state why it is preferred over <i>Agrobacterium</i> for these species.',
        steps: [
          'Biolistics (gene gun or particle bombardment) is used. Cereals such as maize, wheat and rice were historically hard to transform with <i>Agrobacterium</i> (monocots respond weakly to wounding and release few of the phenolic signals that switch on the <i>vir</i> genes), so DNA-coated particles fired through the cell wall gave a way that does not depend on the host’s response to the bacterium.',
        ],
        ans: 'Biolistics/gene gun; cereals were hard to infect with <i>Agrobacterium</i>, and biolistics does not depend on the host’s response to it.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Restriction Mapping.</b> A 3.0 kb vector has a single EcoRI site (its cloning site) and no HindIII site. A 3.0 kb foreign DNA fragment with EcoRI sticky ends has no internal EcoRI site but carries a single internal HindIII site, 0.5 kb from one end. After ligation and transformation, plasmid DNA from one colony is cut with EcoRI and HindIII together and run on a gel, giving bands of 3.0 kb, 2.5 kb and 0.5 kb. Decide whether the insert was successfully cloned and justify your answer.',
        steps: [
          'Expected result for a recombinant: vector + insert = 3.0 + 3.0 = 6.0 kb circular plasmid. The insert is joined to the vector through EcoRI sticky ends, so an EcoRI site is regenerated at each junction; EcoRI therefore releases the 3.0 kb vector backbone and the 3.0 kb insert. HindIII then cuts the insert once, 0.5 kb from one end, splitting it into 2.5 kb + 0.5 kb. The expected bands are 3.0, 2.5 and 0.5 kb, which add up to 6.0 kb. This is exactly the pattern observed. A plasmid with no insert would behave differently: it has one EcoRI site and no HindIII site, so it would give a single 3.0 kb band.',
        ],
        ans: 'Insert successfully cloned; the bands (3.0 + 2.5 + 0.5 = 6.0 kb) equal vector (3.0 kb) plus insert (3.0 kb) cut at its single HindIII site, whereas an empty vector would give only one 3.0 kb band.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Distinguish between selection and screening in recombinant DNA technology, giving one example of each.',
            a: 'Selection physically kills non-transformants (e.g. plating on antibiotic medium); screening identifies specific clones among survivors without killing them (e.g. blue-white screening, colony hybridisation).',
          },
          {
            q: '[NEET] Name the physical method that uses high-voltage electrical pulses to create transient membrane pores for DNA uptake.',
            a: 'Electroporation (for <i>E. coli</i>, typically about 12–18 kV cm<sup>−1</sup>).',
          },
          {
            q: '[CUET] State two advantages of biolistics over <i>Agrobacterium</i>-mediated gene delivery in plants.',
            a: '(i) It does not depend on the host’s response to <i>Agrobacterium</i>, so it can reach cereals that respond poorly; (ii) can deliver DNA to intact tissues or cells without wound induction.',
          },
          {
            q: '[NEET] Name the two components of the Ti plasmid involved in (a) tumour formation and (b) DNA transfer to the plant cell.',
            a: '(a) Oncogenes within the T-DNA region; (b) the T-DNA, delimited by its border sequences and processed by the <i>vir</i> gene products.',
          },
          {
            q: '[NEET] A student runs colony PCR on 10 bacterial colonies using primers for the insert. Five lanes show a band of the expected size, five show no band. State what the five positive results prove.',
            a: 'The five positive results show that those colonies carry a plasmid containing the insert sequence (the primers bound and amplified the expected fragment); the sequence and orientation still need confirming by restriction mapping or sequencing.',
          },
          {
            q: '[NEET High-Difficulty] A researcher constructs a genomic library in a lambda phage vector. Name the technique used to identify the specific clone carrying a gene of interest from among thousands of plaques, and state what reagent is required for this technique.',
            a: 'Plaque hybridisation (or colony hybridisation applied to phage plaques); requires a labelled DNA probe complementary to the gene of interest and a method to detect hybridisation (autoradiography or chemiluminescence).',
          },
        ],
      },
    ],
  },
];
