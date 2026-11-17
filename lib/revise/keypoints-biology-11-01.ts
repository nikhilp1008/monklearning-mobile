/**
 * KEY POINTS for Biology Class 11, Chapter 1 (The Living World).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 00, 01 and 02 are 0, 1 and 2; Additional topics A–E are 3–7
 * (E is the book's Addendum P, What NEET Actually Asks). No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms and
 * Cheat sheet. Common mistakes: its Common student pitfalls. Exam shortcuts:
 * its Pro-Tip, with a worked example or practice answer. `say`: the cheat
 * sheet's first two memory aids, word for word, in the Chemistry form: no
 * quotation marks and no markup. Topic 00's cheat sheet prints one aid, Topic
 * 01's two, and Topic 02's one line that holds two mnemonics (the ladder
 * sentence and the category and taxon pair), which are used as its two lines;
 * so the chapter has five lines. Topic 02's "Mnemonics:" label is dropped, the
 * mnemonics themselves are word for word. Additional topics: the addenda's
 * methods, worked examples and practice answers; E: its distribution and traps.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows
 * the chapter text as corrected after the expert review:
 * - a test-tube metabolic reaction is "a living reaction, but the flask is not
 *   a living thing" (NCERT: not living things but surely living reactions);
 *   the book's "neither living nor non-living" is not repeated;
 * - consciousness: NCERT calls it the defining property, the answer to give
 *   when it is offered beside growth, reproduction or increase in mass; the
 *   point also gives the bundle with metabolism and cellular organisation (the
 *   book's "MCC"), and says consciousness here means sensing surroundings and
 *   responding to stimuli; self-consciousness is NCERT's statement about human
 *   beings, with the note that some other animals show limited self-recognition;
 * - growth: a tree adds cells at its growing regions (meristems), not
 *   "throughout the body"; growth and reproduction are separate events in most
 *   higher animals and plants and the same event in a unicellular organism; the
 *   book's "mutually exclusive" is not repeated;
 * - the ranked categories "go back to Linnaeus" is not claimed for the whole
 *   ladder: only binomial nomenclature is credited to him ("proposed by");
 * - the Monera cell wall is non-cellulosic; peptidoglycan in the true bacteria,
 *   absent in archaebacteria (and in mycoplasma);
 * - Woese (with Fox, 1977) analysed 16S rRNA, which splits Monera into two
 *   kingdoms, the six kingdoms commonly credited to Woese in NEET material
 *   (the three domains came in 1990); NCERT Class 11 teaches the five kingdoms
 *   and does not name Woese or the six-kingdom label;
 * - bacteria reproduce by binary fission, so a lineage is a set of clones; the
 *   species thresholds are 70% DNA-DNA hybridisation (a molecular approach) or
 *   97% 16S rRNA identity (the older figure; about 98.65% in current work),
 *   approximate and not NCERT; the cryptic-species example is the Anopheles
 *   gambiae complex (not Xenopus);
 * - "order -ales, family -aceae" is scoped to plants (animal orders have no
 *   fixed ending; animal family names end in -idae);
 * - superlatives ("the single most exploited trap") are worded "a classic
 *   trap"; exam shares are the book's estimate from past papers, not official
 *   figures, and no point says "every cycle".
 *
 * Notes kept where a point uses the name: Canis familiaris (now often Canis
 * lupus familiaris); ICNB (now ICNP); Linn. (now abbreviated L.); Primata
 * (NCERT's spelling; usually Primates); the ICBN given with the note that it is
 * now the ICN. The specific epithet alone is not a species name. A book title
 * such as Systema Naturae is plain text, not italic; scientific names are in
 * <i>, including a bare epithet such as melongena.
 *
 * A few points are narrower than the book's sentence, in our words: Homo
 * called monotypic "among living forms", as the book does; the Chlorella and
 * Spirogyra rows of the kingdom assignment table are not used, so no point
 * rests on where the unicellular and filamentous algae go; the book's worked
 * example of the simple matching coefficient is used for its result (two
 * pairs, both 0.80) and not for its closing sentence about which characters
 * each pair shares. Exam shares: no years; every share (E) is described as the
 * book's estimate from past papers, not official figures.
 *
 * Markup is the chapter's own: <i> for scientific names (the whole binomial in
 * one <i>; names above the genus upright) and for the variable n, <frac> for a
 * fraction, no em dash. A value is kept with its unit, and a range with an en
 * dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · What is ‘Living’? Characteristics of Living Organisms ──
  // pp. 13–14, 16, 19
  {
    topic: 0,
    kind: 'remember',
    q: 'Which properties define life, and why do growth and reproduction not?',
    a: 'The book splits “what is living?” in two and sets the philosophical half, the purpose of life, aside: the technical question is which features every living thing shows and no non-living thing does. A candidate qualifies only if it passes two gates: no non-living thing may show it, and no living thing may lack it. Growth fails the first gate, since mountains, dunes and crystals also grow, by accumulation on the outside. Reproduction fails the second, since a mule, a sterile worker bee and an infertile couple are alive and do not reproduce. What survives is a bundle, which the book calls MCC: metabolism, cellular organisation and consciousness, here the ability to sense surroundings and respond to stimuli. NCERT calls consciousness the defining property of living organisms; metabolism and cellular organisation are also defining. A living thing is a self-replicating, evolving, self-regulating, interactive system capable of responding to external stimuli',
    why: 'Growth and reproduction are still characteristics of living things; they just do not define them.',
    say: 'MCC defines, G&R decline.',
  },
  // pp. 13–14, 16–18
  {
    topic: 0,
    kind: 'remember',
    q: 'What is metabolism, and is a metabolic reaction in a test tube alive?',
    a: 'Metabolism is the sum total of all the chemical reactions in a living body: anabolism builds molecules up, catabolism breaks them down, and the chemicals involved are metabolites. Every living organism, from a bacterium to a blue whale, shows it, and no non-living object carries it out on its own. But enzymes extracted from a cell can run a metabolic reaction in a flask, and the flask is not alive: the reaction is a living reaction, but the flask is not a living thing. So metabolism counts as defining only when it runs within the cellular organisation of a body',
    why: 'Catabolism or anabolism alone is only half of metabolism, and photosynthesis is one anabolic pathway, far too narrow.',
    say: null,
  },
  // pp. 13–14, 16–17, 19
  {
    topic: 0,
    kind: 'mixup',
    q: 'Intrinsic or extrinsic growth: which belongs to living things, and what is growth in a unicellular organism?',
    a: 'Ask where the new material is added. Intrinsic growth is from within, by cell division: a tree adds cells at its growing regions (meristems), including in its girth, and a child’s bones lengthen from within. Extrinsic growth, accretion, is material deposited on the outer surface: a mountain rises by sediment piling on top and a crystal enlarges as ions deposit on its faces. The outward result is the same, “it got bigger”, but only the intrinsic kind belongs to life, and it is twofold, an increase in mass and an increase in the number of cells or individuals. In a unicellular organism one cell division does both at once, so growth and reproduction are the same event (in most higher animals and plants they are separate events)',
    why: 'A unicellular alga dividing into two daughter cells is growth and reproduction together, not one of them only.',
    say: null,
  },
  // pp. 14, 16, 19
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is consciousness in biology the same as self-consciousness?',
    a: 'No. Biological consciousness is responsiveness to stimuli: sensing the physical, chemical and biological cues of the surroundings, such as light, water, temperature, other organisms and pollutants. Every organism, plant, microbe or animal, shows it; plants turn to light and the simplest microbe reacts to a chemical gradient. Self-consciousness, awareness of one’s own self, is the narrower extension that the book credits to human beings (NCERT’s statement; some other animals show limited self-recognition). Do not read the second into the first',
    why: 'The book counts responsiveness as present in all living organisms and absent from all non-living things, which is why it can mark life.',
    say: null,
  },
  // pp. 17–19
  {
    topic: 0,
    kind: 'shortcut',
    q: 'An MCQ asks which of growth, reproduction, consciousness or increase in mass is the defining property: what is the fastest route?',
    a: 'Run the two gates in your head, and you rarely need to read the options twice: does any non-living thing have it, and does any living thing lack it? Growth, and so an increase in mass, falls at once to the dune and the crystal; reproduction to the mule and the sterile bee. Consciousness is left: NCERT calls it the defining property, and it is the answer to give when it is offered beside growth, reproduction or increase in mass, option 3. The same gates settle “which property is shown by both living and non-living things?”: growth',
    why: 'Metabolism and cellular organisation also survive both gates, so if they are offered, think of the whole bundle: metabolism, cellular organisation and consciousness.',
    say: null,
  },

  // ── Topic 01 · Biodiversity & Nomenclature ──
  // pp. 20, 23–24, 26
  {
    topic: 1,
    kind: 'remember',
    q: 'How is a scientific name written, and what counts as the two words of a binomial?',
    a: 'Binomial nomenclature, proposed by Carolus Linnaeus, gives each species two words, in Latin or latinised form: the generic name first, with a capital, then the specific epithet, in lower case: <i>Mangifera indica</i>, never <i>mangifera Indica</i>. In print both words are italic; handwritten, each word is underlined separately, the underline standing in for italics. An author’s name, as in <i>Mangifera indica</i> Linn. for Linnaeus (now abbreviated L.), comes after the epithet in upright type and is optional: it is not part of the binomial, so three written items are still two names. Latin is used because it is no longer changing in everyday speech, so the names do not drift in meaning',
    why: 'A scientific name is a label, not a description: <i>melongena</i> in <i>Solanum melongena</i> does not mean “purple”, and it names a species, not a breed such as the Labrador, a breed of <i>Canis familiaris</i> (now often <i>Canis lupus familiaris</i>). The specific epithet alone is not a species name; the whole binomial is.',
    say: 'Genus Gets the Great (capital) letter.',
  },
  // pp. 20–21, 24–25
  {
    topic: 1,
    kind: 'remember',
    q: 'What makes two organisms one species, and why are the horse and the donkey still two?',
    a: 'The biological species concept, associated with Ernst Mayr: a group of organisms that interbreed freely in nature and produce fertile offspring, sharing a common gene pool. Ask two questions, both of which must be yes: can they interbreed freely in nature, and is the offspring fertile? A horse and a donkey interbreed, but the mule is sterile, so they remain separate species. A high percentage of shared genes, close resemblance, the same habitat or the same genus is not enough: the lion and the tiger share the genus <i>Panthera</i> and are different species',
    why: 'The concept assumes sexual reproduction: for organisms that reproduce only asexually, and for hybrids, the interbreeding test becomes fuzzy.',
    say: null,
  },
  // pp. 21, 24, 26–27
  {
    topic: 1,
    kind: 'mixup',
    q: 'ICBN, ICZN or ICNB: which code names which organisms, and what is a tautonym?',
    a: 'ICBN, the International Code of Botanical Nomenclature, governs plants; ICZN, the zoological code, animals; ICNB, the code for bacteria (now the ICNP). The swap, ICBN for animals, is a classic trap. A tautonym has the same generic name and specific epithet, as in <i>Rattus rattus</i>: it is permitted in zoological naming, so it is a valid binomial, but it is not permitted in botanical naming',
    why: 'The ICBN has since been updated to the ICN, the International Code of Nomenclature for algae, fungi and plants, but NEET and NCERT still examine it as ICBN.',
    say: 'B in ICBN = Botany.',
  },
  // pp. 21, 23–24, 26
  {
    topic: 1,
    kind: 'mistake',
    q: 'Taxonomy or systematics: which is the broader term?',
    a: 'Systematics. You identify an organism, give it a name and classify it; taxonomy is the umbrella for all of these, with characterisation, identification, nomenclature and classification. Systematics is broader still: the study of the diversity of organisms and their evolutionary relationships. So identification, nomenclature and classification sit inside taxonomy, which sits inside systematics, a word from the Latin systema, as in Linnaeus’s Systema Naturae',
    why: 'A definition that mentions evolutionary relationships means systematics; each other option is only one part of the whole.',
    say: null,
  },
  // pp. 24, 26
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you spot a wrongly written scientific name fast, and which words fix the species?',
    a: 'Scan in a fixed order: two words? genus capital and species small? italic, or underlined separately? author upright and last? The wrong option nearly always fails exactly one of the four checks, so you can eliminate without knowing the organism. To compare species, read only the first two words: <i>Brassica oleracea</i> var. <i>capitata</i> (cabbage) and <i>Brassica oleracea</i> var. <i>botrytis</i> (cauliflower) are one species, while <i>Brassica nigra</i> (black mustard) shares only the genus, because the second word fixes the species',
    why: 'The var. only marks a variety within the same species.',
    say: null,
  },

  // ── Topic 02 · Taxonomic Hierarchy ──
  // pp. 28–29, 32, 34
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the seven obligate categories in order, and what happens to shared characters as you go up?',
    a: 'From lowest to highest: Species, Genus, Family, Order, Class, Phylum (Division in plants), Kingdom. Species is the basic unit, and its members share the maximum number of characters; kingdom is the broadest. Going up, the common characters decrease, the organisms in a group increase and kinship grows more distant; going down, groups shrink and shared characters multiply. Optional intermediate ranks, such as sub-class, super-class, tribe and sub-species, are inserted only when a group is large, but the seven are always present. The hierarchy is a human-made convenience for study, so the boundaries between ranks involve judgement',
    why: 'The usual slip is the middle: Genus, then Family, then Order, since a genus is more specific than a family and an order is broader than one.',
    say: 'sequence → King Philip Came Over For Good Soup.',
  },
  // pp. 29–31, 34
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the lineage of man, housefly, mango and wheat (NCERT Table 1.1)?',
    a: 'Man, <i>Homo sapiens</i>: genus <i>Homo</i>, family Hominidae, order Primata (NCERT’s spelling; usually written Primates), class Mammalia, phylum Chordata. Housefly, <i>Musca domestica</i>: <i>Musca</i>, Muscidae, Diptera, Insecta, Arthropoda. Mango, <i>Mangifera indica</i>: <i>Mangifera</i>, Anacardiaceae, Sapindales, Dicotyledonae, division Angiospermae. Wheat, <i>Triticum aestivum</i>: <i>Triticum</i>, Poaceae, Poales, Monocotyledonae, Angiospermae. The two plants split at class and share the division. Read the housefly’s address top-down: Animalia, Arthropoda, Insecta, Diptera, Muscidae, <i>Musca</i>, <i>M. domestica</i>',
    why: 'These four organisms recur constantly in NEET, usually as match-the-column items asking for the order, family or class.',
    say: null,
  },
  // pp. 29, 31–32, 34
  {
    topic: 2,
    kind: 'mixup',
    q: 'Taxon or category: is Mammalia a category, is Class a taxon, and is it phylum or division?',
    a: 'A category is the rank, an abstract level with no organisms attached: Order, Class, Division. A taxon is the actual group of organisms occupying a rank, real and concrete: Mammalia is a taxon at the category Class, Bryophyta a taxon at the category Division, Solanaceae a taxon. A category is the label on the shelf and a taxon the box on it. The rank between Class and Kingdom is called Phylum for animals and Division for plants: the same rank under two names',
    why: '“Family is a taxon and Felidae a category” is the classic reversed pair: Family is the category, Felidae the taxon.',
    say: 'category = the catalogue heading; taxon = the real taxa on it.',
  },
  // pp. 29, 32, 34
  {
    topic: 2,
    kind: 'mistake',
    q: 'Monotypic or polytypic: which are <i>Homo</i>, <i>Ginkgo</i>, <i>Panthera</i> and <i>Solanum</i>?',
    a: 'A monotypic genus holds a single species; a polytypic genus holds two or more. Among living forms <i>Homo</i>, with <i>Homo sapiens</i>, and <i>Ginkgo</i>, with one living species, are monotypic. <i>Panthera</i> (<i>P. leo</i>, <i>P. tigris</i>, <i>P. pardus</i>, <i>P. onca</i>), <i>Solanum</i> (potato, tomato, brinjal) and <i>Corvus</i> (house crow, jungle crow, raven) are polytypic. Mono is one and poly is many: do not let the similar prefixes flip the answer',
    why: 'In an assertion-reason item, “<i>Panthera</i> is monotypic” is the false reason.',
    say: null,
  },
  // pp. 31, 33–34
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Do two organisms share a given category: what is the fast way?',
    a: 'Use downward implies upward: find the lowest category the two share, and they automatically share every category above it, and nothing reliably below. The categories nest like tiffin boxes, each completely containing those below it. Two animals in the same family must share order, class, phylum and kingdom, but two in the same order need not share a family. So the brinjal, tomato and potato, all in the genus <i>Solanum</i> within the family Solanaceae, share that family and the same order and class',
    why: 'Sharing a kingdom says almost nothing about sharing a genus.',
    say: null,
  },

  // ── Additional A · Classification Methods Beyond Morphology ──
  // pp. 35–37, 39
  {
    topic: 3,
    kind: 'remember',
    q: 'What does numerical taxonomy do differently from morphology-based classification?',
    a: 'Numerical taxonomy, also called phenetics, was proposed by Peter Sneath and Robert Sokal. It classifies by overall observable similarity, not evolutionary relationship, and gives every character equal weight. Often more than 100 characters are coded 0 or 1 (absent or present) and fed to a computer, which calculates a similarity coefficient for every pair of taxa; pairs of high similarity are grouped, and the result is a dendrogram of clusters. It is objective and reproducible. Classical morphology gives more weight to key traits and relies on judgement. With a simple matching coefficient, <frac><num>number of matches</num><den>total characters</den></frac>, two pairs can score the same: 4 matches in 5 characters gives <frac><num>4</num><den>5</den></frac> = 0.80 for each',
    why: 'Equal weighting lets a trivial character count as much as a critical one: the method’s deliberate design, and its critics’ complaint.',
    say: null,
  },
  // pp. 36–39
  {
    topic: 3,
    kind: 'remember',
    q: 'Cytotaxonomy, chemotaxonomy, molecular taxonomy, cladistics: which data does each use?',
    a: 'Cytotaxonomy uses chromosomes, their number, size, centromere position, banding and karyotype, so it helps where organisms look alike but differ in chromosome number. Chemotaxonomy, biochemical taxonomy, uses naturally occurring compounds: proteins, alkaloids, flavonoids, terpenoids, amino acid sequences; berberine, shared by Berberidaceae, Menispermaceae and Ranunculaceae, supports placing those families near one another. Molecular taxonomy uses DNA and RNA sequences, the 16S rRNA gene being the standard marker for bacteria. Phylogenetic systematics, cladistics, groups by shared derived characters, synapomorphies, that indicate common ancestry, not by overall similarity. Chromosome arithmetic: <i>B. rapa</i> (n = 10) crossed with <i>B. nigra</i> (n = 8) gives a hybrid with 18, and doubling gives 36, the 2n of <i>B. juncea</i>',
    why: 'Match: numerical taxonomy, computer clustering; cytotaxonomy, chromosome number and morphology; chemotaxonomy, secondary metabolites; molecular taxonomy, DNA and RNA sequences.',
    say: null,
  },

  // ── Additional B · Beyond the Biological Species Concept ──
  // pp. 39–40
  {
    topic: 4,
    kind: 'remember',
    q: 'Name the four species concepts and say what each rests on and where it fails.',
    a: 'Biological: interbreeding plus fertile offspring, Ernst Mayr; it works for most sexually reproducing animals and plants and fails for asexual organisms, bacteria, fossils and plants that hybridise. Morphological: overall body form and structure; it works for any organism with specimens available, fossils and asexual forms included, and fails for cryptic species, polymorphic species and convergent evolution. Ecological: ecological niche or resource use; it suits organisms in different niches in one habitat, as two warblers feeding in the canopy and on the ground, and fails for ecological generalists. Phylogenetic: shared derived characters indicating common ancestry; it works for all organisms, fossils and bacteria included, but needs extensive character data',
    why: 'The phylogenetic concept goes with Willi Hennig’s phylogenetic systematics, developed by Cracraft and others.',
    say: null,
  },
  // pp. 40–42
  {
    topic: 4,
    kind: 'remember',
    q: 'How are bacterial species defined, and what is a cryptic species?',
    a: 'Bacteria reproduce by binary fission, so a bacterial lineage is a set of clones and there is no interbreeding population or shared gene pool for the biological concept to test. Bacterial species are defined operationally: a group of strains with at least 70% DNA–DNA hybridisation (a molecular approach), or at least 97% 16S rRNA identity (the older figure; about 98.65% in current work). These are approximate thresholds, not NCERT, and operational definitions, not biological ones; conjugation within a species is not the defining criterion. Cryptic species look the same but do not interbreed, as in the <i>Anopheles gambiae</i> complex of mosquitoes, whose members cannot be told apart by form but are reproductively isolated. The morphological concept would lump them as one species, which is why the biological or phylogenetic concepts correct it',
    why: 'Two organisms that look identical need not be one species: cryptic species are exactly that case.',
    say: null,
  },

  // ── Additional C · The Dichotomous Key ──
  // pp. 42–43
  {
    topic: 5,
    kind: 'remember',
    q: 'What is a dichotomous key, and what rules does it follow?',
    a: 'A series of paired statements, couplets, each giving two alternative characteristics. Read a couplet, choose the statement that fits the specimen and follow the instruction, usually “go to couplet X”, until you reach a name: the identification. The choices must be genuinely mutually exclusive, the specimen either having the character or not; the characters must be easily observable, vague words such as “usually” and “often” are avoided, and broad, easily seen characters come before specific ones. To build a key, record a character matrix, find the character that splits the specimens into two groups, as even as possible, write couplet 1, repeat for each subgroup until each holds one taxon, and check that every couplet leads unambiguously to a name',
    why: 'Identification, the first step of taxonomy, is matching an organism to an already-known one, and the key is the standard tool for it.',
    say: null,
  },
  // pp. 43–45
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you use a key, and how do you choose the first split of a new one?',
    a: 'Follow the couplets one at a time. In the book’s herbarium key, leaves alternate sends you to couplet 2, fruit a drupe to couplet 3, and there leaves simple gives <i>Mangifera indica</i> (mango) while leaves pinnately compound gives <i>Azadirachta indica</i> (neem). To build a key for shark, frog, lizard, pigeon and rabbit, start with a character that is cleanly binary and splits off one taxon: gills present in the adult gives the shark; then hair and mammary glands give the rabbit, feathers the pigeon, moist skin with no scales the frog, and dry scaly skin the lizard. A couplet that points to a blank couplet shows that the key is incomplete or the specimen lies outside its range',
    why: 'A purple flower is “not blue”, so the specimen follows the (b) branch of a blue-or-not-blue couplet.',
    say: null,
  },

  // ── Additional D · The Kingdom Systems ──
  // pp. 46–47
  {
    topic: 6,
    kind: 'remember',
    q: 'What are Whittaker’s five kingdoms, and how do they differ?',
    a: 'Whittaker (1969) used cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships. Monera: prokaryotic and unicellular (cyanobacteria may be filamentous) with no nuclear membrane, autotrophic or heterotrophic; the wall is non-cellulosic, with peptidoglycan in the true bacteria (absent in archaebacteria, which this system also places in Monera, and in mycoplasma); <i>Nostoc</i>, <i>Azotobacter</i>. Protista: eukaryotic, unicellular or colonial, autotrophic or heterotrophic, with a wall in some; <i>Amoeba</i>, <i>Paramecium</i>, <i>Euglena</i>. Fungi: eukaryotic, multicellular and filamentous (yeast unicellular), absorptive heterotrophs, chitin wall; <i>Agaricus</i>, <i>Penicillium</i>. Plantae: eukaryotic, multicellular, photosynthetic, cellulose wall; <i>Mangifera</i>, <i>Triticum</i>, <i>Funaria</i>. Animalia: eukaryotic, multicellular, ingestive heterotrophs, no cell wall; <i>Homo</i>, <i>Musca</i>, <i>Hydra</i>',
    why: 'Only Monera lacks a nuclear membrane; plants, fungi and animals are told apart by nutrition: photosynthesis, absorption, ingestion.',
    say: null,
  },
  // pp. 47, 50–51
  {
    topic: 6,
    kind: 'remember',
    q: 'What did Woese’s 16S rRNA work change, and is the five-kingdom system outdated?',
    a: 'From 1977 Carl Woese (with George Fox) analysed 16S rRNA, which splits Monera into two kingdoms, giving the six kingdoms commonly credited to Woese in NEET material (in 1990 Woese went further and proposed three domains: Archaea, Bacteria, Eukarya). Monera becomes two kingdoms: Archaebacteria (Archaea), with ether-linked, branched-chain membrane lipids and no peptidoglycan, living in harsh habitats such as salty areas (halophiles) and hot springs (thermoacidophiles), and in marshes and the gut of ruminants (methanogens), and Eubacteria (Bacteria), with ester-linked lipids and peptidoglycan, cyanobacteria included; with Protista, Fungi, Plantae and Animalia that makes six. Both are prokaryotic, so the five-kingdom system keeps them together as Monera. NCERT Class 11 teaches Whittaker’s five kingdoms and names Archaebacteria and Eubacteria within Monera; the six-kingdom label and Woese’s name are extra, but they appear in statement items. NCERT uses the five-kingdom framework as its main tool, so “outdated, replaced by the six-kingdom system” is only partly true: the six-kingdom system is more accurate for prokaryotic phylogeny',
    why: 'Cyanobacteria such as <i>Nostoc</i> are Monera in the five-kingdom system and Eubacteria in the six.',
    say: null,
  },

  // ── Additional E · What NEET Actually Asks ──
  // pp. 51–55
  {
    topic: 7,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the recurring question types?',
    a: 'The book’s estimate from past papers, not official figures: Characteristics of Living Organisms, about 35–40%; Biodiversity & Nomenclature, about 30–35%; Taxonomic Hierarchy, about 25–30%. The “defining property of life” question is a recurring item. The recurring types: which is the defining property; intrinsic against extrinsic growth; spot the wrong scientific name; match man, wheat, mango and housefly to their order, family or class; assertion-reason; and count the correct statements, where one reversed word, order for family or botanical for zoological, makes a statement false',
    why: 'The orders to match: wheat Poales, mango Sapindales, housefly Diptera, man Primata.',
    say: null,
  },
  // pp. 52–56
  {
    topic: 7,
    kind: 'mistake',
    q: 'Which traps recur in the chapter’s questions?',
    a: 'Calling growth defining: Gate 1, since non-living things grow by accretion. Calling reproduction defining: Gate 2, since some living things do not reproduce. Calling a test-tube flask a living thing: the reaction is a living reaction, but the flask is not a living thing. Swapping ICBN and ICZN: B for Botany, Z for Zoo. Flipping the capitals in <i>Solanum melongena</i>: genus capital, species small. Mixing the suffixes of plant orders and families: in plants, order -ales, family -aceae (animal orders have no fixed ending; animal family names end in -idae). Misplacing Family: going up, the middle is Genus, then Family, then Order. Calling Mammalia a category and Class a taxon. Calling <i>Panthera</i> monotypic: it is polytypic, with <i>leo</i>, <i>tigris</i>, <i>pardus</i> and <i>onca</i>',
    why: 'In an assertion-reason pair, “ICBN deals with plants” and “ICZN deals with animals” are both true, but R does not explain A.',
    say: null,
  },
];
