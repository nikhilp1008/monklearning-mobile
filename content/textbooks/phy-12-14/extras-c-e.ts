import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Additional Topics C to E, word for word from the Class 12
 * Physics Master Reference: C Solar Cell: Short-Circuit Current, Open-Circuit
 * Voltage, Fill Factor, and Efficiency (pp. 920 to 923; its practice set sits
 * at the top of p. 923), D Boolean Algebra Mastery and Complex Gate
 * Realizations (pp. 923 to 925) and E Reading Timing Waveforms: Gate
 * Identification from Pulse Trains (pp. 926 to 928; its practice answers sit at
 * the top of p. 928). The Quick-Reference Summary that follows (pp. 928 to 929)
 * only repeats the addenda's results and is not copied.
 *
 * NOT is an overline: U+0305 after each character it covers, written after
 * the closing </i> of an italic letter (as in Topic 04). A character under two
 * bars (De Morgan chains) takes U+033F, the double overline, and a third bar
 * adds U+0305 after it. E's one drawing, the timing
 * waveforms of Example E.1, is p12-14-E-d1.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 920–923 ─────────────────────────
  {
    n: 'C',
    title: 'Solar Cell: Short-Circuit Current, Open-Circuit Voltage, Fill Factor, and Efficiency',
    extra: true,
    kalam: 'The cell delivers maximum power at the knee of the I-V curve, where P = IV peaks.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter introduces the solar cell as a large-area junction that, when illuminated, “generates its own emf”, and names its short-circuit current, open-circuit voltage and maximum-power point (Topic 03, Figure 14.10), but gives no formulas or numbers for them. JEE Advanced asks for the short-circuit current <i>I</i><sub>SC</sub>, the open-circuit voltage <i>V</i><sub>OC</sub>, the fill factor (FF), and the efficiency <i>η</i> — and their interrelations. This addendum supplies the full toolkit.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The illuminated I-V characteristic in the fourth quadrant.</b><br>Under illumination, the solar cell generates a photocurrent <i>I</i><sub>L</sub> proportional to the light intensity. The net current is:<br><i>I</i> = <i>I</i><sub>L</sub> − <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1)<br>In the dark, <i>I</i><sub>L</sub> = 0 and this reduces to the standard diode equation with reverse current convention. Under light, the first term <i>I</i><sub>L</sub> shifts the entire curve downward (in the conventional plot, forward current becomes negative because the cell delivers current to the load).',
      },
      {
        t: 'p',
        html: '<b>Short-circuit current <i>I</i><sub>SC</sub>.</b> Set <i>V</i> = 0:<br><i>I</i><sub>SC</sub> = <i>I</i><sub>L</sub><br>The short-circuit current is exactly the photogenerated current — every photon-generated carrier that reaches the junction is collected. <i>I</i><sub>SC</sub> is proportional to light intensity and to the junction area, and is essentially independent of temperature.',
      },
      {
        t: 'p',
        html: '<b>Open-circuit voltage <i>V</i><sub>OC</sub>.</b> Set <i>I</i> = 0:<br>0 = <i>I</i><sub>L</sub> − <i>I</i><sub>S</sub>(exp(<i>eV</i><sub>OC</sub>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1)<br>For <i>eV</i><sub>OC</sub> ≫ <i>nk</i><sub>B</sub><i>T</i>, the −1 is negligible and the exponential term balances the photocurrent:<br><i>V</i><sub>OC</sub> ≈ (<i>nk</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>I</i><sub>L</sub>/<i>I</i><sub>S</sub>) = <i>V</i><sub>T</sub> ln(<i>I</i><sub>SC</sub>/<i>I</i><sub>S</sub>) (second form: <i>n</i> = 1)<br><i>V</i><sub>OC</sub> grows logarithmically with light intensity but falls with temperature (because <i>I</i><sub>S</sub> grows faster than <i>I</i><sub>L</sub> rises). Typical silicon <i>V</i><sub>OC</sub> ≈ 0.55–0.7 V.',
      },
      {
        t: 'p',
        html: '<b>Maximum power point and fill factor.</b><br>The cell delivers maximum power at the knee of the I-V curve, where <i>P</i> = <i>IV</i> peaks. Let <i>P</i><sub>max</sub> = <i>I</i><sub>mp</sub><i>V</i><sub>mp</sub> be that peak. The <b>fill factor</b> (FF) is defined as:<br>FF = <i>P</i><sub>max</sub>/(<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub>) = (<i>I</i><sub>mp</sub><i>V</i><sub>mp</sub>)/(<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub>)<br>FF is a dimensionless number between 0 and 1 (typically 0.7–0.85 for good cells). A higher FF means the I-V curve is more rectangular, wasting less area in the current-voltage product.',
      },
      {
        t: 'p',
        html: '<b>Efficiency.</b><br><i>η</i> = <i>P</i><sub>max</sub>/<i>P</i><sub>in</sub> = (<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub> · FF)/<i>P</i><sub>in</sub><br>where <i>P</i><sub>in</sub> is the incident solar power (typically 1000 W/m<sup>2</sup> for standard test conditions). Efficiency also depends on the band gap — photons with <i>hν</i> < <i>E</i><sub>g</sub> are not absorbed, and photons with <i>hν</i> > <i>E</i><sub>g</sub> lose the excess energy as heat.',
      },
      {
        t: 'p',
        html: '<b>Optimal band gap.</b><br>The trade-off gives an optimum near <i>E</i><sub>g</sub> ≈ 1.4 eV for the solar spectrum, balancing absorption (needs <i>E</i><sub>g</sub> not too large) against voltage (needs <i>E</i><sub>g</sub> not too small). Silicon at 1.1 eV is near-optimal, explaining its dominance.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Fill Factor and Efficiency',
        q: 'A silicon solar cell has <i>I</i><sub>SC</sub> = 3 A, <i>V</i><sub>OC</sub> = 0.60 V, and a measured maximum power point <i>P</i><sub>max</sub> = 1.4 W at standard illumination (1000 W/m<sup>2</sup>). The cell area is 100 cm<sup>2</sup> (10<sup>−2</sup> m<sup>2</sup>). Find (a) the fill factor, (b) the efficiency, and (c) the load resistance at the maximum power point.',
        steps: [
          '<b>Part (a) — Fill factor.</b><br>FF = <i>P</i><sub>max</sub>/(<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub>) = 1.4/(3 × 0.60) = 1.4/1.8 ≈ 0.778',
          '<b>Part (b) — Efficiency.</b><br><i>P</i><sub>in</sub> = 1000 × 10<sup>−2</sup> = 10 W<br><i>η</i> = 1.4/10 = 0.14 = 14%',
          '<b>Part (c) — Load resistance at maximum power point.</b><br>At the maximum power point: <i>I</i><sub>mp</sub><i>V</i><sub>mp</sub> = 1.4 W. From the FF definition, <i>I</i><sub>mp</sub><i>V</i><sub>mp</sub> = FF × <i>I</i><sub>SC</sub><i>V</i><sub>OC</sub> = 1.4 W (by construction). Without the individual <i>I</i><sub>mp</sub> and <i>V</i><sub>mp</sub>, the exact resistance is:<br><i>R</i><sub>mp</sub> = <i>V</i><sub>mp</sub>/<i>I</i><sub>mp</sub>',
          'We know <i>V</i><sub>OC</sub> = 0.60 V. For silicon the knee voltage is typically about 0.5 V at <i>P</i><sub>max</sub>. Taking <i>V</i><sub>mp</sub> ≈ 0.5 V:<br><i>I</i><sub>mp</sub> = 1.4/0.5 = 2.8 A<br><i>R</i><sub>mp</sub> ≈ 0.5/2.8 ≈ 0.18 Ω',
          '(In practice, <i>V</i><sub>mp</sub> is found from the manufacturer’s curve or by differentiating <i>P</i> = <i>IV</i>; for an ideal exponential diode (<i>n</i> = 1, <i>V</i><sub>T</sub> = 25.9 mV) this gives <i>V</i><sub>mp</sub> ≈ <i>V</i><sub>OC</sub> − 3<i>V</i><sub>T</sub> ≈ 0.52 V and <i>I</i><sub>mp</sub> ≈ 2.86 A, so <i>R</i><sub>mp</sub> ≈ 0.18 Ω (ideal FF ≈ 0.83) — consistent with the estimate above.)',
          'The efficiency of 14% is a bit low for silicon: commercial panels are typically 15–22% and laboratory cells reach about 27%.',
        ],
        ans: 'FF ≈ 0.78, efficiency ≈ 14%, <i>R</i><sub>mp</sub> ≈ 0.18 Ω.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Band Gap and Spectral Response',
        q: 'A solar cell made from a material with band gap <i>E</i><sub>g</sub> = 1.5 eV is illuminated by monochromatic light of wavelength <i>λ</i> = 600 nm. (a) What fraction of each photon’s energy is wasted as heat after absorption? (b) Estimate <i>V</i><sub>OC</sub> if <i>I</i><sub>SC</sub> = 1 A and <i>I</i><sub>S</sub> = 10<sup>−8</sup> A (take <i>V</i><sub>T</sub> = 25.9 mV, <i>n</i> = 1). (c) Why can this material not use photons with <i>λ</i> > 830 nm?',
        steps: [
          '<b>Part (a) — Excess photon energy.</b> Photon energy at 600 nm:<br><i>hν</i> = <i>hc</i>/<i>λ</i> = (1240 eV·nm)/(600 nm) ≈ 2.07 eV',
          'Band gap: <i>E</i><sub>g</sub> = 1.5 eV. The photon generates one electron-hole pair per absorbed photon; the pair carries <i>E</i><sub>g</sub> of useful energy. The rest is lost as heat (lattice vibration) almost immediately:<br>Fraction wasted = (<i>hν</i> − <i>E</i><sub>g</sub>)/(<i>hν</i>) = (2.067 − 1.5)/2.067 ≈ 0.567/2.067 ≈ 27%',
          '<b>Part (b) — Open-circuit voltage.</b><br><i>V</i><sub>OC</sub> = <i>V</i><sub>T</sub> ln(<i>I</i><sub>SC</sub>/<i>I</i><sub>S</sub>) = (25.9 mV) ln(1/10<sup>−8</sup>) = 25.9 × ln(10<sup>8</sup>) = 25.9 × 18.4 ≈ 477 mV',
          '(Note: <i>V</i><sub>OC</sub> ≈ 0.48 V is below <i>E</i><sub>g</sub>/<i>e</i> = 1.5 V — the open-circuit voltage is always less than <i>E</i><sub>g</sub>/<i>e</i>, because it cannot exceed the junction’s built-in potential, which itself lies below <i>E</i><sub>g</sub>/<i>e</i>.)',
          '<b>Part (c) — Long-wavelength threshold.</b> For <i>λ</i> > 830 nm:<br><i>hν</i> = 1240/830 ≈ 1.49 eV < <i>E</i><sub>g</sub> = 1.5 eV',
          'Photons with <i>hν</i> < <i>E</i><sub>g</sub> cannot excite electrons across the gap (direct absorption); the cell is transparent to such photons. The threshold wavelength is <i>λ</i><sub>g</sub> = <i>hc</i>/<i>E</i><sub>g</sub> = 1240/1.5 ≈ 827 nm.',
        ],
        ans: 'About 27% of photon energy is wasted as heat; <i>V</i><sub>OC</sub> ≈ 0.48 V; photons with <i>λ</i> > 827 nm are not absorbed by this material.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A solar cell has <i>I</i><sub>SC</sub> = 2.5 A and <i>V</i><sub>OC</sub> = 0.58 V. If the fill factor is 0.75, find <i>P</i><sub>max</sub>.',
            a: '<i>P</i><sub>max</sub> = 0.75 × 2.5 × 0.58 = 1.09 W.',
          },
          {
            q: '[JEE Main] Estimate the threshold wavelength for a GaAs solar cell with <i>E</i><sub>g</sub> = 1.43 eV.',
            a: '<i>λ</i><sub>g</sub> = 1240/1.43 ≈ 867 nm, in the near-infrared.',
          },
          {
            q: '[JEE Advanced] Show that <i>V</i><sub>OC</sub> < <i>E</i><sub>g</sub>/<i>e</i> for any semiconductor. Hint: compare the expression for <i>V</i><sub>OC</sub> with <i>E</i><sub>g</sub>/<i>e</i>. (Derive that the open-circuit voltage cannot exceed the built-in potential, which in turn lies below the band-gap voltage.)',
            a: 'With <i>n</i> = 1, <i>I</i><sub>S</sub> ∝ <i>T</i><sup>3</sup> exp(−<i>E</i><sub>g</sub>/(<i>k</i><sub>B</sub><i>T</i>)) (Additional topic A); write <i>I</i><sub>S</sub> = <i>I</i><sub>0</sub> exp(−<i>E</i><sub>g</sub>/(<i>k</i><sub>B</sub><i>T</i>)). Then <i>V</i><sub>OC</sub> = (<i>k</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>I</i><sub>SC</sub>/<i>I</i><sub>S</sub>) = <i>E</i><sub>g</sub>/<i>e</i> − (<i>k</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>I</i><sub>0</sub>/<i>I</i><sub>SC</sub>). The prefactor <i>I</i><sub>0</sub> is far larger than any photocurrent, so the last term is positive and <i>V</i><sub>OC</sub> < <i>E</i><sub>g</sub>/<i>e</i>. Physically: at open circuit the forward voltage only lowers the junction barrier <i>e</i>(<i>V</i><sub>b</sub> − <i>V</i><sub>OC</sub>) without removing it, so <i>V</i><sub>OC</sub> < <i>V</i><sub>b</sub>, and <i>eV</i><sub>b</sub>, the gap between the two sides’ Fermi levels, is less than <i>E</i><sub>g</sub>.',
          },
          {
            q: '[JEE Advanced] A silicon solar cell (<i>E</i><sub>g</sub> = 1.1 eV) has <i>I</i><sub>SC</sub> = 5 A, <i>I</i><sub>S</sub> = 10<sup>−6</sup> A, and <i>n</i> = 1. Find <i>V</i><sub>OC</sub>.',
            a: '<i>V</i><sub>OC</sub> = 25.9 × ln(5 × 10<sup>6</sup>) ≈ 25.9 × (6 ln 10 + ln 5) ≈ 25.9 × (13.82 + 1.61) ≈ 400 mV.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 923–925 ─────────────────────────
  {
    n: 'D',
    title: 'Boolean Algebra Mastery and Complex Gate Realizations',
    extra: true,
    kalam: 'Use De Morgan wherever a bar sits over a bracketed expression.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the three basic gates, the derived gates NAND, NOR, XOR and XNOR, and the universal-gate principle, and works only two-level cases: one two-level circuit read algebraically (Topic 04, worked example 3) and the 3-gate NAND/NOR builds of OR and AND (worked example 4, practice question 5). It does not show you how to realise a complex Boolean expression in minimum gate count, how to read a larger multi-gate circuit’s output algebraically, or how to apply De Morgan’s theorem in chains that span three or more inversions. JEE Advanced expects all three.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Reading a multi-gate circuit — systematic method',
        steps: [
          'Label every wire with its Boolean expression as you go.',
          'At each gate apply the rule: AND = ·, OR = +, NOT = bar.',
          'Work left to right; never skip a gate.',
          'Use De Morgan wherever a bar sits over a bracketed expression.',
        ],
      },
      {
        t: 'p',
        html: '<b>Realising any expression from NAND/NOR only — systematic method.</b><br>NAND: apply De Morgan to get the expression into a form with bars over individual variables, then break each bar with a NAND.<br>NOR: same, but aim for a product-of-sums (De Morgan: <i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅).',
      },
      {
        t: 'p',
        html: '<b>Minimum gate count</b> requires recognising when one gate can serve two purposes (e.g., a NAND that is already inverting one input of a downstream NAND acts as a partial inverter).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Reading a Four-Gate Circuit',
        q: 'Find the Boolean expression for the output <i>Y</i> of the circuit: Input <i>A</i> goes to a NOT gate (output <i>A</i>̅). Input <i>B</i> goes to a NOT gate (output <i>B</i>̅). Both <i>A</i>̅ and <i>B</i>̅ feed a NAND gate. The output of that NAND goes to a second NAND gate along with input <i>C</i>. Find <i>Y</i>.',
        steps: [
          '<b>Step 1 — Label each gate.</b><br>Gate 1 (NOT): output <i>T</i><sub>1</sub> = <i>A</i>̅<br>Gate 2 (NOT): output <i>T</i><sub>2</sub> = <i>B</i>̅<br>Gate 3 (NAND): inputs <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub> → output <i>T</i><sub>3</sub> = <i>T</i>̅<sub>1̅</sub>·̅<i>T</i>̅<sub>2̅</sub> = <i>A</i>̿·̅<i>B</i>̿<br>Gate 4 (NAND): inputs <i>T</i><sub>3</sub>, <i>C</i> → output <i>Y</i> = <i>T</i>̅<sub>3̅</sub>·̅<i>C</i>̅',
          '<b>Step 2 — Apply De Morgan to each NAND.</b><br>Gate 3: <i>A</i>̿·̅<i>B</i>̿ = <i>A</i> + <i>B</i> (De Morgan: complement of product = sum of complements, then double complement)<br>Gate 4: <i>Y</i> = <i>T</i>̅<sub>3̅</sub>·̅<i>C</i>̅ = <i>T</i>̅<sub>3̅</sub> + <i>C</i>̅ = <i>A</i>̅ · <i>B</i>̅ + <i>C</i>̅ (since <i>T</i>̅<sub>3̅</sub> = <i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅)',
          '<b>Step 3 — Simplify.</b><br><i>Y</i> = <i>A</i>̅ · <i>B</i>̅ + <i>C</i>̅ = (̅<i>A</i>̅+̅<i>B</i>̅)̅·̅<i>C</i>̅ (already in simplest form)',
          '<b>Truth table check</b> (3 inputs → 8 rows, but we can check the key cases):<br>• <i>A</i> = 1 → <i>Y</i> = <i>C</i>̅ (because <i>A</i>+<i>B</i> = 1)<br>• <i>A</i> = 0, <i>B</i> = 1 → <i>Y</i> = <i>C</i>̅<br>• <i>A</i> = 0, <i>B</i> = 0 → <i>Y</i> = 1 for either value of <i>C</i><br>• <i>A</i> = 1, <i>B</i> = 0, <i>C</i> = 1 → <i>Y</i> = 0',
        ],
        ans: '<i>Y</i> = <i>A</i>̅ · <i>B</i>̅ + <i>C</i>̅ = (̅<i>A</i>̅+̅<i>B</i>̅)̅·̅<i>C</i>̅ — <i>Y</i> is LOW only when <i>C</i> = 1 and <i>A</i> or <i>B</i> is 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Minimal NAND/NOR Realisation',
        q: 'Realise the expression <i>Y</i> = <i>A</i>̅·̅<i>B</i>̅+̅<i>C</i>̅ using only NAND gates. Find the minimum number of NAND gates required, and describe the circuit.',
        steps: [
          '<b>Step 1 — Apply De Morgan to break the outer bar.</b><br><i>Y</i> = <i>A</i>̅<i>B</i>̅+̅<i>C</i>̅ = <i>A</i>̅<i>B</i>̅ · <i>C</i>̅<br>(De Morgan: complement of sum = product of complements.)',
          '<b>Step 2 — Break each bar with NAND.</b><br>• <i>A</i>̅<i>B</i>̅: one NAND with inputs <i>A</i>, <i>B</i>. (1 gate)<br>• <i>C</i>̅: NAND with both inputs tied to <i>C</i> (acts as NOT). (1 gate)<br>• NAND of <i>A</i>̅<i>B</i>̅ and <i>C</i>̅ gives <i>AB</i>+<i>C</i> (1 gate); a tied-input NAND inverts it (1 gate).',
          '<b>Step 3 — Total: 4 NAND gates.</b><br>The circuit is: NAND(<i>A</i>, <i>B</i>) and NAND(both inputs <i>C</i>) → NAND(<i>A</i>̅<i>B</i>̅, <i>C</i>̅) → NOT → output.',
          '<b>Alternative with NOR:</b> Apply De Morgan differently:<br><i>Y</i> = <i>A</i>̅<i>B</i>̅+̅<i>C</i>̅ = <i>A</i>̿̅+̿<i>B</i>̿̅+̅<i>C</i>̅<br>This needs <i>A</i>̅ (NOR with tied inputs), <i>B</i>̅ (NOR with tied inputs), then NOR of <i>A</i>̅ and <i>B</i>̅ which gives <i>AB</i>; then NOR of <i>AB</i> and <i>C</i> → 4 NOR gates. Both routes need 4 gates.',
        ],
        ans: 'Minimum 4 NAND gates. The circuit implements <i>Y</i> = <i>A</i>̅·̅<i>B</i>̅+̅<i>C</i>̅.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Minimum Gate Count for XOR',
        q: 'Show that XOR can be realised with 4 NAND gates. (The chapter showed it as 5 gates total — two ANDs, one OR, two NOTs. Here we do it NAND-only.)',
        steps: [
          '<b>Step 1 — Express XOR in NAND-friendly form.</b><br><i>Y</i> = <i>A</i> ⊕ <i>B</i> = <i>A</i>̅<i>B</i> + <i>A</i><i>B</i>̅',
          'Apply De Morgan to get a form with only single-variable complements:<br><i>Y</i> = <i>A</i>̿̅<i>B</i>̿·̅<i>A</i>̿<i>B</i>̿̅',
          '<b>Check:</b> complement of product = sum of complements = <i>A</i>̿̅<i>B</i>̿ + <i>A</i>̿<i>B</i>̿̅ = <i>A</i>̅<i>B</i> + <i>A</i><i>B</i>̅',
          '<b>Step 2 — Build from NANDs.</b><br>• Gate 1: NAND(<i>A</i>, <i>B</i>) → <i>T</i><sub>1</sub> = <i>A</i>̅<i>B</i>̅<br>• Gate 2: NAND(<i>A</i>, <i>T</i><sub>1</sub>) → <i>T</i><sub>2</sub> = <i>A</i>̅·̅<i>T</i>̅<sub>1̅</sub> = <i>A</i>̅ + <i>AB</i> = <i>A</i>̅ + <i>B</i> (the complement of <i>AB</i>̅, one of the two terms we need)<br>• Gate 3: NAND(<i>B</i>, <i>T</i><sub>1</sub>) → <i>T</i><sub>3</sub> = <i>B</i>̅·̅<i>T</i>̅<sub>1̅</sub> = <i>B</i>̅ + <i>AB</i> = <i>A</i> + <i>B</i>̅ (the complement of <i>A</i>̅<i>B</i>, by symmetry)<br>• Gate 4: NAND(<i>T</i><sub>2</sub>, <i>T</i><sub>3</sub>) → <i>Y</i> = <i>T</i>̅<sub>2̅</sub>·̅<i>T</i>̅<sub>3̅</sub> = <i>T</i>̅<sub>2̅</sub> + <i>T</i>̅<sub>3̅</sub> = <i>A</i> · <i>B</i>̅ + <i>A</i>̅ · <i>B</i> = <i>A</i>⊕<i>B</i>',
          'Four NAND gates, two NOTs absorbed into the structure. This is the standard minimum-NAND design for XOR.',
        ],
        ans: 'XOR = 4 NAND gates. Compare: 2 NOT + 2 AND + 1 OR = 5 gates, whereas the NAND-only version uses 4 identical gates — the practical advantage in chip fabrication.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Write the Boolean expression for the output of: <i>A</i> and <i>B</i> go to an AND gate; the AND output and <i>A</i> go to a NOR gate. Simplify.',
            a: '<i>A</i>̅<i>B</i>̅+̅<i>A</i>̅ = <i>A</i>̅; the AND is redundant.',
          },
          {
            q: '[JEE Main] Realise <i>Y</i> = <i>A</i> · <i>B</i>̅ using only NOR gates.',
            a: '<i>A</i>̅ from NOR with both inputs <i>A</i> (1 gate), then NOR of <i>A</i>̅ and <i>B</i> (1 gate). Total: 2 NOR gates.',
          },
          {
            q: '[JEE Advanced] Realise <i>Y</i> = (̅<i>A</i>̅+̅<i>B</i>̅)̅·̅<i>C</i>̅ using NAND gates. Find minimum gate count.',
            a: '4 NAND gates. First make <i>A</i>̅ = NAND(<i>A</i>, <i>A</i>) and <i>B</i>̅ = NAND(<i>B</i>, <i>B</i>) (2 gates); then <i>A</i>+<i>B</i> = NAND of <i>A</i>̅ and <i>B</i>̅ (1 gate), and <i>Y</i> = NAND of <i>A</i>+<i>B</i> and <i>C</i> (1 gate).',
          },
          {
            q: '[JEE Advanced] Show algebraically that <i>A</i>⊕<i>B</i> = <i>A</i>̅·̅<i>B</i>̅+̅<i>A</i>̿·̅<i>B</i>̿. Draw the NAND-only circuit with 4 NANDs.',
            a: '<i>A</i>⊕<i>B</i> is true exactly when <i>AB</i> + <i>A</i>̅ · <i>B</i>̅ (XNOR) is false, so <i>A</i>⊕<i>B</i> = <i>A</i>̅·̅<i>B</i>̅+̅<i>A</i>̿·̅<i>B</i>̿. This is realised by the same minimum 4-NAND design as the worked example above: with <i>T</i><sub>1</sub> = NAND(<i>A</i>, <i>B</i>), take <i>T</i><sub>2</sub> = NAND(<i>A</i>, <i>T</i><sub>1</sub>), <i>T</i><sub>3</sub> = NAND(<i>B</i>, <i>T</i><sub>1</sub>), and <i>Y</i> = NAND(<i>T</i><sub>2</sub>, <i>T</i><sub>3</sub>) = <i>A</i>̅<i>B</i> + <i>AB</i>̅ = <i>A</i>⊕<i>B</i>. 4 gates total.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 926–928 ─────────────────────────
  {
    n: 'E',
    title: 'Reading Timing Waveforms: Gate Identification from Pulse Trains',
    extra: true,
    kalam: 'No new physics is involved; the method is the truth table of Topic 04 read one time slice at a time.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter and Addendum D handle gates through truth tables and circuit diagrams. NEET’s favourite variant shows you something else entirely: two input pulse trains <i>A</i>(<i>t</i>) and <i>B</i>(<i>t</i>) drawn against time and an output train <i>Y</i>(<i>t</i>), and asks you to name the gate — or names the gate and asks you to draw <i>Y</i>(<i>t</i>). No new physics is involved; the method is the truth table of Topic 04 read one time slice at a time.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Procedure — reading a timing waveform',
        steps: [
          '<b>Slice the time axis at every input transition.</b> Wherever <i>A</i> or <i>B</i> changes level, drop a vertical line. Between two adjacent lines both inputs are constant, so each slice carries exactly one input combination.',
          '<b>Read mid-slice, never at a transition.</b> The value of a trace at the instant of an edge is ambiguous; the value halfway through a slice is not.',
          '<b>Build the mini truth table.</b> Each slice contributes one row: read (<i>A</i>, <i>B</i>) and then <i>Y</i> from the same slice. There are only four possible input combinations — 00, 01, 10, 11 — so repeated combinations must give the same <i>Y</i> every time they occur; if they do, the waveform is self-consistent.',
          '<b>Compare the <i>Y</i> column against the standard gates.</b> In row order (00, 01, 10, 11):',
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Gate', '00', '01', '10', '11'],
        rows: [
          ['OR', '0', '1', '1', '1'],
          ['AND', '0', '0', '0', '1'],
          ['NAND', '1', '1', '1', '0'],
          ['NOR', '1', '0', '0', '0'],
          ['XOR', '0', '1', '1', '0'],
          ['XNOR', '1', '0', '0', '1'],
        ],
      },
      {
        t: 'p',
        html: 'All six columns are distinct, so a waveform in which all four input combinations occur identifies the gate <b>uniquely</b>. If some combination never occurs, the answer is fixed only up to the gates that agree on the observed rows — exam waveforms are constructed so that enough combinations appear.',
      },
      {
        t: 'p',
        html: '5. <b>The reverse task.</b> If the gate is named and you must draw <i>Y</i>(<i>t</i>): evaluate the gate’s rule inside each slice and draw the result. Ideal gates are assumed — the output changes in the same slice as the inputs; propagation delay is not part of this syllabus.',
      },
      {
        t: 'p',
        html: '<b>The trap.</b> Three errors account for nearly every lost mark here. First, reading a trace at an edge instead of mid-slice. Second, matching on a single slice — one HIGH output proves nothing; AND and OR agree on the 11 row, NAND and NOR agree on the 00 row, so you must collect every distinct input combination before naming the gate. Third, overlooking XOR and XNOR: when <i>Y</i> is HIGH for the mixed combinations 01 and 10 but LOW for 00 and 11, the output is telling you “inputs differ” — that is XOR, and its mirror image is XNOR. NEET 2025 asked exactly this identification.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Identify the Gate from the Waveforms',
        fig: 'p12-14-E-d1',
        q: 'The inputs <i>A</i>, <i>B</i> and the output <i>Y</i> of a two-input logic gate vary with time as shown in the figure, over eight equal time intervals. Identify the gate.',
        steps: [
          '<b>Step 1 — Slice at every input transition.</b> The eight intervals are already bounded by transitions of <i>A</i> or <i>B</i>; number them 1 to 8.',
          '<b>Step 2 — Read each slice mid-way.</b><br>• Slice 1: <i>A</i> = 0, <i>B</i> = 0, <i>Y</i> = 0<br>• Slice 2: <i>A</i> = 1, <i>B</i> = 0, <i>Y</i> = 1<br>• Slice 3: <i>A</i> = 1, <i>B</i> = 1, <i>Y</i> = 0<br>• Slice 4: <i>A</i> = 0, <i>B</i> = 1, <i>Y</i> = 1<br>• Slice 5: <i>A</i> = 1, <i>B</i> = 0, <i>Y</i> = 1<br>• Slice 6: <i>A</i> = 0, <i>B</i> = 0, <i>Y</i> = 0<br>• Slice 7: <i>A</i> = 0, <i>B</i> = 1, <i>Y</i> = 1<br>• Slice 8: <i>A</i> = 1, <i>B</i> = 1, <i>Y</i> = 0',
          '<b>Step 3 — Mini truth table.</b> Collecting distinct combinations (slices 2 and 5 both give 10 → 1; slices 3 and 8 both give 11 → 0; slices 4 and 7 both give 01 → 1; slices 1 and 6 both give 00 → 0 — all consistent):<br>• <i>A</i> = 0, <i>B</i> = 0, <i>Y</i> = 0<br>• <i>A</i> = 0, <i>B</i> = 1, <i>Y</i> = 1<br>• <i>A</i> = 1, <i>B</i> = 0, <i>Y</i> = 1<br>• <i>A</i> = 1, <i>B</i> = 1, <i>Y</i> = 0',
          '<b>Step 4 — Compare.</b> The <i>Y</i> column is (0, 1, 1, 0) — output HIGH exactly when the inputs differ. Matching the table in the Method section, this is <b>XOR</b>: <i>Y</i> = <i>A</i>̅<i>B</i> + <i>A</i><i>B</i>̅ = <i>A</i> ⊕ <i>B</i>.',
        ],
        ans: 'The gate is an XOR gate. (Its complement, XNOR, would read (1, 0, 0, 1) — HIGH when the inputs agree.)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Over six equal intervals, the inputs of a two-input gate read <i>A</i> ∶ 0 1 1 0 0 1 and <i>B</i> ∶ 0 0 1 1 0 1, and the output reads <i>Y</i> ∶ 1 1 0 1 1 0. Identify the gate.',
            a: 'Slice table: 00 → 1 (slices 1, 5), 10 → 1 (slice 2), 11 → 0 (slices 3, 6), 01 → 1 (slice 4). The <i>Y</i> column in the order (00, 01, 10, 11) is (1, 1, 1, 0) — HIGH except when both inputs are HIGH: <b>NAND</b>.',
          },
          {
            q: '[JEE Main] The inputs of a NOR gate read <i>A</i> ∶ 1 0 0 1 1 0 and <i>B</i> ∶ 0 0 1 1 0 1 over six equal intervals. Construct the output train <i>Y</i> and state in which slice(s) <i>Y</i> is HIGH.',
            a: 'NOR is HIGH only when both inputs are LOW. Only slice 2 has (<i>A</i>, <i>B</i>) = (0, 0), so <i>Y</i> ∶ 0 1 0 0 0 0 — HIGH in slice 2 only.',
          },
        ],
      },
    ],
  },
];
