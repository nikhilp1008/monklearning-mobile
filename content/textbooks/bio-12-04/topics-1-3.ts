import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 4 (Principles of Inheritance and Variation), Topics 01 to 03:
 * pp. 163 to 184 of the Class 12 Biology Master Reference, word for word. The chapter
 * title page and its contents (p. 162 and the top of p. 163) are not copied. Topic 01
 * (Mendelian Inheritance & Deviations) starts low on p. 163 and runs to p. 169; Topic 02
 * (Chromosomal Theory, Linkage & Sex Determination) is pp. 170 to 176; Topic 03 (Genetic
 * Disorders) is pp. 177 to 184 (p. 184 holds the tail of its cheat sheet). These pages
 * hold no drawn figure: the Punnett squares, the genotype and blood-group tables and
 * the sex-determination table are text tables. A Punnett square inside a worked example
 * is written as labelled rows in that example's steps. Genotypes and gene symbols are
 * italic, phenotypes, karyotypes and sex-chromosome pairs upright (DECISIONS-B12 10).
 * Every fraction is stacked and no em dash is written (DECISIONS-B12 1).
 */

/** Italic: a gene or allele symbol, a genotype, a variable. */
const g = (s: string) => `<i>${s}</i>`;
/** A stacked fraction. */
const fr = (n: string | number, d: string | number) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A symbol with an italic raised allele name: I<sup>A</sup>, X<sup>a</sup>. */
const sp = (base: string, sup: string) => `<i>${base}</i><sup><i>${sup}</i></sup>`;
const IA = sp('I', 'A');
const IB = sp('I', 'B');
/** An X-linked allele, X<sup>a</sup>. */
const X = (a: string) => sp('X', a);
/** The sickle-cell haemoglobin alleles, Hb<sup>A</sup>, Hb<sup>S</sup>: allele symbols are italic, so Hb and its superscript are both italic (the protein HbS is written upright). */
const Hb = (a: string) => `<i>Hb</i><sup><i>${a}</i></sup>`;
const half = fr(1, 2);
const qtr = fr(1, 4);
const tq = fr(3, 4);
const SHARE = 'The question counts and frequencies in this box are the book’s estimate from past papers, not official figures.';

