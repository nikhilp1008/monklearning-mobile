import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 1, The Living World: Topic 02 and Additional topics A and B, word for
 * word from the Class 11 Biology Master Reference (pp. 28–42).
 *
 * Topic 02 Taxonomic Hierarchy, pp. 28–34 (Figure 1.3, caption p. 29, drawing p. 30, set at
 * the end of Concept intuition where the book's caption stands). The shared opening of "The
 * Living World: Additional Topics" (p. 35) heads Additional topic A's Introduction. A
 * Classification Methods Beyond Morphology, pp. 35–39 (its answers end at the top of p. 39);
 * B Beyond the Biological Species Concept, pp. 39–42 (its answers end on p. 42, where
 * Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction
 * on one line, scientific names italic, names above the genus upright, numbered options
 * (1) to (4). Topic 01 and 02 keep their numbers; "Sub-topic" is "Topic", "Addendum A–D" is
 * "Additional topic A–D".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 28–34 ─────────────────────────
  {
    n: '02',
    title: 'Taxonomic Hierarchy',
    kalam: 'The higher you go, the fewer the characters in common, and the larger and more loosely-related the group becomes.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the most reliably-tested sections of the whole chapter: NEET asks 1–2 MCQs almost every year on the order of categories, monotypic vs polytypic genera, or the taxon-versus-category distinction (the book’s estimate from past papers, not official figures). CBSE Boards lift short “arrange in sequence” or “define the category” questions, and CUET loves assertion–reason items built on the “characters decrease as you ascend” rule. Pure recall, very high yield.',
      },
      {
        t: 'p',
        html: 'Recall from the previous topic how a scientific name pins an organism down to a single species: the basic unit of classification, defined by free interbreeding and fertile offspring. But a species does not float alone. Just as you are not only an individual (you belong to a household, in a village, inside a district, within a state, inside India), every species sits nested inside larger and larger groups of relatives. <b>Taxonomic hierarchy</b> is exactly this: the step-wise arrangement of organisms into ranked groups, from the most specific at the bottom to the most all-embracing at the top.',
      },
      {
        t: 'p',
        html: 'Think of the Indian administrative ladder. Your <b>house</b> is unique: that’s your species. Your house shares a street with a handful of closely-related houses: that small cluster is your genus. The streets together make a <b>village/locality</b>: your family. Several villages form a <b>block or tehsil</b>: your order. Blocks roll up into a <b>district</b>: your class. Districts into a <b>state</b>: your phylum (or division, for plants). And all states together make the <b>nation, India</b>: the kingdom, the broadest category of all.',
      },
      {
        t: 'p',
        html: 'Notice what happens as you climb this ladder. Two houses on the same street share almost everything: the same lane, the same pin code, the same neighbours. But two houses merely in the same state might share nothing beyond the state itself. <b>The higher you go, the fewer the characters in common, and the larger and more loosely-related the group becomes.</b> That single trend is the master key to this entire topic, and examiners test it relentlessly.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a set of Russian nesting dolls, or stacking steel tiffin boxes: the tiny innermost box (species) fits inside a slightly bigger one (genus), which fits inside a bigger one (family), all the way out to the giant outermost box (kingdom). Each level completely contains every level below it. So if two organisms are in the same family, they are automatically also in the same order, class, phylum and kingdom: you cannot be in an inner box without also being in every box that surrounds it. But the reverse is not true: sharing a kingdom says almost nothing about sharing a genus.',
      },
      {
        t: 'p',
        html: 'There are <b>seven obligate (compulsory) categories</b> that form the backbone of this ladder: <b>Species, Genus, Family, Order, Class, Phylum/Division, Kingdom</b>. The system of ranked categories goes back to Linnaeus, who used kingdom, class, order, genus and species; family and phylum/division were added later. Between these seven, biologists may insert <b>optional/intermediate</b> categories when a group is large (sub-class, super-class, tribe, sub-species and so on), but the seven obligate ranks are always present.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & where the intuition strains:</b><br>• The hierarchy is a <b>human-made convenience for study</b>, not a law of nature. Nature produces organisms; we impose the ranks. The boundaries between, say, “order” and “class” involve judgement, and taxonomists sometimes disagree.<br>• The neat “interbreeding species” definition (Topic 01) <b>breaks down for asexual organisms</b>: many prokaryotes and some protists do not reproduce sexually, so here morphology, cytotaxonomy and chemotaxonomy step in instead.<br>• <b>Higher categories are progressively more abstract.</b> It is easy to point to a species in a field; “Kingdom Animalia” is a mental construct, not something you can fence off.<br>• Do not confuse the rank with the group occupying it: a trap we tackle head-on below (taxon vs category).',
      },
      { t: 'fig', id: 'b11-01-fig-1.3' },

      { t: 'part', title: 'Key terms, definitions and classifications' },
      {
        t: 'p',
        html: 'These definitions are the currency of the topic: NEET distractors are made by tampering with a single phrase.',
      },
      {
        t: 'def',
        term: 'Taxonomic category',
        html: 'a rank or level in the hierarchical system (e.g. “Genus,” “Family”). It is an <b>abstract</b> term.',
      },
      {
        t: 'def',
        term: 'Taxon (plural taxa)',
        html: 'the actual group of organisms occupying a rank; it represents <b>real biological objects</b>. Example: Mammalia is a <b>taxon</b> that sits at the <b>category</b> “Class”; Bryophyta is a taxon at the category “Division.” (Crisp test: a category is the label on the shelf; a taxon is the box sitting on that shelf.)',
      },
      {
        t: 'def',
        term: 'The seven obligate categories, lowest → highest',
        html: 'Species → Genus → Family → Order → Class → Phylum/Division → Kingdom.',
      },
      { t: 'p', html: 'The categories, defined:' },
      {
        t: 'def',
        term: 'Species',
        html: 'the lowest/basic unit; organisms that interbreed freely and produce fertile offspring, sharing a common gene pool (biological species concept, Ernst Mayr; established in Topic 01). Members share the <b>maximum</b> number of characters.',
      },
      {
        t: 'def',
        term: 'Genus',
        html: 'a group of closely related <b>species</b> that descend from a common ancestor and share certain common characters. It is the first category above species.<br>• <b>Monotypic genus</b>: contains a single species (e.g. among living forms, <i>Homo</i>, with <i>Homo sapiens</i>).<br>• <b>Polytypic genus</b>: contains two or more species (e.g. <i>Panthera</i>: <i>P. leo</i>, <i>P. tigris</i>, <i>P. pardus</i>, <i>P. onca</i>; or <i>Solanum</i>: potato, tomato, brinjal).',
      },
      {
        t: 'def',
        term: 'Family',
        html: 'a group of related <b>genera</b>; characterised using both vegetative and reproductive features (in plants). Has fewer common characters than a genus.',
      },
      {
        t: 'def',
        term: 'Order',
        html: 'an assemblage of related <b>families</b> sharing still fewer characters. (E.g. mammalian orders: Primata, Carnivora, Rodentia, Cetacea.)',
      },
      {
        t: 'def',
        term: 'Class',
        html: 'a group of related <b>orders</b>. (E.g. Mammalia, Aves, Reptilia, Insecta.)',
      },
      {
        t: 'def',
        term: 'Phylum (in animals) / Division (in plants)',
        html: 'a group of related <b>classes</b>.',
      },
      {
        t: 'def',
        term: 'Kingdom',
        html: 'the highest and broadest category; the assemblage of all phyla/divisions.',
      },
      {
        t: 'p',
        html: 'The <b>two governing trends</b> (memorise as one fact each way), as we ascend from species to kingdom:<br>• the number of <b>common (shared) characters DECREASES</b>;<br>• the number of <b>organisms / size of the group INCREASES</b>, and kinship grows more distant.',
      },
      {
        t: 'p',
        html: 'Obligate vs optional categories:<br>• <b>Obligate (7):</b> the seven listed above, always present.<br>• <b>Optional / intermediate:</b> sub-species, sub-class, super-class, tribe, cohort, etc., inserted only when needed.',
      },

      { t: 'part', title: 'Key procedures and frameworks' },
      {
        t: 'p',
        html: '<b>Framework A: Read the ladder in both directions</b><br><br>Going <b>up</b> (species → kingdom): groups get bigger, shared characters get fewer, relationships get more distant. Going <b>down</b> (kingdom → species): groups get smaller and tighter, shared characters multiply, relationships get closer.<br><br>The reason is containment (the nesting-dolls logic): every higher category fully contains the lower ones. Therefore, and this is a favourite NEET inference, <b>if two organisms belong to the same lower category, they MUST share every higher category too.</b> Two animals in the same family are guaranteed to be in the same order, class, phylum and kingdom. But two animals in the same order need not be in the same family. Always reason <b>downward implies upward, never the reverse</b>.',
      },
      {
        t: 'p',
        html: '<b>Framework B: How to classify a given organism (step-by-step)</b>',
      },
      {
        t: 'proc',
        title: 'Take an organism and build its address from the inside out. Worked illustration with the common housefly:',
        steps: [
          'Start at the <b>species</b>: <i>Musca domestica</i>.',
          'The <b>genus</b> is the first word: <i>Musca</i>.',
          'Place the genus into its <b>family</b> of related genera: Muscidae.',
          'Group related families into the <b>order</b>: Diptera (the true, two-winged flies).',
          'Group related orders into the <b>class</b>: Insecta.',
          'Group related classes into the <b>phylum</b> (animal, so “phylum”): Arthropoda.',
          'The broadest box, the <b>kingdom</b>: Animalia.',
        ],
      },
      {
        t: 'p',
        html: 'Reading it back top-down gives the full hierarchy: Animalia → Arthropoda → Insecta → Diptera → Muscidae → <i>Musca</i> → <i>M. domestica</i>. The procedure is identical for a plant, except you say <b>Division</b> instead of <b>Phylum</b>.',
      },
      {
        t: 'p',
        html: '<b>The must-memorise reference: NCERT Table 1.1.</b> These four organisms recur constantly in NEET; learn the complete lineage of each. (Animals use Phylum; plants use Division.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Common name', 'Scientific name', 'Genus', 'Family', 'Order', 'Class', 'Phylum / Division'],
        rows: [
          ['Man', '<i>Homo sapiens</i>', '<i>Homo</i>', 'Hominidae', 'Primata', 'Mammalia', 'Chordata'],
          ['Housefly', '<i>Musca domestica</i>', '<i>Musca</i>', 'Muscidae', 'Diptera', 'Insecta', 'Arthropoda'],
          ['Mango', '<i>Mangifera indica</i>', '<i>Mangifera</i>', 'Anacardiaceae', 'Sapindales', 'Dicotyledonae', 'Angiospermae'],
          ['Wheat', '<i>Triticum aestivum</i>', '<i>Triticum</i>', 'Poaceae', 'Poales', 'Monocotyledonae', 'Angiospermae'],
        ],
      },
      {
        t: 'p',
        html: '(NCERT spells the order Primata; it is usually written Primates.)',
      },
      {
        t: 'p',
        html: 'Read each row left-to-right as a single organism climbing the ladder; read each column to compare the same rank across organisms. Note the two plants (mango, wheat) split at <b>Class</b> (Dicotyledonae vs Monocotyledonae) yet share the same Division, Angiospermae.',
      },
      {
        t: 'p',
        html: '<b>Framework C: Taxon vs Category (the abstract/concrete test)</b><br><br>When a question hands you a term, ask: “Is this a level, or a group of real organisms?”<br>• If it names a <b>rank/level</b> with no organisms attached (“Order,” “Class,” “Division”), it is a <b>category</b> (abstract).<br>• If it names an <b>actual group</b> you could in principle point to (“Mammalia,” “Bryophyta,” “Solanaceae”), it is a <b>taxon</b> (concrete).<br>• Mnemonic: <b>cat</b>egory = the <b>cat</b>alogue heading; <b>tax</b>on = the <b>tax</b>a (real things) filed under it.',
      },
      {
        t: 'p',
        html: '<b>Framework D: Phylum vs Division (don’t mix the kingdoms)</b><br><br>The category between Class and Kingdom is called <b>Phylum for animals</b> and <b>Division for plants</b>. They are the same rank, just named per kingdom. So asking “phylum in animals is equivalent to which level in plants?” is simply asking you to answer <b>Division.</b>',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Arrange the following taxonomic categories in the correct sequence from the lowest to the highest rank, and state what happens to the number of shared characters along this sequence: Class, Species, Family, Kingdom, Genus, Order, Phylum.',
        steps: [
          '<b>Solution.</b> Lowest → highest (the seven obligate categories in order): <b>Species → Genus → Family → Order → Class → Phylum → Kingdom.</b> As we move from species towards kingdom, the number of <b>common characters decreases</b> (and the number of organisms in each group increases). Clean two- to three-mark answer: write the sequence, then state the trend.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS / Assertion–Reason',
        q: 'Assertion (A): Two insects belonging to the same order are certain to belong to the same class. Reason (R): A class is a higher category that contains its orders, so any group sharing an order automatically shares the class that surrounds it. Choose: <b>(1)</b> Both true, R explains A. <b>(2)</b> Both true, R not the explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          '<b>Solution.</b> A is true: class is above order in the ladder, and by the containment (nesting) principle, sharing the lower category guarantees sharing the higher one. R states precisely that containment logic and is itself true, and it is the correct reason for A.',
          '(The instinctive wrong move is (3), where students “feel” R is just a restatement; in fact it is the mechanism.)',
        ],
        ans: '(1).',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: 'The genus <i>Corvus</i> includes the house crow, the jungle crow and the raven, whereas the genus <i>Ginkgo</i> (maidenhair tree) has one living species. Which statement is true? <b>(1)</b> <i>Corvus</i> is monotypic and <i>Ginkgo</i> is polytypic. <b>(2)</b> <i>Corvus</i> is polytypic and <i>Ginkgo</i> is monotypic. <b>(3)</b> Both are monotypic. <b>(4)</b> Both are polytypic.',
        steps: [
          '<b>Solution.</b> Monotypic = one species; polytypic = two or more. <i>Corvus</i> has many species → <b>polytypic</b>. <i>Ginkgo</i> has one species → <b>monotypic</b>.',
          'The speed-trap is the lookalike vocabulary: “mono” (one) vs “poly” (many); students who blur the prefixes flip the answer.',
        ],
        ans: '(2).',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty / statement analysis',
        q: 'Read the four statements and count how many are correct: <b>(A)</b> As we go from kingdom down to species, the number of organisms in a taxon decreases while shared characters increase. <b>(B)</b> “Family” is a taxon, while “Felidae” is a category. <b>(C)</b> There are seven obligate categories, but intermediate ranks such as sub-class may be inserted. <b>(D)</b> In plants, the category equivalent to “phylum” of animals is called “division.”',
        steps: [
          '<b>Solution.</b> Check each:<br>• (A) <b>True</b>: descending the ladder shrinks the group and multiplies shared characters.<br>• (B) <b>False</b>. It is reversed: “Family” is the <b>category</b> (the rank), “Felidae” is the <b>taxon</b> (the real group). This swap is the classic trap.<br>• (C) <b>True</b>: seven obligate categories, plus optional intermediates.<br>• (D) <b>True</b>: phylum (animals) ≡ division (plants).',
          'Three statements (A, C, D) are correct.',
          'The whole difficulty sits in spotting the single reversed pair in (B).',
        ],
        ans: 'three.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a taxon and give one example. How does it differ from a category?',
            a: 'A taxon is the actual group of organisms occupying a rank (e.g. Mammalia); a category is the abstract rank/level itself (e.g. Class).',
          },
          {
            q: '[CBSE A–R] <b>Assertion:</b> A monotypic genus contains only one species. <b>Reason:</b> The genus <i>Panthera</i> is monotypic. Choose: (1) Both true, R explains A. (2) Both true, R not the explanation. (3) A true, R false. (4) A false, R true.',
            a: '(3). A is true, R is false (<i>Panthera</i> is polytypic, not monotypic).',
          },
          {
            q: '[NEET] Which of the following correctly lists categories in descending order? <b>(1)</b> Species, Genus, Family, Order <b>(2)</b> Kingdom, Phylum, Class, Order, Family, Genus, Species <b>(3)</b> Kingdom, Class, Phylum, Order <b>(4)</b> Species, Family, Genus, Order',
            a: 'Option (2).',
          },
          {
            q: '[NEET] Two organisms are placed in the same family but different genera. Which of these categories must they still share? (i) Order (ii) Class (iii) Species (iv) Kingdom',
            a: 'They must share (i) Order, (ii) Class and (iv) Kingdom, every category above family; they need not share (iii) species (they are even in different genera).',
          },
          {
            q: '[NEET high-difficulty] A taxonomist places the brinjal, the tomato and the potato in the genus <i>Solanum</i>, within the family Solanaceae. State whether <i>Solanum</i> is monotypic or polytypic, and explain, using the containment principle, why all three plants necessarily belong to the same order and class.',
            a: '<i>Solanum</i> is <b>polytypic</b> (three species). Because genus is contained within family, family within order, and order within class, all three species share the genus <i>Solanum</i> ⇒ share family Solanaceae ⇒ share the same order and class automatically (downward membership forces upward membership).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is the correct sequence of taxonomic categories?',
        opts: [
          { label: 'Species → Genus → Order → Family → Class → Phylum → Kingdom', nudge: '<b>(1)</b> swaps Family and Order: the single most common ordering error.' },
          { label: 'Species → Genus → Family → Order → Class → Phylum → Kingdom', nudge: null },
          { label: 'Species → Family → Genus → Order → Class → Phylum → Kingdom', nudge: '<b>(3)</b> swaps Genus and Family.' },
          { label: 'Genus → Species → Family → Order → Class → Phylum → Kingdom', nudge: '<b>(4)</b> puts Genus below Species, which inverts the basic unit.' },
        ],
        correct: 1,
        solution: 'The fixed sequence is Species, Genus, <b>Family, Order</b>, Class, Phylum, Kingdom. Lock the middle “Family-then-Order” and the rest falls into place.',
      },
      {
        t: 'mcq',
        q: 'Members of which taxonomic category share the <b>maximum</b> number of common characters?',
        opts: [
          { label: 'Kingdom', nudge: '<b>(1)</b> Kingdom is the opposite extreme (fewest shared characters).' },
          { label: 'Phylum', nudge: '<b>(2)</b> and <b>(3)</b> are intermediate.' },
          { label: 'Family', nudge: '<b>(2)</b> and <b>(3)</b> are intermediate.' },
          { label: 'Species', nudge: null },
        ],
        correct: 3,
        solution: 'Shared characters are maximum at the lowest rank and fall as you ascend, so species wins. Students who misremember the trend as “bigger group = more in common” pick (1): the exact misconception this question targets.',
      },
      {
        t: 'mcq',
        q: 'Mammalia is to Class as ____ is to ____ :',
        opts: [
          { label: 'taxon : category', nudge: null },
          { label: 'category : taxon', nudge: '<b>(2)</b> reverses it.' },
          { label: 'species : genus', nudge: '<b>(3)</b> is unrelated to the analogy.' },
          { label: 'abstract : concrete', nudge: '<b>(4)</b> inverts the link, since a taxon is concrete and a category is abstract: the option deliberately flips the pairing to catch the hasty reader.' },
        ],
        correct: 0,
        solution: 'Mammalia is a real group (a <b>taxon</b>); Class is the rank it occupies (a <b>category</b>). So the relationship is taxon : category.',
      },
      {
        t: 'mcq',
        q: 'In the classification of plants, the category equivalent to phylum of animals is:',
        opts: [
          { label: 'Order', nudge: '<b>(1)</b>, <b>(2)</b>, <b>(4)</b> are genuine categories but at the wrong level; they tempt students who memorised the ladder but never learned that this one rank carries two names.' },
          { label: 'Class', nudge: '<b>(1)</b>, <b>(2)</b>, <b>(4)</b> are genuine categories but at the wrong level; they tempt students who memorised the ladder but never learned that this one rank carries two names.' },
          { label: 'Division', nudge: null },
          { label: 'Family', nudge: '<b>(1)</b>, <b>(2)</b>, <b>(4)</b> are genuine categories but at the wrong level; they tempt students who memorised the ladder but never learned that this one rank carries two names.' },
        ],
        correct: 2,
        solution: 'Phylum (animals) and <b>Division</b> (plants) are the same rank under different kingdom-specific names.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Family ↔ Order swap.</b> By far the most frequent sequencing error. The correct middle is <b>Family then Order</b> (genus is more specific than family; order is broader than family).',
          '<b>Taxon called a category (and vice versa).</b> “Mammalia is a category” is wrong: Mammalia is a taxon; Class is the category. Real group = taxon; rank/label = category.',
          '<b>Mono/poly flip.</b> Monotypic = one species, polytypic = many. Don’t let the similar prefixes trip you.',
          '<b>Reversing the master trend.</b> As you ascend (species → kingdom), shared characters <b>decrease</b>; group size <b>increases</b>. Many wrong MCQ choices are built on the inverse.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “do they share category X?” question, use the <b>downward-implies-upward rule</b>: write the seven ranks once, find the lowest category the two organisms share, and they automatically share everything above it and nothing reliably below it. You can answer in seconds without knowing the organisms.',
      },
      {
        t: 'protip',
        html: '<b>Memory aid for the sequence:</b> “<b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup” read top-down = <b>K</b>ingdom, <b>P</b>hylum, <b>C</b>lass, <b>O</b>rder, <b>F</b>amily, <b>G</b>enus, <b>S</b>pecies (reverse it for species → kingdom).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Seven obligate categories (low → high):</b> Species → Genus → Family → Order → Class → Phylum/Division → Kingdom. (Begun by Linnaeus.)', note: '' },
          { f: '<b>Master trend, going UP (species → kingdom):</b> common characters ↓, number of organisms ↑, kinship more distant.', note: '' },
          { f: '<b>Containment rule:</b> same lower category ⇒ must share all higher categories; the reverse does <b>not</b> hold. (Downward implies upward.)', note: '' },
          { f: '<b>Taxon vs Category:</b> taxon = real group (Mammalia, Bryophyta), concrete; category = the rank (Class, Division), abstract.', note: '' },
          { f: '<b>Genus types:</b> monotypic = 1 species (<i>Ginkgo</i>); polytypic = ≥2 species (<i>Panthera</i>, <i>Solanum</i>).', note: '' },
          { f: '<b>Phylum (animals) = Division (plants)</b>', note: 'same rank, two names.' },
        ],
        aids: [
          '<b>Mnemonics:</b> sequence → “<b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup.” • <b>cat</b>egory = the <b>cat</b>alogue heading; <b>tax</b>on = the real <b>tax</b>a on it.',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 35–39 ─────────────────────────
  {
    n: 'A',
    title: 'Classification Methods Beyond Morphology',
    extra: true,
    kalam: 'This chapter does not teach three further approaches, numerical taxonomy, cytotaxonomy and chemotaxonomy (NCERT names them later with a single line each).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the defining properties of life, the rules of nomenclature, and the seven-category taxonomic ladder. Four examinable patterns still stand outside the door. Additional topic A marries the “classification” word of Topic 01 to the classification methods the chapter names but never teaches: Topic 01 names karyotaxonomy and chemotaxonomy in one line, Topic 02 names cytotaxonomy and chemotaxonomy in one phrase, and numerical taxonomy is not mentioned at all; none of them is explained. Additional topic B opens the biological species concept of Topics 01 and 02 to its three extensions (morphological, ecological, phylogenetic) and fixes the case of asexual organisms and bacteria that the interbreeding definition cannot reach. Additional topic C supplies the dichotomous key, the standard identification tool used in herbaria, and never taught anywhere in it, with full construction and use. Additional topic D supplies the five-kingdom table, which the chapter does not contain (Whittaker’s criteria and examples), and the six-kingdom update, completing the kingdom-level picture.',
      },
      {
        t: 'p',
        html: 'Topic 01 defines classification as “arranging organisms into convenient categories (groups) on the basis of easily observable, shared characters.” That is classical morphology-based classification. This chapter does not teach three further approaches, numerical taxonomy, cytotaxonomy and chemotaxonomy (NCERT names them later with a single line each). NEET tests each by name in match-the-column and statement-analysis items, and boards ask for one-line definitions. Here they are.',
      },

      { t: 'part', title: 'The Three Classification Methods' },
      {
        t: 'p',
        html: '<b>Numerical taxonomy (also called phenetics).</b><br>• Proposed by Peter Sneath and Robert Sokal (1950s–60s).<br>• Classifies organisms based on observable characters (phenetic = based on overall similarity, not evolutionary relationship).<br>• Each character is given equal weight; no character is considered more “important” than another.<br>• Large numbers of characters (often 100+) are coded as 0 or 1 (absent/present) and fed into a computer.<br>• The computer calculates a similarity coefficient for every pair of taxa; pairs with high similarity are grouped.<br>• Result: a dendrogram (tree diagram) showing clusters of similar organisms.<br>• Key point for exams: numerical taxonomy treats all characters equally and uses computational (statistical) methods. It is objective and reproducible.',
      },
      {
        t: 'p',
        html: '<b>Cytotaxonomy.</b><br>• Classifies organisms based on chromosome number, chromosome morphology (size, position of centromere, banding patterns), and karyotype.<br>• Chromosome number and structure are often stable within a species, so similar karyotypes often point to relatedness, while different numbers can separate look-alike species.<br>• Classic example: the three species of <i>Drosophila</i> (fruit fly), <i>D. melanogaster</i>, <i>D. simulans</i>, <i>D. yakuba</i>, were separated partly by chromosome inversions visible in their polytene chromosomes. The banding patterns of polytene chromosomes form a “fingerprint” unique to each species.<br>• Another example: <i>Brassica</i> (mustard family): <i>B. oleracea</i> (2n = 18), <i>B. nigra</i> (2n = 16), <i>B. rapa</i> (2n = 20). Chromosome counts helped confirm their evolutionary relationships and contributed to the theory of polyploidy in crop evolution.<br>• Key point for exams: cytotaxonomy uses intracellular characters (chromosomes) rather than external morphology. It is particularly useful when organisms look similar but have different chromosome numbers.',
      },
      {
        t: 'p',
        html: '<b>Chemotaxonomy (also called biochemical taxonomy).</b><br>• Classifies organisms based on the chemistry of naturally occurring compounds: proteins, alkaloids, flavonoids, terpenoids, amino acid sequences.<br>• Organisms that share a particular secondary metabolite (e.g., a specific alkaloid) are placed closer together taxonomically.<br>• Example: the alkaloid berberine occurs in the related families Berberidaceae, Menispermaceae and Ranunculaceae; sharing this biochemical character supports placing these families near one another, whereas a group lacking it gives chemical evidence for a more distant relationship.<br>• Molecular chemotaxonomy extends this to amino acid sequences in proteins and DNA/RNA nucleotides, a precursor to modern molecular systematics.<br>• Key point for exams: chemotaxonomy uses molecular/biochemical characters rather than physical traits. Closely related organisms share similar biochemistry.',
      },
      {
        t: 'p',
        html: '<b>Modern extensions (statement-analysis MCQs).</b><br>• <b>Molecular taxonomy</b>: uses DNA/RNA nucleotide sequences (16S rRNA, mitochondrial DNA, chloroplast DNA) to determine evolutionary relationships. The 16S rRNA gene is the standard marker for bacterial classification.<br>• <b>Phylogenetic systematics (cladistics)</b>: classifies organisms based on shared derived characters (synapomorphies) that indicate common ancestry. Unlike phenetics, it groups by evolutionary descent, not overall similarity.<br>• <b>Bioinformatics</b>: the computational tools needed to store, compare, and analyse the large datasets of molecular taxonomy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Numerical Taxonomy.</b> Five bacterial species (A–E) are scored for the presence (1) or absence (0) of five phenotypic characters:<br>Species, Flagellum, Spore, Capsule, Aerobic, Gram-positive<br>A: Flagellum 1, Spore 1, Capsule 0, Aerobic 1, Gram-positive 1<br>B: Flagellum 1, Spore 1, Capsule 0, Aerobic 0, Gram-positive 1<br>C: Flagellum 0, Spore 0, Capsule 1, Aerobic 1, Gram-positive 0<br>D: Flagellum 0, Spore 0, Capsule 1, Aerobic 0, Gram-positive 0<br>E: Flagellum 1, Spore 0, Capsule 0, Aerobic 1, Gram-positive 0<br>Calculate the simple matching coefficient (SM = <frac><num>number of matches</num><den>total characters</den></frac>) between A and B, and between C and D. Which pair is more similar?',
        steps: [
          '<b>Step 1: A vs B character by character.</b> Flagellum: 1 vs 1 → match (1). Spore: 1 vs 1 → match (1). Capsule: 0 vs 0 → match (1). Aerobic: 1 vs 0 → mismatch (0). Gram-positive: 1 vs 1 → match (1). Matches = 4, total characters = 5. SM = <frac><num>4</num><den>5</den></frac> = 0.80.',
          '<b>Step 2: C vs D character by character.</b> Flagellum: 0 vs 0 → match (1). Spore: 0 vs 0 → match (1). Capsule: 1 vs 1 → match (1). Aerobic: 1 vs 0 → mismatch (0). Gram-positive: 0 vs 0 → match (1). Matches = 4, total characters = 5. SM = <frac><num>4</num><den>5</den></frac> = 0.80.',
          '<b>Step 3: Compare.</b> Both pairs give SM = 0.80. In this case the similarity coefficient is identical, but the pattern of matches differs: A and B share flagellum, spore, Gram-positive and the absence of a capsule, while C and D share the non-flagellate, non-sporulating, Gram-negative, capsule-bearing. They are similar within each pair but by different character suites.',
        ],
        ans: 'SM(A, B) = 0.80; SM(C, D) = 0.80. Both pairs are equally similar by this metric; Both pairs are equally similar (SM = 0.80). Among A to D the other pairs score at most <frac><num>1</num><den>5</den></frac> (A with C, B with D), so A and B would form one cluster and C and D another, far apart.',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS',
        q: '<b>Cytotaxonomy.</b> The mustard <i>Brassica juncea</i> has 2n = 36. Its two diploid relatives <i>B. rapa</i> (2n = 20) and <i>B. nigra</i> (2n = 16) are suspected parents. Use chromosome numbers to test this.',
        steps: [
          '<b>Analysis.</b> A gamete of <i>B. rapa</i> carries n = 10 and a gamete of <i>B. nigra</i> carries n = 8. Fusion of these gametes gives a hybrid with 10 + 8 = 18 chromosomes. If the chromosome number of this hybrid doubles (allopolyploidy), the result has 2n = 36, exactly the number found in <i>B. juncea</i>. The same arithmetic works for the other cultivated species: <i>B. rapa</i> (n = 10) × <i>B. oleracea</i> (n = 9) gives 19, and doubling gives <i>B. napus</i> (2n = 38); <i>B. nigra</i> (n = 8) × <i>B. oleracea</i> (n = 9) gives 17, and doubling gives <i>B. carinata</i> (2n = 34).',
        ],
        ans: 'The chromosome counts support <i>B. rapa</i> and <i>B. nigra</i> as the parents of <i>B. juncea</i> (2n = 36 = 2 × (10 + 8)). Chromosome number and structure are therefore valid taxonomic and evolutionary evidence, even when the plants look broadly similar.',
      },
      {
        t: 'ex',
        tag: 'NEET statement analysis',
        q: '<b>Which statement is correct?</b><br><b>(A)</b> Numerical taxonomy gives equal weight to all characters and uses a similarity coefficient computed by a computer.<br><b>(B)</b> Chemotaxonomy classifies organisms based on chromosome number and morphology.<br><b>(C)</b> Cytotaxonomy uses DNA sequencing as its primary data source.<br><b>(D)</b> Phylogenetic systematics classifies organisms purely by overall phenotypic similarity.',
        steps: [
          '<b>Analysis.</b><br>• (A) True: numerical taxonomy (phenetics) does exactly this.<br>• (B) False: chemotaxonomy uses biochemical compounds, not chromosomes; that is cytotaxonomy.<br>• (C) False: DNA sequencing is molecular taxonomy, not cytotaxonomy (which uses chromosomes).<br>• (D) False: phylogenetic systematics (cladistics) uses shared derived characters (synapomorphies) indicating common ancestry, not overall phenotypic similarity (phenetics does that).',
        ],
        ans: 'Only (A) is correct.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define numerical taxonomy. State two features that make it different from classical morphology-based classification.',
            a: 'Numerical taxonomy classifies organisms using a large number of morphological characters (often 100 or more) coded as binary (0 or 1) data, analysed by computer to compute similarity coefficients. Two features: (i) all characters are given equal weight (no character is considered more important); (ii) it uses computational/statistical methods, producing a dendrogram of similarity clusters. In contrast, classical morphology often gives more weight to key distinguishing traits and relies on subjective judgement.',
          },
          {
            q: '[NEET] Chemotaxonomy classifies organisms on the basis of: (a) chromosome number, (b) secondary metabolites, (c) morphological characters, (d) evolutionary relationships.',
            a: '(b) Secondary metabolites. Chemotaxonomy uses biochemical compounds (alkaloids, flavonoids, amino acids). Chromosome data is cytotaxonomy; morphology is classical; evolutionary relationships are phylogenetic.',
          },
          {
            q: '[NEET] Which of the following is NOT a feature of numerical taxonomy? (a) Equal weight to all characters, (b) Computer-based statistical analysis, (c) Uses only a few easily observable characters, (d) Produces a dendrogram.',
            a: '(c) Uses only a few easily observable characters. Numerical taxonomy specifically uses many characters (often 100+), not a few. This is the opposite of what it does.',
          },
          {
            q: '[CBSE HOTS] A taxonomist finds two plant species that look identical morphologically but have different chromosome numbers (2n = 18 vs 2n = 20). Can cytotaxonomy help distinguish them? Explain with reasoning.',
            a: 'Yes. Cytotaxonomy uses chromosome number and morphology as taxonomic characters. Different chromosome numbers (2n = 18 vs 20) in morphologically identical plants indicate they are genetically distinct, likely separate species or at least distinct varieties. This is a classic case where morphology fails but cytotaxonomy succeeds.',
          },
          {
            q: '[NEET high-difficulty] Match the columns:<br>Column I<br>P. Numerical taxonomy<br>Q. Cytotaxonomy<br>R. Chemotaxonomy<br>S. Molecular taxonomy<br>Column II<br>(i) Secondary metabolites<br>(ii) Computer-based clustering<br>(iii) Chromosome number/morphology<br>(iv) DNA/RNA sequences',
            a: 'P → (ii); Q → (iii); R → (i); S → (iv).',
          },
          {
            q: '[NEET high-difficulty] State whether the following is true or false, and justify: “In numerical taxonomy, every character is weighted equally, which means a functionally critical character (e.g., presence of chlorophyll in plants) and a trivial one (e.g., leaf hair density) contribute equally to the similarity coefficient.”',
            a: 'True. This is a deliberate design feature of numerical taxonomy (phenetics): all characters are treated equally to eliminate subjective weighting. Whether this is scientifically justified or a limitation is debated, but the statement accurately describes the method. A critic might argue it is a limitation because not all characters are biologically equal in significance; defenders argue it makes the analysis reproducible and unbiased.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 39–42 ─────────────────────────
  {
    n: 'B',
    title: 'Beyond the Biological Species Concept',
    extra: true,
    kalam: 'Topic 01 gives you the biological species concept: a group of organisms capable of interbreeding freely in nature and producing fertile offspring, sharing a common gene pool.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 gives you the biological species concept: a group of organisms capable of interbreeding freely in nature and producing fertile offspring, sharing a common gene pool. Topic 02 applies it throughout the hierarchy. Topics 01 and 02 note only briefly that the interbreeding definition “breaks down for asexual organisms”. What the chapter does not tell you is that biologists use four species concepts, and why the biological concept fails for bacteria, asexual organisms, fossils and hybridising plants. NEET asks all of these.',
      },

      { t: 'part', title: 'The Four Species Concepts' },
      {
        t: 'table',
        title: null,
        head: ['Concept', 'Basis', 'Who proposed it', 'Works for', 'Fails for'],
        rows: [
          ['Biological', 'Interbreeding + fertile offspring', 'Ernst Mayr', 'Most sexually reproducing animals and plants', 'Asexual organisms, bacteria, fossils, plants that hybridise'],
          ['Morphological', 'Overall body form and structure', 'Linnaeus (implicit)', 'Any organism, including fossils and asexual forms, when specimens are available', 'Cryptic species, polymorphic species, convergent evolution'],
          ['Ecological', 'Ecological niche / resource use', 'Leigh Van Valen (1976)', 'Organisms occupying different niches in the same habitat', 'Ecological generalists, niche variation within species'],
          ['Phylogenetic', 'Shared derived characters (common ancestry)', 'Willi Hennig (phylogenetic systematics); concept developed by Cracraft and others', 'All organisms, including fossils and bacteria', 'Requires extensive character data'],
        ],
      },
      {
        t: 'p',
        html: '<b>Why the biological species concept fails for bacteria and asexual organisms.</b><br><br>Bacteria reproduce entirely asexually by binary fission. Bacteria reproduce by binary fission, so a bacterial lineage is a set of clones and there is no interbreeding population or shared gene pool for the biological concept to test. The concept of “interbreeding” is inapplicable. For bacteria, species are defined operationally: a group of strains with ≥70% DNA–DNA hybridisation (molecular approach) or ≥97% (older figure; about 98.65% in current work) 16S rRNA identity. These are approximate operational thresholds, not NCERT; they are operational definitions, not biological definitions, a point that catches students who assume the biological species concept is universal.<br><br>Similarly, obligate parthenogens (certain lizards, insects, rotifers) and vegetatively reproducing plants cannot be assessed by interbreeding. Here morphological or ecological species concepts are applied instead.',
      },
      {
        t: 'p',
        html: '<b>Cryptic species complexes: when morphology fails.</b><br><br>Two species are cryptic if they are morphologically indistinguishable (look the same) but do not interbreed (genetically isolated). Example: the <i>Anopheles gambiae</i> complex of mosquitoes, whose members cannot be told apart by form but are reproductively isolated. For NEET, the key point is: morphological species concept can group cryptic species together incorrectly. This is why biological/phylogenetic species concepts exist as corrections.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Which species concept Applies?</b> For each organism below, state which species concept is most appropriate and why:<br><b>(a)</b> Two species of <i>Drosophila</i> (fruit fly) found in the same forest, identical in appearance, do not interbreed in nature.<br><b>(b)</b> A species of <i>Bacillus</i> bacteria dividing in a laboratory culture.<br><b>(c)</b> Two species of warblers occupying different feeding niches (one catches insects in the canopy, one forages on the ground).<br><b>(d)</b> A fossil of an extinct hominid, classified based on skull features.',
        steps: [
          '<b>Analysis.</b> (a) Biological species concept applies: interbreeding failure despite morphological similarity is precisely what the biological concept detects. These are two cryptic species. (b) Biological species concept fails: bacteria are asexual. Phylogenetic (molecular) criteria apply; practically, bacteria are grouped by molecular similarity (≥70% DNA hybridisation or ≥97% (older figure; about 98.65% in current work) 16S rRNA identity; approximate operational thresholds, not NCERT). (c) Ecological species concept applies: the two warblers occupy different ecological niches (different feeding zones) even though they may look similar. (d) Morphological species concept applies: fossils give only physical structure; no genetic data, no behavioural data, no interbreeding information. Classification is based entirely on skull morphology.',
        ],
        ans: '(a) Biological; (b) Biological concept fails: phylogenetic (molecular) criteria apply; (c) Ecological; (d) Morphological.',
      },
      {
        t: 'ex',
        tag: 'NEET statement analysis',
        q: '<b>How many statements are correct?</b><br><b>(A)</b> The biological species concept works for all sexually reproducing organisms.<br><b>(B)</b> Two organisms that look identical must belong to the same species.<br><b>(C)</b> The ecological species concept would treat two fish populations that occupy different water depths, using different resources, as different species.<br><b>(D)</b> Bacteria are classified using the biological species concept based on their ability to exchange genetic material through conjugation.',
        steps: [
          '<b>Analysis.</b> (A) False: even among sexually reproducing organisms, the biological concept fails for fossils (cannot test interbreeding) and for plants that form hybrids (e.g., the <i>Brassica</i> allotetraploids <i>B. juncea</i>, <i>B. napus</i> and <i>B. carinata</i> arose by hybridisation between pairs of the diploid species <i>B. rapa</i>, <i>B. nigra</i> and <i>B. oleracea</i>). (B) False: cryptic species look identical but are genetically isolated. This is exactly when the biological concept is needed to separate them. (C) True: ecological species concept classifies based on niche. Different water depths = different niches = different species. (D) False: bacteria can exchange genetic material by conjugation, but “species” in bacteria is defined by molecular criteria (DNA–DNA hybridisation ≥70%, ≥97% (older figure; about 98.65% in current work) 16S rRNA identity; approximate operational thresholds, not NCERT), not by the biological species concept’s interbreeding test. Conjugation does occur within a bacterial species but is not the defining criterion.',
        ],
        ans: 'Only (C) is correct, so the number of correct statements is one.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name two groups of organisms for which the biological species concept cannot be applied, and give one alternative concept used for each.',
            a: '(i) Bacteria: biological concept fails; classified by molecular/phenotypic criteria (DNA hybridisation, 16S rRNA sequence similarity). (ii) Asexual organisms (e.g., bdelloid rotifers, some lizards): biological concept fails; morphological or ecological concepts applied.',
          },
          {
            q: '[NEET] The biological species concept is associated with: (a) Linnaeus, (b) Ernst Mayr, (c) Whittaker, (d) Darwin.',
            a: '(b) Ernst Mayr.',
          },
          {
            q: '[NEET] Two plant species look identical but do not produce viable seeds when cross-pollinated. Which species concept is being applied here?',
            a: 'Biological species concept: interbreeding is tested (cross-pollination produces no viable seeds = reproductive isolation).',
          },
          {
            q: '[CBSE HOTS] Explain, with an example, what is meant by a “cryptic species complex.” Why is the morphological species concept inadequate for such complexes?',
            a: 'A cryptic species complex is a group of two or more morphologically identical species that are genetically distinct and do not interbreed. Example: the <i>Anopheles gambiae</i> complex (mosquitoes) contains multiple species indistinguishable to the naked eye but separated by genetics, chromosome inversions, and breeding behaviour. The morphological concept groups them as one species; the biological or phylogenetic concept separates them correctly. Hence morphology is inadequate when species look alike but are reproductively isolated.',
          },
          {
            q: '[NEET high-difficulty] Evaluate the statement: “The ecological species concept is most useful for organisms that occupy very specific, non-overlapping niches, and least useful for ecological generalists.” Justify your answer.',
            a: 'True. For niche specialists (e.g., two warblers in different forest layers, two fish at different depths), ecological differentiation signals species boundaries clearly. For generalists that occupy many niches, the boundary between species and within-species niche variation blurs, making the ecological concept difficult to apply.',
          },
          {
            q: '[NEET high-difficulty] Distinguish between the biological, morphological, and phylogenetic species concepts in terms of: (a) what character they use, (b) whether they require living organisms, (c) one group of organisms each is particularly suited for.',
            a: '(a) Biological: reproductive compatibility (interbreeding + fertile offspring); Morphological: body form and structure (phenotype); Phylogenetic: shared derived characters (synapomorphies) indicating common ancestry. (b) Biological: requires living organisms (to test interbreeding); Morphological: works on preserved specimens and fossils; Phylogenetic: works on any material yielding character data (living, preserved, or fossil). (c) Biological: most sexually reproducing animals; Morphological: fossils and preserved specimens; Phylogenetic: bacteria, viruses, and any organisms where morphology or interbreeding data are unavailable.',
          },
        ],
      },
    ],
  },
];
