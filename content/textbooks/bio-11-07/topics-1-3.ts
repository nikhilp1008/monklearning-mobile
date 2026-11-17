import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 7 (Structural Organisation in Animals), Topics 01 to 03:
 * pp. 409 to 424 of the Class 11 Biology Master Reference, word for word. The
 * chapter title page (p. 407) and the contents (p. 408 and the top of p. 409)
 * are not copied. The pages hold five sections, each with its own heading
 * (DECISIONS-B11 11): Topic 01 Animal Tissues (pp. 409–416), Topic 02 Organ and
 * Organ System (p. 417, one page, cut at its two headings), Topic 03 Earthworm
 * (Pheretima posthuma) (pp. 418–424). Topics 01 and 03 are cut at the book’s
 * Sections 1 to 8. Figure 7.1 (caption p. 412, drawn p. 413) and Figure 7.2
 * (caption p. 421, drawn p. 422) are redrawn in lib/diagrams/biology-11-07.ts;
 * these pages draw nothing else. Scientific names are italic; emphasis italics
 * are dropped; em dashes are repunctuated (house rule).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 409–416 ─────────────────────────
  {
    n: '01',
    title: 'Animal Tissues',
    kalam:
      'A tissue is a collection of cells, similar in structure and origin, that work together to carry out a particular function.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic for NEET: 1–2 direct questions almost every year (the book’s estimate from past papers, not official figures): match-the-column, “odd one out,” and locate-the-tissue items. CUET reuses NCERT line-statements verbatim. CBSE Boards set a 2–3 mark question on tissue types, distinguishing features, or a labelled diagram. The whole of human and animal physiology is built on this foundation, so it pays back many times over.',
      },
      {
        t: 'p',
        html: 'Imagine you walk into a large railway station like Howrah or New Delhi. Thousands of people are present, but they are not standing around randomly: the ticket clerks sit together behind counters, the porters work the platforms in their red shirts, the security staff guard the gates, and the announcers sit in a control room. People doing the same kind of job are grouped together so the station runs smoothly. Your body works exactly the same way. A single cell, however clever, cannot run an entire organ on its own. So cells of a similar type, doing a similar job, group together, and that group is what we call a <b>tissue</b>.',
      },
      {
        t: 'p',
        html: 'So a tissue is a collection of cells, similar in structure and origin, that work together to carry out a particular function. The cells are usually held together and supported by some non-living material around them, and this changes from tissue to tissue: sometimes it is almost nothing, sometimes it is a thick jelly, and sometimes it is rock-hard like bone.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture four teams in that railway station. The <b>reception/counter staff</b> form a continuous, neat lining at every boundary: they cover surfaces, let things in and out, and guard against intruders. That is your <b>epithelial tissue</b>. The <b>maintenance crew</b> that fills the gaps, ties beams together, cushions the floors and stores spare supplies: that is your <b>connective tissue</b>, famous for having lots of “stuff” (matrix) between very few cells. The <b>engines and movers</b> that physically pull, push and contract: that is <b>muscular tissue</b>. And the <b>announcers and signal operators</b> who carry messages instantly across the whole station: that is <b>neural tissue</b>. Four teams, four jobs: covering, connecting, contracting, and communicating. Every complex animal, from an earthworm to a human, is built from just these four basic tissue types.',
      },
      {
        t: 'p',
        html: 'The reason this four-way classification is so powerful is that it is based on function and structure together, not on where the tissue happens to sit. Epithelial tissue lines your gut, your blood vessels and your kidney tubules, in a different cell shape at each address but with the same basic design.',
      },
      { t: 'p', html: '<b>Limiting conditions & where the neat picture bends:</b>' },
      {
        t: 'p',
        html: '• This four-tissue scheme applies to <b>multicellular animals</b>. It is not used for plants (which have their own tissue systems) or for single-celled organisms.<br>• The boundaries are not always razor-sharp. <b>Blood</b>, for instance, is classified as a connective tissue even though it has a fluid matrix and does no “connecting” in the everyday sense: it is grouped there because of its origin and its large matrix-to-cell ratio. Students find this counter-intuitive. Examiners often use this.<br>• Many real organs are <b>composite</b>: the wall of your intestine contains all four tissue types layered together. So “which tissue?” only makes sense for a part of an organ, not the whole organ.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      {
        t: 'p',
        html: '(Biology fork: no SI units or dimensional formulae apply; the operative quantities here are structure, location and function.)',
      },
      {
        t: 'def',
        term: 'Tissue',
        html: 'a group of structurally similar cells, with a common origin, performing a common function, together with the intercellular substance around them.',
      },
      {
        t: 'table',
        title: 'The four animal tissues at a glance',
        head: ['Tissue', 'Defining feature', 'Matrix / intercellular material', 'Core function'],
        rows: [
          [
            'Epithelial',
            'Cells packed tightly, sit on a <b>basement membrane</b>; one free (apical) surface',
            'Almost none',
            'Covering, lining, protection, secretion, absorption',
          ],
          [
            'Connective',
            'Few cells in <b>abundant matrix</b>; richly varied',
            'Large: fluid, jelly, or solid',
            'Linking, supporting, packing, storing, transport, defence',
          ],
          [
            'Muscular',
            'Elongated <b>contractile</b> cells (fibres) with contractile proteins',
            'Little',
            'Movement, posture, propulsion of contents',
          ],
          [
            'Neural',
            '<b>Excitable</b> cells (neurons) + supporting neuroglia',
            'Little',
            'Receiving, conducting and transmitting impulses',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Epithelial sub-types</b> (by cell shape / layering):<br>• Simple squamous: single layer of flat, tile-like cells; forms diffusion boundaries (e.g. alveoli, walls of blood vessels).<br>• Simple cuboidal: cube-shaped; secretion and absorption (e.g. kidney tubules, ducts of glands).<br>• Simple columnar: tall, slender; lining of the stomach and intestine; may bear <b>microvilli</b>.<br>• Ciliated: columnar/cuboidal cells bearing cilia; move mucus/fluids (e.g. bronchioles, fallopian tubes).<br>• Compound (stratified): many layers; protective, with little role in absorption (e.g. skin epidermis, lining of the buccal cavity and pharynx).<br>• <b>Glands</b> arise from epithelium: exocrine (secrete via ducts: mucus, sweat, saliva) and endocrine (ductless: hormones into blood).',
      },
      {
        t: 'p',
        html: '<b>Connective tissue family:</b><br>• Loose connective: <b>areolar</b> (fibroblasts, macrophages, mast cells in a semi-fluid matrix; beneath skin and epithelia) and <b>adipose</b> (fat-storing).<br>• Dense connective: <b>dense regular</b> (orderly collagen bundles: <b>tendons</b> join muscle→bone, <b>ligaments</b> join bone→bone) and <b>dense irregular</b> (in the skin/dermis).<br>• Specialised connective: <b>cartilage</b> (matrix solid yet pliable, cells = <b>chondrocytes</b>, avascular), <b>bone</b> (hard matrix of calcium salts, cells = <b>osteocytes/osteoblasts</b>), and <b>blood</b> (fluid matrix = plasma).',
      },
      {
        t: 'table',
        title: 'Muscular tissue: the three types',
        head: ['', 'Skeletal', 'Smooth', 'Cardiac'],
        rows: [
          ['Striations', 'Striated', 'Non-striated', 'Striated'],
          ['Control', 'Voluntary', 'Involuntary', 'Involuntary'],
          ['Nuclei', 'Multinucleate', 'Uninucleate', 'Uninucleate'],
          ['Shape', 'Long, cylindrical, unbranched', 'Spindle (fusiform), tapering', 'Branched, with <b>intercalated discs</b>'],
          ['Location', 'Attached to bones', 'Gut, blood-vessel walls, iris', 'Heart wall only'],
        ],
      },
      {
        t: 'p',
        html: '<b>Neural tissue:</b> the functional unit is the <b>neuron</b>, made of three essentials: <b>cell body (soma), dendrites, and axon</b>. Neurons are excitable (generate and conduct impulses). <b>Neuroglia</b> are the supporting, non-excitable cells that protect and nourish neurons.',
      },

      { t: 'part', title: 'Key processes and structural logic' },
      {
        t: 'p',
        html: 'Biology rarely “derives,” but it always has a logic connecting structure to function. Here is the reasoning that turns the table above into understanding.',
      },
      {
        t: 'p',
        html: '<b>1. Why epithelium always sits on a basement membrane.</b> Epithelium is a boundary tissue: it must stay anchored while presenting one free surface to the outside (or to a lumen). So its cells are bound tightly to one another by <b>cell junctions</b> and bound below to a thin non-cellular <b>basement membrane</b> that separates them from the underlying connective tissue. This single feature, a basement membrane plus a free surface, is the cleanest way to tell epithelium apart from the other three tissues, which do not form a sheet with a free surface. (Muscle fibres and nerve cells have only a thin basal lamina round each cell.) The junctions come in functional flavours: <b>tight junctions</b> (seal the gap, stop leakage), <b>adhering junctions</b> (cement neighbours mechanically), and <b>gap junctions</b> (cytoplasmic channels for rapid communication).',
      },
      {
        t: 'p',
        html: '<b>2. Why connective tissue is “mostly matrix.”</b> Its jobs (supporting, packing, transporting) are done by the material between the cells, not by the cells crowding together. So evolution kept the cells sparse and invested in matrix. Change the matrix and you change the tissue’s personality entirely: make it fluid → blood; make it jelly-firm → cartilage; load it with calcium salts → bone. Same family, wildly different hardness, all because of the matrix.',
      },
      {
        t: 'p',
        html: '<b>3. Why each muscle type has the structure it does.</b> Skeletal muscle must contract hard and fast on command, so its fibres are long, packed with regularly arranged contractile proteins (giving <b>striations</b>), and richly nerve-supplied for <b>voluntary</b> control. The heart must beat rhythmically, forever, without you thinking about it, so cardiac muscle is <b>involuntary</b>, and its cells are joined end-to-end by <b>intercalated discs</b> that let the contraction signal jump cell-to-cell so the whole heart contracts as one. Smooth muscle lines hollow organs that need slow, sustained squeezing (peristalsis), so its cells are <b>spindle-shaped, non-striated and involuntary</b>.',
      },
      {
        t: 'p',
        html: '<b>4. Why neurons look the way they do.</b> A signalling cell needs to collect inputs over a wide area and send one output over a long distance. Dendrites are the many short collectors; the long single axon is the transmission cable. The structure is simply a wiring solution to a communication problem.',
      },
      { t: 'fig', id: 'b11-07-fig-7.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Name the tissue that (a) lines the inner surface of blood vessels, (b) connects a muscle to a bone, and (c) forms the contractile wall of the heart. Give one structural reason for each answer.',
        steps: [
          '<b>Reasoning.</b> (a) The inner lining of a blood vessel is a smooth, thin <b>simple squamous epithelium</b>: flat cells offer minimal resistance to flow and form a thin diffusion boundary.',
          '(b) A muscle is joined to a bone by a <b>tendon</b>, which is a <b>dense regular connective tissue</b>: its parallel collagen bundles resist pulling forces in one direction.',
          '(c) The heart wall is <b>cardiac muscle</b>: its branched cells linked by intercalated discs allow the whole wall to contract as a coordinated unit.',
        ],
        ans: '(a) simple squamous epithelium, (b) dense regular connective tissue (tendon), (c) cardiac muscle.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following is <b>wrongly</b> matched? <b>(a)</b> Tendon: dense regular connective tissue <b>(b)</b> Areolar tissue: loose connective tissue <b>(c)</b> Cartilage: specialised connective tissue <b>(d)</b> Blood: epithelial tissue',
        steps: [
          '<b>Speed reasoning.</b> Don’t read every option fully: scan for the famous trap. The most common student error is forgetting that <b>blood is a connective tissue</b> (fluid matrix, mesodermal origin), not epithelial. Option (d) is the wrongly matched pair. The other three are textbook-correct, so you can pick (d) in seconds without verifying them.',
          '<b>Pitfall it exploits:</b> the intuitive but wrong feeling that blood “can’t be connective.”',
        ],
        ans: '(d).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): Cardiac muscle can contract rhythmically as a single unit without conscious control. Reason (R): The cells of cardiac muscle are joined by intercalated discs that permit rapid spread of the contraction signal between cells. <b>(a)</b> Both A and R true, R is the correct explanation of A <b>(b)</b> Both A and R true, R is not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: cardiac muscle is involuntary and contracts as a coordinated unit. R is true: intercalated discs (which contain gap junctions) let the depolarisation pass cell-to-cell. And R is precisely why A happens: the coordinated, single-unit contraction is a direct consequence of those communicating junctions.',
          '<b>Trap:</b> option (b) tempts students who know both facts but don’t see that one causes the other.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'CUET / NCERT line-statement',
        q: 'Read the statements about a tissue: (i) Its cells are spindle-shaped and tapering. (ii) It shows no striations. (iii) It is involuntary and uninucleate. Identify the tissue and name one location where it is found.',
        steps: [
          '<b>Reasoning.</b> Spindle shape + no striations + involuntary + single nucleus is the exact signature of <b>smooth (unstriated) muscle</b>. It is found in the walls of hollow visceral organs (for example, the alimentary canal, where it drives peristalsis, and the walls of blood vessels).',
        ],
        ans: 'Smooth muscle; located in the wall of the gut (or blood vessels, iris, urinary bladder).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between dense regular and dense irregular connective tissue, giving one example of each.',
            a: 'Dense regular has parallel collagen bundles (tendons, ligaments); dense irregular has collagen oriented in many directions (dermis of skin).',
          },
          {
            q: '[NEET] Which cells of areolar connective tissue secrete histamine and are involved in allergic responses?',
            a: 'Mast cells.',
          },
          {
            q: '[NEET] Cilia of ciliated epithelium are found on the cells’ free surface in which two human organs commonly cited together?',
            a: 'Bronchioles and fallopian tubes.',
          },
          {
            q: '[CUET] State the three essential structural components of a typical neuron.',
            a: 'Cell body (soma), dendrites, and axon.',
          },
          {
            q: '[NEET Assertion–Reason] A: Cartilage heals slowly or sometimes not at all. R: Cartilage has no blood vessels running through its matrix. State whether R correctly explains A. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both true, and R is the correct explanation: being avascular (no blood supply within the matrix), cartilage receives nutrients only by diffusion, so repair is slow.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The single feature that best distinguishes epithelial tissue from connective, muscular and neural tissue is its:',
        opts: [
          {
            label: 'ability to contract',
            nudge: '<b>(a)</b> belongs to muscle: picked by students who confuse “covering” with “moving.”',
          },
          {
            label: 'presence of a large extracellular matrix',
            nudge: '<b>(b)</b> is the hallmark of connective tissue: the opposite of epithelium, which has almost no matrix; chosen by those who mix up the two boundary descriptions.',
          },
          {
            label: 'ability to conduct impulses',
            nudge: '<b>(c)</b> is the property of neural tissue: a trap for students who memorise functions without pairing them to the right tissue.',
          },
          { label: 'resting on a basement membrane with a free surface', nudge: null },
        ],
        correct: 3,
        solution:
          'Only epithelium combines tightly packed cells, a free (apical) surface, and a <b>basement membrane</b> beneath.',
      },
      {
        t: 'mcq',
        q: 'Intercalated discs are characteristic of:',
        opts: [
          {
            label: 'skeletal muscle',
            nudge: '<b>(a)</b> skeletal muscle is striated but has no such discs: picked because both are striated.',
          },
          {
            label: 'smooth muscle',
            nudge: '<b>(b)</b> smooth muscle is the structural opposite (spindle, non-striated).',
          },
          { label: 'cardiac muscle', nudge: null },
          {
            label: 'neural tissue',
            nudge: '<b>(d)</b> neural tissue uses synapses, not intercalated discs: a confusion between two kinds of “cell-to-cell communication.”',
          },
        ],
        correct: 2,
        solution:
          'Intercalated discs are the end-to-end junctions unique to <b>cardiac</b> muscle, allowing synchronised contraction.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is a type of specialised connective tissue?',
        opts: [
          {
            label: 'Areolar tissue',
            nudge: '<b>(a)</b> areolar and <b>(b)</b> adipose are loose connective tissue: chosen by students who lump all “soft” tissues together.',
          },
          {
            label: 'Adipose tissue',
            nudge: '<b>(a)</b> areolar and <b>(b)</b> adipose are loose connective tissue: chosen by students who lump all “soft” tissues together.',
          },
          {
            label: 'Tendon',
            nudge: '<b>(c)</b> tendon is dense regular connective tissue: a trap because it sounds tough and specialised, but it is not in the “specialised” category.',
          },
          { label: 'Bone', nudge: null },
        ],
        correct: 3,
        solution: 'Bone (with cartilage and blood) is <b>specialised</b> connective tissue.',
      },
      {
        t: 'mcq',
        q: 'A type of cell junction found in animal tissues is the tight junction, adhering junction or gap junction. Which “junction” in the list below does <b>not</b> belong to animal tissues?',
        opts: [
          { label: 'Tight junction', nudge: null },
          { label: 'Adhering junction', nudge: null },
          { label: 'Gap junction', nudge: null },
          { label: 'Plasmodesmata', nudge: null },
        ],
        correct: 3,
        solution:
          '<b>Plasmodesmata</b> are cytoplasmic channels of <b>plant</b> cells: they have no place in animal tissues. The other three are genuine animal cell junctions. This is the classic plant-vs-animal trap: a student who recognises “junction” terms but doesn’t filter for kingdom picks one of (a)–(c) or hesitates on (d).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling blood “not a tissue.”</b> Blood is a connective tissue (fluid matrix). This single fact is tested almost every year (the book’s estimate from past papers, not official figures): burn it in.',
          '<b>Swapping tendon and ligament. Tendon = muscle-to-bone; Ligament = bone-to-bone.</b> Both are dense regular connective tissue.',
          '<b>Mixing up the muscle trio.</b> Students remember “striated/voluntary” but attach it to the wrong type. Lock the odd ones: cardiac is the only striated <b>involuntary</b> muscle; smooth is the only <b>spindle-shaped, non-striated</b> one.',
          '<b>Forgetting the basement membrane as epithelium’s signature.</b> When an exam describes a tissue “resting on a basement membrane with a free surface,” the answer is always epithelial: no other tissue qualifies.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (the 4-C filter):</b> For any “identify the tissue” question, run the four C’s in order: <b>Cover</b> (boundary, free surface → epithelial), <b>Connect</b> (lots of matrix → connective), <b>Contract</b> (elongated fibres → muscular), <b>Communicate</b> (excitable, processes → neural). The first C that fits is your answer, and it eliminates the other three distractors instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Four tissues = 4 C’s</b>',
            note: '<b>C</b>over (epithelial), <b>C</b>onnect (connective), <b>C</b>ontract (muscular), <b>C</b>ommunicate (neural).',
          },
          {
            f: '<b>Epithelial signature</b>',
            note: 'tightly packed + free surface + <b>basement membrane</b>. Sub-types: squamous, cuboidal, columnar, ciliated, compound. Glands = exocrine (ducts) / endocrine (ductless).',
          },
          {
            f: '<b>Connective = little cell, lots of matrix.</b>',
            note: 'Loose (areolar, adipose) · Dense (regular = tendon/ligament; irregular = skin) · Specialised (cartilage–chondrocyte, bone–osteocyte, <b>blood</b>).',
          },
          {
            f: '<b>Muscle trio</b>',
            note: 'Skeletal = striated, voluntary, multinucleate · Smooth = non-striated, involuntary, spindle, uninucleate · Cardiac = striated, involuntary, <b>intercalated discs</b>, branched.',
          },
          {
            f: '<b>Neuron essentials</b>',
            note: 'cell body + dendrites + axon; neurons excitable, <b>neuroglia</b> supportive & non-excitable.',
          },
          {
            f: '<b>Animal cell junctions</b>',
            note: 'tight, adhering, gap. (Plasmodesmata = plant: trap.)',
          },
        ],
        aids: [
          '“<b>Ten</b>don to <b>muscle</b>, <b>liga</b>ment <b>links</b> bone-to-bone.”',
          '“Blood is the connective tissue that flows.”',
          '“Cardiac is the lone striated involuntary muscle.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · p. 417 ─────────────────────────
  {
    n: '02',
    title: 'Organ and Organ System',
    kalam: 'A single cell can run a whole organism only when that organism is a single cell.',
    blocks: [
      { t: 'part', title: 'The ladder of organisation' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A short but examinable bridge. CBSE may set a 1-mark “levels of organisation” question; NEET uses the open-vs-closed circulation and complete-vs-incomplete gut contrasts as quick discriminators when comparing earthworm, cockroach and frog.',
      },
      {
        t: 'p',
        html: 'A single cell can run a whole organism only when that organism is a single cell. The moment an animal becomes multicellular, it faces a management problem: millions of cells cannot each do everything, and the solution is <b>division of labour</b> arranged as a ladder: <b>cells → tissues → organs → organ systems → organism</b>.',
      },
      {
        t: 'p',
        html: '• <b>Cells</b> are the basic units.<br>• <b>Tissues</b> are groups of similar cells doing one job (the four animal tissues of Topic 01).<br>• <b>Organs</b> are made of two or more tissue types working together: the stomach, for instance, has epithelial lining, connective tissue, muscle and nerves.<br>• <b>Organ systems</b> are groups of organs that jointly carry out a major function: the digestive system, circulatory system, and so on.<br>• The <b>organism</b> is the fully integrated whole.',
      },
      {
        t: 'p',
        html: 'The higher you climb this ladder, the more the body can specialise, and the more elaborate its organ systems become as you move from simpler invertebrates (earthworm) to more complex ones (cockroach) to vertebrates (frog).',
      },

      { t: 'part', title: 'Two patterns worth memorising' },
      {
        t: 'p',
        html: 'When you compare the three animals in this chapter, two structural contrasts do most of the discriminating work in exams:',
      },
      {
        t: 'p',
        html: '• <b>Digestive system: complete vs incomplete.</b> A <b>complete</b> gut has two openings (a separate mouth and anus), so food moves one way and can be processed in stages. All three animals here (earthworm, cockroach, frog) have complete digestive systems. An <b>incomplete</b> gut (a single opening serving as both mouth and anus) is seen in simpler animals like cnidarians: a useful contrast point.<br>• <b>Circulatory system: open vs closed.</b> In a <b>closed</b> system, blood stays inside vessels throughout (earthworm and frog). In an <b>open</b> system blood (haemolymph) leaves the vessels and bathes the organs directly in body-cavity spaces (the cockroach’s haemocoel). In insects the air is carried by tracheae, not by blood, so insect haemolymph has no respiratory pigment, while earthworm and frog blood, which carry oxygen, do.',
      },
      {
        t: 'p',
        html: 'Keep these two axes in mind as you read the three animals that follow: almost every comparison question is built on them.',
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 418–424 ─────────────────────────
  {
    n: '03',
    title: 'Earthworm (Pheretima posthuma)',
    kalam:
      'A body built entirely out of repeated segments, like a train assembled from identical coaches.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic for NEET: segment-number facts (clitellum 14–16, gizzard, testes, spermathecae), the three nephridia types, and the closed circulation are asked almost every year (the book’s estimate from past papers, not official figures). CBSE Boards favour the digestive-system diagram and “friend of farmers” short answers. CUET reuses one-line segment facts.',
      },
      {
        t: 'p',
        html: 'Pick up a handful of garden soil after the rains and you may meet the quiet engineer of the whole ecosystem: the earthworm. It looks like a simple reddish-brown tube, but that “tube” is one of biology’s most elegant designs: a body built entirely out of <b>repeated segments</b>, like a train assembled from identical coaches.',
      },
      {
        t: 'p',
        html: 'That repetition has a name, <b>metamerism</b>, and it is the single biggest idea for understanding the earthworm. Each segment (a metamere) carries its own little set of muscles, nerves, excretory tubes and blood connections, so the worm is almost a colony of cooperating units sharing one gut and one nerve cord.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a long goods train. Every coach is built the same and can flex independently at the couplings, yet they all run on one track and are pulled by one engine. The earthworm moves exactly like this: waves of muscle contraction pass coach-by-coach down the body, and tiny bristles called <b>setae</b> grip the soil so each segment can anchor while the next pushes forward. The worm has no legs, no eyes, no lungs, and needs none. It breathes straight through its <b>moist skin</b>, tastes the soil with receptor cells, and burrows by sheer coordinated segmentation.',
      },
      {
        t: 'p',
        html: 'Why does the earthworm matter beyond its own life underground? Because it is the original soil-conditioner. As it eats its way through the ground, it aerates and turns the soil and leaves behind nutrient-rich castings, which is exactly why it is called the friend of the farmers.',
      },
      {
        t: 'p',
        html: 'There is one more design secret worth meeting early. The earthworm is a true <b>coelomate</b>: between its gut and body wall lies a fluid-filled body cavity, the <b>coelom</b>, partitioned segment-by-segment. That trapped fluid is not idle: it acts as a <b>hydrostatic skeleton</b>, a kind of internal water-cushion that the muscles squeeze against to change the body’s shape and drive burrowing. A legless, boneless animal can still push powerfully through soil because it is, in effect, pushing against its own pressurised fluid. And its diet fits its habitat perfectly: the earthworm is a <b>detritivore</b>, swallowing soil and decaying leaf matter, digesting the organic content, and passing the rest as castings, recycling dead material back into the living soil and forming a quiet but essential link in the food web.',
      },
      { t: 'p', html: '<b>Limiting conditions & cautions:</b>' },
      {
        t: 'p',
        html: '• The earthworm studied in Indian textbooks is <i>Pheretima posthuma</i> (now placed in <i>Metaphire</i>); another common genus is <i>Lumbricus</i>. Segment-number facts below are specific to <i>Pheretima</i>.<br>• It must stay <b>moist</b>: its skin-breathing fails if it dries out, which is why it is nocturnal and surfaces after rain.<br>• “Closed circulation with red blood” can mislead: the haemoglobin is dissolved in the <b>plasma</b>, not packed inside red cells as in vertebrates.',
      },

      { t: 'part', title: 'Key definitions and diagnostic features' },
      {
        t: 'p',
        html: '(Biology fork: structure, location and segment position are the operative quantities; no SI units apply.)',
      },
      {
        t: 'p',
        html: '<b>External morphology:</b><br>• Body <b>long, cylindrical, segmented</b> into ~100–120 <b>metameres</b>; a dark mid-dorsal line marks the dorsal blood vessel.<br>• <b>Prostomium:</b> a small fleshy lobe overhanging the mouth, sensory, not a true segment.<br>• <b>Peristomium:</b> the first segment, which bears the <b>mouth</b>.<br>• <b>Clitellum:</b> a prominent glandular band covering <b>segments 14–15–16</b> in the mature worm; it divides the body into <b>preclitellar, clitellar and postclitellar</b> regions and secretes the cocoon.<br>• <b>Setae:</b> S-shaped chitinous bristles in rows on every segment except the first, the last, and the clitellum, used for gripping during locomotion.<br>• <b>Genital openings:</b> a single mid-ventral <b>female pore on segment 14</b>; a pair of <b>male pores on segment 18</b>; four pairs of <b>spermathecal openings</b> in the grooves between segments 5 and 6 to 8 and 9.',
      },
      {
        t: 'table',
        title: 'Organ systems at a glance',
        head: ['System', 'Key structures (with segment positions)', 'Diagnostic exam facts'],
        rows: [
          [
            'Digestive',
            'Mouth → buccal cavity (1–3) → pharynx → oesophagus (5–7) → <b>gizzard</b> (8–9) → stomach (9–14) → <b>intestine</b> (from 15) → anus',
            '<b>Gizzard</b> grinds soil/food; intestine bears a <b>typhlosole</b> (internal dorsal fold ↑ absorptive area) and a pair of <b>intestinal caeca</b> (segment 26) secreting enzymes',
          ],
          [
            'Circulatory',
            '<b>Closed</b> type; dorsal + ventral + sub-neural + lateral-oesophageal vessels; “hearts” connecting dorsal & ventral',
            '<b>Blood glands</b> in segments <b>4, 5, 6</b> make blood cells + <b>haemoglobin dissolved in plasma</b>; blood red; cells colourless, phagocytic',
          ],
          ['Respiratory', 'None specialised', '<b>Cutaneous</b> respiration through the moist skin'],
          [
            'Excretory',
            '<b>Nephridia</b> (segmental coiled tubules), three kinds',
            '<b>Septal</b> (segment 15→last, open into the intestine), <b>integumentary</b> (3→last, open on skin), <b>pharyngeal</b> (tufts in 4, 5, 6)',
          ],
          [
            'Nervous',
            '<b>Nerve ring</b> round the pharynx (cerebral ganglia = “brain”) + double, ganglionated <b>ventral nerve cord</b>',
            'No eyes; <b>receptor cells</b> (touch/taste) and <b>photoreceptor cells</b> in the skin',
          ],
          [
            'Reproductive',
            '<b>Hermaphrodite</b>; testes 2 pairs (10, 11), ovaries 1 pair (segments 12–13), <b>spermathecae 4 pairs (6–9)</b>',
            '<b>Cross-fertilisation</b>; clitellum secretes the <b>cocoon</b>; <b>direct development</b> (no larva)',
          ],
        ],
      },

      { t: 'part', title: 'Structural logic and life cycle' },
      {
        t: 'p',
        html: '<b>1. Why the gut is a one-way assembly line.</b> The earthworm eats its way through soil, so its <b>complete</b> digestive tract is built as a sequence of specialised stations: the <b>gizzard</b> (segments 8–9) is a muscular mill that grinds the gritty soil; the <b>stomach</b> neutralises the humic acid in decaying matter; and the <b>intestine</b> does the absorbing. To squeeze maximum absorption from a thin tube, the intestine wall folds inward as a ridge, the <b>typhlosole</b>, multiplying the surface area, while the <b>intestinal caeca</b> at segment 26 add digestive enzymes. Form follows diet at every step.',
      },
      {
        t: 'p',
        html: 'Two finer points complete the picture. The <b>stomach</b> (segments 9–14) is not just a holding tank: the <b>calciferous glands</b> of the oesophagus and stomach region secrete calcium carbonate that neutralises the <b>humic acid</b> of the decaying matter the worm swallows, protecting the gut from the acidic soil. And the <b>typhlosole</b>, by folding the intestinal lining into a long internal shelf, lets a narrow tube behave like a much wider one for absorption, the same surface-area trick the human intestine achieves with villi. Together these mean a slow-moving soil-eater can extract enough nutrition from a low-energy diet of dead leaves and organic debris.',
      },
      {
        t: 'p',
        html: '<b>2. Why circulation is closed, yet the blood is “backwards.”</b> Unlike an insect, the earthworm keeps its blood inside vessels the whole time, a <b>closed</b> system. The <b>dorsal vessel</b> collects blood and pushes it forwards; the <b>ventral vessel</b> distributes it backwards; and several pairs of muscular <b>“hearts”</b> in the anterior segments connect the two and keep blood moving in one direction. The respiratory pigment <b>haemoglobin floats free in the plasma</b> (not in red cells), which is enough for an animal whose oxygen demand is modest and whose whole skin is a gas-exchange surface.',
      },
      {
        t: 'p',
        html: '<b>3. Why there are three kinds of nephridia.</b> Excretion is segmental, like everything else, so the worm carries hundreds of tiny tubular kidneys, <b>nephridia</b>, sorted by location and outlet. <b>Septal</b> nephridia sit on the partitions from segment 15 onward and drain into the intestine (water-conserving); <b>integumentary</b> nephridia line the body wall and open on the skin; <b>pharyngeal</b> nephridia form tufts in segments 4–6. Three designs, one job: regulate the volume and salt content of the body fluid.',
      },
      {
        t: 'p',
        html: '<b>4. Why a hermaphrodite still needs a partner.</b> The earthworm is <b>bisexual</b>: each worm has both testes (segments 10, 11) and ovaries (12–13), yet it cannot fertilise itself, because the sperm and eggs mature at different times (the worm is protandrous: its male organs ripen first). So two worms line up head-to-tail, exchange sperm (stored in each other’s <b>spermathecae</b>, segments 6–9), and later the <b>clitellum</b> secretes a mucus <b>cocoon</b> that slides forward over the body, picking up eggs and the stored sperm; fertilisation happens inside this cocoon, which is then dropped into the soil. Development is <b>direct</b>: a tiny worm emerges, with no larval stage. This built-in cross-fertilisation keeps the population genetically mixed.',
      },
      {
        t: 'p',
        html: '<b>5. How a worm with no eyes still senses and moves through its world.</b> The earthworm carries a simple but effective nervous system suited to its segmented life. A <b>nerve ring</b> encircles the pharynx (its dorsal <b>cerebral ganglia</b> act as a primitive “brain”), and from it a double, ganglionated <b>ventral nerve cord</b> runs the length of the body, with a small ganglion in each segment giving local control. The worm has no eyes, but its skin is studded with <b>receptor cells</b> (for touch and chemical taste) and <b>photoreceptor cells</b> that detect light intensity, which is enough for it to avoid the drying sun and stay in moist soil. Locomotion is the segmentation idea in action: waves of contraction sweep down the body while the chitinous <b>setae</b> of each segment grip the soil, so the worm anchors part of itself and pushes the rest forward, a crawl powered entirely by alternating circular and longitudinal muscles of the body wall (cuticle, epidermis, muscle layers, and coelomic lining).',
      },
      {
        t: 'p',
        html: '<b>Economic importance.</b> The earthworm is called the “friend of the farmers,” and the title is earned by its work underground (Charles Darwin studied earthworms and showed how much soil they turn over): by burrowing it loosens, aerates and turns over the soil, improving drainage and root growth, while its nutrient-rich <b>castings</b> enrich the topsoil. This natural service is harnessed commercially as <b>vermicomposting</b>, in which earthworms convert organic waste into high-quality manure. Composting species such as <i>Eisenia fetida</i> are reared on a commercial scale for exactly this purpose, turning farm and kitchen refuse into a rich, dark manure prized for restoring tired soils.',
      },
      { t: 'fig', id: 'b11-07-fig-7.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Arrange the parts of the earthworm’s alimentary canal in correct sequence from the mouth, and state the special function of the gizzard.',
        steps: [
          '<b>Reasoning.</b> Food enters the mouth on the peristomium and passes back through a fixed series of chambers, each doing one job. The <b>gizzard</b> is the muscular grinding station that pulverises the soil and food particles the worm ingests.',
        ],
        ans: 'Mouth → buccal cavity → pharynx → oesophagus → gizzard → stomach → intestine → anus. The gizzard grinds the ingested soil and decaying organic matter.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The clitellum of an adult earthworm covers which segments? <b>(a)</b> 13–14–15 <b>(b)</b> 14–15–16 <b>(c)</b> 15–16–17 <b>(d)</b> 9–10–11',
        steps: [
          '<b>Speed reasoning.</b> This is a pure recall trap: three of the four options are deliberately “one off.” Lock the fact: clitellum = segments <b>14, 15, 16</b> (and it secretes the cocoon). Don’t second-guess into (a) or (c).',
          '<b>Pitfall it exploits:</b> confusing the clitellum segments (14–16) with the gizzard (8–9) or testes (10–11).',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): An earthworm cannot normally fertilise its own eggs despite possessing both testes and ovaries. Reason (R): The earthworm is hermaphrodite, so two worms must exchange sperm during copulation, which are stored in the spermathecae. <b>(a)</b> Both A and R true, R correctly explains A <b>(b)</b> Both A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning.</b> A is true: self-fertilisation is prevented because male and female gametes mature at different times. R is true: the two worms do exchange sperm, which is stored in the spermathecae. But R does not explain A: being hermaphrodite does not by itself prevent self-fertilisation; the cause is the different timing of gamete maturation, which R does not state.',
          'R is true but does not explain A.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'CUET / NCERT line-statement',
        q: 'Match each nephridium type with its outlet: (i) Septal nephridia (ii) Integumentary nephridia (iii) Pharyngeal nephridia Outlets: (P) open on the body surface (Q) open into the intestine (R) form tufts in segments 4–6.',
        steps: [
          '<b>Reasoning.</b> Septal nephridia (segment 15 onward) are enteronephric: they drain into the intestine → Q. Integumentary nephridia line the body wall and open on the skin → P. Pharyngeal nephridia are the paired tufts in segments 4, 5, 6 → R.',
        ],
        ans: '(i)–Q, (ii)–P, (iii)–R.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define metamerism and name the structure that overhangs the earthworm’s mouth.',
            a: 'Metamerism = the repetition of similar body segments (metameres) along the body; the <b>prostomium</b> overhangs the mouth.',
          },
          {
            q: '[NEET] In which segments are the blood glands of the earthworm located, and what do they produce?',
            a: 'Segments <b>4, 5, 6</b>; they produce blood cells and haemoglobin (dissolved in plasma).',
          },
          {
            q: '[NEET] How many pairs of spermathecae are present in <i>Pheretima</i>, and in which segments?',
            a: '<b>Four pairs</b>, in segments <b>6–9</b>.',
          },
          {
            q: '[CUET] Name the internal fold of the earthworm’s intestine that increases its absorptive surface.',
            a: 'The <b>typhlosole</b>.',
          },
          {
            q: '[NEET Assertion–Reason] A: The earthworm has no special respiratory organ. R: Gas exchange occurs across its moist skin. State whether R correctly explains A. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both true, and R correctly explains A: lacking lungs or gills, the worm relies entirely on cutaneous respiration through its moist skin.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The gizzard in the earthworm is present in segments:',
        opts: [
          { label: '5–7', nudge: '<b>(a)</b> 5–7 is the oesophagus region.' },
          { label: '8–9', nudge: null },
          { label: '14–16', nudge: '<b>(c)</b> 14–16 is the clitellum: the most common swap error.' },
          { label: '26', nudge: '<b>(d)</b> segment 26 holds the intestinal caeca.' },
        ],
        correct: 1,
        solution: 'The muscular gizzard lies in segments <b>8–9</b> and grinds ingested soil.',
      },
      {
        t: 'mcq',
        q: 'Haemoglobin in the earthworm is:',
        opts: [
          { label: 'absent', nudge: '<b>(a)</b> is wrong: the blood is red.' },
          { label: 'present inside red blood cells', nudge: '<b>(b)</b> is the vertebrate pattern: the classic trap.' },
          { label: 'dissolved in the plasma', nudge: null },
          { label: 'present only in the gizzard', nudge: '<b>(d)</b> is nonsensical but tempts students who guess by location.' },
        ],
        correct: 2,
        solution:
          'Earthworm haemoglobin is <b>dissolved in the plasma</b>, giving the blood its red colour while the corpuscles stay colourless.',
      },
      {
        t: 'mcq',
        q: 'Which nephridia of the earthworm open into the intestine?',
        opts: [
          { label: 'Integumentary', nudge: '<b>(a)</b> integumentary nephridia open on the skin surface.' },
          { label: 'Pharyngeal', nudge: '<b>(b)</b> pharyngeal nephridia are tufts in segments 4–6 that open into the pharynx, not the intestine.' },
          { label: 'Septal', nudge: null },
          { label: 'None', nudge: '<b>(d)</b> is wrong since septal nephridia clearly do.' },
        ],
        correct: 2,
        solution: '<b>Septal</b> nephridia discharge into the intestine, conserving water.',
      },
      {
        t: 'mcq',
        q: 'The earthworm is described as a “friend of farmers” mainly because it:',
        opts: [
          { label: 'eats crop pests', nudge: '<b>(a)</b> confuses it with predatory insects.' },
          { label: 'aerates and enriches the soil through burrowing and castings', nudge: null },
          { label: 'pollinates crops', nudge: '<b>(c)</b> is a pollinator’s role.' },
          { label: 'produces silk', nudge: '<b>(d)</b> belongs to the silk moth: an outlier distractor.' },
        ],
        correct: 1,
        solution:
          'Its burrowing <b>aerates and turns the soil</b>, and its nutrient-rich castings raise fertility: the basis of vermicomposting.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing the segment numbers.</b> Anchor the big five: gizzard <b>8–9</b>, testes <b>10–11</b>, ovary <b>12–13</b>, clitellum <b>14–16</b>, male pore <b>18</b>. Mixing these up is the No. 1 error.',
          '<b>Treating the prostomium as a segment.</b> It is a sensory lobe, not a true segment; the first true segment is the <b>peristomium</b> (which bears the mouth).',
          '<b>Saying the blood is red “because of red cells.”</b> The Hb is in the <b>plasma</b>; the cells are colourless.',
          '<b>Forgetting cross-fertilisation.</b> The worm is hermaphrodite but still needs a partner: it does not normally self-fertilise.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (number the train):</b> Memorise the earthworm as a numbered train: write the segment line 1…18 once and pin each organ to its coach (gizzard 8–9, gonads 10–13, clitellum 14–16, male pore 18). In the exam you mentally read the train rather than recall floating facts, and the “one-off” distractors fall away.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b><i>Pheretima posthuma</i></b>',
            note: 'segmented (<b>metamerism</b>), ~100–120 metameres; <b>prostomium</b> (lobe) + <b>peristomium</b> (1st segment, mouth).',
          },
          {
            f: '<b>Clitellum = segments 14–16</b>; secretes the <b>cocoon</b>. <b>Setae</b> on all segments except first, last, clitellum.',
            note: '',
          },
          {
            f: '<b>Digestion</b>',
            note: 'mouth → pharynx → oesophagus → <b>gizzard (8–9)</b> → stomach → intestine (<b>typhlosole</b> + caeca at 26) → anus.',
          },
          {
            f: '<b>Circulation</b>',
            note: '<b>closed</b>; <b>blood glands 4–6</b> make Hb <b>dissolved in plasma</b>; “hearts” link dorsal & ventral vessels.',
          },
          { f: '<b>Respiration</b>', note: 'cutaneous (moist skin); no special organ.' },
          {
            f: '<b>Excretion</b>',
            note: '<b>nephridia</b>: septal (→ intestine), integumentary (→ skin), pharyngeal (tufts 4–6).',
          },
          {
            f: '<b>Reproduction</b>',
            note: 'hermaphrodite, <b>cross-fertilisation;</b> testes 10–11, ovary 12–13, <b>spermathecae 4 pairs (6–9);</b> direct development.',
          },
          { f: '<b>Importance</b>', note: '“friend of farmers”: soil aeration + vermicompost.' },
        ],
        aids: [
          '“Gizzard ate (8) nine (9).”',
          '“Clitellum is the 14-to-16 belt that makes the cocoon.”',
          '“Red blood, colourless cells: Hb swims in the plasma.”',
        ],
      },
    ],
  },
];
