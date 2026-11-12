import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topic 03, Enzymes, Vitamins & Nucleic Acids: pp. 498–507 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. The text never cites its figures by number, so each sits where the
 * book prints its caption: Figure 10.4, lock-and-key enzyme action (caption
 * p. 500, drawn p. 501), after Part A of "Key procedures and logical
 * framework"; Figure 10.5, the DNA double helix (caption p. 502, drawn
 * p. 503), after Part C. Both are redrawn in lib/diagrams/chemistry-12-10.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 498–507 ─────────────────────────
  {
    n: '03',
    title: 'Enzymes, Vitamins & Nucleic Acids',
    kalam:
      'Three different molecules, one shared role: they don’t bulk up the body the way carbohydrates or fats do; they enable, regulate, and direct.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A broad, high-frequency topic spanning three areas. CBSE Boards reliably set 1–3 mark questions on vitamin classification and deficiency diseases, the nucleoside-vs-nucleotide difference, and DNA-vs-RNA contrasts. NEET asks 1–2 questions yearly (often vitamin deficiencies or base pairing). JEE Main typically frames a base-pairing / nucleic-acid-composition item or an enzyme-specificity concept; JEE Advanced can build a complementary-strand, base-counting, or thermal-stability reasoning problem.',
      },
      {
        t: 'p',
        html: 'The last topic dealt with proteins — the workhorses. This one covers the support staff of the living cell: the <b>enzymes</b> that make reactions happen fast enough for life, the <b>vitamins</b> that the body needs in tiny amounts to keep those machines running, and the <b>nucleic acids</b> that store and pass on the master instructions. Three different molecules, one shared role: they don’t bulk up the body the way carbohydrates or fats do; they enable, regulate, and direct.',
      },
      {
        t: 'p',
        html: '<b>Enzymes — the specialist masons.</b> Most chemical reactions in the body would crawl along uselessly slowly at body temperature. An <b>enzyme</b> is a biocatalyst that speeds them up dramatically — and almost every enzyme is a <b>globular protein</b> (recall from the proteins topic that globular proteins are the soluble, coiled kind). Think of a mistri (mason) on a construction site: he assembles a wall far faster than an untrained person could, yet at the end of the day he himself is unchanged, ready to build again — exactly how a catalyst is regenerated. And just as a tiling specialist won’t take on plumbing, <b>each enzyme is exquisitely specific</b>: maltase splits only maltose, urease attacks only urea.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> an enzyme has a precisely shaped pocket on its surface called the <b>active site</b>, and the molecule it works on (the <b>substrate</b>) fits into it like a particular key into a particular lock. Once docked, the enzyme holds the substrate in just the right orientation and offers chemical groups that carry out the reaction — lowering the energy barrier so the reaction races ahead.',
      },
      {
        t: 'p',
        html: '<b>Vitamins — the pinch of spice.</b> Cook a dal without the pinch of hing and haldi and it’s edible but lifeless; leave them out for months and you fall ill. <b>Vitamins</b> are organic compounds the body needs in small amounts to perform specific biological functions, but cannot (mostly) make for itself, so they must come from diet. They split cleanly by solubility: <b>fat-soluble (A, D, E, K)</b> are stored in the liver and fatty tissue — like ghee kept in the pantry, available later — while <b>water-soluble (B-group and C)</b> are flushed out in urine and so must be topped up regularly (the lone exception, B<sub>12</sub>, can be stored). Deficiency of each causes a characteristic disease — a fact-pattern exams love.',
      },
      {
        t: 'p',
        html: '<b>Nucleic acids — the master recipe book. Think about it this way:</b> picture a grand kitchen (the cell nucleus) holding one priceless, locked master cookbook that never leaves the kitchen — that’s <b>DNA</b>, the chemical basis of heredity. To actually cook a dish, a cook copies out one recipe by hand and carries that copy to the stove — that’s <b>RNA</b>, which carries DNA’s message out to build proteins. Both are long polymers (<b>polynucleotides</b>) of repeating units called <b>nucleotides</b>, each nucleotide being a nitrogenous <b>base + pentose sugar + phosphate</b>. The two strands of DNA pair like fixed wedding seating: adenine always sits with thymine, guanine always with cytosine — never any other combination.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Enzymes work only within narrow <b>optimum temperature (≈ 298–310 K)</b> and <b>optimum pH (≈ 5–7)</b> windows (pH 5–7 is NCERT’s figure, the one to write in an exam; each enzyme really has its own optimum: pepsin works best near pH 2 in the stomach, trypsin near pH 8 in the intestine); outside them activity falls, and high heat denatures them (an enzyme is a protein, so the denaturation logic applies).<br>• “Enzymes lower activation energy” — they change the rate, never the position of equilibrium or the products.<br>• Vitamins are needed in <b>small</b> amounts; excess of fat-soluble vitamins is harmful because they accumulate.<br>• In RNA, <b>uracil replaces thymine</b>; in DNA, the sugar is <b>deoxyribose</b> (one less oxygen than ribose) — small swaps with large consequences.',
      },

      { t: 'part', title: 'Key definitions and classifications' },
      {
        t: 'p',
        html: 'This topic carries no dimensional formulae; the essentials are definitions and three clean classification sets.',
      },
      { t: 'p', html: '<b>A. Enzymes</b>' },
      {
        t: 'p',
        html: '• <b>Definition:</b> biocatalysts (almost all globular proteins) that speed up specific biochemical reactions and are regenerated unchanged.<br>• <b>Naming:</b> after the substrate (maltose → <b>maltase</b>; urea → <b>urease</b>) or after the reaction (oxidation-reduction → <b>oxidoreductase</b>).<br>• <b>Efficiency & examples:</b> extraordinarily efficient — a single enzyme molecule may transform on the order of a million substrate molecules per minute. Everyday examples include <b>pepsin</b> (proteins → peptides in the stomach), <b>trypsin</b> (proteins → amino acids in the intestine, as NCERT puts it; strictly, trypsin cuts proteins into smaller peptides, which other intestinal enzymes finish into amino acids), and <b>diastase</b> (starch → maltose).<br>• <b>Active site:</b> a specifically shaped pocket where the substrate binds via hydrogen bonds, ionic, van der Waals and dipole–dipole interactions.<br>• <b>Operating window:</b> optimum temperature ≈ <b>298–310 K</b> (human body 310 K), optimum pH ≈ <b>5–7</b> as NCERT gives it (pepsin near pH 2, trypsin near pH 8).<br>• <b>Co-enzymes / activators:</b> small non-protein helpers (often a vitamin-derived molecule, or metal ions like Na<sup>+</sup>, Mn<sup>2+</sup>, Cu<sup>2+</sup>) that enhance activity.',
      },
      { t: 'p', html: '<b>B. Vitamins</b>' },
      {
        t: 'table',
        title: null,
        head: ['', 'Fat-soluble', 'Water-soluble'],
        rows: [
          ['Members', 'A, D, E, K', 'B-group, C'],
          ['Solubility', 'in fats/oils, not water', 'in water'],
          ['Storage', 'stored in liver & adipose tissue', 'excreted in urine; intake must be regular (except B<sub>12</sub>)'],
        ],
      },
      {
        t: 'table',
        title: 'Deficiency diseases (memorise this table)',
        head: ['Vitamin', 'Chemical / common name', 'Deficiency disease'],
        rows: [
          ['Vitamin A', '—', 'xerophthalmia, night blindness'],
          ['Vitamin B<sub>1</sub>', 'thiamine', 'beri-beri'],
          ['Vitamin B<sub>2</sub>', 'riboflavin', 'cheilosis (cracked lips/mouth)'],
          ['Vitamin B<sub>6</sub>', 'pyridoxine', 'convulsions'],
          ['Vitamin B<sub>12</sub>', '—', 'pernicious anaemia'],
          ['Vitamin C', 'ascorbic acid', 'scurvy (bleeding gums)'],
          ['Vitamin D', '—', 'rickets, osteomalacia'],
          ['Vitamin E', '—', 'RBC fragility, muscular weakness'],
          ['Vitamin K', '—', 'increased blood-clotting time'],
        ],
      },
      {
        t: 'p',
        html: 'Etymology aside: “vitamine” = vital + amine (early ones had amino groups); the “e” was dropped when most proved not to be amines.',
      },
      { t: 'p', html: '<b>C. Nucleic Acids</b>' },
      {
        t: 'p',
        html: '• <b>Hierarchy:</b> base + sugar = <b>nucleoside</b>; nucleoside + phosphate = <b>nucleotide</b>; many nucleotides = <b>polynucleotide (nucleic acid)</b>.<br>• <b>Attachment positions:</b> base attaches at the <b>1′</b> carbon of the sugar (nucleoside); phosphate attaches at the <b>5′</b> carbon (nucleotide).<br>• <b>Backbone linkage: phosphodiester linkage</b> between the <b>3′</b> carbon of one sugar and the <b>5′</b> carbon of the next.<br>• <b>Bases: purines</b> = adenine (A), guanine (G) [fused six- + five-membered rings]; <b>pyrimidines</b> = cytosine (C), thymine (T), uracil (U) [single six-membered ring].',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'DNA', 'RNA'],
        rows: [
          ['Pentose sugar', '2-deoxyribose', 'ribose'],
          ['Bases', 'A, G, C, <b>T</b>', 'A, G, C, <b>U</b>'],
          ['Strands', 'double (Watson–Crick helix)', 'single (may fold back)'],
          ['Main role', 'heredity / genetic store, self-replication', 'protein synthesis (mRNA, rRNA, tRNA)'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Base pairing (complementarity):</b> A pairs with T (or U in RNA), G pairs with C, held by hydrogen bonds — which is why the two DNA strands are complementary, not identical.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No formal derivation exists, but two logical scaffolds carry most full-mark answers: how an enzyme actually catalyses, and how a nucleic acid is assembled and paired.',
      },
      {
        t: 'proc',
        title: 'Part A — Mechanism of enzyme action (the lock-and-key logic)',
        steps: [
          'The enzyme’s 3-D fold creates a geometrically specific cavity, the <b>active site</b>, complementary in shape to one particular substrate — hence the lock-and-key picture and the enzyme’s specificity.',
          '<b>First function — hold:</b> the substrate binds in the active site through weak interactions (H-bonds, ionic, van der Waals, dipole–dipole), held in exactly the orientation that makes reaction easy. The forces must be strong enough to hold yet weak enough to release the product afterwards.',
          '<b>Second function — attack:</b> side-chain groups of the enzyme’s amino-acid residues (for instance a serine –OH acting as a nucleophile) attack the substrate and carry out the chemical change.',
          'The net effect is a <b>lowered activation energy</b>: the reaction follows an easier path, so the rate soars — but the products and the equilibrium position are unchanged, and the enzyme emerges regenerated.',
        ],
      },
      { t: 'fig', id: 'c12-10-fig-10.4' },
      {
        t: 'proc',
        title: 'Part B — Assembling a nucleic acid (building up the polymer)',
        steps: [
          'Start with the three pieces: a <b>nitrogenous base</b>, a <b>pentose sugar</b> (ribose or deoxyribose), and <b>phosphoric acid</b>.',
          'Join base to sugar at the sugar’s <b>1′</b> carbon → a <b>nucleoside</b> (e.g. adenine + ribose → adenosine).',
          'Attach phosphate to the sugar’s <b>5′</b> carbon of the nucleoside → a <b>nucleotide</b> (the true building block, e.g. adenosine + phosphate → adenylic acid).',
          'Link nucleotides through <b>phosphodiester bonds</b> running 3′ → 5′ (phosphate bridges the 3′-OH of one sugar to the 5′ of the next) → a long <b>polynucleotide</b> chain.<br>The sequence of nucleotides along this chain is the nucleic acid’s <b>primary structure</b> — exactly parallel to a protein’s primary structure being its amino-acid sequence (see Proteins & Amino Acids).',
        ],
      },
      {
        t: 'proc',
        title: 'Part C — Base pairing and the double helix (why complementary, not identical)',
        steps: [
          'Watson and Crick showed DNA is two polynucleotide strands wound into a <b>double helix</b>, held together by hydrogen bonds between bases on opposite strands.',
          'The bonding is <b>specific</b>: a purine always pairs with a pyrimidine of the right shape — <b>A with T, G with C</b>. A cannot bond G, nor C bond T.',
          'Therefore wherever one strand reads A, the other must read T, and wherever one reads G, the other must read C — the strands are <b>complementary</b>, each the template of the other. This is what lets DNA copy itself faithfully during cell division (each strand templates a new partner).',
          'RNA, by contrast, is usually a <b>single</b> strand that may fold back on itself. Its three types share the work of protein synthesis: <b>messenger RNA (mRNA)</b> carries the coded instruction copied from DNA, <b>transfer RNA (tRNA)</b> ferries the correct amino acids to the assembly site, and <b>ribosomal RNA (rRNA)</b> forms the machinery on which the chain is actually built — together translating DNA’s stored message into a finished protein.',
          'Because each individual’s base sequence is unique and cannot be altered by any known treatment (identical twins, who share one sequence, are the exception), this same molecular individuality underlies <b>DNA fingerprinting</b>, now used in forensic identification of criminals, in settling paternity, and in identifying accident victims by comparison with the DNA of relatives.',
        ],
      },
      { t: 'fig', id: 'c12-10-fig-10.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Distinguish a nucleoside from a nucleotide. State the components of each and the carbon position at which the distinguishing group is attached.',
        steps: [
          'Build both from the same parts and note exactly what each contains:<br>• A <b>nucleoside</b> = nitrogenous <b>base + pentose sugar</b>, with the base joined at the sugar’s <b>1′</b> carbon. (Example: adenine + ribose → adenosine.)<br>• A <b>nucleotide</b> = nucleoside <b>+ phosphate</b>, with the phosphoric acid joined at the sugar’s <b>5′</b> carbon. (Example: adenosine + phosphate → adenylic acid.)',
          'So the single difference is the <b>phosphate group</b>: a nucleotide is a phosphorylated nucleoside.',
        ],
        ans: 'Nucleoside = base + sugar (base at 1′); nucleotide = base + sugar + phosphate (phosphate at 5′).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following bases is present in RNA but not in DNA? (a) Adenine (b) Guanine (c) Thymine (d) Uracil',
        steps: [
          '<b>The trap:</b> the question asks for the base unique to RNA. Students who memorised “DNA has thymine” sometimes flip the logic and pick thymine — which is the base unique to DNA, the opposite of what’s asked.',
          '<b>Fast reasoning:</b> both share A, G, C. The fourth base differs: <b>DNA → thymine, RNA → uracil.</b> “Present in RNA but not DNA” therefore points to <b>uracil</b>.',
          '<b>Shortcut mnemonic:</b> “<b>U</b> for <b>RNA</b> is <b>U</b>nique” — uracil belongs only to RNA; thymine only to DNA.',
        ],
        ans: '(d) Uracil.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'One strand of a DNA double helix contains 22 adenine (A), 18 guanine (G), 15 cytosine (C) and 25 thymine (T) bases. Using the base-pairing rules, determine (i) the number of each base on the complementary strand, and (ii) the total number of base pairs in this segment of the double helix. This links the <b>complementarity rule</b> with simple <b>stoichiometric bookkeeping</b>.',
        steps: [
          '<b>(i) Apply complementary pairing strand-to-strand.</b> Each base on strand 1 dictates its partner on strand 2: A↔T and G↔C. So the complementary strand carries the “mirror” of each:<br>• Strand-1 A (22) → strand-2 T (22)<br>• Strand-1 T (25) → strand-2 A (25)<br>• Strand-1 G (18) → strand-2 C (18)<br>• Strand-1 C (15) → strand-2 G (15)',
          '<b>Complementary strand: A = 25, T = 22, G = 15, C = 18.</b>',
          '<b>(ii) Total base pairs.</b> Each base on strand 1 is paired with exactly one base on strand 2, so the number of base pairs equals the number of bases on one strand:<br>22 + 18 + 15 + 25 = <b>80</b> base pairs.',
          '<b>Sanity check (Chargaff-style):</b> across the whole duplex, total A = 22 + 25 = 47 equals total T = 25 + 22 = 47, and total G = 18 + 15 = 33 equals total C = 15 + 18 = 33 — A = T and G = C, exactly as complementary pairing demands.',
        ],
        ans: 'Complementary strand A = 25, T = 22, G = 15, C = 18; total = 80 base pairs.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two DNA double-helix segments P and Q are of equal length (same number of base pairs). Segment P is rich in A–T pairs; segment Q is rich in G–C pairs. Given that an A–T pair is held by two hydrogen bonds while a G–C pair is held by three, reason out which segment requires a higher temperature to separate (“melt”) its two strands, and explain why — connecting your answer to the role of base pairing in keeping the double helix together.',
        steps: [
          '<b>Step 1 — what holds the strands together.</b> The two strands of a double helix are not covalently joined to each other; they are held together by the <b>hydrogen bonds between paired bases</b> (and by the stacking of neighbouring base pairs on one another, which the exam answer leaves aside). To separate (melt) the strands, those hydrogen bonds must be broken — and breaking more, or stronger, bonds needs more thermal energy.',
          '<b>Step 2 — count the bonds per pair.</b> An <b>A–T</b> pair contributes <b>2</b> hydrogen bonds; a <b>G–C</b> pair contributes <b>3</b>. So, base pair for base pair, a G–C-rich region is glued together more tightly than an A–T-rich region of the same length.',
          '<b>Step 3 — compare P and Q.</b> Because P is A–T-rich, most of its rungs have only 2 hydrogen bonds; because Q is G–C-rich, most of its rungs have 3. For the same number of base pairs, <b>Q has the greater total number of hydrogen bonds</b>, hence the greater total bonding energy holding its strands together.',
          '<b>Step 4 — conclusion.</b> Therefore <b>segment Q (G–C-rich) requires the higher temperature to melt.</b> The deeper lesson: base pairing is not just an identity rule (A with T, G with C) — the kind of pairing quantitatively sets the stability of the helix, which is why GC content is a real measure of DNA thermal stability. (Stacking points the same way: G–C pairs also stack more strongly than A–T pairs. So reasoning by the 3-versus-2 hydrogen-bond count, the answer examiners expect, gives the right conclusion.)',
        ],
        ans: 'Q (the G–C-rich segment) melts at the higher temperature, because each G–C pair’s 3 hydrogen bonds (vs 2 for A–T) make a GC-rich duplex more strongly held.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify vitamins on the basis of solubility, giving the members of each group. Name the vitamin whose deficiency causes (i) scurvy and (ii) rickets.',
            a: 'Fat-soluble (A, D, E, K) — stored in liver/fat; water-soluble (B-group, C) — excreted, needed regularly. (i) Vitamin C, (ii) Vitamin D.',
          },
          {
            q: '[NEET] Which of the following is the building block (monomer) of nucleic acids: nucleoside, nucleotide, amino acid, or base?',
            a: 'Nucleotide.',
          },
          {
            q: '[JEE Main] State two structural differences and one functional difference between DNA and RNA.',
            a: 'Structural: DNA has deoxyribose / RNA has ribose; DNA has thymine / RNA has uracil (also DNA double-stranded vs RNA single-stranded). Functional: DNA stores and transmits genetic information (heredity); RNA carries out protein synthesis.',
          },
          {
            q: '[JEE Main] An enzyme catalyses a reaction at 310 K but loses almost all activity at 350 K. Give two reasons, relating your answer to the nature of enzymes.',
            a: '(i) Enzymes are proteins, and well above the optimum temperature they <b>denature</b> — the 3-D fold (and hence the active site) is destroyed; (ii) without its specific active-site shape the enzyme can no longer bind the substrate, so catalysis stops.',
          },
          {
            q: '[JEE Advanced] Explain, using the lock-and-key idea, why the enzyme urease catalyses the hydrolysis of urea but not of any other amide, and why a small rise in temperature beyond the optimum sharply reduces this catalytic activity.',
            a: 'Urease’s active site is shaped to fit only urea (lock-and-key specificity), so other amides cannot dock and be catalysed; a temperature rise beyond the optimum distorts/denatures the protein’s shape, the active site no longer matches urea, and activity falls sharply.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which statement about enzymes is correct?',
        opts: [
          {
            label: 'Enzymes are carbohydrates that catalyse reactions.',
            nudge: '<b>(a)</b> misidentifies their chemical nature — enzymes are proteins, not carbohydrates.',
          },
          {
            label: 'Enzymes are globular proteins that lower the activation energy of biochemical reactions.',
            nudge: null,
          },
          {
            label: 'Enzymes shift the equilibrium of a reaction toward products.',
            nudge: '<b>(c)</b> confuses a catalyst with an equilibrium-shifter; a catalyst changes only the rate, never the equilibrium position.',
          },
          {
            label: 'One enzyme can catalyse any biochemical reaction.',
            nudge: '<b>(d)</b> contradicts enzyme <b>specificity</b> — each enzyme acts on essentially one substrate/reaction, the very property the lock-and-key model captures.',
          },
        ],
        correct: 1,
        solution:
          'Almost all enzymes are globular proteins acting as biocatalysts; they speed reactions by lowering the activation-energy barrier.',
      },
      {
        t: 'mcq',
        q: 'A fat-soluble vitamin that, when deficient, increases the blood-clotting time is:',
        opts: [
          {
            label: 'Vitamin C',
            nudge: '<b>(a)</b> vitamin C is water-soluble — wrong solubility class — and its deficiency causes scurvy, not a clotting defect.',
          },
          {
            label: 'Vitamin B<sub>12</sub>',
            nudge: '<b>(b)</b> B<sub>12</sub> is water-soluble (the storable exception) and its deficiency causes pernicious anaemia, not delayed clotting.',
          },
          { label: 'Vitamin K', nudge: null },
          {
            label: 'Vitamin B<sub>2</sub>',
            nudge: '<b>(d)</b> vitamin B<sub>2</sub> is water-soluble — wrong solubility class — and its deficiency causes cheilosis, not a clotting defect.',
          },
        ],
        correct: 2,
        solution: 'Vitamin K is fat-soluble and essential for normal blood clotting; its deficiency prolongs clotting time.',
      },
      {
        t: 'mcq',
        q: 'In a DNA molecule, adenine pairs with thymine and guanine pairs with:',
        opts: [
          {
            label: 'adenine',
            nudge: '<b>(a)</b> two purines (G and A) cannot pair — purine pairs only with the correctly shaped pyrimidine.',
          },
          { label: 'cytosine', nudge: null },
          { label: 'uracil', nudge: '<b>(c)</b> uracil belongs to RNA, not DNA, and pairs with adenine, not guanine.' },
          {
            label: 'thymine',
            nudge: '<b>(d)</b> thymine is adenine’s partner; pairing it with guanine breaks the complementarity rule.',
          },
        ],
        correct: 1,
        solution: 'The specific base-pairing rule is A–T and G–C; guanine hydrogen-bonds only with cytosine.',
      },
      {
        t: 'mcq',
        q: 'The phosphodiester linkage in a nucleic-acid chain connects:',
        opts: [
          {
            label: 'the 1′ carbon of one sugar to the base',
            nudge: '<b>(a)</b> describes the base-to-sugar (nucleoside) bond, not the chain backbone.',
          },
          { label: 'the 3′ carbon of one sugar to the 5′ carbon of the next sugar', nudge: null },
          {
            label: 'two nitrogenous bases directly',
            nudge: '<b>(c)</b> bases are joined across strands by hydrogen bonds, not by the phosphodiester backbone.',
          },
          {
            label: 'two phosphate groups to each other',
            nudge: '<b>(d)</b> the linkage joins sugars through phosphate, not phosphate to phosphate; this distractor confuses the bridging atom with the linked atoms.',
          },
        ],
        correct: 1,
        solution:
          'The backbone is built by phosphate bridges joining the 3′ position of one sugar to the 5′ position of the adjacent sugar.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>swapping thymine and uracil.</b> DNA uses <b>thymine</b>, RNA uses <b>uracil</b>; A, G, C are common to both. “U for RNA is Unique” fixes it.',
          '<b>confusing nucleoside and nucleotide.</b> Nucleoside = base + sugar; nucleotide = base + sugar + <b>phosphate</b>. The phosphate is the whole difference (and the “<b>t</b> in nucleo<b>t</b>ide” ↔ “phospha<b>t</b>e” is a handy cue).',
          '<b>thinking enzymes shift equilibrium or change products.</b> Enzymes only lower activation energy and raise the <b>rate</b>; equilibrium position and products are untouched. Well above the optimum temperature they denature and stop working.',
          '<b>mixing up vitamin solubility classes.</b> Only <b>A, D, E, K</b> are fat-soluble (stored); the <b>B-group and C</b> are water-soluble (excreted, needed regularly, except B<sub>12</sub>). Memory aid: fat-soluble vitamins are “<b>ADEK</b>”.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for DNA base sums, lean on complementarity as built-in checks — <b>total A = total T</b> and <b>total G = total C</b> across a duplex; if your numbers break this, you’ve slipped. For vitamins, lock in two short lists — fat-soluble <b>ADEK</b>, and the deficiency pairs (C–scurvy, D–rickets, A–night blindness, K–clotting, B<sub>1</sub>–beri-beri). For enzymes, remember the trio <b>specific • lowers activation energy • denatures on overheating</b>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Enzymes',
            note: 'biocatalysts, almost all <b>globular proteins</b>; named after substrate (maltase) or reaction (oxidoreductase); <b>active site</b> binds substrate (lock-and-key), <b>lowers activation energy</b>; optimum <i>T</i> ≈ 298–310 K, pH ≈ 5–7 (NCERT; pepsin ≈ 2); denature on overheating.',
          },
          {
            f: 'Vitamins',
            note: 'organic micro-nutrients needed in small amounts. <b>Fat-soluble = ADEK</b> (stored, liver/fat); <b>water-soluble = B-group + C</b> (excreted, regular intake; B<sub>12</sub> storable).',
          },
          {
            f: 'Deficiency pairs',
            note: 'A → night blindness/xerophthalmia; B<sub>1</sub> → beri-beri; B<sub>2</sub> → cheilosis; B<sub>12</sub> → pernicious anaemia; C → scurvy; D → rickets; E → RBC fragility; K → ↑ clotting time.',
          },
          {
            f: 'Nucleic-acid hierarchy',
            note: 'base + sugar = <b>nucleoside</b> (base at 1′); + phosphate = <b>nucleotide</b> (phosphate at 5′); chain via <b>phosphodiester</b> (3′→5′) = <b>polynucleotide</b>.',
          },
          {
            f: 'DNA vs RNA',
            note: 'deoxyribose/ribose; <b>T/U</b>; double helix / single strand; heredity / protein synthesis (mRNA, rRNA, tRNA).',
          },
          {
            f: 'Base pairing',
            note: '<b>A–T (or A–U), G–C</b>; complementary strands; purines = <b>A, G</b>, pyrimidines = <b>C, T, U</b>.',
          },
        ],
        aids: [
          '“ADEK = fat-soluble”',
          '“U is Unique to RNA”',
          '“nucleo<b>t</b>ide has the phospha<b>t</b>e”',
          '“A = T, G = C across a duplex.”',
        ],
      },
    ],
  },
];
