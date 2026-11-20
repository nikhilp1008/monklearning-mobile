/**
 * KEY POINTS for Biology Class 12, Chapter 5 (Molecular Basis of Inheritance).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 14 and Biology
 * 12 Chapter 3 files: every point is a question to answer in your head, then
 * the answer and at most one more line. Four kinds, each a section on the
 * screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each, where the topic has them); an Additional topic has two
 * points for its central results, except the last (What NEET Actually Asks),
 * which has one Remember and one Common mistakes. Memory lines are a fifth,
 * short section of their own, read rather than tested: the first two of each
 * topic.
 *
 * `topic`: Topics 01 to 06 are 0 to 5; Additional topics A to F are 6 to 11;
 * G (the book's What NEET Actually Asks) is 12. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio, to the part of the topic the point
 * draws on) is above each point. Remember: the topic's definitions, tables and
 * mechanisms. Don't mix up: a pair the topic invites you to swap. Common
 * mistakes: its Common student pitfalls (or the Traps). Exam shortcuts: its
 * Pro-Tip. `say`: the cheat sheet's memory aid, word for word, in the
 * Chemistry form: no quotation marks and no markup, the label ("Mnemonic")
 * turned into the arrow form. Topics 01 to 06 print one aid each and the
 * Additional topics none, so the chapter has six lines.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - DNA polymerase "only 5′ → 3′" and "never 3′ → 5′": the points say the
 *   polymerase extends a chain from a free 3′-OH in the 5′ → 3′ direction,
 *   and that its 3′ → 5′ activity is a separate proofreading job;
 * - "Chargaff holds only for double-stranded DNA; single-stranded nucleic
 *   acids do not obey it": given as double-stranded DNA (A = T, G = C), with
 *   double-stranded RNA pairing A with U; a single-stranded sample whose A is
 *   not T is said to point to single-stranded DNA;
 * - "RNA was the first genetic material" and "that is precisely why DNA
 *   replaced it": given as the RNA world hypothesis, with DNA thought to have
 *   evolved from RNA; a ribozyme is given as a hint, not as proof;
 * - Hershey and Chase: most of the 35S stayed outside in the coats and the
 *   bacteria carried 32P, not "no 35S in the cells";
 * - "degenerate and unambiguous are opposites": they are two properties of
 *   the mapping, and the code is both; "AUG must be present for translation
 *   at all" is not repeated (AUG is the usual start codon); "nearly
 *   universal" is kept;
 * - RNA polymerase III "makes snRNAs" is the book's assignment and is flagged
 *   as such; "sigma starts, rho ends" is given for bacteria, rho helping end
 *   transcription at many terminators and an intrinsic hairpin at others;
 * - the sites of the ribosome: the book puts the A and P sites in the large
 *   subunit; the point says so and adds that the sites sit between the
 *   subunits and that there is an E site; "the small subunit scans to AUG" is
 *   not used (scanning is the eukaryotic mechanism); "a ribosome can never drift
 *   between frames" and "translation is one of the most energy-hungry
 *   processes" are not used; the ribozyme is given as the 23S rRNA of
 *   bacteria;
 * - "the cell cannot use lactose" for a super-repressor: given as cannot use
 *   it efficiently; glucose is said to keep the operon largely off, not
 *   fully; the lac operator is not said to be "single";
 * - the human gene count (about 30,000), chromosome 1 (2968) and Y (231) and
 *   the 1.4 million SNPs are the book's and NCERT's figures and are given as
 *   the book's, with the note that current counts of protein-coding genes are
 *   nearer 20,000; "3.2 billion" (book, Additional topic G) is given as about
 *   3 billion (3164.7 million); the six goals are the book's;
 * - "comparing genes would be uninformative" and "only VNTR regions carry
 *   enough variation" are not repeated: VNTRs are given as the regions the
 *   method uses because they vary a lot; a profile match is said to show
 *   consistency, not time or manner of deposit; identical twins share a
 *   profile;
 * - Additional topic A: "polymerase I removes primers" is given as the book's
 *   bacterial picture, eukaryotes using other enzymes; the leading strand's
 *   "toward the fork" is given as running with the fork; the 11-ATP count of
 *   its last practice is not used (the assumptions are the question's own);
 * - Additional topic B: "snRNPs U1 to U6" are named, U6 is not called the
 *   only catalyst; poly-A tailing "only after transcription ends" is given as
 *   after the 3′ cut at the end of transcription; the 10 bonds broken and 10
 *   formed are the two transesterifications per intron, 5 introns;
 * - Additional topic C: lacZ is given as the book's 1024 amino acids (3072
 *   nucleotides of codons, the stop codon adding 3 more); the 138 left over is
 *   the book's UTR figure and includes the stop codon;
 * - the fingerprinting steps: PCR is given as an optional modern addition to
 *   the book's list, and PCR typing as often replacing digestion and blotting;
 *   protein is said to contain sulphur but no phosphorus in its amino acids;
 * - Additional topic D: the 27,000 bp gene and 1500 bp of exons are the
 *   book's worked values; the 281 genes of chromosome 21 is the book's own
 *   practice figure, not checked against another source; gene density 2968
 *   over 249 and 231 over 57 is recomputed (11.9, 4.1, 2.9 times);
 * - Additional topic E: the probabilities assume independent loci; "forensic
 *   identification essentially certain" and "extremely unlikely" are not
 *   repeated; Y-STRs pass on unchanged apart from rare mutations; band sizes
 *   are the book's schematic ones; the swapped-children item is given as
 *   which family each child's bands fit, since the question does not say
 *   where each child now lives;
 * - Additional topic G: the weighting, the "heaviest", "most heavily tested",
 *   "reliably" and "no topic can be skipped" claims are the book's estimate
 *   from past papers, not official figures; no count, share or year of an
 *   exam is repeated; the lines about "three most common traps" and "five
 *   shapes so faithfully" are not used.
 *
 * Markup is the chapter's own: <i> for scientific names and for gene symbols
 * (<i>lac</i>, <i>i</i>, <i>z</i>, <i>y</i>, <i>a</i>, <i>ori</i>), <sub> and
 * <sup>, <frac> for a fraction, no em dash. Strand ends carry the prime (5′,
 * 3′); bases, codons and sequences are upright capitals. A value is kept with
 * its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · DNA/RNA Structure & Replication ──
  // pp. 224–226
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the structure of the DNA double helix, and what do Chargaff’s rules say?',
    a: 'Two antiparallel polynucleotide chains (one 5′ → 3′, the other 3′ → 5′) with a sugar–phosphate backbone joined by 3′–5′ phosphodiester bonds, and the bases pointing inward: A pairs with T by 2 hydrogen bonds and G with C by 3. B-DNA is right-handed, about 2 nm across, with 0.34 nm per base pair, so 10 base pairs make one turn of 3.4 nm. In double-stranded DNA A = T and G = C, so A + G = T + C. DNA has deoxyribose and thymine and is usually double-stranded; RNA has ribose (with a 2′-OH) and uracil and is usually single-stranded',
    why: 'A purine pairs with a pyrimidine, so the width stays constant and each strand can serve as a template for the other.',
    say: null,
  },
  // pp. 226–229
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the steps and enzymes at a replication fork, and what did Meselson and Stahl show?',
    a: 'Replication runs in the S-phase through a fork. Helicase unwinds the helix at the origin (<i>ori</i>), topoisomerase relaxes the strain ahead and single-strand binding proteins hold the strands apart; a short RNA primer gives a free 3′-OH; DNA-dependent DNA polymerase adds nucleotides in the 5′ → 3′ direction, the dNTPs serving as both building blocks and energy source. The new strand copied continuously toward the fork is the leading strand; the other is built backwards as Okazaki fragments, joined by DNA ligase. Meselson and Stahl (1958, <i>E. coli</i>, <sup>15</sup>N to <sup>14</sup>N, CsCl gradient) found one hybrid band after one generation and equal hybrid and light bands after two, which supports semiconservative replication and rules out the conservative model',
    why: 'The lagging strand is discontinuous because the polymerase extends 5′ → 3′ and the template strands are antiparallel: the two facts are linked.',
    say: 'replication crew → Help Topple Single Primers, Police Ligate: Helicase, Topoisomerase, SSBP, Primer, Polymerase, Ligase.',
  },
  // pp. 225–226
  {
    topic: 0,
    kind: 'mixup',
    q: 'Nucleoside, nucleotide, nucleosome, chromatosome: which is which?',
    a: 'A nucleoside is base + sugar and lacks the phosphate; a nucleotide is base + sugar + phosphate, the repeating unit of DNA and RNA. A histone octamer is 8 histones, two each of H2A, H2B, H3 and H4, rich in lysine and arginine and so positively charged. A nucleosome is about 200 bp of negatively charged DNA wound round one octamer; with the H1 linker histone added it is a chromatosome. The beads-on-string chromatin condenses further into a 30 nm fibre, loops and the chromosome',
    why: 'The book and NCERT give about 200 bp for a nucleosome, not the core-particle figure of about 146 bp.',
    say: null,
  },
  // pp. 225, 228, 232
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is DNA replicated 3′ → 5′, and are “antiparallel” and “complementary” the same?',
    a: 'No to both. The polymerase extends the new strand 5′ → 3′ from a free 3′-OH, while the template is read 3′ → 5′, so say which strand you mean. Complementary is the pairing rule (A–T, G–C); antiparallel means the strands run in opposite directions (5′ to 3′ and 3′ to 5′). A question on why the lagging strand is discontinuous wants the antiparallel strands and the 5′ → 3′ polymerase, not base pairing',
    why: 'A separate proofreading activity can remove a wrong base from the 3′ end, but it does not build the chain.',
    say: null,
  },
  // pp. 231–232
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you find base percentages in double-stranded DNA fast?',
    a: 'Use A = T, G = C and a total of 100 per cent. With 22 per cent cytosine, G is also 22, so G + C = 44 and A + T = 56, and A = T = 28 per cent. If a sample has A different from T, it is not standard double-stranded DNA: the data point to single-stranded DNA, and the numbers are not wrong',
    why: 'Find one value and the rest follow from two equations; nothing more elaborate is needed.',
    say: null,
  },

  // ── Topic 02 · The Search for Genetic Material & the RNA World ──
  // pp. 235–237
  {
    topic: 1,
    kind: 'remember',
    q: 'What did Griffith, Avery with MacLeod and McCarty, and Hershey with Chase each show?',
    a: 'Griffith (1928, <i>Streptococcus pneumoniae</i> in mice): live R is harmless, live S kills, heat-killed S is harmless, but heat-killed S with live R kills the mice and live S is recovered, so a heritable “transforming principle” passed from dead S to R, though its nature was not known. Avery, MacLeod and McCarty (1944): protease and RNase did not stop transformation but DNase did, so the principle is DNA. Hershey and Chase (1952, T2 phage and <i>E. coli</i>): DNA was labelled with <sup>32</sup>P and protein with <sup>35</sup>S; after blending and centrifugation the infected bacteria carried <sup>32</sup>P while most of the <sup>35</sup>S stayed outside with the coats, so DNA is the genetic material of the phage',
    why: 'Each step answers the one before: that something transforms, what it is, and a second proof in a different system.',
    say: null,
  },
  // pp. 235, 238
  {
    topic: 1,
    kind: 'remember',
    q: 'What must a genetic material do, and why is DNA better suited than RNA?',
    a: 'It must replicate, be stable, allow slow mutation and express itself as the phenotype. DNA lacks the reactive 2′-OH of ribose, uses thymine (5-methyl uracil) and is double-stranded, so damage to one strand can be repaired from the other; RNA is more labile and mutates faster, which suits a catalyst better than an archive. The RNA world idea (a hypothesis, not a settled fact) holds that RNA, able to store information and to catalyse reactions, came first and that DNA evolved from it as a more stable store',
    why: 'Say “hypothesis” when a question asks about RNA as the first genetic material.',
    say: null,
  },
  // pp. 236–237, 240
  {
    topic: 1,
    kind: 'mixup',
    q: '<sup>32</sup>P or <sup>35</sup>S: which tagged the DNA and which the protein, and why not nitrogen?',
    a: 'DNA contains phosphorus but no sulphur, so <sup>32</sup>P tags DNA; protein contains sulphur (in cysteine and methionine) but no phosphorus in its amino acids, so <sup>35</sup>S tags protein. Nitrogen is in both the DNA bases and the amino acids, so a nitrogen label cannot tell them apart (and <sup>15</sup>N is a stable heavy isotope found by density, not by radioactivity). The radioactivity inside the bacteria came from <sup>32</sup>P',
    why: 'P for the phosphate backbone, S for the sulphur of amino acids.',
    say: null,
  },
  // pp. 234, 238–240
  {
    topic: 1,
    kind: 'mistake',
    q: 'Did Griffith show that DNA is the genetic material, and is RNA the better material because it came first?',
    a: 'No to both. Griffith showed that a heritable transforming principle exists; Avery, MacLeod and McCarty identified it as DNA. And being first does not make RNA better for storage: its reactivity is why DNA is the stable archive, so RNA first is the hypothesis and DNA the later, more permanent store',
    why: 'Keep the credit in order: Griffith finds, Avery names, Hershey and Chase confirm.',
    say: null,
  },
  // p. 240
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you place a scientist in the story of the genetic material?',
    a: 'Use the ladder: Griffith finds the transforming principle (1928), Avery, MacLeod and McCarty name it as DNA (1944), Hershey and Chase confirm it with a phage (1952); Watson and Crick then explain the structure of DNA (1953)',
    why: 'Place the name on its rung of the ladder and the answer follows.',
    say: 'proof ladder → Great Apes Hunt: Griffith (finds), Avery (names = DNA), Hershey–Chase (confirms).',
  },

  // ── Topic 03 · Transcription & Genetic Code ──
  // pp. 241–244
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the parts of a transcription unit, and which strand does the RNA copy?',
    a: 'A transcription unit has a promoter on the 5′ side of the structural gene (the binding site for RNA polymerase), the structural gene itself, and a terminator on the 3′ side. DNA-dependent RNA polymerase adds ribonucleotides 5′ → 3′, so it reads the template strand 3′ → 5′. The RNA therefore has the sequence of the coding strand (5′ → 3′) with U in place of T. For one gene one strand is the template; another gene along the chromosome can use the other',
    why: 'The position of the promoter decides which strand is the template.',
    say: null,
  },
  // pp. 243–246
  {
    topic: 2,
    kind: 'remember',
    q: 'How does transcription run in a bacterium, and what do eukaryotes add?',
    a: 'A bacterium has one RNA polymerase for mRNA, tRNA and rRNA: sigma (σ) helps it start at the promoter and is released during elongation; rho (ρ) helps end transcription at many terminators (others use a GC-rich hairpin). The mRNA needs no processing, so translation can begin during transcription. Eukaryotes use three polymerases: I makes the rRNAs (28S, 18S, 5.8S), II makes hnRNA, the mRNA precursor, and III makes tRNA, 5S rRNA and snRNAs (the book’s assignment). The hnRNA is capped with 7-methylguanosine at the 5′ end, spliced to remove introns and join exons, and given a poly-A tail at the 3′ end',
    why: 'σ starts and ρ ends; the cap sits at the 5′ end, splicing works on the middle, the tail goes on at the 3′ end.',
    say: null,
  },
  // pp. 242, 248–249
  {
    topic: 2,
    kind: 'mixup',
    q: 'Degenerate or unambiguous: what does each word say about the genetic code?',
    a: 'Degenerate: an amino acid can have more than one codon (serine has six), and synonymous codons mostly differ in the third base. Unambiguous: one codon codes for one amino acid. These are two separate properties of the mapping, and the code is both. The code has 64 triplets: 61 sense codons and 3 stop codons, UAA (ochre), UAG (amber) and UGA (opal); AUG codes for methionine and is the usual start. It is read without gaps or overlaps and is nearly universal',
    why: 'Ambiguous is the false word: one codon does not code for two amino acids.',
    say: 'code features → Try Doing Unambiguous, Non-overlapping, Universal Codes Loyally: Triplet, Degenerate, Unambiguous, Non-overlapping, Universal, Commaless, Linear.',
  },
  // pp. 241–243, 248
  {
    topic: 2,
    kind: 'mistake',
    q: 'The coding strand is 5′–ATGCAGTAC–3′: how do you write the template and the mRNA?',
    a: 'The mRNA is the coding strand with U for T: 5′–AUGCAGUAC–3′, with no complementing. The template is the complementary, antiparallel strand, 3′–TACGTCATG–5′, and it is the one the polymerase reads. Two slips to avoid: complementing the coding strand to get the mRNA, and writing the mRNA with T',
    why: 'If the template is given instead, complement it base by base and write the RNA 5′ → 3′.',
    say: null,
  },
  // pp. 245, 247–248
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How many codons and amino acids does a coding region of 1500 nucleotides give?',
    a: '<frac><num>1500</num><den>3</den></frac> = 500 codons, and with one of them the stop codon at most 499 amino acids. A single-base deletion is a frameshift that garbles the codons downstream, while a deletion of three consecutive bases keeps the frame and costs about one amino acid, which is the evidence for a comma-less triplet code',
    why: 'Divide by 3 for codons, then subtract 1 for the stop codon.',
    say: null,
  },

  // ── Topic 04 · Translation ──
  // pp. 250–252
  {
    topic: 3,
    kind: 'remember',
    q: 'What does each component of translation do, and where is the amino acid attached?',
    a: 'mRNA carries the codons; the ribosome (a small and a large subunit) is the site of protein synthesis; tRNA is the adapter, with an anticodon loop that pairs with the codon and an acceptor end (3′ –CCA-OH) that carries the amino acid; aminoacyl-tRNA synthetase attaches the right amino acid to its tRNA using ATP (charging). The ribosome checks the codon–anticodon match, not the amino acid, so accuracy is enforced at charging. No tRNA pairs with the stop codons',
    why: 'Two ends, two jobs: the anticodon reads and the 3′ end carries.',
    say: null,
  },
  // pp. 253–254
  {
    topic: 3,
    kind: 'remember',
    q: 'What happens in initiation, elongation and termination?',
    a: 'Initiation: the mRNA binds the small subunit, which comes to sit on the start codon AUG; the initiator tRNA carrying methionine pairs with it and the large subunit joins. Elongation: a charged tRNA matching the next codon enters the A site, the ribozyme (23S rRNA in bacteria) forms a peptide bond between its amino acid and the chain in the P site, and the ribosome translocates, moving the chain to the P site. Termination: a stop codon in the A site meets a release factor instead of a tRNA, and the polypeptide is released. Energy comes from ATP at charging and GTP at the ribosomal steps. In a bacterium translation can begin while the mRNA is still being transcribed',
    why: 'The peptide bond is made by RNA, a ribozyme, and not by a protein enzyme.',
    say: null,
  },
  // pp. 251, 255–256
  {
    topic: 3,
    kind: 'mixup',
    q: 'P site or A site: which holds what?',
    a: 'The P site (peptidyl) holds the tRNA bearing the growing polypeptide; the A site (aminoacyl) receives the next charged tRNA. After the peptide bond forms, translocation moves the tRNA with the chain from the A site to the P site and the empty tRNA leaves. The book puts the two sites in the large subunit; fuller accounts place them between the two subunits and add an exit (E) site',
    why: 'A for Arriving, P for Peptide.',
    say: 'ribosome sites → A for Arriving (incoming charged tRNA), P for Peptide (holds the chain).',
  },
  // pp. 251, 255–256
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which end of a tRNA carries the amino acid, and which reads the codon?',
    a: 'The amino acid sits at the 3′ acceptor end (–CCA-OH); the anticodon loop reads the codon and carries nothing. The anticodon pairs antiparallel: for the codon 5′–AUG–3′ it is 3′–UAC–5′, which is written 5′–CAU–3′. Aminoacyl-tRNA synthetase charges the tRNA before translation; it does not form the peptide bond, which is the job of the rRNA ribozyme',
    why: 'Writing the anticodon in the wrong direction flips the answer.',
    say: null,
  },
  // pp. 254–256
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you count amino acids from an mRNA, and write an anticodon?',
    a: 'Amino acids = <frac><num>nucleotides</num><den>3</den></frac> − 1 when the stop codon is included: 153 nucleotides give 51 codons and 50 amino acids, and 5′–AUG GCA UAA–3′ gives 2 (Met, Ala) because UAA is a stop codon. For an anticodon, complement the codon and reverse the direction: codon 5′–GCA–3′ gives 3′–CGU–5′, written 5′–UGC–3′',
    why: 'The stop codon codes for no amino acid, so it is the one to subtract.',
    say: null,
  },

  // ── Topic 05 · Regulation of Gene Expression & the lac Operon ──
  // pp. 258–260
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the parts of the <i>lac</i> operon, and what does each make or do?',
    a: 'An operon is one or more structural genes under a common promoter and operator, plus a regulatory gene. In <i>lac</i> the <i>i</i> gene codes for the repressor; the promoter binds RNA polymerase; the operator binds the repressor; the structural genes <i>z</i>, <i>y</i> and <i>a</i> code for β-galactosidase (which splits lactose into galactose and glucose), permease (which raises permeability to lactose) and transacetylase, made on one polycistronic mRNA. Jacob and Monod proposed the operon in 1961; <i>trp</i>, <i>ara</i>, <i>his</i> and <i>val</i> are other examples. In prokaryotes the main control point is the start of transcription',
    why: 'The structural genes run <i>z</i>, <i>y</i>, <i>a</i>, and the <i>i</i> gene stands apart from them.',
    say: 'structural genes & products → ZYA = β-gal, Permease, Transacetylase (in order z-y-a).',
  },
  // pp. 260–261
  {
    topic: 4,
    kind: 'remember',
    q: 'How does the <i>lac</i> operon switch off and on?',
    a: 'No lactose: the repressor from the <i>i</i> gene sits on the operator and blocks RNA polymerase, so little β-galactosidase, permease or transacetylase is made. Lactose present: a little enters the cell and, as allolactose (the inducer), binds the repressor and changes its shape so it leaves the operator; polymerase then transcribes <i>z</i>, <i>y</i> and <i>a</i>. When the lactose is used up the repressor binds again and the operon is off. Because the repressor acts by preventing transcription, this is negative regulation; activators can add positive regulation, and when glucose is present the cell largely keeps the operon off even with lactose',
    why: 'The default is off, and the inducer removes the block.',
    say: null,
  },
  // pp. 259, 263
  {
    topic: 4,
    kind: 'mixup',
    q: 'Promoter or operator: which binds what?',
    a: 'The promoter is where RNA polymerase binds; the operator is where the repressor binds. They are different sites with different jobs. The regulatory gene <i>i</i> makes the repressor and is separate from the structural genes <i>z</i>, <i>y</i> and <i>a</i>. A repressor on the operator is a roadblock in the path of the polymerase',
    why: 'The operator is the repressor’s landing pad; the promoter is the polymerase’s.',
    say: null,
  },
  // pp. 261–263
  {
    topic: 4,
    kind: 'mistake',
    q: 'What is the inducer of the <i>lac</i> operon, and what does negative regulation mean?',
    a: 'The inducer is lactose (as allolactose), not glucose and not galactose; glucose, when present, tends to keep the operon off because the cell prefers it. Negative regulation does not mean the operon is bad or switched off for good: it means the controlling protein, the repressor, prevents transcription, the default is off and the inducer turns the operon on',
    why: 'Galactose is a product of splitting lactose, not the inducer.',
    say: null,
  },
  // pp. 262–264
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you decide whether the operon is on or off?',
    a: 'Ask one question: is the repressor on the operator? On the operator means off; off the operator (because allolactose inactivated it) means on. A repressor that still binds the operator but cannot bind lactose stays on the operator, so the operon stays off even with lactose and the cell cannot use lactose efficiently; a repressor that cannot bind the operator leaves the operon on whether or not lactose is present',
    why: 'The same question settles the mutant cases.',
    say: null,
  },

  // ── Topic 06 · Genomics: The Human Genome Project & DNA Fingerprinting ──
  // pp. 265–266, 271
  {
    topic: 5,
    kind: 'remember',
    q: 'What are the book’s main figures and goals for the Human Genome Project?',
    a: 'It began in 1990 to sequence the whole human genome and find its genes. The book’s figures: about 3 billion base pairs (3164.7 million); about 30,000 or 20,000–25,000 genes (the book’s figure and NCERT’s goal figure; earlier guesses were 80,000 to 140,000, and current counts of protein-coding genes are nearer 20,000); 99.9 per cent of bases identical between people; about 1.4 million SNPs; chromosome 1 has the most genes (2968) and the Y chromosome the fewest (231). Sequencing used Sanger’s method together with bioinformatics. The six goals: identify the genes, sequence the 3 billion bp, store the data in databases, improve analysis tools, transfer the technologies, and address the ethical, legal and social issues (ELSI)',
    why: 'Base pairs, genes and SNPs are three different counts: about 3 billion, about 30,000 or 20,000–25,000, about 1.4 million.',
    say: 'HGP trio → 3 – 30 – 99.9: 3 billion bp, ~30,000 genes, 99.9% identical.',
  },
  // pp. 266–268
  {
    topic: 5,
    kind: 'remember',
    q: 'What is DNA fingerprinting, and how is it done?',
    a: 'Alec Jeffreys developed it (1984, published 1985). It compares repetitive, non-coding VNTR regions (minisatellites), whose repeat number varies greatly between people. Steps: isolate the DNA; optionally amplify it by PCR (a modern addition to NCERT’s list of steps, and PCR-based typing often replaces the digestion and blotting); digest it with restriction enzymes; separate the fragments by gel electrophoresis; transfer them to a nylon or nitrocellulose membrane (Southern blotting); hybridise with a radiolabelled VNTR probe; autoradiography then shows the bands. A child gets one band at a locus from each parent, so each band of the child must be present in the mother or the father; that is how paternity is settled, and the method is also used in forensics and in studying diversity',
    why: 'VNTR regions vary a lot between people, which is why they are the ones compared.',
    say: null,
  },
  // pp. 266, 270
  {
    topic: 5,
    kind: 'mixup',
    q: 'SNP or VNTR: what is each?',
    a: 'An SNP (single nucleotide polymorphism) is a place where a single base differs between individuals; about 1.4 million were identified in the project. A VNTR (variable number of tandem repeats) is a minisatellite whose repeat number varies between individuals and is the basis of DNA fingerprinting. Satellite DNA is repetitive DNA that forms separate small peaks in density-gradient centrifugation',
    why: 'SNP: one letter changed; VNTR: a phrase repeated a different number of times.',
    say: null,
  },
  // pp. 266, 270
  {
    topic: 5,
    kind: 'mistake',
    q: 'Who developed DNA fingerprinting, and does it read genes?',
    a: 'Alec Jeffreys developed it; Lalji Singh (CCMB, Hyderabad) pioneered it in India. It reads non-coding repetitive VNTR regions, chosen because they vary a lot between people, rather than genes. A profile match shows that the DNA is consistent with a person’s, not when or how it got to a place, and identical twins share a profile',
    why: 'Jeffreys developed it; Singh pioneered it in India.',
    say: null,
  },
  // pp. 270–271
  {
    topic: 5,
    kind: 'shortcut',
    q: 'How do you keep the order of the fingerprinting steps?',
    a: 'I-PRESHA: Isolation, PCR (optional modern addition), Restriction digestion, Electrophoresis, Southern blot, Hybridisation, Autoradiography. For the numbers, anchor 3 billion bp, about 30,000 genes and 99.9 per cent identical',
    why: 'Many questions on the steps resolve by placing the named step in this order.',
    say: null,
  },

  // ── Additional topic A · Replication Fork: Directionality, Okazaki Maturation, and Origin Mechanics ──
  // pp. 272–273
  {
    topic: 6,
    kind: 'remember',
    q: 'Why is the lagging strand forced to be discontinuous?',
    a: 'At the fork the parental strands are antiparallel. The polymerase extends a chain 5′ → 3′ from a free 3′-OH. On the template read 3′ → 5′ in the direction the fork moves, it extends continuously with the fork (leading strand). On the opposite template, 5′ → 3′ extension carries it away from the fork, so it lays down a short fragment, repositions nearer the fork and starts again, giving Okazaki fragments. This is forced by chemistry and is not a design choice',
    why: 'The answer links two facts: a 5′ → 3′ polymerase and antiparallel strands.',
    say: null,
  },
  // pp. 273–274
  {
    topic: 6,
    kind: 'remember',
    q: 'How are Okazaki fragments finished, and why do eukaryotes need many origins?',
    a: 'Each fragment starts with an RNA primer made by primase. In the book’s bacterial picture, DNA polymerase I removes the primer (5′ → 3′ exonuclease activity) and fills the gap with DNA, and DNA ligase seals the nick, which needs a 3′-OH and a 5′-phosphate (eukaryotes use other enzymes for this). Eukaryotic chromosomes are large, so they have many origins (a human cell has many thousands), each forming a bubble with two forks moving in opposite directions. Example: 3 × 10<sup>8</sup> bp copied in 8 hours at 50 nucleotides per second per fork: one fork makes 50 × 3600 × 8 = 1,440,000 nucleotides, an origin (two forks) 2,880,000 bp, so at least <frac><num>3 × 10<sup>8</sup></num><den>2.88 × 10<sup>6</sup></den></frac> ≈ 104.2, that is 105 origins; a single origin would need about 833 hours, roughly 35 days',
    why: 'Round the number of origins up, since a fraction of an origin cannot exist.',
    say: null,
  },

  // ── Additional topic B · Eukaryotic RNA Processing: Connecting Split Genes to Mature mRNA ──
  // pp. 275–276
  {
    topic: 7,
    kind: 'remember',
    q: 'In what order is hnRNA processed, and what is unusual about the cap?',
    a: 'Capping comes first, as the 5′ end of the transcript emerges from RNA polymerase II; splicing can begin while transcription goes on; the poly-A tail is added at the 3′ end after the transcript is cut at the end of transcription (the last introns may be spliced out after termination). Order to give: cap, splice, tail. The cap is 7-methylguanosine (m<sup>7</sup>G) joined 5′–5′ to the first nucleotide, unlike the usual 3′–5′ phosphodiester bonds. An hnRNA of cap, exon 1, intron, exon 2, intron, exon 3 and a poly-A site gives m<sup>7</sup>G–exon 1–exon 2–exon 3–poly-A',
    why: 'The 5′–5′ link is the diagnostic feature of the cap.',
    say: null,
  },
  // pp. 275–277
  {
    topic: 7,
    kind: 'remember',
    q: 'How does splicing work, and what does alternative splicing do?',
    a: 'The spliceosome (snRNPs U1, U2, U4, U5 and U6) removes introns at conserved GU (5′ splice site) and AG (3′ splice site) ends. In two transesterification steps the 2′-OH of a branch-point A attacks the 5′ splice site to make a looped lariat with a 2′–5′ bond, and then the exons are joined; each intron removal breaks 2 phosphodiester bonds and forms 2, so 5 introns give 10 broken and 10 formed, a net change of zero. Alternative splicing lets one gene give different mRNAs: with four exons of 50 amino acids each, skipping exon 3 gives 150 amino acids instead of 200, a difference of 50',
    why: 'U1 recognises the 5′ splice site, and the lariat brings the two exon ends together.',
    say: null,
  },

  // ── Additional topic C · Operon Quantification and Extensions ──
  // pp. 277–278
  {
    topic: 8,
    kind: 'remember',
    q: 'How do inducible and repressible operons differ?',
    a: 'In the inducible <i>lac</i> operon the repressor is active by itself and lactose (as the inducer) inactivates it, so the operon is on when lactose is present. In the repressible <i>trp</i> operon, which codes the enzymes of tryptophan synthesis, the repressor is inactive by itself and tryptophan, the corepressor, activates it, so the operon is off when tryptophan is present and on when it is absent. Inducible operons respond to the presence of a substrate; repressible operons respond to the end product',
    why: 'Both repressors already exist, so the effector switches the operon quickly by changing how the repressor binds DNA.',
    say: null,
  },
  // pp. 278–279
  {
    topic: 8,
    kind: 'remember',
    q: 'How do you get an mRNA coding length from a protein size, and what does an operator mutant do?',
    a: 'Multiply the amino acids by 3: β-galactosidase of 1024 amino acids (the book’s figure) needs 1024 × 3 = 3072 nucleotides of codons, and a protein of 500 amino acids needs 1500 (1503 with the stop codon). If the whole mRNA is 3210 nucleotides, the remainder is 3210 − 3072 = 138 nucleotides, which the book counts as UTRs (strictly 3 of them are the stop codon, so the UTRs are 135). A <i>lac</i> operator mutation that stops the repressor binding gives constitutive expression of <i>z</i>, <i>y</i> and <i>a</i>, with or without lactose (at a low-to-moderate level in glucose, the same in both media)',
    why: 'Codons times 3 gives the nucleotides that code amino acids; the stop codon adds 3 more.',
    say: null,
  },

  // ── Additional topic D · Human Genome Project: Data Interpretation and Gene Density ──
  // pp. 279–281
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you compare gene density across chromosomes?',
    a: 'Gene density is genes per million base pairs. Chromosome 1: <frac><num>2968</num><den>249</den></frac> ≈ 11.9 genes per Mb. Y chromosome: <frac><num>231</num><den>57</den></frac> ≈ 4.1. So chromosome 1 is about 2.9 times denser: it is about 4.4 times larger but carries about 13 times as many genes. Gene count does not follow chromosome size, because much of the genome is non-coding',
    why: 'Divide genes by length in Mb, then compare the quotients.',
    say: null,
  },
  // pp. 280–282
  {
    topic: 9,
    kind: 'remember',
    q: 'What share of the human genome codes for protein, and what else is in it?',
    a: 'About 1 to 2 per cent. The book’s example: 30,000 genes of average length 27,000 bp lie within 8.1 × 10<sup>8</sup> bp, <frac><num>8.1 × 10<sup>8</sup></num><den>3 × 10<sup>9</sup></den></frac> ≈ 0.27 of the genome; with exons of 1500 bp per gene, exons total 4.5 × 10<sup>7</sup> bp, 1.5 per cent, so about 98.5 per cent is non-coding or intronic. A gene is then <frac><num>27,000 − 1500</num><den>27,000</den></frac> ≈ 94.4 per cent non-exon. Non-coding DNA includes introns, repeats, transposable elements and regulatory sequences; ESTs are short tags from expressed sequences that help find genes; ELSI is one of the six goals',
    why: 'A large genome does not mean more genes: gene number follows coding capacity, not total length.',
    say: null,
  },

  // ── Additional topic E · DNA Fingerprinting: Band Algebra and Forensic Interpretation ──
  // pp. 282–284
  {
    topic: 10,
    kind: 'remember',
    q: 'How do you match a child’s bands to its parents?',
    a: 'At a VNTR locus a person has two bands, one from each parent. Once the band the child could have from the mother is set aside, the other band must be in the alleged father’s profile; if it is not (apart from a rare mutation), he is excluded. Example: child 4 and 7 kb, mother 7 and 8 kb, alleged father 4 and 9 kb: 7 kb from the mother and 4 kb from the father, so he is not excluded (a match shows he could be the father, not that he is). A child of 3 and 7 kb with a mother of 3 and 5 kb needs a 7 kb band from the father. For families X (mother 3, 6 kb; father 4, 8 kb) and Y (mother 2, 7 kb; father 5, 9 kb), child A (2, 5 kb) fits Y and child B (3, 8 kb) fits X',
    why: 'Test each band of the child against both parents.',
    say: null,
  },
  // pp. 282–284
  {
    topic: 10,
    kind: 'remember',
    q: 'How is a random-match probability found, and what does a Y-STR match show?',
    a: 'For independent loci, multiply the probabilities: six loci of <frac><num>1</num><den>50</den></frac> each give (<frac><num>1</num><den>50</den></frac>)<sup>6</sup> = <frac><num>1</num><den>1.56 × 10<sup>10</sup></den></frac> ≈ 6.4 × 10<sup>−11</sup>, about 1 in 15.6 billion; four loci of <frac><num>1</num><den>20</den></frac> each give <frac><num>1</num><den>160,000</den></frac> = 6.25 × 10<sup>−6</sup>. A very small value is not zero, and identical twins share a profile. Y-STRs pass from father to son along the male line (apart from rare mutations), so a matching Y-STR profile fits the suspect or any male relative on his paternal line, such as a paternal uncle; autosomal STRs or SNPs are needed to tell them apart',
    why: 'Check that the loci are independent before multiplying.',
    say: null,
  },

  // ── Additional topic F · Answer Key Summary ──
  // pp. 284–285
  {
    topic: 11,
    kind: 'remember',
    q: 'What are the answers in the key for Additional topics A to C?',
    a: 'A: the lagging strand is discontinuous because the polymerase extends 5′ → 3′ and the template strands are antiparallel; DNA polymerase I removes primers and fills gaps (the book’s bacterial picture) and DNA ligase seals the nicks; eukaryotes need many origins to finish within the S-phase. B: cap, then intron removal, then termination and 3′ cleavage, then polyadenylation (the last introns may be spliced out after termination); the cap is 7-methylguanosine joined 5′–5′; 5 introns give 10 bonds broken and 10 formed. C: inducible means off by default and switched on by the substrate, repressible means on by default and switched off by the end product; a protein of 500 amino acids needs 1500 nucleotides; an operator mutant that cannot bind the repressor is constitutive',
    why: 'Use the key to check the method, not as a list to memorise.',
    say: null,
  },
  // p. 285
  {
    topic: 11,
    kind: 'remember',
    q: 'What are the answers in the key for Additional topics D and E?',
    a: 'D: the book’s chromosome 21 example gives about 5.9 genes per Mb; about 94.4 per cent of a typical gene is not exon; a large genome reflects repetitive non-coding DNA rather than more genes; ESTs mark expressed regions; model organisms allow comparison between genomes. E: the father must give the 7 kb band; autosomal STRs come from both parents while Y-STRs follow the paternal line; <frac><num>1</num><den>20</den></frac> to the power 4 is <frac><num>1</num><den>160,000</den></frac>; a match shows consistency, not when or how the DNA arrived, and identical twins share a profile; child A (2, 5 kb) fits family Y and child B (3, 8 kb) fits family X',
    why: 'Each answer follows from the method of its Additional topic.',
    say: null,
  },

  // ── Additional topic G · What NEET Actually Asks ──
  // pp. 286–288
  {
    topic: 12,
    kind: 'remember',
    q: 'How does the book weight this chapter, and which five question shapes come back?',
    a: 'The weighting is the book’s estimate from past papers, not official figures. It puts DNA structure and replication, and transcription and the code, highest; the genetic-material experiments, the <i>lac</i> operon and genomics next; translation and chromatin lighter. Five shapes: a Chargaff percentage (20 per cent C gives 30 per cent A); an assertion–reason on the leading and lagging strands (R explains A, option (a)); who did which experiment (Griffith, Avery, Hershey and Chase); an incorrect-statement battery (introns are removed, so they are not in mature mRNA); and a column match of <i>lac</i> parts (operator binds the repressor, promoter binds RNA polymerase, structural genes code for enzymes, the regulatory gene for the repressor)',
    why: 'Treat the weighting as a guide to what to revise first, not as a count of past questions.',
    say: null,
  },
  // pp. 289–293
  {
    topic: 12,
    kind: 'mistake',
    q: 'Which wrong statements keep recurring in this chapter?',
    a: 'The book’s list, with the true version: Chargaff’s A = T and G = C belongs to double-stranded DNA (double-stranded RNA pairs A with U). DNA polymerase extends a chain 5′ → 3′; its 3′ → 5′ activity is proofreading. The code is degenerate and unambiguous. σ starts and ρ helps end transcription in bacteria. Introns are removed, so they are not in mature mRNA. RNA is labile, which is thought to be why DNA became the stable archive (RNA first is a hypothesis). Jeffreys developed fingerprinting and Lalji Singh pioneered it in India. 3 billion is base pairs and 30,000 is genes. <i>z</i> codes for β-galactosidase and <i>y</i> for permease. After two generations in Meselson–Stahl the DNA is half hybrid and half light',
    why: 'In an assertion–reason item two true statements may not be linked, so check that R explains A.',
    say: null,
  },
];
