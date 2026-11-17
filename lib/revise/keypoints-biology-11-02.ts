/**
 * KEY POINTS for Biology Class 11, Chapter 2 (Biological Classification).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 00 to 05 are 0 to 5; Additional topics A to G are 6 to 12;
 * H (What NEET Actually Asks, the book's Addendum P) is 13. F (an index of
 * examples, lists only) and G (mixed practice) have no points, as the practice-
 * only additional topics of Chapter 1 and Chemistry have none. No point refers
 * to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's concept
 * sections, key terms and Cheat sheet. Don't mix up: its tables and cheat sheet.
 * Common mistakes: its Common student pitfalls. Exam shortcuts: its Pro-Tip,
 * with a worked example or practice answer. `say`: the cheat sheet's first two
 * memory aids, word for word, with no quotation marks and no markup (the
 * bold and the italic of the aids are dropped, nothing else is changed). Each
 * topic's cheat sheet prints three aids and the first two are used, so the
 * chapter has twelve lines. Additional topics: the addenda's methods, worked
 * examples and practice answers; H: its distribution, archetypes and traps.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows
 * the chapter text as corrected after the expert review:
 * - the three domains are said to be Woese's without a year (the chapter's
 *   figure carries 1977, the year of his rRNA work; the domains came in 1990),
 *   and the domains are called a higher rank that refines the kingdom idea;
 *   "the five kingdoms still sit beneath them" is not repeated, because Monera
 *   is split between two domains; "the deepest split is Archaea against
 *   Bacteria" is not stated as fact, and Archaea closer to Eukarya is given as
 *   what the rRNA evidence shows, not as a settled tree;
 * - the kingdom decision tree (Topic 00's Pro-Tip) asks whether the eukaryote is
 *   single-celled before it looks at the wall, with the note that diatoms and
 *   dinoflagellates, unicellular and walled, are protists, so "own food and a
 *   cellulose wall means Plantae" is not left to stand alone;
 * - chemoautotrophic bacteria recycle nitrogen, phosphorus, iron and sulphur,
 *   as the chapter text says (the review restored phosphorus);
 * - Plantae are "mostly multicellular" (a few algae are unicellular),
 *   alternation of generations is the typical plant cycle and not universal,
 *   and <i>Cuscuta</i> has "almost lost" its chlorophyll, not lost it entirely;
 * - chlorophyll is given as what separates cyanobacteria from the ordinary
 *   heterotrophic bacteria, and "only cyanobacteria have chlorophyll" is not
 *   repeated (other photosynthetic bacteria have bacterial pigments);
 * - Mycoplasma is described as having no wall at all and surviving without
 *   oxygen (NCERT, as the errata resolves it), and is not called a
 *   facultative anaerobe or placed among the peptidoglycan bacteria;
 * - Chrysophytes are "diatoms and golden algae": the book's "diatoms and
 *   desmids" is not repeated, since desmids are green algae; Topic 02's
 *   "the wall-less, pellicle-covered body is unique to euglenoids" is not
 *   claimed (Paramecium also has a pellicle), and slime moulds are said to
 *   feed on decaying matter by engulfing it, not called saprophytic;
 * - "only animal cells entirely lack a wall" and "no wall is the single
 *   cleanest marker of Animalia" are not repeated: animal cells have no wall,
 *   but Mycoplasma and most protozoans also lack one, so the point says no
 *   wall alone does not prove Animalia;
 * - "Neurospora, the Drosophila of the plant kingdom" is not used (fungi are
 *   not plants); the Phycomycetes' sexual spore is not named;
 * - alternation of generations is "the plant signature" with the dominant
 *   phase of moss, fern, pine and mango, and the book's "universal in
 *   Plantae" is not repeated (some algae differ);
 * - viruses: "no enzymes of their own" and "bacteriophages carry dsDNA" are not
 *   repeated (many virions carry enzymes; phage phiX174 has single-stranded
 *   DNA), and Hepatitis B is not used as the dsDNA example (it is partly
 *   double-stranded and reverse-transcribing); the examples are phiX174
 *   (ssDNA), Reovirus (dsRNA) and TMV (ssRNA);
 * - clamp connections: "in many Basidiomycetes" (the book's later "found only
 *   in Basidiomycetes" and "every cell division" are not repeated: rusts and
 *   smuts lack them), and "the fungal partner is essential for phosphorus
 *   uptake" is "supplies phosphorus efficiently";
 * - lichens "become scarce or absent" where SO2 is high (the book's "disappear
 *   entirely" and "a city centre is lichen-free" are not repeated);
 * - Euglena: the book's "the single feature that makes it a protist is the
 *   absence of a wall" is written as the feature that rules out Plantae,
 *   together with the unicellular body, the flagellum and mixotrophy;
 * - Albugo is a phycomycete as NCERT and the chapter say (modern schemes put
 *   it among the oomycetes); Phycomycetes and Deuteromycetes are NCERT's names;
 * - the superlatives ("the most frequently tested part", "the table examiners
 *   build half the questions around", "a guaranteed talking point") are not
 *   repeated, and every exam share (H) is described as the book's estimate
 *   from past papers, not official figures, with no years.
 *
 * Italics: <i> for scientific names (a genus or binomial in one <i>), <sub>
 * and <sup> for formulas; names above the genus (Ascomycetes, Protista), shape
 * names (coccus, bacillus) and common names (yeast, Venus flytrap) are upright.
 * No em dash; a range uses an en dash. Diatomaceous earth's extra uses (the
 * insecticide and soil dust of Additional topic E) are left out: the filtering
 * and polishing uses are in Topic 02.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Classification Systems & The Five Kingdoms: The Big Picture ──
  // pp. 64–65, 68, 70–71
  {
    topic: 0,
    kind: 'remember',
    q: 'Who proposed the five kingdoms, and what are they?',
    a: 'R.H. Whittaker, in 1969: Monera, Protista, Fungi, Plantae, Animalia. Classification grew step by step: Aristotle made the first scientific grouping, Linnaeus gave the two kingdoms (Plantae and Animalia), Haeckel added Protista in 1866, later workers added Monera for the prokaryotes (four kingdoms), and Whittaker separated Fungi. Sorting the names by date closes the trap: Linnaeus gave the earlier two-kingdom system, Aristotle the earliest morphological grouping, and Woese the three domains.',
    why: 'Each step subdivided a group that had become too broad: the older kingdoms were refined, not thrown away.',
    say: 'Five kingdoms in order: Monkeys Prefer Fresh Pure Apples → Monera, Protista, Fungi, Plantae, Animalia.',
  },
  // pp. 65, 67, 71
  {
    topic: 0,
    kind: 'remember',
    q: 'Which five criteria did Whittaker use, and which do most of the work?',
    a: 'Cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships. Phylogeny is the one students most often drop, yet it is what makes a classification natural, with members sharing ancestry and not only surface resemblance. In the master comparison table, cell type isolates Monera (no nuclear membrane), and nutrition plus cell wall then sort the eukaryotic four: Fungi (heterotroph, chitin wall), Plantae (autotroph, cellulose wall), Animalia (heterotroph, no wall), Protista (the single-celled eukaryotes that fit none of these).',
    why: 'The criteria are applied together, not singly: no one feature decides a kingdom. Gram staining is not a kingdom-level criterion.',
    say: 'Whittaker’s criteria: Cells Build Nutrition, Reproduce, Relate → Cell structure, Body organisation, Nutrition, Reproduction, Relationships (phylogeny).',
  },
  // pp. 67, 70–71
  {
    topic: 0,
    kind: 'mixup',
    q: 'Five kingdoms or three domains: which is the higher rank, and what happens to Monera?',
    a: 'Domains are the higher rank. Carl Woese’s three domains, Archaea, Bacteria and Eukarya, are a refinement of the kingdom idea, not a replacement for it. Kingdom Monera is split between Archaea (archaebacteria) and Bacteria (eubacteria), which differ greatly in cell-wall and membrane chemistry though both are prokaryotic, and all eukaryotes are grouped together as Eukarya. The domain system does not merge Plantae and Animalia, abolish Protista or add viruses as a domain.',
    why: 'Five kingdoms, Whittaker; three domains, Woese. Domains sit above kingdoms: they do not replace them.',
    say: null,
  },
  // pp. 64–65, 68, 70–71
  {
    topic: 0,
    kind: 'mistake',
    q: 'Was the two-kingdom system wrong, and what did it fail to separate?',
    a: 'It was not wrong, only insufficient, so it was refined and not discarded. It failed to separate prokaryotes from eukaryotes, unicellular from multicellular organisms, and photosynthetic organisms (green algae) from non-photosynthetic ones (fungi). Fungi were therefore filed under plants despite having no chlorophyll, absorbing their food and having a chitin wall, not cellulose. Frame each limit as “failed to separate X from Y”.',
    why: 'All three limits come from one idea: the old system grouped by appearance, not by fundamental cell biology.',
    say: null,
  },
  // pp. 67, 71
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you place an organism in a kingdom in seconds?',
    a: 'Run the table top down. Prokaryote? Monera. If it is a eukaryote: makes its own food with a cellulose wall, Plantae; absorbs food with a chitin wall, Fungi (yeast too, though single-celled); multicellular, ingests food, no wall, Animalia. A single-celled eukaryote that fits none of these is Protista. Cell type first, then nutrition and wall, then body.',
    why: 'Check for a single-celled body as well as the wall: diatoms and dinoflagellates are unicellular, walled and photosynthetic, yet they are protists, not plants.',
    say: null,
  },

  // ── Topic 01 · Kingdom Monera: The World of Prokaryotes ──
  // pp. 72–73, 76
  {
    topic: 1,
    kind: 'remember',
    q: 'What makes an organism a Moneran, and what is a Moneran cell like?',
    a: 'One word: prokaryotic. There is no membrane-bound nucleus and no membrane-bound organelles (no mitochondria, chloroplasts or ER). The genetic material is a single, naked, circular DNA lying free in the cytoplasm, the ribosomes are 70S (80S in eukaryotes) and the wall is non-cellulosic. Monera is not “all microbes”: fungi, protozoa and many algae are microscopic but eukaryotic, and viruses are acellular, so they are not Monera either.',
    why: 'Being tiny does not make something a Moneran; being prokaryotic does.',
    say: null,
  },
  // pp. 73, 79, 81
  {
    topic: 1,
    kind: 'remember',
    q: 'How do archaebacteria differ from eubacteria, and what are the three archaebacteria?',
    a: 'Archaebacteria live in extreme habitats, have no peptidoglycan in the wall (protein and non-cellulosic polysaccharides instead) and have branched-chain membrane lipids that resist heat and low pH. Eubacteria live everywhere, have a peptidoglycan wall (<i>Mycoplasma</i>, with no wall at all, is the exception) and straight-chain lipids. The three archaebacteria: methanogens (anaerobic marshes and the gut of ruminants, producing methane or biogas), halophiles (salt lakes and brine pans) and thermoacidophiles (hot, acidic sulphur springs). Eubacterial shapes: coccus (spherical), bacillus (rod), vibrio (comma), spirillum (spiral).',
    why: 'Swapping the habitats costs easy marks: methanogen, anaerobic marsh or gut; halophile, salt; thermoacidophile, hot and acid.',
    say: 'Archaea habitats: Hot, Salty, Marshy → Thermoacidophile, Halophile, Methanogen.',
  },
  // pp. 76, 80–81
  {
    topic: 1,
    kind: 'mixup',
    q: 'Conjugation, transformation, transduction: how does the DNA travel, and are pili and fimbriae the same?',
    a: 'Conjugation: cell-to-cell contact through a pilus, the F (fertility) factor passing from donor to recipient. Transformation: the cell takes up naked DNA released into its surroundings, with no vector and no contact. Transduction: the DNA is carried in by a bacteriophage, a virus as the courier. All three give genetic recombination, a primitive form of sexual reproduction without gametes. The sex pili form the conjugation bridge; fimbriae only attach the cell to surfaces or a host.',
    why: 'Binary fission is the main route of reproduction, and some bacteria (e.g., <i>Bacillus</i>, <i>Clostridium</i>) form tough endospores in unfavourable conditions.',
    say: 'Gene transfer: Contact, Catch, Courier → Conjugation (contact), Transformation (catch naked DNA), Transduction (phage courier).',
  },
  // pp. 75, 80
  {
    topic: 1,
    kind: 'mistake',
    q: 'Are cyanobacteria algae, and how do cyanobacteria and nitrifying bacteria feed?',
    a: 'Cyanobacteria (blue-green algae) are eubacteria, not algae despite the old name: prokaryotic, with a peptidoglycan wall and naked DNA, and with chlorophyll <i>a</i>, so they photosynthesise, unlike ordinary heterotrophic bacteria. Filamentous forms such as <i>Nostoc</i> and <i>Anabaena</i> fix atmospheric nitrogen in thick-walled heterocysts, and in nutrient-rich stagnant water they multiply into blooms that can poison it. Nutrition in Monera: photoautotrophic (cyanobacteria), chemoautotrophic (nitrifying bacteria oxidise inorganic substances such as NH<sub>3</sub> and NO<sub>2</sub><sup>−</sup> for energy, recycling nutrients such as nitrogen, phosphorus, iron and sulphur), saprophytic (most soil bacteria) and parasitic or symbiotic (<i>Rhizobium</i>).',
    why: 'Cyanobacteria are photosynthetic, not chemosynthetic: chemosynthesis oxidises inorganic chemicals, and cyanobacteria use light.',
    say: null,
  },
  // pp. 78, 80
  {
    topic: 1,
    kind: 'shortcut',
    q: 'What two quick filters settle most Monera questions?',
    a: 'Prokaryote? Wall present? <i>Mycoplasma</i> has no wall at all, is among the smallest living cells and is unaffected by penicillin, which works by blocking cell-wall synthesis. Archaebacteria have a wall without peptidoglycan; ordinary eubacteria have a peptidoglycan wall. Those two questions kill most distractors in under five seconds.',
    why: 'For the Gram stain, anchor to the wall, not the colour: Gram-positive is thick peptidoglycan and stays violet; Gram-negative is thin peptidoglycan with an outer membrane and stains pink.',
    say: null,
  },

  // ── Topic 02 · Kingdom Protista: The Eukaryotic Crossroads ──
  // pp. 82–83, 89
  {
    topic: 2,
    kind: 'remember',
    q: 'What defines a protist, and why is Protista called a connecting link and a leftovers kingdom?',
    a: 'A single-celled eukaryote (a true, membrane-bound nucleus and organelles), primarily aquatic. Protista links the prokaryotes (Monera) with the complex plants, animals and fungi, and has very varied nutrition: photoautotrophs, heterotrophs and mixotrophs that switch between the two. Whittaker made it the place for every eukaryote that is not clearly a plant, animal or fungus, so its members are grouped more by what they are not than by shared ancestry, and the chapter calls it ill-defined.',
    why: '“Single-celled eukaryote” is the test, not “small”: bacteria are tiny and aquatic too, but they are prokaryotic, so they are Monera.',
    say: null,
  },
  // pp. 83, 85–86, 90
  {
    topic: 2,
    kind: 'remember',
    q: 'What wall, flagella and stored food identify chrysophytes, dinoflagellates and euglenoids?',
    a: 'Chrysophytes (diatoms and golden algae): a silica-embedded wall in two halves like a soap box, virtually indestructible; stored food chrysolaminarin and oil; chief producers in the oceans; their walls pile up as diatomaceous earth, used in polishing and in filtering oils and syrups. Dinoflagellates: mostly marine, stiff cellulose plates, two flagella (one longitudinal, one transverse), starch and oil; <i>Gonyaulax</i> causes red tides and <i>Noctiluca</i> is a mostly heterotrophic, bioluminescent dinoflagellate. Euglenoids (<i>Euglena</i>): no wall but a protein pellicle, two flagella (one long, one short), paramylon and fat; mixotrophs, photosynthetic in sunlight and heterotrophic without it.',
    why: 'Between covering and stored food, one clue resolves almost every plant-like protist question: chrysolaminarin, diatom; starch, dinoflagellate; paramylon, euglenoid.',
    say: 'Wall material: Silica, Cellulose, None → Chrysophyte, Dinoflagellate, Euglenoid.',
  },
  // pp. 86–87, 90
  {
    topic: 2,
    kind: 'mixup',
    q: 'What are the four protozoan classes, and what moves each?',
    a: 'All protozoans are heterotrophs (predators or parasites), classified by locomotory structure. Amoeboid: pseudopodia (<i>Amoeba</i>, and the gut parasite <i>Entamoeba</i>). Flagellated: flagella (<i>Trypanosoma</i>, sleeping sickness). Ciliated: cilia, with a gullet and a water current that sweeps food in (<i>Paramecium</i>). Sporozoan: an infectious spore-like stage in the life cycle (<i>Plasmodium</i>, malaria).',
    why: 'Amoeba, Paramecium and Trypanosoma are the type examples of three different classes: anchor each class to its locomotory organ and its example together.',
    say: 'Protozoa: Pseudo-Flag-Cilia-Spore → Amoeboid, Flagellated, Ciliated, Sporozoan.',
  },
  // pp. 86, 89
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is <i>Euglena</i> a plant, and why are <i>Euglena</i> and the slime moulds both protists?',
    a: '<i>Euglena</i> is not strictly autotrophic: it is the classic mixotroph, photosynthetic in sunlight and feeding like an animal when light is absent. Slime moulds engulf decaying twigs and leaves as they creep over them and <i>Euglena</i> photosynthesises like a plant, yet both are protists: placement follows cell structure and organisation, not lifestyle alone.',
    why: 'Diatom walls are silica, not calcium carbonate; dinoflagellate plates are cellulose; euglenoids have no wall.',
    say: null,
  },
  // pp. 83, 85, 87, 89
  {
    topic: 2,
    kind: 'shortcut',
    q: 'In an identify-the-group question, which clue do you read first?',
    a: 'The cell covering. Silica: chrysophyte. Cellulose plates: dinoflagellate. Pellicle and no wall: euglenoid. Crawling over decaying matter: slime mould. Animal-like feeder: protozoan. Red tides come from dinoflagellates such as <i>Gonyaulax</i>, not from diatoms or cyanobacteria.',
    why: 'Eliminate on the covering first: cellulose plates already rule out diatoms (silica) and euglenoids (no wall).',
    say: null,
  },

  // ── Topic 03 · Kingdom Fungi: Nature’s Recyclers ──
  // pp. 91–92, 94–95
  {
    topic: 3,
    kind: 'remember',
    q: 'What is a fungus, and how does it feed?',
    a: 'Eukaryotic and heterotrophic, with no chlorophyll and a chitin wall. A fungus does not eat, it absorbs: it secretes enzymes onto its food, digests it outside the body and soaks up the dissolved nutrients. The body is a tangle of hyphae, the whole mass being the mycelium, which gives a large surface for absorption; yeast is the unicellular exception, and cells loosely joined in chains form a pseudomycelium. Nutrition: saprophytic (bread mould), parasitic (the rusts and smuts of crops) or symbiotic (lichens, mycorrhizae).',
    why: 'Fungi are not plants, and absorbing is not ingesting: a fungus does not engulf prey as <i>Amoeba</i> does.',
    say: null,
  },
  // pp. 92, 94, 99
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the four fungal classes, their common names and their diagnostic anchors?',
    a: 'Phycomycetes, algal fungi: aseptate, coenocytic mycelium (<i>Mucor</i>, <i>Rhizopus</i>, <i>Albugo</i>). Ascomycetes, sac fungi: septate; ascospores in an ascus, fruiting body an ascocarp (<i>Penicillium</i>, <i>Aspergillus</i>, <i>Neurospora</i>, yeast). Basidiomycetes, club fungi: basidiospores outside on a basidium, fruiting body a basidiocarp (<i>Agaricus</i>, <i>Puccinia</i>, <i>Ustilago</i>). Deuteromycetes, fungi imperfecti: conidia only, no known sexual stage (<i>Alternaria</i>, <i>Colletotrichum</i>, <i>Trichoderma</i>).',
    why: 'The classes rest on three things: the morphology of the mycelium, the mode of spore formation and the type of fruiting body.',
    say: 'Common names: Algal–Sac–Club–Imperfect → Phyco, Asco, Basidio, Deutero.',
  },
  // pp. 94, 97–99
  {
    topic: 3,
    kind: 'mixup',
    q: 'Plasmogamy or karyogamy: which comes first, and which classes have a dikaryon?',
    a: 'Plasmogamy first: the protoplasms of two cells fuse, the nuclei coming close but not yet fusing. Then karyogamy, the fusion of the two nuclei, and then meiosis in the zygote, giving haploid spores. In Ascomycetes and Basidiomycetes karyogamy is delayed, so the cell carries two nuclei (n + n), a dikaryon, for a while: the dikaryophase. Basidiomycetes lack sex organs, and plasmogamy is by somatogamy, the fusion of two vegetative cells of different mating types. Phycomycetes fuse nuclei promptly, and Deuteromycetes have no known sexual stage.',
    why: 'Plasmo is protoplasm and karyo is nucleus: plasmo comes first.',
    say: 'Sexual cycle: Protoplasm, then Nucleus, then Split → Plasmogamy, Karyogamy, Meiosis.',
  },
  // pp. 92, 94, 96, 98
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is Deuteromycetes a natural class?',
    a: 'No. It is an artificial holding group for fungi whose sexual stage is unknown, defined only by that absence; its members reproduce asexually by conidia. Once the sexual stage is discovered, the fungus leaves and is reclassified into Ascomycetes or Basidiomycetes.',
    why: 'The name carries the clue: “imperfect” means the perfect, sexual stage is missing or not yet found.',
    say: null,
  },
  // pp. 92, 94, 97–99
  {
    topic: 3,
    kind: 'shortcut',
    q: 'What two questions classify almost any fungus?',
    a: 'Is the mycelium septate? If not, Phycomycetes. Where are the sexual spores: in a sac, Ascomycetes; on a club, Basidiomycetes; absent, Deuteromycetes. Asco is inside (endogenous, in an ascus) and Basidio is outside (exogenous, on a basidium). The two questions work even when the example name is unfamiliar.',
    why: 'For example matching: <i>Rhizopus</i> is a Phycomycete, <i>Penicillium</i> an Ascomycete, <i>Agaricus</i> a Basidiomycete and <i>Alternaria</i> a Deuteromycete.',
    say: null,
  },

  // ── Topic 04 · Kingdoms Plantae & Animalia: Overview ──
  // pp. 100–101, 106–107
  {
    topic: 4,
    kind: 'remember',
    q: 'Are all plants autotrophic, and what are the exceptions?',
    a: 'No. Insectivorous plants, the Venus flytrap, bladderwort and pitcher plant, keep their chlorophyll and photosynthesise for energy but also trap and digest insects to obtain nitrogen in nitrogen-poor marshy soil, so they are only partially heterotrophic. The parasitic <i>Cuscuta</i> (dodder, Amarbel) has almost lost its chlorophyll and draws nourishment from its host through suckers. Both are still Plantae: the kingdom is defined by the plant body and ancestry, not strictly by self-feeding.',
    why: 'A mushroom is a fungus, not a plant, and absorbs its food rather than trapping it.',
    say: 'Plant exceptions: Flytraps catch Nitrogen, Cuscuta steals Sugar.',
  },
  // pp. 100–101, 103–104, 107
  {
    topic: 4,
    kind: 'remember',
    q: 'Plants make food, animals find food: which features follow from that?',
    a: 'Plantae: cellulose wall, plastids and chlorophyll, autotrophic, starch as stored food, generally fixed (non-motile), tissue and organ level, and the typical life cycle shows alternation of generations. Animalia: no wall and no plastids, heterotrophic and holozoic (food ingested and digested inside the body), glycogen and fat as stored food, generally capable of locomotion, tissue, organ and organ-system level, reproduction mostly sexual. Both are eukaryotic and mostly multicellular (a few plant-like algae are unicellular), so cell type alone cannot separate them.',
    why: 'Nutrition plus cell wall separate the two kingdoms; starch against glycogen and the presence of plastids are the tiebreakers.',
    say: 'Stored food: Plants Starch, Animals Glycogen (P-S, A-G).',
  },
  // pp. 103, 105, 107
  {
    topic: 4,
    kind: 'mixup',
    q: 'Sporophyte or gametophyte: which makes spores, which makes gametes, and which dominates where?',
    a: 'A diploid sporophyte (2n) makes haploid spores by meiosis; the spores grow into a haploid gametophyte (n), which makes gametes by mitosis; fertilisation restores the sporophyte. Link each group to its dominant phase: moss, gametophyte (the leafy moss plant); fern, pine and mango, sporophyte.',
    why: 'Alternation of generations is the plant signature: animals do not show this cycle, and prokaryotic Monera have none.',
    say: null,
  },
  // pp. 100–101, 104, 106
  {
    topic: 4,
    kind: 'mistake',
    q: 'Do animal cells have a cell wall, and does “no wall” prove an organism is an animal?',
    a: 'Animal cells have no cell wall and no plastids: only a flexible plasma membrane bounds the cell, which is part of what allows movement and ingestion. That is the cleanest plant-against-animal cell discriminator, but other organisms also lack a wall (<i>Mycoplasma</i> and most protozoans), so no wall alone does not prove Animalia: add ingestive nutrition and glycogen.',
    why: 'Plant cells always have a wall, of cellulose; chitin is the fungal wall and peptidoglycan the bacterial one.',
    say: null,
  },
  // pp. 105–106
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you decide between Plantae and Animalia for a multicellular eukaryote?',
    a: 'Ask one question: does it have a cell wall and make its own food? Yes: Plantae. No wall and ingests food: Animalia. When three clues converge (no wall, ingestive feeding, glycogen) the answer is certain. For an insectivorous plant, pick the Venus flytrap (partly heterotrophic), not <i>Cuscuta</i> (parasitic, almost no chlorophyll).',
    why: 'When the wall is not given, use the tiebreakers: starch is plant and glycogen animal; plastids are plant, none are animal.',
    say: null,
  },

  // ── Topic 05 · Viruses, Viroids, Prions & Lichens: Life at the Edges ──
  // pp. 108–110, 114
  {
    topic: 5,
    kind: 'remember',
    q: 'What do a virus, a viroid and a prion contain, and why are they outside the five kingdoms?',
    a: 'Virus: nucleic acid (DNA or RNA, never both) in a protein coat, the capsid. Viroid: free, low-molecular-weight RNA only, with no coat (potato spindle tuber disease). Prion: protein only, with no nucleic acid, an abnormally folded protein that forces normal copies to mis-fold (mad-cow disease or BSE, CJD, kuru). All three are acellular, so Whittaker’s cell-based criteria do not apply and no kingdom fits; lichens are cellular but composite and fit no single kingdom either.',
    why: 'Outside a host a virus is inert and can be crystallised; inside one it reproduces and evolves, so it is said to straddle the living and the non-living.',
    say: 'Strip-down ladder: Coat+acid → acid only → protein only = Virus → Viroid → Prion.',
  },
  // pp. 109–111, 114
  {
    topic: 5,
    kind: 'remember',
    q: 'How is a virus built, and what is the DNA or RNA rule?',
    a: 'A virion is an infectious nucleoprotein: a core of nucleic acid inside a capsid built from capsomeres, arranged helically (rod-shaped TMV) or polyhedrally. A virus carries exactly one type of nucleic acid: phage φX174 has single-stranded DNA, Reovirus double-stranded RNA and TMV single-stranded RNA; most plant viruses carry ss-RNA. Retroviruses such as HIV have RNA that is reverse-transcribed into DNA in the host. Viruses are obligate intracellular parasites, too small for a light microscope, and pass through filters that stop bacteria.',
    why: 'The capsid is the protein coat, not the nucleic acid: a wording trap for fast readers.',
    say: null,
  },
  // pp. 111, 114
  {
    topic: 5,
    kind: 'mixup',
    q: 'Ivanowsky, Beijerinck and Stanley: who did what?',
    a: 'Ivanowsky found that a tiny infectious agent from tobacco passed through filters that trapped bacteria. Beijerinck showed that the extract of infected tobacco could infect healthy plants and named the fluid <i>Contagium vivum fluidum</i> (infectious living fluid). Stanley showed that viruses could be crystallised: TMV was the first virus purified. The viroid was found later, by T.O. Diener in 1971.',
    why: 'Put them in time order: found it, named the fluid, crystallised it.',
    say: 'Discovery: I-B-S = Ivanowsky, Beijerinck, Stanley (found it, named the fluid, crystallised it).',
  },
  // pp. 108–109, 112–114
  {
    topic: 5,
    kind: 'mistake',
    q: 'In a lichen, which partner is the phycobiont, and how does a lichen differ from a mycorrhiza?',
    a: 'The phycobiont is the alga or cyanobacterium, which photosynthesises and provides food; the mycobiont is the fungus, which shelters and anchors the partnership and absorbs water and minerals. Phyco is alga, myco is fungus. A lichen is fungus plus alga; a mycorrhiza is fungus plus plant root, the fungus supplying minerals and water and receiving sugars.',
    why: 'Lichens grow very slowly, are pioneers on bare rock and tree bark and, being sensitive to SO<sub>2</sub>, do not grow in polluted air, so their presence signals clean air.',
    say: null,
  },
  // pp. 108, 111, 114
  {
    topic: 5,
    kind: 'shortcut',
    q: 'What two yes/no checks name any of the three acellular agents?',
    a: 'Is there a protein coat? Is there nucleic acid? Coat and nucleic acid: virus. Nucleic acid (RNA) with no coat: viroid. Protein with no nucleic acid: prion. In a “select the viral disease” list, cholera is bacterial and rusts and smuts are fungal; genuine viral diseases include mumps, smallpox, influenza, AIDS and the mosaic diseases of plants.',
    why: 'Viruses are acellular, not prokaryotic, so they do not belong in Monera.',
    say: null,
  },

  // ── Additional A · The Three-Domain System: Why Woese Split the Moneran Kingdom ──
  // pp. 115–117
  {
    topic: 6,
    kind: 'remember',
    q: 'Which features separate Archaea, Bacteria and Eukarya, and what happens to Monera?',
    a: 'Archaea: prokaryotic, branched-chain membrane lipids, no peptidoglycan (protein and non-cellulosic polysaccharides in the wall), rRNA distinct from Bacteria. Bacteria: prokaryotic, straight-chain fatty acids, a peptidoglycan (murein) wall, rRNA distinct from Archaea. Eukarya: eukaryotic, a nuclear membrane, sterol-containing membranes. Woese’s rRNA sequencing showed the prokaryotes to be two groups that separated at the root of the tree of life, with Archaea closer to Eukarya on the rRNA evidence. Monera is therefore split between two domains.',
    why: 'Monera spans Archaea and Bacteria; Protista, Fungi, Plantae and Animalia all sit inside Eukarya.',
    say: null,
  },
  // pp. 116–117
  {
    topic: 6,
    kind: 'remember',
    q: 'An organism is prokaryotic, with a peptidoglycan wall and straight-chain fatty acids: which domain and kingdom?',
    a: 'Domain Bacteria, Kingdom Monera. Prokaryotic means Archaea or Bacteria; peptidoglycan and straight-chain lipids belong to Bacteria. Examples: <i>Nostoc</i> and <i>E. coli</i> (Bacteria), <i>Methanobacterium</i> and the methanogens (Archaea), and <i>Euglena</i>, <i>Agaricus</i>, <i>Mangifera</i> and <i>Homo</i> (Eukarya).',
    why: 'One molecular feature is enough to separate Archaea from Bacteria: branched against straight-chain lipids, or peptidoglycan absent against present.',
    say: null,
  },

  // ── Additional B · Kingdom Monera: Internal Classification Beyond “Prokaryotic” ──
  // p. 118
  {
    topic: 7,
    kind: 'remember',
    q: 'How are bacteria classified by shape and by the Gram stain?',
    a: 'Four shapes: coccus (spherical), bacillus (rod), vibrio (comma) and spirillum (spiral); the shape name bacillus is not the genus <i>Bacillus</i>: every <i>Bacillus</i> is a rod, but not every rod is a <i>Bacillus</i> (<i>Bacillus anthracis</i> causes anthrax). Gram-positive: thick, multilayered peptidoglycan, no outer membrane, retains the violet stain (<i>Staphylococcus</i>, <i>Streptococcus</i>). Gram-negative: thin, single-layered peptidoglycan, an outer membrane, pink with the safranin counterstain (<i>Escherichia coli</i>, <i>Salmonella</i>). Run shape first, then the Gram reaction.',
    why: 'A rod-shaped bacterium that keeps the violet stain is a Gram-positive bacillus, for example <i>Bacillus subtilis</i>, a soil decomposer.',
    say: null,
  },
  // pp. 118–120
  {
    topic: 7,
    kind: 'remember',
    q: 'What are heterocysts, and why do they fix nitrogen?',
    a: 'Specialised, thick-walled cells in some filamentous cyanobacteria (<i>Nostoc</i> and <i>Anabaena</i>; not <i>Oscillatoria</i>) that fix atmospheric N<sub>2</sub> into ammonia. The enzyme nitrogenase is rapidly inactivated by oxygen, and the thickened wall restricts gas diffusion, so the heterocyst keeps the oxygen-poor conditions the enzyme needs, while ordinary cells photosynthesise and release O<sub>2</sub>.',
    why: '<i>Anabaena</i> with the water fern <i>Azolla</i> is used as a biofertiliser in Indian rice paddies.',
    say: null,
  },

  // ── Additional C · Euglena: Why It Is Kingdom Protista and Not Plantae ──
  // pp. 120–121
  {
    topic: 8,
    kind: 'remember',
    q: 'Why is <i>Euglena</i> not placed in Plantae despite its chlorophyll?',
    a: 'It has no cellulose cell wall, which Plantae need. A flexible protein pellicle, a striped layer of protein strips, takes the place of the wall and lets the cell change shape. It is also unicellular, motile by a flagellum and mixotrophic, feeding heterotrophically in the dark, and it is not a fungus because it photosynthesises. Protista openly accommodates photo-, hetero- and mixotrophic single-celled eukaryotes.',
    why: 'Chlorophyll alone does not decide the kingdom: it points toward Plantae, so it is not the reason for the protist placement.',
    say: null,
  },
  // p. 121
  {
    topic: 8,
    kind: 'remember',
    q: 'A single-celled organism has chloroplasts, a flagellum and a flexible pellicle but no cell wall: how do you assign its kingdom?',
    a: 'Eliminate step by step. Chloroplasts mean a eukaryote, which rules out Monera. No cellulose wall rules out Plantae. Photosynthesis with no chitin wall rules out Fungi. A unicellular body does not fit multicellular Animalia. A single-celled eukaryote with mixotrophic capability is Protista.',
    why: 'Plant-like: chlorophyll and photosynthesis in light. Animal-like: a flagellum for locomotion, feeding on organic food in the dark and no wall.',
    say: null,
  },

  // ── Additional D · Fungal Advanced: Perfect/Imperfect Stages, the Dikaryotic Condition, and Clamp Connections ──
  // pp. 122, 124
  {
    topic: 9,
    kind: 'remember',
    q: 'What are the perfect and imperfect stages of a fungus?',
    a: 'The sexual cycle (plasmogamy, karyogamy, meiosis) is the perfect stage, the complete reproductive cycle that fixes the fungus’s true identity. The asexual cycle, producing conidia only, is the imperfect stage. A fungus known only from its conidial state goes into the artificial group Deuteromycetes; once a sexual stage is found it moves to Ascomycetes (ascus-former) or Basidiomycetes (basidium-former), depending on the fruiting body.',
    why: 'Deuteromycetes is not a natural class: defined only by a missing sexual stage, it shrinks as those stages are found.',
    say: null,
  },
  // pp. 122–124
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the advantage of the dikaryotic condition, and what are clamp connections?',
    a: 'In a dikaryon two genetically distinct nuclei coexist and both are expressed, so the mycelium draws on both parents at once: genetic advantage without genetic commitment. Karyogamy comes later and meiosis then reshuffles both genomes into haploid spores. In many Basidiomycetes, hook-like clamp connections keep the dikaryotic condition going: a clamp grows out and one nucleus moves into it, both nuclei divide, septa cut off the clamp and separate the daughter cells, and the clamp fuses back to the rear cell, so each daughter cell receives one nucleus of each mating type.',
    why: 'Clamp connections on a fungus’s hyphae point to dikaryotic Basidiomycete mycelium, with nuclei of different mating types not yet fused. Rusts and smuts have none, so their presence is diagnostic and their absence is not.',
    say: null,
  },

  // ── Additional E · Mycorrhizae, Lichens as Pollution Indicators, and Diatomaceous Earth ──
  // pp. 124–125
  {
    topic: 10,
    kind: 'remember',
    q: 'What does each partner give and get in a mycorrhiza?',
    a: 'A mycorrhiza is a symbiotic association between fungal hyphae and plant roots (myco, fungus; rhiza, root). The hyphae are far finer than root hairs and reach water and minerals, especially inorganic phosphorus and nitrogen, which they pass to the plant in exchange for sugars from photosynthesis. The majority of land plants form mycorrhizae, and the partnership was probably crucial in the first colonisation of land by plants.',
    why: 'Phosphorus is poorly mobile in soil, so hyphae reaching beyond the root hairs supply it efficiently.',
    say: null,
  },
  // pp. 125–126
  {
    topic: 10,
    kind: 'remember',
    q: 'Why are lichens indicators of SO<sub>2</sub> pollution?',
    a: 'Lichens have no waxy cuticle and no roots; they absorb water and minerals directly through the whole thallus from air and rain. SO<sub>2</sub> dissolving in rain or dew forms dilute sulphurous acid, which damages the phycobiont, disrupts the mycobiont and gradually kills the thallus. They become scarce or absent where SO<sub>2</sub> is high (urban centres, industrial zones) and are abundant in clean air (hill stations, forests), so their presence or absence signals air quality.',
    why: 'In an assertion-reason item, absorbing everything straight from the atmosphere is the reason that explains the sensitivity.',
    say: null,
  },

  // ── Additional H · What NEET Actually Asks ──
  // pp. 131–135
  {
    topic: 13,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the recurring question types?',
    a: 'The book’s estimate from past papers, not official figures: Monera about 25%; Fungi about 20%; Protista about 20%; the five-kingdom framework and Whittaker’s criteria about 15%; viruses, viroids, prions and lichens about 15%; the Plantae and Animalia overview about 5%. The recurring types: which statements are correct; naming a group from its features, by the cell covering or wall; statement lists; assertion-reason; and matching a fungal class with its common name or example.',
    why: 'The class names encode the diagnosis: Phycomycetes algal fungi, Ascomycetes sac fungi, Basidiomycetes club fungi, Deuteromycetes fungi imperfecti.',
    say: null,
  },
  // pp. 133–139
  {
    topic: 13,
    kind: 'mistake',
    q: 'Which traps recur in the chapter’s questions?',
    a: 'Viruses do pass through filters that stop bacteria. Methane is the waste product of methanogens, not their carbon source. TMV is single-stranded RNA (Reovirus is the double-stranded example), and a virus has one nucleic acid, never both. Yeast is the unicellular ascomycete and <i>Penicillium</i> the multicellular one. <i>Euglena</i> is a protist, whatever its chlorophyll. Cyanobacteria are photosynthetic, not chemosynthetic. <i>Albugo</i>, the cause of white rust of mustard, is a phycomycete, not a chrysophyte. The F factor passes through sex pili, not fimbriae. Plasmogamy is the fusion of protoplasms, not nuclei, and comes first. <i>Mycoplasma</i> can survive without oxygen (NCERT).',
    why: 'In a statement-type item, mark each statement true or false on its own before reading the option codes.',
    say: null,
  },
];
