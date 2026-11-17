/**
 * KEY POINTS for Biology Class 11, Chapter 7 (Structural Organisation in Animals).
 *
 * Written for test mode, in the form of the Chapter 1 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each); Topic 02, a one-page
 * topic, has two Remember points only; an Additional topic has two points for
 * its central results. Memory lines are a fifth, short section of their own,
 * read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 05 are 0 to 4; Additional topics A to H are 5 to 12;
 * I (Summary Checklist) is 13 and has no points, being a checklist of
 * questions with nothing new to remember (as Amines' checklist); J (What NEET
 * Actually Asks) is 14. No point refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms,
 * tables and Cheat sheet. Common mistakes: its Common student pitfalls. Exam
 * shortcuts: its Pro-Tip, with a worked example. `say`: the cheat sheet's first
 * two memory aids, word for word, in the Chapter 1 form: no quotation marks and
 * no markup (only the bold lettering is lost; the capitals and the arrows are
 * kept). Topics 01, 03, 04 and 05 each print three aids; the first two are used,
 * so the chapter has eight lines. Topic 02 has no cheat sheet and no line.
 * Additional topics: the methods, tables, worked examples and practice answers;
 * J: its distribution, archetypes and traps.
 *
 * Where the book’s claim is looser or wrong, the point is true, and follows the
 * chapter text as it stands:
 * - epithelium: the basement membrane plus a free surface is given as its
 *   signature, and the book’s “the other three tissues have no such membrane”
 *   and “no other tissue qualifies” are not repeated (muscle fibres also
 *   have a basal lamina);
 * - insect blood: the cockroach haemolymph “carries no respiratory pigment” is
 *   given with the chapter’s corrected reason, that in insects the air is
 *   carried by tracheae, not by blood; the book’s “open circulation explains
 *   why insect blood has no pigment” is not used, and the point does not say
 *   the haemolymph carries no gases at all;
 * - the earthworm: no point makes the “friend of the farmers” a Darwin
 *   attribution (NCERT: “friend of the farmers”; the chapter adds only that
 *   Darwin studied earthworms), that it “never
 *   self-fertilises” (it cannot normally; two worms exchange sperm), or gives
 *   the book’s reason that eggs and sperm mature at different times; the ovary
 *   pair is segments 12–13 throughout (the corrected value);
 * - the frog: the left atrium receives oxygenated blood “from the lungs” (not
 *   “from the lungs and skin”, as skin blood returns to the right side); “10
 *   pairs of cranial nerves” only, not the book’s “10 pairs spinal” beside
 *   them; the frog is not called “non-poisonous” (the chapter itself names
 *   serous or poison glands, and calls it harmless to handle) and the claims
 *   about myopic and hypermetropic vision are not used; the truncus
 *   arteriosus carries the NCERT name conus arteriosus beside it; the stomach glands release pepsinogen and
 *   hydrochloric acid without assigning each to a named gland cell, and the
 *   point where the book calls the frog’s cranial-nerve count “similar to
 *   reptiles” is dropped; “thyroxine controls metamorphosis” and “skin
 *   respiration begins” at the forelimb stage are not claimed;
 * - cockroach development: the young is a nymph, not a larva, and the point
 *   says so; the book’s “~13 instars” is worded “about 13 moults”, as in the
 *   cheat sheet and Additional topic J; the paurometabolous label is given as
 *   incomplete, gradual development with no pupa;
 * - germ layers: no point says that the answer “is always” the germ layer, that
 *   ectoderm makes “everything” that touches the outside, or that “all
 *   connective tissues are mesodermal”; the point names bone, cartilage, blood
 *   and areolar tissue as mesodermal, the tissues the chapter lists, and the
 *   gut lining and the liver as endodermal;
 * - the book’s “glomerular capsule” and “glomerulus” as simple squamous
 *   epithelium are not both used (the point names alveoli, blood vessel walls
 *   and the lining of body cavities); “chondroitin salts” as the only source of
 *   cartilage’s pliability is not claimed; “hypothalamus part of the limbic
 *   system” is not used;
 * - exam labels: “almost every year”, “the most heavily examined”, “the
 *   highest yield”, “No exception” and “the most common trap is option (b)” are
 *   dropped or worded “high-yield” and “a classic trap”; exam shares are the
 *   book’s estimate from past papers, not official figures, with no years.
 *
 * Notes kept where a point uses the name: Pheretima posthuma (now Metaphire
 * posthuma), Rana tigrina (now Hoplobatrachus tigerinus); the book’s names are
 * used as printed. Scientific names are in <i>, the whole binomial in one <i>;
 * names above the genus upright; the pharyngeal nephridia open into the pharynx
 * as the chapter’s Additional topic C states.
 *
 * Markup is the chapter’s own: <i> for scientific names, no em dash. A value is
 * kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Animal Tissues ──
  // pp. 410–411, 415
  {
    topic: 0,
    kind: 'remember',
    q: 'What makes connective tissue “mostly matrix”, and what are its three families?',
    a: 'Few cells in an abundant matrix, which is fluid, jelly or solid; the matrix does the supporting, packing and transporting, so change the matrix and the tissue changes. Loose connective: areolar (fibroblasts, macrophages and mast cells in a semi-fluid matrix, beneath skin and epithelia) and adipose (fat-storing). Dense connective: dense regular, with orderly collagen bundles, as in tendons (muscle to bone) and ligaments (bone to bone), and dense irregular in the dermis of skin. Specialised connective: cartilage (solid yet pliable, chondrocytes, avascular), bone (hard matrix of calcium salts, osteocytes and osteoblasts) and blood (fluid matrix, plasma)',
    why: 'Tendon and ligament are both dense regular connective tissue; they differ only in what they join.',
    say: 'Tendon to muscle, ligament links bone-to-bone.',
  },
  // pp. 409, 411, 415
  {
    topic: 0,
    kind: 'remember',
    q: 'Why is blood placed among the connective tissues, and what are the four animal tissues?',
    a: 'Blood has cells in a fluid matrix, the plasma, and it is grouped with the connective tissues because of its origin and its large matrix-to-cell ratio, even though it does no “connecting” in the everyday sense. The four animal tissues are epithelial (covering and lining), connective (linking, supporting, storing, transport, defence), muscular (movement) and neural (receiving and conducting impulses). The scheme is for multicellular animals, and many organs are composite: the intestine wall holds all four layered together',
    why: 'A student who thinks blood “cannot be” connective because it is a fluid is the one this fact is aimed at.',
    say: 'Blood is the connective tissue that flows.',
  },
  // pp. 411, 415
  {
    topic: 0,
    kind: 'mixup',
    q: 'Skeletal, smooth and cardiac muscle: which is striated, which is voluntary, and which has intercalated discs?',
    a: 'Skeletal: striated, voluntary, multinucleate, long cylindrical unbranched fibres attached to bones. Smooth: non-striated, involuntary, uninucleate, spindle-shaped and tapering, in the gut, blood vessel walls and iris. Cardiac: striated, involuntary, uninucleate, branched, with intercalated discs, in the heart wall only. Cardiac is the only striated involuntary muscle; smooth is the only spindle-shaped, non-striated one',
    why: 'Intercalated discs, with their gap junctions, let the contraction signal pass from cell to cell so the heart contracts as one unit.',
    say: null,
  },
  // pp. 410–411, 414–415
  {
    topic: 0,
    kind: 'mistake',
    q: 'What marks out epithelium, and which junction does not belong to animal tissues?',
    a: 'Tightly packed cells with one free (apical) surface, resting on a thin non-cellular basement membrane above the connective tissue; the cells are bound by cell junctions. A description of a tissue “resting on a basement membrane with a free surface” points to epithelium (muscle fibres each have a thin basal lamina, but neither muscle nor nerve cells form a sheet with a free surface). The animal junctions are three: tight (seal the gap), adhering (cement neighbours) and gap (cytoplasmic channels for rapid communication). Plasmodesmata are channels of plant cells and are the classic wrong option. Epithelial sub-types: squamous, cuboidal, columnar, ciliated and compound (stratified), with glands exocrine (ducts) or endocrine (ductless)',
    why: 'A student who recognises “junction” words and does not filter for kingdom picks one of the three animal junctions instead of plasmodesmata.',
    say: null,
  },
  // pp. 412–413, 415
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you name a tissue from a description in seconds?',
    a: 'Run the four C’s in order and stop at the first that fits: Cover (boundary, free surface: epithelial), Connect (lots of matrix: connective), Contract (elongated fibres: muscular), Communicate (excitable cells with processes: neural). So in “which pair is wrongly matched?” with tendon as dense regular connective, areolar as loose connective, cartilage as specialised connective and blood as epithelial, the odd pair is blood, which is connective, not epithelial',
    why: 'The first C that fits eliminates the other three distractors at once.',
    say: null,
  },

  // ── Topic 02 · Organ and Organ System ──
  // p. 417
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the ladder of organisation in a multicellular animal?',
    a: 'Cells → tissues → organs → organ systems → organism, a division of labour. Tissues are groups of similar cells doing one job. An organ is made of two or more tissue types working together: the stomach has epithelial lining, connective tissue, muscle and nerves. An organ system is a group of organs that jointly carry out a major function, such as the digestive or circulatory system. Higher up the ladder the body specialises more, from the earthworm to the cockroach to the frog',
    why: 'A single cell can run a whole organism only when the organism is a single cell.',
    say: null,
  },
  // p. 417
  {
    topic: 1,
    kind: 'remember',
    q: 'Which two contrasts sort the earthworm, cockroach and frog in comparison questions?',
    a: 'Gut: complete (a separate mouth and anus, so food moves one way and is processed in stages) in all three; an incomplete gut, with one opening serving as mouth and anus, is the simpler pattern of cnidarians. Circulation: closed (blood stays in vessels) in the earthworm and frog; open in the cockroach, where blood (haemolymph) leaves the vessels and bathes the organs in the haemocoel. Earthworm and frog blood, which carry oxygen, carry a respiratory pigment; in insects the air is carried by tracheae, not by blood, so the cockroach haemolymph has none',
    why: 'Almost every comparison question is built on these two axes: complete versus incomplete, open versus closed.',
    say: null,
  },

  // ── Topic 03 · Earthworm (Pheretima posthuma) ──
  // pp. 419–420
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the earthworm’s gut, in order, and what does each part do?',
    a: 'Mouth → buccal cavity (segments 1–3) → pharynx → oesophagus (5–7) → gizzard (8–9) → stomach (9–14) → intestine (from 15) → anus, a complete one-way tube. The gizzard grinds soil and food; the calciferous glands in the stomach wall secrete calcium carbonate that neutralises the humic acid of decaying matter; the intestine absorbs, with an internal dorsal fold, the typhlosole, adding surface area, and a pair of intestinal caeca in segment 26 secreting enzymes. The worm is a detritivore, eating soil and dead leaf matter and leaving castings',
    why: 'The gizzard sits in segments 8–9, not in the clitellum segments 14–16, the most common swap.',
    say: 'Gizzard ate (8) nine (9).',
  },
  // pp. 419–421, 424
  {
    topic: 2,
    kind: 'remember',
    q: 'Where are the clitellum and the genital openings, and how does an earthworm reproduce?',
    a: 'The clitellum is the glandular band on segments 14–15–16 of the mature worm; it divides the body into preclitellar, clitellar and postclitellar regions and secretes the cocoon. A single mid-ventral female pore lies on segment 14, a pair of male pores on segment 18, and four pairs of spermathecal openings in the grooves between segments 5 and 6 up to 8 and 9. The worm is hermaphrodite: testes in segments 10 and 11, ovaries in segments 12–13, spermathecae in segments 6–9. It cannot normally fertilise itself: two worms exchange sperm, and fertilisation takes place in the cocoon. Development is direct, with no larva',
    why: 'Cross-fertilisation keeps the population genetically mixed.',
    say: 'Clitellum is the 14-to-16 belt that makes the cocoon.',
  },
  // pp. 418–420
  {
    topic: 2,
    kind: 'mixup',
    q: 'Septal, integumentary and pharyngeal nephridia: which segments, and where does each open?',
    a: 'Septal: on the septa from segment 15 to the last, opening into the intestine. Integumentary: lining the body wall from segment 3 to the last, opening onto the skin. Pharyngeal: tufts in segments 4, 5 and 6, opening into the pharynx. Three kinds of segmental tubular kidneys, one job: regulating the volume and salt content of the body fluid',
    why: 'The septal ones open into the intestine and the integumentary ones onto the skin, which is the usual question.',
    say: null,
  },
  // pp. 418–420, 424
  {
    topic: 2,
    kind: 'mistake',
    q: 'Why is earthworm blood red if its blood cells are colourless, and how does the blood move?',
    a: 'The haemoglobin is dissolved in the plasma, not packed in red cells as in vertebrates; the cells are colourless and phagocytic, and the blood glands in segments 4, 5 and 6 make the blood cells and the haemoglobin. The circulation is closed: the dorsal vessel carries blood forwards, the ventral vessel backwards, and the muscular “hearts” in the front segments link the two. There is no special respiratory organ: the worm breathes through its moist skin',
    why: 'Saying the blood is red “because of red cells” is the vertebrate pattern wrongly applied.',
    say: null,
  },
  // pp. 421–422, 424
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you beat the earthworm segment-number questions?',
    a: 'Number the train: write the segments 1 to 18 once and pin each organ to its coach: gizzard 8–9, testes 10–11, ovary 12–13, clitellum 14–16, male pore 18. Then a question such as “the clitellum covers segments: 13–15, 14–16, 15–17 or 9–11?” is answered by reading the train, and the options that are one off fall away. The prostomium is a sensory lobe, not a segment: the first true segment is the peristomium, which bears the mouth',
    why: 'The other numbers to keep apart: blood glands 4–6, caeca 26, spermathecae 6–9.',
    say: null,
  },

  // ── Topic 04 · Cockroach (Periplaneta americana) ──
  // pp. 425–427
  {
    topic: 3,
    kind: 'remember',
    q: 'How does the cockroach circulate blood and breathe, and which numbers go with which?',
    a: 'Circulation is open: a tubular dorsal heart of 13 chambers, each with paired valved ostia, pumps the colourless haemolymph (plasma and haemocytes, no respiratory pigment) into the haemocoel, where it bathes the organs. Breathing is by a tracheal system, separate from the blood: 10 pairs of spiracles (2 thoracic and 8 abdominal), then tracheae and tracheoles that deliver air directly to the tissues. Open circulation does not mean no heart',
    why: 'The 13 belongs to the heart chambers and the 10 to the spiracle pairs; examiners offer each as the distractor for the other.',
    say: '13 in the heart, 10 at the sides (spiracles).',
  },
  // pp. 425–427, 431
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the cockroach’s body regions, its gut and its excretory organ?',
    a: 'Three regions, head, thorax and abdomen, under a chitinous exoskeleton of sclerites (tergites above, sternites below) joined by flexible arthrodial membrane. Head: six fused segments, compound eyes, antennae, biting and chewing mouthparts. Thorax: three segments, three pairs of legs, forewings (tegmina) on the mesothorax, hindwings on the metathorax. Abdomen: ten segments; anal cerci in both sexes, anal styles in the male only. Gut: crop (stores), gizzard (grinds), then the midgut with a ring of hepatic caeca at the foregut–midgut junction. Excretion: Malpighian tubules at the midgut–hindgut junction, uricotelic',
    why: 'Anal styles are the sexual-dimorphism marker; the cerci are in both sexes.',
    say: 'Styles for males, cerci for all.',
  },
  // pp. 425, 427, 431
  {
    topic: 3,
    kind: 'mixup',
    q: 'How does the cockroach contrast with the earthworm, point by point?',
    a: 'Earthworm: no hard skeleton, a fluid-filled coelom as a hydrostatic skeleton, closed circulation with haemoglobin in the plasma, breathing through the moist skin, nephridia. Cockroach: external chitinous skeleton, open circulation with no respiratory pigment, air tubes, Malpighian tubules and uric acid, which needs almost no water. Learn them as mirror images and a comparison question about either animal is answered from one contrast',
    why: 'The cockroach also has a decentralised nervous system: a ventral cord with ganglia (3 thoracic, 6 abdominal) and a supra-oesophageal ganglion as the “brain”, so it can survive without the head for up to about a week.',
    say: null,
  },
  // pp. 427–428, 431
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is the cockroach’s development complete metamorphosis, and what does the egg hatch into?',
    a: 'No. It is paurometabolous, incomplete and gradual: the egg hatches into a nymph, a miniature, wingless, sexually immature version of the adult (a nymph, not a larva), which grows by repeated moulting (about 13 moults), gains wing pads and becomes the adult. There is no pupal stage. The eggs, 14–16 of them, are enclosed in a capsule, the ootheca, made by the collaterial glands; the sexes are separate (dioecious), the sperm are packed as spermatophores and stored in the female’s spermatheca',
    why: 'The egg, larva, pupa, adult sequence belongs to a butterfly, not the cockroach.',
    say: null,
  },
  // pp. 426–429, 431
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A question gives a gut junction: which organ is it?',
    a: 'Tie each organ to its junction. Foregut–midgut: the ring of hepatic (gastric) caeca that pour in enzymes. Midgut–hindgut: the Malpighian tubules, about 100–150 blind yellow tubules, which take waste from the haemolymph and discharge uric acid into the gut. Crop and gizzard are foregut stores and grinders, unrelated to excretion. The same one-line method decides the number questions: the heart is 13, the spiracles 10 pairs',
    why: 'A near miss is the usual distractor: the tubules sit one junction past the caeca.',
    say: null,
  },

  // ── Topic 05 · Frog (Rana tigrina) ──
  // pp. 432–433
  {
    topic: 4,
    kind: 'remember',
    q: 'How is the frog’s body built for life in water and on land?',
    a: 'A cold-blooded amphibian, so it aestivates in summer and hibernates in winter. The body has two parts, head and trunk, with no neck or tail in the adult. The skin is moist, smooth and scale-less, with mucous glands that keep it moist and serous (poison) glands for defence, and chromatophores that give protective colouration. It breathes through the skin underwater (dissolved oxygen), through the lungs on land, and the tadpole through gills. Forelimbs have 4 digits, hindlimbs 5 webbed digits. The tympanum is the eardrum behind the eye, with no external ear; the adult is a carnivore that catches prey with a bilobed protrusible tongue',
    why: 'Ask of every frog feature whether it is for water life or land life.',
    say: 'Two passports: water young, land adult.',
  },
  // pp. 433–434
  {
    topic: 4,
    kind: 'remember',
    q: 'What chambers does the frog’s heart have, and where does each kind of blood go?',
    a: 'Closed circulation with red blood cells that are nucleated. Three main chambers, two atria and one ventricle, plus two accessory chambers: the sinus venosus, a thin, triangular, dorsal chamber that receives deoxygenated blood from the body and opens into the right atrium, and the truncus arteriosus (NCERT: conus arteriosus), the outflow chamber that carries blood out of the ventricle. The left atrium receives oxygenated blood from the lungs. Both atria empty into the single ventricle, so some oxygenated and deoxygenated blood mix, an acceptable compromise for a cold-blooded animal. The heart lies in a pericardium',
    why: 'The sinus venosus and truncus arteriosus are accessory chambers, not ventricles.',
    say: 'SV → RA, LA from lungs, one ventricle.',
  },
  // pp. 432–435, 438
  {
    topic: 4,
    kind: 'mixup',
    q: 'Tadpole or adult frog: which features belong to which, and how does the life cycle run?',
    a: 'Tadpole: a fish-like larva that is gilled, tailed, herbivorous and ammonotelic. Adult: lungs and skin, no tail, carnivorous and ureotelic. Fertilisation is external, in water: the female releases a large clutch of eggs and the male sheds sperm over them. The egg hatches into the tadpole, which undergoes metamorphosis, growing limbs, losing tail and gills, developing lungs and switching to a carnivorous diet and ureotelism. Because a larval stage intervenes, the development is indirect',
    why: 'The adult is ureotelic with mesonephric kidneys; the surrounding water lets the tadpole excrete water-cheap ammonia.',
    say: null,
  },
  // pp. 433–434, 437–438
  {
    topic: 4,
    kind: 'mistake',
    q: 'How do sperm leave a male frog, and why is the female’s route different?',
    a: 'Testes (held to the kidney by a double peritoneal fold, the mesorchium) → 10–12 vasa efferentia → kidney → Bidder’s canal → urinogenital duct (the ureter, serving both urine and sperm) → cloaca → cloacal aperture. In the female the ovaries have no functional connection to the kidney: eggs travel down separate oviducts. Oviduct and ovisac are female structures, and the truncus arteriosus is a heart structure, so none is on the sperm route',
    why: 'Memorise the asymmetry: only the testes use the kidney.',
    say: null,
  },
  // pp. 436, 438
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Which feature belongs to the tadpole but not the adult frog?',
    a: 'Do not analyse all four options: sort each into the two passports. The tadpole is the water passport: gills, herbivorous diet, ammonotelic. The adult has the land passport: lungs, carnivorous diet, urea. So among ureotelic excretion, pulmonary respiration, gills with a herbivorous diet and a three-chambered heart, only gills and herbivory are exclusively larval; the other three are adult features',
    why: 'Students who blur the stages assume the frog is always carnivorous and always breathes with lungs.',
    say: null,
  },

  // ── Additional A · Germ Layer Derivatives ──
  // p. 439
  {
    topic: 5,
    kind: 'remember',
    q: 'Which tissues and organs come from ectoderm, mesoderm and endoderm?',
    a: 'Ectoderm: outer covering (epidermis of skin), lining of mouth and anus, the central and peripheral nervous system, sensory organs (eye, ear, nose), pineal and pituitary glands, enamel of teeth. Mesoderm: muscles (skeletal, smooth, cardiac), bone and cartilage, blood and blood vessels, kidneys and ureters, lining of body cavities (peritoneum, pericardium, pleura), gonads and their ducts. Endoderm: lining of the gut and respiratory tract, liver, pancreas, thyroid, parathyroid, thymus, urinary bladder and urethra (parts from the embryonic cloaca)',
    why: 'Ecto is outside, endo is inside, meso is the middle.',
    say: null,
  },
  // pp. 439–440
  {
    topic: 5,
    kind: 'remember',
    q: 'How do you find the germ layer of a gland, and what do you do with a connective tissue question?',
    a: 'A gland takes the germ layer of the epithelium it buds from: the parotid gland buds from the ectodermal lining of the mouth, while the liver and pancreas bud from the gut tube and are endodermal. Whether a gland is serous or mucous says nothing about its layer. For a tissue question apply the three-layer rule: cartilage, bone, blood and areolar tissue are mesodermal, the epidermis is ectodermal, and the lining of the gut and the thyroid are endodermal',
    why: 'The lining of the foregut is endodermal because the foregut develops from the gut tube.',
    say: null,
  },

  // ── Additional B · Comprehensive Comparative Anatomy ──
  // pp. 441–443
  {
    topic: 6,
    kind: 'remember',
    q: 'How do the three animals compare in body plan and digestion?',
    a: 'Earthworm: metamerism, about 100–120 segments, a cuticle, epidermis and muscles with no hard skeleton, a true coelom partitioned segment by segment, a hydrostatic skeleton. Cockroach: head, thorax and abdomen (6, 3 and 10 segments), a chitinous exoskeleton, a haemocoel in place of a true coelom. Frog: head and trunk, moist scale-less skin, a true coelom, an endoskeleton of bone and cartilage. All three have a complete gut. Earthworm: detritivore, gizzard 8–9, caeca at segment 26, anus. Cockroach: omnivorous scavenger, crop and gizzard, hepatic caeca. Frog: carnivorous adult, no crop or gizzard, liver and pancreas, a cloaca',
    why: 'The cloaca of the frog is the one common opening for the digestive, urinary and reproductive systems.',
    say: null,
  },
  // pp. 442–444
  {
    topic: 6,
    kind: 'remember',
    q: 'How do they compare in circulation, respiration, excretion, nerves and reproduction?',
    a: 'Circulation: earthworm closed with haemoglobin in the plasma; cockroach open, 13-chambered heart, no pigment; frog closed, haemoglobin in nucleated RBCs. Respiration: moist skin; tracheae and 10 pairs of spiracles; skin, buccal cavity and lungs. Excretion: nephridia (three types); Malpighian tubules and uric acid; mesonephric kidneys, with a ureotelic adult and ammonotelic tadpole. Nervous: nerve ring and ventral cord; ventral cord with 3 thoracic and 6 abdominal ganglia, surviving without the head for up to about a week; dorsal brain and spinal cord, centralised. Reproduction: earthworm hermaphrodite, cross-fertilised, direct development; cockroach dioecious, internal fertilisation, ootheca, gradual development through a nymph; frog dioecious, external fertilisation, indirect development through a tadpole',
    why: 'Pick the animal first, then read down its column: that is how a comparison question is answered in seconds.',
    say: null,
  },

  // ── Additional C · Earthworm Nephridia: The Segmental Method ──
  // pp. 445–446
  {
    topic: 7,
    kind: 'remember',
    q: 'Which segments and outlets go with the three earthworm nephridia?',
    a: 'Integumentary: line the inner body wall, segment 3 to the last, open directly onto the skin (exonephric). Septal: on both sides of each septum from segment 15 to the last, open into the intestine (enteronephric). Pharyngeal: paired tufts in segments 4, 5 and 6, open into the pharynx (enteronephric). So the nephridia that open into the intestine are the septal ones',
    why: 'Say them as a line: integumentary 3 to the last, pharyngeal 4–6, septal 15 to the last.',
    say: null,
  },
  // p. 446
  {
    topic: 7,
    kind: 'remember',
    q: 'Why does integumentary start at segment 3, and which nephridia lie in the testis segments?',
    a: 'Segment 1 is the peristomium, which bears the mouth, and the prostomium is only a lobe in front of it, so integumentary nephridia, absent from segments 1 and 2, begin at segment 3. Septal nephridia begin at segment 15, so they are absent from segments 10 and 11, the testis segments; pharyngeal nephridia are confined to segments 4–6. Only the integumentary nephridia are present in the testis segments. Nephridia that discharge into the gut let water be reabsorbed as the waste passes along the digestive tract',
    why: 'Septal nephridia are the more water-conserving of the two main kinds.',
    say: null,
  },

  // ── Additional D · Cockroach Tracheal System and Malpighian Tubule Physiology ──
  // pp. 447–448
  {
    topic: 8,
    kind: 'remember',
    q: 'How does air reach the cockroach’s tissues?',
    a: 'Through 10 pairs of spiracles: 2 on the thorax (one between the prothorax and mesothorax, one between the mesothorax and metathorax) and 8 on abdominal segments 1–8, each guarded by a sphincter muscle. Each leads to tracheae that branch repeatedly, ending in microscopic fluid-filled tracheoles that supply individual cells; oxygen diffuses from the tracheole into the tissue and carbon dioxide diffuses out the same way. Rhythmic abdominal compression and expansion ventilate the system, so air enters and leaves through the spiracles',
    why: 'The air goes directly to the tissues, so the haemolymph is not the oxygen carrier; gas exchange takes place at the tracheoles, not in the spiracles.',
    say: null,
  },
  // pp. 448–449
  {
    topic: 8,
    kind: 'remember',
    q: 'How do Malpighian tubules turn waste into uric acid and save water?',
    a: 'Three steps. Uptake: the tubules take nitrogenous waste and salts from the surrounding haemolymph. Conversion: tubule cells change the waste to uric acid, non-toxic and nearly insoluble (in insects much of it is made in the fat body and secreted by these cells). Water reabsorption: as the fluid passes into the hindgut and rectum, water is reabsorbed and the solid uric acid is eliminated with minimal water loss. The tubules lie at the midgut–hindgut junction. The earthworm, living in moist soil, can afford to excrete waste that needs water to dissolve',
    why: 'Uric acid precipitates as a solid, which is ideal for a land arthropod.',
    say: null,
  },

  // ── Additional E · Frog: Arterial System, Metamorphosis Stages, and Renal Portal System ──
  // p. 450
  {
    topic: 9,
    kind: 'remember',
    q: 'Which three pairs of arteries leave the truncus arteriosus, and what is the renal portal system?',
    a: 'Carotid arteries: head and brain. Systemic arteries: body organs, limbs, kidneys and liver, carrying mixed blood. Pulmocutaneous arteries: lungs and skin, carrying deoxygenated blood to be oxygenated, the pair that goes to the lungs. The renal portal system: blood from the hindlimbs and posterior body passes through the renal portal vein into the kidneys before it returns to the heart; the frog also has a hepatic portal system. A renal portal system also occurs in fishes, reptiles and birds, and mammals have none',
    why: 'The truncus arteriosus, leading out of the single ventricle, divides into three pairs.',
    say: null,
  },
  // pp. 450–451
  {
    topic: 9,
    kind: 'remember',
    q: 'In what order do the stages of frog metamorphosis come?',
    a: 'The fertilised egg hatches into a free-swimming larva, the early tadpole, with external gills first and then internal gills, and a herbivorous diet. Next the hindlimbs appear as buds, with the tail still prominent; then the forelimbs, after the hindlimbs; the tail shortens and the gills are gradually replaced by lungs. The froglet has a tail reduced to a stump, functional lungs and a carnivorous diet beginning. In the adult the tail is completely absorbed. Excretion shifts from ammonotelic to ureotelic as the animal moves to land',
    why: 'Hindlimbs appear before forelimbs, and the forelimb-first option is the common wrong guess.',
    say: null,
  },

  // ── Additional F · Tissue Types: The Subtype Location Matrix ──
  // pp. 453–454
  {
    topic: 10,
    kind: 'remember',
    q: 'Where is each epithelial subtype found?',
    a: 'Simple squamous: alveoli of lungs, walls of blood vessels (endothelium), lining of body cavities (mesothelium); diffusion and filtration. Simple cuboidal: kidney tubules, ducts of glands, thyroid follicles; secretion and absorption. Simple columnar: inner lining of stomach, intestine and colon, gallbladder; it may bear microvilli. Ciliated: bronchioles, fallopian tubes, efferent ducts of the testis; they move mucus and fluids one way. Stratified squamous: keratinised in the skin epidermis, non-keratinised in the mouth, oesophagus, vagina and cornea. Glandular: exocrine (salivary, sweat, gastric glands, liver, pancreas) into ducts, endocrine (thyroid, adrenal, pituitary) into the blood',
    why: 'So the inner lining of the intestine is simple columnar, not simple squamous.',
    say: null,
  },
  // pp. 454–455
  {
    topic: 10,
    kind: 'remember',
    q: 'Where is each connective tissue found, and what is its key feature?',
    a: 'Areolar: beneath the skin, between muscles, around vessels and nerves; fibroblasts, macrophages and mast cells in a semi-fluid matrix, the most widely distributed. Adipose: subcutaneous layer, around the kidneys and heart, bone marrow; fat storage, insulation, cushioning. Dense regular: tendons (muscle to bone) and ligaments (bone to bone), with parallel collagen bundles. Dense irregular: dermis of skin, sclera of the eye, periosteum; fibres in many directions. Cartilage: ear pinna, nose tip, larynx, tracheal rings, ends of long bones; chondrocytes in a solid, pliable matrix, avascular. Bone: osteocytes in a hard calcified matrix, vascular. Blood: fluid matrix, RBCs, WBCs and platelets',
    why: 'Cartilage is avascular and is nourished by diffusion; that is why it heals slowly.',
    say: null,
  },

  // ── Additional G · Frog Brain: Functional Regions and Comparative Neurology ──
  // pp. 456, 458
  {
    topic: 11,
    kind: 'remember',
    q: 'Which part of the frog brain does what?',
    a: 'Forebrain: olfactory lobes (smell), a pair of cerebral hemispheres, and the diencephalon with epithalamus, thalamus and hypothalamus (body temperature, hunger, thirst). Midbrain: the paired optic lobes (optic tectum), the main visual centre. Hindbrain: the cerebellum (balance and coordination) and the medulla oblongata (vital reflexes: respiration, heart rate, swallowing), which continues as the spinal cord through the foramen magnum. The frog has 10 pairs of cranial nerves, as other amphibians and fishes do; reptiles, birds and mammals have 12',
    why: 'The optic lobes are in the midbrain and the olfactory lobes in the forebrain.',
    say: null,
  },
  // pp. 456–457
  {
    topic: 11,
    kind: 'remember',
    q: 'How do the nervous systems of earthworm, cockroach and frog compare?',
    a: 'Earthworm: dorsal cerebral ganglia above the pharynx, a double ventral ganglionated cord, partly decentralised (each segment has a ganglion), chemical sense through the skin. Cockroach: a supra-oesophageal ganglion from fused head ganglia, a double ventral ganglionated cord (3 thoracic and 6 abdominal), highly decentralised, so it can survive without the head for up to about a week; compound eyes and antennae. Frog: a dorsal brain inside the cranial cavity and a single dorsal tube, the spinal cord; centralised; vision and hearing are prominent',
    why: 'The nerve cord is double and ventral in both invertebrates and single and dorsal in the frog.',
    say: null,
  },

  // ── Additional H · Integrated Practice: Mixed NEET and Board Questions ──
  // pp. 459–460
  {
    topic: 12,
    kind: 'remember',
    q: 'What do the mixed comparison answers say about breathing, nephridia and development?',
    a: 'Breathing: the earthworm has no specialised organ and breathes through moist skin, needing a moist environment; the cockroach has a tracheal system with 10 pairs of spiracles that delivers oxygen directly to the tissues without entering the blood. Nephridia: not all open into the gut; integumentary ones open on the body surface, septal into the intestine and pharyngeal into the pharynx. Septal nephridia are the more water-conserving, since water can be reabsorbed from waste passing toward the anus, while the integumentary ones release dilute urine outside. Development: paurometabolous means the nymph resembles the adult and there is no pupal stage',
    why: 'Gas exchange in the cockroach occurs at the tracheole–tissue interface, not in the spiracles.',
    say: null,
  },
  // pp. 458–461
  {
    topic: 12,
    kind: 'remember',
    q: 'What do the mixed answers say about germ layers, frog metamorphosis and tissue identity?',
    a: 'Skeletal muscle and tendon are both mesodermal and both help in movement; the ciliated epithelium of the trachea is endodermal and moves mucus, not the body. The pituitary and pineal glands are both ectodermal, the pituitary from Rathke’s pouch (oral ectoderm) and the floor of the diencephalon, the pineal from the diencephalon roof. Metamorphosis order: hatching of the tadpole, hindlimbs, forelimbs, tail disappears. A tissue of spindle-shaped, uninucleate, involuntary, non-striated cells is smooth muscle, of the gut and blood vessels',
    why: 'The tadpole’s hatching is the first event, so the sequence begins with the tadpole, not with the limbs.',
    say: null,
  },

  // ── What NEET Actually Asks ──
  // pp. 461–464
  {
    topic: 14,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the four recurring question shapes?',
    a: 'The book’s estimate from past papers, not official figures: the cockroach is the heaviest source and animal tissues a perennial favourite, the earthworm and frog moderate, usually about one question each, and cell junctions and general organisation low but reliable. The four shapes: pure recall (a number, a location, a tissue; build flashcards of the earthworm segment numbers, the cockroach 13 and 10, and the tissue features); statement sorting (mark each statement true or false before reading the options; one wrong word or number makes it false); assertion-reason (check A and R as separate facts, then ask whether R causes A); and odd one out (the wrong option usually belongs to the adjacent category)',
    why: 'The earthworm and frog questions are short and reward those who have drilled segment numbers and organ positions.',
    say: null,
  },
  // p. 465
  {
    topic: 14,
    kind: 'mistake',
    q: 'Which six traps recur in Chapter 7 questions?',
    a: 'Blood is a connective tissue (cells in a fluid matrix). The cockroach numbers: 13 is the heart chambers, 10 the spiracle pairs (2 thoracic and 8 abdominal). Tadpole features, gills, ammonotelism and herbivory, are not adult features; ask “water life or land life?”. Tendon is muscle to bone and ligament bone to bone, both dense regular. Plasmodesmata are plant structures, whereas the animal junctions are tight, adhering and gap. And the cockroach circulation is open, with haemolymph in the haemocoel and no respiratory pigment, unlike the closed earthworm (haemoglobin in plasma) and frog',
    why: 'Each of these is a fact the examiner offers beside its look-alike from the neighbouring group.',
    say: null,
  },
];
