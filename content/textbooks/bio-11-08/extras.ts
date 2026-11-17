import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 8, Cell: The Unit of Life, Additional topics A to F, word for word from
 * the Class 11 Biology Master Reference (pp. 504 to 532). The shared introduction on p. 504
 * (the paragraph and the six bullets under "Cell: The Unit of Life, Additional Topics") is the
 * first paragraph of Additional topic A's Introduction. A "Cell Envelope Chemistry and Membrane
 * Transport" pp. 504 to 507, B "Plastids, Peroxisomes, and the Endosymbiotic Theory" pp. 507 to
 * 511, C "Cell Junctions and Prokaryotic Cell Diversity" pp. 511 to 515, D "Nucleus, Chromatin,
 * and Chromosome Banding Patterns" pp. 515 to 517, E "Cell Division Vocabulary: Binary Fission,
 * Mitosis, and the Cell Cycle Checkpoints" pp. 517 to 520 (its answers end partway down p. 520),
 * F "What NEET Actually Asks" (the book's Addendum P) pp. 520 to 532. Page 533 is the next chapter.
 *
 * Addenda start and end mid-page. The book prints no drawing in these pages (no raster images; the
 * brace beside "proplastid" on p. 508 is typeset text), so there are no fig blocks. Tables the book
 * prints inside a worked example or a practice question are lines of cells separated by " | ".
 * The book's example headings ("Example A.1, [CBSE Board level] Cell Envelope Chemistry") become the
 * example's tag (the bracket) and a bold lead on its question. F's graded practice set is one
 * practice block whose level headings are each item's tag. Scientific names are italic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 504 to 507 ─────────────────────────
  {
    n: 'A',
    title: 'Cell Envelope Chemistry and Membrane Transport',
    extra: true,
    kalam: 'The chapter defines the three envelope layers from outside in, names the fluid-mosaic model, and gives lipid heads and tails, integral and peripheral proteins, and the three basic transport modes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These additional topics extend the chapter’s core ideas (the cell theory, the three-layered envelope, the endomembrane system, the semi-autonomous organelles, the 9+2 axoneme, the 9+0 centriole and the four chromosome types) with the vocabulary that questions on this chapter keep returning to.<br>• <b>Additional topic A</b> links envelope chemistry to membrane transport: cholesterol and phytosterols, the sugar chains of glycolipids and glycoproteins, vesicular transport beyond simple diffusion, and the chemical basis of the Gram reaction.<br>• <b>Additional topic B</b> adds how plastids interconvert, the enzymes of peroxisomes and glyoxysomes, and endosymbiosis with its evidence.<br>• <b>Additional topic C</b> builds on the plasmodesmata the chapter names: it compares the four cell junctions (tight, gap, desmosome and plasmodesmata) and the arrangements of dividing bacterial cells, with a note on viruses.<br>• <b>Additional topic D</b> looks at the nucleus: euchromatin and heterochromatin, chromosome banding, and how rDNA at the nucleolus organiser region leads to the nucleolus forming.<br>• <b>Additional topic E</b> sets out the stages of bacterial binary fission, the cell-cycle checkpoints and plant-versus-animal cytokinesis.<br>• <b>Additional topic F</b> shows what NEET actually asks: the recurring question shapes, the standard traps and a graded practice set.',
      },
      {
        t: 'p',
        html: 'The chapter defines the three envelope layers from outside in, names the fluid-mosaic model, and gives the heads and tails of the lipids, integral and peripheral proteins, and simple diffusion, facilitated transport and active transport. This additional topic adds the structural vocabulary of the bilayer itself (cholesterol and phytosterols, and the sugar chains of glycolipids and glycoproteins), the full transport taxonomy (vesicular transport: pinocytosis, phagocytosis and exocytosis), and the chemical basis of the Gram reaction, which CUET tests independently of the three-layer order.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Reading the fluid-mosaic diagram.</b> The bilayer has two leaflets. The outer leaflet carries glycolipids and glycoproteins (carbohydrate chains facing outward) that form the cell coat on the outer face (in animal cells also called the glycocalyx). Cholesterol (in animal membranes) or phytosterols (in plant membranes) nest between the hydrophobic tails, modulating fluidity. Integral proteins span the bilayer; peripheral proteins sit on either face. Lateral movement within a leaflet is free; transverse movement (flip-flop) is rare for lipids and essentially absent for proteins.',
      },
      {
        t: 'table',
        title: 'Transport modes compared',
        head: ['Mode', 'What moves', 'Energy source', 'Direction', 'Example'],
        rows: [
          [
            'Passive diffusion',
            'Small non-polar molecules',
            'None (concentration gradient)',
            'Down gradient',
            'O<sub>2</sub>, CO<sub>2</sub>, N<sub>2</sub> across plasma membrane',
          ],
          [
            'Facilitated transport',
            'Polar molecules, ions',
            'None (carrier protein, channel protein)',
            'Down gradient',
            'Glucose via GLUT transporter, aquaporin for water',
          ],
          [
            'Active transport',
            'Ions and polar molecules',
            'ATP',
            'Against gradient',
            'Na<sup>+</sup>/K<sup>+</sup> ATPase pump',
          ],
          ['Pinocytosis', 'Fluid-phase solutes, small particles', 'ATP', 'Into cell', 'Uptake of extracellular fluid'],
          [
            'Phagocytosis',
            'Large particles, pathogens, debris',
            'ATP (pseudopods)',
            'Into cell (phagosome)',
            'Macrophage engulfing bacteria',
          ],
          [
            'Exocytosis',
            'Secretory products, membrane proteins',
            'ATP',
            'Out of cell',
            'Vesicle fusion with plasma membrane',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Gram-stain chemistry.</b> Gram-positive bacteria retain crystal violet because their peptidoglycan wall is thick and multi-layered; the dye is trapped in this mesh. Gram-negative bacteria have a thin peptidoglycan layer and an additional outer membrane carrying lipopolysaccharide (LPS); the alcohol wash step dissolves the LPS and removes the crystal violet, leaving only the counterstain (safranin). This is why gram-negative appear pink and gram-positive appear purple, and why the gram reaction is an envelope-level property, not a membrane-level one.',
      },
      {
        t: 'p',
        html: '<b>Peptidoglycan structure (also called murein).</b> The bacterial cell wall is a single macromolecule: glycan strands made of alternating N-acetyl-glucosamine (NAG) and N-acetyl-muramic acid (NAM) units, cross-linked by peptide bridges. This giant sac-like structure surrounds the entire cell and is under turgor pressure from within, which is why penicillin (which blocks peptidoglycan synthesis) causes lysis in growing bacteria.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Cell Envelope Chemistry.</b> “Differentiate between Gram-positive and Gram-negative bacteria on the basis of cell wall structure.”',
        steps: [
          '<b>Step 1: State the wall thickness.</b> Gram-positive: thick, multilayered peptidoglycan (up to 40 layers) forming up to 90% of the wall dry weight. Gram-negative: thin, single or few layers of peptidoglycan sandwiched between the inner plasma membrane and an outer membrane.',
          '<b>Step 2: Name the additional gram-negative component.</b> Gram-negative walls carry an outer membrane of lipopolysaccharide (LPS) and lipoproteins above the thin peptidoglycan layer; this outer membrane is absent in gram-positive walls.',
          '<b>Step 3: Explain the gram response.</b> The thick peptidoglycan of gram-positive cells traps crystal violet-iodine complexes, retaining the purple colour after ethanol decolorisation. The thin gram-negative wall and the solvent action of ethanol on the LPS layer allow the dye to wash out; only the counterstain safranin remains, giving pink.',
          '<b>Step 4: Other consequences.</b> Gram-positive cells have no outer membrane, so they lack the wide periplasmic space that gram-negative cells have between their inner and outer membranes; gram-negative cells are more resistant to many antibiotics (such as penicillin), detergents and bile salts because of the outer LPS barrier.',
        ],
        ans: 'Gram-positive bacteria have a thick, multilayered peptidoglycan wall (no outer membrane), retain crystal violet, and appear purple. Gram-negative bacteria have a thin peptidoglycan layer plus an outer lipopolysaccharide membrane, lose crystal violet, and appear pink after counterstaining.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with distractor analysis.</b> Which of the following is NOT a component of the plasma membrane according to the fluid-mosaic model?<br>(a) Phospholipid bilayer<br>(b) Integral proteins<br>(c) Cellulose fibers<br>(d) Cholesterol',
        steps: [
          'Cellulose is a plant cell-wall component and does not occur in the plasma membrane. (a) The phospholipid bilayer is the basic structural framework of the membrane, so it is a component. (b) Integral proteins are a hallmark of the fluid-mosaic model. (d) Cholesterol (phytosterols in plants) modulates membrane fluidity and is a genuine membrane component. The classic trap here is a wall component offered as a membrane component.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> Assertion (A): Active transport requires ATP. Reason (R): Active transport moves substances against their concentration gradient.<br>Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> Test each clause independently. A is true: carrier pumps such as Na<sup>+</sup>/K<sup>+</sup> ATPase use ATP. R is true: active transport is uphill movement, from lower to higher concentration. Does R explain A? Yes: moving a solute up its gradient is work, and ATP supplies the energy for that work. Option (a).',
          'Check, as always, that R is not merely a true statement placed next to a true A: here it gives the reason for the energy requirement.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw a labelled diagram of the fluid-mosaic model of the plasma membrane, naming any four components.',
            a: 'Four components from: phospholipid bilayer (hydrophilic heads outward, hydrophobic tails inward), integral proteins (spanning the bilayer), peripheral proteins (on either face), cholesterol molecules (between the tails), carbohydrate chains on glycoproteins and glycolipids (forming the glycocalyx on the extracellular face). Credit for any four correctly labelled.',
          },
          {
            q: '[CUET] Arrange in the correct sequence: formation of a phagosome, engulfment of a bacterium by a macrophage, fusion of the phagosome with a lysosome.',
            a: 'Engulfment of the bacterium by the macrophage → formation of the phagosome → fusion of the phagosome with a lysosome (forming a phagolysosome). The sequence follows the chronological order of the process.',
          },
          {
            q: '[NEET] Why do gram-negative bacteria appear pink after gram staining?',
            a: 'Gram-negative bacteria have a thin peptidoglycan layer and an outer lipopolysaccharide membrane. During the gram-staining procedure, ethanol (the decoloriser) removes the crystal violet-iodine complex by dissolving the LPS layer; the cells then take up the counterstain safranin and appear pink. Gram-positive bacteria retain the purple dye because their thick peptidoglycan wall traps the complex.',
          },
          {
            q: '[NEET] Distinguish facilitated transport from active transport with respect to energy requirement and direction of movement.',
            a: 'Facilitated transport: no ATP required; moves substances down the concentration gradient (passive). Active transport: ATP required; moves substances against the concentration gradient. Both require carrier or transport proteins; the distinction is energy source and direction.',
          },
          {
            q: '[NEET] Name the main components of peptidoglycan and state its location in the bacterial cell.',
            a: 'Peptidoglycan (also called murein) consists of N-acetyl-glucosamine (NAG) and N-acetyl-muramic acid (NAM) alternating in glycan strands, cross-linked by peptide bridges. It forms the rigid cell wall of bacteria, lying outside the plasma membrane and beneath the glycocalyx (when a glycocalyx is present).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 507 to 511 ─────────────────────────
  {
    n: 'B',
    title: 'Plastids, Peroxisomes, and the Endosymbiotic Theory',
    extra: true,
    kalam: 'The chapter gives the three leucoplast types, names peroxisomes and glyoxysomes as microbodies, and states that mitochondria and chloroplasts carry their own DNA and 70S ribosomes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the three leucoplast types with what they store, names peroxisomes and glyoxysomes as microbodies, and states that mitochondria and chloroplasts carry their own DNA and 70S ribosomes. This additional topic adds how the plastids interconvert from the proplastid, the enzymes of peroxisomes and glyoxysomes (catalase, urate oxidase, the glyoxylate cycle enzymes), and endosymbiosis with its evidence, which NEET asks about directly.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Plastid conversion series.</b> All plastids share a common proplastid precursor in meristematic tissue and interconvert depending on the cell’s developmental cues and environment:<br><br>proplastid → chloroplast (light, photosynthesising tissue)<br>proplastid → chromoplast (senescing tissue, fruits/flowers)<br>proplastid → leucoplast (dark, storage tissue)<br><br>In ripening fruit, chloroplasts themselves turn into chromoplasts.',
      },
      {
        t: 'p',
        html: 'Leucoplasts further specialise: an amyloplast stores starch (found in tubers and seeds), an elaioplast stores fats and oils (found in oily seeds), and an aleuroplast (proteinoplast) stores proteins (found in protein-rich seeds such as legumes).',
      },
      {
        t: 'p',
        html: '<b>Peroxisome and glyoxysome functions.</b> Peroxisomes carry catalase and urate oxidase; they break down hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>, a reactive oxygen by-product) and oxidise fatty acids. Glyoxysomes are specialised peroxisomes in germinating fatty seeds: they carry the glyoxylate cycle enzymes (isocitrate lyase and malate synthase) that allow mobilisation of stored fats into carbohydrates during seed germination. The key distinction: peroxisomes are found in nearly all eukaryotes; glyoxysomes are the peroxisomes of germinating fatty seeds of plants (some fungi have them too).',
      },
      {
        t: 'p',
        html: '<b>Endosymbiotic hypothesis: the testable predictions.</b> Lynn Margulis (then Lynn Sagan, 1967) proposed that mitochondria and chloroplasts arose when aerobic prokaryotes (mitochondria) and photosynthetic prokaryotes (chloroplasts) were engulfed by a larger anaerobic host cell and established a symbiotic relationship. The hypothesis is supported by four features that are found in the organelles:',
      },
      {
        t: 'table',
        title: null,
        head: ['Prediction', 'Mitochondria', 'Chloroplast'],
        rows: [
          ['Own DNA', 'Circular, bacterial-type (not histones)', 'Circular, bacterial-type'],
          ['Own ribosomes', '70S as NCERT gives it (prokaryotic size, sensitive to chloramphenicol; animal mitochondrial ribosomes are in fact smaller, about 55S)', '70S'],
          ['Divide independently', 'Binary fission, not by host-cell mitosis', 'Binary fission'],
          ['Double membrane origin', 'Inner membrane from the symbiont; the outer is classically said to come from the host’s engulfing vesicle', 'Inner membrane from the symbiont; the outer is classically said to come from the host’s engulfing vesicle'],
        ],
      },
      {
        t: 'p',
        html: 'The “semi-autonomous” label reflects this origin: the organelles make some of their own proteins but depend on nuclear genes for the majority; they are symbiotic tenants, not fully independent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the Column.</b> Match the plastid type (A–D) with its stored substance (i–iv) and a characteristic example tissue (v–viii):<br>A. Amyloplast<br>B. Elaioplast<br>C. Aleuroplast<br>D. Chromoplast<br>(i) Starch<br>(ii) Fats/oils<br>(iii) Proteins<br>(iv) Pigment (carotenoids)<br>(v) Potato tuber<br>(vi) Castor seed endosperm<br>(vii) Legume seed (e.g., bean)<br>(viii) Tomato fruit (ripening)',
        steps: [
          '<b>Reasoning.</b> A–(i) and (v): amyloplasts store starch and are abundant in starchy organs such as potato tubers. B–(ii) and (vi): elaioplasts store oils and are found in oily seeds such as castor, where the oil is held in the endosperm. C–(iii) and (vii): aleuroplasts (proteinoplasts) store proteins and occur in protein-rich seeds such as beans. D–(iv) and (viii): chromoplasts hold carotenoid pigments and give ripe tomatoes their red-orange colour. Watch for two errors: pairing the chromoplast with a leucoplast tissue (potato, seed), and pairing a leucoplast type with a pigment or with a store outside its specialty.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Endosymbiotic Evidence.</b> “Mitochondria could not have arisen by independent evolution because they lack the full complement of genes needed for independent life.” Evaluate this statement in the context of the endosymbiotic theory.',
        steps: [
          '<b>Step 1: State the observation.</b> Mitochondria possess their own circular DNA and 70S ribosomes and divide by binary fission, consistent with an independent origin. However, the mitochondrial genome is highly reduced: human mitochondrial DNA encodes only 13 proteins, 22 tRNAs, and 2 rRNAs, while the ~1,500 proteins required for mitochondrial function are encoded by nuclear DNA.',
          '<b>Step 2: Evaluate the statement.</b> The reduction is precisely what the endosymbiotic theory predicts: once engulfed, the symbiont progressively transferred genes to the host nucleus (gene transfer hypothesis), retaining only those genes essential for the organelle’s core, hydrophobic, membrane-bound functions. The statement is therefore consistent with, not contradictory to, the endosymbiotic theory.',
          '<b>Step 3: Add the corroborating evidence.</b> Mitochondria are bounded by two membranes (the inner derived from the symbiont, the outer, in the classic account, from the host’s endocytic vesicle); their ribosomes are chloramphenicol-sensitive (like prokaryotic ribosomes); and they cannot be synthesised de novo by the cell: new mitochondria arise only by the growth and division of existing ones.',
        ],
        ans: 'The statement supports rather than undermines the endosymbiotic theory. The bacterial ancestry explains the circular DNA, and gene transfer from symbiont to host explains the reduced genome (evolutionary simplification after symbiosis was established). Mitochondria are symbiotic remnants that retain enough autonomy to divide but depend on the nucleus for most of their proteins.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with distractor analysis.</b> Which of the following is a function of glyoxysomes but NOT of peroxisomes in general?<br>(a) Breakdown of hydrogen peroxide<br>(b) Oxidation of fatty acids<br>(c) Carrying the glyoxylate cycle enzymes (isocitrate lyase and malate synthase)<br>(d) Present in animal cells',
        steps: [
          'Glyoxysomes are specialised peroxisomes in germinating fatty seeds that carry the glyoxylate cycle, allowing conversion of stored fats to carbohydrates. (a) catalase in peroxisomes breaks down H<sub>2</sub>O<sub>2</sub>; this occurs in both peroxisomes and glyoxysomes. (b) both peroxisomes and glyoxysomes oxidise fatty acids. (d) peroxisomes are found in both plant and animal cells; glyoxysomes are the form found in germinating fatty seeds. The common error is to treat (a) or (b) as glyoxysome-exclusive: both are shared functions.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw the conversion series of plastids starting from a proplastid, naming three differentiated forms and their primary functions.',
            a: 'Proplastid (in meristematic tissue, undifferentiated) gives rise to three differentiated forms: chloroplast (green tissues, photosynthesis; contains thylakoids and grana), chromoplast (fruits and flowers; carotenoid pigments) and leucoplast (colourless, storage; the amyloplast stores starch, the elaioplast stores oils/fats and the aleuroplast stores proteins). The interconversion is developmental and depends on the environment.',
          },
          {
            q: '[CUET] Differentiate between a peroxisome and a glyoxysome with respect to their occurrence and specific enzymes.',
            a: 'Peroxisomes: found in nearly all eukaryotes (plant and animal cells); contain catalase and oxidases that break down H<sub>2</sub>O<sub>2</sub> and oxidise fatty acids. Glyoxysomes: found specifically in germinating fatty seeds; additionally carry the glyoxylate cycle enzymes (isocitrate lyase and malate synthase) that allow mobilisation of stored fats into carbohydrate. Both share H<sub>2</sub>O<sub>2</sub> breakdown and fatty acid oxidation; the glyoxylate cycle enzymes are what the glyoxysome adds.',
          },
          {
            q: '[NEET] State three predictions of the endosymbiotic hypothesis that have been experimentally verified for mitochondria.',
            a: 'Three verified predictions: (i) Mitochondria contain circular DNA of bacterial type (not linear, histone-bound). (ii) Mitochondria contain 70S ribosomes (prokaryotic size, sensitive to chloramphenicol). (iii) Mitochondria divide by binary fission independent of the host cell’s mitosis. (iv) Mitochondria have a double membrane, the inner derived from the symbiont. Any three correctly stated.',
          },
          {
            q: '[NEET] Why is the mitochondrial genome described as “highly reduced”? What does this imply about the origin of mitochondria?',
            a: 'The human mitochondrial genome encodes only 13 proteins, whereas the organelle requires approximately 1,500 proteins for full function. This implies that most mitochondrial proteins are encoded by nuclear DNA: genes were transferred from the symbiont to the host nucleus during the course of evolution. The “highly reduced” genome is exactly what the endosymbiotic theory predicts for a former free-living organism that became dependent on its host.',
          },
          {
            q: '[NEET] A germinating castor seed uses its stored fat. Name the organelle responsible and write its two key functions in this context.',
            a: 'Glyoxysomes. Two key functions in germinating fatty seeds: (i) β-oxidation of stored fatty acids, releasing acetyl-CoA; (ii) operation of the glyoxylate cycle (via isocitrate lyase and malate synthase), which converts the acetyl-CoA into succinate, which is then converted to glucose via gluconeogenesis (carried on as sucrose in the seedling), supplying the seedling with carbohydrate before it can photosynthesise.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 511 to 515 ─────────────────────────
  {
    n: 'C',
    title: 'Cell Junctions and Prokaryotic Cell Diversity',
    extra: true,
    kalam: 'The chapter names plasmodesmata, the channels that link neighbouring plant cells, and states that they connect the cytoplasm of neighbouring cells.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names plasmodesmata, the channels that link neighbouring plant cells, and states that they connect the cytoplasm of neighbouring cells. This additional topic adds the three junction types of animal cells (tight, gap and desmosomes), a functional comparison of all four, the arrangements that dividing bacterial cells form beyond the four basic shapes, and the vocabulary of viral genetic material that appears in options.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Four cell junctions: structure, location, and function',
        head: ['Junction', 'Structure', 'Location', 'Function'],
        rows: [
          [
            'Tight junction (zonula occludens)',
            'Plasma membranes of adjacent cells fused by transmembrane proteins (claudins, occludins); no intercellular space',
            'Epithelial cells lining gut, kidney tubules',
            'Seals adjacent cells, preventing paracellular passage of molecules; maintains apical-basal polarity',
          ],
          [
            'Gap junction (communicating junction)',
            'Connexons (six connexin proteins forming a channel) connecting two cells; intercellular channel 1–2 nm wide',
            'Animal tissues (liver, heart, uterus)',
            'Allows direct cytoplasmic communication: ions, small molecules, and signalling molecules pass between cells; not found in plants, which use plasmodesmata instead',
          ],
          [
            'Desmosome (macula adherens)',
            'Cadherin-mediated adhesion plaques connecting intermediate filaments (keratin) of adjacent cells',
            'Tissues under mechanical stress (skin, cardiac muscle, uterus)',
            'Provides mechanical attachment; distributes shear stress across a tissue plane',
          ],
          [
            'Plasmodesmata',
            'Cytoplasmic channels through the cell wall, lined by plasma membrane; may contain a desmotubule (extension of ER)',
            'Plant tissues (and some algae)',
            'Allows symplastic transport of water, nutrients, and signalling molecules between adjacent plant cells',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key distinction:</b> Tight junctions, gap junctions and desmosomes are junctions of animal cells; plasmodesmata are the channels of plant cells (and some algae). Questions frequently contrast the two groups.',
      },
      {
        t: 'p',
        html: '<b>Prokaryotic arrangements (beyond the four basic shapes).</b> The chapter names the four bacterial shapes (bacillus, coccus, vibrio, spirillum). When cocci divide, the daughter cells can stay together, and the pattern they form depends on the planes of successive divisions:<br>• One plane, repeated: pairs (diplococci) or chains (streptococci).<br>• Two perpendicular planes: groups of four (tetrads).<br>• Three perpendicular planes: cubic packets of eight (<i>Sarcina</i>).<br>• Several irregular planes: irregular grape-like clusters (staphylococci).',
      },
      {
        t: 'p',
        html: 'The arrangement is a diagnostic feature in clinical microbiology (for example, <i>Staphylococcus</i> forms grape-like clusters, <i>Streptococcus</i> forms chains and <i>Neisseria</i> forms diplococci).',
      },
      {
        t: 'p',
        html: '<b>Viral genetic material: the acellular exception.</b> The chapter states the cell theory’s exception is viruses. The relevant vocabulary for exams: viruses carry either DNA or RNA (never both), and are classified as DNA viruses (e.g., bacteriophage T4) or RNA viruses (e.g., Tobacco Mosaic Virus, TMV). They are obligate intracellular parasites: they replicate only inside a host cell and carry essentially no metabolic machinery of their own. This is why they sit on the boundary of living and non-living and challenge the cell theory.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Cell Junction Comparison.</b> “Describe the structure and function of any two types of cell junctions found in animal cells.”',
        steps: [
          '<b>Step 1: Choose two types.</b> Select tight junction and gap junction, as they represent opposite functional extremes (sealing vs communicating).',
          '<b>Step 2: Tight junction structure.</b> Transmembrane proteins (claudins and occludins) on adjacent cell membranes fuse together, eliminating the intercellular space. The fusion points form a continuous band (zonula occludens) around the apical perimeter of the cell.',
          '<b>Step 3: Tight junction function.</b> Prevents paracellular movement of molecules (forcing all transport through the cell); maintains polarity by separating apical and basolateral membrane domains. Found in intestinal epithelium and kidney tubules.',
          '<b>Step 4: Gap junction structure.</b> Connexin proteins in one cell align with connexin proteins in the adjacent cell to form a connexon, a hollow channel (diameter ~1–2 nm). Six connexins make one connexon; two connexons from opposing cells dock to form the intercellular channel.',
          '<b>Step 5: Gap junction function.</b> Allows direct cytoplasmic continuity between cells: ions, nucleotides, amino acids, sugars, and signalling molecules (cAMP) pass freely. Enables electrical coupling in cardiac muscle and coordinated calcium waves in epithelial cells. Dynamic: channels open and close in response to Ca<sup>2+</sup> and pH.',
        ],
        ans: 'Two distinct structures with opposing functions: tight junction seals, gap junction connects.',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Prokaryotic Arrangement Identification.</b> Match each bacterial arrangement (A–D) with the pattern of division that produces it (i–iv):<br>A. Diplococci / streptococci (pairs or chains)<br>B. Tetrads<br>C. <i>Sarcina</i> (cubic packets of eight)<br>D. Staphylococci (grape-like clusters)<br>(i) Division in one plane, repeated<br>(ii) Division in two perpendicular planes<br>(iii) Division in three perpendicular planes<br>(iv) Division in several irregular planes',
        steps: [
          '<b>Reasoning.</b> Count the planes of division. A: one plane, repeated, leaves the cells in pairs or in a chain: (i). B: a second division at right angles to the first gives four cells: (ii). C: a third division at right angles to both gives a cube of eight: (iii). D: divisions in no fixed plane pile the cells up irregularly, like a bunch of grapes: (iv).',
        ],
        ans: 'A–(i); B–(ii); C–(iii); D–(iv).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with distractor analysis.</b> Which cell junction allows direct cytoplasmic communication between adjacent animal cells?<br>(a) Tight junction<br>(b) Desmosome<br>(c) Gap junction<br>(d) Plasmodesmata',
        steps: [
          'Gap junctions form connexon channels that allow ions and small molecules to pass directly between cell cytoplasms. (a) tight junction seals the paracellular space: it blocks, not enables, communication. (b) desmosomes provide mechanical adhesion, not molecular exchange. (d) plasmodesmata do allow cytoplasmic communication, but in plant cells, not animal cells.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw a labelled diagram of a gap junction, naming the structural unit and the types of molecules that pass through it.',
            a: 'Diagram: two adjacent animal cells with connexon channels spanning the narrow intercellular gap. Each connexon is formed by six connexin proteins; two connexons (one from each cell) dock to form the open channel. Labelled arrows showing passage of: ions, small metabolites (glucose, amino acids), signalling molecules (cAMP), and second messengers, but NOT large proteins or nucleic acids. (Channel diameter ~1–2 nm sets the size cutoff.)',
          },
          {
            q: '[CUET] Classify the following by cell junction type: gut epithelium, cardiac muscle, adjacent plant cells.',
            a: 'Gut epithelium → tight junctions (sealing the paracellular route, maintaining polarity). Cardiac muscle → gap junctions (electrical coupling, coordinated contraction) and desmosomes (mechanical adhesion). Adjacent plant cells → plasmodesmata (symplastic transport of water and nutrients).',
          },
          {
            q: '[NEET] Distinguish between a desmosome and a tight junction with respect to structure, location, and primary function.',
            a: 'Desmosome (macula adherens): associated with intermediate filaments (keratin); found in tissues under mechanical stress (skin, cardiac muscle); provides mechanical adhesion and distributes shear stress across a tissue plane. Tight junction (zonula occludens): transmembrane claudins/occludins fuse adjacent membranes; found in epithelial sheets (gut, kidney tubules); seals the paracellular pathway and maintains cell polarity. The core distinction: desmosomes stick, tight junctions seal.',
          },
          {
            q: '[NEET] Name four bacterial arrangements of cocci and state the division-plane basis for each.',
            a: 'Diplococci: division in one plane, cells remain in pairs. Streptococci: division in one plane, repeated in the same orientation, forming chains. Tetrads: division in two perpendicular planes, forming groups of four. <i>Sarcina</i>: division in three mutually perpendicular planes, forming cubic packets of eight cells. Staphylococci: division in several irregular planes, forming grape-like clusters. Any four are acceptable; the key variable is the orientation of successive division planes.',
          },
          {
            q: '[NEET] Why are viruses considered acellular, and how do they challenge the cell theory?',
            a: 'Viruses are acellular because they lack cytoplasm, ribosomes, and essentially any metabolic machinery of their own: they are inert macromolecular complexes outside a host cell. They challenge the cell theory on two fronts: (i) they are not cells and do not arise by the division of pre-existing cells, since they replicate only by taking over a host cell; (ii) they exist at the boundary of living and non-living, being metabolically inert outside a host. Since the cell theory states all living organisms are composed of cells, and viruses display some living properties (replication, evolution) only inside host cells, their status remains contested, which is why viruses are usually given as the exception to the cell theory.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 515 to 517 ─────────────────────────
  {
    n: 'D',
    title: 'Nucleus, Chromatin, and Chromosome Banding Patterns',
    extra: true,
    kalam: 'The chapter defines chromatin as DNA wound on histone proteins, names the four chromosome types classified by centromere position, and says the nucleolus forms at a SAT chromosome’s secondary constriction, the nucleolar organiser.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines chromatin as DNA wound on histone proteins, names the four chromosome types classified by centromere position, says the nucleolus forms at a SAT chromosome’s secondary constriction, the nucleolar organiser, and mentions euchromatin and heterochromatin only in passing. This additional topic explains the two functional states of chromatin (euchromatin and heterochromatin), the banding patterns used in karyotyping, and the rDNA of the nucleolus organiser region (NOR), the link between a satellite chromosome and the formation of the nucleolus.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Euchromatin vs heterochromatin.</b> During interphase, not all chromatin is equally condensed. Euchromatin is loosely packed, transcriptionally active chromatin (genes being expressed); it stains pale with DNA-specific dyes. Heterochromatin is densely packed, transcriptionally inactive chromatin (genes not being expressed, or structural regions such as centromeres and telomeres); it stains dark. Constitutive heterochromatin (centromeres, telomeres) is always heterochromatic; facultative heterochromatin (e.g., the Barr body, the inactivated X chromosome in females) can become heterochromatic in certain cells.',
      },
      {
        t: 'p',
        html: '<b>Chromosome banding patterns.</b> Dyes such as Giemsa (G-banding) and quinacrine (Q-banding) give each chromosome a pattern of light and dark bands. Dark G-bands are broadly the more condensed, gene-poor regions and light bands the gene-rich, more active ones; banding is not a simple map of euchromatin and heterochromatin. The pattern is characteristic and reproducible for each chromosome, enabling karyotyping: the systematic arrangement of chromosomes by size and banding pattern. This is the basis for detecting Down syndrome (trisomy 21), Turner syndrome (45,X), and other chromosomal abnormalities.',
      },
      {
        t: 'p',
        html: '<b>Nucleolus organiser region (NOR).</b> The secondary constriction of a SAT chromosome carries ribosomal RNA genes (rDNA repeats). This region is the nucleolus organiser: after cell division, NORs from specific acrocentric chromosomes cluster together and recruit proteins to form the nucleolus, the site of rRNA transcription and ribosome subunit assembly. In short, the satellite chromosome supplies the genes (the template) and the nucleolus is the structure that assembles around them.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Chromatin Type Identification.</b> “In a female mammalian cell, one of the two X chromosomes becomes transcriptionally inactive. Which type of chromatin is the inactive X chromosome converted into, and what is it called?”',
        steps: [
          '<b>Step 1: Identify the inactive X.</b> In female mammals, X-inactivation (discovered by Mary Lyon) ensures dosage compensation: equal X-linked gene expression between XX females and XY males. One X chromosome is randomly inactivated in each somatic cell early in development.',
          '<b>Step 2: Identify the chromatin state.</b> The inactive X is highly condensed and transcriptionally silent throughout the cell’s life in that lineage. This is not constitutive heterochromatin (which is always condensed at centromeres and telomeres regardless of cell type); it is facultative heterochromatin: the chromosome has the potential to be active (it carries active genes) but is switched off in this cell.',
          '<b>Step 3: Name the structure.</b> The condensed, inactive X chromosome visible in interphase nuclei is called the Barr body (named after Murray Barr, who identified it as a dark-staining body in female cat neurons). It is attached to the nuclear envelope.',
        ],
        ans: 'The inactive X chromosome is converted into facultative heterochromatin, called the Barr body. It is transcriptionally silent and lies at the nuclear periphery.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with distractor analysis.</b> Which of the following is a function of the nucleolus?<br>(a) DNA replication<br>(b) Synthesis of rRNA and assembly of ribosomal subunits<br>(c) Formation of the nuclear envelope<br>(d) Synthesis of tRNA',
        steps: [
          'The nucleolus is the site of ribosomal RNA synthesis (by RNA polymerase I) and the assembly of the 40S and 60S ribosomal subunits from rRNA and ribosomal proteins imported from the cytoplasm. (a) DNA replication occurs throughout the nucleoplasm during S phase, not specifically in the nucleolus. (c) the nuclear envelope reforms from fragments of the ER after mitosis. (d) tRNA synthesis occurs in the nucleoplasm by RNA polymerase III. Remember that the nucleolus is the site of rRNA synthesis and ribosome assembly; “DNA work” in the nucleus is not the nucleolus’s job.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between euchromatin and heterochromatin with respect to staining, transcriptional activity, and location in a chromosome.',
            a: 'Euchromatin: loosely packed, transcriptionally active, stains pale; generally located in chromosome arms. Heterochromatin: densely packed, transcriptionally inactive (or less active), stains dark with DNA dyes; found at centromeres and telomeres. Both are chromatin; the functional difference is transcriptional status.',
          },
          {
            q: '[CUET] What is a karyotype? Name one chromosomal abnormality that can be detected by karyotyping.',
            a: 'A karyotype is the systematic arrangement of chromosomes by size, centromere position, and banding pattern, used to detect chromosomal abnormalities. One detectable abnormality: Down syndrome (trisomy 21, three copies of chromosome 21) or Turner syndrome (45,X, missing one X chromosome in females).',
          },
          {
            q: '[NEET] Explain the role of the nucleolus organiser region (NOR) in nucleolus formation.',
            a: 'The nucleolus organiser region (NOR) is a secondary constriction on SAT chromosomes (in humans, the acrocentric chromosomes 13, 14, 15, 21 and 22) that contains tandem repeats of ribosomal RNA genes (rDNA). After mitosis, the NORs from one or more acrocentric chromosomes cluster together and recruit nucleolar proteins, forming the nucleolus. The NOR is therefore the source of the nucleolus: it is the genetic template for rRNA synthesis, and the nucleolus is the cytological structure that assembles around the NOR.',
          },
          {
            q: '[NEET] A cell from a female mammal shows a darkly staining body at the nuclear periphery. Name this structure and state its origin.',
            a: 'The structure is the Barr body. It is the highly condensed, transcriptionally inactive X chromosome (one of the two X chromosomes in a female mammal), converted to facultative heterochromatin during early embryonic development by X-inactivation (the Lyon hypothesis).',
          },
          {
            q: '[NEET] State two differences between constitutive and facultative heterochromatin.',
            a: 'Constitutive heterochromatin: always condensed in all cell types (e.g., centromeres, telomeres); rarely transcribed; structural role. Facultative heterochromatin: condensed in some cell types or developmental stages but not others (e.g., the inactive X chromosome); the same genetic region can be active in other cells; transcriptional silencing is reversible. The key distinction: constitutive is permanently silent; facultative is contextually silent.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 517 to 520 ─────────────────────────
  {
    n: 'E',
    title: 'Cell Division Vocabulary: Binary Fission, Mitosis, and the Cell Cycle Checkpoints',
    extra: true,
    kalam: 'The chapter lists binary fission against mitosis and meiosis, and says the mesosome helps bacterial cytokinesis, the centrioles help organise the spindle and the Golgi builds the cell plate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lists binary fission against mitosis and meiosis in its table, says the mesosome helps bacterial cytokinesis, the centrioles help organise the spindle and the Golgi builds the cell plate. This additional topic sets out the step-by-step sequence of bacterial binary fission, the three cell-cycle checkpoints (G<sub>1</sub>/S, G<sub>2</sub>/M and the spindle-assembly checkpoint) with their regulatory molecules, and the comparison of cytokinesis in plant and animal cells, all of which appear in option lists.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Bacterial binary fission: four sequential stages.</b> Prokaryotes divide by binary fission. Replication and elongation overlap in a living cell, but the standard exam sequence is:<br>1. <b>DNA replication:</b> The single circular chromosome, attached to the plasma membrane, is replicated bidirectionally from the origin of replication (oriC). Each copy stays attached to the membrane.<br>2. <b>Cell elongation and segregation:</b> The cell grows longer, adding new plasma membrane and new peptidoglycan wall; the diameter stays constant. As the cell lengthens, the growing membrane between the two attachment points pushes the daughter chromosomes toward opposite poles.<br>3. <b>Septum formation:</b> The FtsZ ring (a tubulin-like protein) assembles at the cell centre and contracts, and the wall and plasma membrane grow inward as a division septum; new cell wall material is deposited.<br>4. <b>Separation:</b> The septum completes, the cytoplasm is divided, and the cell splits into two genetically identical daughter cells.',
      },
      {
        t: 'p',
        html: '<b>Eukaryotic cell-cycle checkpoints.</b> The cell cycle (G<sub>1</sub> → S → G<sub>2</sub> → M) is monitored by three main checkpoints that ensure fidelity:',
      },
      {
        t: 'table',
        title: null,
        head: ['Checkpoint', 'Timing', 'Function'],
        rows: [
          [
            'G<sub>1</sub>/S checkpoint (restriction point)',
            'End of G<sub>1</sub>, before S phase begins',
            'Commits the cell to DNA synthesis; checks cell size, nutrients, growth factors and DNA integrity',
          ],
          [
            'G<sub>2</sub>/M checkpoint',
            'End of G<sub>2</sub>, before mitosis begins',
            'Ensures all DNA is replicated and damage is repaired before chromosome separation',
          ],
          [
            'M (spindle-assembly) checkpoint',
            'Metaphase, before anaphase',
            'Ensures every chromosome is attached to spindle fibres at its kinetochore before the sister chromatids separate',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Cyclins and cyclin-dependent kinases (CDKs) drive the cell cycle through these checkpoints.',
      },
      {
        t: 'p',
        html: '<b>Cytokinesis contrast.</b> In animal cells, cytokinesis is achieved by cleavage furrow formation: actin and myosin filaments contract in a ring beneath the plasma membrane at the equator, pinching the cell into two. In plant cells, the cell plate forms from Golgi-derived vesicles that fuse at the equator, across the middle of the spindle, depositing new cell wall material and the middle lamella between the daughter cells. No constriction is possible because the rigid cell wall prevents membrane pinching.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Binary Fission Sequence.</b> Arrange the following stages of bacterial binary fission in the correct chronological order and name the structure that coordinates cytokinesis:<br>(a) Formation of the FtsZ ring and the division septum at the cell centre<br>(b) Bidirectional replication of the circular chromosome<br>(c) Separation into two daughter cells<br>(d) Elongation of the cell, carrying the daughter chromosomes to opposite poles',
        steps: [
          '<b>Reasoning.</b> Work from the chromosome outward to the whole cell. Step 1: the DNA must be duplicated before it can be shared: (b) replication. Step 2: as the cell elongates the two copies are carried to opposite poles: (d). Step 3: the cell can now divide: (a) the FtsZ ring contracts and the septum forms. Step 4: the septum completes and the daughters separate: (c). The coordinating structure for cytokinesis is the FtsZ ring (a tubulin-like protein that forms a contractile ring at the division site).',
        ],
        ans: '(b) → (d) → (a) → (c); the FtsZ ring coordinates cytokinesis in bacteria.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with distractor analysis.</b> During cytokinesis in a plant cell, the new cell wall material is deposited by:<br>(a) The plasma membrane pinching inward<br>(b) Golgi-derived vesicles fusing at the cell plate<br>(c) The formation of a contractile ring of actin<br>(d) The expansion of the existing cell wall',
        steps: [
          'Plant cytokinesis involves the cell plate, formed when Golgi vesicles carrying cell wall precursors (pectin, hemicellulose) and membrane material are transported along microtubules to the equatorial plane, where they fuse and deposit their contents. (a) describes cleavage furrow cytokinesis in animal cells. (c) describes the actin-myosin contractile ring of animal cytokinesis. (d) is wrong: the new wall is deposited de novo at the cell plate, not by expansion of the old wall.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe the four stages of binary fission in a bacterium.',
            a: '(i) DNA replication: the single circular chromosome replicates bidirectionally from oriC, each copy remaining attached to the plasma membrane. (ii) Cell elongation and segregation: new membrane and peptidoglycan are inserted, the cell lengthens and the two daughter chromosomes are pushed to opposite poles. (iii) Septum formation: the FtsZ ring contracts at the cell centre and a septum forms, with new wall material deposited. (iv) Separation: the septum completes and the cell divides into two genetically identical daughters.',
          },
          {
            q: '[CUET] Name the three checkpoints in the eukaryotic cell cycle and state the primary function of any one.',
            a: 'G<sub>1</sub>/S checkpoint (restriction point): commits the cell to DNA synthesis; checks for adequate size, nutrients, growth factors and intact DNA. G<sub>2</sub>/M checkpoint: ensures complete DNA replication and DNA repair before mitosis begins. M (spindle-assembly) checkpoint: ensures all chromosomes are attached to the spindle before anaphase begins. Any one correctly named with its function earns the mark.',
          },
          {
            q: '[NEET] Why is cytokinesis in plant cells achieved by cell plate formation rather than cleavage furrow?',
            a: 'Plant cells have a rigid cell wall composed of cellulose that prevents the membrane from pinching inward. Therefore cytokinesis cannot proceed by a cleavage furrow (the mechanism used by animal cells, which lack a rigid wall). Instead, Golgi-derived vesicles carrying cell wall precursors are transported to the equatorial plane, where they fuse to form the cell plate, a new membrane and cell wall that grows outward to divide the cell.',
          },
          {
            q: '[NEET] Distinguish between cytokinesis in an animal cell and cytokinesis in a plant cell.',
            a: 'Animal cell cytokinesis: actin-myosin contractile ring forms beneath the plasma membrane at the equator; the ring contracts, pinching the membrane inward (cleavage furrow) until the cell is bisected. Plant cell cytokinesis: Golgi vesicles carrying cell wall precursors are targeted to the equatorial plane by phragmoplast microtubules; vesicles fuse to form the cell plate, which grows outward and differentiates into the new cell wall and middle lamella. The critical distinction is contractile ring (animals) vs cell plate (plants).',
          },
          {
            q: '[NEET] What is the role of cyclins and CDKs in cell cycle regulation?',
            a: 'Cyclins are regulatory proteins whose concentration rises and falls in step with the cell cycle; they bind to cyclin-dependent kinases (CDKs), which are catalytically inactive without their cyclin partner. The cyclin-CDK complex phosphorylates target proteins, driving the cell cycle forward past each checkpoint. For example, cyclin E binds CDK2 at the G<sub>1</sub>/S boundary to initiate DNA replication; cyclin A binds CDK2 to drive progression through S phase; cyclin B binds CDK1 at the G<sub>2</sub>/M boundary to trigger mitosis. In the absence of cyclins, CDKs remain inactive; the checkpoint cannot be passed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book's Addendum P) · pp. 520 to 532 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET questions on this chapter commonly follow one of six patterns.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Past NEET papers spread their questions on this chapter across its four topics roughly as follows (indicative shares; they vary from year to year; the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share', 'Most-tested items'],
        rows: [
          [
            '<b>Topic 01</b> – Cell Theory & Envelope',
            '~25 %',
            'Fluid-mosaic model, envelope layer order, gram-stain basis, mesosome functions, bacterial cell-wall chemistry',
          ],
          [
            '<b>Topic 02</b> – Endomembrane System & Organelles',
            '~35 %',
            'Endomembrane membership, SER vs RER, Golgi functions, lysosome “suicidal bag,” leucoplast subtypes, membrane-count classification',
          ],
          [
            '<b>Topic 03</b> – Cytoskeleton, Cilia/Flagella, Nucleus & Chromosomes',
            '~25 %',
            '9+2 vs 9+0 arrays, centriole location (animal only), chromosome centromere types, satellite/SAT chromosome, nucleolus function',
          ],
          [
            '<b>Topic 04</b> – Synthesis & Comparisons',
            '~15 %',
            'Prokaryote vs eukaryote criteria, plant vs animal discriminators, 70S vs 80S ribosomes, inclusion-body membrane status',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means:</b> Topic 02 (the endomembrane system) is the heaviest of the four, roughly a third of the questions on this chapter. Topic 03 and Topic 01 each supply about one-quarter. The synthesis comparisons come up as standalone items rather than as a separate question cluster (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET questions on this chapter commonly follow one of six patterns. Recognising the pattern lets you reach for the right mental tool before you even read the stem.',
      },

      { t: 'p', html: '<b>Archetype 1: The “Correctly Matched / Incorrectly Paired” Statement Set</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>The question lists four or five numbered statements and asks “which is/are correct?” or “which is/are incorrect?” The options are typically “(i) only,” “(i) and (ii),” “all of the above,” etc.<br><b>Approach that cracks it:</b><br>Treat each statement as a true/false binary. Do not read the statements in the order they are printed; glance at the option list first so you know which statements you need to evaluate, then mark each of those true or false on your rough sheet before choosing an option.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Which of the following statements are correct?<br>(i) The endomembrane system includes the plasma membrane, ER, Golgi complex, lysosomes and vacuoles.<br>(ii) ER helps in the transport of substances and in the synthesis of proteins and lipids.<br>(iii) Ribosomes are involved in protein synthesis.<br>(iv) Mitochondria help in oxidative phosphorylation and generation of ATP.<br>Options: (a) (ii), (iii) and (iv); (b) (i) only; (c) (ii) only; (d) (iii) only',
        steps: [
          'Statement (i): <b>False</b>. The endomembrane system is the ER, Golgi complex, lysosomes and vacuoles, working in one coordinated workflow. The plasma membrane is not counted as a member, and neither are mitochondria, chloroplasts or peroxisomes.',
          'Statement (ii): <b>True</b>. The ER carries substances through the cell; the rough ER (with ribosomes) makes proteins and the smooth ER makes lipids.',
          'Statement (iii): <b>True</b>. Ribosomes are the universal site of protein synthesis.',
          'Statement (iv): <b>True</b>. Mitochondria perform oxidative phosphorylation and generate ATP.',
          '<b>Exam insight:</b> The tempting error is statement (i). The plasma membrane is membrane-bound and works alongside these organelles, so it sounds like a member, but membership is defined by the coordinated workflow of the four named compartments, not by membrane alone.',
        ],
        ans: 'Correct statements: (ii), (iii) and (iv) → Option (a).',
      },

      { t: 'p', html: '<b>Archetype 2: The “Not/Except/Incorrect” Single-Statement MCQ</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>A straightforward statement is followed by four options, and the correct answer is the one that is false or the item that does not belong.<br><b>Approach that cracks it:</b><br>Read the stem once, then cover the options and ask yourself: “What do I know is true about this?” Then match the option that contradicts your knowledge. Never assume the first true-looking option is correct: check every one.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Select the incorrect statement about prokaryotic ribosomes.<br>(a) 50S and 30S subunits unite to form 70S ribosomes.<br>(b) Polysome/polyribosome consists of many ribosomes only.<br>(c) Ribosome is the site of protein synthesis.<br>(d) Polysome indicates the synthesis of identical polypeptide in multiple copies.',
        steps: [
          '(a) <b>True</b>: the 50S and 30S subunits make up the 70S ribosome; this is the correct prokaryotic ribosome composition.',
          '(b) <b>False</b>: a polysome (or polyribosome) is a cluster of ribosomes attached to a single mRNA strand, translating it simultaneously. The definition is incomplete without the mRNA reference.',
          '(c) <b>True</b>: ribosomes are the site of protein synthesis in all cells.',
          '(d) <b>True</b>: because all ribosomes on one mRNA read the same codon sequence, they produce identical polypeptide chains.',
          '<b>Exam insight:</b> Option (b) is not entirely wrong: polysomes do consist of many ribosomes, but leaving out the mRNA makes the definition incomplete. In “incorrect statement” questions, an option can fail by omission, not only by saying something false.',
        ],
        ans: 'Option (b).',
      },

      { t: 'p', html: '<b>Archetype 3: The Membrane-Count / Organelle-Classification Grid</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Four organelles are listed and the question asks which group shares the same membrane count, or which is the “odd one out,” or which set is “correctly grouped.”<br><b>Approach that cracks it:</b><br>Memorise the three-tier membrane classification before the exam:',
      },
      {
        t: 'table',
        title: null,
        head: ['Membrane count', 'Organelles'],
        rows: [
          ['<b>None</b>', 'Ribosome, centriole, cytoskeleton filaments, cell wall'],
          ['<b>Single</b>', 'ER, Golgi, lysosome, vacuole (tonoplast), microbody (peroxisome)'],
          ['<b>Double</b>', 'Mitochondrion, chloroplast, nucleus'],
        ],
      },
      {
        t: 'p',
        html: 'Run any option set through this grid. If three items share a count and one does not, that is the odd one out.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Which set is correctly grouped as “double-membraned”?<br>(a) Mitochondrion, chloroplast, nucleus<br>(b) Lysosome, Golgi, vacuole<br>(c) Ribosome, centriole, cell wall<br>(d) ER, microbody, plasma membrane',
        steps: [
          '(a): All three are double-membraned → <b>Correct.</b>',
          '(b): All three are single-membraned → wrong grouping.',
          '(c): All three are non-membranous → wrong grouping.',
          '(d): All three are single-membraned → wrong grouping.',
          '<b>Exam insight:</b> Each wrong option is internally consistent (every item has the same count), so you cannot eliminate by spotting a mixed set. Only precise recall of the membrane-count tier for each organelle settles it.',
        ],
        ans: 'Option (a).',
      },

      { t: 'p', html: '<b>Archetype 4: The Assertion–Reason (A–R) Item</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>An Assertion (A) and a Reason (R) are printed separately, followed by four options:<br>• (a) Both A and R are true, and R correctly explains A.<br>• (b) Both A and R are true, but R does not explain A.<br>• (c) A is true, R is false.<br>• (d) A is false, R is true.<br><b>Approach that cracks it:</b><br><b>Never evaluate R first.</b> Evaluate A independently. Ask: “Is A actually true?” Then evaluate R independently. Only if both are true do you ask whether R explains A. A single true R never rescues a false A.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Assertion (A): A plant cell placed in pure water does not burst. Reason (R): The cell wall of a plant cell is rigid and prevents the cell from bursting due to high turgor pressure.<br>Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          'A: <b>True</b>: a plant cell in pure water undergoes endosmosis, swells, develops turgor pressure, but the rigid cell wall prevents lysis.',
          'R: <b>True</b>: the cell wall is indeed the structure that resists turgor pressure and prevents bursting.',
          'Does R explain A? Yes: the rigid wall resisting turgor pressure is precisely why the cell does not burst.',
        ],
        ans: 'Option (a).',
      },
      {
        t: 'p',
        html: '<b>Variant trap (A false, R true):</b><br>Assertion (A): <i>Mycoplasma</i> does not lyse even in very dilute solution because it is the smallest cell. Reason (R): <i>Mycoplasma</i> is the smallest known cell.<br>• R is true; A is <b>false</b>: <i>Mycoplasma</i> lacks a cell wall and is osmotically fragile; it tends to burst in hypotonic solution. The smallest-cell reason is unrelated to lysis resistance.<br>Answer: <b>Option (d)</b>: A is false, R is true.',
      },

      { t: 'p', html: '<b>Archetype 5: The Match-the-Column (Organelle / Function / Scientist)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Column I lists items (organelles, scientists, chromosome types, cell structures); Column II lists descriptors. The task is to match each correctly.<br><b>Approach that cracks it:</b><br>Draw up the pairs you are certain about first. For the remainder, eliminate by checking against known facts. Watch for:<br>• <b>Inverted pairs:</b> e.g., listing “SER: glycoprotein formation” when SER’s hallmark is lipid synthesis.<br>• <b>Closely similar distractors:</b> e.g., amyloplast vs aleuroplast: both leucoplasts, different stored substances.<br>• <b>Incomplete definitions:</b> e.g., “ribosome: site of protein synthesis” (correct) but also “ribosome: made of rRNA and protein” (also correct); the question will have only one exact match.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Match Column-I with Column-II:<br><br>Column-I | Column-II<br>A. Tonoplast | I. Contains digestive enzymes<br>B. Contractile vacuole | II. Stores metabolic gases<br>C. Food vacuole | III. Excretion<br>D. Gas vacuole | IV. Transport of ions in plants<br><br>Options: (a) A–IV, B–III, C–I, D–II; (b) A–II, B–III, C–IV, D–I; (c) A–IV, B–II, C–III, D–I; (d) A–I, B–III, C–II, D–IV',
        steps: [
          'Tonoplast = membrane of the vacuole; its primary listed role in matching questions is ion/nutrient transport in plants → <b>IV</b>.',
          'Contractile vacuole = osmoregulation and excretion in protists → <b>III</b>.',
          'Food vacuole = formed by phagocytosis, contains digestive enzymes → <b>I</b>.',
          'Gas vacuole (found in some prokaryotes) = gas-filled vesicles that give buoyancy → <b>II</b> (the column’s “Stores metabolic gases”).',
          '<b>Exam insight:</b> Every wrong option breaks at least one pairing. Option (b) gives the food vacuole “transport of ions” and the gas vacuole “digestive enzymes”; (c) gives the contractile vacuole “stores gases” and the food vacuole “excretion”; (d) gives the tonoplast “digestive enzymes” and the food vacuole “stores gases”. Only (a) matches all four.',
        ],
        ans: 'Correct matching: Option (a).',
      },

      { t: 'p', html: '<b>Archetype 6: The Distractor-Pair (“Both options look right”)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b><br>Two very similar terms are placed as opposite options (amyloplast vs aleuroplast, slime layer vs capsule, cristae vs grana) and the question asks which is correct or which function belongs to which.<br><b>Approach that cracks it:</b><br>Memorise the two members of every trap-pair together, noting which half is correct:',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap pair', 'Correct half', 'Wrong half'],
        rows: [
          ['Amyloplast', 'Stores <b>starch</b> (amylum = starch)', 'Does not store protein'],
          ['Aleuroplast', 'Stores <b>protein</b>', 'Does not store oil'],
          ['Elaioplast', 'Stores <b>oils/fats</b>', 'Does not store starch'],
          ['Slime layer', 'Loose glycocalyx', 'Capsule = thick/tough'],
          ['Cristae', 'Inner mitochondrial membrane folds', 'Belong to mitochondrion, not chloroplast'],
          ['Grana', 'Stacks of thylakoids in chloroplast', 'Belong to chloroplast, not mitochondrion'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Q.</b> Which leucoplast is correctly matched with what it stores?<br>(a) Amyloplast – protein<br>(b) Elaioplast – starch<br>(c) Aleuroplast – protein<br>(d) Chromoplast – oil',
        steps: [
          '(a): Amyloplast stores <b>starch</b>, not protein → wrong.',
          '(b): Elaioplast stores <b>oils</b>, not starch → wrong.',
          '(c): Aleuroplast (proteinoplast) stores <b>protein</b> → <b>correct</b>.',
          '(d): Chromoplast stores <b>pigments</b>; it is not even a leucoplast; oil belongs to elaioplast → wrong.',
        ],
        ans: 'Option (c).',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'These are the confusions that Chapter-8 questions most often rely on. Each trap has a name you can carry into the exam so you spot it on sight.',
      },
      {
        t: 'p',
        html: '<b>Trap 1: “Glycocalyx outermost, wall middle, membrane innermost”</b><br>A common error in this chapter. The question will describe the plasma membrane as the outermost layer of the bacterial envelope, or ask which structure lies outside the cell wall and give “plasma membrane” as a tempting option. <b>Anchor it: the plasma membrane is the innermost layer of the envelope; the layers outside it are the cell wall and the glycocalyx.</b> (A Gram-negative wall also carries an outer membrane, but the plasma membrane is still the innermost layer.)',
      },
      {
        t: 'p',
        html: '<b>Trap 2: “Membrane-bound = endomembrane system”</b><br>Mitochondria, chloroplasts and peroxisomes are all membrane-bound. They are also all excluded from the endomembrane system. The membership test is <b>coordinated function</b>, not membrane presence. The mnemonic: <b>MCP are out</b> (Mitochondria, Chloroplasts, Peroxisomes).',
      },
      {
        t: 'p',
        html: '<b>Trap 3: 70S / 80S reversal</b><br>The eukaryotic cytoplasm has <b>80S</b> ribosomes; prokaryotes and the organelles inside eukaryotic cells (mitochondria, chloroplasts) have <b>70S</b>. A classic trap pairs “70S ribosome” with “eukaryotic cytoplasm” as the correct answer: it is not. Memorise the split: small cells and organelle tenants share the smaller ribosome. (NCERT gives 70S for mitochondria; animal mitochondrial ribosomes are in fact smaller, about 55S.)',
      },
      {
        t: 'p',
        html: '<b>Trap 4: Amyloplast = protein</b><br>Amyloplasts store <b>starch</b> (think amylum). Proteins go to <b>aleuroplasts</b> (also called proteinoplasts). It is a common trap in leucoplast classification questions.',
      },
      {
        t: 'p',
        html: '<b>Trap 5: Cristae belong to mitochondrion; Grana belong to chloroplast</b><br>These are the two “folding” structures of the cell’s power organelles, and students routinely wire them to the wrong organelle. Draw the cross-section diagrams once: mitochondrion folds inward = cristae; chloroplast stacks flat discs = grana/thylakoids.',
      },
      {
        t: 'p',
        html: '<b>Trap 6: Bacterial flagellum ≠ Eukaryotic flagellum</b><br>Despite sharing the word “flagellum,” the bacterial version is a protein filament with a hook and basal body and <b>no 9+2 axoneme</b>; the eukaryotic version has the <b>9+2 microtubule array</b> covered by the plasma membrane. Questions pairing “bacterial flagellum” with “9+2” are designed to be wrong.',
      },
      {
        t: 'p',
        html: '<b>Trap 7: Nucleolus ≠ Nucleoplasm</b><br>rRNA synthesis and ribosome assembly occur in the <b>nucleolus</b> (the dense, non-membranous body). The nucleoplasm is the fluid matrix surrounding the nucleolus. Swapping these is a persistent trap in nucleus questions.',
      },
      {
        t: 'p',
        html: '<b>Trap 8: Contractile vacuole function</b><br>The contractile vacuole of <i>Amoeba</i> and other protists is correctly described as performing <b>osmoregulation and excretion</b>: pumping out excess water and waste. Describing it as performing “digestion” or “respiration” is wrong.',
      },
      {
        t: 'p',
        html: '<b>Trap 9: Ribosome size includes the correct subunits</b><br>A 70S ribosome (prokaryotes and organelles) has a 50S and a 30S subunit; an 80S ribosome (eukaryotic cytoplasm) has a 60S and a 40S subunit. (S values are sedimentation rates and do not add up.) Any option listing the wrong subunit pairing for a given ribosome type is a distractor.',
      },
      {
        t: 'p',
        html: '<b>Trap 10: “Centrioles in plant cells” / “All respiration needs mitochondria”</b><br>Higher plants lack centrioles and build spindles without them. Bacteria respire aerobically on the plasma membrane and its infoldings (NCERT’s mesosome), with no mitochondria at all. Both corrections are true facts that NEET tests as traps when students project animal or eukaryotic biology onto plants or bacteria.',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'Questions are arranged in ascending difficulty. Answers have been checked against NCERT where NCERT covers the point.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct Recall] Who proposed that “cells arise only from pre-existing cells”?<br>(a) Robert Brown<br>(b) Rudolf Virchow<br>(c) Theodor Schwann<br>(d) Matthias Schleiden',
            a: '<b>(b)</b>: Virchow’s Omnis cellula e cellula (1855) is the second point of the modern cell theory, completing what Schleiden and Schwann left unresolved.',
          },
          {
            q: '[Level 1: Direct Recall] Which organelle is non-membranous?<br>(a) Lysosome<br>(b) Ribosome<br>(c) Peroxisome<br>(d) Vacuole',
            a: '<b>(b)</b>: Ribosomes are granular particles of rRNA and protein with no membrane covering. Lysosomes, peroxisomes and vacuoles are all single-membrane-bound organelles.',
          },
          {
            q: '[Level 1: Direct Recall] The membrane of erythrocytes has approximately what percentage of proteins and lipids?<br>(a) 42% protein, 50% lipid<br>(b) 52% protein, 40% lipid<br>(c) 50% protein, 50% lipid<br>(d) 60% protein, 40% lipid',
            a: '<b>(b)</b>: Human RBC membrane composition is approximately 52% protein and 40% lipid (the remainder being carbohydrates). This is a standard factual recall from membrane chemistry.',
          },
          {
            q: '[Level 2: Single-Concept Application] Which of the following is the correct layer order in a bacterial cell, from outside inward?<br>(a) Cell wall → Glycocalyx → Plasma membrane<br>(b) Glycocalyx → Cell wall → Plasma membrane<br>(c) Plasma membrane → Cell wall → Glycocalyx<br>(d) Glycocalyx → Plasma membrane → Cell wall',
            a: '<b>(b)</b>: The three-layer envelope in correct order: Glycocalyx (outermost, when present) → Cell wall (middle, of peptidoglycan) → Plasma membrane (innermost). Option (a) reverses glycocalyx and cell wall; (c) and (d) place the plasma membrane outside.',
          },
          {
            q: '[Level 2: Single-Concept Application] Which organelle is correctly described as the “suicidal bag” of the cell?<br>(a) Mitochondrion<br>(b) Ribosome<br>(c) Lysosome<br>(d) Golgi apparatus',
            a: '<b>(c)</b>: Lysosomes contain hydrolytic enzymes (hydrolases) active at acidic pH. When the cell is damaged, lysosomal rupture releases these enzymes, digesting the cell from within, hence “suicidal bags.”',
          },
          {
            q: '[Level 2: Single-Concept Application] The 9 + 2 microtubular arrangement is found in:<br>(a) Centriole<br>(b) Axoneme of cilia and flagella<br>(c) Both centriole and axoneme<br>(d) Bacterial flagellum',
            a: '<b>(b)</b>: The axoneme (core of eukaryotic cilia and flagella) has 9 peripheral doublets + 2 central singlets = 9+2. The centriole has 9 peripheral triplets with no central tubules = 9+0. The bacterial flagellum is a protein filament with no microtubule structure at all.',
          },
          {
            q: '[Level 3: Two-Concept Integration] Which of the following is not part of the endomembrane system?<br>(a) Golgi complex<br>(b) Peroxisome<br>(c) Vacuole<br>(d) Lysosome',
            a: '<b>(b)</b>: Peroxisomes are membrane-bound microbodies but their functions (fatty-acid β-oxidation, detoxification) are not coordinated with the ER → Golgi → lysosome → vacuole workflow, so they are excluded. Golgi, vacuole and lysosome are all core members.',
          },
          {
            q: '[Level 3: Two-Concept Integration] Assertion (A): A bacterial cell can carry out aerobic respiration without possessing mitochondria.<br>Reason (R): In prokaryotes, respiratory functions are associated with the mesosome and plasma membrane.<br>(a) Both A and R are true, and R correctly explains A.<br>(b) Both A and R are true, but R does not explain A.<br>(c) A is true, R is false.<br>(d) A is false, R is true.',
            a: '<b>(a)</b>: Both statements are true. In NCERT’s account the mesosome, an infolding of the plasma membrane, carries the respiratory functions in bacteria, making mitochondria unnecessary for aerobic respiration in prokaryotes. R fully explains how A is possible.',
          },
          {
            q: '[Level 3: Two-Concept Integration] Grana and cristae are, respectively, structures found in:<br>(a) Mitochondrion and chloroplast<br>(b) Chloroplast and mitochondrion<br>(c) Both in chloroplast<br>(d) Both in mitochondrion',
            a: '<b>(b)</b>: Grana are stacks of thylakoid discs inside chloroplasts (the site of light reactions). Cristae are infoldings of the inner mitochondrial membrane (housing the ATP synthase complexes).',
          },
          {
            q: '[Level 4: Multi-Statement / Comparison] Which of the following statements are correct? (i) The shape of cells may vary with the function they perform. (ii) Human RBC is about 7.0 μm in diameter. (iii) Cytoplasm is the main area of cellular activities. (iv) Various chemical reactions occur in cytoplasm to keep the cell in the living state.<br>(a) Only statements (i) and (ii)<br>(b) All four statements, (i) to (iv)<br>(c) Only statement (iv)<br>(d) None of the above',
            a: '<b>(b)</b>: All four statements are correct. Cell shape correlates with function (e.g., RBCs are biconcave for gas exchange); the human RBC is about 7.0 μm in diameter; cytoplasm is the main site of cellular activities, and the many chemical reactions that go on in it keep the cell in the living state.',
          },
          {
            q: '[Level 4: Multi-Statement / Comparison] Select the incorrect statement regarding the fluid-mosaic model.<br>(a) Proteins in cell membranes can travel within the lipid bilayer laterally.<br>(b) Proteins can undergo flip-flop movements in the lipid bilayer.<br>(c) Proteins can remain confined within certain domains of the membrane.<br>(d) Many proteins remain completely embedded within the lipid bilayer.',
            a: '<b>(b)</b>: Lipids can occasionally flip-flop across the bilayer (transverse diffusion). Proteins essentially do not flip-flop; they move laterally within the same leaflet. Statement (b) incorrectly attributes flip-flop to proteins, which is the classic distractor for this model.',
          },
          {
            q: '[Level 4: Multi-Statement / Comparison] Match the leucoplast types with their stored substances:<br>Leucoplast | Substance<br>A. Amyloplast | I. Protein<br>B. Elaioplast | II. Starch<br>C. Aleuroplast | III. Oil/fat<br>(a) A–II; B–III; C–I<br>(b) A–I; B–II; C–III<br>(c) A–III; B–I; C–II<br>(d) A–II; B–I; C–III',
            a: '<b>(a)</b>: Amyloplast stores starch (amylum = starch); Elaioplast stores oils/fats; Aleuroplast stores protein. Each wrong option mismatches at least two pairs: (b) gives protein to the amyloplast, starch to the elaioplast and oil to the aleuroplast; (c) gives oil, protein and starch to them in turn; (d) gets the amyloplast right but swaps the other two.',
          },
        ],
      },

      { t: 'part', title: 'Three Habits That Pay Off' },
      {
        t: 'p',
        html: '1. <b>Make the exclusion list a reflex.</b> Mitochondria, chloroplasts and peroxisomes are membrane-bound but are not part of the endomembrane system; questions keep setting them against the true members (ER, Golgi, lysosomes, vacuoles).<br>2. <b>Sort by membrane count (0, 1 or 2).</b> The three-tier table is the quickest way to handle any “odd one out” or “correctly grouped” question.<br>3. <b>Keep the two flagella apart.</b> The bacterial flagellum is a protein filament with a hook and basal body and has no 9+2 axoneme; the eukaryotic flagellum has the 9+2 microtubule array covered by the plasma membrane.',
      },
    ],
  },
];
