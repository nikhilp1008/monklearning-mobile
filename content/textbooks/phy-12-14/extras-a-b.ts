import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Additional Topics A and B, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 912, the first
 * paragraph of A's Introduction), A The Full Diode Equation: Temperature,
 * Ideality Factor, and Reverse Breakdown (pp. 912 to 916; its practice ends on
 * p. 916) and B Junction Capacitance and Diode Resistance (pp. 916 to 919; its
 * practice ends on p. 919, and C starts on p. 920). Each addendum prints its own
 * practice problems and answers, which are its Practice part. These pages print
 * no drawings: every equation is typeset, and A's three lists are tables (the
 * third, inside worked example 3, is written as two bullet lines).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 912–916 ─────────────────────────
  {
    n: 'A',
    title: 'The Full Diode Equation: Temperature, Ideality Factor, and Reverse Breakdown',
    extra: true,
    kalam: 'Addendum A marries the diode equation to temperature physics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the band picture, the mass-action law, the diode’s forward barrier and rectifier metrics, the four special diodes, and the logic gates (three basic, NAND, NOR, XOR and XNOR). Four JEE patterns still stand outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A marries the diode equation to temperature physics: the full Shockley form with its temperature coefficients and the ideality factor gives JEE Advanced its sharpest numericals on diode current. Addendum B opens the junction’s electronic storage — the depletion capacitance the chapter never mentions, and the dynamic resistance that replaces Ohm’s law for small-signal analysis. Addendum C takes the solar cell from “it generates power” to the full metric toolkit: short-circuit current, open-circuit voltage, fill factor, and the band-gap optimization that decides whether a material belongs in a panel or a sensor. Addendum D pushes Boolean algebra and gate realization beyond the chapter’s two-level circuits — multi-gate circuits, De Morgan chains, and the minimal NAND/NOR constructions that JEE Advanced demands. Addendum E adds a NEET favourite: reading timing waveforms to name a gate.<br><br>Nothing here is new physics — every result is the diode equation, the junction model, or Boolean algebra, applied one step deeper or one parameter wider.',
      },
      {
        t: 'p',
        html: 'Topic 02 gives you the ideal diode equation <i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>k</i><sub>B</sub><i>T</i>)) − 1) and uses it for the forward current and the 60 mV-per-decade rule. It does not show you how temperature changes the current dramatically or why the ideality factor <i>n</i> appears in real diodes, and Topic 03 gives only the signs of the two breakdown mechanisms’ temperature coefficients, not how to use them as fingerprints — all three are JEE Advanced hunting grounds.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The complete diode equation.</b><br><i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1)<br>where <i>n</i> is the <b>ideality factor</b> (1 for an ideal junction, 1.1–1.5 for real silicon diodes), <i>e</i> = 1.6 × 10<sup>−19</sup> C, <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J/K, and <i>V</i> is the forward voltage (p-side positive). The thermal voltage <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> is about 25.9 mV at 300 K.',
      },
      {
        t: 'table',
        title: 'Key temperature dependences (memorise the signs)',
        head: ['Quantity', 'Symbol', 'Temperature dependence', 'Physical origin'],
        rows: [
          ['Thermal voltage', '<i>V</i><sub>T</sub>', '∝ <i>T</i>', '<i>k</i><sub>B</sub><i>T</i> grows'],
          [
            'Reverse saturation current',
            '<i>I</i><sub>S</sub>',
            '∝ <i>T</i><sup>3</sup> exp(−<i>E</i><sub>g</sub>/(<i>k</i><sub>B</sub><i>T</i>))',
            'more carriers generated',
          ],
          [
            'Barrier potential (equilibrium)',
            '<i>V</i><sub>b</sub>',
            'decreases ~2 mV/°C',
            '<i>V</i><sub>b</sub> = <i>V</i><sub>T</sub> ln(<i>N</i><sub>A</sub><i>N</i><sub>D</sub>/<i>n</i><sub>i</sub><sup>2</sup>)',
          ],
          ['Forward voltage at fixed <i>I</i>', '<i>V</i>', 'decreases ~2 mV/°C', 'barrier softens'],
        ],
      },
      {
        t: 'table',
        title: 'Two breakdown mechanisms',
        head: ['Property', 'Zener breakdown', 'Avalanche breakdown'],
        rows: [
          ['Doping', 'Heavy (thin junction)', 'Light (wide junction)'],
          ['Dominant range', '<i>V</i><sub>Z</sub> ≲ 5 V', '<i>V</i><sub>Z</sub> ≳ 7 V'],
          ['Physical mechanism', 'Quantum tunnelling', 'Impact ionisation'],
          [
            'Temperature coefficient',
            'd<i>V</i><sub>Z</sub>/d<i>T</i> < 0 (negative)',
            'd<i>V</i><sub>Z</sub>/d<i>T</i> > 0 (positive)',
          ],
          ['Cause', 'Strong field rips electrons from bonds', 'Fast carriers knock out more carriers'],
        ],
      },
      {
        t: 'p',
        html: 'Topic 03 states that the Zener breakdown voltage falls with temperature and the avalanche breakdown voltage rises; it does not show you how to use a measured temperature coefficient to tell which mechanism operates, which JEE Advanced has asked by name.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Current Ratio at Two Temperatures',
        q: 'A silicon diode (band gap <i>E</i><sub>g</sub> = 1.1 eV) carries <i>I</i> = 10 mA at <i>T</i><sub>1</sub> = 300 K with <i>V</i><sub>1</sub> = 0.70 V. Estimate the current at <i>T</i><sub>2</sub> = 330 K if the voltage is held at <i>V</i><sub>2</sub> = 0.70 V. State the approximations.',
        steps: [
          '<b>Step 1 — Write the current ratio from the diode equation.</b> For forward bias with <i>eV</i> ≫ <i>k</i><sub>B</sub><i>T</i>:<br><i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = <i>I</i><sub>S</sub>(<i>T</i><sub>2</sub>)/<i>I</i><sub>S</sub>(<i>T</i><sub>1</sub>) · exp[(<i>eV</i>/(<i>nk</i><sub>B</sub>))(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>)]',
          '<b>Step 2 — Approximate the saturation-current ratio.</b> Using <i>I</i><sub>S</sub> ∝ <i>T</i><sup>3</sup> exp(−<i>E</i><sub>g</sub>/(<i>k</i><sub>B</sub><i>T</i>)):<br><i>I</i><sub>S</sub>(<i>T</i><sub>2</sub>)/<i>I</i><sub>S</sub>(<i>T</i><sub>1</sub>) ≈ (330/300)<sup>3</sup> exp[−(<i>E</i><sub>g</sub>/<i>k</i><sub>B</sub>)(1/330 − 1/300)]<br>The pre-factor (330/300)<sup>3</sup> ≈ 1.33. For the exponential, convert <i>E</i><sub>g</sub> = 1.1 eV = 1.76 × 10<sup>−19</sup> J:<br><i>E</i><sub>g</sub>/<i>k</i><sub>B</sub> = 1.76 × 10<sup>−19</sup>/(1.38 × 10<sup>−23</sup>) ≈ 12750 K<br>exp(−12750 × (1/330 − 1/300)) = exp(−12750 × (−3.03 × 10<sup>−4</sup>)) = exp(+3.86) ≈ 47.6<br>So <i>I</i><sub>S</sub>(<i>T</i><sub>2</sub>)/<i>I</i><sub>S</sub>(<i>T</i><sub>1</sub>) ≈ 1.33 × 47.6 ≈ 63.',
          '<b>Step 3 — Exponential voltage factor.</b> With <i>e</i>/<i>k</i><sub>B</sub> ≈ 11600 K V<sup>−1</sup>:<br>exp[(<i>eV</i>/(<i>nk</i><sub>B</sub>))(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>)] = exp(0.70 × 11600 × (−3.03 × 10<sup>−4</sup>)/<i>n</i>) = exp(−2.46/<i>n</i>)<br>Taking <i>n</i> ≈ 1:<br>exp(−2.46) ≈ 0.085',
          '<b>Step 4 — Multiply.</b><br><i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> ≈ 63 × 0.085 ≈ 5.4<br><i>I</i><sub>2</sub> ≈ 54 mA',
        ],
        ans: 'At the same forward voltage, the current increases by only about 5 times when temperature rises from 300 K to 330 K. The saturation current grows about 63-fold, but the voltage factor (about 0.085) largely cancels this because the thermal voltage also grows with temperature and lowers the exponent, so <i>I</i><sub>2</sub> ≈ 54 mA here. (If the diode were kept at constant current, voltage would drop by about 2 mV/°C × 30°C = 60 mV, giving <i>V</i><sub>2</sub> ≈ 0.64 V — the opposite perspective.)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Ideality Factor from I-V Data',
        q: 'A silicon diode at 300 K gives <i>I</i> = 1.0 mA at <i>V</i> = 0.65 V, and <i>I</i> = 10 mA at <i>V</i> = 0.72 V. Find the ideality factor <i>n</i> and the reverse saturation current <i>I</i><sub>S</sub>.',
        steps: [
          '<b>Step 1 — Use the ratio method to eliminate <i>I</i><sub>S</sub>.</b> From <i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1) with <i>eV</i> ≫ <i>k</i><sub>B</sub><i>T</i>:<br><i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = exp[(<i>e</i>/(<i>nk</i><sub>B</sub><i>T</i>))(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)]<br>ln(10/1) = (<i>e</i>/(<i>nk</i><sub>B</sub><i>T</i>))(0.72 − 0.65)<br>2.303 = [1.6 × 10<sup>−19</sup>/(<i>n</i>(1.38 × 10<sup>−23</sup>)(300))](0.07)',
          '<b>Step 2 — Solve for <i>n</i>.</b><br>Numerator: 1.6 × 10<sup>−19</sup> × 0.07 = 1.12 × 10<sup>−20</sup><br>Denominator factor: <i>n</i> × 1.38 × 10<sup>−23</sup> × 300 = 4.14 × 10<sup>−21</sup><i>n</i><br>1.12 × 10<sup>−20</sup>/(4.14 × 10<sup>−21</sup><i>n</i>) = 2.303<br><i>n</i> = 1.12 × 10<sup>−20</sup>/(4.14 × 10<sup>−21</sup> × 2.303) = 1.12/(4.14 × 2.303) ≈ 1.17',
          '<b>Step 3 — Find <i>I</i><sub>S</sub> from either point.</b><br><i>I</i><sub>S</sub> = <i>I</i><sub>1</sub>/(exp(<i>eV</i><sub>1</sub>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1)<br>Exponent: <i>eV</i><sub>1</sub>/(<i>nk</i><sub>B</sub><i>T</i>) = (1.6 × 10<sup>−19</sup> × 0.65)/(1.17 × 1.38 × 10<sup>−23</sup> × 300) = 1.04 × 10<sup>−19</sup>/(4.84 × 10<sup>−21</sup>) ≈ 21.5<br><i>e</i><sup>21.5</sup> ≈ 2.2 × 10<sup>9</sup><br><i>I</i><sub>S</sub> ≈ 1.0 × 10<sup>−3</sup>/(2.2 × 10<sup>9</sup>) ≈ 5 × 10<sup>−13</sup> A',
        ],
        ans: '<i>n</i> ≈ 1.17 (slightly above ideal, as expected for a real silicon junction), and <i>I</i><sub>S</sub> ≈ 5 × 10<sup>−13</sup> A. An ideal junction would have <i>n</i> = 1; <i>n</i> > 1 indicates recombination in the depletion region.',
      },
      {
        t: 'ex',
        tag: 'JEE Main/Advanced Level — Identifying Breakdown Type',
        q: 'A Zener diode has <i>V</i><sub>Z</sub> = 5.6 V at 25°C. At 75°C the same diode reads <i>V</i><sub>Z</sub> = 5.5 V. Identify whether this is Zener breakdown or avalanche breakdown. If the diode is used in a circuit where temperature rises, what will happen to the Zener voltage?',
        steps: [
          '<b>Step 1 — Calculate the temperature coefficient.</b><br>Δ<i>V</i><sub>Z</sub>/Δ<i>T</i> = (5.5 − 5.6)/(75 − 25) = −0.1/50 = −2 × 10<sup>−3</sup> V/°C = −2 mV/°C',
          '<b>Step 2 — Identify the mechanism.</b><br>• Zener: d<i>V</i><sub>Z</sub>/d<i>T</i> negative, threshold <i>V</i><sub>Z</sub> ≲ 5 V<br>• Avalanche: d<i>V</i><sub>Z</sub>/d<i>T</i> positive, threshold <i>V</i><sub>Z</sub> ≳ 7 V<br>The voltage is decreasing with increasing temperature. This is the <b>negative</b> temperature coefficient of <b>Zener breakdown</b> (tunnelling). However, <i>V</i><sub>Z</sub> = 5.6 V is also consistent with the boundary zone. The measured coefficient settles the question.',
          '<b>Step 3 — Practical implication.</b> If the circuit temperature rises, <i>V</i><sub>Z</sub> drops by about 2 mV per degree. A regulator that holds <i>V</i><sub>out</sub> at 5.6 V at 25°C will deliver about 5.5 V at 75°C — a small but measurable drift. High-precision regulators may require temperature compensation.',
        ],
        ans: 'This is Zener breakdown. The negative temperature coefficient is the diagnostic signature. Avalanche breakdown (positive coefficient, <i>V</i><sub>Z</sub> ≳ 7 V) would show the opposite trend.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A germanium diode (<i>E</i><sub>g</sub> ≈ 0.7 eV) carries 5 mA at 0.3 V at 300 K. Estimate its current at 330 K if voltage is unchanged (take <i>n</i> = 1).',
            a: 'Roughly 5.4×, approximately 27 mA.',
          },
          {
            q: '[JEE Main] At 300 K, a silicon diode has <i>I</i><sub>S</sub> = 10<sup>−12</sup> A and <i>n</i> = 1.2. Find the forward voltage at <i>I</i> = 1 mA.',
            a: '<i>V</i> ≈ 0.64 V.',
          },
          {
            q: '[JEE Advanced] A Zener diode has <i>V</i><sub>Z</sub> = 8.0 V at 20°C and <i>V</i><sub>Z</sub> = 8.2 V at 80°C. Calculate the temperature coefficient and state the breakdown mechanism.',
            a: '+3.3 mV/°C; avalanche breakdown.',
          },
          {
            q: '[JEE Advanced] Show that the voltage drop across a forward diode increases by approximately 60 mV (per decade) for <i>n</i> = 1, or 60<i>n</i> mV per decade of current, at 300 K. (Derive from Δ<i>V</i> = <i>nV</i><sub>T</sub> ln(<i>I</i><sub>2</sub>/<i>I</i><sub>1</sub>).)',
            a: 'Well above <i>I</i><sub>S</sub>, <i>I</i> ≈ <i>I</i><sub>S</sub> exp(<i>V</i>/(<i>nV</i><sub>T</sub>)), so <i>V</i> = <i>nV</i><sub>T</sub> ln(<i>I</i>/<i>I</i><sub>S</sub>) and, at fixed temperature, Δ<i>V</i> = <i>nV</i><sub>T</sub> ln(<i>I</i><sub>2</sub>/<i>I</i><sub>1</sub>). For one decade, <i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = 10: Δ<i>V</i> = <i>n</i> × 25.9 mV × 2.303 ≈ 59.6<i>n</i> mV ≈ 60<i>n</i> mV, i.e. about 60 mV per decade for <i>n</i> = 1.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 916–919 ─────────────────────────
  {
    n: 'B',
    title: 'Junction Capacitance and Diode Resistance',
    extra: true,
    kalam: 'In reverse bias the depletion region widens with voltage, so the stored charge Q changes with applied voltage.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter treats the depletion region as a barrier that only widens or narrows with bias, and the diode as a fixed voltage drop. It never mentions that the depletion region acts as a <b>capacitor</b> or that a forward-biased diode stores <b>diffusion capacitance</b>, and it defines the <b>dynamic resistance</b> <i>r</i><sub>d</sub> = Δ<i>V</i>/Δ<i>I</i> (Topic 02) without showing how the slope of the I-V curve gives <i>r</i><sub>d</sub> = <i>nV</i><sub>T</sub>/<i>I</i><sub>D</sub>, the value that replaces Ohm’s law for small-signal analysis. All three are JEE Advanced tools.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Depletion (junction) capacitance.</b> In reverse bias the depletion region widens with voltage, so the stored charge <i>Q</i> changes with applied voltage. This gives a capacitance:<br><i>C</i><sub>j</sub> = <i>εA</i>/<i>W</i><br>where <i>W</i> is the depletion width, <i>A</i> the junction area, and <i>ε</i> = <i>ε</i><sub>r</sub>ε<sub>0</sub> the semiconductor permittivity. For an abrupt junction (<i>V</i> = reverse-bias voltage):<br><i>W</i> = √[(2<i>ε</i>(<i>V</i><sub>b</sub> + <i>V</i>)/<i>e</i>)(1/<i>N</i><sub>A</sub> + 1/<i>N</i><sub>D</sub>)]<br>Differentiating <i>Q</i> = <i>eAN</i><sub>D</sub><i>W</i><sub>n</sub> (on the n-side, where <i>W</i><sub>n</sub> is the part of <i>W</i> in the n-region) or the equivalent on the p-side:<br><i>C</i><sub>j</sub> = d<i>Q</i>/d<i>V</i> = <i>εA</i>/<i>W</i> ∝ (<i>V</i><sub>b</sub> + <i>V</i>)<sup>−1/2</sup><br>The dependence on (<i>V</i><sub>b</sub> + <i>V</i>)<sup>−1/2</sup> is the experimental signature — measuring <i>C</i><sub>j</sub><sup>−2</sup> against <i>V</i> gives a straight line whose intercept gives <i>V</i><sub>b</sub> and whose slope gives the combination 1/<i>N</i><sub>A</sub> + 1/<i>N</i><sub>D</sub> (for a one-sided junction, the lighter doping).',
      },
      {
        t: 'p',
        html: '<b>Dynamic resistance.</b> From <i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1), differentiate:<br><i>r</i><sub>d</sub> = d<i>V</i>/d<i>I</i> = <i>nk</i><sub>B</sub><i>T</i>/(<i>eI</i><sub>D</sub>) = <i>nV</i><sub>T</sub>/<i>I</i><sub>D</sub><br>At 300 K with <i>n</i> = 1, <i>r</i><sub>d</sub> ≈ 26 mV/<i>I</i><sub>D</sub> (in mA) ≈ 26/<i>I</i><sub>D</sub> Ω. At <i>I</i><sub>D</sub> = 1 mA, <i>r</i><sub>d</sub> ≈ 26 Ω. At <i>I</i><sub>D</sub> = 10 mA, <i>r</i><sub>d</sub> ≈ 2.6 Ω. The dynamic resistance drops as current rises — the I-V curve gets steeper.',
      },
      {
        t: 'p',
        html: '<b>Diffusion capacitance (forward bias only).</b> In forward bias, minority carriers are injected across the junction and stored in the quasi-neutral regions. This stored charge <i>Q</i><sub>p</sub> ≈ <i>τI</i><sub>D</sub> (where <i>τ</i> is the carrier lifetime) gives an additional capacitance:<br><i>C</i><sub>d</sub> = d<i>Q</i>/d<i>V</i> = <i>τI</i><sub>D</sub>/<i>V</i><sub>T</sub> = <i>τeI</i><sub>D</sub>/(<i>k</i><sub>B</sub><i>T</i>) (for <i>n</i> = 1)<br>Diffusion capacitance dominates in forward bias (<i>C</i><sub>d</sub> ≫ <i>C</i><sub>j</sub>) and scales with current. In reverse bias it vanishes. This is why a forward-biased diode acts as a <b>charge store</b> — the physical basis of the LED’s turn-off delay and the diode’s reverse-recovery time.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Depletion Capacitance',
        q: 'A silicon p-n junction diode has area <i>A</i> = 10<sup>−6</sup> m<sup>2</sup>, permittivity <i>ε</i><sub>s</sub> = 11.7ε<sub>0</sub> = 1.04 × 10<sup>−10</sup> F/m, built-in potential <i>V</i><sub>b</sub> = 0.7 V, and is reverse-biased at <i>V</i><sub>R</sub> = 5 V. If the doping on both sides is equal (<i>N</i><sub>A</sub> = <i>N</i><sub>D</sub> = <i>N</i>), find the depletion capacitance per unit area and the total capacitance.',
        steps: [
          '<b>Step 1 — Find the depletion width.</b> For equal doping, <i>W</i> = √(4<i>ε</i>(<i>V</i><sub>b</sub> + <i>V</i><sub>R</sub>)/(<i>eN</i>)).<br>We need <i>N</i>. Use the built-in potential formula (from semiconductor physics):<br><i>V</i><sub>b</sub> = (<i>k</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>N</i><sub>A</sub><i>N</i><sub>D</sub>/<i>n</i><sub>i</sub><sup>2</sup>) = (2<i>k</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>N</i>/<i>n</i><sub>i</sub>)<br>For silicon at 300 K, <i>n</i><sub>i</sub> ≈ 1.5 × 10<sup>16</sup> m<sup>−3</sup>, <i>k</i><sub>B</sub><i>T</i>/<i>e</i> = 25.9 mV:<br>0.7 = 2 × 0.0259 ln(<i>N</i>/(1.5 × 10<sup>16</sup>))<br>ln(<i>N</i>/(1.5 × 10<sup>16</sup>)) = 0.7/0.0518 ≈ 13.5<br><i>N</i>/(1.5 × 10<sup>16</sup>) = <i>e</i><sup>13.5</sup> ≈ 7.3 × 10<sup>5</sup><br><i>N</i> ≈ 1.1 × 10<sup>22</sup> m<sup>−3</sup>',
          '<b>Step 2 — Calculate <i>W</i>.</b><br><i>W</i> = √[(4 × 1.04 × 10<sup>−10</sup> × (0.7 + 5))/(1.6 × 10<sup>−19</sup> × 1.1 × 10<sup>22</sup>)]<br>Numerator: 4 × 1.04 × 10<sup>−10</sup> × 5.7 = 2.37 × 10<sup>−9</sup><br>Denominator: 1.76 × 10<sup>3</sup><br><i>W</i> = √(2.37 × 10<sup>−9</sup>/(1.76 × 10<sup>3</sup>)) = √(1.35 × 10<sup>−12</sup>) = 1.16 × 10<sup>−6</sup> m = 1.16 μm',
          '<b>Step 3 — Capacitance per unit area and total.</b><br><i>C</i>′<sub>j</sub> = <i>ε</i>/<i>W</i> = 1.04 × 10<sup>−10</sup>/(1.16 × 10<sup>−6</sup>) = 8.97 × 10<sup>−5</sup> F/m<sup>2</sup><br><i>C</i><sub>j</sub> = <i>C</i>′<sub>j</sub> × <i>A</i> = 8.97 × 10<sup>−5</sup> × 10<sup>−6</sup> = 8.97 × 10<sup>−11</sup> F = 90 pF',
        ],
        ans: '<i>C</i><sub>j</sub> ≈ 90 pF. The depletion width (about 1 μm) is tiny, so the capacitance per unit area is large, yet the total is much smaller than the diffusion capacitance in forward bias.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Dynamic Resistance in a Zener Regulator',
        q: 'A Zener regulator uses <i>V</i><sub>Z</sub> = 10 V, input <i>V</i><sub>in</sub> = 15 V, series resistor <i>R</i><sub>S</sub> = 100 Ω, and load <i>R</i><sub>L</sub> = 500 Ω. (a) Find the Zener current <i>I</i><sub>Z</sub>. (b) A small load change reduces <i>R</i><sub>L</sub> to 400 Ω. Find the new <i>I</i><sub>Z</sub>, taking <i>V</i><sub>Z</sub> as constant. (c) Taking the Zener’s dynamic resistance as <i>r</i><sub>Z</sub> = 5 Ω, show that the output voltage change is much smaller than the current change, confirming regulation.',
        steps: [
          '<b>Part (a) — Original load.</b><br><i>I</i><sub>L</sub> = <i>V</i><sub>Z</sub>/<i>R</i><sub>L</sub> = 10/500 = 0.020 A<br><i>I</i><sub>in</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/<i>R</i><sub>S</sub> = 5/100 = 0.050 A<br><i>I</i><sub>Z</sub> = <i>I</i><sub>in</sub> − <i>I</i><sub>L</sub> = 0.050 − 0.020 = 0.030 A = 30 mA',
          '<b>Part (b) — New load <i>R</i><sub>L</sub> = 400 Ω.</b><br><i>I</i>′<sub>L</sub> = 10/400 = 0.025 A<br>Assuming <i>V</i><sub>Z</sub> stays approximately constant (the regulation assumption):<br><i>I</i>′<sub>in</sub> = (15 − 10)/100 = 0.050 A<br><i>I</i>′<sub>Z</sub> = 0.050 − 0.025 = 0.025 A = 25 mA',
          '<b>Part (c) — With dynamic resistance <i>r</i><sub>Z</sub> = 5 Ω (typical).</b> The dynamic resistance means <i>V</i><sub>Z</sub> actually changes a little: Δ<i>V</i><sub>Z</sub> = <i>r</i><sub>Z</sub>Δ<i>I</i><sub>Z</sub>.<br>Δ<i>I</i><sub>Z</sub> = 25 − 30 = −5 mA<br>Δ<i>V</i><sub>Z</sub> = <i>r</i><sub>Z</sub>Δ<i>I</i><sub>Z</sub> = 5 × (−5 × 10<sup>−3</sup>) = −0.025 V = −25 mV<br>So the output changes by only 25 mV, while the load current changed by 5 mA. The ratio Δ<i>V</i><sub>out</sub>/Δ<i>I</i><sub>Z</sub> = <i>r</i><sub>Z</sub> = 5 Ω (to first order) — the Zener presents a resistance of just 5 Ω to the load, damping voltage fluctuations far below what the raw current swing would suggest.',
        ],
        ans: 'Regulation works because <i>r</i><sub>Z</sub> ≪ <i>R</i><sub>S</sub> and <i>r</i><sub>Z</sub> ≪ <i>R</i><sub>L</sub>. The Zener absorbs the current fluctuation, and its small <i>r</i><sub>Z</sub> keeps the voltage essentially pinned.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Show that <i>C</i><sub>j</sub> ∝ (<i>V</i><sub>b</sub> + <i>V</i>)<sup>−1/2</sup> for a reverse-biased abrupt junction. If <i>C</i><sub>j</sub> = 50 pF at <i>V</i><sub>R</sub> = 2 V and <i>V</i><sub>b</sub> = 0.7 V, what is <i>C</i><sub>j</sub> at <i>V</i><sub>R</sub> = 8 V?',
            a: '≈ 28 pF, because <i>C</i> varies as 1/√(0.7 V + reverse voltage): <i>C</i> = 50 × √(2.7/8.7) ≈ 27.9 pF.',
          },
          {
            q: '[JEE Main] A diode at 300 K carries <i>I</i><sub>D</sub> = 5 mA with <i>n</i> = 1.2. Find its dynamic resistance <i>r</i><sub>d</sub>.',
            a: '<i>r</i><sub>d</sub> = 1.2 × 25.9/5 ≈ 6.2 Ω.',
          },
          {
            q: '[JEE Advanced] A p-n junction has doping <i>N</i><sub>A</sub> = 10<sup>18</sup> cm<sup>−3</sup> on the p-side and <i>N</i><sub>D</sub> = 10<sup>16</sup> cm<sup>−3</sup> on the n-side. Find the ratio of depletion width on the n-side to that on the p-side.',
            a: '<i>W</i><sub>n</sub>/<i>W</i><sub>p</sub> = <i>N</i><sub>A</sub>/<i>N</i><sub>D</sub> = 100.',
          },
        ],
      },
    ],
  },
];
