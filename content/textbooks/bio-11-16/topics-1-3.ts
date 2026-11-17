import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 16 (Excretory Products and their Elimination), Topics 01
 * to 03: pp. 945 to 969 of the Class 11 Biology Master Reference, word for
 * word. The chapter title page (p. 943) and the contents (p. 944) are not
 * copied. The book prints "Sub-topic 1" to "Sub-topic 4": Topic 01 Excretory
 * Organs Across the Animal Kingdom (pp. 945 to 952), Topic 02 Nitrogenous
 * Wastes & The Human Excretory System (pp. 953 to 961, the title breaks after
 * "Excretory") and Topic 03 Urine Formation & Concentration (pp. 962 to 969),
 * each cut at the book's Sections 1 to 8. Figures 16.1 (caption p. 948, drawn
 * p. 949), 16.2 (caption p. 955, drawn p. 956), 16.3 and 16.4 (captions p. 957,
 * both drawn p. 958) and 16.5 (caption p. 964, drawn p. 965) are redrawn in
 * lib/diagrams/biology-11-16.ts; these pages hold no unnumbered drawing.
 * Emphasis italics are dropped (also the Hindi words dhaba and sabzi mandi);
 * scientific names are italic. The book's worked examples and MCQs number
 * their options (a) to (d), kept as printed.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 945–952 ─────────────────────────
  {
    n: '01',
    title: 'Excretory Organs Across the Animal Kingdom',
    kalam: 'What changes across the animal kingdom is not the problem but the plumbing used to solve it.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A short but reliably scoring NEET topic (the book’s estimate from past papers, not official figures): the organ ↔ animal-group pairings are textbook <b>match-the-column</b> and <b>assertion–reason</b> material (e.g. “flame cells belong to…”, “green glands are found in…”). CBSE Boards may ask a 1–2 mark “name the excretory organ of X” or a one-line function. CUET sticks to direct recall. It is the broad opening frame of the chapter: before zooming into the human kidney, see how the whole animal kingdom solves the same waste problem.',
      },
      {
        t: 'p',
        html: 'Every animal, from a flatworm in a pond to a human on a train, faces the same two-part chore: dump nitrogenous waste, and keep water and salts in balance (osmoregulation). What changes across the animal kingdom is not the problem but the plumbing used to solve it, and that plumbing gets steadily more elaborate as bodies get bigger and more complex.',
      },
      {
        t: 'p',
        html: 'Think about it this way… it’s like comparing how different towns manage drainage. A tiny hamlet might just let waste seep away through the soil; a small town digs simple channels; a metropolis needs a full network of pumping stations and treatment plants. Animals are the same. Simple-bodied animals can rely on basic tubes bathed in body fluid, while complex animals evolve dedicated, highly organised organs, culminating in the vertebrate kidney you will study in detail in the next topics.',
      },
      {
        t: 'p',
        html: 'Start at the very simplest end, before any dedicated organ exists at all. The tiniest, simplest-bodied animals manage with no excretory organ whatsoever: sponges (Porifera) and <i>Hydra</i> (Coelenterata) simply let ammonia and carbon dioxide <b>diffuse straight out across the moist body surface</b> into the surrounding water. Single-celled protozoans like <i>Amoeba</i> and <i>Paramecium</i> go one step further with a <b>contractile vacuole</b>, a tiny pulsating bubble inside the cell that collects excess water and periodically squeezes it out. Note its job is mainly <b>osmoregulation</b> (bailing out the water that constantly floods in from the freshwater around them), with nitrogen leaving by simple diffusion. These are organelle-level or surface-level solutions, workable only for the smallest, simplest bodies.',
      },
      {
        t: 'p',
        html: 'Move up to flatworms like <i>Planaria</i>, which use <b>protonephridia</b>, better known as <b>flame cells</b>: hollow cells tipped with a tuft of beating cilia. Under a microscope the flickering cilia look like a candle flame, which is where the name comes from. They mainly handle <b>osmoregulation</b>, sweeping excess water and dissolved waste out through tiny pores. Step up to the earthworm and you find <b>nephridia</b>, coiled tubular structures, segment by segment, that both remove nitrogenous waste and manage fluid balance. Insects such as the cockroach take a different route with <b>Malpighian tubules</b>, slender tubes attached to the gut that pluck wastes from the body fluid and pass them into the digestive tract for elimination, a water-thrifty design suited to land life. Crustaceans like the prawn use <b>antennal glands (green glands)</b> near the base of their antennae. And finally, vertebrates, including us, concentrate the whole job into a pair of complex, highly efficient <b>kidneys</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions worth pinning down. First, “excretory organ” and “osmoregulatory organ” overlap heavily: for protonephridia, osmoregulation is actually the primary role, with nitrogen removal secondary. Don’t assume every excretory structure exists chiefly to dump nitrogen. Second, these pairings are about the dominant/representative structure for each group; nature has exceptions and many animals also lose waste by simple diffusion across the body surface (as in very simple animals). For exams, learn the standard organ-to-group map first: that is what the questions test.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'The heart of this topic is one comparison table. Learn it cold: almost every question is drawn from it.',
      },
      {
        t: 'table',
        title: null,
        head: ['Excretory organ / mechanism', 'Animal group (examples)', 'Primary function'],
        rows: [
          ['General body surface (diffusion)', 'Porifera (sponges), Coelenterata (<i>Hydra</i>)', 'Direct diffusion of ammonia/CO<sub>2</sub>, no special organ'],
          ['Contractile vacuole', 'Protozoa (<i>Amoeba</i>, <i>Paramecium</i>)', 'Chiefly osmoregulation (expels excess water); N-waste by diffusion'],
          [
            'Protonephridia (flame cells)',
            'Platyhelminthes/flatworms (<i>Planaria</i>), rotifers, some annelids, cephalochordate (<i>Amphioxus</i>)',
            'Chiefly osmoregulation (ionic & fluid-volume regulation); some waste removal',
          ],
          ['Nephridia', 'Earthworms and other annelids', 'Removal of nitrogenous wastes + fluid/ionic balance'],
          ['Malpighian tubules', 'Most insects, including cockroaches', 'Removal of nitrogenous wastes + osmoregulation'],
          ['Antennal glands (green glands)', 'Crustaceans (e.g. prawn)', 'Excretion (waste removal)'],
          ['Kidneys', 'Vertebrates (including humans)', 'Complex, efficient excretion + osmoregulation + homeostasis'],
        ],
      },
      {
        t: 'p',
        html: '<b>Diagnostic features (the distinguishing detail for each):</b><br>• <b>Body-surface diffusion:</b> no organ at all, the give-away that the question means a sponge or <i>Hydra</i>.<br>• <b>Contractile vacuole:</b> an <b>intracellular organelle</b>, not a multicellular organ; the only entry that is inside a single cell, and an osmoregulation specialist in freshwater protozoa.<br>• <b>Protonephridia:</b> the defining feature is the <b>ciliated flame cell</b>; the flickering cilia create the current. Tied to the simplest multicellular body plans, and the one whose <b>chief role is osmoregulation rather than nitrogen excretion</b>.<br>• <b>Nephridia: segmentally arranged tubes</b> in the annelid body, the “earthworm signature.”<br>• <b>Malpighian tubules: attached to the gut/alimentary canal</b>, which is why insect waste exits via the digestive tract, a land-adapted, water-saving arrangement.<br>• <b>Antennal/green glands: located near the antennae</b>; “green gland” is simply the colour-based common name. The unique “crustacean” answer.<br>• <b>Kidneys:</b> the <b>most complex and organised</b> excretory organ; the vertebrate endpoint of the trend.',
      },

      { t: 'part', title: 'Comparative characteristics and evolutionary trend' },
      {
        t: 'p',
        html: 'Reading the table as a progression (rather than seven isolated facts) makes it far easier to remember and to reason through tricky questions.',
      },
      {
        t: 'p',
        html: '<b>The trend: simple to complex.</b><br>1. <b>Body-surface diffusion (simplest animals):</b> the most primitive “method”: sponges and <i>Hydra</i> lose waste straight across a moist body surface, needing no special organ at all.<br>2. <b>Contractile vacuole (unicellular level):</b> in freshwater protozoa (<i>Amoeba</i>, <i>Paramecium</i>), an intracellular pump that expels surplus water, an osmoregulatory organelle rather than a true excretory organ.<br>3. <b>Protonephridia / flame cells:</b> a simple excretory structure of flatworms and similar simple invertebrates. Cilia-driven, and still weighted toward <b>osmoregulation</b>.<br>4. <b>Nephridia:</b> a clear step up in organisation: proper tubular organs, repeated segment by segment in annelids, removing nitrogenous waste alongside fluid balance.<br>5. <b>Malpighian tubules:</b> an insect innovation tuned for <b>terrestrial water economy</b>: by dumping waste into the gut and reclaiming water, insects conserve precious fluid on land (the same toxicity-vs-water logic that makes terrestrial insects uricotelic, from Topic 02).<br>6. <b>Antennal (green) glands:</b> the crustacean solution, a specialised gland handling excretion in aquatic arthropods.<br>7. <b>Kidneys:</b> the vertebrate peak: paired, compact, richly vascularised organs that filter, reabsorb, secrete and concentrate with the precision you studied in the human nephron.<br>(This is a teaching order of complexity, not a line of descent: Malpighian tubules and green glands are separate arthropod solutions.)',
      },
      {
        t: 'p',
        html: '<b>Why the trend tracks habitat and complexity.</b> Notice the throughline: as animals grew larger, more active and (crucially) moved onto land, two pressures pushed the plumbing to evolve: the need to process more waste efficiently, and the need to <b>conserve water</b>. Aquatic simple animals can afford leaky, osmoregulation-first structures (flame cells); terrestrial insects cannot, so they evolved water-reclaiming Malpighian tubules; vertebrates went furthest, building a kidney that, in mammals (and to a lesser degree birds), can produce urine far more concentrated than blood. The organ map is really a map of adaptation to environment.',
      },
      {
        t: 'p',
        html: '<b>A structural snapshot of each organ.</b> It helps to picture how each one is actually built, because the structure is often what a question hinges on. A <b>flame cell</b> is a hollow cell capped with a tuft of cilia projecting into its cavity (it leads into a tubule); the cilia beat to drive fluid down a connected tubule and out through excretory pores. <b>Nephridia</b> are coiled tubes; in the earthworm a ciliated funnel (the nephrostome) opens into the body cavity, collects coelomic fluid, and the tube processes it before releasing waste outside, and they are arranged <b>segmentally</b>, repeating down the body. <b>Malpighian tubules</b> are fine, blind-ended tubules that float in the body fluid and join the gut at the midgut–hindgut junction, so the waste they collect is voided along with the faeces: that gut attachment is the whole basis of their water economy. <b>Antennal (green) glands</b> are paired glands seated near the base of the antennae in crustaceans. The human <b>kidney</b>, as covered in Topics 02 and 03, packs roughly a million nephrons into each compact organ with a dedicated blood supply, incomparably more organised than anything below it.',
      },
      {
        t: 'p',
        html: '<b>Osmoregulation vs excretion: the distinction examiners exploit.</b> These two jobs travel together, but they are not the same thing, and the balance shifts along the series. At the simple end, <b>osmoregulation dominates</b>: the contractile vacuole and the flame cell exist chiefly to manage water and ion balance, with nitrogen leaving almost incidentally by diffusion. As organs become true tubular systems (nephridia, Malpighian tubules) and finally kidneys, <b>active nitrogenous-waste removal becomes a co-equal, then central, function</b>, without ever giving up osmoregulation. So if a question asks for the primary role of protonephridia or a contractile vacuole, the answer is <b>osmoregulation</b>, not excretion; for nephridia, Malpighian tubules and kidneys, it is both. Mixing these up is the single most common conceptual error on this topic (the book’s estimate from past papers, not official figures).',
      },
      { t: 'fig', id: 'b11-16-fig-16.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>(2 marks)</b> Name the excretory organ found in (a) an earthworm and (b) a cockroach, and state one function common to both.',
        steps: [
          '<b>Tip:</b> one clean organ-name per animal plus the shared function is exactly the 2-mark structure examiners expect.',
        ],
        ans: '(a) Earthworm → <b>nephridia</b>; (b) cockroach → <b>Malpighian tubules</b>. Common function: removal of nitrogenous wastes and maintenance of fluid/ionic balance (osmoregulation).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Flame cells are the excretory structures of: (a) annelids (b) crustaceans (c) Platyhelminthes (d) insects.',
        steps: [
          '<b>Fast solve.</b> “Flame cells = protonephridia = flatworms (Platyhelminthes).” <b>Answer: (c).</b> Trap watch: (a) annelids → nephridia (some annelids also have protonephridia, but flatworms are the standard answer), (b) crustaceans → green glands, (d) insects → Malpighian tubules. Each wrong option is another group’s organ: the examiner is testing whether you’ve mixed up the map. Lock the five pairings and these are free marks.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '<b>(Match the Column)</b><br>Column I (Organ):<br>(A) Protonephridia<br>(B) Nephridia<br>(C) Malpighian tubules<br>(D) Antennal glands<br>Column II (Animal group):<br>(i) Crustaceans (prawn)<br>(ii) Insects (cockroach)<br>(iii) Flatworms (<i>Planaria</i>)<br>(iv) Annelids (earthworm)',
        steps: [],
        ans: 'A–(iii), B–(iv), C–(ii), D–(i).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty: Assertion–Reason',
        q: 'Assertion (A): Protonephridia are primarily osmoregulatory structures. Reason (R): Protonephridia (flame cells) occur in simple-bodied animals such as flatworms, rotifers and <i>Amphioxus</i>. (a) Both true, R explains A (b) Both true, R does not explain A (c) A true, R false (d) A false, R true',
        steps: [
          '<b>Solution.</b> A is <b>true</b>: in protonephridia the dominant role is ionic and fluid-volume regulation (osmoregulation), with nitrogen removal secondary. R is also <b>true</b>: flame cells are indeed found in flatworms, rotifers, some annelids and the cephalochordate <i>Amphioxus</i>. But R states where they occur, which does <b>not</b> explain why their main role is osmoregulation. The two true statements are not cause-and-effect. <b>Answer: (b).</b> (This is the classic A–R trap: both correct, but no causal link.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty: multi-statement',
        q: 'Which of the following statements is/are correct? (I) The contractile vacuole of <i>Amoeba</i> is primarily an osmoregulatory structure. (II) Sponges and <i>Hydra</i> lack a specialised excretory organ and rely on diffusion across the body surface. (III) In freshwater protozoa, water continuously tends to enter the cell by osmosis, which the contractile vacuole counteracts. Options: (a) I and II only (b) II and III only (c) I, II and III (d) I and III only',
        steps: [
          '<b>Solution.</b> All three are correct, so <b>(c)</b>. (I) The contractile vacuole’s dominant job is bailing out excess water, osmoregulation, not nitrogen disposal. (II) The simplest animals genuinely have no dedicated organ; ammonia and CO<sub>2</sub> leave by diffusion across the moist surface. (III) Because freshwater is hypotonic to the protozoan’s cytoplasm, water floods in osmotically, and the contractile vacuole repeatedly collects and expels it to prevent the cell from bursting, which is exactly why statement (I) is true. A student who treats the contractile vacuole as a “waste-dumping” organelle wrongly rejects (I) or (III).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the excretory organs of (i) <i>Planaria</i>, (ii) prawn, and (iii) humans.',
            a: '(i) Protonephridia/flame cells, (ii) antennal (green) glands, (iii) kidneys.',
          },
          {
            q: '[CUET] Which excretory structure is described as “ciliated cells whose beating resembles a flame,” and what is its chief function?',
            a: 'Protonephridia (flame cells); chiefly osmoregulation.',
          },
          {
            q: '[NEET] Arrange the following in order of increasing structural complexity: kidneys, protonephridia, nephridia.',
            a: 'Protonephridia → nephridia → kidneys.',
          },
          {
            q: '[NEET] Why are Malpighian tubules considered well-suited to terrestrial insect life? (one-line reasoning)',
            a: 'They empty waste into the gut and allow water to be reabsorbed, conserving body water, an adaptation to land.',
          },
          {
            q: '[NEET High-Difficulty] Match each: flame cells, green glands, Malpighian tubules, nephridia → with one of: cockroach, earthworm, prawn, flatworm.',
            a: 'Flame cells–flatworm; green glands–prawn; Malpighian tubules–cockroach; nephridia–earthworm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Green glands are the excretory organs of:',
        opts: [
          { label: 'insects', nudge: '(a) insects use Malpighian tubules.' },
          { label: 'crustaceans', nudge: null },
          { label: 'annelids', nudge: '(c) annelids use nephridia.' },
          { label: 'flatworms', nudge: '(d) flatworms use flame cells.' },
        ],
        correct: 1,
        solution: 'Antennal/green glands occur in crustaceans such as the prawn. All distractors are other groups’ organs.',
      },
      {
        t: 'mcq',
        q: 'Which excretory structure is directly associated with the alimentary canal (gut)?',
        opts: [
          { label: 'Nephridia', nudge: null },
          { label: 'Protonephridia', nudge: null },
          { label: 'Malpighian tubules', nudge: null },
          { label: 'Antennal glands', nudge: null },
        ],
        correct: 2,
        solution:
          'Malpighian tubules open into the gut, so insect nitrogenous waste leaves through the digestive tract: a key water-conserving feature. The others are not gut-associated in this way.',
      },
      {
        t: 'mcq',
        q: 'Protonephridia are found in all of the following <b>except</b>:',
        opts: [
          { label: 'Platyhelminthes', nudge: 'Flatworms, rotifers and the cephalochordate <i>Amphioxus</i> are the standard protonephridia-bearing groups.' },
          { label: 'rotifers', nudge: 'Flatworms, rotifers and the cephalochordate <i>Amphioxus</i> are the standard protonephridia-bearing groups.' },
          { label: '<i>Amphioxus</i>', nudge: 'Flatworms, rotifers and the cephalochordate <i>Amphioxus</i> are the standard protonephridia-bearing groups.' },
          { label: 'earthworm', nudge: null },
        ],
        correct: 3,
        solution:
          'The earthworm uses <b>nephridia</b>, not protonephridia. The trap is that earthworms are annelids, and “some annelids” do have protonephridia, but the earthworm specifically is the textbook nephridia animal.',
      },
      {
        t: 'mcq',
        q: 'The excretory organ representing the highest level of structural organisation in the list below is the:',
        opts: [
          { label: 'flame cell', nudge: null },
          { label: 'nephridium', nudge: null },
          { label: 'Malpighian tubule', nudge: null },
          { label: 'kidney', nudge: null },
        ],
        correct: 3,
        solution:
          'The vertebrate <b>kidney</b> is the most complex and efficient excretory organ, the endpoint of the simple-to-complex trend. The others belong to progressively simpler invertebrate body plans.',
      },
      {
        t: 'mcq',
        q: 'The contractile vacuole found in <i>Amoeba</i> is mainly concerned with:',
        opts: [
          { label: 'removal of urea', nudge: '(a) nitrogenous waste leaves mainly by diffusion, not via the vacuole.' },
          { label: 'osmoregulation', nudge: null },
          { label: 'gaseous exchange', nudge: '(c) gas exchange is across the cell membrane.' },
          { label: 'digestion of food', nudge: '(d) digestion occurs in food vacuoles, a different organelle entirely.' },
        ],
        correct: 1,
        solution:
          'In freshwater protozoa, water constantly enters the cell by osmosis; the contractile vacuole collects and expels this excess water, so its chief role is <b>osmoregulation</b>. Pairing the contractile vacuole with “waste removal” is the trap: it is a water-balance organelle first.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the earthworm and the cockroach.</b> Earthworm = <b>nephridia</b>; cockroach (insect) = <b>Malpighian tubules</b>. A very common mix-up: anchor “Malpighian = insects, gut-attached.”',
          '<b>Assuming every structure is mainly for nitrogen removal. Protonephridia (flame cells) are primarily osmoregulatory</b>: this exact distinction is a favourite assertion–reason hook.',
          '<b>Forgetting <i>Amphioxus</i> under protonephridia.</b> It’s a cephalochordate, yet it uses flame cells: examiners love this “odd one in.”',
          '<b>Calling green glands an insect organ.</b> They’re <b>crustacean</b> (prawn). “Green = crustacean, near the antennae.”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (memory):</b> lock the map with one ordered chain, <b>“Flatworm Flame, Annelid Nephridia, Insect Malpighian, Crustacean Green, Vertebrate Kidney”</b>, first letters of the animal groups read <b>F-A-I-C-V</b>. Run the chain and any match-column or “except” question falls out instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Universal job', note: 'every animal must excrete N-waste <b>and</b> osmoregulate; only the organ differs by group.' },
          {
            f: 'Simplest end (often tested)',
            note: 'body-surface <b>diffusion</b> → sponges, <i>Hydra</i>; <b>contractile vacuole</b> → protozoa (<i>Amoeba</i>, <i>Paramecium</i>), chiefly <b>osmoregulation</b>.',
          },
          { f: 'The five organ pairings (memorise)', note: '' },
          {
            f: '– <b>Protonephridia / flame cells</b> → flatworms (<i>Planaria</i>), rotifers, some annelids, <i>Amphioxus</i> → chiefly <b>osmoregulation</b>.',
            note: '',
          },
          { f: '– <b>Nephridia</b> → earthworm & other annelids → N-waste + fluid balance.', note: '' },
          { f: '– <b>Malpighian tubules</b> → insects/cockroach (<b>gut-attached</b>) → N-waste + osmoregulation (water-thrifty, land-adapted).', note: '' },
          { f: '– <b>Antennal (green) glands</b> → crustaceans (prawn) → excretion.', note: '' },
          { f: '– <b>Kidneys</b> → vertebrates → complex, efficient excretion + homeostasis.', note: '' },
          {
            f: 'Trend',
            note: 'body-surface diffusion → contractile vacuole → protonephridia → nephridia → Malpighian tubules → green glands → <b>kidney</b> (complexity ↑ with body organisation & the move to land).',
          },
          {
            f: 'Primary-role hook',
            note: 'contractile vacuole and protonephridia (flame cells) are <b>osmoregulation-first</b>; nephridia, Malpighian tubules and kidneys carry out <b>excretion and osmoregulation</b> together.',
          },
        ],
        aids: [
          '<b>Mnemonic (“F-A-I-C-V”):</b> <b>F</b>latworm-flame, <b>A</b>nnelid-nephridia, <b>I</b>nsect-Malpighian, <b>C</b>rustacean-green, <b>V</b>ertebrate-kidney.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 953–961 ─────────────────────────
  {
    n: '02',
    title: 'Nitrogenous Wastes & The Human Excretory System',
    kalam: 'The form an animal “chooses” is decided by one ruthless trade-off: toxicity versus water cost.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a foundation, high-yield NEET topic: expect 1–2 direct questions almost every year on modes of excretion (ammono-/ureo-/uricotelic) and nephron architecture, frequently as assertion–reason or match-the-column (the book’s estimate from past papers, not official figures). CBSE Boards typically ask a 2–3 mark “differentiate / label the nephron” question, and CUET leans on definition-and-example recall. Get the map right here and the urine-formation machinery in Topic 03 becomes almost free.',
      },
      {
        t: 'p',
        html: 'Imagine you run a busy dhaba kitchen. Through the day you produce two very different kinds of leftovers: things you can reuse tomorrow (oil, water, half a bag of onions) and things that will rot and poison the kitchen if they sit around (fish guts, spoiled milk). A good kitchen does two jobs at once: it throws out the dangerous stuff and quietly saves back whatever is still useful. Your body faces exactly this problem, and excretion is its answer.',
      },
      {
        t: 'p',
        html: 'Where does the “dangerous stuff” come from? Mostly from protein. When your cells break down amino acids for energy, they have to snip off the nitrogen-containing amino group first. That snipped-off nitrogen becomes <b>ammonia</b>, and ammonia is genuinely toxic, even in small amounts. Carbohydrates and fats don’t create this headache; it is mainly <b>protein (amino-acid) metabolism</b> that leaves your body holding nitrogenous waste it must get rid of (uric acid also comes from the breakdown of purines, and creatinine from muscle creatine).',
      },
      {
        t: 'p',
        html: 'Now here is the beautiful part. Different animals get rid of that nitrogen in different chemical forms, and the form an animal “chooses” is decided by one ruthless trade-off: <b>toxicity versus water cost.</b>',
      },
      {
        t: 'p',
        html: 'Think about it this way… Ammonia is cheap to make but extremely toxic, and to flush something that toxic you need lots of water to keep it dilute. That is fine if you live in water. A bony fish or a tadpole simply lets ammonia diffuse out across its gills or skin into the river around it: free water, problem solved. These are <b>ammonotelic</b> animals. But a camel in the Thar desert cannot afford to waste litres of water on waste disposal. So land animals invest energy to convert that toxic ammonia into something safer and more water-thrifty. Mammals (including you) turn it into <b>urea</b> (moderately toxic, needs only moderate water) and are called <b>ureotelic</b>. Most birds, reptiles and insects go even further, packing nitrogen into nearly insoluble <b>uric acid</b> that comes out as a semi-solid white paste with almost no water lost: they are <b>uricotelic</b>. (Ever noticed bird droppings are a dry white smear, not a puddle? That whiteness is uric acid, and the dryness is water conservation in action.)',
      },
      {
        t: 'p',
        html: 'So the whole logic collapses to a single sentence worth memorising: <b>as you move ammonia → urea → uric acid, toxicity falls and water-economy rises.</b>',
      },
      {
        t: 'p',
        html: 'Then comes the organ that does the careful version of this job in us: the kidney. The kidney’s genius is that it doesn’t politely pick out only the bad molecules. It does something almost reckless first: it filters a huge volume of blood indiscriminately, throwing nearly everything small out of the bloodstream: water, salts, glucose, urea, the lot. Then, in a second stage, it walks back along the tube and reabsorbs everything worth keeping, leaving the waste behind. It is the customs officer who confiscates your entire suitcase at the gate and then hands back only the items you’re actually allowed to keep. Wasteful-looking, but it guarantees nothing harmful slips through.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions. First, the neat “aquatic = ammonotelic, terrestrial = uricotelic” rule is a tendency, not a law; the frog is the classic trap: the aquatic <b>tadpole is ammonotelic</b>, but the adult land frog shifts to <b>ureotelic</b>. Second, “the kidney removes ammonia” is wrong for mammals: by the time blood reaches the kidney the ammonia has already been converted to urea in the <b>liver</b>. The kidney excretes the urea; the liver makes it. If the liver fails, it is <b>ammonia</b> (not urea) that dangerously builds up in the blood.',
      },

      { t: 'part', title: 'Key structures, definitions and functional units' },
      {
        t: 'table',
        title: 'Modes of excretion (defined by the nitrogenous product)',
        head: ['Mode', 'Excreted form', 'Relative toxicity', 'Water needed', 'Representative animals'],
        rows: [
          ['Ammonotelism', 'Ammonia (NH<sub>3</sub> / NH<sub>4</sub><sup>+</sup>)', 'Highest', 'Maximum', 'Bony fishes, aquatic amphibians, aquatic insects, tadpoles, many aquatic invertebrates'],
          ['Ureotelism', 'Urea', 'Intermediate', 'Moderate', 'Mammals (incl. humans), adult amphibians (land-dwelling ones), many marine cartilaginous fish'],
          ['Uricotelism', 'Uric acid (semi-solid)', 'Lowest', 'Minimum', 'Reptiles, birds, insects, land snails'],
        ],
      },
      {
        t: 'p',
        html: 'Master relation: <b>toxicity → Ammonia > Urea > Uric acid</b>, and water requirement falls in the same order.',
      },
      { t: 'p', html: '<b>Key definitions</b>' },
      { t: 'def', term: 'Excretion', html: 'removal of harmful nitrogenous metabolic wastes from the body.' },
      {
        t: 'def',
        term: 'Deamination',
        html: 'removal of the amino (−NH<sub>2</sub>) group from amino acids, the step that liberates nitrogen as ammonia.',
      },
      {
        t: 'def',
        term: 'Urea synthesis',
        html: 'in mammals, ammonia is converted to the less-toxic urea in the <b>liver</b> (via the ornithine/urea cycle) before being delivered to the kidney for excretion.',
      },
      {
        t: 'p',
        html: '<b>The human excretory system: gross plan.</b> One pair of <b>kidneys</b>, a pair of <b>ureters</b>, a single <b>urinary bladder</b>, and a <b>urethra</b>. The kidneys are reddish-brown and bean-shaped, lying <b>retroperitoneally</b> (against the dorsal inner wall of the abdominal cavity) between the levels of the <b>last thoracic and third lumbar vertebrae</b>; each measures about <b>10–12 cm in length, 5–7 cm in width and 2–3 cm in thickness, weighing ~120–170 g</b>. The <b>right kidney sits slightly lower than the left</b>. The inner concave notch is the <b>hilum</b>, through which the renal artery, renal vein, ureter and nerves enter/leave. Inward of the hilum lies the funnel-shaped <b>renal pelvis</b>, whose finger-like projections are the <b>calyces</b>; the kidney’s outer covering is a tough fibrous <b>capsule</b>. Internally the kidney has an outer <b>cortex</b> and inner <b>medulla</b>; the medulla is divided into conical <b>medullary pyramids</b> that point into the calyces, and the cortex dips between them as <b>renal columns (Columns of Bertini)</b>.',
      },
      { t: 'fig', id: 'b11-16-fig-16.2' },
      {
        t: 'p',
        html: '<b>The nephron: structural & functional unit.</b> Each kidney holds about <b>one million nephrons</b> (≈ 10<sup>6</sup>). A nephron has two parts:<br>• <b>Renal (Malpighian) corpuscle = glomerulus + Bowman’s capsule:</b> the glomerulus (a tuft of capillaries) is cupped inside the double-walled <b>Bowman’s capsule</b>. The capsule’s inner wall is made of specialised cells called <b>podocytes</b>. Blood enters via a wider <b>afferent arteriole</b> and leaves by a narrower <b>efferent arteriole</b>: that calibre mismatch builds the high pressure needed for filtration.<br>• <b>Renal tubule = PCT → Loop of Henle (descending + ascending limbs) → DCT → collecting duct.</b>',
      },
      {
        t: 'p',
        html: '<b>Functional landmarks (light numerics):</b><br>• <b>GFR (glomerular filtration rate)</b> ≈ 125 mL/min ≈ 180 L/day.<br>• <b>Renal blood flow</b> ≈ 1100–1200 mL/min, roughly <b>one-fifth of the cardiac output</b>.<br>• <b>Filtration fraction</b> = <frac><num>GFR</num><den>RPF</den></frac> (renal plasma flow): the proportion of plasma reaching the kidney that actually enters the tubules.',
      },

      { t: 'part', title: 'Structural organisation and logical framework' },
      {
        t: 'p',
        html: 'Because this topic has no algebraic derivation, the “procedure” here is twofold: first the reasoning that fixes an animal’s excretory mode, then the anatomical hierarchy you must be able to trace from whole-kidney down to a single nephron.',
      },
      {
        t: 'proc',
        title: 'Framework A: predicting the mode of excretion',
        steps: [
          '<b>Start from the nitrogen source.</b> Most nitrogenous waste traces back to deamination of amino acids (uric acid also arises from purine breakdown); so the question is never whether nitrogen must go, only in what form.',
          '<b>Weigh toxicity against habitat water.</b> Ask: does this animal have water to spare? Abundant water (aquatic) → it can afford the cheap, toxic, water-hungry option (ammonia). Scarce water (terrestrial, especially egg-layers needing to protect the embryo) → it must spend metabolic energy to make a safer, drier product (uric acid).',
          '<b>Slot it in.</b> Aquatic invertebrates, bony fishes, tadpoles → <b>ammonotelic</b>. Land mammals, adult land amphibians → <b>ureotelic</b>. Most birds, reptiles and insects → <b>uricotelic</b>.',
          '<b>Check the conversion site.</b> For ureotelic animals, remember the labour is done in the <b>liver</b>, not the kidney: this single fact defuses most trap questions.',
        ],
      },
      {
        t: 'proc',
        title: 'Framework B: tracing the architecture (whole-kidney → nephron)',
        steps: [
          '<b>Kidney exterior → interior.</b> Hilum (vessels + ureter) → renal pelvis → calyces → medullary pyramids (medulla) and the surrounding cortex, with Columns of Bertini bridging between pyramids.',
          '<b>Locate the nephron parts by zone: a favourite exam discriminator.</b><br>• <b>Cortex:</b> renal corpuscle (glomerulus + Bowman’s capsule), <b>PCT</b>, <b>DCT</b>.<br>• <b>Medulla: Loop of Henle</b> (in juxtamedullary nephrons it dips deep into the medulla and loops back up; in cortical nephrons it barely enters it).<br>• The <b>collecting duct</b> runs from cortex through medulla to open into the pelvis.',
          '<b>Follow the tubular fluid in order:</b> Bowman’s capsule → <b>PCT</b> → descending limb of Henle → ascending limb of Henle → <b>DCT</b> → collecting duct.',
          '<b>Match each segment to its specialisation.</b><br>• <b>PCT:</b> lined by simple cuboidal <b>brush-border</b> epithelium: the microvilli multiply surface area for bulk reabsorption (the major site, taking back roughly 70–80% of electrolytes and water along with nutrients and ions).<br>• <b>Loop of Henle:</b> the descending limb lets water leave; the <b>ascending limb is impermeable to water</b> but moves out salt: this asymmetry is what builds and maintains the high osmolarity (saltiness) of the medulla (the counter-current detail is in Topic 03).<br>• <b>DCT:</b> site of conditional reabsorption and <b>tubular secretion</b> of H<sup>+</sup>, K<sup>+</sup> and NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup>.<br>• <b>Collecting duct:</b> final water recovery → concentrates the urine.',
          '<b>Distinguish the two nephron types.</b> <b>Cortical nephrons</b> (the majority) have short loops that barely enter the medulla, with reduced <b>vasa recta</b>. <b>Juxtamedullary nephrons</b> (the minority) have long loops plunging deep into the medulla, accompanied by a prominent, U-shaped <b>vasa recta</b>: these are the units that make concentrated urine.',
          '<b>Sketch the blood path:</b> afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries / vasa recta. Note the <b>juxtaglomerular apparatus (JGA)</b>, formed where the afferent arteriole touches the DCT: its regulatory role (renin) is developed in Topic 04.',
        ],
      },
      { t: 'fig', id: 'b11-16-fig-16.3' },
      { t: 'fig', id: 'b11-16-fig-16.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>(3 marks)</b> Differentiate between cortical and juxtamedullary nephrons on the basis of (i) loop length, (ii) location of the loop, and (iii) vasa recta. State which type is chiefly responsible for producing concentrated urine.',
        steps: [
          '<b>Reasoning & answer.</b><br>• (i) Loop length: cortical nephrons have a <b>short</b> loop of Henle; juxtamedullary nephrons have a <b>long</b> loop.<br>• (ii) Location: in cortical nephrons the loop extends only <b>very little into the medulla</b>; in juxtamedullary nephrons it runs <b>deep into the medulla</b>.<br>• (iii) Vasa recta: <b>reduced/absent</b> in cortical nephrons; <b>well-developed and prominent</b> in juxtamedullary nephrons.<br>• Concentrated urine: the <b>juxtamedullary nephrons</b>, because their long loops plus prominent vasa recta build the steep medullary salt gradient required to draw water out of the filtrate.',
          '<b>Presentation tip:</b> a three-row comparison table earns full marks faster than a paragraph, and the concluding one-liner about concentrated urine is where the third mark usually hides.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange in the correct increasing order of toxicity and identify the form that demands the least water for elimination: uric acid, ammonia, urea.',
        steps: [
          '<b>Fast solve.</b> Don’t over-think: anchor on the single master rule. Toxicity order is <b>uric acid < urea < ammonia</b> (increasing), i.e. ammonia is the most toxic. Water need tracks toxicity, so the <b>least water</b> is needed for <b>uric acid</b>. Trap watch: the examiner flips between “toxicity” and “water requirement” hoping you reverse one of them. They run in the <b>same</b> direction: ammonia is worst on both counts, uric acid best on both. Lock that and you’ll never mis-pick.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '<b>(Statement type)</b> Read the two statements and choose the correct option. Statement I: In humans, the conversion of ammonia to urea occurs in the kidney. Statement II: Humans are ureotelic animals. (a) Both I and II are correct (b) I correct, II incorrect (c) I incorrect, II correct (d) Both incorrect',
        steps: [
          '<b>Reasoning & answer: (c).</b> Statement II is correct: humans excrete urea, so we are <b>ureotelic</b>. Statement I is the planted error: the ammonia → urea conversion happens in the <b>liver</b>, not the kidney; the kidney only <b>excretes</b> the already-formed urea. A classic “right destination, wrong factory” trap.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason + light numeric',
        q: 'Part A (numeric): If the glomerular filtration rate is about 180 L/day and an adult passes roughly 1.8 L of urine per day, estimate the percentage of the filtrate that is reabsorbed. Part B (A–R): <b>Assertion:</b> Almost all the glomerular filtrate is reabsorbed by the renal tubules. <b>Reason:</b> Reabsorption is necessary because the glomerulus filters blood indiscriminately, expelling useful substances along with wastes. Options: (a) A true, R true, R correctly explains A (b) A true, R true, R does not explain A (c) A true, R false (d) A false, R true.',
        steps: [
          '<b>Solution.</b> Part A: Fraction reabsorbed = <frac><num>180 − 1.8</num><den>180</den></frac> = <frac><num>178.2</num><den>180</den></frac> ≈ 0.99, i.e. about <b>99%</b> of the filtrate is reabsorbed (only ~1% leaves as urine). This enormous recovery is exactly why the body can afford to filter so wastefully in the first place.',
          'Part B: The Assertion is <b>true</b> (≈99%, as just shown). The Reason is true: filtration is non-selective, so reabsorption is the corrective second stage that rescues glucose, ions and most of the water. And the Reason <b>does</b> explain the Assertion: it is because filtration is indiscriminate that near-total reabsorption becomes physiologically necessary. <b>Answer: (a).</b>',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] List the four components of the human excretory system in the sequence in which urine passes through them, and name the structure where urine is temporarily stored.',
            a: 'Kidneys → ureters → urinary bladder → urethra; stored in the urinary bladder.',
          },
          {
            q: '[CUET] Name the cells forming the inner wall of Bowman’s capsule, and state the one feature of PCT epithelium that adapts it for reabsorption.',
            a: 'Podocytes; the brush border (microvilli) of its simple cuboidal epithelium increasing surface area.',
          },
          {
            q: '[NEET] Which segments of the nephron lie in the cortex and which lies in the medulla? Identify the segment that is impermeable to water.',
            a: 'Cortex: renal corpuscle, PCT, DCT; Medulla: loop of Henle (the long loops of juxtamedullary nephrons; collecting duct passes through); the ascending limb of the loop of Henle is impermeable to water.',
          },
          {
            q: '[NEET] A patient’s blood report shows a sharp rise in ammonia with little change in urea. Which organ’s failure does this most strongly indicate, and why?',
            a: 'The <b>liver</b>: it converts ammonia to urea, so liver failure lets ammonia accumulate while urea production stalls.',
          },
          {
            q: '[NEET High-Difficulty] Explain, using the toxicity-versus-water trade-off, why a desert-dwelling, egg-laying reptile is uricotelic while a freshwater fish is ammonotelic.',
            a: 'Conceptual: the reptile lacks spare water and must protect its egg, so it spends energy making nearly water-free uric acid; the fish is surrounded by water, so it can dump cheap, toxic, highly soluble ammonia straight into its environment.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The glomerulus together with the Bowman’s capsule is called the:',
        opts: [
          {
            label: 'Malpighian tubule',
            nudge: '(a) is the distractor for students who confuse the mammalian “corpuscle” with the insect “Malpighian <b>tubule</b>” (a totally different excretory organ): same name, wrong animal.',
          },
          { label: 'renal corpuscle', nudge: null },
          { label: 'juxtaglomerular apparatus', nudge: '(c) the JGA is a regulatory patch at the afferent-arteriole/DCT junction, not the filtering unit.' },
          { label: 'collecting duct', nudge: '(d) the collecting duct is far downstream and drains many nephrons.' },
        ],
        correct: 1,
        solution: 'The glomerulus enclosed in the Bowman’s capsule forms the <b>renal corpuscle</b> (also called the Malpighian body/corpuscle).',
      },
      {
        t: 'mcq',
        q: 'Which one of the following is <b>not</b> ammonotelic?',
        opts: [
          { label: 'Bony fish', nudge: '(a), (b), (c) are all genuinely ammonotelic aquatic forms: students who pick one of these forgot that the question wanted the exception.' },
          { label: 'Aquatic insect', nudge: '(a), (b), (c) are all genuinely ammonotelic aquatic forms: students who pick one of these forgot that the question wanted the exception.' },
          { label: 'Tadpole', nudge: '(a), (b), (c) are all genuinely ammonotelic aquatic forms: students who pick one of these forgot that the question wanted the exception.' },
          { label: 'Adult frog', nudge: null },
        ],
        correct: 3,
        solution:
          'The <b>adult land frog is ureotelic</b>; only its aquatic <b>tadpole</b> stage is ammonotelic. This life-stage switch is the single most-tested trap in the chapter (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'mcq',
        q: 'Maximum reabsorption of useful substances from the filtrate occurs in the:',
        opts: [
          { label: 'loop of Henle', nudge: '(a) the loop mainly sets up the medullary gradient.' },
          { label: 'distal convoluted tubule', nudge: '(b) the DCT does conditional, hormone-controlled reabsorption: important but far smaller in volume.' },
          { label: 'proximal convoluted tubule', nudge: null },
          { label: 'collecting duct', nudge: '(d) the collecting duct fine-tunes final water content, not bulk reabsorption.' },
        ],
        correct: 2,
        solution:
          'The <b>PCT</b> is the principal reabsorption site: its brush-border epithelium reclaims most nutrients, ions and the bulk of water/electrolytes.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): The afferent arteriole is wider than the efferent arteriole. Reason (R): This difference helps generate the high pressure needed for glomerular filtration.',
        opts: [
          { label: 'Both A and R true, R explains A', nudge: null },
          { label: 'Both true, R does not explain A', nudge: null },
          { label: 'A true, R false', nudge: null },
          { label: 'A false, R true', nudge: null },
        ],
        correct: 0,
        solution:
          'A is true: the incoming <b>afferent</b> vessel has a larger bore than the outgoing <b>efferent</b> vessel. R is true and is precisely the explanation: blood is forced into a glomerulus through a wide pipe and squeezed out through a narrow one, so pressure builds up inside the capillary tuft and drives <b>ultrafiltration</b>. The common error is reversing the calibre (thinking efferent is wider), which gives the physically impossible result of low glomerular pressure.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“The kidney converts ammonia to urea.”</b> It does <b>not</b>: the <b>liver</b> does. The kidney only excretes urea. Pin this with the liver-failure cue: failing liver → <b>ammonia</b> rises, not urea.',
          '<b>Frog vs tadpole.</b> Writing “frog is ammonotelic” loses easy marks. The <b>tadpole</b> is ammonotelic; the <b>adult frog</b> is ureotelic. Whenever “frog” appears, immediately ask: which stage?',
          '<b>Mixing up the arterioles and the zones.</b> Afferent = <b>wider/incoming</b>; efferent = <b>narrower/outgoing</b>. And by zone: corpuscle/PCT/DCT in <b>cortex</b>, loop of Henle in the <b>medulla</b> (the long loops of juxtamedullary nephrons). These two facts alone answer a startling number of NEET questions (the book’s estimate from past papers, not official figures).',
          '<b>Reversing toxicity and water need.</b> They do <b>not</b> oppose each other: both peak at ammonia and bottom out at uric acid.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “increasing order” or “which needs most/least water” item, mentally write the single arrow <b>NH<sub>3</sub> → urea → uric acid</b> and read off the direction the question asks. One arrow, almost every nitrogen-waste MCQ cracked: no separate memorising of two lists.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Source of N-waste', note: 'mainly deamination of <b>amino acids</b> (protein metabolism); uric acid also from purines.' },
          { f: 'Master arrow', note: 'NH<sub>3</sub> → urea → uric acid: toxicity ↓, water-economy ↑.' },
          {
            f: '– Ammonotelic → aquatic (fish, tadpole, aquatic insects); Ureotelic → mammals, adult land amphibians; Uricotelic → most birds, reptiles and insects.',
            note: '',
          },
          { f: 'Conversion site', note: 'ammonia → urea in the <b>liver</b> (kidney only excretes).' },
          { f: 'System', note: 'kidneys → ureters → urinary bladder → urethra. Right kidney slightly lower than left.' },
          {
            f: 'Kidney zones',
            note: '<b>cortex</b> (corpuscle, PCT, DCT) | <b>medulla</b> (loop of Henle of juxtamedullary nephrons, pyramids); Columns of Bertini = cortex between pyramids.',
          },
          {
            f: 'Nephron',
            note: '~10<sup>6</sup> per kidney = renal corpuscle (glomerulus + Bowman’s capsule with podocytes) + tubule (PCT → loop → DCT → collecting duct). Afferent <b>wider</b> than efferent. PCT = brush-border, max reabsorption.',
          },
          {
            f: 'Numbers',
            note: 'GFR ≈ 125 mL/min ≈ 180 L/day; RBF ≈ 1100–1200 mL/min ≈ <frac><num>1</num><den>5</den></frac> of cardiac output; ~99% of filtrate reabsorbed.',
          },
        ],
        aids: ['<b>Mnemonic: “Cooks Prepare Delicious Dishes” → Cortex: PCT, DCT</b> (loop of Henle is the odd one out, in the <b>medulla</b>). (Cortex: PCT, DCT; “Dishes” is just the end of the phrase.)'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 962–969 ─────────────────────────
  {
    n: '03',
    title: 'Urine Formation & Concentration',
    kalam: 'The kidney runs on exactly this philosophy: dump almost everything first, then carefully take back what’s worth keeping.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the single most heavily examined part of the chapter for NEET (the book’s estimate from past papers, not official figures): the three steps of urine formation and the counter-current mechanism appear almost every year, often as assertion–reason, match-the-column, or “arrange the tonicity” items. CBSE Boards favour a 3–5 mark “explain urine formation / counter-current” answer with a diagram. CUET sticks to definitions and the order of processes. If Topic 02 gave you the map of the nephron, this topic is the machine running on that map.',
      },
      {
        t: 'p',
        html: 'Picture a giant sabzi mandi at dawn. A truck backs up and simply dumps its entire load onto the sorting floor: good vegetables, rotten ones, mud, stones, everything together. It looks wasteful, even chaotic. But then a line of workers walks down the pile and picks back every good tomato, every usable onion, leaving only the spoiled scraps and grit to be swept out at the far end. The kidney runs on exactly this philosophy: <b>dump almost everything first, then carefully take back what’s worth keeping.</b> That single idea explains why urine formation has the steps it does.',
      },
      {
        t: 'p',
        html: 'Step one is the dumping: <b>glomerular filtration.</b> Blood arriving at the glomerulus is under high pressure (recall from Topic 02: a wide afferent arteriole feeding in, a narrow efferent arteriole choking the exit). That pressure squeezes a large volume of fluid out of the capillaries and into the Bowman’s capsule. The squeeze is indiscriminate (water, salts, glucose, amino acids, urea all pass through) but it is not completely blind: the filtration barrier is fine enough to hold back blood cells and the big plasma proteins. So the fluid collected, the <b>glomerular filtrate</b>, is essentially plasma minus its proteins and cells. Your two kidneys do this on an astonishing scale: about 180 litres of filtrate a day.',
      },
      {
        t: 'p',
        html: 'Step two is the rescue: <b>tubular reabsorption.</b> Obviously you cannot afford to lose 180 litres of water (let alone all your glucose) every day. So as the filtrate flows down the tubule, the lining cells reclaim the valuables back into the surrounding blood. Glucose and amino acids are pulled back completely; most water and salts return too. By the time the dust settles, roughly <b>99% of the filtrate has been reabsorbed</b>, leaving only about 1–1.5 litres to leave as urine (a flat 99% of 180 L would leave 1.8 L, so the figures run from about 1 to 1.8 L).',
      },
      {
        t: 'p',
        html: 'Step three is the final cleanup: <b>tubular secretion.</b> A few unwanted substances (extra H<sup>+</sup>, K<sup>+</sup>, ammonia, certain drugs) are actively added from the blood into the tubule, like a quality inspector tossing a couple more rejects onto the outgoing pile at the last moment. This is what lets the kidney fine-tune the blood’s pH and ionic balance.',
      },
      {
        t: 'p',
        html: 'Then comes the truly elegant trick: <b>concentration.</b> It is not enough to make waste; a land animal must make concentrated waste to save water. The kidney pulls this off using the <b>counter-current mechanism</b> in the loop of Henle and vasa recta, building a steep saltiness gradient deep in the medulla so that water can be drawn out of the final fluid. We’ll unpack the machinery in the Physiological mechanisms and regulatory pathways part.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Filtration is not guaranteed: it only happens if the outward push (glomerular blood pressure) beats the inward pulls (the blood’s own osmotic pull plus the back-pressure of fluid already in the capsule). Drop the blood pressure enough and filtration can stall. Also, reabsorption has limits: each substance has a <b>renal threshold</b>, a ceiling above which the tubule can no longer reabsorb it. Glucose has a high threshold, so it normally never appears in urine, but in an uncontrolled diabetic whose blood glucose overshoots that ceiling, glucose spills into the urine (glycosuria). The machine is powerful, not infinite.',
      },

      { t: 'part', title: 'Key definitions and functional quantities' },
      {
        t: 'p',
        html: '<b>The three processes (the order is itself an exam favourite): Glomerular filtration → Tubular reabsorption → Tubular secretion.</b>',
      },
      {
        t: 'def',
        term: 'Ultrafiltration / glomerular filtration',
        html: 'pressure-driven, non-selective filtering of blood across the glomerular membrane into the Bowman’s capsule.',
      },
      {
        t: 'def',
        term: 'Glomerular filtrate',
        html: 'the fluid in Bowman’s capsule: blood minus proteins and corpuscles; <b>isotonic</b> to plasma at this point.',
      },
      {
        t: 'def',
        term: 'Filtration membrane (3 layers)',
        html: '(i) the fenestrated endothelium of the glomerular capillaries, (ii) the basement membrane, and (iii) the epithelium of the Bowman’s capsule formed by <b>podocytes</b> with slit pores.',
      },
      {
        t: 'def',
        term: 'Glomerular Filtration Rate (GFR)',
        html: 'volume of filtrate formed per minute, ≈ 125 mL/min ≈ 180 L/day.',
      },
      { t: 'def', term: 'Net Filtration Pressure (NFP)', html: 'the effective outward pressure driving filtration:' },
      {
        t: 'formula',
        kicker: 'Net Filtration Pressure',
        main: 'NFP = GHP − (GCOP + CHP)',
        legend: [
          'GHP = glomerular (blood) hydrostatic pressure (the only outward force)',
          'GCOP = glomerular blood colloidal osmotic pressure',
          'CHP = capsular hydrostatic pressure (back-pressure of fluid in the capsule)',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Obligatory reabsorption',
        html: 'the unavoidable, hormone-independent reabsorption in the PCT (≈ 70–80% of electrolytes, all nutrients, most water).',
      },
      {
        t: 'def',
        term: 'Facultative reabsorption',
        html: 'the variable, hormone-controlled reabsorption of water/salt in the DCT and collecting duct.',
      },
      {
        t: 'def',
        term: 'Tubular secretion',
        html: 'active transfer of H<sup>+</sup>, K<sup>+</sup> and certain drugs, and diffusion of NH<sub>3</sub>, from blood into the tubule; maintains blood pH and ionic balance.',
      },
      {
        t: 'def',
        term: 'Renal threshold',
        html: 'the plasma concentration above which a substance (e.g. glucose, threshold ≈ 180 mg/dL) starts appearing in urine.',
      },
      {
        t: 'def',
        term: 'Counter-current mechanism',
        html: 'the arrangement of the loop of Henle and the U-shaped vasa recta, with filtrate and blood flowing in opposite directions, that builds and maintains the medullary osmotic gradient: rising from about 300 mOsm/L in the cortex to about 1200 mOsm/L in the inner medulla.',
      },

      { t: 'part', title: 'Physiological mechanisms and regulatory pathways' },
      {
        t: 'p',
        html: '<b>Step 1: Glomerular filtration (ultrafiltration).</b> Blood entering the glomerulus is held at high pressure because the efferent arteriole is narrower than the afferent one, a deliberate bottleneck that keeps the capillary tuft pressurised. This GHP forces fluid out across the three-layered filtration membrane. Two opposing forces resist it: the blood’s colloidal osmotic pressure (mostly due to plasma albumin, which “wants” to pull water back in) and the hydrostatic back-pressure of filtrate already sitting in the capsule. Filtration proceeds only while the net of these, the NFP, stays positive. Why this matters mechanically: anything that raises GHP or lowers the opposing pressures raises GFR, and vice-versa. Mild constriction of the <b>efferent</b> arteriole, for instance, dams blood inside the glomerulus and <b>raises</b> GFR (a marked constriction cuts renal blood flow and lowers it); constricting the <b>afferent</b> arteriole starves it and <b>lowers</b> GFR. The product is a protein-free, cell-free filtrate, isotonic to plasma.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Tubular reabsorption.</b> Now the rescue begins, segment by segment:<br>• <b>PCT</b> does the heavy lifting: obligatory reabsorption. Its brush-border cells reclaim glucose and amino acids completely by <b>active transport</b>, pull back ~70–80% of Na<sup>+</sup> and other electrolytes, and let water follow passively by osmosis. This is non-negotiable bulk recovery.<br>• <b>Descending limb of the loop of Henle</b> is permeable to water but almost impermeable to salts: water leaves, concentrating the fluid inside.<br>• <b>Ascending limb</b> is the mirror image: impermeable to water but moving salt out (actively in its thick part): fluid inside becomes dilute, and the salt dumped outside makes the medulla saltier.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Tubular secretion.</b> In the DCT and collecting duct (and also to some extent in the PCT) the tubule actively adds H<sup>+</sup>, K<sup>+</sup> and NH<sub>3</sub> to the forming urine (and can reabsorb HCO<sub>3</sub><sup>−</sup>). This is the kidney’s pH-and-ion control knob: the reason the same organ that excretes waste also keeps blood chemistry constant regardless of what you eat or drink.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Concentration of the filtrate (the counter-current mechanism).</b> This is the showpiece. Two structures cooperate:<br>• The <b>loop of Henle</b> acts as a counter-current multiplier. Because its two limbs run anti-parallel and handle water versus salt oppositely, they progressively stack salt in the medullary interstitium, multiplying a small single-step difference into a large vertical gradient: roughly <b>300 mOsm/L near the cortex up to ~1200 mOsm/L in the inner medulla</b>. Urea recycling from the collecting duct adds to this gradient.<br>• The <b>vasa recta</b> is a U-shaped capillary running parallel to the loop, with blood flowing opposite to the filtrate. It works as a counter-current exchanger: it supplies the medulla with oxygen yet carries away reabsorbed water without washing out the precious salt gradient. (Think of two pipes side by side carrying flow in opposite directions, swapping heat or solute so gently that the gradient survives.)',
      },
      {
        t: 'p',
        html: 'Finally, as the dilute fluid from the ascending limb passes through the <b>DCT and collecting duct</b>, it runs back down through this salty medulla. Under the influence of <b>ADH (vasopressin)</b>, the collecting duct becomes permeable to water, so water is osmotically pulled out into the salty interstitium, and the urine leaving is concentrated, hypertonic. (The hormonal control of this step, ADH plus renin-angiotensin-aldosterone and ANF, is developed fully in Topic 04; it is enough to see that the gradient built by the loop is what makes concentrated urine physically possible. Knock out the loop of Henle and only dilute urine can be made.)',
      },
      { t: 'fig', id: 'b11-16-fig-16.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>(5 marks)</b> Describe the formation of urine in a human nephron under the heads: (a) glomerular filtration, (b) reabsorption, (c) secretion. State where the bulk of reabsorption occurs.',
        steps: [
          '<b>Model answer.</b><br>• (a) Glomerular filtration: blood under high pressure in the glomerulus is filtered across the three-layered filtration membrane into the Bowman’s capsule; the filtrate is plasma minus proteins and blood cells (≈180 L/day at GFR ≈125 mL/min).<br>• (b) Reabsorption: about 99% of the filtrate is reabsorbed by the renal tubules; glucose and amino acids are taken back fully by active transport, with most water and ions following; the <b>PCT</b> is the major site of this bulk (obligatory) reabsorption.<br>• (c) Secretion: tubular cells (mainly DCT/collecting duct) actively secrete H<sup>+</sup>, K<sup>+</sup> and NH<sub>3</sub> into the filtrate, maintaining the ionic balance and pH of body fluids.<br>• Bulk reabsorption site: the <b>proximal convoluted tubule (PCT)</b>.',
          '<b>Tip:</b> a labelled nephron diagram converts this into a near-guaranteed full-marks answer.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'If the loop of Henle were experimentally removed from a mammalian nephron, the urine produced would be: (a) absent (b) more concentrated (c) more dilute (d) unchanged.',
        steps: [
          '<b>Fast solve.</b> Concentration of urine is the loop’s special job (it builds the medullary gradient). Remove the gradient-builder and the kidney loses its power to draw water out at the collecting duct → <b>the urine becomes more dilute, (c).</b> Trap watch: option (a) tempts students who think the loop makes urine: it doesn’t; filtration still happens in the glomerulus, so urine is still formed, just dilute.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '<b>(Match the Column)</b> Match Column I with Column II.<br>Column I:<br>(A) Renal corpuscle<br>(B) PCT<br>(C) Loop of Henle / vasa recta<br>(D) DCT<br>Column II:<br>(i) ~70–80% reabsorption of electrolytes<br>(ii) Filtration of blood<br>(iii) Active secretion of H<sup>+</sup>, K<sup>+</sup><br>(iv) Maintenance of medullary concentration gradient',
        steps: [
          'The renal corpuscle filters; the PCT does bulk reabsorption; the loop+vasa recta maintain the counter-current gradient; the DCT secretes ions to tune pH/balance.',
        ],
        ans: 'A–(ii), B–(i), C–(iv), D–(iii).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty: numeric + reasoning',
        q: 'Part A: In a nephron, suppose the glomerular hydrostatic pressure is 55 mmHg, the blood colloidal osmotic pressure is 30 mmHg, and the capsular hydrostatic pressure is 15 mmHg. Calculate the net filtration pressure and state whether filtration will occur. (All values are illustrative problem data.) Part B: A marine shark keeps high concentrations of urea and TMAO in its blood. Explain how this helps it survive in seawater.',
        steps: [
          '<b>Solution.</b> Part A: NFP = GHP − (GCOP + CHP) = 55 − (30 + 15) = 55 − 45 = +10 mmHg. Since the NFP is <b>positive</b>, the outward (filtering) force wins, so <b>filtration occurs</b>. If GHP had instead fallen to, say, 40 mmHg, NFP would be 40 − 45 = −5 mmHg and filtration would stop, which is exactly why a severe blood-pressure crash can shut down urine output.',
          'Part B: Seawater is hyperosmotic to most body fluids, so a shark would constantly lose water to its surroundings. By <b>retaining urea and TMAO</b>, the shark raises its own blood osmolarity to match (or slightly exceed) seawater, preventing dehydration. (TMAO also protects proteins from the destabilising effect of all that urea.) This is a striking exception to the usual rule that urea is “just a waste to dump”: here a nitrogenous waste is repurposed for osmoregulation.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three layers of the glomerular filtration membrane and state what the resulting glomerular filtrate is composed of.',
            a: 'Fenestrated glomerular capillary endothelium, basement membrane, podocyte (Bowman’s capsule) epithelium with slit pores; filtrate = plasma minus proteins and blood cells (isotonic to plasma).',
          },
          {
            q: '[CUET] Define renal threshold. Why does glucose appear in the urine of an uncontrolled diabetic but not in a healthy person?',
            a: 'Renal threshold = plasma concentration above which a substance starts appearing in urine; in a diabetic, blood glucose exceeds the (~180 mg/dL) threshold so the PCT cannot reabsorb it all, and the excess spills into urine.',
          },
          {
            q: '[NEET] Arrange in order of tonicity (low → high osmolarity of surrounding interstitium): cortex, outer medulla, inner medulla. Which structure maintains this gradient?',
            a: 'Cortex (~300 mOsm/L) → outer medulla → inner medulla (~1200 mOsm/L); maintained by the loop of Henle + vasa recta (counter-current mechanism).',
          },
          {
            q: '[NEET] Constriction of the efferent arteriole (afferent unchanged) will have what effect on GFR? Justify in one line.',
            a: 'GFR <b>increases</b> (for a mild constriction): damming blood inside the glomerulus raises glomerular hydrostatic pressure, so NFP rises.',
          },
          {
            q: '[NEET High-Difficulty] Explain why the vasa recta is described as a counter-current exchanger while the loop of Henle is a counter-current multiplier.',
            a: 'The loop actively generates and amplifies the gradient (multiplier) by pumping salt; the vasa recta merely preserves it while removing reabsorbed water (passive exchange), so it doesn’t wash the gradient out.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct sequence of processes in urine formation is:',
        opts: [
          { label: 'reabsorption → filtration → secretion', nudge: '(a)/(c)/(d) scramble the order: a common careless-reading slip; the standard order is filtration, then reabsorption, then secretion.' },
          { label: 'filtration → reabsorption → secretion', nudge: null },
          { label: 'secretion → filtration → reabsorption', nudge: '(a)/(c)/(d) scramble the order: a common careless-reading slip; the standard order is filtration, then reabsorption, then secretion.' },
          { label: 'filtration → secretion → reabsorption', nudge: '(a)/(c)/(d) scramble the order: a common careless-reading slip; the standard order is filtration, then reabsorption, then secretion.' },
        ],
        correct: 1,
        solution: 'Blood is first filtered at the glomerulus, the filtrate is then reabsorbed along the tubule, and finally extra ions/wastes are secreted in.',
      },
      {
        t: 'mcq',
        q: 'The glomerular filtrate is best described as:',
        opts: [
          { label: 'blood', nudge: '(a) wrong: cells and proteins are excluded.' },
          { label: 'urine', nudge: '(b) wrong: it is not yet urine; reabsorption hasn’t happened.' },
          { label: 'plasma minus proteins and corpuscles', nudge: null },
          { label: 'plasma minus all salts', nudge: '(d) wrong: salts pass freely into the filtrate.' },
        ],
        correct: 2,
        solution: 'The membrane holds back cells and large proteins but lets water, salts, glucose and urea through.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): The ability to produce concentrated urine depends mainly on the loop of Henle. Reason (R): The loop of Henle, along with the vasa recta, sets up a high osmolarity gradient in the medulla.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          { label: 'Both true, R does not explain A', nudge: null },
          { label: 'A true, R false', nudge: null },
          { label: 'A false, R true', nudge: null },
        ],
        correct: 0,
        solution:
          'A is true (a longer loop → greater concentrating power; no loop → dilute urine). R is true and is exactly the reason: the counter-current gradient (≈300 → 1200 mOsm/L) is what lets water be drawn out of the collecting duct. The mechanism in R directly causes the capability in A.',
      },
      {
        t: 'mcq',
        q: 'Which substance is normally <b>absent</b> from the glomerular filtrate of a healthy person?',
        opts: [
          { label: 'Glucose', nudge: '(a) glucose, (b) urea, (c) NaCl are all small enough to be filtered freely (glucose is then reabsorbed downstream, which is a later step: don’t confuse “absent from filtrate” with “absent from urine”).' },
          { label: 'Urea', nudge: '(a) glucose, (b) urea, (c) NaCl are all small enough to be filtered freely (glucose is then reabsorbed downstream, which is a later step: don’t confuse “absent from filtrate” with “absent from urine”).' },
          { label: 'Sodium chloride', nudge: '(a) glucose, (b) urea, (c) NaCl are all small enough to be filtered freely (glucose is then reabsorbed downstream, which is a later step: don’t confuse “absent from filtrate” with “absent from urine”).' },
          { label: 'Albumin', nudge: null },
        ],
        correct: 3,
        solution: 'Albumin is a large plasma protein held back by the filtration membrane, so it does not enter the filtrate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing “absent from filtrate” with “absent from urine.”</b> Glucose is filtered (present in filtrate) but normally reabsorbed completely (absent in urine). Proteins/cells are absent from the filtrate itself. Read the stem carefully: examiners exploit this exact gap.',
          '<b>Getting the arteriole–GFR logic backwards.</b> Efferent (mild) constriction → GFR <b>up</b>; afferent constriction → GFR <b>down</b>. Reason from “where does the blood get dammed?” rather than memorising.',
          '<b>Thinking the loop of Henle “makes” urine.</b> It doesn’t make urine: it concentrates it. Removing it gives dilute (not zero) urine.',
          '<b>Calling tubular secretion a type of reabsorption.</b> They are opposite directions: reabsorption = tubule → blood; secretion = blood → tubule.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any NFP problem, write the one equation NFP = GHP − (GCOP + CHP) and check the sign: positive means filtration happens, negative means it stops. One equation handles every variant the exam throws at you.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Three steps', note: 'glomerular <b>filtration</b> → tubular <b>reabsorption</b> → tubular <b>secretion</b>.' },
          {
            f: 'Filtrate = plasma minus proteins & cells, isotonic to plasma. <b>Membrane = 3 layers</b> (fenestrated endothelium + basement membrane + podocyte epithelium).',
            note: '',
          },
          { f: '<b>GFR</b> ≈ 125 mL/min ≈ 180 L/day; ~99% reabsorbed → ~1–1.5 L urine/day (NCERT).', note: '' },
          { f: 'NFP = GHP − (GCOP + CHP)', note: 'positive ⇒ filtration occurs.' },
          {
            f: '<b>PCT</b> = bulk (obligatory) reabsorption; glucose/aa by <b>active transport</b>. <b>DCT/CD</b> = secretion of H<sup>+</sup>, K<sup>+</sup>, NH<sub>3</sub> + ADH-controlled (facultative) water recovery.',
            note: '',
          },
          {
            f: 'Counter-current',
            note: 'loop of Henle = <b>multiplier</b>, vasa recta = <b>exchanger</b>; gradient <b>~300 → ~1200 mOsm/L</b> (cortex → inner medulla). Longer loop ⇒ more concentrated urine.',
          },
        ],
        aids: ['<b>Mnemonic: “Filter, Reclaim, Secrete” (F-R-S)</b> for the order; <b>“Multiply in the loop, Exchange in the recta.”</b>'],
      },
    ],
  },
];
