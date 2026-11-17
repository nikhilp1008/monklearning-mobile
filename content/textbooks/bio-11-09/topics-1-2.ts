import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 9 (Biomolecules), Topics 01 and 02: pp. 534 to 550 of the
 * Class 11 Biology Master Reference, word for word. The title page (p. 533) is
 * not copied; the top of p. 534 is the end of the chapter contents box. Topic 01,
 * Foundations: Chemical Analysis, Metabolites & Biomacromolecules (pp. 534–542,
 * ending with the book’s “Beyond the Current Syllabus (Enrichment)” box), and
 * Topic 02, Carbohydrates, Lipids & Amino Acids (pp. 543–550), are each cut at
 * the book’s Sections 1 to 8. Figure 9.1 (caption p. 537, drawn p. 538) and
 * Figure 9.2 (caption p. 546, drawn p. 547) are redrawn in
 * lib/diagrams/biology-11-09.ts; these pages draw nothing else (the equations
 * are typeset text). Emphasis italics and italic loanwords are dropped; the
 * book’s run-in bullets are set one to a line.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 534–542 ─────────────────────────
  {
    n: '01',
    title: 'Foundations: Chemical Analysis, Metabolites & Biomacromolecules',
    kalam: 'Biomolecules are simply all the carbon-based (and a few inorganic) compounds found in living tissue.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual gateway to the whole chapter. NEET regularly asks about the acid-soluble vs acid-insoluble pools, the molecular-weight cut-off for macromolecules, and the primary–vs–secondary metabolite distinction (often match-the-column or assertion–reason). CBSE Boards favour 1–3 mark questions on the analytical method and the average chemical composition of a cell. CUET sticks to crisp recall. These ideas frame everything that follows.',
      },
      {
        t: 'p',
        html: 'Start with a deceptively simple question: what is a living body actually made of? A mango, a frog, a strand of your own hair: strip away the shape and what’s left is a specific set of chemicals. The remarkable thing biology discovered is that this set is astonishingly similar across all life. The same handful of elements, the same families of molecules, show up whether you analyse a bacterium or a banyan tree. Biomolecules are simply <b>all the carbon-based (and a few inorganic) compounds found in living tissue.</b>',
      },
      {
        t: 'p',
        html: 'So how does a scientist find out what’s inside? You can’t just look: you have to separate and measure. Picture sieving river sand to recover gold dust: you wash the mixture through a mesh, and what passes through is one fraction, what stays behind is another. Chemical analysis of tissue works the same way.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Grind a piece of liver or a vegetable with a strong acid into a thick slurry, then strain it through cloth. Two things result: a <b>clear liquid that drips through</b> (the small, soluble molecules) and a <b>gooey residue caught in the cloth</b> (the big, insoluble ones). That single act of straining is the conceptual heart of the first step of Key procedures and mechanisms: it sorts the cell’s chemistry into “small stuff” and “big stuff.”',
      },
      {
        t: 'p',
        html: 'The small stuff (sugars, amino acids, nucleotides, vitamins) are the <b>micromolecules</b>. The big stuff trapped in the residue (proteins, nucleic acids, polysaccharides, and, oddly, the small lipids that get trapped along with them) is the <b>macromolecule</b> or <b>biomacromolecule</b> fraction.',
      },
      {
        t: 'p',
        html: 'There’s a second sorting that matters just as much, and it’s about purpose rather than size. Some molecules do the obvious housekeeping of staying alive: building cells, releasing energy, carrying information. These are <b>primary metabolites</b>. Others (the bitter alkaloid in a neem leaf, the red of a rose, the latex bleeding from a rubber tree) have no role in basic survival at all, yet plants and microbes pour resources into making them. These are <b>secondary metabolites</b>, and they exist largely for defence, attraction, and ecological advantage.',
      },
      {
        t: 'p',
        html: 'There’s a bigger lesson hiding in all this sorting. When chemists first catalogued the molecules of a microbe, a mango leaf, and human muscle, they braced for wild variety, and found the opposite: the same short list. The same twenty amino acids, the same handful of sugars, the same five nitrogenous bases, assembled in different proportions and sequences. This <b>unity of biochemistry</b> is among the strongest evidence that all life shares a common origin: the dazzling diversity we see on the outside is built from a near-identical molecular toolkit on the inside. Learning this chapter, then, is learning the shared vocabulary of every living thing on Earth.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions to keep honest:</b>' },
      {
        t: 'p',
        html: '• <b>“Acid-insoluble = macromolecule” has one famous exception: lipids.</b> Individual lipids are small (molecular weight under ~800 Da), so by size they’re micromolecules, yet they show up in the acid-insoluble residue. The reason is assembly, not size (explained in Key procedures and mechanisms). Don’t let the size rule fool you here.<br>• <b>“Secondary = useless” is wrong.</b> Secondary metabolites are dispensable to the cell’s own core metabolism, but ecologically and commercially they’re priceless: many drugs, dyes, spices, and rubber come from them.<br>• <b>The composition figures are averages, not constants.</b> Water dominates, but the exact percentages shift between cell types, ages, and conditions.',
      },

      { t: 'part', title: 'Key definitions, structures and reagents' },
      {
        t: 'def',
        term: 'Acid-soluble pool (filtrate)',
        html: 'the fraction that passes through the cloth after grinding tissue in acid; contains <b>micromolecules</b> with molecular weights roughly <b>18–800 Da</b> (amino acids, monosaccharides, nucleotides, vitamins, organic acids, ions).',
      },
      {
        t: 'def',
        term: 'Acid-insoluble fraction (retentate)',
        html: 'the residue trapped in the cloth; contains the <b>macromolecules</b> (<b>proteins, nucleic acids, polysaccharides</b>) and, as a special case, the <b>lipids</b>, which are small molecules but are trapped there as membrane vesicles. Macromolecules are far larger, generally <b>10,000 Da and above</b> (NCERT); the book’s working cut-off of about <b>1000 Da</b> is a convenience.',
      },
      {
        t: 'def',
        term: 'Micromolecule vs macromolecule',
        html: 'the book’s working dividing line is a molecular weight of about <b>1000 Da</b> (a convenience; NCERT puts macromolecules at generally 10,000 Da and above): below it, micromolecule (small biomolecule); in the acid-insoluble pool and above it, macromolecule/biomacromolecule.',
      },
      {
        t: 'def',
        term: 'Biomacromolecule',
        html: 'a large molecule, usually a <b>polymer</b> built from repeating monomer units: proteins (← amino acids), nucleic acids (← nucleotides), polysaccharides (← monosaccharides). <b>Lipids are an exception: they are not polymers.</b>',
      },
      {
        t: 'def',
        term: 'Primary metabolite',
        html: 'a biomolecule with a clear, identifiable role in normal physiology and growth: amino acids, sugars, nucleotides, organic acids, lipids.',
      },
      {
        t: 'def',
        term: 'Secondary metabolite',
        html: 'a biomolecule (mainly in plants, fungi, microbes) with no direct role in core metabolism but with ecological/commercial importance:<br>• Pigments: carotenoids, anthocyanins<br>• Alkaloids: morphine, codeine, quinine<br>• Terpenoids & essential oils: lemongrass oil<br>• Drugs: vinblastine, curcumin<br>• Toxins & lectins: abrin, ricin, concanavalin A<br>• Polymeric substances: rubber, gums, resins, cellulose',
      },
      {
        t: 'p',
        html: '<b>Reagent of note: trichloroacetic acid (Cl<sub>3</sub>CCOOH)</b>: used to grind tissue and precipitate the acid-insoluble fraction.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: 'A. Procedure: analysing the organic composition of a tissue',
        steps: [
          'Take any living tissue (a vegetable, a piece of liver).',
          'Grind it with <b>trichloroacetic acid</b> in a mortar and pestle to get a thick slurry.',
          'Strain the slurry through cheesecloth or cotton. You now have <b>two fractions</b>:<br>• the <b>filtrate</b> = the <b>acid-soluble pool</b> (small, soluble molecules);<br>• the <b>retentate</b> = the <b>acid-insoluble fraction</b> (large molecules).',
          'Analyse each fraction. The filtrate yields thousands of small organic compounds; the residue yields the macromolecules (proteins, nucleic acids, polysaccharides) and the lipids trapped with them.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why each step:</b> the acid both disrupts the tissue and precipitates large molecules; straining then physically separates small (dissolved) from large (trapped): the size sort that defines micro- vs macromolecule.',
      },
      {
        t: 'p',
        html: '<b>B. Procedure: analysing the inorganic composition.</b> Take a fresh tissue sample, weigh it, then <b>burn it</b>. The water and volatile organic matter escape as vapour; what remains is <b>ash</b>, containing the inorganic elements (calcium, magnesium, sodium, phosphorus, etc.). Comparing the ash content tells you which minerals the tissue held.',
      },
      {
        t: 'p',
        html: '<b>C. The lipid paradox: why small lipids sit in the “macromolecule” pool.</b> A lipid molecule is small (under ~800 Da), so by the size rule it should be in the acid-soluble pool. Yet lipids turn up in the acid-insoluble residue. The reason is <b>assembly</b>: inside cells, lipids organise into membranes and droplets/vesicles. When tissue is ground, these membranous structures form large aggregates that get <b>trapped in the cloth</b> along with the true macromolecules. So lipids are classed with the macromolecules by behaviour, even though each molecule is small and not a polymer.',
      },
      {
        t: 'p',
        html: '<b>D. Reading the average chemical composition of a cell.</b> A typical cell’s makeup (by approximate mass): <b>water ~70–90 %</b> (overwhelmingly the most abundant), <b>proteins ~10–15 %</b>, <b>nucleic acids ~5–7 %</b>, <b>carbohydrates ~3 %</b>, <b>lipids ~2 %</b>, <b>inorganic ions ~1 %</b>. By element, <b>oxygen, carbon, hydrogen and nitrogen</b> dominate living matter, and strikingly, <b>carbon and hydrogen are far more abundant in living organisms than in the Earth’s crust</b>, a chemical fingerprint of carbon-based life.',
      },
      { t: 'fig', id: 'b11-09-fig-9.1' },
      {
        t: 'p',
        html: '<b>E. The inorganic and elemental picture.</b> Beyond the organic molecules, a cell holds inorganic constituents: water and ions. <b>Water is the single largest component</b> of an active cell (≈ 70–90 % by mass) and the medium in which all biochemistry happens. Dissolved inorganic ions (sodium, potassium, calcium, magnesium, chloride, phosphate, bicarbonate) sit in the acid-soluble pool and drive nerve signalling, muscle contraction, pH buffering, and enzyme activation. At the elemental level, four elements dominate living matter: <b>oxygen, carbon, hydrogen and nitrogen</b>, with smaller amounts of sulphur, phosphorus, calcium and others. What sets life apart chemically is the enrichment of carbon and hydrogen relative to the non-living Earth’s crust: the signature of the carbon-skeleton chemistry on which every biomolecule is built.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'A student grinds liver tissue in trichloroacetic acid and strains it. Name the two fractions obtained and state which class of biomolecules each chiefly contains.',
        steps: [
          '<b>Reasoning.</b> Straining the acid slurry separates molecules by size and solubility.<br>• Filtrate (acid-soluble pool): small molecules: amino acids, sugars, nucleotides, vitamins (micromolecules, 18–800 Da).<br>• Retentate (acid-insoluble fraction): large molecules: proteins, nucleic acids, polysaccharides (macromolecules, > 1000 Da), plus lipids (small, trapped as membrane vesicles).',
        ],
        ans: 'Filtrate = acid-soluble pool (micromolecules); retentate = acid-insoluble fraction (macromolecules).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these, despite being a small molecule, is found in the acid-insoluble fraction? <b>(a)</b> Glucose <b>(b)</b> Alanine <b>(c)</b> A lipid <b>(d)</b> A nucleotide',
        steps: [
          '<b>The trap:</b> the size rule says “small → acid-soluble,” so three options are decoys that obey it. The exception is <b>(c) a lipid</b>: small by molecular weight, yet found in the acid-insoluble residue because lipids assemble into membranes/vesicles that get trapped during straining.',
          'Remember the one-liner: “lipids are small molecules that travel in big company.”',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ-reasoning',
        q: 'Classify each as primary or secondary metabolite: (i) alanine, (ii) morphine, (iii) glucose, (iv) rubber.',
        steps: [
          '<b>Reasoning.</b> Primary = identifiable role in core physiology; secondary = no core role, but ecological/commercial value.<br>• (i) alanine: an amino acid, core building block → <b>primary</b>.<br>• (ii) morphine: an alkaloid → <b>secondary</b>.<br>• (iii) glucose: central energy sugar → <b>primary</b>.<br>• (iv) rubber: a polymeric plant product → <b>secondary</b>.',
        ],
        ans: 'primary: alanine, glucose; secondary: morphine, rubber.',
      },
      {
        t: 'ex',
        tag: 'NEET, Assertion–Reason',
        q: 'Assertion (A): Lipids are placed among biomacromolecules even though their molecular weight is low. Reason (R): Lipids are polymers of fatty acids and glycerol. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R not the explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is <b>true</b>: lipids are grouped with macromolecules despite low molecular weight. R is <b>false</b>: lipids are not polymers; they appear in the acid-insoluble fraction because they aggregate into membranes, not because they polymerise. True assertion, false reason.',
          '<b>Distractor check:</b> picking (a) means you accepted the polymer myth: a common error here.',
        ],
        ans: '(c).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe, step by step, how you would separate the acid-soluble and acid-insoluble fractions of a tissue, naming the reagent used.',
            a: 'Grind tissue in trichloroacetic acid → slurry → strain through cloth → filtrate (acid-soluble) + retentate (acid-insoluble).',
          },
          {
            q: '[NEET] State the approximate molecular-weight ranges of the acid-soluble pool and the acid-insoluble fraction, and name the true macromolecule classes and the special case trapped with them.',
            a: 'Acid-soluble ≈ 18–800 Da; acid-insoluble > 1000 Da (book’s working cut-off); macromolecules = proteins, nucleic acids, polysaccharides, plus lipids (small, trapped as membrane vesicles).',
          },
          {
            q: '[CUET] Match: (A) Anthocyanin (B) Alanine (C) Concanavalin A (D) Glucose ↔ (i) primary metabolite (sugar) (ii) secondary metabolite (pigment) (iii) primary metabolite (amino acid) (iv) secondary metabolite (lectin).',
            a: 'A–ii, B–iii, C–iv, D–i.',
          },
          {
            q: '[NEET] Why is a lipid, despite its small molecular weight, recovered in the acid-insoluble fraction?',
            a: 'Lipids assemble into membranes/vesicles that aggregate and are trapped in the cloth during straining.',
          },
          {
            q: '[NEET, Assertion–Reason] A: Carbon and hydrogen are relatively more abundant in living organisms than in the Earth’s crust. R: Life on Earth is built on carbon chemistry. Choose the correct relationship. <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'Both A and R true, and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The acid-soluble pool of a cell mainly contains molecules with molecular weights in the range:',
        opts: [
          { label: '18–800 Da', nudge: null },
          {
            label: '1000–5000 Da',
            nudge: '<b>(b)</b> lies above the acid-soluble range, which stops near 800 Da: chosen by students who confuse the two pools.',
          },
          {
            label: '10,000–50,000 Da',
            nudge: '<b>(c)/(d)</b> are macromolecule ranges (acid-insoluble): chosen by students who confuse the two pools.',
          },
          {
            label: 'above 1,00,000 Da',
            nudge: '<b>(c)/(d)</b> are macromolecule ranges (acid-insoluble): chosen by students who confuse the two pools.',
          },
        ],
        correct: 0,
        solution: '<b>(a) 18–800 Da</b>: the micromolecule range.',
      },
      {
        t: 'mcq',
        q: 'Which set lists <b>only secondary metabolites</b>?',
        opts: [
          { label: 'Glucose, alanine, ATP', nudge: '<b>(a)</b> primary metabolites of core metabolism.' },
          { label: 'Morphine, rubber, carotenoid', nudge: null },
          { label: 'Starch, cellulose, glycogen', nudge: '<b>(c)</b> starch and glycogen are primary storage carbohydrates, so the set is not “only secondary” (NCERT lists cellulose under secondary polymeric substances, but this set also holds two primaries).' },
          { label: 'Nucleotide, fatty acid, glycerol', nudge: '<b>(d)</b> building-block micromolecules (primary).' },
        ],
        correct: 1,
        solution: '<b>(b)</b>: alkaloid, polymeric latex, and pigment are all secondary metabolites.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): Proteins, nucleic acids and polysaccharides are true biomacromolecules, but lipids are an exception. Reason (R): Unlike the other three, lipids are not polymers of repeating monomer units.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          { label: 'Both true, R not the explanation', nudge: '<b>(b)</b> for those who know both facts but don’t connect them.' },
          { label: 'A true, R false', nudge: '<b>(c)/(d)</b> for those unsure whether lipids polymerise.' },
          { label: 'A false, R true', nudge: '<b>(c)/(d)</b> for those unsure whether lipids polymerise.' },
        ],
        correct: 0,
        solution:
          '<b>(a).</b> Lipids are grouped with macromolecules yet aren’t polymers, exactly because they lack the monomer-repeat structure R describes.',
      },
      {
        t: 'mcq',
        q: 'To analyse the <b>inorganic</b> composition of a tissue, one should:',
        opts: [
          { label: 'grind it in trichloroacetic acid', nudge: '<b>(a)/(b)</b> are steps in organic (acid-pool) analysis.' },
          { label: 'strain it through cheesecloth', nudge: '<b>(a)/(b)</b> are steps in organic (acid-pool) analysis.' },
          { label: 'burn it to ash', nudge: null },
          { label: 'dissolve it in water', nudge: '<b>(d)</b> dissolving doesn’t isolate inorganic content.' },
        ],
        correct: 2,
        solution: '<b>(c) burn it to ash</b>: combustion drives off water and organics, leaving inorganic minerals.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling lipids polymers / true macromolecules.</b> Lipids are small and non-polymeric; they only travel with the macromolecules because they aggregate into membranes.',
          '<b>Equating “secondary metabolite” with “unimportant.”</b> They’re dispensable to the cell’s core metabolism but vital ecologically and commercially (drugs, dyes, rubber).',
          '<b>Mixing up the two pools.</b> Acid-soluble = small (filtrate); acid-insoluble = large (retentate). The acid precipitates the big ones.',
          '<b>Forgetting water dominates.</b> Water is the single most abundant molecule in a cell (~70–90 %): easy to overlook because it’s “just water.”',
          '<b>Assuming different organisms have wildly different chemistry.</b> The reverse is true: the same molecular toolkit (same amino acids, sugars, nucleotides) underlies all life; only the proportions and sequences differ.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “which pool / micro or macro?” question, ask one thing first: is it a single small unit (sugar, amino acid, nucleotide) or a long chain / membrane? Single unit → acid-soluble micromolecule; chain or membrane → acid-insoluble macromolecule. The lipid exception is the main thing to memorise against this rule.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Analysis',
            note: 'grind tissue in <b>trichloroacetic acid</b> → strain → <b>filtrate = acid-soluble pool</b> (micromolecules, 18–800 Da) + <b>retentate = acid-insoluble fraction</b> (macromolecules, >1000 Da, plus trapped lipids). Inorganic analysis = <b>burn to ash</b>.',
          },
          {
            f: 'Acid-insoluble fraction',
            note: 'proteins, nucleic acids, polysaccharides (true macromolecules, <b>polymers</b>) plus lipids (small, trapped as membrane vesicles; <b>not polymers</b>, the size-rule exception).',
          },
          { f: 'Micromolecule vs macromolecule', note: 'working cut-off ≈ <b>1000 Da</b> (a convenience); NCERT: macromolecules generally <b>10,000 Da and above</b>.' },
          {
            f: 'Primary metabolites',
            note: 'identifiable physiological role: amino acids, sugars, nucleotides, lipids.',
          },
          {
            f: 'Secondary metabolites',
            note: 'no core role, big ecological/commercial value: alkaloids (morphine), pigments (anthocyanin, carotenoid), terpenoids/essential oils, drugs (vinblastine, curcumin), toxins/lectins (abrin, ricin, concanavalin A), rubber, gums, resins.',
          },
          {
            f: 'Average cell composition',
            note: 'water 70–90 % > protein 10–15 % > nucleic acid 5–7 % > carbohydrate 3 % > lipid 2 % > ions 1 %. <b>C and H more abundant in life than in Earth’s crust.</b>',
          },
          {
            f: 'Unity of biochemistry',
            note: 'all life is built from the same molecular toolkit (20 amino acids, a few sugars, 5 nitrogenous bases): diversity comes from sequence and proportion, not from different building blocks.',
          },
        ],
        aids: [
          '“soluble = small, insoluble = big”',
          '“lipids: small molecules in big company”',
          '“primary = pays rent (core role), secondary = special (defence/value).”',
        ],
      },

      { t: 'part', title: 'Beyond the current syllabus (enrichment)' },
      {
        t: 'p',
        html: 'The following two ideas go beyond what the rest of this chapter needs. Treat them as background and check your current NCERT edition for whether your board still examines them.',
      },
      {
        t: 'p',
        html: '<b>The dynamic state of body constituents (metabolism).</b> Nothing in a living cell sits still. Every biomolecule is continuously built and broken down: molecules have a turnover. The sum of all these linked chemical reactions is <b>metabolism</b>. Reactions don’t happen in isolation; they run in chains called <b>metabolic pathways</b>, every step catalysed by an enzyme. These pathways come in two flavours: <b>anabolic</b> pathways that build large molecules from small ones and consume energy (protein synthesis, photosynthesis), and <b>catabolic</b> pathways that break down large molecules and release energy (respiration). The two are linked by <b>ATP</b>, the cell’s universal energy currency.',
      },
      {
        t: 'p',
        html: '<b>The living state.</b> A living cell keeps its metabolites at fairly steady concentrations: blood glucose, for instance, holds around 4.2–6.1 mM (NCERT), and hormones circulate at nanogram levels. Crucially, these are not equilibrium concentrations. A system that has reached chemical equilibrium can do no work, and life is nothing if not constant work. So the living state is best described as a <b>non-equilibrium steady state</b>: held away from equilibrium, at a steady level, precisely so that work can be done. Metabolism is what continuously maintains that state. In one line: metabolism keeps you out of equilibrium, and staying out of equilibrium is what it means to be alive.',
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 543–550 ─────────────────────────
  {
    n: '02',
    title: 'Carbohydrates, Lipids & Amino Acids',
    kalam: 'Master the categories, not just the names.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is high-yield territory. NEET regularly draws on this topic (the book’s estimate from past papers, not official figures) from biomolecule classification, amino acid types, and lipid/carbohydrate identification, often as assertion–reason or match-the-column. CBSE Boards ask 1–3 mark definitions and “distinguish between” questions. CUET leans on direct recall MCQs (essential vs non-essential, glycosidic vs peptide bond). Master the categories, not just the names.',
      },
      {
        t: 'p',
        html: 'Imagine walking into a busy kirana store. At first glance it’s chaos: sacks of rice, tins of oil, jars of dal, bundles of spices. But the shopkeeper doesn’t see chaos; he sees <b>categories</b>. Grains here, fats there, proteins in that corner. The living cell is exactly this kind of well-run shop, and the goods on its shelves are the <b>biomolecules</b>: carbohydrates, lipids, proteins (built from amino acids), and nucleic acids.',
      },
      {
        t: 'p',
        html: 'Every one of these is just an arrangement of a handful of atoms: mostly carbon, hydrogen, oxygen, with nitrogen and a little sulfur and phosphorus thrown in. What makes a sugar a sugar and a fat a fat is not exotic atoms but <b>how those atoms are arranged and which functional groups hang off the carbon skeleton</b>. That single idea will carry you through this entire chapter.',
      },
      { t: 'p', html: 'Let’s meet the three families in this topic:' },
      {
        t: 'p',
        html: '<b>Carbohydrates</b> are the cell’s instant cash: its quick energy and its building scaffolding. Think of the roti on your plate: that’s starch, a long chain of glucose units. Cellulose (the stuff of every plant cell wall, every blade of grass) is the most abundant organic compound in the biosphere, and it is a carbohydrate. Glucose in particular is the universal “coin” of cellular energy: almost every cell, plant or animal, can spend it. And just as a hundred-rupee note can be broken into change, big carbohydrates (starch, glycogen) are simply many glucose “coins” bonded together, ready to be broken apart the moment energy is needed.',
      },
      {
        t: 'p',
        html: '<b>Lipids</b> are the cell’s long-term savings and its waterproofing. A spoon of ghee, the oil in a pakora, the fat your body stores for a lean day: all lipids. Crucially, lipids hate water. That water-fearing nature is exactly why they make perfect membranes: a lipid barrier keeps the watery inside of a cell separate from the watery outside.',
      },
      {
        t: 'p',
        html: '<b>Amino acids</b> are the alphabet of life. Just as 26 letters spell every word in English, about <b>20 amino acids</b> spell out every protein in your body, from the keratin in your hair to the haemoglobin carrying oxygen in your blood. Strung together, they become proteins; that stringing-together is the bridge to the next topic.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a charm bracelet. The chain is the same backbone in every protein; what differs is the <b>charms</b> clipped on: the side chains (R-groups) of each amino acid. Change the order and identity of the charms and you get a completely different bracelet, even though the chain is identical. Life’s staggering variety comes from re-ordering the same small toolkit.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions to keep honest:</b>' },
      {
        t: 'p',
        html: '• <b>“Lipids are macromolecules” is a common over-statement.</b> Individual fats have modest molecular weights; they are not true biomacromolecules like proteins or polysaccharides. They cluster in the acid-insoluble fraction mainly because they aggregate, not because each molecule is huge.<br>• <b>“Lipids are insoluble in water” is the rule, not a law.</b> Phospholipids are amphipathic: one end loves water. That partial solubility is the whole basis of membranes; treating lipids as uniformly water-hating will trip you on phospholipid questions.<br>• <b>Glucose has a ring, not a stick.</b> We draw the open chain for teaching, but in solution glucose is overwhelmingly a ring. Many “structure” errors come from forgetting this.<br>• <b>Glycine is the lone exception</b> among the standard amino acids on chirality: a rule worth memorising precisely because it breaks the pattern.',
      },

      { t: 'part', title: 'Key definitions, structures and reagents' },
      {
        t: 'def',
        term: 'Carbohydrates',
        html: 'polyhydroxy aldehydes or ketones (or compounds yielding them on hydrolysis). Classified by hydrolysis behaviour:<br>• Monosaccharides: cannot be hydrolysed further. Glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) is an <b>aldohexose</b>; fructose is a <b>ketohexose</b>; ribose and deoxyribose are pentoses. Monosaccharides are also named by carbon count: <b>triose</b> (3C), <b>tetrose</b> (4C), <b>pentose</b> (5C, e.g., ribose), <b>hexose</b> (6C, e.g., glucose). A sugar with a free aldehyde or ketone group can reduce other compounds: a <b>reducing sugar</b> (glucose, fructose, maltose, lactose); sucrose, with both reactive groups locked in its glycosidic bond, is <b>non-reducing</b>.<br>• Disaccharides: two monosaccharides joined by a <b>glycosidic bond</b>. Sucrose = glucose + fructose; maltose = glucose + glucose; lactose = glucose + galactose.<br>• Polysaccharides: long chains. Starch (plant storage: amylose + amylopectin), glycogen (animal storage, in liver and muscle, highly branched), cellulose (structural plant cell wall, a homopolymer of β-glucose), inulin (a polymer of fructose), chitin (a nitrogen-containing polysaccharide of arthropod exoskeletons and fungal walls).',
      },
      {
        t: 'def',
        term: 'Lipids',
        html: 'a chemically diverse group united by being largely <b>hydrophobic</b>.<br>• Fatty acid = a long hydrocarbon chain ending in a carboxyl group (–COOH). <b>Saturated</b> = no C=C double bond (e.g., palmitic, stearic); <b>unsaturated</b> = one or more C=C (e.g., oleic, linoleic).<br>• Glycerol = trihydroxy propane, C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub>, three –OH groups, the anchor of fats.<br>• Triglyceride (fat/oil) = glycerol + three fatty acids joined by <b>ester bonds</b>.<br>• Phospholipid = glycerol + two fatty acids + a phosphate group (usually carrying a small polar group, such as choline in lecithin): amphipathic; <b>lecithin</b> is the classic example.<br>• Essential fatty acids (linoleic and alpha-linolenic; arachidonic acid is conditionally essential) must come from diet.',
      },
      {
        t: 'def',
        term: 'Amino acids',
        html: 'substituted methanes. A central α-carbon carries four groups: a carboxyl (–COOH), an amino group (–NH<sub>2</sub>), a hydrogen, and a variable <b>R-group</b> (side chain) that defines identity.<br>• Acidic (extra –COOH): glutamic acid, aspartic acid.<br>• Basic (side chain with an extra basic nitrogen group): lysine, arginine, histidine.<br>• Neutral (balanced): glycine, alanine, valine.<br>• Aromatic (ring side chain): tyrosine, tryptophan, phenylalanine (a simplified scheme: aromatic amino acids also belong to the neutral group by charge).<br>• <b>Zwitterion:</b> at physiological pH a neutral amino acid is a dipolar ion with net charge zero (–NH<sub>3</sub><sup>+</sup> and –COO<sup>−</sup> simultaneously); acidic and basic amino acids carry an overall charge at that pH. The exact pH at which this net-zero state is reached is the amino acid’s <b>isoelectric point (pI)</b>.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>A. How a glycosidic bond forms (linking sugars).</b> Two monosaccharides approach. The –OH on the anomeric carbon of one sugar meets an –OH on the other. A molecule of water is removed (a condensation/dehydration reaction), leaving an oxygen bridge, the <b>glycosidic bond</b>, between the two rings.<br>Glucose–OH + HO–Fructose → Glucose–O–Fructose + H<sub>2</sub>O<br><b>Why it matters:</b> the same dehydration logic builds every disaccharide and polysaccharide. Hydrolysis (adding water back) reverses it, which is exactly what digestion does.',
      },
      {
        t: 'p',
        html: '<b>B. How a peptide bond forms (linking amino acids).</b> The carboxyl (–COOH) of one amino acid reacts with the amino (–NH<sub>2</sub>) of the next. Again, <b>water is removed</b>, leaving a –CO–NH– linkage: the <b>peptide bond</b>.<br>H<sub>2</sub>N–CHR<sub>1</sub>–COOH + H<sub>2</sub>N–CHR<sub>2</sub>–COOH → H<sub>2</sub>N–CHR<sub>1</sub>–CO–NH–CHR<sub>2</sub>–COOH + H<sub>2</sub>O<br><b>Why it matters:</b> notice the pattern: glycosidic, peptide, and (in lipids) ester bonds are <b>all dehydration reactions</b>. One mechanism, three families. Spot this and half the chapter unifies.',
      },
      {
        t: 'p',
        html: '<b>C. How an ester bond forms (building a fat).</b> Glycerol carries three –OH groups; each fatty acid carries a –COOH. When an –OH meets a –COOH, <b>water is removed</b> and an <b>ester linkage</b> (–CO–O–) forms. Repeat three times on one glycerol and you have a triglyceride: the storage fat in your ghee, your seeds, your adipose tissue.<br>Glycerol–OH + HOOC–R → Glycerol–O–CO–R + H<sub>2</sub>O<br><b>Why it matters:</b> this completes the trio. Sugars join by glycosidic bonds, amino acids by peptide bonds, fatty acids to glycerol by ester bonds: <b>all three by losing water</b>, all three reversed by adding water during digestion.',
      },
      {
        t: 'p',
        html: '<b>D. Why an amino acid becomes a zwitterion.</b> The carboxyl is a proton donor; the amino group is a proton acceptor. At physiological pH the –COOH loses its proton (→ –COO<sup>−</sup>) and the –NH<sub>2</sub> gains one (→ –NH<sub>3</sub><sup>+</sup>). The proton simply hops internally.<br><br>Result (for a neutral amino acid): a molecule with both a positive and a negative pole but <b>zero net charge</b>: neutral overall, yet highly polar. This is why amino acids dissolve well in water and act as buffers.',
      },
      {
        t: 'proc',
        title: 'E. Procedure: classifying an unknown fatty acid as saturated vs unsaturated',
        steps: [
          'Inspect the carbon chain for C=C double bonds.',
          'None → saturated → tends to be <b>solid</b> at room temperature (e.g., ghee, butter) and chemically less reactive.',
          'One or more → unsaturated → tends to be <b>liquid</b> (oils) and more reactive (the double bond is a reactive site; this is what gets attacked when oil turns rancid, and what hydrogenation targets to make vanaspati).',
          'Quick sanity check: animal fats skew saturated/solid; plant oils skew unsaturated/liquid (coconut oil is the famous saturated-but-plant exception).',
        ],
      },
      { t: 'fig', id: 'b11-09-fig-9.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Classify the following into acidic, basic, and neutral amino acids, and state the structural feature responsible: glutamic acid, lysine, valine.',
        steps: [
          '<b>Reasoning.</b> The class of an amino acid is set by the net of acidic (–COOH) and basic (–NH<sub>2</sub>) groups in its R-group, beyond the standard backbone pair.<br>• <b>Glutamic acid:</b> carries an extra carboxyl group in its side chain → more –COOH than –NH<sub>2</sub> → <b>acidic</b>.<br>• <b>Lysine:</b> carries an extra amino group in its side chain → more –NH<sub>2</sub> than –COOH → <b>basic</b>.<br>• <b>Valine:</b> side chain is a plain hydrocarbon, no extra acidic/basic group → equal carboxyl and amino → <b>neutral</b>.',
        ],
        ans: 'Glutamic acid: acidic; Lysine: basic; Valine: neutral.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one is an exception in showing optical activity (chirality): glycine, alanine, valine, leucine?',
        steps: [
          '<b>The trap:</b> students hunt for something chemically “weird” among the four. The shortcut is the opposite: find the simplest. Chirality requires four different groups on the α-carbon. <b>Glycine’s</b> R-group is just an H. So its α-carbon holds –COOH, –NH<sub>2</sub>, and <b>two</b> H atoms: two groups identical → <b>not chiral</b>. Every other standard (protein) amino acid has a non-H side chain and is chiral.',
          'Mental rule: “Glycine = the only achiral standard amino acid; smallest R, no handedness.”',
        ],
        ans: 'Glycine.',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ-reasoning',
        q: 'A polysaccharide is a homopolymer of β-glucose, gives a plant its structural rigidity, and is the most abundant carbohydrate on Earth. Identify it, and distinguish it from glycogen.',
        steps: [
          '<b>Reasoning.</b> Structural + plant cell wall + most abundant + β-glucose homopolymer ⇒ <b>cellulose</b>. The distinction from glycogen turns on two axes:<br>• Linkage/branching: cellulose is unbranched β-1,4 linked (straight, tightly packed fibres → rigidity); glycogen is heavily branched α-linked (compact, quickly mobilised storage).<br>• Role/location: cellulose is <b>structural</b> in plants; glycogen is the <b>storage</b> carbohydrate of animals, in liver and muscle.',
        ],
        ans: 'Cellulose; differs from glycogen in being unbranched, β-linked, structural and plant-borne, whereas glycogen is branched, α-linked, storage and animal-borne.',
      },
      {
        t: 'ex',
        tag: 'NEET, Assertion–Reason',
        q: 'Assertion (A): Phospholipids can form a stable bilayer in water. Reason (R): A phospholipid molecule is amphipathic, with a hydrophilic phosphate head and hydrophobic fatty-acid tails. Options: <b>(a)</b> Both A and R true, R is the correct explanation of A; <b>(b)</b> Both true, R not the correct explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          '<b>Reasoning.</b> Both statements are true. And R is precisely why A happens: because each molecule has a water-loving head and water-fearing tails, in water the heads turn outward toward the water and the tails huddle inward away from it. Two such sheets back-to-back give a bilayer. R is the correct, complete explanation of A.',
          '<b>Distractor check:</b> picking (b) means you accepted both facts but failed to connect amphipathicity as the cause of bilayer formation: the classic assertion-reason mistake of treating linked statements as independent.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a zwitterion and explain, using glycine, why amino acids can act as buffers.',
            a: 'Dipolar ion (–NH<sub>3</sub><sup>+</sup> / –COO<sup>−</sup>), net neutral; the two groups can absorb added acid or base, resisting pH change.',
          },
          {
            q: '[NEET] Name the bond formed (i) between two monosaccharides, (ii) between two amino acids, (iii) between glycerol and a fatty acid. What single type of chemical reaction forms all three?',
            a: '(i) glycosidic, (ii) peptide, (iii) ester; all by dehydration/condensation.',
          },
          {
            q: '[CUET] Match the column: (A) Inulin (B) Chitin (C) Lecithin (D) Arachidonic acid ↔ (i) phospholipid (ii) essential (or conditionally essential) fatty acid (iii) fructose polymer (iv) nitrogen-containing polysaccharide.',
            a: 'A–iii, B–iv, C–i, D–ii.',
          },
          {
            q: '[NEET] Why is glycine the only standard (protein) amino acid that does not show optical isomerism, while the others do?',
            a: 'Glycine’s α-carbon bears two identical H atoms (R = H), so it lacks four different groups → achiral.',
          },
          {
            q: '[NEET, Assertion–Reason] A: Cellulose cannot be digested by humans. R: Humans lack the enzyme to hydrolyse β-1,4 glycosidic bonds. Choose the correct relationship. <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'Both A and R true, and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is the <b>storage polysaccharide of animals</b>?',
        opts: [
          {
            label: 'Cellulose',
            nudge:
              '<b>(a)</b> cellulose is structural in plants, not animal storage: chosen by students who blur “most common polysaccharide” with “storage.”',
          },
          { label: 'Glycogen', nudge: null },
          {
            label: 'Chitin',
            nudge:
              '<b>(c)</b> chitin is structural (arthropod/fungal), nitrogen-containing: a trap for those who recall it’s animal-associated.',
          },
          {
            label: 'Inulin',
            nudge:
              '<b>(d)</b> inulin is a plant fructose-store: picked by students who confuse it with glycogen because both are “storage.”',
          },
        ],
        correct: 1,
        solution: '<b>(b) Glycogen</b>: the branched glucose polymer stored in liver and muscle.',
      },
      {
        t: 'mcq',
        q: 'The amino acid most likely to be found at a sharp turn in a protein chain because it is the smallest and most flexible is:',
        opts: [
          {
            label: 'Tryptophan',
            nudge:
              '<b>(a)</b> tryptophan is the largest, aromatic: opposite of flexible; chosen by those who fixate on “special” amino acids.',
          },
          {
            label: 'Glutamic acid',
            nudge:
              '<b>(b)</b> glutamic acid (acidic) and <b>(d)</b> lysine (basic) are distractors for students grabbing a “named” amino acid without reasoning about size.',
          },
          { label: 'Glycine', nudge: null },
          {
            label: 'Lysine',
            nudge:
              '<b>(b)</b> glutamic acid (acidic) and <b>(d)</b> lysine (basic) are distractors for students grabbing a “named” amino acid without reasoning about size.',
          },
        ],
        correct: 2,
        solution: '<b>(c) Glycine</b>: smallest side chain (just H) → maximum flexibility, fits tight turns.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): Unsaturated fats are generally liquid at room temperature. Reason (R): The presence of C=C double bonds introduces kinks that prevent tight molecular packing.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          {
            label: 'Both true, R does not explain A',
            nudge: '<b>(b)</b> chosen by students who know both facts but don’t link packing to physical state.',
          },
          {
            label: 'A true, R false',
            nudge: '<b>(c)/(d)</b> chosen by those who misremember which of saturated/unsaturated is solid.',
          },
          {
            label: 'A false, R true',
            nudge: '<b>(c)/(d)</b> chosen by those who misremember which of saturated/unsaturated is solid.',
          },
        ],
        correct: 0,
        solution:
          '<b>(a).</b> The kink from each double bond stops the chains stacking neatly; loosely packed molecules flow → liquid (oils). R is the genuine cause.',
      },
      {
        t: 'mcq',
        q: 'Which set lists <b>only secondary metabolites</b>?',
        opts: [
          {
            label: 'Glucose, glycine, ATP',
            nudge:
              '<b>(a)</b> glucose, glycine, ATP are primary metabolites (core metabolism): picked by students who think “important molecule = secondary.”',
          },
          { label: 'Morphine, quinine, abrin', nudge: null },
          { label: 'Cellulose, starch, glycogen', nudge: '<b>(c)</b> starch and glycogen are primary storage carbohydrates, so the set is not “only secondary” (NCERT also lists cellulose among the polymeric secondary metabolites; know both labels).' },
          { label: 'Linoleic acid, lecithin, glycerol', nudge: '<b>(d)</b> lipids and their building blocks are primary metabolites.' },
        ],
        correct: 1,
        solution:
          '<b>(b)</b>: alkaloids (morphine, quinine) and plant toxins (abrin) are classic secondary metabolites: restricted distribution, defence/ecological roles.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing nucleotide with nucleoside</b> (nucleotides are covered in the next topic). A nucleoside = base + sugar. A nucleotide = base + sugar + <b>phosphate</b>. Memory hook: “nucleoTide has the phosphaTe.”',
          '<b>Calling chitin a storage polysaccharide.</b> It is structural and nitrogen-containing (an amino-sugar polymer), not a store. Storage = starch (plants) / glycogen (animals).',
          '<b>Forgetting glycine is the achiral exception.</b> In any “which standard amino acid is optically inactive / not chiral” question, the answer is almost always glycine.',
          '<b>Treating all lipids as strictly water-insoluble.</b> Phospholipids are amphipathic: that partial water-love is the entire reason membranes exist.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For carbohydrate/lipid/amino-acid identification, don’t memorise molecules one by one: sort by <b>category first</b>. Ask three questions in order: Is it a sugar, a fat, or an amino acid? Storage or structural? Primary or secondary metabolite? Three quick filters collapse most NEET/CUET MCQs to one option in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Carbohydrates',
            note: 'mono- (glucose, fructose) → di- (sucrose, maltose, lactose, via <b>glycosidic bond</b>) → poly- (starch/glycogen = storage; cellulose/chitin = structural). Glucose = C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.',
          },
          {
            f: 'Lipids',
            note: 'fatty acid (saturated = solid; unsaturated = liquid, has C=C) + <b>glycerol</b> (trihydroxy propane) → triglyceride (<b>ester bond</b>). <b>Phospholipids</b> are amphipathic → membranes (e.g., lecithin). Essential FA: linoleic and alpha-linolenic (arachidonic acid is conditionally essential).',
          },
          {
            f: 'Amino acids',
            note: 'α-carbon + –COOH + –NH<sub>2</sub> + H + <b>R-group</b>. Classes: acidic (Glu, Asp), basic (Lys, Arg, His), neutral (Gly, Ala, Val), aromatic (Trp, Tyr, Phe). Link via <b>peptide bond</b> (–CO–NH–).',
          },
          { f: 'Glycine', note: 'simplest, lowest MW, <b>only achiral</b> standard amino acid.' },
          { f: 'Zwitterion', note: '–NH<sub>3</sub><sup>+</sup>/–COO<sup>−</sup>, net neutral for a neutral amino acid, makes amino acids good buffers.' },
          {
            f: 'One unifying idea',
            note: 'glycosidic, peptide, and ester bonds <b>all form by removal of water</b> (dehydration/condensation).',
          },
          {
            f: 'Primary vs secondary metabolites',
            note: 'primary = sugars, amino acids, lipids, nucleotides (core metabolism); secondary = alkaloids (morphine, quinine), terpenoids, pigments, toxins (abrin, ricin), lectins (concanavalin A).',
          },
        ],
        aids: ['“nucleoTide = phosphaTe”', '“Glycine = no handedness”', '“unsaturated (C=C) = kinks = liquid.”'],
      },
    ],
  },
];
