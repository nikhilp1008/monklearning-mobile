import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 4 (Animal Kingdom), Additional topics D, E and F, word for word from the
 * Class 11 Biology Master Reference: D "Taxonomic Refinements and Embryological Depth"
 * (opens mid-page at the foot of p. 266; its practice answers end on p. 268), E "Complete
 * Practice Set (Mixed NEET and Board Format)" (mid-page p. 268 to p. 271) and F "What NEET
 * Actually Asks" (the book's "Addendum P", p. 272 to p. 283). Page 284 is the next chapter.
 * Topic indexes in the chapter: D = 8, E = 9, F = 10.
 *
 * Tables the book prints inside a worked example or question (Column I / Column II lists) are
 * set as lines of cells separated by " | " inside that question. The practice and graded sets
 * are practice blocks: each answer is paired with its own question (the book prints the answers
 * of Practice D and E together after the questions). Scientific names are italic; group names
 * (Porifera, Aves) and common names are upright. Option letters (a) to (d) are the book's here.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 266–268 ─────────────────────────
  {
    n: 'D',
    title: 'Taxonomic Refinements and Embryological Depth',
    extra: true,
    kalam: 'Balanoglossus has gill slits (a chordate feature) but no notochord, and hemichordates were once placed in Chordata.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section extends two points already introduced: the origin of the coelom (Topic 02) and the placement of Hemichordata (Topics 03 and 05), adding the stomochord and the link between coelom origin and protostomes and deuterostomes.',
      },

      { t: 'part', title: 'Coelom Formation: Schizocoelom vs Enterocoelom' },
      {
        t: 'p',
        html: 'NCERT classifies coelomates only by whether a coelom is present and lined by mesoderm. NEET sometimes goes one step further and asks how the coelom forms. This is beyond NCERT, but it reveals a deeper split within coelomates: a coelom that forms by splitting of the mesoderm is a schizocoelom (annelids, arthropods and molluscs; in molluscs the coelom is small, mainly the cavity round the heart); one that arises as outpocketings of the embryonic gut is an enterocoelom (echinoderms, hemichordates and, in the usual textbook scheme, chordates).',
      },
      { t: 'p', html: '<b>The developmental distinction:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Schizocoelom', 'Enterocoelom'],
        rows: [
          [
            '<b>How it forms</b>',
            'Mesoderm splits into two layers (outer somatic, inner splanchnic); the cavity between them is the coelom',
            'Endoderm (gut wall) pinches off pouches that separate from the gut and form the coelom',
          ],
          [
            '<b>Phyla</b>',
            'Annelida, Arthropoda and Mollusca',
            'Echinodermata, Hemichordata, and Chordata (deuterostomes; the lancelet’s coelom forms by gut pouches, the vertebrate coelom by splitting of the lateral plate mesoderm, so the “enterocoelom” label for all chordates is a simplification)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Why this matters for classification:</b> The schizocoelom phyla (annelids, arthropods and molluscs; in molluscs the coelom is small, mainly the cavity round the heart) are protostomes: the blastopore of the embryo becomes the mouth. The enterocoelom phyla (echinoderms, hemichordates and, in the usual scheme, chordates) are deuterostomes: the blastopore becomes the anus. NCERT does not use these terms, but they occasionally appear in NEET.',
      },
      {
        t: 'p',
        html: '<b>Three facts that follow from this scheme:</b><br>1. Echinoderms and chordates are both deuterostomes (and, in the usual textbook scheme, both enterocoelous): a deeper similarity than merely both being coelomates.<br>2. Hemichordates share enterocoelom formation with echinoderms and chordates, yet they are placed in Non-Chordata because they lack a true notochord.<br>3. Annelids and arthropods share schizocoelom formation but differ in segmentation (annelids are metamerically segmented; arthropods are also segmented but the segmentation is fused into tagmata in many groups).',
      },

      { t: 'part', title: 'The Status of Hemichordata: Why It Stays Non-Chordate' },
      {
        t: 'p',
        html: '<i>Balanoglossus</i> has gill slits (a chordate feature) but no notochord, and hemichordates were once placed in Chordata. The examinee must understand exactly why modern classification keeps them out.',
      },
      {
        t: 'p',
        html: '<b>The decision logic:</b> The defining chordate features are a notochord, a dorsal hollow nerve cord, paired pharyngeal gill slits and a post-anal tail (together with a ventral heart). Hemichordates show only some of them:<br>• Dorsal hollow nerve cord: only partly; a hollow dorsal cord occurs in the collar region, but the main nerve cord is solid and ventral (the non-chordate pattern)<br>• Pharyngeal gill slits: Yes (present in <i>Balanoglossus</i>)<br>• Post-anal tail: No<br>• Notochord: No; the rod-like structure sometimes called a “notochord” in hemichordates is the stomochord, a forward outgrowth of the buccal cavity into the proboscis. It is derived from endoderm and is not a true mesodermal notochord.',
      },
      {
        t: 'p',
        html: '<b>The correct decision tree for <i>Balanoglossus</i>:</b><br><b>Step 1:</b> Does it have a notochord? → No → It cannot be a chordate, regardless of what else it has.<br><b>Step 2:</b> Does it have enterocoelom formation? → Yes → This places it with echinoderms and chordates on the coelom-origin tree, but coelom origin is a lower-level criterion than the presence of the defining chordate structures.',
      },
      {
        t: 'p',
        html: '<b>A related point worth knowing at this level:</b> The body plan of Hemichordata is proboscis + collar + trunk. The “notochord-like” structure is the stomochord, a short forward outgrowth of the buccal cavity into the proboscis; it is not homologous to the vertebrate notochord (it is derived from endoderm, not mesoderm), and it is distinct from the proboscis gland, which is the excretory organ.',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion-Reason',
        q: 'Assertion (A): Hemichordates possess pharyngeal gill slits but are classified as non-chordates.<br>Reason (R): A true notochord (mesodermal, dorsal, rod-like) never develops in hemichordates; the structure once called a notochord (the stomochord) is derived from the buccal endoderm and is not homologous to the chordate notochord.<br>Options: <b>(1)</b> Both A and R true, R is the correct explanation of A. <b>(2)</b> Both true, R does not explain A. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          'A is true: <i>Balanoglossus</i> has gill slits, and NCERT places Hemichordata among the non-chordates. R is also true: a true notochord never develops in hemichordates. The reason directly explains why the presence of gill slits does not qualify hemichordates as chordates: the notochord is the non-negotiable chordate requirement, and it is absent.',
        ],
        ans: '(1)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the two types of coelom formation and state one phylum in which each is found.',
            a: 'Schizocoelom: formed by splitting of mesoderm (e.g., Annelida); enterocoelom: formed by outpocketing of the embryonic gut (e.g., Echinodermata).',
          },
          {
            q: '[NEET] Which of the following is a deuterostome group? <b>(a)</b> Arthropoda <b>(b)</b> Annelida <b>(c)</b> Mollusca <b>(d)</b> Echinodermata',
            a: '(d) Echinodermata. (Arthropoda, Annelida, and Mollusca are schizocoelomates / protostomes.)',
          },
          {
            q: '[NEET] What is the stomochord? Why does its presence not qualify hemichordates as chordates?',
            a: 'The stomochord is a short, rod-like outgrowth of the buccal cavity that projects forward into the proboscis of hemichordates (<i>Balanoglossus</i>); it was once thought to be homologous to the notochord. It is not a true notochord because it is derived from the endoderm of the buccal cavity, not from mesoderm.',
          },
          {
            q: '[CBSE] <i>Balanoglossus</i> has gill slits like a chordate but is classified as a non-chordate. Give two features of chordates that are absent in <i>Balanoglossus</i>.',
            a: '(i) A true mesodermal notochord is absent. (ii) A post-anal tail is absent (and the main nerve cord is solid and ventral rather than a dorsal hollow cord). These absences disqualify it from Chordata.',
          },
          {
            q: '[NEET HOTS] State whether the following pairs are schizocoelomates or enterocoelomates: (a) <i>Asterias</i> and <i>Balanoglossus</i>; (b) <i>Pheretima</i> and <i>Apis</i>; (c) <i>Branchiostoma</i> and <i>Antedon</i>.',
            a: '(a) Both enterocoelomates (echinoderms and hemichordates share the enterocoelom mode of coelom formation). (b) Both schizocoelomates: <i>Pheretima</i> (Annelida) and <i>Apis</i> (Arthropoda) both form the coelom by splitting of mesoderm. (c) <i>Branchiostoma</i> and <i>Antedon</i>: both enterocoelomates (the lancelet’s coelom forms from gut pouches, as in echinoderms).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 268–271 ─────────────────────────
  {
    n: 'E',
    title: 'Complete Practice Set (Mixed NEET and Board Format)',
    extra: true,
    kalam: 'Test the whole chapter in mixed NEET and Board formats: single-concept, assertion–reason and HOTS.',
    blocks: [
      { t: 'part', title: 'Single-Concept MCQs' },
      {
        t: 'practice',
        items: [
          {
            q: 'The excretory organ of <i>Balanoglossus</i> is the:<br>(a) flame cell<br>(b) nephridium<br>(c) Malpighian tubule<br>(d) proboscis gland',
            a: '(d): proboscis gland is the excretory organ of Hemichordata (<i>Balanoglossus</i>).',
          },
          {
            q: 'Which of the following is the correct sequence of larval forms in the life cycle of <i>Fasciola</i>?<br>(a) Miracidium → sporocyst → redia → cercaria → metacercaria<br>(b) Miracidium → redia → sporocyst → cercaria → metacercaria<br>(c) Sporocyst → miracidium → redia → cercaria → metacercaria<br>(d) Redia → sporocyst → miracidium → cercaria → metacercaria',
            a: '(a): the sequence is miracidium → sporocyst → redia → cercaria → metacercaria.',
          },
          {
            q: 'In which of the following is the circulatory system closed?<br>(a) <i>Pila</i><br>(b) <i>Apis</i><br>(c) <i>Asterias</i><br>(d) <i>Pheretima</i>',
            a: '(d): <i>Pheretima</i> (earthworm) has a closed circulatory system; <i>Pila</i> (mollusc) is open; <i>Apis</i> (arthropod) is open; <i>Asterias</i> (echinoderm) is open.',
          },
          {
            q: 'A patient has filariasis caused by <i>Wuchereria</i>. Which of the following is NOT true about <i>Wuchereria</i>?<br>(a) It belongs to Aschelminthes<br>(b) Its microfilariae are sheathed<br>(c) The intermediate host is a snail<br>(d) The disease is transmitted by mosquitoes',
            a: '(c): the intermediate host of <i>Wuchereria</i> is a mosquito (<i>Culex</i>), not a snail; the snail is the intermediate host of <i>Fasciola</i>.',
          },
          {
            q: 'The trochophore larva is characteristic of:<br>(a) Annelida and Mollusca<br>(b) Annelida and Arthropoda<br>(c) Mollusca and Echinodermata<br>(d) Annelida and Echinodermata',
            a: '(a): trochophore larva is shared by Annelida (<i>Nereis</i>) and Mollusca (<i>Dentalium</i>, <i>Chaetopleura</i>).',
          },
        ],
      },

      { t: 'part', title: 'Assertion-Reason' },
      {
        t: 'practice',
        items: [
          {
            q: 'Assertion (A): The echinoderm water vascular system functions in locomotion, food capture and transport, and respiration. Reason (R): Tube feet, which are extensions of the water vascular system, are used for movement, for capturing food and for gas exchange.<br>(a) Both true, R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '(a): both are true; the tube feet are part of the water vascular system and carry out these functions, so R explains A.',
          },
          {
            q: 'Assertion (A): <i>Planaria</i> is a free-living flatworm that does not require an intermediate host. Reason (R): <i>Planaria</i> is free-living and develops directly, with no parasitic larval stage that needs a host.<br>(a) Both true, R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '(a): both true; direct development with no parasitic larval stage is exactly why no intermediate host is needed.',
          },
          {
            q: 'Assertion (A): All chordates are deuterostomes. Reason (R): In chordates the blastopore becomes the anus, and the mouth forms later as a second opening.<br>(a) Both true, R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '(a): both true; because the blastopore becomes the anus in chordates, they are deuterostomes.',
          },
        ],
      },

      { t: 'part', title: 'HOTS Questions' },
      {
        t: 'practice',
        items: [
          {
            q: 'A student examines a preserved marine, worm-like specimen and records: bilateral symmetry, three germ layers, a true coelom that forms from embryonic gut outpocketings, a body divided into proboscis, collar and trunk, and gill slits. The student classifies it as a chordate because of the gill slits. Is this correct? Give a two-line justification.',
            a: 'Not correct. The proboscis–collar–trunk body plan with gill slits describes <i>Balanoglossus</i>, a hemichordate, and Hemichordata is a non-chordate phylum. The decisive test is the notochord: a true mesodermal notochord is absent in Hemichordata, and its presence (even at one stage) is the defining criterion for Chordata. Without a notochord, the organism is non-chordate regardless of gill slits.',
          },
          {
            q: 'Compare the respiratory systems of an earthworm and a cockroach, stating one similarity and one difference. In what fundamental way does each differ from the respiratory system of a fish?',
            a: 'Earthworm: cutaneous respiration (moist skin with capillaries; no specialised respiratory organ). Cockroach: tracheal system (spiracles open to branching tracheal tubes that deliver air directly to tissues; no circulatory involvement in oxygen transport). Similarity: both use air as the respiratory medium. Difference: earthworm’s skin respiration requires a moist surface and close contact between the body surface and blood capillaries; cockroach tracheal system bypasses the circulatory system entirely for oxygen delivery. Difference from fish gills: both earthworm and cockroach respire in air; fish use gills with countercurrent flow where water and blood flow in opposite directions across gill lamellae to maximise oxygen extraction. Fish gills require a dedicated vascular pump (the heart) to move blood to the respiratory surface; the cockroach tracheal system delivers air mechanically without any heart involvement.',
          },
          {
            q: 'Explain why the trochophore larva is considered evidence for a possible evolutionary relationship between annelids and molluscs, despite these two phyla being very different as adults.',
            a: 'Despite looking completely different as adults, annelids (e.g., <i>Nereis</i>) and molluscs (e.g., <i>Dentalium</i>) share the trochophore larval stage: ciliated, top-shaped, with a band of cilia called the prototroch. The existence of a near-identical larval form in two phyla that are very different as adults suggests a shared ancestry for these two phyla; molecular evidence supports this, and the two groups are placed together as the lophotrochozoans. The larval stage preserves ancient, shared developmental programmes that evolved before the adult body plans diverged (larval conservatism): the trochophore is considered a remnant of the ancestral larval form from which both annelids and molluscs evolved.',
          },
          {
            q: 'The life cycles of <i>Taenia</i>, <i>Wuchereria</i>, and <i>Fasciola</i> all involve intermediate hosts. Compare these three parasites with respect to: (a) number of intermediate hosts, (b) nature of the infective stage, and (c) whether the human patient is the definitive host or the intermediate host.',
            a: '(a) Number of intermediate hosts: <i>Taenia</i> has one intermediate host (pig for <i>T. solium</i>, cattle for <i>T. saginata</i>); <i>Wuchereria</i> has one intermediate host (the <i>Culex</i> mosquito, in which the microfilariae develop into infective larvae; it is also the vector); <i>Fasciola</i> has one intermediate host (the freshwater snail <i>Lymnaea</i>). (b) Nature of the infective stage: <i>Taenia</i>: cysticercus (bladder worm) in undercooked meat; <i>Wuchereria</i>: infective third-stage (filariform) larva introduced through the skin by a mosquito bite; <i>Fasciola</i>: metacercaria on water vegetation. (c) Host role: <i>Taenia</i>: humans are the definitive host (adult tapeworm lives in the human intestine); <i>Wuchereria</i>: humans are the definitive host (adult worms live in the human lymphatics); <i>Fasciola</i>: sheep and humans are definitive hosts (adult fluke lives in the bile ducts).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F (the book’s Addendum P) · pp. 272–283 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The book groups this chapter’s questions into five shapes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These are questions patterned on past NEET/AIPMT papers, with fully worked solutions.',
      },

      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Across recent NEET/AIPMT papers, the book’s rough estimate of emphasis across the chapter’s three main content topics (Topics 02 to 04) is as follows (indicative, not counts from past papers):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approx. share', 'Most-tested specifics'],
        rows: [
          [
            '<b>Basis of Classification</b> (levels of organisation, symmetry, coelom, germ layers)',
            '20–25 %',
            'coelom type and lining; symmetry of adults vs larvae; diploblastic/triploblastic distinction',
          ],
          [
            '<b>Non-Chordata</b> (ten phyla)',
            '30–35 %',
            'signature organs (flame cells, radula, comb plates, Malpighian tubules, choanocytes, cnidoblasts); canal system of sponges; metagenesis in <i>Obelia</i>; open vs closed circulation; “largest phylum”; living fossil',
          ],
          [
            '<b>Chordata</b> (fundamentals + seven classes)',
            '40–45 %',
            'notochord fate across the three subphyla; vertebrate exceptions (crocodile’s 4-chambered heart, monotreme egg-laying); Chondrichthyes vs Osteichthyes; Cyclostomata characteristics; class-defining features without exception',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Across recent NEET/AIPMT papers, topics that recur include:</b> bilateral symmetry of annelids, the freshwater sponge <i>Spongilla</i>, the number of comb-plate rows in ctenophores (eight), the larva-versus-adult symmetry of echinoderms, the crocodile’s four-chambered heart, features of Chondrichthyes (“without exception” items), metagenesis in Cnidaria, and features found only in chordates. Treat these as indicative rather than as exact frequency counts.',
      },
      {
        t: 'p',
        html: '<b>Bottom line:</b> Chordata, especially the vertebrate-exception questions, carries the largest share of the book’s estimate. Non-Chordata rewards those who learn the ten-phylum fingerprint (each phylum’s one signature organ). Basis of Classification questions are short but deadly if you confuse larval symmetry with adult, or acoelomate with pseudocoelomate.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'The book groups this chapter’s questions into five shapes. Master each pattern, and the chapter’s MCQ terrain becomes much more predictable.',
      },

      { t: 'p', html: '<b>Archetype 1: “Which of the following is correctly matched / without exception?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four statements, three of which are true but carry a famous exception, one of which is universally true with no exception. The trap is that students recall the general rule and pick the exception-marked option.<br><b>Approach:</b> When you see the phrase “without exception” or “always,” invert the question: instead of verifying the true statement, hunt the exception first. Fire the exception as soon as you see the class or phylum name.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which one of the following is correct without any exception?<br>(a) Chondrichthyes: air bladder present<br>(b) Mammalia: viviparous<br>(c) Reptilia: three-chambered heart<br>(d) Aves: feathers present',
        steps: [
          '• (a) Chondrichthyes have no air bladder (they must keep swimming): False.',
          '• (b) Monotremes (platypus, echidna) are oviparous mammals: exception. False.',
          '• (c) Crocodiles have a four-chambered heart: exception. False.',
          '• (d) All birds have feathers; there is no exception. True.',
          '<b>Speed check:</b> the moment you see “Mammalia” your brain should fire “platypus: egg-laying.” The moment you see “Reptilia” fire “crocodile: 4-chambered.” Only Aves delivers a clean, exception-free rule here.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>Archetype 2: Statement-based / “Which of the following is/are correct?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Five numbered statements (i)–(v); the answer is a combination such as “(iii) and (v) only.” These are high-density, high-risk questions: one wrong flag in a five-statement list can eliminate the correct combination.',
      },
      {
        t: 'proc',
        title: 'Approach',
        steps: [
          'Mark each statement T or F with a single word of justification beside it.',
          'Scan for the two most frequently tested facts in this chapter: (a) which phyla are diploblastic, and (b) which circulatory type each phylum has.',
          'If a statement uses “all,” “only,” or “always,” treat it as presumptively false until you find explicit chapter support.',
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements (i–v) are correct?<br>(i) Flame cells in Platyhelminthes help in osmoregulation and excretion.<br>(ii) In <i>Obelia</i>, polyps produce medusae sexually and medusae form polyps asexually.<br>(iii) Pinnae are present in most mammals.<br>(iv) The pelvic fins of male sharks bear claspers.<br>(v) In non-chordates, the central nervous system is dorsal, hollow, and single.<br>Options: <b>(a)</b> (ii), (iv) and (v) <b>(b)</b> (i), (iii) and (iv) <b>(c)</b> (iii), (iv) and (v) <b>(d)</b> (i), (ii) and (iii)',
        steps: [
          '• (i) Flame cells = protonephridia for osmoregulation and excretion. Textbook fact. T',
          '• (ii) Textbook: polyps produce medusae asexually (by budding); medusae produce polyps sexually (through the zygote and planula). Statement (ii) reverses this → F',
          '• (iii) Pinnae (external ears) are present in most mammals (not in the platypus, whales or true seals). T as a general statement.',
          '• (iv) Male shark pelvic fins bear claspers (copulatory organs). T',
          '• (v) The central nervous system of non-chordates is ventral, solid, and double; a dorsal, hollow, single cord is the chordate pattern → F',
          'Correct statements: (i), (iii), (iv) → combination (b).',
          '<b>Trap exposed:</b> Statement (ii) is a reversal of the textbook metagenesis description: a very common NEET trick.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 3: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements, A (Assertion) and R (Reason), with four answer choices about the relationship between them.',
      },
      {
        t: 'proc',
        title: 'Approach: the three-step gate',
        steps: [
          '<b>Evaluate A only.</b> Is A true? If no → eliminate any option that calls A true.',
          '<b>Evaluate R only.</b> Is R true? If no → eliminate any option that calls R true.',
          '<b>Test the link.</b> Does R explain A, or are they just two true-but-unrelated facts?',
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): Ambulacral system plays a major role in locomotion of echinoderms. Reason (R): Hydraulic pressure of fluid and contraction of muscles of tube feet make possible the movement of echinoderms.<br>(a) Both A and R are true and R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '• A: The ambulacral (water vascular) system does play a major role in echinoderm locomotion. True.',
          '• R: Tube feet extend by the hydraulic pressure of the water-vascular fluid, squeezed in by the ampullae, and shorten when their muscles contract: this is the mechanism. True.',
          '• Link: R directly describes the physical mechanism by which A occurs. R is a correct explanation of A.',
          '<b>Trap in option (b):</b> Students who see two true statements and assume no causal link without reading whether R actually explains how A works.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 4: Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Column I (phyla, organisms, or structures) matched to Column II (features, common names, or functions). Usually 4–5 rows.<br><b>Approach:</b> Build the reverse map first. For each feature in Column I, know which phylum it belongs to. Fire the fingerprint associations:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Phylum'],
        rows: [
          ['Choanocytes', 'Porifera'],
          ['Cnidoblasts', 'Cnidaria/Coelenterata'],
          ['Comb plates', 'Ctenophora'],
          ['Flame cells', 'Platyhelminthes'],
          ['Nephridia', 'Annelida'],
          ['Malpighian tubules', 'Arthropoda'],
          ['Radula', 'Mollusca'],
          ['Water vascular system', 'Echinodermata'],
          ['Proboscis gland', 'Hemichordata'],
          ['Notochord', 'Chordata'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the characteristic feature in Column I with its phylum in Column II.<br><br>Column I | Column II<br>A. Choanocytes | I. Platyhelminthes<br>B. Cnidoblasts | II. Ctenophora<br>C. Flame cells | III. Porifera<br>D. Nephridia | IV. Coelenterata<br>E. Comb plates | V. Annelida<br><br>Options:<br>(a) A–II; B–I; C–IV; D–V; E–III<br>(b) A–III; B–IV; C–I; D–V; E–II<br>(c) A–II; B–IV; C–I; D–V; E–III<br>(d) A–III; B–I; C–IV; D–V; E–II',
        steps: [
          'Reading each pair:<br>• Choanocytes → Porifera → A–III<br>• Cnidoblasts → Cnidaria → B–IV<br>• Flame cells → Platyhelminthes → C–I<br>• Nephridia → Annelida → D–V<br>• Comb plates → Ctenophora → E–II',
          'Matches: (b).',
          '<b>Trap exposed:</b> Option (a) mismatches four pairs (Choanocytes with Ctenophora, Cnidoblasts with Platyhelminthes, Flame cells with Coelenterata, Comb plates with Porifera); option (c) swaps Choanocytes and Comb plates (Porifera and Ctenophora); option (d) swaps Cnidoblasts and Flame cells (Cnidaria and Platyhelminthes).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 5: Diagram / Feature Identification from Descriptors</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A description of an organism’s body plan or a life-cycle stage, and you must identify the phylum or class, often with a twist (adult vs larva, or one exception to a general pattern).<br><b>Approach:</b> Run the classification ladder in order: organisation → symmetry → germ layers → coelom → notochord, and <b>always note whether the question specifies adult or larva.</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A marine animal has a water transport system with canal pores, flagellated collar cells that drive a one-way water current, and spicules for support. Identify the phylum and state one way its body plan differs from all other animals.',
        steps: [
          '• Canal system + choanocytes + spicules = <b>Porifera</b> (sycon-type sponge).',
          '• Difference from all other animals: sponges are at the <b>cellular level of organisation</b> (no true tissues), whereas all other animals from Cnidaria upward have at least tissue-level organisation.',
          '<b>NEET trap:</b> Sponges are sometimes loosely described as “diploblastic” in some quick-revision notes. In NCERT, sponges sit at the cellular grade and are not properly described by the diploblastic/triploblastic distinction, which begins at Cnidaria.',
        ],
        ans: 'Phylum Porifera; it has cellular-level organisation rather than tissue, organ, or organ-system level.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'These are the specific confusions NEET questions are designed to exploit.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'The correction'],
        rows: [
          [
            '<b>“All reptiles have a 3-chambered heart”</b>',
            'Statement offered as a rule; a crocodile option appears',
            'NCERT: the reptilian heart is usually three-chambered, but four-chambered in crocodiles. Fire the exception instantly.',
          ],
          [
            '<b>“All mammals are viviparous”</b>',
            'Statement offered as a rule; platypus and echidna are not mentioned',
            'Most mammals are viviparous, but monotremes (platypus, echidna) lay eggs. The class-defining mammalian features are <b>hair + mammary glands</b>, not viviparity.',
          ],
          [
            '<b>Echinoderm symmetry</b>',
            'Student recalls “echinoderm = bilateral” from larval study',
            'NCERT: adult echinoderms are <b>radially</b> symmetric; larvae are bilateral. Always specify adult or larva.',
          ],
          [
            '<b>Molluscs and closed circulation</b>',
            '“Open circulatory system” treated as universal for Mollusca',
            'Most molluscs have an open circulatory system, but <b>cephalopods (octopus, squid) have a closed one</b>.',
          ],
          [
            '<b>Swapping signature organs</b>',
            'Flame cells → Aschelminthes (wrong); radula → Annelida (wrong); nephridia → Mollusca (not the NCERT pairing: nephridia are the Annelida fingerprint, although molluscs also have kidney-like nephridia)',
            'Memorise one per phylum: Porifera = choanocytes; Cnidaria = cnidoblasts; Platyhelminthes = flame cells; Annelida = nephridia; Arthropoda = Malpighian tubules; Mollusca = radula; Echinodermata = water vascular system; Hemichordata = proboscis gland.',
          ],
          [
            '<b><i>Ascidia</i> vs <i>Branchiostoma</i> (notochord extent)</b>',
            'Both placed under “notochord present”',
            'Urochordata (<i>Ascidia</i>): notochord only in larval tail. Cephalochordata (<i>Branchiostoma</i>): notochord head-to-tail, lifelong.',
          ],
          [
            '<b>“All chordates are vertebrates”</b>',
            'Statement treated as true',
            'Reverse is true: all vertebrates are chordates; protochordates (Urochordata, Cephalochordata) are chordates but not vertebrates.',
          ],
          [
            '<b>Notochord position</b>',
            'Called ventral or derived from ectoderm',
            'NCERT: the notochord is <b>dorsal</b> and <b>mesodermally derived</b>.',
          ],
          [
            '<b>Sponges and germ layers</b>',
            'Called diploblastic or placed on the coelom line',
            'Sponges are at the cellular grade; the diploblastic/triploblastic distinction begins at Cnidaria, and coelom terms (acoelomate, pseudocoelomate, coelomate) apply from Platyhelminthes upward.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'These questions are patterned on past NEET/AIPMT items.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct recall] Which of the following is the correct function of flame cells in Platyhelminthes?<br>(a) Respiration and absorption<br>(b) Osmoregulation and circulation<br>(c) Respiration and excretion<br>(d) Osmoregulation and excretion',
            a: '<b>Answer: (d).</b><br>Flame cells (protonephridia) are ciliated excretory cells that remove metabolic wastes and regulate water content. NCERT: flame cells help in osmoregulation and excretion.',
          },
          {
            q: '[Level 1: Direct recall] Which of the following is the freshwater sponge in NCERT?<br>(a) <i>Sycon</i><br>(b) <i>Euspongia</i><br>(c) <i>Spongilla</i><br>(d) <i>Pleurobrachia</i>',
            a: '<b>Answer: (c).</b><br><i>Spongilla</i> is the freshwater sponge in NCERT. <i>Sycon</i> and <i>Euspongia</i> are marine; <i>Pleurobrachia</i> is a ctenophore.',
          },
          {
            q: '[Level 1: Direct recall] Which of the following is a characteristic feature of all mammals without any exception?<br>(a) Viviparous reproduction<br>(b) Presence of external ears (pinnae)<br>(c) Presence of mammary glands<br>(d) Teeth in the adult',
            a: '<b>Answer: (c).</b><br>Mammary glands are the defining mammalian feature and are present in every member: monotremes secrete milk even though they lay eggs. Viviparity fails for monotremes; pinnae are absent in the platypus, whales and true seals; the adult platypus and echidnas have no teeth.',
          },
          {
            q: '[Level 1: Direct recall] In which of the following reptiles is the heart four-chambered?<br>(a) <i>Naja</i> (Cobra)<br>(b) <i>Chelone</i> (Turtle)<br>(c) <i>Chameleon</i> (tree lizard)<br>(d) <i>Crocodilus</i> (Crocodile)',
            a: '<b>Answer: (d).</b><br>Among the reptiles in this chapter’s lists, only the crocodilians (<i>Crocodilus</i>, <i>Alligator</i>) have a four-chambered heart; the other options (cobra, turtle, tree lizard) have three-chambered hearts.',
          },
          {
            q: '[Level 2: Concept application] Assertion (A): Echinoderm adults are radially symmetric. Reason (R): Echinoderm larvae are bilaterally symmetric and the radial symmetry of the adult is secondarily acquired.<br>(a) Both A and R are true and R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '<b>Answer: (a).</b><br>Both statements are textbook facts. R directly explains why A is true: the radial adult symmetry is a derived condition, not the ancestral one. The larval bilateral stage reveals the echinoderm’s evolutionary relationship to other triploblastic bilaterians. Take care: R gives the evolutionary history of the adult symmetry (the adult is radial as an adaptation to a slow-moving, bottom-living life), so R does not by itself say why the adult is radial. This item keeps the book’s key (a); an exam that asks “does R explain how or why?” keys (b), as in Topic 03.',
          },
          {
            q: '[Level 2: Concept application] Which of the following statements about Cnidaria is correct?<br>(a) They are triploblastic and have a tissue level of organisation.<br>(b) They have a complete digestive system with separate mouth and anus.<br>(c) They reproduce only by asexual means.<br>(d) They are diploblastic with a gastrovascular cavity that has a single opening.',
            a: '<b>Answer: (d).</b><br>Cnidarians are diploblastic (two germ layers with mesoglea between them) and have a single opening (mouth = anus) to the gastrovascular cavity: the textbook description.',
          },
          {
            q: '[Level 2: Concept application] Which of the following is NOT a chordate feature?<br>(a) Presence of paired pharyngeal gill slits at some stage<br>(b) Ventral heart<br>(c) Solid and ventral nerve cord<br>(d) Presence of post-anal tail',
            a: '<b>Answer: (c).</b><br>Chordates have a dorsal hollow nerve cord. Non-chordates have a solid, ventral nerve cord. The nerve cord being solid and ventral is a non-chordate character, not a chordate one.',
          },
          {
            q: '[Level 2: Concept application] Match the following columns and choose the correct combination.<br><br>Column I (Structure) | Column II (Phylum)<br>A. Choanocytes | I. Cnidaria<br>B. Cnidoblasts | II. Porifera<br>C. Flame cells | III. Platyhelminthes<br>D. Nephridia | IV. Annelida<br>E. Malpighian tubules | V. Arthropoda<br><br>(a) A–I; B–II; C–III; D–IV; E–V<br>(b) A–II; B–I; C–III; D–IV; E–V<br>(c) A–II; B–I; C–III; D–V; E–IV<br>(d) A–I; B–II; C–IV; D–V; E–III',
            a: '<b>Answer: (b).</b><br>• Choanocytes = Porifera<br>• Cnidoblasts = Cnidaria<br>• Flame cells = Platyhelminthes<br>• Nephridia = Annelida<br>• Malpighian tubules = Arthropoda',
          },
          {
            q: '[Level 3: Multi-statement and HOTS] Which of the following statements (i–v) are correct?<br>(i) In <i>Obelia</i>, polyps produce medusae sexually and medusae produce polyps asexually.<br>(ii) Flame cells in Platyhelminthes help in osmoregulation and excretion.<br>(iii) Aschelminthes are pseudocoelomates with a complete digestive system.<br>(iv) Echinoderms are deuterostomes with an enterocoelom.<br>(v) Cnidarians have a complete digestive system with a separate mouth and anus.<br>Options: <b>(a)</b> (i), (ii) and (iii) <b>(b)</b> (ii), (iii) and (iv) <b>(c)</b> (iii), (iv) and (v) <b>(d)</b> (i), (iv) and (v)',
            a: '<b>Answer: (b).</b><br>• (i) False: in <i>Obelia</i>, polyps produce medusae <b>asexually</b> (by budding); medusae produce polyps <b>sexually</b> (through the zygote and planula).<br>• (ii) True: flame cells = protonephridia for osmoregulation and excretion.<br>• (iii) True: Aschelminthes have a pseudocoelom (not lined by mesoderm on both sides) and a complete gut with separate mouth and anus.<br>• (iv) True: echinoderms are deuterostomes; their coelom forms as gut outpocketings (enterocoelom).<br>• (v) False: cnidarians have one opening (mouth = anus).<br>Correct: (ii), (iii), (iv) → (b).',
          },
          {
            q: '[Level 3: Multi-statement and HOTS] Assertion (A): <i>Balanoglossus</i> is classified as a non-chordate even though it possesses pharyngeal gill slits. Reason (R): A true notochord never develops in Hemichordata.<br>(a) Both A and R are true and R is the correct explanation of A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '<b>Answer: (a).</b><br><i>Balanoglossus</i> does have gill slits, placing it close to chordates historically, but it lacks a true notochord: the single defining chordate character. Without a notochord it cannot enter Chordata, regardless of its gill slits. Both statements are true, and R is the exact reason why A holds.',
          },
          {
            q: '[Level 3: Multi-statement and HOTS] Which of the following categories of animals is correctly described with no single exception in it?<br>(a) Chondrichthyes: cartilaginous endoskeleton throughout life<br>(b) Mammalia: viviparous and possess a diaphragm<br>(c) Aves: have feathers and pneumatic bones<br>(d) Reptilia: three-chambered heart and cold-blooded',
            a: '<b>Answer: (a).</b><br>• (b) Exception: monotremes are oviparous.<br>• (c) Exception: penguins (<i>Aptenodytes</i>) and some other diving birds have solid, non-pneumatic bones, so “feathers and pneumatic bones” is not true of every bird.<br>• (d) Exception: crocodiles have a four-chambered heart.<br>• (a) No exception: the endoskeleton of all Chondrichthyes (sharks, rays) is cartilaginous throughout life.<br><b>Answer: (a).</b>',
          },
          {
            q: '[Level 3: Multi-statement and HOTS] A zoologist describes a marine invertebrate as follows: exclusively marine; adult shows five-rayed radial symmetry; larva is bilaterally symmetric; body cavity is a true coelom that develops as outpocketings of the embryonic gut (enterocoelom); locomotion and feeding are performed by tube feet; no excretory organ is present.<br>(a) Name the phylum.<br>(b) State the significance of the bilateral larva in an otherwise radially symmetric adult.<br>(c) Why does this animal lack a specialised excretory organ?',
            a: '<b>Answer:</b><br>(a) Echinodermata.<br>(b) The bilateral larva demonstrates that echinoderms are secondarily radial: their ancestor was bilateral, and the radial adult symmetry was acquired as an adaptation to a sessile or slow-moving lifestyle. The larval bilateral stage reveals the echinoderm’s evolutionary kinship with other triploblastic bilaterians.<br>(c) Echinoderms have no specialised excretory organ because their nitrogenous waste (primarily ammonia) diffuses directly across the thin walls of the tube feet and the papulae (skin gills), so a dedicated kidney is unnecessary (NCERT: excretory system absent).',
          },
        ],
      },

      { t: 'part', title: 'Exam Tips' },
      {
        t: 'proc',
        title: 'Three habits that pay off in this chapter',
        steps: [
          '<b>Learn the famous exceptions.</b> NCERT states the crocodile’s 4-chambered heart; for mammals it says “viviparous with few exceptions” and lists the egg-laying <i>Ornithorhynchus</i>. Students who retain only the general rule miss the exception, and NEET can test the exception.',
          '<b>Rehearse the signature-organ-to-phylum pairs until they are automatic.</b> Radula = Mollusca, Malpighian tubules = Arthropoda, proboscis gland = Hemichordata, flame cells = Platyhelminthes. Most Non-Chordata matching questions rest on these one-to-one fingerprints, and speed matters.',
          '<b>Recognise “without exception” framing.</b> NEET often turns a general truth into a trap by deleting its exception. When a statement says “all” or “always”, look for the exception first.',
        ],
      },
    ],
  },
];
