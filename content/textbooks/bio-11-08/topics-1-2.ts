import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 8 (Cell: The Unit of Life), Topics 01 and 02: pp. 471 to
 * 489 of the Class 11 Biology Master Reference, word for word. The chapter
 * title page and contents (p. 470) are not copied. Topic 01, Cell Theory & the
 * Cell Envelope (pp. 471–480), and Topic 02, The Endomembrane System & Cell
 * Organelles (pp. 481–489), are each cut at the book's Sections 1 to 8. Figures
 * 8.1 and 8.2 (captions pp. 473 and 476, drawn pp. 474 and 477) and 8.3 and 8.4
 * (captions pp. 483 and 485, drawn pp. 484 and 486) are redrawn in
 * lib/diagrams/biology-11-08.ts; these pages draw nothing else. Scientific
 * names are italic; emphasis italics are dropped; the book's em dashes are
 * written as colons, commas or brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 471–480 ─────────────────────────
  {
    n: '01',
    title: 'Cell Theory & the Cell Envelope',
    kalam:
      'Everything alive, from a Mycoplasma you cannot see to a blue whale, is either one cell or a committee of them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial scorer. CBSE Boards favour 1–2 mark definitions (cell theory, mesosome) and the occasional 3-mark “describe the cell envelope.” CUET leans on dates and discoverers (Hooke, Brown, Virchow, Schleiden, Schwann). NEET usually asks 1–2 questions (the book’s estimate from past papers, not official figures) on the three-layered envelope, glycocalyx forms, and the fluid-mosaic model, and loves assertion–reason items that pit prokaryotic against eukaryotic features.',
      },
      {
        t: 'p',
        html: 'Imagine you are handed a sprawling Indian railway network and told: find the single smallest unit that can still be called “the railway.” Not the whole network, not a zone: the smallest thing that still does everything a railway does: carry, sort, run, repair. In biology that smallest self-sufficient unit is the <b>cell</b>. Everything alive, from a <i>Mycoplasma</i> you cannot see to a blue whale, is either one cell or a committee of them. That single, deceptively simple claim is the heart of the <b>cell theory</b>.',
      },
      {
        t: 'p',
        html: 'The theory was not the flash of one genius but a relay race. In the 1660s <b>Robert Hooke</b>, peering at a sliver of cork, saw tiny empty boxes that reminded him of monastery rooms, cellulae, and gave us the word. He was actually looking at the leftover <b>cell walls</b> of dead cork cells. About a decade after that <b>Anton van Leeuwenhoek</b> became the first person to watch living cells swimming in pond water. <b>Robert Brown</b> then spotted a dense body inside plant cells: the <b>nucleus</b>. Two German scientists tied it together: <b>Matthias Schleiden</b> (1838) declared all plants are built of cells, and <b>Theodor Schwann</b> (1839; older NCERT reprints called him British, but he was German, and the current edition says so) extended this to animals, noting that animal cells, unlike plant cells, lack a rigid wall. Their joint <b>cell theory</b> stated that all living organisms are composed of cells and the products of cells, and that the cell is the structural and functional unit of life.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Schleiden and Schwann told you what everything is made of, but they were stuck on a nursery question: where do new cells come from? They half-suspected cells crystallised out of fluid. It took <b>Rudolf Virchow</b> (1855) to land the punchline: Omnis cellula e cellula, “every cell from a pre-existing cell.” Cells, like people, have parents. That one Latin sentence completed the modern cell theory.',
      },
      {
        t: 'p',
        html: 'Now zoom into a single bacterium. Unlike a plant or animal cell, it has no nucleus walled off from the rest, no membrane-bound organelles: it is a <b>prokaryote</b>, the “before-the-nucleus” design. What protects this open-plan cell? Not one boundary but a layered jacket called the <b>cell envelope</b>: think of a winter traveller wearing a loose shawl over a sturdy coat over an inner thermal. Outermost is the <b>glycocalyx</b>, then the <b>cell wall</b>, then the <b>plasma membrane</b>. Together they act as a single protective unit, give the cell its shape, and decide what enters and leaves.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean phrase “all life is cellular” has a famous asterisk: <b>viruses</b> are acellular and sit on the boundary of living and non-living, so the cell theory does not fully account for them. The three-layered envelope is a <i>bacterial</i> generalisation: <b><i>Mycoplasma</i></b>, the smallest known cells, have <b>no cell wall at all</b>, and the glycocalyx itself may be thin or absent. And the membrane’s celebrated fluidity assumes a warm, physiological temperature; chill the cell and the membrane can stiffen toward a gel.',
      },

      { t: 'part', title: 'Cell components and diagnostic features' },
      {
        t: 'table',
        title: 'The cell theory in one frame',
        head: ['Contributor', 'Year', 'Contribution'],
        rows: [
          ['Robert Hooke', '1665', 'Coined “cell”; saw dead cork cell walls'],
          ['Leeuwenhoek', '(1670s)', 'First to observe living cells'],
          ['Robert Brown', '1831', 'Discovered the nucleus'],
          ['M. Schleiden', '1838', 'All <b>plants</b> are made of cells'],
          ['T. Schwann', '1839', 'All <b>animals</b> are made of cells; proposed the cell theory jointly'],
          ['R. Virchow', '1855', 'Omnis cellula e cellula: cells arise from pre-existing cells'],
        ],
      },
      {
        t: 'p',
        html: 'Modern cell theory, distilled: <b>(i)</b> all living organisms are made of cells and products of cells; <b>(ii)</b> all cells arise from pre-existing cells.',
      },
      {
        t: 'table',
        title: 'Indicative cell sizes (handy for elimination questions)',
        head: ['Cell', 'Approx. size'],
        rows: [
          ['<i>Mycoplasma</i> (smallest)', '~0.3 μm'],
          ['Bacteria', '3–5 μm'],
          ['Typical eukaryotic cell', '10–20 μm'],
          ['Human RBC', '~7 μm'],
          ['Ostrich egg', 'largest <b>isolated single</b> cell'],
          ['Nerve cell', 'longest cell'],
        ],
      },
      { t: 'p', html: '<b>Key terms.</b>' },
      {
        t: 'def',
        term: 'Glycocalyx',
        html: 'outermost sugary coat of a bacterium; loose form = <b>slime layer</b>, thick/tough form = <b>capsule</b>.',
      },
      {
        t: 'def',
        term: 'Cell wall',
        html: 'rigid layer giving shape and preventing bursting; bacterial wall is <b>peptidoglycan (murein), not</b> cellulose.',
      },
      {
        t: 'def',
        term: 'Mesosome',
        html: 'infolding/extension of the plasma membrane into the cytoplasm.',
      },
      {
        t: 'def',
        term: 'Chromatophores',
        html: 'pigment-bearing membranous extensions in some cyanobacteria.',
      },
      {
        t: 'def',
        term: 'Plasma membrane',
        html: 'selectively permeable, asymmetric lipid–protein boundary described by the <b>fluid-mosaic model</b> (Singer & Nicolson, 1972).',
      },
      { t: 'fig', id: 'b11-08-fig-8.1' },

      { t: 'part', title: 'Comparative cell architecture and organelle function' },
      {
        t: 'table',
        title: 'Prokaryotic vs eukaryotic: the diagnostic split',
        head: ['Feature', 'Prokaryote', 'Eukaryote'],
        rows: [
          ['True nucleus (nuclear membrane)', 'Absent (nucleoid)', 'Present'],
          ['Membrane-bound organelles', 'Absent', 'Present'],
          ['Ribosomes', '70S (30S and 50S subunits)', '80S (cytoplasmic)'],
          ['Size', 'Smaller', 'Larger'],
          ['Rate of multiplication', 'Faster', 'Slower'],
          ['Genetic material', 'Single naked circular DNA + plasmids', 'Linear chromosomes in nucleus'],
        ],
      },
      {
        t: 'p',
        html: 'The single most reliable wrong-answer-killer: <b>the presence of a true (membrane-bound) nucleus and organelles</b> is what separates the two. Size and division rate are consequences, not the defining criterion.',
      },
      {
        t: 'p',
        html: '<b>Genetic material and plasmids.</b> Beyond the single circular chromosome lying naked in the <b>nucleoid</b>, many bacteria also carry small, independent loops of <b>extra-chromosomal DNA</b> called <b>plasmids</b>. Plasmids replicate on their own and often carry useful extras such as resistance traits, which is why this DNA varies between members of a population while the main genome stays constant for the species.',
      },
      {
        t: 'p',
        html: '<b>The cell envelope, layer by layer.</b> Most bacteria carry a chemically complex, tightly bound, three-layered envelope:<br>1. <b>Glycocalyx (outermost):</b> varies in composition and thickness between species. As a loose, easily-removed sheath it is a <b>slime layer</b>; as a thick, tough coat it is a <b>capsule</b> (aids protection and adhesion).<br>2. <b>Cell wall (middle):</b> determines shape and provides structural rigidity, preventing the cell from bursting or collapsing. Its chemistry and the way it responds to <b>Gram staining</b> is the basis for classifying bacteria as <b>Gram-positive</b> (retain the stain) or <b>Gram-negative</b> (do not retain it).<br>3. <b>Plasma membrane (innermost):</b> selectively permeable; it interacts with the outside world and governs transport.',
      },
      {
        t: 'p',
        html: '<b>Mesosome: why an infolding matters.</b> Because a prokaryote has no organelles, it solves the “I need more working membrane” problem by folding the plasma membrane inward into vesicles, tubules, or lamellae: the <b>mesosome</b>. This single structure helps in <b>cell-wall formation, DNA replication and the distribution of DNA to daughter cells, respiration, secretion, and cytokinesis</b>, while increasing the membrane’s surface area and enzyme content. Bacteria respire on the plasma membrane (and its infoldings, the mesosomes) without mitochondria. In some cyanobacteria, analogous pigment-bearing membranous extensions are the <b>chromatophores</b>.',
      },
      {
        t: 'p',
        html: '<b>Surface appendages.</b> <b>Flagella</b> drive bacterial motility by a rotary motion and are built of three parts: <b>filament, hook, and basal body</b> (the filament being the longest, outermost part). <b>Pili</b> and <b>fimbriae</b> are non-motile surface outgrowths: pili (tubular, proteinaceous) mediate <b>conjugation</b>, transferring the F (fertility) factor from F<sup>+</sup> to F<sup>−</sup> cells; fimbriae are short bristle-like fibres that help the cell <b>attach</b> to surfaces or host tissue.',
      },
      {
        t: 'p',
        html: '<b>Why the gram response matters.</b> Because the gram reaction is a property of the <b>whole envelope acting as one unit</b>, it is reproducible and species-stable, which is exactly why it became the first routine step in identifying an unknown bacterium: a single stain sorts the bacterial world into two large architectural camps before any other test is run.',
      },
      {
        t: 'p',
        html: '<b>Shapes and inclusion bodies.</b> Bacteria, the commonest prokaryotes, occur in four basic shapes: <b>bacillus</b> (rod), <b>coccus</b> (spherical), <b>vibrio</b> (comma-shaped) and <b>spirillum</b> (spiral). Inside the cell, reserve material is not packaged into organelles but lies <b>free in the cytoplasm as inclusion bodies, which are not bound by any membrane.</b> These include <b>phosphate granules, cyanophycean granules and glycogen granules</b> (food and energy stores), while <b>gas vacuoles</b>, in some blue-green, purple and green photosynthetic bacteria, provide buoyancy.',
      },
      {
        t: 'p',
        html: '<b>The eukaryotic cell wall, by contrast.</b> Where the bacterial wall is peptidoglycan, the <b>plant</b> cell wall is built mainly of <b>cellulose</b>, with hemicellulose, pectins and proteins; algal walls add galactans, mannans and mineral deposits such as calcium carbonate. Neighbouring plant cells are cemented together by the <b>middle lamella</b>, a layer rich in <b>calcium pectate</b>; its softening during ripening is exactly why fruit turns mushy. A young <b>primary wall</b> is capable of growth, which gradually diminishes as the cell matures, while a tougher <b>secondary wall</b> is laid down toward the lumen. The shared theme across bacteria, fungi and plants is identical: a non-living rigid jacket outside the membrane that fixes shape and resists bursting.',
      },
      {
        t: 'p',
        html: '<b>The plasma membrane and the fluid-mosaic model.</b> Picture a sea of lipids with proteins floating in it like icebergs. The lipids form a <b>bilayer</b> (polar heads out, hydrophobic tails in); <b>integral proteins</b> are buried to varying depths, <b>peripheral proteins</b> rest on the surface. The “fluid” part is real: the quasi-fluid lipids let proteins drift <b>laterally</b>, and this <b>fluidity</b> underpins membrane growth, junction formation, secretion, endocytosis and cell division. A common trap: lipids can occasionally <b>flip-flop</b> across the bilayer, but proteins essentially do <b>not</b> flip-flop.',
      },
      {
        t: 'p',
        html: '<b>Transport across the membrane.</b> The membrane is selectively permeable, so what crosses, and how, depends on the molecule:<br>• <b>Simple diffusion</b>: small non-polar (lipid-soluble) molecules slip straight through the bilayer, <b>down</b> the concentration gradient, no energy spent.<br>• <b>Facilitated transport</b>: polar molecules cannot cross the lipid core unaided and need <b>carrier/transport proteins</b>, still moving down the gradient (passive, no ATP).<br>• <b>Active transport</b>: movement <b>against</b> the gradient, requiring carrier proteins and <b>energy (ATP)</b>.',
      },
      { t: 'fig', id: 'b11-08-fig-8.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Short answer.</b> “Why is the bacterial cell envelope described as a single protective unit even though it has three layers?”',
        steps: [
          '<b>Reasoning.</b> Name the layers from outside in: glycocalyx, cell wall, plasma membrane. The key examiner-word is tightly bound: the three layers are chemically and physically adherent, so they cannot be peeled apart functionally and act together to protect the cell, maintain its shape, and regulate exchange. A clean 3-mark answer states the three layers, the order, and the phrase “act as a single protective unit.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Diagram identification.</b> A bacterial flagellum is shown with three regions labelled X (embedded in the envelope), Y (a short bent region), and Z (the long projecting thread). Identify X, Y, Z.',
        steps: [
          '<b>Reasoning.</b> Work from the membrane outward. The part anchored in the envelope is the <b>basal body (X)</b>; the short bend just outside is the <b>hook (Y)</b>; the long projecting thread is the <b>filament (Z)</b>. Mnemonic order, base to tip: <b>B–H–F</b> (Basal body → Hook → Filament).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with full distractor analysis.</b> Which statement about the prokaryotic cell envelope is correct? (a) The plasma membrane is the outermost layer (b) The capsule is a loose form of glycocalyx (c) The cell wall lies between the glycocalyx and the plasma membrane (d) Gram staining classifies bacteria on the basis of plasma-membrane structure',
        steps: [
          'Outside-in the order is glycocalyx → cell wall → plasma membrane, so the wall is sandwiched between the other two. (a) is the reverse error: the plasma membrane is <b>innermost</b>, not outermost; chosen by students who memorise the list without its direction. (b) swaps the two glycocalyx forms: the <b>loose</b> form is the slime layer; the <b>capsule</b> is the thick, tough form. (d) misattributes the gram-staining basis to the membrane; it is the <b>cell wall</b> that determines gram response.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET assertion–reason',
        q: '<b>High-difficulty.</b> <b>Assertion (A):</b> A <i>Mycoplasma</i> cell does not lyse (burst) even in a very dilute solution. <b>Reason (R):</b> <i>Mycoplasma</i> is the smallest known cell. Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> R is true: <i>Mycoplasma</i> (~0.3 μm) is indeed the smallest cell. But examine A: lysis-resistance comes from a rigid <b>cell wall</b>, and <i>Mycoplasma</i> famously <b>lacks a cell wall</b>, so it is in fact osmotically fragile and does tend to burst in hypotonic media.',
          'The trap is letting a true, familiar Reason pull you into accepting a false Assertion.',
        ],
        ans: 'A is false, R is true → option (d).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the modern cell theory in two points and name the scientist who added the second point.',
            a: '(i) organisms are made of cells/products of cells, (ii) cells arise from pre-existing cells: Virchow.',
          },
          {
            q: '[CUET] Arrange chronologically: discovery of the nucleus, coining of the term “cell,” statement of Omnis cellula e cellula.',
            a: 'Term “cell” (Hooke, 1665) → nucleus (Brown, 1831) → Omnis cellula e cellula (Virchow, 1855).',
          },
          {
            q: '[NEET] List any four functions of the mesosome.',
            a: 'Cell-wall formation; DNA replication & distribution to daughter cells; respiration/secretion; increasing membrane surface area & enzyme content (also cytokinesis).',
          },
          {
            q: '[NEET] Distinguish pili from flagella with respect to function and motility.',
            a: 'Pili: non-motile, function in conjugation/attachment; flagella: motile, drive locomotion by rotary motion.',
          },
          {
            q: '[NEET assertion–reason] <b>A:</b> Polar molecules cannot diffuse freely across the plasma membrane. <b>R:</b> The interior of the lipid bilayer is hydrophobic. Choose the correct option. (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The cell theory could <b>not</b> explain:',
        opts: [
          {
            label: 'that plants are made of cells',
            nudge: '(a), (b), (d) were all covered by the original theory: picking them means confusing what the theory said with what it omitted.',
          },
          {
            label: 'that animals are made of cells',
            nudge: '(a), (b), (d) were all covered by the original theory: picking them means confusing what the theory said with what it omitted.',
          },
          { label: 'how new cells arise', nudge: null },
          {
            label: 'that cells are the unit of life',
            nudge: '(a), (b), (d) were all covered by the original theory: picking them means confusing what the theory said with what it omitted.',
          },
        ],
        correct: 2,
        solution: 'Schleiden–Schwann described composition but not origin; Virchow later supplied “from pre-existing cells.”',
      },
      {
        t: 'mcq',
        q: 'External to the cell wall in a bacterium lies the:',
        opts: [
          { label: 'plasma membrane', nudge: '(a) is innermost (direction error).' },
          { label: 'glycocalyx', nudge: null },
          { label: 'mesosome', nudge: '(c) is an infolding of the membrane, internal.' },
          { label: 'nucleoid', nudge: '(d) is the genetic region, internal.' },
        ],
        correct: 1,
        solution: 'Glycocalyx is outermost. All trap students who ignore the inside-out order.',
      },
      {
        t: 'mcq',
        q: 'Which is the most reliable single criterion separating prokaryotes from eukaryotes?',
        opts: [
          { label: 'cell size', nudge: '(a) and (b) are mere consequences and overlap across the groups.' },
          { label: 'rate of division', nudge: '(a) and (b) are mere consequences and overlap across the groups.' },
          { label: 'presence of a membrane-bound nucleus', nudge: null },
          {
            label: 'presence of ribosomes',
            nudge: '(d) is wrong because <b>both</b> have ribosomes (70S vs 80S), a classic “both have it, so it can’t be the differentiator” trap.',
          },
        ],
        correct: 2,
        solution: 'A membrane-bound nucleus (with membrane-bound organelles) is the one reliable difference; size and division rate overlap, and both groups have ribosomes.',
      },
      {
        t: 'mcq',
        q: 'Regarding the fluid-mosaic model, which statement is <b>incorrect</b>?',
        opts: [
          { label: 'proteins move laterally within the bilayer', nudge: 'Lateral movement (a) is the defining feature.' },
          { label: 'lipids can occasionally flip-flop', nudge: 'Lipid flip-flop (b) occurs rarely.' },
          { label: 'proteins routinely flip-flop across the bilayer', nudge: null },
          { label: 'the membrane is asymmetric', nudge: 'Asymmetry (d) is real.' },
        ],
        correct: 2,
        solution: 'Protein flip-flop (c) essentially does <b>not</b> happen: students conflate the allowed lipid flip-flop with proteins.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the envelope order.</b> “Plasma membrane outside” is a common slip. Anchor it: the membrane is always the innermost, living boundary; the wall and glycocalyx are added outside it.',
          '<b>Slime layer ⇄ capsule swap.</b> Loose = slime; thick/tough = capsule. Mnemonic: <b>C</b>apsule is <b>C</b>ompact.',
          '<b>“Bacterial wall = cellulose.”</b> No: that is the <b>plant</b> wall. Bacterial wall is peptidoglycan; the cellulose option is a deliberate distractor.',
          '<b>Assertion–reason traps.</b> A true Reason does <b>not</b> guarantee a true Assertion: test each clause independently (see the <i>Mycoplasma</i> example).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For envelope questions, sketch a three-ring target the moment you read the stem: outer ring glycocalyx, middle wall, bull’s-eye plasma membrane. Many NEET envelope MCQs are just asking “which ring?” and the sketch answers it before you finish reading the options.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Cell theory</b>',
            note: 'Schleiden (1838, plants) + Schwann (1839, animals) → all life = cells & products of cells; <b>Virchow (1855):</b> Omnis cellula e cellula (cells from pre-existing cells). Exception: viruses.',
          },
          { f: '<b>Discoverers</b>', note: 'Hooke (term “cell”), Leeuwenhoek (first living cell), Brown (nucleus).' },
          {
            f: '<b>Sizes</b>',
            note: '<i>Mycoplasma</i> ~0.3 μm (smallest, <b>no wall</b>) · bacteria 3–5 μm · eukaryote 10–20 μm · ostrich egg = largest single cell · nerve cell = longest cell.',
          },
          {
            f: '<b>Envelope (out → in)</b>',
            note: '<b>glycocalyx</b> (slime = loose / capsule = thick) → <b>cell wall</b> (peptidoglycan; gram +/− basis) → <b>plasma membrane</b>. Tightly bound = single protective unit.',
          },
          {
            f: '<b>Mesosome</b>',
            note: 'plasma-membrane infolding → wall formation, DNA replication/distribution, respiration, secretion, ↑ surface area; bacteria respire on the plasma membrane (and its infoldings) without mitochondria. <b>Chromatophores:</b> pigmented membranes in cyanobacteria.',
          },
          {
            f: '<b>Shapes/inclusions</b>',
            note: 'bacteria = bacillus/coccus/vibrio/spirillum; inclusion bodies (phosphate, cyanophycean, glycogen granules; gas vacuoles) lie free, <b>no membrane</b>.',
          },
          {
            f: '<b>Membrane</b>',
            note: 'fluid-mosaic (lipid bilayer + integral/peripheral proteins); <b>lateral</b> movement yes, protein <b>flip-flop</b> no; non-polar → simple diffusion, polar → carrier (facilitated), against gradient → active (ATP).',
          },
          {
            f: '<b>Pro vs Eu in one word</b>',
            note: 'a <b>membrane-bound nucleus</b> (and organelles) is the most reliable criterion; size and division rate are consequences and overlap. (Mature RBCs and sieve-tube cells lose the nucleus but remain eukaryotic.)',
          },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 481–489 ─────────────────────────
  {
    n: '02',
    title: 'The Endomembrane System & Cell Organelles',
    kalam: 'A living cell is less like a single room and more like a busy Indian dabbawala network.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the highest-yield topics in the chapter. CBSE Boards ask 1–3 mark items on organelle functions and the “power house”/“suicidal bag” labels. CUET favours straight matching (organelle → function) and the membrane-count classification. NEET reliably places 1–2 questions (the book’s estimate from past papers, not official figures) on the endomembrane system’s membership, mitochondrial and plastid structure, and ribosome types, and is fond of assertion–reason traps separating structure from function.',
      },
      {
        t: 'p',
        html: 'A living cell is less like a single room and more like a busy Indian dabbawala network. Tiffins are made in one place, labelled and sorted at a hub, routed precisely across the city, and the spoiled ones are sent for disposal, all without chaos. A eukaryotic cell runs an equally choreographed logistics system, and a specific club of membrane-bound compartments handles it. We call that club the <b>endomembrane system</b>.',
      },
      {
        t: 'p',
        html: 'Why a “club” and not simply “all the organelles”? Because membership has a strict rule: only the organelles whose functions are <b>coordinated</b> as one continuous workflow count. Those are the <b>endoplasmic reticulum (ER)</b>, the <b>Golgi apparatus</b>, <b>lysosomes</b>, and <b>vacuoles</b>. The ER manufactures, the Golgi sorts and ships, lysosomes recycle, vacuoles store: one assembly line. Strikingly, the <b>mitochondria, chloroplasts, and peroxisomes are deliberately left out</b>, even though they are membrane-bound, because their jobs are not stitched into that same line. This exclusion is examined often. Compartmentalising jobs behind separate membranes is the eukaryotic cell’s central trick: it lets incompatible chemistries (synthesis in one place, digestion in another) run side by side without interfering.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the ER as a sprawling factory floor whose walls are folded sheets of membrane continuous with the nuclear envelope. Where the floor is studded with ribosomes it looks rough under the microscope: the <b>rough ER</b>, churning out proteins. Where it is bare it looks smooth: the <b>smooth ER</b>, making lipids. Finished goods are pinched off in vesicles, float to the <b>Golgi</b> (the dispatch hub), get final modifications and address labels, and are shipped out: to the membrane, out of the cell, or into a lysosome for demolition. The dabbawala system, drawn in membrane.',
      },
      {
        t: 'p',
        html: 'Then there are the cell’s two power utilities, which sit outside the endomembrane club but are organelles in their own right. <b>Mitochondria</b> burn fuel to make ATP: the “power house.” <b>Plastids</b> (in plants) capture or store: chloroplasts photosynthesise, others stockpile starch, oils, or pigments. Both carry their own DNA and 70S ribosomes and divide on their own, so we call them <b>semi-autonomous</b>: tenants who came with their own generators. Several of these organelles, the ER and ribosomes among them, were invisible to the light microscope and came to light only after the electron microscope arrived, which is why their fine structure is described in the detail it is.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The “coordinated functions” rule is the entire basis for endomembrane membership: apply it strictly and you will never mis-sort mitochondria or peroxisomes into the system. The semi-autonomous label is partial, not total: these organelles still depend on the nucleus for most of their proteins, so they are semi-autonomous, never fully independent. And plastids are a plant/euglenoid feature: you will not find them in animal cells.',
      },

      { t: 'part', title: 'Cell components and diagnostic features' },
      {
        t: 'table',
        title: 'Membership of the endomembrane system',
        head: ['In the system (coordinated)', 'Excluded (membrane-bound but not coordinated)'],
        rows: [
          ['Endoplasmic reticulum (RER, SER)', 'Mitochondria'],
          ['Golgi apparatus', 'Chloroplasts / plastids'],
          ['Lysosomes', 'Peroxisomes (microbodies)'],
          ['Vacuoles', '–'],
        ],
      },
      {
        t: 'table',
        title: 'Membrane-count classification (a frequently tested fact)',
        head: ['Membrane covering', 'Organelles'],
        rows: [
          ['<b>No membrane</b>', 'Ribosomes, centrioles'],
          ['<b>Single membrane</b>', 'ER, Golgi, lysosomes, vacuoles, microbodies'],
          ['<b>Double membrane</b>', 'Mitochondria, chloroplasts (and the nucleus)'],
        ],
      },
      {
        t: 'table',
        title: 'Organelle → function at a glance',
        head: ['Organelle', 'Core function'],
        rows: [
          ['Rough ER', 'Protein synthesis & secretion'],
          ['Smooth ER', 'Lipid (and steroid) synthesis; detoxification in liver cells'],
          ['Golgi apparatus', 'Modification, packaging, secretion; forms glycoproteins & glycolipids'],
          ['Lysosome', 'Intracellular digestion (hydrolytic enzymes)'],
          ['Vacuole', 'Storage; osmoregulation (contractile); buoyancy (gas)'],
          ['Mitochondrion', 'Aerobic respiration → ATP (“power house”)'],
          ['Chloroplast', 'Photosynthesis'],
          ['Ribosome', 'Protein synthesis'],
        ],
      },
      {
        t: 'p',
        html: '<b>Ribosome types:</b> <b>70S</b> in prokaryotes and inside mitochondria/chloroplasts; <b>80S</b> in the eukaryotic cytoplasm. (A 70S ribosome has a 50S and a 30S subunit; an 80S ribosome has a 60S and a 40S subunit. S values are sedimentation rates and do not add up.) A polysome is several ribosomes reading one mRNA together.',
      },
      { t: 'fig', id: 'b11-08-fig-8.3' },

      { t: 'part', title: 'Comparative cell architecture and organelle function' },
      {
        t: 'p',
        html: '<b>The endomembrane assembly line.</b> The <b>ER</b> is a network of membranous tubules and sheets, continuous with the nuclear membrane, that partitions the cytoplasm into luminal and cytosolic zones. Beyond manufacturing, the ER provides a vast surface for biochemical reactions, a framework of mechanical support for the cytosol, and channels for intracellular transport. <b>Rough ER (RER)</b> bears ribosomes on its outer face and is heavily developed in cells making proteins for export (e.g. secretory glands); <b>smooth ER (SER)</b> lacks ribosomes and is the chief site of <b>lipid</b> synthesis. Vesicles bud from the ER and carry their cargo to the <b>Golgi apparatus</b>: stacked, flattened, membrane-bound cisternae. The Golgi has a polarity: a forming (<b>cis</b>) face nearer the ER and a maturing (<b>trans</b>) face away from it. Here proteins and lipids are chemically modified, notably the <b>formation of glycoproteins and glycolipids</b>, then sorted and dispatched in secretory vesicles. In a dividing plant cell, the Golgi also supplies vesicles that build the <b>cell plate</b>, the partition from which the new wall and middle lamella between daughter cells form. Some Golgi vesicles instead become <b>lysosomes</b>: single-membrane sacs packed with <b>hydrolytic enzymes (hydrolases)</b> that work best at an acidic pH. They digest in two modes (breaking down material the cell has taken in from outside, and clearing the cell’s own spent organelles), and when a cell dies their rupture can dissolve it from within, which is exactly what the nickname “suicidal bags” captures. That ER → Golgi → lysosome/secretion chain is precisely why these four organelles are grouped as one coordinated system.',
      },
      {
        t: 'p',
        html: '<b>Vacuoles.</b> A vacuole is a membrane-bound space; in plant cells its single membrane has a special name, the <b>tonoplast</b>, and the central vacuole can occupy the bulk of the cell volume, maintaining turgor. Vacuoles store water, cell sap, and excretory or non-useful materials; in a mature plant cell the sap vacuole keeps a higher solute concentration than the surrounding cytoplasm, drawing water in and holding the cell turgid. Specialised versions diversify the job: the <b>contractile vacuole</b> of <i>Amoeba</i> and other protists handles <b>osmoregulation and excretion</b> by rhythmically filling and contracting to expel excess water; <b>gas vacuoles</b> give buoyancy to some aquatic prokaryotes; <b>food vacuoles</b> carry out digestion.',
      },
      {
        t: 'p',
        html: '<b>Mitochondria: the power house.</b> Each mitochondrion is bound by <b>two membranes</b> that are structurally and functionally distinct. The <b>outer membrane</b> is smooth and permeable; the <b>inner membrane</b> is thrown into folds called <b>cristae</b> that greatly increase its surface area for ATP-generating machinery. The two membranes divide the organelle into two aqueous compartments: the intermembrane space (outer compartment) and the central <b>matrix</b> (inner compartment). The matrix holds a <b>single circular DNA molecule, a few RNAs, and 70S ribosomes</b>, plus respiratory enzymes, so the organelle is <b>semi-autonomous</b> and divides by <b>fission</b>. Functionally it is the site of aerobic respiration, converting the energy of organic fuels into ATP. The number of mitochondria a cell keeps is not fixed: metabolically busy cells such as muscle pack in far more than quiet ones, and their shape ranges from near-spherical to elongated rods, each roughly 0.2–1.0 μm across (average about 0.5 μm).',
      },
      {
        t: 'p',
        html: '<b>Plastids: capture and storage.</b> Plastids occur in plant cells and euglenoids. <b>Chloroplasts</b> carry out photosynthesis: a double membrane encloses the <b>stroma</b> (a matrix with enzymes, starch granules, circular DNA and 70S ribosomes), within which membranous sacs called <b>thylakoids</b> stack into <b>grana</b>, connected by <b>stromal lamellae</b>. <b>Chromoplasts</b> hold carotenoid pigments (the yellows, oranges and reds of fruits and flowers). <b>Leucoplasts</b> are colourless storage plastids: <b>amyloplasts</b> store <b>starch</b> (not protein: a classic trap), <b>elaioplasts</b> store oils/fats, and <b>aleuroplasts/proteinoplasts</b> store proteins. Chloroplasts are typically lens- or disc-shaped and vary in number with the cell type. Like mitochondria, chloroplasts are semi-autonomous. (Note too that in plant cells the Golgi often exists as many dispersed units, each called a <b>dictyosome</b>.)',
      },
      {
        t: 'p',
        html: '<b>Ribosomes and microbodies.</b> <b>Ribosomes</b>, like centrioles, have <b>no membrane</b>: granular particles of rRNA and protein, found free in the cytosol or bound to the RER, and the universal site of protein synthesis (70S in prokaryotes and organelles, 80S in the eukaryotic cytoplasm). The free and bound populations divide the labour: free ribosomes tend to make proteins that stay in the cytosol, while ribosomes bound to the RER make proteins destined for secretion or for insertion into membranes: the same logic the rough-versus-smooth ER reflects. Ribosomes occur in prokaryotes and eukaryotes alike (70S and 80S), and they need no membrane to function. <b>Microbodies</b> (peroxisomes, glyoxysomes) are tiny single-membrane vesicles of enzymes present in both plant and animal cells; they run oxygen-consuming reactions that break down fatty acids and detoxify by-products, and in germinating fatty seeds glyoxysomes help mobilise stored fat. Like mitochondria and plastids, microbodies are membrane-bound yet <b>not</b> part of the endomembrane system.',
      },
      {
        t: 'p',
        html: '<b>Bridging the cells.</b> None of this machinery works in isolation between neighbouring cells. In plant tissue, fine cytoplasmic channels called <b>plasmodesmata</b> pierce the walls of adjacent cells, threading their cytoplasm, and even strands of ER, into a connected continuum, so that signalling molecules and nutrients can pass directly from cell to cell without crossing the external medium. It is the multicellular counterpart to the within-cell coordination that defines the endomembrane system.',
      },
      { t: 'fig', id: 'b11-08-fig-8.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Short answer.</b> “Name the four components of the endomembrane system and state why mitochondria are excluded.”',
        steps: [
          '<b>Reasoning.</b> The four are <b>ER, Golgi apparatus, lysosomes, and vacuoles</b>. The examiner wants the exclusion principle, not just the list: membership requires that the organelles’ functions be <b>coordinated</b> as one continuous workflow. Mitochondria (like chloroplasts and peroxisomes) are membrane-bound but their functions are <b>not coordinated</b> with that ER→Golgi→lysosome line, so they are left out. Stating the coordination criterion is the marking point.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET level',
        q: '<b>Match the column.</b> Match the organelle (A–D) with its defining feature (i–iv): A. Ribosome · B. Lysosome · C. Mitochondrion · D. Tonoplast (i) Single membrane of a vacuole · (ii) No membrane · (iii) Double membrane with cristae · (iv) Hydrolytic enzymes',
        steps: [
          '<b>Reasoning.</b> A–(ii): ribosomes are non-membranous. B–(iv): lysosomes carry hydrolases. C–(iii): mitochondria are double-membraned with cristae. D–(i): the tonoplast is the vacuolar membrane. The decoy is pairing the lysosome with “single membrane” (true, but (i) specifically names the vacuolar membrane), so the sharper match for B is its enzymes.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>MCQ with full distractor analysis.</b> Which statement about ribosomes is correct? (a) They are bound by a single membrane (b) Cytoplasmic ribosomes of a eukaryote are 70S (c) Mitochondrial ribosomes are 70S (d) They are the site of lipid synthesis',
        steps: [
          'Mitochondria (and chloroplasts) house 70S ribosomes, like prokaryotes. (a) is wrong: ribosomes are <b>non-membranous</b>; chosen by students who assume every organelle has a membrane. (b) reverses the sizes: eukaryotic cytoplasmic ribosomes are <b>80S</b>; 70S is the prokaryotic/organellar value. This exact reversal is a classic trap. (d) confuses the ribosome (protein synthesis) with the <b>smooth ER</b> (lipid synthesis).',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'NEET assertion–reason',
        q: '<b>High-difficulty.</b> <b>Assertion (A):</b> Mitochondria and chloroplasts are described as semi-autonomous organelles. <b>Reason (R):</b> They possess their own circular DNA and 70S ribosomes and can divide by fission. Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
        steps: [
          '<b>Reasoning.</b> A is true: both are semi-autonomous. R is true: both carry circular DNA and 70S ribosomes and divide by fission. Does R explain A? Yes: it is precisely this self-replicating genetic machinery that lets them make some of their own proteins and divide independently, which is the basis of the “semi-autonomous” description.',
          'The subtle point examiners probe is the word semi: the organelles still rely on the nucleus for most proteins, so R justifies “semi-,” not full, autonomy.',
        ],
        ans: 'Option (a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Differentiate between rough and smooth endoplasmic reticulum on the basis of structure and function.',
            a: 'RER bears ribosomes → protein synthesis/secretion; SER lacks ribosomes → lipid synthesis.',
          },
          {
            q: '[CUET] Arrange the path of a secretory protein through the cell, starting at its site of synthesis.',
            a: 'RER (synthesis) → vesicle → Golgi (modification/packaging) → secretory vesicle → plasma membrane → out.',
          },
          {
            q: '[NEET] Why are mitochondria and chloroplasts called semi-autonomous organelles? Give two reasons.',
            a: 'They have their own circular DNA + 70S ribosomes; they divide by fission (and make some of their own proteins).',
          },
          {
            q: '[NEET] Classify the following by membrane number: ribosome, lysosome, chloroplast, Golgi apparatus.',
            a: 'No membrane: ribosome; single: lysosome, Golgi; double: chloroplast.',
          },
          {
            q: '[NEET assertion–reason] <b>A:</b> Lysosomes are called suicidal bags of the cell. <b>R:</b> They contain hydrolytic enzymes that can digest the cell’s own worn-out components, and the cell itself if they are released. Choose the correct option. (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a): both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which organelle is <b>not</b> part of the endomembrane system?',
        opts: [
          {
            label: 'Golgi apparatus',
            nudge: '(a), (b), (d) are all core members: picked by students who think “membrane-bound = endomembrane,” the very assumption the question tests.',
          },
          {
            label: 'Lysosome',
            nudge: '(a), (b), (d) are all core members: picked by students who think “membrane-bound = endomembrane,” the very assumption the question tests.',
          },
          { label: 'Peroxisome', nudge: null },
          {
            label: 'Vacuole',
            nudge: '(a), (b), (d) are all core members: picked by students who think “membrane-bound = endomembrane,” the very assumption the question tests.',
          },
        ],
        correct: 2,
        solution: 'Peroxisomes are membrane-bound microbodies whose functions are not coordinated with the ER–Golgi line.',
      },
      {
        t: 'mcq',
        q: 'The major site of lipid synthesis in the cell is the:',
        opts: [
          { label: 'rough ER', nudge: '(a) does protein synthesis. The RER-vs-SER swap (a) is the standard error.' },
          { label: 'smooth ER', nudge: null },
          { label: 'Golgi apparatus', nudge: '(c) modifies/packages and forms glyco-conjugates.' },
          { label: 'lysosome', nudge: '(d) digests.' },
        ],
        correct: 1,
        solution: 'SER, lacking ribosomes, specialises in lipids.',
      },
      {
        t: 'mcq',
        q: 'Cristae are found in the:',
        opts: [
          { label: 'inner membrane of mitochondria', nudge: null },
          { label: 'outer membrane of mitochondria', nudge: '(b) is the smooth outer membrane.' },
          {
            label: 'thylakoid of chloroplast',
            nudge: '(c) belongs to the chloroplast (grana/thylakoids: a structure-mixing trap).',
          },
          { label: 'Golgi cisternae', nudge: '(d) is unrelated.' },
        ],
        correct: 0,
        solution: 'Cristae are infoldings of the <b>inner</b> mitochondrial membrane.',
      },
      {
        t: 'mcq',
        q: 'Which leucoplast is correctly matched with what it stores?',
        opts: [
          {
            label: 'Amyloplast – protein',
            nudge: '(a) amyloplasts store <b>starch</b>, not protein: the headline trap.',
          },
          { label: 'Elaioplast – starch', nudge: '(b) elaioplasts store <b>oils</b>, not starch.' },
          { label: 'Aleuroplast – protein', nudge: null },
          {
            label: 'Chromoplast – oil',
            nudge: '(d) chromoplasts hold <b>pigments</b>, and are not even leucoplasts.',
          },
        ],
        correct: 2,
        solution: 'Aleuroplasts (proteinoplasts) store protein.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating “membrane-bound” as “endomembrane.”</b> The two are not the same. Mitochondria, chloroplasts and peroxisomes are membrane-bound yet excluded: the test is coordinated function, not the mere presence of a membrane.',
          '<b>Reversing ribosome sizes.</b> Lock it: small cells and the organelles inside big cells share the smaller <b>70S</b>; the eukaryotic cytoplasm runs the bigger <b>80S</b>.',
          '<b>Amyloplast = protein.</b> No: <b>amyloplast = starch</b> (think amylum = starch). Protein goes to the aleuroplast.',
          '<b>Cristae vs grana mix-up.</b> Cristae = mitochondrion (inner-membrane folds); grana = chloroplast (thylakoid stacks). Don’t cross-wire the two power organelles.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “which is not in the endomembrane system” question, run the 3-name exclusion list in your head first: <b>Mito, Chloroplast, Peroxisome</b> (“MCP are out”), and pick whichever appears. It converts a reasoning question into instant recall.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Endomembrane system (coordinated)</b>',
            note: 'ER + Golgi + lysosomes + vacuoles. <b>Out:</b> mitochondria, chloroplasts, peroxisomes (“MCP are out”).',
          },
          { f: '<b>ER</b>', note: 'RER (ribosomes → protein synthesis/secretion) · SER (no ribosomes → lipid synthesis).' },
          {
            f: '<b>Golgi</b>',
            note: 'modify, package, secrete; makes glycoproteins/glycolipids; cis-face in, trans-face out.',
          },
          {
            f: '<b>Lysosome</b>',
            note: 'single membrane, hydrolases, acidic, “suicidal bag.” <b>Vacuole:</b> tonoplast membrane; storage; contractile = osmoregulation; gas = buoyancy.',
          },
          {
            f: '<b>Mitochondrion</b>',
            note: 'double membrane, inner folded into <b>cristae</b>, matrix with circular DNA + <b>70S</b> ribosomes; semi-autonomous; “power house.”',
          },
          {
            f: '<b>Plastids</b>',
            note: 'chloroplast (grana/thylakoid/stroma, photosynthesis) · chromoplast (pigments) · leucoplast (amyloplast-starch, elaioplast-oil, aleuroplast-protein); semi-autonomous.',
          },
          {
            f: '<b>Ribosomes</b>',
            note: 'no membrane; <b>70S</b> in prokaryotes + mito/chloroplast, <b>80S</b> in eukaryotic cytoplasm.',
          },
          {
            f: '<b>Membrane count</b>',
            note: 'none: ribosome, centriole · single: ER/Golgi/lysosome/vacuole/microbody · double: mitochondrion/chloroplast/nucleus.',
          },
        ],
        aids: [],
      },
    ],
  },
];
