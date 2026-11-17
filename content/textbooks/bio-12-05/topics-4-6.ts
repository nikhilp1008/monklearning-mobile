import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12, Chapter 5 (Molecular Basis of Inheritance), Topics 04 to 06: pp. 250 to 271 of the
 * Class 12 Biology Master Reference, word for word. Topic 04 Translation (pp. 250 to 257), Topic 05
 * Regulation of Gene Expression & the lac Operon (pp. 258 to 264) and Topic 06 Genomics: The Human
 * Genome Project & DNA Fingerprinting (pp. 265 to 271) each start at the top of their page and are cut
 * at the book's eight sections. Figures 5.6 (caption p. 251, drawn p. 252), 5.7 (caption p. 259, drawn
 * p. 260) and 5.8 (caption p. 266, drawn p. 267) stand at the end of Key definitions, structures and
 * diagnostic features, where the book's caption stands.
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one
 * line, strand ends with the prime (5′, 3′), emphasis italics dropped, gene symbols (i, z, y, a, P, O
 * in the parts table) and the lac, trp, ara, his, val operon names italic as the page prints them,
 * scientific names italic, bold kept as printed. The three Exam Relevance boxes carry the label "the
 * book’s estimate from past papers, not official figures" after each frequency claim.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 250–257 ─────────────────────────
  {
    n: '04',
    title: 'Translation',
    kalam: 'Transcription handed us a working copy of one gene, written in the four-letter language of RNA.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Steady NEET territory: 1–2 questions a year, usually on the ribosome’s two subunits, the A/P sites, charged tRNA, or the ribozyme (23S rRNA) (the book’s estimate from past papers, not official figures). CBSE Boards ask 2–3 mark questions on the steps of translation and the role of the ribosome. CUET keeps to recall MCQs (start codon, where the amino acid attaches to tRNA). No JEE component.',
      },
      {
        t: 'p',
        html: 'Transcription handed us a working copy of one gene, written in the four-letter language of RNA. But a cell doesn’t run on RNA: it runs on <b>proteins</b>, which are chains of amino acids. <b>Translation</b> is the step where the cell reads the RNA message and builds the corresponding protein. The word is exact: we are translating from one language (nucleotide bases) into another (amino acids).',
      },
      {
        t: 'p',
        html: 'Here’s the puzzle the cell must solve. A codon (a triplet of bases like AUG) has no chemical resemblance to the amino acid it stands for. There is nothing about the shape of “A-U-G” that naturally grabs a methionine. So the cell needs a go-between: a molecule with a “reading end” that recognises the codon and a “carrying end” that holds the matching amino acid. That adapter is <b>tRNA</b>, exactly as Francis Crick predicted before anyone had seen one. (Curiously, tRNA had already been spotted in the cell and named <b>soluble RNA (sRNA)</b> before the genetic code was worked out; only later was its role as the code-reading adapter recognised.)',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a translator at the United Nations wearing headphones. One ear (the <b>anticodon</b>) listens to the incoming language: it base-pairs with the codon on the mRNA. The other hand (the <b>amino-acid acceptor end</b>) holds up the correct word in the new language: the specific amino acid. The ribosome is the conference hall where this happens: it holds the mRNA tape steady, lines up the incoming tRNAs, and welds each new amino acid onto the growing chain.',
      },
      {
        t: 'p',
        html: 'The ribosome itself is in two pieces, a <b>small subunit</b> and a <b>large subunit</b>, that clamp together around the mRNA only when work begins. The small subunit is the one that first grabs the mRNA and finds the start; the large subunit is where the chemistry happens, holding two tRNAs side by side so their amino acids sit close enough to be joined by a <b>peptide bond</b>.',
      },
      {
        t: 'p',
        html: 'A beautiful twist: the enzyme that actually forms the peptide bond is <b>not a protein at all</b>: it is an RNA. The 23S rRNA in the bacterial large subunit catalyses peptide-bond formation. An RNA acting as an enzyme is called a <b>ribozyme</b>, and this one is often cited in support of the RNA-world hypothesis, that RNA catalysts came before protein enzymes.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Translation reads only the <b>coding region</b>: the stretch between the start codon (AUG) and a stop codon. The mRNA also carries <b>untranslated regions (UTRs)</b>, a 5′ leader and a 3′ trailer, that are present but never translated into protein; they help regulate efficiency. And there is <b>no tRNA for the stop codons</b>: when the ribosome reaches one, no adapter fits, which is precisely how the cell knows to stop.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      { t: 'p', html: '<b>The translation machinery</b>: the cast of characters NEET expects you to list:' },
      {
        t: 'table',
        title: null,
        head: ['Component', 'Role'],
        rows: [
          ['mRNA', 'Carries the codon sequence (the message)'],
          ['Ribosome', 'Site of protein synthesis; small + large subunits'],
          ['tRNA', 'Adapter: anticodon reads codon, acceptor end carries amino acid'],
          ['Aminoacyl-tRNA synthetase', '“Charges” tRNA by attaching the correct amino acid (activation)'],
          ['Amino acids', 'The building blocks linked into the polypeptide'],
        ],
      },
      {
        t: 'p',
        html: '<b>tRNA: the adapter, examined closely:</b><br>• <b>Anticodon loop:</b> three bases complementary to the codon; reads the message.<br>• <b>Amino-acid acceptor end:</b> the <b>3′ end</b>, bearing a <b>–CCA-OH</b> to which the amino acid attaches.<br>• tRNAs are <b>specific</b>: each is charged with one particular amino acid.<br>• An <b>initiator tRNA</b> exists for starting; there are <b>no tRNAs for stop codons</b>.',
      },
      {
        t: 'p',
        html: '<b>The ribosome:</b><br>• Two subunits; in the inactive state they sit apart. Built of structural <b>rRNAs</b> and (in eukaryotes) about 80 proteins.<br>• <b>Small subunit:</b> binds the mRNA and begins translation.<br>• <b>Large subunit:</b> has two tRNA sites: the <b>P-site (peptidyl)</b> holding the growing chain, and the <b>A-site (aminoacyl)</b> receiving the next charged tRNA (the sites sit between the two subunits; there is also an exit, E, site).<br>• Contains the <b>ribozyme</b> (23S rRNA in bacteria) that forms peptide bonds.',
      },
      {
        t: 'p',
        html: '<b>Translational unit:</b> the RNA stretch from the <b>start codon (AUG)</b> to the <b>stop codon</b>, flanked by the 5′ leader and 3′ trailer UTRs.',
      },
      {
        t: 'p',
        html: '<b>Codon–anticodon pairing: a classic trap.</b> The anticodon is <b>antiparallel</b> to the codon. For codon 5′–AUG–3′, the pairing anticodon is 3′–UAC–5′ (equivalently written 5′–CAU–3′). Always check direction before matching.',
      },
      { t: 'fig', id: 'b12-05-fig-5.6' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>Charging the tRNA (amino-acid activation)</b>' },
      {
        t: 'p',
        html: 'Before any reading happens, each amino acid must be loaded onto its correct tRNA. <b>Aminoacyl-tRNA synthetase</b> attaches the amino acid to its specific tRNA, using energy from ATP. The product is a <b>charged (aminoacylated) tRNA</b>. <b>Reason:</b> the ribosome cannot check that an amino acid is “correct”: it trusts that each tRNA already carries the right cargo, so accuracy is enforced here, at charging.',
      },
      { t: 'p', html: '<b>The three stages of translation</b>' },
      {
        t: 'p',
        html: '<b>Initiation.</b> The mRNA binds the <b>small ribosomal subunit</b>, which comes to sit on the start codon <b>AUG</b>. The <b>initiator tRNA</b> (carrying methionine) pairs with AUG, and the large subunit then joins to complete the ribosome. <b>Reason:</b> assembling around the start codon guarantees the reading frame is set correctly from base one: a shift here would garble the entire protein.',
      },
      {
        t: 'p',
        html: '<b>Elongation.</b> The ribosome moves codon by codon along the mRNA in the 5′ → 3′ direction:<br>1. A charged tRNA whose anticodon matches the next codon enters the <b>A-site</b>.<br>2. The <b>ribozyme</b> catalyses a <b>peptide bond</b> between the amino acid in the A-site and the growing chain held in the <b>P-site</b>.<br>3. The ribosome translocates: the now-empty tRNA exits, the peptide-bearing tRNA shifts to the P-site, and the A-site opens for the next codon.<br>This cycle repeats, lengthening the polypeptide one amino acid per codon.',
      },
      {
        t: 'p',
        html: '<b>Termination.</b> When a <b>stop codon</b> (UAA, UAG, UGA) enters the A-site, no tRNA can pair with it. A <b>release factor</b> instead binds, triggering release of the completed polypeptide and disassembly of the ribosome. <b>Reason:</b> the absence of a matching adapter, plus a protein factor that recognises the stop signal, ends synthesis cleanly.',
      },
      { t: 'p', html: '<b>The energy budget: why translation is expensive</b>' },
      {
        t: 'p',
        html: 'Translation is a costly process for a cell, and the cost is paid at two distinct points. First, <b>charging</b> each tRNA consumes ATP: the aminoacyl-tRNA synthetase spends energy to forge the high-energy bond between amino acid and tRNA. Second, the ribosomal steps themselves (joining the subunits at initiation and the repeated translocation during elongation) are driven by <b>GTP</b>. <b>Reason:</b> building an ordered polymer against the tendency toward disorder, and doing so with high fidelity, is thermodynamically costly; the cell front-loads energy into the charged tRNA so that the actual bond-forming step on the ribosome is favourable. This is also why a cell will not waste resources translating an mRNA it no longer needs: degrading the message is the cheapest “off switch.”',
      },
      { t: 'p', html: '<b>Coupling in prokaryotes</b>' },
      {
        t: 'p',
        html: 'In a bacterium there is no nuclear membrane separating the DNA from the cytoplasm, and the mRNA needs no processing (no splicing, capping or tailing). The consequence is striking: <b>transcription and translation happen at the same time, in the same place</b>: ribosomes can begin translating the 5′ end of an mRNA while RNA polymerase is still synthesising its 3′ end. In eukaryotes this is impossible: transcription is locked inside the nucleus and the mRNA must be fully processed and exported before any ribosome can touch it. This single architectural difference (nucleus or no nucleus) explains many of the pro- versus eukaryote contrasts that examiners pair up.',
      },
      { t: 'p', html: '<b>Why the start and stop signals matter</b>' },
      {
        t: 'p',
        html: 'Translation is a frame-locked process: it must begin at the right base and read in contiguous triplets to the stop. AUG does double duty: it is both methionine’s codon and the “begin here” mark, which is why an mRNA normally needs an AUG to be translated (bacteria occasionally start at GUG or UUG, which the initiator tRNA still reads as methionine). The stop codons, having no tRNA, are the usual built-in “end” signal. Together these bracket the <b>translational unit</b> and ensure the ribosome neither starts in the wrong frame nor runs past the message into the trailer UTR.',
      },
      {
        t: 'p',
        html: 'Two further safeguards keep the protein accurate. The <b>reading frame is preserved mechanically</b>: because the ribosome translocates exactly three bases at every step, it does not normally “drift” between frames once initiation has set it: this is the molecular reason a comma-less triplet code works in practice, not just in theory. And <b>accuracy is enforced upstream</b>, at charging: the aminoacyl-tRNA synthetase is highly selective and even proofreads, rejecting an amino acid loaded onto the wrong tRNA. <b>Reason:</b> the ribosome itself checks only the codon–anticodon match, not whether the cargo is correct, so if the wrong amino acid were ever attached to a tRNA, the ribosome would happily incorporate it. Putting the quality control at the charging step protects every later codon. This division of labour (fidelity at charging, frame-keeping at the ribosome, defined start and stop on the message) is what lets a cell translate thousands of bases into a precise protein with very few errors.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 3 marks',
        q: 'List the components required for translation, and state the specific role of the ribosome’s large subunit.',
        steps: [
          '<b>Model answer.</b> Translation requires: <b>mRNA</b> (the message), <b>ribosome</b> (site of synthesis), <b>tRNAs</b> (adapters carrying amino acids), <b>aminoacyl-tRNA synthetase</b> (charges each tRNA with its amino acid), and <b>amino acids</b> (building blocks). The <b>large subunit</b> holds two adjacent tRNA sites (P and A) so that the amino acids they carry lie close together, and it provides the <b>ribozyme (23S rRNA)</b> that catalyses <b>peptide-bond</b> formation between them.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match each item to its description.<br><b>Column I:</b> A. Anticodon; B. 3′ CCA-OH end; C. Ribozyme; D. Stop codon.<br><b>Column II:</b> 1. End of tRNA where amino acid attaches; 2. Triplet that pairs with the codon; 3. Signal with no corresponding tRNA; 4. 23S rRNA catalysing peptide bonds.',
        steps: [
          '<b>Reasoning shortcut:</b> the two ends of tRNA go together (read end = anticodon; carry end = 3′ CCA). Then “ribozyme = RNA enzyme = 23S,” and “stop = no tRNA fits.”',
        ],
        ans: 'A–2, B–1, C–4, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> The ribosome can be regarded as a ribozyme. <b>Reason (R):</b> The 23S rRNA of the bacterial large subunit catalyses peptide-bond formation.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'A ribozyme is an RNA that acts as an enzyme; the ribosome qualifies precisely because its rRNA, not a protein, carries out catalysis. R is the direct justification for A. Students who choose <b>(c)</b> wrongly assume a protein enzyme forms the peptide bond: a common misconception this question targets.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · codon/anticodon reasoning',
        q: 'A segment of mRNA reads 5′–AUG GCA UAA–3′. (i) Write the anticodon of the tRNA that reads the second codon. (ii) How many amino acids will the finished polypeptide contain, and why? (iii) What happens at the third codon?',
        steps: [
          '<b>Solution.</b> (i) Second codon = 5′–GCA–3′. The anticodon is complementary and antiparallel: 3′–CGU–5′ (i.e. 5′–UGC–3′). (ii) Codons present: AUG (Met), GCA (Ala), UAA (stop). Only the first two are translated, so the polypeptide has <b>2 amino acids</b>: the stop codon codes for none. (iii) The third codon, <b>UAA</b>, is a stop codon: <b>no tRNA pairs with it</b>, so a <b>release factor</b> binds, the polypeptide is released, and the ribosome dissociates. (The trap is counting three amino acids by treating every triplet as coding: a stop codon codes for none here.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the enzyme that charges a tRNA with its amino acid and state where on the tRNA the amino acid attaches.',
            a: '<b>Aminoacyl-tRNA synthetase</b>; at the <b>3′ end (–CCA-OH)</b>.',
          },
          {
            q: '[CUET] Which ribosomal subunit first binds the mRNA at the start of translation?',
            a: 'The <b>small (smaller) subunit</b>.',
          },
          {
            q: '[NEET] Why is there no tRNA for the codons UAA, UAG and UGA?',
            a: 'They are <b>stop (nonsense) codons</b> with no complementary anticodon, so synthesis terminates there.',
          },
          {
            q: '[NEET] Distinguish between the P-site and the A-site of the ribosome.',
            a: '<b>P-site (peptidyl)</b> holds the tRNA bearing the growing polypeptide; <b>A-site (aminoacyl)</b> receives the next incoming charged tRNA.',
          },
          {
            q: '[NEET high-difficulty] An mRNA’s coding region has 153 nucleotides between and including the start and stop codons. Calculate the number of amino acids in the polypeptide, showing your reasoning.',
            a: '<frac><num>153</num><den>3</den></frac> = 51 codons; subtract the stop codon → <b>50 amino acids</b>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The amino acid attaches to the tRNA molecule at its:',
        opts: [
          { label: '5′ end', nudge: '<b>(a)</b> and <b>(d)</b> are simply other parts of the molecule with no acceptor role.' },
          { label: '3′ end', nudge: null },
          {
            label: 'anticodon loop',
            nudge: '<b>(c)</b> is the reading end (it pairs with the codon, it doesn’t carry the amino acid), a tempting distractor.',
          },
          { label: 'DHU loop', nudge: '<b>(a)</b> and <b>(d)</b> are simply other parts of the molecule with no acceptor role.' },
        ],
        correct: 1,
        solution: '3′ end (the –CCA-OH terminus).',
      },
      {
        t: 'mcq',
        q: 'To initiate translation, the mRNA first binds to:',
        opts: [
          { label: 'the larger ribosomal subunit', nudge: '<b>(a)</b> reverses the roles.' },
          { label: 'the whole ribosome', nudge: '<b>(b)</b> ignores that the subunits are separate before initiation.' },
          { label: 'the smaller ribosomal subunit', nudge: null },
          { label: 'a tRNA', nudge: '<b>(d)</b> confuses the adapter with the platform.' },
        ],
        correct: 2,
        solution: 'the smaller subunit. It binds mRNA and finds the start; the large subunit joins afterward.',
      },
      {
        t: 'mcq',
        q: 'The enzyme that catalyses peptide-bond formation in the bacterial ribosome is:',
        opts: [
          { label: 'a protein in the small subunit', nudge: '<b>(a)</b> wrongly assumes a protein enzyme.' },
          { label: '23S rRNA (a ribozyme)', nudge: null },
          {
            label: 'aminoacyl-tRNA synthetase',
            nudge: '<b>(c)</b> acts before translation (charging tRNA), not during peptide-bond formation: the classic trap.',
          },
          { label: 'a release factor', nudge: '<b>(d)</b> acts at termination, not bond formation.' },
        ],
        correct: 1,
        solution: '23S rRNA. Peptide-bond catalysis is done by rRNA, making the ribosome a ribozyme.',
      },
      {
        t: 'mcq',
        q: 'Untranslated regions (UTRs) in an mRNA are:',
        opts: [
          {
            label: 'the introns removed during splicing',
            nudge: '<b>(a)</b> confuses UTRs with introns (introns are already removed before the mRNA exists).',
          },
          { label: 'sequences at the 5′ and 3′ ends that are present but not translated', nudge: null },
          { label: 'the stop codons', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated features.' },
          { label: 'the same as the anticodon', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated features.' },
        ],
        correct: 1,
        solution: 'UTRs are the 5′ leader and 3′ trailer: present in mature mRNA but not translated.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Counting the stop codon as an amino acid.</b> Codons = nucleotides ÷ 3; amino acids = codons − 1 (the stop codes none). Forgetting the “−1” is a common numerical error.',
          '<b>Putting the amino acid on the anticodon.</b> The amino acid sits at the <b>3′ acceptor end</b>; the anticodon only reads the codon. Two different ends, two different jobs.',
          '<b>Calling aminoacyl-tRNA synthetase a “ribosome enzyme.”</b> It charges tRNA before translation; the peptide-bond enzyme is the <b>rRNA ribozyme</b>. Don’t merge the two.',
          '<b>Forgetting codon–anticodon antiparallelism.</b> Match 5′ → 3′ codon with a 3′ → 5′ anticodon; writing the anticodon in the wrong direction flips the answer.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “how many amino acids?” go straight to (nucleotides ÷ 3) − 1. For anticodon questions, complement the codon and reverse the direction: two quick steps, no full table needed.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Translation', note: 'codon sequence on mRNA → amino-acid sequence (polypeptide) on the ribosome.' },
          { f: 'Machinery', note: 'mRNA + ribosome + tRNA + aminoacyl-tRNA synthetase + amino acids.' },
          { f: 'tRNA', note: 'anticodon reads codon; amino acid attaches at 3′ (–CCA-OH) end; no tRNA for stop codons.' },
          { f: 'Ribosome', note: 'small subunit binds mRNA & starts; large subunit has P-site + A-site; 23S rRNA = ribozyme forms peptide bonds.' },
          {
            f: 'Stages',
            note: 'initiation (mRNA + small subunit at AUG) → elongation (A-site entry → peptide bond → translocation) → termination (stop codon → release factor).',
          },
          { f: 'Translational unit', note: 'AUG (start) … stop, flanked by 5′/3′ UTRs.' },
          {
            f: 'Energy & compartment',
            note: 'translation is energy-expensive (ATP at charging, GTP at ribosomal steps). Prokaryotes: transcription & translation coupled (no nucleus); eukaryotes: separated.',
          },
        ],
        aids: ['Mnemonic, ribosome sites: A for Arriving (incoming charged tRNA), P for Peptide (holds the chain).'],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 258–264 ─────────────────────────
  {
    n: '05',
    title: 'Regulation of Gene Expression & the lac Operon',
    kalam: 'A cell carries thousands of genes, but it never needs all of them switched on at once.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked topic: the <i>lac</i> operon yields 1–2 questions almost every year (which gene codes which enzyme, what the inducer does, negative vs positive regulation) (the book’s estimate from past papers, not official figures). CBSE Boards ask 3–5 mark questions on the structure and working of the <i>lac</i> operon and the levels of regulation. CUET asks recall MCQs (who proposed the operon, what β-galactosidase does).',
      },
      {
        t: 'p',
        html: 'A cell carries thousands of genes, but it never needs all of them switched on at once: that would be as wasteful as a kitchen running every appliance day and night. Instead the cell switches genes <b>on and off in response to need</b>. This is <b>regulation of gene expression</b>, and the classic example is how the bacterium <i>E. coli</i> decides whether to make the enzymes for digesting lactose.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a factory with a machine for processing a special raw material (lactose). Keeping that machine running when no lactose is around wastes energy. So the factory installs a <b>switch</b> wired to a sensor: when lactose arrives, the switch flips on and the machine runs; when lactose is gone, the switch flips off. The <i>lac</i> operon is precisely such a switch, built right into the DNA.',
      },
      {
        t: 'p',
        html: 'The neat trick is what throws the switch. In its resting state the operon is held <b>off</b> by a <b>repressor</b> protein that sits on a stretch of DNA (the operator) and physically blocks the RNA polymerase. When lactose appears, a little of it (as allolactose) <b>binds the repressor and changes its shape</b> so it falls off the DNA. Now the polymerase is free to transcribe, and the lactose-digesting enzymes are made. Because the controlling molecule (the repressor) normally prevents transcription, this is called <b>negative regulation</b>: the default is “off,” and lactose relieves the block.',
      },
      {
        t: 'p',
        html: 'The deeper idea is that <b>the substrate switches on the enzymes that digest it.</b> Lactose is both the food and the signal that says “make the tools to eat me.” This kind of substrate-controlled cluster of genes, discovered by <b>Jacob and Monod in 1961</b>, is called an <b>operon</b>, and it remains the textbook model of how genes are controlled.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The operon model as taught is a <b>prokaryotic</b> arrangement; eukaryotes regulate genes at several levels and rarely use operons. And the <i>lac</i> operon’s “on” state still depends on glucose being scarce: if the cell’s preferred fuel (glucose) is available, it will largely not bother with lactose even if lactose is present. The simple negative-regulation story is the core; positive regulation (by activators) fine-tunes it.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      { t: 'p', html: '<b>Levels of gene regulation:</b>' },
      {
        t: 'table',
        title: null,
        head: ['In eukaryotes (multiple levels)', 'In prokaryotes'],
        rows: [
          [
            'Transcriptional (forming the primary transcript)<br>Processing (regulation of splicing)<br>Transport of mRNA (nucleus → cytoplasm)<br>Translational level',
            '<b>Transcriptional initiation is the predominant control point</b><br>(mRNA needs no processing)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The operon: general structure</b> (Jacob & Monod, 1961): a unit of one or more <b>structural genes</b> controlled by a common <b>promoter</b> and <b>operator</b>, plus a <b>regulatory (<i>i</i>) gene</b> that codes for a repressor. Examples: <i>lac</i>, <i>trp</i>, <i>ara</i>, <i>his</i>, <i>val</i> operons.',
      },
      {
        t: 'p',
        html: '<b>The <i>lac</i> operon: its parts</b> (the most-tested table in this section; the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Component', 'Symbol', 'Role / Product'],
        rows: [
          ['Regulatory gene', '<i>i</i>', 'Codes the <b>repressor</b> (<i>i</i> = inhibitor)'],
          ['Promoter', '<i>P</i>', 'Binding site for RNA polymerase'],
          ['Operator', '<i>O</i>', 'Where the repressor binds to block transcription'],
          ['Structural gene 1', '<i>z</i>', '<b>β-galactosidase</b>: hydrolyses lactose → galactose + glucose'],
          ['Structural gene 2', '<i>y</i>', '<b>Permease</b>: increases cell permeability to lactose (β-galactosides)'],
          ['Structural gene 3', '<i>a</i>', '<b>Transacetylase</b>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key players:</b><br>• <b>Repressor:</b> product of the <i>i</i> gene; binds the operator and prevents transcription (negative control).<br>• <b>Inducer: lactose</b> (as allolactose): binds and inactivates the repressor, switching the operon <b>on</b>.<br>• <b>Negative vs positive regulation:</b> the <i>lac</i> operon is primarily under <b>negative regulation</b> (repressor off-switch); it can also be subject to <b>positive regulation</b> by activator proteins.',
      },
      { t: 'fig', id: 'b12-05-fig-5.7' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>The <i>lac</i> operon switched OFF (no lactose)</b>' },
      {
        t: 'p',
        html: 'When lactose is absent, the cell has no reason to make lactose-digesting enzymes. The <i>i</i> gene continuously produces the <b>repressor protein</b>, which binds the <b>operator</b> region. With the repressor parked on the operator, RNA polymerase <b>cannot move past the promoter</b> to transcribe the <i>z</i>, <i>y</i>, <i>a</i> genes. <b>Reason:</b> the operator overlaps the path the polymerase must take, so an occupied operator is a physical roadblock.<br>Result: little or no β-galactosidase, permease, or transacetylase is made.',
      },
      { t: 'p', html: '<b>The <i>lac</i> operon switched ON (lactose present)</b>' },
      {
        t: 'p',
        html: 'When lactose is supplied as the carbon source (and glucose is scarce):<br>1. A small amount of lactose enters the cell: the basal trace of <b>permease</b> lets it in.<br>2. Lactose (as <b>allolactose</b>) acts as the <b>inducer</b>: it <b>binds the repressor and inactivates it</b>, changing the repressor’s shape so it can no longer hold the operator.<br>3. With the operator now free, <b>RNA polymerase binds the promoter and transcribes</b> the <i>z</i>, <i>y</i>, <i>a</i> genes as a single <b>polycistronic mRNA</b>.<br>4. The enzymes are translated: <b>β-galactosidase</b> hydrolyses lactose into galactose and glucose; <b>permease</b> brings in more lactose; <b>transacetylase</b> completes the set.<br>As lactose is used up, the inducer disappears, the repressor reactivates and re-binds the operator, and the operon switches off again: a clean, self-limiting feedback loop.',
      },
      { t: 'p', html: '<b>Negative and positive regulation</b>' },
      {
        t: 'p',
        html: 'Because the controlling element (the repressor) works by <b>preventing</b> transcription, the <i>lac</i> operon is a model of <b>negative regulation</b>: the system is “off by default,” and the inducer’s job is to remove the block. The same operon can also be governed by <b>positive regulation</b>, in which <b>activator proteins</b> bind near the promoter and help RNA polymerase start, acting as on-switches rather than off-switches. <b>Reason:</b> combining a negative switch (respond to lactose) with a positive one (respond to glucose levels) lets the cell make a smart, two-input decision about which fuel to burn.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 5 marks',
        q: 'Explain the working of the <i>lac</i> operon in the presence of lactose. Name the three structural genes and their products.',
        steps: [
          '<b>Model answer.</b> When lactose is present, it acts as an <b>inducer</b>: a small amount enters the cell and <b>binds the repressor</b> (the product of the <i>i</i> gene), <b>inactivating</b> it so it can no longer bind the <b>operator</b>. With the operator free, <b>RNA polymerase</b> binds the <b>promoter</b> and transcribes the structural genes as one polycistronic mRNA. The three structural genes and products are: <b><i>z</i></b> → <b>β-galactosidase</b> (hydrolyses lactose into galactose and glucose), <b><i>y</i></b> → <b>permease</b> (increases permeability to lactose), and <b><i>a</i></b> → <b>transacetylase</b>. As lactose is exhausted, the repressor is freed, re-binds the operator, and the operon switches off.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match the <i>lac</i> operon gene/element with its role.<br><b>Column I:</b> A. <i>i</i> gene; B. <i>z</i> gene; C. <i>y</i> gene; D. Operator.<br><b>Column II:</b> 1. β-galactosidase; 2. Repressor; 3. Binding site for repressor; 4. Permease.',
        steps: [
          '<b>Reasoning shortcut:</b> <i>i</i> = <b>i</b>nhibitor (repressor); then the structural genes in order <b><i>z</i>, <i>y</i>, <i>a</i></b> map to <b>β-gal, permease, transacetylase</b>; the operator is the repressor’s landing pad.',
        ],
        ans: 'A–2, B–1, C–4, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> In the <i>lac</i> operon, lactose is referred to as an inducer. <b>Reason (R):</b> Lactose binds to and inactivates the repressor, allowing transcription of the operon.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Lactose is called an inducer precisely because it induces (switches on) the operon by inactivating the repressor: R is the direct definition behind A. Students who choose <b>(b)</b> know both statements but miss that inactivating the repressor is the mechanism of induction.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · reasoning',
        q: 'A mutant <i>E. coli</i> has a defective <i>i</i> gene that produces a repressor unable to bind lactose (but still able to bind the operator). Predict the operon’s behaviour in (i) the absence and (ii) the presence of lactose.',
        steps: [
          '<b>Solution.</b> The repressor can still bind the operator but can <b>no longer be inactivated by lactose</b>. (i) <b>Absence of lactose:</b> the repressor binds the operator → operon <b>OFF</b> (normal). (ii) <b>Presence of lactose:</b> normally lactose would inactivate the repressor and switch the operon on, but this repressor cannot bind lactose, so it <b>stays on the operator</b> and the operon remains <b>OFF</b> even when lactose is present. The cell therefore <b>cannot use lactose efficiently</b>, because it cannot make β-galactosidase or permease. (This is the opposite of a constitutive mutant, where a non-functional repressor leaves the operon permanently ON.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the scientists who proposed the operon concept and the year.',
            a: '<b>François Jacob and Jacques Monod, 1961.</b>',
          },
          {
            q: '[CUET] What is the function of the enzyme β-galactosidase in the <i>lac</i> operon?',
            a: 'It <b>hydrolyses lactose into galactose and glucose</b>.',
          },
          {
            q: '[NEET] State what happens to the repressor when the inducer is present.',
            a: 'The inducer (lactose/allolactose) <b>binds and inactivates</b> the repressor, which then leaves the operator.',
          },
          {
            q: '[NEET] Why is the <i>lac</i> operon said to be under negative regulation?',
            a: 'Because its controlling element, the <b>repressor, acts by preventing (switching off) transcription</b>; the default state is off.',
          },
          {
            q: '[NEET high-difficulty] Explain why a non-sense mutation in the <i>y</i> gene would not prevent the production of β-galactosidase but would prevent efficient lactose uptake.',
            a: 'The <i>y</i> gene codes <b>permease</b>, not β-galactosidase, so β-gal (from the <i>z</i> gene) is still made; but without functional permease, lactose cannot be efficiently transported into the cell, impairing uptake.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The <i>i</i> gene of the <i>lac</i> operon codes for:',
        opts: [
          { label: 'β-galactosidase', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are products of the structural genes <i>z</i>, <i>y</i>, <i>a</i>.' },
          { label: 'permease', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are products of the structural genes <i>z</i>, <i>y</i>, <i>a</i>.' },
          { label: 'the repressor', nudge: null },
          { label: 'transacetylase', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are products of the structural genes <i>z</i>, <i>y</i>, <i>a</i>.' },
        ],
        correct: 2,
        solution: 'the repressor (<i>i</i> = inhibitor). The trap is confusing the regulatory gene with the structural ones.',
      },
      {
        t: 'mcq',
        q: 'In the <i>lac</i> operon, the inducer is:',
        opts: [
          { label: 'glucose', nudge: '<b>(a)</b> glucose actually favours keeping the operon off (the cell prefers glucose).' },
          { label: 'galactose', nudge: '<b>(b)</b> galactose is a product of lactose breakdown, not the inducer.' },
          { label: 'lactose', nudge: null },
          { label: 'the repressor', nudge: '<b>(d)</b> the repressor is the off-switch, not the inducer.' },
        ],
        correct: 2,
        solution: 'lactose. It inactivates the repressor.',
      },
      {
        t: 'mcq',
        q: 'When the repressor binds the operator, the result is:',
        opts: [
          { label: 'transcription proceeds rapidly', nudge: '<b>(a)</b> is the opposite.' },
          { label: 'RNA polymerase cannot transcribe the structural genes', nudge: null },
          { label: 'the inducer is synthesised', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated to operator binding.' },
          { label: 'translation is enhanced', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated to operator binding.' },
        ],
        correct: 1,
        solution: 'A repressor-occupied operator blocks RNA polymerase, switching the operon off.',
      },
      {
        t: 'mcq',
        q: 'The operon concept was first proposed for which system?',
        opts: [
          { label: '<i>trp</i> operon', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real operons but were not the original model.' },
          { label: '<i>lac</i> operon', nudge: null },
          { label: '<i>ara</i> operon', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real operons but were not the original model.' },
          { label: '<i>his</i> operon', nudge: '<b>(a)</b>, <b>(c)</b>, <b>(d)</b> are real operons but were not the original model.' },
        ],
        correct: 1,
        solution: '<i>lac</i> operon: the first and classic operon model (Jacob & Monod).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up which gene makes which enzyme.</b> Lock the order: <b><i>z</i> → β-galactosidase, <i>y</i> → permease, <i>a</i> → transacetylase</b>; <i>i</i> → repressor. The structural genes run <i>z</i>, <i>y</i>, <i>a</i>; the <i>i</i> gene is separate.',
          '<b>Calling glucose the inducer.</b> The inducer is <b>lactose</b>; glucose, if present, tends to keep the operon off (the cell prefers it).',
          '<b>Thinking “negative regulation” means the operon is bad or always off.</b> It just means the controlling protein represses: the default is off, and the inducer turns it on.',
          '<b>Forgetting the operator ≠ promoter.</b> Promoter = where RNA polymerase binds; operator = where the repressor binds. Two different sites with two different jobs.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Decide the operon’s state by asking one question: is the repressor on the operator? On the operator = OFF; off the operator (because lactose inactivated it) = ON. Everything else follows.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Gene regulation (prokaryote)', note: 'mainly at transcriptional initiation. Eukaryote: transcriptional, processing, transport, translational.' },
          {
            f: 'Operon (Jacob & Monod, 1961)',
            note: 'structural genes + common promoter + operator + regulatory (<i>i</i>) gene. Examples: <i>lac</i>, <i>trp</i>, <i>ara</i>, <i>his</i>, <i>val</i>.',
          },
          { f: '<i>lac</i> genes', note: '<i>i</i> → repressor; <i>z</i> → β-galactosidase; <i>y</i> → permease; <i>a</i> → transacetylase.' },
          { f: 'OFF (no lactose)', note: 'repressor binds operator → RNA polymerase blocked.' },
          { f: 'ON (lactose present)', note: 'lactose (inducer) inactivates repressor → polymerase transcribes <i>z</i>, <i>y</i>, <i>a</i>.' },
          { f: 'Regulation type', note: 'primarily negative (repressor); can also be positive (activators).' },
        ],
        aids: ['Mnemonic, structural genes & products: “ZYA = β-gal, Permease, Transacetylase” (in order <i>z</i>-<i>y</i>-<i>a</i>).'],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 265–271 ─────────────────────────
  {
    n: '06',
    title: 'Genomics: The Human Genome Project & DNA Fingerprinting',
    kalam: 'If a single gene is a sentence, a genome is the entire book of an organism’s DNA, every gene plus all the non-coding text between them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Often asked at the chapter’s end. NEET asks 1–2 questions on HGP salient features (number of genes, chromosome 1 vs Y, SNPs) and on DNA fingerprinting (VNTR, the technique’s steps, Alec Jeffreys) (the book’s estimate from past papers, not official figures). CBSE Boards ask 3–5 mark questions on HGP goals/features and the steps of DNA fingerprinting. CUET keeps to recall MCQs.',
      },
      {
        t: 'p',
        html: 'If a single gene is a sentence, a <b>genome</b> is the entire book of an organism’s DNA: every gene plus all the non-coding text between them. The <b>Human Genome Project (HGP)</b> set out to do something audacious: read that whole book, letter by letter, for the human species. And once we could read genomes, a second, very practical idea followed: if everyone’s book is almost identical but differs in tiny, personal ways, those differences can act as a molecular “signature” to tell individuals apart. That is <b>DNA fingerprinting</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine printing every human’s genome as a 3-billion-letter book. About <b>99.9%</b> of the letters are identical between any two people: same species, same book. The magic is in the <b>0.1%</b> that varies. Some of that variation is single-letter typos scattered through the text (SNPs); some is in stretches where a short phrase is repeated a different number of times in different people (VNTRs). Count those repeats at several spots and you get a pattern unique to each person, like a barcode written in DNA.',
      },
      {
        t: 'p',
        html: 'The HGP, launched in <b>1990</b>, was a mega-project to determine the sequence of all ~3 billion base pairs of human DNA and to identify all its genes. A surprising headline result: humans have only about <b>30,000 genes</b>, far fewer than the 80,000–140,000 once guessed, and not many more than a worm. Much of our genome doesn’t code for protein at all.',
      },
      {
        t: 'p',
        html: 'DNA fingerprinting, developed by <b>Alec Jeffreys in the 1980s</b>, exploits the highly variable repeat regions (VNTRs) to identify individuals, now indispensable in forensics, paternity disputes, and tracing ancestry.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> DNA fingerprinting compares <b>non-coding, repetitive</b> DNA, not genes, because that is where useful person-to-person variation is concentrated. And HGP’s “number of genes” is an estimate refined over time; the precise count depends on how a gene is defined. The power of fingerprinting rests on one assumption: that the chosen VNTR loci are <b>highly polymorphic</b>, so two unrelated people are extremely unlikely to share the same pattern.',
      },

      { t: 'part', title: 'Key definitions, structures and diagnostic features' },
      {
        t: 'p',
        html: '<b>Human Genome Project: salient features</b> (high-frequency exam facts; the book’s estimate from past papers, not official figures):<br>• Launched in <b>1990</b>; aimed to sequence the entire human genome (~<b>3 billion</b> or <b>3164.7 million base pairs</b>).<br>• Estimated <b>~30,000 genes</b>: far fewer than earlier guesses of 80,000–140,000.<br>• <b>Chromosome 1</b> has the <b>most</b> genes (2968); the <b>Y chromosome</b> has the <b>fewest</b> (231).<br>• <b>99.9%</b> of nucleotide bases are exactly the same in all people.<br>• About <b>1.4 million</b> locations of single-base DNA differences (<b>SNPs</b>) were identified.<br>• Sequencing used the method developed by <b>Frederick Sanger</b>; closely tied to the new field of <b>bioinformatics</b>.<br>• Also sequenced <b>model organisms</b>: <i>E. coli</i>, yeast (<i>Saccharomyces cerevisiae</i>), roundworm, mouse.<br>• The project was completed in <b>2003</b>.<br>(NCERT’s figure of about 30,000 genes: the current estimate of protein-coding genes is about 20,000, so a question may print either; answer with the number the question’s own text gives.)',
      },
      {
        t: 'p',
        html: '<b>HGP goals</b> (the standard list): identify all genes; determine the sequence of the 3 billion bp; store the data in <b>databases</b>; improve <b>data-analysis tools</b>; transfer related <b>technologies</b>; address the <b>Ethical, Legal and Social Issues (ELSI)</b>.',
      },
      { t: 'p', html: '<b>Key genomics vocabulary:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Term', 'Meaning'],
        rows: [
          ['SNP (Single Nucleotide Polymorphism)', 'A location in the genome where a single base differs between individuals'],
          ['Repetitive DNA', 'Stretches of DNA repeated many times; usually non-coding'],
          ['Satellite DNA', 'Repetitive DNA forming separate small peaks in density-gradient centrifugation'],
          ['VNTR (Variable Number of Tandem Repeats)', 'A minisatellite whose repeat number varies greatly between individuals: the basis of DNA fingerprinting'],
        ],
      },
      {
        t: 'p',
        html: '<b>DNA fingerprinting: the essentials:</b><br>• Also called <b>DNA typing / DNA profiling</b>.<br>• Identifies differences in specific <b>repetitive (non-coding)</b> DNA regions unique to each individual.<br>• Uses <b>VNTRs</b> (a class of minisatellite satellite DNA) as probes; these show a <b>high degree of polymorphism</b>.<br>• Discovered by <b>Alec Jeffreys</b> (1985); in India, pioneered by <b>Lalji Singh</b> (CCMB, Hyderabad).',
      },
      { t: 'fig', id: 'b12-05-fig-5.8' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>How the human genome was sequenced</b>' },
      {
        t: 'p',
        html: 'The HGP broke an impossibly large problem into manageable pieces. In outline: total DNA was <b>isolated</b>, broken into fragments and <b>cloned</b> into suitable vectors (such as bacterial artificial chromosomes) to make a library; each fragment was <b>sequenced</b> (by Sanger’s method) using automated sequencers; the overlapping pieces were then <b>aligned by computer programs</b> to reconstruct the full sequence, which was <b>annotated</b> and assigned to each of the 24 chromosome types (22 autosomes + X + Y). <b>Reason:</b> no machine can read 3 billion bases in one run, so the genome must be shredded, read in parallel, and reassembled in silico, which is exactly why <b>bioinformatics</b> grew up alongside the project.',
      },
      { t: 'p', html: '<b>Why DNA fingerprinting works</b>' },
      {
        t: 'p',
        html: 'Most of the genome is identical between people, so a single gene’s sequence would tell you little. Instead, fingerprinting targets <b>VNTR</b> regions, where a short sequence is tandemly repeated a number of times that <b>varies widely between individuals</b> (a VNTR locus can range from very few to very many repeats, giving fragments of different lengths). <b>Reason:</b> the more polymorphic a region, the more reliably it distinguishes one person from another. Each person inherits one VNTR pattern from each parent, so a child’s fingerprint is a predictable blend of the parents’, which is why the technique settles paternity questions.',
      },
      {
        t: 'proc',
        title: 'The DNA fingerprinting procedure, step by step',
        steps: [
          '<b>Isolation</b> of DNA from the sample cells (e.g. blood, hair root, semen).',
          '<b>Amplification</b> (optional, a modern addition to NCERT’s list of steps): the <b>Polymerase Chain Reaction (PCR)</b> makes many copies of the DNA or of chosen VNTR regions, so even a tiny sample suffices; PCR-based typing often replaces the digestion and blotting steps.',
          '<b>Digestion</b> of the DNA into fragments using <b>restriction endonucleases</b>.',
          '<b>Separation</b> of the fragments by <b>gel electrophoresis</b> (sorting by size).',
          '<b>Blotting</b>: transfer of the separated fragments onto a synthetic membrane (nylon or nitrocellulose); this is <b>Southern blotting</b>.',
          '<b>Hybridisation</b> of the membrane with a <b>radiolabelled VNTR probe</b>, which binds its complementary repeat sequences.',
          '<b>Autoradiography</b>: exposing the membrane to X-ray film reveals a pattern of <b>bands</b> unique to the individual: the DNA fingerprint.',
        ],
      },
      {
        t: 'p',
        html: 'The resulting band pattern is then compared between samples (e.g. crime-scene DNA vs a suspect, or child vs alleged parents).',
      },
      { t: 'p', html: '<b>Applications</b>' },
      {
        t: 'p',
        html: 'DNA fingerprinting settles <b>paternity and maternity disputes</b>, is central to <b>forensic</b> identification in criminal investigations, helps in <b>studying genetic diversity and evolution</b>, and can identify individuals in disasters. HGP knowledge feeds into diagnosing, treating, and one day preventing genetic disorders, and underpins the comparative study of genomes across tissues and species.',
      },

      { t: 'part', title: 'Worked questions' },
      {
        t: 'ex',
        tag: 'CBSE Board · 5 marks',
        q: 'List any five salient features of the Human Genome Project.',
        steps: [
          '<b>Model answer.</b> (i) The human genome contains about <b>3 billion (3164.7 million) base pairs</b>. (ii) It has an estimated <b>~30,000 genes</b>, far fewer than the earlier estimate of 80,000–140,000. (iii) <b>Chromosome 1 has the most genes (2968)</b> and the <b>Y chromosome the fewest (231)</b>. (iv) <b>99.9%</b> of nucleotide bases are identical in all humans. (v) About <b>1.4 million SNP</b> locations (single-base variations) were identified, useful for finding disease-associated sequences and tracing human history.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET · match the column',
        q: 'Match the term with its description.<br><b>Column I:</b> A. VNTR; B. SNP; C. Southern blotting; D. Sanger.<br><b>Column II:</b> 1. Single-base difference between individuals; 2. Transfer of DNA fragments to a membrane; 3. Minisatellite used in DNA fingerprinting; 4. Developed the sequencing method used in HGP.',
        steps: [
          '<b>Reasoning shortcut:</b> VNTR = variable repeat (fingerprinting), SNP = single typo, Southern = transfer to membrane, Sanger = sequencing.',
        ],
        ans: 'A–3, B–1, C–2, D–4',
      },
      {
        t: 'ex',
        tag: 'NEET · assertion–reason',
        q: '<b>Assertion (A):</b> DNA fingerprinting uses repetitive, non-coding regions of DNA rather than genes. <b>Reason (R):</b> Repetitive VNTR regions show a high degree of polymorphism between individuals.<br><b>(a)</b> Both A and R true, R is the correct explanation of A<br><b>(b)</b> Both A and R true, R is not the correct explanation<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
        steps: [
          'Non-coding VNTR regions are chosen precisely because they are highly polymorphic and therefore distinguish individuals; genes vary too little between people to be as useful. R is the direct reason for A. Choosing <b>(b)</b> misses that the polymorphism is why those regions are used.',
        ],
        ans: '(a)',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty · reasoning',
        q: 'Two children are suspected of having been swapped at birth. Explain, with reasoning, how DNA fingerprinting could resolve which child belongs to which set of parents, and why comparing the coding regions of a single gene would not work.',
        steps: [
          '<b>Solution.</b> Each child inherits <b>half of their VNTR pattern from each biological parent</b>. By preparing DNA fingerprints (VNTR band patterns) of both children and both sets of parents, one matches each child to the couple whose combined banding pattern can account for the child’s bands: the child’s bands must all be present in one or other of their true parents. Comparing a single gene’s <b>coding sequence</b> would fail because coding sequences are almost identical across all humans (about <b>99.9%</b> of the whole genome is shared) and show little person-to-person variation, so they cannot discriminate between candidate parents. The <b>highly polymorphic VNTR (non-coding) regions</b> carry far more individual variation, which is why they are used to assign parentage reliably.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State any three goals of the Human Genome Project.',
            a: 'Any three of: identify all ~30,000 genes; determine the sequence of the 3 billion bp; store data in databases; improve analysis tools; transfer technologies; address ELSI.',
          },
          {
            q: '[CUET] Expand VNTR and SNP.',
            a: 'VNTR = <b>Variable Number of Tandem Repeats</b>; SNP = <b>Single Nucleotide Polymorphism</b>.',
          },
          {
            q: '[NEET] Which chromosome carries the largest number of genes, and which the fewest?',
            a: '<b>Chromosome 1</b> (most, 2968 genes); <b>Y chromosome</b> (fewest, 231).',
          },
          {
            q: '[NEET] Name the blotting technique used to transfer DNA fragments to a membrane in DNA fingerprinting.',
            a: '<b>Southern blotting.</b>',
          },
          {
            q: '[NEET high-difficulty] Why is PCR included in modern DNA fingerprinting, and how does it improve the technique?',
            a: 'PCR <b>amplifies</b> the DNA, making many copies, so that <b>even a very small or degraded sample</b> yields enough DNA to analyse, greatly increasing the technique’s <b>sensitivity</b>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The basis of DNA fingerprinting is:',
        opts: [
          { label: 'low polymorphism in coding sequences', nudge: '<b>(a)</b> coding sequences vary little.' },
          { label: 'high degree of polymorphism in repetitive sequences', nudge: null },
          { label: 'identical sequences in all individuals', nudge: '<b>(c)</b> identical sequences couldn’t distinguish anyone.' },
          { label: 'mutations in mitochondrial genes only', nudge: '<b>(d)</b> is too narrow and not the general basis.' },
        ],
        correct: 1,
        solution: 'Fingerprinting depends on <b>highly polymorphic repetitive (VNTR)</b> regions.',
      },
      {
        t: 'mcq',
        q: 'DNA fingerprinting technique was initially developed by:',
        opts: [
          { label: 'Frederick Sanger', nudge: '<b>(a)</b> developed DNA sequencing.' },
          { label: 'Jacob and Monod', nudge: '<b>(b)</b> proposed the operon.' },
          { label: 'Alec Jeffreys', nudge: null },
          {
            label: 'Lalji Singh',
            nudge: '<b>(d)</b> pioneered DNA fingerprinting in India but did not originate the technique, a common trap.',
          },
        ],
        correct: 2,
        solution: 'Alec Jeffreys.',
      },
      {
        t: 'mcq',
        q: 'Approximately how many genes did the HGP estimate in the human genome?',
        opts: [
          { label: '3 billion', nudge: '<b>(a)</b> is the number of base pairs.' },
          { label: '1.4 million', nudge: '<b>(b)</b> is the number of SNP sites.' },
          { label: '30,000', nudge: null },
          { label: '80,000–140,000', nudge: '<b>(d)</b> was the earlier (incorrect) estimate that HGP overturned.' },
        ],
        correct: 2,
        solution: '~30,000.',
      },
      {
        t: 'mcq',
        q: 'SNP stands for:',
        opts: [
          { label: 'Single Nucleotide Polymorphism', nudge: null },
          { label: 'Simple Nuclear Protein', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented distractors playing on the abbreviation.' },
          { label: 'Short Nucleotide Pair', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented distractors playing on the abbreviation.' },
          { label: 'Single Nucleosome Particle', nudge: '<b>(b)</b>, <b>(c)</b>, <b>(d)</b> are invented distractors playing on the abbreviation.' },
        ],
        correct: 0,
        solution: 'A single-base difference between individuals’ genomes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing the “3 billion” (base pairs) with “30,000” (genes) and “1.4 million” (SNPs).</b> Keep them separate: <b>bp ≈ 3 billion, genes ≈ 30,000, SNPs ≈ 1.4 million.</b>',
          '<b>Crediting Lalji Singh with inventing DNA fingerprinting.</b> <b>Alec Jeffreys</b> developed it; <b>Lalji Singh</b> pioneered it in <b>India</b>.',
          '<b>Thinking fingerprinting reads genes.</b> It reads <b>non-coding repetitive VNTRs</b>, where variation is high.',
          '<b>Mixing up chromosome extremes.</b> <b>Chromosome 1 = most genes; Y = fewest.</b> Chromosome 1 has the most genes and the Y chromosome the fewest. This counts genes; do not use it to rank the chromosomes by size.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For HGP number questions, anchor three figures: <b>3 billion bp, ~30,000 genes, 99.9% identical</b>, and many MCQs resolve quickly. For the fingerprinting steps, remember the order <b>“I-PRESHA”</b>: Isolation, PCR, Restriction, Electrophoresis, Southern blot, Hybridisation, Autoradiography (PCR is an optional, modern addition).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'HGP',
            note: 'launched 1990; ~3 billion bp; ~30,000 genes; 99.9% bases identical; ~1.4 million SNPs; chr 1 most genes (2968), Y fewest (231); Sanger sequencing; bioinformatics; model organisms (<i>E. coli</i>, yeast, roundworm, mouse).',
          },
          { f: 'HGP goals', note: 'identify genes, sequence 3 bn bp, databases, analysis tools, tech transfer, ELSI.' },
          {
            f: 'DNA fingerprinting',
            note: 'identifies individuals via VNTRs (polymorphic, non-coding repetitive DNA). Discovered by Alec Jeffreys (1985); India: Lalji Singh.',
          },
          {
            f: 'Steps',
            note: 'Isolation → (PCR, optional modern addition) → Restriction digestion → Electrophoresis → Southern blotting → Hybridisation with labelled VNTR probe → Autoradiography.',
          },
          { f: 'Applications', note: 'paternity/maternity, forensics, diversity/evolution studies.' },
        ],
        aids: ['Mnemonic, HGP trio: “3 – 30 – 99.9” → 3 billion bp, ~30,000 genes, 99.9% identical.'],
      },
    ],
  },
];
