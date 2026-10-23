import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional topic A, word for word from the Class 12 Physics
 * Master Reference: the Supplement's shared opening (p. 500, set at the head
 * of Addendum A's Introduction), then A Parallel AC Circuits and the
 * Admittance Method (p. 500 to the top of p. 503, where its Step 7, its
 * practice problems and their answers sit). The addendum prints its own
 * practice problems and answers, which are its Practice part. These pages
 * print no drawings: the equations are typeset, not drawn. The Supplement's
 * phase symbol ϕ is written φ, as in the rest of the chapter.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 500–503 ─────────────────────────
  {
    n: 'A',
    title: 'Parallel AC Circuits and the Admittance Method',
    extra: true,
    kalam: 'When two or more branches sit in parallel, the voltages are common but the branch currents differ in phase.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter establishes the series LCR circuit, resonance, power, and transformers thoroughly. This supplement adds five JEE-critical patterns that sit just beyond it: the admittance method for parallel AC circuits (which replaces brute-force complex arithmetic with a two-line Y-addition), parallel resonance — the mirror image of series resonance, where impedance peaks and the line current is a minimum — power factor correction with capacitor-bank sizing, damped LC oscillations with the resistance-modified frequency formula, and the systematic reduction of series-parallel AC combinations. Each section below states its method, derives every result with units, and closes with full answers.',
      },
      {
        t: 'p',
        html: 'The chapter’s impedance formula <i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>) applies to elements in <b>series</b>. When two or more branches sit in <b>parallel</b>, the voltages are common but the branch currents differ in phase — and the algebra to combine them gets messy if you work only with impedances. The admittance method solves this in two clean steps: convert each branch to its admittance <i>Y</i> = 1/<i>Z</i>, add the admittances as complex numbers, and invert the result.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'formula',
        kicker: 'Admittance and its components',
        main: 'For a branch with impedance <i>Z</i> = <i>R</i> + <i>jX</i>:<br><i>Y</i> = 1/<i>Z</i> = (<i>R</i> − <i>jX</i>)/(<i>R</i><sup>2</sup> + <i>X</i><sup>2</sup>) = <i>G</i> + <i>jB</i>',
        legend: [
          '<i>G</i> = conductance (real part, power-dissipating), <i>R</i>/|<i>Z</i>|<sup>2</sup>',
          '<i>B</i> = susceptance (imaginary part, energy-storing), −<i>X</i>/|<i>Z</i>|<sup>2</sup>',
        ],
        note: 'The SI unit of <i>Y</i> is the siemens (S = Ω<sup>−1</sup>).',
      },
      {
        t: 'p',
        html: '<b>Sign convention for susceptance.</b> Write a branch as <i>Z</i> = <i>R</i> + <i>jX</i>, where <i>X</i> = <i>X</i><sub>L</sub> − <i>X</i><sub>C</sub> is its net reactance. A pure inductor has <i>X</i> = +<i>ωL</i> > 0, so <i>B</i><sub>L</sub> = −<i>X</i>/|<i>Z</i>|<sup>2</sup> = −1/(<i>ωL</i>) < 0: inductive susceptance is <b>negative</b>. A pure capacitor has <i>X</i> = −1/(<i>ωC</i>) < 0, so <i>B</i><sub>C</sub> = +<i>ωC</i> > 0: capacitive susceptance is <b>positive</b>. This matches the sign convention of the phase angle: a negative net susceptance means the net current <b>lags</b> the voltage.',
      },
      {
        t: 'formula',
        kicker: 'Parallel admittance addition',
        main: 'For two branches in parallel:<br><i>Y</i><sub>eq</sub> = <i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub> = (<i>G</i><sub>1</sub> + <i>jB</i><sub>1</sub>) + (<i>G</i><sub>2</sub> + <i>jB</i><sub>2</sub>) = (<i>G</i><sub>1</sub> + <i>G</i><sub>2</sub>) + <i>j</i>(<i>B</i><sub>1</sub> + <i>B</i><sub>2</sub>)<br><i>Z</i><sub>eq</sub> = 1/<i>Y</i><sub>eq</sub> = 1/(<i>G</i><sub>eq</sub> + <i>jB</i><sub>eq</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Admittance: [<i>Y</i>] = [Ω<sup>−1</sup>] = [A V<sup>−1</sup>]. Conductance and susceptance share the same unit. Converting impedance to admittance: 1/Ω on both real and imaginary parts. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Two branches: R ∥ L',
        q: 'A 230 V (rms), 50 Hz source feeds two parallel branches: Branch 1 has <i>R</i><sub>1</sub> = 50 Ω, and Branch 2 has a pure inductor <i>L</i> = 0.16 H. Find (a) the equivalent impedance, (b) the rms line current, and (c) the overall power factor.',
        steps: [
          '<b>Step 1 — Branch admittances.</b><br><i>ω</i> = 2π × 50 = 314 rad s<sup>−1</sup>. Inductive reactance: <i>X</i><sub>L2</sub> = <i>ωL</i> = 314 × 0.16 = 50.2 Ω.<br>Branch 1 (pure resistor): <i>Y</i><sub>1</sub> = 1/50 = 0.0200 S, purely real. So <i>G</i><sub>1</sub> = 0.0200 S, <i>B</i><sub>1</sub> = 0.<br>Branch 2 (pure inductor): <i>Z</i><sub>2</sub> = <i>jX</i><sub>L2</sub> = <i>j</i>50.2 Ω, so |<i>Z</i><sub>2</sub>|<sup>2</sup> = (50.2)<sup>2</sup> = 2520 Ω<sup>2</sup>.<br><i>Y</i><sub>2</sub> = −<i>j</i>50.2/2520 = 0 − <i>j</i>0.01992 S<br>So <i>G</i><sub>2</sub> = 0, <i>B</i><sub>2</sub> = −0.01992 S.',
          '<b>Step 2 — Total admittance.</b><br><i>Y</i><sub>eq</sub> = (0.0200 + 0) + <i>j</i>(0 − 0.01992) = 0.0200 − <i>j</i>0.01992 S',
          '<b>Step 3 — Equivalent impedance.</b><br>|<i>Y</i><sub>eq</sub>| = √((0.0200)<sup>2</sup> + (0.01992)<sup>2</sup>) = 0.02823 S<br>|<i>Z</i><sub>eq</sub>| = 1/|<i>Y</i><sub>eq</sub>| = 1/0.02823 = 35.4 Ω<br>Phase of <i>Y</i>: <i>θ</i><sub><i>Y</i></sub> = tan<sup>−1</sup>(−0.01992/0.0200) = −44.9°. Since <i>Z</i> = 1/<i>Y</i>, we have arg <i>Z</i> = −arg <i>Y</i>, so <i>Z</i><sub>eq</sub> has phase +44.9°.',
          '<b>Step 4 — Line current and power factor.</b><br><i>I</i><sub>rms</sub> = <i>V</i><sub>rms</sub>/|<i>Z</i><sub>eq</sub>| = <i>V</i><sub>rms</sub>|<i>Y</i><sub>eq</sub>| = 230 × 0.02823 = 6.49 A<br>Phase of current relative to voltage: −44.9° (current <b>lags</b> by 44.9°). So power factor = cos 44.9° = 0.708 (lagging).',
          '<b>Check.</b> Net susceptance is negative → net current lags → lagging PF. Correct. The branch currents: <i>I</i><sub>1</sub> = 230/50 = 4.60 A (in phase with <i>V</i>); <i>I</i><sub>2</sub> = 230/50.2 = 4.58 A (lags <i>V</i> by 90°). Phasor sum: <i>I</i><sub>total</sub><sup>2</sup> = (4.60)<sup>2</sup> + (4.58)<sup>2</sup> = 42.1, so <i>I</i><sub>total</sub> = 6.49 A, in agreement with Step 4.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Two reactive branches',
        q: 'Two parallel branches are driven by <i>v</i> = 100 sin(100<i>t</i>) V. Branch 1: <i>R</i> = 30 Ω in series with <i>L</i> = 0.40 H. Branch 2: <i>R</i> = 30 Ω in series with <i>C</i> = 100 μF. Find (a) the total line current, (b) the equivalent impedance, and (c) the real power dissipated.',
        steps: [
          '<b>Step 1 — Angular frequency and reactances.</b><br><i>ω</i> = 100 rad s<sup>−1</sup>.<br><i>X</i><sub>L1</sub> = <i>ωL</i> = 100 × 0.40 = 40 Ω. <i>X</i><sub>C2</sub> = 1/(<i>ωC</i>) = 1/(100 × 100 × 10<sup>−6</sup>) = 100 Ω.',
          '<b>Step 2 — Branch impedances.</b><br><i>Z</i><sub>1</sub> = 30 + <i>j</i>40 Ω, so |<i>Z</i><sub>1</sub>| = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 Ω. <i>Z</i><sub>2</sub> = 30 − <i>j</i>100 Ω, so |<i>Z</i><sub>2</sub>| = √(30<sup>2</sup> + 100<sup>2</sup>) = 104.4 Ω.',
          '<b>Step 3 — Branch admittances.</b><br><i>Y</i><sub>1</sub> = 1/(50∠53.1°) = 0.0200∠−53.1° = 0.0120 − <i>j</i>0.0160 S<br><i>Y</i><sub>2</sub> = 1/(104.4∠−73.3°) = 0.009578∠+73.3° = 0.002752 + <i>j</i>0.009174 S',
          '<b>Step 4 — Total admittance.</b><br><i>Y</i><sub>eq</sub> = (0.012000 + 0.002752) + <i>j</i>(−0.016000 + 0.009174) = 0.014752 − <i>j</i>0.006826 S<br>|<i>Y</i><sub>eq</sub>| = √((0.014752)<sup>2</sup> + (0.006826)<sup>2</sup>) = 0.016255 S',
          '<b>Step 5 — (a) Total current.</b><br><i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>|<i>Y</i><sub>eq</sub>| = 100 × 0.016255 = 1.625 A (peak)<br><i>I</i><sub>rms</sub> = 1.625/√2 = 1.15 A<br>Phase of current: tan<sup>−1</sup>(−0.006826/0.014752) = −24.8° (current <b>lags</b> by 24.8°).',
          '<b>Alternative phasor route (for verification).</b> Branch currents as phasors: <i>I</i><sub>1</sub> = 100/50∠−53.1° = 2.0∠−53.1° A; <i>I</i><sub>2</sub> = 100/104.4∠+73.3° = 0.958∠+73.3° A. Converting to rectangular: <i>I</i><sub>1</sub> = 1.200 − <i>j</i>1.600 A; <i>I</i><sub>2</sub> = 0.275 + <i>j</i>0.917 A. Adding: <i>I</i><sub>total</sub> = 1.475 − <i>j</i>0.683 A; |<i>I</i>| = √(1.475<sup>2</sup> + 0.683<sup>2</sup>) = 1.625 A peak, as before.',
          '<b>Step 6 — (b) Equivalent impedance.</b><br><i>Z</i><sub>eq</sub> = 1/(0.014752 − <i>j</i>0.006826) = (0.014752 + <i>j</i>0.006826)/(0.014752<sup>2</sup> + 0.006826<sup>2</sup>) = (0.014752 + <i>j</i>0.006826)/0.00026421 = 55.8 + <i>j</i>25.8 Ω<br>|<i>Z</i><sub>eq</sub>| = √(55.8<sup>2</sup> + 25.8<sup>2</sup>) = 61.5 Ω',
          '<b>Step 7 — (c) Real power.</b><br><i>P</i> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i> = (100/√2) × (1.625/√2) × cos(−24.8°) = 50 × 1.625 × 0.908 = 73.8 W',
          '<b>Check.</b> Only the conductance dissipates power, so <i>P</i> = <i>V</i><sub>rms</sub><sup>2</sup><i>G</i><sub>eq</sub> = (100/√2)<sup>2</sup> × 0.014752 = 5000 × 0.014752 = 73.8 W.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two resistors <i>R</i><sub>1</sub> = 40 Ω and <i>R</i><sub>2</sub> = 60 Ω are connected in parallel across 200 V (rms). Find the equivalent resistance and the total current.',
            a: '<i>R</i><sub>eq</sub> = (40 × 60)/(40 + 60) = 24 Ω. <i>I</i> = 200/24 = 8.33 A.',
          },
          {
            q: '[JEE Main] A resistor <i>R</i> = 80 Ω is in parallel with a capacitor <i>C</i> = 50 μF at <i>ω</i> = 200 rad s<sup>−1</sup>. Find the equivalent impedance and the phase angle of the line current.',
            a: '<i>X</i><sub>C</sub> = 1/(200 × 50 × 10<sup>−6</sup>) = 100 Ω. <i>Y</i><sub>1</sub> = 1/80 = 0.0125 S; <i>Y</i><sub>2</sub> = <i>j</i>0.01 S. <i>Y</i><sub>eq</sub> = 0.0125 + <i>j</i>0.01 S; |<i>Y</i>| = 0.0160 S; <i>Z</i><sub>eq</sub> = 62.5 Ω; phase of <i>I</i> = tan<sup>−1</sup>(0.01/0.0125) = +38.7° (current <b>leads</b> voltage by 38.7°; capacitive dominates).',
          },
          {
            q: '[JEE Main] A branch with <i>R</i> = 10 Ω and <i>X</i><sub>L</sub> = 10 Ω is in parallel with a branch with <i>R</i> = 10 Ω and <i>X</i><sub>C</sub> = 10 Ω. Show that the equivalent impedance is purely resistive and find its value.',
            a: '<i>Z</i><sub>1</sub> = 10 + <i>j</i>10 Ω, <i>Z</i><sub>2</sub> = 10 − <i>j</i>10 Ω. <i>Y</i><sub>1</sub> = (10 − <i>j</i>10)/200 = 0.05 − <i>j</i>0.05 S; <i>Y</i><sub>2</sub> = (10 + <i>j</i>10)/200 = 0.05 + <i>j</i>0.05 S. <i>Y</i><sub>eq</sub> = 0.10 S. <i>Z</i><sub>eq</sub> = 10 Ω (purely resistive). The reactive parts cancel exactly.',
          },
          {
            q: '[JEE Advanced] Three parallel branches are fed by <i>v</i> = 220√2 sin(314<i>t</i>) V: Branch 1: <i>R</i> = 44 Ω; Branch 2: <i>L</i> = 0.10 H; Branch 3: <i>C</i> = 100 μF. Find the total rms current and the overall power factor.',
            a: '<i>ω</i> = 314 rad s<sup>−1</sup>. <i>X</i><sub>L2</sub> = 314 × 0.10 = 31.4 Ω, <i>X</i><sub>C3</sub> = 1/(314 × 100 × 10<sup>−6</sup>) = 31.8 Ω. <i>Y</i><sub>1</sub> = 1/44 = 0.02273 S; <i>Y</i><sub>2</sub> = −<i>j</i>0.03185 S; <i>Y</i><sub>3</sub> = +<i>jωC</i> = +<i>j</i>0.03140 S. <i>Y</i><sub>eq</sub> = 0.02273 − <i>j</i>0.00045 S ≈ 0.02273 S. |<i>I</i><sub>rms</sub>| = 220 × 0.02273 = 5.00 A. PF ≈ 1.0 (practically unity, since <i>X</i><sub>L2</sub> ≈ <i>X</i><sub>C3</sub> at 50 Hz).',
          },
        ],
      },
    ],
  },
];
