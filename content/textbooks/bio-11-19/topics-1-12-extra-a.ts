import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 19 (Chemical Coordination and Integration), Topics 01 to
 * 12 and Additional topic A: pp. 1136 to 1147 of the Class 11 Biology Master
 * Reference, word for word. The chapter title page (p. 1135) and the contents
 * box (p. 1136) are not copied. The book has no sub-topics: its twelve titled
 * PARTs are Topics 01 to 12 in page order (the book's PART n is Topic n, "PART
 * n:" dropped). The "How to use this" and "Exam Relevance (whole chapter)"
 * paragraphs on p. 1136 open Topic 01. p. 1144 opens the shared introduction to
 * "Chemical Coordination and Integration: Additional Topics" (Additional topic
 * A's Introduction), then Addendum A to p. 1147. No numbered figure and no
 * unnumbered drawing is printed on these pages: the labelled-arrow chains of
 * Addendum A (pp. 1144 to 1146) are typeset text and are written as text with
 * arrows.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 1136–1137 ─────────────────────────
  {
    n: '01',
    title: 'The Big Picture: Two Systems of Coordination',
    kalam: 'The body runs on two coordination systems that work together (this integration is the chapter’s title).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to use this:</b> read top to bottom once for understanding, then use the comparison tables (Topic 08) and cheat sheet (Topic 12) for revision. Everything the chapter covers is here: the main glands, their hormones and disorders, the feedback logic, and the mechanism of hormone action.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance (whole chapter):</b> Chemical Coordination is one of the <b>highest-yield chapters for NEET</b>, as the book puts it (typically 3–5 questions; the book’s estimate from past papers, not official figures) and a reliable <b>CBSE</b> scorer (multiple 1–3 mark questions, often a gland/hormone/disorder match or a “mechanism of hormone action” short answer). <b>CUET</b> keeps it definitional. The recurring question types are: gland → hormone → target → disorder match-ups, assertion-reason on antagonistic hormone pairs (PTH/calcitonin, insulin/glucagon), and the protein-vs-steroid receptor mechanism.',
      },

      { t: 'part', title: 'The big picture: two systems of coordination' },
      {
        t: 'p',
        html: 'The body runs on <b>two coordination systems that work together</b> (this integration is the chapter’s title).',
      },
      {
        t: 'p',
        html: '<b>Neural coordination</b> is fast to switch on, brief, and localised: an electrical impulse to a specific target. It is the system for instant reactions, like pulling your hand off a hot surface.',
      },
      {
        t: 'p',
        html: '<b>Chemical coordination</b> is slow to switch on, long-lasting, and widespread: a chemical messenger broadcast through the blood, acting only on cells that carry the matching receptor. It is the system for slow, sustained processes like growth, metabolism, and reproduction.',
      },
      {
        t: 'p',
        html: 'The <b>hypothalamus</b> is the junction box where the two meet: it is brain tissue that also secretes hormones, converting nervous signals into hormonal commands.',
      },
      {
        t: 'p',
        html: '<b>What is a hormone?</b> A hormone is a <b>non-nutrient chemical that acts as an intercellular (cell-to-cell) messenger</b>, secreted in <b>trace amounts</b> by endocrine tissue, carried by blood, and acting on a distant <b>target</b> that carries its specific receptor.',
      },
      {
        t: 'p',
        html: '<b>Endocrine vs exocrine glands:</b> exocrine glands (salivary, sweat, digestive) release their products through <b>ducts</b>; endocrine glands are <b>ductless</b> and pour hormones directly into the blood. The <b>organised endocrine glands</b> in humans are the pituitary, pineal, thyroid, parathyroid, thymus, adrenal, pancreas, and gonads (testis/ovary), plus the hypothalamus. In addition, some organs that are not classical endocrine glands (the heart, kidney, and gastrointestinal tract) also secrete hormones.',
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 1137–1138 ─────────────────────────
  {
    n: '02',
    title: 'The Hypothalamus & Pituitary (the command centre)',
    kalam: 'Anterior pituitary (adenohypophysis): six hormones (mnemonic FLAT PiG: FSH, LH, ACTH, TSH, Prolactin, GH).',
    blocks: [
      { t: 'part', title: 'Hypothalamus' },
      {
        t: 'p',
        html: '<b>Hypothalamus.</b> Lies at the base of the brain and controls the pituitary by two routes:',
      },
      {
        t: 'p',
        html: '• It secretes <b>releasing hormones</b> (switch ON an anterior-pituitary hormone) and <b>inhibiting hormones</b> (switch it OFF), e.g., GnRH (releasing) and somatostatin (GH-inhibiting). These travel to the anterior pituitary through the <b>hypophyseal portal system</b> (a special blood link).<br>• It manufactures <b>oxytocin</b> and <b>ADH (vasopressin)</b>, which travel down nerve fibres to be stored in and released from the posterior pituitary.',
      },
      { t: 'part', title: 'Pituitary gland (hypophysis)' },
      {
        t: 'p',
        html: '<b>Pituitary gland (hypophysis).</b> Sits in a bony cavity (sella turcica) at the brain’s base, joined to the hypothalamus by a stalk. Two divisions:',
      },
      { t: 'part', title: 'Anterior pituitary (adenohypophysis)' },
      {
        t: 'p',
        html: '<b>Anterior pituitary (adenohypophysis), six hormones</b> (mnemonic <b>FLAT PiG</b>: FSH, LH, ACTH, TSH, Prolactin, GH). All pituitary hormones are <b>proteins/peptides</b>.',
      },
      {
        t: 'p',
        html: '• <b>GH (Growth Hormone / somatotropin):</b> body growth, protein synthesis, bone growth. Excess in childhood → <b>gigantism</b>; excess in adults → <b>acromegaly</b>; deficiency in childhood → <b>pituitary dwarfism</b>.<br>• <b>PRL (Prolactin):</b> growth of mammary glands and milk formation.<br>• <b>TSH (Thyroid-Stimulating Hormone):</b> stimulates the thyroid.<br>• <b>ACTH (Adrenocorticotropic Hormone):</b> stimulates the adrenal cortex.<br>• <b>LH & FSH (gonadotropins):</b> act on the gonads (gamete formation and sex-hormone secretion).<br>• <b>MSH</b> (from the <b>pars intermedia</b>): acts on melanocytes to control skin pigmentation.',
      },
      { t: 'part', title: 'Posterior pituitary (neurohypophysis)' },
      {
        t: 'p',
        html: '<b>Posterior pituitary (neurohypophysis).</b> Stores and releases (does <b>not</b> make) two hypothalamic hormones:',
      },
      {
        t: 'p',
        html: '• <b>Oxytocin:</b> contraction of uterine smooth muscle at childbirth and milk ejection from the mammary glands (“birth”/“milk-ejection” hormone).<br>• <b>ADH / vasopressin:</b> promotes water reabsorption by the kidney; also raises blood pressure by constricting arterioles. Deficiency → <b>diabetes insipidus</b> (large volumes of dilute urine).',
      },
    ],
  },

  // ───────────────────────── Topic 03 · p. 1138 ─────────────────────────
  {
    n: '03',
    title: 'The Pineal Gland',
    kalam: 'The pineal gland sits on the dorsal side of the forebrain and secretes melatonin.',
    blocks: [
      { t: 'part', title: 'The pineal gland' },
      {
        t: 'p',
        html: 'The <b>pineal gland</b> sits on the dorsal side of the forebrain and secretes <b>melatonin</b>.',
      },
      { t: 'part', title: 'Melatonin' },
      {
        t: 'p',
        html: '• <b>Melatonin</b> regulates the <b>24-hour (diurnal) rhythm</b> of the body: the <b>sleep–wake cycle</b> and body temperature.<br>• It also influences <b>metabolism, pigmentation, the menstrual cycle</b>, and defence/immune capability.',
      },
      {
        t: 'p',
        html: 'Think of the pineal as the body’s internal <b>clock</b>, reading day–night cues and timing rhythmic functions accordingly.',
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 1138–1139 ─────────────────────────
  {
    n: '04',
    title: 'The Thyroid, Parathyroid, Thymus & Adrenal Glands',
    kalam: 'Thyroid gland: the largest endocrine gland, two lobes flanking the trachea in the neck.',
    blocks: [
      { t: 'part', title: 'Thyroid gland' },
      {
        t: 'p',
        html: 'The <b>largest endocrine gland</b>, two lobes flanking the trachea in the neck; it holds the body’s largest iodine reserve.',
      },
      {
        t: 'p',
        html: '• <b>Follicular cells → T<sub>4</sub> (thyroxine) and T<sub>3</sub> (triiodothyronine)</b>, made from <b>tyrosine + iodine</b>. They set the <b>basal metabolic rate (BMR)</b>, control carbohydrate/protein/fat metabolism, support <b>RBC formation</b>, and maintain water/electrolyte balance.<br>• <b>Parafollicular (C) cells → thyrocalcitonin (TCT / calcitonin)</b>, a non-iodinated protein hormone that <b>lowers blood Ca<sup>2+</sup></b> (hypocalcemic).<br>• <b>Disorders:</b> iodine deficiency → <b>goitre</b> (+ hypothyroidism); hypothyroidism in foetus/infancy → <b>cretinism</b> (stunted growth, mental retardation, low IQ, deaf-mutism); in adults → <b>myxoedema</b> (Gull’s disease); hyperthyroidism → <b>Graves’ disease</b> (exophthalmos, raised metabolism). Read thyroid disorders as metabolism turned “too fast” or “too slow.”',
      },

      { t: 'part', title: 'Parathyroid glands' },
      { t: 'p', html: '<b>Four</b> glands embedded on the <b>back of the thyroid</b>.' },
      {
        t: 'p',
        html: '• <b>PTH (parathyroid hormone / Collip’s hormone)</b>, a peptide; <b>raises blood Ca<sup>2+</sup></b> (hypercalcemic) by (i) bone resorption, (ii) Ca<sup>2+</sup> reabsorption in the kidney, (iii) Ca<sup>2+</sup> absorption from the gut.<br>• <b>PTH and calcitonin are antagonists</b>, the calcium see-saw. Deficiency → tetany (low Ca<sup>2+</sup> muscle spasms); excess → osteitis fibrosa (bone disease of long-standing excess PTH) / bone weakening.',
      },

      { t: 'part', title: 'Thymus' },
      { t: 'p', html: 'A lobular gland lying between the lungs, behind the breastbone (sternum), on the <b>ventral side of the aorta</b> (in front of the heart’s great vessels).' },
      {
        t: 'p',
        html: '• <b>Thymosin</b> drives the <b>differentiation of T-lymphocytes</b> and <b>cell-mediated immunity</b> (and supports antibody production).<br>• The thymus <b>degenerates with age</b>, weakening immunity in the elderly, a normal part of ageing, not a disease.',
      },

      { t: 'part', title: 'Adrenal glands (one over each kidney)' },
      { t: 'p', html: 'Two functionally distinct regions:' },
      {
        t: 'p',
        html: '<b>Adrenal cortex</b> (outer): secretes <b>steroid hormones (corticoids)</b>, in three layers:',
      },
      {
        t: 'p',
        html: '• <b>Mineralocorticoids (aldosterone):</b> increase Na<sup>+</sup> reabsorption and K<sup>+</sup> excretion in the kidney; maintain fluid/electrolyte balance. Excess → <b>Conn’s syndrome</b>.<br>• <b>Glucocorticoids (cortisol):</b> gluconeogenesis, lipolysis, proteolysis; <b>anti-inflammatory and immune-suppressing</b> (used in organ transplants). Excess → <b>Cushing’s syndrome</b>.<br>• <b>Sex corticoids (androgens):</b> excess → <b>adrenal virilism</b>.<br>• Cortex hypoactivity → <b>Addison’s disease</b>.',
      },
      {
        t: 'p',
        html: '<b>Adrenal medulla</b> (inner): secretes the <b>catecholamines adrenaline (epinephrine) and noradrenaline (norepinephrine)</b>, the <b>“fight-or-flight” / emergency</b> hormones: raised alertness, pupil dilation, heart rate and force, respiration, glycogenolysis, lipolysis, and blood glucose.',
      },
    ],
  },

  // ───────────────────────── Topic 05 · p. 1139 ─────────────────────────
  {
    n: '05',
    title: 'The Pancreas & the Gonads',
    kalam: 'A dual gland; its endocrine portion is the Islets of Langerhans.',
    blocks: [
      { t: 'part', title: 'Pancreas: the Islets of Langerhans' },
      { t: 'p', html: 'A dual gland; its endocrine portion is the Islets of Langerhans:' },
      {
        t: 'p',
        html: '• <b>β (beta) cells → insulin:</b> <b>lowers</b> blood glucose (promotes cellular uptake and glycogenesis).<br>• <b>α (alpha) cells → glucagon:</b> <b>raises</b> blood glucose (hepatic glycogenolysis + gluconeogenesis).<br>• <b>δ (delta) cells → somatostatin:</b> regulates the islet secretions.<br>• <b>Regulation:</b> rising glucose → insulin; falling glucose → glucagon. Insulin is the body’s main glucose-lowering hormone, while glucagon, epinephrine, and glucocorticoids all raise it. Insulin deficiency → <b>diabetes mellitus</b> (high blood glucose, glycosuria, thirst, frequent urination).',
      },

      { t: 'part', title: 'Gonads' },
      {
        t: 'p',
        html: '• <b>Testis: Leydig (interstitial) cells → testosterone (androgens)</b> under LH/ICSH: male secondary sexual characters and sperm support. <b>Sertoli cells → inhibin</b> (feeds back to inhibit FSH).<br>• <b>Ovary: follicle/granulosa cells → estrogen</b> (female secondary characters, follicle development); <b>corpus luteum → progesterone</b> (supports pregnancy, prepares the endometrium for implantation, develops mammary alveoli). The corpus luteum is the yellow, progesterone-secreting body that forms from a follicle after ovulation; if pregnancy occurs it persists for about the first trimester, otherwise it degenerates.',
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 1139–1140 ─────────────────────────
  {
    n: '06',
    title: 'Hormones of the Heart, Kidney & GI Tract',
    kalam: 'Some organs that are not classical endocrine glands still secrete important hormones.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Some organs that are not classical endocrine glands still secrete important hormones:',
      },
      { t: 'part', title: 'Heart' },
      {
        t: 'p',
        html: '• <b>Heart:</b> the atrial wall secretes <b>Atrial Natriuretic Factor (ANF / ANP)</b>, which <b>lowers blood pressure</b> by dilating blood vessels.',
      },
      { t: 'part', title: 'Kidney' },
      {
        t: 'p',
        html: '• <b>Kidney:</b> the <b>juxtaglomerular (JG) cells</b> secrete <b>erythropoietin</b> (NCERT credits the JG cells; in physiology textbooks the source is the peritubular interstitial cells of the kidney), a peptide hormone that <b>stimulates RBC formation (erythropoiesis)</b>, and <b>renin</b>, which activates the <b>renin-angiotensin-aldosterone system (RAAS)</b> to regulate blood pressure and volume.',
      },
      { t: 'part', title: 'Gastrointestinal tract' },
      {
        t: 'p',
        html: '• <b>Gastrointestinal tract:</b> four major peptide hormones:<br>– <b>Gastrin</b> → stimulates secretion of gastric juice (HCl).<br>– <b>Secretin</b> → released by the duodenum under stomach acid; stimulates the liver and <b>pancreas</b> to secrete.<br>– <b>Cholecystokinin (CCK)</b> → stimulates secretion of bile and pancreatic enzymes.<br>– <b>Gastric Inhibitory Peptide (GIP)</b> → inhibits gastric secretion and motility.',
      },
    ],
  },

  // ───────────────────────── Topic 07 · p. 1140 ─────────────────────────
  {
    n: '07',
    title: 'Mechanism of Hormone Action',
    kalam: 'A hormone acts only on cells with the matching receptor.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A hormone acts only on cells with the matching <b>receptor</b>. There are <b>two mechanisms</b>, decided by one property: whether the hormone can cross the cell’s lipid membrane:',
      },
      { t: 'part', title: 'Peptide/protein hormones and catecholamines' },
      {
        t: 'p',
        html: '1. <b>Peptide/protein hormones and catecholamines</b> (insulin, glucagon, FSH, adrenaline) are <b>water-soluble</b> and <b>do not enter the cell</b>. They bind <b>receptors on the cell surface (membrane-bound receptors)</b>. Binding generates a <b>second messenger</b> inside the cell (e.g., <b>cyclic AMP</b>, IP<sub>3</sub>, Ca<sup>2+</sup>), which switches on existing enzymes. Effect: <b>fast but short-lived</b>. (Insulin’s surface receptor is itself an enzyme, a tyrosine kinase, rather than working through cAMP.)',
      },
      { t: 'part', title: 'Steroid and thyroid hormones' },
      {
        t: 'p',
        html: '2. <b>Steroid and thyroid hormones</b> (testosterone, estrogen, progesterone, cortisol, T<sub>3</sub>/T<sub>4</sub>) are <b>lipid-soluble</b> and <b>enter the cell</b>. They bind <b>intracellular receptors</b>; the hormone–receptor complex interacts with the <b>DNA/genome to regulate gene expression</b>, making new proteins. Effect: <b>slower to start but long-lasting</b>.',
      },
      { t: 'part', title: 'The one-line sort' },
      {
        t: 'p',
        html: '<b>The one-line sort:</b> Can the hormone cross the membrane? No → surface receptor + second messenger (fast). Yes → intracellular receptor + gene expression (slow, durable).',
      },
    ],
  },

  // ───────────────────────── Topic 08 · pp. 1140–1141 ─────────────────────────
  {
    n: '08',
    title: 'Master Comparison Tables (revision core)',
    kalam: 'Antagonistic pairs to memorise: insulin ⇄ glucagon (blood glucose); PTH ⇄ calcitonin (blood calcium).',
    blocks: [
      { t: 'part', title: 'Gland, hormone, action, disorder' },
      {
        t: 'table',
        title: 'Gland → Hormone → Action → Disorder',
        head: ['Gland', 'Hormone(s)', 'Key action', 'Disorder (excess / deficiency, in this order where both are given)'],
        rows: [
          [
            'Hypothalamus',
            'Releasing & inhibiting hormones; makes oxytocin, ADH',
            'Controls anterior pituitary; supplies posterior pituitary',
            'not listed',
          ],
          ['Anterior pituitary', 'GH, PRL, TSH, ACTH, FSH, LH', 'Growth + control of other glands', 'GH: gigantism/acromegaly ; dwarfism'],
          ['Posterior pituitary', 'Oxytocin, ADH', 'Childbirth/milk; water retention', 'ADH deficiency: diabetes insipidus'],
          ['Pineal', 'Melatonin', 'Diurnal rhythm, sleep–wake', 'not listed'],
          [
            'Thyroid',
            'T<sub>3</sub>/T<sub>4</sub> ; calcitonin',
            'BMR/metabolism ; lowers Ca<sup>2+</sup>',
            'Graves’ / goitre, cretinism, myxoedema',
          ],
          ['Parathyroid', 'PTH', 'Raises blood Ca<sup>2+</sup>', 'osteitis fibrosa / tetany'],
          ['Thymus', 'Thymosin', 'T-lymphocyte differentiation', '(atrophies with age)'],
          [
            'Adrenal cortex',
            'Aldosterone, cortisol, androgens',
            'Na<sup>+</sup>/K<sup>+</sup>, glucose/anti-inflammatory, sex',
            'Cushing’s, Conn’s, virilism / Addison’s',
          ],
          ['Adrenal medulla', 'Adrenaline, noradrenaline', 'Fight-or-flight', 'not listed'],
          [
            'Pancreas',
            'Insulin, glucagon, somatostatin',
            'Lower / raise blood glucose',
            'diabetes mellitus (insulin deficiency)',
          ],
          ['Testis', 'Testosterone ; inhibin', 'Male characters ; FSH feedback', 'not listed'],
          ['Ovary', 'Estrogen ; progesterone', 'Female characters ; pregnancy', 'not listed'],
          ['Heart', 'ANF', 'Lowers blood pressure', 'not listed'],
          ['Kidney', 'Erythropoietin ; renin', 'RBC formation ; BP/RAAS', 'not listed'],
          ['GI tract', 'Gastrin, secretin, CCK, GIP', 'Digestive secretions', 'not listed'],
        ],
      },
      { t: 'part', title: 'Antagonistic pairs to memorise' },
      {
        t: 'p',
        html: '<b>Antagonistic pairs to memorise:</b> insulin ⇄ glucagon (blood glucose); PTH ⇄ calcitonin (blood calcium).',
      },
    ],
  },

  // ───────────────────────── Topic 09 · p. 1141 ─────────────────────────
  {
    n: '09',
    title: 'Feedback & Regulation (how it all stays balanced)',
    kalam: 'Most command hormones are matched by a feedback or antagonist signal, keeping the internal environment stable.',
    blocks: [
      { t: 'part', title: 'The hypothalamo-pituitary axes' },
      {
        t: 'p',
        html: '1. <b>The hypothalamo-pituitary axes (negative feedback):</b> hypothalamus → pituitary (trophic hormone) → target gland → product, with the product feeding back to switch off the chain. Example (thyroid): TRH → TSH → T<sub>3</sub>/T<sub>4</sub>, and rising T<sub>3</sub>/T<sub>4</sub> inhibits both hypothalamus and pituitary. The same template runs the adrenal-cortex axis (ACTH; removing the pituitary atrophies the inner two layers of the cortex) and the gonadal axis (GnRH → FSH/LH → sex steroids + inhibin feeding back).',
      },
      { t: 'part', title: 'The calcium see-saw' },
      {
        t: 'p',
        html: '2. <b>The calcium see-saw:</b> low Ca<sup>2+</sup> → PTH raises it; high Ca<sup>2+</sup> → calcitonin lowers it.',
      },
      { t: 'part', title: 'The glucose loop' },
      {
        t: 'p',
        html: '3. <b>The glucose loop:</b> high glucose → insulin stores it; low glucose → glucagon releases it.',
      },
      { t: 'part', title: 'The unifying idea' },
      {
        t: 'p',
        html: 'The unifying idea of the whole chapter: <b>most command hormones are matched by a feedback or antagonist signal</b>, keeping the internal environment stable.',
      },
    ],
  },

  // ───────────────────────── Topic 10 · pp. 1141–1142 ─────────────────────────
  {
    n: '10',
    title: 'Worked Examples',
    kalam: 'A child has stunted growth and low IQ; an adult with the same deficiency has puffy skin and a sluggish metabolism.',
    blocks: [
      { t: 'part', title: 'Worked examples: CBSE and CUET' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'A child has stunted growth and low IQ; an adult with the same deficiency has puffy skin and a sluggish metabolism. Identify the gland, hormone, and both disorders.',
        steps: ['(same deficiency, different age sensitivity)'],
        ans: 'Thyroid; thyroxine (T<sub>3</sub>/T<sub>4</sub>); child = <b>cretinism</b>, adult = <b>myxoedema</b>',
      },
      {
        t: 'ex',
        tag: 'CUET, match',
        q: 'Match each hormone with its gland and action. Hormones: P. Aldosterone; Q. Thymosin; R. Calcitonin; S. Glucagon. Gland/action: (1) thyroid C-cells/lowers Ca<sup>2+</sup>; (2) α-cells/raises glucose; (3) adrenal cortex/Na<sup>+</sup>-K<sup>+</sup>; (4) thymus/T-cells.',
        steps: [],
        ans: 'P-3, Q-4, R-1, S-2.',
      },
      { t: 'part', title: 'Worked examples: NEET' },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'A patient passes large volumes of dilute urine and is thirsty, but blood glucose is normal.',
        steps: ['(normal glucose rules out mellitus)'],
        ans: '<b>ADH deficiency</b> → <b>diabetes insipidus</b>',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty, assertion-reason',
        q: '<b>A:</b> Steroid hormones produce slower, longer-lasting effects than protein hormones. <b>R:</b> Steroids act on intracellular receptors via gene expression; proteins act on surface receptors via second messengers. Choose: <b>(1)</b> Both true, R explains A. <b>(2)</b> Both true, R does not explain A. <b>(3)</b> A true, R false. <b>(4)</b> A false, R true.',
        steps: [],
        ans: 'Both true, R explains A.',
      },
    ],
  },

  // ───────────────────────── Topic 11 · p. 1142 ─────────────────────────
  {
    n: '11',
    title: 'Practice Questions (answers below)',
    kalam: 'Explain why a water-soluble hormone acts faster but more briefly than a steroid hormone.',
    blocks: [
      { t: 'part', title: 'Practice questions 1 to 3' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the hormone of the posterior pituitary that prevents water loss, and its deficiency disorder.',
            a: 'ADH (vasopressin); diabetes insipidus.',
          },
          {
            q: '[NEET] Which islet cells secrete insulin, glucagon, and somatostatin respectively?',
            a: 'β → insulin, α → glucagon, δ → somatostatin.',
          },
          {
            q: '[CUET] Which gland secretes melatonin and what does it regulate?',
            a: 'Pineal gland; the diurnal (sleep–wake) rhythm.',
          },
        ],
      },
      { t: 'part', title: 'Practice questions 4 and 5' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] State the antagonistic pair of hormones controlling blood calcium and what each does.',
            a: 'PTH raises blood Ca<sup>2+</sup>, calcitonin lowers it.',
          },
          {
            q: '[NEET high-difficulty] Explain why a water-soluble hormone acts faster but more briefly than a steroid hormone.',
            a: 'The water-soluble hormone works through a fast-acting second messenger on existing enzymes (quick on/off), while the steroid works by switching on genes to build new proteins (slow to start, long to fade).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Topic 12 · pp. 1142–1143 ─────────────────────────
  {
    n: '12',
    title: 'Master Cheat Sheet (everything in one place)',
    kalam: 'Coordination: neural = fast/brief/local; chemical = slow/lasting/widespread; hypothalamus links the two.',
    blocks: [
      { t: 'part', title: 'Cheat sheet: glands and hormones' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Coordination',
            note: 'neural = fast/brief/local; chemical = slow/lasting/widespread; <b>hypothalamus</b> links the two.',
          },
          { f: 'Hormone', note: 'non-nutrient intercellular messenger, trace amounts, blood-borne, receptor-specific.' },
          {
            f: 'Anterior pituitary (FLAT PiG)',
            note: 'FSH, LH, ACTH, TSH, PRL, GH (+ MSH from pars intermedia). <b>Posterior:</b> stores oxytocin & ADH.',
          },
          {
            f: '<b>Pineal</b> → <b>melatonin</b> (body clock). <b>Thymus</b> → <b>thymosin</b> (T-cells, atrophies with age).',
            note: '',
          },
          {
            f: '<b>Thyroid</b> → <b>T<sub>3</sub>/T<sub>4</sub></b> (BMR; iodine+tyrosine) + <b>calcitonin</b> (↓Ca<sup>2+</sup>). <b>Parathyroid</b> → <b>PTH</b> (↑Ca<sup>2+</sup>). PTH ⇄ calcitonin.',
            note: '',
          },
          {
            f: '<b>Adrenal cortex</b> → aldosterone (Na<sup>+</sup>/K<sup>+</sup>), cortisol (glucose/anti-inflammatory), androgens. <b>Medulla</b> → adrenaline + noradrenaline (fight-or-flight).',
            note: '',
          },
          {
            f: '<b>Pancreas</b> → insulin (↓glucose, β), glucagon (↑glucose, α), somatostatin (δ). Insulin ⇄ glucagon. Deficiency → diabetes mellitus.',
            note: '',
          },
          {
            f: '<b>Testis</b> → testosterone (Leydig) + inhibin (Sertoli). <b>Ovary</b> → estrogen (follicle) + progesterone (corpus luteum).',
            note: '',
          },
          {
            f: '<b>Heart</b> → <b>ANF</b> (↓BP). <b>Kidney</b> → <b>erythropoietin</b> (↑RBC) + <b>renin</b> (RAAS/BP). <b>GI</b> → <b>gastrin, secretin, CCK, GIP.</b>',
            note: '',
          },
        ],
        aids: [],
      },
      { t: 'part', title: 'Cheat sheet: mechanism and disorders' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Mechanism',
            note: 'water-soluble (peptide/protein, catecholamine) → surface receptor → 2nd messenger (cAMP) → fast/short. Fat-soluble (steroid/thyroid) → intracellular receptor → gene expression → slow/long.',
          },
          {
            f: 'Key disorders',
            note: 'gigantism/acromegaly/dwarfism (GH) · diabetes insipidus (ADH) · goitre/cretinism/myxoedema/Graves’ (thyroid) · tetany (PTH↓) · Cushing/Conn/Addison/virilism (adrenal) · diabetes mellitus (insulin).',
          },
          { f: 'Antagonistic pairs to never forget', note: 'insulin/glucagon, PTH/calcitonin.' },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 1144–1147 ─────────────────────────
  {
    n: 'A',
    title: 'The Hypothalamo-Pituitary Axes and Trophic Hormones',
    extra: true,
    kalam: 'Every axis follows the same three-node template.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the main glands and hormones, the two receptor mechanisms, and the classic antagonistic pairs (insulin/glucagon and PTH/calcitonin). What it cannot fully develop in its length are the regulatory cascades that NEET and CBSE repeatedly interrogate: the precise hypothalamo-pituitary-target axes with their trophic hormone chain, the renin-angiotensin-aldosterone system that connects kidney to adrenal cortex, the vitamin D pathway that completes calcium homeostasis, the second-messenger biochemistry beneath the “surface receptor” label, and the counter-regulatory hormones that govern blood glucose alongside insulin and glucagon. This addendum supplies each cascade exactly as the examination demands it.',
      },

      { t: 'part', title: 'What the chapter states' },
      {
        t: 'p',
        html: 'The chapter identifies the hypothalamus as the link between nervous and endocrine systems and names the anterior pituitary hormones (FLAT PiG). It states that the hypothalamus controls the anterior pituitary through releasing and inhibiting hormones carried by the hypophyseal portal system. The chapter traces the thyroid axis (TRH → TSH → T<sub>3</sub>/T<sub>4</sub>, with negative feedback on the hypothalamus and the pituitary) and outlines the gonadal axis (GnRH → FSH/LH → sex steroids, with inhibin feeding back). For the adrenal-cortex axis it names only ACTH and not CRH, and it uses the term “trophic hormone” without defining it.',
      },

      { t: 'part', title: 'What the examination requires' },
      {
        t: 'p',
        html: 'NEET and CBSE questions on the three hypothalamo-pituitary-target axes expect the complete hormone chain, the feedback products, and the clinical consequence of disrupting any step. You should also know that the hypophyseal portal system carries hypothalamic hormones straight to the anterior pituitary, and why it exists.',
      },

      { t: 'part', title: 'Method: Mapping Any Hypothalamo-Pituitary Axis' },
      { t: 'p', html: 'Every axis follows the same three-node template:' },
      {
        t: 'p',
        html: 'Hypothalamus –(releasing/inhibiting hormone)→ Anterior pituitary –(trophic hormone)→ Target gland –(secretes)→ Product hormone',
      },
      {
        t: 'p',
        html: 'The product hormone feeds back negatively to suppress both the hypothalamus and the anterior pituitary, a classic negative feedback loop. A <b>trophic hormone</b> is a pituitary hormone that stimulates the growth and function of another endocrine gland. All anterior pituitary hormones except prolactin and GH are trophic.',
      },
      {
        t: 'p',
        html: '<b>The hypophyseal (hypophysial) portal system</b> is a portal circulation: the superior hypophyseal artery breaks into a primary capillary plexus in the median eminence of the hypothalamus, blood drains into hypophyseal portal veins, and these veins carry the releasing/inhibiting hormones directly to a second capillary plexus in the anterior pituitary before returning to the general circulation. This short, direct route ensures hypothalamic signals reach the pituitary without dilution or delay.',
      },

      { t: 'part', title: 'Axis 1: The Thyroid Axis (TRH–TSH–T3/T4)' },
      {
        t: 'p',
        html: 'Hypothalamus –(TRH, thyrotropin-releasing hormone)→ Anterior pituitary –(TSH)→ Thyroid → T<sub>3</sub>, T<sub>4</sub>',
      },
      {
        t: 'p',
        html: '<b>Mechanism.</b> Low T<sub>3</sub>/T<sub>4</sub> or low body temperature stimulates hypothalamic neurons to secrete TRH (a peptide of three amino acids: pGlu-His-Pro-NH<sub>2</sub>). TRH travels via the portal system to thyrotrophs in the anterior pituitary, which release TSH (glycoprotein, α-subunit shared with FSH/LH, β-subunit unique). TSH binds receptors on thyroid follicular cells and stimulates every step of thyroid hormone synthesis: iodide trapping, oxidation, organification, coupling, and release. T<sub>3</sub> and T<sub>4</sub> then feed back negatively on both the hypothalamus (reducing TRH) and the pituitary (reducing TSH secretion).',
      },
      {
        t: 'p',
        html: '<b>Clinical note.</b> Primary hypothyroidism (thyroid failure) → high TSH (loss of negative feedback on pituitary) → low T<sub>3</sub>/T<sub>4</sub>. Secondary hypothyroidism (pituitary failure) → low TSH → low T<sub>3</sub>/T<sub>4</sub>. The TSH level distinguishes the level of the defect, a point the book says is often tested.',
      },

      { t: 'part', title: 'Axis 2: The Adrenal Axis (CRH–ACTH–Cortisol)' },
      {
        t: 'p',
        html: 'Hypothalamus –(CRH)→ Anterior pituitary –(ACTH)→ Adrenal cortex → cortisol',
      },
      {
        t: 'p',
        html: '<b>Mechanism.</b> Physical or psychological stress, low blood glucose, or low cortisol activates hypothalamic paraventricular neurons to secrete CRH (corticotropin-releasing hormone, a 41-amino-acid peptide). CRH reaches corticotrophs via the portal system, stimulating release of ACTH (adrenocorticotropic hormone, 39 amino acids). ACTH binds melanocortin-2 receptors on zona fasciculata cells, activating adenylyl cyclase, raising cAMP, and stimulating cortisol synthesis from cholesterol. Cortisol feeds back to suppress CRH (hypothalamus) and ACTH (pituitary).',
      },
      {
        t: 'p',
        html: '<b>Note on diurnal rhythm.</b> ACTH and cortisol secretion are lowest around midnight and rise through the early morning to a peak around the time of waking; the rhythm is driven by CRH. Stress raises CRH/ACTH/cortisol above this baseline.',
      },

      { t: 'part', title: 'Axis 3: The Gonadal Axis (GnRH–FSH/LH–Gonadal Steroids)' },
      {
        t: 'p',
        html: 'Hypothalamus –(GnRH)→ Anterior pituitary –(FSH, LH)→ Gonads → estradiol, testosterone, inhibin',
      },
      {
        t: 'p',
        html: '<b>Mechanism.</b> In both sexes, hypothalamic GnRH, a decapeptide with the sequence pGlu-His-Trp-Ser-Tyr-<br>Gly-Leu-Arg-Pro-Gly-NH<sub>2</sub>, is released in pulses (about every 1 to 2 hours in adult males). Pulses are essential: continuous GnRH desensitizes pituitary gonadotrophs and causes reproductive shutdown. GnRH travels to the anterior pituitary where it stimulates both FSH and LH release. In males, LH acts on Leydig cells to stimulate testosterone; FSH acts on Sertoli cells. In females, LH and FSH drive follicle development, ovulation, and corpus luteum formation.',
      },
      {
        t: 'p',
        html: '<b>Feedback.</b> In males, testosterone and inhibin (from Sertoli cells) both suppress the axis: testosterone acts on the hypothalamus to reduce GnRH pulse frequency, while inhibin selectively suppresses FSH. In females, feedback switches: estrogen from the developing follicle suppresses FSH/LH until, at mid-cycle, high estrogen switches to positive feedback and triggers the LH surge; after ovulation, progesterone from the corpus luteum suppresses both.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identifying the Level of a Defect.</b> A patient has low cortisol and low ACTH. A CRH stimulation test shows a rise in ACTH. Identify the level of the defect.',
        steps: [
          '<b>Analysis.</b> Low cortisol indicates hypocortisolism. Low ACTH narrows the problem to the pituitary or above. The CRH test distinguishes pituitary from hypothalamus: if ACTH rises in response to CRH, the pituitary corticotrophs are functional, they simply are not receiving CRH. Therefore the defect lies above the pituitary, at the hypothalamus (CRH deficiency).',
        ],
        ans: 'Hypothalamic defect (CRH deficiency), which causes tertiary adrenal insufficiency (by classic naming, primary = adrenal cortex, secondary = pituitary, tertiary = hypothalamus). The functional pituitary responds normally to CRH, confirming the problem lies upstream.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Writing the Complete Thyroid Axis.</b> Write the thyroid axis in order from hypothalamus to thyroid hormone, naming each hormone and stating the feedback relationship.',
        steps: [
          'The symbol ⊣ indicates negative (inhibitory) feedback: rising T<sub>3</sub>/T<sub>4</sub> suppresses both TRH (hypothalamus) and TSH (pituitary). Low T<sub>3</sub>/T<sub>4</sub> removes this inhibition, TRH rises, TSH rises, thyroid is stimulated to produce more T<sub>3</sub>/T<sub>4</sub>.',
        ],
        ans: 'Hypothalamus –(TRH)→ Anterior pituitary –(TSH)→ Thyroid → T<sub>3</sub>, T<sub>4</sub>; and T<sub>3</sub>/T<sub>4</sub> ⊣ hypothalamus and anterior pituitary (negative feedback)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A patient has low cortisol, high ACTH, and high CRH. Name the disorder and the likely level of pathology.',
            a: 'Primary adrenal insufficiency (Addison’s disease with primary cortex destruction). High ACTH and CRH (compensatory) with low cortisol indicates the adrenal cortex is not responding to ACTH, loss of negative feedback from cortisol at both hypothalamic and pituitary levels.',
          },
          {
            q: '[CBSE] Name the portal system that connects the hypothalamus to the anterior pituitary. State two structural features that make it efficient at hormone transport.',
            a: 'Hypophyseal (or hypophysial) portal system. Features: (i) it is a portal circulation: blood goes from hypothalamus capillary plexus to pituitary capillary plexus without passing through the general circulation, so hormones are not diluted; (ii) the short distance and direct venous connection allow rapid delivery.',
          },
          {
            q: '[NEET] State three anterior pituitary hormones that are trophic, and name the gland each stimulates.',
            a: 'Any three of: TSH (stimulates thyroid); ACTH (stimulates adrenal cortex); FSH (stimulates gonads); LH (stimulates gonads). Prolactin and GH are not trophic.',
          },
          {
            q: '[CUET] A woman taking a GnRH agonist drug (continuous infusion) becomes amenorrhoeic. Explain the mechanism using the gonadal axis.',
            a: 'Continuous GnRH administration desensitizes the GnRH receptors on the gonadotrophs of the pituitary (downregulation). FSH and LH secretion falls → ovarian follicle development stops → no estrogen → no LH surge → no ovulation → amenorrhoea. The axis is suppressed at the pituitary level.',
          },
          {
            q: '[NEET high-difficulty] A neonate has low T<sub>4</sub> and high TSH at birth. Is this primary or secondary hypothyroidism? What does it imply about the thyroid gland?',
            a: 'Primary hypothyroidism (thyroid gland defect). High TSH at birth indicates the pituitary is responding normally to low T<sub>4</sub> by raising TSH: the thyroid gland is not responding adequately to TSH (for example it is absent, underdeveloped or has an enzyme defect). Newborn screening programs use this TSH elevation to detect congenital hypothyroidism.',
          },
        ],
      },
    ],
  },
];
