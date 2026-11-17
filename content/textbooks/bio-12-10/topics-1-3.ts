import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 10 (Biotechnology and its Applications), Topics 01 to 03:
 * pp. 535 to 555 of the Class 12 Biology Master Reference, word for word. The
 * chapter title page and contents (p. 534 and the top of p. 535) are not copied.
 * Each topic is cut at the book's eight sections; the numbers of the sections and
 * of the "1.3.1 A." sub-headings are dropped (the letters A to D stay), and each
 * sub-heading is a bold line. Numbered "Step N" runs are paragraphs with the
 * book's "Step N" labels, so a step is not numbered twice. Figures 10.1 (caption
 * p. 537, drawn p. 538) and 10.2 (caption p. 539, drawn p. 540) are in Topic 01,
 * 10.3 (caption p. 545, drawn p. 546) in Topic 02, 10.4 (caption p. 552, drawn
 * p. 553) in Topic 03; these pages hold no unnumbered drawing. Emphasis italics
 * are dropped; italics are for scientific names and gene symbols. The book's em
 * dashes are written as colons, commas or brackets. Frequency claims in the Exam
 * Relevance boxes are labelled.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 535–542 ─────────────────────────
  {
    n: '01',
    title: 'Biotechnological Applications in Agriculture',
    kalam:
      'That is exactly the promise of biotechnology in agriculture: instead of attacking pests from the outside with a chemical spray, we engineer the crop from the inside.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked topic (the book’s estimate from past papers, not official figures). CBSE Boards lifts 1–3 mark short-answer and reasoning questions straight from here (Bt toxin specificity, why the toxin spares the bacterium, the RNAi strategy against <i>Meloidogyne</i>). NEET asks 1–2 questions every single year (the book’s estimate from past papers, not official figures): the alkaline-gut activation step and the “sense + antisense → dsRNA” RNAi logic are asked often. CUET leans on definitions and match-the-column. JEE does not test Biology, so this topic is absent there.',
      },
      {
        t: 'p',
        html: 'Imagine you run a cotton farm in Vidarbha. Every season the same villain shows up, the cotton bollworm, chewing through your bolls and forcing you to spray expensive chemical pesticide again and again. The pesticide is costly, it drifts onto the people spraying it, and it kills harmless insects too. Now imagine if the cotton plant could simply manufacture its own pest-killer inside its tissues: a substance so specific that it harms only the bollworm and a few close relatives, and leaves most other insects, birds and you untouched. That is exactly the promise of biotechnology in agriculture: instead of attacking pests from the outside with a chemical spray, we engineer the crop from the inside. There are two beautifully different ways biotechnology does this, and the whole topic is really these two ideas:',
      },
      {
        t: 'p',
        html: 'The first idea is to make the plant a tiny toxin factory. We borrow a gene from a soil bacterium, <i>Bacillus thuringiensis</i> (Bt for short), that knows how to build a protein lethal to certain insects. We splice that gene into the cotton plant. The plant now produces the toxin in its own cells. When the bollworm bites the plant, it eats the toxin and dies, but only that kind of insect, and only after it has eaten it.',
      },
      {
        t: 'p',
        html: 'The second idea is sneakier: silence the pest’s own genes. Instead of poisoning the pest, we trick the plant into producing a piece of RNA that jams a gene the pest cannot live without. This is RNA interference (RNAi). A root-knot nematode called <i>Meloidogyne incognita</i> that infests tobacco roots can be defeated this way: the transgenic tobacco quietly switches off a gene the worm needs, and the worm cannot survive.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The Bt strategy is like coating your house with a paint that only termites find poisonous: they bite, they die, everyone else is fine. The RNAi strategy is like slipping the burglar a note in his own handwriting that says “do not open the safe”: you are using his own instructions against him so quietly that he never realises he has been sabotaged.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Two things students must internalise here. First, Bt cotton is not “resistant to all pests” and certainly not “resistant to all pesticides”: it is resistant only to certain taxa (in Bt cotton, essentially the lepidopteran bollworms that attack the crop). The Bt cotton in cultivation carries <i>cryIAc</i> and <i>cryIIAb</i>, which act against lepidopterans. A pest from outside that list can still attack it, exactly the way a smallpox vaccine protects you against smallpox but does nothing against cholera. Second, the Bt toxin is only lethal after activation in the insect gut: in the plant, and inside the bacterium itself, it sits harmlessly as an inactive precursor. The whole safety of the system rests on that conditional activation.',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term / Construct', 'What it is'],
        rows: [
          [
            '<i>Bacillus thuringiensis</i> (Bt)',
            'A soil <b>bacterium</b> (not a fungus) that, during sporulation, produces crystalline protein toxins lethal to specific insect larvae.',
          ],
          [
            'Bt toxin / Cry protein / δ-endotoxin',
            'The insecticidal <b>protein</b> (not a polysaccharide) encoded by <i>cry</i> genes. It exists as crystals inside the bacterium.',
          ],
          [
            '<i>cry</i> genes',
            'The bacterial genes that code for the crystal (Cry) proteins. Different <i>cry</i> genes target different insect groups.',
          ],
          [
            'Protoxin',
            'The <b>inactive</b> form of the toxin (the crystal protein as eaten). Stays inactive until the gut activates it.',
          ],
          [
            'Active toxin',
            'The form produced after the protoxin is solubilised and processed in the insect gut; this is what kills the insect.',
          ],
          [
            'Bt cotton',
            'A genetically modified (GM) cotton carrying <i>cry</i> gene(s) from Bt, so the plant itself produces the protoxin in its tissues.',
          ],
          [
            'RNA interference (RNAi)',
            'A natural cellular-defence mechanism in all eukaryotes that silences a specific mRNA using a complementary double-stranded RNA (dsRNA).',
          ],
          [
            'dsRNA',
            'Double-stranded RNA formed when complementary sense and antisense strands pair; it is the trigger molecule for RNAi.',
          ],
          [
            '<i>Meloidogyne incognita</i>',
            'A root-knot <b>nematode</b> that parasitises tobacco roots; the target pest defeated by the RNAi strategy.',
          ],
          [
            '<i>Agrobacterium</i> vector',
            'The carrier used to introduce the nematode-specific RNAi construct into the host plant.',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Common cry genes and their insect targets',
        head: ['cry gene', 'Controls'],
        rows: [
          ['<i>cryIAc</i>, <i>cryIIAb</i>', 'Cotton bollworms'],
          ['<i>cryIAb</i>', 'Corn borer'],
        ],
      },
      {
        t: 'table',
        title: 'Protoxin vs active toxin: the key contrast students must lock',
        head: ['Feature', 'Protoxin', 'Active toxin'],
        rows: [
          ['State', 'Inactive crystal', 'Activated, soluble'],
          ['Location', 'In bacterium / in plant tissue / as eaten', 'In the insect’s midgut'],
          ['Effect', 'Harmless', 'Lethal: forms pores in gut cells'],
          ['Trigger for conversion', 'None', 'Alkaline pH of the insect gut'],
        ],
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      {
        t: 'p',
        html: '<b>A. How the Bt toxin kills, and why it spares the plant and the bacterium</b>',
      },
      {
        t: 'p',
        html: '<b>Step 1: The bacterium makes a safe crystal.</b> During its growth, <i>Bacillus thuringiensis</i> synthesises the toxin as inactive protoxin crystals. Because it is inactive, the toxin does not kill the bacterium that produced it: a fact students are often asked to explain, not just state.<br><b>Step 2: We move the gene into the crop.</b> The relevant <i>cry</i> gene is isolated from Bt and incorporated into the cotton genome. The transgenic plant now expresses the protoxin in its own tissues, still in the harmless inactive form, so the plant is unharmed.<br><b>Step 3: The insect eats the protoxin.</b> A bollworm larva feeding on the Bt cotton ingests the protoxin crystals along with the plant tissue.<br><b>Step 4: The alkaline gut activates it.</b> The midgut of the susceptible larva has an alkaline pH. This alkaline environment solubilises the crystals, converting the inactive protoxin into the active toxin. This single conditional step is the safety switch of the whole system: no alkaline gut, no activation.<br><b>Step 5: Pores, then death.</b> The activated toxin binds to the surface of the epithelial cells lining the midgut and creates pores in them. The cells swell, lyse, the gut is destroyed, and the insect dies.',
      },
      {
        t: 'p',
        html: '<b>Why the specificity?</b> Only insects whose gut chemistry and cell-surface receptors match the toxin are killed: hence Bt cotton is effective only against certain taxa (bollworm and the like), not against every pest, and the Cry proteins used in Bt cotton are not known to be toxic to mammals and birds, and spare most non-target insects.',
      },
      { t: 'fig', id: 'b12-10-fig-10.1' },
      { t: 'p', html: '<b>B. How RNA interference protects against the nematode</b>' },
      {
        t: 'p',
        html: '<b>Step 1: Identify the enemy’s essential gene.</b> <i>Meloidogyne incognita</i> infests tobacco roots and depends on certain of its own genes (and their mRNAs) to survive inside the host.<br><b>Step 2: Engineer the plant to fight back with RNA.</b> Using an <i>Agrobacterium</i>-based vector, nematode-specific genes are introduced into the tobacco plant. The construct is designed so that the host cell produces both sense and antisense RNA for the chosen nematode gene.<br><b>Step 3: The two strands pair into dsRNA.</b> Being complementary to each other, the sense and antisense RNAs base-pair and form a double-stranded RNA (dsRNA) molecule inside the plant cell.<br><b>Step 4: Silencing.</b> This dsRNA initiates RNAi: it leads to the silencing of the corresponding nematode mRNA, preventing its translation into the protein the worm needs.<br><b>Step 5: The parasite cannot survive.</b> A nematode feeding on this transgenic tobacco takes up the interfering RNA. With its essential mRNA silenced, the parasite cannot survive in the transgenic host, and the plant is protected.',
      },
      {
        t: 'p',
        html: '<b>Where does RNAi come from in nature?</b> RNAi is a normal cellular-defence method in all eukaryotes. The natural source of the complementary RNA can be infection by RNA-genome viruses or by mobile genetic elements (transposons) that replicate via an RNA intermediate: the cell evolved RNAi precisely to silence such invaders. The agricultural strategy simply borrows this ancient defence and points it at a pest.',
      },
      { t: 'fig', id: 'b12-10-fig-10.2' },
      { t: 'p', html: '<b>C. The broader value of GM crops</b>' },
      {
        t: 'p',
        html: 'GM technology in agriculture has been used to make crops more tolerant of abiotic stresses (cold, drought, salt, heat), to reduce reliance on chemical pesticides (pest-resistant crops like Bt cotton), to cut post-harvest losses, to use soil minerals more efficiently, and to enhance nutritional value: the classic example being Golden Rice, a transgenic rice engineered to be rich in β-carotene (pro-vitamin A) to combat vitamin-A deficiency.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Bt cotton produces a toxin that kills the bollworm, yet the toxin does not kill the <i>Bacillus thuringiensis</i> bacterium that originally produced it, nor does it harm the cotton plant. Explain.',
        steps: [
          '<b>Model answer.</b> The toxin is synthesised and stored as an inactive protoxin (a crystalline protein), not as an active toxin. In this inactive state it is harmless, so it neither kills the bacterium that makes it nor the cotton plant that has been engineered to produce it. The protoxin is converted to the active, lethal toxin only in the alkaline pH of the insect’s midgut, which solubilises the crystal. Since neither the bacterium nor the plant provides that activating alkaline-gut environment, the toxin stays inactive in them. (Key marks: inactive protoxin; activation requires alkaline insect gut.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b> Match each item in Column I with the correct description in Column II.<br>Column I: A. <i>cryIAb</i>; B. <i>Bacillus thuringiensis</i>; C. <i>Meloidogyne incognita</i>; D. RNAi<br>Column II: 1. Soil bacterium source of the toxin gene; 2. Controls corn borer; 3. dsRNA-mediated mRNA silencing; 4. Root-knot nematode of tobacco',
        steps: [
          '<b>Reasoning:</b> <i>cryIAb</i> is the bacterial (Bt) gene specific to corn borer; <i>B. thuringiensis</i> is the bacterial source; <i>Meloidogyne incognita</i> is the tobacco root-knot nematode; RNAi works by dsRNA silencing a target mRNA.',
        ],
        ans: 'A–2, B–1, C–4, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> Assertion (A): Bt cotton is resistant only to certain specific taxa of pests. Reason (R): The Bt toxin is activated only in the alkaline gut of susceptible insects and binds receptors on their midgut epithelial cells.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is NOT the correct explanation of A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Both statements are true, and R genuinely explains A: because activation and binding depend on a specific gut chemistry and matching cell-surface receptors, only insects with that physiology are killed, which is precisely why resistance is limited to certain taxa.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Consider the RNAi strategy used to protect tobacco from <i>Meloidogyne incognita</i> and mark the statements that are correct:<br>(i) The host plant is engineered to produce both sense and antisense RNA of a nematode gene.<br>(ii) The two RNAs form a dsRNA that silences the nematode’s mRNA.<br>(iii) RNAi here kills the nematode by producing a pore-forming toxin in the plant.<br>(iv) RNAi is a defence mechanism found only in plants.<br><b>(a)</b> (i) and (ii)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> (ii) and (iv)<br><b>(d)</b> all four',
        steps: [
          '(i) and (ii) are the correct description of the strategy. (iii) is wrong: it confuses RNAi with the Bt mechanism; RNAi silences a gene, it does not make a pore-forming toxin. (iv) is wrong: RNAi operates in all eukaryotes, not only plants. The trap rewards students who can keep the two distinct strategies (toxin vs gene-silencing) cleanly separated.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the bacterium that is the source of the <i>cry</i> genes and state why its toxin is described as a “protoxin” inside the bacterium.',
            a: '<i>Bacillus thuringiensis</i>; it is stored as an inactive crystal protein, hence “protoxin”, harmless until activated.',
          },
          {
            q: '[CUET] State whether each is true or false: (i) Bt cotton is resistant to all pesticides. (ii) The Bt protoxin is activated by acidic stomach pH.',
            a: '(i) False: only certain taxa of pests; (ii) False: alkaline gut pH, not acidic.',
          },
          {
            q: '[NEET] Which pair of <i>cry</i> genes is used to control cotton bollworms, and which single <i>cry</i> gene controls corn borer?',
            a: 'Bollworms: <i>cryIAc</i> and <i>cryIIAb</i>; corn borer: <i>cryIAb</i>.',
          },
          {
            q: '[NEET] In the RNAi-based protection of tobacco, what is the molecular species that actually triggers the silencing, and how is it formed?',
            a: 'Double-stranded RNA (dsRNA); formed by pairing of complementary sense and antisense RNAs produced in the host.',
          },
          {
            q: '[NEET high-difficulty] A student claims “Golden Rice is pest-resistant transgenic rice.” Identify the error and state what Golden Rice is actually engineered for.',
            a: 'Golden Rice is not pest-resistant; it is engineered to be rich in β-carotene (pro-vitamin A) to address vitamin-A deficiency.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The Bt protoxin is converted into active toxin in the bollworm because of the:',
        opts: [
          {
            label: 'acidic pH of the insect gut',
            nudge:
              '<b>(a)</b> Acidic pH is a classic distractor: students confuse the insect midgut with the human acidic stomach.',
          },
          { label: 'alkaline pH of the insect gut', nudge: null },
          {
            label: 'action of gut microorganisms',
            nudge:
              '<b>(c)</b> Tempting because microbes activate many things, but here it is purely the pH.',
          },
          {
            label: 'high body temperature of the insect',
            nudge: '<b>(d)</b> Temperature plays no role in the conversion.',
          },
        ],
        correct: 1,
        solution: 'The alkaline midgut solubilises the crystal protoxin into active toxin.',
      },
      {
        t: 'mcq',
        q: 'Bt cotton is not:',
        opts: [
          {
            label: 'a GM plant',
            nudge: '<b>(a)</b> Bt cotton is a GM plant, so this is true of it; the question asks what it is not.',
          },
          {
            label: 'insect-resistant',
            nudge: '<b>(b)</b> It is insect-resistant, so this is true of it; the question asks what it is not.',
          },
          {
            label: 'a system expressing a bacterial gene',
            nudge: '<b>(c)</b> It expresses the bacterial <i>cry</i> gene, so this is true of it; the question asks what it is not.',
          },
          { label: 'resistant to all pesticides', nudge: null },
        ],
        correct: 3,
        solution:
          'Bt cotton is genuinely GM, insect-resistant, and expresses a bacterial gene, so (a), (b), (c) are all true of Bt cotton; the false-of-Bt-cotton statement is (d), since it is resistant only to certain pests, not to all pesticides. The trick is the word “not”: students who skim pick (a).',
      },
      {
        t: 'mcq',
        q: 'In the RNAi strategy against the tobacco nematode, gene silencing is achieved using:',
        opts: [
          { label: 'single-stranded DNA', nudge: '<b>(a)</b> and <b>(b)</b> DNA does not mediate RNAi.' },
          { label: 'double-stranded DNA', nudge: '<b>(a)</b> and <b>(b)</b> DNA does not mediate RNAi.' },
          { label: 'double-stranded RNA', nudge: null },
          {
            label: 'single-stranded RNA',
            nudge:
              '<b>(d)</b> ssRNA is the most common trap: students remember “antisense RNA” and forget that it must pair with sense RNA to form the double strand.',
          },
        ],
        correct: 2,
        solution: 'The complementary sense + antisense strands form dsRNA, which triggers RNAi.',
      },
      {
        t: 'mcq',
        q: 'A novel strategy to prevent <i>Meloidogyne incognita</i> infestation in tobacco was based on:',
        opts: [
          {
            label: 'DNA interference',
            nudge: '<b>(a)</b> “DNA interference” is a made-up distractor that sounds plausible.',
          },
          { label: 'RNA interference', nudge: null },
          {
            label: 'producing a Bt-type pore-forming toxin',
            nudge:
              '<b>(c)</b> Mixes up the two distinct strategies: the nematode case is silencing, not toxin production.',
          },
          {
            label: 'spraying chemical nematicide',
            nudge: '<b>(d)</b> The whole point was to avoid external chemical control.',
          },
        ],
        correct: 1,
        solution: 'The nematode was controlled by RNAi-mediated silencing of its essential mRNA.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Bt toxin kills the bacterium / harms the plant.”</b> It does not, because inside both it stays as inactive protoxin. Always anchor your answer on inactive protoxin → activated only in the alkaline insect gut.',
          '<b>Pitfall 2: Wrong gut pH.</b> Many write “acidic gut.” The activating environment is alkaline. Memorise: Alkaline → Activate.',
          '<b>Pitfall 3: Confusing the two strategies.</b> Bt = the plant makes an inactive protoxin that becomes a pore-forming toxin in the insect gut; RNAi = the plant silences a pest gene. Do not let one mechanism leak into the other (a frequent trap).',
          '<b>Pitfall 4: Source-organism and toxin-nature errors.</b> <i>Bacillus thuringiensis</i> is a bacterium, never a fungus; the Bt toxin is a protein, never a polysaccharide.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For any “Bt mechanism” question, run the fixed 5-word chain in your head: crystal → eaten → alkaline → pores → dies. If a statement breaks that chain (acidic gut, toxin active in plant, kills all pests), it is wrong. For RNAi, the chain is sense + antisense → dsRNA → mRNA silenced → pest dies.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<i>Bacillus thuringiensis</i> (a bacterium) makes the Bt toxin (a protein) encoded by <i>cry</i> genes, stored as inactive protoxin crystals.',
            note: '',
          },
          {
            f: 'Activation',
            note: 'ingested protoxin → alkaline insect gut solubilises it → active toxin → binds midgut epithelial cells → pores → lysis → insect dies.',
          },
          {
            f: 'Specificity',
            note: 'Bt cotton resists only certain taxa (bollworm etc.), not all pests, not all pesticides.',
          },
          {
            f: '<i>cry</i> genes',
            note: '<i>cryIAc</i> + <i>cryIIAb</i> → cotton bollworms; <i>cryIAb</i> → corn borer.',
          },
          {
            f: 'RNAi (in all eukaryotes)',
            note: 'host makes sense + antisense RNA → dsRNA → silences nematode mRNA → <i>Meloidogyne incognita</i> cannot survive in transgenic tobacco (delivered via <i>Agrobacterium</i>).',
          },
          {
            f: 'GM crop benefits',
            note: 'abiotic-stress tolerance, less pesticide, less post-harvest loss, efficient mineral use, better nutrition (Golden Rice → β-carotene).',
          },
        ],
        aids: [
          'Mnemonics: “Alkaline → Activate” (Bt gut step); “crystal-eaten-alkaline-pores-dies” (Bt chain); “sense + antisense = silence” (RNAi).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 543–549 ─────────────────────────
  {
    n: '02',
    title: 'Genetically Engineered Insulin (Humulin)',
    kalam: 'The product is called humulin, literally human + insulin.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Asked almost every year (the book’s estimate from past papers, not official figures). NEET often asks about the proinsulin → C-peptide-removal step and the disulphide-bridge structure of insulin; the “what was the main challenge in making insulin by rDNA?” question is asked often. CBSE Boards uses it for 2–3 mark answers (why animal insulin caused problems; how humulin is made). CUET asks definitions and the Eli Lilly, 1983 and <i>E. coli</i> facts. JEE does not test Biology.',
      },
      {
        t: 'p',
        html: 'Picture a diabetic patient in the 1970s. Their own pancreas cannot make enough insulin, so blood sugar climbs dangerously. The only fix back then was to inject insulin extracted from the pancreas of slaughtered cattle and pigs. It worked, but it came with two ugly problems. First, an animal pancreas makes only a tiny amount of insulin, so keeping the world supplied meant slaughtering a staggering number of animals. Second, pig and cow insulin is almost like ours but not identical, so to some patients it looked like a “foreign protein” and triggered allergic or immune reactions.',
      },
      {
        t: 'p',
        html: 'So biologists asked a bold question: instead of harvesting insulin from animals, why not teach a bacterium to make human insulin for us? That is exactly what genetic engineering achieved. We take the human instructions for insulin, hand them to the workhorse bacterium <i>Escherichia coli</i>, and let an army of bacteria churn out human insulin in a fermentation tank. The product is called humulin, literally human + insulin.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Animal insulin is like getting a spare house-key cut by copying a neighbour’s key: close, but it sticks in the lock and sometimes the alarm goes off. Humulin is like cutting the key from your own original: a perfect fit, every time, and you can cut as many as you need without bothering anyone’s pancreas.',
      },
      {
        t: 'p',
        html: 'It is worth feeling the scale of the old problem too. A hormone like insulin is present in the pancreas in only minuscule amounts, so meeting the needs of millions of diabetic patients from animal pancreases meant slaughtering animals on an enormous, unsustainable scale, and even then the supply was uncertain and the product imperfect. A single fermentation tank of engineered bacteria, by contrast, can be scaled up almost without limit. So the recombinant route did not merely make a cleaner insulin; it made insulin abundant: two distinct wins, safety and scale, that you should be able to name separately in an answer.',
      },
      {
        t: 'p',
        html: 'But there is a twist that makes insulin special and exam-worthy. Insulin is not a single chain. The working hormone is two short polypeptide chains, A and B, clipped together by disulphide bridges. And in the human body it is not born in that finished form: it starts life as a longer precursor called proinsulin, carrying an extra middle piece (the C-peptide) that has to be snipped out before the hormone becomes active. This two-chain, must-be-assembled nature is the whole reason insulin was a hard molecule to manufacture by rDNA technology.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Two cautions students must carry. First, insulin cannot be given as a tablet: it is a protein, so the digestive enzymes in the gut would chop it up before it ever reached the blood; that is why it is injected. Second, and this is a point students often confuse, the natural maturation route (remove C-peptide from proinsulin) is not the route Eli Lilly used in 1983, the one NCERT describes. That process made the A and B chains separately in bacteria and then joined them; it did not go through proinsulin. (Later industrial processes made proinsulin and cut out the C-peptide; the exam question follows the 1983 account.) Keep these two stories apart and you will never lose a mark here.',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term / Construct', 'What it is'],
        rows: [
          [
            'Insulin',
            'A peptide hormone from the pancreas that lowers blood glucose; its deficiency causes diabetes.',
          ],
          [
            'Chain A & Chain B',
            'The two short polypeptide chains that make up the mature insulin molecule.',
          ],
          [
            'Disulphide bridges',
            'The covalent –S–S– bonds linking chain A to chain B (and stabilising the molecule).',
          ],
          [
            'Proinsulin',
            'The single-chain pro-hormone precursor of insulin made in the human body; contains A, C and B regions.',
          ],
          [
            'C-peptide',
            'The extra connecting stretch present in proinsulin but absent in mature insulin; removed during maturation.',
          ],
          ['Humulin', 'Human insulin produced by recombinant DNA technology (human + insulin).'],
          ['Eli Lilly', 'The American company that first prepared humulin in 1983.'],
          [
            '<i>Escherichia coli</i>',
            'The host bacterium whose plasmids were used to express the insulin chains.',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Two ways to think about “making insulin”: keep them separate',
        head: ['Feature', 'Natural maturation (in the body)', 'Eli Lilly rDNA method (in industry)'],
        rows: [
          ['Starting material', 'Single-chain proinsulin', 'Two separate DNA sequences (for A and B)'],
          [
            'Key event',
            'C-peptide removed to free A and B',
            'A and B made separately in <i>E. coli</i>',
          ],
          [
            'How A & B end up joined',
            'Already connected within proinsulin, retained via disulphide after C-peptide excision',
            'Joined by creating disulphide bonds after extraction',
          ],
          ['C-peptide involved?', 'Yes (then removed)', 'No proinsulin/C-peptide step in the 1983 process'],
        ],
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>A. Why insulin was hard to manufacture: the structural problem</b>' },
      {
        t: 'p',
        html: 'Mature insulin is two chains (A and B) held together by disulphide bridges. In the human body this is solved elegantly: the cell first makes one long chain, proinsulin, in which the A region and B region are connected through the middle C-peptide. The folded proinsulin forms the correct disulphide bridges, and then the C-peptide is enzymatically removed, leaving behind the A and B chains correctly bonded: a finished, active insulin molecule. The C-peptide’s job is essentially to act as a temporary “alignment guide” so the two chains fold and bond in the right register; once that is done, it is discarded and is not part of mature insulin.',
      },
      {
        t: 'p',
        html: 'For a factory using bacteria, this two-chain assembly was precisely the main challenge. A bacterium will happily translate a gene into a protein, but getting it to deliver insulin assembled into its correct mature, double-chain form was the hard part: you cannot simply express “insulin” and expect the two chains to snap together perfectly.',
      },
      { t: 'p', html: '<b>B. How Eli Lilly actually made humulin (1983)</b>' },
      {
        t: 'p',
        html: 'The clever workaround was to sidestep proinsulin entirely and build the two chains separately, then weld them together chemically.',
      },
      {
        t: 'p',
        html: '<b>Step 1: Synthesise the genes.</b> Two DNA sequences were prepared artificially, one coding for chain A and one for chain B of human insulin.<br><b>Step 2: Insert into vectors.</b> Each DNA sequence was introduced into plasmids of <i>E. coli</i>.<br><b>Step 3: Express separately.</b> The recombinant <i>E. coli</i> were cultured in bioreactors, where they produced chain A and chain B as separate polypeptides.<br><b>Step 4: Extract and purify.</b> The recombinant chains were extracted from the bacteria and purified.<br><b>Step 5: Assemble.</b> The purified A and B chains were combined by creating disulphide bonds between them, yielding complete, mature human insulin (humulin).',
      },
      {
        t: 'p',
        html: 'Because the product is structurally identical to human insulin, it does not carry the foreign-protein allergy risk of animal insulin, and because bacteria multiply endlessly in a tank, supply is no longer limited by slaughtering animals. (For scale, NCERT’s figures: around 30 recombinant therapeutics are approved for human use worldwide, of which about 12 are marketed in India, humulin being the flagship example; the numbers have grown since.)',
      },
      { t: 'fig', id: 'b12-10-fig-10.3' },
      { t: 'p', html: '<b>C. Insulin’s wider family: other recombinant therapeutics</b>' },
      {
        t: 'p',
        html: 'Humulin was the trailblazer, but the same logic (clone a human gene into a microbe or cultured cell and harvest the protein) now stocks a whole pharmacy of recombinant therapeutics. A few that share the exam spotlight with insulin:<br>• <b>Human growth hormone (hGH):</b> the hGH gene is cloned into <i>E. coli</i> to treat dwarfism (growth-hormone deficiency). Before this, hGH could only be scraped from human cadaver pituitaries (scarce and unsafe), so the recombinant version was a genuine breakthrough.<br>• <b>Tissue plasminogen activator (TPA):</b> a clot-dissolving protein produced by recombinant mammalian cells, used to break up the clots behind heart attacks and strokes.<br>• <b>Interferon:</b> an antiviral protein produced in <i>E. coli</i>, used against certain viral infections, some cancers and skin diseases.<br>• <b>α-1-antitrypsin (AAT):</b> normally inhibits protease enzymes such as elastase; when a mutation cripples AAT, unchecked elastase digests the elastic tissue of the lung alveoli, causing emphysema, so AAT, for example made in transgenic sheep, is used to treat it.<br>The common thread across all of them: each replaces a human protein the body cannot make in sufficient quantity or quality, manufactured safely and at scale by an engineered host cell. Insulin is simply the most famous member of this family, and the one examiners return to most often, so master it first and the rest fall into place.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'State two disadvantages of obtaining insulin from the pancreas of slaughtered animals, and explain how recombinant DNA technology overcame them.',
        steps: [
          '<b>Model answer.</b> Disadvantages: (i) animal pancreas yields only a very small quantity of insulin, so large numbers of animals must be slaughtered to meet demand; (ii) animal insulin is slightly different from human insulin and can act as a foreign protein, causing allergy/immune reactions in some patients. rDNA technology overcame both: human insulin (humulin) is produced in <i>E. coli</i> in unlimited quantity by fermentation (no animals needed), and being identical to human insulin, it does not trigger the foreign-protein reaction. (Marks: quantity limitation; allergy; humulin/<i>E. coli</i> production.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Fill in / match.</b> Match Column I with Column II.<br>Column I: A. Humulin first prepared; B. Host organism; C. C-peptide; D. Disulphide bridges<br>Column II: 1. Removed during proinsulin maturation; 2. Eli Lilly, 1983; 3. Link chains A and B; 4. <i>Escherichia coli</i>',
        steps: [],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> Assertion (A): Insulin cannot be administered orally to diabetic patients. Reason (R): Insulin is a peptide hormone that would be digested by gut enzymes before absorption.<br><b>(a)</b> Both A and R true, R correctly explains A<br><b>(b)</b> Both A and R true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Both are true and R is the correct explanation: being a protein, oral insulin would be broken down by digestive proteases, so it must be injected.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Regarding the production of humulin by Eli Lilly, choose the correct statements:<br>(i) Chains A and B were synthesised as separate polypeptides in <i>E. coli</i>.<br>(ii) Proinsulin was produced and its C-peptide later removed.<br>(iii) The two chains were finally joined by disulphide bonds.<br>(iv) The main challenge was getting insulin assembled into a mature form.<br><b>(a)</b> (i), (iii) and (iv)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> all four<br><b>(d)</b> (ii) and (iv) only',
        steps: [
          '(i), (iii) and (iv) describe the Eli Lilly route accurately. (ii) is the trap: it describes the natural maturation route, not the industrial method, which never made proinsulin. Students who memorise “C-peptide removed” as the production mechanism fall for (b) or (c).',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Expand “humulin” and name the organism and company involved in its first production.',
            a: 'Humulin = human + insulin; organism <i>E. coli</i>, company Eli Lilly (1983).',
          },
          {
            q: '[CUET] True or false: (i) C-peptide is present in mature insulin. (ii) Insulin consists of two polypeptide chains joined by disulphide bridges.',
            a: '(i) False: C-peptide is absent in mature insulin; (ii) True.',
          },
          {
            q: '[NEET] What was the main challenge in producing insulin through rDNA technology?',
            a: 'Getting insulin assembled into its mature (correct two-chain) form.',
          },
          {
            q: '[NEET] In the natural maturation of insulin, which peptide is removed, and from which precursor?',
            a: 'The C-peptide is removed from the precursor proinsulin.',
          },
          {
            q: '[NEET high-difficulty] A student writes: “Eli Lilly produced humulin by making proinsulin in <i>E. coli</i> and removing the C-peptide.” Identify and correct the error.',
            a: 'Error: in the 1983 process NCERT describes, Eli Lilly did not use proinsulin; it synthesised chains A and B separately in <i>E. coli</i> and then joined them by disulphide bonds. The proinsulin/C-peptide pathway is the natural in-body route, not the route of that 1983 method.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The main challenge in producing insulin using recombinant DNA technology was:',
        opts: [
          {
            label: 'production of the A peptide',
            nudge: '<b>(a)</b> and <b>(b)</b> Producing each chain individually is not the bottleneck.',
          },
          {
            label: 'production of the B peptide',
            nudge: '<b>(a)</b> and <b>(b)</b> Producing each chain individually is not the bottleneck.',
          },
          { label: 'getting insulin assembled into a mature form', nudge: null },
          { label: 'culturing <i>E. coli</i>', nudge: '<b>(d)</b> <i>E. coli</i> culture is routine.' },
        ],
        correct: 2,
        solution:
          'Expressing either chain alone is straightforward; the difficulty is assembling them into the correct, active two-chain molecule.',
      },
      {
        t: 'mcq',
        q: 'During the conversion of proinsulin into mature insulin:',
        opts: [
          { label: 'C-peptide is added', nudge: '<b>(a)</b> Reverses the process.' },
          { label: 'C-peptide is removed', nudge: null },
          { label: 'a third chain is added', nudge: '<b>(c)</b> Insulin has only two chains.' },
          {
            label: 'disulphide bridges are broken',
            nudge: '<b>(d)</b> The disulphide bridges are retained, not broken.',
          },
        ],
        correct: 1,
        solution:
          'Maturation removes the C-peptide, leaving chains A and B joined by disulphide bridges.',
      },
      {
        t: 'mcq',
        q: 'Insulin extracted from slaughtered cattle and pigs sometimes caused problems because it:',
        opts: [
          {
            label: 'was chemically identical to human insulin',
            nudge: '<b>(a)</b> If it were identical there would be no allergy: self-contradictory.',
          },
          { label: 'was a foreign protein and could cause allergy', nudge: null },
          { label: 'could be taken orally', nudge: '<b>(c)</b> Insulin cannot be taken orally.' },
          {
            label: 'contained no disulphide bonds',
            nudge: '<b>(d)</b> Insulin does contain disulphide bonds.',
          },
        ],
        correct: 1,
        solution:
          'Animal insulin differs slightly from human insulin, so it could provoke an allergic/immune reaction.',
      },
      {
        t: 'mcq',
        q: 'Humulin differs from earlier animal-source insulin chiefly in that it is:',
        opts: [
          {
            label: 'cheaper but less effective',
            nudge: '<b>(a)</b> It is not “less effective.”',
          },
          { label: 'structurally identical to human insulin and made in unlimited quantity', nudge: null },
          { label: 'administered orally', nudge: '<b>(c)</b> Still injected.' },
          {
            label: 'extracted from transgenic cows',
            nudge:
              '<b>(d)</b> It is bacterial, not from cows (a deliberate transgenic-animal distractor).',
          },
        ],
        correct: 1,
        solution:
          'Humulin is true human insulin produced by <i>E. coli</i>, available in large quantity without the foreign-protein reaction.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: Conflating the two routes.</b> The classic trap: writing that Eli Lilly “removed the C-peptide.” That is the natural body route. The 1983 route NCERT describes made chains A and B separately and joined them by disulphide bonds. Tag them in your head as Body = remove C-peptide / Factory = join two chains.',
          '<b>Pitfall 2: “Insulin is one chain.”</b> It is two chains (A and B) linked by disulphide bridges. A single-chain answer loses marks.',
          '<b>Pitfall 3: “C-peptide is part of insulin.”</b> It is present only in proinsulin and is removed; it is absent in mature insulin.',
          '<b>Pitfall 4: “Insulin can be a tablet.”</b> No: it is a protein, digested in the gut, so it is injected.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For any humulin production-sequence question, run the chain: synthesise gene → into <i>E. coli</i> plasmid → culture in bioreactor → extract → purify → join chains by disulphide → humulin. If an option inserts “remove C-peptide” into the 1983 production chain, it is wrong.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Insulin = two chains, A + B, held by disulphide bridges; deficiency → diabetes; cannot be taken orally (protein, digested) → injected.',
            note: '',
          },
          {
            f: 'Animal insulin (cattle/pig pancreas) problems',
            note: 'tiny yield (mass slaughter) + foreign-protein allergy.',
          },
          {
            f: 'Natural maturation',
            note: 'proinsulin (single chain with C-peptide) → C-peptide removed → mature insulin. C-peptide is absent in mature insulin.',
          },
          {
            f: 'Humulin (Eli Lilly, 1983, in <i>E. coli</i>)',
            note: 'make genes for A and B separately → express in <i>E. coli</i> plasmids → join chains by disulphide bonds. No proinsulin step.',
          },
          { f: 'Main rDNA challenge', note: 'getting insulin assembled into mature form.' },
          { f: 'Context', note: '~30 recombinant therapeutics approved worldwide, ~12 marketed in India (NCERT’s figures, since grown).' },
          {
            f: 'Wider family (same clone-and-harvest logic)',
            note: 'hGH (dwarfism), TPA (clot-dissolving), interferon (antiviral), α-1-antitrypsin (emphysema).',
          },
        ],
        aids: ['Mnemonics: “Body removes C, Factory joins two”; “Humulin = human insulin”; “A–B held by S–S.”'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 550–555 ─────────────────────────
  {
    n: '03',
    title: 'Gene Therapy',
    kalam:
      'Some diseases are not caused by germs or lifestyle: they are written into a person’s DNA from birth, because one gene is faulty or missing.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield medical-biotech topic. NEET asks it almost yearly (the book’s estimate from past papers, not official figures): the 1990 ADA-deficiency case, the use of a retroviral vector, and “why it is not a permanent cure” are recurring. CBSE Boards uses it for 2–3 mark answers (define gene therapy; outline the ADA procedure; gene therapy vs enzyme replacement). CUET tests the definition and the ADA/SCID/1990 facts. JEE does not test Biology.',
      },
      {
        t: 'p',
        html: 'Some diseases are not caused by germs or lifestyle: they are written into a person’s DNA from birth, because one gene is faulty or missing. You cannot cure such a disease with an antibiotic or a painkiller, because the problem is in the instruction manual of the body’s cells. So biologists asked a radical question: instead of repeatedly treating the symptoms, what if we could fix the faulty instruction itself: deliver a correct copy of the gene into the patient’s cells and let the body do the rest? That is gene therapy.',
      },
      {
        t: 'p',
        html: 'The classic, must-know example is a little girl treated in 1990, the first clinical gene therapy. She suffered from ADA deficiency (a missing or deleted gene for the enzyme adenosine deaminase). Without this enzyme, her immune cells could not mature properly, leaving her unable to fight infections: a condition called SCID (Severe Combined Immunodeficiency). Doctors took some of her immune cells, slipped a working copy of the ADA gene into them, and gave them back. Her immune system began to work.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a factory where one machine is broken because its instruction card is missing a page. Enzyme replacement therapy is like importing the finished product the broken machine should have made: useful, but you must keep importing it forever, and it is expensive. Gene therapy is like handing the machine the missing page so it can start making the product itself. Fix the instruction once, and (ideally) the machine runs on its own.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Here is the subtlety examiners love. In the 1990 procedure, the corrected cells were the patient’s lymphocytes, and mature lymphocytes are not immortal; they die off and are replaced by new (still-faulty) cells made by the body. So the patient needed the corrected lymphocytes infused again and again: it was not a permanent cure. A truly permanent cure would require introducing the functional gene (NCERT describes it as a gene isolated from the marrow cells that make ADA) into cells at an early embryonic stage, so that all future cells inherit the correction. Also note: gene therapy works best for single-gene disorders (enzymatic and immunodeficiency disorders); a disease caused by many genes acting together is far harder to fix this way.',
      },

      { t: 'part', title: 'Key terms, tools and constructs' },
      {
        t: 'table',
        title: null,
        head: ['Term / Construct', 'What it is'],
        rows: [
          [
            'Gene therapy',
            'A collection of methods that correct a gene defect by delivering a normal functional gene into a patient (or embryo) to compensate for a non-functional one.',
          ],
          [
            'ADA (Adenosine Deaminase)',
            'An enzyme essential for the immune system; its deficiency (NCERT: gene deletion) cripples lymphocyte function.',
          ],
          ['ADA deficiency', 'Caused (NCERT) by deletion of the ADA gene; patients can also carry other mutations of the gene; leads to SCID.'],
          [
            'SCID',
            'Severe Combined Immunodeficiency: the patient cannot fight infections because immune (lymphocyte) function fails.',
          ],
          [
            'Retrovirus (vector)',
            'A disarmed virus used to deliver the functional ADA cDNA into the patient’s lymphocytes.',
          ],
          ['cDNA', 'A functional DNA copy of the ADA gene that is introduced into the cells.'],
          [
            'Enzyme replacement therapy',
            'An alternative: supply the missing enzyme itself (the gene product): temporary, repeated, expensive.',
          ],
          [
            'Bone marrow transplantation',
            'Another (not fully curative) treatment used for ADA deficiency.',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Gene therapy vs enzyme replacement therapy: the contrast students must lock',
        head: ['Feature', 'Gene therapy', 'Enzyme replacement therapy'],
        rows: [
          ['What is supplied', 'The correct gene', 'The finished enzyme (gene product)'],
          [
            'Duration of effect',
            'Potentially long-lasting/curative (cell keeps making the enzyme)',
            'Temporary: must be repeated',
          ],
          ['Cost / convenience', 'One-time delivery (ideally)', 'Repeated, more expensive'],
          [
            'Limitation',
            'Mature lymphocytes die, so the corrected cells must be re-infused periodically; only a correction made at an early embryonic stage would be permanent',
            'Not a permanent cure',
          ],
        ],
      },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>A. Why ADA deficiency is deadly</b>' },
      {
        t: 'p',
        html: 'The enzyme adenosine deaminase is crucial for the proper maturation and functioning of lymphocytes (the B- and T-cells of the immune system). When the ADA gene is deleted, the enzyme is absent, lymphocytes fail to function, and the child has no working immune defence: this is SCID. Such a child cannot fight even ordinary infections. Existing options (bone marrow transplantation and enzyme replacement therapy) help but are not fully curative, which is exactly why a gene-level fix was attempted.',
      },
      { t: 'p', html: '<b>B. The 1990 ADA gene-therapy procedure (step by step)</b>' },
      {
        t: 'p',
        html: '<b>Step 1: Collect the patient’s cells.</b> Lymphocytes from the blood of the patient are taken and grown in a culture outside the body.<br><b>Step 2: Build the corrective construct.</b> A functional ADA cDNA (a working copy of the gene) is inserted into a retroviral vector: a disarmed retrovirus engineered to act as a delivery van.<br><b>Step 3: Deliver the gene.</b> The retrovirus introduces the functional ADA gene into the cultured lymphocytes, which now carry a working copy of the gene.<br><b>Step 4: Return the cells.</b> These corrected lymphocytes are infused back into the patient, where they produce functional ADA and restore immune activity.<br><b>Step 5: Repeat (the catch).</b> Because these mature lymphocytes are not immortal, the patient must receive periodic infusions of such genetically engineered cells. It is therefore not a permanent cure.',
      },
      {
        t: 'p',
        html: '<b>Toward a permanent cure.</b> If the functional gene (isolated from the marrow cells that produce ADA) were introduced into cells at an early embryonic stage, every cell descended from them would carry the correction: a permanent cure. This is the conceptual “next step” examiners often probe.',
      },
      { t: 'fig', id: 'b12-10-fig-10.4' },
      {
        t: 'p',
        html: '<b>C. Gene therapy vs enzyme replacement: why gene therapy is preferred</b>',
      },
      {
        t: 'p',
        html: 'Both approaches aim to restore the missing function, but they differ fundamentally. Enzyme replacement therapy supplies the gene product (the enzyme) directly; it works, but the enzyme is used up, so it must be given repeatedly, making it expensive and not completely curative. Gene therapy supplies the gene itself, so once the correct gene is in place the cell can keep producing the enzyme on its own, giving it the potential to completely cure the patient. That permanence is the reason gene therapy is considered the better long-term option, despite being technically harder.',
      },
      {
        t: 'p',
        html: '<b>D. The bigger picture: what gene therapy can (and cannot) treat</b>',
      },
      {
        t: 'p',
        html: 'Gene therapy is most powerful against single-gene disorders (diseases caused by one faulty or missing gene) and especially against enzymatic disorders and immunodeficiency disorders, where restoring one working gene restores one missing function. Beyond ADA-SCID, gene-therapy strategies have been explored for conditions such as sickle-cell anaemia. The recipe is always the same three-part logic: (i) identify the single defective gene; (ii) deliver a correct copy using a suitable vector (a disarmed retrovirus in the 1990 ADA case; other viral vectors, such as adenoviruses, are also used); (iii) let the patient’s own cells take over production of the missing protein.',
      },
      {
        t: 'p',
        html: 'This also explains why the procedure is done outside the body (ex vivo) in the ADA case: the patient’s cells are removed, corrected in culture where the vector can work efficiently, checked, and only then returned. The harder the genetics of a disease (many genes interacting, plus environmental factors), the less straightforward gene therapy becomes. That is exactly why the early successes were mostly single-gene, enzyme- or immune-based diseases, where one correct gene makes a decisive difference. The dream end-point remains a one-time, embryonic-stage correction that every descendant cell inherits: converting a lifelong, repeated treatment into a true cure.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board level · 3 marks',
        q: 'Define gene therapy. Name the disorder and the year of the first clinical gene therapy, and state why the treatment was not a permanent cure.',
        steps: [
          '<b>Model answer.</b> Gene therapy is a collection of methods that correct a gene defect by introducing a normal functional gene into the patient to compensate for the non-functional one. The first clinical gene therapy was performed in 1990 on a girl with ADA (adenosine deaminase) deficiency. It was not a permanent cure because the corrected lymphocytes are not immortal: they die and are replaced by the body’s own (still-defective) cells, so the patient needs periodic re-infusion of genetically engineered lymphocytes.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b><br>Column I: A. ADA deficiency; B. Retrovirus; C. Enzyme replacement; D. 1990<br>Column II: 1. Delivers the functional gene; 2. Caused by gene deletion → SCID; 3. Year of first gene therapy; 4. Supplies the gene product, repeated',
        steps: [],
        ans: 'A–2, B–1, C–4, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Assertion–Reason.</b> Assertion (A): A retrovirus is commonly used as a vector in ADA gene therapy. Reason (R): A disarmed retrovirus can deliver and integrate a functional gene into the patient’s lymphocytes.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Both are true, and R is the correct mechanism: the retroviral vector is chosen precisely for its ability to introduce the functional ADA cDNA into the cultured lymphocytes.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Multi-statement.</b> Regarding ADA-deficiency gene therapy, select the correct statements:<br>(i) ADA deficiency results from deletion of the gene for adenosine deaminase.<br>(ii) Lymphocytes from the patient are grown in culture and given a functional ADA cDNA.<br>(iii) The treatment is a one-time permanent cure.<br>(iv) A permanent cure could result from introducing the gene at an early embryonic stage.<br><b>(a)</b> (i), (ii) and (iv)<br><b>(b)</b> (i), (ii) and (iii)<br><b>(c)</b> all four<br><b>(d)</b> (ii) and (iii) only',
        steps: [
          '(i), (ii) and (iv) are correct. (iii) is the trap: the procedure is not permanent because mature lymphocytes die and must be replaced; only an embryonic-stage correction (iv) could be permanent.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the enzyme deficiency treated by the first gene therapy and the disorder it causes.',
            a: 'Adenosine deaminase (ADA); deficiency causes SCID.',
          },
          {
            q: '[CUET] True or false: (i) ADA deficiency is due to duplication of a gene. (ii) A retrovirus is used as a vector in gene therapy.',
            a: '(i) False: deletion, not duplication; (ii) True.',
          },
          {
            q: '[NEET] Why is enzyme replacement therapy not a permanent cure for ADA deficiency?',
            a: 'It supplies only the enzyme (gene product), which is used up, so it must be repeated; the gene defect itself is never corrected.',
          },
          {
            q: '[NEET] Outline, in order, the four main steps of the 1990 ADA gene-therapy procedure.',
            a: 'Lymphocytes taken from patient’s blood → grown in culture → functional ADA cDNA introduced via retroviral vector → corrected lymphocytes re-infused into patient.',
          },
          {
            q: '[NEET high-difficulty] Explain how a permanent cure for ADA deficiency might theoretically be achieved, and why the 1990 method fell short.',
            a: 'Introduce the functional gene into cells at an early embryonic stage so all descendant cells carry it; the 1990 method used mature lymphocytes, which are not immortal and must be re-infused periodically.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The first clinical gene therapy (1990) was performed to treat:',
        opts: [
          {
            label: 'cancer',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are real diseases but not the first gene-therapy case: common distractors drawn from other biotech contexts.',
          },
          {
            label: 'AIDS',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are real diseases but not the first gene-therapy case: common distractors drawn from other biotech contexts.',
          },
          { label: 'ADA deficiency (SCID)', nudge: null },
          {
            label: 'cystic fibrosis',
            nudge:
              '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are real diseases but not the first gene-therapy case: common distractors drawn from other biotech contexts.',
          },
        ],
        correct: 2,
        solution: 'The first gene therapy treated a 4-year-old girl with ADA deficiency (causing SCID).',
      },
      {
        t: 'mcq',
        q: 'According to NCERT, ADA deficiency is caused by:',
        opts: [
          {
            label: 'insertion of a gene',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are other mutation types offered to test precise recall.',
          },
          { label: 'deletion of a gene', nudge: null },
          {
            label: 'duplication of a gene',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are other mutation types offered to test precise recall.',
          },
          {
            label: 'translocation of a gene',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are other mutation types offered to test precise recall.',
          },
        ],
        correct: 1,
        solution: 'It results from deletion of the gene for adenosine deaminase.',
      },
      {
        t: 'mcq',
        q: 'In gene therapy for ADA deficiency, the functional cDNA is introduced into the patient’s cells using:',
        opts: [
          {
            label: '<i>E. coli</i>',
            nudge: '<b>(a)</b> is a bacterial host, not a human-cell vector.',
          },
          {
            label: '<i>Agrobacterium</i>',
            nudge: '<b>(b)</b> and <b>(d)</b> are plant-transformation tools, not for human cells.',
          },
          { label: 'a retrovirus', nudge: null },
          {
            label: 'a Ti plasmid',
            nudge: '<b>(b)</b> and <b>(d)</b> are plant-transformation tools, not for human cells.',
          },
        ],
        correct: 2,
        solution: 'A disarmed retrovirus served as the vector for the human lymphocytes in the 1990 ADA case.',
      },
      {
        t: 'mcq',
        q: 'Why is the 1990 gene-therapy procedure considered not fully curative?',
        opts: [
          {
            label: 'The retrovirus is toxic',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are plausible-sounding but incorrect rationalisations.',
          },
          { label: 'The corrected lymphocytes are not immortal and must be re-infused', nudge: null },
          {
            label: 'ADA cannot be expressed in lymphocytes',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are plausible-sounding but incorrect rationalisations.',
          },
          {
            label: 'The gene is rejected by the immune system',
            nudge:
              '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are plausible-sounding but incorrect rationalisations.',
          },
        ],
        correct: 1,
        solution:
          'Mature lymphocytes die and are replaced by the body’s faulty cells, so periodic re-infusion is needed.',
      },
      {
        t: 'mcq',
        q: 'Gene therapy is most effective against:',
        opts: [
          {
            label: 'multifactorial diseases involving many genes',
            nudge: '<b>(a)</b> Many-gene diseases are far harder.',
          },
          { label: 'single-gene (enzymatic/immunodeficiency) disorders', nudge: null },
          {
            label: 'infectious diseases caused by bacteria',
            nudge: '<b>(c)</b> Infections are treated with antibiotics, not gene therapy.',
          },
          {
            label: 'injuries and physical trauma',
            nudge: '<b>(d)</b> Trauma is unrelated to genes.',
          },
        ],
        correct: 1,
        solution:
          'Supplying one correct gene works best where one faulty gene is the whole problem.',
      },
      {
        t: 'mcq',
        q: 'The defective gene in a patient suffering from SCID (of the ADA type) codes for:',
        opts: [
          { label: 'adenosine deaminase', nudge: null },
          {
            label: 'DNA polymerase',
            nudge:
              '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are enzymes of molecular biology offered as distractors but unrelated to this immunodeficiency.',
          },
          {
            label: 'restriction endonuclease',
            nudge:
              '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are enzymes of molecular biology offered as distractors but unrelated to this immunodeficiency.',
          },
          {
            label: 'RNA polymerase',
            nudge:
              '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are enzymes of molecular biology offered as distractors but unrelated to this immunodeficiency.',
          },
        ],
        correct: 0,
        solution: 'ADA-type SCID results from a deletion of the adenosine-deaminase gene.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1: “Gene therapy is a permanent one-shot cure.”</b> The 1990 method was not permanent (mature lymphocytes die → periodic re-infusion). Only embryonic-stage correction would be permanent.',
          '<b>Pitfall 2: Confusing therapy with replacement.</b> Gene therapy supplies the gene; enzyme replacement supplies the enzyme (product). Therapy = gene, Replacement = product.',
          '<b>Pitfall 3: Wrong mutation type.</b> In NCERT’s account ADA deficiency is a deletion, not duplication/insertion.',
          '<b>Pitfall 4: Wrong vector.</b> In the 1990 ADA case the vector for human lymphocytes was a retrovirus: not <i>Agrobacterium</i>/Ti plasmid (those are for plants) and not <i>E. coli</i> (a host, not a human-cell vector).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Lock the ADA story as one sentence: “1990, ADA gene deleted → SCID → patient’s lymphocytes cultured → functional cDNA via retrovirus → re-infused (not permanent).” Many exam questions are a slice of that sentence.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Gene therapy = correct a gene defect by inserting a normal functional gene; best for single-gene / enzymatic / immunodeficiency disorders.',
            note: '',
          },
          {
            f: 'First case',
            note: '1990, 4-year-old girl, ADA deficiency (deletion of ADA gene) → SCID.',
          },
          {
            f: 'ADA is needed for lymphocyte function; its absence destroys immune defence.',
            note: '',
          },
          {
            f: 'Procedure (ex vivo)',
            note: 'patient’s lymphocytes cultured → functional ADA cDNA via retroviral vector → cells re-infused → repeat periodically (not permanent).',
          },
          { f: 'Permanent cure', note: 'introduce the gene at early embryonic stage.' },
          {
            f: 'Gene therapy vs enzyme replacement',
            note: 'gene = potentially curative; enzyme = temporary, repeated, costly.',
          },
        ],
        aids: ['Mnemonics: “1990, ADA, SCID”; “Therapy = gene, Replacement = product”; “retrovirus into lymphocytes.”'],
      },
    ],
  },
];
