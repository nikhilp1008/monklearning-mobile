/**
 * KEY POINTS for Biology Class 11, Chapter 19 (Chemical Coordination and
 * Integration).
 *
 * Written for test mode, in the form of the Chapter 14 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each, where the topic has them);
 * an Additional topic has two points for its central results, except the last
 * (What NEET Actually Asks), which has one Remember and one Common mistakes.
 * The chapter prints no Common student pitfalls or Pro-Tips of its own, so the
 * Don't mix up, Common mistakes and Exam shortcuts points are drawn from the
 * chapter's own contrasts, from the traps table of the last Additional topic
 * and from the worked examples.
 *
 * `topic`: Topics 01 to 12 are 0 to 11; Additional topics A to F are 12 to 17;
 * G (the Master Summary) is 18; H (What NEET Actually Asks) is 19. No point
 * refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. `say`: the cheat
 * sheet's memory aids, word for word, no markup. The cheat sheet of this
 * chapter (Topic 12) prints no memory aid (its list of aids is empty), so every
 * `say` is null and no memory line is invented.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - "everything the chapter expects you to know is here: every gland, every
 *   hormone, every disorder" and "master the comparison tables and you cover
 *   almost the entire question surface" are not repeated; "one of the
 *   highest-yield chapters", "3 to 5 questions" and the distribution shares of
 *   the last Additional topic are not given as facts (the book calls them its
 *   own estimate from past papers); no share or count is credited;
 * - hyperthyroidism "can raise RBC count" is not used; Graves’ disease is
 *   given as exophthalmos and a raised metabolic rate; "osteitis fibrosa" is
 *   not used, excess PTH is said to weaken bone; the thymus is not placed
 *   "dorsal to the heart";
 * - "insulin is the body’s only major glucose-lowering hormone" is not used;
 *   "the corpus luteum persists through the first trimester" is not used;
 * - "peptide/protein and amine hormones cannot enter the cell" is made "most":
 *   thyroid hormones are amino-acid derived and cross the membrane, and insulin
 *   uses a surface tyrosine kinase receptor, not a second messenger;
 * - "every command hormone is matched by a feedback or antagonist signal" is
 *   said of most, with the mid-cycle LH surge and oxytocin in labour as
 *   positive loops;
 * - "all anterior pituitary hormones except prolactin and GH are trophic" is
 *   given as TSH, ACTH, FSH and LH being the trophic four; the practice item
 *   that asks for three and lists four is answered as any three of the four;
 * - "the chapter gives you every gland, every hormone" and the claims that the
 *   chapter does not trace an axis or says nothing of glucose-raising hormones
 *   are not repeated;
 * - the GnRH pulse interval is given as about every 1 to 2 hours in adult
 *   males (the book prints 60 to 90 minutes), and the GnRH sequence is the book’s (checked letter by letter, ten
 *   residues); peptide lengths TRH 3 (pGlu-His-Pro), CRH 41, ACTH 39, GnRH 10, PTH 84,
 *   calcitonin 32, angiotensin I 10, II 8 are the book’s and are correct;
 * - the neonate with low T4 and high TSH is primary hypothyroidism; "the
 *   thyroid cannot respond to TSH" is not given as the one cause;
 * - RAAS: the two direct stimuli of aldosterone are given as angiotensin II
 *   and a high plasma K+ (the two the book names), not as the only ones; ACE
 *   is said to be on the endothelium, notably in the lung; the thirst centre
 *   is said to be in the hypothalamus, without the book’s "lateral
 *   hypothalamic area";
 * - calcium: in chronic kidney disease the parathyroids become enlarged and
 *   overactive, not "damaged"; calcitriol raises intestinal calcium
 *   absorption, and "required" is not used;
 * - cAMP: PKA acts through its catalytic subunits freed when cAMP binds the
 *   regulatory ones; "multiplies the signal many thousand-fold" is not
 *   quantified; ADH is given by receptor subtype (V2 with Gs, V1 with Gq);
 * - blood glucose: "all four hormones act on liver, muscle and adipose tissue
 *   to increase glucose output" is not used; the liver supplies the glucose,
 *   and muscle and fat show reduced uptake and lipolysis; the practice item
 *   "epinephrine causes glycogen breakdown in liver but not in muscle" is
 *   answered as the book’s own method does: both break glycogen down, only the
 *   liver can release free glucose; "glucagon and cortisol are the two
 *   dominant hormones" in starvation is not made exclusive;
 * - local hormones: pyrogens raise PGE2 through cytokines such as
 *   interleukin-1; arachidonic acid is released from membrane phospholipids
 *   by phospholipase A2; aspirin acetylates COX irreversibly, and the gastric
 *   effect is credited to COX-1;
 * - the traps of the last Additional topic: the fourth standard
 *   assertion-reason option is "A false, R true", and the book’s "or (d) both
 *   false" is not used; glucagon is not "given to diabetic patients" as the
 *   book’s trap option reads, and "diabetes insipidus" is ADH deficiency in its
 *   central form; "the four GI hormones" is the four the book names; "only
 *   steroid and thyroid hormones enter the cell" is not repeated.
 *
 * Markup is the chapter’s own: <sub> and <sup> for T3, T4, IP3, Ca2+, Na+, K+
 * and PGE2, no scientific name occurs, no <frac> is needed (no fraction is
 * printed), no em dash. A range is kept with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · The Big Picture: Two Systems of Coordination ──
  // pp. 1136–1137
  {
    topic: 0,
    kind: 'remember',
    q: 'How do neural and chemical coordination differ, and where do the two meet?',
    a: 'Neural coordination is fast to switch on, brief and localised: an electrical impulse to a specific target, as in pulling the hand off a hot surface. Chemical coordination is slow to switch on, long-lasting and widespread: a messenger carried by the blood to cells that carry the matching receptor, for slow, sustained processes such as growth, metabolism and reproduction. The two meet in the hypothalamus, brain tissue that also secretes hormones, so it turns nervous signals into hormonal commands',
    why: 'Fast, brief and local against slow, lasting and widespread is the contrast the cheat sheet repeats.',
    say: null,
  },
  // p. 1137
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a hormone?',
    a: 'A non-nutrient chemical that acts as an intercellular (cell-to-cell) messenger, secreted in trace amounts by endocrine tissue, carried by the blood and acting on a distant target that carries its specific receptor. The organised endocrine glands in humans are the pituitary, pineal, thyroid, parathyroid, thymus, adrenal, pancreas and gonads, with the hypothalamus; the heart, kidney and gastrointestinal tract also secrete hormones though they are not classical endocrine glands',
    why: 'Trace amounts, blood-borne, distant target and specific receptor are the four phrases that separate a hormone from a nutrient or a local signal.',
    say: null,
  },
  // p. 1137
  {
    topic: 0,
    kind: 'mixup',
    q: 'Endocrine or exocrine gland: how does each release its product?',
    a: 'Exocrine glands (salivary, sweat, digestive) release their products through ducts. Endocrine glands are ductless and pour their hormones directly into the blood',
    why: 'Ducts mean exocrine, no ducts and straight into blood means endocrine.',
    say: null,
  },

  // ── Topic 02 · The Hypothalamus & Pituitary ──
  // p. 1137
  {
    topic: 1,
    kind: 'remember',
    q: 'Which hormones does the anterior pituitary make, and what does each do?',
    a: 'Six, remembered as FLAT PiG: FSH, LH, ACTH, TSH, prolactin and GH, all proteins or peptides. GH drives body growth (excess in childhood gives gigantism, excess in adults acromegaly, deficiency in childhood pituitary dwarfism); prolactin drives growth of the mammary glands and milk formation; TSH stimulates the thyroid; ACTH stimulates the adrenal cortex; LH and FSH act on the gonads. MSH comes from the pars intermedia and acts on melanocytes to control skin pigmentation',
    why: 'Six letters, six hormones; MSH is the extra name the book gives to the pars intermedia.',
    say: null,
  },
  // p. 1137
  {
    topic: 1,
    kind: 'remember',
    q: 'How does the hypothalamus control the pituitary, and what does the posterior pituitary release?',
    a: 'Two routes. It secretes releasing hormones (switch an anterior hormone on) and inhibiting hormones (switch it off), such as GnRH and somatostatin, carried to the anterior pituitary by the hypophyseal portal system. It also makes oxytocin and ADH (vasopressin), which travel down nerve fibres to be stored in and released from the posterior pituitary. Oxytocin contracts uterine smooth muscle at childbirth and ejects milk; ADH promotes water reabsorption by the kidney and constricts arterioles, and its deficiency gives diabetes insipidus, large volumes of dilute urine',
    why: 'Releasing and inhibiting hormones go by blood to the front lobe; oxytocin and ADH go by nerve fibres to the back lobe.',
    say: null,
  },
  // p. 1137
  {
    topic: 1,
    kind: 'mixup',
    q: 'Anterior or posterior pituitary: which makes its hormones and which only stores and releases them?',
    a: 'The anterior pituitary makes its six hormones itself. The posterior pituitary does not make any: it stores and releases oxytocin and ADH, which are made in the hypothalamus',
    why: 'If an option lists oxytocin or ADH as an anterior product, or says the posterior lobe makes its own, it is wrong.',
    say: null,
  },
  // p. 1137
  {
    topic: 1,
    kind: 'mistake',
    q: 'Are the releasing hormones made by the pituitary?',
    a: 'No. They are made by the hypothalamus and reach the anterior pituitary through the hypophyseal portal system, a special blood link. The pituitary is the target, not the source',
    why: 'This swap is one of the traps the chapter’s last section lists.',
    say: null,
  },
  // p. 1137
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How can the six anterior hormones be listed quickly in an exam?',
    a: 'Write FLAT PiG down the margin: FSH, LH, ACTH, TSH, Prolactin, GH, and tick each option against it. Oxytocin and ADH are not on the list, and MSH comes from the pars intermedia',
    why: 'Spelling the six before reading the options stops a posterior hormone slipping in.',
    say: null,
  },

  // ── Topic 03 · The Pineal Gland ──
  // p. 1138
  {
    topic: 2,
    kind: 'remember',
    q: 'Where is the pineal gland and what does it secrete?',
    a: 'It sits on the dorsal side of the forebrain and secretes melatonin',
    why: 'Pineal and melatonin go together as one pair.',
    say: null,
  },
  // p. 1138
  {
    topic: 2,
    kind: 'remember',
    q: 'What does melatonin regulate?',
    a: 'The 24-hour (diurnal) rhythm of the body: the sleep–wake cycle and body temperature. It also influences metabolism, pigmentation, the menstrual cycle and defence (immune) capability. The pineal acts as the body’s clock, reading day–night cues and timing rhythmic functions',
    why: 'Sleep–wake rhythm is the first word to give for melatonin.',
    say: null,
  },
  // p. 1138
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is melatonin a product of the pituitary or the thyroid?',
    a: 'No, it is made by the pineal gland. Melatonin does influence pigmentation, but the pituitary pigmentation hormone is MSH, from the pars intermedia, so do not pick the gland by the word pigmentation',
    why: 'Pineal gland, not pituitary, is the correction the chapter’s traps table gives.',
    say: null,
  },

  // ── Topic 04 · The Thyroid, Parathyroid, Thymus & Adrenal Glands ──
  // p. 1138
  {
    topic: 3,
    kind: 'remember',
    q: 'What does the thyroid make, and what goes wrong with it?',
    a: 'The thyroid is the largest endocrine gland, two lobes either side of the trachea. Its follicular cells make T<sub>4</sub> (thyroxine) and T<sub>3</sub> (triiodothyronine) from tyrosine and iodine; they set the basal metabolic rate, control carbohydrate, protein and fat metabolism, support RBC formation and maintain water and electrolyte balance. Its parafollicular (C) cells make calcitonin, which lowers blood Ca<sup>2+</sup>. Iodine deficiency gives goitre with hypothyroidism; hyperthyroidism gives Graves’ disease (exophthalmos, raised metabolism)',
    why: 'Read thyroid disorders as metabolism turned too fast or too slow.',
    say: null,
  },
  // p. 1139
  {
    topic: 3,
    kind: 'remember',
    q: 'What do the adrenal cortex and medulla secrete?',
    a: 'The cortex, the outer part, makes steroid hormones in three layers: mineralocorticoids (aldosterone, which raises Na<sup>+</sup> reabsorption and K<sup>+</sup> excretion), glucocorticoids (cortisol, which drives gluconeogenesis, lipolysis and proteolysis and is anti-inflammatory and immune-suppressing) and sex corticoids (androgens). The medulla, the inner part, makes adrenaline and noradrenaline, the fight-or-flight hormones: raised alertness, pupil dilation, heart rate and force, respiration, glycogenolysis, lipolysis and blood glucose',
    why: 'Outer cortex is steroid, inner medulla is catecholamine.',
    say: null,
  },
  // p. 1138
  {
    topic: 3,
    kind: 'mixup',
    q: 'Cretinism or myxoedema: which is which?',
    a: 'Both come from too little thyroid hormone. In the foetus or infant it is cretinism (stunted growth, mental retardation, low IQ, deaf-mutism). In the adult it is myxoedema (Gull’s disease). The age at which the deficiency acts gives the name',
    why: 'Same deficiency, different age, different name.',
    say: null,
  },
  // p. 1138
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is thyroxine the antagonist of PTH on blood calcium?',
    a: 'No. The antagonist of PTH is calcitonin, made by the thyroid’s parafollicular cells. PTH (Collip’s hormone, from the four parathyroid glands) raises blood Ca<sup>2+</sup> by bone resorption, kidney reabsorption and gut absorption, and its deficiency causes tetany, low-calcium muscle spasms',
    why: 'Calcitonin is the thyroid’s calcium hormone; T<sub>3</sub> and T<sub>4</sub> set metabolism.',
    say: null,
  },
  // p. 1139
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you place Cushing, Conn, Addison and virilism?',
    a: 'Go by the cortex layer. Excess mineralocorticoid (aldosterone) is Conn’s syndrome; excess glucocorticoid (cortisol) is Cushing’s syndrome; excess sex corticoid (androgens) is adrenal virilism; hypoactivity of the cortex is Addison’s disease',
    why: 'Name the hormone first and the syndrome follows.',
    say: null,
  },

  // ── Topic 05 · The Pancreas & the Gonads ──
  // p. 1139
  {
    topic: 4,
    kind: 'remember',
    q: 'Which islet cells make which hormone, and what does each do?',
    a: 'In the Islets of Langerhans, the endocrine part of this dual gland, β cells make insulin, which lowers blood glucose (cellular uptake and glycogenesis); α cells make glucagon, which raises it (hepatic glycogenolysis and gluconeogenesis); δ cells make somatostatin, which regulates the islet secretions. Rising glucose brings insulin, falling glucose brings glucagon, and insulin deficiency gives diabetes mellitus: high blood glucose, glycosuria, thirst and frequent urination',
    why: 'Beta stores glucose as insulin, alpha releases it as glucagon.',
    say: null,
  },
  // p. 1139
  {
    topic: 4,
    kind: 'remember',
    q: 'Which gonad cells make which hormone?',
    a: 'In the testis, Leydig (interstitial) cells make testosterone under LH, for male secondary sexual characters and sperm support, and Sertoli cells make inhibin, which feeds back to inhibit FSH. In the ovary, follicle (granulosa) cells make estrogen, for female secondary characters and follicle development, and the corpus luteum makes progesterone, which supports pregnancy, prepares the endometrium for implantation and develops the mammary alveoli',
    why: 'Each hormone is tied to one cell type, so the cell name is the clue.',
    say: null,
  },
  // p. 1139
  {
    topic: 4,
    kind: 'mixup',
    q: 'Leydig cells or Sertoli cells: which makes testosterone and which makes inhibin?',
    a: 'Leydig cells make testosterone (under LH). Sertoli cells make inhibin, which feeds back to inhibit FSH',
    why: 'Leydig goes with LH and testosterone, Sertoli with FSH and inhibin.',
    say: null,
  },
  // pp. 1139, 1165
  {
    topic: 4,
    kind: 'mistake',
    q: 'Does the β cell make glucagon, and the α cell insulin?',
    a: 'No, that is the reversal examiners use. β cells make insulin and α cells make glucagon; δ cells make somatostatin',
    why: 'Check each cell letter before reading the hormone.',
    say: null,
  },

  // ── Topic 06 · Hormones of the Heart, Kidney & GI Tract ──
  // p. 1139
  {
    topic: 5,
    kind: 'remember',
    q: 'Which hormones come from the heart and the kidney?',
    a: 'The atrial wall of the heart secretes atrial natriuretic factor (ANF), which lowers blood pressure by dilating blood vessels. In the kidney the juxtaglomerular (JG) cells secrete erythropoietin, a peptide hormone that stimulates RBC formation (erythropoiesis), and renin, which activates the renin-angiotensin-aldosterone system to regulate blood pressure and volume',
    why: 'Heart gives ANF, kidney gives erythropoietin and renin.',
    say: null,
  },
  // p. 1140
  {
    topic: 5,
    kind: 'remember',
    q: 'What do gastrin, secretin, CCK and GIP do?',
    a: 'These are the four peptide GI hormones the chapter names (others exist). Gastrin stimulates secretion of gastric juice (HCl). Secretin is released by the duodenum under stomach acid and stimulates the liver and pancreas to secrete. Cholecystokinin (CCK) stimulates secretion of bile and pancreatic enzymes. Gastric inhibitory peptide (GIP) inhibits gastric secretion and motility',
    why: 'Gastrin starts the stomach, GIP slows it; secretin and CCK serve the liver and pancreas.',
    say: null,
  },
  // pp. 1139–1140
  {
    topic: 5,
    kind: 'mixup',
    q: 'ANF or renin: which lowers and which raises blood pressure?',
    a: 'ANF lowers blood pressure by dilating blood vessels. Renin starts the renin-angiotensin-aldosterone system, which raises blood pressure and volume, so aldosterone and ANF pull in opposite directions',
    why: 'ANF is the one that relaxes vessels.',
    say: null,
  },

  // ── Topic 07 · Mechanism of Hormone Action ──
  // p. 1140
  {
    topic: 6,
    kind: 'remember',
    q: 'How do water-soluble hormones act, and with what speed?',
    a: 'Peptide and protein hormones (insulin, glucagon, FSH) and catecholamines such as adrenaline are water-soluble and do not cross the cell membrane. They bind receptors on the cell surface, and binding generates a second messenger inside the cell (cyclic AMP, IP<sub>3</sub>, Ca<sup>2+</sup>) that switches on existing enzymes. The effect is fast but short-lived',
    why: 'Surface receptor, second messenger, existing enzymes: quick on, quick off.',
    say: null,
  },
  // p. 1140
  {
    topic: 6,
    kind: 'remember',
    q: 'How do steroid and thyroid hormones act, and with what speed?',
    a: 'Testosterone, estrogen, progesterone, cortisol and T<sub>3</sub>/T<sub>4</sub> are lipid-soluble and enter the cell. They bind intracellular receptors, and the hormone–receptor complex acts on the DNA to regulate gene expression, so new proteins are made. The effect is slower to start but long-lasting',
    why: 'New proteins take time to make and last long once made.',
    say: null,
  },
  // pp. 1140, 1165
  {
    topic: 6,
    kind: 'mistake',
    q: 'Do all amine hormones act through surface receptors?',
    a: 'No. Adrenaline does, but T<sub>3</sub> and T<sub>4</sub> are amino-acid derived and still cross the membrane to intracellular receptors. The sort is by whether the hormone can cross the lipid membrane, not by whether it is an amine. Insulin is a peptide and acts through a surface receptor',
    why: 'The test is crossing the membrane: lipid-soluble means inside, water-soluble means surface.',
    say: null,
  },
  // p. 1140
  {
    topic: 6,
    kind: 'shortcut',
    q: 'What is the one-line sort for hormone action?',
    a: 'Ask whether the hormone can cross the membrane. If not: surface receptor, second messenger, fast and short. If it can: intracellular receptor, gene expression, slow and durable',
    why: 'Answer that one question and the receptor site, the messenger and the speed follow.',
    say: null,
  },

  // ── Topic 08 · Master Comparison Tables ──
  // p. 1141
  {
    topic: 7,
    kind: 'remember',
    q: 'Which two antagonistic pairs does the chapter stress?',
    a: 'Insulin and glucagon, which lower and raise blood glucose, and PTH and calcitonin, which raise and lower blood calcium. In each pair the two hormones have opposite effects on the same variable',
    why: 'Antagonism means opposite effects on one thing, so name the variable first.',
    say: null,
  },
  // pp. 1140–1141
  {
    topic: 7,
    kind: 'remember',
    q: 'Which disorder goes with which gland in the comparison table?',
    a: 'GH: gigantism or acromegaly (excess), dwarfism (deficiency). ADH deficiency: diabetes insipidus. Thyroid: goitre, cretinism, myxoedema (deficiency states) and Graves’ disease (excess). Parathyroid: tetany when PTH is low, weakened bone when it is high. Adrenal cortex: Cushing’s, Conn’s and virilism (excess), Addison’s (deficiency). Pancreas: diabetes mellitus (insulin deficiency). The thymus makes thymosin, which drives T-lymphocyte differentiation, and it atrophies with age',
    why: 'Hypothalamus, pineal, adrenal medulla, testis, ovary, heart, kidney and GI tract have no disorder in the table.',
    say: null,
  },
  // pp. 1141, 1169
  {
    topic: 7,
    kind: 'mixup',
    q: 'Diabetes insipidus or diabetes mellitus: what is the difference?',
    a: 'Insipidus is a water problem: ADH deficiency, large volumes of dilute urine and thirst, with normal blood glucose. Mellitus is a glucose problem: insulin deficiency, high blood glucose, glycosuria, thirst and frequent urination. They share the word diabetes and the symptom of thirst, but come from different hormones',
    why: 'Normal blood glucose with dilute urine points to insipidus.',
    say: null,
  },
  // p. 1141
  {
    topic: 7,
    kind: 'mistake',
    q: 'Are goitre, cretinism, myxoedema and Graves’ disease one kind of thyroid fault?',
    a: 'No. Goitre (from iodine deficiency, with hypothyroidism), cretinism and myxoedema are low-thyroid states; Graves’ disease is the high-thyroid state. The table lists them as excess and deficiency, so place each on the right side',
    why: 'Graves’ is the odd one out, the only excess.',
    say: null,
  },

  // ── Topic 09 · Feedback & Regulation ──
  // p. 1141
  {
    topic: 8,
    kind: 'remember',
    q: 'How does the thyroid axis work, and which other axes share the template?',
    a: 'Hypothalamus → pituitary (trophic hormone) → target gland → product, with the product feeding back to switch off the chain. For the thyroid: TRH → TSH → T<sub>3</sub>/T<sub>4</sub>, and rising T<sub>3</sub>/T<sub>4</sub> inhibits both hypothalamus and pituitary. The adrenal-cortex axis (ACTH; removing the pituitary atrophies the inner two layers of the cortex, while the aldosterone layer is spared) and the gonadal axis (GnRH → FSH/LH → sex steroids, with inhibin feeding back) follow the same template',
    why: 'Same three nodes every time, with the product feeding back to the first two.',
    say: null,
  },
  // p. 1141
  {
    topic: 8,
    kind: 'remember',
    q: 'What are the calcium see-saw and the glucose loop?',
    a: 'Calcium: low Ca<sup>2+</sup> brings PTH, which raises it; high Ca<sup>2+</sup> brings calcitonin, which lowers it. Glucose: high glucose brings insulin, which stores it; low glucose brings glucagon, which releases it',
    why: 'Low calls for the raising hormone, high calls for the lowering one.',
    say: null,
  },
  // p. 1141
  {
    topic: 8,
    kind: 'mistake',
    q: 'Is every command hormone switched off by negative feedback?',
    a: 'Most are, which is the chapter’s unifying idea: most command hormones are matched by a feedback or antagonist signal that keeps the internal environment stable. But feedback is not negative in every loop: the mid-cycle LH surge, driven by rising estrogen, and oxytocin in labour are positive feedback',
    why: 'Say most, not every: the LH surge is the usual exception.',
    say: null,
  },
  // p. 1141
  {
    topic: 8,
    kind: 'shortcut',
    q: 'How do you write any hypothalamo-pituitary axis in a few seconds?',
    a: 'Write the three nodes in order: hypothalamus (releasing hormone), anterior pituitary (trophic hormone), target gland (product hormone), then draw the feedback from the product back to the first two. For the adrenal cortex the pituitary hormone is ACTH; for the gonads, FSH and LH',
    why: 'Fix the template first and only the hormone names change.',
    say: null,
  },

  // ── Topic 10 · Worked Examples ──
  // pp. 1141–1142
  {
    topic: 9,
    kind: 'remember',
    q: 'A child has stunted growth and low IQ, an adult with the same deficiency has puffy skin and a sluggish metabolism: which gland, hormone and disorders?',
    a: 'The thyroid, with T<sub>3</sub>/T<sub>4</sub> deficiency. In the child it is cretinism, in the adult myxoedema',
    why: 'The deficiency is the same; only the age differs.',
    say: null,
  },
  // p. 1142
  {
    topic: 9,
    kind: 'remember',
    q: 'Assertion: steroid hormones act more slowly and for longer than protein hormones. Reason: steroids act on intracellular receptors through gene expression, proteins on surface receptors through second messengers. What is the answer?',
    a: 'Both are true and the reason explains the assertion. Switching on genes to build new proteins is slow to start and long to fade, while a second messenger on existing enzymes is quick on and quick off',
    why: 'Judge the assertion and the reason separately, then ask if the reason explains the assertion.',
    say: null,
  },
  // p. 1142
  {
    topic: 9,
    kind: 'shortcut',
    q: 'A patient passes large volumes of dilute urine and is thirsty, but blood glucose is normal: what is it?',
    a: 'ADH deficiency, which is diabetes insipidus. Normal glucose rules out diabetes mellitus',
    why: 'Check the blood glucose before choosing between the two diabetes.',
    say: null,
  },

  // ── Topic 11 · Practice Questions ──
  // p. 1142
  {
    topic: 10,
    kind: 'remember',
    q: 'Which posterior pituitary hormone prevents water loss, which islet cells make insulin, glucagon and somatostatin, and which gland makes melatonin?',
    a: 'ADH (vasopressin), whose deficiency gives diabetes insipidus. β cells make insulin, α cells glucagon and δ cells somatostatin. The pineal gland makes melatonin, regulating the diurnal (sleep–wake) rhythm',
    why: 'These are single-fact questions; one hormone, one source.',
    say: null,
  },
  // p. 1142
  {
    topic: 10,
    kind: 'remember',
    q: 'Why does a water-soluble hormone act faster but more briefly than a steroid hormone?',
    a: 'The water-soluble hormone works through a fast-acting second messenger on existing enzymes, so it switches on and off quickly. The steroid switches on genes to build new proteins, so it is slow to start and long to fade',
    why: 'Existing enzymes against new proteins is the whole explanation.',
    say: null,
  },
  // p. 1142
  {
    topic: 10,
    kind: 'remember',
    q: 'Which antagonistic pair controls blood calcium, and what does each hormone do?',
    a: 'PTH raises blood Ca<sup>2+</sup> and calcitonin lowers it',
    why: 'Opposite effects on one variable, blood calcium, make them an antagonistic pair.',
    say: null,
  },

  // ── Topic 12 · Master Cheat Sheet ──
  // pp. 1142–1143
  {
    topic: 11,
    kind: 'remember',
    q: 'Which hormone comes from which gland, in the cheat sheet?',
    a: 'Pineal: melatonin. Thymus: thymosin. Thyroid: T<sub>3</sub>/T<sub>4</sub> and calcitonin. Parathyroid: PTH. Adrenal cortex: aldosterone, cortisol, androgens; medulla: adrenaline and noradrenaline. Pancreas: insulin (β), glucagon (α), somatostatin (δ). Testis: testosterone (Leydig) and inhibin (Sertoli). Ovary: estrogen (follicle) and progesterone (corpus luteum). Heart: ANF. Kidney: erythropoietin and renin. GI tract: gastrin, secretin, CCK, GIP',
    why: 'Learn it gland by gland, then say it back with the cell names.',
    say: null,
  },
  // pp. 1142–1143
  {
    topic: 11,
    kind: 'remember',
    q: 'What are the cheat sheet’s mechanism, key disorders and pairs?',
    a: 'Water-soluble (peptide/protein or catecholamine) hormones: surface receptor, second messenger (cAMP), fast and short. Fat-soluble (steroid and thyroid) hormones: intracellular receptor, gene expression, slow and long. Disorders: gigantism, acromegaly and dwarfism (GH); diabetes insipidus (ADH); goitre, cretinism, myxoedema and Graves’ (thyroid); tetany (low PTH); Cushing, Conn, Addison and virilism (adrenal); diabetes mellitus (insulin). Pairs: insulin and glucagon, PTH and calcitonin',
    why: 'Three lines hold the mechanism, the disorders and the pairs.',
    say: null,
  },

  // ── Additional A · The Hypothalamo-Pituitary Axes and Trophic Hormones ──
  // pp. 1144–1146
  {
    topic: 12,
    kind: 'remember',
    q: 'What is a trophic hormone, and how is the axis template built?',
    a: 'A trophic hormone is a pituitary hormone that stimulates the growth and function of another endocrine gland: TSH, ACTH, FSH and LH are trophic, prolactin and GH are not. Every axis runs hypothalamus (releasing or inhibiting hormone) → anterior pituitary (trophic hormone) → target gland → product, and the product feeds back negatively on the hypothalamus and the pituitary. The hypophyseal portal system carries the hypothalamic hormones from a primary capillary plexus in the median eminence by portal veins to a second plexus in the anterior pituitary, so they arrive without dilution. Peptides: TRH 3 amino acids (pGlu-His-Pro), CRH 41, ACTH 39, GnRH 10 (pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH<sub>2</sub>), released in pulses about every 1 to 2 hours in adult males, since continuous GnRH shuts the axis down',
    why: 'Any three of TSH, ACTH, FSH and LH answer a question that asks for three trophic hormones.',
    say: null,
  },
  // pp. 1145–1147
  {
    topic: 12,
    kind: 'remember',
    q: 'How do hormone levels show the level of a defect in an axis?',
    a: 'In primary hypothyroidism (the thyroid fails) T<sub>3</sub>/T<sub>4</sub> are low and TSH is high, because feedback on the pituitary is lost; in secondary hypothyroidism (the pituitary fails) TSH is low as well. A neonate with low T<sub>4</sub> and high TSH therefore has primary hypothyroidism. For the adrenal axis, low cortisol with high ACTH and high CRH is primary adrenal failure (Addison’s disease), while low cortisol and low ACTH with an ACTH rise on a CRH test is a hypothalamic defect (tertiary). Cortisol is lowest around midnight and peaks near waking',
    why: 'Read the trophic hormone: high means the target gland failed, low means the fault lies above it.',
    say: null,
  },

  // ── Additional B · The Renin-Angiotensin-Aldosterone System ──
  // pp. 1147–1148
  {
    topic: 13,
    kind: 'remember',
    q: 'What is the RAAS cascade, and what releases renin?',
    a: 'Angiotensinogen (a plasma globulin made by the liver) → renin (from the JG cells) → angiotensin I (inactive, 10 amino acids) → ACE (on endothelial cells, notably in the lung) → angiotensin II (active, 8 amino acids) → aldosterone from the zona glomerulosa. Renin is released by a fall in renal perfusion pressure, by less NaCl reaching the macula densa, and by sympathetic stimulation through β<sub>1</sub> receptors on the JG cells',
    why: 'Learn the cascade as liver, kidney, lung, adrenal.',
    say: null,
  },
  // pp. 1148–1149
  {
    topic: 13,
    kind: 'remember',
    q: 'What do angiotensin II and aldosterone do, and why do ACE inhibitors lower blood pressure?',
    a: 'Angiotensin II constricts vessels (including the efferent arteriole, which keeps glomerular pressure up), stimulates aldosterone release, stimulates ADH release and thirst, and feeds back to lower renin. Aldosterone, which angiotensin II and a high plasma K<sup>+</sup> both stimulate, acts on the collecting duct to raise Na<sup>+</sup> reabsorption (water follows) and K<sup>+</sup> secretion. ACE inhibitors block formation of angiotensin II, so there is less vasoconstriction, aldosterone, ADH and thirst; the dry cough is bradykinin, which ACE also breaks down, building up',
    why: 'Less angiotensin II means lower resistance and lower volume, so lower pressure.',
    say: null,
  },

  // ── Additional C · Calcium Homeostasis: The Complete Picture ──
  // pp. 1150–1151
  {
    topic: 14,
    kind: 'remember',
    q: 'What do PTH and calcitonin do to blood calcium?',
    a: 'PTH (84 amino acids, from the chief cells of the parathyroids) is released when plasma Ca<sup>2+</sup> is low. It stimulates osteoclast activity in bone, increases Ca<sup>2+</sup> reabsorption in the distal tubule, lowers phosphate reabsorption in the proximal tubule and stimulates the kidney enzyme 1α-hydroxylase. Calcitonin (32 amino acids, from the thyroid C cells) is released when Ca<sup>2+</sup> is high and inhibits osteoclasts; its part in humans is minor compared with PTH',
    why: 'PTH raises calcium and lowers phosphate in the blood.',
    say: null,
  },
  // pp. 1150–1152
  {
    topic: 14,
    kind: 'remember',
    q: 'How is calcitriol made, and what goes wrong without it?',
    a: 'Vitamin D<sub>3</sub> comes from the diet or is made in the skin from 7-dehydrocholesterol by UV light. The liver converts it to 25-hydroxyvitamin D (calcidiol, the main circulating form); the kidney’s proximal tubule converts that to 1,25-dihydroxyvitamin D (calcitriol) with 1α-hydroxylase, stimulated by PTH and low phosphate. Calcitriol acts on nuclear receptors to increase intestinal Ca<sup>2+</sup> and phosphate absorption. Its lack gives rickets in children and osteomalacia in adults; in chronic kidney disease calcitriol falls, calcium falls, and the enlarged, overactive parathyroids drive bone loss',
    why: 'Skin, liver, kidney: three steps, with the kidney step as the active one.',
    say: null,
  },

  // ── Additional D · The Second Messenger Mechanism: G-Proteins and cAMP ──
  // pp. 1152–1154
  {
    topic: 15,
    kind: 'remember',
    q: 'What are the steps of the G<sub>s</sub>-cAMP-PKA pathway?',
    a: 'The hormone binds its 7-transmembrane receptor, which exchanges GDP for GTP on the α-subunit of the G-protein, and α<sub>s</sub>-GTP leaves the βγ complex and activates adenylyl cyclase (G<sub>i</sub> inhibits it instead). Adenylyl cyclase makes cAMP from ATP, cAMP binds the regulatory subunits of protein kinase A and frees its catalytic subunits, and PKA phosphorylates target proteins on serine and threonine. Each step multiplies the signal. Phosphodiesterase degrades cAMP to 5′-AMP, and the α-subunit’s own GTPase resets the G-protein; cholera toxin locks it in the GTP-bound state, so cAMP stays high and Cl<sup>−</sup> and water pour into the gut',
    why: 'Receptor, G-protein, adenylyl cyclase, cAMP, PKA is the order tested.',
    say: null,
  },
  // pp. 1153–1154
  {
    topic: 15,
    kind: 'remember',
    q: 'How does the G<sub>q</sub> pathway differ, and how does glucagon use G<sub>s</sub>?',
    a: 'G<sub>q</sub> activates phospholipase C, which splits PIP<sub>2</sub> into IP<sub>3</sub> (releases Ca<sup>2+</sup> from the ER) and DAG (activates PKC); TRH, GnRH, angiotensin II and the α<sub>1</sub>-adrenergic receptor use it, as does ADH through its V1 receptor. In the liver, glucagon binds a G<sub>s</sub>-coupled receptor, and PKA activates phosphorylase kinase and so glycogen phosphorylase (glycogen breakdown) while inactivating glycogen synthase',
    why: 'cAMP for G<sub>s</sub>, IP<sub>3</sub> and DAG for G<sub>q</sub>.',
    say: null,
  },

  // ── Additional E · Blood Glucose Regulation: All the Players ──
  // pp. 1155–1156
  {
    topic: 16,
    kind: 'remember',
    q: 'Which four hormones raise blood glucose, and in what order do they respond?',
    a: 'Glucagon (liver, G<sub>s</sub>-cAMP-PKA: glycogenolysis and gluconeogenesis), epinephrine (glycogenolysis, lipolysis, suppresses insulin, raises glucagon), cortisol (gluconeogenic enzyme transcription, less glucose uptake, proteolysis) and GH (less uptake, lipolysis, more hepatic output) are the counter-regulatory hormones. In hypoglycaemia insulin falls, glucagon rises at once, epinephrine within seconds, GH within minutes and cortisol over 30–60 minutes',
    why: 'Glucagon and epinephrine are quick, GH is intermediate, cortisol is slow and sustained.',
    say: null,
  },
  // pp. 1155–1157
  {
    topic: 16,
    kind: 'remember',
    q: 'Why can liver glycogen supply blood glucose when muscle glycogen cannot?',
    a: 'Both break glycogen down, but only the liver has glucose-6-phosphatase to release free glucose; muscle’s glucose-6-phosphate goes into glycolysis, giving lactate, which the liver turns back to glucose (Cori cycle). Glucagon acts on the liver, not muscle. The hormones act mainly on the liver for glucose output and on muscle and fat for reduced uptake and lipolysis. The dawn phenomenon, rising glucose before breakfast in insulin-deficient diabetes, comes from the night GH rise and the early-morning cortisol rise',
    why: 'Glucose-6-phosphatase is the liver’s special enzyme.',
    say: null,
  },

  // ── Additional F · Local Hormones and Autocrine/Paracrine Signaling ──
  // pp. 1157–1158
  {
    topic: 17,
    kind: 'remember',
    q: 'How do endocrine, paracrine, autocrine and juxtacrine signalling differ?',
    a: 'Endocrine: a hormone travels through the blood to a distant target (insulin from the β cells). Paracrine: it acts on neighbouring cells without entering the blood (histamine from mast cells; somatostatin from δ cells on adjacent islet cells). Autocrine: the cell responds to its own signal (interleukin-2 acting on the T cell that made it; tumour growth loops). Juxtacrine: direct contact, a membrane-bound ligand on one cell binding a receptor on the next, with no diffusion',
    why: 'Distance sorts them: far, near, self, touching.',
    say: null,
  },
  // pp. 1158–1160
  {
    topic: 17,
    kind: 'remember',
    q: 'What are prostaglandins, and how does aspirin act on them?',
    a: 'Prostaglandins are eicosanoids made from arachidonic acid, a 20-carbon fatty acid released from membrane phospholipids, by the cyclooxygenase (COX) pathway, and they act locally. PGE<sub>2</sub> dilates vessels, protects the gastric mucosa and mediates fever (pyrogens, such as bacterial lipopolysaccharide and interleukin-1, raise PGE<sub>2</sub> in the hypothalamus and lift the set-point); TXA<sub>2</sub> promotes platelet aggregation and vasoconstriction, while PGI<sub>2</sub> dilates and inhibits platelet aggregation. Aspirin irreversibly acetylates COX and blocks prostaglandin and thromboxane synthesis, which gives its anti-inflammatory, antipyretic and antiplatelet effects and the risk of gastric ulcer through COX-1',
    why: 'Fever, clotting and the stomach all fall out of one block: COX.',
    say: null,
  },

  // ── Additional G · Master Summary: What This Addendum Adds ──
  // p. 1160
  {
    topic: 18,
    kind: 'remember',
    q: 'What do Additional topics A to F add to the chapter?',
    a: 'A: the hypothalamo-pituitary axes (TRH-TSH-T<sub>3</sub>/T<sub>4</sub>, CRH-ACTH-cortisol, GnRH-FSH/LH-gonadal). B: the RAAS cascade. C: calcium homeostasis with PTH, calcitonin and calcitriol. D: the G<sub>s</sub>-cAMP-PKA and G<sub>q</sub>-IP<sub>3</sub>/DAG cascades. E: blood glucose counter-regulation by glucagon, epinephrine, cortisol and GH. F: local hormones, autocrine, paracrine and juxtacrine signalling, and prostaglandins',
    why: 'Each one fills a gap the main topics leave: the cascade behind a hormone.',
    say: null,
  },
  // p. 1160
  {
    topic: 18,
    kind: 'remember',
    q: 'What question pattern does the book tie to each Additional topic?',
    a: 'A: writing a complete axis, level-of-defect questions, naming trophic hormones. B: sequence questions, the ACE inhibitor mechanism, JG cell stimuli. C: the three-hormone comparison, vitamin D deficiency (rickets), chronic kidney disease bone disease. D: ordering the pathway, signal amplification, cholera toxin. E: the four hormones, the dawn phenomenon, stress hyperglycaemia, the cortisol mechanism. F: definitions, the aspirin and NSAID mechanism, PGE<sub>2</sub> and fever, TXA<sub>2</sub> against PGI<sub>2</sub>',
    why: 'The pattern column is the book’s own judgement of what is asked, not a count of questions.',
    say: null,
  },

  // ── Additional H · What NEET Actually Asks ──
  // pp. 1161–1164
  {
    topic: 19,
    kind: 'remember',
    q: 'What are the four recurring question types, and how is each approached?',
    a: 'Fact or definition (which gland or cell secretes X): look it up in the gland, hormone, action, disorder table. Statement type: treat each statement as true or false on its own. Assertion–reason: judge A and R separately first, then ask whether R explains A; the standard options are both true with R explaining A, both true without it, A true and R false, and A false and R true. Match the column: pair the easiest item first, eliminate options that pair it wrongly, and repeat. The shares the book lists for each topic are its own estimate from past papers, not official figures',
    why: 'Method first, then options: never let a plausible option do the thinking.',
    say: null,
  },
  // pp. 1163–1165, 1169
  {
    topic: 19,
    kind: 'mistake',
    q: 'Which confusions do the examiners repeat?',
    a: 'Oxytocin or ADH listed as anterior pituitary products (they are made in the hypothalamus and stored in the posterior lobe, which makes none itself); α and β cells reversed (β makes insulin, α glucagon); diabetes insipidus swapped with mellitus (vasopressin lack gives insipidus, insulin lack gives mellitus); melatonin placed in the pituitary or thyroid (it is pineal); thyroxine given as the PTH antagonist (it is calcitonin); releasing hormones credited to the pituitary (they come from the hypothalamus); sodium called a second messenger; insulin put with cortisol as an intracellular-receptor hormone. In assertion–reason, a true A with a false R is option (c) and a false A with a true R is (d)',
    why: 'Each trap swaps two near neighbours, so check the source before the function.',
    say: null,
  },
];
