import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 1, Additional topics C, D and E, word for word from the Class 11
 * Biology Master Reference: C "The Dichotomous Key" (opens at the foot of p. 42, after
 * Addendum B's practice answers; its own answers end at the top of p. 46, where
 * Addendum D begins), D "The Kingdom Systems: Whittaker’s Five Kingdoms and the Six-Kingdom
 * Update" (pp. 46–51; its practice answers end partway down p. 51) and E "What NEET
 * Actually Asks" (the book’s "Addendum P", p. 51 to p. 62). Page 63 is the next chapter.
 *
 * Tables the book prints INSIDE a worked example or a practice question (the herbarium
 * table, the vertebrate character matrix, the insect matrix, the partly filled kingdom
 * table, the Column I / Column II lists) cannot be a table block there, so they are set as
 * lines of cells separated by " | " inside that question or step. The book’s example
 * headings ("Worked Example C.1 - [NEET level] Using a Provided Key") become the example’s
 * tag (the bracket) and a bold lead on its question (the words after it). E’s graded
 * practice set is one practice block whose level headings are each item’s tag.
 * Scientific names are italic; common names (shark, frog, silverfish) are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 42–46 ─────────────────────────
  {
    n: 'C',
    title: 'The Dichotomous Key',
    extra: true,
    kalam: 'A series of paired statements (couplets), each presenting two alternative characteristics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 introduces identification as the first step of taxonomy: determining that a given organism corresponds to an already-known, correctly described organism. The chapter gives no method for doing this. The dichotomous key is the standard tool, and NEET occasionally asks about taxonomic keys and the term “couplet” (older NCERT editions listed the key among taxonomical aids).',
      },

      { t: 'part', title: 'Dichotomous Keys: Concept and Construction' },
      {
        t: 'p',
        html: '<b>What a dichotomous key is.</b><br>• A series of paired statements (couplets), each presenting two alternative characteristics.<br>• You read a couplet, decide which statement fits your specimen, and follow the instruction (usually “go to couplet X”).<br>• You continue until you reach a name: the organism’s identification.<br>• The key always presents mutually exclusive choices: the specimen either has the character or it does not.<br>• Key rules:<br>1. Each couplet should use characters that are easily observable in the specimen.<br>2. Characters must be genuinely mutually exclusive (one or the other, not both).<br>3. Avoid vague terms (“usually,” “often”); use precise contrasts.<br>4. Start with broad, easily seen characters before narrowing to specific ones.',
      },
      {
        t: 'p',
        html: '<b>Construction (step-by-step).</b> 1. Gather a suite of specimens and record a character matrix (which character each specimen has). 2. Find the character that splits the specimens into two groups, as even as possible. 3. Write couplet 1: statement A for group 1, statement B for group 2. 4. For each subgroup, repeat: find the next most discriminating character. 5. Continue until each group contains only one species/taxon. 6. Check: every couplet must lead unambiguously to a name.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Using a Provided Key.</b> A plant herbarium sheet lists four species with these characters:<br><br>| <i>Azadirachta indica</i> (neem) | <i>Ocimum sanctum</i> (tulsi) | <i>Mangifera indica</i> (mango) | <i>Coriandrum sativum</i> (coriander)<br>Leaf arrangement | Alternate | Opposite | Alternate | Alternate<br>Leaf type | Pinnately compound | Simple | Simple | Pinnately compound<br>Fruit type | Drupe | Nutlets | Drupe | Schizocarp<br>Inflorescence | Panicle | Verticillaster | Panicle | Umbel<br><br>Use the following dichotomous key (it separates all four species) to identify species P and Q:<br><br><b>Couplet 1:</b> (a) Leaves opposite … <i>Ocimum sanctum</i><br>(b) Leaves alternate … go to 2<br><b>Couplet 2:</b> (a) Fruit a drupe … go to 3<br>(b) Fruit a schizocarp … <i>Coriandrum sativum</i><br><b>Couplet 3:</b> (a) Leaves simple … <i>Mangifera indica</i><br>(b) Leaves pinnately compound … <i>Azadirachta indica</i><br><br><b>Identify P and Q</b> given:<br>P: Leaves alternate, simple, fruit a drupe, inflorescence a panicle.<br>Q: Leaves alternate, pinnately compound, fruit a drupe.',
        steps: [
          '<b>Step-by-step for P.</b><br>• Couplet 1: leaves alternate → go to 2.<br>• Couplet 2: fruit a drupe → go to 3.<br>• Couplet 3: leaves simple → <i>Mangifera indica</i> (mango).',
          '<b>Step-by-step for Q.</b><br>• Couplet 1: leaves alternate → go to 2.<br>• Couplet 2: fruit a drupe → go to 3.<br>• Couplet 3: leaves pinnately compound → <i>Azadirachta indica</i> (neem).',
        ],
        ans: 'P = <i>Mangifera indica</i> (mango); Q = <i>Azadirachta indica</i> (neem).',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS',
        q: '<b>Constructing a Key.</b> Construct a dichotomous key to distinguish the following five vertebrate specimens: shark (fish), frog (amphibian), lizard (reptile), pigeon (bird), rabbit (mammal).',
        steps: [
          '<b>Step 1: Build the character matrix.</b><br>Character | Shark | Frog | Lizard | Pigeon | Rabbit<br>Vertebral column | Yes | Yes | Yes | Yes | Yes<br>Jaws | Yes | Yes | Yes | Yes | Yes<br>Gills (in adult) | Yes | No | No | No | No<br>Moist skin | No | Yes | No | No | No<br>Scales | Yes (placoid) | No | Yes | Yes | No<br>Feather/feather-derived | No | No | No | Yes | No<br>Hair/fur | No | No | No | No | Yes<br>Mammary glands | No | No | No | No | Yes<br>Cold-blooded | Yes | Yes | Yes | No | No<br>Two-chambered heart | Yes | No | No | No | No<br>Three-chambered heart | No | Yes | Yes | No | No<br>Four-chambered heart | No | No | No | Yes | Yes',
          '<b>Step 2: Find the most discriminating first split.</b> Hair (with mammary glands) separates rabbit (yes) from all others (no). Feather separates pigeon (yes) from all others (no). Gills separate shark (yes) from all others (no). Any of these could start; gills is cleanest because it is binary (present/absent) and immediately splits off one taxon.',
          '<b>Constructed key.</b><br><b>1.</b> (a) Gills present in adult … Shark (fish)<br>(b) Gills absent … go to 2<br><b>2.</b> (a) Body covered with hair; mammary glands present … Rabbit (mammal)<br>(b) Body not covered with hair … go to 3<br><b>3.</b> (a) Body covered with feathers … Pigeon (bird)<br>(b) Body not covered with feathers … go to 4<br><b>4.</b> (a) Moist skin, no scales … Frog (amphibian)<br>(b) Dry skin with scales … Lizard (reptile)',
          '<b>Verification.</b> Shark → gills present → Shark.<br>Frog → no gills → no hair → no feathers → moist skin, no scales → Frog.<br>Lizard → no gills → no hair → no feathers → dry scaly skin → Lizard.<br>Pigeon → no gills → no hair → feathers → Pigeon.<br>Rabbit → no gills → hair present → Rabbit.',
          'All five are correctly isolated.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two rules that should be followed while constructing a dichotomous key.',
            a: '(i) Each couplet must present two mutually exclusive choices: the organism either has the character or it does not, with no intermediate or ambiguous state. (ii) Characters used in couplets must be easily observable (preferably without a microscope or chemical test) in the specimens being identified.',
          },
          {
            q: '[CBSE] What is meant by a “couplet” in a dichotomous key?',
            a: 'A couplet is a pair of alternative statements in a dichotomous key. Each couplet presents two contrasting characteristics; the user selects whichever statement matches the specimen and follows the direction given.',
          },
          {
            q: '[NEET] A student uses a dichotomous key and reads: “(a) Flower colour blue: go to 3; (b) Flower colour not blue: go to 4.” The student’s specimen has a purple flower. Which branch should she follow? Give a reason.',
            a: 'She should follow (b), “flower colour not blue.” Purple is not blue, so the specimen does not satisfy statement (a). The key proceeds to couplet 4.',
          },
          {
            q: '[NEET] A key leads to an organism labelled “unknown” but the couplet directs the student to go to couplet 7, which is blank. What does this indicate about the unknown organism?',
            a: 'The blank couplet indicates the key is incomplete or the specimen falls outside the range of organisms covered by the key. The taxonomist cannot complete the identification with this key and needs a more comprehensive one.',
          },
          {
            q: '[CBSE HOTS] Four insect specimens have the following character matrix. Construct a dichotomous key to identify them.<br><br>Specimen | Wings | Mouthpart | Metamorphosis<br>Butterfly | Scaled wings | Siphoning | Complete<br>Housefly | membranous wings | Sponging/licking | Complete<br>Silverfish | Absent | Chewing | None (wingless from birth)<br>Dragonfly | Membranous wings | Chewing | Incomplete',
            a: '<b>Key construction:</b><br><b>1.</b> (a) Wings absent … Silverfish<br>(b) Wings present … go to 2<br><b>2.</b> (a) Wings covered with scales; mouthparts siphoning … Butterfly<br>(b) Membranous wings (no scales) … go to 3<br><b>3.</b> (a) Mouthparts sponging/licking; complete metamorphosis … Housefly<br>(b) Mouthparts chewing; incomplete metamorphosis … Dragonfly',
          },
          {
            q: '[NEET high-difficulty] A taxonomist is given a plant specimen with the following features: woody stem, needle-like leaves, seeds not enclosed in fruit (naked seeds), no flowers. Use the dichotomous key logic to identify it and state which taxonomic category (division, class, family, genus or species) can be identified at minimum.',
            a: 'Woody stem + needle-like leaves + naked seeds (not enclosed in fruit) + no flowers = Gymnosperm. The minimum identifiable category is the division (Gymnospermae, the gymnosperms), possibly the class of conifers; the family, genus or species cannot be determined from these four characters alone without more characters (cone type, leaf arrangement).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 46–51 ─────────────────────────
  {
    n: 'D',
    title: 'The Kingdom Systems: Whittaker’s Five Kingdoms and the Six-Kingdom Update',
    extra: true,
    kalam: 'Whittaker (1969) classified all organisms into five kingdoms using these criteria.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 mentions classification systems but names only three (artificial, natural, phylogenetic) without giving the five-kingdom table. Topic 02 begins the hierarchy at species, giving the seven categories but never showing how the major kingdoms (Monera, Protista, Fungi, Plantae, Animalia) sit within it. NEET often asks for the five-kingdom criteria and kingdom assignments for individual organisms (bacteria, fungi, algae, moss, fern, gymnosperm, angiosperm). This additional topic fills the table.',
      },

      { t: 'part', title: 'Whittaker’s Five-Kingdom System' },
      {
        t: 'p',
        html: 'Whittaker (1969) classified all organisms into five kingdoms using these criteria:<br>1. <b>Cell structure</b>: Prokaryotic (no nuclear membrane, no membrane-bound organelles) vs Eukaryotic (true nucleus, membrane-bound organelles).<br>2. <b>Body (thallus) organisation</b>: Unicellular, colonial or filamentous vs Multicellular.<br>3. <b>Mode of nutrition</b>: Autotrophic (photosynthesis, chemosynthesis) vs Heterotrophic (absorbing or ingesting food).<br>4. <b>Reproduction</b>: mainly asexual in Monera; asexual and sexual in Protista, Fungi and Plantae; mainly sexual in Animalia (binary fission in bacteria, budding and spores in fungi).<br>5. <b>Phylogenetic relationships</b>: kinship by evolutionary descent.',
      },
      {
        t: 'table',
        title: null,
        head: ['Criterion', 'Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia'],
        rows: [
          ['Cell type', 'Prokaryotic', 'Eukaryotic', 'Eukaryotic', 'Eukaryotic', 'Eukaryotic'],
          [
            'Organisation',
            'Unicellular (cyanobacteria may be filamentous)',
            'Unicellular, colonial',
            'Multicellular, filamentous (some unicellular, e.g. yeast)',
            'Multicellular (some algae unicellular)',
            'Multicellular',
          ],
          [
            'Nutrition',
            'Autotrophic OR heterotrophic',
            'Autotrophic OR heterotrophic',
            'Heterotrophic (absorptive)',
            'Autotrophic (photosynthetic)',
            'Heterotrophic (ingestive)',
          ],
          ['Cell wall', 'Non-cellulosic (polysaccharide + amino acid); peptidoglycan in true bacteria, absent in archaebacteria; absent in mycoplasma', 'Present in some', 'Chitin', 'Cellulose', 'Absent'],
          ['Nuclear membrane', 'Absent', 'Present', 'Present', 'Present', 'Present'],
          [
            'Example',
            '<i>Nostoc</i>, <i>Azotobacter</i>',
            '<i>Amoeba</i>, <i>Paramecium</i>, <i>Euglena</i>',
            '<i>Agaricus</i>, <i>Penicillium</i>',
            '<i>Mangifera</i>, <i>Triticum</i>, <i>Funaria</i>',
            '<i>Homo</i>, <i>Musca</i>, <i>Hydra</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The six-kingdom update: Carl Woese.</b> From 1977 Carl Woese (with George Fox) analysed 16S rRNA, which splits Monera into two kingdoms, giving the six kingdoms commonly credited to Woese in NEET material (in 1990 Woese went further and proposed three domains: Archaea, Bacteria, Eukarya).<br>• <b>Archaebacteria</b> (Archaea): Ancient bacteria; different membrane lipids (ether linkages, branched-chain), peptidoglycan absent; live in harsh habitats such as salty areas (halophiles) and hot springs (thermoacidophiles), and in marshes and the gut of ruminants (methanogens).<br>• <b>Eubacteria</b> (Bacteria): “True” bacteria; membrane lipids with ester linkages, peptidoglycan present; include cyanobacteria.',
      },
      {
        t: 'p',
        html: 'Both are prokaryotic kingdoms. The five-kingdom system treats both as Monera; the six-kingdom system separates them. NCERT Class 11 teaches Whittaker’s five kingdoms and names Archaebacteria and Eubacteria within Monera; the six-kingdom label and Woese’s name are extra, but they appear in statement items.',
      },
      { t: 'p', html: '<b>Kingdom assignments for examinable organisms.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Organism', 'Kingdom', 'Basis'],
        rows: [
          ['<i>Nostoc</i> (cyanobacterium)', 'Monera', 'Prokaryotic, filamentous/colonial, nitrogen-fixing (heterocysts)'],
          ['<i>Azotobacter</i> (bacterium)', 'Monera', 'Prokaryotic, free-living nitrogen fixer'],
          ['<i>Anabaena</i> (cyanobacterium)', 'Monera', 'Prokaryotic, photosynthetic'],
          ['<i>Amoeba</i>', 'Protista', 'Eukaryotic, unicellular, heterotrophic, no cell wall'],
          ['<i>Paramecium</i>', 'Protista', 'Eukaryotic, unicellular, ciliated, heterotrophic'],
          [
            '<i>Chlorella</i>',
            'Plantae',
            'Eukaryotic, unicellular green alga (Chlorophyceae), photosynthetic, cellulose cell wall',
          ],
          ['<i>Euglena</i>', 'Protista', 'Eukaryotic, photosynthetic + heterotrophic (mixotroph)'],
          ['<i>Penicillium</i>', 'Fungi', 'Eukaryotic, multicellular, chitin cell wall, absorptive heterotrophic'],
          ['<i>Agaricus</i> (mushroom)', 'Fungi', 'Eukaryotic, multicellular, chitin cell wall'],
          ['<i>Saccharomyces</i> (yeast)', 'Fungi', 'Eukaryotic, unicellular, cell wall of glucans and mannans with some chitin'],
          [
            '<i>Spirogyra</i>',
            'Plantae',
            'Eukaryotic, filamentous green alga (Chlorophyceae), photosynthetic, cellulose cell wall',
          ],
          [
            '<i>Funaria</i> (moss)',
            'Plantae',
            'Eukaryotic, multicellular, photosynthetic, cell wall cellulose, land plant, bryophyte',
          ],
          [
            '<i>Dryopteris</i> (fern)',
            'Plantae',
            'Eukaryotic, multicellular, photosynthetic, vascular tissue, pteridophyte',
          ],
          ['<i>Pinus</i> (pine)', 'Plantae', 'Eukaryotic, multicellular, photosynthetic, naked seeds, gymnosperm'],
          [
            '<i>Mangifera</i> (mango)',
            'Plantae',
            'Eukaryotic, multicellular, photosynthetic, flowering plant, angiosperm',
          ],
          ['<i>Triticum</i> (wheat)', 'Plantae', 'Eukaryotic, multicellular, photosynthetic, monocot, angiosperm'],
          ['<i>Homo sapiens</i>', 'Animalia', 'Eukaryotic, multicellular, heterotrophic, no cell wall, ingestive'],
          ['<i>Hydra</i>', 'Animalia', 'Eukaryotic, multicellular, heterotrophic, no cell wall'],
          ['<i>Musca</i> (housefly)', 'Animalia', 'Eukaryotic, multicellular, heterotrophic, insects'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Kingdom from Characters.</b> An organism has the following features: eukaryotic cell, multicellular, cell wall made of chitin, heterotrophic by absorption, reproductive spores. Identify its kingdom and give two examples.',
        steps: [
          '<b>Analysis.</b><br>• Eukaryotic + chitin cell wall → Fungi.<br>• Multicellular + heterotrophic by absorption (saprophytic/parasitic) → Fungi (distinct from animals which ingest and plants which photosynthesise).<br>• Spores are the usual reproductive units of fungi, but only chitin plus absorptive nutrition decide the kingdom.',
        ],
        ans: 'Kingdom Fungi. Examples: <i>Agaricus</i> (mushroom), <i>Penicillium</i>.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Five Kingdom Classification Table.</b> The table below is partly filled. Complete it:<br><br>Feature | Monera | Protista | Fungi | Plantae | Animalia<br>Cell type | Prokaryotic | Eukaryotic | Eukaryotic | Eukaryotic | Eukaryotic<br>Cell wall | Non-cellulosic | (i) | Chitin | Cellulose | Absent<br>Nutrition | Autotrophic or heterotrophic | Autotrophic or heterotrophic | Heterotrophic | (ii) | Heterotrophic<br>Level of organisation | Unicellular | (iii) | Multicellular | Multicellular | Multicellular<br><br>Fill in (i), (ii), and (iii).',
        steps: [
          '<b>Analysis.</b> (i) Protista cell wall: varies; some protists have a wall or covering (diatoms have silica walls, dinoflagellates have cellulose plates, <i>Paramecium</i> and <i>Euglena</i> have a flexible pellicle), while others (<i>Amoeba</i>) have only a plasma membrane. The most accurate answer is “present in some (varies).” (ii) Plantae nutrition: autotrophic (photosynthetic). The defining feature of plants. (iii) Protista level of organisation: unicellular or colonial. Most protists are unicellular; a few form colonies. The standard answer is “unicellular/colonial.”',
        ],
        ans: '(i) Present in some (varies); (ii) Autotrophic (photosynthetic); (iii) Unicellular/colonial.',
      },
      {
        t: 'ex',
        tag: 'CBSE HOTS / Assertion–Reason',
        q: 'Assertion (A): In the five-kingdom classification system, bacteria are placed in Kingdom Monera along with cyanobacteria. Reason (R): Both bacteria and cyanobacteria are prokaryotic organisms.<br><br>Choose: <b>(1)</b> Both A and R true, R explains A. <b>(2)</b> Both true, R not the explanation. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [
          '<b>Analysis.</b> A is true: bacteria and cyanobacteria are both placed in Kingdom Monera in Whittaker’s five-kingdom system. R is also true: both are prokaryotic (no nuclear membrane, no membrane-bound organelles). R is the correct explanation: the shared prokaryotic cell organisation is precisely why Whittaker placed them in the same kingdom.',
        ],
        ans: '(1) Both A and R true, R explains A.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the five kingdoms of Whittaker’s classification and state one distinguishing feature of each.',
            a: '(i) Monera: prokaryotic, unicellular, non-cellulosic cell wall (peptidoglycan in true bacteria); (ii) Protista: eukaryotic, mostly unicellular, varied nutrition; (iii) Fungi: eukaryotic, chitin cell wall, absorptive heterotrophic; (iv) Plantae: eukaryotic, cell wall cellulose, photosynthetic autotrophic; (v) Animalia: eukaryotic, no cell wall, heterotrophic ingestive.',
          },
          {
            q: '[NEET] Which kingdom includes organisms that are photosynthetic, eukaryotic, and multicellular with cell walls made of cellulose? (a) Fungi, (b) Protista, (c) Plantae, (d) Monera.',
            a: '(c) Plantae.',
          },
          {
            q: '[NEET] The six-kingdom system is based on: (a) morphological characters only, (b) numerical taxonomy, (c) 16S rRNA sequence analysis, (d) ecological niche.',
            a: '(c) 16S rRNA sequence analysis. Carl Woese used ribosomal RNA sequencing to reveal the deep split within Monera.',
          },
          {
            q: '[CBSE] State the basis of separating Monera into Archaebacteria and Eubacteria in the six-kingdom system.',
            a: 'Archaebacteria and Eubacteria are separated based on differences in cell wall composition (Archaebacteria lack peptidoglycan), membrane lipid structure (ether linkages in Archaea vs ester in Bacteria), and 16S rRNA sequence analysis showing two deeply separate prokaryotic lineages (archaea are in fact closer to eukaryotes than to bacteria).',
          },
          {
            q: '[NEET high-difficulty] Classify the following organisms to kingdom level: (a) <i>Nostoc</i>, (b) <i>Amoeba</i>, (c) <i>Penicillium</i>, (d) <i>Dryopteris</i> (fern), (e) <i>Homo sapiens</i>.',
            a: '(a) <i>Nostoc</i>: Monera (prokaryotic cyanobacterium); (b) <i>Amoeba</i>: Protista (eukaryotic, unicellular, no cell wall, heterotrophic); (c) <i>Penicillium</i>: Fungi (eukaryotic, chitin cell wall, multicellular, absorptive heterotrophic); (d) <i>Dryopteris</i>: Plantae (eukaryotic, vascular plant, pteridophyte); (e) <i>Homo sapiens</i>: Animalia (eukaryotic, multicellular, no cell wall, heterotrophic ingestive).',
          },
          {
            q: '[NEET high-difficulty] Evaluate: “The five-kingdom system of classification is outdated because it has been replaced by the six-kingdom system.” Is this statement fully correct, partially correct, or incorrect? Justify.',
            a: 'Partially correct. The five-kingdom system is conceptually the foundation and is the system most commonly examined in CBSE/NEET at Class 11 level. The six-kingdom system (Woese) is a refinement that splits Monera, but this refinement is primarily relevant for understanding prokaryotic phylogeny at a deeper level. NCERT textbooks continue to use the five-kingdom framework as the primary classification tool for Class 11 biology. Therefore the statement is partially correct: the six-kingdom system is more accurate phylogenetically, but the five-kingdom system remains the standard framework for school-level biology and NEET examination.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E (the book’s Addendum P) · pp. 51–62 ─────────────────────────
  {
    n: 'E',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'A genuine defining property must pass both failure gates (no non-living thing shows it; no living thing lacks it).',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Three topics recur in NEET questions on this chapter (the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share'],
        rows: [
          [
            '<b>Characteristics of Living Organisms</b> (metabolism, growth, reproduction, consciousness)',
            '~35–40 %',
          ],
          ['<b>Biodiversity & Nomenclature</b> (binomial nomenclature, ICBN/ICZN, taxonomic terms)', '~30–35 %'],
          [
            '<b>Taxonomic Hierarchy</b> (order of categories, taxon vs category, monotypic/polytypic)',
            '~25–30 %',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The “defining property of life” question, asking which of growth, reproduction, metabolism or consciousness actually defines living organisms, is a recurring NEET item. NCERT identifies <b>consciousness</b> (response to stimuli) as the defining property, and also treats metabolism as a defining feature of all living organisms without exception, while growth and reproduction are the traps.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1: “Which is the defining property?” (Fact/Concept)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four options: usually growth, reproduction, metabolism, consciousness (or increase in mass). A genuine defining property must pass both failure gates (no non-living thing shows it; no living thing lacks it).<br><b>Approach:</b> Run the two-gate test mentally:<br>1. Does any non-living thing show it? → Growth fails (dunes, crystals grow by accretion).<br>2. Does any living thing lack it? → Reproduction fails (mule, sterile bee, infertile couple).',
      },
      {
        t: 'p',
        html: 'Metabolism, cellular organisation and consciousness survive both. When the options include consciousness, pick it as “the defining property”: this is the NCERT position (metabolism is the other genuine definer).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which one of the following is regarded as a defining property of living organisms?<br>1. Growth<br>2. Reproduction<br>3. Consciousness<br>4. Increase in mass',
        steps: [
          'Growth fails Gate 1: non-living things (crystals, mountains) grow.',
          'Reproduction fails Gate 2: living things (mule, sterile worker bee) do not reproduce.',
          'Consciousness (responsiveness to stimuli) is universal to all living organisms and absent from all non-living things. It is listed as the defining property in NCERT.',
        ],
        ans: '(3)',
      },

      { t: 'p', html: '<b>Archetype 2: “Intrinsic vs extrinsic growth” / “Twin characteristics of growth”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A statement-analysis or single-MCQ asking about how living things grow compared to non-living things. The twin characteristics are increase in mass AND increase in number of individuals.<br><b>Approach:</b> Know the mechanism, not just the word:<br>• Living = intrinsic growth (from within, by cell division).<br>• Non-living = extrinsic/accretional growth (material deposited on surface).<br>• In most higher animals and plants, growth and reproduction are <b>separate events</b>; in unicellular organisms they are <b>synonymous</b>.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Select the correct statements about growth in living organisms:<br>(i) Increase in mass<br>(ii) Increase in number of individuals<br>(iii) Accumulation of material by external agency<br>(iv) Response to stimuli<br>Options:<br>(a) (i) and (ii) only<br>(b) (i) and (iii) only<br>(c) (ii) and (iv) only<br>(d) (i), (ii) and (iii) only',
        steps: [
          '(i) True: growth involves increase in mass.',
          '(ii) True: growth also involves increase in number (via cell division).',
          '(iii) False: accumulation by external agency is extrinsic growth, a non-living process.',
          '(iv) Irrelevant to the definition of growth.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 3: “Spot the incorrect nomenclature rule” / “Write it correctly”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A scientific name is presented with one or more violations. Student must identify which convention is broken: genus capital / species lowercase, both italicised, underline separately when handwritten, author in Roman after the epithet, only two words in the binomial.<br><b>Approach:</b> Fixed four-point checklist: scan in this order:<br>1. Two words only?<br>2. Genus capital, species lowercase?<br>3. Italicised (or underlined separately when handwritten)?<br>4. Author in Roman, optional, after the epithet?',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A student writes the scientific name of mango as “mangifera INDICA Linn.” Identify the errors and give the correct form.',
        steps: [
          'Errors:<br>• Genus “mangifera” must begin with a capital letter → <i>Mangifera</i>.<br>• Specific epithet “INDICA” must be lowercase → <i>indica</i>.<br>• Both words must be italicised in print.',
          'Correct printed form: <i>Mangifera indica</i> Linn.<br>Correct handwritten form: Mangifera indica (each word underlined separately).',
        ],
        ans: 'Correct form is <i>Mangifera indica</i> Linn. (printed) or Mangifera indica, each word underlined (handwritten).',
      },

      { t: 'p', html: '<b>Archetype 4: Match-the-column (taxonomic order / family / class)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Column I gives four common names (Man, Wheat, Mango, Housefly); Column II gives four taxonomic categories (orders, families, or classes). Student must match each organism to its correct category.<br><b>Approach:</b> Recall the NCERT reference table (Table 1.1):<br>• Man → Primata (order) / Hominidae (family) / Mammalia (class)<br>• Wheat → Poales (order) / Poaceae (family) / Monocotyledonae (class)<br>• Mango → Sapindales (order) / Anacardiaceae (family) / Dicotyledonae (class)<br>• Housefly → Diptera (order) / Muscidae (family) / Insecta (class)',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the common names in Column I with their taxonomic order in Column II:<br><br>Column I | Column II<br>A. Wheat | I. Primata<br>B. Mango | II. Diptera<br>C. Housefly | III. Sapindales<br>D. Man | IV. Poales<br><br>Options:<br>(a) A–I; B–II; C–IV; D–III<br>(b) A–IV; B–III; C–II; D–I<br>(c) A–II; B–IV; C–I; D–III<br>(d) A–III; B–IV; C–II; D–I',
        steps: [
          'Wheat → Poales (order of cereals and grasses) → IV',
          'Mango → Sapindales (order of mango and related plants) → III',
          'Housefly → Diptera (order of two-winged insects) → II',
          'Man → Primata (order of primates) → I',
        ],
        ans: '(b) A–IV; B–III; C–II; D–I',
      },

      { t: 'p', html: '<b>Archetype 5: Assertion–Reason (defining property / taxon-category)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Assertion (A) states a biological fact; Reason (R) gives an explanation. Four answer choices: <b>(a)</b> both true and R explains A; <b>(b)</b> both true but R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.<br><b>Approach:</b> Verify A first, then R, then the link. The chapter text gives canonical pairs:<br>• A: “Growth cannot be taken as a defining property.” R: “Non-living objects such as mountains and crystals also increase in size.” → Both true, R explains A. <b>(Answer a)</b><br>• A: “ICBN deals with plants.” R: “ICZN deals with animals.” → Both true, R does not explain A. <b>(Answer b)</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): <i>Panthera</i> is a polytypic genus.<br>Reason (R): <i>Panthera</i> has specific epithets like <i>leo</i>, <i>tigris</i> and <i>pardus</i>.',
        steps: [
          'A is true: <i>Panthera</i> contains multiple species (lion, tiger, leopard, jaguar) → polytypic.',
          'R is true: The specific epithets <i>leo</i>, <i>tigris</i>, <i>pardus</i> confirm multiple species.',
          'R is the correct explanation of A: having multiple species is what makes it polytypic.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 6: “Which statements are (not) correct?” (Statement analysis)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four statements; student decides which are correct (or not correct). Requires evaluating each independently.<br><b>Approach:</b> Read each statement against NCERT exactly. Look for single-word reversals (e.g., “order” for “family,” “botanical” for “zoological”).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements is/are not correct?<br>(i) Lower the taxon, more are the characteristics that the members within the taxon share.<br>(ii) Order is the assemblage of genera which exhibit a few similar characters.<br>(iii) Cat and dog are included in the same family Felidae.<br>(iv) Binomial nomenclature was introduced by Carolus Linnaeus.<br>Options:<br>(a) (ii) and (iii) only<br>(b) (i) and (iv) only<br>(c) (i), (ii) and (iii) only<br>(d) (iii) and (iv) only',
        steps: [
          '(i) Correct: ascending the hierarchy → fewer shared characters.',
          '(ii) Incorrect: Order is an assemblage of <b>families</b>, not genera.',
          '(iii) Incorrect: Cat (<i>Felis catus</i>) and Dog (<i>Canis familiaris</i>) are in different families (Felidae vs Canidae).',
          '(iv) Correct: Linnaeus introduced binomial nomenclature.',
          'Statements (ii) and (iii) are incorrect.',
        ],
        ans: '(a): (ii) and (iii)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The distractors in this chapter’s questions are built from a small, predictable set of confusions:',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'How to beat it'],
        rows: [
          [
            '<b>Growth-as-defining</b>',
            'Options list growth alongside metabolism/consciousness as “defining.”',
            'Apply Gate 1: non-living things grow by accretion. Growth never qualifies alone.',
          ],
          [
            '<b>Reproduction-as-defining</b>',
            'Mule/sterile-bee appear as “counterexamples” in the stem, not in the options.',
            'Apply Gate 2: some living things don’t reproduce → reproduction fails.',
          ],
          [
            '<b>Test-tube metabolism = living</b>',
            'Option: “isolated metabolic reactions in vitro are living.”',
            'NCERT: isolated metabolic reactions in vitro are not living things, but they are surely living reactions.',
          ],
          [
            '<b>ICBN ↔ ICZN swap</b>',
            'Option: “ICBN deals with animals.”',
            'B in ICBN = Botany. Z in ICZN = Zoo.',
          ],
          [
            '<b>Genus-species capitalisation flip</b>',
            '“<i>solanum melongena</i>” or “<i>Solanum Melongena</i>” as a wrong option.',
            'Genus always capital, species always small, never reversed.',
          ],
          [
            '<b>Order ends with “-ales”</b>',
            'Students forget the plant-order suffix or confuse it with the plant-family suffix -aceae.',
            'In plants, order -ales and family -aceae (animal orders have no fixed ending; animal family names end in -idae). Separate them.',
          ],
          [
            '<b>Family-Order swap in hierarchy</b>',
            'Option lists “Family, Genus, Order” as descending sequence.',
            'Correct mid-sequence: Genus → Family → Order (genus more specific than family; order broader than family).',
          ],
          [
            '<b>Taxon vs Category reversed</b>',
            '“Mammalia is a category; Class is a taxon.”',
            'Taxon = real group (concrete). Category = rank (abstract).',
          ],
          [
            '<b>Monotypic ↔ Polytypic flip</b>',
            '<i>Panthera</i> described as monotypic.',
            'Mono = one species; Poly = many species. <i>Panthera</i> = polytypic (<i>leo</i>, <i>tigris</i>, <i>pardus</i>, <i>onca</i>).',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct Recall] Which one of the following is regarded as the defining property of living organisms?<br>1. Growth<br>2. Reproduction<br>3. Consciousness<br>4. Increase in mass',
            a: 'Option <b>(3) Consciousness</b>.<br><b>Reasoning:</b> Growth fails because non-living things grow (crystals, mountains). Reproduction fails because some living things don’t reproduce (mule, sterile bee). Consciousness, the ability to sense and respond to stimuli, is universal to all life and exclusive to life. NCERT lists it as the defining property (alongside metabolism).',
          },
          {
            q: '[Level 1: Direct Recall] Which of the following is correctly written scientific nomenclature?<br>1. <i>Mangifera Indica</i><br>2. <i>Mangifera indica</i><br>3. <i>mangifera indica</i><br>4. MANGIFERA INDICA',
            a: 'Option <b>(2)</b>.<br><b>Reasoning:</b> The rules are: (i) two words: genus capital, species lowercase; (ii) italicised in print; (iii) separately underlined when handwritten. Option (1) capitalises the specific epithet. Option (3) writes the genus in lowercase. Option (4) writes both words in capitals.',
          },
          {
            q: '[Level 2: Applied Understanding] Isolated metabolic reactions carried out in a test tube (cell-free) are best described as:<br>1. A living organism<br>2. Living things<br>3. Living reactions, but not living things<br>4. Non-living reactions',
            a: 'Option <b>(3)</b>.<br><b>Reasoning:</b> No cells, so not a living thing; but the reactions are real metabolism.',
          },
          {
            q: '[Level 2: Applied Understanding] A taxonomist places the brinjal, tomato and potato in the genus <i>Solanum</i> within the family Solanaceae. <i>Solanum</i> is best described as:<br>1. Monotypic genus<br>2. Polytypic genus<br>3. A taxon at the species level<br>4. A family',
            a: 'Option <b>(2) Polytypic genus</b>.<br><b>Reasoning:</b> A monotypic genus contains exactly one species (e.g., <i>Ginkgo</i>, whose only living species is <i>Ginkgo biloba</i>). A polytypic genus contains two or more species. <i>Solanum</i> contains <i>S. melongena</i> (brinjal), <i>S. lycopersicum</i> (tomato), and <i>S. tuberosum</i> (potato), three species, making it polytypic. It is a genus (not a species or family), and it is a taxon (a real group occupying the rank of genus).',
          },
          {
            q: '[Level 2: Applied Understanding] Arrange the following taxonomic categories in the correct sequence from lowest to highest rank: Family, Order, Species, Phylum, Genus, Class, Kingdom.',
            a: '<b>Species → Genus → Family → Order → Class → Phylum → Kingdom.</b><br><b>Reasoning:</b> The seven obligate categories in ascending order (most specific to broadest).<br><b>Verification:</b> Species is the basic unit; Genus groups species; Family groups genera; Order groups families; Class groups orders; Phylum (animals) / Division (plants) groups classes; Kingdom is the highest. The mnemonic “King Philip Came Over For Good Soup” gives the top-down order (reverse for species → kingdom).',
          },
          {
            q: '[Level 3: Multi-step Reasoning] Read the following statements and select how many are correct:<br>(A) Systematics is a narrower term than taxonomy.<br>(B) The biological species concept defines a species by ability to interbreed and produce fertile offspring, associated with Ernst Mayr.<br>(C) ICBN deals with naming of animals; ICZN with plants.<br>(D) A tautonym such as <i>Rattus rattus</i> is invalid because the two words must always differ.<br>1. One<br>2. Two<br>3. Three<br>4. Four',
            a: 'Option <b>(1) One</b>.<br><b>Reasoning:</b><br>• (A) False: systematics is broader (includes evolutionary relationships); taxonomy sits inside it.<br>• (B) True: Mayr’s biological species concept: interbreed freely + fertile offspring.<br>• (C) False: ICBN (Botanical) = plants; ICZN (Zoological) = animals; the codes are swapped.<br>• (D) False: tautonyms are perfectly valid in zoological nomenclature (e.g., <i>Rattus rattus</i>, <i>Gorilla gorilla</i>).<br>Only statement (B) is correct. <b>Answer: (1)</b>',
          },
          {
            q: '[Level 3: Multi-step Reasoning] A student claims: “Since plants grow continuously throughout their lives and animals grow only up to a certain age, growth in plants and animals is fundamentally different.” Evaluate this statement.',
            a: 'The student’s conclusion is <b>partially correct but overstated</b>. The mechanism of growth is the same in both: intrinsic growth from within by cell division. The difference is only in duration:<br>• In plants, cell division (and thus growth) occurs <b>continuously</b> throughout life (in meristematic regions).<br>• In animals, growth in body size occurs only up to a certain age, though cell division continues in some tissues to replace lost cells.<br>The fundamental nature of growth, increase in mass and number by intrinsic cell division, is identical. NCERT makes the same point: in plants, growth by cell division occurs continuously throughout life, whereas in animals it occurs only up to a certain age. The student has conflated the mechanism with the duration.',
          },
          {
            q: '[Level 3: Multi-step Reasoning] Match Column I with Column II and select the correct option:<br><br>Column I | Column II<br>A. <i>Panthera leo</i> | I. Poaceae<br>B. <i>Triticum aestivum</i> | II. Mammalia<br>C. <i>Homo sapiens</i> | III. Felidae<br>D. <i>Musca domestica</i> | IV. Muscidae<br><br>Options:<br>(a) A–I; B–II; C–III; D–IV<br>(b) A–III; B–I; C–II; D–IV<br>(c) A–II; B–I; C–III; D–IV<br>(d) A–IV; B–I; C–II; D–III',
            a: 'Option <b>(b) A–III; B–I; C–II; D–IV</b>.<br><b>Reasoning:</b><br>• <i>Panthera leo</i> (lion): Genus <i>Panthera</i>, Family <b>Felidae</b> → III.<br>• <i>Triticum aestivum</i> (wheat): Family <b>Poaceae</b> (grass family) → I.<br>• <i>Homo sapiens</i> (man): Class <b>Mammalia</b> → II.<br>• <i>Musca domestica</i> (housefly): Family <b>Muscidae</b> → IV.<br>Option (a) wrongly assigns Poaceae to lion, Mammalia to wheat and Felidae to man. Option (c) assigns Felidae to man. Option (d) assigns Muscidae to lion and Felidae to housefly.',
          },
          {
            q: '[Level 3: Multi-step Reasoning] Assertion (A): In handwritten scientific names, the genus and species are underlined separately.<br>Reason (R): They are two distinct words, and underlining is the manuscript equivalent of italics.<br>Choose: <b>(a)</b> Both A and R true, R explains A; <b>(b)</b> Both true, R not the explanation; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
            a: 'Option <b>(a)</b>.<br><b>Reasoning:</b><br>• A is true: NCERT conventions state that when italicisation is unavailable, each word of a scientific name is underlined separately.<br>• R is true: Underlining in manuscript serves the same typographic function as italics in print, to signal a scientific name as a unit.<br>• R is the precise mechanical explanation for A: because they are two distinct words, each requires its own underline.<br><b>Answer: (a)</b>',
          },
          {
            q: '[Level 3: Multi-step Reasoning] Two organisms, X and Y, are placed in the same class but different orders. Which of the following must they also share?<br>(i) Kingdom<br>(ii) Phylum<br>(iii) Species<br>(iv) Genus<br>Options:<br>(a) (i) and (ii) only<br>(b) (i), (ii) and (iii) only<br>(c) (i), (ii) and (iv) only<br>(d) (i) only',
            a: 'Option <b>(a) (i) and (ii) only</b>.<br><b>Reasoning:</b> By the containment (nesting-doll) principle, sharing a lower category guarantees sharing all higher categories. The sequence is: Species → Genus → Family → Order → Class → Phylum → Kingdom.<br>• Same class → must share: Phylum (above class) and Kingdom (above phylum).<br>• They cannot share Genus or Species: both lie below Order, and X and Y are in different orders.<br><b>Answer: (a)</b>',
          },
          {
            q: '[Level 3: Multi-step Reasoning] Which of the following statements regarding growth in living organisms is incorrect?<br>(a) In plants, growth by cell division occurs continuously throughout their life span.<br>(b) Increase in body mass is considered as growth.<br>(c) Growth by cell division occurs continuously throughout their life span in animals.<br>(d) Increase in mass and number of individuals is a characteristic feature of growth.',
            a: 'Option <b>(c)</b>.<br><b>Reasoning:</b><br>• (a) Correct: NCERT states plant growth is continuous.<br>• (b) Correct: increase in biomass is a measure of growth.<br>• (c) <b>Incorrect</b>: animal growth is limited to a certain age (cells still divide in some tissues for replacement).<br>• (d) Correct: the twin characteristics of growth are increase in mass and increase in number of individuals.',
          },
          {
            q: '[Level 1: Direct Recall] The famous botanical garden ‘Kew’ is located in:<br>1. England<br>2. Lucknow<br>3. Berlin<br>4. Australia',
            a: 'Option <b>(1) England</b>.<br><b>Reasoning:</b> The Royal Botanic Gardens, Kew (commonly called Kew Gardens) is located in Richmond, London, England. It is one of the oldest and most important botanical research institutions in the world. Lucknow houses the National Botanical Garden (India); Berlin has the Botanical Garden and Botanical Museum Berlin-Dahlem; Australia has the Royal Botanic Gardens, Melbourne and Sydney, but not Kew.',
          },
        ],
      },
    ],
  },
];
