import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Additional Topics B to D, word for word from the Class 12
 * Physics Master Reference: B The Quantum Efficiency Chain (pp. 747 to 751;
 * it opens mid p. 747 after Addendum A's answers, and its last practice
 * answers sit at the top of p. 751), C Threshold-Energy Problems and
 * Simultaneous Equations (pp. 751 to 755) and D Heisenberg's Uncertainty
 * Principle: Quantitative Problems (pp. 756 to 759, the chapter's last page).
 * Each addendum prints its own practice problems and answers, which are its
 * Practice part. These pages print no drawings: every equation is typeset.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic B · pp. 747–751 ─────────────────────────
  {
    n: 'B',
    title: 'The Quantum Efficiency Chain',
    extra: true,
    kalam: 'In reality, only a fraction of incident photons eject electrons; this fraction is the quantum efficiency η < 1.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter shows photon rate <i>n</i><sub>ph</sub> = <i>P</i>/(<i>hν</i>) and mostly assumes “every incident photon ejects one electron” (worked example 4 of Topic 02 is the exception, with 0.10%). In reality, only a fraction of incident photons eject electrons; this fraction is the quantum efficiency <i>η</i> < 1. The rest of the photon energy is reflected or lost as heat. JEE Advanced constructs multi-step problems that require chaining these efficiencies together correctly.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The full photon-to-current chain',
        steps: [
          '<b>Incident photon rate.</b> For a monochromatic beam of power <i>P</i> and photon energy <i>hν</i>:<br><i>n</i><sub>inc</sub> = <i>P</i>/(<i>hν</i>) in s<sup>−1</sup>.',
          '<b>Photons absorbed per second.</b> If the surface absorbs a fraction <i>A</i> (absorptivity, dimensionless) of the incident photons:<br><i>n</i><sub>abs</sub> = <i>An</i><sub>inc</sub>.',
          '<b>Photoelectrons emitted per second.</b> Only photons with <i>hν</i> > <i>φ</i><sub>0</sub> contribute. With quantum efficiency <i>η</i> ≤ <i>A</i>:<br><i>n</i><sub>e</sub> = <i>ηP</i>/(<i>hν</i>) for <i>hν</i> > <i>φ</i><sub>0</sub>, and <i>n</i><sub>e</sub> = 0 otherwise.',
          '<b>Saturation current.</b> Each emitted electron carries charge <i>e</i>:<br><i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i> = <i>ηPe</i>/(<i>hν</i>).',
          '<b>Maximum kinetic energy.</b> Independent of intensity and quantum efficiency:<br><i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>, <i>v</i><sub>max</sub> = √(2(<i>hν</i> − <i>φ</i><sub>0</sub>)/<i>m</i><sub>e</sub>).',
          '<b>Stopping potential.</b> <i>eV</i><sub>0</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>n</i><sub>inc</sub> = <i>P</i>/(<i>hν</i>): <i>P</i> in W = J/s, <i>hν</i> in J, so <i>n</i><sub>inc</sub> in s<sup>−1</sup>. Correct. <i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i>: s<sup>−1</sup> × C = C/s = A. Correct.',
      },
      {
        t: 'p',
        html: '<b>The key principle:</b> <i>K</i><sub>max</sub>, <i>v</i><sub>max</sub>, and <i>V</i><sub>0</sub> are determined solely by frequency (and the metal’s work function) — intensity and quantum efficiency affect only the current, never the electron energy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Quantum Efficiency Chain',
        q: 'Light of wavelength 400 nm and power 10 mW falls on a caesium surface (<i>φ</i><sub>0</sub> = 1.9 eV). The quantum efficiency for photoelectric emission at this wavelength is 5 × 10<sup>−3</sup> (i.e., only 0.5% of incident photons produce emitted electrons). The remaining photon energy is absorbed as heat.<br>(a) How many photons strike the surface per second?<br>(b) How many photoelectrons are emitted per second?<br>(c) What is the saturation photocurrent?<br>(d) What is the maximum speed of the emitted electrons?<br>(e) What stopping potential would arrest the fastest electron?',
        steps: [
          '<b>Given:</b> <i>λ</i> = 400 nm, <i>P</i> = 10 mW, <i>φ</i><sub>0</sub> = 1.9 eV, <i>η</i> = 0.005.',
          '<b>Step 1 — Photon energy.</b> Using <i>hc</i> = 1240 eV·nm:<br><i>hν</i> = 1240/400 = 3.10 eV.',
          '<b>Step 2 — Incident photon rate.</b><br><i>n</i><sub>inc</sub> = <i>P</i>/(<i>hν</i>) = (10 × 10<sup>−3</sup> W)/(3.10 × 1.60 × 10<sup>−19</sup> J) = (1.0 × 10<sup>−2</sup>)/(4.96 × 10<sup>−19</sup>) = 2.02 × 10<sup>16</sup> s<sup>−1</sup>.',
          '<b>Step 3 — Emitted electron rate (with quantum efficiency).</b><br><i>n</i><sub>e</sub> = <i>η</i> <i>n</i><sub>inc</sub> = 0.005 × 2.02 × 10<sup>16</sup> = 1.01 × 10<sup>14</sup> s<sup>−1</sup>.',
          '<b>Step 4 — Saturation current.</b><br><i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i> = (1.008 × 10<sup>14</sup>)(1.60 × 10<sup>−19</sup>) = 1.61 × 10<sup>−5</sup> A = 16.1 μA.',
          '<b>Step 5 — Maximum kinetic energy.</b> This does NOT depend on <i>η</i> or <i>P</i>:<br><i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> = 3.10 − 1.90 = 1.20 eV = 1.20 × 1.60 × 10<sup>−19</sup> = 1.92 × 10<sup>−19</sup> J.',
          '<b>Step 6 — Maximum speed.</b><br><i>v</i><sub>max</sub> = √(2<i>K</i><sub>max</sub>/<i>m</i><sub>e</sub>) = √(2(1.92 × 10<sup>−19</sup>)/(9.11 × 10<sup>−31</sup>)) = √(4.21 × 10<sup>11</sup>) = 6.49 × 10<sup>5</sup> m/s.',
          '<b>Step 7 — Stopping potential.</b><br><i>V</i><sub>0</sub> = <i>K</i><sub>max</sub>/<i>e</i> = 1.20 V.',
          '<b>Physical check:</b> The quantum efficiency is low, so the current is small. But the electron energy depends only on frequency, so <i>V</i><sub>0</sub> = 1.20 V is the same as if every photon produced an electron at the same wavelength. Almost all the light energy goes into heating: the electrons carry away at most <i>n</i><sub>e</sub><i>K</i><sub>max</sub> ≈ 1.9 × 10<sup>−5</sup> W, so about 9.98 mW is absorbed as heat (ignoring reflection).',
        ],
        ans: '(a) 2.0 × 10<sup>16</sup> photons/s; (b) 1.0 × 10<sup>14</sup> electrons/s; (c) 16.1 μA; (d) 6.5 × 10<sup>5</sup> m/s; (e) 1.20 V.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Comparative Efficiency at Two Wavelengths',
        q: 'Light of the same total power <i>P</i> but two different wavelengths — 300 nm and 600 nm — falls on the same metal. Compare the saturation photocurrents at the two wavelengths, given that the quantum efficiency falls exponentially with wavelength, <i>η</i> ∝ <i>e</i><sup>−<i>αλ</i></sup>, where <i>α</i> is a constant.',
        steps: [
          'Let <i>η</i><sub>1</sub> and <i>η</i><sub>2</sub> be the quantum efficiencies at <i>λ</i><sub>1</sub> = 300 nm and <i>λ</i><sub>2</sub> = 600 nm respectively. Since <i>η</i> ∝ <i>e</i><sup>−<i>αλ</i></sup>:<br><i>η</i><sub>2</sub>/<i>η</i><sub>1</sub> = <i>e</i><sup>−<i>α</i>(600)</sup>/<i>e</i><sup>−<i>α</i>(300)</sup> = <i>e</i><sup>−300<i>α</i></sup>.',
          'The photon energies are:<br><i>hν</i><sub>1</sub> = 1240/300 = 4.13 eV, <i>hν</i><sub>2</sub> = 1240/600 = 2.07 eV.',
          'Assuming both are above threshold, the saturation currents are:<br><i>i</i><sub>sat,1</sub> = <i>η</i><sub>1</sub><i>Pe</i>/(<i>hν</i><sub>1</sub>), <i>i</i><sub>sat,2</sub> = <i>η</i><sub>2</sub><i>Pe</i>/(<i>hν</i><sub>2</sub>).',
          'Taking the ratio:<br><i>i</i><sub>sat,1</sub>/<i>i</i><sub>sat,2</sub> = (<i>η</i><sub>1</sub>/<i>η</i><sub>2</sub>) · (<i>hν</i><sub>2</sub>/<i>hν</i><sub>1</sub>) = <i>e</i><sup>300<i>α</i></sup> · (2.07/4.13) = <i>e</i><sup>300<i>α</i></sup> × 0.501.',
          'Take, for illustration, <i>α</i> ≈ 10<sup>7</sup> m<sup>−1</sup>. With <i>λ</i> also in metres, 300 nm = 3 × 10<sup>−7</sup> m, so <i>αλ</i>|<sub>300</sub> = 3, and <i>e</i><sup>3</sup> × 0.501 ≈ 20.1 × 0.501 = 10.1.',
          'Thus <i>i</i><sub>sat,1</sub> ≈ 10 <i>i</i><sub>sat,2</sub> at 300 nm — the shorter wavelength gives more current even though each photon is more energetic (fewer photons per watt, factor 0.501), because the quantum efficiency is much higher (factor <i>e</i><sup>3</sup> ≈ 20.1).',
        ],
        ans: 'The ratio is <i>e</i><sup>300<i>α</i></sup> × (2.07/4.13); with typical values the 300 nm light produces roughly 10 times the photocurrent of the 600 nm light of the same power.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] A 5 mW laser of wavelength 532 nm strikes a sodium surface (<i>φ</i><sub>0</sub> = 2.3 eV) with quantum efficiency <i>η</i> = 0.01. Find the saturation photocurrent and stopping potential.',
            a: '<i>hν</i> = 1240/532 = 2.33 eV. <i>K</i><sub>max</sub> = 2.33 − 2.3 = 0.03 eV (very small — near threshold). <i>n</i><sub>inc</sub> = <i>P</i>/(<i>hν</i>) = 5 × 10<sup>−3</sup>/(2.33 × 1.6 × 10<sup>−19</sup>) = 1.34 × 10<sup>16</sup> s<sup>−1</sup>. <i>n</i><sub>e</sub> = 0.01 × 1.34 × 10<sup>16</sup> = 1.34 × 10<sup>14</sup> s<sup>−1</sup>. <i>i</i><sub>sat</sub> = 1.341 × 10<sup>14</sup> × 1.6 × 10<sup>−19</sup> = 2.15 × 10<sup>−5</sup> A = 21.5 μA. <i>V</i><sub>0</sub> = 0.03 V.',
          },
          {
            q: '[JEE Advanced] Two light sources of the same power 1 W emit at 400 nm and 600 nm respectively. If the quantum efficiency is the same for both, what is the ratio of their saturation photocurrents (assume both wavelengths are above the metal’s threshold)? Explain the result using <i>n</i><sub>inc</sub> = <i>Pλ</i>/(<i>hc</i>).',
            a: '<i>i</i><sub>sat</sub> ∝ <i>ηPλ</i>/(<i>hc</i>). With same <i>η</i> and <i>P</i>: ratio = <i>λ</i><sub>2</sub>/<i>λ</i><sub>1</sub> = 600/400 = 1.5. The 600 nm light produces 1.5 times the current: at fixed power each 600 nm photon has less energy, so more photons arrive per second: the rate <i>P</i>/(<i>hν</i>) ∝ <i>Pλ</i>. With equal <i>η</i> and <i>P</i>, the saturation current is therefore proportional to <i>λ</i>, giving ratio = 600/400 = 1.5.',
          },
          {
            q: '[JEE Main] Light of wavelength 500 nm and power 1 mW falls on a metal. The saturation photocurrent is 0.5 μA. Find the quantum efficiency of the surface.',
            a: '<i>i</i><sub>sat</sub> = 0.5 × 10<sup>−6</sup> A. <i>n</i><sub>e</sub> = <i>i</i><sub>sat</sub>/<i>e</i> = 0.5 × 10<sup>−6</sup>/(1.6 × 10<sup>−19</sup>) = 3.125 × 10<sup>12</sup> s<sup>−1</sup>. <i>hν</i> = 1240/500 = 2.48 eV. <i>n</i><sub>inc</sub> = <i>Pλ</i>/(<i>hc</i>) = 10<sup>−3</sup> × 500 × 10<sup>−9</sup>/(6.63 × 10<sup>−34</sup> × 3 × 10<sup>8</sup>) = 2.51 × 10<sup>15</sup> s<sup>−1</sup> (or <i>P</i>/(<i>hν</i>) = 10<sup>−3</sup>/(2.48 × 1.6 × 10<sup>−19</sup>) = 2.52 × 10<sup>15</sup> s<sup>−1</sup>). <i>η</i> = <i>n</i><sub>e</sub>/<i>n</i><sub>inc</sub> = 3.125 × 10<sup>12</sup>/(2.52 × 10<sup>15</sup>) = 1.24 × 10<sup>−3</sup> = 0.124%.',
          },
          {
            q: '[JEE Advanced] A photocell is illuminated by two light sources simultaneously: source A (400 nm, 1 mW) and source B (600 nm, 2 mW). The quantum efficiency is 0.02 at 400 nm and 0.05 at 600 nm. Find the total saturation current (both wavelengths are above the threshold of the photocell’s surface).',
            a: 'Source A: <i>hν</i><sub>A</sub> = 3.10 eV, <i>n</i><sub>inc,A</sub> = <i>P</i><sub>A</sub>/(<i>hν</i><sub>A</sub>) = 10<sup>−3</sup>/(3.10 × 1.6 × 10<sup>−19</sup>) = 2.02 × 10<sup>15</sup> s<sup>−1</sup>, <i>n</i><sub>e,A</sub> = 0.02 × 2.02 × 10<sup>15</sup> = 4.04 × 10<sup>13</sup> s<sup>−1</sup>. Source B: <i>hν</i><sub>B</sub> = 2.07 eV, <i>n</i><sub>inc,B</sub> = 2 × 10<sup>−3</sup>/(2.07 × 1.6 × 10<sup>−19</sup>) = 6.04 × 10<sup>15</sup> s<sup>−1</sup>, <i>n</i><sub>e,B</sub> = 0.05 × 6.04 × 10<sup>15</sup> = 3.02 × 10<sup>14</sup> s<sup>−1</sup>. Total <i>n</i><sub>e</sub> = 4.04 × 10<sup>13</sup> + 3.02 × 10<sup>14</sup> = 3.42 × 10<sup>14</sup> s<sup>−1</sup>. <i>i</i><sub>sat</sub> = 3.42 × 10<sup>14</sup> × 1.6 × 10<sup>−19</sup> = 5.5 × 10<sup>−5</sup> A = 55 μA.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 751–755 ─────────────────────────
  {
    n: 'C',
    title: 'Threshold-Energy Problems and Simultaneous Equations',
    extra: true,
    kalam: 'The method is simultaneous equations — but the algebra has traps with units and signs.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> and <i>V</i><sub>0</sub> = (<i>hν</i> − <i>φ</i><sub>0</sub>)/<i>e</i>. Many JEE problems give you two data points involving <i>V</i><sub>0</sub> or <i>K</i><sub>max</sub> at different frequencies, or the ratio of some quantity at two wavelengths, and ask you to find <i>h</i>, <i>φ</i><sub>0</sub>, or <i>ν</i><sub>0</sub>. The method is simultaneous equations — but the algebra has traps with units and signs.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Systematic procedure for two-wavelength problems.</b> Given the stopping potential (or maximum KE) at two different wavelengths <i>λ</i><sub>1</sub>, <i>λ</i><sub>2</sub> or two different frequencies <i>ν</i><sub>1</sub>, <i>ν</i><sub>2</sub>, find <i>h</i> and <i>φ</i><sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Write Einstein’s equation at each wavelength:</b><br><i>eV</i><sub>0,1</sub> = <i>hν</i><sub>1</sub> − <i>φ</i><sub>0</sub>, <i>eV</i><sub>0,2</sub> = <i>hν</i><sub>2</sub> − <i>φ</i><sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Express everything in consistent units.</b> You may work entirely in eV and eV·s, using <i>hν</i> = <i>hc</i>/<i>λ</i> = 1240/<i>λ</i>(nm) eV. Then <i>h</i> is in eV·s.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Subtract to eliminate <i>φ</i><sub>0</sub>:</b><br><i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) = <i>h</i>(<i>ν</i><sub>1</sub> − <i>ν</i><sub>2</sub>).<br>Solve for <i>h</i>:<br><i>h</i> = <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>)/(<i>ν</i><sub>1</sub> − <i>ν</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Back-substitute into either equation to find <i>φ</i><sub>0</sub>:</b><br><i>φ</i><sub>0</sub> = <i>hν</i><sub>1</sub> − <i>eV</i><sub>0,1</sub>.',
      },
      {
        t: 'p',
        html: '<b>Alternative using wavelengths.</b> Write <i>hν</i> = <i>hc</i>/<i>λ</i>:<br><i>eV</i><sub>0,1</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>φ</i><sub>0</sub>, <i>eV</i><sub>0,2</sub> = <i>hc</i>/<i>λ</i><sub>2</sub> − <i>φ</i><sub>0</sub>.<br>Subtract:<br><i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) = <i>hc</i>(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>).<br>Solve for <i>hc</i> (or <i>h</i>):<br><i>hc</i> = <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>)/(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Units:</b> <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) in C·V = J. (1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>) in m<sup>−1</sup>. So <i>hc</i> in J·m. Correct.',
      },
      {
        t: 'p',
        html: '<b>The sign convention.</b> <i>V</i><sub>0</sub> is defined positive when it stops the most energetic electrons. In <i>eV</i><sub>0</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>, <i>e</i> and <i>V</i><sub>0</sub> are both positive for emission above threshold. If <i>hν</i> < <i>φ</i><sub>0</sub> (<i>ν</i> < <i>ν</i><sub>0</sub>), no emission occurs, so there is no stopping potential to measure; a stopping potential is never negative.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Finding h and φ0 from Two Wavelengths',
        q: 'In a photoelectric experiment, light of wavelength 200 nm gives a stopping potential of 3.90 V, and light of wavelength 300 nm gives a stopping potential of 1.83 V, on the same metal. Find (a) Planck’s constant and (b) the work function of the metal.',
        steps: [
          '<b>Given:</b> <i>λ</i><sub>1</sub> = 200 nm, <i>V</i><sub>0,1</sub> = 3.90 V; <i>λ</i><sub>2</sub> = 300 nm, <i>V</i><sub>0,2</sub> = 1.83 V.',
          '<b>Step 1 — Write the two equations (in eV units).</b> Using <i>hc</i> = 1240 eV·nm:<br><i>eV</i><sub>0,1</sub> = 1240/<i>λ</i><sub>1</sub> − <i>φ</i><sub>0</sub> ⇒ 1 × 3.90 = 1240/200 − <i>φ</i><sub>0</sub>.<br><i>eV</i><sub>0,2</sub> = 1240/<i>λ</i><sub>2</sub> − <i>φ</i><sub>0</sub> ⇒ 1 × 1.83 = 1240/300 − <i>φ</i><sub>0</sub>.',
          'Compute the photon energies:<br>1240/200 = 6.20 eV, 1240/300 = 4.13 eV.',
          'So:<br>3.90 = 6.20 − <i>φ</i><sub>0</sub> ⇒ <i>φ</i><sub>0</sub> = 6.20 − 3.90 = 2.30 eV.<br>1.83 = 4.13 − <i>φ</i><sub>0</sub> ⇒ <i>φ</i><sub>0</sub> = 4.13 − 1.83 = 2.30 eV.',
          'Both equations give the same <i>φ</i><sub>0</sub> = 2.30 eV, so the two data points are consistent with <i>hc</i> = 1240 eV·nm. Subtracting the two equations also gives <i>h</i> directly from the data, as follows.',
          '<b>Step 2 — Subtract to find <i>h</i> (using the subtraction method exactly).</b><br><i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) = <i>hc</i>(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>).<br>1.60 × 10<sup>−19</sup>(3.90 − 1.83) = <i>h</i> × (3.00 × 10<sup>8</sup>) × (1/(200 × 10<sup>−9</sup>) − 1/(300 × 10<sup>−9</sup>)).',
          'Left side: 1.60 × 10<sup>−19</sup> × 2.07 = 3.31 × 10<sup>−19</sup> J.<br>Right side: (1/(200 × 10<sup>−9</sup>) − 1/(300 × 10<sup>−9</sup>)) = (5.0 − 3.333) × 10<sup>6</sup> = 1.667 × 10<sup>6</sup> m<sup>−1</sup>.',
          'So:<br>3.31 × 10<sup>−19</sup> = <i>h</i> × (3.00 × 10<sup>8</sup>) × (1.667 × 10<sup>6</sup>) = <i>h</i> × 5.00 × 10<sup>14</sup>.<br><i>h</i> = (3.31 × 10<sup>−19</sup>)/(5.00 × 10<sup>14</sup>) = 6.62 × 10<sup>−34</sup> J·s.',
          'This agrees with the standard value 6.63 × 10<sup>−34</sup> J·s. Using the subtraction result:<br><i>h</i> = 6.62 × 10<sup>−34</sup> J·s.',
          '<b>Step 3 — Back-substitute to find <i>φ</i><sub>0</sub>.</b> Using the first equation:<br><i>φ</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>eV</i><sub>0,1</sub> = (6.62 × 10<sup>−34</sup>)(3.00 × 10<sup>8</sup>)/(200 × 10<sup>−9</sup>) − (1.60 × 10<sup>−19</sup>)(3.90).<br>First term: (1.986 × 10<sup>−25</sup>)/(2.00 × 10<sup>−7</sup>) = 9.93 × 10<sup>−19</sup> J = 6.21 eV.<br>Second term: 6.24 × 10<sup>−19</sup> J = 3.90 eV.<br><i>φ</i><sub>0</sub> = 6.21 − 3.90 = 2.31 eV.',
          'Check with the second equation:<br><i>φ</i><sub>0</sub> = (1.986 × 10<sup>−25</sup>)/(300 × 10<sup>−9</sup>) − (1.60 × 10<sup>−19</sup>)(1.83) = 6.62 × 10<sup>−19</sup> − 2.93 × 10<sup>−19</sup> = 3.69 × 10<sup>−19</sup> J = 2.31 eV.<br>Consistent.',
        ],
        ans: '(a) <i>h</i> = 6.62 × 10<sup>−34</sup> J·s; (b) <i>φ</i><sub>0</sub> ≈ 2.3 eV.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Three-Wavelength Problem',
        q: 'In a photoelectric experiment on a metal M, the stopping potentials are:<br>• <i>V</i><sub>1</sub> = 1.85 V at <i>λ</i><sub>1</sub> = 300 nm<br>• <i>V</i><sub>2</sub> = 0.82 V at <i>λ</i><sub>2</sub> = 400 nm<br>• No emission at <i>λ</i><sub>3</sub> = 600 nm<br>Find (a) the work function of M, (b) the threshold wavelength, and (c) Planck’s constant from these data.',
        steps: [
          '<b>Part (a) — Work function.</b> From the “no emission” at <i>λ</i><sub>3</sub> = 600 nm, we know <i>hν</i><sub>3</sub> < <i>φ</i><sub>0</sub>, i.e., <i>φ</i><sub>0</sub> > <i>hc</i>/600. This is a bound, not a value yet.',
          'Using the two active wavelengths:<br><i>eV</i><sub>1</sub> = <i>hc</i>/300 − <i>φ</i><sub>0</sub>, <i>eV</i><sub>2</sub> = <i>hc</i>/400 − <i>φ</i><sub>0</sub>.<br>Subtracting (with <i>hc</i> in eV·nm for now):<br><i>hc</i>/300 − <i>hc</i>/400 = <i>e</i>(<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>).<br><i>hc</i>/1200 = 1.85 − 0.82 = 1.03 eV.<br><i>hc</i> = 1.03 × 1200 = 1236 eV·nm ≈ 1240 eV·nm.',
          'This agrees with the standard value, so we take <i>hc</i> = 1240 eV·nm:<br>From <i>eV</i><sub>1</sub> = <i>hc</i>/300 − <i>φ</i><sub>0</sub>:<br>1.85 = 1240/300 − <i>φ</i><sub>0</sub> = 4.13 − <i>φ</i><sub>0</sub>.<br><i>φ</i><sub>0</sub> = 4.13 − 1.85 = 2.28 eV.',
          '<b>Part (b) — Threshold wavelength.</b><br><i>λ</i><sub>0</sub> = <i>hc</i>/<i>φ</i><sub>0</sub> = 1240/2.28 = 544 nm.<br>This is consistent with “no emission at 600 nm”: since 600 nm > <i>λ</i><sub>0</sub> = 544 nm, a photon of wavelength 600 nm has energy <i>hc</i>/600 = 1240/600 = 2.07 eV, below <i>φ</i><sub>0</sub> = 2.28 eV, so no electron is emitted.',
          '<b>Part (c) — Planck’s constant.</b><br><i>h</i> = <i>hc</i>/<i>c</i> = (1236 eV·nm × 1.60 × 10<sup>−19</sup> J/eV)/(3.00 × 10<sup>8</sup> m/s × 10<sup>9</sup> nm/m)<br>= (1.98 × 10<sup>−16</sup>)/(3.00 × 10<sup>17</sup>) = 6.59 × 10<sup>−34</sup> J·s.<br>This is within 1% of the standard value 6.63 × 10<sup>−34</sup> J·s.',
        ],
        ans: '(a) <i>φ</i><sub>0</sub> = 2.28 eV; (b) <i>λ</i><sub>0</sub> ≈ 544 nm; (c) <i>h</i> = 6.59 × 10<sup>−34</sup> J·s (from these data).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] The stopping potential for 400 nm light on a metal is 1.5 V, and for 500 nm it is 0.88 V. Find the threshold wavelength.',
            a: 'This is a two-equation, two-unknown system — solve for the product <i>hc</i> and the work function <i>φ</i><sub>0</sub> directly from the given data, rather than assuming a textbook value of <i>hc</i>. Using <i>V</i><sub>0</sub> = <i>hc</i>/(<i>eλ</i>) − <i>φ</i><sub>0</sub>/<i>e</i> at the two given points, <i>λ</i><sub>1</sub> = 400 nm (<i>V</i><sub>1</sub> = 1.5 V) and <i>λ</i><sub>2</sub> = 500 nm (<i>V</i><sub>2</sub> = 0.88 V):<br><i>V</i><sub>1</sub> − <i>V</i><sub>2</sub> = <i>hc</i>(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>) ⇒ 0.62 = <i>hc</i>(1/400 − 1/500) = <i>hc</i>/2000 ⇒ <i>hc</i> = 1240 eV·nm.<br>Then <i>φ</i><sub>0</sub>/<i>e</i> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>V</i><sub>1</sub> = 1240/400 − 1.5 = 1.60 V, and<br><i>λ</i><sub>0</sub> = <i>hc</i>/<i>φ</i><sub>0</sub> = 1240/1.60 = 775 nm.',
          },
          {
            q: '[JEE Main] In a photoelectric experiment, when the frequency of light is raised from <i>ν</i> to 1.5<i>ν</i>, the stopping potential doubles. Find the ratio <i>ν</i><sub>0</sub>/<i>ν</i>.',
            a: 'Let the original frequency be <i>ν</i>, so <i>V</i><sub>0</sub> = <i>hν</i>/<i>e</i> − <i>φ</i><sub>0</sub>/<i>e</i>. At the new frequency 1.5<i>ν</i>: <i>V</i><sub>0</sub>′ = 1.5<i>hν</i>/<i>e</i> − <i>φ</i><sub>0</sub>/<i>e</i>. Given <i>V</i><sub>0</sub>′ = 2<i>V</i><sub>0</sub>: 1.5<i>hν</i> − <i>φ</i><sub>0</sub> = 2(<i>hν</i> − <i>φ</i><sub>0</sub>) = 2<i>hν</i> − 2<i>φ</i><sub>0</sub>. So <i>φ</i><sub>0</sub> = 0.5<i>hν</i>, i.e. <i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i> = 0.5<i>ν</i>. Hence <i>ν</i><sub>0</sub>/<i>ν</i> = 0.5. (Check: <i>ν</i> = 2<i>ν</i><sub>0</sub> > <i>ν</i><sub>0</sub>, so emission occurs at both frequencies.)',
          },
          {
            q: '[JEE Advanced] Light of wavelength <i>λ</i> on a metal gives stopping potential <i>V</i><sub>0</sub>. When the wavelength is changed to <i>λ</i>/2, the stopping potential triples. Find <i>λ</i> in terms of the threshold wavelength <i>λ</i><sub>0</sub>.',
            a: '<i>eV</i><sub>0</sub> = <i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>, and 3<i>eV</i><sub>0</sub> = <i>hc</i>/(<i>λ</i>/2) − <i>φ</i><sub>0</sub> = 2<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>. Substituting <i>eV</i><sub>0</sub> = <i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>: 3(<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>) = 2<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>. 3<i>hc</i>/<i>λ</i> − 3<i>φ</i><sub>0</sub> = 2<i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub> ⇒ <i>hc</i>/<i>λ</i> = 2<i>φ</i><sub>0</sub> ⇒ <i>hc</i>/<i>φ</i><sub>0</sub> = 2<i>λ</i> ⇒ <i>λ</i><sub>0</sub> = 2<i>λ</i> ⇒ <i>λ</i> = <i>λ</i><sub>0</sub>/2.',
          },
          {
            q: '[JEE Advanced] A metal has a work function of 2.0 eV. Photoelectrons are emitted when light of wavelength <i>λ</i> falls on it, and are stopped by a reverse potential of 0.5 V. Find <i>λ</i>.',
            a: '<i>eV</i><sub>0</sub> = <i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub> ⇒ 0.5 × 1.6 × 10<sup>−19</sup> = 1240 × 1.6 × 10<sup>−19</sup>/<i>λ</i> − 2.0 × 1.6 × 10<sup>−19</sup>. Divide by 1.6 × 10<sup>−19</sup>: 0.5 = 1240/<i>λ</i> − 2.0 ⇒ 1240/<i>λ</i> = 2.5 ⇒ <i>λ</i> = 1240/2.5 = 496 nm.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 756–759 ─────────────────────────
  {
    n: 'D',
    title: 'Heisenberg’s Uncertainty Principle: Quantitative Problems',
    extra: true,
    kalam: 'For an electron confined to a region of size Δx, the uncertainty in its momentum is at least Δp ≈ ħ/(2Δx).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states Δ<i>x</i> · Δ<i>p</i> ≳ <i>ħ</i>/2 (NCERT: Δ<i>x</i> · Δ<i>p</i> ≈ <i>ħ</i>) and mentions it qualitatively. JEE Advanced sets numerical problems where the uncertainty in position is given (e.g., a beam width or aperture size) and you must find the uncertainty in momentum or speed, often combining with the photoelectric or de Broglie formulas.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Quantitative uncertainty problems.</b> The Heisenberg uncertainty principle has two standard forms:<br>Δ<i>x</i> · Δ<i>p</i><sub><i>x</i></sub> ≥ <i>ħ</i>/2 (exact, with Δ<i>x</i>, Δ<i>p</i><sub><i>x</i></sub> as standard deviations).<br>Δ<i>x</i> · Δ<i>p</i><sub><i>x</i></sub> ≈ <i>ħ</i> (order-of-magnitude, used in JEE).',
      },
      {
        t: 'p',
        html: 'For an electron confined to a region of size Δ<i>x</i>, the uncertainty in its momentum is at least Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>). This means the electron cannot have zero kinetic energy — confinement produces a minimum kinetic energy (an order-of-magnitude estimate of the particle-in-a-box ground-state energy; the exact ground-state energy, <i>h</i><sup>2</sup>/(8<i>mL</i><sup>2</sup>), is about 40 times larger). For estimates this addendum, like NCERT and JEE, takes Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i>, except where the factor ½ is shown.',
      },
      {
        t: 'p',
        html: 'The minimum kinetic energy due to confinement:<br><i>K</i><sub>min</sub> ≈ (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i>) = <i>ħ</i><sup>2</sup>/(8<i>m</i>(Δ<i>x</i>)<sup>2</sup>).<br>For an electron in an atomic-scale box Δ<i>x</i> ≈ 1 Å = 10<sup>−10</sup> m:<br><i>K</i><sub>min</sub> = (1.055 × 10<sup>−34</sup>)<sup>2</sup>/(8(9.11 × 10<sup>−31</sup>)(10<sup>−10</sup>)<sup>2</sup>) = (1.11 × 10<sup>−68</sup>)/(8(9.11 × 10<sup>−31</sup>)(10<sup>−20</sup>)) = (1.11 × 10<sup>−68</sup>)/(7.29 × 10<sup>−50</sup>) = 1.52 × 10<sup>−19</sup> J = 0.95 eV.<br>This is of the order of an electron-volt, the energy scale of atomic binding.',
      },
      {
        t: 'p',
        html: '<b>Sign convention:</b> Δ<i>x</i> and Δ<i>p</i><sub><i>x</i></sub> are uncertainties (positive quantities), not signed deviations. The product is always positive.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>ħ</i> in J·s, Δ<i>x</i> in m: <i>ħ</i>/Δ<i>x</i> in J·s/m = kg·m/s = momentum. So Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i> has correct units. <i>K</i><sub>min</sub> = (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i>): (kg·m/s)<sup>2</sup>/kg = kg·m<sup>2</sup>/s<sup>2</sup> = J. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Electron Beam Through a Slit',
        q: 'A parallel beam of electrons with kinetic energy 100 eV passes through a narrow slit of width <i>d</i> = 1.0 nm. Find the angular spread of the beam after the slit.',
        steps: [
          'This combines de Broglie wavelength with the uncertainty principle.',
          '<b>Step 1 — de Broglie wavelength of the electrons.</b> Using the shortcut: <i>λ</i> = 12.27/√100 = 12.27/10 = 1.227 Å = 1.227 × 10<sup>−10</sup> m.',
          '<b>Step 2 — Uncertainty in position at the slit.</b> The slit imposes Δ<i>x</i> = <i>d</i> = 1.0 nm = 1.0 × 10<sup>−9</sup> m.',
          '<b>Step 3 — Uncertainty principle gives momentum spread.</b><br>Δ<i>p</i><sub><i>x</i></sub> ≈ <i>ħ</i>/Δ<i>x</i> = (1.055 × 10<sup>−34</sup>)/(1.0 × 10<sup>−9</sup>) = 1.055 × 10<sup>−25</sup> kg·m/s.',
          '<b>Step 4 — Relate to angular spread.</b> The electrons travel along <i>y</i> with momentum <i>p</i><sub><i>y</i></sub> = <i>h</i>/<i>λ</i> = 6.63 × 10<sup>−34</sup>/(1.227 × 10<sup>−10</sup>) = 5.40 × 10<sup>−24</sup> kg·m/s.<br>The angle of deviation <i>θ</i> from the original direction satisfies:<br>sin <i>θ</i> = Δ<i>p</i><sub><i>x</i></sub>/<i>p</i><sub><i>y</i></sub> ≈ (1.055 × 10<sup>−25</sup>)/(5.40 × 10<sup>−24</sup>) = 0.0195.<br><i>θ</i> ≈ 0.0195 rad ≈ 1.1°.',
          '<b>Physical check:</b> A narrower slit (Δ<i>x</i> smaller) produces a larger Δ<i>p</i><sub><i>x</i></sub> and hence a wider diffraction pattern — exactly the wave behavior of electrons. This is an order-of-magnitude estimate: the full single-slit result sin <i>θ</i> = <i>λ</i>/<i>d</i> = 0.123 puts the first minimum at about 7°, larger by about 2π, because Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i> is only an estimate.',
        ],
        ans: 'The angular spread is about ±1.1° on either side of the forward direction.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Minimum Energy from Uncertainty Principle',
        q: 'An electron is confined to a region of space of width 1.0 Å. Estimate (a) the uncertainty in its momentum and (b) its minimum kinetic energy. Compare with the photoelectric work function of typical metals (about 2–4 eV).',
        steps: [
          '<b>Part (a) — Momentum uncertainty.</b><br>Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>) = (1.055 × 10<sup>−34</sup>)/(2(1.0 × 10<sup>−10</sup>)) = 5.28 × 10<sup>−25</sup> kg·m/s.<br>(Note: JEE uses ≈ <i>ħ</i>/Δ<i>x</i> for order-of-magnitude; using the factor 1/2 gives a value half as large.)',
          '<b>Part (b) — Minimum kinetic energy.</b> Taking Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i> for an order-of-magnitude estimate:<br><i>K</i><sub>min</sub> = (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i><sub>e</sub>) = (1.055 × 10<sup>−34</sup>)<sup>2</sup>/(2(9.11 × 10<sup>−31</sup>)(1.0 × 10<sup>−10</sup>)<sup>2</sup>) = (1.113 × 10<sup>−68</sup>)/(1.822 × 10<sup>−50</sup>) = 6.11 × 10<sup>−19</sup> J.<br><i>K</i><sub>min</sub> = (6.11 × 10<sup>−19</sup>)/(1.60 × 10<sup>−19</sup>) = 3.82 eV.<br>With the exact factor Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>), <i>K</i><sub>min</sub> is divided by 4: <i>K</i><sub>min</sub> ≈ 0.95 eV.',
          '<b>Comparison:</b> This is comparable to typical work functions (Cs: 1.9 eV, Na: 2.3 eV, Al: 4.1 eV). An electron confined to atomic dimensions already carries several electron-volts of kinetic energy purely from confinement — which is why atoms are not classically collapsing objects.',
        ],
        ans: '(a) Δ<i>p</i> ≈ 5.3 × 10<sup>−25</sup> kg·m/s; (b) <i>K</i><sub>min</sub> ≈ 1 eV (using Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>)) to 4 eV (using Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i>).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Minimum Energy of a Confined Proton',
        q: 'A proton is confined to a one-dimensional box of length <i>L</i> = 10<sup>−14</sup> m (the scale of a nucleus). Find the minimum kinetic energy of the proton and express it in MeV.',
        steps: [
          '<b>Step 1 — Uncertainty in position.</b> Δ<i>x</i> = <i>L</i> = 10<sup>−14</sup> m.',
          '<b>Step 2 — Order-of-magnitude Δ<i>p</i>.</b> Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i> = 1.055 × 10<sup>−34</sup>/10<sup>−14</sup> = 1.055 × 10<sup>−20</sup> kg·m/s.',
          '<b>Step 3 — Minimum kinetic energy.</b><br><i>K</i><sub>min</sub> = (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i><sub>p</sub>) = (1.055 × 10<sup>−20</sup>)<sup>2</sup>/(2(1.67 × 10<sup>−27</sup>)) = (1.11 × 10<sup>−40</sup>)/(3.34 × 10<sup>−27</sup>) = 3.33 × 10<sup>−14</sup> J.',
          '<b>Step 4 — Convert to MeV.</b> 1 MeV = 1.60 × 10<sup>−13</sup> J.<br><i>K</i><sub>min</sub> = (3.33 × 10<sup>−14</sup>)/(1.60 × 10<sup>−13</sup>) = 0.208 MeV',
        ],
        ans: '<i>K</i><sub>min</sub> ≈ 200 keV. Even this crude lower estimate shows a confined nucleon must carry a large kinetic energy; fuller treatments (the box result <i>h</i><sup>2</sup>/(8<i>mL</i><sup>2</sup>) ≈ 2 MeV) and real nuclei give MeV to tens of MeV, the scale of nuclear binding (about 8 MeV per nucleon).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] An electron microscope uses electrons accelerated from rest through 100 kV. If the electron beam has a diameter of 1 nm at a certain point, use the uncertainty principle (Δ<i>x</i> ≈ beam diameter, Δ<i>p</i> ≈ <i>ħ</i>/Δ<i>x</i>) to estimate the angular spread of the beam.',
            a: 'Relativistic <i>λ</i> (the first worked example of Additional topic A, 100 kV): <i>λ</i> = 3.70 × 10<sup>−12</sup> m. Δ<i>x</i> = 1 nm = 10<sup>−9</sup> m, Δ<i>p</i> = <i>ħ</i>/Δ<i>x</i> = 1.055 × 10<sup>−34</sup>/10<sup>−9</sup> = 1.055 × 10<sup>−25</sup> kg·m/s. <i>p</i> = <i>h</i>/<i>λ</i> = 6.63 × 10<sup>−34</sup>/(3.70 × 10<sup>−12</sup>) = 1.79 × 10<sup>−22</sup> kg·m/s. sin <i>θ</i> ≈ Δ<i>p</i>/<i>p</i> = 5.9 × 10<sup>−4</sup>, so <i>θ</i> ≈ 0.034 degrees. Very narrow — electron microscopes achieve Angstrom-level resolution because <i>λ</i> is so small.',
          },
          {
            q: '[JEE Advanced] Show that the uncertainty principle sets the size of a hydrogen atom in its ground state. (Hint: set Δ<i>x</i> ≈ <i>r</i> and <i>p</i> ≈ <i>ħ</i>/<i>r</i>, write <i>E</i> = <i>p</i><sup>2</sup>/(2<i>m</i>) − <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>), and minimise <i>E</i> with respect to <i>r</i>.)',
            a: 'Set Δ<i>x</i> ≈ <i>r</i>, Δ<i>p</i> ≈ <i>ħ</i>/<i>r</i>. Kinetic energy <i>K</i> = <i>p</i><sup>2</sup>/(2<i>m</i>) ≈ <i>ħ</i><sup>2</sup>/(2<i>mr</i><sup>2</sup>). Total energy <i>E</i> = <i>ħ</i><sup>2</sup>/(2<i>mr</i><sup>2</sup>) − <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>). Differentiate d<i>E</i>/d<i>r</i> = 0: −2<i>ħ</i><sup>2</sup>/(2<i>mr</i><sup>3</sup>) + <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) = 0 ⇒ <i>ħ</i><sup>2</sup>/(<i>mr</i><sup>3</sup>) = <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) ⇒ <i>r</i> = <i>ħ</i><sup>2</sup>/(<i>me</i><sup>2</sup>/(4πε<sub>0</sub>)) = 4πε<sub>0</sub><i>ħ</i><sup>2</sup>/(<i>me</i><sup>2</sup>). With <i>ħ</i> = <i>h</i>/(2π) = 1.055 × 10<sup>−34</sup> J·s, <i>m</i> = 9.11 × 10<sup>−31</sup> kg, <i>e</i> = 1.60 × 10<sup>−19</sup> C, 4πε<sub>0</sub> = 1/(9 × 10<sup>9</sup>): <i>r</i> ≈ 0.53 Å — the Bohr radius. Checks out.',
          },
          {
            q: '[JEE Main] A particle of mass <i>m</i> is confined to a one-dimensional box of length <i>L</i>. Using the uncertainty principle, show that its minimum kinetic energy is at least of the order of <i>ħ</i><sup>2</sup>/(8<i>mL</i><sup>2</sup>).',
            a: 'From uncertainty: Δ<i>x</i> = <i>L</i>, Δ<i>p</i> ≈ <i>ħ</i>/(2Δ<i>x</i>) = <i>ħ</i>/(2<i>L</i>). Taking <i>p</i> ≈ Δ<i>p</i>: <i>K</i> = <i>p</i><sup>2</sup>/(2<i>m</i>) ≈ <i>ħ</i><sup>2</sup>/(8<i>mL</i><sup>2</sup>). (Using ≈ instead of ≳ and Δ<i>p</i> ≈ <i>p</i> gives the order of magnitude.) (The exact quantum-mechanical ground state is <i>h</i><sup>2</sup>/(8<i>mL</i><sup>2</sup>) = π<sup>2</sup><i>ħ</i><sup>2</sup>/(2<i>mL</i><sup>2</sup>); the uncertainty principle gives only a lower estimate.)',
          },
          {
            q: '[JEE Advanced] A neutron is confined to a nucleus of diameter 10<sup>−14</sup> m. Estimate the minimum kinetic energy of the neutron in MeV.',
            a: 'Same method as worked example 3: Δ<i>x</i> = 10<sup>−14</sup> m, Δ<i>p</i> ≈ 1.055 × 10<sup>−20</sup> kg·m/s, <i>K</i><sub>min</sub> = (Δ<i>p</i>)<sup>2</sup>/(2<i>m</i><sub>n</sub>) = (1.055 × 10<sup>−20</sup>)<sup>2</sup>/(2 × 1.67 × 10<sup>−27</sup>) = 3.33 × 10<sup>−14</sup> J = 0.208 MeV ≈ 200 keV.',
          },
        ],
      },
    ],
  },
];
