import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 10 (Cell Cycle and Cell Division), Additional topics C, D, E and F,
 * word for word from the Class 11 Biology Master Reference: C "Cytokinesis: Mechanisms and
 * Timing" (opens partway down p. 623, after Additional topic B's practice answers; ends on
 * p. 626), D "Cell Division in Specific Organisms and Contexts" (pp. 626 to 629), E "Abnormal
 * Cell Cycles, Cancer, and Applied Biology" (pp. 629 to 632; the closing italic note of the
 * Additional topics is the last paragraph of its Practice part) and F "What NEET Actually
 * Asks" (the book's "Addendum P", pp. 632 to 641). Page 642 is the next chapter.
 *
 * Match-the-column lists printed inside a question are set as two labelled lists (Column I,
 * Column II), because the rows are not pairs. Each archetype's representative example is a
 * worked example tagged "Worked representative"; its printed first result is the answer.
 * Scientific names are italic; common names are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 623 to 626 ─────────────────────────
  {
    n: 'C',
    title: 'Cytokinesis: Mechanisms and Timing',
    extra: true,
    kalam: 'If the nucleus divides but the cytoplasm does not, a multinucleate syncytium results.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the direction of the cleavage furrow in animal cells and of the cell plate in plant cells, and the coconut syncytium. For the exam you need the molecular machinery, the direction of movement, the timing relative to karyokinesis, and the specific cases where cytokinesis fails or is modified.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Animal cytokinesis: the contractile ring model.</b><br>A band of actin filaments and myosin II assembles just beneath the plasma membrane at the cell’s equator, perpendicular to the mitotic spindle. Myosin motors drive the filaments to slide past each other, constricting the ring and deepening a cleavage furrow from the cell periphery inward (centripetal). The furrow pinches the cell into two, bisected by the midbody (a transient structure at the final connection point).',
      },
      {
        t: 'p',
        html: 'Key facts: (i) The spindle determines the plane of division: the furrow forms perpendicular to the spindle’s poles. (ii) Microtubules of the spindle are required to position the contractile ring. (iii) If cytokinesis fails after nuclear division (for example, when actin–myosin function is inhibited), the cell becomes binucleate.',
      },
      {
        t: 'p',
        html: '<b>Plant cytokinesis: the phragmoplast model.</b><br>Plant cells cannot pinch because of the rigid cell wall. Instead, vesicles from the Golgi apparatus, carrying cell wall materials (pectins, hemicellulose), accumulate at the centre of the dividing cell along the remnants of the mitotic spindle (the phragmoplast, a barrel of microtubules). Vesicles fuse to form the cell plate, which grows outward (centrifugal) from the centre toward the existing cell wall. The cell plate becomes the middle lamella, and cellulose cell walls are deposited on both sides.',
      },
      {
        t: 'table',
        title: 'Timing relative to karyokinesis',
        head: ['Cell type', 'Timing'],
        rows: [
          ['Animal cells', 'Cleavage furrow begins in anaphase, deepens through telophase, and completes after nuclear envelope reformation.'],
          ['Plant cells', 'The phragmoplast forms in late anaphase; the cell plate grows through telophase and completes as the daughter nuclear envelopes re-form.'],
        ],
      },
      {
        t: 'p',
        html: '<b>Syncytium: when karyokinesis precedes cytokinesis.</b><br>If the nucleus divides but the cytoplasm does not, a multinucleate syncytium results. Examples: liquid endosperm of coconut (the chapter’s example), <i>Drosophila</i> embryo before cellularisation, many fungi and algae. The key distinction: syncytial nuclei share a common cytoplasm but have not yet partitioned into separate cells.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Direction and Mechanism.</b> Distinguish between animal and plant cytokinesis with respect to: (a) the direction of membrane/wall deposition, (b) the role of the contractile ring, and (c) the role of the Golgi apparatus.',
        steps: [
          '(a) Animal: cleavage furrow forms from the periphery inward (centripetal). Plant: cell plate forms from the centre outward (centrifugal). (b) Animal: a contractile ring of actin and myosin II constricts the membrane; it is absent in plant cells. Plant: no contractile ring; cell plate formation relies on the phragmoplast (microtubule array) and Golgi-derived vesicles. (c) Animal: the Golgi has only a supporting role, supplying membrane for the new cell surface; the furrow itself is made by the actomyosin ring. Plant: Golgi vesicles carrying pectin and hemicellulose are the building blocks of the cell plate; the Golgi apparatus is essential.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Syncytium Identification.</b> A young coconut has liquid endosperm that is multinucleate. (a) What type of cell division is occurring? (b) What happens after each round of nuclear division? (c) What term describes this condition?',
        steps: [
          '(a) Nuclear division (karyokinesis) continues without cytoplasmic division: a modified cell cycle producing a syncytium. (b) Karyokinesis has occurred (nuclei divided) but cytokinesis has not followed. The condition is present from the stage when the first nuclear divisions in the endosperm fail to be followed by cell plate formation. (c) Syncytium. In a young coconut the endosperm remains free-nuclear (syncytial) for some time before cells form around the nuclei.',
        ],
        ans: '(a) Repeated karyokinesis without cytokinesis; (b) After each round of nuclear division, the cytoplasm fails to divide (karyokinesis continues, cytokinesis does not start); (c) Syncytium.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Cytokinesis Failure.</b> A cell completes mitosis (karyokinesis) normally, but cytokinesis fails. What will be the observable result? Give two consequences for the cell.',
        steps: [
          'Nuclear division has finished but the cytoplasm has not divided, so the cell becomes binucleate: two nuclei in a single cytoplasm. (Colchicine does not produce this result: it destroys the spindle and normally arrests cells at metaphase, see practice question 6 of Additional topic C.)',
          '<b>Consequences:</b> (i) The cell has double the normal DNA content (two G1 nuclei, 2C each = 4C, instead of 2C) and double the chromosome count in a single cell, disrupting the nucleo-cytoplasmic ratio. (ii) Subsequent divisions of such a cell produce genetically abnormal daughters, and uncontrolled accumulation of such cells can contribute to tumorigenesis.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE-style] Name the structures involved in plant cytokinesis: (a) the microtubule array that guides vesicle deposition, and (b) the Golgi-derived structure that grows to form the partition.',
            a: '(a) Phragmoplast: a barrel-shaped array of microtubules oriented perpendicular to the plane of division; (b) Cell plate: formed by fusion of Golgi-derived vesicles.',
          },
          {
            q: '[CUET-style] State one difference between the direction of cleavage furrow formation and cell plate growth.',
            a: 'Cleavage furrow: centripetal (periphery → centre). Cell plate: centrifugal (centre → periphery). Alternatively: the furrow deepens from the plasma membrane inward; cell plate grows from the centre outward.',
          },
          {
            q: '[NEET-style] What is the role of the midbody in animal cell cytokinesis?',
            a: 'The midbody is a transient, narrow cytoplasmic bridge connecting the two daughter cells at the end of cytokinesis. It contains bundled microtubules from the spindle and acts as the final closure point before the cells separate. It is ultimately severed to complete cell division.',
          },
          {
            q: '[CBSE-style] Give two examples of syncytium in organisms. In which plant tissue is syncytium found?',
            a: '(i) Liquid endosperm of coconut (young stage); (ii) <i>Drosophila</i> syncytial blastoderm embryo before cellularisation. Plant tissue: the free-nuclear (liquid) endosperm of coconut; the early endosperm of many angiosperms is also free-nuclear.',
          },
          {
            q: '[NEET-style] A cell is treated with a drug that inhibits Golgi vesicle fusion. Which type of cytokinesis (animal or plant) will be more severely affected, and why?',
            a: 'Plant cytokinesis will be more severely affected. Cell plate formation absolutely requires Golgi-derived vesicles carrying wall materials (pectins, hemicellulose) that fuse to build the plate. If vesicle fusion is blocked, no cell plate forms and cytokinesis cannot be completed. Animal cytokinesis uses a contractile ring of actin and myosin; it does not require vesicle fusion and is therefore less directly affected.',
          },
          {
            q: '[NEET-style] Why is colchicine used in karyotyping procedures?',
            a: 'Colchicine depolymerises spindle microtubules, arresting cells at metaphase (the spindle assembly checkpoint prevents anaphase onset without a functional spindle). Metaphase is when chromosomes are maximally condensed and aligned, making them ideal for counting and morphological study in karyotyping.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 626 to 629 ─────────────────────────
  {
    n: 'D',
    title: 'Cell Division in Specific Organisms and Contexts',
    extra: true,
    kalam: 'Plant growth is localised: cell division continues in regions called meristems.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s own examples are general: it names the 90-minute yeast cycle and the haploid male honeybee in Topic 01 and plant meristems in Topic 04. NEET and CUET sometimes ask about specific organisms and specialised contexts (the book’s estimate from past papers, not official figures). This section covers: plant meristems, <i>Drosophila</i> syncytial divisions, yeast, the haploid male honeybee, and endoreduplication.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Plant meristems.</b> Plant growth is localised: cell division continues in regions called meristems, apical meristems (shoot tip, root tip) and lateral meristems (vascular cambium, cork cambium), comparable to the actively dividing tissues of an animal. Cell division in meristems follows the standard mitotic sequence, and cytokinesis is always by cell plate (phragmoplast + Golgi vesicles). The shoot apical meristem (SAM) and root apical meristem (RAM) are where mitosis is most active in a plant. The vascular cambium produces secondary xylem and phloem; the cork cambium produces cork.',
      },
      {
        t: 'p',
        html: '<b><i>Drosophila</i> syncytial divisions.</b> In early <i>Drosophila</i> embryogenesis, the nucleus undergoes 13 rounds of nuclear division without cytokinesis, producing a syncytium (thousands of nuclei in one shared cytoplasm). The cycles in the first nine rounds consist only of alternating S and M phases; a short G<sub>2</sub> appears from cycle 10, and G<sub>1</sub> only after cellularisation. Cellularisation (converting the syncytium into individual cells) occurs at cycle 14. This is NOT meiosis; it is mitosis without cytokinesis. The significance: rapid generation of nuclei for early development before gene expression from the zygotic genome begins.',
      },
      {
        t: 'p',
        html: '<b>Yeast (<i>Saccharomyces cerevisiae</i>).</b> Budding yeast completes its cell cycle in about 90 minutes (vs ~24 hours for a typical human cell). Key features: the Start checkpoint in late G1 is its main control point; mitosis is closed (nuclear envelope does not break down); cytokinesis is asymmetric, producing a mother cell and a smaller daughter cell (bud). Haploid (n = 16 in <i>S. cerevisiae</i>) yeast cells divide by mitosis.',
      },
      {
        t: 'p',
        html: '<b>Male honeybee (<i>Apis mellifera</i>).</b> The drone (male honeybee) develops from an unfertilised egg (parthenogenesis) and is haploid (n = 16). Its body cells divide by mitosis. This confirms the chapter’s statement that mitosis occurs in haploid cells. No halving of the chromosome number occurs in the drone: a haploid cell has no homologues to pair, so its sperm form without reduction (<i>n</i> = 16). Queen bees (diploid) produce drones by laying unfertilised eggs that develop by mitosis.',
      },
      {
        t: 'p',
        html: '<b>Endoreduplication.</b> Some specialised cells undergo multiple rounds of DNA replication without mitosis or cytokinesis, increasing their DNA content dramatically. Endopolyploidy: nucleus contains multiples of the haploid set (4C, 8C, 16C…). Examples: maize endosperm cells (endopolyploid, producing the starchy stored food); human liver cells (often 4C or 8C); silk gland cells of <i>Bombyx mori</i> (the silkworm). This is distinct from the normal cell cycle: it is a modified cycle that skips mitosis.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b><i>Drosophila</i> Embryogenesis.</b> During the first 13 nuclear divisions in a <i>Drosophila</i> embryo, no cytokinesis occurs. (a) What term describes this condition? (b) How many nuclei are present after 13 divisions? (c) What happens at the 14th division?',
        steps: [
          '(a) Syncytium: multiple nuclei in a common cytoplasm without cell membranes between them. (b) 2<sup>13</sup> nuclei = 8192 nuclei (the idealised count when every nucleus divides at each round). (c) At cycle 14, cellularisation occurs: the plasma membrane invaginates between each nucleus and its neighbours, partitioning the cytoplasm into individual cells and forming the cellular blastoderm. This is a modified cytokinesis that creates the first epithelial layer of the embryo.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: '<b>Yeast Cell Cycle.</b> A culture of budding yeast (<i>Saccharomyces cerevisiae</i>) doubles its cell number every 90 minutes under ideal conditions. (a) Is this cell division mitosis or meiosis? (b) Give two features of yeast cytokinesis. (c) If the yeast is haploid with 16 chromosomes, how many chromosomes will each daughter cell have?',
        steps: [
          '(a) Mitosis: yeast reproduces asexually by budding, and haploid yeast cells divide by mitosis. (b) Cytokinesis in yeast: (i) asymmetric: produces a small bud (daughter cell) and a larger mother cell; (ii) involves a contractile ring of actin filaments that forms at the site of bud emergence; (iii) the cell wall grows inward to complete division. (c) Haploid yeast → 16 chromosomes per daughter cell (identical to parent, by mitotic equational division).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Endopolyploidy.</b> A silk gland cell of <i>Bombyx mori</i> (the silkworm) has a DNA content of 8C. (a) What does 8C mean, and how many rounds of replication does it represent? (b) Is this cell in the normal cell cycle?',
        steps: [
          '(a) 8C = 8 copies of the haploid genome (2<sup>3</sup> × 1C). Each round of replication doubles the C value: a diploid cell starts at 2C, so 2C → 4C → 8C means two rounds of replication beyond its G<sub>1</sub> amount; two complete S-phase equivalents have occurred. (b) No: endopolyploid cells are in a specialised modified cell cycle that skips mitosis. They replicate DNA repeatedly to produce the massive amount of silk protein (fibroin) that the cell requires. High DNA content provides multiple copies of genes for intense transcription.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE-style] Name the plant meristem responsible for secondary growth in thickness of a stem. What type of cell division occurs here?',
            a: 'Lateral meristem: vascular cambium, which produces secondary xylem and phloem (the cork cambium forms the periderm, that is cork). The vascular cambium undergoes mitotic divisions (periclinal divisions produce secondary xylem inward, secondary phloem outward), all following the standard mitotic sequence with cell plate cytokinesis.',
          },
          {
            q: '[CUET-style] State two differences between the first 13 divisions in a <i>Drosophila</i> embryo and normal mitotic divisions.',
            a: '(i) No cytokinesis: nuclei divide in a shared cytoplasm (syncytium); normal mitosis includes cytokinesis. (ii) No cellular membranes between nuclei; in normal mitosis each cell has its own membrane. (iii) The cycles are extremely rapid (about 10 minutes in the early cycles), nearly synchronous across the embryo, and in the first nine cycles consist only of alternating S and M phases; a short G2 appears from cycle 10, and G1 only after cellularisation, whereas normal mitotic cycles have G1 and G2 and are far slower.',
          },
          {
            q: '[NEET-style] The drone (male honeybee) is haploid. By what process do its body cells divide? Is the chromosome number halved when its sperm form?',
            a: 'Its body cells divide by mitosis. No halving of the chromosome number occurs in the drone: a haploid cell has no homologues to pair, so its sperm form without reduction (<i>n</i> = 16).',
          },
          {
            q: '[CBSE-style] Distinguish between endopolyploidy and the normal G2 phase of the cell cycle with respect to what happens after DNA replication.',
            a: 'In G2: DNA replication has occurred once; the cell is preparing to enter mitosis and will divide. In endopolyploidy: DNA replication has occurred multiple times (e.g., 2C, 4C, 8C…) without entry into mitosis; the cell remains in interphase and uses the extra gene copies for high-level transcription of specialised products.',
          },
          {
            q: '[NEET-style] A root tip meristem cell of onion (2n = 16) divides mitotically. How many chromosomes will each daughter cell have? What is the DNA content of each daughter cell in G1?',
            a: '16 chromosomes per daughter cell (mitosis is equational, chromosome number conserved). In G1 each daughter cell has 1 chromatid per chromosome → DNA content = 2C = 2 × (haploid genome). For onion the actual amount is ~30 pg but the Board convention uses C values.',
          },
          {
            q: '[CUET-style] Give one example each of: (a) a syncytial animal tissue, (b) a plant tissue with endopolyploid cells, (c) a unicellular eukaryote with a short (~90 min) cell cycle.',
            a: '(a) <i>Drosophila</i> syncytial blastoderm embryo; skeletal muscle fibre (multinucleate cell formed by fusion of myoblasts). (Liquid endosperm of coconut is a plant syncytium.) (b) Maize endosperm. (c) Budding yeast (<i>Saccharomyces cerevisiae</i>); fission yeast (<i>Schizosaccharomyces pombe</i>, ~2–3 hours).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 629 to 632 ─────────────────────────
  {
    n: 'E',
    title: 'Abnormal Cell Cycles, Cancer, and Applied Biology',
    extra: true,
    kalam: 'A proto-oncogene is a normal gene that promotes cell division.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter mentions that unchecked mitosis leads to tumours and cancer. For NEET you need the specific vocabulary: oncogenes, tumour suppressor genes, how checkpoint failure drives proliferation, and which chemotherapy drugs exploit cell-cycle machinery.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Oncogenes and tumour suppressor genes.</b><br>A proto-oncogene is a normal gene that promotes cell division (e.g., growth factor receptors, cyclin D, CDK4). When mutated or amplified it becomes an oncogene: a cancer-causing gene that drives uncontrolled proliferation. Examples: HER2/neu (breast cancer), BCR-ABL (chronic myeloid leukaemia; the Philadelphia chromosome).',
      },
      {
        t: 'p',
        html: 'A tumour suppressor gene inhibits cell division or promotes apoptosis. For a classic tumour suppressor, loss of both alleles (recessive at the cellular level) removes this brake. Examples: p53 (guardian of the genome, discussed in Additional topic A), RB1 (retinoblastoma protein; guards the G1/S checkpoint).',
      },
      {
        t: 'p',
        html: '<b>The two-hit hypothesis (Knudson model).</b> For a classic tumour suppressor such as RB1, both alleles must be inactivated before the cell loses that control. In hereditary retinoblastoma one mutant RB1 allele is inherited, so a single further mutation in the other allele in a retinal cell is enough; in sporadic cases both hits occur in one cell lineage over time. Cancer as a whole needs changes in several genes.',
      },
      {
        t: 'p',
        html: '<b>Cancer and the cell cycle.</b> Cancer results when: (i) growth-promoting signals override checkpoints (oncogene activation); (ii) checkpoints fail to arrest damaged cells (tumour suppressor loss); (iii) cells escape apoptosis (p53 loss); (iv) replicative immortality: telomerase is reactivated, preventing telomere shortening and allowing unlimited divisions. These are the four routes to cancer.',
      },
      {
        t: 'table',
        title: 'Drugs that target the cell cycle',
        head: ['Drug', 'Target', 'Effect'],
        rows: [
          ['Colchicine (plant alkaloid; research tool)', 'Spindle microtubule polymerisation', 'Blocks spindle assembly → arrests at metaphase'],
          ['Vinblastine / Vincristine (plant alkaloids)', 'Spindle microtubules', 'Prevents polymerisation; same metaphase arrest'],
          ['Taxol (Pacific yew tree; an anticancer drug)', 'Spindle microtubules', 'Prevents depolymerisation, so the chromosomes align at metaphase but cannot be pulled apart; anaphase is blocked'],
          ['Hydroxyurea', 'Ribonucleotide reductase', 'Blocks dNTP synthesis → S-phase arrest'],
          ['Aphidicolin (fungal; research tool)', 'DNA polymerase α', 'Blocks DNA replication → S-phase arrest'],
        ],
      },
      {
        t: 'p',
        html: 'All these drugs exploit the fact that rapidly dividing cancer cells spend significant time in S and M phases: targeting those phases selectively kills proliferating cells (cancer cells and some normal tissues like bone marrow, intestinal epithelium, and hair follicles; the side effects of chemotherapy).',
      },
      {
        t: 'p',
        html: '<b>Stem cells and the cell cycle.</b> Embryonic stem cells have a very short G<sub>1</sub>; many adult stem cells are quiescent (G<sub>0</sub>). The balance between symmetric division (two stem cells, for expansion) and asymmetric division (one stem cell + one progenitor, for homeostasis) is controlled by cyclin-CDK regulation and environmental signals. Understanding this is foundational to regenerative medicine.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Oncogene vs Tumour Suppressor.</b> The Ras protein is a GTPase that relays growth signals from the cell membrane to the nucleus, promoting G1/S progression. A mutation that locks Ras in its active (GTP-bound) state causes continuous proliferation signalling. Is Ras an oncogene or a tumour suppressor gene?',
        steps: [
          'A constitutively active Ras continuously drives the cell cycle without normal growth factor signals or checkpoint regulation. This promotes uncontrolled division, the defining property of an oncogene. Ras is a proto-oncogene (normal) that becomes an oncogene when mutated. It does not suppress tumour formation: it promotes growth. By contrast, a tumour suppressor like p53 puts brakes on the cycle; losing it removes the brake.',
        ],
        ans: 'Ras is a proto-oncogene; the activating mutation makes it an oncogene.',
      },
      {
        t: 'ex',
        tag: 'NEET level',
        q: '<b>Chemotherapy Mechanism.</b> Taxol is used to treat breast and ovarian cancers. It acts on the mitotic spindle. (a) At which stage does Taxol block the cell? (b) Why are cancer cells more susceptible to Taxol than most normal cells? (c) Name one common side effect of Taxol that reflects its effect on normal dividing cells.',
        steps: [
          '(a) Taxol stabilises microtubules and prevents their depolymerisation, which is required for anaphase movement of chromosomes. Therefore the chromosomes align at metaphase but cannot be pulled apart, and anaphase is blocked. (b) Cancer cells divide much more frequently than most normal adult somatic cells: the therapeutic window exploits the higher proportion of cells in M phase in tumour tissue. (c) Bone marrow suppression (agranulocytosis: loss of white blood cells, increasing infection risk); hair loss (alopecia: follicular cells are rapidly dividing); mucositis (intestinal lining damage); peripheral neuropathy (affects neurons whose cytoskeleton relies on microtubules). Any one is sufficient.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE/NEET level',
        q: '<b>Two-Hit Hypothesis.</b> A child is born with one mutated copy of the RB1 gene. The child develops retinoblastoma in both eyes by age 3, while another child, born with two normal RB1 copies, develops a tumour in only one eye. Explain this pattern.',
        steps: [
          'The RB1 gene is a classic tumour suppressor: both alleles must be inactivated before the cell loses that control.',
          '<b>Child with hereditary retinoblastoma:</b> one mutated RB1 allele is present in every cell (first hit inherited). A single additional mutation in any retinal cell inactivates the second allele (second hit) → tumour develops. Because many retinal cells carry the first hit, multiple independent second hits can occur → bilateral tumours (both eyes).',
          '<b>Child with sporadic retinoblastoma:</b> both RB1 alleles must be independently mutated in the same retinal cell lineage: a rarer event requiring two specific mutations in one cell. Only one such event typically occurs → single tumour.',
          'This is the two-hit hypothesis (Knudson, 1971): two hits are needed in the cell, whether one is inherited or both are acquired. Cancer as a whole needs changes in several genes.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-style] Distinguish between a proto-oncogene and an oncogene.',
            a: 'A proto-oncogene is a normal gene that promotes controlled cell division (e.g., cyclin D, Ras, HER2). An oncogene is a mutated or amplified proto-oncogene that drives uncontrolled proliferation: it is dominant at the cellular level (one activated copy can transform a cell).',
          },
          {
            q: '[CUET-style] Name two tumour suppressor genes and their normal function.',
            a: '(i) p53: transcription factor that arrests the cycle at G1/S and G2/M in response to DNA damage, and triggers apoptosis if damage is irreparable. (ii) RB1: encodes the retinoblastoma protein (Rb) that blocks G1/S progression by sequestering E2F; Rb phosphorylation (by Cyclin D/E–CDK) releases E2F for S-phase entry.',
          },
          {
            q: '[CBSE-style] Why does chemotherapy targeting S-phase (e.g., hydroxyurea) also affect the intestinal epithelium?',
            a: 'Intestinal epithelial cells (enterocytes) have a high rate of turnover: stem cells in the crypt divide rapidly to replace the lining every few days. These cells spend significant time in S phase for DNA replication, making them susceptible to S-phase inhibitors. This causes mucositis and diarrhoea as side effects of chemotherapy.',
          },
          {
            q: '[NEET-style] A drug prevents spindle depolymerisation. At which stage of mitosis will cells arrest? Name one drug with this mechanism.',
            a: 'Chromosomes align at metaphase but anaphase is blocked: they cannot separate because spindle depolymerisation (required for poleward movement) is blocked. Taxol (paclitaxel) and docetaxel are anti-mitotic drugs that stabilise microtubules and prevent depolymerisation.',
          },
          {
            q: '[NEET-style, assertion–reason] Assertion: Loss of p53 function makes a cell more likely to become cancerous. Reason: p53 normally triggers apoptosis in cells with irreparable DNA damage.<br>Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: 'Both Assertion and Reason are true, and the Reason is a correct explanation of the Assertion. Loss of p53 removes both the cell-cycle arrest and the apoptotic pathway in response to DNA damage, allowing cells with mutations to proliferate: one of the routes to cancer. The additional aspect (G1/S arrest for repair) also contributes.',
          },
          {
            q: '[CBSE-style] What is meant by the “two-hit hypothesis”? Apply it to familial versus sporadic retinoblastoma.',
            a: 'The two-hit hypothesis (Knudson, 1971): for a classic tumour suppressor such as RB1, both alleles must be inactivated before the cell loses that control, so two “hits” (mutations) are required in the cell. Cancer as a whole needs changes in several genes.<br><br><b>Familial retinoblastoma:</b> one mutated RB1 allele is inherited (first hit in every cell). A single additional mutation in the remaining functional allele (second hit) in any retinal cell leads to tumour formation. Multiple independent second hits can occur → bilateral tumours.<br><br><b>Sporadic retinoblastoma:</b> both RB1 alleles must be mutated in one cell lineage over time: a rarer event requiring two hits in the same cell. Only one tumour typically develops.',
          },
        ],
      },
      {
        t: 'p',
        html: 'These additional topics (A to E) extend the chapter with checkpoint logic, counting conventions, cytokinesis mechanisms, organism examples and cancer links. Use them after reading the chapter: they assume you know PMAT, the five prophase-I substages, the reductional/equational distinction, and the basic bookkeeping table.',
      },
    ],
  },

  // ───────────────────────── Additional topic F (Addendum P) · pp. 632 to 641 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'DNA replication is the defining property of S phase.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET questions on this chapter concentrate on three clusters (the book’s estimate from past papers, not official figures):<br>1. <b>Prophase I substages (Leptotene → Diakinesis)</b>: the most frequent cluster. Every substage’s signature event is tested independently or in match-the-column format. Expect this to be asked often.<br>2. <b>DNA-versus-chromosome-number bookkeeping</b>: very frequent. S phase doubles DNA but not chromosome count; anaphase separates chromatids without changing DNA amount. This distinction is a classic source of NEET traps.<br>3. <b>Anaphase I vs. Anaphase II (what separates)</b>: frequent. The question “What separates in anaphase I?” has been asked repeatedly. Students who answer “sister chromatids” lose marks; the correct answer is “homologous chromosomes.”',
      },
      {
        t: 'p',
        html: 'Topics that appear less often: cytokinesis mechanism (furrow vs. cell plate), significance of meiosis (all-of-the-above items), G0 phase definition, and the kinetochore/spindle-attachment detail.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Fact/Definition (one-best-answer, single concept)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “In cell cycle, DNA replication takes place in ______” with four phase names as options.<br><b>Approach:</b> Eliminate by rule. DNA replication is the defining property of S phase: nothing else in the cycle replicates DNA. G1 grows without copying; G2 prepares the cell for mitosis; M phase moves already-replicated material.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In the cell cycle, DNA replication takes place in:<br><b>(a)</b> G1 phase<br><b>(b)</b> G2 phase<br><b>(c)</b> Mitotic metaphase<br><b>(d)</b> S phase',
        steps: [
          'S stands for Synthesis: this is the only phase committed to DNA replication. G1 and G2 are gap phases; metaphase is part of M phase where chromosomes are already replicated and merely aligned.',
        ],
        ans: '(d) S phase.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In which stage of the cell cycle, histone proteins are synthesized?<br><b>(a)</b> During G2 stage of interphase<br><b>(b)</b> During S-phase<br><b>(c)</b> During entire prophase<br><b>(d)</b> During telophase',
        steps: [
          'Histone proteins are synthesized concurrently with DNA replication: both occur in S phase. Histones are DNA-binding proteins; they must be available as the new DNA strands are synthesized.',
        ],
        ans: '(b) During S-phase.',
      },

      { t: 'p', html: '<b>2. Stage-Identification (match-the-column)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns: Column I names events, Column II names stages. Students must pair each event with its correct stage.<br><b>Approach:</b> Anchor each event to its unique defining property. If an event appears in two stages, look for the qualifier.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match Column I with Column II:<br><b>Column I</b><br>A. Chromosomes are moved to spindle equator<br>B. Centromere splits and chromatids move apart<br>C. Pairing between homologous chromosomes<br>D. Crossing over between homologous chromosomes<br><b>Column II</b><br>I. Pachytene<br>II. Zygotene<br>III. Anaphase<br>IV. Metaphase',
        steps: [
          '• A → IV: Chromosomes align at the equator in <b>metaphase</b>.<br>• B → III: Centromere splitting is the defining <b>anaphase</b> event (whether mitotic anaphase or anaphase II of meiosis: in both, chromatids separate poleward).<br>• C → II: Pairing of homologues = <b>zygotene</b> (synapsis).<br>• D → I: Crossing over = <b>pachytene</b>.',
        ],
        ans: 'A–IV, B–III, C–II, D–I.',
      },

      { t: 'p', html: '<b>3. Diagram-Identification (stage from diagram description)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A microscope view is described, and students name the stage. Common descriptions: “chromosomes at equator,” “chromosomes moving to poles,” “nuclear envelope reforming,” “paired homologues with X-shaped junctions.”<br><b>Approach:</b> Two-step filter: (1) What is separated? (2) What structure is present/absent?',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A stage of mitosis is shown in the diagram. Nuclear envelope reforms and the Golgi complex reforms. The stage is:<br><b>(a)</b> Late prophase<br><b>(b)</b> Cytokinesis<br><b>(c)</b> Telophase<br><b>(d)</b> Metaphase',
        steps: [
          'The nuclear envelope re-forming and organelles reappearing are the hallmarks of telophase: the reversal of prophase events. Metaphase shows the envelope already gone; prophase shows it disappearing; cytokinesis involves the cytoplasm dividing, not the nucleus reforming.',
        ],
        ans: '(c) Telophase.',
      },

      { t: 'p', html: '<b>4. Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements labelled Assertion (A) and Reason (R). Students choose from: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>Approach:</b> Evaluate each statement independently before choosing the relationship. Never assume A is true because R sounds plausible.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): Small disc-shaped structures at the surface of the centromeres are called kinetochores. Reason (R): Kinetochores serve as the sites of attachment of spindle fibres to the centromeres.<br><b>(a)</b> Both A and R true and R is the correct explanation of A<br><b>(b)</b> Both A and R true but R is not the correct explanation of A<br><b>(c)</b> A is true, R is false<br><b>(d)</b> A is false, R is true',
        steps: [
          'Both statements are textbook definitions. The kinetochore is precisely the disc-shaped protein structure at the centromere, and its function is exactly to anchor spindle microtubules. R is the correct mechanistic explanation of A.',
        ],
        ans: '(a).',
      },

      { t: 'p', html: '<b>5. Quantitative / Counting</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Given a starting cell number or chromosome count, find how many divisions or cells result. Often combined with meiotic phases.<br><b>Approach:</b> Use the doubling rule for mitosis (2<sup>n</sup>) and the quartering rule for meiosis products (one meiocyte → 4 haploid cells). For “how many divisions”: count the number of times you must apply the doubling operation.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'How many mitotic divisions are needed for a single cell to make 128 cells?<br><b>(a)</b> 7<br><b>(b)</b> 14<br><b>(c)</b> 28<br><b>(d)</b> 64',
        steps: [
          'Each mitotic division doubles the cell count. After n divisions: 2<sup>n</sup> = 128. 128 = 2<sup>7</sup>, so n = 7.',
        ],
        ans: '(a).',
      },

      { t: 'p', html: '<b>6. Statement-Select (“All of the above” / multi-correct)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A list of statements about one topic; option D is typically “all of the above.” These test whether you can find the one false statement among several true ones, or confirm that all are true.<br><b>Approach:</b> Verify each statement independently. If even one is false, “all of the above” cannot be correct.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Significance of mitosis involves:<br><b>(a)</b> the growth of multicellular organism<br><b>(b)</b> cell repair<br><b>(c)</b> production of diploid daughter cells with identical genetic complement<br><b>(d)</b> all of the above',
        steps: [
          'All three statements are correct: mitosis drives growth from zygote to adult, enables tissue repair, and produces genetically identical diploid daughter cells. Since every statement is true, “all of the above” is the correct choice.',
        ],
        ans: '(d) All of the above.',
      },

      { t: 'p', html: '<b>7. Cytokinesis Direction Swap</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A plant-versus-animal cytokinesis question. Options pair furrow details with plant contexts or vice versa.<br><b>Approach:</b> The two mechanisms are always opposite in direction:<br>• <b>Animal:</b> Cleavage furrow; plasma membrane pinches from <b>outside inward</b> (wall → centre). <b>Centripetal.</b><br>• <b>Plant:</b> Cell plate; new membrane and wall form from <b>centre outward</b> (centre → wall). <b>Centrifugal.</b>',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Cell plate grows from:<br><b>(a)</b> wall to centre<br><b>(b)</b> centre to walls<br><b>(c)</b> one wall to another<br><b>(d)</b> simultaneously',
        steps: [
          'The cell plate initiates at the centre of the dividing plant cell and grows outward until it fuses with the existing lateral walls. This is the defining feature of plant cell cytokinesis.',
        ],
        ans: '(b) Centre to walls.',
      },

      { t: 'p', html: '<b>8. Meiosis Phase-Bookkeeping (DNA and chromosome counts at each stage)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Given a 2n cell in G2, state chromosome number and chromatid count after Meiosis I, after Meiosis II, or per pollen grain.<br><b>Approach:</b> Track three quantities separately:',
      },
      {
        t: 'table',
        title: null,
        head: ['Stage', 'Chromosome number', 'Chromatids per chromosome', 'DNA amount (C; diploid G1 = 2C)'],
        rows: [
          ['Diploid G2 (pre-meiosis)', '2n', '2', '4C'],
          ['After Meiosis I (each cell)', 'n', '2', '2C'],
          ['After Meiosis II (each of 4 cells)', 'n', '1', '1C'],
        ],
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A diploid cell has 2n = 14. After Meiosis I, each cell has:<br><b>(a)</b> 14 chromosomes, 1 chromatid each<br><b>(b)</b> 7 chromosomes, 2 chromatids each<br><b>(c)</b> 7 chromosomes, 1 chromatid each<br><b>(d)</b> 14 chromosomes, 2 chromatids each',
        steps: [
          'Meiosis I is reductional: the homologues separate, so the chromosome number halves from 14 to 7. The sister chromatids stay joined at the centromere until Meiosis II, so each chromosome still has 2 chromatids.',
        ],
        ans: '(b) 7 chromosomes, 2 chromatids each.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'How to avoid'],
        rows: [
          [
            '<b>DNA ≠ Chromosome number</b>',
            'After S phase, DNA doubles but chromosome count stays 2n; only chromatid number changes. Students who see “DNA doubled” and answer “chromosome number doubles” are trapped.',
            'DNA amount changes in S phase and is halved per cell at cytokinesis; the chromosome number of a cell doubles when the sister chromatids separate in anaphase (no new DNA is made) and is restored per cell at cytokinesis.',
          ],
          [
            '<b>Anaphase I vs. Anaphase II</b>',
            'Anaphase I separates <b>homologous chromosomes</b> (reductional); Anaphase II separates <b>sister chromatids</b> (equational). Option (a) “sister chromatids separate” is a correct statement about Anaphase II but wrong for Anaphase I.',
            'Ask: “Are these homologues or sister chromatids?” Homologues → Anaphase I. Chromatids → Anaphase II or mitotic anaphase.',
          ],
          [
            '<b>Prophase I substage ordering</b>',
            'Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis. Each has one defining event. Options mix events across sub-stages.',
            'Anchor each substage to its one unique event: Leptotene = threads, Zygotene = synapsis, Pachytene = crossing over, Diplotene = chiasmata visible, Diakinesis = terminalization.',
          ],
          [
            '<b>“Resting phase” = Interphase</b>',
            'Interphase is called “resting” with respect to visible division, but it is far from inactive: the cell grows, makes proteins and replicates DNA. Any statement claiming that no activity occurs in interphase is a trap.',
            'The word “resting” refers only to the absence of M phase. The cell is synthesizing proteins, replicating DNA, and growing throughout interphase.',
          ],
          [
            '<b>Kinetochore direction</b>',
            'Options describe the kinetochore as attaching spindle fibres to chromatids or to the chromosome arms: both wrong.',
            'Kinetochores are protein structures at the centromere, one on each sister chromatid, where spindle microtubules attach. Spindle fibres do not attach along the chromosome arms.',
          ],
          [
            '<b>Cell plate direction</b>',
            'Plant cytokinesis options sometimes describe “wall to centre” (animal furrow) to trap students who ignore the kingdom context.',
            'Plant cell plate = centre → walls (centrifugal). Animal cleavage furrow = wall → centre (centripetal). One word decides the answer.',
          ],
          [
            '<b>Interkinesis ≠ Interphase</b>',
            'Interkinesis occurs between Meiosis I and II; it is generally short and involves <b>no DNA replication</b>. Options calling it “interphase” or “a stage between two mitotic divisions” are wrong.',
            'Interkinesis = only between the two meiotic divisions, generally short, with no S phase.',
          ],
          [
            '<b>Meiosis II called “mitosis-like”</b>',
            'Meiosis II resembles mitosis (both are equational), but they differ in that Meiosis II has no S phase before it and its chromosomes have been through crossing over (mitosis also runs on haploid cells). Options stating “both separate homologous chromosomes” apply only to Meiosis I, not Meiosis II.',
            'State the rule: Anaphase II separates <b>sister chromatids</b>, not homologues. If an option mentions homologous separation, it describes Anaphase I only.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'These questions are representative of NEET difficulty levels.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Q1. Easy: Fact recall] DNA replication in the cell cycle occurs in:<br>(a) G1 phase<br>(b) G2 phase<br>(c) S phase<br>(d) M phase',
            a: '(c) S phase. S stands for Synthesis: the only phase where DNA is replicated.',
          },
          {
            q: '[Q2. Easy: Stage identification] The stage of mitosis in which chromosomes are arranged on the equator of the spindle is:<br>(a) Anaphase<br>(b) Prophase<br>(c) Metaphase<br>(d) Telophase',
            a: '(c) Metaphase. Chromosomes align at the equatorial plate in metaphase; this is also the best stage for counting and studying chromosome morphology.',
          },
          {
            q: '[Q3. Medium: Prophase I substage] Chiasmata are first clearly visible during:<br>(a) Leptotene<br>(b) Zygotene<br>(c) Pachytene<br>(d) Diplotene',
            a: '(d) Diplotene. As the synaptonemal complex dissolves, homologous chromosomes begin to repel but remain attached at the points where crossing over occurred; these X-shaped junctions are chiasmata, first visible in diplotene.',
          },
          {
            q: '[Q4. Medium: DNA vs. chromosome number] A cell has a DNA content of 4C at the end of G2 phase (diploid; G1 = 2C). What is its DNA content in each daughter cell after mitosis?<br>(a) 2C<br>(b) 4C<br>(c) 8C<br>(d) 1C',
            a: '(a) 2C. Mitosis is equational: the G2 cell (4C, already doubled from a 2C G1 baseline) divides its DNA equally, so each daughter cell has 4C ÷ 2 = 2C.',
          },
          {
            q: '[Q5. Medium: What separates in Anaphase I] During anaphase I of meiosis:<br>(a) Sister chromatids separate<br>(b) Homologous chromosomes separate, sister chromatids stay together<br>(c) Centromeres of each chromosome split<br>(d) Each daughter cell receives the diploid number',
            a: '(b). This is the reductional step: homologous chromosome pairs (maternal and paternal) are pulled to opposite poles. The sister chromatids remain joined at their centromere and are separated only in Anaphase II. Option (a) describes Anaphase II or mitotic anaphase. Option (c) also describes anaphase II/mitotic anaphase: centromeres split there, not in Anaphase I.',
          },
          {
            q: '[Q6. Medium: Cytokinesis mechanism] Cytokinesis in a plant cell occurs by:<br>(a) Cleavage furrow from periphery inward<br>(b) Cell plate from centre outward<br>(c) Plasma membrane pinching<br>(d) Formation of syncytium',
            a: '(b). Plant cells have rigid cell walls that prevent furrowing. Instead, a cell plate (new primary wall and middle lamella) forms from the centre of the cell and grows outward to fuse with the lateral walls. Option (a) and (c) describe animal cell cytokinesis.',
          },
          {
            q: '[Q7. Hard: Counting across meiosis] How many meioses (one pollen mother cell undergoes one meiosis) are required to produce 100 pollen grains?<br>(a) 25<br>(b) 50<br>(c) 100<br>(d) 125',
            a: '(a) 25. One meiosis of a pollen mother cell (meiocyte) yields a tetrad of four haploid pollen grains. To produce 100 pollen grains: 100 ÷ 4 = 25 meioses, in 25 meiocytes.',
          },
          {
            q: '[Q8. Hard: Assertion-Reason] Assertion (A): Meiosis I is called the reductional division. Reason (R): During anaphase I, the sister chromatids of each chromosome separate and move to opposite poles. Choose: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.',
            a: '(c) A is true, R is false. Meiosis I is indeed reductional: it halves the chromosome number from 2n to n. However, R is false: anaphase I separates <b>homologous chromosomes</b>, not sister chromatids. Sister chromatids remain joined at the centromere throughout Meiosis I and are separated only in Anaphase II. This is a classic misconception.',
          },
          {
            q: '[Q9. Hard: Stage identification] In a dividing cell, homologous chromosomes are in the process of pairing (synapsis) along a synaptonemal complex that is forming between them. The cell is in:<br>(a) Mitotic prophase<br>(b) Prophase I of meiosis (zygotene)<br>(c) Prophase II of meiosis<br>(d) Metaphase I',
            a: '(b) Prophase I of meiosis (zygotene). Synapsis, the pairing of homologous chromosomes mediated by the synaptonemal complex, begins in zygotene of Prophase I (the complex is completed in pachytene). Mitosis never involves synapsis. Prophase II has no synapsis (homologues already separated in Anaphase I). Metaphase I shows bivalents already formed, not the pairing process itself.',
          },
          {
            q: '[Q10. Hard: Significance of meiosis (all-of-the-above type)] The significance of meiosis lies in:<br>(a) Reduction of chromosome number to one half<br>(b) Maintaining consistency of chromosome number during sexual reproduction<br>(c) Production of genetic variability<br>(d) All of the above',
            a: '(d) All of the above. Meiosis accomplishes all three: (a) it is the reductional division (2n → n); (b) this halving is balanced by the doubling at fertilisation, keeping the species chromosome count constant across generations; (c) crossing over (Prophase I) and independent assortment (Metaphase I) generate new genetic combinations.',
          },
          {
            q: '[Q11. Hard: Matching prophase I substages]<br><b>Column I</b><br>A. Synapsis<br>B. Crossing over<br>C. Chiasmata visible<br>D. Terminalization<br><b>Column II</b><br>I. Pachytene<br>II. Zygotene<br>III. Diplotene<br>IV. Diakinesis',
            a: 'A–II, B–I, C–III, D–IV. Synapsis = Zygotene (pairing begins). Crossing over = Pachytene (on the synapsed bivalents). Chiasmata visible = Diplotene (complex dissolves, homologues repel but remain joined). Terminalization = Diakinesis (chiasmata slide to ends).',
          },
          {
            q: '[Q12. Hard: Stage from description] “The nuclear envelope has re-formed, chromosomes have decondensed, and the nucleolus is reappearing.” This describes:<br>(a) Late prophase<br>(b) Metaphase<br>(c) Telophase<br>(d) Interkinesis',
            a: '(c) Telophase. Telophase is the reversal of prophase: the nuclear envelope reassembles around each pole’s chromosome set, chromosomes decondense back into chromatin, and the nucleolus (which disappeared at prophase or diakinesis) re-forms. Interkinesis is between Meiosis I and II and may not involve full nuclear envelope reformation.',
          },
        ],
      },

      { t: 'part', title: 'Study Tip' },
      {
        t: 'p',
        html: 'Practise C-value problems end to end: take a meiocyte at 4C and follow it through both meiotic divisions to the final 1C per gamete, converting between C notation and cell counts at each step. Also rehearse the Prophase I substages in both directions: given an event, name the substage, and given a substage, state its defining event. Both question formats are common in the exam (the book’s estimate from past papers, not official figures) and are quickly mastered by pattern-anchoring and repetition.',
      },
    ],
  },
];
