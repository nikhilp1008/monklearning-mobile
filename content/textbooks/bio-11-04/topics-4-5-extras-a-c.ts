import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 4, Animal Kingdom: Topic 04 Chordata and Topic 05 Master Revision:
 * Complete Reference, then Additional topics A, B and C, word for word from the Class 11
 * Biology Master Reference (pp. 242–265).
 *
 * Topic 04 Chordata, pp. 242–250 (Figure 4.5, caption p. 244 and drawing p. 245; Figure 4.6,
 * caption p. 246 and drawing p. 247; both set where the book's captions stand, at the end of
 * Key procedures and logical framework). Topic 05 Master Revision: Complete Reference, pp.
 * 251–253 (an ordinary last topic, DECISIONS-B11 12; the parts are the book's own headings).
 * The shared opening of "Animal Kingdom: Additional Topics" (p. 254) heads Additional topic A's
 * Introduction. A Comparative Functional Anatomy Across the Kingdom, pp. 254–259 (its answers
 * end at the top of p. 259); B Economic and Medical Importance: The Kingdom’s Uses and Harms,
 * pp. 259–262 (its answers end on p. 262, where Addendum C begins); C Larval Forms and Life
 * Cycles: The Atlas, pp. 262–266 (its last answer ends at the top of p. 266, before
 * Addendum D).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on
 * one line, scientific names italic, names above the genus upright. The book's section order
 * is 00 (master guide), 01 Basis of Classification, 02 Non-Chordata, 03 Chordata; ours is
 * Topics 01 to 05 (Master Map, Basis of Classification, Non-Chordata, Chordata, Master
 * Revision), so "Sub-02" is "Topic 03", "this subtopic" is "this topic", "Addendum A–C" is
 * "Additional topic A–C". Topic 04 prints MCQ options (a) to (d) and "Correct: (b)"; the
 * book's letters are kept. Worked-example options are numbered (1) to (4).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 242–250 ─────────────────────────
  {
    n: '04',
    title: 'Chordata',
    kalam: 'The four chordate features need only appear at some stage of life, usually the embryo.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Chordata is a question-dense topic for NEET: expect <b>3–5 questions</b> yearly (the book’s estimate from past papers, not official figures), weighted heavily toward vertebrate-class characteristics asked as “without a single exception” questions, where the exceptions (the crocodile’s heart, the platypus’s eggs) are the trap, protochordate notochord position, and assertion–reason items on chordate fundamentals. CBSE Boards ask <b>2–3 mark</b> “list the features of class X” or “distinguish between two classes” answers, and CUET lifts one-liners. (Biology is not part of the JEE syllabus.) This topic completes the chapter: Topic 03 left off at the notochord boundary, and here we cross it.',
      },
      {
        t: 'p',
        html: 'In Topic 03 you toured the non-chordate gallery and stopped at a velvet rope: the <b>notochord</b>. Everything beyond that rope is one phylum, Chordata, and it contains the animals you know best: every fish, frog, snake, sparrow, and human. The remarkable thing is that all of them, from a tiny lancelet buried in sand to a blue whale, share the same four-part blueprint at some point in life.',
      },
      {
        t: 'p',
        html: 'Think of the four fundamental chordate features as a “starter kit” every chordate is issued, at least during development:<br>1. A <b>notochord</b>: a flexible dorsal rod that acts as the body’s first backbone-substitute and an axis for muscles to pull against.<br>2. A <b>dorsal, hollow nerve cord</b>: the brain-and-spinal-cord line, running along the back (contrast the ventral, solid nerve cord of non-chordates).<br>3. <b>Pharyngeal gill slits</b>: openings in the throat region, used for filter-feeding or breathing (in us, they appear only in the embryo and then close).<br>4. A <b>post-anal tail</b>: a tail extending beyond the anus, for balance and propulsion.',
      },
      {
        t: 'p',
        html: 'Most chordates also have a ventral heart (a closed circulation in vertebrates); the lancelet has no true heart and tunicates have an open system, so rely on the four features above.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the notochord like the bamboo scaffolding around a building under construction in any Indian city. In the simplest chordates (the lancelet), the bamboo stays up for life: the notochord runs the whole body, permanently. In the sea squirt (a tunicate), the scaffolding is only ever put up around the “tail” of the larva and is dismantled once the adult settles down. And in us vertebrates, the temporary bamboo scaffolding (embryonic notochord) is replaced by a permanent steel frame: the <b>vertebral column</b>. Same starting structure, three different fates. That single idea, what happens to the notochord, is the master key that sorts the entire phylum.',
      },
      {
        t: 'p',
        html: 'So Chordata splits into three subphyla on exactly this basis:<br>• <b>Urochordata (Tunicata)</b>: notochord only in the larval tail, lost in the adult (<i>Ascidia</i>, <i>Salpa</i>, <i>Doliolum</i>).<br>• <b>Cephalochordata</b>: notochord runs head to tail and persists for life (<i>Branchiostoma</i>, the lancelet).<br>• <b>Vertebrata</b>: the embryonic notochord is replaced by a vertebral column, and a cranium (“brain box”) protects the brain.',
      },
      {
        t: 'p',
        html: 'Urochordata and Cephalochordata together are the <b>Protochordata (Acraniata)</b>: chordates without a cranium. The vertebrates (Craniata) then fan out into the seven classes you must master.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• The four chordate features need only appear at <b>some stage</b> of life, usually the embryo. Adult humans have no gill slits or tail, but the embryo did, and that is what counts.<br>• Class “rules” are stated as the <b>typical</b> condition and almost always carry a famous exception: reptiles have a 3-chambered heart <b>except crocodiles</b> (4), mammals are viviparous <b>except monotremes</b> (egg-laying platypus and echidna). NEET often tests these exceptions.<br>• <b>All vertebrates are chordates, but not all chordates are vertebrates</b>: the protochordates are the chordates that never become vertebrates.<br>• Cyclostomes are vertebrates despite being <b>jawless and without paired fins</b>: do not demote them to non-chordates.',
      },

      { t: 'part', title: 'Key terms and classification framework' },
      {
        t: 'p',
        html: '<b>The chordate fundamentals (the “starter kit”):</b> notochord; dorsal, hollow, single nerve cord; paired pharyngeal gill slits; post-anal tail; in most chordates also a ventral heart (a closed circulation in vertebrates; the lancelet has no true heart and tunicates have an open system); bilateral symmetry; triploblastic; coelomate; organ-system grade.',
      },
      {
        t: 'p',
        html: '<b>Protochordata at a glance:</b><br>• <b>Urochordata (Tunicata):</b> marine; notochord confined to the <b>larval tail</b>, absent in adult; body often encased in a tunic. <i>Ascidia</i>, <i>Salpa</i>, <i>Doliolum</i>.<br>• <b>Cephalochordata:</b> marine; notochord extends <b>head to tail and persists throughout life</b>. <i>Branchiostoma</i> (Amphioxus / Lancelet).',
      },
      {
        t: 'p',
        html: '<b>Vertebrata (Craniata):</b> notochord replaced by a <b>vertebral column</b>; cranium present; ventral heart (2-, 3-, or 4-chambered); kidneys; paired appendages (fins or limbs) in the jawed vertebrates. Divided into <b>Agnatha</b> (jawless) and <b>Gnathostomata</b> (jawed); Gnathostomata splits into <b>Pisces</b> (fishes) and <b>Tetrapoda</b> (four-limbed). The seven living classes:',
      },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Endoskeleton', 'Heart', 'Body temp.', 'Respiration', 'Reproduction', 'Distinctive features', 'Examples'],
        rows: [
          [
            'Cyclostomata (Agnatha)',
            'Cartilaginous',
            '2-chambered',
            'Poikilo.',
            'Gills (6–15 pairs)',
            'Ectoparasites; spawn in fresh water, then die',
            '<b>Jawless</b>, sucking circular mouth, <b>no scales, no paired fins</b>; notochord persists',
            '<i>Petromyzon</i> (lamprey), <i>Myxine</i> (hagfish)',
          ],
          [
            'Chondrichthyes (Pisces)',
            'Cartilaginous',
            '2-chambered',
            'Poikilo.',
            'Gills, <b>no operculum</b>',
            'Internal fertilisation; many are viviparous; male has claspers',
            'Marine; ventral mouth; <b>placoid scales</b>; <b>no air bladder</b> (must keep swimming)',
            '<i>Scoliodon</i>, <i>Pristis</i>, <i>Trygon</i>, <i>Torpedo</i>',
          ],
          [
            'Osteichthyes (Pisces)',
            '<b>Bony</b>',
            '2-chambered',
            'Poikilo.',
            'Gills, <b>operculum present</b>',
            'Mostly external fertilisation; mostly oviparous',
            'Marine & freshwater; <b>air bladder</b> for buoyancy; cycloid/ctenoid scales',
            '<i>Exocoetus</i> (flying fish), <i>Hippocampus</i>, <i>Labeo</i>',
          ],
          [
            'Amphibia (Tetrapoda)',
            'Bony',
            '<b>3-chambered</b>',
            'Poikilo.',
            'Gills/lungs/<b>skin</b>',
            'External fertilisation; oviparous',
            'Moist glandular skin, no scales; usually two pairs of limbs (<i>Ichthyophis</i> is limbless); live in water & land',
            '<i>Rana</i>, <i>Bufo</i>, <i>Hyla</i>, <i>Ichthyophis</i>',
          ],
          [
            'Reptilia (Tetrapoda)',
            'Bony',
            '3-chambered (<b>4 in crocodiles</b>)',
            'Poikilo.',
            'Lungs',
            'Internal fertilisation; oviparous (shelled eggs on land)',
            'Dry cornified skin with <b>epidermal scales</b>; no ear pinna',
            '<i>Chelone</i>, <i>Calotes</i>, <i>Naja</i>, <i>Crocodilus</i>',
          ],
          [
            'Aves (Tetrapoda)',
            'Bony, <b>pneumatic</b>',
            '<b>4-chambered</b>',
            '<b>Homoio.</b> (warm)',
            'Lungs + <b>air sacs</b>',
            'Internal fertilisation; oviparous',
            '<b>Feathers</b>; fore-limbs as wings; beak, no teeth',
            '<i>Corvus</i>, <i>Columba</i>, <i>Struthio</i>, <i>Aptenodytes</i>',
          ],
          [
            'Mammalia (Tetrapoda)',
            'Bony',
            '<b>4-chambered</b>',
            '<b>Homoio.</b> (warm)',
            'Lungs (+ <b>diaphragm</b>)',
            'Mostly viviparous (<b>oviparous monotremes</b>)',
            '<b>Hair</b>, <b>mammary glands</b>, external <b>ear pinna</b> in most mammals, 7 cervical vertebrae in almost all',
            '<i>Ornithorhynchus</i>, <i>Macropus</i>, <i>Pteropus</i>, <i>Homo sapiens</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '(No formulae, SI units, or dimensional formulae apply to this descriptive topic.)',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No derivation applies; the skill is to <b>place any chordate by running a branching key</b>, and the whole tree turns on a handful of yes/no questions. The reasoning order matters: each question is asked where it splits the cleanest.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Confirm it is a chordate at all.</b> Look for the four fundamentals at some stage: notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail. The notochord is the decisive one: its presence (ever) is what crossed the velvet rope out of the non-chordates.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Cranium present?</b> This is the protochordate/vertebrate split, and it goes second because it is the broadest cut inside the phylum.<br>• No cranium (Acraniata/Protochordata) → go to Step 3.<br>• Cranium present, notochord replaced by a vertebral column → Vertebrata, go to Step 4.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Read the notochord’s extent (within Protochordata).</b> This is why the two protochordate subphyla are separated: it is the single feature that distinguishes them.<br>• Notochord only in the larval tail, lost in the adult → <b>Urochordata (Tunicata)</b>.<br>• Notochord head-to-tail, persisting for life → <b>Cephalochordata</b>.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Jaws present? (within Vertebrata).</b> Jaws are the next great innovation, so they branch first among vertebrates.<br>• Jawless, with a sucking circular mouth, no paired fins → <b>Cyclostomata</b> (Agnatha). (Stop.)<br>• Jawed (Gnathostomata) → go to Step 5.',
      },
      {
        t: 'p',
        html: '<b>Step 5: Limbs or fins? (within Gnathostomata).</b><br>• Paired fins, aquatic (Pisces) → Step 6.<br>• Two pairs of limbs (Tetrapoda) → Step 7.',
      },
      {
        t: 'p',
        html: '<b>Step 6: Skeleton material (within Pisces).</b> This is the deciding evidence for the two fish classes.<br>• Cartilaginous skeleton, no operculum, placoid scales, no air bladder → <b>Chondrichthyes</b>.<br>• Bony skeleton, operculum, air bladder → <b>Osteichthyes</b>.',
      },
      {
        t: 'p',
        html: '<b>Step 7: Read skin, heart, and temperature (within Tetrapoda).</b> Each clean signal points to one class:<br>• Moist, scaleless skin; 3-chambered heart; can respire through skin → <b>Amphibia</b>.<br>• Dry scaly skin; 3-chambered heart (4 in crocodiles); shelled eggs on land → <b>Reptilia</b>.<br>• Feathers; pneumatic bones and air sacs; 4-chambered; warm-blooded → <b>Aves</b>.<br>• Hair and mammary glands; diaphragm; 4-chambered; warm-blooded → <b>Mammalia</b>.',
      },
      {
        t: 'p',
        html: 'A worked run: an aquatic vertebrate has jaws, paired fins, a <b>cartilaginous</b> skeleton, a ventral mouth, placoid scales, and <b>no operculum</b>. Path: chordate (Step 1) → cranium/vertebral column (Step 2 → Vertebrata) → jawed (Step 4 → Gnathostomata) → fins (Step 5 → Pisces) → cartilage + no operculum (Step 6) → <b>Chondrichthyes</b>.',
      },
      { t: 'fig', id: 'b11-04-fig-4.5' },
      { t: 'fig', id: 'b11-04-fig-4.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'List the four fundamental features common to all chordates, and state for each whether it is retained in adult humans. Then name the structure that replaces the notochord in adult vertebrates.',
        steps: [
          '<b>Step 1: State the four features and their fate in adult humans.</b><br>(i) <b>Notochord</b>: present in the embryo, replaced later (not retained as such).<br>(ii) <b>Dorsal, hollow nerve cord</b>: retained, as the brain and spinal cord.<br>(iii) <b>Pharyngeal gill slits</b>: present in the embryo only; they close before birth (not retained).<br>(iv) <b>Post-anal tail</b>: present in the embryo; reduced to the tail-bone (coccyx) in the adult.',
          '<b>Step 2: Name the replacement.</b> In adult vertebrates the embryonic notochord is replaced by the <b>vertebral column</b>.',
          '<b>Concluding statement:</b> chordate identity is decided by features present at some stage; the human embryo carries all four even though the adult retains only the nerve cord in full.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Single-Concept / Speed Trap',
        q: 'Which one of the following is matched <b>without exception</b>?<br><b>(1)</b> Reptilia → four-chambered heart <b>(2)</b> Mammalia → viviparous <b>(3)</b> Chondrichthyes → cartilaginous endoskeleton <b>(4)</b> Chordata → jaws with upper and lower jaw',
        steps: [
          '<b>Fast solution.</b> Hunt the exception in each. Reptiles are 3-chambered <b>except crocodiles</b> → (1) out. Mammals are viviparous <b>except monotremes</b> (platypus) → (2) out. Chordates include the <b>jawless</b> cyclostomes and protochordates → (4) out. Chondrichthyes are cartilaginous <b>with no exception</b> → (3) is correct.',
          '<b>Speed pitfall:</b> options (1) and (2) are two of the most over-generalised facts in the chapter; train yourself to fire “crocodile” and “platypus” the instant you see “reptile” or “mammal.”',
        ],
        ans: '(3).',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion–Reason',
        q: '<b>Assertion (A):</b> Cyclostomes are classified as vertebrates even though they lack jaws and paired fins. <b>Reason (R):</b> They possess a cranium enclosing the brain. Options: (1) Both true, R explains A. (2) Both true, R does not explain A. (3) A true, R false. (4) A false, R true.',
        steps: [
          '<b>Evaluate A.</b> Cyclostomata (e.g., <i>Petromyzon</i>) are jawless and without paired fins yet are placed in Vertebrata. <b>A is true.</b> <b>Evaluate R.</b> They do have a cranium enclosing the brain (NCERT: their cranium and vertebral column are cartilaginous), the defining vertebrate criterion. <b>R is true.</b> <b>Test the link.</b> Vertebrate status is decided by the cranium, <b>not</b> by jaws or fins, so R is precisely why A holds.',
        ],
        ans: '(1).',
      },
      {
        t: 'ex',
        tag: 'NEET HOTS',
        q: 'Four vertebrates are described only by features:<br>• P: four-chambered heart, body covered with feathers, bones with air cavities.<br>• Q: four-chambered heart, hair on skin, lays eggs.<br>• R: three-chambered heart, dry scaly skin, lungs only, lays shelled eggs on land.<br>• S: cartilaginous skeleton, gill slits without an operculum, placoid scales.<br>Identify the class of each, and explain why Q is still placed in Mammalia despite laying eggs.',
        steps: [
          '<b>Step 1: Decode each.</b><br>• <b>P:</b> feathers + pneumatic bones + 4-chambered → <b>Aves.</b><br>• <b>Q:</b> hair + 4-chambered heart, but oviparous → <b>Mammalia</b> (a monotreme).<br>• <b>R:</b> dry scales + lungs + shelled land eggs + 3-chambered → <b>Reptilia.</b><br>• <b>S:</b> cartilage + no operculum + placoid scales → <b>Chondrichthyes.</b>',
          '<b>Step 2: Resolve the Q paradox.</b> Mammalia is defined by <b>hair, mammary glands, and a diaphragm</b>, not by viviparity. The monotremes (<i>Ornithorhynchus</i>, the platypus, and <i>Tachyglossus</i>, the echidna) lay eggs yet possess hair and secrete milk, so they satisfy the defining mammalian criteria and remain mammals. Egg-laying is an exception to the usual mammalian habit, not to the definition.',
        ],
        ans: 'P → Aves, Q → Mammalia, R → Reptilia, S → Chondrichthyes; Q is a mammal because hair and mammary glands, not viviparity, define the class.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between Chondrichthyes and Osteichthyes on the basis of endoskeleton, presence of operculum, and air bladder, giving one example of each.',
            a: 'Chondrichthyes have a cartilaginous skeleton, no operculum (gill slits exposed), and no air bladder (e.g., <i>Scoliodon</i>); Osteichthyes have a bony skeleton, an operculum covering the gills, and an air bladder for buoyancy (e.g., <i>Labeo</i>).',
          },
          {
            q: '[NEET] Name the subphylum in which the notochord is restricted to the larval tail, and give one example.',
            a: 'Urochordata (Tunicata); e.g., <i>Ascidia</i>.',
          },
          {
            q: '[NEET] “All chordates are vertebrates.” State whether this is true or false and justify in one line.',
            a: 'False: the protochordates (Urochordata, Cephalochordata) are chordates that are <b>not</b> vertebrates; the correct statement is the reverse, “all vertebrates are chordates.”',
          },
          {
            q: '[NEET] Which single feature places the jawless lamprey, which has no paired fins, firmly within the vertebrates?',
            a: 'The possession of a cranium (a skull) enclosing the brain.',
          },
          {
            q: '[NEET HOTS] Crocodiles and birds are not in the same class, yet both possess a four-chambered heart. Explain why this shared feature does not make them the same class, naming the class of each.',
            a: 'Classification rests on the whole suite of defining features, not one shared trait; crocodiles have dry scaly skin and lay shelled eggs (<b>Reptilia</b>), whereas birds have feathers, pneumatic bones, and air sacs (<b>Aves</b>): the four-chambered heart evolved in both but does not override these class-defining differences.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The notochord persists throughout life and extends from head to tail in',
        opts: [
          {
            label: '<i>Ascidia</i>',
            nudge: '<b>(a)</b> trap: <i>Ascidia</i> (Urochordata) has the notochord only in the larval tail: the classic protochordate mix-up.',
          },
          { label: '<i>Branchiostoma</i>', nudge: null },
          {
            label: '<i>Rana</i>',
            nudge: '<b>(c)/(d)</b> traps: in the adult frog and pigeon (vertebrates) the notochord is replaced by the vertebral column.',
          },
          {
            label: '<i>Columba</i>',
            nudge: '<b>(c)/(d)</b> traps: in the adult frog and pigeon (vertebrates) the notochord is replaced by the vertebral column.',
          },
        ],
        correct: 1,
        solution: '<i>Branchiostoma</i> (Cephalochordata) retains the notochord head-to-tail for life.',
      },
      {
        t: 'mcq',
        q: 'Which class is correctly paired with a feature that holds <b>without exception</b>?',
        opts: [
          { label: 'Mammalia → viviparous', nudge: '<b>(a)</b> trap: monotremes (platypus) are oviparous mammals.' },
          { label: 'Reptilia → three-chambered heart', nudge: '<b>(b)</b> trap: crocodiles have a four-chambered heart.' },
          { label: 'Aves → presence of feathers', nudge: null },
          {
            label: 'Osteichthyes → internal fertilisation',
            nudge: '<b>(d)</b> trap: most bony fishes show external fertilisation, so “internal” is wrong as a rule.',
          },
        ],
        correct: 2,
        solution: 'Feathers are present in all birds with no exception.',
      },
      {
        t: 'mcq',
        q: 'A marine, jawed, cartilaginous fish that lacks an operculum and an air bladder belongs to',
        opts: [
          { label: 'Osteichthyes', nudge: '<b>(a)</b> trap: Osteichthyes are bony and have an operculum and air bladder.' },
          { label: 'Chondrichthyes', nudge: null },
          { label: 'Cyclostomata', nudge: '<b>(c)</b> trap: cyclostomes are jawless, so the word “jawed” rules them out.' },
          { label: 'Amphibia', nudge: '<b>(d)</b> trap: amphibians are not fishes and have moist scaleless skin.' },
        ],
        correct: 1,
        solution: 'Cartilaginous skeleton + no operculum + no air bladder are the Chondrichthyes signature.',
      },
      {
        t: 'mcq',
        q: '<b>Assertion (A):</b> In adult humans, pharyngeal gill slits are absent. <b>Reason (R):</b> Humans are not chordates because they lack gill slits as adults.',
        opts: [
          {
            label: 'Both true, R explains A',
            nudge: '<b>(a)/(b)</b> traps: selected by students who treat “adult lacks feature” as “phylum lacks feature,” forgetting the “at some stage of life” rule.',
          },
          {
            label: 'Both true, R does not explain A',
            nudge: '<b>(a)/(b)</b> traps: selected by students who treat “adult lacks feature” as “phylum lacks feature,” forgetting the “at some stage of life” rule.',
          },
          { label: 'A true, R false', nudge: null },
          { label: 'A false, R true', nudge: '<b>(d)</b> trap: wrongly rejects the true assertion.' },
        ],
        correct: 2,
        solution: 'A is true: adult humans have no gill slits. R is false: humans are chordates; the gill slits appear in the <b>embryo</b>, which is all that chordate identity requires.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Demanding chordate features in the adult.</b> The four fundamentals need only appear at some stage, usually the embryo. Adult humans lack gill slits and a free tail yet are textbook chordates.',
          '<b>Reversing the chordate–vertebrate relationship.</b> All vertebrates are chordates, but <b>not all chordates are vertebrates</b>; protochordates are the exception. State it in the correct direction.',
          '<b>Forgetting the famous exceptions.</b> Reptiles = 3-chambered heart <b>except crocodiles (4)</b>; mammals = viviparous <b>except monotremes (oviparous platypus, echidna)</b>. NEET often sets its “without exception” questions on these.',
          '<b>Swapping the two protochordates.</b> Urochordata = notochord in <b>larval tail only</b>; Cephalochordata = notochord <b>lifelong, head to tail</b>. <i>Ascidia</i> vs <i>Branchiostoma</i> is the recurring pair.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for every vertebrate class, lock a <b>single most-diagnostic feature</b>: Cyclostomata “jawless,” Chondrichthyes “cartilage + no operculum,” Osteichthyes “operculum + air bladder,” Amphibia “moist skin,” Reptilia “dry scales + shelled eggs,” Aves “feathers,” Mammalia “hair + mammary glands.” In “without exception” questions, recall the exception first (crocodile, platypus): it is faster to disprove three options than to verify one.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Four chordate fundamentals:</b> notochord · dorsal hollow nerve cord · pharyngeal gill slits · post-anal tail (+ ventral heart in most). Required <b>at some stage</b> only.', note: '' },
          { f: '<b>Three subphyla (by notochord fate):</b> Urochordata = larval tail only (<i>Ascidia</i>) · Cephalochordata = lifelong head-to-tail (<i>Branchiostoma</i>) · Vertebrata = replaced by vertebral column.', note: '' },
          { f: '<b>Protochordata = Acraniata</b> = Urochordata + Cephalochordata (no cranium). <b>All vertebrates are chordates; not all chordates are vertebrates.</b>', note: '' },
          { f: '<b>Vertebrate divisions:</b> Agnatha (jawless → Cyclostomata) vs Gnathostomata (jawed → Pisces + Tetrapoda).', note: '' },
          { f: '<b>Class one-liners:</b> Cyclostomata = jawless · Chondrichthyes = cartilage, no operculum · Osteichthyes = bony, operculum + air bladder · Amphibia = moist skin, 3-chambered · Reptilia = dry scales, 3-chambered (4 in crocodiles) · Aves = feathers, 4-chambered, warm · Mammalia = hair + mammary glands, 4-chambered, warm.', note: '' },
          { f: '<b>Two great exceptions:</b> crocodile = 4-chambered reptile; monotremes (platypus, echidna) = egg-laying mammals.', note: '' },
        ],
        aids: [
          '<b>Memory aids:</b> “Notochord, Dorsal nerve, Gill slits, Tail” → <b>N-D-G-T</b>, the chordate starter kit. “Crocodile breaks the reptile heart; platypus lays the mammal’s egg”: the two exceptions in one line. “Amphi = moist, reptile = dry”: the skin test that separates the two cold-blooded tetrapod classes.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 251–253 ─────────────────────────
  {
    n: '05',
    title: 'Master Revision: Complete Reference',
    kalam: 'If you can reproduce this section from memory, you own the chapter.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This closing section is your single-page-in-spirit consolidation: the whole kingdom in one table, every canonical example, every exception, and the rapid-fire facts. If you can reproduce this section from memory, you own the chapter.',
      },

      { t: 'part', title: 'The Whole Kingdom in One Table' },
      {
        t: 'table',
        title: null,
        head: ['Group', 'Level / grade', 'Symmetry', 'Germ layers', 'Coelom', 'Signature feature', 'Example'],
        rows: [
          ['Porifera', 'Cellular', 'Asymmetrical', '–', 'Absent', 'Canal system; choanocytes; spicules', '<i>Sycon</i>'],
          ['Coelenterata (Cnidaria)', 'Tissue', 'Radial', 'Diploblastic', 'Absent', 'Cnidoblasts; polyp & medusa; metagenesis', '<i>Hydra</i>'],
          ['Ctenophora', 'Tissue', 'Radial', 'Diploblastic', 'Absent', 'Eight comb-plate rows; bioluminescence', '<i>Pleurobrachia</i>'],
          ['Platyhelminthes', 'Organ', 'Bilateral', 'Triploblastic', 'Acoelomate', 'Dorso-ventrally flat; flame cells', '<i>Taenia</i>'],
          ['Aschelminthes', 'Organ-system', 'Bilateral', 'Triploblastic', 'Pseudocoelomate', 'Round in section; complete gut', '<i>Ascaris</i>'],
          ['Annelida', 'Organ-system', 'Bilateral', 'Triploblastic', 'True (schizo.)', 'Metameric segmentation; closed circulation; nephridia', '<i>Pheretima</i>'],
          ['Arthropoda', 'Organ-system', 'Bilateral', 'Triploblastic', 'True', '<b>Largest phylum</b>; jointed legs; chitin exoskeleton', '<i>Apis</i>'],
          ['Mollusca', 'Organ-system', 'Bilateral', 'Triploblastic', 'True', '<b>2nd largest</b>; radula; mantle + shell', '<i>Pila</i>'],
          ['Echinodermata', 'Organ-system', 'Adult radial, larva bilateral', 'Triploblastic', 'True (entero.)', 'Water vascular system; calcareous ossicles', '<i>Asterias</i>'],
          ['Hemichordata', 'Organ-system', 'Bilateral', 'Triploblastic', 'True', 'Proboscis-collar-trunk; proboscis gland', '<i>Balanoglossus</i>'],
          ['Urochordata (Protochordata)', 'Organ-system', 'Bilateral', 'Triploblastic', 'True', 'Notochord in <b>larval tail only</b>', '<i>Ascidia</i>'],
          ['Cephalochordata (Protochordata)', 'Organ-system', 'Bilateral', 'Triploblastic', 'True', 'Notochord <b>head-to-tail, lifelong</b>', '<i>Branchiostoma</i>'],
          ['Cyclostomata (Agnatha)', '–', 'Bilateral', 'Triploblastic', 'True', 'Jawless; sucking mouth; no scales/paired fins', '<i>Petromyzon</i>'],
          ['Chondrichthyes (Pisces)', '–', 'Bilateral', 'Triploblastic', 'True', 'Cartilaginous; no operculum; placoid scales', '<i>Scoliodon</i>'],
          ['Osteichthyes (Pisces)', '–', 'Bilateral', 'Triploblastic', 'True', 'Bony; operculum; air bladder', '<i>Labeo</i>'],
          ['Amphibia (Tetrapoda)', '–', 'Bilateral', 'Triploblastic', 'True', 'Moist skin; 3-chambered heart; water + land', '<i>Rana</i>'],
          ['Reptilia (Tetrapoda)', '–', 'Bilateral', 'Triploblastic', 'True', 'Dry scales; 3-chambered heart (4 in crocodiles); shelled eggs on land', '<i>Naja</i>'],
          ['Aves (Tetrapoda)', '–', 'Bilateral', 'Triploblastic', 'True', 'Feathers; pneumatic bones; 4-chambered; warm', '<i>Columba</i>'],
          ['Mammalia (Tetrapoda)', '–', 'Bilateral', 'Triploblastic', 'True', 'Hair; mammary glands; ear pinna in most; diaphragm', '<i>Homo sapiens</i>'],
        ],
      },

      { t: 'part', title: 'Complete Example Bank' },
      {
        t: 'p',
        html: 'Memorise these canonical genera: NEET often asks them by name.<br>• <b>Porifera:</b> <i>Sycon</i> (<i>Scypha</i>), <i>Spongilla</i> (a freshwater sponge), <i>Euspongia</i> (bath sponge), <i>Euplectella</i> (Venus’s flower basket).<br>• <b>Coelenterata:</b> <i>Hydra</i>, <i>Adamsia</i> (sea anemone), <i>Physalia</i> (Portuguese man-of-war), <i>Aurelia</i> (jellyfish), <i>Pennatula</i> (sea pen), <i>Gorgonia</i> (sea fan), <i>Meandrina</i> (brain coral).<br>• <b>Ctenophora:</b> <i>Pleurobrachia</i>, <i>Ctenoplana</i>.<br>• <b>Platyhelminthes:</b> <i>Taenia</i> (tapeworm), <i>Fasciola</i> (liver fluke), <i>Planaria</i> (free-living, high regeneration).<br>• <b>Aschelminthes:</b> <i>Ascaris</i> (roundworm), <i>Wuchereria</i> (filaria worm), <i>Ancylostoma</i> (hookworm).<br>• <b>Annelida:</b> <i>Nereis</i> (aquatic, parapodia), <i>Pheretima</i> (earthworm), <i>Hirudinaria</i> (blood-sucking leech).<br>• <b>Arthropoda:</b> <i>Apis</i> (honeybee), <i>Bombyx</i> (silkworm), <i>Laccifer</i> (lac insect); <i>Anopheles</i>, <i>Culex</i>, <i>Aedes</i> (mosquito vectors); <i>Locusta</i> (locust); <i>Limulus</i> (king/horseshoe crab, living fossil); scorpion, prawn, <i>Periplaneta</i> (cockroach).<br>• <b>Mollusca:</b> <i>Pila</i> (apple snail), <i>Pinctada</i> (pearl oyster), <i>Sepia</i> (cuttlefish), <i>Loligo</i> (squid), <i>Octopus</i> (devil fish), <i>Aplysia</i> (sea hare), <i>Dentalium</i> (tusk shell), <i>Chaetopleura</i> (chiton).<br>• <b>Echinodermata:</b> <i>Asterias</i> (star fish), <i>Echinus</i> (sea urchin), <i>Antedon</i> (sea lily), <i>Cucumaria</i> (sea cucumber), <i>Ophiura</i> (brittle star).<br>• <b>Hemichordata:</b> <i>Balanoglossus</i>, <i>Saccoglossus</i>.<br>• <b>Urochordata:</b> <i>Ascidia</i>, <i>Salpa</i>, <i>Doliolum</i>. <b>Cephalochordata:</b> <i>Branchiostoma</i> (Amphioxus / lancelet).<br>• <b>Cyclostomata:</b> <i>Petromyzon</i> (lamprey), <i>Myxine</i> (hagfish).<br>• <b>Chondrichthyes:</b> <i>Scoliodon</i> (dogfish), <i>Pristis</i> (sawfish), <i>Carcharodon</i> (great white shark), <i>Trygon</i> (sting ray), <i>Torpedo</i> (electric ray).<br>• <b>Osteichthyes:</b> <i>Exocoetus</i> (flying fish), <i>Hippocampus</i> (sea horse): marine; <i>Labeo</i> (rohu), <i>Catla</i>, <i>Clarias</i> (magur): freshwater; <i>Betta</i> (fighting fish), <i>Pterophyllum</i> (angel fish): aquarium.<br>• <b>Amphibia:</b> <i>Bufo</i> (toad), <i>Rana</i> (frog), <i>Hyla</i> (tree frog), <i>Salamandra</i> (salamander), <i>Ichthyophis</i> (limbless amphibian).<br>• <b>Reptilia:</b> <i>Chelone</i> (turtle), <i>Testudo</i> (tortoise), <i>Chameleon</i>, <i>Calotes</i> (garden lizard), <i>Hemidactylus</i> (wall lizard), <i>Naja</i> (cobra), <i>Bungarus</i> (krait), <i>Vipera</i> (viper), <i>Crocodilus</i>, <i>Alligator</i>.<br>• <b>Aves:</b> <i>Corvus</i> (crow), <i>Columba</i> (pigeon), <i>Psittacula</i> (parrot), <i>Struthio</i> (ostrich), <i>Pavo</i> (peacock), <i>Aptenodytes</i> (penguin), <i>Neophron</i> (vulture).<br>• <b>Mammalia:</b> <i>Ornithorhynchus</i> (platypus, egg-laying), <i>Macropus</i> (kangaroo, pouched), <i>Pteropus</i> (flying fox), <i>Camelus</i> (camel), <i>Macaca</i> (monkey), <i>Rattus</i> (rat), <i>Canis</i> (dog), <i>Felis</i> (cat), <i>Elephas</i> (elephant), <i>Equus</i> (horse), <i>Delphinus</i> (dolphin), <i>Balaenoptera</i> (blue whale), <i>Panthera tigris</i> (tiger), <i>Homo sapiens</i> (human).',
      },

      { t: 'part', title: 'Every Exception and Superlative' },
      {
        t: 'p',
        html: 'These are the lines NEET often tests:<br>• <b>Largest phylum:</b> Arthropoda. <b>Second largest:</b> Mollusca.<br>• <b>Largest animal ever:</b> blue whale (<i>Balaenoptera</i>), a mammal.<br>• <b>Freshwater sponge in NCERT:</b> <i>Spongilla</i>.<br>• <b>Echinoderms:</b> adults radial but <b>larvae bilateral</b> (secondarily radial); <b>exclusively marine</b>; <b>excretory system absent</b>; coelom is enterocoelom.<br>• <b>Mollusca circulation:</b> open in most, <b>closed in cephalopods</b> (octopus, squid).<br>• <b>Reptile heart:</b> 3-chambered; <b>4-chambered in crocodiles</b>.<br>• <b>Mammals:</b> viviparous, <b>except monotremes</b> (<i>Ornithorhynchus</i>, the platypus, and <i>Tachyglossus</i>, the echidna) which lay eggs.<br>• <b>Hemichordata:</b> once a sub-phylum of Chordata, <b>now a separate non-chordate phylum</b> (no true notochord).<br>• <b>Cyclostomata:</b> jawless, no scales, no paired fins; <b>ectoparasites</b> on fishes; marine but <b>migrate to fresh water to spawn</b>, then die; larva returns to sea.<br>• <b>Chondrichthyes: no air bladder</b> (must keep swimming to avoid sinking) and <b>no operculum</b>; many are viviparous; <i>Torpedo</i> gives electric shocks, <i>Trygon</i> has a poison sting.<br>• <b>Notochord fate:</b> larval-tail only (Urochordata) · lifelong head-to-tail (Cephalochordata) · replaced by vertebral column (Vertebrata).<br>• <b>“At some stage” rule:</b> the four chordate features need appear only once in the life cycle, usually the embryo.',
      },

      { t: 'part', title: 'High-Yield Rapid-Fire (Whole Chapter)' },
      {
        t: 'p',
        html: '• <b>Six classification filters, in order:</b> level of organisation → symmetry → germ layers → coelom → segmentation → notochord.<br>• <b>Grades:</b> cellular (Porifera) · tissue (Cnidaria, Ctenophora) · organ (Platyhelminthes) · organ-system (Aschelminthes → Mammalia).<br>• <b>Symmetry:</b> asymmetrical (sponges) · radial (Cnidaria, Ctenophora, adult Echinodermata) · bilateral (Platyhelminthes onward, except adult echinoderms).<br>• <b>Germ layers:</b> diploblastic = Cnidaria + Ctenophora (mesoglea); triploblastic = Platyhelminthes → Chordata. <b>No mesoderm ⇒ no true coelom.</b><br>• <b>Coelom:</b> acoelomate (Platyhelminthes) · pseudocoelomate (Aschelminthes) · eucoelomate (Annelida → Mammalia).<br>• <b>Signature organs:</b> choanocytes (Porifera) · cnidoblasts (Cnidaria) · comb plates (Ctenophora) · flame cells (Platyhelminthes) · nephridia (Annelida) · Malpighian tubules (Arthropoda) · radula (Mollusca) · water vascular system (Echinodermata) · proboscis gland (Hemichordata) · notochord (Chordata).<br>• <b>Four chordate features:</b> notochord · dorsal hollow nerve cord · pharyngeal gill slits · post-anal tail (+ ventral heart in most).<br>• <b>Vertebrate split:</b> Agnatha (jawless → Cyclostomata) vs Gnathostomata (jawed → Pisces + Tetrapoda).<br>• <b>Warm-blooded (homoiothermic) classes:</b> only <b>Aves</b> and <b>Mammalia</b>. All others are cold-blooded (poikilothermic).<br>• <b>Heart chambers:</b> 2 (fishes, cyclostomes) · 3 (amphibians, reptiles) · 4 (crocodiles, birds, mammals).',
      },
      {
        t: 'p',
        html: '<b>One-line chapter mnemonic:</b> “Filters first, phyla next, chordates last”: Basis of Classification → the ten non-chordate phyla → Chordata and its seven classes.',
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 254–259 ─────────────────────────
  {
    n: 'A',
    title: 'Comparative Functional Anatomy Across the Kingdom',
    extra: true,
    kalam: 'The chapter presents each phylum’s organ systems in isolation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This supplement extends Chapter 4 with six additional topics: A compares the excretory, respiratory and circulatory systems across the phyla; B covers the economic and medical importance of animals; C covers larval forms and the life cycles of <i>Obelia</i> and <i>Fasciola</i>; D covers how the coelom forms and why Hemichordata stays a non-chordate phylum; E is a mixed practice set; F shows what NEET asks about this chapter. Topics 03 and 05 describe each phylum’s organs and set the phyla in whole-kingdom tables; these topics add cross-phylum comparisons and detail the chapter does not give. NEET and CBSE Boards set cross-phylum questions in assertion-reason items, match-the-column questions and HOTS (the book’s view; its estimate from past papers, not official figures). Where a point goes beyond the NCERT text it is marked, but some book-level detail here (for example the organ of Bojanus and LAL) is not in NCERT even where unmarked.',
      },
      {
        t: 'p',
        html: 'Topics 03 and 05 give each phylum’s organs one phylum at a time (Topic 05 lists each phylum’s signature organ in one line). NEET and Boards also ask questions that need the same system compared across three or four phyla; the tables below set that out.',
      },

      { t: 'part', title: 'A1: Excretory Structures: The Full Kingdom Table' },
      {
        t: 'p',
        html: 'Topics 03 and 05 name an excretory organ for only some phyla (flame cells, nephridia, Malpighian tubules, the proboscis gland; excretory system absent in echinoderms) and do not set them side by side. The sequence below is a ladder of complexity, not a line of descent: no dedicated system (sponges, cnidarians, ctenophores) → flame cells (flatworms) → renette glands or tubes (roundworms) → segmental nephridia (annelids) → Malpighian tubules and glands (arthropods) → kidneys (vertebrates).',
      },
      {
        t: 'table',
        title: null,
        head: ['Phylum', 'Excretory Organ', 'Nitrogenous Waste', 'Nature of System'],
        rows: [
          ['Porifera', 'None (amoebocytes handle intracellular waste)', 'Ammonia', 'No organised system'],
          ['Cnidaria', 'None (diffusion)', 'Ammonia', 'No organised system'],
          ['Ctenophora', 'None (diffusion)', 'Ammonia', 'No organised system'],
          ['Platyhelminthes', 'Protonephridia with flame cells (hollow tufts of cilia that waft waste)', 'Ammonia', 'First organised system; also osmoregulatory'],
          ['Aschelminthes', 'Renette glands or excretory tubes', 'Ammonia or urea', 'Tubular; renette glands are unique to nematodes'],
          ['Annelida', 'Nephridia (metanephridia; in most annelids one pair per segment, and the earthworm has several kinds)', 'Urea', 'Segmented; conserves salts by reabsorption before urine exits'],
          [
            'Arthropoda',
            'Malpighian tubules (insects) + green glands/antennal glands (crustaceans) + coxal glands (arachnids)',
            'Uric acid (insects, conserves water); ammonia (aquatic crustaceans)',
            'Malpighian tubules are the landmark: arthropods use several different excretory organs',
          ],
          ['Mollusca', 'Metanephridia (kidney-like; one or two pairs)', 'Ammonia (aquatic forms); uric acid (land snails)', 'Kidney analogues called organ of Bojanus in bivalves'],
          [
            'Echinodermata',
            'No excretory organ: no dedicated excretory system at all',
            'Ammonia (diffuses from tube feet and papulae)',
            'The only organ-system phylum with no specialised excretory organ (sponges, cnidarians and ctenophores lack one too, but they are at the cellular or tissue grade)',
          ],
          ['Hemichordata', 'Proboscis gland (single)', 'Ammonia', 'Opens to the exterior; also called the glomerulus'],
          ['Chordata', 'Kidneys in vertebrates (in amniote embryos the pronephros is followed by the mesonephros and then the metanephros; protochordates have no kidneys)', 'Urea (adult humans)', 'The three-kidney developmental sequence is beyond NCERT'],
        ],
      },
      {
        t: 'p',
        html: '<b>NCERT note:</b> NCERT states that an excretory system is absent in echinoderms. Among the phyla with organ-system organisation it is the only one with no excretory organ; sponges, cnidarians and ctenophores also lack one, but they are at the cellular or tissue grade. The proboscis gland is the excretory organ of Hemichordata (<i>Balanoglossus</i>).',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion-Reason',
        q: '<b>Assertion (A):</b> Echinoderms have no excretory organ despite being triploblastic coelomates with a complex organ-system level of organisation.<br><b>Reason (R):</b> In echinoderms, nitrogenous waste (ammonia) diffuses directly from the body surface, and ammonia is highly soluble in water, so a water-rich marine environment makes a dedicated excretory system unnecessary.<br>Options: (1) Both A and R true, R is the correct explanation of A. (2) Both true, R does not explain A. (3) A true, R false. (4) A false, R true.',
        steps: [
          '<b>Evaluate A.</b> NCERT states that the excretory system is absent in echinoderms: true. <b>Evaluate R.</b> Echinoderms are marine and ammonia diffuses readily from their thin body surfaces; the water vascular system and papulae (skin gills) are thin enough for direct diffusion: R is true. <b>The link:</b> marine habitat + ammonia solubility + thin body wall = no need for a kidney-like organ. The reason explains exactly why the absence is biologically consistent with a complex body plan.',
        ],
        ans: '(1).',
      },

      { t: 'part', title: 'A2: Respiratory Structures Across Phyla' },
      {
        t: 'p',
        html: 'Topic 03 names respiratory organs for only some phyla (arthropods, molluscs, echinoderms, hemichordates) and does not set them side by side. The full sequence from diffusion to lungs is worth knowing because NEET HOTS questions can pair a respiratory structure with its phylum in match-the-column format (the book’s view, not an official count).',
      },
      {
        t: 'table',
        title: null,
        head: ['Phylum', 'Respiratory Organ', 'Medium'],
        rows: [
          ['Porifera', 'Direct diffusion through body wall', 'Water'],
          ['Cnidaria', 'Direct diffusion (no respiratory system)', 'Water'],
          ['Ctenophora', 'Direct diffusion', 'Water'],
          ['Platyhelminthes', 'Direct diffusion (body surface; flat shape ensures no cell is far from surface)', 'Water'],
          ['Aschelminthes', 'Direct diffusion (cuticle)', 'Water or air (some are terrestrial)'],
          ['Annelida', 'Moist skin (cutaneous: earthworm breathes through its entire body surface)', 'Air or water'],
          [
            'Arthropoda',
            'Tracheae (insects, myriapods): spiracles open to tracheal tubes that deliver air directly to tissues; book lungs (scorpions); gills (crustaceans); book gills (<i>Limulus</i>)',
            'Air (terrestrial) or water (aquatic)',
          ],
          ['Mollusca', 'Ctenidia (gills) in aquatic forms; mantle cavity serves as a primitive lung in terrestrial forms (<i>Pila</i> has a pulmonary sac)', 'Water or air'],
          ['Echinodermata', 'Papulae (skin gills, in starfish) + tube feet', 'Water'],
          ['Hemichordata', 'Gill slits: pharyngeal slits used for respiration as water passes through', 'Water'],
          ['Chordata', 'Gills (aquatic) or lungs (terrestrial); cutaneous (amphibians also respire through skin)', 'Water or air'],
        ],
      },
      {
        t: 'p',
        html: '<b>Critical distinctions the chapter leaves implicit:</b><br>• <b>Earthworm vs flatworm breathing:</b> Both have no dedicated respiratory organ, but the reason differs. The flatworm is flat so diffusion suffices; the earthworm has a moist body wall and capillaries close to the surface: cutaneous respiration.<br>• <b>Insect tracheal system vs fish gill system:</b> Insects deliver air directly to tissues through tracheae (no circulatory involvement); fish use a countercurrent flow system where water and blood flow in opposite directions across the gill lamellae, extracting oxygen at high efficiency.<br>• <b>Amphibian skin breathing:</b> Frogs can respire through their moist skin as adults: this is why they can stay submerged for long periods despite having lungs. This fact is easily missed.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following correctly pairs the respiratory structure with the phylum?<br>(1) Flame cells: Annelida<br>(2) Tracheae: Arthropoda<br>(3) Ctenidia: Echinodermata<br>(4) Papulae: Mollusca',
        steps: [
          'Flame cells are for excretion, not respiration; (1) out. Ctenidia (gills) belong to Mollusca, not Echinodermata (echinoderms use papulae); (3) out. Papulae are the skin gills of echinoderms, not molluscs; (4) out. Tracheae are the insect/arachnid respiratory system, a landmark arthropod feature; (2) is correct.',
        ],
        ans: '(2).',
      },

      { t: 'part', title: 'A3: Circulatory Systems: The Full Comparison' },
      {
        t: 'p',
        html: 'Topics 02 and 03 already say which phyla are open or closed. The table adds the groups with no circulatory system and echinoderms, and the details.',
      },
      {
        t: 'table',
        title: null,
        head: ['Phylum', 'Circulatory Pattern', 'Key Detail'],
        rows: [
          ['Porifera', 'No circulatory system: all transport is by diffusion from the water flowing through the canal system', 'Choanocytes drive water that distributes nutrients'],
          ['Cnidaria', 'No circulatory system: gastrovascular cavity distributes nutrients', 'One opening; no blood'],
          ['Ctenophora', 'No circulatory system', ''],
          ['Platyhelminthes', 'No circulatory system: gastrovascular cavity distributes nutrients', 'Flat body means no cell is far from gut'],
          ['Aschelminthes', 'No circulatory system', 'Pseudocoelomic fluid may assist transport'],
          ['Annelida', 'Closed; blood flows in vessels; haemoglobin dissolved in the blood plasma', 'Earthworm has four pairs of hearts (in segments 7, 9, 12 and 13); blood does not mix with body fluids'],
          ['Arthropoda', 'Open; heart pumps haemolymph into haemocoel where it bathes tissues directly', 'Haemolymph is not true blood; no haemoglobin in most (colourless or blue from haemocyanin in some)'],
          ['Mollusca', 'Most open; cephalopods (<i>Octopus</i>, <i>Sepia</i>, <i>Loligo</i>) are closed', 'Cephalopod closed system is the landmark exception'],
          ['Echinodermata', 'Open; reduced circulatory system; transport by water vascular system and coelomic fluid', 'Very reduced; the water vascular system handles most transport functions'],
          ['Hemichordata', 'Open', ''],
          ['Chordata', 'In vertebrates blood stays inside vessels (the chapter treats chordates as closed; tunicates, beyond NCERT, have an open system)', 'In vertebrate closed circulation, blood does not bathe the tissues directly'],
        ],
      },
      {
        t: 'p',
        html: '<b>Two facts the chapter emphasises but does not combine:</b><br>1. <b>Annelids have a closed circulatory system with haemoglobin dissolved in the blood plasma</b>: the first closed system in the order the phyla are taken in this chapter.<br>2. <b>Cephalopods have the most advanced circulatory system among molluscs</b>: closed system with a systemic heart and branchial hearts; supports their high metabolic rate and intelligence.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Distinguish between open and closed circulatory systems, and give one example where each is found. Also name the group of molluscs that has a closed circulatory system.',
        steps: [
          'Open: blood is pumped by the heart into large open spaces (haemocoel) and bathes the organs directly before returning; no capillaries; pressure is low (e.g., cockroach, <i>Pila</i>). Closed: blood remains within vessels throughout (arteries to capillaries to veins) and never directly contacts tissues; allows high pressure and targeted delivery (e.g., earthworm, humans). The molluscs with a closed system are the cephalopods: <i>Octopus</i> (devil fish), <i>Sepia</i> (cuttlefish) and <i>Loligo</i> (squid).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which organ-system-level (coelomate) phylum lacks a specialised excretory organ, and what is the nature of its nitrogenous waste?',
            a: 'Echinodermata; ammonia (diffuses through papulae and tube feet). Sponges, cnidarians and ctenophores also have no excretory organs, but they are not coelomate phyla.',
          },
          {
            q: '[NEET] Name the respiratory organ in (a) cockroach, (b) earthworm, (c) <i>Pila</i>, (d) starfish, (e) humans.',
            a: '(a) Tracheae + spiracles; (b) moist skin (cutaneous); (c) ctenidia (gills) or pulmonary sac; (d) papulae (skin gills); (e) lungs (alveoli).',
          },
          {
            q: '[NEET] Which annelid has four pairs of hearts? Why does it need them?',
            a: '<i>Pheretima</i> (earthworm). It has four pairs of hearts, in segments 7, 9, 12 and 13, which pump blood through its closed circulatory system; a long, many-segmented body needs these hearts to keep the blood moving along its whole length at adequate pressure.',
          },
          {
            q: '[NEET HOTS] Explain why flatworms and earthworms both lack a dedicated respiratory organ, yet the evolutionary reason differs completely.',
            a: 'Flatworms are flat (dorsoventrally flattened) so every cell is close enough to the body surface or gastrovascular cavity for diffusion to suffice: no respiratory system is needed. Earthworms are cylindrical and large, so diffusion alone would fail; they use cutaneous respiration where the entire moist body wall has capillaries that absorb oxygen directly into the blood. Different body geometry, different solution.',
          },
          {
            q: '[CBSE] Malpighian tubules, nephridia, and proboscis gland belong to which three different phyla respectively?',
            a: 'Malpighian tubules → Arthropoda (insects); nephridia → Annelida; proboscis gland → Hemichordata (<i>Balanoglossus</i>).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 259–262 ─────────────────────────
  {
    n: 'B',
    title: 'Economic and Medical Importance: The Kingdom’s Uses and Harms',
    extra: true,
    kalam: 'The chapter names examples without drawing out their economic or medical significance, yet CBSE Boards ask two-mark questions on this.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 (Example 1) gives the economic uses of <i>Apis</i>, <i>Bombyx</i> and <i>Laccifer</i>, and Topic 05 names the bath sponge, pearl oyster, leech and mosquito vectors, but only as examples of their phyla. This topic collects the uses and harms of animals in one place. CBSE Boards ask two-mark questions on this, and NEET can use it as distractor material in odd-one-out questions (the book’s view).',
      },

      { t: 'part', title: 'B1: Useful Animals (Economic Zoology)' },
      {
        t: 'table',
        title: null,
        head: ['Phylum/Group', 'Organism', 'Product / Use'],
        rows: [
          ['Porifera', '<i>Euspongia</i>, <i>Euplectella</i>', 'Bath sponge (<i>Euspongia</i>); ornamental “Venus flower basket” skeleton (<i>Euplectella</i>)'],
          ['Coelenterata', 'corals (<i>Porites</i>, <i>Pocillopora</i>)', 'Coral reefs: marine biodiversity; building material'],
          ['Annelida', '<i>Pheretima</i> (earthworm)', 'Vermicomposting; soil aeration; fishing bait'],
          ['Arthropoda', '<i>Apis</i> (honeybee)', 'Honey, beeswax, royal jelly, bee venom'],
          ['Arthropoda', '<i>Bombyx mori</i> (silkworm)', 'Silk: major textile industry'],
          ['Arthropoda', '<i>Laccifer</i> (lac insect)', 'Lac: shellac, dye, sealing wax'],
          ['Arthropoda', '<i>Apis</i>, <i>Bombus</i>', 'Pollination of crops'],
          ['Mollusca', '<i>Pila</i>', 'Food (apple snail)'],
          ['Mollusca', '<i>Pinctada</i>', 'Pearls (pearl oyster)'],
          ['Mollusca', '<i>Sepia</i>, <i>Loligo</i>, <i>Octopus</i>', 'Food (cuttlefish, squid, octopus)'],
          ['Chordata', 'Various mammals, birds, fish', 'Food, labour, companionship'],
        ],
      },
      {
        t: 'p',
        html: '<b>The chapter’s canonical examples and their economic use:</b><br>• <b><i>Apis</i></b> (honeybee): honey and beeswax<br>• <b><i>Bombyx</i></b> (silkworm): silk<br>• <b><i>Laccifer</i></b> (lac insect): lac<br>• <b><i>Pila</i></b> (apple snail): food<br>• <b><i>Pinctada</i></b> (pearl oyster): natural pearls',
      },

      { t: 'part', title: 'B2: Animal Parasites and Disease Vectors (Medical Zoology)' },
      {
        t: 'p',
        html: 'This is the book’s own view of the highest-yield part of this topic for NEET. Every genus in the main table is named in Topics 03 and 05; the snail <i>Lymnaea</i>, the malaria parasite <i>Plasmodium</i> and the species names are new here.',
      },
      {
        t: 'table',
        title: null,
        head: ['Organism', 'Phylum / Class', 'Disease / Effect', 'Vector or Host'],
        rows: [
          [
            '<i>Taenia</i> (tapeworm)',
            'Platyhelminthes',
            'Taeniasis (adult worm in the intestine); cysticercosis (disease caused by the larval cysticercus; in humans it follows swallowing <i>T. solium</i> eggs)',
            'Humans are definitive host; pig (<i>Taenia solium</i>) or cattle (<i>Taenia saginata</i>) are intermediate hosts',
          ],
          [
            '<i>Fasciola hepatica</i> (liver fluke)',
            'Platyhelminthes',
            'Fascioliasis (liver rot in sheep and humans)',
            'Sheep and goat are definitive hosts (humans can also be infected); the freshwater snail <i>Lymnaea</i> is the intermediate host; aquatic vegetation such as watercress carries the metacercariae',
          ],
          ['<i>Planaria</i>', 'Platyhelminthes', 'Free-living; not a parasite; high regeneration used in research', '–'],
          [
            '<i>Ascaris lumbricoides</i>',
            'Aschelminthes',
            'Ascariasis: intestinal roundworm; competition for nutrients, intestinal blockage',
            'Soil-transmitted; eggs ingested in contaminated food/water',
          ],
          [
            '<i>Wuchereria bancrofti</i> (filarial worm)',
            'Aschelminthes',
            'Filariasis / elephantiasis: blocking of lymphatic vessels',
            'Mosquito vector: <i>Culex</i>, <i>Anopheles</i>, <i>Aedes</i>',
          ],
          ['<i>Ancylostoma</i> (hookworm)', 'Aschelminthes', 'Hookworm disease: blood loss from intestinal wall; anaemia', 'Soil-transmitted larvae penetrate skin'],
          ['<i>Hirudinaria</i> (leech)', 'Annelida', 'Used medicinally for bloodletting; bite can cause persistent bleeding', '–'],
          [
            '<i>Anopheles</i>, <i>Culex</i>, <i>Aedes</i>',
            'Arthropoda (Insecta)',
            'Malaria (<i>Anopheles</i> female); filariasis (<i>Culex</i>, <i>Aedes</i>); dengue, chikungunya, Zika (<i>Aedes</i>)',
            'These three mosquito genera are the most important mosquito vectors of human disease in India',
          ],
          [
            '<i>Limulus</i> (horseshoe crab)',
            'Arthropoda',
            'Not a parasite; an extract of its blood cells (amoebocytes), LAL, is used to detect bacterial endotoxins in vaccines, injectable drugs and medical equipment (its blood is blue from haemocyanin)',
            '–',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Mosquito-borne diseases to know for NEET',
        head: ['Disease', 'Causative Agent', 'Primary Vector'],
        rows: [
          ['Malaria', '<i>Plasmodium</i> (protozoan)', 'Female <i>Anopheles</i>'],
          ['Filariasis', '<i>Wuchereria bancrofti</i>', '<i>Culex</i>, <i>Anopheles</i>, <i>Aedes</i>'],
          ['Dengue', 'Dengue virus', '<i>Aedes aegypti</i>, <i>A. albopictus</i>'],
          ['Chikungunya', 'Chikungunya virus', '<i>Aedes aegypti</i>, <i>A. albopictus</i>'],
        ],
      },
      {
        t: 'ex',
        tag: 'NEET HOTS',
        q: 'A patient from a waterlogged rural area presents with fever, lymphedema, and elephantiasis. Microscopic examination reveals sheathed microfilariae in a night blood smear. Identify the parasite, its phylum, and the vector most likely involved in her village in India.',
        steps: [
          'Sheathed microfilariae in a night blood smear is the diagnostic marker of <i>Wuchereria bancrofti</i>, the filarial worm. <i>Wuchereria</i> belongs to Phylum Aschelminthes (Nematoda). The village is in a waterlogged rural area: this describes the breeding ground of <i>Culex</i>, the most common Indian vector for filariasis. (<i>Anopheles</i> and <i>Aedes</i> can also transmit it, but in India the main vector is <i>Culex</i> (<i>C. quinquefasciatus</i>), which breeds in dirty standing water.)',
        ],
        ans: '<i>Wuchereria bancrofti</i>, Phylum Aschelminthes; <i>Culex</i> mosquito.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<i>Taenia saginata</i> and <i>Taenia solium</i> are tapeworms of humans. State (a) the intermediate host for each, (b) the infective stage for humans, and (c) one preventive measure against taeniasis.',
        steps: [
          '(a) <i>T. saginata</i> (beef tapeworm) uses cattle as the intermediate host; <i>T. solium</i> (pork tapeworm) uses pig. (b) Humans acquire infection by eating undercooked beef or pork containing the cysticercus larva (the bladder worm stage). The cysticercus develops into an adult tapeworm in the human intestine. (c) Cooking meat thoroughly; inspecting beef and pork at slaughterhouses; proper disposal of human sewage to prevent cattle and pigs from swallowing the eggs (or the egg-filled gravid proglottids) passed in human faeces.',
        ],
        ans: '(a) Cattle; (b) cysticercus in undercooked meat; (c) cook meat thoroughly.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name one economically important annelid and one medically important arthropod, giving one use or disease for each.',
            a: '<i>Pheretima</i> (earthworm): soil aeration and vermicomposting; <i>Anopheles</i> (female): transmits malaria.',
          },
          {
            q: '[NEET] Which mosquito transmits malaria and which transmits dengue? Name the genus for each.',
            a: 'Malaria → <i>Anopheles</i>; Dengue → <i>Aedes</i>.',
          },
          {
            q: '[NEET] The lac insect (<i>Laccifer</i>) belongs to which phylum and class? What is lac used for?',
            a: 'Phylum Arthropoda, Class Insecta. Lac (from <i>Laccifer</i>) is used as shellac (a natural lacquer), in sealing wax, as a protective coating for wood and fruits, and in dyes.',
          },
          {
            q: '[NEET] Why is the horseshoe crab (<i>Limulus</i>) important despite not being a parasite or a food item?',
            a: '<i>Limulus</i> has blue blood containing haemocyanin (not haemoglobin). Its blood is used to make LAL (limulus amoebocyte lysate), a test reagent that detects bacterial endotoxins in vaccines, injectable drugs, and medical equipment. This makes it important for the safety testing of vaccines, injectable drugs and surgical equipment.',
          },
          {
            q: '[NEET HOTS] Differentiate between the intermediate hosts of <i>Taenia solium</i> and <i>Wuchereria</i>. Why can a person with <i>Wuchereria</i> infection be a source of infection without having the disease symptoms?',
            a: '<i>Taenia solium</i>: the larva is the cysticercus (bladder worm) in pig muscle; the pig is the intermediate host; humans get the infection by eating undercooked pork. <i>Wuchereria</i>: the microfilariae develop into infective larvae inside <i>Culex</i> mosquitoes; the mosquito is both the intermediate host and the vector, and humans are the definitive host. A person with <i>Wuchereria</i> can be asymptomatic (microfilariae circulating in the blood at night) yet transmit the infection, because a biting mosquito picks up microfilariae whether or not the person shows elephantiasis. The adult worms cause the disease by blocking lymph vessels; the microfilariae are the stage picked up by the mosquito.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 262–266 ─────────────────────────
  {
    n: 'C',
    title: 'Larval Forms and Life Cycles: The Atlas',
    extra: true,
    kalam: 'The chapter introduces canonical larval forms as a vocabulary box but does not test the student on their meanings, stages, or which organisms they belong to.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The six larval forms in C1 are named in Topic 01 (with their groups, as a one-line list). The larval stages of <i>Fasciola</i> (miracidium to metacercaria), the snails <i>Patella</i> and <i>Lymnaea</i>, and the full life cycles of <i>Obelia</i> and <i>Fasciola</i> are new here and go beyond the NCERT text. The ascidian tadpole is a different larva from the amphibian tadpole in Topic 01.',
      },

      { t: 'part', title: 'C1: The Complete Larval Forms Table' },
      {
        t: 'table',
        title: null,
        head: ['Larval Form', 'Phylum', 'Belongs To', 'Stage'],
        rows: [
          ['Planula', 'Cnidaria', '<i>Obelia</i>, <i>Aurelia</i>', 'Free-swimming ciliated larva that develops from the zygote; settles and grows into a new polyp'],
          [
            'Trochophore',
            'Annelida and Mollusca',
            '<i>Nereis</i> (Annelida); <i>Dentalium</i> (a scaphopod) and <i>Chaetopleura</i> (a polyplacophoran) of Mollusca',
            'Ciliated, top-shaped larva with a prototroch (band of cilia) used for swimming and feeding; taken as evidence of a link between annelids and molluscs',
          ],
          [
            'Veliger',
            'Mollusca',
            '<i>Pinctada</i> (pearl oyster, a bivalve); marine gastropods such as <i>Patella</i> and <i>Aplysia</i>',
            'Larval stage that follows the trochophore in many marine bivalves and gastropods; has a velum (ciliated swimming organ) and the beginnings of the shell and foot. Cephalopods (<i>Sepia</i>, <i>Loligo</i>, <i>Octopus</i>) develop directly, without a veliger',
          ],
          ['Bipinnaria', 'Echinodermata', '<i>Asterias</i> (starfish)', 'Free-swimming, bilaterally symmetric larva; transforms into the adult radial echinoderm by metamorphosis'],
          [
            'Tadpole',
            'Urochordata (Chordata)',
            '<i>Ascidia</i> (sea squirt)',
            'Free-swimming larval stage that resembles a tadpole; has a notochord in the tail; metamorphoses into the sessile adult by absorbing its tail',
          ],
          [
            'Ammocoete',
            'Cyclostomata (Chordata)',
            '<i>Petromyzon</i> (lamprey)',
            'Eel-like, filter-feeding larval stage of the lamprey (it feeds through a mucus-lined, ciliated pharynx); lives burrowed in sand; metamorphoses into a parasitic adult after several years',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key biological facts the chapter mentions but does not tie together:</b><br>• <b>The bipinnaria larva of <i>Asterias</i> is bilaterally symmetric</b> even though the adult starfish is radially symmetric: this is the larva/adult symmetry split that the chapter highlights in worked example 4 of Topic 02.<br>• <b>The trochophore larva is shared by annelids and molluscs</b> and is taken as evidence for a link between them (Topics 02 and 03 group them with arthropods as the schizocoelom line; the term protostome appears in Additional topic D).<br>• <b>The ammocoete is a chordate larva</b> (it has a notochord and dorsal hollow nerve cord) that lives in freshwater sediments before metamorphosing into a parasitic adult lamprey.',
      },

      { t: 'part', title: 'C2: Life Cycle of Obelia (Metagenesis)' },
      {
        t: 'p',
        html: 'The chapter names metagenesis as the cnidarian alternation of polyp and medusa, using <i>Obelia</i> as the example (the chapter gives only the polyp-medusa alternation; the stages below are added detail beyond NCERT). Knowing the full cycle means knowing every stage, which form is asexual, which is sexual, and what the larva is called.',
      },
      {
        t: 'p',
        html: '<b>The complete cycle (added detail beyond the chapter):</b><br>1. <b>Adult polyp</b> (asexual, sessile, colonial) → budding → produces <b>medusa buds</b>.<br>2. <b>Medusa</b> (sexual, free-swimming) is released from the polyp colony.<br>3. Medusa produces gametes (eggs and sperm) → <b>external fertilisation</b> in water.<br>4. Zygote → <b>planula larva</b> (free-swimming, ciliated).<br>5. Planula settles on a substrate → transforms back into a new <b>polyp</b> → colonial growth.<br>6. Cycle repeats.',
      },
      {
        t: 'p',
        html: '<b>NCERT:</b> cnidarians that exist in both polyp and medusa forms show alternation of generation (metagenesis), for example <i>Obelia</i>. <i>Obelia</i> is the metagenesis example named in NCERT. Both the polyp and the medusa are diploid, so this is an alternation of body forms and of asexual and sexual reproduction, not of ploidy as in plants.',
      },

      { t: 'part', title: 'C3: Life Cycle of Fasciola (Liver Fluke)' },
      {
        t: 'p',
        html: 'This life cycle goes beyond the NCERT text. It involves two hosts and five larval stages.',
      },
      {
        t: 'p',
        html: '<b>Complete life cycle (chapter uses <i>Fasciola hepatica</i> as the flatworm example):</b><br>1. <b>Adult</b> lives in the bile ducts of the sheep liver (definitive host).<br>2. Eggs pass out in host’s faeces → hatch in water → <b>miracidium larva</b> (ciliated, free-swimming).<br>3. Miracidium enters a <b>freshwater snail</b> (<i>Lymnaea</i>, the intermediate host) → transforms into <b>sporocyst</b>.<br>4. Sporocyst reproduces asexually → <b>redia larva</b> (in the snail’s digestive gland).<br>5. Redia produces <b>cercaria larva</b> (free-swimming with a tail).<br>6. Cercaria leaves snail → encysts on water vegetation → <b>metacercaria</b> (infective stage for sheep/humans).<br>7. Sheep/human eats watercress with metacercaria → adult develops in bile ducts.',
      },
      {
        t: 'p',
        html: '<b>Stages in order:</b> Adult → Egg → Miracidium → Sporocyst → Redia → Cercaria → Metacercaria.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Match the larval form with its correct phylum:<br>Column I: (a) Planula (b) Trochophore (c) Bipinnaria (d) Ammocoete<br>Column II: (i) Echinodermata (ii) Chordata (iii) Annelida (iv) Cnidaria',
        steps: [
          'Planula is the larval form of <i>Obelia</i>/<i>Aurelia</i> (Cnidaria) → (iv). Trochophore belongs to Annelida (<i>Nereis</i>) and Mollusca → (iii). Bipinnaria is the larval form of <i>Asterias</i> (Echinodermata) → (i). Ammocoete is the larval form of <i>Petromyzon</i> (Chordata, Cyclostomata) → (ii). Correct sequence: (a)-(iv), (b)-(iii), (c)-(i), (d)-(ii).',
          '<b>Speed tip:</b> do not assume the bipinnaria is radial like the adult starfish. The bipinnaria larva is bilaterally symmetric; the adult is radially symmetric.',
        ],
        ans: '(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii).',
      },
      {
        t: 'ex',
        tag: 'NEET HOTS',
        q: 'A freshwater snail is found in the same pond where sheep graze. An examination of the snail reveals the presence of a ciliated larval form that has transformed into a sac-like body. Name the larval form, the stage it has become, and the parasite whose life cycle this represents.',
        steps: [
          'Ciliated, free-swimming larva entering a snail = <b>miracidium</b>. The sac-like body inside the snail = <b>sporocyst</b> (the first asexual generation inside the intermediate host). The parasite with this life cycle is <b><i>Fasciola hepatica</i></b> (liver fluke, Phylum Platyhelminthes). The sporocyst then gives rise to rediae, which produce cercariae.',
        ],
        ans: 'Miracidium; sporocyst; <i>Fasciola hepatica</i>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw a labelled diagram of the life cycle of <i>Obelia</i>, naming each stage and stating which is asexual and which is sexual.',
            a: 'The cycle: adult polyp (asexual, sessile) → medusa buds → medusa (sexual, free-swimming) → gametes → fertilisation → zygote → planula larva (free-swimming, ciliated) → settles → new polyp colony. Asexual: polyp. Sexual: medusa.',
          },
          {
            q: '[NEET] Which larval form of Annelida also appears in some groups of Mollusca? State one example from each phylum.',
            a: 'Trochophore. Annelida: <i>Nereis</i>. Mollusca: <i>Dentalium</i> (a scaphopod) or <i>Chaetopleura</i> (a polyplacophoran).',
          },
          {
            q: '[NEET] Name the larval form and intermediate host for: (a) <i>Taenia solium</i>, (b) <i>Wuchereria</i>, (c) <i>Fasciola</i>.',
            a: '(a) <i>Taenia solium</i>: the larva is the cysticercus; the intermediate host is the pig. (b) <i>Wuchereria</i>: the infective third-stage larva; the intermediate host is the mosquito (<i>Culex</i>), which also acts as the vector. (c) <i>Fasciola</i>: miracidium → sporocyst → redia → cercaria → metacercaria; the intermediate host is the freshwater snail (<i>Lymnaea</i>).',
          },
          {
            q: '[NEET] What is metagenesis? Name the two body forms involved in <i>Obelia</i>’s metagenesis.',
            a: 'Metagenesis is the alternation between an asexual polyp phase and a sexual medusa phase in some cnidarians; the classic example is <i>Obelia</i>. Both forms are diploid, so unlike plants this is an alternation of body forms and of asexual and sexual reproduction, not of ploidy. In <i>Obelia</i>: the sessile polyp is asexual; the free-swimming medusa is sexual.',
          },
          {
            q: '[NEET HOTS] The bipinnaria larva of <i>Asterias</i> is bilaterally symmetric, but the adult starfish is radially symmetric. How does this fact support the statement that echinoderm radial symmetry is secondarily acquired?',
            a: 'If echinoderm radial symmetry were primitive (the original evolutionary state), the larvae would also be radially symmetric. The fact that the larva is bilaterally symmetric while the adult is radially symmetric indicates that the radial adult form was acquired later in evolution: it developed secondarily, after the larval stage was already established. The larva preserves the ancestral bilateral body plan, which is consistent with echinoderms being descended from bilateral ancestors that adopted a sessile lifestyle (where radial symmetry is advantageous), secondarily losing the ancestral bilateral adult form.',
          },
        ],
      },
    ],
  },
];
