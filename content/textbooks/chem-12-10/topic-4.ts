import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topic 04, Hormones: pp. 508–515 of the Class 12 Chemistry
 * Master Reference, word for word, split at its Sections 1 to 8. The text
 * never cites Figure 10.6, blood-glucose feedback (caption p. 510, drawn
 * p. 511), by number, so it sits where the book prints its caption: after
 * Part B of "Key procedures and logical framework". It is redrawn in
 * lib/diagrams/chemistry-12-10.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 508–515 ─────────────────────────
  {
    n: '04',
    title: 'Hormones',
    kalam:
      'Hormones regulate and signal; they do not themselves catalyse reactions (that’s enzymes) and are not obtained from diet (that’s vitamins).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Examined as an elementary idea (structures excluded). CBSE Boards set 1–2 mark questions on the definition of hormones, the insulin–glucagon pair, or a hormone–function/deficiency match. NEET asks 1–2 questions most years (often insulin/thyroxine functions or hormone classification). JEE Main touches it rarely, usually as a hormone-vs-enzyme distinction in an assertion-reason item; JEE Advanced essentially does not test it directly.',
      },
      {
        t: 'p',
        html: 'The body is a vast country of trillions of cells, and they constantly need to coordinate: when to grow, when to burn fuel, when to brace for danger. Two communication networks run this coordination. One is the nervous system — fast, wired, like a phone call. The other is the <b>endocrine system</b>, which works by <b>chemical messengers called hormones</b> — slower, broadcast through the blood, like sending a letter by courier.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the endocrine glands as post offices scattered across the country (thyroid in the neck, pancreas near the stomach, adrenals atop the kidneys). Each writes a specific message — a hormone — and drops it directly into the bloodstream (the courier network). The blood carries that tiny letter everywhere, but only the cell with the matching address — a specific <b>receptor</b> — opens and acts on it. A hormone is therefore defined as a chemical substance, secreted by an <b>endocrine (ductless) gland</b> directly into the blood, that acts as an <b>intercellular messenger</b>, travelling to a distant <b>target organ</b> to produce a specific effect.',
      },
      {
        t: 'p',
        html: 'Three features make hormones remarkable. First, they act in <b>astonishingly small amounts</b> — a pinch of hormone steers a whole organ. Second, they act <b>far from where they are made</b> — made in the pancreas, insulin acts on muscle and liver. Third, they keep the body in balance — they are the chief agents of <b>homeostasis</b>, the steady internal state (constant blood glucose, temperature, salt balance) that life depends on.',
      },
      {
        t: 'p',
        html: 'The cleanest illustration is blood-sugar control. <b>Think about it this way:</b> imagine an overhead water tank that must stay near a fixed level. One valve drains it, another fills it. After a meal, blood glucose rises; the pancreas releases <b>insulin</b>, which “drains” glucose out of the blood into cells (and stores it as glycogen — the storage polysaccharide you met in carbohydrates). When glucose falls too low, the pancreas releases <b>glucagon</b>, which “fills” the blood back up by breaking glycogen down. These two opposing hormones keep blood glucose within a narrow, safe band — a perfect picture of hormonal homeostasis.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• Hormones <b>regulate and signal</b>; they do not themselves catalyse reactions (that’s enzymes) and are not obtained from diet (that’s vitamins). Keeping these three roles distinct is the single most-tested idea here.<br>• The right amount matters in both directions: <b>excess and deficiency both cause disorders</b> (too little insulin → diabetes; too little thyroxine → hypothyroidism/goitre).<br>• At this level the syllabus asks for the <b>elementary idea</b> only — classification, examples, and functions — not the detailed structural formulae of the hormones.',
      },

      { t: 'part', title: 'Key definitions and classifications' },
      {
        t: 'p',
        html: 'Hormones carry no formulae or dimensional quantities at this level; the essentials are the definition, the chemical classes, and the example-and-function table exams draw from.',
      },
      {
        t: 'p',
        html: '<b>Definition:</b> hormones are chemical messengers secreted by ductless (endocrine) glands directly into the bloodstream, which transports them to target tissues where, in very small amounts, they regulate specific physiological processes and maintain homeostasis.',
      },
      {
        t: 'table',
        title: 'Classification by chemical nature (three classes)',
        head: ['Class', 'Built from', 'Solubility', 'Examples'],
        rows: [
          ['Steroid hormones', 'derived from cholesterol', 'lipid-soluble', 'testosterone, estradiol (sex hormones); cortisol'],
          ['Polypeptide / protein hormones', 'chains of amino acids', 'water-soluble', 'insulin, glucagon'],
          [
            'Amino-acid–derived (amine) hormones',
            'derived from an amino acid (tyrosine)',
            'water-soluble (adrenaline, noradrenaline); thyroxine is the exception, lipid-soluble',
            'adrenaline (epinephrine), noradrenaline; thyroxine',
          ],
        ],
      },
      {
        t: 'table',
        title: 'Key hormones, sources and functions (the high-yield table)',
        head: ['Hormone', 'Gland / source', 'Main function', 'Disorder if abnormal'],
        rows: [
          ['Insulin', 'pancreas', '<b>lowers</b> blood glucose (uptake + storage as glycogen)', 'deficiency → diabetes mellitus'],
          ['Glucagon', 'pancreas', '<b>raises</b> blood glucose (breaks down glycogen)', 'imbalance disturbs glucose control'],
          [
            'Thyroxine (T<sub>4</sub>)',
            'thyroid',
            'regulates metabolic rate (basal metabolism)',
            'deficiency → hypothyroidism; iodine lack → goitre',
          ],
          ['Adrenaline / Noradrenaline', 'adrenal medulla', '“fight-or-flight”: ↑ heart rate, ↑ blood glucose', '—'],
          ['Cortisol', 'adrenal cortex', 'stress response, regulates carbohydrate/protein/fat metabolism', '—'],
          ['Testosterone / Estradiol', 'testes / ovaries', 'male / female secondary sexual characters', '—'],
        ],
      },
      {
        t: 'p',
        html: 'Note the linkages back across the chapter: <b>insulin/glucagon</b> act on <b>glycogen</b> (see carbohydrates); <b>thyroxine</b> is an iodinated derivative of the amino acid <b>tyrosine; protein hormones are themselves chains of amino acids</b> joined by peptide bonds.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No derivation applies; the reasoning to master is how a hormone produces its effect and how it differs from the chapter’s other “helper” molecules.',
      },
      {
        t: 'proc',
        title: 'Part A — How a hormone acts (the receptor logic)',
        steps: [
          'An endocrine gland secretes the hormone into the <b>blood</b>, which broadcasts it throughout the body.',
          'Only cells bearing the <b>specific receptor</b> for that hormone respond — exactly the lock-and-key selectivity met for enzymes, but here the “key” is the hormone and the “lock” is the receptor on (or in) the target cell.',
          'Binding triggers a specific change inside the target cell (switching a process on or off), producing the hormone’s characteristic effect.',
          'Because only matching cells carry the receptor, one hormone broadcast everywhere still acts only where it should — the basis of hormonal <b>specificity</b>.',
        ],
      },
      {
        t: 'proc',
        title: 'Part B — Homeostasis by feedback (why two opposing hormones)',
        steps: [
          'A regulated quantity (say blood glucose) is sensed by the gland.',
          'If it rises too high, the gland releases the hormone that <b>lowers</b> it (insulin); as the level returns to normal, that hormone’s secretion falls — <b>negative feedback</b>.',
          'If it falls too low, the opposing hormone (glucagon) is released to <b>raise</b> it.',
          'This antagonistic pair, switching on and off by feedback, holds the quantity within a narrow band — the general logic by which hormones maintain the body’s steady internal state.',
        ],
      },
      { t: 'fig', id: 'c12-10-fig-10.6' },
      { t: 'p', html: '<b>Part C — Hormones vs. enzymes vs. vitamins (the distinction examiners love).</b>' },
      {
        t: 'table',
        title: null,
        head: ['', 'Hormones', 'Enzymes', 'Vitamins'],
        rows: [
          [
            'Role',
            'chemical messengers (signal/regulate)',
            'biocatalysts (speed reactions)',
            'accessory dietary factors (often coenzymes)',
          ],
          ['Origin', 'made by endocrine glands in the body', 'made in the body (proteins)', 'mostly obtained from diet'],
          ['Acts…', 'far from where made, via blood', 'at the reaction site', 'as helper to enzymes'],
          ['Amount', 'extremely small', 'small (regenerated)', 'small'],
        ],
      },
      {
        t: 'p',
        html: 'The throughline: a hormone tells a process to happen, an enzyme makes it happen faster, and a vitamin often helps the enzyme do so. Three different jobs — confusing them is the classic error.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Define a hormone. Name the gland that secretes insulin, state insulin’s main function, and name the disorder caused by its deficiency.',
        steps: [
          '<b>Definition:</b> a hormone is a chemical messenger secreted by an endocrine (ductless) gland directly into the bloodstream, which carries it to a target organ where, in small amounts, it regulates a specific physiological function.',
          '<b>Gland:</b> insulin is secreted by the <b>pancreas</b>.',
          '<b>Function:</b> it <b>lowers blood glucose</b>, promoting the uptake of glucose by cells and its storage as glycogen.',
          '<b>Deficiency disorder: diabetes mellitus</b> (persistently high blood glucose).',
        ],
        ans: 'Hormone = blood-borne chemical messenger from an endocrine gland; insulin (pancreas) lowers blood glucose; its deficiency causes diabetes mellitus.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following is a chemical messenger that regulates a body process rather than catalysing a reaction or being supplied by the diet? (a) maltase (b) ascorbic acid (c) glucagon (d) pepsin',
        steps: [
          '<b>The trap:</b> all four are biomolecules from this chapter, so students who haven’t separated the roles pick by familiarity.',
          '<b>Fast reasoning — sort each by job:</b><br>• (a) maltase → enzyme (a <b>biocatalyst</b>) — wrong role.<br>• (b) ascorbic acid → vitamin C, a <b>dietary</b> factor — wrong role.<br>• (c) glucagon → a <b>hormone</b> that signals the liver to raise blood glucose — correct.<br>• (d) pepsin → enzyme (protein-digesting <b>biocatalyst</b>) — wrong role.',
          '<b>Shortcut:</b> “-ase” usually flags an <b>enzyme</b> (not always: pepsin and trypsin are enzymes too, known by name); an acid named as a vitamin (ascorbic) flags a <b>vitamin</b>; the messenger left over is the <b>hormone</b>.',
        ],
        ans: '(c) glucagon.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Assertion (A): Insulin and glucagon together keep blood glucose within a narrow range. Reason (R): The two hormones have antagonistic (opposite) actions on blood glucose. Choose: (a) both A and R true and R explains A; (b) both true but R does not explain A; (c) A true, R false; (d) A false, R true. This links the <b>homeostasis/feedback concept</b> with the <b>antagonistic action of hormones</b>.',
        steps: [
          '<b>Evaluate the Assertion.</b> Insulin lowers blood glucose (storing it as glycogen) and glucagon raises it (breaking glycogen down); their combined, opposing action does hold blood glucose in a narrow band. <b>A is true.</b>',
          '<b>Evaluate the Reason.</b> The two indeed act in opposite directions on the same quantity — that is exactly what “antagonistic” means. <b>R is true.</b>',
          '<b>Does R explain A?</b> Yes — it is precisely because their effects oppose each other that one can correct an excess and the other a deficiency, producing the tight regulation stated in A. So R is the correct explanation of A.',
        ],
        ans: '(a) both true and R correctly explains A.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A patient living in a region with iodine-poor soil and water develops an enlarged thyroid gland (goitre) and a slowed metabolic rate. (i) Name the hormone whose production is impaired and the element essential for it. (ii) Explain, using the idea of hormonal regulation, why the gland enlarges. (iii) Classify this hormone by chemical type and relate it to a biomolecule class met earlier in the chapter.',
        steps: [
          '<b>(i)</b> The impaired hormone is <b>thyroxine (T<sub>4</sub>)</b>, and the essential element is <b>iodine</b> — thyroxine is an iodine-containing hormone, so a dietary iodine shortage limits its synthesis.',
          '<b>(ii)</b> The thyroid is regulated by feedback: when circulating thyroxine is too low, the body’s control signals keep stimulating the thyroid to make more. Unable to produce enough thyroxine (no iodine), the gland responds to this persistent stimulation by <b>growing larger</b> — the visible enlargement called <b>goitre</b>. The slowed metabolism follows directly, because thyroxine’s normal job is to set the basal metabolic rate.',
          '<b>(iii)</b> Thyroxine is an <b>amino-acid–derived (amine) hormone</b> — specifically a derivative of the amino acid <b>tyrosine</b>. So a “hormone” question closes back onto the amino-acid chemistry from earlier in the chapter, illustrating how the chapter’s classes interlock.',
        ],
        ans: '(i) thyroxine; iodine. (ii) low thyroxine → continued stimulation → gland enlarges (goitre); metabolism slows. (iii) amine hormone, a tyrosine derivative.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What are hormones? Give one example each of a hormone that lowers and a hormone that raises blood glucose.',
            a: 'Hormones are chemical messengers secreted by endocrine glands into the blood to regulate body functions; insulin lowers blood glucose, glucagon raises it.',
          },
          {
            q: '[NEET] Name the hormone secreted by the adrenal medulla in response to stress, and state one of its effects.',
            a: 'Adrenaline (epinephrine); it increases heart rate / blood pressure / blood glucose (“fight-or-flight”).',
          },
          {
            q: '[JEE Main] State two ways in which hormones differ from enzymes.',
            a: 'Hormones are chemical messengers that regulate processes and act far from where they are made (via blood); enzymes are biocatalysts (proteins) that speed up reactions at the reaction site and are not transported to distant targets. (Also: enzymes are regenerated unchanged; hormones are consumed/cleared after signalling.)',
          },
          {
            q: '[NEET] Classify the following as steroid, polypeptide, or amine hormones: insulin, testosterone, adrenaline.',
            a: 'Insulin → polypeptide hormone; testosterone → steroid hormone; adrenaline → amine (amino-acid–derived) hormone.',
          },
          {
            q: '[JEE Advanced] Explain why a hormone, although carried to every cell by the blood, produces its effect only in certain “target” organs.',
            a: 'Only the target cells carry the <b>specific receptor</b> that recognises and binds that hormone; cells without the matching receptor cannot respond, so the broadcast hormone acts only where its receptor is present (lock-and-key specificity).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Hormones are best described as:',
        opts: [
          {
            label: 'biocatalysts that speed up biochemical reactions',
            nudge: '<b>(a)</b> describes <b>enzymes</b>, a different functional class.',
          },
          { label: 'chemical messengers secreted by endocrine glands into the blood', nudge: null },
          { label: 'accessory food factors obtained from the diet', nudge: '<b>(c)</b> describes <b>vitamins</b>.' },
          {
            label: 'polymers of nucleotides',
            nudge: '<b>(d)</b> describes <b>nucleic acids</b> — confusing chemical classes from elsewhere in the chapter.',
          },
        ],
        correct: 1,
        solution: 'Hormones are blood-borne chemical messengers from ductless glands.',
      },
      {
        t: 'mcq',
        q: 'The pair of hormones with antagonistic action on blood glucose is:',
        opts: [
          {
            label: 'insulin and thyroxine',
            nudge: '<b>(a)</b> thyroxine sets metabolic rate; it is not insulin’s antagonist for glucose.',
          },
          {
            label: 'adrenaline and cortisol',
            nudge: '<b>(b)</b> both tend to raise glucose under stress — not an antagonistic pair.',
          },
          { label: 'insulin and glucagon', nudge: null },
          {
            label: 'testosterone and estradiol',
            nudge: '<b>(d)</b> these are sex hormones, unrelated to glucose regulation.',
          },
        ],
        correct: 2,
        solution: 'Insulin lowers and glucagon raises blood glucose — directly opposing actions.',
      },
      {
        t: 'mcq',
        q: 'Thyroxine is correctly described as a hormone that:',
        opts: [
          {
            label: 'is a steroid derived from cholesterol',
            nudge: '<b>(a)</b> misclassifies it as a steroid; it is an amino-acid–derived (tyrosine) hormone.',
          },
          { label: 'contains iodine and regulates metabolic rate', nudge: null },
          {
            label: 'is a polypeptide that lowers blood glucose',
            nudge: '<b>(c)</b> describes <b>insulin</b>, not thyroxine.',
          },
          {
            label: 'is secreted by the pancreas',
            nudge: '<b>(d)</b> wrong gland — thyroxine comes from the <b>thyroid</b>, not the pancreas.',
          },
        ],
        correct: 1,
        solution: 'Thyroxine is an iodine-containing hormone that controls the basal metabolic rate.',
      },
      {
        t: 'mcq',
        q: 'Which statement correctly distinguishes hormones from vitamins?',
        opts: [
          {
            label: 'Both are biocatalysts made in the body.',
            nudge: '<b>(a)</b> neither is primarily a biocatalyst (that’s enzymes).',
          },
          {
            label: 'Hormones are made by endocrine glands in the body, whereas vitamins are mostly obtained from the diet.',
            nudge: null,
          },
          {
            label: 'Vitamins are chemical messengers; hormones are dietary factors.',
            nudge: '<b>(c)</b> reverses the two roles.',
          },
          {
            label: 'Both are polymers of amino acids.',
            nudge: '<b>(d)</b> only some hormones are polypeptides; vitamins are not amino-acid polymers — an overgeneralisation.',
          },
        ],
        correct: 1,
        solution: 'Hormones are synthesised internally by glands; vitamins must largely be supplied by food.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>blurring hormones, enzymes and vitamins.</b> A hormone <b>signals</b>, an enzyme <b>catalyses</b>, a vitamin is a <b>dietary helper</b>. If a question names a role, sort by role first.',
          '<b>flipping insulin and glucagon.</b> <b>Insulin lowers</b> blood glucose (think “<b>in</b>sulin puts glucose <b>in</b>to cells”); <b>glucagon raises</b> it. Reversing them is the most common error.',
          '<b>forgetting thyroxine’s iodine link.</b> Thyroxine needs <b>iodine</b>; a lack of iodine causes <b>goitre/hypothyroidism</b>. It is an amine hormone (a tyrosine derivative), not a steroid.',
          '<b>over-studying structures.</b> The syllabus wants the <b>elementary idea</b> — definitions, classification, examples, functions — not detailed hormone structures. Don’t lose time memorising steroid skeletons.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> lock in two mini-lists — the <b>three chemical classes</b> (steroid / polypeptide / amine, with one example each: testosterone, insulin, adrenaline) and the <b>insulin–glucagon antagonism</b> for glucose. Use “<b>in</b>sulin → glucose <b>in</b>” to fix the direction, and remember the chapter linkages (insulin↔glycogen, thyroxine↔tyrosine) — examiners reward answers that connect the classes.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Hormone',
            note: 'chemical messenger secreted by an <b>endocrine (ductless) gland</b> into the <b>blood</b>, acting in tiny amounts on a distant <b>target organ</b> to maintain <b>homeostasis</b>.',
          },
          {
            f: 'Three classes',
            note: '<b>steroid</b> (testosterone, estradiol, cortisol — from cholesterol); <b>polypeptide</b> (insulin, glucagon); <b>amine</b> (adrenaline, thyroxine — from tyrosine).',
          },
          {
            f: 'Glucose control (antagonistic pair)',
            note: '<b>insulin lowers</b>, <b>glucagon raises</b> blood glucose; insulin deficiency → <b>diabetes mellitus</b>.',
          },
          {
            f: 'Thyroxine',
            note: 'thyroid hormone, contains <b>iodine</b>, sets metabolic rate; deficiency → <b>hypothyroidism / goitre</b>.',
          },
          { f: 'Adrenaline', note: 'adrenal medulla, “<b>fight-or-flight</b>” (↑ heart rate, ↑ glucose).' },
          { f: 'Hormone vs enzyme vs vitamin', note: 'messenger vs biocatalyst vs dietary factor.' },
        ],
        aids: [
          '“<b>in</b>sulin → glucose <b>in</b>”',
          'classes = “<b>S</b>teroid–<b>P</b>olypeptide–<b>A</b>mine (SPA)”',
          '“thyroxine needs <b>i</b>odine.”',
        ],
      },
    ],
  },
];
