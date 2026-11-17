import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 15, Body Fluids and Circulation: Topics 03 and 04 and Additional topics A, B and C,
 * word for word from the Class 11 Biology Master Reference (pp. 905–922).
 *
 * Topic 03 Double Circulation, Regulation & Disorders, pp. 905–912 (Figure 15.6: caption p. 906, drawing p. 907,
 * set after the Key components paragraph where the caption stands; Figure 15.7: caption p. 909, drawing p. 910,
 * set after the disorders list). Topic 04 Master Revision: Chapter 15 at a Glance, pp. 913–914, parts = the book's
 * own headings A to H. The shared opening of "Body Fluids and Circulation: Additional Topics" (p. 915) heads
 * Additional topic A's Introduction. A Clotting Factors by Name and Number, pp. 915–918 (its answers end at the top
 * of p. 918); B Haemopoiesis: The Full Cell Lineages, pp. 918–920 (answers end on p. 920, where Addendum C begins);
 * C Blood Pressure Regulation, pp. 920–922 (answers end on p. 922, where Addendum D begins).
 *
 * House rules: no em dashes, no fraction on one line (blood pressure "120/80" is written "120 over 80"), formulas
 * upright with real sub/superscripts. This chapter's book prints options (a) to (d), kept as printed.
 * "Sub-topic 02" is Topic 02, "Addendum A–H" is "Additional topic A–H".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 905–912 ─────────────────────────
  {
    n: '03',
    title: 'Double Circulation, Regulation & Disorders',
    kalam: 'A heartbeat is not a single squeeze but a precisely timed sequence, like the staged signals at a busy Indian railway junction.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A frequently asked zone. NEET asks 2–4 questions yearly on the cardiac cycle, ECG interpretation, regulation by the autonomic nervous system, and the circulatory disorders (hypertension, CAD, angina), frequently as assertion–reason and match-the-column (the book’s estimate from past papers, not official figures). CBSE Boards often set a 3–5 mark “describe the cardiac cycle / explain double circulation” or a “write short notes on hypertension and CAD” question. CUET favours the disorder definitions and BP normal values.',
      },
      {
        t: 'p',
        html: 'In Topic 02 we laid out the plumbing: the chambers, valves, and the two loops of double circulation. Now we switch on the engine and watch it run. That engine, a <b>mesoderm-derived</b> muscular pump about the size of your own clenched fist, sitting in the thoracic cavity between the lungs and tilted slightly to the left, never rests. Three questions drive this topic: <b>How does one heartbeat actually happen? Who controls the speed? And what goes wrong when the system fails?</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A heartbeat is not a single squeeze but a precisely timed sequence, like the staged signals at a busy Indian railway junction. First the side platforms fill (atria), then the main line clears (ventricles eject), then everything resets for the next train. This repeating sequence is the <b>cardiac cycle</b>, and at 72 beats a minute, the whole cycle takes about <b>0.8 seconds</b>. Because blood passes through the heart twice in every complete circuit, the human heart completes <b>72 double circulations per minute</b>.',
      },
      {
        t: 'p',
        html: 'Who sets the pace? The heart has its own ignition (it is <b>myogenic</b>), but a control centre in the brain acts like cruise control, speeding it up when you sprint and easing it down when you rest. And when arteries clog or valves leak, the whole engine sputters: that is the world of circulatory <b>disorders</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• All the timings here (0.8 s cycle, 72/min, ~5 L/min output) are resting averages for a healthy adult. They climb steeply during exercise, fever, or stress.<br>• The heart is <b>myogenic</b>: a transplanted heart, cut off from all its nerves, still beats. Nerves only modulate the rate; they never originate the beat.<br>• The disorder names are precise and easily confused: <b>cardiac arrest</b> (heart stops completely), <b>heart failure</b> (heart still beats but pumps too weakly), and <b>heart attack / myocardial infarction</b> (heart muscle suddenly damaged by loss of blood supply) are three different things.',
      },

      { t: 'part', title: 'Key components and normal values' },
      { t: 'p', html: '<b>The Cardiac Cycle: phases</b>' },
      {
        t: 'p',
        html: 'One cardiac cycle (~0.8 s) has three phases: <b>atrial systole</b>, <b>ventricular systole</b>, and <b>joint diastole</b> (all chambers relaxed). During systole the atria and ventricles contract in sequence, not together; during diastole, blood flows into the heart.',
      },
      {
        t: 'p',
        html: 'NCERT counts three phases. The four steps listed under Key processes and mechanisms split the cycle by the valves: steps 1 and 4 together are the “joint diastole” of the three-phase count (all chambers relaxed).',
      },
      {
        t: 'table',
        title: 'Heart Sounds',
        head: ['Sound', 'Cause', 'Timing'],
        rows: [
          ['S1: “Lubb”', 'closure of the AV (tricuspid + bicuspid) valves', 'start of ventricular systole'],
          ['S2: “Dub/Dup”', 'closure of the semilunar (aortic + pulmonary) valves', 'start of ventricular diastole; high-pitched, short'],
        ],
      },
      { t: 'p', html: '<b>ECG (Electrocardiogram): the electrical signature</b>' },
      {
        t: 'p',
        html: 'A graphic record of the heart’s electrical activity, picked up at the body surface. Its three key deflections:<br>• <b>P wave</b>: depolarisation of the atria (triggers atrial contraction).<br>• <b>QRS complex</b>: depolarisation of the ventricles (triggers ventricular contraction).<br>• <b>T wave</b>: repolarisation of the ventricles (return to resting state; end of systole).',
      },
      {
        t: 'defgrid',
        title: 'Normal Values (resting adult)',
        rows: [
          { k: 'Heart rate', v: '~72 beats/min' },
          { k: 'Cardiac cycle duration', v: '~0.8 s' },
          { k: 'Blood pressure', v: '<b>120 over 80 mmHg</b> (systolic/diastolic)' },
          { k: 'Pulse pressure', v: '~40 mmHg (120 − 80)' },
          { k: 'Hypertension threshold', v: '<b>≥ 140 over 90 mmHg</b>, sustained' },
          { k: 'Stroke volume (resting)', v: '~70 mL per beat' },
        ],
      },
      {
        t: 'p',
        html: 'Cardiac output (see Key processes and mechanisms) averages ~5 L/min, and the SA node’s own intrinsic rate (~90–100/min) is normally reined in by the vagus nerve at rest. Blood pressure is measured with a <b>sphygmomanometer</b>, while the heart sounds themselves are heard through a <b>stethoscope</b>. A useful flow fact: the velocity of blood is <b>lowest in the capillaries</b>, precisely because their combined cross-sectional surface area is the largest of any vessel type; slow flow there gives time for exchange.',
      },
      { t: 'fig', id: 'b11-15-fig-15.6' },

      { t: 'part', title: 'Key processes and mechanisms' },
      {
        t: 'proc',
        title: '(a) The Cardiac Cycle: step by step',
        steps: [
          '<b>Joint diastole:</b> all four chambers relax; the AV valves are open and semilunar valves shut, so blood pours from the venae cavae and pulmonary veins through the atria into the ventricles. Most ventricular filling happens passively in this phase, before the atria even contract.',
          '<b>Atrial systole:</b> the SA node fires; the atria contract and top up the ventricles with the last ~30% of blood.',
          '<b>Ventricular systole:</b> the ventricles contract; the AV valves slam shut (<b>“Lubb”</b>, S1). Pressure builds with all valves momentarily closed (<b>isovolumetric</b> phase), then the semilunar valves open and blood is ejected into the aorta and pulmonary artery.',
          '<b>Ventricular diastole:</b> the ventricles relax; the semilunar valves close (<b>“Dub”</b>, S2); pressure falls until the AV valves reopen and refilling begins again.',
        ],
      },
      {
        t: 'p',
        html: 'The heart’s inner lining, the <b>endocardium</b>, is continuous with the endothelium of the great vessels, giving blood a smooth, friction-free path. Outside it lies the thick contractile <b>myocardium</b> (cardiac muscle) and, on the surface, the <b>epicardium</b>; together these three layers make up the heart wall.',
      },
      { t: 'p', html: '<b>(b) Regulation of Cardiac Activity</b>' },
      {
        t: 'p',
        html: 'Although the beat is generated within the heart, its rate and force are tuned by the <b>cardiac centre in the medulla oblongata</b>, acting through the <b>autonomic nervous system (ANS)</b>:<br>• <b>Sympathetic</b> nerves <b>increase</b> the heart rate and the strength of ventricular contraction, raising <b>cardiac output</b>. Adrenaline from the <b>adrenal medulla</b> reinforces this during stress or exercise.<br>• <b>Parasympathetic (vagus)</b> nerves <b>decrease</b> the heart rate and slow impulse conduction, lowering cardiac output; at rest the parasympathetic effect dominates.',
      },
      {
        t: 'formula',
        kicker: 'Cardiac output',
        main: 'Cardiac output = Stroke volume × Heart rate',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Because the SA node is intrinsic, this whole control system is modulatory, proof being that a denervated transplanted heart keeps beating. This balance is visible at rest: the SA node’s own pace is roughly 90–100 per minute, yet the resting heart settles near 70–75 because the parasympathetic (vagus) brake dominates. The moment you sprint for a bus, the sympathetic accelerator plus a surge of adrenaline lifts both heart rate and stroke volume, so cardiac output can rise several-fold to feed the working muscles. Then, as you settle, the vagus quietly throttles it back down.',
      },
      { t: 'p', html: '<b>(c) Double Circulation: the dynamic view</b>' },
      {
        t: 'p',
        html: 'Each heartbeat drives blood through the heart twice: once through the <b>pulmonary</b> loop (right ventricle → lungs → left atrium) and once through the <b>systemic</b> loop (left ventricle → body → right atrium), so a 72-beat minute completes <b>72 double circulations</b>.',
      },
      {
        t: 'p',
        html: 'The advantage of the <b>complete partition</b> of the ventricles in crocodiles, birds and mammals is that oxygenated and deoxygenated blood never mix, giving an efficient oxygen supply that supports their high metabolic rate. Contrast this with a fish’s <b>single circulation</b>, where blood makes only one pass through the heart per circuit; and note a defining rule of the mammalian plan: to reach the <b>left</b> side of the heart, blood must first pass through the <b>lungs</b>. This is what guarantees that the systemic circuit carries freshly oxygenated blood (in the adult; the foetus bypasses the lungs through shunts).',
      },
      { t: 'p', html: '<b>(d) Special Vascular Routes</b>' },
      {
        t: 'p',
        html: '• <b>Hepatic portal system:</b> a unique vessel network carrying blood from the <b>digestive tract to the liver</b> before it returns to the heart; present in all vertebrates.<br>• <b>Coronary circulation:</b> the dedicated supply to the heart muscle itself; the <b>coronary sinus</b> returns this deoxygenated blood to the right atrium.',
      },
      {
        t: 'p',
        html: 'The hepatic portal system matters because it routes nutrient-laden blood from the gut <b>through the liver first</b>, letting the liver process, store, and detoxify absorbed substances before they reach the rest of the body. Clinically, the heart’s two prominent sounds and its ECG trace are diagnostic windows: muffled or unclear sounds point to <b>leaky valves</b>, while an abnormal ECG flags problems in rhythm or conduction, which is why both are routine checks for circulatory health.',
      },
      { t: 'p', html: '<b>(e) Disorders of the Circulatory System</b>' },
      {
        t: 'p',
        html: '• <b>Hypertension:</b> sustained blood pressure of <b>140 over 90 mmHg or higher</b>; strains the heart and damages vital organs like the brain and kidneys (a very high reading, for example above 180 over 120, is dangerous and can cause a stroke).<br>• <b>Coronary Artery Disease (CAD) / atherosclerosis:</b> the coronary-artery lumen narrows from deposits of <b>calcium, fat, cholesterol and fibrous tissue</b>, throttling blood supply to the heart muscle. If a narrowed artery becomes fully blocked, the starved muscle is damaged: a heart attack.<br>• <b>Angina pectoris:</b> acute <b>chest pain</b> when the heart muscle gets too little oxygen; it often eases with rest, and hypertension can bring it on.<br>• <b>Heart failure:</b> the heart is unable to pump effectively enough to meet the body’s needs (often “congestive,” with lung congestion): <b>not</b> the same as cardiac arrest.<br>• <b>Heart attack (myocardial infarction):</b> heart muscle suddenly damaged by an interrupted blood supply.<br>• <b>Murmur:</b> an abnormal sound from defective heart valves (a leaking or narrowed valve) whose improper closure lets blood leak backward.',
      },
      { t: 'fig', id: 'b11-15-fig-15.7' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A person has a stroke volume of 70 mL and a heart rate of 72 beats per minute. Calculate the cardiac output, and state its usual resting value.',
        steps: [
          '<b>Solution.</b> Cardiac output = stroke volume × heart rate.',
          'CO = 70 mL × 72 min<sup>−1</sup>',
          'This ~5 L/min is the typical resting cardiac output of a healthy adult.',
        ],
        ans: '5040 mL min<sup>−1</sup> ≈ 5 L/min',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '“Heart failure means the heart has stopped beating.” A student marks TRUE. Spot the error.',
        steps: [
          '<b>Solution.</b> <b>False. Heart failure</b> = the heart still beats but pumps too weakly to meet the body’s needs. The complete stoppage of the heartbeat is <b>cardiac arrest</b>; sudden muscle damage from blocked supply is a <b>heart attack (MI)</b>. Speed rule: failure = weak pump, arrest = no pump, attack = damaged muscle.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET Level',
        q: 'Match the disorder with its description: A. Hypertension B. CAD C. Angina pectoris D. Murmur (i) chest pain from inadequate O<sub>2</sub> to heart muscle (ii) BP ≥ 140 over 90 mmHg (iii) abnormal sound from leaky valves (iv) atherosclerotic narrowing of coronary arteries',
        steps: ['<b>Solution.</b> A–(ii), B–(iv), C–(i), D–(iii).'],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty / Assertion–Reason',
        q: 'Assertion (A): A heart removed from the body and kept in suitable conditions continues to beat for a while. Reason (R): The human heart is myogenic, its rhythm initiated by the SA node within the cardiac muscle. <b>(a)</b> Both true, R explains A <b>(b)</b> Both true, R not the explanation <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Solution. (a).</b> Because the impulse arises intrinsically in the SA node (myogenic heart), the heart does not depend on external nerves to beat, so an isolated, properly maintained heart keeps contracting. R is the correct mechanism for A. (This is also why denervated transplanted hearts function.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three phases of the cardiac cycle in order and state which valves are open during joint diastole.',
            a: 'Atrial systole → ventricular systole → joint diastole; during joint diastole the AV (tricuspid + bicuspid) valves are open, semilunar valves closed.',
          },
          { q: '[CUET] What do the P wave and the T wave of an ECG represent?', a: 'P = atrial depolarisation; T = ventricular repolarisation.' },
          {
            q: '[NEET] Name the brain centre that regulates the heart and the two divisions of the ANS it works through, stating the effect of each.',
            a: 'Cardiac centre in the medulla oblongata; sympathetic (↑ rate, ↑ contraction force, ↑ output) and parasympathetic/vagus (↓ rate, ↓ output).',
          },
          {
            q: '[NEET] Differentiate cardiac arrest, heart failure, and myocardial infarction.',
            a: 'Cardiac arrest = heart stops completely; heart failure = beats but pumps too weakly; MI/heart attack = heart muscle damaged by sudden loss of blood supply.',
          },
          {
            q: '[NEET High-Difficulty] A patient’s sustained BP reads 150 over 95 mmHg. Classify it, and name two organs it endangers.',
            a: 'Hypertension (≥140 over 90); endangers the brain and kidneys (also strains the heart).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The cardiac centre that regulates heart activity is located in the:',
        opts: [
          { label: 'Cerebrum', nudge: '<b>(a)</b>/<b>(b)</b> handle thought and balance, not autonomic heart control.' },
          { label: 'Cerebellum', nudge: '<b>(a)</b>/<b>(b)</b> handle thought and balance, not autonomic heart control.' },
          { label: 'Medulla oblongata', nudge: null },
          { label: 'Hypothalamus', nudge: '<b>(d)</b> Hypothalamus influences emotional heart-rate changes but the regulatory cardiac centre itself is in the medulla: a tempting near-miss.' },
        ],
        correct: 2,
        solution: 'Answer: <b>(c)</b> Medulla oblongata.',
      },
      {
        t: 'mcq',
        q: 'Stimulation of the sympathetic nerves to the heart will:',
        opts: [
          { label: 'decrease heart rate', nudge: '<b>(a)</b> is the parasympathetic effect: the classic reversal.' },
          { label: 'increase heart rate and cardiac output', nudge: null },
          { label: 'stop the heart', nudge: '<b>(c)</b> Sympathetic stimulation speeds the heart; it does not stop it.' },
          { label: 'have no effect (heart is myogenic)', nudge: '<b>(d)</b> Myogenic means nerves don’t start the beat, but they certainly modulate it: a subtle trap.' },
        ],
        correct: 1,
        solution: 'Answer: <b>(b)</b>.',
      },
      {
        t: 'mcq',
        q: 'The “Dub” (second heart sound) is produced by closure of the:',
        opts: [
          { label: 'tricuspid valve', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> all describe the AV valves, whose closure makes the “Lubb” (S1): picked by students who reverse the two sounds.' },
          { label: 'bicuspid valve', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> all describe the AV valves, whose closure makes the “Lubb” (S1): picked by students who reverse the two sounds.' },
          { label: 'AV valves', nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> all describe the AV valves, whose closure makes the “Lubb” (S1): picked by students who reverse the two sounds.' },
          { label: 'semilunar valves', nudge: null },
        ],
        correct: 3,
        solution: 'Answer: <b>(d)</b> Semilunar valves (at the start of ventricular diastole).',
      },
      {
        t: 'mcq',
        q: 'Coronary Artery Disease is caused by:',
        opts: [
          { label: 'leaky heart valves', nudge: '<b>(a)</b> causes a murmur, not CAD.' },
          { label: 'deposition of cholesterol, fat and calcium narrowing coronary arteries', nudge: null },
          { label: 'failure of the SA node', nudge: '<b>(c)</b> causes arrhythmia.' },
          { label: 'loss of plasma proteins', nudge: '<b>(d)</b> relates to plasma/oedema, unrelated to coronary narrowing.' },
        ],
        correct: 1,
        solution: 'Answer: <b>(b)</b>, i.e. atherosclerosis.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Arrest vs failure vs attack.</b> A commonly tested confusion (the book’s estimate from past papers, not official figures): arrest = no beat, failure = weak beat, attack (MI) = damaged muscle. Lock all three.',
          '<b>Lubb/Dub reversal.</b> S1 “Lubb” = AV valves close (systole begins); S2 “Dub” = semilunar valves close (diastole begins).',
          '<b>“Nerves start the heartbeat.”</b> Wrong: the heart is <b>myogenic</b>; the SA node starts it. Nerves only adjust the rate.',
          '<b>ECG waves.</b> P = atria depolarise, QRS = ventricles depolarise, T = ventricles repolarise. There is no wave for atrial repolarisation (it’s hidden in the QRS).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For cardiac output questions, just multiply (CO = SV × HR) and sanity-check against ~5 L/min. For regulation, remember <b>“Sympathetic Speeds, Parasympathetic Pauses.”</b> For the BP threshold, <b>140 over 90 is the hypertension line; 120 over 80 is ideal.</b>',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Cardiac cycle (~0.8 s, 72/min):</b> atrial systole → ventricular systole → joint diastole. Blood enters during diastole.', note: '' },
          { f: '<b>Heart sounds:</b> S1 “Lubb” = AV valves close (systole); S2 “Dub” = semilunar valves close (diastole).', note: '' },
          { f: '<b>ECG:</b> P = atrial depolarisation, QRS = ventricular depolarisation, T = ventricular repolarisation.', note: '' },
          { f: '<b>Cardiac output</b> = SV × HR ≈ 70 mL × 72 ≈ 5 L/min.', note: '' },
          { f: '<b>Regulation:</b> cardiac centre in <b>medulla</b> → ANS. Sympathetic ↑ (adrenaline reinforces); parasympathetic/vagus ↓ (dominant at rest). Heart is <b>myogenic</b>.', note: '' },
          { f: '<b>Double circulation:</b> 72 double-circuits/min; complete partition (crocodiles/birds/mammals) prevents oxy–deoxy mixing → efficient O<sub>2</sub> supply. (Pathway: see Topic 02.)', note: '' },
          { f: '<b>Portal/coronary:</b> hepatic portal = gut → liver (all vertebrates); coronary = supply to heart muscle.', note: '' },
          { f: '<b>Disorders:</b> Hypertension ≥140 over 90; CAD = atherosclerosis (Ca/fat/cholesterol narrowing); Angina = O<sub>2</sub>-starved chest pain; Heart failure = weak pump; MI = muscle damage; Cardiac arrest = full stop; Murmur = leaky valves.', note: '' },
        ],
        aids: ['<b>Mnemonics:</b> “Sympathetic Speeds, Parasympathetic Pauses”; Lubb = AV, Dub = semilunar.'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 913–914 ─────────────────────────
  {
    n: '04',
    title: 'Master Revision: Chapter 15 at a Glance',
    kalam: 'A single consolidated reference for the whole chapter.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A single consolidated reference for the whole chapter. If you have studied the three topics, this is your one-page recall sheet for the exam hall.',
      },

      { t: 'part', title: 'A. Blood: the fluid connective tissue' },
      {
        t: 'p',
        html: '• <b>Composition:</b> plasma (~55%) + formed elements (~45%, the haematocrit/PCV).<br>• <b>Plasma:</b> ~90–92% water, 6–8% proteins: <b>albumin</b> (osmotic balance), <b>globulins</b> (immunity), <b>fibrinogen</b> (clotting); plus ions, glucose, amino acids, hormones, wastes. <b>Serum = plasma − clotting factors (mainly fibrinogen).</b><br>• <b>RBCs:</b> 5–5.5 million/mm<sup>3</sup>; biconcave, enucleate; Hb <b>12–16 g/100 mL</b>; made in red bone marrow; lifespan <b>120 days</b>; destroyed in the <b>spleen</b>.<br>• <b>WBCs:</b> 6,000–8,000/mm<sup>3</sup>. Neutrophils 60–65% (phagocyte) > Lymphocytes 20–25% (immunity) > Monocytes 6–8% (phagocyte→macrophage) > Eosinophils 2–3% (allergy) > Basophils 0.5–1% (histamine/serotonin/heparin). Move by <b>diapedesis</b>.<br>• <b>Platelets:</b> 1.5–3.5 lakh/mm<sup>3</sup>; from megakaryocytes; trigger clotting.',
      },

      { t: 'part', title: 'B. Blood groups' },
      {
        t: 'table',
        title: null,
        head: ['Group', 'Antigen (RBC)', 'Antibody (plasma)', 'Donate to', 'Receive from'],
        rows: [
          ['A', 'A', 'anti-B', 'A, AB', 'A, O'],
          ['B', 'B', 'anti-A', 'B, AB', 'B, O'],
          ['AB', 'A, B', 'none', 'AB', 'all'],
          ['O', 'none', 'anti-A, anti-B', 'all', 'O'],
        ],
      },
      {
        t: 'p',
        html: '<b>O<sup>−</sup> = universal donor; AB<sup>+</sup> = universal recipient.</b> Rh<sup>−</sup> mother × Rh<sup>+</sup> foetus → <b>erythroblastosis foetalis</b>; prevented with <b>anti-Rh (anti-D)</b> after the first delivery.',
      },

      { t: 'part', title: 'C. Coagulation (clotting)' },
      {
        t: 'p',
        html: '<b>Injury → vascular spasm → platelet plug → prothrombinase (with Ca<sup>2+</sup>) → prothrombin → thrombin → fibrinogen → fibrin clot.</b><br><br>Needs <b>Ca<sup>2+</sup></b> and <b>vitamin K</b>. Natural anticoagulant = <b>heparin</b>. Haemophilia: A = factor <b>VIII</b>, B = factor <b>IX</b>.',
      },

      { t: 'part', title: 'D. Heart: structure and conduction' },
      {
        t: 'p',
        html: '• 4 chambers (RA, RV, LA, LV); <b>mesodermal</b>, fist-sized, in the thoracic cavity, in a <b>pericardium</b>.<br>• Valves: <b>tricuspid</b> (RA→RV), <b>bicuspid/mitral</b> (LA→LV), <b>semilunar</b> (aortic + pulmonary). Chordae tendineae anchor AV cusps.<br>• Conduction: SA node → AV node → Bundle of His → Purkinje. <b>SA node = pacemaker</b> (resting heart 70–75/min). Heart is <b>myogenic</b>.',
      },

      { t: 'part', title: 'E. Cardiac cycle, sounds & ECG' },
      {
        t: 'p',
        html: '• Cycle (~<b>0.8 s</b>, 72/min): atrial systole → ventricular systole → joint diastole.<br>• Sounds: <b>S1 “Lubb”</b> = AV valves close (systole); <b>S2 “Dub”</b> = semilunar valves close (diastole).<br>• ECG: <b>P</b> = atrial depolarisation, <b>QRS</b> = ventricular depolarisation, <b>T</b> = ventricular repolarisation.<br>• <b>Cardiac output</b> = SV × HR ≈ 70 mL × 72 ≈ 5 L/min.',
      },

      { t: 'part', title: 'F. Circulation pathways' },
      {
        t: 'p',
        html: '• <b>Open</b> (arthropods, molluscs) vs <b>closed</b> (annelids, chordates; usually more efficient).<br>• <b>Single</b> (fish, 2-ch) vs <b>double</b> (amphibian/most reptiles 3-ch incomplete; crocodile/bird/mammal 4-ch complete).<br>• <b>Double circulation:</b> Pulmonary (RV→lungs→LA) + Systemic (LV→body→RA) + coronary loop; 72 double-circuits/min.<br>• <b>Hepatic portal system:</b> gut → liver (processes nutrients first). <b>Coronary circulation:</b> supplies the heart muscle.',
      },

      { t: 'part', title: 'G. Regulation and disorders' },
      {
        t: 'p',
        html: '• <b>Regulation:</b> cardiac centre in the <b>medulla oblongata</b> → ANS. <b>Sympathetic ↑</b> rate/force/output (adrenaline reinforces); <b>parasympathetic/vagus ↓</b> (dominant at rest).<br>• <b>Disorders: Hypertension</b> ≥140 over 90 mmHg; <b>CAD/atherosclerosis</b> (Ca/fat/cholesterol narrow coronary arteries); <b>Angina pectoris</b> (O<sub>2</sub>-starved chest pain); <b>Heart failure</b> (weak pump), distinct from <b>cardiac arrest</b> (full stop) and <b>heart attack/MI</b> (muscle damage).',
      },

      { t: 'part', title: 'H. Must-remember mnemonics and normal values' },
      {
        t: 'p',
        html: '• Clotting order: Some People Think Fast (<b>S</b>pasm → <b>P</b>rothrombinase → <b>T</b>hrombin → <b>F</b>ibrin).<br>• Vessels: pulmonary <b>A</b>rtery = <b>A</b>way to lungs = deoxygenated.<br>• Regulation: Sympathetic Speeds, Parasympathetic Pauses.<br>• Sounds: Lubb = AV valves, Dub = semilunar valves.<br>• Numbers to lock: <b>BP 120 over 80</b> (ideal), <b>≥140 over 90</b> (hypertension); <b>HR 72/min</b>; <b>cycle 0.8 s</b>; <b>CO ≈ 5 L/min</b>; <b>Hb 12–16 g/100 mL</b>; <b>RBC life 120 days</b>.',
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 915–918 ─────────────────────────
  {
    n: 'A',
    title: 'Clotting Factors by Name and Number',
    extra: true,
    kalam: 'The chapter presents the clotting cascade in four steps: a trigger (platelet factor 3 and tissue thromboplastin), formation of prothrombinase, thrombin from prothrombin, and fibrin from fibrinogen.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the composition of blood, the clotting sequence, the heart’s plumbing and conduction, the cardiac cycle, and the major disorders. Eight examinable patterns are still standing outside the door, and each one demands factual detail the chapter intentionally leaves out. Additional topic A numbers every clotting factor (I to XIII) and writes out the intrinsic and extrinsic pathways factor by factor; the chapter names both pathways and a few factors but not the full list. Additional topic B reconstructs the maturation chains of the red cells, platelets, granulocytes and monocytes (the lymphocyte line is given only as B cells from the marrow and T cells via the thymus), plus the erythropoietin trigger the chapter never names. Additional topic C opens the blood-pressure thermostat: baroreceptors, the renin-angiotensin-aldosterone system, and ADH, all of which NEET can ask by name (the book’s estimate from past papers, not official figures). Additional topic D takes the cardiac output formula the chapter states as CO = SV × HR and shows exactly what changes during exercise and why: the Frank-Starling mechanism and sympathetic surge that boards expect you to connect. Additional topic E gives the Rh factor its missing genetics: inheritance, allele notation, and the step-by-step sensitisation sequence with its timings, which the chapter gives only briefly. Additional topic F maps which body regions each of the two lymphatic ducts drains, a direct NEET recall question. Additional topic G classifies anaemia by cause rather than by symptom alone, a distinction NEET can test in match-the-column. Additional topic H sets haemophilia and thrombocytopenia, which the chapter describes only briefly, beside von Willebrand disease, and gives the normal values and meaning of bleeding time and clotting time, two tests NEET can ask about.',
      },
      {
        t: 'p',
        html: 'The chapter presents the clotting cascade in four steps: a trigger (platelet factor 3 and tissue thromboplastin), formation of prothrombinase, thrombin from prothrombin, and fibrin from fibrinogen. That is the correct skeleton of the final common pathway, but NEET and CBSE can ask for the numbered factors that feed into it (the book’s estimate from past papers, not official figures). Twelve numbered factors exist (I through XIII, factor VI having turned out to be an old name for activated factor V, Va, so it is no longer listed as a separate factor). The cascade splits into an intrinsic pathway (activated by factors inside the blood) and an extrinsic pathway (activated by tissue thromboplastin released from damaged tissue). Both converge at factor X and then follow the common pathway.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Standard list of factors.</b> The numbered factors are:' },
      {
        t: 'table',
        title: null,
        head: ['Number', 'Name', 'Role'],
        rows: [
          ['I', 'Fibrinogen', 'Converted to fibrin by thrombin'],
          ['II', 'Prothrombin', 'Converted to thrombin by prothrombinase'],
          ['III', 'Tissue thromboplastin (tissue factor)', 'Initiates extrinsic pathway'],
          ['IV', 'Calcium ions (Ca<sup>2+</sup>)', 'Needed at several steps of the cascade'],
          ['V', 'Proaccelerin (labile factor)', 'Cofactor in prothrombinase formation'],
          ['VI', '(old name for activated factor V: not listed separately)', ''],
          ['VII', 'Proconvertin (stable factor)', 'Activates factor X in extrinsic pathway'],
          ['VIII', 'Antihaemophilic factor A', 'Deficient in Haemophilia A'],
          ['IX', 'Christmas factor (antihaemophilic factor B)', 'Deficient in Haemophilia B'],
          ['X', 'Stuart–Prower factor', 'Activated X (Xa), with Va, forms prothrombinase, which converts prothrombin to thrombin'],
          ['XI', 'Plasma thromboplastin antecedent', 'Intrinsic pathway; activated by XII'],
          ['XII', 'Hageman factor', 'Contact activation; initiates intrinsic pathway'],
          ['XIII', 'Fibrin-stabilising factor', 'Cross-links fibrin strands'],
        ],
      },
      {
        t: 'p',
        html: '<b>Intrinsic pathway:</b> XII → XI → IX (+VIII) → X (+V) → II → I.<br><b>Extrinsic pathway:</b> III → VII → X (+V) → II → I.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identifying a Clotting Factor.</b> A patient with Haemophilia A is deficient in which numbered clotting factor, and what is its position in the intrinsic pathway?',
        steps: [
          '<b>Solution.</b> Haemophilia A is factor VIII deficiency. In the intrinsic pathway, factor VIII acts as a cofactor for factor IXa (Christmas factor): together with Ca<sup>2+</sup> and phospholipids, they convert factor X to its activated form (Xa). Factor VIII therefore occupies the position between factor IX and factor X in the intrinsic cascade. (The pathway runs: XII → XI → IX (+VIII) → X (+V) → II → I.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Distinguishing Intrinsic from Extrinsic Pathway.</b> Which of the following factors is unique to the extrinsic pathway? <b>(a)</b> Factor V <b>(b)</b> Factor VII <b>(c)</b> Factor VIII <b>(d)</b> Factor X',
        steps: [
          '<b>Solution.</b> (b) Factor VII. The extrinsic pathway is initiated by tissue factor (factor III) binding to factor VII, which then activates factor X directly. Factor V belongs to the common pathway, where it is a cofactor in prothrombinase; factor VIII is intrinsic only; factor X is common to both. The extrinsic pathway is faster (completes in seconds) and is tested in PT (prothrombin time), a clinical coagulation test.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '<b>Why is Calcium Required at Multiple Steps?</b> Calcium ions (factor IV) are listed as an essential clotting factor. Name the three stages of the cascade where Ca<sup>2+</sup> is specifically required, and explain why citrate anticoagulant works by chelating calcium.',
        steps: [
          '<b>Solution.</b> Ca<sup>2+</sup> is required at: (1) the formation of prothrombinase (converging point of intrinsic and extrinsic pathways), (2) the conversion of prothrombin to thrombin by prothrombinase, and (3) the activation of fibrin-stabilising factor XIII, which cross-links the fibrin strands. Citrate binds (chelates) free Ca<sup>2+</sup> ions in the plasma sample, preventing them from participating in these steps and keeping the blood fluid in the test tube. (In the body, the citrate in a routine transfusion is quickly metabolised and plasma Ca<sup>2+</sup> is restored from bone and diet under PTH and vitamin D control; very rapid or massive transfusion can still lower plasma calcium.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which clotting factor is fibrin-stabilising factor, and what does it do?',
            a: 'Factor XIII: cross-links adjacent fibrin strands to form a stable, insoluble clot mesh. Without it, clots form but are unstable and break down prematurely.',
          },
          {
            q: '[CBSE] Arrange in sequence the intrinsic pathway: Factor IX, Factor XII, Factor VIII, Factor X (XI also belongs in the line).',
            a: 'XII → XI → IX (+VIII) → X. (XII activates XI; XI activates IX; IXa with its cofactor VIII activates X.)',
          },
          {
            q: '[NEET] A lab test called PT (prothrombin time) measures the extrinsic pathway. Which single factor deficiency would most affect PT result?',
            a: 'Factor VII (proconvertin). PT specifically tests the extrinsic pathway initiated by tissue factor (III) and factor VII. A deficiency in factor VII prolongs PT disproportionately.',
          },
          {
            q: '[CUET] Why is factor VI no longer listed as a separate clotting factor?',
            a: 'Factor VI was once the name given to activated factor V (Va), so it is the same substance as Va and is no longer listed as a separate factor.',
          },
          {
            q: '[NEET High-Difficulty] A patient with Haemophilia B has a defective Christmas factor (IX). Which pathway is impaired, and why is the bleeding time still normal when the platelet count is normal?',
            a: 'The intrinsic pathway is impaired (factor IX is part of the intrinsic pathway only), so the clotting time is prolonged. Bleeding time, however, measures the platelet plug and vasoconstriction, which do not need factor IX; so with a normal platelet count the bleeding time is normal. The defect shows up later, when the fibrin mesh needed to stabilise the plug fails to form, giving delayed, deep (joint and muscle) bleeding.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 918–920 ─────────────────────────
  {
    n: 'B',
    title: 'Haemopoiesis: The Full Cell Lineages',
    extra: true,
    kalam: 'All blood cells arise from a common pluripotent haematopoietic stem cell (HSC) in the red bone marrow.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter tells you that blood cells are made in the red bone marrow, that RBCs live 120 days and are destroyed in the spleen, and that WBCs fight infection. What it does not give you is the maturation chain of the main cell lines: the intermediate stages between the stem cell and the functional mature cell. NEET can ask these by name in stage-identification questions. What it gives is the red cell, platelet, granulocyte and monocyte lines; the lymphocyte line is given only as B cells from the marrow and T cells via the thymus.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Haemopoiesis overview.</b> All blood cells arise from a common haematopoietic stem cell (HSC; the book calls it pluripotent, usually called multipotent) in the red bone marrow. The stem cell gives rise to two main lineages:<br>• <b>Myeloid lineage</b> → erythrocytes, granulocytes (neutrophils, eosinophils, basophils), monocytes, platelets<br>• <b>Lymphoid lineage</b> → B-lymphocytes and T-lymphocytes (thymus involvement for T-cells)',
      },
      {
        t: 'p',
        html: '<b>RBC (erythroid) maturation sequence:</b><br>HSC → Common myeloid progenitor →<br>Proerythroblast → Basophilic erythroblast →<br>Polychromatic erythroblast → Orthochromatic erythroblast →<br>Reticulocyte → Erythrocyte (mature RBC)',
      },
      {
        t: 'p',
        html: 'Key changes at each stage: nucleus condenses and is expelled (between orthochromatic erythroblast and reticulocyte); haemoglobin accumulates; the reticulocyte still holds some ribosomal RNA and a few mitochondria, which are lost as it becomes the mature, biconcave erythrocyte.',
      },
      {
        t: 'p',
        html: '<b>Platelet formation:</b><br>HSC → Common myeloid progenitor →<br>Megakaryoblast → Promegakaryocyte →<br>Megakaryocyte → Platelets (cell fragments)',
      },
      {
        t: 'p',
        html: 'Megakaryocytes are enormous cells (up to 100 μm) in bone marrow that extend proplatelet extensions into marrow sinusoids; platelets shed from these extensions.',
      },
      {
        t: 'p',
        html: '<b>WBC: granulocyte series:</b><br>HSC → Common myeloid progenitor →<br>Myeloblast → Promyelocyte →<br>Myelocyte → Metamyelocyte →<br>Band cell → Segmented neutrophil / eosinophil / basophil',
      },
      {
        t: 'p',
        html: '<b>WBC: monocyte series:</b><br>HSC → Common myeloid progenitor →<br>Monoblast → Promonocyte →<br>Monocyte → Macrophage (tissue)',
      },
      {
        t: 'p',
        html: '<b>Hormonal regulation of RBC production: erythropoietin (EPO).</b> The kidney (and to a lesser extent the liver) secretes erythropoietin in response to low oxygen tension (hypoxia). EPO acts on bone marrow to: (1) increase the proliferation of proerythroblasts, (2) accelerate the release of reticulocytes into the blood. Recombinant EPO is used clinically in anaemia of chronic kidney disease.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identifying the Stage of RBC Maturation.</b> A blood smear shows cells that still contain a network of ribosomal RNA (visible on staining) and no nucleus. These are: <b>(a)</b> erythroblasts <b>(b)</b> reticulocytes <b>(c)</b> erythrocytes <b>(d)</b> normoblasts',
        steps: [
          '<b>Solution.</b> (b) Reticulocytes. Reticulocytes are immature RBCs that have just expelled their nucleus but still retain residual ribosomal RNA, which gives a reticular (net-like) staining pattern with new methylene blue. Erythrocytes are fully mature and lack RNA. Erythroblasts and normoblasts are nucleated precursors. Clinically, a raised reticulocyte count indicates active erythropoiesis (the bone marrow is responding to blood loss or haemolysis).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Erythropoietin Source and Stimulus.</b> A mountaineer climbing to high altitude develops polycythaemia (increased RBC count) over several days. Name the hormone responsible, its normal source, and the stimulus that triggers its release.',
        steps: [
          '<b>Solution.</b> Erythropoietin (EPO), secreted primarily by the kidneys (peritubular capillary fibroblasts) and also by the liver. The stimulus is reduced arterial oxygen tension (hypoxia) detected by renal oxygen sensors. At high altitude, the lower PO<sub>2</sub> triggers increased EPO secretion, stimulating bone marrow to produce more RBCs: an adaptive polycythaemia that increases oxygen-carrying capacity. (Note: this response takes days because it requires stimulating the erythroid lineage from the proerythroblast stage onward.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Arrange in order: erythrocyte, reticulocyte, proerythroblast, orthochromatic erythroblast.', a: 'Proerythroblast → orthochromatic erythroblast → reticulocyte → erythrocyte.' },
          {
            q: '[NEET] From which cell does a macrophage primarily derive? <b>(a)</b> Neutrophil <b>(b)</b> Monocyte <b>(c)</b> Basophil <b>(d)</b> Lymphocyte',
            a: '(b) Monocyte. Monocytes circulate for 1–3 days then migrate into tissues where they differentiate into macrophages (for example alveolar macrophages in the lung and macrophages in the liver).',
          },
          {
            q: '[NEET] Name the hormone that stimulates RBC production, and state the condition that most directly triggers its release.',
            a: 'Erythropoietin (EPO); released in response to hypoxia (low blood oxygen tension), detected by the kidney.',
          },
          {
            q: '[CUET] Where in the body does T-lymphocyte maturation primarily occur?',
            a: 'The thymus gland. (B-lymphocytes mature in the bone marrow; T-lymphocytes migrate to and mature in the thymus, where they undergo positive and negative selection.)',
          },
          {
            q: '[NEET High-Difficulty] A bone marrow smear shows many cells with segmented (multilobed) nuclei and abundant cytoplasmic granules. Which cell line do they belong to, and which stage immediately precedes the segmented stage?',
            a: 'The granulocyte series (neutrophil, eosinophil or basophil). Segmented granulocytes are the mature form; the stage immediately before them is the band cell, which follows the metamyelocyte. Specific granules first become visible at the myelocyte stage.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 920–922 ─────────────────────────
  {
    n: 'C',
    title: 'Blood Pressure Regulation',
    extra: true,
    kalam: 'BP = Cardiac Output × Total Peripheral Resistance.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines hypertension as sustained BP ≥ 140 over 90 mmHg and names it as a disorder, but it does not explain how BP is normally kept within the 120 over 80 range. The mechanisms of BP regulation are a topic NEET can ask (the book’s estimate from past papers, not official figures). Two main systems operate here: neural (baroreceptors) and hormonal (the renin-angiotensin-aldosterone system, RAAS, and antidiuretic hormone, ADH). The chapter mentions none of these by name.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Blood pressure equation.</b> BP = Cardiac Output × Total Peripheral Resistance. Anything that changes CO or TPR changes BP.',
      },
      {
        t: 'p',
        html: '<b>Baroreceptor reflex (short-term, rapid).</b><br>• Baroreceptors are stretch-sensitive nerve endings in the carotid sinus (a widening at the carotid bifurcation, at the start of the internal carotid artery) and the aortic arch.<br>• A rise in BP stretches the vessel wall → increased baroreceptor firing → signal to the cardiac centre in the medulla → increased parasympathetic (vagus) output → heart slows and weakens; decreased sympathetic output → arterioles dilate → BP falls.<br>• A fall in BP does the reverse.',
      },
      {
        t: 'p',
        html: '<b>Renin-angiotensin-aldosterone system (RAAS) (medium-term).</b> When BP falls, the kidney releases renin. The cascade:<br>1. Renin (from juxtaglomerular cells of the kidney) converts angiotensinogen (circulating plasma protein from liver) → angiotensin I.<br>2. Angiotensin-converting enzyme (ACE, from lung endothelium) converts angiotensin I → angiotensin II.<br>3. Angiotensin II does three things: (a) potent vasoconstrictor → raises TPR → raises BP; (b) stimulates aldosterone release from adrenal cortex → kidney reabsorbs Na<sup>+</sup> and water → blood volume rises → BP rises; (c) stimulates ADH release from posterior pituitary.<br>4. Aldosterone acts on distal convoluted tubule → Na<sup>+</sup> reabsorption, K<sup>+</sup> excretion → water follows Na<sup>+</sup> → blood volume increases.',
      },
      {
        t: 'p',
        html: '<b>Antidiuretic hormone, ADH / vasopressin (short-to-medium term).</b><br>• Released from the posterior pituitary when: plasma osmolarity rises (detected by hypothalamic osmoreceptors) or blood volume falls significantly.<br>• Actions: (1) inserts aquaporin channels in collecting duct → water reabsorption → blood volume rises; (2) at high concentrations, causes widespread vasoconstriction → TPR rises → BP rises.',
      },
      {
        t: 'p',
        html: '<b>ADH and alcohol/caffeine.</b> Alcohol inhibits ADH release, so more urine is made and dehydration follows. Caffeine blocks adenosine receptors (adenosine is a vasodilator) and mildly stimulates sympathetic activity → slight BP rise.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Renin-Angiotensin Sequence.</b> Arrange in order: angiotensin I, renin, angiotensinogen, angiotensin II, aldosterone.',
        steps: [
          '<b>Solution.</b> Angiotensinogen → (renin) → angiotensin I → (ACE) → angiotensin II → aldosterone. Renin (released when BP falls) is the enzyme that converts the liver-produced angiotensinogen to angiotensin I; ACE converts angiotensin I to the active angiotensin II, which triggers aldosterone release from the adrenal cortex. Questions on what acts “downstream of renin” or “upstream of aldosterone” use this sequence.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Effect of ACE Inhibitor Drugs.</b> ACE inhibitors (e.g., enalapril) are used to treat hypertension. By blocking angiotensin-converting enzyme, these drugs reduce the levels of angiotensin II. Explain why this lowers blood pressure, naming all relevant mechanisms.',
        steps: [
          '<b>Solution.</b> Angiotensin II normally raises BP through three mechanisms: (1) direct vasoconstriction of arterioles (increasing TPR), (2) stimulation of aldosterone release (causing Na<sup>+</sup>/water retention and blood volume expansion), and (3) stimulation of ADH release (promoting water reabsorption). By reducing angiotensin II, an ACE inhibitor lowers TPR (arterial vasodilation), reduces aldosterone-driven fluid retention, and reduces ADH-mediated water reabsorption. All three changes reduce blood pressure. (Note: because ACE also breaks down bradykinin, ACE inhibitors allow bradykinin to accumulate: this contributes to vasodilation but also to the dry cough side-effect.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Name the sensory receptors in the carotid sinus and aortic arch that detect blood pressure changes.', a: 'Baroreceptors: stretch-sensitive nerve endings in the wall of the carotid sinus (a widening at the carotid bifurcation, at the start of the internal carotid artery) and the aortic arch.' },
          { q: '[NEET] Arrange in correct order: angiotensin I, ACE, angiotensin II, renin, angiotensinogen.', a: 'Angiotensinogen → angiotensin I → angiotensin II → aldosterone (with renin and ACE as the enzymes of the first two steps; angiotensin II also stimulates ADH).' },
          {
            q: '[NEET] A person is dehydrated. State the two hormones released in response and name the organ that secretes each.',
            a: '(1) Antidiuretic hormone (ADH / vasopressin): released from the posterior pituitary (made by hypothalamic neurons); (2) Aldosterone: secreted by the adrenal cortex (its release is triggered via the renin–angiotensin system). Both respond to low blood volume/pressure.',
          },
          {
            q: '[CUET] What is the primary role of aldosterone in blood pressure regulation?',
            a: 'Aldosterone acts on the distal convoluted tubule and collecting duct to increase Na<sup>+</sup> reabsorption (and K<sup>+</sup> secretion). Water follows Na<sup>+</sup> osmotically, expanding blood volume and raising blood pressure. It is a main hormonal regulator of blood volume, and so of longer-term blood pressure.',
          },
          {
            q: '[NEET High-Difficulty] A drug that blocks ADH receptors would have what effect on urine output and blood pressure?',
            a: 'Blocking ADH receptors would prevent water reabsorption in the collecting duct → large volumes of dilute urine produced → blood volume falls → blood pressure tends to fall. (This is the basis of a class of diuretics called “vaptans” used clinically in conditions of water overload such as SIADH.)',
          },
        ],
      },
    ],
  },
];
