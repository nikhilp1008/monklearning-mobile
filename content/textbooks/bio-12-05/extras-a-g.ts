import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 5 (Molecular Basis of Inheritance), Additional topics A to G, word for word from the
 * Class 12 Biology Master Reference (book pp. 272 to 293): A "Replication Fork: Directionality, Okazaki Maturation,
 * and Origin Mechanics" (p. 272 below the shared introduction, to p. 274), B "Eukaryotic RNA Processing: Connecting
 * Split Genes to Mature mRNA" (p. 275 to the top of p. 277), C "Operon Quantification and Extensions" (p. 277 to
 * p. 279), D "Human Genome Project: Data Interpretation and Gene Density" (low on p. 279 to the top of p. 282),
 * E "DNA Fingerprinting: Band Algebra and Forensic Interpretation" (p. 282 to the top of p. 284),
 * F "Answer Key Summary" (p. 284 to the foot of p. 285) and G "What NEET Actually Asks" (the book's "Addendum P",
 * heading at the foot of p. 285, text pp. 286 to 293). Page 294 is the next chapter.
 *
 * Topic indexes: A = 6, B = 7, C = 8, D = 9, E = 10, F = 11, G = 12 (Topics 01 to 06 = 0 to 5).
 * No figure in these pages (only ruled lines). The shared introduction (p. 272) opens A's Introduction.
 * Em dashes are written as colons, commas or brackets. Where the book prints no options for an assertion and
 * reason item, the standard four are added (new wording, listed in the report).
 */

