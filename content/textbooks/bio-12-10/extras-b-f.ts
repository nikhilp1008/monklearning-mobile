import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 10 (Biotechnology and its Applications), Additional topics B to F, word for word from the
 * Class 12 Biology Master Reference (book pp. 577 to 599): B "How Transgenic Animals Are Produced: Three Methods"
 * (opens low on p. 577 after Addendum A's practice answers; ends p. 580 top), C "PCR: The Three-Step Thermal Cycling
 * Recipe" (p. 580 to p. 583), D "Gene Therapy Vectors and the Ex Vivo versus In Vivo Distinction" (p. 583 to p. 586),
 * E "Biopiracy: The Legal Framework, Specific Patents, and India’s Defences" (p. 586 to p. 590) and F "What NEET
 * Actually Asks" (the book's "Addendum P", p. 590 to p. 599). Page 600 is the next chapter.
 *
 * Topic indexes (position in the chapter's topics array): Topics 01 to 06 = 0 to 5, Additional A = 6, so B = 7,
 * C = 8, D = 9, E = 10 and F (the last) = 11. No figure occurs in these pages (only ruled table lines). The book's
 * example headings ("Example B.1 - [NEET] Identifying the Production Method") become the example's tag (the bracket)
 * and a bold lead on its question. The book's own mistakes are copied as printed and listed in the writer's report.
 */
const EST = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 577–580 ─────────────────────────
  {
    n: 'B',
    title: 'How Transgenic Animals Are Produced: Three Methods',
    extra: true,
    kalam: 'Transgenic animals are made by introducing a foreign gene into an embryo or its cells; there are three standard techniques.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Transgenic animals are made by introducing a foreign gene into an embryo or its cells; there are three standard techniques. NEET and CUET regularly ask: “Which method is used to produce most transgenic mice?” or “Name the technique used to produce Rosie the transgenic cow.” These are direct factual questions ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'About 95% of transgenic animals are mice, and Rosie (1997), described in NCERT as the first transgenic cow, produced milk containing human α-lactalbumin. Three methods are used to make such animals, as described in standard examination material:',
      },
      {
        t: 'p',
        html: '<b>Method 1: Microinjection into the pronucleus (the most common method for making transgenic mice).</b><br>A fertilised egg (zygote) is recovered from a female mouse shortly after mating. The male pronucleus (the sperm nucleus, larger than the female pronucleus) is visible under a microscope. Using a fine glass micropipette, a solution containing the foreign DNA construct is injected directly into the male pronucleus. The zygote is then transferred into a pseudopregnant surrogate mother. If integration into the genome occurs (the DNA may integrate randomly), the offspring carries the transgene in every cell (when integration happens at the one-cell stage), including the germ cells, and can pass it to the next generation.<br><b>Key features:</b> random integration into the host genome; variable expression levels depending on integration site; approximately 10–30% of offspring typically carry the transgene. This is the method used to produce the majority of transgenic mice, including disease-model mice.',
      },
      {
        t: 'p',
        html: '<b>Method 2: Retroviral infection of blastocysts.</b><br>A blastocyst (an early embryo of some tens of cells with an inner cell mass) is removed from a donor female. Cultured blastocyst cells (embryonic stem cells or inner cell mass cells) are infected with a recombinant retrovirus carrying the transgene. The infected cells are reintroduced into the blastocyst, which is implanted into a surrogate mother. The resulting chimera contains some cells derived from the infected cells and some from the uninfected host embryo. If the infected cells contribute to the germ line, the transgene can be transmitted to offspring.<br><b>Key features:</b> the provirus integrates at random sites in the host genome (it is not targeted); the resulting animals are chimeric (mosaic); lower efficiency than pronuclear injection; used less frequently now.',
      },
      {
        t: 'p',
        html: '<b>Method 3: Embryonic stem cell-mediated gene transfer.</b><br>Embryonic stem cells (ES cells) are cultured from the inner cell mass of a blastocyst. A transgene is introduced into these ES cells in culture, typically by electroporation or using a viral vector. The modified ES cells are screened to confirm stable integration of the transgene. These corrected ES cells are then injected into a host blastocyst, which is implanted into a surrogate mother. The resulting chimera contains a mixture of host-derived and donor-derived cells. If the modified ES cells populate the germ line, the transgene passes to subsequent generations.<br><b>Key features:</b> allows precise targeting of the transgene to a specific genomic location (homologous recombination), enabling knock-out and knock-in strategies; technically demanding but highly controlled. This is the method of choice when a researcher wants to replace (knock out) a specific endogenous gene with a modified version.',
      },
      {
        t: 'table',
        title: 'Summary comparison',
        head: ['Feature', 'Pronuclear microinjection', 'Retroviral infection', 'ES cell-mediated'],
        rows: [
          ['Most common use', 'Most transgenic mice', 'Older method, less common', 'Knock-out/knock-in mice'],
          ['Stage of embryo', 'Zygote (fertilised egg)', 'Blastocyst', 'ES cells cultured from blastocyst'],
          ['Integration site', 'Random', 'Random (not targeted)', 'Targeted by homologous recombination'],
          ['Offspring carrying the transgene', 'About 10–30% (varies with integration site)', 'Chimera → depends on contribution', 'High if ES cells populate germ line'],
        ],
      },
      {
        t: 'p',
        html: '<b>Rosie the cow (1997):</b> produced by microinjection of the human α-lactalbumin gene into the pronucleus of a fertilised cow embryo, followed by embryo transfer. (The book gives pronuclear microinjection; NCERT does not name the method.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Production Method.</b> Rosie, the first transgenic cow whose milk contained human α-lactalbumin, was produced in 1997. Which method was used to introduce the foreign gene, and at what stage of embryonic development?',
        steps: [
          'The foreign gene was introduced by microinjection into the male pronucleus of a fertilised egg (zygote), followed by embryo transfer to a surrogate mother.',
        ],
        ans: 'Pronuclear microinjection; at the zygote (fertilised egg) stage (the book gives pronuclear microinjection; NCERT does not name the method).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Comparing the Three Methods.</b> A researcher wants to produce a transgenic mouse in which a specific endogenous gene has been precisely replaced with a mutant version. Which method is most suitable and why?',
        steps: [
          'Precise replacement of a specific gene requires homologous recombination: the transgene must integrate at exactly the same chromosomal location as the target gene, replacing it. This is achieved by the embryonic stem (ES) cell-mediated method, where ES cells are cultured, the targeting construct is introduced, cells with the correct recombination event are selected, and these cells are injected into a blastocyst.',
        ],
        ans: 'Embryonic stem cell-mediated gene transfer; only this method allows targeted integration by homologous recombination.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Most Transgenic Animals Are Mice.</b> State three reasons why approximately 95% of all existing transgenic animals are mice, in the context of the production methods described.',
        steps: [
          'Mice are the dominant transgenic species because: (i) their small size makes them inexpensive to house and feed in large numbers, which is necessary because only ~10–30% of offspring from pronuclear microinjection carry the transgene, so many embryos must be processed; (ii) their short breeding cycle (gestation ~19–21 days) allows the transgene to be propagated through multiple generations quickly, enabling inheritance studies; (iii) their genome is well characterised, making them ideal for disease-model research.',
        ],
        ans: 'Small size and low cost (enabling large-scale production of microinjected embryos); short breeding cycle enabling rapid propagation; well-characterised genome.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three methods of producing transgenic animals and state which one is the most commonly used. What fraction of all transgenic animals are mice?',
            a: 'Pronuclear microinjection (the most commonly used), retroviral infection of blastocysts, and embryonic stem cell-mediated gene transfer. About 95% of all existing transgenic animals are mice.',
          },
          {
            q: '[CUET] Match the method in Column I with the embryo stage in Column II.<br>Column I: (P) Pronuclear microinjection, (Q) Retroviral infection, (R) ES cell-mediated<br>Column II: (i) Blastocyst, (ii) Zygote, (iii) Cultured cells from blastocyst inner cell mass',
            a: 'P–ii (zygote), Q–i (blastocyst), R–iii (cultured ES cells).',
          },
          {
            q: '[NEET] Which method is most suitable for producing a knock-out mouse, and why?',
            a: 'ES cell-mediated gene transfer; it allows targeted integration by homologous recombination, replacing the specific endogenous gene with the modified version.',
          },
          {
            q: '[NEET] State two advantages of the ES cell-mediated method over pronuclear microinjection.',
            a: 'ES cells allow (i) precise targeting by homologous recombination (not random integration), enabling knock-out and knock-in strategies; and (ii) clonal selection in culture before producing animals, so only correctly modified cells contribute to the chimera.',
          },
          {
            q: '[CUET] Rosie was produced in 1997. Name the foreign gene introduced and the method of introduction.',
            a: 'Human α-lactalbumin gene; introduced by pronuclear microinjection into a fertilised cow egg (the book gives pronuclear microinjection; NCERT does not name the method).',
          },
          {
            q: '[NEET High-Difficulty] A student says: “Retroviral infection of blastocysts always produces 100% transgenic offspring because the virus infects every cell.” Identify the error.',
            a: 'Error: retroviral infection produces chimaeras, not 100% transgenic offspring. The infected cells contribute to some but not all tissues of the resulting animal; only if the infected cells populate the germ line does the transgene transmit to the next generation. Many cells of the chimera remain uninfected.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 580–583 ─────────────────────────
  {
    n: 'C',
    title: 'PCR: The Three-Step Thermal Cycling Recipe',
    extra: true,
    kalam: 'PCR amplifies nucleic acids and is used to detect trace amounts of a pathogen.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `PCR (polymerase chain reaction) amplifies nucleic acids (RNA is first copied to DNA, as in RT-PCR) and is used to detect trace amounts of a pathogen. NEET and CUET also ask for the three thermal steps, the specific temperatures, and the reason a heat-stable polymerase is essential. These are recurring patterns ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What PCR does.</b> PCR is an in vitro technique that synthesises millions of copies of a specific DNA sequence using a pair of short synthetic oligonucleotide primers (typically 18–25 nucleotides long) that flank the target region. The product of each cycle doubles the number of target molecules, giving exponential amplification: after <i>n</i> cycles, the target is amplified 2<sup><i>n</i></sup>-fold.',
      },
      {
        t: 'p',
        html: '<b>The three-step thermal cycle:</b> one cycle consists of three temperature steps repeated 25–35 times:',
      },
      {
        t: 'proc',
        title: 'The three steps of one PCR cycle',
        steps: [
          '<b>Denaturation (94–98 °C).</b> The double-stranded DNA template is heated to separate the two strands by breaking the hydrogen bonds between complementary bases. At this temperature the DNA is denatured into single strands, providing the templates for the next step. Typical time: 20–30 seconds.',
          '<b>Annealing (50–65 °C).</b> The temperature is lowered to allow the two oligonucleotide primers to bind (anneal) to their complementary sequences on the single-stranded DNA template. Each primer binds to the 3′ end of one strand flanking the target region. The annealing temperature depends on primer length and composition: longer primers and higher GC content require higher temperatures. Typical time: 20–40 seconds.',
          '<b>Extension (72 °C).</b> The temperature is set to the optimum for the DNA polymerase, which synthesises a new DNA strand complementary to the template, adding nucleotides in the 5′ → 3′ direction, starting from the primer. Extension continues until the polymerase reaches the end of the template or runs off. Typical time: 1–2 minutes per kilobase of product length.',
        ],
      },
      {
        t: 'p',
        html: 'Chapter 9 gives annealing as about 40–60 °C and denaturation as about 94 °C: these are the same steps with the wider ranges used in practice. In an exam, follow the figures in the question.',
      },
      {
        t: 'p',
        html: 'After one complete cycle (denaturation → annealing → extension), the number of DNA molecules containing the target region has doubled: one double-stranded molecule becomes two. After 30 cycles, the theoretical amplification factor is 2<sup>30</sup> ≈ 10<sup>9</sup>-fold.',
      },
      {
        t: 'p',
        html: '<b>Why Taq polymerase is essential.</b> A normal DNA polymerase (such as the <i>E. coli</i> enzyme) is heat-labile and would be denatured at the 94–98 °C denaturation step. Taq polymerase, isolated from the thermophilic bacterium <i>Thermus aquaticus</i> found in hot springs, is heat-stable and retains its activity after each high-temperature denaturation step. It is the standard enzyme for PCR.',
      },
      {
        t: 'p',
        html: '<b>Key components of a PCR reaction:</b><br>• Template DNA (the sample containing the target sequence)<br>• Two oligonucleotide primers (forward and reverse)<br>• Thermostable Taq DNA polymerase<br>• dNTPs (the four deoxynucleotide triphosphates: dATP, dTTP, dCTP, dGTP)<br>• Buffer solution containing MgCl<sub>2</sub> (Mg<sup>2+</sup> is a cofactor for the polymerase)',
      },
      {
        t: 'p',
        html: '<b>Primer design: the flanking principle.</b> Primers are designed to be complementary to the sequences flanking the target region. The forward primer binds to the 3′ end of the antisense strand; the reverse primer binds to the 3′ end of the sense strand. DNA polymerase extends from the 3′ end of each primer, synthesising new DNA toward the target region. The product runs from one primer to the other, and includes both primers.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Temperature Steps.</b> Column I lists steps of a PCR cycle and column II lists temperatures. Match them.<br>Column I: (P) Strand separation, (Q) Primer binding, (R) New DNA synthesis<br>Column II: (i) 72 °C, (ii) 94–98 °C, (iii) 50–65 °C',
        steps: [
          'Strand separation = denaturation at high temperature; primer binding = annealing at intermediate temperature; new DNA synthesis = extension at the polymerase optimum.',
        ],
        ans: 'P–ii, Q–iii, R–i.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Why Taq Polymerase Is Used.</b> A student asks: “Why cannot ordinary <i>E. coli</i> DNA polymerase be used in PCR, whereas Taq polymerase works well?” Explain.',
        steps: [
          'The denaturation step in PCR requires the reaction to be heated to 94–98 °C to separate DNA strands. <i>E. coli</i> DNA polymerase is heat-labile: it denatures and loses activity at this temperature, so it cannot function after the first cycle. Taq polymerase, isolated from <i>Thermus aquaticus</i>, is heat-stable and retains its activity through the repeated high-temperature denaturation steps, allowing the reaction to proceed through multiple cycles.',
        ],
        ans: '<i>E. coli</i> polymerase is heat-labile and denatures at 94–98 °C; Taq polymerase is heat-stable and remains active through all cycles.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Calculating the Amplification Factor.</b> If a PCR reaction runs for 25 complete cycles starting from one DNA molecule, how many copies of the target sequence are present theoretically? Show your working.',
        steps: [
          'Each cycle doubles the number of target molecules. After <i>n</i> cycles: number of copies = 2<sup><i>n</i></sup>. After 25 cycles: 2<sup>25</sup> = 33,554,432 ≈ 3.36 × 10<sup>7</sup> copies.',
        ],
        ans: 'Approximately 3.36 × 10<sup>7</sup> copies (about 33.5 million copies).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Only Specific Regions Amplify.</b> Explain, in terms of primer binding, why PCR amplifies a specific target sequence and not the entire genome.',
        steps: [
          'Each primer is a short oligonucleotide (18–25 nucleotides) designed to be complementary to a specific sequence flanking the target region. During the annealing step (50–65 °C), the primers bind only to their exact complementary sequences on the template DNA. Because the primers flank the target region, extension from each primer produces a new strand. In the first cycles some products run past the target, but after the first few cycles almost all copies are the region between and including the two primers. The rest of the genome, lacking complementary primer sequences, is not amplified.',
        ],
        ans: 'Primers bind specifically to flanking sequences; after the first few cycles almost all copies are the region between and including the two primers; everything else is not amplified.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three steps of one PCR cycle and state the approximate temperature range for each.',
            a: 'Denaturation (94–98 °C): separates DNA strands; annealing (50–65 °C): primers bind to complementary sequences; extension (72 °C): DNA polymerase synthesises new strands.',
          },
          {
            q: '[CUET] True or false: (i) DNA polymerase synthesises DNA in the 3′ → 5′ direction. (ii) MgCl<sub>2</sub> is added to PCR buffer because Mg<sup>2+</sup> is a cofactor for Taq polymerase.',
            a: '(i) False: polymerase synthesises in the 5′ → 3′ direction; (ii) True.',
          },
          {
            q: '[NEET] From which organism is Taq polymerase derived, and why is it used in PCR?',
            a: '<i>Thermus aquaticus</i>, a thermophilic bacterium; it is heat-stable and retains activity through the high-temperature denaturation steps of PCR.',
          },
          {
            q: '[CUET] If a PCR reaction has 30 cycles, what is the theoretical amplification factor?',
            a: '2<sup>30</sup> ≈ 1.07 × 10<sup>9</sup>-fold (about a billionfold); starting from a single molecule that is about 10<sup>9</sup> copies.',
          },
          {
            q: '[NEET] State two differences between the annealing step and the denaturation step in PCR.',
            a: 'Denaturation: high temperature (94–98 °C), breaks hydrogen bonds between strands, separates strands completely. Annealing: lower temperature (50–65 °C), allows primers to form hydrogen bonds with specific complementary sequences on the template.',
          },
          {
            q: '[NEET High-Difficulty] A student runs a PCR and gets no product. Give at least two possible reasons and how you would check each.',
            a: '(i) Primers designed incorrectly (check primer sequences against the target); (ii) Annealing temperature too high (primer cannot bind: optimise by gradient PCR); (iii) Taq polymerase inactive (use fresh enzyme); (iv) Template DNA degraded (check integrity by gel electrophoresis).',
          },
          {
            q: '[CBSE Board] Why are two primers (forward and reverse) needed in PCR, rather than one?',
            a: 'With only one primer, DNA polymerase can copy just one strand, so the number of copies rises only linearly (not exponentially) and the products have no defined second end, so they vary in length. Two primers flanking the target region define both ends of the product, yielding a clean, specific amplicon of defined length.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 583–586 ─────────────────────────
  {
    n: 'D',
    title: 'Gene Therapy Vectors and the Ex Vivo versus In Vivo Distinction',
    extra: true,
    kalam: 'The 1990 ADA deficiency case used a retroviral vector and patient lymphocytes returned by infusion (ex vivo).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The 1990 ADA deficiency case used a retroviral vector and patient lymphocytes returned by infusion (ex vivo). Other vectors exist, some gene therapies are delivered directly into the body, and adenovirus is the vector commonly proposed for diseases like cystic fibrosis. These are distinct, testable variations.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The ex vivo approach (used in ADA deficiency).</b> The patient’s cells are removed, cultured outside the body, the functional gene is introduced in culture using a vector, and the corrected cells are returned to the patient. This approach is used when the target cells can be harvested, cultured, and re-infused. Advantages: the vector works efficiently in culture; corrected cells can be selected and checked before return; cells home back to appropriate tissues. Limitation: only works for cell types that can be removed, cultured, and returned (primarily blood cells and bone marrow).',
      },
      {
        t: 'p',
        html: '<b>The in vivo approach.</b> The therapeutic gene is delivered directly into the patient’s body, typically by injecting the vector carrying the gene into the relevant tissue or bloodstream. The vector searches for and transduces the target cells inside the body. This approach is necessary when the target cells cannot be harvested and re-infused, for example lung epithelial cells in cystic fibrosis or liver cells in haemophilia.',
      },
      {
        t: 'table',
        title: 'Comparison of gene therapy vectors',
        head: ['Feature', 'Retrovirus', 'Adenovirus', 'Liposome (DNA in lipid vesicles)'],
        rows: [
          ['Genome', 'RNA', 'DNA', 'None (lipid particle)'],
          ['Integration into host genome', 'Yes (provirus)', 'No (episomal)', 'No'],
          ['Duration of expression', 'Long-term (if integrated)', 'Transient (weeks–months)', 'Transient'],
          ['Target cells', 'Dividing cells (lymphocytes)', 'Non-dividing cells (respiratory epithelium)', 'Broad range'],
          ['Immunogenicity', 'Low', 'High (triggers immune response)', 'Low'],
          ['Example disease', 'ADA-SCID (1990)', 'Cystic fibrosis', 'Experimental (muscle, tumour)'],
          ['Main limitation', 'The vector used in the ADA case infects only dividing cells; risk of insertional mutagenesis', 'Immune response limits repeat dosing', 'Low transfection efficiency'],
        ],
      },
      {
        t: 'p',
        html: '<b>Retrovirus.</b> A disarmed (replication-incompetent) retrovirus integrates its proviral DNA into the host cell genome, potentially giving long-term expression. Used in the ADA deficiency case because lymphocytes are dividing cells and the ex vivo approach allows efficient transduction in culture. Limitation: integration at random sites carries a risk of insertional mutagenesis (activating an oncogene).',
      },
      {
        t: 'p',
        html: '<b>Adenovirus.</b> A double-stranded DNA virus that naturally infects respiratory epithelium. It does not integrate into the host genome: it remains as episomal DNA in the nucleus. This makes it suitable for delivering genes to non-dividing cells (such as lung epithelial cells) but means expression is transient. Adenovirus causes strong immune responses, limiting repeated administration. Used experimentally for cystic fibrosis gene therapy (delivering a functional <i>CFTR</i> gene to lung cells via inhalation).',
      },
      {
        t: 'p',
        html: '<b>Liposomes.</b> Lipid vesicles carrying the therapeutic DNA plasmid, fused with the target cell membrane to deliver the DNA into the cytoplasm. Non-viral, low immunogenicity, but lower transfection efficiency than viral vectors. Used experimentally for direct injection into muscle tissue or into tumour cells.',
      },
      {
        t: 'p',
        html: '<b>The distinction:</b> ADA case = ex vivo, retroviral; cystic fibrosis = in vivo, adenoviral. The ADA case covers only one corner of gene therapy. Learn that vector choice and delivery route depend on the target cell type and disease.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Comparing Ex Vivo and In Vivo Approaches.</b> Gene therapy is proposed for two disorders: ADA deficiency (the defect is in the patient’s blood lymphocytes) and cystic fibrosis (the defect is in the epithelial cells lining the lungs). Which gene-therapy approach, ex vivo or in vivo, suits each, and why?',
        steps: [
          'Lymphocytes can be removed from the blood, cultured, given the functional gene and returned by infusion, so ADA deficiency suits the ex vivo approach. Lung epithelial cells cannot be removed, cultured and put back, so the functional gene must be delivered directly into the airways: an in vivo approach.',
        ],
        ans: 'ADA deficiency: ex vivo (cells can be harvested and re-infused); cystic fibrosis: in vivo (the vector is delivered directly to the lung epithelium).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Matching Disease to Vector.</b><br>Column I: (P) ADA-SCID, (Q) Cystic fibrosis, (R) Experimental direct delivery of therapeutic DNA into muscle or tumour cells<br>Column II: (i) Adenovirus, (ii) Retrovirus (ex vivo), (iii) Liposome/naked DNA',
        steps: [
          'ADA-SCID: lymphocytes harvested → retrovirus used → ex vivo (ii). Cystic fibrosis: functional <i>CFTR</i> gene delivered to lung epithelium → adenovirus used → in vivo (i). Direct delivery of plasmid DNA into muscle or tumour: lipid vesicles (liposomes) carrying the DNA (iii).',
        ],
        ans: 'P–ii, Q–i, R–iii.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why Adenovirus Is Not Integrated.</b> A researcher says: “Since integration gives long-term expression, adenovirus should be engineered to integrate into the host genome for cystic fibrosis treatment.” Explain why this reasoning is flawed and what the real trade-off is.',
        steps: [
          'Integration gives long-term expression but carries a risk of insertional mutagenesis: the vector could integrate near a proto-oncogene and activate it, potentially causing cancer. Adenovirus does not integrate, so it carries no risk of insertional mutagenesis, but it triggers a strong immune response. For cystic fibrosis, where the lung epithelium is a large, accessible tissue, transient expression from an episomal vector (weeks to months) is acceptable, and the safety advantage of non-integration outweighs the need for periodic re-administration. Engineering adenovirus to integrate would sacrifice its safety advantage.',
        ],
        ans: 'Integration risks insertional mutagenesis; adenovirus’s non-integrating nature is a safety feature, not a limitation to be engineered away: for cystic fibrosis, transient expression from an episomal vector is acceptable given the safety trade-off.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Distinguish between ex vivo and in vivo gene therapy approaches.',
            a: 'Ex vivo: patient cells removed, gene introduced in culture, corrected cells returned to patient. In vivo: vector carrying the gene injected directly into the patient’s body, transducing cells inside the body.',
          },
          {
            q: '[CUET] State whether each is true or false: (i) Adenovirus integrates into the host genome. (ii) The retroviral vectors used in the ADA case can transduce non-dividing cells.',
            a: '(i) False: adenovirus does not integrate, it remains episomal; (ii) False: these retroviral vectors need dividing cells for integration.',
          },
          {
            q: '[NEET] Name two vectors used in gene therapy and one disease treated with each.',
            a: 'Any two, for example retrovirus for ADA-SCID (ADA deficiency) and adenovirus for cystic fibrosis (the <i>CFTR</i> gene). (Liposomes are the third vector in the table, used experimentally, with no established disease example.)',
          },
          {
            q: '[NEET] Why is a replication-incompetent retrovirus used rather than a wild-type retrovirus?',
            a: 'A replication-competent retrovirus would continue to replicate and spread uncontrollably inside the patient, potentially causing disease. A replication-incompetent (disarmed) retrovirus can deliver the therapeutic gene but cannot replicate, making it safe.',
          },
          {
            q: '[CUET] A patient with cystic fibrosis is treated by inhaling an adenoviral vector carrying the <i>CFTR</i> gene. Is this ex vivo or in vivo therapy?',
            a: 'In vivo therapy: the vector is delivered directly into the patient’s lungs by inhalation, without removing cells.',
          },
          {
            q: '[NEET High-Difficulty] Explain why insertional mutagenesis is a concern specific to integrating vectors and not to adenovirus or liposomes.',
            a: 'Insertional mutagenesis occurs when the integrating vector’s DNA inserts near a host proto-oncogene, activating it and potentially causing cancer. Adenovirus (episomal) and liposomes (DNA in lipid vesicles, which does not integrate) do not insert into the genome, so they cannot cause insertional mutagenesis. The risk is specific to integrating vectors (retroviral vectors, including lentiviral vectors) because their integration is random.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 586–590 ─────────────────────────
  {
    n: 'E',
    title: 'Biopiracy: The Legal Framework, Specific Patents, and India’s Defences',
    extra: true,
    kalam: 'Three Indian resources are the standard biopiracy examples (Basmati rice, Neem, Turmeric), and India responded with the Indian Patents Bill.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Three Indian resources are the standard biopiracy examples (Basmati rice, Neem, Turmeric), and India responded with the Indian Patents Bill. This topic adds the patent numbers, the organisations that filed them, the legal instruments used to challenge them, and the Nagoya Protocol framework. These are testable details that NEET and CUET occasionally probe ${EST}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>What biopiracy means precisely.</b> Biopiracy is the use of a country’s biological resources or traditional knowledge by foreign entities without authorisation and without compensatory payment. The core elements are: (i) taking a resource or knowledge that was freely available in the public domain (often used by local communities for centuries); (ii) filing a patent claiming it as a novel invention; (iii) obtaining exclusive commercial rights without sharing benefits with the source country or community. This is distinct from biopatent (which is the legal right granted) and bioethics (the study of the moral questions).',
      },
      {
        t: 'p',
        html: '<b>Three specific patent cases:</b><br>1. <b>Turmeric (<i>Curcuma longa</i>) wound healing: US Patent 5,401,504.</b> Filed in 1993 by the University of Mississippi Medical Center, claiming turmeric powder as an effective wound-healing agent. India challenged this by submitting ancient Ayurvedic texts (dating back centuries) as prior art: evidence that the use was known in India long before the patent was filed. The US Patent Office revoked the patent in 1997 on the grounds of lack of novelty. This was a landmark case demonstrating that traditional knowledge can invalidate biopiracy patents.<br>2. <b>Neem (<i>Azadirachta indica</i>) fungicidal properties: European Patent EP 436257.</b> Granted in 1994 to the US Department of Agriculture and the US company W. R. Grace & Co., claiming a method of controlling fungal infections on plants using a neem-oil extract. Opposition by Indian and international groups, supported by evidence of traditional Indian use of neem, led the European Patent Office to revoke the patent (the European Patent Office first revoked it in 2000 and the revocation was upheld on appeal in 2005; these dates are not in NCERT). The argument: the fungicidal use was ancient common knowledge in India, not a novel invention.<br>3. <b>Basmati rice: US Patent 5,663,484 (RiceTec, 1997).</b> RiceTec, a US-based company, obtained a patent on Basmati rice lines and grains, creating confusion in international markets by claiming a unique product derived from Indian varieties. India challenged this through diplomatic and legal channels, and several of the claims were withdrawn or narrowed. India’s case rested on the fact that Basmati varieties had been cultivated in India and Pakistan for centuries; the “novelty” claimed by RiceTec did not exist.',
      },
      {
        t: 'p',
        html: '<b>India’s legal and institutional defences:</b><br>1. <b>The Biological Diversity Act, 2002.</b> Enacted by the Parliament of India to give effect to the Convention on Biological Diversity. It provides for conservation of biological resources, sustainable use, and fair and equitable sharing of benefits arising from their utilisation. It restricts foreigners from accessing Indian biological resources without prior approval of the National Biodiversity Authority. It also addresses biopiracy by requiring anyone seeking to patent an invention based on Indian biological resources to obtain prior approval and share benefits with the communities from whom the resources were derived.<br>2. <b>Traditional Knowledge Digital Library (TKDL).</b> A database created by the Council of Scientific and Industrial Research (CSIR) in collaboration with the Ministry of AYUSH. It documents traditional knowledge from Indian systems of medicine (Ayurveda, Unani, Siddha, Yoga) in multiple languages and in a format recognisable by patent examiners worldwide. When patent applications claiming Indian traditional knowledge are detected in international patent databases, the TKDL is used as prior art to challenge the patent. This has been used successfully against several biopiracy patents.<br>3. <b>The Nagoya Protocol (2010).</b> An international supplementary agreement to the Convention on Biological Diversity (CBD), adopted in Nagoya, Japan, in 2010 and in force since 2014. It provides a transparent legal framework for ensuring that benefits arising from the utilisation of genetic resources are shared fairly and equitably with the countries and communities providing them. India is a Party to it. The protocol establishes Access and Benefit-Sharing (ABS) principles: access to genetic resources requires the prior informed consent of the providing country (where that country requires it), on mutually agreed terms, and users must share benefits arising from commercial utilisation with the provider.',
      },
      {
        t: 'p',
        html: '<b>How the TKDL works in practice.</b> The TKDL converts traditional knowledge from classical texts into a patent-style format (with definitions and a classification system linked to the International Patent Classification). Patent examiners at the European Patent Office, US Patent and Trademark Office, and other offices use the TKDL to detect prior art. When a patent application claims something already documented in the TKDL, it can be rejected on grounds of lack of novelty, preventing the granting of a biopiracy patent before it is issued, rather than having to revoke it after the fact (as happened with turmeric).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identifying the Legal Challenge to Biopiracy.</b> A US university patents the use of amla (Indian gooseberry) as an antioxidant supplement. India’s response cites ancient Ayurvedic texts as evidence the use was known centuries before the patent. What legal defence is being used, and through what institutional mechanism?',
        steps: [
          'The defence uses prior art: evidence that the claimed invention was already known in the public domain before the patent was filed. The institutional mechanism is the Traditional Knowledge Digital Library (TKDL), which documents Ayurvedic knowledge in patent-compatible format and can be submitted to patent offices as prior art to invalidate biopiracy patents.',
        ],
        ans: 'Prior art defence; through the TKDL (Traditional Knowledge Digital Library).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Matching the Biopiracy Case to the Legal Response.</b><br>Column I: (P) US Patent on turmeric wound healing, (Q) European Patent EP 436257 on neem fungicidal use, (R) RiceTec Basmati patent<br>Column II: (i) Prior art from Ayurvedic texts used to revoke the patent, (ii) Patent revoked by European Patent Office after Indian challenge, (iii) Diplomatic and legal challenge from India; several claims withdrawn or narrowed',
        steps: [
          'Turmeric: prior art cited → revoked (P–i). Neem: European Patent Office revoked → (Q–ii). Basmati: diplomatic/legal challenge → (R–iii).',
        ],
        ans: 'P–i, Q–ii, R–iii.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Why the TKDL Was Created.</b> A student asks: “If prior art could already be cited to revoke patents, why was the TKDL necessary?” Explain.',
        steps: [
          'Before the TKDL, patent examiners at international offices (EPO, USPTO) did not have easy access to traditional knowledge in formats they could search. Ayurvedic texts are in Sanskrit, Hindi, Persian, and other languages, not in a format recognisable as “prior art” under international patent law. The TKDL translates this knowledge into structured, searchable databases in multiple languages and patent-compatible formats (including a classification linked to the International Patent Classification). It therefore enables patent examiners to detect biopiracy claims at the examination stage, before the patent is granted, rather than requiring costly post-grant revocation challenges.',
        ],
        ans: 'Because traditional knowledge in classical languages was inaccessible to international patent examiners; the TKDL converts it to searchable, patent-compatible formats, allowing biopiracy claims to be detected and rejected at the examination stage.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three specific Indian bioresources that have been the subject of biopiracy patents, and state what was claimed in each case.',
            a: 'Turmeric (<i>Curcuma longa</i>): wound healing (US Patent 5,401,504, University of Mississippi); Neem (<i>Azadirachta indica</i>): fungicidal properties (European Patent EP 436257, USDA and W. R. Grace); Basmati rice: Basmati lines and grains (RiceTec, US Patent 5,663,484).',
          },
          {
            q: '[CUET] State whether each is true or false: (i) The TKDL was created by the Ministry of Agriculture. (ii) India enacted the Biological Diversity Act in 2002.',
            a: '(i) False: TKDL was created by CSIR and the Ministry of AYUSH; (ii) True.',
          },
          {
            q: '[NEET] What is the Nagoya Protocol, and what principle does it establish?',
            a: 'The Nagoya Protocol is an international agreement supplementary to the Convention on Biological Diversity (adopted 2010, in force 2014). It establishes the Access and Benefit-Sharing (ABS) principle: access to genetic resources requires the prior informed consent of the providing country (where that country requires it), on mutually agreed terms, and benefits arising from their commercial utilisation must be shared equitably.',
          },
          {
            q: '[CUET] Explain the difference between the TKDL approach to biopiracy and the turmeric-case approach.',
            a: 'The turmeric case was a post-grant challenge: the patent was granted, then revoked by citing prior art after issuance. The TKDL approach is preventive: it documents traditional knowledge in patent-compatible format so that patent examiners can reject biopiracy applications at the examination stage, before the patent is granted.',
          },
          {
            q: '[NEET] The Neem patent was granted in 1994 and finally revoked in 2005, a gap of 11 years. State two disadvantages of revoking a biopiracy patent after it has been granted, rather than preventing it at the examination stage.',
            a: '(i) During the 11-year period the patent holder could have collected royalties from legitimate users; (ii) legal costs of revocation proceedings are high; (iii) market confusion and economic harm to Indian exporters of the commodity; (iv) it sets a precedent that biopiracy patents are tolerated for extended periods before action.',
          },
          {
            q: '[CBSE Board] Explain the full form and main function of the National Biodiversity Authority.',
            a: 'NBA = National Biodiversity Authority. Established under the Biological Diversity Act, 2002, it is the statutory body that grants prior approval for access to Indian biological resources by foreign entities and ensures benefit-sharing with local communities.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 590–599 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The book’s estimate is that Bt, insulin, ADA gene therapy, diagnosis, transgenic animals and RNAi are the topics NEET returns to (not official figures).',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: `Judging from past NEET papers, NEET returns to Chapter 10 with striking selectivity. The topics that dominate are: ${EST}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Relative weight in the book’s estimate (not official figures)', 'What is usually asked'],
        rows: [
          ['Bt toxin / Bt cotton / cry genes', 'Highest', 'The alkaline-gut activation and the “which cry gene controls which pest” pairing are common'],
          ['Humulin / insulin structure', 'High', 'The A-chain/B-chain/disulphide structure and the proinsulin → C-peptide-removal step are often asked'],
          ['ADA gene therapy (1990)', 'Moderate to high', 'The year, the vector (retrovirus), the lymphocyte step, and “why not permanent” are each asked'],
          ['Molecular diagnosis (PCR / ELISA / probe)', 'Moderate', 'Which technique detects what (nucleic acid vs protein/antibody) is the recurring hinge'],
          ['Transgenic animals / GEAC / biopiracy', 'High', 'The GEAC full-form, the 95%-mice figure, and the biopiracy definition are often asked'],
          ['RNAi and Golden Rice', 'Lower', 'The dsRNA trigger and the β-carotene purpose of Golden Rice are tested directly'],
        ],
      },
      {
        t: 'p',
        html: `<b>What is easy to underweight:</b> The RNAi mechanism (sense + antisense → dsRNA → silencing) gets less space in NCERT than the Bt story but is asked just as regularly ${EST}. The distinction between the natural proinsulin route and the Eli Lilly industrial route is a recurring trap, so keep the two routes strictly separate.`,
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: `NEET questions on this chapter fall into six reproducible shapes ${EST}. Each has a fixed approach that cracks it.`,
      },

      { t: 'p', html: '<b>Archetype 1: The Fact-Definition One-Liner</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single, crisp factual question. Often asks for a single term, an expansion, or the organism/source of a product. No calculation, no reasoning chain.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “GEAC stands for<br><b>(a)</b> Genome Engineering Action Committee<br><b>(b)</b> Ground Environment Action Committee<br><b>(c)</b> Genetic Engineering Approval Committee<br><b>(d)</b> Genetic and Environment Approval Committee”',
        steps: [
          '<b>Approach:</b> Treat every expansion as a fixed label. There is no working-out; you either know it or you do not. Read the exact words: “Approval” not “Action,” “Engineering” not “Environment.” NCERT and this book write Genetic Engineering Approval Committee; the body’s official name is Genetic Engineering Appraisal Committee. Answer “Approval” if the options carry only that word.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>Archetype 2: The Mechanism Question (Bt / RNAi / Humulin)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Asks you to trace a biological process step by step. The option that breaks the chain at any point is wrong.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “Bt toxin kills the larvae of certain insects<br><b>(a)</b> by binding of activated toxin on midgut epithelial cells, creating pores, leading to swelling and lysis<br><b>(b)</b> by stopping transcription of larval cells<br><b>(c)</b> by altering central dogma taking place in the cells of gut of larva<br><b>(d)</b> by stopping protein synthesis.”',
        steps: [
          '<b>Approach:</b> Run the fixed chain in your head:<br>• Bt: crystal (inactive protoxin) → eaten → alkaline gut solubilises → active toxin → binds midgut epithelium → pores → lysis → insect dies.<br>• RNAi: sense RNA + antisense RNA → dsRNA → mRNA silenced → pest cannot survive.<br>Any option that inserts a wrong step (acidic gut, transcription block, stops protein synthesis) eliminates itself.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 3: The Two-Thing Distinction (Trap-Pair)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A question that offers two closely related ideas and tests whether you can keep them apart. Common pairs are:<br>• Bt toxin (pore-formation) vs RNAi (gene-silencing)<br>• Natural insulin maturation (proinsulin → C-peptide removed) vs Eli Lilly industrial route (chains A and B made separately, joined by disulphide bonds)<br>• Biopatent (right granted) vs Biopiracy (unauthorised use)',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “Find out the incorrect statement.<br><b>(a)</b> Human protein used to treat emphysema is α-1 antitrypsin.<br><b>(b)</b> Human insulin is being commercially produced from a transgenic species of <i>Agrobacterium tumefaciens</i>.<br><b>(c)</b> Rosie, the first transgenic cow, produced milk enriched with human α-lactalbumin.<br><b>(d)</b> Cry IAb endotoxins obtained from <i>Bacillus thuringiensis</i> is effective against corn borers.”',
        steps: [
          '<b>Approach:</b> Identify the false statement by matching each to the correct context. <i>Agrobacterium tumefaciens</i> is a plant transformation bacterium (its Ti plasmid is the vector); it is not the host for humulin production (<i>E. coli</i> is).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 4: The Multi-Statement / “Select the Correct Statements” Question</b>' },
      {
        t: 'p',
        html: `<b>What it looks like:</b> A list of four or five statements; you must select the combination that is fully correct. This is a hard question shape in this chapter ${EST}.`,
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “Which of the following statements (i–v) is/are incorrect?<br>(i) Recombinant DNA technology is used to improve crop plants by increasing their productivity, by making them more nutritious and by developing disease resistant.<br>(ii) Bt cotton is resistant to bollworm infestation.<br>(iii) <i>Bacillus thuringiensis</i> can form cry protein during any phase of their growth.<br>(iv) <i>Bacillus thuringiensis</i> is not harmed by self cry protein because of its occurrence as protoxin (inactive).<br>(v) Protoxin cry protein is changed into active cry protein in the alkaline midgut of insects.”',
        steps: [
          '<b>Approach:</b> Evaluate each statement individually:<br>• (i) Correct: standard rDNA application description.<br>• (ii) Correct: Bt cotton is indeed bollworm-resistant.<br>• (iii) Incorrect: cry protein is made in a particular phase of growth, not in any phase.<br>• (iv) Correct: protoxin is inactive, so it does not harm the bacterium.<br>• (v) Correct: the protoxin is activated by the alkaline pH of the insect midgut.',
        ],
        ans: 'Only statement (iii) is incorrect.',
      },

      { t: 'p', html: '<b>Archetype 5: The Assertion-Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements; you choose the relationship between them (both true with correct explanation, both true without explanation, etc.).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “Assertion (A): ELISA is based on the principle of antigen-antibody interaction. Reason (R): Pathogen infection is usually detected by presence of antigens or detection of antibodies synthesised against the pathogen.<br><b>(a)</b> Both A and R are true and R correctly explains A<br><b>(b)</b> Both A and R are true but R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true”',
        steps: [
          '<b>Approach:</b> Confirm A first. ELISA is antigen–antibody based: A is true. Then confirm R: ELISA detects either the pathogen’s antigens or the antibodies the body makes: R is also true. Does R explain A? Yes: the reason ELISA works is precisely because it exploits antigen–antibody binding.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 6: The Diagram / Label-ID (Proinsulin Maturation)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A figure showing proinsulin processing, with panels labeled A, B, C, D that must be matched to the correct molecular entities.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Example (based on a recent NEET paper):</b> “Which of the following is the correct set of the labels A, B, C and D in the given figure of maturation of pro-insulin into insulin? [Figure shows two chains separated by disulphide bridges, a middle loop, and an arrow labeled ‘cell peptidases’]”',
        steps: [
          '<b>Approach:</b> Recall the structure of proinsulin: it is a single continuous chain: B chain → C-peptide (middle loop) → A chain, with the disulphide bridges linking the A and B regions already formed. When cell peptidases act, they cut at both ends of the C-peptide, removing it. The labels in the figure correspond to:<br>• A = Insulin (the final product: A chain + B chain + disulphide bridges)<br>• B = Free C-peptide (removed)<br>• C = Cell peptidases (the cutting enzymes)<br>• D = Proinsulin (the starting single-chain precursor)',
        ],
        ans: '(a): Proinsulin → cell peptidases → Insulin + Free C-peptide (the correct option is the one that reads D → C → A + B with the labels above)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The following confusions are common in distractors.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'The correct fact'],
        rows: [
          ['<b>Wrong pH for Bt activation</b>', 'Options say “acidic stomach” or “stomach pH” activates the protoxin', 'The alkaline midgut (not stomach) activates it'],
          ['<b>Conflating Bt with RNAi</b>', 'Options describe gene-silencing for a Bt question, or a toxin for an RNAi question', 'Bt = pore-forming toxin; RNAi = dsRNA silencing'],
          [
            '<b>Conflating the two insulin routes</b>',
            'An option inserts “remove C-peptide” into the Eli Lilly production description',
            'Body route: proinsulin, then the C-peptide is removed. Factory route (the method NCERT describes): chains A and B made separately and joined by disulphide bonds. Keep the two separate',
          ],
          ['<b><i>E. coli</i> vs <i>Agrobacterium</i></b>', 'Humulin production described as using <i>Agrobacterium</i>', 'Eli Lilly used <i>E. coli</i> plasmids; <i>Agrobacterium</i> is for plant transformation'],
          ['<b>Rosie’s product</b>', 'Options say “high-fat milk” or “enriched milk” without specifying', 'Rosie produced milk rich in human α-lactalbumin specifically'],
          ['<b>“Bt brinjal is grown in India”</b>', 'A trick statement: Bt cotton is the Bt crop grown commercially in India (NCERT’s example)', 'Bt brinjal was not approved for commercial cultivation in India, as far as the book states'],
          ['<b>Biopatent vs Biopiracy swap</b>', 'Options swap the two definitions', 'Biopatent = right granted; Biopiracy = unauthorised use without compensation'],
          ['<b>Transgenic = selective breeding</b>', 'Options describe selective breeding as “transgenic”', 'A transgenic animal must carry a deliberately introduced foreign gene'],
          ['<b>Probe is double-stranded</b>', 'Options describe the probe as double-stranded', 'A probe is single-stranded DNA or RNA with a radioactive tag'],
          ['<b>“All Bt toxins kill all pests”</b>', 'Options claim Bt crops resist “all insects” or “all pesticides”', 'Bt cotton protects against the cotton bollworms (lepidopterans), not all pests, not all pesticides'],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'These questions follow the shapes described above.' },
      { t: 'p', html: '<b>Level 1: Direct recall (2 questions)</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q1.</b> The first human drug made using recombinant DNA technology was<br><b>(a)</b> human growth hormone<br><b>(b)</b> tissue plasminogen activator (TPA)<br><b>(c)</b> insulin<br><b>(d)</b> erythropoietin<br>Hint: Which was the flagship product of Eli Lilly in 1983?',
            a: '<b>Answer:</b> (c). Humulin (human insulin) was the first recombinant DNA human drug, produced by Eli Lilly in 1983 (NCERT dates the Eli Lilly work to 1983).',
          },
          {
            q: '<b>Q2.</b> GEAC stands for<br><b>(a)</b> Genetic Engineering Action Committee<br><b>(b)</b> Genetic Engineering Approval Committee<br><b>(c)</b> Genome Engineering Advisory Committee<br><b>(d)</b> Ground Environment Action Committee',
            a: '<b>Answer:</b> (b). GEAC = Genetic Engineering Approval Committee. NCERT and this book write “Approval”; the body’s official name is Genetic Engineering Appraisal Committee. Answer “Approval” if the options carry only that word.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2: Concept application (4 questions)</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q3.</b> Which pair of <i>cry</i> genes controls cotton bollworms, and which single <i>cry</i> gene controls corn borer?<br><b>(a)</b> <i>cryIAc</i>, <i>cryIIAb</i>; <i>cryIAb</i><br><b>(b)</b> <i>cryIAb</i>, <i>cryIIAb</i>; <i>cryIAc</i><br><b>(c)</b> <i>cryIAc</i>, <i>cryIIIAb</i>; <i>cryIAb</i><br><b>(d)</b> <i>cryIAb</i>, <i>cryIIAb</i>; <i>cryIIIAb</i>',
            a: '<b>Answer:</b> (a). <i>cryIAc</i> + <i>cryIIAb</i> → cotton bollworms; <i>cryIAb</i> → corn borer.',
          },
          {
            q: '<b>Q4.</b> A probe used in molecular diagnosis is<br><b>(a)</b> a double-stranded DNA tagged with a radioactive molecule<br><b>(b)</b> a single-stranded DNA or RNA tagged with a radioactive molecule<br><b>(c)</b> an antibody tagged with a fluorescent dye<br><b>(d)</b> a thermostable enzyme used in PCR',
            a: '<b>Answer:</b> (b). A probe is single-stranded DNA/RNA with a radioactive tag. “Double-stranded” is the classic trap.',
          },
          {
            q: '<b>Q5.</b> The transgenic animal Rosie was significant because her milk contained<br><b>(a)</b> human α-1 antitrypsin<br><b>(b)</b> human α-lactalbumin<br><b>(c)</b> Bt toxin<br><b>(d)</b> cry protein',
            a: '<b>Answer:</b> (b). Rosie (1997) was the first transgenic cow; her milk contained human α-lactalbumin.',
          },
          {
            q: '<b>Q6.</b> In gene therapy for ADA deficiency, the functional cDNA is introduced into the patient’s cells using<br><b>(a)</b> <i>Agrobacterium tumefaciens</i><br><b>(b)</b> a retrovirus<br><b>(c)</b> a Ti plasmid<br><b>(d)</b> <i>Escherichia coli</i>',
            a: '<b>Answer:</b> (b). A retrovirus is the vector used to deliver the functional ADA cDNA into human lymphocytes. <i>Agrobacterium</i> and Ti plasmid are plant tools; <i>E. coli</i> is a bacterial host, not a human-cell vector.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3: Multi-statement / trap-pair (3 questions)</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q7.</b> Select the correct statements about the production of humulin:<br>(i) Chains A and B were synthesised as separate polypeptides in <i>E. coli</i>.<br>(ii) Proinsulin was produced and its C-peptide later removed.<br>(iii) The two chains were finally joined by disulphide bonds.<br>(iv) The main challenge was getting insulin assembled into a mature form.<br><b>(a)</b> (i), (ii) and (iii)<br><b>(b)</b> (i), (iii) and (iv)<br><b>(c)</b> (ii), (iii) and (iv)<br><b>(d)</b> all four',
            a: '<b>Answer:</b> (b). (i), (iii) and (iv) describe the Eli Lilly route correctly. (ii) is the natural body route, not the industrial method.',
          },
          {
            q: '<b>Q8.</b> Select the incorrect statements about Bt toxin:<br>(i) Bt protein exists as an active toxin inside <i>Bacillus thuringiensis</i>.<br>(ii) The activated toxin enters the ovaries of the pest to sterilise it.<br>(iii) The inactive protoxin gets converted into active form in the insect gut.<br>(iv) The toxin is activated by the alkaline pH of the insect midgut.<br><b>(a)</b> only (i) and (ii)<br><b>(b)</b> only (iii)<br><b>(c)</b> (i), (ii) and (iii)<br><b>(d)</b> only (iv)',
            a: '<b>Answer:</b> (a). (i) is wrong because Bt protein exists as inactive protoxin, not active toxin, inside the bacterium. (ii) is wrong because the toxin acts on midgut epithelial cells, not ovaries. (iii) and (iv) are correct.',
          },
          {
            q: '<b>Q9.</b> Choose the correct statements about transgenic animals:<br>(i) About 95% of all existing transgenic animals are mice.<br>(ii) Transgenic animals are produced only by selective breeding.<br>(iii) Rosie produced milk enriched with human α-lactalbumin.<br>(iv) The human protein α-1 antitrypsin, used to treat emphysema, has been made in transgenic animals.<br><b>(a)</b> (i), (ii) and (iv)<br><b>(b)</b> (i), (iii) and (iv)<br><b>(c)</b> (ii), (iii) and (iv)<br><b>(d)</b> all four',
            a: '<b>Answer:</b> (b). (i), (iii) and (iv) are correct. (ii) is wrong: selective breeding does not make an animal transgenic; a foreign gene must be deliberately introduced.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 4: Diagram / critical thinking (3 questions)</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Q10.</b> The correct sequence of labels for the maturation of proinsulin into insulin is: A = Free C-peptide; B = Insulin; C = cell peptidases; D = Proinsulin<br><b>(a)</b> D → C → B + A<br><b>(b)</b> B → C → D + A<br><b>(c)</b> A → B → C → D<br><b>(d)</b> C → B → D → A',
            a: '<b>Answer:</b> (a). D (proinsulin) → C (cell peptidases cut the C-peptide) → B (insulin, the A+B+disulphide product) + A (free C-peptide). (The letters here are not the ones used in Archetype 6: read each question’s own label list before matching.)',
          },
          {
            q: '<b>Q11.</b> A novel strategy to prevent <i>Meloidogyne incognita</i> infestation in tobacco was based on<br><b>(a)</b> DNA interference<br><b>(b)</b> RNA interference<br><b>(c)</b> producing a Bt-type pore-forming toxin<br><b>(d)</b> spraying a chemical nematicide',
            a: '<b>Answer:</b> (b). RNA interference (RNAi) uses dsRNA to silence the nematode’s essential mRNA. “DNA interference” is not a recognised mechanism; the Bt-type toxin is the strategy against insect pests, not against nematodes.',
          },
          {
            q: '<b>Q12.</b> A doctor must detect a virus present in extremely low concentration before symptoms appear. Which molecular diagnosis technique is most suitable and why?<br><b>(a)</b> ELISA, because it detects antibodies<br><b>(b)</b> PCR, because it amplifies the pathogen’s nucleic acid<br><b>(c)</b> Probe hybridisation, because it uses radioactive tags<br><b>(d)</b> Autoradiography, because it reads the photographic film',
            a: '<b>Answer:</b> (b). PCR amplifies even a trace of pathogen nucleic acid, making detection possible before symptoms. ELISA detects proteins/antibodies, not nucleic acids. Probe and autoradiography detect but do not amplify.',
          },
        ],
      },

      { t: 'part', title: 'High-Yield Reminders' },
      {
        t: 'p',
        html: '1. <b>Two insulin routes: never mix them.</b> In the body, one long chain (proinsulin) is made and the C-peptide is cut out, leaving the A and B chains joined by disulphide bridges. In the Eli Lilly (1983) method NCERT describes, the A and B chains are made separately in <i>E. coli</i> and then joined by disulphide bonds; no proinsulin or C-peptide step is involved in that method NCERT describes.<br>2. <b>RNAi chain.</b> Sense and antisense RNA made in the host cell are complementary, so they pair to form double-stranded RNA (dsRNA). It is this dsRNA that triggers RNAi and silences the nematode’s specific mRNA, preventing translation. The vector used to deliver the construct into tobacco is <i>Agrobacterium</i>.<br>3. <b>Cry genes and their targets.</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['<i>cry</i> gene', 'Controls'],
        rows: [
          ['<i>cryIAc</i>, <i>cryIIAb</i>', 'Cotton bollworms'],
          ['<i>cryIAb</i>', 'Corn borer'],
        ],
      },
    ],
  },
];
