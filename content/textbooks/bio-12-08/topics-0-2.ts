import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 8 (Microbes in Human Welfare), Topics 00 to 02: pp. 409 to
 * 428 of the Class 12 Biology Master Reference, word for word. The title page
 * and contents box (p. 408 and the top of p. 409) are not copied. Topic 00 is
 * the unnumbered front note "How to Use This Master Content" (p. 409, one part);
 * Topic 01 Microbes in Household Products (pp. 410 to 419) and Topic 02 Microbes
 * in Industrial Products (pp. 420 to 428) are cut at the book's Sections 1 to 8.
 * Figures 8.1 and 8.2 (captions p. 413, drawn p. 414), 8.3 (the table printed as a
 * figure, drawn p. 416) and 8.4 (caption p. 423, drawn p. 424) are redrawn in
 * lib/diagrams/biology-12-08.ts. Emphasis italics are dropped; italics are for
 * scientific names. Every em dash is replaced (colon, comma, bracket or full stop).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · p. 409 ─────────────────────────
  {
    n: '00',
    title: 'How to Use This Master Content',
    kalam: 'This single document is the complete, exam-ready treatment of Chapter 8: Microbes in Human Welfare.',
    blocks: [
      { t: 'part', title: 'How to use this master content' },
      {
        t: 'p',
        html: 'This single document is the complete, exam-ready treatment of Chapter 8: Microbes in Human Welfare. It consolidates all six NCERT sections in the order they appear in the textbook: Household Products, Industrial Products, Sewage Treatment, Production of Biogas, and Microbes as Biocontrol Agents and Biofertilisers (biocontrol agents and biofertilisers are two NCERT sections treated together in one topic).<br><br>Each topic follows the same structure so you always know where to find things: an Exam Relevance note, Concept Intuition (the “why” before the “what”), a Classification Framework of comparison tables, Key Processes, fully worked questions across the CBSE → CUET → NEET → NEET high-difficulty ladder, self-attempt Practice Exercises with an answer key, MCQs with full distractor analysis, Pitfalls & Pro-Tips, and a Cheat Sheet box. Study a topic end-to-end, then use its cheat sheet for revision.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 410–419 ─────────────────────────
  {
    n: '01',
    title: 'Microbes in Household Products',
    kalam: 'We have been employing microbes as kitchen staff for thousands of years, long before anyone knew bacteria or fungi existed.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial, high-yield NEET topic: almost every year carries at least one direct “which microbe makes which product” recall question (the book’s estimate from past papers, not official figures), and match-the-column items pairing organism with food are common. CUET asks clean single-fact MCQs (curd, baker’s yeast, Swiss cheese holes). CBSE Boards may set a 1–2 mark short answer (“How does <i>Lactobacillus</i> convert milk into curd?” or “Name the microbe responsible for the large holes in Swiss cheese”). The whole topic is recall-heavy with very little reasoning depth, which is exactly why students lose easy marks by mixing up organism names.',
      },
      {
        t: 'p',
        html: 'Walk into any Indian kitchen at dawn and you are standing inside a working microbiology lab: you just cannot see the workers. The katori of curd setting overnight, the idli batter bubbling and rising in a steel container, the bread going soft and airy, the bottle of homemade pickle: every one of these is the visible result of microscopic organisms quietly doing chemistry for us. We have been employing microbes as kitchen staff for thousands of years, long before anyone knew bacteria or fungi existed. People simply noticed that if you keep a little of yesterday’s curd and stir it into today’s warm milk, tomorrow you get more curd, and that practical trick is, in modern language, inoculation with a starter culture.',
      },
      {
        t: 'p',
        html: 'The single most important idea in this whole topic is fermentation, the process by which microbes break down sugars (and other molecules) in the absence of, or with limited, oxygen, releasing useful by-products like acids, alcohol, and carbon dioxide gas. Different microbes leave different “signatures” in the food: bacteria that pour out acid make things sour and thick (curd); yeast that pours out gas makes things rise and turn spongy (bread, buns); particular moulds left to grow on a food give it a distinctive flavour (Roquefort cheese). Once you learn to read these signatures (sour and set = acid-maker; airy and risen = gas-maker; veined and pungent = mould-ripened) the whole list of products organises itself instead of being random names to cram.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine handing the same bucket of milk to three different “tenants.” Tenant A (a <i>Lactobacillus</i> bacterium) is an acid factory: it eats the milk sugar and excretes lactic acid, which makes the milk go sour, thicken, and set into curd. Tenant B (baker’s yeast) is a gas factory: give it sugary dough and it puffs out bubbles of carbon dioxide that get trapped, so the dough swells like a balloon trying to escape. Tenant C (a <i>Penicillium</i> mould) is a flavour artist: it grows slowly through a block of cheese, leaving behind blue-green veins and a sharp taste. Same raw material, three completely different products: the difference is entirely which microbe you let move in.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> The kitchen microbiology that “works” only works inside a window of conditions, and exam traps live exactly at the edges of that window:<br>• <b>Temperature matters.</b> Curd sets best in warmth (think of why curd takes forever to set in a Delhi winter but only a few hours in a Chennai summer). Too cold and the bacteria slow to a crawl; too hot and you kill them. This is why milk is warmed, not boiled-hot, before adding the starter.<br>• <b>The starter must be living.</b> A “starter” or “inoculum” works only because it contains live microbes that multiply. Boiled-to-death curd cannot set fresh milk.<br>• <b>Right microbe, right substrate.</b> Yeast needs fermentable sugar to make gas; <i>Lactobacillus</i> needs lactose (milk sugar). Put yeast in plain milk and you will not get curd; the product depends on a match between the organism’s metabolism and the food’s chemistry.<br>• <b>It is a controlled spoilage, not magic.</b> Fermentation is essentially guided microbial growth. Let the wrong microbes in, or let the right ones run far too long, and the same process becomes rotting or over-souring. The line between “fermented” and “spoiled” is just which microbes won.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'Biology rewards the student who can instantly map organism → product → key feature. Memorise the table, not loose sentences. (No SI units arise in this topic: everything here is qualitative and taxonomic.)',
      },
      {
        t: 'table',
        title: 'Table 1.1: Microbe-to-Household-Product Master Map',
        head: ['Household Product', 'Microbe responsible', 'Type of microbe', 'What the microbe actually does (diagnostic action)'],
        rows: [
          ['Curd (dahi)', '<i>Lactobacillus</i> (a Lactic Acid Bacterium, LAB)', 'Bacterium', 'Converts milk sugar (lactose) into lactic acid; acid coagulates milk protein and sets it'],
          ['Dough leavening: bread', '<i>Saccharomyces cerevisiae</i> (baker’s yeast)', 'Fungus (yeast)', 'Ferments sugars, releasing CO<sub>2</sub> that puffs/raises the dough (idli and dosa batter is fermented by bacteria)'],
          ['Toddy', '(Natural fermentation of palm sap)', 'Microbial (mainly yeasts)', 'Ferments sugary sap of palms into a mildly alcoholic drink'],
          ['Swiss cheese (large holes)', '<i>Propionibacterium sharmanii</i>', 'Bacterium', 'Produces a large amount of CO<sub>2</sub> → gas creates the big holes (“eyes”)'],
          ['Roquefort cheese (blue veins, sharp flavour)', '<i>Penicillium roqueforti</i>', 'Fungus (mould)', 'Ripens the cheese; growth of the mould develops the characteristic flavour'],
        ],
      },
      {
        t: 'table',
        title: 'Table 1.2: Reading the “signature” of a fermentation product',
        head: ['Sensory clue in the food', 'Microbial signature', 'Typical agent'],
        rows: [
          ['Sour + thick + set', 'Acid production', 'Lactic Acid Bacteria'],
          ['Risen + spongy + holes throughout', 'Gas (CO<sub>2</sub>) production', 'Yeast / <i>Propionibacterium</i>'],
          ['Veined + pungent + ripened', 'Mould growth + flavour compounds', '<i>Penicillium</i>'],
          ['Mildly alcoholic', 'Alcohol (ethanol) fermentation', 'Yeasts'],
        ],
      },
      {
        t: 'p',
        html: '<b>Diagnostic features worth locking in:</b><br>• <b><i>Lactobacillus</i> is the lactic acid bacterium (LAB) NCERT names for curd.</b> LAB is a wider group (it also includes <i>Lactococcus</i> and <i>Leuconostoc</i>); the “acid” in lactic acid is the giveaway. LAB also do a nutritional bonus: they improve the nutritional quality of curd by increasing vitamin B<sub>12</sub>, and in our stomach they help check disease-causing microbes.<br>• <b>Baker’s yeast = <i>Saccharomyces cerevisiae</i>.</b> Remember this binomial precisely; it reappears in the next topic (industrial products / brewing), so it is doubly examinable.<br>• <b>Two cheeses, two kingdoms.</b> Swiss cheese holes = a bacterium (<i>Propionibacterium</i>). Roquefort flavour = a fungus (<i>Penicillium</i>). Questions often swap these.',
      },

      { t: 'part', title: 'Comparative characteristics and key processes' },
      {
        t: 'p',
        html: 'There is no “alternation of generations” or life-cycle to draw here (this is applied microbiology, not a plant/animal life history), so this part instead lays out the step-by-step processes behind the two most heavily tested products and a clean comparison of acid- vs gas-driven fermentation. Understanding why each step happens stops the names from blurring.',
      },
      {
        t: 'proc',
        title: 'The making of curd: step by step',
        steps: [
          '<b>Start with warm milk.</b> Milk is warmed (not scalded) to a temperature comfortable for bacterial growth. <b>Why:</b> most curd bacteria multiply fastest in gentle warmth, so warmth speeds setting.',
          '<b>Add a starter (inoculum).</b> A small amount of previously made curd is stirred in. <b>Why:</b> that spoonful carries live <i>Lactobacillus</i>; we are seeding the milk with the exact organism we want to dominate, before any random spoilage microbe gets a foothold.',
          '<b>The bacteria multiply and ferment lactose.</b> <i>Lactobacillus</i> consumes the milk sugar (lactose) and excretes lactic acid.<br>Lactose →<sup><i>Lactobacillus</i></sup> Lactic acid',
          '<b>Acid coagulates the milk protein.</b> As lactic acid accumulates, the pH falls. The milk protein casein loses its solubility at this lower pH and coagulates (clots), turning fluid milk into a soft semi-solid: curd. <b>Why:</b> protein structure depends on its chemical environment; acidify it and it aggregates.',
          '<b>Bonus effects.</b> The acidic environment checks the growth of disease-causing microbes (a natural preservation effect), and the LAB raise the vitamin B<sub>12</sub> content, making curd more nutritious than the milk it came from.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.1' },
      {
        t: 'proc',
        title: 'The leavening of dough: step by step',
        steps: [
          '<b>Mix dough with yeast (or a fermenting batter).</b> For bread, <i>Saccharomyces cerevisiae</i> is added; for idli/dosa the rice–black-gram batter is left to ferment with naturally present microbes.',
          '<b>Yeast ferments the sugars, releasing CO<sub>2</sub>.</b> The microbe breaks down sugars and gives off carbon dioxide gas.',
          '<b>Gas gets trapped, dough rises.</b> The CO<sub>2</sub> bubbles cannot escape the stretchy dough/batter, so they inflate it: the dough puffs up and becomes light and porous. <b>Why:</b> trapped gas physically expands the matrix, giving bread and idli their soft, airy texture.',
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.2' },
      {
        t: 'table',
        title: 'Comparison: acid fermentation vs gas (leavening) fermentation',
        head: ['Feature', 'Acid fermentation', 'Gas / leavening fermentation'],
        rows: [
          ['Main agent', '<i>Lactobacillus</i> (LAB)', '<i>Saccharomyces cerevisiae</i> (yeast) or bacteria'],
          ['Chief by-product exploited', 'Lactic acid', 'Carbon dioxide'],
          ['Effect on the food', 'Sours, thickens, sets (coagulation)', 'Raises, softens, makes porous'],
          ['Representative product', 'Curd', 'Bread, idli, dosa'],
          ['Nutritional/extra benefit', '↑ vitamin B<sub>12</sub>; checks harmful microbes', 'Gives a soft, airy texture'],
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.3' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · Short answer, 2 marks',
        q: 'State the scientific name of the bacterium used to convert milk into curd, and explain in two steps how it brings about this change.',
        steps: [
          '<b>Model answer.</b> The bacterium is <i>Lactobacillus</i> (Lactic Acid Bacteria).',
          '• <b>Step 1:</b> When added to warm milk as a starter, <i>Lactobacillus</i> multiplies and ferments the milk sugar (lactose) into lactic acid.<br>• <b>Step 2:</b> The accumulating lactic acid lowers the pH, which coagulates the milk protein (casein), converting liquid milk into set curd.',
          '(Add-on mark point: the curd so formed also has increased vitamin B<sub>12</sub> and the acidity checks harmful microbes.)',
          '<b>Presentation note for full marks:</b> name the organism in italics, give the exact product (lactic acid, not “acid”), and name casein as the protein that coagulates.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · Single-correct MCQ, clean recall',
        q: 'The large holes (“eyes”) characteristic of Swiss cheese are produced due to: <b>(a)</b> growth of <i>Penicillium roqueforti</i> <b>(b)</b> coagulation of casein by lactic acid <b>(c)</b> production of a large amount of CO<sub>2</sub> by <i>Propionibacterium sharmanii</i> <b>(d)</b> ethanol released by <i>Saccharomyces cerevisiae</i>',
        steps: [
          'Swiss cheese holes are made by CO<sub>2</sub> produced in large amount by the bacterium <i>Propionibacterium sharmanii</i>. <b>(a)</b> describes Roquefort, a fungus-ripened cheese; <b>(b)</b> is curd formation; <b>(d)</b> is brewing/leavening, not cheese holes.',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET · Match the column',
        q: 'Match the microbe in Column I with its product/role in Column II.<br><b>Column I (Microbe):</b> A. <i>Lactobacillus</i>; B. <i>Saccharomyces cerevisiae</i>; C. <i>Propionibacterium sharmanii</i>; D. <i>Penicillium roqueforti</i>.<br><b>Column II (Product / role):</b> i. Holes in Swiss cheese; ii. Curd from milk; iii. Flavour of Roquefort cheese; iv. Leavening of bread dough.',
        steps: [
          '<b>Reasoning:</b> <i>Lactobacillus</i> → acid → curd (A–ii). Baker’s yeast → CO<sub>2</sub> → risen bread (B–iv). <i>Propionibacterium</i> → CO<sub>2</sub> → big holes in Swiss cheese (C–i). <i>Penicillium roqueforti</i> → mould ripening → Roquefort flavour (D–iii). The standard trap is swapping C and D between “holes” and “flavour”: anchor it as bacterium = holes, fungus = flavour.',
        ],
        ans: 'A–ii, B–iv, C–i, D–iii',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> Curd is nutritionally superior to the milk from which it is prepared. <b>Reason (R):</b> Lactic Acid Bacteria increase the vitamin B<sub>12</sub> content of curd during fermentation. <b>(a)</b> Both A and R are true, and R is the correct explanation of A. <b>(b)</b> Both A and R are true, but R is not the correct explanation of A. <b>(c)</b> A is true, R is false. <b>(d)</b> A is false, R is true.',
        steps: [
          'A is true: curd does carry an added nutritional benefit over plain milk. R is true: LAB increase vitamin B<sub>12</sub>, and this increase is precisely why curd is nutritionally improved, so R correctly explains A. The tempting wrong choice is <b>(b)</b>: students accept both statements but hesitate on whether B<sub>12</sub> enrichment is the reason for the superiority. It is the textbook-stated reason, so <b>(a)</b> is correct. (A subtler examiner might add a second reason, that LAB also help check harmful microbes in the stomach, but the B<sub>12</sub> point alone validly explains the assertion.)',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      { t: 'p', html: 'Attempt before checking the answer key at the end of this part.' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the microorganism used in the bakery industry for making bread, and state the role it plays. (2 marks)',
            a: '<i>Saccharomyces cerevisiae</i> (baker’s yeast); it ferments sugars and releases CO<sub>2</sub> that leavens (raises) the dough.',
          },
          {
            q: '[CUET] <i>Saccharomyces cerevisiae</i> is commonly known as ______. (Fill in the blank with its common name.)',
            a: 'Baker’s yeast.',
          },
          {
            q: '[NEET] Which of the following is correctly matched?<br><b>(a)</b> Roquefort cheese: <i>Lactobacillus</i><br><b>(b)</b> Swiss cheese: <i>Penicillium</i><br><b>(c)</b> Curd: <i>Lactobacillus</i><br><b>(d)</b> Toddy: <i>Propionibacterium</i>',
            a: '(c)',
          },
          {
            q: '[NEET] The “puffed-up” appearance of dough used for making idli and dosa is due to the production of ______ by microbes.',
            a: 'Carbon dioxide (CO<sub>2</sub>).',
          },
          {
            q: '[NEET high-difficulty] Assertion (A): The dough used to make bread rises and becomes spongy. Reason (R): Baker’s yeast produces lactic acid that coagulates the dough proteins. Choose: <b>(a)</b> both true, R explains A; <b>(b)</b> both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
            a: '(c). A is true, but R is false: dough rises due to CO<sub>2</sub> from yeast, not lactic acid.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following correctly describes the role of <i>Lactobacillus</i> in curd formation?',
        opts: [
          { label: 'It produces CO<sub>2</sub> that sets the milk', nudge: '<b>(a)</b> confuses curd-setting (acid-driven) with leavening/Swiss-cheese holes (gas-driven). LAB make acid, not the gas that “sets” milk.' },
          { label: 'It converts lactose into lactic acid, which coagulates milk protein', nudge: null },
          { label: 'It produces ethanol that thickens the milk', nudge: '<b>(c)</b> confuses lactic acid fermentation with alcoholic fermentation (yeast); ethanol is a yeast product, and it does not thicken milk.' },
          { label: 'It grows as a mould on the surface of milk', nudge: '<b>(d)</b> <i>Lactobacillus</i> is a bacterium, not a mould; the “mould-on-food” image belongs to <i>Penicillium</i> on cheese.' },
        ],
        correct: 1,
        solution: 'LAB ferment lactose → lactic acid → pH drop → casein coagulates → curd.',
      },
      {
        t: 'mcq',
        q: 'Swiss cheese and Roquefort cheese differ in their characteristic features because:',
        opts: [
          { label: 'both are ripened by the same bacterium', nudge: '<b>(a)</b> false: different organisms, and from different kingdoms.' },
          { label: 'Swiss cheese is made by a fungus and Roquefort by a bacterium', nudge: '<b>(b)</b> is the exact reversal, the reversed distractor. It swaps the kingdoms.' },
          { label: 'Swiss cheese holes come from CO<sub>2</sub> by a bacterium, while Roquefort flavour comes from a fungus', nudge: null },
          { label: 'neither involves any microorganism', nudge: '<b>(d)</b> false: cheese is a flagship example of microbes in food.' },
        ],
        correct: 2,
        solution: 'Holes in Swiss cheese = CO<sub>2</sub> from <i>Propionibacterium sharmanii</i> (a bacterium); Roquefort’s flavour = ripening by <i>Penicillium roqueforti</i> (a fungus).',
      },
      {
        t: 'mcq',
        q: 'The leavening of dough during bread-making is brought about by:',
        opts: [
          { label: 'lactic acid produced by <i>Lactobacillus</i>', nudge: '<b>(a)</b> lactic acid sours/sets (curd), it does not leaven.' },
          { label: 'carbon dioxide produced by <i>Saccharomyces cerevisiae</i>', nudge: null },
          { label: 'ethanol produced by <i>Propionibacterium</i>', nudge: '<b>(c)</b> <i>Propionibacterium</i> belongs to Swiss cheese, not bread; and gas, not ethanol, leavens.' },
          { label: 'mould growth by <i>Penicillium</i>', nudge: '<b>(d)</b> <i>Penicillium</i> ripens cheese; it does not raise dough.' },
        ],
        correct: 1,
        solution: 'Yeast ferments sugars and releases CO<sub>2</sub>, trapped gas raises the dough.',
      },
      {
        t: 'mcq',
        q: 'Which statement about Lactic Acid Bacteria (LAB) is INCORRECT?',
        opts: [
          { label: 'They convert milk into curd', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(c)</b> are all genuine, textbook-stated roles of LAB.' },
          { label: 'They increase the vitamin B<sub>12</sub> content of curd', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(c)</b> are all genuine, textbook-stated roles of LAB.' },
          { label: 'In our stomach they help check disease-causing microbes', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(c)</b> are all genuine, textbook-stated roles of LAB.' },
          { label: 'They produce large holes in Swiss cheese by releasing CO<sub>2</sub>', nudge: null },
        ],
        correct: 3,
        solution: '(The incorrect statement.) The big holes in Swiss cheese are from <i>Propionibacterium</i>, not LAB. The trap here is that the question asks for the false statement: students who skim pick <b>(a)</b> or stop at the first true-sounding line. Read the stem: “INCORRECT.”',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Swapping the two cheeses.</b> Writing “<i>Penicillium</i> makes the holes in Swiss cheese” is a very common error here (the book’s view, not a counted figure). Bacterium → holes (Swiss); fungus → flavour (Roquefort).',
          '<b>Pitfall 2: Saying lactic acid leavens dough.</b> Acid sets curd; gas (CO<sub>2</sub>) raises dough. Two different by-products, two different products. Do not let an assertion–reason question slip “lactic acid” into the leavening of bread.',
          '<b>Pitfall 3: Forgetting the binomial precision.</b> “Yeast” or “lactobacillus” written casually loses marks. Use <i>Saccharomyces cerevisiae</i> and <i>Lactobacillus</i>, italicised, spelt correctly. NEET match-the-column items hinge on the exact name.',
          '<b>Pitfall 4: Missing the “added benefit” facts.</b> The vitamin B<sub>12</sub> increase and the checking of harmful microbes are common one-line questions and assertion–reason “reasons.” Many students remember curd = <i>Lactobacillus</i> but blank on why curd is nutritionally better than milk.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Sort every organism in this topic into one of three buckets the instant you read it: ACID (<i>Lactobacillus</i> → curd), GAS (yeast → bread; <i>Propionibacterium</i> → Swiss holes), FLAVOUR (<i>Penicillium</i> → Roquefort). In a match-the-column under time pressure, deciding the bucket first eliminates two options before you even read them fully.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Curd', note: '<i>Lactobacillus</i> (LAB) → lactose to lactic acid → coagulates casein → sets curd. Bonus: ↑ vitamin B<sub>12</sub>, checks harmful microbes.<br>Lactose →<sup><i>Lactobacillus</i></sup> Lactic acid ⇒ casein coagulates' },
          { f: 'Bread dough', note: '<i>Saccharomyces cerevisiae</i> (baker’s yeast) → CO<sub>2</sub> → dough rises (leavening). Idli/dosa batter is fermented by bacteria (CO<sub>2</sub>).' },
          { f: 'Toddy', note: 'fermented sap of palms (traditional southern Indian drink).' },
          { f: 'Swiss cheese', note: 'big holes = large CO<sub>2</sub> from <i>Propionibacterium sharmanii</i> (bacterium).' },
          { f: 'Roquefort cheese', note: 'characteristic flavour = ripened by <i>Penicillium roqueforti</i> (fungus).' },
          { f: 'Also fermented by microbes', note: 'fish, soybean, bamboo-shoots.' },
        ],
        aids: [
          '<b>Memory aid, “ACID, GAS, FLAVOUR”:</b> Acid = <i>Lactobacillus</i> (curd) · Gas = yeast/<i>Propionibacterium</i> (bread & Swiss holes) · Flavour = <i>Penicillium</i> (Roquefort). And for the two cheeses: Bacterium = Big holes; Fungus = Flavour.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 420–428 ─────────────────────────
  {
    n: '02',
    title: 'Microbes in Industrial Products',
    kalam: 'When a process moves out of the kitchen and into a steel tank the size of a room, we call it industrial microbiology.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, NEET-relevant topic: the microbe-to-product pairings (<i>Aspergillus niger</i>/citric acid, <i>Acetobacter aceti</i>/acetic acid, <i>Clostridium butylicum</i>/butyric acid, <i>Monascus purpureus</i>/statins, <i>Trichoderma polysporum</i>/cyclosporin A, <i>Streptococcus</i>/streptokinase) are asked almost every year as match-the-column and “wrong pair” questions (the book’s estimate from past papers, not official figures). CUET keeps to single-fact recall (who discovered penicillin, what statins do). CBSE Boards set 2–3 mark questions on antibiotics, enzymes in industry, or fermented beverages. This is a name-heavy topic; precision in spelling and pairing is everything.',
      },
      {
        t: 'p',
        html: 'When a process moves out of the kitchen and into a steel tank the size of a room, we call it industrial microbiology. The microbe is the same kind of tireless chemical worker as before, but now it is grown deliberately, by the trillion, in a controlled vessel called a fermentor (bioreactor), and the product is harvested on a commercial scale. The microbes do something we cannot do cheaply by ordinary chemistry: they manufacture complex, valuable molecules (alcohols, acids, life-saving drugs, industrial enzymes) quietly and at body-friendly temperatures.',
      },
      {
        t: 'p',
        html: 'Group the products into four buckets and the whole topic becomes manageable. Fermented beverages (wine, beer, whisky) are made by yeast turning sugar into alcohol. Antibiotics are chemicals one microbe makes to kill or stop another microbe, and we have borrowed them to fight our own infections. Organic acids, alcohols, and enzymes are bulk chemicals churned out by specific bacteria and fungi for food, cleaning, and clinical use. And bioactive molecules are the high-value, small-quantity drugs: the immune-suppressant that lets a transplanted kidney survive, the cholesterol-lowering statin.',
      },
      {
        t: 'p',
        html: 'The single most important word here is antibiotic. Break it apart: anti (against) + bios (life), literally “against life”, meaning against the life of the disease-causing microbe, not ours. An antibiotic is a chemical substance produced by one microorganism that, in low concentrations, kills or retards the growth of other (harmful) microorganisms. The discovery of penicillin was a turning point in medicine, helping to turn once-fatal infections into curable ones.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a giant brewery vat as a paid workforce of microbes on a 24-hour shift. You give them the raw material (sugary malt, or a nutrient broth), keep the temperature and air just right, and they hand back the one main product they are good at: yeast hands back alcohol and gas, <i>Penicillium</i> hands back penicillin, <i>Aspergillus niger</i> hands back citric acid (the tang in your soft drink and the preservative in your jam). You are not doing the chemistry; you are managing the workers and collecting the output. Industrial microbiology is, at heart, large-scale workforce management of the very small.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>Antibiotics act on bacteria (and some on fungi), not on viruses.</b> They target bacterial/fungal structures and processes. Taking an antibiotic for a viral cold does nothing useful and breeds resistance: a common conceptual trap.<br>• <b>Distillation is the dividing line for beverages.</b> Wine and beer are produced without distillation (lower alcohol); whisky, brandy, and rum are produced with distillation of the fermented broth (higher alcohol). Mixing these up costs marks.<br>• <b>Specificity of strain matters.</b> It is not “any fungus makes citric acid”; it is specifically <i>Aspergillus niger</i>. The exact organism is the examinable fact.<br>• <b>Scale changes the engineering, not the biology.</b> The microbe behaves the same; what industry adds is sterile control, aeration, and large vessels. The chemistry students must know is the small-scale principle.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      { t: 'p', html: 'Lock the product → microbe → use tables. (No SI units arise.)' },
      {
        t: 'table',
        title: 'Table 2.1: Fermented beverages and the role of yeast',
        head: ['Product', 'Microbe', 'Made with or without distillation?', 'Key fact'],
        rows: [
          ['Wine, Beer', '<i>Saccharomyces cerevisiae</i> (brewer’s yeast)', 'Without distillation', 'Lower alcohol content'],
          ['Whisky, Brandy, Rum', '<i>Saccharomyces cerevisiae</i>', 'With distillation of fermented broth', 'Higher alcohol content'],
        ],
      },
      { t: 'p', html: 'Brewer’s yeast ferments malted cereals and fruit juices to produce ethanol.' },
      {
        t: 'defgrid',
        title: 'Table 2.2: Antibiotics',
        rows: [
          { k: 'Meaning', v: '“Against life” (of disease-causing microbes); a microbe-made chemical that kills/retards other microbes' },
          { k: 'First antibiotic', v: 'Penicillin, the first antibiotic discovered (as NCERT states)' },
          { k: 'Discoverer', v: 'Alexander Fleming (from the mould <i>Penicillium notatum</i>)' },
          { k: 'Developed into a drug by', v: 'Ernest Chain and Howard Florey' },
          { k: 'Nobel Prize', v: 'Fleming, Chain, Florey: 1945' },
          { k: 'Impact', v: 'Antibiotics made once-deadly diseases (such as plague, whooping cough, diphtheria and leprosy) curable; vital in World War II' },
        ],
      },
      {
        t: 'table',
        title: 'Table 2.3: Organic acids, alcohol, enzymes',
        head: ['Product', 'Microbe', 'Type', 'Use'],
        rows: [
          ['Citric acid', '<i>Aspergillus niger</i>', 'Fungus', 'Food/beverage acidulant, preservative'],
          ['Acetic acid', '<i>Acetobacter aceti</i>', 'Bacterium', 'Vinegar'],
          ['Butyric acid', '<i>Clostridium butylicum</i>', 'Bacterium', 'Industrial chemical'],
          ['Lactic acid', '<i>Lactobacillus</i>', 'Bacterium', 'Food acid'],
          ['Ethanol', '<i>Saccharomyces cerevisiae</i>', 'Yeast', 'Industrial alcohol'],
          ['Lipase', '(microbial)', 'Enzyme', 'In detergents; removes oily stains from laundry'],
          ['Pectinase, Protease', '(microbial)', 'Enzymes', 'Clarify bottled fruit juices'],
          ['Streptokinase', '<i>Streptococcus</i> (modified by genetic engineering)', 'Enzyme', '“Clot buster”: dissolves clots in heart-attack patients'],
        ],
      },
      {
        t: 'table',
        title: 'Table 2.4: High-value bioactive molecules',
        head: ['Molecule', 'Source microbe', 'Type', 'Clinical use'],
        rows: [
          ['Cyclosporin A', '<i>Trichoderma polysporum</i> (fungus; NCERT’s name, the producer is now called <i>Tolypocladium inflatum</i>)', 'Immunosuppressant', 'Prevents rejection in organ-transplant patients'],
          ['Statins', '<i>Monascus purpureus</i> (a fungus, a mould; NCERT calls it a yeast)', 'Cholesterol-lowering agent', 'Lowers blood cholesterol'],
        ],
      },
      {
        t: 'p',
        html: '<b>Diagnostic features to burn in:</b><br>• <b>Acid-to-microbe quartet:</b> citric → <i>Aspergillus niger</i>; acetic → <i>Acetobacter aceti</i>; butyric → <i>Clostridium butylicum</i>; lactic → <i>Lactobacillus</i>.<br>• <b>Two drugs, two microbes, two jobs:</b> cyclosporin A (<i>Trichoderma polysporum</i>) = stops transplant rejection; statins (<i>Monascus purpureus</i>) = lower cholesterol.<br>• <b>Streptokinase = clot buster</b>, from <i>Streptococcus</i>, genetically modified for clinical use.<br>• <b>Enzymes in daily life:</b> lipase in detergent; pectinase/protease in juice clarification.<br>• <b>Names as NCERT prints them.</b> Keep these spellings for answers. Newer names: the cyclosporin producer is now called <i>Tolypocladium inflatum</i>; Fleming’s mould is now placed in <i>Penicillium rubens</i>; butyric acid is made by <i>Clostridium butyricum</i>; the Swiss cheese bacterium is now <i>Propionibacterium freudenreichii</i> subsp. <i>shermanii</i>.',
      },

      { t: 'part', title: 'Comparative characteristics and key processes' },
      { t: 'p', html: 'No life cycles arise; this part gives the key processes and a comparison framework.' },
      {
        t: 'proc',
        title: 'How statins lower cholesterol',
        steps: [
          '<b>Source.</b> Statins are produced by the fungus <i>Monascus purpureus</i> (NCERT calls it a yeast; it is a filamentous mould).',
          '<b>Mechanism.</b> The body makes cholesterol using a specific enzyme. Statins act by competitively inhibiting that enzyme: they resemble its normal substrate and occupy its active site, slowing cholesterol synthesis.',
          '<b>Outcome.</b> Less cholesterol is produced, so blood-cholesterol levels fall. <b>Why “competitive”:</b> the statin competes with the natural substrate for the same site, so its effect depends on its relative concentration.',
        ],
      },
      {
        t: 'proc',
        title: 'How streptokinase clears a blocked artery',
        steps: [
          '<b>Source.</b> Produced by the bacterium <i>Streptococcus</i> and modified by genetic engineering for safe clinical use.',
          '<b>Action.</b> Administered to a patient who has had a heart attack (myocardial infarction), it acts as a “clot buster”, dissolving the clot blocking the blood vessel (it activates plasminogen into plasmin, the enzyme that dissolves the clot).',
          '<b>Outcome.</b> Blood flow to the heart muscle is restored. <b>Why it matters:</b> speed of clot removal limits the damage to heart tissue.',
        ],
      },
      {
        t: 'proc',
        title: 'How fermented beverages are made (and the role of distillation)',
        steps: [
          '<b>Ferment.</b> Brewer’s yeast (<i>Saccharomyces cerevisiae</i>) ferments the sugars in malted cereals or fruit juice, producing ethanol and carbon dioxide.',
          '<b>Without distillation → wine and beer.</b> The fermented liquid is used directly; alcohol content stays low.',
          '<b>With distillation → whisky, brandy, rum.</b> The fermented broth is distilled, concentrating the alcohol to a higher level.',
        ],
      },
      {
        t: 'table',
        title: 'Comparison framework',
        head: ['Category', 'Examples', 'What the microbe provides'],
        rows: [
          ['Beverages', 'Wine, beer, whisky', 'Ethanol (fermentation)'],
          ['Antibiotics', 'Penicillin', 'A chemical that kills other microbes'],
          ['Bulk chemicals/enzymes', 'Citric acid, lipase, streptokinase', 'Industrial/clinical molecules'],
          ['Bioactive drugs', 'Cyclosporin A, statins', 'High-value medicines'],
        ],
      },
      { t: 'fig', id: 'b12-08-fig-8.4' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · Short answer, 3 marks',
        q: 'What are antibiotics? Name the first antibiotic discovered and the scientist who discovered it. State one way antibiotics improved human health.',
        steps: [
          '<b>Model answer.</b><br>• Antibiotics are chemical substances produced by microorganisms that, in low concentrations, can kill or retard the growth of other (disease-causing) microbes.<br>• The first antibiotic discovered (as NCERT states) was penicillin, found by Alexander Fleming in the mould <i>Penicillium notatum</i>.<br>• They made once-fatal diseases (such as plague, whooping cough, diphtheria, and leprosy) treatable, greatly improving human health.',
          '<b>Full-marks tip:</b> define using “produced by microbes” + “kill/retard other microbes”; do not write “chemicals that kill all germs.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · Single-correct MCQ',
        q: 'Cyclosporin A, used to prevent rejection of transplanted organs, is obtained from: <b>(a)</b> <i>Monascus purpureus</i> <b>(b)</b> <i>Trichoderma polysporum</i> <b>(c)</b> <i>Aspergillus niger</i> <b>(d)</b> <i>Streptococcus</i>',
        steps: [
          'Cyclosporin A (an immunosuppressant) is produced by the fungus <i>Trichoderma polysporum</i>. <b>(a)</b> gives statins; <b>(c)</b> gives citric acid; <b>(d)</b> gives streptokinase: all distractors built from neighbouring facts.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET · Match the column',
        q: 'Match the product in Column I with its source microbe in Column II.<br><b>Column I (Product):</b> A. Citric acid; B. Statins; C. Acetic acid; D. Cyclosporin A.<br><b>Column II (Microbe):</b> i. <i>Monascus purpureus</i>; ii. <i>Acetobacter aceti</i>; iii. <i>Aspergillus niger</i>; iv. <i>Trichoderma polysporum</i>.',
        steps: [
          '<b>Reasoning:</b> citric acid → <i>Aspergillus niger</i> (A–iii); statins → <i>Monascus purpureus</i> (B–i); acetic acid → <i>Acetobacter aceti</i> (C–ii); cyclosporin A → <i>Trichoderma polysporum</i> (D–iv). The trap is swapping the two fungi (<i>Aspergillus</i> vs <i>Monascus</i>) between citric acid and statins.',
        ],
        ans: 'A–iii, B–i, C–ii, D–iv',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> Streptokinase is used to treat patients who have suffered a heart attack. <b>Reason (R):</b> Streptokinase dissolves blood clots that block the blood vessels. <b>(a)</b> Both A and R true, R correctly explains A. <b>(b)</b> Both A and R true, R does not explain A. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'A is true: streptokinase is a clinical “clot buster” used after myocardial infarction. R is true and is the reason it is used (clot dissolution restores blood flow), so R correctly explains A. The tempting <b>(b)</b> wrongly separates the use from its mechanism, but here the mechanism is the justification.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the microbes used to produce (i) citric acid and (ii) butyric acid. (2 marks)',
            a: '(i) <i>Aspergillus niger</i>; (ii) <i>Clostridium butylicum</i>.',
          },
          {
            q: '[CUET] Wine and beer are produced ______ distillation, whereas whisky and brandy are produced ______ distillation. (Fill in both blanks.)',
            a: 'without; with.',
          },
          {
            q: '[NEET] Which enzyme is added to detergents to remove oily stains?<br><b>(a)</b> Pectinase <b>(b)</b> Protease <b>(c)</b> Lipase <b>(d)</b> Streptokinase',
            a: '(c)',
          },
          {
            q: '[NEET] Statins, used to lower blood cholesterol, act by:<br><b>(a)</b> competitively inhibiting the enzyme of cholesterol synthesis<br><b>(b)</b> dissolving cholesterol in the blood<br><b>(c)</b> preventing absorption of fat in the gut<br><b>(d)</b> increasing excretion of cholesterol',
            a: '(a)',
          },
          {
            q: '[NEET high-difficulty] A patient on long-term medication after a kidney transplant is also found to have high cholesterol. Name the microbe-derived molecule appropriate for each condition and the source organism of each. (Reasoning, 3 marks)',
            a: 'For preventing transplant rejection: cyclosporin A from <i>Trichoderma polysporum</i>; for high cholesterol: statins from <i>Monascus purpureus</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Penicillin was discovered by:',
        opts: [
          { label: 'Louis Pasteur', nudge: '<b>(a)</b> Pasteur is associated with fermentation and vaccination, not penicillin.' },
          { label: 'Alexander Fleming', nudge: null },
          { label: 'Robert Koch', nudge: '<b>(c)</b> Koch: germ theory/TB bacterium, a tempting “famous microbiologist” distractor.' },
          { label: 'Edward Jenner', nudge: '<b>(d)</b> Jenner: smallpox vaccine, unrelated to antibiotics.' },
        ],
        correct: 1,
        solution: 'Fleming observed <i>Penicillium notatum</i> inhibiting bacterial growth.',
      },
      {
        t: 'mcq',
        q: 'Which pair is INCORRECTLY matched?',
        opts: [
          { label: '<i>Aspergillus niger</i>: citric acid', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all correct.' },
          { label: '<i>Acetobacter aceti</i>: acetic acid', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all correct.' },
          { label: '<i>Clostridium butylicum</i>: lactic acid', nudge: null },
          { label: '<i>Saccharomyces cerevisiae</i>: ethanol', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all correct.' },
        ],
        correct: 2,
        solution: '(The wrong pair.) <i>Clostridium butylicum</i> produces butyric acid, not lactic acid (lactic acid is from <i>Lactobacillus</i>). The stem asks for the incorrect pairing: read carefully.',
      },
      {
        t: 'mcq',
        q: 'Pectinases and proteases are used industrially to:',
        opts: [
          { label: 'ferment malted cereals into alcohol', nudge: '<b>(a)</b> is yeast fermentation.' },
          { label: 'clarify bottled fruit juices', nudge: null },
          { label: 'remove oily stains in laundry', nudge: '<b>(c)</b> is lipase (detergents).' },
          { label: 'dissolve blood clots', nudge: '<b>(d)</b> is streptokinase.' },
        ],
        correct: 1,
        solution: 'They break down pectins/proteins that make juice cloudy.',
      },
      {
        t: 'mcq',
        q: 'Antibiotics are generally NOT effective against:',
        opts: [
          { label: 'Gram-positive bacteria', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all bacteria on which a suitable antibiotic can act.' },
          { label: 'Gram-negative bacteria', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all bacteria on which a suitable antibiotic can act.' },
          { label: 'viruses causing the common cold', nudge: null },
          { label: 'a sensitive <i>Streptococcus</i>', nudge: '<b>(a)</b>, <b>(b)</b>, and <b>(d)</b> are all bacteria on which a suitable antibiotic can act.' },
        ],
        correct: 2,
        solution: 'Antibiotics target microbial (mostly bacterial/fungal) structures; viruses are not affected, so they are useless for a viral cold. The other three options are bacteria, which a suitable antibiotic can act on.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Swapping the two fungi.</b> <i>Aspergillus niger</i> = citric acid; <i>Monascus purpureus</i> = statins. Do not interchange.',
          '<b>Pitfall 2: Distillation confusion.</b> Wine and beer = without distillation; whisky/brandy/rum = with. A mark if memorised, a mark lost if guessed.',
          '<b>Pitfall 3: “Antibiotics kill viruses.”</b> They do not. Antibiotics act on microbes (chiefly bacteria/fungi); viral illnesses need other measures.',
          '<b>Pitfall 4: Forgetting the enzyme jobs.</b> Lipase → detergents; pectinase/protease → juice clarification; streptokinase → clot buster. These three enzyme uses are worth learning.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Build a one-line “factory ledger” in your memory: Acid-makers (<i>niger</i>=citric, <i>aceti</i>=acetic, <i>butylicum</i>=butyric, <i>Lactobacillus</i>=lactic), Drug-makers (<i>Trichoderma</i>=cyclosporin, <i>Monascus</i>=statins, <i>Streptococcus</i>=streptokinase), Brewer (<i>Saccharomyces</i>=ethanol). In a match-the-column, ledger first, then map: you will finish in seconds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Beverages', note: '<i>Saccharomyces cerevisiae</i> ferments malt/juice → ethanol. Wine, beer = without distillation; whisky, brandy, rum = with distillation.' },
          { f: 'Antibiotic', note: 'microbe-made chemical that kills/retards other microbes. Penicillin = first antibiotic discovered (as NCERT states); Fleming discovered (from <i>Penicillium notatum</i>); Chain & Florey developed it; Nobel 1945.' },
          { f: 'Organic acids', note: '<i>Aspergillus niger</i> → citric; <i>Acetobacter aceti</i> → acetic; <i>Clostridium butylicum</i> → butyric; <i>Lactobacillus</i> → lactic.' },
          { f: 'Enzymes', note: 'lipase → detergents; pectinase/protease → juice clarification; streptokinase (<i>Streptococcus</i>, GM) → clot buster.' },
          { f: 'Bioactive drugs', note: 'cyclosporin A (<i>Trichoderma polysporum</i>) → immunosuppressant for transplants; statins (<i>Monascus purpureus</i>) → lower cholesterol (competitively inhibit the cholesterol-synthesis enzyme).' },
        ],
        aids: [
          '<b>Memory aids:</b> “<i>niger</i> is the nice guy” = citric acid (the friendly food acid). “<i>Monascus</i> Minimises cholesterol” = statins. Transplant → <i>Trichoderma</i> (cyclosporin); Clot → <i>Streptococcus</i> (streptokinase). Beer & wine Bypass the still; whisky Works the still.',
        ],
      },
    ],
  },
];
