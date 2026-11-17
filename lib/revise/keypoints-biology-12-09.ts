/**
 * KEY POINTS for Biology Class 12, Chapter 9 (Biotechnology: Principles and
 * Processes).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 13 and 14 files:
 * every point is a question to answer in your head, then the answer and at most
 * one more line. Four kinds, each a section on the screen: Remember (two a
 * topic), Don't mix up, Common mistakes and Exam shortcuts (one each, from the
 * topic's Common student pitfalls and Pro-Tip); an Additional topic has two
 * points for its central results, except the last (What NEET Actually Asks),
 * which has one Remember and one Common mistakes. Memory lines are a fifth,
 * short section of their own, read rather than tested: the first two of each
 * topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to C are 4 to 6; D
 * (the book's Addendum P, What NEET Actually Asks) is 7. No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it stands;
 * the page (the bottom folio) is above each point. `say`: the cheat sheet's
 * memory aids, word for word, in the Chemistry form: no quotation marks and no
 * markup, the label ("Mnemonic:") turned into the arrow form where the aid
 * names what it holds. Each of Topics 01 to 04 prints one aid; Topic 03's holds
 * two lines (DNA to the anode; small fragments farthest), used as its two lines;
 * so the chapter has five lines. The Additional topics have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - the first recombinant DNA: the chapter's account (a resistance gene cut
 *   from a Salmonella typhimurium plasmid, joined to a vector plasmid, put into
 *   E. coli) is given as the chapter's account and dated "early 1970s", not
 *   "1972"; the 1973 paper and the source plasmids differ in the literature, so
 *   no year and no plasmid name beyond the chapter's is asserted;
 * - "first restriction endonuclease": Hind II is given as the first type II
 *   enzyme characterised (Hamilton Smith, from Haemophilus influenzae), not as
 *   the first of every kind of restriction enzyme; the Nobel trio (Arber,
 *   Nathans, Smith) is for restriction enzymes, 1978;
 * - recognition sequences are "usually palindromic", not a rule without
 *   exception; the heat shock is said to help the DNA enter, and the book's
 *   "creates transient pores" is not repeated as the mechanism;
 * - "a vector with two sites is destroyed" is not used: a circular vector cut
 *   at two sites gives two fragments, so it cannot serve as one intact carrier;
 * - insertional inactivation is worked out for the sites the brief names
 *   (BamHI and SalI inside the tetracycline gene, PstI and PvuI inside the
 *   ampicillin gene); a site's host gene decides which plate shows the
 *   recombinant, so no rule is given for the other sites;
 * - agarose is the gel the chapter uses for DNA; "acrylamide only" as a wrong
 *   option is not repeated, and "most common error" and "asked almost every
 *   year" are not repeated; the chapter's frequency remarks are the book's
 *   estimate from past papers, with no counts, shares or exam years;
 * - PCR: the temperatures are approximate (about 94, 40 to 60 and 72 degrees
 *   Celsius), the primers are short DNA oligonucleotides, and 2 to the power 30
 *   is about 1.07 x 10 to the power 9 in the ideal case;
 * - the Ti plasmid: the T-DNA is what transfers and its border sequences mark
 *   it, the vir genes drive the transfer, and the oncogenes cause the tumour;
 *   the book's two practice answers for "the part that transfers" (T-DNA
 *   region; T-DNA border sequences) are reconciled this way; "cereals are not
 *   hosts of Agrobacterium" is not repeated (the gene gun is described as a
 *   method that does not depend on the host's response to the bacterium);
 * - CaCl2 and heat shock is described for bacteria; "only for bacteria" is
 *   not claimed; electroporation is described for bacteria, yeast, plant
 *   protoplasts and animal cells, without the chapter's field-strength and pulse figures;
 * - retroviral vectors are said to integrate into the host DNA and to be made
 *   unable to replicate; which viral genes are removed is not itemised;
 * - ADA deficiency is given as the first human gene therapy (1990), with its
 *   limits (immune response to the vector, cells that may not persist, so
 *   repeat treatment); no cure or safety claim is made; ELISA against PCR is
 *   not given as femtogram against nanogram figures;
 * - DNA fingerprinting: a full match is consistent with the same person (and
 *   identical twins share a profile), a mismatch at any band excludes the
 *   sample, and partial band sharing points to a possible biological relation,
 *   not to identity; the five-step fingerprinting question omits
 *   electrophoresis, which the full sequence includes;
 * - biosafety and biopiracy: the points name the concerns and the Indian
 *   laws (the Protection of Plant Varieties and Farmers' Rights Act, 2001 and
 *   the Biological Diversity Act, 2002) without a claim that a crop or therapy
 *   is safe or unsafe; the neem and turmeric patents are "contested";
 * - the What NEET Actually Asks topic: the distribution is the book's estimate
 *   from past papers, with the exam years and the frequency labels' superlatives
 *   left out; "zero-reasoning marks", "always" and "the highest-difficulty
 *   questions" are not repeated; the book's Q1 stem "first restriction
 *   endonuclease" is read as the first type II enzyme characterised.
 *
 * Markup is the chapter's own: <i> for scientific names and gene symbols (amp,
 * tet, ori, rop, lacZ, vir; the superscript R italic), <sub> and <sup>, <b>
 * and <br> only where needed; no stacked fraction occurs; no em dash. A value
 * keeps its unit with a no-break space, and a range an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Principles of Biotechnology ──
  // pp. 480–481
  {
    topic: 0,
    kind: 'remember',
    q: 'What is biotechnology, and what are the two core techniques of the modern kind?',
    a: 'Biotechnology is the use of live organisms, or enzymes from them, to make products and run processes useful to humans. Curd, bread and wine are traditional biotechnology; recombinant insulin and vaccines are modern. Modern biotechnology rests on two techniques: genetic engineering (altering the genetic material and introducing it into a host to change its phenotype) and bioprocess engineering (keeping a sterile, contamination-free environment so that only the wanted cells grow in large quantity)',
    why: 'Both are biotechnology; the word modern points to the two techniques.',
    say: 'Genes + Growth = the two core techniques (Genetic engineering + bioprocess Growth/culture).',
  },
  // pp. 482–484
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the three steps of genetically modifying an organism, and why is an origin of replication needed?',
    a: 'Identify the DNA that carries the desirable gene; introduce that DNA into the host; maintain it in the host and pass it to the progeny. Alien DNA without an origin of replication (<i>ori</i>) cannot copy itself, so each cell division dilutes it and it is lost; that is why the gene is carried on a vector that has an <i>ori</i>',
    why: 'Delivery without maintenance fails, so all three steps must succeed for a stable genetically modified organism.',
    say: null,
  },
  // pp. 481, 484–486
  {
    topic: 0,
    kind: 'mixup',
    q: 'Cohen and Boyer, Arber, Nathans and Smith, or Mullis: who did what?',
    a: 'Stanley Cohen and Herbert Boyer made the first recombinant DNA molecule in the early 1970s. Werner Arber, Daniel Nathans and Hamilton Smith discovered and characterised restriction enzymes (Nobel Prize, 1978). Kary Mullis invented PCR. In the first experiment a restriction enzyme cut out a resistance gene, DNA ligase joined it to a plasmid vector, and the recombinant plasmid multiplied in a host, which is cloning',
    why: 'Each is a real contribution, so the wrong options pair a right name with the wrong discovery.',
    say: null,
  },
  // p. 485
  {
    topic: 0,
    kind: 'mistake',
    q: 'In the first recombinant DNA work, which organism gave the plasmid and which was the host?',
    a: 'In the chapter’s account the resistance gene was cut from a plasmid of <i>Salmonella typhimurium</i>, joined to a vector plasmid, and the recombinant plasmid was then introduced into <i>E. coli</i>, where it multiplied. <i>E. coli</i> is the host that cloned the DNA, not the source. A second slip is naming only genetic engineering: bioprocess engineering is the second core technique',
    why: 'Source of the gene and host that copies it are different organisms here.',
    say: null,
  },
  // p. 485
  {
    topic: 0,
    kind: 'shortcut',
    q: 'How do you answer most short questions on this topic in one line?',
    a: 'Two techniques (genetic engineering and bioprocess engineering), one founding experiment (Cohen and Boyer), three steps (identify, introduce, maintain and pass on). Test a recalled fact against that line before choosing an option',
    why: 'If an option names a third core technique or a different founding pair, it breaks the line.',
    say: null,
  },

  // ── Topic 02 · Tools of Recombinant DNA ──
  // pp. 488–491
  {
    topic: 1,
    kind: 'remember',
    q: 'Which tool cuts, which joins, and how do sticky ends form?',
    a: 'A restriction endonuclease cuts DNA inside the molecule at a specific recognition sequence, usually a palindrome (EcoRI: 5′–GAATTC–3′ over 3′–CTTAAG–5′). It cuts both strands, at displaced positions between G and A, so each end keeps a short single-stranded overhang (AATT): a sticky end. A straight cut gives blunt ends. DNA ligase joins fragments by a phosphodiester bond. Exonucleases remove nucleotides from the ends; alkaline phosphatase removes the 5′ phosphate; lysozyme, cellulase and chitinase lyse bacterial, plant and fungal cell walls',
    why: 'Cut vector and insert with the same enzyme, so the overhangs match and ligase can seal them. Enzymes that leave compatible ends also match, but the chapter’s rule is the same enzyme for both.',
    say: 'Cut Same, Stick Same: cut vector + insert with the same enzyme so their sticky ends match.',
  },
  // pp. 488–490
  {
    topic: 1,
    kind: 'remember',
    q: 'What must a cloning vector have, and what does pBR322 carry?',
    a: 'An origin of replication (<i>ori</i>), which starts replication and sets copy number; a selectable marker, such as an antibiotic-resistance gene; a cloning site, ideally a single site for the enzyme used; and a small size. pBR322 carries <i>ori</i>, <i>rop</i>, <i>amp</i><sup>R</sup> and <i>tet</i><sup>R</sup>, with unique sites for enzymes such as EcoRI, HindIII, BamHI, SalI, PstI and ClaI. The Ti plasmid of <i>Agrobacterium tumefaciens</i>, disarmed, serves plant cells; disarmed retroviruses serve animal cells',
    why: 'A vector with two sites for the enzyme is cut into two pieces, so it cannot serve as one intact carrier.',
    say: null,
  },
  // pp. 488, 494–495
  {
    topic: 1,
    kind: 'mixup',
    q: 'Hind II or EcoRI: which was first, and how is the name EcoRI built?',
    a: 'Hind II was the first type II restriction enzyme characterised; EcoRI is the one most often drawn, which is why it gets picked. In EcoRI, E is the genus <i>Escherichia</i>, co the species <i>coli</i>, R the strain (RY13) and I the order of identification (first)',
    why: 'First is not the same as famous: Hind II first, EcoRI illustrated.',
    say: null,
  },
  // pp. 491, 493, 495
  {
    topic: 1,
    kind: 'mistake',
    q: 'A gene is cloned into the BamHI site of pBR322: which plate shows the recombinant?',
    a: 'The BamHI site lies inside the tetracycline-resistance gene, so an insert there breaks it (insertional inactivation). The recombinant grows on ampicillin and fails on tetracycline: ampicillin-resistant, tetracycline-sensitive. Cells with no plasmid die on ampicillin; cells with a plasmid and no insert grow on both. An insert at PstI or PvuI, inside the ampicillin gene, reverses the result',
    why: 'Insertion switches off the marker whose gene holds the site, and the other marker stays on.',
    say: null,
  },
  // pp. 491, 495
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you sort a “which tool?” option, and which method enters which host?',
    a: 'Put it in one of three buckets first: cut (restriction enzyme, exonuclease), join (ligase), or carry and enter (vector, CaCl<sub>2</sub>, microinjection). For entry, match the host: bacteria take up DNA after CaCl<sub>2</sub> treatment, cooling on ice and a brief heat shock at 42 °C; an animal cell nucleus takes microinjection or a disarmed retrovirus; plant cells take a gene gun (DNA on gold or tungsten particles) or a disarmed Ti plasmid',
    why: 'DNA is hydrophilic and the membrane is hydrophobic, so the host must be made competent or the DNA forced in.',
    say: null,
  },

  // ── Topic 03 · Separation and Isolation of DNA Fragments (Gel Electrophoresis) ──
  // pp. 496–498
  {
    topic: 2,
    kind: 'remember',
    q: 'Which way does DNA move in a gel, and which fragments travel farthest?',
    a: 'DNA is negatively charged (its phosphate backbone), so in an electric field it moves toward the anode (+). The samples are loaded in wells at the cathode (−) end. The agarose gel, a polysaccharide from seaweed, is a sieve, so smaller fragments travel farther and larger ones stay nearer the wells. Fragments have about the same charge for their mass, so size is the main sorting variable',
    why: 'Wells at the negative end let the DNA run the whole length of the gel.',
    say: 'Negatives chase the positive (DNA → anode).',
  },
  // pp. 497–500
  {
    topic: 2,
    kind: 'remember',
    q: 'How are the bands seen, and how is one fragment recovered?',
    a: 'DNA is colourless, so the gel is stained with ethidium bromide and viewed under UV light, where the DNA shows as bright orange bands. The wanted band is cut out of the gel and the DNA is extracted from the gel piece, which is elution. The eluted fragment goes on to ligation into a vector',
    why: 'Separation shows the fragments; elution turns one band into usable DNA.',
    say: 'Small and speedy (small fragments go farthest).',
  },
  // pp. 496, 502
  {
    topic: 2,
    kind: 'mixup',
    q: 'Agarose, ethidium bromide, UV light and elution: what does each do?',
    a: 'Agarose forms the sieving gel. Ethidium bromide binds the DNA. UV light makes the bound dye glow orange so the bands show. Elution recovers the DNA from a cut-out band. Cellulose and chitin are cell-wall polysaccharides met in the lysing step, not the gel matrix',
    why: 'Match each to its job: sieve, stain, light, recovery.',
    say: null,
  },
  // pp. 499, 502
  {
    topic: 2,
    kind: 'mistake',
    q: 'DNA loaded at the anode end shows no bands after the run: what went wrong?',
    a: 'DNA moves toward the anode, so a sample placed at the anode end runs straight off the gel and no bands form. It must be loaded in the wells at the cathode end. Two slips go with it: calling DNA positive, and saying that larger fragments travel farther',
    why: 'Negative DNA moves to the positive electrode, and the smaller fragment goes farther.',
    say: null,
  },
  // p. 502
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you compress the whole topic into one line?',
    a: 'Negative DNA runs to the positive anode; small runs far; stain with EtBr, see under UV. That line answers the direction, size, visualisation and charge questions without working them out again',
    why: 'Check an option against the four parts of the line before choosing.',
    say: null,
  },

  // ── Topic 04 · Processes of Recombinant DNA ──
  // pp. 503–505
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the order of the steps from DNA to product?',
    a: 'Isolate the DNA in pure form (lysozyme, cellulase or chitinase to open the cells, RNase to remove RNA, protease to remove protein, chilled ethanol to bring the DNA out as threads); cut it with a restriction enzyme (the vector and the source DNA with the same enzyme, or with enzymes that leave compatible ends); amplify the gene by PCR; ligate it into a vector; insert it into a competent host; obtain the product by culturing the host in a bioreactor; then downstream processing',
    why: 'You cannot cut impure DNA, amplify a fragment you do not yet have, or purify a product before the host makes it.',
    say: 'I Cut And Lift Into Plants Daily → Isolate, Cut, Amplify, Ligate, Insert, Product, Downstream.',
  },
  // pp. 504–507
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the three steps of a PCR cycle, and why is Taq polymerase used?',
    a: 'Denaturation at about 94 °C (the strands separate), annealing at about 40–60 °C (two primers bind their complementary regions), extension at about 72 °C (the polymerase builds the new strand). The reaction needs a DNA template, two primers, Taq polymerase and nucleotides. Taq polymerase comes from <i>Thermus aquaticus</i> and survives the near-boiling denaturation of every cycle, so it is added once. Ideally each cycle doubles the target: 30 cycles give about 2<sup>30</sup> ≈ 1.07 × 10<sup>9</sup> copies',
    why: 'An ordinary polymerase would be destroyed in the first denaturation.',
    say: null,
  },
  // pp. 504–505, 507–508
  {
    topic: 3,
    kind: 'mixup',
    q: 'Upstream or downstream: where do expression, the bioreactor and processing belong?',
    a: 'Expression of the gene happens while the host is cultured: on a small scale, then in a bioreactor (about 100–1000 L; stirred-tank, or sparged stirred-tank where sterile air is bubbled in), and a continuous culture, with spent medium drained as fresh medium is added, keeps the cells in the log phase. Downstream processing comes after: separation, purification, formulation with preservatives, clinical trials and quality control',
    why: 'Making the protein is upstream; processing the product is downstream.',
    say: null,
  },
  // p. 510
  {
    topic: 3,
    kind: 'mistake',
    q: 'What does PCR make, and are its primers RNA?',
    a: 'PCR makes copies of DNA in a test tube (in vitro); it does not make protein and does not need a living cell. Its two primers are short, chemically made DNA oligonucleotides, not RNA (RNA primers belong to the cell’s own DNA replication)',
    why: 'Amplifying DNA in vitro is different from cloning in a host and from expressing a protein.',
    say: null,
  },
  // pp. 509–511
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A human gene is transformed into bacteria but no correct protein appears: what is the likely cause?',
    a: 'Introns. A human genomic gene has introns, and bacteria lack the splicing machinery to remove them, so a correct mature protein is not made (a cDNA has no introns). The vector supplies the <i>ori</i>, uptake had already happened and ligase is not the issue. For temperature items keep the ladder 94, about 50, 72 (denature, anneal, extend); the highest value is denaturation',
    why: 'When the cell is transformed but no protein appears, think splicing before vector, uptake or ligase.',
    say: null,
  },

  // ── Additional A · Cloning Vectors: Beyond pBR322 ──
  // pp. 512–513
  {
    topic: 4,
    kind: 'remember',
    q: 'Which vector carries which size of insert, and which host does each use?',
    a: 'A plasmid such as pBR322 carries up to about 10 kb in <i>E. coli</i>; lambda phage about 10–25 kb; a cosmid about 30–45 kb; a BAC (F-factor based, in <i>E. coli</i>) about 100–300 kb; a YAC (telomeres, centromere and <i>ori</i>, in yeast) about 200 kb–2 Mb. Plasmids are too small for a genomic fragment, so cDNA, with the introns removed, is used there; BACs and YACs were developed to carry large genomic pieces',
    why: 'A 150 kb or 200 kb fragment points to a BAC; a fragment larger than about 300 kb to a YAC.',
    say: null,
  },
  // pp. 513, 515
  {
    topic: 4,
    kind: 'remember',
    q: 'How are the Ti plasmid and a retroviral vector made safe and useful?',
    a: 'In the disarmed Ti plasmid of <i>Agrobacterium tumefaciens</i> the tumour-causing oncogenes of the T-DNA are removed and the gene of interest takes their place; the <i>vir</i> genes that drive the transfer are kept, and the T-DNA, marked by its border sequences, integrates into a plant chromosome. A retroviral vector keeps the sequences it needs to integrate but cannot replicate, so it places the gene in the host DNA, and the gene is copied with the chromosome in each cell division',
    why: 'The part that transfers is the T-DNA; the oncogenes, which cause the tumour, are what is removed.',
    say: null,
  },

  // ── Additional B · Screening, Selection, and Gene-Delivery Methods ──
  // pp. 516–517, 513
  {
    topic: 5,
    kind: 'remember',
    q: 'How do selection and screening differ, and how does blue-white screening work?',
    a: 'Selection stops non-transformants from growing, for example plating on an antibiotic. Screening tests the colonies that did grow to find the recombinant, for example blue-white screening or colony hybridisation with a labelled probe. In blue-white screening the multiple cloning site lies inside <i>lacZ</i>; non-recombinants make β-galactosidase and turn blue on X-gal, while an insert breaks <i>lacZ</i> and the recombinant colony stays white',
    why: 'Antibiotic resistance is selection; <i>lacZ</i> disruption is screening (NCERT calls both selectable markers, so use its wording in a CBSE answer).',
    say: null,
  },
  // pp. 516–518
  {
    topic: 5,
    kind: 'remember',
    q: 'Which gene-delivery method fits which host?',
    a: 'CaCl<sub>2</sub> with heat shock suits bacteria. Electroporation, a brief high-voltage pulse that opens transient pores, is used for bacteria, yeast, plant protoplasts and animal cells. The gene gun fires DNA-coated gold or tungsten particles through plant cell walls. Microinjection puts DNA into the nucleus of an animal cell with a fine needle. <i>Agrobacterium</i> delivers T-DNA into plants, helped by phenolic signals such as acetosyringone from wounded tissue that switch on the <i>vir</i> genes',
    why: 'Match the method to the host first: bacterial, plant or animal.',
    say: null,
  },

  // ── Additional C · rDNA Applications and Ethical Dimensions ──
  // pp. 519–521
  {
    topic: 6,
    kind: 'remember',
    q: 'What is gene therapy, and how was ADA deficiency treated?',
    a: 'Gene therapy replaces a defective or missing gene with a working copy. Ex vivo, the patient’s cells are removed, given the gene by a retroviral vector in culture and returned; in vivo, the gene is delivered into the body itself. ADA deficiency, which causes severe combined immunodeficiency, was the first case (1990): lymphocytes were corrected ex vivo and reinfused. Limits include an immune response to the vector and corrected cells that may not persist, so treatment may need repeating',
    why: 'Ex vivo means the cells are altered outside the body and then put back.',
    say: null,
  },
  // pp. 520, 522–523
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the steps of DNA fingerprinting, and how is a profile read?',
    a: 'Isolate the DNA, cut it with a restriction enzyme, separate the fragments by gel electrophoresis, transfer them to a nylon membrane (Southern blot), hybridise with a labelled probe for the VNTR repeats, and read the bands by autoradiography. A sample is consistent with a person when every band matches (strong evidence, not absolute proof); a band that fails to match excludes the sample, and sharing only some bands points to a possible biological relation, not identity',
    why: 'VNTR repeat numbers differ between individuals, giving each person, in practice, a distinct band pattern, except identical twins.',
    say: null,
  },

  // ── Additional D · What NEET Actually Asks ──
  // pp. 524–529, 531–533
  {
    topic: 7,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and which question shapes return?',
    a: 'The book’s estimate from past papers, not official figures: restriction enzymes and PCR carry the heaviest emphasis, then gel electrophoresis and cloning vectors, with competence, bioreactors and DNA isolation lighter. Six shapes return: fact recall, the “which statement is incorrect” item, assertion–reason, match the column, diagram identification (pBR322, bioreactor, PCR cycle, gel) and multi-step reasoning. The values to hold: heat shock at 42 °C after CaCl<sub>2</sub> treatment and cooling on ice; PCR at about 94, 40–60 and 72 °C',
    why: 'Treat this as a guide to what to revise first, not a count of past questions.',
    say: null,
  },
  // pp. 529–530, 532
  {
    topic: 7,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'Hind II (first type II enzyme) against EcoRI (the one most drawn); DNA positive instead of negative; the insert inactivating the ampicillin gene instead of the tetracycline gene at BamHI; fragments joined although their ends do not match (the usual rule is the same enzyme for both); PCR primers called RNA; expression placed in downstream processing; competent read as dividing fast, when it means able to take up DNA; and a human gene failing in bacteria blamed on the vector instead of introns',
    why: 'A wrong option is often a true fact attached to the wrong tool, enzyme or step (the book’s estimate from past papers, not official figures).',
    say: null,
  },
];
