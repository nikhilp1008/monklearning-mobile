import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 9 (Biotechnology: Principles and Processes), Additional topics C and D, word for word from the
 * Class 12 Biology Master Reference (book pp. 519 to 533): C "rDNA Applications and Ethical Dimensions" (opens low on
 * p. 519, after Addendum B's practice answers; runs to p. 523) and D "What NEET Actually Asks" (the book's
 * "Addendum P", p. 524 to p. 533). Page 534 is the next chapter.
 *
 * Topic indexes: C = 6, D = 7. The book's example headings ("Example C.1 - [NEET] Gene Therapy for ADA Deficiency")
 * become the example's tag (the bracket) and a bold lead on its question. Em dashes are written as colons, commas or
 * brackets; exam years in the Distribution table are dropped and the table carries the "book's estimate" label.
 * Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 519–523 ─────────────────────────
  {
    n: 'C',
    title: 'rDNA Applications and Ethical Dimensions',
    extra: true,
    kalam: 'The chapter defines biotechnology and names applications briefly but develops none of them in detail.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines biotechnology and names applications briefly but develops none of them in detail. NEET and CUET regularly ask for the specific steps of gene therapy for ADA deficiency, the complete procedure of DNA fingerprinting, the distinction between PCR-based and antibody-based diagnostics, and the ethical concerns surrounding GM crops and biopiracy. These are not in the chapter but have appeared in papers consistently (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Gene therapy.</b> The replacement of a defective or absent gene with a functional copy to correct a genetic disorder. Two approaches exist:<br>• <b>Ex vivo:</b> The patient’s cells (e.g. lymphocytes) are removed, the functional gene is introduced using a retroviral vector in culture, and the corrected cells are infused back into the patient. Used for ADA deficiency.<br>• <b>In vivo:</b> The therapeutic gene is delivered directly into the patient’s body (e.g. by adenoviral vector injected into the bloodstream or target tissue).',
      },
      {
        t: 'p',
        html: 'ADA (adenosine deaminase) deficiency is the first approved human gene therapy case (1990, USA). ADA is required for lymphocyte function; its absence causes Severe Combined Immunodeficiency (SCID). Treatment: lymphocytes are harvested from the patient, a functional ADA gene is introduced via retroviral vector, the corrected cells are cultured and reinfused. Bone marrow stem cells may also be targeted for a more permanent solution.',
      },
      {
        t: 'p',
        html: 'Limitations: immune response to the viral vector, difficulty delivering to sufficient cells, and the therapeutic gene may not integrate permanently.',
      },
      {
        t: 'p',
        html: '<b>DNA fingerprinting (DNA profiling).</b> The technique uses variations in repetitive DNA sequences between individuals to establish identity or biological relationships.',
      },
      {
        t: 'p',
        html: 'Key concept, VNTR (Variable Number Tandem Repeat): Short DNA sequences (about 10–100 bp) repeated in tandem at specific chromosomal locations. The number of repeats varies between individuals, producing fragment-length patterns that are, for practical purposes, unique to each individual, on a Southern blot.',
      },
      {
        t: 'proc',
        title: 'Steps',
        steps: [
          '<b>Isolation:</b> DNA is extracted from the biological sample (blood, hair root, semen, bone).',
          '<b>Digestion:</b> Restriction enzyme cuts DNA in the flanking sequences on either side of the VNTR regions (enzymes that cut close to, but not inside, the repeat sequences are chosen).',
          '<b>Separation:</b> Fragments separated by agarose gel electrophoresis.',
          '<b>Transfer (Southern blotting):</b> DNA fragments transferred from the gel onto a nylon membrane.',
          '<b>Hybridisation:</b> Radiolabelled probe complementary to the VNTR sequence is applied; it binds only to matching VNTR fragments.',
          '<b>Autoradiography:</b> X-ray film exposed to the membrane shows bands where the probe hybridised. Each individual’s pattern is, for practical purposes, unique (except identical twins).',
          '<b>Interpretation:</b> Band patterns from crime scene and suspect are compared; band sharing indicates biological relationship or identity.',
        ],
      },
      {
        t: 'table',
        title: 'ELISA vs PCR diagnostics',
        head: ['Feature', 'ELISA', 'PCR'],
        rows: [
          ['Target', 'Protein (antigen/antibody)', 'DNA or RNA'],
          ['Principle', 'Antigen-antibody binding + enzyme colour reaction', 'Enzymatic amplification of a specific DNA sequence (RNA is first copied to DNA by reverse transcriptase)'],
          ['Time', 'Hours to overnight', '2–3 hours'],
          ['Sensitivity', 'Detects nanogram to picogram quantities', 'Detects femtogram quantities or less (much more sensitive)'],
          ['Application', 'Hepatitis, HIV (antibody test), pregnancy', 'Early infection, genetic disorders, pathogen DNA'],
          ['Specimen', 'Blood serum', 'Any tissue with DNA/RNA'],
        ],
      },
      {
        t: 'p',
        html: '<b>Transgenic animals.</b> Animals carrying a foreign gene integrated into their genome. Production uses: retroviral vectors, microinjection into zygote pronucleus, or embryonic stem cell transfection followed by blastocyst injection.',
      },
      {
        t: 'p',
        html: 'Applications: (i) Pharmaceuticals: transgenic goats produce human antithrombin in milk (ATryn); (ii) Disease models: knockout mice for cancer, diabetes research; (iii) Xenotransplantation: transgenic pigs being developed to provide organs for human transplant.',
      },
      {
        t: 'p',
        html: '<b>Ethical dimensions.</b> Three areas of concern:<br>1. <b>Biosafety concerns:</b> GM crops may have unknown allergenicity, horizontal gene transfer to non-target species, or ecological effects. Regulations require biosafety testing before field release.<br>2. <b>Biopiracy:</b> Corporations or researchers from developed nations patent indigenous biological resources and traditional knowledge from developing countries without fair compensation (e.g. neem, turmeric patents contested in India).<br>3. <b>Patenting life forms:</b> Whether genes, cell lines, or modified organisms can be legally patented; India enacted the Protection of Plant Varieties and Farmers’ Rights Act (2001) and the Biological Diversity Act (2002), which protect plant varieties and regulate access to biological resources with benefit sharing.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Gene Therapy for ADA Deficiency.</b> Describe the ex vivo approach used for gene therapy in ADA deficiency, name the vector employed, and state one limitation of this therapy.',
        steps: [
          '<b>Method:</b> Lymphocytes are removed from the patient’s blood and cultured in vitro. A functional ADA gene is introduced into these lymphocytes using a retroviral vector. The corrected cells are grown to large numbers and reinfused into the patient’s bloodstream. Optionally, bone marrow stem cells are targeted for a more permanent correction.',
          '<b>Vector:</b> Replication-defective retroviral vector (carries the ADA gene but cannot replicate on its own).',
          '<b>Limitation:</b> The retroviral vector may trigger an immune response against the viral proteins; also, the corrected lymphocytes may not survive permanently in the body, requiring repeated treatments.',
        ],
        ans: 'Ex vivo: lymphocytes harvested, ADA gene inserted via retroviral vector, cells reinfused; vector = retroviral; limitation = immune response to vector or temporary correction.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>DNA Fingerprinting Steps.</b> Arrange the following steps of DNA fingerprinting in the correct sequence: (1) hybridisation with labelled probe; (2) restriction digestion of DNA; (3) transfer of DNA to nylon membrane; (4) isolation of DNA from sample; (5) autoradiography.',
        steps: [
          '<b>Correct sequence:</b> Isolation of DNA → Restriction digestion → Separation by gel electrophoresis → Transfer to nylon membrane (Southern blot) → Hybridisation with labelled probe → Autoradiography.',
          '<b>Reasoning:</b> You must first have DNA to work with; the DNA must be cut into fragments of manageable size; the fragments must be separated before they can be transferred; transfer onto a solid support is required for hybridisation; hybridisation requires a probe; autoradiography reveals the result of hybridisation.',
        ],
        ans: '4 → 2 → 3 → 1 → 5 (in words: isolate → digest → [electrophorese, a step not listed in the question] → transfer → hybridise → autoradiograph).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>ELISA vs PCR.</b> HIV infection (leading to AIDS) can be diagnosed by both ELISA (antibody test) and PCR (viral load test). State two situations in which PCR would be preferred over ELISA.',
        steps: [
          '<b>Two situations:</b> (i) Early-stage infection: PCR can detect HIV genetic material within about 1–2 weeks of infection, before antibodies develop (window period), whereas ELISA requires weeks to months for detectable antibody levels. (ii) Monitoring disease progression: PCR (RT-PCR, which first copies the RNA into DNA) measures viral load (number of HIV RNA copies per mL of blood), which correlates with disease stage and treatment response; ELISA detects only the presence of antibodies, not the amount of virus.',
        ],
        ans: 'Early infection (window period) where antibodies are absent; and quantifying viral load for treatment monitoring.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Ethical Concern.</b> India enacted the Biological Diversity Act, 2002. State one purpose of this Act and one example of a biological resource over which biopiracy disputes have arisen involving India.',
        steps: [
          '<b>Purpose:</b> To regulate access to India’s biological resources by foreign individuals or organisations, and to ensure fair sharing of benefits arising from their commercial utilisation with local communities and traditional knowledge holders.',
          '<b>Example:</b> The neem (<i>Azadirachta indica</i>): a US company and the US government held a European patent on a neem-based fungicide, which Indian groups challenged on grounds of prior traditional knowledge (it was revoked in 2005). Similarly, basmati rice varieties and turmeric (<i>Curcuma longa</i>) have been the subject of patent disputes.',
        ],
        ans: 'Purpose = regulating foreign access to biological resources and benefit sharing; example = neem or turmeric patent disputes.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the vector used in the first approved human gene therapy case (ADA deficiency) and state whether the approach was ex vivo or in vivo.',
            a: 'Replication-defective retroviral vector; ex vivo approach (lymphocytes removed, corrected in vitro, reinfused).',
          },
          {
            q: '[NEET] Give two reasons why PCR is more sensitive than ELISA for early diagnosis of a viral infection.',
            a: '(i) PCR detects the viral genetic material itself (HIV RNA after reverse transcription, or proviral DNA), so it works during the window period before antibodies appear; (ii) PCR amplifies the target sequence exponentially, achieving detection at femtogram levels, far below the nanogram-to-picogram range of ELISA.',
          },
          {
            q: '[CUET] Name the repetitive DNA sequences used in DNA fingerprinting that show variation between individuals, and state the enzyme used to cut DNA near these sequences.',
            a: 'VNTR (Variable Number Tandem Repeats); restriction endonuclease (any enzyme that cuts in the flanking sequences on either side of the VNTR repeats).',
          },
          {
            q: '[NEET] State two applications of transgenic animals.',
            a: 'Production of pharmaceutical proteins in milk (e.g. human antithrombin from transgenic goats); disease models for research (e.g. knockout mice for cancer or diabetes studies).',
          },
          {
            q: '[CUET] Name the Indian law enacted to regulate access to India’s biological resources and the sharing of benefits with the local communities that hold traditional knowledge of them.',
            a: 'Biological Diversity Act, 2002.',
          },
          {
            q: '[NEET High-Difficulty] A DNA sample from a crime scene and blood samples from two suspects are processed by DNA fingerprinting. The crime-scene pattern matches suspect 1 in 7 of 10 bands. Suspect 2 shares all 10 bands with the crime scene. What conclusion can be drawn, and why?',
            a: 'Suspect 2 cannot be excluded: all 10 bands match the crime-scene profile, which is consistent with suspect 2 being the source (a profile is unique in practice, except for identical twins, but a match is strong evidence, not absolute proof). Suspect 1 is excluded as the source: 3 of the 10 bands do not match, and a profile from the same person matches at every band. The high (70 %) band sharing is not proof of identity; it suggests only that suspect 1 may be biologically related to the person who left the sample.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 524–533 ─────────────────────────
  {
    n: 'D',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'The NEET questions from this chapter fall into six recognizable shapes.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'How often it is tested', 'Evidence'],
        rows: [
          [
            'Restriction enzymes: nomenclature, first discovered, sticky vs blunt ends',
            '<b>Very high</b>',
            'Recent AIPMT and NEET papers',
          ],
          ['PCR: steps, temperatures, thermostable polymerase', '<b>Very high</b>', 'Recent AIPMT and NEET papers'],
          ['Gel electrophoresis: charge, size migration, visualization', '<b>High</b>', 'Recent NEET papers'],
          ['Cloning vectors: pBR322 features, <i>ori</i>, selectable markers', '<b>High</b>', 'Recent AIPMT and NEET papers'],
          ['Competence and transformation methods', '<b>Moderate</b>', 'Recent NEET papers'],
          ['Bioreactors and downstream processing', '<b>Moderate</b>', 'Recent NEET papers'],
          ['DNA isolation steps', '<b>Low–moderate</b>', 'Recent AIPMT and NEET papers'],
        ],
        note: 'The book’s estimate from past papers, not official figures. The book’s Evidence column listed exam years and sessions; they are not given here.',
      },
      {
        t: 'p',
        html: '<b>What this tells you:</b> The exam does not treat all sections equally. Restriction enzymes and PCR are rated Very high, gel electrophoresis and cloning vectors High, and competence, bioreactors and DNA isolation lower (the book’s estimate from past papers, not official figures). Revise those four first.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'The NEET questions from this chapter fall into <b>six recognizable shapes</b>. Each has a crack.',
      },
      { t: 'p', html: '<b>1. Fact/Definition (pure recall)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single-sentence question asking for a name, a function, or a value.<br>Example: “The first restriction endonuclease reported was…” or “During heat shock, the temperature used is…”<br><b>Approach:</b> These are recall marks: either you know the fact or you do not. Build a <b>one-line recall card</b> for each fact that appears in more than one question. The facts are fixed, though the wording of the question changes.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> During heat shock to make bacteria competent for transformation, the temperature used is:<br>(a) 52 °C<br>(b) 100 °C<br>(c) liquid nitrogen<br>(d) 42 °C',
        steps: [
          '<b>Solution:</b> Calcium-chloride–treated bacteria are given a brief heat shock at <b>42 °C</b> which is thought to open transient pores in the membrane through which recombinant DNA enters. The other options are distractors: 52 °C is not the heat-shock temperature; 100 °C would kill the cells; liquid nitrogen is for long-term storage.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>2. “Which statement is INCORRECT?” (statement trap)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of 3–4 statements where three are true and one is false, and you must identify the false one. These are extremely common in NEET papers (the book’s estimate from past papers, not official figures).<br><b>Approach:</b> Do not read all statements first. Read each option and <b>mark it TRUE or FALSE</b> as you go. The one you mark FALSE is your answer. Never assume “one wrong answer” without checking each one.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> Which of the following statements is <b>INCORRECT</b>?<br>(a) EcoRI cuts the DNA between bases G and A.<br>(b) Each EcoRI restriction endonuclease recognizes a specific palindromic nucleotide sequence in DNA.<br>(c) When cut by the same restriction enzyme, the resultant DNA fragments do NOT have the same kind of sticky ends.<br>(d) Making multiple identical copies of any template DNA is called cloning.',
        steps: [
          '(a) <b>TRUE:</b> EcoRI cuts between G and A in the sequence GAATTC.',
          '(b) <b>TRUE:</b> restriction enzymes are sequence-specific; EcoRI recognizes a palindrome.',
          '(c) <b>FALSE:</b> this is the incorrect statement. Fragments cut by the same restriction enzyme have complementary sticky ends, not different ones. That is the main reason for using one enzyme on both vector and insert (enzymes that leave compatible ends also work).',
          '(d) <b>TRUE:</b> cloning = making identical copies.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements labelled (A) and (R), with four answer choices about whether each is true and whether (R) explains (A). This format appears regularly in NEET papers from this chapter (the book’s estimate from past papers, not official figures).<br><b>Approach:</b> Evaluate (A) and (R) <b>independently first</b> before looking at the combinations. If (A) is false, the answer is one of the options that begins “A is false”; check (R) before choosing between them (depending on the paper, these are worded “A is false but R is true” or “both A and R are false”). A common trap is treating (b) (“both true but R not the correct explanation”) when R actually is the explanation.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> Assertion (A): Restriction endonucleases have been designated as molecular scissors. Reason (R): Fragments produced by restriction endonucleases upon mixing join due to their sticky ends.<br>(a) Both A and R are true and R is the correct explanation of A<br>(b) Both A and R are true but R is not the correct explanation of A<br>(c) A is true, R is false<br>(d) A is false, R is true',
        steps: [
          '<b>Solution:</b>',
          '(A) is <b>TRUE:</b> restriction endonucleases cut DNA at specific sites and are universally called molecular scissors.',
          '(R) is <b>TRUE:</b> sticky ends from the same enzyme are complementary and can base-pair, allowing ligation.',
          'Is R the correct explanation of A? No: the ability to cut cleanly at defined sites is what gives fragments compatible ends, but the statement made in R (joining due to sticky ends) describes what happens after cutting, not why the enzyme is called a scissors. The scissors analogy refers to the cutting, not the joining.',
        ],
        ans: '(b). Both are true, but R explains ligation (joining), not why the enzyme is called molecular scissors. The cutting action is what earns the name.',
      },

      { t: 'p', html: '<b>4. Match the Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns of terms/functions that must be paired. Typically 4 items per column. These appear regularly in NEET papers from this chapter (the book’s estimate from past papers, not official figures).<br><b>Approach:</b> Use <b>elimination by column</b>, not sequential matching. For each item in Column I, eliminate every Column II option that is clearly wrong before choosing. A useful three-bucket sort for this chapter’s tools:',
      },
      {
        t: 'table',
        title: null,
        head: ['Bucket', 'Contents'],
        rows: [
          ['Cut', 'Restriction endonuclease, exonuclease'],
          ['Join', 'DNA ligase'],
          ['Carry / Enter', 'Vector, Ca<sup>2+</sup>, microinjection, gene gun'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> Match the column:<br>Column I | Column II<br>A. Competent cells | I. <i>Thermus aquaticus</i><br>B. Taq DNA polymerase | II. Antibiotic<br>C. Ampicillin | III. Made by CaCl<sub>2</sub> and heat shock<br>D. Ethidium bromide | IV. DNA staining<br><br>Options:<br>(a) A–III, B–I, C–II, D–IV<br>(b) A–II, B–I, C–IV, D–III<br>(c) A–IV, B–I, C–III, D–II<br>(d) A–I, B–IV, C–II, D–III',
        steps: [
          '<b>Solution:</b>',
          '<b>B:</b> Taq DNA polymerase → comes from <i>Thermus aquaticus</i> → pair I. Eliminate (d), which pairs B with something other than I.',
          '<b>D:</b> Ethidium bromide → used for DNA staining → pair IV. Among the remaining options (a), (b) and (c), only (a) pairs D with IV.',
          '<b>A:</b> Competent cells → bacterial cells are made competent (able to take up DNA) by CaCl<sub>2</sub> treatment followed by heat shock → pair III.',
          '<b>C:</b> Ampicillin → an antibiotic used as selectable marker → pair II.',
        ],
        ans: '(a): A–III, B–I, C–II, D–IV',
      },

      { t: 'p', html: '<b>5. Diagram Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A figure of pBR322, a bioreactor, a PCR cycle, or a gel electrophoresis setup is shown with labelled parts (A, B, C, D). You must identify what each label represents.<br><b>Approach:</b> Memorize the <b>fixed landmark features</b> of each diagram:<br>• <b>pBR322:</b> <i>ori</i> at a specific position, <i>rop</i> nearby, <i>amp</i><sup>R</sup> and <i>tet</i><sup>R</sup> as two drug-resistance genes, BamHI site inside <i>tet</i><sup>R</sup>.<br>• <b>Stirred-tank bioreactor:</b> cylindrical vessel, curved base, stirrer shaft, air inlet (sterile air), pH probe, foam-control outlet.<br>• <b>PCR cycle:</b> three steps labelled A/B/C: denaturation (strands separate, ~94 °C), annealing (primers bind, ~40–60 °C), extension (Taq polymerase builds strand, ~72 °C).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> Which option correctly matches each part of a simple stirred-tank bioreactor with its function?<br>(a) Motor: turns the stirrer for mixing; pH probe: senses and controls pH; foam breaker: controls foam at the top; sterile-air inlet: supplies oxygen<br>(b) Motor: senses and controls pH; pH probe: turns the stirrer for mixing; foam breaker: controls foam at the top; sterile-air inlet: supplies oxygen<br>(c) Motor: turns the stirrer for mixing; pH probe: supplies oxygen; foam breaker: senses and controls pH; sterile-air inlet: controls foam<br>(d) Motor: controls foam; pH probe: senses pH; foam breaker: supplies oxygen; sterile-air inlet: turns the stirrer for mixing<br><br>In the exam the parts appear as labelled letters on a figure, so learn both the function and the usual position of each part.',
        steps: [
          '<b>Solution:</b>',
          'The <b>motor</b> drives the stirrer shaft, which mixes the culture, typically shown at the top centre.',
          'The <b>pH probe</b> (pH control) is a side probe that senses and adjusts the pH.',
          'The <b>foam breaker</b> (foam-control system) is at the top, because foam collects at the surface.',
          'The <b>sterile-air inlet</b> at the side or bottom supplies oxygen.',
          'Only option (a) pairs every part with its correct function.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>6. Critical-Thinking / Multi-Step Reasoning</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A scenario or mechanism is described, and you must apply the chapter’s logic to identify a consequence, a reason, or a best explanation. These are among the harder questions.<br><b>Approach:</b> Break the question into a <b>chain of steps</b> (cause → effect). Identify which step in the six-step workflow is being described, then apply the specific principle that governs that step.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Representative example:</b> A bacterial cell is transformed with a recombinant DNA carrying a human gene, yet it fails to produce the desired protein. The most likely reason is:<br>(a) the human gene lacks an origin of replication<br>(b) the human gene contains introns that bacteria cannot remove<br>(c) bacteria cannot take up human DNA<br>(d) DNA ligase is absent in bacteria',
        steps: [
          '<b>Solution:</b>',
          '(a) <b>Wrong:</b> the vector, not the gene, supplies the <i>ori</i>.',
          '(b) <b>Correct:</b> eukaryotic genes contain introns; prokaryotes lack RNA-splicing machinery. Bacteria transcribe the whole gene, introns included, but cannot splice out the introns, so the mRNA is not translated into the correct protein (this is why cDNA is used).',
          '(c) <b>Wrong:</b> transformation already occurred; the question states the cell is transformed.',
          '(d) <b>Wrong:</b> bacteria have DNA ligase; this is irrelevant to expression failure.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'NEET questions from this chapter are built around a set of specific confusions that students commonly make (the book’s estimate from past papers, not official figures). Memorize each one as a conditioned reflex.',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'Why it works', 'The correct answer'],
        rows: [
          [
            'Hind II vs EcoRI',
            'EcoRI is the enzyme most often used in textbook examples, so students pick it as “first discovered.”',
            'Hind II (first); EcoRI (most often illustrated)',
          ],
          [
            'DNA charge reversal',
            'Students half-remember “electric field” and guess positive charge.',
            'DNA is negative (phosphate backbone) → migrates to anode (+)',
          ],
          [
            '<i>amp</i><sup>R</sup> vs <i>tet</i><sup>R</sup> in pBR322',
            'Both are antibiotic markers; students reverse which one is inactivated by BamHI insertion.',
            'BamHI sits inside <i>tet</i><sup>R</sup>: insertion kills tetracycline resistance, not ampicillin',
          ],
          [
            'Same-enzyme rule for ligation',
            'Students know ligase joins DNA but forget the ends must be complementary.',
            'Vector and insert must be cut with the same restriction enzyme (or enzymes that leave compatible sticky ends) so the ends match',
          ],
          [
            'PCR primers = RNA',
            'Some biology courses teach that cellular DNA replication uses RNA primers, so students extend this to PCR.',
            'PCR primers are DNA oligonucleotides',
          ],
          [
            'Expression ≠ downstream processing',
            'Students confuse “making the protein” with “processing the product.”',
            'Expression happens during culture (upstream); downstream = separation, purification, formulation, QC',
          ],
          [
            'Competence = fast division',
            '“Competent” sounds like “competent at dividing.”',
            'Competence = ability to take up foreign DNA (increased membrane permeability via CaCl<sub>2</sub> + heat shock)',
          ],
          [
            'Eukaryotic gene in prokaryote = no product',
            'Students blame the vector or the bacteria.',
            'The real trap: a genomic gene’s introns, and no RNA splicing in prokaryotes',
          ],
          [
            'Blunt vs sticky ends',
            'Students confuse which cut produces overhangs.',
            'Staggered cut → sticky ends; straight cut → blunt ends',
          ],
          [
            'Stirred-tank shape',
            'Students picture a round flask.',
            'Stirred-tank bioreactors are cylindrical with a curved base for even mixing and O<sub>2</sub> distribution',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Questions are ordered easy → hard.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Q1: Easy (recall)] The first restriction endonuclease to be discovered was:<br>(a) EcoRI<br>(b) Hind II<br>(c) Hind III<br>(d) BamHI<br><b>Hint:</b> It was identified from <i>Haemophilus influenzae</i> before the EcoRI naming convention was even established.',
            a: '(b): Hind II (Hamilton Smith, 1970) was the first type II restriction endonuclease characterized. EcoRI is the enzyme most often illustrated, which is why students confuse “famous” with “first.” NCERT calls Hind II the first restriction endonuclease; strictly it is the first type II enzyme characterised (Smith, 1970; Nobel Prize 1978 with Arber and Nathans).',
          },
          {
            q: '[Q2: Easy (recall)] The enzyme used for joining two DNA fragments is:<br>(a) ligase<br>(b) restriction endonuclease<br>(c) DNA polymerase<br>(d) gyrase',
            a: '(a): DNA ligase forms phosphodiester bonds and is called “molecular glue.” Restriction endonucleases cut, not join; DNA polymerases extend; gyrase is a topoisomerase.',
          },
          {
            q: '[Q3: Easy–Medium (concept + recall)] Which of the following is used as selectable marker in genetic engineering?<br>(a) Antibiotic resistance genes<br>(b) Origin of replication<br>(c) Cloning sites<br>(d) Ethidium bromide',
            a: '(a): Antibiotic resistance genes (<i>amp</i><sup>R</sup>, <i>tet</i><sup>R</sup>) allow identification and elimination of non-transformants. <i>ori</i> controls replication; cloning sites are where insert is ligated; ethidium bromide is for visualization.',
          },
          {
            q: '[Q4: Medium (nomenclature)] In EcoRI, the letters “co” stand for:<br>(a) colon<br>(b) coelom<br>(c) coenzyme<br>(d) <i>coli</i>',
            a: '(d): EcoRI: <i>E</i> = <i>Escherichia</i> (genus), <i>co</i> = <i>coli</i> (species), R = strain RY13, I = first enzyme from that strain.',
          },
          {
            q: '[Q5: Medium (workflow + logic)] Arrange the following steps of recombinant DNA technology in the correct sequence:<br>1. Ligation into vector<br>2. Isolation of DNA<br>3. Insertion into host<br>4. Amplification by PCR<br>5. Cutting at specific sites<br>6. Downstream processing<br>(a) 2 → 5 → 4 → 1 → 3 → 6<br>(b) 2 → 4 → 5 → 1 → 3 → 6<br>(c) 2 → 5 → 1 → 3 → 4 → 6<br>(d) 2 → 1 → 5 → 4 → 3 → 6',
            a: '(a): Isolate DNA (must be pure before anything else) → Cut (restriction enzyme on both source DNA and vector) → Amplify (PCR makes enough copies of the gene) → Ligate (join fragment to vector) → Insert (into competent host) → Downstream (purify the product). The chain is: Isolate → Cut → Amplify → Ligate → Insert → Purify. (a) follows the order taught in this chapter; in the laboratory the PCR product is also cut before ligation, so answer in the chapter’s order.',
          },
          {
            q: '[Q6: Medium (reasoning)] In agarose gel electrophoresis, where will the smallest DNA fragments be found?<br>(a) Nearest the wells, at the cathode end<br>(b) Farthest from the wells, toward the anode<br>(c) They do not migrate<br>(d) Distributed evenly across the gel',
            a: '(b): Smaller fragments slip through the agarose mesh most easily and travel the greatest distance. DNA is negative → anode (+). Smaller = farther from wells. The mnemonic: “small and speedy.”',
          },
          {
            q: '[Q7: Medium (multi-concept)] A foreign gene is ligated into the BamHI site of pBR322 and the recombinant plasmid is introduced into <i>E. coli</i>. A colony that grows on ampicillin but fails to grow on tetracycline is:<br>(a) a non-transformant<br>(b) a transformant with non-recombinant plasmid<br>(c) a transformant with recombinant plasmid<br>(d) a cell that lost both resistance genes',
            a: '(c): The BamHI site lies inside the <i>tet</i><sup>R</sup> gene. Insertion disrupts <i>tet</i><sup>R</sup> → tetracycline resistance is lost (insertional inactivation). Ampicillin resistance is retained because <i>amp</i><sup>R</sup> is unaffected. Non-transformants die on ampicillin; non-recombinants keep both resistances and grow on tetracycline. The correct description: <i>amp</i><sup>R</sup>, <i>tet</i><sup>S</sup> = recombinant.',
          },
          {
            q: '[Q8: Medium–Hard (A–R)] Assertion (A): PCR uses a thermostable DNA polymerase such as Taq polymerase. Reason (R): The denaturation step of every PCR cycle is carried out at a high temperature that would inactivate an ordinary DNA polymerase.<br>(a) Both A and R true, and R is the correct explanation of A<br>(b) Both A and R true, but R is not the correct explanation of A<br>(c) A is true, R is false<br>(d) A is false, R is true',
            a: '(a): A is true. R is true and is exactly why thermostability matters: the denaturation step (~94 °C) would destroy an ordinary polymerase in the first cycle. Taq polymerase from <i>Thermus aquaticus</i> survives because it evolved in hot springs.',
          },
          {
            q: '[Q9: Hard (critical thinking)] A researcher cuts the source DNA with EcoRI but the vector with BamHI, then adds DNA ligase. What is the outcome?<br>(a) Ligation proceeds normally because ligase joins any ends<br>(b) Ligation fails or produces no correct recombinant<br>(c) The vector is amplified automatically<br>(d) Restriction enzymes are reused in the next step',
            a: '(b): EcoRI and BamHI produce different, non-complementary sticky ends (EcoRI: 5′–AATT overhang; BamHI: 5′–GATC overhang). DNA ligase cannot join incompatible ends. The vector and insert are normally cut with the same restriction enzyme (or with enzymes that leave compatible ends) so that the sticky ends match.',
          },
          {
            q: '[Q10: Hard (multi-step reasoning)] A student loads DNA samples into wells at the anode end of an agarose gel and runs electrophoresis. After staining with ethidium bromide and viewing under UV, no bands are visible. The most likely explanation is:<br>(a) Ethidium bromide does not bind DNA properly<br>(b) DNA is positively charged and migrated toward the cathode, off the gel<br>(c) DNA was loaded at the wrong end (anode) and ran off the gel<br>(d) The gel concentration was too high',
            a: '(c): DNA is negative → it migrates toward the anode (+). Loading at the anode end means the electric field pushes the DNA off the gel immediately instead of across it. No separation occurs. The student must load at the cathode (−) end. Note: if the student had mistakenly thought DNA is positive, (b) would be the tempting distractor, but the real mechanism is that DNA ran off, not that it migrated to the cathode.',
          },
        ],
      },

      { t: 'part', title: 'Values and Distinctions to Memorise' },
      {
        t: 'p',
        html: '1. <b>Exact values.</b> The chapter often states temperatures as ranges, but questions ask for one value. Learn: heat shock at <b>42 °C</b> (after CaCl<sub>2</sub> treatment, with the cells and DNA kept on ice first); PCR denaturation at <b>~94 °C</b>, annealing at <b>~40–60 °C</b>, extension at <b>~72 °C</b>. In standard PCR the highest temperature is denaturation.<br><br>2. <b>Two marker systems built on the same idea.</b> (NCERT calls both selectable markers; strictly they are screening steps that follow the antibiotic selection.) In pBR322, a gene inserted at the BamHI site inactivates <i>tet</i><sup>R</sup>; recombinants are ampicillin-resistant but tetracycline-sensitive (found by replica plating). In blue–white screening, a gene inserted into <i>lacZ</i> (β-galactosidase) stops the enzyme cleaving X-gal; recombinant colonies stay white and non-recombinants turn blue. In both, insertion switches a marker off; what differs is the marker and how recombinants are recognised.<br><br>3. <b>The eukaryotic-gene-in-prokaryote trap.</b> A human genomic gene that is transformed into bacteria but gives no protein fails because of introns plus the absence of RNA splicing in prokaryotes (a cDNA has no introns), not because of the vector, ligase or DNA uptake. Recognise this as a standard question type; it appears again and again in NEET papers (the book’s estimate from past papers, not official figures).',
      },
    ],
  },
];
