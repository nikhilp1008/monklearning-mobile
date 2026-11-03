import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Additional Topics D to F, word for word from the Class 11
 * Physics Master Reference: D Superposition of Different Frequencies: Beats
 * and Amplitude Modulation (pp. 935 to 937), E Damped Oscillations:
 * Logarithmic Decrement, Resonance Nuances, and Power Absorption (pp. 937 to
 * 940) and F The “Prove It’s SHM” Laboratory: Potential Expansion and
 * Non-Standard Systems (pp. 940 to 943). Each addendum prints its own
 * practice problems and answers. The addenda print no drawings. An exponent
 * that needs a subscript is written with exp(…) on the line (exp(−bt<sub>n</sub>/(2m))),
 * because a <sub> inside a <sup> is flattened.
 */
export const TOPICS: Topic[] = [
  {
    n: 'D',
    title: 'Superposition of Different Frequencies: Beats and Amplitude Modulation',
    extra: true,
    kalam: 'The envelope amplitude varies between |A₁ − A₂| and A₁ + A₂ with angular frequency Δω.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 covers superposition of equal frequencies (phasors, Lissajous). JEE Main explicitly asks for <b>beats</b>: two SHMs of slightly different frequencies <i>ω</i><sub>1</sub> ≈ <i>ω</i><sub>2</sub> superpose to give a rapid oscillation at the average frequency modulated by a slow envelope at the difference frequency. The chapter does not derive the envelope or the beat frequency formula.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Collinear superposition of two SHMs with different frequencies.</b><br><i>x</i><sub>1</sub> = <i>A</i><sub>1</sub> cos <i>ω</i><sub>1</sub><i>t</i>,   <i>x</i><sub>2</sub> = <i>A</i><sub>2</sub> cos <i>ω</i><sub>2</sub><i>t</i>   (<i>ω</i><sub>1</sub> > <i>ω</i><sub>2</sub>).<br><i>x</i> = <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = <i>A</i><sub>1</sub> cos <i>ω</i><sub>1</sub><i>t</i> + <i>A</i><sub>2</sub> cos <i>ω</i><sub>2</sub><i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Case 1: Equal amplitudes <i>A</i><sub>1</sub> = <i>A</i><sub>2</sub> = <i>A</i>.</b> Use sum-to-product:<br><i>x</i> = 2<i>A</i> cos(((<i>ω</i><sub>1</sub> − <i>ω</i><sub>2</sub>)/2)<i>t</i>) cos(((<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub>)/2)<i>t</i>).<br>• <b>Carrier (fast):</b> angular frequency <i>ω</i><sub>avg</sub> = (<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub>)/2 ≈ <i>ω</i><sub>1</sub> ≈ <i>ω</i><sub>2</sub>.<br>• <b>Envelope (slow):</b> amplitude <i>A</i><sub>env</sub>(<i>t</i>) = 2<i>A</i>|cos((Δ<i>ω</i>/2)<i>t</i>)|, where Δ<i>ω</i> = <i>ω</i><sub>1</sub> − <i>ω</i><sub>2</sub>.<br>• <b>Beat angular frequency:</b> <i>ω</i><sub>beat</sub> = Δ<i>ω</i> = <i>ω</i><sub>1</sub> − <i>ω</i><sub>2</sub>. (The factor cos((Δ<i>ω</i>/2)<i>t</i>) goes from max to zero to max in half its own period, i.e. once every 2π/Δ<i>ω</i>, so the beat frequency — number of loud-soft cycles per second — is <i>f</i><sub>beat</sub> = Δ<i>ω</i>/(2π) = <i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>.)<br>• <b>Beat period:</b> <i>T</i><sub>beat</sub> = 2π/Δ<i>ω</i> = 1/|<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|.',
      },
      {
        t: 'p',
        html: '<b>Case 2: Unequal amplitudes <i>A</i><sub>1</sub> ≠ <i>A</i><sub>2</sub>.</b> No complete cancellation. Write as:<br><i>x</i> = <i>A</i><sub>1</sub> cos <i>ω</i><sub>1</sub><i>t</i> + <i>A</i><sub>2</sub> cos <i>ω</i><sub>2</sub><i>t</i> = <i>A</i><sub>env</sub>(<i>t</i>) cos(<i>ω</i><sub>avg</sub><i>t</i> + <i>φ</i>(<i>t</i>)).<br>The envelope amplitude varies between |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| and <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> with angular frequency Δ<i>ω</i>. Exact envelope: <i>A</i><sub>env</sub><sup>2</sup> = <i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos(Δ<i>ω t</i>). This is the <b>amplitude modulation</b> (AM) formula. The “carrier” is at <i>ω</i><sub>avg</sub>, the “modulation” at Δ<i>ω</i>.',
      },
      {
        t: 'p',
        html: '<b>Perpendicular superposition (different frequencies) → Lissajous figures.</b> <i>x</i> = <i>A</i> cos <i>ω</i><sub>1</sub><i>t</i>, <i>y</i> = <i>B</i> cos(<i>ω</i><sub>2</sub><i>t</i> + <i>δ</i>). If <i>ω</i><sub>1</sub>/<i>ω</i><sub>2</sub> = <i>p</i>/<i>q</i> (in lowest terms, rational), the figure is closed and repeats after <i>T</i> = <i>pT</i><sub>1</sub> = <i>qT</i><sub>2</sub>, where <i>T</i><sub>1</sub> = 2π/<i>ω</i><sub>1</sub> and <i>T</i><sub>2</sub> = 2π/<i>ω</i><sub>2</sub>. The curve touches each of the left and right edges <i>p</i> times (the <i>x</i>-motion completes <i>p</i> cycles) and each of the top and bottom edges <i>q</i> times. The phase <i>δ</i> changes the shape of the figure.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Beat Frequency and Envelope',
        q: 'Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Find (a) the beat frequency, (b) the time interval between successive maxima of intensity, (c) the frequency of the resultant sound.',
        steps: [
          '<i>f</i><sub>1</sub> = 256 Hz, <i>f</i><sub>2</sub> = 260 Hz.',
          '(a) Beat frequency <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| = 4 Hz.',
          '(b) Time between successive maxima = beat period <i>T</i><sub>beat</sub> = 1/<i>f</i><sub>beat</sub> = 0.25 s.',
          '(c) Resultant frequency (pitch heard) = average frequency = (256 + 260)/2 = 258 Hz.',
          '<b>Check.</b> The envelope has frequency 4 Hz (4 beats per second). The carrier oscillates at 258 Hz. The intensity (∝ amplitude<sup>2</sup>) peaks 4 times per second. Correct.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Unequal Amplitude Beats — Modulation Index',
        q: 'Two collinear SHMs: <i>x</i><sub>1</sub> = 5 cos 100π<i>t</i> cm, <i>x</i><sub>2</sub> = 3 cos 104π<i>t</i> cm. Find (a) the maximum and minimum resultant amplitudes, (b) the beat frequency, (c) the modulation index <i>m</i> = (<i>A</i><sub>max</sub> − <i>A</i><sub>min</sub>)/(<i>A</i><sub>max</sub> + <i>A</i><sub>min</sub>).',
        steps: [
          '<i>ω</i><sub>1</sub> = 100π, <i>ω</i><sub>2</sub> = 104π. Δ<i>ω</i> = 4π rad/s. <i>f</i><sub>beat</sub> = Δ<i>ω</i>/(2π) = 2 Hz.',
          'Average angular frequency = (100π + 104π)/2 = 102π rad/s, i.e. 51 Hz.',
          'Amplitudes: <i>A</i><sub>1</sub> = 5 cm, <i>A</i><sub>2</sub> = 3 cm.',
          '(a) <i>A</i><sub>max</sub> = <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> = 8 cm. <i>A</i><sub>min</sub> = |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| = 2 cm.',
          '(b) Beat frequency = 2 Hz (as above).',
          '(c) Modulation index <i>m</i> = (8 − 2)/(8 + 2) = 6/10 = 0.6.',
          '<b>Check.</b> The envelope varies as √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos Δ<i>ωt</i>). Max = √(25 + 9 + 30) = √64 = 8. Min = √(25 + 9 − 30) = √4 = 2. Correct.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Lissajous Figure Identification',
        q: 'A particle is subjected to two perpendicular SHMs: <i>x</i> = 4 cos 2<i>ωt</i>, <i>y</i> = 4 cos(3<i>ωt</i> + π/4). Identify the path and its orientation.',
        steps: [
          'Frequency ratio <i>ω</i><sub><i>x</i></sub> ∶ <i>ω</i><sub><i>y</i></sub> = 2 ∶ 3. Rational ⇒ closed Lissajous figure.',
          'For <i>x</i> = <i>A</i> cos(<i>n</i><sub><i>x</i></sub><i>ωt</i>) and <i>y</i> = <i>B</i> cos(<i>n</i><sub><i>y</i></sub><i>ωt</i> + <i>δ</i>), the curve touches each of the left and right edges <i>n</i><sub><i>x</i></sub> times and each of the top and bottom edges <i>n</i><sub><i>y</i></sub> times.',
          'Here <i>n</i><sub><i>x</i></sub> = 2, <i>n</i><sub><i>y</i></sub> = 3.',
          'Phase difference <i>δ</i> = π/4.',
          'The figure is a closed curve touching the left and right edges 2 times each (at <i>y</i> = ±2√2) and the top and bottom edges 3 times each (at <i>x</i> = 0 and ±2√3). For <i>δ</i> = π/4 it is symmetric about both axes and crosses itself 7 times.',
          '<b>Check.</b> For <i>δ</i> = 0 or <i>δ</i> = π/2 the same 2 ∶ 3 ratio degenerates into an open arc traced back and forth; for <i>δ</i> = π/4 it opens into a genuine closed loop. The exact shape is not usually drawn in exams; identifying the ratio and counting the tangent points is the tested skill.',
        ],
        ans: 'Lissajous figure with frequency ratio 2 ∶ 3, phase difference 45°, touching the left/right edges 2 times and the top/bottom edges 3 times.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Two sound waves of frequencies 440 Hz and 446 Hz interfere. Find the beat frequency and the beat period.',
            a: '<i>f</i><sub>beat</sub> = 6 Hz, <i>T</i><sub>beat</sub> = 1/6 s ≈ 0.167 s.',
          },
          {
            q: 'Two SHMs <i>x</i><sub>1</sub> = 10 cos 200π<i>t</i>, <i>x</i><sub>2</sub> = 6 cos 208π<i>t</i> (cm). Find the maximum and minimum resultant amplitudes and the modulation index.',
            a: '<i>A</i><sub>max</sub> = 16 cm, <i>A</i><sub>min</sub> = 4 cm, <i>m</i> = (16 − 4)/(16 + 4) = 12/20 = 0.6.',
          },
          {
            q: 'A particle has <i>x</i> = 5 cos 10<i>t</i> + 5 cos 12<i>t</i> (cm). Write the resultant as a product of a slow envelope and a fast carrier. Find the period of the envelope and the period of the carrier.',
            a: '<i>x</i> = 10 cos <i>t</i> cos 11<i>t</i> cm (<i>t</i> in seconds). The envelope 10|cos <i>t</i>| repeats every <i>T</i><sub>env</sub> = 2π/Δ<i>ω</i> = π s ≈ 3.14 s (the beat period; cos <i>t</i> itself has period 2π s). Carrier period <i>T</i><sub><i>c</i></sub> = 2π/11 ≈ 0.571 s.',
          },
          {
            q: 'Lissajous figure from <i>x</i> = <i>A</i> cos 3<i>ωt</i>, <i>y</i> = <i>A</i> cos(5<i>ωt</i> + π/2). How many times does the curve touch the top/bottom boundary? How many times the left/right boundary?',
            a: 'Ratio 3:5. Touches top/bottom (y-extremes) 5 times. Touches left/right (x-extremes) 3 times.',
          },
          {
            q: 'Two waves <i>y</i><sub>1</sub> = <i>A</i> sin(<i>k</i><sub>1</sub><i>x</i> − <i>ω</i><sub>1</sub><i>t</i>) and <i>y</i><sub>2</sub> = <i>A</i> sin(<i>k</i><sub>2</sub><i>x</i> − <i>ω</i><sub>2</sub><i>t</i>), with <i>k</i><sub>1</sub> = <i>k</i>, <i>k</i><sub>2</sub> = <i>k</i> + Δ<i>k</i>, <i>ω</i><sub>1</sub> = <i>ω</i>(<i>k</i>), <i>ω</i><sub>2</sub> = <i>ω</i>(<i>k</i> + Δ<i>k</i>), travel in the same direction. Show that the resultant is a travelling wave modulated by a moving envelope, and find the group velocity <i>v</i><sub><i>g</i></sub> = d<i>ω</i>/d<i>k</i>.',
            a: '<i>y</i> = 2<i>A</i> cos((Δ<i>k x</i> − Δ<i>ω t</i>)/2) sin(<i>k</i><sub>avg</sub><i>x</i> − <i>ω</i><sub>avg</sub><i>t</i>), where Δ<i>k</i> = <i>k</i><sub>2</sub> − <i>k</i><sub>1</sub>, Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub>, <i>k</i><sub>avg</sub> = (<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)/2, <i>ω</i><sub>avg</sub> = (<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub>)/2. The envelope moves with speed <i>v</i><sub><i>g</i></sub> = Δ<i>ω</i>/Δ<i>k</i> → d<i>ω</i>/d<i>k</i>.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Damped Oscillations: Logarithmic Decrement, Resonance Nuances, and Power Absorption',
    extra: true,
    kalam: 'Maximum power at ω = ω₀ (velocity resonance).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 gives the underdamped solution, the amplitude resonance formula, and <i>Q</i> factor. JEE Advanced distinguishes <b>amplitude resonance</b> (max displacement) from <b>velocity resonance</b> (max speed, max kinetic energy, max power absorption), asks for the <b>logarithmic decrement</b> <i>δ</i> = ln(<i>A</i><sub><i>n</i></sub>/<i>A</i><sub><i>n</i>+1</sub>), and uses the <b>power vs frequency</b> curve to define sharpness. This addendum derives those three pieces rigorously.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>E1 — Logarithmic Decrement.</b> For underdamped: <i>x</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> cos(<i>ω</i>′<i>t</i> + <i>φ</i>). Amplitude at successive maxima (one period <i>T</i>′ apart): <i>A</i><sub><i>n</i></sub> = <i>A</i><sub>0</sub> exp(−<i>bt</i><sub><i>n</i></sub>/(2<i>m</i>)), <i>t</i><sub><i>n</i>+1</sub> = <i>t</i><sub><i>n</i></sub> + <i>T</i>′.<br><i>δ</i> = ln(<i>A</i><sub><i>n</i></sub>/<i>A</i><sub><i>n</i>+1</sub>) = ln(<i>e</i><sup><i>bT</i>′/(2<i>m</i>)</sup>) = <i>bT</i>′/(2<i>m</i>).<br>For light damping <i>T</i>′ ≈ <i>T</i><sub>0</sub> = 2π/<i>ω</i><sub>0</sub>, so <i>δ</i> ≈ (<i>b</i>/<i>m</i>)(π/<i>ω</i><sub>0</sub>) = π/<i>Q</i>. <b>Use:</b> measure <i>δ</i> from experimental amplitudes, find <i>b</i>/<i>m</i> or <i>Q</i>.',
      },
      {
        t: 'p',
        html: '<b>E2 — Velocity Resonance vs Amplitude Resonance.</b> Displacement amplitude: <i>A</i>(<i>ω</i>) = (<i>F</i><sub>0</sub>/<i>m</i>)/√((<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>). Velocity amplitude: <i>v</i><sub>max</sub>(<i>ω</i>) = <i>ωA</i>(<i>ω</i>) = (<i>F</i><sub>0</sub><i>ω</i>/<i>m</i>)/√((<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>).<br>• <b>Amplitude resonance:</b> maximize <i>A</i>(<i>ω</i>) ⇒ <i>ω</i><sub><i>r</i></sub><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>).<br>• <b>Velocity resonance:</b> maximize <i>v</i><sub>max</sub>(<i>ω</i>) ⇒ derivative gives <i>ω</i><sub><i>v</i></sub> = <i>ω</i><sub>0</sub> exactly (for any damping).<br>• <b>Power absorption:</b> <i>P</i><sub>avg</sub> = ½<i>bv</i><sub>max</sub><sup>2</sup> = ½ · (<i>bF</i><sub>0</sub><sup>2</sup><i>ω</i><sup>2</sup>/<i>m</i><sup>2</sup>)/((<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>). Maximum power at <i>ω</i> = <i>ω</i><sub>0</sub> (velocity resonance). The power curve has FWHM (full width at half maximum) Δ<i>ω</i> = <i>b</i>/<i>m</i> = <i>ω</i><sub>0</sub>/<i>Q</i>. Quality factor <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i>.',
      },
      {
        t: 'p',
        html: '<b>E3 — Phase Lag at Resonance.</b> Phase <i>ψ</i> of displacement relative to force: tan <i>ψ</i> = (<i>bω</i>/<i>m</i>)/(<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>). At <i>ω</i> = <i>ω</i><sub>0</sub>: tan <i>ψ</i> → ∞ ⇒ <i>ψ</i> = π/2. At <i>ω</i> = <i>ω</i><sub><i>r</i></sub> (amplitude resonance): <i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sub><i>r</i></sub><sup>2</sup> = <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>), so tan <i>ψ</i><sub><i>r</i></sub> = (<i>bω</i><sub><i>r</i></sub>/<i>m</i>)/(<i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)) = 2<i>mω</i><sub><i>r</i></sub>/<i>b</i> = 2<i>Q</i>(<i>ω</i><sub><i>r</i></sub>/<i>ω</i><sub>0</sub>) ≈ 2<i>Q</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Logarithmic Decrement from Amplitude Ratio',
        q: 'The amplitude of a damped oscillator falls to 1/3 of its initial value after 10 complete oscillations. The period of oscillation is 0.5 s. Find (a) the logarithmic decrement, (b) the damping constant <i>b</i>/<i>m</i>, (c) the quality factor <i>Q</i>.',
        steps: [
          '(a) After 10 oscillations, <i>A</i><sub>10</sub>/<i>A</i><sub>0</sub> = 1/3.',
          '<i>δ</i> = (1/10) ln(<i>A</i><sub>0</sub>/<i>A</i><sub>10</sub>) = (1/10) ln 3 = 1.0986/10 = 0.10986.',
          '(b) <i>δ</i> = <i>bT</i>′/(2<i>m</i>) ≈ <i>bT</i><sub>0</sub>/(2<i>m</i>) (light damping).',
          '<i>b</i>/<i>m</i> = 2<i>δ</i>/<i>T</i><sub>0</sub> = (2 × 0.10986)/0.5 = 0.4394 s<sup>−1</sup>.',
          '(c) <i>Q</i> = π/<i>δ</i> = π/0.10986 ≈ 28.6.',
          'Or <i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i> = 2π<i>m</i>/(<i>bT</i><sub>0</sub>) = 2π/(<i>bT</i><sub>0</sub>/<i>m</i>) = 2π/(0.4394 × 0.5) = 2π/0.2197 ≈ 28.6. Consistent.',
          '<b>Check.</b> <i>δ</i> = 0.11 means amplitude drops by ~10% per cycle. 10 cycles ⇒ factor <i>e</i><sup>−1.1</sup> ≈ 0.33 ≈ 1/3. Correct.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Velocity Resonance and Power Absorption',
        q: 'A forced oscillator has <i>ω</i><sub>0</sub> = 100 rad s<sup>−1</sup>, <i>b</i>/<i>m</i> = 2 s<sup>−1</sup>, <i>F</i><sub>0</sub>/<i>m</i> = 10 m s<sup>−2</sup>. Find (a) the amplitude resonance frequency, (b) the velocity resonance frequency, (c) the maximum displacement amplitude, (d) the maximum velocity amplitude, (e) the maximum average power absorbed, (f) the FWHM of the power curve.',
        steps: [
          '(a) <i>ω</i><sub><i>r</i></sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)) = √(10000 − 4/2) = √9998 ≈ 99.99 rad/s. (Practically 100).',
          '(b) <i>ω</i><sub><i>v</i></sub> = <i>ω</i><sub>0</sub> = 100 rad/s exactly.',
          '(c) <i>A</i><sub>max</sub> = <i>A</i>(<i>ω</i><sub><i>r</i></sub>) ≈ (<i>F</i><sub>0</sub>/<i>m</i>)/(<i>bω</i><sub>0</sub>/<i>m</i>) = 10/(2 × 100) = 0.05 m = 5 cm.',
          '(Using light damping approx: <i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>).)',
          '(d) <i>v</i><sub>max</sub> = <i>ω</i><sub>0</sub><i>A</i>(<i>ω</i><sub>0</sub>) = <i>ω</i><sub>0</sub> · (<i>F</i><sub>0</sub>/<i>m</i>)/(<i>bω</i><sub>0</sub>/<i>m</i>) = <i>F</i><sub>0</sub>/<i>b</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/(<i>b</i>/<i>m</i>) = 10/2 = 5 m/s.',
          '(e) <i>P</i><sub>max</sub> = ½<i>bv</i><sub>max</sub><sup>2</sup> = ½(2<i>m</i>)(5)<sup>2</sup> = 25<i>m</i> Watts. (Depends on <i>m</i> which is not given numerically. Express in terms of given: <i>P</i><sub>max</sub> = <i>F</i><sub>0</sub><sup>2</sup>/(2<i>b</i>) = (10<i>m</i>)<sup>2</sup>/(2(2<i>m</i>)) = 100<i>m</i><sup>2</sup>/(4<i>m</i>) = 25<i>m</i> W.)',
          '(f) FWHM Δ<i>ω</i> = <i>b</i>/<i>m</i> = 2 rad/s. <i>Q</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i> = 50.',
          '<b>Check.</b> <i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i> = 100/2 = 50. <i>δ</i> = π/<i>Q</i> ≈ 0.0628. Amplitude drops by ~6% per cycle. Light damping holds.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Damped Oscillator Energy Decay — Exact vs Approximate',
        q: 'A lightly damped oscillator has <i>Q</i> = 100. (a) By what factor does the energy decay in one period? (b) How many periods for energy to fall to 1% of initial? (c) What is the fractional frequency shift Δ<i>ω</i>/<i>ω</i><sub>0</sub>?',
        steps: [
          '(a) Energy <i>E</i> ∝ <i>A</i><sup>2</sup> ∝ <i>e</i><sup>−<i>bt</i>/<i>m</i></sup>. In one period <i>T</i> ≈ 2π/<i>ω</i><sub>0</sub>:',
          '<i>E</i>(<i>t</i> + <i>T</i>)/<i>E</i>(<i>t</i>) = <i>e</i><sup>−<i>bT</i>/<i>m</i></sup> = <i>e</i><sup>−2π/<i>Q</i></sup> = <i>e</i><sup>−2π/100</sup> ≈ <i>e</i><sup>−0.06283</sup> ≈ 0.939.',
          'Energy retains 93.9%, loses 6.1% per cycle.',
          '(b) <i>e</i><sup>−2π<i>N</i>/<i>Q</i></sup> = 0.01 ⇒ 2π<i>N</i>/<i>Q</i> = ln 100 = 4.605 ⇒ <i>N</i> = 4.605<i>Q</i>/(2π) = 460.5/6.283 ≈ 73.3 periods.',
          '(c) <i>ω</i>′ = <i>ω</i><sub>0</sub>√(1 − 1/(4<i>Q</i><sup>2</sup>)) ≈ <i>ω</i><sub>0</sub>(1 − 1/(8<i>Q</i><sup>2</sup>)).',
          'Δ<i>ω</i> = <i>ω</i><sub>0</sub> − <i>ω</i>′ ≈ <i>ω</i><sub>0</sub>/(8<i>Q</i><sup>2</sup>) = <i>ω</i><sub>0</sub>/80000 = 1.25 × 10<sup>−5</sup><i>ω</i><sub>0</sub>.',
          'Fractional shift = 1.25 × 10<sup>−5</sup> (negligible).',
          '<b>Check.</b> <i>N</i> ≈ <i>Q</i>/(2π) × ln(100) = 15.9 × 4.605 = 73.2. Matches.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'The amplitude of a damped oscillator decreases to 0.6 of its value in 5 s. If the period is 0.2 s, find the logarithmic decrement and <i>Q</i>.',
            a: '<i>δ</i> = (1/25) ln(1/0.6) = 0.04 × 0.5108 = 0.0204. <i>Q</i> = π/<i>δ</i> ≈ 154.',
          },
          {
            q: 'A forced oscillator has <i>ω</i><sub>0</sub> = 50 rad s<sup>−1</sup>, <i>b</i>/<i>m</i> = 1 s<sup>−1</sup>. Find the amplitude resonance frequency and the velocity resonance frequency.',
            a: '<i>ω</i><sub><i>r</i></sub> = √(2500 − 0.5) ≈ 49.995 rad/s. <i>ω</i><sub><i>v</i></sub> = 50 rad/s.',
          },
          {
            q: 'For a driven damped oscillator, show that the average power absorbed is <i>P</i> = ½ · (<i>bF</i><sub>0</sub><sup>2</sup><i>ω</i><sup>2</sup>/<i>m</i><sup>2</sup>)/((<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>). Verify that its maximum is at <i>ω</i> = <i>ω</i><sub>0</sub>.',
            a: '(Derivation shown in Method E2.) Maximum at <i>ω</i> = <i>ω</i><sub>0</sub> because derivative of <i>P</i>(<i>ω</i>) gives <i>ω</i>(<i>ω</i><sub>0</sub><sup>2</sup> − <i>ω</i><sup>2</sup>) = 0 ⇒ <i>ω</i> = <i>ω</i><sub>0</sub> (positive root).',
          },
          {
            q: 'The amplitude of a driven oscillator is measured as a function of driving frequency. The maximum amplitude is 10 cm at <i>ω</i> = 99 rad/s. The amplitude falls to 10/√2 cm at <i>ω</i> = 97 and <i>ω</i> = 101 rad/s. Estimate <i>ω</i><sub>0</sub>, <i>b</i>/<i>m</i>, and <i>Q</i>.',
            a: 'The amplitude-resonance frequency is <i>ω</i><sub><i>r</i></sub> ≈ 99 rad/s (given). For light damping, <i>A</i>(<i>ω</i>)<sup>2</sup> is proportional to the same Lorentzian as the power curve, so the points where amplitude falls to <i>A</i><sub>max</sub>/√2 (power falls to half) are the power curve’s half-power points, at <i>ω</i> = <i>ω</i><sub>0</sub> ± <i>b</i>/(2<i>m</i>). With these at 97 and 101 rad/s, <i>b</i>/(2<i>m</i>) = 2 ⇒ <i>b</i>/<i>m</i> = 4, and since <i>ω</i><sub><i>r</i></sub> ≈ <i>ω</i><sub>0</sub> for light damping, <i>ω</i><sub>0</sub> ≈ 99 rad/s. Check: <i>ω</i><sub><i>r</i></sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)) = √(99<sup>2</sup> − 8) = √9793 ≈ 98.96 ≈ 99, consistent with the given resonance frequency. <i>Q</i> = <i>ω</i><sub>0</sub>/(<i>b</i>/<i>m</i>) = 99/4 ≈ 24.75.',
          },
          {
            q: 'A damped oscillator has mass 0.5 kg, spring constant 200 N/m, and logarithmic decrement 0.02. Find the damping constant <i>b</i> and the quality factor <i>Q</i>.',
            a: '<i>δ</i> = <i>bT</i>/(2<i>m</i>). <i>T</i> = 2π/<i>ω</i><sub>0</sub> = 2π/√(200/0.5) = 2π/√400 = 2π/20 = π/10 ≈ 0.314 s. <i>b</i> = 2<i>mδ</i>/<i>T</i> = 2(0.5)(0.02)/0.314 = 0.02/0.314 ≈ 0.0637 kg/s. <i>Q</i> = π/<i>δ</i> = π/0.02 = 157.',
          },
        ],
      },
    ],
  },

  {
    n: 'F',
    title: 'The “Prove It’s SHM” Laboratory: Potential Expansion and Non-Standard Systems',
    extra: true,
    kalam: 'Expand U(q) around q₀ to second order: U(q) ≈ U(q₀) + ½U″(q₀)(q − q₀)².',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 gives three standard systems (U-tube, floating body, Earth tunnel) and the differential-equation test <i>ẍ</i> + <i>ω</i><sup>2</sup><i>x</i> = 0. JEE Advanced invents new systems every year: a cylinder rolling on a spring, a ball in a spherical bowl, a piston in a gas cylinder, a charged particle near a fixed charge, a rod pivoted with a spring, a liquid in a U-tube with unequal arms. The universal tool is the <b>small-oscillation expansion</b>: write the exact potential energy <i>U</i>(<i>q</i>), expand to quadratic order <i>U</i> ≈ <i>U</i><sub>0</sub> + ½<i>U</i>″(<i>q</i><sub>0</sub>)(<i>q</i> − <i>q</i><sub>0</sub>)<sup>2</sup>, then <i>ω</i> = √(<i>U</i>″(<i>q</i><sub>0</sub>)/<i>m</i><sub>eff</sub>) where <i>m</i><sub>eff</sub> is the coefficient of ½<i>q̇</i><sup>2</sup> in the kinetic energy.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Universal small-oscillation recipe',
        steps: [
          '<b>Identify the degree of freedom</b> <i>q</i> (<i>x</i>, <i>θ</i>, <i>y</i>, etc.) and the equilibrium position <i>q</i><sub>0</sub>.',
          '<b>Write the exact kinetic energy <i>K</i>(<i>q</i>, <i>q̇</i>).</b> Extract the effective mass (or inertia) <i>m</i><sub>eff</sub> from <i>K</i> = ½<i>m</i><sub>eff</sub><i>q̇</i><sup>2</sup>.',
          '<b>Write the exact potential energy <i>U</i>(<i>q</i>).</b> Include gravity, springs, electrostatic, gas pressure, etc.',
          '<b>Expand <i>U</i>(<i>q</i>) around <i>q</i><sub>0</sub> to second order:</b> <i>U</i>(<i>q</i>) ≈ <i>U</i>(<i>q</i><sub>0</sub>) + ½<i>U</i>″(<i>q</i><sub>0</sub>)(<i>q</i> − <i>q</i><sub>0</sub>)<sup>2</sup>. (First derivative vanishes at equilibrium.)',
          '<b>Read off</b> <i>ω</i><sup>2</sup> = <i>U</i>″(<i>q</i><sub>0</sub>)/<i>m</i><sub>eff</sub>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Kinetic energy templates.</b><br>• Translation only: <i>K</i> = ½<i>mẋ</i><sup>2</sup> ⇒ <i>m</i><sub>eff</sub> = <i>m</i>.<br>• Rotation about fixed axis: <i>K</i> = ½<i>Iθ̇</i><sup>2</sup> ⇒ <i>m</i><sub>eff</sub> = <i>I</i> (with <i>q</i> = <i>θ</i>).<br>• Rolling without slipping: <i>K</i> = ½<i>mẋ</i><sup>2</sup> + ½<i>I</i>(<i>ẋ</i>/<i>R</i>)<sup>2</sup> = ½(<i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>)<i>ẋ</i><sup>2</sup> ⇒ <i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>.<br>• For a rolling body with <i>I</i> = <i>cmR</i><sup>2</sup>: <i>m</i><sub>eff</sub> = <i>m</i>(1 + <i>c</i>).<br>   – Ring: <i>c</i> = 1 ⇒ 2<i>m</i><br>   – Disc/cylinder: <i>c</i> = 1/2 ⇒ 1.5<i>m</i><br>   – Solid sphere: <i>c</i> = 2/5 ⇒ 1.4<i>m</i><br>   – Hollow sphere: <i>c</i> = 2/3 ⇒ 1.67<i>m</i>',
      },
      {
        t: 'p',
        html: '<b>Potential energy templates.</b><br>• Spring: <i>U</i> = ½<i>kx</i><sup>2</sup> ⇒ <i>U</i>″ = <i>k</i>.<br>• Gravity (height <i>y</i>): <i>U</i> = <i>mgy</i>(<i>q</i>) ⇒ <i>U</i>″ = <i>mgy</i>″(<i>q</i><sub>0</sub>).<br>• Gas (isothermal): <i>U</i> = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub> ln(<i>V</i>/<i>V</i><sub>0</sub>) ⇒ <i>U</i>″ = <i>P</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>.<br>• Gas (adiabatic): <i>U</i> = <i>PV</i>/(<i>γ</i> − 1) ⇒ <i>U</i>″ = <i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>.<br>• Electrostatic: <i>U</i> = <i>qV</i>(<i>x</i>) ⇒ <i>U</i>″ = <i>qV</i>″(<i>x</i><sub>0</sub>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Cylinder Rolling on a Horizontal Spring',
        q: 'A solid cylinder of mass <i>M</i> and radius <i>R</i> rolls without slipping on a horizontal surface, attached to a spring of constant <i>k</i> fixed to a wall. The spring is attached to the cylinder’s axle. Find the period.',
        steps: [
          '(Same as the first worked example of Additional topic A but using the recipe.)',
          '<i>q</i> = <i>x</i> (displacement of the centre).',
          '<i>K</i> = ½<i>Mẋ</i><sup>2</sup> + ½<i>I</i>(<i>ẋ</i>/<i>R</i>)<sup>2</sup> = ½<i>Mẋ</i><sup>2</sup> + ½(½<i>MR</i><sup>2</sup>)(<i>ẋ</i><sup>2</sup>/<i>R</i><sup>2</sup>) = ½((3/2)<i>M</i>)<i>ẋ</i><sup>2</sup>.',
          '<i>m</i><sub>eff</sub> = (3/2)<i>M</i>.',
          '<i>U</i> = ½<i>kx</i><sup>2</sup> ⇒ <i>U</i>″ = <i>k</i>.',
          '<i>ω</i><sup>2</sup> = <i>k</i>/((3/2)<i>M</i>) = 2<i>k</i>/(3<i>M</i>).',
          '<i>T</i> = 2π√(3<i>M</i>/(2<i>k</i>)).',
        ],
        // The book prints no answer line here; the result is the last step.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Ball in a Spherical Bowl',
        q: 'A solid sphere of mass <i>m</i> and radius <i>r</i> rolls without slipping in a fixed spherical bowl of radius <i>R</i>. Find the period of small oscillations.',
        steps: [
          '<i>q</i> = <i>θ</i> (angle of the line joining the centres, from the vertical). The centre of the sphere moves on a circle of radius <i>R</i> − <i>r</i>.',
          '<i>K</i> = ½<i>mv</i><sub>cm</sub><sup>2</sup> + ½<i>Iω</i><sup>2</sup>. <i>v</i><sub>cm</sub> = (<i>R</i> − <i>r</i>)<i>θ̇</i>. No slip: <i>ω</i> = <i>v</i><sub>cm</sub>/<i>r</i> = (<i>R</i> − <i>r</i>)<i>θ̇</i>/<i>r</i>.',
          '<i>I</i> = (2/5)<i>mr</i><sup>2</sup>.',
          '<i>K</i> = ½<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup><i>θ̇</i><sup>2</sup> + ½((2/5)<i>mr</i><sup>2</sup>)((<i>R</i> − <i>r</i>)<sup>2</sup><i>θ̇</i><sup>2</sup>/<i>r</i><sup>2</sup>) = ½<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup><i>θ̇</i><sup>2</sup>(1 + 2/5) = ½((7/5)<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup>)<i>θ̇</i><sup>2</sup>.',
          '<i>m</i><sub>eff</sub> = (7/5)<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup> (with <i>q</i> = <i>θ</i>).',
          '<i>U</i> = <i>mgh</i> = <i>mg</i>(<i>R</i> − <i>r</i>)(1 − cos <i>θ</i>) ≈ ½<i>mg</i>(<i>R</i> − <i>r</i>)<i>θ</i><sup>2</sup>.',
          '<i>U</i>″ = <i>mg</i>(<i>R</i> − <i>r</i>).',
          '<i>ω</i><sup>2</sup> = <i>mg</i>(<i>R</i> − <i>r</i>)/((7/5)<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup>) = 5<i>g</i>/(7(<i>R</i> − <i>r</i>)).',
          '<i>T</i> = 2π√(7(<i>R</i> − <i>r</i>)/(5<i>g</i>)).',
          '<b>Check.</b> If the sphere slid without friction (no rotation), <i>I</i> = 0, <i>m</i><sub>eff</sub> = <i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup>, <i>ω</i><sup>2</sup> = <i>g</i>/(<i>R</i> − <i>r</i>) and <i>T</i> = 2π√((<i>R</i> − <i>r</i>)/<i>g</i>) (a simple pendulum of length <i>R</i> − <i>r</i>). Rolling adds inertia, so the period increases by a factor √(7/5) ≈ 1.18. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Piston in a Vertical Cylinder with Gas',
        q: 'A vertical cylinder of cross-section <i>A</i> contains an ideal gas at temperature <i>T</i><sub>0</sub>. A piston of mass <i>M</i> fits tightly and slides without friction. The piston is in equilibrium at height <i>h</i><sub>0</sub> (volume <i>V</i><sub>0</sub> = <i>Ah</i><sub>0</sub>). The gas undergoes isothermal changes. Find the period of small vertical oscillations of the piston.',
        steps: [
          '<i>q</i> = <i>y</i> (displacement of the piston from equilibrium, <b>downward</b>).',
          'Equilibrium: <i>P</i><sub>0</sub><i>A</i> = <i>Mg</i> (vacuum above the piston; with the atmosphere above, <i>P</i><sub>0</sub><i>A</i> = <i>Mg</i> + <i>P</i><sub>atm</sub><i>A</i>, <i>P</i><sub>0</sub> being the absolute gas pressure, and the last step below becomes <i>T</i> = 2π√(<i>Mh</i><sub>0</sub>/(<i>Mg</i> + <i>P</i><sub>atm</sub><i>A</i>)), shorter than 2π√(<i>h</i><sub>0</sub>/<i>g</i>)).',
          'Gas law (isothermal): <i>PV</i> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub> = const.',
          '<i>V</i> = <i>A</i>(<i>h</i><sub>0</sub> − <i>y</i>) = <i>V</i><sub>0</sub> − <i>Ay</i>.',
          '<i>P</i> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>/(<i>V</i><sub>0</sub> − <i>Ay</i>).',
          'Net force on the piston along +<i>y</i> (downward): <i>F</i> = <i>Mg</i> − <i>PA</i> = <i>P</i><sub>0</sub><i>A</i> − <i>P</i><sub>0</sub><i>V</i><sub>0</sub><i>A</i>/(<i>V</i><sub>0</sub> − <i>Ay</i>).',
          '<i>U</i>(<i>y</i>) = −∫<i>F</i> d<i>y</i> = −<i>P</i><sub>0</sub><i>Ay</i> − <i>P</i><sub>0</sub><i>V</i><sub>0</sub> ln(<i>V</i><sub>0</sub> − <i>Ay</i>) + const.',
          'Expand around <i>y</i> = 0:',
          '<i>V</i><sub>0</sub> − <i>Ay</i> = <i>V</i><sub>0</sub>(1 − <i>Ay</i>/<i>V</i><sub>0</sub>).',
          'ln(<i>V</i><sub>0</sub> − <i>Ay</i>) = ln <i>V</i><sub>0</sub> + ln(1 − <i>Ay</i>/<i>V</i><sub>0</sub>) ≈ ln <i>V</i><sub>0</sub> − <i>Ay</i>/<i>V</i><sub>0</sub> − ½(<i>Ay</i>/<i>V</i><sub>0</sub>)<sup>2</sup>.',
          '<i>U</i> ≈ −<i>P</i><sub>0</sub><i>Ay</i> − <i>P</i><sub>0</sub><i>V</i><sub>0</sub>(ln <i>V</i><sub>0</sub> − <i>Ay</i>/<i>V</i><sub>0</sub> − ½<i>A</i><sup>2</sup><i>y</i><sup>2</sup>/<i>V</i><sub>0</sub><sup>2</sup>) = const + ½<i>P</i><sub>0</sub><i>A</i><sup>2</sup><i>y</i><sup>2</sup>/<i>V</i><sub>0</sub>.',
          '<i>U</i>″ = <i>P</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>.',
          '<i>K</i> = ½<i>Mẏ</i><sup>2</sup> ⇒ <i>m</i><sub>eff</sub> = <i>M</i>.',
          '<i>ω</i><sup>2</sup> = <i>P</i><sub>0</sub><i>A</i><sup>2</sup>/(<i>MV</i><sub>0</sub>).',
          '<i>T</i> = 2π√(<i>MV</i><sub>0</sub>/(<i>P</i><sub>0</sub><i>A</i><sup>2</sup>)) = 2π√(<i>Mh</i><sub>0</sub>/(<i>P</i><sub>0</sub><i>A</i>)) = 2π√(<i>h</i><sub>0</sub>/<i>g</i>) (using <i>P</i><sub>0</sub><i>A</i> = <i>Mg</i>).',
        ],
        // The book's "Result:" line.
        ans: 'with vacuum above the piston, the period equals that of a simple pendulum of length <i>h</i><sub>0</sub>, independent of the properties of the gas (isothermal case). For an adiabatic gas, <i>T</i> is shorter by the factor 1/√<i>γ</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Rod Pivoted with a Spring',
        q: 'A uniform rod of mass <i>M</i> and length <i>L</i> hangs vertically from a pivot at its upper end. A spring of constant <i>k</i> is attached to the other end, horizontal when the rod is vertical. Find the period of small oscillations.',
        steps: [
          '<i>q</i> = <i>θ</i> (small angle from the vertical).',
          '<i>K</i> = ½<i>Iθ̇</i><sup>2</sup> = ½((1/3)<i>ML</i><sup>2</sup>)<i>θ̇</i><sup>2</sup>. <i>m</i><sub>eff</sub> = (1/3)<i>ML</i><sup>2</sup>.',
          'Potential energy: gravity + spring.',
          '<i>U</i> = <i>Mg</i>(<i>L</i>/2)(1 − cos <i>θ</i>) + ½<i>k</i>(<i>L</i> sin <i>θ</i>)<sup>2</sup> ≈ ½<i>Mg</i>(<i>L</i>/2)<i>θ</i><sup>2</sup> + ½<i>kL</i><sup>2</sup><i>θ</i><sup>2</sup>.',
          '<i>U</i>″ = ½<i>MgL</i> + <i>kL</i><sup>2</sup>.',
          '<i>ω</i><sup>2</sup> = (½<i>MgL</i> + <i>kL</i><sup>2</sup>)/((1/3)<i>ML</i><sup>2</sup>) = 3<i>g</i>/(2<i>L</i>) + 3<i>k</i>/<i>M</i>.',
          '<i>T</i> = 2π/√(3<i>g</i>/(2<i>L</i>) + 3<i>k</i>/<i>M</i>).',
          '<b>Check.</b> If <i>k</i> = 0: physical pendulum, <i>T</i> = 2π√(2<i>L</i>/(3<i>g</i>)). Correct (worked example 4 of Topic 03). If <i>g</i> = 0: <i>T</i> = 2π√(<i>M</i>/(3<i>k</i>)) (the same limit as practice question 1 of Additional topic A). Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A uniform disc of mass <i>M</i> and radius <i>R</i> rolls without slipping on a horizontal surface, attached to a spring of constant <i>k</i> at its centre. Find the period.',
            a: 'Disc: <i>I</i> = ½<i>MR</i><sup>2</sup>. <i>m</i><sub>eff</sub> = <i>M</i> + <i>I</i>/<i>R</i><sup>2</sup> = 1.5<i>M</i>. <i>T</i> = 2π√(1.5<i>M</i>/<i>k</i>).',
          },
          {
            q: 'A hollow sphere of mass <i>m</i> and radius <i>r</i> rolls without slipping in a spherical bowl of radius <i>R</i>. Find the period of small oscillations.',
            a: 'Hollow sphere: <i>I</i> = (2/3)<i>mr</i><sup>2</sup>, so <i>c</i> = 2/3. <i>K</i> = ½<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup><i>θ̇</i><sup>2</sup>(1 + <i>c</i>) = ½ · (5/3)<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup><i>θ̇</i><sup>2</sup> and <i>U</i> = ½<i>mg</i>(<i>R</i> − <i>r</i>)<i>θ</i><sup>2</sup>. <i>ω</i><sup>2</sup> = <i>mg</i>(<i>R</i> − <i>r</i>)/((5/3)<i>m</i>(<i>R</i> − <i>r</i>)<sup>2</sup>) = 3<i>g</i>/(5(<i>R</i> − <i>r</i>)), so <i>T</i> = 2π√(5(<i>R</i> − <i>r</i>)/(3<i>g</i>)).',
          },
          {
            q: 'A vertical spring of constant <i>k</i> has a mass <i>M</i> at its bottom. The spring has mass <i>m</i><sub>s</sub>. Find the period using the energy method (include the spring’s kinetic energy properly).',
            a: 'Spring mass <i>m</i><sub>s</sub>, uniform. <i>K</i><sub>spring</sub> = ∫<sub>0</sub><sup><i>L</i></sup> ½(<i>m</i><sub>s</sub>/<i>L</i>)(<i>xẏ</i>/<i>L</i>)<sup>2</sup> d<i>x</i> = ½(<i>m</i><sub>s</sub>/3)<i>ẏ</i><sup>2</sup>. Total <i>K</i> = ½(<i>M</i> + <i>m</i><sub>s</sub>/3)<i>ẏ</i><sup>2</sup>. <i>U</i> = ½<i>ky</i><sup>2</sup>. <i>T</i> = 2π√((<i>M</i> + <i>m</i><sub>s</sub>/3)/<i>k</i>).',
          },
          {
            q: 'A particle of mass <i>m</i> moves in a potential <i>U</i>(<i>x</i>) = <i>A</i>/<i>x</i><sup>2</sup> + <i>Bx</i><sup>2</sup> (<i>A</i>, <i>B</i> > 0). Find the equilibrium position and the angular frequency of small oscillations about it.',
            a: '<i>U</i>′(<i>x</i>) = −2<i>A</i>/<i>x</i><sup>3</sup> + 2<i>Bx</i> = 0 ⇒ <i>x</i><sub>0</sub><sup>4</sup> = <i>A</i>/<i>B</i> ⇒ <i>x</i><sub>0</sub> = (<i>A</i>/<i>B</i>)<sup>1/4</sup>. <i>U</i>″(<i>x</i>) = 6<i>A</i>/<i>x</i><sup>4</sup> + 2<i>B</i>. <i>U</i>″(<i>x</i><sub>0</sub>) = 6<i>B</i> + 2<i>B</i> = 8<i>B</i>. <i>ω</i> = √(8<i>B</i>/<i>m</i>).',
          },
          {
            q: 'A U-tube has vertical arms of cross-sections <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub>. The connecting tube at the bottom is horizontal and has negligible volume. The liquid, of density <i>ρ</i>, occupies lengths <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> in the two arms. Find the period of oscillation of the liquid levels.',
            a: 'Let <i>y</i><sub>1</sub> be the displacement in arm 1. Volume conservation: <i>A</i><sub>1</sub><i>y</i><sub>1</sub> = <i>A</i><sub>2</sub><i>y</i><sub>2</sub>, so the level difference is <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> = <i>y</i><sub>1</sub>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/<i>A</i><sub>2</sub> and the restoring force on the arm-1 column is <i>F</i> = −<i>ρgA</i><sub>1</sub>((<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/<i>A</i><sub>2</sub>)<i>y</i><sub>1</sub>, giving <i>U</i> = ½<i>ρgA</i><sub>1</sub>((<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/<i>A</i><sub>2</sub>)<i>y</i><sub>1</sub><sup>2</sup>. Because the arms have different areas, the kinetic energy is summed arm by arm: arm 1 moves at <i>ẏ</i><sub>1</sub>, arm 2 at <i>ẏ</i><sub>2</sub> = (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<i>ẏ</i><sub>1</sub>, and the negligible-volume horizontal connector is ignored, so <i>K</i> = ½<i>ρA</i><sub>1</sub><i>L</i><sub>1</sub><i>ẏ</i><sub>1</sub><sup>2</sup> + ½<i>ρA</i><sub>2</sub><i>L</i><sub>2</sub>(<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<sup>2</sup><i>ẏ</i><sub>1</sub><sup>2</sup> = ½<i>ρA</i><sub>1</sub>(<i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>/<i>A</i><sub>2</sub>)<i>ẏ</i><sub>1</sub><sup>2</sup>. Hence <i>ω</i><sup>2</sup> = (<i>ρgA</i><sub>1</sub>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/<i>A</i><sub>2</sub>)/(<i>ρA</i><sub>1</sub>(<i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>/<i>A</i><sub>2</sub>)) = <i>g</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/(<i>A</i><sub>2</sub><i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>), so <i>T</i> = 2π√((<i>A</i><sub>2</sub><i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>)/(<i>g</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>))). If <i>L</i><sub>1</sub> = <i>L</i><sub>2</sub> = <i>L</i>/2: <i>ω</i><sup>2</sup> = 2<i>g</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/(<i>L</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)) = 2<i>g</i>/<i>L</i> — independent of the areas (the classic result).',
          },
          {
            q: 'A charged particle of mass <i>m</i> and charge <i>q</i> is constrained to move along the <i>x</i>-axis. A fixed charge <i>Q</i> is at (0, <i>d</i>). Find the angular frequency of small oscillations about the equilibrium point on the <i>x</i>-axis. (Assume <i>qQ</i> < 0.)',
            a: 'The potential energy on the axis is <i>U</i> = <i>qQ</i>/(4π<i>ε</i><sub>0</sub>√(<i>x</i><sup>2</sup> + <i>d</i><sup>2</sup>)), with the equilibrium at <i>x</i> = 0. Curvature: <i>U</i>″(0) = −<i>qQ</i>/(4π<i>ε</i><sub>0</sub><i>d</i><sup>3</sup>), so stability needs <i>qQ</i> < 0 (attraction) — for <i>qQ</i> > 0 the point <i>x</i> = 0 is a potential maximum and no oscillation exists. With <i>qQ</i> < 0, <i>U</i>″(0) = |<i>qQ</i>|/(4π<i>ε</i><sub>0</sub><i>d</i><sup>3</sup>) and <i>ω</i> = √(|<i>qQ</i>|/(4π<i>ε</i><sub>0</sub><i>md</i><sup>3</sup>)).',
          },
        ],
      },
    ],
  },
];
