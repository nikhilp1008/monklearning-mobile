import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 18, Neural Control and Coordination: Topics 03 and 04 and Additional topics A
 * and B, word for word from the Class 11 Biology Master Reference (pp. 1095–1115).
 *
 * Topic 03 Peripheral & Autonomic Nervous System, pp. 1095–1103 (Figure 18.4: caption p. 1097,
 * drawing p. 1098; Figure 18.5: caption p. 1100, drawing p. 1101). Topic 04 Reflex Action & Reflex
 * Arc, pp. 1104–1110 (Figure 18.6: caption p. 1106, drawing p. 1107). The shared opening of "Neural
 * Control and Coordination: Additional Topics" (p. 1111) heads Additional topic A's Introduction.
 * A Action Potential: The Complete Waveform and Refractory Periods, pp. 1111–1113 (its answers end
 * on p. 1113); B The Twelve Cranial Nerves, pp. 1113–1115 (its answers end on p. 1115, where
 * Addendum C begins).
 *
 * House rules: no em dashes (each is a colon, commas, a bracket or a full stop), every fraction
 * stacked, ions upright with real superscripts. This chapter prints options (a) to (d), kept as
 * printed. "Addendum A–F" is "Additional topic A–F".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 1095–1103 ─────────────────────────
  {
    n: '03',
    title: 'Peripheral & Autonomic Nervous System',
    kalam: 'The autonomic system itself has two opposing teams, like an accelerator and a brake on the same car.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> NEET regularly asks 1–2 questions distinguishing the somatic from the autonomic system, and the sympathetic from the parasympathetic, frequently as match-the-column or “which effect belongs to which division.” CBSE Boards favour 2–3 mark comparisons. CUET leans on classification trees and effect-matching. The fight-or-flight vs rest-and-digest contrast is a frequently tested idea here, and questions on neurotransmitters (noradrenaline vs acetylcholine) and the two-neuron autonomic pathway appear often enough to be worth locking down cold (the frequency words in this paragraph are the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'p',
        html: 'If the central nervous system is the national government in the skull and spine, the peripheral nervous system (PNS) is the entire field network of cables, couriers, and local offices that connect headquarters to every corner of the country. Anatomically, the human neural system is just two parts: the CNS (brain + spinal cord) and the PNS (everything else: all the nerves and ganglia that fan out from the CNS to the body).',
      },
      {
        t: 'p',
        html: 'Traffic on these cables runs both ways. Afferent fibres carry sensory reports in to the CNS; efferent fibres carry motor commands out to the muscles and glands. The efferent side is where the interesting split happens, because not all commands are alike.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Some of your actions are deliberate: lifting a cup, writing an exam. The commands for these go down the somatic neural system to your skeletal muscles, under conscious control. But a huge amount of your body runs without you ever thinking about it: your heart beating, your gut digesting lunch, your pupils adjusting to light. Those commands travel down the autonomic neural system to involuntary organs, smooth muscle, and glands. The dividing line is not where the nerve goes physically but whether you have a choice: you can decide to clench your fist (somatic), but you cannot decide to stop your stomach from churning (autonomic). The CNS issues both kinds of order; the PNS simply carries them to the right destination.',
      },
      {
        t: 'p',
        html: 'The autonomic system itself has two opposing teams, like an accelerator and a brake on the same car. The sympathetic division is the accelerator: it fires up the body for “fight or flight.” Picture the moment before your board exam: heart pounding, pupils wide, palms sweating, digestion shut down so energy goes to the muscles. The parasympathetic division is the brake: “rest and digest.” Picture yourself after a heavy lunch: heart slowing, digestion ramping up, body conserving energy. The two pull in opposite directions on the same organs, and your internal state at any moment is the balance between them.',
      },
      {
        t: 'p',
        html: 'A useful way to feel the difference: almost everything the sympathetic system does makes sense if you imagine being chased, and almost everything the parasympathetic system does makes sense if you imagine lying down for a nap. You will never need to memorise the long list of effects if you can reconstruct each one from that single picture.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The somatic/autonomic split is about the target and control, not the nerve type: the same spinal nerve can carry both somatic and autonomic fibres.<br>• “Involuntary” doesn’t mean “uncontrollable”: breathing runs automatically from centres in the brain stem, yet you can override it briefly. The categories describe the default mode.<br>• Sympathetic and parasympathetic are usually antagonistic, but not on every organ: some structures (like sweat glands or most blood vessels) receive mainly one division.<br>• The PNS has no information-processing of its own beyond simple relays (apart from the gut’s own enteric network); integration happens mainly in the CNS. The PNS is wiring, not brain: when you read that a nerve “controls” an organ, it really means it delivers the CNS’s instructions there.',
      },

      { t: 'part', title: 'Key structures, definitions and terminology' },
      {
        t: 'p',
        html: '<b>Human neural system</b> = Central (brain + spinal cord) + Peripheral nervous system.',
      },
      {
        t: 'p',
        html: '<b>Peripheral nervous system (PNS):</b> all the nerves and ganglia lying outside the CNS. It is made up of:<br>• <b>Cranial nerves:</b> 12 pairs arising from the brain, supplying mainly the head and neck (with the vagus reaching into the thorax and abdomen).<br>• <b>Spinal nerves:</b> 31 pairs arising from the spinal cord, supplying the rest of the body.',
      },
      {
        t: 'p',
        html: 'A <b>nerve</b> is a bundle of axons (fibres) wrapped in connective tissue; a <b>ganglion</b> is a cluster of nerve-cell bodies located outside the CNS: the PNS counterpart of a CNS nucleus. The dorsal root ganglion, which houses the cell bodies of incoming sensory neurons, is a classic example.',
      },
      {
        t: 'p',
        html: '<b>PNS nerve fibres, by direction:</b><br>• <b>Afferent (sensory) fibres:</b> transmit impulses from receptors/tissues to the CNS.<br>• <b>Efferent (motor) fibres:</b> transmit impulses from the CNS to effector organs (muscles, glands).',
      },
      {
        t: 'p',
        html: '<b>Two divisions of the PNS (functional):</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Division', 'Carries impulses to', 'Control'],
        rows: [
          ['Somatic neural system', 'Skeletal (voluntary) muscles', 'Voluntary'],
          ['Autonomic neural system (ANS)', 'Smooth muscle, cardiac muscle, glands (involuntary organs)', 'Involuntary'],
        ],
      },
      {
        t: 'p',
        html: 'The somatic system handles the muscles you consciously command: those attached to the skeleton that let you walk, write, or speak. The autonomic system runs silently in the background, adjusting the organs you never think about. Within the body wall and viscera, a visceral component carries fibres between the CNS and the internal organs; it includes the sensory fibres that report the state of the gut, heart, and other organs back to the CNS, as well as the motor fibres of the autonomic divisions that regulate them.',
      },
      {
        t: 'p',
        html: '<b>Two divisions of the ANS:</b><br>• <b>Sympathetic neural system:</b> the “fight-or-flight” division; prepares the body for emergency and energy expenditure.<br>• <b>Parasympathetic neural system:</b> the “rest-and-digest” division; calms the body and conserves energy.',
      },
      { t: 'fig', id: 'b11-18-fig-18.4' },

      { t: 'part', title: 'Key processes and mechanisms' },
      {
        t: 'p',
        html: '<b>3.1 Somatic vs autonomic pathways</b>',
      },
      {
        t: 'p',
        html: 'A somatic motor command is simple: a single motor neuron runs from the CNS straight to the skeletal muscle. One neuron, one jump, and the transmitter at the muscle is acetylcholine.',
      },
      {
        t: 'p',
        html: 'An autonomic command is a relay of two neurons: a preganglionic neuron leaves the CNS and synapses in a peripheral ganglion with a postganglionic neuron, which then reaches the target organ. This two-neuron, ganglion-containing arrangement is what structurally distinguishes the autonomic from the somatic pathway, and it is the reason an autonomic signal can be relayed, branched, and distributed to several organs at once: something the single-neuron somatic route cannot do.',
      },
      {
        t: 'p',
        html: '<b>3.2 Sympathetic vs parasympathetic: the antagonistic pair</b>',
      },
      {
        t: 'p',
        html: 'The two autonomic divisions differ in where they originate, where their ganglia sit, the chemical messenger they use, and the effects they produce. The sympathetic fibres emerge from the thoracolumbar region (the thoracic and upper lumbar segments of the spinal cord), and their ganglia usually form a chain close to the cord, hence typically short preganglionic and long postganglionic fibres. The parasympathetic fibres emerge from the craniosacral region (some cranial nerves, notably the vagus, plus the lowest sacral segments), and their ganglia lie close to or within the target organs, hence typically long preganglionic and short postganglionic fibres.',
      },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Sympathetic', 'Parasympathetic'],
        rows: [
          ['Outflow region', 'Thoracolumbar (middle of spinal cord)', 'Craniosacral (brain + lowest spinal cord)'],
          ['Preganglionic fibre', 'Short', 'Long'],
          ['Postganglionic fibre', 'Long', 'Short'],
          ['Main postganglionic transmitter', 'Noradrenaline (adrenergic)', 'Acetylcholine (cholinergic)'],
          ['Overall role', 'Fight or flight', 'Rest and digest'],
        ],
      },
      {
        t: 'p',
        html: '<b>Effects on representative organs (antagonistic):</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Organ', 'Sympathetic', 'Parasympathetic'],
        rows: [
          ['Heart rate', 'Increases', 'Decreases'],
          ['Pupil', 'Dilates', 'Constricts'],
          ['Bronchi (airways)', 'Dilate', 'Constrict'],
          ['Digestion / gut peristalsis', 'Inhibited', 'Stimulated'],
          ['Salivary glands', 'Reduce watery secretion', 'Stimulate secretion'],
          ['Urinary bladder', 'Relaxes (retains urine)', 'Contracts (empties)'],
          ['Blood glucose', 'Raised (glycogen broken down)', 'No major effect (digestion and storage favoured)'],
          ['Blood vessels to skeletal muscle', 'Dilate (more blood to muscle)', '–'],
        ],
      },
      {
        t: 'p',
        html: 'The principle to carry away: on most internal organs the two divisions act as opposing forces, and the organ’s moment-to-moment state is set by which division currently dominates. In a sudden fright the sympathetic surge wins: heart races, pupils widen, airways open, gut shuts down, and stored glycogen is mobilised for quick energy; once the danger passes, parasympathetic tone returns the body to baseline and restores digestion and energy storage.',
      },
      {
        t: 'p',
        html: '<b>Link to the endocrine system.</b> The sympathetic division does not act through nerves alone. It also stimulates the adrenal medulla to pour adrenaline (epinephrine) into the blood, broadcasting the fight-or-flight signal throughout the body as a hormone. This is one of the bridges from fast electrical control to slower, longer-lasting chemical control (the hypothalamus and pituitary are the other): the theme you will pick up in the next chapter on chemical coordination. (Note the homonym trap: the adrenal medulla is an endocrine gland, entirely different from the medulla oblongata of the brain.)',
      },
      {
        t: 'p',
        html: '<b>Dual innervation and tone.</b> Most visceral organs receive fibres from both divisions and are said to have dual innervation; their activity reflects the running balance, or “tone,” between the two. A few structures, however, are supplied mainly by one division: for example, the adrenal medulla and most sweat glands respond chiefly to sympathetic stimulation. This is why blanket statements like “the parasympathetic always opposes the sympathetic on every organ” are exam traps.',
      },
      {
        t: 'p',
        html: '<b>3.3 Putting it together: a worked scenario</b>',
      },
      {
        t: 'p',
        html: 'Trace one situation through the whole peripheral system and the divisions stop being abstract. You are walking home and a dog lunges at you:<br>1. Your eyes and ears (receptors) send afferent signals up to the CNS.<br>2. The brain registers threat and triggers a massive sympathetic discharge through the autonomic system.<br>3. Heart rate and blood pressure rise, pupils dilate, bronchi open, blood is shunted to skeletal muscles, the liver releases glucose, and the adrenal medulla floods the blood with adrenaline: your body is primed to run.<br>4. Simultaneously, you decide to run: the somatic system fires your skeletal leg muscles under voluntary control.<br>5. Once you are safe, parasympathetic activity gradually takes over: heart rate falls, digestion resumes, and the body returns to its resting baseline.',
      },
      {
        t: 'p',
        html: 'This single episode uses every branch of the PNS (afferent input, somatic voluntary output, and both autonomic divisions in sequence), which is exactly the kind of integrated reasoning higher-difficulty questions reward.',
      },
      { t: 'fig', id: 'b11-18-fig-18.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board: Short answer',
        q: 'Differentiate between the somatic and the autonomic neural systems on the basis of (i) the organs they supply and (ii) the type of control.',
        steps: [
          '<b>Reasoning:</b> (i) The somatic neural system relays impulses from the CNS to skeletal (voluntary) muscles, whereas the autonomic neural system relays impulses to smooth muscle, cardiac muscle, and glands: the involuntary organs. (ii) Somatic control is voluntary (you decide to move); autonomic control is involuntary (it runs automatically). A clean two-point answer scores full marks.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET: MCQ with reasoning / speed',
        q: 'A person suddenly frightened by a stray dog shows a racing heart and widely dilated pupils. Which division is dominant, and what is its chief postganglionic neurotransmitter? <b>(a)</b> Parasympathetic; acetylcholine <b>(b)</b> Sympathetic; noradrenaline <b>(c)</b> Somatic; acetylcholine <b>(d)</b> Sympathetic; acetylcholine',
        steps: [
          '<b>Reasoning:</b> Racing heart + dilated pupils = classic fight-or-flight = sympathetic, whose main postganglionic transmitter is noradrenaline → <b>(b)</b>. Speed elimination: parasympathetic <b>(a)</b> would slow the heart and constrict pupils; somatic <b>(c)</b> controls skeletal muscle, not the heart; <b>(d)</b> is the trap: right division but wrong transmitter (ACh is the parasympathetic one).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET: Match the column',
        q: 'Match each structure with its correct category.<br><b>Column I:</b> A. Brain and spinal cord; B. Cranial and spinal nerves; C. Pupil dilation; D. Acetylcholine.<br><b>Column II:</b> 1. Sympathetic effect; 2. Autonomic transmitter (parasympathetic); 3. Central nervous system; 4. Peripheral nervous system.',
        steps: [
          '<b>Reasoning:</b> Brain + spinal cord = CNS → A–3. Cranial + spinal nerves = PNS → B–4. Pupil dilation = sympathetic → C–1. Acetylcholine = parasympathetic transmitter → D–2.',
        ],
        ans: 'A–3, B–4, C–1, D–2',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty: Assertion–Reason',
        q: 'Assertion (A): An autonomic motor pathway involves two neurons, whereas a somatic motor pathway involves one. Reason (R): The autonomic pathway includes a synapse in a peripheral ganglion between a preganglionic and a postganglionic neuron. <b>(a)</b> Both A and R true, R correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning:</b> A is true: somatic = one motor neuron; autonomic = two. R is true: the autonomic relay synapses in a peripheral ganglion (preganglionic → postganglionic). And R is precisely why the autonomic pathway has two neurons → <b>(a)</b>. The trap is <b>(b)</b>: the ganglionic synapse is the structural reason for the two-neuron count, so R does explain A.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Name the two anatomical components of the peripheral nervous system.', a: 'Cranial nerves (from brain) and spinal nerves (from spinal cord).' },
          { q: '[NEET] Which system relays impulses from the CNS to skeletal muscles? (a) sympathetic (b) parasympathetic (c) somatic (d) autonomic', a: '(c).' },
          { q: '[CUET] State the “fight-or-flight” division of the ANS and one effect it has on the heart.', a: 'Sympathetic; it increases heart rate.' },
          { q: '[NEET] The main postganglionic neurotransmitter of the parasympathetic system is: (a) noradrenaline (b) acetylcholine (c) dopamine (d) GABA', a: '(b).' },
          {
            q: '[NEET assertion–reason] A: Sympathetic and parasympathetic divisions are antagonistic on the heart. R: The sympathetic increases heart rate while the parasympathetic decreases it. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A ganglion is best defined as: <b>(a)</b> a cluster of nerve-cell bodies within the CNS <b>(b)</b> a cluster of nerve-cell bodies outside the CNS <b>(c)</b> a bundle of axons inside the brain <b>(d)</b> the myelin sheath of a peripheral nerve',
        opts: [
          { label: 'a cluster of nerve-cell bodies within the CNS', nudge: '<b>(a)</b> describes a nucleus.' },
          { label: 'a cluster of nerve-cell bodies outside the CNS', nudge: null },
          { label: 'a bundle of axons inside the brain', nudge: '<b>(c)</b> describes a tract.' },
          { label: 'the myelin sheath of a peripheral nerve', nudge: '<b>(d)</b> confuses a covering with a cell cluster.' },
        ],
        correct: 1,
        solution: 'A ganglion is a cluster of cell bodies in the PNS; the CNS equivalent is a nucleus.',
      },
      {
        t: 'mcq',
        q: 'Which set of effects is entirely sympathetic? <b>(a)</b> heart rate up, pupil dilated, digestion inhibited <b>(b)</b> heart rate down, pupil constricted, digestion stimulated <b>(c)</b> heart rate up, pupil constricted, digestion stimulated <b>(d)</b> heart rate down, pupil dilated, digestion inhibited',
        opts: [
          { label: 'heart rate up, pupil dilated, digestion inhibited', nudge: null },
          { label: 'heart rate down, pupil constricted, digestion stimulated', nudge: '<b>(b)</b> is entirely parasympathetic.' },
          { label: 'heart rate up, pupil constricted, digestion stimulated', nudge: '<b>(c)</b> and <b>(d)</b> mix the two divisions, which is the common error.' },
          { label: 'heart rate down, pupil dilated, digestion inhibited', nudge: '<b>(c)</b> and <b>(d)</b> mix the two divisions, which is the common error.' },
        ],
        correct: 0,
        solution: 'All three are fight-or-flight responses.',
      },
      {
        t: 'mcq',
        q: 'The autonomic neural system controls: <b>(a)</b> skeletal muscles only <b>(b)</b> smooth muscle, cardiac muscle, and glands <b>(c)</b> sensory reception only <b>(d)</b> the cerebral cortex',
        opts: [
          { label: 'skeletal muscles only', nudge: '<b>(a)</b> is the somatic system.' },
          { label: 'smooth muscle, cardiac muscle, and glands', nudge: null },
          { label: 'sensory reception only', nudge: '<b>(c)</b> is afferent function.' },
          { label: 'the cerebral cortex', nudge: '<b>(d)</b> is part of the CNS, not an effector.' },
        ],
        correct: 1,
        solution: 'The ANS supplies involuntary effectors: smooth and cardiac muscle and glands.',
      },
      {
        t: 'mcq',
        q: 'Compared with the parasympathetic system, the sympathetic system typically has: <b>(a)</b> a long preganglionic and short postganglionic fibre <b>(b)</b> a short preganglionic and long postganglionic fibre <b>(c)</b> no ganglia at all <b>(d)</b> only afferent fibres',
        opts: [
          { label: 'a long preganglionic and short postganglionic fibre', nudge: '<b>(a)</b> describes the parasympathetic.' },
          { label: 'a short preganglionic and long postganglionic fibre', nudge: null },
          { label: 'no ganglia at all', nudge: '<b>(c)</b> and <b>(d)</b> contradict autonomic anatomy.' },
          { label: 'only afferent fibres', nudge: '<b>(c)</b> and <b>(d)</b> contradict autonomic anatomy.' },
        ],
        correct: 1,
        solution: 'Sympathetic ganglia lie near the cord, so the preganglionic fibre is short and the postganglionic long: the reverse of the parasympathetic arrangement.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Somatic ≠ sympathetic.</b> They start with the same letter and trip students constantly. Somatic = skeletal, voluntary; sympathetic = a division of the autonomic (involuntary) system.',
          '<b>Mixing transmitters.</b> Sympathetic postganglionic fibres mainly release noradrenaline (sweat glands are the cholinergic exception); parasympathetic postganglionic fibres release acetylcholine. A single swap loses the mark.',
          '<b>CNS vs PNS membership.</b> Brain and spinal cord are CNS; cranial and spinal nerves and the ganglia outside the brain and cord are PNS (the “basal ganglia” are nuclei inside the brain, so they are CNS despite the name).',
          '<b>“Antagonistic” misread as “identical.”</b> The two ANS divisions oppose each other; they don’t do the same thing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Anchor every autonomic question to one image: sympathetic = exam-hall panic, parasympathetic = post-lunch nap. Then read each organ effect off that picture; it resolves most match-the-column questions instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Human neural system = CNS (brain + spinal cord) + PNS.</b>', note: '' },
          { f: '<b>PNS = cranial nerves + spinal nerves;</b> fibres are <b>afferent (sensory, in)</b> and <b>efferent (motor, out)</b>. <b>Ganglion</b> = cell-body cluster outside CNS.', note: '' },
          { f: '<b>PNS functional split: Somatic</b> (→ skeletal muscle, voluntary) vs <b>Autonomic</b> (→ smooth/cardiac muscle + glands, involuntary).', note: '' },
          { f: '<b>ANS split: Sympathetic</b> (fight-or-flight, mainly noradrenaline, heart↑/pupil dilates/digestion↓) vs <b>Parasympathetic</b> (rest-and-digest, acetylcholine, heart↓/pupil constricts/digestion↑).', note: '' },
          { f: '<b>Pathways:</b> somatic = 1 motor neuron; autonomic = 2 neurons (preganglionic → ganglion → postganglionic).', note: '' },
        ],
        aids: [
          '<b>Mnemonics:</b> “<b>S</b>ympathetic = <b>S</b>cared/<b>S</b>peed-up”; “<b>P</b>arasympathetic = <b>P</b>eaceful”; “<b>Soma</b>tic = <b>Soma</b> (body) muscles you move.” Sympathetic = <b>thoracolumbar</b> outflow; parasympathetic = <b>craniosacral</b> outflow.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 1104–1110 ─────────────────────────
  {
    n: '04',
    title: 'Reflex Action & Reflex Arc',
    kalam: 'The reflex action is the event; the reflex arc is the wiring that makes it possible.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable 1-mark NEET question on the components or sequence of a reflex arc, and a frequent assertion–reason on “why the response precedes the sensation.” CBSE Boards ask a 2–3 mark definition-plus-diagram. CUET favours ordering the reflex-arc components (the book’s estimate from past papers, not official figures). It also ties the whole chapter together, reusing afferent/efferent neurons and the spinal cord from earlier in the chapter, so it is a high-return topic to revise last, as a synthesis of everything before it.',
      },
      {
        t: 'p',
        html: 'Touch a hot tawa by accident and your hand jerks back before you have even registered “that’s hot!” You did not decide to pull away: your body did it for you, faster than thought. That automatic, lightning-quick, protective response is a reflex action, and it is one of the most elegant pieces of engineering in the body.',
      },
      {
        t: 'p',
        html: 'The trick is that the message takes a shortcut. Normally a sensation travels all the way up to the brain, gets interpreted, and a decision comes back down: a round trip that costs precious time. For a burn or a falling object, that delay could mean injury. So evolution built an express lane: the signal goes only as far as the spinal cord, which fires back a motor command immediately, and the brain is merely informed afterwards. That is precisely why you feel the pain a fraction of a second after your hand has already moved.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a busy railway junction where most trains must go to the central station (the brain) for routing. But for emergencies, the local signalman at the junction (the spinal cord) is authorised to redirect a train immediately without waiting for head office. The fixed track this emergency train runs on, from the sensor, through the junction, to the action, is the reflex arc. The reflex action is the event; the reflex arc is the wiring that makes it possible.',
      },
      {
        t: 'p',
        html: 'This same wiring explains a doctor’s knee-jerk test: a tap on the tendon stretches the muscle, a sensory neuron carries that to the spinal cord, and a motor neuron instantly fires the muscle to contract: your lower leg kicks out, no thinking involved.',
      },
      {
        t: 'p',
        html: 'Reflexes are everywhere once you start noticing them. Your pupils shrink the instant a bright light hits them; you blink before a speck reaches your eye; you cough when something tickles your windpipe; your mouth waters before you have decided to eat. None of these are “decisions”: each is a pre-wired circuit doing its job faster and more reliably than conscious thought ever could. The body offloads its most time-critical and repetitive jobs onto these automatic circuits, freeing the conscious brain for everything else.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• A reflex is involuntary and stereotyped: the same stimulus usually produces the same response; it is not learned in the moment and is hard to prevent once triggered.<br>• “Doesn’t need the brain” means the brain is not needed to produce the response; the brain is still informed and may modulate or learn from it.<br>• Reflexes are mediated by the CNS (usually the spinal cord, sometimes the brain stem): they are not purely peripheral events.<br>• A reflex arc needs every component intact. Damage the sensory neuron, the cord, or the motor neuron, and the reflex fails: which is why physicians use reflexes to test neural integrity, and why a “lost” reflex is a meaningful warning sign rather than a trivial one.',
      },

      { t: 'part', title: 'Key structures, definitions and terminology' },
      {
        t: 'p',
        html: '<b>Reflex action:</b> a rapid, automatic, involuntary response to a stimulus, mediated by the central nervous system (most often the spinal cord) without the need for conscious thought.',
      },
      {
        t: 'p',
        html: '<b>Reflex arc:</b> the neural pathway followed by the impulse during a reflex action. It has five components, in order:<br>1. <b>Receptor:</b> detects the stimulus (e.g., a pain receptor in the skin).<br>2. <b>Afferent (sensory) neuron:</b> carries the impulse from the receptor to the CNS, entering through the dorsal root of the spinal nerve.<br>3. <b>CNS centre:</b> within the spinal cord (grey matter), where the signal is passed from the sensory to the motor side, through one or more interneurons in a polysynaptic arc or by a single direct synapse in a monosynaptic arc.<br>4. <b>Efferent (motor) neuron:</b> carries the command out from the CNS through the ventral root to the effector.<br>5. <b>Effector:</b> the muscle or gland that carries out the response.',
      },
      {
        t: 'p',
        html: '<b>Types of reflex arc:</b><br>• <b>Monosynaptic:</b> only a sensory and a motor neuron, with a single synapse between them (e.g., the knee-jerk stretch reflex).<br>• <b>Polysynaptic:</b> one or more interneurons lie between the sensory and motor neurons (e.g., the withdrawal reflex from a painful stimulus).',
      },
      {
        t: 'p',
        html: '<b>Classification by centre:</b><br>• <b>Spinal reflexes:</b> coordinated by the spinal cord (knee-jerk, withdrawal).<br>• <b>Cranial reflexes:</b> coordinated by the brain stem (blinking, pupillary, salivation).',
      },
      {
        t: 'p',
        html: '<b>Classification by origin:</b><br>• <b>Inborn (unconditioned) reflexes:</b> present from birth and inherited, such as the knee-jerk, blinking, sucking in infants, and withdrawal from pain. They need no prior learning.<br>• <b>Acquired (conditioned) reflexes:</b> developed through experience and association, such as the mouth watering at the sight or smell of food. These involve the brain and are built up over time.',
      },
      {
        t: 'p',
        html: '<b>Functional roles of reflexes:</b> many reflexes are protective (withdrawal from heat, blinking to shield the eye, coughing to clear the airway), some are postural (the stretch reflexes that keep you balanced and upright), and some are digestive or autonomic (salivation, pupillary adjustment to light).',
      },
      {
        t: 'p',
        html: '<b>Common examples of reflexes:</b> knee-jerk, withdrawal of the hand from a hot or sharp object, blinking, sneezing, coughing, the pupillary (light) reflex, the corneal reflex, and salivation when food enters the mouth.',
      },
      {
        t: 'p',
        html: '<b>Structural basis in the spinal cord.</b> The reflex arc maps neatly onto the anatomy of a spinal nerve. Each spinal nerve joins the cord by two roots: the <b>dorsal root</b>, which carries incoming sensory fibres (its cell bodies sitting in the dorsal root ganglion), and the <b>ventral root</b>, which carries outgoing motor fibres. Inside the cord, the synapses of the arc lie in the butterfly-shaped central grey matter. So a withdrawal reflex physically enters at the back of the cord, switches over in the grey matter, and exits at the front: a one-segment loop that never has to climb to the brain. Because the two kinds of fibre travel together once outside the cord, all spinal nerves are mixed nerves, carrying both sensory and motor traffic.',
      },
      { t: 'fig', id: 'b11-18-fig-18.6' },

      { t: 'part', title: 'Key processes and mechanisms' },
      {
        t: 'p',
        html: '<b>3.1 The reflex-arc sequence</b>',
      },
      {
        t: 'p',
        html: 'Trace a withdrawal reflex step by step, and the logic of the shortcut becomes clear:<br>1. <b>Stimulus & reception.</b> A noxious stimulus (heat, a pin) excites a receptor in the skin.<br>2. <b>Afferent conduction.</b> The receptor fires an impulse along the sensory neuron, which enters the spinal cord through the dorsal root.<br>3. <b>Central relay.</b> Inside the spinal cord’s grey matter, the sensory neuron synapses, directly onto a motor neuron (monosynaptic) or via one or more interneurons (polysynaptic).<br>4. <b>Efferent conduction.</b> The motor neuron carries the command out through the ventral root to the effector.<br>5. <b>Response.</b> The effector muscle contracts and the hand withdraws, all before the pain is consciously felt.<br>6. <b>Late notification.</b> A branch of the pathway also sends the signal up to the brain, which registers the pain after the protective action is complete.',
      },
      {
        t: 'p',
        html: 'Notice how each component is indispensable and non-interchangeable: the receptor alone cannot move the hand, and the motor neuron alone cannot sense the heat. The arc works only because the parts are arranged in this exact one-way sequence, each handing off to the next. This is also why the direction is fixed: the chemical synapses in the cord allow the impulse to travel only from sensory side to motor side, never backwards, so that a stimulus produces the correct, stereotyped response.',
      },
      {
        t: 'p',
        html: '<b>3.2 Monosynaptic vs polysynaptic: why two designs</b>',
      },
      {
        t: 'p',
        html: '• The <b>knee-jerk (stretch) reflex is monosynaptic:</b> the sensory neuron synapses directly on the motor neuron. Fewer synapses mean fewer delays, so the response is extremely fast: ideal for the rapid postural corrections this reflex provides. Step by step: a tap on the patellar tendon stretches the thigh muscle → a stretch receptor fires → the sensory neuron enters the cord and synapses straight onto the motor neuron → the motor neuron fires the same thigh muscle → the lower leg kicks forward. No interneuron, no thought.<br>• The <b>withdrawal reflex is polysynaptic:</b> interneurons sit in the middle, allowing the signal to be distributed (for example, to coordinate several muscles, to relax the opposing muscle, or to send the “informed afterwards” branch to the brain). The extra processing trades a little speed for a more complex, coordinated response.',
      },
      {
        t: 'p',
        html: '<b>3.3 Why the shortcut matters</b>',
      },
      {
        t: 'p',
        html: 'The reflex arc’s whole advantage is time saved by not routing through the higher brain. By completing the decision in the spinal cord, the body removes the long conduction delay to and from the cortex. This is survival engineering: for a hand on a flame, the milliseconds saved are the difference between a scare and a serious burn. The cortex’s later involvement allows you to learn from the event (next time you are more careful) without slowing the reflex itself.',
      },
      {
        t: 'p',
        html: '<b>3.4 Higher control and diagnostic value</b>',
      },
      {
        t: 'p',
        html: 'Although a reflex completes in the spinal cord, the brain is not entirely absent: higher centres can modulate reflexes: for example, you can partly suppress a flinch if you brace yourself for an injection, and practised athletes refine their postural reflexes. This top-down influence travels down the descending tracts and adjusts the sensitivity of the spinal circuit rather than replacing it. In other words, the spinal cord owns the basic reflex, but the brain holds a volume knob over it: able to amplify, dampen, or temporarily hold it in check, though never fast enough to stop the very first protective jerk.',
      },
      {
        t: 'p',
        html: 'Reflexes are also a clinical tool. Because a reflex fails if any component of its arc is damaged, doctors deliberately test them (the knee-jerk, the pupillary light reflex) to check whether the receptor, sensory neuron, spinal segment, motor neuron, and effector are all intact. An absent or exaggerated reflex points to where in the pathway a problem lies, which is why reflex testing is a standard part of a neurological examination.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board: Diagram / sequence',
        q: 'Arrange the components of a reflex arc in the correct order of impulse flow: motor neuron, receptor, effector, sensory neuron, spinal cord.',
        steps: [
          '<b>Reasoning:</b> Follow the signal from detection to response: a stimulus is first detected by the receptor, carried in by the sensory neuron, relayed in the spinal cord, sent out by the motor neuron, and acted on by the effector. Correct order: receptor → sensory neuron → spinal cord → motor neuron → effector.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET: MCQ with reasoning / speed',
        q: 'In a reflex arc, the impulse enters the spinal cord through the ____ root and the motor command leaves through the ____ root. <b>(a)</b> ventral; dorsal <b>(b)</b> dorsal; ventral <b>(c)</b> dorsal; dorsal <b>(d)</b> ventral; ventral',
        steps: [
          '<b>Reasoning:</b> Sensory (afferent) fibres enter via the dorsal root; motor (efferent) fibres exit via the ventral root → <b>(b)</b>. Speed memory: “Dorsal = Data in (sensory); Ventral = Vigorous-action out (motor).” Options <b>(a)</b>, <b>(c)</b>, <b>(d)</b> all violate this rule.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET: Match the column',
        q: 'Match each reflex-arc component with its role.<br><b>Column I:</b> A. Receptor; B. Sensory neuron; C. Motor neuron; D. Effector.<br><b>Column II:</b> 1. Carries impulse to the CNS; 2. Detects the stimulus; 3. Carries out the response; 4. Carries command from the CNS.',
        steps: [
          '<b>Reasoning:</b> Receptor detects → A–2. Sensory neuron carries in → B–1. Motor neuron carries out → C–4. Effector responds → D–3.',
        ],
        ans: 'A–2, B–1, C–4, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty: Assertion–Reason',
        q: 'Assertion (A): In a withdrawal reflex, the hand is pulled back before the person consciously feels the pain. Reason (R): The reflex response is completed at the level of the spinal cord, while the impulse reaches the brain only afterwards. <b>(a)</b> Both A and R true, R correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning:</b> A is true: the motor response precedes conscious sensation. R is true: the arc completes in the spinal cord; the brain is informed later. And R is exactly why A happens → <b>(a)</b>. The trap is <b>(b)</b>: students who think of pain and movement as simultaneous miss that the spinal shortcut is the mechanistic reason for the time gap.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Define reflex action and name the part of the CNS that coordinates most reflexes.', a: 'A rapid, automatic, involuntary response to a stimulus mediated by the CNS; the spinal cord.' },
          { q: '[NEET] The knee-jerk reflex is an example of a ____ reflex arc. (a) polysynaptic (b) monosynaptic (c) cranial (d) voluntary', a: '(b).' },
          { q: '[CUET] List the five components of a reflex arc in order.', a: 'Receptor → sensory (afferent) neuron → spinal cord/interneuron → motor (efferent) neuron → effector.' },
          { q: '[NEET] Which of the following is NOT a reflex action? (a) sneezing (b) blinking (c) solving a maths problem (d) knee-jerk', a: '(c).' },
          {
            q: '[NEET assertion–reason] A: A reflex action does not require the involvement of the brain to produce the response. R: The sensory and motor neurons of a spinal reflex are connected within the spinal cord. Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true.',
            a: '(a).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A reflex action is best described as: <b>(a)</b> a slow, voluntary, learned response <b>(b)</b> a rapid, involuntary response mediated by the CNS <b>(c)</b> a response that bypasses all neurons <b>(d)</b> a purely peripheral event not involving any nervous tissue',
        opts: [
          { label: 'a slow, voluntary, learned response', nudge: '<b>(a)</b> inverts every key feature.' },
          { label: 'a rapid, involuntary response mediated by the CNS', nudge: null },
          { label: 'a response that bypasses all neurons', nudge: '<b>(c)</b> and <b>(d)</b> deny the neural pathway that defines a reflex.' },
          { label: 'a purely peripheral event not involving any nervous tissue', nudge: '<b>(c)</b> and <b>(d)</b> deny the neural pathway that defines a reflex.' },
        ],
        correct: 1,
        solution: 'Reflexes are fast, automatic, and CNS-mediated.',
      },
      {
        t: 'mcq',
        q: 'The correct route of impulse in a reflex arc is: <b>(a)</b> effector → motor neuron → CNS → sensory neuron → receptor <b>(b)</b> receptor → sensory neuron → CNS → motor neuron → effector <b>(c)</b> receptor → motor neuron → CNS → sensory neuron → effector <b>(d)</b> sensory neuron → receptor → CNS → effector → motor neuron',
        opts: [
          { label: 'effector → motor neuron → CNS → sensory neuron → receptor', nudge: '<b>(a)</b> reverses the whole arc.' },
          { label: 'receptor → sensory neuron → CNS → motor neuron → effector', nudge: null },
          { label: 'receptor → motor neuron → CNS → sensory neuron → effector', nudge: '<b>(c)</b> swaps the neuron roles.' },
          { label: 'sensory neuron → receptor → CNS → effector → motor neuron', nudge: '<b>(d)</b> scrambles the order.' },
        ],
        correct: 1,
        solution: 'Detection to response flows receptor → sensory → CNS → motor → effector.',
      },
      {
        t: 'mcq',
        q: 'A monosynaptic reflex arc contains: <b>(a)</b> only a sensory neuron <b>(b)</b> a sensory neuron and a motor neuron with one synapse <b>(c)</b> two interneurons between sensory and motor neurons <b>(d)</b> no synapses at all',
        opts: [
          { label: 'only a sensory neuron', nudge: '<b>(a)</b> cannot drive an effector.' },
          { label: 'a sensory neuron and a motor neuron with one synapse', nudge: null },
          { label: 'two interneurons between sensory and motor neurons', nudge: '<b>(c)</b> describes a polysynaptic arc.' },
          { label: 'no synapses at all', nudge: '<b>(d)</b> contradicts the name.' },
        ],
        correct: 1,
        solution: '“Mono-synaptic” = one synapse, directly between sensory and motor neurons (knee-jerk).',
      },
      {
        t: 'mcq',
        q: 'Sensory fibres enter the spinal cord through the ____ root. <b>(a)</b> ventral <b>(b)</b> dorsal <b>(c)</b> lateral <b>(d)</b> median',
        opts: [
          { label: 'ventral', nudge: '<b>(a)</b> is the motor exit.' },
          { label: 'dorsal', nudge: null },
          { label: 'lateral', nudge: '<b>(c)</b> and <b>(d)</b> are not the named roots of a spinal nerve.' },
          { label: 'median', nudge: '<b>(c)</b> and <b>(d)</b> are not the named roots of a spinal nerve.' },
        ],
        correct: 1,
        solution: 'Afferent (sensory) fibres enter dorsally; efferent (motor) fibres exit ventrally.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reflex action vs reflex arc.</b> The action is the response (the event); the arc is the pathway (the wiring). Define the one asked for.',
          '<b>Dorsal vs ventral roots.</b> <b>D</b>orsal = sensory <b>in</b>; <b>V</b>entral = motor <b>out</b>. Swapping them is the most common error here.',
          '<b>“No brain” misread.</b> A reflex doesn’t need the brain to act, but the brain is still informed: don’t write that the brain plays no part at all.',
          '<b>Voluntary acts mislabelled as reflexes.</b> Anything you decide to do (walking, solving a sum) is not a reflex, even if fast.',
          '<b>Monosynaptic vs polysynaptic confusion.</b> Count the synapses, not the neurons loosely: monosynaptic means one synapse (knee-jerk, sensory straight to motor); the moment an interneuron appears, it is polysynaptic. Most protective reflexes, including withdrawal, are polysynaptic.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any sequence question, walk the signal physically with your finger: touch (receptor) → up the arm (sensory) → spine (CNS) → back down (motor) → muscle (effector). Acting it out makes the order impossible to forget under exam pressure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Reflex action:</b> rapid, automatic, involuntary, CNS-mediated (usually spinal cord) response to a stimulus.', note: '' },
          { f: '<b>Reflex arc (5 parts, in order):</b> Receptor → Sensory (afferent) neuron → CNS/interneuron → Motor (efferent) neuron → Effector.', note: '' },
          { f: '<b>Roots: D</b>orsal root = sensory <b>in</b>; <b>V</b>entral root = motor <b>out</b>.', note: '' },
          { f: '<b>Types: Monosynaptic</b> (knee-jerk; sensory→motor, one synapse) vs <b>Polysynaptic</b> (withdrawal; interneuron present).', note: '' },
          { f: '<b>Centre:</b> spinal reflexes (cord) vs cranial reflexes (brain stem). Response happens <b>before</b> the pain is felt.', note: '' },
          { f: 'Reflexes are <b>inborn</b> (knee-jerk, blinking) or <b>acquired/conditioned</b> (mouth watering at the sight of food).', note: '' },
        ],
        aids: [
          '<b>Mnemonic:</b> “<b>R-S-C-M-E</b>” (Receptor, Sensory, Centre, Motor, Effector); “<b>D</b>orsal <b>D</b>ata-in, <b>V</b>entral <b>V</b>igorous-action out.”',
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 1111–1113 ─────────────────────────
  {
    n: 'A',
    title: 'Action Potential: The Complete Waveform and Refractory Periods',
    kalam: 'Only when the graded potential at the axon hillock reaches approximately −55 mV (the threshold) does the all-or-none action potential fire.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the neuron, the impulse, the central and peripheral systems, and the reflex arc. Six examination patterns stand outside the door: the complete action-potential waveform with its refractory periods, the full roster of twelve cranial nerves and their classification, the two ascending sensory pathways and what each carries, synaptic integration and the major neurotransmitter catalog, flexor/extensor reflex mechanics with reciprocal innervation, and the neurological disorders that NEET asks about by name. Additional topic A completes the action-potential story the chapter leaves mid-phase. Additional topic B supplies the cranial-nerve table the chapter names but never shows. Additional topic C maps the sensory highway the chapter mentions but never drives. Additional topic D opens the synapse one level deeper: summation and the neurotransmitter list. Additional topic E rewires the reflex arc with the muscle spindle and the flexor-extensor story. Additional topic F names the clinical conditions the chapter barely mentions.<br><br>The chapter describes depolarisation, repolarisation and hyperpolarisation, but gives only the resting (about −70 mV) and peak (about +30 mV) values, with no timings, no numerical threshold and only a one-line mention of the refractory period. These are often asked in NEET.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>The action-potential waveform.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Phase', 'Membrane potential', 'Key ion movement', 'Approximate duration'],
        rows: [
          ['Resting (polarised)', '−70 mV', 'K<sup>+</sup> leak sets the potential; Na–K pump keeps the gradients', '–'],
          ['Depolarisation', '−70 mV → +30 mV', 'Na<sup>+</sup> channels open; Na<sup>+</sup> floods in', '≈ 1 ms'],
          ['Repolarisation', '+30 mV → −70 mV', 'Na<sup>+</sup> channels close; K<sup>+</sup> channels open; K<sup>+</sup> flows out', '≈ 1 ms'],
          ['Hyperpolarisation', '−70 mV → −90 mV', 'K<sup>+</sup> channels remain open slightly too long', '≈ 2–5 ms'],
          ['Restoration', '−90 mV → −70 mV', 'K<sup>+</sup> channels close; resting K<sup>+</sup> leak returns the potential to −70 mV; Na–K pump later restores the gradients', '≈ 5–10 ms'],
        ],
      },
      { t: 'p', html: '<b>Refractory periods: why the impulse cannot run backwards.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Period', 'Membrane state', 'Can fire again?', 'Why'],
        rows: [
          ['Absolute refractory', 'Na<sup>+</sup> channels open, then inactivated', 'No: no amount of stimulus can trigger another AP', 'Voltage-gated Na<sup>+</sup> channels cannot respond regardless of stimulus strength'],
          ['Relative refractory', 'Some Na<sup>+</sup> channels recovering; K<sup>+</sup> still flowing out', 'Yes, but only with a stronger-than-normal stimulus', 'The hyperpolarisation must be overcome by extra depolarising current'],
        ],
      },
      {
        t: 'p',
        html: 'The absolute refractory period begins with the onset of depolarisation and lasts about 2 ms, to the end of repolarisation. Because the Na<sup>+</sup> channels are open and then inactivated throughout this window, no new spike can start, so the impulse cannot overtake itself: this is the physical basis of unidirectional conduction along an axon.',
      },
      {
        t: 'p',
        html: '<b>Graded potential vs action potential: the threshold decision.</b><br>A stimulus that does not reach threshold produces a local, graded response called a receptor potential (also called a generator potential) at a sensory receptor, and an EPSP or IPSP at a synapse. This local change:<br>• decays with distance from the point of stimulation,<br>• decays with time if the stimulus is not maintained,<br>• does not regenerate along the membrane.',
      },
      {
        t: 'p',
        html: 'Only when the graded potential at the axon hillock reaches approximately −55 mV (the threshold) does the all-or-none action potential fire. A single subthreshold stimulus produces no impulse; repeated subthreshold stimuli fire one only if they arrive close enough together to add up to threshold (temporal summation, Additional topic D).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Refractory Period from Waveform.</b> A stimulus applied to an axon at time t = 2 ms produces an action potential peaking at +30 mV. A second stimulus of equal strength is applied at t = 2.5 ms. Will it produce an action potential?',
        steps: [
          '<b>Reasoning:</b> The absolute refractory period begins at the onset of the action potential (t = 2 ms) and covers the whole depolarisation phase. At t = 2.5 ms, only 0.5 ms after onset, the membrane is still depolarising: voltage-gated Na<sup>+</sup> channels are either open or already inactivated, so they cannot respond to a new stimulus. No action potential can be generated regardless of stimulus strength.',
        ],
        ans: 'No. The second stimulus falls within the absolute refractory period.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Subthreshold vs Supra-threshold Stimulus.</b> A neuron has a resting potential of −70 mV and a threshold of −55 mV. Stimulus A produces a local depolarisation of 10 mV; Stimulus B produces a local depolarisation of 20 mV. Will either stimulus generate an action potential?',
        steps: [
          '<b>Reasoning:</b> Threshold = −70 + 15 = −55 mV. Stimulus A: −70 + 10 = −60 mV, still below −55 mV threshold. No AP. Stimulus B: −70 + 20 = −50 mV, which exceeds −55 mV. AP fires.',
        ],
        ans: 'Stimulus A: no AP (subthreshold). Stimulus B: AP fires (supra-threshold). The key property: AP is all-or-none; above threshold the size and shape of the AP are identical regardless of how much the stimulus exceeded threshold.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[NEET] During the depolarisation phase of an action potential, the membrane potential moves from approximately: (a) −70 mV to +30 mV (b) +30 mV to −70 mV (c) −70 mV to −90 mV (d) −90 mV to −70 mV', a: '(a).' },
          { q: '[CBSE] Name the ion whose inward movement causes depolarisation, and the ion whose outward movement causes repolarisation.', a: 'Na<sup>+</sup> (inward = depolarisation); K<sup>+</sup> (outward = repolarisation).' },
          { q: '[NEET] Which property ensures that an impulse cannot travel backwards along an axon? (a) all-or-none law (b) refractory period (c) saltatory conduction (d) continuous conduction', a: '(b): the refractory period physically prevents Na<sup>+</sup> channels from reopening immediately, forcing the impulse to move forward.' },
          { q: '[CUET] Arrange in order: depolarisation, restoration, resting potential, repolarisation, hyperpolarisation.', a: 'Resting potential (−70 mV) → depolarisation (to +30 mV) → repolarisation (back toward −70 mV) → hyperpolarisation (to −90 mV) → restoration (back to −70 mV).' },
          { q: '[NEET] A neuron with resting potential −70 mV receives a stimulus that shifts the membrane to −60 mV. Will an action potential occur? Give a reason.', a: 'No. −60 mV is still below the typical threshold of approximately −55 mV; the stimulus is subthreshold.' },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 1113–1115 ─────────────────────────
  {
    n: 'B',
    title: 'The Twelve Cranial Nerves',
    kalam: 'Cranial nerves III–XII arise from the brain stem.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter mentions cranial nerves (12 pairs arising from the brain) and names only the vagus; it never lists the twelve, classifies them or states their functions. NEET often asks this.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>Classification by function: three categories.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Fibres carried', 'Mnemonic'],
        rows: [
          ['Sensory', 'Mainly sensory (afferent)', '“Sensory = Senses”'],
          ['Motor', 'Mainly motor (efferent), with some stretch-sensing fibres from their muscles', '“Motor = Movement”'],
          ['Mixed', 'Both sensory and motor', '“Mixed = Both”'],
        ],
      },
      { t: 'p', html: '<b>The twelve nerves, in order (anterior to posterior).</b>' },
      {
        t: 'table',
        title: null,
        head: ['No.', 'Name', 'Type', 'Key functions'],
        rows: [
          ['I', 'Olfactory', 'Sensory', 'Smell (receptors in nasal mucosa project to olfactory bulb)'],
          ['II', 'Optic', 'Sensory', 'Vision (ganglion cells of retina → thalamus → visual cortex)'],
          ['III', 'Oculomotor', 'Motor', 'Eye movements; pupil constriction (parasympathetic to pupil); eyelid elevation'],
          ['IV', 'Trochlear', 'Motor', 'Superior oblique muscle of eye'],
          ['V', 'Trigeminal', 'Mixed', 'Facial sensation (touch, pain, temperature); mastication muscles'],
          ['VI', 'Abducens', 'Motor', 'Lateral rectus: abducts the eye'],
          ['VII', 'Facial', 'Mixed', 'Facial expression muscles; taste (anterior <frac><num>2</num><den>3</den></frac> tongue); lacrimal and salivary glands (parasympathetic)'],
          ['VIII', 'Vestibulocochlear', 'Sensory', 'Hearing (cochlear) and balance (vestibular)'],
          ['IX', 'Glossopharyngeal', 'Mixed', 'Taste (posterior <frac><num>1</num><den>3</den></frac> tongue); swallowing; parotid salivary gland (parasympathetic)'],
          ['X', 'Vagus', 'Mixed', 'Parasympathetic to heart, lungs, most of the digestive tract; sensation from larynx and thoracic/abdominal viscera'],
          ['XI', 'Accessory (Spinal accessory)', 'Motor', 'Sternocleidomastoid and trapezius muscles (neck and shoulder)'],
          ['XII', 'Hypoglossal', 'Motor', 'Tongue movements'],
        ],
      },
      {
        t: 'p',
        html: '<b>Origin clue:</b> Cranial nerves III–XII arise from the brain stem (the accessory nerve, XI, also has a root from the upper spinal cord). The olfactory bulb and tract and the optic nerve are outgrowths of the brain; the optic nerve is a CNS tract, and the olfactory nerve fibres end in the olfactory bulb.',
      },
      {
        t: 'p',
        html: '<b>Parasympathetic outflow:</b> Among the cranial nerves, only III, VII, IX and X carry parasympathetic fibres to target organs (pupil, lacrimal gland, salivary glands, heart, lungs, gut). This is the craniosacral parasympathetic outflow described in the chapter’s section on the autonomic nervous system.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Identify Nerve from Function.</b> A patient cannot close the eyelid properly, has loss of taste on the anterior two-thirds of the tongue, and produces less saliva. Which cranial nerve is damaged, and what is its type?',
        steps: [
          '<b>Reasoning:</b> Facial expression muscles, taste anterior tongue, and lacrimal/salivary parasympathetic output all belong to cranial nerve VII (facial). This nerve is mixed (both sensory and motor).',
        ],
        ans: 'Cranial nerve VII (facial); mixed nerve.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Classify Each Nerve.</b> Classify each as sensory, motor, or mixed: Olfactory (I), Oculomotor (III), Trigeminal (V), Vestibulocochlear (VIII), Vagus (X).',
        steps: [
          '<b>Reasoning:</b> Apply the table. Olfactory = sensory (smell). Oculomotor = motor (four of six eye muscles, pupil). Trigeminal = mixed (facial sensation + chewing). Vestibulocochlear = sensory (hearing + balance). Vagus = mixed (parasympathetic to viscera + visceral sensation).',
        ],
        ans: 'I: sensory; III: motor; V: mixed; VIII: sensory; X: mixed.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[NEET] Which cranial nerve carries parasympathetic fibres to the heart? (a) III (b) VII (c) IX (d) X', a: '(d): vagus nerve (X); the other three carry parasympathetic fibres but not to the heart.' },
          { q: '[CUET] Match: (A) Olfactory (1) Mixed (B) Trigeminal (2) Sensory (C) Oculomotor (3) Motor', a: 'A–2, B–1, C–3.' },
          { q: '[CBSE] Which cranial nerve is responsible for the knee-jerk response? Explain.', a: 'None: the knee-jerk is a spinal reflex mediated by spinal nerves, not cranial nerves.' },
          { q: '[NEET] Damage to the optic nerve (II) would affect: (a) smell (b) vision (c) eye movement (d) hearing', a: '(b): optic nerve carries visual information from retina to brain.' },
          { q: '[CUET] Which of these cranial nerves is a sensory nerve? (a) Facial (b) Glossopharyngeal (c) Vestibulocochlear (d) Vagus', a: '(c): vestibulocochlear (VIII) is a sensory nerve for hearing and balance.' },
        ],
      },
    ],
  },
];
