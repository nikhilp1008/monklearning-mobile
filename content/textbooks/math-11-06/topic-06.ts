import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 06: Inclusion–Exclusion and Onto Distributions, pp. 537–557
 * of the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word: the supplement's Subtopic 06. The supplement's heading "Chapter 6:
 * Permutations and Combinations — Supplement" (p. 537) is not copied; the
 * topic opens with its "Exam Relevance:" box as a part of its own (with the
 * paragraph printed after the box, before Section 1), then is split at its
 * Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet" (its box
 * title "SUBTOPIC 06 — 60-SECOND RECALL" is not copied). The cheat sheet ends
 * on p. 557; the "Additional Topics" part starts on p. 558.
 * Figure 6.10 (caption p. 540, drawn p. 541) stands after "This is the form
 * that solves exam questions…", where the caption is printed; Figure 6.11
 * (caption p. 552, drawn p. 553) is printed at the end of Example 4 and goes
 * on that example. The topic has no unnumbered drawing.
 * The stacked binomial (n over r in tall brackets) is <binom>; ⁿPᵣ is set with
 * an italic P, as the page prints it. Every fraction is stacked (<frac>); no
 * em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const FL = (a: string, b: string) => `⌊${fr(a, b)}⌋`;
const NN = (a: string, b: string) => `<i>N</i>(${a}, ${b})`;
const SS = (a: string, b: string) => `<i>S</i>(${a}, ${b})`;
const NEG = (e: string) => `(−1)<sup>${e}</sup>`;
const n = '<i>n</i>';
const k = '<i>k</i>';
const r = '<i>r</i>';
const j = '<i>j</i>';
const iv = '<i>i</i>';
const m = '<i>m</i>';
const c = '<i>c</i>';
const A = (s: string) => `<i>A</i><sub>${s}</sub>`;
const AB = (s: string) => `<i>A</i>̅<sub>${s}</sub>`;
const Ai = A(iv);
const Aj = A(j);
const Ak = A(k);
const Sr = `<i>S</i><sub>${r}</sub>`;
const S0 = '<i>S</i><sub>0</sub>';
const S1 = '<i>S</i><sub>1</sub>';
const S2 = '<i>S</i><sub>2</sub>';
const S3 = '<i>S</i><sub>3</sub>';
const Sn = `<i>S</i><sub>${n}</sub>`;
const SG1 = 'Σ<sub>1</sub>';
const SG2 = 'Σ<sub>2</sub>';
const SG3 = 'Σ<sub>3</sub>';
const US = '|<i>S</i>|';
const xi = `<i>x</i><sub>${iv}</sub>`;
const yi = `<i>y</i><sub>${iv}</sub>`;
const ci = `<i>c</i><sub>${iv}</sub>`;
const ai = `<i>a</i><sub>${iv}</sub>`;
const Dn = `<i>D</i><sub>${n}</sub>`;
const NNK = NN(n, k);
const SNK = SS(n, k);
const KN = `${k}<sup>${n}</sup>`;
const BIGU = `|⋃<sub>${iv}=1</sub><sup>${n}</sup> ${Ai}|`;
const BIGU_LOOSE = `|⋃ ${Ai}|`;
const ONTO = `${SUM(`${iv}=0`, k)}${NEG(iv)}${bn(k, iv)}(${k} − ${iv})<sup>${n}</sup>`;
const ONTO_R = `${SUM(`${r}=0`, k)}${NEG(r)}${bn(k, r)}(${k} − ${r})<sup>${n}</sup>`;
const NK1 = bn(`${n} − 1`, `${k} − 1`);
const NKK1 = bn(`${n} + ${k} − 1`, `${k} − 1`);
const IXR = `${A(`${iv}<sub>1</sub>`)} ∩ ⋯ ∩ ${A(`${iv}<sub>${r}</sub>`)}`;
const COMP = `|${AB('1')} ∩ ${AB('2')} ∩ ⋯ ∩ ${AB(n)}|`;
const SYM = `∑<sub>${r}≥0</sub>${NEG(r)}${bn(k, r)}${bn(`${n} − ${r}(${c} + 1) + ${k} − 1`, `${k} − 1`)}`;
const SET3 = '|<i>A</i> ∪ <i>B</i> ∪ <i>C</i>|';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const L_A = `${Ai} = the set of objects having property ${iv}`;
const L_SR = `${Sr} = the total of all ${r}-fold intersection sizes`;
const L_US = `${US} = the size of the universal set`;
const L_NSETS = `${n} = the number of sets`;
const L_N = `${n} = number of distinct objects (domain size)`;
const L_K = `${k} = number of distinct boxes (codomain size)`;
const L_NNK = `${NNK} = the number of onto distributions`;
const L_SNK = `${SNK} = the Stirling number of the second kind`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 537–557 ────────────────
  {
    n: '06',
    title: 'Inclusion–Exclusion and Onto Distributions',
    kalam: 'Inclusion–exclusion is the Addition Principle from Topic 01 with its safety catch removed.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards examines the two-set and three-set union formulas at 2–4 marks, usually as a survey or Venn-diagram question carried over from the Sets chapter ${ESTIMATE}. JEE Main turns the same tool into counting questions: how many integers up to <i>N</i> are divisible by at least one of two or three given numbers, how many arrangements avoid a list of forbidden patterns, how many integer solutions survive an upper bound on each variable ${ESTIMATE}. JEE Advanced pushes to the general ${n}-set statement and to its single most important application in this chapter: counting <b>onto</b> distributions of distinct objects into distinct boxes, equivalently the number of surjective functions, equivalently ${k}! ${SNK} where ${SNK} is a Stirling number of the second kind ${ESTIMATE}. NEET does not test mathematics.`,
      },
      {
        t: 'p',
        html: `Three earlier places in this chapter have pointed at this topic. Topic 01’s Key procedures and logical framework part, item 3.2, noted that if two “OR” piles overlap, “we would need to subtract the overlap (this repair is the inclusion–exclusion idea you will meet later).” Topic 01’s Common student pitfalls and pro-tips part called the same repair “the seed of inclusion–exclusion.” Topic 05’s Key procedures and logical framework part, item 3.5, used the full machine, without ever stating it, to derive the derangement formula ${Dn}. This topic states the tool properly, proves it, drills it, and then spends the second half on the one distribution case Topic 04 deliberately left open: <b>distinct</b> objects into <b>distinct</b> boxes with <b>no box empty</b>.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Counting a crowd by counting lists.</b> Picture the notice board outside a coaching centre in Kota on the morning the batch lists go up. Three lists are pinned: the Physics batch, the Chemistry batch, the Mathematics batch. The director wants one number: how many distinct students are enrolled in at least one subject. The registrar’s first instinct is to add the three list lengths. That answer is too big whenever a student is on more than one list, because a student taking both Physics and Chemistry has been counted twice, and a student taking all three has been counted three times.',
      },
      {
        t: 'p',
        html: 'So the registrar subtracts. For every pair of subjects, he subtracts the number of students on both lists. Now the double-counted students are fixed. But look at what happened to the all-three student: he was added three times (once per list) and subtracted three times (once per pair), so he now contributes zero. He has been erased. Add him back once, and every student, whether on one list, two lists or three, contributes exactly 1.<br>|<i>P</i> ∪ <i>C</i> ∪ <i>M</i>| = |<i>P</i>| + |<i>C</i>| + |<i>M</i>|<br>− |<i>P</i> ∩ <i>C</i>| − |<i>C</i> ∩ <i>M</i>| − |<i>M</i> ∩ <i>P</i>|<br>+ |<i>P</i> ∩ <i>C</i> ∩ <i>M</i>|.',
      },
      {
        t: 'p',
        html: `<b>That over-correct, then correct back, then correct the correction rhythm is the whole idea.</b> It does not stop at three. With ${n} lists you add the singles, subtract the pairs, add the triples, subtract the quadruples, and so on, with the sign flipping every level, until you reach the single ${n}-fold intersection. The alternating signs are not a mnemonic anyone had to invent; they are forced, and the CBSE board derivations and key procedures part shows exactly why by tracking one element through the bookkeeping.`,
      },
      {
        t: 'p',
        html: 'Think about it this way. Inclusion–exclusion is the Addition Principle from Topic 01 with its safety catch removed. The Addition Principle demands mutually exclusive piles. Real problems hand you overlapping piles and refuse to reorganise them. Inclusion–exclusion is the price you pay for adding anyway.',
      },
      {
        t: 'p',
        html: `<b>The complement form is the one you will actually use.</b> Almost every exam question is phrased as “how many objects have none of these properties” ${ESTIMATE}: how many integers up to 100 are divisible by none of 2, 3, 5; how many letters go into no correct envelope; how many functions miss no element of the codomain. If <i>S</i> is everything and ${Ai} is the set of objects having property ${iv}, then<br>(none of the properties) = ${US} − ${BIGU_LOOSE},<br>and expanding the union gives a clean alternating sum starting with ${US} itself. Topic 05’s Key procedures and logical framework part, item 3.5, ran exactly this computation for derangements without stating the principle behind it.`,
      },
      {
        t: 'p',
        html: `<b>Now the second half: why ${KN} is not enough.</b> Topic 04’s Key formulas and definitions part told you that ${n} distinct objects go into ${k} distinct boxes in ${KN} ways: each object independently picks a box. It also told you that ${n} <b>identical</b> objects go into ${k} distinct boxes with none empty in ${NK1} ways, by the give-one-to-everybody-first trick. What it never told you is the count when the objects are distinct <b>and</b> no box may be empty. That is not ${NK1}, and it is not ${KN}, and, critically, <b>the pre-allocation trick that worked for identical objects does not work here.</b>`,
      },
      {
        t: 'p',
        html: 'Here is why the trick collapses. Picture three ticket counters at Chhatrapati Shivaji Terminus and five distinguishable passengers, each of whom must be sent to some counter, with every counter required to serve at least one passenger. If the passengers were identical, you would seat one at each counter and freely place the remaining two: clean. But the passengers are distinguishable, so “seat one at each counter first” requires you to choose which passenger goes where, and the same final arrangement then gets built in several different ways, depending on which passenger you designated as the pre-allocated one. <b>Pre-allocation over-counts the moment the objects become distinguishable, because the pre-allocated object is not recoverable from the final arrangement.</b> The Worked examples part’s Speed Trap example computes the size of the damage exactly.',
      },
      {
        t: 'p',
        html: `The correct route is inclusion–exclusion, and it is the natural one. Start with all ${KN} placements. A placement is bad if some box is empty. Let ${Ai} be the set of placements that leave box ${iv} empty; then |${Ai}| = (${k} − 1)<sup>${n}</sup>, because every object now chooses from the remaining ${k} − 1 boxes. An intersection of ${r} of these sets is the set of placements avoiding ${r} named boxes, of size (${k} − ${r})<sup>${n}</sup>. The alternating sum does the rest.`,
      },
      {
        t: 'p',
        html: `<b>Where all of this fails.</b> Inclusion–exclusion needs every intersection size to be computable: if you cannot evaluate |${Ai} ∩ ${Aj}|, the formula is a true statement you cannot use. The onto count is non-zero only when ${n} ≥ ${k}; when ${n} < ${k} there are fewer objects than boxes and the count is honestly 0, which the formula produces on its own. And every result in this section assumes the boxes are <b>distinct</b>. Making them identical divides out an ordering, which is the Stirling-number view developed in the Key formulas and definitions part.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>The union formulas</b>' },
      {
        t: 'formula',
        kicker: 'Union of two sets',
        main: '|<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>|',
        legend: ['<i>A</i>, <i>B</i> = finite sets', '|<i>A</i>| = the number of elements of <i>A</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Union of three sets',
        main: `${SET3} = |<i>A</i>| + |<i>B</i>| + |<i>C</i>|<br>− |<i>A</i> ∩ <i>B</i>| − |<i>B</i> ∩ <i>C</i>| − |<i>C</i> ∩ <i>A</i>|<br>+ |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|`,
        legend: ['<i>A</i>, <i>B</i>, <i>C</i> = finite sets', '|<i>A</i>| = the number of elements of <i>A</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: `General ${n} sets (the statement to quote in an Advanced answer)`,
        main: `For finite sets ${A('1')}, ${A('2')}, …, ${A(n)}:<br>${BIGU} = ∑<sub>${iv}</sub> |${Ai}| − ∑<sub>${iv}<${j}</sub> |${Ai} ∩ ${Aj}| + ∑<sub>${iv}<${j}<${k}</sub> |${Ai} ∩ ${Aj} ∩ ${Ak}| − ⋯ + ${NEG(`${n}−1`)} |${A('1')} ∩ ${A('2')} ∩ ⋯ ∩ ${A(n)}|`,
        legend: [L_A, `${n} = the number of sets`],
        note: null,
      },
      {
        t: 'p',
        html: `Compactly, writing ${Sr} = ∑<sub>1≤${iv}<sub>1</sub><${iv}<sub>2</sub><⋯<${iv}<sub>${r}</sub>≤${n}</sub> |${IXR}| for the total of all ${r}-fold intersection sizes,`,
      },
      {
        t: 'formula',
        kicker: `General ${n} sets, compactly`,
        main: `${BIGU} = ${SUM(`${r}=1`, n)}${NEG(`${r}−1`)}${Sr}`,
        legend: [L_A, L_SR, L_NSETS],
        note: null,
      },
      {
        t: 'p',
        html: `• ${Ai}: the set of objects having property ${iv}; the properties may overlap freely.<br>• ${Sr}: the sum of the sizes of all ${bn(n, r)} intersections taken ${r} at a time. Set ${S0} = ${US}, the size of the universal set.<br>• The sum has exactly ${n} terms, and the final sign is ${NEG(`${n}−1`)}: positive when ${n} is odd, negative when ${n} is even.<br>• Validity: all sets must be finite. No disjointness is assumed; that is the entire point.`,
      },
      {
        t: 'formula',
        kicker: 'Complement (none of the properties)',
        main: `Inside a finite universal set <i>S</i>:<br>${COMP} = ${US} − ${BIGU}<br>= ${SUM(`${r}=0`, n)}${NEG(r)}${Sr}`,
        legend: [`${AB(iv)} = the complement of ${Ai} in <i>S</i>`, L_US, `${Sr} = the total of all ${r}-fold intersection sizes (${S0} = ${US})`, L_NSETS],
        note: null,
      },
      { t: 'p', html: `This is the form that solves exam questions. Note that it starts at ${r} = 0 with +${US}.` },
      { t: 'fig', id: 'm11-06-fig-6.10' },
      { t: 'p', html: `<b>Exactly-${r} and at-least-${r} counts</b>` },
      {
        t: 'p',
        html: `Using the same ${Sr} notation, the number of objects lying in <b>exactly</b> ${r} of the ${n} sets is`,
      },
      {
        t: 'formula',
        kicker: `Exactly-${r} count`,
        main: `<i>E</i><sub>${r}</sub> = ${SUM(`${j}=${r}`, n)}${NEG(`${j}−${r}`)}${bn(j, r)}<i>S</i><sub>${j}</sub>`,
        legend: [`<i>E</i><sub>${r}</sub> = the number of objects in exactly ${r} of the sets`, `<i>S</i><sub>${j}</sub> = the total of all ${j}-fold intersection sizes`, L_NSETS],
        note: null,
      },
      { t: 'p', html: `and the number lying in <b>at least</b> ${r} of them is` },
      {
        t: 'formula',
        kicker: `At-least-${r} count`,
        main: `<i>L</i><sub>${r}</sub> = ${SUM(`${j}=${r}`, n)}${NEG(`${j}−${r}`)}${bn(`${j} − 1`, `${r} − 1`)}<i>S</i><sub>${j}</sub>`,
        legend: [`<i>L</i><sub>${r}</sub> = the number of objects in at least ${r} of the sets`, `<i>S</i><sub>${j}</sub> = the total of all ${j}-fold intersection sizes`, L_NSETS],
        note: null,
      },
      {
        t: 'p',
        html: `For ${n} = 3 these, with the complement form, unwind into the six lines CBSE and JEE Main actually ask for ${ESTIMATE}. Write<br>${SG1} = |<i>A</i>| + |<i>B</i>| + |<i>C</i>|,<br>${SG2} = |<i>A</i> ∩ <i>B</i>| + |<i>B</i> ∩ <i>C</i>| + |<i>C</i> ∩ <i>A</i>|,<br>${SG3} = |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Requirement', 'Formula'],
        rows: [
          ['At least one of <i>A</i>, <i>B</i>, <i>C</i>', `${SG1} − ${SG2} + ${SG3}`],
          ['Exactly one of <i>A</i>, <i>B</i>, <i>C</i>', `${SG1} − 2${SG2} + 3${SG3}`],
          ['Exactly two of <i>A</i>, <i>B</i>, <i>C</i>', `${SG2} − 3${SG3}`],
          ['At least two of <i>A</i>, <i>B</i>, <i>C</i>', `${SG2} − 2${SG3}`],
          ['All three', SG3],
          ['None of <i>A</i>, <i>B</i>, <i>C</i>', `${US} − ${SG1} + ${SG2} − ${SG3}`],
        ],
      },
      { t: 'p', html: '<b>Onto distributions of distinct objects (surjections)</b>' },
      {
        t: 'p',
        html: `Let ${n} distinct objects be placed into ${k} <b>distinct</b> boxes with <b>no box empty</b>. Equivalently, count the onto (surjective) functions from a set of size ${n} to a set of size ${k}. The count is`,
      },
      {
        t: 'formula',
        kicker: 'Onto distributions of distinct objects (surjections)',
        main: `${NNK} = ${ONTO}<br>= ${KN} − ${bn(k, '1')}(${k} − 1)<sup>${n}</sup> + ${bn(k, '2')}(${k} − 2)<sup>${n}</sup> − ⋯ + ${NEG(`${k}−1`)}${bn(k, `${k} − 1`)} · 1<sup>${n}</sup>`,
        legend: [L_NNK, L_N, L_K],
        note: null,
      },
      {
        t: 'p',
        html: `• ${n}: number of distinct objects (domain size); ${k}: number of distinct boxes (codomain size).<br>• The ${iv} = ${k} term is ${NEG(k)}${bn(k, k)}0<sup>${n}</sup> = 0 for every ${n} ≥ 1, so in practice you stop at ${iv} = ${k} − 1.<br>• Validity and sanity-check: the formula is valid for all ${n}, ${k} ≥ 1 and automatically returns 0 whenever ${n} < ${k}. It returns ${k}! when ${n} = ${k}.<br>• Special cases worth memorising: ${NN(n, '1')} = 1, ${NN(n, '2')} = 2<sup>${n}</sup> − 2, ${NN(n, '3')} = 3<sup>${n}</sup> − 3 · 2<sup>${n}</sup> + 3.`,
      },
      {
        t: 'p',
        html: `<b>The Stirling-number view.</b> Define ${SNK}, the <b>Stirling number of the second kind</b>, as the number of ways to split a set of ${n} distinct objects into exactly ${k} non-empty <b>unlabelled</b> blocks. Then labelling the blocks, that is, deciding which block goes into which of the ${k} distinct boxes, multiplies by ${k}!:`,
      },
      {
        t: 'formula',
        kicker: 'The Stirling-number view',
        main: `${NNK} = ${k}! ${SNK}`,
        legend: [L_NNK, L_SNK, `${k}! = the number of ways to label the ${k} blocks`],
        note: null,
      },
      { t: 'p', html: `${SNK} obeys the recurrence` },
      {
        t: 'formula',
        kicker: `The recurrence for ${SNK}`,
        main: `${SNK} = ${SS(`${n} − 1`, `${k} − 1`)} + ${k} ${SS(`${n} − 1`, k)}<br>${SS(n, '1')} = ${SS(n, n)} = 1<br>${SNK} = 0 for ${k} > ${n}`,
        legend: [`${SNK} = the number of splits of ${n} distinct objects into ${k} non-empty unlabelled blocks`],
        note: null,
      },
      {
        t: 'p',
        html: `together with the closed forms ${SS(n, '2')} = 2<sup>${n}−1</sup> − 1 and ${SS(n, `${n} − 1`)} = ${bn(n, '2')}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['n \\ k', '1', '2', '3', '4', '5', '6'],
        rows: [
          ['1', '1'],
          ['2', '1', '1'],
          ['3', '1', '3', '1'],
          ['4', '1', '7', '6', '1'],
          ['5', '1', '15', '25', '10', '1'],
          ['6', '1', '31', '90', '65', '15', '1'],
        ],
      },
      {
        t: 'p',
        html: `The corresponding onto counts ${NNK} = ${k}! ${SNK} that appear most often in papers ${ESTIMATE}: ${NN('4', '3')} = 6 × 6 = 36, ${NN('5', '3')} = 6 × 25 = 150, ${NN('6', '3')} = 6 × 90 = 540, ${NN('5', '4')} = 24 × 10 = 240, ${NN('6', '4')} = 24 × 65 = 1560, ${NN('6', '2')} = 62, ${NN('7', '3')} = 6 × 301 = 1806.`,
      },
      {
        t: 'p',
        html: `Row sums of the Stirling table give the <b>Bell numbers</b> <i>B</i><sub>${n}</sub> = ${SUM(`${k}=1`, n)} ${SNK}, the number of ways to split ${n} distinct objects into any number of non-empty unlabelled blocks: <i>B</i><sub>1</sub> = 1, <i>B</i><sub>2</sub> = 2, <i>B</i><sub>3</sub> = 5, <i>B</i><sub>4</sub> = 15, <i>B</i><sub>5</sub> = 52, <i>B</i><sub>6</sub> = 203.`,
      },
      { t: 'p', html: '<b>The complete distribution table: connecting back to Topic 04</b>' },
      {
        t: 'p',
        html: `This table resolves the four basic “objects into boxes” questions in the chapter (no group sizes prescribed, no caps on a box). Read it as a two-by-two grid on are the objects distinguishable and are the boxes distinguishable, with the empty-allowed and no-empty columns side by side. Topic 04 supplied the top row and ${KN}; this topic supplies the rest.`,
      },
      {
        t: 'table',
        title: null,
        head: ['n objects', 'k boxes', 'Any box may be empty', 'No box empty'],
        rows: [
          ['Identical', 'Distinct', NKK1, NK1],
          ['Distinct', 'Distinct', KN, `${ONTO} =<br>${k}! ${SNK}`],
          ['Distinct', 'Identical', `${SUM(`${j}=1`, k)} ${SS(n, j)}`, SNK],
          ['Identical', 'Identical', `partitions of ${n} into at most ${k} parts`, `partitions of ${n} into exactly ${k} parts`],
        ],
      },
      {
        t: 'p',
        html: `Notes on the table. The chapter’s ${NKK1} and ${NK1} are exactly the stars-and-bars pair in Topic 04’s Key formulas and definitions part, written here with ${bn(n, r)} in place of the <sup>${n}</sup><i>C</i><sub>${r}</sub> notation used there; the two notations mean the same thing. The bottom row has no closed formula at this level: for the small values an exam uses, list the partitions by hand. For instance, 6 identical balls into 3 identical boxes with none empty means partitions of 6 into exactly 3 parts: 4+1+1, 3+2+1, 2+2+2, so the answer is 3.`,
      },
      {
        t: 'p',
        html: `<b>Sanity identity linking the two columns.</b> Every one of the ${KN} unrestricted placements of distinct objects into distinct boxes uses exactly ${j} of the boxes for some ${j} between 1 and ${k}, and the ${j} used boxes can be chosen in ${bn(k, j)} ways:`,
      },
      {
        t: 'formula',
        kicker: 'Sanity identity linking the two columns',
        main: `${KN} = ${SUM(`${j}=1`, k)}${bn(k, j)}${NN(n, j)}`,
        legend: [L_N, L_K, `${j} = the number of boxes actually used`, `${NN(n, j)} = the number of onto placements into ${j} boxes`],
        note: null,
      },
      { t: 'p', html: 'Use it as a check on every onto computation you perform: Example 4 does exactly that.' },
      { t: 'p', html: '<b>Upper bounds on integer solutions</b>' },
      {
        t: 'p',
        html: `Topic 04’s Key procedures and logical framework part, item 3.2, gave the pre-allocation move for lower bounds and remarked that it “works for any bounds, not just 1.” Read precisely, that means any <b>lower</b> bound: for ${xi} ≥ ${ai}, substitute ${yi} = ${xi} − ${ai} ≥ 0 and the problem becomes an unrestricted stars-and-bars count. <b>Pre-allocation cannot impose an upper bound</b>, because there is no substitution that turns ${xi} ≤ ${ci} into an unconstrained variable. Upper bounds call for inclusion–exclusion.`,
      },
      {
        t: 'p',
        html: `For the number of non-negative integer solutions of<br><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯ + <i>x</i><sub>${k}</sub> = ${n}, ${xi} ≤ ${ci} for each ${iv},<br>let ${Ai} be the set of solutions violating the ${iv}-th bound, i.e. with ${xi} ≥ ${ci} + 1. Pre-allocating ${ci} + 1 units to ${xi} shows<br>|${Ai}| = ${bn(`${n} − (${ci} + 1) + ${k} − 1`, `${k} − 1`)},<br>and more generally an ${r}-fold intersection removes ∑(${ci} + 1) units over the chosen indices. Hence`,
      },
      {
        t: 'formula',
        kicker: 'Upper bounds on integer solutions',
        main: `#{solutions} = ${SUM(`${r}=0`, k)}${NEG(r)}<br>∑<sub>|<i>T</i>|=${r}</sub> ${bn(`${n} − ∑<sub>${iv}∈<i>T</i></sub>(${ci} + 1) + ${k} − 1`, `${k} − 1`)}`,
        legend: [
          `${ci} = the upper bound on ${xi}`,
          `${xi} = the ${iv}-th variable`,
          `<i>T</i> = a set of ${r} violated indices (kept only while ${n} − ∑<sub>${iv}∈<i>T</i></sub>(${ci} + 1) ≥ 0)`,
          `${k} = the number of variables`,
          `${n} = the target sum`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `keeping only those index sets <i>T</i> for which the leftover total ${n} − ∑<sub>${iv}∈<i>T</i></sub>(${ci} + 1) is still non-negative, and dropping every other term. In the common symmetric case <i>c</i><sub>1</sub> = ⋯ = <i>c</i><sub>${k}</sub> = ${c} this collapses to`,
      },
      {
        t: 'formula',
        kicker: 'Upper bounds: the common symmetric case',
        main: SYM,
        legend: [`${c} = the common upper bound`, `${r} = the number of violated caps (only while ${r}(${c} + 1) ≤ ${n})`, `${k} = the number of variables`, `${n} = the target sum`],
        note: null,
      },
      {
        t: 'p',
        html: `• Validity: the substitution <i>x</i>′<sub>${iv}</sub> = ${xi} − (${ci} + 1) is a bijection onto non-negative solutions of a smaller equation, so each |${Ai}| is exact.<br>• Practical note: the sum terminates quickly. Only those ${r} with ${r}(${c} + 1) ≤ ${n} contribute anything, and in most exam problems that means ${r} = 0 and ${r} = 1 only.<br>• For lower and upper bounds together, clear the lower bounds first by pre-allocation, then apply this formula to what is left.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: The two-set and three-set union formulas</b>' },
      { t: 'p', html: '<b>Claim.</b> For finite sets, |<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>|.' },
      {
        t: 'p',
        html: '1. Split <i>A</i> ∪ <i>B</i> into three pairwise disjoint pieces: the elements in <i>A</i> only, the elements in <i>B</i> only, and the elements in both. <b>Reason:</b> every element of the union is in at least one set, so exactly one of the three descriptions applies to it.',
      },
      {
        t: 'p',
        html: '2. Write <i>a</i>, <i>b</i>, <i>c</i> for the sizes of those three pieces. Then |<i>A</i> ∪ <i>B</i>| = <i>a</i> + <i>b</i> + <i>c</i> by the Addition Principle (Topic 01’s Key formulas and definitions part), which is legitimate because the pieces are disjoint.',
      },
      {
        t: 'p',
        html: '3. Observe |<i>A</i>| = <i>a</i> + <i>c</i> and |<i>B</i>| = <i>b</i> + <i>c</i>. <b>Reason:</b> <i>A</i> consists of the <i>A</i>-only piece together with the shared piece, and similarly for <i>B</i>.',
      },
      {
        t: 'p',
        html: '4. Therefore<br>|<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>|<br>= (<i>a</i> + <i>c</i>) + (<i>b</i> + <i>c</i>) − <i>c</i><br>= <i>a</i> + <i>b</i> + <i>c</i> = |<i>A</i> ∪ <i>B</i>|. ■',
      },
      {
        t: 'p',
        html: `<b>Claim.</b> ${SET3} = ${SG1} − ${SG2} + ${SG3} in the notation of the Key formulas and definitions part.`,
      },
      {
        t: 'p',
        html: `1. Apply the two-set result with the sets <i>A</i> ∪ <i>B</i> and <i>C</i>:<br>${SET3}<br>= |<i>A</i> ∪ <i>B</i>| + |<i>C</i>| − |(<i>A</i> ∪ <i>B</i>) ∩ <i>C</i>|.`,
      },
      { t: 'p', html: '2. Expand |<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>| by the two-set result again.' },
      {
        t: 'p',
        html: '3. Distribute the intersection: (<i>A</i> ∪ <i>B</i>) ∩ <i>C</i> = (<i>A</i> ∩ <i>C</i>) ∪ (<i>B</i> ∩ <i>C</i>). <b>Reason:</b> an element is in the left side exactly when it is in <i>C</i> and in at least one of <i>A</i>, <i>B</i>.',
      },
      {
        t: 'p',
        html: '4. Apply the two-set result a third time to that union:<br>|(<i>A</i> ∩ <i>C</i>) ∪ (<i>B</i> ∩ <i>C</i>)|<br>= |<i>A</i> ∩ <i>C</i>| + |<i>B</i> ∩ <i>C</i>| − |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|,<br>using (<i>A</i> ∩ <i>C</i>) ∩ (<i>B</i> ∩ <i>C</i>) = <i>A</i> ∩ <i>B</i> ∩ <i>C</i>.',
      },
      {
        t: 'p',
        html: `5. Substitute steps 2 and 4 into step 1 and collect terms:<br>${SET3} = |<i>A</i>| + |<i>B</i>| + |<i>C</i>|<br>− |<i>A</i> ∩ <i>B</i>| − |<i>B</i> ∩ <i>C</i>| − |<i>C</i> ∩ <i>A</i>|<br>+ |<i>A</i> ∩ <i>B</i> ∩ <i>C</i>|. ■`,
      },
      { t: 'p', html: `<b>Derivation: The general ${n}-set principle (the counting-ledger proof)</b>` },
      {
        t: 'p',
        html: `<b>Claim.</b> ${BIGU} = ${SUM(`${r}=1`, n)}${NEG(`${r}−1`)}${Sr}.<br>The proof strategy is to show that the right-hand side counts every element of the union exactly once and every other element exactly zero times.`,
      },
      {
        t: 'p',
        html: `1. Fix any element <i>x</i> of the universal set, and let ${m} be the number of the sets ${A('1')}, …, ${A(n)} that contain <i>x</i>. <b>Reason:</b> the contribution of <i>x</i> to every term depends only on ${m}, not on which sets they are.`,
      },
      {
        t: 'p',
        html: `2. Suppose first that ${m} = 0. Then <i>x</i> lies in no ${Ai}, hence in no intersection, hence contributes 0 to every ${Sr} and 0 to the total. It is also not in the union. The two sides agree on <i>x</i>.`,
      },
      {
        t: 'p',
        html: `3. Now suppose ${m} ≥ 1. The element <i>x</i> lies in an ${r}-fold intersection ${IXR} precisely when all ${r} chosen indices come from the ${m} sets containing <i>x</i>. There are ${bn(m, r)} such choices, so <i>x</i> contributes exactly ${bn(m, r)} to ${Sr}.`,
      },
      {
        t: 'p',
        html: `4. Hence the total contribution of <i>x</i> to the right-hand side is<br>${SUM(`${r}=1`, n)}${NEG(`${r}−1`)}${bn(m, r)} = ${SUM(`${r}=1`, m)}${NEG(`${r}−1`)}${bn(m, r)},<br>since ${bn(m, r)} = 0 for ${r} > ${m}.`,
      },
      {
        t: 'p',
        html: `5. By the Binomial Theorem, ${SUM(`${r}=0`, m)}${NEG(r)}${bn(m, r)} = (1 − 1)<sup>${m}</sup> = 0 for ${m} ≥ 1. Separating the ${r} = 0 term ${bn(m, '0')} = 1 gives ${SUM(`${r}=1`, m)}${NEG(r)}${bn(m, r)} = −1, and multiplying by −1 gives<br>${SUM(`${r}=1`, m)}${NEG(`${r}−1`)}${bn(m, r)} = 1.`,
      },
      {
        t: 'p',
        html: `6. So every element with ${m} ≥ 1, that is, every element of the union, contributes exactly 1, and every other element contributes 0. The right-hand side therefore equals |${A('1')} ∪ ⋯ ∪ ${A(n)}|. ■`,
      },
      {
        t: 'p',
        html: `Step 5 is where the alternating signs earn their keep: they are precisely what makes the binomial ledger telescope to 1 for every value of ${m} at once. Verify the pattern by hand for ${m} = 3: the element is added 3 times, subtracted 3 times, added once, for a net 3 − 3 + 1 = 1.`,
      },
      { t: 'p', html: '<b>Derivation: The onto-distribution formula</b>' },
      {
        t: 'p',
        html: `<b>Claim.</b> The number of ways to place ${n} distinct objects into ${k} distinct boxes leaving no box empty is ${NNK} = ${ONTO}.`,
      },
      {
        t: 'p',
        html: `1. Let <i>S</i> be the set of all placements with no restriction. Each of the ${n} objects independently chooses one of ${k} boxes, so ${US} = ${KN} by the Fundamental Principle of Counting (Topic 01’s Key formulas and definitions part).`,
      },
      {
        t: 'p',
        html: `2. For each box ${iv}, let ${Ai} be the set of placements in which box ${iv} receives nothing. A placement is bad exactly when it lies in ${A('1')} ∪ ⋯ ∪ ${A(k)}, and good exactly when it lies in none of them.`,
      },
      {
        t: 'p',
        html: `3. Compute |${Ai}|. If box ${iv} is barred, every object chooses among the remaining ${k} − 1 boxes, so |${Ai}| = (${k} − 1)<sup>${n}</sup>. There are ${bn(k, '1')} such sets.`,
      },
      {
        t: 'p',
        html: `4. Compute a general ${r}-fold intersection. If ${r} named boxes are all barred, every object chooses among the remaining ${k} − ${r} boxes, giving (${k} − ${r})<sup>${n}</sup> placements. The size depends only on ${r}, and there are ${bn(k, r)} choices of which boxes to bar, so ${Sr} = ${bn(k, r)}(${k} − ${r})<sup>${n}</sup>.`,
      },
      {
        t: 'p',
        html: `5. Apply the complement form of inclusion–exclusion:<br>${NNK} = ${SUM(`${r}=0`, k)}${NEG(r)}${Sr}<br>= ${ONTO_R}. ■`,
      },
      {
        t: 'p',
        html: `<b>Two immediate checks.</b> Put ${k} = 2: ${NN(n, '2')} = 2<sup>${n}</sup> − 2 · 1<sup>${n}</sup> + 0 = 2<sup>${n}</sup> − 2, which is right by direct reasoning: every placement except the two that dump everything into a single box. Put ${n} = 2, ${k} = 3: 9 − 3 · 4 + 3 · 1 − 0 = 0, correct, since two objects cannot occupy three boxes without leaving one empty.`,
      },
      { t: 'p', html: `<b>Derivation: Why ${NNK} = ${k}! ${SNK}</b>` },
      {
        t: 'p',
        html: `1. A placement with no box empty determines a splitting of the ${n} objects into ${k} non-empty groups (the contents of the boxes) together with an assignment of those groups to the ${k} labelled boxes.`,
      },
      {
        t: 'p',
        html: `2. Conversely, given any splitting into ${k} non-empty unlabelled blocks, each of the ${k}! bijections from blocks to boxes produces a different placement, and every placement arises exactly once this way. <b>Reason:</b> the boxes are distinguishable, so swapping the contents of two boxes genuinely changes the placement, and the blocks are non-empty and pairwise disjoint, so no two bijections give the same result.`,
      },
      {
        t: 'p',
        html: `3. By the Multiplication Principle, ${NNK} = ${SNK} × ${k}!, where ${SNK} counts the splittings. ■`,
      },
      {
        t: 'p',
        html: `<b>The recurrence for ${SNK}, proved the same way.</b> Focus on object number ${n}. Either it sits alone in a block of its own, in which case the other ${n} − 1 objects form the remaining ${k} − 1 blocks in ${SS(`${n} − 1`, `${k} − 1`)} ways; or it joins a block containing other objects, in which case the other ${n} − 1 objects first form all ${k} blocks in ${SS(`${n} − 1`, k)} ways and object ${n} then picks one of those ${k} blocks to join. The two cases are mutually exclusive and exhaustive, so by the Addition Principle ${SNK} = ${SS(`${n} − 1`, `${k} − 1`)} + ${k} ${SS(`${n} − 1`, k)}.`,
      },
      { t: 'p', html: '<b>Derivation: Derangements, revisited as one line of this machine</b>' },
      {
        t: 'p',
        html: `Topic 05’s Key procedures and logical framework part, item 3.5, derived the derangement count by inclusion–exclusion without stating the principle. It is the complement form with <i>S</i> = all ${n}! permutations and ${Ai} = {permutations fixing object ${iv}}. Fixing ${r} named objects leaves the other ${n} − ${r} free, so |${IXR}| = (${n} − ${r})! and ${Sr} = ${bn(n, r)}(${n} − ${r})!. Therefore<br>${Dn} = ${SUM(`${r}=0`, n)}${NEG(r)}${bn(n, r)}(${n} − ${r})!<br>= ${SUM(`${r}=0`, n)}${NEG(r)}${fr(`${n}!`, `${r}!`)}<br>= ${n}! ${SUM(`${r}=0`, n)}${fr(NEG(r), `${r}!`)}.`,
      },
      {
        t: 'p',
        html: `Notice that this is structurally identical to the onto derivation: same complement form, same ${bn(n, r)} choice of which conditions to violate, only the intersection size changes from (${k} − ${r})<sup>${n}</sup> to (${n} − ${r})!. <b>Learn the machine once and both formulas are consequences.</b>`,
      },
      {
        t: 'proc',
        title: 'Procedure A: Counting “at least one of these properties”',
        steps: [
          `Name the universal set <i>S</i> and write down ${US}. <b>Why:</b> everything is measured against this, and a wrong or unstated universe is one of the commonest inclusion–exclusion errors.`,
          `Name the properties ${A('1')}, …, ${A(n)} explicitly in words. <b>Why:</b> the sets must be properties of individual objects, not of groups; if you cannot phrase ${Ai} as “this object has feature ${iv}”, the model is wrong.`,
          `Compute |${Ai}| for each ${iv}, then every |${Ai} ∩ ${Aj}|, then every triple, and so on. <b>Why:</b> the formula is useless unless every intersection is computable; check this before committing to the method.`,
          'Alternate the signs: add the singles, subtract the pairs, add the triples. <b>Why:</b> the counting-ledger proof shows this is exactly what makes each element count once.',
          `Sanity-check the answer against max<sub>${iv}</sub> |${Ai}| ≤ ${BIGU_LOOSE} ≤ min (${US}, ∑<sub>${iv}</sub> |${Ai}|). <b>Why:</b> the union is at least as big as its largest piece and at most the naive sum, and it can never exceed the universe.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: Counting “none of these properties”',
        steps: [
          'Run steps 1–3 of Procedure A unchanged.',
          `Write ${US} − ${S1} + ${S2} − ${S3} + ⋯, starting with a plus sign on ${US}. <b>Why:</b> this is the complement of the union, and expanding the union flips every sign.`,
          `Confirm the answer is non-negative and at most ${US}. <b>Why:</b> a negative result means an intersection was mis-sized or a sign was dropped, the two most common slips.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Illustration (the divisibility pattern JEE Main favours).</b> ${ESTIMATE} For “how many integers from 1 to <i>N</i> are divisible by none of <i>a</i>, <i>b</i>, <i>c</i>”, take <i>S</i> = {1, 2, …, <i>N</i>} and <i>A</i><sub><i>a</i></sub> the multiples of <i>a</i>, so |<i>A</i><sub><i>a</i></sub>| = ${FL('<i>N</i>', '<i>a</i>')}. The crucial step is the intersection: <i>A</i><sub><i>a</i></sub> ∩ <i>A</i><sub><i>b</i></sub> is the set of multiples of lcm(<i>a</i>, <i>b</i>), <b>not</b> of <i>ab</i>. For <i>a</i> = 4, <i>b</i> = 6 the correct divisor is 12, not 24. When <i>a</i>, <i>b</i>, <i>c</i> are pairwise coprime the two agree, which is why the standard 2, 3, 5 question hides the issue.`,
      },
      {
        t: 'proc',
        title: 'Procedure C: Distributing n distinct objects into k distinct boxes, no box empty',
        steps: [
          `Confirm the objects are genuinely distinguishable and the boxes are genuinely labelled. <b>Why:</b> if the objects are identical, Topic 04’s ${NK1} is the correct tool and this procedure over-counts wildly; if the boxes are identical, you want ${SNK} instead.`,
          `Check ${n} ≥ ${k}. <b>Why:</b> otherwise the answer is 0 and no computation is needed.`,
          `Write ${NNK} = ${KN} − ${bn(k, '1')}(${k} − 1)<sup>${n}</sup> + ${bn(k, '2')}(${k} − 2)<sup>${n}</sup> − ⋯, stopping at the term ${NEG(`${k}−1`)}${bn(k, `${k} − 1`)}1<sup>${n}</sup>. <b>Why:</b> the final term (${k} − ${k})<sup>${n}</sup> vanishes.`,
          `Evaluate, then cross-check with ${NNK} = ${k}! ${SNK} using the recurrence or the table. <b>Why:</b> two independent routes to the same integer is the cheapest possible insurance in a counting problem.`,
          `If the boxes were in fact identical, divide the result by ${k}! to recover ${SNK}. <b>Why:</b> the ${k}! orderings of the box labels all collapse to one outcome.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Illustration.</b> Four distinct objects into three distinct boxes, none empty:<br>${NN('4', '3')} = 3<sup>4</sup> − 3 · 2<sup>4</sup> + 3 · 1<sup>4</sup><br>= 81 − 48 + 3 = 36.`,
      },
      {
        t: 'p',
        html: `Cross-check: ${SS('4', '3')} = 6 from the table, and 3! × 6 = 36. Second cross-check using the sanity identity: 3<sup>4</sup> = 81 should equal<br>${bn('3', '3')}${NN('4', '3')} + ${bn('3', '2')}${NN('4', '2')} + ${bn('3', '1')}${NN('4', '1')}<br>= 36 + 3(2<sup>4</sup> − 2) + 3(1)<br>= 36 + 42 + 3 = 81.<br>It does.`,
      },
      {
        t: 'proc',
        title: 'Procedure D: Upper bounds, where pre-allocation stops working',
        steps: [
          `Clear any <b>lower</b> bounds first by pre-allocation, exactly as in Topic 04’s Key procedures and logical framework part, item 3.2: replace ${xi} ≥ ${ai} by ${yi} = ${xi} − ${ai} ≥ 0 and reduce the target sum. <b>Why:</b> this step is a bijection and loses nothing.`,
          `Now handle the <b>upper</b> bounds by inclusion–exclusion. Let ${Ai} be the solutions with ${yi} exceeding its cap, and size ${Ai} by pre-allocating one more than the cap. <b>Why:</b> “${yi} ≥ ${c} + 1” is a lower bound, and lower bounds are the case pre-allocation can handle.`,
          `Alternate signs across ${r} = 0, 1, 2, …, keeping a term only while the leftover total after pre-allocating the ${r} violations is still non-negative. <b>Why:</b> once ${r}(${c} + 1) exceeds the target, no solution can violate that many caps at once, so that term counts nothing and the series terminates.`,
          `Verify by the complementary substitution <i>u</i><sub>${iv}</sub> = ${c} − ${yi} where the caps are equal. <b>Why:</b> it converts the problem into a different-looking one with the same answer, giving an independent check.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Illustration.</b> Solutions of <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + <i>x</i><sub>3</sub> = 15 with 0 ≤ ${xi} ≤ 8. Unrestricted: ${bn('15 + 3 − 1', '3 − 1')} = ${bn('17', '2')} = 136. Violating one named cap means ${xi} ≥ 9; pre-allocate 9 and count ${bn('6 + 2', '2')} = ${bn('8', '2')} = 28; there are 3 choices of which variable, giving 84. Two variables cannot both reach 9, since 18 > 15, so the series stops. Answer 136 − 84 = 52. Check by <i>u</i><sub>${iv}</sub> = 8 − ${xi}: then <i>u</i><sub>1</sub> + <i>u</i><sub>2</sub> + <i>u</i><sub>3</sub> = 24 − 15 = 9 with 0 ≤ <i>u</i><sub>${iv}</sub> ≤ 8, giving ${bn('11', '2')} − 3${bn('2', '2')} = 55 − 3 = 52. Agreed.`,
      },
      {
        t: 'p',
        html: `<b>The selection mirror (“at most” constraints).</b> Topic 03’s CBSE board proofs / key procedures part, item 3.4, named the “at least / at most” pair but illustrated only the “at least” direction. The upper-bound direction is the same manoeuvre in selection language: for “choose 5 from 5 men and 4 women with <b>at most</b> 2 women”, either sum the permitted cases<br>${bn('4', '0')}${bn('5', '5')} + ${bn('4', '1')}${bn('5', '4')} + ${bn('4', '2')}${bn('5', '3')}<br>= 1 + 20 + 60 = 81,<br>or complement the forbidden ones,<br>${bn('9', '5')} − [${bn('4', '3')}${bn('5', '2')} + ${bn('4', '4')}${bn('5', '1')}]<br>= 126 − 45 = 81.<br><b>Take whichever side has fewer cases</b>: here the direct sum has three cases and the complement only two, so the complement wins by one case.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In a class of 60 students, 32 have opted for Physics, 28 for Chemistry, and 12 have opted for both. Find (a) the number who have opted for at least one of the two subjects, (b) the number who have opted for neither, (c) the number who have opted for exactly one of the two.',
        steps: [
          'Let <i>P</i> be the set of Physics students and <i>C</i> the set of Chemistry students, inside a universal set of 60. We are given |<i>P</i>| = 32, |<i>C</i>| = 28, |<i>P</i> ∩ <i>C</i>| = 12.',
          '<b>(a)</b> By the two-set union formula,<br>|<i>P</i> ∪ <i>C</i>| = |<i>P</i>| + |<i>C</i>| − |<i>P</i> ∩ <i>C</i>|<br>= 32 + 28 − 12 = 48.<br>The subtraction is compulsory: the 12 students taking both were counted once inside the 32 and again inside the 28.',
          '<b>(b)</b> “Neither” is the complement of the union inside the class:<br>60 − 48 = 12.',
          '<b>(c)</b> A student takes exactly one subject when they are in the union but not in the intersection:<br>|<i>P</i> ∪ <i>C</i>| − |<i>P</i> ∩ <i>C</i>| = 48 − 12 = 36.',
          'Equivalently, |<i>P</i>| + |<i>C</i>| − 2|<i>P</i> ∩ <i>C</i>| = 32 + 28 − 24 = 36: the intersection is removed <b>twice</b>, once to stop the double count and once more to exclude those students altogether.',
          '<b>Check by regions.</b> Physics only = 32 − 12 = 20; Chemistry only = 28 − 12 = 16; both = 12; neither = 12. These four disjoint groups total 20 + 16 + 12 + 12 = 60, the whole class, and exactly one = 20 + 16 = 36. Every part agrees.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'How many integers from 1 to 100 inclusive are divisible by at least one of 2, 3 and 5? How many are divisible by none of them?',
        steps: [
          `Take <i>S</i> = {1, 2, …, 100}, so ${US} = 100, and let ${A('2')}, ${A('3')}, ${A('5')} be the sets of multiples of 2, 3, 5 respectively. The number of multiples of <i>d</i> in <i>S</i> is ${FL('100', '<i>d</i>')}.`,
          `Singles:<br>|${A('2')}| = ${FL('100', '2')} = 50,<br>|${A('3')}| = ${FL('100', '3')} = 33,<br>|${A('5')}| = ${FL('100', '5')} = 20.`,
          `Pairs. An integer divisible by both 2 and 3 is divisible by lcm(2, 3) = 6, and similarly for the other pairs:<br>|${A('2')} ∩ ${A('3')}| = ${FL('100', '6')} = 16,<br>|${A('3')} ∩ ${A('5')}| = ${FL('100', '15')} = 6,<br>|${A('5')} ∩ ${A('2')}| = ${FL('100', '10')} = 10.`,
          `Triple:<br>|${A('2')} ∩ ${A('3')} ∩ ${A('5')}| = ${FL('100', '30')} = 3.`,
          `Now the three-set formula:<br>|${A('2')} ∪ ${A('3')} ∪ ${A('5')}|<br>= (50 + 33 + 20) − (16 + 6 + 10) + 3<br>= 103 − 32 + 3 = 74.`,
          'Divisible by none:<br>100 − 74 = 26.',
          `<b>Verification.</b> Divisibility by 2, 3, 5 repeats with period lcm(2, 3, 5) = 30. In each block of 30 consecutive integers, the count divisible by none is 30 × ${fr('1', '2')} × ${fr('2', '3')} × ${fr('4', '5')} = 8. The first three blocks cover 1 to 90 and contribute 24. In 91, …, 100 the odd numbers are 91, 93, 95, 97, 99; of these 93 and 99 are divisible by 3 and 95 by 5, leaving 91 and 97. Total 24 + 2 = 26, matching.`,
          `<b>Why the bounds check passes.</b> The union 74 sits between the largest single set (50) and the naive sum (103), and below ${US} = 100, as Procedure A step 5 requires.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'In how many ways can 5 distinct chocolates be distributed among 3 children so that every child receives at least one chocolate?',
        steps: [
          '<b>The trap: reusing the identical-object formula, and “pre-allocating” distinguishable objects.</b>',
          `<b>Seductive wrong answer 1.</b> The student recognises “no box empty”, reaches for Topic 04’s positive stars-and-bars count ${NK1}, and writes<br>${bn('5 − 1', '3 − 1')} = ${bn('4', '2')} = 6.`,
          'This counts the ways to decide how many chocolates each child gets (the triples (3, 1, 1), (1, 3, 1), (1, 1, 3), (2, 2, 1), (2, 1, 2), (1, 2, 2)) and stops there. It ignores which chocolates, because stars-and-bars was built for identical stars. Since the chocolates are distinct, every one of those six count-patterns splits into many genuinely different distributions.',
          '<b>Seductive wrong answer 2.</b> The student remembers “pre-allocate one to everybody, then distribute the rest freely.” Choosing an ordered triple of distinct chocolates to hand out first can be done in <sup>5</sup><i>P</i><sub>3</sub> = 60 ways, and the remaining 2 chocolates then go anywhere, 3<sup>2</sup> = 9 ways:<br>60 × 9 = 540.',
          'This is 3.6 times too large. The reason is precise: in the finished distribution there is no record of which chocolate was the “pre-allocated” one, so a child holding 3 chocolates could have been reached through any of 3 choices of designated chocolate, and the over-count is not even uniform across patterns. <b>Pre-allocation is a bijection only when the objects are indistinguishable.</b>',
          `<b>Correct solution.</b> Distinct objects, distinct recipients, none empty: this is ${NN('5', '3')}. By Procedure C,<br>${NN('5', '3')} = 3<sup>5</sup> − ${bn('3', '1')}2<sup>5</sup> + ${bn('3', '2')}1<sup>5</sup><br>= 243 − 3(32) + 3(1)<br>= 243 − 96 + 3 = 150.`,
          `<b>Cross-check via Stirling.</b> ${SS('5', '3')} = 25 from the table, and 3! × 25 = 150. Confirm ${SS('5', '3')} by direct partition counting: a split of 5 distinct chocolates into three non-empty unlabelled blocks has shape 3+1+1 or 2+2+1. Shape 3+1+1: choose the block of three in ${bn('5', '3')} = 10 ways, and the two leftovers are forced singletons, giving 10. Shape 2+2+1: choose the singleton in 5 ways, then split the remaining 4 into two unlabelled pairs in 3 ways, giving 15. Total 10 + 15 = 25.`,
          `<b>Cross-check via the sanity identity.</b> All 3<sup>5</sup> = 243 unrestricted distributions must split by the number of children actually served:<br>243 = 150 (all 3)<br>+ ${bn('3', '1')}${NN('5', '2')} (exactly one child left out)<br>+ ${bn('3', '2')}${NN('5', '1')} (exactly two left out)<br>= 150 + 3(2<sup>5</sup> − 2) + 3(1)<br>= 150 + 90 + 3 = 243.`,
          '<b>How to spot the trap in three seconds.</b> Ask one question: would swapping two of the objects produce a different outcome? If yes, the objects are distinct and stars-and-bars is barred.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm11-06-fig-6.11',
        q: 'Find the number of onto functions from a set <i>X</i> with 6 elements to a set <i>Y</i> with 4 elements. Hence find the number of ways of dividing 6 distinct books among 4 students so that each student gets at least one book, and the number of ways of putting the same 6 books into 4 <b>identical</b> boxes with no box empty.',
        steps: [
          'A function <i>f</i> : <i>X</i> → <i>Y</i> assigns to each of the 6 elements of <i>X</i> one of the 4 elements of <i>Y</i>; it is onto exactly when every element of <i>Y</i> is used. Writing <i>f</i><sup>−1</sup>(<i>y</i>) for the set of elements sent to <i>y</i>, an onto function is precisely a placement of the 6 distinct elements of <i>X</i> into the 4 distinct boxes labelled by <i>Y</i> with no box empty. So the three questions asked are the same question twice over and then once with the labels removed.',
          `<b>Step 1: the inclusion–exclusion count.</b> Let <i>S</i> be all 4<sup>6</sup> functions and ${Ai} the functions that miss the ${iv}-th element of <i>Y</i>. Then |${IXR}| = (4 − ${r})<sup>6</sup>, and there are ${bn('4', r)} such intersections. By Procedure C,<br>${NN('6', '4')} = ${SUM(`${r}=0`, '4')}${NEG(r)}${bn('4', r)}(4 − ${r})<sup>6</sup><br>= 4<sup>6</sup> − ${bn('4', '1')}3<sup>6</sup> + ${bn('4', '2')}2<sup>6</sup> − ${bn('4', '3')}1<sup>6</sup> + ${bn('4', '4')}0<sup>6</sup>.`,
          `Evaluating each term: 4<sup>6</sup> = 4096; ${bn('4', '1')}3<sup>6</sup> = 4 × 729 = 2916; ${bn('4', '2')}2<sup>6</sup> = 6 × 64 = 384; ${bn('4', '3')}1<sup>6</sup> = 4; the last term is 0.<br>${NN('6', '4')} = 4096 − 2916 + 384 − 4 = 1560.`,
          '<b>Step 2: the books.</b> Handing 6 distinct books to 4 distinct students with nobody empty-handed is the same placement problem, so the answer is again 1560.',
          `<b>Step 3: identical boxes.</b> Removing the labels from the boxes identifies the 4! = 24 placements that differ only by a relabelling, so by Procedure C step 5,<br>${SS('6', '4')} = ${fr(NN('6', '4'), '4!')} = ${fr('1560', '24')} = 65.`,
          `<b>Verification 1: the Stirling recurrence.</b> Build the table upwards from ${SS('4', '3')} = 6, ${SS('4', '4')} = 1:<br>${SS('5', '4')} = ${SS('4', '3')} + 4 ${SS('4', '4')} = 6 + 4 = 10,<br>${SS('5', '3')} = ${SS('4', '2')} + 3 ${SS('4', '3')} = 7 + 18 = 25,<br>${SS('6', '4')} = ${SS('5', '3')} + 4 ${SS('5', '4')} = 25 + 40 = 65.<br>This matches Step 3 exactly, and it was obtained without touching the inclusion–exclusion sum.`,
          `<b>Verification 2: the sanity identity ${KN} = ∑<sub>${j}</sub> ${bn(k, j)}${NN(n, j)}.</b> Every one of the 4<sup>6</sup> = 4096 unrestricted placements uses some number ${j} of the four boxes (boxes actually used ${j}; ${bn('4', j)}; ${NN('6', j)}; product):<br>• ${j} = 4: 1; 1560; 1560<br>• ${j} = 3: 4; 3<sup>6</sup> − 3 · 2<sup>6</sup> + 3 = 540; 2160<br>• ${j} = 2: 6; 2<sup>6</sup> − 2 = 62; 372<br>• ${j} = 1: 4; 1; 4`,
          'The products total 1560 + 2160 + 372 + 4 = 4096 = 4<sup>6</sup>. The decomposition is exact, so 1560 is confirmed.',
        ],
        ans: '1560; 1560; 65',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a colony of 100 households, 65 subscribe to newspaper <i>A</i>, 45 subscribe to newspaper <i>B</i> and 20 subscribe to both. How many subscribe to at least one newspaper, and how many to neither?',
            a: '65 + 45 − 20 = 90 subscribe to at least one; 100 − 90 = 10 to neither.',
          },
          {
            q: '[CBSE] Of 200 students, 100 study Hindi, 80 study Sanskrit and 70 study French; 40 study Hindi and Sanskrit, 30 study Sanskrit and French, 35 study Hindi and French, and 15 study all three. Find the number who study (a) at least one of the three languages, (b) none of the three, (c) exactly one of the three.',
            a: `(a) 250 − 105 + 15 = 160. (b) 200 − 160 = 40. (c) ${SG1} − 2${SG2} + 3${SG3} = 250 − 210 + 45 = 85.`,
          },
          {
            q: '[JEE Main] How many integers from 1 to 1000 inclusive are divisible by none of 2, 3 and 5?',
            a: '1000 − [500 + 333 + 200 − 166 − 100 − 66 + 33]<br>= 1000 − 734 = 266.',
          },
          {
            q: '[JEE Main] Find the number of onto functions from a set with 6 elements to a set with 3 elements.',
            a: `${NN('6', '3')} = 3<sup>6</sup> − 3 · 2<sup>6</sup> + 3 = 729 − 192 + 3 = 540.`,
          },
          {
            q: '[JEE Main] Find the number of integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 12 with 1 ≤ <i>x</i>, <i>y</i>, <i>z</i> ≤ 6.',
            a: `25. (Substitute <i>x</i> = 1 + <i>u</i> etc. to get <i>u</i> + <i>v</i> + <i>w</i> = 9 with 0 ≤ <i>u</i>, <i>v</i>, <i>w</i> ≤ 5; then ${bn('11', '2')} − 3${bn('5', '2')} = 55 − 30 = 25.)`,
          },
          {
            q: '[JEE Main] How many words of length 4 can be formed from the letters <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>, <i>E</i> with repetition allowed, if each word must contain <b>all three</b> of <i>A</i>, <i>B</i> and <i>C</i> at least once?',
            a: '84. (Inclusion–exclusion on the letters missed: 5<sup>4</sup> − 3 · 4<sup>4</sup> + 3 · 3<sup>4</sup> − 2<sup>4</sup> = 625 − 768 + 243 − 16 = 84.)',
          },
          {
            q: '[JEE Advanced] In how many ways can 7 distinct toys be distributed among 3 distinct children so that no child is left without a toy?',
            a: `${NN('7', '3')} = 3<sup>7</sup> − 3 · 2<sup>7</sup> + 3 = 2187 − 384 + 3 = 1806.`,
          },
          {
            q: '[JEE Advanced] In how many ways can 5 distinct objects be placed into 3 <b>identical</b> boxes so that no box is empty? Compare your answer with the count for 3 distinct boxes.',
            a: `${SS('5', '3')} = 25 for identical boxes; 3! × 25 = 150 for distinct boxes: a factor of 3! = 6 apart.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of integers from 1 to 60 inclusive that are divisible by 2 or by 3 is',
        opts: [
          {
            label: '50',
            nudge: '<b>(A)</b> 50 is 30 + 20: the naive Addition Principle applied to piles that are not mutually exclusive, which is precisely the error Topic 01’s Common student pitfalls and pro-tips part warned about.',
          },
          { label: '40', nudge: null },
          {
            label: '30',
            nudge: '<b>(C)</b> 30 reports the multiples of 2 alone, reading “or” as though the second condition added nothing new.',
          },
          {
            label: '10',
            nudge: '<b>(D)</b> 10 reports the intersection instead of the union, a swap of ∩ for ∪ under time pressure.',
          },
        ],
        correct: 1,
        solution: `${FL('60', '2')} = 30, ${FL('60', '3')} = 20, and the overlap is the multiples of lcm(2, 3) = 6, namely ${FL('60', '6')} = 10. So 30 + 20 − 10 = 40.`,
      },
      {
        t: 'mcq',
        q: 'The number of onto functions from a set containing 4 elements to a set containing 2 elements is',
        opts: [
          {
            label: '16',
            nudge: '<b>(A)</b> 16 = 2<sup>4</sup> counts all functions and forgets the onto requirement entirely.',
          },
          { label: '14', nudge: null },
          {
            label: '15',
            nudge: '<b>(C)</b> 15 = 2<sup>4</sup> − 1 removes only one of the two constant functions; students who think of “at least one” as always costing a single subtraction of the empty case land here.',
          },
          {
            label: '3',
            nudge: `<b>(D)</b> 3 = ${bn('4 − 1', '2 − 1')} applies Topic 04’s identical-object formula ${NK1} to distinguishable objects: the headline confusion of this topic. That formula counts only the size patterns (3, 1), (2, 2), (1, 3) and is blind to which elements go where.`,
          },
        ],
        correct: 1,
        solution: `${NN('4', '2')} = 2<sup>4</sup> − ${bn('2', '1')}1<sup>4</sup> = 16 − 2 = 14. Directly: of the 16 functions, exactly two fail to be onto: the two constant functions.`,
      },
      {
        t: 'mcq',
        q: 'The number of ways in which 6 distinct balls can be put into 3 distinct boxes so that no box remains empty is',
        opts: [
          { label: '540', nudge: null },
          {
            label: '729',
            nudge: '<b>(B)</b> 729 = 3<sup>6</sup> is the unrestricted count from Topic 04’s Key formulas and definitions part, with the no-empty-box condition dropped.',
          },
          {
            label: '10',
            nudge: `<b>(C)</b> 10 = ${bn('6 − 1', '3 − 1')} = ${bn('5', '2')} treats the six distinct balls as identical.`,
          },
          {
            label: '90',
            nudge: `<b>(D)</b> 90 = ${SS('6', '3')} is the count for <b>identical</b> boxes; the student did the hard part correctly and then forgot that labelled boxes multiply by 3!. Distractor (D) is the one that catches strong students, so make the labelled-or-not decision before computing, not after.`,
          },
        ],
        correct: 0,
        solution: `${NN('6', '3')} = 3<sup>6</sup> − ${bn('3', '1')}2<sup>6</sup> + ${bn('3', '2')}1<sup>6</sup> = 729 − 192 + 3 = 540. Cross-check: 3! ${SS('6', '3')} = 6 × 90 = 540.`,
      },
      {
        t: 'mcq',
        q: 'The number of non-negative integer solutions of <i>x</i> + <i>y</i> + <i>z</i> = 10 with <i>x</i> ≤ 5, <i>y</i> ≤ 5 and <i>z</i> ≤ 5 is',
        opts: [
          { label: '66', nudge: '<b>(A)</b> 66 ignores the caps altogether.' },
          { label: '21', nudge: null },
          {
            label: '51',
            nudge: '<b>(C)</b> 51 = 66 − 15 subtracts the over-cap solutions for one variable only, forgetting that the same failure can happen to <i>y</i> or <i>z</i>.',
          },
          {
            label: '24',
            nudge: `<b>(D)</b> 24 = 66 − 45 + 3 adds back a phantom double-violation term: the student writes the full alternating pattern mechanically and inserts ${bn('3', '2')} for the pairs without checking that two variables reaching 6 each would need a total of 12, which exceeds 10.`,
          },
        ],
        correct: 1,
        solution: `Unrestricted, ${bn('10 + 3 − 1', '3 − 1')} = ${bn('12', '2')} = 66. Violating a named cap means that variable is at least 6; pre-allocating 6 leaves <i>x</i>′ + <i>y</i> + <i>z</i> = 4 with ${bn('6', '2')} = 15 solutions, and there are 3 choices of which variable, giving 45. Two variables cannot both reach 6 since 12 > 10, so the series stops: 66 − 45 = 21. Check by <i>u</i> = 5 − <i>x</i>, <i>v</i> = 5 − <i>y</i>, <i>w</i> = 5 − <i>z</i>: then <i>u</i> + <i>v</i> + <i>w</i> = 5 with each at most 5, which is automatic, so the count is ${bn('7', '2')} = 21. <b>In inclusion–exclusion, a term must be tested for existence, not assumed.</b>`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Using ${NK1} for distinct objects.</b> The error this topic exists to kill. Topic 04’s positive stars-and-bars count answers “how many objects does each box get”, not “which objects”. <b>Correction:</b> ask whether swapping two objects changes the outcome. If it does, the objects are distinct and you need ∑${NEG(iv)}${bn(k, iv)}(${k} − ${iv})<sup>${n}</sup>.`,
          '<b>Pre-allocating distinguishable objects.</b> “Give each box one first, then distribute the rest” is a bijection only for identical objects. For distinct objects it over-counts, because the finished arrangement carries no record of which object was pre-allocated. <b>Correction:</b> reserve pre-allocation for identical objects and for <b>lower</b> bounds on integer variables.',
          `<b>Pre-allocating to enforce an upper bound.</b> There is no substitution that turns <i>x</i> ≤ ${c} into a free variable. <b>Correction:</b> convert each upper bound into its violation <i>x</i> ≥ ${c} + 1, which is a lower bound, and alternate signs across the violations.`,
          `<b>Multiplying instead of taking the lcm.</b> In divisibility problems, <i>A</i><sub><i>a</i></sub> ∩ <i>A</i><sub><i>b</i></sub> is the multiples of lcm(<i>a</i>, <i>b</i>). Writing ${FL('<i>N</i>', '<i>ab</i>')} is correct only when <i>a</i> and <i>b</i> are coprime, and the standard 2, 3, 5 question hides this because those are pairwise coprime. Test yourself on 4 and 6: the intersection is the multiples of 12.`,
          `<b>Writing terms that cannot occur.</b> Students reproduce the full alternating pattern by reflex and include an ${r}-fold term whose intersection is empty. It contributes 0, so including it is harmless only if you also evaluate it as 0; inserting a non-zero value there is a guaranteed wrong answer. <b>Correction:</b> for every term, ask whether ${r} conditions can be violated simultaneously.`,
          `<b>Losing the sign at the last term.</b> The union form ends at ${NEG(`${n}−1`)} and the complement form ends at ${NEG(n)}. With three sets the triple intersection is <b>added</b> in the union and <b>subtracted</b> in the complement. <b>Correction:</b> rebuild the signs from the ${m} = 3 ledger 3 − 3 + 1 = 1 rather than memorising them.`,
          `<b>Confusing labelled with unlabelled boxes.</b> ${SNK} and ${k}! ${SNK} differ by a factor of ${k}!, and both are plausible-looking integers. <b>Correction:</b> the words “children”, “students”, “envelopes”, “counters” and plain “boxes” (not called identical) signal distinct; “groups”, “bundles”, “identical boxes” and “parts” signal unlabelled: the same distinction Topic 04’s Key procedures and logical framework part, item 3.4, drew between division and distribution.`,
          `<b>Forgetting that the universe must be stated.</b> A complement count is meaningless without ${US}. <b>Correction:</b> write ${US} on the page before anything else.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: read the phrase “at least one of” as a siren.</b> Whenever a problem says “at least one of these ${n} properties” or “none of these ${n} properties”, stop looking for a direct construction and reach for inclusion–exclusion. Topic 01’s Pro-Tip taught you total minus none for a single property; this is the same instinct extended, and the two are the same formula when ${n} = 1.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip: three circles beat a formula under exam pressure.</b> For any three-set question with numbers given, draw the Venn diagram and fill it from the <b>centre outward</b>: write the all-three count first, then subtract it from each pairwise count to get the exactly-two regions, then subtract everything from each single count to get the exactly-one regions. Every one of the six questions in the Key formulas and definitions part’s table can then be read off by adding regions, with no signs to get wrong. If any region comes out negative, the data in the question is inconsistent and you should re-read it.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: always cross-check an onto count two ways.</b> Compute ${NNK} by the alternating sum, then confirm it is divisible by ${k}! and that the quotient matches ${SNK} from the recurrence. A single arithmetic slip in the alternating sum almost never survives both tests.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip: the ${n} < ${k} reflex.</b> If there are fewer objects than boxes, the onto count is 0 and no work is needed. In a multi-part question this instantly disposes of one part.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two and three sets',
            note: `|<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>| − |<i>A</i> ∩ <i>B</i>|. ${SET3} = ${SG1} − ${SG2} + ${SG3}, where ${SG1} sums the singles, ${SG2} the three pairwise intersections, ${SG3} the triple.`,
          },
          {
            f: `General ${n} sets`,
            note: `${BIGU} = ${S1} − ${S2} + ${S3} − ⋯ + ${NEG(`${n}−1`)}${Sn}, with ${Sr} the total of all ${bn(n, r)} ${r}-fold intersection sizes.`,
          },
          {
            f: 'None of the properties',
            note: `${US} − ${S1} + ${S2} − ${S3} + ⋯ + ${NEG(n)}${Sn}. Starts with +${US}; this is the exam form.`,
          },
          {
            f: 'Three-set variants',
            note: `Exactly one: ${SG1} − 2${SG2} + 3${SG3}. Exactly two: ${SG2} − 3${SG3}. At least two: ${SG2} − 2${SG3}. None: ${US} − ${SG1} + ${SG2} − ${SG3}.`,
          },
          {
            f: 'Divisibility',
            note: `Multiples of <i>d</i> in 1..<i>N</i>: ${FL('<i>N</i>', '<i>d</i>')}. Intersection of “multiple of <i>a</i>” and “multiple of <i>b</i>” is “multiple of lcm(<i>a</i>, <i>b</i>)”: not <i>ab</i> unless coprime.`,
          },
          {
            f: 'Onto / no box empty (distinct objects, distinct boxes)',
            note: `${NNK} = ${ONTO} = ${k}! ${SNK}.<br>${NN(n, '1')} = 1; ${NN(n, '2')} = 2<sup>${n}</sup> − 2; ${NN(n, '3')} = 3<sup>${n}</sup> − 3 · 2<sup>${n}</sup> + 3; ${NNK} = 0 if ${n} < ${k}; ${NN(k, k)} = ${k}!. Ready values: ${NN('4', '3')} = 36, ${NN('5', '3')} = 150, ${NN('6', '3')} = 540, ${NN('7', '3')} = 1806, ${NN('5', '4')} = 240, ${NN('6', '4')} = 1560.`,
          },
          {
            f: `Stirling numbers of the second kind (${n} distinct into ${k} non-empty <b>unlabelled</b> blocks)`,
            note: `${SNK} = ${SS(`${n} − 1`, `${k} − 1`)} + ${k} ${SS(`${n} − 1`, k)}; ${SS(n, '1')} = ${SS(n, n)} = 1; ${SS(n, '2')} = 2<sup>${n}−1</sup> − 1; ${SS(n, `${n} − 1`)} = ${bn(n, '2')}. Rows ${n} = 1 to 6: 1 | 1, 1 | 1, 3, 1 | 1, 7, 6, 1 | 1, 15, 25, 10, 1 | 1, 31, 90, 65, 15, 1. Row sums are the Bell numbers 1, 2, 5, 15, 52, 203.`,
          },
          { f: 'Master distribution table', note: '' },
        ],
        aids: [],
      },
      {
        t: 'table',
        title: null,
        head: ['Objects', 'Boxes', 'Empty allowed', 'No box empty'],
        rows: [
          ['Identical', 'Distinct', NKK1, NK1],
          ['Distinct', 'Distinct', KN, `${k}! ${SNK}`],
          ['Distinct', 'Identical', `∑<sub>${j}=1</sub><sup>${k}</sup> ${SS(n, j)}`, SNK],
          ['Identical', 'Identical', `partitions of ${n} into ≤ ${k} parts`, `partitions of ${n} into exactly ${k} parts`],
        ],
      },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Self-check identity',
            note: `${KN} = ∑<sub>${j}=1</sub><sup>${k}</sup> ${bn(k, j)}${NN(n, j)}: split unrestricted placements by how many boxes were actually used.`,
          },
          {
            f: 'Upper-bounded integer solutions',
            note: `For <i>x</i><sub>1</sub> + ⋯ + <i>x</i><sub>${k}</sub> = ${n} with every ${xi} ≤ ${c}:<br>${SYM},<br>keeping only the terms with ${n} − ${r}(${c} + 1) ≥ 0 and dropping the rest. Clear lower bounds by pre-allocation first; then use this sum for the upper bounds (with equal caps, also try <i>u</i> = ${c} − <i>x</i>, which can make the caps automatic).`,
          },
          {
            f: 'Derangements are the same machine (Topic 05’s Key procedures and logical framework part, item 3.5)',
            note: `${Dn} = ∑ ${NEG(r)} ${bn(n, r)}(${n} − ${r})! = ${n}! ∑ ${fr(NEG(r), `${r}!`)}, for ${r} = 0, 1, …, ${n}; <i>D</i><sub>4</sub> = 9, <i>D</i><sub>5</sub> = 44.`,
          },
        ],
        aids: [
          '“Add singles, subtract pairs, add triples: signs alternate to the end.”',
          '“Distinct objects kill stars and bars.”',
          `“Labelled boxes multiply by ${k}!.”`,
          '“Upper bound ⇒ violate it, then alternate.”',
        ],
      },
    ],
  },
];
