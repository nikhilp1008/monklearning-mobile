import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 18 (Neural Control and Coordination), Additional topics C to H, word for word from the Class 11
 * Biology Master Reference (book pp. 1115 to 1134): C "Ascending Sensory Pathways: The Two Highways Up" (opens
 * mid-page on p. 1115, after Addendum B's practice answers; ends on p. 1117), D "Synaptic Integration and the
 * Neurotransmitter Catalog" (pp. 1117 to 1119), E "Reflex Arc: Muscle Spindle, Reciprocal Innervation, and
 * Flexor-Extensor Mechanics" (pp. 1119 to 1121), F "Common Neurological and Associated Disorders" (pp. 1122 to 1123),
 * G "Practice: Full Integration Set" (the book's "Practice — Full Integration Set", mid-page p. 1123 to p. 1124),
 * H "What NEET Actually Asks" (the book's "Addendum P", p. 1124 to p. 1134). Page 1135 is the next chapter.
 *
 * Topic indexes: C = 7, D = 8, E = 9, F = 10, G = 11, H = 12. The book's example headings ("Example C.1 - [NEET]
 * Pathway Identification") become the example's tag (the bracket) and a bold lead on its question; "Reasoning:" is the
 * example's first step and "Answer:" its ans. A table the book prints inside a question (a Column I / Column II list)
 * is set as lines of cells separated by " | ". No drawing is printed on these pages (rules only), so there are no fig
 * blocks. Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 1115–1117 ─────────────────────────
  {
    n: 'C',
    title: 'Ascending Sensory Pathways: The Two Highways Up',
    extra: true,
    kalam: 'The chapter mentions “ascending tracts” and the thalamus as a relay but never names the two distinct pathways or explains what each carries.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter mentions “ascending tracts” and the thalamus as a relay but never names the two distinct pathways or explains what each carries. NEET match-the-column questions on this are perennial (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Two parallel sensory highways to the brain',
        head: ['Feature', 'Dorsal Column–Medial Lemniscal Pathway', 'Anterolateral System (Spinothalamic)'],
        rows: [
          ['Modality', 'Fine touch, vibration, pressure, stereognosis, two-point discrimination', 'Pain, temperature, crude touch'],
          ['Fibre type', 'Large, myelinated (fast)', 'Small, lightly myelinated or unmyelinated (slow)'],
          [
            'First synapse',
            'Dorsal root ganglion → axon ascends uncrossed in the dorsal column of the same side (no synapse in the cord) → first synapse in the dorsal column nuclei (medulla)',
            'Dorsal root ganglion → dorsal horn (same level) → second-order neuron crosses to the opposite side within a segment or two of entry',
          ],
          ['Crosses to opposite side', 'In the medulla (above spinal cord)', 'In the spinal cord at or near the entry level'],
          [
            'Destination in brain',
            'VPL nucleus of thalamus → somatosensory cortex (postcentral gyrus)',
            'VPL nucleus of thalamus → somatosensory cortex',
          ],
          [
            'What it tells you',
            '“Where is it?”: precise location, texture, vibration',
            '“Is it dangerous or hot/cold?”: affective, emotional quality',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Clinical logic.</b> Because the two pathways cross at different levels, a lesion on one side of the spinal cord produces a predictable pattern: loss of fine touch on the same side (ipsilateral) below the lesion (because dorsal columns have not yet crossed) and loss of pain/temperature on the opposite side (contralateral) below the lesion (because the spinothalamic tract has already crossed). This is called Brown-Séquard syndrome in its full form.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Pathway Identification.</b> A patient loses the ability to distinguish fine texture and vibration sense in the right foot but retains pain sensation. Which pathway is damaged, and on which side?',
        steps: [
          '<b>Reasoning:</b> Fine texture and vibration are carried by the dorsal column–medial lemniscal pathway. These fibres ascend on the same side as the foot they serve and do not cross until the medulla. So damage to the right dorsal column of the spinal cord, below the medullary crossing, cuts right-foot fine touch and vibration. Pain is carried by the anterolateral system, which crosses to the other side near the level of entry and is therefore spared.',
        ],
        ans: 'Dorsal column–medial lemniscal pathway on the right side of the spinal cord.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Crosses Where?</b> Where do the second-order fibres of the anterolateral system cross the spinal cord, relative to the level at which the sensory fibres entered?',
        steps: [
          '<b>Reasoning:</b> Second-order neurons of the spinothalamic tract cross within one or two spinal segments of entering, typically within the anterior white commissure. The name “anterolateral” refers to the tract’s position: it ascends in the anterolateral white matter of the cord.',
        ],
        ans: 'Within one to two spinal segments of entry: the second-order neuron decussates (crosses) in the spinal cord, not in the brain.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Pain and temperature sensations are carried by which tract?<br>(a) Dorsal column<br>(b) Spinothalamic<br>(c) Corticospinal<br>(d) Rubrospinal',
            a: '(b): spinothalamic (anterolateral) tract.',
          },
          {
            q: '[CUET] Which ascending tract crosses to the opposite side in the spinal cord itself?<br>(a) Fasciculus gracilis<br>(b) Fasciculus cuneatus<br>(c) Spinothalamic tract<br>(d) All of the above',
            a: '(c): spinothalamic tract crosses in the spinal cord; the dorsal column fasciculi (gracilis, cuneatus) ascend ipsilaterally and cross in the medulla.',
          },
          {
            q: '[CBSE] Where does the dorsal column pathway first cross to the opposite side?',
            a: 'In the medulla (at the level of the dorsal column nuclei, not in the spinal cord).',
          },
          {
            q: '[NEET] A lesion in the left half of the spinal cord at thoracic level would cause loss of:<br>(a) pain right leg, fine touch left leg<br>(b) pain left leg, fine touch right leg<br>(c) both pain and fine touch left leg<br>(d) both pain and fine touch right leg',
            a: '(a): pain lost on the right leg (right-leg pain fibres cross to the left within a segment or two of entry, well below the lesion, and then ascend on the left, where the left-sided lesion cuts them); fine touch lost on the left leg (dorsal column fibres ascend uncrossed on the left side and are cut by the lesion).',
          },
          {
            q: '[CUET] The fasciculus gracilis and fasciculus cuneatus are subdivisions of which pathway?',
            a: 'Dorsal column–medial lemniscal pathway.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 1117–1119 ─────────────────────────
  {
    n: 'D',
    title: 'Synaptic Integration and the Neurotransmitter Catalog',
    extra: true,
    kalam: 'The postsynaptic neuron integrates all incoming EPSPs and IPSPs simultaneously.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces EPSP and IPSP and says only that their net effect decides whether the threshold is crossed; it does not name spatial and temporal summation or show the sums, nor does it give a catalog of neurotransmitters beyond acetylcholine, noradrenaline, adrenaline and GABA. Both are examinable.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Spatial summation: several inputs at once.</b><br>A single synaptic input may produce a graded EPSP of, say, 5 mV, insufficient to reach the −55 mV threshold. If several presynaptic neurons fire simultaneously, their individual EPSPs add up at the axon hillock. If the sum reaches threshold, an action potential fires. This is spatial summation: simultaneous inputs combine.',
      },
      {
        t: 'p',
        html: '<b>Temporal summation: one input repeatedly.</b><br>If a single presynaptic neuron fires rapidly (two spikes close together in time), the second EPSP arrives before the first has fully decayed, and the two add up temporally. Again, the combined depolarisation may reach threshold.',
      },
      {
        t: 'table',
        title: 'EPSP vs IPSP: push vs pull',
        head: ['Potential', 'Effect on postsynaptic neuron', 'Direction of ion flow', 'Result'],
        rows: [
          ['EPSP', 'Depolarises: moves toward threshold', 'Na<sup>+</sup> and/or Ca<sup>2+</sup> inward', 'Excitatory: encourages firing'],
          ['IPSP', 'Hyperpolarises: moves away from threshold', 'Cl<sup>−</sup> inward and/or K<sup>+</sup> outward', 'Inhibitory: discourages firing'],
        ],
      },
      {
        t: 'p',
        html: 'The postsynaptic neuron integrates all incoming EPSPs and IPSPs simultaneously. Whether it fires depends on the net sum: a few IPSPs can cancel several EPSPs.',
      },
      {
        t: 'table',
        title: 'Major neurotransmitters: a working catalog',
        head: ['Neurotransmitter', 'Primary role in CNS/PNS', 'Notes'],
        rows: [
          [
            'Acetylcholine (ACh)',
            'Somatic neuromuscular junction; parasympathetic postganglionic; CNS learning and memory',
            'Removed by acetylcholinesterase (AChE)',
          ],
          ['Noradrenaline (norepinephrine)', 'Most sympathetic postganglionic fibres; CNS mood and arousal', 'Adrenergic'],
          [
            'Adrenaline (epinephrine)',
            'Hormone from adrenal medulla; also acts as neurotransmitter centrally',
            'Released during stress',
          ],
          ['Dopamine', 'CNS motor control, reward pathway, motivation', 'Deficiency linked to Parkinson’s disease'],
          ['Serotonin (5-HT)', 'CNS mood, sleep, appetite', 'Targeted by some antidepressants'],
          ['GABA', 'Main inhibitory neurotransmitter in CNS', 'GABA-A receptor is target of benzodiazepines'],
          ['Glutamate', 'Main excitatory neurotransmitter in CNS', 'NMDA, AMPA, and kainate receptor subtypes'],
          ['Glycine', 'Inhibitory in spinal cord and brain stem', 'Works with GABA in spinal reflex inhibition'],
          ['Substance P', 'Pain transmission in afferent fibres', 'Released by nociceptive (pain) neurons'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Summation.</b> A neuron receives three excitatory inputs, each producing an EPSP of 6 mV. The threshold is −55 mV from a resting potential of −70 mV. Will a single input trigger an action potential? Will all three together?',
        steps: [
          '<b>Reasoning:</b> One EPSP: −70 + 6 = −64 mV, still more negative than the −55 mV threshold. No AP. Three EPSPs by spatial summation: 3 × 6 = 18 mV in total, so −70 + 18 = −52 mV, less negative than −55 mV, so threshold is reached. AP fires.',
        ],
        ans: 'Single input: no (subthreshold). All three inputs simultaneously: yes (spatial summation brings the membrane to −52 mV, past the −55 mV threshold).',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Identify Neurotransmitter.</b> A drug blocks dopamine receptors in the brain. Which condition is this drug most likely to treat?<br>(a) Schizophrenia (positive symptoms)<br>(b) Parkinson’s disease<br>(c) Myasthenia gravis<br>(d) Alzheimer’s disease',
        steps: [
          '<b>Reasoning:</b> Parkinson’s disease is a dopamine-deficiency disorder of the substantia nigra in the midbrain, so blocking dopamine receptors would worsen it; option (b) is wrong. Dopamine-receptor blockers (antipsychotics) are used to treat schizophrenia. Parkinson’s disease is treated with L-DOPA or dopamine agonists, not blockers.',
        ],
        ans: '(a): dopamine receptor blockers (antipsychotics) treat schizophrenia. Dopamine agonists treat Parkinson’s.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The main inhibitory neurotransmitter in the central nervous system is:<br>(a) acetylcholine<br>(b) glutamate<br>(c) GABA<br>(d) dopamine',
            a: '(c): GABA (gamma-aminobutyric acid).',
          },
          {
            q: '[CBSE] Define spatial summation and state one condition required for it to occur.',
            a: 'Spatial summation: multiple presynaptic neurons fire simultaneously and their EPSPs add at the axon hillock. Requires that the neurons be active at the same time and their terminals be close enough to the same point on the postsynaptic membrane.',
          },
          {
            q: '[NEET] A neuron at −70 mV receives two EPSPs of 5 mV each and one IPSP of 8 mV. Will it fire? (Threshold = −55 mV.)',
            a: 'Net change: 2 × (+5) + (−8) = +10 − 8 = +2 mV. New potential: −70 + 2 = −68 mV. Still below −55 mV threshold: no AP.',
          },
          {
            q: '[CUET] Which neurotransmitter is released at the somatic neuromuscular junction?<br>(a) noradrenaline<br>(b) acetylcholine<br>(c) dopamine<br>(d) GABA',
            a: '(b): acetylcholine.',
          },
          {
            q: '[NEET] The neurotransmitter that is deficient in the brains of Parkinson’s disease patients is:<br>(a) ACh<br>(b) GABA<br>(c) dopamine<br>(d) serotonin',
            a: '(c): dopamine.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 1119–1121 ─────────────────────────
  {
    n: 'E',
    title: 'Reflex Arc: Muscle Spindle, Reciprocal Innervation, and Flexor-Extensor Mechanics',
    extra: true,
    kalam: 'The muscle spindle is a specialised sensory organ embedded within a skeletal muscle.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers monosynaptic and polysynaptic arcs and says an interneuron can relax the opposing muscle, but it does not explain the muscle spindle (the receptor in the stretch reflex), name reciprocal innervation, or give the difference between a flexor and an extensor reflex. NEET often asks all three.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The muscle spindle: the receptor that detects stretch.</b><br>The muscle spindle is a specialised sensory organ embedded within a skeletal muscle. It contains intrafusal muscle fibres (inner, with sensory endings) surrounded by extrafusal fibres (outer, ordinary contractile fibres). Sensory endings wrapped around the intrafusal fibres detect stretch. When a muscle is stretched:<br>1. The spindle is stretched → sensory endings fire.<br>2. The sensory neuron carries the impulse to the spinal cord.<br>3. In the monosynaptic stretch reflex: direct synapse onto the same muscle’s motor neuron → the muscle contracts and resists the stretch.',
      },
      {
        t: 'p',
        html: 'The gamma motor neuron (γ-MN) adjusts spindle sensitivity. When the CNS activates γ-MN, the intrafusal fibres contract, keeping the spindle taut even when the whole muscle shortens, maintaining sensitivity throughout the contraction.',
      },
      {
        t: 'p',
        html: '<b>Reciprocal innervation: flexor withdrawal reflex mechanics.</b><br>When you step on a tack, the response is more complex than “leg moves away.” In the withdrawal reflex:<br>• Flexor muscles on the affected leg contract (pull the foot up).<br>• Simultaneously, extensor muscles on the same leg relax (so they do not oppose the movement).<br><br>This requires at least two interneurons: one excitatory (driving the flexor motor neuron) and one inhibitory (suppressing the extensor motor neuron). Both are polysynaptic arcs. The coordination that prevents antagonistic muscles from fighting each other is reciprocal innervation.',
      },
      {
        t: 'table',
        title: 'Flexor vs extensor reflex',
        head: ['Reflex', 'What it does', 'Example'],
        rows: [
          ['Flexor (withdrawal) reflex', 'Remove limb from harmful stimulus', 'Hand pulls away from flame'],
          [
            'Extensor (crossed-extensor) reflex',
            'Support the body and maintain posture when the other limb withdraws',
            'When you withdraw one leg, the other extends to support your weight',
          ],
        ],
      },
      {
        t: 'p',
        html: 'In the crossed-extensor reflex, the interneuron also activates the contralateral (opposite-side) extensor motor neuron; this is why standing on one leg is possible when the other lifts.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Withdrawal Reflex Analysis.</b> A pinprick to the right foot causes the right leg to flex and withdraw. Which muscles contract? Which muscles relax? Which interneurons are involved?',
        steps: [
          '<b>Reasoning:</b> Flexor muscles (hamstrings, hip flexors) of the right leg contract to bend the knee and hip. Extensor muscles (quadriceps) of the right leg relax via an inhibitory interneuron (reciprocal innervation). The contralateral left extensor muscles contract via a crossed-extensor reflex to support body weight.',
        ],
        ans: 'Contract: right flexors. Relax: right extensors (via inhibitory interneuron). Additional: left extensors contract (via contralateral interneuron). At least two interneurons are involved, one excitatory to the flexor motor neuron and one inhibitory to the extensor motor neuron, making this polysynaptic.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Role of the Muscle Spindle.</b> State the role of the muscle spindle in the knee-jerk reflex.',
        steps: [
          '<b>Reasoning:</b> The knee-jerk is a stretch reflex. A tap on the patellar tendon stretches the quadriceps muscle. The muscle spindle within the quadriceps detects this stretch and fires. The sensory neuron synapses directly (monosynaptically) onto the quadriceps motor neuron, which contracts the same muscle. The spindle’s function is to detect changes in muscle length and initiate the reflex that resists that change.',
        ],
        ans: 'The muscle spindle detects stretch of the quadriceps muscle; its sensory input directly excites the quadriceps motor neuron (monosynaptically), causing the muscle to contract and resist the stretch. This is the knee-jerk.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The receptor in a stretch reflex is the:<br>(a) Golgi tendon organ<br>(b) muscle spindle<br>(c) Pacinian corpuscle<br>(d) free nerve ending',
            a: '(b): muscle spindle.',
          },
          {
            q: '[CBSE] What is reciprocal innervation in the context of a withdrawal reflex?',
            a: 'Reciprocal innervation means that when a flexor muscle contracts during a withdrawal reflex, the antagonistic extensor muscle simultaneously relaxes via an inhibitory interneuron, preventing the two muscle groups from opposing each other and allowing smooth withdrawal.',
          },
          {
            q: '[NEET] In the knee-jerk reflex arc, how many synapses lie between the sensory neuron and the motor neuron in the spinal cord?<br>(a) 0<br>(b) 1<br>(c) 2<br>(d) 3',
            a: '(b): one, in the cord. The sensory neuron synapses directly onto the motor neuron (monosynaptic); no interneuron is interposed.',
          },
          {
            q: '[CUET] When the right foot withdraws from a sharp object, which muscles of the left leg contract to support the body?',
            a: 'The extensor muscles of the left leg, through the crossed-extensor reflex: the contralateral extensors contract to support body weight while the right leg is lifted.',
          },
          {
            q: '[NEET] The gamma motor neuron adjusts the sensitivity of the:<br>(a) Golgi tendon organ<br>(b) muscle spindle<br>(c) nociceptor<br>(d) Merkel disc',
            a: '(b): gamma motor neurons innervate the intrafusal fibres of the muscle spindle, adjusting their tension and maintaining spindle sensitivity during muscle contraction.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 1122–1123 ─────────────────────────
  {
    n: 'F',
    title: 'Common Neurological and Associated Disorders',
    extra: true,
    kalam: 'The chapter does not treat any disease in detail.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter does not treat any disease in detail. NEET asks about Alzheimer’s disease, Parkinson’s disease, multiple sclerosis, meningitis, myasthenia gravis and epilepsy, linking symptoms to affected structures. This additional topic supplies that map.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'The six disorders',
        head: ['Disorder', 'Structure affected', 'Key features'],
        rows: [
          [
            'Alzheimer’s disease',
            'Cerebral cortex and hippocampus (cholinergic neurons)',
            'Progressive memory loss, confusion, personality change; extracellular amyloid plaques and intracellular neurofibrillary tangles',
          ],
          [
            'Parkinson’s disease',
            'Substantia nigra of midbrain (dopaminergic neurons)',
            'Tremor at rest, rigidity, bradykinesia (slowness), shuffling gait; loss of dopamine causes excess cholinergic activity',
          ],
          [
            'Multiple sclerosis (MS)',
            'Oligodendrocytes (myelin in CNS)',
            'Demyelination of CNS axons; visual disturbances, muscle weakness, fatigue; episodes most often relapsing-remitting; more common in women',
          ],
          [
            'Meningitis',
            'Meninges (dura, arachnoid, pia)',
            'Inflammation of meninges; fever, headache, stiff neck (nuchal rigidity); photophobia; mostly caused by bacteria or viruses',
          ],
          [
            'Myasthenia gravis',
            'Neuromuscular junction (postsynaptic ACh receptors)',
            'Autoantibodies against ACh receptors cause fatigable muscle weakness; drooping eyelids (ptosis); difficulty swallowing and breathing; worsens with use',
          ],
          [
            'Epilepsy',
            'Cerebral cortex (neurons)',
            'Recurrent seizures; abnormal, excessive, synchronous cortical neuron discharge; may involve loss of consciousness, convulsions',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Why these link to the chapter.</b> Most of these map onto content you have already studied: multiple sclerosis onto oligodendrocytes, myelin and saltatory conduction; Alzheimer’s disease onto the cerebral cortex and memory; meningitis onto the meninges. Myasthenia gravis (acetylcholine at the neuromuscular junction) and Parkinson’s disease (dopamine and the midbrain) use ideas introduced in Additional topic D; epilepsy is new here.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Match Disorder to Affected Structure.</b> A patient shows resting tremor, muscle rigidity, and a shuffling gait. Which structure is damaged, and which neurotransmitter is deficient?',
        steps: [
          '<b>Reasoning:</b> Resting tremor + rigidity + bradykinesia + shuffling gait are the cardinal features of Parkinson’s disease. The substantia nigra (part of the basal ganglia in the midbrain) degenerates, causing dopamine deficiency.',
        ],
        ans: 'Substantia nigra (midbrain); dopamine is deficient. Treatment includes L-DOPA (dopamine precursor) and dopamine agonists.',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: '<b>Meningitis.</b> Define meningitis and state one protective role of the meninges that this condition compromises.',
        steps: [
          '<b>Reasoning:</b> Meningitis is inflammation of the meninges: the three protective membranes (dura, arachnoid, pia) surrounding the brain and spinal cord. The meninges anchor and protect neural tissue; meningitis compromises this by causing swelling and pressure on the brain, potentially obstructing CSF flow and damaging neural tissue.',
        ],
        ans: 'Meningitis is inflammation of the meninges usually caused by infection (bacterial or viral). The meninges normally protect the CNS by anchoring it within the skull and vertebral column and by enclosing the CSF-filled subarachnoid space (the CSF itself is secreted by the choroid plexus in the ventricles); inflammation disrupts these functions and can obstruct CSF circulation, leading to increased intracranial pressure and neural damage.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The neurotransmitter deficient in Parkinson’s disease is:<br>(a) ACh<br>(b) GABA<br>(c) dopamine<br>(d) serotonin',
            a: '(c): dopamine.',
          },
          {
            q: '[CBSE] Name the cells attacked in multiple sclerosis and state their normal function.',
            a: 'Oligodendrocytes; their normal function is to form and maintain myelin around CNS axons (equivalent to Schwann cells in the PNS).',
          },
          {
            q: '[NEET] Myasthenia gravis involves autoantibodies against which receptor?<br>(a) noradrenergic<br>(b) muscarinic<br>(c) nicotinic ACh<br>(d) GABA',
            a: '(c): nicotinic acetylcholine receptors at the neuromuscular junction are targeted by autoantibodies in myasthenia gravis, reducing effective ACh signalling and causing fatigable weakness.',
          },
          {
            q: '[CUET] Match: (A) Alzheimer’s (1) Demyelination (B) Parkinson’s (2) Cholinergic neuron loss (C) Multiple sclerosis (3) Dopamine deficiency',
            a: 'A–2, B–3, C–1.',
          },
          {
            q: '[NEET] Inflammation of the meninges is called:<br>(a) encephalitis<br>(b) meningitis<br>(c) neuritis<br>(d) arachnoiditis',
            a: '(b): meningitis.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G (the book’s “Practice — Full Integration Set”) · pp. 1123–1124 ─────────────────────────
  {
    n: 'G',
    title: 'Practice: Full Integration Set',
    extra: true,
    kalam: 'The following questions synthesise across all the additional topics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The following questions synthesise across all the additional topics. Attempt them after completing Additional topics A to F.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A patient with a spinal cord lesion at level T5 (left side) loses pain sensation in the right leg and fine touch sensation in the left leg. Explain why.',
            a: 'Pain (spinothalamic tract) crosses within a segment or two of its entry into the spinal cord. A left-side lesion at T5 interrupts pain fibres that have already crossed to the left side; these carry pain from the right leg. Fine touch (dorsal column) has not yet crossed at T5; the left dorsal column carries fine touch from the left leg ipsilaterally. So right-leg pain and left-leg fine touch are both lost. This is Brown-Séquard syndrome (hemisection of the spinal cord).',
          },
          {
            q: '[NEET] During the absolute refractory period, a neuron cannot fire an action potential regardless of stimulus strength. State the ion-channel basis for this.',
            a: 'During the absolute refractory period the voltage-gated Na<sup>+</sup> channels are first open and then inactivated; inactivated channels cannot reopen no matter how strong the depolarising stimulus. Because no further Na<sup>+</sup> can enter, a new depolarisation cannot start. The membrane is physically incapable of firing.',
          },
          {
            q: '[CUET] Arrange the twelve cranial nerves in order and identify which carry parasympathetic fibres.',
            a: 'I Olfactory (sensory), II Optic (sensory), III Oculomotor (motor, parasympathetic), IV Trochlear (motor), V Trigeminal (mixed), VI Abducens (motor), VII Facial (mixed, parasympathetic), VIII Vestibulocochlear (sensory), IX Glossopharyngeal (mixed, parasympathetic), X Vagus (mixed, parasympathetic), XI Accessory (motor), XII Hypoglossal (motor). Cranial parasympathetic outflow: III, VII, IX, X.',
          },
          {
            q: '[CBSE] Draw a labelled diagram of a muscle spindle and state its role in the stretch reflex.',
            a: '(Diagram would show: extrafusal fibres surrounding intrafusal fibres; sensory endings on intrafusal fibres; gamma motor neuron innervating intrafusal fibres; stretch → sensory firing → monosynaptic activation of motor neuron → muscle contraction. Role: detects changes in muscle length and initiates the stretch reflex that resists that change.)',
          },
          {
            q: '[NEET] A drug enhances GABA activity in the CNS. Which disorder is it likely to treat, and which neurotransmitter does it act on?',
            a: 'Enhances GABA activity → treats conditions involving excessive neuronal excitability. Likely candidates: epilepsy (GABAergic anticonvulsants), anxiety disorders, or spasticity. The neurotransmitter is GABA (gamma-aminobutyric acid), the main inhibitory neurotransmitter in the CNS.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H (the book’s Addendum P) · pp. 1124–1134 ─────────────────────────
  {
    n: 'H',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'Relative frequency should guide revision priority, not confidence.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Past NEET/AIPMT papers show a clear weighting within Chapter 18 (the book’s estimate from past papers, not official figures). The topics that NEET returns to most reliably are:',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Verdict'],
        rows: [
          [
            'Neuron Structure & Nerve Impulse',
            '<b>High-frequency.</b> Na<sup>+</sup>/K<sup>+</sup> ion movements, resting vs action potential, Nissl’s granules location, myelination/saltatory conduction.',
          ],
          [
            'Central Nervous System (Brain)',
            '<b>High-frequency.</b> Hypothalamus functions, cerebellum coordination, cerebrum lobes, corpus callosum, meninges.',
          ],
          [
            'Sense Organs (Eye & Ear)',
            '<b>Highest volume:</b> rods vs cones, fovea/blind spot, cochlear chambers, organ of Corti, balance receptors. These appear as statement-type and match-the-column questions. They are not part of this chapter’s text, so study them from the sensory-reception section of NCERT. That section may have been removed from the rationalised NCERT chapter, so check the current NEET syllabus before spending time on them.',
          ],
          [
            'Peripheral & Autonomic NS',
            '<b>Moderate.</b> Sympathetic vs parasympathetic effects, somatic vs autonomic distinction, two-neuron pathway.',
          ],
          [
            'Reflex Action & Reflex Arc',
            '<b>Fewer questions</b> but assertion–reason on the shortcut logic (response before sensation) is a recurring archetype.',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Note:</b> Eye and ear questions make up a large share of this chapter’s NEET questions (the book’s estimate from past papers, not official figures). This does not mean CNS and neuron topics are unimportant. Relative frequency should guide revision priority, not confidence.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Statement-Type (Single-Correct)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> The stem presents 4 statements labelled (a)–(d), only one of which is correct. The student must spot the single true statement among three plausible-but-wrong ones.<br><b>Approach:</b> Read every option as a potential true statement. Apply the “false-test”: if an option can be falsified by a single NCERT fact, eliminate it. The correct answer often uses precise NCERT wording; the distractors are close paraphrases with one critical word swapped.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements is correct?<br>(a) Electrical synapses are more common in our neural system than chemical synapses.<br>(b) The new potential in a postsynaptic neuron may be either excitatory or inhibitory.<br>(c) Hypothalamus is the major coordination centre for sensory and motor signalling.<br>(d) The tracts of nerve fibres that connect the two cerebral hemispheres are called corpora bigemina.',
        steps: [
          '(a) False: chemical synapses are far more common in the human nervous system.',
          '(b) <b>True</b>: neurotransmitter binding can open excitatory (Na<sup>+</sup>/Ca<sup>2+</sup>) channels → EPSP, or inhibitory (Cl<sup>−</sup>) channels → IPSP. This is the textbook description in the chapter’s synapse section.',
          '(c) False: the <b>thalamus</b> is the major sensory–motor relay; the hypothalamus controls homeostasis.',
          '(d) False: the tracts connecting the two cerebral hemispheres form the <b>corpus callosum</b>, not corpora bigemina (the two-lobed optic lobes of lower vertebrates such as the frog; humans have the four-lobed corpora quadrigemina in the midbrain).',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>2. Match-the-Column</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns (structure/function pairs, or part vs description). One-to-one matching required. Usually 4 rows.<br><b>Approach:</b> Do NOT start from column I. Start from the column where you are most confident, usually the function or description column. Eliminate impossible pairs first.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match Column I (brain part) with Column II (function) and select the correct option.<br><br>Column I | Column II<br>A. Cerebrum | I. Controls the pituitary; thermoregulation<br>B. Cerebellum | II. Memory and intelligence<br>C. Hypothalamus | III. Controls the rate of heartbeat<br>D. Medulla oblongata | IV. Maintains body posture<br><br>(a) A–II, B–IV, C–I, D–III<br>(b) A–IV, B–II, C–III, D–I<br>(c) A–II, B–IV, C–III, D–I<br>(d) A–I, B–IV, C–II, D–III',
        steps: [
          'Cerebrum handles higher functions (thinking, memory, voluntary movement), not posture or pituitary control. → A–II. Options (b) and (d) fail because they pair cerebrum with IV and I.',
          'Cerebellum’s defining job is body posture and equilibrium. → B–IV is solid.',
          'Hypothalamus: thermostat + pituitary control. → C–I. Option (c) fails because it pairs hypothalamus with heartbeat (III).',
          'Medulla oblongata: vital autonomic centres (heartbeat, respiration). → D–III is correct.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements, Assertion (A) and Reason (R), with four answer options:<br>• (a) Both A and R are true, and R correctly explains A.<br>• (b) Both A and R are true, but R is NOT the correct explanation of A.<br>• (c) A is true, but R is false.<br>• (d) A is false, but R is true.<br><b>Approach:</b> First evaluate A alone. If A is false, rule out (a), (b) and (c): only the option that begins “A is false” can be right. If A is true, evaluate R. Then check whether R actually explains A mechanistically, or merely states a related but insufficient fact.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): In a withdrawal reflex, the hand is pulled back before the person consciously feels the pain.<br>Reason (R): The reflex response is completed at the level of the spinal cord, while the impulse reaches the brain only afterwards.<br>(a) Both A and R are true and R is the correct explanation of A<br>(b) Both A and R are true but R is not the correct explanation of A<br>(c) A is true but R is false<br>(d) A is false but R is true',
        steps: [
          'A is <b>true</b>: this is the textbook description of a withdrawal reflex: the effector acts before conscious sensation.',
          'R is <b>true</b>: the spinal reflex arc completes the motor response in the cord; the brain is informed after the fact.',
          'Does R explain A? Yes. The reason the hand withdraws before pain is felt is precisely that the arc is completed locally, bypassing the cortical round-trip. R is the mechanistic cause of A.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>4. Diagram/Structure Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A description of a structure’s location or a functional deficit following damage. The student names the structure.<br><b>Approach:</b> Extract the two or three most specific descriptors from the stem. Map them to the only structure that satisfies all of them simultaneously.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A patient with damage to a brain structure cannot walk in a straight line or maintain balance while standing. MRI shows the structure is dorsal, behind the pons and medulla, and below the cerebrum. It has a highly folded surface. Identify the structure.<br>(a) Cerebrum<br>(b) Hypothalamus<br>(c) Cerebellum<br>(d) Medulla oblongata',
        steps: [
          '“Cannot maintain balance” → cerebellum (it coordinates posture and equilibrium).',
          '“Dorsal, behind the pons and medulla, below the cerebrum” → cerebellum is the second-largest brain part, dorsal and posterior, lying below the occipital cerebrum.',
          '“Highly folded surface” → cerebellar cortex is deeply convoluted to pack in Purkinje cells.',
          'The distractors: cerebrum handles voluntary movement, not balance; hypothalamus is ventral and doesn’t produce motor incoherence; medulla oblongata controls vital reflexes but does not affect coordination.',
        ],
        ans: '(c)',
      },

      { t: 'part', title: 'The Traps' },
      { t: 'p', html: 'The following confusions are built deliberately into the distractors:' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it punishes', 'Distractor pattern'],
        rows: [
          [
            '<b>Afferent vs efferent swap</b>',
            'Confusing sensory (inward) with motor (outward) traffic.',
            'Option lists “motor nerves carry impulses to CNS”: the inverse.',
          ],
          [
            '<b>Sympathetic vs parasympathetic wrong transmitter</b>',
            'Confusing which division mainly uses noradrenaline vs acetylcholine (postganglionic).',
            '“Sympathetic; acetylcholine” appears as a trap option.',
          ],
          [
            '<b>Cerebrum vs cerebellum</b>',
            'Both sound like “brain” and both start with “C.”',
            'Pairing cerebrum with balance, or cerebellum with intelligence.',
          ],
          [
            '<b>Grey/white matter reversal</b>',
            'Cerebral cortex: grey outside; spinal cord: grey inside.',
            '“Grey matter is inside the cerebral cortex” as a trap.',
          ],
          [
            '<b>Na<sup>+</sup>/K<sup>+</sup> phase confusion</b>',
            'Students memorize ions without phase-tagging.',
            'Listing K<sup>+</sup> outflux as the cause of depolarisation.',
          ],
          [
            '<b>Nissl’s granules location</b>',
            '“Present in axon”: wrong.',
            'Mitochondria or ribosomes without the “absent in axon” constraint.',
          ],
          [
            '<b>Dorsal vs ventral root</b>',
            'Sensory enters dorsally; motor exits ventrally.',
            'Swapping the roots in a reflex-arc sequence.',
          ],
          [
            '<b>Fovea vs blind spot</b>',
            'Both are special spots on the retina, but opposite in nature: the fovea is packed with cones (sharpest vision), while the blind spot has no photoreceptors at all.',
            'Calling the blind spot the “region of sharpest vision.”',
          ],
          [
            '<b>Adrenal medulla vs medulla oblongata</b>',
            'Homonym trap.',
            'Describing adrenal medulla function (hormone secretion) when the stem is about brainstem.',
          ],
          [
            '<b>Myelination speed</b>',
            'Saltatory = fast; continuous = slow.',
            '“Myelinated fibres conduct slowly because myelin insulates everywhere.”',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'NEET-style questions; each answer is worked out in full.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Recall] The sodium–potassium pump transports:<br>(a) 2 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in<br>(b) 3 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in<br>(c) 2 Na<sup>+</sup> out ∶ 3 K<sup>+</sup> in<br>(d) 3 K<sup>+</sup> out ∶ 2 Na<sup>+</sup> in',
            a: '<b>Solution:</b> The Na<sup>+</sup>–K<sup>+</sup> ATPase expels 3 Na<sup>+</sup> for every 2 K<sup>+</sup> it imports, both against their concentration gradients. This is ATP-driven active transport.<br><b>Answer:</b> (b)',
          },
          {
            q: '[Level 1: Recall] Which ion moves into the axoplasm during the depolarisation phase of an action potential?<br>(a) K<sup>+</sup><br>(b) Ca<sup>2+</sup><br>(c) Na<sup>+</sup><br>(d) Cl<sup>−</sup>',
            a: '<b>Solution:</b> Depolarisation = inside turning positive. The cation that enters through the voltage-gated channels at this stage is Na<sup>+</sup>, which is held at a high concentration outside at rest. Opening voltage-gated Na<sup>+</sup> channels allows Na<sup>+</sup> to rush in, reversing the polarity from −70 mV toward +30 mV. K<sup>+</sup> outflux drives repolarisation, not depolarisation.<br><b>Answer:</b> (c)',
          },
          {
            q: '[Level 1: Recall] Nissl’s granules are absent in:<br>(a) cyton<br>(b) dendrites<br>(c) axon<br>(d) both (a) and (b)',
            a: '<b>Solution:</b> Nissl’s granules are rough endoplasmic reticulum (with ribosomes), the protein-synthesis machinery. They are in the cell body and dendrites where proteins are made. The axon lacks protein-synthesis apparatus; it depends on axoplasmic transport from the cyton.<br><b>Answer:</b> (c)',
          },
          {
            q: '[Level 2: Application] A patient with a lesion in the hypothalamus would most likely lose the ability to:<br>(a) control breathing<br>(b) maintain body temperature<br>(c) coordinate voluntary movement<br>(d) process visual information',
            a: '<b>Solution:</b> The hypothalamus is the body’s homeostatic controller: it contains the thermoregulatory (“thermostat”) centre, plus centres for hunger, thirst, and pituitary control. Breathing is a medullary centre; coordination is cerebellar; visual processing is occipital cortex.<br><b>Answer:</b> (b)',
          },
          {
            q: '[Level 2: Application] A severe blow to the back of the head stops breathing. The damaged structure is the:<br>(a) cerebrum<br>(b) cerebellum<br>(c) medulla oblongata<br>(d) pons',
            a: '<b>Solution:</b> Breathing is an autonomic vital function controlled by respiratory centres in the medulla oblongata. Damage to the small medulla stops breathing. The cerebrum handles consciousness; the cerebellum handles balance; the pons modulates respiratory rhythm but does not contain the primary centre.<br><b>Answer:</b> (c)',
          },
          {
            q: '[Level 2: Application] Which of the following statements about the knee-jerk reflex is correct?<br>(a) It is polysynaptic.<br>(b) The sensory neuron synapses directly onto the motor neuron.<br>(c) The brain is required to initiate the response.<br>(d) The impulse travels through the ventral root to enter the cord.',
            a: '<b>Solution:</b> The knee-jerk (stretch) reflex is the textbook example of a <b>monosynaptic</b> reflex: one sensory neuron synapses directly onto one motor neuron in the spinal cord, with no interneuron. The sensory neuron enters via the <b>dorsal</b> root; the motor neuron exits via the ventral root. The brain is not in the loop for the reflex itself.<br><b>Answer:</b> (b)',
          },
          {
            q: '[Level 3: Analysis] Assertion (A): The limbic system is responsible for emotional behaviour and sexual function.<br>Reason (R): The limbic system includes the hypothalamus, amygdala and hippocampus.<br>(a) Both A and R are true and R correctly explains A.<br>(b) Both A and R are true but R does not correctly explain A.<br>(c) A is true but R is false.<br>(d) A is false but R is true.',
            a: '<b>Solution:</b> A is true: the limbic system governs emotion, motivation, and sexual behaviour. R is taken as true: the hypothalamus, amygdala and hippocampus are the usual shorthand list, though NCERT has the hypothalamus working with the limbic system rather than inside it. Does the list explain the function? No: R only lists structures the limbic system includes; it does not give the reason why the limbic system regulates emotion and sexual behaviour. Both statements are true, but R is not the correct explanation of A.<br><b>Answer:</b> (b)',
          },
          {
            q: '[Level 3: Analysis] Match the columns:<br><br>Column I | Column II<br>A. Bipolar neuron | I. Embryonic stage<br>B. Multipolar neuron | II. Retina of eye<br>C. Unipolar neuron | III. Cerebral cortex<br>D. Pseudounipolar neuron | IV. Dorsal root ganglion<br><br>Which option is correct?<br>(a) A–II, B–III, C–I, D–IV<br>(b) A–I, B–II, C–III, D–IV<br>(c) A–III, B–I, C–II, D–IV<br>(d) A–II, B–III, C–IV, D–I',
            a: '<b>Solution:</b> Bipolar neurons (one axon + one dendrite) are characteristic of the retina and olfactory epithelium. Multipolar neurons (one axon + many dendrites) dominate the cerebral cortex; motor neurons are multipolar too. Unipolar neurons have a single process and are typical of the embryonic stage. Pseudounipolar neurons (sensory neurons with a single process that splits) are found in the dorsal root ganglion. The answer is A–II, B–III, C–I, D–IV.<br><b>Answer:</b> (a)',
          },
          {
            q: '[Level 3: Analysis] During the propagation of a nerve impulse, the action potential results from the movement of:<br>(a) Na<sup>+</sup> from extracellular fluid to intracellular fluid<br>(b) K<sup>+</sup> from extracellular fluid to intracellular fluid<br>(c) Na<sup>+</sup> from intracellular fluid to extracellular fluid<br>(d) K<sup>+</sup> from intracellular fluid to extracellular fluid',
            a: '<b>Solution:</b> Depolarisation is produced by Na<sup>+</sup> influx: positive ions entering the axoplasm make the inside less negative and then positive. K<sup>+</sup> efflux (moving out of the cell, intracellular → extracellular) drives repolarisation. These directions are phase-specific and must be tagged to the correct phase.<br><b>Answer:</b> (a)',
          },
          {
            q: '[Level 3: Analysis] Which of the following is NOT a reflex action?<br>(a) Blinking when a speck enters the eye<br>(b) Withdrawal of hand from a hot object<br>(c) Solving a mathematics problem<br>(d) Knee-jerk reflex',
            a: '<b>Solution:</b> A reflex is rapid, automatic, involuntary, and stereotyped: the same stimulus usually produces the same response. Solving a mathematics problem is a voluntary, conscious, learned cognitive act. Blinking, withdrawal, and the knee-jerk are all pre-wired, involuntary responses mediated by the CNS.<br><b>Answer:</b> (c)',
          },
          {
            q: '[Level 3: Analysis] A person standing in bright light has constricted pupils. This is due to the action of:<br>(a) sympathetic fibres to the sphincter pupillae muscle<br>(b) parasympathetic fibres to the dilator pupillae muscle<br>(c) parasympathetic fibres to the sphincter pupillae muscle<br>(d) sympathetic fibres to the dilator pupillae muscle',
            a: '<b>Solution:</b> Pupil constriction (miosis) is produced by contraction of the circular sphincter pupillae muscle. This muscle is innervated by parasympathetic fibres from the oculomotor nerve (CN III). Bright light activates the parasympathetic pathway, constricting the pupil to limit light entry. The sympathetic system dilates the pupil (fight-or-flight, more light is useful).<br><b>Answer:</b> (c)',
          },
          {
            q: '[Level 3: Analysis] Which of the following statements is correct?<br>(a) The space between the cornea and lens is filled with transparent gel.<br>(b) When all cones are stimulated equally, a sensation of no light (dark) is produced.<br>(c) Rhodopsin is a purplish-red protein, called visual purple.<br>(d) The anterior transparent portion of the choroid is called the cornea.',
            a: '<b>Solution:</b> The anterior transparent portion of the eye is the <b>cornea</b>, which is part of the outer fibrous layer, not the choroid (the vascular middle layer). Rhodopsin is indeed the purplish-red photopigment of rod cells (visual purple). The space between cornea and lens is the <b>aqueous chamber</b> filled with aqueous humour, not gel (that is the vitreous chamber). When all cones are equally stimulated, the result is perception of white light, not darkness.<br><b>Answer:</b> (c)',
          },
        ],
      },

      { t: 'part', title: 'Gaps to Fill in Your Notes' },
      {
        t: 'p',
        html: '1. <b>Link saltatory conduction to speed and energy efficiency.</b> NEET asks “Why is conduction faster in myelinated fibres?” The answer is that the impulse jumps from node to node; add that this also saves energy, because ions cross the membrane only at the nodes of Ranvier.<br>2. <b>Eye and ear are not covered in this chapter’s text.</b> NEET’s match-the-column and statement questions on rods vs cones, fovea vs blind spot, and cochlear chambers need many pairwise comparisons held at once. Study the sensory-reception section of NCERT and make a comparison table (structure, location, function, what is absent there). Check the current NEET syllabus first: this section may have been removed from the rationalised NCERT chapter.<br>3. <b>Contrast the autonomic and somatic pathways structurally.</b> The somatic pathway uses a single motor neuron; the autonomic pathway uses two neurons with a ganglion between them. Anchor it with a mnemonic for the sympathetic outflow (thoracolumbar, short preganglionic fibres) versus the parasympathetic outflow (craniosacral, long preganglionic fibres); it settles questions such as “which division has short preganglionic fibres?”',
      },
    ],
  },
];
