/**
 * KEY POINTS for Biology Class 11, Chapter 4 (Animal Kingdom).
 *
 * Written for test mode, in the form of the Chapter 1 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each); an Additional topic has
 * two points for its central results (A has three, one for each of its three
 * comparisons). Memory lines are a fifth, short section of their own, read
 * rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 05 are 0 to 4; Additional topics A to E are 5 to 9;
 * F (What NEET Actually Asks, the book's Addendum P) is 10. Topic 01 (Master
 * Map) and Topic 05 (Master Revision) have no eight sections: each has the
 * Chemistry-style minimal pair of Remember points, cut from their own headings
 * (Topic 01: the defining features and the classification map, so its
 * reproduction vocabulary table has no point; Topic 05: the exceptions and
 * superlatives, and the whole-kingdom table with the rapid-fire list). Additional
 * topic E is a practice set with nothing new to remember and has no points (as
 * Chapter 3's practice set has none). No point refers to another topic by
 * number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms,
 * tables and Cheat sheet. Common mistakes: its Common student pitfalls. Exam
 * shortcuts: its Pro-Tip, with a worked example or practice answer. `say`: the
 * cheat sheet's first two memory aids, word for word, in the Chapter 1 form: no
 * quotation marks and no markup (the capitals are kept). Topic 02 prints three
 * aids, Topic 03 three, Topic 04 three in one line; the first two of each are
 * used. Topics 01 and 05 print no cheat sheet; Topic 05's one-line chapter
 * mnemonic (the last line of its rapid-fire list) is used as its one memory
 * line, so the chapter has seven lines. Additional topics: the tables, worked
 * examples and practice answers; F: its distribution, archetypes and traps.
 *
 * Where the book’s claim is looser or wrong, the point is true, and follows the
 * chapter text as it stands:
 * - circulation: no point says that “all chordates” have a closed circulation or
 *   a ventral heart (the lancelet has no heart and tunicates are open); the
 *   four chordate features are the notochord, dorsal hollow nerve cord,
 *   pharyngeal gill slits and post-anal tail; open: arthropods and most molluscs;
 *   closed: annelids and cephalopods; the book’s Hemichordata “open” and Chordata
 *   “closed” rows are not used;
 * - coelom origin follows the corrected wording: schizocoelom in annelids,
 *   arthropods and, by body plan, molluscs; enterocoelom in echinoderms and
 *   hemichordates and, in the usual textbook scheme, chordates (a
 *   simplification: the lancelet’s coelom forms by gut pouches, the vertebrate
 *   coelom by splitting of the lateral plate mesoderm); the book’s pair Homo and
 *   Labeo is not repeated;
 * - Cyclostomata are vertebrates because they have a cranium; the book’s
 *   “vertebral column (cartilaginous)” for all of them is not repeated (the
 *   hagfish has none), and no point says that their notochord persists;
 * - the reptile heart is “usually 3-chambered; 4-chambered in crocodiles”; the
 *   book’s “crocodiles are the only living reptiles with a four-chambered
 *   heart” (birds are also archosaurs) is not repeated; “Crocodilus” and
 *   “Chameleon” are the book’s spellings (now Crocodylus, Chamaeleo) and are
 *   given as the book gives them; Aschelminthes is the book’s name (now
 *   Nematoda) and Coelenterata is given with Cnidaria;
 * - mammals: hair, mammary glands and the diaphragm are the class-defining
 *   features, not viviparity; “external ear pinna” is “in most mammals” (absent
 *   in the platypus, whales and seals); the book’s “7 cervical vertebrae” and
 *   “mostly viviparous” for Chondrichthyes (NCERT: many) are not used; birds:
 *   feathers are the exception-free feature, and “pneumatic bones” is not said
 *   of every bird (penguins);
 * - sponges are at the cellular grade; the diploblastic or triploblastic
 *   labels begin at Cnidaria; the book’s trap row that says coelom terminology
 *   “applies only from Cnidaria upward” is not repeated (cnidarians have no
 *   coelom); the mesoglea is an undifferentiated jelly-like layer between the two layers,
 *   largely non-cellular (a few wandering cells in jellyfish);
 *   Ctenophora are given as the chapter gives them, radial;
 * - the radula is absent in the filter-feeding bivalves, and Spongilla is “a
 *   freshwater sponge”, never “the only” one; the Hemichordata gill
 *   slits are given as a feature that does not make it a chordate;
 * - Wuchereria: Culex is given as the vector in the book’s worked example (the
 *   Indian rural vector), with Anopheles and Aedes also named by the book; the
 *   book’s “both viruses” lumping is not used; Taenia’s two intermediate hosts
 *   are given without the book’s cysticercosis detail; Laccifer is the book’s
 *   genus (now Kerria); the ammocoete is not called “ciliated” (beyond NCERT);
 * - annelids are the first closed circulation in the order the phyla are taken
 *   (haemoglobin dissolved in the plasma), not “the first phylum with hearts and
 *   haemoglobin”; “nephridia, one pair per segment” is “in most annelids” (the
 *   earthworm has several kinds); the kidney row for chordates is not given;
 *   echinoderms are “the coelomate phylum with no excretory organ” (the book’s
 *   own practice wording); Arthropoda are “the large majority (well over
 *   two-thirds)” of animal species; metagenesis is an alternation of body forms,
 *   both diploid, not of ploidy; most cnidarians are dioecious (Hydra is not);
 *   true metamerism is best seen in annelids, arthropods being segmented too;
 * - exam wording: the “single densest target” and “regularly tests” claims are
 *   not repeated; the five question shapes are “the book names five”; shares are
 *   the book’s estimate from past papers, not official figures, with no years
 *   (the three shares are given as printed and are indicative, as the book says,
 *   not exact counts); the Archetype 2 statement is “pinnae are present in most
 *   mammals”.
 *
 * Scientific names are in <i> (the whole binomial in one <i>; a genus alone in
 * <i>); group names such as Porifera and Chordata stay upright. Markup is the
 * chapter’s own: <i> for scientific names, no em dash, a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Master Map of the Animal Kingdom ──
  // p. 222
  {
    topic: 0,
    kind: 'remember',
    q: 'What features does every member of Kingdom Animalia share?',
    a: 'Animals are multicellular and eukaryotic, and heterotrophic: they cannot make their own food, so they ingest it (holozoic nutrition) and digest it, usually in an internal cavity. They have no cell wall, only a plasma membrane, which allows flexible, contractile bodies and movement. Reserve food is stored as glycogen and fat, not starch. Most can move at some stage (even sessile sponges and corals have free-swimming larvae), they grow to a characteristic adult size and then stop, and higher forms have sensory and neuromotor systems. Most reproduce sexually, though many lower forms also reproduce asexually',
    why: 'Everything else in the chapter (symmetry, germ layers, coelom, the phyla, the classes) is only how this one kingdom is sub-divided.',
    say: null,
  },
  // pp. 222–224
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the first cut of the animal kingdom, and how do the groups fan out below it?',
    a: 'The first cut is the presence of a notochord: non-chordates (no notochord, ten phyla) against chordates (a notochord at some stage). The non-chordates run from the cell-grade sponges up to the proboscis-bearing <i>Balanoglossus</i>. The chordates split into the protochordates (Urochordata and Cephalochordata, with no cranium) and the vertebrates, and the vertebrates divide first by jaws (Agnatha against Gnathostomata) and then by fins against limbs into two fish classes and four tetrapod classes, seven classes in all',
    why: 'Read the chart from the top: notochord, then cranium, then jaws, then fins or limbs.',
    say: null,
  },

  // ── Topic 02 · Basis of Classification ──
  // pp. 225–227, 232
  {
    topic: 1,
    kind: 'remember',
    q: 'In what order are the six classification filters applied, and what are the four levels of organisation?',
    a: 'Level of organisation, symmetry, germ layers, coelom, segmentation, notochord. The levels rise in complexity: cellular (Porifera, loose cells with no true tissues), tissue (Cnidaria, Ctenophora), organ (Platyhelminthes) and organ-system (Aschelminthes and every phylum above it). Segmentation (metamerism) is the serial repetition of similar units, and true metamerism is best seen in annelids (arthropods are segmented too); the notochord, a dorsal, rod-like, mesodermal structure, splits the kingdom into chordates and non-chordates',
    why: 'The criteria describe the adult body plan and sort animals by grade, not by a strict family tree.',
    say: 'Cells, Tissues, Organs, Systems: the four organisation rungs in order.',
  },
  // pp. 226–227, 232
  {
    topic: 1,
    kind: 'remember',
    q: 'How are symmetry, germ layers and the coelom sorted across the animal kingdom?',
    a: 'Symmetry: asymmetrical (most sponges), radial (Cnidaria, Ctenophora, adult Echinodermata), bilateral (Platyhelminthes onward, except that adult echinoderms are secondarily radial). Germ layers: diploblastic (ectoderm and endoderm with an undifferentiated jelly-like mesoglea between, largely non-cellular, the coelenterates and ctenophores) or triploblastic (a mesoderm as well, flatworms to chordates). Coelom, a mesoderm-lined cavity: acoelomate (no cavity, Platyhelminthes), pseudocoelomate (mesoderm only as scattered pouches, Aschelminthes), eucoelomate (a true coelom lined by mesoderm, Annelida upward). No mesoderm means no true coelom',
    why: 'Digestion has a matching pattern: incomplete (one opening, as in flatworms) against complete (mouth and anus, from the roundworms upward).',
    say: 'A–P–E for body cavity in rising order: Acoelomate → Pseudocoelomate → Eucoelomate.',
  },
  // pp. 225–226, 229–231
  {
    topic: 1,
    kind: 'mixup',
    q: 'Is an echinoderm radial or bilateral?',
    a: 'Both, at different stages: the adult is radially symmetric (five-rayed) and the larva is bilaterally symmetric. The adult radial symmetry is secondarily acquired, which shows the ancestor was bilateral. Echinoderms also have a true coelom, so a radial animal can still be advanced in other ways: never assume radial means primitive in every way',
    why: 'Always check whether the question means the larva or the adult.',
    say: null,
  },
  // pp. 229–231
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is a coelom just any body cavity, and can a diploblastic animal have a true coelom?',
    a: 'No to both. A coelom is a cavity lined by mesoderm; a cavity without that lining is a pseudocoelom. A true coelom needs mesoderm, and diploblastic animals have only two germ layers, so they cannot have one: this single dependency answers many assertion–reason items',
    why: 'In a pseudocoelomate the cavity exists but is not lined continuously by mesoderm; in an acoelomate there is no cavity at all.',
    say: null,
  },
  // pp. 229–231
  {
    topic: 1,
    kind: 'shortcut',
    q: 'In a match-the-column or odd-one-out item on body plans, which filter do you read first?',
    a: 'Learn the criteria as one fixed ladder (organisation, symmetry, germ layers, coelom, segmentation, notochord) and read the animal top-down, but lock the coelom status first: it is a high-yield, discriminating filter, and pinning it usually removes two options at once. A worked case: a true coelom needs mesoderm, diploblastic animals lack it, so “a true coelom can never be found in a diploblastic animal” is true and its reason explains it',
    why: 'The speed test for symmetry: sponge is asymmetrical, Hydra radial, adult starfish radial, earthworm bilateral.',
    say: null,
  },

  // ── Topic 03 · Non-Chordata ──
  // pp. 233–235, 240–241
  {
    topic: 2,
    kind: 'remember',
    q: 'Name the ten non-chordate phyla in order, with the signature organ or feature of each.',
    a: 'Porifera (choanocytes and the canal system), Cnidaria or Coelenterata (cnidoblasts), Ctenophora (comb plates), Platyhelminthes (flame cells), Aschelminthes (pseudocoelom), Annelida (nephridia, true segments), Arthropoda (Malpighian tubules, jointed legs), Mollusca (radula and shell), Echinodermata (water vascular system) and Hemichordata (proboscis gland). Arthropoda is the largest phylum, the large majority (well over two-thirds) of all known animal species, and Mollusca the second largest',
    why: 'Lock each organ to one phylum: radula is the mollusc, nephridia the annelid.',
    say: 'Porifera Can’t Cook Proper Aloo, Always Add More Extra Heat: initials P-C-C-P-A-A-A-M-E-H for the ten phyla in order (Porifera, Cnidaria, Ctenophora, Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata).',
  },
  // pp. 234–235, 240–241
  {
    topic: 2,
    kind: 'remember',
    q: 'Which phyla are cellular, tissue, organ and organ-system grade, and how do Cnidaria and Ctenophora differ?',
    a: 'Porifera are cellular (mostly asymmetrical), Cnidaria and Ctenophora are tissue grade, radial and diploblastic with no coelom, Platyhelminthes are organ grade (bilateral, triploblastic, acoelomate), Aschelminthes are the first organ-system grade (pseudocoelomate, with a complete gut), and from Annelida to Hemichordata the coelom is true. Cnidaria and Ctenophora are both radial and diploblastic: only Cnidaria has cnidoblasts, the stinging cells, with a polyp and a medusa form and metagenesis (<i>Obelia</i>: an alternation of two diploid body forms); Ctenophora has eight rows of ciliated comb plates, is marine only and is marked by bioluminescence',
    why: 'The stinging cell is the deciding feature between the two radial phyla.',
    say: 'Stinging = Cnidaria, Combing = Ctenophora: the one line that ends radial-phylum confusion.',
  },
  // pp. 233, 235, 238, 240
  {
    topic: 2,
    kind: 'mixup',
    q: 'Balanoglossus has gill slits, so is it a chordate?',
    a: 'No. <i>Balanoglossus</i> (Hemichordata) has pharyngeal gill slits and was once placed in Chordata, but it has no true notochord, and a notochord is required for Chordata, so it is a non-chordate. Its body is proboscis, collar and trunk, it breathes through gills, and its excretory organ is the proboscis gland',
    why: 'In an assertion–reason pair on this, both statements are true and the absence of the notochord explains why the gill slits do not make it a chordate.',
    say: null,
  },
  // pp. 235, 238, 240
  {
    topic: 2,
    kind: 'mistake',
    q: 'Are all molluscs open-circulatory, and which phyla are open and closed?',
    a: 'No. Most molluscs have an open system, but the cephalopods (octopus, squid) have a closed one. Open circulation: the heart pumps blood (haemolymph) into open spaces so tissues sit in it, as in arthropods and most molluscs; open does not mean no circulation, the heart still pumps. Closed circulation: the blood stays in vessels, as in annelids, cephalopod molluscs and vertebrates',
    why: 'The blanket statement “all molluscs are open-circulatory” is a classic NEET trap.',
    say: null,
  },
  // pp. 238, 240
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you match an organ to its phylum quickly?',
    a: 'Fire the one-line fingerprint for each phylum: Porifera canal system, Cnidaria stinging cells, Ctenophora comb plates, Platyhelminthes flame cells, Aschelminthes pseudocoelom, Annelida true segments, Arthropoda jointed legs, Mollusca radula and shell, Echinodermata tube feet, Hemichordata proboscis gland. In the worked match (radula, flame cells, comb plates, nephridia) only comb plates go with Ctenophora; radula is not annelid, flame cells are not arthropod, nephridia are not mollusc',
    why: 'You can remove two options before reading them in full.',
    say: null,
  },

  // ── Topic 04 · Chordata ──
  // pp. 242–243, 249–250
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the four chordate features, and how do the three subphyla differ?',
    a: 'A notochord, a dorsal hollow nerve cord, pharyngeal gill slits and a post-anal tail, each needed only at some stage of life, usually the embryo: the adult human has no gill slits or tail, yet the embryo did. The subphyla differ by the fate of the notochord: Urochordata (Tunicata: <i>Ascidia</i>, <i>Salpa</i>, <i>Doliolum</i>) have it only in the larval tail, lost in the adult; Cephalochordata (<i>Branchiostoma</i>, the lancelet) have it head to tail for life; in Vertebrata it is replaced by a vertebral column and a cranium protects the brain. Urochordata and Cephalochordata together are the Protochordata (Acraniata, with no cranium)',
    why: 'Swapping the two protochordates is the recurring pair: <i>Ascidia</i> is tail only, <i>Branchiostoma</i> is lifelong.',
    say: 'Notochord, Dorsal nerve, Gill slits, Tail → N-D-G-T, the chordate starter kit.',
  },
  // pp. 243–244, 249–250
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the one-line signature of each of the seven vertebrate classes?',
    a: 'Cyclostomata (Agnatha): jawless, with a sucking circular mouth, no scales and no paired fins. Chondrichthyes: cartilaginous skeleton, no operculum, placoid scales, no air bladder. Osteichthyes: bony, with an operculum and an air bladder. Amphibia: moist, scaleless skin and a 3-chambered heart. Reptilia: dry scales, shelled eggs on land, a 3-chambered heart (4 in crocodiles). Aves: feathers, 4-chambered heart, warm-blooded. Mammalia: hair and mammary glands, a diaphragm, 4-chambered heart, warm-blooded. Only Aves and Mammalia are warm-blooded; the jaws split Agnatha from Gnathostomata, and Gnathostomata splits into Pisces and Tetrapoda',
    why: 'Fishes and cyclostomes have a 2-chambered heart, amphibians and most reptiles a 3-chambered one, crocodiles, birds and mammals a 4-chambered one.',
    say: 'Crocodile breaks the reptile heart; platypus lays the mammal’s egg: the two exceptions in one line.',
  },
  // pp. 243–244, 248
  {
    topic: 3,
    kind: 'mixup',
    q: 'How do Chondrichthyes and Osteichthyes differ?',
    a: 'Chondrichthyes (<i>Scoliodon</i>, <i>Pristis</i>, <i>Trygon</i>, <i>Torpedo</i>) have a cartilaginous endoskeleton, no operculum so the gill slits are exposed, no air bladder (so they must keep swimming), placoid scales and a ventral mouth; they are marine, with internal fertilisation and a clasper on the male. Osteichthyes (<i>Exocoetus</i>, <i>Hippocampus</i>, <i>Labeo</i>) have a bony skeleton, an operculum covering the gills, an air bladder for buoyancy, and cycloid or ctenoid scales; they live in sea and fresh water and mostly show external fertilisation',
    why: 'A marine cartilaginous fish with no operculum and no air bladder is Chondrichthyes, not Osteichthyes or Cyclostomata.',
    say: null,
  },
  // pp. 244, 248–249
  {
    topic: 3,
    kind: 'mistake',
    q: 'Are all chordates vertebrates, and do chordate features have to be present in the adult?',
    a: 'No to both. All vertebrates are chordates, but not all chordates are vertebrates: the protochordates are chordates that never become vertebrates. The four features need appear only at some stage, usually the embryo, so adult humans are textbook chordates. A jawless, finless lamprey is still a vertebrate, because of its cranium',
    why: 'State the relation in the correct direction: vertebrate inside chordate, not the reverse.',
    say: null,
  },
  // pp. 246–249
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A “without exception” item names a vertebrate class: what is the fastest route?',
    a: 'Recall the exception first: it is faster to disprove three options than to verify one. Reptilia: crocodiles have a 4-chambered heart. Mammalia: the monotremes (<i>Ornithorhynchus</i>, <i>Echidna</i>) lay eggs yet are mammals, since hair and mammary glands, not viviparity, define the class. Chondrichthyes: a cartilaginous skeleton with no exception. Aves: feathers with no exception. In the worked item only Chondrichthyes is matched without exception',
    why: 'Crocodiles and birds share a 4-chambered heart, but the whole suite of class features, not one shared trait, decides the class.',
    say: null,
  },

  // ── Topic 05 · Master Revision: Complete Reference ──
  // pp. 252–253
  {
    topic: 4,
    kind: 'remember',
    q: 'Which exceptions and superlatives does the book stress in this chapter?',
    a: 'Largest phylum Arthropoda, second largest Mollusca; the largest animal ever is the blue whale (<i>Balaenoptera</i>), a mammal. Echinoderms: adults radial, larvae bilateral (secondarily radial), exclusively marine, excretory system absent, coelom an enterocoelom. Mollusca: circulation open in most, closed in cephalopods. Reptile heart 3-chambered, 4-chambered in crocodiles. Mammals viviparous except the monotremes (<i>Ornithorhynchus</i>, <i>Echidna</i>). Hemichordata was once a subphylum of Chordata and is now a separate non-chordate phylum with no true notochord',
    why: 'The four chordate features need appear only once in the life cycle, usually the embryo.',
    say: null,
  },
  // pp. 251, 253
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the whole-kingdom grades, symmetry, germ layers, coelom and heart chambers in one list?',
    a: 'Grades: cellular (Porifera), tissue (Cnidaria, Ctenophora), organ (Platyhelminthes), organ-system (Aschelminthes onward). Symmetry: asymmetrical (sponges), radial (Cnidaria, Ctenophora, adult Echinodermata), bilateral (Platyhelminthes onward). Germ layers: diploblastic for Cnidaria and Ctenophora, triploblastic from Platyhelminthes to Chordata. Coelom: acoelomate (Platyhelminthes), pseudocoelomate (Aschelminthes), eucoelomate (Annelida onward). Heart chambers: 2 in fishes and cyclostomes, 3 in amphibians and reptiles, 4 in crocodiles, birds and mammals. Warm-blooded classes: only Aves and Mammalia',
    why: 'The order of the whole chapter: filters, then the ten non-chordate phyla, then Chordata and its seven classes.',
    say: 'Filters first, phyla next, chordates last: Basis of Classification → the ten non-chordate phyla → Chordata and its seven classes.',
  },

  // ── Additional A · Comparative Functional Anatomy Across the Kingdom ──
  // pp. 254–256
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the excretory organ of each phylum?',
    a: 'Sponges, cnidarians and ctenophores have none (diffusion; amoebocytes in sponges). Platyhelminthes: protonephridia with flame cells, which also osmoregulate. Aschelminthes: renette glands or excretory tubes. Annelida: nephridia (in most annelids one pair per segment; the earthworm has several kinds). Arthropoda: Malpighian tubules in insects (uric acid), green or antennal glands in crustaceans, coxal glands in arachnids. Mollusca: kidney-like metanephridia (waste ammonia in aquatic forms, uric acid in land snails). Echinodermata: no excretory organ at all, waste ammonia diffusing through the tube feet and papulae. Hemichordata: the proboscis gland',
    why: 'Echinoderms are the coelomate phylum with no excretory organ, which fits a marine animal with a thin body surface, since ammonia diffuses readily.',
    say: null,
  },
  // pp. 256–258
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the respiratory organ of each phylum, and why do flatworms and earthworms both lack one?',
    a: 'Sponges, cnidarians, ctenophores, flatworms and roundworms breathe by diffusion. Annelida: the moist skin (cutaneous respiration). Arthropoda: tracheae with spiracles in insects, book lungs in scorpions, gills in crustaceans, book gills in <i>Limulus</i>. Mollusca: ctenidia (gills), with a pulmonary sac in <i>Pila</i>. Echinodermata: papulae (skin gills, in starfish) and the tube feet. Hemichordata: gills. Chordata: gills or lungs, and amphibians also breathe through the skin. Flatworms are flat, so every cell is near the surface and diffusion suffices; an earthworm is cylindrical, so its moist body wall with capillaries carries the oxygen',
    why: 'Different body geometry, different solution: the same “no respiratory organ” has two causes.',
    say: null,
  },
  // pp. 257–258
  {
    topic: 5,
    kind: 'remember',
    q: 'Which phyla have open and closed circulation, and how many hearts has an earthworm?',
    a: 'Sponges, cnidarians, ctenophores and flatworms have no circulatory system; the gastrovascular cavity distributes nutrients in cnidarians and flatworms. Annelida: closed, with haemoglobin dissolved in the blood plasma, the first closed system in the order the phyla are taken in this chapter; the earthworm has four pairs of hearts, in segments 7, 9, 12 and 13. Arthropoda: open, the heart pumping haemolymph into a haemocoel where it bathes tissues directly, at low pressure. Mollusca: mostly open, but the cephalopods (<i>Octopus</i>, <i>Sepia</i>, <i>Loligo</i>) are closed, the landmark exception',
    why: 'Closed means blood stays in vessels (arteries, capillaries, veins), allowing high pressure and targeted delivery.',
    say: null,
  },

  // ── Additional B · Economic and Medical Importance: The Kingdom’s Uses and Harms ──
  // pp. 259–260
  {
    topic: 6,
    kind: 'remember',
    q: 'Which animals give humans useful products?',
    a: '<i>Apis</i> (honeybee) gives honey, beeswax, royal jelly and bee venom, and with <i>Bombus</i> pollinates crops; <i>Bombyx mori</i> (silkworm) gives silk; <i>Laccifer</i> (lac insect) gives lac (shellac, dye, sealing wax); <i>Pheretima</i> (earthworm) gives vermicomposting and soil aeration; <i>Euspongia</i> is the bath sponge and <i>Euplectella</i> the ornamental Venus’s flower basket; corals build reefs; <i>Pila</i> (apple snail) is food, <i>Pinctada</i> (pearl oyster) gives natural pearls, and <i>Sepia</i>, <i>Loligo</i> and <i>Octopus</i> are food',
    why: 'These examples also serve as distractors in odd-one-out questions.',
    say: null,
  },
  // pp. 259–261
  {
    topic: 6,
    kind: 'remember',
    q: 'Which parasites and vectors cause which diseases, and what are their hosts?',
    a: '<i>Taenia</i> (Platyhelminthes): humans are the definitive host, the pig (<i>Taenia solium</i>) or cattle (<i>Taenia saginata</i>) the intermediate host, and humans are infected by the cysticercus larva in undercooked meat. <i>Fasciola hepatica</i> (liver fluke): sheep and goat are the definitive hosts and the freshwater snail <i>Lymnaea</i> the intermediate host. <i>Ascaris lumbricoides</i>: ascariasis. <i>Wuchereria bancrofti</i> (Aschelminthes): filariasis and elephantiasis from blocked lymph vessels, with the mosquito as vector and intermediate host (<i>Culex</i> in the book’s worked case). Malaria: female <i>Anopheles</i>; dengue: <i>Aedes</i>. <i>Limulus</i> is no parasite: its blue blood (haemocyanin) is used to detect bacterial endotoxins',
    why: 'In the book’s worked case, sheathed microfilariae in a night blood smear mark <i>Wuchereria bancrofti</i>.',
    say: null,
  },

  // ── Additional C · Larval Forms and Life Cycles: The Atlas ──
  // pp. 262–264
  {
    topic: 7,
    kind: 'remember',
    q: 'Which larval form belongs to which animal?',
    a: 'Trochophore: annelids (<i>Nereis</i>) and molluscs (<i>Dentalium</i>, <i>Chaetopleura</i>), a ciliated, top-shaped larva with a band of cilia, the prototroch. Veliger: molluscs, following the trochophore in many marine bivalves (<i>Pinctada</i>) and gastropods, with a velum; cephalopods develop without it. Tadpole of <i>Ascidia</i> (Urochordata): has a notochord in the tail and becomes a sessile adult by absorbing its tail. Ammocoete: the filter-feeding larva of the lamprey <i>Petromyzon</i>, burrowed in sand. Bipinnaria: the larva of <i>Asterias</i>, bilaterally symmetric though the adult starfish is radial. Planula: the larva of <i>Obelia</i> and <i>Aurelia</i> (Cnidaria)',
    why: 'The trochophore shared by annelids and molluscs is read as a link between two very different adult groups.',
    say: null,
  },
  // pp. 264–265
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the stages of the Obelia and Fasciola life cycles, in order?',
    a: '<i>Obelia</i> (metagenesis): the adult polyp (asexual, sessile, colonial) buds medusae; the medusa (sexual, free-swimming) makes gametes, fertilisation is external in water, and the zygote becomes a free-swimming planula, which settles and becomes a new polyp. Both forms are diploid, so this is an alternation of body forms, not of ploidy as in plants. <i>Fasciola</i>: the adult lives in the bile ducts of the sheep (definitive host); eggs pass out in the faeces and hatch in water as a miracidium, which enters the snail <i>Lymnaea</i> (intermediate host); then sporocyst, redia, cercaria, and metacercaria, the infective stage on water vegetation. Order: adult, egg, miracidium, sporocyst, redia, cercaria, metacercaria',
    why: 'The polyp is the asexual form and the medusa the sexual one; do not reverse them.',
    say: null,
  },

  // ── Additional D · Taxonomic Refinements and Embryological Depth ──
  // pp. 266–267
  {
    topic: 8,
    kind: 'remember',
    q: 'What are schizocoelom and enterocoelom, and which animals are protostomes and deuterostomes?',
    a: 'Beyond the NCERT text, but occasionally asked. A schizocoelom forms by splitting of the mesoderm into two layers, the cavity between them being the coelom (annelids, arthropods and, by body plan, molluscs). An enterocoelom forms as pouches pinched off the gut wall (echinoderms, hemichordates and, in the usual textbook scheme, chordates; that last label is a simplification, since the lancelet’s coelom forms by gut pouches but the vertebrate coelom by splitting of the lateral plate mesoderm). In the schizocoelom groups the blastopore becomes the mouth (protostomes); in the enterocoelom groups it becomes the anus (deuterostomes). So the echinoderm is a deuterostome, and annelids, arthropods and molluscs are protostomes',
    why: 'Echinoderms and hemichordates share how the coelom forms, a deeper similarity than merely both being coelomates.',
    say: null,
  },
  // p. 267
  {
    topic: 8,
    kind: 'remember',
    q: 'Why does Hemichordata stay a non-chordate phylum, and what is the stomochord?',
    a: 'It lacks the defining chordate structures: no true notochord and no post-anal tail; the main nerve cord is solid and ventral, with a hollow dorsal cord only partly, in the collar region. It does have pharyngeal gill slits. The rod-like structure once called a notochord is the stomochord, a short forward outgrowth of the buccal cavity into the proboscis; it is derived from endoderm, not mesoderm, so it is not a true notochord, and it is different from the proboscis gland, the excretory organ',
    why: 'The notochord is the non-negotiable chordate requirement, and it is absent.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 272–273
  {
    topic: 10,
    kind: 'remember',
    q: 'How does the book estimate the emphasis of NEET questions across this chapter’s topics?',
    a: 'The book’s estimate from past papers, not official figures: Basis of Classification about 20–25%, Non-Chordata about 30–35% and Chordata about 40–45%. The most tested specifics: coelom type and lining, adult against larval symmetry, diploblastic against triploblastic; the signature organs, the sponge canal system, metagenesis in <i>Obelia</i>, open against closed circulation, the largest phylum and the living fossil; and for Chordata the notochord fate in the three subphyla, the crocodile heart, monotreme egg-laying, Chondrichthyes against Osteichthyes and Cyclostomata. The book calls these indicative, not exact frequency counts',
    why: 'Non-Chordata rewards the ten-phylum fingerprint; Basis of Classification is short but costly if larval and adult symmetry are confused.',
    say: null,
  },
  // pp. 273–277, 283
  {
    topic: 10,
    kind: 'shortcut',
    q: 'What are the question shapes the book names, and how is each approached?',
    a: 'The book names five. Without exception: hunt the exception first. A list of statements: mark each T or F, check which phyla are diploblastic and each phylum’s circulation, and treat “all”, “only” and “always” as false until the chapter backs them; the book’s worked case reverses polyp and medusa. Assertion–reason: judge A, then R, then whether R explains A. Match the column: build the feature-to-phylum map first. Descriptors: run organisation, symmetry, germ layers, coelom, notochord, and note adult or larva',
    why: 'NEET can turn a general truth into a trap by deleting its exception.',
    say: null,
  },
  // p. 277
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which traps recur in the chapter’s questions?',
    a: 'All reptiles with a 3-chambered heart (crocodiles have 4) and all mammals viviparous (monotremes lay eggs; hair and mammary glands define the class). Echinoderm symmetry taken from the larva: the adult is radial. Molluscs treated as all open (cephalopods are closed). Swapped signature organs. <i>Ascidia</i> against <i>Branchiostoma</i>: tail only against lifelong. “All chordates are vertebrates” (the reverse is true). A ventral or ectodermal notochord (it is dorsal and mesodermal). Sponges called diploblastic: they are at the cellular grade, and the diploblastic and triploblastic labels begin at Cnidaria',
    why: 'When a statement says “all” or “always”, look for the exception first.',
    say: null,
  },
];
