import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 4 (Animal Kingdom), Topics 01 to 03: pp. 222 to 241 of
 * the Class 11 Biology Master Reference, word for word. The chapter title page
 * (p. 221) and the contents box at the top of p. 222 are not copied. The book's
 * sections are unnumbered; each is an ordinary topic in page order with the
 * book's own title (DECISIONS-B11 11): Topic 01, Master Map of the Animal
 * Kingdom (pp. 222–224); Topic 02, Basis of Classification (pp. 225–232);
 * Topic 03, Non-Chordata (pp. 233–241). Topic 01 is the book's short "master
 * guide" and is cut at its own headings; Topics 02 and 03 are cut at the
 * book's Sections 1 to 8. Figure 4.1 (caption p. 223, drawn p. 224), Figure 4.2
 * (caption p. 227, drawn p. 228) and Figures 4.3 and 4.4 (captions p. 236,
 * drawn p. 237) are redrawn in lib/diagrams/biology-11-04.ts; these pages draw
 * nothing else. Scientific names are italic as the book prints them; emphasis
 * italics and the book's italic run-in labels are dropped or made bold.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 222–224 ─────────────────────────
  {
    n: '01',
    title: 'Master Map of the Animal Kingdom',
    kalam: 'This chapter is one big sorting problem: take every animal on Earth and place it correctly.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to use this master guide.</b> This chapter is one big sorting problem: take every animal on Earth and place it correctly. This opening map gives you the three things the rest of the chapter assumes: what makes an animal an animal, the single chart that holds the entire kingdom, and the reproduction-and-development vocabulary that appears in every phylum description. Read this first; then the three topics (Basis of Classification → Non-Chordata → Chordata) fill in the detail, and the closing Master Revision lets you self-test against the whole chapter.',
      },

      { t: 'part', title: 'Defining Features of Kingdom Animalia' },
      {
        t: 'p',
        html: 'Before classifying animals, fix what they all share. Every member of Kingdom Animalia is:',
      },
      {
        t: 'p',
        html: '• <b>Multicellular and eukaryotic</b>: bodies built of many cells, each with a true, membrane-bound nucleus.<br>• <b>Heterotrophic</b>: unable to make their own food; they ingest it (holozoic nutrition) and digest it, usually in an internal cavity.<br>• <b>Without a cell wall</b>: animal cells have only a plasma membrane (unlike plants, fungi, and bacteria), which allows the flexible, contractile bodies that make movement possible.<br>• <b>Glycogen/fat storers</b>: reserve food is stored as glycogen and fat, not as starch.<br>• <b>Capable of movement</b>: most can move and locomote at some stage (even sessile sponges and corals have free-swimming larvae).<br>• <b>Bound to a definite growth pattern</b>: they grow to a characteristic adult shape and size, then stop (growth is not indefinite as in many plants).<br>• <b>Equipped (in higher forms) with sensory and neuromotor systems</b>: for sensing the environment and responding.<br>• <b>Predominantly sexual reproducers</b>: most are diploid and develop from an embryo, though many lower forms also reproduce asexually.',
      },
      {
        t: 'p',
        html: 'Everything that follows (symmetry, germ layers, coelom, the phyla, the classes) is simply how we sub-divide this one kingdom.',
      },

      { t: 'part', title: 'The Complete Classification Map' },
      {
        t: 'p',
        html: 'The whole chapter lives on a single chart. The animal kingdom first splits by <b>presence of a notochord</b> into <b>non-chordates</b> (no notochord, ten phyla) and <b>chordates</b> (notochord at some stage). Chordates then split by what happens to that notochord, and the vertebrates fan out into seven classes.',
      },
      { t: 'fig', id: 'b11-04-fig-4.1' },
      {
        t: 'p',
        html: 'In words: the kingdom is <b>Animalia</b>; the first cut is <b>non-chordata vs chordata</b>; non-chordates run from the cell-grade sponges up to the proboscis-bearing <i>Balanoglossus</i>; chordates carry the notochord, split into the cranium-less <b>protochordates</b> (Urochordata, Cephalochordata) and the <b>vertebrates</b>, and vertebrates divide first by jaws (Agnatha vs Gnathostomata) and then by fins-vs-limbs into the two fish classes and the four tetrapod classes.',
      },

      { t: 'part', title: 'Reproduction and Development: The Vocabulary You Must Own' },
      {
        t: 'p',
        html: 'Every phylum and class description leans on the same handful of terms. Lock these once and they pay off across the whole chapter.',
      },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning', 'Groups / examples'],
        rows: [
          ['Asexual reproduction', 'New individual from one parent, no gametes', 'Budding in <i>Hydra</i> and sponges; fragmentation/regeneration in <i>Planaria</i>'],
          ['Hermaphrodite (bisexual/monoecious)', 'Both sexes in one individual', 'Sponges, some coelenterates (e.g., <i>Hydra</i>; most cnidarians are dioecious), ctenophores, most flatworms, earthworm, leech'],
          ['Dioecious (unisexual)', 'Sexes in separate individuals', 'Aschelminthes, most arthropods & molluscs, echinoderms, most chordates'],
          ['Oviparous', 'Lays eggs; embryo develops outside', 'Most bony fishes, amphibians, reptiles, birds, <b>monotreme mammals</b>'],
          ['Viviparous', 'Gives birth to live young', 'Most mammals; many cartilaginous fishes'],
          ['Internal fertilisation', 'Egg + sperm fuse inside the female', 'Cartilaginous fishes, reptiles, birds, mammals'],
          ['External fertilisation', 'Gametes fuse outside the body, in water', 'Most bony fishes, amphibians, many aquatic invertebrates'],
          ['Direct development', 'Young resembles the adult; no larva', 'Reptiles, birds, mammals'],
          ['Indirect development', 'Passes through a larval stage + metamorphosis', 'Many invertebrates (e.g., most insects, echinoderms); amphibians (tadpole)'],
          ['Metamorphosis', 'Larva transforms into the adult', 'Frog (tadpole → frog), insects'],
          ['Metagenesis', 'Alternation of an asexual <b>polyp</b> and a sexual <b>medusa</b> phase', '<i>Obelia</i> (Cnidaria)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Canonical larval forms</b> (a common NEET one-mark, in the book’s view): <b>planula</b> (Cnidaria), <b>trochophore</b> (Annelida, Mollusca), <b>veliger</b> (Mollusca), <b>bipinnaria</b> (Echinodermata, e.g. <i>Asterias</i>), <b>tadpole</b> (Amphibia), <b>ammocoete</b> (Cyclostomata, <i>Petromyzon</i>).',
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 225–232 ─────────────────────────
  {
    n: '02',
    title: 'Basis of Classification',
    kalam:
      'Get comfortable with these filters and the entire chapter stops being a memory marathon and becomes a logical sorting game.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a high-yield foundation topic in the whole Animal Kingdom unit. NEET often asks <b>1–3 questions</b> every year (the book’s estimate from past papers, not official figures) on symmetry, coelom, germ layers, or notochord: very often as assertion–reason or “match the column” items, and these criteria silently underpin almost every phylum-identification question that follows. CBSE Boards expect a clean <b>1–3 mark</b> definition or a “differentiate between” answer (diploblastic vs triploblastic, acoelomate vs coelomate). CUET may lift a direct one-liner. (Biology is not part of the JEE syllabus, so no JEE rung appears below.)',
      },
      {
        t: 'p',
        html: 'Imagine you are standing in a crowded New Delhi sorting office on a busy morning, with lakhs of letters piling up. Nobody reads each letter’s full address first. The clerks sort in layers: first by state, then by city, then by the PIN code’s last digits, then by street. Each layer is a single yes/no question that splits a giant pile into smaller, cleaner piles. By the time a letter reaches the postman, it has passed through a handful of simple filters, and its destination is certain.',
      },
      {
        t: 'p',
        html: 'Classifying the animal kingdom works exactly the same way. There are well over a million described animal species, from a sponge clinging to a rock in the Andaman sea to the tiger in Ranthambore. Biologists do not memorise them one by one. Instead, they pass every animal through a small set of <b>fundamental body-plan filters</b>, and each filter splits the kingdom into cleaner groups. Get comfortable with these filters and the entire chapter stops being a memory marathon and becomes a logical sorting game.',
      },
      {
        t: 'p',
        html: 'There are six filters you must internalise, and they are applied in a rough order of “deepness”:',
      },
      {
        t: 'p',
        html: '1. <b>Level of organisation</b>: Are the body cells just loosely cooperating, or are they organised into tissues, organs, and full organ-systems?<br>2. <b>Symmetry</b>: Can the body be cut into matching halves, and along how many planes?<br>3. <b>Germ layers (diploblastic vs triploblastic)</b>: Did the embryo build itself from two cell sheets or three?<br>4. <b>Coelom (body cavity)</b>: Is there a true fluid-filled cavity, and is it properly lined?<br>5. <b>Segmentation</b>: Is the body built from a repeating series of similar blocks?<br>6. <b>Notochord</b>: Is there that one defining dorsal rod that separates chordates from everyone else?',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the body cavity question as the difference between three kinds of tiffin boxes. An acoelomate animal is like a solid laddoo: pack it tight, no hollow inside. A pseudocoelomate is like a poorly made stuffed paratha where the filling has slipped into random pockets that aren’t neatly sealed to the dough on both sides. A eucoelomate (“true coelom”) is like a proper double-walled steel tiffin: there is a clean cavity, and it is lined by the same material (mesoderm) on both its inner and outer walls. That double-lining is the whole point: it lets organs hang freely, cushion against shocks, and grow independently of the gut wall.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions you must respect:</b>' },
      {
        t: 'p',
        html: '• These criteria describe the <b>adult body plan unless stated otherwise</b>. Larvae can disagree with adults: the classic trap is the echinoderm, whose larva is bilaterally symmetric while the adult is radially symmetric (a “secondarily acquired” radial symmetry).<br>• The filters do <b>not</b> always rise together in lockstep. Echinoderms are radially symmetric (an “early” feature) yet possess a true coelom (an “advanced” feature), so never assume “radial therefore primitive in every way.”<br>• The lowest grade, sponges at the <b>cellular</b> level, sits partly outside some filters: with no true tissues, terms like “germ layers” and “coelom” lose their usual meaning, which is why sponges are usually treated as <b>asymmetrical</b> and handled separately.<br>• This is classification by <b>grade</b> (shared body-plan complexity), which is not identical to a strict evolutionary family tree.',
      },

      { t: 'part', title: 'Key terms and classification criteria' },
      {
        t: 'p',
        html: '<b>1. Levels of organisation</b>: increasing complexity of cooperation among cells.<br>• <b>Cellular level:</b> cells form loose aggregates with a division of labour but no true tissues. <b>Porifera</b> (sponges).<br>• <b>Tissue level:</b> cells are arranged into tissues. <b>Cnidaria (Coelenterata)</b> and <b>Ctenophora</b>.<br>• <b>Organ level:</b> tissues grouped into organs. <b>Platyhelminthes</b> (and from here upward).<br>• <b>Organ-system level:</b> organs work as integrated systems. <b>Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata, Chordata.</b>',
      },
      {
        t: 'p',
        html: 'Within the organ-system grade, two further patterns are used to discriminate between groups; they are not kingdom-wide filters, but they are classic exam discriminators, so treat them as <b>sub-criteria of the organ-system grade</b>:',
      },
      {
        t: 'p',
        html: '• <b>Pattern of the digestive system:</b><br>   – <b>Incomplete</b>: a single opening serves as both mouth and anus, so food enters and waste leaves through the same hole (e.g., flatworms, whose gut is incomplete).<br>   – <b>Complete</b>: a separate mouth at one end and anus at the other, allowing one-way flow and regional specialisation of the gut (seen from roundworms upward).<br>• <b>Pattern of the circulatory system:</b><br>   – <b>Open</b>: the heart pumps blood out into large open spaces (a haemocoel) where the cells and tissues are bathed in it directly before it drains back; pressure is low and flow is unregulated (e.g., most arthropods such as the cockroach and prawn, and most molluscs).<br>   – <b>Closed</b>: blood is confined throughout to a graded series of vessels (arteries → capillaries → veins) and never directly contacts the tissues, allowing high pressure and tightly regulated, targeted delivery (e.g., annelids such as the earthworm, <b>cephalopod</b> molluscs such as the octopus, and vertebrates; chordates are usually described as closed, though tunicates are open).',
      },
      {
        t: 'p',
        html: '<b>2. Symmetry</b><br>• <b>Asymmetrical:</b> no plane divides the body into equal halves: many <b>sponges</b>.<br>• <b>Radial symmetry:</b> any plane passing through the central axis yields two identical halves: <b>Cnidaria, Ctenophora, adult Echinodermata.</b> Favoured by sessile or slow drifting animals because food and threats can be met from every direction.<br>• <b>Bilateral symmetry:</b> only <b>one</b> plane (the median/sagittal plane) yields identical right and left halves: <b>Platyhelminthes onward</b> (adult echinoderms are secondarily radial). Associated with directed forward movement and the concentration of sense organs at the front (cephalisation).',
      },
      {
        t: 'p',
        html: '<b>3. Germ layers</b><br>• <b>Diploblastic:</b> two embryonic layers, outer <b>ectoderm</b> and inner <b>endoderm</b>, with an undifferentiated jelly-like layer, the <b>mesoglea</b> (largely non-cellular, with a few wandering cells in jellyfish), between them. <b>Coelenterates (and ctenophores).</b><br>• <b>Triploblastic:</b> a third layer, <b>mesoderm</b>, lies between ectoderm and endoderm. <b>Platyhelminthes to Chordata.</b> Mesoderm is the raw material for muscles, the circulatory system, and the lining of any true body cavity.',
      },
      {
        t: 'p',
        html: '<b>4. Coelom (body cavity)</b>: a cavity lying between the body wall and the gut, <b>lined by mesoderm</b>.<br>• <b>Acoelomate:</b> no body cavity; mesoderm packs the space solidly. <b>Platyhelminthes.</b><br>• <b>Pseudocoelomate:</b> a cavity is present but <b>not lined by mesoderm continuously</b>: mesoderm sits as scattered pouches between ectoderm and endoderm. <b>Aschelminthes (roundworms).</b><br>• <b>Coelomate / Eucoelomate:</b> a <b>true coelom</b> lined by mesoderm on both sides. <b>Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata, Chordata.</b> (NEET extension: by origin, a coelom that forms by the splitting of mesoderm is a <b>schizocoelom</b>: annelids, arthropods and molluscs (in molluscs the coelom is small, mainly the cavity round the heart); one that arises as outpocketings of the embryonic gut is an <b>enterocoelom</b>: echinoderms and hemichordates (and, in the usual textbook scheme, chordates).)',
      },
      {
        t: 'p',
        html: '<b>5. Segmentation (metamerism)</b>: the body is divided, <b>externally and internally</b>, into a serial repetition of fundamentally similar units called <b>metameres</b>. True metameric segmentation is best seen in <b>Annelida</b> (e.g., the body rings of the earthworm); arthropods are also metamerically segmented.',
      },
      {
        t: 'p',
        html: '<b>6. Notochord</b>: a <b>rod-like, mesodermally derived structure on the dorsal side</b>, formed during embryonic development.<br>• <b>Chordata:</b> notochord present at least at some stage of life.<br>• <b>Non-chordata:</b> notochord never develops (Porifera through Echinodermata/Hemichordata).<br>• In <b>vertebrates</b>, the embryonic notochord is later replaced by a cartilaginous or bony <b>vertebral column</b>.',
      },
      {
        t: 'p',
        html: '(No formulae, SI units, or dimensional formulae apply to this descriptive topic.)',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no equation to derive here. The skill to master is the <b>decision sequence</b> that places any animal correctly. Run the filters in order; each answer narrows the field. Here is the reasoning, and why each step sits where it does.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Test level of organisation first.</b> This is the broadest cut. If the animal is just loose cells with no tissues, you are done early: it is a sponge (cellular grade). The reason this goes first is that the later filters (germ layers, coelom) only make clean sense once an animal actually has tissues to organise.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Read the symmetry.</b> Asymmetry flags sponges again; radial symmetry points you toward cnidarians, ctenophores, or adult echinoderms; bilateral symmetry tells you the animal belongs to the large “advanced body-plan” assemblage from flatworms upward. Symmetry comes early because it tracks lifestyle (fixed vs free-moving), which constrains everything downstream.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Count the germ layers.</b> Two layers (with mesoglea) means diploblastic: confine your search to coelenterates and ctenophores. The moment a <b>mesoderm</b> is present, the animal is triploblastic, and only now can you even ask about a coelom, because a true coelom must be lined by mesoderm. This is the logical hinge of the whole scheme: <b>no mesoderm, no true coelom.</b>',
      },
      {
        t: 'p',
        html: '<b>Step 4: Inspect the coelom.</b> Among triploblastic animals, decide between acoelomate (solid, e.g., flatworms), pseudocoelomate (unlined pockets, e.g., roundworms), and eucoelomate (fully lined, e.g., annelids onward). The “lining” check is the deciding evidence, which is why you only reach it after confirming mesoderm exists.',
      },
      { t: 'fig', id: 'b11-04-fig-4.2' },
      {
        t: 'p',
        html: '<b>Step 5: Check for true segmentation.</b> Among coelomates, a body built of serially repeated internal-and-external metameres marks annelids (arthropods are segmented too). Segmentation appears late in the sequence because it is a refinement within the coelomate grade, not a kingdom-wide split.',
      },
      {
        t: 'p',
        html: '<b>Step 6: Look for a notochord.</b> This is the final, decisive split of the animal kingdom into <b>non-chordates</b> and <b>chordates</b>. Notochord is applied last in this ladder of body-plan filters, but it is also the first cut of the whole kingdom on the classification map. It comes last here not because it is least important (it is arguably the most famous single criterion) but because it is the cleanest single yes/no question that separates the chordates after every other body-plan feature has been read.',
      },
      {
        t: 'p',
        html: 'A worked logic example: a marine animal is found to have tissues organised into organ-systems, bilateral symmetry, three germ layers, a true mesoderm-lined cavity, <b>no</b> serial segmentation, and <b>no</b> notochord at any stage. Running the filters: organ-system grade (Step 1) → bilateral (Step 2) → triploblastic (Step 3) → eucoelomate (Step 4) → unsegmented (Step 5) → non-chordate (Step 6). The body-plan signature lands squarely in the non-chordate coelomate assemblage (molluscs being a familiar member of this profile).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Differentiate between diploblastic and triploblastic animals on the basis of germ layers, and give one example of each. State one structure that triploblastic animals can build but diploblastic animals cannot.',
        steps: [
          '<b>Step 1: State the defining difference.</b> Diploblastic animals develop from <b>two</b> embryonic germ layers, an outer ectoderm and an inner endoderm, with an undifferentiated jelly-like <b>mesoglea</b> (largely non-cellular, with a few wandering cells in jellyfish) sandwiched between them. Triploblastic animals develop from <b>three</b> germ layers, with a true <b>mesoderm</b> lying between ectoderm and endoderm.',
          '<b>Step 2: Give examples.</b> Diploblastic: <b>coelenterates</b> (e.g., <i>Hydra</i>). Triploblastic: any animal from flatworms upward (e.g., the earthworm).',
          '<b>Step 3: Name the mesoderm-dependent structure.</b> Because true muscles and the lining of a true body cavity are built from mesoderm, only triploblastic animals can possess a <b>true (mesoderm-lined) coelom</b>.',
          '<b>Concluding statement:</b> the presence or absence of mesoderm is the single feature that separates the two groups and decides whether a true coelom is even possible.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Single-Concept / Speed Trap',
        q: 'Which one of the following sets is correctly matched for symmetry?<br><b>(1)</b> Sponge: radial <b>(2)</b> <i>Hydra</i>: bilateral <b>(3)</b> Adult starfish: radial <b>(4)</b> Earthworm: radial',
        steps: [
          '<b>Fast solution.</b> Do not solve all four: eliminate on sight. Sponges are <b>asymmetrical</b>, so (1) is out. <i>Hydra</i> is a cnidarian, hence <b>radial</b>, so (2) is out. Earthworm is bilaterally symmetric, so (4) is out. That leaves <b>(3)</b>, and it is independently correct: the adult echinoderm is radially symmetric.',
          '<b>Speed pitfall:</b> the examiner is fishing for students who recall “echinoderm = bilateral” from the larval stage and reject (3). Always check whether the question means larva or adult.',
        ],
        ans: '(3)',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion–Reason',
        q: '<b>Assertion (A):</b> A true coelom can never be found in a diploblastic animal. <b>Reason (R):</b> A true coelom must be lined by mesoderm, and diploblastic animals lack a mesoderm. Options: <b>(1)</b> Both A and R true, R is the correct explanation of A. <b>(2)</b> Both true, R not the correct explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          '<b>Evaluate A.</b> A true coelom is by definition lined by mesoderm; diploblastic animals (two germ layers only) have no mesoderm, so they cannot have a true coelom. <b>A is true.</b>',
          '<b>Evaluate R.</b> The reason correctly states both the lining requirement and the absence of mesoderm in diploblastic animals. <b>R is true.</b>',
          '<b>Test the link.</b> The lack of mesoderm is precisely why a true coelom is impossible, so R explains A.',
        ],
        ans: '(1)',
      },
      {
        t: 'ex',
        tag: 'NEET HOTS',
        q: 'A zoologist describes a newly collected marine invertebrate as follows: organ-system level of organisation; the <b>larva is bilaterally symmetric while the adult shows five-rayed radial symmetry</b>; triploblastic; possesses a true coelom that develops as outpocketings of the embryonic gut; <b>no notochord at any stage</b>. To which phylum does this animal most likely belong, and explain how you resolve the apparent symmetry contradiction.',
        steps: [
          '<b>Step 1: Run the filters.</b> Organ-system grade and a true coelom place it among the advanced coelomates. The clue “true coelom forming as gut outpocketings” identifies an <b>enterocoelom</b>, which is characteristic of echinoderms and hemichordates (and, in the usual textbook scheme, chordates). The absence of a notochord rules out chordates. This points to <b>Phylum Echinodermata.</b>',
          '<b>Step 2: Resolve the symmetry contradiction.</b> The bilateral larva plus radial adult is the diagnostic echinoderm signature: echinoderms are ancestrally bilateral, and their adult radial symmetry is <b>secondarily acquired</b>. The larva retains the ancestral bilateral plan; radial symmetry develops only during metamorphosis to the adult.',
          '<b>Step 3: Confirm consistency.</b> An enterocoelous true coelom, organ-system grade, and secondarily radial adult symmetry are all mutually consistent with Echinodermata, and the missing notochord confirms it is a <b>non-chordate</b>.',
        ],
        ans: 'Echinodermata.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a coelom. Using the position and lining of the body cavity, distinguish between an acoelomate, a pseudocoelomate, and a eucoelomate animal, with one example of each.',
            a: 'A coelom is a body cavity lined by mesoderm; acoelomate = no cavity (flatworm), pseudocoelomate = cavity not lined continuously by mesoderm (roundworm), eucoelomate = true mesoderm-lined cavity (earthworm).',
          },
          {
            q: '[NEET] Arrange the following in order of increasing level of organisation: roundworm, sponge, flatworm, <i>Hydra</i>.',
            a: 'Sponge (cellular) < <i>Hydra</i> (tissue) < flatworm (organ) < roundworm (organ-system).',
          },
          {
            q: '[NEET] Which feature, more than any other single character, separates the entire animal kingdom into non-chordates and chordates? Justify in one line.',
            a: 'The notochord: present in chordates, absent in non-chordates.',
          },
          {
            q: '[NEET] A triploblastic, bilaterally symmetric animal has a body built of serially repeated internal and external segments. Name this phenomenon and the phylum it most typically characterises.',
            a: 'Metameric segmentation (true metamerism); Annelida.',
          },
          {
            q: '[NEET HOTS] Explain why radial symmetry is described as “advantageous to sessile and slow-moving animals,” and why the same plan would be a disadvantage for a fast-swimming predator.',
            a: 'Radial symmetry lets a fixed or drifting animal capture food and detect threats from every direction equally; a fast predator instead needs a defined front end with concentrated sense organs (cephalisation), which only a bilateral plan provides.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Among the following, the group placed at the <b>tissue level</b> of organisation is',
        opts: [
          {
            label: 'Porifera',
            nudge: '<b>(a) trap:</b> sponges are at the cellular level: chosen by students who lump all “simple” animals together.',
          },
          { label: 'Coelenterata', nudge: null },
          {
            label: 'Platyhelminthes',
            nudge: '<b>(c) trap:</b> flatworms are at the organ level: one rung higher than tissue.',
          },
          {
            label: 'Annelida',
            nudge: '<b>(d) trap:</b> annelids are at the organ-system level: the top grade; picked by those who confuse “has tissues” with “tissue level.”',
          },
        ],
        correct: 1,
        solution: 'Cnidarians (Coelenterata) have cells organised into true tissues but not yet into organs.',
      },
      {
        t: 'mcq',
        q: 'A pseudocoelom differs from a true coelom because the pseudocoelom is',
        opts: [
          { label: 'absent altogether', nudge: '<b>(a) trap:</b> describes an acoelomate, not a pseudocoelomate.' },
          {
            label: 'lined by ectoderm',
            nudge: '<b>(b) trap:</b> a body cavity (coelom or pseudocoelom) is not lined by ectoderm; this confuses germ-layer roles.',
          },
          { label: 'not lined continuously by mesoderm', nudge: null },
          {
            label: 'derived from the notochord',
            nudge: '<b>(d) trap:</b> the notochord is a dorsal rod unrelated to the body cavity: a “match a hard word to another hard word” error.',
          },
        ],
        correct: 2,
        solution:
          'In a pseudocoelomate the cavity exists but mesoderm occurs only as scattered pouches, so the cavity is not continuously mesoderm-lined.',
      },
      {
        t: 'mcq',
        q: 'Choose the <b>incorrect</b> statement.',
        opts: [
          {
            label: 'Adult echinoderms show radial symmetry',
            nudge: '<b>(a), (b), (d)</b> are all true and are the standard echinoderm signature, so each is a tempting “looks right, leave it” option for a student who misreads “choose the incorrect.”',
          },
          {
            label: 'Echinoderm larvae are bilaterally symmetric',
            nudge: '<b>(a), (b), (d)</b> are all true and are the standard echinoderm signature, so each is a tempting “looks right, leave it” option for a student who misreads “choose the incorrect.”',
          },
          { label: 'Echinoderms are acoelomate', nudge: null },
          {
            label: 'Echinoderms are triploblastic',
            nudge: '<b>(a), (b), (d)</b> are all true and are the standard echinoderm signature, so each is a tempting “looks right, leave it” option for a student who misreads “choose the incorrect.”',
          },
        ],
        correct: 2,
        solution: 'Echinoderms possess a <b>true coelom</b> (enterocoelom); they are not acoelomate.',
      },
      {
        t: 'mcq',
        q: '<b>Assertion (A):</b> True metameric segmentation is best exemplified by annelids. <b>Reason (R):</b> In annelids the body is divided into serially repeated units both externally and internally.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          {
            label: 'Both true, R does not explain A',
            nudge: '<b>(b) trap:</b> selected by students who know both facts but doubt that R is the explanation; here it genuinely is.',
          },
          {
            label: 'A true, R false',
            nudge: '<b>(c) and (d) traps:</b> arise from misremembering segmentation as merely superficial/external, which would make it pseudo-segmentation rather than true metamerism.',
          },
          {
            label: 'A false, R true',
            nudge: '<b>(c) and (d) traps:</b> arise from misremembering segmentation as merely superficial/external, which would make it pseudo-segmentation rather than true metamerism.',
          },
        ],
        correct: 0,
        solution:
          'Annelids are the classic example of true metamerism, and the reason (external and internal serial repetition) is exactly the definition that makes their segmentation “true,” so R correctly explains A.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the larva–adult split.</b> Writing “echinoderms are radially symmetric” without qualification loses marks and walks into MCQ traps. Always state adult radial, larval bilateral.',
          '<b>Defining a coelom as “any body cavity.”</b> A cavity alone is not enough: the examiner wants the <b>mesoderm lining</b>. Drop the lining and you cannot tell a true coelom from a pseudocoelom.',
          '<b>Allowing a coelom in a diploblastic animal.</b> Since a true coelom requires mesoderm, and diploblastic animals have none, this combination is impossible. This single dependency answers a surprising number of assertion–reason questions.',
          '<b>Confusing the notochord with the nerve cord.</b> The notochord is a dorsal, mesodermal supporting rod that defines chordates; the nerve cord is part of the nervous system and exists in non-chordates too (ventral) and chordates (dorsal). They are different structures.',
          '<b>Over-generalising “molluscs are open-circulatory.”</b> Most molluscs do have an open system, but <b>cephalopods</b> (octopus, squid) have a closed system: a classic NEET trap. Likewise, “open circulation” does not mean “no circulation”: the heart still pumps, the blood simply flows through open spaces rather than vessels.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> memorise the criteria as a fixed ladder (organisation → symmetry → germ layers → coelom → segmentation → notochord) and read any animal top-down. In a “match the column” or odd-one-out MCQ, lock the <b>coelom status</b> first; it is a high-yield filter, and pinning it usually eliminates two options instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Six filters (in order)</b>',
            note: 'Level of organisation → Symmetry → Germ layers → Coelom → Segmentation → Notochord.',
          },
          {
            f: '<b>Organisation grades</b>',
            note: 'Cellular (Porifera) → Tissue (Cnidaria, Ctenophora) → Organ (Platyhelminthes) → Organ-system (Aschelminthes → Chordata).',
          },
          {
            f: '<b>Symmetry</b>',
            note: 'Asymmetrical (most sponges) · Radial (Cnidaria, Ctenophora, adult Echinodermata) · Bilateral (Platyhelminthes onward; adult echinoderms are secondarily radial).',
          },
          {
            f: '<b>Germ layers</b>',
            note: 'Diploblastic = 2 layers + mesoglea (coelenterates) · Triploblastic = + mesoderm (flatworms → chordates). <b>No mesoderm</b> ⇒ <b>no true coelom.</b>',
          },
          {
            f: '<b>Coelom</b>',
            note: 'Acoelomate (flatworms) · Pseudocoelomate (roundworms) · Eucoelomate (annelids → chordates). Schizocoelom = mesoderm splits (annelids, arthropods and molluscs); enterocoelom = gut outpocketing (echinoderms and hemichordates, and in the usual textbook scheme chordates).',
          },
          {
            f: '<b>Within the organ-system grade</b>',
            note: 'digestive system: incomplete (one opening, e.g., flatworms) vs complete (separate mouth + anus); circulatory system: open (blood bathes tissues in a haemocoel; arthropods, most molluscs) vs closed (blood stays in vessels; annelids, cephalopod molluscs, vertebrates; chordates are usually described as closed, though tunicates are open).',
          },
          {
            f: '<b>The grand divide</b>',
            note: 'Notochord present ⇒ <b>Chordata</b>; absent ⇒ <b>Non-chordata</b>. In vertebrates the notochord is replaced by the vertebral column.',
          },
        ],
        aids: [
          '“Cells, Tissues, Organs, Systems”: the four organisation rungs in order.',
          '“A–P–E” for body cavity in rising order: <b>A</b>coelomate → <b>P</b>seudocoelomate → <b>E</b>ucoelomate.',
          '“No meso, no coelom”: the one-line rule that cracks most assertion–reason traps.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 233–241 ─────────────────────────
  {
    n: '03',
    title: 'Non-Chordata',
    kalam: 'The fastest way to hold ten phyla in your head is one master matrix.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a question-dense topic for NEET: expect <b>3–5 questions</b> every year (the book’s estimate from past papers, not official figures), drawn from phylum diagnostic features, “phylum ↔ example” and “organ ↔ phylum” matching, and assertion–reason items on coelom, symmetry, and excretory/respiratory organs. CBSE Boards favour <b>2–3 mark</b> “distinguish between two phyla” or “give the distinctive feature” answers, and CUET lifts direct one-liners. (Biology is not part of the JEE syllabus.) In Topic 02 you learned the filters; here you watch those filters sort the real non-chordate phyla, from sponges to <i>Balanoglossus</i>.',
      },
      {
        t: 'p',
        html: 'If Topic 02 handed you the sorting filters, think of this topic as the actual walk through the museum. Picture the non-chordates as a long gallery in the National Museum, arranged so that each hall is a little more “built-up” than the last. You start in a hall of simple cell-colonies and end in a hall of animals so complex that early zoologists nearly mistook one of them for our own cousins.',
      },
      {
        t: 'p',
        html: 'Walk the gallery in order of rising body-plan complexity:<br>• <b>Porifera</b> (sponges): the entrance hall. These are barely “animals” in the everyday sense: just cells cooperating, with no tissues, no front or back, often no symmetry at all. Their whole lifestyle is “sit still and filter water.” Water enters through tiny pores called ostia, is driven through a central cavity (the spongocoel) by flagellated collar cells (choanocytes), and leaves through a large opening, the osculum.',
      },
      { t: 'fig', id: 'b11-04-fig-4.4' },
      {
        t: 'p',
        html: '• <b>Cnidaria</b> and <b>Ctenophora</b>: the next two halls. Now we have true tissues and radial symmetry. Cnidarians (<i>Hydra</i>, jellyfish, sea anemones, corals) carry stinging cells, cnidoblasts, loaded with a coiled thread and venom: nature’s harpoon. Ctenophores (sea walnuts) row themselves along with eight rows of fused cilia called comb plates and glow in the dark (bioluminescence).<br>• <b>Platyhelminthes</b> and <b>Aschelminthes</b>: the worm halls. Flatworms bring bilateral symmetry, three germ layers, and the organ grade, but no body cavity (acoelomate); many are parasites with hooks and suckers. Roundworms add a pseudocoelom and a complete, one-way gut.<br>• <b>Annelida, Arthropoda, Mollusca</b>: the “true coelom” halls, the heart of the gallery. Segmented worms, then the staggeringly successful jointed-legged arthropods (more species than every other animal group combined), then the soft-bodied, shell-making molluscs.<br>• <b>Echinodermata</b> and <b>Hemichordata</b>: the final halls, where the coelom forms in a new way (from the gut) and where, in <i>Balanoglossus</i>, you meet an animal so chordate-like that it shares gill slits with us, yet is still firmly a non-chordate.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the difference between an open and a closed circulatory system is the difference between flooding a paddy field and irrigating it by pipes. In an arthropod (open system), the heart simply pumps blood (haemolymph) out into open spaces so the tissues sit in it, like a flooded field: cheap, low-pressure, good enough for a small body. In an annelid or an octopus (closed system), the blood is piped to exactly where it’s needed under pressure, like drip irrigation: costlier to build, but it can supply a large, active body precisely.',
      },
      { t: 'p', html: '<b>Limiting conditions & assumptions you must respect:</b>' },
      {
        t: 'p',
        html: '• Every “rule” in this gallery has a famous exception. Molluscs are open-circulatory, <b>except cephalopods</b> (octopus, squid), which are closed. Echinoderms are radial, <b>only as adults</b> (larvae are bilateral). Sponges are asymmetrical, but a few approach radial.<br>• These are descriptions of the <b>general body plan of the phylum</b>, not of every member; parasitic members often lose organs (e.g., tapeworms have no gut at all).<br>• <b>Hemichordata is a non-chordate.</b> It was once placed inside Chordata because of its gill slits and a short rod (the stomochord) that was taken for a notochord, but it lacks a true notochord, so modern classification keeps it out. Do not let the gill slits fool you.<br>• Sponges sit at the <b>cellular</b> grade, so finer filters (true coelom, true germ layers) apply to them only loosely.',
      },

      { t: 'part', title: 'Key terms and classification framework' },
      {
        t: 'p',
        html: 'The fastest way to hold ten phyla in your head is one master matrix. Read each row as a “fingerprint”: no two phyla share the same full set of features.',
      },
      {
        t: 'table',
        title: null,
        head: ['Phylum', 'Level of org.', 'Symmetry', 'Germ layers', 'Coelom', 'Distinctive features', 'Examples'],
        rows: [
          [
            'Porifera',
            'Cellular',
            'Asymmetrical (mostly)',
            '– (cellular grade)',
            'Absent',
            'Pores (ostia), spongocoel, <b>choanocytes</b> drive water current, exit via osculum; spicules/spongin skeleton; high regeneration',
            '<i>Sycon</i>, <i>Spongilla</i>, <i>Euspongia</i>, <i>Euplectella</i>',
          ],
          [
            'Coelenterata (Cnidaria)',
            'Tissue',
            'Radial',
            'Diploblastic',
            'Absent',
            '<b>Cnidoblasts</b> with nematocysts (sting, defence/capture); single gastrovascular cavity; polyp & medusa forms; <b>metagenesis</b> (e.g. <i>Obelia</i>)',
            '<i>Hydra</i>, <i>Adamsia</i>, <i>Physalia</i>, <i>Aurelia</i>, corals',
          ],
          [
            'Ctenophora',
            'Tissue',
            'Radial',
            'Diploblastic',
            'Absent',
            'Eight rows of ciliated <b>comb plates</b> (locomotion); marine only; <b>bioluminescence</b> marked',
            '<i>Pleurobrachia</i>, <i>Ctenoplana</i>',
          ],
          [
            'Platyhelminthes',
            'Organ',
            'Bilateral',
            'Triploblastic',
            '<b>Acoelomate</b>',
            'Dorso-ventrally flattened; <b>flame cells</b> (excretion/osmoregulation); hooks & suckers in parasites; incomplete/absent gut',
            '<i>Taenia</i>, <i>Fasciola</i>, <i>Planaria</i>',
          ],
          [
            'Aschelminthes (Nematoda)',
            'Organ-system',
            'Bilateral',
            'Triploblastic',
            '<b>Pseudocoelomate</b>',
            'Circular in cross-section; <b>complete gut</b> (mouth + anus); usually dioecious (females longer than males); many parasitic',
            '<i>Ascaris</i>, <i>Wuchereria</i>, <i>Ancylostoma</i>',
          ],
          [
            'Annelida',
            'Organ-system',
            'Bilateral',
            'Triploblastic',
            'True (schizocoelom)',
            '<b>Metameric segmentation</b> (external + internal); <b>closed</b> circulation; <b>nephridia</b>; locomotion by parapodia/setae/suckers',
            '<i>Nereis</i>, <i>Pheretima</i>, <i>Hirudinaria</i>',
          ],
          [
            'Arthropoda',
            'Organ-system',
            'Bilateral',
            'Triploblastic',
            'True (reduced; the body cavity is a haemocoel)',
            '<b>Largest phylum</b>; <b>jointed appendages</b>; chitinous exoskeleton (moulting); <b>open</b> circulation; <b>Malpighian tubules</b>; antennae, compound eyes',
            '<i>Apis</i>, <i>Bombyx</i>, <i>Locusta</i>, <i>Limulus</i> (living fossil), scorpion, prawn',
          ],
          [
            'Mollusca',
            'Organ-system',
            'Bilateral',
            'Triploblastic',
            'True',
            '<b>Second largest phylum</b>; soft body, calcareous shell, foot + visceral hump + mantle; <b>radula</b> (rasping organ, absent in bivalves); open circulation (<b>closed in cephalopods</b>)',
            '<i>Pila</i>, <i>Pinctada</i>, <i>Sepia</i>, <i>Loligo</i>, <i>Octopus</i>',
          ],
          [
            'Echinodermata',
            'Organ-system',
            '<b>Adult radial, larva bilateral</b>',
            'Triploblastic',
            'True (enterocoelom)',
            'Marine only; <b>water vascular system</b> with tube feet (locomotion, feeding, respiration); calcareous endoskeleton (spiny); excretory system absent',
            '<i>Asterias</i>, <i>Echinus</i>, <i>Antedon</i>, <i>Cucumaria</i>',
          ],
          [
            'Hemichordata',
            'Organ-system',
            'Bilateral',
            'Triploblastic',
            'True',
            'Worm-like marine; body = proboscis + collar + trunk; respiration by gills; excretion by <b>proboscis gland</b>; <b>no true notochord</b>',
            '<i>Balanoglossus</i>, <i>Saccoglossus</i>',
          ],
        ],
      },
      { t: 'p', html: '<b>Spotlight on the two giants</b> (phyla NEET often tests):' },
      {
        t: 'p',
        html: 'Arthropoda is not just the largest phylum: it accounts for the large majority (well over two-thirds) of all known animal species, and its dominance comes from a toolkit that can be re-fitted for almost any habitat. The body is regionalised into head, thorax, and abdomen (or a fused cephalothorax plus abdomen), the chitinous exoskeleton is shed and rebuilt at each moult to allow growth, and respiration is solved in several independent ways: tracheae and spiracles in insects, book lungs in scorpions, book gills in <i>Limulus</i>, and gills in aquatic crustaceans. Excretion is handled by Malpighian tubules in insects, and balance by statocysts. This modular, “mix-and-match” body plan is why insects alone outnumber every other animal group on land.',
      },
      {
        t: 'p',
        html: 'Mollusca is the second largest phylum and takes the opposite design route: instead of armour-plating and joints, it builds a soft, unsegmented body around three parts: a <b>head-foot</b> (the muscular foot for creeping or burrowing), a <b>visceral hump</b> (the organs), and a <b>mantle</b>, a fleshy fold that secretes the calcareous shell and encloses the <b>mantle cavity</b> where the feather-like gills (ctenidia) sit. Most molluscs scrape food with a toothed ribbon, the <b>radula</b>, which is absent in the filter-feeding bivalves. Circulation is open in most members but <b>closed in the fast, intelligent cephalopods</b> (octopus, squid), a reminder that body-plan “rules” describe the typical member, not every one.',
      },
      { t: 'p', html: '<b>Two quick definitions that the table leans on:</b>' },
      {
        t: 'def',
        term: 'Metagenesis',
        html: 'the alternation between an asexual polyp phase and a sexual medusa phase in some cnidarians; the classic example is <i>Obelia</i>. (Both forms are diploid, so unlike plants this is an alternation of body forms and of asexual and sexual reproduction, not of ploidy.)',
      },
      {
        t: 'def',
        term: 'Water vascular system',
        html: 'a system of fluid-filled canals unique to echinoderms, operating the tube feet that the animal uses for slow locomotion, gripping prey, and gas exchange.',
      },
      {
        t: 'p',
        html: '(No formulae, SI units, or dimensional formulae apply to this descriptive topic.)',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no derivation here; the skill is to <b>run an animal down a dichotomous key</b> until only one phylum remains. The key below applies the Topic 02 filters in their natural order: each branch is a single yes/no question, exactly as a museum curator would sort a new specimen.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Tissues?</b> No true tissues, just a cell colony with a canal system → <b>Porifera.</b> (Stop.) Otherwise continue.',
      },
      {
        t: 'p',
        html: '<b>Step 2: Symmetry + germ layers.</b> Radial and diploblastic → <b>Cnidaria</b> (has cnidoblasts) or <b>Ctenophora</b> (has comb plates, no cnidoblasts). The presence/absence of stinging cells separates these two. Bilateral and triploblastic → continue.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Body cavity?</b> Reasoning: among triploblastic bilaterians, the coelom is the next great divider, because it controls how organs are housed.<br>• No cavity (acoelomate) → <b>Platyhelminthes.</b><br>• Cavity present but not fully mesoderm-lined (pseudocoelom) → <b>Aschelminthes.</b><br>• True, fully lined coelom → continue.',
      },
      {
        t: 'p',
        html: '<b>Step 4: How did the coelom form?</b> This is the branch where the echinoderms separate from the worms, as the key in Figure 4.3 shows.<br>• Coelom from splitting of mesoderm (<b>schizocoelom</b>) → the segmented/jointed line (annelids, arthropods and molluscs; in molluscs the coelom is small, mainly the cavity round the heart).<br>• Coelom from outpocketings of the embryonic gut (<b>enterocoelom</b>) → the echinoderm/hemichordate line (and, in the usual textbook scheme, chordates).',
      },
      {
        t: 'p',
        html: '<b>Step 5: Segmentation and skeleton (within the schizocoelom line).</b><br>• Segmented, soft, with closed circulation and nephridia → <b>Annelida.</b><br>• Segmented, with jointed appendages and a chitinous exoskeleton → <b>Arthropoda.</b><br>• Unsegmented, soft body with a muscular foot, mantle, and (usually) a shell → <b>Mollusca.</b>',
      },
      {
        t: 'p',
        html: '<b>Step 6: Resolve the enterocoelom line by symmetry and notochord.</b><br>• Adult radial (bilateral larva), marine, water vascular system, <b>no notochord</b> → <b>Echinodermata.</b><br>• Worm-like, proboscis-collar-trunk body, gill slits but <b>still no true notochord</b> → <b>Hemichordata.</b> (A true notochord would have pushed it across the line into Chordata: the subject of Topic 04.)',
      },
      {
        t: 'p',
        html: 'A worked run: a marine specimen has true tissues, three germ layers, a bilaterally symmetric larva whose adult is radially symmetric, a true coelom that develops from gut outpocketings, tube feet and no notochord. Key path: tissues yes (Step 1 past) → triploblastic, bilateral plan (Step 2, the larval symmetry; the adult radial symmetry is read at Step 6) → true coelom (Step 3) → enterocoelom (Step 4) → adult radial + tube feet + no notochord (Step 6) → <b>Echinodermata.</b>',
      },
      { t: 'fig', id: 'b11-04-fig-4.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Arthropoda is the largest phylum in the animal kingdom. State any three distinctive features that account for its enormous success, and name two examples of economic importance to humans.',
        steps: [
          '<b>Step 1: Name the three features and link each to success.</b>',
          '(i) <b>Jointed appendages</b> (the name arthro-poda itself means “jointed feet”) allow precise, varied movement: walking, swimming, grasping, feeding.',
          '(ii) A <b>chitinous exoskeleton</b> gives protection and water-proofing on land, and provides firm anchorage for muscles; periodic moulting allows growth.',
          '(iii) An efficient <b>tracheal/book-lung respiratory system</b> and sensory organs (compound eyes, antennae) let arthropods exploit almost every habitat.',
          '<b>Step 2: Give two economically important examples.</b> <i>Apis</i> (honeybee: honey and beeswax) and <i>Bombyx</i> (silkworm: silk). (Other valid examples: <i>Laccifer</i> (now <i>Kerria</i>) for lac.)',
          '<b>Concluding statement:</b> the combination of jointed limbs, a protective moulting exoskeleton, and versatile respiration explains why arthropods outnumber all other animals in number of species.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Single-Concept / Speed Trap',
        q: 'Which one of the following is correctly matched (organ → phylum)?<br><b>(1)</b> Radula → Annelida <b>(2)</b> Flame cells → Arthropoda <b>(3)</b> Comb plates → Ctenophora <b>(4)</b> Nephridia → Mollusca',
        steps: [
          '<b>Fast solution.</b> Match each organ to its signature phylum and eliminate. Radula belongs to <b>Mollusca</b>, not Annelida → (1) out. Flame cells belong to <b>Platyhelminthes</b>, not Arthropoda → (2) out. Nephridia are the excretory organs of <b>Annelida</b>, not Mollusca → (4) out. (Mollusc kidneys are modified nephridia, but the exam pairs nephridia with Annelida.) Comb plates are the locomotory structures of <b>Ctenophora</b>.',
          '<b>Speed pitfall:</b> options (1) and (4) swap two coelomate phyla that students lump together; lock each organ to one phylum in your memory (radula = mollusc, nephridia = annelid) and the swap is obvious.',
        ],
        ans: '(3)',
      },
      {
        t: 'ex',
        tag: 'NEET Assertion–Reason',
        q: '<b>Assertion (A):</b> <i>Balanoglossus</i> is classified as a non-chordate despite possessing pharyngeal gill slits. <b>Reason (R):</b> A true notochord never develops in hemichordates. Options: <b>(1)</b> Both true, R explains A. <b>(2)</b> Both true, R does not explain A. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          '<b>Evaluate A.</b> <i>Balanoglossus</i> (Hemichordata) does have gill slits, yet it is placed among non-chordates. <b>A is true.</b>',
          '<b>Evaluate R.</b> Hemichordates lack a true notochord, the one feature that defines a chordate. <b>R is true.</b>',
          '<b>Test the link.</b> Because the notochord is the defining chordate character, its absence is precisely why the gill-slit-bearing <i>Balanoglossus</i> stays a non-chordate. R explains A.',
        ],
        ans: '(1)',
      },
      {
        t: 'ex',
        tag: 'NEET HOTS',
        q: 'Four marine animals are described only by features:<br>• <b>W:</b> radial symmetry, stinging cells on tentacles, single body opening.<br>• <b>X:</b> adult radial symmetry but bilateral larva, tube feet, no excretory system.<br>• <b>Y:</b> soft unsegmented body, muscular foot, calcareous shell, file-like feeding organ.<br>• <b>Z:</b> eight rows of ciliated plates, bioluminescent, no stinging cells.<br>Identify the phylum of each, and state which two are diploblastic.',
        steps: [
          '<b>Step 1: Decode each fingerprint.</b><br>• <b>W:</b> radial + stinging cells (cnidoblasts) + single opening → <b>Cnidaria.</b><br>• <b>X:</b> adult-radial/larva-bilateral + tube feet (water vascular system) + no excretory organ → <b>Echinodermata.</b><br>• <b>Y:</b> unsegmented soft body + foot + shell + radula (“file-like feeding organ”) → <b>Mollusca.</b><br>• <b>Z:</b> comb plates + bioluminescence + no cnidoblasts → <b>Ctenophora</b> (the missing stinging cells are what separate it from Cnidaria).',
          '<b>Step 2: Identify the diploblastic pair.</b> Diploblastic animals are those with only two germ layers: the radial, tissue-grade groups. Here that is <b>W (Cnidaria) and Z (Ctenophora).</b> X and Y are triploblastic coelomates.',
        ],
        ans: 'W → Cnidaria, X → Echinodermata, Y → Mollusca, Z → Ctenophora; diploblastic = W and Z.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between Platyhelminthes and Aschelminthes on the basis of body cavity and type of digestive system, giving one example of each.',
            a: 'Platyhelminthes are acoelomate (no body cavity) with an incomplete/absent gut (e.g., <i>Taenia</i>); Aschelminthes are pseudocoelomate with a complete gut having separate mouth and anus (e.g., <i>Ascaris</i>).',
          },
          {
            q: '[NEET] Name the phylum in which the excretory organ is the proboscis gland, and state whether it is a chordate or a non-chordate.',
            a: 'Hemichordata (<i>Balanoglossus</i>); it is a <b>non-chordate</b> (no true notochord).',
          },
          {
            q: '[NEET] “All molluscs have an open circulatory system.” Is this statement fully correct? Justify in one line.',
            a: 'Not fully correct: most molluscs are open-circulatory, but <b>cephalopods (octopus, squid) are closed</b>.',
          },
          {
            q: '[NEET] Identify the phylum: marine, exclusively; calcareous endoskeleton of ossicles; locomotion, feeding and respiration all by a water vascular system.',
            a: 'Echinodermata.',
          },
          {
            q: '[NEET HOTS] Explain why metagenesis in <i>Obelia</i> is described as the animal-kingdom counterpart of alternation of generations, and name the two body forms involved.',
            a: 'In <i>Obelia</i> the asexual sessile <b>polyp</b> produces, by budding, the sexual free-swimming <b>medusa</b>, which in turn produces polyps: an alternation between two body forms, likened to alternation of generations in plants only because two forms alternate, but both are diploid.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The flagellated collar cells that maintain the water current in a sponge are the',
        opts: [
          {
            label: 'porocytes',
            nudge: '<b>(a) trap:</b> porocytes guard the pores but do not generate the main current: chosen by students who hear “pore” and stop thinking.',
          },
          { label: 'choanocytes', nudge: null },
          {
            label: 'amoebocytes',
            nudge: '<b>(c) and (d) traps:</b> amoebocytes (transport/regeneration) and pinacocytes (outer covering) are real sponge cells but are not the current-drivers; they reward rote recall over function.',
          },
          {
            label: 'pinacocytes',
            nudge: '<b>(c) and (d) traps:</b> amoebocytes (transport/regeneration) and pinacocytes (outer covering) are real sponge cells but are not the current-drivers; they reward rote recall over function.',
          },
        ],
        correct: 1,
        solution:
          'Choanocytes (collar cells) line the spongocoel; their beating flagella drive water in through the ostia and out through the osculum.',
      },
      {
        t: 'mcq',
        q: 'Metameric (true) segmentation is a characteristic feature of',
        opts: [
          {
            label: 'Platyhelminthes and Arthropoda',
            nudge: '<b>(a) trap:</b> flatworms are unsegmented; picked by those who confuse the flat, ribbon-like tapeworm’s proglottids with true metameres.',
          },
          { label: 'Annelida and Arthropoda', nudge: null },
          {
            label: 'Echinodermata and Annelida',
            nudge: '<b>(c) trap:</b> echinoderms are not metamerically segmented.',
          },
          {
            label: 'Mollusca and Chordata',
            nudge: '<b>(d) trap:</b> molluscs are unsegmented: a commonly tested fact.',
          },
        ],
        correct: 1,
        solution:
          'True metamerism (external and internal serial segmentation) is the signature of Annelida, and arthropods are also segmented.',
      },
      {
        t: 'mcq',
        q: 'Choose the <b>incorrectly</b> matched pair (phylum → example).',
        opts: [
          {
            label: 'Mollusca → <i>Octopus</i>',
            nudge: '<b>(a), (b), (d)</b> are all correctly matched and tempt the student who doesn’t recognise <i>Pennatula</i>.',
          },
          {
            label: 'Cnidaria → <i>Aurelia</i>',
            nudge: '<b>(a), (b), (d)</b> are all correctly matched and tempt the student who doesn’t recognise <i>Pennatula</i>.',
          },
          { label: 'Porifera → <i>Pennatula</i>', nudge: null },
          {
            label: 'Echinodermata → <i>Asterias</i>',
            nudge: '<b>(a), (b), (d)</b> are all correctly matched and tempt the student who doesn’t recognise <i>Pennatula</i>.',
          },
        ],
        correct: 2,
        solution: '<i>Pennatula</i> (sea pen) is a <b>cnidarian</b>, not a sponge: a classic “sounds spongy, isn’t” trap.',
      },
      {
        t: 'mcq',
        q: '<b>Assertion (A):</b> Echinoderms possess a true coelom even though adults are radially symmetric. <b>Reason (R):</b> The echinoderm coelom develops as outpocketings of the embryonic gut (enterocoelom).',
        opts: [
          {
            label: 'Both true, R explains A',
            nudge: '<b>(a) trap:</b> selected by students who see two true statements and assume a causal link without checking it.',
          },
          { label: 'Both true, R does not explain A', nudge: null },
          {
            label: 'A true, R false',
            nudge: '<b>(c) and (d) traps:</b> arise from wrongly believing radial animals cannot be coelomate, or misremembering the echinoderm coelom as a schizocoelom.',
          },
          {
            label: 'A false, R true',
            nudge: '<b>(c) and (d) traps:</b> arise from wrongly believing radial animals cannot be coelomate, or misremembering the echinoderm coelom as a schizocoelom.',
          },
        ],
        correct: 1,
        solution:
          'A is true (echinoderms are radial-adult yet eucoelomate). R is also true (their coelom is an enterocoelom). But R explains how the coelom forms, not why a radial animal can still have a true coelom, so R is true yet <b>not the correct explanation</b> of A.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“All molluscs are open-circulatory.”</b> Cephalopods (octopus, squid) have a <b>closed</b> system. The blanket statement is a classic NEET trap.',
          '<b>Placing Hemichordata inside Chordata.</b> Gill slits are not enough: a <b>true notochord</b> is required for Chordata, and hemichordates lack it, so <i>Balanoglossus</i> is a non-chordate.',
          '<b>Swapping signature organs.</b> Radula = Mollusca, nephridia = Annelida, flame cells = Platyhelminthes, Malpighian tubules = Arthropoda (insects), proboscis gland = Hemichordata. Mixing any two costs an easy mark.',
          '<b>Confusing Cnidaria with Ctenophora.</b> Both are radial and diploblastic, but only Cnidaria has <b>cnidoblasts (stinging cells)</b>; Ctenophora has <b>comb plates</b> and is bioluminescent. The stinging cell is the deciding feature.',
          '<b>Calling sponges “diploblastic.”</b> Some quick-revision books loosely tag Porifera as diploblastic, but sponges sit at the <b>cellular level</b> with no true germ layers: the diploblastic/triploblastic distinction properly begins at Cnidaria. If forced to choose a grade for Porifera, the safe answer is “cellular level of organisation,” not a germ-layer label.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> memorise each phylum as a <b>two-word fingerprint</b>: Porifera = “canal system,” Cnidaria = “stinging cells,” Ctenophora = “comb plates,” Platyhelminthes = “flame cells,” Aschelminthes = “pseudocoelom,” Annelida = “true segments,” Arthropoda = “jointed legs,” Mollusca = “radula + shell,” Echinodermata = “tube feet,” Hemichordata = “proboscis gland.” In matching and odd-one-out questions, fire the fingerprint first and you’ll eliminate two options before fully reading them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Gallery order (rising complexity)</b>',
            note: 'Porifera → Cnidaria → Ctenophora → Platyhelminthes → Aschelminthes → Annelida → Arthropoda → Mollusca → Echinodermata → Hemichordata.',
          },
          {
            f: '<b>Grades</b>',
            note: 'Cellular = Porifera · Tissue = Cnidaria, Ctenophora · Organ = Platyhelminthes · Organ-system = Aschelminthes onward.',
          },
          {
            f: '<b>Coelom line-up</b>',
            note: 'Acoelomate = Platyhelminthes · Pseudocoelomate = Aschelminthes · Eucoelomate = Annelida → Hemichordata (schizocoelom: Annelida, Arthropoda and Mollusca; enterocoelom: Echinodermata, Hemichordata and, in the usual textbook scheme, Chordata).',
          },
          {
            f: '<b>Circulation</b>',
            note: 'Open = Arthropoda, most Mollusca, Hemichordata · Closed = Annelida, <b>cephalopod</b> Mollusca.',
          },
          {
            f: '<b>Signature organs</b>',
            note: 'choanocytes (Porifera), cnidoblasts (Cnidaria), comb plates (Ctenophora), flame cells (Platyhelminthes), nephridia (Annelida), Malpighian tubules (Arthropoda), radula (Mollusca), water vascular system (Echinodermata), proboscis gland (Hemichordata).',
          },
          {
            f: '<b>Two giants</b>',
            note: 'Arthropoda = largest phylum; Mollusca = second largest.',
          },
        ],
        aids: [
          '“Porifera Can’t Cook Proper Aloo, Always Add More Extra Heat”: initials <b>P-C-C-P-A-A-A-M-E-H</b> for the ten phyla in order (Porifera, Cnidaria, Ctenophora, Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata).',
          '“Stinging = Cnidaria, Combing = Ctenophora”: the one line that ends radial-phylum confusion.',
          '“Cephalopods close the door”: the closed-circulation mollusc exception.',
        ],
      },
    ],
  },
];
