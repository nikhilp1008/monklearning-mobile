/**
 * KEY POINTS for Biology Class 12, Chapter 10 (Biotechnology and its
 * Applications).
 *
 * Written for test mode, in the form of the Biology 11 Chapter 14 file: every
 * point is a question to answer in your head, then the answer and at most one
 * more line. Four kinds, each a section on the screen: Remember (two a
 * topic), Don't mix up, Common mistakes and Exam shortcuts (one each, from the
 * topic's contrast table, its Common student pitfalls and its Pro-Tip); an
 * Additional topic has two Remember points for its central results, except the
 * last (What NEET Actually Asks), which has one Remember and one Common
 * mistakes. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 06 are 0 to 5; Additional topics A to E are 6 to 10;
 * F (the book's What NEET Actually Asks) is 11. No point refers to another
 * topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. `say`: the cheat
 * sheet's memory aids, word for word, no quotation marks and no markup, the
 * first two aids of each topic in the order the book prints them, set on the
 * Remember points. The Additional topics have none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - Bt cotton resists certain taxa, essentially the lepidopteran bollworms,
 *   not every pest and not every pesticide; no dipteran or coleopteran claim
 *   is made, and "Bt brinjal" and "the only Bt crop grown in India" (Additional
 *   topic F) are not used;
 * - the cry gene pairing is the cheat sheet's (cryIAc and cryIIAb for cotton
 *   bollworms, cryIAb for the corn borer); the example's "cry protein forms
 *   during sporulation" is not used, since the chapter says only that the
 *   crystals form during a particular phase of growth;
 * - insulin: no amino-acid count appears in the chapter, so none is given;
 *   the chains are said to be joined by disulphide bridges (the book's
 *   wording, no number), proinsulin as the A and B regions joined through the
 *   C-peptide in the middle; the 1983 Eli Lilly route NCERT describes made chains A and B in
 *   separate E. coli plasmids and joined them, with no proinsulin step (later
 *   industrial processes make proinsulin and cut out the C-peptide);
 * - gene therapy: the 1990 case is a first human gene therapy, ADA deficiency
 *   is given as the chapter gives it (deletion of the ADA gene), the cure is
 *   not permanent because the corrected lymphocytes die, and a lasting cure is
 *   said to need the gene put into early embryonic cells (the book's
 *   "marrow cells that make ADA" is kept as the chapter has it); "retrovirus
 *   only infects dividing cells" is given as true of the vector in this
 *   case, not of every retroviral vector;
 * - diagnosis: PCR amplifies a nucleic acid, and for an RNA virus such as HIV
 *   the RNA is first copied to DNA; "antigen–antibody, the answer is ELISA,
 *   every time" is given as the technique of this chapter that rests on it,
 *   and "pregnancy test kits" are not named as ELISA; the temperatures follow
 *   the Additional topic on PCR (94–98, 50–65 and 72 °C), the book's own
 *   figures, which differ a little from the ranges in the earlier chapter on
 *   biotechnology principles;
 * - ELISA: the book's four-step protocol is the indirect layout (known antigen
 *   coated, the sample's antibody bound), and direct and indirect are given as
 *   the book's table gives them, with "usually" where the book is flat; the
 *   stop reagent is not named;
 * - transgenic animals: about 95 per cent are mice (NCERT: more than 95 per
 *   cent); Rosie (1997) is the book's and NCERT's date and is kept as printed;
 *   the polio vaccine point says transgenic mice are being used and could
 *   replace monkeys, not that they have; the book's pronuclear microinjection
 *   for Rosie is given as the book's, since NCERT names no method;
 * - GEAC is given as the book and NCERT write it, Genetic Engineering
 *   Approval Committee, with the note that the body's official name is
 *   Appraisal Committee; the Indian Patents Bill is called India's amendment
 *   of its patent law, as the chapter puts it; "each individually patentable"
 *   and "the three faces of biopiracy" are not used as facts of law or of
 *   NCERT; the three patent cases are told without patent numbers, years or
 *   companies other than the ones the chapter names;
 * - What NEET Actually Asks: the distribution is the book's estimate from past
 *   papers, not official figures, and no share, no count and no exam year is
 *   given; "examiners swap these constantly", "the highest-yielding hard
 *   shape" and similar are not repeated.
 *
 * Markup is the chapter's own: <i> for scientific names and gene symbols,
 * <sup> and <sub>, no <frac> is needed (no fraction occurs), no em dash. A
 * value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Biotechnological Applications in Agriculture ──
  // pp. 536–538
  {
    topic: 0,
    kind: 'remember',
    q: 'Why does the Bt toxin not kill the bacterium or the cotton plant, and what switches it on?',
    a: '<i>Bacillus thuringiensis</i> (a bacterium, not a fungus) makes the toxin, a protein encoded by <i>cry</i> genes, as inactive crystals of protoxin. Inside the bacterium, and inside Bt cotton once the <i>cry</i> gene is put into the plant, it stays as harmless protoxin. It is switched on by the alkaline pH of the susceptible insect’s midgut, which dissolves the crystals and gives the active toxin. No alkaline gut means no activation',
    why: 'The safety of the whole system rests on this one conditional step: the activation happens in the insect gut.',
    say: 'Alkaline → Activate.',
  },
  // pp. 536–539
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the chain from the crystal to a dead bollworm, and which <i>cry</i> gene goes with which pest?',
    a: 'Crystal (inactive protoxin) → eaten with the plant → alkaline midgut dissolves it into active toxin → toxin binds the epithelial cells lining the midgut and forms pores → the cells swell and lyse → the insect dies. <i>cryIAc</i> and <i>cryIIAb</i> control cotton bollworms, and <i>cryIAb</i> controls the corn borer. Bt cotton resists certain taxa, essentially the lepidopteran bollworms, not every pest and not every pesticide. Beyond pest resistance, GM crops are used for tolerance of cold, drought, salt and heat, less pesticide, less post-harvest loss, better use of soil minerals and better nutrition (Golden Rice, rich in β-carotene)',
    why: 'Any option that breaks the chain, such as an acidic gut or a toxin active in the plant, is wrong.',
    say: 'crystal-eaten-alkaline-pores-dies.',
  },
  // pp. 537–539
  {
    topic: 0,
    kind: 'mixup',
    q: 'Bt cotton or RNA interference: what does the plant make and what does it do to the pest?',
    a: 'Bt: the plant makes a toxin protein (protoxin), which becomes active in the insect gut, forms pores and kills. RNAi: the plant makes RNA, not a toxin. Sense and antisense RNA for a nematode gene are made in the host cell (the construct is delivered with an <i>Agrobacterium</i> vector), pair into double-stranded RNA (dsRNA), and this silences the nematode’s matching mRNA, so the protein is not made. The pest in the example is <i>Meloidogyne incognita</i>, the root-knot nematode of tobacco. RNAi is a natural defence of eukaryotic cells against RNA viruses and mobile genetic elements, borrowed here',
    why: 'Bt is a pore-forming toxin, RNAi is gene silencing: do not let one mechanism leak into the other.',
    say: null,
  },
  // p. 542
  {
    topic: 0,
    kind: 'mistake',
    q: 'Which wrong statements about Bt keep appearing?',
    a: 'That the toxin kills the bacterium or harms the plant: inside both it is the inactive protoxin. That the activating gut is acidic: it is alkaline. That <i>Bacillus thuringiensis</i> is a fungus, or that the toxin is a polysaccharide: it is a bacterium and the toxin is a protein. That Bt cotton resists all pests or all pesticides: it resists certain taxa, essentially the bollworms',
    why: 'Anchor your answer on inactive protoxin, activated in the alkaline insect gut.',
    say: null,
  },
  // p. 542
  {
    topic: 0,
    kind: 'shortcut',
    q: 'What fixed chains settle a Bt or RNAi question?',
    a: 'Bt: crystal → eaten → alkaline → pores → dies. RNAi: sense + antisense → dsRNA → mRNA silenced → pest dies. A statement that breaks the chain (an acidic gut, a toxin active in the plant, a toxin said to kill any pest) is wrong',
    why: 'Run the chain in your head and cross out the option that changes a step.',
    say: null,
  },

  // ── Topic 02 · Genetically Engineered Insulin (Humulin) ──
  // pp. 544–546
  {
    topic: 1,
    kind: 'remember',
    q: 'How is insulin made in the body, and how did the first humulin avoid that route?',
    a: 'In the body the cell first makes proinsulin, one chain with the A and B regions connected through the C-peptide in the middle. The disulphide bridges form, then the C-peptide is removed, leaving chains A and B joined by disulphide bridges: mature insulin has no C-peptide. Eli Lilly (1983) did not go through proinsulin. Two DNA sequences, one for chain A and one for chain B, were put into plasmids of <i>E. coli</i>; the bacteria made the two chains separately; the chains were extracted, purified and joined by disulphide bonds to give humulin',
    why: 'The hard part for a bacterium was getting insulin assembled into its mature two-chain form.',
    say: 'Body removes C, Factory joins two.',
  },
  // pp. 543–546, 548
  {
    topic: 1,
    kind: 'remember',
    q: 'Why was insulin from animals unsatisfactory, and what does humulin give?',
    a: 'The pancreas of cattle and pigs holds a tiny amount of insulin, so supplying many patients meant slaughtering very large numbers of animals, and animal insulin is close to the human hormone but not the same, so some patients react to it as a foreign protein. Humulin (human + insulin), made in <i>Escherichia coli</i> in a bioreactor, gives two gains: scale (bacteria multiply without limit) and safety (the product is the human hormone). Insulin is a protein, so it is injected, not swallowed. NCERT counts about 30 recombinant therapeutics approved worldwide, about 12 marketed in India',
    why: 'Name the two gains separately in a long answer: quantity, and freedom from the foreign-protein reaction.',
    say: 'Humulin = human insulin.',
  },
  // pp. 544–546
  {
    topic: 1,
    kind: 'mixup',
    q: 'Natural insulin maturation or the Eli Lilly method: where is the C-peptide removed, and how do chains A and B end up joined?',
    a: 'Natural route: single-chain proinsulin, the C-peptide is removed, A and B stay joined by the disulphide bridges formed before the cut. Eli Lilly route (1983, as NCERT describes it): A and B made separately in <i>E. coli</i> and joined by creating disulphide bonds after extraction; there is no proinsulin and no C-peptide step in that method. The first is the body, the second is the factory',
    why: 'If an option puts “remove the C-peptide” into the industrial production steps, it is wrong.',
    say: null,
  },
  // p. 548
  {
    topic: 1,
    kind: 'mistake',
    q: 'Which statements about insulin lose marks?',
    a: 'Insulin is one chain: it is two chains, A and B, linked by disulphide bridges. The C-peptide is part of insulin: it is in proinsulin and absent from mature insulin. Insulin can be a tablet: it is a protein, digested in the gut, so it is injected. Eli Lilly removed the C-peptide: that is the body’s route',
    why: 'Two chains, no C-peptide in the finished hormone, and an injection.',
    say: null,
  },
  // p. 548
  {
    topic: 1,
    kind: 'shortcut',
    q: 'What is the production sequence for humulin, as a chain to check an option against?',
    a: 'Synthesise the genes → insert into <i>E. coli</i> plasmids → culture in a bioreactor → extract → purify → join the chains by disulphide bonds → humulin. The same clone-and-harvest logic makes human growth hormone (for dwarfism), TPA (to dissolve clots), interferon (antiviral) and α-1-antitrypsin (for emphysema)',
    why: 'An option that inserts “remove the C-peptide” anywhere in this chain is wrong.',
    say: null,
  },

  // ── Topic 03 · Gene Therapy ──
  // pp. 550–553
  {
    topic: 2,
    kind: 'remember',
    q: 'What was done in the first human gene therapy, and why was ADA the target?',
    a: 'Gene therapy corrects a gene defect by giving the patient a normal functional gene. In 1990 the first human gene therapy treated a girl with ADA deficiency, caused (as NCERT gives it) by deletion of the gene for adenosine deaminase (patients can also carry other mutations of the gene), an enzyme the lymphocytes need; its absence leaves no working immune defence (SCID, severe combined immunodeficiency). Steps (ex vivo): lymphocytes from the blood are grown in culture → a functional ADA cDNA, carried in a disarmed retrovirus, enters them → the corrected cells are infused back, where they make the enzyme',
    why: 'The whole story is one sentence: 1990, ADA gene deleted, SCID, lymphocytes cultured, cDNA via retrovirus, re-infused.',
    say: '1990, ADA, SCID.',
  },
  // pp. 550–553
  {
    topic: 2,
    kind: 'remember',
    q: 'Why was the 1990 treatment not a permanent cure, and how does gene therapy differ from enzyme replacement?',
    a: 'The corrected lymphocytes are not immortal. They die and are replaced by the body’s own cells, which still lack the gene, so the infusion has to be repeated. A lasting cure would need the functional gene in cells at an early embryonic stage (NCERT: a gene isolated from the marrow cells that make ADA), so that the cells descended from them carry it. Gene therapy supplies the gene, so the cell can keep making the enzyme; enzyme replacement supplies the finished enzyme, which is used up, so it is temporary, repeated and costly. Bone marrow transplantation helps too, but is not fully curative',
    why: 'It works best for single-gene (enzymatic or immunodeficiency) disorders; diseases of many genes are harder.',
    say: 'Therapy = gene, Replacement = product.',
  },
  // pp. 550–555
  {
    topic: 2,
    kind: 'mixup',
    q: 'Retrovirus, <i>Agrobacterium</i> or <i>E. coli</i>: which one carries a gene into which cell?',
    a: 'In the 1990 ADA case a disarmed retrovirus carried the functional ADA cDNA into human lymphocytes (other viral vectors, such as adenoviruses, are also used). <i>Agrobacterium</i> is the vector for plants (in the chapter, for the RNAi construct in tobacco). <i>E. coli</i> is a host, not a vector for human cells: its plasmids hold the insulin chains in the humulin method',
    why: 'Match the carrier to the target cell: human cell, plant cell, bacterial host.',
    say: null,
  },
  // p. 555
  {
    topic: 2,
    kind: 'mistake',
    q: 'Which claims about gene therapy are wrong?',
    a: 'That it is a one-shot permanent cure: the 1990 method was repeated because mature lymphocytes die. That ADA deficiency is a duplication or an insertion: the chapter gives deletion of the ADA gene. That gene therapy and enzyme replacement are the same: one supplies the gene, the other the product. That the vector for human lymphocytes is <i>Agrobacterium</i> (a plant vector) or <i>E. coli</i> (a host)',
    why: 'Say deletion, say not permanent, say gene against product.',
    say: null,
  },
  // p. 555
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you answer any ADA question quickly?',
    a: 'Hold the whole story as one sentence: 1990, ADA gene deleted → SCID → patient’s lymphocytes cultured → functional cDNA via retrovirus → re-infused, not permanent. Many exam questions are a slice of it: the year, the disorder, the vector, the cells, or why it is repeated',
    why: 'Find which slice the question asks for, then read the options against it.',
    say: null,
  },

  // ── Topic 04 · Molecular Diagnosis (Early Detection of Disease) ──
  // pp. 556–558
  {
    topic: 3,
    kind: 'remember',
    q: 'Why is molecular diagnosis needed, and what does PCR do?',
    a: 'By the time symptoms appear the pathogen is at a high concentration, and routine serum or urine analysis is not sensitive enough to catch the early, low-concentration stage. Molecular methods look for the pathogen’s nucleic acids or proteins at very low levels. PCR amplifies a nucleic acid, making many copies so that a trace becomes detectable. Uses in the chapter: HIV in suspected AIDS patients, mutations in the genes of suspected cancer patients, and many genetic disorders (for an RNA virus such as HIV the RNA is first copied to DNA)',
    why: 'PCR is the photocopier: it makes the signal big enough to see.',
    say: 'PCR = Photocopy & Reveal.',
  },
  // pp. 557–559
  {
    topic: 3,
    kind: 'remember',
    q: 'How does a probe find a gene, and what does a mutated gene look like on the film?',
    a: 'A probe is a single strand of DNA or RNA tagged with a radioactive (or fluorescent) molecule. It hybridises with its complementary sequence in a clone of cells, and the result is read by autoradiography, where the bound radioactive probe exposes photographic film. A mutated gene no longer matches, so the probe cannot pair with it and the clone gives no spot',
    why: 'A spot means the normal sequence is present; no spot means the sequence has changed.',
    say: 'Probe is single, mutant gives no spot.',
  },
  // pp. 557–561
  {
    topic: 3,
    kind: 'mixup',
    q: 'PCR, probe or ELISA: what is each looking for, and on what principle?',
    a: 'PCR: a nucleic acid (DNA, or RNA copied to DNA), by amplification. Probe with autoradiography: a specific gene or mutation, by complementary base pairing and a radioactive tag. ELISA (enzyme-linked immunosorbent assay): a protein antigen of the pathogen, or the antibodies the body made against it, by antigen–antibody interaction. ELISA does not read the gene itself, so it answers a different question from PCR or a probe',
    why: 'Decide by the target: gene, mutation or viral DNA means PCR or a probe; protein or antibody means ELISA.',
    say: null,
  },
  // p. 561
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which statements about these three techniques are wrong?',
    a: 'That a probe is double-stranded: it is single-stranded DNA or RNA with a tag. That the mutated gene lights up: the mutated clone gives no spot. That ELISA amplifies DNA: it does not, PCR does. That ELISA detects antigens alone: it detects antigens or the antibodies made against the pathogen',
    why: 'Probe single, mutant dark, ELISA both antigen and antibody.',
    say: null,
  },
  // p. 561
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you pick the technique from the question?',
    a: 'Read the target. A gene, a mutation or viral DNA points to PCR or a probe; a protein or an antibody points to ELISA. If a question names antigen–antibody interaction, among these three techniques it is ELISA',
    why: 'Other immunological tests also rest on antigen–antibody binding, so use this rule within this chapter’s three.',
    say: null,
  },

  // ── Topic 05 · Transgenic Animals ──
  // pp. 562–563
  {
    topic: 4,
    kind: 'remember',
    q: 'What makes an animal transgenic, and which animal is it most often?',
    a: 'A transgenic animal has had its DNA manipulated to possess and express an extra, foreign gene (a transgene) that is passed on. Rats, rabbits, pigs, sheep, cows and fish have been made transgenic, but about 95 per cent of existing transgenic animals are mice (NCERT: more than 95 per cent), because mice are small, breed fast and have a well-characterised genome. Selective breeding does not make an animal transgenic',
    why: 'The foreign gene must be introduced deliberately and expressed.',
    say: '95% mice.',
  },
  // pp. 562–565
  {
    topic: 4,
    kind: 'remember',
    q: 'What are Rosie and the sheep known for?',
    a: 'Rosie, described as the first transgenic cow (1997), made milk containing human α-lactalbumin (about 2.4 g L<sup>−1</sup>), more balanced for a human baby than cow’s milk. Transgenic sheep carrying the human α-1-antitrypsin gene make that protein, the one NCERT names for treating emphysema. Both are the use called biological products: complex human proteins made in an animal, some harvested from milk',
    why: 'Rosie → cow → α-lactalbumin; sheep → α-1-antitrypsin → emphysema.',
    say: 'Rosie cow → α-lactalbumin; sheep → α-1-antitrypsin.',
  },
  // pp. 562–567
  {
    topic: 4,
    kind: 'mixup',
    q: 'Which products belong to transgenic animals, and which do not?',
    a: 'Transgenic animals give α-lactalbumin in cow’s milk (Rosie) and α-1-antitrypsin from sheep, and are models of disease and tools to test safety. The Bt toxin comes from a plant made transgenic and humulin from bacteria, so neither is a transgenic-animal product. Keep each animal with its product',
    why: 'Check the host organism first: plant, bacterium or animal.',
    say: null,
  },
  // p. 567
  {
    topic: 4,
    kind: 'mistake',
    q: 'Which statements about transgenic animals are wrong?',
    a: 'That selective breeding gives a transgenic animal: it needs a deliberately introduced foreign gene that is expressed. That the share of mice is 50 or 100 per cent: it is about 95 per cent. That Rosie made α-1-antitrypsin or the sheep made α-lactalbumin: the products are the other way round. That Bt toxin or humulin are products of transgenic animals: they are not',
    why: 'The cow is α-lactalbumin, the sheep is α-1-antitrypsin.',
    say: null,
  },
  // pp. 563–567
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you recall the five uses of transgenic animals?',
    a: 'Physiology – Disease – Products – Vaccine – Toxicity (P-D-P-V-T): (1) study of normal physiology and development, such as how genes are regulated; (2) models of human diseases (cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer’s); (3) biological products (α-1-antitrypsin, Rosie’s milk); (4) vaccine safety, where transgenic mice are being used to test the polio vaccine and could replace monkeys; (5) chemical safety, where animals made more sensitive to toxins give results faster',
    why: 'Pin the two named animals to the Products letter.',
    say: null,
  },

  // ── Topic 06 · Ethical Issues, Biopiracy & GEAC ──
  // pp. 568–570
  {
    topic: 5,
    kind: 'remember',
    q: 'What are a biopatent, biopiracy and bioethics?',
    a: 'A biopatent is a patent, a right granted by the government, over biological entities and products from them (the chapter lists microbial strains, cell lines, GM plants and animals, DNA sequences, proteins and biotechnological processes; whether a claim is granted depends on national law). Biopiracy is the use of bioresources, or the appropriation of traditional knowledge, by companies or organisations without proper authorisation from the countries and people concerned and without compensatory payment. Bioethics is the branch of ethics that deals with the biological sciences',
    why: 'The three are a right, a misuse and a study, and the keywords separate them.',
    say: 'Patent = right, Piracy = theft, Ethics = study.',
  },
  // pp. 568–570
  {
    topic: 5,
    kind: 'remember',
    q: 'What is GEAC, and why was it set up?',
    a: 'Genetic modification of organisms can have unpredictable results when they enter the ecosystem, so India constituted the GEAC, the Genetic Engineering Approval Committee as the book and NCERT write it (the body’s official name is Genetic Engineering Appraisal Committee). It decides the validity of GM research and the safety of introducing GM organisms for public services, for example approval of large-scale field trials and release of transgenic crops',
    why: 'GEAC rules on GM safety and approval, before release.',
    say: 'GEAC = GM gatekeeper.',
  },
  // pp. 568–570
  {
    topic: 5,
    kind: 'mixup',
    q: 'GEAC or the patent law: which handles GM safety and which handles ownership of living things?',
    a: 'GEAC handles GM safety and approval (research validity and release of GM organisms). Ownership, patent terms and the response to biopiracy belong to patent law: the chapter says India took this step through the second amendment of the Indian Patents Bill, with provisions on patent terms, emergency provisions and research and development initiatives. GEAC does not deal with patents',
    why: 'Two worries, two bodies: ecological risk goes to GEAC, fairness over patents to the law.',
    say: null,
  },
  // p. 573
  {
    topic: 5,
    kind: 'mistake',
    q: 'Which biopiracy examples and definitions do students mix up?',
    a: 'The three Indian cases: turmeric, with its wound-healing use, the patent granted to a US university; neem (<i>Azadirachta indica</i>), with its fungicidal and medicinal properties; Basmati rice, a rice variety patented by a foreign company. Biopiracy is not legal or fair by definition: it lacks authorisation and compensation. Do not swap the definitions of biopatent (a right granted), biopiracy (unauthorised use) and bioethics (the study)',
    why: 'Pair each resource with its use or kind: turmeric heals wounds, neem fights fungi, Basmati is a rice.',
    say: null,
  },
  // p. 573
  {
    topic: 5,
    kind: 'shortcut',
    q: 'How do you match a definition to GEAC, biopatent or biopiracy?',
    a: 'Match the keyword. “Without authorisation or compensation” means biopiracy; “right granted” means biopatent; “GM safety or approval” means GEAC',
    why: 'These are marks you get by reading one phrase of the stem.',
    say: null,
  },

  // ── Additional A · ELISA: The Full Protocol, Two Formats, and the Antigen-Trapping Step ──
  // pp. 574–575
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the steps of the ELISA protocol, and why does the well turn coloured?',
    a: 'The book’s four steps, in the indirect layout: (1) coat a polystyrene well with the antigen of known identity (or antibody), which sticks to the plastic; (2) block the unfilled sites with a non-specific protein such as bovine serum albumin; (3) add the patient’s sample, so that the complementary antibody (or antigen) binds; (4) add an enzyme-linked antibody that recognises the bound molecule, then a colourless substrate, which the enzyme changes to a coloured product, and read the colour. Alkaline phosphatase and horseradish peroxidase are common enzymes, and the colour intensity tracks the amount bound',
    why: 'Blocking is there so that the detection reagent does not stick to the plastic.',
    say: null,
  },
  // pp. 575–576
  {
    topic: 6,
    kind: 'remember',
    q: 'How do direct, indirect and antigen-trapping (sandwich) ELISA differ?',
    a: 'Direct ELISA uses one antibody, enzyme-linked and specific to the antigen, so it is usually used for antigens. Indirect ELISA uses two: the sample’s own antibody binds the coated antigen and an enzyme-linked secondary antibody then recognises it; several secondaries can bind one primary, which amplifies the signal, and it is usually the format for antibodies, as in HIV screening. In antigen-trapping (double-antibody sandwich) ELISA, the well is coated with a capture antibody, the antigen from the sample is trapped between it and a second enzyme-linked antibody, and the antigen need not be purified first',
    why: 'Count the antibodies: one is direct, two is indirect, and a coated antibody that traps the antigen is the sandwich.',
    say: null,
  },

  // ── Additional B · How Transgenic Animals Are Produced: Three Methods ──
  // pp. 577–578
  {
    topic: 7,
    kind: 'remember',
    q: 'What are the three methods of making a transgenic animal, and where does each one put the DNA?',
    a: 'Microinjection: a DNA construct is injected with a fine pipette into the male pronucleus of a fertilised egg (zygote), which goes to a surrogate mother; integration is at random and this is the method for most transgenic mice. Retroviral infection: cultured cells of an early embryo (blastocyst) are infected with a recombinant retrovirus and put back into a blastocyst; the animal is a chimera and the site is random. Embryonic stem (ES) cell method: ES cells from the inner cell mass take up the gene in culture, are screened, and are injected into a host blastocyst; the gene can be placed at a chosen site by homologous recombination, so it is the method for knock-out and knock-in mice',
    why: 'Zygote means microinjection; blastocyst cells with a virus mean the retroviral method; a targeted gene means ES cells.',
    say: null,
  },
  // pp. 577–579
  {
    topic: 7,
    kind: 'remember',
    q: 'Why does the offspring of such an animal not always carry the transgene, and why are most transgenic animals mice?',
    a: 'In microinjection the DNA integrates at random, so the book gives about 10–30 per cent of offspring as carrying the transgene and expression varies with the integration site; a chimera passes the gene on only if the modified cells reach the germ line. Mice are small and cheap to keep in numbers, have a short breeding cycle (gestation about 19–21 days) and a well-characterised genome, which is why about 95 per cent of transgenic animals are mice. The book gives pronuclear microinjection for Rosie (1997); NCERT itself names no method',
    why: 'A transgene reaches the next generation through the germ line.',
    say: null,
  },

  // ── Additional C · PCR: The Three-Step Thermal Cycling Recipe ──
  // pp. 580–581
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the three steps of a PCR cycle and their temperatures?',
    a: 'Denaturation at 94–98 °C: the double-stranded DNA is heated and its strands separate as the hydrogen bonds between bases break. Annealing at 50–65 °C: the two primers bind to their complementary sequences flanking the target, and longer or GC-richer primers need a higher temperature. Extension at 72 °C: the heat-stable DNA polymerase builds the new strand from each primer, adding nucleotides in the 5′ → 3′ direction. The cycle is repeated about 25–35 times. These ranges are this chapter’s (Chapter 9 gives about 94, 40–60 and 72 °C)',
    why: 'Strands apart when hot, primers on when cooler, copy at the polymerase’s optimum.',
    say: null,
  },
  // pp. 581–582
  {
    topic: 8,
    kind: 'remember',
    q: 'Why is Taq polymerase used, and how many copies does PCR give?',
    a: 'The denaturation step would destroy an ordinary polymerase such as the <i>E. coli</i> enzyme, which is heat-labile. Taq polymerase, from the thermophilic bacterium <i>Thermus aquaticus</i> of hot springs, is heat-stable and stays active through the cycles. A reaction needs template DNA, two primers (forward and reverse), Taq polymerase, the four dNTPs and a buffer with Mg<sup>2+</sup>. Each cycle doubles the target, so after <i>n</i> cycles there are 2<sup><i>n</i></sup> copies in theory: 25 cycles from one molecule give 2<sup>25</sup> = 33,554,432, about 3.36 × 10<sup>7</sup>',
    why: 'The two primers flank the target, so the region from one primer to the other, including both primers, is the part that is copied.',
    say: null,
  },

  // ── Additional D · Gene Therapy Vectors and the Ex Vivo versus In Vivo Distinction ──
  // pp. 583–584
  {
    topic: 9,
    kind: 'remember',
    q: 'What is the difference between the ex vivo and the in vivo approach, and which disease goes with each?',
    a: 'Ex vivo: the patient’s cells are removed, given the functional gene in culture, checked, and returned. It suits cells that can be harvested and re-infused, such as blood lymphocytes in ADA deficiency (the vector was a retrovirus). In vivo: the vector carrying the gene is delivered straight into the body, which is needed when the target cells cannot be taken out and put back, such as the lung epithelium in cystic fibrosis, for which an adenovirus is the vector commonly proposed',
    why: 'Ask whether the target cells can be removed, cultured and returned.',
    say: null,
  },
  // pp. 584–585
  {
    topic: 9,
    kind: 'remember',
    q: 'How do retroviral, adenoviral and liposome vectors compare?',
    a: 'Retrovirus: an RNA virus, disarmed, whose DNA copy integrates into the host genome (a provirus), giving long-term expression, but integration at a random site can cause insertional mutagenesis; the retroviral vector of this case suits dividing cells such as lymphocytes. Adenovirus: a DNA virus that stays outside the host chromosomes (episomal), so expression is transient, it can reach non-dividing cells such as lung epithelium, and its strong immune response limits repeat dosing. Liposomes: lipid vesicles that carry the DNA into the cell, non-viral with low immunogenicity but low transfection efficiency, used experimentally',
    why: 'Integration is the trade: lasting expression against the risk of insertional mutagenesis.',
    say: null,
  },

  // ── Additional E · Biopiracy: The Legal Framework, Specific Patents, and India’s Defences ──
  // pp. 586–587
  {
    topic: 10,
    kind: 'remember',
    q: 'How did India answer the turmeric, neem and Basmati patents?',
    a: 'Turmeric (<i>Curcuma longa</i>): a US patent on its wound-healing use was challenged by citing ancient Ayurvedic texts as prior art, evidence that the use was known long before the filing, and it was revoked for lack of novelty. Neem (<i>Azadirachta indica</i>): a European patent on a fungicidal use of a neem extract was challenged on the ground of long Indian use and revoked by the European Patent Office. Basmati: a US company’s patent on Basmati lines was taken up through diplomatic and legal channels and several claims were withdrawn or narrowed. The core elements are taking a resource or knowledge freely held for centuries, patenting it as a novel invention, and gaining exclusive rights without sharing benefits',
    why: 'Prior art, evidence that the knowledge was already public, is the defence that works against these patents.',
    say: null,
  },
  // pp. 587–589
  {
    topic: 10,
    kind: 'remember',
    q: 'What are the Biological Diversity Act, the TKDL and the Nagoya Protocol?',
    a: 'The Biological Diversity Act, 2002, gives effect to the Convention on Biological Diversity: it provides for conservation, sustainable use and fair and equitable sharing of benefits, and requires approval of the National Biodiversity Authority for access by foreigners. The Traditional Knowledge Digital Library (TKDL) records knowledge from Ayurveda, Unani, Siddha and Yoga in a form that patent examiners can search, so it serves as prior art and lets a claim be spotted before a patent is granted. The Nagoya Protocol supplements the Convention on Biological Diversity with rules for access to genetic resources and benefit sharing with the provider, and India is a Party',
    why: 'The TKDL moves the defence earlier, from revoking a patent after grant to refusing the application.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 590–592
  {
    topic: 11,
    kind: 'remember',
    q: 'Which parts of the chapter come back in questions, and in what six shapes?',
    a: 'The distribution is the book’s estimate from past papers, not official figures. It puts Bt toxin and Bt cotton at the top, then humulin and transgenic animals with GEAC and biopiracy at about the same level, then ADA gene therapy, then molecular diagnosis, with RNAi and Golden Rice in the smallest share. Six shapes recur: a one-line fact or expansion; a mechanism to trace step by step (Bt, RNAi, humulin); a trap pair (Bt against RNAi, the two insulin routes, biopatent against biopiracy); a list of statements to judge one by one; assertion–reason (judge each part, then the link); and a labelled diagram of proinsulin maturation (the B region, the C-peptide in the middle and the A region, with the C-peptide cut out by peptidases to give insulin)',
    why: 'Use the weighting to decide what to revise first, not as a count of past questions.',
    say: null,
  },
  // pp. 592–599
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which wrong options does this chapter plant?',
    a: 'An acidic stomach activating the protoxin: the alkaline midgut does. Bt and RNAi swapped: Bt is a pore-forming toxin, RNAi is dsRNA silencing. “Remove the C-peptide” inside the Eli Lilly method, and <i>Agrobacterium</i> as its host: the method made chains A and B in <i>E. coli</i> plasmids and joined them. Rosie’s milk called “enriched” without the protein: it carries human α-lactalbumin. Bt cotton said to resist any pest: it protects against the cotton bollworms, which are lepidopterans. Biopatent and biopiracy swapped. Selective breeding called transgenic. A double-stranded probe. The cry pairing: <i>cryIAc</i> and <i>cryIIAb</i> for cotton bollworms, <i>cryIAb</i> for the corn borer. GEAC: the book and NCERT expand it as Genetic Engineering Approval Committee (the official name is Appraisal Committee); the wrong options swap in Action, Advisory or Environment',
    why: 'Each is a pair in which one fact is swapped, so check the pair before the option.',
    say: null,
  },
];
