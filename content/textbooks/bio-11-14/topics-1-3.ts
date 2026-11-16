import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 14 (Breathing and Exchange of Gases), Topics 01 to 03:
 * pp. 821 to 842 of the Class 11 Biology Master Reference, word for word. The
 * chapter title page (p. 819) and the contents (p. 820) are not copied. The
 * sections are unnumbered in the book; each is an ordinary Topic in page order
 * with the book's own title: Topic 01 Chapter Overview: Why and How We Breathe
 * (pp. 821 to 823, an overview page cut at its own headings), Topic 02
 * Respiratory Organs & The Breathing Mechanism (pp. 824 to 833) and Topic 03
 * Exchange & Transport of Gases (pp. 834 to 842), the last two cut at the book's
 * Sections 1 to 8. Figures 14.1 (caption p. 822, drawn p. 823), 14.2 (caption
 * p. 826, drawn p. 827), 14.3 (caption p. 828, drawn p. 829), 14.4 (caption
 * p. 836, drawn p. 837) and 14.5 (caption p. 838, drawn p. 839) are redrawn in
 * lib/diagrams/biology-11-14.ts; these pages hold no unnumbered drawing.
 * Emphasis italics are dropped; the symbols pO2 and pCO2 are an italic p with
 * an upright gas formula. The book's one-line values such as "159/0.3" are not
 * fractions and are written "and".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 821–823 ─────────────────────────
  {
    n: '01',
    title: 'Chapter Overview: Why and How We Breathe',
    kalam: 'This overview gives you the single mental map that ties everything together.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to use this chapter:</b> This overview gives you the single mental map that ties everything together. Read it first, then work through the three topics, <b>Topic 02</b> Respiratory Organs & the Breathing Mechanism, <b>Topic 03</b> Exchange & Transport of Gases, <b>Topic 04</b> Regulation & Disorders, and finish with the Master Revision at the end. If you understand the five steps below, every later section will slot neatly into one of them.',
      },

      { t: 'part', title: 'Why do we breathe at all?' },
      {
        t: 'p',
        html: 'Every cell in your body runs on energy, and it gets that energy by breaking down nutrients like glucose and fatty acids in a controlled “burning” called <b>cellular respiration</b>. That burning needs a continuous supply of <b>oxygen (O<sub>2</sub>)</b>, and it constantly produces <b>carbon dioxide (CO<sub>2</sub>)</b> as waste. CO<sub>2</sub> is not harmless: if it built up, it would turn the blood dangerously acidic. So the body faces a permanent two-way logistics problem: bring oxygen in, take carbon dioxide out, without ever stopping. The respiratory system exists to solve exactly this.',
      },

      { t: 'part', title: 'Breathing is not the same as cellular respiration' },
      { t: 'p', html: 'This is the single most common confusion in the chapter, so fix it now.' },
      {
        t: 'p',
        html: '• <b>Breathing (pulmonary ventilation)</b> is the mechanical movement of air into and out of the lungs, the chest expanding and relaxing. It happens in the lungs.<br>• <b>Cellular respiration</b> is the biochemical release of energy from glucose inside every cell’s mitochondria, using O<sub>2</sub> and releasing CO<sub>2</sub>. It happens in the cells, not the lungs.',
      },
      {
        t: 'p',
        html: 'Breathing is only the first delivery step in a longer chain that ends with cellular respiration. The whole of Chapter 14 is about that delivery chain: it covers oxygen reaching the cell and carbon dioxide being carried away; what the cell then does with the oxygen (cellular respiration) is the subject of a different chapter.',
      },

      { t: 'part', title: 'The five steps of respiration: the master framework' },
      {
        t: 'p',
        html: 'NCERT frames the entire process of respiration as <b>five sequential steps</b>. Memorise these five, and you have the skeleton of the whole chapter:',
      },
      {
        t: 'p',
        html: '1. <b>Breathing (pulmonary ventilation):</b> atmospheric air is drawn in, and CO<sub>2</sub>-rich alveolar air is pushed out. → covered in Topic 02.<br>2. <b>Diffusion of gases (O<sub>2</sub> and CO<sub>2</sub>) across the alveolar membrane:</b> the actual exchange at the lungs. → Topic 03.<br>3. <b>Transport of gases by the blood:</b> O<sub>2</sub> carried to tissues, CO<sub>2</sub> carried back to the lungs. → Topic 03.<br>4. <b>Diffusion of O<sub>2</sub> and CO<sub>2</sub> between blood and tissues:</b> the exchange at the body’s cells. → Topic 03.<br>5. <b>Utilisation of O<sub>2</sub> by cells</b> for catabolic (energy-releasing) reactions, with the <b>resultant release of CO<sub>2</sub></b>, i.e. cellular respiration itself. → cellular respiration itself, taught in the earlier chapter on respiration in plants.',
      },
      {
        t: 'p',
        html: 'Notice the elegant symmetry: steps 2 and 4 are both diffusion (one at the lungs, one at the tissues), and step 3 is the bloodstream ferrying gases between them. Steps 1–4 are the respiratory system’s job; step 5 is what makes all of it necessary.',
      },
      { t: 'fig', id: 'b11-14-fig-14.1' },

      { t: 'part', title: 'Where it all happens: the thoracic cavity' },
      {
        t: 'p',
        html: 'The lungs sit inside an air-tight box called the <b>thoracic chamber (thoracic cavity)</b>, and the precise boundaries of this box matter because the whole breathing mechanism depends on changing its volume. Anatomically it is bounded:',
      },
      {
        t: 'p',
        html: '• <b>dorsally (back)</b> by the <b>vertebral column</b>,<br>• <b>ventrally (front)</b> by the <b>sternum</b>,<br>• <b>laterally (sides)</b> by the <b>ribs</b>, and<br>• <b>below</b> by the dome-shaped <b>diaphragm</b>.',
      },
      {
        t: 'p',
        html: 'Because this chamber is sealed and air-tight, any change in its volume is forced directly onto the lungs, which is exactly how breathing works (Topic 02). A puncture that breaks the seal causes the lung to collapse, because the volume-to-pressure link is broken.',
      },
      {
        t: 'p',
        html: 'With this map in mind (why we breathe, the difference between breathing and cellular respiration, the five steps, and the sealed chamber they happen in) you are ready to go deep into each stage.',
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 824–833 ─────────────────────────
  {
    n: '02',
    title: 'Respiratory Organs & The Breathing Mechanism',
    kalam:
      'Every single second of your life, without you ever deciding to, air is being pulled into your chest and pushed back out.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic of Human Physiology. NEET reliably pulls 1–2 questions on respiratory volumes/capacities and the inspiration–expiration mechanism every year (the book’s estimate from past papers, not official figures); CBSE Boards favour a labelled-diagram or 2–3 mark short answer; CUET tests definitions and the volume relations directly.',
      },
      {
        t: 'p',
        html: 'Every single second of your life, without you ever deciding to, air is being pulled into your chest and pushed back out. You are doing it right now while reading this sentence. The remarkable thing is that your lungs have no skeletal muscle to expand them, not one. A lung cannot inflate itself any more than a balloon can blow itself up. So how does air get in?',
      },
      {
        t: 'p',
        html: 'The answer is one of the most elegant tricks in the human body: instead of pulling air in, your body makes room for air, and the atmosphere does the rest of the work for free.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a sealed syringe with the nozzle open to the room. When you pull the plunger back, you haven’t sucked air in by force; you’ve simply increased the space inside the barrel. With more space and the same amount of air, the pressure inside drops below the room’s pressure, and air outside rushes in to even things out. Your chest is that syringe. The <b>diaphragm</b> (a dome-shaped sheet of muscle at the floor of your chest) and the <b>intercostal muscles</b> (between your ribs) are the hand on the plunger. When they contract, the chest cavity enlarges, the pressure inside the lungs falls just below atmospheric pressure, and air flows in along that pressure gradient. Relax those muscles and the cavity shrinks, pressure rises above atmospheric, and air flows back out. Air, like water finding its level, always moves from high pressure to low pressure.',
      },
      {
        t: 'p',
        html: 'This is why breathing is described as a bulk flow process driven by pressure differences, quite distinct from the diffusion that later moves gases across the thin alveolar walls. Breathing delivers fresh air to the doorstep (the alveoli); diffusion handles the actual exchange across the threshold.',
      },
      {
        t: 'p',
        html: 'Before air ever reaches that exchange surface, it travels through a plumbing system designed to condition it. Think of the journey of a breath like a passenger entering a busy Indian railway station: first the entrance gates (nostrils), then a long concourse that warms, moistens and filters the crowd (nasal chamber and pharynx), a checkpoint that decides who goes which way (larynx, guarded by the epiglottis so food heads to the food-pipe and air to the windpipe), then the main platform corridor (trachea), splitting into two lines (bronchi), branching into ever-smaller local tracks (bronchioles), and finally arriving at the destinations themselves, millions of tiny terminal halls called <b>alveoli</b>, where the real business happens.',
      },
      {
        t: 'p',
        html: 'Biologists split this pathway into two functional zones. The <b>conducting part</b> (nostrils down to the terminal bronchioles) carries no exchange of gases: its job is to transport, clear, humidify and warm the incoming air so it reaches the delicate alveoli pre-treated. The <b>respiratory (exchange) part</b> is the alveoli and the alveolar ducts, where the air finally meets blood across a wall thin enough for gases to slip through.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The neat “expiration is passive” rule holds only for quiet, restful breathing. The moment you sprint for a bus, sob, sing, or blow out birthday candles, expiration becomes an active process recruiting the internal intercostals and abdominal muscles. Likewise, the pressure-gradient model assumes the chest is air-tight: puncture the pleural seal (as in a chest injury) and the lung collapses, because the gradient can no longer be generated. And the “lungs have no skeletal muscle” point is the whole reason a healthy, mobile diaphragm is non-negotiable for life.',
      },

      { t: 'part', title: 'Key structures, definitions and processes' },
      { t: 'p', html: '<b>The respiratory pathway (conducting → exchange)</b>' },
      {
        t: 'p',
        html: 'The human respiratory system is an air-conditioning and delivery network ending in a gas-exchange surface:',
      },
      {
        t: 'p',
        html: '• <b>External nostrils → nasal chamber:</b> the entry point; lined with hairs and mucus that filter dust and microbes, and a rich blood supply that warms and moistens the air.<br>• <b>Pharynx:</b> the common chamber shared by the respiratory and digestive passages, where the nasal and oral cavities meet.<br>• <b>Larynx (“voice box”):</b> houses the vocal cords; the <b>epiglottis</b> is a leaf-shaped cartilage flap that covers the glottis during swallowing so food is routed to the oesophagus, not the airway.<br>• <b>Trachea (windpipe):</b> a straight tube running down the neck into the thoracic cavity, held permanently open by <b>C-shaped (incomplete) rings of cartilage</b> so it never collapses.<br>• <b>Primary bronchi:</b> the trachea divides into a right and left bronchus, one entering each lung.<br>• <b>Bronchioles:</b> repeated branching of the bronchi into progressively finer tubes; the <b>terminal bronchioles</b> are the last part of the conducting zone.<br>• <b>Alveoli:</b> thin-walled, highly vascularised, balloon-like sacs, the actual site of gas exchange. Their enormous combined surface area is the lungs’ defining feature.',
      },
      {
        t: 'p',
        html: 'The <b>lungs</b> are a pair of organs enclosed in a <b>double-layered pleura</b>, with a film of <b>pleural fluid</b> between the layers that reduces friction as the lungs slide against the chest wall during each breath. The lungs sit in the <b>thoracic chamber</b>, sealed below by the <b>diaphragm</b> and walled by the rib cage and its <b>intercostal muscles</b>.',
      },
      {
        t: 'table',
        title: 'Respiratory organs across the animal kingdom',
        head: ['Animal group', 'Respiratory organ'],
        rows: [
          ['Earthworm', 'Moist body surface / cuticle'],
          ['Insects', 'Network of tracheal tubes'],
          ['Fishes', 'Gills'],
          ['Birds, reptiles, mammals', 'Lungs'],
        ],
      },
      {
        t: 'p',
        html: '(The common principle: a thin, moist, vascular, large-surface-area interface, whether skin, tubes, gills or alveoli.)',
      },
      { t: 'p', html: '<b>The respiratory volumes and capacities</b>' },
      {
        t: 'p',
        html: 'A <b>volume</b> is a single primary quantity of air; a <b>capacity</b> is a sum of two or more volumes. Approximate NCERT values for a healthy adult are given:',
      },
      {
        t: 'p',
        html: '• <b>Tidal Volume (TV):</b> air inspired or expired during one normal breath ≈ <b>500 mL</b>.<br>• <b>Inspiratory Reserve Volume (IRV):</b> extra air that can be forcibly inhaled over and above a normal breath ≈ <b>2500–3000 mL</b>.<br>• <b>Expiratory Reserve Volume (ERV):</b> extra air that can be forcibly exhaled after a normal breath ≈ <b>1000–1100 mL</b>.<br>• <b>Residual Volume (RV):</b> air that always remains in the lungs even after the most forceful expiration ≈ <b>1100–1200 mL</b>.',
      },
      { t: 'p', html: 'The four <b>capacities</b> are then defined as sums:' },
      {
        t: 'formula',
        kicker: 'Respiratory capacities',
        main: 'IC (Inspiratory Capacity) = TV + IRV<br>EC (Expiratory Capacity) = TV + ERV<br>FRC (Functional Residual Capacity) = ERV + RV<br>VC (Vital Capacity) = ERV + TV + IRV<br>TLC (Total Lung Capacity) = RV + ERV + TV + IRV = VC + RV',
        legend: [
          'TV = Tidal Volume',
          'IRV = Inspiratory Reserve Volume',
          'ERV = Expiratory Reserve Volume',
          'RV = Residual Volume',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The instrument that records breathing volumes is the <b>spirometer</b>, used in the clinical assessment of pulmonary function. Crucially, a spirometer <b>cannot directly measure RV</b> (and therefore not FRC or TLC either), because that residual air never leaves the lungs to be recorded.',
      },
      { t: 'fig', id: 'b11-14-fig-14.2' },

      { t: 'part', title: 'Mechanisms and regulatory pathways' },
      { t: 'p', html: '<b>The mechanism of breathing: step by step</b>' },
      {
        t: 'p',
        html: 'Breathing works entirely through changes in the volume of the thoracic chamber, which the pressure-sensitive lungs faithfully follow.',
      },
      {
        t: 'proc',
        title: 'Inspiration (an ACTIVE process: requires muscle contraction)',
        steps: [
          'The <b>diaphragm contracts</b> and flattens from its resting dome shape. This pushes the floor of the thoracic cavity downward, increasing its vertical dimension.',
          'Simultaneously the <b>external intercostal muscles contract</b>, pulling the ribs and sternum upward and outward, increasing the front-to-back dimension of the chest.',
          'The thoracic volume therefore <b>increases</b>. Because the lungs are coupled to the chest wall through the sealed pleural cavity, the lungs expand to fill the new space.',
          'As lung volume rises, the pressure of the air inside the lungs (intrapulmonary pressure) <b>falls just below atmospheric pressure</b>.',
          'Air now flows down this pressure gradient, from the higher-pressure atmosphere into the lower-pressure lungs, until pressures equalise.',
        ],
      },
      {
        t: 'proc',
        title: 'Expiration (PASSIVE at rest: relaxation, no active muscle effort)',
        steps: [
          'The <b>diaphragm relaxes</b> and returns to its dome shape; the <b>external intercostals relax</b>, letting the ribs and sternum fall back.',
          'The thoracic volume <b>decreases</b>, and the elastic lungs recoil.',
          'Intrapulmonary pressure now rises <b>above atmospheric pressure</b>.',
          'Air flows out down the reversed gradient until equilibrium is restored.',
        ],
      },
      {
        t: 'p',
        html: 'The single unifying idea: <b>muscles change the volume of the chest; the volume change reverses the pressure gradient; air simply obeys the gradient.</b> Inspiration is never passive (it always costs muscular work), while quiet expiration is essentially the chest letting go.',
      },
      { t: 'fig', id: 'b11-14-fig-14.3' },
      { t: 'p', html: '<b>Why the conducting zone matters mechanically</b>' },
      {
        t: 'p',
        html: 'The conducting tubes are not passive pipes. The C-shaped cartilage rings of the trachea keep the airway splinted open against the pressure swings of every breath; without them, the negative pressure of a forceful inspiration would suck the windpipe flat. The bronchioles, lacking cartilage, instead use smooth muscle to constrict or dilate and so regulate how much air reaches different regions of the lung, a local control of air distribution. (The neural and chemical regulation of the rate of breathing belongs to a later topic.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Labelled-pathway short answer.</b> Trace the path of a single breath of air from the external nostril to the site of gas exchange, naming the structures in correct sequence, and state where the conducting part ends.',
        steps: [
          '<b>Reasoning & answer:</b> Follow the plumbing in order, treating each branch point as a checkpoint.',
          'External nostril → nasal chamber → pharynx → larynx → trachea → primary bronchi → bronchioles → terminal bronchioles → alveoli.',
          'The <b>conducting part ends at the terminal bronchioles</b>; everything up to that point only transports, warms, moistens and filters air. Gas exchange occurs only at the <b>alveoli</b> (the respiratory/exchange part). A clean board answer names every structure in sequence and explicitly marks the conducting–exchange boundary.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Volume–capacity relation.</b> Define Functional Residual Capacity and express it in terms of primary volumes. Why can a spirometer not measure it?',
        steps: [
          '<b>Reasoning & answer:</b> FRC is the volume of air that <b>remains in the lungs after a normal (quiet) expiration</b>. Since a normal expiration removes the tidal volume but leaves both the expiratory reserve and the residual air behind:',
          'FRC = ERV + RV',
          'A spirometer records only air that is actually breathed in or out. The <b>residual volume never leaves the lungs</b>, so any capacity that contains RV, namely FRC, and also TLC, cannot be measured directly by spirometry.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>Active vs passive elimination.</b> Which one is correct for normal, restful breathing? <b>(a)</b> Inspiration passive, expiration active <b>(b)</b> Inspiration active, expiration passive <b>(c)</b> Both active <b>(d)</b> Both passive',
        steps: [
          '<b>The trap:</b> students who memorise “breathing = muscle work” mark (c). The shortcut is to remember the plunger picture: you must <b>pull</b> the plunger (active inspiration), but you simply <b>let go</b> for a quiet breath out (passive expiration). So the answer is <b>(b)</b>. The mental hook, “pulling in costs effort; quiet letting-out is free”, eliminates (a), (c) and (d) in under five seconds. (Caveat that examiners love: forceful expiration is active, but the question specified normal breathing.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> The trachea is reinforced with C-shaped cartilaginous rings. <b>Reason (R):</b> These incomplete rings hold the airway permanently open while still allowing the adjacent oesophagus to expand during swallowing. <b>(a)</b> A and R both true, R correctly explains A <b>(b)</b> A and R both true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer:</b> A is true: the trachea genuinely carries C-shaped (incomplete) cartilage. R is also true and is in fact the functional reason for the shape: a complete ring would keep the tube open but would press against and obstruct the oesophagus behind it; the open back of the “C” leaves room for the food-pipe to bulge during swallowing while the cartilage still prevents tracheal collapse. R therefore <b>correctly explains</b> A → <b>(a)</b>. The distractor (b) tempts students who know both facts but never connected the gap in the C to the oesophagus.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the muscular partition that separates the thoracic cavity from the abdominal cavity, and state what happens to it during inspiration.',
            a: 'Diaphragm; it contracts and flattens, increasing thoracic volume.',
          },
          {
            q: '[CUET] Arrange in order of increasing volume: Tidal Volume, Residual Volume, Expiratory Reserve Volume, Inspiratory Reserve Volume.',
            a: 'TV < ERV < RV < IRV.',
          },
          {
            q: '[NEET] Express Vital Capacity and Total Lung Capacity each as a sum of primary respiratory volumes.',
            a: 'VC = ERV + TV + IRV; TLC = RV + ERV + TV + IRV (= VC + RV).',
          },
          {
            q: '[NEET] Identify the structure that prevents food from entering the windpipe during swallowing, and the cavity that is the common meeting point of the nasal and oral passages.',
            a: 'Epiglottis; pharynx.',
          },
          {
            q: '[NEET A-R] <b>Assertion:</b> During quiet expiration no muscular effort is required. <b>Reason:</b> The diaphragm and external intercostals relax, the thoracic volume falls, and elastic recoil drives air out. Decide whether R correctly explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'Both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The part of the respiratory system where no exchange of gases takes place is the:',
        opts: [
          {
            label: 'alveoli',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all lie in or at the respiratory zone where exchange occurs.',
          },
          {
            label: 'alveolar ducts',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all lie in or at the respiratory zone where exchange occurs.',
          },
          { label: 'terminal bronchioles', nudge: null },
          {
            label: 'respiratory bronchioles',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all lie in or at the respiratory zone where exchange occurs.',
          },
        ],
        correct: 2,
        solution:
          'The conducting zone runs up to and includes the terminal bronchioles, whose sole job is transport: no exchange. The trap is treating all small tubes as exchange sites; only the bronchioles labelled “terminal” mark the end of conduction.',
      },
      {
        t: 'mcq',
        q: 'Functional Residual Capacity is correctly represented as:',
        opts: [
          {
            label: 'TV + IRV',
            nudge: '<b>(a)</b> is the Inspiratory Capacity. Students slip to (a) by confusing “what’s left after breathing out” with “what you can breathe in.”',
          },
          { label: 'ERV + RV', nudge: null },
          {
            label: 'RV + IRV',
            nudge: '<b>(c)</b> pairs two volumes that never co-define a standard capacity.',
          },
          { label: 'ERV + TV + IRV', nudge: '<b>(d)</b> is the Vital Capacity.' },
        ],
        correct: 1,
        solution: 'FRC is the air left after a normal expiration = ERV + RV.',
      },
      {
        t: 'mcq',
        q: 'The trachea is prevented from collapsing during forceful inspiration by:',
        opts: [
          {
            label: 'complete bony rings',
            nudge: '<b>(a)</b> is wrong: the rings are cartilaginous and incomplete, not complete bone.',
          },
          { label: 'C-shaped cartilaginous rings', nudge: null },
          {
            label: 'smooth muscle tone alone',
            nudge: '<b>(c)</b> describes bronchiolar (not tracheal) control.',
          },
          {
            label: 'pleural fluid pressure',
            nudge: '<b>(d)</b> confuses the friction-reducing pleural fluid with structural support.',
          },
        ],
        correct: 1,
        solution:
          'Incomplete C-shaped cartilage rings splint the trachea open against pressure swings while leaving room for the oesophagus.',
      },
      {
        t: 'mcq',
        q: 'During inspiration, which combination of events occurs?',
        opts: [
          {
            label: 'Diaphragm relaxes, thoracic volume decreases',
            nudge: '<b>(a)</b> and <b>(c)</b> and <b>(d)</b> all describe expiration and are the classic mirror-image distractors; a student who reverses the pressure logic picks one of them.',
          },
          { label: 'External intercostals contract, ribs move up and out, thoracic volume increases', nudge: null },
          {
            label: 'Intrapulmonary pressure rises above atmospheric',
            nudge: '<b>(a)</b> and <b>(c)</b> and <b>(d)</b> all describe expiration and are the classic mirror-image distractors; a student who reverses the pressure logic picks one of them.',
          },
          {
            label: 'Air moves from lungs to atmosphere',
            nudge: '<b>(a)</b> and <b>(c)</b> and <b>(d)</b> all describe expiration and are the classic mirror-image distractors; a student who reverses the pressure logic picks one of them.',
          },
        ],
        correct: 1,
        solution:
          'Inspiration = diaphragm and external intercostals contract → chest enlarges → pressure inside falls below atmospheric → air flows in.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Lungs suck air in.”</b> They don’t. Your lungs have no skeletal muscle to expand them, not one; air is pushed in by the atmosphere once the chest enlarges and lowers internal pressure. Phrase it as a pressure gradient, never as suction.',
          '<b>Treating expiration as active.</b> At rest, quiet expiration is passive (just relaxation and elastic recoil). It only becomes active during forceful breathing; read whether the question says “normal” or “forceful.”',
          '<b>Confusing volumes with capacities.</b> A capacity is always a sum of two or more volumes. If an option names a single quantity for a capacity (or vice-versa), it’s likely a trap.',
          '<b>Forgetting RV is unmeasurable by spirometer.</b> Any capacity containing RV (FRC, TLC) cannot be read directly off a spirogram.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Don’t memorise all four capacity formulas as separate facts. Memorise the four primary volumes in size order (at the typical values, TV < ERV < RV < IRV, roughly 500, 1100, 1200 and 2500–3000 mL) and one composite, <b>TLC = RV + ERV + TV + IRV</b>. Every other capacity is just TLC with one or two volumes removed: drop RV → VC; keep only the two “remaining-after-normal-breath” volumes → FRC; the two “inspiration” volumes → IC; the two “expiration” volumes → EC. One picture, not five formulas.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Air path',
            note: 'Nostril → nasal chamber → pharynx → larynx (epiglottis guards) → trachea (C-rings) → bronchi → bronchioles → <b>terminal bronchioles (end of conducting zone)</b> → <b>alveoli (gas exchange)</b>.',
          },
          {
            f: 'Pleura',
            note: 'double-layered, with pleural fluid reducing friction. <b>Diaphragm + intercostals</b> drive volume change; lungs have no skeletal muscle to expand them.',
          },
          {
            f: 'Inspiration = ACTIVE',
            note: 'diaphragm + external intercostals contract → thoracic volume ↑ → intrapulmonary pressure < atmospheric → air <b>in</b>.',
          },
          {
            f: 'Expiration = PASSIVE (at rest)',
            note: 'muscles relax → volume ↓ → pressure > atmospheric → air <b>out</b>.',
          },
          {
            f: 'Volumes',
            note: 'TV ≈ 500 mL · IRV ≈ 2500–3000 mL · ERV ≈ 1000–1100 mL · RV ≈ 1100–1200 mL.',
          },
          {
            f: 'Capacities',
            note: 'IC = TV + IRV · EC = TV + ERV · FRC = ERV + RV · VC = ERV + TV + IRV · TLC = VC + RV.',
          },
          { f: '<b>Spirometer</b> measures volumes but <b>not RV / FRC / TLC</b>.', note: '' },
          {
            f: 'Across animals',
            note: 'earthworm → moist cuticle · insects → tracheae · fishes → gills · birds/reptiles/mammals → lungs.',
          },
        ],
        aids: ['“<b>Pull in (active), let go out (passive).</b>”'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 834–842 ─────────────────────────
  {
    n: '03',
    title: 'Exchange & Transport of Gases',
    kalam:
      'Air is a mixture of gases, and each gas in the mixture pushes with its own share of the total pressure.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial NEET favourite: the O<sub>2</sub>–haemoglobin dissociation curve, the partial-pressure table, and the percentages of CO<sub>2</sub> transport are asked almost every year (the book’s estimate from past papers, not official figures), often as assertion–reason or “identify the incorrect statement” traps. CBSE Boards lean on the diffusion-membrane diagram and short answers on transport modes; CUET tests the partial-pressure values and definitions directly.',
      },
      {
        t: 'p',
        html: 'In the last topic we got fresh air all the way down to the alveoli. But arriving at the alveoli is like a delivery truck reaching the warehouse gate: the cargo still has to be unloaded, carried across the city, and dropped at every doorstep. That unloading and delivery is what exchange and transport is about. And here’s the beautiful part: just like breathing, none of it is “pushed” by the body. It all runs on a single quiet force: <b>difference in pressure.</b>',
      },
      {
        t: 'p',
        html: 'Air is a mixture of gases, and each gas in the mixture pushes with its own share of the total pressure. That individual share is its <b>partial pressure</b>. Oxygen’s partial pressure is written <i>p</i>O<sub>2</sub>, carbon dioxide’s is <i>p</i>CO<sub>2</sub>. The rule that governs every gas movement in your body is almost insultingly simple: a gas always diffuses from where its partial pressure is high to where it is low, never the reverse, never uphill.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a crowded local train at a Mumbai station. When the train (high crowd-pressure inside) stops at a platform (low crowd-pressure outside), people spill out, not because anyone pushes them, but because the crowd naturally flows from packed to empty. Oxygen behaves exactly like those passengers. In the alveoli the oxygen “crowd” is dense (<i>p</i>O<sub>2</sub> ≈ 104 mmHg); in the blood arriving from the body it is sparse (<i>p</i>O<sub>2</sub> ≈ 40 mmHg). So oxygen pours from alveoli into blood, no pushing required. At the tissues the situation flips: blood is now the crowded carriage and the oxygen-hungry tissue is the empty platform, so oxygen spills out into the cells. Carbon dioxide rides the same logic in the opposite direction.',
      },
      {
        t: 'p',
        html: 'Two distinct journeys are happening, then. <b>Exchange</b> is the short hop across the thin wall between alveolus and blood (and between blood and tissue), pure diffusion over a tiny distance. <b>Transport</b> is the long haul through the bloodstream, where the gases hitch a ride: oxygen mostly clings to haemoglobin, carbon dioxide mostly converts into bicarbonate. The body is far too busy to let gases simply dissolve and drift; dissolved gas alone could never carry enough.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Diffusion across the membrane depends on three things together: the partial-pressure gradient, the <b>solubility</b> of the gas, and the <b>thickness</b> of the membrane. Change any one and the rate changes. This is why carbon dioxide, despite having a far smaller pressure gradient at the alveoli than oxygen does, still clears beautifully: CO<sub>2</sub> is about 20–25 times more soluble, so it slips across far more readily per unit of pressure difference. The whole system also assumes a healthy, thin diffusion membrane; thicken it (with fluid, fibrosis or fat) and gas exchange falters even when the lungs ventilate normally.',
      },

      { t: 'part', title: 'Key structures, definitions and processes' },
      {
        t: 'table',
        title: 'Partial pressures around the body (approximate NCERT values, mmHg)',
        head: ['Site', 'pO2', 'pCO2'],
        rows: [
          ['Atmospheric air', '159', '0.3'],
          ['Alveoli', '104', '40'],
          ['Deoxygenated blood (entering alveoli)', '40', '45'],
          ['Oxygenated blood (leaving alveoli → to tissues)', '95', '40'],
          ['Tissues', '40', '45'],
        ],
      },
      {
        t: 'p',
        html: 'Reading the table is the whole game: wherever two sites meet, the gas flows from the higher partial pressure to the lower. Note that <b>nitrogen</b>, although the most abundant gas in inspired air, takes essentially no part in this exchange: it has no biological carrier and its partial pressure stays effectively the same in alveolar air and in blood, so there is no gradient to drive it anywhere. Only O<sub>2</sub> and CO<sub>2</sub> are physiologically exchanged.',
      },
      { t: 'p', html: '<b>The diffusion (respiratory) membrane</b>' },
      {
        t: 'p',
        html: 'Gas exchange at the alveoli occurs across a membrane of <b>three thin layers</b>:',
      },
      {
        t: 'p',
        html: '1. the <b>squamous epithelium of the alveolar wall</b>,<br>2. the <b>endothelium of the alveolar (pulmonary) capillary</b>, and<br>3. the <b>basement substance</b> sandwiched between them.',
      },
      {
        t: 'p',
        html: 'Its total thickness is much less than a millimetre, a deliberately delicate barrier that keeps the diffusion path short. The alveolar wall is not only thin but also <b>richly supplied with blood capillaries</b> and irregularly folded to maximise surface area; this combination of a vast, thin, heavily vascularised interface is exactly what makes the lung such an efficient exchange organ. Anything that thickens this barrier or shrinks its area cuts directly into the exchange rate.',
      },
      { t: 'p', html: '<b>Factors affecting the rate of diffusion</b>' },
      {
        t: 'p',
        html: '• <b>Partial-pressure / concentration gradient</b> of the diffusing gas.<br>• <b>Solubility</b> of the gas (CO<sub>2</sub> is ≈ 20–25× more soluble than O<sub>2</sub>).<br>• <b>Thickness</b> of the diffusion membrane (thinner = faster).',
      },
      { t: 'p', html: '<b>How the two gases are transported in blood</b>' },
      {
        t: 'p',
        html: '<b>Oxygen</b> (≈ 97% carried bound to haemoglobin, ≈ 3% dissolved in plasma):',
      },
      {
        t: 'p',
        html: '• Each haemoglobin molecule binds up to <b>four O<sub>2</sub> molecules</b>, one at each heme group, and does so <b>reversibly</b>: the reversibility is the single most important property, allowing pick-up in the lungs and release in tissues.<br>• Bound form: <b>oxyhaemoglobin</b> (HbO<sub>2</sub>).<br>• About <b>5 mL of O<sub>2</sub></b> is delivered to the tissues by every 100 mL of oxygenated blood.',
      },
      { t: 'p', html: '<b>Carbon dioxide</b> (three modes):' },
      {
        t: 'p',
        html: '• ≈ <b>70%</b> as <b>bicarbonate</b> (HCO<sub>3</sub><sup>−</sup>) in plasma and RBCs,<br>• ≈ <b>20–25%</b> as <b>carbaminohaemoglobin</b> (bound to the globin of Hb),<br>• ≈ <b>7% dissolved</b> in plasma.<br>• About <b>4 mL of CO<sub>2</sub></b> is delivered to the alveoli by every 100 mL of deoxygenated blood.',
      },
      { t: 'fig', id: 'b11-14-fig-14.4' },

      { t: 'part', title: 'Mechanisms and regulatory pathways' },
      {
        t: 'proc',
        title: 'Oxygen: loading at the lungs, unloading at the tissues',
        steps: [
          '<b>At the alveoli</b>, <i>p</i>O<sub>2</sub> is high (104) and blood arriving from the body is oxygen-poor (40). Oxygen diffuses into the blood and binds haemoglobin to form oxyhaemoglobin. The blood leaves nearly saturated.',
          '<b>At the tissues</b>, <i>p</i>O<sub>2</sub> is low (40) because cells are constantly burning oxygen. Oxyhaemoglobin now releases its oxygen, which diffuses into the cells.',
        ],
      },
      {
        t: 'p',
        html: 'This loading-and-unloading is captured by the <b>oxygen–haemoglobin dissociation curve</b>, a plot of percentage saturation of Hb against <i>p</i>O<sub>2</sub>. The curve is <b>sigmoid (S-shaped)</b>, a shape that is itself functionally clever: it stays high and flat at the lung’s high <i>p</i>O<sub>2</sub> (so Hb loads fully even if alveolar <i>p</i>O<sub>2</sub> dips a little) and then drops steeply in the tissue range (so a small fall in <i>p</i>O<sub>2</sub> unloads a large amount of oxygen exactly where it’s needed).',
      },
      {
        t: 'p',
        html: '<b>A built-in oxygen reserve.</b> Notice that although every 100 mL of oxygenated blood carries roughly 20 mL of oxygen, only about <b>5 mL is actually delivered</b> to the tissues under normal resting conditions, barely a quarter of the cargo. The rest stays bound to haemoglobin and travels back to the lungs unused. Far from being wasteful, this leftover is a <b>reserve</b>: during exercise, when tissue <i>p</i>O<sub>2</sub> falls sharply and the curve shifts right, this banked oxygen is released to meet the surge in demand. The body keeps most of its oxygen “in reserve” precisely so it never runs short when activity spikes.',
      },
      {
        t: 'p',
        html: '<b>What shifts the curve.</b> Conditions at hard-working tissues, <b>high <i>p</i>CO<sub>2</sub>, low pH (high H<sup>+</sup>), and high temperature</b>, push the curve to the <b>right</b>, meaning haemoglobin releases oxygen more readily right where metabolism is fastest (the fall in <i>p</i>O<sub>2</sub> moves Hb down the curve; the right shift comes from the extra CO<sub>2</sub>, acid and heat). This dependence of oxygen unloading on acidity and CO<sub>2</sub> is the <b>Bohr effect</b>. The opposite conditions, found in the lungs, shift the curve <b>left</b> and favour loading.',
      },
      { t: 'fig', id: 'b11-14-fig-14.5' },
      { t: 'p', html: '<b>Carbon dioxide: the bicarbonate machinery</b>' },
      {
        t: 'p',
        html: 'Most CO<sub>2</sub> does not simply dissolve: it is chemically converted inside red blood cells. The enzyme <b>carbonic anhydrase</b>, abundant in RBCs, dramatically speeds the reaction:',
      },
      {
        t: 'p',
        html: 'CO<sub>2</sub> + H<sub>2</sub>O ⇌<sup>carbonic anhydrase</sup> H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>',
      },
      {
        t: 'p',
        html: '1. <b>At the tissues</b>, <i>p</i>CO<sub>2</sub> is high (45 vs 40 in blood), so CO<sub>2</sub> diffuses into the blood and is largely converted to bicarbonate (≈ 70%).<br>2. <b>At the alveoli</b>, where <i>p</i>CO<sub>2</sub> is lower (40 vs 45 in arriving blood), the reaction runs backwards: bicarbonate reconverts to CO<sub>2</sub>, which diffuses out into the alveolar air to be exhaled.',
      },
      {
        t: 'p',
        html: 'Two enrichment terms worth knowing for high-difficulty NEET items: the <b>Haldane effect</b>: deoxygenated haemoglobin carries CO<sub>2</sub> more readily than oxygenated haemoglobin (the CO<sub>2</sub>-side mirror of the Bohr effect), and <b>Hamburger’s phenomenon (the chloride shift)</b>: the exchange of Cl<sup>−</sup> into RBCs as HCO<sub>3</sub><sup>−</sup> moves out, maintaining ionic balance. (Both are named in NEET sources but lie just beyond the core NCERT treatment.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Direction of diffusion from the table.</b> Using partial-pressure values, explain why O<sub>2</sub> moves from alveoli into blood while CO<sub>2</sub> moves from blood into alveoli at the same site.',
        steps: [
          '<b>Reasoning & answer:</b> Diffusion always follows the partial-pressure gradient. At the alveolus, <i>p</i>O<sub>2</sub> is 104 mmHg but only 40 mmHg in the deoxygenated blood, so oxygen moves <b>alveoli → blood</b> (high to low). Simultaneously <i>p</i>CO<sub>2</sub> is 45 mmHg in that blood but only 40 mmHg in the alveolus, so carbon dioxide moves <b>blood → alveoli</b> (high to low). The two gases travel in opposite directions across the same membrane, each obeying its own gradient independently.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Modes of CO<sub>2</sub> transport.</b> State the three modes of carbon dioxide transport in blood with their approximate percentages.',
        steps: [
          '<b>Reasoning & answer:</b> Carbon dioxide travels in three forms: about <b>70% as bicarbonate</b> (HCO<sub>3</sub><sup>−</sup>) in plasma and RBCs, about <b>20–25% as carbaminohaemoglobin</b> (bound to haemoglobin), and about <b>7% dissolved</b> in plasma. The dominant route is bicarbonate, a direct consequence of carbonic anhydrase rapidly converting CO<sub>2</sub> to carbonic acid, which dissociates to bicarbonate.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '<b>The solubility paradox.</b> At the alveoli the O<sub>2</sub> gradient (104 → 40 = 64 mmHg) is far larger than the CO<sub>2</sub> gradient (45 → 40 = 5 mmHg). Yet CO<sub>2</sub> is still exchanged very efficiently. Why? <b>(a)</b> CO<sub>2</sub> molecules are smaller <b>(b)</b> CO<sub>2</sub> is ≈ 20–25× more soluble than O<sub>2</sub> <b>(c)</b> the membrane is thinner for CO<sub>2</sub> <b>(d)</b> CO<sub>2</sub> has higher partial pressure overall',
        steps: [
          '<b>The trap:</b> students fixate on the gradient and assume the gas with the bigger gradient must dominate, picking nothing for CO<sub>2</sub> or guessing (d). The shortcut: diffusion rate = <frac><num>gradient × solubility</num><den>thickness</den></frac>. CO<sub>2</sub>’s tiny gradient is more than compensated by its much higher <b>solubility</b>, so <b>(b)</b> is correct. (a) is false (CO<sub>2</sub> is the heavier molecule, 44 against 32), (c) is false: it’s the same membrane for both gases, and (d) misreads the table.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty · Assertion–Reason',
        q: '<b>Assertion (A):</b> At actively respiring tissues, haemoglobin releases oxygen more readily. <b>Reason (R):</b> A rise in <i>p</i>CO<sub>2</sub>, a fall in pH and a rise in temperature shift the oxygen–haemoglobin dissociation curve to the right. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning & answer:</b> A is true: tissues need oxygen, and Hb obliges by unloading there. R is also true and is precisely the mechanism: working tissues produce CO<sub>2</sub>, acid and heat, all of which right-shift the curve (the <b>Bohr effect</b>), lowering Hb’s affinity for oxygen so it lets go. R therefore <b>correctly explains</b> A → <b>(a)</b>. A student who memorised the right-shift factors but never linked them to why tissues get more oxygen would wrongly pick (b).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three layers that make up the diffusion membrane at the alveolus.',
            a: 'Squamous epithelium of alveoli, endothelium of alveolar capillary, and the basement substance between them.',
          },
          {
            q: '[CUET] State the approximate partial pressures of O<sub>2</sub> and CO<sub>2</sub> in (i) alveolar air and (ii) oxygenated blood.',
            a: '(i) alveolar <i>p</i>O<sub>2</sub> ≈ 104, <i>p</i>CO<sub>2</sub> ≈ 40 mmHg; (ii) oxygenated blood <i>p</i>O<sub>2</sub> ≈ 95, <i>p</i>CO<sub>2</sub> ≈ 40 mmHg.',
          },
          {
            q: '[NEET] List the three factors that determine the rate of diffusion of a gas across the respiratory membrane.',
            a: 'Partial-pressure gradient, solubility of the gas, thickness of the diffusion membrane.',
          },
          {
            q: '[NEET] Name the enzyme that facilitates CO<sub>2</sub> transport as bicarbonate, and state where it is found.',
            a: 'Carbonic anhydrase; in red blood cells (erythrocytes).',
          },
          {
            q: '[NEET A-R] <b>Assertion:</b> The oxygen–haemoglobin dissociation curve is sigmoid. <b>Reason:</b> Haemoglobin binds four O<sub>2</sub> molecules cooperatively: each O<sub>2</sub> that binds makes the next one bind more easily. Decide whether R correctly explains A. Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
            a: 'Both true and R correctly explains A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The bulk of carbon dioxide is transported in blood as:',
        opts: [
          {
            label: 'dissolved CO<sub>2</sub> in plasma',
            nudge: '<b>(b)</b> accounts for only ≈ 20–25% and <b>(a)</b> for only ≈ 7%.',
          },
          {
            label: 'carbaminohaemoglobin',
            nudge: '<b>(b)</b> accounts for only ≈ 20–25% and <b>(a)</b> for only ≈ 7%.',
          },
          { label: 'bicarbonate', nudge: null },
          { label: 'carbonic acid', nudge: '<b>(d)</b> carbonic acid is only a short-lived intermediate that dissociates at once; it is not a way the blood carries CO<sub>2</sub>.' },
        ],
        correct: 2,
        solution: 'About 70% travels as bicarbonate: the largest fraction.',
      },
      {
        t: 'mcq',
        q: 'Each haemoglobin molecule can transport a maximum of:',
        opts: [
          { label: '1 O<sub>2</sub>', nudge: '<b>(a)</b>/<b>(b)</b> underestimate it.' },
          { label: '2 O<sub>2</sub>', nudge: '<b>(a)</b>/<b>(b)</b> underestimate it.' },
          { label: '4 O<sub>2</sub>', nudge: null },
          {
            label: '6 O<sub>2</sub>',
            nudge: '<b>(d)</b> is the classic distractor for students who confuse heme count.',
          },
        ],
        correct: 2,
        solution:
          'Haemoglobin has four heme groups, each binding one O<sub>2</sub> reversibly, so four O<sub>2</sub> molecules in total.',
      },
      {
        t: 'mcq',
        q: 'The oxygen–haemoglobin dissociation curve shifts to the right when:',
        opts: [
          {
            label: '<i>p</i>CO<sub>2</sub> decreases',
            nudge: 'Options <b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all left-shift conditions that favour loading: the mirror-image distractors a student picks by reversing the logic.',
          },
          {
            label: 'pH increases',
            nudge: 'Options <b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all left-shift conditions that favour loading: the mirror-image distractors a student picks by reversing the logic.',
          },
          {
            label: 'temperature decreases',
            nudge: 'Options <b>(a)</b>, <b>(b)</b> and <b>(c)</b> are all left-shift conditions that favour loading: the mirror-image distractors a student picks by reversing the logic.',
          },
          { label: '<i>p</i>CO<sub>2</sub> increases', nudge: null },
        ],
        correct: 3,
        solution:
          'A right shift favours oxygen unloading and is driven by high <i>p</i>CO<sub>2</sub>, low pH and high temperature (the Bohr effect).',
      },
      {
        t: 'mcq',
        q: 'Compared with O<sub>2</sub>, CO<sub>2</sub> diffuses across the respiratory membrane faster per unit partial-pressure difference because:',
        opts: [
          {
            label: 'its gradient is larger',
            nudge: '<b>(a)</b> is false: CO<sub>2</sub>’s gradient is actually smaller.',
          },
          { label: 'it is about 20–25× more soluble', nudge: null },
          {
            label: 'the membrane is thinner for it',
            nudge: '<b>(c)</b> is false: it is the same membrane.',
          },
          {
            label: 'it binds haemoglobin more strongly',
            nudge: '<b>(d)</b> confuses transport in blood with diffusion across the membrane.',
          },
        ],
        correct: 1,
        solution: 'Higher solubility is the deciding factor.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the diffusion direction.</b> Always anchor to the table: gas moves from high to low partial pressure. At the alveoli O<sub>2</sub> goes in and CO<sub>2</sub> comes out; at the tissues it’s the reverse. Draw the arrows before answering.',
          '<b>Crediting the gradient over solubility for CO<sub>2</sub>.</b> Examiners love this. CO<sub>2</sub> exchanges well despite a small gradient because of its high solubility.',
          '<b>Misremembering CO<sub>2</sub> percentages.</b> It is ≈ 70% bicarbonate, ≈ 20–25% carbamino, ≈ 7% dissolved, not the other way round. The famous trap option flips it to “70% carbaminohaemoglobin.”',
          '<b>Saying expiration “pumps” CO<sub>2</sub> out, or blood “pushes” O<sub>2</sub> in.</b> Both are passive diffusion down gradients, never active pumping at the membrane.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise just two numbers and derive the rest: at the alveoli (O<sub>2</sub> 104 / CO<sub>2</sub> 40) and in deoxygenated blood/tissues (O<sub>2</sub> 40 / CO<sub>2</sub> 45). Every diffusion-direction question falls out of comparing these. And for the dissociation curve, remember one phrase, <b>“hot, acidic, CO<sub>2</sub>-rich tissues let oxygen go”</b>, and the entire right-shift list (high temp, low pH, high <i>p</i>CO<sub>2</sub>) reconstructs itself; the fall in <i>p</i>O<sub>2</sub> only moves Hb down the curve, it does not shift it.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Partial pressures (mmHg)',
            note: 'atmosphere 159 and 0.3 · alveoli 104 and 40 · deoxy blood & tissues 40 and 45 · oxy blood 95 and 40. Gas flows <b>high</b> → <b>low</b>.',
          },
          {
            f: 'Diffusion membrane = 3 layers',
            note: 'alveolar squamous epithelium + capillary endothelium + basement substance; total thickness ≪ 1 mm.',
          },
          {
            f: 'Diffusion rate depends on',
            note: '<frac><num>pressure gradient × <b>solubility</b></num><den>membrane thickness</den></frac> (surface area also matters). CO<sub>2</sub> ≈ 20–25× more soluble than O<sub>2</sub>.',
          },
          {
            f: 'O<sub>2</sub> transport',
            note: '≈ 97% on Hb (4 O<sub>2</sub>/Hb, reversible) + ≈ 3% dissolved; ≈ 5 mL O<sub>2</sub> per 100 mL oxygenated blood.',
          },
          {
            f: 'CO<sub>2</sub> transport',
            note: '≈ 70% bicarbonate · ≈ 20–25% carbaminohaemoglobin · ≈ 7% dissolved; ≈ 4 mL CO<sub>2</sub> per 100 mL deoxygenated blood. Enzyme: <b>carbonic anhydrase</b> (in RBC).',
          },
          {
            f: 'O<sub>2</sub>–Hb curve',
            note: 'sigmoid; <b>right shift</b> (unload at tissues) = high <i>p</i>CO<sub>2</sub>, low pH, high temp = <b>Bohr effect</b>; left shift = load at lungs.',
          },
        ],
        aids: ['“<b>Hot, acidic, CO<sub>2</sub>-rich → oxygen released.</b>”'],
      },
    ],
  },
];
