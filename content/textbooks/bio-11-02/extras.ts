import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 2, Biological Classification: Additional topics A to G and H, word for
 * word from the Class 11 Biology Master Reference, pp. 115 to 141.
 *
 * p. 115 opens the shared introduction to "Biological Classification: Additional Topics";
 * it heads Additional topic A's Introduction (the heading itself is not copied). A The
 * Three-Domain System pp. 115 to 117; B Kingdom Monera: Internal Classification Beyond
 * "Prokaryotic" pp. 118 to 120 (its answers end at the top of p. 120); C Euglena pp. 120 to
 * 122 (answers end at the top of p. 122); D Fungal Advanced pp. 122 to 124 (its answers end
 * partway down p. 124, where Addendum E begins); E Mycorrhizae, Lichens as Pollution Indicators, and
 * Diatomaceous Earth pp. 124 to 126; F NCERT Example Index pp. 126 to 128; G Mixed Practice
 * with Full Answers pp. 129 to 131 (answers end partway down p. 131); H What NEET Actually
 * Asks (the book's Addendum P) pp. 131 to 141. p. 142 is the next chapter. The pages hold
 * no drawing (tables, lists and text only), so this file uses no figure id.
 *
 * Tables the book prints INSIDE a worked example or a practice question (the Column I and
 * Column II lists) are set as lines of cells separated by " | ". The book's example headings
 * ("Example A.1 - [NEET Level] Identifying the Domain from Features") become the example's
 * tag (the bracket) and a bold lead on its question (the words after it). Practice items
 * keep the book's level tag at the start. This part of the book prints its option letters
 * as (a) to (d), and its assertion-reason answers say "(a)", so the letters are kept.
 * Scientific names are italic; names above the genus (Ascomycetes, Protista) and common
 * names are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 115 to 117 ─────────────────────────
  {
    n: 'A',
    title: 'The Three-Domain System: Why Woese Split the Moneran Kingdom',
    extra: true,
    kalam: 'Both Archaea and Bacteria are prokaryotic, so Kingdom Monera is divided between them.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This part builds on the chapter. Additional topic A develops the three-domain system: the rRNA evidence for it, the molecular markers (membrane lipids, peptidoglycan, rRNA) set side by side, and how the kingdoms sit inside the domains. Additional topic B sets bacterial shape and Gram reaction side by side and explains why heterocysts fix nitrogen in cyanobacteria. Additional topic C works through the classification of <i>Euglena</i>. Additional topic D explains the perfect and imperfect stages, the dikaryotic condition and clamp connections. Additional topic E covers mycorrhizae, lichens as SO<sub>2</sub> indicators and diatomaceous earth. Additional topic F gathers named examples by kingdom and group. Additional topic G is a mixed practice set with full answers.',
      },
      {
        t: 'p',
        html: 'The chapter introduces the three-domain system (Archaea, Bacteria, Eukarya) as a higher rank that refines the kingdom idea and splits Kingdom Monera, and it names the wall and lipid differences. This section adds the rRNA evidence behind the split, sets the three domains side by side in one table, and gives the domain–kingdom mapping that NEET questions now routinely test (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The domain logic.</b><br>The five-kingdom system (1969) groups all prokaryotes into one kingdom. Carl Woese’s rRNA sequencing (1970s) showed that “prokaryotes” are actually two groups that diverged at the very root of the tree of life; the three-domain system itself was proposed in 1990. This means the prokaryote/eukaryote divide is not the deepest split in the tree of life. On the rRNA tree, the deepest split is between Bacteria and the Archaea-plus-Eukarya branch. The three-domain system restructures life accordingly:<br>• <b>Archaea</b>: prokaryotic cell type, branched-chain membrane lipids, no peptidoglycan in the cell wall, rRNA sequence distinct from Bacteria.<br>• <b>Bacteria</b>: prokaryotic cell type, straight-chain (unbranched) membrane lipids, peptidoglycan wall present, rRNA sequence distinct from Archaea.<br>• <b>Eukarya</b>: eukaryotic cell type, membranes with sterols, no peptidoglycan, rRNA sequence sister to Archaea (on the rRNA evidence).',
      },
      {
        t: 'p',
        html: '<b>Domain–kingdom mapping.</b> Both Archaea and Bacteria are prokaryotic, so Kingdom Monera is divided between them. All four remaining kingdoms (Protista, Fungi, Plantae, Animalia) are eukaryotic and sit inside Domain Eukarya.',
      },

      { t: 'part', title: 'Key Distinguishing Features' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Archaea', 'Bacteria', 'Eukarya'],
        rows: [
          ['Cell type', 'Prokaryotic', 'Prokaryotic', 'Eukaryotic'],
          ['Membrane lipids', 'Branched-chain isoprenoids', 'Straight-chain fatty acids', 'Sterol-containing'],
          [
            'Cell wall',
            'No peptidoglycan; protein + non-cellulosic polysaccharides',
            'Peptidoglycan (murein) present',
            'Not peptidoglycan (cellulose in plants, chitin in fungi, absent in animal cells)',
          ],
          ['Nuclear membrane', 'Absent', 'Absent', 'Present'],
          ['rRNA sequence (on the rRNA evidence)', 'Distinct; sister to Eukarya', 'Distinct; outgroup to Archaea+Eukarya', 'Sister to Archaea'],
          ['Kingdom(s)', 'Monera', 'Monera', 'Protista, Fungi, Plantae, Animalia'],
        ],
      },

      { t: 'part', title: 'Why the Domain System Matters Evolutionarily' },
      {
        t: 'p',
        html: 'The deepest split in the living world is not “prokaryote vs eukaryote.” On the rRNA tree, it is between Bacteria and the Archaea-plus-Eukarya branch. Archaea are more closely related to Eukarya than to Bacteria on the rRNA evidence, despite sharing the prokaryote label with Bacteria under Whittaker’s scheme. This is why the domain system is not merely an extra rank above kingdom; it corrects a fundamental misrepresentation of evolutionary history that the five-kingdom system perpetuates by treating all prokaryotes as one group.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identifying the Domain from Features.</b> An organism has a prokaryotic cell, a cell wall containing peptidoglycan, and straight-chain fatty acids in its membranes. To which domain and kingdom does it belong?',
        steps: [
          'Step 1: Prokaryotic cell type means either Archaea or Bacteria.',
          'Step 2: Peptidoglycan wall: Archaea lack peptidoglycan; only Bacteria have it.',
          'Step 3: Straight-chain fatty acids: Archaea have branched-chain lipids; Bacteria have straight-chain.',
          'All three clues converge on <b>Domain: Bacteria</b>. Kingdom: <b>Monera</b>.',
        ],
        ans: 'Domain Bacteria, Kingdom Monera.',
      },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Mapping Five Kingdoms to Three Domains.</b> Place all five kingdoms into the three-domain system and name one member of each domain.',
        steps: [
          '• <b>Domain Archaea</b> → Kingdom Monera (partial). Example: <i>Methanobacterium</i>.<br>• <b>Domain Bacteria</b> → Kingdom Monera (partial). Example: <i>Nostoc</i>, <i>E. coli</i>.<br>• <b>Domain Eukarya</b> → Kingdoms Protista, Fungi, Plantae, Animalia. Example: <i>Euglena</i> (Protista), <i>Agaricus</i> (Fungi), <i>Mangifera</i> (Plantae), <i>Homo</i> (Animalia).',
        ],
        ans: 'Monera spans Archaea and Bacteria; the other four kingdoms are all inside Eukarya.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which domain contains organisms with branched-chain membrane lipids and a cell wall lacking peptidoglycan?',
            a: '<b>Archaea.</b>',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Kingdom Monera is split between two domains. Reason (R): Molecular (rRNA) studies show that archaebacteria and eubacteria are two lineages that separated at the root of the tree of life.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Molecular phylogeny (rRNA sequencing) shows that the prokaryote kingdom Monera holds two lineages that separated at the root of the tree of life, so one kingdom cannot hold them both.',
          },
          {
            q: '[NEET] Name the domain that contains (a) <i>Agaricus</i>, (b) Methanogen, (c) Cyanobacterium.',
            a: '(a) Eukarya; (b) Archaea; (c) Bacteria.',
          },
          {
            q: '[CBSE] Give one molecular feature that distinguishes Archaea from Bacteria.',
            a: 'Any one: branched-chain membrane lipids (Archaea) vs straight-chain (Bacteria); OR peptidoglycan absent in Archaea, present in Bacteria.',
          },
          {
            q: '[NEET] Why is the three-domain system considered more evolutionarily accurate than the five-kingdom system?',
            a: 'The five-kingdom system groups all prokaryotes into one kingdom (Monera), implying they share a recent common ancestor. The three-domain system reveals that Archaea and Bacteria separated at the root of the tree of life, so grouping them together misrepresents their evolutionary relationship. The domain system places Archaea closer to Eukarya than to Bacteria, reflecting the tree of life as the rRNA evidence shows it.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 118 to 120 ─────────────────────────
  {
    n: 'B',
    title: 'Kingdom Monera: Internal Classification Beyond “Prokaryotic”',
    extra: true,
    kalam: 'Bacteria are classified simultaneously by two independent schemes: by shape (morphology) and by Gram stain (cell-wall chemistry).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter describes Monera as the prokaryote kingdom and already gives the bacterial shapes, the Gram reaction, the modes of nutrition and the heterocysts of cyanobacteria. This section sets the shape and Gram schemes side by side, adds the outer membrane and the response to cell-wall antibiotics, and explains why heterocysts are needed for nitrogen fixation.',
      },

      { t: 'part', title: 'B1: Bacteria by Shape and Gram Reaction' },
      {
        t: 'p',
        html: 'Bacteria are classified simultaneously by two independent schemes: by <b>shape</b> (morphology) and by <b>Gram stain</b> (cell-wall chemistry). Both are routinely tested (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: 'Shape classification (four types)',
        head: ['Shape', 'Name', 'Plural'],
        rows: [
          ['Spherical', 'Coccus', 'Cocci'],
          ['Rod-shaped', 'Bacillus', 'Bacilli'],
          ['Comma-shaped', 'Vibrio', 'Vibrios'],
          ['Spiral/coiled', 'Spirillum', 'Spirilla'],
        ],
      },
      {
        t: 'p',
        html: 'Note: “Bacillus” is both a shape and a genus name (e.g., <i>Bacillus anthracis</i> causes anthrax). The genus is named for its rod shape, but not every rod-shaped bacterium belongs to the genus <i>Bacillus</i> (<i>E. coli</i> is a rod too).',
      },
      {
        t: 'table',
        title: 'Gram stain classification (two groups)',
        head: ['Feature', 'Gram-positive', 'Gram-negative'],
        rows: [
          ['Peptidoglycan layer', 'Thick, multilayered', 'Thin, single-layered'],
          ['Outer membrane', 'Absent', 'Present (lipopolysaccharide)'],
          ['Dye retained', 'Violet (crystal violet)', 'Pink (safranin counterstain)'],
          ['Example', '<i>Staphylococcus</i>, <i>Streptococcus</i>', '<i>Escherichia coli</i>, <i>Salmonella</i>'],
          [
            'Response to cell-wall-targeting antibiotics (e.g., penicillin)',
            'Generally susceptible',
            'Outer membrane makes many of them less effective',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Diagnostic reasoning:</b> Given an unknown bacterium, run two filters: shape first, then Gram reaction. Shape narrows morphology; Gram reaction reveals wall chemistry. Together they identify the type.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identifying from Description.</b> “A soil bacterium is rod-shaped and retains the violet stain after Gram staining.” Identify its type.',
        steps: [
          'Step 1: Rod-shaped → Bacillus morphology.',
          'Step 2: Retains violet stain → Gram-positive.',
          'Step 3: Combine: Gram-positive bacillus.',
        ],
        ans: 'Gram-positive bacterium (e.g., <i>Bacillus subtilis</i>, a soil decomposer).',
      },

      { t: 'part', title: 'B2: Cyanobacteria: The Nitrogen-Fixing Prokaryotes Inside Monera' },
      {
        t: 'p',
        html: 'The chapter lists cyanobacteria (blue-green algae) as photosynthetic prokaryotes with chlorophyll <i>a</i>. The nitrogen-fixing role of their <b>heterocysts</b> deserves explicit treatment because it is a high-frequency NEET topic (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: '<b>Heterocysts</b> are specialised, thick-walled cells that do not carry out oxygen-releasing photosynthesis; they are found in some filamentous cyanobacteria (e.g., <i>Nostoc</i>, <i>Anabaena</i>). They are the sites of <b>atmospheric nitrogen (N<sub>2</sub>) fixation</b>, converting inert N<sub>2</sub> gas into ammonia (NH<sub>3</sub>), which plants can use to build proteins and nucleic acids.',
      },
      {
        t: 'p',
        html: 'Why separate heterocysts from ordinary cells? Nitrogen fixation requires an oxygen-free environment because the enzyme nitrogenase is rapidly inactivated by oxygen. Heterocysts have thickened walls that limit gas diffusion, creating the anaerobic conditions needed for nitrogenase to function. Ordinary cyanobacterial cells photosynthesise and produce O<sub>2</sub>, so the oxygen-sensitive nitrogen-fixing machinery is physically isolated in the heterocyst.',
      },
      {
        t: 'p',
        html: '<b>Ecological importance:</b> Free-living nitrogen-fixers (cyanobacteria such as <i>Anabaena</i> and <i>Nostoc</i>, and bacteria such as <i>Azotobacter</i>) and symbiotic ones (<i>Anabaena</i> in the <i>Azolla</i> fern) contribute substantially to soil nitrogen content. In Indian rice cultivation, <i>Anabaena</i> associated with the water fern <i>Azolla</i> is used as a biofertiliser, naturally enriching paddies without synthetic nitrogen inputs.',
      },
      {
        t: 'p',
        html: '<b>Examples:</b> <i>Nostoc</i>, <i>Anabaena</i> and <i>Oscillatoria</i> are filamentous cyanobacteria. Heterocysts are named for <i>Anabaena</i> and <i>Nostoc</i>; <i>Oscillatoria</i> does not form heterocysts.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Name the three groups of archaebacteria with one habitat for each.',
            a: 'Methanogens (anaerobic marshes, ruminant gut), Halophiles (extreme salt environments), Thermoacidophiles (hot acidic springs).',
          },
          {
            q: '[NEET] Give two distinguishing features of Gram-positive bacteria.',
            a: 'Thick peptidoglycan wall; retain violet crystal violet stain (appear purple); lack an outer membrane.',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Cyanobacteria are placed in Kingdom Monera despite being photosynthetic. Reason (R): They are prokaryotic: they lack a membrane-bound nucleus and membrane-bound organelles.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Being photosynthetic is irrelevant to kingdom placement: the defining criterion is cell type. Cyanobacteria have a prokaryotic cell (no nuclear membrane), which places them in Monera regardless of chlorophyll.',
          },
          {
            q: '[NEET] What are heterocysts? Why are they necessary for nitrogen fixation in cyanobacteria?',
            a: 'Heterocysts are specialised, thick-walled cells in some filamentous cyanobacteria (e.g., <i>Nostoc</i>, <i>Anabaena</i>) where atmospheric N<sub>2</sub> is converted to ammonia. They are necessary because the enzyme nitrogenase, which catalyses nitrogen fixation, is rapidly inactivated by oxygen. The thickened heterocyst wall restricts gas diffusion, maintaining the anaerobic micro-environment required for nitrogenase function.',
          },
          {
            q: '[CBSE] Classify the following bacteria: (a) spherical bacteria in chains; (b) rod-shaped bacteria that lose the violet stain.',
            a: '(a) <i>Streptococcus</i> (Gram-positive cocci in chains); (b) Gram-negative bacillus (e.g., <i>E. coli</i>, <i>Salmonella</i>; rod-shaped, loses violet, takes pink counterstain).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 120 to 122 ─────────────────────────
  {
    n: 'C',
    title: 'Euglena: Why It Is Kingdom Protista and Not Plantae',
    extra: true,
    kalam: 'To assign Euglena to a kingdom, test each candidate against its defining features.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter places <i>Euglena</i> among the plant-like protists and gives its protein pellicle, its two flagella and its mixotrophic nutrition. It does not set out, test by test, why a photosynthetic flagellate is Protista and not Plantae. This section does.',
      },

      { t: 'part', title: 'Method: The Euglena Diagnostic' },
      {
        t: 'p',
        html: 'To assign <i>Euglena</i> to a kingdom, test each candidate against its defining features:',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Euglena', 'Plantae criterion', 'Fits Plantae?', 'Animalia criterion', 'Fits Animalia?'],
        rows: [
          ['Cell type', 'Eukaryotic', 'Eukaryotic', 'Yes', 'Eukaryotic', 'Yes'],
          ['Cell wall', 'Absent (protein pellicle)', 'Cellulose wall present', '<b>No</b>', 'No wall', 'Yes'],
          ['Nutrition', 'Mixotrophic (light and organic food)', 'Mostly autotrophic', '<b>Partial</b>', 'Heterotrophic (holozoic)', 'Partial'],
          ['Locomotion', 'Flagella', 'Mostly non-motile (body fixed)', '<b>No</b>', 'Motile', 'Yes'],
          ['Body form', 'Unicellular', 'Mostly multicellular', '<b>Partial</b>', 'Multicellular', 'No'],
        ],
      },

      { t: 'part', title: 'The Critical Distinguishing Feature' },
      {
        t: 'p',
        html: 'The feature that rules <i>Euglena</i> out of Plantae is the <b>absence of a cell wall</b>; its unicellular body, flagellum and mixotrophy then place it in Protista. Plants (Kingdom Plantae) have a <b>cellulose cell wall</b>: this is non-negotiable for Plantae. <i>Euglena</i> has a <b>proteinaceous pellicle</b>: a flexible, striped layer of protein strips that gives shape but is not a rigid wall. It allows <i>Euglena</i> to change shape (euglenoid movement, or metaboly), something no walled plant cell can do.',
      },
      {
        t: 'p',
        html: 'The pellicle takes the place of the cellulose wall of plants and the chitin wall of fungi, but it is neither of them; <i>Euglena</i> is also not a fungus because it photosynthesises.',
      },

      { t: 'part', title: 'The Mixotrophy Question' },
      {
        t: 'p',
        html: 'Mixotrophy (photosynthetic + heterotrophic) does not disqualify <i>Euglena</i> from Protista. Kingdom Protista explicitly accommodates organisms that are “photo-, hetero- and mixotrophic”; this is stated in the chapter’s comparison of Protista with the other kingdoms. Mixotrophy is one reason Protista is the “leftovers” kingdom: organisms that do not fit the other three (autotroph with cellulose wall = Plantae; heterotroph with chitin wall = Fungi; heterotroph with no wall and multicellular = Animalia) land in Protista.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b><i>Euglena</i> Kingdom Assignment.</b> “A single-celled organism has chloroplasts, a flagellum, and a flexible pellicle but no cell wall. State its kingdom with reasons.”',
        steps: [
          'Step 1: Chloroplasts mean a eukaryote → rules out Monera.',
          'Step 2: No cellulose cell wall → rules out Plantae.',
          'Step 3: Unicellular → does not fit multicellular Animalia.',
          'Step 4: Photosynthetic + no fungal cell wall → rules out Fungi.',
          'Step 5: Single-celled eukaryote with mixotrophic capability → Kingdom <b>Protista</b>.',
        ],
        ans: 'Kingdom Protista. Reason: the flexible pellicle (not a cellulose wall) excludes Plantae; photosynthesis with no chitin wall excludes Fungi; the unicellular body excludes Animalia; and the chloroplasts, which only a eukaryote has, exclude Monera: a single-celled eukaryote belongs in Protista.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Assertion–Reason: Assertion (A): <i>Euglena</i> is placed in Kingdom Protista. Reason (R): <i>Euglena</i> has a cell wall made of cellulose. (Options: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.)',
            a: '<b>(c)</b> A is true (<i>Euglena</i> is in Protista); R is false (<i>Euglena</i> has a protein pellicle, not a cellulose wall).',
          },
          {
            q: '[CUET] Name the covering of <i>Euglena</i> and state how it differs from a plant cell wall.',
            a: 'Proteinaceous pellicle: a flexible, striated layer of protein strips. It differs from a plant cell wall in being protein-based (not cellulose), flexible (not rigid), and capable of permitting shape changes (euglenoid movement), whereas plant cell walls are rigid.',
          },
          {
            q: '[NEET] State two features of <i>Euglena</i> that are animal-like and two that are plant-like.',
            a: 'Plant-like: contains chlorophyll (its pigments are identical to those of higher plants) and performs photosynthesis in light. Animal-like: has a flagellum for locomotion; can feed heterotrophically in the absence of light; has no cell wall (a flexible pellicle instead).',
          },
          {
            q: '[CBSE] Why is <i>Euglena</i> not placed in Kingdom Plantae despite having chlorophyll?',
            a: '<i>Euglena</i> lacks a cellulose cell wall, the defining structural feature of Kingdom Plantae. Instead it has a flexible protein pellicle. Additionally, <i>Euglena</i> is motile (it swims by a flagellum) and is mixotrophic (it feeds heterotrophically in the dark), whereas plants are mostly non-motile (the body is fixed) and mostly autotrophic. These features (no cellulose wall, flagellar motility, mixotrophy) together with its unicellular body place it in Protista rather than Plantae.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 122 to 124 ─────────────────────────
  {
    n: 'D',
    title: 'Fungal Advanced: Perfect/Imperfect Stages, the Dikaryotic Condition, and Clamp Connections',
    extra: true,
    kalam: 'The sexual cycle (plasmogamy → karyogamy → meiosis) is called the perfect stage of a fungus.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that the dikaryophase (n+n condition) occurs in Ascomycetes and Basidiomycetes and that Deuteromycetes are fungi “imperfecti” with no known sexual stage. The chapter gives only the brief versions of the imperfect stage, the delayed fusion of the dikaryon and the clamp connection. This section gives the full reasoning: why the perfect/imperfect distinction exists, what biological advantage the dikaryotic condition confers, and how clamp connections work.',
      },

      { t: 'part', title: 'D1: The Perfect/Imperfect Distinction' },
      {
        t: 'p',
        html: 'The <b>sexual cycle</b> (plasmogamy → karyogamy → meiosis) is called the <b>perfect stage</b> of a fungus: it is the complete reproductive cycle that defines the fungus’s true taxonomic identity. The <b>asexual cycle</b> (producing conidia only) is the <b>imperfect stage</b>.',
      },
      {
        t: 'p',
        html: 'The terms date from the era when many fungi were first discovered only in their asexual form. When a fungus is known only from its conidial (imperfect) state (when no sexual fruiting body has ever been observed), mycologists place it in an artificial holding group: <b>Deuteromycetes</b> (Fungi Imperfecti). The moment a sexual stage is discovered, the fungus is reclassified into either <b>Ascomycetes</b> (ascus-former) or <b>Basidiomycetes</b> (basidium-former), depending on the type of fruiting body produced.',
      },
      {
        t: 'p',
        html: 'This is why Deuteromycetes is not a “natural” class: it is a taxonomic dustbin for fungi whose sexual stage is unknown or lost. It shrinks as those stages are found.',
      },

      { t: 'part', title: 'D2: The Biological Significance of the Dikaryotic Condition' },
      {
        t: 'p',
        html: 'The chapter mentions that karyogamy is delayed after plasmogamy in Ascomycetes and Basidiomycetes, producing a <b>dikaryon (n + n)</b>. The question is: why would a fungus evolve to postpone nuclear fusion?',
      },
      {
        t: 'p',
        html: 'The answer is <b>genetic advantage without genetic commitment</b>. In a dikaryotic cell, two genetically distinct nuclei coexist and both are expressed. The mycelium effectively has two functional genomes operating simultaneously; it can draw on the adaptive strengths of both parents at once. When conditions finally trigger karyogamy (forming a diploid zygote), meiosis then reshuffles both parental genomes into the haploid spores, generating maximum genetic diversity.',
      },
      {
        t: 'p',
        html: 'Contrast this with the prompt karyogamy after plasmogamy of Phycomycetes: the two parental nuclei fuse at once, so there is no stage in which both genomes are expressed side by side. The resulting zygospore is a dormant resting stage, and meiosis follows when it germinates. The dikaryotic strategy is an evolutionary investment in prolonged dual-genome expression before the genetic reshuffle of meiosis.',
      },

      { t: 'part', title: 'D3: Clamp Connections: Diagnostic Markers of Dikaryotic Mycelium' },
      {
        t: 'p',
        html: 'In many Basidiomycetes, the dikaryotic mycelium needs a mechanism to ensure that at each division one nucleus of each parental type reaches each daughter cell. The mechanism is the <b>clamp connection</b>, a small, hook-like bridge of hyphal tissue that forms at each division.',
      },
      {
        t: 'p',
        html: 'During cell division in a dikaryotic hyphal cell:<br>1. A hook-like clamp grows out from the dikaryotic cell, and one of the two nuclei moves into it.<br>2. Both nuclei divide by mitosis (conjugate division), and septa then cut off the clamp and separate the two daughter cells.<br>3. The clamp fuses back with the rear (subapical) daughter cell and delivers its nucleus there.<br>4. Result: each daughter cell receives exactly one nucleus of each mating type.',
      },
      {
        t: 'p',
        html: '<b>Clamp connections are therefore diagnostic markers of dikaryotic Basidiomycete mycelium.</b> They are visible under a microscope on the hyphae of many mushrooms, bracket fungi, and puffballs. Finding clamp connections confirms the mycelium is dikaryotic Basidiomycete, which in field mycology is a valuable identification tool. Their presence is diagnostic but their absence is not: rusts and smuts, which are Basidiomycetes, lack clamp connections.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Clamp Connection Reasoning.</b> “Why are clamp connections found in many Basidiomycetes and not in Ascomycetes?”',
        steps: [
          'Step 1: Clamp connections maintain the dikaryotic (n+n) state during cell division.',
          'Step 2: Ascomycetes also have a dikaryophase, but their hyphae are septate with simple septal pores, and the dikaryon is kept going differently, by a hook-shaped tip cell called a crozier; the clamp mechanism belongs to the Basidiomycetes.',
          'Step 3: The Basidiomycete dikaryophase is prolonged and spreads through the entire mycelium (dominant vegetative phase), so a dedicated division mechanism is needed. Ascomycetes spend more time in the haploid phase, so the clamp is not required.',
        ],
        ans: 'Clamp connections maintain the dikaryotic condition in many Basidiomycete hyphae, where the dikaryophase is the dominant vegetative mycelium and nuclear distribution at each septation must be precise.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] What is meant by the “perfect” and “imperfect” stages of a fungus?',
            a: 'The perfect stage is the complete sexual cycle (plasmogamy → karyogamy → meiosis), ending in sexual spores (for example zygospores, ascospores in asci or basidiospores on basidia, often in a fruiting body). The imperfect stage is the asexual phase producing only conidia, observed when the sexual stage is unknown or absent.',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Deuteromycetes is called an artificial/heterogeneous group. Reason (R): Deuteromycetes is defined only by the absence of a known sexual stage, not by shared ancestry.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Deuteromycetes is defined solely by the absence of a known sexual stage, an operational, not natural, grouping. Discovering the sexual stage destroys the only criterion for membership, so the fungus is reclassified accordingly.',
          },
          {
            q: '[CBSE] Give two biological advantages of the dikaryotic condition in fungi.',
            a: '(a) Two genetically distinct nuclei are co-expressed in the same cell, allowing the mycelium to draw on the adaptive strengths of both parents simultaneously. (b) Genetic recombination through meiosis at the end of the dikaryophase generates maximum diversity in the haploid spores, accelerating adaptation to new substrates.',
          },
          {
            q: '[NEET] State the function of clamp connections in Basidiomycetes.',
            a: 'Clamp connections ensure that each daughter cell receives exactly one nucleus of each parental mating type during hyphal division in dikaryotic Basidiomycete mycelium.',
          },
          {
            q: '[NEET] A fungus shows clamp connections on its hyphae. What does this tell you about its taxonomic group and nuclear condition?',
            a: 'Taxonomic group: Basidiomycetes (clamps point to this group; their absence would prove nothing, since rusts and smuts lack them). Nuclear condition: dikaryotic (n+n) mycelium; the two nuclei are from different mating types and have not yet undergone karyogamy.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 124 to 126 ─────────────────────────
  {
    n: 'E',
    title: 'Mycorrhizae, Lichens as Pollution Indicators, and Diatomaceous Earth',
    extra: true,
    kalam: 'Lichens lack the protective waxy cuticle and root system of higher plants.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter already says that the mycorrhizal fungus supplies phosphorus and water in exchange for sugars, that lichens are sensitive to SO<sub>2</sub>, and that diatomaceous earth is used for filtering and polishing. This section develops the mechanisms: how nutrients are exchanged in mycorrhizae, why lichens respond to SO<sub>2</sub>, and the properties and fuller list of uses of diatomaceous earth.',
      },

      { t: 'part', title: 'E1: Mycorrhizae: The Plant–Fungus Nutrient Partnership' },
      {
        t: 'p',
        html: '<b>Mycorrhiza</b> (Greek: myco = fungus, rhiza = root) is a symbiotic association between fungal hyphae and the roots of most terrestrial plants. The fungal partner (mycobiont) does not photosynthesise; the plant partner does.',
      },
      {
        t: 'p',
        html: '<b>Mechanism:</b> Fungal hyphae are far finer than plant root hairs and extend deep into the soil, accessing water and mineral nutrients, especially <b>inorganic phosphorus (PO<sub>4</sub><sup>3−</sup>)</b> and nitrogen, that plant root hairs cannot reach. The fungus transfers these nutrients to the plant in exchange for <b>carbohydrates (sugars)</b> from the plant’s photosynthesis. The exchange happens at the root–hypha interface.',
      },
      {
        t: 'p',
        html: '<b>Significance:</b> The majority of land plants form mycorrhizal associations. The fungal partner supplies phosphorus efficiently, and many crops depend on it. Evidence suggests that mycorrhizae were crucial in the earliest colonisation of land by plants: without a fungal partner to supply minerals and water, the transition from aquatic algae to land plants would have been far more difficult.',
      },
      {
        t: 'p',
        html: '<b>NCERT examples:</b> The chapter names mycorrhizae in the fungal symbiotic section. No specific fungal genus is required at the Class 11 level; the concept and the name are sufficient.',
      },

      { t: 'part', title: 'E2: Lichens as Pollution Indicators: The Biological Basis' },
      {
        t: 'p',
        html: 'The chapter states that lichens are sensitive to sulphur dioxide and are used as indicators of air pollution. The pollutant is <b>sulphur dioxide (SO<sub>2</sub>)</b>, and this section gives the biological basis.',
      },
      {
        t: 'p',
        html: '<b>Mechanism:</b> Lichens lack the protective waxy cuticle and root system of higher plants. They absorb water and minerals directly from the atmosphere and rain through their entire thallus surface. When SO<sub>2</sub> dissolves in rain or dew, it forms dilute sulphurous acid, which:<br>• Damages the photosynthetic phycobiont (the algal or cyanobacterial partner).<br>• Disrupts the mycobiont’s metabolism.<br>• Gradually kills the lichen thallus.',
      },
      {
        t: 'p',
        html: 'Because lichens have no mechanisms to exclude airborne pollutants, they are among the most sensitive organisms in terrestrial ecosystems to gaseous air pollution.',
      },
      {
        t: 'p',
        html: '<b>Consequence:</b> In areas with high SO<sub>2</sub> levels (urban centres, industrial zones), lichens become scarce or absent. In areas with clean air (hill stations, forests), lichens are abundant. Their presence or absence therefore signals air quality, making them natural <b>bioindicators</b> of SO<sub>2</sub> pollution. This is why a city centre is often poor in lichens while a forest trail is carpeted with them.',
      },

      { t: 'part', title: 'E3: Diatomaceous Earth: The Silica Frustule Accumulation' },
      {
        t: 'p',
        html: 'The chapter mentions diatoms as the chief marine producers with silica-embedded, “indestructible” walls and states that these walls accumulate as diatomaceous earth, used for polishing and for filtering oils and syrups. The fuller list of uses is given here.',
      },
      {
        t: 'p',
        html: '<b>Diatomaceous earth</b> (also called diatomite or kieselguhr) is a soft, powdery sedimentary rock composed almost entirely of the silica frustules of dead diatoms. Major deposits formed over millions of years as diatom shells settled on the ocean floor, compressed, and lithified.',
      },
      {
        t: 'p',
        html: '<b>Properties:</b> The frustules are microscopically porous, with intricate geometric patterns. They are highly absorbent, chemically inert (silica is unreactive), and abrasive.',
      },
      {
        t: 'p',
        html: '<b>Uses:</b><br>• <b>Filtration:</b> Diatomaceous earth is the standard filter medium for swimming pools, breweries, wine-making, and pharmaceutical clarification. Its porous structure traps fine suspended particles.<br>• <b>Polishing and abrasive:</b> Used in toothpaste, metal polishes, and industrial abrasive cleaners.<br>• <b>Insecticide:</b> Food-grade diatomaceous earth is used as a natural insecticidal dust: it damages the waxy exoskeleton of insects by abrasion and absorption, causing desiccation.<br>• <b>Soil amendment:</b> Agricultural grade improves soil water retention and drainage.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the form of nutrient exchange in a mycorrhizal association.',
            a: 'The fungal partner (mycobiont) absorbs water and mineral nutrients, especially phosphorus and nitrogen, from the soil and transfers them to the plant root. In return, the plant provides carbohydrate (sugar) products of photosynthesis to the fungus.',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Lichens are used as bioindicators of air pollution. Reason (R): They absorb water and minerals directly from the atmosphere, making them highly sensitive to SO<sub>2</sub>.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Lichens lack roots, cuticles and exclusion mechanisms; they absorb everything from the atmosphere. SO<sub>2</sub> dissolving in rain forms sulphurous acid, which destroys the phycobiont. Their sensitivity to SO<sub>2</sub> makes their presence/absence a reliable signal of air quality.',
          },
          {
            q: '[CUET] Name the industrial uses of diatomaceous earth (any two).',
            a: 'Filtration of swimming pools and beverages; polishing (toothpaste, metals); natural insecticide; soil amendment.',
          },
          {
            q: '[CBSE] Why are mycorrhizae ecologically significant for the colonisation of land by plants?',
            a: 'Mycorrhizal fungi extend far beyond the plant’s root hairs into the soil, accessing water and minerals that plant roots alone cannot reach. Phosphorus, in particular, is poorly mobile in soil and is supplied efficiently by the fungal hyphae. This partnership was essential for early plants to obtain sufficient nutrients on bare rock and mineral soils, facilitating the transition from aquatic to terrestrial life.',
          },
          {
            q: '[NEET] Why are lichens scarce in cities but common in hill stations?',
            a: 'Cities have high concentrations of sulphur dioxide from combustion. SO<sub>2</sub> dissolves in rain and damages the phycobiont. Because lichens have no protective barriers, they die off and become scarce or absent. Hill stations have clean, unpolluted air, so lichens thrive there. The contrast in lichen cover directly reflects the contrast in SO<sub>2</sub> levels.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 126 to 128 ─────────────────────────
  {
    n: 'F',
    title: 'NCERT Example Index by Kingdom and Group',
    extra: true,
    kalam: 'This index gathers the named examples by kingdom and group, including some standard examples the chapter itself does not name, for rapid revision before the exam.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces organisms group by group but does not consolidate them. This index gathers the named examples by kingdom and group, including some standard examples the chapter itself does not name, for rapid revision before the exam.',
      },

      { t: 'part', title: 'Kingdom Monera' },
      {
        t: 'p',
        html: '<b>Archaebacteria:</b><br>• Methanogens: methanogenic bacteria in anaerobic marshes and ruminant guts (e.g., <i>Methanobacterium</i>)<br>• Halophiles: extreme halophiles in salt lakes and brine pans<br>• Thermoacidophiles: in hot sulphur springs',
      },
      {
        t: 'p',
        html: '<b>Eubacteria (by shape):</b><br>• Coccus: <i>Staphylococcus</i>, <i>Streptococcus</i><br>• Bacillus: <i>Bacillus anthracis</i> (anthrax), <i>Bacillus subtilis</i> (soil decomposer), <i>Escherichia coli</i> (Gram-negative)<br>• Vibrio: <i>Vibrio cholerae</i> (cholera)<br>• Spirillum: <i>Spirillum minus</i> (rat-bite fever)',
      },
      {
        t: 'p',
        html: '<b>Eubacteria (by function):</b><br>• Cyanobacteria (photosynthetic, peptidoglycan wall, naked DNA): <i>Nostoc</i>, <i>Anabaena</i>: filamentous forms with heterocysts for nitrogen fixation; <i>Oscillatoria</i>: filamentous, without heterocysts<br>• Spore-former: <i>Clostridium</i><br>• Antibiotic source: <i>Streptomyces</i><br>• Chemosynthetic autotrophs: nitrifying bacteria (<i>Nitrosomonas</i>, <i>Nitrobacter</i>)<br>• Nitrogen-fixers: <i>Rhizobium</i> (symbiotic in legume root nodules), <i>Azotobacter</i> (free-living)<br>• Pathogens: <i>Rickettsia</i> (typhus), <i>Mycoplasma</i> (smallest, no cell wall at all, so the exception among eubacteria; penicillin-resistant)<br>• Food and dairy: <i>Lactobacillus</i> (lactic acid bacteria, curdles milk into dahi)<br>• Decomposers: most soil bacteria',
      },

      { t: 'part', title: 'Kingdom Protista' },
      {
        t: 'p',
        html: '<b>Plant-like (algal) protists:</b><br>• Chrysophytes (silica wall, chrysolaminarin store): Diatoms (centric and pennate types; e.g., the pennate <i>Navicula</i> and <i>Pinnularia</i>) and golden algae<br>• Dinoflagellates (cellulose plates, two flagella, starch store): <i>Gonyaulax</i> (red tide), <i>Noctiluca</i> (mostly heterotrophic, bioluminescent, “sea sparkle”)<br>• Euglenoids (protein pellicle, no wall, paramylon store, mixotrophic): <i>Euglena</i>',
      },
      {
        t: 'p',
        html: '<b>Fungus-like protists:</b><br>• Slime moulds (feed on decaying matter, plasmodium): <i>Physarum</i> (a plasmodial slime mould)',
      },
      {
        t: 'p',
        html: '<b>Animal-like protists (Protozoa: all heterotrophic):</b><br>• Amoeboid (pseudopodia): <i>Amoeba</i>, <i>Entamoeba</i> (intestinal parasite)<br>• Flagellated (flagella): <i>Trypanosoma</i> (African sleeping sickness)<br>• Ciliated (cilia): <i>Paramecium</i> (gullet, contractile vacuole, two nuclei)<br>• Sporozoan (spore stage): <i>Plasmodium</i> (malaria)',
      },

      { t: 'part', title: 'Kingdom Fungi' },
      {
        t: 'p',
        html: '<b>Phycomycetes (aseptate/coenocytic mycelium, zoospores):</b> <i>Mucor</i>, <i>Rhizopus</i> (bread mould), <i>Albugo</i> (white rust of mustard)',
      },
      {
        t: 'p',
        html: '<b>Ascomycetes (septate mycelium, ascospores in ascus, conidia):</b> <i>Penicillium</i>, <i>Aspergillus</i>, <i>Neurospora</i>, <i>Saccharomyces</i> (yeast), <i>Claviceps</i> (ergot)',
      },
      {
        t: 'p',
        html: '<b>Basidiomycetes (septate mycelium, basidiospores on basidium, clamp connections in many, somatogamy):</b> <i>Agaricus</i> (mushroom), <i>Puccinia</i> (wheat rust), <i>Ustilago</i> (smut)',
      },
      {
        t: 'p',
        html: '<b>Deuteromycetes (septate mycelium, conidia only, no known sexual stage):</b> <i>Alternaria</i>, <i>Colletotrichum</i>, <i>Trichoderma</i>',
      },
      {
        t: 'p',
        html: '<b>Symbiotic fungi:</b><br>• Lichens (mycobiont + phycobiont): the lichen body itself is the symbiotic unit<br>• Mycorrhizae: fungal partner (mycobiont) associated with plant roots',
      },

      { t: 'part', title: 'Kingdom Plantae' },
      {
        t: 'p',
        html: '<b>Autotrophic exceptions:</b><br>• Insectivorous (partly heterotrophic): Venus flytrap (<i>Dionaea</i>), bladderwort (<i>Utricularia</i>), pitcher plant (<i>Nepenthes</i>)<br>• Parasitic (has almost lost its chlorophyll): <i>Cuscuta</i> (dodder, Amarbel)<br>• Green algae placed in Plantae (NCERT), though they sit near the protist boundary: <i>Chlamydomonas</i>, <i>Chlorella</i>',
      },
      {
        t: 'p',
        html: '<b>Other examples named in the chapter:</b><br>• Fully autotrophic comparison: <i>Spirogyra</i> (green alga)<br>• Gymnosperm: <i>Cycas</i>',
      },
      {
        t: 'p',
        html: '<b>Stored food:</b> Starch (not glycogen; glycogen is the animal store)',
      },

      { t: 'part', title: 'Kingdom Animalia' },
      {
        t: 'p',
        html: '<b>Stored food:</b> Glycogen and fat (not starch; starch is the plant store)',
      },
      {
        t: 'p',
        html: '<b>Key distinguishing feature:</b> Animal cells have no cell wall, unlike Plantae (cellulose) and Fungi (chitin). Animal-like protists and <i>Mycoplasma</i> also lack walls, so absence of a wall separates Animalia from Plantae and Fungi, not from every other kingdom.',
      },

      { t: 'part', title: 'Acellular Agents' },
      {
        t: 'p',
        html: '<b>Viruses:</b><br>• Plant virus: Tobacco Mosaic Virus (TMV): helical, ssRNA, causes mosaic disease in tobacco and other solanaceous crops<br>• Animal viruses: Mumps, Smallpox, Herpes, Influenza, Common cold (Rhinovirus), AIDS (HIV: retrovirus)<br>• Hepatitis B: a DNA virus<br>• Bacteriophage φX174: single-stranded DNA<br>• Reovirus: double-stranded RNA',
      },
      {
        t: 'p',
        html: '<b>Viroids:</b> Potato spindle tuber viroid (PSTVd): discovered by T.O. Diener, 1971; free, low-MW circular RNA; no protein coat.',
      },
      {
        t: 'p',
        html: '<b>Prions:</b> BSE (bovine spongiform encephalopathy, mad-cow disease), CJD (Creutzfeldt-Jakob disease), Kuru: all fatal degenerative nervous-system diseases; protein-only infectious agent.',
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 129 to 131 ─────────────────────────
  {
    n: 'G',
    title: 'Mixed Practice with Full Answers',
    extra: true,
    kalam: 'A mixed-difficulty practice set that tests domain-level reasoning, kingdom assignment, Euglena classification, fungal diagnostics, and lichen ecology.',
    blocks: [
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which domain contains organisms with a peptidoglycan wall and straight-chain membrane lipids?',
            a: '<b>Domain Bacteria.</b>',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Kingdom Monera is split between two domains. Reason (R): Archaebacteria and eubacteria differ in cell wall chemistry and membrane lipids, placing them in different domains.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. The five-kingdom system places all prokaryotes in Monera, but molecular data (rRNA sequencing, membrane lipid analysis) show that archaebacteria and eubacteria separated at the root of the tree of life, justifying their placement in separate domains.',
          },
          {
            q: '[CBSE] Give two differences between heterocysts and ordinary cells of <i>Nostoc</i>.',
            a: '(a) Heterocysts have a thickened, multilayered wall that restricts gas diffusion; ordinary cells have a normal vegetative wall. (b) Heterocysts do not carry out oxygen-releasing photosynthesis (they lack the oxygen-evolving photosystem II), so they keep the oxygen-free conditions nitrogenase needs; ordinary cells photosynthesise and release O<sub>2</sub>.',
          },
          {
            q: '[NEET] A student observes a soil bacterium under a microscope: it is rod-shaped and appears pink after Gram staining. (a) What is its Gram type? (b) Name one example. (c) State one consequence of its Gram type for antibiotic treatment.',
            a: '(a) Gram-negative (pink, safranin-counterstained). (b) Any Gram-negative bacillus, for example <i>Pseudomonas</i> (a common soil rod) or <i>Escherichia coli</i>, <i>Salmonella typhi</i>, <i>Klebsiella</i> (gut or pathogenic rods). (c) Gram-negative bacteria have an outer membrane containing lipopolysaccharide (LPS), which confers resistance to many antibiotics that act on the cell wall. Penicillin-family drugs (which target peptidoglycan synthesis) are generally less effective against them; other classes of antibiotics are often needed.',
          },
          {
            q: '[NEET] A student is given an unknown organism: single-celled, eukaryotic, has chloroplasts, a flagellum, and a flexible pellicle but no rigid cell wall. State its kingdom and give two reasons excluding the pellicle.',
            a: '<b>Kingdom Protista.</b> Reasons (other than the pellicle): (a) it has a true nucleus, so it is not a prokaryote (excludes Monera); (b) it is unicellular, not a multicellular animal (excludes Animalia); (c) it is photosynthetic and has no chitin wall (excludes Fungi); (d) it has no cellulose cell wall (excludes Plantae).',
          },
          {
            q: '[CUET] Which feature is shared by <i>Euglena</i> and <i>Paramecium</i> but not by <i>Anabaena</i>?',
            a: 'Both <i>Euglena</i> and <i>Paramecium</i> are <b>unicellular eukaryotes</b> with a true membrane-bound nucleus and organelles; both are motile (<i>Euglena</i> by a flagellum, <i>Paramecium</i> by cilia). <i>Anabaena</i> is a <b>filamentous prokaryote</b>: it lacks a true nucleus and membrane-bound organelles, and has no flagella or cilia.',
          },
          {
            q: '[CBSE] Explain the biological significance of the dikaryotic (n+n) condition in Basidiomycetes.',
            a: '(a) The dikaryotic condition allows two genetically distinct nuclei to coexist and be co-expressed in the same mycelial cell, giving the fungus access to the adaptive benefits of both parental genomes simultaneously without the genetic commitment of nuclear fusion. (b) This extended dual-nucleus phase maximises genetic diversity before meiosis generates haploid basidiospores, accelerating adaptation to new substrates and environmental challenges. (c) In Basidiomycetes specifically, the dikaryophase is the dominant vegetative mycelium (the mushrooms and brackets visible above ground are the fruiting bodies of dikaryotic mycelium), so maintaining the n+n condition is essential for the organism’s primary mode of existence.',
          },
          {
            q: '[CBSE] Give two ecological roles of mycorrhizae.',
            a: '(a) Enhanced phosphorus uptake: fungal hyphae access soil phosphate beyond the depletion zone of root hairs, transferring it to the plant in exchange for carbohydrate. (b) Drought resistance: the extensive hyphal network improves water access for the plant. (c) Protection of roots: some mycorrhizal fungi are reported to help guard roots against soil pathogens (for interest). (d) Facilitation of plant colonisation: the mycorrhizal partnership was probably essential for the transition of plants from water to land.',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): Clamp connections are found in the dikaryotic mycelium of many Basidiomycetes. Reason (R): Clamp connections ensure that each daughter cell receives one nucleus of each parental mating type during hyphal division.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Clamp connections form at septation in the dikaryotic hyphae of many Basidiomycetes (not rusts and smuts) to ensure precise distribution of both parental nuclei to each daughter cell. Finding clamp connections on a mycelium is diagnostic of dikaryotic Basidiomycete mycelium.',
          },
          {
            q: '[NEET] Lichens are scarce or absent in a heavily industrialised area but abundant in a nearby forest. Explain the biological reason.',
            a: 'Lichens absorb water and minerals directly from the atmosphere through their entire thallus surface and have no protective cuticle or exclusion mechanism. In heavily industrialised areas, sulphur dioxide (SO<sub>2</sub>) from combustion dissolves in rain to form sulphurous acid, which is toxic to the phycobiont (the photosynthetic algal or cyanobacterial partner). Lichens are among the most SO<sub>2</sub>-sensitive organisms, and they die off, becoming scarce or absent, when SO<sub>2</sub> levels are elevated. In the nearby forest, the air is clean and SO<sub>2</sub>-free, so lichens thrive.',
          },
          {
            q: '[CBSE] Give two industrial uses of diatomaceous earth.',
            a: '(a) Filtration of swimming pools, beer, wine and pharmaceutical solutions: the porous silica frustules trap fine suspended particles. (b) Polishing and abrasive in toothpaste and metal polishes. (c) Natural insecticidal dust (food-grade). (d) Soil amendment to improve water retention and drainage.',
          },
          {
            q: '[NEET] Match the following:<br>(a) Clamp connection | (i) Deuteromycetes<br>(b) Heterocyst | (ii) Basidiomycetes<br>(c) Conidia only | (iii) Cyanobacteria<br>(d) Pellicle | (iv) Euglenoid',
            a: '(a)–(ii); (b)–(iii); (c)–(i); (d)–(iv).',
          },
          {
            q: '[NEET] Assertion–Reason: Assertion (A): TMV was the first virus to be crystallised. Reason (R): W.M. Stanley purified and crystallised it in 1935.<br>Choose: (a) Both A and R are true, and R is the correct explanation of A; (b) Both A and R are true, and R is not the correct explanation of A; (c) A is true, R is false; (d) A is false, R is true.',
            a: '<b>(a)</b> Both A and R are true, and R is the correct explanation of A. Stanley’s purification and crystallisation of TMV in 1935 is exactly what made it the first virus to be crystallised.',
          },
          {
            q: '[CBSE] Differentiate between the phycobiont and the mycobiont in a lichen.',
            a: 'The <b>phycobiont</b> is the photosynthetic partner: a green alga (e.g., <i>Trentepohlia</i>) or a cyanobacterium (e.g., <i>Nostoc</i>). It produces carbohydrates by photosynthesis and supplies them to the fungal partner. The <b>mycobiont</b> is the fungal partner: it provides structural support, anchorage, and absorbs water and mineral nutrients from the environment for the partnership.',
          },
          {
            q: '[NEET] Why is Deuteromycetes described as an “imperfect” group? State one consequence of this imperfection.',
            a: 'Deuteromycetes is called an “imperfect” group because fungi are classified by the structures of their sexual (perfect) stage, for example the ascus of Ascomycetes or the basidium of Basidiomycetes. Deuteromycetes are fungi known only from their asexual (imperfect) stage; their sexual stage has never been observed. Consequence: the group is artificial and will shrink as sexual stages are discovered. Once a sexual stage is found, the fungus is reclassified into Ascomycetes or Basidiomycetes and removed from Deuteromycetes.',
          },
        ],
      },
    ],
  },

  // ───────────────────── Additional topic H (the book's Addendum P) · pp. 131 to 141 ─────────────────────
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET and CBSE questions on this chapter show a predictable skew across topics.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET and CBSE questions on this chapter show a predictable skew across topics. The shares below are approximate (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share', 'Signature items'],
        rows: [
          [
            'Kingdom Monera (incl. bacteria, archaea, cyanobacteria, <i>Mycoplasma</i>)',
            '~25 %',
            'No nuclear membrane, <i>Mycoplasma</i> as smallest/wall-less cell, cyanobacteria chlorophyll, archaebacterial habitats, bacterial nutrition modes',
          ],
          [
            'Kingdom Fungi (four classes, sexual cycle)',
            '~20 %',
            'Example → class matching (<i>Rhizopus</i>→Phycomycetes, <i>Penicillium</i>→Ascomycetes, <i>Agaricus</i>→Basidiomycetes, <i>Alternaria</i>→Deuteromycetes), plasmogamy/karyogamy, dikaryophase, clamp connections',
          ],
          [
            'Kingdom Protista (chrysophytes, dinoflagellates, euglenoids, slime moulds, protozoa)',
            '~20 %',
            'Diatom silica wall, <i>Euglena</i> mixotrophy, dinoflagellate flagella, protozoan locomotory structures, slime mould plasmodium',
          ],
          [
            'Five-kingdom framework / Whittaker’s criteria',
            '~15 %',
            'Five criteria (cell structure, body organisation, nutrition, reproduction, phylogeny), two-kingdom limitations, who proposed what',
          ],
          [
            'Viruses, Viroids, Prions, Lichens',
            '~15 %',
            '“DNA or RNA, never both”, viroid discovery, viroid vs virus vs prion composition, lichen phycobiont/mycobiont, virus filter passage',
          ],
          [
            'Kingdom Plantae & Animalia overview',
            '~5 %',
            'Cell wall absence in Animalia, starch vs glycogen, insectivorous plants',
          ],
        ],
      },
      { t: 'p', html: 'Most questions in this chapter map onto the NCERT framework.' },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: 'The archetypes and traps below are the book’s reading of past papers, not an official list.' },
      { t: 'p', html: '<b>1. Fact/Definition MCQ: “Which of the following is/are correct?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single statement or a list of statements labelled (i)–(v), with options like “Only (i)”, “Both (i) and (ii)”, “All of the above.”<br><b>Approach:</b> Scan for the single fact that is unambiguously wrong or for a combination where all statements must be true. For (i)–(v) lists, verify each statement before reading the option codes: do not try to reverse-engineer from the options.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '“Which of the following processes are involved in the reproduction of protists?”<br>(a) Binary fission and budding<br>(b) Cell fusion and zygote formation<br>(c) Spore formation and cyst formation<br>(d) All of the above',
        steps: [
          'Protists reproduce by both asexual means (binary fission in <i>Euglena</i>, budding, cyst formation, sporulation) and sexual means (cell fusion/syngamy, conjugation in ciliates).',
          'All three options describe real reproductive mechanisms found in different protist groups. Verifying each option: binary fission is correct for <i>Euglena</i>; cell fusion is correct for sexual reproduction in many protists; spore formation is correct for slime moulds; cyst formation is correct for <i>Entamoeba</i>. Since all three categories are correct, <b>(d)</b> is the answer.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>2. Group–Feature Matching: “Which group is correctly described by these statements?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A description of 3–5 features is given, and the student must name the group (chrysophytes, euglenoids, phycomycetes, etc.).<br><b>Approach:</b> Jump straight to the <b>cell covering</b> or <b>wall material</b>: it is the fastest discriminator in this chapter. Wall material alone resolves most plant-like protist and fungal class questions.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '“Most of them are freshwater organisms. They have a protein-rich layer called a pellicle which makes their body flexible. They have two flagella, one short and one long. Though photosynthetic in sunlight, they feed heterotrophically in the absence of light. Identify the group.”<br>(a) Protozoans (b) Chrysophytes (c) Slime moulds (d) Euglenoids',
        steps: [
          'The protein pellicle (not a cellulose wall), the two flagella of unequal length, and mixotrophic nutrition in <i>Euglena</i> are its diagnostic hallmarks.',
          'Work the clues in order: “pellicle” immediately rules out chrysophytes (silica wall) and slime moulds (no wall in feeding stage); “photosynthetic in sunlight” rules out protozoans (heterotrophic only). <b>Euglenoids</b> is the only group matching all four descriptors.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>3. Statement-Type (Multi-Statement) MCQ: “Which of the following statements is/are correct?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> 3–5 numbered statements; options combine them (e.g., “Only (i)”, “(i), (iii) and (v)”).<br><b>Approach:</b> Mark each statement T or F independently before looking at the options. Never infer from the option codes: the codes are traps for students who guess.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '“Which of the following statement(s) is/are correct about Ascomycetes?<br>(i) <i>Neurospora</i>, used in biochemical and genetic work, is a member of this class.<br>(ii) They are mostly multicellular, e.g. Yeast, or rarely unicellular, e.g. <i>Penicillium</i>.<br>(iii) They are saprophytic, decomposers, parasitic or coprophilous.<br>(iv) Some examples are <i>Aspergillus</i>, <i>Claviceps</i> and <i>Neurospora</i>.”<br>(a) Both (i) and (ii) (b) Only (ii) (c) (i), (iii) and (iv) (d) All of these',
        steps: [
          'Statement (i) is TRUE: <i>Neurospora</i> is a sac fungus used in genetics/biochemistry.',
          'Statement (ii) is <b>FALSE</b>: Yeast (<i>Saccharomyces</i>) is unicellular; <i>Penicillium</i> is multicellular. The statement has the examples reversed (yeast = unicellular, <i>Penicillium</i> = multicellular).',
          'Statement (iii) is TRUE: ascomycetes show all these nutritional modes.',
          'Statement (iv) is TRUE: all three are ascomycetes.',
          'Since (ii) is false but (i), (iii) and (iv) are true, the correct option is <b>(c)</b>; the error in (ii) is the reason the answer is not “(d)”.',
        ],
        ans: '(c)',
      },

      { t: 'p', html: '<b>4. Assertion–Reason: “Both A and R are true, and R is the correct explanation of A”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A statement of Assertion (A) followed by a Reason (R); four combinations (a)–(d).<br><b>Approach:</b> Three-step process:<br>1. Is A true?<br>2. Is R true?<br>3. Does R <b>directly cause</b> A, or are they both true but unrelated statements?',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> <i>Euglena</i> is placed in Kingdom Protista.<br><b>Reason (R):</b> <i>Euglena</i> possesses chlorophyll.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          'A is <b>true</b>: <i>Euglena</i> is a unicellular, flagellated eukaryote with a protein pellicle instead of a cellulose wall, and it is placed in Protista.',
          'R is <b>true</b>: <i>Euglena</i> has chlorophyll and photosynthesises in light.',
          'However, R does <b>not</b> explain A: chlorophyll alone does not decide the kingdom (it would point towards Plantae). <i>Euglena</i> is a protist because it is unicellular, motile, lacks a cellulose wall and is also able to feed heterotrophically. Both statements are true but R is not the explanation, making <b>(b)</b> the correct choice.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>5. Matching Column: “Match the class with its example”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns of 4–5 items each; the student must pair A→II, B→IV, etc.<br><b>Approach:</b> Memorise the <b>four fungal class names and their diagnostic anchors</b> before the exam. The common names encode the diagnosis:',
      },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Common name', 'Key diagnostic', 'Example'],
        rows: [
          ['Phycomycetes', 'Algal fungi', 'Aseptate/coenocytic mycelium', '<i>Rhizopus</i>, <i>Mucor</i>, <i>Albugo</i>'],
          ['Ascomycetes', 'Sac fungi', 'Ascospores <b>inside</b> an ascus', '<i>Penicillium</i>, <i>Aspergillus</i>, <i>Neurospora</i>'],
          ['Basidiomycetes', 'Club fungi', 'Basidiospores <b>outside</b> on a basidium', '<i>Agaricus</i>, <i>Puccinia</i>, <i>Ustilago</i>'],
          ['Deuteromycetes', 'Fungi imperfecti', 'Sexual stage absent; conidia only', '<i>Alternaria</i>, <i>Trichoderma</i>'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the class of fungi in Column-I with its common name in Column-II.<br><br>Column-I | Column-II<br>A. Phycomycetes | I. Sac fungi<br>B. Ascomycetes | II. Algal fungi<br>C. Basidiomycetes | III. Fungi imperfecti<br>D. Deuteromycetes | IV. Club fungi<br><br>(a) A–II, B–I, C–IV, D–III<br>(b) A–II, B–IV, C–I, D–III<br>(c) A–IV, B–I, C–II, D–III<br>(d) A–IV, B–III, C–II, D–I',
        steps: [
          'Phycomycetes = algal fungi (coenocytic mycelium resembles algae); Ascomycetes = sac fungi (ascospores in a sac); Basidiomycetes = club fungi (basidiospores on a club-shaped basidium); Deuteromycetes = fungi imperfecti (sexual stage absent).',
        ],
        ans: '(a)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What the question does', 'How to beat it'],
        rows: [
          [
            '<b>“Viruses cannot pass through bacterial filters”</b>',
            'An option states this as a property of viruses; the true statement is that viruses do pass through bacterial filters (they are smaller)',
            'Know that “filterable” was how viruses were first defined: they pass through filters that stop bacteria',
          ],
          [
            '<b>“Methane is the preferred carbon source for methanogens”</b>',
            'Makes methane sound like food for methanogens; it is actually a <b>waste product</b> (the end product of their anaerobic metabolism), not a carbon source',
            'Methanogens are anaerobic archaebacteria that produce methane (for example from CO<sub>2</sub> and H<sub>2</sub>)',
          ],
          [
            '<b>“TMV has a double-stranded RNA”</b>',
            'In an “incorrect statement” question, students who don’t know TMV is ssRNA may pick the wrong option',
            'TMV = Tobacco Mosaic Virus = single-stranded RNA; remember one dsRNA example: Reovirus',
          ],
          [
            '<b>A virus has DNA or RNA, never both</b>',
            'Students who forget “never both” may pick the wrong option',
            'The defining rule: a virus carries <b>exactly one</b> nucleic acid type, never both DNA and RNA',
          ],
          [
            '<b>Yeast is a multicellular fungus; <i>Penicillium</i> is unicellular</b>',
            'The statement pairs the wrong examples with cellularity',
            'Yeast = unicellular ascomycete; <i>Penicillium</i> = multicellular ascomycete',
          ],
          [
            '<b>“<i>Euglena</i> is a plant because it has chlorophyll”</b>',
            'Students see chlorophyll and jump to Plantae, forgetting the other features of <i>Euglena</i>',
            '<i>Euglena</i> is placed in Protista (unicellular, flagellated, pellicle instead of a cellulose wall, mixotrophic); chlorophyll alone does not decide the kingdom',
          ],
          [
            '<b>“Cyanobacteria are chemosynthetic autotrophs”</b>',
            'The incorrect statement in a standard item; cyanobacteria are <b>photosynthetic</b> autotrophs (like plants)',
            'Chemosynthetic = oxidising inorganic chemicals for energy (nitrifying bacteria, sulphur bacteria); cyanobacteria use light',
          ],
          [
            '<b>“<i>Albugo</i> is a chrysophyte”</b>',
            'A “not correctly matched” pair to identify',
            '<i>Albugo</i> is a phycomycete fungus (causes white rust of mustard); <i>Gonyaulax</i> (dinoflagellate), <i>Anabaena</i> (cyanobacteria), <i>Amoeba</i> (protozoan) are all correctly matched',
          ],
          [
            '<b>Pili vs fimbriae</b>',
            'NEET tests F-plasmid transfer via pili (conjugation)',
            'Fimbriae = attachment; Pili (sex pili) = conjugation bridge for gene transfer',
          ],
          [
            '<b>“Plasmogamy is fusion of two nuclei”</b>',
            'The two steps are swapped',
            '<b>Plasmo</b> = protoplasm (cytoplasm) fusion; <b>Karyo</b> = nucleus fusion; plasmo comes first',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Q1: Recall (Easy)] Which scientist proposed the five-kingdom classification system?<br>(a) Linnaeus (b) Aristotle (c) R.H. Whittaker (d) Carl Woese',
            a: '<b>Answer: (c).</b> R.H. Whittaker (1969) proposed Monera, Protista, Fungi, Plantae, Animalia. Linnaeus gave the two-kingdom system; Aristotle made the earliest morphological grouping; Woese later proposed the three domains.',
          },
          {
            q: '[Q2: Recall (Easy)] The smallest living organism that completely lacks a cell wall and can survive without oxygen is:<br>(a) <i>Mycoplasma</i> (b) Mycorrhiza (c) <i>Euglena</i> (d) <i>Trypanosoma</i>',
            a: '<b>Answer: (a).</b> <i>Mycoplasma</i> is the smallest known cell, has no cell wall, and can survive without oxygen, unaffected by penicillin (which targets cell-wall synthesis). Mycorrhiza is a fungus–root symbiosis; <i>Euglena</i> is a euglenoid protist with a pellicle; <i>Trypanosoma</i> is a flagellated protozoan.',
          },
          {
            q: '[Q3: Application (Medium)] A student observes an organism under a microscope: it is unicellular, eukaryotic, has a flexible protein-rich pellicle, two flagella of unequal length, and can photosynthesise in light but feeds on other organisms in darkness. To which kingdom does it belong?<br>(a) Monera (b) Protista (c) Fungi (d) Plantae',
            a: '<b>Answer: (b).</b> The pellicle (not a wall), mixotrophic nutrition, two flagella, and unicellular eukaryotic body are the diagnostic features of <b>euglenoids</b> (<i>Euglena</i>), placed in Kingdom Protista. Monera is prokaryotic; Fungi are absorptive heterotrophs with chitin walls; Plantae are autotrophs with cellulose walls.',
          },
          {
            q: '[Q4: Application (Medium)] A fungus is found with septate mycelium. It reproduces asexually by conidia produced exogenously on a conidiophore. Its sexual spores are ascospores formed endogenously inside an ascus. The fruiting body is an ascocarp. Which class does it belong to?<br>(a) Phycomycetes (b) Ascomycetes (c) Basidiomycetes (d) Deuteromycetes',
            a: '<b>Answer: (b).</b> Septate mycelium rules out Phycomycetes (aseptate); the presence of a sexual stage rules out Deuteromycetes (sexual stage absent); endogenous ascospores inside an ascus is the <b>Ascomycete</b> signature.',
          },
          {
            q: '[Q5: Application (Medium)] A fungus is found growing on decaying wood in moist conditions. Its mycelium is aseptate and coenocytic. Asexual reproduction occurs by zoospores (motile) or aplanospores (non-motile). What is the class?<br>(a) Ascomycetes (b) Phycomycetes (c) Basidiomycetes (d) Deuteromycetes',
            a: '<b>Answer: (b).</b> Aseptate, coenocytic mycelium is the defining feature of <b>Phycomycetes</b> (algal fungi). Zoospores and aplanospores in sporangia are the asexual reproductive markers for this class. Examples: <i>Mucor</i>, <i>Rhizopus</i>, <i>Albugo</i>.',
          },
          {
            q: '[Q6: Analysis (Medium-Hard)] Which of the following statements about dikaryon formation is correct?<br>(a) It occurs in Phycomycetes and Basidiomycetes<br>(b) It occurs in Ascomycetes and Basidiomycetes<br>(c) It occurs in Phycomycetes and Ascomycetes<br>(d) It occurs in all four classes of fungi',
            a: '<b>Answer: (b).</b> Dikaryon (n + n) formation, where karyogamy is delayed after plasmogamy, is characteristic of <b>Ascomycetes and Basidiomycetes</b> only. In Phycomycetes, nuclear fusion occurs promptly after plasmogamy, so no persistent dikaryophase forms. Deuteromycetes have no known sexual stage.',
          },
          {
            q: '[Q7: Analysis (Medium-Hard)] Consider the following statements about <i>Mycoplasma</i>:<br>(i) It has no cell wall.<br>(ii) It is the smallest living organism known.<br>(iii) It cannot survive without O<sub>2</sub>.<br>(iv) It is pathogenic in animals and plants.<br>(v) It reproduces mainly by binary fission.<br>Which of the following is correct?<br>(a) Only (iii) (b) (i), (iii) and (v) (c) (i), (ii), (iv) and (v) (d) All of the above',
            a: '<b>Answer: (c).</b><br>• Statement (i) is TRUE: no cell wall is the defining feature.<br>• Statement (ii) is TRUE: <i>Mycoplasma</i> is the smallest known living cell.<br>• Statement (iii) is <b>FALSE</b>: <i>Mycoplasma</i> <b>can survive without O<sub>2</sub></b> (NCERT), so it is not dependent on oxygen.<br>• Statement (iv) is TRUE: it causes diseases in animals (e.g., atypical pneumonia) and plants (e.g., little leaf of brinjal, caused by a <i>Mycoplasma</i>-like phytoplasma).<br>• Statement (v) is TRUE: like other bacteria, <i>Mycoplasma</i> multiplies mainly by binary fission.<br>Since (iii) is false but (i), (ii), (iv) and (v) are all true, the correct option is <b>(c)</b>.',
          },
          {
            q: '[Q8: Evaluation (Hard)] <b>Assertion (A):</b> Viruses are not included in Whittaker’s five-kingdom classification.<br><b>Reason (R):</b> Viruses are acellular and metabolically inert outside a host cell, lacking the cellular organisation on which the five-kingdom scheme is based.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
            a: '<b>Answer: (a).</b><br>• A is <b>true</b>: viruses, viroids and lichens are all excluded from the five kingdoms.<br>• R is <b>true</b>: viruses have no cell membrane, no cytoplasm, no organelles; they are crystallisable and metabolically inert outside a host.<br>• R <b>directly explains</b> A: Whittaker’s five criteria (cell structure, body organisation, nutrition, reproduction, phylogenetic relationships) all require a cell; viruses have no cell to evaluate against any criterion. The causal link is tight.<br>Therefore: both true, R explains A → <b>(a)</b>.',
          },
          {
            q: '[Q9: Evaluation (Hard)] <b>Assertion (A):</b> <i>Cuscuta</i> is included in Kingdom Plantae even though it has almost lost its chlorophyll.<br><b>Reason (R):</b> Kingdom membership is decided by overall cellular and structural organisation, not by nutrition alone.<br>(a) Both A and R true, R is the correct explanation of A<br>(b) Both A and R true, R is not the correct explanation of A<br>(c) A true, R false<br>(d) A false, R true',
            a: '<b>Answer: (a).</b><br>• A is <b>true</b>: <i>Cuscuta</i> (dodder, Amarbel) is a parasitic plant that has almost lost its chlorophyll, yet it belongs to Kingdom Plantae.<br>• R is <b>true</b>: classification follows cell type, body organisation and ancestry; largely losing one feature (photosynthesis) does not move an organism to a different kingdom.<br>• R <b>explains</b> A: <i>Cuscuta</i> retains the plant body plan (cell wall, tissues, vascular tissue for drawing sap from the host) despite almost losing its chlorophyll, so it is classified by structure, not by its heterotrophic mode.<br>Both true, R explains A → <b>(a)</b>.',
          },
          {
            q: '[Q10: Evaluation (Hard)] Which of the following statements is <b>incorrect</b> about cyanobacteria?<br>(a) They are also called blue-green algae.<br>(b) They are chemosynthetic autotrophs.<br>(c) They form blooms in polluted water bodies.<br>(d) They are unicellular, colonial or filamentous, marine or terrestrial bacteria.',
            a: '<b>Answer: (b).</b> The <b>incorrect</b> statement is (b). Cyanobacteria are <b>photosynthetic autotrophs</b>: they possess chlorophyll <i>a</i> and perform oxygenic photosynthesis like plants. They are not chemosynthetic (that category includes nitrifying bacteria, sulphur bacteria, etc., which oxidise inorganic chemicals for energy). Statements (a), (c) and (d) are all correct: cyanobacteria are indeed called blue-green algae (an older name); they form freshwater algal blooms; and they exist in unicellular, colonial and filamentous forms in marine and terrestrial habitats.',
          },
        ],
      },
    ],
  },
];
