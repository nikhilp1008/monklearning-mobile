import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 19 (Chemical Coordination and Integration), Additional topics B to G, word for word from the
 * Class 11 Biology Master Reference (book pp. 1147 to 1160): B "The Renin-Angiotensin-Aldosterone System (RAAS)"
 * (opens mid-page on p. 1147, after Addendum A's practice answers; its practice answers end on p. 1149), C "Calcium
 * Homeostasis: The Complete Picture" (p. 1150 to p. 1152), D "The Second Messenger Mechanism: G-Proteins and cAMP"
 * (p. 1152 to p. 1154), E "Blood Glucose Regulation: All the Players" (p. 1154 to p. 1157), F "Local Hormones and
 * Autocrine/Paracrine Signaling" (p. 1157 to p. 1160) and G "Master Summary: What This Addendum Adds" (the book's
 * "Master Summary", the table at the foot of p. 1160). p. 1161 is Additional topic H.
 *
 * Topic indexes: B = 13, C = 14, D = 15, E = 16, F = 17, G = 18. The book's headings "What the Chapter States", "What the
 * Examination Requires", "Method" and "Practice" are the parts; "Worked Example B.1 - [NEET] Title" becomes the tag
 * (the bracket) and a bold lead on the question; the book's "Step n -" labels become "Step n:". Where the book prints no
 * result line of its own the example's ans is ''. The book draws no figure on these pages (the RAAS cascade, the
 * practice lists and the tables are typeset text). Scientific names do not occur.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 1147–1149 ─────────────────────────
  {
    n: 'B',
    title: 'The Renin-Angiotensin-Aldosterone System (RAAS)',
    extra: true,
    kalam: 'NEET asks the RAAS cascade by sequence: angiotensinogen → (renin) → angiotensin I → (ACE) → angiotensin II → aldosterone.',
    blocks: [
      { t: 'part', title: 'What the Chapter States' },
      {
        t: 'p',
        html: 'The chapter notes that kidney juxtaglomerular (JG) cells secrete renin and that renin activates the renin-angiotensin-aldosterone system (RAAS) to regulate blood pressure and volume. It does not name the cascade steps, the enzymes, or the hormones between renin and aldosterone.',
      },

      { t: 'part', title: 'What the Examination Requires' },
      {
        t: 'p',
        html: 'NEET asks the RAAS cascade by sequence: angiotensinogen → (renin) → angiotensin I → (ACE) → angiotensin II → aldosterone. You must also name the converting enzyme (ACE), know that angiotensin II is the active pressor form, and understand the clinical link to ACE inhibitor drugs. (This is the book’s view of what the exam asks, from past papers, not an official figure.)',
      },

      { t: 'part', title: 'Method: The RAAS Cascade' },
      {
        t: 'p',
        html: 'The RAAS is a hormonal cascade that raises blood pressure and blood volume:',
      },
      {
        t: 'p',
        html: 'Angiotensinogen (liver) →[renin (JG cells)]→ Angiotensin I<br>→[ACE (lung endothelium)]→ Angiotensin II<br>→ Direct pressor effects<br>→ Stimulates aldosterone (adrenal cortex)',
      },
      {
        t: 'p',
        html: '<b>Step 1: Renin release.</b> Three stimuli:<br>• Decreased renal perfusion pressure (afferent arteriole stretch falls)<br>• Decreased NaCl delivery to the macula densa (cells of the distal tubule adjacent to JG cells)<br>• Sympathetic nerve stimulation (β<sub>1</sub> receptors on JG cells)',
      },
      {
        t: 'p',
        html: 'Renin cleaves angiotensinogen (a plasma α<sub>2</sub>-globulin made by the liver) to release angiotensin I (inactive, 10 amino acids).',
      },
      {
        t: 'p',
        html: '<b>Step 2: ACE.</b> Angiotensin-converting enzyme (ACE), found on pulmonary endothelial cells, cleaves two amino acids from angiotensin I to produce angiotensin II (active, 8 amino acids).',
      },
      {
        t: 'p',
        html: '<b>Step 3: Angiotensin II actions.</b><br>• Direct vasoconstriction: raises systemic vascular resistance, and constriction of the efferent arteriole of the kidney maintains glomerular pressure and therefore GFR<br>• Stimulates aldosterone release from zona glomerulosa<br>• Stimulates ADH (vasopressin) release from posterior pituitary<br>• Stimulates thirst (hypothalamus)<br>• Provides negative feedback on renin secretion',
      },
      {
        t: 'p',
        html: '<b>Step 4: Aldosterone.</b> Angiotensin II (and high K<sup>+</sup>, the other direct stimulus) acts on zona glomerulosa cells to increase aldosterone synthase (CYP11B2) activity. Aldosterone acts on principal cells of the renal collecting duct: increases Na<sup>+</sup> reabsorption (and thus water reabsorption), increases K<sup>+</sup> secretion. Net effect: increased blood volume and pressure.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>ACE Inhibitor Mechanism.</b> Explain why ACE inhibitors (e.g., enalapril) lower blood pressure. Your answer should include the RAAS cascade.',
        steps: [
          '<b>Answer:</b> ACE inhibitors block angiotensin-converting enzyme on endothelial cells (notably in the lung). This prevents conversion of angiotensin I to angiotensin II. With less angiotensin II:<br>• There is less vasoconstriction of systemic arterioles → reduced peripheral resistance.<br>• There is less stimulation of aldosterone release → reduced Na<sup>+</sup>/water reabsorption in the kidney → reduced blood volume.<br>• There is less stimulation of ADH release and thirst → reduced water intake and retention.',
          'Both reduced peripheral resistance and reduced blood volume lower arterial blood pressure.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Juxtaglomerular Apparatus and Renin.</b> Name the cells that secrete renin. State the three conditions that stimulate renin release.',
        steps: [
          '<b>Answer:</b> Renin is secreted by juxtaglomerular (JG) cells of the kidney (modified smooth muscle cells of the afferent arteriole). Three stimuli:<br>1. Fall in renal perfusion pressure (detected by stretch receptors on afferent arteriole).<br>2. Reduced NaCl at the macula densa (detected by chemoreceptors).<br>3. Sympathetic stimulation via β<sub>1</sub>-adrenergic receptors on JG cells.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Write the full RAAS cascade from angiotensinogen to aldosterone, naming each enzyme and intermediate.',
            a: 'Angiotensinogen (from the liver) → (renin) → angiotensin I → (ACE) → angiotensin II → aldosterone (angiotensin II acts through vasoconstriction and by stimulating aldosterone release).',
          },
          {
            q: '[CBSE] ACE inhibitors prevent the formation of which molecule? State two effects of this molecule that contribute to high blood pressure.',
            a: 'ACE inhibitors prevent formation of angiotensin II. Angiotensin II raises blood pressure by: (i) vasoconstriction of systemic arterioles (↑ peripheral resistance), and (ii) stimulating aldosterone secretion (↑ Na<sup>+</sup>/water retention → ↑ blood volume).',
          },
          {
            q: '[NEET] What are the two direct stimuli for aldosterone secretion from the zona glomerulosa?',
            a: 'The two main direct stimuli are: (i) angiotensin II (formed from renin-ACE cascade), and (ii) high plasma K<sup>+</sup> concentration.',
          },
          {
            q: '[CUET] A patient on an ACE inhibitor develops a dry cough. Relate this to the cascade.',
            a: 'ACE also degrades bradykinin (a vasodilator). ACE inhibitors reduce bradykinin breakdown → bradykinin accumulates → stimulates cough receptors in the airways → dry cough is a common side effect.',
          },
          {
            q: '[NEET high-difficulty] Angiotensin II stimulates thirst. Name the hypothalamic region involved and the hormone from the posterior pituitary that also rises with angiotensin II.',
            a: 'The thirst centre is in the hypothalamus (angiotensin II reaches it through the subfornical organ and OVLT). Angiotensin II also stimulates ADH (vasopressin/antidiuretic hormone) release from the posterior pituitary, promoting water retention.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 1150–1152 ─────────────────────────
  {
    n: 'C',
    title: 'Calcium Homeostasis: The Complete Picture',
    extra: true,
    kalam: 'The chapter states that PTH raises blood calcium (bone resorption, kidney reabsorption, gut absorption) and calcitonin lowers it.',
    blocks: [
      { t: 'part', title: 'What the Chapter States' },
      {
        t: 'p',
        html: 'The chapter states that PTH raises blood calcium (bone resorption, kidney reabsorption, gut absorption) and calcitonin lowers it. It names calcitonin as coming from parafollicular C cells. The chapter does not mention vitamin D or its activation pathway.',
      },

      { t: 'part', title: 'What the Examination Requires' },
      {
        t: 'p',
        html: 'NEET asks for the three calcium-regulating hormones: PTH, calcitonin, and calcitriol (1,25-dihydroxyvitamin D / active vitamin D). You must know the activation steps (liver → kidney), the organ actions of each, and why deficiency of vitamin D causes rickets and osteomalacia. (This is the book’s view of what the exam asks, from past papers, not an official figure.)',
      },

      { t: 'part', title: 'Method: The Three Calcium-Regulating Hormones' },
      {
        t: 'p',
        html: '<b>Hormone 1: Parathyroid Hormone (PTH, peptide, 84 amino acids)</b><br>Secreted by chief cells of the parathyroid glands in response to low plasma Ca<sup>2+</sup>. Actions:<br>• <b>Bone:</b> stimulates osteoclast activity (via osteoblast-mediated RANKL signaling) → calcium and phosphate release.<br>• <b>Kidney:</b> (i) increases Ca<sup>2+</sup> reabsorption in the distal convoluted tubule; (ii) decreases phosphate reabsorption in the proximal tubule (phosphaturic action).<br>• <b>Kidney (indirect):</b> stimulates 1α-hydroxylase in the proximal tubule → conversion of 25-hydroxyvitamin D to 1,25-dihydroxyvitamin D (calcitriol).',
      },
      {
        t: 'p',
        html: '<b>Hormone 2: Calcitonin (polypeptide, 32 amino acids)</b><br>Secreted by parafollicular C cells of the thyroid in response to high plasma Ca<sup>2+</sup>. Actions:<br>• <b>Bone:</b> inhibits osteoclast activity → reduces calcium release from bone.<br>• <b>Kidney:</b> increases calcium excretion (minor role in humans compared to PTH).',
      },
      {
        t: 'p',
        html: '<b>Hormone 3: Calcitriol (1,25-dihydroxyvitamin D, a steroid hormone)</b><br>Made and put to work in three steps, starting from dietary vitamin D or from vitamin D made in the skin by UV light acting on 7-dehydrocholesterol:<br>1. <b>Skin/liver:</b> Vitamin D<sub>3</sub> → 25-hydroxyvitamin D (calcidiol) [25-OH-D<sub>3</sub>], major circulating form.<br>2. <b>Kidney (proximal tubule):</b> 25-OH-D<sub>3</sub> → 1,25-dihydroxyvitamin D (calcitriol) by 1α-hydroxylase. This step is stimulated by PTH and low phosphate, and inhibited by high phosphate and FGF23.<br>3. <b>Target tissues</b> (intestine, bone, kidney): calcitriol acts on nuclear VDR receptors to increase intestinal calcium and phosphate absorption. In bone, calcitriol promotes mineralization and, together with PTH, bone remodelling.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Vitamin D Deficiency.</b> A child has bowed legs (genu varum), delayed fontanelle closure, and poor mineralization of bone. Name the deficiency and relate it to the calcium homeostasis pathway.',
        steps: [
          '<b>Answer:</b> Vitamin D deficiency causing rickets (in children) or osteomalacia (in adults). Vitamin D is converted in the liver to 25-hydroxyvitamin D and in the kidney (under PTH stimulation) to 1,25-dihydroxyvitamin D (calcitriol). Calcitriol raises intestinal calcium absorption. Without it, calcium absorption falls → plasma calcium falls → PTH is stimulated (secondary hyperparathyroidism) → PTH maintains blood calcium at the expense of bone → bone demineralization → bowing of weight-bearing long bones and delayed fontanelle closure.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Comparing the Three Calcium Hormones.</b> Complete the table. Columns: Hormone, Secreted by, Stimulus, Main target organ, Effect on blood Ca<sup>2+</sup>.<br>PTH: Secreted by ?, Stimulus ?, Main target organ ?, Effect on blood Ca<sup>2+</sup> ?<br>Calcitonin: Secreted by ?, Stimulus ?, Main target organ ?, Effect on blood Ca<sup>2+</sup> ?<br>Calcitriol: Secreted by ?, Stimulus ?, Main target organ ?, Effect on blood Ca<sup>2+</sup> ?',
        steps: [
          '<b>Answer:</b><br><b>PTH:</b> Secreted by Parathyroid chief cells, Stimulus Low plasma Ca<sup>2+</sup>, Main target organ Bone, kidney, Effect on blood Ca<sup>2+</sup> Raises Ca<sup>2+</sup><br><b>Calcitonin:</b> Secreted by Thyroid C cells (parafollicular), Stimulus High plasma Ca<sup>2+</sup>, Main target organ Bone, Effect on blood Ca<sup>2+</sup> Lowers Ca<sup>2+</sup><br><b>Calcitriol:</b> Secreted by Kidney (activated from vitamin D), Stimulus PTH; low phosphate, Main target organ Intestine, Effect on blood Ca<sup>2+</sup> Raises Ca<sup>2+</sup>',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the three hormones involved in calcium homeostasis and state one target organ for each.',
            a: 'PTH (raises Ca<sup>2+</sup>; bone and kidney); calcitonin (lowers Ca<sup>2+</sup>; bone); calcitriol (raises Ca<sup>2+</sup>; intestine).',
          },
          {
            q: '[CBSE] A patient has chronic kidney disease and develops bone pain. Explain the link using the calcium homeostasis pathway.',
            a: 'In chronic kidney disease, the kidney fails to produce 1α-hydroxylase → reduced calcitriol synthesis → reduced intestinal calcium absorption → hypocalcaemia. Low calcium (and high phosphate) stimulates the parathyroids, which enlarge and become overactive (secondary hyperparathyroidism) → secondary hyperparathyroidism → increased bone resorption → bone pain and renal osteodystrophy.',
          },
          {
            q: '[NEET] What is the role of the liver in vitamin D activation?',
            a: 'The liver performs the first hydroxylation step: vitamin D → 25-hydroxyvitamin D (calcidiol), the major circulating form. The second hydroxylation (to the active 1,25-dihydroxy form) occurs in the kidney.',
          },
          {
            q: '[CUET] State two differences between PTH and calcitonin in their primary mechanisms for raising or lowering blood calcium.',
            a: '(i) PTH acts primarily by stimulating bone resorption (osteoclast activation) and renal calcium reabsorption; calcitonin acts by inhibiting osteoclasts. (ii) PTH also stimulates renal phosphate excretion (phosphaturic), while calcitonin has minimal renal effect. (iii) PTH has a secondary effect through calcitriol synthesis; calcitonin does not affect vitamin D metabolism.',
          },
          {
            q: '[NEET high-difficulty] A patient with primary hyperparathyroidism (excess PTH) develops kidney stones. Explain why, referring to phosphate and calcium handling.',
            a: 'Excess PTH causes hypercalcaemia. Although PTH increases calcium reabsorption in the distal tubule, the raised plasma calcium increases the filtered calcium load beyond the tubules’ reabsorptive capacity → hypercalciuria. PTH also decreases phosphate reabsorption in the proximal tubule (phosphaturia), so urinary phosphate rises as well. The high concentration of calcium and phosphate (and oxalate) in the urine favours precipitation → calcium phosphate/oxalate kidney stones.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 1152–1154 ─────────────────────────
  {
    n: 'D',
    title: 'The Second Messenger Mechanism: G-Proteins and cAMP',
    extra: true,
    kalam: 'The chapter states that peptide and amine hormones bind surface receptors and generate a second messenger (e.g., cyclic AMP).',
    blocks: [
      { t: 'part', title: 'What the Chapter States' },
      {
        t: 'p',
        html: 'The chapter states that peptide and amine hormones bind surface receptors and generate a second messenger (e.g., cyclic AMP) inside the cell. It does not name the G-protein that couples the receptor to adenylyl cyclase, distinguish between stimulatory and inhibitory G-proteins, or explain the enzyme cascade that amplifies the signal.',
      },

      { t: 'part', title: 'What the Examination Requires' },
      {
        t: 'p',
        html: 'NEET asks the G<sub>s</sub>-protein mechanism (receptor → G<sub>s</sub> → adenylyl cyclase → cAMP → PKA) as a named cascade and distinguishes it from the G<sub>q</sub> pathway (IP<sub>3</sub>/DAG). You must know that one hormone-receptor binding event activates many G-proteins, each activating one adenylyl cyclase, each producing many cAMP molecules: the basis of signal amplification. (This is the book’s view of what the exam asks, from past papers, not an official figure.) This part goes beyond NCERT Class 11 Biology; treat it as extension material.',
      },

      { t: 'part', title: 'Method: The Gs-cAMP-PKA Pathway' },
      {
        t: 'p',
        html: '<b>Step 1: Hormone binding.</b> A peptide hormone (e.g., glucagon, ADH (V<sub>2</sub> receptor), TSH, FSH, LH, ACTH) binds its specific 7-transmembrane-domain receptor on the cell surface.',
      },
      {
        t: 'p',
        html: '<b>Step 2: G-protein activation.</b> The receptor is constitutively associated with a G-protein, which is a heterotrimer of α, β and γ subunits. When the hormone binds, the receptor changes conformation and acts as a guanine nucleotide exchange factor (GEF), displacing GDP from the α-subunit and allowing GTP to bind. The α-GTP subunit dissociates from the βγ complex.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Effector activation.</b> For G<sub>s</sub> (stimulatory G-protein): α<sub>s</sub>-GTP activates adenylyl cyclase (a membrane-bound enzyme). For G<sub>i</sub> (inhibitory G-protein): α<sub>i</sub>-GTP inhibits adenylyl cyclase.',
      },
      {
        t: 'p',
        html: '<b>Step 4: Second messenger.</b> Activated adenylyl cyclase converts ATP → cyclic AMP (cAMP), a second messenger. cAMP activates protein kinase A (PKA) by releasing the catalytic subunits from the regulatory subunits (cAMP binds the regulatory subunits).',
      },
      {
        t: 'p',
        html: '<b>Step 5: Phosphorylation cascade.</b> PKA phosphorylates target proteins on serine and threonine residues, changing their activity. One hormone molecule → many G-proteins → many adenylyl cyclases → many cAMP → many PKA molecules → many phosphorylated targets. This is signal amplification.',
      },
      {
        t: 'p',
        html: '<b>Step 6: Termination.</b> cAMP is degraded by phosphodiesterase (PDE) to 5′-AMP. The α-subunit has intrinsic GTPase activity and hydrolyses GTP to GDP → re-associates with βγ → G-protein is reset.',
      },
      {
        t: 'p',
        html: '<b>The G<sub>q</sub> pathway (for comparison).</b> Some receptors (e.g., α<sub>1</sub>-adrenergic, TRH, GnRH) activate G<sub>q</sub> → phospholipase C (PLC) → PIP<sub>2</sub> → IP<sub>3</sub> (releases Ca<sup>2+</sup> from ER) + DAG (activates PKC). The chapter mentions Ca<sup>2+</sup> as a second messenger; this is the pathway that generates it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Glucagon Signaling Cascade.</b> Describe the mechanism by which glucagon raises blood glucose, starting from the glucagon receptor.',
        steps: [
          '<b>Answer:</b> Glucagon binds the glucagon receptor (a 7-TM G-protein-coupled receptor) on hepatocyte membranes. This activates the G<sub>s</sub> protein: α<sub>s</sub>-GTP dissociates and activates adenylyl cyclase. Adenylyl cyclase converts ATP to cyclic AMP (cAMP). cAMP activates protein kinase A (PKA). PKA phosphorylates two key enzymes: (i) phosphorylase kinase (activating it) → activates glycogen phosphorylase → glycogen breakdown → glucose released into blood; (ii) glycogen synthase (inactivating it) → prevents glycogen synthesis. PKA also activates gluconeogenic enzymes in the cytoplasm and phosphorylates transcription factors (such as CREB) in the nucleus to increase gluconeogenic gene expression. Net effect: glucose output from the liver increases.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Why cAMP Is Called a Second Messenger.</b> Define “second messenger” and explain why cAMP qualifies. Name one other second messenger.',
        steps: [
          '<b>Answer:</b> A second messenger is an intracellular molecule generated in response to a hormone (first messenger) binding its surface receptor, which then carries the signal to intracellular target enzymes. cAMP qualifies because: it is synthesized inside the cell in response to hormone-receptor interaction; it is a small diffusible molecule that spreads through the cytoplasm; it activates an intracellular kinase (PKA) that phosphorylates target proteins. Another second messenger is IP<sub>3</sub> (inositol trisphosphate, which releases Ca<sup>2+</sup> from the endoplasmic reticulum).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Arrange in correct order: cAMP, hormone-receptor binding, PKA activation, G<sub>s</sub> activation, adenylyl cyclase activation, ATP.',
            a: 'Hormone-receptor binding → G<sub>s</sub> activation → adenylyl cyclase activation → ATP converted to cAMP → PKA activation.',
          },
          {
            q: '[CBSE] What enzyme converts ATP to cAMP? What enzyme degrades cAMP?',
            a: 'Adenylyl cyclase converts ATP to cAMP. Phosphodiesterase (PDE) degrades cAMP to 5′-AMP (inactive).',
          },
          {
            q: '[NEET] Name two hormones that use the G<sub>q</sub>-PLC-IP<sub>3</sub>/DAG pathway instead of cAMP.',
            a: 'Hormones using the G<sub>q</sub>-PLC pathway include: ADH (V1 receptor), angiotensin II, GnRH, TRH, α<sub>1</sub>-adrenergic agonists, and acetylcholine (M1/M3 receptors).',
          },
          {
            q: '[CUET] Explain why one glucagon molecule can cause the release of many glucose molecules from a hepatocyte.',
            a: 'Signal amplification at multiple steps: (i) one glucagon receptor activates many G<sub>s</sub> proteins; (ii) each α<sub>s</sub>-GTP activates one adenylyl cyclase molecule, but each adenylyl cyclase produces many cAMP molecules; (iii) the many cAMP molecules bind the regulatory subunits of PKA (four cAMP free the catalytic subunits of each PKA), so each active adenylyl cyclase switches on many PKA molecules; (iv) each activated PKA phosphorylates many target enzymes (phosphorylase kinase and glycogen phosphorylase); (v) each active glycogen phosphorylase releases many glucose molecules by cleaving the glycogen polymer. The cascade greatly amplifies the initial signal.',
          },
          {
            q: '[NEET high-difficulty] Cholera toxin causes continuous ADP-ribosylation of the G<sub>s</sub> α-subunit, locking it in the active (GTP-bound) state. Predict the cellular consequence and relate it to diarrhoea.',
            a: 'Cholera toxin ADP-ribosylates the G<sub>s</sub> α-subunit, preventing its GTPase activity → α<sub>s</sub> cannot hydrolyse GTP to GDP → it remains permanently active → adenylyl cyclase is permanently activated → cAMP levels remain high → PKA is permanently active → chloride channels (CFTR) in intestinal epithelial cells are phosphorylated and open → Cl<sup>−</sup> and water secretion into the intestinal lumen → massive secretory diarrhoea → dehydration.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 1154–1157 ─────────────────────────
  {
    n: 'E',
    title: 'Blood Glucose Regulation: All the Players',
    extra: true,
    kalam: 'The chapter names insulin (lowers glucose), glucagon (raises glucose), and states that insulin deficiency causes diabetes mellitus.',
    blocks: [
      { t: 'part', title: 'What the Chapter States' },
      {
        t: 'p',
        html: 'The chapter names insulin (lowers glucose), glucagon (raises glucose), and states that insulin deficiency causes diabetes mellitus. It names epinephrine and glucocorticoids as raising blood glucose and lists their processes (glycogenolysis, gluconeogenesis, lipolysis, proteolysis), but not the receptors and pathways behind them or the counter-regulatory response.',
      },

      { t: 'part', title: 'What the Examination Requires' },
      {
        t: 'p',
        html: 'NEET asks for the glucose-raising (counter-regulatory) hormones (glucagon, epinephrine, cortisol (the main glucocorticoid) and GH) and their mechanisms. You must also know the principle of the counter-regulatory response: during fasting or stress, these hormones act together to prevent hypoglycaemia, and they antagonize insulin’s actions. (This is the book’s view of what the exam asks, from past papers, not an official figure.) This part goes beyond NCERT Class 11 Biology; treat it as extension material.',
      },

      { t: 'part', title: 'Method: The Four Main Counter-Regulatory Hormones' },
      {
        t: 'p',
        html: '1. <b>Glucagon (from pancreatic α-cells)</b>: Primary acute counter-regulatory hormone.<br>• Mechanism: G<sub>s</sub>-cAMP-PKA cascade in hepatocytes → glycogen phosphorylase activation (glycogenolysis) + gluconeogenic enzyme activation.<br>• Trigger: hypoglycaemia, sympathetic stimulation.<br>• Site: liver (hepatocytes carry glucagon receptors; muscle does not respond to glucagon).',
      },
      {
        t: 'p',
        html: '2. <b>Epinephrine (from adrenal medulla)</b>: Rapid, acute stress response.<br>• Acts on liver (glycogenolysis via β<sub>2</sub>-G<sub>s</sub>-cAMP) and muscle (glycogenolysis via β<sub>2</sub>-G<sub>s</sub>, but muscle lacks glucose-6-phosphatase → lactate only).<br>• Acts on adipose tissue (via β<sub>1</sub>-G<sub>s</sub>) → increased lipolysis → fatty acids → substrate for hepatic gluconeogenesis.<br>• Also suppresses insulin secretion and increases glucagon secretion.<br>• Note: muscle glycogen cannot directly release glucose into blood: it releases lactate via anaerobic glycolysis, which the liver converts to glucose (Cori cycle).',
      },
      {
        t: 'p',
        html: '3. <b>Cortisol (from adrenal cortex; the principal glucocorticoid in humans)</b>: Slow, sustained counter-regulation (hours to days). Deficiency of glucocorticoids (as in Addison’s disease) causes hypoglycaemia and an impaired stress response.<br>• Mechanism: (i) Permissive effect: enhances epinephrine’s actions; (ii) stimulates gluconeogenesis in the liver (increases expression of gluconeogenic enzymes: PEPCK, fructose-1,6-bisphosphatase, glucose-6-phosphatase); (iii) reduces glucose uptake by muscle and adipose tissue (insulin resistance); (iv) promotes proteolysis (provides amino acids for gluconeogenesis).<br>• Trigger: stress (via CRH-ACTH axis), low glucose.',
      },
      {
        t: 'p',
        html: '4. <b>Growth Hormone (from anterior pituitary)</b>: Intermediate counter-regulation.<br>• Mechanism: (i) reduces cellular glucose uptake (insulin antagonism); (ii) stimulates lipolysis → fatty acids for gluconeogenesis; (iii) stimulates hepatic glucose output.<br>• Trigger: GH secretion rises during stress and hypoglycaemia; inhibits insulin’s actions on muscle and fat.',
      },
      {
        t: 'p',
        html: '<b>Integrated response to hypoglycaemia (the counter-regulatory response):</b><br>1. Insulin falls (glucose sensing by β-cells).<br>2. Glucagon rises immediately (pancreatic response).<br>3. Epinephrine rises within seconds (sympathetic nervous system → adrenal medulla).<br>4. GH rises within minutes.<br>5. Cortisol rises over 30–60 minutes (ACTH-cortisol axis).',
      },
      {
        t: 'p',
        html: 'Together they act mainly on the liver (more glucose output) and on muscle and adipose tissue (less glucose uptake, more lipolysis).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Explaining Dawn Phenomenon.</b> In a diabetic patient on insulin, blood glucose rises significantly between 4 a.m. and 8 a.m. even without eating. Name this phenomenon and explain the hormonal mechanism.',
        steps: [
          '<b>Answer:</b> This is the “dawn phenomenon” or dawn effect. It results from the normal nocturnal rise in GH and the early-morning rise in cortisol. During the night and early morning the body prepares for waking: GH secretion is highest during deep sleep early in the night (its effects last into the early morning) and cortisol secretion rises towards its early-morning peak (ACTH-cortisol axis). Both hormones are counter-regulatory: GH reduces peripheral glucose utilization and promotes lipolysis; cortisol promotes gluconeogenesis and insulin resistance. In a patient with deficient insulin, these hormones cause an exaggerated rise in blood glucose, the dawn phenomenon.',
          '<b>Note:</b> Somatostatin (from pancreatic δ-cells) also inhibits both glucagon and insulin secretion and slows GI absorption, but it is not a primary counter-regulatory hormone.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Why Does Stress Raise Blood Glucose?</b> Name two hormones released during stress and explain their mechanisms for raising blood glucose.',
        steps: [
          '<b>Answer:</b> Epinephrine and cortisol are released during stress. Epinephrine (rapid, seconds to minutes): acts mainly via the β-adrenergic G<sub>s</sub>-cAMP pathway in liver → activates glycogen phosphorylase → glycogenolysis → glucose release. It also acts on adipose tissue (β<sub>1</sub>-receptors) → lipolysis → fatty acids → hepatic gluconeogenesis substrate; suppresses insulin secretion. Cortisol (slow, hours): enters target cells, binds intracellular glucocorticoid receptor, translocates to nucleus, binds glucocorticoid response elements (GREs) on DNA → increases transcription of gluconeogenic enzymes (PEPCK, fructose-1,6-bisphosphatase, G6Pase) → increased hepatic glucose production. Cortisol also reduces insulin sensitivity in muscle and adipose tissue.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name four hormones that raise blood glucose and state one mechanism for each.',
            a: '(i) Glucagon: cAMP-PKA pathway in the liver → glycogen phosphorylase activated → glycogen breakdown. (ii) Epinephrine: β<sub>2</sub>-G<sub>s</sub>-cAMP in liver (glycogenolysis) and β<sub>1</sub> in adipose (lipolysis → gluconeogenesis substrate). (iii) Cortisol: glucocorticoid receptor → nuclear GREs → increased gluconeogenic enzyme transcription in liver. (iv) Growth hormone: reduces peripheral glucose uptake, promotes lipolysis.',
          },
          {
            q: '[CBSE] During starvation, which two hormones become the main glucose-raising hormones and why?',
            a: 'Mainly glucagon and cortisol. Glucagon remains the primary acute signal for hepatic glucose output during starvation; cortisol becomes the main sustained gluconeogenic hormone as glycogen stores are depleted (after 12–24 hours) and amino acids from muscle proteolysis provide gluconeogenic substrate.',
          },
          {
            q: '[NEET] A patient with an adrenal tumour secreting excess cortisol has high blood glucose. Name this condition and explain the mechanism.',
            a: 'Cushing’s syndrome (hypercortisolism). Excess cortisol acts on the glucocorticoid receptor in hepatocytes → upregulates gluconeogenic enzymes (PEPCK, G6Pase) → increased hepatic glucose production. Cortisol also induces insulin resistance in muscle and adipose tissue → reduced glucose uptake → hyperglycaemia.',
          },
          {
            q: '[CUET] Epinephrine breaks down glycogen in both liver and muscle, but only liver glycogen raises blood glucose. Explain.',
            a: 'Both liver and muscle have β-adrenergic G<sub>s</sub>-cAMP pathways that activate glycogen phosphorylase and cause glycogenolysis. However, only the liver has glucose-6-phosphatase, the enzyme that converts glucose-6-phosphate to free glucose for export. In muscle, the glucose-6-phosphate produced from glycogenolysis enters glycolysis (producing lactate or pyruvate) and cannot be released as free glucose into the blood. The lactate enters the Cori cycle in the liver.',
          },
          {
            q: '[NEET high-difficulty] A patient with phaeochromocytoma (adrenal medulla tumour) has hyperglycaemia. Explain using the pathway.',
            a: 'Phaeochromocytoma is a tumour of the adrenal medulla that secretes excess epinephrine (and norepinephrine). Epinephrine acts on β<sub>2</sub>-adrenergic receptors on hepatocytes → G<sub>s</sub> → adenylyl cyclase → cAMP → PKA → activates glycogen phosphorylase → glycogenolysis → glucose release. In adipose tissue, β<sub>1</sub>-receptor activation → lipolysis → free fatty acids → hepatic gluconeogenesis substrate → glucose output. Combined with epinephrine’s suppression of insulin secretion and stimulation of glucagon secretion, the net result is hyperglycaemia.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 1157–1160 ─────────────────────────
  {
    n: 'F',
    title: 'Local Hormones and Autocrine/Paracrine Signaling',
    extra: true,
    kalam: 'The chapter defines a hormone as a blood-borne intercellular messenger acting on a distant target.',
    blocks: [
      { t: 'part', title: 'What the Chapter States' },
      {
        t: 'p',
        html: 'The chapter defines a hormone as a blood-borne intercellular messenger acting on a distant target. It does not distinguish this from local signaling or mention the types of cellular communication that do not use the bloodstream.',
      },

      { t: 'part', title: 'What the Examination Requires' },
      {
        t: 'p',
        html: 'NEET asks for autocrine, paracrine, and endocrine signaling as distinct types, and tests prostaglandins as the key local hormones. You must know that prostaglandins are eicosanoids derived from arachidonic acid, and that aspirin inhibits prostaglandin synthesis by blocking cyclooxygenase (COX). (This is the book’s view of what the exam asks, from past papers, not an official figure.) This part goes beyond NCERT Class 11 Biology; treat it as extension material.',
      },

      { t: 'part', title: 'Method: Types of Cellular Communication' },
      {
        t: 'p',
        html: '<b>Endocrine:</b> hormone travels through blood to act on a distant target. Example: insulin from pancreatic β-cells acts on liver, muscle, and adipose tissue.<br><br><b>Paracrine:</b> hormone acts on neighboring cells within the same tissue, without entering the blood. The signal is local diffusion. Example: histamine released from mast cells acts on nearby blood vessels (vasodilation) and sensory nerve endings (pain, itching). Another: somatostatin secreted by δ-cells in the islets inhibits glucagon and insulin secretion in adjacent cells, a local negative feedback within the islet.<br><br><b>Autocrine:</b> cell secretes a signal that acts on itself (same cell type). Example: interleukin-2 (IL-2) secreted by a T-cell binds IL-2 receptors on that same T-cell, driving its own proliferation. Tumour cells often secrete growth factors that act on themselves (autocrine growth loops), promoting uncontrolled division.<br><br><b>Juxtacrine:</b> direct cell-to-cell contact via membrane-bound ligands on one cell binding receptors on the adjacent cell. No diffusion. Important in development and immune synapse.',
      },
      {
        t: 'p',
        html: '<b>Prostaglandins as local hormones.</b> Prostaglandins are eicosanoids made from arachidonic acid (a 20-carbon polyunsaturated fatty acid, membrane phospholipid) via the cyclooxygenase (COX) pathway. They act locally (paracrine/autocrine) on nearby cells.',
      },
      {
        t: 'p',
        html: 'Key actions the book says NEET tests:<br>• PGE<sub>2</sub>: vasodilation, protects gastric mucosa, mediates fever (pyrogens lead to more PGE<sub>2</sub> in the hypothalamus → raises set-point).<br>• PGF<sub>2α</sub>: bronchoconstriction; in uterus, causes contraction (used to induce labour).<br>• TXA<sub>2</sub> (thromboxane A<sub>2</sub>): platelet aggregation, vasoconstriction → promotes clot formation.<br>• PGI<sub>2</sub> (prostacyclin): vasodilation, inhibits platelet aggregation → prevents clotting.',
      },
      {
        t: 'p',
        html: '<b>Aspirin (acetylsalicylic acid)</b> irreversibly acetylates COX-1 and COX-2 (COX-1 more readily), blocking prostaglandin and thromboxane synthesis. This explains: (i) anti-inflammatory effect (reduced PGE<sub>2</sub>); (ii) antipyretic effect (reduced PGE<sub>2</sub> in hypothalamus); (iii) antiplatelet effect (reduced TXA<sub>2</sub> in platelets → reduced aggregation) and (iv) gastric side effects (reduced protective PGE<sub>2</sub> in gastric mucosa).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Does Aspirin Reduce Fever?</b> Explain the mechanism by which aspirin reduces fever, relating it to prostaglandin synthesis.',
        steps: [
          '<b>Answer:</b> Fever is caused when pyrogens (such as bacterial lipopolysaccharide) make macrophages release interleukin-1 and other cytokines, which lead hypothalamic endothelial cells to release PGE<sub>2</sub>. PGE<sub>2</sub> acts on the pre-optic area of the hypothalamus to raise the temperature set-point. Aspirin inhibits cyclooxygenase (COX-1 and COX-2), blocking the conversion of arachidonic acid to PGH<sub>2</sub> (prostaglandin H<sub>2</sub>), the common precursor of all prostaglandins and thromboxanes. With reduced PGE<sub>2</sub> synthesis in the hypothalamus, the set-point returns to normal body temperature, and the body radiates excess heat → fever subsides.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Autocrine vs Paracrine Signaling.</b> Give one example each of autocrine signaling and paracrine signaling, and state one difference between them.',
        steps: [
          '<b>Answer:</b><br>• Autocrine example: IL-2 secreted by a T-cell acts on the same T-cell to promote its own proliferation.<br>• Paracrine example: Somatostatin secreted by δ-cells of the pancreatic islet inhibits glucagon secretion from adjacent α-cells.',
          '<b>Difference:</b> In autocrine signaling, the cell that secretes the signal also bears the receptor and responds to it. In paracrine signaling, the signal is produced by one cell and acts on a neighboring (different) cell that carries the receptor.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Define autocrine, paracrine, and endocrine signaling, giving one example of each.',
            a: 'Endocrine: blood-borne hormone travels to distant target organ (e.g., insulin from pancreas acts on liver). Paracrine: signal diffuses to and acts on adjacent neighboring cells (e.g., histamine from mast cells acts on nearby blood vessels). Autocrine: cell secretes a signal that acts on itself (e.g., IL-2 from a T-cell acts on the same T-cell’s receptors).',
          },
          {
            q: '[CBSE] Name the precursor molecule and the enzyme involved in prostaglandin synthesis.',
            a: 'Precursor: arachidonic acid (20-carbon polyunsaturated fatty acid, released from membrane phospholipids by phospholipase A<sub>2</sub>). Enzyme: cyclooxygenase (COX-1 and COX-2; aspirin irreversibly inhibits both).',
          },
          {
            q: '[NEET] State two physiological actions of PGE<sub>2</sub> and two of TXA<sub>2</sub>.',
            a: 'PGE<sub>2</sub>: vasodilation (increases blood flow to inflamed area); protects gastric mucosa (stimulates mucus and bicarbonate secretion); raises body temperature set-point (fever). TXA<sub>2</sub>: promotes platelet aggregation (thrombosis); causes vasoconstriction.',
          },
          {
            q: '[CUET] Explain why prolonged aspirin use can cause gastric ulcers.',
            a: 'Prostaglandin E<sub>2</sub> (PGE<sub>2</sub>) is synthesized in gastric epithelial cells and acts as a local hormone to: (i) stimulate mucus and bicarbonate secretion (protective barrier); (ii) inhibit gastric acid secretion. Aspirin inhibits COX → reduces PGE<sub>2</sub> synthesis → reduced protective mucus/bicarbonate barrier → gastric acid damages the mucosa → ulcer formation. The gastric side effect is primarily from inhibition of COX-1 (constitutive enzyme) in the stomach wall.',
          },
          {
            q: '[NEET high-difficulty] During inflammation, prostaglandins cause vasodilation and sensitize pain receptors (hyperalgesia). Relate this to the therapeutic action of non-steroidal anti-inflammatory drugs (NSAIDs).',
            a: 'During inflammation, arachidonic acid is released from membrane phospholipids by phospholipase A<sub>2</sub>. COX-2 (inducible in inflammation) converts it to PGH<sub>2</sub> → PGE<sub>2</sub> and PGI<sub>2</sub>. PGE<sub>2</sub> acts on sensory nerve endings (nociceptors) in the inflamed tissue to lower their threshold for activation (sensitization → hyperalgesia, the heightened sensation of pain). PGE<sub>2</sub> and PGI<sub>2</sub> also cause vasodilation → redness and swelling (rubor and tumor). NSAIDs block COX enzymes → reduced PGE<sub>2</sub> → reduced vasodilation, reduced edema, and reduced sensitization of pain receptors → anti-inflammatory, analgesic, and antipyretic effects.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · p. 1160 ─────────────────────────
  {
    n: 'G',
    title: 'Master Summary: What This Addendum Adds',
    extra: true,
    kalam: 'These topics go beyond NCERT Class 11 Biology Chapter 19; the pattern column is the book’s own judgement of what is asked, not a count of questions.',
    blocks: [
      { t: 'part', title: 'What This Addendum Adds' },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Examination pattern (the book’s judgement)'],
        rows: [
          ['A', 'Hypothalamo-pituitary axes (TRH-TSH-T<sub>3</sub>/T<sub>4</sub>; CRH-ACTH-cortisol; GnRH-FSH/LH-gonadal)', 'Complete axis writing; level-of-defect questions; trophic hormone identification'],
          ['B', 'RAAS cascade (angiotensinogen → angiotensin I → angiotensin II → aldosterone)', 'Sequence questions; ACE inhibitor mechanism; JG cell stimuli'],
          ['C', 'Calcium homeostasis: PTH, calcitonin, and calcitriol (vitamin D pathway)', 'Three-hormone comparison; vitamin D deficiency (rickets); CKD bone disease'],
          ['D', 'Second messenger cascade: G<sub>s</sub>-cAMP-PKA; G<sub>q</sub>-IP<sub>3</sub>/DAG', 'Pathway ordering; signal amplification; cholera toxin'],
          ['E', 'Blood glucose counter-regulation: glucagon, epinephrine, cortisol, GH', 'All four hormones; dawn phenomenon; stress hyperglycaemia; cortisol mechanism'],
          ['F', 'Local hormones: autocrine, paracrine, juxtacrine; prostaglandins from arachidonic acid', 'Definitions; aspirin/NSAID mechanism; PGE<sub>2</sub> fever; TXA<sub>2</sub>/PGI<sub>2</sub> balance'],
        ],
      },
      { t: 'part', title: 'Closing note' },
      {
        t: 'p',
        html: 'These topics go beyond NCERT Class 11 Biology Chapter 19; the pattern column is the book’s own judgement of what is asked, not a count of questions.',
      },
    ],
  },
];
