import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 4 (Principles of Inheritance and Variation), Topics 04 and 05 and Additional topics A to C,
 * word for word from the Class 12 Biology Master Reference (pp. 185 to 206).
 *
 * Topic 04 Polygenic Inheritance & Pleiotropy, pp. 185 to 191 (starts at the top of p. 185; the cheat sheet ends
 * p. 191). Topic 05 Mutation, pp. 192 to 198 (starts at the top of p. 192). The "Overview" paragraph of the book's
 * Additional Topics (p. 199) heads Additional topic A's Introduction (its page header and heading are not copied).
 * A Epistasis and Derived Dihybrid Ratios, pp. 199 to 202 (answers end on p. 202, where Addendum B begins);
 * B Pedigree Analysis: Worked Examples and Interpretation, pp. 202 to 204 (answers end on p. 204, where Addendum C
 * begins); C Extended Blood Group Inheritance: Bombay Phenotype and Rh Factor, pp. 204 to 206 (answers end on p. 206,
 * where Addendum D begins). No figure occurs on these pages (only ruled table lines).
 *
 * Topic indexes (position in the chapter's topics array): Topics 01 to 05 = 0 to 4, Additional A to C = 5 to 7.
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one line, ratios with
 * the book's "∶", gene symbols and genotypes italic throughout, including Topic 04 (DECISIONS-B12 10; the page prints AaBbCc upright there, the review ruled it italic), ploidy as 2<i>n</i>. "Subtopic" is
 * "topic", "Addendum P" is "Additional topic G". The book's options are (a) to (d), kept as printed.
 */

const fr = (n: string | number, d: string | number) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const bin = (n: string, k: string) => `<binom><num>${n}</num><den>${k}</den></binom>`;
const IA = '<i>I</i><sup><i>A</i></sup>';
const IB = '<i>I</i><sup><i>B</i></sup>';
const QUARTER = fr(1, 4);
const HALF = fr(1, 2);
const LABEL = '(the book’s estimate from past papers, not official figures)';
const SHARE = 'The question counts and frequencies in this box are the book’s estimate from past papers, not official figures.';

export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 185–191 ─────────────────────────
  {
    n: '04',
    title: 'Polygenic Inheritance & Pleiotropy',
    kalam: 'Polygenic inheritance is many genes → one trait.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> NEET often asks about the contrast between polygenic inheritance, multiple allelism, and pleiotropy, and about the “number of phenotypic classes” calculation. CUET tests the one-line definitions and the skin-colour example. CBSE Boards may set a 2–3 mark question distinguishing polygenic inheritance from pleiotropy or explaining continuous variation. ${SHARE}`,
      },
      {
        t: 'p',
        html: 'Mendel chose his seven pea traits with great care: each was discrete (a plant was either tall or dwarf, a seed either round or wrinkled, with nothing in between). But step outside the pea garden and look at people on a Mumbai local: human height runs in a smooth gradient from very short to very tall, skin colour shades continuously from very fair to very dark, body weight spreads across a whole range. There are no neat “either/or” categories. Traits like these are <b>continuous</b>, and Mendel’s single-gene model cannot explain them.',
      },
      {
        t: 'p',
        html: 'The answer is <b>polygenic inheritance</b>: the trait is governed not by one gene but by many genes, each contributing a small, additive effect, with the environment fine-tuning the result. Because each gene adds just a little, the possible totals form a smooth spectrum rather than two buckets.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the loudness of a song produced by a group of singers, where each singer can either sing (a “dominant” contribution) or stay silent (a “recessive” contribution). With one singer you get just loud-or-silent. But with many singers, the total volume can take many in-between values depending on how many are singing. Skin colour works exactly like this: the more pigment-adding (dominant) alleles you carry across all the genes, the darker the shade, and every intermediate count is possible.',
      },
      {
        t: 'p',
        html: 'The classic example is <b>human skin colour</b>, governed (in the standard model) by three gene pairs (call them <i>A</i>, <i>B</i> and <i>C</i>) that control the amount of the pigment <b>melanin</b>. Each dominant allele adds a unit of pigment. An individual who is <i>AABBCC</i> (six dominant alleles) is the darkest; <i>aabbcc</i> (zero dominant alleles) is the lightest; everyone else falls in between, their shade set simply by how many dominant alleles they carry, regardless of which genes they come from. Because the resulting trait can be measured on a scale, it is also called <b>quantitative inheritance</b>.',
      },
      {
        t: 'p',
        html: '<b>Human height</b> behaves the same way: many genes each add a small amount, the environment (nutrition, health) adjusts the total, and the population spreads across a continuous range with most people clustered near the middle and few at the extremes, the familiar bell-shaped curve. The reason for that bell shape is purely combinatorial: there are many different allele combinations that add up to a middle count of dominant alleles, but only one way to be all-dominant and one way to be all-recessive. So intermediate phenotypes are common and extremes are rare.',
      },
      {
        t: 'p',
        html: 'It is worth separating polygenic inheritance from <b>incomplete dominance</b>, which it superficially resembles (both give an “intermediate” F<sub>1</sub>). In incomplete dominance, the intermediate arises from a single gene whose heterozygote is intermediate; in polygenic inheritance, the intermediate arises from the additive dosage of many genes.',
      },
      {
        t: 'p',
        html: 'The giveaway is the F<sub>2</sub>: incomplete dominance gives a clean 1 ∶ 2 ∶ 1, whereas a polygenic trait gives a graded spread across 2<i>n</i> + 1 classes.',
      },
      {
        t: 'p',
        html: 'Now flip the relationship around. Polygenic inheritance is many genes → one trait. <b>Pleiotropy</b> is the opposite: one gene → many traits. A single gene can influence several, seemingly unrelated, characters at once because its product (often an enzyme) sits at a crossroads of many pathways. The textbook example is <b>phenylketonuria (PKU)</b>: a single defective gene (coding the enzyme phenylalanine hydroxylase) produces multiple effects at once (impaired cognitive development and reduced hair and skin pigmentation) because the one blocked reaction ripples outward. Another cited example is starch synthesis in pea, where one gene affects both starch-grain size and the round/wrinkled seed shape.',
      },
      {
        t: 'p',
        html: '<b>Don’t confuse the two directions:</b> polygenic = many genes act on one character; pleiotropy = one gene acts on many characters. They are mirror images.',
      },
      {
        t: 'p',
        html: 'Why does this matter beyond the exam? Most of the traits we actually care about in agriculture and medicine are polygenic: crop yield, milk production, grain size, and in humans, height, blood pressure and susceptibility to common conditions like diabetes. Because such traits depend on many genes plus the environment, they cannot be explained by tracking a single gene: they need statistical, population-level approaches. Pleiotropy matters for the opposite reason: it warns us that “fixing” one gene can have several unintended effects, since that gene may touch many pathways at once.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Polygenic models assume each contributing gene has a roughly equal and additive effect and that the genes assort independently; real traits often have unequal contributions and gene interactions. (2) The environment strongly modifies the phenotype (nutrition affects height; sun exposure affects skin tone), so genotype alone does not fix the outcome: this is why continuous traits seldom give clean Mendelian ratios. (3) The “three genes for skin colour” figure is a teaching model; the true number of genes is larger. (As an aside, gene interactions such as epistasis are further deviations; they go beyond the NCERT core and are worked in Additional topic A.)',
      },

      { t: 'part', title: 'Key definitions and genetic terminology' },
      {
        t: 'def',
        term: 'Polygenic inheritance',
        html: 'a mode of inheritance in which a single trait is controlled by several genes (NCERT: generally three or more; the two-gene model used below is a simpler teaching case), each contributing a small additive effect.',
      },
      {
        t: 'def',
        term: 'Polygene',
        html: 'one of the several genes that together govern a polygenic (quantitative) trait.',
      },
      {
        t: 'def',
        term: 'Additive effect',
        html: 'the principle that each contributing (dominant) allele adds a small, equal increment to the phenotype, so the total determines the phenotype.',
      },
      {
        t: 'def',
        term: 'Quantitative / continuous variation',
        html: 'variation that forms a smooth, measurable gradient (e.g. height, skin colour, weight) rather than discrete categories; the hallmark of polygenic traits, typically giving a bell-shaped distribution.',
      },
      {
        t: 'def',
        term: 'Pleiotropy',
        html: 'the phenomenon in which a single gene produces multiple (two or more) phenotypic effects.',
      },
      {
        t: 'def',
        term: 'Pleiotropic gene',
        html: 'the single gene responsible for several phenotypic expressions (e.g. the PKU gene, the sickle-cell gene).',
      },
      {
        t: 'p',
        html: `<b>Useful additive relationships (for <i>n</i> contributing gene pairs):</b><br>• Number of phenotypic classes in F<sub>2</sub> = 2<i>n</i> + 1.<br>• Number of F<sub>2</sub> genotypes = 3<sup><i>n</i></sup>.<br>• Number of gamete types from the F<sub>1</sub> (heterozygous at all <i>n</i> genes) = 2<sup><i>n</i></sup>.<br>• Frequency of either extreme phenotype in F<sub>2</sub> = (${QUARTER})<sup><i>n</i></sup>.<br>• The phenotypic classes follow the binomial coefficients of (<i>a</i> + <i>b</i>)<sup>2<i>n</i></sup>: e.g. for <i>n</i> = 2, the ratio is 1 ∶ 4 ∶ 6 ∶ 4 ∶ 1.`,
      },
      {
        t: 'p',
        html: '<b>Note (no SI units in this topic):</b> the quantities are gene/allele counts and proportions: both dimensionless.',
      },

      { t: 'part', title: 'Key procedures and crosses' },
      { t: 'p', html: 'Take the three-gene skin-colour model and cross the two extremes:' },
      {
        t: 'proc',
        title: 'Procedure A: Analysing a polygenic cross (skin colour)',
        steps: [
          '<b>P generation:</b> <i>AABBCC</i> (darkest, 6 dominant alleles) × <i>aabbcc</i> (lightest, 0 dominant alleles).',
          '<b>F<sub>1</sub>:</b> all <i>AaBbCc</i>: three dominant alleles, an intermediate shade. (Notice F<sub>1</sub> is uniform and intermediate, like incomplete dominance, but the cause is additive dosage across genes, not blending of one gene.)',
          '<b>F<sub>2</sub> (<i>AaBbCc</i> selfed):</b> the number of dominant alleles in offspring ranges from 0 to 6, giving 2<i>n</i> + 1 = 7 phenotypic classes from lightest to darkest. The shade depends only on how many dominant alleles are present, not which ones.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why a smooth spectrum appears:</b> because contributions are additive and the dominant-allele count can take any value from 0 to 2<i>n</i>, the phenotypes blanket the whole range, and the middle classes (more ways to get an intermediate count) are the most common, producing the bell-shaped distribution of continuous variation.',
      },
      {
        t: 'p',
        html: 'Spelled out for the three-gene cross, the F<sub>2</sub> frequencies of offspring carrying 0, 1, 2, 3, 4, 5 and 6 dominant alleles follow the binomial coefficients of (<i>a</i> + <i>b</i>)<sup>6</sup>:<br><br>1 ∶ 6 ∶ 15 ∶ 20 ∶ 15 ∶ 6 ∶ 1 (out of 64).',
      },
      {
        t: 'p',
        html: `The single largest class is the central one (${fr(20, 64)}, three dominant alleles, the mid shade), and the two extremes are vanishingly rare at ${fr(1, 64)} each. This is exactly the shape of a continuous-variation curve, reconstructed from simple Mendelian segregation at several genes at once.`,
      },
      {
        t: 'proc',
        title: 'Procedure B: Counting phenotypic classes and extreme frequencies',
        steps: [
          'Count the contributing gene pairs, <i>n</i>.',
          'Phenotypic classes = 2<i>n</i> + 1.',
          `Each extreme (all-dominant or all-recessive) has frequency (${QUARTER})<sup><i>n</i></sup>, because each gene independently must be homozygous for the relevant allele (${QUARTER} chance each), multiplied across <i>n</i> genes.`,
          `For the probability of a <i>specific</i> number <i>k</i> of dominant alleles in F<sub>2</sub>, use the binomial: <i>P</i>(<i>k</i>) = ${fr(bin('2<i>n</i>', '<i>k</i>'), '2<sup>2<i>n</i></sup>')}, since each of the 2<i>n</i> allele slots is dominant with probability ${HALF}.`,
        ],
      },
      { t: 'p', html: '<b>Procedure C: Recognising pleiotropy</b>' },
      {
        t: 'p',
        html: 'Ask a single question: does one gene, when altered, change several characters at once? If yes, it is pleiotropy.<br>• In <b>PKU</b>, the single faulty enzyme (phenylalanine hydroxylase) blocks the conversion of phenylalanine to tyrosine. Because that one block has many downstream consequences, the affected person shows multiple effects (impaired cognitive development together with reduced hair and skin pigmentation), all from one gene.<br>• The mechanism is that a single gene product often participates in many pathways, so one change propagates widely.',
      },
      {
        t: 'p',
        html: 'A second clear example is the <b>sickle-cell gene</b>, which is pleiotropic: the single base change that alters haemoglobin produces several effects at once: the sickling of red blood cells, the resulting anaemia and circulatory problems, and (in carriers) resistance to malaria. One gene, many phenotypic consequences. This shows that the same disorder can illustrate two different genetic principles depending on what you focus on: a point mutation at the DNA level, but pleiotropy at the phenotype level.',
      },
      {
        t: 'p',
        html: '<b>Why this is the mirror image of polygeny:</b> in polygenic inheritance many genes converge on one trait; in pleiotropy one gene diverges onto many traits.',
      },
      {
        t: 'p',
        html: 'Three chapter ideas all involve the word “many,” and exams exploit the overlap. Separate them by asking what there are many of:',
      },
      {
        t: 'proc',
        title: 'Procedure D: Telling apart the three “many” concepts',
        steps: [
          `<b>Multiple allelism:</b> many alleles of a single gene (more than two forms in the population, e.g. the ABO gene with ${IA}, ${IB}, <i>i</i>). One gene, one trait, many alleles.`,
          '<b>Polygenic inheritance:</b> many genes acting on a single trait, each with its usual two alleles, effects additive (e.g. skin colour). Many genes, one trait.',
          '<b>Pleiotropy:</b> one gene producing many traits (e.g. PKU, sickle-cell). One gene, many traits.',
        ],
      },
      {
        t: 'p',
        html: 'A one-line test: many alleles? → multiple allelism; many genes for one trait? → polygenic; one gene for many traits? → pleiotropy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Polygenic cross, clean presentation.</b> In the three-gene model of human skin colour (genes <i>A</i>, <i>B</i>, <i>C</i>; each dominant allele adds one unit of pigment), an <i>AaBbCc</i> individual marries another <i>AaBbCc</i> individual. How many phenotypic classes (shades) can appear among their children, and which children are darkest and lightest?',
        steps: [
          '<b>Reasoning:</b> there are <i>n</i> = 3 contributing gene pairs. Number of phenotypic classes = 2<i>n</i> + 1 = 2(3) + 1 = <b>7</b>. The <b>darkest</b> children are <i>AABBCC</i> (6 dominant alleles); the <b>lightest</b> are <i>aabbcc</i> (0 dominant alleles); the remaining five classes are intermediate shades set by 1, 2, 3, 4 or 5 dominant alleles.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: '<b>Frequency of an extreme.</b> In the same three-gene skin-colour cross <i>AaBbCc</i> × <i>AaBbCc</i>, what fraction of the children are expected to be the darkest possible shade (<i>AABBCC</i>)?',
        steps: [
          `<b>Speed logic:</b> each gene must independently be homozygous dominant. P(<i>AA</i>) = ${QUARTER} for each gene, so across three genes:<br><br>(${QUARTER})<sup>3</sup> = ${fr(1, 64)}.`,
          `<b>Trap:</b> students often answer ${fr(1, 8)} (using ${HALF} per gene), but the darkest shade needs two dominant alleles per gene (<i>AA</i>), which is ${QUARTER} each, not ${HALF}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Probability of an intermediate shade.</b> For the cross <i>AaBbCc</i> × <i>AaBbCc</i>, what is the probability that a child carries exactly <b>three</b> dominant alleles (a mid-range shade)?',
        steps: [
          `<b>Logic:</b> there are 2<i>n</i> = 6 allele slots, each dominant with probability ${HALF}. The number of dominant alleles follows a binomial distribution:<br><br><i>P</i>(3) = ${fr(bin('6', '3'), '2<sup>6</sup>')} = ${fr(20, 64)} = ${fr(5, 16)}.`,
          'This is the single most common class, which is exactly why intermediate shades are the most frequent and the distribution is bell-shaped.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Two-gene polygenic ratio + pleiotropy contrast.</b> (a) For a two-gene polygenic trait (a two-gene model), a cross <i>AaBb</i> × <i>AaBb</i> is made. State the ratio of the phenotypic classes (by number of dominant alleles). (b) Explain in one line why this is not pleiotropy.',
        steps: [
          `(a) With <i>n</i> = 2, there are 2<i>n</i> + 1 = 5 classes, in the binomial ratio of ${bin('4', '<i>k</i>')} for <i>k</i> = 0, 1, 2, 3, 4:<br><br>1 ∶ 4 ∶ 6 ∶ 4 ∶ 1 (out of 16).<br><br>So 1 lightest ∶ 4 ∶ 6 (most common, intermediate) ∶ 4 ∶ 1 darkest.`,
          '(b) This is polygenic inheritance because two genes act together on one trait. Pleiotropy would be the opposite: one gene affecting several traits, which is not what is happening here.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define polygenic inheritance and give one example in humans.',
            a: 'A trait controlled by three or more additive genes (NCERT’s wording; problems also use a two-gene model); e.g. human skin colour (or height)',
          },
          {
            q: '[CUET] What term describes a single gene that produces multiple phenotypic effects?',
            a: 'Pleiotropy',
          },
          {
            q: '[NEET] In a polygenic trait controlled by three gene pairs, how many phenotypic classes appear in the F<sub>2</sub> generation?',
            a: '2<i>n</i> + 1 = 7',
          },
          {
            q: '[NEET] In the three-gene skin-colour model, what fraction of F<sub>2</sub> offspring show the lightest possible phenotype?',
            a: `(${QUARTER})<sup>3</sup> = ${fr(1, 64)}`,
          },
          {
            q: '[NEET High-Difficulty] For a two-gene polygenic trait (<i>AaBb</i> × <i>AaBb</i>), write the ratio of phenotypic classes by number of dominant alleles.',
            a: '1 ∶ 4 ∶ 6 ∶ 4 ∶ 1',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Human skin colour is a classic example of:',
        opts: [
          { label: 'multiple allelism', nudge: '<b>(a)</b> multiple allelism is many alleles of one gene (like ABO), not many genes.' },
          { label: 'codominance', nudge: '<b>(b)</b> codominance involves a single gene with two fully expressed alleles.' },
          { label: 'polygenic inheritance', nudge: null },
          { label: 'pleiotropy', nudge: '<b>(d)</b> pleiotropy is the reverse relationship (one gene, many traits).' },
        ],
        correct: 2,
        solution: 'Skin colour is governed by several additive genes producing continuous variation: the definition of polygenic inheritance.',
      },
      {
        t: 'mcq',
        q: 'Pleiotropy refers to:',
        opts: [
          { label: 'one gene controlling many characters', nudge: null },
          { label: 'many genes controlling one character', nudge: '<b>(b)</b> describes polygenic inheritance: the exact mirror image and the most common confusion.' },
          { label: 'two alleles of one gene', nudge: '<b>(c)</b> describes ordinary allelism (two alleles of one gene); multiple allelism needs more than two alleles of the gene in the population.' },
          { label: 'genes on the same chromosome', nudge: '<b>(d)</b> is linkage.' },
        ],
        correct: 0,
        solution: 'A pleiotropic gene produces multiple phenotypic effects from a single gene.',
      },
      {
        t: 'mcq',
        q: 'The number of phenotypic classes in the F<sub>2</sub> of a polygenic trait controlled by <i>n</i> additive gene pairs is:',
        opts: [
          { label: '2<sup><i>n</i></sup>', nudge: '<b>(a)</b> 2<sup><i>n</i></sup> is the number of gamete types.' },
          { label: '3<sup><i>n</i></sup>', nudge: '<b>(b)</b> 3<sup><i>n</i></sup> is the number of genotypes.' },
          { label: '2<i>n</i> + 1', nudge: null },
          { label: '<i>n</i> + 1', nudge: '<b>(d)</b> <i>n</i> + 1 undercounts the range.' },
        ],
        correct: 2,
        solution: 'Since the dominant-allele count ranges from 0 to 2<i>n</i>, there are 2<i>n</i> + 1 distinct classes.',
      },
      {
        t: 'mcq',
        q: 'Phenylketonuria is often cited as an example of pleiotropy because:',
        opts: [
          { label: 'it is caused by several genes', nudge: '<b>(a)</b> reverses the concept into polygeny.' },
          { label: 'one defective gene produces several phenotypic effects', nudge: null },
          { label: 'it is sex-linked', nudge: '<b>(c)</b> PKU is autosomal, not sex-linked.' },
          { label: 'it shows codominance', nudge: '<b>(d)</b> codominance is unrelated to PKU.' },
        ],
        correct: 1,
        solution: 'A single enzyme defect causes multiple effects (impaired cognition plus reduced pigmentation), illustrating pleiotropy.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing polygenic inheritance with pleiotropy.</b> They run in opposite directions: polygenic = many genes → one trait; pleiotropy = one gene → many traits. Fix the arrows in your head.',
          '<b>Confusing polygenic inheritance with multiple allelism.</b> Polygenic = many genes, each with the usual two alleles; multiple allelism = one gene with more than two alleles (like ABO). Different things entirely.',
          `<b>Using ${HALF} instead of ${QUARTER} for an extreme class.</b> The all-dominant (or all-recessive) extreme needs each gene to be homozygous, a ${QUARTER} event per gene, so the extreme frequency is (${QUARTER})<sup><i>n</i></sup>, not (${HALF})<sup><i>n</i></sup>.`,
          '<b>Forgetting the environment.</b> Continuous traits are shaped by environment as well as genes, which is why they seldom give clean Mendelian ratios.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Lock in the three polygenic formulas as a set: phenotypic <b>classes</b> = 2<i>n</i> + 1, <b>genotypes</b> = 3<sup><i>n</i></sup>, <b>gametes</b> = 2<sup><i>n</i></sup>, and remember the extreme frequency is (${QUARTER})<sup><i>n</i></sup>. With these, most polygenic numericals collapse to a one-step substitution.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Polygenic inheritance</b>',
            note: 'one trait, many additive genes → continuous (quantitative) variation, bell-shaped. Example: human skin colour (3-gene model, <i>A</i>/<i>B</i>/<i>C</i>; pigment = melanin), height, weight.',
          },
          {
            f: '<b>Pleiotropy</b>',
            note: 'one gene → many phenotypic effects. Examples: PKU (cognition + pigmentation), sickle-cell gene, starch synthesis in pea.',
          },
          {
            f: '<b>Formulas (<i>n</i> gene pairs)</b>',
            note: `phenotypic classes = 2<i>n</i> + 1; F<sub>2</sub> genotypes = 3<sup><i>n</i></sup>; F<sub>1</sub> gamete types = 2<sup><i>n</i></sup>; extreme-phenotype frequency = (${QUARTER})<sup><i>n</i></sup>.`,
          },
          {
            f: '<b>Class ratios</b>',
            note: '2 genes → 1 ∶ 4 ∶ 6 ∶ 4 ∶ 1; 3 genes → 1 ∶ 6 ∶ 15 ∶ 20 ∶ 15 ∶ 6 ∶ 1 (binomial).',
          },
          {
            f: '<b>Direction check</b>',
            note: 'polygenic = many → one; pleiotropy = one → many.',
          },
        ],
        aids: [
          `<b>Memory aids:</b> “Poly = many genes pile onto one trait; Pleio = one gene plays on many.” “Classes = 2<i>n</i> + 1; extremes = (${QUARTER})<sup><i>n</i></sup>.”`,
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 192–198 ─────────────────────────
  {
    n: '05',
    title: 'Mutation',
    kalam: 'Mutations matter enormously because they are the original source of new alleles.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> NEET regularly asks about classifying a mutation (point vs frameshift), the reading-frame / codon-alteration numerical, and the structural chromosomal aberrations. CUET tests definitions and mutagen types. CBSE Boards may ask a 1–2 mark question defining mutation or naming the types of chromosomal aberrations. It also underpins the sickle-cell mechanism and the chromosomal disorders studied separately. ${SHARE}`,
      },
      {
        t: 'p',
        html: 'DNA is copied with extraordinary fidelity every time a cell divides, but “extraordinary” is not “perfect.” Once in a while, a permanent change slips into the genetic material and is passed on to the descendant cells. That heritable change is a <b>mutation</b>. It is sudden (it appears in one step, not gradually), stable (it persists), and inheritable (it is copied onward). An organism carrying a mutation is a <b>mutant</b>, and the agents that provoke mutations are <b>mutagens</b>.',
      },
      {
        t: 'p',
        html: 'Mutations matter enormously because they are the original source of new alleles. Recombination merely reshuffles existing alleles; mutation creates new ones in the first place. Without mutation there would be nothing for recombination to shuffle and nothing for natural selection to act on (the deeper evolutionary role belongs to a later chapter).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Think of the genome as a long printed book. Most of the time the printers copy it faithfully, but occasionally an error creeps in. The kind of error decides how much damage it does, and that is the key to organising mutations.',
      },
      {
        t: 'p',
        html: 'There are two scales at which a mutation can strike. The first is the <b>gene level</b>, a change in the DNA sequence of a single gene:<br>• A <b>point mutation</b> changes a single base pair, like swapping one letter in a word. The most famous example is <b>sickle-cell anaemia</b>, where one base change swaps one amino acid in haemoglobin. A point mutation usually alters at most one codon, so its effect is localised.<br>• A <b>frameshift mutation</b> is an insertion or deletion of base pairs not in threes. Because the genetic code is read in non-overlapping triplets, adding or removing a base shifts the entire “reading frame” downstream, like deleting one letter and then re-spacing every word after it into nonsense. Frameshifts are usually far more damaging than point mutations because everything after the change is misread.',
      },
      {
        t: 'p',
        html: 'The second scale is the <b>chromosome level</b>, a change involving whole chromosome segments or whole chromosomes:<br>• <b>Structural aberrations</b> alter the architecture of a chromosome: <b>deletion</b> (loss of a segment), <b>duplication</b> (a segment is repeated), <b>inversion</b> (a segment is reversed), and <b>translocation</b> (a segment moves to a non-homologous chromosome). Such structural changes are commonly seen in cancer cells.<br>• <b>Numerical changes</b> alter the count of chromosomes: <b>aneuploidy</b> (gain or loss of one/few chromosomes, from non-disjunction during meiosis, giving monosomy or trisomy) and <b>polyploidy</b> (gain of whole extra chromosome sets, mainly from failure of cytokinesis after chromosome doubling; an allopolyploid also arises when a hybrid’s chromosome set doubles).',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Most mutations are recessive, neutral or harmful; beneficial mutations are rare, and spontaneous mutation rates are naturally very low (which is why a stable mutagen-free genome changes only slowly). (2) Only mutations in the <b>germ line</b> (gamete-forming cells) are passed to the offspring of sexually reproducing organisms; a <b>somatic</b> mutation stays in the individual, and in the cells descended from the mutated cell (as in cancer), but is not passed to offspring. (3) Because the code is degenerate (redundant), some point mutations change a codon without changing the amino acid, so not every DNA change produces a visible effect. (4) Even among substitutions, the two sub-types differ: a <b>transition</b> (purine-to-purine or pyrimidine-to-pyrimidine) is chemically more likely than a <b>transversion</b> (purine-to-pyrimidine), so the kinds of base change are not all equally frequent.',
      },

      { t: 'part', title: 'Key definitions and genetic terminology' },
      {
        t: 'def',
        term: 'Mutation',
        html: 'a sudden, stable and inheritable change in the genetic material (DNA sequence) of an organism.',
      },
      {
        t: 'def',
        term: 'Mutant',
        html: 'an organism (or gene) that carries a mutation.',
      },
      {
        t: 'def',
        term: 'Mutagen',
        html: 'any agent that induces mutation. <b>Physical mutagens</b> include UV radiation, X-rays and gamma rays; <b>chemical mutagens</b> include substances such as mustard gas. Many mutagens are also carcinogens.',
      },
      {
        t: 'def',
        term: 'Gene mutation',
        html: 'a change in the DNA sequence of a single gene.<br>– <b>Point (substitution) mutation:</b> one base pair is replaced by another (a transition if a purine is replaced by a purine or a pyrimidine by a pyrimidine; a transversion if a purine is swapped for a pyrimidine or vice versa).<br>– <b>Frameshift mutation:</b> insertion or deletion of base pairs that shifts the reading frame.',
      },
      {
        t: 'def',
        term: 'Chromosomal mutation (aberration)',
        html: 'a change in chromosome structure or number.<br>– <b>Structural aberrations:</b> deletion, duplication, inversion, translocation.<br>– <b>Numerical changes:</b> aneuploidy and polyploidy.',
      },
      {
        t: 'def',
        term: 'Aneuploidy',
        html: 'gain or loss of one or a few chromosomes (e.g. 2<i>n</i> − 1 monosomy, 2<i>n</i> + 1 trisomy), caused by non-disjunction.',
      },
      {
        t: 'def',
        term: 'Polyploidy',
        html: 'the presence of more than two complete chromosome sets (3<i>n</i>, 4<i>n</i>, …), caused mainly by failure of cytokinesis after the chromosomes double (an allopolyploid also arises when a hybrid’s chromosome set doubles). <b>Autopolyploidy</b> = extra sets from the same species; <b>allopolyploidy</b> = sets combined from different species.',
      },
      {
        t: 'def',
        term: 'Somatic vs germinal mutation',
        html: 'somatic mutations occur in body cells and are not passed to offspring (they stay in the individual and its descendant cells, as in cancer); germinal mutations occur in gamete-forming cells and are passed to offspring.',
      },
      {
        t: 'def',
        term: 'Spontaneous vs induced mutation',
        html: 'spontaneous mutations arise naturally (from copying errors or normal chemical changes in DNA), usually at a low rate; induced mutations are deliberately caused by exposure to a mutagen (radiation or chemicals).',
      },
      {
        t: 'def',
        term: 'Forward vs reverse mutation',
        html: 'a forward mutation changes a wild-type gene to a new (mutant) form; a reverse (back) mutation restores the mutant gene to its original wild-type form.',
      },
      {
        t: 'p',
        html: '<b>Note (no SI units in this topic):</b> the quantities are base counts, codon counts and chromosome counts: all whole numbers.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      { t: 'p', html: 'Work top-down with two questions:' },
      {
        t: 'proc',
        title: 'Procedure A: Classifying a mutation',
        steps: [
          '<b>Gene level or chromosome level?</b> If only the DNA sequence of a gene changes, it is a <b>gene mutation</b>. If a whole segment or whole chromosome is involved, it is a <b>chromosomal mutation</b>.',
          '<b>Then refine.</b> Gene mutation → is one base replaced (point/substitution) or added/removed (frameshift)? Chromosomal mutation → is the structure changed (deletion/duplication/inversion/translocation) or the number changed (aneuploidy/polyploidy)?',
        ],
      },
      {
        t: 'p',
        html: '<b>Why this order:</b> the scale of the change determines its consequences: a single-base swap is local, whereas a whole-chromosome change affects hundreds of genes at once.',
      },
      { t: 'p', html: '<b>Procedure B: Point versus frameshift: effect on the protein</b>' },
      {
        t: 'p',
        html: '• A <b>point mutation</b> (substitution) affects at most the one codon it falls in, so usually only a single amino acid changes (as in sickle-cell), or none at all if the code’s redundancy absorbs it.<br>• A <b>frameshift</b> (insertion/deletion of a number of bases not divisible by 3) re-reads every codon downstream of the change, typically producing a completely different, non-functional protein.',
      },
      {
        t: 'p',
        html: '<b>Key reading-frame rule:</b> inserting or deleting bases in a multiple of three adds or removes whole codons and leaves the rest of the frame intact; any non-multiple shifts the frame and garbles everything downstream.',
      },
      {
        t: 'p',
        html: 'A quick word-analogy makes the difference vivid. Read the “sentence” <b>THE CAT ATE THE RAT</b> in three-letter words. A point mutation changes one letter (THE CAT ATE THE ROT): only the last word is affected. A frameshift deletes one letter near the start, and re-reading in triplets gives <b>THC ATA TET HER AT</b>: every word after the deletion turns to nonsense, because the spacing has shifted. That is exactly why frameshifts are usually far more destructive than single substitutions.',
      },
      { t: 'p', html: 'To find how many codons are altered when a base is deleted (or inserted) at a given position:' },
      {
        t: 'proc',
        title: 'Procedure C: Counting altered codons after a frameshift',
        steps: [
          `Total codons = ${fr('number of bases', 3)}.`,
          'Codons before the change that stay intact = the whole codons completed before the deletion point.',
          'Altered codons = total codons − intact codons.',
        ],
      },
      { t: 'p', html: '<b>Procedure D: How numerical changes arise</b>' },
      {
        t: 'p',
        html: '• <b>Aneuploidy:</b> during meiosis a chromosome pair fails to separate (<b>non-disjunction</b>), so a gamete gets one chromosome too many or too few; fertilisation then gives 2<i>n</i> + 1 (trisomy) or 2<i>n</i> − 1 (monosomy). (The resulting human disorders, Down, Klinefelter, Turner, are detailed in the Genetic Disorders topic.)<br>• <b>Polyploidy:</b> in the commonest route the chromosomes duplicate but the cell fails to divide (<b>cytokinesis failure</b>), leaving the cell with whole extra sets (3<i>n</i>, 4<i>n</i>, …). This is common in plants and is often beneficial there: many crop plants are polyploid, frequently with larger fruits, flowers or grains, which is why polyploidy is deliberately induced in plant breeding. Animals tolerate it far less well.',
      },
      { t: 'p', html: '<b>The four structural aberrations at a glance</b>' },
      {
        t: 'p',
        html: 'It helps to picture each as an editing operation on a chromosome carrying the gene order A–B–C–D–E:<br>• <b>Deletion:</b> a segment is lost (A–B–D–E): the genes on the missing piece are gone, which is usually harmful because dosage is lost.<br>• <b>Duplication:</b> a segment is repeated (A–B–C–C–D–E): extra copies of some genes appear; duplications are an important raw material for evolving new genes.<br>• <b>Inversion:</b> a segment is reversed (A–D–C–B–E): the genes are all present but their order is flipped, which can disrupt pairing at meiosis.<br>• <b>Translocation:</b> a segment moves to a non-homologous chromosome: genes are relocated to an unrelated chromosome, sometimes with serious consequences.',
      },
      {
        t: 'p',
        html: 'A simple memory frame: deletion removes, duplication repeats, inversion reverses, translocation relocates.',
      },
      { t: 'p', html: 'A useful way to reason about how serious a mutation is, is to ask how many genes it touches:' },
      {
        t: 'proc',
        title: 'Procedure E: Gene versus chromosomal mutation: scale of consequence',
        steps: [
          'A <b>point mutation</b> touches a single codon, so at most one amino acid changes: often a mild or even silent effect.',
          'A <b>frameshift</b> touches one gene but ruins everything downstream of the change, so the whole protein from that point on is usually lost.',
          'A <b>structural chromosomal aberration</b> can move, lose or duplicate many genes at once, so its effect is broader still.',
          'A <b>numerical change</b> (aneuploidy or polyploidy) alters the dosage of hundreds of genes simultaneously, which is why whole-chromosome imbalances are so often lethal or produce major syndromes.',
        ],
      },
      {
        t: 'p',
        html: 'In short, the consequence scales with the scope: one base → one codon → one gene → many genes → whole chromosomes. Keeping this ladder in mind lets you predict, without memorising, why a frameshift is worse than a substitution and why a trisomy is worse than either.',
      },
      { t: 'p', html: '<b>Why mutation matters</b>' },
      {
        t: 'p',
        html: 'Of all the sources of variation, mutation is the original source of new alleles; recombination merely reshuffles what already exists. That is why mutation is described as the ultimate <b>raw material</b> of variation. Most mutations are neutral or harmful and are removed over time, but the rare beneficial one can spread: the deeper consequences of this belong to the chapter on evolution.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Define and classify, clean presentation.</b> Define mutation. Classify the mutation responsible for sickle-cell anaemia, giving a reason.',
        steps: [
          '<b>Definition:</b> a mutation is a sudden, stable and inheritable change in the DNA sequence of an organism. <b>Classification:</b> sickle-cell anaemia is caused by a <b>gene (point) mutation</b> of the substitution type: a single base pair in the β-globin gene is replaced, changing one codon and hence one amino acid (glutamic acid → valine). Because only a single base pair changes, it is a point mutation, not a frameshift.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: '<b>Reading-frame reasoning.</b> A stretch of mRNA is read in triplets. If <b>three</b> consecutive bases are deleted from the middle of the coding sequence, will the reading frame downstream be shifted? Explain quickly.',
        steps: [
          '<b>Speed logic:</b> a deletion of a multiple of three leaves the frame unshifted. If the three bases are exactly one codon, one amino acid is lost; if they straddle two codons, one amino acid is lost and the neighbouring codon may change; every later codon is read normally: <b>no frameshift</b>.',
          '<b>Trap:</b> students assume any deletion causes a frameshift. Only deletions/insertions that are not multiples of 3 shift the frame.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Counting altered codons.</b> An mRNA molecule is 300 bases long and codes for a protein. If the base at position 31 is deleted (causing a frameshift), how many codons are altered?',
        steps: [
          '<b>Step 1: total codons:</b> 300 ÷ 3 = 100 codons. <b>Step 2: intact codons before the change:</b> bases 1–30 form complete codons 1–10, which stay intact. <b>Step 3: altered codons:</b> 100 − 10 = <b>90</b> codons are altered from the deletion point onward. This is the chapter’s counting rule: every codon from the deletion on is read in the shifted frame (a new stop codon could end the chain sooner).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Numerical chromosome changes.</b> An organism has a diploid chromosome number 2<i>n</i> = 24. State the chromosome number if the individual is (a) trisomic for one chromosome, (b) triploid, (c) tetraploid, and classify each as aneuploidy or polyploidy.',
        steps: [
          'Here <i>n</i> = 12. (a) <b>Trisomic</b> = 2<i>n</i> + 1 = 25: this is <b>aneuploidy</b> (gain of a single chromosome). (b) <b>Triploid</b> = 3<i>n</i> = 36: this is <b>polyploidy</b> (a whole extra set). (c) <b>Tetraploid</b> = 4<i>n</i> = 48: this is <b>polyploidy</b> (two whole extra sets).',
          'The distinction to nail: aneuploidy changes the count by one or a few chromosomes (2<i>n</i> ± 1); polyploidy adds whole sets (3<i>n</i>, 4<i>n</i>).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define mutation and name one physical and one chemical mutagen.',
            a: 'A sudden, stable, inheritable change in DNA; physical: UV (or X-rays); chemical: mustard gas',
          },
          {
            q: '[CUET] Insertion or deletion of base pairs (not in multiples of three) causes which type of gene mutation?',
            a: 'Frameshift mutation',
          },
          {
            q: '[NEET] Name the four types of structural chromosomal aberrations.',
            a: 'Deletion, duplication, inversion, translocation',
          },
          {
            q: '[NEET] An organism with 2<i>n</i> = 20 becomes trisomic for one chromosome. State its chromosome number and the term for this condition.',
            a: '21 chromosomes; aneuploidy (trisomy, 2<i>n</i> + 1)',
          },
          {
            q: '[NEET High-Difficulty] An mRNA of 600 bases undergoes deletion of the base at position 61. How many codons are altered?',
            a: '200 total codons; codons 1–20 intact (bases 1–60); altered = 200 − 20 = <b>180</b> (by the chapter’s counting rule: every codon from the deletion on is read in the shifted frame).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Sickle-cell anaemia is caused by which type of mutation?',
        opts: [
          { label: 'frameshift mutation', nudge: '<b>(a)</b> frameshift comes from insertion/deletion, not a single substitution.' },
          { label: 'point (substitution) mutation', nudge: null },
          { label: 'chromosomal deletion', nudge: '<b>(c)</b> and <b>(d)</b> are chromosome-level changes, whereas sickle-cell is a gene-level point change.' },
          { label: 'polyploidy', nudge: '<b>(c)</b> and <b>(d)</b> are chromosome-level changes, whereas sickle-cell is a gene-level point change.' },
        ],
        correct: 1,
        solution: 'A single base-pair substitution in the β-globin gene changes one codon and one amino acid.',
      },
      {
        t: 'mcq',
        q: 'A frameshift mutation is produced by:',
        opts: [
          { label: 'substitution of one base pair', nudge: '<b>(a)</b> substitution gives a point mutation, not a frameshift.' },
          { label: 'insertion or deletion of base pairs', nudge: null },
          { label: 'loss of a whole chromosome', nudge: '<b>(c)</b> and <b>(d)</b> are chromosomal aberrations, not gene-level frameshifts.' },
          { label: 'duplication of a chromosome segment', nudge: '<b>(c)</b> and <b>(d)</b> are chromosomal aberrations, not gene-level frameshifts.' },
        ],
        correct: 1,
        solution: 'Adding or removing base pairs (in non-multiples of three) shifts the reading frame.',
      },
      {
        t: 'mcq',
        q: 'Loss of a segment of a chromosome is termed:',
        opts: [
          { label: 'inversion', nudge: '<b>(a)</b> inversion is a reversed segment.' },
          { label: 'duplication', nudge: '<b>(b)</b> duplication is a repeated segment.' },
          { label: 'deletion', nudge: null },
          { label: 'translocation', nudge: '<b>(d)</b> translocation is a segment moved to a non-homologous chromosome.' },
        ],
        correct: 2,
        solution: 'Deletion is the loss of a chromosome segment.',
      },
      {
        t: 'mcq',
        q: 'Aneuploidy (e.g. 2<i>n</i> + 1 or 2<i>n</i> − 1) arises due to:',
        opts: [
          { label: 'failure of cytokinesis', nudge: '<b>(a)</b> cytokinesis failure gives polyploidy (whole sets), not aneuploidy.' },
          { label: 'non-disjunction during meiosis', nudge: null },
          { label: 'crossing over', nudge: '<b>(c)</b> crossing over reshuffles alleles without changing chromosome number.' },
          { label: 'point mutation', nudge: '<b>(d)</b> a point mutation is a gene-level change.' },
        ],
        correct: 1,
        solution: 'Non-disjunction, the failure of a chromosome pair to separate, produces gametes with an extra or missing chromosome.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing point mutation with frameshift.</b> A point mutation substitutes one base (one codon affected); a frameshift inserts/deletes bases (all downstream codons affected). Sickle-cell is a point mutation, not a frameshift.',
          '<b>Confusing aneuploidy with polyploidy.</b> Aneuploidy = gain/loss of one or a few chromosomes (2<i>n</i> ± 1), from non-disjunction; polyploidy = whole extra sets (3<i>n</i>, 4<i>n</i>), mainly from cytokinesis failure.',
          '<b>Assuming every base change alters the protein.</b> Because the genetic code is degenerate, some substitutions leave the amino acid unchanged, so not all point mutations have a visible effect.',
          '<b>Forgetting that somatic mutations are not passed to offspring.</b> Only germline (gamete) mutations pass to the next generation of a sexually reproducing organism.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any reading-frame question, check whether the inserted/deleted number of bases is a <b>multiple of 3</b>. If yes → whole codons added/removed, frame intact, minimal damage. If no → frameshift, everything downstream altered. This one test settles the reading-frame question in one step.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Mutation</b>',
            note: 'sudden, stable, inheritable change in DNA. Bearer = mutant; cause = mutagen (physical: UV/X-rays/gamma; chemical: mustard gas). Original source of new alleles; many mutagens are carcinogens.',
          },
          {
            f: '<b>Gene mutations</b>',
            note: 'point/substitution (one base → one codon; transition vs transversion; e.g. sickle-cell) and frameshift (insertion/deletion → shifts reading frame).',
          },
          {
            f: '<b>Chromosomal mutations: structural</b>',
            note: 'deletion, duplication, inversion, translocation (common in cancer).',
          },
          {
            f: '<b>Chromosomal mutations: numerical</b>',
            note: 'aneuploidy (2<i>n</i> ± 1; non-disjunction → monosomy/trisomy) and polyploidy (3<i>n</i>/4<i>n</i>; mainly cytokinesis failure → auto-/allopolyploidy).',
          },
          {
            f: '<b>Reading-frame rule</b>',
            note: 'insertion/deletion in a multiple of 3 → frame intact; otherwise → frameshift.',
          },
          {
            f: '<b>Inheritance</b>',
            note: 'only germinal mutations are passed to offspring; a somatic mutation stays in the individual (and its descendant cells).',
          },
        ],
        aids: [
          '<b>Memory aids:</b> “Point swaps one letter; frameshift re-spaces the rest.” “Aneuploidy = a chromosome or two; polyploidy = whole sets too.” “Multiples of three keep the frame free.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 199–202 ─────────────────────────
  {
    n: 'A',
    title: 'Epistasis and Derived Dihybrid Ratios',
    extra: true,
    kalam: 'Independent assortment gives the standard 9 ∶ 3 ∶ 3 ∶ 1 ratio, but some genes interact.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `This section takes six patterns further than the main topics: epistasis and the derived dihybrid ratios (9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1 and 15 ∶ 1, worked below; these are beyond the NCERT text, and a fifth, 13 ∶ 3, is explained briefly in Additional topic G) that NEET tests regularly ${LABEL}; worked pedigree examples with genotypes assigned, distinguishing autosomal from X-linked inheritance (Topic 03 introduces pedigree analysis); extended blood-group problems including the Bombay phenotype and Rh factor; cytoplasmic (mitochondrial) inheritance; the Hardy-Weinberg equation for allele-frequency problems; and three-point test-cross gene ordering with counts (Topic 02 gives the distance method). Each of the first six gives the method, worked examples using NCERT-compatible organisms, and practice questions with full answers. The last, Additional topic G, summarises what NEET asks from this chapter.`,
      },
      {
        t: 'p',
        html: `Independent assortment gives the standard 9 ∶ 3 ∶ 3 ∶ 1 ratio, but some genes interact. One gene can mask another at the dihybrid level, producing ratios that look unfamiliar and cannot be predicted without the underlying logic. Epistasis is a frequently tested NEET pattern ${LABEL} because it looks unfamiliar but follows from a single rule: when the phenotypic expression of one gene depends on the genotype at a second gene, the second gene is epistatic to the first.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Define the two roles.</b> The epistatic gene is the one whose genotype controls whether the other gene can express at all. The hypostatic gene is the one whose effect is modified or suppressed.',
      },
      { t: 'p', html: '<b>Classify the epistasis type by the phenotypic ratio.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Ratio', 'Type', 'What is epistatic', 'Reason'],
        rows: [
          [
            '9 ∶ 3 ∶ 4',
            'Recessive epistasis',
            'Homozygous recessive at one gene (aa) masks the effect of either allele of the second gene',
            'One phenotype combines the two classes that would normally be distinct',
          ],
          [
            '9 ∶ 7',
            'Complementary genes',
            'Both genes must contribute at least one dominant allele for the trait to appear; otherwise the phenotype is the same',
            'Two steps of one pathway must both work',
          ],
          [
            '12 ∶ 3 ∶ 1',
            'Dominant epistasis',
            'A dominant allele at the epistatic gene (A_) masks the second gene regardless of its genotype',
            'One phenotype combines two of the four phenotypic classes of 9 ∶ 3 ∶ 3 ∶ 1 (9 + 3 = 12)',
          ],
          [
            '15 ∶ 1',
            'Duplicate genes (non-cumulative)',
            'A dominant allele at either gene produces the trait; only the double-recessive is different',
            'Four dominant alleles across two genes give the same phenotype as one',
          ],
        ],
      },
      {
        t: 'proc',
        title: 'Procedure for any epistasis problem',
        steps: [
          'Identify which gene is epistatic and which is hypostatic from the ratio.',
          'Write the F<sub>2</sub> phenotypic classes in terms of dominant-allele count at each gene.',
          'Group the classes that share a phenotype to match the given ratio.',
          'Confirm by recombining: the total of the grouped classes must equal 16 (the dihybrid denominator).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Recessive Epistasis in a Model Plant.</b> In a model plant (a squash-like pattern, not the real colour genetics of squash), gene <i>C</i> allows pigment to form (<i>C</i> = pigment, <i>c</i> = no pigment) and gene <i>Z</i> decides the colour of the pigment (<i>Z</i> = yellow, <i>z</i> = green). When <i>C</i> is homozygous recessive (<i>cc</i>), no pigment forms and the plant is white regardless of <i>Z</i>. Cross <i>CcZz</i> × <i>CcZz</i> and predict the phenotypic ratio.',
        steps: [
          '<b>Step 1:</b> write the F<sub>2</sub> classes from the 16 dihybrid combinations:',
          'The 9 ∶ 3 ∶ 3 ∶ 1 breakdown gives <i>C</i>_<i>Z</i>_ = 9 (yellow), <i>C</i>_<i>zz</i> = 3 (green), <i>ccZ</i>_ = 3 (white), <i>cczz</i> = 1 (white).',
          '<b>Step 2:</b> apply the epistasis rule: <i>cc</i> masks <i>Z</i>, so the two white classes combine (3 + 1 = 4).',
          'So the ratio is: yellow ∶ green ∶ white =',
        ],
        ans: '9 ∶ 3 ∶ 4 (recessive epistasis).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Complementary Genes: Sweet Pea Flower Colour.</b> In sweet pea (<i>Lathyrus odoratus</i>), flower colour requires at least one dominant allele at gene <i>C</i> and at gene <i>P</i> simultaneously: two steps of one biosynthetic pathway. A cross <i>CcPp</i> × <i>CcPp</i> yields what phenotypic ratio?',
        steps: [
          '<b>Step 1:</b> the standard 9 ∶ 3 ∶ 3 ∶ 1 breakdown: <i>C</i>_<i>P</i>_ = 9 (coloured), <i>C</i>_<i>pp</i> = 3 (white), <i>ccP</i>_ = 3 (white), <i>ccpp</i> = 1 (white).',
          '<b>Step 2:</b> any genotype lacking a dominant allele at either gene (<i>cc</i> or <i>pp</i>) is white. The three white classes total 3 + 3 + 1 = 7.',
        ],
        ans: 'coloured ∶ white = 9 ∶ 7.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Dominant Epistasis: Seed Colour.</b> In a plant, gene <i>B</i> makes purple pigment (<i>B</i> is dominant over <i>b</i>, which makes no pigment). A dominant allele at a second gene <i>P</i> suppresses pigment formation and gives yellow seeds regardless of the genotype at <i>B</i>. Cross <i>BbPp</i> × <i>BbPp</i>.',
        steps: [
          'The 16 F<sub>2</sub> combinations: <i>B</i>_<i>P</i>_ = 9 (yellow, <i>P</i> is epistatic), <i>bbP</i>_ = 3 (yellow), <i>B</i>_<i>pp</i> = 3 (purple), <i>bbpp</i> = 1 (white: no pigment gene product and no suppressor).',
          'The yellow class combines two groups: 9 + 3 = 12. The purple class is 3 and the white class is 1.',
        ],
        ans: 'yellow ∶ purple ∶ white = 12 ∶ 3 ∶ 1 (dominant epistasis).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Duplicate Genes: Shepherd’s Purse.</b> In <i>Capsella</i> (shepherd’s purse), capsule shape is governed by two genes that each produce the same effect: a dominant allele at either gene gives a triangular capsule. Only <i>aabb</i> gives an ovoid (top-shaped) capsule. Cross <i>AaBb</i> × <i>AaBb</i>.',
        steps: ['All genotypes except <i>aabb</i> (1) give triangular. So triangular ∶ ovoid ='],
        ans: '15 ∶ 1.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is epistasis? Name the type where the homozygous recessive at one locus masks the expression of the other locus.',
            a: 'Epistasis is the interaction between genes where one gene masks the expression of another; recessive epistasis.',
          },
          {
            q: '[NEET] A dihybrid cross yields a phenotypic ratio of 9 ∶ 7 in the F<sub>2</sub>. What does this indicate?',
            a: 'Complementary gene action: both genes must contribute at least one dominant allele for the trait to appear.',
          },
          {
            q: '[NEET] In a plant, flower colour requires dominant alleles at both genes <i>A</i> and <i>B</i>. What is the F<sub>2</sub> ratio of coloured to white flowers from <i>AaBb</i> × <i>AaBb</i>?',
            a: '9 ∶ 7 (coloured ∶ white).',
          },
          {
            q: '[NEET] When a dominant allele at one gene masks the effect of a second gene, the F<sub>2</sub> ratio becomes 12 ∶ 3 ∶ 1. Give one word for this type of epistasis.',
            a: 'Dominant epistasis.',
          },
          {
            q: '[NEET High-Difficulty] A cross between two heterozygous individuals for two independently assorting genes gives 9 ∶ 3 ∶ 4 in the F<sub>2</sub>. Explain this result by identifying the epistatic gene and counting the offspring in each phenotypic class.',
            a: 'Recessive epistasis. The epistatic gene is the one whose homozygous recessive genotype (<i>aa</i>) produces one phenotype regardless of the second gene (<i>B</i>). The classes <i>aaB</i>_ (3) and <i>aabb</i> (1) look alike, giving 3 + 1 = 4; <i>A</i>_<i>B</i>_ (9) and <i>A</i>_<i>bb</i> (3) stay distinct. The F<sub>2</sub> classes are therefore 9 ∶ 3 ∶ 4 (16 in all).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 202–204 ─────────────────────────
  {
    n: 'B',
    title: 'Pedigree Analysis: Worked Examples and Interpretation',
    extra: true,
    kalam: 'Pedigree analysis uses a few logical tests to decide whether a trait is dominant or recessive and whether it is autosomal or X-linked.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Pedigree analysis uses a few logical tests to decide whether a trait is dominant or recessive and whether it is autosomal or X-linked. This section works through three-generation pedigrees with specific genotypes assigned, which is the level expected in objective papers.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1: determine whether the trait is dominant or recessive.</b><br>Apply these two logic tests:<br>• Test D: Do two affected parents ever produce an unaffected child? If yes, the trait is dominant (the unaffected child must be homozygous recessive). If no such case appears, Test D tells you nothing: rely on Test R.<br>• Test R: Do two unaffected parents produce an affected child? If yes, the trait is recessive (the unaffected parents must carry the allele: both parents if the gene is autosomal, the mother if it is X-linked).',
      },
      {
        t: 'p',
        html: '<b>Step 2: determine whether the gene is autosomal or X-linked.</b><br>• If affected males and affected females appear in roughly equal proportions, suspect autosomal.<br>• If affected individuals are overwhelmingly male, and the trait jumps from an affected grandfather through an unaffected carrier daughter to an affected grandson, suspect X-linked recessive.<br>• X-linked dominant is rare but produces affected fathers with all daughters affected and no father-to-son transmission.',
      },
      {
        t: 'p',
        html: '<b>Step 3: assign genotypes using the rules.</b><br>Work generation by generation. Start with individuals whose genotype you can fix (affected individuals are homozygous recessive for a recessive trait, or heterozygous/dominant for a dominant trait). Carry forward what is known about each parent pair.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Autosomal Recessive Pedigree.</b> A three-generation family shows a metabolic disorder (phenylketonuria pattern). The unaffected parents I-1 (father) and I-2 (mother) have an affected daughter, II-3, and an unaffected son, II-1. II-1 marries an unaffected woman, II-2, and they have an affected son, III-2. Determine the inheritance pattern and the genotypes.',
        steps: [
          '<b>Analysis:</b> Two unaffected parents (I-1, I-2) have an affected child (II-3): Test R is passed, so the trait is recessive. The affected child II-3 is a daughter whose father is unaffected; an X-linked recessive trait would need an affected father to produce an affected daughter. So the gene is autosomal, not X-linked.',
          '<b>Genotypes:</b> I-1 = <i>Aa</i> and I-2 = <i>Aa</i> (both carriers, since they produced an affected child). II-3 = <i>aa</i> (affected). III-2 = <i>aa</i> (affected), so both of his unaffected parents, II-1 and II-2, must be <i>Aa</i>.',
        ],
        ans: 'Autosomal recessive.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>X-Linked Recessive Pedigree.</b> A family shows haemophilia across three generations. Affected: I-1 (male) and III-1 (male). I-1’s daughter II-1 is unaffected, and II-1’s son III-1 is affected. Show that X-linked recessive inheritance fits.',
        steps: [
          '<b>Analysis:</b> Affected individuals are exclusively male, and the trait passes from an affected grandfather (I-1) through an unaffected daughter (II-1, carrier) to an affected grandson (III-1). This is the classic criss-cross pattern of X-linked recessive inheritance.',
          'I-1 (affected father) = <i>X</i><sup><i>h</i></sup><i>Y</i>. All his daughters receive <i>X</i><sup><i>h</i></sup> from him, so II-1 = <i>X</i><sup><i>H</i></sup><i>X</i><sup><i>h</i></sup> (carrier). II-1’s sons each have a 50% chance of receiving <i>X</i><sup><i>h</i></sup>, so III-1 (affected) = <i>X</i><sup><i>h</i></sup><i>Y</i>. No father-to-son transmission occurs because sons receive their Y from their father.',
        ],
        ans: 'X-linked recessive.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Identifying a Carrier from Pedigree.</b> In a condition that is autosomal recessive with complete penetrance, individual II-4 is unaffected. Her mother (I-2) is affected (homozygous recessive). What is the probability that II-4 is a carrier?',
        steps: [
          'I-2 (affected) = <i>aa</i>, so she passes an <i>a</i> allele to every one of her children, including II-4.',
          'II-4 is unaffected, so she is not <i>aa</i>. She therefore cannot have received a second <i>a</i> from her father; she must have received a normal <i>A</i> allele from him, whatever his own genotype (<i>AA</i> or <i>Aa</i>).',
          'So II-4 = <i>Aa</i> for certain: she is a carrier with probability 1 (100%).',
        ],
        ans: '1: II-4 is certainly a carrier.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What symbol represents an unaffected male in a pedigree chart?',
            a: 'An open (unfilled) square.',
          },
          {
            q: '[NEET] A trait appears in every generation and affects males and females equally. Is this likely to be autosomal dominant or autosomal recessive?',
            a: 'Autosomal dominant is the most likely: affected individuals appear in every generation (vertical transmission) and both sexes are affected equally (a common recessive allele can mimic this).',
          },
          {
            q: '[NEET] In a pedigree, an affected father has all unaffected daughters but several affected grandsons through those daughters. What type of inheritance does this suggest?',
            a: 'X-linked recessive: the affected father passes the allele to all daughters (who are carriers and unaffected), and those daughters pass it to roughly half their sons.',
          },
          {
            q: '[NEET] In an autosomal recessive disorder, individual III-2 is unaffected but both her parents (II-3 and II-4) are affected. Is this possible? Explain.',
            a: 'No: for an autosomal recessive disorder, two affected parents (both <i>aa</i>) can only produce affected offspring (<i>aa</i>), not unaffected children.',
          },
          {
            q: '[NEET High-Difficulty] Two unaffected parents have two children: one affected son and one unaffected daughter. What is the probability that the daughter is a carrier of an autosomal recessive condition?',
            a: `${fr(2, 3)}: the parents are both <i>Aa</i> (they have an affected child). Given that the daughter is unaffected, she cannot be <i>aa</i>. Among the four equally likely offspring of <i>Aa</i> × <i>Aa</i> (<i>AA</i>, <i>Aa</i>, <i>aA</i>, <i>aa</i>), the <i>aa</i> cell is excluded, leaving 1 <i>AA</i> and 2 <i>Aa</i> in a 1 ∶ 2 ratio. So <i>P</i>(carrier) = ${fr(2, 3)}.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 204–206 ─────────────────────────
  {
    n: 'C',
    title: 'Extended Blood Group Inheritance: Bombay Phenotype and Rh Factor',
    extra: true,
    kalam: 'If an individual is homozygous hh (rare), no H antigen forms, so the A and B transferases have nothing to modify.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Beyond the standard ABO system and multiple allelism, two extensions are regularly tested ${LABEL}: the Bombay blood group (which masquerades as O despite carrying A or B alleles) and Rh factor inheritance (especially the risks of Rh incompatibility between mother and foetus).`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Bombay phenotype (<i>hh</i>).</b> The gene <i>H</i> codes for the enzyme that converts a precursor substance into the H antigen, which is the substrate on which the <i>I</i> gene products (A and B transferases) act. If an individual is homozygous <i>hh</i> (rare), no H antigen forms, so the A and B transferases have nothing to modify: the result is the Bombay phenotype, which types as O on standard blood tests. Genetically, such individuals can carry ${IA} or ${IB} alleles that are silent because there is no H antigen substrate.`,
      },
      {
        t: 'p',
        html: `• ${IA}${IA} or ${IA}<i>i</i> with <i>HH</i> or <i>Hh</i> = group A<br>• ${IB}${IB} or ${IB}<i>i</i> with <i>HH</i> or <i>Hh</i> = group B<br>• ${IA}${IB} with <i>HH</i> or <i>Hh</i> = group AB<br>• <i>ii</i> with <i>HH</i> or <i>Hh</i> = group O<br>• Any genotype with <i>hh</i> = Bombay phenotype (types as O, whatever the <i>I</i> genotype: ${IA}${IA}, ${IA}<i>i</i>, ${IB}${IB}, ${IB}<i>i</i>, ${IA}${IB} or <i>ii</i>)`,
      },
      {
        t: 'p',
        html: '<b>Rh factor.</b> The Rh antigen (D antigen) is governed by a single gene in this simple model (in reality the D antigen is governed by the <i>RHD</i> gene): <i>Rh</i><sup>+</sup> (dominant) and <i>rh</i><sup>−</sup> (recessive). An <i>Rh</i><sup>−</sup> mother carrying an <i>Rh</i><sup>+</sup> foetus can become sensitised during delivery. In a subsequent pregnancy with another <i>Rh</i><sup>+</sup> foetus, maternal anti-Rh antibodies can cross the placenta and attack foetal red blood cells, causing haemolytic disease of the newborn (erythroblastosis foetalis).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Bombay Blood Group Cross.</b> A man with the Bombay phenotype has the genotype ${IA}<i>i</i>; <i>hh</i>. He marries a woman of blood group A with the genotype ${IA}${IA}; <i>HH</i>. What blood groups can their children have, and why does the man type as O?`,
        steps: [
          `The man is <i>hh</i> at the <i>H</i> locus, so he cannot make H antigen. The A transferase coded by his ${IA} allele therefore has no substrate to act on, and his red cells carry neither A nor B antigen: he types as O even though he carries ${IA}.`,
          `<b>Cross:</b> Father ${IA}<i>i</i>; <i>hh</i> × Mother ${IA}${IA}; <i>HH</i>`,
          `The father passes <i>h</i> together with either ${IA} or <i>i</i>. The mother passes ${IA} and <i>H</i> to every child. So every child is <i>Hh</i> (able to make H antigen) and carries at least one ${IA} allele: ${IA}${IA} or ${IA}<i>i</i>.`,
          `<b>Result:</b> all children are blood group A. The father’s ${IA} allele is silent in him but is still passed on, and it is expressed in the children because they receive <i>H</i> from their mother.`,
          '(If the mother were <i>Hh</i> instead of <i>HH</i>, half the children would be <i>hh</i> and would show the Bombay phenotype, typing as O.)',
        ],
        ans: `All children are group A (<i>Hh</i>); the man types as O because <i>hh</i> gives no H antigen, though he can pass on ${IA}.`,
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Rh Incompatibility.</b> An Rh-negative woman (genotype <i>rh</i><sup>−</sup><i>rh</i><sup>−</sup>) is married to an Rh-positive man (homozygous <i>Rh</i><sup>+</sup><i>Rh</i><sup>+</sup>). During her first pregnancy the foetus is Rh-positive. (a) Is the first child usually affected? (b) What risk arises in the second pregnancy?',
        steps: [
          '(a) No: the mother is not yet sensitised. She was exposed to foetal Rh antigen mainly at delivery (NCERT’s wording; bleeding in late pregnancy or a miscarriage can also do it), and no pre-formed antibodies existed to attack the first foetus.',
          '(b) In the second pregnancy, if the foetus is again Rh-positive, the mother’s now-circulating anti-Rh antibodies can cross the placenta and cause haemolysis of foetal red blood cells. This is haemolytic disease of the newborn (erythroblastosis foetalis, HDN). Prevention: the Rh-negative mother is given anti-D (anti-Rh) antibodies within 72 hours of delivery to prevent sensitisation.',
        ],
        ans: '(a) No; (b) every child of this couple is Rh-positive, so each later pregnancy is at risk of haemolytic disease.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is the Bombay blood group, and which gene is mutated in individuals with this phenotype?',
            a: `The Bombay phenotype (<i>hh</i>) results from homozygous mutation at the <i>H</i> gene, which codes for the enzyme needed to produce H antigen: the substrate for A and B transferases. Without H antigen, A and B antigens cannot form even if ${IA} or ${IB} alleles are present.`,
          },
          {
            q: `[NEET] A person who types as blood group O is actually genetically ${IA}<i>i</i>. What additional genotype must they carry to explain this discrepancy?`,
            a: 'Homozygous <i>hh</i> at the <i>H</i> locus: without functional H antigen, the A or B allele cannot produce its antigen.',
          },
          {
            q: '[NEET] An Rh-negative woman married to an Rh-positive man gives birth to an Rh-positive child. Why is the first child usually unaffected?',
            a: 'The mother was not previously sensitised; she usually first encounters foetal Rh antigen at delivery and had not yet produced anti-Rh antibodies.',
          },
          {
            q: `[NEET High-Difficulty] A couple has blood types: father = A (genetically ${IA}<i>i</i>), mother = B (genetically ${IB}<i>i</i>). List all possible blood groups of their children with their genotypes.`,
            a: `Father ${IA}<i>i</i>; Mother ${IB}<i>i</i>. Children: ${IA}${IB} (AB), ${IA}<i>i</i> (A), ${IB}<i>i</i> (B), <i>ii</i> (O): all in 1 ∶ 1 ∶ 1 ∶ 1 ratio.`,
          },
        ],
      },
    ],
  },
];
