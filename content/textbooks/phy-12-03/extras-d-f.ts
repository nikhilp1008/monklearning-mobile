import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional Topics D to F, word for word from the Class 12
 * Physics Master Reference: D Advanced Potentiometry (pp. 245 to 248), E
 * Unbalanced Bridge and Galvanometer Current (pp. 248 to 251) and F
 * Non-Identical Cells: Maximum Power and Optimal Grouping (pp. 251 to 255).
 * Each addendum prints its own practice problems and answers, which are its
 * Practice part. These pages print no drawings. The book prints no answer
 * line under any of these worked examples: the results are in the working,
 * so every `ans` is empty.
 */
export const TOPICS: Topic[] = [
  {
    n: 'D',
    title: 'Advanced Potentiometry',
    extra: true,
    kalam:
      'Addendum D opens Topic 08’s potentiometer to two of its most useful applications: comparing resistances directly and finding a temperature coefficient from balance lengths.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 08 covers EMF comparison and internal resistance measurement. Two more applications are useful for JEE: comparing two resistances directly using the potentiometer, and finding the temperature coefficient of resistance of a wire from two balance lengths.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>D1 — Comparing two resistances using a potentiometer.</b><br>Principle: the potentiometer measures the potential difference across a resistor against its own uniform gradient. A steady current <i>I</i> is passed through the resistor from a separate secondary circuit (a cell and a rheostat), and the potential difference <i>V</i><sub><i>R</i></sub> = <i>IR</i> across the resistor is balanced on the potentiometer wire: at balance <i>V</i><sub><i>R</i></sub> = <i>kl</i>, where <i>l</i> is the balancing length for that resistor.<br><br>Procedure: connect the known resistance <i>R</i><sub>1</sub> and the unknown <i>R</i><sub>X</sub> in series in the secondary circuit, so that the same current <i>I</i> flows through both. Balance the potential difference across <i>R</i><sub>1</sub> at length <i>l</i><sub>1</sub>, so that <i>V</i><sub><i>R</i>₁</sub> = <i>IR</i><sub>1</sub> = <i>kl</i><sub>1</sub>. Then balance the potential difference across <i>R</i><sub>X</sub> at <i>l</i><sub>X</sub>, so that <i>V</i><sub><i>R</i><sub>X</sub></sub> = <i>IR</i><sub>X</sub> = <i>kl</i><sub>X</sub>. Since <i>k</i> and <i>I</i> are unchanged, dividing the two balance conditions gives<br><i>R</i><sub>X</sub>/<i>R</i><sub>1</sub> = <i>l</i><sub>X</sub>/<i>l</i><sub>1</sub> ⟹ <i>R</i><sub>X</sub> = <i>R</i><sub>1</sub>(<i>l</i><sub>X</sub>/<i>l</i><sub>1</sub>).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>R</i><sub>1</sub> in Ω, <i>l</i><sub>X</sub>/<i>l</i><sub>1</sub> dimensionless, so <i>R</i><sub>X</sub> in Ω. Correct.',
      },
      {
        t: 'p',
        html: '<b>D2 — Measuring the temperature coefficient using a potentiometer.</b><br>Principle: the potentiometer gives the ratio of a wire’s resistances at two temperatures directly from two balance lengths, with the same current through the wire each time.<br><br>Procedure: measure the resistance <i>R</i><sub>1</sub> of the wire at temperature <i>T</i><sub>1</sub> (say 0°C, in melting ice) using the method above. Heat the wire to a second known temperature <i>T</i><sub>2</sub> (for example 100°C in steam) and measure its resistance <i>R</i><sub>2</sub> the same way. The ratio <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> equals <i>l</i><sub>2</sub>/<i>l</i><sub>1</sub>.<br><br>From <i>R</i><sub>2</sub> = <i>R</i><sub>1</sub>[1 + <i>α</i>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)]:<br><i>α</i> = (<i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> − 1)/(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = (<i>l</i><sub>2</sub>/<i>l</i><sub>1</sub> − 1)/(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>).<br><br>The potentiometer supplies <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> with high accuracy, but the temperature difference <i>T</i><sub>2</sub> − <i>T</i><sub>1</sub> must still be known (a thermometer, or fixed points such as melting ice and steam).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Comparing Two Resistances',
        q: 'A potentiometer wire of 10 m has a total potential drop of 5.0 V. A known resistance <i>R</i><sub>1</sub> = 5 Ω and an unknown resistance <i>R</i><sub>X</sub> are connected in series in the secondary circuit. The potential difference across <i>R</i><sub>1</sub> balances at <i>l</i><sub>1</sub> = 40 cm, and that across <i>R</i><sub>X</sub> at <i>l</i><sub>2</sub> = 60 cm. Find <i>R</i><sub>X</sub>.',
        steps: [
          '<b>Potential gradient.</b> <i>k</i> = <i>V</i>/<i>L</i> = 5.0/10 = 0.5 V m<sup>−1</sup>.',
          '<b>Voltage across the resistor at balance.</b> <i>R</i><sub>1</sub> and <i>R</i><sub>X</sub> are connected in series with a cell and rheostat in the secondary circuit, and the potentiometer null-balances the voltage drop across each in turn: <i>V</i><sub><i>R</i></sub> = <i>kl</i>. Since <i>V</i><sub><i>R</i></sub> = <i>IR</i>, the secondary current at balance is <i>I</i> = <i>kl</i>/<i>R</i>.',
          'Because <i>R</i><sub>1</sub> and <i>R</i><sub>X</sub> are in series, the current <i>I</i> is the same for both measurements — it never needs to be found explicitly. Equating <i>I</i> from the two trials:<br><i>kl</i><sub>1</sub>/<i>R</i><sub>1</sub> = <i>kl</i><sub>2</sub>/<i>R</i><sub>X</sub> ⟹ <i>R</i><sub>X</sub> = <i>R</i><sub>1</sub>(<i>l</i><sub>2</sub>/<i>l</i><sub>1</sub>) = 5 × 60/40 = 7.5 Ω.',
          'The individual values of <i>k</i> and <i>I</i> cancel. (As a check, <i>I</i> = 0.5 × 0.40/5 = 0.04 A and 0.04 × 7.5 = 0.30 V = 0.5 × 0.60.)',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Measuring a Temperature Coefficient',
        q: 'A wire has resistance <i>R</i><sub>0</sub> at 0°C. With the same steady current through it each time, its potential difference is balanced on a potentiometer wire: the balance length is 50 cm at 0°C and 70 cm when the wire is held in steam at 100°C. Find the temperature coefficient of resistance <i>α</i> of the wire.',
        steps: [
          '<b>Ratio of resistances.</b> Because the current is the same, the balance lengths are proportional to the resistances:<br><i>R</i><sub>100</sub>/<i>R</i><sub>0</sub> = <i>l</i><sub>100</sub>/<i>l</i><sub>0</sub> = 70/50 = 1.4.',
          '<b>Temperature coefficient.</b> From <i>R</i><sub>100</sub> = <i>R</i><sub>0</sub>(1 + <i>α</i> × 100):<br>1 + 100<i>α</i> = 1.4 ⟹ <i>α</i> = 0.4/100 = 4 × 10<sup>−3</sup> °C<sup>−1</sup>.',
          'The temperature difference (100 °C, from the steam point) is essential: the balance lengths alone give only the ratio 1.4, not <i>α</i>.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A potentiometer with <i>k</i> = 0.02 V cm<sup>−1</sup> is used to compare two resistances. With <i>R</i><sub>1</sub> = 5 Ω, balance at <i>l</i><sub>1</sub> = 30 cm. With <i>R</i><sub>X</sub> (same current), balance at <i>l</i><sub>2</sub> = 45 cm. Find <i>R</i><sub>X</sub>.',
            a: '<i>R</i><sub>X</sub> = <i>R</i><sub>1</sub>(<i>l</i><sub>2</sub>/<i>l</i><sub>1</sub>) = 5 × (45/30) = 7.5 Ω.',
          },
          {
            q: '[JEE Main] A wire has resistance <i>R</i><sub>1</sub> = 8 Ω at 0°C and <i>R</i><sub>2</sub> = 11.2 Ω at 100°C. Find its temperature coefficient <i>α</i>.',
            a: '<i>R</i><sub>2</sub> = <i>R</i><sub>1</sub>(1 + <i>α</i> × 100). 11.2 = 8(1 + 100<i>α</i>) ⟹ 1 + 100<i>α</i> = 1.4 ⟹ <i>α</i> = 0.004 = 4 × 10<sup>−3</sup> °C<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] In a potentiometer setup, the primary circuit has a uniform wire <i>L</i> = 8 m with total resistance 16 Ω, driven by a 4 V source of negligible internal resistance. (a) Find the potential gradient <i>k</i>. (b) A 20 Ω resistor in the secondary circuit carries a steady current of 0.075 A, set by a cell and a rheostat. Find the balancing length for the potential difference across this resistor. (c) The 20 Ω resistor is replaced by an unknown resistor <i>R</i><sub>X</sub> with the same current through it, and balance is found at 150 cm. Find <i>R</i><sub>X</sub>.',
            a: '(a) Primary current <i>I</i> = 4/16 = 0.25 A. Wire resistance per metre = 16/8 = 2 Ω m<sup>−1</sup>. <i>k</i> = <i>I</i> × (resistance per metre) = 0.25 × 2 = 0.5 V m<sup>−1</sup>. (b) The potential difference across the resistor is <i>V</i><sub><i>R</i></sub> = 0.075 × 20 = 1.5 V, so the balancing length is <i>l</i> = <i>V</i><sub><i>R</i></sub>/<i>k</i> = 1.5/0.5 = 3 m = 300 cm. (c) The current is the same, so <i>R</i><sub>X</sub> = 20 × 150/300 = 10 Ω (check: <i>V</i> = 0.075 × 10 = 0.75 V = 0.5 × 1.5).',
          },
          {
            q: '[JEE Advanced] Explain why the potentiometer method for comparing resistances is more accurate than a Wheatstone bridge when one of the resistances is very small.',
            a: 'A very small resistance is comparable with the resistance of the connecting leads and contacts. In a Wheatstone bridge these are added to the arm, and the result is badly in error. In the potentiometer method the current flows through the resistor via one pair of leads, while its potential difference is balanced through a second pair of potential leads; at balance those carry no current, so lead and contact resistances do not enter. The potential difference is read as a balance length on a metre scale with good precision.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Unbalanced Bridge and Galvanometer Current',
    extra: true,
    kalam:
      'Addendum E takes the unbalanced bridge beyond the “check balance first” shortcut to the exact galvanometer current that determines sensitivity.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 07 and 08’s treatment of the Wheatstone bridge focuses on the balance condition and the simplification that follows when <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>. JEE Advanced regularly asks: when the bridge is NOT balanced, what current flows through the galvanometer? And how sensitive is the bridge to small imbalances?',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Setting up.</b> Use the labelling of Topic 07 (Figure 3.17): arms <i>P</i> = <i>AB</i>, <i>Q</i> = <i>BC</i>, <i>R</i> = <i>AD</i>, <i>S</i> = <i>DC</i>; the galvanometer <i>G</i> joins B and D; the source <i>E</i> (negligible internal resistance) is connected across A and C. The bridge is balanced when <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>, that is <i>PS</i> = <i>QR</i>.',
      },
      {
        t: 'p',
        html: '<b>Branch currents.</b> Let <i>I</i><sub>1</sub> flow through <i>P</i> (from A to B), <i>I</i><sub>2</sub> through <i>R</i> (from A to D), and <i>I</i><sub>g</sub> through the galvanometer from B to D. The junction rule at B and at D gives the other two arms:<br>• through <i>Q</i> (B to C): <i>I</i><sub>1</sub> − <i>I</i><sub>g</sub>;<br>• through <i>S</i> (D to C): <i>I</i><sub>2</sub> + <i>I</i><sub>g</sub>;<br>• through the source: <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Write KVL for three independent loops.</b><br>Loop 1 (source, <i>P</i>, <i>Q</i>):<br><i>E</i> − <i>I</i><sub>1</sub><i>P</i> − (<i>I</i><sub>1</sub> − <i>I</i><sub>g</sub>)<i>Q</i> = 0.     (1)<br>Loop 2 (source, <i>R</i>, <i>S</i>):<br><i>E</i> − <i>I</i><sub>2</sub><i>R</i> − (<i>I</i><sub>2</sub> + <i>I</i><sub>g</sub>)<i>S</i> = 0.     (2)<br>Loop 3 (A→B→D→A through <i>P</i>, <i>G</i>, <i>R</i>, no source):<br>−<i>I</i><sub>1</sub><i>P</i> − <i>I</i><sub>g</sub><i>G</i> + <i>I</i><sub>2</sub><i>R</i> = 0.     (3)<br>Three equations in the three unknowns <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>, <i>I</i><sub>g</sub>; solving them gives <i>I</i><sub>g</sub> directly.',
      },
      {
        t: 'p',
        html: '<b>Standard result for the galvanometer current.</b> The same answer comes more quickly by treating the galvanometer as a load on the rest of the circuit. With <i>G</i> removed, the potentials of B and D are <i>V</i><sub>B</sub> = <i>EQ</i>/(<i>P</i> + <i>Q</i>) and <i>V</i><sub>D</sub> = <i>ES</i>/(<i>R</i> + <i>S</i>) (taking C at 0), so the open-circuit voltage between them is<br><i>V</i><sub>B</sub> − <i>V</i><sub>D</sub> = <i>E</i>(<i>Q</i>/(<i>P</i> + <i>Q</i>) − <i>S</i>/(<i>R</i> + <i>S</i>)) = <i>E</i>(<i>QR</i> − <i>PS</i>)/((<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>)).<br>Looking back into B and D with the source replaced by a short, the two halves of the bridge are in series, so the equivalent resistance is <i>R</i><sub>equiv</sub> = <i>PQ</i>/(<i>P</i> + <i>Q</i>) + <i>RS</i>/(<i>R</i> + <i>S</i>). Then <i>I</i><sub>g</sub> = (<i>V</i><sub>B</sub> − <i>V</i><sub>D</sub>)/(<i>G</i> + <i>R</i><sub>equiv</sub>), which gives<br><i>I</i><sub>g</sub> = <i>E</i>(<i>QR</i> − <i>PS</i>)/[<i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) + <i>PQ</i>(<i>R</i> + <i>S</i>) + <i>RS</i>(<i>P</i> + <i>Q</i>)]     (positive from B to D).<br>The numerator vanishes exactly when <i>QR</i> = <i>PS</i>, the balance condition. The denominator has units Ω<sup>3</sup> and the numerator V Ω<sup>2</sup>, so <i>I</i><sub>g</sub> is in V/Ω = A.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Slightly Unbalanced Bridge',
        q: 'A Wheatstone bridge has <i>P</i> = <i>Q</i> = <i>R</i> = <i>S</i> = 10 Ω, and <i>G</i> = 20 Ω. The source is <i>E</i> = 6 V. Find the galvanometer current. Then change <i>S</i> to 11 Ω and find the new <i>I</i><sub>g</sub>.',
        steps: [
          '<b>Balanced case.</b> When all four arms are equal, <i>QR</i> = <i>PS</i>, so <i>I</i><sub>g</sub> = 0.',
          '<b>Unbalanced case:</b> <i>S</i> = 11 Ω. Let <i>P</i> = <i>Q</i> = <i>R</i> = 10 Ω, <i>S</i> = 11 Ω, <i>G</i> = 20 Ω.',
          'Numerator: <i>E</i>(<i>QR</i> − <i>PS</i>) = 6(10 × 10 − 10 × 11) = 6(100 − 110) = −60 V Ω<sup>2</sup>.',
          'Denominator terms: (<i>P</i> + <i>Q</i>) = 20 Ω, (<i>R</i> + <i>S</i>) = 21 Ω.<br><i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) = 20 × 20 × 21 = 8400 Ω<sup>3</sup>.<br><i>PQ</i>(<i>R</i> + <i>S</i>) = 100 × 21 = 2100 Ω<sup>3</sup>.<br><i>RS</i>(<i>P</i> + <i>Q</i>) = 110 × 20 = 2200 Ω<sup>3</sup>.<br>Denominator total: 8400 + 2100 + 2200 = 12700 Ω<sup>3</sup>.',
          '<i>I</i><sub>g</sub> = −60/12700 ≈ −4.72 × 10<sup>−3</sup> A = −4.72 mA.',
          'The negative sign means the current flows opposite to the assumed direction, from D to B through the galvanometer.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Bridge Sensitivity',
        q: 'For a bridge that is balanced with all four arms equal to <i>R</i><sub>0</sub> and then slightly unbalanced by raising <i>S</i> to <i>R</i><sub>0</sub>(1 + <i>δ</i>), with |<i>δ</i>| ≪ 1, find the galvanometer current and show that it is proportional to <i>δ</i>.',
        steps: [
          '<b>Open-circuit voltage.</b> With <i>P</i> = <i>Q</i> = <i>R</i> = <i>R</i><sub>0</sub> and <i>S</i> = <i>R</i><sub>0</sub>(1 + <i>δ</i>):<br><i>V</i><sub>B</sub> − <i>V</i><sub>D</sub> = <i>E</i>(1/2 − (1 + <i>δ</i>)/(2 + <i>δ</i>)) = −<i>Eδ</i>/(2(2 + <i>δ</i>)) ≈ −<i>Eδ</i>/4.',
          '<b>Equivalent resistance seen by the galvanometer.</b><br><i>R</i><sub>equiv</sub> = <i>R</i><sub>0</sub>/2 + <i>R</i><sub>0</sub>(1 + <i>δ</i>)/(2 + <i>δ</i>) ≈ <i>R</i><sub>0</sub>.',
          '<b>Galvanometer current.</b><br><i>I</i><sub>g</sub> = (<i>V</i><sub>B</sub> − <i>V</i><sub>D</sub>)/(<i>G</i> + <i>R</i><sub>equiv</sub>) ≈ −<i>Eδ</i>/(4(<i>G</i> + <i>R</i><sub>0</sub>)).',
          'The current is proportional to <i>δ</i>; the minus sign says it flows from D to B when <i>S</i> is increased.',
          '<b>Sensitivity.</b> The galvanometer current per unit fractional imbalance is<br>|d<i>I</i><sub>g</sub>/d<i>δ</i>| ≈ <i>E</i>/(4(<i>G</i> + <i>R</i><sub>0</sub>)),<br>which has units of current (A). For a galvanometer of high resistance, <i>G</i> ≫ <i>R</i><sub>0</sub>, this reduces to <i>E</i>/(4<i>G</i>). A larger <i>E</i> increases the current for a given <i>δ</i>, and a smaller <i>G</i> also increases it; the form <i>E</i>/(4<i>G</i>) is valid only for <i>G</i> ≫ <i>R</i><sub>0</sub>.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A bridge has <i>P</i> = <i>Q</i> = 5 Ω, <i>R</i> = 6 Ω, <i>S</i> = 4 Ω, <i>G</i> = 10 Ω, <i>E</i> = 4 V. Find <i>I</i><sub>g</sub> and its direction.',
            a: 'Numerator: <i>E</i>(<i>QR</i> − <i>PS</i>) = 4(5 × 6 − 5 × 4) = 4(30 − 20) = 40 V Ω<sup>2</sup>. Denominator: <i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) + <i>PQ</i>(<i>R</i> + <i>S</i>) + <i>RS</i>(<i>P</i> + <i>Q</i>) = 10(10)(10) + 25(10) + 24(10) = 1000 + 250 + 240 = 1490 Ω<sup>3</sup>. <i>I</i><sub>g</sub> = 40/1490 ≈ 26.8 mA. It is positive, so it flows from B to D (check: <i>QR</i> > <i>PS</i> makes <i>V</i><sub>B</sub> > <i>V</i><sub>D</sub>).',
          },
          {
            q: '[JEE Main] In an unbalanced bridge, <i>P</i> = 8 Ω, <i>Q</i> = 12 Ω, <i>R</i> = 6 Ω, <i>S</i> = 8 Ω, <i>G</i> = 20 Ω, <i>E</i> = 3 V. Find the galvanometer current and state its direction.',
            a: '<i>QR</i> − <i>PS</i> = 12 × 6 − 8 × 8 = 72 − 64 = 8. Numerator = 3 × 8 = 24 V Ω<sup>2</sup>. (<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) = 20 × 14 = 280, so <i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) = 20 × 280 = 5600; <i>PQ</i>(<i>R</i> + <i>S</i>) = 96 × 14 = 1344; <i>RS</i>(<i>P</i> + <i>Q</i>) = 48 × 20 = 960. Denominator = 5600 + 1344 + 960 = 7904 Ω<sup>3</sup>. <i>I</i><sub>g</sub> = 24/7904 ≈ 3.04 mA from B to D.',
          },
          {
            q: '[JEE Advanced] A bridge with <i>P</i> = <i>Q</i> = <i>R</i> = <i>S</i> = 100 Ω is balanced; <i>G</i> = 50 Ω and <i>E</i> = 2 V. The resistance <i>S</i> is then increased by 1%. Find <i>I</i><sub>g</sub> and compare it with the small-imbalance formula of worked example 2.',
            a: 'Take <i>S</i> = 101 Ω. <i>QR</i> − <i>PS</i> = 100 × 100 − 100 × 101 = −100 Ω<sup>2</sup>, so the numerator is 2 × (−100) = −200 V Ω<sup>2</sup>. Denominator: <i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) = 50 × 200 × 201 = 2.010 × 10<sup>6</sup>; <i>PQ</i>(<i>R</i> + <i>S</i>) = 10<sup>4</sup> × 201 = 2.010 × 10<sup>6</sup>; <i>RS</i>(<i>P</i> + <i>Q</i>) = 10<sup>4</sup> × 1.01 × 200 = 2.020 × 10<sup>6</sup>; total 6.04 × 10<sup>6</sup> Ω<sup>3</sup>. <i>I</i><sub>g</sub> = −200/(6.04 × 10<sup>6</sup>) ≈ −3.31 × 10<sup>−5</sup> A = −33.1 μA (D to B). The small-imbalance formula gives −<i>Eδ</i>/(4(<i>G</i> + <i>R</i><sub>0</sub>)) = −2(0.01)/(4(150)) = −33.3 μA, in agreement.',
          },
          {
            q: '[JEE Advanced] For a bridge balanced with all four arms equal to <i>R</i><sub>0</sub> and a galvanometer of resistance <i>G</i>, show that a small increase Δ<i>S</i> in one arm produces a galvanometer current |<i>I</i><sub>g</sub>| ≈ <i>E</i>Δ<i>S</i>/(4<i>R</i><sub>0</sub>(<i>G</i> + <i>R</i><sub>0</sub>)). Hence find the Δ<i>S</i> that produces 10 μA when <i>R</i><sub>0</sub> = 100 Ω, <i>G</i> = 100 Ω and <i>E</i> = 3 V.',
            a: 'With <i>P</i> = <i>Q</i> = <i>R</i> = <i>R</i><sub>0</sub> and <i>S</i> = <i>R</i><sub>0</sub> + Δ<i>S</i>: <i>V</i><sub>B</sub> − <i>V</i><sub>D</sub> = <i>E</i>(1/2 − (<i>R</i><sub>0</sub> + Δ<i>S</i>)/(2<i>R</i><sub>0</sub> + Δ<i>S</i>)) ≈ −<i>E</i>Δ<i>S</i>/(4<i>R</i><sub>0</sub>) and <i>R</i><sub>equiv</sub> ≈ <i>R</i><sub>0</sub>, so |<i>I</i><sub>g</sub>| ≈ <i>E</i>Δ<i>S</i>/(4<i>R</i><sub>0</sub>(<i>G</i> + <i>R</i><sub>0</sub>)). For 10 μA:<br>Δ<i>S</i> = <i>I</i><sub>g</sub> · 4<i>R</i><sub>0</sub>(<i>G</i> + <i>R</i><sub>0</sub>)/<i>E</i> = (10 × 10<sup>−6</sup> × 4 × 100 × 200)/3 Ω ≈ 0.27 Ω.',
          },
        ],
      },
    ],
  },

  {
    n: 'F',
    title: 'Non-Identical Cells: Maximum Power and Optimal Grouping',
    extra: true,
    kalam:
      'Addendum F returns to Topic 06’s cell grouping and shows how to maximise power into a load when the cells are non-identical.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 06 covers optimal grouping of identical cells. In JEE Advanced, cells are often non-identical — different EMFs and different internal resistances — and you must decide not just how many in series per row but also which cells go together, to maximise power delivered to the load.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>General principle for maximum power transfer from a battery pack to a load <i>R</i><sub>L</sub>.</b><br>A battery pack consists of <i>n</i> cells, each with EMF <i>E</i><sub><i>i</i></sub> and internal resistance <i>r</i><sub><i>i</i></sub>. The pack is arranged in some series-parallel configuration, giving an equivalent EMF <i>E</i><sub>eq</sub> and equivalent internal resistance <i>r</i><sub>eq</sub>. For a given pack, the power delivered to a load that can be varied is largest when <i>R</i><sub>L</sub> = <i>r</i><sub>eq</sub>, and the maximum power is <i>P</i><sub>max</sub> = <i>E</i><sub>eq</sub><sup>2</sup>/(4<i>r</i><sub>eq</sub>).',
      },
      {
        t: 'p',
        html: '<b>Optimal grouping of non-identical cells.</b> This is more subtle than the identical-cell case. The optimal arrangement depends on the load.<br><br><b>Strategy 1 — Find <i>E</i><sub>eq</sub> and <i>r</i><sub>eq</sub> for each possible configuration, then compare <i>P</i> = <i>E</i><sub>eq</sub><sup>2</sup><i>R</i><sub>L</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>)<sup>2</sup>.</b><br><br><b>Strategy 2 — For a fixed load <i>R</i><sub>L</sub>, maximise the load current.</b> Since <i>P</i> = <i>I</i><sup>2</sup><i>R</i><sub>L</sub> with <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>), the best grouping is the one that maximises <i>E</i><sub>eq</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>). The quantity <i>E</i><sub>eq</sub><sup>2</sup>/<i>r</i><sub>eq</sub> is the right figure of merit only when the load can be chosen to match <i>r</i><sub>eq</sub>; for a fixed load it can rank the groupings wrongly.',
      },
      {
        t: 'p',
        html: '<b>Key result for two non-identical cells.</b> Consider two cells with (<i>E</i><sub>1</sub>, <i>r</i><sub>1</sub>) and (<i>E</i><sub>2</sub>, <i>r</i><sub>2</sub>).<br>• <b>Series aiding:</b> <i>E</i><sub>eq</sub> = <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>, <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>. Power to <i>R</i><sub>L</sub>: <i>P</i><sub>series</sub> = (<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>)<sup>2</sup><i>R</i><sub>L</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>)<sup>2</sup>.<br>• <b>Parallel:</b> the equivalent EMF is weighted by conductances: <i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub>/<i>r</i><sub>1</sub> + <i>E</i><sub>2</sub>/<i>r</i><sub>2</sub>)/(1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>), and 1/<i>r</i><sub>eq</sub> = 1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>. Power to <i>R</i><sub>L</sub>: <i>P</i><sub>parallel</sub> = <i>E</i><sub>eq</sub><sup>2</sup><i>R</i><sub>L</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>)<sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Comparison:</b> for a given load <i>R</i><sub>L</sub>, compute both and pick the larger. For maximum power transfer (<i>R</i><sub>L</sub> variable), match <i>r</i><sub>eq</sub> to <i>R</i><sub>L</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Two Non-Identical Cells: Series vs Parallel',
        q: 'Two cells: <i>E</i><sub>1</sub> = 6 V, <i>r</i><sub>1</sub> = 1 Ω; <i>E</i><sub>2</sub> = 4 V, <i>r</i><sub>2</sub> = 1 Ω. Drive a load <i>R</i><sub>L</sub> = 2 Ω. Find the power delivered in (a) series and (b) parallel configuration.',
        steps: [
          '(a) Series: <i>E</i><sub>eq</sub> = 6 + 4 = 10 V, <i>r</i><sub>eq</sub> = 1 + 1 = 2 Ω.<br><i>P</i><sub>series</sub> = <i>E</i><sub>eq</sub><sup>2</sup><i>R</i><sub>L</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>)<sup>2</sup> = (10<sup>2</sup> × 2)/(2 + 2)<sup>2</sup> = 200/16 = 12.5 W.',
          '(b) Parallel: 1/<i>r</i><sub>eq</sub> = 1/1 + 1/1 = 2, so <i>r</i><sub>eq</sub> = 0.5 Ω.',
          'Equivalent EMF: <i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub>/<i>r</i><sub>1</sub> + <i>E</i><sub>2</sub>/<i>r</i><sub>2</sub>)/(1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>) = (6 + 4)/(1 + 1) = 5 V.<br><i>P</i><sub>parallel</sub> = (5<sup>2</sup> × 2)/(2 + 0.5)<sup>2</sup> = 50/6.25 = 8 W.',
          'Series gives more power (12.5 W > 8 W). This is expected: series doubles the EMF (10 V against 5 V), which outweighs its larger internal resistance for this load.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Optimal Mixed Grouping with Non-Identical Cells',
        q: 'Three cells: <i>E</i><sub>1</sub> = 4 V, <i>r</i><sub>1</sub> = 1 Ω; <i>E</i><sub>2</sub> = 2 V, <i>r</i><sub>2</sub> = 1 Ω; <i>E</i><sub>3</sub> = 2 V, <i>r</i><sub>3</sub> = 1 Ω. Drive a load <i>R</i><sub>L</sub> = 2 Ω. Find the arrangement that maximises power to the load.',
        steps: [
          'All series-parallel groupings of three cells must be considered. For each, compute <i>E</i><sub>eq</sub>, <i>r</i><sub>eq</sub> and then <i>P</i> = <i>E</i><sub>eq</sub><sup>2</sup><i>R</i><sub>L</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>)<sup>2</sup>.',
          '<b>Option 1 — All three in series.</b> <i>E</i><sub>eq</sub> = 8 V, <i>r</i><sub>eq</sub> = 3 Ω.<br><i>P</i><sub>1</sub> = (64 × 2)/(2 + 3)<sup>2</sup> = 128/25 = 5.12 W.',
          '<b>Option 2 — The 4 V and one 2 V cell in series, in parallel with the other 2 V cell.</b> The series pair: <i>E</i><sub>12</sub> = 6 V, <i>r</i><sub>12</sub> = 2 Ω. In parallel with the third cell:<br><i>r</i><sub>eq</sub> = (2 × 1)/(2 + 1) = 2/3 Ω ≈ 0.67 Ω,     <i>E</i><sub>eq</sub> = (6/2 + 2/1)/(1/2 + 1/1) = 5/1.5 = 10/3 V ≈ 3.33 V.<br><i>P</i><sub>2</sub> = ((10/3)<sup>2</sup> × 2)/(2 + 2/3)<sup>2</sup> = (200/9)/(64/9) = 3.125 W.',
          '<b>Option 3 — All three in parallel.</b> 1/<i>r</i><sub>eq</sub> = 3, so <i>r</i><sub>eq</sub> = 1/3 Ω, and <i>E</i><sub>eq</sub> = (4 + 2 + 2)/3 = 8/3 V.<br><i>P</i><sub>3</sub> = ((8/3)<sup>2</sup> × 2)/(2 + 1/3)<sup>2</sup> = (128/9)/(49/9) = 128/49 ≈ 2.61 W.',
          '<b>Option 4 — The 4 V cell in series with the two 2 V cells connected in parallel.</b> The parallel pair of identical 2 V, 1 Ω cells is a 2 V, 0.5 Ω source. In series with the 4 V cell:<br><i>E</i><sub>eq</sub> = 4 + 2 = 6 V,     <i>r</i><sub>eq</sub> = 1 + 0.5 = 1.5 Ω.<br><i>P</i><sub>4</sub> = (6<sup>2</sup> × 2)/(2 + 1.5)<sup>2</sup> = 72/12.25 ≈ 5.88 W.',
          '<b>Best option.</b> The remaining groupings (the two 2 V cells in series, in parallel with the 4 V cell: 4.5 W; a 2 V cell in series with the parallel pair of the other two cells: 4.08 W) give less. Option 4 delivers the most, ≈ 5.88 W, more than all three cells in series (5.12 W). Putting the two weaker cells in parallel cuts their internal resistance from 2 Ω to 0.5 Ω at the cost of 2 V of EMF; for this load the lower resistance wins: <i>I</i> = 6/3.5 ≈ 1.71 A against 8/5 = 1.6 A for all three in series.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Two cells: <i>E</i><sub>1</sub> = 8 V, <i>r</i><sub>1</sub> = 2 Ω; <i>E</i><sub>2</sub> = 4 V, <i>r</i><sub>2</sub> = 2 Ω. (a) Find the power to <i>R</i> = 4 Ω in series and parallel. (b) Find the load <i>R</i> that maximises power in each configuration.',
            a: '(a) Series: <i>E</i><sub>eq</sub> = 12 V, <i>r</i><sub>eq</sub> = 4 Ω. <i>P</i> = 12<sup>2</sup> × 4/(8<sup>2</sup>) = 144 × 4/64 = 9 W. Parallel: <i>E</i><sub>eq</sub> = (8/2 + 4/2)/(1/2 + 1/2) = 6 V, <i>r</i><sub>eq</sub> = 1 Ω. <i>P</i> = 36 × 4/25 = 144/25 = 5.76 W.<br>(b) Series: <i>R</i> = <i>r</i><sub>eq</sub> = 4 Ω gives <i>P</i><sub>max</sub> = 12<sup>2</sup>/(4 × 4) = 144/16 = 9 W. Parallel: <i>R</i> = <i>r</i><sub>eq</sub> = 1 Ω gives <i>P</i><sub>max</sub> = 6<sup>2</sup>/(4 × 1) = 36/4 = 9 W. Both give the same maximum power when matched, but the matched resistance differs.',
          },
          {
            q: '[JEE Main] Three identical cells, each 2 V, 1 Ω, are arranged to drive <i>R</i> = 2 Ω. Find the maximum power and the arrangement.',
            a: 'Four arrangements are possible for 3 identical cells (<i>E</i> = 2 V, <i>r</i> = 1 Ω each). The fourth, a parallel pair of cells in series with the third, has <i>E</i><sub>eq</sub> = 4 V, <i>r</i><sub>eq</sub> = 1.5 Ω and gives <i>P</i> = 16 × 2/(3.5)<sup>2</sup> ≈ 2.61 W.<br><b>All series:</b> <i>E</i><sub>eq</sub> = 6 V, <i>r</i><sub>eq</sub> = 3 Ω. <i>P</i> = <i>E</i><sub>eq</sub><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i><sub>eq</sub>)<sup>2</sup> = 36 × 2/5<sup>2</sup> = 72/25 = 2.88 W.<br><b>All parallel:</b> <i>E</i><sub>eq</sub> = 2 V, <i>r</i><sub>eq</sub> = 1/3 Ω. <i>P</i> = 4 × 2/(2 + 1/3)<sup>2</sup> = 8/(7/3)<sup>2</sup> = 72/49 ≈ 1.47 W.<br><b>Mixed (2 in series, that branch in parallel with the 3rd cell):</b> the series pair gives (4 V, 2 Ω); combining with the single cell (2 V, 1 Ω):<br><i>E</i><sub>eq</sub> = (4/2 + 2/1)/(1/2 + 1/1) = 4/1.5 = 8/3 V,     <i>r</i><sub>eq</sub> = 1/(1/2 + 1/1) = 2/3 Ω.<br><i>P</i> = ((8/3)<sup>2</sup> × 2)/(2 + 2/3)<sup>2</sup> = ((8/3)<sup>2</sup> × 2)/(8/3)<sup>2</sup> = 2 W.<br>Comparing all four (2.88 > 2.61 > 2 > 1.47 W): the all-series arrangement delivers the most power to <i>R</i> = 2 Ω, giving <i>P</i><sub>max</sub> = 2.88 W.',
          },
          {
            q: '[JEE Advanced] Two cells with different EMFs <i>E</i><sub>1</sub> > <i>E</i><sub>2</sub> and equal internal resistances <i>r</i> are connected in parallel across a load <i>R</i>. Show that the parallel pair delivers less power to the load than the stronger cell alone exactly when <i>R</i> > <i>E</i><sub>2</sub><i>r</i>/(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>).',
            a: 'The parallel pair has <i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>)/2 and <i>r</i><sub>eq</sub> = <i>r</i>/2; the stronger cell alone has <i>E</i><sub>1</sub> and <i>r</i>. For the same load the power is proportional to the square of the current, so compare the currents. The parallel pair delivers less when<br>((<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>)/2)/(<i>R</i> + <i>r</i>/2) < <i>E</i><sub>1</sub>/(<i>R</i> + <i>r</i>) ⟺ (<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>)(<i>R</i> + <i>r</i>) < 2<i>E</i><sub>1</sub><i>R</i> + <i>E</i><sub>1</sub><i>r</i><br>⟺ <i>E</i><sub>2</sub>(<i>R</i> + <i>r</i>) < <i>E</i><sub>1</sub><i>R</i><br>⟺ <i>R</i> > <i>E</i><sub>2</sub><i>r</i>/(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>).<br>For a smaller load the parallel pair is the better source. Example: <i>E</i><sub>1</sub> = 2 V, <i>E</i><sub>2</sub> = 1.9 V, <i>r</i> = 1 Ω gives the threshold 19 Ω; at <i>R</i> = 0.1 Ω the pair delivers 1.95<sup>2</sup> × 0.1/0.6<sup>2</sup> ≈ 1.06 W against 2<sup>2</sup> × 0.1/1.1<sup>2</sup> ≈ 0.33 W for the stronger cell alone.',
          },
          {
            q: '[JEE Advanced] Four cells: two of <i>E</i> = 4 V, <i>r</i> = 1 Ω; two of <i>E</i> = 2 V, <i>r</i> = 1 Ω. Drive <i>R</i> = 2 Ω. Find the optimal arrangement and the maximum power.',
            a: 'The cells are two of (4 V, 1 Ω) and two of (2 V, 1 Ω). Checking the possible groupings, the best is: the two 4 V cells in series (8 V, 2 Ω), in series with the two 2 V cells in parallel (2 V, 0.5 Ω). Then <i>E</i><sub>eq</sub> = 10 V and <i>r</i><sub>eq</sub> = 2.5 Ω, giving <i>P</i> = (10<sup>2</sup> × 2)/(2 + 2.5)<sup>2</sup> = 200/20.25 = 800/81 ≈ 9.88 W. For comparison, all four in series (12 V, 4 Ω) gives 8 W, and the other natural groupings, which give (6 V, 1 Ω), also give 8 W.',
          },
          {
            q: '[JEE Advanced] Two cells (<i>E</i><sub>1</sub>, <i>r</i><sub>1</sub>) and (<i>E</i><sub>2</sub>, <i>r</i><sub>2</sub>) with <i>E</i><sub>1</sub> > <i>E</i><sub>2</sub> are connected in parallel across a load <i>R</i>. Show that the weaker cell is being charged (current flows into its positive terminal) when <i>R</i> > <i>E</i><sub>2</sub><i>r</i><sub>1</sub>/(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>), and explain why this wastes energy.',
            a: 'Let <i>V</i> be the common terminal voltage across the load. The current delivered by cell <i>i</i> is <i>I</i><sub><i>i</i></sub> = (<i>E</i><sub><i>i</i></sub> − <i>V</i>)/<i>r</i><sub><i>i</i></sub>. The weaker cell is charged when <i>I</i><sub>2</sub> < 0, that is when <i>V</i> > <i>E</i><sub>2</sub>. The load current is <i>V</i>/<i>R</i> and equals <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>, so<br><i>V</i>/<i>R</i> = (<i>E</i><sub>1</sub> − <i>V</i>)/<i>r</i><sub>1</sub> + (<i>E</i><sub>2</sub> − <i>V</i>)/<i>r</i><sub>2</sub> ⟹ <i>V</i> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)<i>R</i>/(<i>r</i><sub>1</sub><i>r</i><sub>2</sub> + <i>R</i>(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>)).<br>Then <i>V</i> > <i>E</i><sub>2</sub> gives <i>E</i><sub>1</sub><i>r</i><sub>2</sub><i>R</i> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub><i>R</i> > <i>E</i><sub>2</sub><i>r</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>R</i>(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>), which simplifies to <i>R</i>(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>) > <i>E</i><sub>2</sub><i>r</i><sub>1</sub>, that is <i>R</i> > <i>E</i><sub>2</sub><i>r</i><sub>1</sub>/(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>). A high-resistance load draws little current, so the stronger cell pushes current backwards through the weaker one. That current wastes energy as heat in both internal resistances and is stored in the weaker cell instead of reaching the load, so (for equal internal resistances) the pair delivers less power than the stronger cell alone, as in practice question 3.',
          },
        ],
      },
    ],
  },
];
