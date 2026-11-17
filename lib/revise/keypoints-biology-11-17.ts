/**
 * KEY POINTS for Biology Class 11, Chapter 17 (Locomotion and Movement).
 *
 * Written for test mode, in the form of the Chapter 13 and 14 files: every
 * point is a question to answer in your head, then the answer and at most one
 * more line. Four kinds, each a section on the screen: Remember (two a topic),
 * Don't mix up, Common mistakes and Exam shortcuts (one each); an Additional
 * topic has two points for its central results, except the last (What NEET
 * Actually Asks), which has one Remember and one Common mistakes. Memory lines
 * are a fifth, short section of their own, read rather than tested: the first
 * two of each topic.
 *
 * `topic`: Topics 00 to 04 are 0 to 4; Additional topics A to E are 5 to 9;
 * F (the Practice Answer Key) is 10; G (the book's What NEET Actually Asks) is
 * 11. No point refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. Remember: the
 * topic's definitions, tables, processes and Cheat sheet. Don't mix up: a
 * comparison from the topic's tables or Limiting conditions. Common mistakes:
 * its Common student pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's first memory aids, word for word, in the Chemistry form: no
 * quotation marks and no markup, a label (a word of ours, or the aid's own
 * "troponin =") before the line. Topic 00 prints one aid, Topics 01, 02 and 03
 * print three each (the first two are used; a topic shows two lines at most),
 * and Topic 04 prints one line that holds two mnemonics (MMT for the muscle
 * side, GAO for the bone and joint side), used as its two lines; so the
 * chapter has nine lines. Additional topics F and G and Additional topics A to
 * E have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - voluntary movement: the chapter says only muscular movement is the
 *   voluntary, large-scale type, and that amoeboid and ciliary movements are
 *   involuntary; smooth and cardiac muscle also move involuntarily, so the
 *   points say skeletal muscle is the voluntary one and that amoeboid and
 *   ciliary movement are cellular; "locomotion never involves muscles" is not
 *   used (Amoeba, ciliates and sperm locomote without muscle; the point is
 *   about humans);
 * - fatigue: the table's "skeletal muscle fatigues quickly" and cardiac
 *   "non-fatigued" are overgeneral; the points say red skeletal fibres resist
 *   fatigue and white fibres tire sooner, and that cardiac muscle is resistant
 *   to fatigue; cardiac cells are "usually" uninucleate; smooth and cardiac
 *   muscle are not said to have "little" or no SR;
 * - lactic acid: "about 80% is reconverted to glycogen in the liver" is not
 *   credited (not in the NCERT text); no twitch durations in milliseconds, no
 *   "about 300 000 vesicles" and no plasma calcium figure in mg per dL are
 *   given;
 * - exam statements: "the single most-tested", "almost every NEET/CUET
 *   sequencing item", "the single highest-yield fact", "non-negotiable",
 *   "every NEET cycle" and the like are not repeated; the What NEET Actually
 *   Asks points say the distribution is the book's estimate from past papers
 *   and give no counts;
 * - the axial count: the chapter's list of the 80 axial bones (skull 22,
 *   column 26, sternum, 12 pairs of ribs) adds up to 73 without the six ear
 *   ossicles and the hyoid; the point gives 22 + 6 + 1 + 26 + 1 + 24 = 80, and
 *   says the skull proper has 22 bones; "only the mandible is movable" is not
 *   used; the sternum–rib joint is not claimed beyond the chapter's use of it
 *   as a cartilaginous example, and the synchondrosis is said to ossify when
 *   growth ends (not "after puberty", not "only in children");
 * - tetany: it is low Ca<sup>2+</sup> in the body fluid raising the
 *   excitability of nerve and muscle membranes, not a failure of the calcium
 *   signal inside the fibre; "never the other two" is not used; muscular
 *   dystrophy is genetic and progressive, with Duchenne given as the example
 *   (not "always appears in childhood"); osteoarthritis is not defined as
 *   inflammation;
 * - fibre types: "fast-twitch fibres have low oxidative capacity" is said as
 *   "rely mainly on anaerobic glycolysis and tire sooner", and red and white
 *   fibres are matched to slow and fast "mostly"; training changes fibres
 *   largely within their type, and "never converts" is not used;
 * - ossification and joints: the chapter's "flat bones: skull vault,
 *   clavicle, maxilla" is given as "the flat bones of the skull vault" for
 *   the intramembranous pathway; "most bones: all long bones" is "the long
 *   bones"; the E practice answer's sclerostin as a signal that suppresses
 *   osteoclasts is not used (the chapter's own note says it inhibits bone
 *   formation; osteoprotegerin is the signal that opposes osteoclasts);
 *   the chapter now gives the clavicle as the exception among the long
 *   bones, which these points do not need;
 * - sprain and strain: "neither involves a fracture" is not used;
 *   "neurological, not structural" is said as "partly because the nervous
 *   system reduces drive to the damaged fibres";
 * - assertion–reason: the fourth option is A false, R true (the book's
 *   "both false" is not used); the A-band "never changes length" is said as
 *   keeping its width in the sliding filament account; "intervertebral discs
 *   are cartilaginous" is not used for the whole vertebral column.
 *
 * Markup is the chapter's own: <i> for scientific names (Amoeba, Paramecium),
 * <sub> and <sup>, no fraction occurs, no em dash. A value is kept with its
 * unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Types of Movement ──
  // pp. 1013–1014
  {
    topic: 0,
    kind: 'remember',
    q: 'How do movement and locomotion differ, and why do animals locomote?',
    a: 'Movement is any change in position of a body part (a wave of the hand, beating cilia, a churning gut). Locomotion is the movement that carries the whole organism from one place to another (walking, swimming, flying). So locomotion is a kind of movement, but a beating heart or a waving hand is movement without locomotion. Animals locomote to search for food, shelter, a mate and breeding grounds, to reach a favourable climate, and to escape predators or danger',
    why: 'The test of locomotion is whether the whole organism changes place.',
    say: null,
  },
  // pp. 1014–1016, 1018
  {
    topic: 0,
    kind: 'remember',
    q: 'Which three types of movement does the human body show, and where?',
    a: 'Amoeboid: cytoplasm streams out as pseudopodia, driven by the cytoskeleton (microfilaments); leucocytes and macrophages crawl this way. Ciliary: the cilia of ciliated epithelium beat in coordinated waves, in the trachea (sweeping mucus and dust out) and in the oviduct (moving the ovum along). Muscular: muscles pull on the skeleton and move the limbs, jaws and tongue, which is the movement behind human locomotion',
    why: 'Cilia in the trachea and oviduct move substances along the surface; the organ itself stays in place.',
    say: 'types → Amoeboid = Army (WBCs crawl), Ciliary = Conveyor (sweeps along), Muscular = Mover (relocates you).',
  },
  // pp. 1014–1015
  {
    topic: 0,
    kind: 'mixup',
    q: 'What powers amoeboid, ciliary and muscular movement?',
    a: 'Amoeboid movement is driven by the cytoskeleton: microfilaments assemble and disassemble and push the cytoplasm into pseudopodia. Ciliary movement is driven by microtubules arranged in a ring inside each cilium, which slide against one another and bend it. Muscular movement uses a different protein pair, actin and myosin. Cilia and flagella share the ring of microtubules and differ mainly in length and number; the tail of a human sperm is a flagellum',
    why: 'The first two use the cytoskeleton arranged in two ways; muscle uses actin and myosin on a larger scale.',
    say: null,
  },
  // p. 1018
  {
    topic: 0,
    kind: 'mistake',
    q: 'Which slips recur on movement and locomotion?',
    a: 'Treating the two as the same: locomotion is the subset where the whole organism changes place. Giving amoeboid movement to the wrong cells: it is shown by leucocytes and macrophages, not red blood cells or neurons. Thinking the cilia of the trachea or oviduct carry the body: they move mucus, dust or the ovum. Calling muscular movement voluntary across the board: skeletal muscle is voluntary, while smooth and cardiac muscle move involuntarily',
    why: 'In humans, muscular movement is the link to locomotion, since the other two are cellular.',
    say: null,
  },
  // p. 1018
  {
    topic: 0,
    kind: 'shortcut',
    q: 'What one question sorts a movement MCQ?',
    a: 'Ask whether the whole organism changes place. If not, it is movement without locomotion. If a cell is crawling, it is amoeboid; if a surface is being swept, it is ciliary; if a limb or jaw moves, it is muscular',
    why: 'One filter handles each option without a long read.',
    say: null,
  },

  // ── Topic 01 · Muscle Types & Structure ──
  // pp. 1021–1023
  {
    topic: 1,
    kind: 'remember',
    q: 'How is a skeletal muscle built, from the whole muscle down to the proteins?',
    a: 'Muscle → fascicle (a bundle of fibres) → muscle fibre (one long multinucleate cell, with a sarcolemma, sarcoplasm and sarcoplasmic reticulum) → myofibril → sarcomere, the segment between two Z-lines. In a sarcomere the A-band is dark and holds both filaments, the I-band is light with thin filaments only, and the H-zone is the central part of the A-band with thick filaments only. The thin filament is actin (globular G-actin polymerised into helical F-actin) with tropomyosin and troponin, which mask the myosin-binding sites at rest; the thick filament is myosin, whose heads are an ATPase',
    why: 'The sarcoplasmic reticulum is the calcium store of the fibre.',
    say: 'actin → Globular = monomer',
  },
  // pp. 1021, 1025
  {
    topic: 1,
    kind: 'remember',
    q: 'How do skeletal, smooth and cardiac muscle compare?',
    a: 'Skeletal: striated, voluntary, long cylindrical unbranched multinucleate cells attached to bones, for locomotion and posture. Smooth: not striated, involuntary, spindle-shaped uninucleate cells in the walls of hollow organs such as the gut and blood vessels. Cardiac: striated, involuntary, branched cells (usually uninucleate) joined by intercalated discs so the heart contracts as one unit; it is found in the heart wall and resists fatigue',
    why: 'Red skeletal fibres (many mitochondria, myoglobin, aerobic) also resist fatigue, while white fibres tire sooner.',
    say: 'muscle-type filter = Striped? Branched?',
  },
  // pp. 1020, 1025
  {
    topic: 1,
    kind: 'mixup',
    q: 'Does striated mean voluntary?',
    a: 'No. Striations come from the arrangement of the myofilaments, and control comes from the nerve supply. Skeletal muscle is striated and voluntary, cardiac muscle is striated and involuntary, and smooth muscle is not striated and is involuntary',
    why: 'Keep the two axes apart: striations describe structure, control describes innervation.',
    say: null,
  },
  // p. 1025 (Q1 and the pitfalls)
  {
    topic: 1,
    kind: 'mistake',
    q: 'Which slips recur on muscle structure?',
    a: 'Reversing F-actin and G-actin: G is the globular monomer and F the polymer. Calling smooth muscle free of actin and myosin: it contracts, so it has both, without the orderly striated arrangement. Giving intercalated discs to every striated muscle: they belong to cardiac muscle. Placing the calcium store in the membrane: the store is the sarcoplasmic reticulum, and the membrane is the sarcolemma',
    why: 'Lock the first with Globular = monomer.',
    say: null,
  },
  // p. 1025
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do two checks identify a muscle type?',
    a: 'Ask whether it is striped, then whether it is branched. Striped and branched is cardiac; striped and unbranched is skeletal; not striped is smooth',
    why: 'Branching separates cardiac from skeletal, which are both striped.',
    say: null,
  },

  // ── Topic 02 · Muscle Contraction Mechanism ──
  // pp. 1027–1028
  {
    topic: 2,
    kind: 'remember',
    q: 'Which bands change in a sarcomere during contraction, and which stay the same?',
    a: 'By the sliding filament theory the thin (actin) filaments slide over the thick (myosin) filaments, and neither filament changes length. The overlap grows, the Z-lines are pulled inward and the sarcomere shortens. The A-band, the length of the thick filaments, keeps its width, while the I-band and the H-zone shrink',
    why: 'A sarcomere is one A-band plus two half I-bands, between Z-lines.',
    say: 'bands → A stays, I and H shrink',
  },
  // pp. 1028–1029
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the sequence from nerve signal to relaxation?',
    a: 'A signal passes along the motor neuron; acetylcholine is released at the neuromuscular junction; an action potential spreads along the sarcolemma; the sarcoplasmic reticulum releases Ca<sup>2+</sup>. Ca<sup>2+</sup> binds troponin C and the troponin–tropomyosin complex uncovers the active sites on actin. A myosin head binds to form a cross-bridge and pivots in the power stroke, pulling the actin towards the centre of the sarcomere; a new ATP detaches the head and re-cocks it, and the cycle repeats. When stimulation stops, Ca<sup>2+</sup> is pumped back into the sarcoplasmic reticulum, the sites are covered again and the muscle relaxes. The energy change is chemical to mechanical',
    why: 'Under heavy load a fibre turns to anaerobic respiration, and the lactic acid that builds up is the basis of fatigue.',
    say: null,
  },
  // p. 1028
  {
    topic: 2,
    kind: 'mixup',
    q: 'What do the troponin subunits do, and what is the direct trigger of contraction?',
    a: 'TpC binds Ca<sup>2+</sup>, TpT binds tropomyosin and TpI inhibits the binding of actin to myosin. The nerve impulse comes first, but the direct trigger that exposes the sites on actin is Ca<sup>2+</sup> released from the sarcoplasmic reticulum',
    why: 'Calcium to TpC, tropomyosin to TpT, inhibition to TpI.',
    say: 'troponin = Calcium, Tropomyosin, Inhibit',
  },
  // p. 1032
  {
    topic: 2,
    kind: 'mistake',
    q: 'Which slips recur on the sliding filament cycle?',
    a: 'Saying the filaments shorten: they slide, and the A-band keeps its width. Giving ATP one job: it powers the stroke and also detaches the head from actin, so without fresh ATP the heads stay attached, as in rigor mortis. Taking the nerve signal for the trigger: the direct trigger is Ca<sup>2+</sup>',
    why: 'The width of the A-band is the quick check on the first slip.',
    say: null,
  },
  // p. 1032
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What fixed spine helps in an ordering question?',
    a: 'Signal, then acetylcholine, then action potential, then Ca<sup>2+</sup>, then sliding. For a band question, recite: A stays, I and H shrink',
    why: 'The cross-bridge steps hang off this spine, so place each of them after the release of Ca<sup>2+</sup>.',
    say: null,
  },

  // ── Topic 03 · Skeletal System & Joints ──
  // pp. 1035, 1038
  {
    topic: 3,
    kind: 'remember',
    q: 'Into which three structural classes are joints divided?',
    a: 'Fibrous: bones bound by fibrous tissue, essentially immovable, as in the sutures of the skull. Cartilaginous: bones joined by cartilage, slightly movable, as in the intervertebral discs and the growth cartilage of young long bones. Synovial: freely movable, with a fluid-filled synovial cavity, synovial fluid, and articular cartilage on the bone ends',
    why: 'Skull sutures are joints that do not move, so joint does not mean mobile.',
    say: 'classes → joints are F-C-S, never bony',
  },
  // pp. 1034–1035, 1038
  {
    topic: 3,
    kind: 'remember',
    q: 'How are the 206 bones divided, and how many are in the wrist and ankle?',
    a: '206 = 80 axial + 126 appendicular. The 80 axial bones are the skull (22: 8 cranial + 14 facial), 6 ear ossicles, the hyoid, the vertebral column (26), the sternum (1) and the ribs (24). The column is 7 cervical, 12 thoracic, 5 lumbar, the sacrum (5 fused) and the coccyx (4 fused). Ribs: 12 pairs = 7 true + 3 false + 2 floating. The appendicular skeleton is the limbs with the pectoral girdle (clavicle, scapula) and the pelvic girdle (ilium, ischium, pubis). The wrist has 8 carpals and the ankle 7 tarsals',
    why: 'The chapter’s region list leaves out the ossicles and the hyoid, which complete the 80.',
    say: 'wrist 8 > ankle 7',
  },
  // pp. 1035–1036
  {
    topic: 3,
    kind: 'mixup',
    q: 'Which synovial joint type goes with which example?',
    a: 'Ball-and-socket (movement in all directions): shoulder (humerus and glenoid cavity) and hip (femur and acetabulum). Hinge (one plane): knee and elbow. Pivot (rotation about an axis): atlas and axis. Gliding (sliding over flat surfaces): between the carpals (and tarsals). Saddle (two planes): carpal and metacarpal of the thumb',
    why: 'Ball-and-socket moves in every direction, a hinge in a single plane.',
    say: null,
  },
  // p. 1038
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which slips recur on the skeleton and joints?',
    a: 'Adding a bony class of joint: the three structural classes are fibrous, cartilaginous and synovial. Assuming every joint moves: skull sutures are immovable. Swapping ball-and-socket with hinge. Mixing up tendon (muscle to bone) and ligament (bone to bone). Forgetting the rib split: 7 true + 3 false + 2 floating = 12 pairs',
    why: 'Shoulder and hip are ball-and-socket; knee and elbow are hinge.',
    say: null,
  },
  // p. 1038
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which five anchors settle a synovial joint question?',
    a: 'Shoulder and hip: ball-and-socket. Knee and elbow: hinge. Atlas and axis: pivot. Thumb: saddle. Carpals: gliding',
    why: 'A matching item tends to reuse these pairs in different wording, so start with the pair you are sure of.',
    say: null,
  },

  // ── Topic 04 · Disorders of the Muscular & Skeletal System ──
  // pp. 1041–1042
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the three muscle-side disorders, and what causes each?',
    a: 'Myasthenia gravis: an autoimmune attack on the acetylcholine receptors at the neuromuscular junction, causing fatigue, weakening and paralysis of skeletal muscle. Muscular dystrophy: a genetic, progressive degeneration of skeletal muscle (in Duchenne dystrophy a defective dystrophin). Tetany: rapid spasms of muscles caused by low Ca<sup>2+</sup> in the body fluid, often after parathyroid malfunction',
    why: 'Myasthenia is a fault in the signal reaching the muscle, not in myosin sliding.',
    say: 'muscle side → MMT on the muscle side (Myasthenia–autoimmune, Muscular dystrophy–genes, Tetany–calcium)',
  },
  // pp. 1041–1043
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the three bone and joint disorders, and what causes each?',
    a: 'Arthritis: inflammation of joints, with pain, stiffness and swelling. Gout: inflammation of the affected joints from uric acid crystals building up in them, one type of arthritis. Osteoporosis: an age-related fall in bone mass, often with low estrogen, giving brittle bones and a higher risk of fractures',
    why: 'Osteoporosis is a bone disorder, not a joint inflammation.',
    say: 'bone and joint side → GAO on the bone/joint side (Gout–uric acid, Arthritis–inflammation, Osteoporosis–bone mass)',
  },
  // pp. 1042–1045
  {
    topic: 4,
    kind: 'mixup',
    q: 'Tetany and osteoporosis both involve calcium: how do they differ?',
    a: 'Tetany is a problem of the body fluid: low Ca<sup>2+</sup> there leaves muscles over-excitable and gives spasms. Osteoporosis is a problem of the bone: bone mass falls and fractures become likelier. Osteoporosis (loss of bone mass) is also a different disorder from osteoarthritis (a joint disorder)',
    why: 'Low blood Ca<sup>2+</sup> gives tetany; loss of bone calcium gives osteoporosis.',
    say: null,
  },
  // p. 1045
  {
    topic: 4,
    kind: 'mistake',
    q: 'Which disorder definitions are commonly misstated?',
    a: 'Swapping the causes of gout (uric acid crystals in joints) and tetany (low calcium). Calling muscular dystrophy age-related shortening: it is genetic degeneration. Saying myasthenia gravis stops myosin from sliding: it is an autoimmune attack at the neuromuscular junction. Filing osteoporosis with arthritis and gout: it is a bone disorder',
    why: 'Learn the correct version, because the wrong ones appear as distractors.',
    say: null,
  },
  // pp. 1045–1046
  {
    topic: 4,
    kind: 'shortcut',
    q: 'What two-step filter sorts a disorder question?',
    a: 'First decide whether it is on the muscle side or the bone and joint side, then look for the keyword: autoimmune, genetic, low Ca<sup>2+</sup>, uric acid or low estrogen. Clues: drooping eyelids or trouble swallowing point to myasthenia, childhood limb weakness (as in Duchenne dystrophy) to muscular dystrophy, hand and foot spasms to tetany, a hot swollen big-toe joint to gout, and no symptoms until a fracture to osteoporosis',
    why: 'The keyword gives the disorder in one step.',
    say: null,
  },

  // ── Additional A · Neuromuscular Junction and Signal Transmission ──
  // pp. 1047–1048
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the sequence at the neuromuscular junction from nerve impulse to muscle action potential?',
    a: 'The action potential reaches the axon terminal; Ca<sup>2+</sup> enters through voltage-gated calcium channels; synaptic vesicles release acetylcholine (ACh); ACh binds the nicotinic receptors on the motor end plate, which are ligand-gated cation channels, and the net entry of Na<sup>+</sup> depolarises the membrane locally (the end-plate potential); if it reaches threshold, a muscle action potential follows. Acetylcholinesterase then splits ACh into acetic acid and choline, ending the signal, and choline is taken back up to make ACh again',
    why: 'ACh is made from acetyl-CoA and choline by choline acetyltransferase.',
    say: null,
  },
  // pp. 1048–1050
  {
    topic: 5,
    kind: 'remember',
    q: 'How do myasthenia gravis and curare differ at the neuromuscular junction?',
    a: 'Both act on the ACh receptors of the postsynaptic membrane and weaken transmission. In myasthenia gravis autoantibodies leave fewer working receptors, so the end-plate potential is weak and the muscle tires with use. Curare is a competitive antagonist: it binds the receptors without opening them, and the paralysis wears off as it is cleared. An acetylcholinesterase inhibitor helps in myasthenia because ACh lasts longer and has more chances to bind the receptors that remain',
    why: 'The drug raises ACh in the cleft; it does not repair the receptors.',
    say: null,
  },

  // ── Additional B · Graded Muscle Responses: Twitch, Summation, Tetanus, and Fatigue ──
  // pp. 1050–1051, 1053
  {
    topic: 6,
    kind: 'remember',
    q: 'What are a twitch, summation and tetanus?',
    a: 'A twitch is the response to a single brief stimulus, with a latent period, a contraction phase and a relaxation phase. If a second stimulus arrives before relaxation is complete, the second contraction builds on the first (temporal summation). When stimuli come so fast that the muscle cannot relax between them, the twitches fuse into a smooth, sustained contraction, tetanus; in incomplete tetanus small drops in tension still show between the peaks',
    why: 'Tetanus here is a state of contraction, and it is not the disorder tetany.',
    say: null,
  },
  // pp. 1051–1053
  {
    topic: 6,
    kind: 'remember',
    q: 'How does a whole muscle grade its force when each fibre is all-or-none?',
    a: 'By recruiting more motor units (small, slow-twitch units first, the size principle) and by firing them more often, so that twitches summate. Fast-twitch fibres have high myosin ATPase activity, contract fast, rely mainly on anaerobic glycolysis and tire sooner; slow-twitch fibres have many mitochondria and much myoglobin, contract slowly and resist fatigue. Phosphocreatine regenerates ATP in the first seconds of intense effort',
    why: 'One fibre is all-or-none; the whole muscle is graded.',
    say: null,
  },

  // ── Additional C · Skeletal Development and Synovial Joint Architecture ──
  // pp. 1053–1054
  {
    topic: 7,
    kind: 'remember',
    q: 'How do intramembranous and endochondral ossification differ?',
    a: 'Bones start as mesenchyme. In intramembranous ossification bone forms directly in the mesenchymal membrane, as in the flat bones of the skull vault. In endochondral ossification a hyaline cartilage model is replaced by bone: a primary centre appears in the diaphysis (shaft) and secondary centres in the epiphyses (ends) around or after birth, as in the long bones. The epiphyseal plate stays between them as the growth zone',
    why: 'From the epiphysis the plate runs through resting, proliferation, hypertrophy, calcification and ossification zones; when it is replaced by bone (the epiphyseal line), lengthening stops.',
    say: null,
  },
  // pp. 1054–1057
  {
    topic: 7,
    kind: 'remember',
    q: 'What does a synovial joint contain, and how is its cartilage fed?',
    a: 'Articular (hyaline) cartilage on the bone ends gives a smooth, low-friction surface; the synovial membrane secretes synovial fluid; a fibrous capsule and ligaments hold the joint and limit its movement; menisci (fibrocartilage pads, as in the knee) act as shock absorbers. Synovial fluid is a filtrate of blood plasma with hyaluronic acid and lubricin. Articular cartilage has no blood vessels, so it is nourished mainly by diffusion from the synovial fluid, and it heals slowly',
    why: 'Elastic cartilage, not hyaline, forms the external ear.',
    say: null,
  },

  // ── Additional D · Calcium Homeostasis and the Muscle–Bone Connection ──
  // pp. 1057–1058
  {
    topic: 8,
    kind: 'remember',
    q: 'How do PTH, calcitonin and active vitamin D control blood calcium?',
    a: 'PTH (parathyroid gland) is released when blood Ca<sup>2+</sup> falls: it stimulates osteoclasts to resorb bone, increases Ca<sup>2+</sup> reabsorption in the kidney and helps activate vitamin D. Calcitonin (parafollicular cells of the thyroid) is released when it rises and inhibits osteoclasts. Active vitamin D (calcitriol, 1,25-dihydroxycholecalciferol, made in the kidney) is a major stimulator of Ca<sup>2+</sup> absorption in the intestine and is needed for bone mineralisation',
    why: 'PTH raises blood calcium and calcitonin lowers it.',
    say: null,
  },
  // pp. 1058–1060
  {
    topic: 8,
    kind: 'remember',
    q: 'How does calcium link tetany and osteoporosis, and what are rickets and osteomalacia?',
    a: 'Low Ca<sup>2+</sup> in the body fluid, for example after parathyroid failure, leaves nerve and muscle membranes over-excitable and gives the spasms of tetany. Osteoporosis is a chronic loss of bone mineral with usually normal blood calcium, so calcium is the link but a different compartment is short. Lack of vitamin D weakens the mineralisation of bone: rickets in children (open epiphyseal plates, enlarged ends, bowed long bones) and osteomalacia in adults (soft bone prone to fracture)',
    why: 'Hypocalcaemia is a blood problem; osteoporosis is a bone problem.',
    say: null,
  },

  // ── Additional E · Musculoskeletal Responses to Exercise and Injury: Clinical Integration ──
  // pp. 1060–1061
  {
    topic: 9,
    kind: 'remember',
    q: 'What do exercise, joint injury, muscle strain and disuse do to the musculoskeletal system?',
    a: 'Endurance training adds mitochondria and myoglobin within slow-twitch fibres (the fibres adapt largely within their type, and the muscle looks darker red); resistance training enlarges fast-twitch fibres. A joint injury can fill the joint with blood (haemarthrosis), and inflammation can raise the synovial fluid (joint effusion). A strained muscle is weak partly because the nervous system reduces drive to the damaged fibres. Disuse removes loading from bone, so bone is resorbed faster than it is deposited and bone density falls',
    why: 'Bone lost in disuse shows as lower bone density, not as a high blood calcium.',
    say: null,
  },
  // pp. 1061–1062
  {
    topic: 9,
    kind: 'remember',
    q: 'How do a sprain and a strain differ?',
    a: 'A sprain injures a ligament (bone to bone), usually by a twisting force on a joint, so it is a joint injury; common sites are the ankle and knee. A strain injures muscle fibres or a tendon (muscle to bone) by forced stretching or excessive contraction, so it is a muscle injury; common sites are the hamstring and quadriceps. Haemarthrosis is blood in the joint cavity; joint effusion is excess synovial fluid',
    why: 'Ligament means sprain; muscle or tendon means strain.',
    say: null,
  },

  // ── Additional F · Practice Answer Key: Full Solutions ──
  // pp. 1063–1064
  {
    topic: 10,
    kind: 'remember',
    q: 'What do the key’s answers fix for the neuromuscular junction and graded responses?',
    a: 'Acetylcholinesterase splits ACh into acetic acid and choline. The sequence runs impulse, Ca<sup>2+</sup> entry, ACh release, receptor binding, Na<sup>+</sup> entry, end-plate potential, muscle action potential. A twitch has latent, contraction and relaxation phases; incomplete tetanus shows wavelets between peaks and complete tetanus a smooth plateau. Phosphocreatine passes its phosphate to ADP and makes ATP quickly; small slow-twitch units are recruited first; fast-twitch fibres tire sooner because anaerobic glycolysis builds up H<sup>+</sup> (from lactic acid) and inorganic phosphate',
    why: 'The key prints answers without the questions, so each line is a model answer.',
    say: null,
  },
  // pp. 1064–1065
  {
    topic: 10,
    kind: 'remember',
    q: 'What do the key’s answers fix for bone, calcium and injury?',
    a: 'The humerus forms by endochondral ossification, with the primary centre in the shaft and secondary centres in the ends; the epiphyseal plate becomes the epiphyseal line. Synovial fluid has hyaluronic acid and lubricin. PTH raises blood calcium by acting on osteoclasts and calcitonin lowers it by suppressing them. Rickets is in children and osteomalacia in adults. In the tetany and osteoporosis assertion–reason item, A is false and R is true. A tear of a ligament is a sprain',
    why: 'Osteoporosis is a bone-mass problem with usually normal blood calcium, which is why A is false.',
    say: null,
  },

  // ── Additional G · What NEET Actually Asks ──
  // pp. 1065–1068
  {
    topic: 11,
    kind: 'remember',
    q: 'Which topics and question shapes does the book say recur, and how far can that be trusted?',
    a: 'The distribution is the book’s estimate from past papers, not official figures. It puts the contraction mechanism first, then the skeleton and joints, then muscle types and structure, then movement types and disorders. Five shapes come back: which band changes (A stays, I and H shrink); the incorrect-statement item (look for a swapped pair of concepts); assertion–reason (judge A and R separately, then ask whether R explains A); match the column; and identifying a labelled diagram',
    why: 'Use the weighting to decide what to revise first, not as a count of questions.',
    say: null,
  },
  // pp. 1068–1069
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'These recurring wrong options come from the book’s estimate of past papers, not from official figures. The A-band shortens: it keeps its width while the I-band and H-zone shrink. Striated means voluntary: cardiac muscle is striated and involuntary. Movement means locomotion: locomotion is the subset where the whole organism changes place. G-actin is the polymer: G is the globular monomer and F the polymer. Shoulder as gliding or atlas–axis as ball-and-socket: the shoulder is ball-and-socket and atlas–axis is pivot. A bony class of joint: there are three structural classes. Gout from low calcium and tetany from uric acid: gout is uric acid and tetany is low calcium. Myasthenia gravis as a block of myosin sliding: it is autoimmune, at the junction',
    why: 'In an assertion–reason item two true statements may have no causal link, so check that R explains A.',
    say: null,
  },
];
