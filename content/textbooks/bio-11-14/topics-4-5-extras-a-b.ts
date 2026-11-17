import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 14, Breathing and Exchange of Gases: Topics 04 and 05 and Additional topics
 * A and B, word for word from the Class 11 Biology Master Reference (pp. 843–861).
 *
 * Topic 04 Regulation of Respiration & Respiratory Disorders, pp. 843–850 (Figure 14.6: caption
 * p. 845, drawing p. 846, set at the end of Key structures, definitions and processes where the
 * book's caption stands). Topic 05 Master Revision: Chapter 14 at a Glance, pp. 851–853, parts =
 * the book's own headings. The shared opening of "Breathing and Exchange of Gases: Additional
 * Topics" (p. 854) heads Additional topic A's Introduction. A Alveolar Ventilation and Dead Space,
 * pp. 854–858 (its answers end at the top of p. 858); B O2–Hb Dissociation: Quantitative Aspects,
 * pp. 858–861 (its answers end on p. 861, where Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), no fraction on one
 * line, formulas upright with real sub/superscripts. This chapter's book prints options (a) to (d),
 * kept as printed. "Subtopic 1 and 2" are Topics 02 and 03, "Addendum A–F" is "Additional topic A–F".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 843–850 ─────────────────────────
  {
    n: '04',
    title: 'Regulation of Respiration & Respiratory Disorders',
    kalam: 'The body does not primarily monitor oxygen to decide when to breathe.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> NEET reliably asks one question on the respiratory centres (which centre sits where, and what CO<sub>2</sub>/H<sup>+</sup> do) and one on disorders: emphysema’s cause and the occupational/fibrosis link are perennial traps, often as assertion–reason (the book’s estimate from past papers, not official figures). CBSE Boards favour a short answer on regulation or on naming a disorder with its cause; CUET tests centre-location and disorder definitions directly.',
      },
      {
        t: 'p',
        html: 'You have never once decided to breathe, and yet you can hold your breath on purpose, speed up before a sprint, or slow down to fall asleep. Breathing is unusual that way: it runs automatically, but it also takes orders. So who is in charge?',
      },
      {
        t: 'p',
        html: 'The answer is a small control room in the <b>brainstem</b>. Think of it like the signal cabin at a busy railway junction. The cabin doesn’t run the trains itself; it sets the rhythm and timing of departures, and it constantly adjusts that timing based on reports coming in from the track. Your breathing has exactly such a cabin in the <b>medulla oblongata</b>, with an assistant in the <b>pons</b> that can fine-tune the timing, chiefly by cutting short the “inhale” signal so breaths don’t run too long.',
      },
      {
        t: 'p',
        html: 'But here is the surprising part: the most important detail students get wrong. <b>The body does not primarily monitor oxygen to decide when to breathe. It watches carbon dioxide.</b> When you hold your breath, the unbearable urge to inhale that builds up is not triggered by falling oxygen; it is triggered by rising carbon dioxide (and the rising acidity it creates). CO<sub>2</sub> is the body’s smoke alarm. The control centre is wired to chemical sensors, both right beside it in the brain and out in the walls of the <b>aorta and carotid arteries</b>, that detect rising CO<sub>2</sub> and H<sup>+</sup> and immediately order faster, deeper breathing to blow the excess CO<sub>2</sub> out.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a kitchen where the exhaust fan switches on not when oxygen runs low, but the moment smoke (CO<sub>2</sub>) starts building up. That is your respiratory control system. It keeps CO<sub>2</sub>, not O<sub>2</sub>, within tight limits, and oxygen looks after itself as a happy side-effect.',
      },
      {
        t: 'p',
        html: 'The second half of this topic is what happens when the lovely machinery of the previous topics breaks. The lungs are open to the outside world with every breath, which makes them uniquely exposed: to allergens, to smoke, to industrial dust. The major disorders each sabotage a different part of the system we have built up: <b>asthma</b> narrows the airways, <b>emphysema</b> destroys the exchange surface itself, and <b>occupational disorders</b> scar the lung from the inside.',
      },
      {
        t: 'p',
        html: 'Before we go further, it helps to step back and see the whole chapter as a single chain. Respiration, properly defined, is a sequence of steps: <b>(1) breathing</b> (pulmonary ventilation: drawing air in and out); <b>(2) diffusion of gases</b> across the alveolar membrane; <b>(3) transport of gases</b> by the blood; <b>(4) diffusion of O<sub>2</sub> and CO<sub>2</sub></b> between blood and tissues; and finally <b>(5) cellular respiration</b>: the actual utilisation of oxygen by cells to release energy. Topics 02 and 03 built steps 1 through 4; regulation (this topic) keeps that chain running at the right pace, and the disorders are simply different links snapping under stress. Holding this five-step map in your head turns a long chapter into one continuous story.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The “CO<sub>2</sub> drives breathing” rule is the normal physiological case. The role of oxygen-sensing becomes important only in unusual situations such as very high altitude or chronic lung disease: edge cases that go beyond the core NCERT treatment. And while we can override the automatic rhythm voluntarily for a while, the rising CO<sub>2</sub> drive normally forces an inhale; after hyperventilation, though, the CO<sub>2</sub> alarm is delayed and oxygen can fall dangerously low before the urge comes. This is also why breathing faster than necessary (hyperventilation) makes you light-headed: you blow off so much CO<sub>2</sub> that blood flow to the brain falls, and the chemical “alarm” goes quiet, so the drive to breathe briefly fades. The system is built around keeping CO<sub>2</sub> in a narrow band, and it defends that band hard in both directions.',
      },

      { t: 'part', title: 'Key structures, definitions and processes' },
      { t: 'p', html: '<b>The control centres</b>' },
      {
        t: 'def',
        term: 'Respiratory rhythm centre',
        html: 'located in the <b>medulla oblongata</b>; the primary centre responsible for generating and maintaining the normal rhythm of breathing.',
      },
      {
        t: 'def',
        term: 'Pneumotaxic centre',
        html: 'located in the <b>pons</b> region of the brain; can moderate the rhythm centre, mainly by <b>reducing the duration of inspiration</b> (the “switch-off point of inspiration”), thereby altering the respiratory rate.',
      },
      {
        t: 'def',
        term: 'Chemosensitive area',
        html: 'situated adjacent to the rhythm centre; highly sensitive to <b>CO<sub>2</sub> and H<sup>+</sup> ions</b>. A rise in these signals the rhythm centre to increase breathing so the excess CO<sub>2</sub> is eliminated.',
      },
      {
        t: 'def',
        term: 'Peripheral chemoreceptors',
        html: 'located in the <b>aortic arch</b> and <b>carotid arteries</b>; they detect changes in CO<sub>2</sub> and H<sup>+</sup> concentration and send signals to the rhythm centre for corrective action.',
      },
      {
        t: 'p',
        html: 'Oxygen, by contrast, plays only a <b>minor role</b> in the normal moment-to-moment regulation of breathing.',
      },
      { t: 'p', html: '<b>The major respiratory disorders (core NCERT)</b>' },
      {
        t: 'def',
        term: 'Asthma',
        html: 'difficulty in breathing causing <b>wheezing</b>, due to <b>inflammation of the bronchi and bronchioles</b>. It is often an <b>allergic</b> condition (an over-reaction of mast cells in the airways to allergens such as dust or pollen).',
      },
      {
        t: 'def',
        term: 'Emphysema',
        html: 'a <b>chronic disorder in which the alveolar walls are damaged</b>, so the <b>respiratory surface area available for gas exchange is drastically reduced</b>. Its <b>major cause is cigarette smoking</b>. It is one of the chronic obstructive pulmonary diseases (COPD) and is largely irreversible.',
      },
      {
        t: 'def',
        term: 'Occupational respiratory disorders',
        html: 'arise from <b>long-term exposure to dust</b> in certain industries (e.g., grinding and stone-breaking work). The body’s defence response causes <b>proliferation of fibrous tissue (lung fibrosis)</b>, damaging the lung. Examples include <b>silicosis</b> (from silica dust) and <b>asbestosis</b> (from asbestos dust).',
      },
      {
        t: 'p',
        html: '<b>NEET-enrichment (beyond the core three):</b> bronchitis: inflammation of the bronchi; pneumonia: alveolar spaces filled with fluid and dead white blood cells. Two further conditions that act outside the lungs (carbon monoxide poisoning and high-altitude oxygen lack) are treated as mechanisms in the Mechanisms and regulatory pathways part.',
      },
      { t: 'fig', id: 'b11-14-fig-14.6' },

      { t: 'part', title: 'Mechanisms and regulatory pathways' },
      {
        t: 'proc',
        title: 'How CO2 tunes your breathing: step by step',
        steps: [
          'During activity, tissues produce more CO<sub>2</sub>, which enters the blood and, via carbonic anhydrase, raises blood <b>H<sup>+</sup></b> (lowers pH).',
          'This rising CO<sub>2</sub>/H<sup>+</sup> is detected by the <b>chemosensitive area</b> beside the rhythm centre, and by the <b>peripheral chemoreceptors</b> in the aortic arch and carotid arteries.',
          'These sensors signal the <b>respiratory rhythm centre</b> in the medulla.',
          'The rhythm centre responds by <b>increasing the rate and depth of breathing</b>, so more CO<sub>2</sub> is exhaled and blood CO<sub>2</sub>/H<sup>+</sup> return to normal.',
          'The <b>pneumotaxic centre</b> in the pons fine-tunes this output, trimming the length of each inspiration to keep the rhythm appropriate.',
        ],
      },
      {
        t: 'p',
        html: 'The logic is a self-correcting loop: more CO<sub>2</sub> → faster breathing → CO<sub>2</sub> blown off → CO<sub>2</sub> falls back to normal. Oxygen is barely consulted because, under ordinary conditions, keeping CO<sub>2</sub> in check automatically keeps oxygen adequate.',
      },
      {
        t: 'p',
        html: '<b>Why the venous oxygen “reserve” matters here</b><br><br>Recall that at rest only about <b>5 mL of O<sub>2</sub></b> is unloaded from every 100 mL of oxygenated blood (which carries roughly 20 mL), leaving the bulk to return to the lungs. During strenuous exercise this same blood can deliver around <b>15 mL per 100 mL</b>, three times more, because tissue <i>p</i>O<sub>2</sub> falls lower and the right-shifted dissociation curve releases more, while the faster, deeper breathing driven by the CO<sub>2</sub> loop keeps the arterial blood fully loaded. Regulation and transport thus work as one system: the control centre raises ventilation while the tissues simultaneously extract more from each unit of blood.',
      },
      {
        t: 'p',
        html: '<b>How each disorder breaks the system</b><br>• <b>Asthma</b> attacks the <b>conducting airways</b>: allergic inflammation narrows the bronchi and bronchioles, so air struggles in and out, hence the wheeze. The exchange surface is intact; the problem is getting air to it. Crucially, asthma is <b>episodic and reversible</b>: the airways narrow during recurring attacks (often triggered by an allergen) and re-open between them, which is exactly why it differs in management from the permanent damage of emphysema.<br>• <b>Emphysema</b> attacks the <b>exchange surface itself</b>: smoking-driven destruction of alveolar walls merges many small alveoli into fewer large ones, collapsing the huge surface area that diffusion depends on. The airways are not the main problem here; the loss is of membrane to exchange across.<br>• <b>Occupational fibrosis</b> attacks the <b>diffusion membrane’s thickness</b>: inhaled dust provokes fibrous scarring that thickens and stiffens the lung, lengthening the diffusion path and reducing compliance. The cruel irony is that the fibrous tissue is itself a defensive response: the body walls off the irritant dust, but in doing so it permanently scars the very surface it was trying to protect.',
      },
      {
        t: 'p',
        html: 'Mapping each disease onto what the previous topic said controls diffusion (the pressure gradient, the thickness of the membrane and the surface area) is the cleanest way to remember them.',
      },
      {
        t: 'p',
        html: '<b>Coping with thin air: the high-altitude response</b><br><br>As you climb a mountain, the <b>composition</b> of air stays the same as at sea level, but the air grows <b>less dense</b>, so the <b>partial pressure of oxygen falls</b>. With a lower alveolar <i>p</i>O<sub>2</sub>, less oxygen diffuses from the alveoli into the blood, and oxygenation drops. A person newly arrived at altitude may therefore feel breathless, dizzy and fatigued. Over days, the body <b>acclimatises</b>: one key adaptation is an <b>increase in the number of red blood cells</b> per unit volume of blood, raising the total oxygen-carrying capacity to partly offset the thin air. This is why newcomers acclimatising to altitude, and Andean highlanders, have more RBCs per unit of blood than lowlanders: a slow, grounded compensation for a low-<i>p</i>O<sub>2</sub> environment rather than a quick reflex.',
      },
      {
        t: 'p',
        html: '<b>When transport is poisoned: carbon monoxide</b><br><br>Some disorders strike not the lungs but the carrier. <b>Carbon monoxide (CO)</b>, found in polluted or smoky air, binds haemoglobin with roughly <b>200–250 times the affinity of oxygen</b>, forming a stable compound called <b>carboxyhaemoglobin (COHb)</b>. Because the binding is so tenacious, even small amounts of CO lock up haemoglobin and shut oxygen out of its seats, so the blood may be fully ventilated and the lungs perfectly healthy, yet the tissues starve. An unusually high carboxyhaemoglobin reading in a blood test is the classic signature of CO exposure. It is a useful reminder that “breathing” can fail at any link in the chain: ventilation, exchange, or transport.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Naming centres.</b> Name the centre that primarily regulates respiration and the centre that can reduce the duration of inspiration. State the location of each.',
        steps: [
          '<b>Reasoning & answer:</b> The primary centre is the <b>respiratory rhythm centre</b>, located in the <b>medulla oblongata</b>. The centre that can reduce the duration of inspiration is the <b>pneumotaxic centre</b>, located in the <b>pons</b>. A complete board answer pairs each centre explicitly with its brain region.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Disorder identification.</b> Identify the disorder in which the walls of the alveoli are damaged, drastically reducing the surface area for gas exchange, and state its major cause.',
        steps: [
          '<b>Reasoning & answer:</b> This is <b>emphysema</b>. Damage to the alveolar walls reduces the respiratory surface area, impairing gas exchange. Its <b>major cause is cigarette smoking</b>. (Contrast with asthma, where the airways, not the alveolar walls, are the problem.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>What drives the urge to breathe?</b> When a person holds their breath, the primary stimulus that ultimately forces them to breathe again is: <b>(a)</b> falling O<sub>2</sub> in blood <b>(b)</b> rising CO<sub>2</sub> in blood <b>(c)</b> falling CO<sub>2</sub> in blood <b>(d)</b> rising O<sub>2</sub> in blood',
        steps: [
          '<b>The trap:</b> intuition screams “oxygen!” and students pick <b>(a)</b>. The shortcut: the body’s breathing control is built around <b>CO<sub>2</sub></b>, not O<sub>2</sub>. Rising CO<sub>2</sub> (and the H<sup>+</sup> it generates) stimulates the chemosensitive area and peripheral receptors → answer <b>(b)</b>. <b>(c)</b> and <b>(d)</b> describe the opposite, breathing-suppressing directions, and <b>(a)</b> is the headline distractor that catches most students.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · Assertion–Reason',
        q: 'Assertion (A): Workers in grinding and stone-breaking industries are prone to a serious lung condition. Reason (R): Prolonged inhalation of dust provokes proliferation of fibrous tissue in the lungs. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer:</b> A is true: such workers are exposed to heavy dust and develop occupational disorders like silicosis/asbestosis. R is true and is the actual mechanism: the body’s defensive response to chronic dust is fibrous-tissue proliferation (fibrosis), which scars and stiffens the lung. R therefore <b>correctly explains</b> A → <b>(a)</b>. A student who knows the occupational link but not the fibrosis mechanism is tempted by <b>(b)</b>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Where is the respiratory rhythm centre located, and what is its primary function?',
            a: 'Medulla oblongata; it generates and maintains the normal rhythm of breathing.',
          },
          {
            q: '[CUET] Name the brain region containing the pneumotaxic centre and state its effect on inspiration.',
            a: 'Pons; it reduces the duration of inspiration (“switch-off point”), altering respiratory rate.',
          },
          {
            q: '[NEET] Which two chemical species, detected by the chemosensitive area and peripheral receptors, primarily regulate the rate of breathing?',
            a: 'Carbon dioxide (CO<sub>2</sub>) and hydrogen ions (H<sup>+</sup>).',
          },
          {
            q: '[NEET] Name the respiratory disorder characterised by inflammation of the bronchi and bronchioles with wheezing, and state its usual underlying cause.',
            a: 'Asthma; commonly an allergic reaction (mast-cell mediated) to allergens.',
          },
          {
            q: '[NEET A-R] Assertion: Oxygen plays only a minor role in the normal regulation of breathing. Reason: The respiratory centres respond chiefly to changes in CO<sub>2</sub> and H<sup>+</sup> concentration. Decide whether R correctly explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'Both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The controlling centre of normal breathing in mammals lies in the:',
        opts: [
          { label: 'cerebrum', nudge: '<b>(a)</b> handles higher cognition.' },
          { label: 'cerebellum', nudge: '<b>(b)</b> balance and coordination.' },
          { label: 'midbrain', nudge: '<b>(c)</b> is not the breathing centre.' },
          { label: 'medulla oblongata', nudge: null },
        ],
        correct: 3,
        solution: 'The respiratory rhythm centre sits in the medulla oblongata. Options <b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all classic “name a brain part” distractors.',
      },
      {
        t: 'mcq',
        q: 'Receptors in the aortic arch and carotid arteries primarily detect changes in:',
        opts: [
          { label: 'O<sub>2</sub> and temperature', nudge: '<b>(a)</b> and <b>(d)</b> bring in temperature and glucose, which these receptors do not track.' },
          { label: 'CO<sub>2</sub> and H<sup>+</sup>', nudge: null },
          { label: 'O<sub>2</sub> only', nudge: '<b>(c)</b> is too narrow: these receptors can also sense a fall in O<sub>2</sub> (it matters at high altitude), but in normal breathing they respond to CO<sub>2</sub> and H<sup>+</sup>.' },
          { label: 'glucose and H<sup>+</sup>', nudge: '<b>(a)</b> and <b>(d)</b> bring in temperature and glucose, which these receptors do not track.' },
        ],
        correct: 1,
        solution: 'These peripheral chemoreceptors sense CO<sub>2</sub> and H<sup>+</sup> and signal the rhythm centre. The system tracks CO<sub>2</sub>/H<sup>+</sup>.',
      },
      {
        t: 'mcq',
        q: 'Emphysema is most directly caused by:',
        opts: [
          { label: 'allergy', nudge: '<b>(a)</b> points to asthma.' },
          { label: 'bacterial infection', nudge: '<b>(b)</b> points to infections like pneumonia/bronchitis.' },
          { label: 'cigarette smoking', nudge: null },
          { label: 'silica dust', nudge: '<b>(d)</b> points to silicosis.' },
        ],
        correct: 2,
        solution: 'Smoking is the major cause of emphysema. Each of the other options is a different disorder, making them tempting near-misses.',
      },
      {
        t: 'mcq',
        q: 'Of these options, which disorder reduces the gas-exchange surface area by damaging the alveolar walls?',
        opts: [
          { label: 'Asthma', nudge: '<b>(a)</b> and <b>(b)</b> affect the airways (bronchi/bronchioles), not the alveolar walls.' },
          { label: 'Bronchitis', nudge: '<b>(a)</b> and <b>(b)</b> affect the airways (bronchi/bronchioles), not the alveolar walls.' },
          { label: 'Emphysema', nudge: null },
          { label: 'Rhinitis', nudge: '<b>(d)</b> affects the nasal lining.' },
        ],
        correct: 2,
        solution: 'Of these options only emphysema destroys alveolar walls, slashing surface area. Students who blur “airway disease” with “alveolar disease” slip to <b>(a)</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking low oxygen drives breathing.</b> It is rising <b>CO<sub>2</sub></b> (and H<sup>+</sup>) that the body monitors and responds to; oxygen’s role is minor under normal conditions.',
          '<b>Putting the rhythm centre in the wrong place.</b> Rhythm centre → <b>medulla</b>; pneumotaxic centre → <b>pons</b>.',
          '<b>Confusing asthma with emphysema.</b> Asthma = airway (bronchi/bronchiole) inflammation, often allergic, wheezing; emphysema = alveolar-wall destruction, smoking-caused, reduced surface area. Different sites, different causes.',
          '<b>Forgetting the occupational–fibrosis link.</b> Industrial dust → fibrous-tissue proliferation → fibrosis. The cause is mechanical dust exposure, not infection or allergy.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For the centres, remember <b>“M before P”</b>: the <b>M</b>edulla sets the rhythm first, the <b>P</b>ons (pneumotaxic) only <b>p</b>ares down inspiration afterwards. For disorders, map each to the diffusion machinery: asthma blocks the airway, emphysema destroys the surface, fibrosis thickens the membrane. Three diseases, three different sabotage points.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Rhythm centre</b> → <b>medulla oblongata</b> (primary). <b>Pneumotaxic centre</b> → <b>pons</b> (reduces inspiration duration).', note: '' },
          { f: '<b>Chemosensitive area</b> (beside rhythm centre) + <b>aortic/carotid chemoreceptors</b> sense <b>CO<sub>2</sub> & H<sup>+</sup></b> → adjust breathing. <b>O<sub>2</sub> role = minor.</b>', note: '' },
          { f: '<b>Urge to breathe = rising CO<sub>2</sub></b>, not falling O<sub>2</sub>.', note: '' },
          { f: '<b>Asthma:</b> airway (bronchi/bronchiole) inflammation; often allergic; wheezing.', note: '' },
          { f: '<b>Emphysema:</b> alveolar walls damaged → exchange surface ↓↓; cause = <b>cigarette smoking</b>; COPD, irreversible.', note: '' },
          { f: '<b>Occupational disorders:</b> dust exposure (grinding/stone work) → fibrous-tissue proliferation → <b>lung fibrosis</b> (silicosis = silica, asbestosis = asbestos).', note: '' },
          { f: '<b>Enrichment:</b> bronchitis (bronchial inflammation); pneumonia (alveoli filled with fluid + dead WBCs); CO poisoning (carboxyhaemoglobin, ~200–250× Hb affinity); high altitude (low <i>p</i>O<sub>2</sub> → ↑ RBC count).', note: '' },
        ],
        aids: [
          '<b>Mnemonics:</b> <b>“M before P”</b> (Medulla rhythm, Pons pares inspiration); <b>“CO<sub>2</sub> is the alarm, not O<sub>2</sub>.”</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 851–853 ─────────────────────────
  {
    n: '05',
    title: 'Master Revision: Chapter 14 at a Glance',
    kalam: 'If you can reproduce the tables and definitions below from memory, you have mastered Breathing and Exchange of Gases.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Everything in this chapter, on one revision sheet. If you can reproduce the tables and definitions below from memory, you have mastered Breathing and Exchange of Gases.',
      },

      { t: 'part', title: 'The five steps of respiration (the spine of the chapter)' },
      {
        t: 'p',
        html: '1. <b>Breathing / pulmonary ventilation</b>: air in and out of the lungs.<br>2. <b>Diffusion at the alveoli</b>: O<sub>2</sub> into blood, CO<sub>2</sub> out of blood.<br>3. <b>Transport by blood</b>: O<sub>2</sub> to tissues, CO<sub>2</sub> to lungs.<br>4. <b>Diffusion at the tissues</b>: O<sub>2</sub> to cells, CO<sub>2</sub> into blood.<br>5. <b>Cellular respiration</b>: cells use O<sub>2</sub>, release CO<sub>2</sub> (cellular respiration itself, taught in the earlier chapter on respiration in plants).',
      },

      { t: 'part', title: 'The airway, in order' },
      {
        t: 'p',
        html: 'External nostrils → nasal chamber → pharynx → larynx (voice box; <b>epiglottis</b> guards the <b>glottis</b>) → trachea (<b>C-shaped cartilage rings</b>) → primary bronchi → bronchioles → <b>terminal bronchioles (end of the conducting zone)</b> → <b>alveoli (gas exchange)</b>. Lungs are covered by a <b>double-layered pleura</b> with <b>pleural fluid</b>; the thoracic chamber is bounded by the <b>vertebral column</b> (back), <b>sternum</b> (front), <b>ribs</b> (sides) and <b>diaphragm</b> (below).',
      },

      { t: 'part', title: 'Master numbers: respiratory volumes and capacities' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'Definition', 'Approx. value'],
        rows: [
          ['Tidal Volume', 'TV', 'air per normal breath', '500 mL'],
          ['Inspiratory Reserve Volume', 'IRV', 'extra air forcibly inhaled', '2500–3000 mL'],
          ['Expiratory Reserve Volume', 'ERV', 'extra air forcibly exhaled', '1000–1100 mL'],
          ['Residual Volume', 'RV', 'air always left in lungs', '1100–1200 mL'],
          ['Inspiratory Capacity', 'IC', 'TV + IRV', '≈ 3000–3500 mL'],
          ['Expiratory Capacity', 'EC', 'TV + ERV', '≈ 1500–1600 mL'],
          ['Functional Residual Capacity', 'FRC', 'ERV + RV', '≈ 2100–2300 mL'],
          ['Vital Capacity', 'VC', 'ERV + TV + IRV', '≈ 4000–4600 mL'],
          ['Total Lung Capacity', 'TLC', 'RV + ERV + TV + IRV (= VC + RV)', '≈ 5100–5800 mL'],
        ],
      },
      {
        t: 'p',
        html: 'A <b>spirometer</b> measures volumes but <b>cannot</b> measure RV (and hence not FRC or TLC).',
      },

      { t: 'part', title: 'Master numbers: partial pressures (mmHg)' },
      {
        t: 'table',
        title: null,
        head: ['Site', '<i>p</i>O<sub>2</sub>', '<i>p</i>CO<sub>2</sub>'],
        rows: [
          ['Atmospheric air', '159', '0.3'],
          ['Alveoli', '104', '40'],
          ['Deoxygenated blood / tissues', '40', '45'],
          ['Oxygenated blood', '95', '40'],
        ],
      },
      {
        t: 'p',
        html: 'Gas always diffuses <b>high → low</b> partial pressure. Diffusion rate depends on <b>gradient × solubility ÷ membrane thickness</b> (surface area also matters); CO<sub>2</sub> is ≈ 20–25× more soluble than O<sub>2</sub>.',
      },

      { t: 'part', title: 'Master numbers: transport of gases' },
      {
        t: 'table',
        title: null,
        head: ['', 'Oxygen', 'Carbon dioxide'],
        rows: [
          ['Bound to haemoglobin', '≈ 97% (oxyhaemoglobin, 4 O<sub>2</sub>/Hb)', '≈ 20–25% (carbaminohaemoglobin)'],
          ['As bicarbonate', '–', '≈ 70%'],
          ['Dissolved in plasma', '≈ 3%', '≈ 7%'],
          ['Delivered per 100 mL blood', '≈ 5 mL O<sub>2</sub> to tissues', '≈ 4 mL CO<sub>2</sub> to alveoli'],
          ['Key enzyme', '–', '<b>carbonic anhydrase</b> (in RBC)'],
        ],
      },
      {
        t: 'p',
        html: 'The diffusion membrane has <b>three layers</b>: alveolar squamous epithelium + capillary endothelium + basement substance.',
      },

      { t: 'part', title: 'Oxygen–haemoglobin dissociation curve' },
      {
        t: 'p',
        html: 'Sigmoid (S-shaped). <b>Right shift = unload at tissues</b>, caused by <b>high <i>p</i>CO<sub>2</sub>, low pH, high temperature</b>: the <b>Bohr effect</b> (the fall in <i>p</i>O<sub>2</sub> moves Hb down the curve; the right shift comes from the extra CO<sub>2</sub>, acid and heat). <b>Left shift = load at lungs</b> (opposite conditions).',
      },

      { t: 'part', title: 'Regulation of respiration' },
      {
        t: 'p',
        html: '• <b>Respiratory rhythm centre</b> in the <b>medulla oblongata</b> (primary control).<br>• <b>Pneumotaxic centre</b> in the <b>pons</b>; can reduce the duration of inspiration and alter breathing rate.<br>• <b>Chemosensitive area</b> adjacent to the rhythm centre; highly sensitive to <b>CO<sub>2</sub> and H<sup>+</sup></b>, and raises ventilation to expel CO<sub>2</sub>.<br>• <b>Aortic-arch and carotid-body receptors</b> sense CO<sub>2</sub> and H<sup>+</sup> and signal the rhythm centre.<br>• <b>CO<sub>2</sub> (and H<sup>+</sup>), not O<sub>2</sub>, is the main driver</b> of breathing rate; the role of O<sub>2</sub> in regulation is minor.',
      },

      { t: 'part', title: 'Disorders of the respiratory system' },
      {
        t: 'p',
        html: '• <b>Asthma</b>: difficulty breathing with <b>wheezing</b>, due to inflammation of the bronchi and bronchioles (often allergic).<br>• <b>Emphysema</b>: alveolar walls are damaged, <b>drastically reducing the exchange surface</b>; the major cause is <b>cigarette smoking</b>.<br>• <b>Occupational respiratory disorders</b>: long exposure to industrial dust (grinding, stone-breaking) causes <b>fibrosis</b> of the lungs; protective masks are essential. (Examples: silicosis from silica dust, asbestosis from asbestos dust.)',
      },

      { t: 'part', title: 'High-yield exam traps (consolidated)' },
      {
        t: 'p',
        html: '• Inspiration is <b>active</b>; quiet expiration is <b>passive</b>.<br>• The lungs have <b>no skeletal muscle</b> to expand them, not one: air is moved by pressure gradients, never “sucked.”<br>• A <b>capacity</b> is always a <b>sum of volumes</b>; RV-containing capacities (FRC, TLC) can’t be read by a spirometer.<br>• CO<sub>2</sub> is mostly carried as <b>bicarbonate (≈ 70%)</b>, not as carbaminohaemoglobin: beware the flipped option.<br>• CO<sub>2</sub> exchanges efficiently despite a small gradient because of its <b>high solubility</b>.<br>• The breathing drive responds to <b>CO<sub>2</sub>/H<sup>+</sup></b>, not primarily to falling O<sub>2</sub>.<br>• <b>Breathing ≠ cellular respiration</b>: Chapter 14 covers steps 1–4, not step 5.',
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 854–858 ─────────────────────────
  {
    n: 'A',
    title: 'Alveolar Ventilation and Dead Space',
    extra: true,
    kalam: 'Alveolar ventilation is the number that actually matters.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the five-step framework, the pressure-gradient logic, the partial-pressure table, the O<sub>2</sub>–Hb dissociation curve, the respiratory centres, and the three core disorders. Six NEET-pattern tools are still standing outside the door, and each one is either a numerical method the chapter shows qualitatively or a concept it touches only briefly or leaves out. Additional topic A marries the volume definitions of Topic 02 to the first quantitative skill you need: alveolar ventilation and dead-space calculations. Additional topic B takes the Bohr effect description of Topic 03 and turns it into an actual number: how much extra oxygen unloads when <i>p</i>CO<sub>2</sub> rises. Additional topic C deepens Topic 03’s bicarbonate machinery with the Haldane effect and the chloride shift, both of which can be asked by name. Additional topic D opens the ventilation–perfusion relationship, which the chapter does not mention, and the diffusion-capacity concept that puts a number on the chapter’s diffusion factors. Additional topic E explains why surfactant matters and why premature babies cannot breathe: the compliance side the chapter mentions only in passing. Additional topic F maps respiratory adaptations in different environments: high altitude (met in Topic 04), diving mammals and birds.',
      },
      {
        t: 'p',
        html: 'Numbering continues from the chapter. Every method below applies the same pressure-gradient and carrier-molecule logic the chapter already established, one step into the calculable or comparative territory that NEET and Board questions can reach.',
      },
      {
        t: 'p',
        html: 'The chapter defines tidal volume (TV about 500 mL). A resting adult breathes about 12–16 times a minute, a figure used in the examples below. Neither figure alone tells you how much fresh air actually reaches the alveoli each minute. The missing link is the <b>anatomical dead space</b>: the volume of the conducting airways (nose to terminal bronchioles) that is filled with air but takes no part in exchange. Every breath wastes exactly this volume as “used” air that simply cycles through the plumbing without contacting blood. Alveolar ventilation is the number that actually matters.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Anatomical dead space.</b> For an adult human the anatomical dead space is approximately 150 mL. This is NCERT-consistent: it equals the volume of the conducting zone that the chapter defines but does not quantify.',
      },
      {
        t: 'p',
        html: '<b>Alveolar ventilation rate (AVR).</b> If you breathe at rate <i>f</i> (breaths/min) with tidal volume <i>V</i><sub>T</sub> and anatomical dead space <i>V</i><sub>D</sub>:<br>AVR = <i>f</i> × (<i>V</i><sub>T</sub> − <i>V</i><sub>D</sub>)<br>This is the volume of fresh air reaching the alveoli per minute, the physiologically useful ventilation.',
      },
      {
        t: 'p',
        html: '<b>Minute ventilation.</b> The total air moved per minute (ignoring dead space):<br>Minute ventilation = <i>f</i> × <i>V</i><sub>T</sub><br>Typical values: 12 breaths/min × 500 mL = 6000 mL/min.',
      },
      {
        t: 'p',
        html: '<b>Effective alveolar ventilation.</b> With <i>V</i><sub>D</sub> = 150 mL and <i>V</i><sub>T</sub> = 500 mL:<br>AVR = 12 × (500 − 150) = 12 × 350 = 4200 mL/min<br>Only 4200 mL of the 6000 mL/min breathed actually participates in gas exchange.',
      },
      {
        t: 'p',
        html: '<b>Rapid shallow breathing trap.</b> If the respiratory rate rises but the tidal volume falls enough (for example the rate doubles while <i>V</i><sub>T</sub> falls from 500 mL to 300 mL), alveolar ventilation can actually decrease. Because the dead space is fixed, a deeper breath raises alveolar ventilation more efficiently than a faster one. This is why a patient with airway obstruction (asthma) may breathe fast and shallow and so ventilate their alveoli poorly: the shallow breaths waste most of each breath on dead space.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>f</i> in breaths/min, <i>V</i><sub>T</sub> and <i>V</i><sub>D</sub> in mL/breath. AVR has units mL/min. Correct.',
      },

      { t: 'part', title: 'Standard shortcuts' },
      {
        t: 'table',
        title: null,
        head: ['Situation', '<i>V</i><sub>T</sub>', '<i>f</i>', 'AVR (mL/min)'],
        rows: [
          ['Rest (quiet breathing)', '500 mL', '12', '4200'],
          ['Moderate exercise', '800 mL', '20', '13 000'],
          ['Deep slow breathing', '1000 mL', '8', '6800'],
          ['Rapid shallow (asthma)', '300 mL', '24', '3600'],
        ],
      },
      {
        t: 'p',
        html: '• Dead space <i>V</i><sub>D</sub> = 150 mL throughout (fixed by anatomy).<br>• Exercise increases both depth and rate, giving the largest AVR.<br>• Rapid shallow breathing is the worst strategy: <i>f</i> doubles but <i>V</i><sub>T</sub> falls from 500 to 300 mL, so AVR drops from 4200 to 3600 mL/min.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Alveolar Ventilation Calculation.</b> A person breathes at 15 breaths per minute with a tidal volume of 600 mL. Calculate (a) the minute ventilation, (b) the alveolar ventilation rate given anatomical dead space of 150 mL, and (c) how alveolar ventilation changes if the person switches to rapid shallow breathing at 30 breaths/min with tidal volume 300 mL.',
        steps: [
          '<b>Step 1: Minute ventilation.</b><br>Minute ventilation = <i>f</i> × <i>V</i><sub>T</sub> = 15 × 600 = 9000 mL/min = 9 L/min',
          '<b>Step 2: Alveolar ventilation rate.</b><br>AVR = <i>f</i> × (<i>V</i><sub>T</sub> − <i>V</i><sub>D</sub>) = 15 × (600 − 150) = 15 × 450 = 6750 mL/min = 6.75 L/min',
          '<b>Step 3: Rapid shallow breathing.</b><br>AVR<sub>shallow</sub> = 30 × (300 − 150) = 30 × 150 = 4500 mL/min = 4.5 L/min',
        ],
        ans: 'Switching to rapid shallow breathing cuts alveolar ventilation from 6.75 L/min to 4.5 L/min: a 33% reduction despite doubling the respiratory rate. This is why patients with obstructed airways who try to “compensate” by breathing faster actually worsen their effective ventilation.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Finding Dead Space from CO<sub>2</sub>.</b> A person exhales 210 mL of CO<sub>2</sub> per minute. Alveolar air contains about 5% CO<sub>2</sub> by volume (0.05 mL CO<sub>2</sub> per mL of alveolar air; this corresponds to an alveolar <i>p</i>CO<sub>2</sub> of about 40 mmHg). Calculate the alveolar ventilation rate. Hence find the anatomical dead space if total ventilation is 6000 mL/min at 12 breaths/min.',
        steps: [
          '<b>Step 1: Alveolar ventilation from CO<sub>2</sub> output.</b> All the CO<sub>2</sub> leaving the body comes out of alveolar air, so:<br>CO<sub>2</sub> removed = AVR × alveolar CO<sub>2</sub> fraction<br>AVR = <frac><num>210 mL/min</num><den>0.05</den></frac> = 4200 mL/min = 4.2 L/min',
          '<b>Step 2: Find anatomical dead space.</b> Total ventilation = 6000 mL/min = <i>f</i> × <i>V</i><sub>T</sub>. With <i>f</i> = 12 breaths/min:<br><i>V</i><sub>T</sub> = <frac><num>6000</num><den>12</den></frac> = 500 mL<br>AVR = <i>f</i> × (<i>V</i><sub>T</sub> − <i>V</i><sub>D</sub>)<br>4200 = 12 × (500 − <i>V</i><sub>D</sub>)<br>350 = 500 − <i>V</i><sub>D</sub><br><i>V</i><sub>D</sub> = 150 mL',
          '<b>Check.</b> Anatomical dead space ≈ 150 mL: the standard value. Clinically, this use of CO<sub>2</sub> clearance to estimate dead space is the Bohr method (Bohr’s dead-space method, not the Bohr effect of the dissociation curve); strictly it gives the physiological dead space, which is close to the anatomical dead space in a healthy lung.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Exercise Hyperventilation.</b> During heavy exercise, a person increases minute ventilation from 6 L/min to 90 L/min. Assuming anatomical dead space remains 150 mL and tidal volume rises to three times its resting value (resting tidal volume 500 mL), calculate the new alveolar ventilation rate and state how it compares to rest.',
        steps: [
          '<b>Step 1: Find original respiratory rate.</b> Original: <i>f</i><sub>1</sub> × 500 = 6000 mL/min → <i>f</i><sub>1</sub> = 12 breaths/min.',
          '<b>Step 2: New tidal volume and respiratory rate.</b> New minute ventilation = 90 L/min = 90 000 mL/min.<br><frac><num><i>V</i><sub>T2</sub></num><den><i>V</i><sub>T1</sub></den></frac> = 3 (given)',
          'So <i>V</i><sub>T2</sub> = 3 × 500 = 1500 mL. Since <i>f</i> × <i>V</i><sub>T</sub> = 90 000 and <i>V</i><sub>T</sub> = 1500:<br><i>f</i><sub>2</sub> = <frac><num>90 000</num><den>1500</den></frac> = 60 breaths/min',
          '<b>Step 3: New alveolar ventilation.</b><br>AVR<sub>2</sub> = 60 × (1500 − 150) = 60 × 1350 = 81 000 mL/min = 81 L/min',
          'Original AVR: 12 × (500 − 150) = 4200 mL/min = 4.2 L/min.',
        ],
        ans: 'Alveolar ventilation increases 19-fold (from 4.2 to 81 L/min), far exceeding the 15-fold increase in minute ventilation. The extra depth of each breath (1500 mL vs 500 mL) means proportionally more fresh air reaches the alveoli: this is why deep exercise breaths are more effective than simply breathing faster.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate alveolar ventilation for a person with tidal volume 600 mL, respiratory rate 10 breaths/min, and anatomical dead space 150 mL.',
            a: 'AVR = 10 × (600 − 150) = 4500 mL/min = 4.5 L/min.',
          },
          {
            q: '[NEET] A patient with asthma breathes at 30 breaths/min with tidal volume 250 mL (anatomical dead space 150 mL). Calculate alveolar ventilation and comment on whether this is adequate compared to normal (AVR ≈ 4200 mL/min).',
            a: 'AVR = 30 × (250 − 150) = 30 × 100 = 3000 mL/min. This is well below the normal 4200 mL/min: inadequate ventilation despite the high respiratory rate. The patient is breathing rapidly but shallowly, wasting most of each breath on dead space.',
          },
          {
            q: '[CBSE] If minute ventilation is 7200 mL/min and respiratory rate is 12 breaths/min, calculate tidal volume and anatomical dead space given that alveolar ventilation is 5400 mL/min.',
            a: '<i>V</i><sub>T</sub> = <frac><num>7200</num><den>12</den></frac> = 600 mL. 5400 = 12 × (600 − <i>V</i><sub>D</sub>) ⇒ 600 − <i>V</i><sub>D</sub> = 450 ⇒ <i>V</i><sub>D</sub> = 150 mL. Anatomical dead space = 150 mL.',
          },
          {
            q: '[NEET] State two ways to increase alveolar ventilation and explain which is more effective for a patient with restricted airflow.',
            a: 'Increase tidal volume (deep breathing) or increase respiratory rate. For restricted airflow, increasing tidal volume is more effective because the fixed dead space (about 150 mL) is then a smaller share of each breath, so more of every breath reaches the alveoli. Increasing rate alone risks rapid shallow breathing, which reduces AVR.',
          },
          {
            q: '[CUET] What is physiological dead space? How does it differ from anatomical dead space, and why is the distinction clinically important?',
            a: 'Physiological dead space = anatomical dead space + alveolar dead space (alveoli that are ventilated but not perfused with blood). Anatomical dead space is fixed (~150 mL); physiological dead space varies with lung perfusion. In healthy lungs they are almost equal (the alveolar dead space is very small). In lung disease with V/Q mismatch (e.g., pulmonary embolism), physiological dead space exceeds anatomical dead space, reducing effective gas exchange.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 858–861 ─────────────────────────
  {
    n: 'B',
    title: 'O2–Hb Dissociation: Quantitative Aspects',
    extra: true,
    kalam: 'Each gram of haemoglobin binds approximately 1.34–1.39 mL of O2 when fully saturated.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the qualitative Bohr effect: high <i>p</i>CO<sub>2</sub>, low pH, and high temperature shift the curve right and unload oxygen at the tissues. It gives the headline figures (about 20 mL carried and about 5 mL delivered per 100 mL of blood) but not how they follow from [Hb], saturation and 1.34 mL/g, nor how much extra oxygen the Bohr shift alone releases. This additional topic supplies those numbers and the calculation method used in higher-difficulty items.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Oxygen-carrying capacity of haemoglobin.</b> Each gram of haemoglobin binds approximately 1.34–1.39 mL of O<sub>2</sub> when fully saturated. The value 1.34 mL/g is the commonly used standard. (NCERT itself gives only the figure of about 5 mL of O<sub>2</sub> delivered to the tissues by every 100 mL of oxygenated blood.)',
      },
      {
        t: 'p',
        html: 'O<sub>2</sub> content = [Hb] × 1.34 × <frac><num>Saturation</num><den>100</den></frac> mL O<sub>2</sub>/100 mL blood; the oxygen capacity is the value at 100% saturation.',
      },
      {
        t: 'p',
        html: 'For a typical adult with [Hb] = 14–15 g/dL:<br>15 g/dL × 1.34 mL/g = 20.1 mL O<sub>2</sub>/100 mL blood',
      },
      {
        t: 'p',
        html: 'At 95% saturation (normal arterial blood leaving lungs):<br>Arterial O<sub>2</sub> content = 15 × 1.34 × 0.95 ≈ 19.1 mL/dL',
      },
      {
        t: 'p',
        html: 'At 75% saturation (normal mixed venous blood returning to lungs, <i>p</i>O<sub>2</sub> ≈ 40 mmHg):<br>Venous O<sub>2</sub> content = 15 × 1.34 × 0.75 ≈ 15.1 mL/dL',
      },
      {
        t: 'p',
        html: '<b>Oxygen delivery to tissues per 100 mL blood:</b><br>19.1 − 15.1 = 4 mL O<sub>2</sub>/100 mL blood',
      },
      {
        t: 'p',
        html: 'This is a little below the chapter’s figure of about 5 mL O<sub>2</sub> per 100 mL blood; the exact value depends on the saturations taken (a 25-point fall, for example 97% to 72%, gives 15 × 1.34 × 0.25 ≈ 5.0 mL).',
      },
      {
        t: 'p',
        html: '<b>Bohr effect quantification.</b> When <i>p</i>CO<sub>2</sub> rises by 40 mmHg (from 40 to 80 mmHg, as in vigorously exercising muscle), the Hb saturation at any given <i>p</i>O<sub>2</sub> falls by about 10 percentage points (here from 75% to 65%). At <i>p</i>O<sub>2</sub> = 40 mmHg (tissue), this means:',
      },
      {
        t: 'defgrid',
        title: 'Condition, and approximate saturation at pO2 = 40 mmHg',
        rows: [
          { k: 'Normal (<i>p</i>CO<sub>2</sub> = 40 mmHg)', v: '~75%' },
          { k: 'Exercising muscle (<i>p</i>CO<sub>2</sub> = 80 mmHg)', v: '~65%' },
        ],
      },
      {
        t: 'p',
        html: 'Extra O<sub>2</sub> released: 15 × 1.34 × (0.75 − 0.65) = 15 × 1.34 × 0.10 = 2.01 mL/100 mL additional, on top of the normal 4 mL, giving about 6 mL with the Bohr shift alone. This extra release is the benefit of the Bohr effect. In strenuous exercise the chapter’s figure is higher (about 15 mL per 100 mL), because tissue <i>p</i>O<sub>2</sub> falls far below 40 mmHg and more O<sub>2</sub> is unloaded.',
      },
      {
        t: 'p',
        html: '<b>P50: the shortcut.</b> P50 is the <i>p</i>O<sub>2</sub> at which Hb is 50% saturated. Normal P50 ≈ 26.6 mmHg. A right-shifted curve (Bohr effect) has a higher P50, meaning Hb has lower apparent affinity for O<sub>2</sub> and unloads more readily. P50 summarises the shift: the Bohr effect raises it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Oxygen Content Calculation.</b> A person has haemoglobin concentration of 14 g/dL of blood. Arterial oxygen saturation is 95% and mixed venous saturation is 70%. Calculate (a) the arterial oxygen content, (b) the venous oxygen content, (c) the oxygen released to the tissues per 100 mL of blood, and (d) the total oxygen delivered per minute if cardiac output is 5 L/min.',
        steps: [
          '<b>Step 1: Arterial O<sub>2</sub> content.</b><br>O<sub>2</sub>(arterial) = 14 × 1.34 × 0.95 = 17.8 mL/dL',
          '<b>Step 2: Venous O<sub>2</sub> content.</b><br>O<sub>2</sub>(venous) = 14 × 1.34 × 0.70 = 13.1 mL/dL',
          '<b>Step 3: O<sub>2</sub> released to tissues.</b><br>O<sub>2</sub> released = 17.8 − 13.1 = 4.7 mL/dL',
          '<b>Step 4: Total O<sub>2</sub> delivery per minute.</b> Cardiac output = 5 L/min = 5000 mL/min.<br>O<sub>2</sub> delivered/min = 5000 × <frac><num>4.7</num><den>100</den></frac> = 235 mL O<sub>2</sub>/min',
          '<b>Check.</b> The chapter gives approximately 5 mL O<sub>2</sub> per 100 mL, and 4.7 mL is close to it: the saturation gap here is 25 points (95% − 70%), against 20 points in the Method’s 4 mL. Total O<sub>2</sub> delivery of ~235 mL/min matches resting metabolic demand for oxygen.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Bohr Effect on Oxygen Delivery.</b> At a working muscle with <i>p</i>CO<sub>2</sub> = 80 mmHg (vs normal 40 mmHg) and a lower pH, the oxygen-haemoglobin curve shifts to the right, so that haemoglobin saturation at <i>p</i>O<sub>2</sub> = 40 mmHg drops from 75% to 65% (the values in the table of the Method part). Calculate the additional oxygen released per 100 mL of blood due to this Bohr shift, given [Hb] = 15 g/dL.',
        steps: [
          '<b>Step 1: Normal O<sub>2</sub> content at tissues.</b><br>O<sub>2</sub>(normal venous) = 15 × 1.34 × 0.75 = 15.075 mL/dL',
          '<b>Step 2: O<sub>2</sub> content with Bohr shift.</b><br>O<sub>2</sub>(shifted venous) = 15 × 1.34 × 0.65 = 13.065 mL/dL',
          '<b>Step 3: Additional O<sub>2</sub> released.</b><br>Additional release = 15.075 − 13.065 = 2.01 mL/dL ≈ 2 mL/100 mL',
        ],
        ans: 'The Bohr effect releases an additional ~2 mL O<sub>2</sub> per 100 mL of blood in exercising muscle: roughly a 40–50% increase over the resting 4–5 mL delivery (<frac><num>2</num><den>5</den></frac> = 40%, <frac><num>2</num><den>4</den></frac> = 50%). This extra oxygen is part of how the tissues meet the surge in metabolic demand during activity.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Anaemia and Oxygen Delivery.</b> A patient with severe anaemia has [Hb] = 8 g/dL (normal = 14–15 g/dL). Assuming normal saturations (arterial 95%, venous 75%), calculate the oxygen delivery deficit compared to a healthy person with [Hb] = 15 g/dL.',
        steps: [
          '<b>Step 1: Healthy O<sub>2</sub> delivery.</b><br>Healthy delivery = (15 × 1.34 × 0.95) − (15 × 1.34 × 0.75) = 15 × 1.34 × 0.20 = 4.0 mL/dL',
          '<b>Step 2: Anaemic O<sub>2</sub> delivery.</b><br>Anaemic delivery = (8 × 1.34 × 0.95) − (8 × 1.34 × 0.75) = 8 × 1.34 × 0.20 = 2.1 mL/dL',
          '<b>Step 3: Deficit.</b><br>Deficit = 4.0 − 2.1 = 1.9 mL/dL ≈ 47% reduction in O<sub>2</sub> delivery',
          '<b>Clinical note.</b> Even though the anaemic patient’s blood is normally saturated (lungs work fine), oxygen delivery falls by about 47% because the carrier capacity is nearly halved (<frac><num>8</num><den>15</den></frac> ≈ 53% of normal). This explains why anaemic patients are short of breath during exertion: cardiac output must nearly double just to maintain baseline O<sub>2</sub> delivery. This is a simplified comparison at equal saturations.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the total oxygen-carrying capacity of blood with [Hb] = 13 g/dL. If arterial saturation is 97%, how much O<sub>2</sub> is in 100 mL of arterial blood?',
            a: 'Total capacity = 13 × 1.34 = 17.42 mL/100 mL. Arterial O<sub>2</sub> content = 13 × 1.34 × 0.97 = 16.9 mL/100 mL.',
          },
          {
            q: '[NEET] With [Hb] = 15 g/dL, if oxygen delivery to tissues is 6 mL/100 mL blood (higher than resting), what is the mixed venous saturation? (Use 1.34 mL O<sub>2</sub>/g Hb and arterial saturation = 97%.)',
            a: 'Arterial O<sub>2</sub> = 15 × 1.34 × 0.97 = 19.5 mL/100 mL. If delivery = 6 mL/100 mL, venous content = 19.5 − 6 = 13.5 mL/dL. Venous saturation = <frac><num>13.5</num><den>15 × 1.34</den></frac> = <frac><num>13.5</num><den>20.1</den></frac> = 0.672 = 67.2%.',
          },
          {
            q: '[NEET] State what is meant by the “Bohr effect” and explain why it is physiologically advantageous.',
            a: 'The Bohr effect: increased <i>p</i>CO<sub>2</sub> and decreased pH (increased H<sup>+</sup>) shift the O<sub>2</sub>-Hb dissociation curve to the right, reducing Hb’s affinity for O<sub>2</sub>. This is advantageous because metabolically active tissues produce more CO<sub>2</sub>, which automatically unloads more oxygen precisely where it is needed most.',
          },
          {
            q: '[CUET] Define P50. How does a right shift of the O<sub>2</sub>-Hb dissociation curve affect P50?',
            a: 'P50 is the partial pressure of oxygen at which haemoglobin is 50% saturated. A right-shifted curve (Bohr effect) has a higher P50, meaning Hb needs a higher <i>p</i>O<sub>2</sub> to reach the same saturation, so its affinity is lower and it releases O<sub>2</sub> more readily.',
          },
          {
            q: '[NEET A-R] Assertion: Carbon dioxide facilitates oxygen release at the tissues. Reason: CO<sub>2</sub> (and H<sup>+</sup>) shift the O<sub>2</sub>-Hb dissociation curve to the right, decreasing Hb’s affinity for O<sub>2</sub>. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '(a) Both true and R correctly explains A. This is the Bohr effect restated as an assertion–reason item.',
          },
        ],
      },
    ],
  },
];
