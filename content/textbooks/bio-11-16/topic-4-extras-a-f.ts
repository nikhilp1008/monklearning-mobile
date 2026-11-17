import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 16, Excretory Products and Their Elimination: Topic 04 and Additional topics
 * A to F, word for word from the Class 11 Biology Master Reference (pp. 970 to 991).
 *
 * Topic 04 "Regulation of Kidney Function, Micturition & Disorders", pp. 970 to 976 (Figure 16.6:
 * caption at the foot of p. 972, drawing on the "Chapter 16 · Figures" plate p. 973; set at the end
 * of Physiological mechanisms and regulatory pathways where the caption stands). The shared opening
 * of "Excretory Products and Their Elimination: Additional Topics" (p. 977) heads Additional topic
 * A's Introduction. A Counter-Current Mechanism: Multiplier vs Exchanger and Urea Recycling,
 * pp. 977 to 979; B RAAS Cascade and Juxtaglomerular Autoregulation, pp. 980 to 982 (answers end at
 * the top of p. 982); C ADH Mechanism and Aquaporins, pp. 982 to 984; D Deamination and the
 * Ornithine (Urea) Cycle, pp. 984 to 986; E Kidney as an Endocrine Organ, pp. 987 to 989 (answers
 * end at the top of p. 989); F Diuretics: Classes and Mechanisms, pp. 989 to 991 (answers end on
 * p. 991, where Addendum G begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one
 * line, formulas upright with real sub/superscripts. This chapter's book prints options (a) to (d),
 * kept as printed. "Sub-topic 3" is Topic 03, "Addendum B" is "Additional topic B".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 970 to 976 ─────────────────────────
  {
    n: '04',
    title: 'Regulation of Kidney Function, Micturition & Disorders',
    kalam: 'Think of your blood as the water supply of a small town, and the kidney as the waterworks.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliably scoring NEET topic: the renin-angiotensin-aldosterone system, ADH and ANF are classic assertion–reason and “which hormone does what” territory, and the disorders/dialysis set is easy match-the-column fodder. CBSE Boards love a 3–5 mark “explain the regulation of kidney function” or “role of other organs in excretion” question, and CUET sticks to disorder definitions (the book’s estimate from past papers, not official figures). This topic turns the machine of Topic 03 into a self-governing system.',
      },
      {
        t: 'p',
        html: 'Think of your blood as the water supply of a small town, and the kidney as the waterworks. A dumb waterworks would just filter at a fixed rate, day and night, drought or flood. But your kidney is smart: it constantly senses how much water and pressure the town has, and dials its behaviour up or down to keep things steady. That sensing-and-adjusting is what we mean by <b>regulation of kidney function</b>, and it is run by three hormonal “managers” pulling in two opposite directions.',
      },
      {
        t: 'p',
        html: 'When blood pressure or blood volume <b>falls</b> (say after heavy sweating on a Nagpur summer afternoon, or after blood loss) two managers spring into action to conserve. The juxtaglomerular apparatus (JGA), sitting right where the afferent arteriole meets the DCT, notices the drop and releases <b>renin</b>, kicking off a chemical relay that ends in <b>angiotensin-II</b> (a powerful vasoconstrictor that pushes pressure back up) and <b>aldosterone</b> (which orders the tubule to claw back sodium and water). Meanwhile the brain’s osmoreceptors notice the blood getting “too salty/concentrated” and trigger <b>ADH (vasopressin)</b>, which tells the collecting duct to soak water back in. Net effect: less urine, more water retained, pressure restored.',
      },
      {
        t: 'p',
        html: 'When blood volume or pressure <b>rises too high</b> (too much fluid in the tank) a third manager steps in to dump. The heart’s atria, feeling overstretched, release <b>ANF (atrial natriuretic factor)</b>, which relaxes blood vessels and tells the kidney to let more sodium and water out, lowering the pressure. Crucially, ANF acts as a brake on the renin system: it is the counterweight that keeps the conserve-managers from overshooting.',
      },
      {
        t: 'p',
        html: 'Think about it this way… it’s exactly like a household managing a water tank during an erratic municipal supply. When supply is low (low BP/volume), you close taps and store every drop (renin–angiotensin–aldosterone + ADH). When the tank overflows (high BP/volume), you open the outlet (ANF). The kidney is never just filtering: it is always balancing.',
      },
      {
        t: 'p',
        html: 'Then there is the controlled exit itself, <b>micturition</b>, the act of urinating, which is partly reflex and partly under your voluntary command (a convenience you appreciate every time you’re stuck in a long meeting). And finally, when the machine breaks (stones, inflammation, urea building up, sugar spilling over), we get the <b>disorders</b>, and when the kidney fails outright, technology stands in through <b>dialysis</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> This whole regulatory web assumes the parts are intact: a working JGA, a functioning posterior pituitary, responsive adrenal glands and a healthy heart. Knock out any sensor or signal and regulation breaks: for instance, too little ADH and the kidney can no longer concentrate urine, so the person floods out litres of dilute urine (diabetes insipidus). Regulation is homeostatic (negative feedback): each manager exists to be switched off again once balance returns.',
      },

      { t: 'part', title: 'Key definitions and functional units' },
      {
        t: 'p',
        html: '<b>The regulatory hormones:</b><br>• <b>Renin:</b> an enzyme released by the <b>JGA</b> when glomerular blood pressure/flow falls; it starts the renin-angiotensin cascade.<br>• <b>Angiotensinogen → Angiotensin-I → Angiotensin-II:</b> angiotensinogen (a blood protein) is converted by renin to angiotensin-I, then to <b>angiotensin-II</b>, a powerful <b>vasoconstrictor</b> that raises blood pressure and GFR and stimulates aldosterone.<br>• <b>Aldosterone:</b> a hormone from the <b>adrenal cortex</b> that promotes reabsorption of Na<sup>+</sup> and water from the distal parts of the tubule → raises blood volume/pressure.<br>• <b>ADH (vasopressin):</b> from the hypothalamus, released by the <b>posterior pituitary</b>; promotes water reabsorption at the DCT/collecting duct → concentrates urine and prevents diuresis.<br>• <b>ANF (Atrial Natriuretic Factor):</b> released by the <b>atria of the heart</b> when blood volume/pressure rises; causes <b>vasodilation</b>, increases Na<sup>+</sup>/water excretion, and acts as a <b>check on the renin-angiotensin system</b>.',
      },
      {
        t: 'p',
        html: '<b>Micturition:</b><br>• <b>Micturition:</b> the process of releasing urine from the urinary bladder.<br>• <b>Micturition reflex:</b> the neural reflex by which a stretched bladder triggers its own emptying.<br>• Typical urine output: about 1–1.5 L per day in a healthy adult.',
      },
      {
        t: 'p',
        html: '<b>Disorders (high-frequency match-column items; the book’s estimate from past papers, not official figures):</b><br>• <b>Uremia:</b> abnormal accumulation of <b>urea in the blood</b> (a sign of failing kidneys).<br>• <b>Renal calculi:</b> kidney stones: a mass of crystallised salts within the kidney.<br>• <b>Glomerulonephritis (nephritis):</b> inflammation of the glomeruli.<br>• <b>Gout:</b> accumulation of <b>uric acid crystals in the joints</b>.<br>• <b>Glycosuria:</b> glucose in the urine; <b>Ketonuria:</b> ketone bodies in the urine.<br>• <b>Diabetes insipidus:</b> excessive dilute urine due to <b>ADH deficiency</b> (not to be confused with diabetes mellitus, which is high blood glucose).',
      },
      {
        t: 'p',
        html: '<b>Dialysis & support:</b><br>• <b>Haemodialysis (artificial kidney):</b> removes nitrogenous wastes (urea) from blood by diffusion across a membrane into a <b>dialysing fluid that is like plasma but contains no nitrogenous wastes</b> (so urea diffuses out while useful solutes don’t). Glucose and amino acids are not removed.<br>• <b>Kidney transplant:</b> surgical replacement of a non-functional kidney with a healthy donor kidney, the ultimate corrective for chronic renal failure.',
      },

      { t: 'part', title: 'Physiological mechanisms and regulatory pathways' },
      {
        t: 'p',
        html: '<b>Mechanism 1: The Renin-Angiotensin-Aldosterone System (RAAS).</b> Trace the relay step by step: 1. A <b>fall in glomerular blood pressure/flow</b> is sensed by the <b>JGA</b>, which releases <b>renin</b> into the blood. 2. Renin converts blood <b>angiotensinogen → angiotensin-I</b>, which is then converted further to <b>angiotensin-II</b>. 3. <b>Angiotensin-II</b> is a powerful <b>vasoconstrictor</b>: it narrows blood vessels, raising glomerular blood pressure and therefore <b>GFR</b>. 4. Angiotensin-II also activates the <b>adrenal cortex</b> to release <b>aldosterone</b>. 5. <b>Aldosterone</b> drives reabsorption of Na<sup>+</sup> and water from the distal tubule, raising blood volume and pressure, which further supports GFR. Physical logic: every step is aimed at one goal, to restore the pressure the kidney needs to keep filtering. This loop is the body’s front-line defence against a drop in blood volume.',
      },
      {
        t: 'p',
        html: '<b>Mechanism 2: ADH (the water-conservation switch).</b> When body fluids become too concentrated (high osmolarity) or volume drops, osmoreceptors signal the <b>posterior pituitary</b> to release <b>ADH (vasopressin)</b>. ADH makes the <b>collecting duct (and DCT) more permeable to water</b>, so water is reabsorbed back into the salty medulla built by the counter-current mechanism, producing a small volume of concentrated urine. When ADH falls, the duct stays water-tight, water is lost, and a large volume of dilute urine results (the basis of <b>diabetes insipidus</b> when ADH is deficient).',
      },
      {
        t: 'p',
        html: '<b>Mechanism 3: ANF (the pressure-release valve).</b> When blood volume/pressure rises <b>too high</b>, the over-stretched <b>atria of the heart</b> release <b>ANF</b>. ANF causes <b>vasodilation</b> (widening vessels lowers pressure) and promotes excretion of Na<sup>+</sup> and water. Importantly, ANF <b>inhibits renin release from the JGA</b>, so it directly opposes RAAS. RAAS and ANF together form a push-pull pair that holds blood pressure in a narrow window.',
      },
      {
        t: 'p',
        html: '<b>Mechanism 4: Micturition (the controlled exit).</b> 1. Urine formed continuously drains via the ureters (moved by <b>peristalsis</b>) into the <b>urinary bladder</b>, which stretches as it fills. 2. Stretch receptors in the bladder wall fire and send signals to the <b>CNS</b>. 3. The CNS triggers the <b>micturition reflex</b>: contraction of the bladder’s smooth muscle and <b>relaxation of the urethral sphincter</b>, expelling urine through the urethra. 4. In a trained adult this reflex is under <b>voluntary control</b>, so the act can be consciously delayed or initiated.',
      },
      {
        t: 'p',
        html: '<b>A short procedure: how dialysis stands in for a failed kidney.</b> When the kidneys fail, nitrogenous wastes are no longer cleared and <b>urea builds up in the blood (uremia)</b>, the same accumulation that, left unchecked, becomes life-threatening. This is where artificial support takes over. Blood is drawn from the patient, mixed with an anticoagulant, and passed through a coil bathed in <b>dialysing fluid that matches plasma except that it lacks nitrogenous wastes</b>. Because urea is high in blood but absent in the fluid, urea <b>diffuses out</b> down its concentration gradient; meanwhile glucose, ions and amino acids, present in the fluid at plasma levels, sit at equal concentrations on both sides and so do not leak away. Before being returned to the patient, an anticoagulant is countered so the blood can clot normally again. It is selective diffusion down concentration gradients across a membrane, run outside the body. For permanent failure, a <b>kidney transplant</b> remains the definitive remedy, though it depends on a compatible donor and lifelong care.',
      },
      {
        t: 'p',
        html: '<b>Role of other organs in excretion (the kidney isn’t alone).</b><br>• <b>Lungs:</b> eliminate large amounts of CO<sub>2</sub> and some water vapour.<br>• <b>Liver:</b> the site where ammonia is converted to urea; also disposes of <b>bile pigments</b>, cholesterol, certain drugs and degraded products.<br>• <b>Skin: sweat glands</b> remove water, NaCl, small amounts of urea and lactic acid; <b>sebaceous glands</b> excrete sebum (sterols, waxes).<br>• The kidney itself is also endocrine: it secretes <b>erythropoietin</b> (stimulating red-blood-cell formation) and renin, and activates vitamin D.',
      },
      { t: 'fig', id: 'b11-16-fig-16.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '(5 marks) Explain the role of the renin-angiotensin mechanism in the regulation of kidney function.',
        steps: [
          '<b>Model answer.</b> A fall in glomerular blood pressure/flow activates the <b>JGA</b>, which releases the enzyme <b>renin</b>. Renin converts plasma <b>angiotensinogen to angiotensin-I</b>, which is further converted to <b>angiotensin-II</b>. Angiotensin-II is a powerful <b>vasoconstrictor</b> that raises glomerular blood pressure and hence <b>GFR</b>. It also stimulates the <b>adrenal cortex</b> to secrete <b>aldosterone</b>, which promotes reabsorption of Na<sup>+</sup> and water from the distal parts of the tubule, increasing blood volume and pressure. Together these restore normal GFR. (This homeostatic loop is opposed by ANF, which is released when blood pressure is too high.)',
          '<b>Tip:</b> draw the relay as a labelled arrow-chain (JGA → renin → angiotensin → aldosterone): examiners award marks for the sequence as much as the prose.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A person’s ADH secretion suddenly drops sharply. The most immediate consequence is: <b>(a)</b> concentrated, low-volume urine <b>(b)</b> dilute, high-volume urine <b>(c)</b> no urine formed <b>(d)</b> glucose in urine.',
        steps: [
          '<b>Fast solve.</b> ADH = the water-conservation switch at the collecting duct. Less ADH → less water reabsorbed → <b>more, more dilute urine, (b)</b>. Trap watch: option (a) is the opposite (that’s high ADH); (c) confuses regulation with filtration (urine is still made); (d) confuses ADH with insulin/blood-glucose. Anchor on “ADH down ⇒ water out.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: '(Match the Column)<br>Column I (Disorder): (A) Uremia; (B) Renal calculi; (C) Glomerulonephritis; (D) Gout<br>Column II (Description): (i) Inflammation of the glomeruli; (ii) Uric acid crystals in joints; (iii) Accumulation of urea in blood; (iv) Mass of crystallised salts in the kidney',
        steps: [
          'Memory hook: uremia = <b>urea</b> in blood; calculi = stones (salts); -nephritis = inflammation; gout = uric acid in <b>joints</b>.',
        ],
        ans: 'A–(iii), B–(iv), C–(i), D–(ii).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty: Assertion–Reason',
        q: 'Assertion (A): Atrial Natriuretic Factor (ANF) acts as a check on the renin-angiotensin system. Reason (R): ANF is released by the heart’s atria in response to a rise in blood pressure and causes vasodilation. <b>(a)</b> Both true, R explains A <b>(b)</b> Both true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Solution.</b> A is <b>true</b>: ANF opposes RAAS (it even inhibits renin release from the JGA). R is <b>true</b>: ANF is released by the atria when blood volume/pressure rises, and it causes vasodilation, lowering pressure. And R <b>explains</b> A: precisely because ANF is the “high-pressure” signal that dilates vessels and dumps sodium/water, it functions as the natural brake on the “low-pressure” renin system.',
          '(Distinguish from a common false statement that “ANF causes vasoconstriction”: it does the opposite.)',
        ],
        ans: '(a).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three accessory organs (other than kidneys) involved in excretion and state one substance each eliminates.',
            a: 'Lungs: CO<sub>2</sub>/water vapour; liver: bile pigments, cholesterol and drugs (it also makes urea, which the kidneys excrete); skin: sweat (water, NaCl, urea, lactic acid) and sebum.',
          },
          {
            q: '[CUET] Differentiate between diabetes insipidus and diabetes mellitus in terms of cause.',
            a: 'Diabetes insipidus = deficiency of <b>ADH</b> → excess dilute urine; diabetes mellitus = high blood glucose (insulin problem) → glucose in urine.',
          },
          {
            q: '[NEET] Which hormone is a vasoconstrictor and which is a vasodilator among angiotensin-II and ANF? State the source organ of each.',
            a: 'Angiotensin-II = <b>vasoconstrictor</b>, formed in blood via renin (from JGA) acting on liver-derived angiotensinogen; ANF = <b>vasodilator</b>, released by the <b>atria of the heart</b>.',
          },
          {
            q: '[NEET] During haemodialysis, why does the dialysing fluid lack nitrogenous wastes but contain glucose and ions at near-plasma levels?',
            a: 'So that urea (high in blood, absent in fluid) diffuses out down its gradient, while glucose/ions (equal on both sides) have no gradient and are not lost.',
          },
          {
            q: '[NEET High-Difficulty] Explain how the RAAS and ANF together maintain blood pressure within a narrow range, naming the sensor for each.',
            a: 'RAAS responds to a <b>fall</b> (JGA sensing low glomerular pressure) by conserving Na<sup>+</sup>/water and constricting vessels; ANF responds to a <b>rise</b> (cardiac atria sensing stretch) by dilating vessels, excreting Na<sup>+</sup>/water and inhibiting renin: the two opposing loops clamp blood pressure between limits.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Renin is released into the blood by the:',
        opts: [
          { label: 'adrenal cortex', nudge: '<b>(a)</b> the adrenal cortex secretes aldosterone (downstream).' },
          { label: 'posterior pituitary', nudge: '<b>(b)</b> the posterior pituitary releases ADH.' },
          { label: 'juxtaglomerular apparatus', nudge: null },
          { label: 'atria of the heart', nudge: '<b>(d)</b> the atria release ANF.' },
        ],
        correct: 2,
        solution: 'Renin comes from the <b>JGA</b> on a fall in glomerular pressure. These are all distractors that belong to other steps of regulation, which is exactly why they tempt.',
      },
      {
        t: 'mcq',
        q: 'Which of the following correctly pairs a hormone with its action?',
        opts: [
          { label: 'ADH: increases urine volume', nudge: '<b>(a)</b> ADH decreases urine volume (conserves water).' },
          { label: 'Aldosterone: Na<sup>+</sup> and water reabsorption', nudge: null },
          { label: 'ANF: vasoconstriction', nudge: '<b>(c)</b> ANF causes vasodilation, not constriction.' },
          { label: 'Angiotensin-II: vasodilation', nudge: '<b>(d)</b> angiotensin-II is a vasoconstrictor.' },
        ],
        correct: 1,
        solution: 'Aldosterone drives Na<sup>+</sup>/water reabsorption. Each wrong option is a deliberate sign-flip of the true action.',
      },
      {
        t: 'mcq',
        q: 'The neural mechanism by which urine is released from the urinary bladder is called:',
        opts: [
          { label: 'filtration', nudge: '<b>(a)</b> filtration is the first step of urine formation.' },
          { label: 'micturition', nudge: null },
          { label: 'diuresis', nudge: '<b>(c)</b> diuresis is increased urine volume, not the act of voiding.' },
          { label: 'secretion', nudge: '<b>(d)</b> secretion is a tubular process.' },
        ],
        correct: 1,
        solution: '<b>Micturition</b> is the (partly reflex, partly voluntary) release of urine. Students who skim “release of urine” sometimes pick diuresis, but that’s about amount, not the act.',
      },
      {
        t: 'mcq',
        q: 'During haemodialysis, which of the following is removed from the blood?',
        opts: [
          { label: 'glucose', nudge: '<b>(a)</b> glucose and <b>(b)</b> amino acids are kept at plasma levels in the fluid, so there is no gradient to draw them out.' },
          { label: 'amino acids', nudge: '<b>(a)</b> glucose and <b>(b)</b> amino acids are kept at plasma levels in the fluid, so there is no gradient to draw them out.' },
          { label: 'urea', nudge: null },
          { label: 'all of these', nudge: '<b>(d)</b> is the classic over-pick by students who forget that dialysis is selective by design, mimicking the healthy kidney’s recovery of useful molecules.' },
        ],
        correct: 2,
        solution: 'Only <b>urea</b> (and other nitrogenous wastes) leaves, because the dialysing fluid lacks it, creating an outward gradient.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Sign-flipping the hormones.</b> ADH and aldosterone conserve (less urine); ANF dumps (more urine). Angiotensin-II constricts; ANF dilates. Build a two-column “Conserve vs Dump” table once and these MCQs become automatic.',
          '<b>Confusing diabetes insipidus with mellitus.</b> Insipidus = ADH problem → dilute urine, no sugar. Mellitus = glucose/insulin problem → sugar in urine. Same word “diabetes,” totally different cause.',
          '<b>Saying dialysis removes “everything.”</b> It selectively removes nitrogenous wastes; glucose, ions and amino acids are retained because the dialysing fluid already contains them at plasma levels.',
          '<b>Mislocating the hormone sources.</b> Renin = JGA (kidney), aldosterone = adrenal cortex, ADH = posterior pituitary, ANF = heart atria. Mixing these is the #1 lost mark (the book’s estimate from past papers, not official figures): memorise the source, not just the name.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any regulation MCQ, first decide the direction the body wants: is it trying to raise or lower BP/volume? Raise ⇒ renin/angiotensin/aldosterone/ADH. Lower ⇒ ANF. That single question eliminates two options instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>RAAS (raises BP):</b> ↓BP → JGA → <b>renin</b> → angiotensinogen → Ang-I → <b>Ang-II</b> (vasoconstrictor, ↑GFR) → adrenal cortex → <b>aldosterone</b> (Na<sup>+</sup>/water reabsorption).', note: '' },
          { f: '<b>ADH (vasopressin):</b> posterior pituitary → ↑water reabsorption at collecting duct → concentrated urine; deficiency → <b>diabetes insipidus</b> (dilute, high-volume urine).', note: '' },
          { f: '<b>ANF (lowers BP):</b> cardiac atria → <b>vasodilation</b> + Na<sup>+</sup>/water excretion + <b>inhibits renin</b> = check on RAAS.', note: '' },
          { f: '<b>Micturition:</b> bladder stretch → receptors → CNS → micturition reflex (sphincter relaxes) → voiding; voluntary control. Output ~1–1.5 L/day.', note: '' },
          { f: '<b>Disorders:</b> Uremia (urea in blood) · Renal calculi (stones) · Glomerulonephritis (glomerular inflammation) · Gout (uric acid in joints) · Glycosuria (glucose in urine).', note: '' },
          { f: '<b>Dialysis:</b> fluid = plasma <b>minus N-wastes</b>; urea diffuses out, glucose/ions/aa retained. <b>Kidney transplant</b> = definitive cure for renal failure.', note: '' },
          { f: '<b>Other excretory organs:</b> lungs (CO<sub>2</sub>) · liver (bile pigments, cholesterol, drugs; makes urea) · skin (sweat: NaCl/urea; sebum). Kidney also secretes <b>erythropoietin</b>.', note: '' },
        ],
        aids: [
          '<b>Mnemonic: “Renin Raises, ANF Avoids” (RAAS up, ANF down); sources: “Jam Apple Pie Hearts” → JGA-renin, Adrenal-aldosterone, Pituitary-ADH, Heart-ANF.</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 977 to 979 ─────────────────────────
  {
    n: 'A',
    title: 'Counter-Current Mechanism: Multiplier vs Exchanger and Urea Recycling',
    extra: true,
    kalam: 'One structure creates the gradient; the other protects it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the map of excretory organs, the nephron’s architecture, the three steps of urine formation, the counter-current mechanism in outline, the RAAS/ADH/ANF framework, and the major disorders. This unit supplies, in eight additional topics (A–H), a cheat sheet (I) and a closing section on NEET question patterns (J), what the chapter only touches or leaves out: the multiplier/exchanger contrast in full, with urea recycling; the RAAS with its enzymes and targets, and tubuloglomerular feedback; the cellular basis of ADH action via aquaporins; the steps of deamination and the ornithine cycle; the kidney’s endocrine roles in detail (EPO, calcitriol, prostaglandins, renin); diuretic classes and mechanisms; osmoregulatory strategies across marine, freshwater and desert habitats; and a segment-by-segment account of tubular reabsorption and secretion, with the sodium fractions. Each additional topic has a method statement, worked examples, and practice with full answers. Much of this unit goes beyond the NCERT text; it explains the NCERT facts and extends them, and the NCERT statement is the one to give where the two differ.',
      },
      {
        t: 'p',
        html: 'The chapter states that the loop of Henle and vasa recta together build a medullary osmolarity gradient of roughly 300 mOsm/L at the cortex rising to about 1200 mOsm/L at the inner medulla. It already names the loop of Henle as the <b>counter-current multiplier</b> and the vasa recta as the <b>counter-current exchanger</b>, and says that urea recycling from the collecting duct adds to the gradient. It says in outline that the loop’s salt pumping builds the gradient and the vasa recta preserves it, but it does not set out how each one works step by step, or how urea recycling, which passively reinforces the gradient, works. All three are tested in NEET High-Difficulty items (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Step 1: Identify which structure does what.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Structure', 'Physical role', 'Key property'],
        rows: [
          ['Loop of Henle', 'Counter-current <b>multiplier</b>', 'Actively pumps salt (needs ATP); generates the gradient'],
          ['Vasa recta', 'Counter-current <b>exchanger</b>', 'Passively equilibrates; preserves the gradient without destroying it'],
          ['Collecting duct', 'Urea recycling site', 'Returns urea to interstitium, amplifying the gradient'],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 2: Trace osmolarity down the medulla.</b> The multiplier builds a continuous osmotic gradient. The cortex is roughly isosmotic with plasma, and osmolarity rises steadily with depth to the inner medulla:<br>300 (cortex) → 600 (outer medulla) → 1200 (inner medulla) mOsm/L<br>At any one level the active pumping creates only a small difference (about 200 mOsm/L) between the two limbs of the loop; the counter-current flow multiplies this small local difference into the large cortex-to-inner-medulla gradient.',
      },
      {
        t: 'p',
        html: '<b>Step 3: Urea recycling.</b> The collecting duct is permeable to urea in the inner medulla (under high ADH). Urea exits into the interstitium, raising its concentration there. Some of this urea diffuses passively back into the thin segment of the loop of Henle and is carried round to the interstitium again, so urea keeps cycling and adds to the inner-medullary osmolarity. This is passive diffusion through urea transporters, not part of the active NaCl pump. Without urea recycling the maximum urine concentration achievable would be lower.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Counter-Current Multiplier vs Exchanger.</b> A student states: “The vasa recta actively pumps salt into the medullary interstitium, similar to the loop of Henle.” Evaluate this statement.',
        steps: [
          '<b>Solution.</b> The statement is <b>incorrect</b>. The vasa recta is a <b>counter-current exchanger</b>, not a multiplier. It carries blood in a U-shaped loop parallel to the loop of Henle, and because blood flows in opposite directions in its two limbs, any salt or water that moves across the capillary wall tends to be swapped to the other limb rather than accumulating in the interstitium. It <b>preserves</b> the gradient passively. The loop of Henle is the <b>counter-current multiplier</b>: the thick ascending limb actively pumps out Na<sup>+</sup> and Cl<sup>−</sup> into the interstitium using ATP, and this active work <b>generates</b> the gradient. One structure creates the gradient; the other protects it.',
        ],
        ans: 'The statement is wrong: the vasa recta is a passive exchanger, not an active pump like the loop of Henle.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Urea Recycling.</b> How does urea recycling increase the concentrating ability of the kidney? (3 marks)',
        steps: [
          '<b>Solution.</b> The collecting duct is permeable to urea in the presence of high ADH. Urea exits the collecting duct into the inner medullary interstitium, raising the local solute concentration. Some of this urea diffuses passively into the thin segment of the loop of Henle and is carried back to the interstitium, so it keeps cycling (this is passive diffusion through urea transporters, not the active NaCl pump). This additional solute in the interstitium means more water can be drawn osmotically from the collecting duct, producing a higher urine osmolarity than would be possible from NaCl alone. Urea thus <b>adds to the medullary gradient</b>, increasing the kidney’s maximum concentrating ability.',
        ],
        ans: 'Urea recycling adds solute to the interstitium, strengthening the osmotic gradient so more water is reabsorbed from the collecting duct → more concentrated urine.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Distinguish between a counter-current multiplier and a counter-current exchanger, naming the structure that performs each role.',
            a: 'Counter-current multiplier (loop of Henle): actively pumps salt using ATP, generates the gradient. Counter-current exchanger (vasa recta): passively equilibrates salt/water between its two limbs, preserves the gradient without active work.',
          },
          {
            q: '[CUET] Arrange the following in increasing order of osmolarity: outer medulla, cortex, inner medulla.',
            a: 'Cortex (~300) < outer medulla (~600) < inner medulla (~1200 mOsm/L).',
          },
          {
            q: '[NEET High-Difficulty] Explain why the vasa recta does not wash away the medullary salt gradient despite carrying a large volume of blood.',
            a: 'Blood flows in opposite directions in the two limbs of the U-shaped vasa recta. Blood flowing down the descending limb gains NaCl and urea from the hyperosmotic interstitium and loses water to it; flowing up the ascending limb it loses that NaCl and urea again and regains water. The solute that enters on the way down is carried back out on the way up, so there is no net removal of solute from the interstitium, while the water that has been reabsorbed from the loop and collecting duct is carried away. The gradient is preserved.',
          },
          {
            q: '[CBSE] State two ways in which urea recycling differs from salt pumping in the loop of Henle.',
            a: '(i) Urea recycling is passive diffusion from the collecting duct; salt pumping in the loop is active transport (Na<sup>+</sup>/K<sup>+</sup>-ATPase). (ii) Urea recycling amplifies an existing gradient; salt pumping creates the initial gradient.',
          },
          {
            q: '[NEET] A person with SIADH (excess ADH) has very concentrated urine. Explain, using the counter-current mechanism, why this occurs.',
            a: 'Excess ADH makes the collecting duct highly permeable to water. As the dilute filtrate from the DCT enters the collecting duct and passes through the hyperosmotic medulla, water is drawn out osmotically down the gradient (1200 mOsm/L in the inner medulla). The more ADH, the more water leaves → small volume of highly concentrated urine.',
          },
          {
            q: '[NEET High-Difficulty] If the thick ascending limb of the loop of Henle is inhibited by a drug (like a loop diuretic), predict the effect on the medullary gradient and on urine concentration.',
            a: 'Inhibition of the thick ascending limb blocks active NaCl pumping, so the medullary gradient falls (toward the cortical ~300 mOsm/L). With a smaller gradient the collecting duct can draw out much less water → a large volume of dilute, near-isosmotic urine; the concentrating ability is much reduced. This is why loop diuretics cause diuresis.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 980 to 982 ─────────────────────────
  {
    n: 'B',
    title: 'RAAS Cascade and Juxtaglomerular Autoregulation',
    extra: true,
    kalam: 'The macula densa is the sensor; renin is the effector.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the RAAS as a chain: the JGA releases renin, renin converts angiotensinogen to angiotensin-I and then angiotensin-II, which raises pressure and stimulates aldosterone (Figure 16.6 labels the converting enzyme, ACE, in the lungs). It does not give the nature of each peptide, the three targets of angiotensin-II, the channels aldosterone acts on, or <b>tubuloglomerular feedback (TGF)</b>, the mechanism by which the JGA simultaneously senses distal NaCl and regulates renin release. These appear in higher-difficulty NEET questions (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The complete RAAS cascade (memorise the sequence and the enzyme at each step).</b><br>Angiotensinogen (liver) →<sup>renin (JGA)</sup> Angiotensin-I →<sup>ACE (lung endothelium)</sup> Angiotensin-II',
      },
      {
        t: 'p',
        html: 'Angiotensin-II then acts at three sites:<br>• <b>Systemic arterioles:</b> vasoconstriction (↑BP); constriction of the efferent arteriole helps to maintain GFR.<br>• <b>Adrenal cortex:</b> stimulates release of <b>aldosterone</b>.<br>• <b>Posterior pituitary:</b> stimulates <b>ADH</b> release.',
      },
      {
        t: 'p',
        html: 'Aldosterone acts on the <b>principal cells of the DCT and collecting duct</b>: promotes Na<sup>+</sup> reabsorption (via ENaC channels) and K<sup>+</sup> secretion (via ROMK channels). Na<sup>+</sup> reabsorption drags water → blood volume and pressure rise.',
      },
      {
        t: 'proc',
        title: 'JGA autoregulation: two parallel mechanisms',
        steps: [
          '<b>Myogenic mechanism:</b> When afferent arteriole pressure rises, the vessel wall stretches → contracts → resistance rises → glomerular pressure is kept constant. When pressure falls, the vessel relaxes. This is intrinsic to the arteriole muscle.',
          '<b>Tubuloglomerular feedback (TGF):</b> High NaCl at the macula densa (the end of the thick ascending limb, at the start of the distal tubule, against the afferent arteriole at the glomerulus) signals that GFR is too high → afferent arteriole constricts → GFR falls. Low NaCl at the macula densa → afferent arteriole dilates and renin is released from the JGA → GFR rises. The macula densa is the <b>sensor</b>; renin is the <b>effector</b>.',
        ],
      },
      {
        t: 'p',
        html: 'Both mechanisms operate <b>simultaneously</b> to keep GFR within ~10% of its set point despite systemic BP swings of 80–180 mmHg.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Full RAAS Cascade.</b> Trace the complete renin-angiotensin-aldosterone system starting from the liver, naming every intermediate, the enzymes, and the target organs. (5 marks)',
        steps: [
          '<b>Solution.</b> 1. Liver synthesises and releases <b>angiotensinogen</b> (a plasma globulin). 2. When glomerular blood pressure falls, the <b>juxtaglomerular apparatus (JGA)</b> releases the enzyme <b>renin</b>. 3. Renin cleaves angiotensinogen → <b>angiotensin-I</b> (a decapeptide, biologically inactive). 4. <b>Angiotensin-converting enzyme (ACE)</b>, located on the endothelium of lung capillaries, removes two residues → <b>angiotensin-II</b> (an octapeptide, the active vasoconstrictor). 5. Angiotensin-II acts on: (a) systemic arterioles → vasoconstriction → blood pressure rises; (b) adrenal cortex → releases <b>aldosterone</b>; (c) posterior pituitary → releases <b>ADH</b>. 6. Aldosterone acts on <b>principal cells of the DCT and collecting duct</b>: increases Na<sup>+</sup> reabsorption via ENaC channels and increases K<sup>+</sup> secretion via ROMK channels. Na<sup>+</sup> reabsorption draws water → blood volume and pressure rise. 7. ANF (released by cardiac atria when pressure is high) antagonises renin release → the system is shut off.',
        ],
        ans: 'Liver → angiotensinogen → renin (JGA) → angiotensin-I → ACE (lung) → angiotensin-II → vasoconstriction + adrenal cortex (aldosterone) + posterior pituitary (ADH). Target: DCT/collecting duct (Na<sup>+</sup>/water reabsorption).',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Tubuloglomerular Feedback.</b> A drug blocks the NaCl transporters in the thick ascending limb of the loop of Henle. Predict the effect on renin release and on GFR. (2 marks)',
        steps: [
          '<b>Solution.</b> The macula densa senses the NaCl delivered by the thick ascending limb through the same NKCC2 transporter. Blocking the transporter means the macula densa no longer detects the NaCl load → the TGF sensor reads “low” → the afferent arteriole dilates and the JGA releases renin → RAAS activates → angiotensin-II constricts the efferent arteriole and aldosterone increases Na<sup>+</sup> reabsorption → GFR is kept up (the feedback can no longer lower it). However, the loop blocker also reduces the multiplier’s gradient → reduced concentrating ability (long-term consequence). The immediate regulatory response is <b>increased renin release</b> attempting to restore GFR.',
        ],
        ans: 'Renin release increases and the afferent arteriole dilates, so GFR is kept up rather than lowered; the sustained effect is reduced medullary concentrating ability.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the enzyme that converts angiotensin-I to angiotensin-II, and state where it is located.',
            a: 'ACE (angiotensin-converting enzyme), located on the endothelium of lung capillaries.',
          },
          {
            q: '[NEET] State two actions of angiotensin-II that raise blood pressure.',
            a: '(i) Vasoconstriction of systemic arterioles → ↑blood pressure; (ii) stimulation of aldosterone release → Na<sup>+</sup>/water reabsorption → ↑blood volume and pressure.',
          },
          {
            q: '[NEET] What is the juxtaglomerular apparatus, and what is its role in autoregulation of GFR?',
            a: 'The JGA is a specialised region where the afferent arteriole touches the distal convoluted tubule near the glomerulus. It contains juxtaglomerular cells (modified smooth muscle that secrete renin) and macula densa cells (sensing distal NaCl). It mediates tubuloglomerular feedback and is the source of renin in the RAAS.',
          },
          {
            q: '[CUET] Differentiate between the myogenic mechanism and tubuloglomerular feedback as mechanisms of renal autoregulation.',
            a: 'Myogenic: intrinsic contraction/relaxation of afferent arteriole smooth muscle in response to pressure changes: pressure ↑ → stretch → contraction → GFR constant. Tubuloglomerular feedback: macula densa cells sense distal NaCl; high NaCl → afferent constriction (↓GFR); low NaCl → renin release (↑GFR).',
          },
          {
            q: '[NEET High-Difficulty] A patient on an ACE inhibitor (e.g., enalapril) shows reduced aldosterone secretion. Explain why.',
            a: 'ACE converts angiotensin-I to angiotensin-II. Angiotensin-II normally stimulates the adrenal cortex to release aldosterone. An ACE inhibitor blocks this conversion → less angiotensin-II → less aldosterone secretion.',
          },
          {
            q: '[NEET] Name the channels through which aldosterone promotes Na<sup>+</sup> reabsorption and K<sup>+</sup> secretion in the DCT principal cells.',
            a: 'Na<sup>+</sup> reabsorption via <b>ENaC (epithelial sodium channels)</b>; K<sup>+</sup> secretion via <b>ROMK (renal outer medullary K channels)</b>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 982 to 984 ─────────────────────────
  {
    n: 'C',
    title: 'ADH Mechanism and Aquaporins',
    extra: true,
    kalam: 'ADH puts aquaporin-2 into the apical membrane; no AQP2, no water reabsorption.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that osmoreceptors trigger ADH release and that ADH makes the collecting duct (and DCT) permeable to water, so that water is drawn into the salty medulla and concentrated urine is produced; it names diabetes insipidus as the result of too little ADH. It does not explain <b>how</b> ADH does this at the cellular level, specifically, through <b>aquaporin-2 (AQP2) water channels</b>, nor the two forms of <b>diabetes insipidus</b> or the stimuli of ADH release beyond osmolarity and volume (such as angiotensin-II and alcohol). These are tested at NEET High-Difficulty level (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'ADH signalling at the collecting duct cell',
        steps: [
          'ADH (vasopressin) binds to <b>V2 receptors</b> on the basolateral membrane of the principal cell of the collecting duct.',
          'V2 receptors are G-protein-coupled receptors → activate adenylyl cyclase → increase <b>cAMP</b> inside the cell.',
          'cAMP activates <b>protein kinase A (PKA)</b> → phosphorylates vesicles containing <b>AQP2 (aquaporin-2)</b> water channels.',
          'Phosphorylated AQP2 vesicles are inserted into the <b>apical (luminal) membrane</b> → the cell suddenly becomes permeable to water.',
          'Water enters from the collecting duct lumen, driven by the medullary osmotic gradient (~1200 mOsm/L in the inner medulla), and exits the cell via AQP3 and AQP4 on the <b>basolateral membrane</b> into the blood.',
          'When ADH falls, AQP2 is endocytosed back into the cell → permeability drops → water is retained in the tubule → dilute urine.',
        ],
      },
      {
        t: 'p',
        html: '<b>Key molecular players:</b><br>• <b>AQP2:</b> ADH-regulated water channel, apical membrane (inserted in large numbers when ADH is high; mostly stored in vesicles when ADH is low)<br>• <b>AQP3, AQP4:</b> Constitutively expressed on basolateral membrane (always present); let water leave the cell into blood<br>• <b>Urea channel (UT-A1):</b> Also ADH-regulated; allows urea recycling that amplifies the gradient',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Diabetes Insipidus at Molecular Level.</b> A patient with diabetes insipidus produces 10 L of dilute urine per day. Explain the defect at the level of the collecting duct cell and state why the urine remains dilute despite the presence of a normal medullary osmotic gradient. (3 marks)',
        steps: [
          '<b>Solution.</b> In diabetes insipidus, ADH secretion is deficient (central) or the collecting duct cells do not respond to ADH (nephrogenic). In either case, the V2 receptor signalling cascade fails: cAMP does not rise, so AQP2 vesicles are not inserted into the apical membrane. The collecting duct cells remain impermeable to water at their luminal surface. Although the medullary gradient is at first intact (~1200 mOsm/L), water cannot cross the cell into the hyperosmotic interstitium without AQP2 channels. The filtrate passes through unchanged → large volumes of dilute urine (~100 mOsm/L). The very high flow of dilute fluid through the medulla can also wash out part of the gradient over time, which makes the polyuria worse.',
        ],
        ans: 'Without ADH, AQP2 is not inserted into the apical membrane → collecting duct cells are impermeable to water → water cannot enter the hyperosmotic medulla → dilute urine persists.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>ADH and the Collecting Duct.</b> State three conditions that would increase ADH secretion and three that would decrease it. (3 marks)',
        steps: [
          '<b>Solution.</b> <b>ADH increases when:</b> (i) plasma osmolarity rises above its set point (about 285–290 mOsm/L) (osmoreceptors in hypothalamus); (ii) blood volume or pressure falls (baroreceptors in carotid sinus and aortic arch); (iii) angiotensin-II levels rise (RAAS activation). <b>ADH decreases when:</b> (i) plasma osmolarity falls; (ii) blood volume/pressure rises (cardiac atria stretch → ANF release, which suppresses ADH); (iii) alcohol consumption (ethanol inhibits ADH release → increased diuresis).',
        ],
        ans: 'Increases: ↑plasma osmolarity, ↓blood volume/pressure, ↑angiotensin-II. Decreases: ↓plasma osmolarity, ↑blood volume/pressure, alcohol.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the water channel protein that is inserted into the apical membrane of the collecting duct principal cell under the influence of ADH.',
            a: '<b>Aquaporin-2 (AQP2)</b>: the ADH-regulated water channel.',
          },
          {
            q: '[CUET] State whether AQP2 is present in the apical membrane when ADH levels are high or low, and explain why.',
            a: 'High ADH: AQP2 is inserted (many channels in the apical membrane). Low ADH: AQP2 is taken back into vesicles (very few at the apical membrane). ADH triggers a signalling cascade (V2 receptor → cAMP → PKA) that moves AQP2 vesicles to the membrane.',
          },
          {
            q: '[NEET] A person drinks a large volume of water. Predict the change in ADH secretion and the effect on urine concentration.',
            a: 'Water intake → plasma osmolarity falls → osmoreceptors inhibit ADH release → collecting duct becomes less permeable → less water reabsorbed → large volume of dilute urine.',
          },
          {
            q: '[NEET High-Difficulty] Explain why patients with nephrogenic diabetes insipidus do not respond to exogenous ADH, whereas patients with central diabetes insipidus do.',
            a: 'Nephrogenic DI: the defect is in the V2 receptor or AQP2 channel itself → collecting duct cells cannot respond to ADH even when it is present. Central DI: ADH production (hypothalamus/posterior pituitary) is deficient → administering exogenous ADH bypasses the deficit and activates the normal signalling pathway → AQP2 insertion → urine concentrates.',
          },
          {
            q: '[CBSE] State two differences between the apical and basolateral membrane water channels of the collecting duct principal cell.',
            a: 'Apical: AQP2 (ADH-regulated, inserted/removed depending on ADH level); Basolateral: AQP3/AQP4 (constitutively expressed, always present, allow water to exit into blood regardless of ADH).',
          },
          {
            q: '[NEET] What is the role of cAMP in ADH signalling at the collecting duct?',
            a: 'ADH binds V2 receptors → activates adenylyl cyclase → ↑cAMP → activates PKA → phosphorylates AQP2 vesicles → fusion with apical membrane → water permeability increases. cAMP is the second messenger in this pathway.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 984 to 986 ─────────────────────────
  {
    n: 'D',
    title: 'Deamination and the Ornithine (Urea) Cycle',
    extra: true,
    kalam: 'It is a cycle because ornithine is regenerated at the end and re-enters the first step.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states that ammonia from amino-acid breakdown is converted to urea in the liver (the ornithine/urea cycle), and it defines deamination as removal of the amino group. It does not give the steps of the <b>ornithine (urea) cycle</b>, the enzyme sequence or the cellular location, nor the biochemistry of deamination (transamination and oxidative deamination), all of which appear in NEET High-Difficulty questions (the book’s estimate from past papers, not official figures). Both are supplied here.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1: Deamination (amino acid → ammonia).</b> Amino acids are usually used for energy only after the amino group (−NH<sub>2</sub>) has been removed. In the <b>liver</b> this happens in two linked steps. First, <b>transamination</b> moves the amino group from the amino acid to α-ketoglutarate, forming glutamate:<br>Amino acid + α-ketoglutarate →<sup>transaminase</sup> α-keto acid + glutamate<br>Then <b>oxidative deamination</b> of glutamate releases the nitrogen as ammonia:<br>Glutamate + NAD<sup>+</sup> →<sup>glutamate dehydrogenase</sup> α-ketoglutarate + NH<sub>3</sub> + NADH',
      },
      {
        t: 'p',
        html: 'The ammonia released is the substrate for the urea cycle. The liver also captures ammonia via <b>glutamine synthetase</b> (glutamate + NH<sub>3</sub> → glutamine) for transport to the kidney, where glutaminase releases ammonia for excretion in urine (important in acidosis).',
      },
      {
        t: 'p',
        html: '<b>Step 2: Ornithine cycle (hepatic ureagenesis).</b> The urea cycle converts 2 NH<sub>3</sub> + CO<sub>2</sub> + 3 ATP + 2 H<sub>2</sub>O → urea + 2 ADP + AMP + PP<sub>i</sub> + 2 P<sub>i</sub>. It occurs in two cellular compartments: <b>mitochondria</b> (first two steps) and <b>cytoplasm</b> (last three steps).',
      },
      {
        t: 'p',
        html: '<b>Mitochondria:</b><br>1. NH<sub>3</sub> + CO<sub>2</sub> + 2 ATP →<sup>carbamoyl phosphate synthetase I (CPS-I)</sup> carbamoyl phosphate + 2 ADP + P<sub>i</sub><br>2. Carbamoyl phosphate + <b>ornithine</b> →<sup>ornithine transcarbamoylase</sup> <b>citrulline</b>',
      },
      {
        t: 'p',
        html: '<b>Cytoplasm:</b><br>3. Citrulline + <b>aspartate</b> + ATP →<sup>argininosuccinate synthetase</sup> <b>argininosuccinate</b><br>4. Argininosuccinate →<sup>argininosuccinate lyase</sup> <b>arginine</b> + fumarate<br>5. Arginine →<sup>arginase</sup> <b>urea</b> + <b>ornithine</b> (ornithine returns to the mitochondria)',
      },
      {
        t: 'p',
        html: '<b>Net stoichiometry:</b> 2 NH<sub>3</sub> + CO<sub>2</sub> + 3 ATP + 2 H<sub>2</sub>O → urea + 2 ADP + AMP + PP<sub>i</sub> + 2 P<sub>i</sub>. The second nitrogen of urea enters as aspartate (step 3) and leaves as fumarate (step 4); the fumarate enters the TCA cycle (links to carbohydrate metabolism), and aspartate is rebuilt from it by way of oxaloacetate and transamination.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Ornithine Cycle.</b> Name the two steps of the ornithine cycle that occur in the mitochondria and state why they must occur there. (2 marks)',
        steps: [
          '<b>Solution.</b> Steps 1 and 2 occur in the mitochondria: (1) formation of carbamoyl phosphate by <b>CPS-I</b>, and (2) condensation of carbamoyl phosphate with ornithine to form citrulline by <b>ornithine transcarbamoylase</b>. These steps require the mitochondrial matrix because: (i) CPS-I is a mitochondrial matrix enzyme (distinct from CPS-II, the cytoplasmic enzyme used in pyrimidine synthesis); and (ii) CPS-I and ornithine transcarbamoylase both sit in the matrix, where the ammonia from glutamate dehydrogenase is made, which keeps toxic NH<sub>3</sub> inside the mitochondrion until it is bound; ornithine must be transported into the matrix and citrulline out, so the first two steps are separated from the last three (cytoplasmic).',
        ],
        ans: 'Steps 1 (CPS-I) and 2 (ornithine transcarbamoylase) in the mitochondrial matrix; CPS-I is a mitochondrial enzyme and the reaction requires the mitochondrial environment.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Deamination and Urea Synthesis.</b> Explain how ammonia produced during protein metabolism is converted to urea for excretion. (3 marks)',
        steps: [
          '<b>Solution.</b> 1. Transamination moves the amino group of amino acids to α-ketoglutarate, forming glutamate. 2. In the mitochondrial matrix of hepatocytes, glutamate dehydrogenase oxidatively deaminates glutamate, releasing free NH<sub>3</sub> (and NADH). 3. NH<sub>3</sub> + CO<sub>2</sub> + 2ATP are converted to carbamoyl phosphate by CPS-I. 4. Carbamoyl phosphate combines with ornithine → citrulline (mitochondria). 5. Citrulline moves to cytoplasm, combines with aspartate → argininosuccinate → arginine + fumarate. 6. Arginine is cleaved by arginase → urea + ornithine. Ornithine is recycled to the mitochondria. Urea is released to blood → kidney → urine.',
        ],
        ans: 'Deamination produces NH<sub>3</sub> in the liver; NH<sub>3</sub> + CO<sub>2</sub> enter the ornithine cycle (mitochondrial steps 1–2, cytoplasmic steps 3–5) → urea is formed and excreted by the kidney.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CUET] What is oxidative deamination and where does it occur?',
            a: 'Oxidative deamination is the removal of the amino group from an amino acid as ammonia, coupled with the formation of a keto acid and NADH. It occurs in the liver (and kidney), primarily catalysed by glutamate dehydrogenase.',
          },
          {
            q: '[NEET] Name the substrate that provides the second nitrogen atom in the urea molecule.',
            a: 'Aspartate provides the second nitrogen atom (step 3, argininosuccinate synthetase).',
          },
          {
            q: '[NEET High-Difficulty] In a patient with liver failure, blood ammonia rises but urea falls. Explain using the ornithine cycle.',
            a: 'Liver failure → CPS-I and ornithine transcarbamoylase are deficient or damaged → the mitochondrial steps of the urea cycle cannot proceed → NH<sub>3</sub> accumulates in blood (ammonia toxicity) while urea synthesis stalls → urea levels fall. The failing liver cannot process ammonia through the ornithine cycle.',
          },
          {
            q: '[CBSE] State one difference between CPS-I and CPS-II.',
            a: 'CPS-I (mitochondrial, uses NH<sub>3</sub>, involved in urea synthesis) vs CPS-II (cytoplasmic, uses glutamine, involved in pyrimidine synthesis). CPS-I is the liver’s enzyme (also in the intestinal mucosa) in ureotelic animals.',
          },
          {
            q: '[NEET] What is the fate of the ornithine molecule at the end of the urea cycle?',
            a: 'Ornithine is regenerated by arginase cleavage of arginine and is recycled back into the mitochondria to begin another round of the cycle.',
          },
          {
            q: '[NEET High-Difficulty] Explain why the urea cycle is described as a “cycle” and name the compound that links it to the TCA cycle.',
            a: 'It is a cycle because ornithine is regenerated at the end and re-enters the first step. <b>Fumarate</b> links the urea cycle to the TCA cycle: fumarate produced in step 4 enters the TCA cycle and can be converted to oxaloacetate, which can be transaminated back to aspartate, replenishing the second nitrogen donor.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 987 to 989 ─────────────────────────
  {
    n: 'E',
    title: 'Kidney as an Endocrine Organ',
    extra: true,
    kalam: 'Hypoxia → EPO → RBCs up.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter develops renin’s part in the RAAS (Topic 04), but it mentions erythropoietin and the kidney’s activation of vitamin D only in passing, and it does not develop the kidney’s full endocrine portfolio. For CBSE Boards a 3-mark question on “other functions of the kidney” is routine, and for NEET the <b>renin-erythropoietin-calcitriol axis</b> is increasingly tested as integrated physiology (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The kidney’s four endocrine roles',
        steps: [
          '<b>Renin</b> (from juxtaglomerular cells): initiates the RAAS cascade (covered in Additional topic B).',
          '<b>Erythropoietin (EPO):</b> synthesised and secreted by <b>peritubular fibroblast cells</b> (especially in the renal cortex). Stimulus: hypoxia (low renal O<sub>2</sub> tension) or anaemia. Action: EPO acts on bone marrow erythroid progenitor cells → increased RBC production → increased O<sub>2</sub>-carrying capacity. Used therapeutically (e.g., epoetin alfa) for anaemia of chronic kidney disease.',
          '<b>Calcitriol (active vitamin D, 1,25-dihydroxycholecalciferol):</b> the kidney hydroxylates 25-hydroxyvitamin D (produced in liver) to <b>1,25-(OH)<sub>2</sub>D<sub>3</sub></b> (calcitriol) via the enzyme <b>1α-hydroxylase</b>. Action: ↑intestinal Ca<sup>2+</sup> absorption, ↑bone mineralisation, ↑renal Ca<sup>2+</sup> reabsorption. In kidney failure, this step is lost → hypocalcaemia → secondary hyperparathyroidism.',
          '<b>Prostaglandins:</b> kidney synthesises prostaglandins (especially PGE<sub>2</sub> and PGI<sub>2</sub>) that: (a) cause vasodilation of afferent arteriole → ↑GFR; (b) inhibit Na<sup>+</sup> reabsorption in the collecting duct; (c) modulate ADH action. NSAIDs (like ibuprofen) inhibit prostaglandin synthesis → can reduce GFR.',
        ],
      },
      {
        t: 'p',
        html: '<b>The integrated renin-erythropoietin-calcitriol axis:</b> Low renal perfusion → renin → angiotensin-II, which constricts the efferent arteriole (maintaining GFR) and stimulates aldosterone (Na<sup>+</sup>/water retention). Hypoxia → EPO → RBCs up. Low plasma Ca<sup>2+</sup> → ↑PTH → ↑renal 1α-hydroxylase → ↑calcitriol → ↑intestinal Ca<sup>2+</sup> absorption. Together they maintain blood pressure and GFR, oxygen delivery and mineral homeostasis.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Erythropoietin.</b> State the source, stimulus, and two actions of erythropoietin. (3 marks)',
        steps: [
          '<b>Solution.</b> <b>Source:</b> Peritubular fibroblast cells of the renal cortex. <b>Stimulus:</b> Renal hypoxia (low O<sub>2</sub> tension) caused by anaemia, low atmospheric O<sub>2</sub>, or reduced renal blood flow. <b>Actions:</b> (i) Stimulates bone marrow erythroid progenitor cells → increased production and maturation of red blood cells → increased haemoglobin and O<sub>2</sub>-carrying capacity of blood. (ii) Promotes release of reticulocytes from bone marrow into circulation. In chronic kidney disease, EPO deficiency causes renal anaemia, a key clinical consequence of kidney failure.',
        ],
        ans: 'Source: peritubular fibroblasts; Stimulus: renal hypoxia; Actions: ↑RBC production in bone marrow, ↑O<sub>2</sub>-carrying capacity.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Calcitriol and Kidney Failure.</b> A patient with chronic kidney failure develops hypocalcaemia and bone demineralisation. Explain using the calcitriol pathway. (2 marks)',
        steps: [
          '<b>Solution.</b> The kidney contains 1α-hydroxylase, which converts 25-hydroxyvitamin D (produced in the liver) to <b>1,25-dihydroxyvitamin D (calcitriol)</b>, the active form that promotes intestinal calcium absorption. In kidney failure this enzyme is lost → calcitriol levels fall → intestinal calcium absorption decreases → blood calcium drops → hypocalcaemia. The parathyroid glands respond by increasing PTH secretion (secondary hyperparathyroidism), which attempts to normalise calcium but at the cost of bone resorption → renal osteodystrophy (bone demineralisation).',
        ],
        ans: 'Loss of renal 1α-hydroxylase → ↓calcitriol → ↓intestinal Ca<sup>2+</sup> absorption → hypocalcaemia → secondary hyperparathyroidism → bone demineralisation.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the cell type in the kidney that secretes erythropoietin and state its anatomical location.',
            a: 'Peritubular fibroblast cells (also called interstitial fibroblast cells), located in the renal cortex.',
          },
          {
            q: '[CUET] What is the active form of vitamin D synthesised by the kidney, and what enzyme is required?',
            a: '1,25-dihydroxycholecalciferol (calcitriol); enzyme: <b>1α-hydroxylase</b>.',
          },
          {
            q: '[NEET High-Difficulty] Explain why patients with kidney failure develop anaemia.',
            a: 'The failing kidney cannot produce adequate erythropoietin → bone marrow receives insufficient EPO signal → decreased erythropoiesis → reduced RBC count → renal anaemia. This is why recombinant EPO (epoetin) is given therapeutically.',
          },
          {
            q: '[CBSE] State two roles of renal prostaglandins in kidney function.',
            a: '(i) Vasodilatory prostaglandins (PGE<sub>2</sub>, PGI<sub>2</sub>) dilate the afferent arteriole → maintain GFR. (ii) Prostaglandins modulate Na<sup>+</sup> reabsorption and oppose ADH action in the collecting duct.',
          },
          {
            q: '[NEET] A person living at high altitude develops increased EPO secretion. What is the physiological stimulus for this?',
            a: 'Hypoxia: the low atmospheric PO<sub>2</sub> at high altitude reduces renal oxygen tension, stimulating peritubular fibroblasts to secrete more EPO → ↑RBC production → improved O<sub>2</sub> delivery.',
          },
          {
            q: '[NEET High-Difficulty] A patient with chronic kidney disease is given calcitriol supplements. Explain why this is necessary and which gland’s function must be monitored when dosing.',
            a: 'Calcitriol is given to correct the deficiency caused by loss of renal 1α-hydroxylase. However, calcitriol must be dosed carefully because excess causes hypercalcaemia and metastatic calcification. The parathyroid glands (which are often already hyperactive) must be monitored: over-suppression of PTH can cause adynamic bone disease.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 989 to 991 ─────────────────────────
  {
    n: 'F',
    title: 'Diuretics: Classes and Mechanisms',
    extra: true,
    kalam: 'Loop diuretics (e.g., furosemide) block the NKCC2 cotransporter in the thick ascending limb.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter does not cover diuretics at all. They are a standard NEET and medical examination topic (the book’s estimate from past papers, not official figures): the mechanism by which each class acts on a specific nephron segment, the electrolyte consequences, and clinical uses. All six diuretic classes act on nephron segments the chapter teaches, so this is an extension of existing knowledge, not new territory. Additional topics A and B already use a loop diuretic as an example; this topic explains it.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Diuretic classes mapped to nephron segments:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Class', 'Site of action', 'Mechanism', 'Key electrolyte effect (reabsorption in the tubule; the blood level follows)'],
        rows: [
          [
            '<b>Osmotic diuretics</b> (mannitol)',
            'Throughout tubule',
            'Filtered but not reabsorbed → osmotic drag of water and Na<sup>+</sup>',
            '↓water and Na<sup>+</sup> reabsorption',
          ],
          [
            '<b>Carbonic anhydrase inhibitors</b> (acetazolamide)',
            'PCT',
            'Inhibit CA → ↓H<sup>+</sup> production → ↓Na<sup>+</sup>/H<sup>+</sup> exchange → less Na<sup>+</sup> and HCO<sub>3</sub><sup>−</sup> reabsorption',
            '↓Na<sup>+</sup> and HCO<sub>3</sub><sup>−</sup> reabsorption (metabolic acidosis)',
          ],
          [
            '<b>Loop diuretics</b> (furosemide, bumetanide)',
            'Thick ascending limb',
            'Inhibit <b>Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>−</sup> cotransporter (NKCC2)</b>',
            '↓Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup> and Mg<sup>2+</sup> reabsorption (K<sup>+</sup>, Ca<sup>2+</sup> and Mg<sup>2+</sup> lost in urine)',
          ],
          [
            '<b>Thiazides</b> (hydrochlorothiazide)',
            'DCT',
            'Inhibit <b>Na<sup>+</sup>/Cl<sup>−</sup> cotransporter (NCC)</b>',
            '↓Na<sup>+</sup> and Cl<sup>−</sup> reabsorption, ↑Ca<sup>2+</sup> reabsorption (K<sup>+</sup> lost in urine)',
          ],
          [
            '<b>K<sup>+</sup>-sparing diuretics</b> (spironolactone, amiloride)',
            'Collecting duct',
            'Spironolactone: blocks aldosterone receptor → ↓ENaC synthesis; Amiloride: blocks ENaC directly',
            '↓Na<sup>+</sup> reabsorption, ↓K<sup>+</sup> secretion',
          ],
          [
            '<b>ADH antagonists</b> (vaptans: tolvaptan)',
            'Collecting duct',
            'Block V2 receptors → no AQP2 insertion',
            '↓water reabsorption (aquaresis)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Key clinical correlations:</b><br>• <b>Loop diuretics</b> → hypokalaemia (risk of arrhythmia), metabolic alkalosis, hypocalcaemia (risk of osteoporosis with long-term use)<br>• <b>Thiazides</b> → hyperglycaemia (impair insulin secretion), hyperuricaemia (precipitate gout), hypercalcaemia<br>• <b>K<sup>+</sup>-sparing diuretics</b> → hyperkalaemia (contraindicated in renal failure)<br>• <b>Osmotic diuretics</b> → used in cerebral oedema (reduce brain water), acute renal failure',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Loop Diuretic Mechanism.</b> Explain why loop diuretics cause hypokalaemia and metabolic alkalosis. (3 marks)',
        steps: [
          '<b>Solution.</b> Loop diuretics (e.g., furosemide) block the <b>NKCC2 cotransporter</b> in the thick ascending limb, preventing reabsorption of Na<sup>+</sup>, K<sup>+</sup>, and Cl<sup>−</sup>. This delivers a large load of Na<sup>+</sup> to the distal nephron (DCT and collecting duct). More Na<sup>+</sup> and fluid reach the collecting duct; Na<sup>+</sup> entry through ENaC makes the lumen negative and the faster flow carries K<sup>+</sup> away, so K<sup>+</sup> secretion rises (aldosterone, raised by the volume loss, increases it further) → increased K<sup>+</sup> loss in urine → <b>hypokalaemia</b>. Simultaneously, the loop diuretic-induced volume contraction activates the RAAS → aldosterone rises → H<sup>+</sup> secretion in the intercalated cells of the collecting duct increases → <b>metabolic alkalosis</b>. The alkalosis further drives K<sup>+</sup> into cells, worsening hypokalaemia, a self-reinforcing cycle.',
        ],
        ans: 'NKCC2 blockade → more Na<sup>+</sup> reaches distal nephron → ↑Na<sup>+</sup> reabsorption → ↑K<sup>+</sup> secretion (hypokalaemia) + ↑H<sup>+</sup> secretion (metabolic alkalosis).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>K<sup>+</sup>-Sparing Diuretic.</b> Name one K<sup>+</sup>-sparing diuretic and state why it does not cause hypokalaemia. (2 marks)',
        steps: [
          '<b>Solution.</b> <b>Spironolactone</b> (aldosterone receptor antagonist) or <b>amiloride</b> (direct ENaC blocker). Both act at the collecting duct. Aldosterone increases Na<sup>+</sup> entry through ENaC, which makes the lumen negative and so favours K<sup>+</sup> secretion (through ROMK). Blocking ENaC (amiloride) or blocking the aldosterone receptor (spironolactone) reduces both Na<sup>+</sup> reabsorption and K<sup>+</sup> secretion simultaneously → natriuresis without kaliuresis. Because K<sup>+</sup> secretion is inhibited rather than enhanced, K<sup>+</sup> is retained → no hypokalaemia.',
        ],
        ans: 'Amiloride or spironolactone; they block ENaC or the aldosterone receptor → ↓Na<sup>+</sup> reabsorption but also ↓K<sup>+</sup> secretion → K<sup>+</sup> is spared.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Name the transporter inhibited by loop diuretics in the thick ascending limb.',
            a: '<b>NKCC2</b>: the Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>−</sup> cotransporter (thiazide-sensitive NCC is in the DCT).',
          },
          {
            q: '[CUET] Why are thiazide diuretics sometimes called “mild” diuretics compared to loop diuretics?',
            a: 'Thiazides inhibit the NCC transporter in the DCT, which reabsorbs only ~5% of filtered Na<sup>+</sup> (the loop reabsorbs ~25%) → less natriuresis → less volume loss → milder effect.',
          },
          {
            q: '[NEET High-Difficulty] A patient on a thiazide diuretic develops hyperuricaemia. Explain why.',
            a: 'Thiazides cause mild volume depletion, which increases proximal reabsorption of Na<sup>+</sup> and urate together. They also compete with urate for secretion by the organic anion transporters of the proximal tubule. Both effects reduce uric-acid excretion → hyperuricaemia → risk of precipitating gout.',
          },
          {
            q: '[CBSE] State one clinical use of osmotic diuretics and one reason they are used with caution.',
            a: 'Clinical use: acute cerebral oedema (reduce brain water), acute renal failure (maintain diuresis). Used with caution because they can cause hyponatraemia, hypernatraemia, or volume depletion.',
          },
          {
            q: '[NEET] What is the mechanism of action of acetazolamide?',
            a: 'Acetazolamide inhibits carbonic anhydrase in the PCT → ↓H<sup>+</sup> production → ↓Na<sup>+</sup>/H<sup>+</sup> exchanger activity → less Na<sup>+</sup> and HCO<sub>3</sub><sup>−</sup> reabsorption → alkaline diuresis → metabolic acidosis.',
          },
          {
            q: '[NEET High-Difficulty] Vaptans (e.g., tolvaptan) are called “aquaretics.” Explain why they increase water excretion without significantly affecting electrolyte excretion.',
            a: 'Vaptans block V2 receptors on collecting duct principal cells → cAMP does not rise → AQP2 is not inserted into the apical membrane → collecting duct cells remain impermeable to water → water cannot be reabsorbed despite the medullary gradient → pure water loss (aquaresis) without Na<sup>+</sup> loss. Electrolytes are largely unaffected because Na<sup>+</sup> reabsorption via other channels (ENaC, NCC) proceeds normally.',
          },
        ],
      },
    ],
  },
];
