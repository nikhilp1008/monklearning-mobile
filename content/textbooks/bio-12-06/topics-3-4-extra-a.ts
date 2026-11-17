import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 6 (Evolution), Topics 03 and 04 and Additional topic A, word for word from the Class 12 Biology
 * Master Reference (book pp. 315 to 334): Topic 03 "Origin & Evolution of Man" (top of p. 315 to p. 322; Figure 6.3 is
 * captioned on p. 318 and drawn on p. 319), Topic 04 "A Brief Account of Evolution" (top of p. 323 to p. 330; Figure 6.4
 * is captioned on p. 326 and drawn on p. 327), then the shared introduction to the Additional topics (p. 331 lines 3 to
 * 10, which opens Additional topic A's Introduction) and A "Hardy–Weinberg Algebra: Solving for p, q, and Testing
 * Equilibrium" (p. 331 line 11 to p. 334 line 26, ending with its practice answers; Addendum B begins at p. 334 line 27,
 * the next writer).
 *
 * Topic indexes: Topic 03 = 2, Topic 04 = 3, A = 4. Em dashes of the book are written as a colon, commas or brackets
 * (every one is listed in the report). The book's "Q1 - [CBSE Board] (3 marks)." becomes the tag (the bracket and the
 * parenthesis) and the question; "Example A.1 - [NEET] Title" becomes the tag and a bold lead on the question. Worked
 * answers that run their steps together on the page are set as lists. Hardy–Weinberg variables p, q and N are italic;
 * the genotype labels AA, Aa, aa and the allele letters are upright or italic exactly where the page prints them so.
 * Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 315–322 ─────────────────────────
  {
    n: '03',
    title: 'Origin & Evolution of Man',
    kalam: 'Chimps are not our ancestors; they are our cousins.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A small topic that is often asked. NEET almost always asks one question here (the book’s estimate from past papers, not official figures), overwhelmingly a <b>chronological-sequence</b> item (arrange the hominins from earliest to latest) or a <b>brain-capacity / feature match</b>. CUET likes single-fact recall (who used fire, which had the largest brain). CBSE Boards may ask a short “trends in human evolution” answer. The facts are few and finite, so this is high return for low effort: lock the order and the brain-capacity ladder and you have it.',
      },
      {
        t: 'p',
        html: 'Human evolution is the part of this chapter where students most often carry a wrong picture in their heads: a tidy single-file parade of a stooping ape gradually straightening up into a businessman. Two things are wrong with that image, and fixing them is most of the battle.',
      },
      {
        t: 'p',
        html: 'First, <b>we did not descend from monkeys or from chimpanzees.</b> Chimps are not our ancestors; they are our cousins. Picture a family tree, not a ladder: somewhere around 6–8 million years ago a single ancestral population split into two branches, one leading (eventually) to modern chimpanzees, the other to us. Saying “humans evolved from chimps” is like saying you are descended from your cousin. You both came from the same grandparents; neither came from the other.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Think of a large joint family in an Indian village whose sons moved to different cities generations ago. The Mumbai branch and the Delhi branch look different today and speak with different accents, but neither “came from” the other: they share a common great-grandfather. Apes and humans are exactly that: separate branches from a shared ancestral stock, each changed by its own environment over millions of years.',
      },
      {
        t: 'p',
        html: 'Second, evolution was <b>not a straight march of steady improvement.</b> Several hominin species lived at the same time, some went entirely extinct (the Neanderthal lineage did not survive, though many living people carry a small share of Neanderthal DNA), and the path was full of side-branches and dead-ends. What looks in a textbook like a neat sequence is really a pruned tree.',
      },
      {
        t: 'p',
        html: 'So what actually changed across the human line? A handful of clear <b>trends</b>, all interlocking:<br>• <b>Upright walking (bipedalism)</b> came first, even before the big brain. Standing and walking on two legs freed the hands.<br>• <b>Free hands</b> could carry, throw, and eventually make tools.<br>• <b>Brain size climbed</b> steeply, from roughly 400\u00a0cc in the early ape-men to about 1400–1600\u00a0cc in later humans.<br>• <b>Bigger brains plus free hands</b> enabled <b>tool-making, fire, language, and culture</b>, the things that ultimately let one species reshape the entire planet.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Notice the order: hands were freed before the brain ballooned. Bipedalism wasn’t a result of intelligence; it was a precondition for it. This is why “the success story of man” is usually attributed not to strength but to <b>increased cranial capacity, language and self-consciousness</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Caveats:</b><br>• Humans and apes share a <b>common ancestor</b>; humans are not descended from any living ape.<br>• The hominin “sequence” is a simplification of a branching tree, not a literal single lineage; multiple species overlapped in time.<br>• <i>Ramapithecus</i> is presented in NCERT as an early, more man-like ape ancestor and appears first in the exam sequence, but modern phylogenetics now places it close to the <b>orangutan</b> line, not on the direct human line. <i>Dryopithecus</i> is likewise an extinct Miocene ape on the ape side, not on the direct human line. Learn the NCERT order for the exam; know the caveat for understanding.<br>• Brain-capacity figures are approximate ranges, not exact constants: use them to order the hominins, which is what exams test.',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'p',
        html: 'The whole topic collapses neatly into one diagnostic table. The <b>order</b> and the <b>brain-capacity ladder</b> are two things exams often test.',
      },
      {
        t: 'table',
        title: null,
        head: ['Hominin', 'Roughly when', 'Where', 'Brain capacity', 'Diagnostic features'],
        rows: [
          ['<i>Dryopithecus</i> & <i>Ramapithecus</i>', '~15\u00a0mya', 'Africa & Asia', 'ape-sized', 'Ape-like, hairy, walked like apes; <i>Ramapithecus</i> more man-like, <i>Dryopithecus</i> more ape-like'],
          ['<i>Australopithecus</i>', '~3–4\u00a0mya', 'Eastern Africa', '~400–500\u00a0cc', 'An early, well-established <b>bipedal</b> “ape-man”; lived on grasslands, ate fruit; hunted with stones'],
          ['<i>Homo habilis</i>', '~2\u00a0mya', 'Eastern Africa', '<b>650–800\u00a0cc</b>', '<b>Tool-maker</b> (“handy man”); the book says probably did <b>not</b> eat meat (current work: scavenged meat)'],
          ['<i>Homo erectus</i>', '~1.5\u00a0mya', 'Africa & Asia', '<b>~900\u00a0cc</b>', 'Probably <b>ate meat</b>; used fire (Java man, Peking man)'],
          ['<i>Homo neanderthalensis</i>', '100,000–40,000\u00a0ya', 'Near East, Central Asia, Europe', '<b>1400\u00a0cc</b>', 'Used <b>hides</b> to cover the body; <b>buried their dead</b>; now extinct'],
          ['<i>Homo sapiens</i> (incl. Cro-Magnon)', '~75,000\u00a0ya → present', 'Arose in <b>Africa</b>, spread worldwide', '~1350–1600\u00a0cc', 'Cave <b>art</b>, <b>language</b>, <b>agriculture</b> (~10,000\u00a0ya); modern man'],
        ],
      },
      {
        t: 'p',
        html: 'Dates and brain sizes in this table are the book’s (mostly NCERT’s) round figures; current work gives earlier or wider ranges (for example <i>Homo sapiens</i> about 300,000 years ago, Neanderthals about 400,000 to 40,000 years ago). The order is what is examined.',
      },
      {
        t: 'p',
        html: '<b>Core terms:</b><br>• <b>Hominid / hominin:</b> the human lineage and its close fossil relatives. In current use, <i>hominin</i> means a member of the human lineage after its split from the chimpanzee lineage (the book’s list runs from <i>Australopithecus</i> to <i>Homo sapiens</i>), while <i>hominid</i> is wider: all the great apes and humans.<br>• <b>Bipedalism:</b> habitual walking upright on two legs, the founding human trait.<br>• <b>Cranial (brain) capacity:</b> the volume of the brain-case in cubic centimetres (cc), the number set most often tested here.<br>• <b><i>Australopithecus</i>:</b> the “southern ape” / an early ape-man; bipedal but small-brained.<br>• <b>Cro-Magnon man:</b> an early, fully modern <i>Homo sapiens</i> (brain ~1600\u00a0cc) known for cave paintings.',
      },
      {
        t: 'p',
        html: 'No SI units, no calculations here: brain capacity is quoted in cc and time in mya/years ago. The diagnostic table is the deliverable.',
      },

      { t: 'part', title: 'Conceptual frameworks' },
      { t: 'p', html: '<b>Framework A: the chronological ladder (memorise this order)</b>' },
      {
        t: 'p',
        html: '<i>Dryopithecus</i> / <i>Ramapithecus</i> → <i>Australopithecus</i> → <i>Homo habilis</i> → <i>Homo erectus</i> → Neanderthal → Cro-Magnon → <i>Homo sapiens</i>',
      },
      {
        t: 'p',
        html: 'And the <b>brain-capacity ladder</b>, which rises broadly (the easiest way to check any sequence question), with Neanderthal (1400) and <i>Homo sapiens</i> (1350–1600) overlapping:<br><i>Australopithecus</i> (~400) < <i>H. habilis</i> (650–800) < <i>H. erectus</i> (~900) < Neanderthal (1400) < Cro-Magnon (~1600), all in cc.',
      },
      {
        t: 'p',
        html: '<b>Why this is exam gold:</b> if you forget the species order, order by brain size instead: the two ladders run parallel, so brain capacity largely reconstructs the sequence.',
      },
      { t: 'p', html: '<b>Framework B: why the trends unfolded in this order</b>' },
      {
        t: 'p',
        html: 'The logic is a chain, and each link enabled the next:<br>1. <b>Bipedalism freed the hands.</b> Once an ancestor walked upright, its hands were no longer needed for locomotion. <b>Why it matters:</b> free hands can carry food, hold objects, and, crucially, manipulate the environment.<br>2. <b>Free hands + a precision grip enabled tool-making.</b> <i>Homo habilis</i> (literally “handy man”) is named for exactly this step.<br>3. <b>Tools and meat-eating raised the energy budget.</b> Cutting tools and meat-eating (clear from <i>H. erectus</i>, with fire) provided more calories, and the brain is an energy-hungry organ. <b>Why it matters:</b> a richer diet helped support a larger, costlier brain.<br>4. <b>A larger brain enabled language, planning and culture.</b> Fire, clothing (Neanderthal hides), burial of the dead, and finally cave art and agriculture all follow from a brain capable of symbolic thought.',
      },
      {
        t: 'p',
        html: 'So the “success story of man” is not muscle but <b>cranial capacity, language and self-consciousness</b>, the very traits NEET singles out.',
      },
      { t: 'p', html: '<b>Framework C: from biology to culture (the part most students skip)</b>' },
      {
        t: 'p',
        html: 'Two threads complete the human story, and both are quietly examinable.',
      },
      {
        t: 'p',
        html: '<b>The anatomy of standing up.</b> Bipedalism was not just “deciding to walk upright”: it required a remodelled skeleton: an <b>S-shaped (curved) spine</b> to balance the trunk over the hips, a <b>broad bowl-shaped pelvis</b> to support the organs of an upright body, <b>angled (valgus) knees</b> that bring the feet under the body’s centre, and a <b>forward-shifted foramen magnum</b> (the hole where the spine meets the skull) so the head sits on top of the spine rather than in front of it. These are the skeletal “fingerprints” by which palaeontologists recognise a bipedal fossil even from a single bone.',
      },
      {
        t: 'p',
        html: '<b>The march out of Africa.</b> Modern <i>Homo sapiens</i> arose in <b>Africa</b> and, during the last ice age (roughly 75,000–10,000 years ago), migrated across the continents, gradually differentiating into the world’s regional populations. The cultural milestones came fast at the end: <b>pre-historic cave art</b> appeared around 18,000 years ago (India’s own <b>Bhimbetka rock shelters</b> in Madhya Pradesh preserve some of the most famous examples) and <b>settled agriculture</b> began about 10,000 years ago, the turning point that let humans build villages, cities and everything after. Biology had handed over the baton to culture.',
      },
      {
        t: 'p',
        html: '<b>Exam angle:</b> CBSE occasionally rewards a line on “where did modern humans originate?” (<b>Africa</b>) and “what marks the shift from biological to cultural evolution?” (<b>tools, language, art, agriculture</b>).',
      },
      { t: 'p', html: '<b>Framework D: common ancestor, not descent (the misconception killer)</b>' },
      {
        t: 'p',
        html: 'A phylogenetic tree of primates shows the human line branching off from a shared ancestral stock alongside the great apes. Read the tree correctly:<br>• Tree shrews (close relatives of the primates), then the lemurs, then the tarsiers branch off earliest (most distant relatives).<br>• New-world and old-world monkeys branch next.<br>• Among the apes, <b>gibbon and orangutan</b> branch off, then <b>gorilla</b>, and finally <b>chimpanzee</b>, our closest living relative.<br>• The human line and the chimpanzee line diverge from their <b>last common ancestor</b>; neither descends from the other.',
      },
      { t: 'fig', id: 'b12-06-fig-6.3' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'List any three major trends seen during the evolution of modern humans from their ape-like ancestors.',
        steps: [
          '<b>Model answer.</b><br>(i) <b>Shift to bipedal (upright) locomotion</b>, freeing the hands;<br>(ii) a <b>progressive increase in cranial (brain) capacity</b>, from roughly 400\u00a0cc in <i>Australopithecus</i> to about 1400–1600\u00a0cc in later humans;<br>(iii) <b>development of tool-making, then fire, language and culture</b>.',
          '(Also acceptable: reduction of jaw and brow ridges; loss of body hair.)',
          '<b>Why it scores:</b> it names distinct, correctly-described trends rather than listing species, which is what the trend question asks.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · single best option',
        q: 'Which hominin is traditionally credited, in NCERT, with making and using tools?<br><b>(a)</b> <i>Australopithecus</i><br><b>(b)</b> <i>Homo habilis</i><br><b>(c)</b> <i>Homo erectus</i><br><b>(d)</b> Neanderthal man',
        steps: [
          '<b>Fast reasoning:</b> the name <i>Homo habilis</i> means “handy/skilful man,” a direct tag for tool use. <i>Australopithecus</i> (a) was bipedal but pre-tool; <i>Homo erectus</i> (c) is associated with <b>fire and meat-eating</b>, a later step; Neanderthal (d) used hides and buried its dead, later still. The “tool-maker” slot in NCERT belongs to <i>H. habilis</i>.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET · chronological sequence',
        q: 'Arrange the following in the correct order of appearance, earliest first:<br>I. <i>Homo erectus</i> II. <i>Australopithecus</i> III. <i>Ramapithecus</i> IV. <i>Homo habilis</i><br><b>(a)</b> III → II → IV → I<br><b>(b)</b> II → III → IV → I<br><b>(c)</b> III → IV → II → I<br><b>(d)</b> II → IV → III → I',
        steps: [
          '<b>Reasoning:</b><br>• <i>Ramapithecus</i> (ape-like, ~15\u00a0mya) is earliest → III first, eliminating (b) and (d).<br>• Then the bipedal <b>ape-man</b> <i>Australopithecus</i> (~3–4\u00a0mya) precedes the genus <i>Homo</i>, so II comes before IV and I, eliminating (c), where <i>habilis</i> is placed before <i>Australopithecus</i>.<br>• The order <b>III → II → IV → I</b> also matches the rising brain-capacity ladder.',
          '<b>Trap:</b> students who remember “<i>Homo habilis</i> = first human” sometimes place it ahead of <i>Australopithecus</i>; but <i>Australopithecus</i> is older: the genus <i>Homo</i> comes after the ape-men.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> Modern humans did not evolve from chimpanzees. <b>Reason (R):</b> Humans and chimpanzees diverged from a common ancestor, forming two separate evolutionary branches.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
        steps: [
          '<b>Reasoning:</b> humans are not descended from any living ape (A is true); the reason this is so is precisely that both lineages split from a shared ancestor rather than one arising from the other (R is true <b>and</b> explains A). So R is the correct explanation → option <b>(a)</b>.',
          '<b>Trap:</b> (c) tempts students who accept A as a “fact to memorise” but never connect it to the common-ancestor logic that makes it true.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the hominin associated with each: (i) an early bipedal hominin, (ii) the “handy man”, credited with tools, (iii) an early Neanderthal-associated burial.',
            a: '(i) <i>Australopithecus</i>; (ii) <i>Homo habilis</i>; (iii) Neanderthal man.',
          },
          {
            q: '[CUET] Which one of the following had the largest brain capacity?<br><b>(a)</b> <i>Homo habilis</i><br><b>(b)</b> <i>Homo erectus</i><br><b>(c)</b> Neanderthal man<br><b>(d)</b> <i>Australopithecus</i>',
            a: '(c) Neanderthal (1400\u00a0cc), larger than <i>habilis</i>/<i>erectus</i>; (Cro-Magnon ~1600\u00a0cc is not listed).',
          },
          {
            q: '[NEET] <i>Homo erectus</i> is most closely associated with which advance?<br><b>(a)</b> cave painting<br><b>(b)</b> use of fire and meat-eating<br><b>(c)</b> agriculture<br><b>(d)</b> burial of the dead',
            a: '(b).',
          },
          {
            q: '[NEET] Among the options, which had the smallest brain capacity?<br><b>(a)</b> <i>Homo erectus</i><br><b>(b)</b> <i>Homo sapiens</i><br><b>(c)</b> Neanderthal man<br><b>(d)</b> <i>Homo habilis</i>',
            a: '(d) <i>Homo habilis</i> (650–800\u00a0cc), smallest among the listed <i>Homo</i>.',
          },
          {
            q: '[NEET High-Difficulty] “The chimpanzee is the closest living relative of humans, yet humans did not evolve from chimpanzees.” Explain this apparent contradiction using the concept of a common ancestor.',
            a: 'Both species share a last common ancestor from which two separate branches arose; chimpanzees are a <i>sister</i> branch, not an ancestral one, so closeness of relationship does not mean descent.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct chronological sequence of human evolution is:',
        opts: [
          {
            label: '<i>Australopithecus</i> → <i>Ramapithecus</i> → <i>Homo habilis</i> → <i>Homo erectus</i>',
            nudge: '<b>(a)</b> wrongly puts <i>Australopithecus</i> before the older <i>Ramapithecus</i>.',
          },
          { label: '<i>Ramapithecus</i> → <i>Australopithecus</i> → <i>Homo habilis</i> → <i>Homo erectus</i>', nudge: null },
          {
            label: '<i>Ramapithecus</i> → <i>Homo habilis</i> → <i>Australopithecus</i> → <i>Homo erectus</i>',
            nudge: '<b>(c)</b> and <b>(d)</b> misplace <i>Australopithecus</i> after the genus <i>Homo</i>, but the ape-men predate <i>Homo</i>.',
          },
          {
            label: '<i>Homo habilis</i> → <i>Australopithecus</i> → <i>Ramapithecus</i> → <i>Homo erectus</i>',
            nudge: '<b>(c)</b> and <b>(d)</b> misplace <i>Australopithecus</i> after the genus <i>Homo</i>, but the ape-men predate <i>Homo</i>.',
          },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Ape-like <i>Ramapithecus</i> first, then the ape-man <i>Australopithecus</i>, then <i>Homo habilis</i>, then <i>Homo erectus</i>.',
      },
      {
        t: 'mcq',
        q: 'Which feature is considered the earliest major step in human evolution?',
        opts: [
          {
            label: 'Increase in brain size',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all consequences that depended on free hands and a growing brain; none came first. A student who assumes “intelligence drove everything” wrongly picks (a).',
          },
          {
            label: 'Use of fire',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all consequences that depended on free hands and a growing brain; none came first.',
          },
          { label: 'Upright bipedal locomotion', nudge: null },
          {
            label: 'Development of language',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> are all consequences that depended on free hands and a growing brain; none came first.',
          },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Bipedalism preceded brain enlargement; it freed the hands and set up every later advance.',
      },
      {
        t: 'mcq',
        q: 'Neanderthal man is distinguished from earlier hominins by which pair of traits?',
        opts: [
          { label: 'Tool-making and a brain of 650–800\u00a0cc', nudge: '<b>(a)</b> describes <i>Homo habilis</i>.' },
          { label: 'Use of hides for cover and burial of the dead, with a brain of ~1400\u00a0cc', nudge: null },
          { label: 'First use of fire and a brain of ~900\u00a0cc', nudge: '<b>(c)</b> describes <i>Homo erectus</i>.' },
          { label: 'Cave painting and agriculture', nudge: '<b>(d)</b> describes modern <i>Homo sapiens</i>/Cro-Magnon.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Neanderthals (brain ~1400\u00a0cc) used hides and buried their dead. Each distractor is a real fact attached to the wrong species: the classic mismatch trap.',
      },
      {
        t: 'mcq',
        q: 'The “success of man” in evolution is most directly attributed to:',
        opts: [
          {
            label: 'physical strength and large body size',
            nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe physical attributes in which humans are unremarkable or even inferior to many animals; the human edge is cognitive, not physical.',
          },
          { label: 'increased cranial capacity, language and self-consciousness', nudge: null },
          {
            label: 'the ability to run fast',
            nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe physical attributes in which humans are unremarkable or even inferior to many animals; the human edge is cognitive, not physical.',
          },
          {
            label: 'a long lifespan',
            nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> describe physical attributes in which humans are unremarkable or even inferior to many animals; the human edge is cognitive, not physical.',
          },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. Human dominance rests on brain power, language and self-awareness, not physical prowess.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Humans evolved from monkeys/chimps.”</b> Wrong: shared common ancestor, separate branches. This single correction prevents a common assertion–reason error in the topic.',
          '<b>Placing <i>Homo habilis</i> before <i>Australopithecus</i>.</b> The ape-men (<i>Australopithecus</i>) are older than the genus <i>Homo</i>. Brain size confirms it: ~400\u00a0cc precedes 650–800\u00a0cc.',
          '<b>Swapping species-specific facts.</b> Fire = <i>H. erectus</i>; tools = <i>H. habilis</i>; hides & burial = Neanderthal; art & agriculture = <i>H. sapiens</i>. Mismatching these is a common MCQ trap.',
          '<b>Treating brain-capacity numbers as exact.</b> They are ranges; use them to order, not to quote to the decimal.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sequence questions in seconds):</b> never memorise the species order in isolation: anchor it to the <b>brain-capacity ladder</b> (≈400 → 700 → 900 → 1400 → 1600). The two run in parallel, so if a sequence option puts a clearly larger-brained species before a smaller-brained one among <i>Australopithecus</i>, <i>H. habilis</i>, <i>H. erectus</i> and Neanderthal, it is wrong (Neanderthal and <i>H. sapiens</i> overlap). One ladder answers both “arrange the species” and “who had the largest/smallest brain.”',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Order</b>',
            note: '<i>Dryopithecus</i>/<i>Ramapithecus</i> → <i>Australopithecus</i> → <i>H. habilis</i> → <i>H. erectus</i> → Neanderthal → Cro-Magnon → <i>H. sapiens</i>.',
          },
          {
            f: '<b>Brain ladder (cc)</b>',
            note: '<i>Australopithecus</i> ~400 < <i>H. habilis</i> 650–800 < <i>H. erectus</i> ~900 < Neanderthal 1400 < Cro-Magnon ~1600.',
          },
          {
            f: '<b>One-fact tags</b>',
            note: '<i>Australopithecus</i> = early bipedal ape-man · <i>H. habilis</i> = tool-maker (“handy man”) · <i>H. erectus</i> = fire + meat · Neanderthal = hides + buried dead · <i>H. sapiens</i> = art, language, agriculture.',
          },
          {
            f: '<b>Key idea</b>',
            note: 'humans share a <b>common ancestor</b> with apes; chimpanzee is the closest living relative; humans did <b>not</b> descend from any living ape.',
          },
          { f: '<b>Trends</b>', note: 'bipedalism → free hands → tools → bigger brain → language & culture.' },
          {
            f: '<b>Caveat</b>',
            note: '<i>Ramapithecus</i> taught first in the NCERT/exam sequence, but modern phylogenetics links it to the orangutan line; <i>Dryopithecus</i> is likewise an extinct ape, not a direct human ancestor.',
          },
        ],
        aids: [
          '“<b>A</b>pe-men <b>H</b>andle <b>E</b>rect <b>N</b>ights, <b>C</b>reate <b>S</b>ocieties” = <i>Australopithecus, Habilis, Erectus</i>, Neanderthal, Cro-magnon, <i>Sapiens</i>.',
          'For the success of man: “<b>B</b>rain, <b>L</b>anguage, <b>S</b>elf” beats brawn.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 323–330 ─────────────────────────
  {
    n: '04',
    title: 'A Brief Account of Evolution',
    kalam: 'Life began in water and only much later crawled ashore: first plants, then animals.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A topic NEET asks often that students underestimate. Expect a <b>sequence-of-life</b> question (which group evolved first) or a <b>geological-era match</b> (which life form dominated which era) almost every year (the book’s estimate from past papers, not official figures). The dinosaur-extinction-to-mammal-radiation story and <b>anthropogenic evolution</b> (drug/pesticide resistance, industrial melanism) are recurring assertion–reason and “real-time evolution” items. CBSE Boards may ask a short “evolution of life forms” or “plants/animals invading land” answer. Pure recall once the timeline is locked.',
      },
      {
        t: 'p',
        html: 'If the entire history of life on Earth were squeezed into a single calendar year, humans would show up only in the last few minutes of December 31. For almost the whole “year,” life was microscopic; backbones, legs, wings and brains are all very late arrivals. The point of this topic is to walk that calendar from start to finish: to see, in order, how life climbed from a single cell in the sea to forests, dinosaurs, and finally us.',
      },
      {
        t: 'p',
        html: 'Two great storylines run in parallel. One is the <b>conquest of land</b>: life began in water and only much later crawled ashore (first plants, then animals), which is why the earliest fossils are all aquatic and land-dwellers appear far higher up the rock layers. The other is the <b>rise and fall of dynasties</b>: each major group had its golden age and then either declined or was wiped out, opening the stage for the next. Fish gave way to amphibians, amphibians to reptiles, among the reptiles the dinosaurs ruled until they vanished, and the mammals (which came from mammal-like reptiles) and the birds (which came from a reptilian line) took over.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a long-running Indian railway line where each station hands the baton to the next. A traveller boarding at “first cell” rides through “invertebrates,” “fishes,” “amphibians,” “reptiles,” and finally “mammals and birds.” Crucially, the groups first appear in this order: fishes before amphibians, amphibians before reptiles (though some lineages later returned to water, and older groups did not vanish when the next appeared). Exam sequence questions are simply asking whether you know the station order.',
      },
      {
        t: 'p',
        html: 'The most dramatic plot twist is the <b>extinction of the dinosaurs</b> about 65 million years ago. For roughly 135 million years reptiles ruled the land; then, quite suddenly, the dinosaurs vanished. The little shrew-like mammals that had been scurrying in their shadow finally had the world to themselves, and radiated into the huge variety of mammals (including, eventually, primates and humans) we see today. One group’s catastrophe was another group’s opportunity.',
      },
      {
        t: 'p',
        html: 'And here is the twist that makes evolution feel urgent rather than ancient: it is <b>still happening, fast, right under our noses.</b> When humans spray DDT, the surviving mosquitoes are the resistant ones; when we flood hospitals with antibiotics, the surviving bacteria are the resistant ones; when soot blackened England’s trees, the surviving moths were the dark ones. This is <b>anthropogenic evolution</b>: natural selection driven by human-created pressures, visible within a single human lifetime.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Caveats:</b><br>• Evolution has <b>no fixed direction or goal</b>: “fish → amphibian → reptile → mammal” is a historical sequence, not a ladder of “improvement,” and not every lineage followed it.<br>• The water-to-land order matters: <b>plants invaded land before animals</b>, and among animals the order is fishes → amphibians → reptiles → birds/mammals.<br>• Mammals did <b>not</b> evolve from dinosaurs: they coexisted with dinosaurs and simply radiated after the dinosaurs died out. Birds, however, did evolve from reptiles.<br>• Anthropogenic resistance is mostly <b>selection of variants already present</b>, not the environment “creating” resistance on demand: the resistant mutants are usually already there at low frequency (new mutations, and in bacteria gained resistance genes, can also contribute).',
      },

      { t: 'part', title: 'Classification framework and diagnostic features' },
      {
        t: 'table',
        title: 'The three geological eras: the master frame for every era-match question',
        head: ['Era', 'Nickname', 'Dominant animals', 'Dominant plants'],
        rows: [
          ['Palaeozoic', '“Ancient life”', 'Marine invertebrates → fishes → amphibians → early reptiles', 'Ferns (pteridophytes); giant ferns formed coal (ferns and their allies dominated the Carboniferous coal forests; algae and bryophytes came earlier)'],
          ['Mesozoic', '“Age of Reptiles”', 'Dinosaurs; first birds & mammals appear', 'Gymnosperms (conifers, cycads)'],
          ['Cenozoic', '“Age of Mammals”', 'Mammals, birds; rise of humans', 'Angiosperms (flowering plants)'],
        ],
      },
      {
        t: 'p',
        html: 'The Cenozoic is itself split into epochs (oldest → youngest): <b>Palaeocene</b> → <b>Eocene</b> → <b>Oligocene</b> → <b>Miocene</b> → <b>Pliocene</b> → <b>Pleistocene</b> → <b>Holocene</b> (the present).',
      },
      {
        t: 'table',
        title: 'The animal timeline: the “firsts” you must order',
        head: ['Approx. time', 'Milestone'],
        rows: [
          ['~2000\u00a0mya (the book’s and NCERT’s value; the earliest cells are now dated to about 3.5 bya)', 'First <b>cellular</b> (single-celled) life appears'],
          ['(later)', 'Single-celled → <b>multicellular</b> organisms'],
          ['~500\u00a0mya', '<b>Invertebrates</b> become abundant'],
          ['~500–350\u00a0mya (the book gives ~350 mya, as NCERT does; the oldest jawless fishes are about 500 mya)', '<b>Jawless fishes</b> evolve'],
          ['~350\u00a0mya (about 375–365 mya in current work)', '<b>Lobefins</b> (stout-finned fish) move onto land → first <b>amphibians</b>'],
          ['(later)', 'Amphibians → <b>reptiles</b> (thick-shelled eggs, freed from water)'],
          ['~200–65\u00a0mya', '<b>Dinosaurs</b> dominate the land'],
          ['~65\u00a0mya', 'Dinosaurs go <b>extinct</b> → <b>mammals radiate</b>'],
          ['–', 'Birds evolve from reptiles (<i>Archaeopteryx</i> = connecting link)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Core terms:</b><br>• <b>Lobefins (Coelacanth / <i>Latimeria</i>):</b> stout-finned fishes whose descendants gave rise to amphibians; <i>Latimeria</i> was thought extinct and rediscovered alive in 1938, a “living fossil.”<br>• <b>Mass extinction:</b> the relatively sudden disappearance of many species; the most famous removed the dinosaurs ~65\u00a0mya.<br>• <b>Anthropogenic evolution:</b> evolution by natural selection under human-imposed selection pressure (pesticides, antibiotics, pollution).',
      },
      {
        t: 'p',
        html: 'No SI units here. Time is in mya (million years ago); the deliverables are the <b>ordered timeline</b> and the <b>era table</b>.',
      },

      { t: 'part', title: 'Key conceptual frameworks' },
      { t: 'p', html: '<b>Framework A: the conquest of land (and why it happened in this order)</b>' },
      {
        t: 'p',
        html: 'Life started in water because water shields fragile cells from drying out and from harmful radiation. Moving to land demanded solving the <b>drying-out problem</b> at every step, which is exactly why the sequence runs as it does:<br>1. <b>Plants went first.</b> Land had to be “greened” before animals could feed there. Algae → mosses (bryophytes) → ferns (pteridophytes, the first true vascular land plants). The ferns’ golden age was the <b>Carboniferous period</b>, when vast swampy forests of giant tree-ferns and related plants covered the land; when these forests were buried and compressed over millions of years, they became the <b>coal deposits</b> we mine today, which is why the Carboniferous is nicknamed the “Coal Age.” The greening of the land by these early plants is what made animal life on land possible at all.<br>2. <b>Fishes → amphibians.</b> Lobefins with strong fins could haul themselves between drying pools; their descendants, the amphibians, still had to return to water to breed (their eggs lack a waterproof shell). <b>Why amphibians are “stuck near water”:</b> no shelled egg.<br>3. <b>Amphibians → reptiles.</b> The breakthrough was the <b>thick-shelled, water-retaining egg</b>, which could be laid on dry land. <b>Why this mattered:</b> it finally cut the cord to water and let vertebrates colonise the continents fully.',
      },
      { t: 'p', html: '<b>Framework B: extinction as opportunity (dinosaurs → mammals)</b>' },
      {
        t: 'p',
        html: 'For about 135 million years reptiles owned the land; mammals existed only as small, shrew-like creatures in the undergrowth. Around 65\u00a0mya the dinosaurs disappeared in a mass extinction (leading hypotheses: drastic climatic change and/or an asteroid impact). <b>Why this reshaped the world:</b> with the dominant competitors gone, the surviving mammals faced a planet full of <b>empty niches</b> and underwent <b>adaptive radiation</b>, diversifying into grazers, predators, fliers (bats), and even returning to water (whales, dolphins). Key mammalian advantages, such as (in most mammals) being <b>viviparous</b> (protecting the developing young inside the body) and greater intelligence, helped them seize the opportunity. Birds, meanwhile, arose from a reptilian line, with <i>Archaeopteryx</i> preserving the half-reptile, half-bird transition.',
      },
      {
        t: 'p',
        html: 'Two points sharpen this story. First, the ~65\u00a0mya event was <b>not the only</b> mass extinction: the end of the Palaeozoic saw the <b>Permian extinction</b>, the largest in Earth’s history, which wiped out a huge fraction of marine and land species and cleared the way for the reptilian Mesozoic. Mass extinctions, then, are a recurring feature of the record, each one resetting the board and triggering fresh radiations among the survivors. Second, the reptiles’ own dominance was so complete that some lineages <b>returned to the water</b> as marine reptiles (the dolphin-shaped ichthyosaurs, around 200\u00a0mya), a reminder that evolution readily reverses habitat when the opportunity exists. Among land reptiles, pelycosaurs → therapsids → mammals, while thecodonts → dinosaurs.',
      },
      { t: 'fig', id: 'b12-06-fig-6.4' },
      { t: 'p', html: '<b>Framework C: plant evolution progression</b>' },
      {
        t: 'p',
        html: 'Plants climbed the same “independence from water” ladder: <b>Algae (aquatic)</b> → <b>Bryophytes</b> (mosses; still need water for fertilisation) → <b>Pteridophytes</b> (ferns; first vascular plants, dominant in the coal-forming Palaeozoic) → <b>Gymnosperms</b> (naked seeds: conifers, cycads; dominant in the Mesozoic) → <b>Angiosperms</b> (enclosed seeds, flowers & fruits; dominant in the Cenozoic and today). Seed ferns are thought to have evolved from <b>progymnosperms</b>.',
      },
      { t: 'p', html: '<b>Framework D: evolution in real time (anthropogenic action)</b>' },
      {
        t: 'p',
        html: 'These are not ancient fossils but living proof that natural selection works now:<br>• <b>Industrial melanism (peppered moth, <i>Biston betularia</i>):</b> before industrialisation, pale moths were camouflaged on lichen-covered bark and dark moths were eaten by birds. Soot killed the lichens and blackened the bark; now the <b>dark</b> form was camouflaged and the pale form was eaten, so the dark form became dominant within decades. The selection pressure (predation) stayed the same; the environment flipped which variant it favoured.<br>• <b>DDT-resistant mosquitoes, antibiotic-resistant bacteria, herbicide-resistant weeds:</b> heavy human use of a chemical kills susceptible individuals and spares the few resistant variants already present (mostly pre-existing; new mutations and, in bacteria, gained resistance genes can also contribute), which then multiply. <b>Why this is a clear demonstration of natural selection:</b> we supply the selection pressure, set the clock, and watch allele frequencies shift in years, not eons.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'Trace the evolutionary path by which vertebrates moved from water to fully terrestrial life, naming the key adaptation that finally freed reptiles from water.',
        steps: [
          '<b>Model answer.</b> Lobefin fishes with strong fins could move between water and land; their descendants, the <b>amphibians</b>, lived in both but still had to <b>return to water to breed</b> (their eggs lack a protective shell).<br>Amphibians gave rise to <b>reptiles</b>, whose key innovation was the <b>thick-shelled, water-retaining egg</b> that could be laid on dry land, finally freeing vertebrates from dependence on water for reproduction.',
          '<b>Why it scores:</b> it gives the correct order (fish → amphibian → reptile) and names the shelled egg as the decisive adaptation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · single best option',
        q: 'Which group of plants was dominant during the Mesozoic era, the “Age of Reptiles”?<br><b>(a)</b> Angiosperms<br><b>(b)</b> Gymnosperms<br><b>(c)</b> Bryophytes<br><b>(d)</b> Algae',
        steps: [
          '<b>Fast reasoning:</b> pair each era with its plants: Palaeozoic = ferns, <b>Mesozoic = gymnosperms (conifers/cycads)</b>, Cenozoic = angiosperms. Angiosperms (a) are minor until the late Mesozoic and dominant only in the Cenozoic; bryophytes (c) and algae (d) are far earlier and are not the dominant plants of the Mesozoic.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET · sequence ordering',
        q: 'Arrange the following animal groups in their correct order of evolutionary appearance, earliest first:<br>I. Amphibians II. Jawless fishes III. Reptiles IV. Invertebrates<br><b>(a)</b> IV → II → I → III<br><b>(b)</b> II → IV → I → III<br><b>(c)</b> IV → I → II → III<br><b>(d)</b> IV → II → III → I',
        steps: [
          '<b>Reasoning:</b><br>• Invertebrates (IV) come before any vertebrate → IV first, eliminating (b).<br>• Among vertebrates the order is fishes → amphibians → reptiles, i.e. II → I → III.<br>• Only option (a) places them as <b>IV → II → I → III</b>. Option (c) wrongly puts amphibians before fishes; (d) wrongly puts reptiles before amphibians.',
          '<b>Trap:</b> students who memorise “fish, frog, lizard” but forget invertebrates come first mis-slot group IV.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · assertion–reason',
        q: '<b>Assertion (A):</b> Mammals underwent rapid diversification after the extinction of the dinosaurs. <b>Reason (R):</b> Mammals evolved directly from the dinosaurs once the dinosaurs disappeared.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true but R is false<br><b>(d)</b> A is false but R is true',
        steps: [
          '<b>Reasoning:</b> mammals did radiate rapidly after ~65\u00a0mya (A is true), but <b>not</b> because they came from dinosaurs. Mammals already existed (as small, shrew-like forms) alongside the dinosaurs and merely radiated into the niches the dinosaurs vacated (R is false). A true assertion with a false causal reason → option <b>(c)</b>.',
          '<b>Trap:</b> (a) catches students who assume “after the dinosaurs” means “from the dinosaurs”: the same descent-vs-coexistence error as in human evolution.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the era and the dominant plant group associated with the formation of large coal deposits.',
            a: 'Palaeozoic era; pteridophytes (giant ferns and their allies).',
          },
          {
            q: '[CUET] <i>Latimeria</i> (the coelacanth) is significant in evolution because it is a living example of which fish group, ancestral to amphibians?',
            a: 'Lobefins (lobe-finned fishes).',
          },
          {
            q: '[NEET] Which one of the following evolved earliest?<br><b>(a)</b> Birds<br><b>(b)</b> Reptiles<br><b>(c)</b> Amphibians<br><b>(d)</b> Jawless fishes',
            a: '(d) jawless fishes.',
          },
          {
            q: '[NEET] Industrial melanism in the peppered moth is best described as:<br><b>(a)</b> mutation creating dark moths on demand<br><b>(b)</b> natural selection favouring a pre-existing dark variant<br><b>(c)</b> inheritance of soot-darkened wings<br><b>(d)</b> genetic drift in a small population',
            a: '(b).',
          },
          {
            q: '[NEET High-Difficulty] Explain why the heavy, repeated use of a single antibiotic typically leads to a resistant bacterial population, and identify which evolutionary process this demonstrates.',
            a: 'The antibiotic kills susceptible bacteria but spares the rare resistant variants already present (new mutations or gained resistance genes can also add), which then reproduce and dominate the population: a textbook case of <b>natural selection</b> (anthropogenic evolution) acting on existing variation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct sequence of plant evolution is:',
        opts: [
          {
            label: 'Algae → Gymnosperms → Bryophytes → Angiosperms',
            nudge: '<b>(a)</b> jumps to gymnosperms before bryophytes.',
          },
          { label: 'Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms', nudge: null },
          {
            label: 'Bryophytes → Algae → Pteridophytes → Angiosperms → Gymnosperms',
            nudge: '<b>(c)</b> and <b>(d)</b> place algae after land plants, reversing the water-to-land order.',
          },
          {
            label: 'Pteridophytes → Bryophytes → Algae → Gymnosperms → Angiosperms',
            nudge: '<b>(c)</b> and <b>(d)</b> place algae after land plants, reversing the water-to-land order.',
          },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. The progression is aquatic algae → mosses → ferns → naked-seed plants → flowering plants.',
      },
      {
        t: 'mcq',
        q: 'Birds are believed to have evolved from:',
        opts: [
          { label: 'amphibians', nudge: '<b>(a)</b> amphibians gave rise to reptiles, not directly to birds.' },
          { label: 'mammals', nudge: '<b>(b)</b> mammals are a separate reptilian offshoot.' },
          { label: 'reptiles', nudge: null },
          { label: 'lobefins', nudge: '<b>(d)</b> lobefins are fish ancestors of amphibians, far earlier.' },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. <i>Archaeopteryx</i>, with reptilian teeth and tail plus feathers and wings, marks the reptile-to-bird transition.',
      },
      {
        t: 'mcq',
        q: 'The sudden disappearance of dinosaurs around 65 million years ago is most directly significant because it:',
        opts: [
          { label: 'caused amphibians to evolve', nudge: '<b>(a)</b> amphibians predate dinosaurs.' },
          { label: 'opened vacant niches that allowed mammals to radiate', nudge: null },
          { label: 'created the first reptiles', nudge: '<b>(c)</b> reptiles existed long before.' },
          { label: 'ended the Palaeozoic era', nudge: '<b>(d)</b> the dinosaur extinction ended the <b>Mesozoic</b>, not the Palaeozoic.' },
        ],
        correct: 1,
        solution: 'Correct: <b>(b)</b>. With dominant competitors gone, mammals diversified into the empty niches.',
      },
      {
        t: 'mcq',
        q: 'DDT-resistant mosquito populations arise because:',
        opts: [
          {
            label: 'DDT teaches mosquitoes to resist it',
            nudge: '<b>(a)</b> and <b>(d)</b> are Lamarckian errors (organisms don’t “learn” or pass on acquired traits).',
          },
          {
            label: 'DDT induces directed mutations for resistance',
            nudge: '<b>(b)</b> wrongly assumes mutations are directed toward a need: mutations are random, selection is what is directional.',
          },
          { label: 'DDT selectively spares pre-existing resistant individuals, which then multiply', nudge: null },
          {
            label: 'mosquitoes inherit resistance acquired during their lifetime',
            nudge: '<b>(a)</b> and <b>(d)</b> are Lamarckian errors (organisms don’t “learn” or pass on acquired traits).',
          },
        ],
        correct: 2,
        solution: 'Correct: <b>(c)</b>. Resistance is mostly present already at low frequency; DDT removes the susceptible majority, letting resistant survivors dominate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the water-to-land order.</b> Plants colonised land before animals; among animals it is fishes → amphibians → reptiles → birds/mammals. Never put a land group’s first appearance before its aquatic ancestor’s.',
          '<b>“Mammals evolved from dinosaurs.”</b> They coexisted with dinosaurs and radiated after them. (Birds, though, did evolve from reptiles.)',
          '<b>Thinking resistance/melanism is “created on demand.”</b> Selection acts mostly on variation already present (new mutations and gained genes can add to it); the environment chooses, it does not manufacture on demand.',
          '<b>Confusing the eras.</b> Lock the triplet: Palaeozoic = ferns/fishes/amphibians; Mesozoic = gymnosperms/dinosaurs; Cenozoic = angiosperms/mammals.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (any sequence question):</b> anchor to two unbreakable rules: (1) aquatic before terrestrial, and (2) invertebrates → fishes → amphibians → reptiles → birds and mammals (the last two are not ordered). Almost every NEET ordering option violates one of these (the book’s estimate from past papers, not official figures); eliminate those first and the answer falls out without recalling exact dates.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Animal timeline</b>',
            note: 'first cell (~2000\u00a0mya in the book; older in current work) → invertebrates (~500\u00a0mya) → jawless fishes (~350\u00a0mya in the book; about 500 mya in current work) → amphibians → reptiles (dinosaurs) → birds & mammals.',
          },
          {
            f: '<b>Eras</b>',
            note: 'Palaeozoic (ferns, fishes, amphibians) · Mesozoic (gymnosperms, dinosaurs, first birds/mammals) · Cenozoic (angiosperms, mammals, humans).',
          },
          { f: '<b>Plant ladder</b>', note: 'algae → bryophytes → pteridophytes → gymnosperms → angiosperms.' },
          {
            f: '<b>Key transitions</b>',
            note: 'lobefins → amphibians; shelled egg frees reptiles from water; reptiles → birds (<i>Archaeopteryx</i>); dinosaur extinction (~65\u00a0mya) → mammalian adaptive radiation.',
          },
          { f: '<b>Living fossil</b>', note: '<i>Latimeria</i> (coelacanth, lobefin), rediscovered 1938.' },
          {
            f: '<b>Anthropogenic evolution (real-time natural selection)</b>',
            note: 'industrial melanism (<i>Biston betularia</i>), DDT-resistant mosquitoes, antibiotic-resistant bacteria, herbicide-resistant weeds.',
          },
        ],
        aids: [
          '“In Fresh Air Reptiles Breathe Mostly” = Invertebrates, Fishes, Amphibians, Reptiles, Birds, Mammals. (Birds and mammals both arise from reptiles; mammals appear first in the fossil record, but exams do not order them.)',
          'Eras “Pay Money Cash” = Palaeozoic → Mesozoic → Cenozoic.',
          'Plants “All Boys Play Gully Alone” = Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms.',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 331–334 ─────────────────────────
  {
    n: 'A',
    title: 'Hardy–Weinberg Algebra: Solving for p, q, and Testing Equilibrium',
    extra: true,
    kalam: 'When the problem gives actual numbers of each genotype, first count the total number of A and a alleles, then compute allele frequencies.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter provides a thorough qualitative foundation in evolutionary theory, geological timelines, and human evolution. Three quantitative and mechanistic patterns are often under-practised but appear in NEET’s higher-difficulty questions and CUET’s applied sections (the book’s estimate from past papers, not official figures): solving the Hardy–Weinberg equation algebraically to find missing frequencies and test for equilibrium, distinguishing the two modes of speciation with their isolating mechanisms, and the molecular-clock concept that links DNA sequence divergence to geological time. Each topic below adds one examinable layer, and the last collects the question patterns.',
      },
      {
        t: 'p',
        html: 'The chapter gives the Hardy–Weinberg equations <i>p</i> + <i>q</i> = 1 and <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1 and shows how to find carrier frequency when the recessive phenotype count is given, and it compares observed with expected genotype counts in one worked question. This topic gives practice with three algebraic patterns: solving for <i>p</i> or <i>q</i> when only the dominant phenotype count is given (so that the recessive count must be found by subtraction), comparing observed genotype counts against expected values to detect whether evolution is occurring, and finding <i>q</i> from the heterozygote frequency.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Finding <i>p</i> and <i>q</i> from genotype counts.</b> When the problem gives actual numbers of each genotype (not fractions), first count the total number of A and a alleles, then compute allele frequencies:<br>• Total <i>A</i> alleles = 2 × (<i>AA</i>) + 1 × (<i>Aa</i>)<br>• Total <i>a</i> alleles = 1 × (<i>Aa</i>) + 2 × (<i>aa</i>)<br>• Total alleles = 2 × <i>N</i>, where <i>N</i> is the population size<br>• <i>p</i> = <frac><num>2(<i>AA</i>) + (<i>Aa</i>)</num><den>2<i>N</i></den></frac>; <i>q</i> = 1 − <i>p</i>',
      },
      {
        t: 'p',
        html: '<b>Testing Hardy–Weinberg equilibrium.</b> Once <i>p</i> and <i>q</i> are found from allele counts, calculate the expected genotype frequencies: expected <i>AA</i> = <i>p</i><sup>2</sup> × <i>N</i>, expected <i>Aa</i> = 2<i>pq</i> × <i>N</i>, expected <i>aa</i> = <i>q</i><sup>2</sup> × <i>N</i>. Compare observed counts to expected. A discrepancy larger than chance would give (a chi-square test with 1 degree of freedom judges this) means the population is not in equilibrium: at least one condition (large size, random mating, no mutation, no gene flow, no selection) is not met.',
      },
      {
        t: 'p',
        html: '<b>Finding <i>q</i> from the heterozygote frequency.</b> When the heterozygote frequency is given directly (not <i>q</i><sup>2</sup>), note that heterozygote frequency = 2<i>pq</i>. Since <i>p</i> = 1 − <i>q</i>:<br>2(1 − <i>q</i>)(<i>q</i>) = heterozygote frequency<br>This gives a quadratic equation in <i>q</i>.',
      },
      {
        t: 'p',
        html: '<b>Finding <i>p</i> and <i>q</i> when only the dominant phenotype count is given.</b> If <i>N</i> is the population size and only the dominant phenotype count (<i>AA</i> + <i>Aa</i>) is given, first find the recessive count by subtraction:<br>• Recessive count = <i>N</i> − (<i>AA</i> + <i>Aa</i>)<br>• <i>q</i><sup>2</sup> = fraction showing recessive trait = <frac><num><i>N</i> − (<i>AA</i> + <i>Aa</i>)</num><den><i>N</i></den></frac><br>• <i>q</i> = √(<i>q</i><sup>2</sup>); then <i>p</i> = 1 − <i>q</i><br>This is the entry-point move; once <i>p</i> is known, everything follows.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Finding <i>p</i> and <i>q</i> from Genotype Counts.</b> A population of 500 individuals has genotype counts: <i>AA</i> = 180, <i>Aa</i> = 210, <i>aa</i> = 110. Calculate the allele frequencies <i>p</i> and <i>q</i> and the expected genotype counts under Hardy–Weinberg equilibrium.',
        steps: [
          'Total alleles = 2 × 500 = 1000.<br>Total <i>A</i> alleles = 2(180) + 210 = 360 + 210 = 570.<br>Total <i>a</i> alleles = 210 + 2(110) = 210 + 220 = 430.',
          '<i>p</i> = <frac><num>570</num><den>1000</den></frac> = 0.57; <i>q</i> = <frac><num>430</num><den>1000</den></frac> = 0.43',
          'Expected genotype counts:<br>• <i>AA</i> (expected) = (0.57)<sup>2</sup> × 500 = 0.3249 × 500 = 162.45<br>• <i>Aa</i> (expected) = 2(0.57)(0.43) × 500 = 0.4902 × 500 = 245.10<br>• <i>aa</i> (expected) = (0.43)<sup>2</sup> × 500 = 0.1849 × 500 = 92.45',
          'Observed against expected: both homozygotes are more common than expected (<i>AA</i> 180 against 162.45, <i>aa</i> 110 against 92.45) and heterozygotes are fewer (210 against 245.10). A chi-square test, the sum of <frac><num>(O − E)<sup>2</sup></num><den>E</den></frac>, gives 1.90 + 5.03 + 3.33 = 10.26, above the 3.84 needed at 1 degree of freedom, so the population is not in Hardy–Weinberg equilibrium. A heterozygote deficit like this points to non-random mating or population structure, among other causes.',
        ],
        ans: '<i>p</i> = 0.57, <i>q</i> = 0.43; expected counts are <i>AA</i> = 162.45, <i>Aa</i> = 245.10, <i>aa</i> = 92.45.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Solving for <i>q</i> from Heterozygote Frequency.</b> In a population of 2000 individuals, 720 are heterozygous (<i>Aa</i>). Assuming Hardy–Weinberg equilibrium and taking the recessive allele to be the rarer one, find the allele frequencies.',
        steps: [
          '<b>Given:</b> heterozygote frequency = <frac><num>720</num><den>2000</den></frac> = 0.36 = 2<i>pq</i>.',
          '2(1 − <i>q</i>)(<i>q</i>) = 0.36 ⇒ 2<i>q</i> − 2<i>q</i><sup>2</sup> = 0.36<br>2<i>q</i><sup>2</sup> − 2<i>q</i> + 0.36 = 0 ⇒ <i>q</i><sup>2</sup> − <i>q</i> + 0.18 = 0',
          'Using the quadratic formula:<br><i>q</i> = <frac><num>1 ± √(1 − 4(0.18))</num><den>2</den></frac> = <frac><num>1 ± √(1 − 0.72)</num><den>2</den></frac> = <frac><num>1 ± √0.28</num><den>2</den></frac> = <frac><num>1 ± 0.529</num><den>2</den></frac>',
          '<i>q</i><sub>1</sub> = <frac><num>1 + 0.529</num><den>2</den></frac> = 0.7645; <i>q</i><sub>2</sub> = <frac><num>1 − 0.529</num><den>2</den></frac> = 0.2355',
          'Both roots are valid, because the heterozygote frequency alone cannot show which allele is recessive. We assume the recessive allele is the rarer one:<br><i>q</i> = 0.2355; <i>p</i> = 1 − 0.2355 = 0.7645',
        ],
        ans: '<i>q</i> ≈ 0.24, <i>p</i> ≈ 0.76.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Testing a Claim of Equilibrium.</b> A field study of 1000 plants records: <i>AA</i> = 490, <i>Aa</i> = 420, <i>aa</i> = 90. A researcher claims the population is in Hardy–Weinberg equilibrium. Test this claim.',
        steps: [
          '<b>Step 1:</b> calculate observed allele frequencies:<br><i>p</i> = <frac><num>2(490) + 420</num><den>2000</den></frac> = <frac><num>1400</num><den>2000</den></frac> = 0.70; <i>q</i> = 0.30',
          '<b>Step 2:</b> calculate expected genotype counts:<br><i>p</i><sup>2</sup> = (0.70)<sup>2</sup> = 0.49 ⇒ expected <i>AA</i> = 490<br>2<i>pq</i> = 2(0.70)(0.30) = 0.42 ⇒ expected <i>Aa</i> = 420<br><i>q</i><sup>2</sup> = (0.30)<sup>2</sup> = 0.09 ⇒ expected <i>aa</i> = 90',
          '<b>Step 3:</b> compare observed vs expected: Observed: <i>AA</i> = 490, <i>Aa</i> = 420, <i>aa</i> = 90. Expected: <i>AA</i> = 490, <i>Aa</i> = 420, <i>aa</i> = 90.',
          'The observed and expected values are identical; the population is in Hardy–Weinberg equilibrium at this locus in this sample, and no evolutionary force is detectable.',
        ],
        ans: 'Population is in Hardy–Weinberg equilibrium; observed equals expected at all three genotypes.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a population of 800 individuals, <i>AA</i> = 200, <i>Aa</i> = 400, <i>aa</i> = 200. Find the allele frequencies <i>p</i> and <i>q</i>.',
            a: 'Total <i>A</i> alleles = 2(200) + 400 = 800; total alleles = 1600; <i>p</i> = <frac><num>800</num><den>1600</den></frac> = 0.5; <i>q</i> = 0.5.',
          },
          {
            q: '[NEET] A population of 1000 individuals has 640 individuals showing the dominant phenotype. Assuming Hardy–Weinberg equilibrium, calculate the frequency of carriers (heterozygotes).',
            a: 'Recessive phenotype count = 1000 − 640 = 360; <i>q</i><sup>2</sup> = <frac><num>360</num><den>1000</den></frac> = 0.36; <i>q</i> = 0.6; <i>p</i> = 0.4; carriers = 2<i>pq</i> = 2(0.4)(0.6) = 0.48; number of carriers = 0.48 × 1000 = 480.',
          },
          {
            q: '[CUET] A population is at Hardy–Weinberg equilibrium and the heterozygote frequency is 0.42. Find the frequency of the recessive allele <i>q</i>, taking it to be the rarer allele (<i>q</i> < 0.5).',
            a: '2<i>pq</i> = 0.42 and <i>p</i> = 1 − <i>q</i>: 2<i>q</i>(1 − <i>q</i>) = 0.42; 2<i>q</i> − 2<i>q</i><sup>2</sup> = 0.42; <i>q</i><sup>2</sup> − <i>q</i> + 0.21 = 0; discriminant = 1 − 0.84 = 0.16; √0.16 = 0.4; <i>q</i> = <frac><num>1 ± 0.4</num><den>2</den></frac>; taking smaller value: <i>q</i> = 0.3.',
          },
          {
            q: '[NEET] Observed counts in a population of 600 are: <i>AA</i> = 186, <i>Aa</i> = 252, <i>aa</i> = 162. Calculate expected counts and state whether the population is in Hardy–Weinberg equilibrium.',
            a: '<i>p</i> = <frac><num>2(186) + 252</num><den>1200</den></frac> = <frac><num>624</num><den>1200</den></frac> = 0.52; <i>q</i> = 0.48. Expected: <i>AA</i> = 0.2704 × 600 = 162.24; <i>Aa</i> = 2(0.52)(0.48) × 600 = 299.52; <i>aa</i> = 0.2304 × 600 = 138.24. Both homozygotes exceed expectation (<i>AA</i> 186 against 162.24, <i>aa</i> 162 against 138.24) and heterozygotes fall short (252 against 299.52); chi-square = 3.48 + 7.54 + 4.08 = 15.10, above 3.84, so the population is NOT in equilibrium.',
          },
          {
            q: '[NEET High-Difficulty] In a large population, 49% of individuals are homozygous dominant and 42% are heterozygous. Find the allele frequencies <i>p</i> and <i>q</i>.',
            a: '<i>p</i><sup>2</sup> = 0.49 ⇒ <i>p</i> = 0.7; 2<i>pq</i> = 0.42 ⇒ 2(0.7)<i>q</i> = 0.42 ⇒ <i>q</i> = 0.3; check: <i>q</i><sup>2</sup> = 0.09 = 9% homozygous recessive (consistent). Answer: <i>p</i> = 0.7, <i>q</i> = 0.3.',
          },
        ],
      },
    ],
  },
];
