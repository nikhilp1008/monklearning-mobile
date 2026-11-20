import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11, Chapter 18 (Neural Control and Coordination), Topics 00 to 02:
 * pp. 1075 to 1094 of the Class 11 Biology Master Reference, word for word.
 * The chapter title page (p. 1074) and the contents box (p. 1075) are not
 * copied. Topic 00 is the preface "How to use this guide" (foot of p. 1075 and
 * p. 1076) followed by the unnumbered overview page "The Neural System: An
 * Overview" (p. 1077); Topics 01 (pp. 1078 to 1086) and 02 (pp. 1087 to 1094)
 * are cut at the book's Sections 1 to 8. Figures 18.1 (caption p. 1080, drawn
 * p. 1081), 18.2 (caption p. 1082, drawn p. 1083) and 18.3 (caption p. 1089,
 * drawn p. 1090) are redrawn in lib/diagrams/biology-11-18.ts; these pages
 * hold no unnumbered drawing. Emphasis italics are dropped; the one italic
 * kept is the genus <i>Hydra</i>. The book's options are lower-case letters
 * (a) to (d), kept as printed.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · pp. 1075–1077 ─────────────────────────
  {
    n: '00',
    title: 'The Neural System: An Overview',
    kalam:
      'The neural system provides rapid, point-to-point control using electrical impulses carried by nerve cells.',
    blocks: [
      { t: 'part', title: 'How to use this guide' },
      {
        t: 'p',
        html: 'This master guide covers the complete rationalised NCERT Class 11 chapter Neural Control and Coordination. It opens with a short overview of the neural system, then works through four topics. Go in order: each builds on the last.',
      },
      {
        t: 'p',
        html: '1. <b>Neuron Structure & Nerve Impulse</b>: the cell that carries the signal, and how the signal travels and crosses a synapse.<br>2. <b>Central Nervous System</b>: the brain and spinal cord, the body’s control centre.<br>3. <b>Peripheral & Autonomic Nervous System</b>: the wiring out to the body, and the fight-or-flight / rest-and-digest divisions.<br>4. <b>Reflex Action & Reflex Arc</b>: the automatic protective circuits that tie the chapter together.',
      },
      {
        t: 'p',
        html: 'Each topic follows the same rhythm: build intuition first, then the precise definitions, the working mechanisms, fully worked exam problems (CBSE / NEET / CUET), practice questions with answers, MCQs with trap analysis, common pitfalls, and a one-page cheat sheet.',
      },

      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every organ in the body must work in step with the others, and the body achieves this coordination through two systems: the <b>neural system</b> and the <b>endocrine (hormonal) system</b>. The neural system provides <b>rapid, point-to-point</b> control using electrical impulses carried by nerve cells; the endocrine system provides slower, longer-lasting control using chemical hormones (the subject of the next chapter). Together they keep the body’s internal environment stable.',
      },

      { t: 'part', title: 'Neural organisation across animals' },
      { t: 'p', html: 'The neural system becomes more elaborate as animals become more complex:' },
      {
        t: 'p',
        html: '• <b>Cnidarians (e.g., <i>Hydra</i>)</b> have the simplest arrangement, a diffuse <b>nerve net</b> of loosely connected neurons, with no brain and no central control.<br>• <b>Higher invertebrates (e.g., insects, earthworm, cockroach)</b> have a more organised system with a definite <b>brain</b> and segmental <b>ganglia</b> linked by nerve cords.<br>• <b>Vertebrates, including humans</b>, have a highly developed system: a large brain, a spinal cord, and an extensive network of nerves reaching every part of the body.',
      },

      { t: 'part', title: 'The human neural system at a glance' },
      {
        t: 'p',
        html: 'In humans the neural system is divided into two parts that the rest of this guide explores in detail:',
      },
      {
        t: 'p',
        html: '• The <b>central nervous system (CNS)</b>, the <b>brain</b> and <b>spinal cord</b>, is the site where information is received, processed, and acted upon.<br>• The <b>peripheral nervous system (PNS)</b>, all the <b>nerves</b> that branch out from the CNS, carries sensory information in to the CNS and motor commands out to the muscles and glands.',
      },
      {
        t: 'p',
        html: 'From here, Topic 01 zooms in on the <b>neuron</b>, the cell that makes all of this possible, and how it generates and transmits a nerve impulse.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 1078–1086 ─────────────────────────
  {
    n: '01',
    title: 'Neuron Structure & Nerve Impulse',
    kalam:
      'A neuron does not physically send a substance racing down the wire the way a train moves down a track.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. NEET reliably pulls 1–2 questions on neuron parts, neuron types, Nissl’s granules, and the resting/action potential, often as assertion–reason (the book’s estimate from past papers, not official figures). CBSE Boards ask 1–2 mark labelling or short-answer on neuron structure and impulse conduction. CUET leans on match-the-column and diagram identification. The polarisation/depolarisation logic here is also the foundation for the synapse (later in this topic) and for the reflex arc (Topic 04).',
      },
      {
        t: 'p',
        html: 'Imagine the Indian Railways at its busiest. A message (“train delayed at Itarsi”) has to travel from one end of the country to the other, fast and without getting garbled. You wouldn’t shout it across the whole distance; you’d pass it station to station along a dedicated line. Your body faces the same problem on a smaller scale: a pinprick on your toe has to become a “pull your foot back!” command in a fraction of a second. The cell that carries this message is the <b>neuron</b>, and the line it travels along is its long, wire-like <b>axon</b>.',
      },
      {
        t: 'p',
        html: 'But here’s the twist that makes biology cleverer than the railways. A neuron does not physically send a substance racing down the wire the way a train moves down a track. Instead, the message is <b>electrical</b>: a fleeting flip in the voltage across the neuron’s membrane that regenerates itself at every point along the way. Nothing actually travels the full length; rather, a disturbance is recreated step after step, like a line of dominoes toppling, or like the stadium “Mexican wave” at a cricket match where no single person runs around the ground but the wave still races all the way round.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the neuron’s membrane at rest as a tightly stretched bowstring, loaded with potential energy, more positive outside and more negative inside. This loaded state is called being <b>polarised</b>. A stimulus is the finger that plucks the string at one spot. The string snaps (the voltage briefly reverses) and that snap pulls the next bit of string out of place, which snaps in turn. The “snap” travelling down the axon is the nerve impulse. The neuron then quickly re-loads the string behind the wave so it’s ready for the next message.',
      },
      {
        t: 'p',
        html: 'To make this work, a neuron is built for one-way, long-distance signalling: short branched <b>dendrites</b> at one end to receive signals, a single long <b>axon</b> to carry the impulse away, and <b>synaptic knobs</b> at the far tip to hand the message over to the next cell. The whole arrangement is the structural and functional unit of the nervous system.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> This neat picture holds only under specific conditions, and exams love the exceptions:',
      },
      {
        t: 'p',
        html: '• The “loaded bowstring” resting state is <b>not</b> passive: it costs continuous energy (ATP). Stop the energy supply and the gradient runs down; no impulse is possible.<br>• An impulse is <b>all-or-none</b>: a stimulus either crosses the threshold and fires a full impulse, or nothing happens. A “stronger” pinch does not make a “bigger” impulse: it makes them fire more often.<br>• Conduction is <b>unidirectional</b> at a chemical synapse (dendrite → cell body → axon → next cell), even though an isolated axon can technically conduct both ways if stimulated in the middle.<br>• The model assumes an intact membrane with working ion channels; damage the myelin (as in demyelinating disease) and conduction slows or fails.',
      },

      { t: 'part', title: 'Key structures, definitions and terminology' },
      {
        t: 'p',
        html: '<b>The neuron (nerve cell).</b> A microscopic, excitable cell specialised to receive, conduct, and transmit impulses. It has three regions:',
      },
      {
        t: 'p',
        html: '• <b>Cell body (cyton / soma / perikaryon):</b> contains the nucleus, cytoplasm, mitochondria, and <b>Nissl’s granules</b>.<br>• <b>Dendrites:</b> short, branched processes arising from the cell body that conduct impulses towards the cyton.<br>• <b>Axon:</b> a single, long process arising from the <b>axon hillock</b> that conducts impulses away from the cyton, ending in branched <b>axon terminals</b> tipped with <b>synaptic knobs</b> (containing synaptic vesicles with neurotransmitters).',
      },
      {
        t: 'p',
        html: '<b>Nissl’s granules:</b> masses of rough endoplasmic reticulum (with ribosomes) that synthesise proteins. Present in the <b>cyton and dendrites</b>; <b>absent in the axon and axon hillock</b>, a classic NEET fact.',
      },
      {
        t: 'p',
        html: '<b>Neuroglia (glial cells):</b> non-conducting supporting cells that protect and nourish neurons. They make up <b>more than half</b> the volume of neural tissue.',
      },
      {
        t: 'table',
        title: 'Types of neurons (by number of processes)',
        head: ['Type', 'Processes', 'Typically found in'],
        rows: [
          ['Multipolar', '1 axon + 2 or more dendrites', 'Cerebral cortex; motor neurons'],
          ['Bipolar', '1 axon + 1 dendrite', 'Retina of the eye; olfactory epithelium'],
          ['Unipolar', 'cell body with a single process', 'Usually the embryonic stage (adult sensory neurons of the dorsal root ganglia are also single-process, pseudo-unipolar)'],
        ],
      },
      { t: 'p', html: '<b>Myelinated vs non-myelinated fibres:</b>' },
      {
        t: 'p',
        html: '• <b>Myelinated:</b> the axon is wrapped by <b>Schwann cells</b> that form a multilayered, fatty, insulating <b>myelin sheath</b>. Gaps between successive sheaths are the <b>nodes of Ranvier</b>, where the membrane is exposed. Found in <b>spinal and cranial nerves</b>.<br>• <b>Non-myelinated:</b> the axon is enclosed by a Schwann cell but <b>no myelin sheath</b> is formed. Common in the <b>autonomic</b> and <b>somatic</b> neural systems.<br>• <b>Neurilemma:</b> the outer layer (cytoplasm and plasma membrane) of the Schwann cell that surrounds the myelin sheath; the myelin itself is absent at the node of Ranvier.',
      },
      {
        t: 'p',
        html: '<b>Functional classification (by job, not shape).</b> The same three-part hardware is wired into three functional roles:',
      },
      {
        t: 'p',
        html: '• <b>Afferent (sensory) neurons</b> carry impulses from a receptor/sense organ towards the CNS (they bring information “in,” via the dorsal root).<br>• <b>Efferent (motor) neurons</b> carry impulses from the CNS to an effector: a muscle or gland (they send commands “out”).<br>• <b>Interneurons (association neurons)</b> lie within the CNS and link afferent to efferent neurons.',
      },
      {
        t: 'p',
        html: 'A handy frame: afferent <b>A</b>rrives at the brain, efferent <b>E</b>xits to the effector. This afferent–interneuron–efferent chain is exactly the wiring you will reuse when you reach the reflex-arc topic (Topic 04).',
      },
      {
        t: 'p',
        html: '<b>Axoplasm:</b> the cytoplasm inside the axon, through which the impulse logic plays out; note it carries mitochondria and microtubules but, as above, <b>no Nissl’s granules</b>.',
      },
      { t: 'fig', id: 'b11-18-fig-18.1' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>3.1 The resting (polarised) membrane</b>' },
      {
        t: 'p',
        html: 'When a neuron is <b>not</b> conducting an impulse, its axonal membrane is <b>polarised</b>: positive outside, negative inside, a steady voltage of about −70 mV. Two factors set this up:',
      },
      {
        t: 'p',
        html: '1. <b>Selective permeability.</b> At rest the membrane is comparatively <b>permeable to K<sup>+</sup>, nearly impermeable to Na<sup>+</sup></b>, and <b>impermeable to the large negatively-charged proteins</b> trapped in the axoplasm.<br>2. <b>The sodium–potassium pump.</b> This ATP-driven pump expels <b>3 Na<sup>+</sup> out</b> for every <b>2 K<sup>+</sup> in</b>, working against the concentration gradient. The result: high Na<sup>+</sup> outside, high K<sup>+</sup> and proteins inside, an ionic imbalance that stores energy, like our loaded bowstring.',
      },
      {
        t: 'p',
        html: 'Reading the two compartments side by side makes the gradient concrete: the <b>axoplasm</b> (inside) holds a high concentration of K<sup>+</sup> together with the large, trapped, negatively-charged proteins and only a little Na<sup>+</sup>; the <b>extracellular fluid</b> (outside) is the mirror image: rich in Na<sup>+</sup>, poor in K<sup>+</sup>. Because the resting membrane lets K<sup>+</sup> trickle out far more readily than it lets Na<sup>+</sup> in, and the proteins can never leave, the inside settles at a net negative charge. The pump’s continuous 3 ∶ 2 export then prevents this hard-won gradient from running down.',
      },
      { t: 'p', html: '<b>3.2 The action potential</b>' },
      {
        t: 'p',
        html: 'A stimulus that reaches <b>threshold</b> triggers a rapid, self-regenerating voltage change at that site, in four logical steps:',
      },
      {
        t: 'p',
        html: '1. <b>Stimulus → depolarisation.</b> The membrane at the stimulated point suddenly becomes far more permeable to Na<sup>+</sup>. Na<sup>+</sup> rushes in, the inside becomes positive and the outside negative: the polarity <b>reverses</b> (to roughly +30 mV). This reversed state is the <b>action potential</b>.<br>2. <b>Repolarisation.</b> Almost immediately the Na<sup>+</sup> gates shut and K<sup>+</sup> gates open; K<sup>+</sup> moves out, restoring the negative-inside resting polarity.<br>3. <b>Brief undershoot (hyperpolarisation).</b> Continued K<sup>+</sup> efflux can make the inside more negative than rest for an instant.<br>4. <b>Restoration.</b> The Na–K pump quietly resets the ion concentrations, readying the site for the next impulse (the <b>refractory period</b> is why impulses don’t run backwards).',
      },
      {
        t: 'p',
        html: '<b>Propagation.</b> The reversed, depolarised point acts as the stimulus for the patch just ahead of it, which depolarises next, so the impulse marches forward, regenerating at full strength at every step (the domino logic from Concept intuition).',
      },
      { t: 'p', html: '<b>3.3 Conduction speed: continuous vs saltatory</b>' },
      {
        t: 'p',
        html: '• <b>Unmyelinated fibre:</b> the impulse regenerates at every point along the membrane, <b>continuous conduction</b>, which is relatively slow.<br>• <b>Myelinated fibre:</b> myelin insulates the axon, so the action potential is regenerated at the exposed <b>nodes of Ranvier</b>. The impulse therefore <b>jumps from node to node</b>: <b>saltatory conduction</b> (saltare = “to leap”), which is much faster and more energy-efficient.',
      },
      { t: 'p', html: '<b>3.4 Transmission across a synapse</b>' },
      {
        t: 'p',
        html: 'A <b>synapse</b> is the junction at which one neuron passes a signal to the next cell. Two kinds:',
      },
      {
        t: 'p',
        html: '• <b>Electrical synapse:</b> pre- and post-synaptic membranes lie extremely close; current flows <b>directly</b> across, transmission is <b>very fast</b> and resembles conduction along a single axon. <b>Rare</b> in humans.<br>• <b>Chemical synapse:</b> the membranes are separated by a fluid-filled <b>synaptic cleft</b>, bridged by chemicals. Sequence: the impulse reaches the axon terminal → <b>Ca<sup>2+</sup></b> enters → <b>synaptic vesicles</b> fuse with the presynaptic membrane and release a <b>neurotransmitter</b> (e.g., acetylcholine) into the cleft → it binds <b>receptors</b> on the postsynaptic membrane → ion channels open → a new potential develops, which may be <b>excitatory (EPSP)</b> or <b>inhibitory (IPSP)</b>. This chemical step is why transmission is <b>unidirectional</b>.',
      },
      {
        t: 'p',
        html: 'Whether the postsynaptic neuron actually fires its own impulse is not decided by a single message. A given neuron receives many inputs at once, some excitatory, some inhibitory, and it is the <b>net effect</b> of all of them on the postsynaptic membrane that determines whether the threshold is crossed. An EPSP nudges the membrane towards firing; an IPSP pulls it away. This is the cellular basis of the “decision-making” that the nervous system performs at every junction.',
      },
      { t: 'fig', id: 'b11-18-fig-18.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board: Diagram identification',
        q: 'In a labelled diagram of a neuron, structure P is found only in the cyton and dendrites but never in the axon. Name P, state its chemical nature, and its function.',
        steps: [
          '<b>Reasoning:</b> The defining clue is “present in cyton and dendrites, absent in axon.” That is the textbook signature of <b>Nissl’s granules</b>. They are aggregations of <b>rough endoplasmic reticulum</b> (with ribosomes); their function is <b>protein synthesis</b> for the neuron. (A common slip is to name “mitochondria,” but mitochondria occur in the axon too: they fail the “absent in axon” test.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET: MCQ with reasoning / speed',
        q: 'During the depolarisation phase of an action potential, the axonal membrane becomes most permeable to which ion, and in which direction does it move? <b>(a)</b> K<sup>+</sup>, outward <b>(b)</b> Na<sup>+</sup>, inward <b>(c)</b> Ca<sup>2+</sup>, outward <b>(d)</b> Cl<sup>−</sup>, inward',
        steps: [
          '<b>Reasoning:</b> Depolarisation = polarity <b>reversal</b> = inside turning positive. The only way the inside turns positive is by an influx of a <b>cation</b>, and the resting membrane was holding Na<sup>+</sup> out. Open the Na<sup>+</sup> gates and Na<sup>+</sup> floods in → <b>(b)</b>. Quick elimination: K<sup>+</sup> moving out (a) is repolarisation, not depolarisation; (c) and (d) don’t fit the reversal logic. <b>Speed trap:</b> students who memorise “K<sup>+</sup> for nerves” without phase-tagging pick (a).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET: Match the column',
        q: 'Match the neuron type with its typical location.<br>Column I<br>A. Unipolar<br>B. Bipolar<br>C. Multipolar<br>Column II<br>1. Retina of the eye<br>2. Cerebral cortex<br>3. Embryonic stage',
        steps: [
          '<b>Reasoning:</b> Multipolar (one axon + many dendrites) dominates the <b>cerebral cortex</b> → C–2. Bipolar (one axon + one dendrite) is the classic <b>retinal</b> neuron → B–1. Unipolar is described as occurring <b>usually in the embryonic stage</b> → A–3.',
        ],
        ans: 'A–3, B–1, C–2',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty: Assertion–Reason',
        q: '<b>Assertion (A):</b> Conduction of a nerve impulse is faster in a myelinated neuron than in a non-myelinated one. <b>Reason (R):</b> In a myelinated fibre, the impulse is regenerated continuously at every point of the membrane. <b>(a)</b> Both A and R true, R correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning: A is true</b>: myelin speeds conduction. <b>R is false</b>: continuous point-by-point regeneration is exactly what happens in non-myelinated fibres; myelinated fibres conduct by saltatory (node-to-node) jumping, which is why they’re faster. A true, R false → <b>(c)</b>. The trap is (a): the statements feel related, so students assume R explains A, but R actually describes the slow mechanism.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define resting potential. Name the pump that maintains it and state the ratio of ions it transports.',
            a: 'The steady polarised voltage (~−70 mV) of a resting axon; sodium–potassium pump; 3 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in.',
          },
          {
            q: '[NEET] Which part of a neuron lacks Nissl’s granules? <b>(a)</b> cyton <b>(b)</b> dendrites <b>(c)</b> axon <b>(d)</b> both a and b',
            a: '(c).',
          },
          {
            q: '[CUET] Arrange in the correct order of impulse flow: synaptic knob, dendrites, cell body, axon terminal, axon.',
            a: 'dendrites → cell body → axon → axon terminal → synaptic knob.',
          },
          {
            q: '[NEET] In a chemical synapse, the entry of which ion into the axon terminal triggers release of the neurotransmitter? <b>(a)</b> Na<sup>+</sup> <b>(b)</b> K<sup>+</sup> <b>(c)</b> Ca<sup>2+</sup> <b>(d)</b> Cl<sup>−</sup>',
            a: '(c).',
          },
          {
            q: '[NEET assertion–reason] A: An electrical synapse transmits impulses faster than a chemical synapse. R: At an electrical synapse, pre- and post-synaptic membranes lie very close and current flows directly. Choose the correct option (a)/(b)/(c)/(d) as in worked example 4.',
            a: '(a).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At rest, the axonal membrane is comparatively:',
        opts: [
          {
            label: 'more permeable to Na<sup>+</sup>, impermeable to K<sup>+</sup>',
            nudge: '<b>(a)</b> inverts the truth: at rest K<sup>+</sup> is the more permeant ion; Na<sup>+</sup> permeability rises only during depolarisation.',
          },
          { label: 'more permeable to K<sup>+</sup>, nearly impermeable to Na<sup>+</sup>', nudge: null },
          {
            label: 'equally permeable to both',
            nudge: '<b>(c)</b> would collapse the gradient and make a resting potential impossible.',
          },
          {
            label: 'impermeable to both',
            nudge: '<b>(d)</b> would leave no K<sup>+</sup> leak, and the leak is what sets the resting potential.',
          },
        ],
        correct: 1,
        solution:
          'The resting state is held by high K<sup>+</sup> permeability and very low Na<sup>+</sup> permeability (plus impermeability to internal proteins).',
      },
      {
        t: 'mcq',
        q: 'Saltatory conduction occurs because:',
        opts: [
          {
            label: 'myelin makes the whole axon conductive',
            nudge: '<b>(a)</b> is backwards: myelin insulates, it doesn’t conduct.',
          },
          { label: 'the impulse leaps between nodes of Ranvier', nudge: null },
          {
            label: 'Schwann cells actively pump the impulse',
            nudge: '<b>(c)</b> invents an active role for Schwann cells.',
          },
          {
            label: 'the axon has no membrane potential',
            nudge: '<b>(d)</b> contradicts the very existence of an action potential.',
          },
        ],
        correct: 1,
        solution: 'Myelin insulates the internodes, so depolarisation is confined to the exposed nodes and the impulse “jumps.”',
      },
      {
        t: 'mcq',
        q: 'Which sequence correctly describes a chemical synapse?',
        opts: [
          {
            label: 'neurotransmitter release → Ca<sup>2+</sup> influx → impulse arrival',
            nudge: '<b>(a)</b> and <b>(c)</b> reverse the causal order.',
          },
          { label: 'impulse arrival → Ca<sup>2+</sup> influx → neurotransmitter release → receptor binding', nudge: null },
          {
            label: 'receptor binding → neurotransmitter release → impulse arrival',
            nudge: '<b>(a)</b> and <b>(c)</b> reverse the causal order.',
          },
          {
            label: 'Ca<sup>2+</sup> efflux → impulse arrival → neurotransmitter release',
            nudge: '<b>(d)</b> has Ca<sup>2+</sup> moving the wrong way.',
          },
        ],
        correct: 1,
        solution:
          'Cause precedes effect: the impulse arrives first, Ca<sup>2+</sup> enters, vesicles release transmitter, and it then binds postsynaptic receptors.',
      },
      {
        t: 'mcq',
        q: 'The functional and structural unit of the neural system is the:',
        opts: [
          { label: 'neuroglia', nudge: '<b>(a)</b> glia support but do not transmit.' },
          { label: 'Schwann cell', nudge: '<b>(b)</b> a Schwann cell only insulates the axon.' },
          { label: 'neuron', nudge: null },
          { label: 'synapse', nudge: '<b>(d)</b> a synapse is a junction between units, not the unit itself.' },
        ],
        correct: 2,
        solution: 'The neuron is the structural and functional unit of the neural system.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Phase-tagging ions.</b> Na<sup>+</sup> in = depolarisation; K<sup>+</sup> out = repolarisation. Students who memorise the ions without the phase get assertion–reason questions wrong. Tag every ion with its phase.',
          '<b>Nissl’s granules “absent in axon.”</b> This is tested constantly. Remember: <b>factories are in the office (cyton + dendrites), not on the highway (axon).</b>',
          '<b>Continuous vs saltatory.</b> Don’t swap them: continuous is the <b>slow, unmyelinated</b> mode; saltatory (leaping) is the <b>fast, myelinated</b> mode.',
          '<b>Direction of dendrite vs axon.</b> Dendrites carry impulses <b>towards</b> the cyton; the axon carries them <b>away</b>. Mnemonic: <b>A</b>xon = <b>A</b>way.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “resting vs active” question, anchor to one sentence: “rest = polarised, outside +; firing = reversed, inside +”, and read the option that matches the phase named in the stem. It eliminates two distractors instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Neuron = 3 parts',
            note: 'dendrites (receive, → cyton) · cyton (nucleus + Nissl’s granules) · axon (carry, away from cyton) → synaptic knob.',
          },
          {
            f: 'Nissl’s granules',
            note: 'rough ER; in <b>cyton + dendrites</b>, <b>absent in axon</b>.',
          },
          {
            f: 'Neuron types',
            note: 'multipolar (cerebral cortex), bipolar (retina), unipolar (embryonic).',
          },
          {
            f: 'Myelinated (spinal/cranial nerves, saltatory, fast) vs non-myelinated (ANS/somatic, continuous, slow); gaps = nodes of Ranvier.',
            note: '',
          },
          {
            f: 'Resting potential',
            note: 'polarised, ~−70 mV; Na–K pump = <b>3 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in</b> (ATP).',
          },
          {
            f: 'Action potential',
            note: 'Na<sup>+</sup> in → depolarise (reverse to ~+30 mV) → K<sup>+</sup> out → repolarise.',
          },
          {
            f: 'Chemical synapse',
            note: 'impulse → <b>Ca<sup>2+</sup> in</b> → vesicles release neurotransmitter → receptors → EPSP/IPSP; unidirectional.',
          },
        ],
        aids: ['Mnemonic: “Axon = Away; Dendrite = Deliver-in.”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 1087–1094 ─────────────────────────
  {
    n: '02',
    title: 'Central Nervous System',
    kalam:
      'Think of your body as a vast country and the central nervous system (CNS) as its national government, headquartered in the skull.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, high-yield topic. NEET draws 1–2 questions almost every year on brain-part functions, the forebrain/midbrain/hindbrain divisions, and the limbic system, frequently as match-the-column or assertion–reason (the book’s estimate from past papers, not official figures). CBSE Boards favour 2–3 mark questions on brain regions and meninges. CUET leans heavily on structure–location–function matching. Get the “which part does what” map airtight and most of these become free marks.',
      },
      {
        t: 'p',
        html: 'Think of your body as a vast country and the <b>central nervous system (CNS)</b> as its national government, headquartered in the skull. Every district (your fingertips, your stomach, your eyes) sends reports up, and every policy decision flows back down. The CNS has just two organs: the <b>brain</b> (the secretariat where information is processed and decisions are made) and the <b>spinal cord</b> (the trunk highway connecting the capital to the rest of the country). Together they receive sensory input, integrate it, and dispatch motor commands.',
      },
      {
        t: 'p',
        html: 'But a government this important cannot sit exposed. The brain is wrapped in three protective membranes called the <b>meninges</b>, cushioned in a fluid bath, and sealed inside the bony cranium: three layers of security around the cabinet room.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The brain is not one undifferentiated lump; it is organised like a layered administration that grew over evolutionary time. The oldest, deepest layer, the <b>hindbrain</b> and <b>midbrain</b>, runs the automatic life-support that you never think about: breathing, heartbeat, reflexes, balance. On top of it sits the <b>forebrain</b>, the newer, sprawling executive wing, the <b>cerebrum</b>, that handles the things you are aware of: thinking, memory, language, voluntary movement, and the senses. The deeper you go, the more “automatic and ancient”; the higher you go, the more “conscious and recent.”',
      },
      {
        t: 'p',
        html: 'So when a cricket ball flies at your face and you blink before you’ve even registered the ball, that’s the ancient, fast, lower brain acting. When you later describe the catch to a friend, that’s the cerebrum at work. Same organ, different floors of the same building.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> A few caveats exam-setters love:',
      },
      {
        t: 'p',
        html: '• The CNS is <b>only</b> the brain and spinal cord. The nerves running out to the body are the <b>peripheral</b> nervous system (PNS), a frequent trap in “which is part of the CNS?” questions.<br>• “Higher” does not mean “more important.” Damage the small medulla oblongata and breathing stops; damage a patch of cerebrum and you may lose a specific skill but survive. Vital ≠ large.<br>• Functional localisation is a dominant tendency, not an absolute. A region “controls” a function in the sense of being its primary centre, but the brain works as an integrated network.<br>• Grey matter and white matter are arranged oppositely in the cerebral cortex (grey outside) and the spinal cord (grey inside): assume nothing; check each.',
      },

      { t: 'part', title: 'Key structures, definitions and terminology' },
      {
        t: 'p',
        html: '<b>The CNS = brain + spinal cord.</b> The brain is the central information-processing organ; the spinal cord conducts impulses to and from the brain and is the centre for spinal reflexes.',
      },
      { t: 'p', html: '<b>Protective coverings (meninges)</b>: three layers, outer to inner:' },
      {
        t: 'p',
        html: '• <b>Dura mater</b> (tough, outer)<br>• <b>Arachnoid mater</b> (thin, middle; returns cerebrospinal fluid to the bloodstream)<br>• <b>Pia mater</b> (delicate, inner, in contact with brain tissue)',
      },
      {
        t: 'p',
        html: 'The meninges of the brain and spinal cord are continuous through the <b>foramen magnum</b>. <b>Cerebrospinal fluid (CSF)</b> fills the brain cavities (ventricles) and the space around the CNS, cushioning it.',
      },
      {
        t: 'table',
        title: 'The three developmental divisions of the brain',
        head: ['Division', 'Major parts'],
        rows: [
          ['Forebrain', 'Cerebrum + Diencephalon (thalamus, hypothalamus) + limbic system'],
          ['Midbrain', 'Cerebral aqueduct; corpora quadrigemina (4 dorsal lobes)'],
          ['Hindbrain', 'Pons, Cerebellum, Medulla oblongata'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Cerebrum:</b> the largest part; split into two <b>cerebral hemispheres</b> joined by the <b>corpus callosum</b> (a thick band of nerve fibres). Its outer layer, the <b>cerebral cortex</b>, is folded <b>grey matter</b> containing <b>sensory, motor, and association areas</b>; the inner layer is <b>white matter</b> (sometimes called the cerebral medulla) made of axons. The <b>sensory areas</b> receive incoming sensations, the <b>motor areas</b> issue voluntary commands, and the <b>association areas</b> are neither purely sensory nor motor: they integrate the two and underlie memory, reasoning, and communication. The folding of the cortex into ridges (gyri) and grooves (sulci) packs far more neurons into the cranium than a smooth surface could.<br>• <b>Olfactory lobes:</b> a pair of structures at the front that receive the sensation of smell and relay it to the temporal region of the cerebrum.<br>• <b>Diencephalon:</b> the <b>thalamus</b> is a major relay and coordinating centre for sensory and motor signalling; the <b>hypothalamus</b> lies at its base and contains centres for body temperature (“thermostat”), hunger and thirst, plus <b>neurosecretory cells</b>, and it controls the pituitary.<br>• <b>Limbic system:</b> the inner parts of the cerebral hemispheres together with deep structures such as the <b>amygdala</b> and <b>hippocampus</b>; with the hypothalamus it governs emotions (rage, fear, pleasure), motivation, and sexual behaviour.<br>• <b>Midbrain:</b> the <b>cerebral aqueduct (iter)</b> passes through it, connecting the third and fourth ventricles; the dorsal <b>corpora quadrigemina</b> are reflex centres for vision and hearing.<br>• <b>Pons:</b> a band of fibre tracts that interconnects brain regions, lies between the midbrain and the medulla oblongata in the brain stem, and helps regulate respiratory rhythm.<br>• <b>Cerebellum:</b> the second-largest part of the brain, with a deeply convoluted surface (to pack in more neurons); coordinates muscular activity, posture, and <b>equilibrium</b>. Its cortex contains <b>Purkinje cells</b> (inhibitory, GABA-releasing).<br>• <b>Medulla oblongata:</b> the lowest part, connected to the spinal cord; houses centres for <b>respiration, heartbeat, blood pressure, cardiovascular reflexes, gastric secretion, and peristaltic movements</b>.<br>• <b>Brain stem</b> = midbrain + pons + medulla oblongata: the connecting stalk between brain and spinal cord.',
      },
      {
        t: 'p',
        html: '<b>CNS glial cells: oligodendrocytes</b> (the CNS equivalent of Schwann cells, forming myelin within the CNS), <b>astrocytes</b> (support; transport materials from blood vessels to neurons), and <b>microglia</b> (phagocytic, immune defence). <b>Nuclei</b> are clusters of grey matter (cell bodies) embedded within white matter.',
      },
      {
        t: 'p',
        html: '<b>Spinal cord</b>: extends downward from the medulla; unlike the cerebral cortex, its <b>grey matter is internal (H-shaped)</b> and <b>white matter external</b>, carrying ascending (sensory) and descending (motor) tracts.',
      },
      { t: 'fig', id: 'b11-18-fig-18.3' },

      { t: 'part', title: 'Key processes and mechanisms' },
      { t: 'p', html: '<b>3.1 Functional localisation: which part does what</b>' },
      {
        t: 'p',
        html: 'The CNS works by assigning jobs to regions. Tracing a task through the brain makes the map stick:',
      },
      {
        t: 'p',
        html: '• <b>Cerebrum (cortex):</b> all conscious activity: thinking, memory, intelligence, perception of sensations, and initiation of voluntary movement. The <b>sensory areas</b> receive incoming information, the <b>motor areas</b> issue commands, and the <b>association areas</b> link them and underlie memory, communication, and reasoning. As the largest and most recently evolved part of the brain, the cerebrum is what makes deliberate, learned, and reasoned behaviour possible: everything from solving a problem to choosing your words.<br>• <b>Thalamus:</b> the great relay: most sensory signals (smell excepted) and many motor signals pass through it on the way to and from the cortex, so it acts as the brain’s central switchboard, filtering and forwarding information to the correct cortical area.<br>• <b>Hypothalamus:</b> the body’s <b>homeostatic controller</b>: temperature regulation, hunger, thirst, and the bridge between the nervous and endocrine systems. Its <b>neurosecretory cells</b> secrete hormones, and it directs the pituitary gland, making it a main point where electrical neural control hands over to chemical hormonal control (the link you will trace further in the next chapter).<br>• <b>Limbic system + hypothalamus:</b> the seat of <b>emotion and motivation</b>.<br>• <b>Midbrain (corpora quadrigemina):</b> centres for <b>visual and auditory reflexes</b> (e.g., turning the head towards a sound).<br>• <b>Cerebellum:</b> fine-tunes <b>posture, balance, and coordinated voluntary movement</b>: it doesn’t initiate movement but makes it smooth and accurate. Its cortex is densely packed with <b>Purkinje cells</b>, large branching neurons that release the inhibitory neurotransmitter <b>GABA</b> to dampen and time-correct motor signals; this is how a clumsy intended movement becomes a precise one.<br>• <b>Pons:</b> helps regulate <b>breathing rhythm</b> and relays signals between the cerebrum and the cerebellum.<br>• <b>Medulla oblongata:</b> the <b>vital reflex centre</b>: controls heartbeat, blood pressure, respiration, and reflexes like coughing, sneezing, swallowing, and vomiting. This is why medullary injury is life-threatening.<br>• <b>Brain stem (midbrain + pons + medulla):</b> beyond its own centres, it is the <b>through-route</b> for every nerve tract running between the spinal cord and the higher brain: sever it and the cortex is cut off from the body even if both are intact.',
      },
      { t: 'p', html: '<b>3.2 Protection and the role of CSF</b>' },
      { t: 'p', html: 'The CNS is protected at three levels that work together:' },
      {
        t: 'p',
        html: '1. <b>Bony casing</b>: the cranium around the brain and the vertebral column around the spinal cord.<br>2. <b>Meninges</b>: the dura, arachnoid, and pia mater, which anchor and wrap the tissue.<br>3. <b>Cerebrospinal fluid</b>: produced within and filling the <b>ventricles</b> (the two lateral chambers open into the third, which is linked to the fourth by the cerebral aqueduct). CSF acts as a <b>shock absorber</b>, maintains a stable chemical environment, and removes wastes. The arachnoid mater returns CSF to the bloodstream, keeping the volume balanced. Because the brain effectively floats in this fluid, its true weight bearing down on the base of the skull is greatly reduced, and sudden jolts are cushioned rather than transmitted straight into the soft tissue.',
      },
      { t: 'p', html: '<b>3.3 The information-flow logic</b>' },
      {
        t: 'p',
        html: 'Sensory impulses from receptors travel up the spinal cord’s <b>ascending tracts</b> to the brain; the thalamus relays them to the cerebral cortex, where they are interpreted and a decision is formed. Motor commands then descend through <b>descending tracts</b> to the effectors. The brain stem sits in the middle of this two-way traffic, while the cerebellum continuously monitors and corrects ongoing movement, a feedback loop that keeps you upright as you walk without conscious effort.',
      },
      {
        t: 'p',
        html: 'The spinal cord is not merely a passive cable. For many protective responses it acts as an <b>independent reflex centre</b>: when you touch something painfully hot, the sensory signal enters the cord, is switched directly to a motor neuron there, and your hand withdraws before the message even reaches the brain. The brain is informed a moment later, which is why you feel the pain after you have already pulled away. This is why intact spinal pathways are essential for sound reflex action, and why spinal-cord injury can abolish both sensation and voluntary movement below the level of damage while leaving the brain perfectly healthy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board: Diagram identification',
        q: 'In a mid-sagittal section of the brain, a deeply folded structure lies dorsally at the back, below the cerebrum and behind the pons. A patient with damage here cannot walk in a straight line or maintain balance. Name the structure and justify from the symptom.',
        steps: [
          '<b>Reasoning:</b> Dorsal, posterior, deeply convoluted, below cerebrum, behind pons → <b>cerebellum</b>. The symptom clinches it: loss of balance and coordinated movement is exactly the cerebellum’s job (posture and equilibrium). Note it does not cause paralysis (movement is still possible, just clumsy) because the cerebellum coordinates rather than initiates movement.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET: MCQ with reasoning / speed',
        q: 'A blow to the back of the lower brain stops the patient’s breathing and heartbeat almost immediately. The damaged centre is in the: <b>(a)</b> cerebrum <b>(b)</b> cerebellum <b>(c)</b> medulla oblongata <b>(d)</b> hypothalamus',
        steps: [
          '<b>Reasoning:</b> “Breathing and heartbeat” = <b>vital involuntary centres</b> = <b>medulla oblongata</b> → <b>(c)</b>. Speed elimination: cerebrum (a) handles conscious activity, not heartbeat; cerebellum (b) handles balance; hypothalamus (d) handles temperature/hunger/thirst. <b>Trap:</b> students who associate “control centre” loosely with cerebrum pick (a), but autonomic vital functions live in the medulla.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET: Match the column',
        q: 'Match each brain part with its primary function.<br>Column I<br>A. Cerebrum<br>B. Cerebellum<br>C. Hypothalamus<br>D. Medulla oblongata<br>Column II<br>1. Controls the pituitary; thermoregulation<br>2. Memory and intelligence<br>3. Heartbeat and respiration<br>4. Posture and equilibrium',
        steps: [
          '<b>Reasoning:</b> Cerebrum → higher functions → A–2. Cerebellum → balance → B–4. Hypothalamus → thermostat + pituitary → C–1. Medulla → vital centres → D–3.',
        ],
        ans: 'A–2, B–4, C–1, D–3',
      },
      {
        t: 'ex',
        tag: 'NEET high-difficulty: Assertion–Reason',
        q: '<b>Assertion (A):</b> The limbic system is responsible for the regulation of sexual behaviour and emotional reactions. <b>Reason (R):</b> The limbic system includes the hypothalamus, amygdala, and hippocampus. <b>(a)</b> Both A and R true, R correct explanation of A <b>(b)</b> Both A and R true, R not the correct explanation of A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
        steps: [
          '<b>Reasoning: A is true</b>: the limbic system governs emotion, motivation, and sexual behaviour. <b>R is taken as true</b>: the hypothalamus, amygdala and hippocampus are the usual shorthand list. (NCERT words the limbic system as the inner parts of the cerebral hemispheres with the amygdala, hippocampus and related structures, working with the hypothalamus; the book’s list is the usual shorthand.) Does R explain A? No: R only lists structures the limbic system includes; it does not give the reason why the limbic system regulates emotion and sexual behaviour. Both statements are true, but R is not the correct explanation of A → <b>(b)</b>. Trap: (a) treats a list of parts as an explanation.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the three meninges in order from outermost to innermost.',
            a: 'Dura mater → arachnoid mater → pia mater.',
          },
          {
            q: '[NEET] The cerebral aqueduct passes through which part of the brain? <b>(a)</b> forebrain <b>(b)</b> midbrain <b>(c)</b> cerebellum <b>(d)</b> medulla oblongata',
            a: '(b).',
          },
          {
            q: '[CUET] Arrange the three developmental divisions of the brain from anterior to posterior, and name one part of each.',
            a: 'Forebrain (cerebrum) → midbrain (corpora quadrigemina) → hindbrain (cerebellum/pons/medulla).',
          },
          {
            q: '[NEET] Which CNS glial cell is functionally equivalent to the Schwann cell of the PNS? <b>(a)</b> astrocyte <b>(b)</b> microglia <b>(c)</b> oligodendrocyte <b>(d)</b> Purkinje cell',
            a: '(c).',
          },
          {
            q: '[NEET assertion–reason] A: The cerebellum can cause smooth, coordinated movement. R: The cerebellum initiates all voluntary movements of the body. Choose (a)/(b)/(c)/(d) as in worked example 4.',
            a: '(c): A true, R false; the cerebellum coordinates but does not initiate movement (that is the cerebral motor cortex).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The corpus callosum:',
        opts: [
          {
            label: 'connects the two cerebellar hemispheres',
            nudge: '<b>(a)</b> swaps cerebrum for cerebellum, a deliberate look-alike trap.',
          },
          { label: 'connects the two cerebral hemispheres', nudge: null },
          { label: 'connects the brain to the spinal cord', nudge: '<b>(c)</b> describes the brain stem.' },
          {
            label: 'connects the thalamus to the hypothalamus',
            nudge: '<b>(d)</b> invents a connection within the diencephalon.',
          },
        ],
        correct: 1,
        solution: 'It is a thick band of nerve fibres linking the left and right cerebral hemispheres.',
      },
      {
        t: 'mcq',
        q: 'Which of the following sets correctly lists the parts of the hindbrain?',
        opts: [
          { label: 'cerebrum, thalamus, hypothalamus', nudge: '<b>(a)</b> lists forebrain parts.' },
          {
            label: 'midbrain, pons, cerebrum',
            nudge: '<b>(b)</b> mixes divisions: the midbrain is a division of its own and the cerebrum is forebrain.',
          },
          { label: 'pons, cerebellum, medulla oblongata', nudge: null },
          {
            label: 'corpora quadrigemina, thalamus, pons',
            nudge: '<b>(d)</b> mixes divisions: the corpora quadrigemina are midbrain and the thalamus is forebrain.',
          },
        ],
        correct: 2,
        solution: 'The hindbrain = pons + cerebellum + medulla oblongata.',
      },
      {
        t: 'mcq',
        q: 'The grey matter and white matter of the spinal cord are arranged such that:',
        opts: [
          {
            label: 'grey matter is outside, white matter inside',
            nudge: '<b>(a)</b> describes the cerebral cortex and is the classic confusion.',
          },
          { label: 'grey matter is inside, white matter outside', nudge: null },
          { label: 'only grey matter is present', nudge: '<b>(c)</b> and <b>(d)</b> are anatomically false.' },
          { label: 'they are evenly mixed', nudge: '<b>(c)</b> and <b>(d)</b> are anatomically false.' },
        ],
        correct: 1,
        solution:
          'In the spinal cord the grey matter is internal (H-shaped) and white matter external: the reverse of the cerebral cortex.',
      },
      {
        t: 'mcq',
        q: 'The centre for hunger, thirst, and body-temperature regulation is the:',
        opts: [
          { label: 'cerebrum', nudge: '<b>(a)</b> governs conscious activity.' },
          { label: 'hypothalamus', nudge: null },
          { label: 'medulla oblongata', nudge: '<b>(c)</b> governs vital autonomic reflexes.' },
          { label: 'cerebellum', nudge: '<b>(d)</b> governs balance.' },
        ],
        correct: 1,
        solution:
          'The hypothalamus is the homeostatic control centre. None of the other three manage the body’s “thermostat.”',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Cerebrum vs cerebellum.</b> They sound alike and get swapped constantly. <b>Cerebrum = brains</b> (thinking, memory); <b>cerebellum = balance</b> (posture, coordination).',
          '<b>Grey/white matter is flipped in cerebral cortex vs spinal cord.</b> Cerebral cortex: grey outside. Spinal cord: grey inside. Never assume: recall which organ.',
          '<b>“Medulla” is a homonym trap.</b> Medulla oblongata is the brain part; adrenal medulla and renal medulla are completely different organs. In the brain context, always read it as the oblongata.',
          '<b>CNS vs PNS.</b> Only the brain and spinal cord are CNS. Nerves and ganglia outside them are PNS, a favourite “odd-one-out” trap.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Build a one-line “altitude map” of the brain: forebrain = thinking & senses (top), midbrain = visual/auditory reflexes (middle), hindbrain = life-support & balance (bottom). Most function questions resolve the instant you place the part on this vertical map.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'CNS = brain + spinal cord',
            note: 'Protected by cranium/vertebrae, <b>meninges (dura → arachnoid → pia)</b>, and <b>CSF</b>.',
          },
          {
            f: 'Three divisions',
            note: 'Forebrain (cerebrum + thalamus + hypothalamus + limbic) · Midbrain (cerebral aqueduct, corpora quadrigemina) · Hindbrain (pons, cerebellum, medulla oblongata).',
          },
          {
            f: 'Cerebrum',
            note: 'largest; cortex = grey matter (sensory/motor/association areas); hemispheres joined by <b>corpus callosum</b>.',
          },
          {
            f: 'Hypothalamus',
            note: 'thermostat, hunger/thirst, controls pituitary. <b>Thalamus:</b> sensory–motor relay. <b>Limbic (inner cerebral parts + amygdala, hippocampus; works with the hypothalamus):</b> emotion, motivation.',
          },
          {
            f: 'Cerebellum',
            note: 'posture, balance, coordination (Purkinje cells, GABA). <b>Medulla oblongata:</b> respiration, heartbeat, cardiovascular & gastric reflexes.',
          },
          {
            f: 'Brain stem = midbrain + pons + medulla',
            note: '<b>CNS glia:</b> oligodendrocyte (myelin), astrocyte (support), microglia (phagocytic).',
          },
        ],
        aids: [
          'Mnemonics: “Cerebellum = Balance”; meninges outer→inner “DAP” (Dura, Arachnoid, Pia); brain altitude map think → reflex → survive.',
        ],
      },
    ],
  },
];