const EST = '(the book’s estimate from past papers, not official figures)';
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 272–274 ─────────────────────────
  {
    n: 'A',
    title: 'Replication Fork: Directionality, Okazaki Maturation, and Origin Mechanics',
    extra: true,
    kalam: 'Each Okazaki fragment begins with an RNA primer (laid down by primase).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `These Additional topics cover five examinable patterns that Topics 01 to 06 treat only briefly: the full directionality logic of the replication fork (why the lagging strand is forced into Okazaki fragments), eukaryotic RNA processing pipelines (connecting split-gene transcription to mature mRNA), quantitative operon analysis (protein counts and mRNA lengths), Human Genome Project data interpretation (gene density, chromosome comparisons, ELSI), and DNA fingerprinting beyond the basic procedure (matching paternity bands algebraically). Each Additional topic supplies exactly one new skill layer with worked CBSE and NEET examples and full practice sets.<br><br>Topic 01 establishes that DNA polymerase builds a chain only in the 5′→3′ direction, that the strands are antiparallel, that this forces the leading/lagging distinction, and that DNA ligase joins the Okazaki fragments. What it does not work through is how the RNA primer of each fragment is removed and the gap filled, and how multiple replication origins cooperate on eukaryotic chromosomes.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The fork-directionality proof (the one-sentence answer).</b> At a replication fork the two parental strands are antiparallel. Relative to the direction in which the fork moves, one template runs 3′→5′ (the leading-strand template) and the other runs 5′→3′ (the lagging-strand template). Because the polymerase can only extend 5′→3′, on the 3′→5′ template it extends continuously in the same direction as the fork, following the helicase. On the opposite template, 5′→3′ extension carries the polymerase away from the fork (it cannot extend toward the fork), so it must lay down a short fragment, then reposition closer to the fork and start another. This mechanical inevitability is why the lagging strand is discontinuous, not a design choice.`,
      },
      {
        t: 'p',
        html: `<b>Okazaki fragment processing.</b> Each Okazaki fragment begins with an RNA primer (laid down by primase). In <i>E. coli</i> (the bacterial picture the book gives; eukaryotes use other enzymes for this step), after synthesis, DNA polymerase I removes the RNA primer (5′→3′ exonuclease activity) and fills the gap with DNA. DNA ligase then seals the nick between adjacent fragments, producing a continuous lagging strand. The key point for exams: ligase needs a 3′-OH and a 5′-phosphate at each nick; these are created by the preceding polymerase’s activity.`,
      },
      {
        t: 'p',
        html: `<b>Multiple origins in eukaryotes.</b> Eukaryotic chromosomes have many replication origins (in contrast to the single <i>oriC</i> of <i>E. coli</i>). Each origin forms a replication bubble with two forks moving in opposite directions. Replication proceeds bidirectionally until adjacent bubbles fuse. This is testable as “why do eukaryotes need multiple origins?”: because their chromosomes are enormous; a single origin would take too long to replicate.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Leading/Lagging Directionality.</b> At a replication fork moving rightward, which template strand is read by the leading-strand polymerase, and why can the lagging-strand polymerase not synthesise continuously toward the fork?`,
        steps: [
          `The leading-strand polymerase reads the template that runs 3′→5′ in the direction of fork movement. It extends 5′→3′ rightward, following the helicase. The lagging-strand template runs the opposite way (5′→3′ in the direction of fork movement). Polymerase on this template extends 5′→3′ leftward, away from the fork, because polymerase can only work in that chemical direction. By the time the next Okazaki fragment is initiated, the fork has moved farther right, making continuous synthesis impossible.`,
        ],
        ans: `The leading-strand polymerase reads the template that runs 3′→5′ toward the fork; the lagging-strand polymerase synthesises away from the fork (5′→3′ on the opposite template) and must work discontinuously.`,
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `<b>Okazaki Fragment Processing Sequence.</b> In <i>E. coli</i>, name the enzyme that removes the RNA primer during lagging-strand synthesis, the enzyme that fills the resulting gap, and the enzyme that joins adjacent DNA fragments. State one property of DNA polymerase I that makes this possible.`,
        steps: [
          `In <i>E. coli</i>, DNA polymerase I removes the RNA primer (5′→3′ exonuclease activity) and replaces it with DNA. DNA ligase then joins the fragments. The key property of DNA polymerase I is its 5′→3′ exonuclease activity, which allows it to excise the RNA primer while simultaneously synthesising DNA to fill the gap.`,
        ],
        ans: `DNA polymerase I (primer removal and gap-filling); DNA ligase (joins fragments); polymerase I has 5′→3′ exonuclease activity.`,
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Bidirectional Replication and Origin Count.</b> A human chromosome of 3 × 10<sup>8</sup> bp replicates in 8 hours. DNA synthesis proceeds at 50 nucleotides per second per replication fork. (i) How many replication origins are minimally required? (ii) If this chromosome were a bacterial chromosome of the same size with a single origin, how long would replication take?`,
        steps: [
          `(i) At 50 nucleotides per second per fork: 50 × 3600 × 8 = 1,440,000 nucleotides per fork in 8 hours. With one fork travelling from one origin in each direction (bidirectional), each origin replicates 2 × 1,440,000 = 2,880,000 bp per 8 hours. Origins required: ⌈${fr('3 × 10<sup>8</sup>', '2.88 × 10<sup>6</sup>')}⌉ = ⌈104.2⌉ = 105 origins.`,
          `(ii) With a single origin, one pair of forks would need to replicate all 3 × 10<sup>8</sup> bp. Time required: ${fr('3 × 10<sup>8</sup>', '2,880,000')} × 8 hours ≈ 833 hours ≈ 35 days: far too slow for S-phase.`,
        ],
        ans: `(i) ~105 origins; (ii) ~35 days at the same fork speed, making a single origin infeasible.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] State why the lagging strand cannot be synthesised continuously at a replication fork, naming the structural feature of DNA polymerase responsible.`,
            a: `Because DNA polymerase extends only 5′→3′, and on the lagging-strand template the polymerase would have to extend 3′→5′ toward the fork, which no DNA polymerase can do (it adds nucleotides only to a free 3′-OH). The enzyme’s unidirectional nature is the constraint.`,
          },
          {
            q: `[NEET] During Okazaki fragment processing in <i>E. coli</i>, which enzyme (a) removes the RNA primer, (b) replaces it with DNA, and (c) seals the resulting nick?`,
            a: `(a) DNA polymerase I (5′→3′ exonuclease); (b) DNA polymerase I (polymerisation); (c) DNA ligase. (This is the <i>E. coli</i> picture; eukaryotes use other enzymes.)`,
          },
          {
            q: `[CUET] Why does a eukaryotic chromosome need many replication origins (a human cell has tens of thousands in all) while <i>E. coli</i> requires only one?`,
            a: `Eukaryotic chromosomes are vastly larger (millions to hundreds of millions of bp) and S-phase is limited to a few hours. Multiple origins allow many forks to work in parallel, completing replication in time; a single origin would take days.`,
          },
          {
            q: `[NEET] At a replication fork, one template strand runs 3′→5′ toward the fork and the other runs 5′→3′ toward the fork. On which template (leading or lagging) does the polymerase extend continuously in the same direction as the fork, and why?`,
            a: `The leading-strand template (3′→5′ toward the fork). Polymerase extending 5′→3′ on it moves in the same direction as the fork, so synthesis is continuous. The lagging-strand template runs 5′→3′ toward the fork, so polymerase extending 5′→3′ moves away from the fork.`,
          },
          {
            q: `[NEET High-Difficulty] If an Okazaki fragment is 1000 nucleotides long and the RNA primer is 10 nucleotides, how many phosphodiester bonds does DNA ligase have to seal per fragment, and how many high-energy bonds does the cell consume in the processing of one fragment? (Assume 1 ATP per nucleotide and 1 ATP per ligation step.)`,
            a: `Ligase seals the backbone between fragments. With one fragment per primer, ligase forms 1 phosphodiester bond per fragment (sealing the nick at the fragment junction). Polymerase I replaces 10 RNA nucleotides with DNA, consuming ~10 ATP on the question’s assumption (in reality polymerisation is paid for by the dNTPs themselves, not by ATP). Ligase consumes ~1 ATP (or NAD<sup>+</sup> in bacteria). Total: 1 bond, ~11 high-energy bonds.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 275–277 ─────────────────────────
  {
    n: 'B',
    title: 'Eukaryotic RNA Processing: Connecting Split Genes to Mature mRNA',
    extra: true,
    kalam: 'Poly-A tailing happens at the 3′ end once the transcript is cleaved at the end of the gene, as transcription terminates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 names exons, introns and the three processing steps in order (capping, splicing, tailing), but does not say which of them can happen while the transcript is still being made, or how alternative splicing generates protein diversity. These are distinct, testable layers.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Processing sequence and co-transcriptionality.</b> In eukaryotes, capping occurs immediately as the 5′ end of the nascent transcript emerges from RNA polymerase II, before splicing or tailing. Splicing can also occur co-transcriptionally as the transcript is still being synthesised. Poly-A tailing happens at the 3′ end once the transcript is cleaved at the end of the gene, as transcription terminates. The order for the exam: cap → splicing (may overlap with transcription) → poly-A tail.`,
      },
      {
        t: 'p',
        html: `<b>The cap structure.</b> The 5′ cap is a 7-methylguanosine (m<sup>7</sup>G) linked 5′–5′ to the first nucleotide of the transcript (not the usual 3′–5′ phosphodiester bond). The first one or two transcribed nucleotides next to the cap often carry a 2′-O-methyl group. This inverted linkage is the diagnostic feature.`,
      },
      {
        t: 'p',
        html: `<b>Splicing and the spliceosome.</b> Introns are removed by the spliceosome (snRNPs: U1, U2, U4, U5, U6). The GU at the 5′ splice site and the AG at the 3′ splice site are conserved (the GU-AG rule). The lariat structure forms during splicing. Alternative splicing means one gene can produce different mRNAs: one mechanism for protein diversity.`,
      },
      {
        t: 'table',
        title: 'RNA polymerase product map (NCERT-exact)',
        head: ['Polymerase', 'Product'],
        rows: [
          ['RNA Pol I', '28S rRNA, 18S rRNA, 5.8S rRNA (three rRNAs together)'],
          ['RNA Pol II', 'hnRNA (precursor of mRNA)'],
          ['RNA Pol III', '5S rRNA, tRNA, snRNAs'],
        ],
      },
      {
        t: 'p',
        html: `(As in NCERT. In fact the spliceosomal snRNAs U1, U2, U4 and U5 are made by RNA polymerase II and only U6 by RNA polymerase III; answer exam questions as NCERT does.)`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Processing Sequence.</b> An hnRNA transcript has the following order from 5′ to 3′: cap–exon 1–intron–exon 2–intron–exon 3–poly-A tail site. Write the sequence of the mature mRNA after capping, splicing, and tailing.`,
        steps: [
          `Capping adds m<sup>7</sup>G to the 5′ end before splicing begins. Splicing removes both introns and joins exons 1–2–3. Polyadenylation adds poly-A at the 3′ end after the transcript is cut at the end of transcription.`,
          `Mature mRNA: 5′–m<sup>7</sup>G–exon 1–exon 2–exon 3–poly-A–3′.`,
        ],
        ans: `m<sup>7</sup>G–exon 1–exon 2–exon 3 with a poly-A tail at the 3′ end.`,
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: `<b>RNA Polymerase Products.</b> Name the three rRNAs transcribed by RNA polymerase I and the RNAs transcribed by RNA polymerase III.`,
        steps: [
          `RNA polymerase I transcribes three rRNAs: 28S rRNA, 18S rRNA and 5.8S rRNA (28S and 5.8S belong to the large ribosomal subunit; 18S belongs to the small subunit). RNA polymerase III transcribes 5S rRNA, tRNA, and snRNAs.`,
        ],
        ans: `Pol I → 28S, 18S, 5.8S rRNA; Pol III → 5S rRNA, tRNA, snRNAs.`,
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Alternative Splicing and Protein Diversity.</b> A gene has four exons: E1–E2–E3–E4 with introns I1, I2 and I3 between them. One mRNA isoform includes all four exons; a second isoform skips exon 3. How many amino acids different are the two proteins, given that each exon codes for 50 amino acids?`,
        steps: [
          `Isoform 1 (all exons): 4 × 50 = 200 amino acids. Isoform 2 (exon 3 skipped): 3 × 50 = 150 amino acids. Difference: 50 amino acids. The skipped exon eliminates exactly its coded segment from the protein, demonstrating how alternative splicing produces protein variants from one gene.`,
        ],
        ans: `The two proteins differ by 50 amino acids; isoform 2 lacks the 50-amino-acid segment encoded by exon 3.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CUET] Arrange the following events of hnRNA processing in the correct chronological order: polyadenylation, cap addition, intron removal, transcription termination.`,
            a: `Cap addition (as the transcript emerges) → intron removal (may begin co-transcriptionally) → transcription termination and 3′ cleavage → polyadenylation (splicing of the last introns can finish after termination).`,
          },
          {
            q: `[NEET] What is the structure of the 5′ cap of eukaryotic mRNA? Why is the bond linking the cap to the first nucleotide unusual?`,
            a: `The cap is 7-methylguanosine linked 5′–5′ to the first nucleotide of the mRNA. This is unusual because all standard RNA backbone bonds are 3′–5′ phosphodiesters; the 5′–5′ bond inverts the orientation of the cap.`,
          },
          {
            q: `[CBSE] State the role of U1 and U6 snRNPs in the spliceosome.`,
            a: `U1 snRNP recognises and binds the 5′ splice site (GU); U6 snRNP is the catalytic component of the spliceosome that performs the transesterification reactions.`,
          },
          {
            q: `[NEET] If a gene contains 5 introns and 6 exons, how many phosphodiester bonds are broken and re-formed during the production of one mature mRNA molecule from this gene?`,
            a: `5 introns means 5 introns are removed. Splicing is two transesterification steps, so each intron removal breaks 2 phosphodiester bonds (at the 5′ and 3′ splice sites) and forms 2 new ones (the 2′–5′ branch bond of the lariat and the exon–exon bond). Total: 10 bonds broken and 10 bonds formed; the net change in the number of phosphodiester bonds is zero.`,
          },
          {
            q: `[NEET High-Difficulty] Explain, with a diagram description, how the lariat structure forms during splicing and why it is important for accurate intron removal.`,
            a: `The 2′-OH of the branch-point A attacks the phosphodiester bond at the 5′ splice site (GU). This cleaves the exon–intron junction and forms a 2′–5′ bond, creating a lasso-shaped loop (lariat) in the intron. This brings the two exon ends into proximity for the second transesterification, ensuring precise exon joining. The lariat is later debranched. Diagram to draw: linear hnRNA → lariat intron + linear exons → ligated mRNA.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 277–279 ─────────────────────────
  {
    n: 'C',
    title: 'Operon Quantification and Extensions',
    extra: true,
    kalam: 'Inducible operons respond to the presence of a substrate; repressible operons respond to the absence of an end product.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 05 explains the <i>lac</i> operon mechanism clearly. Topic 04 counts codons and amino acids, but no topic works out <i>lac</i> protein sizes or mRNA lengths, treats repressor-operator kinetics, or compares the <i>lac</i> operon (inducible) with the <i>trp</i> operon (repressible), which Topic 05 only names in a list of examples. These go beyond NCERT; they are practice in the reasoning that NEET questions on this topic test, not syllabus items.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Inducible vs repressible operons: the distinction.</b> The <i>lac</i> operon is inducible: the repressor is active by default and the inducer (lactose) inactivates it. The <i>trp</i> operon is repressible: the repressor is synthesised in an inactive form and the corepressor (tryptophan) activates it. Inducible operons respond to the presence of a substrate; repressible operons respond to the absence of an end product.`,
      },
      {
        t: 'p',
        html: `<b>Protein sizes from operon data.</b> If the <i>z</i> gene of the <i>lac</i> operon codes for β-galactosidase (~1024 amino acids in <i>E. coli</i>, the book’s figure), the mRNA coding region is 1024 × 3 = 3072 nucleotides of sense codons (3075 with the stop codon). Adding leader and trailer UTRs (~100 nucleotides total) gives ~3175 nucleotides for the full mRNA of a message carrying only <i>lacZ</i> (the book adds the UTRs to 3072 and prints ~3172).`,
      },
      {
        t: 'table',
        title: 'Comparing lac and trp operons',
        head: ['Feature', '<i>lac</i> operon', '<i>trp</i> operon'],
        rows: [
          ['Type', 'Inducible', 'Repressible'],
          ['Repressor state', 'Active by default (inactivated by lactose)', 'Inactive by default (activated by tryptophan)'],
          ['Effector', 'Lactose (inducer = inactivator)', 'Tryptophan (corepressor = activator)'],
          ['When ON', 'Lactose present', 'Tryptophan absent'],
          ['Product', 'Enzyme for lactose utilisation', 'Enzyme for tryptophan biosynthesis'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Inducible vs Repressible Operon.</b> The <i>trp</i> operon of <i>E. coli</i> has five structural genes for the enzymes of tryptophan biosynthesis. The repressor protein encoded by the regulatory gene (<i>trpR</i>) of the <i>trp</i> operon system is active only when bound to tryptophan. Explain why this makes the <i>trp</i> operon repressible and not inducible.`,
        steps: [
          `In the <i>trp</i> operon, the repressor protein alone cannot bind the operator (it requires tryptophan as a corepressor to activate it). Only when tryptophan is present (and therefore the cell has enough of the end product) does the active repressor-operator complex form and switch transcription off. When tryptophan is absent, no repression occurs and the operon is transcribed. This is the opposite logic of the <i>lac</i> operon, where the repressor is active by default and the inducer (lactose) removes it. The <i>trp</i> operon is therefore repressible (it is switched off by the presence of the end product), while the <i>lac</i> operon is inducible (it is switched on by the presence of the substrate).`,
        ],
        ans: `Repressible operon; active repressor requires tryptophan as corepressor; operon is OFF when tryptophan is present, ON when absent.`,
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `<b>mRNA Length from Gene.</b> The <i>lacZ</i> gene of <i>E. coli</i> codes for β-galactosidase containing 1024 amino acids. (i) What is the minimum number of nucleotides in the <i>lacZ</i> mRNA coding region? (ii) If the complete <i>lacZ</i> mRNA (including UTRs) is 3210 nucleotides long, how many nucleotides are accounted for by the UTRs?`,
        steps: [
          `(i) Coding region: 1024 amino acids × 3 nucleotides per codon = 3072 nucleotides of sense codons (the stop codon adds 3 more).`,
          `(ii) Total mRNA minus coding region: 3210 − 3072 = 138 nucleotides outside the 1024 sense codons. These are the UTRs (5′ leader + 3′ trailer); the book counts all 138 as UTRs, but strictly 3 of them are the stop codon, so the UTRs are 135 nucleotides.`,
        ],
        ans: `(i) 3072 nucleotides of sense codons (3075 with the stop codon); (ii) 138 nucleotides (the book’s UTR figure; strictly 135 plus the 3 of the stop codon).`,
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Negative Control: Repressor Concentration.</b> A cell of <i>E. coli</i> contains about 10 molecules (tetramers) of active <i>lac</i> repressor and one main <i>lac</i> operator. Explain why the operator is almost always occupied when lactose is absent, and why transcription of the <i>z–y–a</i> genes rises sharply when lactose is added.`,
        steps: [
          `Without lactose, the repressor (coded by the constitutively expressed <i>i</i> gene) is active and binds the operator with high affinity. Even a few molecules per cell are enough to keep the main operator occupied almost all the time, so RNA polymerase is blocked and the operon is OFF. When lactose is added, some of it is converted to allolactose, which binds the repressor and changes its shape so that it can no longer bind the operator. The operator becomes free, RNA polymerase transcribes <i>z</i>, <i>y</i> and <i>a</i>, and the operon is ON.`,
        ],
        ans: `Active repressor keeps the main operator occupied (operon OFF) when lactose is absent; allolactose inactivates the repressor, the operator is released and the operon is switched ON.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CUET] Distinguish between an inducible and a repressible operon, giving one example of each.`,
            a: `Inducible operon: default OFF, switched ON by inducer (substrate present). Example: <i>lac</i> operon. Repressible operon: default ON, switched OFF by corepressor (end product present). Example: <i>trp</i> operon.`,
          },
          {
            q: `[NEET] In the <i>lac</i> operon, the <i>i</i> gene is constitutively expressed. In the <i>trp</i> operon, the repressor is produced but remains inactive until tryptophan binds. Explain this difference in terms of the default state of each operon.`,
            a: `In <i>lac</i>: repressor is active alone; default is OFF (no lactose). In <i>trp</i>: repressor is inactive alone; tryptophan activates it; default is ON (no tryptophan). The default state differs because the regulatory protein requires different effector molecules.`,
          },
          {
            q: `[CBSE] If a <i>lac</i> operon structural gene encodes a protein of 500 amino acids, what is the minimum length of the mRNA coding region in nucleotides?`,
            a: `500 × 3 = 1500 nucleotides of sense codons (1503 with the stop codon).`,
          },
          {
            q: `[NEET] Why does adding lactose to the growth medium of <i>E. coli</i> cause rapid derepression of the <i>lac</i> operon, while adding tryptophan to the growth medium causes rapid repression of the <i>trp</i> operon?`,
            a: `Lactose inactivates the constitutive repressor, immediately removing the block; tryptophan activates the constitutive-inactive repressor, immediately placing the block. Both are fast because the repressor protein already exists: the effector just changes its DNA-binding conformation.`,
          },
          {
            q: `[NEET High-Difficulty] In a <i>lac</i> operon mutant where the operator sequence is altered so that the repressor cannot bind at all, predict the phenotype (constitutive expression, inducible expression, or no expression) of β-galactosidase when grown in (a) glucose-only medium and (b) lactose-plus-glucose medium. Justify your answer.`,
            a: `(a) Constitutive: β-galactosidase is made even without lactose, because the repressor can never occupy the mutated operator (the level is only low to moderate in glucose, because glucose lowers cAMP and weakens CAP-mediated activation: catabolite repression). (b) Constitutive: expression is about the same low-to-moderate level as in (a) and does not depend on lactose, because the repressor cannot bind the mutated operator whether or not lactose is present. The mutant operon is permanently derepressed (an operator-constitutive, <i>O</i><sup><i>c</i></sup>, mutant, which looks like an <i>i</i><sup>−</sup> mutant in phenotype although the defect is in the operator, not the <i>i</i> gene).`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 279–282 ─────────────────────────
  {
    n: 'D',
    title: 'Human Genome Project: Data Interpretation and Gene Density',
    extra: true,
    kalam: 'Only ~1–2% of the human genome codes for protein.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 06 gives the headline HGP numbers (3 billion bp, ~30,000 genes), lists ELSI among the six goals and quotes the gene counts of chromosome 1 and the Y chromosome, but does not turn those counts into gene density, compare them with chromosome size, work out how much of the genome codes for protein, or explain how ESTs helped find genes. These are distinct, testable analysis skills.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Gene density = genes per unit length.</b> Chromosome 1 (the largest autosome) has the most genes, ~2968 (NCERT), over ~249 million bp, giving ~12 genes per million bp. The Y chromosome has the fewest genes (~231) over ~57 million bp, giving ~4 genes per million bp. This ~3-fold density difference shows that gene density is not the same for all chromosomes, and gene count is not proportional to chromosome size: much of the genome is non-coding.`,
      },
      {
        t: 'p',
        html: `<b>Non-coding DNA and its significance.</b> Only ~1–2% of the human genome codes for protein. The rest includes introns (within genes), repetitive and satellite DNA, transposable elements, and regulatory sequences. This non-coding DNA was once called “junk” but is now known to include functional regulatory elements, non-coding RNAs, and structural components.`,
      },
      {
        t: 'p',
        html: `<b>ELSI: a goal of HGP from the outset.</b> The Human Genome Project (led by the US National Institutes of Health and Department of Energy) listed addressing the Ethical, Legal and Social Issues (ELSI) among its goals, alongside identifying genes, sequencing the DNA, storing data, improving analysis tools and transferring technologies.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Gene Density Calculation.</b> Chromosome 1 contains approximately 2968 genes over 249 million base pairs. The Y chromosome contains approximately 231 genes over 57 million base pairs. Calculate the gene density (genes per million bp) for each chromosome and comment on the difference.`,
        steps: [
          `Chromosome 1: ${fr('2968', '249')} ≈ 11.9 genes per million bp. Y chromosome: ${fr('231', '57')} ≈ 4.1 genes per million bp. Chromosome 1 has about 2.9 times the gene density of the Y chromosome: it is only ~4.4× larger in bp but carries ~13× as many genes. Both chromosomes are mostly non-coding, but the Y chromosome is especially gene-sparse per unit length.`,
        ],
        ans: `Chromosome 1 ≈ 11.9 genes/Mb; Y chromosome ≈ 4.1 genes/Mb; gene density varies greatly between chromosomes independent of size.`,
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: `<b>ELSI and HGP Goals.</b> NCERT lists six goals of the Human Genome Project. Name them, and state why the Ethical, Legal and Social Issues (ELSI) goal was considered essential from the outset.`,
        steps: [
          `The goals are: (1) identify all the genes in human DNA; (2) determine the sequence of the ~3 billion base pairs; (3) store this information in databases; (4) improve tools for data analysis; (5) transfer related technologies to other sectors, such as industry; (6) address the Ethical, Legal and Social Issues (ELSI) arising from the project. ELSI was essential because genomic information raises immediate questions about genetic privacy, discrimination by insurers and employers, gene therapy ethics, consent for genetic testing, and intellectual property rights (patenting of genes): issues that could harm individuals and society if left unaddressed alongside the science.`,
        ],
        ans: `Six goals: identify genes, sequence 3 billion bp, store data in databases, improve analysis tools, transfer technologies, and address ELSI. ELSI addresses privacy, discrimination, consent, therapy ethics and gene patenting.`,
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Non-Coding DNA Fraction.</b> If the human genome has ~30,000 protein-coding genes with an average gene length of 27,000 bp (including introns and regulatory regions), and the total genome is ~3 billion bp, what fraction of the genome lies within genes, and what fraction is coding (exons)? Comment on the implication. (The book’s round figures; NCERT gives about 3000 bases for an average gene and 3164.7 million base pairs for the genome, and current counts of protein-coding genes are nearer 20,000. Use the NCERT figures when a question quotes them.)`,
        steps: [
          `Total gene length (exons + introns): 30,000 genes × 27,000 bp = 8.1 × 10<sup>8</sup> bp. Fraction of genome: ${fr('8.1 × 10<sup>8</sup>', '3 × 10<sup>9</sup>')} ≈ 0.27, so about 27% of the genome lies within genes. However, if the average coding exon length is only ~1500 bp per gene (exons only), total exons = 30,000 × 1500 = 4.5 × 10<sup>7</sup> bp, which is only 1.5% of the genome. This means ~98.5% of the genome is non-coding or intronic, confirming that most human DNA does not code for protein.`,
        ],
        ans: `~27% of the genome lies within genes, but only ~1.5% is coding sequence (exons); ~98.5% is non-coding, so most human DNA does not code for protein.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CUET] What is meant by gene density? If chromosome 21 has 281 genes over 48 million bp, calculate its gene density per million bp. (The book’s illustrative figures.)`,
            a: `Gene density = genes per unit length. Chromosome 21: ${fr('281', '48')} ≈ 5.9 genes per million bp.`,
          },
          {
            q: `[CBSE] State two reasons why the human genome contains far more non-coding DNA than coding DNA.`,
            a: `Introns within genes (can be large); repetitive transposable elements and satellite DNA accumulated over evolutionary time; regulatory sequences occupy large stretches; many pseudogenes (non-functional gene copies).`,
          },
          {
            q: `[NEET] How did Expressed Sequence Tags (ESTs) contribute to gene identification during HGP?`,
            a: `ESTs are short DNA sequences from expressed (transcribed) regions of the genome. By sequencing thousands of ESTs from different tissues, researchers identified which genomic regions were transcribed into RNA, providing direct evidence for gene location and alternative splicing patterns.`,
          },
          {
            q: `[NEET] Name two model organisms whose genomes were also sequenced as part of HGP and state why they were chosen.`,
            a: `<i>E. coli</i> (~4.6 Mb), yeast (<i>Saccharomyces cerevisiae</i>), roundworm (<i>Caenorhabditis elegans</i>), and mouse. Chosen because they represent key evolutionary branches, have well-characterised genetics, and allow comparative genomics to identify conserved (functionally important) genes.`,
          },
          {
            q: `[NEET High-Difficulty] The average human gene spans ~27,000 bp but encodes only ~1500 bp of mRNA. Calculate what percentage of a typical gene’s sequence is intronic/intergenic, and explain why a large genome does not necessarily mean a large number of genes.`,
            a: `Intronic/intergenic fraction: ${fr('27,000 − 1500', '27,000')} × 100 ≈ 94.4%. A large genome (more repetitive DNA, larger chromosomes) does not imply more genes: gene number is determined by coding capacity, not total bp. Humans have large chromosomes primarily due to non-coding repeat sequences, not more genes.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 282–284 ─────────────────────────
  {
    n: 'E',
    title: 'DNA Fingerprinting: Band Algebra and Forensic Interpretation',
    extra: true,
    kalam: 'Each individual has two alleles at each VNTR locus (one from each parent).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 06 describes the DNA fingerprinting procedure and has one worked question that matches swapped children to their parents, but it does not ask students to work through paternity band matching band by band, to distinguish autosomal from Y-STR analysis, or to calculate the probability of a random match. These go beyond NCERT; they are practice in the reasoning that NEET questions on this topic test, not syllabus items.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>VNTR inheritance: the band algebra.</b> Each individual has two alleles at each VNTR locus (one from each parent). A child’s band pattern must contain one band from each parent at each locus. This is testable as a “match the child to its parents” problem: at each locus, set aside the band the child could have received from the mother; the child’s other band must be in the alleged father’s profile. If it is not (apart from a rare mutation), the alleged father is excluded.`,
      },
      {
        t: 'p',
        html: `<b>Autosomal vs Y-STR analysis.</b> Autosomal VNTRs/STRs are found on non-sex chromosomes and are inherited from both parents. Y-STRs are on the Y chromosome and are inherited only from father to all male offspring, used in patrilineal lineage tracing. X-STRs are on the X chromosome and have different inheritance patterns for males and females.`,
      },
      {
        t: 'p',
        html: `<b>Probability of a random match.</b> If the probability of a random individual matching a VNTR profile at one locus is <i>P</i>, and <i>n</i> independent loci are examined, the combined probability of a random match is <i>P</i><sup><i>n</i></sup>. For 5 independent loci each with <i>P</i> = ${fr('1', '100')}, the combined probability is (${fr('1', '100')})<sup>5</sup> = ${fr('1', '10<sup>10</sup>')}: very small, so a match at many independent loci is strong evidence, though no match probability is exactly zero.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: `<b>Paternity Band Matching.</b> A child’s DNA fingerprint shows bands at 4 kb and 7 kb at the D1S80 locus (schematic band sizes). The child’s mother shows bands at 7 kb and 8 kb, and the alleged father shows bands at 4 kb and 9 kb. Can this man be excluded as the biological father?`,
        steps: [
          `The child must inherit one allele from each biological parent. At D1S80 the child has 4 kb and 7 kb. The mother has 7 kb, so she can have given the 7 kb band. The child’s other band, 4 kb, must then come from the father, and the alleged father has a 4 kb band. Every band of the child is accounted for (4 kb from the father, 7 kb from the mother), so the alleged father cannot be excluded.`,
        ],
        ans: `The man cannot be excluded: his 4 kb band matches the child’s paternal band; the 7 kb band comes from the mother. (Matching bands show he could be the father; they do not prove it.)`,
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: `<b>Random Match Probability.</b> At a single VNTR locus, the probability that two unrelated individuals share the same band pattern is ${fr('1', '50')}. If a forensic analyst examines 6 such independent loci, what is the probability that a random individual would match the crime-scene DNA profile at all 6 loci?`,
        steps: [
          `Probability of a match at all 6 independent loci: <i>P</i> = (${fr('1', '50')})<sup>6</sup> = ${fr('1', '50<sup>6</sup>')} = ${fr('1', '1.56 × 10<sup>10</sup>')} ≈ 6.4 × 10<sup>−11</sup>. Expressed differently: approximately 1 in 15.6 billion. This is about twice the human population (~8 billion), so a randomly chosen person is very unlikely to match at all 6 loci, although among all 8 billion people about one half of a match would be expected, so six loci alone could not prove identity.`,
        ],
        ans: `Probability = (${fr('1', '50')})<sup>6</sup> ≈ 6.4 × 10<sup>−11</sup> (about 1 in 15.6 billion).`,
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: `<b>Y-STR Inheritance Pattern.</b> A male homicide suspect has the Y-STR profile: DYS19 (12 repeats), DYS389I (11 repeats), DYS389II (28 repeats). Semen from the crime scene yields the same three Y-STR values. (i) What does this evidence tell you about the suspect’s relation to the perpetrator? (ii) Could this evidence distinguish between the suspect and his paternal uncle?`,
        steps: [
          `(i) Y-STRs are inherited unchanged (apart from rare mutations) from father to son along the male lineage. The matching profile is consistent with the perpetrator being on the suspect’s paternal line: the suspect himself or a male relative on his direct paternal line. With only three loci it does not prove this, since unrelated men can share common Y-STR values.`,
          `(ii) A paternal uncle shares the same father (the suspect’s grandfather), so he carries the same Y chromosome and would also show the same Y-STR values. Y-STR analysis cannot distinguish between the suspect and his paternal uncle, paternal grandfather, or any male-line descendant of the same paternal grandfather. Distinguishing between them would require autosomal STRs or SNP analysis.`,
        ],
        ans: `(i) Consistent with a shared paternal line (not proof); (ii) Cannot distinguish from paternal uncle: Y-STRs are identical within a patrilineage (apart from rare mutations).`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CUET] At a VNTR locus, a child has bands of 3 kb and 7 kb. The mother’s profile shows 3 kb and 5 kb bands. What band must the biological father contribute?`,
            a: `The father must contribute the 7 kb band (the child has 3 and 7 kb; the mother has 3 and 5 kb; the child’s 3 kb band can come from the mother, so the 7 kb band must be paternal).`,
          },
          {
            q: `[CBSE] State one difference between autosomal STR analysis and Y-STR analysis in DNA fingerprinting.`,
            a: `Autosomal STRs are inherited from both parents and can distinguish almost any two individuals; Y-STRs are inherited only from father to son and are identical throughout a patrilineal line (apart from rare mutations), so they cannot distinguish male relatives on the father’s side.`,
          },
          {
            q: `[NEET] If the probability of a random match at one VNTR locus is ${fr('1', '20')}, what is the combined probability of a random match at 4 independent loci?`,
            a: `Combined probability = (${fr('1', '20')})<sup>4</sup> = ${fr('1', '160,000')} = 6.25 × 10<sup>−6</sup> (about 1 in 160,000).`,
          },
          {
            q: `[NEET] Why can DNA fingerprinting not definitively prove that a specific individual was present at a crime scene, but only that their DNA profile matches?`,
            a: `DNA fingerprinting shows that DNA found at the scene matches the person’s profile; it does not show when or how that DNA got there (it may have been deposited earlier or transferred by contact). Also, a random match, though extremely unlikely when many loci are tested, is never exactly zero, and identical twins share the same profile.`,
          },
          {
            q: `[NEET High-Difficulty] Two children, A and B, are suspected to have been swapped between families X and Y. Child A was given to Family X and child B to Family Y. Family X parents show autosomal VNTR bands: mother (3, 6 kb); father (4, 8 kb). Family Y parents show: mother (2, 7 kb); father (5, 9 kb). Child A shows (2, 5 kb). Child B shows (3, 8 kb). Were the children swapped? Justify your answer.`,
            a: `Each child carries one band from the mother and one from the father. Child A (2, 5 kb): 2 kb can come from Family Y’s mother (2, 7) and 5 kb from Family Y’s father (5, 9), whereas Family X’s parents (3, 6 and 4, 8) have neither band. So child A belongs to Family Y. Child B (3, 8 kb): 3 kb comes from Family X’s mother (3, 6) and 8 kb from Family X’s father (4, 8); Family Y’s parents have neither band. So child B belongs to Family X. Conclusion: A is Family Y’s child and B is Family X’s child, so the children were swapped.`,
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 284–285 ─────────────────────────
  {
    n: 'F',
    title: 'Answer Key Summary',
    extra: true,
    kalam: '5 introns: 10 bonds broken, 10 formed (net change zero).',
    blocks: [
      { t: 'part', title: 'Additional topic A' },
      {
        t: 'p',
        html: `1. Because polymerase extends 5′→3′ only; on the lagging-strand template the polymerase would need to extend 3′→5′, which no DNA polymerase can do (it adds nucleotides only to a free 3′-OH). The enzyme’s unidirectional nature is the constraint.<br>2. In <i>E. coli</i>: (a) DNA polymerase I (5′→3′ exonuclease); (b) DNA polymerase I (polymerisation); (c) DNA ligase.<br>3. Eukaryotic chromosomes are enormous (a human cell has many thousands of origins); multiple origins allow parallel replication forks to finish in S-phase; <i>E. coli</i> has one origin and a small chromosome, so one origin suffices.<br>4. Leading-strand template (3′→5′ toward the fork): polymerase extends 5′→3′ continuously, moving with the fork. On the lagging-strand template, polymerase extends 5′→3′ away from the fork.<br>5. 1 phosphodiester bond; ~11 high-energy bonds (on the question’s assumption: 10 ATP for gap-filling, 1 for ligation).`,
      },
      { t: 'part', title: 'Additional topic B' },
      {
        t: 'p',
        html: `1. Cap addition → intron removal (may begin during transcription) → transcription termination and 3′ cleavage → polyadenylation (splicing of the last introns can finish after termination).<br>2. 7-methylguanosine linked 5′–5′ to the first nucleotide; unusual because standard RNA bonds are 3′–5′.<br>3. U1 binds the 5′ splice site (GU); U6 is the catalytic snRNP that performs the transesterification.<br>4. 5 introns: 10 bonds broken, 10 formed (net change zero).<br>5. The 2′-OH of the branch-point A attacks the 5′ splice site (GU), forming the lariat loop that aligns the exons for the second transesterification and ensures precise joining.`,
      },
      { t: 'part', title: 'Additional topic C' },
      {
        t: 'p',
        html: `1. Inducible: default OFF, substrate (lactose) induces; repressible: default ON, end product (tryptophan) represses.<br>2. Lac repressor is active alone; <i>trp</i> repressor requires tryptophan as corepressor.<br>3. 1500 nucleotides of sense codons (1503 with the stop codon).<br>4. Lactose inactivates the pre-existing active repressor; tryptophan activates the pre-existing inactive repressor.<br>5. (a) Constitutive (expressed without lactose, though at a reduced level in glucose because of catabolite repression): operator never occupied; (b) Constitutive: mutated operator never binds repressor regardless of lactose.`,
      },
      { t: 'part', title: 'Additional topic D' },
      {
        t: 'p',
        html: `1. ~5.9 genes per million bp.<br>2. Large introns within genes; repetitive transposable-element sequences.<br>3. ESTs are short sequences from transcribed mRNA, used as molecular tags to identify which genomic regions are genes.<br>4. <i>E. coli</i>, yeast (<i>Saccharomyces cerevisiae</i>), roundworm (<i>C. elegans</i>), mouse, representing major evolutionary groups for comparative genomics.<br>5. ~94.4% intronic/intergenic; large genome size reflects repetitive non-coding DNA, not more genes.`,
      },
      { t: 'part', title: 'Additional topic E' },
      {
        t: 'p',
        html: `1. 7 kb.<br>2. Autosomal STRs inherited from both parents, almost unique to each individual; Y-STRs inherited only through the paternal line and identical among male relatives (apart from rare mutations).<br>3. (${fr('1', '20')})<sup>4</sup> = ${fr('1', '160,000')}.<br>4. A profile match shows that the DNA is consistent with the person’s, not when or how it reached the scene (it may have been deposited earlier or transferred); a random match is extremely unlikely with many loci but never exactly zero, and identical twins share a profile.<br>5. Child A (2, 5 kb) matches Family Y (mother 2, 7; father 5, 9); Child B (3, 8 kb) matches Family X (mother 3, 6; father 4, 8). A was given to X and B to Y, so the children were swapped.`,
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 285–293 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Treat these weightings as rough guidance, not as exact predictions.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `In the book’s estimate from past papers, not official figures, this chapter regularly returns questions drawn from Fact/Definition, Statement, Assertion–Reason, Matching and Diagram formats. Here is how the topics rank, in rough descending order of emphasis:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Typical emphasis in NEET (the book’s estimate)'],
        rows: [
          ['DNA Structure & Replication', 'Heaviest: usually several questions a year'],
          ['Transcription & Genetic Code', 'Heavy: a close second'],
          ['Genetic Material Experiments', 'Regular: one or two questions a year'],
          ['<i>lac</i> Operon', 'Regular: one or two questions a year'],
          ['Genomics & DNA Fingerprinting', 'Regular: one or two questions a year'],
          ['Translation', 'Lighter, but reliable'],
          ['Chromatin/Nucleosome', 'Lighter: about one question a year'],
        ],
      },
      {
        t: 'p',
        html: `<b>What this means for a student:</b> DNA structure, replication mechanics and the genetic-material experiments are the most heavily tested combination in any given year ${EST}. Transcription and the genetic code run a close second. Translation and genomics are reliable but lighter. If study time is finite, the replication fork (leading vs. lagging), the Meselson–Stahl logic, the three-experiment ladder (Griffith → Avery → Hershey–Chase), the σ/ρ roles, and the <i>lac</i> operon gene–product pairings are the highest-yield targets.<br><br>No topic of this chapter can be safely skipped: every section has appeared in NEET papers ${EST}. Treat these weightings as rough guidance, not as exact predictions.`,
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: `NEET repeats five question shapes so faithfully that each has a predictable crack ${EST}.`,
      },

      { t: 'p', html: `<b>1. The Chargaff Percentage Calculation</b>` },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A question gives one base percentage (e.g. cytosine = 20 %) and asks for another (adenine = ?). The answer runs through A = T and G = C in double-stranded DNA.<br><b>The approach that cracks it:</b> Two equations, two unknowns. If C = 20 %, then G = 20 % and G + C = 40 %. Therefore A + T = 60 %, and because A = T, each is 30 %.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `A double-stranded DNA sample is found to contain 20 % cytosine. What percentage of adenine does it contain?`,
        steps: [`<b>Solution.</b> G = C = 20 %; G + C = 40 %; therefore A + T = 60 %. Since A = T in double-stranded DNA,`],
        ans: `A = 30 %`,
      },

      { t: 'p', html: `<b>2. The Assertion–Reason on the Leading/Lagging Strand</b>` },
      {
        t: 'p',
        html: `<b>What it looks like:</b> One statement describes discontinuous synthesis on the lagging strand; the reason cites the 5′ → 3′ polymerase directionality and antiparallel strands. Both are true, and the reason is the direct cause: option (a).<br><b>The approach that cracks it:</b> The test is whether you can connect the two facts, not merely list them. Every student knows both statements; the toppling point is linking them.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `<b>Assertion (A):</b> Replication of the lagging strand is discontinuous.<br><b>Reason (R):</b> DNA polymerase synthesises new DNA only in the 5′ → 3′ direction while the two template strands are antiparallel.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.`,
        steps: [
          `<b>Solution.</b> Both A and R are true. The polymerase’s one-way action, together with the antiparallel templates, forces the lagging strand to be built away from the fork in short fragments while the leading strand runs continuously in the same direction as the fork: this is exactly why lagging-strand synthesis is discontinuous. R is the correct explanation of A.`,
        ],
        ans: `(a)`,
      },

      { t: 'p', html: `<b>3. The Experiment Identification (Who Did What)</b>` },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A scientist or an experimental result is named, and the question asks what was proved or who did it. The trap is crediting the wrong experimenter or the wrong conclusion.<br><b>The approach that cracks it:</b> Lock the three-step ladder: <b>Griffith finds</b> the transforming principle → <b>Avery names</b> it as DNA → <b>Hershey–Chase confirms</b> it with bacteriophages. Then add Watson & Crick for structure, Jacob & Monod for the <i>lac</i> operon, and Alec Jeffreys for DNA fingerprinting.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `The scientists who biochemically characterised the transforming principle of Griffith’s experiment as DNA were:<br><b>(a)</b> Hershey and Chase<br><b>(b)</b> Griffith and Avery<br><b>(c)</b> Avery, MacLeod and McCarty<br><b>(d)</b> Watson and Crick`,
        steps: [
          `<b>Solution.</b> Avery, MacLeod & McCarty (1944) purified the transforming principle and used enzyme digestion to prove it was DNA. Griffith discovered the principle; Hershey–Chase confirmed it with phages; Watson & Crick described its structure.`,
        ],
        ans: `(c)`,
      },

      { t: 'p', html: `<b>4. The “Which is NOT Correct” Statement Battery</b>` },
      {
        t: 'p',
        html: `<b>What it looks like:</b> Four statements are given; one is false. Students must identify the incorrect one. The trap is reading the correct statements and missing the subtle error in the fourth.<br><b>The approach that cracks it:</b> In this chapter the most common wrong statement in such batteries concerns (a) the directionality of DNA polymerase, (b) whether introns appear in mature RNA, or (c) whether RNA is stable. These are the three most common traps in incorrect-statement questions ${EST}.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `Which statement is <b>incorrect</b>?<br><b>(a)</b> In prokaryotes, the structural gene is polycistronic.<br><b>(b)</b> In eukaryotes, structural genes have interrupted coding sequences.<br><b>(c)</b> Eukaryotes have split gene arrangement.<br><b>(d)</b> Intervening sequences appear in mature RNA.`,
        steps: [`<b>Solution.</b> Introns (intervening sequences) are removed by splicing; they do not appear in mature mRNA. Statement (d) is false.`],
        ans: `(d)`,
      },

      { t: 'p', html: `<b>5. The Column-Matching on <i>lac</i> Operon Gene–Product</b>` },
      {
        t: 'p',
        html: `<b>What it looks like:</b> Column I lists the <i>i</i> gene, <i>z</i> gene, <i>y</i> gene, operator, promoter; Column II lists the repressor, β-galactosidase, permease, binding site for repressor, binding site for RNA polymerase. Only one option gives the correct combination.<br><b>The approach that cracks it:</b> Memorise one chain: <b><i>i</i> → repressor</b> (inhibitor); then the structural genes run <b><i>z</i> → β-galactosidase</b>, <b><i>y</i> → permease</b>, <b><i>a</i> → transacetylase</b>; the <b>operator</b> is the repressor’s landing pad; the <b>promoter</b> is where RNA polymerase binds.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: `Match the <i>lac</i> operon element with its correct function.<br>Column I: A. Operator site; B. Promoter site; C. Structural gene; D. Regulator gene<br>Column II: I. Binding site for RNA polymerase; II. Binding site for repressor molecule; III. Codes for enzyme protein; IV. Codes for repressor molecules<br><b>(a)</b> A–II; B–I; C–III; D–IV`,
        steps: [
          `<b>Solution.</b> A–II (operator binds repressor), B–I (promoter binds RNA polymerase), C–III (structural gene codes for an enzyme), D–IV (regulator gene codes for repressor).`,
        ],
        ans: `(a)`,
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: `The following specific confusions are built into the distractors with enough regularity that they deserve their own warning label ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What the question does', 'The correct fact'],
        rows: [
          [
            '<b>“Chargaff applies to RNA”</b>',
            'Offers A = U as a Chargaff-style rule for RNA',
            'Chargaff’s rules (A = T, G = C) hold for double-stranded DNA. Single-stranded nucleic acids (single-stranded DNA, most RNA) do not obey them; only a double-stranded RNA pairs A with U.',
          ],
          [
            '<b>DNA polymerase direction</b>',
            'Offers “3′ → 5′ synthesis” as a correct statement',
            'DNA polymerase synthesises only 5′ → 3′; the template is read 3′ → 5′ but the new strand grows the other way.',
          ],
          [
            '<b>Degenerate and unambiguous are not opposites</b>',
            'Offers “the code is ambiguous” as a property of the genetic code',
            'Degenerate = many codons → one amino acid; unambiguous = each codon → only one amino acid. They are different properties and the genetic code has both.',
          ],
          [
            '<b>σ vs. ρ (sigma vs. rho)</b>',
            'Offers rho as the initiation factor',
            'In bacteria σ (sigma) helps start transcription and ρ (rho) helps end it at many terminators.',
          ],
          [
            '<b>Introns appear in mature RNA</b>',
            'States that intervening sequences are present in processed RNA',
            'Introns are removed by splicing; only exons remain in mature mRNA.',
          ],
          [
            '<b>RNA is stable</b>',
            'Calls RNA a stable genetic material',
            'RNA’s 2′-OH makes it chemically labile and prone to hydrolysis; this is thought to be why DNA, with no 2′-OH, became the stable archive.',
          ],
          [
            '<b>Lalji Singh invented DNA fingerprinting</b>',
            'Pairs his name with the discovery',
            'Alec Jeffreys (UK, 1984) discovered it; Lalji Singh pioneered it in India.',
          ],
          [
            '<b>3 billion = 30,000</b>',
            'Uses “3 billion” for gene count or “30,000” for base pairs',
            'Human genome ≈ 3 billion base pairs (3164.7 million) but ≈ 30,000 genes by the older estimate used in NCERT.',
          ],
          [
            '<b>Permease codes for β-galactosidase</b>',
            'Reverses the <i>z</i>/<i>y</i> gene functions',
            '<i>z</i> → β-galactosidase; <i>y</i> → permease.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: `A graded practice set, from recall to evaluation.` },
      {
        t: 'practice',
        items: [
          {
            q: `[Recall (Easy)] The two strands of DNA are held together by:<br><b>(a)</b> peptide bonds<br><b>(b)</b> phosphodiester bonds<br><b>(c)</b> hydrogen bonds<br><b>(d)</b> S–S bonds`,
            a: `(c). Hydrogen bonds between A=T (2 bonds) and G≡C (3 bonds) hold the two strands together. Phosphodiester bonds link nucleotides within a strand; peptide bonds link amino acids in proteins.`,
          },
          {
            q: `[Recall (Easy)] In some viruses, RNA is present instead of DNA. This indicates that:<br><b>(a)</b> their nucleic acid must combine with host DNA before replication<br><b>(b)</b> they cannot replicate<br><b>(c)</b> there is no hereditary information<br><b>(d)</b> RNA can act to transfer heredity`,
            a: `(d). RNA viruses such as TMV and retroviruses demonstrate that RNA can carry and transmit genetic information, establishing that DNA is not the only possible genetic material.`,
          },
          {
            q: `[Application (Moderate)] If a double-stranded DNA molecule contains 30 % adenine, what percentage of cytosine does it contain?<br><b>(a)</b> 20 %<br><b>(b)</b> 30 %<br><b>(c)</b> 40 %<br><b>(d)</b> 60 %`,
            a: `(a). A = T = 30 %; therefore A + T = 60 %. G + C = 40 %. Since G = C, cytosine = 20 %.`,
          },
          {
            q: `[Application (Moderate)] Which of the following is the correct statement about DNA replication?<br><b>(a)</b> DNA polymerase synthesises DNA in the 3′ → 5′ direction.<br><b>(b)</b> The lagging strand is synthesised continuously.<br><b>(c)</b> DNA replication is semi-conservative.<br><b>(d)</b> No RNA primer is needed for either strand.`,
            a: `(c). DNA replication is semi-conservative (Meselson–Stahl, 1958). DNA polymerase works 5′ → 3′ only; the lagging strand is discontinuous; the RNA primer is needed for both strands (the leading strand needs one initial primer, the lagging strand one per fragment), so (d) is false.`,
          },
          {
            q: `[Application (Moderate)] The genetic code is:<br><b>(a)</b> triplet, universal, ambiguous, degenerate<br><b>(b)</b> triplet, universal, non-ambiguous, non-degenerate<br><b>(c)</b> triplet, universal, non-ambiguous, degenerate<br><b>(d)</b> triplet, universal, ambiguous, non-degenerate`,
            a: `(c). The code is triplet (3 bases = 1 codon), universal (same in almost all organisms), non-ambiguous (one codon = one amino acid), and degenerate (most amino acids have more than one codon).`,
          },
          {
            q: `[Analysis (Moderate–Hard)] In an <i>E. coli</i> culture, the <i>lac</i> operon is placed in a medium containing lactose but no glucose. Which of the following statements correctly describes the state of the operon?<br><b>(a)</b> The repressor is bound to the operator; transcription is off.<br><b>(b)</b> Lactose binds the repressor, causing it to fall off the operator; transcription occurs.<br><b>(c)</b> The operon is transcribed constitutively because glucose is absent.<br><b>(d)</b> RNA polymerase cannot bind the promoter because lactose is present.`,
            a: `(b). Lactose (as allolactose) is the inducer; it binds the repressor, inactivates it, and removes it from the operator. RNA polymerase is then free to transcribe the <i>z</i>, <i>y</i> and <i>a</i> genes. Glucose acts through a separate, positive-regulation signal (cAMP–CAP): with no glucose, CAP activation is high and transcription is strong; glucose lowers it (catabolite repression) without blocking induction.`,
          },
          {
            q: `[Analysis (Moderate–Hard)] A segment of mRNA reads 5′–AUG CCU UAA–3′. How many amino acids will the resulting polypeptide contain?<br><b>(a)</b> 1<br><b>(b)</b> 2<br><b>(c)</b> 3<br><b>(d)</b> 4`,
            a: `(b). The three codons are AUG (Met, start), CCU (Pro), and UAA (stop). Only two codons code for amino acids; the stop codon terminates synthesis without adding any residue. Total = 2 amino acids.`,
          },
          {
            q: `[Analysis (Hard)] During the Meselson–Stahl experiment, bacteria were grown in <sup>15</sup>N medium for several generations and then shifted to <sup>14</sup>N medium. After two generations in <sup>14</sup>N medium, the DNA bands observed in CsCl gradient centrifugation would be:<br><b>(a)</b> one heavy band only<br><b>(b)</b> one light band and one hybrid band in equal proportion<br><b>(c)</b> one light band and one hybrid band in a 3 ∶ 1 ratio<br><b>(d)</b> two light bands`,
            a: `(b). After one generation in <sup>14</sup>N medium all DNA is hybrid (each duplex has one <sup>15</sup>N strand and one <sup>14</sup>N strand). In the second generation the two hybrid duplexes each give one hybrid and one fully light duplex, so there are 4 duplexes: 2 hybrid and 2 fully light, a 1 ∶ 1 ratio. (Option (c) describes the third generation: 8 duplexes, of which 2 are hybrid and 6 are fully light, i.e. hybrid ∶ light = 1 ∶ 3.)`,
          },
          {
            q: `[Analysis (Hard)] A student states: “The DNA polymerase enzyme can add nucleotides in both the 5′ → 3′ and the 3′ → 5′ directions during replication.” Which of the following provides the correct rebuttal?<br><b>(a)</b> DNA polymerase can add nucleotides in the 3′ → 5′ direction but only on the lagging strand.<br><b>(b)</b> DNA polymerase can add nucleotides only in the 5′ → 3′ direction; the 3′ → 5′ activity is a separate enzymatic function (proof-reading).<br><b>(c)</b> DNA polymerase has no directional preference and synthesises both strands simultaneously.<br><b>(d)</b> The student’s statement is correct: both directions are used equally.`,
            a: `(b). The polymerase’s polymerisation function works 5′ → 3′ only. Its 3′ → 5′ exonuclease activity is a separate proofreading function that removes misincorporated nucleotides; it does not build the chain. No matter which strand or which question format, the chain extends 5′ → 3′.`,
          },
          {
            q: `[Synthesis (Hard)] A scientist claims that because satellite DNA does not code for proteins, it cannot be useful for DNA fingerprinting. Evaluate this claim.`,
            a: `The claim is incorrect. DNA fingerprinting deliberately targets non-coding satellite and minisatellite (VNTR) DNA precisely because coding regions are much less variable between individuals and are therefore of limited use for discrimination. VNTR regions show a high degree of polymorphism (different individuals have different numbers of tandem repeats), making almost every person’s band pattern different (identical twins excepted). The lack of coding function is the reason these regions are informative, not a limitation.`,
          },
          {
            q: `[Application (Moderate–Hard)] At a replication fork, the two new strands are labelled A and B. Strand A is synthesised continuously, whereas strand B is synthesised as short Okazaki fragments. Which statement is correct?<br><b>(a)</b> A = lagging strand; B = leading strand<br><b>(b)</b> A = leading strand; B = lagging strand<br><b>(c)</b> Both A and B are synthesised continuously<br><b>(d)</b> Neither strand requires DNA ligase`,
            a: `(b). The strand synthesised continuously (A) is the leading strand; the strand synthesised in discontinuous Okazaki fragments (B) is the lagging strand. The lagging strand requires DNA ligase to seal the nicks between fragments.`,
          },
          {
            q: `[Evaluation (Hard)] <b>Assertion (A):</b> In the Hershey–Chase experiment, the radioactivity from <sup>35</sup>S-labelled phage remained in the supernatant after blending.<br><b>Reason (R):</b> <sup>35</sup>S labels the protein coat, which does not enter the bacterial cell during infection.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.`,
            a: `(a). Both A and R are true, and R correctly explains A. The experiment’s design exploits the fact that protein contains sulfur (S) but not phosphorus (P), while DNA contains phosphorus but not sulfur. The <sup>35</sup>S label therefore tracks the protein coat; its presence in the supernatant confirms that the protein stays outside the cell. (In the real experiment most of the <sup>35</sup>S, about 80 per cent, came off in the supernatant and a little stayed with the cells; the book’s schematic shows none inside.)`,
          },
        ],
      },

      { t: 'part', title: 'Two Skills Worth Extra Practice' },
      {
        t: 'p',
        html: `First, practise matching the three eukaryotic RNA polymerases to their products, and σ and ρ to their roles. Questions that pair a polymerase or factor with its job are common ${EST}, and the pairing has to be recalled instantly. Second, practise Meselson–Stahl predictions beyond the first two generations. After three generations in <sup>14</sup>N medium there are 8 duplexes, of which 2 are hybrid and 6 are fully light (hybrid ∶ light = 2 ∶ 6 = 1 ∶ 3), and harder questions ask exactly this.`,
      },
    ],
  },
];
