import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 12, Respiration in Plants: Topics 02 and 03, word for word from the
 * Class 11 Biology Master Reference (pp. 721 to 737).
 *
 * Topic 02 TCA Cycle & ETS, pp. 721 to 729 (Figure 12.2, caption p. 723, drawing p. 724;
 * Figure 12.3, caption p. 725, drawing p. 726). Topic 03 Amphibolic Pathway & RQ, pp. 730
 * to 737 (Figure 12.4, caption p. 732, drawing p. 733). Each figure is set where its caption
 * stands in the reading order.
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction
 * on one line (the RQ ratio CO2 over O2 is stacked), scientific names italic (none occur here),
 * "Sub-topic 01/02" is "Topic 01/02", options keep the book's lower-case (a) to (d) in the text.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 721–729 ─────────────────────────
  {
    n: '02',
    title: 'TCA Cycle & ETS',
    kalam: 'The Krebs cycle is a roundabout, not a straight road.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the densest scoring zone of the chapter. CBSE Boards favour the Krebs net tally and the chemiosmotic mechanism as 2–3 mark questions. NEET reliably asks 2–3 items each year (the book’s estimate from past papers, not official figures): enzyme locations, the single substrate-level step in Krebs, the electron-carrier sequence, and the role of O<sub>2</sub>. CUET leans on match-the-column and assertion–reason. NEET’s hardest items hide a wrong enzyme or a misplaced complex inside an otherwise correct statement, so exact locations matter.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we left pyruvate standing at a crossroads. If oxygen is present, it does not ferment: it walks through a turnstile into the mitochondrion and joins the aerobic mainline. That mainline has three connected stages: a quick <b>link reaction</b>, the <b>citric acid (Krebs) cycle</b>, and the <b>electron transport system (ETS)</b>. Together they squeeze out almost all the energy that glycolysis left untouched.',
      },
      {
        t: 'p',
        html: 'Think of the mitochondrion as a hydroelectric power station built into a hillside. Pyruvate is the truck of fuel arriving at the gate. The <b>link reaction</b> is the security check at the gate: pyruvate (3 carbons) is stripped of one carbon as CO<sub>2</sub> and handed a coenzyme-A tag, becoming the 2-carbon <b>acetyl CoA</b>. In the same step a hydrogen is plucked off and loaded onto NAD<sup>+</sup> to make NADH. Pyruvate is carried in and acetyl CoA is made inside the matrix.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the Krebs cycle is a roundabout, not a straight road. Acetyl CoA does not get “used up” and discarded: it is handed to a waiting 4-carbon molecule, <b>oxaloacetate (OAA)</b>, to form 6-carbon <b>citric acid</b>, and then the cycle turns: carbons are knocked off as CO<sub>2</sub>, hydrogens are stripped onto NAD<sup>+</sup> and FAD (making NADH and FADH<sub>2</sub>), and eventually OAA is regenerated, ready to grab the next acetyl CoA. Nothing is consumed permanently except the acetyl group; the carrier keeps coming back around the roundabout. That is why a tiny pool of OAA can process an endless stream of fuel.',
      },
      {
        t: 'p',
        html: 'But here is the subtle part students often miss: the Krebs cycle itself barely makes any ATP, just one per turn. Its real product is a fleet of loaded electron carriers, NADH and FADH<sub>2</sub>. These are like trucks full of water hauled to the top of the dam. The <b>ETS</b> is the dam itself. The carriers dump their electrons into a chain of protein complexes on the inner mitochondrial membrane; as electrons tumble downhill from complex to complex, the energy released pumps protons (H<sup>+</sup>) across the membrane, building up a reservoir on one side. When those protons rush back down through the turbine, the enzyme <b>ATP synthase</b>, their flow drives the synthesis of ATP. This is <b>oxidative phosphorylation</b>, and it is where the overwhelming bulk of respiratory ATP is actually made.',
      },
      {
        t: 'p',
        html: 'At the very bottom of the chain sits <b>oxygen</b>, waiting to accept the spent electrons (and protons) to form water. Without oxygen to clear the end of the line, the whole chain backs up, NADH cannot be unloaded, and, as we saw, the cell is forced back into fermentation.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Everything in this topic is strictly <b>aerobic</b>: no O<sub>2</sub>, no ETS, and the Krebs cycle stalls because NADH/FADH<sub>2</sub> cannot be reoxidised. The cycle also depends on OAA being continuously regenerated; if intermediates are siphoned off for biosynthesis (the amphibolic role, covered later) without replacement, the cycle slows. Finally, the textbook ATP figures (NADH → 3, FADH<sub>2</sub> → 2) are idealised theoretical yields, not exact measured values.',
      },

      { t: 'part', title: 'Key definitions, pathways and net reactions' },
      {
        t: 'def',
        term: 'Link reaction (oxidative decarboxylation of pyruvate)',
        html: 'carried out by the <b>pyruvate dehydrogenase complex</b> in the mitochondrial matrix.',
      },
      {
        t: 'p',
        html: '<br>Pyruvate (3C) + CoA + NAD<sup>+</sup> → Acetyl CoA (2C) + CO<sub>2</sub> + NADH + H<sup>+</sup><br>',
      },
      {
        t: 'def',
        term: 'Citric acid cycle (TCA / Krebs cycle)',
        html: 'occurs in the <b>mitochondrial matrix</b> (cytosol in prokaryotes). Three names, one pathway: tricarboxylic acid (named for citrate and isocitrate, the first intermediates, which bear three carboxyl groups), citric acid (first product), Krebs (Hans Krebs, who worked it out in pigeon flight muscle).',
      },
      {
        t: 'table',
        title: 'Net yield per turn (per acetyl CoA)',
        head: ['Product', 'Amount per turn', 'Per glucose (2 turns)'],
        rows: [
          ['CO<sub>2</sub> released', '2', '4'],
          ['NADH', '3', '6'],
          ['FADH<sub>2</sub>', '1', '2'],
          ['ATP (via GTP)', '1', '2'],
        ],
      },
      {
        t: 'p',
        html: 'The single ATP arises by <b>substrate-level phosphorylation</b> at the succinyl-CoA → succinic acid step (enzyme: succinyl-CoA synthetase / succinate thiokinase).',
      },
      {
        t: 'table',
        title: 'Electron Transport System (ETS), inner mitochondrial membrane',
        head: ['Complex', 'Name', 'Role'],
        rows: [
          ['I', 'NADH dehydrogenase', 'accepts electrons from NADH'],
          ['II', 'Succinate dehydrogenase', 'accepts electrons from FADH<sub>2</sub> (only TCA enzyme on the membrane)'],
          ['III', 'Cytochrome bc<sub>1</sub>', 'passes electrons toward cytochrome c'],
          ['IV', 'Cytochrome c oxidase (cyt a–a<sub>3</sub>; contains Fe & Cu)', 'donates electrons to O<sub>2</sub>'],
          ['V', 'ATP synthase (F<sub>0</sub>–F<sub>1</sub>)', 'synthesises ATP from the proton gradient'],
        ],
      },
      {
        t: 'p',
        html: 'Mobile carriers: <b>ubiquinone (CoQ)</b> shuttles between Complexes I/II and III; <b>cytochrome c</b> shuttles between III and IV. Electron flow: NADH → I → UQ → III → cyt c → IV → O<sub>2</sub>; FADH<sub>2</sub> enters at Complex II.',
      },
      {
        t: 'def',
        term: 'Oxidative phosphorylation',
        html: 'formation of ATP using energy released by the oxidation–reduction of substrates during electron transport (distinct from substrate-level phosphorylation). Theoretical payoff: <b>each NADH → 3 ATP, each FADH<sub>2</sub> → 2 ATP</b>.',
      },
      {
        t: 'def',
        term: 'Terminal acceptor',
        html: 'O<sub>2</sub>: accepts spent electrons and protons to form H<sub>2</sub>O.',
      },
      {
        t: 'p',
        html: '(No SI/dimensional formulas apply: these are stoichiometric, locational and enzymatic relationships.)',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      { t: 'fig', id: 'b11-12-fig-12.2' },
      {
        t: 'proc',
        title: 'The Krebs cycle, turn by turn: read it as a roundabout',
        steps: [
          '<b>Condensation.</b> Acetyl CoA (2C) joins OAA (4C) → citric acid (6C), via citrate synthase. <b>Why this matters:</b> the acetyl carbon enters the cycle here; OAA is the carrier that must be regenerated at the end.',
          '<b>Isomerisation.</b> Citrate → isocitrate (aconitase): a rearrangement that repositions the molecule for oxidation.',
          '<b>First decarboxylation.</b> Isocitrate → α-ketoglutarate (5C): one CO<sub>2</sub> leaves, one NADH forms (isocitrate dehydrogenase).',
          '<b>Second decarboxylation.</b> α-ketoglutarate → succinyl-CoA (4C): a second CO<sub>2</sub> leaves, a second NADH forms. Two carbons have now left as CO<sub>2</sub>, equal in number to the two that entered as acetyl CoA (though not the same atoms in that turn).',
          '<b>Substrate-level phosphorylation.</b> Succinyl-CoA → succinate: the one and only direct ATP (as GTP) of the cycle.',
          '<b>FADH<sub>2</sub> step.</b> Succinate → fumarate: hydrogens go to FAD (not NAD<sup>+</sup> here), making FADH<sub>2</sub>. Note: succinate dehydrogenase is bound to the inner membrane: it is literally Complex II of the ETS, which is why this is the only Krebs enzyme not floating in the matrix.',
          '<b>Hydration.</b> Fumarate → malate (fumarase, adds water).',
          '<b>Regeneration.</b> Malate → OAA: third NADH forms, and OAA is back, ready for the next acetyl CoA.',
        ],
      },
      {
        t: 'p',
        html: 'Tally per turn: 2 CO<sub>2</sub>, 3 NADH, 1 FADH<sub>2</sub>, 1 ATP. Because one glucose yields two acetyl CoA, the cycle runs <b>twice</b> per glucose.',
      },
      {
        t: 'p',
        html: '<b>The chemiosmotic mechanism: how ETS actually makes ATP.</b>',
      },
      { t: 'fig', id: 'b11-12-fig-12.3' },
      {
        t: 'proc',
        title: 'The key insight (Peter Mitchell’s chemiosmotic hypothesis) is that electron transport and ATP synthesis are coupled indirectly, through a proton gradient, not by any direct chemical handoff',
        steps: [
          'NADH delivers electrons to Complex I; FADH<sub>2</sub> delivers to Complex II. (Because FADH<sub>2</sub> enters after Complex I, it powers fewer proton pumps, which is exactly why it yields 2 ATP versus NADH’s 3.)',
          'Electrons pass downhill: Complex I → ubiquinone → Complex III → cytochrome c → Complex IV. At each major complex, the released energy pumps <b>H<sup>+</sup> from the matrix into the intermembrane space</b>.',
          'This builds an electrochemical proton gradient: a charged “reservoir” across the inner membrane.',
          'Protons return to the matrix mainly through <b>ATP synthase (Complex V)</b>: they enter the F<sub>0</sub> channel, and their flow turns the machinery of the F<sub>1</sub> headpiece, which catalyses ADP + P<sub>i</sub> → ATP.',
          'At the end of the chain, <b>O<sub>2</sub> accepts the de-energised electrons and protons</b>, forming water. If O<sub>2</sub> is absent, electrons cannot be offloaded, the chain jams, NADH piles up, and oxidative phosphorylation halts.',
        ],
      },
      {
        t: 'p',
        html: 'That coupling (electron flow → proton gradient → ATP) is the whole point of oxidative phosphorylation, and it is where the cell finally cashes in the NADH and FADH<sub>2</sub> banked during the link reaction and Krebs cycle.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'State the net products of one turn of the Krebs cycle, and identify the single step that produces ATP directly.',
        steps: [
          '<b>Reasoning.</b> Track the carriers around one turn: isocitrate → α-KG gives NADH; α-KG → succinyl-CoA gives NADH; malate → OAA gives NADH (3 NADH total). Succinate → fumarate gives FADH<sub>2</sub> (1). Two decarboxylations release 2 CO<sub>2</sub>. The only direct nucleotide-phosphate made is at succinyl-CoA → succinic acid.',
        ],
        ans: '<b>Net per turn:</b> 3 NADH, 1 FADH<sub>2</sub>, 1 ATP (as GTP), 2 CO<sub>2</sub>. The direct-ATP step is <b>succinyl-CoA → succinic acid</b>, by substrate-level phosphorylation.',
      },
      {
        t: 'ex',
        tag: 'CUET / Match-the-Column',
        q: 'Match Column I with Column II:<br>A. Molecular O<sub>2</sub> | (i) α-ketoglutaric acid<br>B. Mobile electron carrier | (ii) terminal electron acceptor<br>C. Pyruvate dehydrogenase | (iii) cytochrome c<br>D. Decarboxylation product (5C) | (iv) acetyl CoA',
        steps: [
          '<b>Reasoning.</b> O<sub>2</sub> sits at the end of the ETS → terminal acceptor (ii). The mobile carrier between Complexes III and IV is cytochrome c (iii). Pyruvate dehydrogenase makes acetyl CoA (iv). The 5-carbon decarboxylation product of the cycle is α-ketoglutarate (i).',
        ],
        ans: '<b>A–ii, B–iii, C–iv, D–i.</b>',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'An inhibitor blocks cytochrome c oxidase (Complex IV). Predict the immediate effect on (i) oxygen consumption, (ii) the proton gradient, and (iii) Krebs cycle activity.',
        steps: [
          '<b>Reasoning.</b> (i) Complex IV is the only complex of the standard chain that hands electrons to O<sub>2</sub>. Block it and O<sub>2</sub> can no longer be reduced through the chain → <b>oxygen consumption through the chain stops</b>. (ii) With no electron flow through the chain, the proton-pumping complexes fall idle → the <b>gradient collapses</b> and ATP synthesis by oxidative phosphorylation ceases. (iii) Electrons back up, so NADH and FADH<sub>2</sub> cannot be reoxidised to NAD<sup>+</sup>/FAD. Lacking fresh NAD<sup>+</sup>/FAD, the <b>Krebs cycle stalls</b>. (This is exactly how cyanide, a Complex IV poison, is lethal.) (Many plant tissues can still pass some electrons to O<sub>2</sub> through the cyanide-resistant alternative oxidase; see Additional topic D.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): Succinate dehydrogenase is the only enzyme of the Krebs cycle not located in the mitochondrial matrix. Reason (R): Succinate dehydrogenase is embedded in the inner mitochondrial membrane and functions as Complex II of the ETS. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Analysis.</b> Every other Krebs enzyme (citrate synthase, aconitase, the dehydrogenases for isocitrate, α-KG and malate, etc.) is in the matrix. Succinate dehydrogenase, which converts succinate → fumarate producing FADH<sub>2</sub>, is anchored in the inner membrane, and that membrane location is precisely because it doubles as ETS Complex II, feeding FADH<sub>2</sub> electrons straight into ubiquinone. <b>A is true; R is true; R is the correct explanation of A.</b>',
          '<b>Subtlety:</b> a common trap is to “fix” the assertion by assuming all Krebs enzymes are in the matrix, but the membrane exception is itself the examinable point.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the enzyme complex of the link reaction, its location, and its three products from pyruvate.',
            a: 'Pyruvate dehydrogenase complex; mitochondrial matrix; acetyl CoA, CO<sub>2</sub>, NADH (+H<sup>+</sup>).',
          },
          {
            q: '[CUET] Match: (A) Complex I (B) Complex II (C) Complex IV (D) Complex V with (i) ATP synthase, (ii) NADH dehydrogenase, (iii) cytochrome c oxidase, (iv) succinate dehydrogenase.',
            a: 'A–ii, B–iv, C–iii, D–i.',
          },
          {
            q: '[NEET] How many CO<sub>2</sub> molecules are released during the complete operation of the Krebs cycle for one molecule of glucose, and at which two cycle steps?',
            a: '4 CO<sub>2</sub> (2 per turn × 2 turns); at isocitrate → α-ketoglutarate and α-ketoglutarate → succinyl-CoA.',
          },
          {
            q: '[NEET] Arrange in correct order of electron flow: cytochrome c, Complex I, O<sub>2</sub>, ubiquinone, Complex IV, Complex III.',
            a: 'Complex I → ubiquinone → Complex III → cytochrome c → Complex IV → O<sub>2</sub>.',
          },
          {
            q: '[NEET High-Difficulty] Using the theoretical yields (NADH → 3 ATP, FADH<sub>2</sub> → 2 ATP), calculate the ATP obtainable through the ETS from the NADH and FADH<sub>2</sub> produced by the Krebs cycle alone (i.e. the two turns from one glucose).',
            a: 'Per glucose Krebs gives 6 NADH and 2 FADH<sub>2</sub> → (6 × 3) + (2 × 2) = 18 + 4 = <b>22 ATP</b> (from Krebs carriers alone, via ETS).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the Krebs cycle, the only substrate-level phosphorylation occurs during:',
        opts: [
          { label: 'isocitrate → α-ketoglutarate', nudge: '<b>(a)</b> and <b>(d)</b> produce NADH, not ATP.' },
          { label: 'succinyl-CoA → succinic acid', nudge: null },
          { label: 'succinate → fumarate', nudge: '<b>(c)</b> produces FADH<sub>2</sub>.' },
          { label: 'malate → oxaloacetate', nudge: '<b>(a)</b> and <b>(d)</b> produce NADH, not ATP.' },
        ],
        correct: 1,
        solution: 'GTP (≡ ATP) is made directly here by succinate thiokinase. Students who recall “Krebs makes ATP” but not where are tempted by any oxidation step, but only succinyl-CoA → succinate does it directly.',
      },
      {
        t: 'mcq',
        q: 'The terminal acceptor of electrons in the mitochondrial ETS is:',
        opts: [
          { label: 'NAD<sup>+</sup>', nudge: '<b>(a)</b> NAD<sup>+</sup> is the oxidised form of the input carrier (NADH), regenerated at Complex I; it is not the terminal acceptor.' },
          { label: 'cytochrome c', nudge: '<b>(b)</b> and <b>(d)</b> are intermediate carriers within the chain: tempting because they “carry” electrons, but they pass them on rather than terminating the flow.' },
          { label: 'oxygen', nudge: null },
          { label: 'ubiquinone', nudge: '<b>(b)</b> and <b>(d)</b> are intermediate carriers within the chain: tempting because they “carry” electrons, but they pass them on rather than terminating the flow.' },
        ],
        correct: 2,
        solution: 'O<sub>2</sub> is reduced to water at Complex IV, clearing the chain.',
      },
      {
        t: 'mcq',
        q: 'According to the chemiosmotic hypothesis, ATP synthesis in mitochondria is driven by:',
        opts: [
          { label: 'high-energy bonds in membrane proteins', nudge: '<b>(a)</b> misstates the mechanism.' },
          { label: 'a proton gradient across the inner mitochondrial membrane', nudge: null },
          { label: 'direct phosphate transfer from substrates', nudge: '<b>(c)</b> describes substrate-level phosphorylation, not oxidative.' },
          { label: 'accumulation of Na<sup>+</sup> ions', nudge: '<b>(d)</b> confuses it with nerve-impulse ionic gradients: it is protons, not sodium.' },
        ],
        correct: 1,
        solution: 'Electron transport pumps H<sup>+</sup> into the intermembrane space; their return through ATP synthase drives ATP formation.',
      },
      {
        t: 'mcq',
        q: 'Which enzyme of the citric acid cycle is located in the inner mitochondrial membrane rather than the matrix?',
        opts: [
          { label: 'citrate synthase', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all soluble matrix enzymes.' },
          { label: 'isocitrate dehydrogenase', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all soluble matrix enzymes.' },
          { label: 'succinate dehydrogenase', nudge: null },
          { label: 'malate dehydrogenase', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> are all soluble matrix enzymes.' },
        ],
        correct: 2,
        solution: 'It doubles as ETS Complex II. The distractors are plausible only if a student assumes the entire cycle is uniformly in the matrix: the membrane exception is the tested fact.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Acetyl CoA’s partner.</b> The cycle starts with acetyl CoA + <b>OAA</b> (4C) → citrate, not acetyl CoA + pyruvic acid. This wrong-partner option is a common NEET distractor.',
          '<b>NADH, never NADPH, in Krebs.</b> Several printed diagrams mislabel it. The Krebs cycle and ETS use <b>NAD<sup>+</sup>/NADH</b>; NADPH belongs to photosynthesis and biosynthesis.',
          '<b>Where the ATP really comes from.</b> Krebs makes only 1 ATP per turn directly; the <b>bulk</b> of ATP is made later in the ETS by oxidative phosphorylation from NADH/FADH<sub>2</sub>. Don’t credit Krebs with the big numbers.',
          '<b>Membrane vs matrix.</b> ETS and ATP synthase sit on the inner mitochondrial membrane; Krebs enzymes (except succinate dehydrogenase) are in the matrix. Mixing these up loses easy marks.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Memorise the cycle by its exit points, not its full list of intermediates: “two CO<sub>2</sub> out, three NADH out, one FADH<sub>2</sub> out, one ATP out, per turn, doubled per glucose.” For the ETS, anchor on “<b>NADH = 3, FADH<sub>2</sub> = 2</b>” and the reason (FADH<sub>2</sub> enters later, past one pump). Those two anchors answer the vast majority of questions.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Link reaction:</b> pyruvate (3C) + CoA + NAD<sup>+</sup> → acetyl CoA (2C) + CO<sub>2</sub> + NADH; enzyme <b>pyruvate dehydrogenase</b>; in matrix.', note: '' },
          { f: '<b>Krebs / TCA / citric acid cycle:</b> matrix; starts acetyl CoA + <b>OAA</b> → <b>citrate</b>; per turn → <b>3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub></b>; per glucose × 2.', note: '' },
          { f: '<b>Only substrate-level ATP step:</b> succinyl-CoA → succinic acid.', note: '' },
          { f: '<b>Only membrane-bound Krebs enzyme:</b> succinate dehydrogenase (= ETS Complex II).', note: '' },
          { f: '<b>ETS (inner membrane):</b> I (NADH dehydrogenase) ⋅ II (succinate dehydrogenase) ⋅ III (cyt bc<sub>1</sub>) ⋅ IV (cyt c oxidase → O<sub>2</sub>) ⋅ V (ATP synthase). Mobile carriers: <b>ubiquinone, cytochrome c.</b>', note: '' },
          { f: '<b>Oxidative phosphorylation:</b> proton gradient (chemiosmosis) drives ATP synthase; <b>NADH → 3 ATP, FADH<sub>2</sub> → 2 ATP</b>; O<sub>2</sub> = terminal acceptor → H<sub>2</sub>O.', note: '' },
        ],
        aids: [
          '<b>Memory aids:</b> • “Can I Keep Selling Sea Food Money?”: <b>C</b>itrate, <b>I</b>socitrate, α-<b>K</b>etoglutarate, <b>S</b>uccinyl-CoA, <b>S</b>uccinate, <b>F</b>umarate, <b>M</b>alate (→ OAA). • “3 minus 2 = the FADH<sub>2</sub> gap”: NADH gives 3, FADH<sub>2</sub> gives 2, because FADH<sub>2</sub> enters one pump later. • “OAA goes round and comes round”: the carrier is regenerated, never consumed.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 730–737 ─────────────────────────
  {
    n: '03',
    title: 'Amphibolic Pathway & RQ',
    kalam: 'Because the pathway runs breakdown and build-up traffic on the same road, we call it amphibolic (amphi = both).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A compact but reliably tested closer. CBSE Boards favour the definition of the amphibolic pathway and a simple RQ calculation (1–2 marks). NEET asks RQ values for different substrates almost every year (the book’s estimate from past papers, not official figures): fats (< 1), organic acids (> 1), anaerobic (∞), and likes the amphibolic convergence diagram. CUET prefers assertion–reason on “respiration is amphibolic”. The respiratory balance sheet (~38 ATP) and efficiency round off the chapter.',
      },
      {
        t: 'p',
        html: 'So far we have treated respiration as a one-way demolition: take glucose, knock it apart, collect the energy. That picture is true but incomplete, and this final topic fixes two loose ends: what else can be burned (the amphibolic idea) and how we measure what is being burned (the respiratory quotient).',
      },
      {
        t: 'p',
        html: 'Start with a kitchen analogy. A household kitchen is not only a place where food is broken down for eating; the same counter, knives and stove are also used to assemble dishes from raw ingredients. The respiratory pathway is exactly this kind of dual-purpose kitchen. It is mostly catabolic: it breaks molecules down to release energy, but the cell also reaches into the very same pathway to pull out intermediates and build new things: acetyl CoA is siphoned off to make fatty acids, while α-ketoglutarate and oxaloacetate are withdrawn to make amino acids. Because the pathway runs breakdown and build-up traffic on the same road, we call it <b>amphibolic</b> (amphi = both), neither purely catabolic nor purely anabolic.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> glucose is not the only fuel a plant cell can feed into respiration. When sugars run low, say, in a germinating castor seed packed with stored oil, the cell burns <b>fats</b> and even <b>proteins</b> instead. Fats are split into glycerol and fatty acids; glycerol slips into glycolysis, while fatty acids are chopped into acetyl CoA. Proteins are broken to amino acids that, after losing their nitrogen, enter as pyruvate, acetyl CoA, or Krebs-cycle intermediates. Most fuels funnel toward one great central junction, <b>acetyl CoA</b> (amino acids can also enter at Krebs-cycle intermediates), and from there into the Krebs cycle. The respiratory pathway is therefore a universal furnace that accepts carbohydrate, fat and protein alike.',
      },
      {
        t: 'p',
        html: 'That immediately raises a practical question for a plant physiologist: if a tissue could be burning sugar, or oil, or acid, how do we tell which? The trick is to measure the gases. Different fuels need different amounts of oxygen and release different amounts of carbon dioxide. The ratio of the two, CO<sub>2</sub> out over O<sub>2</sub> in, is the <b>respiratory quotient (RQ)</b>, and it acts like a chemical fingerprint of the fuel.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The famous “net 38 ATP per glucose” you will tally at the end of this topic is a textbook idealisation. It assumes glucose is the only substrate, that the stages run in a neat sequence with nothing siphoned off, and that the tissue is fully aerobic. The amphibolic reality contradicts the second assumption directly: intermediates are constantly withdrawn for biosynthesis, so a living cell rarely extracts the full theoretical yield. Treat 38 as a ceiling, not a guarantee.',
      },

      { t: 'part', title: 'Key definitions, pathways and net reactions' },
      {
        t: 'def',
        term: 'Amphibolic pathway',
        html: 'a metabolic pathway that serves both catabolism (degradation, energy release) and anabolism (synthesis of building blocks). The respiratory pathway is amphibolic because intermediates such as acetyl CoA, α-ketoglutarate and oxaloacetate are simultaneously broken down for energy and drawn off to build fats and amino acids.',
      },
      {
        t: 'table',
        title: 'Respiratory substrates other than glucose, and their entry points',
        head: ['Substrate', 'Broken down to', 'Enters respiration as / at'],
        rows: [
          ['Carbohydrate', 'glucose', 'glycolysis'],
          ['Fat', 'glycerol + fatty acids', 'glycerol → glycolysis; fatty acids → acetyl CoA (β-oxidation)'],
          ['Protein', 'amino acids', 'pyruvate, acetyl CoA, or Krebs intermediates (after deamination)'],
        ],
      },
      {
        t: 'def',
        term: 'Respiratory Quotient (RQ)',
        html: 'the ratio of the volume of CO<sub>2</sub> evolved to the volume of O<sub>2</sub> consumed in respiration over the same period.',
      },
      {
        t: 'p',
        html: '<br>RQ = <frac><num>volume of CO<sub>2</sub> evolved</num><den>volume of O<sub>2</sub> consumed</den></frac><br>',
      },
      {
        t: 'p',
        html: 'RQ is a pure ratio: <b>dimensionless</b>, with no unit (the only “dimensional” remark this topic needs).',
      },
      {
        t: 'table',
        title: 'RQ values by substrate: the must-memorise table',
        head: ['Substrate type', 'RQ', 'Why'],
        rows: [
          ['Carbohydrate (e.g. glucose)', '= 1', 'internal O of sugar balances <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac>'],
          ['Protein', '≈ 0.8–0.9 (< 1; NCERT quotes about 0.9)', 'moderately reduced'],
          ['Fat (e.g. tripalmitin)', '≈ 0.7 (< 1)', 'O-poor, highly reduced → needs extra O<sub>2</sub>'],
          ['Organic acids (e.g. malic, oxalic)', '> 1 (malic 1.33, oxalic 4)', 'O-rich → little O<sub>2</sub> needed'],
          ['Anaerobic respiration / fermentation', '∞', 'CO<sub>2</sub> released, <b>no O<sub>2</sub> consumed</b>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Glucose RQ (the clean case):</b><br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O, RQ = <frac><num>6</num><den>6</den></frac> = 1',
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>Reading an RQ: the logic, not the memory.</b>',
      },
      {
        t: 'proc',
        title: 'The RQ of a fuel is decided mainly by how much oxygen the molecule already holds compared with its carbon and hydrogen',
        steps: [
          '<b>Write or recall the balanced respiration equation</b> for the substrate.',
          '<b>Read off CO<sub>2</sub> produced and O<sub>2</sub> consumed</b> from the coefficients.',
          '<b>Divide CO<sub>2</sub> by O<sub>2</sub>.</b>',
        ],
      },
      {
        t: 'p',
        html: 'A carbohydrate like glucose already carries oxygen in roughly the proportion needed, so it consumes exactly as much O<sub>2</sub> as it releases CO<sub>2</sub> → RQ = 1. A <b>fat</b> is a long, oxygen-poor hydrocarbon chain; oxidising all that carbon and hydrogen demands a lot of extra O<sub>2</sub>, so O<sub>2</sub> consumed exceeds CO<sub>2</sub> released → RQ < 1 (about 0.7). An <b>organic acid</b> is the opposite: it is already partly oxidised and oxygen-rich, so it needs very little external O<sub>2</sub> → RQ > 1. And in <b>anaerobic respiration</b>, the cell releases CO<sub>2</sub> (e.g. in alcoholic fermentation) but uses no oxygen at all, so the denominator is zero and RQ becomes infinite. This is why a sealed flask of fermenting yeast is the classic “RQ = ∞” demonstration.',
      },
      {
        t: 'p',
        html: '<b>A caution about real tissues.</b> The neat single values above (exactly 1, 0.7, and so on) describe a tissue burning one pure fuel. Living tissues rarely oblige: they usually oxidise carbohydrates, fats and proteins simultaneously, so a measured RQ is an average that reflects whatever mixture is being respired at that moment. A germinating oilseed, for example, may show an RQ that drifts upward over days as it converts its stored fat into sugars and begins respiring those instead. So an RQ should be read as evidence of the dominant substrate, not proof of a single one, a subtlety NEET occasionally probes by giving an “in-between” value and asking what it implies.',
      },
      { t: 'fig', id: 'b11-12-fig-12.4' },
      {
        t: 'p',
        html: '<b>Why the pathway is amphibolic, step by step.</b> Normally the cycle runs catabolically. But:<br>• when a cell needs to build membranes, it <b>withdraws acetyl CoA</b> to synthesise fatty acids;<br>• when it needs to build proteins, it <b>withdraws α-ketoglutarate and oxaloacetate</b> to make amino acids by transamination.',
      },
      {
        t: 'p',
        html: 'Every withdrawal for synthesis must be balanced by replenishment, otherwise the cycle would run dry. Because the same intermediates are both consumed for energy and exported for construction, the respiratory pathway cannot be labelled purely catabolic: it is amphibolic.',
      },
      {
        t: 'p',
        html: 'This dual character is what gives a cell its metabolic flexibility. It can switch fuels when sugar is scarce (drawing on stored fat or, in extreme starvation, protein) and it can divert carbon skeletons out of respiration whenever growth or repair demands new fatty acids or amino acids. In this sense the respiratory pathway is not an isolated furnace but the central exchange of the cell’s chemistry, linking carbohydrate, fat and protein metabolism through a shared set of intermediates. That integration is the deeper reason it appears as the final, unifying topic of the chapter.',
      },
      {
        t: 'p',
        html: '<b>The respiratory balance sheet (capstone).</b> Under the idealised assumptions, tally the carriers per glucose, then convert at the ETS using NADH → 3 ATP and FADH<sub>2</sub> → 2 ATP (established in Topic 02):',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'ATP (direct)', 'NADH', 'FADH<sub>2</sub>'],
        rows: [
          ['Glycolysis', '2', '2', '–'],
          ['Link reaction', '–', '2', '–'],
          ['Krebs cycle', '2', '6', '2'],
          ['<b>Totals</b>', '<b>4</b>', '<b>10</b>', '<b>2</b>'],
        ],
      },
      {
        t: 'p',
        html: 'ETS conversion: 10 × 3 = 30 (from NADH) + 2 × 2 = 4 (from FADH<sub>2</sub>) = 34 ATP. Add the 4 direct → <b>net ≈ 38 ATP per glucose.</b> (If cytoplasmic glycolytic NADH is ferried in by a shuttle that yields only 2 ATP each, the total drops to ~36, which is why some books quote 36.) The energy actually trapped works out to roughly <b>40% efficiency</b>; the rest is lost as heat.',
      },
      {
        t: 'p',
        html: 'This figure rests on four explicit idealisations, and naming them is itself an exam point: (i) the pathway is assumed to run as a single, orderly sequence: glycolysis, then the link reaction and Krebs cycle, then the ETS, with each step neatly feeding the next; (ii) the NADH generated in the cytoplasm during glycolysis is assumed to be ferried intact into the mitochondrion and to undergo oxidative phosphorylation; (iii) no intermediate is assumed to be withdrawn at any stage to build some other molecule; and (iv) glucose is assumed to be the only substrate, with nothing else entering at intermediary points. Real cells violate the third and fourth assumptions constantly, which is precisely the amphibolic behaviour described above, so the true yield is always somewhat lower than 38.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'A germinating wheat grain respires using stored starch. Write the overall equation for glucose oxidation and calculate its respiratory quotient.',
        steps: [
          '<b>Reasoning.</b> Starch yields glucose, a carbohydrate. The balanced equation is:<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O<br>CO<sub>2</sub> evolved = 6; O<sub>2</sub> consumed = 6.',
          'RQ = 1 is the signature of a carbohydrate substrate.',
        ],
        ans: 'RQ = <frac><num>6</num><den>6</den></frac> = 1',
      },
      {
        t: 'ex',
        tag: 'CUET / NEET Speed Trap',
        q: 'A castor seed (rich in stored oil) is germinating in a sealed respirometer. Predict its RQ relative to 1, with reasoning, without any calculation.',
        steps: [
          '<b>Quick reasoning.</b> Oil = fat = oxygen-poor, highly reduced molecule. Oxidising it fully demands extra O<sub>2</sub> drawn in from outside, so O<sub>2</sub> consumed > CO<sub>2</sub> released. Therefore <b>RQ < 1</b> (about 0.7 for typical fats). <b>Trap to avoid:</b> assuming “a seed → RQ = 1.” That holds only for starchy seeds (wheat, rice). Oily seeds (castor, mustard, groundnut) give RQ < 1. The substrate, not the organ, decides RQ.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'The oxidation of the fat tripalmitin proceeds as:<br>2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> → 102 CO<sub>2</sub> + 98 H<sub>2</sub>O<br>Calculate its respiratory quotient.',
        steps: [
          '<b>Reasoning.</b> Read coefficients directly: CO<sub>2</sub> evolved = 102, O<sub>2</sub> consumed = 145.',
          'This confirms the rule of thumb that fats give an RQ of about 0.7, well below 1 because so much oxygen must be supplied to burn the long, reduced carbon chains.',
        ],
        ans: 'RQ = <frac><num>102</num><den>145</den></frac> = 0.703 ≈ 0.7',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): A succulent plant respiring stored organic acids can show an RQ greater than 1. Reason (R): Organic acids are oxygen-rich substrates, so their complete oxidation consumes less O<sub>2</sub> than the CO<sub>2</sub> it releases. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
        steps: [
          '<b>Analysis.</b> Succulents (CAM plants) accumulate large amounts of organic acids such as malic acid. A tissue that respires an organic acid substrate of this kind shows RQ > 1. Organic acids such as malic acid (RQ ≈ 1.33) and oxalic acid (RQ ≈ 4) are already partially oxidised (oxygen-rich), so very little external O<sub>2</sub> is needed while CO<sub>2</sub> continues to be released. The <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio therefore exceeds 1. <b>A is true.</b> R correctly explains why: the high internal oxygen of the substrate lowers the O<sub>2</sub> requirement, pushing RQ above 1. <b>R is true and is the correct explanation of A.</b>',
          '<b>Contrast for depth:</b> this is the mirror image of fat (RQ < 1), same logic, opposite direction, driven entirely by the oxygen content of the fuel.',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the respiratory quotient and state its value for a carbohydrate substrate.',
            a: 'RQ = <frac><num>volume of CO<sub>2</sub> evolved</num><den>volume of O<sub>2</sub> consumed</den></frac>; = 1 for carbohydrate.',
          },
          {
            q: '[CUET] Match substrate with RQ: (A) fat (B) carbohydrate (C) organic acid (D) anaerobic respiration, with (i) ∞, (ii) ≈ 0.7, (iii) = 1, (iv) > 1.',
            a: 'A–ii, B–iii, C–iv, D–i.',
          },
          {
            q: '[NEET] Explain why the respiratory quotient of a fermenting yeast culture sealed from air is reported as infinity.',
            a: 'Fermentation releases CO<sub>2</sub> but consumes no O<sub>2</sub>, so RQ = <frac><num>CO<sub>2</sub></num><den>0</den></frac> → infinity.',
          },
          {
            q: '[NEET] Name the key intermediate that acts as the main central convergence point for the oxidation of carbohydrates, fats and proteins, and state one anabolic role from which it is also withdrawn.',
            a: 'Acetyl CoA; withdrawn for fatty-acid (lipid) synthesis.',
          },
          {
            q: '[NEET High-Difficulty] A resting mammal shows RQ ≈ 0.85, but during a short bout of violent exercise its RQ rises above 1. Account for this rise.',
            a: 'During violent exercise the tissue shifts partly to anaerobic (lactic acid) respiration; the lactic acid made is buffered by bicarbonate, releasing extra CO<sub>2</sub> that is not matched by O<sub>2</sub> uptake (breathing also overshoots), so the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio climbs above 1.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The respiratory quotient of a substrate that is rich in oxygen relative to its carbon and hydrogen content will be:',
        opts: [
          { label: 'less than one', nudge: '<b>(a)</b> describes fats (oxygen-poor). <b>Trap:</b> students reflexively pick “less than one” for any non-carbohydrate, forgetting that O-rich acids go the other way.' },
          { label: 'equal to one', nudge: '<b>(b)</b> describes carbohydrates.' },
          { label: 'greater than one', nudge: null },
          { label: 'zero', nudge: '<b>(d)</b> would require no CO<sub>2</sub> to be given out at all; respiration always makes CO<sub>2</sub> (an apparent RQ near zero is quoted only for CAM succulents at night, because they re-fix that CO<sub>2</sub> into acids instead of releasing it).' },
        ],
        correct: 2,
        solution: 'Oxygen-rich substrates (organic acids) need little external O<sub>2</sub> while still releasing CO<sub>2</sub>, so <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> > 1.',
      },
      {
        t: 'mcq',
        q: 'RQ of a germinating fatty seed is:',
        opts: [
          { label: 'equal to 1', nudge: '<b>(a)</b> is the carbohydrate value (trap: “seed = RQ 1”).' },
          { label: 'less than 1', nudge: null },
          { label: 'greater than 1', nudge: '<b>(c)</b> belongs to organic acids.' },
          { label: 'infinity', nudge: '<b>(d)</b> belongs to anaerobic respiration.' },
        ],
        correct: 1,
        solution: 'Fatty seeds burn oil, which demands extra O<sub>2</sub> → RQ < 1. The fuel, not the fact that it is a seed, sets the value.',
      },
      {
        t: 'mcq',
        q: 'Respiration is described as an amphibolic pathway because it:',
        opts: [
          { label: 'occurs in both plants and animals', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> are all true statements about respiration but are irrelevant to the meaning of “amphibolic”: classic distractors that bait students who recognise the words without the definition.' },
          { label: 'involves both catabolism and anabolism', nudge: null },
          { label: 'consumes oxygen and releases carbon dioxide', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> are all true statements about respiration but are irrelevant to the meaning of “amphibolic”: classic distractors that bait students who recognise the words without the definition.' },
          { label: 'takes place in both cytoplasm and mitochondria', nudge: '<b>(a)</b>, <b>(c)</b> and <b>(d)</b> are all true statements about respiration but are irrelevant to the meaning of “amphibolic”: classic distractors that bait students who recognise the words without the definition.' },
        ],
        correct: 1,
        solution: 'Amphi = both: the pathway both breaks molecules down and supplies intermediates for synthesis.',
      },
      {
        t: 'mcq',
        q: 'Which compound is the key common intermediate in the respiratory breakdown of carbohydrates, fats and proteins?',
        opts: [
          { label: 'glucose-6-phosphate', nudge: '<b>(a)</b> and <b>(b)</b> are glycolysis-only intermediates, so fats bypass them.' },
          { label: 'phosphoenolpyruvate', nudge: '<b>(a)</b> and <b>(b)</b> are glycolysis-only intermediates, so fats bypass them.' },
          { label: 'acetyl CoA', nudge: null },
          { label: 'oxaloacetate', nudge: '<b>(d)</b> is a Krebs acceptor, not the universal entry point.' },
        ],
        correct: 2,
        solution: 'Fatty acids (β-oxidation), many amino acids and pyruvate from carbohydrates converge on acetyl CoA before entering the Krebs cycle. Acetyl CoA is the true crossroads.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“All seeds give RQ = 1.”</b> False. Starchy seeds → ~1; oily seeds (castor, mustard) → < 1; some succulents/organic-acid tissues → > 1. Always identify the substrate first.',
          '<b>Forgetting the anaerobic case.</b> Anaerobic respiration has RQ = ∞ (CO<sub>2</sub> but no O<sub>2</sub>), not 0. Zero would mean no CO<sub>2</sub> given out at all (an apparent RQ near zero is quoted only for CAM succulents at night, which re-fix their CO<sub>2</sub> into acids).',
          '<b>Mislabelling the pathway.</b> “Amphibolic” means catabolic and anabolic, not “occurs in both plants and animals.” This is a common trap.',
          '<b>Treating 38 ATP as exact.</b> It is an idealised ceiling; intermediate withdrawal (the amphibolic reality) and shuttle costs mean real yields are lower (~36 or less).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For any RQ question, don’t memorise values: reason from oxygen content in one glance: O-poor fuel (fat) → RQ < 1; balanced fuel (carbohydrate) → RQ = 1; O-rich fuel (organic acid) → RQ > 1; no O<sub>2</sub> used (anaerobic) → RQ = ∞. One principle replaces the whole table.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Amphibolic pathway:</b> respiration serves both catabolism and anabolism; intermediates (acetyl CoA, α-ketoglutarate, OAA) are withdrawn for synthesis of fats and amino acids.', note: '' },
          { f: '<b>Respiratory substrates:</b> not just glucose: fats (→ glycerol + fatty acids) and proteins (→ amino acids) feed in; most converge on <b>acetyl CoA</b>.', note: '' },
          { f: '<b>RQ</b> = <frac><num>CO<sub>2</sub> evolved</num><den>O<sub>2</sub> consumed</den></frac>, dimensionless.', note: '' },
          { f: '<b>RQ values:</b> carbohydrate = 1; protein ≈ 0.8–0.9 (< 1; NCERT quotes about 0.9); <b>fat</b> ≈ 0.7; organic acids > 1 (malic 1.33, oxalic 4); <b>anaerobic</b> = ∞.', note: '' },
          { f: '<b>Balance sheet (idealised):</b> glycolysis 2 + link/Krebs carriers → via ETS → <b>net ≈ 38 ATP/glucose</b> (~36 with shuttle); efficiency ≈ 40%.', note: '' },
        ],
        aids: [
          '<b>Memory aids:</b> • “Fat is Lean on oxygen → RQ Low (0.7); Acids are rich → RQ High (> 1).” • “No O<sub>2</sub>, infinite RQ”: anaerobic respiration divides by zero. • “Amphi = both ways”: breakdown and build-up on one pathway.',
        ],
      },
    ],
  },
];
