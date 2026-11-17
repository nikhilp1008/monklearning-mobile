import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 9 (Biotechnology: Principles and Processes), Topics 01 to 03:
 * pp. 480 to 502 of the Class 12 Biology Master Reference, word for word. The chapter
 * title page and contents (p. 479) are not copied. The book's sections 1, 2 and 3 are
 * Topics 01 to 03 with the book's own titles; each is cut at the book's Sections 1 to 8.
 * The numbered sub-headings of Section 2 and 3 ("1.3.1 ...") are kept as bold lines.
 * Figures 9.1 (caption p. 482, drawn p. 483) is in Topic 01; 9.2 (caption p. 489, drawn
 * p. 490), 9.3 and 9.4 (captions p. 491, drawn p. 492) in Topic 02; 9.5 (caption p. 497,
 * drawn p. 498) and 9.6 (caption p. 499, drawn p. 500) in Topic 03; these pages hold no
 * unnumbered drawing. Emphasis italics are dropped; italics are for scientific names
 * and gene symbols (amp, tet, ori, rop); restriction-enzyme names are plain (BamHI). The book's em
 * dashes are written as colons, commas or brackets. Frequencies in the Exam Relevance
 * boxes are labelled. Values keep their unit with a no-break space.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 480–486 ─────────────────────────
  {
    n: '01',
    title: 'Principles of Biotechnology',
    kalam: 'Humans have practised biotechnology for thousands of years without ever using the word.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual gateway to the chapter. CBSE Boards regularly ask the definition of biotechnology and the two core techniques (1–2 marks). CUET and NEET test the “first recombinant DNA” history (Cohen & Boyer), the three steps of genetically modifying an organism, and the distinction between traditional and modern biotechnology. Easy, high-certainty marks if the definitions are exact (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'Humans have practised biotechnology for thousands of years without ever using the word. Every time a grandmother sets curd by adding a spoon of old curd to warm milk, ferments batter for dosa, or lets dough rise for bread, she is using living microbes to transform raw material into a useful product. That is <b>traditional biotechnology</b>, and it is why the field is far older than the gene.',
      },
      {
        t: 'p',
        html: '<b>Modern biotechnology</b> is the same idea sharpened to the molecular scale. Instead of relying on whatever microbes happen to be present, we now deliberately engineer an organism’s genes and then grow it under tightly controlled, contamination-free conditions to manufacture a specific product: insulin, a vaccine, an enzyme. The European Federation of Biotechnology gives a definition broad enough to cover both eras: <b>biotechnology is the use of live organisms, or enzymes derived from them, to make products and run processes useful to humans.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose you want a rose bush that has exactly one new trait, say, disease resistance, and nothing else changed. The old way (cross-breeding) is like shuffling two entire decks of cards together and hoping the one card you want ends up in your hand; you inevitably drag along hundreds of genes you never wanted. Modern biotechnology lets you pull out the single card you need and slip it into the deck cleanly. That precision, introducing <b>one desirable gene without dragging in undesirable ones</b>, is the core advantage that genetic engineering gave biology.',
      },
      {
        t: 'p',
        html: 'Modern biotechnology rests on <b>two core techniques</b>:<br>1. <b>Genetic engineering</b>: techniques that change the chemistry of the genetic material (DNA and RNA) and introduce it into a host organism, thereby altering the host’s phenotype. This is what produces recombinant DNA, gene cloning, and gene transfer.<br>2. <b>Bioprocess engineering</b>: maintaining a sterile (microbial-contamination-free) environment in chemical-engineering processes, so that only the desired microbe or cell grows, in large quantities, for the manufacture of biotechnological products such as antibiotics, vaccines and enzymes.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Genetic engineering exists because ordinary reproduction is a blunt instrument: sexual reproduction introduces variation but also drags along undesirable genes through recombination, while asexual reproduction preserves the genome faithfully but introduces little new useful variation (apart from rare mutations). Engineering breaks this trade-off, but only if the introduced gene can actually <b>replicate or integrate</b> in the new host and be <b>passed to progeny</b>. A piece of alien DNA that simply sits in a cell, unable to multiply, achieves nothing; this is precisely why a vector with an origin of replication is indispensable.',
      },

      { t: 'part', title: 'Key definitions and milestones' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning'],
        rows: [
          ['<b>Biotechnology</b>', 'Use of live organisms/enzymes to make products and processes useful to humans'],
          ['<b>Genetic engineering</b>', 'Altering the chemistry of genetic material and introducing it into a host to change its phenotype'],
          ['<b>Bioprocess engineering</b>', 'Sterile large-scale culture of desired cells for product manufacture'],
          ['<b>Recombinant DNA (rDNA)</b>', 'A new DNA molecule formed in vitro by joining DNA from two different sources'],
          ['<b>Cloning</b>', 'Producing multiple genetically identical copies of a DNA fragment, cell or organism'],
          ['<b>Chimeric DNA</b>', 'Recombinant DNA made by ligating sequences from different sources'],
          ['<b>Recombinant protein</b>', 'A protein produced when its gene is expressed in a foreign (heterologous) host'],
        ],
      },
      { t: 'p', html: '<b>Key milestones / scientists:</b>' },
      {
        t: 'p',
        html: '• <b>Werner Arber, Daniel Nathans, Hamilton Smith</b>: discovery and characterisation of <b>restriction enzymes</b> (Nobel Prize, 1978).<br>• <b>Stanley Cohen & Herbert Boyer (1972)</b>: constructed the <b>first recombinant DNA</b> molecule. (NCERT gives 1972; the paper appeared in 1973.)<br>• <b>Kary Mullis</b>: invention of <b>PCR</b> (covered in Topic 04).',
      },
      { t: 'p', html: '(No SI/dimensional quantities apply: this topic is conceptual and historical.)' },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: '<b>How the first recombinant DNA was constructed</b>' },
      {
        t: 'p',
        html: 'The birth of modern biotechnology is a single elegant experiment. Reasoning through it teaches the entire logic of the field:',
      },
      {
        t: 'p',
        html: '1. <b>Cohen and Boyer isolated an antibiotic-resistance gene</b> by cutting out a piece of DNA from a plasmid of the bacterium <i>Salmonella typhimurium</i>, using a <b>restriction enzyme</b> as molecular scissors.<br>2. <b>They linked this gene to a native plasmid</b> (which served as the <b>vector</b>) using the enzyme <b>DNA ligase</b>. <b>Reasoning:</b> the plasmid was chosen because it can replicate on its own inside a bacterium: it carries an origin of replication.<br>3. The result was a <b>new, artificially created, autonomously replicating circular DNA</b>: the first <b>recombinant DNA</b>.<br>4. When this recombinant plasmid was introduced into <i>E. coli</i>, it <b>multiplied along with the host</b>, producing many identical copies. This multiplication of a piece of DNA inside a host is exactly what we mean by cloning.',
      },
      {
        t: 'p',
        html: 'This experiment showed that two enzymes (a restriction endonuclease and a ligase) plus a self-replicating vector are enough to move a gene from one organism into another and make it multiply.',
      },
      { t: 'p', html: '<b>The three steps of genetically modifying an organism</b>' },
      {
        t: 'p',
        html: 'Every genetic-modification project, however complex, reduces to three logical steps:',
      },
      {
        t: 'p',
        html: '1. <b>Identification</b> of the DNA carrying the desirable gene(s).<br>2. <b>Introduction</b> of that identified DNA into the host.<br>3. <b>Maintenance</b> of the introduced DNA in the host and its transfer to the host’s progeny.',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> identifying the gene is useless if it cannot be delivered; delivering it is useless if it cannot be maintained and inherited. All three must succeed for a stable genetically modified organism.',
      },
      { t: 'fig', id: 'b12-09-fig-9.1' },
      { t: 'p', html: '<b>The three critical research areas of biotechnology</b>' },
      {
        t: 'p',
        html: 'Modern biotechnology, as an applied discipline, is built around three areas of research that together turn a biological idea into a manufactured product:',
      },
      {
        t: 'p',
        html: '1. <b>Providing the best catalyst</b> in the form of an improved organism, usually a microbe, or a pure enzyme. <b>Reasoning:</b> the whole process is only as good as the biological catalyst at its heart, so improving that catalyst (often by genetic engineering) is the first lever.<br>2. <b>Creating optimal conditions</b> through engineering for the catalyst to act. <b>Reasoning:</b> even the best microbe or enzyme needs the right temperature, pH, oxygen and nutrient supply to perform at scale; this is the bioprocess-engineering contribution.<br>3. <b>Downstream processing technologies</b> to purify the protein or organic compound produced. <b>Reasoning:</b> a product mixed with cells, debris and medium is not yet usable; recovering it in pure, formulated form is itself a major research effort.',
      },
      {
        t: 'p',
        html: 'These three areas map neatly onto the chapter ahead: genetic engineering supplies the catalyst, bioprocess engineering supplies the conditions, and downstream processing supplies the finished product.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Definition.</b> Define biotechnology and name the two core techniques on which modern biotechnology is based.',
        steps: [
          '<b>Solution.</b> Biotechnology is the use of live organisms, or enzymes derived from them, to produce products and processes useful to humans. The two core techniques are <b>genetic engineering</b> (altering and transferring genetic material) and <b>bioprocess engineering</b> (sterile, large-scale culture of the desired cells for product manufacture). Clean two-part answer worth full marks.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> Genetic engineering allows the introduction of only the desirable gene into an organism. <b>Reason (R):</b> Conventional sexual hybridisation transfers the desirable gene but also introduces many undesirable genes.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation of A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          '<b>Solution.</b> A is true. R is true and it is precisely why genetic engineering is advantageous: it avoids the undesirable-gene problem of hybridisation.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>MCQ with reasoning.</b> Stanley Cohen and Herbert Boyer constructed the first recombinant DNA by cutting an antibiotic-resistance gene out of a plasmid of which bacterium, and linking it to a native plasmid vector?<br><b>(a)</b> <i>E. coli</i><br><b>(b)</b> <i>Salmonella typhimurium</i><br><b>(c)</b> <i>Bacillus amyloliquefaciens</i><br><b>(d)</b> <i>Thermus aquaticus</i>',
        steps: [
          '<b>Solution.</b> The resistance gene was cut out of a plasmid of <i>Salmonella typhimurium</i> and linked to a native plasmid, which acted as the self-replicating vector; the recombinant plasmid was then introduced into <i>E. coli</i>, where it multiplied. <b>(a)</b> <i>E. coli</i> was the host that cloned the recombinant plasmid, not the source of the gene. <b>(c)</b> is the source of BamHI and <b>(d)</b> of Taq polymerase, not of the gene.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Conceptual reasoning.</b> Why is an origin of replication essential for a piece of alien DNA introduced into a host, and what would happen without it?',
        steps: [
          '<b>Solution.</b> The origin of replication (<i>ori</i>) is the sequence at which DNA replication begins, so any DNA linked to it can multiply inside the host. Without an <i>ori</i>, the alien DNA cannot replicate; as the host cell divides, the single copy is diluted out and eventually lost, so the gene is neither maintained nor passed to progeny, defeating the purpose of genetic modification. This is why a self-replicating vector is indispensable.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the European Federation of Biotechnology’s definition of biotechnology.',
            a: 'The use of live organisms or enzymes from organisms to produce products and processes useful to humans.',
          },
          {
            q: '[CUET] Give one example each of traditional and modern biotechnology.',
            a: 'Traditional: making curd/bread/wine by fermentation; modern: producing human insulin by recombinant DNA technology.',
          },
          {
            q: '[NEET] Which two enzymes were central to the construction of the first recombinant DNA molecule, and what did each do?',
            a: 'Restriction endonuclease (cut out the antibiotic-resistance gene) and DNA ligase (joined it to the vector plasmid).',
          },
          {
            q: '[NEET] List the three steps involved in genetically modifying an organism.',
            a: 'Identification of DNA with the desirable gene; introduction of the DNA into the host; maintenance of the DNA in the host and transfer to progeny.',
          },
          {
            q: '[NEET high-difficulty] Explain why asexual reproduction cannot, by itself, introduce a new desirable trait, whereas sexual reproduction introduces both desirable and undesirable genes.',
            a: 'Asexual reproduction faithfully copies the existing genome and so introduces little new variation (apart from rare mutations); sexual reproduction reshuffles genes through recombination, bringing in variation, but this shuffling inevitably carries undesirable genes along with the desirable one.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The two core techniques of modern biotechnology are:',
        opts: [
          {
            label: 'tissue culture and grafting',
            nudge: '<b>(a)</b> and <b>(c)</b> are individual methods, not the defining core techniques.',
          },
          { label: 'genetic engineering and bioprocess engineering', nudge: null },
          {
            label: 'fermentation and distillation',
            nudge: '<b>(a)</b> and <b>(c)</b> are individual methods, not the defining core techniques.',
          },
          {
            label: 'cloning and hybridisation',
            nudge: '<b>(d)</b> cloning is an outcome and hybridisation is conventional breeding: neither pairs as a “core technique.”',
          },
        ],
        correct: 1,
        solution: 'These are the two pillars NCERT names.',
      },
      {
        t: 'mcq',
        q: 'The first recombinant DNA molecule was constructed by:',
        opts: [
          { label: 'Arber and Smith', nudge: '<b>(a)</b> Arber/Nathans/Smith discovered restriction enzymes.' },
          { label: 'Cohen and Boyer', nudge: null },
          { label: 'Watson and Crick', nudge: '<b>(c)</b> Watson and Crick described the DNA double helix.' },
          { label: 'Kary Mullis', nudge: '<b>(d)</b> Mullis invented PCR.' },
        ],
        correct: 1,
        solution: 'Each is a real contribution placed as a distractor.',
      },
      {
        t: 'mcq',
        q: 'Restriction enzymes were discovered by scientists awarded the Nobel Prize in 1978, namely:',
        opts: [
          { label: 'Cohen, Boyer and Berg', nudge: null },
          { label: 'Arber, Nathans and Hamilton Smith', nudge: null },
          { label: 'Mullis, Boyer and Cohen', nudge: null },
          { label: 'Watson, Crick and Wilkins', nudge: null },
        ],
        correct: 1,
        solution: 'The restriction-enzyme Nobel trio. The other options mix in scientists from rDNA construction, PCR and DNA-structure work.',
      },
      {
        t: 'mcq',
        q: 'Which statement about genetic engineering is correct?',
        opts: [
          { label: 'It can introduce only one or a few specific genes without undesirable genes', nudge: null },
          { label: 'It always introduces the entire genome of the donor', nudge: '<b>(b)</b> is the opposite of the truth.' },
          {
            label: 'It cannot transfer genes across species',
            nudge: '<b>(c)</b> is false: cross-species transfer is a key power of the technique.',
          },
          { label: 'It is identical to conventional hybridisation', nudge: '<b>(d)</b> confuses engineering with conventional breeding.' },
        ],
        correct: 0,
        solution: 'Precision is the whole point.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Crediting the wrong scientists.</b> Lock the trio: <b>Cohen & Boyer = first rDNA; Arber/Nathans/Smith = restriction enzymes; Mullis = PCR.</b> Examiners often cross-wire these (the book’s estimate from past papers, not official figures).',
          '<b>Forgetting the second core technique.</b> Some students name only genetic engineering. <b>Bioprocess engineering</b> (sterile large-scale culture) is the equally-weighted second pillar.',
          '<b>Confusing traditional with modern biotechnology.</b> Curd, bread and wine are traditional; rDNA insulin and vaccines are modern. Both are biotechnology.',
          '<b>Naming the wrong organism.</b> The resistance gene came from a plasmid of <i>Salmonella typhimurium</i>; the recombinant plasmid was introduced into <i>E. coli</i>, the host that cloned it.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (recall):</b> Anchor the whole topic to one sentence: “Two techniques (genetic + bioprocess), one founding experiment (Cohen–Boyer), three steps (identify, introduce, maintain).” That single line answers most short-answer questions from this section.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Biotechnology', note: 'use of live organisms/enzymes to make useful products and processes (EFB definition).' },
          { f: '<b>Traditional</b> (curd, bread, wine: fermentation) vs <b>modern</b> (rDNA, sterile bioprocess).', note: '' },
          { f: 'Two core techniques', note: 'genetic engineering (alter + transfer DNA) + bioprocess engineering (sterile large-scale culture).' },
          {
            f: 'First rDNA, Cohen & Boyer (1972)',
            note: 'antibiotic-resistance gene cut from a <i>Salmonella typhimurium</i> plasmid + ligated to a vector plasmid → introduced into <i>E. coli</i> → cloned.',
          },
          { f: 'Three steps of genetic modification', note: 'identify DNA → introduce into host → maintain and transfer to progeny.' },
          { f: 'Scientists', note: 'Arber/Nathans/Smith (restriction enzymes, Nobel 1978); Cohen & Boyer (first rDNA); Mullis (PCR).' },
        ],
        aids: ['Mnemonic: “Genes + Growth” = the two core techniques (Genetic engineering + bioprocess Growth/culture).'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 487–495 ─────────────────────────
  {
    n: '02',
    title: 'Tools of Recombinant DNA',
    kalam: 'A kitchen knife can cut anything, anywhere, which is useless if you need to cut DNA at one exact spot.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial scoring zone (the book’s estimate from past papers, not official figures). CBSE Boards routinely ask 1–3 mark questions on restriction enzyme nomenclature, sticky vs blunt ends, and the features of a cloning vector. CUET and NEET lean hard on match-the-column, assertion–reason, and pBR322 diagram-ID items, and almost every year NEET asks at least one question from this exact section (the book’s estimate from past papers, not official figures). Master the vocabulary precisely: the marks here are pure recall-plus-reasoning, not calculation.',
      },
      {
        t: 'p',
        html: 'Imagine you want to take one specific sentence out of a thick book, photocopy it thousands of times, and paste it permanently into a completely different book so that the new book “reads” your sentence forever. You would need three very different kinds of tools: a precise pair of scissors to cut out exactly the sentence you want (and nothing else), a reliable glue to stick it into the new book, and a vehicle (the new book itself) that can carry your sentence and reproduce it every time it is reprinted.',
      },
      {
        t: 'p',
        html: 'Recombinant DNA technology works on this exact logic, just at the molecular scale. A gene is the “sentence,” the genome is the “book,” and the whole craft of genetic engineering depends on having molecular tools that are specific enough to act on a single defined sequence among billions of base pairs. That specificity is the whole game.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A kitchen knife can cut anything, anywhere, which is useless if you need to cut DNA at one exact spot. What molecular biology needed was not a sharper knife but a smarter one: an enzyme that ignores the entire genome except for one short, defined sequence, and cuts only there. Nature had already invented exactly this. Bacteria, in their ancient war against viruses, evolved enzymes that recognise and destroy foreign viral DNA at specific sequences, “restricting” the growth of the virus. We simply borrowed these bacterial defence enzymes and repurposed them as programmable molecular scissors.',
      },
      {
        t: 'p',
        html: 'So the toolkit of recombinant DNA technology has three functional categories, and almost every question on this topic is really asking “which tool, and why?”:<br>1. <b>The cutting tools</b>: restriction endonucleases (“molecular scissors”) that snip DNA at specific recognition sequences, plus supporting enzymes (ligase as the “glue,” exonucleases, alkaline phosphatase, lysing enzymes).<br>2. <b>The carrying tools</b>: cloning vectors (plasmids like pBR322, the Ti plasmid, retroviruses) that ferry the foreign gene into a host and replicate it.<br>3. <b>The receiving system</b>: a competent host cell engineered to actually accept the foreign DNA, which it would normally refuse.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> A restriction enzyme will only cut where its specific recognition sequence appears: no recognition site, no cut, no matter how long you wait. Sticky-end ligation only works cleanly when both the vector and the foreign DNA were cut by the same enzyme (or by enzymes that leave compatible ends), so their overhangs are complementary. A good cloning vector must contain only a single recognition site for the enzyme you plan to use; if the vector has several sites for that enzyme, it gets chopped into useless fragments. And the host is not naturally cooperative: DNA is hydrophilic and the cell membrane is hydrophobic, so the cell must be artificially made “competent” before it will take up the recombinant DNA at all. Each of these conditions is a common exam trap (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Key tools, enzymes and vectors' },
      { t: 'p', html: '<b>The cutting and joining enzymes</b>' },
      {
        t: 'table',
        title: null,
        head: ['Enzyme / Tool', 'What it does', 'Key detail for exams'],
        rows: [
          [
            '<b>Restriction endonuclease</b>',
            'Cuts DNA within the molecule at a specific recognition sequence',
            '“Molecular scissors”; recognises a palindrome; first one discovered (NCERT): <b>Hind II</b> (a different enzyme from HindIII)',
          ],
          ['<b>Exonuclease</b>', 'Removes nucleotides from the ends of DNA', 'Contrast with endonuclease (cuts internally)'],
          [
            '<b>DNA ligase</b>',
            'Joins DNA fragments by forming a phosphodiester bond',
            '“Molecular glue/binder”; links 3′–OH to 5′–phosphate',
          ],
          [
            '<b>Alkaline phosphatase</b>',
            'Removes the 5′-phosphate group',
            'Modifies the DNA terminus; prevents unwanted self-ligation',
          ],
          [
            '<b>Lysing enzymes</b>',
            'Digest the cell wall to release DNA',
            'Lysozyme → bacteria; cellulase → plants; chitinase → fungi',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Nucleases</b> are the parent class, split into two kinds: <b>exonucleases</b> (chew from the ends) and <b>endonucleases</b> (cut at internal sites). Restriction enzymes are a special category of endonuclease.',
      },
      { t: 'p', html: '<b>Restriction enzyme nomenclature</b>' },
      { t: 'p', html: 'The name encodes the bacterium of origin. Using <b>EcoRI</b> as the worked example:' },
      {
        t: 'table',
        title: null,
        head: ['Part of name', 'Stands for', 'Source'],
        rows: [
          ['<b>E</b>', '<i>Escherichia</i>', 'Genus (first letter, capitalised)'],
          ['<b>co</b>', '<i>coli</i>', 'Species (next two letters)'],
          ['<b>R</b>', 'strain RY13', 'Strain of the bacterium'],
          ['<b>I</b>', 'first', 'Order of identification (Roman numeral)'],
        ],
      },
      { t: 'p', html: '<b>Cloning vectors and their required features</b>' },
      {
        t: 'p',
        html: 'A cloning vector is the “vehicle DNA” that carries the foreign fragment into the host. A useful vector must have:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Why it is needed'],
        rows: [
          [
            '<b>Origin of replication (<i>ori</i>)</b>',
            'Initiates replication; any DNA linked to it replicates inside the host. Also governs <b>copy number</b>.',
          ],
          [
            '<b>Selectable marker</b>',
            'Identifies and eliminates non-transformants, e.g. antibiotic-resistance genes (<b><i>amp</i><sup>R</sup>, <i>tet</i><sup>R</sup></b>).',
          ],
          [
            '<b>Cloning sites</b>',
            'Recognition site(s) for restriction enzymes where foreign DNA is inserted, ideally <b>a single site</b> per enzyme.',
          ],
          ['<b>Small size</b>', 'Easier to manipulate and to get into the host.'],
        ],
      },
      {
        t: 'p',
        html: '<b>pBR322</b>, the classic <i>E. coli</i> plasmid vector, carries an <b><i>ori</i></b>, the <b><i>rop</i></b> region (proteins involved in replication / copy-number control), two resistance genes <b><i>amp</i><sup>R</sup></b> and <b><i>tet</i><sup>R</sup></b>, and several unique restriction sites (EcoRI, HindIII, BamHI, SalI, PvuII, PstI, ClaI). The map is schematic. Of the sites drawn, only PstI and PvuI (in <i>amp</i><sup>R</sup>) and BamHI and SalI (in <i>tet</i><sup>R</sup>) are used for insertional inactivation in this chapter. EcoRI lies in neither resistance gene; PvuII is drawn on the <i>rop</i> arc, and ClaI and HindIII sit just beside <i>tet</i><sup>R</sup>, so this drawing should not be used to predict what an insert at those three sites would switch off.',
      },
      {
        t: 'p',
        html: '<b>Vectors for plants and animals</b> (not all hosts are bacteria):<br>• <b>Ti plasmid</b> (tumour-inducing) of <i>Agrobacterium tumefaciens</i>, disarmed of its disease-causing ability and converted into a cloning vector to deliver genes into plant cells via its T-DNA.<br>• <b>Retroviruses</b>, disarmed and used to deliver desirable genes into animal cells.',
      },
      { t: 'p', html: '(No SI units apply to this topic: it is descriptive/structural.)' },
      { t: 'fig', id: 'b12-09-fig-9.2' },

      { t: 'part', title: 'Key procedures and mechanisms' },
      { t: 'p', html: '<b>How a restriction enzyme recognises and cuts (the mechanism)</b>' },
      {
        t: 'p',
        html: 'The recognition sequence is almost always a <b>palindrome</b>, a sequence that reads the same in the 5′→3′ direction on both strands. EcoRI recognises:<br>5′–GAATTC–3′<br>3′–CTTAAG–5′<br>Read the top strand left to right, 5′→3′ (GAATTC); read the bottom strand right to left, which is its 5′→3′ direction, and it is also GAATTC. That symmetry is why the same enzyme can cut both strands the same way.',
      },
      {
        t: 'p',
        html: '<b>Step-by-step reasoning:</b><br>1. The enzyme scans the DNA, binding only when it finds its exact palindromic sequence. Everywhere else it does nothing; this is the source of its specificity.<br>2. EcoRI cuts each strand between the <b>G and the A</b>, but at symmetrically displaced positions on the two strands (a <b>staggered cut</b>).<br>3. Because the cut is staggered, each fragment is left with a short, unpaired single-stranded overhang; these are <b>sticky (cohesive) ends</b>.<br>4. The overhangs from any two pieces cut by the same enzyme are complementary, so they can base-pair with each other. This is why we use the same enzyme on the vector and the foreign DNA. (Enzymes that leave the same overhang, such as BamHI and BglII, give compatible ends too; the same-enzyme rule is the working rule.)<br>5. <b>DNA ligase</b> then seals the nick by forming a phosphodiester bond between the adjacent 3′–OH and 5′–phosphate, locking the two pieces into one continuous recombinant molecule.',
      },
      {
        t: 'p',
        html: 'Some restriction enzymes cut both strands at the same position, leaving no overhang; these produce <b>blunt ends</b>. Blunt ends can be joined but far less efficiently and without sequence specificity, which is why sticky-end cloning is preferred.',
      },
      { t: 'fig', id: 'b12-09-fig-9.3' },
      { t: 'p', html: '<b>Selecting recombinants: insertional inactivation</b>' },
      {
        t: 'p',
        html: 'Here is the elegant trick exams love. In pBR322, the <b>BamHI</b> site sits inside the tetracycline-resistance gene (<i>tet</i><sup>R</sup>). If you insert your foreign DNA at the BamHI site, you physically interrupt <i>tet</i><sup>R</sup>, so the recombinant plasmid <b>loses tetracycline resistance</b> while keeping <i>amp</i><sup>R</sup>. Now you can tell three kinds of cells apart:<br>• No plasmid at all → dies on ampicillin.<br>• Plasmid without insert → grows on ampicillin <b>and</b> tetracycline.<br>• Recombinant plasmid (with insert) → grows on ampicillin but is <b>killed by tetracycline</b>.',
      },
      {
        t: 'p',
        html: 'So the cells you want are amp-resistant and tet-sensitive. This loss of one marker on insertion is <b>insertional inactivation</b>. (Strictly, the antibiotic keeps every cell that took up the vector, with or without the insert; picking the amp-resistant, tet-sensitive colony is a screening step. NCERT calls this a selectable marker, so use NCERT’s wording in a CBSE answer.)',
      },
      { t: 'p', html: '<b>Making the host “competent”</b>' },
      {
        t: 'p',
        html: 'DNA is hydrophilic and cannot slip through the hydrophobic cell membrane on its own, so the cell must be forced into a receptive state.',
      },
      {
        t: 'p',
        html: '1. Treat bacteria with a specific concentration of a <b>divalent cation (Ca<sup>2+</sup>, as calcium chloride)</b>: this increases the permeability of the cell membrane.<br>2. Incubate the cells with the recombinant DNA <b>on ice</b>.<br>3. Give a brief <b>heat shock at 42 °C</b>, then return them to ice. The sudden temperature shift is thought to open transient pores, and the DNA enters.',
      },
      {
        t: 'p',
        html: 'For other systems: <b>microinjection</b> delivers recombinant DNA directly into the nucleus of an animal cell using a fine needle, and <b>biolistics / the gene gun</b> bombards plant cells with DNA-coated gold or tungsten microparticles to punch through the rigid cell wall. Vectors made from disarmed pathogens (the Ti plasmid of <i>Agrobacterium</i>, retroviruses) carry DNA into plant and animal cells.',
      },
      { t: 'fig', id: 'b12-09-fig-9.4' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Definition + nomenclature.</b> The restriction enzyme BamHI is isolated from the bacterium <i>Bacillus amyloliquefaciens</i> strain H. Decode each part of its name, and state the one defining property that makes it a restriction enzyme.',
        steps: [
          '<b>Solution.</b><br>• <b>B</b> → genus <i>Bacillus</i><br>• <b>am</b> → species <i>amyloliquefaciens</i><br>• <b>H</b> → strain H<br>• <b>I</b> → first restriction enzyme identified from this strain',
          'Defining property: it is an <b>endonuclease that cuts DNA only at a specific recognition sequence</b> (a palindrome), rather than cutting randomly.',
          'BamHI cuts within the DNA at its specific site, generating fragments with defined ends.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match each tool with its function and choose the correct code.<br><b>Column I (Tool):</b> A. DNA ligase; B. Exonuclease; C. Alkaline phosphatase; D. Calcium ion.<br><b>Column II (Function):</b> 1. Removes nucleotides from DNA ends; 2. Increases membrane permeability for DNA uptake; 3. Seals nicks via phosphodiester bonds; 4. Removes the 5′-phosphate group.<br><b>Options:</b> <b>(a)</b> A-3, B-1, C-4, D-2 <b>(b)</b> A-1, B-3, C-2, D-4 <b>(c)</b> A-3, B-4, C-1, D-2 <b>(d)</b> A-2, B-1, C-4, D-3',
        steps: [
          '<b>Solution.</b> Ligase joins (3); exonuclease trims ends (1); alkaline phosphatase removes the 5′-phosphate (4); Ca<sup>2+</sup> makes the membrane permeable (2).',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Multi-concept reasoning (selection logic).</b> A foreign gene is ligated into the BamHI site of pBR322 and the recombinant plasmid is introduced into <i>E. coli</i>. After growth, you replica-plate the colonies onto ampicillin medium and onto tetracycline medium. A colony that grows on ampicillin but fails to grow on tetracycline is best described as:<br><b>(a)</b> a non-transformant <b>(b)</b> a transformant carrying a non-recombinant plasmid <b>(c)</b> a transformant carrying the recombinant plasmid <b>(d)</b> a cell that lost both resistance genes',
        steps: [
          '<b>Solution.</b> Insertion at BamHI disrupts <i>tet</i><sup>R</sup> by insertional inactivation, so the recombinant is <b>amp-resistant, tet-sensitive</b>. A non-transformant would die on ampicillin too (eliminating a), and a non-recombinant plasmid keeps both resistances → grows on tetracycline (eliminating b).',
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> The vector and the foreign DNA to be joined are usually cut with the same restriction enzyme. <b>Reason (R):</b> Using the same enzyme generates complementary sticky ends that can base-pair, allowing DNA ligase to seal them into a stable recombinant molecule.<br><b>(a)</b> Both A and R are true and R is the correct explanation of A<br><b>(b)</b> Both A and R are true but R is not the correct explanation of A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
        steps: [
          '<b>Solution.</b> A is true. R is true and it is precisely why A is done: identical enzymes leave matching overhangs, which is the prerequisite for clean ligation. (Enzymes that leave compatible overhangs also work, but the same-enzyme rule is the one this chapter teaches.)',
          '(Trap: students who memorise “ligase joins ends” without linking it to complementary overhangs wrongly pick (b).)',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between sticky ends and blunt ends, and state which is preferred for cloning and why.',
            a: 'Sticky ends have complementary single-stranded overhangs (staggered cut); blunt ends have none (straight cut); sticky ends preferred: complementary overhangs allow specific, efficient ligation.',
          },
          {
            q: '[CUET] Name the lysing enzymes used to digest the cell walls of (i) bacteria, (ii) plants, (iii) fungi.',
            a: '(i) lysozyme, (ii) cellulase, (iii) chitinase.',
          },
          {
            q: '[NEET] List the four features that an ideal cloning vector must possess, and state the dual role of <i>ori</i>.',
            a: '<i>ori</i>, selectable marker, cloning sites, small size; <i>ori</i> both initiates replication and controls copy number.',
          },
          {
            q: '[NEET] Why must a host cell be made “competent” before transformation, and how is competence induced in bacteria?',
            a: 'DNA is hydrophilic and cannot cross the hydrophobic membrane; bacteria are treated with CaCl<sub>2</sub> then given a 42 °C heat shock, which is thought to open transient pores.',
          },
          {
            q: '[NEET high-difficulty] A vector contains two recognition sites for the restriction enzyme you intend to use. Predict the consequence for cloning and justify your answer.',
            a: 'A circular vector cut at two sites falls into two fragments (n cuts on a circle give n pieces), so it no longer stays one intact carrier and the gene cannot be cloned on it; a usable vector needs a single recognition site for the enzyme you intend to use.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The first restriction endonuclease to be discovered was:',
        opts: [
          {
            label: 'EcoRI',
            nudge: '<b>EcoRI (a)</b> is the most commonly illustrated enzyme, which is why students confuse “famous” with “first.” (Hind II is a different enzyme from HindIII.)',
          },
          { label: 'Hind II', nudge: null },
          {
            label: 'BamHI',
            nudge: '<b>(c)</b> and <b>(d)</b> are real enzymes but later discoveries, chosen by students guessing from familiarity.',
          },
          {
            label: 'Alu I',
            nudge: '<b>(c)</b> and <b>(d)</b> are real enzymes but later discoveries, chosen by students guessing from familiarity.',
          },
        ],
        correct: 1,
        solution: 'It was the first characterised (the first type II enzyme characterised; NCERT calls it the first restriction endonuclease). Hind II is a different enzyme from HindIII.',
      },
      {
        t: 'mcq',
        q: 'In pBR322, the gene whose inactivation is conventionally used to screen for recombinants by insertion at the BamHI site is:',
        opts: [
          {
            label: '<i>amp</i><sup>R</sup>',
            nudge: '<b>(a) <i>amp</i><sup>R</sup></b> is the marker that is retained (the trap for students who reverse the two).',
          },
          { label: '<i>tet</i><sup>R</sup>', nudge: null },
          { label: '<i>ori</i>', nudge: '<b>(c) <i>ori</i></b> and <b>(d) <i>rop</i></b> are replication elements, not screening markers.' },
          { label: '<i>rop</i>', nudge: '<b>(c) <i>ori</i></b> and <b>(d) <i>rop</i></b> are replication elements, not screening markers.' },
        ],
        correct: 1,
        solution: 'The BamHI site lies within <i>tet</i><sup>R</sup>, so insertion knocks it out → recombinants become tet-sensitive.',
      },
      {
        t: 'mcq',
        q: 'Sticky ends are produced because a restriction enzyme makes a:',
        opts: [
          { label: 'blunt cut at the centre of the palindrome', nudge: '<b>(a)</b> describes blunt-end enzymes.' },
          { label: 'staggered cut leaving complementary single-stranded overhangs', nudge: null },
          {
            label: 'cut only on one of the two strands',
            nudge: '<b>(c)</b> is false: restriction endonucleases cut both strands. This is a recurring distractor.',
          },
          { label: 'random cut anywhere on the DNA', nudge: '<b>(d)</b> contradicts the defining specificity of the enzyme.' },
        ],
        correct: 1,
        solution: 'Staggered cutting at displaced positions leaves overhangs.',
      },
      {
        t: 'mcq',
        q: 'Which property of DNA explains why a host cell must be made competent before it can take up recombinant DNA?',
        opts: [
          { label: 'DNA is too large to diffuse', nudge: '<b>(a)</b> size matters but is not the stated cause.' },
          { label: 'DNA is hydrophilic and cannot cross the hydrophobic membrane', nudge: null },
          {
            label: 'DNA is positively charged and repelled by the membrane',
            nudge: '<b>(c)</b> DNA is negatively charged, not positive: a factual trap.',
          },
          {
            label: 'DNA is rapidly degraded outside the cell',
            nudge: '<b>(d)</b> is true in general but is not why competence treatment is required.',
          },
        ],
        correct: 1,
        solution: 'The hydrophilic–hydrophobic mismatch is the textbook reason.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“First discovered” vs “most commonly used.”</b> Hind II was first; EcoRI is the standard illustration. Examiners often offer both (the book’s estimate from past papers, not official figures). Lock it in: <b>Hind II = first, EcoRI = famous.</b>',
          '<b>Reversing the insertional-inactivation marker.</b> In pBR322 the BamHI site is inside <b><i>tet</i><sup>R</sup></b>, so recombinants are <b>amp-resistant, tet-sensitive</b>, not the other way round. Tattoo “insert kills tet” into memory.',
          '<b>Saying restriction enzymes cut one strand.</b> They cut <b>both</b> strands. The “cuts only one strand” option is a recurring NEET trap (the book’s estimate from past papers, not official figures).',
          '<b>Forgetting <i>ori</i> has two jobs.</b> It initiates replication <b>and</b> controls copy number, a one-mark answer that students often half-answer (the book’s estimate from past papers, not official figures).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “which enzyme/tool?” question, sort the option into one of three buckets first: cut (restriction enzyme/exonuclease), join (ligase), carry/enter (vector/CaCl<sub>2</sub>/microinjection). This three-bucket sort eliminates two distractors before you even reason about the specifics.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three tool categories',
            note: 'cut (restriction endonuclease, “molecular scissors”), join (DNA ligase, “molecular glue”), carry/enter (vector + competent host).',
          },
          {
            f: 'Nomenclature (EcoRI)',
            note: '<i>Escherichia</i> (genus) · <i>coli</i> (species) · R (strain RY13) · I (first identified).',
          },
          {
            f: 'Recognition site = palindrome',
            note: 'staggered cut → <b>sticky ends</b>; straight cut → <b>blunt ends</b>. Same enzyme (or compatible ends) → complementary overhangs → ligation.',
          },
          {
            f: 'Vector must have',
            note: '<i>ori</i> (replication + copy number), selectable marker (<i>amp</i><sup>R</sup>/<i>tet</i><sup>R</sup>), cloning sites (single per enzyme), small size.',
          },
          {
            f: 'pBR322',
            note: '<i>ori</i> · <i>rop</i> · <i>amp</i><sup>R</sup> · <i>tet</i><sup>R</sup>; <b>BamHI inside <i>tet</i><sup>R</sup></b> → insertional inactivation → recombinants are <b><i>amp</i><sup>R</sup>, <i>tet</i><sup>S</sup></b>.',
          },
          {
            f: 'Competence',
            note: 'DNA hydrophilic vs hydrophobic membrane → <b>CaCl<sub>2</sub> + 42 °C heat shock</b>; also microinjection (animal), gene gun/biolistics (plant), Ti plasmid (plant), retrovirus (animal).',
          },
        ],
        aids: ['Mnemonic: “Cut Same, Stick Same”: cut vector + insert with the same enzyme (or enzymes with compatible ends) so their sticky ends match.'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 496–502 ─────────────────────────
  {
    n: '03',
    title: 'Separation and Isolation of DNA Fragments (Gel Electrophoresis)',
    kalam: 'When a restriction enzyme finishes cutting a long DNA molecule, you are left with a mixture of fragments of different lengths.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A NEET favourite, asked almost every year (the book’s estimate from past papers, not official figures). CBSE Boards ask the principle and the role of ethidium bromide (1–2 marks). NEET and CUET test the direction of DNA migration, the size–distance relationship, and the function of agarose, with classic traps built around “which electrode” and “which fragment moves farther.” Memorise the logic precisely; the distractors are designed to catch the half-remembered.',
      },
      {
        t: 'p',
        html: 'When a restriction enzyme finishes cutting a long DNA molecule, you are left not with one neat piece but with a mixture of fragments of different lengths. Before you can use the one fragment you want, you must separate that mixture and pull out your fragment in pure form. The technique that does this is <b>gel electrophoresis</b>.',
      },
      {
        t: 'p',
        html: 'Two simple physical facts make it work. First, <b>DNA carries a negative charge</b>: its sugar–phosphate backbone is studded with phosphate groups. So if you place DNA in an electric field, it will move toward the <b>positive electrode (the anode)</b>. Second, the DNA is made to travel through a <b>gel</b>: a jelly-like mesh of <b>agarose</b>, a natural polysaccharide extracted from seaweed. The gel acts as a molecular sieve.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a crowd trying to push through a dense bamboo thicket. Small children slip between the stalks quickly and get far; large adults get caught and barely move. The electric field is the urge to move forward; the agarose mesh is the thicket. <b>Smaller DNA fragments slip through the mesh easily and travel farther; larger fragments are held back and stay near the start.</b> This is why, after a run, the fragments are sorted neatly by size along the gel, each size forming a distinct band.',
      },
      {
        t: 'p',
        html: 'There is one more problem: DNA is colourless, so you cannot see the bands. The DNA is therefore stained with a dye called <b>ethidium bromide</b> and then exposed to <b>ultraviolet (UV) light</b>, under which the stained DNA glows as bright <b>orange bands</b>. Each band is a population of fragments of one particular size.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> For linear DNA fragments the separation depends mainly on size, because all of them carry essentially the same charge-to-mass ratio, so charge cannot be the sorting variable; the sieving by the gel matters most. (Gel concentration, voltage and the shape of the DNA, such as supercoiled against linear, also affect a run.) The DNA must be loaded into wells at the <b>negative (cathode) end</b> so that it migrates across the gel toward the anode; load it at the wrong end and it runs off immediately. And the bands are invisible until stained: unstained DNA cannot be seen by eye; stained with ethidium bromide it glows orange under UV.',
      },

      { t: 'part', title: 'Key definitions and components' },
      {
        t: 'table',
        title: null,
        head: ['Component / Term', 'Role'],
        rows: [
          ['<b>Gel electrophoresis</b>', 'Technique that separates charged molecules (DNA) by size in an electric field'],
          ['<b>Agarose</b>', 'Natural polysaccharide from seaweed; forms the sieving gel matrix'],
          ['<b>Electric field</b>', 'Drives negatively charged DNA toward the anode'],
          ['<b>Anode (+)</b>', 'Positive electrode; DNA migrates toward it'],
          ['<b>Cathode (−)</b>', 'Negative electrode; DNA is loaded near here (in wells)'],
          ['<b>Ethidium bromide</b>', 'Dye that binds DNA so bands become visible'],
          ['<b>UV radiation</b>', 'Reveals ethidium-bromide-stained DNA as bright orange bands'],
          ['<b>Elution</b>', 'Cutting the desired band out of the gel and extracting the pure DNA fragment'],
        ],
      },
      { t: 'p', html: '<b>Core relationships to memorise:</b>' },
      {
        t: 'p',
        html: '• DNA is <b>negatively charged</b> → moves to the <b>anode (+)</b>.<br>• <b>Smaller fragment</b> → <b>travels farther</b>; larger fragment → stays nearer the wells.<br>• Visualisation = <b>ethidium bromide + UV</b> → <b>orange bands</b>.',
      },
      { t: 'p', html: '(No SI/dimensional quantities apply: this topic is procedural and descriptive.)' },
      { t: 'fig', id: 'b12-09-fig-9.5' },

      { t: 'part', title: 'Key procedures and mechanisms' },
      { t: 'p', html: '<b>Running a gel: step by step</b>' },
      {
        t: 'p',
        html: '1. <b>Cast the gel.</b> Molten agarose is poured and allowed to set, with a comb creating small <b>wells</b> at one end. <b>Reasoning:</b> the set gel provides the porous mesh through which fragments will be sieved.<br>2. <b>Load the samples.</b> The restriction-digested DNA is pipetted into the wells, which are positioned at the <b>cathode (−) end</b>. <b>Reasoning:</b> DNA must start at the negative end so the field can carry it across the whole gel toward the anode.<br>3. <b>Apply the electric field.</b> DNA, being negatively charged, migrates toward the <b>anode (+)</b>. <b>Reasoning:</b> opposite charges attract; the phosphate backbone makes every fragment negative.<br>4. <b>Separate by size.</b> As fragments move, the agarose mesh slows the larger ones more than the smaller ones, so <b>smaller fragments travel farther</b> and the mixture sorts itself into size-ordered bands. <b>Reasoning:</b> all fragments feel a similar electrical pull, so the main thing that differs between them is how easily they thread through the mesh, that is, their size.<br>5. <b>Stain and visualise.</b> The gel is soaked in <b>ethidium bromide</b> and viewed under <b>UV light</b>; the DNA appears as bright <b>orange bands</b>. <b>Reasoning:</b> DNA is colourless, so a fluorescent intercalating dye is needed to make the bands visible.',
      },
      { t: 'p', html: '<b>Isolating the fragment: elution</b>' },
      {
        t: 'p',
        html: 'Once the band you want is identified, it is <b>cut out of the agarose gel</b> and the DNA is extracted from that gel piece. This recovery of the pure fragment from the gel is called <b>elution</b>. The eluted DNA fragments are then used in the next stage: ligation into a vector to construct recombinant DNA.',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> separation alone only displays the fragments; elution is what converts a band on a gel into a usable, purified piece of DNA for cloning.',
      },
      { t: 'fig', id: 'b12-09-fig-9.6' },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Principle + role of a reagent.</b> State the principle of gel electrophoresis and the role of ethidium bromide in it.',
        steps: [
          '<b>Solution.</b> Gel electrophoresis separates DNA fragments on the basis of their <b>size</b>: negatively charged DNA, placed in an electric field, migrates through an agarose gel toward the anode, and smaller fragments travel farther than larger ones. <b>Ethidium bromide</b> is a dye that binds the DNA so that, under UV light, the separated fragments become visible as bright orange bands.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Match the column.</b> Match each item with its role and choose the correct code.<br><b>Column I:</b> A. Agarose; B. Ethidium bromide; C. Anode; D. Elution.<br><b>Column II:</b> 1. Reveals DNA under UV; 2. Sieving gel matrix; 3. Recovery of fragment from gel; 4. Electrode DNA moves toward.<br><b>Options:</b> <b>(a)</b> A-2, B-1, C-4, D-3 <b>(b)</b> A-1, B-2, C-3, D-4 <b>(c)</b> A-2, B-1, C-3, D-4 <b>(d)</b> A-3, B-1, C-4, D-2',
        steps: ['<b>Solution.</b> Agarose = mesh (2); ethidium bromide = visualisation (1); anode = destination (4); elution = recovery (3).'],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>MCQ with reasoning (the size trap).</b> In agarose gel electrophoresis, where will the smallest DNA fragments be found?<br><b>(a)</b> Nearest the wells, at the cathode end<br><b>(b)</b> Farthest from the wells, toward the anode<br><b>(c)</b> They do not move at all<br><b>(d)</b> Distributed evenly across the gel',
        steps: [
          '<b>Solution.</b> Smaller fragments slip through the mesh most easily and travel the greatest distance, so they end up <b>farthest from the wells, toward the anode</b>. <b>(a)</b> describes the largest fragments. <b>(c)</b> is false: all charged fragments move. <b>(d)</b> contradicts size-based separation.',
        ],
        ans: '(b)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty',
        q: '<b>Assertion–Reason.</b> <b>Assertion (A):</b> In gel electrophoresis, DNA fragments separate mainly according to size. <b>Reason (R):</b> All DNA fragments carry approximately the same charge-to-mass ratio, so the electric force per unit mass is nearly the same for each, leaving the gel’s sieving as the main differentiating factor.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation of A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          '<b>Solution.</b> A is true. R is true and it is the deeper reason why size is the main sorting variable: uniform charge-to-mass ratio removes charge as a discriminator, leaving sieving.',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] From which natural source is agarose obtained?', a: 'Seaweed (a polysaccharide).' },
          {
            q: '[CUET] Toward which electrode does DNA migrate during electrophoresis, and why?',
            a: 'Toward the anode (positive electrode), because DNA is negatively charged due to its phosphate backbone.',
          },
          {
            q: '[NEET] Explain why smaller DNA fragments move farther than larger ones on an agarose gel.',
            a: 'The agarose mesh sieves the fragments; smaller fragments thread through it more easily and so travel farther, while larger fragments are held back near the wells.',
          },
          {
            q: '[NEET] What is elution, and why is it necessary?',
            a: 'Elution is cutting out the desired band from the gel and extracting the pure DNA fragment from it; it is necessary because separation only displays the fragments, whereas cloning needs the purified fragment in hand.',
          },
          {
            q: '[NEET high-difficulty] A student loads the DNA sample into wells at the anode end of the gel and is surprised to see no bands after the run. Explain what went wrong.',
            a: 'DNA migrates toward the anode; loading it at the anode end means it immediately runs off the edge of the gel rather than travelling across it, so no separated bands form: the sample must be loaded at the cathode end.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During gel electrophoresis, DNA moves toward the anode because it is:',
        opts: [
          { label: 'positively charged', nudge: '<b>(a)</b> reverses the charge (a classic trap).' },
          { label: 'negatively charged', nudge: null },
          { label: 'neutral', nudge: '<b>(c)</b> a neutral molecule would not migrate.' },
          { label: 'charged only after staining', nudge: '<b>(d)</b> charge does not depend on staining.' },
        ],
        correct: 1,
        solution: 'The phosphate backbone makes DNA negative, so it is drawn to the positive anode.',
      },
      {
        t: 'mcq',
        q: 'The gel matrix used in DNA electrophoresis is made of:',
        opts: [
          {
            label: 'polyacrylamide only',
            nudge: '<b>(a)</b> Polyacrylamide is used for very small DNA, but agarose is the matrix NCERT names; “only” makes (a) wrong.',
          },
          { label: 'agarose, a polysaccharide from seaweed', nudge: null },
          {
            label: 'cellulose from plants',
            nudge: '<b>(c)</b> and <b>(d)</b> are cell-wall polysaccharides used as lysing-enzyme substrates elsewhere in the chapter, placed here to test whether you confuse the contexts.',
          },
          {
            label: 'chitin from fungi',
            nudge: '<b>(c)</b> and <b>(d)</b> are cell-wall polysaccharides used as lysing-enzyme substrates elsewhere in the chapter, placed here to test whether you confuse the contexts.',
          },
        ],
        correct: 1,
        solution: 'Agarose from seaweed is the standard for DNA.',
      },
      {
        t: 'mcq',
        q: 'Separated DNA fragments in a gel are visualised by staining with ethidium bromide and exposing to:',
        opts: [
          { label: 'visible white light', nudge: '<b>(a)</b> and <b>(b)</b> will not excite the dye to fluoresce.' },
          { label: 'infrared light', nudge: '<b>(a)</b> and <b>(b)</b> will not excite the dye to fluoresce.' },
          { label: 'ultraviolet light', nudge: null },
          { label: 'X-rays', nudge: '<b>(d)</b> is unrelated to this visualisation.' },
        ],
        correct: 2,
        solution: 'Ethidium-bromide-bound DNA fluoresces under UV.',
      },
      {
        t: 'mcq',
        q: 'The recovery of a separated DNA fragment from the gel is called:',
        opts: [
          {
            label: 'ligation',
            nudge: '<b>(a)</b> joins DNA, <b>(b)</b> is a PCR step, <b>(d)</b> is DNA uptake by a host: all later steps, not recovery from a gel.',
          },
          {
            label: 'annealing',
            nudge: '<b>(a)</b> joins DNA, <b>(b)</b> is a PCR step, <b>(d)</b> is DNA uptake by a host: all later steps, not recovery from a gel.',
          },
          { label: 'elution', nudge: null },
          {
            label: 'transformation',
            nudge: '<b>(a)</b> joins DNA, <b>(b)</b> is a PCR step, <b>(d)</b> is DNA uptake by a host: all later steps, not recovery from a gel.',
          },
        ],
        correct: 2,
        solution: 'Cutting out the band and extracting the DNA is elution.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the charge/electrode.</b> DNA is <b>negative</b> → moves to the <b>anode (+)</b>. Stating “positive” or “cathode” is a common error here (the book’s estimate from past papers, not official figures).',
          '<b>Reversing the size–distance rule. Smaller travels farther.</b> Students sometimes invert this under exam pressure.',
          '<b>Confusing agarose with cell-wall polysaccharides.</b> Agarose (seaweed) is the gel; cellulose/chitin are lysing-enzyme substrates from the isolation step: do not mix them up.',
          '<b>Forgetting the staining requirement.</b> DNA bands are invisible until stained with <b>ethidium bromide</b> and viewed under <b>UV</b>; unstained DNA cannot be seen by eye.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Compress the whole topic to one chant: “Negative DNA runs to the positive anode; small runs far; stain with EtBr, see under UV.” That single line answers the four most common question types.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Purpose', note: 'separate restriction-digested DNA fragments by size, then isolate the desired one.' },
          { f: 'Principle', note: 'negatively charged DNA migrates through an <b>agarose</b> (seaweed) gel toward the <b>anode (+)</b>.' },
          { f: 'Size rule', note: 'smaller fragments travel <b>farther</b>; larger stay near the wells (loaded at the <b>cathode</b> − end).' },
          { f: 'Visualisation', note: 'stain with <b>ethidium bromide</b> → view under <b>UV</b> → <b>orange bands</b>.' },
          { f: 'Isolation', note: 'cut out the band and extract the DNA = <b>elution</b> → used next for ligation.' },
          { f: 'Why size mainly', note: 'all fragments share a similar charge-to-mass ratio, so sieving by the gel is the main sorting factor.' },
        ],
        aids: ['Mnemonic: “Negatives chase the positive” (DNA → anode); “small and speedy” (small fragments go farthest).'],
      },
    ],
  },
];
