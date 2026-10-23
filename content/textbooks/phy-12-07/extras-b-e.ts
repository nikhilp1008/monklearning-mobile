import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional Topics B to E, word for word from the Class 12
 * Physics Master Reference: B Parallel Resonance (Anti-Resonance) (pp. 503 to
 * 506), C Power Factor Correction (pp. 507 to 509; its practice answers end
 * at the top of p. 509), D Damped LC Oscillations (pp. 509 to 513; its last
 * practice answer ends at the top of p. 513) and E Series-Parallel AC Circuit
 * Analysis (pp. 513 to 516, up to the end of its practice answers). Each
 * addendum prints its own practice problems and answers, which are its
 * Practice part. These pages print no drawings: the comparison table and the
 * three-regimes table are typeset, not drawn. The "Summary of Key Results"
 * on p. 516 (after Addendum E's answers) only repeats the addenda's formulas
 * and is not copied. Exponents that carry a subscript (t₁/₂, τ_E, T_d, the
 * overdamped roots) are written with exp(…), because the app cannot set a
 * subscript inside a superscript.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 503–506 ─────────────────────────
  {
    n: 'B',
    title: 'Parallel Resonance (Anti-Resonance)',
    extra: true,
    kalam: 'At parallel resonance, the capacitive susceptance and inductive susceptance cancel exactly.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Series resonance (see the chapter) minimises impedance and maximises current. <b>Parallel resonance</b> — also called <b>anti-resonance</b> — does the opposite: it <b>maximises impedance</b> and <b>minimises the line current</b>. This is the behaviour of a tuned-tank circuit used in radio receivers and oscillator filters. The condition for parallel resonance is that the <b>net susceptance of all parallel branches is zero</b>: the inductive and capacitive susceptances cancel, leaving only the total conductance. This makes the line current <b>in phase with the voltage</b> (unity power factor) and equal to <i>V</i>/<i>R</i><sub>eq</sub> where <i>R</i><sub>eq</sub> is the effective resistance of the parallel combination.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Parallel resonance condition (two-branch case).</b> For a branch with <i>Z</i><sub>1</sub> = <i>R</i><sub>1</sub> + <i>jX</i><sub>1</sub> in parallel with <i>Z</i><sub>2</sub> = <i>R</i><sub>2</sub> + <i>jX</i><sub>2</sub>:<br><i>Y</i><sub>1</sub> = <i>G</i><sub>1</sub> + <i>jB</i><sub>1</sub>,   <i>Y</i><sub>2</sub> = <i>G</i><sub>2</sub> + <i>jB</i><sub>2</sub><br>Parallel resonance requires <i>B</i><sub>1</sub> + <i>B</i><sub>2</sub> = 0, i.e. <i>B</i><sub>1</sub> = −<i>B</i><sub>2</sub>. Solving this for <i>ω</i> gives the resonant frequency, which is slightly different from 1/√(<i>LC</i>) when the branch resistances are non-zero.',
      },
      {
        t: 'p',
        html: '<b>The standard tank circuit.</b> Take a coil (inductance <i>L</i>, series resistance <i>R</i>) in parallel with a capacitor <i>C</i>. The coil has <i>Y</i><sub>coil</sub> = (<i>R</i> − <i>jωL</i>)/(<i>R</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>L</i><sup>2</sup>) and the capacitor has <i>Y</i><sub>C</sub> = <i>jωC</i>, so <i>B</i> = 0 requires<br><i>ωC</i> = <i>ωL</i>/(<i>R</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>L</i><sup>2</sup>)   ⟹   <i>ω</i><sub>p</sub><sup>2</sup> = 1/(<i>LC</i>) − <i>R</i><sup>2</sup>/<i>L</i><sup>2</sup><br>and at this frequency <i>R</i><sup>2</sup> + <i>ω</i><sub>p</sub><sup>2</sup><i>L</i><sup>2</sup> = <i>L</i>/<i>C</i>, so the circuit’s conductance is <i>G</i><sub>eq</sub> = <i>R</i>/(<i>R</i><sup>2</sup> + <i>ω</i><sub>p</sub><sup>2</sup><i>L</i><sup>2</sup>) = <i>RC</i>/<i>L</i>, i.e. an equivalent resistance <i>R</i><sub>eq</sub> = 1/<i>G</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>).',
      },
      {
        t: 'p',
        html: '<b>Q-factor at parallel resonance.</b> The Q-factor of a parallel resonant circuit is the ratio of the <b>circulating (branch) current</b> to the <b>line current</b>. For a two-branch circuit at resonance:<br><i>Q</i><sub>parallel</sub> = <i>I</i><sub>branch</sub>/<i>I</i><sub>line</sub> = <i>ω</i><sub>p</sub><i>CV</i>/(<i>G</i><sub>eq</sub><i>V</i>) = <i>ω</i><sub>p</sub><i>L</i>/<i>R</i> ≈ <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = <i>Q</i><sub>series</sub><br>where the approximation holds when <i>R</i> ≪ <i>ω</i><sub>0</sub><i>L</i>. So for the same <i>L</i> and <i>R</i>, a parallel tank and a series circuit have essentially the same <i>Q</i>, and the same bandwidth Δ<i>ω</i> = <i>ω</i><sub>p</sub>/<i>Q</i> = <i>R</i>/<i>L</i>.',
      },
      {
        t: 'table',
        title: 'Key difference from series resonance',
        head: ['Quantity', 'Series Resonance', 'Parallel Resonance'],
        rows: [
          ['Impedance', 'Minimum = <i>R</i>', 'Maximum ≈ <i>R</i><sub>eq</sub>'],
          ['Current', 'Maximum', 'Minimum'],
          ['Power factor', '1', '1'],
          ['Q-factor definition', '<i>V</i><sub>L</sub>/<i>V</i><sub>source</sub>', '<i>I</i><sub>branch</sub>/<i>I</i><sub>line</sub>'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Tank circuit at and below resonance',
        q: 'A coil of inductance <i>L</i> = 0.10 H and series resistance <i>R</i> = 5 Ω is in parallel with a capacitor <i>C</i> = 100 μF. Find (a) the parallel resonant frequency, (b) the equivalent impedance at resonance, and (c) the line current at resonance if <i>V</i> = 50 V (rms). Also find (d) the line current at <i>ω</i> = 200 rad s<sup>−1</sup>.',
        steps: [
          '<b>Step 1 — (a) Parallel resonant frequency.</b><br><i>ω</i><sub>p</sub> = √(1/(<i>LC</i>) − <i>R</i><sup>2</sup>/<i>L</i><sup>2</sup>) = √(1/(0.10 × 10<sup>−4</sup>) − (5/0.10)<sup>2</sup>) = √(10<sup>5</sup> − 2500) = √97500 = 312 rad s<sup>−1</sup>',
          '<b>Step 2 — (b) Equivalent impedance at resonance.</b><br><i>Z</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>) = 0.10/(5 × 10<sup>−4</sup>) = 0.10/0.0005 = 200 Ω<br>(Purely resistive.)',
          '<b>Step 3 — (c) Line current at resonance.</b><br><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/<i>Z</i><sub>eq</sub> = 50/200 = 0.25 A<br>The current is in phase with <i>V</i> (PF = 1).',
          '<b>Step 4 — (d) Line current at <i>ω</i> = 200 rad s<sup>−1</sup>.</b> Susceptance of capacitor: <i>B</i><sub>C</sub> = <i>ωC</i> = 200 × 10<sup>−4</sup> = 0.0200 S. Susceptance of coil: <i>B</i><sub>L</sub> = −<i>ωL</i>/(<i>R</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>L</i><sup>2</sup>) = −20/(25 + 400) = −20/425 = −0.0471 S. Net susceptance: <i>B</i> = 0.0200 − 0.0471 = −0.0271 S (net inductive). Conductance of coil: <i>G</i> = <i>R</i>/(<i>R</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>L</i><sup>2</sup>) = 5/425 = 0.01176 S. Total admittance: <i>Y</i><sub>eq</sub> = 0.01176 − <i>j</i>0.0271 S. |<i>Y</i><sub>eq</sub>| = √(0.01176<sup>2</sup> + 0.0271<sup>2</sup>) = 0.0295 S.<br><i>I</i><sub>rms</sub> = <i>V</i> × |<i>Y</i><sub>eq</sub>| = 50 × 0.0295 = 1.48 A<br>Phase of current: tan<sup>−1</sup>(−0.0271/0.01176) = −66.5° (current <b>lags</b> voltage by 66.5°).',
          '<b>Check.</b> At resonance (<i>ω</i><sub>p</sub> = 312 rad s<sup>−1</sup>), <i>B</i><sub>C</sub> = <i>ω</i><sub>p</sub><i>C</i> = 0.0312 S. For the coil, <i>X</i><sub>L</sub> = <i>ω</i><sub>p</sub><i>L</i> = 31.2 Ω and |<i>Z</i><sub>coil</sub>|<sup>2</sup> = <i>R</i><sup>2</sup> + <i>X</i><sub>L</sub><sup>2</sup> = 25 + 975 = 1000 Ω<sup>2</sup> (which equals <i>L</i>/<i>C</i>, as it must). Then <i>B</i><sub>L</sub> = −<i>X</i><sub>L</sub>/|<i>Z</i><sub>coil</sub>|<sup>2</sup> = −0.0312 S, so <i>B</i><sub>eq</sub> = 0, and <i>G</i><sub>eq</sub> = <i>R</i>/|<i>Z</i><sub>coil</sub>|<sup>2</sup> = 5/1000 = 0.00500 S. <i>I</i> = 50 × 0.00500 = 0.25 A. The line current at resonance (0.25 A) is much smaller than below resonance (1.48 A) — confirming that parallel resonance <b>minimises</b> the line current.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Parallel resonance Q-factor',
        q: 'For the tank circuit of worked example 1, find (a) the Q-factor at parallel resonance and (b) the circulating (branch) current through the capacitor.',
        steps: [
          '<b>Step 1 — (a) Q-factor.</b> For parallel resonance, <i>Q</i> is the ratio of the circulating (branch) current to the line current. From the derivation above,<br><i>Q</i><sub>parallel</sub> = <i>I</i><sub>branch</sub>/<i>I</i><sub>line</sub> = <i>ω</i><sub>p</sub><i>L</i>/<i>R</i> = (312)(0.10)/5 = 6.24',
          '<b>Step 2 — (b) Capacitor branch current.</b> At resonance, <i>B</i><sub>C</sub> = <i>ω</i><sub>p</sub><i>C</i> = 312 × 10<sup>−4</sup> = 0.0312 S. The capacitor current magnitude is<br><i>I</i><sub>C</sub> = <i>VB</i><sub>C</sub> = 50 × 0.0312 = 1.56 A   (leading the voltage by 90°)',
          'The coil branch current has magnitude <i>I</i><sub>coil</sub> = <i>V</i>/|<i>Z</i><sub>coil</sub>| = 50/√1000 = 1.58 A (lagging by tan<sup>−1</sup>(31.2/5) = 81°).',
          'Since the capacitor current (1.56 A) and the reactive part of the coil current very nearly cancel while their magnitudes are each far larger than the 0.25 A line current, most of this current is exchanged directly between the coil and capacitor rather than drawn from the source — the <b>circulating current</b> in the tank, of order 1.5–1.6 A.',
          '<b>Check — two routes agree.</b> Directly from the currents, <i>Q</i> = <i>I</i><sub>C</sub>/<i>I</i><sub>line</sub> = 1.56/0.25 = 6.24. From the definition <i>Q</i> = <i>ω</i><sub>p</sub><i>CR</i><sub>eq</sub> with <i>R</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>) = 200 Ω: <i>Q</i> = (312)(10<sup>−4</sup>)(200) = 6.24.',
          '<b>Comparison with the high-Q approximation.</b> Replacing <i>ω</i><sub>p</sub> by <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 316 rad s<sup>−1</sup> gives the standard textbook shortcut <i>Q</i> ≈ (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = (1/5)√1000 = 6.32. Here <i>R</i>/(<i>ω</i><sub>0</sub><i>L</i>) ≈ 0.16 is not negligible, so the shortcut is about 1.3% above the exact value 6.24. Use the exact value when <i>R</i> is not small compared with <i>ωL</i>; the shortcut is fine for high-<i>Q</i> (<i>R</i> ≪ <i>ωL</i>) circuits.',
        ],
        ans: '<i>Q</i><sub>parallel</sub> = 6.24 (dimensionless)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the condition for parallel resonance in an LCR circuit? State one difference from series resonance.',
            a: 'Net susceptance <i>B</i> = 0 (or <i>ωC</i> = <i>ωL</i>/(<i>R</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>L</i><sup>2</sup>) for a coil-capacitor pair). Difference: in series resonance, current is maximum and impedance minimum; in parallel resonance, line current is minimum and impedance maximum.',
          },
          {
            q: '[JEE Main] A coil with <i>L</i> = 0.20 H and <i>R</i> = 8 Ω is in parallel with a <i>C</i> = 50 μF capacitor. Find the resonant frequency and the equivalent impedance at resonance.',
            a: '<i>ω</i><sub>p</sub> = √(1/(<i>LC</i>) − (<i>R</i>/<i>L</i>)<sup>2</sup>) = √(1/(0.20 × 50 × 10<sup>−6</sup>) − (8/0.20)<sup>2</sup>) = √(10<sup>5</sup> − 1600) = 314 rad s<sup>−1</sup>. <i>Z</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>) = 0.20/(8 × 50 × 10<sup>−6</sup>) = 0.20/0.0004 = 500 Ω.',
          },
          {
            q: '[JEE Main] In a parallel resonant circuit, the line current is minimum. Explain why.',
            a: 'At parallel resonance, the capacitive susceptance and inductive susceptance cancel exactly. The line current has only the conductive (real power) component, equal to <i>V</i>/<i>R</i><sub>eq</sub>. Since <i>R</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>) is large, the current is small. Physically, the reactive currents circulate between the capacitor and inductor, cancelling in the line.',
          },
          {
            q: '[JEE Advanced] A tank circuit has <i>L</i> = 50 mH and <i>C</i> = 20 μF in parallel, with the coil having <i>R</i> = 10 Ω. Find (a) the resonant frequency, (b) the Q-factor, and (c) the bandwidth.',
            a: '1/(<i>LC</i>) = 1/(0.05 × 20 × 10<sup>−6</sup>) = 10<sup>6</sup> s<sup>−2</sup>. (<i>R</i>/<i>L</i>)<sup>2</sup> = (10/0.05)<sup>2</sup> = 40000 s<sup>−2</sup>. <i>ω</i><sub>p</sub> = √(10<sup>6</sup> − 40000) = 979.8 rad s<sup>−1</sup>. Here <i>R</i>/(<i>ω</i><sub>0</sub><i>L</i>) = 10/(1000 × 0.05) = 0.2 is not small, so use the exact <i>Q</i> = <i>ω</i><sub>p</sub><i>L</i>/<i>R</i> = 979.8 × 0.05/10 = 4.90 (the high-<i>Q</i> shortcut √(<i>L</i>/<i>C</i>)/<i>R</i> = 5.0 is about 2% too high). Bandwidth Δ<i>ω</i> = <i>ω</i><sub>p</sub>/<i>Q</i> = <i>R</i>/<i>L</i> = 200 rad s<sup>−1</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 507–509 ─────────────────────────
  {
    n: 'C',
    title: 'Power Factor Correction',
    extra: true,
    kalam:
      'Power factor correction adds a shunt capacitor bank to supply the reactive current locally, reducing the line current and bringing the power factor closer to unity.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines power factor as cos <i>φ</i> = <i>R</i>/<i>Z</i> and shows that real power is <i>P</i> = <i>VI</i> cos <i>φ</i>. For large industrial loads — induction motors, transformers, fluorescent lighting — the load is predominantly inductive, so cos <i>φ</i> < 1 and the supply must carry <b>wattless current</b> that does no work but still heats the cables and limits the current capacity. <b>Power factor correction</b> adds a shunt capacitor bank to supply the reactive current locally, reducing the line current and bringing the power factor closer to unity. The supply then delivers more real power for the same current, or the same real power with less current.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Power triangle.</b> For a load drawing apparent power <i>S</i> = <i>VI</i> with real power <i>P</i> and reactive power <i>Q</i>:<br><i>S</i><sup>2</sup> = <i>P</i><sup>2</sup> + <i>Q</i><sup>2</sup>,   cos <i>φ</i> = <i>P</i>/<i>S</i>,   <i>Q</i> = <i>P</i> tan <i>φ</i>',
      },
      {
        t: 'p',
        html: '<b>Capacitor bank sizing.</b> A shunt capacitor draws current <i>I</i><sub>C</sub> = <i>V</i>/<i>X</i><sub>C</sub> = <i>VωC</i> that <b>leads</b> the voltage by 90°. The capacitor’s reactive power is:<br><i>Q</i><sub>C</sub> = −<i>VI</i><sub>C</sub> = −<i>V</i><sup>2</sup><i>ωC</i>   (negative means it supplies reactive power)<br>To correct from cos <i>φ</i><sub>1</sub> to cos <i>φ</i><sub>2</sub> (with <i>φ</i><sub>2</sub> < <i>φ</i><sub>1</sub>, i.e. improved PF):<br><i>Q</i><sub>required</sub> = <i>P</i>(tan <i>φ</i><sub>1</sub> − tan <i>φ</i><sub>2</sub>)<br><i>V</i><sup>2</sup><i>ωC</i> = <i>P</i>(tan <i>φ</i><sub>1</sub> − tan <i>φ</i><sub>2</sub>)<br><i>C</i> = <i>P</i>(tan <i>φ</i><sub>1</sub> − tan <i>φ</i><sub>2</sub>)/(<i>ωV</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: '<b>New line current after correction.</b> After adding the capacitor, the net reactive power is <i>Q</i><sub>net</sub> = <i>P</i> tan <i>φ</i><sub>2</sub>. The new apparent power is <i>S</i><sub>new</sub> = √(<i>P</i><sup>2</sup> + <i>Q</i><sub>net</sub><sup>2</sup>), and the new line current is <i>I</i><sub>new</sub> = <i>S</i><sub>new</sub>/<i>V</i>. If cos <i>φ</i><sub>2</sub> = 1 (unity PF), then <i>I</i><sub>new</sub> = <i>P</i>/<i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>P</i> in W, <i>V</i> in V, <i>ω</i> in rad s<sup>−1</sup>, <i>C</i> in F: <i>C</i> = W × dimensionless/(rad s<sup>−1</sup> × V<sup>2</sup>) = W s V<sup>−2</sup> = A s V<sup>−1</sup> = F. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE/JEE Main Level — Correcting a factory motor',
        q: 'A factory induction motor draws <i>P</i> = 10 kW at cos <i>φ</i><sub>1</sub> = 0.707 (lagging) from a 230 V (rms), 50 Hz supply. (a) Find the present line current and reactive power. (b) A capacitor bank is installed to improve the PF to unity. Find the required capacitance and the new line current.',
        steps: [
          '<b>Step 1 — (a) Present values.</b><br>tan <i>φ</i><sub>1</sub> = √(1/cos<sup>2</sup> <i>φ</i><sub>1</sub> − 1) = √(1/0.5 − 1) = √(2 − 1) = 1',
          'Reactive power: <i>Q</i><sub>1</sub> = <i>P</i> tan <i>φ</i><sub>1</sub> = 10 000 × 1 = 10 000 VAR = 10 kVAR.<br>Apparent power: <i>S</i><sub>1</sub> = <i>P</i>/cos <i>φ</i><sub>1</sub> = 10 000/0.707 = 14 140 VA.<br>Line current: <i>I</i><sub>1</sub> = <i>S</i><sub>1</sub>/<i>V</i> = 14 140/230 = 61.5 A.',
          '<b>Step 2 — (b) Capacitor sizing for unity PF.</b><br><i>Q</i><sub>required</sub> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = 10 000 − 0 = 10 000 VAR (since <i>Q</i><sub>2</sub> = <i>P</i> tan 0 = 0).<br><i>ω</i> = 2π × 50 = 314 rad s<sup>−1</sup><br><i>C</i> = <i>Q</i><sub>required</sub>/(<i>ωV</i><sup>2</sup>) = 10 000/(314 × (230)<sup>2</sup>) = 10 000/(314 × 52 900) = 10 000/(16.6 × 10<sup>6</sup>) = 6.02 × 10<sup>−4</sup> F = 602 μF',
          '<b>New line current:</b> <i>I</i><sub>2</sub> = <i>P</i>/<i>V</i> = 10 000/230 = 43.5 A.',
          '<b>Reduction:</b> <i>I</i> drops from 61.5 A to 43.5 A — a 29% reduction — allowing thinner supply cables and avoiding utility PF penalties.',
          '<b>Check.</b> <i>I</i><sub>C</sub> = <i>VωC</i> = 230 × 314 × 602 × 10<sup>−6</sup> = 230 × 0.189 = 43.5 A (capacitor current). The motor’s reactive current is <i>I</i><sub>1,reactive</sub> = <i>I</i><sub>1</sub> sin <i>φ</i><sub>1</sub> = 61.5 × 0.707 = 43.5 A. The capacitor supplies exactly the reactive current the motor needs, leaving only the real current component of the motor (also 43.5 A) for the source to supply.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Partial correction',
        q: 'A load of <i>Z</i><sub>L</sub> = 30 + <i>j</i>40 Ω is connected to <i>V</i> = 200 V (rms) at <i>ω</i> = 100 rad s<sup>−1</sup>. (a) Find the PF and line current. (b) A capacitor of <i>C</i> = 200 μF is added in parallel. Find the new line current and PF.',
        steps: [
          '<b>Step 1 — (a) Load parameters.</b><br>|<i>Z</i><sub>L</sub>| = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 Ω. PF cos <i>φ</i> = 30/50 = 0.6 (lagging, since inductive).<br><i>I</i><sub>rms</sub> = 200/50 = 4 A.<br>Real power: <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = 4<sup>2</sup> × 30 = 480 W. Reactive power: <i>Q</i> = <i>I</i><sup>2</sup><i>X</i><sub>L</sub> = 4<sup>2</sup> × 40 = 640 VAR.',
          '<b>Step 2 — (b) Capacitor current.</b><br><i>X</i><sub>C</sub> = 1/(<i>ωC</i>) = 1/(100 × 200 × 10<sup>−6</sup>) = 1/0.02 = 50 Ω. <i>I</i><sub>C</sub> = <i>V</i>/<i>X</i><sub>C</sub> = 200/50 = 4 A, <b>leading</b> by 90°.',
          '<b>Step 3 — New line current (phasor sum).</b><br>Load current phasor: <i>I</i><sub>L</sub> = 4∠−<i>φ</i> = 4∠−53.1° A. Capacitor current: <i>I</i><sub>C</sub> = 4∠+90° A.<br>In rectangular form: <i>I</i><sub>L</sub> = 4 cos(−53.1°) + <i>j</i> 4 sin(−53.1°) = 2.40 − <i>j</i>3.20 A. <i>I</i><sub>C</sub> = 0 + <i>j</i>4 A. <i>I</i><sub>line</sub> = (2.40) + <i>j</i>(−3.20 + 4) = 2.40 + <i>j</i>0.80 A.<br>|<i>I</i><sub>line</sub>| = √(2.40<sup>2</sup> + 0.80<sup>2</sup>) = √(5.76 + 0.64) = √6.40 = 2.53 A.',
          'New PF: cos <i>φ</i><sub>new</sub> = 2.40/2.53 = 0.949 (leading — the capacitor over-corrects — but much improved from 0.6).',
          '<b>Check.</b> <i>P</i> is unchanged (capacitor supplies no real power): <i>P</i> = 480 W. The capacitor supplies <i>VI</i><sub>C</sub> = 200 × 4 = 800 VAR against the load’s 640 VAR, so the net reactive power is 160 VAR, <b>capacitive</b> (down from 640 VAR inductive). tan <i>φ</i><sub>new</sub> = 0.80/2.40 = 0.333. <i>φ</i><sub>new</sub> = 18.4°. cos <i>φ</i><sub>new</sub> = 0.949.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by power factor? Why do electricity boards penalise industries with low PF?',
            a: 'Power factor is cos <i>φ</i> = <i>P</i>/(<i>VI</i>), the cosine of the phase angle between voltage and current. A low PF means the supply must carry large wattless currents that do no useful work but still heat the cables and reduce the system’s capacity, so utilities penalise it.',
          },
          {
            q: '[JEE Main] A load draws 5 kW at 0.8 lagging PF from a 220 V supply. Find the reactive power and the apparent power.',
            a: 'tan <i>φ</i> = √(1/0.8<sup>2</sup> − 1) = √(1.5625 − 1) = √0.5625 = 0.75. <i>Q</i> = <i>P</i> tan <i>φ</i> = 5 000 × 0.75 = 3750 VAR. <i>S</i> = <i>P</i>/cos <i>φ</i> = 5000/0.8 = 6250 VA.',
          },
          {
            q: '[JEE Main] A single-phase motor draws 20 A at 0.75 lagging PF from a 230 V supply. A capacitor is installed to raise the PF to 0.95 lagging. Find the capacitor current needed.',
            a: 'The real (in-phase) current is fixed by the load: <i>I</i><sub>real</sub> = 20 × 0.75 = 15 A. Originally sin <i>φ</i><sub>1</sub> = √(1 − 0.75<sup>2</sup>) = 0.661, so the reactive current is <i>I</i><sub>reactive,1</sub> = 20 × 0.661 = 13.23 A. After correction the line current is no longer 20 A: with cos <i>φ</i><sub>2</sub> = 0.95, tan <i>φ</i><sub>2</sub> = √(1 − 0.95<sup>2</sup>)/0.95 = 0.329, so <i>I</i><sub>reactive,2</sub> = <i>I</i><sub>real</sub> tan <i>φ</i><sub>2</sub> = 15 × 0.329 = 4.93 A (and the new line current is 15/0.95 = 15.8 A). The capacitor must supply the difference: <i>I</i><sub>C</sub> = 13.23 − 4.93 = 8.3 A.',
          },
          {
            q: '[JEE Advanced] A factory has a load of <i>P</i> = 50 kW at cos <i>φ</i><sub>1</sub> = 0.6 lagging. The supply can carry a maximum current of 200 A at 400 V. (a) Is the present load within limits? (b) What is the minimum power factor for which the load stays within the current limit?',
            a: '(a) <i>S</i> = <i>P</i>/cos <i>φ</i> = 50 000/0.6 = 83 333 VA. <i>I</i> = <i>S</i>/<i>V</i> = 83 333/400 = 208 A. Exceeds 200 A — overloaded. (b) Max <i>I</i> = 200 A, so max <i>S</i> = 200 × 400 = 80 000 VA. Required PF: cos <i>φ</i> = 50 000/80 000 = 0.625. The PF must be improved from 0.6 to at least 0.625 (current 200 A at that PF).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 509–513 ─────────────────────────
  {
    n: 'D',
    title: 'Damped LC Oscillations',
    extra: true,
    kalam: 'A high-Q circuit (small R) oscillates many times before the amplitude dies; a low-Q circuit dies quickly.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter treats <b>ideal</b> LC oscillations (<i>R</i> = 0), where the charge oscillates forever at <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) and the total energy is constant. Every real LC circuit has some resistance, and the resulting <b>damped LC oscillations</b> — charge sloshing back and forth with exponentially shrinking amplitude — are the bridge between the ideal LC circuit and the forced LCR resonance treated earlier in the chapter. The key result is that finite <i>R</i> lowers the oscillation frequency below <i>ω</i><sub>0</sub> and introduces exponential decay.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Equation of motion.</b> For a series RLC circuit with zero applied voltage (<i>v</i> = 0):<br><i>L</i> d<i>i</i>/d<i>t</i> + <i>Ri</i> + <i>q</i>/<i>C</i> = 0   ⟹   <i>q̈</i> + (<i>R</i>/<i>L</i>)<i>q̇</i> + <i>q</i>/(<i>LC</i>) = 0',
      },
      {
        t: 'p',
        html: '<b>Damping parameter:</b> <i>α</i> = <i>R</i>/(2<i>L</i>) (neper frequency, in s<sup>−1</sup>).<br><b>Characteristic equation:</b> <i>s</i><sup>2</sup> + 2<i>αs</i> + <i>ω</i><sub>0</sub><sup>2</sup> = 0, with <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>).<br><i>s</i> = −<i>α</i> ± √(<i>α</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)',
      },
      {
        t: 'table',
        title: 'Three regimes',
        head: ['Condition', 'Regime', 'Solution', 'Behaviour'],
        rows: [
          [
            '<i>α</i> < <i>ω</i><sub>0</sub>',
            '<b>Underdamped</b>',
            '<i>q</i> ≈ <i>q</i><sub>0</sub><i>e</i><sup>−<i>αt</i></sup> cos(<i>ω</i><sub>d</sub><i>t</i>) (weak damping)',
            'Oscillation with decaying envelope',
          ],
          [
            '<i>α</i> = <i>ω</i><sub>0</sub>',
            '<b>Critically damped</b>',
            '<i>q</i> = <i>q</i><sub>0</sub>(1 + <i>αt</i>)<i>e</i><sup>−<i>αt</i></sup>',
            'Fastest decay without overshoot',
          ],
          [
            '<i>α</i> > <i>ω</i><sub>0</sub>',
            '<b>Overdamped</b>',
            '<i>q</i> = <i>A</i> exp[(−<i>α</i> + √(<i>α</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>))<i>t</i>] + <i>B</i> exp[(−<i>α</i> − √(<i>α</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>))<i>t</i>]',
            'Slow exponential decay, no oscillation',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Underdamped frequency:</b> <i>ω</i><sub>d</sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>α</i><sup>2</sup>) = √(1/(<i>LC</i>) − <i>R</i><sup>2</sup>/(4<i>L</i><sup>2</sup>)).<br><b>Quality factor of a damped oscillator:</b> <i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) ≈ 2π × (energy stored)/(energy lost per period) (the last form holds for weak damping, <i>Q</i> ≫ 1).<br>A high-Q circuit (small <i>R</i>) oscillates many times before the amplitude dies; a low-Q circuit dies quickly.',
      },
      {
        t: 'p',
        html: '<b>Energy decay.</b> The total energy at time <i>t</i> is:<br><i>U</i>(<i>t</i>) ≈ (<i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>)) <i>e</i><sup>−2<i>αt</i></sup> = <i>U</i><sub>0</sub><i>e</i><sup>−2<i>αt</i></sup> = <i>U</i><sub>0</sub> exp(−<i>t</i>/<i>τ</i><sub>E</sub>)<br>where <i>τ</i><sub>E</sub> = <i>L</i>/<i>R</i> is the <b>energy decay time constant</b> (seconds) — the envelope of the energy for weak damping.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Underdamped oscillation parameters',
        q: 'A series RLC circuit has <i>L</i> = 0.10 H, <i>C</i> = 100 μF, and <i>R</i> = 10 Ω. The capacitor is charged to <i>q</i><sub>0</sub> = 1.0 × 10<sup>−4</sup> C and then left to oscillate. Find (a) <i>ω</i><sub>0</sub>, <i>α</i>, and <i>ω</i><sub>d</sub>, (b) the Q-factor, (c) the time for the amplitude to fall to half of <i>q</i><sub>0</sub>, and (d) the time for the energy to fall to half of <i>U</i><sub>0</sub>.',
        steps: [
          '<b>Step 1 — (a) Frequencies.</b><br><i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(0.10 × 10<sup>−4</sup>) = 1/√(10<sup>−5</sup>) = 1/0.00316 = 316 rad s<sup>−1</sup><br><i>α</i> = <i>R</i>/(2<i>L</i>) = 10/(2 × 0.10) = 50 s<sup>−1</sup><br><i>ω</i><sub>d</sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>α</i><sup>2</sup>) = √(10<sup>5</sup> − 2500) = √97 500 = 312 rad s<sup>−1</sup><br>The damped frequency is only slightly below <i>ω</i><sub>0</sub> — the circuit is <b>underdamped</b> (<i>α</i> < <i>ω</i><sub>0</sub>).',
          '<b>Step 2 — (b) Q-factor.</b><br><i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (316 × 0.10)/10 = 3.16<br>Alternatively: <i>Q</i> = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = (1/10)√(0.10/10<sup>−4</sup>) = 0.1 × 31.6 = 3.16.',
          '<b>Step 3 — (c) Amplitude halving time.</b> The amplitude of <i>q</i>(<i>t</i>) is <i>q</i><sub>0</sub><i>e</i><sup>−<i>αt</i></sup>. Set <i>q</i><sub>0</sub> exp(−<i>αt</i><sub>1/2</sub>) = <i>q</i><sub>0</sub>/2:<br>exp(−<i>αt</i><sub>1/2</sub>) = 1/2   ⟹   −<i>αt</i><sub>1/2</sub> = ln (1/2) = −ln 2<br><i>t</i><sub>1/2</sub> = (ln 2)/<i>α</i> = 0.693/50 = 0.0139 s = 13.9 ms',
          '<b>Step 4 — (d) Energy halving time.</b> Energy decays as <i>e</i><sup>−2<i>αt</i></sup>. Set exp(−2<i>αt</i><sub>E,1/2</sub>) = 1/2:<br>−2<i>αt</i><sub>E,1/2</sub> = −ln 2   ⟹   <i>t</i><sub>E,1/2</sub> = (ln 2)/(2<i>α</i>) = 0.693/100 = 0.00693 s = 6.93 ms',
          '<b>Check.</b> Energy halves in <b>half the time</b> it takes the amplitude to halve (because energy goes as the square of charge). 6.93 ms = 13.9 ms/2. The damped period: <i>T</i><sub>d</sub> = 2π/<i>ω</i><sub>d</sub> = 6.283/312 = 0.0201 s = 20.1 ms. The amplitude halves in 0.014 s < <i>T</i><sub>d</sub> (each cycle it falls to exp(−<i>αT</i><sub>d</sub>) = <i>e</i><sup>−50 × 0.02012</sup> = <i>e</i><sup>−1.006</sup> = 0.366 of its value).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Critical damping and Q-factor',
        q: 'A series RLC circuit with <i>L</i> = 0.50 H and <i>C</i> = 2.0 μF must be critically damped. (a) Find the required <i>R</i>. (b) For this <i>R</i>, find <i>ω</i><sub>0</sub> and confirm <i>α</i> = <i>ω</i><sub>0</sub>. (c) If <i>q</i><sub>0</sub> = 5.0 × 10<sup>−6</sup> C, find the charge after <i>t</i> = 2.0 ms. (d) Find the Q-factor of this circuit.',
        steps: [
          '<b>Step 1 — (a) Critical resistance.</b><br>Critical damping: <i>α</i> = <i>ω</i><sub>0</sub>, i.e. <i>R</i>/(2<i>L</i>) = 1/√(<i>LC</i>).<br><i>R</i><sub>critical</sub> = 2<i>L</i>/√(<i>LC</i>) = 2√(<i>L</i>/<i>C</i>) = 2√(0.50/(2.0 × 10<sup>−6</sup>)) = 2√(2.5 × 10<sup>5</sup>) = 2 × 500 = 1000 Ω',
          '<b>Step 2 — (b) Frequencies.</b><br><i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(0.50 × 2.0 × 10<sup>−6</sup>) = 1/√(10<sup>−6</sup>) = 1000 rad s<sup>−1</sup><br><i>α</i> = <i>R</i>/(2<i>L</i>) = 1000/(2 × 0.50) = 1000 s<sup>−1</sup> = <i>ω</i><sub>0</sub>',
          '<b>Step 3 — (c) Charge at <i>t</i> = 2 ms.</b><br>For critically damped: <i>q</i> = <i>q</i><sub>0</sub>(1 + <i>αt</i>)<i>e</i><sup>−<i>αt</i></sup>.<br><i>αt</i> = 1000 × 2.0 × 10<sup>−3</sup> = 2<br><i>q</i> = (5.0 × 10<sup>−6</sup>)(1 + 2)<i>e</i><sup>−2</sup> = (5.0 × 10<sup>−6</sup>)(3)(0.1353) = 2.03 × 10<sup>−6</sup> C<br>The charge has decayed to 2.0 μC from the initial 5.0 μC — about 40% remaining after 2 ms.',
          '<b>Step 4 — (d) Q-factor.</b> <i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = (1000)(0.50)/1000 = 0.50. This is the critical-damping value <i>Q</i> = 1/2: for <i>Q</i> > 1/2 the circuit is underdamped (it oscillates), for <i>Q</i> < 1/2 it is overdamped.',
          '<b>Check.</b> The critically damped solution is <i>q</i> = (<i>A</i> + <i>Bt</i>)<i>e</i><sup>−<i>αt</i></sup>. With <i>q</i>(0) = <i>q</i><sub>0</sub>: <i>A</i> = <i>q</i><sub>0</sub>. With <i>q̇</i>(0) = 0 (released from rest): <i>q̇</i> = <i>Be</i><sup>−<i>αt</i></sup> − <i>α</i>(<i>A</i> + <i>Bt</i>)<i>e</i><sup>−<i>αt</i></sup>, so <i>q̇</i>(0) = <i>B</i> − <i>αA</i> = 0 ⟹ <i>B</i> = <i>αq</i><sub>0</sub>. <i>q</i> = <i>q</i><sub>0</sub>(1 + <i>αt</i>)<i>e</i><sup>−<i>αt</i></sup>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by a damped LC oscillation? State the condition for a circuit to be underdamped.',
            a: 'A damped LC oscillation occurs when a charged capacitor is discharged through an inductor with some resistance <i>R</i> > 0. The charge oscillates with exponentially decaying amplitude. Underdamped condition: <i>R</i> < 2√(<i>L</i>/<i>C</i>) (equivalently <i>Q</i> > 1/2).',
          },
          {
            q: '[JEE Main] A series RLC has <i>L</i> = 20 mH, <i>C</i> = 5 μF, <i>R</i> = 20 Ω. Find the damped frequency of oscillation.',
            a: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) = 1/√(0.020 × 5 × 10<sup>−6</sup>) = 1/√(10<sup>−7</sup>) = 3162 rad s<sup>−1</sup>. <i>α</i> = <i>R</i>/(2<i>L</i>) = 20/(0.040) = 500 s<sup>−1</sup>. <i>ω</i><sub>d</sub> = √(3162<sup>2</sup> − 500<sup>2</sup>) = √(10<sup>7</sup> − 2.5 × 10<sup>5</sup>) = √(9.75 × 10<sup>6</sup>) = 3122 rad s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Show that for a weakly damped circuit, the damped frequency <i>ω</i><sub>d</sub> ≈ <i>ω</i><sub>0</sub>(1 − 1/(8<i>Q</i><sup>2</sup>)).',
            a: '<i>ω</i><sub>d</sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>α</i><sup>2</sup>) = <i>ω</i><sub>0</sub>√(1 − (<i>α</i>/<i>ω</i><sub>0</sub>)<sup>2</sup>) = <i>ω</i><sub>0</sub>(1 − ½(<i>α</i>/<i>ω</i><sub>0</sub>)<sup>2</sup> − …). Since <i>α</i>/<i>ω</i><sub>0</sub> = 1/(2<i>Q</i>): <i>ω</i><sub>d</sub> ≈ <i>ω</i><sub>0</sub>(1 − 1/(8<i>Q</i><sup>2</sup>)).',
          },
          {
            q: '[JEE Advanced] A series RLC with <i>R</i> = 5 Ω, <i>L</i> = 0.20 H, <i>C</i> = 80 μF oscillates. Find (a) the Q-factor, (b) the number of oscillations before the amplitude drops to 1/<i>e</i> of its initial value, and (c) the fractional energy loss per cycle.',
            a: '(a) <i>ω</i><sub>0</sub> = 1/√(0.20 × 80 × 10<sup>−6</sup>) = 1/√(1.6 × 10<sup>−5</sup>) = 250 rad s<sup>−1</sup>. <i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 250 × 0.20/5 = 10. (b) Amplitude drops to 1/<i>e</i>: <i>e</i><sup>−<i>αt</i></sup> = 1/<i>e</i> ⟹ <i>αt</i> = 1 ⟹ <i>t</i> = 1/<i>α</i> = 2<i>L</i>/<i>R</i> = 2 × 0.20/5 = 0.08 s. Number of cycles: <i>t</i>/<i>T</i><sub>d</sub> = <i>tω</i><sub>0</sub>/(2π) = 0.08 × 250/6.28 = 3.18 cycles. (c) Fractional energy loss per cycle: Δ<i>U</i>/<i>U</i> = 1 − <i>e</i><sup>−2<i>αT</i></sup> with <i>T</i> = 2π/<i>ω</i><sub>d</sub> ≈ 2π/<i>ω</i><sub>0</sub>, so 2<i>αT</i> ≈ 2π/<i>Q</i> (because <i>α</i> = <i>ω</i><sub>0</sub>/(2<i>Q</i>)) and Δ<i>U</i>/<i>U</i> = 1 − <i>e</i><sup>−2π/<i>Q</i></sup> ≈ 2π/<i>Q</i> when <i>Q</i> ≫ 2π. For <i>Q</i> = 10: 1 − <i>e</i><sup>−0.628</sup> = 1 − 0.534 = 0.47, i.e. about <b>47% of the energy is lost each cycle</b> (the linear estimate 2π/<i>Q</i> = 0.63 overshoots because <i>Q</i> is not large). For <i>Q</i> = 100: 1 − <i>e</i><sup>−0.0628</sup> = 6.1%, almost exactly 2π/<i>Q</i> = 6.3%.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 513–516 ─────────────────────────
  {
    n: 'E',
    title: 'Series-Parallel AC Circuit Analysis',
    extra: true,
    kalam:
      'The systematic method is: reduce each parallel group to a single equivalent impedance, then combine all series elements.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives a complete treatment of <b>series</b> LCR circuits. Real AC networks often contain <b>series-parallel combinations</b> — groups of elements in parallel forming one branch, and multiple such branches in series. The systematic method is: reduce each parallel group to a single equivalent impedance, then combine all series elements.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1 — Identify all parallel groups.</b> A parallel group is two or more elements (or sub-circuits) connected across the same two nodes.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Convert each parallel group to its equivalent impedance.</b> Use the admittance method:<br>• Convert each branch to admittance <i>Y</i><sub><i>i</i></sub> = 1/<i>Z</i><sub><i>i</i></sub> = <i>G</i><sub><i>i</i></sub> + <i>jB</i><sub><i>i</i></sub>.<br>• Add admittances: <i>Y</i><sub>eq</sub> = ∑ <i>Y</i><sub><i>i</i></sub>.<br>• Invert: <i>Z</i><sub>eq</sub> = 1/<i>Y</i><sub>eq</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Reduce step by step.</b> If the reduced parallel impedance is in series with other elements, add them as complex numbers: <i>Z</i><sub>total</sub> = <i>Z</i><sub>eq,parallel</sub> + <i>Z</i><sub>series</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Find total current and phase.</b> The current is <i>I</i> = <i>V</i>/|<i>Z</i><sub>total</sub>|, and the phase angle is<br><i>φ</i> = tan<sup>−1</sup>(Im(<i>Z</i><sub>total</sub>)/Re(<i>Z</i><sub>total</sub>))<br>(positive <i>φ</i> means the current lags the voltage).',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Branch currents (if needed).</b> After finding the common voltage across a parallel group, use Ohm’s law for each branch: <i>I</i><sub><i>i</i></sub> = <i>V</i><sub>branch</sub>/<i>Z</i><sub><i>i</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> All impedances in Ω, currents in A, voltages in V. Admittances in S. No unit conversion needed within the method.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Three parallel branches',
        q: 'A source <i>v</i> = 100√2 sin(100<i>t</i>) V drives three parallel branches: Branch 1: <i>R</i> = 50 Ω; Branch 2: <i>L</i> = 0.60 H; Branch 3: <i>C</i> = 200 μF. Find the total rms current and the overall PF.',
        steps: [
          '<b>Step 1 — Angular frequency and reactances.</b><br><i>ω</i> = 100 rad s<sup>−1</sup>. <i>X</i><sub>L2</sub> = <i>ωL</i> = 100 × 0.60 = 60 Ω. <i>X</i><sub>C3</sub> = 1/(<i>ωC</i>) = 1/(100 × 200 × 10<sup>−6</sup>) = 1/0.02 = 50 Ω.',
          '<b>Step 2 — Branch admittances.</b><br>Branch 1 (resistor): <i>Y</i><sub>1</sub> = 1/50 = 0.0200 S. <i>G</i><sub>1</sub> = 0.0200 S, <i>B</i><sub>1</sub> = 0.<br>Branch 2 (inductor): <i>Z</i><sub>2</sub> = <i>j</i>60 Ω. |<i>Z</i><sub>2</sub>|<sup>2</sup> = 3600. <i>Y</i><sub>2</sub> = −<i>j</i>60/3600 = −<i>j</i>0.01667 S. <i>G</i><sub>2</sub> = 0, <i>B</i><sub>2</sub> = −0.01667 S.<br>Branch 3 (capacitor): <i>Z</i><sub>3</sub> = −<i>j</i>50 Ω. |<i>Z</i><sub>3</sub>|<sup>2</sup> = 2500. <i>Y</i><sub>3</sub> = +<i>j</i>50/2500 = +<i>j</i>0.0200 S. <i>G</i><sub>3</sub> = 0, <i>B</i><sub>3</sub> = +0.0200 S.',
          '<b>Step 3 — Total admittance.</b><br><i>Y</i><sub>eq</sub> = 0.0200 + <i>j</i>(−0.01667 + 0.0200) = 0.0200 + <i>j</i>0.00333 S<br>|<i>Y</i><sub>eq</sub>| = √(0.0200<sup>2</sup> + 0.00333<sup>2</sup>) = √(0.000400 + 0.0000111) = 0.02028 S',
          '<b>Step 4 — Total rms current.</b><br><i>V</i><sub>rms</sub> = 100 V. <i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub> × |<i>Y</i><sub>eq</sub>| = 100 × 0.02028 = 2.03 A.<br>Phase of <i>Y</i>: <i>φ</i><sub><i>Y</i></sub> = tan<sup>−1</sup>(0.00333/0.0200) = +9.5° (net admittance leads, so net current leads voltage by 9.5°).<br>PF = cos <i>φ</i> = cos 9.5° = 0.986 (leading).',
          '<b>Check.</b> <i>I</i><sub>1</sub> = 100/50 = 2.0 A (in phase). <i>I</i><sub>2</sub> = 100/60 = 1.67 A (lags by 90°). <i>I</i><sub>3</sub> = 100/50 = 2.0 A (leads by 90°). Net: real parts = 2.0 + 0 + 0 = 2.0 A. Reactive parts = 0 − 1.67 + 2.0 = +0.33 A (capacitive net). <i>I</i><sub>total</sub> = √(2.0<sup>2</sup> + 0.33<sup>2</sup>) = 2.03 A. PF = 2.0/2.03 = 0.986.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Series-parallel reduction',
        q: 'Find the total current, PF, and real power for the circuit driven by <i>v</i> = 50 sin(100<i>t</i>) V. The circuit consists of: <i>R</i><sub>1</sub> = 20 Ω in series with a parallel combination of (Branch A: <i>R</i><sub>A</sub> = 30 Ω in series with <i>L</i> = 0.40 H) and (Branch B: <i>R</i><sub>B</sub> = 30 Ω in series with <i>C</i> = 100 μF).',
        steps: [
          '<b>Step 1 — Reactances at <i>ω</i> = 100 rad s<sup>−1</sup>.</b><br><i>X</i><sub>L</sub> = 100 × 0.40 = 40 Ω. <i>X</i><sub>C</sub> = 1/(100 × 100 × 10<sup>−6</sup>) = 100 Ω.',
          '<b>Step 2 — Parallel branch impedances.</b><br><i>Z</i><sub>A</sub> = 30 + <i>j</i>40 Ω. |<i>Z</i><sub>A</sub>| = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 Ω. <i>Z</i><sub>B</sub> = 30 − <i>j</i>100 Ω. |<i>Z</i><sub>B</sub>| = √(30<sup>2</sup> + 100<sup>2</sup>) = 104.4 Ω.',
          '<b>Step 3 — Parallel admittances.</b><br><i>Y</i><sub>A</sub> = 1/(50∠53.1°) = 0.0200∠−53.1° = 0.0120 − <i>j</i>0.0160 S<br><i>Y</i><sub>B</sub> = 1/(104.4∠−73.3°) = 0.009578∠+73.3° = 0.002752 + <i>j</i>0.009174 S',
          '<b>Step 4 — Equivalent parallel impedance.</b><br><i>Y</i><sub>eq,par</sub> = (0.012000 + 0.002752) + <i>j</i>(−0.016000 + 0.009174) = 0.014752 − <i>j</i>0.006826 S<br>|<i>Y</i><sub>eq,par</sub>| = √(0.014752<sup>2</sup> + 0.006826<sup>2</sup>) = 0.016255 S<br><i>Z</i><sub>eq,par</sub> = 1/(0.014752 − <i>j</i>0.006826) = (0.014752 + <i>j</i>0.006826)/(0.014752<sup>2</sup> + 0.006826<sup>2</sup>) = (0.014752 + <i>j</i>0.006826)/0.00026421 = 55.8 + <i>j</i>25.8 Ω',
          '<b>Step 5 — Total impedance.</b><br><i>Z</i><sub>total</sub> = <i>R</i><sub>1</sub> + <i>Z</i><sub>eq,par</sub> = 20 + (55.8 + <i>j</i>25.8) = 75.8 + <i>j</i>25.8 Ω<br>|<i>Z</i><sub>total</sub>| = √(75.8<sup>2</sup> + 25.8<sup>2</sup>) = √(5746 + 666) = √6412 = 80.1 Ω',
          '<b>Step 6 — Total current.</b><br><i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>/|<i>Z</i><sub>total</sub>| = 50/80.1 = 0.624 A (peak)<br><i>I</i><sub>rms</sub> = 0.624/√2 = 0.441 A<br>Phase: <i>φ</i> = tan<sup>−1</sup>(25.8/75.8) = 18.8° (current <b>lags</b> voltage by 18.8°).',
          '<b>Step 7 — Real power.</b><br><i>P</i> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = (50/√2) × (0.624/√2) × cos 18.8° = 25 × 0.624 × 0.947 = 14.8 W',
          '<b>Alternative.</b> Since only resistance dissipates power, <i>P</i> = <i>I</i><sub>rms</sub><sup>2</sup> Re(<i>Z</i><sub>total</sub>) = (0.4413)<sup>2</sup> × 75.83 = 14.8 W, the same result.',
          '<b>Check.</b> The series resistor <i>R</i><sub>1</sub> dissipates <i>I</i><sub>rms</sub><sup>2</sup> × 20 = (0.441)<sup>2</sup> × 20 = 3.89 W. The parallel section dissipates <i>I</i><sub>rms</sub><sup>2</sup> × Re(<i>Z</i><sub>eq,par</sub>) = (0.441)<sup>2</sup> × 55.8 = 10.9 W. Total: 3.89 + 10.9 = 14.8 W.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe the steps for analysing a circuit containing series and parallel combinations of R, L, and C at a given frequency.',
            a: '(i) Compute reactances <i>X</i><sub>L</sub> = <i>ωL</i>, <i>X</i><sub>C</sub> = 1/(<i>ωC</i>) at the given frequency. (ii) Express each element or branch as a complex impedance <i>Z</i> = <i>R</i> + <i>jX</i>. (iii) For parallel groups, convert to admittance <i>Y</i> = 1/<i>Z</i>, add admittances, invert to get equivalent <i>Z</i>. (iv) Add all series impedances. (v) Find |<i>Z</i><sub>total</sub>| and <i>φ</i> = tan<sup>−1</sup>(Im/Re). (vi) <i>I</i> = <i>V</i>/|<i>Z</i>|, and <i>P</i> = <i>VI</i> cos <i>φ</i>.',
          },
          {
            q: '[JEE Main] A 40 Ω resistor is in series with a parallel combination of 60 Ω and 60 Ω (pure). The circuit is driven by <i>v</i> = 220√2 sin(100<i>t</i>) V. Find the total current.',
            a: 'Parallel resistance: 60 ∥ 60 = 30 Ω. Total <i>Z</i> = 40 + 30 = 70 Ω. <i>I</i><sub>rms</sub> = 220/70 = 3.14 A.',
          },
          {
            q: '[JEE Main] Two parallel branches: Branch 1 has <i>R</i> = 8 Ω and <i>X</i><sub>L</sub> = 6 Ω; Branch 2 has <i>R</i> = 8 Ω and <i>X</i><sub>C</sub> = 6 Ω. Find the equivalent impedance and state the PF.',
            a: '<i>Z</i><sub>1</sub> = 8 + <i>j</i>6 Ω, <i>Z</i><sub>2</sub> = 8 − <i>j</i>6 Ω. <i>Y</i><sub>1</sub> = (8 − <i>j</i>6)/100 = 0.08 − <i>j</i>0.06 S; <i>Y</i><sub>2</sub> = (8 + <i>j</i>6)/100 = 0.08 + <i>j</i>0.06 S. <i>Y</i><sub>eq</sub> = 0.16 S. <i>Z</i><sub>eq</sub> = 1/0.16 = 6.25 Ω (purely resistive). PF = 1.',
          },
          {
            q: '[JEE Advanced] In the circuit of worked example 2, a capacitor <i>C</i>′ = 150 μF is added in parallel with the entire parallel section. Find the new total current and PF.',
            a: 'At <i>ω</i> = 100 rad s<sup>−1</sup>: <i>X</i><sub>C′</sub> = 1/(100 × 150 × 10<sup>−6</sup>) = 66.7 Ω. <i>Y</i><sub>C′</sub> = <i>j</i>0.01500 S. Previous <i>Y</i><sub>eq,par</sub> = 0.014752 − <i>j</i>0.006826 S. New <i>Y</i><sub>eq,par</sub> = 0.014752 + <i>j</i>(0.01500 − 0.006826) = 0.014752 + <i>j</i>0.008174 S. |<i>Y</i><sub>eq,par</sub>| = √(0.014752<sup>2</sup> + 0.008174<sup>2</sup>) = 0.01687 S. <i>Z</i><sub>eq,par</sub> = 1/<i>Y</i><sub>eq,par</sub> = (0.014752 − <i>j</i>0.008174)/(0.014752<sup>2</sup> + 0.008174<sup>2</sup>) = (0.014752 − <i>j</i>0.008174)/0.00028444 = 51.9 − <i>j</i>28.7 Ω. <i>Z</i><sub>total</sub> = 20 + 51.9 − <i>j</i>28.7 = 71.9 − <i>j</i>28.7 Ω. |<i>Z</i>| = √(71.9<sup>2</sup> + 28.7<sup>2</sup>) = 77.4 Ω. <i>I</i><sub>m</sub> = 50/77.4 = 0.646 A, <i>I</i><sub>rms</sub> = 0.457 A. <i>φ</i> = tan<sup>−1</sup>(−28.7/71.9) = −21.8°, so PF = cos 21.8° = 0.93 (current <b>leads</b> by 21.8° — the added capacitor overcorrects the PF to leading).',
          },
        ],
      },
    ],
  },
];