export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 163–169 ─────────────────────────
  {
    n: '01',
    title: 'Mendelian Inheritance & Deviations',
    kalam: 'Nothing later in genetics makes sense until the Mendelian framework here is automatic.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> This is a heavily tested topic of the chapter. NEET often asks about ratios, blood-group genotypes and incomplete dominance vs codominance, CUET asks direct definition/ratio items, and CBSE Boards routinely set a 2–3 mark cross or a “distinguish between” question. Nothing later in genetics makes sense until the Mendelian framework here is automatic. ${SHARE}`,
      },
      {
        t: 'p',
        html: 'Picture a sabziwala at your local market sorting a fresh delivery of brinjals. Some are deep purple, some pale green. If he saves seed only from the purple ones year after year and always gets purple, and does the same with green and always gets green, he has unknowingly created what a geneticist calls <b>true-breeding lines</b>: populations that, on self-pollination, hand down the same trait generation after generation without surprises.',
      },
      {
        t: 'p',
        html: 'Now the interesting question: what happens if you cross a true-breeding purple plant with a true-breeding green one? Common sense from mixing paint says you should get something in between, a muddy purplish-green. This “blending” idea was the popular belief before Mendel. And it is wrong.',
      },
      {
        t: 'p',
        html: 'Gregor Mendel, working on garden pea (<i>Pisum sativum</i>) for seven patient years (1856–1863), did something nobody had done with living things before: he <b>counted</b>. He applied statistics and mathematical logic to inheritance. He chose seven pairs of clean, contrasting traits in pea, crossed pure lines, and tallied thousands of offspring. The numbers told a story blending could never explain.',
      },
      {
        t: 'p',
        html: 'When he crossed two pure contrasting parents (the <b>P generation</b>), the first hybrid offspring (the <b>F<sub>1</sub> generation</b>) were not intermediate. They all looked like one parent: the <b>dominant</b> trait appeared, the other trait (<b>recessive</b>) seemed to vanish completely. But it had not vanished. When Mendel let the F<sub>1</sub> self-pollinate, the hidden trait reappeared in the <b>F<sub>2</sub> generation</b>, in a strikingly regular ratio of about <b>3 dominant ∶ 1 recessive</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A recessive allele is like a quiet cousin at a loud family dinner. In the F<sub>1</sub> (with one loud dominant cousin present), you barely notice the quiet one, but it is fully there, unchanged. Move it to a table where it sits with another quiet cousin (the recessive homozygote in F<sub>2</sub>) and suddenly its voice is the only one you hear. Nothing got mixed or diluted; the alleles stayed pure, just masked.',
      },
      {
        t: 'p',
        html: 'That single observation, traits hiding and re-emerging intact rather than blending, is the heart of Mendelian inheritance. From the 3 ∶ 1 ratio Mendel deduced his <b>Law of Dominance</b> and <b>Law of Segregation</b>; from a two-trait (<b>dihybrid</b>) cross giving a 9 ∶ 3 ∶ 3 ∶ 1 ratio he deduced the <b>Law of Independent Assortment</b>.',
      },
      {
        t: 'p',
        html: 'But nature is richer than seven tidy pea traits. Some allele pairs do not play the dominant/recessive game. In a few cases the heterozygote really is intermediate (<b>incomplete dominance</b>), and in others both alleles announce themselves fully and simultaneously (<b>codominance</b>, as in human blood groups). These are not failures of Mendel’s logic: the segregation of alleles still holds perfectly. They are deviations at the level of how alleles express, not how they are inherited.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Mendel’s clean ratios depend on assumptions that are not always met: (1) the genes must lie on different chromosomes (or far apart) so they assort independently: genes physically close together (linked) break the 9 ∶ 3 ∶ 3 ∶ 1 ratio; (2) one allele must be fully dominant: incomplete dominance and codominance shift the phenotypic ratio; (3) all genotypes must survive and reproduce equally (no lethal alleles, no selection); and (4) the sample must be large enough for ratios to emerge: with three or four offspring you will rarely see a clean 3 ∶ 1. Mendel partly got lucky: the seven pea genes he studied lie on only four of pea’s seven chromosomes, yet in his crosses they assorted independently. Knowing where the model breaks is exactly what separates a board-level answer from a NEET rank.',
      },

      { t: 'part', title: 'Key definitions and genetic terminology' },
      {
        t: 'p',
        html: `• <b>Gene / Factor:</b> the unit of inheritance that codes for a trait. Mendel called these “factors.”<br>• <b>Allele:</b> one of the alternative forms of a gene (e.g. ${g('T')} for tall, ${g('t')} for dwarf). Written as a capital letter for the dominant allele and the same letter in lower case for the recessive allele.<br>• <b>Genotype:</b> the genetic constitution of an organism (e.g. ${g('Tt')}).<br>• <b>Phenotype:</b> the observable expression of that genotype (e.g. tall).<br>• <b>Homozygous:</b> both alleles of a gene identical: ${g('TT')} (homozygous dominant) or ${g('tt')} (homozygous recessive). A true-breeding line is homozygous.<br>• <b>Heterozygous:</b> the two alleles differ: ${g('Tt')}. Such an individual is called a <b>hybrid</b>.<br>• <b>Dominant allele:</b> expresses itself in both homozygous and heterozygous states.<br>• <b>Recessive allele:</b> expresses in the homozygous state (and in the hemizygous male for an X-linked gene); masked in the heterozygote under complete dominance.<br>• <b>Monohybrid cross:</b> a cross tracking a single gene pair (e.g. ${g('Tt')} × ${g('Tt')}).<br>• <b>Dihybrid cross:</b> a cross tracking two gene pairs simultaneously.<br>• <b>Test cross:</b> crossing an individual of unknown genotype (showing the dominant phenotype) with a <b>homozygous recessive</b> partner, to reveal whether it is homozygous or heterozygous.<br>• <b>Back cross:</b> crossing an F<sub>1</sub> individual with either parental type.<br>• <b>Punnett square:</b> the checkerboard grid (devised by R. C. Punnett) for laying out all gamete combinations and computing offspring ratios.`,
      },
      {
        t: 'p',
        html: `<b>The three laws (Mendel’s principles):</b><br>1. <b>Law of Dominance:</b> with complete dominance, in a heterozygote only the dominant allele expresses; the recessive is masked. Explains why F<sub>1</sub> resembles one parent and why F<sub>2</sub> shows 3 ∶ 1.<br>2. <b>Law of Segregation (Law of Purity of Gametes):</b> the two alleles of a gene separate during gamete formation, so each gamete carries only one allele, pure and uncontaminated. A heterozygote ${g('Tt')} makes ${half}${g('T')} and ${half}${g('t')} gametes.<br>3. <b>Law of Independent Assortment:</b> alleles of different genes (on different chromosomes) segregate independently of one another during gamete formation. Deduced from the dihybrid 9 ∶ 3 ∶ 3 ∶ 1 ratio.`,
      },
      {
        t: 'table',
        title: 'Core ratios to memorise',
        head: ['Cross', 'Phenotypic ratio', 'Genotypic ratio'],
        rows: [
          [`Monohybrid F<sub>2</sub> (${g('Tt')} × ${g('Tt')})`, '3 ∶ 1', '1 ∶ 2 ∶ 1'],
          ['Dihybrid F<sub>2</sub>', '9 ∶ 3 ∶ 3 ∶ 1', '1 ∶ 2 ∶ 1 ∶ 2 ∶ 4 ∶ 2 ∶ 1 ∶ 2 ∶ 1 (9 genotypes)'],
          ['Monohybrid test cross', '1 ∶ 1', '1 ∶ 1'],
          ['Dihybrid test cross', '1 ∶ 1 ∶ 1 ∶ 1', '1 ∶ 1 ∶ 1 ∶ 1'],
          ['Incomplete dominance F<sub>2</sub>', '1 ∶ 2 ∶ 1', '1 ∶ 2 ∶ 1'],
          ['Codominance F<sub>2</sub>', '1 ∶ 2 ∶ 1', '1 ∶ 2 ∶ 1'],
        ],
      },
      {
        t: 'p',
        html: '<b>Note (no SI units in this topic):</b> genetics ratios are pure numbers; there is nothing to dimension-check. The “quantity” being tracked is proportion of offspring.',
      },

      { t: 'part', title: 'Key procedures and crosses' },
      { t: 'p', html: '<b>Goal:</b> predict offspring ratios for one gene.' },
      {
        t: 'proc',
        title: 'Procedure A: Setting up a monohybrid cross',
        steps: [
          `<b>Assign symbols.</b> Choose a letter; capital = dominant, lower case = recessive. Write each parent’s genotype. <b>Why:</b> the genotype, not the phenotype, determines what gametes form: two purple plants can be ${g('PP')} or ${g('Pp')}.`,
          `<b>Determine the gametes.</b> By the Law of Segregation, each parent contributes one allele per gamete. A homozygote ${g('PP')} makes only ${g('P')}; a heterozygote ${g('Pp')} makes ${half}${g('P')} and ${half}${g('p')}. <b>Why:</b> alleles stay pure: they never blend inside a gamete.`,
          '<b>Draw the Punnett square.</b> Gametes of one parent across the top, the other down the side; fill each cell by combining row + column. <b>Why:</b> the grid enumerates every equally likely fertilisation event.',
          `<b>Read genotype ratio, then collapse to phenotype</b> using dominance. For ${g('Pp')} × ${g('Pp')}: genotypes 1 ${g('PP')} ∶ 2 ${g('Pp')} ∶ 1 ${g('pp')} → phenotypes 3 purple ∶ 1 green.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: The dihybrid cross and independent assortment</b><br>For two genes, a heterozygote ${g('RrYy')} makes 2<sup><i>n</i></sup> gamete types where ${g('n')} = number of heterozygous gene pairs. Here ${g('n')} = 2, so four gametes: ${g('RY')}, ${g('Ry')}, ${g('rY')}, ${g('ry')}, each in equal proportion. A 4 × 4 Punnett square of ${g('RrYy')} × ${g('RrYy')} yields the classic 9 ∶ 3 ∶ 3 ∶ 1 phenotypic ratio (for unlinked genes), confirming the two genes assort independently.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-shortcut: the probability (product) rule.</b> A full 4 × 4 or 8 × 8 grid is slow and error-prone. Instead, treat each gene as an independent monohybrid and <b>multiply</b> probabilities. The probability of two independent events both happening is the product of their separate probabilities (product rule); the probability of either of two mutually exclusive outcomes is their sum (sum rule). For ${g('RrYy')} × ${g('RrYy')}, P(round & yellow) = ${tq} × ${tq} = ${fr(9, 16)}: the “9” in 9 ∶ 3 ∶ 3 ∶ 1, with no grid at all.`,
      },
      {
        t: 'p',
        html: `<b>Procedure C: Using a test cross to expose a genotype</b><br>A purple plant is either ${g('PP')} or ${g('Pp')}: phenotype alone cannot tell. Cross it with the homozygous recessive ${g('pp')}:<br>• if the unknown is ${g('PP')}: all offspring are ${g('Pp')} → <b>all purple</b> (1 ∶ 0);<br>• if the unknown is ${g('Pp')}: offspring are ${half}${g('Pp')} ∶ ${half}${g('pp')} → 1 <b>purple</b> ∶ 1 <b>green</b>.<br>The appearance of any recessive offspring proves the parent was heterozygous. <b>Why a homozygous recessive partner:</b> it contributes only recessive alleles, so the offspring’s phenotype directly mirrors the unknown parent’s gamete types.`,
      },
      {
        t: 'p',
        html: `<b>Procedure D: Recognising the deviations</b><br><b>Incomplete dominance.</b> Neither allele fully dominates; the heterozygote shows a new, intermediate phenotype. Classic case: flower colour in <i>Mirabilis jalapa</i> (four o’clock plant) and <i>Antirrhinum</i> (snapdragon). Cross red (${g('RR')}) × white (${g('rr')}) → <b>pink</b> (${g('Rr')}) F<sub>1</sub>. Selfing the F<sub>1</sub> gives 1 red ∶ 2 pink ∶ 1 white. Note the phenotypic ratio now equals the genotypic ratio, because every genotype looks different. In many pigment genes the recessive allele produces a non-functional (or reduced) enzyme, so one dose of the functional allele cannot make full pigment. Crucially, this is <b>not</b> blending: the red and white parents reappear unchanged in F<sub>2</sub>, proving the alleles stayed pure.<br><br><b>Codominance.</b> Both alleles express fully and independently in the heterozygote: you see both parental products, not a blend. The textbook case is the human <b>ABO blood group</b>, governed by one gene ${g('I')} with three alleles, ${IA}, ${IB}, ${g('i')}. Here ${IA} and ${IB} are codominant (both make their own surface sugar), and both are dominant over ${g('i')}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Genotype', 'Blood group (phenotype)'],
        rows: [
          [`${IA}${IA}, ${IA}${g('i')}`, 'A'],
          [`${IB}${IB}, ${IB}${g('i')}`, 'B'],
          [`${IA}${IB}`, 'AB'],
          [g('ii'), 'O'],
        ],
      },
      {
        t: 'p',
        html: 'This single example carries <b>two</b> ideas at once: <b>multiple allelism</b> (a gene with more than two alleles in the population: here three, giving <b>6 genotypes</b> and <b>4 phenotypes</b>) and <b>codominance</b> (visible in the AB heterozygote).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `<b>Clean monohybrid presentation.</b> In brinjal, purple fruit colour (${g('P')}) is dominant over green (${g('p')}). A true-breeding purple plant is crossed with a true-breeding green plant. Give the F<sub>1</sub> and F<sub>2</sub> ratios.`,
        steps: [
          `<b>Given:</b> Parents ${g('PP')} (purple) and ${g('pp')} (green). <b>F<sub>1</sub>:</b> ${g('PP')} × ${g('pp')} → all ${g('Pp')} = <b>all purple</b>. <b>F<sub>2</sub> (${g('Pp')} × ${g('Pp')}):</b>`,
          `Punnett square (gametes of one parent across the top, of the other down the side):<br>Row ${g('P')}: column ${g('P')} gives ${g('PP')}; column ${g('p')} gives ${g('Pp')}<br>Row ${g('p')}: column ${g('P')} gives ${g('Pp')}; column ${g('p')} gives ${g('pp')}`,
          `<b>Genotypic ratio</b> = 1 ${g('PP')} ∶ 2 ${g('Pp')} ∶ 1 ${g('pp')}. <b>Phenotypic ratio</b> = 3 purple ∶ 1 green.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: `<b>Gametes and offspring fraction.</b> (a) How many gamete types does an individual of genotype ${g('AaBBCcDd')} produce? (b) In the cross ${g('AaBbCc')} × ${g('AaBbCc')}, what fraction of offspring are ${g('aabbcc')}?`,
        steps: [
          `<b>Speed logic:</b> only heterozygous gene pairs generate gamete variety; use 2<sup><i>n</i></sup>. (a) Heterozygous pairs in ${g('AaBBCcDd')}: ${g('Aa')}, ${g('Cc')}, ${g('Dd')} ⇒ ${g('n')} = 3 ⇒ 2<sup>3</sup> = <b>8</b> gamete types. (The ${g('BB')} pair is homozygous and contributes nothing: the classic trap is counting it.) (b) For each gene, P(recessive homozygote) = ${qtr}. By the product rule: (${qtr})<sup>3</sup> = ${fr(1, 64)}.`,
          `<b>Trap:</b> students reflexively use 2<sup>4</sup> in (a) by counting all four letters. Count heterozygous pairs only.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Blood group: codominance + multiple alleles + probability.</b> A man with blood group <b>AB</b> marries a woman with blood group <b>O</b>. What blood groups can their children have, and what is the probability that a given child is group A?',
        steps: [
          `<b>Genotypes:</b> AB man = ${IA}${IB}; O woman = ${g('ii')}. <b>Gametes:</b> man → ${half}${IA}, ${half}${IB}; woman → all ${g('i')}. <b>Offspring:</b> ${half}${IA}${g('i')} (group A) ∶ ${half}${IB}${g('i')} (group B).`,
          `Children can be only <b>A or B</b>, in 1 ∶ 1. <b>Neither AB nor O is possible.</b> P(group A) = ${half}.`,
          `<b>Trap:</b> “AB × O → AB and O” feels symmetric and is completely wrong. AB parents cannot pass on ${g('i')}, and the O parent cannot pass on ${IA} or ${IB}, so the very groups people guess are the two that are excluded.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Incomplete dominance + dihybrid + probability.</b> In snapdragon, flower colour shows incomplete dominance: ${g('RR')} = red, ${g('Rr')} = pink, ${g('rr')} = white. Plant height shows complete dominance: ${g('T')} (tall) dominant over ${g('t')} (dwarf). Cross ${g('RrTt')} × ${g('RrTt')}. (a) What is the probability of a <b>pink, tall</b> offspring? (b) How many distinct phenotypic classes appear?`,
        steps: [
          '<b>Treat each gene independently (product rule).</b>',
          `• Colour (${g('Rr')} × ${g('Rr')}): ${qtr} red ∶ ${half} pink ∶ ${qtr} white → P(pink) = ${half}.<br>• Height (${g('Tt')} × ${g('Tt')}): ${tq} tall ∶ ${qtr} dwarf → P(tall) = ${tq}.`,
          `(a) P(pink and tall) = ${half} × ${tq} = ${fr(3, 8)}.`,
          '(b) Colour gives <b>3</b> visible classes (because incomplete dominance makes the heterozygote distinct), height gives <b>2</b>. Total phenotypic classes = 3 × 2 = <b>6</b>, not the 4 of an ordinary dihybrid. This is precisely where a deviation rewrites the familiar answer.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] In pea, round seed (${g('R')}) is dominant over wrinkled (${g('r')}). State the phenotypic and genotypic ratios in the F<sub>2</sub> of ${g('Rr')} × ${g('Rr')}.`,
            a: 'Phenotype 3 ∶ 1, genotype 1 ∶ 2 ∶ 1',
          },
          {
            q: '[CUET] Name the type of inheritance in which the F<sub>1</sub> hybrid shows a phenotype intermediate between the two parents, with an F<sub>2</sub> phenotypic ratio of 1 ∶ 2 ∶ 1.',
            a: 'Incomplete dominance',
          },
          {
            q: `[NEET] A woman of blood group A (genotype ${IA}${g('i')}) marries a man of blood group B (genotype ${IB}${g('i')}). List every blood group their children could have.`,
            a: 'A, B, AB and O (all four)',
          },
          {
            q: `[NEET] How many types of gametes are produced by an individual of genotype ${g('AaBbCC')}?`,
            a: '2<sup>2</sup> = 4 types',
          },
          {
            q: `[NEET High-Difficulty] In a dihybrid test cross ${g('YyRr')} × ${g('yyrr')}, state the expected phenotypic ratio of offspring.`,
            a: '1 ∶ 1 ∶ 1 ∶ 1',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The phenotypic ratio of a <b>dihybrid test cross</b> is:',
        opts: [
          { label: '9 ∶ 3 ∶ 3 ∶ 1', nudge: '<b>(a)</b> is the F<sub>2</sub> selfing ratio, chosen by students who confuse a test cross with selfing the F<sub>1</sub>.' },
          { label: '1 ∶ 1 ∶ 1 ∶ 1', nudge: null },
          { label: '3 ∶ 1', nudge: '<b>(c)</b> and <b>(d)</b> are monohybrid ratios picked by those who forget a dihybrid tracks two genes.' },
          { label: '1 ∶ 2 ∶ 1', nudge: '<b>(c)</b> and <b>(d)</b> are monohybrid ratios picked by those who forget a dihybrid tracks two genes.' },
        ],
        correct: 1,
        solution: `A test cross uses a homozygous recessive (${g('yyrr')}), which contributes only recessive alleles, so the offspring directly display the four equally frequent gamete types of the ${g('YyRr')} parent.`,
      },
      {
        t: 'mcq',
        q: 'The inheritance of the human ABO blood group is an example of:',
        opts: [
          { label: 'incomplete dominance only', nudge: '<b>(a)</b> confuses codominance (both alleles fully expressed) with incomplete dominance (a blended intermediate).' },
          { label: 'multiple allelism and codominance', nudge: null },
          { label: 'codominance and linkage', nudge: '<b>(c)</b> wrongly imports “linkage”: a single gene cannot show linkage.' },
          { label: 'polygenic inheritance', nudge: '<b>(d)</b> polygenic means many genes for one trait, the reverse situation.' },
        ],
        correct: 1,
        solution: `The gene ${g('I')} has three alleles (${IA}, ${IB}, ${g('i')}) → multiple allelism; ${IA} and ${IB} both express in the AB heterozygote → codominance.`,
      },
      {
        t: 'mcq',
        q: `Red (${g('RR')}) and white (${g('rr')}) four o’clock plants are crossed. The F<sub>1</sub> flower colour is:`,
        opts: [
          { label: 'red', nudge: '<b>(a)</b> assumes complete dominance (the default reflex).' },
          { label: 'white', nudge: '<b>(b)</b> assumes white dominates.' },
          { label: 'pink', nudge: null },
          { label: 'cannot be predicted', nudge: '<b>(d)</b> ignores that the inheritance pattern is given and fully predictable.' },
        ],
        correct: 2,
        solution: `Flower colour in <i>Mirabilis jalapa</i> shows incomplete dominance, so the heterozygote ${g('Rr')} is the intermediate pink.`,
      },
      {
        t: 'mcq',
        q: 'The number of distinct <b>genotypes</b> in the F<sub>2</sub> of a standard dihybrid cross is:',
        opts: [
          { label: '2', nudge: '<b>(a)</b> 2 is the number of homozygous genotypes of one gene (<i>TT</i>, <i>tt</i>), not the dihybrid count.' },
          { label: '4', nudge: '<b>(b)</b> 4 is the number of phenotypes.' },
          { label: '9', nudge: null },
          { label: '16', nudge: '<b>(d)</b> 16 is the number of boxes in the Punnett square, not distinct genotypes.' },
        ],
        correct: 2,
        solution: 'The dihybrid F<sub>2</sub> genotypic ratio is 1 ∶ 2 ∶ 1 ∶ 2 ∶ 4 ∶ 2 ∶ 1 ∶ 2 ∶ 1, summing to 16 individuals across <b>9</b> distinct genotypes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up genotypic and phenotypic ratios.</b> Monohybrid F<sub>2</sub> is 3 ∶ 1 by phenotype but 1 ∶ 2 ∶ 1 by genotype. Read the question’s wording before answering.',
          '<b>Confusing incomplete dominance with codominance.</b> Both give a 1 ∶ 2 ∶ 1 phenotypic ratio, so students treat them as identical. The difference is the heterozygote: incomplete dominance shows a blended intermediate (pink), codominance shows both parental traits fully and separately (AB blood, or both red and white patches). Intermediate = incomplete; both-at-once = co.',
          '<b>Forgetting the test cross needs a homozygous recessive partner.</b> Crossing with any recessive-looking or any parental plant is a back cross, not necessarily a test cross. Only the homozygous recessive cleanly reveals the unknown genotype.',
          `<b>Treating blood group O as “dominant” or counting ${g('BB')}-type homozygotes as variable.</b> ${g('i')} is recessive; and homozygous gene pairs contribute zero gamete variety.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any multi-gene cross with independently assorting (unlinked) genes, never draw a giant Punnett square. Split it into separate monohybrid crosses, find each probability, and <b>multiply</b> (product rule). P(specific multi-trait offspring) is just the product of the single-gene probabilities: faster, and far fewer arithmetic slips under exam pressure. Pair this with 2<sup><i>n</i></sup> for counting gamete types.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Three laws', note: 'Dominance (with complete dominance, F<sub>1</sub> shows the dominant; explains 3 ∶ 1) → Segregation/purity of gametes (alleles separate, one per gamete) → Independent assortment (different genes assort freely; from 9 ∶ 3 ∶ 3 ∶ 1).' },
          { f: 'Ratios', note: 'monohybrid 3 ∶ 1 (geno 1 ∶ 2 ∶ 1); dihybrid 9 ∶ 3 ∶ 3 ∶ 1 (9 genotypes); test cross 1 ∶ 1 (mono) and 1 ∶ 1 ∶ 1 ∶ 1 (di); incomplete dominance and codominance both 1 ∶ 2 ∶ 1.' },
          { f: 'Gamete types = 2<sup><i>n</i></sup> for independently assorting genes, where <i>n</i> = number of heterozygous gene pairs.', note: '' },
          { f: 'Deviations', note: 'incomplete dominance = intermediate heterozygote (pink, <i>Mirabilis</i>/snapdragon); codominance = both alleles fully shown (ABO blood group).' },
          { f: 'ABO', note: `gene ${g('I')}, alleles ${IA}, ${IB}, ${g('i')}; ${IA}, ${IB} codominant and both > ${g('i')}; <b>6 genotypes, 4 phenotypes</b>.` },
          { f: 'Multi-gene shortcut', note: 'solve each gene as a monohybrid, then <b>multiply</b> probabilities (product rule).' },
        ],
        aids: ['“Intermediate = incomplete; both-at-once = co.”', 'For test cross: “Cross the unknown with the double-recessive to make it confess.”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 170–176 ─────────────────────────
  {
    n: '02',
    title: 'Chromosomal Theory, Linkage & Sex Determination',
    kalam: 'By 1900, microscopes had improved enough that biologists could watch chromosomes pair up and separate during meiosis.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> A frequently tested topic, especially on linkage groups, recombination-frequency/map-unit numericals and the four sex-determination systems with their heterogametic sex. CUET asks 1–2 direct recall items (who proposed what, which system in which animal). CBSE Boards set 2–3 mark questions on the chromosomal theory or “why the father determines a child’s sex.” ${SHARE}`,
      },
      {
        t: 'p',
        html: 'In Topic 01 Mendel handed us “factors” that segregate and assort, but he never knew where they physically sat. He was reasoning about invisible units. The story of this topic is how those abstract factors got a street address: the chromosome.',
      },
      {
        t: 'p',
        html: 'By 1900, microscopes had improved enough that biologists could watch chromosomes pair up and separate during meiosis. <b>Walter Sutton and Theodor Boveri</b> noticed something striking: the way chromosomes behave during gamete formation (pairing, then separating, one of each pair into each gamete) runs exactly parallel to the way Mendel’s factors segregate. They put the two ideas together into the <b>Chromosomal Theory of Inheritance</b>: genes are carried on chromosomes, and the movement of chromosomes during meiosis is the physical machinery behind Mendel’s laws.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a fleet of Mumbai local trains (chromosomes), each carrying a fixed list of passengers (genes) in a fixed seating order. Mendel had been studying the passengers’ arrival patterns at stations without ever realising they travelled on trains. Sutton and Boveri pointed at the trains. Suddenly two passengers who always arrive together make sense: they were sharing a coach.',
      },
      {
        t: 'p',
        html: 'That last point is the second big idea: <b>linkage</b>. Mendel’s independent assortment works beautifully if two genes ride different chromosomes. But <b>Thomas Hunt Morgan</b>, working on the fruit fly <i>Drosophila melanogaster</i>, found gene pairs that refused to assort independently: they were inherited together far more often than chance allowed. His explanation: those genes sit on the same chromosome, physically tied together. He called this <b>linkage</b>, and the occasional reshuffling that still happens, when homologous chromosomes swap segments during meiosis (<b>crossing over</b>), he called <b>recombination</b>. The closer two genes lie on a chromosome, the harder they are to separate (tight linkage, low recombination); the farther apart, the easier (loose linkage, high recombination).',
      },
      {
        t: 'p',
        html: 'Morgan saw this concretely in his flies. When he followed two genes that lay close together on the X chromosome (say, body colour and eye colour), the parental combinations dominated the offspring and recombinants were rare: tight linkage. When he followed two genes that lay farther apart on the same chromosome (eye colour and wing size), recombinants appeared far more often: loose linkage. Same chromosome in both cases; the only thing that changed was the distance between the genes, and the recombinant percentage tracked that distance faithfully.',
      },
      {
        t: 'p',
        html: 'This single insight turned out to be a ruler. If recombination frequency rises with distance, then measuring how often two genes recombine tells you how far apart they are. Morgan’s student <b>Alfred Sturtevant</b> used exactly this to draw the first <b>genetic map</b>.',
      },
      {
        t: 'p',
        html: 'The third idea is <b>sex determination</b>: how an organism ends up male or female. <b>Henking</b> (1891) spotted a mysterious “X-body” in insect sperm that went into only half the sperm, the first hint that a specific chromosome decides sex. Different groups solved the problem differently: humans and <i>Drosophila</i> use <b>XX (female) / XY (male)</b>; grasshoppers use <b>XX / XO</b> (males simply lack the second sex chromosome); birds flip it with <b>ZZ (male) / ZW (female)</b>; and honeybees use no sex chromosomes at all, deciding sex by how many full chromosome sets an individual has.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Recombination frequency approximates map distance only for small distances; over long stretches, double crossovers go undetected and the true distance is underestimated, and the maximum observable recombination frequency between two genes in a test cross is <b>50%</b> (at which they behave as if unlinked). (2) The “father determines the child’s sex” rule is specific to systems where the male is heterogametic: in birds it is the mother (the ZW sex) who decides. (3) The chromosomal theory was framed before anyone knew genes were DNA; it correctly located genes on chromosomes without explaining their chemistry.',
      },

      { t: 'part', title: 'Key definitions and genetic terminology' },
      {
        t: 'p',
        html: `• <b>Chromosomal theory of inheritance:</b> genes are located on chromosomes, and chromosome behaviour in meiosis accounts for Mendelian segregation and assortment (Sutton & Boveri, 1902).<br>• <b>Linkage:</b> the tendency of genes located on the same chromosome to be inherited together rather than assorting independently (Morgan, 1910).<br>• <b>Linked genes:</b> genes on the same chromosome; they produce more parental-type than recombinant-type offspring.<br>• <b>Recombination:</b> the production of non-parental (new) combinations of alleles.<br>• <b>Crossing over:</b> the physical exchange of corresponding segments between non-sister chromatids of homologous chromosomes during meiosis (at the pachytene stage); the mechanism behind recombination.<br>• <b>Complete linkage:</b> no recombinants formed (rare, as in male <i>Drosophila</i>, where crossing over does not occur). <b>Incomplete linkage:</b> some recombinants formed due to crossing over.<br>• <b>Linkage group:</b> the genes on one chromosome, which tend to be inherited together. The number of linkage groups equals the <b>haploid</b> number <i>n</i> when the sex chromosomes are alike or counted as one pair (pea 7, <i>Drosophila</i> 4, maize 10); where X and Y differ and are counted as two groups there is one more (a human male has 22 + X + Y = 24, a female 23).<br>• <b>Coupling and repulsion:</b> two arrangements of linked alleles. In <b>coupling</b>, the two dominant alleles lie on the same chromosome (<i>AB</i>/<i>ab</i>) and tend to stay together in a gamete; in <b>repulsion</b>, each chromosome carries one dominant and one recessive allele (<i>Ab</i>/<i>aB</i>), so the two dominant alleles come from different parents and tend to stay apart. The phenomenon was first noticed by Bateson and Punnett before Morgan named linkage.<br>• <b>Recombination frequency (RF):</b> the fraction of offspring that are recombinant, expressed as a percentage. RF = ${fr('recombinant offspring', 'total offspring')} × 100.<br>• <b>Map unit (centiMorgan, cM):</b> the unit of genetic distance; <b>1 cM = 1% recombination frequency</b>. RF is directly proportional to the distance between two genes (for small distances).<br>• <b>Genetic / linkage map:</b> a linear diagram of the relative positions and distances of genes along a chromosome, built from recombination frequencies (Sturtevant).<br>• <b>Homogametic sex:</b> produces only one type of gamete with respect to sex chromosomes (e.g. human female, XX → all X). <b>Heterogametic sex:</b> produces two types (e.g. human male, XY → half X, half Y). The heterogametic parent determines the offspring’s sex.<br>• <b>Sex-linked inheritance:</b> inheritance of genes carried on the sex chromosomes; <b>X-linked</b> genes lie on the X chromosome, <b>Y-linked (holandric)</b> genes on the Y.`,
      },
      {
        t: 'table',
        title: 'The four sex-determination systems',
        head: ['System', 'Female', 'Male', 'Heterogametic sex', 'Example'],
        rows: [
          ['XX–XO', 'XX', 'XO (one X, no Y)', 'Male', 'Grasshopper, cockroach'],
          ['XX–XY', 'XX', 'XY', 'Male', 'Human, <i>Drosophila</i>'],
          ['ZZ–ZW', 'ZW', 'ZZ', 'Female', 'Birds, butterflies'],
          ['Haplodiploidy', 'diploid (2<i>n</i>), from fertilised eggs', 'haploid (<i>n</i>), from unfertilised eggs', 'None (no sex chromosomes)', 'Honeybee'],
        ],
      },
      {
        t: 'p',
        html: '<b>Note (no SI units in this topic):</b> the only measured quantity is the map distance, whose unit is the centiMorgan (cM): a genetic, not physical, distance.',
      },

      { t: 'part', title: 'Key procedures and crosses' },
      {
        t: 'p',
        html: 'When a heterozygote is test-crossed (against the homozygous recessive), the offspring fall into two groups: <b>parental types</b> (the allele combinations the parent inherited) and <b>recombinant types</b> (new combinations made by crossing over).',
      },
      {
        t: 'proc',
        title: 'Procedure A: Reading a linkage cross',
        steps: [
          'Identify the <b>parental</b> classes: they are the most frequent two phenotypes.',
          'Identify the <b>recombinant</b> classes: the least frequent two.',
          'If recombinants are far fewer than parentals, the genes are <b>linked</b>. The rarer the recombinants, the tighter the linkage. <b>Why:</b> crossing over between two close-together genes is a rare event, so few recombinant gametes form.',
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: Calculating recombination frequency and map distance</b><br>RF = ${fr('number of recombinant offspring', 'total offspring')} × 100`,
      },
      {
        t: 'p',
        html: 'The result, read in percent, is the map distance in centiMorgans: an RF of 8% means the two genes sit <b>8 cM</b> apart. <b>Why this works:</b> the chance that a crossover falls between two genes increases steadily with the physical gap between them, so recombination frequency acts as a measuring tape.',
      },
      {
        t: 'p',
        html: '<b>Limiting condition:</b> this tape is only accurate over short distances. For genes far apart, double crossovers restore the parental arrangement and go uncounted, so the measured RF underestimates the true distance. The ceiling is <b>50%</b>: at 50% the genes behave as if they were on different chromosomes.',
      },
      { t: 'p', html: 'Given the three pairwise map distances between genes A, B and C, find their linear order:' },
      {
        t: 'proc',
        title: 'Procedure C: Three-point gene ordering',
        steps: [
          'Find the <b>largest</b> of the three distances. The two genes in that pair are the <b>outermost</b> genes.',
          'The third gene (the one missing from the largest pair) sits in the <b>middle</b>.',
          'Sanity check: for short distances the two shorter distances add up to the outer distance (over long stretches double crossovers make the measured values fall short).',
        ],
      },
      {
        t: 'p',
        html: '<b>Why:</b> on a straight line, the two end-points are always the farthest apart, and the two short segments sum to the long one (for short distances).',
      },
      {
        t: 'proc',
        title: 'Procedure D: Working out who determines sex',
        steps: [
          'Identify the <b>heterogametic</b> parent: the one producing two kinds of sex-chromosome gamete.',
          'That parent’s gamete decides the offspring’s sex; the homogametic parent contributes the same sex chromosome every time.',
          `Example (human): the mother (XX) always gives an X; the father (XY) gives X (→ XX daughter) or Y (→ XY son) with equal probability. Hence the <b>father</b> determines the child’s sex, and P(son) = P(daughter) = ${half}. In <b>birds</b> the logic flips: the mother (ZW) is heterogametic, so the <b>mother</b> determines the chick’s sex.`,
        ],
      },
      {
        t: 'p',
        html: 'A gene on the X chromosome (with no counterpart on the Y) shows a distinctive zig-zag transmission. Trace a recessive X-linked allele:',
      },
      {
        t: 'proc',
        title: 'Procedure E: The criss-cross pattern of X-linked inheritance',
        steps: [
          `An affected father (one affected X, written ${X('a')}${g('Y')}) passes his ${X('a')} to <b>all</b> his daughters but to <b>none</b> of his sons (sons receive his Y).`,
          `Those daughters become unaffected <b>carriers</b> (${X('A')}${X('a')}): the trait skips them because the allele is recessive and their second X is normal.`,
          `A carrier daughter then passes ${X('a')} to half her sons, who, having only one X, express it.`,
        ],
      },
      {
        t: 'p',
        html: 'So the trait travels grandfather → carrier daughter → grandson, appearing to “criss-cross” between the sexes and skip a generation. <b>Why males are affected more often:</b> a male needs only a single recessive X-linked allele to show the trait (he is <b>hemizygous</b>: one X), whereas a female needs two. (Specific X-linked conditions are treated in Topic 03, Genetic Disorders; here we study only the inheritance pattern.)',
      },
      {
        t: 'p',
        html: '<b>Procedure F: Counting linkage groups</b><br>The number of linkage groups equals the <b>haploid</b> chromosome number <i>n</i> (when the sex chromosomes are alike or counted as one pair), not the diploid number 2<i>n</i>. For an organism with 2<i>n</i> = 24: linkage groups = <i>n</i> = 12. <b>Why:</b> each distinct chromosome is one linkage group, and a haploid set contains one of each.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Sex determination, clean presentation.</b> A couple has four daughters. What is the probability that their fifth child is a son? Explain.',
        steps: [
          `<b>Reasoning:</b> the mother is XX (homogametic, always contributes X); the father is XY (heterogametic, contributes X or Y with equal chance). Each fertilisation is independent of previous ones. P(son) = P(father contributes Y) = ${half}.`,
          `The four previous daughters do <b>not</b> change this: biology has no memory of past births. <b>P(son) = ${half}.</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: '<b>Linkage groups.</b> A plant species has a diploid chromosome number 2<i>n</i> = 24. How many linkage groups does it possess?',
        steps: [
          `<b>Speed logic:</b> linkage groups = haploid number = ${fr('2<i>n</i>', 2)} = ${fr(24, 2)} = <b>12</b>.`,
          '<b>Trap:</b> the obvious wrong answer is 24 (using 2<i>n</i> directly) or 23 (confusing it with the human value). Halve 2<i>n</i> to the haploid number (the chapter’s rule for a plant with no distinct sex chromosomes).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Recombination frequency and map distance.</b> In a test cross of a dihybrid, 1000 offspring are scored and 80 of them are recombinant types. (a) Find the recombination frequency. (b) State the map distance between the two genes.',
        steps: [
          `RF = ${fr(80, 1000)} × 100 = 8%`,
          '(a) RF = <b>8%</b>.',
          '(b) Since 1 cM corresponds to 1% recombination, the genes are <b>8 cM</b> apart.',
          'The fact that only 80 of 1000 are recombinant (far below a 50 ∶ 50 split) confirms the genes are linked, not independent.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Three-point gene ordering.</b> For three linked genes the map distances are: A–B = 5 cM, B–C = 13 cM, A–C = 8 cM. Determine the linear order of the genes.',
        steps: [
          '<b>Step 1, largest distance:</b> B–C = 13 cM is the largest, so <b>B and C are the two outermost genes</b>. <b>Step 2, middle gene:</b> the gene missing from that pair is A, so <b>A</b> lies in the middle. <b>Step 3, additivity check:</b> A–B + A–C = 5 + 8 = 13 = B–C. ✓',
          '<b>Order: B–A–C</b> (with A central).',
          'The classic trap is to assume the first-listed pair (A–B) defines the ends. The order is dictated by the <b>largest</b> distance, not the order of listing.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Name the two scientists who proposed the chromosomal theory of inheritance.', a: 'Sutton and Boveri' },
          { q: '[CUET] In human beings, which sex is heterogametic, and what are its sex chromosomes?', a: 'Male; XY' },
          { q: '[NEET] A test cross between linked genes yields 18% recombinant offspring. What is the map distance between the two genes?', a: '18 cM' },
          { q: '[NEET] How many linkage groups are present in a species with a diploid chromosome number 2<i>n</i> = 14?', a: '<i>n</i> = 7 linkage groups' },
          { q: '[NEET High-Difficulty] Three genes give map distances A–B = 10 cM, A–C = 4 cM, B–C = 14 cM. Determine the gene order.', a: '<b>B–A–C</b> (B–C is largest at 14 = 10 + 4, so A is central).' },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of linkage groups in a species is equal to its:',
        opts: [
          { label: 'diploid chromosome number', nudge: '<b>(a)</b> double-counts homologous pairs.' },
          { label: 'haploid chromosome number', nudge: null },
          { label: 'total number of genes', nudge: '<b>(c)</b> confuses genes with chromosomes: one chromosome carries many genes.' },
          { label: 'number of recombinant types', nudge: '<b>(d)</b> is unrelated to chromosome count.' },
        ],
        correct: 1,
        solution: 'Each chromosome is one linkage group, and a haploid set contains one of each distinct chromosome.',
      },
      {
        t: 'mcq',
        q: 'One centiMorgan (map unit) corresponds to:',
        opts: [
          { label: '1% crossing over / recombination', nudge: null },
          { label: '50% recombination', nudge: '<b>(b)</b> is the maximum recombination frequency, marking unlinked genes, not the unit.' },
          { label: 'one full chromosome', nudge: '<b>(c)</b> and <b>(d)</b> confuse a genetic distance unit with physical structures or gene counts.' },
          { label: '100 genes', nudge: '<b>(c)</b> and <b>(d)</b> confuse a genetic distance unit with physical structures or gene counts.' },
        ],
        correct: 0,
        solution: 'By definition, 1 cM equals 1% recombination frequency between two genes.',
      },
      {
        t: 'mcq',
        q: 'In birds, the mechanism of sex determination is ZZ–ZW, and the heterogametic sex is the:',
        opts: [
          { label: 'male', nudge: '<b>(a)</b> wrongly transfers the human “male is heterogametic” rule to birds: the very point being tested.' },
          { label: 'female', nudge: null },
          { label: 'both equally', nudge: '<b>(c)</b> and <b>(d)</b> misunderstand that exactly one sex must be heterogametic.' },
          { label: 'neither', nudge: '<b>(c)</b> and <b>(d)</b> misunderstand that exactly one sex must be heterogametic.' },
        ],
        correct: 1,
        solution: 'In the ZZ–ZW system the male is ZZ (homogametic) and the female is ZW (heterogametic), so the female (the egg) determines the sex of the chick.',
      },
      {
        t: 'mcq',
        q: 'Recombination frequency between two genes on the same chromosome is directly proportional to:',
        opts: [
          { label: 'the number of chromosomes', nudge: '<b>(a)</b> and <b>(d)</b> are properties of the whole genome, not of a gene pair.' },
          { label: 'the distance between the two genes', nudge: null },
          { label: 'the dominance of the alleles', nudge: '<b>(c)</b> confuses which allele wins (dominance) with how often genes separate (recombination).' },
          { label: 'the ploidy of the organism', nudge: '<b>(a)</b> and <b>(d)</b> are properties of the whole genome, not of a gene pair.' },
        ],
        correct: 1,
        solution: 'A crossover is more likely to fall between two genes the farther apart they lie, so recombination frequency rises with distance: the basis of genetic mapping.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Linkage groups = haploid (<i>n</i>), not diploid (2<i>n</i>).</b> A very common slip. For 2<i>n</i> = 24, the answer is 12, not 24.',
          '<b>Assuming the mother determines the child’s sex.</b> It is the heterogametic parent: the father in humans (XY), but the <b>mother</b> in birds (ZW). Read the system before answering.',
          '<b>Confusing XX–XO with XX–XY.</b> In XX–XO there is no Y chromosome at all; the male simply has a single, unpaired X. Grasshopper males are XO, not XY.',
          '<b>Forgetting the 50% recombination ceiling.</b> The recombination frequency between two genes in a test cross cannot exceed 50% (a crossover involves only two of the four chromatids); genes showing 50% behave as if unlinked. A “60% recombination” option for two genes is wrong. (Long map distances, built by adding short intervals, can exceed 50 cM.)',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For three-point gene ordering, do not Punnett anything: just spot the <b>largest</b> of the three pairwise distances. Those two genes are the ends; the third gene sits between them, and the two short distances must add to the long one. It turns a confusing problem into a five-second check. Remember the limiting condition: this additivity holds cleanly only for short distances, because double crossovers make large RF values underestimate true distance.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Chromosomal theory', note: 'genes are on chromosomes; meiotic chromosome behaviour = Mendel’s segregation/assortment (<b>Sutton & Boveri</b>, 1902).' },
          { f: 'Linkage', note: 'genes on the same chromosome inherited together (<b>Morgan</b>, <i>Drosophila</i>); recombination via <b>crossing over</b> at pachytene.' },
          { f: 'Linkage groups = <i>n</i> (haploid number)', note: 'pea 7, <i>Drosophila</i> 4, maize 10, human 23 (24 in a male, since X and Y differ).' },
          { f: 'Recombination frequency', note: `RF = ${fr('recombinants', 'total')} × 100; <b>1 cM = 1% recombination</b>; RF ∝ distance (ceiling <b>50%</b> for two genes in a test cross).` },
          { f: 'Gene order', note: 'largest pairwise distance = the two end genes; the missing gene is central.' },
          { f: 'Sex determination', note: 'XX–XO (grasshopper, male heterogametic) • XX–XY (human, <i>Drosophila</i>, male heterogametic) • ZZ–ZW (birds, <b>female</b> heterogametic) • haplodiploidy (honeybee, no sex chromosomes) • temperature-dependent (crocodile; a fifth type, not in the table above). In <i>Drosophila</i> sex depends on the ratio of X chromosomes to sets of autosomes, not on the Y alone. Henking’s <b>X-body</b> (1891) was the first clue.' },
        ],
        aids: ['“Linkage groups go haploid” (use <i>n</i>).', '“Birds break the rule: the mother makes the call.”', '“Biggest distance = the two ends.”'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 177–184 ─────────────────────────
  {
    n: '03',
    title: 'Genetic Disorders',
    kalam: 'A person with one faulty and one normal copy is an unaffected carrier: healthy themselves, but able to pass the faulty allele on.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> A frequently tested topic. NEET asks about the karyotypes of Down, Klinefelter and Turner syndromes, X-linked probability problems and the sickle-cell molecular basis. CUET asks 1–2 recall items (which disorder is autosomal vs sex-linked). CBSE Boards often set a 2–3 mark question on the sickle-cell mechanism, a pedigree, or a “distinguish between two syndromes” item. ${SHARE}`,
      },
      {
        t: 'p',
        html: 'Why does a particular illness sometimes run through a family for generations, while another appears out of nowhere in a single child whose parents are perfectly healthy? The answer lies in where in the genome the problem sits, and that splits genetic disorders into two big families.',
      },
      {
        t: 'p',
        html: 'The first family is the <b>Mendelian disorders</b>: caused by a change (mutation) in a single gene. Because a single gene obeys Mendel’s rules, these disorders are inherited in predictable ratios, just like tall/dwarf in pea. The catch is that many are <b>recessive</b> (others, such as Huntington disease, are dominant): a recessive disorder needs two faulty copies to be affected. A person with one faulty and one normal copy is an unaffected <b>carrier</b>: healthy themselves, but able to pass the faulty allele on. This is exactly why two visibly healthy parents can have an affected child: both are silent carriers, and the child inherits the faulty allele from each.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A recessive disorder allele is like a recessive debt hidden in a joint family ledger. One parent carrying it quietly causes no trouble. But when two carriers marry and a child happens to inherit the hidden entry from both sides, the debt finally comes due. This is also why marriages between close relatives (consanguineous marriages) raise the risk: relatives are more likely to carry the same hidden allele.',
      },
      {
        t: 'p',
        html: 'The second family is the <b>chromosomal disorders</b>: caused not by a single faulty gene but by the wrong number of whole chromosomes. These usually arise fresh, by an accident during gamete formation called <b>non-disjunction</b>: a pair of chromosomes fails to separate during meiosis, so one gamete ends up with an extra chromosome and another with one too few. Fertilisation then produces an individual with 47 chromosomes (one extra) or 45 (one missing) instead of the usual 46. An extra copy of chromosome 21 gives <b>Down syndrome</b>; an extra X in a male gives <b>Klinefelter syndrome</b>; a missing X in a female gives <b>Turner syndrome</b>. Because the error happens during the formation of a single egg or sperm rather than being carried in the family ledger, these disorders usually appear with no prior family history. The accident becomes more likely as eggs age, which is why the chance of a non-disjunction disorder such as Down syndrome rises with the mother’s age: the eggs have been paused mid-meiosis for decades, and the machinery that separates chromosomes grows less reliable over time.',
      },
      {
        t: 'p',
        html: 'How do we study inheritance in humans, when we obviously cannot set up controlled crosses as Mendel did with peas? Human families have very few children and long generation times. So geneticists work backwards, using <b>pedigree analysis</b>, a family-tree diagram of who is affected across generations, to deduce whether a trait is dominant or recessive, autosomal or X-linked.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The clean Mendelian ratios (such as a one-in-four risk) are probabilities per child, not guarantees: a carrier couple can have four affected children in a row or none at all; each conception is independent. (2) Pedigree deductions assume complete penetrance and no new mutations; real pedigrees can be ambiguous. (3) Chromosomal disorders from non-disjunction are generally <b>not</b> inherited from a carrier parent: they are accidents of meiosis, and their frequency rises with maternal age. (A small share of Down syndrome cases comes from a translocation carried by a parent.)',
      },

      { t: 'part', title: 'Key definitions and genetic terminology' },
      {
        t: 'p',
        html: `• <b>Genetic disorder:</b> an illness caused by one or more abnormalities in the genome: either a single-gene mutation (Mendelian) or an abnormality in chromosome number/structure (chromosomal).<br>• <b>Mendelian disorder:</b> caused by alteration or mutation in a single gene; inherited in Mendelian ratios. May be <b>autosomal</b> (gene on a non-sex chromosome) or <b>sex-linked</b> (gene on a sex chromosome).<br>• <b>Chromosomal disorder:</b> caused by the excess, absence, or abnormal arrangement of one or more whole chromosomes.<br>• <b>Carrier:</b> a heterozygous individual who carries one copy of a recessive disorder allele but is phenotypically unaffected; can transmit the allele.<br>• <b>Non-disjunction:</b> failure of a chromosome pair to separate during meiosis, producing gametes with an abnormal chromosome number.<br>• <b>Aneuploidy:</b> gain or loss of one or a few chromosomes (e.g. 2<i>n</i> + 1 or 2<i>n</i> − 1), caused by non-disjunction. <b>Trisomy</b> = one extra chromosome (2<i>n</i> + 1); <b>monosomy</b> = one missing chromosome (2<i>n</i> − 1).<br>• <b>Karyotype:</b> the complete set of an individual’s chromosomes, described by number and sex chromosomes (e.g. 47, XXY).<br>• <b>Pedigree analysis:</b> study of the inheritance of a trait across several generations of a family using a standardised family-tree diagram.<br>• <b>Consanguineous mating:</b> mating between close relatives, raising the chance that both partners carry the same recessive allele.`,
      },
      {
        t: 'table',
        title: 'Mendelian disorders (single gene)',
        head: ['Disorder', 'Type', 'Defect'],
        rows: [
          ['Sickle-cell anaemia', 'Autosomal recessive', 'Point mutation in β-globin gene; glutamic acid → valine at the 6th position; RBCs sickle under low oxygen'],
          ['Phenylketonuria (PKU)', 'Autosomal recessive', 'Lack of the enzyme that converts phenylalanine to tyrosine; phenylpyruvic acid accumulates, impairing cognitive development'],
          ['Thalassaemia', 'Autosomal recessive', 'Reduced synthesis of α- or β-globin chains (a quantitative defect: too little normal globin)'],
          ['Haemophilia', 'X-linked recessive', 'A blood-clotting protein is non-functional; minor cuts bleed for a long time'],
          ['Colour blindness (red-green)', 'X-linked recessive', 'Defect in red/green cones; affected person cannot distinguish red from green'],
        ],
      },
      {
        t: 'table',
        title: 'Chromosomal disorders (non-disjunction → aneuploidy)',
        head: ['Disorder', 'Karyotype', 'Sex', 'Key features'],
        rows: [
          ['Down syndrome', '47 (trisomy of chromosome 21)', 'Either', 'Characteristic facial features, short stature, impaired cognitive development; risk rises with maternal age'],
          ['Klinefelter syndrome', '47, XXY (extra X)', 'Male', 'Overall masculine but with some feminine development (gynaecomastia); sterile'],
          ['Turner syndrome', '45, XO (monosomy X)', 'Female', 'Short stature, rudimentary ovaries, sterile; lack of secondary sexual characters'],
        ],
      },
      {
        t: 'p',
        html: '<b>Note (no SI units in this topic):</b> the quantities here are chromosome counts (whole numbers) and probabilities (pure fractions).',
      },

      { t: 'part', title: 'Key procedures and crosses' },
      {
        t: 'p',
        html: 'Standard symbols: a <b>square</b> is male, a <b>circle</b> is female; a <b>filled</b> symbol is an affected individual, an <b>open</b> symbol unaffected; a horizontal line joins a mating pair (a <b>double</b> line marks a consanguineous mating); a vertical line drops to their offspring.<br><br>To classify the trait:',
      },
      {
        t: 'proc',
        title: 'Procedure A: Reading a pedigree',
        steps: [
          '<b>Dominant or recessive?</b> If two affected parents ever produce an unaffected child, the trait is <b>dominant</b> (the child must be homozygous recessive, so “normal” is recessive). If two unaffected parents produce an affected child, the trait is <b>recessive</b>. <b>Why:</b> an affected child from unaffected parents means both parents hid the allele: only possible if the disorder allele is recessive.',
          '<b>Autosomal or X-linked?</b> If affected individuals are roughly equal across sexes, suspect <b>autosomal</b>. If affected individuals are overwhelmingly male, and the trait skips from an affected grandfather through an unaffected carrier daughter to a grandson, suspect <b>X-linked recessive</b>.',
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: Predicting offspring of an autosomal recessive disorder</b><br>For two carriers ${g('Aa')} × ${g('Aa')} (where ${g('a')} is the recessive disorder allele):<br>1 ${g('AA')} ∶ 2 ${g('Aa')} ∶ 1 ${g('aa')}<br>So ${qtr} of children are <b>affected</b> (${g('aa')}), ${half} are unaffected <b>carriers</b> (${g('Aa')}), and ${qtr} are unaffected <b>non-carriers</b> (${g('AA')}). <b>Why:</b> this is just a monohybrid cross: the disorder allele follows Mendel’s law of segregation exactly.`,
      },
      {
        t: 'p',
        html: `<b>Procedure C: Predicting offspring of an X-linked recessive disorder</b><br>Track only the X chromosomes, because the Y carries no allele for these genes: a son’s phenotype is decided entirely by the single X he receives from his mother.<br>• <b>Carrier mother (${X('A')}${X('a')}) × normal father (${X('A')}${g('Y')}):</b> sons are ${half} affected, ${half} normal; <b>all</b> daughters are unaffected (they always receive the father’s normal ${X('A')}), and half of them are carriers.<br>• <b>Affected father (${X('a')}${g('Y')}) × carrier mother (${X('A')}${X('a')}):</b> now daughters can be affected (${X('a')}${X('a')}), because they receive the father’s ${X('a')}. This is the only common route to an affected daughter.<br><b>Why daughters are usually spared:</b> a daughter needs two faulty X copies, so she needs a faulty X from both parents, which requires an affected father (and a carrier or affected mother).`,
      },
      {
        t: 'proc',
        title: 'Procedure D: How non-disjunction produces a chromosomal disorder',
        steps: [
          'During meiosis in one parent, a chromosome pair (or the sex chromosomes) fails to separate.',
          'One resulting gamete carries an <b>extra</b> chromosome, another is <b>missing</b> one.',
          'After fertilisation with a normal gamete, the zygote is <b>trisomic</b> (2<i>n</i> + 1) or <b>monosomic</b> (2<i>n</i> − 1).',
          'Trisomy 21 → <b>Down syndrome</b>; an extra X in a male (XXY) → <b>Klinefelter</b>; a missing X in a female (XO) → <b>Turner</b>.',
        ],
      },
      {
        t: 'p',
        html: `<b>The sickle-cell mechanism (worth knowing precisely)</b><br>A single base change in the β-globin gene (the 6th codon changes from GAG to GUG in the mRNA; GAG to GTG on the coding strand of the DNA) swaps one amino acid, <b>glutamic acid → valine</b>, at the 6th position of the β-globin chain. That one substitution makes haemoglobin (now called HbS) clump when oxygen is low, deforming red cells into a sickle shape. Genotypes: ${Hb('A')}${Hb('A')} = normal; ${Hb('A')}${Hb('S')} = unaffected <b>carrier</b> (sickle-cell trait); ${Hb('S')}${Hb('S')} = affected. Notably, carriers have some resistance to malaria: a classic example of why a “harmful” allele persists in malaria-endemic populations.`,
      },
      {
        t: 'p',
        html: '<b>Sickle-cell versus thalassaemia (a favourite “distinguish between”)</b><br>Both are autosomal recessive blood disorders involving globin, but the defect is fundamentally different in kind. In <b>sickle-cell anaemia</b> the defect is <b>qualitative</b>: a normal amount of globin is made, but it is the wrong globin (a single amino-acid substitution gives abnormal HbS). In <b>thalassaemia</b> the defect is <b>quantitative</b>: the globin made is structurally normal, but too little of it is produced because the rate of synthesis of the α-chain (α-thalassaemia) or β-chain (β-thalassaemia) is reduced. Put simply: sickle-cell makes bad haemoglobin; thalassaemia makes too little haemoglobin. This single distinction is a frequently tested contrast.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `<b>Autosomal recessive cross, clean presentation.</b> Both members of a couple are unaffected carriers of sickle-cell anaemia (${Hb('A')}${Hb('S')}). What is the probability that their child (a) is affected, (b) is a carrier?`,
        steps: [
          `<b>Cross:</b> ${Hb('A')}${Hb('S')} × ${Hb('A')}${Hb('S')}.`,
          `Punnett square (gametes of one parent across the top, of the other down the side):<br>Row ${Hb('A')}: column ${Hb('A')} gives ${Hb('A')}${Hb('A')}; column ${Hb('S')} gives ${Hb('A')}${Hb('S')}<br>Row ${Hb('S')}: column ${Hb('A')} gives ${Hb('A')}${Hb('S')}; column ${Hb('S')} gives ${Hb('S')}${Hb('S')}`,
          `Ratio 1 ${Hb('A')}${Hb('A')} ∶ 2 ${Hb('A')}${Hb('S')} ∶ 1 ${Hb('S')}${Hb('S')}. (a) P(affected, ${Hb('S')}${Hb('S')}) = ${qtr}. (b) P(carrier, ${Hb('A')}${Hb('S')}) = ${half}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: '<b>Karyotype identification.</b> An individual has 47 chromosomes with the karyotype 44 + XXY. Name the syndrome and its cause.',
        steps: [
          '<b>Speed logic:</b> count gives 47 (one extra). The sex chromosomes are XXY: a <b>male</b> with one extra X. That is <b>Klinefelter syndrome</b>, caused by <b>non-disjunction</b> of the sex chromosomes during gamete formation.',
          '<b>Trap:</b> XXY (Klinefelter, male, 47) is constantly confused with XO (Turner, female, 45). Lock it in: extra X in a male = Klinefelter; missing X in a female = Turner.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>X-linked recessive probability.</b> A woman who is a carrier for red-green colour blindness (${X('C')}${X('c')}) marries a man with normal colour vision (${X('C')}${g('Y')}). Find the probability that (a) a son is colour blind, (b) a daughter is colour blind.`,
        steps: [
          `<b>Mother’s gametes:</b> ${half}${X('C')}, ${half}${X('c')}. <b>Father’s gametes:</b> ${half}${X('C')}, ${half}${g('Y')}.`,
          `(a) <b>Sons</b> receive the father’s Y, so their X comes only from the mother: ${half}${X('C')}${g('Y')} (normal) and ${half}${X('c')}${g('Y')} (colour blind) → P(son colour blind) = ${half}.`,
          `(b) <b>Daughters</b> receive the father’s ${X('C')}, so every daughter has at least one normal X → <b>none are colour blind</b>, P = 0 (though half are carriers).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>The cross that affects daughters.</b> A colour-blind man (${X('c')}${g('Y')}) marries a carrier woman (${X('C')}${X('c')}). Find (a) the probability that a daughter is colour blind, and (b) the probability that any given child is colour blind.`,
        steps: [
          `<b>Mother’s gametes:</b> ${half}${X('C')}, ${half}${X('c')}. <b>Father’s gametes:</b> ${half}${X('c')}, ${half}${g('Y')}.`,
          `(a) <b>Daughters</b> receive the father’s ${X('c')}: half are ${X('C')}${X('c')} (carrier, normal) and half ${X('c')}${X('c')} (colour blind) → P(daughter colour blind) = ${half}. This is the only common way colour blindness shows up in a girl: it needs an <b>affected father</b> (and a carrier or affected mother).`,
          `(b) <b>Sons</b> receive the father’s Y; their X is from the mother: ${half} colour blind. Combining:<br>${g('P')}(child colour blind) = ${half} × ${half} (daughters) + ${half} × ${half} (sons) = ${qtr} + ${qtr} = ${half}.`,
          'Half of all children, sons and daughters alike, are colour blind, the highest you can get without an affected mother.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Name two autosomal recessive Mendelian disorders and two X-linked recessive Mendelian disorders.', a: 'Autosomal recessive: sickle-cell anaemia, phenylketonuria, thalassaemia (any two); X-linked recessive: haemophilia, colour blindness' },
          { q: '[CUET] An individual has the karyotype 44 + XO (45 chromosomes). Which syndrome is this?', a: 'Turner syndrome' },
          { q: '[NEET] Two unaffected parents are both carriers for phenylketonuria. What is the probability that their child is affected?', a: qtr },
          { q: '[NEET] In sickle-cell anaemia, which amino acid replaces glutamic acid at the sixth position of the β-globin chain?', a: 'Valine' },
          { q: '[NEET High-Difficulty] A haemophilic man marries a woman who is homozygous normal. What is the probability that their sons are haemophilic?', a: '<b>0</b>: sons get the mother’s normal X and the father’s Y, so all sons are unaffected; all daughters become carriers.' },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Down syndrome is caused by:',
        opts: [
          { label: 'monosomy of chromosome 21', nudge: '<b>(a)</b> monosomy 21 is generally non-viable, not Down syndrome.' },
          { label: 'trisomy of chromosome 21', nudge: null },
          { label: 'an extra X chromosome', nudge: '<b>(c)</b> an extra X gives Klinefelter, not Down.' },
          { label: 'deletion in chromosome 21', nudge: '<b>(d)</b> a deletion is a structural change, whereas Down is a numerical (trisomy) change.' },
        ],
        correct: 1,
        solution: 'Down syndrome results from three copies of chromosome 21 (trisomy 21), giving 47 chromosomes, due to non-disjunction.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is an X-linked recessive disorder?',
        opts: [
          { label: 'sickle-cell anaemia', nudge: '<b>(a)</b> and <b>(b)</b> are autosomal recessive Mendelian disorders: a frequent mix-up.' },
          { label: 'phenylketonuria', nudge: '<b>(a)</b> and <b>(b)</b> are autosomal recessive Mendelian disorders: a frequent mix-up.' },
          { label: 'haemophilia', nudge: null },
          { label: 'Down syndrome', nudge: '<b>(d)</b> is a chromosomal disorder, not a single-gene sex-linked one.' },
        ],
        correct: 2,
        solution: 'Haemophilia is caused by a recessive allele on the X chromosome.',
      },
      {
        t: 'mcq',
        q: 'Turner syndrome (45, XO) arises due to:',
        opts: [
          { label: 'a point mutation', nudge: '<b>(a)</b> and <b>(d)</b> are gene-level (single base) changes, not changes in chromosome number.' },
          { label: 'non-disjunction of sex chromosomes', nudge: null },
          { label: 'polyploidy', nudge: '<b>(c)</b> polyploidy means whole extra sets, not the loss of a single chromosome.' },
          { label: 'a frameshift mutation', nudge: '<b>(a)</b> and <b>(d)</b> are gene-level (single base) changes, not changes in chromosome number.' },
        ],
        correct: 1,
        solution: 'The loss of one sex chromosome (giving a single X) results from non-disjunction during gamete formation.',
      },
      {
        t: 'mcq',
        q: 'Two carrier parents for an autosomal recessive disorder have a child. The probability that the child is a <b>carrier</b> is:',
        opts: [
          { label: qtr, nudge: `<b>(a)</b> ${qtr} is the <b>affected</b> (${g('aa')}) probability: the most common confusion.` },
          { label: half, nudge: null },
          { label: tq, nudge: `<b>(c)</b> ${tq} is the probability of being <b>unaffected</b> (carrier + non-carrier).` },
          { label: '1', nudge: '<b>(d)</b> 1 ignores segregation entirely.' },
        ],
        correct: 1,
        solution: `A cross ${g('Aa')} × ${g('Aa')} gives 1 ${g('AA')} ∶ 2 ${g('Aa')} ∶ 1 ${g('aa')}; the heterozygous (carrier) class is ${fr(2, 4)} = ${half}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing Klinefelter with Turner.</b> Klinefelter is 47, XXY (a <b>male</b> with an <b>extra</b> X); Turner is 45, XO (a <b>female</b> missing an X). Anchor it as “extra X → Klinefelter male; missing X → Turner female.”',
          '<b>Forgetting that X-linked recessive daughters are usually unaffected.</b> When the father is normal, <b>no</b> daughter can inherit the condition from him: she gets his normal X, so she is at most a carrier. An affected daughter needs an <b>affected father</b> and a carrier or affected mother. Many students wrongly mark daughters as 50% affected.',
          `<b>Mixing up carrier and affected.</b> For sickle-cell, ${Hb('A')}${Hb('S')} is an unaffected carrier (trait), while ${Hb('S')}${Hb('S')} is the affected (disease) genotype. The ${qtr} figure is the <b>affected</b> risk, not the carrier risk (${half}).`,
          '<b>Misclassifying the disorder type.</b> Sickle-cell, PKU and thalassaemia are <b>autosomal</b> recessive; haemophilia and colour blindness are <b>X-linked</b> recessive; Down, Klinefelter and Turner are <b>chromosomal</b> (numerical). Memorise which bucket each falls in: examiners test exactly this.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any X-linked problem, ignore the Y entirely and track only the X chromosomes: the Y carries no allele, so a son’s phenotype is fixed by the single X from his mother. That one habit reframes the whole problem as a quick check of which X each child receives: a carrier mother passes the allele to one half of her sons.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Two families of disorders', note: 'Mendelian (single gene, follows Mendelian ratios) and chromosomal (wrong chromosome number, from non-disjunction).' },
          { f: 'Mendelian: autosomal recessive', note: 'sickle-cell anaemia, phenylketonuria, thalassaemia. <b>X-linked recessive:</b> haemophilia, colour blindness.' },
          { f: 'Sickle-cell', note: `point mutation, codon GAG → GUG in the mRNA (GAG → GTG on the coding strand of the DNA), <b>glutamic acid → valine</b> at 6th position of β-globin; ${Hb('S')}${Hb('S')} = affected, ${Hb('A')}${Hb('S')} = carrier (malaria-resistant).` },
          { f: 'Chromosomal (non-disjunction)', note: 'Down = <b>trisomy 21</b> (47) • Klinefelter = <b>47, XXY</b> (male) • Turner = <b>45, XO</b> (female).' },
          { f: 'Autosomal recessive carrier × carrier', note: `→ ${qtr} affected, ${half} carrier, ${qtr} normal.` },
          { f: 'X-linked recessive', note: 'affected sons need only a carrier mother; affected daughters need an <b>affected father</b> (and a carrier or affected mother).' },
          { f: 'Pedigree symbols', note: '□ male, ○ female, filled = affected, single line = mating, double line = consanguineous.' },
        ],
        aids: ['“Extra X, Klinefelter male; missing X, Turner female.”', '“Sickle swaps Glu for Val at six.”', '“X-linked daughters stay safe unless dad’s affected.”'],
      },
    ],
  },
];
