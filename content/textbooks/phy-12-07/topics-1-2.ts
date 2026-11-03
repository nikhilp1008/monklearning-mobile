import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 01 and 02: pp. 460–475 of the Class 12 Physics Master
 * Reference, word for word, each split at its Sections 1 to 8.
 * Topic 01 = the book's "Subtopic 00" (pp. 460–466; p. 459 and the top of
 * p. 460 are the title and contents). Topic 02 = the book's "Subtopic 01"
 * (pp. 467–475). The book's sub-topic numbers are rewritten to the app's
 * (00 → 01, 01 → 02, 04 → 03, 02 → 04, 03 → 05). Figure 7.1 (caption p. 469,
 * drawn p. 470) is redrawn in lib/diagrams/physics-12-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 460–466 ─────────────────────────
  {
    n: '01',
    title: 'AC Fundamentals: Average & RMS Values and Phasors',
    kalam: 'Alternating current (AC) is restless: it grows, falls to zero, reverses, and repeats, many times each second.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The bedrock of the entire chapter — every later formula uses <i>V</i><sub>rms</sub>, <i>I</i><sub>rms</sub>, and <i>ω</i>. CBSE Boards regularly ask for the RMS derivation and the mean-value derivation (2–3 marks). JEE Main tests form factor, peak factor, and RMS of combined waveforms; NEET loves the “peak vs rms” trap on the 220 V mains. Get this right and the rest of the chapter is arithmetic.',
      },
      {
        t: 'p',
        html: 'A direct current (DC) flows steadily in one direction — the current from a cell, always pushing the same way. <b>Alternating current (AC)</b> is restless: it grows, falls to zero, reverses, and repeats, many times each second. Almost all the electricity in the world is AC, and the standard shape it takes is the sine wave:<br><i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>, <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i><br>where <i>i</i><sub>m</sub> (the peak or amplitude) is the largest value the current reaches, and <i>ω</i> = 2π<i>f</i> = 2π/<i>T</i> is the angular frequency. In India the mains runs at <i>f</i> = 50 Hz, so the current completes 50 full back-and-forth cycles every second.',
      },
      {
        t: 'p',
        html: 'Why does the world bother with this restless current instead of clean, steady DC? One reason towers over the rest: <b>AC voltage can be stepped up and down almost losslessly with a transformer</b>, which lets us transmit power across the country at very high voltage (and tiny current) to save energy — something DC cannot do simply. AC is also easier to generate. The price we pay is conceptual: a quantity that keeps reversing is harder to pin a single “value” on.',
      },
      {
        t: 'p',
        html: 'Think about it this way… suppose someone asks, “how strong is the mains?” You cannot answer with the average, because over a full cycle an AC current spends as much time positive as negative, so its average is exactly <b>zero</b> — yet it can clearly light a bulb and deliver real power. The honest measure is not “how big on average” but <b>“how much heating does it do?”</b> A resistor doesn’t care which way the current flows; it heats up either way, because heating depends on <i>i</i><sup>2</sup>, which is always positive. So we ask: what steady DC current would produce the same heating in the same resistor? That equivalent value is the <b>root-mean-square (RMS)</b> current — literally the square <b>r</b>oot of the <b>m</b>ean of the <b>s</b>quare of the current. The RMS value is the “effective” or “DC-equivalent” value, and it is what every AC meter reads and every appliance is rated for.',
      },
      {
        t: 'p',
        html: 'There is a second, weaker measure — the <b>average (mean) value taken over only the positive half-cycle</b> — which matters for things like the charge delivered by a half-wave rectifier. Both will be derived below.',
      },
      {
        t: 'p',
        html: 'A wonderfully compact way to picture all of this is the <b>phasor</b>: a rotating arrow of length equal to the amplitude, spinning anticlockwise at angular speed <i>ω</i>. Its shadow (projection) on the vertical axis at any instant gives the instantaneous value <i>i</i><sub>m</sub> sin <i>ωt</i>. This is exactly the reference-circle picture of simple harmonic motion — and it becomes indispensable in Topic 02 when voltages and currents are out of step and must be added like vectors rather than numbers.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The clean factors <i>i</i><sub>rms</sub> = <i>i</i><sub>m</sub>/√2 and mean = 2<i>i</i><sub>m</sub>/π hold <b>only for a pure sinusoid</b>. A square wave, triangular wave, or rectified wave has different factors — you must redo the integral.<br>• The full-cycle average of a symmetric AC is zero; the useful “mean” is always understood to be over a <b>half cycle</b> unless stated otherwise.<br>• “220 V mains” always means the <b>RMS</b> value, never the peak.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Instantaneous values',
        main: '<i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i><br><i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i><br><i>ω</i> = 2π<i>f</i> = 2π/<i>T</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'RMS (effective) values',
        main: '<i>I</i><sub>rms</sub> = <i>i</i><sub>m</sub>/√2 = 0.707 <i>i</i><sub>m</sub><br><i>V</i><sub>rms</sub> = <i>v</i><sub>m</sub>/√2 = 0.707 <i>v</i><sub>m</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mean (average) value over a half cycle',
        main: '<i>I</i><sub>avg</sub> = 2<i>i</i><sub>m</sub>/π = 0.637 <i>i</i><sub>m</sub><br><i>V</i><sub>avg</sub> = 2<i>v</i><sub>m</sub>/π = 0.637 <i>v</i><sub>m</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Form factor and peak factor (sinusoid)',
        main: 'Form factor = <i>I</i><sub>rms</sub>/<i>I</i><sub>avg</sub> = π/(2√2) = 1.11<br>Peak factor = <i>i</i><sub>m</sub>/<i>I</i><sub>rms</sub> = √2 = 1.414',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Average power dissipated in a resistor (this is why RMS is defined as it is)',
        main: '<i>P</i><sub>avg</sub> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub><sup>2</sup>/<i>R</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Indian mains (worth memorising)',
        main: '<i>V</i><sub>rms</sub> = 220 V ⇒ <i>v</i><sub>m</sub> = 220√2 ≈ 311 V<br><i>f</i> = 50 Hz ⇒ <i>T</i> = 0.02 s, <i>ω</i> = 100π ≈ 314 rad s<sup>−1</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          [
            'Peak current / voltage',
            '<i>i</i><sub>m</sub>, <i>v</i><sub>m</sub>',
            'A, V',
            '[A], [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]',
          ],
          [
            'RMS current / voltage',
            '<i>I</i><sub>rms</sub>, <i>V</i><sub>rms</sub>',
            'A, V',
            '[A], [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]',
          ],
          ['Angular frequency', '<i>ω</i>', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
          ['Form / peak factor', '—', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variables:</b> <i>i</i><sub>m</sub>, <i>v</i><sub>m</sub> = peak (amplitude) values; <i>ω</i> = angular frequency; <i>f</i> = frequency; <i>T</i> = time period; <i>I</i><sub>rms</sub>, <i>V</i><sub>rms</sub> = rms values; <i>I</i><sub>avg</sub>, <i>V</i><sub>avg</sub> = half-cycle mean values.',
      },

      { t: 'part', title: 'Key derivations' },
      {
        t: 'p',
        html: '<b>3.1 RMS value of a sinusoidal current</b><br>By definition, the RMS value is the square root of the average of <i>i</i><sup>2</sup> over a full cycle. With <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>:<br><i>I</i><sub>rms</sub><sup>2</sup> = (1/<i>T</i>) ∫<sub>0</sub><sup><i>T</i></sup> <i>i</i><sub>m</sub><sup>2</sup> sin<sup>2</sup> <i>ωt</i> d<i>t</i><br>Use the identity sin<sup>2</sup> <i>ωt</i> = (1 − cos 2<i>ωt</i>)/2:<br><i>I</i><sub>rms</sub><sup>2</sup> = (<i>i</i><sub>m</sub><sup>2</sup>/<i>T</i>) ∫<sub>0</sub><sup><i>T</i></sup> ((1 − cos 2<i>ωt</i>)/2) d<i>t</i> = (<i>i</i><sub>m</sub><sup>2</sup>/(2<i>T</i>)) [<i>t</i> − (sin 2<i>ωt</i>)/(2<i>ω</i>)]<sub>0</sub><sup><i>T</i></sup><br>Over one full period the sin 2<i>ωt</i> term returns to zero, leaving only <i>t</i> = <i>T</i>:<br><i>I</i><sub>rms</sub><sup>2</sup> = (<i>i</i><sub>m</sub><sup>2</sup>/(2<i>T</i>)) · <i>T</i> = <i>i</i><sub>m</sub><sup>2</sup>/2 ⇒ <i>I</i><sub>rms</sub> = <i>i</i><sub>m</sub>/√2',
      },
      {
        t: 'p',
        html: '<b>Physical meaning:</b> the average of sin<sup>2</sup> over a cycle is exactly ½, so the mean square current is <i>i</i><sub>m</sub><sup>2</sup>/2, and its square root — the value that matches a DC current’s heating — is <i>i</i><sub>m</sub>/√2.',
      },
      {
        t: 'p',
        html: '<b>3.2 Mean value over a half cycle</b><br>The full-cycle average is zero, so we average over the positive half, 0 to <i>T</i>/2:<br><i>I</i><sub>avg</sub> = (1/(<i>T</i>/2)) ∫<sub>0</sub><sup><i>T</i>/2</sup> <i>i</i><sub>m</sub> sin <i>ωt</i> d<i>t</i> = (2<i>i</i><sub>m</sub>/<i>T</i>) [−(cos <i>ωt</i>)/<i>ω</i>]<sub>0</sub><sup><i>T</i>/2</sup><br>Since <i>ω</i>(<i>T</i>/2) = π and cos π = −1, cos 0 = 1:<br><i>I</i><sub>avg</sub> = (2<i>i</i><sub>m</sub>/(<i>Tω</i>))(−cos π + cos 0) = (2<i>i</i><sub>m</sub>/(<i>Tω</i>))(1 + 1) = 4<i>i</i><sub>m</sub>/(<i>Tω</i>)<br>With <i>ω</i> = 2π/<i>T</i>, <i>Tω</i> = 2π:<br><i>I</i><sub>avg</sub> = 4<i>i</i><sub>m</sub>/(2π) = 2<i>i</i><sub>m</sub>/π = 0.637 <i>i</i><sub>m</sub>',
      },
      {
        t: 'p',
        html: '<b>3.3 Why RMS is the right measure — average power in a resistor</b><br>For a resistor carrying <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>, the instantaneous power is <i>p</i> = <i>i</i><sup>2</sup><i>R</i> = <i>i</i><sub>m</sub><sup>2</sup><i>R</i> sin<sup>2</sup> <i>ωt</i>. Averaging over a cycle and using ⟨sin<sup>2</sup> <i>ωt</i>⟩ = ½:<br><i>P</i><sub>avg</sub> = <i>i</i><sub>m</sub><sup>2</sup><i>R</i> · ½ = (<i>i</i><sub>m</sub>/√2)<sup>2</sup> <i>R</i> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i><br>This is identical in form to the DC result <i>P</i> = <i>I</i><sup>2</sup><i>R</i> — provided we use the RMS current. That equivalence is the whole reason RMS is defined the way it is: it makes AC power calculations look exactly like DC ones.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Peak, rms, and mean',
        q: 'The peak voltage of a sinusoidal AC supply is 311 V. Find (a) the rms voltage and (b) the mean voltage over a half cycle.',
        steps: [
          '<b>Given:</b> <i>v</i><sub>m</sub> = 311 V.',
          '<b>(a)</b> <i>V</i><sub>rms</sub> = <i>v</i><sub>m</sub>/√2 = 311/1.414 = 220 V — the familiar mains rating.',
          '<b>(b)</b> <i>V</i><sub>avg</sub> = 2<i>v</i><sub>m</sub>/π = (2 × 311)/3.1416',
          'Note the rms always exceeds the half-cycle mean (their ratio is the form factor, 1.11).',
        ],
        ans: '<i>V</i><sub>rms</sub> = 220 V, <i>V</i><sub>avg</sub> = 198 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — What does “220 V” actually mean?',
        q: 'An AC source is labelled “220 V.” What is its peak voltage?',
        steps: [
          '<b>The trap:</b> assuming 220 V is the peak. It is not — all AC ratings are RMS values.',
          '<b>Fast reasoning:</b> <i>v</i><sub>m</sub> = <i>V</i><sub>rms</sub>√2 = 220 × 1.414',
          'The insulation in your home wiring must withstand 311 V, not 220 V — a favourite one-mark trap.',
        ],
        ans: '311 V.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Power from a waveform',
        q: 'A current <i>i</i> = 4 sin(100π<i>t</i>) A flows through a 100 Ω resistor. Find (a) the frequency, (b) the rms current, and (c) the average power dissipated.',
        steps: [
          '<b>Step 1 — (a) frequency.</b> Comparing with <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>: <i>ω</i> = 100π rad s<sup>−1</sup>, so <i>f</i> = <i>ω</i>/(2π) = 100π/(2π) = 50 Hz.',
          '<b>Step 2 — (b) rms current.</b> <i>i</i><sub>m</sub> = 4 A, so <i>I</i><sub>rms</sub> = 4/√2 = 2.83 A.',
          '<b>Step 3 — (c) average power.</b> <i>P</i><sub>avg</sub> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = (2.83)<sup>2</sup> × 100 = 8.0 × 100',
          '(<b>Shortcut:</b> <i>P</i> = ½<i>i</i><sub>m</sub><sup>2</sup><i>R</i> = ½(16)(100) = 800 W — the ½ is the RMS factor squared.)',
        ],
        ans: '<i>f</i> = 50 Hz, <i>I</i><sub>rms</sub> = 2.83 A, <i>P</i><sub>avg</sub> = 800 W.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — RMS of a DC-plus-AC current',
        q: 'A current <i>i</i> = (3 + 4 sin <i>ωt</i>) A — a steady 3 A with a 4 A peak AC riding on top — flows through a 5 Ω resistor. Find (a) the rms current and (b) the average power dissipated.',
        steps: [
          '<b>Step 1 — (a) rms current.</b> RMS means √⟨<i>i</i><sup>2</sup>⟩. Expand:<br><i>i</i><sup>2</sup> = (3 + 4 sin <i>ωt</i>)<sup>2</sup> = 9 + 24 sin <i>ωt</i> + 16 sin<sup>2</sup> <i>ωt</i><br>Average term by term over a cycle: ⟨9⟩ = 9; ⟨24 sin <i>ωt</i>⟩ = 0 (full-cycle average of a sine); ⟨16 sin<sup>2</sup> <i>ωt</i>⟩ = 16 × ½ = 8. So:<br>⟨<i>i</i><sup>2</sup>⟩ = 9 + 0 + 8 = 17 ⇒ <i>I</i><sub>rms</sub> = √17 = 4.12 A',
          '<b>Step 2 — (b) average power.</b> <i>P</i><sub>avg</sub> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = 17 × 5',
          'The deep idea: <b>mean-squares add</b> (<i>I</i><sub>rms</sub><sup>2</sup> = <i>I</i><sub>DC</sub><sup>2</sup> + <i>I</i><sub>AC,rms</sub><sup>2</sup> = 3<sup>2</sup> + (4/√2)<sup>2</sup> = 9 + 8 = 17) — the DC part and the AC part contribute their heating independently, while the cross-term averages away.',
        ],
        ans: '<i>I</i><sub>rms</sub> = √17 ≈ 4.12 A, <i>P</i><sub>avg</sub> = 85 W.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A sinusoidal current has a peak value of 10 A. Find its rms value and its mean value over a half cycle.',
            a: '<i>I</i><sub>rms</sub> = 10/√2 = 7.07 A; <i>I</i><sub>avg</sub> = 2(10)/π = 6.37 A.',
          },
          {
            q: '[NEET] The rms value of an alternating voltage is 50 V. What is its peak value and the mean value over a half cycle?',
            a: '<i>v</i><sub>m</sub> = 50√2 = 70.7 V; <i>V</i><sub>avg</sub> = 2(70.7)/π = 45.0 V.',
          },
          {
            q: '[JEE Main] An AC voltage <i>v</i> = 311 sin(314<i>t</i>) V is applied across a 220 Ω resistor. Find the rms current and the average power.',
            a: '<i>V</i><sub>rms</sub> = 311/√2 = 220 V; <i>I</i><sub>rms</sub> = 220/220 = 1.0 A; <i>P</i> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = 220 W.',
          },
          {
            q: '[JEE Main] A sinusoidal current of peak 2 A and frequency 50 Hz flows for one full cycle. Compute (i) the time period, (ii) the rms value, (iii) the form factor.',
            a: '<i>T</i> = 1/50 = 0.02 s; <i>I</i><sub>rms</sub> = 2/√2 = 1.41 A; form factor = 1.11.',
          },
          {
            q: '[JEE Advanced] A current <i>i</i> = 2 + 3 sin <i>ωt</i> + 4 cos <i>ωt</i> (A) flows through a resistor. Find its rms value. (Hint: combine the two sinusoids of the same frequency first, or use that their mean-squares add.)',
            a: '⟨<i>i</i><sup>2</sup>⟩ = 2<sup>2</sup> + 3<sup>2</sup>/2 + 4<sup>2</sup>/2 = 4 + 4.5 + 8 = 16.5, so <i>I</i><sub>rms</sub> = √16.5 = 4.06 A.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The average value of <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i> over one complete cycle is:',
        opts: [
          { label: '<i>i</i><sub>m</sub>/√2', nudge: '<b>(A)</b> trap: that’s the rms value.' },
          { label: '2<i>i</i><sub>m</sub>/π', nudge: '<b>(B)</b> trap: that’s the half-cycle mean, not the full-cycle average.' },
          { label: '<i>i</i><sub>m</sub>', nudge: '<b>(C)</b> trap: confusing average with peak.' },
          { label: 'zero', nudge: null },
        ],
        correct: 3,
        solution: 'Over a full cycle the current is positive for half and equally negative for the other half, so the average is exactly zero.',
      },
      {
        t: 'mcq',
        q: 'The rms value of a sinusoidal voltage of peak 200 V is:',
        opts: [
          { label: '100 V', nudge: '<b>(A)</b> trap: dividing by 2 instead of √2.' },
          { label: '141 V', nudge: null },
          { label: '200 V', nudge: '<b>(C)</b> trap: assuming rms equals peak.' },
          { label: '283 V', nudge: '<b>(D)</b> trap: multiplying by √2 instead of dividing.' },
        ],
        correct: 1,
        solution: '<i>V</i><sub>rms</sub> = <i>v</i><sub>m</sub>/√2 = 200/1.414 = 141 V.',
      },
      {
        t: 'mcq',
        q: 'For a sinusoidal AC, the form factor (rms ÷ half-cycle mean) is:',
        opts: [
          { label: '√2', nudge: '<b>(A)</b> trap: that’s the peak factor (peak ÷ rms).' },
          { label: '2/π', nudge: '<b>(B)</b> trap: that’s the half-cycle mean factor alone.' },
          { label: 'π/(2√2) ≈ 1.11', nudge: null },
          { label: '1', nudge: '<b>(D)</b> trap: form factor is never 1 for a sinusoid.' },
        ],
        correct: 2,
        solution: '(<i>i</i><sub>m</sub>/√2)/(2<i>i</i><sub>m</sub>/π) = π/(2√2) = 1.11.',
      },
      {
        t: 'mcq',
        q: 'A resistor carries <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>. The average power it dissipates is:',
        opts: [
          { label: '<i>i</i><sub>m</sub><sup>2</sup><i>R</i>', nudge: '<b>(A)</b> trap: using peak current as if it were steady DC.' },
          { label: '½<i>i</i><sub>m</sub><sup>2</sup><i>R</i>', nudge: null },
          {
            label: 'zero',
            nudge: '<b>(C)</b> trap: confusing the current’s zero average with the power’s average — power ∝ <i>i</i><sup>2</sup> is always positive, so it never averages to zero.',
          },
          { label: '<i>i</i><sub>m</sub><sup>2</sup><i>R</i>/π', nudge: '<b>(D)</b> trap: mixing in the half-cycle-mean factor.' },
        ],
        correct: 1,
        solution: '<i>P</i><sub>avg</sub> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = (<i>i</i><sub>m</sub>/√2)<sup>2</sup><i>R</i> = ½<i>i</i><sub>m</sub><sup>2</sup><i>R</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating the rated voltage as the peak.</b> “220 V mains” is RMS; the peak is 311 V. Every AC rating you meet is RMS unless explicitly called “peak.”',
          '<b>Saying the average of AC is something nonzero.</b> Over a full cycle it is zero. Only the half-cycle mean (2<i>i</i><sub>m</sub>/π) is nonzero — always specify which you mean.',
          '<b>Applying <i>i</i><sub>m</sub>/√2 to non-sinusoids.</b> The √2 factor is specific to sine waves. For a square wave <i>I</i><sub>rms</sub> = <i>i</i><sub>m</sub>; for other shapes you must integrate ⟨<i>i</i><sup>2</sup>⟩ from scratch.',
          '<b>Forgetting that mean-squares add.</b> For mixed currents (DC + AC, two sinusoids of different frequencies, or sin and cos of one frequency), don’t add rms values directly — add their squares: <i>I</i><sub>rms</sub><sup>2</sup> = <i>I</i><sub>1</sub><sup>2</sup> + <i>I</i><sub>2</sub><sup>2</sup> + ... (cross-terms of different behaviour average to zero; two same-frequency sinusoids at any other phase difference keep a cross-term).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “average power in a resistor” question, the fastest route is <i>P</i> = ½<i>v</i><sub>m</sub><i>i</i><sub>m</sub> = ½<i>i</i><sub>m</sub><sup>2</sup><i>R</i> — the ½ is just (1/√2)<sup>2</sup> in disguise, so you never even need to compute the rms separately. Quick sanity check: rms should always sit between the half-cycle mean and the peak (0.637 <i>i</i><sub>m</sub> < 0.707 <i>i</i><sub>m</sub> < <i>i</i><sub>m</sub>). If your rms lands outside that window for a sinusoid, you’ve slipped.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Waveform', note: '<i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>, <i>ω</i> = 2π<i>f</i> = 2π/<i>T</i>.' },
          {
            f: 'RMS (effective)',
            note: '<i>I</i><sub>rms</sub> = <i>i</i><sub>m</sub>/√2 = 0.707 <i>i</i><sub>m</sub> — the DC-equivalent heating value; what meters read.',
          },
          {
            f: 'Half-cycle mean',
            note: '<i>I</i><sub>avg</sub> = 2<i>i</i><sub>m</sub>/π = 0.637 <i>i</i><sub>m</sub>. (Full-cycle average = 0.)',
          },
          { f: 'Form factor = π/(2√2) = 1.11; Peak factor = √2 = 1.414 (sinusoids only).', note: '' },
          {
            f: 'Power in R',
            note: '<i>P</i><sub>avg</sub> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = ½<i>i</i><sub>m</sub><sup>2</sup><i>R</i>. Mean-squares add (DC + AC, different frequencies, or sin + cos): <i>I</i><sub>rms</sub><sup>2</sup> = <i>I</i><sub>1</sub><sup>2</sup> + <i>I</i><sub>2</sub><sup>2</sup> + ⋯',
          },
          { f: 'Mains', note: '220 V rms ⇒ 311 V peak; 50 Hz ⇒ <i>T</i> = 0.02 s.' },
        ],
        aids: ['Mnemonic: “Rate by RMS, build for the peak.”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 467–475 ─────────────────────────
  {
    n: '02',
    title: 'AC Voltage across R, L, C and LCR Series Circuits',
    kalam: 'In a DC circuit, opposition to current has exactly one face: resistance.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the structural heart of the chapter. JEE Main reliably pulls 1–2 numericals on impedance and phase angle; NEET favours quick conceptual traps on reactance and phasor addition; JEE Advanced builds multi-element “black box” and multi-frequency problems on top of it. CBSE Boards almost always carry the LCR impedance derivation (3–5 marks) plus a short-answer on the phase behaviour of L and C.',
      },
      {
        t: 'p',
        html: 'In a DC circuit, opposition to current has exactly one face: resistance. You push a steady voltage, you get a steady current, and Ohm’s law settles everything. Alternating current changes the game because the driving voltage is no longer steady — it swings sinusoidally, sixty (or fifty) times every second. The moment the push starts oscillating, two new characters walk on stage: the <b>inductor</b>, which hates changes in current, and the <b>capacitor</b>, which hates steady current. Each of them opposes AC, but in a way that depends on how fast the current is swinging — that is, on the frequency.',
      },
      {
        t: 'p',
        html: 'Think about it this way… imagine three commuters trying to get through a Mumbai local turnstile during rush hour, where the crowd surges forward and back rhythmically (that’s our alternating drive).<br>• The <b>resistor</b> is the steady, indifferent commuter. Whatever the crowd does, they move with it — surge forward when the crowd surges, ebb back when it ebbs. Voltage and current stay perfectly <b>in step (in phase)</b>.<br>• The <b>inductor</b> is the cautious uncle who resists any sudden change of motion. By the time he commits to moving forward, the crowd has already peaked and started back — so his motion (the current) always <b>lags</b> the push (the voltage). Crucially, the faster the crowd oscillates, the more violently he’s asked to change direction, and the harder he digs in. That’s why an inductor opposes high frequencies most strongly.<br>• The <b>capacitor</b> is the over-eager teenager who lunges ahead before the crowd has even committed. The current through a capacitor <b>leads</b> the voltage. And a capacitor’s opposition shrinks as frequency rises — rapid back-and-forth is exactly what it likes, while a steady (DC) push leaves it fully charged and blocking everything.',
      },
      {
        t: 'p',
        html: 'This frequency-dependent opposition has a name: <b>reactance</b> (<i>X</i>). Unlike resistance, reactance stores and returns energy instead of dissipating it — but dimensionally and operationally it behaves just like resistance (same unit, the ohm). For an inductor it grows with frequency (<i>X</i><sub>L</sub> = <i>ωL</i>); for a capacitor it falls with frequency (<i>X</i><sub>C</sub> = 1/(<i>ωC</i>)).',
      },
      {
        t: 'p',
        html: 'The genuinely beautiful part — and the reason this topic connects straight back to your work on oscillations — is the bookkeeping tool we use to combine these out-of-step quantities: the <b>phasor</b>. A phasor is a rotating arrow whose length is the amplitude and whose projection onto an axis gives the instantaneous value. It is literally the reference circle of SHM: the same <i>ω</i>, the same phase angle <i>φ</i>, only now the rotating quantity is a voltage or current instead of a displacement. Because the current is common to every element in a series circuit, we anchor all phasors to that shared current and read off who leads, who lags, and by how much.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• Every reactance relation (<i>V</i><sub>L</sub> = <i>IX</i><sub>L</sub>, <i>V</i><sub>C</sub> = <i>IX</i><sub>C</sub>) is a statement about <b>amplitudes (or rms values), not instantaneous values</b>. Instantaneously, <i>v</i><sub>L</sub> and <i>i</i> are 90° apart — you can never write <i>v</i><sub>L</sub> = <i>iX</i><sub>L</sub> at a single instant.<br>• We assume <b>ideal</b> elements: a pure resistor (no inductance), a pure inductor (zero winding resistance), a pure capacitor (no leakage). Real coils carry resistance, and that quietly changes phase angles in the lab.<br>• The source must be <b>sinusoidal and single-frequency</b>. Phasor algebra collapses for non-sinusoidal drives.<br>• We use the <b>steady-state</b> response, ignoring the brief transient when the source is first switched on.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Resistor (R) alone — voltage and current in phase',
        main: '<i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> ⇒ <i>i</i> = (<i>v</i><sub>m</sub>/<i>R</i>) sin <i>ωt</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Inductor (L) alone — voltage leads current by 90°',
        main: '<i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> ⇒ <i>i</i> = (<i>v</i><sub>m</sub>/<i>X</i><sub>L</sub>) sin(<i>ωt</i> − π/2)<br><i>X</i><sub>L</sub> = <i>ωL</i> = 2π<i>fL</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Capacitor (C) alone — voltage lags current by 90°',
        main: '<i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> ⇒ <i>i</i> = (<i>v</i><sub>m</sub>/<i>X</i><sub>C</sub>) sin(<i>ωt</i> + π/2)<br><i>X</i><sub>C</sub> = 1/(<i>ωC</i>) = 1/(2π<i>fC</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Series LCR circuit — impedance and phase angle',
        main: '<i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>)<br><i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>Z</i><br>tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>',
        legend: ['<i>φ</i> = the angle by which the source voltage leads the current'],
        note: '<i>φ</i> > 0: inductive (voltage leads); <i>φ</i> < 0: capacitive (voltage lags, current leads); <i>φ</i> = 0: purely resistive (the <i>X</i><sub>L</sub> = <i>X</i><sub>C</sub> resonance case).',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          [
            'Resistance / Reactance / Impedance',
            '<i>R</i>, <i>X</i>, <i>Z</i>',
            'ohm (Ω)',
            '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]',
          ],
          ['Inductance', '<i>L</i>', 'henry (H)', '[M L<sup>2</sup> T<sup>−2</sup> A<sup>−2</sup>]'],
          ['Capacitance', '<i>C</i>', 'farad (F)', '[M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>]'],
          ['Angular frequency', '<i>ω</i>', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Variables:</b> <i>v</i><sub>m</sub>, <i>i</i><sub>m</sub> = peak (amplitude) values of voltage and current; <i>ω</i> = 2π<i>f</i> = angular frequency; <i>R</i> = resistance; <i>L</i> = inductance; <i>C</i> = capacitance; <i>φ</i> = phase difference between source voltage and current.',
      },
      {
        t: 'p',
        html: '<b>Quick dimensional sanity check:</b> <i>X</i><sub>L</sub> = <i>ωL</i> gives [T<sup>−1</sup>][M L<sup>2</sup> T<sup>−2</sup> A<sup>−2</sup>] = [M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>] — exactly the dimensions of resistance. Good, reactance and resistance are the same kind of thing.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>3.1 Reactance of a pure inductor</b><br>Apply <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> across an inductor <i>L</i>. The self-induced back-emf is −<i>L</i> d<i>i</i>/d<i>t</i>, and Kirchhoff’s loop rule gives:<br><i>v</i><sub>m</sub> sin <i>ωt</i> = <i>L</i> d<i>i</i>/d<i>t</i><br>⇒ d<i>i</i> = (<i>v</i><sub>m</sub>/<i>L</i>) sin <i>ωt</i> d<i>t</i><br>Integrating (the constant of integration is a DC term with no place in a purely AC steady state, so we drop it):<br><i>i</i> = −(<i>v</i><sub>m</sub>/(<i>ωL</i>)) cos <i>ωt</i> = (<i>v</i><sub>m</sub>/(<i>ωL</i>)) sin(<i>ωt</i> − π/2)<br>Comparing with <i>i</i> = <i>i</i><sub>m</sub> sin(<i>ωt</i> − π/2), the current <b>lags</b> the voltage by 90°, and the peak current is <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/(<i>ωL</i>). Defining inductive reactance <i>X</i><sub>L</sub> ≡ <i>ωL</i> recovers the Ohm-like form <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>X</i><sub>L</sub>. <b>Why the lag?</b> An inductor opposes the change in current, so the current cannot rise until the voltage has already done its work — it is always a quarter-cycle behind.',
      },
      {
        t: 'p',
        html: '<b>3.2 Reactance of a pure capacitor</b><br>Apply <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i> across a capacitor. The charge is <i>q</i> = <i>Cv</i> = <i>Cv</i><sub>m</sub> sin <i>ωt</i>, and current is the rate of change of charge:<br><i>i</i> = d<i>q</i>/d<i>t</i> = <i>ωC</i> <i>v</i><sub>m</sub> cos <i>ωt</i> = (<i>v</i><sub>m</sub>/(1/(<i>ωC</i>))) sin(<i>ωt</i> + π/2)<br>So the current <b>leads</b> the voltage by 90°, with peak <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/(1/(<i>ωC</i>)). Defining capacitive reactance <i>X</i><sub>C</sub> ≡ 1/(<i>ωC</i>) again recovers <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>X</i><sub>C</sub>. <b>Why the lead?</b> Current is highest when the capacitor is empty and charging fastest — that happens before the voltage peaks, so current runs ahead.',
      },
      {
        t: 'p',
        html: '<b>3.3 Impedance of a series LCR circuit (phasor method)</b><br><b>Setup.</b> Connect <i>R</i>, <i>L</i>, <i>C</i> in series across <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i>. Because the elements are in series, the same current flows through all three at every instant — so the current is our reference phasor. Let<br><i>i</i> = <i>i</i><sub>m</sub> sin(<i>ωt</i> − <i>φ</i>)<br><b>Step 1 — draw each voltage phasor relative to the current <i>I⃗</i>:</b><br>• <i>V⃗</i><sub>R</sub> = <i>i</i><sub>m</sub><i>R</i>, in phase with <i>I⃗</i>.<br>• <i>V⃗</i><sub>L</sub> = <i>i</i><sub>m</sub><i>X</i><sub>L</sub>, 90° ahead of <i>I⃗</i>.<br>• <i>V⃗</i><sub>C</sub> = <i>i</i><sub>m</sub><i>X</i><sub>C</sub>, 90° behind <i>I⃗</i>.',
      },
      { t: 'fig', id: 'p12-07-fig-7.1' },
      {
        t: 'p',
        html: '<b>Step 2 — combine the perpendicular components.</b> <i>V⃗</i><sub>L</sub> and <i>V⃗</i><sub>C</sub> lie along the same line in opposite directions, so they partially cancel into a single net phasor of magnitude |<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>| = <i>i</i><sub>m</sub>|<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>|, perpendicular to <i>V⃗</i><sub>R</sub>.<br><br><b>Step 3 — apply Pythagoras.</b> Since <i>V⃗</i><sub>R</sub> and (<i>V⃗</i><sub>L</sub> − <i>V⃗</i><sub>C</sub>) are at right angles, the source-voltage amplitude is the hypotenuse:<br><i>v</i><sub>m</sub> = √(<i>V</i><sub>R</sub><sup>2</sup> + (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)<sup>2</sup>) = √((<i>i</i><sub>m</sub><i>R</i>)<sup>2</sup> + (<i>i</i><sub>m</sub><i>X</i><sub>L</sub> − <i>i</i><sub>m</sub><i>X</i><sub>C</sub>)<sup>2</sup>)<br><i>v</i><sub>m</sub> = <i>i</i><sub>m</sub>√(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>)<br><br><b>Step 4 — define impedance</b> as the voltage-to-current amplitude ratio, exactly mirroring <i>V</i> = <i>IR</i> for DC:<br><i>Z</i> = <i>v</i><sub>m</sub>/<i>i</i><sub>m</sub> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>)<br><br><b>Step 5 — read off the phase angle</b> from the triangle:<br>tan <i>φ</i> = (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)/<i>V</i><sub>R</sub> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>',
      },
      {
        t: 'p',
        html: '<b>Connection to oscillations (analytical route).</b> The same circuit obeys Kirchhoff’s voltage law as <i>L</i> d<i>i</i>/d<i>t</i> + <i>Ri</i> + <i>q</i>/<i>C</i> = <i>v</i><sub>m</sub> sin <i>ωt</i>, i.e. <i>Lq̈</i> + <i>Rq̇</i> + <i>q</i>/<i>C</i> = <i>v</i><sub>m</sub> sin <i>ωt</i>. This is precisely the <b>forced, damped harmonic oscillator</b> equation from the Oscillations chapter — <i>R</i> plays the damping, 1/<i>C</i> the spring constant, <i>L</i> the mass. The steady-state amplitude <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>Z</i> is the resonance response curve of that oscillator. The phasor triangle and the differential equation are two languages describing one physical system.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Capacitor across an AC mains',
        q: 'A 25 μF capacitor is connected across a 230 V (rms), 50 Hz AC supply. Find (a) the capacitive reactance and (b) the rms current.',
        steps: [
          '<b>Given:</b> <i>C</i> = 25 μF = 25 × 10<sup>−6</sup> F, <i>V</i><sub>rms</sub> = 230 V, <i>f</i> = 50 Hz.',
          '<b>(a)</b> Capacitive reactance:<br><i>X</i><sub>C</sub> = 1/(2π<i>fC</i>) = 1/(2π(50)(25 × 10<sup>−6</sup>)) = 1/(7.854 × 10<sup>−3</sup>) = 127.3 Ω',
          '<b>(b)</b> Since the only opposition is the capacitor, Ohm’s law for AC gives:<br><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/<i>X</i><sub>C</sub> = 230/127.3',
          '(Notice the current here leads the voltage by 90° — but reactance and rms current don’t care about that sign, only the phase does.)',
        ],
        ans: '<i>X</i><sub>C</sub> = 127.3 Ω, <i>I</i><sub>rms</sub> = 1.81 A.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Don’t add voltmeter readings!',
        q: 'In a series LCR circuit, an AC voltmeter reads 80 V across the resistor, 120 V across the inductor, and 60 V across the capacitor. What is the rms voltage of the source?',
        steps: [
          '<b>The trap:</b> the tempting answer is 80 + 120 + 60 = 260 V. Wrong — these voltages are not in phase, so you cannot add them arithmetically.',
          '<b>Fast correct method:</b> <i>V</i><sub>L</sub> and <i>V</i><sub>C</sub> are antiphase, so they subtract: <i>V</i><sub>L</sub> − <i>V</i><sub>C</sub> = 120 − 60 = 60 V. This net reactive voltage is perpendicular to <i>V</i><sub>R</sub>, so:<br><i>V</i> = √(<i>V</i><sub>R</sub><sup>2</sup> + (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)<sup>2</sup>) = √(80<sup>2</sup> + 60<sup>2</sup>) = √(6400 + 3600) = √10000',
          'Spot the 80–60–100 right triangle and you finish in five seconds without a calculator.',
        ],
        ans: '<b>100</b> V.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Full LCR characterisation',
        q: 'A series LCR circuit has <i>R</i> = 30 Ω, <i>L</i> = 50 mH, and <i>C</i> = 50 μF, driven by an AC source of rms voltage 120 V at angular frequency <i>ω</i> = 1000 rad s<sup>−1</sup>. Find (a) the impedance, (b) the rms current, (c) the phase angle, and (d) the rms voltage across the inductor. Comment on (d).',
        steps: [
          '<b>Step 1 — reactances:</b><br><i>X</i><sub>L</sub> = <i>ωL</i> = 1000 × 0.050 = 50 Ω, <i>X</i><sub>C</sub> = 1/(<i>ωC</i>) = 1/(1000 × 50 × 10<sup>−6</sup>) = 20 Ω',
          '<b>Step 2 — (a) impedance:</b><br><i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>) = √(30<sup>2</sup> + (50 − 20)<sup>2</sup>) = √(900 + 900) = 30√2 ≈ 42.4 Ω',
          '<b>Step 3 — (b) rms current:</b><br><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/<i>Z</i> = 120/(30√2) = 2√2 ≈ 2.83 A',
          '<b>Step 4 — (c) phase angle:</b><br>tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i> = 30/30 = 1 ⇒ <i>φ</i> = +45°<br>Since <i>X</i><sub>L</sub> > <i>X</i><sub>C</sub>, the circuit is inductive and the <b>source voltage leads the current by</b> 45°.',
          '<b>Step 5 — (d) voltage across the inductor:</b><br><i>V</i><sub>L</sub> = <i>I</i><sub>rms</sub><i>X</i><sub>L</sub> = 2√2 × 50 = 100√2 ≈ 141.4 V',
          '<b>Comment:</b> <i>V</i><sub>L</sub> ≈ 141 V is larger than the source voltage of 120 V! This is not a mistake — in AC, the voltage across a single reactive element can exceed the source voltage because <i>V</i><sub>L</sub> and <i>V</i><sub>C</sub> are perfectly out of phase and partly cancel in the resultant. Only the phasor sum must equal the source.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The black box',
        q: 'A sealed box has two terminals. When a 12 V DC source is connected, a steady current of 2 A flows. When the box is instead driven by an AC source of rms voltage 12 V at angular frequency <i>ω</i> = 100 rad s<sup>−1</sup>, the rms current drops to 1.2 A. Deduce as much as you can about the contents of the box.',
        steps: [
          '<b>Reasoning 1 — what the DC test rules out.</b> A finite, steady DC current flows. A pure capacitor would block DC entirely (zero steady current); a pure ideal inductor would offer zero opposition to steady current (infinite current — physically a dead short). Neither happens, so <b>the box must contain resistance.</b> From the DC test:<br><i>R</i> = <i>V</i><sub>DC</sub>/<i>I</i><sub>DC</sub> = 12/2 = 6 Ω',
          '<b>Reasoning 2 — what the AC test adds.</b> Under AC the current is smaller, so there is extra opposition beyond <i>R</i> — a reactance. The impedance is:<br><i>Z</i> = <i>V</i><sub>rms</sub>/<i>I</i><sub>rms</sub> = 12/1.2 = 10 Ω<br><i>Z</i><sup>2</sup> = <i>R</i><sup>2</sup> + <i>X</i><sup>2</sup> ⇒ <i>X</i> = √(<i>Z</i><sup>2</sup> − <i>R</i><sup>2</sup>) = √(100 − 36) = 8 Ω',
          '<b>Reasoning 3 — inductor or capacitor? (the Advanced twist).</b> We have established: <i>R</i> = 6 Ω in series with a single reactive element of |<i>X</i>| = 8 Ω at <i>ω</i> = 100 rad s<sup>−1</sup>. The AC magnitude alone cannot tell us whether the reactance is inductive or capacitive — both produce the same current amplitude:<br>Inductor: <i>L</i> = <i>X</i>/<i>ω</i> = 8/100 = 0.08 H or Capacitor: <i>C</i> = 1/(<i>ωX</i>) = 1/(100 × 8) = 1.25 × 10<sup>−3</sup> F = 1.25 mF<br><b>But the DC test settles it:</b> a capacitor in series would block DC completely, yet a steady 2 A flows. So the reactive element must be the inductor.',
          'Without the DC test you would need a phase measurement (does current lead or lag?) or a second frequency (reactance rises with <i>ω</i> for <i>L</i>, falls for <i>C</i>) to break the tie. This is the deep lesson: current magnitude fixes |<i>Z</i>|, but only phase, frequency-dependence or a DC test reveals the nature of the reactance.',
        ],
        ans: 'The box contains <i>R</i> = 6 Ω in series with a 0.08 H inductor (a series capacitor would block the 2 A DC current).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 0.40 H inductor is connected to a 110 V, 50 Hz AC source. Calculate the inductive reactance and the rms current.',
            a: '<i>X</i><sub>L</sub> = 125.7 Ω, <i>I</i><sub>rms</sub> = 0.875 A.',
          },
          {
            q: '[NEET] In a series LCR circuit, <i>V</i><sub>R</sub> = 60 V, <i>V</i><sub>L</sub> = 100 V, <i>V</i><sub>C</sub> = 20 V. Find the rms source voltage.',
            a: '<i>V</i> = 100 V.',
          },
          {
            q: '[JEE Main] A series LCR circuit has <i>R</i> = 8 Ω, <i>X</i><sub>L</sub> = 30 Ω, <i>X</i><sub>C</sub> = 24 Ω. If the rms current is 5 A, find the impedance and the rms source voltage.',
            a: '<i>Z</i> = 10 Ω, <i>V</i> = 50 V.',
          },
          {
            q: '[JEE Main] A capacitor and a pure resistor are joined in series across a 200 V, <i>ω</i> = 400 rad s<sup>−1</sup> AC source. The resistor is 40 Ω and the rms current is 4 A. Determine the capacitance.',
            a: '<i>C</i> = 8.33 × 10<sup>−5</sup> F ≈ 83.3 μF (since <i>Z</i> = 50 Ω, <i>X</i><sub>C</sub> = √(50<sup>2</sup> − 40<sup>2</sup>) = 30 Ω, <i>C</i> = 1/(<i>ωX</i><sub>C</sub>)).',
          },
          {
            q: '[JEE Advanced] A series LCR circuit carries rms current 2 A when driven at <i>ω</i><sub>1</sub> = 500 rad s<sup>−1</sup>, with the current lagging the voltage. When the frequency is lowered to <i>ω</i><sub>2</sub>, the current leads the voltage by the same angle and the rms current is again 2 A. Given <i>L</i> = 0.16 H and <i>C</i> = 40 μF, find <i>ω</i><sub>2</sub> and the resistance <i>R</i> (take rms source voltage = 100 V).',
            a: '<i>Z</i> = <i>V</i>/<i>I</i> = 100/2 = 50 Ω. At <i>ω</i><sub>1</sub>: <i>ω</i><sub>1</sub><i>L</i> = 80 Ω and 1/(<i>ω</i><sub>1</sub><i>C</i>) = 50 Ω, so the net reactance is 30 Ω (inductive) and <i>R</i> = √(50<sup>2</sup> − 30<sup>2</sup>) = 40 Ω. Equal currents with opposite phase need <i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = 1/(<i>LC</i>), so <i>ω</i><sub>2</sub> = <i>ω</i><sub>1</sub> × 50/80 = 312.5 rad/s.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A pure inductor is connected to an AC source. If the frequency of the source is doubled while the voltage amplitude is held constant, the rms current through the inductor:',
        opts: [
          {
            label: 'doubles',
            nudge: '<b>(A)</b> trap: confusing inductor with capacitor — for a capacitor, doubling <i>f</i> doubles the current.',
          },
          { label: 'halves', nudge: null },
          {
            label: 'is unchanged',
            nudge: '<b>(C)</b> trap: treating <i>X</i><sub>L</sub> as a fixed “resistance” independent of frequency.',
          },
          {
            label: 'becomes four times',
            nudge: '<b>(D)</b> trap: applying a power-style square relationship where none exists.',
          },
        ],
        correct: 1,
        solution: '<i>X</i><sub>L</sub> = <i>ωL</i> = 2π<i>fL</i>, so doubling <i>f</i> doubles <i>X</i><sub>L</sub>; with constant voltage, <i>I</i> = <i>V</i>/<i>X</i><sub>L</sub> halves.',
      },
      {
        t: 'mcq',
        q: 'In a series LCR circuit at a certain frequency, <i>X</i><sub>L</sub> = 12 Ω, <i>X</i><sub>C</sub> = 12 Ω, <i>R</i> = 5 Ω. The phase angle between source voltage and current is:',
        opts: [
          {
            label: '90°',
            nudge: '<b>(A)</b> trap: assuming reactances present always mean a 90° shift, forgetting they cancel.',
          },
          {
            label: '45°',
            nudge: '<b>(B)</b> trap: defaulting to 45° whenever <i>R</i> and <i>X</i> “look comparable.”',
          },
          { label: '0°', nudge: null },
          { label: '53°', nudge: '<b>(D)</b> trap: misremembering a 3-4-5 triangle that isn’t here.' },
        ],
        correct: 2,
        solution: 'tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i> = 0/5 = 0 ⇒ <i>φ</i> = 0°. The circuit is purely resistive (<i>X</i><sub>L</sub> = <i>X</i><sub>C</sub>, the resonance condition).',
      },
      {
        t: 'mcq',
        q: 'An ideal capacitor is connected across a DC battery. After the circuit reaches steady state, the current through the capacitor is:',
        opts: [
          {
            label: 'maximum',
            nudge: '<b>(A)</b>/<b>(D)</b> trap: confusing the brief charging surge (transient) with the steady state, or swapping with an inductor’s behaviour.',
          },
          {
            label: 'a steady nonzero value',
            nudge: '<b>(B)</b> trap: treating the capacitor like a resistor that passes a steady current — no steady conduction current can cross the dielectric gap.',
          },
          { label: 'zero', nudge: null },
          {
            label: 'infinite',
            nudge: '<b>(A)</b>/<b>(D)</b> trap: confusing the brief charging surge (transient) with the steady state, or swapping with an inductor’s behaviour.',
          },
        ],
        correct: 2,
        solution: 'For DC, <i>f</i> = 0, so <i>X</i><sub>C</sub> = 1/(2π<i>fC</i>) → ∞; once fully charged, no steady current flows. A capacitor blocks DC.',
      },
      {
        t: 'mcq',
        q: 'In a series LCR circuit the source voltage lags the current. Which statement is necessarily true?',
        opts: [
          {
            label: '<i>X</i><sub>L</sub> > <i>X</i><sub>C</sub>',
            nudge: '<b>(A)</b> trap: reversing the inequality (this gives voltage leading).',
          },
          { label: '<i>X</i><sub>C</sub> > <i>X</i><sub>L</sub>', nudge: null },
          {
            label: '<i>R</i> = 0',
            nudge: '<b>(C)</b> trap: assuming a phase shift requires zero resistance — false; <i>R</i> only sets the size of <i>φ</i>, not its sign.',
          },
          {
            label: 'the circuit is at resonance',
            nudge: '<b>(D)</b> trap: resonance is <i>φ</i> = 0, the opposite of a lagging voltage.',
          },
        ],
        correct: 1,
        solution: 'Voltage lagging current means <i>φ</i> < 0, so tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i> < 0 ⇒ <i>X</i><sub>C</sub> > <i>X</i><sub>L</sub> — the circuit is net capacitive.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding voltages arithmetically.</b> Writing <i>V</i> = <i>V</i><sub>R</sub> + <i>V</i><sub>L</sub> + <i>V</i><sub>C</sub> is the single most common LCR error. These voltages are out of phase; you must combine them as phasors: <i>V</i> = √(<i>V</i><sub>R</sub><sup>2</sup> + (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)<sup>2</sup>).',
          '<b>Treating reactance like a fixed resistance.</b> Students plug <i>X</i><sub>L</sub> or <i>X</i><sub>C</sub> in once and forget they change with frequency. Always ask: “if frequency changes, which way does this reactance move?” (<i>X</i><sub>L</sub> up, <i>X</i><sub>C</sub> down.)',
          '<b>Sign-convention whiplash on <i>φ</i>.</b> NCERT writes <i>i</i> = <i>i</i><sub>m</sub> sin(<i>ωt</i> + <i>φ</i>) with tan <i>φ</i> = (<i>X</i><sub>C</sub> − <i>X</i><sub>L</sub>)/<i>R</i> (current’s phase relative to voltage), while many JEE books write the voltage’s phase as tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>. They describe the same physics with opposite signs. Pick one convention, state it, and never mid-solution flip.',
          '<b>Confusing instantaneous and amplitude relations.</b> <i>V</i><sub>L</sub> = <i>IX</i><sub>L</sub> holds for amplitudes/rms only. You can never write <i>v</i><sub>L</sub> = <i>iX</i><sub>L</sub> at a single instant, because <i>v</i><sub>L</sub> and <i>i</i> are 90° apart.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorise <b>“ELI the ICE man.”</b> In an inductor (<b>L</b>), <b>E</b>MF leads current <b>I</b> → <b>ELI</b>. In a capacitor (<b>C</b>), current <b>I</b> leads <b>E</b>MF → <b>ICE</b>. This one mnemonic fixes every lead/lag question instantly. And for LCR numericals, always sketch the impedance right triangle (<i>R</i> horizontal, <i>X</i><sub>L</sub> − <i>X</i><sub>C</sub> vertical, <i>Z</i> hypotenuse) — half the JEE problems are just recognising a 3-4-5, 5-12-13, or 8-15-17 triangle in disguise.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Phase rules',
            note: 'Resistor — V and I in phase. Inductor — V leads I by 90°. Capacitor — V lags I by 90°.',
          },
          {
            f: 'Reactances',
            note: '<i>X</i><sub>L</sub> = <i>ωL</i> = 2π<i>fL</i> (rises with <i>f</i>); <i>X</i><sub>C</sub> = 1/(<i>ωC</i>) = 1/(2π<i>fC</i>) (falls with <i>f</i>). Both in ohms.',
          },
          {
            f: 'DC limits',
            note: 'Inductor → short (<i>X</i><sub>L</sub> = 0); Capacitor → open (<i>X</i><sub>C</sub> → ∞, blocks DC).',
          },
          {
            f: 'Impedance',
            note: '<i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>), and <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>Z</i>.',
          },
          {
            f: 'Phase angle',
            note: 'tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>. (+ inductive/V leads; − capacitive/I leads; 0 resonance.)',
          },
          {
            f: 'Voltage adds as phasors',
            note: '<i>V</i> = √(<i>V</i><sub>R</sub><sup>2</sup> + (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)<sup>2</sup>) — never arithmetically.',
          },
          {
            f: 'Special case <i>X</i><sub>L</sub> = <i>X</i><sub>C</sub>',
            note: '<i>Z</i> = <i>R</i> (minimum), <i>φ</i> = 0, current maximum — the gateway to resonance.',
          },
        ],
        aids: ['Mnemonic: ELI the ICE man.'],
      },
    ],
  },
];
