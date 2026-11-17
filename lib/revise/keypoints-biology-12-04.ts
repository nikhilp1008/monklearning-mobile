/**
 * KEY POINTS for Biology Class 12, Chapter 4 (Principles of Inheritance and
 * Variation).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 14 and Biology 12
 * Chapter 3 files: every point is a question to answer in your head, then the
 * answer and at most one more line. Four kinds, each a section on the screen:
 * Remember (two a topic), Don't mix up, Common mistakes and Exam shortcuts (one
 * each, where the topic has them); an Additional topic has two points for its
 * central results, except the last (What NEET Actually Asks), which has one
 * Remember and one Common mistakes. Memory lines are a fifth, short section of
 * their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 05 are 0 to 4; Additional topics A to F are 5 to 10;
 * G (the book's What NEET Actually Asks) is 11. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands after the two reviews (their corrected wordings are in the text too); the page (the bottom folio) is above each point. Remember: the
 * topic's definitions, tables and mechanisms. Don't mix up: a pair the topic
 * invites you to swap. Common mistakes: its Common student pitfalls (or the
 * Traps). Exam shortcuts: its Pro-Tip, with a worked example. `say`: the
 * cheat sheet's first memory aids, word for word, in the Chemistry form: no
 * quotation marks, the label ("Memory aids:", "For test cross:") turned into
 * the arrow form. Topics 01, 02 and 03 print three aids each and Topics 04 and
 * 05 one line that holds two or three, so the first two of each are used (the
 * third aid of Topics 01 to 03 and of Topic 05 is left to the book: "Biggest
 * distance = the two ends", "X-linked daughters stay safe unless dad's
 * affected", "Multiples of three keep the frame free"); the chapter has ten
 * lines. The two Topic 04 lines carry the one fraction and the italic n of the
 * aid as <frac> and <i>, so they are not plain text. The Additional topics have
 * none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - the recessive allele "expresses only in the homozygous state" and the Law
 *   of Dominance "only the dominant allele expresses" are given for complete
 *   dominance (a recessive allele shows in the homozygote, and in the
 *   hemizygous male for an X-linked gene); incomplete dominance and
 *   codominance are the exceptions the same topic teaches;
 * - "gamete types = 2^n" and "never draw a giant Punnett square" are given for
 *   genes that assort independently (n the number of heterozygous pairs); the
 *   test cross giving "each gamete type in equal proportion" is likewise for
 *   independent genes, since linked genes give unequal classes;
 * - "linkage groups equal the haploid number" is given as the chapter's rule
 *   (2n = 24 gives 12), with the note that where X and Y differ and are counted
 *   as two groups there is one more (a human male 22 + X + Y = 24); "all genes
 *   on one chromosome, inherited as a unit" is given as tending to be inherited
 *   together, since linkage is usually incomplete, and "complete linkage:
 *   genes never separate" is not used as a rule;
 * - recombination frequency "can never exceed 50 per cent" is given for two
 *   genes in a test cross (the observed RF), with the note that longer map
 *   distances are built by adding short intervals; the "middle distances add up
 *   to the outer one" check is given for short distances, as the book's own
 *   Pro-Tip and Additional topic F say, and not as an unconditional law;
 * - the sex-determination table has four systems, and the temperature-
 *   dependent case (crocodiles) of the cheat sheet is given as a fifth that the
 *   table leaves out; the <i>Drosophila</i> XX–XY pattern is given with the
 *   note that its sex is set by the balance of X chromosomes to sets of
 *   autosomes, not by the Y alone; "the egg always contributes X" is given as
 *   "carries an X";
 * - "most Mendelian disorders are recessive" is given as many; the sixth
 *   codon change of sickle-cell is given as GAG to GUG in the mRNA (GAG to GTG
 *   on the coding strand of the DNA); "an affected daughter needs an affected
 *   father" is given with the carrier or affected mother it also needs, and
 *   "sons' risk = the mother's carrier status" as one half for a carrier
 *   mother;
 * - polygenic inheritance is given as several genes with small additive
 *   effects (the book's definition says three or more, yet its own two-gene
 *   model is worked); Galton (1883) and "continuous traits never give clean
 *   ratios" are not used: the points say such traits seldom do, and that the
 *   environment shapes them; "cannot be improved by tracking one gene" is not
 *   repeated;
 * - Topic 04's Q2 option "two alleles of one gene" is not called multiple
 *   allelism (that needs more than two alleles in the population); mutation is
 *   given as the original source of new alleles, not "the only one that
 *   creates them"; polyploidy is given as commonly from failure of cytokinesis,
 *   an allopolyploid also arising when a hybrid's set is doubled; "only
 *   germline mutations pass to the next generation" is given for gametes in
 *   sexually reproducing organisms (a somatic mutation passes to the cells
 *   descended from it); the frameshift count of 90 altered codons is the
 *   book's, with the note that a new stop codon could end the chain sooner;
 * - the dominance test of the pedigree method (Test D) is kept, but its
 *   "if no such case appears the trait is likely recessive" is not used: the
 *   absence of the case is weak evidence, and Test R decides recessive;
 *   "every generation, both sexes equally" is the likely reading of autosomal
 *   dominant, not the only one;
 * - the Rh sensitisation is given as usually at delivery (the book's and
 *   NCERT's wording), with the note that bleeding in pregnancy or a miscarriage
 *   can do it, and the Rh antigen as the D antigen without the "single gene"
 *   claim;
 * - mitochondrial inheritance is given as the usual maternal pattern: an
 *   affected mother usually passes the condition to all her children and an
 *   affected father to none; "never skips a generation" and "all children" are
 *   not used without the note that a mixture of normal and mutant mitochondria
 *   (heteroplasmy) can spare some children, and the book's own worked example
 *   on an affected father with an affected child is given as not fitting the
 *   pattern; the sperm is said to give virtually no mitochondria;
 * - Hardy–Weinberg: p and q are checked (q^2 = 0.0001 gives q = 0.01, p = 0.99,
 *   carriers 2pq = 0.0198, about 2 per cent or about 1 in 50, 1 in 50.5
 *   exactly); the dominant-phenotype example gives p = 0.4 and the other root
 *   1.6 is rejected; the selfing example gives 0.195, 0.21 and 0.595;
 * - Additional topic F: the three-point data are recomputed (80, 60 and 140
 *   recombinants in 1000, 8.0, 6.0 and 14.0 per cent, 8 + 6 = 14, no
 *   double-crossover class); the 50 per cent ceiling is the two-of-four
 *   chromatids argument; the corrected distance 9.4 + 2 x 0.3 = 10.0 equals
 *   3 + 7;
 * - Additional topic G: "each is a regrouping of the sixteen dihybrid boxes" is
 *   said of the dihybrid ratios 9 ∶ 3 ∶ 3 ∶ 1, 9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1,
 *   13 ∶ 3 and 15 ∶ 1 (each sums to 16), not of the monohybrid 1 ∶ 2 ∶ 1;
 *   "two unaffected parents with an affected child are both carriers" is given
 *   for an autosomal recessive trait (an X-linked trait can come from a carrier
 *   mother and an unaffected father); "linkage discovered by Morgan" is not
 *   repeated (Bateson and Punnett noticed it first and Morgan explained it); the
 *   distribution is the book's estimate from past papers, not official
 *   figures, and no count, share, year or superlative of an exam is repeated
 *   ("single most mis-classified", "most commonly tested", "reliably 2 to 3
 *   questions every year" are not used);
 * - the p. 167 worked example 2(b) prints aabbcc (not aabb), so the one-in-64
 *   is right and the two-gene value is not given.
 *
 * Markup is the chapter's own: <i> for gene symbols, genotypes, scientific
 * names and variables, <sub> and <sup>, <frac> for a fraction, no em dash.
 * Phenotypes (A, B, AB, O), the words homozygous and heterozygous, sex
 * chromosomes as a pair or a system (XX, XY, XO, ZW), karyotypes (47, XXY) and
 * generation labels (F<sub>1</sub>) are upright; the X and Y inside an
 * X-linked genotype (<i>X</i><sup><i>C</i></sup><i>Y</i>) are italic like every
 * other gene symbol, and allele symbols such as <i>Hb</i><sup><i>S</i></sup>
 * are italic while the protein HbS is upright. A range keeps its en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (n: string | number, d: string | number) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = fr(1, 2);
const qtr = fr(1, 4);
const IA = '<i>I</i><sup><i>A</i></sup>';
const IB = '<i>I</i><sup><i>B</i></sup>';
const Hb = (a: string) => `<i>Hb</i><sup><i>${a}</i></sup>`;
const X = (a: string) => `<i>X</i><sup><i>${a}</i></sup>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Mendelian Inheritance & Deviations ──
  // pp. 164–165
  {
    topic: 0,
    kind: 'remember',
    q: 'What are Mendel’s three laws, and which ratio shows each?',
    a: `Dominance: with complete dominance the dominant allele is expressed and the recessive is masked, so the F<sub>1</sub> resembles one parent and the F<sub>2</sub> shows 3 ∶ 1. Segregation (purity of gametes): the two alleles of a gene separate in gamete formation, so each gamete carries one, and <i>Tt</i> makes ${half}<i>T</i> + ${half}<i>t</i>. Independent assortment: alleles of genes on different chromosomes assort independently, deduced from the dihybrid 9 ∶ 3 ∶ 3 ∶ 1. Core ratios: monohybrid F<sub>2</sub> 3 ∶ 1 by phenotype and 1 ∶ 2 ∶ 1 by genotype; dihybrid F<sub>2</sub> 9 ∶ 3 ∶ 3 ∶ 1 with 9 genotypes in 16 boxes; test cross 1 ∶ 1 for one gene and 1 ∶ 1 ∶ 1 ∶ 1 for two independent genes`,
    why: 'A recessive allele is masked, not lost: it is unchanged in the heterozygote and shows again in the homozygous recessive.',
    say: null,
  },
  // pp. 166–167, 169
  {
    topic: 0,
    kind: 'remember',
    q: 'How does the ABO blood group show multiple allelism and codominance, and what does AB × O give?',
    a: `One gene <i>I</i> has three alleles, ${IA}, ${IB} and <i>i</i>. ${IA} and ${IB} are codominant (each makes its own surface sugar) and both are dominant over <i>i</i>. Group A is ${IA}${IA} or ${IA}<i>i</i>, group B is ${IB}${IB} or ${IB}<i>i</i>, group AB is ${IA}${IB} and group O is <i>ii</i>: six genotypes and four phenotypes. Three alleles in the population is multiple allelism, although each person carries two. AB × O: the AB parent gives ${half}${IA} and ${half}${IB}, the O parent gives <i>i</i>, so the children are ${half} A and ${half} B in 1 ∶ 1, and neither AB nor O is possible. ${IA}<i>i</i> × ${IB}<i>i</i> gives A, B, AB and O in 1 ∶ 1 ∶ 1 ∶ 1`,
    why: `The AB parent cannot give <i>i</i> and the O parent cannot give ${IA} or ${IB}, so AB and O are the two groups ruled out.`,
    say: null,
  },
  // pp. 166, 168–169
  {
    topic: 0,
    kind: 'mixup',
    q: 'Incomplete dominance or codominance: how do the two heterozygotes differ?',
    a: `Both give 1 ∶ 2 ∶ 1 in the F<sub>2</sub>, with the phenotype ratio equal to the genotype ratio, so they are easy to swap. In incomplete dominance the heterozygote is a new intermediate: red (<i>RR</i>) × white (<i>rr</i>) gives pink (<i>Rr</i>) in <i>Mirabilis jalapa</i> and <i>Antirrhinum</i>, and selfing the F<sub>1</sub> gives 1 red ∶ 2 pink ∶ 1 white. It is not blending, because the red and white types reappear unchanged in the F<sub>2</sub>. In codominance both alleles are expressed fully and separately in the heterozygote, as in AB blood (${IA}${IB}). The test is what the heterozygote looks like: one new intermediate, or both parental products at once`,
    why: 'With a second, completely dominant gene the class count changes: <i>RrTt</i> × <i>RrTt</i> gives 3 × 2 = 6 phenotypic classes, not 4.',
    say: 'deviations → Intermediate = incomplete; both-at-once = co.',
  },
  // pp. 165–166, 169
  {
    topic: 0,
    kind: 'mistake',
    q: 'What partner does a test cross need, and what does it show?',
    a: `The partner must be homozygous recessive. A purple plant can be <i>PP</i> or <i>Pp</i>, and its phenotype cannot tell. Crossed with <i>pp</i>: if the unknown is <i>PP</i> every offspring is <i>Pp</i> and purple (1 ∶ 0); if it is <i>Pp</i> the offspring are ${half} purple and ${half} green (1 ∶ 1), so one recessive offspring proves the parent heterozygous. The <i>pp</i> partner gives only <i>p</i> gametes, so the offspring’s phenotypes mirror the unknown parent’s gamete types. Crossing an F<sub>1</sub> with either parent is a back cross, and it is a test cross when that parent is the homozygous recessive`,
    why: 'A recessive partner cannot hide any allele of the unknown parent, which is why it is chosen.',
    say: 'test cross → Cross the unknown with the double-recessive to make it confess.',
  },
  // pp. 165, 167–169
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you find multi-gene probabilities and gamete types without a big Punnett square?',
    a: `For genes that assort independently, treat each gene as a monohybrid cross and multiply (product rule); add the probabilities of outcomes that exclude each other (sum rule). <i>RrYy</i> × <i>RrYy</i>: P(round and yellow) = ${fr(3, 4)} × ${fr(3, 4)} = ${fr(9, 16)}. <i>AaBbCc</i> × <i>AaBbCc</i>: P(<i>aabbcc</i>) = (${qtr})<sup>3</sup> = ${fr(1, 64)}. Gamete types are 2<sup><i>n</i></sup>, with <i>n</i> the number of heterozygous pairs: <i>AaBBCcDd</i> has <i>n</i> = 3, so 8 types, since <i>BB</i> adds none. With one incomplete-dominance gene: <i>RrTt</i> × <i>RrTt</i> gives P(pink, tall) = ${half} × ${fr(3, 4)} = ${fr(3, 8)}`,
    why: 'Count heterozygous pairs only: the trap is using 2<sup>4</sup> for four letters when one pair is homozygous.',
    say: null,
  },

  // ── Topic 02 · Chromosomal Theory, Linkage & Sex Determination ──
  // pp. 170–172
  {
    topic: 1,
    kind: 'remember',
    q: 'What did Sutton and Boveri propose, and what are linkage, crossing over and recombination?',
    a: `Sutton and Boveri (1902): genes are carried on chromosomes, and the movement of chromosomes in meiosis is the machinery behind Mendel’s segregation and independent assortment. Linkage (Morgan, in <i>Drosophila melanogaster</i>): genes on the same chromosome tend to be inherited together, so linked genes give more parental than recombinant offspring. Crossing over is the exchange of segments between non-sister chromatids of homologous chromosomes at pachytene, and it makes recombinants (new combinations of alleles). Linkage is usually incomplete, because crossing over separates some linked genes. Genes close together are separated rarely (tight linkage, few recombinants) and genes far apart more often (loose linkage, more recombinants)`,
    why: 'Same chromosome in both cases: only the distance between the genes changes how often they separate.',
    say: null,
  },
  // pp. 172–174
  {
    topic: 1,
    kind: 'remember',
    q: 'How are recombination frequency and map distance calculated, and what limits them?',
    a: `RF = ${fr('number of recombinant offspring', 'total offspring')} × 100. In a test cross the parental classes are the two most frequent and the recombinant classes the two least frequent; far fewer recombinants than parentals means the genes are linked. RF in per cent is read as map distance in centiMorgans (1 cM = 1% recombination): 80 recombinants in 1000 offspring is 8% = 8 cM. The tape is accurate for short distances only, because a double crossover restores the parental arrangement and goes uncounted, so RF underestimates a long distance. Between two genes in a test cross the observed RF does not go above 50%, and at 50% they behave as if unlinked`,
    why: 'An observed RF above 50% between two genes is not possible, so an option giving 60% is wrong; a long map is built by adding short intervals.',
    say: null,
  },
  // pp. 171, 173–174, 176
  {
    topic: 1,
    kind: 'mixup',
    q: 'Linkage groups: the haploid or the diploid number, and how many for 2n = 24?',
    a: `The number of linkage groups is the haploid number <i>n</i>, not 2<i>n</i>, because each distinct chromosome is one linkage group and a haploid set holds one of each. For 2<i>n</i> = 24 the answer is 12 (not 24, and not the human 23). The chapter’s examples: pea 7, <i>Drosophila</i> 4, maize 10. Where X and Y differ in size and are counted as separate groups there is one more (22 + X + Y = 24 in a human male), but the chapter’s rule, used in its answers, is to halve 2<i>n</i>`,
    why: 'Halve first: 2<i>n</i> = 20 gives 10 groups and 2<i>n</i> = 24 gives 12.',
    say: 'groups → Linkage groups go haploid (use <i>n</i>).',
  },
  // pp. 171–173, 175–176
  {
    topic: 1,
    kind: 'mistake',
    q: 'Who decides the sex of the child, the mother or the father?',
    a: `The heterogametic parent, the one that makes two kinds of sex-chromosome gamete. In humans and <i>Drosophila</i> (XX–XY) the egg carries an X and the sperm carries X or Y with equal chance, so the father decides and P(son) = P(daughter) = ${half}, whatever the earlier children were (four daughters do not change it). In grasshoppers (XX–XO) the male is XO, one unpaired X and no Y, and is heterogametic. In birds and butterflies (ZZ male, ZW female) the female is heterogametic, so the mother decides. Honeybees have no sex chromosomes: females are diploid from fertilised eggs and males haploid from unfertilised eggs. (In <i>Drosophila</i> the sex is set by the balance of X chromosomes to sets of autosomes, and some reptiles such as crocodiles set it by temperature)`,
    why: 'Read the system before answering: XX–XY and XX–XO make the father decide, ZZ–ZW makes the mother decide.',
    say: 'sex → Birds break the rule: the mother makes the call.',
  },
  // pp. 173–174, 176
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you order three linked genes from their three pairwise distances?',
    a: `Take the largest distance: its two genes are the ends, and the third gene is in the middle. Check that the two short distances add to the long one (this holds cleanly for short distances, since double crossovers make a large RF fall short of the true distance). A–B 5 cM, B–C 13 cM, A–C 8 cM: B–C is the largest, so B and C are the ends, A is in the middle and 5 + 8 = 13, giving the order B–A–C. The order follows the largest distance, not the order in which the pairs are listed. In a three-point test cross the double-crossover class is the rarest`,
    why: 'No Punnett square is needed: spot the biggest number, then check that the other two add up to it.',
    say: null,
  },

  // ── Topic 03 · Genetic Disorders ──
  // pp. 177–180, 183
  {
    topic: 2,
    kind: 'remember',
    q: 'What is non-disjunction, and which karyotypes must you know?',
    a: `Non-disjunction is the failure of a chromosome pair (or of the sex chromosomes) to separate in meiosis, so one gamete gets an extra chromosome and another is missing one. After fertilisation with a normal gamete the zygote is trisomic (2<i>n</i> + 1, 47 chromosomes) or monosomic (2<i>n</i> − 1, 45), which is aneuploidy. Down syndrome is trisomy of chromosome 21 (47; either sex; characteristic facial features, short stature, impaired cognitive development). Klinefelter syndrome is 47, XXY: a male with an extra X, some feminine development (gynaecomastia) and sterility. Turner syndrome is 45, XO: a female with one X, short stature, rudimentary ovaries, sterility and a lack of secondary sexual characters. These arise in the formation of one egg or sperm, so there is usually no family history (a small share of Down syndrome cases comes from a translocation carried by a parent), and the chance of Down syndrome rises with the mother’s age`,
    why: 'Count first, 47 is one extra and 45 is one missing, then read the sex chromosomes.',
    say: 'syndromes → Extra X, Klinefelter male; missing X, Turner female.',
  },
  // pp. 177–180
  {
    topic: 2,
    kind: 'remember',
    q: 'Which single-gene disorders must you place, and what is the defect in each?',
    a: `A Mendelian disorder comes from a mutation in one gene and follows Mendelian ratios; it may be autosomal or sex-linked, and many are recessive. A carrier is an unaffected heterozygote who can pass the allele on, which is how two healthy carriers have an affected child. Autosomal recessive: sickle-cell anaemia (a point mutation in the β-globin gene, glutamic acid replaced by valine at position 6, red cells sickling at low oxygen; ${Hb('A')}${Hb('A')} normal, ${Hb('A')}${Hb('S')} an unaffected carrier, ${Hb('S')}${Hb('S')} affected), phenylketonuria (lack of the enzyme that converts phenylalanine to tyrosine, so phenylpyruvic acid builds up and impairs cognitive development) and thalassaemia (too little α or β globin made). X-linked recessive: haemophilia (a clotting protein is non-functional) and red-green colour blindness (a defect in the red or green cones)`,
    why: 'Sort each disorder into its bucket first: autosomal recessive, X-linked recessive or chromosomal.',
    say: 'sickle-cell → Sickle swaps Glu for Val at six.',
  },
  // pp. 180, 183
  {
    topic: 2,
    kind: 'mixup',
    q: 'Sickle-cell anaemia or thalassaemia: how do the two defects differ?',
    a: `Both are autosomal recessive disorders of globin, but the defect differs in kind. In sickle-cell anaemia it is qualitative: a normal amount of globin is made but it is the wrong globin, one amino acid changed (HbS, which clumps at low oxygen and deforms the red cell). In thalassaemia it is quantitative: the globin is structurally normal but too little is made, because the synthesis of the α chain (α-thalassaemia) or the β chain (β-thalassaemia) is reduced. The carrier of sickle-cell (${Hb('A')}${Hb('S')}) has some resistance to malaria. Sickle-cell is also a point mutation, one codon changed, GAG to GUG in the mRNA`,
    why: 'Quality against quantity: the wrong globin is sickle-cell and too little globin is thalassaemia.',
    say: null,
  },
  // pp. 180–183
  {
    topic: 2,
    kind: 'mistake',
    q: 'If the father is normal, can a daughter be colour blind or haemophilic?',
    a: `Not by inheritance from the father: she gets his X, which is normal, so she is at most a carrier. An affected daughter needs an affected father and also a carrier or affected mother. Carrier mother (${X('C')}${X('c')}) × normal father (${X('C')}<i>Y</i>): ${half} of the sons are affected, no daughter is affected and ${half} of the daughters are carriers. Colour-blind father (${X('c')}<i>Y</i>) × carrier mother: ${half} of the daughters and ${half} of the sons are affected, so P(child affected) = ${half} × ${half} + ${half} × ${half} = ${half}. Many students mark daughters as 50% affected for a normal father`,
    why: 'A daughter needs a faulty X from each parent, which is why an affected father is the route.',
    say: null,
  },
  // pp. 180, 183
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What is the quick habit for X-linked and carrier-cross questions?',
    a: `Ignore the Y and track only the X chromosomes, because the Y carries no allele for these genes. A son’s only X comes from his mother, so a carrier mother gives the allele to ${half} of her sons, and every daughter gets the father’s X. For two autosomal recessive carriers (<i>Aa</i> × <i>Aa</i>) draw the square once: ${qtr} affected (<i>aa</i>), ${half} carriers (<i>Aa</i>) and ${qtr} unaffected non-carriers (<i>AA</i>). The ${qtr} is the affected risk, not the carrier risk. These are risks per child, and each conception is independent: a carrier couple can have several affected children or none`,
    why: 'For sons ask what the mother carries, and for daughters ask what the father carries.',
    say: null,
  },

  // ── Topic 04 · Polygenic Inheritance & Pleiotropy ──
  // pp. 185–188
  {
    topic: 3,
    kind: 'remember',
    q: 'What is polygenic inheritance, and how does the skin-colour model give a smooth spectrum?',
    a: `A polygenic trait is controlled by several genes, each adding a small effect, and the environment adjusts the result, so it varies continuously (height, skin colour, weight) in a bell-shaped spread: many allele combinations give a middle count of dominant alleles and only one gives each extreme. Skin colour is taught with three gene pairs, <i>A</i>, <i>B</i> and <i>C</i>, controlling melanin (a teaching model; the real number of genes is larger). Each dominant allele adds a unit, so <i>AABBCC</i> (6 dominant alleles) is darkest and <i>aabbcc</i> (0) is lightest, and the shade depends on how many dominant alleles are present, not which ones. The F<sub>1</sub> <i>AaBbCc</i> is uniform and intermediate like incomplete dominance, but the cause is additive dosage across genes. The F<sub>2</sub> has 7 classes in 1 ∶ 6 ∶ 15 ∶ 20 ∶ 15 ∶ 6 ∶ 1 (64 in all), the middle class ${fr(20, 64)} and each extreme ${fr(1, 64)}`,
    why: 'Incomplete dominance gives a clean 1 ∶ 2 ∶ 1 in the F<sub>2</sub>, a polygenic trait a graded spread of 2<i>n</i> + 1 classes.',
    say: null,
  },
  // pp. 186–188, 190–191
  {
    topic: 3,
    kind: 'remember',
    q: 'What pattern do the polygenic classes follow, and how do you find the chance of a given class?',
    a: `The classes follow the binomial coefficients of (<i>a</i> + <i>b</i>)<sup>2<i>n</i></sup> for <i>n</i> contributing gene pairs: two pairs give 1 ∶ 4 ∶ 6 ∶ 4 ∶ 1 (16 in all) and three pairs give 1 ∶ 6 ∶ 15 ∶ 20 ∶ 15 ∶ 6 ∶ 1 (64 in all). The chance of exactly <i>k</i> dominant alleles is the number of ways of choosing <i>k</i> of the 2<i>n</i> allele slots, over 2<sup>2<i>n</i></sup>, because each slot is dominant with probability ${half}. For three pairs and <i>k</i> = 3 that is ${fr(20, 64)} = ${fr(5, 16)}, the largest single class`,
    why: 'The middle class is the commonest because it has the most allele combinations behind it.',
    say: null,
  },
  // pp. 185–186, 188–189
  {
    topic: 3,
    kind: 'mixup',
    q: 'Multiple allelism, polygenic inheritance or pleiotropy: what is there many of?',
    a: `Ask what there are many of. Multiple allelism: many alleles of one gene (more than two forms in the population, as ${IA}, ${IB} and <i>i</i> of the ABO gene): one gene, one trait. Polygenic inheritance: many genes acting on one trait, each with its usual two alleles and additive effects (skin colour): many genes, one trait. Pleiotropy: one gene with several effects. The PKU gene (phenylalanine hydroxylase) gives impaired cognitive development together with reduced hair and skin pigmentation; the sickle-cell gene gives sickling, anaemia and circulatory problems, with malaria resistance in carriers, from one base change; in pea one gene affects both starch-grain size and the round or wrinkled seed shape`,
    why: 'Polygenic and pleiotropy are mirror images: many genes to one trait, one gene to many traits.',
    say: 'direction → Poly = many genes pile onto one trait; Pleio = one gene plays on many.',
  },
  // pp. 187, 190
  {
    topic: 3,
    kind: 'mistake',
    q: 'What is the frequency of an extreme class, and why is it not one half to the n?',
    a: `An extreme class needs every gene pair homozygous for the same kind of allele, which is a ${qtr} event per gene, so each extreme has frequency (${qtr})<sup><i>n</i></sup>, not (${half})<sup><i>n</i></sup>. For three gene pairs the darkest and the lightest are each ${fr(1, 64)} of the F<sub>2</sub>, not ${fr(1, 8)}. A second slip is to forget the environment: nutrition changes height and sun exposure changes skin tone, so the genotype does not fix the phenotype, and continuous traits seldom show clean Mendelian ratios`,
    why: `An extreme needs all 2<i>n</i> alleles alike: (${half})<sup>2<i>n</i></sup> = (${qtr})<sup><i>n</i></sup>.`,
    say: null,
  },
  // pp. 186, 190–191
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which four results settle most polygenic numericals?',
    a: `For <i>n</i> contributing gene pairs with equal additive effects and independent assortment: phenotypic classes 2<i>n</i> + 1, F<sub>2</sub> genotypes 3<sup><i>n</i></sup>, F<sub>1</sub> gamete types 2<sup><i>n</i></sup>, and each extreme (${qtr})<sup><i>n</i></sup>. Three pairs: 7 classes, 27 genotypes, 8 gamete types and extremes ${fr(1, 64)}. Two pairs: 5 classes, 9 genotypes, 4 gamete types and extremes ${fr(1, 16)}`,
    why: 'Once <i>n</i> is counted, most of these questions are one substitution.',
    say: `counts → Classes = 2<i>n</i> + 1; extremes = (${qtr})<sup><i>n</i></sup>.`,
  },

  // ── Topic 05 · Mutation ──
  // pp. 192–193, 198
  {
    topic: 4,
    kind: 'remember',
    q: 'What is a mutation, what causes it, and how are mutations classified?',
    a: `A mutation is a sudden, stable, inheritable change in the DNA of an organism; the bearer is a mutant and the agent a mutagen (physical: UV radiation, X-rays, gamma rays; chemical: mustard gas; many mutagens are also carcinogens). A spontaneous mutation arises naturally, from copying errors, usually at a low rate; an induced one follows exposure to a mutagen. A forward mutation turns the wild type into a mutant and a reverse mutation restores the original form. Mutation is the original source of new alleles, while recombination reshuffles the alleles that exist; most mutations are neutral or harmful and beneficial ones are rare. To classify, ask the scale first: gene level (the DNA sequence of one gene) or chromosome level (a segment or whole chromosomes)`,
    why: 'The scale sets the consequence: one base, one codon, one gene, many genes, whole chromosomes.',
    say: null,
  },
  // pp. 193–196, 198
  {
    topic: 4,
    kind: 'remember',
    q: 'How do a point mutation and a frameshift differ in their effect on the protein?',
    a: `A point (substitution) mutation replaces one base pair, so it changes at most one codon and usually one amino acid, or none when the redundant code absorbs it. Sickle-cell is one: the sixth codon changes from GAG to GUG in the mRNA (GAG to GTG on the coding strand of the DNA), glutamic acid to valine at position 6 of β-globin. A substitution is a transition (purine for purine, or pyrimidine for pyrimidine) or a transversion (purine for pyrimidine). A frameshift is an insertion or deletion of bases that is not a multiple of three; the code is read in non-overlapping triplets, so every codon after the change is misread, as THE CAT ATE THE RAT after losing one letter reads THC ATA TET HER AT. A frameshift is usually far more damaging than a point mutation`,
    why: 'One letter changed spoils one word; one letter lost re-spaces every word after it.',
    say: 'point → Point swaps one letter; frameshift re-spaces the rest.',
  },
  // pp. 193–195, 197–198
  {
    topic: 4,
    kind: 'mixup',
    q: 'Aneuploidy or polyploidy, and which structural change is which?',
    a: `Aneuploidy is the gain or loss of one or a few chromosomes (2<i>n</i> ± 1), from non-disjunction in meiosis: for 2<i>n</i> = 24, trisomic is 25. Polyploidy is the gain of whole extra sets (3<i>n</i> = 36, 4<i>n</i> = 48), commonly from failure of cytokinesis after the chromosomes double (an allopolyploid also arises when a hybrid’s chromosome set is doubled); it is common in plants, and many crops are polyploid, often with larger fruits or grains. The four structural changes, on the gene order A–B–C–D–E: deletion removes a segment (A–B–D–E), duplication repeats one (A–B–C–C–D–E), inversion reverses one (A–D–C–B–E) and translocation moves one to a non-homologous chromosome`,
    why: 'Deletion removes, duplication repeats, inversion reverses, translocation relocates.',
    say: 'chromosomes → Aneuploidy = a chromosome or two; polyploidy = whole sets too.',
  },
  // pp. 193, 197–198
  {
    topic: 4,
    kind: 'mistake',
    q: 'Does every base change alter the protein, and does every mutation pass to the children?',
    a: `No to both. A point mutation need not change the protein, because the genetic code is redundant: some substitutions leave the amino acid unchanged. And a mutation reaches the next generation through the gametes only if it is germinal (in gamete-forming cells), in a sexually reproducing organism; a somatic mutation stays in the individual and in the cells descended from the mutated cell`,
    why: 'Ask where the mutation happened: gamete-forming cells pass it to offspring, body cells do not.',
    say: null,
  },
  // pp. 194, 196, 198
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you settle a reading-frame question, and count the altered codons?',
    a: `Check whether the number of bases inserted or deleted is a multiple of 3. If it is, whole codons are added or lost and the frame stays intact (deleting 3 bases loses one amino acid, and changes a neighbouring codon if the three straddle two codons). If not, the frame shifts and everything downstream is read wrongly. To count altered codons: total codons = ${fr('number of bases', 3)}, the intact codons are the whole codons before the change, and altered = total − intact. For 300 bases there are 100 codons; if the base at position 31 is deleted, codons 1 to 10 (bases 1–30) stay intact and the 90 codons from the deletion on are read in the shifted frame (the book’s count; a new stop codon could end the chain sooner)`,
    why: 'One test settles most of these: divide the change in bases by 3.',
    say: null,
  },

  // ── Additional A · Epistasis and Derived Dihybrid Ratios ──
  // pp. 199–201
  {
    topic: 5,
    kind: 'remember',
    q: 'What is epistasis, and how do the 9 ∶ 3 ∶ 4 and 9 ∶ 7 ratios arise?',
    a: `When the expression of one gene depends on the genotype at a second gene, the second gene is epistatic to the first: the epistatic gene decides whether the other can express, and the hypostatic gene is the one masked. Every ratio is the 9 ∶ 3 ∶ 3 ∶ 1 of a dihybrid cross regrouped, so it sums to 16. Recessive epistasis, 9 ∶ 3 ∶ 4: in a model plant (a squash-like pattern) <i>cc</i> gives no pigment, so <i>C</i>_<i>Z</i>_ is yellow (9), <i>C</i>_<i>zz</i> green (3), and <i>ccZ</i>_ with <i>cczz</i> white (3 + 1 = 4). Complementary genes, 9 ∶ 7: in sweet pea (<i>Lathyrus odoratus</i>) a dominant allele at both genes is needed for colour, so 9 are coloured and 3 + 3 + 1 = 7 are white`,
    why: 'To check a ratio, write the F<sub>2</sub> classes by dominant-allele count, group those with one phenotype, and confirm the total is 16.',
    say: null,
  },
  // pp. 200–202, 217, 222
  {
    topic: 5,
    kind: 'remember',
    q: 'What are dominant epistasis and duplicate genes, and which ratios do they give?',
    a: `Dominant epistasis, 12 ∶ 3 ∶ 1: a dominant allele at the epistatic gene masks the other gene whatever its genotype, so two classes share a phenotype (9 + 3 = 12), with 3 and 1 left. In the seed-colour example <i>P</i> suppresses pigment: <i>B</i>_<i>P</i>_ and <i>bbP</i>_ are yellow (12), <i>B</i>_<i>pp</i> purple (3) and <i>bbpp</i> white (1). Duplicate genes, 15 ∶ 1: a dominant allele at either gene gives the trait, and only <i>aabb</i> differs, as in <i>Capsella</i>, where any dominant allele gives a triangular capsule and <i>aabb</i> a round one. A further variation, 13 ∶ 3 (a dominant inhibitor masks a colour gene; not worked in this chapter), also sums to 16`,
    why: 'Do not swap 12 ∶ 3 ∶ 1 (dominant epistasis) with 9 ∶ 3 ∶ 4 (recessive epistasis): count which classes were merged.',
    say: null,
  },

  // ── Additional B · Pedigree Analysis: Worked Examples and Interpretation ──
  // pp. 202–203
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you decide whether a pedigree trait is dominant or recessive, and autosomal or X-linked?',
    a: `Test R: two unaffected parents with an affected child means the trait is recessive and both parents are carriers (for an autosomal trait). Test D: two affected parents with an unaffected child means the trait is dominant, and the child is homozygous recessive; the absence of such a case is weak evidence, so rely on Test R. Roughly equal numbers of affected males and females suggest autosomal. Affected individuals that are mostly male, with the trait passing from an affected grandfather through an unaffected carrier daughter to a grandson, suggest X-linked recessive. X-linked dominant is rare: an affected father has affected daughters and no affected sons. Symbols: square male, circle female, filled affected, open unaffected`,
    why: 'Run the two tests in order: dominant or recessive first, then autosomal or X-linked.',
    say: null,
  },
  // pp. 203–204
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you assign genotypes and carrier probabilities in a pedigree?',
    a: `Two unaffected parents with an affected child are both <i>Aa</i>. An affected daughter of an unaffected father rules out X-linked recessive, because that needs an affected father, so the trait is autosomal. An unaffected daughter whose mother is affected (<i>aa</i>) must be <i>Aa</i>, with probability 1: she gets <i>a</i> from her mother and, being unaffected, <i>A</i> from her father. An unaffected daughter of two carriers is a carrier with probability ${fr(2, 3)}, since the <i>aa</i> class is excluded and <i>AA</i> and <i>Aa</i> remain in 1 ∶ 2. Two affected parents of an autosomal recessive trait (<i>aa</i> × <i>aa</i>) can have only affected children. For an X-linked grandfather: ${X('h')}<i>Y</i> gives every daughter a carrier ${X('H')}${X('h')}, and she passes ${X('h')} to ${half} of her sons`,
    why: 'Start from the individuals whose genotype is fixed, then carry each parent pair forward one generation at a time.',
    say: null,
  },

  // ── Additional C · Extended Blood Group Inheritance: Bombay Phenotype and Rh Factor ──
  // pp. 204–205
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the Bombay phenotype, and why does the man in the worked example type as O?',
    a: `The <i>H</i> gene codes for the enzyme that makes the H antigen, the substrate on which the A and B transferases (the products of the <i>I</i> gene) act. A person who is homozygous <i>hh</i> makes no H antigen, so those transferases have nothing to modify and the person types as O whatever the <i>I</i> genotype, though ${IA} or ${IB} can be carried silently and passed on. A man ${IA}<i>i</i>; <i>hh</i> × a woman ${IA}${IA}; <i>HH</i>: every child is <i>Hh</i> and carries ${IA}, so every child is group A. If the mother were <i>Hh</i>, half the children would be <i>hh</i> and type as O. ${IA}<i>i</i> × ${IB}<i>i</i> gives A, B, AB and O in 1 ∶ 1 ∶ 1 ∶ 1`,
    why: 'A group O child of an AB parent, or an A or B child of two group O parents, points to a hidden Bombay (<i>hh</i>) parent rather than <i>ii</i>.',
    say: null,
  },
  // pp. 205–206
  {
    topic: 7,
    kind: 'remember',
    q: 'What happens in Rh incompatibility, and how is it prevented?',
    a: `The Rh antigen (the D antigen) is present in Rh-positive and absent in Rh-negative people. An Rh-negative mother carrying an Rh-positive foetus is usually sensitised at delivery (the book’s and NCERT’s wording; bleeding in pregnancy or a miscarriage can also do it). The first child is usually unaffected, since no antibodies yet exist. In a later pregnancy with an Rh-positive foetus the mother’s anti-Rh antibodies cross the placenta and attack the foetal red cells, causing haemolytic disease of the newborn (erythroblastosis foetalis). Prevention: give the Rh-negative mother anti-D (anti-Rh) antibodies within 72 hours of delivery, so she is not sensitised`,
    why: 'The risk lies in the second Rh-positive baby, because the first one only sensitises the mother.',
    say: null,
  },

  // ── Additional D · Mitochondrial and Cytoplasmic Inheritance ──
  // pp. 206–207
  {
    topic: 8,
    kind: 'remember',
    q: 'How is a mitochondrial gene inherited, and why?',
    a: `Mitochondria carry their own DNA (mtDNA). The zygote’s mitochondria come from the cytoplasm of the egg, and the sperm gives virtually none, so the inheritance is maternal. An affected mother usually passes the condition to all her children, sons and daughters alike, and an affected father to none. The line runs from grandmother to her children, then through the daughters to their children, and an affected son passes it to none of his. A mixture of normal and mutant mitochondria in the mother (heteroplasmy) can spare some of her children, which is why the pattern is stated as usual rather than absolute`,
    why: 'Follow the egg: whatever is in the egg’s cytoplasm is what every child receives.',
    say: null,
  },
  // pp. 207–208
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you tell mitochondrial inheritance from X-linked recessive inheritance?',
    a: `Affected father: mitochondrial passes it to no children, X-linked recessive to all his daughters (as carriers) and to no sons. Affected mother: mitochondrial passes it to all her children, while an affected X-linked mother with a normal father has all sons affected and all daughters carriers. Sons can be affected in both. An X-linked trait skips a generation through carrier females, whereas a mitochondrial trait follows the maternal line. A family where an affected father has an affected child, and the unaffected mother cannot give mutant mitochondria, does not fit the simple rule of mitochondrial inheritance, and points to a nuclear gene or to mutant mitochondria carried by the mother (heteroplasmy)`,
    why: 'The father is the test: a trait he can pass to daughters is X-linked, and one he cannot pass at all is mitochondrial.',
    say: null,
  },

  // ── Additional E · Hardy-Weinberg Equilibrium ──
  // pp. 208–209
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the Hardy-Weinberg equation, and how do you get the carrier frequency from the disease frequency?',
    a: `For two alleles <i>A</i> (frequency <i>p</i>) and <i>a</i> (frequency <i>q</i>), <i>p</i> + <i>q</i> = 1 and <i>p</i><sup>2</sup> + 2<i>pq</i> + <i>q</i><sup>2</sup> = 1: <i>p</i><sup>2</sup> is <i>AA</i>, 2<i>pq</i> is the heterozygote (carriers) and <i>q</i><sup>2</sup> is <i>aa</i> (affected). For a recessive trait: <i>q</i><sup>2</sup> = ${fr('number of affected', 'total population')}, then <i>q</i> = √(<i>q</i><sup>2</sup>), <i>p</i> = 1 − <i>q</i> and carriers 2<i>pq</i>. PKU in 1 in 10,000: <i>q</i><sup>2</sup> = 0.0001, <i>q</i> = 0.01, <i>p</i> = 0.99 and 2<i>pq</i> = 0.0198, about 2%, roughly 1 in 50. Equilibrium means allele frequencies stay constant and genotype frequencies follow <i>p</i><sup>2</sup> ∶ 2<i>pq</i> ∶ <i>q</i><sup>2</sup>, in a large population with no mutation, selection, migration or genetic drift and random mating`,
    why: 'Start from the affected class, the only genotype you can see for a recessive trait, and work outwards.',
    say: null,
  },
  // pp. 209–210
  {
    topic: 9,
    kind: 'remember',
    q: 'What do the other Hardy-Weinberg problems give, and what does selfing do?',
    a: `If 64% show the dominant phenotype, the recessive class is 1 − 0.64 = 0.36, so <i>q</i> = 0.6 and <i>p</i> = 0.4 (the quadratic gives 1.6 or 0.4, and 1.6 is impossible). In 10,000 people with 100 affected, <i>q</i><sup>2</sup> = ${fr(100, 10000)} = 0.01 and <i>q</i> = 0.1. For <i>q</i> = 0.2 the carriers are 2 × 0.8 × 0.2 = 0.32. For <i>p</i> = 0.8 the affected are <i>q</i><sup>2</sup> = 0.04. One generation of selfing in a population in equilibrium with <i>q</i> = 0.3 (<i>q</i><sup>2</sup> = 0.09, 2<i>pq</i> = 0.42) gives <i>aa</i> 0.195, <i>Aa</i> 0.21 and <i>AA</i> 0.595: the allele frequencies are unchanged but the genotype frequencies no longer follow <i>p</i><sup>2</sup> ∶ 2<i>pq</i> ∶ <i>q</i><sup>2</sup>, so inbreeding raises homozygosity`,
    why: 'Check every answer by summing: the three genotype frequencies must add to 1.',
    say: null,
  },

  // ── Additional F · Three-Point Test Cross: Gene Ordering in Detail ──
  // pp. 210–211
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you order three genes from test-cross counts?',
    a: `Find the pairwise RF from the counts, take the largest distance (its genes are the ends), name the missing gene as the middle one, then check that the two smaller distances add to the largest (within error); if not, suspect double crossovers. A trihybrid test cross of 1000 offspring with recombinants 42, 38, 31 and 29: <i>A</i>–<i>B</i> is 42 + 38 = ${fr(80, 1000)} = 8.0%, <i>B</i>–<i>C</i> is 31 + 29 = ${fr(60, 1000)} = 6.0%, and <i>A</i>–<i>C</i> is all four classes, ${fr(140, 1000)} = 14.0%. <i>A</i> and <i>C</i> are the ends, <i>B</i> is in the middle, and 8 + 6 = 14, so the order is <i>A</i>–<i>B</i>–<i>C</i> with no double-crossover class`,
    why: 'Count a class toward a pair only if it separates the two genes of that pair from their parental arrangement.',
    say: null,
  },
  // pp. 211–212
  {
    topic: 10,
    kind: 'remember',
    q: 'Why does RF stop at 50%, and how do you correct a distance for double crossovers?',
    a: `Even if a crossover occurs between two genes in every meiosis, only two of the four chromatids take part, so at most half the gametes are recombinant; for genes far apart multiple crossovers cancel, RF levels off at 50% (the same as independent assortment) and the true distance is underestimated. The double-crossover class is the rarest, since it needs two separate events. A double crossover restores the parental arrangement of the outer genes, so it goes uncounted: with <i>X</i>–<i>Y</i> 3%, <i>Y</i>–<i>Z</i> 7%, direct <i>X</i>–<i>Z</i> 9.4% and double crossovers 0.3%, the true <i>X</i>–<i>Z</i> is 9.4 + 2(0.3) = 10.0 cM = 3 + 7. Distances 5, 12 and 17 give the order <i>B</i>–<i>A</i>–<i>C</i>, since 5 + 12 = 17`,
    why: 'Add each double crossover back twice, because it is two crossover events.',
    say: null,
  },

  // ── Additional G · What NEET Actually Asks ──
  // pp. 212–216
  {
    topic: 11,
    kind: 'remember',
    q: 'How is this chapter weighted in the book’s estimate, and what question shapes return?',
    a: `The distribution is the book’s estimate from past papers, not official figures. It puts Mendelian inheritance (ratios, dominance, test cross, ABO blood groups) at the top, linkage with sex determination and genetic disorders next, and mutation and polygenic inheritance with pleiotropy lower. Six shapes come back: ratio completion (classify the cross: one gene 3 ∶ 1 and 1 ∶ 2 ∶ 1, two genes 9 ∶ 3 ∶ 3 ∶ 1, a test cross by the heterozygote’s gamete types, incomplete dominance or codominance 1 ∶ 2 ∶ 1); the ABO genotype table; linkage and recombination (RF = ${fr('recombinants', 'total')} × 100 as cM, and linkage groups as <i>n</i>); assertion–reason (judge A and R separately, then the link; human sex is not polygenic but follows the Y); matching (the easiest pair first); and pedigree or karyotype identification`,
    why: 'Treat the weighting as a guide to what to revise first, not a count of past questions.',
    say: null,
  },
  // pp. 216–217, 222
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: `The book’s estimate from past papers, not official figures. AB × O giving AB and O: it gives A and B. Klinefelter and Turner swapped: Klinefelter is 47, XXY, a male with an extra X, and Turner is 45, XO, a female missing an X. Sickle-cell called a frameshift: it is a point (substitution) mutation, glutamic acid to valine at position 6. Linkage groups as 2<i>n</i>: it is the haploid <i>n</i>. The 12 ∶ 3 ∶ 1 ratio mixed with 9 ∶ 3 ∶ 4 or 13 ∶ 3: dominant epistasis merges 9 + 3. The father deciding sex in birds: the heterogametic parent decides, the father in XX–XY and XX–XO, but the mother in ZZ–ZW (birds), so in birds the mother’s egg sets the sex. Carrier and affected risk swapped: <i>Aa</i> × <i>Aa</i> gives ${qtr} affected and ${half} carriers. The ratios 9 ∶ 3 ∶ 3 ∶ 1, 9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1, 13 ∶ 3 and 15 ∶ 1 each regroup the sixteen dihybrid boxes`,
    why: 'Check each option on its own: one wrong pair makes the whole option wrong.',
    say: null,
  },
];
