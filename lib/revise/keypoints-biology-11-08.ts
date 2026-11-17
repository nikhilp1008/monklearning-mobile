/**
 * KEY POINTS for Biology Class 11, Chapter 8 (Cell: The Unit of Life).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results, and F (What NEET Actually Asks) has one of Remember and one of
 * Common mistakes. Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to E are 4 to 8
 * and F (What NEET Actually Asks, the book's Addendum P) is 9. No point refers
 * to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms and
 * Cheat sheet. Common mistakes: its Common student pitfalls. Exam shortcuts:
 * its Pro-Tip, with a worked example or practice answer. Topic 04, the
 * synthesis, is written in the same five-point shape from its own parts (the
 * comparison tables, the pitfalls across the chapter and its Pro-Tip).
 * Additional topics: the addenda's methods, worked examples and practice
 * answers; F: its distribution and its traps.
 *
 * `say`: none. The cheat sheet of Topics 01, 02, 03 and 04 prints no memory
 * aids (its `aids` list is empty), so every `say` is null and the chapter has
 * no memory lines; the book's mnemonics ("MCP are out", "W-P-V", B-H-F,
 * "Capsule is Compact") sit in the running text and are used inside the
 * answers, not as memory lines. The Additional topics have no cheat sheet.
 *
 * Where the book’s claim is looser or wrong, the point is written so that it
 * stays true:
 * - ribosomes are not called "the only organelle without a membrane": the
 *   membrane-count tiers are given as the book's table has them, with
 *   ribosomes and centrioles (and the cytoskeleton filaments and the cell
 *   wall) in the "none" tier; nor "the one organelle shared by prokaryotes
 *   and eukaryotes": ribosomes occur in both, and the 70S and 80S sizes are
 *   what differ;
 * - Svedberg values do not add: the 70S ribosome is said to have a 50S and a
 *   30S subunit (the 80S a 60S and a 40S), and "50S + 30S = 70S" is not
 *   repeated; 70S is given for prokaryotes and chloroplasts, and for
 *   mitochondria as NCERT gives it (the point notes that animal
 *   mitochondrial ribosomes are smaller, about 55S);
 * - the mesosome is given as the plasma-membrane infolding the book describes,
 *   with the functions NCERT lists; respiration is not asserted as its
 *   established role (it is widely regarded as a preparation artefact), so
 *   "bacteria respire without mitochondria" is put as respiration on the
 *   plasma membrane and its infoldings;
 * - plasmodesmata are the plant-tissue channels (no "only junction of plant
 *   cells", no "plant only"); glyoxysomes are the peroxisomes of germinating
 *   fatty seeds, with no claim that the glyoxylate cycle is unique to them or
 *   that they are found in "plant cells only";
 * - "every cell is a bag of cytoplasm with ribosomes and genetic material" is
 *   not repeated: the mature mammalian red blood cell and the phloem
 *   sieve-tube element are the book's own enucleate cells, and they are still
 *   eukaryotic cells; "the one criterion that never fails" becomes "the
 *   reliable discriminator";
 * - "the plasma membrane is always the innermost boundary" is scoped to the
 *   book's three-layer bacterial envelope (a Gram-negative wall carries an
 *   outer membrane outside its thin peptidoglycan);
 * - the endosymbiotic evidence is not called "all confirmed", and gene
 *   transfer is said to explain the reduced mitochondrial genome only;
 * - the Mycoplasma and wall rows: a bacterial wall is peptidoglycan and
 *   Mycoplasma has none; the eukaryotic wall row carries cellulose (plants,
 *   with algal walls different), chitin (fungi) and none (animals);
 * - centrioles: found in animal cells; higher plants build the spindle
 *   without them, and the book notes that some lower plant cells (motile
 *   gametes of certain algae and bryophytes) have them;
 * - a satellite (SAT) chromosome is "associated with nucleolus formation";
 *   the nucleolus organiser region (rDNA) is where the nucleolus forms;
 * - superlatives ("the single highest-yield topic", "tested every year",
 *   "the single most repeated trap") are not repeated; exam shares (F) are
 *   described as the book's estimate from past papers, not official figures,
 *   no year is named and no point says "every session".
 *
 * A few points are narrower than the book's sentence, in our words: the
 * mitochondrial size line (0.5–1.0 μm) is not used, and the Leeuwenhoek date
 * is not used; the book's "(0 / 1 / 2)" is written with commas and "or".
 *
 * Markup is the chapter’s own: <i> for scientific names (the whole binomial in
 * one <i>; names above the genus upright), <sub> and <sup> for formulas, no
 * fraction and no em dash. A value is kept with its unit, and a range with an
 * en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Cell Theory & the Cell Envelope ──
  // pp. 471–472, 480
  {
    topic: 0,
    kind: 'remember',
    q: 'Who built the cell theory, and what are its two points?',
    a: 'It was a relay. Robert Hooke (1665) saw dead cork cell walls and coined “cell”; Robert Brown (1831) discovered the nucleus; Matthias Schleiden (1838) said all plants are made of cells and Theodor Schwann (1839) said the same of animals, and together they proposed the cell theory. Rudolf Virchow (1855) added Omnis cellula e cellula, every cell from a pre-existing cell. Modern cell theory: (i) all living organisms are made of cells and products of cells; (ii) all cells arise from pre-existing cells. The standing exception is the virus, which is acellular',
    why: 'Schleiden and Schwann said what organisms are made of; only Virchow answered where new cells come from, so “how new cells arise” is what the first version could not explain.',
    say: null,
  },
  // pp. 472–475, 479–480
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the bacterial cell envelope, from outside in, and what does each layer do?',
    a: 'Most bacteria carry a tightly bound, three-layered envelope that acts as one protective unit: the glycocalyx outermost, then the cell wall, then the plasma membrane. The glycocalyx is a loose slime layer or, when thick and tough, a capsule. The cell wall is peptidoglycan (murein), not cellulose; it gives shape, prevents bursting, and its response to Gram staining sorts bacteria into Gram-positive (retain the stain) and Gram-negative (do not). The plasma membrane is selectively permeable and governs transport. <i>Mycoplasma</i>, about 0.3 μm and the smallest known cell, has no cell wall. The mesosome is an infolding of the plasma membrane that raises its surface area and enzyme content',
    why: 'Other sizes for elimination: bacteria 3–5 μm, a typical eukaryotic cell 10–20 μm, a human red blood cell about 7 μm; the ostrich egg is the largest isolated single cell and the nerve cell the longest.',
    say: null,
  },
  // pp. 475–476, 479
  {
    topic: 0,
    kind: 'mixup',
    q: 'In the fluid-mosaic model, which can flip-flop across the bilayer, lipids or proteins?',
    a: 'Lipids can occasionally flip across the bilayer; proteins essentially do not. Both move freely sideways (laterally), which is the “fluid” part and underpins membrane growth, junction formation, secretion, endocytosis and cell division. The lipids form a bilayer with polar heads out and hydrophobic tails in; integral proteins are buried to varying depths and peripheral proteins rest on the surface, and the membrane is asymmetric',
    why: 'Transport follows the molecule: small non-polar molecules cross by simple diffusion, polar molecules need carrier proteins (facilitated, still down the gradient, no ATP), and movement against the gradient is active transport and needs ATP.',
    say: null,
  },
  // p. 479
  {
    topic: 0,
    kind: 'mistake',
    q: 'Which envelope slips cost marks: the layer order, slime and capsule, the wall chemistry?',
    a: 'Reversing the order: in the book’s three-layer bacterial envelope the plasma membrane is the innermost, living boundary, and the wall and glycocalyx are added outside it. Swapping the glycocalyx forms: loose is slime, thick and tough is capsule (Capsule is Compact). Calling the bacterial wall cellulose: that is the plant wall; the bacterial wall is peptidoglycan. And an assertion-reason item: a true Reason does not make the Assertion true, so test each clause alone',
    why: 'Anchor it: the plasma membrane is the innermost layer of the envelope; the layers outside it are the cell wall and the glycocalyx. (A Gram-negative wall also carries an outer membrane, but the plasma membrane is still the innermost layer.)',
    say: null,
  },
  // pp. 478–479
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you answer an envelope MCQ before reading the options?',
    a: 'Sketch a three-ring target the moment you read the stem: outer ring glycocalyx, middle ring cell wall, bull’s-eye plasma membrane. An envelope question is then just “which ring?”. The same habit settles the worked example where the wall lies between the glycocalyx and the plasma membrane, and the one where Gram staining is traced to the cell wall, not the membrane',
    why: 'In the <i>Mycoplasma</i> assertion-reason item the Reason is true (smallest known cell) but the Assertion is false: with no wall it is osmotically fragile and tends to burst in a hypotonic medium.',
    say: null,
  },

  // ── Topic 02 · The Endomembrane System & Cell Organelles ──
  // pp. 481–485, 489
  {
    topic: 1,
    kind: 'remember',
    q: 'What makes up the endomembrane system, and what does each member do?',
    a: 'Four organelles whose functions are coordinated as one workflow: the endoplasmic reticulum, the Golgi apparatus, lysosomes and vacuoles. Rough ER carries ribosomes and makes protein for export; smooth ER lacks ribosomes and makes lipids. Vesicles carry the cargo to the Golgi, whose cis face (forming) faces the ER and whose trans face (maturing) faces away; there proteins and lipids are modified, glycoproteins and glycolipids are formed, and the product is sorted into secretory vesicles. Lysosomes are single-membrane sacs of hydrolytic enzymes working at acidic pH, the “suicidal bags”. Vacuoles store; the plant vacuole’s membrane is the tonoplast, the contractile vacuole handles osmoregulation and excretion, and gas vacuoles give buoyancy',
    why: 'Path of a secretory protein: RER, then a vesicle, then the Golgi, then a secretory vesicle, then the plasma membrane and out.',
    say: null,
  },
  // pp. 483–486, 489
  {
    topic: 1,
    kind: 'remember',
    q: 'Why are mitochondria and chloroplasts called semi-autonomous, and how are they built?',
    a: 'Each carries its own circular DNA, a few RNAs and its own ribosomes, and divides by fission, so it makes some of its own proteins; it still depends on the nucleus for most of them, so “semi-”, never fully independent. A mitochondrion has two membranes: a smooth outer one and an inner one folded into cristae, around a matrix; it is the site of aerobic respiration, the “power house”. A chloroplast has a double membrane around the stroma, in which thylakoids stack into grana joined by stromal lamellae; it carries out photosynthesis. Plastids occur in plant cells and euglenoids',
    why: 'Plastid types: chromoplasts hold carotenoid pigments; leucoplasts are colourless stores (amyloplast starch, elaioplast oils and fats, aleuroplast or proteinoplast protein).',
    say: null,
  },
  // pp. 486, 488–489
  {
    topic: 1,
    kind: 'mixup',
    q: 'Cristae or grana, and amyloplast, elaioplast or aleuroplast: which belongs where?',
    a: 'Cristae are the folds of the inner mitochondrial membrane; grana are stacks of thylakoids in the chloroplast. Amyloplasts store starch (amylum = starch), elaioplasts store oils and fats, aleuroplasts (proteinoplasts) store protein, and chromoplasts hold pigment and are not leucoplasts at all',
    why: 'The headline trap is amyloplast with protein: wrong, protein goes to the aleuroplast.',
    say: null,
  },
  // pp. 484–485, 488–489
  {
    topic: 1,
    kind: 'mistake',
    q: 'What are the ribosome facts, and which way round do the sizes go?',
    a: 'Ribosomes are granular particles of rRNA and protein with no membrane, found free in the cytosol or bound to the rough ER, and they are the site of protein synthesis. They occur in prokaryotes and eukaryotes alike, and the sizes differ: 70S in prokaryotes and in the plastids, 80S in the eukaryotic cytoplasm; the book and NCERT give 70S for mitochondria too (animal mitochondrial ribosomes are smaller, about 55S). The 70S ribosome has a 50S and a 30S subunit, the 80S a 60S and a 40S. Reversing the two sizes is the classic trap: “eukaryotic cytoplasm, 70S” is wrong',
    why: 'Free ribosomes tend to make proteins that stay in the cytosol; ribosomes bound to the RER make proteins for secretion or for insertion into membranes.',
    say: null,
  },
  // pp. 482–483, 488–489
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Which organelle is not in the endomembrane system, and how do you count membranes fast?',
    a: 'Run the exclusion list first: Mitochondria, Chloroplasts, Peroxisomes (“MCP are out”). They are membrane-bound, but membership needs coordinated function, not a membrane alone. For membrane-count questions use the tiers: none for ribosomes and centrioles; single for ER, Golgi, lysosomes, vacuoles and microbodies; double for mitochondria, chloroplasts and the nucleus',
    why: 'Microbodies (peroxisomes, glyoxysomes) are tiny single-membrane vesicles of enzymes that run oxygen-consuming reactions on fatty acids and by-products, but they are not in the endomembrane system.',
    say: null,
  },

  // ── Topic 03 · Cytoskeleton, Cilia & Flagella, Nucleus & Chromosomes ──
  // pp. 490–491, 493–494, 497–498
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the cytoskeleton, cilia, flagella and centrioles, and how are they built?',
    a: 'The cytoskeleton is a protein network of microtubules (tubulin) and microfilaments (actin), with intermediate filaments as a third class; it gives support and shape, anchors organelles, drives cytoplasmic streaming and supplies the spindle fibres. Cilia and flagella are surface outgrowths sheathed in plasma membrane and cored by an axoneme with a 9 + 2 plan: nine peripheral doublets plus two central microtubules in a central sheath, joined by radial spokes, with arms that supply the sliding force. Both grow from a basal body, which is a centriole. Cilia are many and short, and move the cell or sweep the medium; flagella are few and long, and drive locomotion. A centriole is a hollow cylinder of nine peripheral triplets with no central tubule (9 + 0), non-membranous; two lie at right angles in the centrosome of animal cells',
    why: 'Cilia and flagella differ in number and length, not in design: the same 9 + 2 core.',
    say: null,
  },
  // pp. 491–495, 497–498
  {
    topic: 2,
    kind: 'remember',
    q: 'What does the nucleus contain, and how are chromosomes classified?',
    a: 'The nuclear envelope is two membranes with a perinuclear space, the outer continuous with the ER, and it is perforated by nuclear pores that regulate traffic between nucleus and cytoplasm. Inside are the nucleoplasm, the non-membranous nucleolus (rRNA synthesis and ribosome assembly) and chromatin, DNA wound on histone proteins. A chromosome has a centromere (primary constriction) with a kinetochore, and two sister chromatids; by centromere position it is metacentric (middle, equal arms), sub-metacentric (slightly off-centre), acrocentric (near one end) or telocentric (terminal). A secondary constriction cuts off a satellite, giving a SAT chromosome, associated with nucleolus formation',
    why: 'A few mature cells lose the nucleus, the mammalian red blood cell and the phloem sieve-tube element; some cells, such as striated muscle, have many nuclei.',
    say: null,
  },
  // pp. 493–494, 497–498
  {
    topic: 2,
    kind: 'mixup',
    q: 'Nucleolus, nucleoplasm or nucleoid: which is which, and where is rRNA made?',
    a: 'rRNA is made in the nucleolus, the dense non-membranous body inside the nucleus, which also assembles the ribosomal subunits. The nucleoplasm is the fluid matrix around it, and the nucleoid is the envelope-free region where a prokaryote’s DNA lies. The nuclear envelope is the boundary, and the cytoskeleton is structural and makes no rRNA',
    why: 'The nucleolus is larger and more prominent in cells busy with protein synthesis, because heavy demand for ribosomes means heavy rRNA production.',
    say: null,
  },
  // pp. 490, 493, 497
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is a bacterial flagellum the same as a eukaryotic one, and do plant cells have centrioles?',
    a: 'No to both. The eukaryotic flagellum has the 9 + 2 microtubule axoneme covered by plasma membrane; the bacterial flagellum is a thin protein filament with a hook and a basal body (basal body, hook, filament: B–H–F from base to tip) and has no 9 + 2 core, so the two are analogous in job and different in build. Centrioles and centrosomes are an animal-cell feature: higher plants build the spindle without them, so leave them out of a typical plant cell',
    why: 'In the assertion-reason item both clauses are false: the bacterial and sperm flagella are not structurally identical, and only the eukaryotic one has a membrane-covered 9 + 2 axoneme.',
    say: null,
  },
  // pp. 497–498
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which two number pairs settle most cytoskeleton and nucleus questions?',
    a: 'Carry 9 + 2 = axoneme (cilia and flagella) and 9 + 0 = centriole. Same nine outer, different centre: the centriole has no central pair, the axoneme has two. Then match chromosome shape to centromere position: middle is metacentric, near one end is acrocentric, at the tip is telocentric',
    why: 'A centromere exactly in the middle gives two equal arms, so the answer is metacentric, not sub-metacentric (slightly off-centre).',
    say: null,
  },

  // ── Topic 04 · Chapter Synthesis: Master Comparisons & Quick Revision ──
  // pp. 499–500
  {
    topic: 3,
    kind: 'remember',
    q: 'What separates a prokaryotic cell from a eukaryotic one?',
    a: 'Compartmentalisation. A prokaryote keeps its DNA naked and circular in a nucleoid, with plasmids, and has no nuclear membrane and no membrane-bound organelles; it has 70S ribosomes, a peptidoglycan wall where a wall is present (<i>Mycoplasma</i> has none), a mesosome, inclusion bodies and chromatophores, and divides by binary fission. A eukaryote has a true nucleus with a double envelope and pores, DNA wound on histones in linear chromosomes, 80S cytoplasmic ribosomes, an endomembrane system and a cytoskeleton, a wall of cellulose (plants), chitin (fungi) or none (animals), and divides by mitosis or meiosis',
    why: 'The reliable discriminator is the membrane-bound nucleus and organelles; size and division rate follow from it. Mature red blood cells and sieve-tube elements lose the nucleus but remain eukaryotic cells.',
    say: null,
  },
  // pp. 500–501, 503
  {
    topic: 3,
    kind: 'remember',
    q: 'What does a plant cell add to an animal cell, and which organelles have how many membranes?',
    a: 'Both are eukaryotic, so both have a true nucleus, endomembrane system, mitochondria, ribosomes and cytoskeleton. A plant cell adds the cell wall (cellulose), plastids and a large central vacuole that maintains turgor (W-P-V: Wall, Plastids, Vacuole), and has plasmodesmata and starch as its store; an animal cell has no wall or plastids, keeps the centriole, has more prominent lysosomes, stores glycogen and has a flexible shape. Membranes: none for ribosome, centriole, cytoskeleton and cell wall; one for ER, Golgi, lysosome, vacuole and microbody; two for mitochondrion, chloroplast and nucleus',
    why: 'The plant and animal contrast applies to eukaryotes only; it is meaningless for bacteria.',
    say: null,
  },
  // pp. 499, 503
  {
    topic: 3,
    kind: 'mixup',
    q: 'Which contrast is about the nucleus, and which is about the wall, plastids, vacuole and centriole?',
    a: 'Prokaryote against eukaryote is the question “is the DNA walled off?”: the nucleus and organelles. Plant against animal is “is the whole cell walled off?”: the wall, plastids, central vacuole and centriole. Do not answer one fork’s question with the other fork’s facts',
    why: 'Hold the two forks and every fact in the chapter hangs on one of them.',
    say: null,
  },
  // pp. 499, 502–503
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which exceptions trip students across the chapter: centrioles, respiration and inclusion bodies?',
    a: 'Higher plants lack centrioles (the book notes that some lower plant cells, the motile gametes of certain algae and bryophytes, have them, so keep to the higher-plant convention unless told otherwise). Bacteria have no mitochondria, yet many respire aerobically, with respiratory activity on the plasma membrane and its infoldings. Inclusion bodies and the nucleoid carry no membrane, since only true organelles and the nucleus get membranes, and inclusion bodies are not part of any endomembrane system',
    why: 'The 70S and 80S sizes are the other repeat: 70S in prokaryotes and in the semi-autonomous organelles, 80S in the eukaryotic cytoplasm.',
    say: null,
  },
  // p. 503
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you crack an odd-one-out or correctly-grouped question across the chapter?',
    a: 'Sort the options by membrane count, 0, 1 or 2, first. Each wrong option is usually a set where every item shares a count, so only precise recall of each organelle’s tier settles it: (mitochondrion, chloroplast, nucleus) is the double-membrane set, (lysosome, Golgi, vacuole) is single, and (ribosome, centriole, cell wall) is none',
    why: 'Examiners tend to build the distractors along the membrane axis, so the sort converts a comparison into recall.',
    say: null,
  },

  // ── Additional A · Cell Envelope Chemistry and Membrane Transport ──
  // pp. 504–506
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the chemical basis of Gram staining, and what is peptidoglycan?',
    a: 'Gram-positive walls are thick, multilayered peptidoglycan that traps the crystal violet and iodine complex, so the cells stay purple after the alcohol wash. Gram-negative walls have a thin peptidoglycan layer under an outer membrane of lipopolysaccharide (LPS) and lipoprotein; the alcohol dissolves the LPS, the dye washes out and the counterstain safranin leaves them pink. The reaction is a property of the whole envelope, not of the membrane. Peptidoglycan (murein) is one giant molecule: glycan strands of alternating N-acetyl-glucosamine (NAG) and N-acetyl-muramic acid (NAM), cross-linked by peptide bridges, under turgor from within, which is why penicillin, which blocks its synthesis, lyses growing bacteria',
    why: 'Gram-negative cells resist antibiotics, detergents and bile salts better because of the outer LPS barrier.',
    say: null,
  },
  // pp. 504–507
  {
    topic: 4,
    kind: 'remember',
    q: 'How do the transport modes compare, and what is new in the membrane picture?',
    a: 'Passive diffusion: small non-polar molecules (O<sub>2</sub>, CO<sub>2</sub>, N<sub>2</sub>), down the gradient, no energy. Facilitated transport: polar molecules and ions through a carrier or channel protein (glucose via a GLUT transporter, water via aquaporin), down the gradient, no ATP. Active transport: ions and polar molecules moved against the gradient with ATP, as in the Na<sup>+</sup>/K<sup>+</sup> ATPase pump. Vesicular transport takes ATP too: pinocytosis (fluid and small particles in), phagocytosis (large particles in, forming a phagosome that fuses with a lysosome) and exocytosis (out). New in the bilayer: cholesterol (animal) or phytosterols (plant) between the tails modulate fluidity, and carbohydrate chains on glycolipids and glycoproteins face outward as the glycocalyx’s molecular detail',
    why: 'Cellulose is a plant cell-wall component and is not part of the plasma membrane in the fluid-mosaic model.',
    say: null,
  },

  // ── Additional B · Plastids, Peroxisomes, and the Endosymbiotic Theory ──
  // pp. 507–510
  {
    topic: 5,
    kind: 'remember',
    q: 'How do plastids interconvert, and what do peroxisomes and glyoxysomes do?',
    a: 'All plastids come from a proplastid in meristematic tissue: it becomes a chloroplast in light-exposed photosynthetic tissue, a chromoplast in senescing tissue such as fruits and flowers, or a leucoplast in dark storage tissue. In ripening fruit, chloroplasts themselves turn into chromoplasts. Leucoplasts specialise as amyloplast (starch, as in potato tubers), elaioplast (fats and oils, in oily seeds such as castor) and aleuroplast (protein, in legume seeds). Peroxisomes carry catalase and urate oxidase, break down hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) and oxidise fatty acids. Glyoxysomes are specialised peroxisomes in germinating fatty seeds, carrying the glyoxylate cycle enzymes isocitrate lyase and malate synthase, which let the seed turn stored fat into carbohydrate',
    why: 'Glyoxysomes and peroxisomes share the H<sub>2</sub>O<sub>2</sub> breakdown and the fatty-acid oxidation; the glyoxylate enzymes are what a glyoxysome adds.',
    say: null,
  },
  // pp. 508–510
  {
    topic: 5,
    kind: 'remember',
    q: 'What evidence supports the endosymbiotic origin of mitochondria and chloroplasts?',
    a: 'Lynn Margulis (then Lynn Sagan, 1967) proposed that aerobic prokaryotes (mitochondria) and photosynthetic prokaryotes (chloroplasts) were engulfed by a larger host cell and became permanent partners. The supporting features: own circular, bacterial-type DNA; own 70S ribosomes, sensitive to chloramphenicol; division by binary fission, not by the host’s mitosis; and a double membrane, one from the host and one from the symbiont. The mitochondrial genome is highly reduced: human mitochondrial DNA encodes only 13 proteins, 22 tRNAs and 2 rRNAs, while about 1,500 proteins are encoded by nuclear DNA, which the theory explains by gene transfer from the symbiont to the host nucleus',
    why: 'This is why the organelles are only semi-autonomous: they make some of their own proteins but depend on nuclear genes for most, symbiotic tenants and not fully independent.',
    say: null,
  },

  // ── Additional C · Cell Junctions and Prokaryotic Cell Diversity ──
  // pp. 511–512, 514
  {
    topic: 6,
    kind: 'remember',
    q: 'What do the four cell junctions do, and where do they occur?',
    a: 'Tight junction: transmembrane claudins and occludins fuse adjacent membranes with no intercellular space, in the epithelium of gut and kidney tubules; it seals the paracellular route and keeps cell polarity. Gap junction: connexons (six connexin proteins forming a channel about 1–2 nm wide) let ions, small molecules and signals pass directly between animal cells, as in heart and liver. Desmosome: cadherin-mediated plaques tied to keratin filaments, in tissues under mechanical stress such as skin and cardiac muscle; it gives mechanical attachment. Plasmodesmata: channels through plant cell walls, lined by plasma membrane and sometimes holding a desmotubule of ER; they allow symplastic transport of water, nutrients and signals between plant cells',
    why: 'Desmosomes stick, tight junctions seal, gap junctions connect; plasmodesmata are the plant counterpart of the connecting gap junction, and questions often contrast the animal group with them.',
    say: null,
  },
  // pp. 512–514
  {
    topic: 6,
    kind: 'remember',
    q: 'How do cocci arrange themselves after division, and why do viruses challenge the cell theory?',
    a: 'The arrangement follows the planes of division: one plane, repeated, gives pairs (diplococci) or chains (streptococci); two perpendicular planes give tetrads; three perpendicular planes give cubic packets of eight (<i>Sarcina</i>); several irregular planes give grape-like clusters (staphylococci). In clinical practice <i>Staphylococcus</i> forms clusters, <i>Streptococcus</i> chains and <i>Neisseria</i> diplococci. Viruses are acellular obligate intracellular parasites: they replicate only inside a host cell and do not arise by division of a pre-existing cell, so they sit on the boundary of living and non-living and are usually given as the exception to the cell theory',
    why: 'A wrong option often swaps the plane count: tetrad is two planes and <i>Sarcina</i> three.',
    say: null,
  },

  // ── Additional D · Nucleus, Chromatin, and Chromosome Banding Patterns ──
  // pp. 515–517
  {
    topic: 7,
    kind: 'remember',
    q: 'How do euchromatin and heterochromatin differ, and what do banding and karyotyping show?',
    a: 'Euchromatin is loosely packed, transcriptionally active chromatin that stains pale and shows as light bands; heterochromatin is densely packed, inactive, stains dark and shows as dark bands. Constitutive heterochromatin (centromeres, telomeres) is always condensed; facultative heterochromatin can be switched off in some cells, as in the Barr body, the inactivated X chromosome of a female mammal (X-inactivation, the Lyon hypothesis), which lies at the nuclear periphery. Giemsa (G-banding) and quinacrine (Q-banding) give each chromosome a reproducible band pattern, and a karyotype arranges chromosomes by size and banding to detect abnormalities such as Down syndrome (trisomy 21) and Turner syndrome (45,X)',
    why: 'Constitutive is permanently silent; facultative is silent only in context and the silencing is reversible.',
    say: null,
  },
  // pp. 515–517
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the nucleolus organiser region, and what does the nucleolus do?',
    a: 'The secondary constriction of a SAT chromosome carries the ribosomal RNA genes (rDNA repeats): this is the nucleolus organiser region (NOR). After division the NORs of specific acrocentric chromosomes cluster and recruit proteins, and the nucleolus forms around them: the chromosome supplies the genes, the nucleolus is the structure that assembles around them. The nucleolus is the site of rRNA synthesis and of assembly of the ribosomal subunits',
    why: 'DNA replication is not the nucleolus’s job, and the nuclear envelope reforms from fragments of the ER after mitosis.',
    say: null,
  },

  // ── Additional E · Cell Division Vocabulary: Binary Fission, Mitosis, and the Cell Cycle Checkpoints ──
  // pp. 517–519
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the four stages of bacterial binary fission, and which structure coordinates cytokinesis?',
    a: 'One: the circular chromosome, attached to the plasma membrane, replicates bidirectionally from the origin of replication (oriC). Two: the cell elongates, adding new peptidoglycan and membrane, and the growing membrane carries the two chromosomes toward opposite poles. Three: the FtsZ ring, a tubulin-like protein, assembles at the centre and contracts, and a division septum grows inward with new wall material. Four: the septum completes and the cell splits into two genetically identical daughters. The FtsZ ring coordinates cytokinesis',
    why: 'The order to remember is replicate, elongate, septum, separate (in a living cell the stages overlap).',
    say: null,
  },
  // pp. 518–520
  {
    topic: 8,
    kind: 'remember',
    q: 'Where are the three cell-cycle checkpoints, and how does cytokinesis differ in animal and plant cells?',
    a: 'G<sub>1</sub>/S (restriction point) at the end of G<sub>1</sub> commits the cell to DNA synthesis after checking size, nutrients, growth factors and DNA integrity; G<sub>2</sub>/M at the end of G<sub>2</sub> checks that replication is complete and damage repaired; the M (spindle-assembly) checkpoint at metaphase checks that every chromosome is attached to the spindle at its kinetochore before anaphase. Cyclins and cyclin-dependent kinases (CDKs) drive the cycle through them. Animal cells divide by a cleavage furrow: an actin and myosin ring contracts at the equator. Plant cells form a cell plate from Golgi-derived vesicles that fuse at the equator and deposit new wall and middle lamella, because the rigid wall prevents pinching',
    why: 'The critical distinction is contractile ring (animals) against cell plate (plants).',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 520–527
  {
    topic: 9,
    kind: 'remember',
    q: 'Which topics of Cell: The Unit of Life does NEET ask most, and what are the recurring question types?',
    a: 'The book’s estimate from past papers, not official figures: the endomembrane system and organelles about 35%, the cell theory and envelope about 25%, the cytoskeleton, cilia and flagella, nucleus and chromosomes about 25%, the synthesis comparisons about 15%. The six recurring types: a set of statements to mark correct or incorrect; a “not, except, incorrect” single statement (an option can fail by omission, such as defining a polysome without the mRNA); the membrane-count or organelle grid; the assertion-reason item (judge A alone, then R alone, and only then ask whether R explains A); match the column (leucoplast stores, vacuole types); and the distractor pair (amyloplast and aleuroplast, slime layer and capsule, cristae and grana)',
    why: 'Why it matters: the endomembrane membership item recurs, and the plasma membrane is not counted as a member, nor are mitochondria, chloroplasts or peroxisomes.',
    say: null,
  },
  // pp. 527–528
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps recur in Cell: The Unit of Life questions?',
    a: 'In the bacterial envelope the plasma membrane is innermost, wall and glycocalyx outside it (a Gram-negative wall also carries an outer membrane, but the plasma membrane is still the innermost layer). “Membrane-bound” does not mean endomembrane (MCP are out: mitochondria, chloroplasts, peroxisomes). Ribosome sizes reversed: 70S for prokaryotes and chloroplasts, 80S for the eukaryotic cytoplasm, with a 50S and 30S subunit in 70S and a 60S and 40S in 80S. Amyloplast is starch, protein is the aleuroplast. Cristae belong to the mitochondrion and grana to the chloroplast. The bacterial flagellum has no 9 + 2 axoneme. The nucleolus, not the nucleoplasm, makes rRNA. The contractile vacuole does osmoregulation and excretion, not digestion or respiration. Higher plants have no centrioles',
    why: 'Habit that pays: sort any odd-one-out by membrane count, 0, 1 or 2.',
    say: null,
  },
];
