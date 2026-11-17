import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 16 (Excretory Products and their Elimination), Additional topics G to J, word for word from the
 * Class 11 Biology Master Reference (book pp. 991 to 1011): G "Osmoregulation in Different Habitats" (opens mid-page on
 * p. 991, after Addendum F's practice answers; its practice answers end on p. 994), H "Tubular Reabsorption and
 * Secretion: Segmental Details" (mid p. 994 to p. 997), I "Cheat Sheet: Chapter 16 Additional Topics" (the book's
 * "Cheat Sheet: Chapter 16 Additional Topics", foot of p. 997 to the top of p. 999) and J "What NEET Actually Asks"
 * (the book's "Addendum P", mid p. 999 to p. 1011). Page 1012 is the next chapter.
 *
 * Topic indexes: G = 10, H = 11, I = 12, J = 13. The book's example headings ("Example G.1, [NEET High-Difficulty]
 * Shark Osmoregulation") become the example's tag (the bracket) and a bold lead on its question. A table the book prints
 * inside a question (a Column I / Column II list) is set as lines of cells separated by " | ". The book prints its
 * answer options in letters (a) to (d). Scientific names do not occur in these pages. Where the book prints no answer
 * line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic G · pp. 991–994 ─────────────────────────
  {
    n: 'G',
    title: 'Osmoregulation in Different Habitats',
    extra: true,
    kalam: 'Freshwater animals fight water coming in; marine bony fish fight water going out.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter mentions osmoregulation as a function shared across animal groups in Topic 01 (the contractile vacuole of freshwater protozoa, flame cells), links ammonia, urea and uric acid to the water available in Topic 02, and uses the shark’s urea and TMAO in a worked example in Topic 03. It does not set the <b>strategies</b> of marine, freshwater and desert animals side by side (marine bony fish and their gill chloride cells, marine invertebrates, desert mammals, insects), nor the <b>nitrogenous waste of each habitat</b> as a set. These appear in NEET as integrated “compare and contrast” questions (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Three habitat types and their osmotic challenges:</b>' },
      {
        t: 'p',
        html: '<b>1. Freshwater animals</b>: environment is <b>hypotonic</b> to body fluids → water constantly enters by osmosis; salts tend to leave by diffusion.<br>• <b>Strategy:</b> Produce large volumes of dilute urine (hypoosmotic). Active uptake of salts from environment or food.<br>• <b>Nitrogenous waste:</b> Ammonotelic (NH<sub>3</sub>): dilute, requires large water output; ammonia is toxic but easily diluted.<br>• <b>Examples:</b> Freshwater bony fish, tadpoles, protozoa (contractile vacuoles expel excess water).',
      },
      {
        t: 'p',
        html: '<b>2. Marine animals</b>: seawater is <b>isotonic</b> to the body fluids of most marine invertebrates, but strongly <b>hypertonic</b> to the body fluids of marine bony fish.<br>• <b>Marine invertebrates:</b> Body fluids are isosmotic to seawater → no osmotic water flux → problem is ion regulation and getting rid of excess divalent ions (Mg<sup>2+</sup>, SO<sub>4</sub><sup>2−</sup>).<br>• <b>Marine bony fish:</b> Body fluids are <b>hypo-osmotic</b> to seawater (roughly one-third of its osmolarity) → they lose water by osmosis and gain salts. Strategy: drink seawater, actively excrete salts via gill chloride cells (Na<sup>+</sup>/K<sup>+</sup>-ATPase), and produce a small volume of urine. Their nitrogenous waste is mainly ammonia, lost across the gills.<br>• <b>Sharks and marine elasmobranchs:</b> Unique solution: retain urea and TMAO to raise blood osmolarity to match seawater → no net water flux. Urea is a waste product repurposed for osmoregulation.<br>• <b>Nitrogenous waste:</b> Marine bony fish and most marine invertebrates are ammonotelic; sharks and rays (cartilaginous fish) and marine mammals are ureotelic.<br>• <b>Key adaptation: TMAO (trimethylamine N-oxide):</b> Counteracts the destabilising effect of urea on proteins. Found in high concentrations in sharks and rays and in marine bony fish, especially deep-sea ones. The urea ∶ TMAO ratio is important for protein folding.',
      },
      {
        t: 'p',
        html: '<b>3. Terrestrial animals</b>: the major challenge is <b>water conservation</b>.<br>• <b>Strategy:</b> Mammals make highly concentrated urine (hyperosmotic); birds, reptiles and insects store the excretory product as solid or semi-solid uric acid. Minimize evaporative water loss. Nocturnal activity reduces water loss.<br>• <b>Nitrogenous waste:</b> Uricotelic (most birds, reptiles and terrestrial insects): nearly water-free excretion; ureotelic (mammals): concentrated urea; ammonotelism is costly on land (too much water needed).<br>• <b>Desert mammals:</b> Can concentrate urine to several times the human maximum (about 1,200 mOsm/L, the NCERT figure; kangaroo rats reach about 5,000–6,000 mOsm/L, a value not in NCERT) via very long loops of Henle. Counter-current multiplier is maximally developed. Minimal sweating.<br>• <b>Insects:</b> Malpighian tubules → hindgut water reabsorption → crystalline uric acid is deposited in the rectum → nearly zero water loss in excretion.',
      },
      {
        t: 'table',
        title: 'Comparative summary',
        head: ['Habitat', 'Osmotic challenge', 'Key adaptation', 'Waste form'],
        rows: [
          ['Freshwater', 'Water influx', 'Dilute urine + active salt uptake', 'Ammonia'],
          ['Marine (bony fish)', 'Water loss', 'Drink seawater + gill salt excretion', 'Ammonia (mostly)'],
          ['Marine (shark)', 'Water loss', 'Urea + TMAO retention', 'Urea'],
          ['Desert mammal', 'Water conservation', 'Long loop of Henle, concentrated urine', 'Urea'],
          ['Bird/reptile', 'Embryo protection + water', 'Uric acid (solid)', 'Uric acid'],
          ['Insect', 'Water conservation', 'Malpighian tubules + rectal reabsorption', 'Uric acid (terrestrial insects)'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Shark Osmoregulation.</b> Marine elasmobranchs (sharks and rays) retain high concentrations of urea and TMAO in their blood. Explain how this strategy helps them survive in seawater and state why TMAO is necessary alongside urea. (3 marks)',
        steps: [
          'Seawater is strongly hyperosmotic (roughly three times) to the body fluids of marine bony fish, which therefore lose water by osmosis. Elasmobranchs avoid this problem by raising their blood osmolarity to equal or slightly exceed that of seawater through retention of urea and TMAO. This eliminates the osmotic gradient → no net water loss by osmosis → the shark does not need to drink seawater constantly (unlike bony fish). TMAO is necessary because urea, while an effective osmotic agent, destabilises protein structure (denaturation) by disrupting hydrogen-bonding networks. TMAO is a protein-stabilising osmolyte that counteracts urea’s destabilising effect, protecting enzymes and structural proteins at high urea concentrations. The urea ∶ TMAO ratio in elasmobranchs is approximately 2 ∶ 1, a ratio that keeps proteins stable.',
        ],
        ans: 'Urea + TMAO raise blood osmolarity to match seawater → no osmotic water loss. TMAO protects proteins from urea-induced destabilisation.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Desert Mammal vs Human.</b> How does the kidney of a desert mammal like a kangaroo rat achieve greater urine concentration than a human kidney? (2 marks)',
        steps: [
          'The kangaroo rat’s loop of Henle is proportionally much longer relative to its body size than the human loop. A longer loop means a greater vertical extent of the medullary osmotic gradient: the counter-current multiplier can build a steeper gradient, reaching a urine concentration of about 5,000–6,000 mOsm/L (compared with ~1,200 mOsm/L in humans). With a steeper gradient, more water can be drawn osmotically out of the collecting duct, so a much smaller volume of highly concentrated urine is produced with minimal water loss. Additionally, the kangaroo rat’s vasa recta is highly efficient at preserving this gradient, and it produces very dry faeces (minimal water loss via gut).',
        ],
        ans: 'Longer loop of Henle → steeper medullary gradient → greater water reabsorption from collecting duct → more concentrated urine → reduced water loss.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the substance that marine elasmobranchs retain in their blood to raise osmolarity, and name the compound that protects their proteins from this substance.',
            a: '<b>Urea</b> (raises blood osmolarity); <b>TMAO</b> (trimethylamine N-oxide, protects proteins from urea’s destabilising effect).',
          },
          {
            q: '[CUET] State one way in which the osmoregulatory problem of a freshwater fish differs from that of a marine bony fish.',
            a: 'Freshwater fish: surrounded by hypotonic water → water constantly enters → excess water must be expelled (dilute urine). Marine bony fish: surrounded by hypertonic water → water constantly lost → must drink seawater and excrete excess salts. Opposite problems.',
          },
          {
            q: '[NEET] Why are insects described as uricotelic, and how does this relate to their water economy?',
            a: 'Terrestrial insects are uricotelic: they excrete nitrogen as uric acid, which is nearly insoluble and can be excreted as a solid paste with minimal water. This is a key adaptation to land life, where water conservation is critical. The Malpighian tubules produce a watery fluid (roughly isosmotic to the haemolymph) that is modified in the hindgut by water reabsorption, leaving dry uric acid crystals.',
          },
          {
            q: '[CBSE] Explain why ammonotelism is not a viable strategy for a desert mammal.',
            a: 'Ammonia is highly toxic and requires large amounts of water to be diluted to safe concentrations for excretion. A desert mammal cannot afford to lose the volume of water necessary to excrete its nitrogenous waste as ammonia. Urea is less toxic and requires less water; uric acid requires almost none. Ammonotelism would be fatal by dehydration.',
          },
          {
            q: '[NEET High-Difficulty] Compare the roles of chloride cells in freshwater and marine bony fish gills.',
            a: '<b>Marine fish gill chloride cells:</b> Active transport of NaCl from blood into seawater (excreting excess salts ingested from seawater). <b>Freshwater fish gill chloride cells:</b> Active uptake of Na<sup>+</sup> and Cl<sup>−</sup> from the dilute freshwater environment into the blood (replacing salts lost by diffusion).',
          },
          {
            q: '[NEET] What is the function of Malpighian tubules in a cockroach with respect to osmoregulation, and how is water conserved in the rectum?',
            a: 'Malpighian tubules collect nitrogenous waste and water from the haemolymph and deliver it to the hindgut. In the rectum, water and salts are actively reabsorbed, leaving behind semisolid uric acid crystals that are excreted with minimal water loss. This is the insect’s water-conservation strategy.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · pp. 994–997 ─────────────────────────
  {
    n: 'H',
    title: 'Tubular Reabsorption and Secretion: Segmental Details',
    extra: true,
    kalam: 'The PCT takes the bulk; the later segments fine-tune.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states the three steps of urine formation, identifies the PCT as the major reabsorption site (about 70–80% of the electrolytes), and describes the descending limb, the ascending limb, the DCT and the collecting duct in a sentence each. It does not give the later segments’ shares of the filtered sodium, the <b>transporter at each step</b>, or a table of what each segment secretes. This detail appears in NEET High-Difficulty match-the-column and multi-statement items (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Tubular reabsorption by segment (fraction of filtered load reabsorbed)',
        head: ['Segment', 'Substances reabsorbed', 'Fraction', 'Mechanism'],
        rows: [
          [
            '<b>PCT</b>',
            'Na<sup>+</sup>, glucose, amino acids, Cl<sup>−</sup>, water, K<sup>+</sup>, phosphate, bicarbonate, urea',
            'about 65% of filtered Na<sup>+</sup> and water (the usual physiology figure; NCERT gives 70–80% of electrolytes and water, a higher estimate that does not add up with the 25%, 5% and 3% below; give 70–80% in an NCERT-based question); 100% glucose; 100% amino acids',
            'Obligatory; active transport (Na<sup>+</sup>/glucose, Na<sup>+</sup>/amino acid cotransporters); passive water follows; brush border enzymes',
          ],
          [
            '<b>Descending limb</b>',
            'Water only',
            '~15% of filtered water',
            'Passive; highly permeable to water (aquaporin-1); almost impermeable to salts',
          ],
          [
            '<b>Thick ascending limb</b>',
            'Na<sup>+</sup>, K<sup>+</sup>, Cl<sup>−</sup> (solutes out)',
            '~25% of filtered Na<sup>+</sup>',
            'Active; NKCC2 transporter (Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>−</sup>), <b>impermeable to water</b>',
          ],
          [
            '<b>DCT</b>',
            'Na<sup>+</sup>, Cl<sup>−</sup> (regulated); Ca<sup>2+</sup> (fine-tuned)',
            '~5% of filtered Na<sup>+</sup>',
            'NCC transporter (thiazide-sensitive); Ca<sup>2+</sup> reabsorption via TRPV5 channels (PTH-regulated)',
          ],
          [
            '<b>Collecting duct</b>',
            'Na<sup>+</sup> (aldosterone-regulated); water (ADH-regulated); urea (ADH-regulated)',
            '~3% of filtered Na<sup>+</sup>; variable water',
            'ENaC (aldosterone); AQP2 (ADH); UT-A1 urea channel (ADH)',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Tubular secretion by segment',
        head: ['Segment', 'Substance secreted', 'Mechanism'],
        rows: [
          [
            '<b>PCT</b>',
            'Organic acids (e.g., uric acid, penicillin), bases, H<sup>+</sup>',
            'Organic anion transporter (OAT), organic cation transporter (OCT)',
          ],
          [
            '<b>DCT</b>',
            'H<sup>+</sup>, K<sup>+</sup> (regulated by aldosterone)',
            'H<sup>+</sup>-ATPase (intercalated cells); K<sup>+</sup> secretion via ROMK channels',
          ],
          [
            '<b>Collecting duct</b>',
            'H<sup>+</sup> (intercalated cells, type A); K<sup>+</sup> (principal cells); NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup>',
            'H<sup>+</sup>-ATPase (acid secretion); K<sup>+</sup> secretion (aldosterone-regulated); NH<sub>3</sub> diffusion',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key quantitative facts (GFR, the 99% reabsorbed, the urine volume and the human 1,200 mOsm/L are NCERT’s; the PCT share, the glucose threshold and the desert-mammal figure are the book’s):</b><br>• GFR ≈125 mL/min ≈180 L/day<br>• ~99% of filtrate is reabsorbed → about 1–1.5 L urine/day (1% of 180 L is 1.8 L; NCERT gives 1–1.5 L)<br>• PCT reabsorbs most of the filtered water and electrolytes (about 65% by the usual physiology figure; NCERT gives 70–80%): obligatory<br>• Glucose threshold ≈180 mg/dL plasma (above this, glycosuria occurs)<br>• Max urine concentration in humans ≈1,200 mOsm/L<br>• Max urine concentration in desert mammals: several times the human maximum<br>The segment shares for sodium (65 + 25 + 5 + 3 = 98%) are the usual physiology figures; adding NCERT’s 70–80% for the PCT to them gives more than 100%.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Segmental Reabsorption.</b> Arrange the following nephron segments in order of increasing sodium reabsorption and state which segment is impermeable to water. (2 marks)<br>PCT, descending limb of loop of Henle, thick ascending limb, DCT, collecting duct.',
        steps: [
          'The PCT reabsorbs the most sodium (about 65% of the filtered load, the usual physiology figure), then the thick ascending limb (~25%, actively, by NKCC2), then the DCT (~5%), then the collecting duct (~3%). The descending limb <b>does not reabsorb sodium</b>: it is permeable to water but almost impermeable to salts. The segment that is always impermeable to water is the <b>thick ascending limb</b> (the DCT and collecting duct are water-permeable only when ADH acts).',
        ],
        ans: 'In increasing order of sodium reabsorption: descending limb (~0%) → collecting duct (~3%) → DCT (~5%) → thick ascending limb (~25%) → PCT (~65%). The <b>thick ascending limb</b> is always impermeable to water.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Renal Threshold.</b> A healthy adult and an untreated diabetic patient both consume a meal containing 100 g of glucose. Predict what happens to blood glucose levels and urinary glucose excretion in each case. (3 marks)',
        steps: [
          'In the <b>healthy adult</b>: blood glucose rises after the meal but stays below the renal threshold (~180 mg/dL). The PCT completely reabsorbs all filtered glucose (via SGLT transporters) → no glucose in urine. In the <b>untreated diabetic patient</b>: blood glucose rises well above the renal threshold (often 250–400 mg/dL). Above the threshold concentration the PCT’s SGLT transporters begin to saturate and cannot keep up → excess glucose spills into the urine (glycosuria). The glycosuria causes an osmotic diuresis (glucose in the tubule holds water osmotically) → increased urine volume, further water and electrolyte loss → dehydration risk.',
        ],
        ans: 'Healthy adult: glucose below threshold → complete PCT reabsorption → no glycosuria. Diabetic patient: glucose above threshold → PCT transporters saturated → glucose in urine → osmotic diuresis.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] Which nephron segment has a brush border adapted for maximum reabsorption, and which substance is completely reabsorbed there under normal conditions?',
            a: 'PCT (proximal convoluted tubule): brush border with microvilli maximises surface area. Glucose and amino acids are completely reabsorbed under normal conditions.',
          },
          {
            q: '[NEET] State whether the descending limb of the loop of Henle is permeable or impermeable to (a) water and (b) solutes.',
            a: '(a) Water: permeable; (b) Solutes (Na<sup>+</sup>, salts): almost impermeable.',
          },
          {
            q: '[NEET High-Difficulty] Explain why inhibiting the NKCC2 transporter in the thick ascending limb causes a greater diuresis than inhibiting the NCC transporter in the DCT.',
            a: 'The thick ascending limb reabsorbs ~25% of filtered Na<sup>+</sup> via NKCC2, while the DCT reabsorbs only ~5% via NCC. Blocking NKCC2 removes a much larger fraction of filtered sodium → greater natriuresis → greater water loss (obligatory osmotic effect) → more powerful diuresis. Loop diuretics therefore produce a stronger effect than thiazides.',
          },
          {
            q: '[CBSE] What is meant by obligatory reabsorption and facultative reabsorption? Give one example of each.',
            a: 'Obligatory reabsorption: hormone-independent, always occurs, in the PCT (~70–80% of electrolytes, all nutrients); e.g., glucose is obligatorily reabsorbed in PCT. Facultative reabsorption: variable, hormone-controlled, in the DCT and collecting duct; e.g., water reabsorption via AQP2 (ADH-dependent).',
          },
          {
            q: '[NEET] Which segment secretes H<sup>+</sup> ions, and what is the adaptive value of this secretion?',
            a: 'The PCT (the largest share, by Na<sup>+</sup>/H<sup>+</sup> exchange), the DCT and the collecting duct (intercalated cells, type A) secrete H<sup>+</sup>. This maintains blood pH by eliminating excess acid, important after a high-protein meal or during metabolic acidosis. H<sup>+</sup> combines with buffers (phosphate, ammonia) in urine for excretion.',
          },
          {
            q: '[NEET High-Difficulty] Calculate: if GFR = 180 L/day and a person produces 1.5 L of urine per day, what percentage of the filtrate is reabsorbed?',
            a: 'Reabsorption = <frac><num>180 − 1.5</num><den>180</den></frac> × 100 = <frac><num>178.5</num><den>180</den></frac> × 100 ≈ <b>99.17%</b> (approximately 99%).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic I (the book’s Cheat Sheet) · pp. 997–999 ─────────────────────────
  {
    n: 'I',
    title: 'Cheat Sheet: Chapter 16 Additional Topics',
    extra: true,
    kalam: 'Loop of Henle = counter-current multiplier (active salt pumping, generates gradient).',
    blocks: [
      { t: 'part', title: 'Counter-current mechanism' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Loop of Henle = counter-current <b>multiplier</b> (active salt pumping, generates gradient)', note: '' },
          { f: 'Vasa recta = counter-current <b>exchanger</b> (passive, preserves gradient)', note: '' },
          { f: 'Urea recycling amplifies the gradient', note: '' },
          { f: 'Gradient: 300 → 1200 mOsm/L (cortex → inner medulla)', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'RAAS cascade' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Angiotensinogen (liver) → renin (JGA) → angiotensin-I → ACE (lung) → angiotensin-II → vasoconstriction + aldosterone + ADH', note: '' },
          { f: 'Aldosterone acts on ENaC (DCT/CD) → Na<sup>+</sup> reabsorption + K<sup>+</sup> secretion', note: '' },
          { f: 'JGA autoregulation: myogenic mechanism + tubuloglomerular feedback (macula densa sensor)', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'ADH mechanism' },
      {
        t: 'snapshot',
        rows: [
          { f: 'V2 receptor → cAMP → PKA → AQP2 insertion into apical membrane', note: '' },
          { f: 'AQP2 not inserted or not working → no water permeability → nephrogenic diabetes insipidus (lack of ADH itself is central diabetes insipidus)', note: '' },
          { f: 'AQP3/AQP4 always present on basolateral membrane', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'Ornithine (urea) cycle' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Mitochondria: CPS-I → carbamoyl phosphate; + ornithine → citrulline', note: '' },
          { f: 'Cytoplasm: + aspartate → argininosuccinate → arginine + fumarate → urea + ornithine', note: '' },
          { f: 'Fumarate links to TCA cycle; aspartate provides second nitrogen', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'Kidney endocrine roles' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Renin (JGA) → RAAS', note: '' },
          { f: 'Erythropoietin (peritubular fibroblasts) → ↑RBC production', note: '' },
          { f: '1α-hydroxylase → calcitriol (1,25-(OH)<sub>2</sub> D<sub>3</sub>) → ↑intestinal Ca<sup>2+</sup>', note: '' },
          { f: 'Prostaglandins (PGE<sub>2</sub>, PGI<sub>2</sub>) → afferent vasodilation, modulate Na<sup>+</sup> handling', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'Diuretics' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Loop (NKCC2 blocker) → ↓Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>−</sup> → powerful diuresis, hypokalaemia', note: '' },
          { f: 'Thiazides (NCC blocker) → ↓Na<sup>+</sup>/Cl<sup>−</sup> → mild diuresis, hypercalcaemia', note: '' },
          { f: 'K<sup>+</sup>-sparing (ENaC blocker or aldosterone antagonist) → ↓Na<sup>+</sup>, spare K<sup>+</sup>', note: '' },
          { f: 'Vaptans (V2 blocker) → aquaresis (water loss only)', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'Osmoregulation' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Freshwater: hypotonic → water in → dilute urine + active salt uptake; ammonotelic', note: '' },
          { f: 'Marine bony fish: body fluids hypo-osmotic to seawater → water out → drink seawater + gill salt excretion; mainly ammonotelic', note: '' },
          { f: 'Marine sharks: urea + TMAO → isosmotic to seawater', note: '' },
          { f: 'Desert mammal: water conservation → long loop → concentrated urine (several times the human 1,200 mOsm/L); ureotelic', note: '' },
          { f: 'Most birds, reptiles and terrestrial insects: uricotelic → solid uric acid', note: '' },
        ],
        aids: [],
      },
      { t: 'part', title: 'Reabsorption facts' },
      {
        t: 'snapshot',
        rows: [
          { f: 'PCT: about 65% Na<sup>+</sup> (NCERT: 70–80% of electrolytes and water), 100% glucose/amino acids, brush border, obligatory', note: '' },
          { f: 'Descending limb: water only out', note: '' },
          { f: 'Thick ascending limb: Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>−</sup> out, <b>impermeable to water</b>', note: '' },
          { f: 'DCT: NCC (thiazide target), Ca<sup>2+</sup> fine-tuning', note: '' },
          { f: 'Collecting duct: ENaC (aldosterone), AQP2 (ADH), urea (ADH)', note: '' },
          { f: 'Glucose renal threshold: ~180 mg/dL', note: '' },
          { f: '~99% of filtrate reabsorbed', note: '' },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Additional topic J (the book’s Addendum P) · pp. 999–1011 ─────────────────────────
  {
    n: 'J',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Question patterns of the kind NEET uses, each with a fully worked example, followed by a graded practice set.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Question patterns of the kind NEET uses, each with a fully worked example, followed by a graded practice set. The shares and frequencies below are the book’s estimate from past papers, not official figures.',
      },

      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'In recent NEET papers the four topics of Chapter 16 are not equally represented. A rough guide to the split (the book’s estimate from past papers, not official figures; the shares are rounded and add to roughly 100%):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approx. share of questions', 'What it contributes'],
        rows: [
          ['<b>02: Nitrogenous wastes & human excretory system</b>', '~35–40 %', 'Modes of excretion, nephron anatomy, GFR, glomerular filtrate composition'],
          ['<b>03: Urine formation & concentration</b>', '~30 %', 'The three-step sequence, counter-current mechanism, reabsorption sites, NFP'],
          ['<b>04: Regulation & disorders</b>', '~20 %', 'RAAS, ADH, ANF, micturition, dialysis, clinical terms (uremia, glycosuria, etc.)'],
          ['<b>01: Excretory organs across the animal kingdom</b>', '~15 %', 'Organ–group pairings (flame cells, Malpighian tubules, etc.)'],
        ],
      },
      {
        t: 'p',
        html: '<b>What this tells you:</b> if you are short on time, Topics 02 and 03 together account for roughly two-thirds of the chapter’s examination real estate. Within those two, the specific pairings that recur most reliably (the book’s estimate from past papers, not official figures) are:<br>• Ammonotelism / ureotelism / uricotelism + the habitat logic behind each (Topic 02)<br>• Glomerular filtrate = plasma minus almost all its proteins (Topic 02)<br>• PCT as the site of maximum reabsorption (Topics 02 & 03)<br>• The three-step urine-formation sequence (Topic 03)<br>• Loop of Henle builds the medullary osmotic gradient (Topic 03)<br>• Renin–angiotensin–aldosterone as the “conserve / raise pressure” arm (Topic 04)',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'Five question shapes account for the vast majority of questions (the book’s estimate from past papers, not official figures). Each has a recognisable texture and a crack.',
      },

      { t: 'p', html: '<b>Archetype 1: Direct Fact / Definition</b>' },
      {
        t: 'p',
        html: '<b>What it looks like.</b> A single clean stem asking for a term, a number, a pairing, or a single-sentence function. Almost no reasoning is required if you have the fact; completely inaccessible if you do not.<br><br><b>Typical example:</b> “Glomerular filtration rate (GFR) in a healthy individual is approximately<br>(a) 100 ml/min … (b) 125 ml/min …”<br><br><b>The approach that cracks it.</b> Build a short-term memory structure for every number and every “X is Y” statement the NCERT makes. The chapter fixes three numbers that appear in one form or another almost every year (the book’s estimate from past papers, not official figures):<br>• GFR ≈ 125 mL/min ≈ 180 L/day<br>• ~99 % of filtrate is reabsorbed (so ~1 % leaves as urine)<br>• Medullary osmolarity rises from ~300 mOsm/L (cortex) to ~1200 mOsm/L (inner medulla)',
      },
      { t: 'p', html: '<b>Fully worked representative example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following is the correct sequence of processes in urine formation?<br>(a) Filtration → Reabsorption → Secretion<br>(b) Reabsorption → Filtration → Secretion<br>(c) Secretion → Filtration → Reabsorption<br>(d) Filtration → Secretion → Reabsorption',
        steps: [
          'Urine formation begins when blood is forced across the glomerular membrane into Bowman’s capsule: that is filtration. The filtrate then flows along the tubule where useful substances are reclaimed: reabsorption. Finally, selected substances (H<sup>+</sup>, K<sup>+</sup>, NH<sub>3</sub>) are actively added from the blood into the tubule: secretion, which fine-tunes pH and ionic balance. The textbook order of the three processes is <b>filtration → reabsorption → secretion</b> (the last two go on along the tubule).',
          '<b>Why the distractors work.</b> Options (b) and (c) reverse the logical sequence; option (d) places secretion before reabsorption, which reverses the textbook order, in which the bulk recovery of the PCT comes before the fine-tuning of secretion in the DCT.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 2: Statement-Based / “Which of the following is correct / incorrect”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like.</b> The stem gives two to five numbered statements and asks you to identify the correct combination, the incorrect one, or the one that matches a given condition. These are dense and easy to misread under time pressure.<br><br><b>Typical example:</b> “Which of the following statements is correct with respect to kidney’s function and regulation?<br>(a) During summer when body loses lots of water by evaporation, the release of ADH is suppressed.<br>(b) When someone drinks lot of water, ADH release is suppressed.<br>(c) Exposure to cold temperature stimulates ADH release.<br>(d) An increase in glomerular blood flow stimulates formation of Angiotensin II.”<br><br><b>The approach that cracks it.</b> Treat each statement as a true/false gate. For regulation questions the single organising question is: does the body want to conserve water or dump water right now? High osmolarity / low volume → ADH goes <b>up</b>. Low osmolarity / high volume → ADH goes <b>down</b> and ANF rises.',
      },
      { t: 'p', html: '<b>Fully worked representative example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Almost all the aquatic animals excrete ammonia as the nitrogenous waste product. Which of the following statements is <b>not</b> in agreement with this situation?<br>(a) Ammonia is easily soluble in water.<br>(b) Ammonia can be excreted by diffusion across body surfaces or gills.<br>(c) Ammonia is highly toxic and needs to be eliminated as and when formed.<br>(d) Ammonia gets converted into a less toxic form called urea.',
        steps: [
          'The premise is correct: aquatic animals are ammonotelic. Evaluate each statement:',
          '(a) True: ammonia is highly water-soluble, so it dissolves readily in the surrounding water.',
          '(b) True: ammonia can diffuse out across the gills or body surface into the surrounding water.',
          '(c) True: ammonia is the most toxic nitrogenous waste; it must be eliminated promptly.',
          '(d) <b>False for ammonotelic animals</b>: the defining feature of ammonotelism is that ammonia is not converted to urea; that conversion is the ureotelic strategy.',
          'Statement (d) directly contradicts the premise of the question.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>Archetype 3: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like.</b> Two statements, Assertion (A) and Reason (R), with four answer options: both true and R explains A; both true but R does not explain A; A true, R false; A false, R true.<br><br><b>Typical example:</b> “Assertion (A): Aquatic animals like whales and seals are said to be ureotelic animals. Reason (R): It is because of the fact that their main nitrogenous waste product is urea.”<br><br><b>The approach that cracks it.</b> Two steps, in order:<br>1. Evaluate the Assertion first, in isolation from the Reason.<br>2. Only if the Assertion is true, ask whether the Reason provides a valid causal link.<br><br><b>Common trap:</b> both statements are often true individually, but the Reason does not explain the Assertion: it restates it, gives an irrelevant fact, or gets the direction of causation wrong.',
      },
      { t: 'p', html: '<b>Fully worked representative example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): The ability to produce concentrated urine depends mainly on the loop of Henle. Reason (R): The loop of Henle, along with the vasa recta, sets up a high osmolarity gradient in the medulla.<br>(a) Both true, R explains A<br>(b) Both true, R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
        steps: [
          '<b>Assertion (A):</b> True. Concentrated urine production in mammals depends mainly on the loop of Henle (counter-current multiplier), which builds a steep osmotic gradient in the medulla (with the vasa recta and urea recycling helping) that draws water out of the collecting duct.',
          '<b>Reason (R):</b> True. The loop of Henle and the vasa recta together establish and maintain the medullary gradient of approximately 300 → 1200 mOsm/L from cortex to inner medulla.',
          '<b>Does R explain A?</b> Yes. The gradient built by the loop is the mechanism that makes concentrated urine possible. Without that gradient, water cannot be osmotically drawn out of the collecting duct regardless of ADH levels.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 4: Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like.</b> Two columns (sometimes three) that must be paired by function, structure, or disorder. NEET has used this format for Topic 01 (organ → animal group), Topic 02 (structure → function), and Topic 04 (disorder → description) (the book’s estimate from past papers, not official figures).<br><br><b>The approach that cracks it.</b> Draw a quick mental table before looking at the options. For each item in Column I, recall its Column II partner from the NCERT table. Then compare your table to the given options.',
      },
      { t: 'p', html: '<b>Fully worked representative example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match the disorders in Column I with their features in Column II.<br><br>Column I | Column II<br>A. Uremia | I. Excess of protein in urine<br>B. Hematuria | II. Presence of high ketone bodies in urine<br>C. Ketonuria | III. Presence of blood cells in urine<br>D. Glycosuria | IV. Presence of glucose in urine<br>E. Proteinuria | V. Excess of urea in blood<br><br>Options:<br>(a) A–V; B–III; C–II; D–IV; E–I<br>(b) A–IV; B–V; C–III; D–II; E–I<br>(c) A–V; B–III; C–IV; D–II; E–I<br>(d) A–III; B–V; C–II; D–I; E–IV',
        steps: [
          'Build the pairs:',
          '<b>Uremia</b> = accumulation of urea in blood → <b>V</b>',
          '<b>Hematuria</b> = blood (hemat- referring to blood) in urine → <b>III</b>',
          '<b>Ketonuria</b> = ketone bodies in urine → <b>II</b>',
          '<b>Glycosuria</b> = glucose in urine → <b>IV</b>',
          '<b>Proteinuria</b> = excess protein in urine → <b>I</b>',
          'The complete match is A–V, B–III, C–II, D–IV, E–I.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 5: Diagram / Section Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like.</b> A schematic nephron or kidney L.S. with labelled parts; one label (usually X or Y or a numbered structure) is the question target. Common targets: vasa recta, loop of Henle, glomerulus, Bowman’s capsule, peritubular capillaries, collecting duct.<br><br><b>The approach that cracks it.</b> Two facts decide most of these:<br>1. <b>Location:</b> Is the structure in the cortex or the medulla? Cortical structures include the renal corpuscle, PCT, and DCT. Medullary structures include the loops of Henle of juxtamedullary nephrons and the vasa recta (which runs alongside them).<br>2. <b>Function signature:</b> The vasa recta is a U-shaped capillary running parallel to the loop of Henle; its job is to supply the medulla without washing out the osmotic gradient (counter-current exchanger). The loop of Henle is a U-shaped tubule that multiplies the gradient by handling water and salt in opposite directions in its two limbs.',
      },
      { t: 'p', html: '<b>Fully worked representative example:</b>' },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A U-shaped capillary runs parallel to the loop of Henle deep in the medulla of a nephron diagram. This structure is the ________ and its main role is ________.<br>(a) Peritubular capillary: reabsorption of glucose and amino acids in the PCT<br>(b) Vasa recta: maintaining the medullary osmotic gradient while removing reabsorbed water<br>(c) Vasa recta: filtration of plasma into Bowman’s capsule<br>(d) Efferent arteriole: supplying blood to the glomerulus',
        steps: [
          'A U-shaped capillary running alongside the loop of Henle is the <b>vasa recta</b>, which rules out (a) and (d). Filtration happens at the glomerulus, not in the vasa recta, so (c) is wrong. The vasa recta is the counter-current exchanger: blood flowing in opposite directions in its two limbs preserves the medullary gradient while carrying away the water reabsorbed from the loop and collecting duct.',
          '<b>Exam-room strategy:</b> Identify the structure first, from its shape and location, and only then match the function. Here the U-shaped capillary beside the loop of Henle is the vasa recta, which removes (a) and (d); of the two vasa recta options, filtration belongs to the glomerulus, so only (b) fits.',
        ],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The questions in this chapter are built around a handful of specific confusions. Most distractor patterns in these questions trace back to one of these (the book’s estimate, not official).',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'Why it works on students'],
        rows: [
          [
            '<b>Liver vs. kidney in urea synthesis</b>',
            '“The kidney converts ammonia to urea”',
            'Students confuse the kidney’s excretory role with the liver’s metabolic conversion. The liver makes urea; the kidney excretes it.',
          ],
          [
            '<b>Frog / tadpole stage switch</b>',
            'Writing “frog is ammonotelic”',
            'The adult land frog is ureotelic; the aquatic tadpole is ammonotelic. The word “frog” alone is the trap.',
          ],
          [
            '<b>Aquatic = ammonotelic (generalisation)</b>',
            'Forgetting that cartilaginous fishes and land-dwelling adult amphibians are ureotelic',
            'Tadpoles and most bony fish are ammonotelic, but the generalisation breaks down for sharks, rays and adult land frogs.',
          ],
          [
            '<b>Contractile vacuole = waste removal</b>',
            'Calling it an excretory organelle',
            'Its primary job is osmoregulation (expelling influx water); nitrogen leaves by diffusion.',
          ],
          [
            '<b>“Absent from filtrate” ≠ “absent from urine”</b>',
            'Confusing the filtrate composition with the final urine',
            'Glucose is filtered (present in filtrate) but normally absent from urine (fully reabsorbed). The filtrate is almost protein-free, and normally only a negligible trace of protein appears in urine.',
          ],
          [
            '<b>Loop of Henle makes urine</b>',
            'Thinking removal of the loop would stop urine formation',
            'The loop concentrates urine; without it, urine is dilute but still formed (filtration continues).',
          ],
          [
            '<b>RAAS = raise pressure, ANF = lower pressure</b>',
            'Mixing the directions',
            'RAAS (renin → angiotensin → aldosterone) conserves and raises pressure; ANF opposes it.',
          ],
          [
            '<b>ADH conserves water</b>',
            'Picking the option that says ADH increases urine volume',
            'ADH makes the collecting duct permeable → water is reabsorbed → urine volume falls.',
          ],
          [
            '<b>Antennal glands = insect organ</b>',
            'Choosing “insect” for green glands',
            'Green (antennal) glands are crustacean; insects have Malpighian tubules.',
          ],
          [
            '<b>Efferent vs. afferent arteriole calibre</b>',
            'Getting the wider-narrower relationship backwards',
            'Afferent arteriole is wider (incoming); efferent is narrower (outgoing). This mismatch builds glomerular pressure.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'p',
        html: 'The following 10 questions move from direct recall to multi-step reasoning. Each is representative of a real NEET question type; every answer follows from NCERT principles.',
      },
      {
        t: 'practice',
        items: [
          {
            q: '[Question 1: Direct recall (Easy)] Uricotelic mode of excretion is found in:<br>(a) reptiles and birds<br>(b) birds and annelids<br>(c) amphibians and reptiles<br>(d) insects and amphibians',
            a: '(a): Uricotelism (excretion as semi-solid uric acid with minimal water loss) is the hallmark of terrestrial egg-laying vertebrates (reptiles, birds) and many terrestrial insects. The key driver is water conservation: both groups need to protect developing embryos (the shell keeps liquid, soluble waste inside the egg) or conserve water in arid environments. The earthworm, the textbook annelid, has nephridia and is ureotelic; most adult land amphibians are ureotelic; insects are uricotelic but reptiles and birds together form the textbook pairing.',
          },
          {
            q: '[Question 2: Single-concept recall (Easy)] Which of the following is the site of maximum reabsorption of useful substances from the glomerular filtrate?<br>(a) Loop of Henle<br>(b) Distal convoluted tubule<br>(c) Proximal convoluted tubule<br>(d) Collecting duct',
            a: '(c): The PCT reabsorbs approximately 70–80 % of electrolytes and water, along with 100 % of glucose and amino acids (these by active transport, with water following passively). Its brush-border epithelium provides the massive surface area needed for this bulk recovery. The loop of Henle sets up the medullary gradient; the DCT handles conditional, hormone-regulated reabsorption; the collecting duct fine-tunes final water recovery under ADH. (Physiology texts give about 65% of the filtered sodium; NCERT gives 70–80% of the electrolytes and water.)',
          },
          {
            q: '[Question 3: Number + concept (Easy–Medium)] Glomerular filtration rate (GFR) in a healthy individual is approximately:<br>(a) 100 ml/min, i.e., 180 L/day<br>(b) 125 ml/min, i.e., 180 L/day<br>(c) 120 ml/min, i.e., 100 L/day<br>(d) 130 ml/min, i.e., 120 L/day',
            a: '(b): The GFR is the volume of filtrate formed per minute. The textbook value is <b>125 mL/min</b>, which extrapolates to approximately <b>180 L/day</b> (125 × 60 × 24 ÷ 1000 ≈ 180 L). This enormous volume underscores the kidney’s seemingly wasteful initial strategy of filtering nearly everything, followed by the near-total reabsorption (~99 %) that recovers what the body needs.',
          },
          {
            q: '[Question 4: Statement analysis (Medium)] Which of the following statements is correct?<br>(a) During summer when the body loses lots of water by evaporation, the release of ADH is suppressed.<br>(b) When someone drinks a lot of water, ADH release is suppressed.<br>(c) Exposure to cold temperature stimulates ADH release.<br>(d) An increase in glomerular blood flow stimulates formation of Angiotensin II.',
            a: '(b): Evaluate each statement:<br>• (a) False. Summer water loss concentrates the blood; osmoreceptors signal the hypothalamus → ADH release increases to conserve water.<br>• (b) <b>True.</b> A water load dilutes the blood; osmoreceptor firing falls → ADH release is suppressed → the collecting duct stays impermeable → excess water is excreted as dilute urine.<br>• (c) False. Cold causes peripheral vasoconstriction, shifting blood centrally; the rise in central blood volume and pressure, if anything, suppresses ADH (cold diuresis).<br>• (d) False. Increased glomerular blood flow is a high-pressure signal; it would inhibit renin release from the JGA, not stimulate angiotensin II formation. Angiotensin II is formed when GFR falls (low pressure activates the RAAS).',
          },
          {
            q: '[Question 5: Assertion–Reason (Medium)] Assertion (A): Aldosterone is a steroid hormone important in the control of sodium and potassium ion concentration in mammals. Reason (R): It promotes reabsorption of sodium ions from renal tubules and excretion of potassium ions in urine.<br>(a) Both true and R explains A<br>(b) Both true but R does not explain A<br>(c) A true, R false<br>(d) A false, R true',
            a: '(a):<br>• <b>A is true.</b> Aldosterone is a mineralocorticoid (steroid) produced by the adrenal cortex.<br>• <b>R is true.</b> Aldosterone acts on the distal parts of the nephron (DCT and collecting duct) to promote Na<sup>+</sup> reabsorption (which drags water with it, raising blood volume and pressure) and to secrete K<sup>+</sup> into the forming urine.<br>• <b>R explains A.</b> The mechanism by which aldosterone controls Na<sup>+</sup>/K<sup>+</sup> concentration is precisely the reabsorption/excretion action described in R.',
          },
          {
            q: '[Question 6: Match-the-column (Medium)] Match Column I with Column II and select the correct option.<br><br>Column I: A. Ultrafiltration; B. Concentration of urine; C. Transport of urine; D. Storage of urine<br>Column II: I. Henle’s loop; II. Ureter; III. Urinary bladder; IV. Malpighian corpuscle; V. Proximal convoluted tubule<br><br>(a) A–IV; B–I; C–II; D–III<br>(b) A–IV; B–III; C–II; D–I<br>(c) A–V; B–IV; C–I; D–III<br>(d) A–V; B–IV; C–I; D–II',
            a: '(a):<br>• Ultrafiltration occurs at the <b>Malpighian (renal) corpuscle</b> = glomerulus + Bowman’s capsule → <b>IV</b><br>• Concentration of urine depends on the medullary osmotic gradient built by <b>Henle’s loop</b> → <b>I</b><br>• Transport of urine from kidney to bladder is by the <b>ureter</b> → <b>II</b><br>• Temporary storage of urine is in the <b>urinary bladder</b> → <b>III</b><br><br>→ A–IV, B–I, C–II, D–III → <b>(a)</b>',
          },
          {
            q: '[Question 7: Multi-statement / “all are correct except” (Medium–Hard)] Which of the following statements is <b>not</b> correct with respect to the human kidney?<br>(a) The peripheral region is called cortex and central medulla.<br>(b) Malpighian capsules are present in the cortex region.<br>(c) Blood enters glomerulus through efferent arterioles.<br>(d) The concave part of kidney is called hilus.',
            a: '(c):<br>• (a) Correct: cortex (peripheral, outer) and medulla (central, inner).<br>• (b) Correct: the renal corpuscle (Malpighian capsule) is located in the cortex.<br>• (c) <b>Incorrect.</b> Blood enters the glomerulus through the afferent arteriole. The efferent arteriole carries blood away from the glomerulus.<br>• (d) Correct: the hilus is the medial concave notch through which the renal artery, vein, and ureter pass.',
          },
          {
            q: '[Question 8: Counter-current mechanism (Hard)] If Henle’s loop were experimentally removed from a mammalian nephron, which of the following would be expected?<br>(a) There will be no urine formation.<br>(b) There will be hardly any change in the quality and quantity of urine formed.<br>(c) The urine will be more concentrated.<br>(d) The urine will be more dilute.',
            a: '(d): The loop of Henle is the counter-current multiplier that builds the medullary osmotic gradient (~300 → ~1200 mOsm/L). This gradient is the physical basis on which ADH pulls water out of the collecting duct to concentrate urine. Without the gradient:<br>• Filtration still occurs at the glomerulus (so urine is formed).<br>• The collecting duct has no osmotic driving force to give up its water.<br>• The result is a large volume of <b>dilute urine</b>.<br><br>Option (a) is wrong because filtration does not require the loop. Option (c) is the direct opposite of what would happen.',
          },
          {
            q: '[Question 9: NFP calculation (Hard)] In a nephron, the glomerular hydrostatic pressure is 55 mmHg, the blood colloidal osmotic pressure is 30 mmHg, and the capsular hydrostatic pressure is 15 mmHg. The net filtration pressure is:<br>(a) +10 mmHg<br>(b) −10 mmHg<br>(c) +100 mmHg<br>(d) +45 mmHg',
            a: '(a): The Net Filtration Pressure (NFP) is given by:<br>NFP = GHP − (GCOP + CHP)<br>Where:<br>• GHP (glomerular hydrostatic pressure) = 55 mmHg: the outward force<br>• GCOP (colloidal osmotic pressure) = 30 mmHg: pulls fluid back in<br>• CHP (capsular hydrostatic pressure) = 15 mmHg: back-pressure of fluid already in Bowman’s capsule<br><br>NFP = 55 − (30 + 15) = 55 − 45 = +10 mmHg<br><br>A positive NFP means filtration proceeds. If GHP fell below ~45 mmHg (e.g., in severe hypotension), NFP would become zero or negative and filtration, and thus urine formation, would stop.',
          },
          {
            q: '[Question 10: Organ integration (Hard)] A patient is found to have elevated blood ammonia and low blood urea levels. Which organ’s failure best explains this finding, and why does it produce this specific pattern?<br>(a) Kidney: because the kidney excretes urea<br>(b) Kidney: because the kidney converts ammonia to urea<br>(c) Liver: because it converts ammonia to urea<br>(d) Liver: because it stores urea for excretion',
            a: '(c):<br>• The <b>liver</b> is the site of the ornithine (urea) cycle, where toxic ammonia is converted to the far less toxic urea. In liver failure, this conversion stalls → ammonia accumulates in the blood while urea synthesis falls.<br>• The <b>kidney</b> does not convert ammonia to urea; it excretes urea that has already been synthesised in the liver.<br>• Option (d) is wrong because the liver does not store urea; urea is a waste product that must be continuously removed.<br><br>This question integrates three distinct facts: the site of urea synthesis (liver), the consequence of liver failure (ammonia rises), and the misconception that the kidney is the site of urea formation.',
          },
        ],
      },

      { t: 'part', title: 'Three Points Worth Drilling' },
      {
        t: 'p',
        html: '1. <b>The liver makes urea; the kidney excretes it.</b> This fact is among the most reliably tested and most reliably missed (the book’s estimate from past papers, not official figures). In liver failure, ammonia rises in the blood while urea synthesis, and so blood urea, falls.<br>2. <b>Each limb of the loop of Henle does one job.</b> The descending limb lets water out (and is nearly impermeable to salt); the ascending limb lets salt out (and is impermeable to water). Neither limb does both, and that asymmetry is what every gradient question turns on.<br>3. <b>The contractile vacuole is for osmoregulation, not excretion.</b> It expels excess water; nitrogenous waste leaves by diffusion. Memory anchor: vacuole = water; tubules = waste and water.',
      },
    ],
  },
];
