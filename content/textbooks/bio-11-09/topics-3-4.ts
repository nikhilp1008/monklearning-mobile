import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 9, Biomolecules: Topics 03 and 04, word for word from the Class 11 Biology
 * Master Reference (pp. 551–567).
 *
 * Topic 03 Proteins, Nucleic Acids & Structure, pp. 551–558 (Figure 9.3: caption p. 554 after
 * Framework E, drawing p. 555, set where the caption stands). Topic 04 Enzymes, pp. 559–567
 * (Figure 9.4: caption p. 561 after Framework A, drawing p. 562; Figure 9.5: caption p. 563
 * after Framework C, drawing p. 564).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on
 * one line, "Sub-topic" is "Topic". This chapter prints its options as (a) to (d), so they stay
 * as printed.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 551–558 ─────────────────────────
  {
    n: '03',
    title: 'Proteins, Nucleic Acids & Structure',
    kalam: 'The amino acid sequence is the recipe; the folded protein is the cooked dish.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. NEET regularly draws on protein structure levels, fibrous-vs-globular, and purine-vs-pyrimidine (the book’s estimate from past papers, not official figures), often as assertion–reason. CBSE Boards ask 2–3 mark “distinguish between” and “draw/explain the levels” questions. CUET leans on crisp recall (nucleotide vs nucleoside, A–T vs G–C bonding). Learn the hierarchy and the bonds that hold each level, and most questions answer themselves.',
      },
      {
        t: 'p',
        html: 'In the last topic we met amino acids: the alphabet. Now we string them into words and sentences, and discover something wonderful: a protein is not just a chain, it is a shape. And in biology, <b>shape is everything</b>.',
      },
      {
        t: 'p',
        html: 'Think of a long jasmine gajra: a garland strung on a single thread. The order of flowers along the thread is fixed; that ordered string is the protein’s <b>primary structure</b>. But you never wear the garland as a straight line. Parts of it naturally coil and pleat into regular repeating patterns: that local, regular folding is the <b>secondary structure</b>. The whole garland then bunches into a particular three-dimensional shape when worn: that overall fold is the <b>tertiary structure</b>. And sometimes several garlands are tied together into one grand temple decoration: several folded chains assembling into one unit is the <b>quaternary structure</b>.',
      },
      {
        t: 'p',
        html: 'Here is the punchline: a protein only works in its correctly folded shape. Boil an egg and the clear albumin turns solid white: you haven’t broken a single peptide bond (the primary structure survives), but you’ve destroyed the delicate folds. The protein is now useless as a protein. This loss of shape is called <b>denaturation</b>, and it is an important consequence of “structure = function.” Consider haemoglobin: its four chains fold and dock into a precise pocket-shaped assembly, and it is exactly that shape that lets it cradle an oxygen molecule and release it where needed. Flatten the shape and the oxygen has nowhere to sit: the molecule’s job lives in its form.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The amino acid sequence is the recipe; the folded protein is the cooked dish. Two cooks with the identical recipe still need to cook it right. A scrambled fold is a burnt meal: same ingredients, no use.',
      },
      {
        t: 'p',
        html: 'Now to <b>nucleic acids</b>: the cell’s instruction manual. If proteins are the workers, nucleic acids are the written orders telling the cell which workers to build. The manual is written in a four-letter alphabet (the nitrogenous bases). <b>DNA</b> is the master copy: long, usually double-stranded, remarkably stable, kept in the nucleus in eukaryotes. <b>RNA</b> is the working photocopy: usually single-stranded, made when a particular instruction needs to be used. Each “letter” is part of a <b>nucleotide</b> (a base, a sugar, and a phosphate clicked together like a Lego brick), and the bricks snap end-to-end into a long strand.',
      },
      {
        t: 'p',
        html: 'Picture DNA itself as a <b>twisted ladder</b> (a “spiral staircase”). The two long side-rails are the sugar–phosphate backbones, and the rungs are pairs of bases reaching across from one rail to the other. Crucially, the rungs are not random: a large base always pairs with a small one, so every rung is the same width and the ladder stays beautifully regular. That regularity, repeated millions of times, is what lets DNA be copied faithfully, but at Class 11 we care about the shape itself, not yet the copying. RNA, by contrast, is usually a single rail with no partner, a half-ladder, which is part of why it is more fragile and short-lived.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions to keep honest:</b><br>• <b>Not every protein has all four levels.</b> Quaternary structure exists only for proteins made of two or more polypeptide chains (like haemoglobin). A single-chain protein stops at tertiary.<br>• <b>Denaturation usually spares the primary structure.</b> Heat and pH break the weak bonds (H-bonds, ionic, hydrophobic) holding 2°/3°/4° together, but the strong covalent peptide bonds of the sequence remain: that is why denaturation is about shape, not sequence.<br>• <b>At Class 11, “nucleic acid structure” means composition and base pairing</b> (what a nucleotide is made of and how strands pair), not the replication or transcription machinery, which belongs to a later stage.',
      },

      { t: 'part', title: 'Key definitions, structures and reagents' },
      {
        t: 'def',
        term: 'Protein',
        html: 'a polymer (heteropolymer) of amino acids joined by <b>peptide bonds</b>. Four levels of organisation:<br>• <b>Primary structure</b>: the linear sequence of amino acids, read N-terminal → C-terminal. Held by <b>covalent peptide bonds</b>.<br>• <b>Secondary structure</b>: local regular folding of the backbone, stabilised by <b>hydrogen bonds</b>. Two common forms: the <b>α-helix</b> (a right-handed coil) and the <b>β-pleated sheet</b> (extended strands lying side-by-side).<br>• <b>Tertiary structure</b>: the overall 3-D shape of the whole chain, stabilised by H-bonds, ionic bonds, <b>disulfide bridges</b>, and hydrophobic interactions.<br>• <b>Quaternary structure</b>: the assembly of two or more folded polypeptide subunits, e.g., <b>haemoglobin</b> (four subunits: two α and two β).',
      },
      {
        t: 'p',
        html: '<b>Protein shape classes:</b><br>• <b>Fibrous proteins</b>: long, thread-like, water-insoluble, structural. Their chains often run parallel with a repetitive secondary structure, giving mechanical strength (keratin in hair/nails; collagen in connective tissue, the most abundant protein in the animal body; silk fibroin).<br>• <b>Globular proteins</b>: compact, roughly spherical, water-soluble, functional. Their chains fold irregularly to bury water-fearing residues inside and expose water-loving ones outside (enzymes, haemoglobin, antibodies). Most proteins that do something chemical are globular.',
      },
      {
        t: 'p',
        html: 'Proteins are also described as <b>simple</b> (made of amino acids only) or <b>conjugated</b> (an amino-acid part plus a non-protein “prosthetic” group), for example, haemoglobin carries a non-protein haem group, glycoproteins carry a carbohydrate, and lipoproteins carry a lipid. The prosthetic group is often essential to the protein’s job.',
      },
      {
        t: 'def',
        term: 'Nucleic acids',
        html: 'polymers of <b>nucleotides</b>.<br>• <b>Nucleotide =</b> nitrogenous base + pentose sugar + phosphate group.<br>• <b>Nucleoside =</b> nitrogenous base + pentose sugar (no phosphate).<br>• <b>Bases: purines</b> (adenine A, guanine G: double-ring) and <b>pyrimidines</b> (cytosine C, thymine T, uracil U: single-ring).<br>• <b>Backbone:</b> sugar–phosphate chain joined by <b>phosphodiester bonds</b>.<br>• <b>DNA vs RNA:</b> DNA has deoxyribose, is double-stranded, uses thymine; RNA has ribose, is mostly single-stranded, uses uracil.<br>• <b>Base pairing (DNA):</b> A pairs with T via <b>two</b> H-bonds; G pairs with C via <b>three</b> H-bonds; the two strands run <b>antiparallel</b>. The sugar–phosphate backbones face outward (the “rails”), while the paired bases face inward (the “rungs”), shielded in the core of the helix.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: 'A. How a chain becomes a working protein: the four-level build',
        steps: [
          'Ribosome strings amino acids in a fixed order via peptide bonds → <b>primary structure</b> (the sequence is now set).',
          'The backbone starts H-bonding to itself at regular intervals; stretches coil into α-helices or align into β-sheets → <b>secondary structure</b>.',
          'These coils and sheets pack against each other, pulled together by ionic bonds, disulfide bridges and (crucially) hydrophobic side chains hiding from water → <b>tertiary structure</b> (a single working unit).',
          'If the protein needs more than one chain, separate folded subunits dock together → <b>quaternary structure</b>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why the order matters:</b> each level is built on the one below it. Disturb a lower level and everything above collapses, which is exactly what denaturation does. Remarkably, the <b>primary sequence largely determines</b> how a chain folds: change one amino acid and you can change the final shape, and with it the protein’s function.',
      },
      {
        t: 'p',
        html: '<b>B. How the nucleic-acid backbone is built.</b> The phosphate of one nucleotide bonds to the sugar of the next, <b>removing water</b> to form a <b>phosphodiester bond</b>. Repeat thousands of times and you get one strand: a regular sugar–phosphate backbone with bases sticking out sideways. (Note the recurring theme from Topic 02: glycosidic, peptide, ester, and now phosphodiester bonds all form by dehydration.)',
      },
      {
        t: 'p',
        html: '<b>C. Why DNA is double-stranded and stable (Class 11 level).</b> Two strands run in opposite directions (antiparallel) and zip together through complementary base pairing: A always faces T, G always faces C. Because G≡C is held by three hydrogen bonds and A=T by only two, <b>DNA regions rich in G–C are harder to pull apart</b> (they need more energy/heat to separate). Thousands of these H-bonds, plus base stacking, make the double helix far more stable than a lone strand, which is why DNA is the cell’s durable master copy while single-stranded RNA is the disposable working copy.',
      },
      {
        t: 'p',
        html: '<b>D. Why heat or acid denatures a protein.</b> Gentle heating, extreme pH, or strong agents disrupt the weak bonds (H-bonds, ionic and hydrophobic interactions) that hold the secondary, tertiary and quaternary levels. The chain unravels into a floppy strand; the precise active shape is lost, so the protein stops functioning. The covalent peptide bonds usually survive, so the <b>primary structure (sequence) is preserved</b>: denaturation changes shape, not sequence.',
      },
      {
        t: 'p',
        html: '<b>E. Quick test: purine or pyrimidine?</b> Faced with a base, ask one question: how many rings? A <b>double-ring</b> base is a purine (adenine, guanine); a <b>single-ring</b> base is a pyrimidine (cytosine, thymine, uracil). A reliable cross-check follows from base pairing: a purine always pairs with a pyrimidine (A with T, G with C), because a big base must pair with a small one to keep every rung of the DNA ladder the same width. If you are told two bases pair, one must be each type.',
      },
      { t: 'fig', id: 'b11-09-fig-9.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'Name the type of bond/force chiefly responsible for holding together each level of protein structure: primary, secondary, and quaternary.',
        steps: [
          '<b>Reasoning.</b> Match each level to its dominant stabilising interaction.<br>• <b>Primary</b>: the amino acids are joined permanently in sequence, so the bond is the strong covalent <b>peptide bond</b>.<br>• <b>Secondary</b>: the local α-helix and β-sheet patterns are held by <b>hydrogen bonds</b> along the backbone.<br>• <b>Quaternary</b>: separate subunits are held together mainly by <b>non-covalent interactions</b> (H-bonds, ionic and hydrophobic interactions; in some proteins, disulfide bridges).',
        ],
        ans: 'Primary: peptide bonds; Secondary: hydrogen bonds; Quaternary: non-covalent interactions (with possible disulfide links).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two DNA samples are heated. Sample X separates into single strands at a lower temperature than sample Y. Which sample is richer in G–C pairs?',
        steps: [
          '<b>The trap:</b> students try to recall a formula. None is needed. G≡C has <b>three</b> H-bonds; A=T has only <b>two</b>. More G–C ⇒ more H-bonds ⇒ more heat needed to separate. The sample that separates at the <b>higher</b> temperature is the G–C-rich one.',
          '<b>Mental rule:</b> “G–C = 3 bonds = ‘glue’, harder to melt.”',
        ],
        ans: 'Sample Y (separates at higher temperature ⇒ more G–C ⇒ more H-bonds).',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ-reasoning',
        q: 'A protein is long, thread-like, completely insoluble in water, and gives skin and tendons their tensile strength. Classify it (fibrous/globular) and name a likely example. Contrast it with haemoglobin.',
        steps: [
          '<b>Reasoning.</b> Thread-like + insoluble + structural/tensile role ⇒ <b>fibrous protein</b>; the skin/tendon clue points to <b>collagen</b>. Haemoglobin is the opposite type: compact, spherical, water-soluble, and functional (oxygen transport) ⇒ <b>globular protein</b>.',
        ],
        ans: 'Fibrous protein (collagen); contrasts with haemoglobin, a globular, soluble, functional protein.',
      },
      {
        t: 'ex',
        tag: 'NEET, Assertion–Reason',
        q: 'Assertion (A): Boiling an egg makes the egg white solid and it cannot be returned to liquid. Reason (R): Heat breaks the peptide bonds of the egg-white proteins. Options: (a) Both true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is true: the egg white sets irreversibly. But R is <b>false</b>: heat denatures the protein by breaking the weak bonds (H-bonds, etc.) that maintain shape, <b>not</b> the covalent peptide bonds. The sequence (primary structure) stays intact; only the fold is destroyed.',
          '<b>Trap:</b> choosing (a) means you wrongly believe denaturation cleaves peptide bonds, a common misconception on this topic.',
        ],
        ans: '(c): A true, R false.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between a nucleoside and a nucleotide, and name the component that distinguishes them.',
            a: 'Nucleoside = base + sugar; nucleotide = base + sugar + <b>phosphate</b> (the phosphate is the distinguishing part).',
          },
          {
            q: '[NEET] Classify the five common nitrogenous bases into purines and pyrimidines, and state which one is found in RNA but not DNA.',
            a: 'Purines: adenine, guanine; Pyrimidines: cytosine, thymine, uracil; uracil is RNA-only (replaces thymine).',
          },
          {
            q: '[CUET] Match: (A) α-helix (B) Haemoglobin (C) Collagen (D) Peptide bond ↔ (i) quaternary structure (ii) primary structure linkage (iii) secondary structure (iv) fibrous protein.',
            a: 'A–iii, B–i, C–iv, D–ii.',
          },
          {
            q: '[NEET] Explain why G–C-rich regions of DNA require more energy to separate than A–T-rich regions.',
            a: 'G≡C has three H-bonds vs two in A=T, so more bonds must be broken.',
          },
          {
            q: '[NEET, Assertion–Reason] A: A single-chain protein cannot have a quaternary structure. R: Quaternary structure requires the association of two or more polypeptide chains. Choose the correct relationship: (a) Both true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
            a: 'Both A and R true, and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Denaturation disrupts which levels, leaving the primary structure intact?',
        opts: [
          {
            label: 'Primary',
            nudge: '<b>(a), (c), (d)</b> all describe the primary structure, which is held by covalent peptide bonds and survives ordinary denaturation: chosen by students who think heat destroys the sequence.',
          },
          { label: 'Secondary, tertiary and quaternary', nudge: null },
          {
            label: 'Peptide-bond sequence',
            nudge: '<b>(a), (c), (d)</b> all describe the primary structure, which is held by covalent peptide bonds and survives ordinary denaturation: chosen by students who think heat destroys the sequence.',
          },
          {
            label: 'Amino acid composition',
            nudge: '<b>(a), (c), (d)</b> all describe the primary structure, which is held by covalent peptide bonds and survives ordinary denaturation: chosen by students who think heat destroys the sequence.',
          },
        ],
        correct: 1,
        solution: 'Denaturation disrupts the weak bonds maintaining secondary, tertiary and quaternary structure.',
      },
      {
        t: 'mcq',
        q: 'Which pairing is correct regarding nitrogenous bases?',
        opts: [
          { label: 'Adenine: pyrimidine', nudge: '<b>(a)</b> adenine is a purine, not pyrimidine.' },
          { label: 'Thymine: purine', nudge: '<b>(b)</b> thymine is a pyrimidine.' },
          { label: 'Guanine: purine', nudge: null },
          { label: 'Cytosine: purine', nudge: '<b>(d)</b> cytosine is a pyrimidine.' },
        ],
        correct: 2,
        solution: 'Guanine: purine (double-ring; with adenine). The wrong options trap students who haven’t fixed the purine = A, G rule. Memory hook: “PURe As Gold” → PURines = Adenine, Guanine.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): RNA is generally less stable than DNA. Reason (R): RNA is usually single-stranded while DNA is double-stranded and held by complementary base pairing.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          {
            label: 'Both true, R does not explain A',
            nudge: '<b>(b)</b> chosen by those who know both facts but don’t connect strandedness to stability.',
          },
          {
            label: 'A true, R false',
            nudge: '<b>(c)/(d)</b> chosen by students who misremember which molecule is more stable.',
          },
          {
            label: 'A false, R true',
            nudge: '<b>(c)/(d)</b> chosen by students who misremember which molecule is more stable.',
          },
        ],
        correct: 0,
        solution: 'RNA’s single strand lacks the thousands of inter-strand H-bonds and base stacking that stabilise the DNA double helix, so it is less stable; R is the genuine reason.',
      },
      {
        t: 'mcq',
        q: 'A nucleotide differs from a nucleoside by the presence of an additional:',
        opts: [
          { label: 'Pentose sugar', nudge: '<b>(a) and (b)</b> are present in both.' },
          { label: 'Nitrogenous base', nudge: '<b>(a) and (b)</b> are present in both.' },
          { label: 'Phosphate group', nudge: null },
          { label: 'Hydrogen bond', nudge: '<b>(d)</b> hydrogen bonds form between paired bases, not within a single nucleotide.' },
        ],
        correct: 2,
        solution: 'Phosphate group: nucleotide = nucleoside + phosphate. Hook: “nucleoTide has the phosphaTe.”',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing denaturation breaks peptide bonds.</b> It does not: it destroys shape (2°/3°/4°), leaving the sequence (1°) intact. This one fact helps with many NEET protein questions.',
          '<b>Mixing up purines and pyrimidines.</b> Purines (A, G) are bigger, double-ring; pyrimidines (C, T, U) are smaller, single-ring. Use “PURe As Gold” (A, G are purines) and “CUT” (C, U, T are pyrimidines).',
          '<b>Assigning quaternary structure to single-chain proteins.</b> No second chain, no quaternary level: full stop at tertiary.',
          '<b>Forgetting DNA→T, RNA→U.</b> Thymine lives in DNA; uracil replaces it in RNA. Hook: “U are RNA.”',
          '<b>Thinking the two DNA strands are identical.</b> They are <b>complementary, not identical</b>: wherever one strand has A, the other has T; wherever one has G, the other has C. The strands are mirror-partners running in opposite directions, which is exactly what makes faithful copying possible.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “which is more stable / harder to separate” DNA question, skip calculation entirely: just count hydrogen bonds. G≡C = 3, A=T = 2. More G–C ⇒ more stable ⇒ higher melting temperature. One glance, one answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Protein structure (4 levels)',
            note: 'Primary (sequence, <b>peptide bonds</b>) → Secondary (<b>α-helix / β-pleated sheet</b>, H-bonds) → Tertiary (overall 3-D fold; H-bonds, ionic, disulfide, hydrophobic) → Quaternary (≥2 subunits, e.g., <b>haemoglobin</b>).',
          },
          {
            f: 'Protein classes',
            note: 'Fibrous = structural, insoluble (keratin, <b>collagen</b>, most abundant animal protein); Globular = functional, soluble (enzymes, haemoglobin).',
          },
          {
            f: 'Denaturation',
            note: 'weak bonds break → shape (2°/3°/4°) lost → function lost; <b>primary structure intact</b>.',
          },
          {
            f: 'Nucleotide vs nucleoside',
            note: 'nucleotide = base + sugar + <b>phosphate</b>; nucleoside = base + sugar.',
          },
          {
            f: 'Bases',
            note: 'Purines = <b>A, G</b> (double-ring); Pyrimidines = <b>C, T, U</b> (single-ring). DNA uses T; RNA uses U.',
          },
          {
            f: 'Backbone',
            note: '<b>phosphodiester bonds</b> (formed by dehydration, same theme as glycosidic/peptide/ester).',
          },
          {
            f: 'Base pairing',
            note: 'A=T (2 H-bonds), G≡C (3 H-bonds); strands antiparallel; more G–C ⇒ more stable.',
          },
        ],
        aids: [
          '“nucleoTide = phosphaTe”',
          '“PURe As Gold = purines A, G”',
          '“CUT = pyrimidines C, U, T”',
          '“U are RNA”',
          '“G–C = 3-bond glue.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 559–567 ─────────────────────────
  {
    n: '04',
    title: 'Enzymes',
    kalam: 'An enzyme is not a force that drags a reaction uphill.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield slices of the whole chapter. NEET regularly draws on this topic (the book’s estimate from past papers, not official figures): factors affecting enzyme activity, the six classes, and cofactors (apo- vs holoenzyme) are perennial, often as assertion–reason or match-the-column. CBSE Boards favour 2–3 mark “factors affecting activity” and “draw the energy/activity graph” questions. CUET sticks to crisp recall (coenzyme vs prosthetic group, competitive inhibition). Learn the graphs and the classification cold.',
      },
      {
        t: 'p',
        html: 'Picture a dalal: a property broker in a busy Indian town. Two parties want to make a deal, but left alone they’d take months to find each other, negotiate, and sign. The broker introduces them, sits them at the same table, smooths the paperwork, and the deal that could have happened slowly now happens fast. Crucially, when it’s done the broker walks away unchanged, ready to do it all again for the next pair. That broker is an <b>enzyme</b>.',
      },
      {
        t: 'p',
        html: 'Chemically, an enzyme is a <b>biological catalyst</b>, overwhelmingly a protein (a few are RNA, called ribozymes), that dramatically speeds up a specific reaction in a living cell without itself being used up. Almost every reaction in your body, from digesting your lunch to copying your DNA, would be far too slow to sustain life without one.',
      },
      {
        t: 'p',
        html: 'The deep reason enzymes work comes down to one idea: <b>activation energy</b>. Every reaction has an energy “hill” the reactants must climb before they can become products. Think of pushing a boulder over a mountain pass: even if the valley on the far side is lower (the reaction is favourable), you still need a big shove to get over the top. An enzyme doesn’t change the height of the valleys (it can’t make a reaction happen that wouldn’t eventually happen on its own), but it <b>carves a lower pass through the mountain.</b> With a smaller hill to climb, vastly more molecules make it over per second, so the reaction races ahead.',
      },
      {
        t: 'p',
        html: 'How does it carve that pass? Through its <b>active site</b>, a precisely shaped pocket on the enzyme’s surface. The substrate (the reacting molecule) nestles into this pocket like a hand into a custom glove. Once held in exactly the right orientation, with the right chemical groups pressed against it, the reaction’s “hill” effectively shrinks. This snug fit is also why enzymes are so <b>specific</b>: one enzyme generally handles one substrate or one type of bond, the way one Godrej key opens one lock.',
      },
      {
        t: 'p',
        html: 'This is also why life prefers enzymes over the blunt inorganic catalysts of a chemistry lab. A platinum catalyst might crudely speed many reactions; an enzyme works under the body’s mild conditions (around 37 °C, near-neutral pH, ordinary pressure), yet is often millions of times faster and exquisitely selective, acting on one substrate while ignoring thousands of look-alikes crowding the same cell. It can even be switched on or off as the cell’s needs change.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> An enzyme is not a force that drags a reaction uphill. It’s a clever route-finder that reveals an easier path the reaction was always allowed to take. That’s why a catalyst can speed a reaction up but, on its own, can never push it in a direction thermodynamics forbids.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions to keep honest:</b><br>• <b>Enzymes change the rate, never the equilibrium.</b> They speed up the forward and reverse reactions equally. A common exam trap is to claim an enzyme “shifts equilibrium” or “increases product yield at equilibrium”: it does neither.<br>• <b>Enzymes are not consumed,</b> so a tiny amount handles huge throughput, but they can be denatured, inhibited, or worn out.<br>• <b>They are fragile.</b> Because most are proteins, high temperature or extreme pH unfolds (denatures) them, destroying the active site. There is always an optimum, not “more is always better.”<br>• <b>Most, but not all, are proteins:</b> ribozymes are catalytic RNA, a favourite “exception” question.',
      },

      { t: 'part', title: 'Key definitions, structures and reagents' },
      {
        t: 'def',
        term: 'Enzyme',
        html: 'a biocatalyst (mostly protein) that accelerates a specific biochemical reaction by lowering its activation energy, without being consumed.',
      },
      {
        t: 'def',
        term: 'Active site',
        html: 'the specific 3-D cleft on the enzyme where the substrate binds, forming the transient <b>enzyme–substrate (ES) complex</b>.',
      },
      {
        t: 'def',
        term: 'Activation energy (<i>E</i><sub>a</sub>)',
        html: 'the minimum energy barrier reactants must overcome to react. Enzymes provide an alternative route with a lower <i>E</i><sub>a</sub>.',
      },
      {
        t: 'def',
        term: 'Cofactor',
        html: 'the non-protein component many enzymes need to function. Three kinds:<br>• Coenzyme: a loosely bound organic molecule, often vitamin-derived (e.g., NAD<sup>+</sup> from niacin; FAD from riboflavin; FAD is a coenzyme when loosely bound, but a prosthetic group in succinate dehydrogenase).<br>• Prosthetic group: an organic cofactor tightly/permanently bound to the enzyme (e.g., haem, FAD in succinate dehydrogenase).<br>• Metal ion: an inorganic cofactor (e.g., Zn<sup>2+</sup> in carboxypeptidase, Mg<sup>2+</sup>).',
      },
      {
        t: 'def',
        term: 'Apoenzyme',
        html: 'the protein part alone (inactive).',
      },
      {
        t: 'def',
        term: 'Holoenzyme',
        html: 'the complete active enzyme: apoenzyme + cofactor.',
      },
      {
        t: 'proc',
        title: 'The six IUB classes used by NCERT (mnemonic: “OTHLIL”; IUBMB added a seventh, translocases, in 2018)',
        steps: [
          '<b>Oxidoreductases</b>: oxidation–reduction (electron/H transfer).',
          '<b>Transferases</b>: transfer a functional group between molecules.',
          '<b>Hydrolases</b>: break bonds by adding water (hydrolysis).',
          '<b>Lyases</b>: add/remove groups to form double bonds (non-hydrolytic).',
          '<b>Isomerases</b>: rearrange atoms within a molecule (isomerisation).',
          '<b>Ligases</b>: join two molecules, using energy (usually from ATP).',
        ],
      },
      {
        t: 'def',
        term: 'Competitive inhibitor',
        html: 'a molecule resembling the substrate that competes for the active site (classic example: malonate competing with succinate on succinate dehydrogenase).',
      },
      {
        t: 'def',
        term: 'Enzyme nomenclature',
        html: 'most enzymes are named by adding the suffix <b>-ase</b> to the substrate or the reaction type (e.g., maltase acts on maltose; dehydrogenase removes hydrogen). A few retain older trivial names (pepsin, trypsin).',
      },
      {
        t: 'def',
        term: 'Specificity',
        html: 'enzymes discriminate sharply, in three degrees: substrate specificity (acts on one particular substrate), group specificity (acts on substrates sharing a chemical group), and bond specificity (acts on one bond type regardless of the rest of the molecule).',
      },
      {
        t: 'def',
        term: 'Catalytic efficiency',
        html: 'enzymes achieve enormous rate enhancements. One of the fastest, carbonic anhydrase, can process on the order of 10<sup>5</sup>–10<sup>6</sup> substrate molecules per second, which is why a cell needs only minute amounts of any given enzyme to keep a reaction running at full pace.',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>A. How an enzyme lowers activation energy.</b> Plot energy along the reaction path. The uncatalysed reaction shows a tall peak, its <i>E</i><sub>a</sub>. The enzyme binds the substrate and stabilises the <b>transition state</b>, effectively lowering the peak. The starting and ending energy levels (reactants, products) are unchanged: only the barrier between them drops. Lower barrier ⇒ more molecules have enough energy to cross ⇒ faster rate.',
      },
      { t: 'fig', id: 'b11-09-fig-9.4' },
      {
        t: 'p',
        html: '<b>B. The catalytic cycle (and the two models).</b><br>E + S ⇌ ES → EP → E + P<br>(EP is the enzyme–product complex, formed before the product is released.) The enzyme (E) binds substrate (S) to form the ES complex, converts it to product (P), then releases P and returns unchanged. Two pictures of how S fits the active site:<br>• <b>Lock-and-key (Fischer):</b> the active site is a rigid shape that exactly matches the substrate, like a key fitting a fixed lock.<br>• <b>Induced fit (Koshland):</b> the active site is flexible and moulds itself snugly around the substrate as it binds, like a glove shaping to a hand. This is the more accurate modern view and explains why enzymes can strain bonds to speed catalysis.',
      },
      {
        t: 'proc',
        title: 'C. Reading the three activity curves (exam essential)',
        steps: [
          '<b>Temperature:</b> activity rises with temperature (more collisions) up to an optimum (≈ 37 °C for human enzymes), then falls sharply as heat denatures the protein. The curve is a skewed bell.',
          '<b>pH:</b> each enzyme peaks at its own optimum pH (salivary amylase ≈ 6.8; pepsin ≈ 2; pancreatic trypsin ≈ 8, so optima range from strongly acidic to mildly alkaline). Away from the optimum, charge changes distort the active site and activity drops.',
          '<b>Substrate concentration:</b> rate rises steeply, then plateaus at <i>V</i><sub>max</sub>: once every enzyme molecule is busy (saturated), adding more substrate can’t speed things up.',
        ],
      },
      { t: 'fig', id: 'b11-09-fig-9.5' },
      {
        t: 'p',
        html: '<b>D. Competitive inhibition: the logic.</b> A competitive inhibitor mimics the substrate’s shape and parks in the active site, blocking real substrate. Because they compete, flooding the system with extra substrate can out-muscle the inhibitor and restore the rate. The textbook case: <b>malonate</b> resembles <b>succinate</b> and inhibits <b>succinate dehydrogenase</b>; adding more succinate reverses it. (Contrast: a non-competitive inhibitor binds elsewhere and can’t be out-competed by more substrate.)',
      },
      {
        t: 'p',
        html: '<b>E. Enzyme specificity: how the active site discriminates.</b> Specificity is a shape-and-chemistry phenomenon. The active site’s contours, plus the charged and polar groups lining it, are complementary to one particular substrate. A wrongly shaped molecule either cannot enter the pocket or, if it does, cannot align its reactive groups with the enzyme’s catalytic residues, so no reaction follows. Induced fit sharpens this still further: the active site only completes its catalytic shape when the correct substrate triggers the moulding, so loose-binding look-alikes still fail to react. This is exactly how one cell runs thousands of reactions at once without chaos: each enzyme quietly ignores every substrate that isn’t “its own.” It is also the structural basis of competitive inhibition: a molecule shaped just enough like the substrate slips into the site and jams it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board, 3 marks',
        q: 'An enzyme works briskly at 35 °C, peaks near 40 °C, then loses almost all activity by 60 °C. Explain each phase.',
        steps: [
          '<b>Reasoning.</b> Three regimes:<br>• Up to ~40 °C (this question’s own optimum; many human enzymes peak near 37 °C): heat raises molecular motion and collision frequency between enzyme and substrate, so rate climbs.<br>• At ~40 °C (optimum): maximum activity; collisions are frequent and the protein is still correctly folded.<br>• Above optimum → 60 °C: heat breaks the weak bonds holding the protein’s 3-D shape; the enzyme <b>denatures</b>, its active site is destroyed, and activity collapses (irreversibly).',
        ],
        ans: 'Rate rises to an optimum due to increased kinetic energy, then falls sharply because high temperature denatures the enzyme.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which statement about enzymes is INCORRECT? (a) They lower activation energy. (b) They are unchanged at the end of the reaction. (c) They shift the reaction’s equilibrium towards products. (d) Most are proteins.',
        steps: [
          '<b>The trap:</b> (a), (b), (d) are textbook-true, so a hurried student second-guesses them. The single false one is <b>(c)</b>: a catalyst speeds the approach to equilibrium but <b>never shifts the equilibrium position</b> itself. If you remember one enzyme one-liner, make it this.',
          '<b>Speed rule:</b> any option claiming an enzyme “increases yield / shifts equilibrium” is usually the wrong statement.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'CUET, MCQ-reasoning',
        q: 'Classify each by IUB class: (i) an enzyme that breaks a peptide bond using water; (ii) an enzyme that moves a phosphate group from ATP to glucose; (iii) an enzyme that joins two DNA fragments using ATP.',
        steps: [
          '<b>Reasoning.</b><br>• (i) bond broken with water ⇒ <b>hydrolase</b>.<br>• (ii) a group (phosphate) transferred between molecules ⇒ <b>transferase</b>.<br>• (iii) two molecules joined using ATP energy ⇒ <b>ligase</b>.',
          '<b>Tip:</b> “uses water to cut” = hydrolase; “moves a group” = transferase; “stitches together with ATP” = ligase.',
        ],
        ans: '(i) hydrolase, (ii) transferase, (iii) ligase.',
      },
      {
        t: 'ex',
        tag: 'NEET, Assertion–Reason',
        q: 'Assertion (A): Adding excess substrate can reverse the effect of a competitive inhibitor. Reason (R): A competitive inhibitor binds at a site other than the active site. Options: (a) Both true, R explains A; (b) Both true, R not the explanation; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is <b>true</b>: competition for the active site can be won by sheer substrate numbers. R is <b>false</b>: a competitive inhibitor binds <b>at</b> the active site (it’s the non-competitive one that binds elsewhere). True assertion, false reason.',
          '<b>Distractor check:</b> picking (a) means you swapped the definitions of competitive and non-competitive inhibition: a common enzyme-inhibition error.',
        ],
        ans: '(c).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define activation energy and explain, with a labelled energy diagram in words, how an enzyme reduces it without altering the reaction’s Δ<i>G</i>.',
            a: '<i>E</i><sub>a</sub> = minimum energy barrier; enzyme stabilises the transition state, lowering the peak while reactant/product levels (hence Δ<i>G</i>) stay unchanged.',
          },
          {
            q: '[NEET] Distinguish between a coenzyme and a prosthetic group, giving one example of each.',
            a: 'Coenzyme = loosely bound, organic, often vitamin-derived (NAD<sup>+</sup>); prosthetic group = tightly/permanently bound organic cofactor (FAD/haem).',
          },
          {
            q: '[CUET] Match: (A) Oxidoreductase (B) Lyase (C) Isomerase (D) Ligase ↔ (i) joins molecules using ATP (ii) catalyses redox (iii) interconverts isomers (iv) adds/removes groups forming a double bond.',
            a: 'A–ii, B–iv, C–iii, D–i.',
          },
          {
            q: '[NEET] Why does enzyme activity plateau at high substrate concentration even though substrate is abundant?',
            a: 'All enzyme active sites become saturated (occupied); rate hits <i>V</i><sub>max</sub> and cannot rise further until more enzyme is added.',
          },
          {
            q: '[NEET, Assertion–Reason] A: Ribozymes challenge the rule that all enzymes are proteins. R: Some RNA molecules possess catalytic activity. Choose the correct relationship: (a) Both true, R explains A; (b) Both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
            a: 'Both A and R true, and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The complete, catalytically active enzyme formed from the protein part plus its cofactor is called:',
        opts: [
          {
            label: 'Apoenzyme',
            nudge: '<b>(a)</b> apoenzyme is the inactive protein-only part: chosen by students who reverse the pair.',
          },
          { label: 'Holoenzyme', nudge: null },
          {
            label: 'Coenzyme',
            nudge: '<b>(c)</b> coenzyme is just one type of cofactor, not the whole enzyme.',
          },
          {
            label: 'Ribozyme',
            nudge: '<b>(d)</b> ribozyme is catalytic RNA: an unrelated term grabbed for sounding technical.',
          },
        ],
        correct: 1,
        solution: 'Holoenzyme = apoenzyme + cofactor.',
      },
      {
        t: 'mcq',
        q: 'Enzyme activity vs temperature gives a curve that:',
        opts: [
          {
            label: 'rises steadily without limit',
            nudge: '<b>(a)</b> ignores denaturation: the classic “more heat = more rate” error.',
          },
          { label: 'rises to an optimum then falls sharply', nudge: null },
          {
            label: 'is a flat line',
            nudge: '<b>(c)/(d)</b> contradict the basic kinetics of catalysis and are picked only on a guess.',
          },
          {
            label: 'falls continuously',
            nudge: '<b>(c)/(d)</b> contradict the basic kinetics of catalysis and are picked only on a guess.',
          },
        ],
        correct: 1,
        solution: 'Rate climbs with kinetic energy to an optimum, then crashes as the enzyme denatures.',
      },
      {
        t: 'mcq',
        q: 'Assertion (A): An enzyme on its own cannot make a thermodynamically unfavourable reaction occur. Reason (R): An enzyme lowers activation energy but does not change the free-energy difference between reactants and products.',
        opts: [
          { label: 'Both true, R explains A', nudge: null },
          {
            label: 'Both true, R not the explanation',
            nudge: '<b>(b)</b> chosen by those who know both facts but don’t connect them.',
          },
          {
            label: 'A true, R false',
            nudge: '<b>(c)/(d)</b> chosen by those shaky on what a catalyst can and cannot do.',
          },
          {
            label: 'A false, R true',
            nudge: '<b>(c)/(d)</b> chosen by those shaky on what a catalyst can and cannot do.',
          },
        ],
        correct: 0,
        solution: 'Because the enzyme leaves Δ<i>G</i> untouched, it cannot, on its own, drive a reaction thermodynamics forbids: R is exactly why A holds.',
      },
      {
        t: 'mcq',
        q: 'Malonate inhibits succinate dehydrogenase, and the inhibition is relieved by adding more succinate. This inhibitor is:',
        opts: [
          {
            label: 'non-competitive',
            nudge: '<b>(a)</b> non-competitive binds elsewhere and is <b>not</b> relieved by more substrate: the key contrast being tested.',
          },
          {
            label: 'irreversible',
            nudge: '<b>(b)</b> “irreversible” contradicts the reversal by substrate.',
          },
          { label: 'competitive', nudge: null },
          {
            label: 'allosteric activator',
            nudge: '<b>(d)</b> an activator would increase, not inhibit, activity.',
          },
        ],
        correct: 2,
        solution: 'Competitive: malonate mimics succinate, competes for the active site, and is out-competed by excess substrate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Claiming enzymes shift equilibrium / raise yield.</b> They speed both directions equally; equilibrium position is untouched. Only the time taken changes.',
          '<b>Swapping coenzyme and prosthetic group.</b> Coenzyme = loosely bound (comes and goes, often vitamin-derived); prosthetic group = tightly bound (stays put). Hook: “Co-enzyme = casual; Prosthetic = permanent.”',
          '<b>Mixing up competitive and non-competitive inhibition.</b> Competitive binds at the active site and is beaten by more substrate; non-competitive binds elsewhere and isn’t.',
          '<b>Forgetting ribozymes.</b> “All enzymes are proteins” is false: catalytic RNA exists.',
          '<b>Assuming denaturation is reversible.</b> Cooling a heat-denatured enzyme rarely restores it: once the 3-D fold and active site collapse, activity is usually lost for good. That is why the post-optimum side of the temperature curve is a crash, not a gentle dip.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “identify the enzyme class” questions, key off the verb in the reaction: cuts with water → hydrolase; moves a group → transferase; redox → oxidoreductase; adds or removes groups at a double bond, not by hydrolysis → lyase; rearranges → isomerase; joins using ATP → ligase. The verb gives the class in one read.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Enzyme',
            note: 'biocatalyst (mostly protein; ribozymes = catalytic RNA) that <b>lowers activation energy</b>, is <b>not consumed</b>, and <b>never shifts equilibrium</b>.',
          },
          {
            f: 'Active site',
            note: 'specific pocket; binds substrate → <b>ES complex</b> → product. Models: <b>lock-and-key</b> (rigid) vs <b>induced fit</b> (flexible, modern).',
          },
          {
            f: 'Factors',
            note: 'temperature (rises to optimum, then denatures); pH (own optimum each); substrate conc (rises then plateaus at <i>V</i><sub>max</sub>).',
          },
          {
            f: 'Cofactors',
            note: 'coenzyme (loose, organic, vitamin-derived) · prosthetic group (tight, organic) · metal ion. <b>Apoenzyme + cofactor = Holoenzyme.</b>',
          },
          {
            f: 'Six IUB classes (OTHLIL)',
            note: 'Oxidoreductase, Transferase, Hydrolase, Lyase, Isomerase, Ligase.',
          },
          {
            f: 'Inhibition',
            note: 'competitive (mimics substrate, binds active site, beaten by excess substrate; malonate/succinate) vs non-competitive (binds elsewhere).',
          },
        ],
        aids: [
          '“Co-enzyme casual, Prosthetic permanent”',
          '“catalyst = route-finder, not bulldozer (no equilibrium shift)”',
          'class by the reaction’s verb.',
        ],
      },
    ],
  },
];
