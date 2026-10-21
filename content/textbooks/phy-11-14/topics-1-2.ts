import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topics 01 and 02: pp. 946–963 of the Class 11 Physics Master
 * Reference, word for word: Wave Characteristics and Speed (pp. 946–954) and
 * Superposition and Beats (pp. 955–963). The chapter's title page and
 * contents (pp. 944–945) are not copied. Each is split at its Sections 1
 * to 8. Neither topic prints a drawing; Topic 01's speed derivation carries
 * one diagram of our own (p11-14-01-d1).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 946–954 ─────────────────────────
  {
    n: '01',
    title: 'Wave Characteristics and Speed',
    kalam: 'Wave speed in a given medium is set by the medium’s properties, not by how the wave was produced.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the entire Waves chapter. JEE Main typically asks 1–2 direct questions on the wave equation, wave speed on a string, and particle vs. wave velocity. NEET leans toward conceptual questions on wave types and the <i>v</i> = <i>fλ</i> relationship across media. JEE Advanced rarely asks this alone — it embeds it inside multi-concept problems (variable-tension ropes, superposition setups). For CBSE Boards, expect a 2–3 mark derivation of wave speed on a string or a short-answer on wave characteristics.',
      },
      {
        t: 'p',
        html: 'Picture yourself in the stands at a packed stadium during an India match. Someone a few sections away stands up, throws their arms up, and sits back down. The person next to them does the same a moment later, then the next, and the next. Within seconds a giant ripple of standing-and-sitting sweeps all the way around the stadium. Here is the beautiful part: <b>not a single person actually travelled around the stadium.</b> Each person stayed exactly in their own seat. What travelled was the pattern — the disturbance.',
      },
      {
        t: 'p',
        html: 'That is a wave, in one sentence. A <b>wave is a disturbance that travels through a medium (or space), carrying energy and momentum from one place to another, without any net transport of the medium itself.</b>',
      },
      {
        t: 'p',
        html: 'The medium particles only wiggle about their fixed average position. Drop a pebble in a still pond and a twig floating nearby just bobs up and down — it does not get carried to the shore, even though the ripple clearly races outward. The water goes up and down; the energy goes outward.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Every particle of the medium is doing its own little simple harmonic motion (SHM) about its mean position. What we call “the wave moving” is really just the phase of that oscillation being handed from one particle to the next, slightly delayed each time — exactly like the stadium crowd handing the “stand up” cue down the row.',
      },
      {
        t: 'p',
        html: 'Now, how do we classify waves?<br><br><b>1. By the medium’s need:</b><br>• <b>Mechanical waves</b> need a material medium to travel through — sound, waves on a string, ripples on water. No medium, no wave. (This is why sound cannot travel through the vacuum of space.)<br>• <b>Non-mechanical (electromagnetic) waves</b> like light, radio, and X-rays need no medium and happily travel through vacuum.',
      },
      {
        t: 'p',
        html: '<b>2. By the direction of vibration:</b><br>• <b>Transverse waves:</b> particles vibrate perpendicular to the direction the wave travels. A wave on a guitar string; light (where it is the electric and magnetic fields, not particles, that oscillate). Ripples on water are a mixture: the water particles move in small circles, partly transverse and partly longitudinal. Picture flicking one end of a long rope up and down — the rope moves vertically, the wave moves horizontally.<br>• <b>Longitudinal waves:</b> particles vibrate along the direction the wave travels, creating compressions and rarefactions. Sound is the classic example. Picture pushing and pulling one end of a slinky — the coils squeeze together and stretch apart along the slinky’s length.',
      },
      {
        t: 'p',
        html: '<b>3. By dimensionality:</b> waves on a string are 1-D, ripples on a pond surface are 2-D, and sound from a firecracker spreading through the air is 3-D.',
      },
      {
        t: 'p',
        html: 'Every wave, no matter the type, is described by the same handful of characteristics: how big the swing is (<b>amplitude</b>), how long one full pattern is in space (<b>wavelength</b>), how long one full oscillation takes in time (<b>time period</b>), how many oscillations happen per second (<b>frequency</b>), and how fast the disturbance travels (<b>wave speed</b>).',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Wave speed in a given medium is set by the <b>medium’s properties</b>, not by how the wave was produced. Shouting louder (more amplitude) or at a higher pitch (more frequency) does <b>not</b> make sound travel faster in the same air.<br>• The sinusoidal wave equation, and a single wave speed shared by all frequencies (so a pulse keeps its shape), assume an <b>ideal, non-dispersive, lossless medium</b> with small amplitudes. (<i>v</i> = <i>fλ</i> itself holds for any single-frequency wave.) Real strings have stiffness, real media absorb energy, and very large amplitudes break the linear approximation.<br>• The transverse-wave-on-a-string formula assumes a <b>perfectly flexible, uniform string</b> under constant tension.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Wave speed (the master relation)',
        main: '<i>v</i> = <i>fλ</i> = <i>λ</i>/<i>T</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular frequency and wave number',
        main: '<i>ω</i> = 2π<i>f</i> = 2π/<i>T</i>, <i>k</i> = 2π/<i>λ</i><br><i>v</i> = <i>ω</i>/<i>k</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equation of a progressive (travelling) harmonic wave',
        main: 'moving in the +<i>x</i> direction:<br><i>y</i>(<i>x</i>, <i>t</i>) = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>)',
        legend: [],
        note: '(For motion in the −<i>x</i> direction, the sign between <i>ωt</i> and <i>kx</i> flips to +.)',
      },
      {
        t: 'formula',
        kicker: 'Speed of a transverse wave on a stretched string',
        main: '<i>v</i> = √(<i>T</i>/<i>μ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Particle velocity',
        main: '(velocity of a medium particle, not the wave):<br><i>v</i><sub><i>p</i></sub> = ∂<i>y</i>/∂<i>t</i> = <i>Aω</i> cos(<i>ωt</i> − <i>kx</i>), (<i>v</i><sub><i>p</i></sub>)<sub>max</sub> = <i>Aω</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['<i>A</i>', 'Amplitude (max displacement)', 'metre (m)', '[L]'],
          ['<i>λ</i>', 'Wavelength (length of one cycle)', 'metre (m)', '[L]'],
          ['<i>T</i>', 'Time period', 'second (s)', '[T]'],
          ['<i>f</i>', 'Frequency', 'hertz (Hz)', '[T<sup>−1</sup>]'],
          ['<i>v</i>', 'Wave speed', 'm s<sup>−1</sup>', '[L T<sup>−1</sup>]'],
          ['<i>ω</i>', 'Angular frequency', 'rad s<sup>−1</sup>', '[T<sup>−1</sup>]'],
          ['<i>k</i>', 'Wave number (angular)', 'rad m<sup>−1</sup>', '[L<sup>−1</sup>]'],
          ['<i>μ</i>', 'Linear mass density of string', 'kg m<sup>−1</sup>', '[M L<sup>−1</sup>]'],
          ['<i>φ</i>', 'Phase constant', 'radian', 'dimensionless'],
        ],
      },
      {
        t: 'p',
        html: 'A quick sanity note: <b>frequency <i>f</i> is set by the source</b> and stays the same when a wave crosses into a new medium. When the medium changes, <i>v</i> and <i>λ</i> change together so that <i>v</i> = <i>fλ</i> still holds.',
      },

      { t: 'part', title: 'CBSE board derivation — Speed of a transverse wave on a string' },
      {
        t: 'p',
        html: 'We want to prove <i>v</i> = √(<i>T</i>/<i>μ</i>), where <i>T</i> is the tension and <i>μ</i> is the mass per unit length.',
      },
      {
        t: 'p',
        html: '<b>The clever trick — change your reference frame.</b> Instead of watching a pulse race along a stationary string, we hop into a frame moving with the pulse at speed <i>v</i>. In this frame the pulse is frozen in place, and the entire string appears to slide backward through it at speed <i>v</i>.',
      },
      {
        t: 'p',
        html: '<b>Set-up:</b> Consider a tiny element of the string at the crest of the pulse. Because the pulse is curved, this small element forms a short arc of a circle of radius <i>R</i>. Let the element subtend a small angle 2<i>θ</i> at the centre of that circle, so its length is<br>Δ<i>ℓ</i> = <i>R</i>(2<i>θ</i>) = 2<i>Rθ</i>.',
      },
      { t: 'fig', id: 'p11-14-01-d1' },
      {
        t: 'p',
        html: '<b>The forces:</b> The tension <i>T</i> pulls on both ends of the element, tangent to the string. By symmetry, the horizontal components cancel. The two vertical (inward) components add up. Each contributes <i>T</i> sin <i>θ</i>, so the net inward force is<br><i>F</i> = 2<i>T</i> sin <i>θ</i> ≈ 2<i>Tθ</i> (since <i>θ</i> is small, sin <i>θ</i> ≈ <i>θ</i>).',
      },
      {
        t: 'p',
        html: '<b>Why this step?</b> The small-angle approximation is valid because we deliberately chose a tiny element — over a small enough arc, sin <i>θ</i> and <i>θ</i> are indistinguishable. This is what lets the geometry collapse into the simple result.',
      },
      {
        t: 'p',
        html: 'Substituting <i>θ</i> = Δ<i>ℓ</i>/(2<i>R</i>):<br><i>F</i> = 2<i>T</i> · Δ<i>ℓ</i>/(2<i>R</i>) = (<i>T</i> Δ<i>ℓ</i>)/<i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>The motion:</b> In our moving frame, this element is travelling along a circular arc at speed <i>v</i>, so it needs a <b>centripetal force</b> directed toward the centre. The mass of the element is<br><i>m</i> = <i>μ</i> Δ<i>ℓ</i>,<br>and the required centripetal force is<br><i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>R</i> = (<i>μ</i> Δ<i>ℓ</i> <i>v</i><sup>2</sup>)/<i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>Why this step?</b> The net tension force we computed is exactly what supplies this centripetal pull — there is nothing else acting. So we set them equal.',
      },
      {
        t: 'p',
        html: '<b>Equate and solve:</b><br>(<i>T</i> Δ<i>ℓ</i>)/<i>R</i> = (<i>μ</i> Δ<i>ℓ</i> <i>v</i><sup>2</sup>)/<i>R</i>',
      },
      {
        t: 'p',
        html: 'The Δ<i>ℓ</i> and <i>R</i> cancel beautifully, leaving<br><i>T</i> = <i>μv</i><sup>2</sup> ⟹ <i>v</i> = √(<i>T</i>/<i>μ</i>)',
      },
      {
        t: 'p',
        html: 'Notice what this says physically: tighter string (more <i>T</i>) ⇒ faster wave; heavier string (more <i>μ</i>) ⇒ slower wave. And crucially — <b>no <i>A</i>, no <i>f</i> anywhere.</b> Speed depends only on the string, never on how you shook it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A nylon string of a sitar has a linear mass density of 0.04 kg m<sup>−1</sup> and is stretched under a tension of 36 N. A transverse wave of frequency 50 Hz is set up on it. Find (a) the speed of the wave and (b) its wavelength.',
        steps: [
          '<b>Given:</b> <i>μ</i> = 0.04 kg m<sup>−1</sup>, <i>T</i> = 36 N, <i>f</i> = 50 Hz.',
          '<b>(a)</b> Using the string-speed formula:<br><i>v</i> = √(<i>T</i>/<i>μ</i>) = √(36/0.04) = √900',
          '<b>(b)</b> Using <i>v</i> = <i>fλ</i>:<br><i>λ</i> = <i>v</i>/<i>f</i> = 30/50',
        ],
        ans: 'Wave speed = 30 m s<sup>−1</sup>, wavelength = 0.6 m.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two strings, A and B, are made of the same material. String A has twice the diameter of string B and is kept under four times the tension of B. What is the ratio of the wave speeds <i>v</i><sub><i>A</i></sub> ∶ <i>v</i><sub><i>B</i></sub>?',
        steps: [
          '<b>The trap:</b> Students rush to <i>v</i> = √(<i>T</i>/<i>μ</i>), see “4 times the tension,” and blurt out 2 ∶ 1 — completely forgetting that the thicker string is also heavier per unit length.',
          '<b>The fast way:</b> Same material means same density <i>ρ</i>. Linear mass density <i>μ</i> = <i>ρA</i><sub>cross</sub> = <i>ρ</i> · π<i>d</i><sup>2</sup>/4 ∝ <i>d</i><sup>2</sup>.',
          'So <i>μ</i><sub><i>A</i></sub>/<i>μ</i><sub><i>B</i></sub> = (<i>d</i><sub><i>A</i></sub>/<i>d</i><sub><i>B</i></sub>)<sup>2</sup> = (2)<sup>2</sup> = 4.<br><i>v</i><sub><i>A</i></sub>/<i>v</i><sub><i>B</i></sub> = √((<i>T</i><sub><i>A</i></sub>/<i>μ</i><sub><i>A</i></sub>)/(<i>T</i><sub><i>B</i></sub>/<i>μ</i><sub><i>B</i></sub>)) = √((<i>T</i><sub><i>A</i></sub>/<i>T</i><sub><i>B</i></sub>) · (<i>μ</i><sub><i>B</i></sub>/<i>μ</i><sub><i>A</i></sub>)) = √(4 · 1/4) = √1 = 1',
          'The tension boost is exactly cancelled by the extra mass — a classic NEET “looks-complicated-but-equals-one” trap.',
        ],
        ans: '<i>v</i><sub><i>A</i></sub> ∶ <i>v</i><sub><i>B</i></sub> = 1 ∶ 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A transverse wave on a string is described by <i>y</i> = 0.05 sin(8π<i>t</i> − 4π<i>x</i>), where all quantities are in SI units. (a) Find the amplitude, frequency, wavelength, and wave speed. (b) Find the maximum speed of a particle of the string. (c) If the string has a linear mass density of 0.5 kg m<sup>−1</sup>, find the tension in it.',
        steps: [
          '<b>(a)</b> Compare with <i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i>):<br>• Amplitude <i>A</i> = 0.05 m<br>• <i>ω</i> = 8π rad s<sup>−1</sup> ⇒ <i>f</i> = <i>ω</i>/(2π) = 8π/(2π) = 4 Hz<br>• <i>k</i> = 4π rad m<sup>−1</sup> ⇒ <i>λ</i> = 2π/<i>k</i> = 2π/(4π) = 0.5 m<br>• Wave speed <i>v</i> = <i>ω</i>/<i>k</i> = 8π/(4π) = 2 m s<sup>−1</sup> (in the +<i>x</i> direction)',
          '<b>(b)</b> Maximum particle speed:<br>(<i>v</i><sub><i>p</i></sub>)<sub>max</sub> = <i>Aω</i> = 0.05 × 8π = 0.4π',
          '(Note this is less than the wave speed of 2 m s<sup>−1</sup> here — particle speed and wave speed are entirely different things.)',
          '<b>(c)</b> From <i>v</i> = √(<i>T</i>/<i>μ</i>):<br><i>T</i> = <i>μv</i><sup>2</sup> = 0.5 × (2)<sup>2</sup>',
        ],
        ans: '<i>A</i> = 0.05 m, <i>f</i> = 4 Hz, <i>λ</i> = 0.5 m, <i>v</i> = 2 m s<sup>−1</sup>; (<i>v</i><sub><i>p</i></sub>)<sub>max</sub> ≈ 1.26 m s<sup>−1</sup>; <i>T</i> = 2 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform rope of mass <i>M</i> = 5 kg and length <i>L</i> = 2 m hangs vertically from a ceiling. A block of mass <i>m</i> = 4 kg is attached to its lower free end. A transverse pulse is generated at the bottom of the rope. How long does the pulse take to reach the top? (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>The key insight:</b> The tension in the rope is <b>not constant</b> — every point must support the weight hanging below it. So the wave speed changes as the pulse climbs, and we cannot use a single value of <i>v</i>.',
          '<b>Linear mass density of the rope:</b><br><i>μ</i> = <i>M</i>/<i>L</i> = 5/2 = 2.5 kg m<sup>−1</sup>',
          '<b>Tension at a height <i>x</i> above the bottom =</b> weight of the block plus the rope below that point:<br><i>T</i>(<i>x</i>) = (<i>m</i> + <i>μx</i>)<i>g</i> = (4 + 2.5<i>x</i>) × 10',
          '<b>Local wave speed:</b><br><i>v</i>(<i>x</i>) = √(<i>T</i>(<i>x</i>)/<i>μ</i>) = √((4 + 2.5<i>x</i>) × 10/2.5) = √(4(4 + 2.5<i>x</i>)) = 2√(4 + 2.5<i>x</i>)',
          '<b>Time to travel the full length</b> — integrate d<i>t</i> = d<i>x</i>/<i>v</i>(<i>x</i>):<br><i>t</i> = ∫<sub>0</sub><sup>2</sup> d<i>x</i>/(2√(4 + 2.5<i>x</i>))',
          'Let <i>u</i> = 4 + 2.5<i>x</i> ⇒ d<i>u</i> = 2.5 d<i>x</i>. Limits: <i>x</i> = 0 → <i>u</i> = 4; <i>x</i> = 2 → <i>u</i> = 9.<br><i>t</i> = ∫<sub>4</sub><sup>9</sup> (1/(2√<i>u</i>)) · (d<i>u</i>/2.5) = (1/5) ∫<sub>4</sub><sup>9</sup> <i>u</i><sup>−1/2</sup> d<i>u</i> = (1/5)[2√<i>u</i>]<sub>4</sub><sup>9</sup> = (1/5)(2 × 3 − 2 × 2) = 2/5',
          '<b>Reasoning check:</b> The pulse is slowest at the very bottom (least tension) and speeds up as it climbs (more weight below it). Integrating the changing speed is the entire game here — anyone who plugs in a single average speed gets it wrong.',
        ],
        ans: '<i>t</i> = 0.4 s.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A wave travels at 340 m s<sup>−1</sup> with a frequency of 680 Hz. Calculate its wavelength and time period.',
            a: '<i>λ</i> = 0.5 m, <i>T</i> ≈ 1.47 × 10<sup>−3</sup> s.',
          },
          {
            q: '[NEET] A steel wire of length 1 m and mass 20 g is stretched under a tension of 80 N. Find the speed of a transverse wave on it.',
            a: '<i>v</i> = √(80/0.02) = 63.2 m s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A progressive wave is given by <i>y</i> = 0.02 sin(100π<i>t</i> − 0.5π<i>x</i>) (SI units). Find its amplitude, frequency, wavelength, speed, and direction of travel.',
            a: '<i>A</i> = 0.02 m, <i>f</i> = 50 Hz, <i>λ</i> = 4 m, <i>v</i> = 200 m s<sup>−1</sup>, +<i>x</i> direction.',
          },
          {
            q: '[JEE Main] Two wires of the same material have radii in the ratio 1 ∶ 2 and are stretched by tensions in the ratio 2 ∶ 1. Find the ratio of transverse wave speeds in them.',
            a: '<i>v</i><sub>1</sub> ∶ <i>v</i><sub>2</sub> = √((2/1) · (2<sup>2</sup>/1<sup>2</sup>)) = √8 = 2√2 ∶ 1.',
          },
          {
            q: '[JEE Advanced] A uniform rope of length 9 m and mass 3 kg hangs freely from a ceiling (no extra block). Find the time taken by a transverse pulse to travel from the bottom to the top. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '<i>t</i> = 2√(<i>L</i>/<i>g</i>) = 2√(9/10) = 1.9 s.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The speed of a transverse wave on a stretched string depends on:',
        opts: [
          {
            label: 'the frequency of the wave',
            nudge: '<b>(a) trap:</b> Students confuse “I can change the frequency by shaking faster” with “speed changes.” Changing <i>f</i> only changes <i>λ</i> (since <i>v</i> is fixed); the speed stays put.',
          },
          { label: 'the amplitude of the wave', nudge: '<b>(b) trap:</b> Amplitude affects energy carried, never speed.' },
          { label: 'the tension and linear mass density of the string', nudge: null },
          {
            label: 'the wavelength of the wave',
            nudge: '<b>(d) trap:</b> Same error as <b>(a)</b> — <i>λ</i> adjusts to <i>f</i>, it doesn’t set <i>v</i>.',
          },
        ],
        correct: 2,
        solution: 'From <i>v</i> = √(<i>T</i>/<i>μ</i>), speed is fixed entirely by the string’s tension and mass per unit length — i.e., by the medium.',
      },
      {
        t: 'mcq',
        q: 'A wave is represented by <i>y</i> = 5 sin(4<i>t</i> − 2<i>x</i>) (SI units). The wave speed is:',
        opts: [
          { label: '0.5 m s<sup>−1</sup>', nudge: '<b>(a) trap:</b> Computing <i>k</i>/<i>ω</i> (formula flipped upside down).' },
          { label: '2 m s<sup>−1</sup>', nudge: null },
          { label: '4 m s<sup>−1</sup>', nudge: '<b>(c) trap:</b> Reading <i>ω</i> = 4 as the speed directly.' },
          { label: '8 m s<sup>−1</sup>', nudge: '<b>(d) trap:</b> Multiplying <i>ω</i> × <i>k</i> = 8 instead of dividing.' },
        ],
        correct: 1,
        solution: '<i>ω</i> = 4, <i>k</i> = 2, so <i>v</i> = <i>ω</i>/<i>k</i> = 4/2 = 2 m s<sup>−1</sup>.',
      },
      {
        t: 'mcq',
        q: 'Which of the following can travel through a vacuum?',
        opts: [
          {
            label: 'Sound waves',
            nudge: '<b>(a), (b), (d) traps:</b> All three are mechanical waves that absolutely require a material medium. The most common slip is <b>(a)</b> — picturing sound “in space” from movies, which is physically impossible.',
          },
          {
            label: 'Waves on a string',
            nudge: '<b>(a), (b), (d) traps:</b> All three are mechanical waves that absolutely require a material medium. The most common slip is <b>(a)</b> — picturing sound “in space” from movies, which is physically impossible.',
          },
          { label: 'X-rays', nudge: null },
          {
            label: 'Water waves',
            nudge: '<b>(a), (b), (d) traps:</b> All three are mechanical waves that absolutely require a material medium. The most common slip is <b>(a)</b> — picturing sound “in space” from movies, which is physically impossible.',
          },
        ],
        correct: 2,
        solution: 'X-rays are electromagnetic (non-mechanical) and need no medium.',
      },
      {
        t: 'mcq',
        q: 'A sound wave travels from air into water. As it crosses the boundary, which quantity remains unchanged?',
        opts: [
          { label: 'Speed', nudge: '<b>(a) trap:</b> Sound is faster in water — speed definitely changes.' },
          { label: 'Wavelength', nudge: '<b>(b) trap:</b> With <i>v</i> up and <i>f</i> fixed, <i>λ</i> must change.' },
          { label: 'Frequency', nudge: null },
          {
            label: 'All of these',
            nudge: '<b>(d) trap:</b> Tempting if you don’t remember which quantity is “locked.” Only <i>f</i> is.',
          },
        ],
        correct: 2,
        solution: 'Frequency is dictated by the source and is preserved across media. Since the speed of sound is greater in water, and <i>v</i> = <i>fλ</i> with <i>f</i> fixed, the wavelength actually increases in water.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing particle velocity with wave velocity.</b> The wave speed <i>v</i> = <i>ω</i>/<i>k</i> is how fast the pattern moves. The particle speed <i>v</i><sub><i>p</i></sub> = <i>Aω</i> cos(…) is how fast a bit of the medium wiggles. They are different quantities with different formulas — and as worked example 3 showed, 1.26 m s<sup>−1</sup> against 2 m s<sup>−1</sup>.',
          '<b>Forgetting that <i>μ</i> scales with thickness.</b> In “same material” string problems, a thicker string has a larger <i>μ</i> ∝ <i>d</i><sup>2</sup> ∝ <i>r</i><sup>2</sup>. Ignoring this is the single most common error in two-string ratio questions.',
          '<b>Assuming frequency changes across media.</b> When a wave enters a new medium, <i>f</i> stays the same; it’s <i>v</i> and <i>λ</i> that change. Many students wrongly hold <i>λ</i> fixed instead.',
          '<b>Using a single wave speed for a hanging rope.</b> Tension varies along a vertical rope, so the speed varies. You must integrate — a constant-speed shortcut gives the wrong time.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “same material, different dimensions” string problems, skip the full calculation and go straight to ratios. Write <i>v</i> ∝ √(<i>T</i>/<i>r</i><sup>2</sup>) = √<i>T</i>/<i>r</i> and plug in the ratios directly. It turns a two-minute problem into a ten-second one — and dodges the <i>μ</i>-scaling trap automatically.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Master relation', note: '<i>v</i> = <i>fλ</i> = <i>λ</i>/<i>T</i> = <i>ω</i>/<i>k</i>' },
          { f: 'Wave on a string', note: '<i>v</i> = √(<i>T</i>/<i>μ</i>) — depends on medium only, never on <i>A</i> or <i>f</i>.' },
          { f: 'Wave equation (+<i>x</i>)', note: '<i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>)' },
          { f: 'Particle velocity', note: '<i>v</i><sub><i>p</i></sub> = <i>Aω</i> cos(…), max = <i>Aω</i> — not the same as wave speed.' },
          { f: '<i>ω</i> = 2π<i>f</i>, <i>k</i> = 2π/<i>λ</i>', note: '' },
          { f: 'Across media', note: '<i>f</i> stays fixed; <i>v</i> and <i>λ</i> change together.' },
        ],
        aids: [
          '“Tight and light goes fast” — high tension <i>T</i>, low density <i>μ</i> ⇒ high <i>v</i>.',
          '“Source sets the frequency, medium sets the speed.”',
          '“Same material? Then <i>μ</i> ∝ <i>r</i><sup>2</sup> — don’t forget the radius.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 955–963 ─────────────────────────
  {
    n: '02',
    title: 'Superposition and Beats',
    kalam: 'Waves don’t collide and bounce off each other like cricket balls.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliably scoring topic. JEE Main almost always has a question on beat frequency or the tuning-fork loading/filing logic, and often one on resultant amplitude/intensity of two coherent waves. NEET loves the conceptual beats question (“beat frequency = difference of frequencies”) and the unknown-frequency puzzle. JEE Advanced folds beats into multi-step problems (sonometer tension changes, the <i>f</i> ∝ √<i>T</i> link). CBSE Boards typically ask the principle of superposition or a short derivation of beat frequency for 2–3 marks.',
      },
      {
        t: 'p',
        html: 'Throw two pebbles into a still pond a little distance apart. Two sets of circular ripples spread out, and somewhere in the middle they meet. What happens? They simply pass through each other. Where two crests meet, the water rises extra high. Where a crest meets a trough, the surface barely moves. And once they cross, each ripple carries on exactly as if the other had never been there.',
      },
      {
        t: 'p',
        html: 'That is the <b>Principle of Superposition</b>, the single idea underneath this entire topic:',
      },
      {
        t: 'p',
        html: 'When two or more waves overlap at a point, the resultant displacement at that point is the <b>algebraic sum</b> of the displacements that each wave would have produced individually.<br><i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub> + …',
      },
      {
        t: 'p',
        html: 'Waves don’t collide and bounce off each other like cricket balls. They add up, point by point, instant by instant — and then move on, unchanged.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two people pushing the same child on a swing. If both push in step with the swing’s motion, the child goes higher and higher — their efforts add up. If one pushes forward exactly when the other pulls back, they cancel and the swing barely moves. Waves do the same thing: when they arrive <b>in phase</b>, they reinforce (constructive interference); when they arrive <b>out of phase</b>, they cancel (destructive interference).',
      },
      {
        t: 'p',
        html: 'For two waves of the <b>same frequency,</b> with amplitudes <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub> and a phase difference <i>φ</i> between them, the resultant amplitude is:<br><i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>φ</i>)<br>• In phase (<i>φ</i> = 0, 2π, …): amplitudes add → <b>loudest/brightest</b>.<br>• Out of phase (<i>φ</i> = π, 3π, …): amplitudes subtract → <b>quietest/darkest</b> (zero if equal).',
      },
      {
        t: 'p',
        html: '<b>Now, beats.</b> What if the two waves have almost the same frequency, but not quite? Picture two singers in a bhajan holding the same note, but one is a hair sharp. You don’t hear two separate notes — you hear a single note whose <b>loudness swells and fades, swells and fades</b>: waaah… waaah… waaah… This periodic rise and fall in loudness is called <b>beats</b>.',
      },
      {
        t: 'p',
        html: 'Here’s why it happens: because the frequencies differ slightly, the two waves drift in and out of step at a point. For a moment they’re in phase (loud), then they slip out of phase (soft), then back in phase (loud again). The number of these loud-soft cycles per second is the <b>beat frequency</b>, and it turns out to equal exactly the difference of the two frequencies:<br><i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|',
      },
      {
        t: 'p',
        html: 'This is precisely how a tabla player or a sitarist tunes by ear — they adjust the tension until the throbbing slows down and finally vanishes. No throb means the frequencies match.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Superposition holds for <b>linear media</b> (small amplitudes). For very large disturbances, waves do interact and the simple sum breaks down.<br>• <b>Steady interference</b> (a stable pattern of bright/dark or loud/quiet) requires the two sources to be <b>coherent</b> — same frequency and a constant phase relationship.<br>• <b>Beats</b> require the two frequencies to be <b>close</b>. If |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| exceeds about 10 Hz, the throbs come too fast for the human ear to resolve and you just hear a blur.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Principle of superposition',
        main: '<i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + …',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resultant amplitude of two waves (same frequency, phase difference φ)',
        main: '<i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>φ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resultant intensity',
        main: '(since <i>I</i> ∝ <i>A</i><sup>2</sup>):<br><i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum and minimum intensity',
        main: '<i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup>, <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Condition for constructive interference',
        main: '<i>φ</i> = 2<i>n</i>π or path difference Δ<i>x</i> = <i>nλ</i> (<i>n</i> = 0, 1, 2, …)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Condition for destructive interference',
        main: '<i>φ</i> = (2<i>n</i> + 1)π or Δ<i>x</i> = (2<i>n</i> + 1)<i>λ</i>/2',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Beat frequency',
        main: '<i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, <i>t</i><sub>beat</sub> = 1/|<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Tuning-fork logic:</b><br>• Loading a fork with <b>wax → frequency decreases.</b><br>• <b>Filing</b> a fork → frequency <b>increases.</b>',
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['<i>φ</i>', 'Phase difference', 'radian', 'dimensionless'],
          ['Δ<i>x</i>', 'Path difference', 'metre (m)', '[L]'],
          ['<i>I</i>', 'Intensity', 'W m<sup>−2</sup>', '[M T<sup>−3</sup>]'],
          ['<i>f</i><sub>beat</sub>', 'Beat frequency', 'hertz (Hz)', '[T<sup>−1</sup>]'],
          ['<i>t</i><sub>beat</sub>', 'Beat period', 'second (s)', '[T]'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Relation between phase difference and path difference',
        main: '<i>φ</i> = (2π/<i>λ</i>) Δ<i>x</i>',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivation — The beat frequency formula' },
      {
        t: 'p',
        html: 'We want to prove that two waves of nearby frequencies <i>f</i><sub>1</sub> and <i>f</i><sub>2</sub>, heard at the same point, produce beats at frequency |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|.',
      },
      {
        t: 'p',
        html: '<b>Set-up.</b> Consider a fixed point in space (say, your eardrum). Two sound waves of equal amplitude <i>A</i> and slightly different frequencies arrive there. Drop the spatial part (we’re at one fixed point) and write the two displacements as functions of time:<br><i>y</i><sub>1</sub> = <i>A</i> cos(2π<i>f</i><sub>1</sub><i>t</i>), <i>y</i><sub>2</sub> = <i>A</i> cos(2π<i>f</i><sub>2</sub><i>t</i>)',
      },
      {
        t: 'p',
        html: '<b>Why cosine and one fixed point?</b> Beats are about how the combined loudness changes in <b>time</b> at a single location, so we only need the time dependence.',
      },
      {
        t: 'p',
        html: '<b>Apply superposition:</b><br><i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> = <i>A</i>[cos(2π<i>f</i><sub>1</sub><i>t</i>) + cos(2π<i>f</i><sub>2</sub><i>t</i>)]',
      },
      {
        t: 'p',
        html: '<b>Use the sum-to-product identity</b> cos <i>C</i> + cos <i>D</i> = 2 cos((<i>C</i> + <i>D</i>)/2) cos((<i>C</i> − <i>D</i>)/2):<br><i>y</i> = 2<i>A</i> cos[2π((<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)/2)<i>t</i>] cos[2π((<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2)<i>t</i>]',
      },
      {
        t: 'p',
        html: '<b>Read the physics off the equation.</b> This is a single oscillation with two distinct timescales:<br>1. The <b>second factor</b>, cos[2π((<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2)<i>t</i>], is a fast oscillation at the <b>average frequency</b> (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2. This is the actual note you perceive.<br>2. The <b>first factor</b>, 2<i>A</i> cos[2π((<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)/2)<i>t</i>], is a slowly varying <b>amplitude envelope</b>. Because <i>f</i><sub>1</sub> and <i>f</i><sub>2</sub> are close, (<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)/2 is small, so this term changes lazily — it’s the swelling and fading you hear.',
      },
      {
        t: 'p',
        html: '<b>The crucial last step — why the factor of 2.</b> The loudness (intensity) depends on the magnitude of the amplitude, |2<i>A</i> cos(…)|, not its sign. The envelope reaches a maximum loudness <b>twice</b> in each of its own cycles (once when cos = +1, once when cos = −1). So the loudness throbs at twice the envelope frequency:<br><i>f</i><sub>beat</sub> = 2 × |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|/2 = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|',
      },
      {
        t: 'p',
        html: 'The factor of 2 is exactly what students drop — and it’s the whole reason the answer is the clean difference, not half of it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two tuning forks of frequencies 512 Hz and 516 Hz are sounded together. Find (a) the beat frequency and (b) the time interval between two successive maxima of loudness.',
        steps: [
          '<b>Given:</b> <i>f</i><sub>1</sub> = 516 Hz, <i>f</i><sub>2</sub> = 512 Hz.',
          '<b>(a)</b> Beat frequency:<br><i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| = |516 − 512|',
          '<b>(b)</b> Time between successive maxima = beat period:<br><i>t</i><sub>beat</sub> = 1/<i>f</i><sub>beat</sub> = 1/4',
        ],
        ans: '4 beats per second, with maxima 0.25 s apart.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A tuning fork A of unknown frequency produces 6 beats per second with a standard fork of frequency 480 Hz. When fork A is loaded with a small amount of wax, the beat frequency drops to 3 per second. Find the original frequency of A.',
        steps: [
          '<b>The trap:</b> Students stop at “6 beats ⇒ A is 486 or 474 Hz” and then guess. You must use the loading clue to choose.',
          '<b>Step 1 — list both candidates:</b><br><i>f</i><sub><i>A</i></sub> = 480 ± 6 = 486 Hz or 474 Hz',
          '<b>Step 2 — apply the rule:</b> wax lowers a fork’s frequency. So loading A pushes its frequency <b>down</b>.<br>• If <i>f</i><sub><i>A</i></sub> = 486: loading drops it toward 480 → it gets closer → beats <b>decrease</b>. ✓ (Matches “drops to 3.”)<br>• If <i>f</i><sub><i>A</i></sub> = 474: loading drops it away from 480 → it gets farther → beats <b>increase</b>. ✗',
          '<b>Mental shortcut:</b> “Loading drops frequency. Beats went down after loading ⇒ the fork was above the standard.” Pick the higher candidate. (If beats had gone up, pick the lower one.)',
        ],
        ans: '<i>f</i><sub><i>A</i></sub> = 486 Hz.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two coherent sources produce sound waves of intensities <i>I</i> and 4<i>I</i> at a point. (a) Find the ratio <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> in the resulting interference pattern. (b) Find the resultant intensity at a point where the phase difference between the two waves is π/2.',
        steps: [
          '<b>(a)</b> With <i>I</i><sub>1</sub> = <i>I</i> and <i>I</i><sub>2</sub> = 4<i>I</i>, the amplitudes go as <i>A</i> ∝ √<i>I</i>, so <i>A</i><sub>1</sub> ∶ <i>A</i><sub>2</sub> = 1 ∶ 2.<br><i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup> = (√<i>I</i> + √(4<i>I</i>))<sup>2</sup> = (3√<i>I</i>)<sup>2</sup> = 9<i>I</i><br><i>I</i><sub>min</sub> = (√<i>I</i><sub>2</sub> − √<i>I</i><sub>1</sub>)<sup>2</sup> = (2√<i>I</i> − √<i>I</i>)<sup>2</sup> = (√<i>I</i>)<sup>2</sup> = <i>I</i><br><i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = 9<i>I</i>/<i>I</i> = 9',
          '<b>(b)</b> Using <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i> with <i>φ</i> = π/2 (so cos <i>φ</i> = 0):<br><i>I</i> = <i>I</i> + 4<i>I</i> + 2√(<i>I</i> · 4<i>I</i>) (0)',
        ],
        ans: '<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = 9 ∶ 1; resultant intensity at <i>φ</i> = π/2 is 5<i>I</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two identical sonometer wires are stretched by the same tension of 100 N and vibrate in unison at a fundamental frequency of 400 Hz. The tension in one of the wires is now increased by 1 N. How many beats per second are heard when both are plucked? (Assume the tension change is small.)',
        steps: [
          '<b>The insight:</b> Both wires start at the same frequency (zero beats). Increasing one wire’s tension nudges its frequency up; the small mismatch produces beats.',
          '<b>Step 1 — frequency–tension relation.</b> For a wire’s fundamental, <i>f</i> = (1/(2<i>L</i>))√(<i>T</i>/<i>μ</i>), so <i>f</i> ∝ √<i>T</i>.',
          '<b>Step 2 — differentiate (small-change approximation).</b> Taking the logarithm, ln <i>f</i> = const + ½ ln <i>T</i>, so:<br>d<i>f</i>/<i>f</i> = ½ (d<i>T</i>/<i>T</i>)',
          '<b>Step 3 — plug in.</b> d<i>T</i> = 1 N, <i>T</i> = 100 N, <i>f</i> = 400 Hz:<br>d<i>f</i> = ½ · (d<i>T</i>/<i>T</i>) · <i>f</i> = ½ · (1/100) · 400 = 2 Hz<br>The new frequency of the stretched wire is 402 Hz; the other stays at 400 Hz.',
          '<b>Step 4 — beat frequency:</b><br><i>f</i><sub>beat</sub> = |402 − 400|',
          '<b>Reasoning check:</b> A 1% tension increase gives only a 0.5% frequency increase (the square root halves it) — exactly why a tiny tension change produces a small, audible beat rather than a wild pitch jump.',
        ],
        ans: '2 beats per second.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two sound waves of frequencies 200 Hz and 205 Hz are produced together. How many beats are heard in 10 s?',
            a: '50 beats.',
          },
          {
            q: '[NEET] Fork A (frequency 320 Hz) gives 5 beats/s with fork B. On filing fork B, the beat frequency increases to 8/s. Find the original frequency of B.',
            a: 'Filing raises B’s frequency; beats increased, so B was above A → <i>f</i><sub><i>B</i></sub> = 325 Hz.',
          },
          {
            q: '[JEE Main] Two coherent waves of amplitudes <i>A</i> and 3<i>A</i> interfere. Find the ratio of maximum to minimum resultant intensity.',
            a: '<i>I</i><sub>max</sub> ∶ <i>I</i><sub>min</sub> = (3<i>A</i> + <i>A</i>)<sup>2</sup> ∶ (3<i>A</i> − <i>A</i>)<sup>2</sup> = 16 ∶ 4 = 4 ∶ 1.',
          },
          {
            q: '[JEE Main] The speed of sound in a gas is to be found from two waves of wavelengths 1.00 m and 1.01 m that produce 4 beats per second. Find the speed of sound.',
            a: '<i>v</i> = <i>fλ</i> for both; <i>v</i>/1.00 − <i>v</i>/1.01 = 4 ⇒ <i>v</i> ≈ 404 m s<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A sonometer wire vibrating at 256 Hz is in unison with a tuning fork. To produce 4 beats per second, by what percentage must the wire’s tension be increased? (Assume small change.)',
            a: 'd<i>f</i>/<i>f</i> = ½ d<i>T</i>/<i>T</i> ⇒ 4/256 = ½(d<i>T</i>/<i>T</i>) ⇒ d<i>T</i>/<i>T</i> = 8/256 = 3.125%.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two tuning forks produce 5 beats per second. The frequency of one is 480 Hz. The frequency of the other could be:',
        opts: [
          {
            label: '475 Hz only',
            nudge: '<b>(a), (b) traps:</b> Picking just one without any extra information — there’s nothing to break the tie.',
          },
          {
            label: '485 Hz only',
            nudge: '<b>(a), (b) traps:</b> Picking just one without any extra information — there’s nothing to break the tie.',
          },
          { label: 'either 475 Hz or 485 Hz', nudge: null },
          { label: '480 Hz', nudge: '<b>(d) trap:</b> If both were 480 Hz there would be zero beats.' },
        ],
        correct: 2,
        solution: 'With only the beat count given, the second fork is 480 ± 5, i.e. 475 or 485 Hz. Without a loading/filing clue, both are valid.',
      },
      {
        t: 'mcq',
        q: 'When two waves of nearly equal frequencies superpose, the beat frequency is equal to:',
        opts: [
          {
            label: 'the sum of the two frequencies',
            nudge: '<b>(a) trap:</b> Confusing superposition with simple addition of frequencies, which is never physical here.',
          },
          { label: 'the difference of the two frequencies', nudge: null },
          {
            label: 'half the difference of the two frequencies',
            nudge: '<b>(c) trap:</b> This is the envelope frequency. Students forget the factor of 2 from loudness depending on |amplitude|.',
          },
          {
            label: 'the average of the two frequencies',
            nudge: '<b>(d) trap:</b> The average (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2 is the frequency of the note you hear, not the beat rate.',
          },
        ],
        correct: 1,
        solution: '<i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|.',
      },
      {
        t: 'mcq',
        q: 'For two sources to produce a steady, observable interference pattern, they must have:',
        opts: [
          {
            label: 'the same amplitude only',
            nudge: '<b>(a) trap:</b> Equal amplitude makes the dark fringes perfectly dark, but it is <b>not required</b> for a pattern to exist.',
          },
          { label: 'the same frequency and a constant phase difference', nudge: null },
          {
            label: 'slightly different frequencies',
            nudge: '<b>(c) trap:</b> Slightly different frequencies give beats (a time effect), not a steady spatial interference pattern.',
          },
          {
            label: 'the same intensity and opposite phase',
            nudge: '<b>(d) trap:</b> Opposite phase gives cancellation at that point, not the condition for a sustained pattern.',
          },
        ],
        correct: 1,
        solution: 'Coherence = identical frequency + a phase relationship that does not drift.',
      },
      {
        t: 'mcq',
        q: 'Tuning fork A gives 4 beats per second with fork B (<i>f</i><sub><i>B</i></sub> = 300 Hz). When A is loaded with wax, the beat frequency becomes 2 per second. The original frequency of A is:',
        opts: [
          {
            label: '296 Hz',
            nudge: '<b>(a) trap:</b> If A were 296, loading would push it further from 300 → beats would increase, contradicting the data.',
          },
          { label: '304 Hz', nudge: null },
          {
            label: '302 Hz',
            nudge: '<b>(c), (d) traps:</b> 302 Hz is A after loading (304 − 2), not the original — the wrong-stage slip. 298 Hz fits neither candidate (300 ± 4).',
          },
          {
            label: '298 Hz',
            nudge: '<b>(c), (d) traps:</b> 302 Hz is A after loading (304 − 2), not the original — the wrong-stage slip. 298 Hz fits neither candidate (300 ± 4).',
          },
        ],
        correct: 1,
        solution: 'Candidates: 300 ± 4 = 304 or 296. Wax lowers A’s frequency; beats decreased, so A must be above B. Hence 304 Hz.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Halving the beat frequency.</b> <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, <b>not</b> |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|/2. The half belongs to the amplitude envelope; loudness throbs at twice that.',
          '<b>Mixing up loading and filing.</b> Wax lowers frequency; filing raises it. Memorize one and the other follows. Getting this backward flips your entire ± resolution.',
          '<b>Adding intensities for coherent waves.</b> For coherent sources you <b>cannot</b> just write <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> — the interference term 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i> matters. (Only for incoherent sources do intensities simply add.)',
          '<b>Confusing the beat scenario with the interference scenario.</b> Same frequency → spatial interference pattern. Nearly equal frequencies → beats in time. They are different phenomena with different formulas.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For loading/filing problems, use one clean rule and skip the case-by-case reasoning: “Wax lowers frequency. If the beats decrease after loading, the fork was above the standard (take the higher candidate); if the beats increase, it was below (take the lower candidate).” Faster, once you trust it: just ask “did the fork move toward or away from the standard?”',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Superposition',
            note: '<i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + … (waves add, then pass through unchanged).',
          },
          {
            f: 'Resultant amplitude',
            note: '<i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>φ</i>)',
          },
          {
            f: 'Intensity',
            note: '<i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i>; <i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup>, <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup>',
          },
          {
            f: 'Constructive',
            note: 'Δ<i>x</i> = <i>nλ</i>. <b>Destructive:</b> Δ<i>x</i> = (2<i>n</i> + 1)<i>λ</i>/2.',
          },
          {
            f: 'Beats',
            note: '<i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, <i>t</i><sub>beat</sub> = 1/|<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|.',
          },
          { f: 'Tension link', note: '<i>f</i> ∝ √<i>T</i> ⇒ d<i>f</i>/<i>f</i> = ½ (d<i>T</i>/<i>T</i>).' },
        ],
        aids: [
          '“Wax weighs it down” — wax lowers frequency; filing files it up.',
          '“Beat = the difference, plain and simple” — no halving.',
          '“Same <i>f</i> → pattern in space; close <i>f</i> → throb in time.”',
        ],
      },
    ],
  },
];
